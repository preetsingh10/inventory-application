function showAddCategoryForm() {
  closeMenu();
  const dialog = document.getElementById("add-category");
  dialog.showModal();
}
function removeAddCategoryForm() {
  const dialog = document.getElementById("add-category");
  dialog.close();
}
async function showItemsFromServer(url, elementId) {
  closeMenu();
  document.getElementById(elementId).innerHTML =
    "<p class=' text-primary-dark text-sm font-bold text-center mt-5 '>Loading ...</p>";
  const res = await fetch(url);
  const html = await res.text();

  document.getElementById(elementId).innerHTML = html;
}
function openMenu() {
  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("drawer").classList.remove("-translate-x-full");
}

function closeMenu() {
  document.getElementById("overlay").classList.add("hidden");
  document.getElementById("drawer").classList.add("-translate-x-full");
}

// small screen functions

function editButtonForSmallScreen() {
  closeMenu()
  const editForm = document.getElementById("edit-form-for-small-screen");

  editForm.classList.remove("translate-y-full")
  console.log('done')
}
