let data = {};

// JSON 데이터 로드
fetch('data.json')
    .then(response => response.json())
    .then(json => {
        data = json;
    })
    .catch(error => {
        console.error("Error loading JSON data:", error);
    });

function searchKeyword() {
    const searchInput = document.getElementById('searchInput').value;
    const result = data[searchInput];

    if (result) {
        document.getElementById('result').innerText = result;
    } else {
        document.getElementById('result').innerText = "검색 결과가 없습니다.";
    }
}
