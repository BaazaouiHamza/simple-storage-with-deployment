import { ethers } from "ethers"
import { readFileSync } from 'fs'

async function main() {
    const provider = new ethers.JsonRpcProvider("http://172.20.16.1:7545")
    const wallet = new ethers.Wallet("0x940c6ff54dc127f33e310ad1c60fed755c77b906c51141b467495313b683de44", provider)
    const abi = readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf-8")
    const binary = readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf-8")

    const contractFactory = new ethers.ContractFactory(abi, binary, wallet)
    console.log("Deploying,please wait ...")
    const contract = await contractFactory.deploy()
    console.log(contract)

}

main().then(() => process.exit(0))