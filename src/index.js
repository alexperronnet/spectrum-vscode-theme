const fs = require("fs").promises
const getTheme = require("./theme")

const lightTheme = getTheme({
  style: "light",
  name: "Spectrum light",
  type: "light"
})

const darkTheme = getTheme({
  style: "dark",
  name: "Spectrum Dark",
  type: "dark"
})

fs.mkdir("./themes", { recursive: true })
  .then(() =>
    Promise.all([
      fs.writeFile("./themes/light.json", JSON.stringify(lightTheme, null, 2)),
      fs.writeFile("./themes/dark.json", JSON.stringify(darkTheme, null, 2))
    ])
  )
  .catch(() => process.exit(1))
