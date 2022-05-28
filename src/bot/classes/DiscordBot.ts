const { default: config } = require("config");
import { Client } from "discord.js";
import Discord, { Intents } from "Discord.js";

class DiscordBot {
  private static _instance: DiscordBot;
  private _servers: Object;
  private _client: Client;
  constructor() {
    this._client = new Discord.Client({
      intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_MESSAGES],
    });
    this._servers = {};
    this.init();
  }

  /**
   * The Discord bot will setup event handlers for the given guildId
   *
   * @type {string | client}
   */
  private init() {
    this._client.once("ready", () => {
      console.log("Discord bot running...");
    });

    // Register discordJS event handlers

    this._client.login(config.discordBotToken);
  }

  public static get Instance(): DiscordBot {
    return this._instance || (this._instance = new this());
  }

  public listen(guid: string) {}
}

export default DiscordBot;
