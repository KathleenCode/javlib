const list = document.querySelector(".div ul");
const lis = document.querySelectorAll("li");

list.addEventListener("click", (e) => {
    if(e.target.className === "del") {
        const pare = e.target.parentElement;
        list.removeChild(pare);
    }
})

const form = document.forms["for"];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inpval = form.querySelector("input").value;
    console.log(inpval);

    const li = document.createElement("li");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");

    span1.innerHTML = inpval;
    span2.innerText = "delete";

    span1.className ="btitle";
    span2.classList.add("del");

    li.appendChild(span1);
    li.appendChild(span2);
    list.appendChild(li);
})

const hi = document.querySelector("#hi");
hi.addEventListener("change", () => {
    if(hi.checked) {
        list.style.display ="none";
    } else {
        list.style.display = "initial";
    }
})

const inp = document.forms[0].querySelector("#sar");
inp.addEventListener("keyup", (e) => {
    const inpt = e.target.value.toLowerCase();

    Array.from(lis).forEach((book) => {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(inpt) !== -1) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    })
})