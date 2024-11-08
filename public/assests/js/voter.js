// Toggle the sidebar open or closed
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
    let currentIndex = 0;

    function updateCarousel() {
        const grids = document.querySelectorAll('.carousel-grid');
        const totalGrids = grids.length;

        if (totalGrids === 0) return; 
        const gridWidth = grids[0].clientWidth;
        const offset = -currentIndex * gridWidth;
        document.querySelector('.carousel-items').style.transform = `translateX(${offset}px)`;
    }

    function nextGrid() {
        const grids = document.querySelectorAll('.carousel-grid');
        const totalGrids = grids.length;

        if (totalGrids === 0) return;

        currentIndex = (currentIndex + 1) % totalGrids;
        updateCarousel();
    }

    function prevGrid() {
        const grids = document.querySelectorAll('.carousel-grid');
        const totalGrids = grids.length;

        if (totalGrids === 0) return; 

        currentIndex = (currentIndex - 1 + totalGrids) % totalGrids;
        updateCarousel();
    }

    window.addEventListener('load', updateCarousel);
