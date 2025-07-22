document.getElementById('getTitle').addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    document.getElementById('titleOutput').textContent = tab.title;
});