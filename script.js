const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const validEmail =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


form.addEventListener('submit', (e)=>{
if(firstName.value === ''||firstName.value==null){
    e.preventDefault();
    let firstName_Error = document.querySelector('.first-name-error');
    firstName_Error.innerHTML = 'First Name cannot be empty';
    firstName.classList.add('border-[#ff0000]');
    let firstNameErrorIcon = document.querySelector('.first-name-error-icon');
    firstNameErrorIcon.classList.toggle('hidden');
}
if(lastName.value === ''||lastName.value==null){
    e.preventDefault();
    let lastName_Error = document.querySelector('.last-name-error');
    lastName_Error.innerHTML = 'Last Name cannot be empty';
    lastName.classList.add('border-[#ff0000]');
    let lastNameErrorIcon = document.querySelector('.last-name-error-icon');
    lastNameErrorIcon.classList.toggle('hidden');
}
if(email.value === ''||email.value==null){
    e.preventDefault();
    let email_Error = document.querySelector('.email-error');
    email_Error.innerHTML = 'Email cannot be empty';
    email.classList.add('border-[#ff0000]');
    let emailErrorIcon = document.querySelector('.email-error-icon');
    emailErrorIcon.classList.toggle('hidden');
}else if(!email.value.match(validEmail)){
    e.preventDefault();
    let email_Error = document.querySelector('.email-error');
    email_Error.innerHTML = 'Looks like this is not an email';
    email.classList.add('border-[#ff0000]');
    let emailErrorIcon = document.querySelector('.email-error-icon');
    emailErrorIcon.classList.toggle('hidden');
}
if(password.value === ''||password.value==null){
    e.preventDefault();
    let password_Error = document.querySelector('.password-error');
    password_Error.innerHTML = 'Password cannot be empty';
    password.classList.add('border-[#ff0000]');
    let passwordErrorIcon = document.querySelector('.password-error-icon');
    passwordErrorIcon.classList.toggle('hidden');
}
});

