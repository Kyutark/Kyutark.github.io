function searchData() {
    const searchTerm = document.getElementById('searchTerm').value;

    fetch('/search?term=' + searchTerm)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = data.result;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
