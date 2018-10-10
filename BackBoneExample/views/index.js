/* Backbone js example code....
$(document).ready(function() {
  var FirstMessage = Backbone.View.extend({
		tagName: "span",
		className: "message-info",
		id: "1234",

    initialize: function() {
      this.render();
    },
    render: function() {
			// console.log("Hello World!!!!");
			this.$el.html("Hello Backbone!! Welcome to the World!!");
			console.log(this.el);
			console.log(this.$el);
    }
  });
  var firstMessage = new FirstMessage({
		el:"#message-details"
	});

});

second example of backbone js

$(document).ready(function () {

	var NewMessage = Backbone.View.extend({

			tagName: "p",

			initialize: function() {

				this.$el.html("Hello World!!!");
				return this;

				console.log(this.el);
				console.log(this.$el);
				this.$el.html("Hello Backbone!!!");
				// $("#message-details").html("Hello Backbone!!!");
				console.log("This is my first program in backbone!!")
				},
		});
			var nMess = new NewMessage();
			$("#message-details").html(nMess.$el);

 	});

Third example

$(document).ready(function() {

		var FirstMessage = Backbone.View.extend({
			el:"#message-details",
			// template:_.template($("#tmpl-view").html()),

			initialize: function() {
					this.render();
			},

			render: function() {
				var template = _.template($("#tmpl-view").html());
				this.$el.html(template);
				console.log("Ready to create first SPA using backbone!!!")
				return this;
			}
		});
		var fMess = new FirstMessage();

});

Fourth example//

$(document).ready(function() {

	var ViewExample = Backbone.View.extend({

		el:"#message-details",
		// template:_.template($("#tmpl-view").html()),
		template: $("#tmpl-view").html(),

		initialize: function() {
			this.render();
		},
		render: function(){
			template = _.template(this.template);
			this.$el.html(this.template);
			console.log("fourth example of backbone");
		}
	});
		var vExm = new ViewExample();
});

**** Fifth example (Events using Backbone) ****

**** Sixth example (Model using backbone...)****
$(document).ready(function() {

	var ModelExample = Backbone.Model.extend({

		initialize: function() {
			console.log("This is my model example!!!");
		},
	});

	var modelEx = new ModelExample();

	modelEx.set({
		name: "Pune",
		state: "Maharashtra",
		country: "India"
	});
	console.log(modelEx.toJSON());
	console.log(modelEx.get('name'));
});

7* Pass model data to views *** //

$(document).ready(function() {

	var ModelData = Backbone.Model.extend({

		initialize:function () {
				console.log("I am from ModelData!!!");
				this.on('change', function() {
					console.log("values for the model have changed!!")
				})
		 }

	});
	var mData = new ModelData();
	mData.set(
		{ name:"Mahesh", qualification:"BTech", yearOfPassed: "2010" },
	);
	mData.set(
		 'name', 'The listener is triggered whenever an attribute value changes.'
	);
	console.log('Title has changed: ' + mData.get('name'));

	console.log(mData.get('name'));

	var ModelView = Backbone.View.extend({
		model: mData,
		el: "#message-details",
		template: _.template($("#event-template-view").html()),

		initialize: function () {
				this.render();
		},
		render: function() {
			console.log("I am from ModelView!!");
			console.log(this.model.toJSON());
			console.log(this.model.get('qualification'));
			this.$el.html(this.template(this.model.toJSON()));
		}

	});
	var mView = new ModelView();
});

example-8

var Todo = Backbone.Model.extend({
	defaults: {
	  title: '',
	  completed: false
	}
  });

  var Todo1= Backbone.Model.extend({
	defaults: {
	  title: '',
	  completed: false
	}
  });

  var TodosCollection = Backbone.Collection.extend({
	model: Todo,
	model: Todo1
  });

  var myTodo = new Todo({
	  title:'Books', id: 2,
	  title: 'Pens', id: 5,
	  title: 'Library', id: 7
	});
	var myTodo1 = new Todo1({
		title:'Books', id: 2,
		title: 'Pens', id: 5,
		title: 'Library', id: 7
	  });

  pass array of models on collection instantiation
  var todos = new TodosCollection([[myTodo],[myTodo1]]);
  console.log("Collection size: " + todos.length);

  var collection = new Backbone.Collection([
	{ name: 'Tim', age: 5 },
	{ name: 'Ida', age: 26 },
	{ name: 'Rob', age: 55 }
  ]);

  var filteredNames = collection.chain() // start chain, returns wrapper around collection's models
	.filter(function(item) { return item.get('age') > 30; }) // returns wrapped array excluding Tim
	.map(function(item) { return item.get('name'); }) // returns wrapped array containing remaining names
	.value(); // terminates the chain and returns the resulting array

  console.log(filteredNames);

  var Todo = Backbone.Model.extend({
	defaults: {
	  title: '',
	  completed: false
	}
  });

  var TodosCollection = Backbone.Collection.extend({
	model: Todo,
	url: '/todos'
  });

  var todos = new TodosCollection();
  todos.fetch();

  Backbone.on('event', function() {console.log('Handled Backbone event');});
  Backbone.trigger('event');

  var Todo = Backbone.Model.extend({
	defaults: {
	  title: '',
	  completed: false
	}
  });

  var TodosCollection = Backbone.Collection.extend({
	model: Todo,
	url: '/todos'
  });

  var todos = new TodosCollection();
  todos.fetch();

  var todo2 = todos.get(2);
  todo2.set('title', 'go fishing');
  todo2.save(); // sends HTTP PUT to /todos/2

  todos.create({title: 'Try out code samples'});

  var Todo = Backbone.Model.extend({
	defaults: {
	title:'',
	completed: false
	},

	validate: function(attributes){
	  if(attributes.title === undefined){
		  return "Remember to set a title for your todo.";
	  }
	},

	initialize: function(){
	  console.log('This model has been initialized.');
	  this.on("invalid", function(model, error){
		  console.log(error);
	  });
	}
  });

  var myTodo = new Todo();
  myTodo.set('completed', true, {validate: true}); // logs: Remember to set a title for your todo.
  console.log('completed: ' + myTodo.get('completed')); // completed: false

  var TodoView = Backbone.View.extend({
	model: Todo,
	el: "#message-details",
	el: "#routemenu",

	initialize: function() {
		this.render();
	},

	events: {
		'click a': 'onClick'
	},

	onClick: function() {
		router.navigate('/');
	},
	render: function() {
		var template = _.template($("#event-template-view").html());
		this.$el.html(template);
		console.log('This is from Todo View!!')
		this.$el.html(this.template);
	}
  });

  var Router = Backbone.Router.extend({
	routes: {
		'route/:id' : 'defaultRoute'
	},
  });

  var tView = new TodoView();

Example video:15

var MyModel = Backbone.Model.extend();

var myModel = new MyModel({
  name: "Rohan",
  team: "Backend Team",
  experience: 4
});


var myModel2 = myModel.clone();
myModel2.set("name","Rohit");
myModel2.set("team","frontend");

var MyView = Backbone.View.extend({
  model: myModel2,

  initialize: function() {
    this.render();
  },
  render: function() {
		// console.log("This is the example-15 of Backbone");
		// console.log(this.model.toJSON());
		myModel2.set({
			name:"Rupesh",
			experience: 5
		})
		// console.log(this.model.get('name'));
		// console.log(this.model.hasChanged());
		console.log(this.model.changedAttributes());
		console.log(this.model.previous('experience'));
		console.log(this.model.previousAttributes());

		// console.log(this.model.get('experience'));
  }
});

var myView = new MyView();

 Example 16 : Model inheritance

var MyModel = Backbone.Model.extend({

	initialize:function() {
		console.log('Parent Model is Running!!');
	},
	playing: function() {
		console.log('Parent playing Method is Running!!')
	}
});

var ChildModel = MyModel.extend({
	childMethod: function() {
		console.log('Child Method is Running!!')
	},
	playing: function() {
		MyModel.prototype.playing.apply(this);
		console.log('Child playing Method is Running!!')
	}
});
var childModel = new ChildModel();
console.log(childModel.childMethod());
console.log(childModel.playing());

Collection: example video 17 */



