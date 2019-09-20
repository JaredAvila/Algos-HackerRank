const getBtn = document.getElementById("getBtn");
const postBtn = document.getElementById("postBtn");
const xhr = new XMLHttpRequest();
const root = "https://jsonplaceholder.typicode.com/";

function getRequest() {
  xhr.open("GET", root + "posts");
  xhr.responseType = "json";
  xhr.onload = () => {
    let res = xhr.response;
    console.log(res);
  };
  xhr.send();
}

function postRequest() {
  const data = {
    title: "Booty",
    body: "Booty booty booty booty booty everywhere!",
    userId: 42
  };
  xhr.open("POST", root + "posts");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.responseType = "json";
  xhr.onload = () => {
    let res = xhr.response;
    console.log(res);
  };
  xhr.send(JSON.stringify(data));
}

getBtn.addEventListener("click", () => {
  console.log("Get clicked");
  getRequest();
});

postBtn.addEventListener("click", () => {
  console.log("Post clicked");
  postRequest();
});
