// client side state Object
const state = {
  openedCategoryId: [],
};
// event listeners
const listOfCategories = document.getElementById("list-of-categories");
listOfCategories.addEventListener("input", (e) => {
  const categoryId = e.target.dataset.categoryId;
  const itemId = e.target.dataset.itemId;
  const itemProperty = e.target.id;
  const itemPropertValue = e.target.value;
  const saveButtonForCurrentCategory = listOfCategories.querySelector(
    `#saveButtonForCategoryId-${categoryId}`,
  );
  const resetButtonForCurrentCategory = listOfCategories.querySelector(
    `#resetButtonForCategoryId-${categoryId}`,
  );
  if (saveButtonForCurrentCategory) {
    saveButtonForCurrentCategory.classList.remove("hidden");
  }
  if (resetButtonForCurrentCategory) {
    resetButtonForCurrentCategory.classList.remove("hidden");
  }
});

function updateItemState(state, categoryId, itemId, itemProperty, itemValue) {
  const currentState = state.updatedItems;
  const newState = {
    ...currentState,
    [categoryId]: {
      ...currentState[categoryId],
      [itemId]: {
        ...currentState[categoryId]?.[itemId],
        [itemProperty]: itemValue,
      },
    },
  };
  state.updatedItems = newState;
}

function deleteCateogryFromState(categoryId) {
  delete state.updatedItems[categoryId];
}

async function showItemsForEditing(categoryName, categoryId) {
  const div = document.getElementById(`${categoryName}-items`);
  div.classList.remove("hidden");
  div.innerHTML = await getItemsForCategory(categoryId);
}
async function getItemsForCategory(categoryId) {
  const data = await fetch(`/category/data/${categoryId}`);
  const html = await data.text();
  return html;
}

function openItemsPanel(id) {
  const categoryId = Number(id);
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

// Select Button

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
  itemsDiv
    ? itemsDiv
        .querySelectorAll(".checkbox")
        .forEach((item) => item.classList.toggle("hidden"))
    : null;
  // toggle the buttons from hidden to visible
  selectButton.classList.toggle("hidden");
  selectAllButton.classList.toggle("hidden");
  deleteButton.classList.toggle("hidden");
  cancelButton.classList.toggle("hidden");
}
// cancel select
function selectCancel(categoryId) {
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
  const itemsDiv = document.querySelector(
    `#items-for-categoryId-${categoryId}`,
  );
  checkboxTableHeader ? checkboxTableHeader.classList.toggle("hidden") : null;

  itemsDiv
    ? itemsDiv
        .querySelectorAll(".checkbox")
        .forEach((item) => item.classList.toggle("hidden"))
    : null;
  // toggle the buttons from hidden to visible
  selectButton.classList.toggle("hidden");
  selectAllButton.classList.toggle("hidden");
  deleteButton.classList.toggle("hidden");
  cancelButton.classList.toggle("hidden");

  // unselectall the items when user clicked cancel
  selectAll(categoryId, false);
}
// select All button
function selectAll(categoryId, option) {
  const parentDiv = document.querySelector(`#categoryId-${categoryId}`);
  const checkboxes = parentDiv.querySelectorAll(`input[type="checkbox"]`);
  checkboxes.forEach((checkbox) => (checkbox.checked = option));
}
// Delete Category Form
function openDeleteCategoryForm(categoryId, categoryName) {
  const deleteCategoryForm = document.getElementById(
    "delete-category-form-for-small-screen",
  );
  const formElement = deleteCategoryForm.querySelector("#form-deleteCategory");
  // open form
  deleteCategoryForm.classList.remove("translate-y-full");
  deleteCategoryForm.querySelector("#categoryToBeDelted").textContent =
    `Category: ${categoryName}`;
  // assign the url to the form
  formElement.method = "POST";
  formElement.action = `/category/delete/${categoryId}`;

  const overlay = document.querySelector("#overlay");
  // blur background overlay
  overlay.classList.toggle("hidden");
  overlay.addEventListener(
    "click",
    () => deleteCategoryForm.classList.toggle("translate-y-full"),
    { once: true },
  );
}
