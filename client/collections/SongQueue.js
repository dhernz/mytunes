// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

	initialize: function(){
		this.on("add",function(){
			if(this.models.length===1){
				this.playFirst();
			}
		},this);

		this.on("ended", function(){
			this.ended();
		},this);

		this.on("dequeue", function(){
			this.dequeue();
		},this);

		
	},

	playFirst: function(){
		// // when playFirst is trigger, check the first element in the SongQueue, and on the model called the play. 
		// // console.log(this.models);
		this.at(0).play();

	}, 

	ended: function(){
		this.remove(this.at(0));
		if(this.models.length >= 1){
			this.playFirst(); 
		}
	},

	dequeue: function(){
		this.remove();
	}
});

