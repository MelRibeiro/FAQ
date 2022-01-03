const summaries = document.getElementsByTagName('summary');

for ( const summary of summaries) {
  summary.addEventListener('click', () => {
    summary.classList.toggle('bold');
  })
}

