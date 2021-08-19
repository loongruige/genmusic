const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env["Token"],
prefix: ">"
})

const vars = require("./variables.gen")

bot.onMessage()

bot.command({
name: "ping",
code: `Pong!
\`Latency >>> $pingms\``
})

bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

bot.variables(vars)