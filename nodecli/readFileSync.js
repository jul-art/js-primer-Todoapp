const fs = require("fs");

// fs.readFile("sample.md", 'utf-8', (err, file) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(file);
//     }
// });

try {
    const file = fs.readFileSync("sample.md", 'utf-8');
    console.log(file);
} catch (err) {
    // ファイルが読み込めないなどのエラーが発生したときに呼ばれる
    console.error(err);
}