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
  const editForm = document.querySelector(
    "#edit-category-form-for-small-screen",
  );
  if (editForm) {
    editForm.classList.add("translate-y-full");
  }
}

// Edit Page Functions
function toggleEditMenu(categoryId) {
  // hide all others opened menu first
  document
    .querySelectorAll(".menuOption")
    .forEach((element) => element.classList.add("hidden"));
  // toggle the current option menu
  document
    .querySelector(`#optionMenuForId-${categoryId}`)
    .classList.toggle("hidden");
}
function selectItems(categoryId) {
  const selectButton = document.getElementById(
    `select-button-for-categoryId-${categoryId}`,
  );
  const selectAllButton = document.getElementById(
    `selectAll-for-categoryId-${categoryId}`,
  );
  const deleteButton = document.getElementById(
    `delete-for-categoryId-${categoryId}`,
  );
  const cancelButton = document.getElementById(
    `cancel-for-categoryId-${categoryId}`,
  );
  const checkboxTableHeader = document.getElementById(
    `table-heading-of-categoryId-${categoryId}`,
  );
  checkboxTableHeader ? checkboxTableHeader.classList.toggle("hidden") : null;
  const itemsDiv = document.querySelector(
    `#items-for-categoryId-${categoryId}`,
  );
  itemsDiv ? itemsDiv.querySelectorAll(".checkbox").forEach((item) => item.classList.toggle("hidden"))
    : null;
  // toggle the buttons from hidden to visible
  selectButton.classList.toggle("hidden");
  selectAllButton.classList.toggle("hidden");
  deleteButton.classList.toggle("hidden");
  cancelButton.classList.toggle("hidden");
}
// Event listener for closing the Edit options menu
document.addEventListener("click", (e) => {
  document.querySelectorAll(".editMenu").forEach((menu) => {
    if (!menu.contains(e.target)) {
      menu.querySelector(".menuOption").classList.add("hidden");
    }
  });
});
// Select Event listener

try {
  const select = document.getElementById("select-category");
  select.addEventListener("change", async (e) => {
    const categoryId = e.target.value;
    // showItemsFromServer(`category/${categoryId}`,'items-div')
    window.location.href = `/category/${categoryId}`;
  });
} catch (error) {
  console.log(error.message);
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

// *********************************** Large Screen Functions ********************************************************

function showAddCategoryForm() {
  closeMenu();
  const dialog = document.getElementById("add-category");
  dialog.showModal();
}
function removeAddCategoryForm() {
  const dialog = document.getElementById("add-category");
  dialog.close();
}
function showAddItemForm() {
  const dialog = document.getElementById("add-item-dialog");
  dialog.showModal();
}
function removeAddItemForm() {
  const dialog = document.getElementById("add-item-dialog");
  dialog.close();
}
