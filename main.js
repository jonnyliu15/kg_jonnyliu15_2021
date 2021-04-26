const numbers = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]

const input = process.argv
let output = ""
for (let i = 2; i < input.length; i++) {
	for (let j = 0; j < input[i].length; j++) {
		output += numbers[parseInt(input[i][j])]
	}
	if (i != input.length - 1) {
		output += ","
	}
}
console.log(output)