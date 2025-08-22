const inputRef = document.querySelector('#name-input');
console.log(inputRef);

const spanTitleRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  const newText = event.target.value.trim();
  spanTitleRef.textContent = newText;

  if (newText === '') {
    spanTitleRef.textContent = 'Anonymous';
  }
});
