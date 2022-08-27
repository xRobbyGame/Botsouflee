const { Client, GatewayIntentBits, AttachmentBuilder } = require("discord.js");
require("dotenv").config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const prefixCmd = '&';
const Discord = require('discord.js');
const Canvas = require('@napi-rs/canvas');

client.on("ready", () => {
    //Message de status
    client.user.setActivity(prefixCmd + 'help');
    console.log("Bot ready");
});

client.on("messageCreate", message => {
    //Si le message n'est pas une commande ou vient d'un bot, pas de traitement
    if (!message.content.startsWith(prefixCmd) || message.author.bot) return

    //Récupération des paramètres envoyés
    const args = message.content.slice(prefixCmd.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    //Commandes
    switch (command) {
        case "choupiz":
            require("./commands/choupiz.js")(message, args, client);
            break;
        case "mission":
            require("./commands/mission.js")(message);
            break;
        case "help":
            require("./commands/help.js")(message, prefixCmd);
            break;
        case "g":
        case "s":
            require("./commands/move.js")(message, command, args, client);
            break;
        case "fusee":
            require("./commands/fusee.js")(message);
            break;
        case "hello":
            require("./commands/hello.js")(message);
            break;
        case "culture":
            require("./commands/culture.js")(message);
            break;
        case "efx":
            require("./commands/efx.js")(message);
            break;
        case "bunny":
            require("./commands/bunny.js")(message);
            break;
        case "quoi":
            require("./commands/quoi.js")(message, client);
            break;
        case "hug":
            require("./commands/hug.js")(message, args, client);
            break;
        case "hat":
            require("./commands/hat.js")(message, args, client);
            break;
        default:
            break;
    };
});


client.login(process.env.BOT_TOKEN);