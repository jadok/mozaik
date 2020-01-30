'use strict'

require('dotenv').config()

const path = require('path')
const server = require('@mozaik/server').default

console.log(process.env.GITHUB_API_TOKEN)
let configFile = process.argv[2] || 'conf/config.yml'

console.log(`> using config file: '${configFile}'\n`)

server
    .configureFromFile(path.join(__dirname, configFile))
    .then(() => {
        require('./register_apis')(server)
        server.start()
    })
    .catch(err => {
        console.error(err)
    })
