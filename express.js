const express = require('express');
const app = express();

app.get('/search', (req, res) => {
    let searchTerm = req.query.term;

    // 데이터베이스에서 검색 (여기에서는 가상의 DB 함수를 사용)
    let result = searchInDatabase(searchTerm);

    res.json({ result: result });
});

function searchInDatabase(term) {
    // 여기에 실제 데이터베이스 검색 로직을 구현
    // 예를 들어, Excel 데이터를 JSON으로 변환하고, 이를 검색할 수 있도록 함
    // 이 예제에서는 가상의 데이터를 반환

    return "Sample Result for " + term;
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
