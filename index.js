const hiddenProjects = document.querySelectorAll('.hidden');
const viewButton = document.querySelector('#view-button');

function showMoreProjects() {
  for (let i = 0; i < hiddenProjects.length; i++) {
    hiddenProjects[i].classList.toggle('hidden');
  }
  viewButton.style.display = 'none';
}

viewButton.addEventListener('click', showMoreProjects);