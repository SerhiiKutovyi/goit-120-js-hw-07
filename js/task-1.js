const NumberCategoriesRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${NumberCategoriesRef.length}`);

NumberCategoriesRef.forEach(el => {
  console.log(el.firstElementChild.textContent);
  console.log(el.lastElementChild.children.length);
});

// const CategoriesRef = document.querySelectorAll('h2');
// CategoriesRef.forEach(element => {
//   console.log(`Category: ${element.textContent}`);
// });
