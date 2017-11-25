
var app = new Vue({
	el: '#taskApp',
	data:{
		Tasks:[],
		Task:''
	},
	methods: {
		AddTask: function() {
				this.Tasks.push({
					name: this.Task, done: false
				}) 
				this.Tasks.name ='';
			},
			DeleteTask: function(task) {
				this.Tasks.splice(this.Tasks.indexOf(task),1)
			}
		}
	})
