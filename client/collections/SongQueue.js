// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

	initialize: function(){
		this.on("add",function(){
			if(this.models.length===1){
				this.playFirst();
			}
		},this);


		this.on("ended", function(){

			console.log(this.models[0]);
			console.log(this.models[1]);
			this.ended();
		},this)

	},

	playFirst: function(){

	}, 

	ended: function(){
		console.log("hi");

		this.models.shift();
		console.log(this.models[0]);
	}
});
