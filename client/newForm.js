Template.newForm.events({
	'submit form': (event, template) => {
		event.preventDefault();
		let firstName = template.find('#firstName').value;
		let lastName = template.find('#lastName').value;
		let lastName = template.find('#quote').value;
		let lastName = template.find('#gender').value;
		let lastName = template.find('#githubLink').value;

		console.log(firstName);
	}


})