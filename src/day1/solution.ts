import * as fs from "fs";
import * as path from "path";

// Construct the file path dynamically
const filePath = path.join(__dirname, "data/data.txt");
const data = fs.readFileSync(filePath, "utf8").split("\n");
data.pop(); // remove last item

// init lists
const dataArray1: number[] = [];
const dataArray2: number[] = [];

// loop over data items
data.forEach((row) => {
  let rowS = row.split(" ");
  dataArray1.push(Number(rowS[0]));
  dataArray2.push(Number(rowS[rowS.length - 1]));
});

dataArray1.sort();
dataArray2.sort();

// Part 1
let sum = 0;
for (let i = 0; i < dataArray1.length; i++) {
  sum += Math.abs(dataArray1[i] - dataArray2[i]);
}
console.log("Part 1: ", sum);

// Part 2
let similarityScore = 0;
for (let i = 0; i < dataArray1.length; i++) {
  let leftItem = dataArray1[i];
  // count the number of occurences 3 is in dataArray2
  similarityScore +=
    dataArray2.filter((item) => item === leftItem).length * leftItem;
}
console.log("Part 2: ", similarityScore);
