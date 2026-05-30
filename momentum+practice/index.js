import fs from "fs"

const product = {
  id: 10,
  name: "Laptop",
  price: 15000
};

const data = JSON.stringify(product, null, 4).toLowerCase()

fs.writeFileSync("product.txt", data)

console.log(fs.readFileSync("product.txt", "utf-8"))