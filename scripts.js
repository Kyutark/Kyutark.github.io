function searchDatabase() {
    let searchTerm = document.getElementById("searchTerm").value;

    fetch(`/search?term=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("results").innerText = data.result;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

