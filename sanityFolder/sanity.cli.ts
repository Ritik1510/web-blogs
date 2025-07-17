
import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  server: {
    hostname: "localhost",
    port: 3333,
  },
  api: {
    projectId: "n5o9rk0x",
    dataset: "production",
  },
  autoUpdates: true, // Enable auto-updates for studios
});

