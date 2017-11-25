

var tasks = [];
var task = '';

var app = new Vue({
	el: '#taskApp',
	data:function() {
		return {
			tasks:[],
			task:''
		}
	},
	methods: {
		addTask: function() {
			if (this.task == '') {
			} else {
				this.tasks.push({
					name: this.task, done: false
				}) 
				this.task ='';
			}
			},
			DeleteTask: function(task) {
				this.tasks.splice(this.tasks.indexOf(task),1)
			}
		}
	})
