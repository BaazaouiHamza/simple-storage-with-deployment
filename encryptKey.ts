import 'dotenv/config'
import { ethers } from 'ethers'
import { writeFileSync } from 'fs'

async function main() {
    const pk = process.env.PRIVATE_KEY as string | ethers.SigningKey
    const password = process.env.PRIVATE_KEY_PASSWORD as string
    const wallet = new ethers.Wallet(pk)
    const encryptedJsonKey = await wallet.encrypt(password)
    writeFileSync("./.encryptedKey.json", encryptedJsonKey)

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })