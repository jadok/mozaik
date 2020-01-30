const proxy = require("http-proxy-middleware")

module.exports = app => {
  app.use(proxy("/socket", {target: "ws://localhost:5000", ws: true}))
  app.use(proxy("/config", {target: "http://localhost:5000"}))
}