import fs from "fs"

const user = {
  id: 5,
  name: "Sara",
  active: true
};

const data = JSON.stringify(user, 4).toUpperCase()

fs.writeFileSync("user.txt", data)

console.log(fs.readFileSync("user.txt", "utf-8"))