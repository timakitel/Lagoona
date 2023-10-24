// document.getElementById("main-action-button").onclick = function () {
//     document.getElementById("products").scrollIntoView({ behavior: "smooth" });
// }

let links =    document.querySelectorAll(".nav-item  > a ");
for (let i=0; i< links.length; i++ ) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({ behavior: "smooth" }); 
    }
}
let button1 =    document.getElementsByClassName("button1");
for (let i=0; i< button1.length; i++ ) {
    button1[i].onclick = function () {
        document.getElementById("want").scrollIntoView({ behavior: "smooth" }); 
    }
}
let button2 =    document.getElementsByClassName("button2");
for (let i=0; i< button2.length; i++ ) {
    button2[i].onclick = function () {
        document.getElementById("foother").scrollIntoView({ behavior: "smooth" }); 
    }
}
