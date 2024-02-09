
import { TipPayment } from "../models/TipPayment.js";

export async function createTipPayment(req, res) {
    const { totalTips, tipDivision, payList } = req.body;
    try {
        const newTipPayment = await TipPayment.create({
            totalTips,
            tipDivision,
            payList
        },
            {
                fields: ['totalTips', 'tipDivision', 'payList']
            });
        const invoice = await getInvoice(totalTips, tipDivision, payList);
        return res.status(201).send(invoice);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function getTipPayments(req, res) {
    try {
        const tipPayments = await TipPayment.findAll();
        return res.status(200).json(tipPayments);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function getTipPayment(req, res) {
    const { id } = req.params;
    try {
        const tipPayment = await TipPayment.findOne({
            where: {
                id
            }
        });
        return res.status(200).json(tipPayment);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

function getInvoiceHTML(totalTips, tipDivision, payList) {
    const today = new Date();
    let html = `
    <!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Recibo</title>

		<style>
			.invoice-box {
				max-width: 800px;
				margin: auto;
				padding: 30px;
				border: 1px solid #eee;
				box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
				font-size: 16px;
				line-height: 24px;
				font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
				color: #555;
			}

			.invoice-box table {
				width: 100%;
				line-height: inherit;
				text-align: left;
			}

			.invoice-box table td {
				padding: 5px;
				vertical-align: top;
			}

			.invoice-box table tr td:nth-child(2) {
				text-align: right;
			}

			.invoice-box table tr.top table td {
				padding-bottom: 20px;
			}

			.invoice-box table tr.top table td.title {
				font-size: 45px;
				line-height: 45px;
				color: #333;
			}

			.invoice-box table tr.information table td {
				padding-bottom: 40px;
			}

			.invoice-box table tr.heading td {
				background: #eee;
				border-bottom: 1px solid #ddd;
				font-weight: bold;
			}

			.invoice-box table tr.details td {
				padding-bottom: 20px;
			}

			.invoice-box table tr.item td {
				border-bottom: 1px solid #eee;
			}

			.invoice-box table tr.item.last td {
				border-bottom: none;
			}

			.invoice-box table tr.total td:nth-child(2) {
				border-top: 2px solid #eee;
				font-weight: bold;
			}

			@media only screen and (max-width: 600px) {
				.invoice-box table tr.top table td {
					width: 100%;
					display: block;
					text-align: center;
				}

				.invoice-box table tr.information table td {
					width: 100%;
					display: block;
					text-align: center;
				}
			}

			/** RTL **/
			.invoice-box.rtl {
				direction: rtl;
				font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
			}

			.invoice-box.rtl table {
				text-align: right;
			}

			.invoice-box.rtl table tr td:nth-child(2) {
				text-align: left;
			}
		</style>
	</head>

	<body>
		<div class="invoice-box">
			<table cellpadding="0" cellspacing="0">
				<tr class="top">
					<td colspan="2">
						<table>
							<tr>
                                <td class="title">
									Recibo de Propinas
								</td>
								<td>
									Recibo #: ${Math.floor(Math.random() * (1000 - 100 + 1))}<br />
									Creado: ${today.toLocaleDateString()}<br />
								</td>
							</tr>
						</table>
					</td>
				</tr>

				<tr class="heading">
					<td>Método de Pago</td>

					<td>Cantidad #</td>
				</tr>

				${getPayListHTML(payList)}

				<tr class="heading">
					<td>Empleados en que se dividió</td>

					<td>Total</td>
				</tr>

				<tr class="item">
					<td>${tipDivision?tipDivision:'0'}</td>

					<td>${format(totalTips)}</td>
				</tr>

			</table>
		</div>
	</body>
</html>
    `;
    return html;
}

function getPayListHTML(list) {
    let html = `
    `;
    const payList = JSON.parse(list);
    payList.forEach(pay => {
        html += `
        <tr class="details">
					<td>${pay.paymentMethod}</td>

					<td>${format(pay.amount)}</td>
                    
				</tr>
        `;
    });
    return html;
}

async function getInvoice(totalTips, tipDivision, payList){
    return new Promise(async (resolve,reject) => {
        try{
            const invoice = getInvoiceHTML(totalTips, tipDivision, payList);
            resolve(invoice);
        }
        catch(error){
            reject(error);
        }
    });
}
function format(item){
    return `$${parseInt(item).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
}