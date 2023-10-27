let data = {};

// JSON 데이터 로드
fetch('data.json')
    .then(response => response.json())
    .then(json => {
        data = json;
        // 데이터 로딩이 완료되면 검색 버튼 활성화
        document.getElementById('searchButton').disabled = false;
    })
    .catch(error => {
        console.error("Error loading JSON data:", error);
    });

function searchKeyword() {
    if (!data || Object.keys(data).length === 0) {
        document.getElementById('result').innerText = "데이터 로딩 중입니다. 잠시만 기다려주세요.";
        return;
    }
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const result = data[searchInput];

    if (result) {
        document.getElementById('result').innerText = result;
    } else {
        document.getElementById('result').innerText = "검색 결과가 없습니다.";
    }
}
