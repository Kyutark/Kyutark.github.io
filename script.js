let data = {};

// JSON 데이터 로드
fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(json => {
        data = json;
    })
    .catch(error => {
        console.error("Error loading JSON data:", error);
    });

function searchKeyword() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();  // 입력 값을 소문자로 변환
    const result = data[searchInput];

    if (result) {
        document.getElementById('result').innerText = result;
    } else {
        document.getElementById('result').innerText = "검색 결과가 없습니다.";
    }
}
