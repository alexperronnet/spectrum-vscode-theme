const fs = require("fs").promises
const theme = require("./theme")

fs.mkdir("./themes", { recursive: true })
  .then(() =>
    Promise.all([
      fs.writeFile("./themes/spectrum.json", JSON.stringify(theme, null, 2))
    ])
  )
  .catch(() => process.exit(1))
