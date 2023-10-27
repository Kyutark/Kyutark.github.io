const express = require('express');
const xlsx = require('xlsx');

const app = express();
const port = 3000;

app.use(express.static('public')); // 'public' 디렉터리에 index.html을 저장해야 합니다.

app.get('/search', (req, res) => {
    const searchTerm = req.query.term;
    const workbook = xlsx.readFile('path_to_excel_file.xlsx'); // 여기에 실제 엑셀 파일 경로를 입력하세요.
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet);

    for (let row of data) {
        if (row['A'] === searchTerm) { // 'A'는 1열의 헤더명입니다. 필요에 따라 변경하세요.
            return res.json({ result: row['B'] }); // 'B'는 2열의 헤더명입니다. 필요에 따라 변경하세요.
        }
    }

    res.json({ result: 'Not Found' });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
