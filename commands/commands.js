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
},
{
  name: "play",
  code: `
$if[$message==]
Did you mean:
\`>stop / >pause / >join\`?
$elseif[$voiceID==]
You aren't in a voice channel.
$endelseif
$elseif[$voiceID[$clientid]==]
$playSong[$message;7200m;yes;no;:x: Couldn't play song. Try again later.]
$joinVC[$voiceID]
$changeNickname[$clientID;GenMusic | 🎶]
$endelseif
$elseif[$voiceID[$clientid]==$voiceid]
$playSong[$message;7200m;yes;no;:x: Couldn't play song. Try again later.]
$joinVC[$voiceID]
$changeNickname[$clientID;GenMusic | 🎶]
$endelseif
$elseif[$voiceID[$clientID]!=$voiceID[$authorID]]
We aren't at the same voice channel. Please switch to the channel I'm in.
$endelseif
$endif
  
  
`
},
{
  name: "join",
  code: `
$if[$voiceID[$clientID]!=]
Failed to join voice channel:
I am already in a voice channel.
$elseif[$voiceID==]
You're not in a voice channel.
$endelseif
$else
$joinVC[$voiceID]
Joined, hi! :wave:
$changeNickname[$clientID;GenMusic | ⏱️]
$endif
`
},
{
name: "leave",
code: `$if[$voiceID[$clientID]==]
Failed to leave voice channel:
I am not in a voice channel.
$elseif[$voiceID[$clientID]!=$voiceID[$authorID]]
We aren't at the same voice channel.
$endelseif
$else
See you next time!
$changeNickname[$clientID;GenMusic]
$leaveVC
$endif`
},
{
  name: "pause",
  code: `
$if[$voiceID==]
You're not in a voice channel
$elseif[$voiceID!=$voiceID[$clientID]]
We are not in the same voice channel.
$endelseif
$elseif[$queueStatus==idle]
Nothing's playing.
$endelseif
$elseif[$queueStatus==paused]
Song is already paused.
$endelseif
$else
$pauseSong
Paused!
$endif
  
`
},
{
  name: "resume",
  code: `
$if[$voiceID==]
You're not in a voice channel
$elseif[$voiceID!=$voiceID[$clientID]]
We are not in the same voice channel.
$endelseif
$elseif[$queueStatus==playing]
A song is already playing.
$endelseif
$else
$resumeSong
Resuming!
$endif
  
`
},
{
  name: "loop",
  code: `
$if[$voiceID==]
You're not in a voice channel
$elseif[$voiceID[$clientID]==]
I'm not in a voice channel.
$endelseif
$elseif[$voiceID!=$voiceID[$clientID]]
We are not in the same voice channel.
$endelseif
$elseif[$queuestatus==idle]
Queue is empty.
$endelseif
$elseif[$loopStatus==none]
Looping 1 song.
$loopSong
$endelseif
$elseif[$loopstatus==song]
Looping entire queue.
$loopQueue
$endelseif
$elseif[$loopstatus==queue]
Looping disabled.
$loopqueue
$endelseif
$endif


`
},
{
  name: "eval",
  code: `
$eval[$message]
$onlyForIds[553287196875161631;no perm]  
`
},
{
  name: "np",
  code: `
$sub[100;$round[$multi[$divide[$splitText[1];$splitText[4]];100]]]% complete
$image

$textSplit[$songInfo[duration_left] $songInfo[duration]; ]

`
}]