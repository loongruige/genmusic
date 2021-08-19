module.exports = [{
  name: "help",
  code: `
$title[GenMusic]  
$description[Hi! I'm GenMusic, a free music bot with features like:
> - Queue
> - Loop
> - Pause/Continue and such.
I am currently in **$serverCount** servers and have **$allMembersCount** members.
*To get help about the commands please use \`$getVar[prefix]commands\`*]
  
`
},
{
  name: "commands",
  code: `
$title[Command count : $commandsCount]
$addfield[Other;\`$getVar[prefix]loop\`, \`$getVar[prefix]7/24\`, \`$getVar[prefix]freemium\`, \`$getvar[prefix]discord\`]
$addfield[Infos;\`$getVar[prefix]help\`, **\`$getVar[prefix]commands\`**, \`$getVar[prefix]info\`, \`$getVar[prefix]queue\`, \`$getVar[prefix]np\` ]
$addfield[Start/stop;\`$getVar[prefix]play\`, \`$getVar[prefix]stop\`, \`$getVar[prefix]pause\`, \`$getVar[prefix]resume\`]
  
`
},
{
name:"info",
code:`
$author[Bot Stats;$userAvatar[$clientID]]
$description[
$addField[Links;
\`🔗\` Support Server - [Winlep](https://discord.gg/qv7ywh7kKD)
\`🔗\` Invite Me - Soon!
$addField[Version;

 Node.JS Version: $nodeVersion

$addField[General;
\`🏓\` Ping: $pingms
\`⏱️\` Uptime: $client[readytimestamp]

\`⚙️\` Commands Count: $commandsCount
\`👥\` All Members Count: $allMembersCount
\`🎚️\` Servers Count: $serverCount

\`🚦\` Ram Usage: $ram MB/$replaceText[$abbreviate[$maxRam];K; GB;-1]

\`👑\` - Windows & Nirlep]
$thumbnail[$userAvatar[$clientid]]
$footer[$userTag[$clientID];$userAvatar[$clientID]]
$addTimestamp
`
}]