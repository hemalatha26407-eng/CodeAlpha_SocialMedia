function addPost() {
    let input = document.getElementById("postInput");
    let text = input.value.trim();

    if (text === "") return;

    let list = document.getElementById("postList");
    let li = document.createElement("li");
    li.textContent = text;

    list.appendChild(li);
    input.value = "";
}
