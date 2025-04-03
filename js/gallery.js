const projects = {
    project1: {
        image: "images/project1/main.jpg"
    },
    project2: {
        image: "images/project2/main.jpg"
    },
    project3: {
        image: "images/project3/main.jpg"
    },
    project4: {
        image: "images/project4/main.jpg"
    },
    project5: {
        image: "images/project5/main.jpg"
    },
    project6: {
        image: "images/project6/main.jpg"
    },
    project7: {
        image: "images/project7/main.jpg"
    },
    project8: {
        image: "images/project8/main.jpg"
    },
    // 可以继续添加更多项目...
};

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

// 点击模态框外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
} 