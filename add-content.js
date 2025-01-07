document.getElementById('add-content-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', document.getElementById('movie-title').value);
    formData.append('description', document.getElementById('movie-description').value);
    formData.append('image', document.getElementById('movie-image').files[0]);
    formData.append('video', document.getElementById('movie-video').files[0]);

    fetch('/api/movies', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            alert('Content added successfully!');
        })
        .catch(error => console.error('Error adding content:', error));
});
