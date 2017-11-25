
var app = new Vue({
	el: '#taskApp',
	data:{
		Tasks:[
		{name: '減肥',Done: true}
		]
	},
	methods: {
		AddTask: function() {
				this.Tasks.push({
					name: this.Tasks.name, done: false
				}) 
				this.Tasks.name ='';
			},
			DeleteTask: function(task) {
				this.Tasks.splice(this.Tasks.indexOf(task),1)
			}
		}
	})
