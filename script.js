function addPost() {
    let text = document.getElementById("postInput").value;
    
    if (text.trim() === "") {
        alert("Please type something!");
        return;
    }

    let postBox = document.createElement("div");
    postBox.className = "post";
    postBox.innerText = text;

    document.getElementById("postList").prepend(postBox);

    document.getElementById("postInput").value = "";
}
