import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "guang",
    database: "practice",
    synchronize: true,
    entities: ['./**/entity/*.ts'],
    migrations: [],
    subscribers: [],
    connectorPackage: 'mysql2',
    extra: {
        authPlugin: 'sha256_password',
    }
})

