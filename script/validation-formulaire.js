const form = document.getElementById('form');
const txtNom = document.getElementById('nom');
const txtPrenom = document.getElementById('prenom');
const txtAdresse = document.getElementById('adresse');
const txtVille = document.getElementById('ville');
const txtCodePostal = document.getElementById('codePostal');
const txtTelephone = document.getElementById('telephone');
const courriel = document.getElementById('email');



const validateForm = () => {

    let noError = true;
    const nameValue = txtNom.value.trim();
    const prenomValue = txtPrenom.value.trim();
    const adresseValue = txtAdresse.value.trim();
    const villeValue = txtVille.value.trim();
    const codePostalValue = txtCodePostal.value.trim();
    const telephoneValue = txtTelephone.value.trim();
    const courrielValue = courriel.value.trim();

    if (nameValue === '') {
        setError(txtNom, 'Le nom est requis.');
        noError = false;
    } else {
        setSuccess(txtNom);
    }

    if (prenomValue === '') {
        setError(txtPrenom, 'Le prénom est requis.');
        noError = false;
    } else {
        setSuccess(txtPrenom);
    }

    if (adresseValue === '') {
        setError(txtAdresse, 'L\'adresse est requise.');
        noError = false;
    } else {
        setSuccess(txtAdresse);
    }

    if (villeValue === '') {
        setError(txtVille, 'La ville est requise.');
        noError = false;
    } else {
        setSuccess(txtVille);
    }

    if (codePostalValue === '') {
        setError(txtCodePostal, 'Le code postal est requis.');
        noError = false;
    } else {
        setSuccess(txtCodePostal);
    }

    if (telephoneValue === '') {
        setError(txtTelephone, 'Le numéro de téléphone est requis.');
        noError = false;
    } else {
        setSuccess(txtTelephone);
    }

    if (courrielValue === '') {
        setError(courriel, 'Le courriel est requis.');
        noError = false;
    } else if (!isValidEmail(courrielValue)) {
        setError(courriel, 'Le courriel n\'est pas valide.')
        noError = false;
    } else {
        setSuccess(courriel);
    }

    return noError
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    return re.test(String(email).toLowerCase());
}