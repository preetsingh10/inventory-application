// state Object
const state = {
  openedCategoryId: [],
};
async function showItemsForEditing(categoryName, categoryId) {
  const div = document.getElementById(`${categoryName}-items`);
  div.classList.remove("hidden");
  div.innerHTML = await getItemsForCategory(categoryId);
}
async function getItemsForCategory(categoryId) {
  const data = await fetch(`/category/data/${categoryId}`);
  const html = await data.text();
  console.log(categoryId);
  return html;
}

function openItemsPanel(id) {
  const categoryId = Number(id);
  console.log(state, categoryId);
  const listOfCategories = document.getElementById("list-of-categories");
  const dropDownSvg = listOfCategories.querySelector(
    `#dropDownForId-${categoryId}`,
  );
  const categoryHeading = listOfCategories.querySelector(
    `#categoryHeading-${categoryId}`,
  );
  const itemsPanel = listOfCategories.querySelector(
    `#categoryId-${categoryId}`,
  );
  if (state.openedCategoryId.includes(categoryId)) {
    itemsPanel.classList.toggle("hidden");
    dropDownSvg.classList.toggle("rotate-180");
  } else {
    itemsPanel.classList.toggle("hidden");
    dropDownSvg.classList.toggle("rotate-180");
    state.openedCategoryId = state.openedCategoryId.filter(
      (id) => id != categoryId,
    );
  }
}

function openEditCategoryForm(categoryName, categoryId) {
  const editForm = document.querySelector(
    "#edit-category-form-for-small-screen",
  );
  const categoryNameInput = editForm.querySelector("#categoryName");
  const categoryIdIput = editForm.querySelector("#categoryId");
  const overlay = document.querySelector("#overlay");
  // blur background overlay
  overlay.classList.remove("hidden");

  editForm.classList.remove("translate-y-full");
  categoryNameInput.value = categoryName;
  categoryIdIput.value = categoryId;
}
function closeEditForm() {
  const editForm = document.querySelector(
    "#edit-category-form-for-small-screen",
  );
  editForm.classList.add("translate-y-full");
}

// Delete Category Form
function openDeleteCategoryForm() {
  const deleteCategoryForm = document.getElementById(
    "delete-category-form-for-small-screen",
  );
  // open form
  deleteCategoryForm.classList.remove("translate-y-full");
  const overlay = document.querySelector("#overlay");
  // blur background overlay
  overlay.classList.remove("hidden");
}
