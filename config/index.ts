/*
  ALWAYS import index.ts file instead of exp-config directly
  Because we might need ts to modify config.
*/
// @ts-ignore
const config = require("exp-config");

export default config;
