module.exports = [{
  name: "help",
  code: `
$title[GenMusic]  
$description[
**Note! I'm currently updating commands. Please don't try using commands under the \`Economy\` category.**  
Hi! I'm GenMusic, a free music bot with features like:
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
$addfield[Economy;\`$getVar[prefix]work\`, \`$getVar[prefix]wallet\`, ~~\`$getVar[prefix]market\`~~, ~~\`$getVar[prefix]buy\`~~, \`$getVar[prefix]beg\`]
$addfield[Other;\`$getVar[prefix]loop\`, \`$getVar[prefix]7/24\`, \`$getVar[prefix]freemium\`, \`$getvar[prefix]discord\`]
$addfield[Infos;\`$getVar[prefix]help\`, **\`$getVar[prefix]commands\`**, \`$getVar[prefix]info\`, \`$getVar[prefix]queue\`, \`$getVar[prefix]np\` ]
$addfield[Start/stop;\`$getVar[prefix]play\`, \`$getVar[prefix]skip\`, \`$getVar[prefix]pause\`, \`$getVar[prefix]resume\`]
  
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
You need an argument to run this command with.
$elseif[$voiceID==]
You aren't in a voice channel.
$endelseif
$elseif[$voiceID[$clientid]==]
$title[Searching...]
$description[Added **$songinfo[title;$sub[$queuelength;1]]** to the queue!]
$footer[+50🪙 GenBits]
$setglobaluservar[plays;$sum[1;$getglobaluservar[plays]]]
$let[$playSong[$message;7200m;yes;no;:x: Couldn't play song. Try again later.]]
$joinVC[$voiceID]
$changeNickname[$clientID;GenMusic | 🎶]
$endelseif
$elseif[$voiceID[$clientid]==$voiceid]
$title[Searching...]
$description[Added **$songinfo[title;$sub[$queuelength;1]]** to the queue!]
$footer[+50🪙 GenBits]
$setglobaluservar[plays;$sum[1;$getglobaluservar[plays]]]
$let[$playSong[$message;7200m;yes;no;:x: Couldn't play song. Try again later.]]
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

$description[
**Now playing:** $songInfo[title]

$sub[100;$round[$multi[$divide[$splitText[1];$splitText[4]];100]]]% complete:]
$image[$replaceText[https://raw.githubusercontent.com/windowsModern/genmusic/master/progressbar/progress-overall-value.png;value;$sub[100;$round[$multi[$divide[$splitText[1];$splitText[4]];100]]]]

$textSplit[$songInfo[duration_left] $songInfo[duration]; ]

`
},
{
  name: "skip",
  code: `
$if[$voiceID==]
You're not in a voice channel
$elseif[$voiceID!=$voiceID[$clientID]]
We are not in the same voice channel.
$endelseif
$elseif[$queueLength==0]
Queue is empty.
$endelseif
$else
$skipSong
Skipped!
$endif 
`
},
{
name:"queue",
code:`
$if[$voiceID[$clientID]==]
I am not in a voice channel.
$elseif[$queuelength==0]
Queue is empty.
$endelseif
$elseif[$queuelength<5]
$description[$queue[1;5]]
$endelseif
$else
$apiMessage[$channelId;
;{description:$queue[1;5]};{actionRow:Next page,2,1,click};$messageID:true;no]
$endif
`
},
{
  name: "724",
  code: `
$title[7/24 feature]
$description[7/24 is currently buggy and I'm trying to fix it ASAP. 
> "
> *7/24 is a feature used to have the bot be always on the channel*
> "
]`
},
{
  name: "freemium",
  code: `
$addfield["'Free' you said, right?";Yep, this bot is **completely free**, yet the Premium subscription gives you some perks like:
- Having gold color in every embed
- Getting early updates
- Having a special role in our discord server ||you, user|| and much more.
So basically, you would support us; ||us, Winlep|| not the bot ||bot, GenMusic||]
$addfield["Freemium";
> "
> *a business model, especially on the internet, whereby basic services are provided free of charge while more advanced features must be paid for.*
> " - Oxford Languages

> "
> *The business model has been in use for software since the 1980s. This is often in a time-limited or feature-limited version to promote a paid-for full version.*
> " - Wikipedia]`
},
{
  type: "musicStartCommand",
  channel: "$channelID",
  code: `
$title[GenMusic playing!]
$description[Playing **$songInfo[title]**!]
`
},
{
  name: "discord",
  code: `
$description[Join our discord server [here](https://discord.gg/qv7ywh7kKD)]  
  
`
}]