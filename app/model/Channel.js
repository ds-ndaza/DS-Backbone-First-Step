/*
	Models are the heart of any JavaScript application, containing the 
	interactive data as well as a large part of the logic surrounding it: 
	conversions, validations, computed properties, and access control.
*/

Channel = Backbone.Model.extend({
	defaults: {
		id: 0,
		name: '',
		num: 0,
		logo: ''
	},
	initialize:function(){
	}
});