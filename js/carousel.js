let currentIndex = 0;
const carousel = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
}

// 自动轮播
setInterval(nextSlide, 5000);

// 添加按钮事件监听
document.querySelector('.carousel-prev').addEventListener('click', prevSlide);
document.querySelector('.carousel-next').addEventListener('click', nextSlide); 