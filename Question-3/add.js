const fs = require("fs");
const path = require("path");

const logsDir = path.join(process.cwd(), "Logs");

if(!fs.existsSync(logsDir)){
    fs.mkdirSync(logsDir);
}
process.chdir(logsDir);

for(let x = 0; x < 10; x++){
    const fileName = `log${x}.txt`;

    fs.writeFileSync(path.join(process.cwd(), fileName), `Log file ${x}`);

    console.log(fileName);
}