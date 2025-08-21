const NumberCategoriesRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${NumberCategoriesRef.length}`);

NumberCategoriesRef.forEach(el => {
  console.log(`Categories: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
  el.firstElementChild.textContent = `${
    el.firstElementChild.textContent +
    ' ' +
    '-' +
    ' ' +
    el.lastElementChild.children.length
  }`;
});
