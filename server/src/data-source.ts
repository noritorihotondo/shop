import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

const DB_USERNAME = process.env.DB_USERNAME || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || 'root';
const DB_DATABASE = process.env.DB_DATABASE || 'shop';
const NODE_ENV = process.env.NODE_ENV || 'development';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize().then(async () => {

    if (process.env.NODE_ENV === 'development') {
        console.log("Inserting a new user into the database...")
        const user = new User()
        user.firstName = "Timber"
        user.lastName = "Saw"
        user.age = 25
        await AppDataSource.manager.save(user)
        console.log("Saved a new user with id: " + user.id)

        console.log("Loading users from the database...")
        const users = await AppDataSource.manager.find(User)
        console.log("Loaded users: ", users)

        console.log("Here you can setup and run express / fastify / any other framework.")
    }

}).catch(error => console.log(error));
