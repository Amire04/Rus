const BASE_URL = `http://localhost:3000`;

async function makeQuery(endpoint, method = `GET`, payload = ``) {
	let options = {
		method,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	};
	const response = await fetch(BASE_URL + endpoint, options);
	if (response.status !== 200) {
		alert('User already exists');
	} else {
		window.location.href = '/login.html';
	}
}

let firstName = document.querySelector(`#firstname`),
	lastName = document.querySelector(`#lastname`),
	emailInp = document.querySelector(`#email`),
	regBut = document.querySelector(`#regBut`),
	password = document.querySelector(`#password`),
	male = document.getElementById('male'),
	female = document.getElementById('female'),
	country = document.getElementById('country'),
	confirmPassword = document.querySelector(`#confirmPassword`);

regBut.addEventListener(`click`, async () => {
	if (password.value !== confirmPassword.value) {
		alert(`Incorrect passwords`);
	} else {
		await makeQuery(`/signup`, `POST`, {
			firstName: firstName.value,
			lastName: lastName.value,
			email: emailInp.value,
			password: password.value,
			sex: male.checked,
			country: country.value,
		});
	}
});
