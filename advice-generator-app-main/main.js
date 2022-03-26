const adviceIdContainer = document.querySelector("#id");
const adviceContainer = document.querySelector("#advice");
const reload = document.querySelector("#footer");

function loadData() {
    const http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.responseText);
            adviceIdContainer.textContent += data.slip.id;
            adviceContainer.textContent += data.slip.advice;
        }
    };
    http.open('GET', ' 	https://api.adviceslip.com/advice', true);
    http.send();

}
loadData();


reload.addEventListener("click", function() {
    location.reload();
})