document.getElementById('updateContentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('updateTitle').value;
    const description = document.getElementById('updateDescription').value;

    fetch('/api/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description }),
    })
        .then(response => response.json())
        .then(data => alert(data.message))
        .catch(error => console.error('Error:', error));
});