(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("Ak6iiIJ1AAIAAFGIp1AAg");
	this.shape.setTransform(0.175,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("Ak6CkIAAlHIJ1AAIAAFHg");
	this.shape_1.setTransform(0.175,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.3,-17.3,65,34.7);


// stage content:
(lib.nh_u1_s1_p5_calories = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.stop(1);
		
		this.button_bread.addEventListener("click", Button_bread_function.bind(this));
		
		function Button_bread_function() {
			
			this.gotoAndStop(1);	
		}
		
		this.stop(2);
		
		this.button_eggs.addEventListener("click", Button_eggs_function.bind(this));
		
		function Button_eggs_function() {
			
			this.gotoAndStop(2);	
		}
		
		this.stop(3);
		
		this.button_fat.addEventListener("click", Button_fat_function.bind(this));
		
		function Button_fat_function() {
			
			this.gotoAndStop(3);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// buttons
	this.button_fat = new lib.button();
	this.button_fat.name = "button_fat";
	this.button_fat.setTransform(826.25,294.5,3.5503,5.252,0,0,0,1,1.2);
	new cjs.ButtonHelper(this.button_fat, 0, 1, 1);

	this.button_eggs = new lib.button();
	this.button_eggs.name = "button_eggs";
	this.button_eggs.setTransform(582.65,194.4,2.6711,3.7151,0,0,0,2,1);
	new cjs.ButtonHelper(this.button_eggs, 0, 1, 1);

	this.button_bread = new lib.button();
	this.button_bread.name = "button_bread";
	this.button_bread.setTransform(244.35,252.7,5.9857,5.6709,0,0,0,0.8,1);
	new cjs.ButtonHelper(this.button_bread, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_bread},{t:this.button_eggs},{t:this.button_fat}]}).wait(4));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#285C9B").s().p("AgqA4IAAgRQAJAEAKADQAKADAJAAQAOAAAIgFQAIgFgBgJQAAgHgFgFQgHgGgRgHQgRgFgHgFQgIgFgDgGQgEgGABgIQAAgPALgJQANgJAUAAQAUAAATAJIgHAPQgSgIgPAAQgNAAgGAEQgHAEAAAIQAAAFADADQACAEAGADIAUAJQAWAHAIAIQAIAIgBAMQAAARgMAKQgNAJgWAAQgYAAgOgIg");
	this.shape.setTransform(454.95,105.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQALAMASAAQATAAAUgJIAAARQgKAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_1.setTransform(443,105.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#285C9B").s().p("AgIBUIAAh5IARAAIAAB5gAgHg9QgDgDAAgHQAAgGADgDQADgDAEgBQAEABAEADQADADAAAGQAAAHgDADQgEACgEAAQgEAAgDgCg");
	this.shape_2.setTransform(433.6,103.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#285C9B").s().p("AgiA/IAAh6IAPAAIACAWIABAAQAHgMAJgGQAJgHAMAAQAIAAAGACIgCARQgIgCgGAAQgPAAgJANQgLAMAAASIAABBg");
	this.shape_3.setTransform(426.875,105.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#285C9B").s().p("AgdA4QgMgIgIgOQgHgOAAgUQABgdAPgRQAOgRAaAAQAaAAAPASQAPARABAcQgBAegPARQgPARgaAAQgQAAgNgIgAgbgjQgKAMAAAXQAAAYAKAMQAKAMARAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgRAAgKAMg");
	this.shape_4.setTransform(414.45,105.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#285C9B").s().p("AgIBXIAAitIARAAIAACtg");
	this.shape_5.setTransform(404.625,103.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#285C9B").s().p("AgmA2QgLgJAAgSQAAgkA7gCIAVAAIAAgIQAAgPgGgGQgGgHgOAAQgPAAgTAJIgFgOQAJgFAKgDQALgDAKAAQAWAAAKAKQALAKAAAWIAABSIgNAAIgEgRIgBAAQgJAMgKADQgIAEgNAAQgTAAgKgJgAAMACQgVABgKAFQgKAHAAAMQAAALAGAFQAHAFAKABQARAAAJgKQALgJgBgSIAAgLg");
	this.shape_6.setTransform(394.95,105.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#285C9B").s().p("AgdAwQgPgRABgeQAAgeAPgRQAOgRAaAAQAKAAAIACQAJACAGADIgHAQIgNgEQgHgCgGAAQglAAAAAvQAAAWAKANQAJAMARAAQAPAAARgHIAAARQgNAGgTAAQgaAAgOgQg");
	this.shape_7.setTransform(383.8,105.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#285C9B").s().p("AASBSIAAglIhOAAIAAgRIBNhtIATAAIAABtIAZAAIAAARIgZAAIAAAlgAAJgsIgzBIIA8AAIAAg2IACgkIgBAAg");
	this.shape_8.setTransform(365.55,103.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#285C9B").s().p("AgqA4IAAgRQAJAEAKADQAKADAJAAQAOAAAIgFQAIgFAAgJQgBgHgFgFQgHgGgRgHQgRgFgHgFQgIgFgDgGQgDgGAAgIQgBgPAMgJQANgJAUAAQAUAAATAJIgGAPQgTgIgPAAQgMAAgHAEQgHAEAAAIQAAAFACADQADAEAGADIAUAJQAXAHAHAIQAIAIAAAMQAAARgNAKQgNAJgWAAQgYAAgOgIg");
	this.shape_9.setTransform(347.6,105.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#285C9B").s().p("AAhA/IAAhPQAAgPgHgHQgHgIgPAAQgSAAgJALQgJAKAAAYIAABAIgSAAIAAh6IAPAAIADARIABAAQAFgKALgFQAKgFAMAAQAWAAALALQALALAAAXIAABQg");
	this.shape_10.setTransform(335.075,105.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#285C9B").s().p("AgIBUIAAh5IARAAIAAB5gAgHg9QgDgDAAgHQAAgGADgDQAEgDADgBQAEABAEADQADADAAAGQAAAHgDADQgEACgEAAQgDAAgEgCg");
	this.shape_11.setTransform(325.05,103.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#285C9B").s().p("AgmA2QgLgJAAgSQAAgkA7gCIAVAAIAAgIQAAgPgGgGQgGgHgOAAQgOAAgUAJIgFgOQAIgFALgDQALgDAKAAQAWAAAKAKQALAKAAAWIAABSIgNAAIgEgRIgBAAQgKAMgJADQgIAEgNAAQgTAAgKgJgAAMACQgVABgKAFQgKAHAAAMQAAALAGAFQAHAFAKABQARAAAJgKQAKgJAAgSIAAgLg");
	this.shape_12.setTransform(315.4,105.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#285C9B").s().p("AgSAnIAAhIIgRAAIAAgJIARgIIAIgaIAKAAIAAAdIAkAAIAAAOIgkAAIAABIQAAALAFAGQAFAGAKAAIAJgBIAIgCIAAAPIgJACIgLABQgjAAAAgmg");
	this.shape_13.setTransform(305.3,104.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#285C9B").s().p("AAhA/IAAhPQAAgPgHgHQgHgIgPAAQgSAAgJALQgJAKAAAYIAABAIgSAAIAAh6IAPAAIADARIABAAQAFgKALgFQAKgFAMAAQAWAAALALQALALAAAXIAABQg");
	this.shape_14.setTransform(294.325,105.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#285C9B").s().p("AgdA4QgMgIgIgOQgGgOAAgUQAAgdAOgRQAPgRAaAAQAaAAAQASQAPARgBAcQABAegPARQgQARgaAAQgQAAgNgIgAgbgjQgJAMAAAXQAAAYAJAMQAKAMARAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgRAAgKAMg");
	this.shape_15.setTransform(280.3,105.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#285C9B").s().p("AgdAwQgOgRAAgeQAAgeAOgRQAPgRAbAAQAJAAAJACQAJACAEADIgFAQIgOgEQgHgCgGAAQgkAAAAAvQAAAWAJANQAJAMARAAQAPAAAQgHIAAARQgMAGgSAAQgaAAgPgQg");
	this.shape_16.setTransform(268.2,105.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#285C9B").s().p("AgqA4IAAgRQAJAEAKADQAKADAJAAQAOAAAIgFQAIgFgBgJQAAgHgFgFQgHgGgRgHQgRgFgHgFQgIgFgDgGQgEgGABgIQAAgPALgJQANgJAUAAQAUAAATAJIgHAPQgSgIgPAAQgNAAgGAEQgHAEAAAIQAAAFADADQACAEAGADIAUAJQAWAHAIAIQAIAIgBAMQAAARgMAKQgNAJgWAAQgYAAgOgIg");
	this.shape_17.setTransform(251.1,105.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQALAMASAAQATAAAUgJIAAARQgKAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_18.setTransform(239.15,105.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#285C9B").s().p("AgSAnIAAhIIgRAAIAAgJIARgIIAIgaIAKAAIAAAdIAkAAIAAAOIgkAAIAABIQAAALAFAGQAFAGAJAAIAKgBIAHgCIAAAPIgIACIgLABQgjAAAAgmg");
	this.shape_19.setTransform(228.55,104.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#285C9B").s().p("AgmA2QgLgJAAgSQABgkA6gCIAVAAIAAgIQAAgPgGgGQgHgHgNAAQgPAAgTAJIgFgOQAIgFAMgDQAKgDAKAAQAWAAALAKQALAKgBAWIAABSIgOAAIgDgRIgBAAQgJAMgJADQgKAEgNAAQgSAAgKgJgAAMACQgVABgKAFQgKAHAAAMQAAALAHAFQAFAFAMABQAQAAAKgKQAKgJAAgSIAAgLg");
	this.shape_20.setTransform(217.8,105.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#285C9B").s().p("AgiA/IAAh6IAPAAIACAWIABAAQAHgMAJgGQAJgHAMAAQAIAAAGACIgCARQgIgCgGAAQgPAAgJANQgLAMAAASIAABBg");
	this.shape_21.setTransform(207.975,105.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#285C9B").s().p("AgnBIQgOgRAAgeQAAgdAOgRQANgRAYAAQAYAAANASIACAAIgBgJIgBgIIAAgyIATAAIAACtIgPAAIgDgQIgBAAQgNASgYAAQgYAAgNgQgAgZgKQgJAMAAAXQAAAYAJAMQAJAMAQAAQATAAAIgKQAIgLAAgXIAAgEQAAgZgIgLQgJgLgSAAQgRAAgIAMg");
	this.shape_22.setTransform(195.1,103.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#285C9B").s().p("Ag3BXIAAgPQAGACAIAAQATAAAIgWIAHgSIgyh6IAUAAIAbBGQAJAXABALIABAAIAGgTIAfhVIAUAAIg1CLQgHAVgKAIQgLAJgPAAQgJAAgIgCg");
	this.shape_23.setTransform(182.625,108.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#285C9B").s().p("AAhBXIAAhPQAAgOgHgIQgHgHgPAAQgSAAgJAKQgJALAAAXIAABAIgSAAIAAitIASAAIAAA0IgBAQIABAAQAGgJAKgFQAKgFAMAAQAXAAALALQALALAAAWIAABQg");
	this.shape_24.setTransform(169.875,103.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#285C9B").s().p("AgdA4QgNgIgGgOQgIgOABgUQgBgdAQgRQAPgRAZAAQAaAAAQASQAOARAAAcQAAAegOARQgQARgaAAQgQAAgNgIgAgbgjQgKAMAAAXQAAAYAKAMQAJAMASAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgSAAgJAMg");
	this.shape_25.setTransform(155.85,105.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#285C9B").s().p("AgSBUQgKgEgHgKIgBAAIgEAQIgNAAIAAitIASAAIAAAqIgBAaIABAAQANgTAZAAQAZAAANARQANAQAAAeQAAAegNARQgOAQgYAAQgLAAgKgEgAgagLQgJALAAAZQAAAaAJALQAIALATAAQARAAAIgNQAJgMAAgYQAAgYgJgKQgIgMgSAAQgRAAgJALg");
	this.shape_26.setTransform(142.25,103.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#285C9B").s().p("AgiA/IAAh6IAPAAIACAWIABAAQAHgMAJgGQAJgHAMAAQAIAAAGACIgCARQgIgCgGAAQgPAAgJANQgLAMAAASIAABBg");
	this.shape_27.setTransform(131.025,105.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#285C9B").s().p("AgmA2QgLgJAAgSQAAgkA7gCIAVAAIAAgIQAAgPgGgGQgGgHgOAAQgOAAgUAJIgGgOQAKgFAKgDQALgDAKAAQAWAAAKAKQALAKAAAWIAABSIgNAAIgEgRIgBAAQgKAMgJADQgIAEgNAAQgTAAgKgJgAAMACQgVABgKAFQgKAHAAAMQAAALAGAFQAHAFAKABQARAAAJgKQAKgJAAgSIAAgLg");
	this.shape_28.setTransform(118.75,105.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#285C9B").s().p("AgdAwQgPgRAAgeQABgeAPgRQAOgRAaAAQAKAAAIACQAKACAEADIgGAQIgNgEQgHgCgGAAQglAAAAAvQAAAWAKANQAJAMARAAQAQAAAQgHIAAARQgNAGgTAAQgaAAgOgQg");
	this.shape_29.setTransform(107.6,105.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#285C9B").s().p("AgTBYIAAhrIgWAAIAAgJIAWgHIAAgHQAAgtAmAAQAKAAANAEIgFAPQgLgDgHAAQgLgBgFAIQgEAHAAAPIAAAIIAeAAIAAAPIgeAAIAABrg");
	this.shape_30.setTransform(92.725,103);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#285C9B").s().p("AgdA4QgMgIgHgOQgIgOAAgUQABgdAPgRQAPgRAZAAQAaAAAQASQAPARAAAcQAAAegPARQgQARgaAAQgQAAgNgIgAgbgjQgKAMAAAXQAAAYAKAMQAJAMASAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgSAAgJAMg");
	this.shape_31.setTransform(81.25,105.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#285C9B").s().p("AgsBSQgNgKAAgQQAAgMAHgHQAIgJANgCQgFgDgEgEQgDgFAAgFQAAgIAEgEQADgEAIgGQgKgDgFgJQgHgKAAgMQAAgVAMgLQANgLAWABQAJgBAHADIArAAIAAALIgXAEQADADADAHQADAGgBAIQAAASgMALQgNALgUAAIgKgBQgMAGAAAIQAAAGAEACQAEADAKAAIAVAAQAUgBALAJQALAJAAAPQAAAVgRALQgRAKgeABQgYAAgNgJgAggAmQgHAHAAAKQAAALAJAFQAHAFARAAQAWAAALgHQAMgHAAgMQgBgKgFgEQgHgEgRAAIgVAAQgNAAgHAGgAgWhFQgHAIAAANQAAANAIAHQAGAHANgBQAbAAAAgaQAAgcgbAAQgNABgHAGg");
	this.shape_32.setTransform(62,108.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#285C9B").s().p("AALBSIAAh0IABgbIgFAEIgaAWIgKgNIArghIAQAAIAACjg");
	this.shape_33.setTransform(47.675,103.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#285C9B").s().p("AgtA5IAAgXQAWAKATAAQAYAAAAgOQAAgFgDgDQgDgDgGgEIgQgHQgWgIgHgIQgIgIAAgOQAAgQANgIQANgJAVAAQAWAAAUAJIgJAUQgUgJgOAAQgUAAAAAMQAAAGAGAEQAFAEASAHQAPAGAHAEQAHAFADAGQAEAHAAAJQAAASgOAKQgNAJgYAAQgYAAgQgHg");
	this.shape_34.setTransform(327.925,72.225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#285C9B").s().p("AgmAwQgQgRAAgeQAAgdAPgSQAPgRAaAAQAYAAAOAPQAPAPAAAaIAAANIhSAAQABASAJAKQAJAKAQAAQALAAAKgCQAJgDAKgEIAAAVQgJAFgKACQgJABgOAAQgbAAgRgQgAAdgMQAAgPgIgIQgGgIgNAAQgMAAgHAIQgIAIgBAPIA3AAIAAAAg");
	this.shape_35.setTransform(315.65,72.225);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#285C9B").s().p("AgWAlIAAhBIgRAAIAAgMIASgKIAJgaIAQAAIAAAcIAjAAIAAAUIgjAAIAABBQgBAKAFAFQAFAEAIAAQAKAAAJgDIAAAUIgMADIgNABQglAAAAgog");
	this.shape_36.setTransform(304.45,70.95);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#285C9B").s().p("AgpA3QgLgKAAgSQAAgUAPgIQAOgKAcgBIAWgBIAAgGQAAgMgGgGQgGgGgLAAQgJAAgJADIgQAGIgJgSQAKgGAMgCQAMgDAKAAQAYAAAMAKQAMAKAAAXIAABSIgTAAIgFgRIgBAAQgJALgJAEQgKAEgNAAQgSAAgKgJgAAKAEQgRAAgJAGQgIAFAAAMQAAAIAFAFQAFAEAKAAQANAAAJgIQAIgIAAgOIAAgLg");
	this.shape_37.setTransform(292.975,72.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#285C9B").s().p("AglA/IAAh7IAUAAIAEAWIABAAQAGgLAKgHQAKgGALAAIANABIgDAZQgFgCgGAAQgQAAgJAKQgKALAAAQIAABAg");
	this.shape_38.setTransform(282.5,72.125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#285C9B").s().p("AgqBIQgOgRAAgfQAAgdAOgRQANgRAXAAQAXAAANASIACAAQgCgNAAgIIAAgtIAaAAIAACtIgUAAIgFgQIgBAAQgNASgXAAQgXAAgNgQgAgVgGQgIAKAAAVQAAAUAIALQAHALAOAAQAQAAAHgJQAIgJAAgVIAAgDQAAgYgIgJQgHgKgQAAQgOAAgHAMg");
	this.shape_39.setTransform(269.3,69.825);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#285C9B").s().p("Ag4BYIAAgVQAGABAIAAQATAAAIgWIAEgMIgyh7IAdAAIAZBGQAGAQABAMIABAAIAEgOIAchUIAdAAIg2CMQgNAngiAAQgJAAgIgCg");
	this.shape_40.setTransform(256.375,75.025);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#285C9B").s().p("AAcBXIAAhMQAAgNgFgIQgGgHgNAAQgPAAgJAKQgHAJAAAYIAAA9IgbAAIAAitIAbAAIAAAsIgCAXIACAAQAFgJAKgFQAJgFANAAQAtAAAAAsIAABRg");
	this.shape_41.setTransform(243,69.725);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#285C9B").s().p("AgeA5QgNgIgIgPQgHgPAAgTQAAgdAQgRQAPgRAbAAQAbAAAQARQAQARAAAdQAAAegQARQgPARgcAAQgRAAgNgHgAgXgfQgIALAAAUQAAArAfAAQAgAAAAgrQAAgqggAAQgQAAgHALg");
	this.shape_42.setTransform(228.675,72.225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#285C9B").s().p("AgdBIIgCAAIgFAOIgTAAIAAitIAaAAIAAApIAAAOIgBALIABAAQANgSAXAAQAXAAANARQANAQAAAeQAAAegNASQgNAQgXAAQgXAAgNgQgAgWgIQgHAIAAAWIAAACQAAAXAHAKQAHAKAQAAQAOAAAHgLQAHgLAAgVQAAgqgdAAQgPAAgHAKg");
	this.shape_43.setTransform(214.875,69.825);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#285C9B").s().p("AglA/IAAh7IAVAAIADAWIABAAQAGgLAJgHQALgGALAAIANABIgCAZQgGgCgHAAQgPAAgJAKQgKALAAAQIAABAg");
	this.shape_44.setTransform(203.15,72.125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#285C9B").s().p("AgpA3QgLgKAAgSQAAgUAPgIQAOgKAcgBIAWgBIAAgGQAAgMgGgGQgGgGgLAAQgJAAgJADIgQAGIgJgSQAKgGAMgCQAMgDAKAAQAYAAAMAKQAMAKAAAXIAABSIgTAAIgFgRIgBAAQgJALgJAEQgKAEgNAAQgSAAgKgJgAAKAEQgRAAgJAGQgIAFAAAMQAAAIAFAFQAFAEAKAAQANAAAJgIQAIgIAAgOIAAgLg");
	this.shape_45.setTransform(190.425,72.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#285C9B").s().p("AgqA/QgTgWAAgpQAAgYAJgUQAKgTARgKQASgKAXAAQAZAAAVAKIgJAXIgSgHQgJgDgKAAQgWAAgOAQQgNARAAAbQAAAfANAPQANAQAXAAQAKAAAKgCIAUgGIAAAXQgTAHgYAAQgkAAgTgVg");
	this.shape_46.setTransform(177.175,70.225);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAANAQQAOAPAAAZIAAALIhUAAQABAVAKALQAKAMATAAQATAAATgJIAAARQgJAEgJACQgJACgMAAQgaAAgQgRgAAggLQAAgRgIgKQgHgJgQAAQgNAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_47.setTransform(726.7,106.025);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#285C9B").s().p("AgIBVIAAh6IASAAIAAB6gAgGg+QgEgDAAgGQAAgHAEgDQADgCADAAQAEAAAEACQADAEAAAGQAAAGgDADQgEAEgEAAQgDAAgDgEg");
	this.shape_48.setTransform(717.3,103.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#285C9B").s().p("AgdA4QgMgIgIgOQgGgOgBgUQAAgdAPgRQAPgRAaAAQAaAAAPASQAPARAAAcQAAAegPARQgPARgaAAQgQAAgNgIgAgbgjQgKAMABAXQgBAYAKAMQAKAMARAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgSAAgJAMg");
	this.shape_49.setTransform(698.15,106.025);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#285C9B").s().p("AgmA3QgLgKABgRQgBglA7gBIAVgCIAAgHQAAgOgGgIQgGgGgOAAQgOAAgUAJIgGgOQAJgFALgDQALgDAKABQAWAAAKAJQAMAKAAAVIAABUIgOAAIgEgSIgBAAQgKAMgJADQgIAFgNAAQgSAAgLgJgAAMACQgVAAgKAHQgKAGAAANQAAAKAGAFQAGAGALgBQARAAAJgJQAKgKAAgRIAAgLg");
	this.shape_50.setTransform(678.65,106.05);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#285C9B").s().p("AgdAwQgPgRAAgeQABgeAPgRQAOgRAbAAQAIAAAKACQAIACAFADIgGAQIgNgEQgHgCgGAAQglAAAAAvQAAAWAKANQAJAMARAAQAQAAAQgHIAAARQgNAGgTAAQgaAAgOgQg");
	this.shape_51.setTransform(667.5,106.025);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#285C9B").s().p("AASBTIAAgmIhOAAIAAgQIBNhvIATAAIAABuIAZAAIAAARIgZAAIAAAmgAAJgsIgyBIIA7AAIAAg2IACgkIgBAAg");
	this.shape_52.setTransform(649.25,103.95);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#285C9B").s().p("AgrA4IAAgRQAKAEAKADQAKADAJAAQAOAAAIgFQAIgFAAgJQAAgHgHgFQgGgGgRgHQgRgFgHgFQgHgFgEgGQgDgGgBgIQABgPALgJQANgJAUAAQAUAAATAJIgGAPQgTgIgPAAQgMAAgHAEQgHAEAAAIQAAAFACADQADAEAGADIAVAJQAVAHAIAIQAIAIAAAMQAAARgNAKQgNAJgWAAQgZAAgOgIg");
	this.shape_53.setTransform(631.3,106.025);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#285C9B").s().p("AgIBVIAAh6IARAAIAAB6gAgGg+QgEgDAAgGQAAgHAEgDQADgCADAAQAEAAAEACQADAEAAAGQAAAGgDADQgEAEgEAAQgDAAgDgEg");
	this.shape_54.setTransform(608.75,103.75);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#285C9B").s().p("AgmA3QgKgKAAgRQgBglA7gBIAVgCIAAgHQAAgOgGgIQgHgGgNAAQgOAAgUAJIgGgOQAKgFAKgDQALgDAKABQAWAAAKAJQAMAKAAAVIAABUIgPAAIgDgSIgBAAQgKAMgIADQgKAFgNAAQgRAAgLgJgAAMACQgVAAgKAHQgKAGAAANQAAAKAHAFQAGAGAKgBQARAAAJgJQALgKAAgRIAAgLg");
	this.shape_55.setTransform(599.1,106.05);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#285C9B").s().p("AgdAwQgOgRAAgeQgBgeAPgRQAPgRAaAAQAJAAAJACQAJACAGADIgHAQIgNgEQgHgCgGAAQgkAAAAAvQAAAWAJANQAJAMARAAQAQAAAPgHIAAARQgMAGgTAAQgZAAgPgQg");
	this.shape_56.setTransform(551.9,106.025);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#285C9B").s().p("AAhA/IAAhPQAAgPgHgHQgHgIgPAAQgSAAgJALQgJAKAAAYIAABAIgSAAIAAh6IAPAAIADARIABAAQAFgKALgFQAKgFAMAAQAWAAALALQALALAAAXIAABQg");
	this.shape_57.setTransform(533.225,105.925);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#285C9B").s().p("AgIBVIAAh6IASAAIAAB6gAgGg+QgEgDAAgGQAAgHAEgDQACgCAEAAQAFAAADACQADAEAAAGQAAAGgDADQgDAEgFAAQgEAAgCgEg");
	this.shape_58.setTransform(523.2,103.75);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAOgRQAPgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQAKAMASAAQAUAAAUgJIAAARQgKAEgJACQgJACgMAAQgaAAgQgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgBARIA/AAIAAAAg");
	this.shape_59.setTransform(513.9,106.025);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#285C9B").s().p("AgdA4QgMgIgIgOQgGgOgBgUQAAgdAQgRQAOgRAaAAQAaAAAPASQAPARABAcQgBAegPARQgPARgaAAQgQAAgNgIgAgbgjQgKAMAAAXQAAAYAKAMQAKAMARAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgSAAgJAMg");
	this.shape_60.setTransform(492.4,106.025);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#285C9B").s().p("Ag1BaIAAixIAPAAIADARIABAAQAGgKAKgFQAJgEAMgBQAZABANAQQANARAAAeQAAAegOARQgNAQgYAAQgLAAgKgEQgKgEgGgKIgCAAIACAVIAAAygAgag/QgJAKABAXIAAAEQgBAaAJAKQAJAMASAAQAPAAAKgOQAJgLAAgXQAAgXgJgMQgKgMgPgBQgTAAgIALg");
	this.shape_61.setTransform(469.45,108.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#285C9B").s().p("AgTBYIAAhsIgWAAIAAgIIAWgHIAAgGQAAguAmAAQAKAAANAEIgFAPQgLgEgHAAQgLABgFAGQgEAIAAAPIAAAIIAeAAIAAAOIgeAAIAABsg");
	this.shape_62.setTransform(452.925,103.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#285C9B").s().p("AgsBRQgNgIAAgRQAAgLAHgJQAHgHANgEQgEgCgEgFQgDgEAAgGQAAgGAEgEQAEgFAHgFQgKgEgFgKQgHgJAAgMQABgUAMgMQAMgKAWgBQAJABAHACIArAAIAAAMIgXACQADAEADAGQACAHAAAIQAAASgMALQgNAKgUAAIgLgBQgLAHAAAJQAAAEAEADQAEACAKAAIAVAAQAUABALAIQALAIAAARQAAAUgRAKQgQALgfAAQgYAAgNgJgAggAnQgHAGAAAKQAAAKAIAGQAJAFAQAAQAWAAALgHQAMgHAAgMQAAgKgHgEQgGgEgRAAIgWAAQgMAAgHAHgAgWhEQgHAGAAAPQAAAMAHAHQAIAGAMABQAbgBAAgaQAAgcgbABQgNgBgHAIg");
	this.shape_63.setTransform(422.2,108.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#285C9B").s().p("AALBSIAAh0IABgcIgFAGIgaAVIgKgMIArgiIAQAAIAACjg");
	this.shape_64.setTransform(407.875,104);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#285C9B").s().p("AAcA/IAAhLQAAgOgFgIQgHgHgMAAQgPAAgJAKQgHAKAAAWIAAA+IgbAAIAAh7IAVAAIAEAQIABAAQAGgJAKgEQAKgFAMAAQAsAAAAAtIAABQg");
	this.shape_65.setTransform(606.85,72.525);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#285C9B").s().p("AgMBWIAAh7IAZAAIAAB7gAgKg8QgEgEAAgGQAAgHAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAHQAAAGgEAEQgEAFgHAAQgGAAgEgFg");
	this.shape_66.setTransform(596.325,70.25);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#285C9B").s().p("AglAwQgRgRAAgeQAAgdAPgSQAPgRAaAAQAZAAAOAPQAOAPAAAaIAAANIhSAAQABASAJAKQAJAKAQAAQALAAAJgCQAKgDALgEIAAAVQgKAFgKACQgKABgMAAQgcAAgQgQgAAdgMQgBgPgGgIQgIgIgMAAQgMAAgIAIQgHAIgCAPIA4AAIAAAAg");
	this.shape_67.setTransform(586.5,72.625);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#285C9B").s().p("AgWAlIAAhBIgRAAIAAgMIASgJIAJgbIAPAAIAAAcIAjAAIAAAUIgjAAIAABBQABAKAEAFQAFAEAHAAQALAAAJgDIAAAUIgLADIgPABQgkAAAAgog");
	this.shape_68.setTransform(575.3,71.35);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#285C9B").s().p("AglA/IAAh7IAUAAIAEAWIACAAQAGgLAIgHQAKgGAMAAIANABIgCAZQgGgCgGAAQgQAAgJAKQgJALAAAQIAABAg");
	this.shape_69.setTransform(552.65,72.525);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#285C9B").s().p("Ag1BSIAAijIAvAAQAeAAAPANQAPAMAAAZQAAAZgRANQgRAOgdAAIgRAAIAAA9gAgagBIAOAAQAUAAAJgHQAKgIAAgPQAAgOgJgHQgIgGgSAAIgSAAg");
	this.shape_70.setTransform(540.4,70.65);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#285C9B").s().p("AgqA4IAAgRQAIAEALADQAKADAKAAQANAAAIgFQAHgFAAgJQAAgHgFgFQgHgGgRgHQgRgFgHgFQgHgFgEgGQgDgGAAgIQAAgPAMgJQAMgJAUAAQAUAAATAJIgHAPQgSgIgPAAQgNAAgGAEQgHAEAAAIQAAAFADADQACAEAGADIAUAJQAWAHAIAIQAHAIAAAMQAAARgMAKQgNAJgWAAQgYAAgOgIg");
	this.shape_71.setTransform(961.55,105.325);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAOgRQAPgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQAKAMASAAQAUAAAUgJIAAARQgKAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_72.setTransform(949.6,105.325);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#285C9B").s().p("AgIBVIAAh7IARAAIAAB7gAgHg9QgDgEAAgGQAAgGADgEQAEgDADAAQAEAAAEADQADAEAAAGQAAAGgDAEQgEADgEAAQgDAAgEgDg");
	this.shape_73.setTransform(940.2,103.05);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#285C9B").s().p("AgdA4QgNgIgGgOQgIgOAAgUQABgdAPgRQAPgRAZAAQAaAAAQASQAPARAAAcQAAAegPARQgQARgaAAQgQAAgNgIgAgbgjQgKAMAAAXQAAAYAKAMQAJAMASAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgSAAgJAMg");
	this.shape_74.setTransform(921.05,105.325);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#285C9B").s().p("AgmA2QgLgJAAgSQABgkA6gBIAVgBIAAgIQAAgOgGgIQgHgGgNAAQgPAAgTAJIgFgOQAIgFAMgDQAKgCAKAAQAWgBAKAKQAMAKgBAWIAABTIgNAAIgEgSIgBAAQgJALgKAFQgJADgMAAQgTABgKgKgAAMACQgVABgKAFQgKAHAAAMQAAALAGAFQAHAGAKgBQARABAJgKQALgKgBgRIAAgLg");
	this.shape_75.setTransform(901.55,105.35);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#285C9B").s().p("AgdAwQgOgRAAgeQgBgeAQgRQAOgRAaAAQAKAAAIACQAJACAGADIgHAQIgNgEQgHgCgGAAQglAAAAAvQAAAWAKANQAJAMARAAQAPAAARgHIAAARQgNAGgTAAQgaAAgOgQg");
	this.shape_76.setTransform(890.4,105.325);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#285C9B").s().p("AgoBSIAAgQQAJADALAAQAaAAAOgRQAOgQAAgjIgBAAQgGAKgKAFQgLAEgLAAQgWAAgNgNQgMgMAAgXQAAgaAOgOQAOgPAXAAQAQAAANAIQAMAJAHAQQAHARgBAWQAABfhJAAQgNAAgHgCgAgZg5QgJAKAAATQAAAQAIAJQAIAIAQAAQAKAAAIgEQAJgDAFgHQAFgHAAgIQAAgMgFgKQgEgKgJgGQgIgFgKAAQgQAAgIAKg");
	this.shape_77.setTransform(872.1,103.275);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#285C9B").s().p("AgqA4IAAgRQAIAEALADQAKADAJAAQAOAAAIgFQAIgFgBgJQAAgHgFgFQgHgGgRgHQgRgFgHgFQgIgFgDgGQgEgGABgIQAAgPALgJQANgJAUAAQAUAAATAJIgHAPQgSgIgPAAQgNAAgGAEQgHAEAAAIQAAAFACADQADAEAGADIAUAJQAXAHAHAIQAIAIgBAMQAAARgMAKQgNAJgWAAQgYAAgOgIg");
	this.shape_78.setTransform(854.2,105.325);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#285C9B").s().p("AgIBVIAAh7IARAAIAAB7gAgHg9QgDgEAAgGQAAgGADgEQADgDAEAAQAEAAAEADQADAEAAAGQAAAGgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_79.setTransform(831.65,103.05);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#285C9B").s().p("AgmA2QgLgJAAgSQAAgkA7gBIAVgBIAAgIQAAgOgGgIQgGgGgOAAQgPAAgTAJIgFgOQAJgFAKgDQALgCAKAAQAWgBAKAKQALAKAAAWIAABTIgNAAIgEgSIgBAAQgJALgKAFQgIADgNAAQgTABgKgKgAAMACQgVABgKAFQgKAHAAAMQAAALAGAFQAHAGAKgBQARABAJgKQALgKgBgRIAAgLg");
	this.shape_80.setTransform(822,105.35);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#285C9B").s().p("AgdA4QgMgIgIgOQgGgOAAgUQAAgdAOgRQAPgRAaAAQAaAAAPASQAQARgBAcQABAegQARQgPARgaAAQgQAAgNgIgAgbgjQgJAMAAAXQAAAYAJAMQAKAMARAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgSAAgJAMg");
	this.shape_81.setTransform(786.9,105.325);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#285C9B").s().p("AgdAwQgPgRAAgeQAAgeAPgRQAPgRAbAAQAIAAAKACQAIACAFADIgFAQIgOgEQgHgCgGAAQglAAABAvQgBAWAKANQAJAMARAAQAPAAAQgHIAAARQgMAGgSAAQgaAAgPgQg");
	this.shape_82.setTransform(774.8,105.325);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#285C9B").s().p("AgSAnIAAhIIgRAAIAAgJIARgIIAIgaIAKAAIAAAdIAkAAIAAAOIgkAAIAABIQAAALAFAGQAFAGAKAAIAJgBIAIgCIAAAPIgJACIgLABQgjAAAAgmg");
	this.shape_83.setTransform(759,104.025);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#285C9B").s().p("AgmA2QgKgJAAgSQAAgkA6gBIAVgBIAAgIQAAgOgGgIQgHgGgNAAQgPAAgTAJIgGgOQAKgFALgDQAKgCAKAAQAWgBALAKQAKAKABAWIAABTIgPAAIgDgSIgBAAQgKALgIAFQgKADgNAAQgSABgKgKgAAMACQgVABgKAFQgKAHAAAMQAAALAHAFQAFAGAMgBQAQABAKgKQAJgKABgRIAAgLg");
	this.shape_84.setTransform(748.25,105.35);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#285C9B").s().p("AgTBYIAAhsIgWAAIAAgIIAWgHIAAgGQAAguAmAAQAKAAANAEIgFAPQgLgDgHAAQgLAAgFAGQgEAIAAAPIAAAIIAeAAIAAAOIgeAAIAABsg");
	this.shape_85.setTransform(739.075,102.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#285C9B").s().p("AgTBYIAAhsIgWAAIAAgIIAWgHIAAgGQAAguAmAAQAKAAANAEIgFAPQgLgDgHAAQgLAAgFAGQgEAIAAAPIAAAIIAeAAIAAAOIgeAAIAABsg");
	this.shape_86.setTransform(725.375,102.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#285C9B").s().p("AgsBSQgNgKAAgQQAAgMAHgHQAHgIANgEQgEgCgDgEQgEgFAAgGQAAgHAEgEQADgFAIgEQgJgEgHgJQgFgKgBgMQAAgVANgKQAMgMAWAAQAJAAAIADIAqAAIAAALIgXADQADAFADAFQADAHAAAIQAAASgNALQgMALgVgBIgLgBQgLAHAAAIQAAAFAEADQAEADAKgBIAVAAQAUAAALAJQAKAIAAARQAAAUgQAKQgQAMgfAAQgYgBgNgIgAggAnQgHAFAAAMQAAAJAIAGQAJAFAPAAQAXAAALgHQALgHAAgMQABgKgHgEQgGgEgRAAIgWAAQgMAAgHAHgAgWhEQgHAGAAAOQAAANAHAHQAIAGANAAQAaABAAgbQAAgbgbgBQgNAAgHAIg");
	this.shape_87.setTransform(694.65,108);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#285C9B").s().p("AgWAmIAAhCIgRAAIAAgMIASgJIAJgbIAPAAIAAAcIAjAAIAAAUIgjAAIAABCQAAAJAFAEQAFAFAHAAQAKAAAKgDIAAAUIgMADIgNABQglAAAAgng");
	this.shape_88.setTransform(833.8,70.65);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#285C9B").s().p("AgtBSIAAijIBcAAIAAAWIhBAAIAAA0IA8AAIAAAVIg8AAIAABEg");
	this.shape_89.setTransform(810.65,69.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42,p:{x:228.675,y:72.225}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37,p:{x:292.975,y:72.225}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:155.85,y:105.625}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:207.975,y:105.525}},{t:this.shape_20},{t:this.shape_19,p:{x:228.55,y:104.325}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:294.325,y:105.525}},{t:this.shape_13,p:{x:305.3,y:104.325}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:335.075,y:105.525}},{t:this.shape_9,p:{x:347.6,y:105.625}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:404.625,y:103.075}},{t:this.shape_4,p:{x:414.45,y:105.625}},{t:this.shape_3,p:{x:426.875,y:105.525}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_42,p:{x:563.875,y:72.625}},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64,p:{x:407.875,y:104}},{t:this.shape_63},{t:this.shape_4,p:{x:441.45,y:106.025}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_21,p:{x:481.625,y:105.925}},{t:this.shape_60},{t:this.shape_13,p:{x:503.3,y:104.725}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_25,p:{x:564,y:106.025}},{t:this.shape_14,p:{x:578.025,y:105.925}},{t:this.shape_19,p:{x:589,y:104.725}},{t:this.shape_55},{t:this.shape_54},{t:this.shape_10,p:{x:618.775,y:105.925}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_5,p:{x:688.325,y:103.475}},{t:this.shape_49,p:{x:698.15,y:106.025}},{t:this.shape_3,p:{x:710.575,y:105.925}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_9,p:{x:738.65,y:106.025}}]},1).to({state:[{t:this.shape_89},{t:this.shape_37,p:{x:822.325,y:71.925}},{t:this.shape_88},{t:this.shape_64,p:{x:680.325,y:103.3}},{t:this.shape_87},{t:this.shape_49,p:{x:713.9,y:105.325}},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_14,p:{x:800.925,y:105.225}},{t:this.shape_13,p:{x:811.9,y:104.025}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_10,p:{x:841.675,y:105.225}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_5,p:{x:911.225,y:102.775}},{t:this.shape_74},{t:this.shape_3,p:{x:933.475,y:105.225}},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).wait(1));

	// svgs
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F8B572").s().p("ABwBIQhogxg3gXQgpgQgsgMQg4gOgrAAIAegXQAXgRAngYQBFAHAeAMQBQAfBTA7QBMA4AhAwIgFAAQgmAAhNgjg");
	this.shape_90.setTransform(139.8269,230.8409,1.8916,1.8916);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#C56A14").s().p("ABfBPQiMhJgYgJQg6gZhzACIAfgXQAXgRAmgYQAjgWATgKQBOAKAfAOQBPAjBKBCQBHBAAFAjQADARgQADIgHABIgDAAQglAAhXgsg");
	this.shape_91.setTransform(141.7513,227.8054,1.8916,1.8916);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F8B572").s().p("AA+AwQiHhzgbgTQgugegygSQAyAAAyACQBEADAjAGQBBA9A3BHQA8BPAJAoIABAHQgkgChjhVg");
	this.shape_92.setTransform(315.6541,183.709,1.8916,1.8916);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C56A14").s().p("AAzAwQiGhzgcgTQgugegxgSQAxAAAyACQA6ADBDAJIAeAFQA4AvAxBEQAvBDAGAnQAEAYgQAEIgIABQgkgChjhVg");
	this.shape_93.setTransform(317.6687,183.709,1.8916,1.8916);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#F8B572").s().p("ACLBSQhegvg6gZQgsgRhBgQQhOgSgwACIBLgbQBIgZBCgSQBZAjBaBHQBVBBAUAtIgCABQgHACgIAAQgiAAg7gcg");
	this.shape_94.setTransform(219.8902,188.97,1.8916,1.8916);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#C56A14").s().p("AByBKQiXhNgUgIQg/gbiFAFIBKgbQBIgZBDgSIAogLQANADAMAFQBNAiBJBBQBFA9AJAlQAFASgPAEIgCABIgKABQgkAAhRgpg");
	this.shape_95.setTransform(220.9368,187.8813,1.8916,1.8916);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EA7D24").s().p("AtgHFQFmg8D9hoQElh4DcjKQBihbAihQQA2iAhYiAQBzATB+BKQBlA7BRBNQA/A9ASBKQAfCIkHBrQi8BOoDB2QlJBMhxATQiOAXhlAAQg8AAgugIg");
	this.shape_96.setTransform(259.1202,249.0146,1.8916,1.8916);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F39426").s().p("Ar8HOQiSgbglhVIgFgNIgCgGIgDgNQgQhHAQhFQAThSAxhRQA1hVBKg7QBFg1BNgrQB3hECOg2QCDgyB8gfIBBgQQBygYB8gCQCEgCB7AVQBzATB+BKQBlA7BRBNQBAA9ARBKIADASQAMCAkGBoQi7BKn2BzQlHBMhyATQiNAYhmAAQg8AAgugJg");
	this.shape_97.setTransform(240.1055,247.2396,1.8916,1.8916);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#D6A85F").s().p("An0gJIPlAAIAEASIvpABg");
	this.shape_98.setTransform(818.3659,278.5285,1.8915,1.8915);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F3F2F2").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_99.setTransform(827.143,226.3664,1.8915,1.8915);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F3F2F2").s().p("AgHAIQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDADQgEAEgFAAQgEAAgDgEg");
	this.shape_100.setTransform(877.3149,240.5999,1.8915,1.8915);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F3F2F2").s().p("AgOAPQgGgGAAgJQAAgHAGgHQAGgGAIAAQAJAAAGAGQAGAHAAAHQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_101.setTransform(889.0421,251.8543,1.8915,1.8915);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F3F2F2").s().p("AgJALQgFgFABgGQgBgFAFgEQAEgEAFgBQAGABAEAEQAFAEAAAFQAAAGgFAFQgEADgGAAQgFAAgEgDg");
	this.shape_102.setTransform(870.7892,253.0838,1.8915,1.8915);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#F3F2F2").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_103.setTransform(813.1459,260.3661,1.8915,1.8915);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#F3F2F2").s().p("AgTAUQgJgIAAgMQAAgLAJgJQAIgIALAAQAMAAAIAIQAJAJAAALQAAAMgJAIQgIAJgMAAQgLAAgIgJg");
	this.shape_104.setTransform(855.0898,264.3382,1.8915,1.8915);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F3F2F2").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_105.setTransform(849.3208,239.134,1.8915,1.8915);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F3F2F2").s().p("AgPAQQgGgHgBgJQABgIAGgHQAHgGAIAAQAKAAAGAGQAGAHAAAIQAAAJgGAHQgGAHgKAAQgIAAgHgHg");
	this.shape_106.setTransform(832.3919,248.0713,1.8915,1.8915);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F3F2F2").s().p("AgWAXQgKgJAAgOQAAgNAKgJQAKgKAMAAQAOAAAKAKQAJAJAAANQAAAOgJAJQgKAKgOAAQgMAAgKgKg");
	this.shape_107.setTransform(805.911,235.5875,1.8915,1.8915);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#F3F2F2").s().p("AgIAKQgEgEAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEAEQgDADgGAAQgEAAgEgDg");
	this.shape_108.setTransform(786.1921,257.3397,1.8915,1.8915);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F3F2F2").s().p("AgUAUQgIgIAAgMQAAgLAIgIQAJgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgJgJg");
	this.shape_109.setTransform(767.7028,248.3551,1.8915,1.8915);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F3F2F2").s().p("AgOAPQgGgHAAgIQAAgHAGgHQAGgGAIAAQAIAAAHAGQAGAHAAAHQAAAIgGAHQgHAGgIAAQgIAAgGgGg");
	this.shape_110.setTransform(750.7739,264.3382,1.8915,1.8915);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D6A85F").s().p("Ak4CyQgJgfAGgwQANhgBKhQQBchkFAAAQBNAAA5AEQjPAShHBOQhKBQgMBgQgHAwAJAfg");
	this.shape_111.setTransform(783.705,244.1497,1.8915,1.8915);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#EEBD65").s().p("AnwCyQgJgfAHgwQAMhgBLhQQBbhkFAAAQFBAABbBkQBLBQAMBgQAHAwgJAfg");
	this.shape_112.setTransform(818.3948,244.1465,1.8915,1.8915);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFE571").s().p("AAHAdQhPhKjbgwIJHAAQgOAjgmApQhNBSh4AdQAEgcgoglg");
	this.shape_113.setTransform(849.9546,292.6677,1.8915,1.8915);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#C34225").s().p("AncAHIAAgNIO5AAIAAANg");
	this.shape_114.setTransform(817.0418,300.8013,1.8915,1.8915);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#3EB6AD").s().p("AmlAvIgEgUQgDgRgEgCIgLgIQgJgHgGAEIgZAVQgSAQgHgIQgGgIAIgeIAKgdIPbgGQAKAKAHAjQAIAjgJABQgGABgLgGQgNgIgMgCQgLgCgOAKQgNAJgMgDQgWgHgSADIgOAFQgpAAgIgDIgYgGIgagGQgIgCgbAKIgaALQgsgEgHgDQgVgKgHABQgEABgKAHQgKAHgFgBQgDAAgLgJQgLgJgIgBQgIgBgeALQgdAMgEgBQgxgQgOgCQgHAAgWAKQgUAKgEgEIgLgLQgGgHgIgBQgGgBgSAPQgSAOgEAAQgFgBgFgGIgEgHQgTgOgJAAQgEAAgWAIQgUAJgDgBQgDgBgKgJIgIgIIgZAFIgVgIQgIgBgWAPIgVAPQgHAHgEAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_115.setTransform(818.4692,285.7951,1.8915,1.8915);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#DD5C59","#C04F4F"],[0,1],-52.1,0,52.1,0).s().p("AmxAtQgjAAgagNQgagOAAgSQAAgSAagNQAagNAjAAINjAAQAkAAAaANQAZANAAASQAAATgZANQgaANgkAAg");
	this.shape_116.setTransform(816.8999,307.8946,1.8915,1.8915);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#DC5112").s().p("AnGAtQgYgBgRgNQgRgMAAgTQAAgSARgNQARgNAYABIONAAQAYgBARANQARANAAASQAAATgRAMQgRANgYABg");
	this.shape_117.setTransform(816.9472,292.6204,1.8915,1.8915);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#D6A85F").s().p("AjuBvQi5gLgZgXQgkghgJhUIgDhOIPhAAIgDBOQgJBUglAhQgYAXi5ALQh7AIh0AAQhzAAh7gIg");
	this.shape_118.setTransform(818.3948,333.1413,1.8915,1.8915);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B3B3B3").s().p("AlQBAQiMgaABgmQgBglCMgaQCLgbDFAAQDFAACMAbQCMAaAAAlQAAAmiMAaQiLAbjGAAQjFAAiLgbg");
	this.shape_119.setTransform(827.1143,349.0356,1.8915,1.8915);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F9BA85").s().p("AgtBPQgsgFgdgcQgcgbAdglQAfgmBDgQQBBgOAwAOQAsAOgGAZQgDAPgeAQQgrAVggAlQgUAYgjAAIgOgBg");
	this.shape_120.setTransform(613.5318,201.2661,1.8915,1.8915);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#D19766").s().p("AgtgOQAXgQASgVQAGAKANANQAQAPAPAKQgUAggaAXQgegegPgkg");
	this.shape_121.setTransform(563.8591,256.7211,1.8915,1.8915);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#D19766").s().p("AhJDoQg7gSglgrQgngtgIhAQAnBCBOAXQAeAKAfAAQA7AAAxgiQAPAlAeAeQg4AvhGAAQgfAAgfgJgACDBxQgNgMgHgKQApguAWhHQAPgzABg5QABg2gLg0QAeA9AGBPQAGBSgWBHQgNAvgZAmQgPgKgQgPg");
	this.shape_122.setTransform(541.9156,229.7666,1.8915,1.8915);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#D19766").s().p("AjbB7IgDgDQAbgXAUghQAyAhA6AAQBiAABYhbQAkglAcgyQAagvAOg0QgCBEgeBJQghBLg1A2QhYBbhhAAQhPAAg8g6g");
	this.shape_123.setTransform(605.8304,243.8634,1.8916,1.8916);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#EFB075").s().p("Ai+DGQhBhAADhWQADhcBRhUQBUhWB7geQB8geA1A0QA3A1gaB8QgaB7hUBXQhSBUhbAGIgPABQhNAAg8g6g");
	this.shape_124.setTransform(600.3177,229.6548,1.8916,1.8916);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F9BA85").s().p("AhNBkQgmgLAJgvQAJgvA1gtQAzgrAxgJQAugJAGAaQAEAOgUAdQgbAngLAuQgJAkgsARQgWAJgWAAQgSAAgQgFg");
	this.shape_125.setTransform(540.4442,191.7361,1.8915,1.8915);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#EFB075").s().p("AhIEWQhXgaglhPQgohTAihvQAih0BhhTQBfhTBHAVQBJAWAiB6QAiB6gjBzQghBwhPAwQgvAcg0AAQgeAAgggJg");
	this.shape_126.setTransform(541.7874,221.1431,1.8916,1.8916);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#CCCCCC").s().p("A64G+Ig6n8INwmeQK/ArKsBkQVbDIhWEgQg1C0rABQQobA+tsAAQrHAApjgfg");
	this.shape_127.setTransform(268.7787,291.125);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#CFD1D3").s().p("AkaGCQiKgZgGglQgOgFgFgFQgcgbgMg9QgJgoABgwQgggNAAgWQAAgMANgKQALgLAUgGQgQgFgKgLQgKgLAAgOQAAgOAKgKQABgQAIgZIAAgTIAEAAQgIgqAKgzQAShVBChIQA4g+CUgYQBVgOBsAAIBmACIADAAIATABIACAAIAWACQDQASBGBNQBFBLAQBZQAJAygJAnIAEAQQAIAVACAUQADAVgHABIgCAAIAAACQABANgLAMQgJAKgQAGIAAABQAUAGAMAKQAMAKgBAMQABAOgRAMQACBggaA3QAyAUAAAVQAAAmiLAaQiNAbjFAAQjBAAiKgag");
	this.shape_128.setTransform(823.1459,288.5969,1.8918,1.8918);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#CCCCCC").s().p("Al1A9IjDgYICBh5IEQANIDNgBQJSAAhGA5Qh2BkmIAAQi+AAjrgYg");
	this.shape_129.setTransform(589.969,271.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(534,251.6,446,125.1);
// library properties:
lib.properties = {
	id: '1A9338FEE8584755AB48BB991EF417A3',
	width: 1000,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1A9338FEE8584755AB48BB991EF417A3'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;