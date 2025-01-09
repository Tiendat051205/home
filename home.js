// Tải phần header và footer vào các phần tử có id tương ứng
document.addEventListener("DOMContentLoaded", function() {
    // Tải header
    fetch('../common/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });

    // Tải footer
    fetch('../common/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
        });
});
function fetchData(url, container, type) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
            return response.json();
        })
        .then(data => {
            container.innerHTML = ''; // Xóa nội dung cũ
    
            if (data.length === 0) {
                container.innerHTML = `<p class="error">No ${type} found.</p>`;
                return;
            }
    
            // Hiển thị nội dung
            data.forEach(item => {
                const element = document.createElement('div');
                element.classList.add('item');

                if (type === 'video') {
                    element.innerHTML = `
                        <h3>${item.title}</h3>
                        <p><strong>Description:</strong> ${item.description}</p>
                        <p><strong>Duration:</strong> ${item.duration} minutes</p>
                        <p><strong>Uploaded At:</strong> ${new Date(item.uploaded_at).toLocaleString()}</p>
                        <iframe 
                            width="560" 
                            height="315" 
                            src="${item.src}" 
                            title="${item.title}" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                        <a href="${item.src}" class="download-btn" download>Download</a>
                    `;
                } else if (type === 'image') {
                    element.innerHTML = `
                        <h3>${item.title}</h3>
                        <p><strong>Description:</strong> ${item.description}</p>
                        <p><strong>Dimensions:</strong> ${item.dimensions}</p>
                        <p><strong>Uploaded At:</strong> ${new Date(item.uploaded_at).toLocaleString()}</p>
                        <img src="${item.src}" alt="${item.title}" />
                        <a href="${item.src}" class="download-btn" download>Download</a>
                    `;
                }
                container.appendChild(element);
            });
        })
        .catch(error => {
            container.innerHTML = `<p class="error">Error: ${error.message}</p>`;
        });
}
