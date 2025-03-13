function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");

// Ouvrir la modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
  modalbg.style.display = "block";
}


//Fermer la modal
const modalClose = document.querySelectorAll(".close");
modalClose.forEach((close) => close.addEventListener("click", closeModal))
function closeModal() {
  modalbg.style.display = "none"
  modalSuccess.style.display = "none"
}


//Pointer les differents champs du form

const firstName = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const newYork = document.getElementById("location1");
const sanFrancisco = document.getElementById("location2");
const seattle = document.getElementById("location3");
const chicago = document.getElementById("location4");
const boston = document.getElementById("location5");
const portLand = document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const submit = document.querySelectorAll(".btn-submit")
const form = document.getElementById("form");

//Ecoute au submit du form

form.addEventListener("submit", event => {
  event.preventDefault();
  validate();
})



  let firstNameChecked;
  let lastChecked;
  let emailChecked;
  let dateChecked;
  let quantityChecked;
  let radioChecked;
  let checkbox1Checked;


//Différentes conditions pour compléter le formulaire

function validate () {
  if(firstName.value.length < 2 || firstName.value === null || firstName.value === "") {
    setError(firstName, "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.")
    firstNameChecked = false
} else {
  setSuccess(firstName)
  firstNameChecked = true
}

  if(last.value.length < 2 || last.value === null || last.value === '') {
    setError(last, "Veuillez entrer 2 caractères ou plus pour le champ du nom.")
    lastChecked = false
  } else {
    setSuccess(last)
    lastChecked = true
  }

const isEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
  if (!isEmail.test(email.value) || email.value === null || email.value === "") {
    setError(email, "Entrez une adresse mail valide")
    emailChecked = false
  } else {
    setSuccess(email)
    emailChecked = TransformStreamDefaultController
  }

const isdate = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/;
if(birthDate.value.match(isdate) || birthDate.value === null || birthDate.value === "") {
  setError(birthDate, "Vous devez entrer votre date de naissance.")
  console.log(!birthDate.value.match(isdate))
  dateChecked = false
} else {
  setSuccess(birthDate)
  dateChecked = true
}

if(!quantity === Number || quantity.value === null || quantity.value === "") {
  setError(quantity, "Une valeur numérique doit être saisie.")
  quantityChecked = false
} else {
  setSuccess(quantity)
  quantityChecked = true
}


if (!newYork.checked && !sanFrancisco.checked && !seattle.checked && !chicago.checked && !boston.checked && !portLand.checked) {
  setError(newYork, "Vous devez choisir une ville.")
  radioChecked = false
} else {
  setSuccess(newYork)
  radioChecked = true
}

if(!checkbox1.checked) {
  setError(checkbox1, "Vous devez vérifier que vous acceptez les termes et conditions.")
  checkbox1Checked = false
} else {
  setSuccess(checkbox1)
  checkbox1Checked = true
}

allSuccess()
} 



const modalSuccess = document.querySelector(".modal-success");
const closes = document.querySelectorAll(".closes");
closes.forEach((btn) => btn.addEventListener("click", closeModal))


function allSuccess () {
  console.log(firstNameChecked && lastChecked && emailChecked && dateChecked && quantityChecked && radioChecked && checkbox1Checked)

  if(firstNameChecked && lastChecked && emailChecked && dateChecked && quantityChecked && radioChecked && checkbox1Checked) {
    modalbg.style.display = "none"
    modalSuccess.style.display = "block"
  }
}

//Fonction pour gérer les erreurs lors du formulaire

const setError = (input, message) => {
  const formData = input.parentElement;
	const small = formData.querySelector('small');
	formData.className = 'formData error';
	small.innerText = message;
}

//Fonction pour gérer les succès lors du formulaire

function setSuccess(input) {
	const formData = input.parentElement;
	formData.className = 'formData success';
}
