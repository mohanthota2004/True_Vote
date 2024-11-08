function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.contain'); // Adjust content as needed (could be `.main-content` or other)

    if (sidebar.style.right === '0px') {
        // Hide sidebar
        sidebar.style.right = '-250px';
        content.style.marginRight= '0';
        content.style.filter = 'none'; // Remove blur effect when sidebar is hidden
    } else {
        // Show sidebar
        sidebar.style.right = '0px';
        // content.style.marginLeft = '0px'; 
        content.style.filter = 'blur(4px)'; // Blur background when sidebar is shown
    }
}

function postSpeech() {
    // Get the input value
    const speech = document.getElementById('speechInput').value;

    // Show the progress bar
    const progressBar = document.getElementById('progressBar');
    progressBar.style.display = 'block';
    progressBar.value = 0; // Reset progress

    // Simulate progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10; // Increment progress
        progressBar.value = progress;

        // Complete progress
        if (progress >= 100) {
            clearInterval(interval);
            // Hide progress bar and show notification
            progressBar.style.display = 'none';
            const notification = document.getElementById('notification');
            notification.style.display = 'inline';

            // Clear the text area
            document.getElementById('speechInput').value = '';
        }
    }, 200); // Update every 200ms
}
