// global state variable start

// this varialbe will store the id of the opened panel so that it can be closed later
let openedPanelId;

// end

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

function openItemsPanel(categoryId) {
  const listOfCategories = document.getElementById("list-of-categories");
  let openedPanel = document.getElementById(openedPanelId);
  const currentPanel = listOfCategories.querySelector(
    `#categoryId-${categoryId}`,
  );
  // first of all close the opened panel
  if (openedPanelId !== undefined) {
    openedPanel.classList.add("hidden");
  }
  // now open the selected panel
  if (currentPanel !== null) {
    currentPanel.classList.remove("hidden");
    // set the id of the opened panel to the global state
    openedPanelId = `categoryId-${categoryId}`;
  }
}
