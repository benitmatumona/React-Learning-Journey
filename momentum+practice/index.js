import crypto, { createHash } from "crypto"

console.log(crypto.createHash("md5").update("test123").digest("hex"))