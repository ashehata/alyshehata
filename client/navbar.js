Template.navbar.helpers({
	active: function(template){
      var currentRoute = Router.current();
      return currentRoute &&
        template === currentRoute.lookupTemplate() ? 'active' : '';
	}
})