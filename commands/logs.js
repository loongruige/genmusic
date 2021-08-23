module.exports = [{
  type: "botJoinCommand",
  channel: "873240897372971019"
  code: `
$title[I joined a new server.]
$description[\`\`\`yaml
Guild name   : $serverName
Member count : $memberscount\`\`\`]
`
},
{
  type: "botLeaveCommand",
  channel: "873240898585100408", 
  code: `
$title[I left a server.]
$description[\`\`\`yaml
Guild name   : $serverName
Member count : $memberscount\`\`\`]
`
}]