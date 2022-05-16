import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';
import {inventoryList} from './functions.js'

let inputString = [];

export function main() {    
    const obj = inventoryList();
    const operationCount = parseInt(inputString.shift())
    
    for(let i = 1; i <= operationCount; i++) {
		const operationInfo = inputString.shift().split(" ")

        if (operationInfo[0] === 'add') {
            obj.add(operationInfo[1]);
        } else if (operationInfo[0] === 'remove') {
            obj.remove(operationInfo[1]);
        } else if (operationInfo[0] === 'getList') {
            const res = obj.getList();
            if (res.length === 0) {
                console.log('No Items\n');
            } else {
                console.log(`${res.join(',')}\n`);
            }
        }
    }
}

const rl = readline.createInterface({ input, output });

rl.on("line",(inputStdin)=>{
	if (inputStdin.trim() == "exit") {
		process.exit()
	}
	inputString.push(inputStdin.trim())
	console.log("inputString:>>>>", inputString)
})

rl.on("close", () => {
	main()
})