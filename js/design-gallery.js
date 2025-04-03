const projects = {
    product1: {
        image: "images/design/product1/main.jpg",
        category: "product"
    },
    product2: {
        image: "images/design/product2/main.jpg",
        category: "product"
    },
    product3: {
        image: "images/design/product3/main.jpg",
        category: "product"
    },
    packaging1: {
        image: "images/design/packaging1/main.jpg",
        category: "packaging"
    },
    packaging2: {
        image: "images/design/packaging2/main.jpg",
        category: "packaging"
    },
    graphic1: {
        image: "images/design/graphic1/main.jpg",
        category: "graphic"
    },
    graphic2: {
        image: "images/design/graphic2/main.jpg",
        category: "graphic"
    },
    graphic3: {
        image: "images/design/graphic3/main.jpg",
        category: "graphic"
    },
    graphic4: {
        image: "images/design/graphic4/main.jpg",
        category: "graphic"
    },
    graphic5: {
        image: "images/design/graphic5/main.jpg",
        category: "graphic"
    }
    // 可以继续添加更多项目...
};

// 分類功能
document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-button');
    const galleryItems = document.querySelectorAll('.gallery-item');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 更新按鈕狀態
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.dataset.category;

            // 篩選作品
            galleryItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});

// 原有的 Modal 功能
function openModal(projectId) {
    const project = projects[projectId];
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');

    modalImage.src = project.image;
    modalImage.alt = projectId;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
} 