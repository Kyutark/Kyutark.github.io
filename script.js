let data = {
    "dog": "Dog",
    "cat": "Cat",
    "guppy": "Guppy",
    "tiger": "Tiger",
    "lion": "Lion"
    // ... 추가적으로 필요한 데이터는 이곳에 넣으실 수 있습니다.
};

function searchKeyword() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const result = data[searchInput];

    if (result) {
        document.getElementById('result').innerText = result;
    } else {
        document.getElementById('result').innerText = "검색 결과가 없습니다.";
    }
}
