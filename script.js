const data = {
    "apple": "사과",
    "banana": "바나나",
    "cherry": "체리"
};

function searchKeyword() {
    const searchInput = document.getElementById('searchInput').value;
    const result = data[searchInput];

    if (result) {
        document.getElementById('result').innerText = result;
    } else {
        document.getElementById('result').innerText = "검색 결과가 없습니다.";
    }
}
