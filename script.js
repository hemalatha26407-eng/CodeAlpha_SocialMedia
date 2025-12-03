function addPost() {
    let text = document.getElementById("postInput").value;
    if (text === "") return;

    let li = document.createElement("li");
    li.innerText = text;

    document.getElementById("postsList").appendChild(li);

    document.getElementById("postInput").value = "";
}
