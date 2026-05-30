import fs from "fs"
import crypto from "crypto"

const response = await fetch("https://jsonplaceholder.typicode.com/users/2")

const data = await response.json()

const {name, email} = data

const data2 = JSON.stringify({name, email}, null, 2).toUpperCase()

fs.writeFileSync("output.txt", data2)

console.log(crypto.createHash("md5").update(fs.readFileSync("output.txt", "utf-8")).digest("hex"))