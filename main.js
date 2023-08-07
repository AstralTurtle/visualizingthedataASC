class contact {
	name;

	user;
	email;
	phone;

	imgSrc;

	constructor(name, user, email, phone, imgSrc) {
		this.name = name;
		this.user = user;
		this.email = email;
		this.phone = phone;
		this.imgSrc = imgSrc;
	}
}

let contacts = [];
let contactDivs = [];

function parseJSON(ind) {
	nameArr = [];
	nameArr.push(data.results[ind].name.title);
	nameArr.push(data.results[ind].name.first);
	nameArr.push(data.results[ind].name.last);

	user = data.results[ind].login.username;

	email = data.results[ind].email;

	phone = data.results[ind].phone;

	imgSrc = data.results[ind].picture.large;
	return [nameArr, user, email, phone, imgSrc];
}

function createContact(ind) {
	parseJSON(ind);
	contacts.push(new contact(nameArr, user, email, phone, imgSrc));
}

function createContactDiv(ind) {
	// create div following the template
	// create the div
	let contactDiv = document.createElement("div");
	contactDiv.classList.add("contact");

	// img div
	let imgDiv = document.createElement("div");
	imgDiv.classList.add("img");

	// img
	let contactImg = document.createElement("img");

	// img attributes
	contactImg.src = contacts[ind].imgSrc;
	contactImg.alt =
		contacts[ind].name[0] +
		" " +
		contacts[ind].name[1] +
		" " +
		contacts[ind].name[2];
	contactImg.width = 180;
	contactImg.height = 180;

	imgDiv.appendChild(contactImg);
	contactDiv.appendChild(imgDiv);

	// name div
	let nameDiv = document.createElement("div");
	nameDiv.classList.add("name");
	// name headings
	let first = document.createElement("h1");
	first.innerHTML = contacts[ind].name[0] + " " + contacts[ind].name[1];

	let last = document.createElement("h1");
	last.innerHTML = contacts[ind].name[2];

	nameDiv.appendChild(first);
	nameDiv.appendChild(last);
	contactDiv.appendChild(nameDiv);
	// contact info div
	let contactInfoDiv = document.createElement("div");
	contactInfoDiv.classList.add("contactInfo");

	// username
	let username = document.createElement("h1");
	username.innerHTML = "@" + contacts[ind].user;
	contactInfoDiv.appendChild(username);

	// email
	let email = document.createElement("h1");
	email.innerHTML = contacts[ind].email;
	contactInfoDiv.appendChild(email);

	// phone
	let phone = document.createElement("h1");
	phone.innerHTML = contacts[ind].phone;
	contactInfoDiv.appendChild(phone);

	// append contact info div
	contactDiv.appendChild(contactInfoDiv);
	// add to array and append to main
	contactDivs.push(contactDiv);
	document.querySelector("main").appendChild(contactDiv);
}

for (let i = 0; i < data.results.length; i++) {
	createContact(i);
}

for (let i = 0; i < contacts.length; i++) {
	createContactDiv(i);
}

document.querySelector("title").innerHTML = `Contacts | ${contacts.length}`;
