function show(selectedCategory) {
  const textBox = this.closest('.dropdown-selector').querySelector('.text-box');
  textBox.value = selectedCategory;
}

document.querySelectorAll('.dropdown-selector').forEach(dropdown => {
  dropdown.onclick = function() {
    dropdown.classList.toggle('selectorActive');
  };

  const options = dropdown.querySelectorAll('.category-option div');
  options.forEach(option => {
    option.addEventListener('click', function() {
      show.call(this, this.textContent);
    });
  });
});