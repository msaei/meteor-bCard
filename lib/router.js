Router.configure({ layoutTemplate: 'layout' }); 
Router.route('/:name', {name: 'bCard'});
Router.route('/new' , {name: "newForm"});