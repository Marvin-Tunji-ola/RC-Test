import 'reflect-metadata'
import {createExpressServer, Controller} from "routing-controllers"
import { createConnection } from "typeorm";

const app = createExpressServer({
    routePrefix:'api',
    controllers:[`${__dirname}/controllers/*.ts`]
})

var port = 3000

app.listen(port)    

createConnection().then(async(conn)=>`${conn} Created`)

console.log(`Server Running on http://localhost:${port}`)