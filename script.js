const form = document.querySelector('.form');
const username = document.querySelector('#username');
const password = document.querySelector('#pass');
const password_confirm = document.querySelector('#passconfirm');
const terms = document.querySelector('#terms__checkbox');
const btn_submit = document.querySelector('#btn_submit');
const submited_info = document.querySelector('.submited');
const errors = document.querySelector('.errors');
const errorslist = document.querySelector('.errors__ul');

class User {

  constructor(username, password, agreedterms) {
    this.username = username;
    this.password = password;
    this.agreedterms = agreedterms;
  }
}

document.querySelectorAll('input').forEach((inputfield) => {
  inputfield.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.key === ' ') {
      e.preventDefault();
    }
  });
});


function validate(username, password, password_confirm, terms) {
  errors.removeAttribute('id', 'hidden');
  errorslist.innerHTML = '';


  if (username.value === '' || username.value.trim() === '') {
    const li = document.createElement('li');
    li.textContent = "Username is empty";
    errorslist.appendChild(li);
  }

  if (username.value.length < 6) {
    const li = document.createElement('li');
    li.textContent = "Username must be at least 6 characters";
    errorslist.appendChild(li);
  }

  if (password.value === '' || password.value.trim() === '') {
    const li = document.createElement('li');
    li.textContent = "Password is empty";
    errorslist.appendChild(li);
  }

  if (password.value.length < 6) {
    const li = document.createElement('li');
    li.textContent = "Password must have at least 6 characters";
    errorslist.appendChild(li);
  }

  if (password.value !== password_confirm.value) {
    const li = document.createElement('li');
    li.textContent = "Passwords do not match";
    errorslist.appendChild(li);
  }

  if (!terms.checked) {
    const li = document.createElement('li');
    li.textContent = "Please agree to the terms and conditions";
    errorslist.appendChild(li);
  }
}

btn_submit.addEventListener('click', (e) => {
  e.preventDefault();

  validate(username, password, password_confirm, terms);

  if (errorslist.children.length === 0) {
    const user = new User(username.value, password.value, terms.checked);

    errors.setAttribute('id', 'hidden')
    btn_submit.setAttribute('id', 'hidden')
    submited_info.removeAttribute('id', 'hidden')
    submited_info.firstChild.textContent = `You successfully submitted the user: ${username.value}`;
  }
});






