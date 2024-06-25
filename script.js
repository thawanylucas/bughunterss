document.addEventListener('DOMContentLoaded', function () {
    const botao = document.querySelector('.botao-comecar');

    botao.addEventListener('mouseover', function () {
        botao.style.transform = 'scale(1.1)';
        botao.style.backgroundColor = '#FF4500';
    });

    botao.addEventListener('mouseout', function () {
        botao.style.transform = 'scale(1)';
        botao.style.backgroundColor = '#FFA500';
    });

    botao.addEventListener('click', function () {
        botao.style.transform = 'scale(1.2)';
        setTimeout(function () {
            botao.style.transform = 'scale(1)';
        }, 300);
    });
    const videoContainers = document.querySelectorAll('.video-container');

    videoContainers.forEach(container => {
        container.addEventListener('mouseover', function () {
            container.style.transform = 'scale(1.05)';
            container.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });

        container.addEventListener('mouseout', function () {
            container.style.transform = 'scale(1)';
            container.style.boxShadow = 'none';
        });
    });
});
