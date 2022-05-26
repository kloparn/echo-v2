/*
  INIT APP
*/

import app from "./app";
import config from "../config";
import startDiscordBot from "./bot";

// Setup Discord Bot.
startDiscordBot()

// Setup Express App.
const PORT = process.env.PORT || config.port;
app.listen(PORT, () => {
  console.log(`Poggers server running in ${config.env} mode on port ${PORT}`);
});
