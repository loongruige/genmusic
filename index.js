const http = require('http');
const server = http.createServer((req, res) => {
 res.writeHead(200);
});
server.listen(3000);

const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
token: process.env["Token"],
prefix: "$getVar[prefix]",
})

const vars = require("./variables.gen")

bot.onMessage()
bot.loadCommands("./commands/")
bot.command({
name: "ping",
code: `Pong!
\`Latency >>> $pingms\``
})

bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

bot.onInteractionCreate()
bot.interactionCommand({
 name:"click",
 prototype:"button",
 code:`
Queue#COLON#
$description[$queue[6;10]]
`
})

bot.variables(vars)