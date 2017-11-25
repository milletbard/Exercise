
var app = new Vue({
	el: '#taskApp',
	data:{
		Tasks:[
		{name:'餵貓'}
		]
	},
	methods: {
		AddTask: function() {
			this.Tasks.push({
				name: this.Tasks.name
			})
		}
	}
})


