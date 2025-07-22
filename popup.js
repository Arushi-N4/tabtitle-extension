document.getElementById('getTitle').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tab = tabs[0];
        const title = tab.title;
        const output = document.getElementById('titleOutput');
        output.textContent = title;
        output.style.display = 'block';
    });
});
