let listItems = [];

//sets most updated list
function updateList(list) {
  let html = "";
  for (let i = 0; i < list.length; i++) {
    html = html + "<li>" + list[i] + "</li>";
  }
  document.getElementById("list").innerHTML = html;
}

//adds new item to list
function onAddItem() {
  let newItem = document.getElementById("listItem").value;
  if (newItem === "") {
    alert("Must enter an item");
    return;
  }
  listItems.push(newItem);
  updateList(listItems);
  document.getElementById("listItem").value = "";
}
