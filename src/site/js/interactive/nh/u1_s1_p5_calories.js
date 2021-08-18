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
	this.shape.setTransform(442.35,107.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQALAMASAAQATAAAUgJIAAARQgKAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_1.setTransform(430.4,107.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#285C9B").s().p("AgIBUIAAh5IARAAIAAB5gAgHg+QgDgDAAgGQAAgHADgDQADgCAEAAQAEAAAEACQADAEAAAGQAAAGgDADQgEADgEAAQgEAAgDgDg");
	this.shape_2.setTransform(421,105.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#285C9B").s().p("AgiA/IAAh6IAPAAIACAWIABAAQAHgMAJgGQAJgHAMAAQAIAAAGACIgCARQgIgCgGAAQgPAAgJANQgLAMAAASIAABBg");
	this.shape_3.setTransform(414.275,107.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#285C9B").s().p("AgdA4QgMgIgIgOQgHgOAAgUQABgdAPgRQAOgRAaAAQAaAAAPASQAPARABAcQgBAegPARQgPARgaAAQgQAAgNgIgAgbgjQgKAMAAAXQAAAYAKAMQAKAMARAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgRAAgKAMg");
	this.shape_4.setTransform(401.85,107.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#285C9B").s().p("AgIBXIAAitIARAAIAACtg");
	this.shape_5.setTransform(392.025,105.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#285C9B").s().p("AgmA3QgLgKAAgRQAAglA7gCIAVgBIAAgHQAAgOgGgIQgGgGgOAAQgPAAgTAJIgFgOQAJgFAKgDQALgCAKAAQAWgBAKAKQALAKAAAVIAABTIgNAAIgEgRIgBAAQgJAMgKADQgIAFgNAAQgTgBgKgIgAAMACQgVAAgKAHQgKAGAAANQAAAKAGAFQAHAFAKAAQARAAAJgJQALgJgBgSIAAgLg");
	this.shape_6.setTransform(382.35,107.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#285C9B").s().p("AgdAwQgOgRAAgeQAAgeAPgRQAOgRAaAAQAKAAAIACQAJACAGADIgHAQIgNgEQgHgCgGAAQglAAAAAvQAAAWAKANQAJAMARAAQAPAAARgHIAAARQgNAGgTAAQgaAAgOgQg");
	this.shape_7.setTransform(371.2,107.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#285C9B").s().p("AASBSIAAglIhOAAIAAgRIBNhuIATAAIAABuIAZAAIAAARIgZAAIAAAlgAAJgsIgzBIIA8AAIAAg2IACgkIgBAAg");
	this.shape_8.setTransform(352.95,105.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#285C9B").s().p("AgqA4IAAgRQAJAEAKADQAKADAJAAQAOAAAIgFQAIgFAAgJQgBgHgFgFQgHgGgRgHQgRgFgHgFQgIgFgDgGQgDgGAAgIQgBgPAMgJQANgJAUAAQAUAAATAJIgGAPQgTgIgPAAQgMAAgHAEQgHAEAAAIQAAAFACADQADAEAGADIAUAJQAXAHAHAIQAIAIAAAMQAAARgNAKQgNAJgWAAQgYAAgOgIg");
	this.shape_9.setTransform(335,107.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#285C9B").s().p("AAhA/IAAhPQAAgPgHgHQgHgIgPAAQgSAAgJALQgJAKAAAYIAABAIgSAAIAAh6IAPAAIADARIABAAQAFgKALgFQAKgFAMAAQAWAAALALQALALAAAXIAABQg");
	this.shape_10.setTransform(322.475,107.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#285C9B").s().p("AgIBUIAAh5IARAAIAAB5gAgHg+QgDgDAAgGQAAgHADgDQAEgCADAAQAEAAAEACQADAEAAAGQAAAGgDADQgEADgEAAQgDAAgEgDg");
	this.shape_11.setTransform(312.45,105.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#285C9B").s().p("AgmA3QgLgKAAgRQAAglA7gCIAVgBIAAgHQAAgOgGgIQgGgGgOAAQgOAAgUAJIgGgOQAJgFALgDQALgCAKAAQAWgBAKAKQALAKAAAVIAABTIgNAAIgEgRIgBAAQgKAMgJADQgIAFgNAAQgTgBgKgIgAAMACQgVAAgKAHQgKAGAAANQAAAKAGAFQAGAFALAAQARAAAJgJQAKgJAAgSIAAgLg");
	this.shape_12.setTransform(302.8,107.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#285C9B").s().p("AgSAnIAAhIIgRAAIAAgJIARgIIAIgaIAKAAIAAAdIAkAAIAAAOIgkAAIAABIQAAALAFAGQAFAGAKAAIAJgBIAIgCIAAAPIgJACIgLABQgjAAAAgmg");
	this.shape_13.setTransform(292.7,106.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#285C9B").s().p("AAhA/IAAhPQAAgPgHgHQgHgIgPAAQgSAAgJALQgJAKAAAYIAABAIgSAAIAAh6IAPAAIADARIABAAQAFgKALgFQAKgFAMAAQAWAAALALQALALAAAXIAABQg");
	this.shape_14.setTransform(281.725,107.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#285C9B").s().p("AgdA4QgMgIgIgOQgGgOAAgUQAAgdAOgRQAPgRAaAAQAaAAAQASQAPARgBAcQABAegPARQgQARgaAAQgQAAgNgIgAgbgjQgJAMAAAXQAAAYAJAMQAKAMARAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgRAAgKAMg");
	this.shape_15.setTransform(267.7,107.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#285C9B").s().p("AgdAwQgOgRAAgeQAAgeAOgRQAPgRAbAAQAJAAAJACQAJACAEADIgFAQIgOgEQgHgCgGAAQgkAAAAAvQAAAWAJANQAJAMARAAQAPAAAQgHIAAARQgMAGgSAAQgaAAgPgQg");
	this.shape_16.setTransform(255.6,107.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#285C9B").s().p("AgqA4IAAgRQAJAEAKADQAKADAKAAQANAAAIgFQAIgFgBgJQAAgHgFgFQgHgGgRgHQgRgFgHgFQgIgFgDgGQgEgGABgIQAAgPALgJQANgJAUAAQAUAAATAJIgHAPQgSgIgPAAQgNAAgGAEQgHAEAAAIQAAAFADADQACAEAGADIAUAJQAWAHAIAIQAIAIgBAMQAAARgMAKQgNAJgWAAQgYAAgOgIg");
	this.shape_17.setTransform(238.5,107.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAANAQQAOAPAAAZIAAALIhUAAQABAVAKALQALAMASAAQATAAAUgJIAAARQgKAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_18.setTransform(226.55,107.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#285C9B").s().p("AgSAnIAAhIIgRAAIAAgJIARgIIAIgaIAKAAIAAAdIAkAAIAAAOIgkAAIAABIQAAALAFAGQAFAGAJAAIAKgBIAHgCIAAAPIgJACIgKABQgjAAAAgmg");
	this.shape_19.setTransform(215.95,106.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#285C9B").s().p("AgmA3QgKgKAAgRQAAglA6gCIAVgBIAAgHQAAgOgGgIQgHgGgNAAQgPAAgTAJIgFgOQAIgFAMgDQAKgCAKAAQAWgBALAKQALAKgBAVIAABTIgOAAIgDgRIgBAAQgJAMgJADQgKAFgNAAQgSgBgKgIgAAMACQgVAAgKAHQgKAGAAANQAAAKAHAFQAFAFAMAAQAQAAAKgJQAKgJAAgSIAAgLg");
	this.shape_20.setTransform(205.2,107.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#285C9B").s().p("AgiA/IAAh6IAPAAIACAWIABAAQAHgMAJgGQAJgHAMAAQAIAAAGACIgCARQgIgCgGAAQgPAAgJANQgLAMAAASIAABBg");
	this.shape_21.setTransform(195.375,107.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#285C9B").s().p("AgnBIQgOgRAAgeQAAgdAOgRQANgRAYAAQAYAAANASIACAAIgBgJIgBgIIAAgyIATAAIAACtIgPAAIgDgQIgBAAQgNASgYAAQgYAAgNgQgAgZgKQgJAMAAAXQAAAYAJAMQAJAMAQAAQATAAAIgKQAIgLAAgXIAAgEQAAgZgIgLQgJgLgSAAQgRAAgIAMg");
	this.shape_22.setTransform(182.5,105.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#285C9B").s().p("Ag3BXIAAgPQAGACAIAAQATAAAIgWIAHgSIgyh6IAUAAIAbBGQAJAXABALIABAAIAGgTIAfhVIAUAAIg1CLQgHAVgKAIQgLAJgPAAQgJAAgIgCg");
	this.shape_23.setTransform(170.025,110.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#285C9B").s().p("AAhBXIAAhPQAAgOgHgIQgHgHgPAAQgSAAgJAKQgJALAAAXIAABAIgSAAIAAitIASAAIAAA0IgBAQIABAAQAGgJAKgFQAKgFAMAAQAXAAALALQALALAAAWIAABQg");
	this.shape_24.setTransform(157.275,105.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#285C9B").s().p("AgdA4QgNgIgGgOQgIgOABgUQgBgdAQgRQAPgRAZAAQAaAAAQASQAOARAAAcQAAAegOARQgQARgaAAQgQAAgNgIgAgbgjQgJAMgBAXQABAYAJAMQAJAMASAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgSAAgJAMg");
	this.shape_25.setTransform(143.25,107.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#285C9B").s().p("AgSBUQgKgEgHgKIgBAAIgEAQIgNAAIAAitIASAAIAAAqIgBAaIABAAQANgTAZAAQAZAAANARQANAQAAAeQAAAegNARQgOAQgYAAQgLAAgKgEgAgagLQgJALAAAZQAAAaAJALQAIALATAAQARAAAJgNQAIgMAAgYQAAgYgIgKQgJgMgSAAQgSAAgIALg");
	this.shape_26.setTransform(129.65,105.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#285C9B").s().p("AgiA/IAAh6IAPAAIACAWIABAAQAHgMAJgGQAJgHAMAAQAIAAAGACIgCARQgIgCgGAAQgPAAgJANQgLAMAAASIAABBg");
	this.shape_27.setTransform(118.425,107.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#285C9B").s().p("AgmA3QgLgKAAgRQAAglA7gCIAVgBIAAgHQAAgOgGgIQgGgGgOAAQgOAAgUAJIgGgOQAKgFAKgDQALgCAKAAQAWgBAKAKQALAKAAAVIAABTIgNAAIgEgRIgBAAQgKAMgJADQgIAFgNAAQgTgBgKgIgAAMACQgVAAgKAHQgKAGAAANQAAAKAGAFQAGAFALAAQARAAAJgJQAKgJAAgSIAAgLg");
	this.shape_28.setTransform(106.15,107.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#285C9B").s().p("AgdAwQgPgRAAgeQABgeAPgRQAOgRAaAAQAKAAAIACQAKACAEADIgGAQIgNgEQgHgCgGAAQglAAAAAvQAAAWAKANQAJAMARAAQAQAAAQgHIAAARQgNAGgTAAQgaAAgOgQg");
	this.shape_29.setTransform(95,107.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#285C9B").s().p("AgTBYIAAhrIgWAAIAAgJIAWgHIAAgHQAAgtAmAAQAKAAANAEIgFAPQgLgDgHgBQgLAAgFAIQgEAGAAAQIAAAIIAeAAIAAAPIgeAAIAABrg");
	this.shape_30.setTransform(80.125,105);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#285C9B").s().p("AgdA4QgMgIgHgOQgIgOAAgUQABgdAPgRQAPgRAZAAQAaAAAQASQAPARAAAcQAAAegPARQgQARgaAAQgQAAgNgIgAgbgjQgKAMAAAXQAAAYAKAMQAJAMASAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgSAAgJAMg");
	this.shape_31.setTransform(68.65,107.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#285C9B").s().p("AgsBRQgNgJAAgQQAAgLAHgJQAIgHAMgDQgEgDgEgFQgDgEAAgFQAAgIAEgDQADgGAIgEQgKgEgFgKQgHgJAAgMQAAgUAMgMQANgLAWABQAJAAAHACIArAAIAAAMIgXADQADAEADAFQADAHgBAIQAAASgMALQgNALgUgBIgKAAQgMAGAAAJQAAAFAEACQAEACAKABIAVAAQAUAAALAIQALAJAAAPQAAAVgRALQgRALgegBQgYABgNgKgAggAmQgHAHAAAKQAAALAJAFQAHAFARAAQAWAAALgHQAMgHAAgMQgBgKgGgEQgGgEgRAAIgVAAQgNAAgHAGgAgWhFQgHAIAAAOQAAAMAIAHQAGAHANAAQAbAAAAgbQAAgbgbAAQgNAAgHAGg");
	this.shape_32.setTransform(49.4,110.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#285C9B").s().p("AALBSIAAh0IABgbIgFAEIgaAWIgKgNIArghIAQAAIAACjg");
	this.shape_33.setTransform(35.075,105.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#285C9B").s().p("AgtA5IAAgXQAWAKATAAQAYAAAAgOQAAgFgDgDQgDgDgGgEIgQgHQgWgIgHgIQgIgIAAgOQAAgQANgIQANgJAVAAQAWAAAUAJIgJAUQgUgJgOAAQgUAAAAAMQAAAGAGAEQAFAEASAHQAPAGAHAEQAHAFADAGQAEAHAAAJQAAASgOAKQgNAJgYAAQgYAAgQgHg");
	this.shape_34.setTransform(188.325,74.225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#285C9B").s().p("AgmAwQgQgRAAgeQAAgdAPgSQAPgRAaAAQAYAAAOAPQAPAPAAAaIAAANIhSAAQAAASAKAKQAJAKAQAAQALAAAKgCQAJgDAKgEIAAAVQgJAFgKACQgJABgOAAQgbAAgRgQgAAdgMQAAgPgIgIQgHgIgMAAQgMAAgHAIQgIAIgBAPIA3AAIAAAAg");
	this.shape_35.setTransform(176.05,74.225);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#285C9B").s().p("AgWAlIAAhBIgRAAIAAgMIASgKIAJgaIAQAAIAAAcIAiAAIAAAUIgiAAIAABBQgBAKAFAFQAFAEAHAAQAKAAAKgDIAAAUIgMADIgNABQglAAAAgog");
	this.shape_36.setTransform(164.85,72.95);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#285C9B").s().p("AgpA3QgLgKAAgSQAAgUAPgIQAOgKAcgBIAWgBIAAgGQAAgMgGgGQgGgGgLAAQgJAAgJADIgQAGIgJgSQAKgGAMgCQAMgDAKAAQAYAAAMAKQAMAKAAAXIAABSIgTAAIgFgRIgBAAQgJALgJAEQgKAEgNAAQgSAAgKgJgAAKAEQgRAAgJAGQgIAFAAAMQAAAIAFAFQAFAEAKAAQANAAAJgIQAIgIAAgOIAAgLg");
	this.shape_37.setTransform(153.375,74.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#285C9B").s().p("AglA/IAAh7IAUAAIAEAWIACAAQAFgLAKgHQAJgGAMAAIANABIgDAZQgFgCgGAAQgQAAgJAKQgJALAAAQIAABAg");
	this.shape_38.setTransform(142.9,74.125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#285C9B").s().p("AgqBIQgOgRAAgfQAAgdAOgRQANgRAXAAQAXAAAOASIABAAQgCgNAAgIIAAgtIAbAAIAACtIgVAAIgFgQIgBAAQgNASgXAAQgXAAgNgQgAgVgGQgIAKAAAVQAAAUAIALQAHALAOAAQAQAAAHgJQAIgJAAgVIAAgDQAAgYgIgJQgHgKgQAAQgNAAgIAMg");
	this.shape_39.setTransform(129.7,71.825);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#285C9B").s().p("Ag4BYIAAgVQAGABAIAAQATAAAIgWIAEgMIgyh7IAdAAIAZBGQAGAQABAMIABAAIAEgOIAchUIAdAAIg2CMQgNAngiAAQgJAAgIgCg");
	this.shape_40.setTransform(116.775,77.025);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#285C9B").s().p("AAcBXIAAhMQAAgNgFgIQgHgHgMAAQgPAAgJAKQgHAJAAAYIAAA9IgbAAIAAitIAbAAIAAAsIgCAXIACAAQAGgJAJgFQAJgFAMAAQAuAAgBAsIAABRg");
	this.shape_41.setTransform(103.4,71.725);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#285C9B").s().p("AgeA5QgNgIgIgPQgHgPAAgTQAAgdAQgRQAPgRAbAAQAbAAAQARQAQARAAAdQAAAegQARQgPARgcAAQgRAAgNgHgAgXgfQgIALAAAUQAAArAfAAQAgAAAAgrQAAgqggAAQgQAAgHALg");
	this.shape_42.setTransform(89.075,74.225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#285C9B").s().p("AgdBIIgCAAIgFAOIgTAAIAAitIAaAAIAAApIAAAOIgBALIABAAQANgSAXAAQAXAAANARQANAQAAAeQAAAegNASQgNAQgXAAQgXAAgNgQgAgWgIQgHAIAAAWIAAACQAAAXAHAKQAHAKAQAAQAOAAAHgLQAHgLAAgVQAAgqgdAAQgPAAgHAKg");
	this.shape_43.setTransform(75.275,71.825);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#285C9B").s().p("AglA/IAAh7IAVAAIADAWIABAAQAHgLAJgHQAKgGALAAIANABIgCAZQgGgCgHAAQgPAAgJAKQgKALAAAQIAABAg");
	this.shape_44.setTransform(63.55,74.125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#285C9B").s().p("AgpA3QgLgKAAgSQAAgUAPgIQAOgKAcgBIAWgBIAAgGQAAgMgGgGQgGgGgLAAQgJAAgJADIgQAGIgJgSQAKgGAMgCQAMgDAKAAQAYAAAMAKQAMAKAAAXIAABSIgTAAIgFgRIgBAAQgJALgJAEQgKAEgNAAQgSAAgKgJgAAKAEQgRAAgJAGQgIAFAAAMQAAAIAFAFQAFAEAKAAQANAAAJgIQAIgIAAgOIAAgLg");
	this.shape_45.setTransform(50.825,74.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#285C9B").s().p("AgqA/QgTgWAAgpQAAgYAJgUQAKgTARgKQASgKAXAAQAZAAAVAKIgJAXIgSgHQgJgDgKAAQgWAAgOAQQgNARAAAbQAAAfANAPQANAQAXAAQAKAAAKgCIAUgGIAAAXQgTAHgYAAQgkAAgTgVg");
	this.shape_46.setTransform(37.575,72.225);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#285C9B").s().p("AgqA4IAAgRQAIAEALADQAKADAJAAQAOAAAIgFQAIgFgBgJQAAgHgFgFQgHgGgRgHQgRgFgHgFQgIgFgDgGQgEgGABgIQgBgPAMgJQANgJAUAAQAUAAATAJIgHAPQgSgIgPAAQgNAAgGAEQgHAEAAAIQAAAFADADQACAEAGADIAUAJQAXAHAHAIQAIAIgBAMQAAARgMAKQgNAJgWAAQgYAAgOgIg");
	this.shape_47.setTransform(740.8,81.025);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAANAQQAOAPAAAZIAAALIhUAAQABAVAKALQAKAMATAAQAUAAATgJIAAARQgKAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_48.setTransform(728.85,81.025);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#285C9B").s().p("AgIBVIAAh7IARAAIAAB7gAgGg9QgEgEAAgGQAAgGAEgEQADgDADAAQAEAAAEADQADAEAAAGQAAAGgDAEQgEADgEAAQgDAAgDgDg");
	this.shape_49.setTransform(719.45,78.75);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#285C9B").s().p("AgdA4QgMgIgIgOQgGgOgBgUQAAgdAPgRQAPgRAaAAQAaAAAPASQAPARABAcQgBAegPARQgPARgaAAQgQAAgNgIgAgbgjQgKAMAAAXQAAAYAKAMQAKAMARAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgSAAgJAMg");
	this.shape_50.setTransform(700.3,81.025);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#285C9B").s().p("AgmA2QgLgJAAgSQAAgkA7gBIAVgBIAAgIQAAgOgGgIQgGgGgOAAQgOAAgUAJIgFgOQAIgFALgDQALgCAKgBQAWAAAKAKQALAKAAAWIAABTIgNAAIgEgSIgBAAQgKALgJAFQgIADgNAAQgTABgKgKgAAMACQgVABgKAGQgKAGAAAMQAAALAGAFQAGAGALgBQARABAJgKQAKgKAAgRIAAgLg");
	this.shape_51.setTransform(680.8,81.05);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#285C9B").s().p("AASBTIAAgmIhOAAIAAgQIBNhuIATAAIAABtIAZAAIAAARIgZAAIAAAmgAAJgsIgyBIIA7AAIAAg2IACgkIgBAAg");
	this.shape_52.setTransform(651.4,78.95);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#285C9B").s().p("AgrA4IAAgRQAKAEAKADQAKADAJAAQAOAAAIgFQAIgFAAgJQgBgHgGgFQgGgGgRgHQgRgFgHgFQgHgFgEgGQgDgGgBgIQAAgPAMgJQANgJAUAAQAUAAATAJIgGAPQgTgIgPAAQgMAAgHAEQgHAEAAAIQAAAFACADQADAEAGADIAVAJQAVAHAIAIQAIAIAAAMQAAARgNAKQgNAJgWAAQgZAAgOgIg");
	this.shape_53.setTransform(633.45,81.025);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#285C9B").s().p("AgIBVIAAh7IARAAIAAB7gAgHg9QgDgEAAgGQAAgGADgEQADgDAEAAQAEAAAEADQADAEAAAGQAAAGgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_54.setTransform(610.9,78.75);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#285C9B").s().p("AgmA2QgLgJABgSQgBgkA7gBIAVgBIAAgIQAAgOgGgIQgGgGgOAAQgOAAgUAJIgGgOQAKgFAKgDQALgCAKgBQAWAAAKAKQAMAKAAAWIAABTIgPAAIgDgSIgBAAQgKALgJAFQgIADgNAAQgSABgLgKgAAMACQgVABgKAGQgKAGAAAMQAAALAGAFQAGAGALgBQARABAJgKQAKgKAAgRIAAgLg");
	this.shape_55.setTransform(601.25,81.05);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#285C9B").s().p("AgSAnIAAhIIgRAAIAAgJIARgIIAIgaIAKAAIAAAdIAkAAIAAAOIgkAAIAABIQAAALAFAGQAFAGAJAAIAKgBIAIgCIAAAPIgJACIgLABQgjAAAAgmg");
	this.shape_56.setTransform(591.15,79.725);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#285C9B").s().p("AgdA4QgNgIgGgOQgIgOABgUQgBgdAPgRQAQgRAZAAQAaAAAQASQAOARAAAcQAAAegOARQgQARgaAAQgQAAgNgIgAgbgjQgJAMAAAXQAAAYAJAMQAJAMASAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgRAAgKAMg");
	this.shape_57.setTransform(566.15,81.025);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#285C9B").s().p("AgdAwQgOgRAAgeQAAgeAOgRQAPgRAaAAQAJAAAJACQAJACAGADIgGAQIgOgEQgHgCgGAAQgkAAAAAvQAAAWAJANQAJAMARAAQAPAAAQgHIAAARQgMAGgSAAQgaAAgPgQg");
	this.shape_58.setTransform(554.05,81.025);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#285C9B").s().p("AAhA/IAAhPQAAgPgHgHQgHgIgPAAQgSAAgJALQgJAKAAAYIAABAIgSAAIAAh6IAPAAIADARIABAAQAFgKALgFQAKgFAMAAQAWAAALALQALALAAAXIAABQg");
	this.shape_59.setTransform(535.375,80.925);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#285C9B").s().p("AgIBVIAAh7IASAAIAAB7gAgGg9QgEgEAAgGQAAgGAEgEQADgDADAAQAFAAADADQADAEAAAGQAAAGgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_60.setTransform(525.35,78.75);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAOgRQAPgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQALAMARAAQAVAAATgJIAAARQgKAEgJACQgJACgMAAQgaAAgQgRgAAggLQAAgRgIgKQgHgJgPAAQgOAAgJAKQgIAJgCARIA/AAIAAAAg");
	this.shape_61.setTransform(516.05,81.025);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#285C9B").s().p("AgdA4QgMgIgHgOQgIgOAAgUQABgdAPgRQAOgRAaAAQAaAAAPASQAPARABAcQgBAegPARQgPARgaAAQgQAAgNgIgAgbgjQgKAMAAAXQAAAYAKAMQAKAMARAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgRAAgKAMg");
	this.shape_62.setTransform(494.55,81.025);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#285C9B").s().p("Ag1BbIAAiyIAPAAIACARIACAAQAGgKAKgFQAKgFALAAQAZAAANARQANARAAAfQAAAdgOARQgNAQgYAAQgLAAgKgEQgKgFgGgJIgCAAIACAVIAAAzgAgag/QgJALABAWIAAAFQgBAZAJALQAJAKASABQAPgBAKgNQAJgLAAgXQAAgXgJgMQgKgNgPAAQgSAAgJALg");
	this.shape_63.setTransform(471.6,83.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#285C9B").s().p("AgTBYIAAhsIgWAAIAAgIIAWgHIAAgGQAAguAmAAQAKAAANAEIgFAPQgLgDgHAAQgLAAgFAGQgEAIAAAPIAAAIIAeAAIAAAOIgeAAIAABsg");
	this.shape_64.setTransform(455.075,78.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#285C9B").s().p("AgdA4QgNgIgGgOQgIgOAAgUQABgdAPgRQAPgRAZAAQAaAAAPASQAQARAAAcQAAAegQARQgPARgaAAQgQAAgNgIgAgbgjQgKAMAAAXQAAAYAKAMQAJAMASAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgSAAgJAMg");
	this.shape_65.setTransform(443.6,81.025);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#285C9B").s().p("AgsBSQgNgKAAgQQAAgMAHgHQAIgIAMgEQgFgCgDgEQgDgFAAgGQAAgHAEgEQADgFAIgFQgKgDgFgJQgHgKAAgMQABgVALgKQANgMAWAAQAIAAAIADIArAAIAAALIgXADQADAFADAFQACAHAAAIQAAASgMALQgMALgVgBIgLgBQgLAHAAAIQAAAFAEADQAEADAKgBIAVAAQAUAAALAJQALAIAAARQAAAUgRAKQgRAMgeAAQgYgBgNgIgAggAnQgHAFAAAMQAAAJAIAGQAIAFARAAQAWAAALgHQAMgHAAgMQAAgKgHgEQgGgEgRAAIgWAAQgMAAgHAHgAgWhEQgHAGAAAOQAAANAIAHQAHAGAMAAQAbABAAgbQAAgbgbgBQgNAAgHAIg");
	this.shape_66.setTransform(424.35,83.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#285C9B").s().p("AALBSIAAh0IABgcIgFAGIgaAVIgKgMIArgiIAQAAIAACjg");
	this.shape_67.setTransform(410.025,79);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#285C9B").s().p("AAcA/IAAhLQAAgOgGgIQgFgHgNAAQgQAAgIAKQgHAKAAAWIAAA+IgaAAIAAh7IAUAAIADAQIACAAQAFgJALgEQALgFALAAQAtAAAAAtIAABQg");
	this.shape_68.setTransform(479,47.525);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#285C9B").s().p("AgMBWIAAh7IAZAAIAAB7gAgKg7QgEgFAAgGQAAgHAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAHQAAAGgEAFQgEAEgHgBQgGABgEgEg");
	this.shape_69.setTransform(468.475,45.25);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#285C9B").s().p("AgmAwQgQgRAAgeQAAgdAPgSQAPgRAaAAQAYAAAOAPQAPAPAAAaIAAANIhSAAQAAASAKAKQAJAKAQAAQALAAAKgCQAJgDALgEIAAAVQgKAFgKACQgJABgOAAQgbAAgRgQgAAdgMQAAgPgIgIQgHgIgMAAQgMAAgHAIQgIAIgBAPIA3AAIAAAAg");
	this.shape_70.setTransform(458.65,47.625);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#285C9B").s().p("AgWAmIAAhCIgRAAIAAgMIASgJIAJgbIAQAAIAAAcIAiAAIAAAUIgiAAIAABCQgBAJAFAEQAFAFAHAAQAKAAAKgDIAAAUIgMADIgNABQglAAAAgng");
	this.shape_71.setTransform(447.45,46.35);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#285C9B").s().p("AglA/IAAh7IAVAAIADAWIABAAQAHgLAJgHQAKgGALAAIANABIgDAZQgFgCgHAAQgPAAgJAKQgKALAAAQIAABAg");
	this.shape_72.setTransform(424.8,47.525);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#285C9B").s().p("Ag2BSIAAijIAwAAQAdAAAQANQAPAMAAAYQAAAagQANQgRAOgfAAIgRAAIAAA9gAgbgBIAPAAQAUAAAJgHQAKgHAAgQQAAgOgJgHQgJgGgRgBIgTAAg");
	this.shape_73.setTransform(412.55,45.65);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#285C9B").s().p("AgqA4IAAgRQAJAEAKADQAKADAJAAQAOAAAIgFQAIgFAAgJQgBgHgFgFQgHgGgRgHQgRgFgHgFQgIgFgDgGQgEgGABgIQgBgPAMgJQANgJAUAAQAUAAATAJIgGAPQgTgIgPAAQgMAAgHAEQgHAEAAAIQAAAFACADQADAEAGADIAUAJQAXAHAHAIQAIAIAAAMQAAARgNAKQgNAJgWAAQgYAAgOgIg");
	this.shape_74.setTransform(959.6,99.325);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAANAQQAOAPAAAZIAAALIhUAAQABAVAKALQAKAMATAAQATAAATgJIAAARQgJAEgJACQgJACgMAAQgaAAgQgRgAAggLQAAgRgIgKQgHgJgQAAQgNAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_75.setTransform(947.65,99.325);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#285C9B").s().p("AgIBUIAAh5IASAAIAAB5gAgGg9QgEgDAAgHQAAgGAEgDQADgDADgBQAEABAEADQADADAAAGQAAAHgDADQgEACgEAAQgDAAgDgCg");
	this.shape_76.setTransform(938.25,97.05);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#285C9B").s().p("AgdA4QgMgIgIgOQgGgOgBgUQAAgdAPgRQAPgRAaAAQAaAAAPASQAPARAAAcQAAAegPARQgPARgaAAQgQAAgNgIgAgbgjQgKAMABAXQgBAYAKAMQAKAMARAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgSAAgJAMg");
	this.shape_77.setTransform(919.1,99.325);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#285C9B").s().p("AgmA2QgLgJABgSQgBgkA7gCIAVgBIAAgHQAAgPgGgGQgGgHgOAAQgOAAgUAJIgGgOQAJgFALgDQALgDAKAAQAWAAAKAKQAMAKAAAWIAABSIgPAAIgDgRIgBAAQgKAMgJADQgIAEgNAAQgSAAgLgJgAAMACQgVABgKAFQgKAHAAAMQAAALAGAFQAHAFAKABQARAAAJgKQAKgJAAgSIAAgLg");
	this.shape_78.setTransform(899.6,99.35);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#285C9B").s().p("AgdAwQgPgRAAgeQABgeAPgRQAOgRAbAAQAIAAAKACQAIACAFADIgGAQIgNgEQgHgCgGAAQglAAAAAvQAAAWAKANQAJAMARAAQAQAAAQgHIAAARQgNAGgTAAQgaAAgOgQg");
	this.shape_79.setTransform(888.45,99.325);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#285C9B").s().p("AgpBSIAAgQQAKADALAAQAaAAANgRQAPgQABgjIgCAAQgGAKgKAFQgLAEgLAAQgWAAgNgNQgMgMAAgXQAAgaAOgOQAOgPAYAAQAPAAANAIQAMAJAHAQQAGARABAWQgBBfhJAAQgNAAgIgCgAgZg5QgJAKAAATQAAAQAIAJQAIAIARAAQAIAAAKgEQAIgDAFgHQAFgHAAgIQAAgMgFgKQgFgKgHgGQgJgFgJAAQgRAAgIAKg");
	this.shape_80.setTransform(870.15,97.275);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#285C9B").s().p("AgrA4IAAgRQAKAEAKADQAKADAJAAQAOAAAIgFQAIgFAAgJQAAgHgHgFQgGgGgRgHQgRgFgHgFQgHgFgEgGQgDgGgBgIQABgPALgJQANgJAUAAQAUAAATAJIgGAPQgTgIgPAAQgMAAgHAEQgHAEAAAIQAAAFACADQADAEAGADIAVAJQAVAHAIAIQAIAIAAAMQAAARgNAKQgNAJgWAAQgZAAgOgIg");
	this.shape_81.setTransform(852.25,99.325);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#285C9B").s().p("AgIBUIAAh5IARAAIAAB5gAgGg9QgEgDAAgHQAAgGAEgDQADgDADgBQAEABAEADQADADAAAGQAAAHgDADQgEACgEAAQgDAAgDgCg");
	this.shape_82.setTransform(829.7,97.05);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#285C9B").s().p("AgmA2QgKgJAAgSQgBgkA7gCIAVgBIAAgHQAAgPgGgGQgGgHgOAAQgOAAgUAJIgGgOQAKgFAKgDQALgDAKAAQAWAAAKAKQAMAKAAAWIAABSIgPAAIgDgRIgBAAQgKAMgIADQgKAEgMAAQgSAAgLgJgAAMACQgVABgKAFQgKAHAAAMQAAALAHAFQAGAFAKABQARAAAJgKQALgJAAgSIAAgLg");
	this.shape_83.setTransform(820.05,99.35);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#285C9B").s().p("AgSAnIAAhIIgRAAIAAgJIARgIIAIgaIAKAAIAAAdIAkAAIAAAOIgkAAIAABIQAAALAFAGQAFAGAJAAIAKgBIAHgCIAAAPIgIACIgLABQgjAAAAgmg");
	this.shape_84.setTransform(809.95,98.025);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#285C9B").s().p("AgdA4QgNgIgGgOQgIgOABgUQgBgdAQgRQAPgRAZAAQAaAAAQASQAOARAAAcQAAAegOARQgQARgaAAQgQAAgNgIgAgbgjQgKAMABAXQgBAYAKAMQAJAMASAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgSAAgJAMg");
	this.shape_85.setTransform(784.95,99.325);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#285C9B").s().p("AgdAwQgOgRAAgeQgBgeAPgRQAPgRAaAAQAJAAAJACQAJACAGADIgGAQIgOgEQgHgCgGAAQgkAAAAAvQAAAWAJANQAJAMARAAQAQAAAPgHIAAARQgMAGgSAAQgaAAgPgQg");
	this.shape_86.setTransform(772.85,99.325);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#285C9B").s().p("AgSAnIAAhIIgSAAIAAgJIASgIIAIgaIAKAAIAAAdIAjAAIAAAOIgjAAIAABIQAAALAFAGQAGAGAIAAIAKgBIAHgCIAAAPIgJACIgKABQgjAAAAgmg");
	this.shape_87.setTransform(757.05,98.025);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#285C9B").s().p("AgmA2QgLgJAAgSQABgkA6gCIAVgBIAAgHQAAgPgGgGQgHgHgNAAQgPAAgTAJIgFgOQAIgFAMgDQAKgDAKAAQAWAAAKAKQAMAKgBAWIAABSIgNAAIgEgRIgBAAQgJAMgKADQgJAEgMAAQgTAAgKgJgAAMACQgVABgKAFQgKAHAAAMQAAALAGAFQAHAFAKABQARAAAJgKQALgJgBgSIAAgLg");
	this.shape_88.setTransform(746.3,99.35);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#285C9B").s().p("AgTBYIAAhrIgWAAIAAgJIAWgHIAAgHQAAgtAmAAQAKAAANAEIgFAPQgLgDgHAAQgLgBgFAIQgEAHAAAPIAAAIIAeAAIAAAPIgeAAIAABrg");
	this.shape_89.setTransform(737.125,96.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#285C9B").s().p("AgTBYIAAhrIgWAAIAAgJIAWgHIAAgHQAAgtAmAAQAKAAANAEIgFAPQgLgDgHAAQgLgBgFAIQgEAHAAAPIAAAIIAeAAIAAAPIgeAAIAABrg");
	this.shape_90.setTransform(723.425,96.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#285C9B").s().p("AgsBSQgNgKAAgQQAAgMAHgHQAIgJANgCQgGgDgCgEQgEgFAAgFQAAgHAEgFQAEgEAHgGQgJgDgHgJQgFgKAAgMQgBgVAMgLQANgLAWABQAIgBAJADIAqAAIAAALIgXAEQAEADACAHQACAGAAAIQABASgNALQgMALgVAAIgKgBQgMAGAAAIQAAAGAEACQAEADAKAAIAVAAQAUgBALAJQALAJgBAPQAAAVgQALQgRAKgeABQgYAAgNgJgAggAmQgHAHAAAKQAAALAJAFQAHAFAQAAQAXAAALgHQAMgHgBgMQAAgKgFgEQgHgEgRAAIgVAAQgNAAgHAGgAgWhFQgHAIAAANQAAANAIAHQAGAHAOgBQAaAAAAgaQAAgcgbAAQgNABgHAGg");
	this.shape_91.setTransform(692.7,102);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#285C9B").s().p("AgWAmIAAhCIgRAAIAAgMIASgKIAJgaIAQAAIAAAcIAjAAIAAAUIgjAAIAABCQgBAJAFAFQAFAEAIAAQAJAAAKgDIAAAUIgLADIgOABQglAAAAgng");
	this.shape_92.setTransform(703.25,64.65);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#285C9B").s().p("AgtBSIAAijIBbAAIAAAWIhBAAIAAA0IA9AAIAAAWIg9AAIAABDg");
	this.shape_93.setTransform(680.1,63.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42,p:{x:89.075,y:74.225}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37,p:{x:153.375,y:74.225}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{x:35.075,y:105.6}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:95,y:107.625}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:195.375,y:107.525}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:281.725,y:107.525}},{t:this.shape_13,p:{x:292.7,y:106.325}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:322.475,y:107.525}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:392.025,y:105.075}},{t:this.shape_4},{t:this.shape_3,p:{x:414.275,y:107.525}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_42,p:{x:436.025,y:47.625}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_21,p:{x:483.775,y:80.925}},{t:this.shape_62},{t:this.shape_13,p:{x:505.45,y:79.725}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57,p:{x:566.15,y:81.025}},{t:this.shape_14,p:{x:580.175,y:80.925}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_10,p:{x:620.925,y:80.925}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_29,p:{x:669.65,y:81.025}},{t:this.shape_51},{t:this.shape_5,p:{x:690.475,y:78.475}},{t:this.shape_50},{t:this.shape_3,p:{x:712.725,y:80.925}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_93},{t:this.shape_37,p:{x:691.775,y:65.925}},{t:this.shape_92},{t:this.shape_33,p:{x:678.375,y:97.3}},{t:this.shape_91},{t:this.shape_57,p:{x:711.95,y:99.325}},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_14,p:{x:798.975,y:99.225}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_10,p:{x:839.725,y:99.225}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_5,p:{x:909.275,y:96.775}},{t:this.shape_77},{t:this.shape_3,p:{x:931.525,y:99.225}},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]},1).wait(1));

	// text_bg
	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#66CAEC").ss(1,1,1).p("Egi2gGSMBFtAAAIAAMlMhFtAAAg");
	this.shape_94.setTransform(240.925,88.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D1EFF9").s().p("Egi2AGTIAAslMBFtAAAIAAMlg");
	this.shape_95.setTransform(240.925,88.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#66CAEC").ss(1,1,1).p("A9ynCMA7lgAUIAAOZMg7lAAUg");
	this.shape_96.setTransform(577.425,64.725);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D1EFF9").s().p("A9ynCMA7lgAUIAAOZMg7lAAUg");
	this.shape_97.setTransform(577.425,64.725);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#66CAEC").ss(1,1,1).p("A50m9MAzpgAeIAAOZMgzpAAeg");
	this.shape_98.setTransform(815.55,86.525);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D1EFF9").s().p("A5zm9MAzogAeIAAOZMgzoAAeg");
	this.shape_99.setTransform(815.55,86.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).wait(1));

	// shadow
	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(204,204,204,0.498)").s().p("EghJAF/IAAr9MBCTAAAIAAL9g");
	this.shape_100.setTransform(259.7,96.15);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(204,204,204,0.498)").s().p("A8UmsMA4qgATIAANsMg4qAATg");
	this.shape_101.setTransform(593.45,73.75);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(204,204,204,0.498)").s().p("A/Vm1MAyzgAIIAANzMgymAAIgAeam9IAvgBIANNzIg8ABg");
	this.shape_102.setTransform(861.35,95.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).wait(1));

	// overlays
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("rgba(102,202,236,0)").ss(0.1,1,1).p("Ak6hRIJ1AAIAACjIp1AAg");
	this.shape_103.setTransform(240.7186,358.1635,6.0972,1.2254);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(102,202,236,0.298)").s().p("Ak6BSIAAijIJ1AAIAACjg");
	this.shape_104.setTransform(240.7186,358.1635,6.0972,1.2254);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_104,p:{scaleX:6.0972,scaleY:1.2254,x:240.7186,y:358.1635}},{t:this.shape_103,p:{scaleX:6.0972,scaleY:1.2254,x:240.7186,y:358.1635}}]},1).to({state:[{t:this.shape_104,p:{scaleX:2.6712,scaleY:1.1317,x:573.8545,y:293.7014}},{t:this.shape_103,p:{scaleX:2.6712,scaleY:1.1317,x:573.8545,y:293.7014}}]},1).to({state:[{t:this.shape_104,p:{scaleX:3.4162,scaleY:1.1657,x:819.9839,y:383.5882}},{t:this.shape_103,p:{scaleX:3.4162,scaleY:1.1657,x:819.9839,y:383.5882}}]},1).wait(1));

	// svgs
	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F8B572").s().p("ABwBIQhogxg3gXQgpgQgsgMQg4gOgrAAIAegXQAXgRAngYQBFAHAeAMQBQAfBTA7QBMA4AhAwIgFAAQgmAAhNgjg");
	this.shape_105.setTransform(139.8307,230.8466,1.8917,1.8917);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#C56A14").s().p("ABfBPQiMhJgYgJQg6gZhzACIAfgXQAXgRAmgYQAjgWATgKQBOAKAfAOQBPAjBKBCQBHBAAFAjQADARgQADIgHABIgDAAQglAAhXgsg");
	this.shape_106.setTransform(141.7553,227.8111,1.8917,1.8917);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F8B572").s().p("AA+AwQiHhzgbgTQgugegygSQAyAAAyACQBEADAjAGQBBA9A3BHQA8BPAJAoIABAHQgkgChjhVg");
	this.shape_107.setTransform(315.6664,183.7125,1.8917,1.8917);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#C56A14").s().p("AAzAwQiGhzgcgTQgugegxgSQAxAAAyACQA6ADBDAJIAeAFQA4AvAxBEQAvBDAGAnQAEAYgQAEIgIABQgkgChjhVg");
	this.shape_108.setTransform(317.6811,183.7125,1.8917,1.8917);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F8B572").s().p("ACLBSQhegvg6gZQgsgRhBgQQhOgSgwACIBLgbQBIgZBCgSQBZAjBaBHQBVBBAUAtIgCABQgHACgIAAQgiAAg7gcg");
	this.shape_109.setTransform(219.8979,188.9737,1.8917,1.8917);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#C56A14").s().p("AByBKQiXhNgUgIQg/gbiFAFIBKgbQBIgZBDgSIAogLQANADAMAFQBNAiBJBBQBFA9AJAlQAFASgPAEIgCABIgKABQgkAAhRgpg");
	this.shape_110.setTransform(220.9446,187.885,1.8917,1.8917);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#EA7D24").s().p("AtgHFQFmg8D9hoQElh4DcjKQBihbAihQQA2iAhYiAQBzATB+BKQBlA7BRBNQA/A9ASBKQAfCIkHBrQi8BOoDB2QlJBMhxATQiOAXhlAAQg8AAgugIg");
	this.shape_111.setTransform(259.1299,249.0212,1.8917,1.8917);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#F39426").s().p("Ar8HOQiSgbglhVIgFgNIgCgGIgDgNQgQhHAQhFQAThSAxhRQA1hVBKg7QBFg1BNgrQB3hECOg2QCDgyB8gfIBBgQQBygYB8gCQCEgCB7AVQBzATB+BKQBlA7BRBNQBAA9ARBKIADASQAMCAkGBoQi7BKn2BzQlHBMhyATQiNAYhmAAQg8AAgugJg");
	this.shape_112.setTransform(240.1142,247.2462,1.8917,1.8917);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D6A85F").s().p("An0gJIPlAAIAEASIvpABg");
	this.shape_113.setTransform(818.4271,278.5419,1.8917,1.8917);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#F3F2F2").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_114.setTransform(827.2111,226.3766,1.8917,1.8917);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F3F2F2").s().p("AgHAIQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDADQgEAEgFAAQgEAAgDgEg");
	this.shape_115.setTransform(877.3874,240.6114,1.8917,1.8917);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F3F2F2").s().p("AgOAPQgGgGAAgJQAAgHAGgHQAGgGAIAAQAJAAAGAGQAGAHAAAHQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_116.setTransform(889.1157,251.8668,1.8917,1.8917);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F3F2F2").s().p("AgJALQgFgFABgGQgBgFAFgEQAEgEAFgBQAGABAEAEQAFAEAAAFQAAAGgFAFQgEADgGAAQgFAAgEgDg");
	this.shape_117.setTransform(870.8612,253.0964,1.8917,1.8917);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F3F2F2").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_118.setTransform(813.2128,260.3793,1.8917,1.8917);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F3F2F2").s().p("AgTAUQgJgIAAgMQAAgLAJgJQAIgIALAAQAMAAAIAIQAJAJAAALQAAAMgJAIQgIAJgMAAQgLAAgIgJg");
	this.shape_119.setTransform(855.1604,264.3518,1.8917,1.8917);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F3F2F2").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_120.setTransform(849.3908,239.1454,1.8917,1.8917);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#F3F2F2").s().p("AgPAQQgGgHgBgJQABgIAGgHQAHgGAIAAQAKAAAGAGQAGAHAAAIQAAAJgGAHQgGAHgKAAQgIAAgHgHg");
	this.shape_121.setTransform(832.4604,248.0835,1.8917,1.8917);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#F3F2F2").s().p("AgWAXQgKgJAAgOQAAgNAKgJQAKgKAMAAQAOAAAKAKQAJAJAAANQAAAOgJAJQgKAKgOAAQgMAAgKgKg");
	this.shape_122.setTransform(805.9771,235.5985,1.8917,1.8917);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F3F2F2").s().p("AgIAKQgEgEAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEAEQgDADgGAAQgEAAgEgDg");
	this.shape_123.setTransform(786.2566,257.3526,1.8917,1.8917);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F3F2F2").s().p("AgUAUQgIgIAAgMQAAgLAIgIQAJgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgJgJg");
	this.shape_124.setTransform(767.7656,248.3672,1.8917,1.8917);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F3F2F2").s().p("AgOAPQgGgHAAgIQAAgHAGgHQAGgGAIAAQAIAAAHAGQAGAHAAAHQAAAIgGAHQgHAGgIAAQgIAAgGgGg");
	this.shape_125.setTransform(750.8352,264.3518,1.8917,1.8917);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#D6A85F").s().p("Ak4CyQgJgfAGgwQANhgBKhQQBchkFAAAQBNAAA5AEQjPAShHBOQhKBQgMBgQgHAwAJAfg");
	this.shape_126.setTransform(783.7634,244.1604,1.8917,1.8917);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#EEBD65").s().p("AnwCyQgJgfAHgwQAMhgBLhQQBbhkFAAAQFBAABbBkQBLBQAMBgQAHAwgJAfg");
	this.shape_127.setTransform(818.4621,244.1583,1.8917,1.8917);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFE571").s().p("AAHAdQhPhKjbgwIJHAAQgOAjgmApQhNBSh4AdQAEgcgoglg");
	this.shape_128.setTransform(850.0183,292.6823,1.8917,1.8917);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#C34225").s().p("AncAHIAAgNIO5AAIAAANg");
	this.shape_129.setTransform(817.1029,300.8166,1.8917,1.8917);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#3EB6AD").s().p("AmlAvIgEgUQgDgRgEgCIgLgIQgJgHgGAEIgZAVQgSAQgHgIQgGgIAIgeIAKgdIPbgGQAKAKAHAjQAIAjgJABQgGABgLgGQgNgIgMgCQgLgCgOAKQgNAJgMgDQgWgHgSADIgOAFQgpAAgIgDIgYgGIgagGQgIgCgbAKIgaALQgsgEgHgDQgVgKgHABQgEABgKAHQgKAHgFgBQgDAAgLgJQgLgJgIgBQgIgBgeALQgdAMgEgBQgxgQgOgCQgHAAgWAKQgUAKgEgEIgLgLQgGgHgIgBQgGgBgSAPQgSAOgEAAQgFgBgFgGIgEgHQgTgOgJAAQgEAAgWAIQgUAJgDgBQgDgBgKgJIgIgIIgZAFIgVgIQgIgBgWAPIgVAPQgHAHgEAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_130.setTransform(818.5304,285.8092,1.8917,1.8917);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#DD5C59","#C04F4F"],[0,1],-52.1,0,52.1,0).s().p("AmxAtQgjAAgagNQgagOAAgSQAAgSAagNQAagNAjAAINjAAQAkAAAaANQAZANAAASQAAATgZANQgaANgkAAg");
	this.shape_131.setTransform(816.961,307.9105,1.8917,1.8917);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#DC5112").s().p("AnGAtQgYgBgRgNQgRgMAAgTQAAgSARgNQARgNAYABIONAAQAYgBARANQARANAAASQAAATgRAMQgRANgYABg");
	this.shape_132.setTransform(817.0083,292.635,1.8917,1.8917);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#D6A85F").s().p("AjuBvQi5gLgZgXQgkghgJhUIgDhOIPhAAIgDBOQgJBUglAhQgYAXi5ALQh7AIh0AAQhzAAh7gIg");
	this.shape_133.setTransform(818.4621,333.161,1.8917,1.8917);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#B3B3B3").s().p("AlQBAQiMgaABgmQgBglCMgaQCLgbDFAAQDFAACMAbQCMAaAAAlQAAAmiMAaQiLAbjGAAQjFAAiLgbg");
	this.shape_134.setTransform(827.1761,349.0548,1.8917,1.8917);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#F9BA85").s().p("AgtBPQgsgFgdgcQgcgbAdglQAfgmBDgQQBBgOAwAOQAsAOgGAZQgDAPgeAQQgrAVggAlQgUAYgjAAIgOgBg");
	this.shape_135.setTransform(613.5764,201.2707,1.8917,1.8917);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#D19766").s().p("AgtgOQAXgQASgVQAGAKANANQAQAPAPAKQgUAggaAXQgegegPgkg");
	this.shape_136.setTransform(563.8998,256.7301,1.8917,1.8917);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#D19766").s().p("AhJDoQg7gSglgrQgngtgIhAQAnBCBOAXQAeAKAfAAQA7AAAxgiQAPAlAeAeQg4AvhGAAQgfAAgfgJgACDBxQgNgMgHgKQApguAWhHQAPgzABg5QABg2gLg0QAeA9AGBPQAGBSgWBHQgNAvgZAmQgPgKgQgPg");
	this.shape_137.setTransform(541.9545,229.7735,1.8917,1.8917);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#D19766").s().p("AjbB7IgDgDQAbgXAUghQAyAhA6AAQBiAABYhbQAkglAcgyQAagvAOg0QgCBEgeBJQghBLg1A2QhYBbhhAAQhPAAg8g6g");
	this.shape_138.setTransform(605.8569,243.8682,1.8917,1.8917);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#EFB075").s().p("Ai+DGQhBhAADhWQADhcBRhUQBUhWB7geQB8geA1A0QA3A1gaB8QgaB7hUBXQhSBUhbAGIgPABQhNAAg8g6g");
	this.shape_139.setTransform(600.3438,229.6589,1.8917,1.8917);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#F9BA85").s().p("AhNBkQgmgLAJgvQAJgvA1gtQAzgrAxgJQAugJAGAaQAEAOgUAdQgbAngLAuQgJAkgsARQgWAJgWAAQgSAAgQgFg");
	this.shape_140.setTransform(540.4829,191.7399,1.8917,1.8917);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#EFB075").s().p("AhIEWQhXgaglhPQgohTAihvQAih0BhhTQBfhTBHAVQBJAWAiB6QAiB6gjBzQghBwhPAwQgvAcg0AAQgeAAgggJg");
	this.shape_141.setTransform(541.8107,221.1468,1.8917,1.8917);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#CCCCCC").s().p("A64G+Ig6n8INwmeQK/ArKsBkQVbDIhWEgQg1C0rABQQobA+tsAAQrHAApjgfg");
	this.shape_142.setTransform(268.7787,291.125);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#CFD1D3").s().p("AkaGCQiKgZgGglQgOgFgFgFQgcgbgMg9QgJgoABgwQgggNAAgWQAAgMANgKQALgLAUgGQgQgFgKgLQgKgLAAgOQAAgOAKgKQABgQAIgZIAAgTIAEAAQgIgqAKgzQAShVBChIQA4g+CUgYQBVgOBsAAIBmACIADAAIATABIACAAIAWACQDQASBGBNQBFBLAQBZQAJAygJAnIAEAQQAIAVACAUQADAVgHABIgCAAIAAACQABANgLAMQgJAKgQAGIAAABQAUAGAMAKQAMAKgBAMQABAOgRAMQACBggaA3QAyAUAAAVQAAAmiLAaQiNAbjFAAQjBAAiKgag");
	this.shape_143.setTransform(823.1459,288.5969,1.8918,1.8918);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#CCCCCC").s().p("Al1A9IjDgYICBh5IEQANIDNgBQJSAAhGA5Qh2BkmIAAQi+AAjrgYg");
	this.shape_144.setTransform(589.969,271.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(516.8,216.7,545.2,177.40000000000003);
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