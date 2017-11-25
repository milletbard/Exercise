
var app = new Vue({
	el: '#taskApp',
	data:{
		Tasks:[
		{name: '減肥',Done: true}
		]
	},
	methods: {
		AddTask: function() {
			
			if ( this.Tasks.name === null ) {
				alert('null');
			} else {
				this.Tasks.push({
					name: this.Tasks.name, done: false
				}) 
			}
		}
	}
})


