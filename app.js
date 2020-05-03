const signupLink = document.querySelector('#signup-link');
const loginLink = document.querySelector('#login-link');
const signupFormContainer = document.querySelector('.form-container__signup');
const loginFormContainer = document.querySelector('.form-container__login');

const signupForm = document.querySelector('.signup-form');
const loginForm = document.querySelector('.login-form');

signupLink.addEventListener('click', () => {
	signupFormContainer.classList.remove('hide');
	loginFormContainer.classList.add('hide');
});

loginLink.addEventListener('click', () => {
	signupFormContainer.classList.add('hide');
	loginFormContainer.classList.remove('hide');
});

loginForm.addEventListener('submit', event => {
	event.preventDefault();
	const emailInput = loginForm.querySelector('#email');
	const passwordPassword = loginForm.querySelector('#password');

	if (!emailInput.value.trim()) flashMessage(emailInput, 'email is empty!');
	if (!passwordPassword.value.trim())
		flashMessage(passwordPassword, 'password is empty!');

	const isEmailValid = checkEmail(emailInput.value.trim());
	if (!isEmailValid && emailInput.value.trim()) {
		flashMessage(emailInput, 'invalid email!');
	}
});

signupForm.addEventListener('submit', e => {
	e.preventDefault();
	const email = signupForm.querySelector('#signup-email');
	const password = signupForm.querySelector('#signup-password');
	const confirmPassword = signupForm.querySelector('#signup-confirm-password');

	if (!email.value.trim()) flashMessage(email, 'email is empty!');
	if (!password.value.trim()) flashMessage(password, 'password is empty!');
	if (!confirmPassword.value.trim())
		flashMessage(confirmPassword, 'password is empty!');

	const isEmailValid = checkEmail(email.value.trim());
	if (!isEmailValid && email.value.trim()) {
		flashMessage(email, 'invalid email!');
	}

	if (
		password.value.trim() &&
		email.value.trim() &&
		password.value.trim().length < 8
	) {
		flashMessage(password, 'password must be 8 charector long!');
	}

	if (
		password.value.trim() !== confirmPassword.value.trim() &&
		confirmPassword.value.trim()
	) {
		flashMessage(confirmPassword, 'password does not match!');
	}
});

const flashMessage = (element, message) => {
	const msg = element.closest('div').previousElementSibling;
	msg.textContent = message;
	msg.style.visibility = 'visible';
	setTimeout(() => {
		msg.style.visibility = 'hidden';
	}, 3000);
};

const checkEmail = email => {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};
