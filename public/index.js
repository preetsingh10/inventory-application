function showAddCategoryForm() {
  const dialog = document.getElementById("add-category");
  dialog.showModal();
  // dialog.classList.remove("hidden");
}
function removeAddCategoryForm() {
  const dialog = document.getElementById("add-category");
  dialog.close();
  // dialog.classList.add("hidden");
}
