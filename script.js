// SHOW SIGNUP
function showSignup() {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("signupBox").style.display = "block";
}

// SHOW LOGIN
function showLogin() {
    document.getElementById("signupBox").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
}

// CREATE ACCOUNT
function signup() {
    let user = document.getElementById("signupUser").value;
    let pass = document.getElementById("signupPass").value;

    if (user === "" || pass === "") {
        alert("Enter details!");
        return;
    }

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    alert("Account Created!");
    showLogin();
}

// LOGIN
function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    if (user === localStorage.getItem("user") &&
        pass === localStorage.getItem("pass")) {

        localStorage.setItem("loggedIn", "true");
        window.location.href = "home.html";
    } else {
        alert("Invalid login!");
    }
}

// ONLY RUN IN HOME PAGE
if (localStorage.getItem("loggedIn") === "true") {
    let nameBox = document.getElementById("profileName");
    if (nameBox) {
        nameBox.innerText = localStorage.getItem("user");
    }
}

// ADD POST
function addPost() {
    let text = document.getElementById("postText").value;
    let imgFile = document.getElementById("postImage").files[0];

    if (text.trim() === "" && !imgFile) {
        alert("Write something or upload an image!");
        return;
    }

    let postDiv = document.createElement("div");
    postDiv.className = "post";

    postDiv.innerHTML = `
        <span class="delete-btn" onclick="this.parentElement.remove()">❌</span>
        <p>${text}</p>
    `;

    // IMAGE UPLOAD
    if (imgFile) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let img = document.createElement("img");
            img.src = e.target.result;
            postDiv.appendChild(img);
        };
        reader.readAsDataURL(imgFile);
    }

    // LIKE BUTTON
    let like = document.createElement("div");
    like.className = "like-btn";
    like.innerHTML = "❤️ Like (0)";
    like.onclick = function() {
        let count = parseInt(this.innerHTML.match(/\d+/)[0]) + 1;
        this.innerHTML = `❤️ Like (${count})`;
    };

    postDiv.appendChild(like);

    document.getElementById("posts").prepend(postDiv);

    document.getElementById("postText").value = "";
    document.getElementById("postImage").value = "";
}