/* Route example: 

var RouteMenu = Backbone.View.extend({  
	el: '#routemenu',  //'el' defines which element to be used as the view reference  
	events: {  
	   'click a' : 'onClick'  
	},  
	onClick: function( e ) {  
	   router.navigate('/');  
	}  
});  
var Router = Backbone.Router.extend({  
   routes: {  
	  'route/:id' : 'defaultRoute'  
   },  
});  
var routemenu = new RouteMenu();  
Backbone.history.start();   */

/* var RouteMenu = Backbone.View.extend ({
	el: '#routemenu',  
	events: {
	   'click a' : 'onClick'
	},
	onClick: function( e ) {
		router.navigate('/');
		
	}
 });
 var Router = Backbone.Router.extend ({
	routes: {
		 'route/:id' : 'defaultRoute'
	}
 });
 
 var routemenu = new RouteMenu();

 Backbone.history.start(); */

 var HomeView = Backbone.View.extend({
	 el:"#content",
	 template: _.template($(".header-view").html()),
	 
	 initialize: function() {
		 this.render();
	 },
	 render:function() {
		 this.$el.html(this.template());
	 }
 });

 var AboutView = Backbone.View.extend({
	el:"#content",
	
	initialize: function() {
		this.render();
	},
	render:function() {
		this.$el.html("About Component");
	}
});

var ContactView = Backbone.View.extend({
	el:"#content",
	
	initialize: function() {
		this.render();
	},
	render:function() {
		this.$el.html("Contacts Component");
	}
});

var ProjectRouter = Backbone.Router.extend({

	routes: {
		"":"homeView",
		"about":"aboutView",
		"contacts":"contactsView"
	},
	homeView: function() {
		var hView = new HomeView();
	},
	aboutView: function() {
		var abView = new AboutView();
	},
	contactsView: function() {
		var ctView = new ContactView();
	}
});

var pRouter = new ProjectRouter();

Backbone.history.start();