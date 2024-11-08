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

