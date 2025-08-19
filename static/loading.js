function setupLoadingScreen() {
    const heartIcon = document.querySelector('.heart-pulse-container .heart-icon');
    const heartColor = '#dc3545';
    heartIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${heartColor}">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5A5.48 5.48 0 017.5 3C9.36 3 11 4.29 12 5.57 13 4.29 14.64 3 16.5 3a5.48 5.48 0 015.5 5.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
    `;
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
    }
}

function startApp() {
    hideLoadingScreen();
    if (typeof startCanvasAnimation === 'function') {
        startCanvasAnimation();
    }
}

window.addEventListener('load', () => {
    setupLoadingScreen();
    setTimeout(startApp, 3000); // 3 seconds loading
});
