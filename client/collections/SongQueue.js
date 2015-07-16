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

	}, 

	ended: function(){
		// console.log("songQueue");
		this.remove(this.at(0));
		// console.log("songQueue2");
		if(this.models.length >= 1){
			this.playFirst(); 
		}
	},

	dequeue: function(){
		this.remove();
	}
});

