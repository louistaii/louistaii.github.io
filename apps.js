
function toggleCategory(categoryId) {
    const skillsDiv = document.getElementById(categoryId);
    const icon = document.getElementById(categoryId + '-icon');
            
    if (skillsDiv.style.display === 'none' || skillsDiv.style.display === '') {
        // Show the skills
        skillsDiv.style.display = 'flex';       
        icon.classList.add('fa-chevron-down');
        icon.style.transform = 'rotate(180deg)';
    } else {
        // Hide the skills
        skillsDiv.style.display = 'none';
        icon.classList.add('fa-chevron-down');
        icon.style.transform = 'rotate(0deg)';
    }
}