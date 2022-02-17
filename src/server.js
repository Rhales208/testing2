const app = require("../src/index")
const http = require("http")

const server = http.createServer(app)

const port = 8001

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})
