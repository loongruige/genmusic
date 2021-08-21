module.exports = [{
  name: "wallet",
  code: `
$title[$username's balance:]
$addfield[Wallet;:coin: $getGlobalUserVar[wallet] GenBits]
$addField[Bank;:coin: $getGlobalUserVar[bank] GenBits]
`
},
{
  name: "work",
  code: `
You $randomText[washed your neighbour's car;coded;streamed;worked at the coffee shop;sold stuff;made other people's homework;made music;mowed the lawn] and got :coin:$getvar[randomGB] Genbits!
$setglobaluservar[wallet;$sum[$getGlobalUserVar[wallet];$getvar[randomGB]]]
$globalCooldown[2h;You worked already! You can work again in **%time%**]  
`
},
{
  type: "loopCommand",
  every: 1000,
  code: `
$setvar[randomGB;$random[100;350]]  
`
},
{
  name: "beg",
  code: `
You begged $randomText[Nirlep;Windows;avi;Bowman;Nick;Blue;Denzven;clippy;brixk] and got :coin:$getvar[randomGB] Genbits!
$setglobaluservar[wallet;$sum[$getGlobalUserVar[wallet];$getvar[randomGB]]]
$globalCooldown[30m;You begged already! You can beg again in **%time%**]  
  
`
},
{
  name: "leaderboard",
  code: `
$awaitReaction[$authorID;1m;{description:$globalUserLeaderboard[wallet;;{top}, {username} with :coin:{value} GenBits]};⏩;songlb;Reactions timed out.;yes]

`
},
{
  name: "songlb",
  type: "awaitedCommand",
  code: `
$awaitReaction[$authorID;1m;{description:$globalUserLeaderboard[plays;;{top}, {username} with {value} songs]};⏪;leaderboard;Reactions timed out.;yes]
`
},
{
  name: "leaderboard",
  type: "awaitedCommand",
  code: `
$awaitReaction[$authorID;1m;{description:$globalUserLeaderboard[wallet;;{top}, {username} with :coin:{value} GenBits]};⏩;songlb;Reactions timed out.;yes]
`
}]