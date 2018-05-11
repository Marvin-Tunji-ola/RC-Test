import 'reflect-metadata'
import {createExpressServer, Controller} from "routing-controllers"

const app = createExpressServer({
    routePrefix:'api',
    controllers:[`${__dirname}/controllers/*.ts`]
})

var port = 3000

app.listen(port)    

console.log(`Server Running on http://localhost:${port}`)