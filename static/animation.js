function startCanvasAnimation() {
    const canvas = document.getElementById('heartCanvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let heartSize = 50;
    const maxSize = 60;
    const minSize = 50;
    let pulseDirection = 1;
    const pulseSpeed = 0.2;
    const heartColor = '#dc3545';

    function drawHeart(x, y, size) {
        ctx.beginPath();
        ctx.moveTo(x, y + size / 4);
        ctx.bezierCurveTo(x + size / 2, y - size / 2, x + size, y, x, y + size);
        ctx.bezierCurveTo(x - size, y, x - size / 2, y - size / 2, x, y + size / 4);
        ctx.closePath();
        ctx.fillStyle = heartColor;
        ctx.fill();
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        heartSize += pulseDirection * pulseSpeed;
        if (heartSize >= maxSize) pulseDirection = -1;
        else if (heartSize <= minSize) pulseDirection = 1;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        drawHeart(centerX, centerY, heartSize);

        requestAnimationFrame(animate);
    }

    animate();
}
