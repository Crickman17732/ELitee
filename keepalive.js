const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => res.send("✅ Gitpod is alive"));

app.listen(PORT, () => {
  console.log(`🟢 Keepalive running on port ${PORT}`);
});
