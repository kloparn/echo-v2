// Setup simple bot to see if it works :)

import Discord, { Intents } from "Discord.js";
import config from "../../config";

// for now
const startBot = () => {
  const client = new Discord.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_MESSAGES],
  });
  
  client.once("ready", () => {
    console.log("Discord bot running...");
  });
  
  client.login(config.discordBotToken);
}

export default startBot
