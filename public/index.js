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

// *********************************** Small Screen Functions ********************************************************

// -- global variables pointing to small screen forms and elements

const editForm = document.getElementById("edit-form-for-small-screen");
const editFormOverlay = document.getElementById("sm:edit-form-overlay");
const editButton = document.getElementById("sm:editButton");
const addCategoryForm = document.getElementById("sm:addCategoryForm");
const addItemForm = document.getElementById("sm:addItemForm");

function closeAllMenusForSmallScreens() {
  editForm.classList.add("translate-y-full");
  addCategoryForm.classList.add("translate-y-full");
  addItemForm.classList.add("translate-y-full");
  editFormOverlay.classList.add("hidden");

  // make the edit button visible again
  editButton.classList.remove("hidden");
}
function editButtonForSmallScreen() {
  closeMenu();
  editButton.classList.add("hidden");
  editFormOverlay.classList.remove("hidden");
  editForm.classList.remove("translate-y-full");
}
function closeEditMenu() {
  editButton.classList.remove("hidden");
  editFormOverlay.classList.add("hidden");
  editForm.classList.add("translate-y-full");
}
function addCategoryFormSmall() {
  closeAllMenusForSmallScreens();
  editFormOverlay.classList.remove("hidden");
  editButton.classList.add("hidden");
  addCategoryForm.classList.remove("translate-y-full");
}
function openAddItemFormSmall() {
  closeAllMenusForSmallScreens();
  editFormOverlay.classList.remove("hidden");
  editButton.classList.add("hidden");
  addItemForm.classList.remove("translate-y-full");
}
