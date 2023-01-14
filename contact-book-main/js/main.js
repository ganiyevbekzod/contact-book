const elForm = document.querySelector(".js-form");
const elList = document.querySelector(".contact-book");
const elName = document.querySelector(".js-name");
const elSelect = document.querySelector(".js-select");
const elNumber = document.querySelector(".js-number");

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault()
  elSelect.addEventListener("change", (evt) => {
    evt.preventDefault()
    console.log(elSelect.value);
  })

  const elDiv = document.createElement('div')
  const elItem = document.createElement('h4')
  const elPhone = document.createElement('p')
  const elSpan = document.createElement('span')
  elDiv.setAttribute('class', 'text-center border border-info border-start-0 rounded-end contact-div')
  elItem.setAttribute('class', 'list-item')
  elSpan.setAttribute('class', 'list-item')
  elPhone.setAttribute('class', 'list-item')

  elList.appendChild(elDiv)
  elDiv.appendChild(elItem)
  elDiv.appendChild(elSpan)
  elDiv.appendChild(elPhone)


  elItem.innerHTML = elName.value
  elPhone.innerHTML = elSelect.value
  elSpan.innerHTML = elNumber.value

  console.log(elName.value);
  console.log(elSelect.value);
})

let ModeBtn = document.querySelector(".mode");
let theme = false;

ModeBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  let NewBg = theme ? "dark" : "light";
  theme = !theme;
  window.localStorage.setItem("theme", NewBg);
  ChageMode();
});

let ChageMode = () => {
  if (window.localStorage.getItem("theme") == "dark") {
    document.body.classList.add("dark");
  } else document.body.classList.remove("dark");
};
ChageMode();



