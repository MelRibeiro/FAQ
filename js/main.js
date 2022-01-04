const summaries = document.getElementsByTagName('summary');

for ( const summary of summaries) {
  summary.addEventListener('click', () => {
    summary.classList.toggle('bold');
  })
}

// const animationIconArrow = document.querySelectorAll(".details__icon-arrow");

// animationIconArrow.addEventListener("click", () => {
//   animationIconArrow.classList.toggle(".animation")
// })
