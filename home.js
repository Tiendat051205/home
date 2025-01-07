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
