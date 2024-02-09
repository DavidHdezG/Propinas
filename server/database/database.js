import Sequelize from 'sequelize';

export const sequelize = new Sequelize('postgres://postgres.edlircedaxcyjdbutsty:EvVBOWOdzOczs2et@aws-0-us-west-1.pooler.supabase.com:5432/postgres',{
    dialect: 'postgres',
})

