function save() {
    let newItem = document.getElementById("box").value;
    localStorage.box = newItem;
}
        function load() {
    let saveDiv = document.getElementById("savedList");
    saveDiv.innerHTML = localStorage.box;
}