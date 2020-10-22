const hiddenProjects = document.querySelectorAll('.more-hidden');
const viewMoreButton = document.querySelector('#view-more');

function showMoreProjects() {
  hiddenProjects.classList.remove('more-hidden');
  // if (hiddenProjects.classList.contains('more-hidden')) {
  //   hiddenProjects.classList.remove('more-hidden');
  //   viewMoreButton.textContent = 'View Fewer'
  // } else {
  //   hiddenProjects.classList.add('more-hidden');
  //   viewMoreButton.textContent = 'View More';
  // }
}
viewMoreButton.addEventListener('click', showMoreProjects);
