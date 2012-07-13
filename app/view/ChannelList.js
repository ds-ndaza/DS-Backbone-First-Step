/*
	Backbone views are used to reflect what your applications' data models look like. 
	They are also used to listen to events and react accordingly.
*/

ChannelsList = Backbone.View.extend({
	initialize:function( )	{
		this.render( );
	},
	render: function( )	{
		var variables = { 
			logo: "http://ppawebservices.com/channel_logos/cartoon.jpg",  
			name: "Cartoon Network",
			num: 300
		};
		// Compile the template using underscore
		var template = _.template( '<img src="<%= logo %>" /><h1><%= name %></h1><h6><b>Canales:</b> <%= num %></h6>', variables );
		// Load the compiled HTML into the Backbone "el"
		this.$el.html( template );
	},
	events: {
		"click h1": "viewChannel"  
	},
	viewChannel: function( event ){
		// Element clicked, you can access the element that was clicked with event.currentTarget
		alert( $(event.currentTarget).text() );
	}
});