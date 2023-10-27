let data = {
    "Dog": "dog",
    "Cat": "cat",
    "Cow": "cow",
    "Pet": "pet"
    
};

function searchKeyword() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();  // 입력 값을 소문자로 변환
    const result = data[searchInput];

    if (result) {
        document.getElementById('result').innerText = result;
    } else {
        document.getElementById('result').innerText = "검색 결과가 없습니다.";
    }
}
