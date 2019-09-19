// ------------------ DOM variables
const getBtn = document.getElementById("getBtn");
const postBtn = document.getElementById("postBtn");
const myForm = document.getElementById("myForm");
const responses = document.getElementById("responses");
const resCont = document.getElementById("resCont");
const errorDisplay = document.getElementById("error");
const successDisplay = document.getElementById("success");

const root = "https://jsonplaceholder.typicode.com/";

let markup = "";

// ----------------- Request/Response Functions
const makeRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    http.open(method, root + url);

    http.responseType = "json";

    if (data) {
      http.setRequestHeader("Content-Type", "application/json");
    }

    http.onload = () => {
      if (http.status >= 400) {
        reject(http.response);
      } else {
        resolve(http.response);
      }
    };

    http.onerror = () => {
      reject("Something went wrong");
    };

    http.send(JSON.stringify(data));
  });

  return promise;
};

async function getRequest() {
  try {
    const res = await makeRequest("GET", "posts");
    res.forEach(el => {
      markup += `<li class="post"><h2>Title: ${el.title}</h2><br /><p>${el.body}</p></li>`;
    });
    resCont.style.display = "block";
    responses.innerHTML = markup;
  } catch {
    handleResErrors("Something went wrong");
  }
}

async function postRequest(newPost) {
  try {
    const res = await makeRequest("POST", "posts", newPost);
    markup += `<li class="post"><h2>Title: ${res.title}</h2><br /><p>${res.body}</p></li>`;
    resCont.style.display = "block";
    responses.innerHTML = markup;

    successDisplay.innerHTML = "Post successfully submitted!";
    myForm.reset();
    setTimeout(() => {
      successDisplay.innerHTML = "";
    }, 3000);
  } catch {
    handleResErrors("Something went wrong");
  }
}

// ---------------- DOM Functions
myForm.style.display = "none";
const showForm = () => {
  if (myForm.style.display === "none") {
    myForm.style.display = "flex";
    postBtn.innerHTML = "Back";
  } else {
    myForm.style.display = "none";
    postBtn.innerHTML = "Create New";
  }
};

const handleFormErrors = error => {
  errorDisplay.innerHTML = error;
};

const handleResErrors = error => {
  errorDisplay.innerHTML = error;
  setTimeout(() => {
    errorDisplay.innerHTML = "";
  }, 3000);
};

// -------------------Event listeners

getBtn.addEventListener("click", () => {
  getRequest();
});

postBtn.addEventListener("click", () => {
  showForm();
});

myForm.addEventListener("submit", e => {
  e.preventDefault();
  let ID = parseInt(e.target[1].value);
  if (e.target[0].value === "") {
    handleFormErrors("*Must enter a title");
  } else if (e.target[0].value.length < 2) {
    handleFormErrors("*Title must be longer than 2 characters");
  } else if (!ID) {
    handleFormErrors("*User Id must be a number");
  } else if (e.target[2].value.length < 6) {
    handleFormErrors("*Post must be longer than six characters.");
  } else {
    const newPost = {
      title: e.target[0].value,
      body: e.target[2].value,
      userId: ID
    };
    postRequest(newPost);
    errorDisplay.innerHTML = "";
  }
});
