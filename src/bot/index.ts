// Setup simple bot to see if it works :)
import { DiscordBot } from "./classes";

// for now
const startBot = () => {
  // start the singleton for the bot
  DiscordBot.Instance;

  // client.once("message", messageHandler);

  // client.login(config.discordBotToken);
};

export default startBot;
