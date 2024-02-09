export function getTotalTips(req, res) {
    const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    res.json(randomNumber);
}

export function getTotalMoney(req, res) {
    const randomNumber = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
    res.json(randomNumber);
}
