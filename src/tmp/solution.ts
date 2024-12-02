import * as fs from "fs";
import * as path from "path";

// Construct the file path dynamically
const filePath = path.join(__dirname, "data/data.txt");
const data = fs.readFileSync(filePath, "utf8").split("\n");
data.pop(); // remove last item
