const fs = require("fs");
const path = require("path");

const logsDir = path.join(process.cwd(), "Logs");

if(fs.existsSync(logsDir)){
    const files = fs.readdirSync(logsDir);

    files.forEach((file) => {
        fs.unlinkSync(path.join(logsDir, file));
        console.log(`delete files...${file}`);
    });

    fs.rmdirSync(logsDir);
}