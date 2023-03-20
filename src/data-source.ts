import { Task } from './entity/Task';
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: String(process.env.PG_HOST),
    port: Number(process.env.PG_PORT),
    username: String(process.env.PG_USER),
    password: String(process.env.PG_PASS),
    database: String(process.env.PG_DB),
    synchronize: true,
    logging: false,
    entities: [Task],
    migrations: [],
    subscribers: [],
})