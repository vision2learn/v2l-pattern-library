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
	this.shape.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("Al3ilILvACIkiFIIingBg");
	this.shape.setTransform(-1.7,0.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AhRCkIkmlJILvACIkhFIg");
	this.shape_1.setTransform(-1.7,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,-17.1,77.19999999999999,35.1);


// stage content:
(lib.nh_u1_s1_p6_weight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,4];
	// timeline functions:
	this.frame_0 = function() {
		this.stop(1);
		
		this.button_blue.addEventListener("click", Button_blue_function.bind(this));
		
		function Button_blue_function() {
			
			this.gotoAndStop(1);	
		}
		
		this.stop(2);
		
		this.button_green.addEventListener("click", Button_green_function.bind(this));
		
		function Button_green_function() {
			
			this.gotoAndStop(2);	
		}
		
		this.stop(3);
		
		this.button_red.addEventListener("click", Button_red_function.bind(this));
		
		function Button_red_function() {
			
			this.gotoAndStop(3);
		}
		
		this.stop(4);
		
		this.button_character.addEventListener("click", Button_character_function.bind(this));
		
		function Button_character_function() {
			
			this.gotoAndStop(4);
		}
	}
	this.frame_4 = function() {
		this.stop(1);
		
		this.button_blue2.addEventListener("click", Button_blue2_function.bind(this));
		
		function Button_blue2_function() {
			
			this.gotoAndStop(1);	
		}
		
		this.stop(2);
		
		this.button_green2.addEventListener("click", Button_green2_function.bind(this));
		
		function Button_green2_function() {
			
			this.gotoAndStop(2);	
		}
		
		this.stop(3);
		
		this.button_red2.addEventListener("click", Button_red2_function.bind(this));
		
		function Button_red2_function() {
			
			this.gotoAndStop(3);
		}
		
		this.stop(5);
		
		this.button_food.addEventListener("click", Button_food_function.bind(this));
		
		function Button_food_function() {
			
			this.gotoAndStop(5);	
		}
		
		this.stop(6);
		
		this.button_walk.addEventListener("click", Button_walk_function.bind(this));
		
		function Button_walk_function() {
			
			this.gotoAndStop(6);	
		}
		
		this.stop(7);
		
		this.button_run.addEventListener("click", Button_run_function.bind(this));
		
		function Button_run_function() {
			
			this.gotoAndStop(7);	
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(4));

	// buttons
	this.button_red = new lib.button();
	this.button_red.name = "button_red";
	this.button_red.setTransform(278.7,300.75,0.5295,2.1033,9.4754,0,0,1.2,1.4);
	new cjs.ButtonHelper(this.button_red, 0, 1, 1);

	this.button_green = new lib.button();
	this.button_green.name = "button_green";
	this.button_green.setTransform(252,298.85,0.5255,2.3212,0,0,0,2.3,1.1);
	new cjs.ButtonHelper(this.button_green, 0, 1, 1);

	this.button_blue = new lib.button();
	this.button_blue.name = "button_blue";
	this.button_blue.setTransform(223,302.25,0.4875,2.198,-11.7005,0,0,1.1,1);
	new cjs.ButtonHelper(this.button_blue, 0, 1, 1);

	this.button_run = new lib.button();
	this.button_run.name = "button_run";
	this.button_run.setTransform(336.55,430.7,2.5442,5.5554,0,1.0519,-0.7237,-1.6,-1.4);
	new cjs.ButtonHelper(this.button_run, 0, 1, 1);

	this.button_walk = new lib.button();
	this.button_walk.name = "button_walk";
	this.button_walk.setTransform(456.3,222.55,2.5442,5.5554,0,1.0519,-0.7237,-1.6,-1.4);
	new cjs.ButtonHelper(this.button_walk, 0, 1, 1);

	this.button_food = new lib.button();
	this.button_food.name = "button_food";
	this.button_food.setTransform(149.25,290.35,2.4253,5.1176,0,1.0521,-0.7235,-1.6,-1.4);
	new cjs.ButtonHelper(this.button_food, 0, 1, 1);

	this.button_red2 = new lib.button();
	this.button_red2.name = "button_red2";
	this.button_red2.setTransform(890.7,499.6,0.3389,1.4495,0,10.4772,11.9283,1.6,1.4);
	new cjs.ButtonHelper(this.button_red2, 0, 1, 1);

	this.button_green2 = new lib.button();
	this.button_green2.name = "button_green2";
	this.button_green2.setTransform(873.35,497.15,0.3355,1.6029,0,0,0,2.6,1.2);
	new cjs.ButtonHelper(this.button_green2, 0, 1, 1);

	this.button_blue2 = new lib.button();
	this.button_blue2.name = "button_blue2";
	this.button_blue2.setTransform(853.4,495.35,0.3124,1.5132,0,-10.8409,-12.6181,-1.8,-1.8);
	new cjs.ButtonHelper(this.button_blue2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_blue},{t:this.button_green},{t:this.button_red}]}).to({state:[{t:this.button_blue2},{t:this.button_green2},{t:this.button_red2},{t:this.button_food},{t:this.button_walk},{t:this.button_run}]},4).wait(4));

	// Layer_1
	this.button_character = new lib.button();
	this.button_character.name = "button_character";
	this.button_character.setTransform(699.8,308.85,4.3383,10.7978,0,1.0519,-0.7235,-1.4,-1.2);
	this.button_character._off = true;
	new cjs.ButtonHelper(this.button_character, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_character).wait(3).to({_off:false},0).to({_off:true},1).wait(4));

	// text_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#285C9B").s().p("AgIALQgDgEAAgHQAAgGADgDQADgEAFAAQAFAAAEAEQAEADAAAGQAAAHgEAEQgEADgFAAQgEAAgEgDg");
	this.shape.setTransform(951.1,434.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#285C9B").s().p("AgnAzIAAgQQAJAFAJACQAJACAJAAQAMAAAHgEQAHgEAAgJQAAgHgFgEQgGgFgQgGQgPgFgHgEQgGgFgEgFQgDgGAAgIQAAgNALgIQALgIATAAQASAAARAHIgGAOQgRgHgNAAQgLAAgHAEQgGAEAAAGQAAAFADADQACADAFADIATAIQAUAHAHAHQAHAHAAAMQAAAPgMAJQgMAIgUAAQgWAAgNgHg");
	this.shape_1.setTransform(943.375,430.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#285C9B").s().p("AggArQgPgPAAgbQAAgaAOgQQANgQAWAAQAUAAANAOQANAOAAAWIAAAKIhNAAQAAAUAKAKQAKAKAPAAQATAAARgHIAAAPIgRAGQgHABgMAAQgYAAgOgPgAAdgKQAAgQgHgIQgHgJgNAAQgNAAgIAJQgIAJgCAPIA6AAIAAAAg");
	this.shape_2.setTransform(932.5,430.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#285C9B").s().p("AgJA4IgrhvIATAAIAYBCIAJAeIAAAAIAHgXIAchJIARAAIgqBvg");
	this.shape_3.setTransform(921.3,430.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#285C9B").s().p("AgIBNIAAhwIAQAAIAABwgAgGg4QgDgDAAgGQAAgFADgDQADgDADAAQAEAAADADQADADAAAFQAAAGgDADQgDACgEAAQgDAAgDgCg");
	this.shape_4.setTransform(913.4,428);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#285C9B").s().p("AgQAkIAAhCIgQAAIAAgIIAQgHIAHgYIAJAAIAAAaIAhAAIAAANIghAAIAABBQAAAKAFAGQAFAFAIAAIAJAAIAGgCIAAANIgIACIgJABQggAAAAgig");
	this.shape_5.setTransform(906.975,428.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#285C9B").s().p("AgjAyQgJgJAAgQQAAghA1gCIATgBIAAgHQAAgNgFgGQgGgGgMAAQgOAAgRAIIgFgNQAIgEAKgDQAKgCAJAAQAUAAAJAJQAKAJAAATIAABMIgNAAIgDgQIgBAAQgIALgJADQgIAEgLAAQgRAAgKgIgAALACQgTAAgJAGQgJAFAAAMQAAAJAFAFQAGAFAKAAQAPAAAJgJQAJgIAAgQIAAgLg");
	this.shape_6.setTransform(897.175,430.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#285C9B").s().p("AAeA5IAAhHQAAgOgHgHQgFgHgOAAQgRAAgIAKQgIAJAAAWIAAA6IgRAAIAAhvIAOAAIACAPIABAAQAGgIAJgFQAJgEALAAQAUAAALAKQAKAJAAAWIAABIg");
	this.shape_7.setTransform(885.35,429.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#285C9B").s().p("AgfA5IAAhvIAOAAIACAVIABAAQAGgLAIgGQAJgGAKAAQAIAAAFABIgCAQIgMgCQgOAAgIALQgKALAAARIAAA7g");
	this.shape_8.setTransform(875.325,429.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#285C9B").s().p("AggArQgOgPAAgbQgBgaANgQQAOgQAVAAQAWAAAMAOQAMAOAAAWIAAAKIhMAAQABAUAJAKQAJAKARAAQASAAASgHIAAAPIgRAGQgJABgLAAQgYAAgOgPgAAdgKQAAgQgHgIQgIgJgNAAQgMAAgIAJQgIAJgBAPIA5AAIAAAAg");
	this.shape_9.setTransform(864.5,430.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#285C9B").s().p("AgQAkIAAhCIgQAAIAAgIIAQgHIAHgYIAJAAIAAAaIAhAAIAAANIghAAIAABBQAAAKAFAGQAFAFAIAAIAJAAIAGgCIAAANIgIACIgJABQggAAAAgig");
	this.shape_10.setTransform(854.775,428.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#285C9B").s().p("AgIBQIAAifIAQAAIAACfg");
	this.shape_11.setTransform(848.5,427.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#285C9B").s().p("AgjAyQgJgJAAgQQAAghA1gCIATgBIAAgHQAAgNgFgGQgGgGgMAAQgOAAgRAIIgFgNQAIgEAKgDQAKgCAJAAQAUAAAJAJQAKAJAAATIAABMIgNAAIgDgQIgBAAQgIALgJADQgIAEgLAAQgRAAgKgIgAALACQgTAAgJAGQgJAFAAAMQAAAJAFAFQAGAFAKAAQAPAAAJgJQAJgIAAgQIAAgLg");
	this.shape_12.setTransform(839.675,430.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#285C9B").s().p("AgiArQgPgPAAgbQAAgbAOgQQANgQAYAAQAWAAANAOQANAOAAAXIAAAMIhKAAQAAARAIAJQAJAJAOAAQAKAAAJgCQAJgCAJgEIAAATQgIAEgJACQgJACgMAAQgZAAgPgQgAAagLQAAgOgGgHQgHgHgLAAQgLAAgHAHQgHAHgBAOIAyAAIAAAAg");
	this.shape_13.setTransform(822.775,430.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#285C9B").s().p("AgMBOIAAhwIAYAAIAABwgAgJg2QgEgEAAgGQAAgHAEgDQADgEAGABQAHgBADAEQAEADgBAHQABAGgEAEQgDAEgHAAQgGAAgDgEg");
	this.shape_14.setTransform(813.8,427.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#285C9B").s().p("AgiA6IAAhxIATAAIAEAUIABAAQAFgKAJgGQAJgGAKAAIAMABIgCAXIgLgBQgOAAgIAJQgJAJAAAPIAAA7g");
	this.shape_15.setTransform(806.975,429.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#285C9B").s().p("AgbA0QgNgIgGgNQgHgNAAgSQAAgbAOgPQAPgQAYAAQAZAAAOAQQAPAQAAAaQAAAcgPAPQgOAQgZAAQgPAAgMgHgAgVgcQgHAKAAASQAAAnAcAAQAdAAAAgnQAAgmgdAAQgOAAgHAKg");
	this.shape_16.setTransform(795.425,430.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#285C9B").s().p("AgLBQIAAifIAXAAIAACfg");
	this.shape_17.setTransform(786.075,427.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#285C9B").s().p("AgmAyQgJgJAAgRQAAgRANgIQANgJAagBIATgBIAAgGQAAgKgFgGQgFgFgLAAQgHAAgIACIgQAGIgHgRQAJgFALgCQALgDAIAAQAWAAALAKQALAJAAAUIAABMIgRAAIgFgQIgBAAQgIAKgIAEQgJAEgMAAQgQAAgKgJgAAKADQgRABgHAFQgIAFAAAKQAAAIAFAEQAEAEAJAAQAMAAAIgHQAIgHAAgOIAAgJg");
	this.shape_18.setTransform(776.725,430.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#285C9B").s().p("AgdAsQgNgPAAgcQAAgcAOgPQAOgQAZAAQASAAAOAHIgHATQgPgGgKAAQgcAAAAAmQAAAUAHAJQAHAKANAAQAQAAAPgIIAAAVQgHAEgHABQgHACgLAAQgZAAgNgPg");
	this.shape_19.setTransform(766.025,430.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#285C9B").s().p("AAYA5IgOg1IgKgmIAAAAIgJAmIgPA1IgbAAIgghxIAZAAIAOA4QAFAUACAPIABAAIADgRIAEgPIARg7IAZAAIARA7IAEAPIADAQIABAAQABgMAGgWIAOg4IAZAAIggBxg");
	this.shape_20.setTransform(746.625,430.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#285C9B").s().p("AgbA0QgNgIgGgNQgHgNAAgSQAAgbAOgPQAPgQAYAAQAZAAAOAQQAPAQAAAaQAAAcgPAPQgOAQgZAAQgPAAgMgHgAgVgcQgHAKAAASQAAAnAcAAQAdAAAAgnQAAgmgdAAQgOAAgHAKg");
	this.shape_21.setTransform(731.675,430.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#285C9B").s().p("AgLBQIAAifIAXAAIAACfg");
	this.shape_22.setTransform(722.325,427.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#285C9B").s().p("AggArQgOgPAAgbQAAgaANgQQANgQAVAAQAWAAAMAOQAMAOAAAWIAAAKIhMAAQAAAUAKAKQAJAKARAAQASAAASgHIAAAPIgRAGQgJABgLAAQgYAAgOgPgAAdgKQAAgQgHgIQgIgJgNAAQgMAAgIAJQgIAJgBAPIA5AAIAAAAg");
	this.shape_23.setTransform(708.15,430.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#285C9B").s().p("AgnAzIAAgQQAJAFAJACQAJACAJAAQAMAAAHgEQAHgEAAgJQAAgHgFgEQgGgFgQgGQgPgFgHgEQgGgFgEgFQgDgGAAgIQAAgNALgIQALgIATAAQASAAARAHIgGAOQgRgHgNAAQgLAAgHAEQgGAEAAAGQAAAFADADQACADAFADIATAIQAUAHAHAHQAHAHAAAMQAAAPgMAJQgMAIgUAAQgWAAgNgHg");
	this.shape_24.setTransform(697.275,430.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#285C9B").s().p("AgkAwQgKgKAAgWIAAhIIARAAIAABIQAAAOAGAGQAHAHANAAQARAAAHgKQAJgJAAgWIAAg6IARAAIAABvIgOAAIgDgPIgBAAQgFAIgJAFQgKAEgLAAQgUAAgKgJg");
	this.shape_25.setTransform(685.75,430.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#285C9B").s().p("AgfA5IAAhvIAOAAIACAVIABAAQAGgLAIgGQAJgGAKAAQAIAAAFABIgCAQIgMgCQgOAAgIALQgKALAAARIAAA7g");
	this.shape_26.setTransform(670.375,429.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#285C9B").s().p("AgbAzQgLgHgHgNQgFgNAAgSQAAgbANgPQAOgPAXAAQAYAAANAQQAOAPABAaQgBAbgOAQQgNAPgYAAQgPAAgMgHgAgZggQgIALAAAVQAAAVAIAMQAJALAQAAQAQAAAJgLQAJgLAAgWQAAgUgJgMQgJgLgQAAQgQAAgJALg");
	this.shape_27.setTransform(659.05,430.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#285C9B").s().p("AgnAzIAAgQQAJAFAJACQAJACAJAAQAMAAAHgEQAHgEAAgJQAAgHgFgEQgGgFgQgGQgPgFgHgEQgGgFgEgFQgDgGAAgIQAAgNALgIQALgIATAAQASAAARAHIgGAOQgRgHgNAAQgLAAgHAEQgGAEAAAGQAAAFADADQACADAFADIATAIQAUAHAHAHQAHAHAAAMQAAAPgMAJQgMAIgUAAQgWAAgNgHg");
	this.shape_28.setTransform(642.325,430.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#285C9B").s().p("AgkBCQgMgPAAgcQAAgbAMgPQAMgQAWAAQAWAAAMARIABAAIAAgIIgBgIIAAguIARAAIAACfIgNAAIgDgPIgBAAQgLARgXAAQgWAAgMgPgAgXgJQgIALAAAVQAAAWAIALQAIALAPAAQARAAAIgKQAHgJAAgWIAAgDQAAgXgIgKQgIgKgQAAQgPAAgIALg");
	this.shape_29.setTransform(630.525,427.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#285C9B").s().p("AgbAzQgLgHgHgNQgFgNAAgSQAAgbANgPQAOgPAXAAQAYAAANAQQAOAPAAAaQAAAbgOAQQgNAPgYAAQgPAAgMgHgAgZggQgIALAAAVQAAAVAIAMQAJALAQAAQAQAAAJgLQAJgLAAgWQAAgUgJgMQgJgLgQAAQgQAAgJALg");
	this.shape_30.setTransform(618.1,430.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#285C9B").s().p("AgaAzQgMgHgGgNQgHgNAAgSQABgbANgPQAOgPAXAAQAYAAAOAQQANAPAAAaQAAAbgNAQQgOAPgYAAQgOAAgMgHgAgYggQgJALAAAVQAAAVAJAMQAIALAQAAQAQAAAKgLQAIgLAAgWQAAgUgIgMQgKgLgQAAQgQAAgIALg");
	this.shape_31.setTransform(605.45,430.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#285C9B").s().p("AgSBQIAAhiIgUAAIAAgIIAUgGIAAgGQAAgpAkAAQAIAAANADIgFAOQgKgDgHAAQgJAAgFAGQgDAGgBAPIAAAHIAcAAIAAANIgcAAIAABig");
	this.shape_32.setTransform(596.15,427.675);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#285C9B").s().p("AAeA5IAAhHQAAgOgGgHQgHgHgNAAQgQAAgIAKQgJAJAAAWIAAA6IgRAAIAAhvIAOAAIADAPIABAAQAEgIAKgFQAJgEALAAQAVAAAJAKQALAJAAAWIAABIg");
	this.shape_33.setTransform(925.15,397.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#285C9B").s().p("AgIBNIAAhwIAQAAIAABwgAgGg4QgDgDAAgGQAAgFADgDQADgDADAAQAEAAADADQADADAAAFQAAAGgDADQgDADgEgBQgDABgDgDg");
	this.shape_34.setTransform(916,395.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#285C9B").s().p("AgjAxQgJgIAAgQQAAghA1gCIATgBIAAgHQAAgNgFgGQgGgGgMAAQgOAAgRAJIgFgOQAIgEAKgDQAKgCAJAAQAUAAAJAIQAKAKAAATIAABMIgNAAIgDgQIgBAAQgIAKgJAFQgIADgLAAQgRAAgKgJgAALACQgTAAgJAGQgJAFAAAMQAAAJAFAFQAGAFAKAAQAPAAAJgJQAJgIAAgQIAAgKg");
	this.shape_35.setTransform(907.175,397.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#285C9B").s().p("AgQAkIAAhCIgQAAIAAgIIAQgHIAHgYIAJAAIAAAaIAhAAIAAANIghAAIAABBQAAAKAFAGQAFAFAIAAIAJAAIAGgCIAAANIgIACIgJABQggAAAAgig");
	this.shape_36.setTransform(897.925,396.125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#285C9B").s().p("AgfA5IAAhvIAOAAIACAVIABAAQAGgLAIgGQAJgGAKAAQAIAAAFABIgCAQIgMgCQgOAAgIALQgKALAAARIAAA7g");
	this.shape_37.setTransform(890.775,397.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#285C9B").s().p("AggArQgPgPAAgbQAAgaAOgQQANgQAWAAQAUAAANAOQAMAOABAWIAAAKIhNAAQAAAUAKAKQAKAKAPAAQATAAARgHIAAAPIgQAGQgIABgMAAQgYAAgOgPgAAdgKQAAgQgHgIQgIgJgMAAQgNAAgIAJQgIAJgCAPIA6AAIAAAAg");
	this.shape_38.setTransform(879.95,397.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#285C9B").s().p("AgbArQgNgPABgbQAAgbANgQQAOgPAYAAQAHAAAJACQAIABAFADIgGAOIgMgEIgMgBQghAAAAArQAAAUAJALQAHALAQAAQAOAAAPgGIAAAPQgMAGgQAAQgYAAgOgPg");
	this.shape_39.setTransform(869.3,397.325);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#285C9B").s().p("AgUAiIAAg8IgPAAIAAgLIAQgIIAJgYIANAAIAAAZIAhAAIAAASIghAAIAAA8QAAAJAFAEQAEAEAHAAQAJAAAJgDIAAASIgKADIgOABQghAAAAgkg");
	this.shape_40.setTransform(854.4,396.125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#285C9B").s().p("AgmAwQgLgLAAgVIAAhJIAZAAIAABFQgBANAGAHQAFAGALAAQAOAAAIgJQAHgJAAgUIAAg5IAYAAIAABxIgTAAIgDgPIgCAAQgFAIgIAEQgKAFgLAAQgVAAgJgKg");
	this.shape_41.setTransform(843.65,397.375);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#285C9B").s().p("AgbA0QgNgIgGgNQgHgNAAgSQAAgbAOgPQAPgQAYAAQAZAAAOAQQAPAQAAAaQAAAcgPAPQgOAQgZAAQgPAAgMgHgAgVgcQgHAKAAASQAAAnAcAAQAdAAAAgnQAAgmgdAAQgOAAgHAKg");
	this.shape_42.setTransform(830.675,397.275);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#285C9B").s().p("AgUAiIAAg8IgPAAIAAgLIAQgIIAIgYIAOAAIAAAZIAhAAIAAASIghAAIAAA8QAAAJAEAEQAFAEAHAAQAJAAAJgDIAAASIgKADIgOABQghAAAAgkg");
	this.shape_43.setTransform(814.6,396.125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#285C9B").s().p("AgmAwQgLgLAAgVIAAhJIAYAAIAABFQAAANAGAHQAFAGAMAAQANAAAIgJQAHgJAAgUIAAg5IAYAAIAABxIgTAAIgDgPIgCAAQgFAIgIAEQgKAFgLAAQgVAAgJgKg");
	this.shape_44.setTransform(803.85,397.375);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#285C9B").s().p("AgdAsQgNgPAAgcQAAgcAOgPQAOgQAZAAQASAAAOAHIgHATQgPgGgKAAQgcAAAAAmQAAAUAHAJQAHAKANAAQAQAAAPgIIAAAVQgHAEgHABQgHACgLAAQgZAAgNgPg");
	this.shape_45.setTransform(792.275,397.275);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#285C9B").s().p("AgkBCQgMgPAAgcQAAgbAMgPQAMgQAWAAQAWAAAMARIABAAIAAgIIgBgIIAAguIARAAIAACfIgNAAIgDgPIgBAAQgLARgXAAQgWAAgMgPgAgXgJQgIALAAAVQAAAWAIALQAIALAPAAQARAAAIgKQAHgJAAgWIAAgDQAAgXgIgKQgIgKgQAAQgPAAgIALg");
	this.shape_46.setTransform(774.725,395.075);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#285C9B").s().p("AgIBQIAAifIAQAAIAACfg");
	this.shape_47.setTransform(765.95,394.975);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#285C9B").s().p("AgkAwQgKgKAAgWIAAhIIARAAIAABIQAAAOAGAGQAHAHANAAQARAAAHgKQAJgJAAgWIAAg6IARAAIAABvIgOAAIgDgPIgBAAQgFAIgJAFQgKAEgLAAQgUAAgKgJg");
	this.shape_48.setTransform(756.85,397.425);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#285C9B").s().p("AgaAzQgMgHgGgNQgHgNAAgSQAAgbAOgPQAOgPAXAAQAYAAANAQQAPAPAAAaQAAAbgPAQQgNAPgYAAQgOAAgMgHgAgZggQgIALAAAVQAAAVAIAMQAJALAQAAQARAAAJgLQAIgLAAgWQAAgUgIgMQgKgLgQAAQgQAAgJALg");
	this.shape_49.setTransform(744.15,397.325);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#285C9B").s().p("AgbArQgMgPAAgbQAAgbANgQQANgPAYAAQAJAAAIACQAIABAFADIgGAOIgMgEIgMgBQghAAAAArQAAAUAIALQAIALAQAAQAOAAAPgGIAAAPQgMAGgRAAQgXAAgOgPg");
	this.shape_50.setTransform(733.1,397.325);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#285C9B").s().p("AgkAwQgKgKAAgWIAAhIIARAAIAABIQAAAOAHAGQAFAHAOAAQAQAAAJgKQAIgJAAgWIAAg6IARAAIAABvIgOAAIgCgPIgBAAQgGAIgJAFQgJAEgLAAQgVAAgKgJg");
	this.shape_51.setTransform(715.95,397.425);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#285C9B").s().p("AgbAzQgLgHgHgNQgFgNAAgSQAAgbANgPQAOgPAXAAQAYAAAOAQQAOAPgBAaQABAbgOAQQgOAPgYAAQgPAAgMgHgAgYggQgJALAAAVQAAAVAJAMQAIALAQAAQARAAAIgLQAJgLAAgWQAAgUgJgMQgIgLgRAAQgQAAgIALg");
	this.shape_52.setTransform(703.25,397.325);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#285C9B").s().p("AgyBPIAAgNQAGABAHABQARgBAIgTIAGgQIguhxIATAAIAYBAQAIAVABALIABAAIAGgRIAchPIASAAIgwB/QgHAUgJAHQgKAIgOAAQgIAAgHgCg");
	this.shape_53.setTransform(691.625,399.85);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#285C9B").s().p("AgPAaIAHgaIAEgZIASAAIACADIgIAXIgJAZg");
	this.shape_54.setTransform(678,403.075);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#285C9B").s().p("AggArQgOgPAAgbQAAgaAMgQQAOgQAVAAQAWAAAMAOQAMAOAAAWIAAAKIhMAAQAAAUAKAKQAJAKARAAQASAAASgHIAAAPIgRAGQgJABgLAAQgYAAgOgPgAAdgKQAAgQgHgIQgIgJgNAAQgMAAgIAJQgIAJgBAPIA5AAIAAAAg");
	this.shape_55.setTransform(670,397.325);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#285C9B").s().p("AgIBQIAAifIAQAAIAACfg");
	this.shape_56.setTransform(661.4,394.975);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#285C9B").s().p("AgwBSIAAiiIANAAIACAQIACAAQAGgJAJgFQAIgDALgBQAWAAAMAQQANAPAAAbQAAAbgNAQQgMAPgWAAQgKAAgJgEQgKgEgFgJIgCAAIACATIAAAugAgYg5QgHAJAAAVIAAADQAAAYAHAJQAIALARAAQAOAAAJgMQAIgLAAgVQAAgUgIgLQgJgMgPAAQgQAAgIAKg");
	this.shape_57.setTransform(652.65,399.75);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#285C9B").s().p("AA/A5IAAhIQAAgNgGgHQgFgHgNAAQgPAAgIAJQgIAKAAASIAAA+IgQAAIAAhIQAAgNgFgHQgGgHgMAAQgQAAgIAKQgHAJAAAWIAAA6IgRAAIAAhvIAOAAIACAPIABAAQAFgIAJgFQAJgEAKAAQAbAAAHATIABAAQAFgJAJgFQAKgFAMAAQATAAAKAKQAJAJAAAWIAABIg");
	this.shape_58.setTransform(636.225,397.225);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#285C9B").s().p("AgjAxQgJgIAAgQQAAghA1gCIATgBIAAgHQAAgNgFgGQgGgGgMAAQgOAAgRAJIgFgOQAIgEAKgDQAKgCAJAAQAUAAAJAIQAKAKAAATIAABMIgNAAIgDgQIgBAAQgIAKgJAFQgIADgLAAQgRAAgKgJgAALACQgTAAgJAGQgJAFAAAMQAAAJAFAFQAGAFAKAAQAPAAAJgJQAJgIAAgQIAAgKg");
	this.shape_59.setTransform(620.225,397.35);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#285C9B").s().p("AAfA4IgfgtIgfAtIgTAAIApg4Igng3IAUAAIAcArIAdgrIAUAAIgnA3IApA4g");
	this.shape_60.setTransform(609.25,397.325);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#285C9B").s().p("AggArQgPgPAAgbQABgaANgQQANgQAWAAQAUAAANAOQANAOAAAWIAAAKIhNAAQABAUAJAKQAJAKAQAAQATAAARgHIAAAPIgRAGQgIABgLAAQgYAAgOgPgAAdgKQAAgQgHgIQgHgJgNAAQgNAAgIAJQgIAJgCAPIA6AAIAAAAg");
	this.shape_61.setTransform(597.95,397.325);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#285C9B").s().p("AgfA5IAAhvIAOAAIACAVIABAAQAGgLAIgGQAJgGAKAAQAIAAAFABIgCAQIgMgCQgOAAgIALQgKALAAARIAAA7g");
	this.shape_62.setTransform(887.875,366.625);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#285C9B").s().p("AgaAzQgMgHgGgNQgHgNAAgSQAAgbAOgPQAOgPAXAAQAYAAANAQQAPAPAAAaQAAAbgPAQQgNAPgYAAQgOAAgMgHgAgZggQgIALAAAVQAAAVAIAMQAJALAQAAQARAAAJgLQAIgLAAgWQAAgUgIgMQgKgLgQAAQgQAAgJALg");
	this.shape_63.setTransform(876.55,366.725);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#285C9B").s().p("AgpBLIAAiVIBTAAIAAAQIhBAAIAAA3IA9AAIAAAOIg9AAIAABAg");
	this.shape_64.setTransform(865.625,364.85);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#285C9B").s().p("AgIALQgEgDABgIQgBgFAEgEQADgEAFAAQAFAAAEAEQAEAEAAAFQAAAHgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_65.setTransform(851.2,371.25);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#285C9B").s().p("AggArQgPgPAAgbQAAgaAOgQQANgQAWAAQAUAAANAOQAMAOAAAWIAAAKIhMAAQAAAUAKAKQAKAKAPAAQATAAARgHIAAAPIgQAGQgIABgMAAQgYAAgOgPgAAdgKQAAgQgHgIQgIgJgMAAQgNAAgIAJQgIAJgCAPIA6AAIAAAAg");
	this.shape_66.setTransform(842.6,366.725);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#285C9B").s().p("AA/A5IAAhIQAAgNgGgHQgFgHgNAAQgPAAgIAJQgIAKAAASIAAA+IgQAAIAAhIQAAgNgFgHQgGgHgMAAQgQAAgIAKQgHAJAAAWIAAA6IgRAAIAAhvIAOAAIACAPIABAAQAFgIAJgFQAJgEAKAAQAbAAAHATIABAAQAFgJAJgFQAKgFAMAAQATAAAKAKQAJAJAAAWIAABIg");
	this.shape_67.setTransform(826.975,366.625);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#285C9B").s().p("AgkAwQgKgKAAgWIAAhIIARAAIAABIQAAAOAHAGQAFAHAOAAQARAAAIgKQAIgJAAgWIAAg6IARAAIAABvIgOAAIgCgPIgBAAQgGAIgJAFQgKAEgKAAQgVAAgKgJg");
	this.shape_68.setTransform(810.7,366.825);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#285C9B").s().p("AgnAzIAAgQQAJAFAJACQAJACAJAAQAMAAAHgEQAHgEAAgJQAAgHgFgEQgGgFgQgGQgPgFgHgEQgGgFgEgFQgDgGAAgIQAAgNALgIQALgIATAAQASAAARAHIgGAOQgRgHgNAAQgLAAgHAEQgGAEAAAGQAAAFADADQACADAFADIATAIQAUAHAHAHQAHAHAAAMQAAAPgMAJQgMAIgUAAQgWAAgNgHg");
	this.shape_69.setTransform(799.375,366.725);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#285C9B").s().p("AAeA5IAAhHQAAgOgHgHQgFgHgOAAQgQAAgJAKQgIAJAAAWIAAA6IgRAAIAAhvIAOAAIACAPIABAAQAGgIAJgFQAKgEAKAAQAUAAALAKQAKAJAAAWIAABIg");
	this.shape_70.setTransform(787.95,366.625);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#285C9B").s().p("AgbAzQgLgHgHgNQgFgNAAgSQAAgbANgPQAOgPAXAAQAYAAANAQQAOAPAAAaQAAAbgOAQQgNAPgYAAQgPAAgMgHgAgZggQgIALAAAVQAAAVAIAMQAJALAQAAQAQAAAJgLQAJgLAAgWQAAgUgJgMQgJgLgQAAQgQAAgJALg");
	this.shape_71.setTransform(775.15,366.725);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#285C9B").s().p("AgbArQgNgPAAgbQABgbANgQQANgPAZAAQAHAAAJACQAIABAEADIgFAOIgMgEIgMgBQghAAAAArQAAAUAJALQAHALAQAAQAOAAAPgGIAAAPQgMAGgQAAQgYAAgOgPg");
	this.shape_72.setTransform(764.1,366.725);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#285C9B").s().p("AgkAwQgKgKAAgWIAAhIIARAAIAABIQAAAOAGAGQAHAHANAAQARAAAHgKQAJgJAAgWIAAg6IARAAIAABvIgOAAIgDgPIgBAAQgFAIgJAFQgKAEgLAAQgUAAgKgJg");
	this.shape_73.setTransform(746.95,366.825);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#285C9B").s().p("AgaAzQgMgHgGgNQgHgNAAgSQAAgbAOgPQAOgPAXAAQAYAAAOAQQAOAPAAAaQAAAbgOAQQgOAPgYAAQgOAAgMgHgAgYggQgJALAAAVQAAAVAJAMQAIALAQAAQARAAAJgLQAIgLAAgWQAAgUgIgMQgKgLgQAAQgQAAgIALg");
	this.shape_74.setTransform(734.25,366.725);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#285C9B").s().p("AgyBPIAAgNQAGABAHABQARgBAIgTIAGgQIguhxIATAAIAYBAQAIAVABALIABAAIAGgRIAchPIASAAIgwB/QgHAUgJAHQgKAIgOAAQgIAAgHgCg");
	this.shape_75.setTransform(722.625,369.25);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#285C9B").s().p("AgQAkIAAhCIgQAAIAAgIIAQgHIAHgYIAJAAIAAAaIAhAAIAAANIghAAIAABBQAAAKAFAGQAFAFAIAAIAJAAIAGgCIAAANIgIACIgJABQggAAAAgig");
	this.shape_76.setTransform(708.125,365.525);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#285C9B").s().p("AgjAxQgJgIAAgQQAAghA1gCIATgBIAAgHQAAgNgFgGQgGgGgMAAQgOAAgRAJIgFgOQAIgEAKgDQAKgCAJAAQAUAAAJAIQAKAKAAATIAABMIgNAAIgDgQIgBAAQgIAKgJAFQgIADgLAAQgRAAgKgJgAALACQgTAAgJAGQgJAFAAAMQAAAJAFAFQAGAFAKAAQAPAAAJgJQAJgIAAgQIAAgKg");
	this.shape_77.setTransform(698.325,366.75);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#285C9B").s().p("AAeBQIAAhJQAAgNgGgGQgHgHgNAAQgRAAgHAJQgJAKAAAVIAAA7IgRAAIAAifIARAAIAAAwIgBAPIABAAQAFgIAKgFQAJgEALAAQAVAAAJAJQALAKAAAUIAABKg");
	this.shape_78.setTransform(686.5,364.375);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#285C9B").s().p("AgQAkIAAhCIgQAAIAAgIIAQgHIAHgYIAJAAIAAAaIAhAAIAAANIghAAIAABBQAAAKAFAGQAFAFAIAAIAJAAIAGgCIAAANIgIACIgJABQggAAAAgig");
	this.shape_79.setTransform(676.225,365.525);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#285C9B").s().p("AgnAzIAAgQQAJAFAJACQAJACAJAAQAMAAAHgEQAHgEAAgJQAAgHgFgEQgGgFgQgGQgPgFgHgEQgGgFgEgFQgDgGAAgIQAAgNALgIQALgIATAAQASAAARAHIgGAOQgRgHgNAAQgLAAgHAEQgGAEAAAGQAAAFADADQACADAFADIATAIQAUAHAHAHQAHAHAAAMQAAAPgMAJQgMAIgUAAQgWAAgNgHg");
	this.shape_80.setTransform(662.225,366.725);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#285C9B").s().p("AggArQgPgPAAgbQAAgaAOgQQANgQAWAAQAUAAANAOQAMAOAAAWIAAAKIhMAAQAAAUAKAKQAKAKAPAAQATAAARgHIAAAPIgQAGQgIABgMAAQgYAAgOgPgAAdgKQAAgQgHgIQgIgJgMAAQgNAAgIAJQgIAJgCAPIA6AAIAAAAg");
	this.shape_81.setTransform(651.35,366.725);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#285C9B").s().p("AgIBNIAAhwIAQAAIAABwgAgGg4QgDgDAAgGQAAgFADgDQADgDADAAQAEAAADADQADADAAAFQAAAGgDADQgDADgEgBQgDABgDgDg");
	this.shape_82.setTransform(642.75,364.65);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#285C9B").s().p("AgfA5IAAhvIAOAAIACAVIABAAQAGgLAIgGQAJgGAKAAQAIAAAFABIgCAQIgMgCQgOAAgIALQgKALAAARIAAA7g");
	this.shape_83.setTransform(636.575,366.625);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#285C9B").s().p("AgaAzQgMgHgGgNQgHgNAAgSQAAgbAOgPQAOgPAXAAQAYAAAOAQQANAPAAAaQAAAbgNAQQgOAPgYAAQgOAAgMgHgAgYggQgJALAAAVQAAAVAJAMQAIALAQAAQAQAAAKgLQAIgLAAgWQAAgUgIgMQgKgLgQAAQgQAAgIALg");
	this.shape_84.setTransform(625.25,366.725);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#285C9B").s().p("AgHBQIAAifIAQAAIAACfg");
	this.shape_85.setTransform(616.25,364.375);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#285C9B").s().p("AgjAxQgJgIAAgQQAAghA1gCIATgBIAAgHQAAgNgFgGQgGgGgMAAQgOAAgRAJIgFgOQAIgEAKgDQAKgCAJAAQAUAAAJAIQAKAKAAATIAABMIgNAAIgDgQIgBAAQgIAKgJAFQgIADgLAAQgRAAgKgJgAALACQgTAAgJAGQgJAFAAAMQAAAJAFAFQAGAFAKAAQAPAAAJgJQAJgIAAgQIAAgKg");
	this.shape_86.setTransform(607.425,366.75);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#285C9B").s().p("AgaArQgNgPgBgbQAAgbAOgQQANgPAZAAQAHAAAJACQAIABAEADIgEAOIgNgEIgMgBQghAAAAArQAAAUAIALQAJALAPAAQAOAAAPgGIAAAPQgLAGgRAAQgYAAgNgPg");
	this.shape_87.setTransform(597.25,366.725);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#285C9B").s().p("AgRBQIAAhiIgUAAIAAgIIAUgGIAAgGQAAgpAjAAQAIAAAMADIgDAOQgLgDgGAAQgKAAgFAGQgEAGABAPIAAAHIAbAAIAAANIgbAAIAABig");
	this.shape_88.setTransform(948,333.725);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#285C9B").s().p("AgaAzQgMgHgGgNQgHgNAAgSQAAgbAOgPQAOgPAXAAQAYAAAOAQQANAPAAAaQAAAbgNAQQgOAPgYAAQgOAAgMgHgAgYggQgJALAAAVQAAAVAJAMQAIALAQAAQAQAAAKgLQAIgLAAgWQAAgUgIgMQgKgLgQAAQgQAAgIALg");
	this.shape_89.setTransform(937.55,336.125);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#285C9B").s().p("AgQAkIAAhCIgQAAIAAgIIAQgHIAHgYIAJAAIAAAaIAhAAIAAANIghAAIAABBQAAAKAFAGQAFAFAIAAIAJAAIAGgCIAAANIgIACIgJABQggAAAAgig");
	this.shape_90.setTransform(921.975,334.925);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#285C9B").s().p("AAeA5IAAhHQAAgOgHgHQgFgHgOAAQgRAAgIAKQgIAJAAAWIAAA6IgRAAIAAhvIAOAAIACAPIACAAQAEgIAKgFQAJgEALAAQAVAAAKAKQAKAJAAAWIAABIg");
	this.shape_91.setTransform(912,336.025);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#285C9B").s().p("AgkAwQgKgKAAgWIAAhIIARAAIAABIQAAAOAGAGQAHAHANAAQARAAAHgKQAJgJAAgWIAAg6IARAAIAABvIgOAAIgDgPIgBAAQgFAIgJAFQgKAEgLAAQgUAAgKgJg");
	this.shape_92.setTransform(899.05,336.225);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#285C9B").s().p("AgaAzQgMgHgGgNQgHgNAAgSQAAgbAOgPQAOgPAXAAQAYAAANAQQAPAPAAAaQAAAbgPAQQgNAPgYAAQgOAAgMgHgAgZggQgIALAAAVQAAAVAIAMQAJALAQAAQARAAAJgLQAIgLAAgWQAAgUgIgMQgKgLgQAAQgQAAgJALg");
	this.shape_93.setTransform(886.35,336.125);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#285C9B").s().p("AA/A5IAAhIQAAgNgGgHQgFgHgNAAQgPAAgIAJQgIAKAAASIAAA+IgQAAIAAhIQAAgNgFgHQgGgHgMAAQgQAAgIAKQgHAJAAAWIAAA6IgRAAIAAhvIAOAAIACAPIABAAQAFgIAJgFQAJgEAKAAQAbAAAHATIABAAQAFgJAJgFQAKgFAMAAQATAAAKAKQAJAJAAAWIAABIg");
	this.shape_94.setTransform(870.325,336.025);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#285C9B").s().p("AgjAyQgJgJAAgQQAAghA1gCIATgBIAAgHQAAgNgFgGQgGgGgMAAQgOAAgRAJIgFgOQAIgEAKgDQAKgCAJAAQAUAAAJAIQAKAKAAATIAABMIgNAAIgDgQIgBAAQgIAKgJAFQgIADgLAAQgRAAgKgIgAALACQgTAAgJAGQgJAFAAAMQAAAJAFAFQAGAFAKAAQAPAAAJgJQAJgIAAgQIAAgKg");
	this.shape_95.setTransform(854.325,336.15);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#285C9B").s().p("AggArQgOgPAAgbQgBgaANgQQAOgQAVAAQAWAAAMAOQAMAOAAAWIAAAKIhMAAQABAUAJAKQAKAKAQAAQASAAASgHIAAAPIgSAGQgIABgLAAQgYAAgOgPgAAdgKQAAgQgHgIQgHgJgOAAQgMAAgIAJQgIAJgBAPIA5AAIAAAAg");
	this.shape_96.setTransform(837.6,336.125);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#285C9B").s().p("AAeBQIAAhJQAAgNgHgGQgFgHgOAAQgQAAgJAJQgIAKAAAVIAAA7IgRAAIAAifIARAAIAAAwIgBAPIABAAQAGgIAJgFQAJgEALAAQAUAAALAJQAKAKAAAUIAABKg");
	this.shape_97.setTransform(825.3,333.775);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#285C9B").s().p("AgQAkIAAhCIgQAAIAAgIIAQgHIAHgYIAJAAIAAAaIAhAAIAAANIghAAIAABBQAAAKAFAGQAFAFAIAAIAJAAIAGgCIAAANIgIACIgJABQggAAAAgig");
	this.shape_98.setTransform(815.025,334.925);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#285C9B").s().p("AgiArQgPgPAAgbQAAgbAOgQQANgQAYAAQAWAAANAOQANAOAAAXIAAAMIhKAAQAAARAIAJQAJAJAOAAQAKAAAJgCQAJgCAJgEIAAATQgIAEgJACQgJACgMAAQgZAAgPgQgAAagLQAAgOgGgHQgHgHgLAAQgLAAgHAHQgHAHgBAOIAyAAIAAAAg");
	this.shape_99.setTransform(799.975,336.075);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#285C9B").s().p("AgoA0IAAgVQATAJASAAQAVAAAAgNQAAgEgCgDQgDgDgGgDIgOgHQgUgHgHgHQgHgIAAgMQAAgPAMgIQAMgIATAAQAUAAASAIIgIATQgSgIgNAAQgSAAAAALQAAAFAFAEQAFAEAQAGQAOAFAGAEQAHAEADAGQADAGAAAIQAAARgMAJQgNAJgVAAQgXAAgNgHg");
	this.shape_100.setTransform(788.875,336.075);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#285C9B").s().p("AgmAyQgJgJAAgRQAAgRANgIQANgJAagBIATgBIAAgGQAAgKgFgGQgFgFgLAAQgHAAgIACIgQAGIgHgRQAJgFALgCQALgDAIAAQAWAAALAKQALAJAAAUIAABMIgRAAIgFgQIgBAAQgIAKgIAEQgJAEgMAAQgQAAgKgJgAAKADQgRABgHAFQgIAFAAAKQAAAIAFAEQAEAEAJAAQAMAAAIgHQAIgHAAgOIAAgJg");
	this.shape_101.setTransform(777.275,336.075);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#285C9B").s().p("AgiArQgPgPAAgbQAAgbAOgQQANgQAYAAQAWAAANAOQANAOAAAXIAAAMIhKAAQAAARAIAJQAJAJAOAAQAKAAAJgCQAJgCAJgEIAAATQgIAEgJACQgJACgMAAQgZAAgPgQgAAagLQAAgOgGgHQgHgHgLAAQgLAAgHAHQgHAHgBAOIAyAAIAAAAg");
	this.shape_102.setTransform(765.575,336.075);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#285C9B").s().p("AgiA6IAAhxIATAAIAEAUIABAAQAFgKAJgGQAJgGAKAAIAMABIgCAXIgLgBQgOAAgIAJQgJAJAAAPIAAA7g");
	this.shape_103.setTransform(755.625,335.975);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#285C9B").s().p("AgdAsQgNgPAAgcQAAgcAOgPQAOgQAZAAQASAAAOAHIgHATQgPgGgKAAQgcAAAAAmQAAAUAHAJQAHAKANAAQAQAAAPgIIAAAVQgHAEgHABQgHACgLAAQgZAAgNgPg");
	this.shape_104.setTransform(745.475,336.075);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#285C9B").s().p("AgiArQgPgPAAgbQAAgbAOgQQANgQAYAAQAWAAANAOQANAOAAAXIAAAMIhKAAQAAARAIAJQAJAJAOAAQAKAAAJgCQAJgCAJgEIAAATQgIAEgJACQgJACgMAAQgZAAgPgQgAAagLQAAgOgGgHQgHgHgLAAQgLAAgHAHQgHAHgBAOIAyAAIAAAAg");
	this.shape_105.setTransform(734.125,336.075);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#285C9B").s().p("AgnBBQgLgPgBgcQABgbALgPQAMgQAWAAQAVAAAMARIABAAIgBgTIAAgqIAYAAIAACfIgUAAIgEgPIAAAAQgMARgWAAQgVAAgMgQgAgTgGQgGAKAAATQAAATAGAJQAHAKAMAAQAPAAAGgIQAIgIgBgTIAAgEQABgVgIgIQgGgJgPAAQgMAAgHAKg");
	this.shape_106.setTransform(721.2,333.875);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#285C9B").s().p("AgbAzQgLgHgHgNQgFgNAAgSQAAgbANgPQAOgPAXAAQAYAAAOAQQAOAPgBAaQABAbgOAQQgOAPgYAAQgPAAgMgHgAgYggQgJALAAAVQAAAVAJAMQAIALAQAAQARAAAIgLQAJgLAAgWQAAgUgJgMQgIgLgRAAQgQAAgIALg");
	this.shape_107.setTransform(703.25,336.125);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#285C9B").s().p("AgQAkIAAhCIgQAAIAAgIIAQgHIAHgYIAJAAIAAAaIAhAAIAAANIghAAIAABBQAAAKAFAGQAFAFAIAAIAJAAIAGgCIAAANIgIACIgJABQggAAAAgig");
	this.shape_108.setTransform(693.125,334.925);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#285C9B").s().p("AgnAzIAAgQQAJAFAJACQAJACAJAAQAMAAAHgEQAHgEAAgJQAAgHgFgEQgGgFgQgGQgPgFgHgEQgGgFgEgFQgDgGAAgIQAAgNALgIQALgIATAAQASAAARAHIgGAOQgRgHgNAAQgLAAgHAEQgGAEAAAGQAAAFADADQACADAFADIATAIQAUAHAHAHQAHAHAAAMQAAAPgMAJQgMAIgUAAQgWAAgNgHg");
	this.shape_109.setTransform(679.125,336.125);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#285C9B").s().p("AgyBPIAAgNQAGABAHABQARgBAIgTIAGgQIguhxIATAAIAYBAQAIAVABALIABAAIAGgRIAchPIASAAIgwB/QgHAUgJAHQgKAIgOAAQgIAAgHgCg");
	this.shape_110.setTransform(668.775,338.65);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#285C9B").s().p("AgjAyQgJgJAAgQQAAghA1gCIATgBIAAgHQAAgNgFgGQgGgGgMAAQgOAAgRAJIgFgOQAIgEAKgDQAKgCAJAAQAUAAAJAIQAKAKAAATIAABMIgNAAIgDgQIgBAAQgIAKgJAFQgIADgLAAQgRAAgKgIgAALACQgTAAgJAGQgJAFAAAMQAAAJAFAFQAGAFAKAAQAPAAAJgJQAJgIAAgQIAAgKg");
	this.shape_111.setTransform(657.325,336.15);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#285C9B").s().p("AAcA4IgVhBIgHgbIAAAAIgHAcIgVBAIgUAAIgehvIARAAIARA/IAHAeIAAAAIAEgPIAEgPIAVg/IARAAIAVA/QAFASACAMIABAAIACgLIAWhSIARAAIgfBvg");
	this.shape_112.setTransform(643.725,336.125);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#285C9B").s().p("AgkBCQgMgPAAgcQAAgbAMgPQAMgQAWAAQAWAAAMARIABAAIAAgIIgBgIIAAguIARAAIAACfIgNAAIgDgPIgBAAQgLARgXAAQgWAAgMgPgAgXgJQgIALAAAVQAAAWAIALQAIALAPAAQARAAAIgKQAHgJAAgWIAAgDQAAgXgIgKQgIgKgQAAQgPAAgIALg");
	this.shape_113.setTransform(623.375,333.875);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#285C9B").s().p("AAeA5IAAhHQAAgOgGgHQgHgHgNAAQgRAAgHAKQgJAJAAAWIAAA6IgRAAIAAhvIAOAAIADAPIABAAQAEgIAKgFQAKgEAKAAQAVAAAJAKQALAJAAAWIAABIg");
	this.shape_114.setTransform(610.9,336.025);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#285C9B").s().p("AgHBNIAAhwIAQAAIAABwgAgGg4QgDgDAAgGQAAgFADgDQADgDADAAQAEAAADADQADADAAAFQAAAGgDADQgDADgEgBQgDABgDgDg");
	this.shape_115.setTransform(601.75,334.05);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#285C9B").s().p("AgSBQIAAhiIgUAAIAAgIIAUgGIAAgGQAAgpAkAAQAIAAANADIgFAOQgKgDgHAAQgJAAgFAGQgDAGgBAPIAAAHIAcAAIAAANIgcAAIAABig");
	this.shape_116.setTransform(596.15,333.725);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#285C9B").s().p("AgkBCQgMgPAAgcQAAgbAMgPQAMgQAWAAQAWAAAMARIABAAIAAgIIgBgIIAAguIARAAIAACfIgNAAIgDgPIgBAAQgLARgXAAQgWAAgMgPgAgXgJQgIALAAAVQAAAWAIALQAIALAPAAQARAAAIgKQAHgJAAgWIAAgDQAAgXgIgKQgIgKgQAAQgPAAgIALg");
	this.shape_117.setTransform(919.125,303.275);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#285C9B").s().p("AAeA5IAAhHQAAgOgHgHQgFgHgOAAQgQAAgJAKQgIAJAAAWIAAA6IgRAAIAAhvIAOAAIACAPIABAAQAFgIAKgFQAKgEAKAAQAVAAAJAKQALAJAAAWIAABIg");
	this.shape_118.setTransform(906.65,305.425);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#285C9B").s().p("AgjAxQgJgIAAgQQAAghA1gCIATgBIAAgHQAAgNgFgGQgGgGgMAAQgOAAgRAJIgFgOQAIgEAKgDQAKgCAJAAQAUAAAJAJQAKAJAAATIAABMIgNAAIgDgQIgBAAQgIAKgJAFQgIADgLAAQgRAAgKgJgAALACQgTAAgJAGQgJAFAAAMQAAAJAFAFQAGAFAKAAQAPAAAJgJQAJgIAAgQIAAgKg");
	this.shape_119.setTransform(893.975,305.55);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#285C9B").s().p("AgoBKQgMgIAAgPQAAgKAHgHQAGgIAMgDQgEgCgDgEQgDgEAAgGQAAgFADgEQAEgFAGgEQgIgDgGgKQgFgIAAgLQAAgTALgKQALgKAVAAQAHAAAHACIAnAAIAAALIgVADQADADADAHQABAFAAAHQABARgLAJQgMALgTgBIgJgBQgLAHAAAHQAAAFAEACQADACAKAAIATAAQASAAAKAIQAKAHgBAPQAAATgOAJQgPAKgcAAQgWAAgMgIgAgdAjQgHAGABAKQgBAJAIAEQAIAGAOAAQAUgBALgGQAKgHAAgLQAAgIgFgEQgGgEgPAAIgUAAQgMAAgGAGgAgUg/QgHAHABAMQAAANAGAFQAHAHAMAAQAYAAAAgZQAAgZgZAAQgLAAgHAGg");
	this.shape_120.setTransform(877.25,307.95);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#285C9B").s().p("AAeA5IAAhHQAAgOgHgHQgFgHgOAAQgRAAgIAKQgIAJAAAWIAAA6IgRAAIAAhvIAOAAIACAPIACAAQAEgIAKgFQAJgEALAAQAVAAAKAKQAKAJAAAWIAABIg");
	this.shape_121.setTransform(865.2,305.425);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#285C9B").s().p("AgIBNIAAhwIAQAAIAABwgAgGg4QgDgDAAgGQAAgFADgDQADgDADAAQAEAAADADQADADAAAFQAAAGgDADQgDACgEAAQgDAAgDgCg");
	this.shape_122.setTransform(856.05,303.45);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#285C9B").s().p("AgQAkIAAhCIgQAAIAAgIIAQgHIAHgYIAJAAIAAAaIAhAAIAAANIghAAIAABBQAAAKAFAGQAFAFAIAAIAJAAIAGgCIAAANIgIACIgJABQggAAAAgig");
	this.shape_123.setTransform(849.625,304.325);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#285C9B").s().p("AgjAxQgJgIAAgQQAAghA1gCIATgBIAAgHQAAgNgFgGQgGgGgMAAQgOAAgRAJIgFgOQAIgEAKgDQAKgCAJAAQAUAAAJAJQAKAJAAATIAABMIgNAAIgDgQIgBAAQgIAKgJAFQgIADgLAAQgRAAgKgJgAALACQgTAAgJAGQgJAFAAAMQAAAJAFAFQAGAFAKAAQAPAAAJgJQAJgIAAgQIAAgKg");
	this.shape_124.setTransform(839.825,305.55);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#285C9B").s().p("AggArQgPgPAAgbQAAgaAOgQQANgQAWAAQAUAAANAOQANAOAAAWIAAAKIhNAAQAAAUAKAKQAKAKAPAAQATAAARgHIAAAPIgRAGQgHABgMAAQgYAAgOgPgAAdgKQAAgQgHgIQgHgJgNAAQgNAAgIAJQgIAJgCAPIA6AAIAAAAg");
	this.shape_125.setTransform(828.55,305.525);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#285C9B").s().p("AggArQgPgPAAgbQABgaANgQQANgQAWAAQAUAAANAOQANAOAAAWIAAAKIhNAAQABAUAJAKQAJAKAQAAQATAAARgHIAAAPIgRAGQgHABgMAAQgYAAgOgPgAAdgKQAAgQgHgIQgHgJgNAAQgNAAgIAJQgIAJgCAPIA6AAIAAAAg");
	this.shape_126.setTransform(811.35,305.525);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#285C9B").s().p("AgfA5IAAhvIAOAAIACAVIABAAQAGgLAIgGQAJgGAKAAQAIAAAFABIgCAQIgMgCQgOAAgIALQgKALAAARIAAA7g");
	this.shape_127.setTransform(801.875,305.425);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#285C9B").s().p("AgOAaQAHgdADgWIASAAIABADIgHAWIgKAag");
	this.shape_128.setTransform(795.075,298.725);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#285C9B").s().p("AgkAwQgKgKAAgWIAAhIIARAAIAABIQAAAOAHAGQAFAHAOAAQARAAAIgKQAIgJAAgWIAAg6IARAAIAABvIgOAAIgCgPIgBAAQgGAIgJAFQgKAEgKAAQgVAAgKgJg");
	this.shape_129.setTransform(786.85,305.625);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#285C9B").s().p("AgbAzQgLgHgHgNQgFgNgBgSQAAgbAOgPQAOgPAXAAQAYAAANAQQAOAPABAaQgBAbgOAQQgNAPgYAAQgOAAgNgHgAgZggQgIALAAAVQAAAVAIAMQAJALAQAAQAQAAAKgLQAIgLAAgWQAAgUgIgMQgKgLgQAAQgQAAgJALg");
	this.shape_130.setTransform(774.15,305.525);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#285C9B").s().p("AgyBPIAAgNQAGABAHABQARgBAIgTIAGgQIguhxIATAAIAYBAQAIAVABALIABAAIAGgRIAchPIASAAIgwB/QgHAUgJAHQgKAIgOAAQgIAAgHgCg");
	this.shape_131.setTransform(762.525,308.05);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#285C9B").s().p("AgkBCQgMgPAAgcQAAgbAMgPQAMgQAWAAQAWAAAMARIABAAIAAgIIgBgIIAAguIARAAIAACfIgNAAIgDgPIgBAAQgLARgXAAQgWAAgMgPgAgXgJQgIALAAAVQAAAWAIALQAIALAPAAQARAAAIgKQAHgJAAgWIAAgDQAAgXgIgKQgIgKgQAAQgPAAgIALg");
	this.shape_132.setTransform(745.075,303.275);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#285C9B").s().p("AgbAzQgLgHgHgNQgFgNgBgSQAAgbAOgPQAOgPAXAAQAYAAANAQQAOAPABAaQgBAbgOAQQgNAPgYAAQgOAAgNgHgAgZggQgIALAAAVQAAAVAIAMQAJALAQAAQAQAAAKgLQAIgLAAgWQAAgUgIgMQgKgLgQAAQgQAAgJALg");
	this.shape_133.setTransform(732.65,305.525);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#285C9B").s().p("AgbAzQgLgHgHgNQgFgNAAgSQAAgbANgPQAOgPAXAAQAYAAAOAQQAOAPgBAaQABAbgOAQQgOAPgYAAQgPAAgMgHgAgYggQgJALAAAVQAAAVAJAMQAIALAQAAQARAAAIgLQAJgLAAgWQAAgUgJgMQgIgLgRAAQgQAAgIALg");
	this.shape_134.setTransform(720,305.525);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#285C9B").s().p("AgSBQIAAhiIgTAAIAAgIIATgGIAAgGQAAgpAkAAQAJAAALADIgEAOQgJgDgIAAQgJAAgFAGQgDAGgBAPIAAAHIAcAAIAAANIgcAAIAABig");
	this.shape_135.setTransform(710.7,303.125);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#285C9B").s().p("AggArQgOgPAAgbQgBgaANgQQAOgQAVAAQAWAAAMAOQAMAOAAAWIAAAKIhMAAQABAUAJAKQAJAKARAAQASAAASgHIAAAPIgRAGQgJABgLAAQgYAAgOgPgAAdgKQAAgQgHgIQgIgJgNAAQgMAAgIAJQgIAJgBAPIA5AAIAAAAg");
	this.shape_136.setTransform(695.3,305.525);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#285C9B").s().p("AAeBQIAAhJQAAgNgHgGQgFgHgOAAQgQAAgJAJQgIAKAAAVIAAA7IgRAAIAAifIARAAIAAAwIgBAPIABAAQAFgIAKgFQAJgEALAAQAVAAAJAJQALAKAAAUIAABKg");
	this.shape_137.setTransform(683,303.175);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#285C9B").s().p("AgQAkIAAhCIgQAAIAAgIIAQgHIAHgYIAJAAIAAAaIAhAAIAAANIghAAIAABBQAAAKAFAGQAFAFAIAAIAJAAIAGgCIAAANIgIACIgJABQggAAAAgig");
	this.shape_138.setTransform(672.725,304.325);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#285C9B").s().p("AgQAkIAAhCIgQAAIAAgIIAQgHIAHgYIAJAAIAAAaIAhAAIAAANIghAAIAABBQAAAKAFAGQAFAFAIAAIAJAAIAGgCIAAANIgIACIgJABQggAAAAgig");
	this.shape_139.setTransform(659.875,304.325);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#285C9B").s().p("AgjAxQgJgIAAgQQAAghA1gCIATgBIAAgHQAAgNgFgGQgGgGgMAAQgOAAgRAJIgFgOQAIgEAKgDQAKgCAJAAQAUAAAJAJQAKAJAAATIAABMIgNAAIgDgQIgBAAQgIAKgJAFQgIADgLAAQgRAAgKgJgAALACQgTAAgJAGQgJAFAAAMQAAAJAFAFQAGAFAKAAQAPAAAJgJQAJgIAAgQIAAgKg");
	this.shape_140.setTransform(650.075,305.55);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#285C9B").s().p("AAZBQIgog1IgMALIAAAqIgRAAIAAifIARAAIAABUIgBARIABAAIANgQIAjgmIAVAAIgsAvIAvBBg");
	this.shape_141.setTransform(634.45,303.175);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#285C9B").s().p("AgaAzQgMgHgGgNQgHgNAAgSQAAgbAOgPQAOgPAXAAQAYAAANAQQAPAPAAAaQAAAbgPAQQgNAPgYAAQgOAAgMgHgAgZggQgIALAAAVQAAAVAIAMQAJALAQAAQARAAAJgLQAIgLAAgWQAAgUgIgMQgKgLgQAAQgQAAgJALg");
	this.shape_142.setTransform(621.85,305.525);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#285C9B").s().p("AgbAzQgLgHgHgNQgFgNAAgSQAAgbANgPQAOgPAXAAQAYAAAOAQQAOAPgBAaQABAbgOAQQgOAPgYAAQgPAAgMgHgAgYggQgJALAAAVQAAAVAJAMQAIALAQAAQARAAAIgLQAJgLAAgWQAAgUgJgMQgIgLgRAAQgQAAgIALg");
	this.shape_143.setTransform(609.2,305.525);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#285C9B").s().p("AgpBLIAAiVIASAAIAACFIBBAAIAAAQg");
	this.shape_144.setTransform(598.225,303.65);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#285C9B").s().p("AgmAwQgQgRAAgeQAAgdAPgSQAPgRAaAAQAYAAAOAPQAPAPAAAaIAAANIhSAAQAAASAKAKQAJAKAQAAQALAAAKgCQAJgDALgEIAAAVQgKAFgKACQgJABgOAAQgcAAgQgQgAAdgMQAAgPgIgIQgHgIgMAAQgMAAgHAIQgIAIgBAPIA3AAIAAAAg");
	this.shape_145.setTransform(843.85,255.375);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#285C9B").s().p("AAZBXIgng2IgPAMIAAAqIgaAAIAAitIAaAAIAABVIgBAXIABAAIAPgTIAkgnIAeAAIgxA0IA1BHg");
	this.shape_146.setTransform(831.525,252.875);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#285C9B").s().p("AgpA3QgLgKAAgSQAAgUAPgIQAOgKAcgBIAWgBIAAgGQAAgMgGgGQgGgGgLAAQgJAAgJADIgQAGIgJgSQAKgGAMgCQAMgDAKAAQAYAAAMAKQAMAKAAAXIAABSIgTAAIgFgRIgBAAQgJALgJAEQgKAEgNAAQgSAAgKgJgAAKAEQgRAAgJAGQgIAFAAAMQAAAIAFAFQAFAEAKAAQANAAAJgIQAIgIAAgOIAAgLg");
	this.shape_147.setTransform(817.025,255.375);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#285C9B").s().p("AgWAmIAAhCIgRAAIAAgMIASgKIAJgaIAQAAIAAAcIAjAAIAAAUIgjAAIAABCQgBAJAFAFQAFAEAIAAQAJAAAKgDIAAAUIgMADIgNABQglAAAAgng");
	this.shape_148.setTransform(806.2,254.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#285C9B").s().p("AAcA/IAAhLQAAgOgGgIQgFgHgNAAQgPAAgIAKQgIAKAAAWIAAA+IgaAAIAAh7IAUAAIADAQIACAAQAFgJALgEQALgFALAAQAtAAAAAtIAABQg");
	this.shape_149.setTransform(794.55,255.275);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#285C9B").s().p("AgMBWIAAh7IAZAAIAAB7gAgKg7QgEgEAAgHQAAgHAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAHQAAAHgEAEQgEADgHAAQgGAAgEgDg");
	this.shape_150.setTransform(784.025,253);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#285C9B").s().p("AgmAwQgQgRAAgeQAAgdAPgSQAPgRAaAAQAYAAAOAPQAPAPAAAaIAAANIhSAAQAAASAKAKQAJAKAQAAQALAAAKgCQAJgDAKgEIAAAVQgJAFgKACQgJABgOAAQgbAAgRgQgAAdgMQAAgPgIgIQgHgIgMAAQgMAAgHAIQgIAIgBAPIA3AAIAAAAg");
	this.shape_151.setTransform(768.25,255.375);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#285C9B").s().p("AgMBWIAAh7IAZAAIAAB7gAgKg7QgEgEAAgHQAAgHAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAHQAAAHgEAEQgEADgHAAQgGAAgEgDg");
	this.shape_152.setTransform(758.425,253);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#285C9B").s().p("AglA/IAAh7IAUAAIAEAWIACAAQAGgLAIgHQAKgGAMAAIANABIgCAZQgGgCgGAAQgQAAgJAKQgJALAAAQIAABAg");
	this.shape_153.setTransform(751,255.275);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#285C9B").s().p("AgeA5QgNgIgIgPQgHgPAAgTQAAgdAQgRQAPgRAbAAQAbAAAQARQAQARAAAdQAAAegQARQgPARgcAAQgRAAgNgHgAgXgfQgIALAAAUQAAArAfAAQAgAAAAgrQAAgqggAAQgQAAgHALg");
	this.shape_154.setTransform(738.325,255.375);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#285C9B").s().p("AgMBXIAAitIAZAAIAACtg");
	this.shape_155.setTransform(728.125,252.875);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#285C9B").s().p("AgpA3QgLgKAAgSQAAgUAPgIQAOgKAcgBIAWgBIAAgGQAAgMgGgGQgGgGgLAAQgJAAgJADIgQAGIgJgSQAKgGAMgCQAMgDAKAAQAYAAAMAKQAMAKAAAXIAABSIgTAAIgFgRIgBAAQgJALgJAEQgKAEgNAAQgSAAgKgJgAAKAEQgRAAgJAGQgIAFAAAMQAAAIAFAFQAFAEAKAAQANAAAJgIQAIgIAAgOIAAgLg");
	this.shape_156.setTransform(717.875,255.375);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#285C9B").s().p("AggAwQgPgQAAgfQAAgfAQgQQAPgRAcAAQAUAAAQAHIgJAVQgQgGgLAAQggAAAAAqQABAUAHALQAJAKAOAAQASAAAQgIIAAAXQgIAEgHACQgJABgLAAQgbAAgPgQg");
	this.shape_157.setTransform(706.15,255.375);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#285C9B").s().p("AgmAwQgQgRAAgeQAAgdAPgSQAPgRAaAAQAYAAAOAPQAPAPAAAaIAAANIhSAAQAAASAKAKQAJAKAQAAQALAAAKgCQAJgDAKgEIAAAVQgJAFgKACQgJABgOAAQgbAAgRgQgAAdgMQgBgPgHgIQgHgIgMAAQgMAAgHAIQgIAIgBAPIA3AAIAAAAg");
	this.shape_158.setTransform(687.7,255.375);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#285C9B").s().p("AgtA5IAAgXQAWAKATAAQAYAAAAgOQAAgFgDgDQgDgDgGgEIgQgHQgWgIgHgIQgIgIAAgOQAAgQANgIQANgJAVAAQAWAAAUAJIgJAUQgUgJgOAAQgUAAAAAMQAAAGAGAEQAFAEASAHQAPAGAHAEQAHAFADAGQAEAHAAAJQAAASgOAKQgNAJgYAAQgYAAgQgHg");
	this.shape_159.setTransform(675.575,255.375);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#285C9B").s().p("AgpA3QgLgKAAgSQAAgUAPgIQAOgKAcgBIAWgBIAAgGQAAgMgGgGQgGgGgLAAQgJAAgJADIgQAGIgJgSQAKgGAMgCQAMgDAKAAQAYAAAMAKQAMAKAAAXIAABSIgTAAIgFgRIgBAAQgJALgJAEQgKAEgNAAQgSAAgKgJgAAKAEQgRAAgJAGQgIAFAAAMQAAAIAFAFQAFAEAKAAQANAAAJgIQAIgIAAgOIAAgLg");
	this.shape_160.setTransform(662.875,255.375);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#285C9B").s().p("AgmAwQgQgRAAgeQAAgdAPgSQAPgRAaAAQAYAAAOAPQAPAPAAAaIAAANIhSAAQAAASAKAKQAJAKAQAAQALAAAKgCQAJgDAKgEIAAAVQgJAFgKACQgJABgOAAQgbAAgRgQgAAdgMQAAgPgIgIQgGgIgNAAQgMAAgHAIQgIAIgBAPIA3AAIAAAAg");
	this.shape_161.setTransform(650,255.375);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#285C9B").s().p("AglA/IAAh7IAUAAIAEAWIACAAQAFgLAKgHQAKgGALAAIANABIgDAZQgFgCgGAAQgQAAgJAKQgJALAAAQIAABAg");
	this.shape_162.setTransform(639.15,255.275);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#285C9B").s().p("AggAwQgPgQAAgfQAAgfAQgQQAPgRAcAAQATAAARAHIgIAVQgRgGgLAAQgfAAAAAqQgBAUAJALQAHAKAPAAQASAAAPgIIAAAXQgGAEgIACQgIABgMAAQgbAAgPgQg");
	this.shape_163.setTransform(628,255.375);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#285C9B").s().p("AgmAwQgQgRAAgeQAAgdAPgSQAQgRAZAAQAZAAAOAPQAOAPAAAaIAAANIhSAAQAAASAKAKQAJAKAQAAQALAAAKgCQAJgDALgEIAAAVQgKAFgKACQgKABgNAAQgcAAgQgQgAAdgMQgBgPgGgIQgIgIgMAAQgMAAgIAIQgHAIgCAPIA4AAIAAAAg");
	this.shape_164.setTransform(615.5,255.375);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#285C9B").s().p("AhCBSIAAijIAzAAQAmAAAWAVQAWAVAAAnQAAAngXAWQgWAVgqAAgAgnA8IATAAQA7AAAAg8QAAg7g2AAIgYAAg");
	this.shape_165.setTransform(600.825,253.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#285C9B").s().p("AgIALQgEgEABgHQgBgGAEgDQADgEAFAAQAFAAAEAEQAEADAAAGQAAAHgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_166.setTransform(758.4,409.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#285C9B").s().p("AgwBSIAAiiIAOAAIACAQIABAAQAGgJAJgFQAIgDALAAQAWAAANAPQAMAPgBAbQAAAbgMAQQgMAPgWAAQgKAAgJgEQgKgEgFgJIgBAAIABATIAAAugAgXg5QgIAJAAAVIAAADQgBAYAJAJQAHALARAAQAPAAAHgMQAJgLAAgVQAAgUgJgLQgHgMgPAAQgRAAgHAKg");
	this.shape_167.setTransform(720.9,407.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#285C9B").s().p("AggArQgPgPAAgbQAAgaANgQQAOgQAVAAQAWAAAMAOQANAOAAAWIAAAKIhNAAQAAAUAKAKQAJAKAQAAQATAAASgHIAAAPIgSAGQgIABgLAAQgYAAgOgPgAAdgKQAAgQgHgIQgHgJgOAAQgMAAgIAJQgIAJgCAPIA6AAIAAAAg");
	this.shape_168.setTransform(666.25,404.875);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#285C9B").s().p("AgHBNIAAhwIAQAAIAABwgAgGg4QgDgDAAgGQAAgFADgDQADgDADAAQAEAAADADQADADAAAFQAAAGgDADQgDACgEABQgDgBgDgCg");
	this.shape_169.setTransform(647.65,402.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#285C9B").s().p("AgaArQgOgPAAgbQAAgbAOgQQANgPAYAAQAJAAAIACQAIABAEADIgEAOIgNgEIgMgBQghAAAAArQAAAUAIALQAIALAQAAQAOAAAPgGIAAAPQgMAGgRAAQgXAAgNgPg");
	this.shape_170.setTransform(640.3,404.875);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#285C9B").s().p("AgxBSIAAiiIAPAAIABAQIABAAQAHgJAJgFQAJgEAKAAQAWAAANAQQALAPAAAbQAAAcgMAPQgMAPgWAAQgKAAgJgEQgJgEgHgJIgBAAIABATIAAAugAgYg5QgHAJgBAVIAAADQAAAYAIAJQAJALAQAAQAOAAAIgMQAJgLAAgVQAAgUgJgLQgHgMgPAAQgRAAgIAKg");
	this.shape_171.setTransform(943.5,374.55);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#285C9B").s().p("AgkAwQgKgKAAgWIAAhIIARAAIAABIQAAAOAHAGQAFAHAOAAQAQAAAJgKQAIgJAAgWIAAg6IARAAIAABvIgOAAIgCgPIgCAAQgFAIgJAFQgJAEgMAAQgUAAgKgJg");
	this.shape_172.setTransform(930.3,372.225);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#285C9B").s().p("AgoBKQgMgIAAgPQAAgKAHgHQAGgIAMgDQgEgCgDgEQgDgEAAgGQAAgFADgEQAEgFAGgEQgIgDgFgKQgGgIAAgLQAAgTALgKQALgKAVAAQAHABAHABIAnAAIAAALIgVADQADADACAHQACAFAAAHQAAARgLAJQgLALgSgBIgKgBQgLAHAAAHQAAAFAEACQAEACAJAAIATAAQASAAAKAIQAKAHAAAPQgBATgPAJQgOAKgcAAQgWABgMgJgAgdAjQgGAGgBAKQABAJAHAEQAIAGAOAAQAVgBAKgGQAKgHAAgLQAAgIgGgEQgFgEgQAAIgTAAQgLAAgHAGgAgUg/QgGAHgBAMQAAANAIAFQAGAHAMAAQAYAAAAgZQAAgZgYAAQgMAAgHAGg");
	this.shape_173.setTransform(912.65,374.55);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#285C9B").s().p("AAeA5IAAhHQAAgOgGgHQgHgHgNAAQgRAAgHAKQgJAJAAAWIAAA6IgRAAIAAhvIAOAAIADAPIABAAQAEgIAKgFQAJgEALAAQAUAAAKAKQALAJAAAWIAABIg");
	this.shape_174.setTransform(900.6,372.025);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#285C9B").s().p("AgHBNIAAhwIAPAAIAABwgAgGg4QgDgDAAgGQAAgFADgDQADgDADAAQAEAAADADQADADAAAFQAAAGgDADQgDADgEgBQgDABgDgDg");
	this.shape_175.setTransform(891.45,370.05);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#285C9B").s().p("AAZBQIgog1IgMALIAAAqIgRAAIAAifIARAAIAABUIgBARIABAAIANgQIAjgmIAVAAIgtAvIAwBBg");
	this.shape_176.setTransform(884.1,369.775);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#285C9B").s().p("AggArQgOgPAAgbQgBgaANgQQAOgQAVAAQAWAAAMAOQAMAOAAAWIAAAKIhMAAQABAUAJAKQAKAKAQAAQASAAASgHIAAAPIgSAGQgIABgLAAQgYAAgOgPgAAdgKQAAgQgHgIQgHgJgOAAQgMAAgIAJQgIAJgBAPIA5AAIAAAAg");
	this.shape_177.setTransform(847.5,372.125);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#285C9B").s().p("AgwBSIAAiiIANAAIADAQIABAAQAGgJAJgFQAJgEAKAAQAWAAANAQQALAPABAbQAAAcgNAPQgMAPgWAAQgKAAgJgEQgKgEgFgJIgBAAIABATIAAAugAgXg5QgIAJAAAVIAAADQgBAYAJAJQAHALARAAQAOAAAIgMQAJgLAAgVQAAgUgJgLQgHgMgQAAQgQAAgHAKg");
	this.shape_178.setTransform(830.15,374.55);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#285C9B").s().p("AAgA4IgggtIgeAtIgUAAIApg4Igng3IAUAAIAcArIAdgrIAUAAIgoA3IAqA4g");
	this.shape_179.setTransform(786.75,372.125);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#285C9B").s().p("AgRBQIAAhiIgVAAIAAgIIAVgGIAAgGQgBgpAkAAQAJAAAMADIgFAOQgJgDgHAAQgKAAgFAGQgEAGAAAPIAAAHIAcAAIAAANIgcAAIAABig");
	this.shape_180.setTransform(739.9,369.725);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#285C9B").s().p("AgPAaIAHgaIAEgZIASAAIABADIgHAXIgKAZg");
	this.shape_181.setTransform(727.4,377.875);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#285C9B").s().p("AgHBQIAAifIAQAAIAACfg");
	this.shape_182.setTransform(712.55,369.775);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#285C9B").s().p("AgJA4IgqhvIASAAIAYBCIAJAeIAAAAIAHgXIAbhJIASAAIgqBvg");
	this.shape_183.setTransform(692.9,372.125);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#285C9B").s().p("AgzBQIAAgTQAGACAHAAQARgBAHgUIAEgLIgthwIAaAAIAXBBQAFANABALIABAAIADgNIAahMIAaAAIgwCAQgMAjgfAAQgIAAgIgCg");
	this.shape_184.setTransform(659.525,374.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#285C9B").s().p("AgUAiIAAg8IgQAAIAAgLIARgIIAIgYIAOAAIAAAZIAgAAIAAASIggAAIAAA8QAAAJAEAEQAFAEAHAAQAJAAAIgDIAAASIgKADIgNABQghAAAAgkg");
	this.shape_185.setTransform(649.7,370.925);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#285C9B").s().p("AgLBOIAAhwIAXAAIAABwgAgJg2QgEgEABgGQgBgHAEgDQADgEAGABQAGgBAEAEQAEADAAAHQAAAGgEAEQgEADgGABQgGgBgDgDg");
	this.shape_186.setTransform(642.75,369.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#285C9B").s().p("AgMA5IgrhxIAZAAIAXBBQAGARABAKIAAAAQABgHAGgUIAXhBIAaAAIgrBxg");
	this.shape_187.setTransform(634.225,372.075);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#285C9B").s().p("AgMBOIAAhwIAYAAIAABwgAgJg2QgDgEgBgGQABgHADgDQAEgEAFABQAHgBADAEQAEADgBAHQABAGgEAEQgDADgHABQgFgBgEgDg");
	this.shape_188.setTransform(625.7,369.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#285C9B").s().p("AgUAiIAAg8IgQAAIAAgLIARgIIAIgYIAOAAIAAAZIAgAAIAAASIggAAIAAA8QAAAJAEAEQAFAEAHAAQAJAAAIgDIAAASIgKADIgNABQghAAAAgkg");
	this.shape_189.setTransform(618.55,370.925);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#285C9B").s().p("AgkAwQgKgKAAgWIAAhIIARAAIAABIQAAAOAGAGQAHAHANAAQAQAAAIgKQAJgJAAgWIAAg6IARAAIAABvIgOAAIgDgPIgBAAQgFAIgJAFQgKAEgLAAQgUAAgKgJg");
	this.shape_190.setTransform(881.15,341.625);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#285C9B").s().p("AgqBLQgMgJAAgPQAAgKAGgHQAHgIAMgCQgFgCgDgEQgDgGAAgFQAAgGADgDQAEgFAHgEQgJgDgFgJQgGgIAAgMQAAgSAMgLQALgKAWAAIAJABIAIABIAnAAIAAANIgTAEQADADABAFQACAGAAAGQAAARgMALQgMAJgUABIgKgBQgIAEAAAGQAAAEAEACQADACAKAAIATAAQATgBAJAJQAKAHAAAQQAAATgQALQgQAKgdAAQgXAAgMgIgAgbAlQgGAFAAAIQAAAIAHAEQAHAEANAAQATABAJgHQAKgFAAgJQAAgIgFgCQgGgEgOAAIgRAAQgLAAgGAFgAgRg8QgGAFAAAMQAAALAGAFQAFAGALAAQAUAAAAgWQAAgMgFgFQgGgHgJAAQgLAAgFAHg");
	this.shape_191.setTransform(840.225,343.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#285C9B").s().p("AAaA6IAAhFQAAgNgGgHQgFgGgLAAQgPAAgGAJQgIAJAAAUIAAA5IgYAAIAAhxIATAAIAEAPIABAAQAFgIAKgEQAIgFALAAQApAAAAAqIAABJg");
	this.shape_192.setTransform(827.85,341.375);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#285C9B").s().p("AgLBOIAAhwIAXAAIAABwgAgJg2QgEgEABgGQgBgHAEgDQADgEAGABQAGgBAEAEQAEADAAAHQAAAGgEAEQgEADgGABQgGgBgDgDg");
	this.shape_193.setTransform(818.25,339.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#285C9B").s().p("AAaA6IAAhFQAAgNgFgHQgGgGgLAAQgOAAgIAJQgGAJgBAUIAAA5IgYAAIAAhxIATAAIADAPIABAAQAGgIAKgEQAJgFAKAAQApAAAAAqIAABJg");
	this.shape_194.setTransform(754.9,341.375);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#285C9B").s().p("AgMBOIAAhwIAYAAIAABwgAgJg2QgDgEgBgGQABgHADgDQAEgEAFABQAHgBADAEQADADAAAHQAAAGgDAEQgDADgHABQgFgBgEgDg");
	this.shape_195.setTransform(745.3,339.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#285C9B").s().p("AgQBNQgKgEgFgJIgBAAIgFAPIgLAAIAAifIARAAIAAAnIgBAXIABAAQALgQAXAAQAWAAAMAPQAMAPABAaQAAAcgNAQQgMAPgWAAQgKAAgJgEgAgXgKQgIAKAAAWQAAAYAIAKQAIALAQAAQAQAAAHgMQAIgLAAgWQAAgWgIgJQgIgLgQAAQgQAAgHAKg");
	this.shape_196.setTransform(720.25,339.275);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#285C9B").s().p("AggArQgPgPAAgbQAAgaANgQQAOgQAVAAQAWAAAMAOQANAOAAAWIAAAKIhNAAQAAAUAKAKQAJAKAQAAQATAAASgHIAAAPIgSAGQgIABgLAAQgYAAgOgPgAAdgKQAAgQgHgIQgHgJgOAAQgMAAgIAJQgIAJgCAPIA6AAIAAAAg");
	this.shape_197.setTransform(702.25,341.525);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#285C9B").s().p("AgIBNIAAhwIARAAIAABwgAgGg4QgDgDAAgGQAAgFADgDQADgDADAAQAFAAACADQADADAAAFQAAAGgDADQgCACgFAAQgDAAgDgCg");
	this.shape_198.setTransform(639.85,339.45);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#285C9B").s().p("AAeBQIAAhJQAAgNgGgGQgGgHgOAAQgQAAgIAJQgJAKAAAVIAAA7IgRAAIAAifIARAAIAAAwIgBAPIABAAQAFgIAKgFQAJgEALAAQAVAAAJAJQALAKAAAUIAABKg");
	this.shape_199.setTransform(610.1,339.175);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#285C9B").s().p("AgHBLIAAiFIgwAAIAAgQIBvAAIAAAQIgvAAIAACFg");
	this.shape_200.setTransform(597.8,339.65);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#285C9B").s().p("AgWAmIAAhCIgRAAIAAgMIASgKIAJgaIAPAAIAAAcIAjAAIAAAUIgjAAIAABCQAAAJAFAFQAFAEAHAAQAKAAAKgDIAAAUIgMADIgNABQglAAAAgng");
	this.shape_201.setTransform(909.4,290.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#285C9B").s().p("AAcA/IAAhLQAAgOgFgIQgGgHgNAAQgPAAgJAKQgHAKAAAWIAAA+IgbAAIAAh7IAVAAIADAQIACAAQAFgJALgEQAKgFAMAAQAsAAABAtIAABQg");
	this.shape_202.setTransform(897.75,291.275);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#285C9B").s().p("AgmAwQgQgRAAgeQAAgdAPgSQAPgRAaAAQAZAAANAPQAPAPAAAaIAAANIhSAAQAAASAKAKQAJAKAQAAQALAAAKgCQAJgDALgEIAAAVQgKAFgKACQgKABgNAAQgcAAgQgQgAAdgMQgBgPgGgIQgIgIgMAAQgMAAgIAIQgHAIgCAPIA4AAIAAAAg");
	this.shape_203.setTransform(883.8,291.375);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#285C9B").s().p("ABBA/IAAhLQAAgPgGgHQgFgHgMAAQgOAAgIAKQgHAKAAATIAABBIgaAAIAAhLQAAgPgFgHQgFgHgLAAQgQAAgHAKQgHAKAAAWIAAA+IgbAAIAAh7IAVAAIADAQIACAAQAGgJAJgEQAKgFALAAQAdAAAIATIADAAQAFgJAKgFQAKgFANAAQAWAAALALQAJALABAXIAABQg");
	this.shape_204.setTransform(866.25,291.275);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#285C9B").s().p("AglA/IAAh7IAVAAIADAWIABAAQAGgLAJgHQAKgGAMAAIANABIgCAZQgGgCgHAAQgPAAgJAKQgKALABAQIAABAg");
	this.shape_205.setTransform(837.75,291.275);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#285C9B").s().p("AgqA0QgMgLAAgXIAAhQIAbAAIAABMQAAANAGAIQAGAHAMAAQAQAAAIgKQAHgKAAgXIAAg9IAbAAIAAB7IgVAAIgDgRIgCAAQgFAKgKAFQgLAEgMAAQgWAAgLgLg");
	this.shape_206.setTransform(818.325,291.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#285C9B").s().p("AAeBbIAAg1IABgKIAAgJIgBAAQgMATgYAAQgYAAgMgRQgNgRgBgdQABgeANgSQANgRAXAAQALAAAJAEQAJAEAIALIABAAIACgQIAXAAIAACygAgVg5QgHALgBAVQABApAcABQAQAAAIgKQAHgJAAgTIAAgEQAAgXgHgLQgIgKgQABQgOAAgHALg");
	this.shape_207.setTransform(803.6,294.05);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#285C9B").s().p("AgmAwQgQgRAAgeQAAgdAPgSQAPgRAaAAQAZAAANAPQAPAPAAAaIAAANIhSAAQAAASAKAKQAJAKAQAAQALAAAKgCQAJgDALgEIAAAVQgKAFgKACQgJABgOAAQgcAAgQgQgAAdgMQgBgPgGgIQgIgIgMAAQgMAAgIAIQgHAIgCAPIA4AAIAAAAg");
	this.shape_208.setTransform(790.2,291.375);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#285C9B").s().p("AglA/IAAh7IAUAAIAEAWIACAAQAGgLAIgHQAKgGAMAAIANABIgCAZQgGgCgGAAQgQAAgJAKQgKALABAQIAABAg");
	this.shape_209.setTransform(779.35,291.275);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#285C9B").s().p("Ag4BYIAAgVQAGABAIAAQATAAAIgWIAEgMIgyh7IAdAAIAZBGQAGAQABAMIABAAIAEgOIAchUIAdAAIg2CMQgNAngiAAQgJAAgIgCg");
	this.shape_210.setTransform(761.575,294.175);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#285C9B").s().p("AguBSQgOgJAAgRQAAgLAIgIQAHgIANgDQgFgCgEgFQgDgFAAgFQAAgHAEgFQAEgFAHgEQgJgEgGgJQgGgKAAgNQAAgTAMgMQANgLAYAAIAKABIAIACIAsAAIAAAOIgWAEQADAEACAGQACAFAAAGQAAAUgNALQgNAKgXABIgLgBQgIAFAAAGQAAAFAEACQAEABALAAIAUAAQAVAAAKAJQALAJAAARQAAAVgRAMQgSALggAAQgZAAgNgJgAgdAoQgHAGAAAJQAAAIAIAFQAHAEAOABQAVAAAKgHQALgGAAgKQAAgIgGgEQgGgDgPAAIgTAAQgMAAgGAFgAgThDQgGAHAAAMQAAAMAGAGQAGAHAMAAQAVAAAAgZQAAgMgFgHQgGgGgKAAQgMAAgGAGg");
	this.shape_211.setTransform(748.975,294.05);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#285C9B").s().p("AglA/IAAh7IAVAAIADAWIABAAQAHgLAJgHQAKgGALAAIANABIgDAZQgFgCgHAAQgPAAgJAKQgKALAAAQIAABAg");
	this.shape_212.setTransform(738.45,291.275);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#285C9B").s().p("AglAwQgRgRAAgeQAAgdAPgSQAQgRAZAAQAYAAAOAPQAPAPAAAaIAAANIhSAAQABASAJAKQAJAKAQAAQALAAAKgCQAJgDAKgEIAAAVQgJAFgKACQgJABgNAAQgdAAgPgQgAAdgMQgBgPgHgIQgHgIgMAAQgMAAgHAIQgIAIgBAPIA3AAIAAAAg");
	this.shape_213.setTransform(726.15,291.375);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#285C9B").s().p("AAcA/IAAhLQAAgOgGgIQgFgHgNAAQgQAAgHAKQgIAKAAAWIAAA+IgaAAIAAh7IAUAAIAEAQIABAAQAGgJAKgEQALgFALAAQAsAAABAtIAABQg");
	this.shape_214.setTransform(712.3,291.275);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#285C9B").s().p("AglAwQgRgRAAgeQAAgdAPgSQAPgRAaAAQAYAAAOAPQAPAPAAAaIAAANIhSAAQABASAJAKQAJAKAQAAQALAAAJgCQAKgDAKgEIAAAVQgJAFgKACQgJABgNAAQgdAAgPgQgAAdgMQAAgPgIgIQgGgIgNAAQgMAAgHAIQgIAIgBAPIA3AAIAAAAg");
	this.shape_215.setTransform(698.35,291.375);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#285C9B").s().p("AgmAwQgQgRAAgeQAAgdAPgSQAPgRAaAAQAYAAAOAPQAPAPAAAaIAAANIhSAAQAAASAKAKQAJAKAQAAQALAAAKgCQAJgDALgEIAAAVQgKAFgKACQgJABgOAAQgcAAgQgQgAAdgMQgBgPgHgIQgHgIgMAAQgMAAgHAIQgIAIgBAPIA3AAIAAAAg");
	this.shape_216.setTransform(679.15,291.375);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#285C9B").s().p("AgtA5IAAgXQAWAKATAAQAYAAAAgOQAAgFgDgDQgDgDgGgEIgQgHQgWgIgHgIQgIgIAAgOQAAgQANgIQANgJAVAAQAWAAAUAJIgJAUQgUgJgOAAQgUAAAAAMQAAAGAGAEQAFAEASAHQAPAGAHAEQAHAFADAGQAEAHAAAJQAAASgOAKQgNAJgYAAQgYAAgQgHg");
	this.shape_217.setTransform(667.025,291.375);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#285C9B").s().p("AggAwQgPgQABgfQAAgfAPgQQAPgRAcAAQATAAARAHIgIAVQgRgGgLAAQgfAAgBAqQAAAUAJALQAHAKAPAAQASAAAPgIIAAAXQgGAEgIACQgIABgMAAQgbAAgPgQg");
	this.shape_218.setTransform(619.45,291.375);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#285C9B").s().p("AAcA/IAAhLQAAgOgGgIQgFgHgNAAQgQAAgIAKQgHAKAAAWIAAA+IgaAAIAAh7IAUAAIADAQIACAAQAFgJALgEQALgFALAAQAtAAAAAtIAABQg");
	this.shape_219.setTransform(606.35,291.275);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#285C9B").s().p("AgMBSIAAijIAaAAIAACjg");
	this.shape_220.setTransform(595.5,289.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#285C9B").s().p("AgIBJQgEgDABgHQAAgPALAAQAGAAADAFQADADAAAHQAAAGgDAEQgEADgFAAQgFAAgDgDgAgFAgIgEhsIATAAIgEBsg");
	this.shape_221.setTransform(762.35,428.35);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#285C9B").s().p("AggArQgPgPAAgbQAAgaAOgQQANgQAWAAQAUAAANAOQANAOAAAWIAAAKIhNAAQAAAUAKAKQAKAKAPAAQATAAARgHIAAAPIgRAGQgHABgMAAQgYAAgOgPgAAdgKQAAgQgHgIQgIgJgMAAQgNAAgIAJQgIAJgCAPIA6AAIAAAAg");
	this.shape_222.setTransform(654.4,430.075);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#285C9B").s().p("AgYAIIAAgPIAxAAIAAAPg");
	this.shape_223.setTransform(637.675,430.075);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#285C9B").s().p("AgoBKQgMgIAAgPQAAgKAHgHQAGgIAMgDQgEgCgDgEQgDgEAAgFQAAgGADgEQAEgFAGgEQgIgDgFgKQgGgIAAgLQAAgTALgKQALgKAVABQAHAAAHABIAnAAIAAALIgVADQADADADAHQABAFAAAHQABARgMAJQgLALgSgBIgKgBQgLAGAAAIQAAAEAEADQADACAKAAIATAAQASAAAKAIQAKAIAAAOQAAATgPAJQgPALgcgBQgWAAgMgIgAgdAjQgHAFABALQAAAJAHAEQAIAGAOAAQAUgBALgGQAKgHAAgLQAAgJgGgDQgFgEgPAAIgUAAQgMAAgGAGgAgUg/QgGAHAAAMQgBANAIAFQAGAHAMAAQAYAAAAgZQAAgZgYAAQgNAAgGAGg");
	this.shape_224.setTransform(628.5,432.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#285C9B").s().p("AgaAzQgMgHgGgNQgHgNABgSQAAgbANgPQAOgPAXAAQAYAAAOAQQANAPAAAaQAAAbgNAQQgOAPgYAAQgOAAgMgHgAgYggQgJALAAAVQAAAVAJAMQAIALAQAAQAQAAAKgLQAIgLAAgWQAAgUgIgMQgKgLgQAAQgQAAgIALg");
	this.shape_225.setTransform(603.65,430.075);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#285C9B").s().p("AAYBQIgmg1IgNALIAAAqIgRAAIAAifIARAAIAABUIgBARIABAAIANgQIAjgmIAVAAIgtAvIAwBBg");
	this.shape_226.setTransform(856,394.975);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#285C9B").s().p("AggArQgOgPAAgbQAAgaAMgQQAOgQAVAAQAWAAAMAOQAMAOAAAWIAAAKIhMAAQAAAUAKAKQAJAKARAAQASAAASgHIAAAPIgRAGQgJABgLAAQgYAAgOgPgAAdgKQAAgQgHgIQgIgJgNAAQgMAAgIAJQgIAJgBAPIA5AAIAAAAg");
	this.shape_227.setTransform(827.85,397.325);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#285C9B").s().p("AggArQgPgPAAgbQABgaANgQQANgQAWAAQAUAAANAOQANAOAAAWIAAAKIhNAAQAAAUAKAKQAJAKAQAAQATAAARgHIAAAPIgRAGQgIABgLAAQgYAAgOgPgAAdgKQAAgQgHgIQgHgJgNAAQgNAAgIAJQgIAJgCAPIA6AAIAAAAg");
	this.shape_228.setTransform(769.95,397.325);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#285C9B").s().p("AAeA5IAAhHQAAgOgGgHQgHgHgNAAQgRAAgHAKQgJAJAAAWIAAA6IgRAAIAAhvIAOAAIADAPIABAAQAEgIAKgFQAKgEAKAAQAUAAAKAKQALAJAAAWIAABIg");
	this.shape_229.setTransform(719.15,397.225);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#285C9B").s().p("AgOAaIAGgaIAEgZIASAAIABADIgIAXIgJAZg");
	this.shape_230.setTransform(692.65,403.075);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#285C9B").s().p("AgHBQIAAifIAPAAIAACfg");
	this.shape_231.setTransform(677.25,394.975);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#285C9B").s().p("AgJA4IgrhvIATAAIAYBCIAJAeIAAAAIAHgXIAbhJIASAAIgqBvg");
	this.shape_232.setTransform(657.6,397.325);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#285C9B").s().p("AgbArQgNgPAAgbQAAgbAOgQQANgPAZAAQAHAAAJACQAIABAEADIgFAOIgMgEIgMgBQghAAAAArQAAAUAJALQAHALAQAAQAOAAAPgGIAAAPQgMAGgQAAQgYAAgOgPg");
	this.shape_233.setTransform(634.95,397.325);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#285C9B").s().p("AgRBQIAAhiIgUAAIAAgIIAUgGIAAgGQAAgpAjAAQAIAAAMADIgDAOQgLgDgGAAQgKAAgFAGQgEAGABAPIAAAHIAbAAIAAANIgbAAIAABig");
	this.shape_234.setTransform(607.9,394.925);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#285C9B").s().p("AggArQgPgPAAgbQABgaANgQQANgQAWAAQAUAAANAOQANAOAAAWIAAAKIhNAAQABAUAJAKQAJAKAQAAQATAAARgHIAAAPIgRAGQgIABgLAAQgYAAgOgPgAAdgKQAAgQgHgIQgHgJgNAAQgNAAgIAJQgIAJgCAPIA6AAIAAAAg");
	this.shape_235.setTransform(597.95,397.325);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#285C9B").s().p("AggArQgOgPAAgbQAAgaAMgQQAOgQAVAAQAWAAAMAOQAMAOAAAWIAAAKIhMAAQAAAUAKAKQAJAKARAAQASAAASgHIAAAPIgRAGQgJABgLAAQgYAAgOgPgAAdgKQAAgQgHgIQgIgJgNAAQgMAAgIAJQgIAJgBAPIA5AAIAAAAg");
	this.shape_236.setTransform(904,366.725);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#285C9B").s().p("AgaAzQgMgHgGgNQgHgNAAgSQAAgbAOgPQAOgPAXAAQAYAAAOAQQAOAPAAAaQAAAbgOAQQgOAPgYAAQgOAAgMgHgAgZggQgIALAAAVQAAAVAIAMQAJALAQAAQARAAAJgLQAIgLAAgWQAAgUgIgMQgKgLgQAAQgQAAgJALg");
	this.shape_237.setTransform(883.2,366.725);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#285C9B").s().p("AAeBQIAAhJQAAgNgGgGQgHgHgNAAQgRAAgHAJQgJAKAAAVIAAA7IgRAAIAAifIARAAIAAAwIgBAPIACAAQAEgIAKgFQAJgEALAAQAVAAAJAJQALAKAAAUIAABKg");
	this.shape_238.setTransform(838.15,364.375);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#285C9B").s().p("AgoBKQgMgIAAgPQAAgKAGgHQAHgIAMgDQgEgCgDgEQgDgEAAgGQAAgFADgEQADgFAIgEQgJgDgGgKQgFgIAAgLQAAgTALgKQALgKAUAAQAIAAAHACIAnAAIAAALIgVADQADADADAHQABAFAAAHQABARgLAJQgMALgTgBIgJgBQgLAHAAAHQAAAFAEACQAEACAJAAIATAAQASAAAKAIQAJAHAAAPQAAATgOAJQgQAKgbAAQgWABgMgJgAgdAjQgHAGABAKQgBAJAIAEQAIAGAOAAQAVgBAKgGQAKgHAAgLQAAgIgFgEQgGgEgPAAIgUAAQgMAAgGAGgAgUg/QgHAHABAMQAAANAGAFQAHAHAMAAQAYAAAAgZQAAgZgZAAQgMAAgGAGg");
	this.shape_239.setTransform(825.85,369.15);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#285C9B").s().p("AgHBNIAAhwIAQAAIAABwgAgGg4QgDgDAAgGQAAgFADgDQADgDADAAQAFAAACADQADADAAAFQAAAGgDADQgCADgFgBQgDABgDgDg");
	this.shape_240.setTransform(817.5,364.65);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#285C9B").s().p("AggArQgOgPAAgbQAAgaAMgQQAOgQAVAAQAWAAAMAOQAMAOAAAWIAAAKIhMAAQABAUAJAKQAJAKARAAQASAAASgHIAAAPIgRAGQgJABgLAAQgYAAgOgPgAAdgKQAAgQgHgIQgIgJgNAAQgMAAgIAJQgIAJgBAPIA5AAIAAAAg");
	this.shape_241.setTransform(809.05,366.725);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#285C9B").s().p("AggArQgPgPAAgbQAAgaAOgQQANgQAWAAQAUAAANAOQANAOgBAWIAAAKIhMAAQAAAUAKAKQAKAKAPAAQATAAARgHIAAAPIgQAGQgIABgMAAQgYAAgOgPgAAdgKQAAgQgHgIQgIgJgMAAQgNAAgIAJQgIAJgCAPIA6AAIAAAAg");
	this.shape_242.setTransform(775.55,366.725);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#285C9B").s().p("AgbAzQgLgHgHgNQgFgNAAgSQAAgbANgPQAOgPAXAAQAYAAAOAQQANAPAAAaQAAAbgNAQQgOAPgYAAQgPAAgMgHgAgYggQgJALAAAVQAAAVAJAMQAIALAQAAQARAAAIgLQAJgLAAgWQAAgUgJgMQgIgLgRAAQgQAAgIALg");
	this.shape_243.setTransform(753.3,366.725);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#285C9B").s().p("AgHBQIAAifIAPAAIAACfg");
	this.shape_244.setTransform(744.3,364.375);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#285C9B").s().p("AgIBQIAAifIAQAAIAACfg");
	this.shape_245.setTransform(728.25,364.375);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#285C9B").s().p("AgIBNIAAhwIAQAAIAABwgAgGg4QgDgDAAgGQAAgFADgDQADgDADAAQAEAAADADQADADAAAFQAAAGgDADQgDADgEgBQgDABgDgDg");
	this.shape_246.setTransform(722.95,364.65);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#285C9B").s().p("AAcA4IgVhBIgHgbIAAAAIgHAcIgVBAIgUAAIgehvIARAAIARA/IAHAeIAAAAIAEgPIAEgPIAVg/IARAAIAVA/QAFASACAMIABAAIACgLIAWhSIARAAIgfBvg");
	this.shape_247.setTransform(712.175,366.725);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#285C9B").s().p("AggArQgOgPAAgbQAAgaAMgQQAOgQAVAAQAWAAAMAOQAMAOAAAWIAAAKIhMAAQAAAUAKAKQAJAKARAAQASAAASgHIAAAPIgRAGQgJABgLAAQgYAAgOgPgAAdgKQAAgQgHgIQgIgJgNAAQgMAAgIAJQgIAJgBAPIA5AAIAAAAg");
	this.shape_248.setTransform(646.15,366.725);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#285C9B").s().p("AAYBQIgmg1IgNALIAAAqIgRAAIAAifIARAAIAABUIgBARIABAAIANgQIAjgmIAVAAIgtAvIAwBBg");
	this.shape_249.setTransform(635.5,364.375);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#285C9B").s().p("AAeA5IAAhHQAAgOgHgHQgFgHgOAAQgQAAgJAKQgIAJAAAWIAAA6IgRAAIAAhvIAOAAIADAPIAAAAQAGgIAJgFQAKgEAKAAQAVAAAJAKQALAJAAAWIAABIg");
	this.shape_250.setTransform(603.8,366.625);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#285C9B").s().p("AgHBNIAAhwIAQAAIAABwgAgGg4QgDgDAAgGQAAgFADgDQADgDADAAQAFAAACADQADADAAAFQAAAGgDADQgCADgFgBQgDABgDgDg");
	this.shape_251.setTransform(594.65,364.65);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#285C9B").s().p("AggArQgPgPAAgbQABgaANgQQANgQAWAAQAUAAANAOQANAOAAAWIAAAKIhNAAQAAAUAKAKQAJAKAQAAQATAAARgHIAAAPIgRAGQgIABgLAAQgYAAgOgPgAAdgKQAAgQgHgIQgHgJgNAAQgNAAgIAJQgIAJgCAPIA6AAIAAAAg");
	this.shape_252.setTransform(945.45,336.125);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#285C9B").s().p("AgIBNIAAhwIARAAIAABwgAgGg4QgDgDAAgGQAAgFADgDQADgDADAAQAFAAACADQADADAAAFQAAAGgDADQgCADgFgBQgDABgDgDg");
	this.shape_253.setTransform(936.85,334.05);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#285C9B").s().p("AgHBQIAAifIAPAAIAACfg");
	this.shape_254.setTransform(910.35,333.775);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#285C9B").s().p("AgoBKQgMgIAAgPQAAgKAHgHQAGgIAMgDQgEgCgDgEQgDgEAAgGQAAgFADgEQAEgFAGgEQgIgDgFgKQgGgIAAgLQAAgTALgKQALgKAVAAQAHABAHABIAnAAIAAALIgVADQADADACAHQACAFAAAHQAAARgLAJQgLALgSgBIgKgBQgLAHAAAHQAAAFAEACQAEACAJAAIATAAQASAAAKAIQAKAHAAAPQgBATgPAJQgOAKgcAAQgWABgMgJgAgdAjQgGAGAAAKQAAAJAHAEQAIAGAOAAQAUgBALgGQAKgHAAgLQAAgIgGgEQgFgEgPAAIgUAAQgLAAgHAGgAgUg/QgGAHgBAMQAAANAIAFQAGAHAMAAQAYAAAAgZQAAgZgYAAQgMAAgHAGg");
	this.shape_255.setTransform(874.85,338.55);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#285C9B").s().p("AgHBNIAAhwIAPAAIAABwgAgGg4QgDgDAAgGQAAgFADgDQADgDADAAQAFAAACADQADADAAAFQAAAGgDADQgCADgFgBQgDABgDgDg");
	this.shape_256.setTransform(853.65,334.05);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#285C9B").s().p("AgfA5IAAhvIAOAAIACAVIABAAQAGgLAIgGQAJgGAKAAQAIAAAFABIgCAQIgMgCQgOAAgIALQgKALAAARIAAA7g");
	this.shape_257.setTransform(814.075,336.025);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#285C9B").s().p("AgaArQgNgPgBgbQAAgbAOgQQANgPAZAAQAIAAAIACQAIABAEADIgEAOIgNgEIgMgBQghAAAAArQAAAUAIALQAJALAPAAQAOAAAPgGIAAAPQgMAGgQAAQgYAAgNgPg");
	this.shape_258.setTransform(804.35,336.125);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#285C9B").s().p("AggArQgOgPAAgbQAAgaAMgQQAOgQAVAAQAWAAAMAOQAMAOAAAWIAAAKIhMAAQABAUAJAKQAJAKARAAQASAAASgHIAAAPIgRAGQgJABgLAAQgYAAgOgPgAAdgKQAAgQgHgIQgIgJgNAAQgMAAgIAJQgIAJgBAPIA5AAIAAAAg");
	this.shape_259.setTransform(793.3,336.125);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#285C9B").s().p("AgnBBQgLgPAAgcQAAgbALgPQANgQAVAAQAVAAAMARIABAAIgCgTIAAgqIAYAAIAACfIgSAAIgEgPIgCAAQgLARgVAAQgWAAgMgQgAgTgGQgHAKAAATQAAATAHAJQAGAKANAAQAPAAAHgIQAGgIABgTIAAgEQgBgVgGgIQgIgJgOAAQgMAAgHAKg");
	this.shape_260.setTransform(762.2,333.875);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#285C9B").s().p("AAaA6IAAhFQAAgNgGgHQgFgGgLAAQgOAAgIAJQgGAJgBAUIAAA5IgYAAIAAhxIATAAIADAPIABAAQAGgIAKgEQAJgFAKAAQApAAAAAqIAABJg");
	this.shape_261.setTransform(749.4,335.975);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#285C9B").s().p("AAeA5IAAhHQAAgOgGgHQgHgHgNAAQgRAAgHAKQgJAJAAAWIAAA6IgRAAIAAhvIAOAAIADAPIAAAAQAFgIAKgFQAKgEAKAAQAVAAAJAKQALAJAAAWIAABIg");
	this.shape_262.setTransform(701.35,336.025);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#285C9B").s().p("AggArQgPgPAAgbQAAgaAOgQQANgQAWAAQAUAAANAOQANAOAAAWIAAAKIhNAAQAAAUAKAKQAKAKAPAAQATAAARgHIAAAPIgRAGQgHABgMAAQgYAAgOgPgAAdgKQAAgQgHgIQgHgJgNAAQgNAAgIAJQgIAJgCAPIA6AAIAAAAg");
	this.shape_263.setTransform(689.05,336.125);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#285C9B").s().p("AA/A5IAAhIQAAgNgGgHQgFgHgNAAQgPAAgIAJQgIAKAAASIAAA+IgQAAIAAhIQAAgNgFgHQgGgHgMAAQgQAAgIAKQgHAJAAAWIAAA6IgRAAIAAhvIAOAAIACAPIABAAQAFgIAJgFQAJgEAKAAQAbAAAHATIABAAQAFgJAJgFQAKgFAMAAQATAAAKAKQAJAJAAAWIAABIg");
	this.shape_264.setTransform(673.425,336.025);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#285C9B").s().p("AggArQgPgPAAgbQABgaANgQQANgQAWAAQAUAAANAOQANAOAAAWIAAAKIhNAAQABAUAJAKQAJAKAQAAQATAAARgHIAAAPIgRAGQgIABgLAAQgYAAgOgPgAAdgKQAAgQgHgIQgIgJgMAAQgNAAgIAJQgIAJgCAPIA6AAIAAAAg");
	this.shape_265.setTransform(657.8,336.125);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#285C9B").s().p("AgfA5IAAhvIAOAAIACAVIABAAQAGgLAIgGQAJgGAKAAQAIAAAFABIgCAQIgMgCQgOAAgIALQgKALAAARIAAA7g");
	this.shape_266.setTransform(648.325,336.025);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#285C9B").s().p("AgHBNIAAhwIAQAAIAABwgAgGg4QgDgDAAgGQAAgFADgDQADgDADAAQAFAAACADQADADAAAFQAAAGgDADQgCADgFgBQgDABgDgDg");
	this.shape_267.setTransform(640.65,334.05);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#285C9B").s().p("AgkAwQgKgKAAgWIAAhIIARAAIAABIQAAAOAGAGQAHAHANAAQARAAAHgKQAJgJAAgWIAAg6IARAAIAABvIgOAAIgDgPIAAAAQgGAIgJAFQgKAEgLAAQgUAAgKgJg");
	this.shape_268.setTransform(631.55,336.225);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#285C9B").s().p("AAgBSIAAgwIABgRIgBAAQgMARgWAAQgWAAgMgPQgMgPAAgbQAAgcAMgPQAMgQAWAAQAWAAANASIAAAAIADgQIANAAIAACigAgXg3QgIALAAAWQAAAUAIAKQAIAMAPAAQAQAAAIgKQAIgIAAgVIAAgEQAAgYgIgKQgIgKgQAAQgPAAgIAMg");
	this.shape_269.setTransform(618.425,338.55);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#285C9B").s().p("AggArQgPgPAAgbQABgaANgQQANgQAWAAQAUAAANAOQANAOAAAWIAAAKIhNAAQABAUAJAKQAJAKAQAAQATAAARgHIAAAPIgRAGQgIABgLAAQgYAAgOgPgAAdgKQAAgQgHgIQgIgJgMAAQgNAAgIAJQgIAJgCAPIA6AAIAAAAg");
	this.shape_270.setTransform(606.5,336.125);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#285C9B").s().p("AgfA5IAAhvIAOAAIACAVIABAAQAGgLAIgGQAJgGAKAAQAIAAAFABIgCAQIgMgCQgOAAgIALQgKALAAARIAAA7g");
	this.shape_271.setTransform(597.025,336.025);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#285C9B").s().p("AgoBKQgMgIAAgPQAAgKAHgHQAGgIAMgDQgEgCgDgEQgDgEAAgGQAAgFADgEQAEgFAGgEQgIgDgFgKQgGgIAAgLQAAgTALgKQALgKAVAAQAHAAAHACIAnAAIAAALIgVADQADADACAHQACAFAAAHQAAARgLAJQgLALgSgBIgKgBQgLAHAAAHQAAAFAEACQADACAKAAIATAAQASAAAKAIQAKAHAAAPQAAATgPAJQgPAKgcAAQgWAAgMgIgAgdAjQgGAGAAAKQAAAJAHAEQAIAGAOAAQAUgBALgGQAKgHAAgLQAAgIgGgEQgFgEgPAAIgUAAQgMAAgGAGgAgUg/QgHAHABAMQgBANAIAFQAGAHAMAAQAYAAAAgZQAAgZgYAAQgNAAgGAGg");
	this.shape_272.setTransform(827.4,307.95);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#285C9B").s().p("AgfA5IAAhvIAOAAIACAVIABAAQAGgLAIgGQAJgGAKAAQAIAAAFABIgCAQIgMgCQgOAAgIALQgKALAAARIAAA7g");
	this.shape_273.setTransform(818.175,305.425);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#285C9B").s().p("AggArQgOgPAAgbQgBgaANgQQAOgQAVAAQAVAAANAOQAMAOAAAWIAAAKIhMAAQABAUAJAKQAJAKARAAQASAAASgHIAAAPIgRAGQgJABgLAAQgYAAgOgPgAAdgKQAAgQgHgIQgIgJgNAAQgMAAgIAJQgIAJgBAPIA5AAIAAAAg");
	this.shape_274.setTransform(807.35,305.525);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#285C9B").s().p("AAeA5IAAhHQAAgOgHgHQgFgHgOAAQgQAAgJAKQgIAJAAAWIAAA6IgRAAIAAhvIAOAAIADAPIAAAAQAGgIAJgFQAKgEAKAAQAVAAAJAKQALAJAAAWIAABIg");
	this.shape_275.setTransform(795.05,305.425);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#285C9B").s().p("AggArQgPgPAAgbQAAgaAOgQQANgQAWAAQAUAAANAOQANAOAAAWIAAAKIhNAAQAAAUAKAKQAKAKAPAAQATAAARgHIAAAPIgQAGQgIABgMAAQgYAAgOgPgAAdgKQAAgQgHgIQgIgJgMAAQgNAAgIAJQgIAJgCAPIA6AAIAAAAg");
	this.shape_276.setTransform(782.75,305.525);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#285C9B").s().p("AgfA5IAAhvIAOAAIACAVIABAAQAGgLAIgGQAJgGAKAAQAIAAAFABIgCAQIgMgCQgOAAgIALQgKALAAARIAAA7g");
	this.shape_277.setTransform(767.825,305.425);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#285C9B").s().p("AgkAwQgKgKAAgWIAAhIIARAAIAABIQAAAOAHAGQAFAHAOAAQARAAAIgKQAIgJAAgWIAAg6IARAAIAABvIgOAAIgCgPIgBAAQgGAIgJAFQgJAEgLAAQgVAAgKgJg");
	this.shape_278.setTransform(756.35,305.625);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#285C9B").s().p("AgyBPIAAgNQAGABAHABQARgBAIgTIAGgQIguhxIATAAIAYBAQAIAVABALIABAAIAGgRIAchPIASAAIgwB/QgHAUgJAHQgKAIgOAAQgIAAgHgCg");
	this.shape_279.setTransform(732.025,308.05);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#285C9B").s().p("AgoBKQgMgIAAgPQAAgKAGgHQAHgIAMgDQgEgCgDgEQgDgEAAgGQAAgFADgEQADgFAIgEQgJgDgGgKQgFgIAAgLQAAgTALgKQALgKAUAAQAIAAAHACIAnAAIAAALIgVADQADADADAHQACAFAAAHQgBARgKAJQgMALgTgBIgJgBQgLAHAAAHQAAAFAEACQAEACAJAAIATAAQASAAAKAIQAJAHAAAPQAAATgOAJQgQAKgbAAQgWAAgMgIgAgdAjQgHAGAAAKQAAAJAIAEQAIAGAOAAQAVgBAKgGQAKgHAAgLQAAgIgFgEQgGgEgQAAIgTAAQgMAAgGAGgAgUg/QgHAHAAAMQABANAGAFQAHAHAMAAQAYAAAAgZQAAgZgZAAQgMAAgGAGg");
	this.shape_280.setTransform(715.5,307.95);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#285C9B").s().p("AgHBNIAAhwIAQAAIAABwgAgGg4QgDgDAAgGQAAgFADgDQADgDADAAQAFAAACADQADADAAAFQAAAGgDADQgCACgFAAQgDAAgDgCg");
	this.shape_281.setTransform(694.3,303.45);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#285C9B").s().p("AgnAzIAAgQQAJAFAJACQAJACAJAAQAMAAAHgEQAHgEAAgJQAAgHgFgEQgGgFgQgGQgPgFgHgEQgGgFgEgFQgDgGAAgIQAAgNALgIQALgIATAAQASAAARAHIgGAOQgRgHgNAAQgLAAgHAEQgGAEAAAGQAAAFADADQACADAFADIATAIQAUAHAHAHQAHAHAAAMQAAAPgMAJQgMAIgUAAQgWAAgNgHg");
	this.shape_282.setTransform(686.725,305.525);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#285C9B").s().p("AggArQgPgPAAgbQABgaANgQQANgQAWAAQAUAAANAOQANAOAAAWIAAAKIhNAAQABAUAJAKQAJAKAQAAQATAAARgHIAAAPIgRAGQgIABgLAAQgYAAgOgPgAAdgKQAAgQgHgIQgHgJgNAAQgNAAgIAJQgIAJgCAPIA6AAIAAAAg");
	this.shape_283.setTransform(664.2,305.525);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#285C9B").s().p("AgfA5IAAhvIAOAAIACAVIABAAQAGgLAIgGQAJgGAKAAQAIAAAFABIgCAQIgMgCQgOAAgIALQgKALAAARIAAA7g");
	this.shape_284.setTransform(654.725,305.425);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#285C9B").s().p("AgbArQgMgPAAgbQAAgbANgQQAOgPAXAAQAIAAAJACQAIABAFADIgGAOIgMgEIgMgBQghAAAAArQAAAUAJALQAIALAPAAQAOAAAPgGIAAAPQgLAGgSAAQgXAAgOgPg");
	this.shape_285.setTransform(645,305.525);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#285C9B").s().p("AgHBNIAAhwIAQAAIAABwgAgGg4QgDgDAAgGQAAgFADgDQADgDADAAQAEAAADADQADADAAAFQAAAGgDADQgDACgEAAQgDAAgDgCg");
	this.shape_286.setTransform(624.25,303.45);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#285C9B").s().p("AgyBPIAAgNQAGABAHABQARgBAIgTIAGgQIguhxIATAAIAYBAQAIAVABALIABAAIAGgRIAchPIASAAIgwB/QgHAUgJAHQgKAIgOAAQgIAAgHgCg");
	this.shape_287.setTransform(610.875,308.05);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#285C9B").s().p("AgzBLIAAiVIArAAQAdAAANAJQANAJAAATQAAAOgIAJQgHAIgOADIAAAAQAiAFAAAeQAAAVgOAKQgNAMgYAAgAgiA8IAgAAQARAAAJgHQAKgHAAgPQAAgOgKgGQgJgHgTAAIgeAAgAgigKIAdAAQASAAAIgFQAIgHAAgNQAAgNgJgFQgJgGgTAAIgaAAg");
	this.shape_288.setTransform(599.25,303.65);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#285C9B").s().p("AgLBPQgFgEAAgJQAAgIAFgEQAEgFAHAAQAIAAAEAFQAFAEAAAIQAAAIgFAFQgEAFgIAAQgHAAgEgFgAgJAeIgFhxIAeAAIgGBxg");
	this.shape_289.setTransform(775.675,253.575);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#285C9B").s().p("AAcBXIAAhMQAAgNgGgIQgFgHgNAAQgPAAgIAKQgIAJAAAYIAAA9IgaAAIAAitIAaAAIAAAsIgBAXIABAAQAGgJAJgFQAKgFAMAAQAsAAABAsIAABRg");
	this.shape_290.setTransform(765.3,252.875);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#285C9B").s().p("AgWAmIAAhCIgRAAIAAgMIASgKIAJgaIAQAAIAAAcIAjAAIAAAUIgjAAIAABCQAAAJAEAFQAFAEAIAAQAKAAAJgDIAAAUIgLADIgPABQgkAAAAgng");
	this.shape_291.setTransform(753.4,254.1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#285C9B").s().p("AgdBIIgCAAIgFAOIgTAAIAAitIAaAAIAAApIAAAOIgBALIABAAQANgSAXAAQAXAAANARQANAQAAAeQAAAegNASQgNAQgXAAQgXAAgNgQgAgWgIQgHAIAAAWIAAACQAAAXAHAKQAHAKAQAAQAOAAAHgLQAHgLAAgVQAAgqgdAAQgPAAgHAKg");
	this.shape_292.setTransform(728.175,252.975);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#285C9B").s().p("AgXBYIAAhnIgVAAIAAgNIAVgIIAAgIQAAgWAKgKQAKgLAVAAQANAAAOAEIgHAUQgKgDgJAAQgJABgEAFQgEAGAAAKIAAAJIAeAAIAAAUIgeAAIAABng");
	this.shape_293.setTransform(711.275,252.8);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#285C9B").s().p("AgeA5QgNgIgIgPQgHgPAAgTQAAgdAQgRQAPgRAbAAQAbAAAQARQAQARAAAdQAAAegQARQgPARgcAAQgRAAgNgHgAgXgfQgIALAAAUQAAArAfAAQAgAAAAgrQAAgqggAAQgQAAgHALg");
	this.shape_294.setTransform(699.425,255.375);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#285C9B").s().p("AgWAmIAAhCIgRAAIAAgMIASgKIAJgaIAQAAIAAAcIAiAAIAAAUIgiAAIAABCQgBAJAFAFQAFAEAHAAQAKAAAKgDIAAAUIgMADIgNABQglAAAAgng");
	this.shape_295.setTransform(681.9,254.1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#285C9B").s().p("AgdBIIgCAAIgFAOIgTAAIAAitIAaAAIAAApIAAAOIgBALIABAAQANgSAXAAQAXAAANARQANAQAAAeQAAAegNASQgNAQgXAAQgXAAgNgQgAgWgIQgHAIAAAWIAAACQAAAXAHAKQAHAKAQAAQAOAAAHgLQAHgLAAgVQAAgqgdAAQgPAAgHAKg");
	this.shape_296.setTransform(646.275,252.975);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#285C9B").s().p("AgmAwQgQgRAAgeQAAgdAPgSQAPgRAaAAQAZAAAOAPQAOAPAAAaIAAANIhSAAQABASAJAKQAJAKAQAAQALAAAJgCQAKgDALgEIAAAVQgKAFgKACQgKABgNAAQgcAAgQgQgAAdgMQgBgPgGgIQgIgIgMAAQgMAAgIAIQgHAIgCAPIA4AAIAAAAg");
	this.shape_297.setTransform(626.2,255.375);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#285C9B").s().p("AAcBXIAAhMQAAgNgFgIQgHgHgMAAQgPAAgJAKQgHAJAAAYIAAA9IgbAAIAAitIAbAAIAAAsIgCAXIACAAQAGgJAJgFQAJgFAMAAQAuAAgBAsIAABRg");
	this.shape_298.setTransform(612.35,252.875);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#285C9B").s().p("AgNBSIAAiMIgvAAIAAgXIB5AAIAAAXIgwAAIAACMg");
	this.shape_299.setTransform(598.5,253.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_165},{t:this.shape_164,p:{x:615.5,y:255.375}},{t:this.shape_163},{t:this.shape_162,p:{x:639.15,y:255.275}},{t:this.shape_161,p:{x:650,y:255.375}},{t:this.shape_160},{t:this.shape_159,p:{x:675.575,y:255.375}},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154,p:{x:738.325}},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150,p:{x:784.025,y:253}},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147,p:{x:817.025,y:255.375}},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142,p:{x:621.85,y:305.525}},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131,p:{x:762.525}},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127,p:{x:801.875,y:305.425}},{t:this.shape_126},{t:this.shape_125,p:{x:828.55,y:305.525}},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119,p:{x:893.975}},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114,p:{x:610.9,y:336.025}},{t:this.shape_113},{t:this.shape_112,p:{x:643.725,y:336.125}},{t:this.shape_111,p:{x:657.325,y:336.15}},{t:this.shape_110,p:{x:668.775,y:338.65}},{t:this.shape_109,p:{x:679.125}},{t:this.shape_108},{t:this.shape_107,p:{x:703.25}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101,p:{x:777.275,y:336.075}},{t:this.shape_100,p:{x:788.875,y:336.075}},{t:this.shape_99},{t:this.shape_98,p:{x:815.025}},{t:this.shape_97},{t:this.shape_96,p:{x:837.6,y:336.125}},{t:this.shape_95,p:{x:854.325,y:336.15}},{t:this.shape_94,p:{x:870.325,y:336.025}},{t:this.shape_93,p:{x:886.35,y:336.125}},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90,p:{x:921.975,y:334.925}},{t:this.shape_89},{t:this.shape_88,p:{x:948,y:333.725}},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85,p:{x:616.25,y:364.375}},{t:this.shape_84,p:{x:625.25,y:366.725}},{t:this.shape_83,p:{x:636.575,y:366.625}},{t:this.shape_82,p:{x:642.75,y:364.65}},{t:this.shape_81},{t:this.shape_80,p:{x:662.225,y:366.725}},{t:this.shape_79,p:{x:676.225}},{t:this.shape_78},{t:this.shape_77,p:{x:698.325}},{t:this.shape_76,p:{x:708.125,y:365.525}},{t:this.shape_75,p:{x:722.625,y:369.25}},{t:this.shape_74,p:{x:734.25,y:366.725}},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69,p:{x:799.375,y:366.725}},{t:this.shape_68},{t:this.shape_67,p:{x:826.975,y:366.625}},{t:this.shape_66,p:{x:842.6,y:366.725}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63,p:{x:876.55,y:366.725}},{t:this.shape_62,p:{x:887.875,y:366.625}},{t:this.shape_61,p:{y:397.325,x:597.95}},{t:this.shape_60,p:{y:397.325}},{t:this.shape_59,p:{x:620.225}},{t:this.shape_58,p:{x:636.225,y:397.225}},{t:this.shape_57},{t:this.shape_56,p:{x:661.4,y:394.975}},{t:this.shape_55,p:{x:670,y:397.325}},{t:this.shape_54,p:{x:678,y:403.075}},{t:this.shape_53,p:{x:691.625,y:399.85}},{t:this.shape_52,p:{x:703.25,y:397.325}},{t:this.shape_51,p:{x:715.95,y:397.425}},{t:this.shape_50},{t:this.shape_49,p:{x:744.15,y:397.325}},{t:this.shape_48},{t:this.shape_47,p:{x:765.95}},{t:this.shape_46,p:{x:774.725,y:395.075}},{t:this.shape_45,p:{x:792.275,y:397.275}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{x:869.3,y:397.325}},{t:this.shape_38},{t:this.shape_37,p:{x:890.775,y:397.225}},{t:this.shape_36,p:{x:897.925}},{t:this.shape_35,p:{x:907.175}},{t:this.shape_34,p:{x:916}},{t:this.shape_33,p:{x:925.15,y:397.225}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{x:618.1,y:430.075}},{t:this.shape_29,p:{x:630.525,y:427.825}},{t:this.shape_28,p:{x:642.325,y:430.075}},{t:this.shape_27},{t:this.shape_26,p:{x:670.375,y:429.975}},{t:this.shape_25},{t:this.shape_24,p:{x:697.275,y:430.075}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{x:766.025,y:430.025}},{t:this.shape_18,p:{x:776.725,y:430.025}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:806.975,y:429.925}},{t:this.shape_14},{t:this.shape_13,p:{x:822.775,y:430.025}},{t:this.shape_12},{t:this.shape_11,p:{x:848.5,y:427.725}},{t:this.shape_10,p:{x:854.775,y:428.875}},{t:this.shape_9,p:{x:864.5,y:430.075}},{t:this.shape_8,p:{x:875.325,y:429.975}},{t:this.shape_7,p:{x:885.35,y:429.975}},{t:this.shape_6},{t:this.shape_5,p:{x:906.975,y:428.875}},{t:this.shape_4,p:{x:913.4,y:428}},{t:this.shape_3},{t:this.shape_2,p:{x:932.5,y:430.075}},{t:this.shape_1,p:{x:943.375,y:430.075}},{t:this.shape}]},5).to({state:[{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_162,p:{x:630.6,y:291.275}},{t:this.shape_161,p:{x:641.45,y:291.375}},{t:this.shape_147,p:{x:654.325,y:291.375}},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208,p:{x:790.2,y:291.375}},{t:this.shape_207},{t:this.shape_206},{t:this.shape_150,p:{x:828.875,y:289}},{t:this.shape_205},{t:this.shape_164,p:{x:848.6,y:291.375}},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_159,p:{x:919.625,y:291.375}},{t:this.shape_200},{t:this.shape_199},{t:this.shape_4,p:{x:619.1,y:339.45}},{t:this.shape_80,p:{x:626.825,y:341.525}},{t:this.shape_198},{t:this.shape_69,p:{x:647.575,y:341.525}},{t:this.shape_29,p:{x:664.075,y:339.275}},{t:this.shape_52,p:{x:677.15,y:341.525}},{t:this.shape_7,p:{x:689.95,y:341.425}},{t:this.shape_197},{t:this.shape_196},{t:this.shape_75,p:{x:731.625,y:344.05}},{t:this.shape_195},{t:this.shape_194},{t:this.shape_45,p:{x:766.875,y:341.475}},{t:this.shape_15,p:{x:777.025,y:341.375}},{t:this.shape_13,p:{x:786.975,y:341.475}},{t:this.shape_101,p:{x:798.675,y:341.475}},{t:this.shape_100,p:{x:810.275,y:341.475}},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_53,p:{x:856.825,y:344.05}},{t:this.shape_142,p:{x:868.45,y:341.525}},{t:this.shape_190,p:{x:881.15,y:341.625}},{t:this.shape_83,p:{x:892.625,y:341.425}},{t:this.shape_18,p:{x:597.725,y:372.075}},{t:this.shape_19,p:{x:609.525,y:372.075}},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_11,p:{x:673.25,y:369.775}},{t:this.shape_125,p:{x:681.85,y:372.125}},{t:this.shape_183},{t:this.shape_55,p:{x:704.1,y:372.125}},{t:this.shape_182,p:{x:712.55,y:369.775}},{t:this.shape_28,p:{x:720.275,y:372.125}},{t:this.shape_181},{t:this.shape_180},{t:this.shape_93,p:{x:749.2,y:372.125}},{t:this.shape_62,p:{x:760.525,y:372.025}},{t:this.shape_2,p:{x:775.45,y:372.125}},{t:this.shape_179},{t:this.shape_111,p:{x:797.725,y:372.15}},{t:this.shape_58,p:{x:813.725,y:372.025}},{t:this.shape_178},{t:this.shape_85,p:{x:838.9,y:369.775}},{t:this.shape_177},{t:this.shape_10,p:{x:862.375,y:370.925}},{t:this.shape_95,p:{x:871.625,y:372.15}},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174,p:{x:900.6,y:372.025}},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_61,p:{y:404.875,x:597.95}},{t:this.shape_60,p:{y:404.875}},{t:this.shape_96,p:{x:620.7,y:404.875}},{t:this.shape_37,p:{x:631.525,y:404.775}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_24,p:{x:655.375,y:404.875}},{t:this.shape_168},{t:this.shape_63,p:{x:683.85,y:404.875}},{t:this.shape_26,p:{x:695.175,y:404.775}},{t:this.shape_1,p:{x:709.225,y:404.875}},{t:this.shape_167},{t:this.shape_49,p:{x:733.35,y:404.875}},{t:this.shape_8,p:{x:744.675,y:404.775}},{t:this.shape_5,p:{x:751.825,y:403.675}},{t:this.shape_166}]},1).to({state:[{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_208,p:{x:659.7,y:255.375}},{t:this.shape_159,p:{x:671.975,y:255.375}},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_154,p:{x:741.975}},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_114,p:{x:633.4,y:305.425}},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_119,p:{x:675.475}},{t:this.shape_282},{t:this.shape_281},{t:this.shape_7,p:{x:703.45,y:305.425}},{t:this.shape_280},{t:this.shape_279},{t:this.shape_30,p:{x:743.65,y:305.525}},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_131,p:{x:838.475}},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_98,p:{x:711.325}},{t:this.shape_109,p:{x:720.175}},{t:this.shape_18,p:{x:736.275,y:336.075}},{t:this.shape_261},{t:this.shape_260},{t:this.shape_46,p:{x:780.625,y:333.875}},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_9,p:{x:823.55,y:336.125}},{t:this.shape_111,p:{x:834.825,y:336.15}},{t:this.shape_80,p:{x:846.075,y:336.125}},{t:this.shape_256},{t:this.shape_174,p:{x:862.8,y:336.025}},{t:this.shape_255},{t:this.shape_39,p:{x:891.35,y:336.125}},{t:this.shape_95,p:{x:901.525,y:336.15}},{t:this.shape_254},{t:this.shape_107,p:{x:919.35}},{t:this.shape_127,p:{x:930.675,y:336.025}},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_90,p:{x:613.775,y:365.525}},{t:this.shape_77,p:{x:623.025}},{t:this.shape_249},{t:this.shape_248},{t:this.shape_54,p:{x:654.15,y:372.475}},{t:this.shape_110,p:{x:667.775,y:369.25}},{t:this.shape_52,p:{x:679.4,y:366.725}},{t:this.shape_51,p:{x:692.1,y:366.825}},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_56,p:{x:733.55,y:364.375}},{t:this.shape_244},{t:this.shape_243},{t:this.shape_69,p:{x:764.675,y:366.725}},{t:this.shape_242},{t:this.shape_112,p:{x:794.975,y:366.725}},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_79,p:{x:848.125}},{t:this.shape_94,p:{x:867.175,y:366.625}},{t:this.shape_237},{t:this.shape_83,p:{x:894.525,y:366.625}},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_88,p:{x:615,y:394.925}},{t:this.shape_66,p:{x:623.9,y:397.325}},{t:this.shape_233},{t:this.shape_76,p:{x:643.275,y:396.125}},{t:this.shape_82,p:{x:649.7,y:395.25}},{t:this.shape_232},{t:this.shape_125,p:{x:668.8,y:397.325}},{t:this.shape_231},{t:this.shape_75,p:{x:685.175,y:399.85}},{t:this.shape_230},{t:this.shape_59,p:{x:706.475}},{t:this.shape_229},{t:this.shape_29,p:{x:731.625,y:395.075}},{t:this.shape_35,p:{x:749.275}},{t:this.shape_62,p:{x:760.475,y:397.225}},{t:this.shape_228},{t:this.shape_67,p:{x:791.025,y:397.225}},{t:this.shape_84,p:{x:807.05,y:397.325}},{t:this.shape_37,p:{x:818.375,y:397.225}},{t:this.shape_227},{t:this.shape_47,p:{x:841.75}},{t:this.shape_34,p:{x:847.05}},{t:this.shape_226},{t:this.shape_55,p:{x:866.65,y:397.325}},{t:this.shape_182,p:{x:875.1,y:394.975}},{t:this.shape_53,p:{x:883.025,y:399.85}},{t:this.shape_36,p:{x:897.375}},{t:this.shape_74,p:{x:907.5,y:397.325}},{t:this.shape_28,p:{x:924.325,y:397.325}},{t:this.shape_2,p:{x:935.2,y:397.325}},{t:this.shape_96,p:{x:946.95,y:397.325}},{t:this.shape_85,p:{x:594.65,y:427.725}},{t:this.shape_225},{t:this.shape_33,p:{x:616.45,y:429.975}},{t:this.shape_224},{t:this.shape_223},{t:this.shape_10,p:{x:644.675,y:428.875}},{t:this.shape_222},{t:this.shape_26,p:{x:665.225,y:429.975}},{t:this.shape_58,p:{x:678.575,y:429.975}},{t:this.shape_8,p:{x:698.725,y:429.975}},{t:this.shape_61,p:{y:430.075,x:708.2}},{t:this.shape_24,p:{x:719.075,y:430.075}},{t:this.shape_190,p:{x:730.4,y:430.175}},{t:this.shape_11,p:{x:739.5,y:427.725}},{t:this.shape_5,p:{x:745.775,y:428.875}},{t:this.shape_1,p:{x:754.625,y:430.075}},{t:this.shape_221}]},1).wait(1));

	// text
	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#285C9B").s().p("AgJAMQgDgEAAgIQAAgHADgDQADgEAGAAQAGAAAEAEQADADABAHQgBAHgDAEQgEAEgGAAQgFAAgEgDg");
	this.shape_300.setTransform(325.25,138.475);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#285C9B").s().p("AgSAnIAAhIIgRAAIAAgJIARgIIAIgaIAKAAIAAAdIAkAAIAAAOIgkAAIAABIQAAALAFAGQAFAGAJAAIAKgBIAHgCIAAAPIgIACIgLABQgjAAAAgmg");
	this.shape_301.setTransform(318.1,132.175);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#285C9B").s().p("AAhBXIAAhPQAAgOgHgIQgHgHgPAAQgSAAgJAKQgJALAAAXIAABAIgSAAIAAitIASAAIAAA0IgBAQIABAAQAGgJAKgFQAKgFAMAAQAXAAALALQALALAAAWIAABQg");
	this.shape_302.setTransform(307.125,130.925);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#285C9B").s().p("AgsBRQgNgIAAgRQAAgLAHgJQAIgHANgEQgFgCgEgFQgDgEAAgGQAAgGAEgEQADgFAIgFQgKgEgFgKQgHgJABgMQgBgUAMgMQANgKAWgBQAIABAIACIArAAIAAAMIgXACQADAEADAGQACAHAAAIQAAASgMALQgNAKgUAAIgKgBQgMAHAAAJQAAAEAEADQAEACAKAAIAVAAQAUABALAIQALAIAAARQgBAUgQAKQgRALgeAAQgYAAgNgJgAggAnQgHAGAAAKQAAAKAJAGQAHAFAQAAQAXAAALgHQAMgHAAgMQgBgKgFgEQgHgEgRAAIgVAAQgNAAgHAHgAgWhEQgHAGAAAPQAAAMAIAHQAGAGANABQAbgBAAgaQAAgcgbABQgNgBgHAIg");
	this.shape_303.setTransform(293.65,136.15);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#285C9B").s().p("AgIBVIAAh7IASAAIAAB7gAgGg+QgEgDAAgGQAAgHAEgDQADgCADAAQAEAAAEACQADAEAAAGQAAAGgDADQgEAEgEAAQgDAAgDgEg");
	this.shape_304.setTransform(284.5,131.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAOgRQAPgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQALAMARAAQAVAAASgJIAAARQgJAEgJACQgJACgMAAQgaAAgQgRgAAggLQAAgRgIgKQgHgJgQAAQgNAAgJAKQgIAJgCARIA/AAIAAAAg");
	this.shape_305.setTransform(275.2,133.475);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#285C9B").s().p("AAfA+IgXhHIgIgfIAAAAIgIAfIgXBHIgWAAIghh7IAUAAIASBGIAHAgIABAAIAEgQIAFgQIAWhGIATAAIAXBGQAFATADANIABAAIACgMIAYhaIATAAIgiB7g");
	this.shape_306.setTransform(259.8,133.5);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#285C9B").s().p("AgoBIQgNgRAAgeQAAgdANgRQAOgRAYAAQAYAAAOASIABAAIgBgJIAAgIIAAgyIASAAIAACtIgPAAIgDgQIAAAAQgNASgZAAQgYAAgOgQgAgZgKQgJAMAAAXQAAAYAJAMQAJAMAQAAQATAAAIgKQAJgLAAgXIAAgEQAAgZgJgLQgJgLgSAAQgRAAgIAMg");
	this.shape_307.setTransform(237.55,131.025);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#285C9B").s().p("AAhA/IAAhPQAAgPgHgHQgHgIgPAAQgSAAgJALQgJAKAAAYIAABAIgSAAIAAh6IAPAAIADARIABAAQAFgKALgFQAKgFAMAAQAWAAALALQALALAAAXIAABQg");
	this.shape_308.setTransform(223.875,133.375);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#285C9B").s().p("AgmA3QgLgKAAgRQAAglA7gBIAVgCIAAgHQAAgOgGgIQgGgGgOAAQgPAAgTAJIgFgOQAJgFAKgDQALgDAKABQAWAAAKAJQALAKAAAVIAABUIgNAAIgEgSIgBAAQgJALgKAEQgIAFgNAAQgTAAgKgJgAAMACQgVAAgKAHQgKAGAAANQAAAKAGAFQAHAGAKgBQARAAAJgJQALgKgBgRIAAgLg");
	this.shape_309.setTransform(210,133.5);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#285C9B").s().p("AgrA4IAAgRQAKAEAKADQAKADAKAAQANAAAIgFQAHgFABgJQAAgHgHgFQgGgGgRgHQgRgFgHgFQgIgFgDgGQgDgGgBgIQABgPAMgJQAMgJAUAAQAUAAATAJIgGAPQgTgIgPAAQgMAAgHAEQgHAEAAAIQAAAFACADQADAEAGADIAVAJQAVAHAIAIQAHAIABAMQAAARgNAKQgNAJgWAAQgZAAgOgIg");
	this.shape_310.setTransform(192.65,133.475);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#285C9B").s().p("AgSAnIAAhIIgRAAIAAgJIARgIIAIgaIAKAAIAAAdIAkAAIAAAOIgkAAIAABIQAAALAFAGQAFAGAJAAIAKgBIAIgCIAAAPIgJACIgLABQgjAAAAgmg");
	this.shape_311.setTransform(183,132.175);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#285C9B").s().p("AAhA/IAAhPQAAgPgHgHQgHgIgPAAQgSAAgJALQgJAKAAAYIAABAIgSAAIAAh6IAPAAIADARIABAAQAFgKALgFQAKgFAMAAQAWAAALALQALALAAAXIAABQg");
	this.shape_312.setTransform(172.025,133.375);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAOgRQAPgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQAKAMASAAQAUAAAUgJIAAARQgKAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_313.setTransform(158.5,133.475);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#285C9B").s().p("ABFA/IAAhPQAAgPgGgHQgHgIgNAAQgRAAgJAKQgIAKAAAVIAABEIgSAAIAAhPQAAgPgGgHQgGgIgOAAQgRAAgIALQgIAKAAAYIAABAIgTAAIAAh6IAPAAIADARIABAAQAFgJAKgGQAKgFALAAQAdAAAIAVIABAAQAGgJAKgGQALgGANAAQAVAAAKALQALALAAAXIAABQg");
	this.shape_314.setTransform(141.425,133.375);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAANAQQAOAPAAAZIAAALIhUAAQABAVAKALQAKAMATAAQATAAATgJIAAARQgJAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgHgJgQAAQgNAAgJAKQgIAJgDARIBAAAIAAAAg");
	this.shape_315.setTransform(124.25,133.475);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#285C9B").s().p("AgiA/IAAh6IAPAAIACAWIABAAQAHgMAJgGQAJgHAMAAQAIAAAGACIgCARQgIgCgGAAQgPAAgJANQgLAMAAASIAABBg");
	this.shape_316.setTransform(113.925,133.375);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#285C9B").s().p("AgIBVIAAh7IASAAIAAB7gAgGg+QgEgDAAgGQAAgHAEgDQADgCADAAQAFAAADACQADAEAAAGQAAAGgDADQgDAEgFAAQgDAAgDgEg");
	this.shape_317.setTransform(105.5,131.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#285C9B").s().p("AgoA0QgLgLABgXIAAhQIASAAIAABQQABAPAGAGQAHAIAOAAQATAAAJgKQAJgLAAgYIAAhAIASAAIAAB7IgPAAIgDgRIgBAAQgFAJgLAFQgJAEgNABQgWAAgMgLg");
	this.shape_318.setTransform(95.5,133.6);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#285C9B").s().p("AAjBaIAAg1QABgKABgJIgCAAQgMATgZAAQgYAAgNgQQgOgRAAgdQAAgeAOgSQANgQAYgBQAYAAAOAUIABAAIADgRIAOAAIAACxgAgZg9QgJANAAAXQAAAXAJALQAIANARAAQASgBAIgJQAJgKAAgXIAAgEQAAgagIgMQgJgLgSAAQgRABgIAMg");
	this.shape_319.setTransform(81.15,136.15);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAOgRQAPgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQAKAMASAAQAUAAAUgJIAAARQgKAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_320.setTransform(68.05,133.475);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#285C9B").s().p("AgiA/IAAh6IAPAAIACAWIABAAQAHgMAJgGQAJgHAMAAQAIAAAGACIgCARQgIgCgGAAQgPAAgJANQgLAMAAASIAABBg");
	this.shape_321.setTransform(57.725,133.375);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#285C9B").s().p("Ag3BXIAAgPQAGACAIAAQATAAAIgWIAHgSIgyh6IAUAAIAbBGQAJAXABALIABAAIAGgTIAfhVIAUAAIg1CLQgHAVgKAIQgLAJgPAAQgJAAgIgCg");
	this.shape_322.setTransform(635.975,102.925);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#285C9B").s().p("AgsBSQgNgJAAgRQAAgLAHgIQAIgJANgCQgGgDgCgEQgEgFAAgFQAAgHAEgFQAEgEAHgGQgJgDgHgJQgFgKAAgMQgBgVAMgKQANgLAWAAQAIAAAJACIAqAAIAAALIgXAEQAEADACAHQACAGABAIQgBASgMALQgNALgUAAIgKgBQgMAGAAAIQAAAFAEADQAEACAKAAIAVAAQAUAAALAJQALAJgBAPQAAAVgQALQgRAKgeABQgYgBgNgIgAggAnQgHAFAAAMQAAAKAJAFQAHAFAQAAQAXAAALgHQALgHAAgMQAAgKgFgEQgHgEgRAAIgVAAQgNAAgHAHgAgWhFQgHAIAAANQAAANAIAHQAGAGAOAAQAaABAAgbQAAgbgbgBQgNAAgHAHg");
	this.shape_323.setTransform(623.85,102.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#285C9B").s().p("AgiA/IAAh6IAPAAIACAWIABAAQAHgMAJgGQAJgHAMAAQAIAAAGACIgCARQgIgCgGAAQgPAAgJANQgLAMAAASIAABBg");
	this.shape_324.setTransform(613.775,100.025);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQALAMASAAQATAAAUgJIAAARQgKAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_325.setTransform(601.85,100.125);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#285C9B").s().p("AAhA/IAAhPQAAgPgHgHQgHgIgPAAQgSAAgJALQgJAKAAAYIAABAIgSAAIAAh6IAPAAIADARIABAAQAFgKALgFQAKgFAMAAQAWAAALALQALALAAAXIAABQg");
	this.shape_326.setTransform(588.375,100.025);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQALAMASAAQATAAAUgJIAAARQgKAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_327.setTransform(574.85,100.125);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#285C9B").s().p("AAhA/IAAhPQAAgPgHgHQgHgIgPAAQgSAAgJALQgJAKAAAYIAABAIgSAAIAAh6IAPAAIADARIABAAQAFgKALgFQAKgFAMAAQAWAAALALQALALAAAXIAABQg");
	this.shape_328.setTransform(555.425,100.025);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAOgRQAPgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQAKAMASAAQAUAAAUgJIAAARQgKAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_329.setTransform(541.9,100.125);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAOgRQAPgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQALAMARAAQAVAAASgJIAAARQgJAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgHgJgQAAQgNAAgJAKQgIAJgCARIA/AAIAAAAg");
	this.shape_330.setTransform(529,100.125);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#285C9B").s().p("AAfA9IgXhHIgIgeIAAAAIgIAeIgXBHIgWAAIghh6IAUAAIASBGIAHAhIABAAIAEgRIAFgQIAWhGIATAAIAXBGQAFATADAOIABAAIACgNIAYhaIATAAIgiB6g");
	this.shape_331.setTransform(513.6,100.15);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#285C9B").s().p("AgSAnIAAhIIgSAAIAAgJIASgIIAIgaIAKAAIAAAdIAjAAIAAAOIgjAAIAABIQAAALAFAGQAGAGAIAAIAKgBIAHgCIAAAPIgJACIgKABQgjAAAAgmg");
	this.shape_332.setTransform(500.55,98.825);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAOgRQAPgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQAKAMASAAQAUAAAUgJIAAARQgKAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_333.setTransform(490.15,100.125);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#285C9B").s().p("AgSBUQgKgEgGgKIgCAAIgEAQIgNAAIAAitIATAAIAAAqIgCAaIACAAQANgTAYAAQAZAAANARQANAQAAAeQAAAegOARQgNAQgYAAQgLAAgKgEgAgagLQgJALABAZQgBAaAJALQAJALASAAQARAAAIgNQAJgMAAgYQAAgYgJgKQgIgMgRAAQgSAAgJALg");
	this.shape_334.setTransform(477,97.675);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#285C9B").s().p("Ag1BbIAAiyIAPAAIACARIABAAQAIgKAJgFQAJgFAMABQAYgBAOASQANAQAAAfQAAAdgNAQQgOARgYAAQgLAAgKgEQgKgEgHgKIgBAAIABAUIAAA0gAgag/QgJAKAAAXIAAAFQAAAZAJALQAIALATgBQAPABAKgNQAJgMAAgXQAAgXgJgMQgJgNgRAAQgSAAgIALg");
	this.shape_335.setTransform(457,102.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#285C9B").s().p("AgIBUIAAh6IASAAIAAB6gAgHg9QgDgDAAgHQAAgGADgDQADgEAEAAQAFAAADAEQADADAAAGQAAAHgDADQgDACgFAAQgEAAgDgCg");
	this.shape_336.setTransform(446.7,97.85);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#285C9B").s().p("AAhBXIAAhPQAAgOgHgIQgHgHgPAAQgSAAgJAKQgJALAAAXIAABAIgSAAIAAitIASAAIAAA0IgBAQIABAAQAGgJAKgFQAKgFAMAAQAXAAALALQALALAAAWIAABQg");
	this.shape_337.setTransform(436.825,97.575);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#285C9B").s().p("AgrA4IAAgRQAKAEAKADQAKADAJAAQAOAAAIgFQAIgFAAgJQAAgHgHgFQgGgGgRgHQgRgFgHgFQgHgFgEgGQgDgGgBgIQABgPALgJQANgJAUAAQAUAAATAJIgGAPQgTgIgPAAQgMAAgHAEQgHAEAAAIQAAAFACADQADAEAGADIAVAJQAVAHAIAIQAIAIAAAMQAAARgNAKQgNAJgWAAQgZAAgOgIg");
	this.shape_338.setTransform(424.3,100.125);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#285C9B").s().p("AAhA/IAAhPQAAgPgHgHQgHgIgPAAQgSAAgJALQgJAKAAAYIAABAIgSAAIAAh6IAPAAIADARIABAAQAFgKALgFQAKgFAMAAQAWAAALALQALALAAAXIAABQg");
	this.shape_339.setTransform(411.775,100.025);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#285C9B").s().p("AgdA4QgMgIgIgOQgGgOAAgUQAAgdAOgRQAPgRAaAAQAaAAAQASQAPARgBAcQABAegPARQgQARgaAAQgQAAgNgIgAgbgjQgJAMAAAXQAAAYAJAMQAKAMARAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgRAAgKAMg");
	this.shape_340.setTransform(397.75,100.125);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#285C9B").s().p("AgIBUIAAh6IASAAIAAB6gAgGg9QgEgDAAgHQAAgGAEgDQADgEADAAQAEAAAEAEQADADAAAGQAAAHgDADQgEACgEAAQgDAAgDgCg");
	this.shape_341.setTransform(387.9,97.85);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#285C9B").s().p("AgSAnIAAhIIgRAAIAAgJIARgIIAIgaIAKAAIAAAdIAkAAIAAAOIgkAAIAABIQAAALAFAGQAFAGAKAAIAJgBIAIgCIAAAPIgJACIgLABQgjAAAAgmg");
	this.shape_342.setTransform(380.9,98.825);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#285C9B").s().p("AgmA2QgKgJAAgSQgBgkA7gCIAVAAIAAgIQAAgPgGgGQgHgHgNAAQgOAAgUAJIgGgOQAKgFALgDQAKgCAKgBQAWAAALAKQAKAKABAWIAABSIgPAAIgDgRIgBAAQgJAMgJAEQgKADgNAAQgRAAgLgJgAAMACQgVABgKAFQgKAHAAAMQAAALAHAFQAFAGAMAAQAQAAAKgKQAJgKABgRIAAgLg");
	this.shape_343.setTransform(370.15,100.15);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#285C9B").s().p("AgIBXIAAitIARAAIAACtg");
	this.shape_344.setTransform(361.275,97.575);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAANAQQAOAPAAAZIAAALIhUAAQABAVAKALQAKAMATAAQATAAATgJIAAARQgJAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgHgJgQAAQgNAAgJAKQgIAJgDARIBAAAIAAAAg");
	this.shape_345.setTransform(351.95,100.125);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#285C9B").s().p("AgiA/IAAh6IAPAAIACAWIABAAQAHgMAJgGQAJgHAMAAQAIAAAGACIgCARQgIgCgGAAQgPAAgJANQgLAMAAASIAABBg");
	this.shape_346.setTransform(341.625,100.025);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQALAMASAAQATAAAUgJIAAARQgKAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_347.setTransform(323.75,100.125);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#285C9B").s().p("AAhBXIAAhPQAAgOgHgIQgHgHgPAAQgSAAgJAKQgJALAAAXIAABAIgSAAIAAitIASAAIAAA0IgBAQIABAAQAGgJAKgFQAKgFAMAAQAXAAALALQALALAAAWIAABQg");
	this.shape_348.setTransform(310.275,97.575);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#285C9B").s().p("AgSAnIAAhIIgSAAIAAgJIASgIIAIgaIAKAAIAAAdIAjAAIAAAOIgjAAIAABIQAAALAFAGQAGAGAIAAIAKgBIAHgCIAAAPIgJACIgKABQgjAAAAgmg");
	this.shape_349.setTransform(299.05,98.825);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#285C9B").s().p("AgSAnIAAhIIgSAAIAAgJIASgIIAIgaIAKAAIAAAdIAjAAIAAAOIgjAAIAABIQAAALAFAGQAGAGAIAAIAKgBIAHgCIAAAPIgJACIgKABQgjAAAAgmg");
	this.shape_350.setTransform(285,98.825);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#285C9B").s().p("AgoA0QgKgKgBgYIAAhQIATAAIAABPQABAPAGAIQAHAHAOAAQATAAAJgLQAJgKAAgYIAAhAIATAAIAAB6IgQAAIgCgQIgCAAQgGAJgJAFQgKAFgNgBQgWAAgMgKg");
	this.shape_351.setTransform(273.9,100.25);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#285C9B").s().p("AgdA4QgNgIgGgOQgIgOAAgUQABgdAPgRQAPgRAZAAQAaAAAPASQAQARAAAcQAAAegQARQgPARgaAAQgQAAgNgIgAgbgjQgKAMAAAXQAAAYAKAMQAJAMASAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgSAAgJAMg");
	this.shape_352.setTransform(260,100.125);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#285C9B").s().p("AgSBUQgKgEgHgKIgBAAIgEAQIgNAAIAAitIASAAIAAAqIgBAaIABAAQANgTAZAAQAYAAAOARQANAQAAAeQAAAegNARQgOAQgYAAQgLAAgKgEgAgagLQgJALAAAZQAAAaAJALQAIALATAAQARAAAIgNQAJgMAAgYQAAgYgJgKQgIgMgSAAQgSAAgIALg");
	this.shape_353.setTransform(246.4,97.675);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#285C9B").s().p("AgmA2QgLgJABgSQgBgkA7gCIAVAAIAAgIQAAgPgGgGQgGgHgOAAQgOAAgUAJIgGgOQAKgFAKgDQALgCAKgBQAWAAAKAKQAMAKAAAWIAABSIgOAAIgEgRIgBAAQgKAMgJAEQgIADgNAAQgSAAgLgJgAAMACQgVABgKAFQgKAHAAAMQAAALAGAFQAHAGAKAAQARAAAJgKQAKgKAAgRIAAgLg");
	this.shape_354.setTransform(232.25,100.15);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAOgRQAPgSAYAAQAXAAANAQQAOAPAAAZIAAALIhUAAQABAVAKALQALAMARAAQAUAAATgJIAAARQgJAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgPAAQgNAAgJAKQgIAJgCARIA/AAIAAAAg");
	this.shape_355.setTransform(213.9,100.125);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#285C9B").s().p("AgiA/IAAh6IAPAAIACAWIABAAQAHgMAJgGQAJgHAMAAQAIAAAGACIgCARQgIgCgGAAQgPAAgJANQgLAMAAASIAABBg");
	this.shape_356.setTransform(203.575,100.025);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#285C9B").s().p("AgdA4QgNgIgGgOQgIgOAAgUQABgdAPgRQAPgRAZAAQAaAAAQASQAPARAAAcQAAAegPARQgQARgaAAQgQAAgNgIgAgbgjQgKAMAAAXQAAAYAKAMQAJAMASAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgSAAgJAMg");
	this.shape_357.setTransform(191.15,100.125);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#285C9B").s().p("ABFA/IAAhPQAAgPgGgHQgHgIgNAAQgRAAgJAKQgIAKAAAVIAABEIgSAAIAAhPQAAgPgGgHQgGgIgOAAQgRAAgIALQgIAKAAAYIAABAIgTAAIAAh6IAPAAIADARIABAAQAFgJAKgGQAKgFALAAQAdAAAIAVIABAAQAGgJAKgGQALgGANAAQAVAAAKALQALALAAAXIAABQg");
	this.shape_358.setTransform(173.625,100.025);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#285C9B").s().p("AAhA/IAAhPQAAgPgHgHQgHgIgPAAQgSAAgJALQgJAKAAAYIAABAIgSAAIAAh6IAPAAIADARIABAAQAFgKALgFQAKgFAMAAQAWAAALALQALALAAAXIAABQg");
	this.shape_359.setTransform(149.925,100.025);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#285C9B").s().p("AgiA/IAAh6IAPAAIACAWIABAAQAHgMAJgGQAJgHAMAAQAIAAAGACIgCARQgIgCgGAAQgPAAgJANQgLAMAAASIAABBg");
	this.shape_360.setTransform(138.975,100.025);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#285C9B").s().p("AgmA2QgKgJAAgSQgBgkA7gCIAVAAIAAgIQAAgPgGgGQgHgHgNAAQgOAAgUAJIgGgOQAKgFALgDQAKgCAKgBQAWAAALAKQAKAKABAWIAABSIgPAAIgDgRIgBAAQgJAMgJAEQgKADgNAAQgRAAgLgJgAAMACQgVABgKAFQgKAHAAAMQAAALAHAFQAFAGAMAAQAQAAAKgKQAJgKABgRIAAgLg");
	this.shape_361.setTransform(126.7,100.15);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAOgRQAPgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQAKAMASAAQAUAAAUgJIAAARQgKAEgJACQgJACgMAAQgaAAgQgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgBARIA/AAIAAAAg");
	this.shape_362.setTransform(114.3,100.125);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#285C9B").s().p("AgIBXIAAitIARAAIAACtg");
	this.shape_363.setTransform(104.925,97.575);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#285C9B").s().p("AgqA4IAAgRQAJAEAKADQAKADAJAAQAOAAAIgFQAIgFAAgJQgBgHgFgFQgHgGgRgHQgRgFgHgFQgIgFgDgGQgDgGAAgIQgBgPAMgJQANgJAUAAQAUAAATAJIgGAPQgTgIgPAAQgMAAgHAEQgHAEAAAIQAAAFACADQADAEAGADIAUAJQAXAHAHAIQAIAIAAAMQAAARgNAKQgNAJgWAAQgYAAgOgIg");
	this.shape_364.setTransform(90.65,100.125);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#285C9B").s().p("AgSAnIAAhIIgSAAIAAgJIASgIIAIgaIAKAAIAAAdIAjAAIAAAOIgjAAIAABIQAAALAFAGQAFAGAKAAIAJgBIAIgCIAAAPIgJACIgLABQgjAAAAgmg");
	this.shape_365.setTransform(81,98.825);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAANAQQAOAPAAAZIAAALIhUAAQABAVAKALQAKAMATAAQATAAATgJIAAARQgJAEgJACQgJACgMAAQgaAAgQgRgAAggLQAAgRgIgKQgHgJgQAAQgNAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_366.setTransform(70.6,100.125);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#285C9B").s().p("AgtBSIAAijIATAAIAACSIBIAAIAAARg");
	this.shape_367.setTransform(59.025,98.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#285C9B").s().p("AgWAlIAAhBIgRAAIAAgMIASgJIAJgbIAQAAIAAAcIAjAAIAAAUIgjAAIAABBQgBAKAFAFQAFAEAIAAQAKAAAJgDIAAAUIgMADIgNABQglAAAAgog");
	this.shape_368.setTransform(433.15,32.1);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#285C9B").s().p("AAcBXIAAhMQAAgNgGgIQgFgHgNAAQgPAAgIAKQgIAJAAAYIAAA9IgaAAIAAitIAaAAIAAAsIgBAXIABAAQAGgJAJgFQAKgFAMAAQAsAAABAsIAABRg");
	this.shape_369.setTransform(421.5,30.875);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#285C9B").s().p("AguBSQgOgJAAgRQAAgMAIgHQAHgIANgDQgFgCgEgFQgDgFAAgGQAAgHAEgDQAEgGAHgEQgJgEgGgKQgGgJAAgMQAAgUAMgMQANgLAYAAIAKABIAIABIAsAAIAAAPIgWADQADAFACAFQACAGAAAHQAAASgNAMQgNALgXgBIgLAAQgIAFAAAGQAAAEAEACQAEACALAAIAUAAQAVABAKAIQALAJAAAQQAAAWgRAMQgSALggAAQgZAAgNgJgAgdApQgHAEAAAKQAAAIAIAFQAHAEAOAAQAVABAKgHQALgGAAgKQAAgIgGgEQgGgDgPAAIgTAAQgMAAgGAGgAgThCQgGAGAAANQAAALAGAHQAGAGAMAAQAVAAAAgYQAAgNgFgGQgGgHgKAAQgMAAgGAHg");
	this.shape_370.setTransform(407.725,36.05);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#285C9B").s().p("AgMBWIAAh7IAZAAIAAB7gAgKg8QgEgEAAgGQAAgHAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAHQAAAGgEAEQgEAFgHAAQgGAAgEgFg");
	this.shape_371.setTransform(398.225,31);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#285C9B").s().p("AglAwQgRgRAAgeQAAgdAPgSQAPgRAaAAQAZAAAOAPQAOAPAAAaIAAANIhSAAQAAASAKAKQAJAKAQAAQALAAAJgCQAKgDAKgEIAAAVQgJAFgKACQgJABgNAAQgcAAgQgQgAAdgMQAAgPgIgIQgGgIgNAAQgMAAgIAIQgHAIgCAPIA4AAIAAAAg");
	this.shape_372.setTransform(388.4,33.375);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#285C9B").s().p("AAbA+IgQg6IgLgqIAAAAIgKAqIgQA6IgeAAIgjh7IAbAAIAQA9QAGAWACAQIABAAIADgTIAEgQIAThAIAcAAIASBAIAEARIADASIABAAQACgOAGgYIAQg9IAbAAIgjB7g");
	this.shape_373.setTransform(372.375,33.4);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#285C9B").s().p("AgqBIQgNgRgBgfQABgdANgRQANgRAXAAQAYAAANASIABAAQgCgNAAgIIAAgtIAbAAIAACtIgVAAIgFgQIgBAAQgNASgXAAQgXAAgNgQgAgVgGQgHAKgBAVQABAUAHALQAHALAOAAQAQAAAHgJQAIgJAAgVIAAgDQAAgYgIgJQgHgKgQAAQgOAAgHAMg");
	this.shape_374.setTransform(349.55,30.975);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#285C9B").s().p("AAcA/IAAhLQAAgOgGgIQgFgHgNAAQgPAAgIAKQgIAKAAAWIAAA+IgaAAIAAh7IAUAAIADAQIACAAQAGgJAKgEQALgFALAAQAtAAAAAtIAABQg");
	this.shape_375.setTransform(335.55,33.275);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#285C9B").s().p("AgpA3QgLgKAAgSQAAgUAPgIQAOgKAcgBIAWgBIAAgGQAAgMgGgGQgGgGgLAAQgJAAgJADIgQAGIgJgSQAKgGAMgCQAMgDAKAAQAYAAAMAKQAMAKAAAXIAABSIgTAAIgFgRIgBAAQgJALgJAEQgKAEgNAAQgSAAgKgJgAAKAEQgRAAgJAGQgIAFAAAMQAAAIAFAFQAFAEAKAAQANAAAJgIQAIgIAAgOIAAgLg");
	this.shape_376.setTransform(321.175,33.375);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#285C9B").s().p("AgtA5IAAgXQAWAKATAAQAYAAAAgOQAAgFgDgDQgDgDgGgEIgQgHQgWgIgHgIQgIgIAAgOQAAgQANgIQANgJAVAAQAWAAAUAJIgJAUQgUgJgOAAQgUAAAAAMQAAAGAGAEQAFAEASAHQAPAGAHAEQAHAFADAGQAEAHAAAJQAAASgOAKQgNAJgYAAQgYAAgQgHg");
	this.shape_377.setTransform(303.475,33.375);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#285C9B").s().p("AglAwQgRgRAAgeQAAgdAPgSQAPgRAaAAQAZAAAOAPQAOAPAAAaIAAANIhSAAQAAASAKAKQAJAKAQAAQALAAAJgCQAKgDAKgEIAAAVQgJAFgKACQgJABgNAAQgcAAgQgQgAAdgMQAAgPgIgIQgGgIgNAAQgMAAgHAIQgIAIgCAPIA4AAIAAAAg");
	this.shape_378.setTransform(291.2,33.375);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#285C9B").s().p("AgMBWIAAh7IAZAAIAAB7gAgKg8QgEgEAAgGQAAgHAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAHQAAAGgEAEQgEAFgHAAQgGAAgEgFg");
	this.shape_379.setTransform(281.375,31);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#285C9B").s().p("AglA/IAAh7IAUAAIAEAWIABAAQAGgLAKgHQAKgGALAAIANABIgDAZQgFgCgHAAQgPAAgJAKQgKALAAAQIAABAg");
	this.shape_380.setTransform(273.95,33.275);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#285C9B").s().p("AgeA5QgNgIgIgPQgHgPAAgTQAAgdAQgRQAPgRAbAAQAbAAAQARQAQARAAAdQAAAegQARQgPARgcAAQgRAAgNgHgAgXgfQgIALAAAUQAAArAfAAQAgAAAAgrQAAgqggAAQgQAAgHALg");
	this.shape_381.setTransform(261.275,33.375);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#285C9B").s().p("AgMBXIAAitIAZAAIAACtg");
	this.shape_382.setTransform(251.075,30.875);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#285C9B").s().p("AgpA3QgLgKAAgSQAAgUAPgIQAOgKAcgBIAWgBIAAgGQAAgMgGgGQgGgGgLAAQgJAAgJADIgQAGIgJgSQAKgGAMgCQAMgDAKAAQAYAAAMAKQAMAKAAAXIAABSIgTAAIgFgRIgBAAQgJALgJAEQgKAEgNAAQgSAAgKgJgAAKAEQgRAAgJAGQgIAFAAAMQAAAIAFAFQAFAEAKAAQANAAAJgIQAIgIAAgOIAAgLg");
	this.shape_383.setTransform(240.825,33.375);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#285C9B").s().p("AggAwQgOgQAAgfQAAgfAPgQQAPgRAcAAQATAAAQAHIgIAVQgQgGgLAAQggAAABAqQgBAUAJALQAHAKAPAAQASAAAQgIIAAAXQgIAEgIACQgHABgMAAQgbAAgPgQg");
	this.shape_384.setTransform(229.1,33.375);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#285C9B").s().p("AguBSQgOgJAAgRQAAgMAIgHQAHgIANgDQgFgCgEgFQgDgFAAgGQAAgHAEgDQAEgGAHgEQgJgEgGgKQgGgJAAgMQAAgUAMgMQANgLAYAAIAKABIAIABIAsAAIAAAPIgWADQADAFACAFQACAGAAAHQAAASgNAMQgNALgXgBIgLAAQgIAFAAAGQAAAEAEACQAEACALAAIAUAAQAVABAKAIQALAJAAAQQAAAWgRAMQgSALggAAQgZAAgNgJgAgdApQgHAEAAAKQAAAIAIAFQAHAEAOAAQAVABAKgHQALgGAAgKQAAgIgGgEQgGgDgPAAIgTAAQgMAAgGAGgAgThCQgGAGAAANQAAALAGAHQAGAGAMAAQAVAAAAgYQAAgNgFgGQgGgHgKAAQgMAAgGAHg");
	this.shape_385.setTransform(210.825,36.05);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#285C9B").s().p("AAcA/IAAhLQAAgOgGgIQgFgHgNAAQgQAAgIAKQgHAKAAAWIAAA+IgaAAIAAh7IAUAAIADAQIACAAQAFgJALgEQALgFALAAQAtAAAAAtIAABQg");
	this.shape_386.setTransform(197.3,33.275);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#285C9B").s().p("AgMBWIAAh7IAZAAIAAB7gAgKg8QgEgEAAgGQAAgHAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAHQAAAGgEAEQgEAFgHAAQgGAAgEgFg");
	this.shape_387.setTransform(186.775,31);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#285C9B").s().p("AgqBIQgOgRAAgfQAAgdAOgRQANgRAXAAQAXAAANASIACAAQgCgNAAgIIAAgtIAbAAIAACtIgVAAIgFgQIgBAAQgNASgXAAQgXAAgNgQgAgVgGQgIAKAAAVQAAAUAIALQAHALAOAAQAQAAAHgJQAIgJAAgVIAAgDQAAgYgIgJQgHgKgQAAQgOAAgHAMg");
	this.shape_388.setTransform(176.05,30.975);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#285C9B").s().p("AAcA/IAAhLQAAgOgFgIQgHgHgMAAQgQAAgHAKQgIAKAAAWIAAA+IgbAAIAAh7IAVAAIAEAQIABAAQAGgJAKgEQALgFALAAQAsAAAAAtIAABQg");
	this.shape_389.setTransform(162.05,33.275);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#285C9B").s().p("AgpA3QgLgKAAgSQAAgUAPgIQAOgKAcgBIAWgBIAAgGQAAgMgGgGQgGgGgLAAQgJAAgJADIgQAGIgJgSQAKgGAMgCQAMgDAKAAQAYAAAMAKQAMAKAAAXIAABSIgTAAIgFgRIgBAAQgJALgJAEQgKAEgNAAQgSAAgKgJgAAKAEQgRAAgJAGQgIAFAAAMQAAAIAFAFQAFAEAKAAQANAAAJgIQAIgIAAgOIAAgLg");
	this.shape_390.setTransform(147.675,33.375);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#285C9B").s().p("AgWAlIAAhBIgRAAIAAgMIASgJIAJgbIAPAAIAAAcIAjAAIAAAUIgjAAIAABBQAAAKAFAFQAFAEAHAAQAKAAAKgDIAAAUIgMADIgNABQglAAAAgog");
	this.shape_391.setTransform(136.85,32.1);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#285C9B").s().p("AgtA5IAAgXQAWAKATAAQAYAAAAgOQAAgFgDgDQgDgDgGgEIgQgHQgWgIgHgIQgIgIAAgOQAAgQANgIQANgJAVAAQAWAAAUAJIgJAUQgUgJgOAAQgUAAAAAMQAAAGAGAEQAFAEASAHQAPAGAHAEQAHAFADAGQAEAHAAAJQAAASgOAKQgNAJgYAAQgYAAgQgHg");
	this.shape_392.setTransform(126.925,33.375);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#285C9B").s().p("AglA/IAAh7IAUAAIAEAWIACAAQAGgLAIgHQAKgGAMAAIANABIgDAZQgFgCgGAAQgQAAgJAKQgJALAAAQIAABAg");
	this.shape_393.setTransform(117.05,33.275);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#285C9B").s().p("AgmAwQgQgRAAgeQAAgdAPgSQAQgRAZAAQAZAAAOAPQAOAPAAAaIAAANIhSAAQAAASAKAKQAJAKAQAAQALAAAKgCQAJgDALgEIAAAVQgKAFgKACQgKABgNAAQgcAAgQgQgAAdgMQgBgPgGgIQgIgIgMAAQgMAAgIAIQgHAIgCAPIA4AAIAAAAg");
	this.shape_394.setTransform(104.75,33.375);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#285C9B").s().p("AgrBIQgNgRABgfQgBgdANgRQAOgRAXAAQAYAAANASIABAAQgCgNAAgIIAAgtIAaAAIAACtIgUAAIgFgQIgBAAQgNASgXAAQgYAAgNgQgAgVgGQgHAKAAAVQAAAUAHALQAHALAOAAQAQAAAIgJQAHgJAAgVIAAgDQAAgYgHgJQgIgKgQAAQgNAAgIAMg");
	this.shape_395.setTransform(90.6,30.975);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#285C9B").s().p("AAcA/IAAhLQAAgOgGgIQgGgHgMAAQgQAAgIAKQgHAKAAAWIAAA+IgaAAIAAh7IAUAAIADAQIACAAQAFgJALgEQAKgFAMAAQAtAAAAAtIAABQg");
	this.shape_396.setTransform(76.6,33.275);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#285C9B").s().p("AgvBDQgRgQAAgcIAAhpIAbAAIAABnQAAAUAJAJQAKALASgBQAmABAAgoIAAhnIAbAAIAABpQAAASgIAOQgHAOgPAHQgPAHgUAAQgeAAgRgQg");
	this.shape_397.setTransform(60.725,31.5);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#285C9B").s().p("AgmAwQgQgRAAgeQAAgdAPgSQAPgRAaAAQAZAAAOAPQAOAPAAAaIAAANIhSAAQABASAJAKQAJAKAQAAQALAAAJgCQAKgDALgEIAAAVQgKAFgKACQgKABgNAAQgcAAgQgQgAAdgMQgBgPgGgIQgIgIgMAAQgMAAgIAIQgHAIgCAPIA4AAIAAAAg");
	this.shape_398.setTransform(484,133.425);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#285C9B").s().p("AglA/IAAh7IAVAAIADAWIABAAQAGgLAJgHQAKgGAMAAIANABIgCAZQgGgCgHAAQgPAAgJAKQgKALABAQIAABAg");
	this.shape_399.setTransform(435.45,133.325);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#285C9B").s().p("AggAwQgOgQAAgfQAAgfAPgQQAPgRAcAAQATAAAQAHIgIAVQgQgGgLAAQggAAABAqQAAAUAIALQAIAKAOAAQASAAAQgIIAAAXQgIAEgIACQgIABgLAAQgbAAgPgQg");
	this.shape_400.setTransform(424.3,133.425);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#285C9B").s().p("AglAwQgRgRAAgeQAAgdAPgSQAPgRAaAAQAYAAAPAPQAOAPAAAaIAAANIhSAAQAAASAKAKQAJAKAQAAQALAAAJgCQAKgDAKgEIAAAVQgJAFgKACQgJABgNAAQgcAAgQgQgAAdgMQAAgPgIgIQgGgIgNAAQgMAAgIAIQgHAIgCAPIA4AAIAAAAg");
	this.shape_401.setTransform(411.8,133.425);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#285C9B").s().p("AgrBIQgMgRAAgfQAAgdAMgRQAOgRAXAAQAXAAANASIACAAQgCgNAAgIIAAgtIAaAAIAACtIgUAAIgFgQIgBAAQgNASgXAAQgXAAgOgQgAgVgGQgIAKABAVQgBAUAIALQAHALAOAAQAQAAAHgJQAIgJAAgVIAAgDQAAgYgIgJQgHgKgQAAQgOAAgHAMg");
	this.shape_402.setTransform(397.65,131.025);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#285C9B").s().p("AgMBXIAAitIAZAAIAACtg");
	this.shape_403.setTransform(375.325,130.925);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#285C9B").s().p("AgMBWIAAh7IAZAAIAAB7gAgKg7QgEgEAAgHQAAgHAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAHQAAAHgEAEQgEADgHAAQgGAAgEgDg");
	this.shape_404.setTransform(368.925,131.05);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#285C9B").s().p("AAbA+IgQg6IgLgqIAAAAIgKArIgQA5IgeAAIgjh7IAbAAIAQA9QAGAVACARIABAAIADgTIAEgQIAThAIAcAAIASBAIAEARIADARIABAAQACgNAGgYIAQg9IAbAAIgjB7g");
	this.shape_405.setTransform(356.325,133.45);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#285C9B").s().p("AgWAlIAAhBIgRAAIAAgMIASgKIAJgaIAPAAIAAAcIAjAAIAAAUIgjAAIAABBQABAKAEAFQAFAEAHAAQALAAAJgDIAAAUIgMADIgOABQgkAAAAgog");
	this.shape_406.setTransform(336.45,132.15);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#285C9B").s().p("AAcBXIAAhMQAAgNgFgIQgHgHgMAAQgPAAgJAKQgHAJAAAYIAAA9IgbAAIAAitIAbAAIAAAsIgCAXIACAAQAGgJAJgFQAJgFAMAAQAuAAgBAsIAABRg");
	this.shape_407.setTransform(324.8,130.925);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#285C9B").s().p("AguBSQgOgJAAgRQAAgLAIgIQAHgIANgDQgFgCgEgFQgDgFAAgFQAAgHAEgFQAEgFAHgEQgJgEgGgJQgGgKAAgNQAAgTAMgMQANgLAYAAIAKABIAIACIAsAAIAAAOIgWAEQADAEACAGQACAFAAAGQAAAUgNALQgNAKgXABIgLgBQgIAFAAAGQAAAFAEACQAEABALAAIAUAAQAVAAAKAJQALAJAAARQAAAVgRAMQgSALggAAQgZAAgNgJgAgdAoQgHAGAAAJQAAAIAIAFQAHAEAOABQAVAAAKgHQALgGAAgKQAAgIgGgEQgGgDgPAAIgTAAQgMAAgGAFgAgThDQgGAHAAAMQAAAMAGAGQAGAHAMAAQAVAAAAgZQAAgMgFgHQgGgGgKAAQgMAAgGAGg");
	this.shape_408.setTransform(311.025,136.1);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#285C9B").s().p("AgMBWIAAh7IAZAAIAAB7gAgKg7QgEgEAAgHQAAgHAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAHQAAAHgEAEQgEADgHAAQgGAAgEgDg");
	this.shape_409.setTransform(301.525,131.05);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#285C9B").s().p("AgmAwQgQgRAAgeQAAgdAPgSQAPgRAaAAQAYAAAOAPQAPAPAAAaIAAANIhSAAQAAASAKAKQAJAKAQAAQALAAAKgCQAJgDAKgEIAAAVQgJAFgKACQgJABgOAAQgcAAgQgQgAAdgMQAAgPgHgIQgIgIgMAAQgMAAgHAIQgIAIgBAPIA3AAIAAAAg");
	this.shape_410.setTransform(291.7,133.425);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#285C9B").s().p("AAbA+IgQg6IgLgqIAAAAIgKArIgQA5IgeAAIgjh7IAbAAIAQA9QAGAVACARIABAAIADgTIAEgQIAThAIAcAAIASBAIAEARIADARIABAAQACgNAGgYIAQg9IAbAAIgjB7g");
	this.shape_411.setTransform(275.675,133.45);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#285C9B").s().p("AglA/IAAh7IAVAAIADAWIABAAQAHgLAJgHQAKgGALAAIANABIgCAZQgGgCgHAAQgPAAgJAKQgKALAAAQIAABAg");
	this.shape_412.setTransform(256.15,133.325);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#285C9B").s().p("AgqA0QgMgLAAgXIAAhQIAbAAIAABMQAAANAGAIQAGAHAMAAQAQAAAIgKQAHgKAAgXIAAg9IAbAAIAAB7IgVAAIgDgRIgCAAQgFAKgKAFQgLAEgMAAQgWAAgLgLg");
	this.shape_413.setTransform(243.125,133.55);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#285C9B").s().p("Ag4BYIAAgVQAGABAIAAQATAAAIgWIAEgMIgyh7IAdAAIAZBGQAGAQABAMIABAAIAEgOIAchUIAdAAIg2CMQgNAngiAAQgJAAgIgCg");
	this.shape_414.setTransform(215.775,136.225);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#285C9B").s().p("AgQAcIAHgcIAFgbIATAAIACACIgIAaIgLAbg");
	this.shape_415.setTransform(200.45,139.8);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#285C9B").s().p("AgsBSQgNgJAAgRQAAgLAHgIQAHgJAOgCQgGgDgCgEQgEgFAAgFQAAgHAEgFQAEgEAHgGQgJgDgHgJQgFgKAAgMQAAgVAMgKQAMgLAWAAQAIAAAJACIAqAAIAAALIgXAEQAEADACAHQACAGABAIQAAASgNALQgMALgVAAIgKgBQgMAGAAAIQAAAFAEADQAEACAKAAIAVAAQAUAAALAJQAKAJAAAPQAAAVgQALQgQAKgfABQgYgBgNgIgAggAnQgHAFAAAMQAAAKAJAFQAHAFAQAAQAXAAALgHQALgHAAgMQAAgKgFgEQgHgEgRAAIgVAAQgNAAgHAHgAgWhFQgHAIAAANQAAANAIAHQAGAGAOAAQAaABAAgbQAAgbgbgBQgNAAgHAHg");
	this.shape_416.setTransform(505.85,102.8);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAOgRQAPgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQAKAMASAAQAUAAAUgJIAAARQgKAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgBARIA/AAIAAAAg");
	this.shape_417.setTransform(483.85,100.125);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAOgRQAPgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQAKAMASAAQAUAAAUgJIAAARQgKAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgBARIA/AAIAAAAg");
	this.shape_418.setTransform(456.85,100.125);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#285C9B").s().p("AgmA2QgLgJAAgSQAAgkA7gCIAVAAIAAgIQAAgPgGgGQgGgHgOAAQgPAAgTAJIgFgOQAJgFAKgDQALgCAKgBQAWAAAKAKQALAKAAAWIAABSIgNAAIgEgRIgBAAQgJAMgKAEQgIADgNAAQgTAAgKgJgAAMACQgVABgKAFQgKAHAAAMQAAALAGAFQAHAGAKAAQARAAAJgKQALgKgBgRIAAgLg");
	this.shape_419.setTransform(431.85,100.15);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#285C9B").s().p("AgdA4QgMgIgIgOQgHgOAAgUQABgdAPgRQAOgRAaAAQAaAAAPASQAPARABAcQgBAegPARQgPARgaAAQgQAAgNgIgAgbgjQgKAMAAAXQAAAYAKAMQAKAMARAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgRAAgKAMg");
	this.shape_420.setTransform(410.85,100.125);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#285C9B").s().p("AgSAnIAAhIIgRAAIAAgJIARgIIAIgaIAKAAIAAAdIAkAAIAAAOIgkAAIAABIQAAALAFAGQAFAGAKAAIAJgBIAIgCIAAAPIgJACIgLABQgjAAAAgmg");
	this.shape_421.setTransform(399.8,98.825);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#285C9B").s().p("AgmA2QgLgJAAgSQABgkA6gCIAVAAIAAgIQAAgPgGgGQgHgHgNAAQgPAAgTAJIgFgOQAIgFAMgDQAKgCAKgBQAWAAALAKQALAKgBAWIAABSIgOAAIgDgRIgBAAQgJAMgJAEQgKADgNAAQgSAAgKgJgAAMACQgVABgKAFQgKAHAAAMQAAALAHAFQAFAGAMAAQAQAAAKgKQAKgKAAgRIAAgLg");
	this.shape_422.setTransform(369,100.15);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#285C9B").s().p("AgSAnIAAhIIgRAAIAAgJIARgIIAIgaIAKAAIAAAdIAkAAIAAAOIgkAAIAABIQAAALAFAGQAFAGAKAAIAJgBIAIgCIAAAPIgJACIgLABQgjAAAAgmg");
	this.shape_423.setTransform(344.8,98.825);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#285C9B").s().p("AgyBNIAAgSQAJAEAMACQANADALAAQASAAAKgHQAJgIAAgNQABgIgEgGQgEgFgHgFQgIgEgQgGQgXgHgKgMQgKgLAAgSQAAgTAPgLQAOgLAXAAQAYAAAVAJIgHAQQgTgIgUAAQgOAAgJAGQgIAHAAALQAAAJADAFQADAGAIAEQAHAFAOAFQAaAJAKAKQAJALAAARQAAAVgPAMQgPAMgaAAQgeAAgPgHg");
	this.shape_424.setTransform(328.6,98.075);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#285C9B").s().p("AgyBNIAAgSQAKAEALACQANADALAAQASAAAKgHQAJgIAAgNQABgIgEgGQgEgFgHgFQgIgEgQgGQgXgHgKgMQgKgLAAgSQAAgTAPgLQAOgLAXAAQAYAAAVAJIgHAQQgTgIgUAAQgOAAgJAGQgIAHAAALQAAAJADAFQADAGAIAEQAHAFAOAFQAaAJAKAKQAJALAAARQAAAVgPAMQgPAMgaAAQgeAAgPgHg");
	this.shape_425.setTransform(316,98.075);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#285C9B").s().p("AgtBSIAAijIBbAAIAAARIhIAAIAAA0IBDAAIAAAQIhDAAIAAA9IBIAAIAAARg");
	this.shape_426.setTransform(303.725,98.1);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#285C9B").s().p("AgrA4IAAgRQAKAEAKADQAKADAKAAQANAAAIgFQAHgFABgJQAAgHgHgFQgGgGgRgHQgRgFgHgFQgIgFgDgGQgDgGgBgIQABgPAMgJQAMgJAUAAQAUAAATAJIgGAPQgTgIgPAAQgMAAgHAEQgHAEAAAIQAAAFACADQADAEAGADIAVAJQAVAHAIAIQAHAIABAMQAAARgNAKQgNAJgWAAQgZAAgOgIg");
	this.shape_427.setTransform(273.65,100.125);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#285C9B").s().p("AgIBUIAAh6IARAAIAAB6gAgHg9QgDgDAAgHQAAgGADgDQAEgEADAAQAEAAAEAEQADADAAAGQAAAHgDADQgEACgEAAQgDAAgEgCg");
	this.shape_428.setTransform(265.2,97.85);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#285C9B").s().p("AAaBXIgqg6IgOAMIAAAuIgSAAIAAitIASAAIAABbIgBATIABAAIAPgSIAmgpIAXAAIgxA0IA0BGg");
	this.shape_429.setTransform(238.325,97.575);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#285C9B").s().p("AgmA2QgLgJAAgSQABgkA6gCIAVAAIAAgIQAAgPgGgGQgHgHgNAAQgOAAgUAJIgFgOQAIgFAMgDQAKgCAKgBQAWAAALAKQALAKgBAWIAABSIgNAAIgEgRIgBAAQgJAMgKAEQgJADgNAAQgRAAgLgJgAAMACQgVABgKAFQgKAHAAAMQAAALAHAFQAFAGAMAAQAQAAAKgKQAKgKgBgRIAAgLg");
	this.shape_430.setTransform(224.65,100.15);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#285C9B").s().p("AgSAnIAAhIIgSAAIAAgJIASgIIAIgaIAKAAIAAAdIAjAAIAAAOIgjAAIAABIQAAALAFAGQAGAGAJAAIAJgBIAHgCIAAAPIgJACIgKABQgjAAAAgmg");
	this.shape_431.setTransform(214.55,98.825);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#285C9B").s().p("AgIBUIAAh6IARAAIAAB6gAgHg9QgDgDAAgHQAAgGADgDQADgEAEAAQAEAAAEAEQADADAAAGQAAAHgDADQgEACgEAAQgEAAgDgCg");
	this.shape_432.setTransform(193.55,97.85);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAOgRQAPgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQAKAMASAAQAUAAAUgJIAAARQgKAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgBARIA/AAIAAAAg");
	this.shape_433.setTransform(178.3,100.125);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#285C9B").s().p("AgIBUIAAh6IARAAIAAB6gAgHg9QgDgDAAgHQAAgGADgDQAEgEADAAQAEAAAEAEQADADAAAGQAAAHgDADQgEACgEAAQgDAAgEgCg");
	this.shape_434.setTransform(168.9,97.85);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#285C9B").s().p("AgmA2QgLgJAAgSQABgkA6gCIAVAAIAAgIQAAgPgGgGQgGgHgOAAQgPAAgTAJIgFgOQAIgFALgDQALgCAKgBQAWAAAKAKQAMAKgBAWIAABSIgNAAIgEgRIgBAAQgJAMgKAEQgJADgMAAQgTAAgKgJgAAMACQgVABgKAFQgKAHAAAMQAAALAGAFQAHAGAKAAQARAAAKgKQAKgKgBgRIAAgLg");
	this.shape_435.setTransform(130.25,100.15);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#285C9B").s().p("AgdAwQgOgRAAgeQgBgeAQgRQAOgRAaAAQAKAAAIACQAJACAGADIgHAQIgNgEQgHgCgGAAQglAAAAAvQAAAWAKANQAJAMARAAQAPAAARgHIAAARQgNAGgTAAQgaAAgOgQg");
	this.shape_436.setTransform(119.1,100.125);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAANAQQAOAPAAAZIAAALIhUAAQABAVAKALQALAMASAAQATAAAUgJIAAARQgKAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_437.setTransform(101,100.125);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#285C9B").s().p("AgTBYIAAhrIgWAAIAAgJIAWgHIAAgHQAAgtAmAAQAKAAANAEIgFAPQgLgEgHABQgLgBgFAIQgEAGAAAQIAAAIIAeAAIAAAPIgeAAIAABrg");
	this.shape_438.setTransform(63.175,97.5);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#285C9B").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_439.setTransform(55.4,98.1);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#02A6E4").s().p("AgWAlIAAhBIgRAAIAAgMIASgJIAJgbIAQAAIAAAcIAiAAIAAAUIgiAAIAABBQgBAKAFAFQAFAEAHAAQAKAAAKgDIAAAUIgMADIgNABQglAAAAgog");
	this.shape_440.setTransform(191.4,32.1);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#02A6E4").s().p("AAcBXIAAhMQAAgNgGgIQgFgHgNAAQgQAAgIAKQgHAJAAAYIAAA9IgaAAIAAitIAaAAIAAAsIgCAXIACAAQAGgJAJgFQAJgFANAAQAsAAABAsIAABRg");
	this.shape_441.setTransform(179.75,30.875);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#02A6E4").s().p("AguBSQgOgJAAgRQAAgMAIgHQAHgIANgDQgFgCgEgFQgDgFAAgGQAAgHAEgDQAEgGAHgEQgJgEgGgKQgGgJAAgMQAAgUAMgMQANgLAYAAIAKABIAIABIAsAAIAAAPIgWADQADAFACAFQACAGAAAHQAAASgNAMQgNALgXgBIgLAAQgIAFAAAGQAAAEAEACQAEACALAAIAUAAQAVABAKAIQALAJAAAQQAAAWgRAMQgSALggAAQgZAAgNgJgAgdApQgHAEAAAKQAAAIAIAFQAHAEAOAAQAVABAKgHQALgGAAgKQAAgIgGgEQgGgDgPAAIgTAAQgMAAgGAGgAgThCQgGAGAAANQAAALAGAHQAGAGAMAAQAVAAAAgYQAAgNgFgGQgGgHgKAAQgMAAgGAHg");
	this.shape_442.setTransform(165.975,36.05);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#02A6E4").s().p("AgMBWIAAh7IAZAAIAAB7gAgKg8QgEgEAAgGQAAgHAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAHQAAAGgEAEQgEAFgHAAQgGAAgEgFg");
	this.shape_443.setTransform(156.475,31);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#02A6E4").s().p("AglAwQgRgRAAgeQAAgdAPgSQAQgRAZAAQAYAAAOAPQAPAPAAAaIAAANIhSAAQABASAJAKQAJAKAQAAQALAAAJgCQAKgDAKgEIAAAVQgJAFgKACQgJABgNAAQgcAAgQgQgAAdgMQAAgPgIgIQgGgIgNAAQgMAAgHAIQgIAIgBAPIA3AAIAAAAg");
	this.shape_444.setTransform(146.65,33.375);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#02A6E4").s().p("AAbA+IgQg6IgLgqIAAAAIgKAqIgQA6IgeAAIgjh7IAbAAIAQA9QAGAWACAQIABAAIADgTIAEgQIAThAIAcAAIASBAIAEARIADASIABAAQACgOAGgYIAQg9IAbAAIgjB7g");
	this.shape_445.setTransform(130.625,33.4);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#02A6E4").s().p("AglA/IAAh7IAUAAIAEAWIACAAQAGgLAIgHQAKgGAMAAIANABIgDAZQgFgCgGAAQgQAAgJAKQgJALAAAQIAABAg");
	this.shape_446.setTransform(117.05,33.275);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#02A6E4").s().p("AgmAwQgQgRAAgeQAAgdAPgSQAQgRAZAAQAZAAAOAPQAOAPAAAaIAAANIhSAAQAAASAKAKQAJAKAQAAQALAAAKgCQAJgDALgEIAAAVQgKAFgKACQgKABgNAAQgcAAgQgQgAAdgMQgBgPgGgIQgIgIgMAAQgMAAgIAIQgHAIgCAPIA4AAIAAAAg");
	this.shape_447.setTransform(104.75,33.375);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#02A6E4").s().p("AgrBIQgNgRABgfQgBgdANgRQAOgRAXAAQAYAAANASIABAAQgCgNAAgIIAAgtIAaAAIAACtIgUAAIgFgQIgBAAQgNASgXAAQgYAAgNgQgAgVgGQgHAKAAAVQAAAUAHALQAHALAOAAQAQAAAIgJQAHgJAAgVIAAgDQAAgYgHgJQgIgKgQAAQgNAAgIAMg");
	this.shape_448.setTransform(90.6,30.975);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#02A6E4").s().p("AAcA/IAAhLQAAgOgGgIQgGgHgMAAQgQAAgIAKQgHAKAAAWIAAA+IgaAAIAAh7IAUAAIADAQIACAAQAFgJALgEQAKgFAMAAQAtAAAAAtIAABQg");
	this.shape_449.setTransform(76.6,33.275);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#02A6E4").s().p("AgvBDQgRgQAAgcIAAhpIAbAAIAABnQAAAUAJAJQAKALASgBQAmABAAgoIAAhnIAbAAIAABpQAAASgIAOQgHAOgPAHQgPAHgUAAQgeAAgRgQg");
	this.shape_450.setTransform(60.725,31.5);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#285C9B").s().p("AgdBIIgCAAIgFAOIgTAAIAAitIAaAAIAAApIAAAOIgBALIABAAQANgSAXAAQAXAAANARQANAQAAAeQAAAegNASQgNAQgXAAQgXAAgNgQgAgWgIQgHAIAAAWIAAACQAAAXAHAKQAHAKAQAAQAOAAAHgLQAHgLAAgVQAAgqgdAAQgPAAgHAKg");
	this.shape_451.setTransform(465.325,131.025);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#285C9B").s().p("AgdBIIgCAAIgFAOIgTAAIAAitIAaAAIAAApIAAAOIgBALIABAAQANgSAXAAQAXAAANARQANAQAAAeQAAAegNASQgNAQgXAAQgXAAgNgQgAgWgIQgHAIAAAWIAAACQAAAXAHAKQAHAKAQAAQAOAAAHgLQAHgLAAgVQAAgqgdAAQgPAAgHAKg");
	this.shape_452.setTransform(398.375,131.025);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#285C9B").s().p("AgMBXIAAitIAZAAIAACtg");
	this.shape_453.setTransform(375.325,130.925);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#285C9B").s().p("AgWAlIAAhBIgRAAIAAgMIASgKIAJgaIAPAAIAAAcIAjAAIAAAUIgjAAIAABBQABAKAEAFQAFAEAHAAQALAAAJgDIAAAUIgMADIgOABQgkAAAAgog");
	this.shape_454.setTransform(336.45,132.15);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#285C9B").s().p("AgsBSQgNgJAAgRQAAgLAHgIQAIgJANgCQgGgDgCgEQgEgFAAgFQAAgHAEgFQAEgEAHgGQgJgDgHgJQgFgKAAgMQgBgVAMgKQANgLAWAAQAIAAAJACIAqAAIAAALIgXAEQAEADACAHQACAGAAAIQAAASgMALQgMALgVAAIgKgBQgMAGAAAIQAAAFAEADQAEACAKAAIAVAAQAUAAALAJQALAJgBAPQAAAVgQALQgRAKgeABQgYgBgNgIgAggAnQgHAFAAAMQAAAKAJAFQAHAFAQAAQAXAAALgHQALgHAAgMQAAgKgFgEQgHgEgRAAIgVAAQgNAAgHAHgAgWhFQgHAIAAANQAAANAIAHQAGAGAOAAQAaABAAgbQAAgbgbgBQgNAAgHAHg");
	this.shape_455.setTransform(529.8,102.8);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAANAQQAOAPAAAZIAAALIhUAAQABAVAKALQALAMASAAQATAAAUgJIAAARQgKAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_456.setTransform(480.8,100.125);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#285C9B").s().p("AgmA2QgLgJAAgSQAAgkA7gCIAVAAIAAgIQAAgPgGgGQgGgHgOAAQgOAAgUAJIgGgOQAJgFALgDQALgCAKgBQAWAAAKAKQALAKAAAWIAABSIgNAAIgEgRIgBAAQgKAMgJAEQgIADgNAAQgTAAgKgJgAAMACQgVABgKAFQgKAHAAAMQAAALAGAFQAGAGALAAQARAAAJgKQAKgKAAgRIAAgLg");
	this.shape_457.setTransform(455.8,100.15);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#285C9B").s().p("AgdA4QgMgIgIgOQgGgOgBgUQAAgdAPgRQAPgRAaAAQAaAAAPASQAPARABAcQgBAegPARQgPARgaAAQgQAAgNgIgAgbgjQgKAMAAAXQAAAYAKAMQAKAMARAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgSAAgJAMg");
	this.shape_458.setTransform(434.8,100.125);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#285C9B").s().p("AgSAnIAAhIIgRAAIAAgJIARgIIAIgaIAKAAIAAAdIAkAAIAAAOIgkAAIAABIQAAALAFAGQAFAGAJAAIAKgBIAIgCIAAAPIgJACIgLABQgjAAAAgmg");
	this.shape_459.setTransform(423.75,98.825);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#285C9B").s().p("AgmA2QgLgJAAgSQABgkA6gCIAVAAIAAgIQAAgPgGgGQgHgHgNAAQgPAAgTAJIgFgOQAIgFAMgDQAKgCAKgBQAWAAALAKQALAKgBAWIAABSIgNAAIgEgRIgBAAQgJAMgKAEQgJADgNAAQgRAAgLgJgAAMACQgVABgKAFQgKAHAAAMQAAALAHAFQAFAGAMAAQAQAAAKgKQAKgKAAgRIAAgLg");
	this.shape_460.setTransform(392.95,100.15);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#285C9B").s().p("AA1BSIgUg0IhBAAIgUA0IgUAAIBBijIAPAAIBBCjgAAbANIgTgyIgIgYIgGAYIgTAyIA0AAg");
	this.shape_461.setTransform(339.625,98.05);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#285C9B").s().p("AguBDQgQgQAAgdIAAhoIATAAIAABqQAAAUALAMQAMALAUgBQAVABALgLQAMgLAAgWIAAhpIATAAIAABpQAAAcgRAQQgRAQgdAAQgdAAgRgQg");
	this.shape_462.setTransform(324.025,98.2);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#285C9B").s().p("AAnBnIggglIgHAAQgjAAgUgWQgTgWAAgoQAAgoATgVQAUgXAjAAQAkAAATAXQAVAWAAAnQAAAfgNAVQgNAVgXAHIAnApgAgohDQgOARAAAgQAAAhAOARQAOARAaAAQAcAAAOgRQANgRAAghQAAghgNgQQgPgRgbgBQgaABgOARg");
	this.shape_463.setTransform(306.7,99.9);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAANAQQAOAPAAAZIAAALIhUAAQABAVAKALQALAMASAAQATAAAUgJIAAARQgKAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_464.setTransform(101,100.125);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#41B8AF").s().p("AgWAlIAAhBIgRAAIAAgMIASgJIAJgbIAQAAIAAAcIAiAAIAAAUIgiAAIAABBQgBAKAFAFQAFAEAHAAQAKAAAKgDIAAAUIgMADIgNABQglAAAAgog");
	this.shape_465.setTransform(214.35,32.1);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#41B8AF").s().p("AAcBXIAAhMQAAgNgGgIQgFgHgNAAQgQAAgIAKQgHAJAAAYIAAA9IgaAAIAAitIAaAAIAAAsIgCAXIACAAQAGgJAJgFQAJgFANAAQAsAAABAsIAABRg");
	this.shape_466.setTransform(202.7,30.875);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#41B8AF").s().p("AguBSQgOgJAAgRQAAgMAIgHQAHgIANgDQgFgCgEgFQgDgFAAgGQAAgHAEgDQAEgGAHgEQgJgEgGgKQgGgJAAgMQAAgUAMgMQANgLAYAAIAKABIAIABIAsAAIAAAPIgWADQADAFACAFQACAGAAAHQAAASgNAMQgNALgXgBIgLAAQgIAFAAAGQAAAEAEACQAEACALAAIAUAAQAVABAKAIQALAJAAAQQAAAWgRAMQgSALggAAQgZAAgNgJgAgdApQgHAEAAAKQAAAIAIAFQAHAEAOAAQAVABAKgHQALgGAAgKQAAgIgGgEQgGgDgPAAIgTAAQgMAAgGAGgAgThCQgGAGAAANQAAALAGAHQAGAGAMAAQAVAAAAgYQAAgNgFgGQgGgHgKAAQgMAAgGAHg");
	this.shape_467.setTransform(188.925,36.05);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#41B8AF").s().p("AgMBWIAAh7IAZAAIAAB7gAgKg8QgEgEAAgGQAAgHAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAHQAAAGgEAEQgEAFgHAAQgGAAgEgFg");
	this.shape_468.setTransform(179.425,31);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#41B8AF").s().p("AglAwQgRgRAAgeQAAgdAPgSQAQgRAZAAQAYAAAOAPQAPAPAAAaIAAANIhSAAQABASAJAKQAJAKAQAAQALAAAJgCQAKgDAKgEIAAAVQgJAFgKACQgJABgNAAQgcAAgQgQgAAdgMQAAgPgIgIQgGgIgNAAQgMAAgHAIQgIAIgBAPIA3AAIAAAAg");
	this.shape_469.setTransform(169.6,33.375);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#41B8AF").s().p("AAbA+IgQg6IgLgqIAAAAIgKAqIgQA6IgeAAIgjh7IAbAAIAQA9QAGAWACAQIABAAIADgTIAEgQIAThAIAcAAIASBAIAEARIADASIABAAQACgOAGgYIAQg9IAbAAIgjB7g");
	this.shape_470.setTransform(153.575,33.4);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#41B8AF").s().p("Ag4BYIAAgVQAGABAIAAQATAAAIgWIAEgMIgyh7IAdAAIAZBGQAGAQABAMIABAAIAEgOIAchUIAdAAIg2CMQgNAngiAAQgJAAgIgCg");
	this.shape_471.setTransform(132.125,36.175);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#41B8AF").s().p("AAcBXIAAhMQAAgNgGgIQgFgHgNAAQgQAAgHAKQgIAJAAAYIAAA9IgaAAIAAitIAaAAIAAAsIgBAXIABAAQAGgJAJgFQAKgFALAAQAtAAAAAsIAABRg");
	this.shape_472.setTransform(118.75,30.875);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#41B8AF").s().p("AgWAlIAAhBIgRAAIAAgMIASgJIAJgbIAPAAIAAAcIAjAAIAAAUIgjAAIAABBQABAKAEAFQAFAEAIAAQAKAAAJgDIAAAUIgLADIgPABQgkAAAAgog");
	this.shape_473.setTransform(106.85,32.1);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#41B8AF").s().p("AgMBXIAAitIAZAAIAACtg");
	this.shape_474.setTransform(99.225,30.875);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#41B8AF").s().p("AgpA3QgLgKAAgSQAAgUAPgIQAOgKAcgBIAWgBIAAgGQAAgMgGgGQgGgGgLAAQgJAAgJADIgQAGIgJgSQAKgGAMgCQAMgDAKAAQAYAAAMAKQAMAKAAAXIAABSIgTAAIgFgRIgBAAQgJALgJAEQgKAEgNAAQgSAAgKgJgAAKAEQgRAAgJAGQgIAFAAAMQAAAIAFAFQAFAEAKAAQANAAAJgIQAIgIAAgOIAAgLg");
	this.shape_475.setTransform(88.975,33.375);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#41B8AF").s().p("AglAwQgRgRAAgeQAAgdAPgSQAPgRAaAAQAZAAAOAPQAOAPAAAaIAAANIhSAAQAAASAKAKQAJAKAQAAQALAAAJgCQAKgDAKgEIAAAVQgJAFgKACQgJABgNAAQgcAAgQgQgAAdgMQAAgPgIgIQgGgIgNAAQgMAAgHAIQgIAIgCAPIA4AAIAAAAg");
	this.shape_476.setTransform(76.1,33.375);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#41B8AF").s().p("AAmBSIAAhKIhLAAIAABKIgbAAIAAijIAbAAIAABDIBLAAIAAhDIAbAAIAACjg");
	this.shape_477.setTransform(60.825,31.4);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#285C9B").s().p("AglAwQgRgRAAgeQAAgdAPgSQAQgRAZAAQAYAAAOAPQAPAPAAAaIAAANIhSAAQABASAJAKQAJAKAQAAQALAAAJgCQAKgDAKgEIAAAVQgJAFgKACQgJABgNAAQgcAAgQgQgAAdgMQAAgPgIgIQgGgIgNAAQgMAAgHAIQgIAIgBAPIA3AAIAAAAg");
	this.shape_478.setTransform(477.4,133.425);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#285C9B").s().p("AglA/IAAh7IAVAAIADAWIABAAQAHgLAJgHQAKgGALAAIANABIgDAZQgFgCgHAAQgPAAgJAKQgKALAAAQIAABAg");
	this.shape_479.setTransform(428.85,133.325);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#285C9B").s().p("AggAwQgPgQAAgfQAAgfAQgQQAPgRAcAAQAUAAAQAHIgJAVQgQgGgLAAQggAAAAAqQABAUAHALQAJAKAOAAQASAAAQgIIAAAXQgIAEgHACQgJABgLAAQgbAAgPgQg");
	this.shape_480.setTransform(417.7,133.425);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#285C9B").s().p("AgMBWIAAh7IAZAAIAAB7gAgKg7QgEgEAAgHQAAgHAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAHQAAAHgEAEQgEADgHAAQgGAAgEgDg");
	this.shape_481.setTransform(301.525,131.05);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#285C9B").s().p("AAjBSIgmhFIgjAAIAABFIgTAAIAAijIAtAAQAeAAAOAMQAOALAAAXQAAAhghAKIAtBKgAgmgCIAbAAQATABAJgJQAKgHAAgRQAAgQgKgHQgKgIgUAAIgZAAg");
	this.shape_482.setTransform(331.675,98.1);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#285C9B").s().p("Ag3A/QgTgXAAgoQgBgnAUgWQAUgWAjAAQAkAAATAWQAVAXAAAmQAAAogVAWQgUAWgjAAQgjABgUgWgAgogxQgOARAAAgQAAAiAOARQAOARAaAAQAcAAAOgRQANgRAAgiQAAgggNgRQgOgRgcAAQgaAAgOARg");
	this.shape_483.setTransform(314.7,98.05);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#285C9B").s().p("AA+BSIAAhpIACgoIgBAAIg4CRIgPAAIg3iRIgBAAQABASAAAXIAABoIgRAAIAAijIAdAAIAzCGIAAAAIA1iGIAcAAIAACjg");
	this.shape_484.setTransform(295.375,98.1);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#DD4441").s().p("AgWAlIAAhBIgRAAIAAgMIASgJIAJgbIAPAAIAAAcIAjAAIAAAUIgjAAIAABBQAAAKAFAFQAFAEAHAAQAKAAAKgDIAAAUIgMADIgNABQglAAAAgog");
	this.shape_485.setTransform(175.9,32.1);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#DD4441").s().p("AAcBXIAAhMQAAgNgFgIQgGgHgNAAQgPAAgJAKQgHAJAAAYIAAA9IgbAAIAAitIAbAAIAAAsIgCAXIACAAQAFgJAKgFQAJgFANAAQAtAAAAAsIAABRg");
	this.shape_486.setTransform(164.25,30.875);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#DD4441").s().p("AguBSQgOgJAAgRQAAgMAIgHQAHgIANgDQgFgCgEgFQgDgFAAgGQAAgHAEgDQAEgGAHgEQgJgEgGgKQgGgJAAgMQAAgUAMgMQANgLAYAAIAKABIAIABIAsAAIAAAPIgWADQADAFACAFQACAGAAAHQAAASgNAMQgNALgXgBIgLAAQgIAFAAAGQAAAEAEACQAEACALAAIAUAAQAVABAKAIQALAJAAAQQAAAWgRAMQgSALggAAQgZAAgNgJgAgdApQgHAEAAAKQAAAIAIAFQAHAEAOAAQAVABAKgHQALgGAAgKQAAgIgGgEQgGgDgPAAIgTAAQgMAAgGAGgAgThCQgGAGAAANQAAALAGAHQAGAGAMAAQAVAAAAgYQAAgNgFgGQgGgHgKAAQgMAAgGAHg");
	this.shape_487.setTransform(150.475,36.05);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#DD4441").s().p("AgMBWIAAh7IAZAAIAAB7gAgKg8QgEgEAAgGQAAgHAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAHQAAAGgEAEQgEAFgHAAQgGAAgEgFg");
	this.shape_488.setTransform(140.975,31);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#DD4441").s().p("AgmAwQgQgRAAgeQAAgdAPgSQAPgRAaAAQAYAAAOAPQAPAPAAAaIAAANIhSAAQABASAJAKQAJAKAQAAQALAAAKgCQAJgDAKgEIAAAVQgJAFgKACQgJABgOAAQgbAAgRgQgAAdgMQAAgPgIgIQgGgIgNAAQgMAAgHAIQgIAIgBAPIA3AAIAAAAg");
	this.shape_489.setTransform(131.15,33.375);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#DD4441").s().p("AAbA+IgQg6IgLgqIAAAAIgKAqIgQA6IgeAAIgjh7IAbAAIAQA9QAGAWACAQIABAAIADgTIAEgQIAThAIAcAAIASBAIAEARIADASIABAAQACgOAGgYIAQg9IAbAAIgjB7g");
	this.shape_490.setTransform(115.125,33.4);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#DD4441").s().p("AglA/IAAh7IAVAAIADAWIABAAQAGgLAJgHQAKgGAMAAIANABIgCAZQgGgCgHAAQgPAAgJAKQgKALABAQIAABAg");
	this.shape_491.setTransform(101.55,33.275);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#DD4441").s().p("AglAwQgRgRAAgeQAAgdAPgSQAPgRAaAAQAZAAAOAPQAOAPAAAaIAAANIhSAAQABASAJAKQAJAKAQAAQALAAAJgCQAKgDALgEIAAAVQgKAFgKACQgKABgMAAQgcAAgQgQgAAdgMQgBgPgGgIQgIgIgMAAQgMAAgIAIQgHAIgCAPIA4AAIAAAAg");
	this.shape_492.setTransform(89.25,33.375);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#DD4441").s().p("AgOA+Igvh7IAcAAIAZBHQAHASABALIABAAQABgIAGgVIAahHIAcAAIgwB7g");
	this.shape_493.setTransform(76.45,33.4);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#DD4441").s().p("Ag4A/QgUgXAAgoQAAgnAUgWQAUgXAkAAQAlABAUAWQAUAWAAAnQAAAogUAXQgUAVglAAQgkAAgUgVgAgjgsQgMAPAAAdQAAAfAMAPQAMAQAXAAQAYAAAMgPQAMgQAAgfQAAgdgMgPQgMgQgYAAQgXAAgMAQg");
	this.shape_494.setTransform(61.25,31.35);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#285C9B").s().p("AgIALQgEgDABgIQgBgGAEgDQADgEAFAAQAGAAADAEQAEADAAAGQAAAHgEAEQgDADgGAAQgEAAgEgDg");
	this.shape_495.setTransform(765.25,90.2);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#285C9B").s().p("AggArQgPgPAAgbQAAgaAOgQQANgQAWAAQAUAAANAOQAMAOAAAWIAAAKIhMAAQAAAUAKAKQAKAKAPAAQATAAARgHIAAAPIgQAGQgIABgMAAQgYAAgOgPgAAdgKQAAgQgHgIQgIgJgMAAQgNAAgIAJQgIAJgCAPIA6AAIAAAAg");
	this.shape_496.setTransform(756.65,85.675);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#285C9B").s().p("AA/A5IAAhIQAAgNgGgHQgFgHgNAAQgPAAgIAJQgIAKAAASIAAA+IgQAAIAAhIQAAgNgFgHQgGgHgMAAQgQAAgIAKQgHAJAAAWIAAA6IgRAAIAAhvIAOAAIACAPIABAAQAFgIAJgFQAJgEAKAAQAbAAAHATIABAAQAFgJAJgFQAKgFAMAAQATAAAKAKQAJAJAAAWIAABIg");
	this.shape_497.setTransform(741.025,85.575);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#285C9B").s().p("AgkAwQgKgKAAgWIAAhIIARAAIAABIQAAAOAHAGQAFAHAOAAQARAAAIgKQAIgJAAgWIAAg6IARAAIAABvIgOAAIgCgPIgBAAQgGAIgJAFQgKAEgKAAQgVAAgKgJg");
	this.shape_498.setTransform(724.75,85.775);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#285C9B").s().p("AgnAzIAAgQQAJAFAJACQAJACAJAAQAMAAAHgEQAHgEAAgJQAAgHgFgEQgGgFgQgGQgPgFgHgEQgGgFgEgFQgDgGAAgIQAAgNALgIQALgIATAAQASAAARAHIgGAOQgRgHgNAAQgLAAgHAEQgGAEAAAGQAAAFADADQACADAFADIATAIQAUAHAHAHQAHAHAAAMQAAAPgMAJQgMAIgUAAQgWAAgNgHg");
	this.shape_499.setTransform(713.425,85.675);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#285C9B").s().p("AAeA5IAAhHQAAgOgHgHQgGgHgNAAQgQAAgJAKQgIAJAAAWIAAA6IgRAAIAAhvIAOAAIACAPIABAAQAGgIAJgFQAKgEAKAAQAUAAALAKQAKAJAAAWIAABIg");
	this.shape_500.setTransform(702,85.575);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#285C9B").s().p("AgbAzQgLgHgHgNQgFgNAAgSQAAgbANgPQAOgPAXAAQAYAAANAQQAOAPAAAaQAAAbgOAQQgNAPgYAAQgPAAgMgHgAgZggQgIALAAAVQAAAVAIAMQAJALAQAAQAQAAAJgLQAJgLAAgWQAAgUgJgMQgJgLgQAAQgQAAgJALg");
	this.shape_501.setTransform(689.2,85.675);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#285C9B").s().p("AgbArQgNgPAAgbQAAgbAOgQQANgPAZAAQAHAAAJACQAIABAFADIgGAOIgMgEIgMgBQghAAAAArQAAAUAJALQAHALAQAAQAOAAAPgGIAAAPQgMAGgQAAQgYAAgOgPg");
	this.shape_502.setTransform(678.15,85.675);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#285C9B").s().p("AgkAwQgKgKAAgWIAAhIIARAAIAABIQAAAOAGAGQAHAHANAAQARAAAHgKQAJgJAAgWIAAg6IARAAIAABvIgOAAIgDgPIgBAAQgFAIgJAFQgKAEgLAAQgUAAgKgJg");
	this.shape_503.setTransform(661,85.775);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#285C9B").s().p("AgaAzQgMgHgGgNQgHgNAAgSQAAgbAOgPQAOgPAXAAQAYAAANAQQAPAPAAAaQAAAbgPAQQgNAPgYAAQgOAAgMgHgAgYggQgJALAAAVQAAAVAJAMQAIALAQAAQARAAAJgLQAIgLAAgWQAAgUgIgMQgKgLgQAAQgQAAgIALg");
	this.shape_504.setTransform(648.3,85.675);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#285C9B").s().p("AgyBPIAAgNQAGABAHAAQARAAAIgTIAGgRIguhwIATAAIAYBBQAIAUABAKIABAAIAGgRIAchOIASAAIgwCAQgHASgJAJQgKAHgOABQgIgBgHgCg");
	this.shape_505.setTransform(636.675,88.2);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#285C9B").s().p("AAeA5IAAhHQAAgOgGgHQgHgHgNAAQgQAAgIAKQgJAJAAAWIAAA6IgRAAIAAhvIAOAAIADAPIABAAQAEgIAKgFQAJgEALAAQAVAAAKAKQAKAJAAAWIAABIg");
	this.shape_506.setTransform(619.6,85.575);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#285C9B").s().p("AgjAxQgJgIAAgQQAAghA1gCIATgBIAAgGQAAgOgFgGQgGgGgMAAQgOAAgRAJIgFgOQAIgEAKgCQAKgDAJAAQAUAAAJAIQAKAKAAATIAABMIgNAAIgDgQIgBAAQgIAKgJAFQgIADgLAAQgRAAgKgJgAALACQgTAAgJAGQgJAGAAALQAAAJAFAFQAGAFAKAAQAPAAAJgIQAJgJAAgQIAAgKg");
	this.shape_507.setTransform(606.925,85.7);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#285C9B").s().p("AAeBQIAAhJQAAgNgHgGQgFgHgOAAQgRAAgIAJQgIAKAAAVIAAA7IgRAAIAAifIARAAIAAAwIgBAPIABAAQAFgIAJgFQAKgEALAAQAUAAALAJQAKAKAAAUIAABKg");
	this.shape_508.setTransform(595.1,83.325);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#285C9B").s().p("AgQAkIAAhCIgQAAIAAgIIAQgHIAHgYIAJAAIAAAaIAhAAIAAANIghAAIAABBQAAAKAFAGQAFAFAIAAIAJAAIAGgCIAAANIgIACIgJABQggAAAAgig");
	this.shape_509.setTransform(584.825,84.475);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#285C9B").s().p("AgzBQIAAgTQAGABAHABQARAAAHgVIAEgLIgthwIAaAAIAXBBQAFANABALIABAAIADgNIAahMIAaAAIgwB/QgMAkgfAAQgIAAgIgCg");
	this.shape_510.setTransform(570.125,88.15);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#285C9B").s().p("AgqBKQgMgHAAgPQAAgLAGgHQAHgHAMgDQgFgCgDgEQgDgGAAgEQAAgHADgDQAEgFAHgEQgJgEgFgIQgGgJAAgLQAAgSAMgLQALgKAWAAIAJABIAIABIAnAAIAAANIgTAEQADADABAGQACAFAAAGQAAASgMAKQgMAKgUgBIgKgBQgIAFAAAGQAAAEAEACQADABAKAAIATAAQATAAAJAJQAKAIAAAPQAAATgQALQgQAKgdAAQgXAAgMgJgAgbAlQgGAFAAAIQAAAIAHAEQAHAFANgBQATAAAJgFQAKgGAAgJQAAgIgFgCQgGgEgOAAIgRAAQgLAAgGAFgAgRg8QgGAGAAALQAAALAGAFQAFAGALAAQAUAAAAgWQAAgMgFgFQgGgGgJgBQgLABgFAGg");
	this.shape_511.setTransform(558.625,88.05);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#285C9B").s().p("AgiA6IAAhxIATAAIAEAUIABAAQAFgKAJgGQAJgGAKAAIAMABIgCAXIgLgBQgOAAgIAJQgJAJAAAPIAAA7g");
	this.shape_512.setTransform(548.975,85.525);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#285C9B").s().p("AgiArQgPgPAAgbQAAgbAOgQQANgQAYAAQAWAAANAOQANAOAAAXIAAAMIhKAAQAAARAIAJQAJAJAOAAQAKAAAJgCQAJgCAJgEIAAATQgIAEgJACQgJACgMAAQgZAAgPgQgAAagLQAAgOgGgHQgHgHgLAAQgLAAgHAHQgHAHgBAOIAyAAIAAAAg");
	this.shape_513.setTransform(537.825,85.625);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#285C9B").s().p("AAaA6IAAhFQAAgNgFgHQgGgGgLAAQgPAAgHAJQgGAJAAAUIAAA5IgZAAIAAhxIATAAIADAPIACAAQAFgIAJgEQAKgFAKAAQApAAAAAqIAABJg");
	this.shape_514.setTransform(525.15,85.525);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#285C9B").s().p("AgiArQgPgPAAgbQAAgbAOgQQANgQAYAAQAWAAANAOQANAOAAAXIAAAMIhKAAQAAARAIAJQAJAJAOAAQAKAAAJgCQAJgCAJgEIAAATQgIAEgJACQgJACgMAAQgZAAgPgQgAAagLQAAgOgGgHQgHgHgLAAQgLAAgHAHQgHAHgBAOIAyAAIAAAAg");
	this.shape_515.setTransform(512.475,85.625);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#285C9B").s().p("AgiArQgPgPAAgbQAAgbAOgQQANgQAYAAQAWAAANAOQANAOAAAXIAAAMIhKAAQAAARAIAJQAJAJAOAAQAKAAAJgCQAJgCAJgEIAAATQgIAEgJACQgJACgMAAQgZAAgPgQgAAagLQAAgOgGgHQgHgHgLAAQgLAAgHAHQgHAHgBAOIAyAAIAAAAg");
	this.shape_516.setTransform(494.975,85.625);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#285C9B").s().p("AgiA6IAAhxIATAAIAEAUIABAAQAFgKAJgGQAJgGAKAAIAMABIgCAXIgLgBQgOAAgIAJQgJAJAAAPIAAA7g");
	this.shape_517.setTransform(485.025,85.525);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#285C9B").s().p("AgbA0QgNgIgGgNQgHgNAAgSQAAgbAOgPQAPgQAYAAQAZAAAOAQQAPAQAAAaQAAAcgPAPQgOAQgZAAQgPAAgMgHgAgVgcQgHAKAAASQAAAnAcAAQAdAAAAgnQAAgmgdAAQgOAAgHAKg");
	this.shape_518.setTransform(473.475,85.625);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#285C9B").s().p("AA8A6IAAhFQAAgNgFgHQgFgGgLAAQgOAAgGAJQgHAJAAASIAAA7IgXAAIAAhFQAAgNgFgHQgFgGgKAAQgOAAgHAJQgGAJAAAUIAAA5IgZAAIAAhxIATAAIAEAPIABAAQAFgIAJgEQAJgFAKAAQAaAAAIASIACAAQAFgIAJgFQAJgFAMAAQAUAAAJALQAKAKAAAVIAABJg");
	this.shape_519.setTransform(457.075,85.525);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#285C9B").s().p("AgiArQgPgPAAgbQAAgbAOgQQANgQAYAAQAWAAANAOQANAOAAAXIAAAMIhKAAQAAARAIAJQAJAJAOAAQAKAAAJgCQAJgCAJgEIAAATQgIAEgJACQgJACgMAAQgZAAgPgQgAAagLQAAgOgGgHQgHgHgLAAQgLAAgHAHQgHAHgBAOIAyAAIAAAAg");
	this.shape_520.setTransform(435.575,85.625);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#285C9B").s().p("AgoA0IAAgVQATAJASAAQAVAAAAgNQAAgEgCgDQgDgDgGgDIgOgHQgUgHgHgHQgHgIAAgMQAAgPAMgIQAMgIATAAQAUAAASAIIgIATQgSgIgNAAQgSAAAAALQAAAFAFAEQAFAEAQAGQAOAFAGAEQAHAEADAGQADAGAAAIQAAARgMAJQgNAJgVAAQgXAAgNgHg");
	this.shape_521.setTransform(424.475,85.625);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#285C9B").s().p("AgmAwQgLgLAAgVIAAhJIAYAAIAABFQABANAFAHQAFAGAMAAQAOAAAHgJQAHgJAAgUIAAg5IAYAAIAABxIgTAAIgDgPIgBAAQgGAIgJAEQgJAFgLAAQgVAAgJgKg");
	this.shape_522.setTransform(412.6,85.725);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#285C9B").s().p("AgbAzQgLgHgHgNQgFgNgBgSQAAgbAOgPQAOgPAXAAQAYAAANAQQAOAPABAaQgBAbgOAQQgNAPgYAAQgOAAgNgHgAgZggQgIALAAAVQAAAVAIAMQAJALAQAAQAQAAAKgLQAIgLAAgWQAAgUgIgMQgKgLgQAAQgQAAgJALg");
	this.shape_523.setTransform(394.25,85.675);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#285C9B").s().p("AgQAkIAAhCIgQAAIAAgIIAQgHIAHgYIAJAAIAAAaIAhAAIAAANIghAAIAABBQAAAKAFAGQAFAFAIAAIAJAAIAGgCIAAANIgIACIgJABQggAAAAgig");
	this.shape_524.setTransform(384.125,84.475);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#285C9B").s().p("AggArQgOgPgBgbQAAgaANgQQAOgQAVAAQAWAAAMAOQANAOAAAWIAAAKIhNAAQAAAUAKAKQAJAKAQAAQATAAASgHIAAAPIgSAGQgHABgMAAQgYAAgOgPgAAdgKQAAgQgHgIQgHgJgOAAQgMAAgIAJQgIAJgCAPIA6AAIAAAAg");
	this.shape_525.setTransform(369.25,85.675);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#285C9B").s().p("AgJA4IgrhvIATAAIAYBCIAJAeIABAAIAHgXIAbhJIASAAIgrBvg");
	this.shape_526.setTransform(358.05,85.675);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#285C9B").s().p("AgjAxQgJgIAAgQQAAghA1gCIATgBIAAgGQAAgOgFgGQgGgGgMAAQgOAAgRAJIgFgOQAIgEAKgCQAKgDAJAAQAUAAAJAIQAKAKAAATIAABMIgNAAIgDgQIgBAAQgIAKgJAFQgIADgLAAQgRAAgKgJgAALACQgTAAgJAGQgJAGAAALQAAAJAFAFQAGAFAKAAQAPAAAJgIQAJgJAAgQIAAgKg");
	this.shape_527.setTransform(346.625,85.7);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#285C9B").s().p("AAeBQIAAhJQAAgNgHgGQgFgHgOAAQgQAAgJAJQgIAKAAAVIAAA7IgRAAIAAifIARAAIAAAwIgBAPIABAAQAGgIAJgFQAJgEALAAQAUAAALAJQAKAKAAAUIAABKg");
	this.shape_528.setTransform(334.8,83.325);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#285C9B").s().p("AgkAwQgKgKAAgWIAAhIIARAAIAABIQAAAOAGAGQAHAHANAAQAQAAAIgKQAJgJAAgWIAAg6IARAAIAABvIgOAAIgDgPIgBAAQgFAIgJAFQgJAEgMAAQgUAAgKgJg");
	this.shape_529.setTransform(316.4,85.775);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#285C9B").s().p("AgaAzQgMgHgGgNQgHgNAAgSQAAgbAOgPQAOgPAXAAQAYAAANAQQAPAPAAAaQAAAbgPAQQgNAPgYAAQgOAAgMgHgAgZggQgIALAAAVQAAAVAIAMQAJALAQAAQARAAAJgLQAIgLAAgWQAAgUgIgMQgKgLgQAAQgQAAgJALg");
	this.shape_530.setTransform(303.7,85.675);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#285C9B").s().p("AgyBPIAAgNQAGABAHAAQARAAAIgTIAGgRIguhwIATAAIAYBBQAIAUABAKIABAAIAGgRIAchOIASAAIgwCAQgHASgJAJQgKAHgOABQgIgBgHgCg");
	this.shape_531.setTransform(292.075,88.2);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#285C9B").s().p("AgOAaIAFgaIAFgZIASAAIABADIgIAXIgJAZg");
	this.shape_532.setTransform(278.45,91.425);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#285C9B").s().p("AgUAiIAAg8IgQAAIAAgLIARgIIAIgYIAOAAIAAAZIAgAAIAAASIggAAIAAA8QAAAJAEAEQAFAEAHAAQAJAAAIgDIAAASIgKADIgNABQghAAAAgkg");
	this.shape_533.setTransform(272.05,84.475);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#285C9B").s().p("AAaBQIAAhGQAAgMgGgHQgFgGgLAAQgPAAgGAJQgIAIAAAVIAAA5IgYAAIAAifIAYAAIAAApIgBAVIABAAQAFgJAKgEQAIgFALAAQApAAAAApIAABKg");
	this.shape_534.setTransform(261.4,83.325);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#285C9B").s().p("AgqBKQgMgHAAgPQAAgLAGgHQAHgHAMgDQgFgCgDgEQgDgGAAgEQAAgHADgDQAEgFAHgEQgJgEgFgIQgGgJAAgLQAAgSAMgLQALgKAWAAIAJABIAIABIAnAAIAAANIgTAEQADADABAGQACAFAAAGQAAASgMAKQgMAKgUgBIgKgBQgIAFAAAGQAAAEAEACQADABAKAAIATAAQATAAAJAJQAKAIAAAPQAAATgQALQgQAKgdAAQgXAAgMgJgAgbAlQgGAFAAAIQAAAIAHAEQAHAFANgBQATAAAJgFQAKgGAAgJQAAgIgFgCQgGgEgOAAIgRAAQgLAAgGAFgAgRg8QgGAGAAALQAAALAGAFQAFAGALAAQAUAAAAgWQAAgMgFgFQgGgGgJgBQgLABgFAGg");
	this.shape_535.setTransform(248.825,88.05);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#285C9B").s().p("AgMBOIAAhwIAYAAIAABwgAgJg2QgEgEAAgGQAAgGAEgEQADgDAGgBQAHABADADQAEAEgBAGQABAGgEAEQgDADgHAAQgGAAgDgDg");
	this.shape_536.setTransform(240.15,83.45);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#285C9B").s().p("AgiArQgPgPAAgbQAAgbAOgQQANgQAYAAQAWAAANAOQANAOAAAXIAAAMIhKAAQAAARAIAJQAJAJAOAAQAKAAAJgCQAJgCAJgEIAAATQgIAEgJACQgJACgMAAQgZAAgPgQgAAagLQAAgOgGgHQgHgHgLAAQgLAAgHAHQgHAHgBAOIAyAAIAAAAg");
	this.shape_537.setTransform(231.225,85.625);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#285C9B").s().p("AAYA5IgOg1IgKgmIAAAAIgJAmIgPA1IgbAAIgghxIAZAAIAOA4QAFAUACAPIABAAIADgRIAEgPIARg7IAZAAIARA7IAEAPIADAQIABAAQABgMAGgWIAOg4IAZAAIggBxg");
	this.shape_538.setTransform(216.575,85.625);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#285C9B").s().p("AgiArQgPgPAAgbQAAgbAOgQQANgQAYAAQAWAAANAOQANAOAAAXIAAAMIhKAAQAAARAIAJQAJAJAOAAQAKAAAJgCQAJgCAJgEIAAATQgIAEgJACQgJACgMAAQgZAAgPgQgAAagLQAAgOgGgHQgHgHgLAAQgLAAgHAHQgHAHgBAOIAyAAIAAAAg");
	this.shape_539.setTransform(196.575,85.625);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#285C9B").s().p("AgoA0IAAgVQATAJASAAQAVAAAAgNQAAgEgCgDQgDgDgGgDIgOgHQgUgHgHgHQgHgIAAgMQAAgPAMgIQAMgIATAAQAUAAASAIIgIATQgSgIgNAAQgSAAAAALQAAAFAFAEQAFAEAQAGQAOAFAGAEQAHAEADAGQADAGAAAIQAAARgMAJQgNAJgVAAQgXAAgNgHg");
	this.shape_540.setTransform(185.475,85.625);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#285C9B").s().p("AgbA0QgNgIgGgNQgHgNAAgSQAAgbAOgPQAPgQAYAAQAZAAAOAQQAPAQAAAaQAAAcgPAPQgOAQgZAAQgPAAgMgHgAgVgcQgHAKAAASQAAAnAcAAQAdAAAAgnQAAgmgdAAQgOAAgHAKg");
	this.shape_541.setTransform(173.925,85.625);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#285C9B").s().p("AgLBQIAAifIAXAAIAACfg");
	this.shape_542.setTransform(164.575,83.325);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#285C9B").s().p("AgbAzQgLgHgHgNQgFgNgBgSQAAgbAOgPQAOgPAXAAQAYAAANAQQAOAPABAaQgBAbgOAQQgNAPgYAAQgOAAgNgHgAgZggQgIALAAAVQAAAVAIAMQAJALAQAAQAQAAAKgLQAIgLAAgWQAAgUgIgMQgKgLgQAAQgQAAgJALg");
	this.shape_543.setTransform(149.9,85.675);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#285C9B").s().p("AgQAkIAAhCIgQAAIAAgIIAQgHIAHgYIAJAAIAAAaIAhAAIAAANIghAAIAABBQAAAKAFAGQAFAFAIAAIAJAAIAGgCIAAANIgIACIgJABQggAAAAgig");
	this.shape_544.setTransform(139.775,84.475);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#285C9B").s().p("AgfA5IAAhvIAOAAIACAVIABAAQAGgLAIgGQAJgGAKAAQAIAAAFABIgCAQIgMgCQgOAAgIALQgKALAAARIAAA7g");
	this.shape_545.setTransform(127.175,85.575);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#285C9B").s().p("AggArQgPgPAAgbQAAgaANgQQAOgQAVAAQAWAAAMAOQANAOAAAWIAAAKIhNAAQAAAUAKAKQAJAKARAAQASAAARgHIAAAPIgRAGQgHABgMAAQgYAAgOgPgAAdgKQAAgQgHgIQgHgJgOAAQgMAAgIAJQgIAJgBAPIA5AAIAAAAg");
	this.shape_546.setTransform(116.35,85.675);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#285C9B").s().p("AgkBCQgMgPAAgcQAAgbAMgPQAMgQAWAAQAWAAAMARIABAAIAAgIIgBgIIAAguIARAAIAACfIgNAAIgDgPIgBAAQgLARgXAAQgWAAgMgPgAgXgJQgIALAAAVQAAAWAIALQAIALAPAAQARAAAIgKQAHgJAAgWIAAgDQAAgXgIgKQgIgKgQAAQgPAAgIALg");
	this.shape_547.setTransform(103.675,83.425);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#285C9B").s().p("AgfA5IAAhvIAOAAIACAVIABAAQAGgLAIgGQAJgGAKAAQAIAAAFABIgCAQIgMgCQgOAAgIALQgKALAAARIAAA7g");
	this.shape_548.setTransform(94.025,85.575);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#285C9B").s().p("AgbAzQgLgHgHgNQgFgNAAgSQAAgbANgPQAOgPAXAAQAYAAAOAQQAOAPgBAaQABAbgOAQQgOAPgYAAQgPAAgMgHgAgYggQgJALAAAVQAAAVAJAMQAIALAQAAQARAAAIgLQAJgLAAgWQAAgUgJgMQgIgLgRAAQgQAAgIALg");
	this.shape_549.setTransform(82.7,85.675);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#285C9B").s().p("AAeA5IAAhHQAAgOgHgHQgFgHgOAAQgRAAgIAKQgIAJAAAWIAAA6IgRAAIAAhvIAOAAIACAPIABAAQAGgIAJgFQAJgEALAAQAUAAALAKQAKAJAAAWIAABIg");
	this.shape_550.setTransform(64.55,85.575);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#285C9B").s().p("AgIBLIAAiVIARAAIAACVg");
	this.shape_551.setTransform(55.125,83.8);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#285C9B").s().p("AgWAlIAAhBIgRAAIAAgMIASgJIAJgbIAPAAIAAAcIAjAAIAAAUIgjAAIAABBQABAKAEAFQAFAEAHAAQALAAAJgDIAAAUIgMADIgOABQgkAAAAgog");
	this.shape_552.setTransform(409.35,32.1);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#285C9B").s().p("AgmAwQgQgRAAgeQAAgdAPgSQAPgRAaAAQAYAAAOAPQAPAPAAAaIAAANIhSAAQAAASAKAKQAJAKAQAAQALAAAKgCQAJgDAKgEIAAAVQgJAFgKACQgJABgOAAQgbAAgRgQgAAdgMQAAgPgIgIQgHgIgMAAQgMAAgHAIQgIAIgBAPIA3AAIAAAAg");
	this.shape_553.setTransform(364.6,33.375);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#285C9B").s().p("AgrBIQgMgRAAgfQAAgdAMgRQAOgRAXAAQAXAAANASIACAAQgCgNAAgIIAAgtIAaAAIAACtIgUAAIgFgQIgBAAQgNASgXAAQgYAAgNgQgAgVgGQgIAKABAVQgBAUAIALQAHALAOAAQAQAAAIgJQAHgJAAgVIAAgDQAAgYgHgJQgIgKgQAAQgNAAgIAMg");
	this.shape_554.setTransform(325.75,30.975);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#285C9B").s().p("AAcA/IAAhLQAAgOgFgIQgHgHgMAAQgPAAgJAKQgHAKAAAWIAAA+IgbAAIAAh7IAVAAIADAQIACAAQAGgJAKgEQAKgFAMAAQAsAAAAAtIAABQg");
	this.shape_555.setTransform(311.75,33.275);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#285C9B").s().p("AgWAlIAAhBIgRAAIAAgMIASgJIAJgbIAQAAIAAAcIAjAAIAAAUIgjAAIAABBQgBAKAFAFQAFAEAIAAQAJAAAKgDIAAAUIgLADIgPABQgkAAAAgog");
	this.shape_556.setTransform(269.45,32.1);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#285C9B").s().p("AAcA/IAAhLQAAgOgGgIQgFgHgNAAQgQAAgHAKQgIAKAAAWIAAA+IgaAAIAAh7IAUAAIAEAQIABAAQAGgJAKgEQALgFALAAQAsAAAAAtIAABQg");
	this.shape_557.setTransform(257.8,33.275);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#285C9B").s().p("ABBA/IAAhLQAAgPgFgHQgGgHgLAAQgPAAgIAKQgHAKAAATIAABBIgaAAIAAhLQABgPgGgHQgFgHgMAAQgPAAgHAKQgHAKAAAWIAAA+IgaAAIAAh7IAUAAIADAQIACAAQAGgJAJgEQAKgFAMAAQAcAAAJATIABAAQAGgJAKgFQAKgFANAAQAWAAAKALQALALgBAXIAABQg");
	this.shape_558.setTransform(226.3,33.275);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#285C9B").s().p("AglAwQgRgRAAgeQAAgdAPgSQAQgRAZAAQAYAAAOAPQAPAPAAAaIAAANIhSAAQABASAJAKQAJAKAQAAQALAAAJgCQAKgDAKgEIAAAVQgJAFgKACQgJABgNAAQgdAAgPgQgAAdgMQAAgPgIgIQgHgIgMAAQgMAAgHAIQgIAIgBAPIA3AAIAAAAg");
	this.shape_559.setTransform(208.65,33.375);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#285C9B").s().p("AglA/IAAh7IAUAAIAEAWIACAAQAFgLAKgHQAJgGAMAAIANABIgDAZQgFgCgGAAQgQAAgJAKQgKALAAAQIAABAg");
	this.shape_560.setTransform(197.8,33.275);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#285C9B").s().p("AgqA0QgMgLAAgXIAAhQIAbAAIAABLQAAAPAGAHQAGAHAMAAQAQAAAIgKQAHgKAAgWIAAg+IAbAAIAAB7IgVAAIgDgQIgCAAQgFAIgKAFQgLAFgMAAQgWAAgLgLg");
	this.shape_561.setTransform(178.375,33.5);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#285C9B").s().p("AAeBbIAAg1IAAgLIABgIIgCAAQgLASgZAAQgXAAgMgQQgNgRAAgeQAAgdANgSQANgRAXAAQALAAAJAEQAKAFAGAJIABAAIAEgQIAVAAIAACzgAgVg5QgIALABAVQAAAqAcAAQARAAAHgKQAHgIAAgUIAAgEQAAgXgHgLQgIgJgQgBQgOAAgHAMg");
	this.shape_562.setTransform(163.65,36.05);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#285C9B").s().p("AglAwQgRgRAAgeQAAgdAPgSQAQgRAZAAQAYAAAOAPQAPAPAAAaIAAANIhSAAQABASAJAKQAJAKAQAAQALAAAJgCQAKgDAKgEIAAAVQgJAFgKACQgJABgNAAQgcAAgQgQgAAdgMQAAgPgIgIQgGgIgNAAQgMAAgHAIQgIAIgBAPIA3AAIAAAAg");
	this.shape_563.setTransform(150.25,33.375);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#285C9B").s().p("AglA/IAAh7IAUAAIAEAWIABAAQAGgLAKgHQAKgGALAAIANABIgDAZQgFgCgGAAQgQAAgJAKQgKALAAAQIAABAg");
	this.shape_564.setTransform(139.4,33.275);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#285C9B").s().p("AglA/IAAh7IAUAAIAEAWIACAAQAGgLAIgHQAKgGAMAAIANABIgCAZQgGgCgGAAQgQAAgJAKQgJALAAAQIAABAg");
	this.shape_565.setTransform(98.5,33.275);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#285C9B").s().p("AAcA/IAAhLQAAgOgFgIQgHgHgMAAQgPAAgJAKQgHAKAAAWIAAA+IgbAAIAAh7IAVAAIADAQIACAAQAGgJAKgEQAKgFAMAAQAsAAAAAtIAABQg");
	this.shape_566.setTransform(72.35,33.275);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#285C9B").s().p("AgtBSIAAijIBbAAIAAAXIhAAAIAAAsIA9AAIAAAVIg9AAIAAA0IBAAAIAAAXg");
	this.shape_567.setTransform(59,31.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394,p:{x:104.75,y:33.375}},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389,p:{x:162.05,y:33.275}},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385,p:{x:210.825}},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382,p:{x:251.075,y:30.875}},{t:this.shape_381,p:{x:261.275,y:33.375}},{t:this.shape_380},{t:this.shape_379,p:{x:281.375}},{t:this.shape_378,p:{x:291.2,y:33.375}},{t:this.shape_377,p:{x:303.475,y:33.375}},{t:this.shape_376,p:{x:321.175,y:33.375}},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373,p:{x:372.375}},{t:this.shape_372,p:{x:388.4,y:33.375}},{t:this.shape_371,p:{x:398.225}},{t:this.shape_370,p:{x:407.725}},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367,p:{x:59.025}},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363,p:{x:104.925}},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352,p:{x:260}},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346,p:{x:341.625}},{t:this.shape_345},{t:this.shape_344,p:{x:361.275}},{t:this.shape_343},{t:this.shape_342,p:{x:380.9}},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337,p:{x:436.825}},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332,p:{x:500.55}},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328,p:{x:555.425}},{t:this.shape_327},{t:this.shape_326,p:{x:588.375}},{t:this.shape_325,p:{x:601.85}},{t:this.shape_324,p:{x:613.775}},{t:this.shape_323},{t:this.shape_322,p:{x:635.975}},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312,p:{x:172.025,y:133.375}},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308,p:{x:223.875}},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302,p:{x:307.125,y:130.925}},{t:this.shape_301},{t:this.shape_300}]}).to({state:[{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_332,p:{x:76.3}},{t:this.shape_337,p:{x:87.525}},{t:this.shape_437,p:{x:101}},{t:this.shape_436},{t:this.shape_435},{t:this.shape_363,p:{x:139.925}},{t:this.shape_352,p:{x:149.75}},{t:this.shape_346,p:{x:162.175}},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_328,p:{x:203.575}},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_325,p:{x:249.95}},{t:this.shape_428},{t:this.shape_427},{t:this.shape_367,p:{x:291.825}},{t:this.shape_426,p:{x:303.725}},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423,p:{x:344.8}},{t:this.shape_302,p:{x:356.025,y:97.575}},{t:this.shape_422,p:{x:369}},{t:this.shape_326,p:{x:382.875}},{t:this.shape_421,p:{x:399.8}},{t:this.shape_420,p:{x:410.85}},{t:this.shape_342,p:{x:421.75}},{t:this.shape_419,p:{x:431.85}},{t:this.shape_344,p:{x:441.525}},{t:this.shape_418,p:{x:456.85}},{t:this.shape_312,p:{x:470.375,y:100.025}},{t:this.shape_417,p:{x:483.85}},{t:this.shape_324,p:{x:495.775}},{t:this.shape_416,p:{x:505.85}},{t:this.shape_322,p:{x:517.975}},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_308,p:{x:172.025}},{t:this.shape_311},{t:this.shape_310},{t:this.shape_415},{t:this.shape_414,p:{x:215.775,y:136.225}},{t:this.shape_381,p:{x:228.925,y:133.425}},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409,p:{x:301.525}},{t:this.shape_408},{t:this.shape_407,p:{x:324.8,y:130.925}},{t:this.shape_406,p:{x:336.45}},{t:this.shape_405},{t:this.shape_404,p:{x:368.925}},{t:this.shape_403,p:{x:375.325}},{t:this.shape_382,p:{x:381.725,y:130.925}},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_394,p:{x:446.3,y:133.425}},{t:this.shape_376,p:{x:459.175,y:133.425}},{t:this.shape_377,p:{x:471.875,y:133.425}},{t:this.shape_398,p:{x:484,y:133.425}}]},1).to({state:[{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_439},{t:this.shape_438},{t:this.shape_332,p:{x:76.3}},{t:this.shape_337,p:{x:87.525}},{t:this.shape_464},{t:this.shape_436},{t:this.shape_435},{t:this.shape_363,p:{x:139.925}},{t:this.shape_352,p:{x:149.75}},{t:this.shape_346,p:{x:162.175}},{t:this.shape_434},{t:this.shape_417,p:{x:178.3}},{t:this.shape_432},{t:this.shape_328,p:{x:203.575}},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_325,p:{x:249.95}},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426,p:{x:291.825}},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_367,p:{x:353.725}},{t:this.shape_421,p:{x:368.75}},{t:this.shape_302,p:{x:379.975,y:97.575}},{t:this.shape_460},{t:this.shape_326,p:{x:406.825}},{t:this.shape_459},{t:this.shape_458},{t:this.shape_342,p:{x:445.7}},{t:this.shape_457},{t:this.shape_344,p:{x:465.475}},{t:this.shape_456},{t:this.shape_312,p:{x:494.325,y:100.025}},{t:this.shape_437,p:{x:507.8}},{t:this.shape_324,p:{x:519.725}},{t:this.shape_455},{t:this.shape_322,p:{x:541.925}},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_308,p:{x:172.025}},{t:this.shape_311},{t:this.shape_310},{t:this.shape_415},{t:this.shape_414,p:{x:215.775,y:136.225}},{t:this.shape_381,p:{x:228.925,y:133.425}},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409,p:{x:301.525}},{t:this.shape_408},{t:this.shape_407,p:{x:324.8,y:130.925}},{t:this.shape_454},{t:this.shape_405},{t:this.shape_404,p:{x:368.925}},{t:this.shape_453},{t:this.shape_403,p:{x:381.725}},{t:this.shape_452},{t:this.shape_401},{t:this.shape_377,p:{x:430.025,y:133.425}},{t:this.shape_406,p:{x:439.95}},{t:this.shape_376,p:{x:450.775,y:133.425}},{t:this.shape_451},{t:this.shape_382,p:{x:475.325,y:130.925}},{t:this.shape_372,p:{x:485.15,y:133.425}}]},1).to({state:[{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_439},{t:this.shape_438},{t:this.shape_332,p:{x:76.3}},{t:this.shape_337,p:{x:87.525}},{t:this.shape_437,p:{x:101}},{t:this.shape_436},{t:this.shape_435},{t:this.shape_363,p:{x:139.925}},{t:this.shape_352,p:{x:149.75}},{t:this.shape_346,p:{x:162.175}},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_328,p:{x:203.575}},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_325,p:{x:249.95}},{t:this.shape_428},{t:this.shape_427},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_426,p:{x:344.675}},{t:this.shape_423,p:{x:360.55}},{t:this.shape_302,p:{x:371.775,y:97.575}},{t:this.shape_422,p:{x:384.75}},{t:this.shape_326,p:{x:398.625}},{t:this.shape_421,p:{x:415.55}},{t:this.shape_420,p:{x:426.6}},{t:this.shape_342,p:{x:437.5}},{t:this.shape_419,p:{x:447.6}},{t:this.shape_344,p:{x:457.275}},{t:this.shape_418,p:{x:472.6}},{t:this.shape_312,p:{x:486.125,y:100.025}},{t:this.shape_417,p:{x:499.6}},{t:this.shape_324,p:{x:511.525}},{t:this.shape_416,p:{x:521.6}},{t:this.shape_322,p:{x:533.725}},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_308,p:{x:172.025}},{t:this.shape_311},{t:this.shape_310},{t:this.shape_415},{t:this.shape_414,p:{x:215.775,y:136.225}},{t:this.shape_381,p:{x:228.925,y:133.425}},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_481},{t:this.shape_408},{t:this.shape_407,p:{x:324.8,y:130.925}},{t:this.shape_406,p:{x:336.45}},{t:this.shape_405},{t:this.shape_409,p:{x:368.925}},{t:this.shape_403,p:{x:375.325}},{t:this.shape_382,p:{x:381.725,y:130.925}},{t:this.shape_404,p:{x:394.075}},{t:this.shape_389,p:{x:404.6,y:133.325}},{t:this.shape_480},{t:this.shape_479},{t:this.shape_378,p:{x:439.7,y:133.425}},{t:this.shape_376,p:{x:452.575,y:133.425}},{t:this.shape_377,p:{x:465.275,y:133.425}},{t:this.shape_478,p:{x:477.4,y:133.425}}]},1).to({state:[{t:this.shape_567},{t:this.shape_566},{t:this.shape_398,p:{x:86.2,y:33.375}},{t:this.shape_565},{t:this.shape_385,p:{x:109.025}},{t:this.shape_414,p:{x:121.625,y:36.175}},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_379,p:{x:188.925}},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_478,p:{x:243.85,y:33.375}},{t:this.shape_557},{t:this.shape_556},{t:this.shape_377,p:{x:279.675,y:33.375}},{t:this.shape_376,p:{x:297.375,y:33.375}},{t:this.shape_555},{t:this.shape_554},{t:this.shape_373,p:{x:348.575}},{t:this.shape_553},{t:this.shape_371,p:{x:374.425}},{t:this.shape_370,p:{x:383.925}},{t:this.shape_407,p:{x:397.7,y:30.875}},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495}]},1).to({state:[{t:this.shape_567},{t:this.shape_566},{t:this.shape_398,p:{x:86.2,y:33.375}},{t:this.shape_565},{t:this.shape_385,p:{x:109.025}},{t:this.shape_414,p:{x:121.625,y:36.175}},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_379,p:{x:188.925}},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_478,p:{x:243.85,y:33.375}},{t:this.shape_557},{t:this.shape_556},{t:this.shape_377,p:{x:279.675,y:33.375}},{t:this.shape_376,p:{x:297.375,y:33.375}},{t:this.shape_555},{t:this.shape_554},{t:this.shape_373,p:{x:348.575}},{t:this.shape_553},{t:this.shape_371,p:{x:374.425}},{t:this.shape_370,p:{x:383.925}},{t:this.shape_407,p:{x:397.7,y:30.875}},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495}]},1).wait(3));

	// Instruction_text
	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#285C9B").s().p("AgIAMQgEgEgBgIQAAgHAEgDQAEgEAFAAQAGAAAEAEQADADAAAHQAAAHgDAEQgEAEgGAAQgFAAgDgDg");
	this.shape_568.setTransform(393.7,616.275);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#285C9B").s().p("AgSAnIAAhIIgSAAIAAgJIASgIIAIgaIAKAAIAAAdIAjAAIAAAOIgjAAIAABIQAAALAFAGQAFAGAKAAIAJgBIAIgCIAAAPIgJACIgLABQgjAAAAgmg");
	this.shape_569.setTransform(386.55,609.975);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#285C9B").s().p("AAhBXIAAhPQAAgOgHgIQgHgHgPAAQgSAAgJAKQgJALAAAXIAABAIgSAAIAAitIASAAIAAA0IgBAQIABAAQAGgJAKgFQAKgFAMAAQAXAAALALQALALAAAWIAABQg");
	this.shape_570.setTransform(375.575,608.725);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#285C9B").s().p("AgsBRQgNgIAAgRQAAgLAHgJQAHgHANgEQgEgCgDgFQgEgEAAgGQAAgGAEgEQAEgGAHgEQgJgEgHgKQgFgJgBgMQAAgUANgMQAMgLAWAAQAJABAIACIAqAAIAAAMIgXACQADAFADAFQADAHAAAIQAAASgNALQgMAKgVAAIgLgBQgLAHAAAJQAAAEAEADQAEACAKABIAVAAQAUAAALAIQAKAIAAARQAAAUgQAKQgQALgfAAQgYAAgNgJgAggAmQgHAGAAALQAAAKAIAGQAJAFAQAAQAWAAALgHQALgHAAgMQABgKgHgEQgGgEgRAAIgWAAQgMAAgHAGgAgWhFQgHAIAAAOQAAAMAHAHQAIAHANAAQAaAAAAgbQAAgbgbAAQgNAAgHAGg");
	this.shape_571.setTransform(362.1,613.95);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#285C9B").s().p("AgIBVIAAh6IARAAIAAB6gAgHg+QgDgDAAgGQAAgHADgDQAEgCADAAQAEAAAEACQADAEAAAGQAAAGgDADQgEADgEABQgDgBgEgDg");
	this.shape_572.setTransform(352.95,609);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAANAQQAOAPAAAZIAAALIhUAAQABAVAKALQAKAMATAAQAUAAASgJIAAARQgJAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgPAAQgNAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_573.setTransform(343.65,611.275);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#285C9B").s().p("AAfA+IgXhHIgIgfIAAAAIgHAfIgYBHIgVAAIgih6IATAAIATBFIAHAgIABAAIAEgQIAEgQIAXhFIAUAAIAVBFQAHAUACAMIABAAIADgMIAWhZIAUAAIgiB6g");
	this.shape_574.setTransform(328.25,611.3);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#285C9B").s().p("AgoBIQgNgRAAgeQAAgdANgRQAOgRAYAAQAYAAANASIACAAIgBgJIgBgIIAAgyIATAAIAACtIgPAAIgCgQIgCAAQgNASgYAAQgYAAgOgQgAgZgKQgJAMAAAXQAAAYAJAMQAJAMAQAAQASAAAJgKQAJgLgBgXIAAgEQABgZgJgLQgJgLgSAAQgQAAgJAMg");
	this.shape_575.setTransform(306,608.825);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#285C9B").s().p("AAhA/IAAhPQAAgPgHgHQgHgIgPAAQgSAAgJALQgJAKAAAYIAABAIgSAAIAAh6IAPAAIADARIABAAQAFgKALgFQAKgFAMAAQAWAAALALQALALAAAXIAABQg");
	this.shape_576.setTransform(292.325,611.175);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#285C9B").s().p("AgmA3QgKgKAAgRQAAglA6gCIAVgBIAAgHQAAgOgGgIQgHgGgNAAQgPAAgTAJIgGgOQAKgFALgDQAKgCAKAAQAWgBALAKQAKAKABAVIAABUIgPAAIgDgSIgBAAQgKAMgIADQgKAFgNAAQgSgBgKgIgAAMACQgVAAgKAHQgKAGAAANQAAAKAHAFQAFAFAMAAQAQAAAKgJQAJgJABgSIAAgLg");
	this.shape_577.setTransform(278.45,611.3);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#285C9B").s().p("AgqA4IAAgRQAIAEALADQAKADAJAAQAOAAAIgFQAIgFgBgJQAAgHgFgFQgHgGgRgHQgRgFgHgFQgIgFgDgGQgEgGABgIQgBgPAMgJQANgJAUAAQAUAAATAJIgHAPQgSgIgPAAQgNAAgGAEQgHAEAAAIQAAAFACADQADAEAGADIAUAJQAXAHAHAIQAIAIgBAMQAAARgMAKQgNAJgWAAQgYAAgOgIg");
	this.shape_578.setTransform(261.1,611.275);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAANAQQAOAPAAAZIAAALIhUAAQABAVAKALQAKAMATAAQAUAAATgJIAAARQgKAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_579.setTransform(249.15,611.275);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#285C9B").s().p("AgIBVIAAh6IARAAIAAB6gAgGg+QgEgDAAgGQAAgHAEgDQADgCADAAQAFAAADACQADAEAAAGQAAAGgDADQgDADgFABQgDgBgDgDg");
	this.shape_580.setTransform(239.75,609);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#285C9B").s().p("AgiA/IAAh6IAPAAIACAWIABAAQAHgMAJgGQAJgHAMAAQAIAAAGACIgCARQgIgCgGAAQgPAAgJANQgLAMAAASIAABBg");
	this.shape_581.setTransform(233.025,611.175);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#285C9B").s().p("AgdA4QgMgIgIgOQgGgOgBgUQAAgdAPgRQAPgRAaAAQAaAAAPASQAPARABAcQgBAegPARQgPARgaAAQgQAAgNgIgAgbgjQgKAMAAAXQAAAYAKAMQAKAMARAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgSAAgJAMg");
	this.shape_582.setTransform(220.6,611.275);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#285C9B").s().p("AgIBXIAAitIARAAIAACtg");
	this.shape_583.setTransform(210.775,608.725);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#285C9B").s().p("AgmA3QgLgKAAgRQAAglA7gCIAVgBIAAgHQAAgOgGgIQgGgGgOAAQgOAAgUAJIgFgOQAIgFALgDQALgCAKAAQAWgBAKAKQALAKAAAVIAABUIgNAAIgEgSIgBAAQgKAMgJADQgIAFgNAAQgTgBgKgIgAAMACQgVAAgKAHQgKAGAAANQAAAKAGAFQAGAFALAAQARAAAJgJQAKgJAAgSIAAgLg");
	this.shape_584.setTransform(201.1,611.3);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#285C9B").s().p("AgdAwQgPgRAAgeQABgeAPgRQAOgRAaAAQAKAAAIACQAKACAEADIgGAQIgNgEQgHgCgGAAQglAAAAAvQAAAWAKANQAJAMARAAQAQAAAQgHIAAARQgNAGgTAAQgaAAgOgQg");
	this.shape_585.setTransform(189.95,611.275);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#285C9B").s().p("AgSAnIAAhIIgSAAIAAgJIASgIIAIgaIAKAAIAAAdIAjAAIAAAOIgjAAIAABIQAAALAFAGQAFAGAKAAIAJgBIAIgCIAAAPIgJACIgLABQgjAAAAgmg");
	this.shape_586.setTransform(174.15,609.975);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#285C9B").s().p("AgnA0QgMgLAAgXIAAhPIAUAAIAABPQgBAPAHAGQAHAIAPAAQASAAAJgKQAJgLAAgYIAAg/IATAAIAAB6IgQAAIgCgRIgBAAQgHAJgKAFQgKAEgMABQgWAAgLgLg");
	this.shape_587.setTransform(163.05,611.4);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#285C9B").s().p("AgdA4QgMgIgIgOQgGgOgBgUQAAgdAPgRQAPgRAaAAQAaAAAPASQAPARABAcQgBAegPARQgPARgaAAQgQAAgNgIgAgbgjQgKAMABAXQgBAYAKAMQAKAMARAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgSAAgJAMg");
	this.shape_588.setTransform(149.15,611.275);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#285C9B").s().p("AgSBUQgKgEgGgKIgCAAIgEAQIgNAAIAAitIATAAIAAAqIgBAaIABAAQANgTAYAAQAZAAANARQANAQAAAeQAAAegOARQgNAQgYAAQgLAAgKgEgAgagLQgJALABAZQgBAaAJALQAJALASAAQARAAAJgNQAIgMAAgYQAAgYgIgKQgJgMgRAAQgTAAgIALg");
	this.shape_589.setTransform(135.55,608.825);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#285C9B").s().p("AgmA3QgKgKAAgRQAAglA6gCIAVgBIAAgHQAAgOgGgIQgHgGgNAAQgPAAgTAJIgGgOQAKgFALgDQAKgCAKAAQAWgBALAKQAKAKABAVIAABUIgPAAIgDgSIgBAAQgKAMgIADQgKAFgNAAQgSgBgKgIgAAMACQgVAAgKAHQgKAGAAANQAAAKAHAFQAFAFAMAAQAQAAAKgJQAJgJABgSIAAgLg");
	this.shape_590.setTransform(121.4,611.3);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAOgRQAPgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQAKAMASAAQAUAAAUgJIAAARQgKAEgJACQgJACgMAAQgaAAgQgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgBARIA/AAIAAAAg");
	this.shape_591.setTransform(103.05,611.275);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#285C9B").s().p("AgiA/IAAh6IAPAAIACAWIABAAQAHgMAJgGQAJgHAMAAQAIAAAGACIgCARQgIgCgGAAQgPAAgJANQgLAMAAASIAABBg");
	this.shape_592.setTransform(92.725,611.175);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#285C9B").s().p("AgdA4QgMgIgIgOQgGgOgBgUQAAgdAPgRQAPgRAaAAQAaAAAPASQAPARAAAcQAAAegPARQgPARgaAAQgQAAgNgIgAgbgjQgKAMABAXQgBAYAKAMQAKAMARAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgSAAgJAMg");
	this.shape_593.setTransform(80.3,611.275);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#285C9B").s().p("ABFA/IAAhPQAAgPgGgHQgHgIgNAAQgRAAgJAKQgIAKAAAVIAABEIgSAAIAAhPQAAgPgGgHQgGgIgOAAQgRAAgIALQgIAKAAAYIAABAIgTAAIAAh6IAPAAIADARIABAAQAFgJAKgGQAKgFALAAQAdAAAIAVIABAAQAGgJAKgGQALgGANAAQAVAAAKALQALALAAAXIAABQg");
	this.shape_594.setTransform(62.775,611.175);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#285C9B").s().p("AgnBIQgOgRAAgeQAAgdAOgRQANgRAYAAQAYAAANASIACAAIgBgJIgBgIIAAgyIATAAIAACtIgPAAIgDgQIgBAAQgNASgYAAQgYAAgNgQgAgZgKQgJAMAAAXQAAAYAJAMQAJAMAQAAQATAAAIgKQAJgLgBgXIAAgEQABgZgJgLQgJgLgSAAQgQAAgJAMg");
	this.shape_595.setTransform(897.65,575.475);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#285C9B").s().p("AAhA/IAAhPQAAgPgHgHQgHgIgPAAQgSAAgJALQgJAKAAAYIAABAIgSAAIAAh6IAPAAIADARIABAAQAFgKALgFQAKgFAMAAQAWAAALALQALALAAAXIAABQg");
	this.shape_596.setTransform(883.975,577.825);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#285C9B").s().p("AgmA2QgKgJAAgSQgBgkA7gBIAVgBIAAgIQAAgPgGgGQgHgHgNAAQgOAAgUAJIgGgOQAKgFALgDQAKgCAKgBQAWAAALAKQAKAKABAWIAABSIgPAAIgDgRIgBAAQgKALgIAFQgKADgNAAQgRABgLgKgAAMACQgVABgKAFQgKAHAAAMQAAALAHAFQAFAGAMAAQAQAAAKgKQAJgKABgRIAAgLg");
	this.shape_597.setTransform(870.1,577.95);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#285C9B").s().p("AgSAnIAAhIIgSAAIAAgJIASgIIAIgaIAKAAIAAAdIAjAAIAAAOIgjAAIAABIQAAALAFAGQAGAGAIAAIAKgBIAHgCIAAAPIgJACIgKABQgjAAAAgmg");
	this.shape_598.setTransform(860,576.625);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#285C9B").s().p("AgqA4IAAgRQAIAEALADQAKADAJAAQAOAAAIgFQAIgFgBgJQAAgHgFgFQgHgGgRgHQgRgFgHgFQgIgFgDgGQgEgGABgIQgBgPAMgJQANgJAUAAQAUAAATAJIgHAPQgSgIgPAAQgNAAgGAEQgHAEAAAIQAAAFACADQADAEAGADIAUAJQAXAHAHAIQAIAIgBAMQAAARgMAKQgNAJgWAAQgYAAgOgIg");
	this.shape_599.setTransform(850.6,577.925);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#285C9B").s().p("AgiA/IAAh6IAPAAIACAWIABAAQAHgMAJgGQAJgHAMAAQAIAAAGACIgCARQgIgCgGAAQgPAAgJANQgLAMAAASIAABBg");
	this.shape_600.setTransform(841.225,577.825);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAANAQQAOAPAAAZIAAALIhUAAQABAVAKALQAKAMATAAQAUAAASgJIAAARQgJAEgJACQgJACgMAAQgaAAgQgRgAAggLQAAgRgIgKQgHgJgQAAQgNAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_601.setTransform(829.3,577.925);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#285C9B").s().p("AgnBIQgOgRAAgeQAAgdAOgRQANgRAYAAQAYAAANASIACAAIgBgJIgBgIIAAgyIATAAIAACtIgPAAIgDgQIgBAAQgNASgYAAQgYAAgNgQgAgZgKQgJAMAAAXQAAAYAJAMQAIAMARAAQASAAAJgKQAIgLAAgXIAAgEQAAgZgIgLQgJgLgSAAQgRAAgIAMg");
	this.shape_602.setTransform(815.45,575.475);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#285C9B").s().p("AAhA/IAAhPQAAgPgHgHQgHgIgPAAQgSAAgJALQgJAKAAAYIAABAIgSAAIAAh6IAPAAIADARIABAAQAFgKALgFQAKgFAMAAQAWAAALALQALALAAAXIAABQg");
	this.shape_603.setTransform(801.775,577.825);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#285C9B").s().p("AgnA0QgMgKAAgYIAAhQIATAAIAABPQAAAPAHAIQAHAHAPAAQASAAAJgLQAJgKAAgYIAAhAIATAAIAAB6IgQAAIgCgQIgBAAQgHAJgJAFQgLAFgMgBQgWAAgLgKg");
	this.shape_604.setTransform(787.55,578.05);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#285C9B").s().p("AgdA4QgMgIgIgOQgHgOAAgUQABgdAPgRQAOgRAaAAQAaAAAPASQAPARABAcQgBAegPARQgPARgaAAQgQAAgNgIgAgbgjQgKAMAAAXQAAAYAKAMQAKAMARAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgRAAgKAMg");
	this.shape_605.setTransform(767.7,577.925);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#285C9B").s().p("AgSAnIAAhIIgRAAIAAgJIARgIIAIgaIAKAAIAAAdIAkAAIAAAOIgkAAIAABIQAAALAFAGQAFAGAKAAIAJgBIAIgCIAAAPIgJACIgLABQgjAAAAgmg");
	this.shape_606.setTransform(756.65,576.625);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#285C9B").s().p("AglAwQgRgRAAgeQAAgdAPgSQAQgRAZAAQAYAAAOAPQAPAPAAAaIAAANIhSAAQABASAJAKQAJAKAQAAQALAAAKgCQAJgDAKgEIAAAVQgJAFgKACQgKABgMAAQgdAAgPgQgAAdgMQAAgPgIgIQgHgIgMAAQgMAAgHAIQgIAIgBAPIA3AAIAAAAg");
	this.shape_607.setTransform(740.1,577.875);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#285C9B").s().p("AgMBXIAAitIAZAAIAACtg");
	this.shape_608.setTransform(730.275,575.375);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#285C9B").s().p("AgpA3QgLgKAAgSQAAgUAPgIQAOgKAcgBIAWgBIAAgGQAAgMgGgGQgGgGgLAAQgJAAgJADIgQAGIgJgSQAKgGAMgCQAMgDAKAAQAYAAAMAKQAMAKAAAXIAABSIgTAAIgFgRIgBAAQgJALgJAEQgKAEgNAAQgSAAgKgJgAAKAEQgRAAgJAGQgIAFAAAMQAAAIAFAFQAFAEAKAAQANAAAJgIQAIgIAAgOIAAgLg");
	this.shape_609.setTransform(720.025,577.875);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#285C9B").s().p("AggAwQgPgQAAgfQAAgfAQgQQAPgRAcAAQAUAAAQAHIgIAVQgRgGgLAAQgfAAgBAqQAAAUAIALQAJAKAOAAQASAAAPgIIAAAXQgHAEgHACQgJABgLAAQgbAAgPgQg");
	this.shape_610.setTransform(708.3,577.875);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#285C9B").s().p("AgtA5IAAgXQAWAKATAAQAYAAAAgOQAAgFgDgDQgDgDgGgEIgQgHQgWgIgHgIQgIgIAAgOQAAgQANgIQANgJAVAAQAWAAAUAJIgJAUQgUgJgOAAQgUAAAAAMQAAAGAGAEQAFAEASAHQAPAGAHAEQAHAFADAGQAEAHAAAJQAAASgOAKQgNAJgYAAQgYAAgQgHg");
	this.shape_611.setTransform(696.925,577.875);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAANAQQAOAPAAAZIAAALIhUAAQABAVAKALQAKAMATAAQAUAAASgJIAAARQgJAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgPAAQgNAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_612.setTransform(678.9,577.925);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#285C9B").s().p("AAhBXIAAhPQAAgOgHgIQgHgHgPAAQgSAAgJAKQgJALAAAXIAABAIgSAAIAAitIASAAIAAA0IgBAQIABAAQAGgJAKgFQAKgFAMAAQAXAAALALQALALAAAWIAABQg");
	this.shape_613.setTransform(665.425,575.375);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#285C9B").s().p("AgSAnIAAhIIgSAAIAAgJIASgIIAIgaIAKAAIAAAdIAjAAIAAAOIgjAAIAABIQAAALAFAGQAGAGAJAAIAJgBIAHgCIAAAPIgJACIgKABQgjAAAAgmg");
	this.shape_614.setTransform(654.2,576.625);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#285C9B").s().p("AAhA/IAAhPQAAgPgHgHQgHgIgPAAQgSAAgJALQgJAKAAAYIAABAIgSAAIAAh6IAPAAIADARIABAAQAFgKALgFQAKgFAMAAQAWAAALALQALALAAAXIAABQg");
	this.shape_615.setTransform(637.275,577.825);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#285C9B").s().p("AgdA4QgNgIgHgOQgHgOAAgUQAAgdAQgRQAOgRAaAAQAaAAAPASQAPARABAcQgBAegPARQgPARgaAAQgQAAgNgIgAgbgjQgKAMAAAXQAAAYAKAMQAKAMARAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgRAAgKAMg");
	this.shape_616.setTransform(623.25,577.925);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#285C9B").s().p("AgZBkQAPgVAJgaQAHgaAAgaQAAgbgHgaQgIgagQgVIASAAQAPATAJAaQAJAaAAAdQAAAdgJAaQgJAZgPATg");
	this.shape_617.setTransform(606.85,577.725);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#DD4340").s().p("AgoBIQgNgRAAgeQAAgdANgRQAOgRAYAAQAYAAAOASIABAAIgBgJIAAgIIAAgyIASAAIAACtIgPAAIgDgQIAAAAQgNASgZAAQgYAAgOgQgAgZgKQgJAMAAAXQAAAYAJAMQAIAMARAAQASAAAJgKQAJgLAAgXIAAgEQAAgZgJgLQgJgLgSAAQgRAAgIAMg");
	this.shape_618.setTransform(596.2,575.475);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#DD4340").s().p("AgjAvQgQgQAAgeQAAgdAOgRQAPgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQALAMARAAQAVAAATgJIAAARQgKAEgJACQgJACgMAAQgaAAgQgRgAAggLQAAgRgIgKQgHgJgPAAQgOAAgJAKQgIAJgCARIA/AAIAAAAg");
	this.shape_619.setTransform(583.1,577.925);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#DD4340").s().p("AgiA/IAAh6IAPAAIACAWIABAAQAHgMAJgGQAJgHAMAAQAIAAAGACIgCARQgIgCgGAAQgPAAgJANQgLAMAAASIAABBg");
	this.shape_620.setTransform(572.775,577.825);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#285C9B").s().p("AgQAcIAHgcIAFgbIATAAIACACIgIAZIgLAcg");
	this.shape_621.setTransform(558.1,584.25);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#40B8AF").s().p("AAhA/IAAhPQAAgPgHgHQgHgIgPAAQgSAAgJALQgJAKAAAYIAABAIgSAAIAAh6IAPAAIADARIABAAQAFgKALgFQAKgFAMAAQAWAAALALQALALAAAXIAABQg");
	this.shape_622.setTransform(548.725,577.825);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#40B8AF").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAANAQQAOAPAAAZIAAALIhUAAQABAVAKALQALAMASAAQATAAATgJIAAARQgJAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgPAAQgNAAgJAKQgIAJgCARIA/AAIAAAAg");
	this.shape_623.setTransform(535.2,577.925);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#40B8AF").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAANAQQAOAPAAAZIAAALIhUAAQABAVAKALQAKAMATAAQAUAAATgJIAAARQgKAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_624.setTransform(522.3,577.925);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#40B8AF").s().p("AgiA/IAAh6IAPAAIACAWIABAAQAHgMAJgGQAJgHAMAAQAIAAAGACIgCARQgIgCgGAAQgPAAgJANQgLAMAAASIAABBg");
	this.shape_625.setTransform(511.975,577.825);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#40B8AF").s().p("AgsBSQgNgJAAgRQAAgMAHgHQAIgIANgEQgGgCgCgEQgEgFAAgFQAAgHAEgFQAEgFAHgFQgJgDgHgJQgFgKAAgMQgBgVAMgKQANgLAWAAQAIAAAJACIAqAAIAAALIgXADQAEAFACAGQACAGABAIQAAASgNALQgMALgVAAIgKgCQgMAHAAAIQAAAFAEADQAEACAKAAIAVAAQAUAAALAJQALAIgBARQAAAUgQAKQgRAMgeAAQgYgBgNgIgAggAnQgHAFAAAMQAAAJAJAGQAHAFAQAAQAXAAALgHQAMgHgBgMQAAgKgFgEQgHgEgRAAIgVAAQgNAAgHAHgAgWhEQgHAGAAAOQAAANAIAHQAGAGAOAAQAaABAAgbQAAgbgbgBQgNAAgHAIg");
	this.shape_626.setTransform(500.1,580.6);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#285C9B").s().p("AgQAcIAHgcIAFgbIAUAAIABACIgJAZIgKAcg");
	this.shape_627.setTransform(484.7,584.25);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#00A6E4").s().p("AgjAvQgQgQAAgeQAAgdAOgRQAPgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQALAMARAAQAVAAASgJIAAARQgJAEgJACQgJACgMAAQgaAAgQgRgAAggLQAAgRgIgKQgHgJgQAAQgNAAgJAKQgIAJgCARIA/AAIAAAAg");
	this.shape_628.setTransform(475.9,577.925);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#00A6E4").s().p("AgnA0QgMgKAAgYIAAhQIAUAAIAABPQgBAPAHAIQAHAHAPAAQASAAAJgLQAJgKAAgYIAAhAIATAAIAAB6IgQAAIgCgQIgBAAQgHAJgKAFQgKAFgMgBQgWAAgLgKg");
	this.shape_629.setTransform(462.3,578.05);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#00A6E4").s().p("AgIBXIAAitIARAAIAACtg");
	this.shape_630.setTransform(452.425,575.375);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#00A6E4").s().p("AgSBUQgKgEgHgKIgBAAIgEAQIgNAAIAAitIASAAIAAAqIgBAaIABAAQANgTAZAAQAZAAANARQANAQAAAeQAAAegNARQgOAQgYAAQgLAAgKgEgAgagLQgJALAAAZQAAAaAJALQAIALATAAQARAAAIgNQAJgMAAgYQAAgYgJgKQgIgMgSAAQgSAAgIALg");
	this.shape_631.setTransform(442.85,575.475);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#285C9B").s().p("AAIBkQgQgTgIgZQgJgaAAgdQAAgdAJgaQAIgaAQgTIASAAQgQAVgIAaQgHAaAAAbQAAAaAHAaQAIAaAQAVg");
	this.shape_632.setTransform(432.15,577.725);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#285C9B").s().p("AgrA4IAAgRQAJAEALADQAKADAKAAQANAAAIgFQAHgFABgJQAAgHgHgFQgGgGgRgHQgRgFgHgFQgIgFgDgGQgEgGAAgIQAAgPANgJQAMgJAUAAQAUAAATAJIgGAPQgTgIgPAAQgNAAgGAEQgHAEAAAIQAAAFADADQACAEAGADIAVAJQAVAHAIAIQAHAIAAAMQABARgNAKQgNAJgWAAQgZAAgOgIg");
	this.shape_633.setTransform(417.3,577.925);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#285C9B").s().p("AgiA/IAAh6IAPAAIACAWIABAAQAHgMAJgGQAJgHAMAAQAIAAAGACIgCARQgIgCgGAAQgPAAgJANQgLAMAAASIAABBg");
	this.shape_634.setTransform(407.925,577.825);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#285C9B").s().p("AgoA0QgLgKAAgYIAAhQIATAAIAABPQABAPAGAIQAHAHAOAAQATAAAJgLQAJgKAAgYIAAhAIASAAIAAB6IgPAAIgDgQIgBAAQgGAJgJAFQgLAFgMgBQgWAAgMgKg");
	this.shape_635.setTransform(395.3,578.05);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#285C9B").s().p("AgdA4QgMgIgHgOQgIgOABgUQAAgdAPgRQAPgRAZAAQAaAAAQASQAPARAAAcQAAAegPARQgQARgaAAQgQAAgNgIgAgbgjQgKAMAAAXQAAAYAKAMQAJAMASAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgSAAgJAMg");
	this.shape_636.setTransform(381.4,577.925);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#285C9B").s().p("AgIBXIAAitIARAAIAACtg");
	this.shape_637.setTransform(371.575,575.375);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#285C9B").s().p("AgdA4QgMgIgIgOQgGgOAAgUQAAgdAOgRQAPgRAaAAQAaAAAQASQAPARgBAcQABAegPARQgQARgaAAQgQAAgNgIgAgbgjQgJAMAAAXQAAAYAJAMQAKAMARAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgRAAgKAMg");
	this.shape_638.setTransform(361.75,577.925);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#285C9B").s().p("AgdAwQgOgRAAgeQAAgeAOgRQAPgRAbAAQAJAAAJACQAJACAEADIgFAQIgOgEQgHgCgGAAQgkAAAAAvQgBAWAKANQAJAMARAAQAPAAAQgHIAAARQgMAGgSAAQgaAAgPgQg");
	this.shape_639.setTransform(349.65,577.925);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#285C9B").s().p("AgSAnIAAhIIgRAAIAAgJIARgIIAIgaIAKAAIAAAdIAkAAIAAAOIgkAAIAABIQAAALAFAGQAFAGAJAAIAKgBIAHgCIAAAPIgIACIgLABQgjAAAAgmg");
	this.shape_640.setTransform(333.85,576.625);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#285C9B").s().p("AAhA/IAAhPQAAgPgHgHQgHgIgPAAQgSAAgJALQgJAKAAAYIAABAIgSAAIAAh6IAPAAIADARIABAAQAFgKALgFQAKgFAMAAQAWAAALALQALALAAAXIAABQg");
	this.shape_641.setTransform(322.875,577.825);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAANAQQAOAPAAAZIAAALIhUAAQABAVAKALQALAMASAAQATAAAUgJIAAARQgKAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_642.setTransform(309.35,577.925);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#285C9B").s().p("AgiA/IAAh6IAPAAIACAWIABAAQAHgMAJgGQAJgHAMAAQAIAAAGACIgCARQgIgCgGAAQgPAAgJANQgLAMAAASIAABBg");
	this.shape_643.setTransform(299.025,577.825);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAOgRQAPgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQAKAMASAAQAUAAAUgJIAAARQgKAEgJACQgJACgMAAQgaAAgQgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgBARIA/AAIAAAAg");
	this.shape_644.setTransform(287.1,577.925);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#285C9B").s().p("AgTBYIAAhsIgWAAIAAgIIAWgHIAAgHQAAgtAmAAQAKAAANAEIgFAPQgLgEgHABQgLAAgFAGQgEAHAAAQIAAAIIAeAAIAAAOIgeAAIAABsg");
	this.shape_645.setTransform(277.425,575.3);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#285C9B").s().p("AgTBYIAAhsIgWAAIAAgIIAWgHIAAgHQAAgtAmAAQAKAAANAEIgFAPQgLgEgHABQgLAAgFAGQgEAHAAAQIAAAIIAeAAIAAAOIgeAAIAABsg");
	this.shape_646.setTransform(269.675,575.3);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#285C9B").s().p("AgIBUIAAh6IASAAIAAB6gAgHg9QgDgEAAgGQAAgGADgDQADgEAEAAQAFAAADAEQADADAAAGQAAAGgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_647.setTransform(262.2,575.65);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#285C9B").s().p("AgoBIQgNgRAAgeQAAgdANgRQAOgRAYAAQAYAAAOASIABAAIgBgJIAAgIIAAgyIASAAIAACtIgPAAIgCgQIgBAAQgNASgZAAQgYAAgOgQgAgZgKQgJAMAAAXQAAAYAJAMQAJAMAQAAQASAAAJgKQAJgLAAgXIAAgEQAAgZgJgLQgJgLgSAAQgRAAgIAMg");
	this.shape_648.setTransform(251.95,575.475);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAOgRQAPgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQALAMARAAQAVAAASgJIAAARQgJAEgJACQgJACgMAAQgaAAgQgRgAAggLQAAgRgIgKQgHgJgQAAQgNAAgJAKQgIAJgCARIA/AAIAAAAg");
	this.shape_649.setTransform(232.9,577.925);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAANAQQAOAPAAAZIAAALIhUAAQABAVAKALQAKAMATAAQATAAATgJIAAARQgJAEgJACQgJACgMAAQgaAAgQgRgAAggLQAAgRgIgKQgHgJgQAAQgNAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_650.setTransform(220,577.925);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#285C9B").s().p("AgiA/IAAh6IAPAAIACAWIABAAQAHgMAJgGQAJgHAMAAQAIAAAGACIgCARQgIgCgGAAQgPAAgJANQgLAMAAASIAABBg");
	this.shape_651.setTransform(209.675,577.825);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#285C9B").s().p("AAhBXIAAhPQAAgOgHgIQgHgHgPAAQgSAAgJAKQgJALAAAXIAABAIgSAAIAAitIASAAIAAA0IgBAQIABAAQAGgJAKgFQAKgFAMAAQAXAAALALQALALAAAWIAABQg");
	this.shape_652.setTransform(197.175,575.375);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#285C9B").s().p("AgSAnIAAhIIgRAAIAAgJIARgIIAIgaIAKAAIAAAdIAkAAIAAAOIgkAAIAABIQAAALAFAGQAFAGAKAAIAJgBIAIgCIAAAPIgJACIgLABQgjAAAAgmg");
	this.shape_653.setTransform(185.95,576.625);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAANAQQAOAPAAAZIAAALIhUAAQABAVAKALQAKAMATAAQATAAATgJIAAARQgJAEgJACQgJACgMAAQgaAAgQgRgAAggLQAAgRgIgKQgHgJgQAAQgNAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_654.setTransform(169.6,577.925);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#285C9B").s().p("AAhBXIAAhPQAAgOgHgIQgHgHgPAAQgSAAgJAKQgJALAAAXIAABAIgSAAIAAitIASAAIAAA0IgBAQIABAAQAGgJAKgFQAKgFAMAAQAXAAALALQALALAAAWIAABQg");
	this.shape_655.setTransform(156.125,575.375);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#285C9B").s().p("AgSAnIAAhIIgSAAIAAgJIASgIIAIgaIAKAAIAAAdIAjAAIAAAOIgjAAIAABIQAAALAFAGQAFAGAKAAIAJgBIAIgCIAAAPIgJACIgLABQgjAAAAgmg");
	this.shape_656.setTransform(144.9,576.625);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#285C9B").s().p("AAhA/IAAhPQAAgPgHgHQgHgIgPAAQgSAAgJALQgJAKAAAYIAABAIgSAAIAAh6IAPAAIADARIABAAQAFgKALgFQAKgFAMAAQAWAAALALQALALAAAXIAABQg");
	this.shape_657.setTransform(127.975,577.825);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#285C9B").s().p("AgdA4QgMgIgIgOQgGgOgBgUQAAgdAPgRQAPgRAaAAQAaAAAPASQAPARABAcQgBAegPARQgPARgaAAQgQAAgNgIgAgbgjQgKAMAAAXQAAAYAKAMQAKAMARAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgSAAgJAMg");
	this.shape_658.setTransform(113.95,577.925);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#285C9B").s().p("AAaBXIgqg6IgOAMIAAAuIgSAAIAAitIASAAIAABbIgBATIABAAIAPgSIAmgpIAXAAIgxA0IA0BGg");
	this.shape_659.setTransform(95.925,575.375);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#285C9B").s().p("AgdAwQgPgRAAgeQABgeAPgRQAOgRAbAAQAIAAAKACQAIACAFADIgGAQIgNgEQgHgCgGAAQglAAAAAvQAAAWAKANQAJAMARAAQAQAAAQgHIAAARQgNAGgTAAQgaAAgOgQg");
	this.shape_660.setTransform(83.85,577.925);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#285C9B").s().p("AgIBUIAAh6IARAAIAAB6gAgHg9QgDgEAAgGQAAgGADgDQADgEAEAAQAEAAAEAEQADADAAAGQAAAGgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_661.setTransform(75.2,575.65);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#285C9B").s().p("AgIBXIAAitIARAAIAACtg");
	this.shape_662.setTransform(69.425,575.375);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#285C9B").s().p("AgpA+QgUgWAAgoQAAgYAKgUQAJgTASgKQASgKAXAAQAaAAATAJIgIARQgTgJgSAAQgaAAgQASQgQASAAAeQABAgAPASQAOASAcAAQARAAAWgHIAAARQgRAGgaAAQgiAAgUgWg");
	this.shape_663.setTransform(59.6,575.875);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#285C9B").s().p("AgJAMQgDgEAAgIQgBgHAEgDQADgEAGAAQAHAAADAEQADADABAHQgBAHgDAEQgEAEgGAAQgFAAgEgDg");
	this.shape_664.setTransform(936.7,582.925);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#285C9B").s().p("AgsBSQgNgJAAgRQAAgMAHgHQAIgIANgEQgGgCgCgEQgEgFAAgFQAAgHAEgFQAEgFAHgFQgJgDgHgJQgFgKAAgMQgBgVAMgKQANgLAWAAQAIAAAJACIAqAAIAAALIgXADQAEAFACAGQACAGABAIQgBASgMALQgMALgVAAIgKgCQgMAHAAAIQAAAFAEADQAEACAKAAIAVAAQAUAAALAJQALAIgBARQAAAUgQAKQgRAMgeAAQgYgBgNgIgAggAnQgHAFAAAMQAAAJAJAGQAHAFAQAAQAXAAALgHQALgHAAgMQAAgKgFgEQgHgEgRAAIgVAAQgNAAgHAHgAgWhEQgHAGAAAOQAAANAIAHQAGAGAOAAQAaABAAgbQAAgbgbgBQgNAAgHAIg");
	this.shape_665.setTransform(905.1,580.6);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#285C9B").s().p("AgIBUIAAh6IASAAIAAB6gAgGg9QgEgEAAgGQAAgGAEgDQADgEADAAQAEAAAEAEQADADAAAGQAAAGgDAEQgEADgEAAQgDAAgDgDg");
	this.shape_666.setTransform(895.95,575.65);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAOgRQAPgSAYAAQAXAAANAQQAOAPAAAZIAAALIhUAAQABAVAKALQALAMARAAQAUAAATgJIAAARQgJAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgHgJgQAAQgNAAgJAKQgIAJgCARIA/AAIAAAAg");
	this.shape_667.setTransform(886.65,577.925);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#285C9B").s().p("AAfA9IgXhHIgIgeIAAAAIgIAeIgXBHIgWAAIghh6IAUAAIASBGIAHAhIABAAIAEgRIAEgQIAXhGIATAAIAXBGQAFATADAOIABAAIADgNIAXhaIATAAIgiB6g");
	this.shape_668.setTransform(871.25,577.95);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#285C9B").s().p("AgoBIQgNgRAAgeQAAgdANgRQAOgRAYAAQAYAAAOASIABAAIgBgJIAAgIIAAgyIASAAIAACtIgPAAIgCgQIgBAAQgNASgZAAQgYAAgOgQgAgZgKQgJAMAAAXQAAAYAJAMQAIAMARAAQATAAAIgKQAJgLAAgXIAAgEQAAgZgJgLQgJgLgSAAQgQAAgJAMg");
	this.shape_669.setTransform(849,575.475);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#285C9B").s().p("AgmA2QgLgJAAgSQABgkA6gBIAVgBIAAgIQAAgPgGgGQgHgHgNAAQgPAAgTAJIgFgOQAIgFALgDQALgCAKgBQAWAAAKAKQAMAKgBAWIAABSIgNAAIgEgRIgBAAQgJALgKAFQgJADgMAAQgTABgKgKgAAMACQgVABgKAFQgKAHAAAMQAAALAGAFQAHAGAKAAQARAAAJgKQALgKgBgRIAAgLg");
	this.shape_670.setTransform(821.45,577.95);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#285C9B").s().p("AgrA4IAAgRQAKAEAKADQAKADAJAAQAOAAAIgFQAIgFAAgJQAAgHgHgFQgGgGgRgHQgRgFgHgFQgHgFgEgGQgDgGgBgIQABgPALgJQANgJAUAAQAUAAATAJIgGAPQgTgIgPAAQgMAAgHAEQgHAEAAAIQAAAFACADQADAEAGADIAVAJQAVAHAIAIQAIAIAAAMQAAARgNAKQgNAJgWAAQgZAAgOgIg");
	this.shape_671.setTransform(804.1,577.925);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#285C9B").s().p("AgIBUIAAh6IASAAIAAB6gAgGg9QgEgEAAgGQAAgGAEgDQADgEADAAQAEAAAEAEQADADAAAGQAAAGgDAEQgEADgEAAQgDAAgDgDg");
	this.shape_672.setTransform(716.95,575.65);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#285C9B").s().p("AgoA0QgLgKABgYIAAhQIATAAIAABPQAAAPAGAIQAHAHAOAAQATAAAJgLQAJgKAAgYIAAhAIASAAIAAB6IgPAAIgDgQIgBAAQgFAJgLAFQgJAFgNgBQgWAAgMgKg");
	this.shape_673.setTransform(706.95,578.05);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#285C9B").s().p("AAjBbIAAg1QABgMABgHIgCAAQgMASgZAAQgYAAgNgQQgOgRAAgdQAAgeAOgSQANgQAYAAQAYAAAOATIABAAIACgRIAPAAIAACygAgZg9QgJANAAAXQAAAYAJALQAIAMARAAQASAAAIgKQAJgLAAgWIAAgEQAAgagIgLQgJgMgSAAQgRAAgIANg");
	this.shape_674.setTransform(692.6,580.6);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAOgRQAPgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQAKAMASAAQAUAAAUgJIAAARQgKAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgBARIA/AAIAAAAg");
	this.shape_675.setTransform(679.5,577.925);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#285C9B").s().p("Ag3BXIAAgPQAGACAIAAQATAAAIgWIAHgSIgyh6IAUAAIAbBGQAJAXABALIABAAIAGgTIAfhVIAUAAIg1CLQgHAVgKAIQgLAJgPAAQgJAAgIgCg");
	this.shape_676.setTransform(651.925,580.725);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#285C9B").s().p("AgsBSQgNgJAAgRQAAgMAHgHQAIgIANgEQgFgCgEgEQgDgFAAgFQAAgHAEgFQADgFAIgFQgKgDgFgJQgHgKABgMQgBgVAMgKQANgLAWAAQAIAAAIACIArAAIAAALIgXADQADAFADAGQADAGgBAIQAAASgMALQgNALgUAAIgKgCQgMAHAAAIQAAAFAEADQAEACAKAAIAVAAQAUAAALAJQALAIAAARQAAAUgRAKQgRAMgeAAQgYgBgNgIgAggAnQgHAFAAAMQAAAJAJAGQAHAFARAAQAWAAALgHQAMgHAAgMQgBgKgGgEQgGgEgRAAIgVAAQgNAAgHAHgAgWhEQgHAGAAAOQAAANAIAHQAGAGANAAQAbABAAgbQAAgbgbgBQgNAAgHAIg");
	this.shape_677.setTransform(639.8,580.6);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAANAQQAOAPAAAZIAAALIhUAAQABAVAKALQAKAMATAAQATAAATgJIAAARQgJAEgJACQgJACgMAAQgaAAgQgRgAAggLQAAgRgIgKQgHgJgQAAQgNAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_678.setTransform(590.8,577.925);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#285C9B").s().p("AgoA0QgLgKABgYIAAhQIASAAIAABPQABAPAGAIQAHAHAOAAQATAAAJgLQAJgKAAgYIAAhAIASAAIAAB6IgPAAIgDgQIgBAAQgGAJgJAFQgLAFgMgBQgWAAgMgKg");
	this.shape_679.setTransform(563.15,578.05);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#285C9B").s().p("AgdA4QgMgIgHgOQgIgOAAgUQABgdAPgRQAPgRAZAAQAaAAAQASQAPARAAAcQAAAegPARQgQARgaAAQgQAAgNgIgAgbgjQgKAMAAAXQAAAYAKAMQAJAMASAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgSAAgJAMg");
	this.shape_680.setTransform(549.25,577.925);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#285C9B").s().p("AgSBUQgKgEgHgKIgBAAIgEAQIgNAAIAAitIASAAIAAAqIgBAaIABAAQANgTAZAAQAZAAANARQANAQAAAeQAAAegNARQgOAQgYAAQgLAAgKgEgAgagLQgJALAAAZQAAAaAJALQAIALATAAQARAAAIgNQAJgMAAgYQAAgYgJgKQgIgMgSAAQgSAAgIALg");
	this.shape_681.setTransform(535.65,575.475);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#285C9B").s().p("AgmA2QgLgJAAgSQAAgkA7gBIAVgBIAAgIQAAgPgGgGQgGgHgOAAQgOAAgUAJIgFgOQAJgFAKgDQALgCAKgBQAWAAAKAKQALAKAAAWIAABSIgNAAIgEgRIgBAAQgKALgJAFQgIADgNAAQgTABgKgKgAAMACQgVABgKAFQgKAHAAAMQAAALAGAFQAGAGALAAQARAAAJgKQAKgKAAgRIAAgLg");
	this.shape_682.setTransform(521.5,577.95);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAANAQQAOAPAAAZIAAALIhUAAQABAVAKALQAKAMATAAQATAAATgJIAAARQgJAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgHgJgQAAQgNAAgJAKQgIAJgDARIBAAAIAAAAg");
	this.shape_683.setTransform(503.15,577.925);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#285C9B").s().p("ABFA/IAAhPQAAgPgGgHQgHgIgNAAQgRAAgJAKQgIAKAAAVIAABEIgSAAIAAhPQAAgPgGgHQgGgIgOAAQgRAAgIALQgIAKAAAYIAABAIgTAAIAAh6IAPAAIADARIABAAQAFgJAKgGQAKgFALAAQAdAAAIAVIABAAQAGgJAKgGQALgGANAAQAVAAAKALQALALAAAXIAABQg");
	this.shape_684.setTransform(462.875,577.825);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#285C9B").s().p("AgnBIQgOgRAAgeQAAgdAOgRQANgRAYAAQAYAAAOASIABAAIgBgJIAAgIIAAgyIASAAIAACtIgPAAIgDgQIAAAAQgOASgYAAQgYAAgNgQgAgZgKQgJAMAAAXQAAAYAJAMQAIAMARAAQASAAAJgKQAIgLABgXIAAgEQgBgZgIgLQgJgLgSAAQgRAAgIAMg");
	this.shape_685.setTransform(438.8,575.475);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#285C9B").s().p("AgmA2QgLgJAAgSQAAgkA7gBIAVgBIAAgIQAAgPgGgGQgGgHgOAAQgOAAgUAJIgGgOQAKgFAKgDQALgCAKgBQAWAAAKAKQALAKAAAWIAABSIgNAAIgEgRIgBAAQgKALgJAFQgIADgNAAQgTABgKgKgAAMACQgVABgKAFQgKAHAAAMQAAALAGAFQAHAGAKAAQARAAAJgKQAKgKAAgRIAAgLg");
	this.shape_686.setTransform(411.25,577.95);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#285C9B").s().p("AgSAnIAAhIIgRAAIAAgJIARgIIAIgaIAKAAIAAAdIAkAAIAAAOIgkAAIAABIQAAALAFAGQAFAGAKAAIAJgBIAIgCIAAAPIgJACIgLABQgjAAAAgmg");
	this.shape_687.setTransform(401.15,576.625);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#285C9B").s().p("AgrA4IAAgRQAJAEALADQAKADAKAAQANAAAIgFQAHgFAAgJQABgHgHgFQgGgGgRgHQgRgFgHgFQgHgFgEgGQgEgGAAgIQAAgPANgJQAMgJAUAAQAUAAATAJIgHAPQgSgIgPAAQgNAAgGAEQgHAEAAAIQAAAFADADQACAEAGADIAUAJQAXAHAHAIQAHAIAAAMQAAARgMAKQgNAJgWAAQgZAAgOgIg");
	this.shape_688.setTransform(391.75,577.925);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAOgRQAPgSAYAAQAXAAAOAQQANAPAAAZIAAALIhUAAQABAVAKALQAKAMASAAQAUAAAUgJIAAARQgKAEgJACQgJACgMAAQgbAAgPgRgAAggLQAAgRgIgKQgIgJgOAAQgOAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_689.setTransform(370.45,577.925);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#285C9B").s().p("AgoBIQgNgRAAgeQAAgdANgRQAOgRAYAAQAYAAAOASIABAAIgBgJIAAgIIAAgyIASAAIAACtIgPAAIgCgQIgBAAQgNASgZAAQgYAAgOgQgAgZgKQgJAMAAAXQAAAYAJAMQAIAMARAAQATAAAIgKQAJgLAAgXIAAgEQAAgZgJgLQgJgLgSAAQgQAAgJAMg");
	this.shape_690.setTransform(356.6,575.475);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#285C9B").s().p("AgdA4QgNgIgGgOQgIgOABgUQgBgdAQgRQAPgRAZAAQAaAAAQASQAOARAAAcQAAAegOARQgQARgaAAQgQAAgNgIgAgbgjQgKAMABAXQgBAYAKAMQAJAMASAAQASAAAKgMQAJgMAAgYQAAgWgJgNQgKgMgSAAQgSAAgJAMg");
	this.shape_691.setTransform(308.85,577.925);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#285C9B").s().p("AglA/IAAh7IAUAAIAEAWIACAAQAFgLAKgHQAKgGALAAIANABIgDAZQgFgCgGAAQgQAAgJAKQgJALAAAQIAABAg");
	this.shape_692.setTransform(283.65,577.775);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#285C9B").s().p("AgmAwQgQgRAAgeQAAgdAPgSQAPgRAaAAQAZAAANAPQAPAPAAAaIAAANIhSAAQAAASAKAKQAJAKAQAAQALAAAKgCQAJgDALgEIAAAVQgKAFgKACQgJABgOAAQgcAAgQgQgAAdgMQgBgPgGgIQgIgIgMAAQgMAAgIAIQgHAIgCAPIA4AAIAAAAg");
	this.shape_693.setTransform(271.35,577.875);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#285C9B").s().p("AgWAlIAAhBIgRAAIAAgMIASgJIAJgbIAPAAIAAAcIAjAAIAAAUIgjAAIAABBQAAAKAFAFQAFAEAHAAQAKAAAKgDIAAAUIgMADIgNABQglAAAAgog");
	this.shape_694.setTransform(260.15,576.6);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#285C9B").s().p("AggAwQgOgQAAgfQAAgfAPgQQAPgRAcAAQATAAAQAHIgIAVQgQgGgLAAQggAAABAqQgBAUAJALQAHAKAPAAQASAAAPgIIAAAXQgHAEgIACQgHABgMAAQgbAAgPgQg");
	this.shape_695.setTransform(250.25,577.875);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#285C9B").s().p("AglA/IAAh7IAUAAIAEAWIACAAQAGgLAIgHQAKgGAMAAIANABIgDAZQgFgCgGAAQgQAAgJAKQgJALAAAQIAABAg");
	this.shape_696.setTransform(226.85,577.775);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#285C9B").s().p("AgpA3QgLgKAAgSQAAgUAPgIQAOgKAcgBIAWgBIAAgGQAAgMgGgGQgGgGgLAAQgJAAgJADIgQAGIgJgSQAKgGAMgCQAMgDAKAAQAYAAAMAKQAMAKAAAXIAABSIgTAAIgFgRIgBAAQgJALgJAEQgKAEgNAAQgSAAgKgJgAAKAEQgRAAgJAGQgIAFAAAMQAAAIAFAFQAFAEAKAAQANAAAJgIQAIgIAAgOIAAgLg");
	this.shape_697.setTransform(214.125,577.875);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#285C9B").s().p("AAcBXIAAhMQAAgNgGgIQgFgHgNAAQgQAAgHAKQgIAJAAAYIAAA9IgaAAIAAitIAaAAIAAAsIgBAXIABAAQAGgJAJgFQAKgFALAAQAtAAAAAsIAABRg");
	this.shape_698.setTransform(200.65,575.375);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#285C9B").s().p("AggAwQgPgQAAgfQABgfAPgQQAPgRAcAAQAUAAAPAHIgIAVQgQgGgLAAQggAAAAAqQABAUAHALQAJAKAOAAQASAAAQgIIAAAXQgHAEgIACQgJABgLAAQgbAAgPgQg");
	this.shape_699.setTransform(187.85,577.875);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#285C9B").s().p("AgjAvQgQgQAAgeQAAgdAPgRQAOgSAYAAQAXAAANAQQAOAPAAAZIAAALIhUAAQABAVAKALQAKAMATAAQATAAATgJIAAARQgJAEgJACQgJACgMAAQgaAAgQgRgAAggLQAAgRgIgKQgHgJgQAAQgNAAgJAKQgJAJgCARIBAAAIAAAAg");
	this.shape_700.setTransform(169.6,577.925);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#285C9B").s().p("AgIAKQgDgDAAgHQAAgGADgDQADgDAFAAQAFAAAEADQADADAAAGQAAAGgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_701.setTransform(773.125,593.875);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#285C9B").s().p("AgPAiIAAg+IgQAAIAAgIIAQgHIAGgXIAJAAIAAAZIAfAAIAAANIgfAAIAAA9QAAAKAEAGQAFAEAIAAIAIAAIAHgCIAAANIgIACIgJABQgeAAAAghg");
	this.shape_702.setTransform(766.875,588.4);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#285C9B").s().p("AAdBMIAAhFQAAgMgGgHQgGgGgNAAQgQAAgIAJQgHAJAAAUIAAA4IgRAAIAAiXIARAAIAAAuIgBAOIABAAQAFgIAJgEQAIgFALAAQATAAAKAJQAKAKAAATIAABGg");
	this.shape_703.setTransform(757.325,587.3);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#285C9B").s().p("AgnBGQgLgHABgOQgBgKAHgHQAGgIALgCQgEgCgCgEQgDgDgBgGQABgGADgDQACgFAIgEQgJgDgFgIQgGgJABgKQgBgSALgJQALgJATAAQAHAAAHABIAlAAIAAAKIgTADIAEAJQADAFAAAIQAAAPgLAKQgLAJgSAAIgJgBQgKAFAAAIQAAAFADACQAEABAJAAIASAAQASABAJAHQAJAHAAAOQAAASgPAJQgOAJgaAAQgVAAgMgIgAgcAhQgGAGAAAKQAAAIAHAEQAIAFAOAAQASAAAKgGQALgGgBgLQAAgIgFgEQgFgDgQAAIgSAAQgLAAgGAFgAgTg7QgHAFABANQgBALAHAGQAGAFALAAQAYABAAgXQAAgZgYAAQgLAAgGAHg");
	this.shape_704.setTransform(745.65,591.85);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#285C9B").s().p("AgIBJIAAhqIAQAAIAABqgAgGg1QgCgDgBgFQABgGACgCQADgDADAAQAEAAADADQACACAAAGQAAAFgCADQgDACgEAAQgDAAgDgCg");
	this.shape_705.setTransform(737.7,587.55);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#285C9B").s().p("AgeApQgOgOgBgaQABgZANgPQAMgPAUAAQAVAAAMANQAMANgBAVIAAAKIhIAAQAAATAJAKQAJAJAQABQARAAARgIIAAAOIgQAGQgJACgKgBQgXAAgNgOgAAcgJQAAgPgHgJQgHgIgNAAQgMAAgHAIQgHAJgCAPIA3AAIAAAAg");
	this.shape_706.setTransform(729.6,589.55);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#285C9B").s().p("AAbA1IgUg+IgHgaIAAAAIgGAbIgVA9IgSAAIgehqIARAAIAQA9QAGAVAAAHIABAAIAEgOIAEgOIATg9IARAAIATA9QAGARACALIAAAAIADgKIAUhPIARAAIgeBqg");
	this.shape_707.setTransform(716.175,589.55);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#285C9B").s().p("AgwBMIAAgNIAMABQARAAAHgSIAGgQIgrhrIARAAIAYA+QAHATABAJIABAAIAFgQIAbhKIARAAIguB6QgFARgKAIQgJAIgNgBIgPgBg");
	this.shape_708.setTransform(698.225,591.95);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#285C9B").s().p("AAdBMIAAhFQAAgMgGgHQgGgGgNAAQgQAAgIAJQgHAJAAAUIAAA4IgRAAIAAiXIARAAIAAAuIgBAOIABAAQAFgIAJgEQAIgFALAAQATAAAKAJQAKAKAAATIAABGg");
	this.shape_709.setTransform(687.125,587.3);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#285C9B").s().p("AgPAiIAAg+IgQAAIAAgIIAQgHIAGgXIAJAAIAAAZIAfAAIAAANIgfAAIAAA9QAAAKAEAGQAFAEAIAAIAIAAIAHgCIAAANIgIACIgJABQgeAAAAghg");
	this.shape_710.setTransform(677.375,588.4);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#285C9B").s().p("AgHBMIAAiXIAPAAIAACXg");
	this.shape_711.setTransform(671.375,587.3);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#285C9B").s().p("AggAvQgKgIAAgPQAAgfAzgCIASAAIAAgIQAAgMgFgGQgGgGgMAAQgMAAgRAIIgFgMQAIgEAJgDQAKgDAIABQAUAAAJAIQAJAIAAAUIAABHIgMAAIgDgPIgBAAQgIALgIADQgIAEgLgBQgQABgIgJgAALABQgTABgIAGQgJAFAAALQAAAJAFAEQAGAFAJAAQAOAAAJgIQAJgIAAgQIAAgJg");
	this.shape_712.setTransform(662.95,589.55);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#285C9B").s().p("AgeApQgOgOgBgaQABgZANgPQAMgPAUAAQAVAAAMANQALANAAAVIAAAKIhJAAQABATAJAKQAJAJAQABQARAAARgIIAAAOIgQAGQgJACgKgBQgXAAgNgOgAAcgJQAAgPgHgJQgHgIgNAAQgMAAgHAIQgHAJgCAPIA3AAIAAAAg");
	this.shape_713.setTransform(652.2,589.55);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#285C9B").s().p("AAdBMIAAhFQAAgMgGgHQgGgGgNAAQgQAAgIAJQgHAJAAAUIAAA4IgRAAIAAiXIARAAIAAAuIgBAOIABAAQAFgIAJgEQAIgFALAAQATAAAKAJQAKAKAAATIAABGg");
	this.shape_714.setTransform(640.475,587.3);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#285C9B").s().p("AggAvQgKgIAAgPQAAgfAzgCIASAAIAAgIQAAgMgFgGQgFgGgMAAQgNAAgRAIIgFgMQAIgEAJgDQAKgDAIABQATAAAKAIQAJAIAAAUIAABHIgMAAIgDgPIgBAAQgIALgIADQgIAEgLgBQgQABgIgJgAALABQgTABgIAGQgJAFAAALQAAAJAFAEQAGAFAKAAQANAAAJgIQAJgIAAgQIAAgJg");
	this.shape_715.setTransform(623.25,589.55);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#285C9B").s().p("AAdA2IAAhEQAAgNgGgHQgGgFgNgBQgQABgIAIQgHAJAAAWIAAA2IgRAAIAAhqIAOAAIACAPIABAAQAFgIAJgEQAJgEAKAAQATAAAKAJQAKAJAAAUIAABFg");
	this.shape_716.setTransform(606.825,589.45);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#285C9B").s().p("AgHBJIAAhqIAPAAIAABqgAgGg1QgCgDAAgFQAAgGACgCQADgDADAAQAEAAACADQAEACAAAGQAAAFgEADQgCACgEAAQgDAAgDgCg");
	this.shape_717.setTransform(598.15,587.55);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#285C9B").s().p("AghAvQgJgIAAgPQAAgfAzgCIASAAIAAgIQAAgMgFgGQgGgGgMAAQgMAAgRAIIgFgMQAIgEAJgDQAKgDAIABQAUAAAJAIQAJAIAAAUIAABHIgMAAIgDgPIgBAAQgIALgIADQgIAEgLgBQgQABgJgJgAALABQgTABgIAGQgJAFAAALQAAAJAFAEQAGAFAJAAQAPAAAIgIQAJgIAAgQIAAgJg");
	this.shape_718.setTransform(589.7,589.55);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#285C9B").s().p("AgPAiIAAg+IgQAAIAAgIIAQgHIAGgXIAJAAIAAAZIAfAAIAAANIgfAAIAAA9QAAAKAEAGQAFAEAIAAIAIAAIAHgCIAAANIgIACIgJABQgeAAAAghg");
	this.shape_719.setTransform(580.925,588.4);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#285C9B").s().p("AAdA2IAAhEQAAgNgGgHQgGgFgNgBQgQABgIAIQgHAJAAAWIAAA2IgRAAIAAhqIAOAAIACAPIABAAQAFgIAJgEQAJgEAKAAQATAAAKAJQAKAJAAAUIAABFg");
	this.shape_720.setTransform(571.375,589.45);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#285C9B").s().p("AgHBJIAAhqIAPAAIAABqgAgGg1QgCgDAAgFQAAgGACgCQADgDADAAQAEAAACADQAEACAAAGQAAAFgEADQgCACgEAAQgDAAgDgCg");
	this.shape_721.setTransform(562.7,587.55);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#285C9B").s().p("AghAvQgJgIAAgPQAAgfAzgCIASAAIAAgIQAAgMgFgGQgGgGgMAAQgMAAgRAIIgFgMQAIgEAJgDQAKgDAIABQATAAAKAIQAJAIAAAUIAABHIgMAAIgDgPIgBAAQgIALgIADQgIAEgLgBQgQABgJgJgAAKABQgRABgJAGQgJAFAAALQAAAJAGAEQAFAFAJAAQAPAAAIgIQAJgIAAgQIAAgJg");
	this.shape_722.setTransform(554.25,589.55);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#285C9B").s().p("AA8A2IAAhEQAAgNgGgHQgFgFgMgBQgPAAgHAJQgHAIAAASIAAA7IgPAAIAAhEQAAgNgFgHQgGgFgLgBQgQABgHAIQgHAJAAAWIAAA2IgQAAIAAhqIANAAIADAPIABAAQAEgHAIgFQAJgEAKAAQAZAAAHASIABAAQAFgJAIgFQAJgEAMAAQATAAAJAJQAIAJABAUIAABFg");
	this.shape_723.setTransform(539.8,589.45);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#285C9B").s().p("AgiA+QgMgOAAgaQAAgaAMgOQALgPAVAAQAVAAAMAQIABAAIgBgIIAAgIIAAgrIAQAAIAACXIgNAAIgCgOIgBAAQgLAQgWAAQgVAAgLgPgAgWgJQgHALAAAUQAAAVAHAKQAIAKAOAAQAQAAAHgJQAIgIAAgVIAAgDQAAgWgIgKQgHgKgQABQgOgBgIALg");
	this.shape_724.setTransform(518.875,587.4);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#285C9B").s().p("AAdA2IAAhEQAAgNgGgHQgGgFgNgBQgQABgIAIQgHAJAAAWIAAA2IgRAAIAAhqIAOAAIACAPIABAAQAFgIAJgEQAJgEAKAAQATAAAKAJQAKAJAAAUIAABFg");
	this.shape_725.setTransform(506.975,589.45);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#285C9B").s().p("AggAvQgKgIAAgPQAAgfAzgCIASAAIAAgIQAAgMgFgGQgFgGgMAAQgNAAgRAIIgFgMQAIgEAKgDQAJgDAIABQATAAAKAIQAJAIAAAUIAABHIgMAAIgDgPIgBAAQgIALgIADQgIAEgLgBQgQABgIgJgAALABQgSABgJAGQgJAFAAALQAAAJAFAEQAGAFAKAAQANAAAJgIQAJgIAAgQIAAgJg");
	this.shape_726.setTransform(494.9,589.55);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#285C9B").s().p("AgfApQgNgOAAgaQAAgZAMgPQANgPAVAAQAUAAALANQAMANABAVIAAAKIhJAAQAAATAJAKQAJAJAPABQASAAAQgIIAAAOIgQAGQgHACgLgBQgXAAgOgOgAAcgJQAAgPgHgJQgHgIgMAAQgMAAgIAIQgHAJgCAPIA3AAIAAAAg");
	this.shape_727.setTransform(479,589.55);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#285C9B").s().p("AglAwIAAgOQAIADAJADQAJACAIAAQAMAAAHgEQAGgEAAgIQAAgGgFgFQgFgFgPgFQgPgFgGgEQgHgEgDgGQgDgFAAgIQAAgMALgIQAKgHASAAQARgBARAIIgGAMQgQgGgNAAQgLAAgGAEQgFADAAAHQAAAEACADQACADAFADIASAHQATAHAGAHQAHAGAAAMQAAAOgLAIQgLAJgTgBQgWABgMgIg");
	this.shape_728.setTransform(468.675,589.55);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#285C9B").s().p("AgZAwQgLgGgGgNQgGgMAAgRQAAgZANgPQANgOAWAAQAXgBANAQQANAPAAAYQAAAagNAPQgNAOgXAAQgOABgLgIgAgXgeQgIAKAAAUQAAAUAIALQAIALAPAAQAQAAAIgLQAJgLAAgUQAAgUgJgKQgIgLgQAAQgPAAgIALg");
	this.shape_729.setTransform(457.825,589.55);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#285C9B").s().p("AgHBMIAAiXIAPAAIAACXg");
	this.shape_730.setTransform(449.275,587.3);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#285C9B").s().p("AgZAwQgLgGgGgNQgGgMAAgRQAAgZANgPQANgOAWAAQAXgBANAQQANAPAAAYQAAAagNAPQgNAOgXAAQgOABgLgIgAgXgeQgIAKAAAUQAAAUAIALQAIALAPAAQAQAAAIgLQAJgLAAgUQAAgUgJgKQgIgLgQAAQgPAAgIALg");
	this.shape_731.setTransform(435.575,589.55);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#285C9B").s().p("AgPAiIAAg+IgQAAIAAgIIAQgHIAGgXIAJAAIAAAZIAfAAIAAANIgfAAIAAA9QAAAKAEAGQAFAEAIAAIAIAAIAHgCIAAANIgIACIgJABQgeAAAAghg");
	this.shape_732.setTransform(425.975,588.4);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#285C9B").s().p("AAbA1IgUg+IgHgaIAAAAIgGAbIgVA9IgSAAIgehqIARAAIAQA9QAGAVAAAHIABAAIAEgOIAEgOIATg9IARAAIATA9QAGARACALIAAAAIADgKIAUhPIARAAIgeBqg");
	this.shape_733.setTransform(409.575,589.55);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#285C9B").s().p("AgZAwQgLgGgGgNQgGgMAAgRQAAgZANgPQANgOAWAAQAXgBANAQQANAPAAAYQAAAagNAPQgNAOgXAAQgOABgLgIgAgXgeQgIAKAAAUQAAAUAIALQAIALAPAAQAQAAAIgLQAJgLAAgUQAAgUgJgKQgIgLgQAAQgPAAgIALg");
	this.shape_734.setTransform(395.775,589.55);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#285C9B").s().p("AAdBMIAAhFQAAgMgGgHQgGgGgNAAQgQAAgIAJQgHAJAAAUIAAA4IgRAAIAAiXIARAAIAAAuIgBAOIABAAQAFgIAJgEQAIgFALAAQATAAAKAJQAKAKAAATIAABGg");
	this.shape_735.setTransform(383.675,587.3);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#285C9B").s().p("AAdA2IAAhEQAAgNgGgHQgGgFgNgBQgQABgIAIQgHAJAAAWIAAA2IgRAAIAAhqIAOAAIACAPIABAAQAFgIAJgEQAJgEAKAAQATAAAKAJQAKAJAAAUIAABFg");
	this.shape_736.setTransform(366.275,589.45);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#285C9B").s().p("AgeA2IAAhqIANAAIADAUIAAAAQAGgKAIgGQAIgFAKAAIANAAIgCAQIgMgBQgNgBgIALQgKALABAPIAAA4g");
	this.shape_737.setTransform(356.75,589.45);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#285C9B").s().p("AggAvQgKgIAAgPQAAgfAzgCIASAAIAAgIQAAgMgFgGQgFgGgNAAQgMAAgRAIIgFgMQAIgEAJgDQAKgDAIABQAUAAAJAIQAJAIAAAUIAABHIgMAAIgDgPIgBAAQgIALgIADQgIAEgLgBQgQABgIgJgAALABQgTABgIAGQgJAFAAALQAAAJAFAEQAGAFAKAAQANAAAJgIQAJgIAAgQIAAgJg");
	this.shape_738.setTransform(346.05,589.55);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#285C9B").s().p("AgeApQgOgOgBgaQAAgZANgPQANgPAUAAQAVAAAMANQAMANgBAVIAAAKIhIAAQAAATAJAKQAJAJAQABQARAAARgIIAAAOIgQAGQgJACgKgBQgXAAgNgOgAAcgJQAAgPgHgJQgHgIgNAAQgMAAgHAIQgHAJgCAPIA3AAIAAAAg");
	this.shape_739.setTransform(335.3,589.55);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#285C9B").s().p("AgHBMIAAiXIAPAAIAACXg");
	this.shape_740.setTransform(327.125,587.3);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#285C9B").s().p("AgZAwQgLgGgGgNQgGgMAAgRQAAgZANgPQANgOAWAAQAXgBANAQQANAPAAAYQAAAagNAPQgNAOgXAAQgOABgLgIgAgXgeQgIAKAAAUQAAAUAIALQAIALAPAAQAQAAAIgLQAJgLAAgUQAAgUgJgKQgIgLgQAAQgPAAgIALg");
	this.shape_741.setTransform(313.425,589.55);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#285C9B").s().p("AgPAiIAAg+IgQAAIAAgIIAQgHIAGgXIAJAAIAAAZIAfAAIAAANIgfAAIAAA9QAAAKAEAGQAFAEAIAAIAIAAIAHgCIAAANIgIACIgJABQgeAAAAghg");
	this.shape_742.setTransform(303.825,588.4);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#285C9B").s().p("AgmAyIAAgUQATAIAQABQAUgBAAgNQAAgDgCgDIgIgGIgOgHQgSgGgHgHQgHgHAAgMQAAgOAMgHQALgIASAAQATAAARAIIgHARQgSgHgMAAQgRAAAAAKQAAAFAFAEQAEADAPAGQAOAGAGADQAGAEADAGQADAFAAAIQAAAQgMAJQgLAIgVAAQgVAAgNgGg");
	this.shape_743.setTransform(290.425,589.5);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#285C9B").s().p("AghApQgOgOAAgaQAAgZANgQQAOgPAWAAQAVAAAMANQANANAAAXIAAALIhHAAQAAAQAIAJQAIAIAOAAQAJAAAJgCIARgGIAAATQgIADgJADQgIABgLAAQgYAAgPgPgAAZgLQAAgNgGgHQgGgHgLAAQgKAAgHAHQgGAHgCANIAwAAIAAAAg");
	this.shape_744.setTransform(279.775,589.5);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#285C9B").s().p("AgoBHQgMgHAAgPQAAgKAHgGQAGgIALgCQgEgCgDgEQgDgFAAgEQAAgHADgDQAEgEAGgEQgIgEgFgIQgFgIAAgLQAAgRALgLQALgJAUAAIAJAAIAHACIAmAAIAAANIgTADIAFAIQABAFAAAGQAAAQgLAKQgMAKgTAAIgJgBQgIAEAAAGQAAADAEACQADACAJAAIASAAQASAAAJAIQAKAHAAAPQAAASgPAKQgQAKgbAAQgWAAgMgIgAgZAjQgGAFAAAIQAAAHAHAEQAGAEAMAAQASAAAJgFQAKgFAAgJQAAgIgFgCQgFgDgOgBIgRAAQgJABgGAEgAgQg5QgFAFAAALQAAAKAFAFQAFAGAKAAQATAAAAgVQAAgLgFgFQgFgGgJAAQgKAAgFAGg");
	this.shape_745.setTransform(268.375,591.8);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#285C9B").s().p("AgkAwQgJgJAAgQQAAgRAMgHQANgJAYgBIATAAIAAgGQAAgKgFgFQgFgGgKAAQgHAAgIADIgPAGIgHgRQAJgEAKgCQALgDAIAAQAVAAAKAJQALAJAAATIAABIIgRAAIgEgPIgBAAQgIAKgIADQgIAEgLAAQgQAAgJgIgAAJADQgPAAgIAFQgHAGAAAJQAAAHAEAEQAEAFAJAAQAMAAAHgIQAIgHAAgMIAAgJg");
	this.shape_746.setTransform(256.775,589.5);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#285C9B").s().p("AA4A3IAAhCQABgMgFgGQgFgGgKAAQgNAAgHAIQgFAIgBASIAAA4IgVAAIAAhCQAAgMgGgGQgEgGgKAAQgNAAgGAIQgHAJABATIAAA2IgYAAIAAhrIASAAIAEAOIABAAQAFgHAIgFQAJgEAJAAQAZAAAIARIABAAQAFgIAJgEQAIgFAMAAQATAAAJAKQAIAKAAAUIAABFg");
	this.shape_747.setTransform(241.8,589.4);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#285C9B").s().p("AgKBLIAAhrIAVAAIAABrgAgIg0QgEgDAAgGQAAgGAEgDQADgEAFAAQAGAAADAEQAEADAAAGQAAAGgEADQgDAEgGAAQgFAAgDgEg");
	this.shape_748.setTransform(229.45,587.425);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#285C9B").s().p("AgfApQgOgOABgaQgBgZANgPQANgPAUAAQAVAAAMANQAMANAAAVIAAAKIhJAAQAAATAJAKQAJAJAQABQARAAAQgIIAAAOIgPAGQgJACgKgBQgXAAgOgOgAAcgJQAAgPgHgJQgHgIgNAAQgLAAgIAIQgHAJgCAPIA3AAIAAAAg");
	this.shape_749.setTransform(215.95,589.55);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#285C9B").s().p("AgIA1IgphqIASAAIAXA/IAIAdIABAAIAGgWIAahGIARAAIgoBqg");
	this.shape_750.setTransform(205.3,589.55);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#285C9B").s().p("AgZAwQgLgGgGgNQgGgMAAgRQAAgZANgPQANgOAWAAQAXgBANAQQANAPAAAYQAAAagNAPQgNAOgXAAQgOABgLgIgAgXgeQgIAKAAAUQAAAUAIALQAIALAPAAQAQAAAIgLQAJgLAAgUQAAgUgJgKQgIgLgQAAQgPAAgIALg");
	this.shape_751.setTransform(194.275,589.55);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#285C9B").s().p("AgPBJQgJgEgGgIIgBAAIgDAOIgMAAIAAiXIAQAAIAAAlIgBAWIABAAQALgQAWAAQAVAAAMAPQALAOAAAaQAAAagMAOQgLAPgVAAQgKAAgIgEgAgXgKQgHAKAAAWQAAAWAIAJQAHALAQgBQAPAAAHgLQAHgLAAgUQAAgVgHgJQgHgKgQAAQgPAAgIAJg");
	this.shape_752.setTransform(182.425,587.4);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#285C9B").s().p("AggAvQgKgIAAgPQAAgfAzgCIASAAIAAgIQAAgMgFgGQgFgGgMAAQgNAAgRAIIgFgMQAIgEAJgDQAKgDAIABQAUAAAJAIQAJAIAAAUIAABHIgMAAIgDgPIgBAAQgIALgIADQgIAEgLgBQgQABgIgJgAALABQgTABgIAGQgJAFAAALQAAAJAFAEQAGAFAKAAQANAAAJgIQAJgIAAgQIAAgJg");
	this.shape_753.setTransform(170.1,589.55);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#285C9B").s().p("AgfApQgOgOABgaQgBgZANgPQANgPAUAAQAVAAAMANQALANABAVIAAAKIhJAAQAAATAJAKQAJAJAQABQARAAAQgIIAAAOIgPAGQgIACgLgBQgXAAgOgOgAAcgJQAAgPgHgJQgHgIgNAAQgLAAgIAIQgHAJgCAPIA3AAIAAAAg");
	this.shape_754.setTransform(154.2,589.55);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#285C9B").s().p("AAdBMIAAhFQAAgMgGgHQgGgGgNAAQgQAAgIAJQgHAJAAAUIAAA4IgRAAIAAiXIARAAIAAAuIgBAOIABAAQAFgIAJgEQAIgFALAAQATAAAKAJQAKAKAAATIAABGg");
	this.shape_755.setTransform(142.475,587.3);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#285C9B").s().p("AgPAiIAAg+IgQAAIAAgIIAQgHIAGgXIAJAAIAAAZIAfAAIAAANIgfAAIAAA9QAAAKAEAGQAFAEAIAAIAIAAIAHgCIAAANIgIACIgJABQgeAAAAghg");
	this.shape_756.setTransform(132.725,588.4);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#285C9B").s().p("AAdA2IAAhEQAAgNgGgHQgGgFgNgBQgQABgIAIQgHAJAAAWIAAA2IgRAAIAAhqIAOAAIACAPIABAAQAFgIAJgEQAJgEAKAAQATAAAKAJQAKAJAAAUIAABFg");
	this.shape_757.setTransform(118.025,589.45);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#285C9B").s().p("AgZAwQgLgGgGgNQgGgMAAgRQAAgZANgPQANgOAWAAQAXgBANAQQANAPAAAYQAAAagNAPQgNAOgXAAQgOABgLgIgAgXgeQgIAKAAAUQAAAUAIALQAIALAPAAQAQAAAIgLQAJgLAAgUQAAgUgJgKQgIgLgQAAQgPAAgIALg");
	this.shape_758.setTransform(105.825,589.55);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#285C9B").s().p("AAXBMIglgyIgMAKIAAAoIgQAAIAAiXIAQAAIAABQIAAAQIAAAAIANgPIAhgkIAUAAIgrAtIAuA9g");
	this.shape_759.setTransform(90.2,587.3);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#285C9B").s().p("AgZApQgNgOAAgbQAAgZANgPQANgOAXAAQAIgBAIACIAMAEIgFAOIgMgDIgLgCQggAAAAAoQAAAUAIAKQAIAMAPAAQANgBAOgGIAAAPQgKAGgRgBQgWAAgNgOg");
	this.shape_760.setTransform(79.675,589.55);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#285C9B").s().p("AgHBJIAAhqIAPAAIAABqgAgGg1QgCgDAAgFQAAgGACgCQADgDADAAQAEAAACADQAEACAAAGQAAAFgEADQgCACgEAAQgDAAgDgCg");
	this.shape_761.setTransform(72.2,587.55);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#285C9B").s().p("AgHBMIAAiXIAPAAIAACXg");
	this.shape_762.setTransform(67.125,587.3);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#285C9B").s().p("AgjA2QgSgTAAgjQAAgVAJgRQAHgQAQgJQAQgKAUABQAWAAARAIIgHAOQgQgIgQABQgXAAgOAPQgNAQAAAaQAAAcANAQQANAPAXAAQAQgBATgFIAAAPQgPAGgWgBQgeABgRgUg");
	this.shape_763.setTransform(58.6,587.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654,p:{x:169.6}},{t:this.shape_653,p:{x:185.95}},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650,p:{x:220}},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643,p:{x:299.025}},{t:this.shape_642},{t:this.shape_641,p:{x:322.875}},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636,p:{x:381.4}},{t:this.shape_635,p:{x:395.3}},{t:this.shape_634,p:{x:407.925}},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615,p:{x:637.275}},{t:this.shape_614,p:{x:654.2}},{t:this.shape_613,p:{x:665.425}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609,p:{x:720.025}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606,p:{x:756.65}},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603,p:{x:801.775}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600,p:{x:841.225}},{t:this.shape_599},{t:this.shape_598,p:{x:860}},{t:this.shape_597},{t:this.shape_596,p:{x:883.975}},{t:this.shape_595},{t:this.shape_594,p:{x:62.775,y:611.175}},{t:this.shape_593},{t:this.shape_592,p:{x:92.725,y:611.175}},{t:this.shape_591,p:{x:103.05,y:611.275}},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583,p:{x:210.775,y:608.725}},{t:this.shape_582,p:{x:220.6,y:611.275}},{t:this.shape_581,p:{x:233.025,y:611.175}},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576,p:{x:292.325,y:611.175}},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570,p:{x:375.575,y:608.725}},{t:this.shape_569,p:{x:386.55,y:609.975}},{t:this.shape_568}]}).to({state:[{t:this.shape_663},{t:this.shape_583,p:{x:69.425,y:575.375}},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_582,p:{x:113.95,y:577.925}},{t:this.shape_657},{t:this.shape_569,p:{x:144.9,y:576.625}},{t:this.shape_613,p:{x:156.125}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_609,p:{x:237.325}},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_614,p:{x:297.8}},{t:this.shape_691},{t:this.shape_635,p:{x:328.7}},{t:this.shape_641,p:{x:342.925}},{t:this.shape_690},{t:this.shape_689},{t:this.shape_643,p:{x:382.375}},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_615,p:{x:425.125}},{t:this.shape_685},{t:this.shape_684},{t:this.shape_636,p:{x:480.4}},{t:this.shape_634,p:{x:492.825}},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_598,p:{x:574.25}},{t:this.shape_678},{t:this.shape_603,p:{x:604.325}},{t:this.shape_654,p:{x:617.8}},{t:this.shape_600,p:{x:629.725}},{t:this.shape_677},{t:this.shape_676},{t:this.shape_592,p:{x:669.175,y:577.825}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_581,p:{x:725.375,y:577.825}},{t:this.shape_650,p:{x:735.7}},{t:this.shape_594,p:{x:752.875,y:577.825}},{t:this.shape_591,p:{x:769.95,y:577.925}},{t:this.shape_596,p:{x:783.475}},{t:this.shape_653,p:{x:794.45}},{t:this.shape_671},{t:this.shape_670},{t:this.shape_576,p:{x:835.325,y:577.825}},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_570,p:{x:918.575,y:575.375}},{t:this.shape_606,p:{x:929.55}},{t:this.shape_664}]},3).to({state:[{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701}]},1).to({state:[{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701}]},1).wait(3));

	// Food
	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#F1907F").s().p("AAFBaQgWgBgNgPQgRgTABgdQAAgVAJgeQAGgSAGgKQAJgPAPgMQANgLATACQAUABgFARIgKAXQgIAPgEAXQgBAGgBA7QAAAjgQAAIgBAAg");
	this.shape_764.setTransform(84.0147,244.5974,0.6712,0.6712);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#EB6425").s().p("AhVC+QgagygciLQgah8AthHQASgcAlgQQAfgNAhAAIAAAAQAggBAgANQAlAPASAbQAvBFgXB/QgZCKgZAzQgfA/g5ABIgBAAQg4AAggg+g");
	this.shape_765.setTransform(89.4224,253.0974,0.6712,0.6712);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#DC5112").s().p("AhUC8QgagxgciKQgah7AthHQARgcAlgPQAfgNAhgBIAAAAQAgAAAfAMQAmAPASAbQAuBFgXB/QgZCIgZAyQgeA/g5ACIgBAAQg3gBggg+g");
	this.shape_766.setTransform(95.1218,252.5443,0.6712,0.6712);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#DC5112").s().p("AhUC8QgagxgciKQgah8AthGQARgcAlgPQAfgNAhgBIAAAAQAgAAAfANQAmAOASAbQAuBFgXB+QgZCJgZAyQgeA/g5ABIgBABQg3AAggg/g");
	this.shape_767.setTransform(83.5854,252.6785,0.6712,0.6712);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#438031").s().p("AASBrIgNAAQgJAAgDgBIhWgWQACAAAPgHQAOgGACgCQACgCABgDIgBgHQgEgpABghQAAgiAbgYQAagWAqgIQARgCANACQASACAEADQAIAFgBAQQgPgFgQAAQgWgBgVAGQgTAFgMANQgNANgDATQgFAmArAnQAUASAZAKIAMAEIAJADQAFACADAAIgLADIghAMIgLAFQgFACgEAAIgCAAg");
	this.shape_768.setTransform(88.9794,230.2796,0.6712,0.6712);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#66CAEC").s().p("AjgArQhegSAAgZQAAgYBegSQBdgRCDAAQCEAABeARQBcASABAYQgBAZhcASQheARiEAAQiDAAhdgRg");
	this.shape_769.setTransform(85.3849,268.4021,0.6712,0.6712);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.lf(["#F08A86","#ED7F7A"],[0,1],-3.2,7.7,5.7,-9.9).s().p("Ag+BCQgRgHAPgUIAZgaQAzgyAVgSQAWgUALAMQAKAMgHAcQgGAXgSATQgRATgXAMQggATgVAAQgIAAgGgDg");
	this.shape_770.setTransform(163.1567,237.5008,0.6712,0.6712);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.lf(["#F08A86","#ED7F7A"],[0,1],-2.6,0,2.7,0).s().p("AAFAQQgLgDgIgEQgKgFgBgIQgBgEADgEQACgFAFAAQAFABAOAIQAPAIAFAGQAIAKgJABIgEABQgFAAgIgCg");
	this.shape_771.setTransform(156.5885,224.8989,0.6712,0.6712);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.lf(["#F08A86","#ED7F7A"],[0,1],6.7,9.6,-17.3,-9.1).s().p("ACHA8QgTAAgrgEQgogEgWAAIhNADQgxACgegDQgigDgHgNQgFgMAPgVIARgcQAKgRAIgKQAPgSAbAQIAdATQARALAOAFQAOAFAaAGIAoAKIAjAMIAkAKIAqAKIARAEQALADAEAEQAIAKgaADIgUABIgNgBg");
	this.shape_772.setTransform(142.5063,237.4303,0.6711,0.6712);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.lf(["#F08A86","#ED7F7A"],[0,1],-20.9,0,21,0).s().p("ABmBSQgSgBgdgDIgvgGQg2gGgngKIgfgIQgggIgUgKIgYgNQgNgJgDgFQgDgFAJgCIAQAAQAJAAAGgCQATgEASgPIAXgTQANgMAKgGQAagQAdgCQAggCAqAFIBMALIAtAGQAaAHALAQQAMASgCAYQgBAXgNATQgXAjg8AAIgKAAg");
	this.shape_773.setTransform(149.1205,231.4556,0.6712,0.6712);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.lf(["#F08A86","#ED7F7A"],[0,1],-12.9,4.7,8.4,-3.2).s().p("AhlAeQgDgDgEgGQgFgJgBgMIgBgOQABgHAOgJQAOgIAJgBQANgDAUABQAsABAcAFQApAIAbASQAZAQgHAPQgEAHgLACQgFACgNAAQgkgBgSABIgiAEIgjAEIgPABQgfAAgNgMg");
	this.shape_774.setTransform(145.5568,222.3848,0.6712,0.6712);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.lf(["#DD5C59","#C04F4F"],[0,1],-5.2,0,5.3,0).s().p("AgxANQgDgEAAgGQABgFADgDQAJgLAegFQAagDAWAJQAPAGgBAIQgCAHgPAGQgWAIgVACIgMABQgVAAgJgKg");
	this.shape_775.setTransform(135.1737,227.4668,0.6712,0.6712);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.lf(["#FFFFFF","#FAE3E3"],[0,1],-9.9,4,18.6,-7.5).s().p("Ag6AXQgJgHAAgMQgBgLAIgJQAIgHANgDQAZgGATgCQAbgDARAJQAHAFAIANQAGALgDAIQgFALgWAHQgLAEgWADQgLACgKAAQgbAAgRgNg");
	this.shape_776.setTransform(135.2876,227.4574,0.6712,0.6712);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.lf(["#F08A86","#ED7F7A"],[0,1],-1.4,0,1.5,0).s().p("AgCAMQgPgDAEgMIABgDQAGgJALAEQALAEgCAKQgCAKgJAAIgFgBg");
	this.shape_777.setTransform(136.979,219.6278,0.6712,0.6712);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.lf(["#F08A86","#ED7F7A"],[0,1],-6,2.1,10.8,-3.7).s().p("AghATIgJgCQgCgCADgEIAGgFQAVgXAagBQAKgBALAEQAOAGgEAJQgEAHgUADIgcAEQgNAFgIAAIgDAAg");
	this.shape_778.setTransform(131.9909,220.5292,0.6712,0.6712);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.lf(["#F08A86","#ED7F7A"],[0,1],7.3,-12.5,-5.3,10.1).s().p("AgNBrQgYgDgRgVQgeglAZhQQAMglAGgKQANgXAXgDQAOgDAYAiQATAcANAhQALAbgKAgQgKAfgYATQgRAOgUAAIgIgBg");
	this.shape_779.setTransform(126.8059,231.0053,0.6712,0.6712);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.lf(["#EFC9C0","#F0B7AB"],[0,1],-33.2,-22.6,25.2,26.3).s().p("ADAC+Qg4gEhVABIiMAAQhVgBgmgHQhIgMgkgoQgYgagLgoQgKgjABgmQAAggAKgYQAFgNALgPIAUgaQAHgJAKgKQALgLAMgHQAWgNAjgIQBUgSBqANQBZAMBcAqQCIA7A1BLQAaAnABAqQABAvghAfQgZAYgqAFIgXABQgVAAgfgCg");
	this.shape_780.setTransform(145.1174,230.5225,0.6712,0.6712);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.lf(["#DD5C59","#C04F4F"],[0,1],-0.1,-7.6,0.4,18.6).s().p("AC/C+Qg3gEhWABIiMAAQhVgBgmgHQhIgNgkgnQgXgagMgoQgKgjABgmIgCguQAAgiAEgLQAFgKAQgBQARAAAGgJQAHgIAKgKQAJgJAOgJQAYgOAhgHQBVgTBpAOQBWALBfAqICBA5QBOAmAEAZQAJA6gCAhQgEA2geAcQgZAZgqAFIgVABIg2gCg");
	this.shape_781.setTransform(145.1634,234.799,0.6712,0.6712);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#66CAEC").s().p("AlIAuQiJgSAAgcQAAgaCJgTQCIgUDAABQDBgBCIAUQCJATAAAaQAAAciJASQiIAUjBAAQjAAAiIgUg");
	this.shape_782.setTransform(143.5252,245.2613,0.6712,0.6712);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#863D25").s().p("AAKAUQgEgCgCgHQgBgDgDgBIgGgEQgBgBAAgEQAAgFgHgEQgCgBAAgDQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAIAGADQAGADAFAFIAIAKQAEAGgBADQgBAKgEAAIgCgBg");
	this.shape_783.setTransform(181.9089,371.0941,0.6711,0.6712);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#441C12").s().p("AgLARQgDAAgCgCQgBgBAEgIQACgJAFgBQAEgCABgDQABgEABgBQAFgEAEAEQAHAEABAEQAAAEgEABQgDABgCACIgCAGQgBABgGAAQgEAAgDAGQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAIAAAAg");
	this.shape_784.setTransform(110.7853,372.11,0.6711,0.6712);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#FDCC4C").s().p("AhLBrQhugGhogZQg8gOhDgkQgigSgUgQQgQgOgKgWQAPAJANgFQAhgPBBACQAyACCOATQB5AQBGgEQB5gHBmgdQCJgnAMgCQAxgIATgBQAegCAOAIQgXA5hDAsQgzAihGAWQibAzibAAIgzgBg");
	this.shape_785.setTransform(148.3747,376.7967,0.6711,0.6712);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#FCC40F").s().p("AgiCLQhtgGhqgZQg8gPhDgjQgigTgTgQQgMgLgIgMIgNgcQgDgHgFgEIgMgJQgVgPgPgNQgWgQgGgDQAQgZAEgCQAJgFAOALIAUASIATAOQAKAXAQAOQAUARAhASQBDAiA8APQBoAZBvAFQC0AKC1g7QBGgWAzgiQBDgsAWg5QAWANgEAaQgMBGhJA1Qg2AohRAaQiaAzieAAIgwgBg");
	this.shape_786.setTransform(146.2528,379.4231,0.6711,0.6712);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#863D25").s().p("AARASQgEgBgFgHQgCgCgEgBIgGgCQgCAAgCgFQgCgGgHgBQgDgBgBgDQgBgDABgCQABAAAAgBQAAAAABAAQAAAAABAAQABAAABAAIAHABQAHAAAGAFIAMAJQAFADABAEQACANgFAAIgCAAg");
	this.shape_787.setTransform(184.107,346.3549,0.6711,0.6712);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#441C12").s().p("AgNAVQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBABgBIABgHQAAgLAEgDQAEgDAAgDQAAgFABgBQAEgGAFABQAIACACAFQACAEgEADQgDACgBAEIgBAGQAAACgGABQgFACgBAHQAAADgEABIgCABIgDgBg");
	this.shape_788.setTransform(110.1142,371.9275,0.6711,0.6712);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#FDCC4C").s().p("AmWDcQgogIgbgLQgUgKgSgVQATAGALgLQAggcBEgTQA1gQCagcQCDgXBIgdQB8gxBjhCQCDhYANgHQAwgaATgHQAfgNASAEQgHBGg5BGQgrA2hDAwQiqB9jBA1QhzAfh3AJIgiACQg1AAg8gMg");
	this.shape_789.setTransform(149.331,360.6995,0.6711,0.6712);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#FCC40F").s().p("AlcEAQgngHgagMQgQgHgMgMQgIgHgOgSQgFgHgGgDIgPgFIgvgRQgUgIgOgEQAJggADgEQAJgHARAHIAbAMIAXAIQASAVAUAKQAaALAoAIQBQAPBEgFQB2gJBzgfQDCg1Cqh8QBDgxArg2QA5hGAGhGQAbAHADAeQAJBPg8BTQgtA+hNA3QiqB8jCA1QhzAgh2AJIgiABQg2AAg8gMg");
	this.shape_790.setTransform(147.4035,363.1985,0.6711,0.6712);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#863D25").s().p("AAKAHQgCgBgEAAIgFABQgCAAgEgEQgDgDgHAAQgDAAgCgCQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABgBABAAIAGgBQAJgCAEACIANAEQAGACACADQAGAKgGABIgBAAQgEAAgGgEg");
	this.shape_791.setTransform(165.6281,327.3059,0.6711,0.6712);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#441C12").s().p("AgGASIgBgHQgEgIADgEQACgDgBgDQgBgEAAgCQACgGAFAAQAHgBADADQADADgDAEQgCACABAEIABAFQAAACgEADQgEACABAHQABAGgHAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_792.setTransform(110.6165,370.6494,0.6711,0.6712);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#FDCC4C").s().p("AlMFFQgWgCgVgMQASgBAGgMQASghA0gkQAogdB7hFQBog6A0guQBahNA/hUQBUhwAIgKQAigkAOgMQAWgTAQgCQARA8gaBMQgUA6gpA8QhpCaiVBlQhcA+hdAoQg4AZhKAKQgcAFgVAAIgNgBg");
	this.shape_793.setTransform(140.1506,348.41,0.6711,0.6712);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#FCC40F").s().p("AkQFfQgPgBgOgGQgJgEgSgLQgHgEgGgBIgOAAIguAAQgUgCgNACQgCgfABgDQAFgJASABIAaACIAXABQAVAMAVACQAYACAngGQBJgKA4gZQBegoBcg+QCUhlBqiaQApg8ATg6QAahMgQg8QAYgDANAYQAgBAgYBXQgTBBgvBGQhpCZiVBlQhbA+heApQg4AYhKALQgdAEgUAAIgOgBg");
	this.shape_794.setTransform(139.381,350.1606,0.6711,0.6712);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#66CAEC").s().p("AgzHPQhwgGhngYQg9gPhCgkQgigSgTgRQgMgKgIgNQgFgJgIgTQgDgHgFgFIgLgIIgxglQgJgDgJgDIgBAAIgDgBIgBgBIABgKIAAgHQABgFADgCQAEgDAAgDQAAgFACgCIACgCIAAgBQADgEgBgDQgCgEABgCQABgFAGgCIACAAIADABQAEgCAFAAIAPACIAaABIAIABIADAAQASgCAGgMQALgTAUgTQANgNAagSQAngcB8hEQBog6A1gvQBZhNBAhVQBShvAKgKQAagdANgMQATgSAOgHIAAgBIAKgDIAHAAIAHAAIANAEQAGADABADIAGAMQAhBAgZBXQgSBAgvBGQhiCQiJBhQAagIAagKQB8gxBjhCQCChXANgHQAogWASgHQAagNARgBIAAgBIADgBIAJACQAIABAGADQAGAEAGAFQAFAGABACIAAAJIABAHQAJBPg8BSQgtA+hNA4QhQA7hZAsQAWgFBDgVQAxgPAhgGQA6gJAWgBIATACIABgBIABAAIAIAEQAIADAEAFQAEADAEAIQAEAFgBAEIgCANQgMBGhIA2Qg3AohQAbQicAzidgBgAnqDVIAIADQAGACAHAAQAIAAAGgEQgFgCgGAAg");
	this.shape_795.setTransform(149.9703,358.9683,0.6712,0.6712);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#D47650").s().p("AgEALQgSAAAAgLQABgMARACQAMAAAPALQgPAKgLAAIgBAAg");
	this.shape_796.setTransform(200.0268,345.7621,0.6711,0.6712);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#F1E0A5").s().p("AgWAtQgdgKgNgcQgNgbALgdICKAyQgKAdgcANQgQAHgPAAQgMAAgNgFg");
	this.shape_797.setTransform(200.4957,345.7089,0.6711,0.6712);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#FBEDC4").s().p("Ag7BcQgngPgfgcQgegbgRgkIgEgOQAAgmANgmIFcB/QgqA2hCATQgeAJgeAAQgkAAgkgNg");
	this.shape_798.setTransform(198.4157,346.1485,0.671,0.6711);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#FCEAB3").s().p("Ag/BCQgxgTgjgnQgiglgNgxQARAkAfAcQAeAbAoAOQBBAZBCgUQBCgUAqg1IAgAMQgmBDhIAbQgmAOglAAQgkAAglgNg");
	this.shape_799.setTransform(199.6074,350.4734,0.671,0.6711);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#B2CB08").s().p("AhBBbQhAgXgmg2Qgkg1gChBQALA2AjArQAkAqA1AUQBKAbBKgcQBIgbAmhDIASAHQgfBRhPAlQgsAUgtAAQgjAAglgOg");
	this.shape_800.setTransform(200.1331,351.2875,0.6711,0.6712);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#B2CB08").s().p("Ag4A8IA5g8QAlgkATgdQgnBDhHBAg");
	this.shape_801.setTransform(217.9675,319.5994,0.6711,0.6712);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#A6BD17").s().p("AhFAwQAPgwAXggQAYgfAtgRQAYgJASgCIAAAsQgGAxgXAfQgYAfg3ARIgzALQACgTAIgZg");
	this.shape_802.setTransform(219.511,317.5356,0.6711,0.6712);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#B2CB08").s().p("Ag7DKQgegEgcgWQgWgTgUgdQg/hYAGhVQADg0AbgkQAPgUAUgMQAWgNAXgCQAWgCAVAIQAWAIAQAQQAXghAlgNQAlgMAnALQAkALAbAfQAZAcALAoQATBCgaBEQgYBAg4AtQgwAngwAGQgWADgXgFQgNAEgPAAIgNgBg");
	this.shape_803.setTransform(214.7689,340.4924,0.6711,0.6712);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#A6BD17").s().p("AAJDQQgkAOglgJQgegHglgZQg/gsghg8QglhDAJhGQAIg8AlgqQAqgtA4gGQAfgEAfALQAeAKAWAVQAggfAsgIQArgIApASQAxAWAaAzQAYAugDA5QgGBghUBbQgdAfgZAOQgYAMgcABIgHAAQgYAAgWgJg");
	this.shape_804.setTransform(213.0882,340.472,0.6711,0.6712);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#676767").s().p("AgOghQgIgLgBgFQgBgEABgEQABgEADgDQAEgDADgBQAEgBAEACQAEACAEAHQAbAmgJAyQgEAVgIASQAHg3gfgvg");
	this.shape_805.setTransform(212.2969,324.9316,0.6711,0.6712);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#66CAEC").s().p("AjmAsQhggSAAgaQAAgYBggTQBggSCGAAQCHAABgASQBgATAAAYQAAAahgASQhfASiIAAQiHAAhfgSg");
	this.shape_806.setTransform(205.4074,355.008,0.6712,0.6712);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#F3F2F2").s().p("AgNBDIAAhtIgkAAIAAgXIBjAAIAAAXIgkAAIAABtg");
	this.shape_807.setTransform(150.1632,314.0693,0.6711,0.6712);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#F3F2F2").s().p("AAVBDIgeg0IgPAAIAAA0IgcAAIAAiEIAmAAQAagBAOALQAMAJAAAUQAAANgGAJQgGAIgMAEIAnA7gAgYgHIAJAAQAOAAAFgDQAGgFAAgKQAAgJgHgEQgEgEgPAAIgIAAg");
	this.shape_808.setTransform(142.9991,314.0693,0.6711,0.6712);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#F3F2F2").s().p("AgnA2QgOgNAAgXIAAhUIAcAAIAABQQAAAPAGAHQAGAIAOAAQAOAAAFgIQAHgGAAgQIAAhQIAcAAIAABUQgBAQgGAKQgHAMgMAFQgMAHgRAAQgZgBgOgNg");
	this.shape_809.setTransform(133.5699,314.1365,0.6711,0.6712);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#F3F2F2").s().p("AAbBDIAAg6Ig0AAIAAA6IgcAAIAAiEIAcAAIAAA0IA0AAIAAg0IAcAAIAACEg");
	this.shape_810.setTransform(124.0737,314.0693,0.6711,0.6712);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#F3F2F2").s().p("AgmAzQgPgSgBghQAAgfASgSQATgSAgAAQAVAAASAIIgJAWQgOgHgRAAQgRAAgKAMQgLAMAAAUQgBAWAJALQAJAMAQAAQAKAAAIgCIAAgcIgZAAIAAgWIA1AAIAABEIgYAGIgYABQgcAAgRgRg");
	this.shape_811.setTransform(114.6446,314.0861,0.6711,0.6712);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#F3F2F2").s().p("AguAzQgQgSAAghQAAggAQgSQARgRAdAAQAfgBAQATQAQAQAAAhQAAAggQATQgQASgfAAQgdAAgRgSgAgYghQgJAMAAAVQAAAWAJAMQAJALAPAAQAiAAAAgtQAAgsgiAAQgPAAgJALg");
	this.shape_812.setTransform(105.2658,314.0693,0.6711,0.6712);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#F3F2F2").s().p("AgNBDIAAgzIgshRIAeAAIAbA3IAcg3IAeAAIgsBQIAAA0g");
	this.shape_813.setTransform(96.4071,314.0693,0.6711,0.6712);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#02A7E1").s().p("AhaAqQgIAAgFgHQgFgGACgIIANgpQADgKAHgGQAJgFAJAAICsAAQgIAAgJAFQgHAGgDAKIgNApQgCAIAFAGQAFAHAHAAg");
	this.shape_814.setTransform(98.4764,292.9264,0.6711,0.6712);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#005370").s().p("AgqAqQAHAAAGgHQAFgHgDgHIgNgpQgCgJgIgHQgIgFgJAAIBeAAQAJAAAJAFQAHAGADAKIANApQACAIgFAGQgFAHgIAAg");
	this.shape_815.setTransform(151.0133,292.9264,0.6711,0.6712);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#017DA8").s().p("Ao3AqQgIAAgFgHQgFgGADgIIAMgpQAEgKAHgGQAIgFAJAAIQ9AAQAJAAAIAFQAIAHACAJIANApQADAHgFAHQgGAHgHAAg");
	this.shape_816.setTransform(122.5134,292.9264,0.6711,0.6712);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#02A7E1").s().p("Ah2BLIAmh8QADgLAKgHQAKgHALAAIClAAQgLAAgKAHQgKAHgDALIglB8g");
	this.shape_817.setTransform(100.3079,290.7114,0.6711,0.6712);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#005370").s().p("AgPBLIgmh8QgDgLgKgHQgKgHgLAAIBnAAQALAAAKAHQAKAHADALIAmB8g");
	this.shape_818.setTransform(149.4669,290.7114,0.6711,0.6712);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#017DA8").s().p("Ao4BLIAmh8QADgLAKgHQAKgHALAAIPhAAQALAAAKAHQAKAHADALIAmB8g");
	this.shape_819.setTransform(122.5134,290.7114,0.6711,0.6712);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#F3F3F3").s().p("AhBAeQgIAAgGgGQgGgGgBgIIgDgnICbAAIADAnQABAJAGAFQAHAGAHAAg");
	this.shape_820.setTransform(98.7728,297.7423,0.6711,0.6712);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#ABB7AF").s().p("AgvAeQAHAAAGgGQAGgFABgJIADgnIBIAAIgDAnQAAAIgHAGQgGAGgHAAg");
	this.shape_821.setTransform(150.5491,297.7423,0.6711,0.6712);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#E6E6E6").s().p("AnzAeQgIAAgGgGQgGgGgBgIIgDgnIQXAAIgDAnQAAAIgHAGQgGAGgIAAg");
	this.shape_822.setTransform(122.5134,297.7423,0.6711,0.6712);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#02A7E1").s().p("Ag6DwIAqoCIBLAAIgtIlQgggUgogPg");
	this.shape_823.setTransform(148.9787,314.1127,0.6711,0.6712);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#DB2F42").s().p("AgGAFQgCgCABgDQABgDADgCQAHgFADAGQACACgBADQgBADgCACQgEACgBAAQgEAAgCgDg");
	this.shape_824.setTransform(126.0255,355.9229,0.671,0.6711);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#C7293A").s().p("AgVAcQgKgIAAgNQAAgNAKgLQAJgMAMgCQANgDAKAHQAJAIAAANQAAANgKALQgJAMgNADIgFAAQgJAAgHgFg");
	this.shape_825.setTransform(125.9081,357.1399,0.671,0.6711);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#DB2F42").s().p("AgDAIQgCgBgBgDQgBgDABgDQABgDAEgCQACgBACABQADABABAEQABACgBADQgDAGgEAAIgDgBg");
	this.shape_826.setTransform(128.6926,357.781,0.671,0.6711);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#B22536").s().p("AgUAaQgJgIgBgNQAAgMAJgKQAIgLANgCQAMgDAJAIQAJAIABANQAAALgJALQgIALgNACIgFABQgJAAgHgGg");
	this.shape_827.setTransform(127.619,358.0201,0.671,0.6711);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#DB2F42").s().p("AgGAFQgEgFAHgFQAGgFAEAGQACACgBADQgBADgDACQgDACgBAAQgEAAgCgDg");
	this.shape_828.setTransform(124.6627,354.5139,0.671,0.6711);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#B22536").s().p("AgUAaQgJgIgBgNQAAgLAJgLQAJgLAMgCQAMgDAJAIQAKAHAAANQAAAMgJALQgIALgNACIgFABQgJAAgHgGg");
	this.shape_829.setTransform(124.6341,355.62,0.671,0.6711);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#DB2F42").s().p("AgGAFQgEgFAHgFQAGgFAEAGQAEAFgHAFQgDACgBAAQgEAAgCgDg");
	this.shape_830.setTransform(129.49,355.4917,0.671,0.6711);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#C7293A").s().p("AgVAcQgKgIAAgNQAAgNAKgLQAJgMAMgCQANgDAKAHQAJAIAAANQAAANgJALQgKAMgNADIgFAAQgJAAgHgFg");
	this.shape_831.setTransform(129.3803,356.7037,0.671,0.6711);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#DB2F42").s().p("AgGAFQgEgGAHgEQAGgFAEAGQACACgBADQgBADgDACQgDADgCAAQgDAAgCgEg");
	this.shape_832.setTransform(127.615,353.9601,0.671,0.6711);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#B22536").s().p("AgWAcQgJgIAAgNQAAgNAJgLQAKgMAMgDQANgCAJAHQAKAIAAANQAAANgKALQgJALgNADIgGABQgJAAgHgFg");
	this.shape_833.setTransform(127.5016,355.1759,0.671,0.6711);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#DB2F42").s().p("AgGAFQgEgFAHgFQAGgFAEAGQACACgBADQgBADgDACQgDACgBAAQgEAAgCgDg");
	this.shape_834.setTransform(125.7363,352.4336,0.671,0.6711);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#C7293A").s().p("AgWAcQgJgIAAgNQAAgNAJgLQAKgMAMgCQANgDAJAHQAKAIAAANQAAANgKALQgJAMgNADIgFAAQgJAAgIgFg");
	this.shape_835.setTransform(125.6229,353.6504,0.671,0.6711);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#DB2F42").s().p("AgGAFQgCgDABgCQABgDACgCQADgCADAAQADAAACADQAEAEgHAGQgDACgCAAQgDAAgCgDg");
	this.shape_836.setTransform(124.396,351.3438,0.671,0.6711);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#B22536").s().p("AgWAcQgJgHAAgOQAAgNAKgLQAJgLAMgDQANgDAKAHQAJAIAAANQAAANgKALQgJAMgNADIgGAAQgJAAgHgFg");
	this.shape_837.setTransform(124.2642,352.5496,0.671,0.6711);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#DB2F42").s().p("AgCAIQgDgBgBgEQgBgDABgCQAEgIAGADQAGADgDAHQgBADgDACIgDABIgCgBg");
	this.shape_838.setTransform(131.8905,357.4203,0.671,0.6711);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#B22536").s().p("AgWAcQgJgIAAgNQAAgMAJgMQAKgMAMgDQANgCAJAHQAKAIAAANQAAANgKALQgJAMgNACIgGABQgJAAgHgFg");
	this.shape_839.setTransform(130.7381,357.793,0.671,0.6711);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#DB2F42").s().p("AgGAFQgCgCABgDQABgDADgCQAGgFAEAGQAEAFgHAFQgDACgCAAQgDAAgCgDg");
	this.shape_840.setTransform(132.2462,354.0439,0.671,0.6711);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#C7293A").s().p("AgVAcQgKgIAAgNQAAgNAKgLQAJgMAMgDQANgCAKAHQAJAIAAANQAAANgKALQgJAMgNACIgGABQgJAAgGgFg");
	this.shape_841.setTransform(132.1144,355.243,0.671,0.6711);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#DB2F42").s().p("AgGAFQgCgDABgCQABgDADgCQADgCACAAQAEAAABADQACACgBACQAAAEgDACQgEACgBAAQgEAAgCgDg");
	this.shape_842.setTransform(130.3532,352.5182,0.671,0.6711);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#B22536").s().p("AgWAcQgJgHAAgOQAAgNAKgLQAJgLAMgDQANgDAKAHQAJAIAAANQAAANgKALQgJAMgNADIgGAAQgJAAgHgFg");
	this.shape_843.setTransform(130.2358,353.7186,0.671,0.6711);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#DB2F42").s().p("AgGAFQgCgCABgDQABgDADgCQACgCADAAQADABACACQACACgBADQgBADgCACQgEACgBAAQgEAAgCgDg");
	this.shape_844.setTransform(128.4745,351.0048,0.671,0.6711);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#C7293A").s().p("AgWAcQgJgIAAgNQAAgNAKgLQAJgMAMgDQANgCAKAHQAJAIAAANQAAANgKALQgJAMgNACIgGABQgJAAgHgFg");
	this.shape_845.setTransform(128.3571,352.1896,0.671,0.6711);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#DB2F42").s().p("AgGAFQgCgDABgCQABgDADgCQADgCACAAQADAAACADQACACgBACQAAAEgEACQgDACgCAAQgDAAgCgDg");
	this.shape_846.setTransform(126.5958,349.4648,0.671,0.6711);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#B22536").s().p("AgWAcQgJgIAAgNQAAgNAKgLQAJgLAMgDQANgDAKAHQAJAIAAANQAAANgKALQgJAMgNADIgGAAQgJAAgHgFg");
	this.shape_847.setTransform(126.4784,350.6652,0.671,0.6711);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#DB2F42").s().p("AgBAIQgDgBgCgCQgEgFAHgFQAGgFAEAGQAFAFgIAFQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgBAAg");
	this.shape_848.setTransform(125.1843,348.2922,0.671,0.6711);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#C7293A").s().p("AgWAcQgJgIAAgNQAAgNAKgLQAJgMAMgCQANgDAJAHQAKAIAAANQAAANgKALQgJAMgNADIgGAAQgJAAgHgFg");
	this.shape_849.setTransform(125.0685,349.5233,0.671,0.6711);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#DB2F42").s().p("AgCAIQgHgCADgIQAEgHAGACQACABABAEQABACgBADQgBAEgDABIgDABIgCgBg");
	this.shape_850.setTransform(134.6625,356.0027,0.671,0.6711);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#B22536").s().p("AgVAcQgKgIAAgNQAAgNAKgLQAJgMAMgCQANgDAKAHQAJAIAAANQAAANgKALQgJAMgNADIgFAAQgKAAgGgFg");
	this.shape_851.setTransform(133.5243,356.4017,0.671,0.6711);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#DB2F42").s().p("AgBAIQgDgBgCgCQgCgDABgCQAAgDADgCQAHgFAEAGQACACgBADQgBADgDACQgCACgCAAIgBAAg");
	this.shape_852.setTransform(133.1041,351.043,0.671,0.6711);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#B22536").s().p("AgWAcQgJgIAAgNQAAgNAKgLQAJgMAMgCQANgDAJAHQAKAIAAANQAAANgKALQgJAMgNADIgGAAQgJAAgHgFg");
	this.shape_853.setTransform(132.9859,352.2747,0.671,0.6711);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#DB2F42").s().p("AgCAIQgDgBgBgDQgBgDABgDQAEgHAGACQACABABAEQABACgBADQgBAEgDABIgDABIgCgBg");
	this.shape_854.setTransform(136.006,353.4191,0.671,0.6711);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#C7293A").s().p("AgWAcQgJgIAAgNQAAgMAKgMQAJgMAMgCQANgEAJAIQAKAHAAAOQAAANgKALQgJAMgNACIgGABQgJAAgHgFg");
	this.shape_855.setTransform(134.8645,353.7924,0.671,0.6711);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#DB2F42").s().p("AgGAFQgEgFAHgFQAGgFAEAGQACACgBADQgBADgDACQgCACgDAAQgDAAgCgDg");
	this.shape_856.setTransform(131.219,349.5136,0.671,0.6711);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#C7293A").s().p("AgWAcQgJgIAAgNQAAgNAKgLQAJgMAMgDQANgDAJAIQAKAIAAANQAAANgKALQgJALgNADIgGABQgJAAgHgFg");
	this.shape_857.setTransform(131.108,350.7403,0.671,0.6711);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#DE5C6C").s().p("AgBAIQgEgBgBgCQgCgDABgCQABgDACgCQAGgFAFAGQACACgBADQgBADgDACQgCACgCAAIgBAAg");
	this.shape_858.setTransform(129.3467,347.9896,0.671,0.6711);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#B22536").s().p("AgWAcQgJgIAAgNQAAgNAKgLQAJgMAMgCQANgDAJAHQAKAIAAANQAAANgKALQgJAMgNADIgGAAQgJAAgHgFg");
	this.shape_859.setTransform(129.2285,349.2213,0.671,0.6711);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#E27985").s().p("AgBAIQgEgBgBgCQgCgDABgCQABgDADgCQACgCADAAQADAAACADQAEAEgHAGQgCACgCAAIgBAAg");
	this.shape_860.setTransform(127.4721,346.4806,0.671,0.6711);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#C7293A").s().p("AgWAcQgJgIAAgNQAAgNAKgLQAJgMAMgDQANgCAJAHQAKAIAAANQAAANgKALQgJALgNADIgGABQgJAAgHgFg");
	this.shape_861.setTransform(127.3498,347.6935,0.671,0.6711);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#DB2F42").s().p("AgGAFQgCgCABgDQABgDADgCQACgCADAAQADABACACQAEAFgHAFQgDACgCAAQgDAAgCgDg");
	this.shape_862.setTransform(126.2411,345.5021,0.671,0.6711);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#B22536").s().p("AgVAcQgKgIAAgNQAAgNAKgLQAJgMAMgCQANgDAKAHQAJAIAAANQAAANgKALQgJAMgNACIgGABQgJAAgGgFg");
	this.shape_863.setTransform(126.1094,346.6959,0.671,0.6711);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#DB2F42").s().p("AgCAIQgDgBgBgDQgBgDABgDQAEgIAFADQADABABAEQABACgBADQgDAGgEAAIgCgBg");
	this.shape_864.setTransform(137.2473,354.4234,0.671,0.6711);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#B22536").s().p("AgVAcQgKgIAAgNQAAgNAKgLQAJgMAMgCQANgDAKAHQAJAIAAANQAAANgJALQgKAMgNADIgFAAQgJAAgHgFg");
	this.shape_865.setTransform(136.0739,354.7912,0.671,0.6711);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#DB2F42").s().p("AgGAFQgEgFAHgFQAGgFAEAGQACADgBACQgBADgDACQgDACgCAAQgDAAgCgDg");
	this.shape_866.setTransform(133.9632,348.0699,0.671,0.6711);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#C7293A").s().p("AgWAcQgJgIAAgNQAAgNAJgLQAKgMAMgCQANgDAJAHQAKAIAAANQAAANgKALQgJAMgNADIgFAAQgKAAgHgFg");
	this.shape_867.setTransform(133.8422,349.2884,0.671,0.6711);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#DB2F42").s().p("AgCAIQgDgBgBgEQgBgDABgCQAEgIAFADQADABABADQABADgBADQgDAGgEAAIgCgBg");
	this.shape_868.setTransform(136.8783,350.4435,0.671,0.6711);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#B22536").s().p("AgVAcQgKgIAAgNQAAgNAKgLQAJgMAMgDQANgDAKAIQAJAIAAANQAAANgJALQgKALgNADIgGABQgJAAgGgFg");
	this.shape_869.setTransform(135.7209,350.8074,0.671,0.6711);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#DB2F42").s().p("AgCAIQgHgDADgHQACgDADgCQACgBACABQADABABAEQABACgBADQgDAGgEAAIgCgBg");
	this.shape_870.setTransform(138.748,351.9763,0.671,0.6711);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#C7293A").s().p("AgVAcQgKgIAAgNQAAgNAKgLQAJgMAMgCQANgDAKAHQAJAIAAANQAAANgKALQgJAMgNACIgGABQgJAAgGgFg");
	this.shape_871.setTransform(137.5836,352.3328,0.671,0.6711);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#DF6978").s().p("AgGAFQgEgFAHgFQAGgFAEAGQAEAFgHAFQgDADgCAAQgDAAgCgEg");
	this.shape_872.setTransform(132.0886,346.5449,0.671,0.6711);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#B22536").s().p("AgWAcQgJgIAAgNQAAgNAJgLQAKgMAMgDQANgCAJAHQAKAIAAANQAAANgKALQgJALgNADIgGABQgJAAgHgFg");
	this.shape_873.setTransform(131.9635,347.7606,0.671,0.6711);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#EEC0C6").s().p("AgGAFQgEgFAHgFQAGgFAEAGQAEAFgHAFQgDACgBAAQgEAAgCgDg");
	this.shape_874.setTransform(130.1945,345.023,0.671,0.6711);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#C7293A").s().p("AgVAcQgKgIAAgNQAAgNAKgLQAJgMAMgCQANgDAKAHQAJAIAAANQAAANgJALQgKAMgNADIgFAAQgJAAgHgFg");
	this.shape_875.setTransform(130.0689,346.2351,0.671,0.6711);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#DB2F42").s().p("AgGAFQgEgFAHgFQAGgFAEAGQAEAFgHAFQgDACgCAAQgDAAgCgDg");
	this.shape_876.setTransform(128.3312,343.5081,0.671,0.6711);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#B22536").s().p("AgWAcQgJgIAAgNQAAgNAJgLQAKgMAMgDQANgCAJAHQAKAIAAANQAAANgKALQgJAMgNACIgGABQgJAAgHgFg");
	this.shape_877.setTransform(128.2061,344.7072,0.671,0.6711);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#9AB64E").s().p("AgTAUQgFgQAOgSQAJgNAWgUQgKAXgDARQgFAbAJAcg");
	this.shape_878.setTransform(133.6343,344.2026,0.671,0.6711);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#ABCA56").s().p("AgLAbIgigaQAdAEAagKQAPgGAVgPQgOAagLALQgPAQgPAAIgCAAg");
	this.shape_879.setTransform(136.8837,346.7904,0.671,0.6711);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#ABCA56").s().p("AgMAYQgIgagBgIQgBgTAQgSQgCAOAJAbIAVA2g");
	this.shape_880.setTransform(131.4633,343.263,0.671,0.6711);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#9AB64E").s().p("AgSAOIgggdIA7AKQAdAEANgFQgPASgTADIgGABIgdgCg");
	this.shape_881.setTransform(138.4103,349.2624,0.671,0.6711);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#CCF166").s().p("AgnAsIgCgCQgCgDABgDQABgDADgCQApgbAZguQAFgFAFADQAFADAAAFQgbAzguAdIgEACQgCAAgDgCg");
	this.shape_882.setTransform(136.2351,344.5611,0.671,0.6711);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#FFFFFF").s().p("AgGAhQgJgCgEgMQgEgMADgMQAEgOAKgIQAIgIAKADQARAEgKAgQgJAegMAAIgEgBg");
	this.shape_883.setTransform(104.8604,343.5681,0.671,0.6711);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#DDB242").s().p("AADALQgEgCgEgDQgEgEgBgDQgBgEACgDQAFgFAJAIQAJAIgFAGQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAg");
	this.shape_884.setTransform(121.3104,353.3516,0.671,0.6711);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#DDB242").s().p("AADALQgEgBgDgEQgEgDgBgEQgCgEADgCQAFgGAJAJQAEADABADQABAFgCACQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgCAAg");
	this.shape_885.setTransform(120.5495,349.2924,0.671,0.6711);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#DDB242").s().p("AADAKQgEAAgEgEQgDgEgBgDQgBgEACgDQACgCAFABQADABADADQAFAEAAADQABAFgBACQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAIgCgBg");
	this.shape_886.setTransform(117.1688,352.9032,0.671,0.6711);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#DDB242").s().p("AADAKQgEgBgDgDQgEgEgBgDQgCgFADgCQACgCAEABQAEABAEADQAEAEABADQABAEgDADQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAIgCgBg");
	this.shape_887.setTransform(119.2731,345.285,0.671,0.6711);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#DDB242").s().p("AADALQgEgBgEgEQgEgDgBgEQgBgEACgDQAFgFAJAIQAJAIgFAGQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAg");
	this.shape_888.setTransform(116.2034,348.5535,0.671,0.6711);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#DDB242").s().p("AADAKQgEAAgDgEQgFgEgBgDQgBgFADgCQACgCAEABQAEAAADAEQAEAEACADQABAFgCACQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAIgCgBg");
	this.shape_889.setTransform(112.8076,352.165,0.671,0.6711);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#DDB242").s().p("AADAKQgEAAgEgEQgEgEgBgDQgBgFADgCQACgCAEABQADAAAEAEQAEAEABADQACAEgDADQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAIgCgBg");
	this.shape_890.setTransform(118.52,341.2267,0.671,0.6711);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#DDB242").s().p("AADAKQgDAAgEgEQgEgEgBgDQgCgEADgDQACgCAEABQADAAAEAEQAEAEACADQABAFgDACQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgCgBg");
	this.shape_891.setTransform(115.4486,344.5149,0.671,0.6711);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#DDB242").s().p("AADALQgEgBgDgEQgKgIAFgGQADgDAEABQAEABADAEQAKAIgGAGQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgCAAg");
	this.shape_892.setTransform(112.0695,348.1219,0.671,0.6711);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#DDB242").s().p("AgFAFQgEgDgBgDQgBgFACgCQADgDAEABQAEABADAEQAJAIgFAGQgCACgCAAQgFAAgFgGg");
	this.shape_893.setTransform(108.9983,351.4202,0.671,0.6711);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#DDB242").s().p("AgFAFQgEgDgBgEQgBgEACgCQADgDAEABQAEABADAEQAEADABAEQACAEgDADQgCACgCAAQgFAAgFgGg");
	this.shape_894.setTransform(117.2101,337.2607,0.671,0.6711);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#DDB242").s().p("AADAKQgEAAgEgEQgEgEgBgDQgBgFADgCQACgCAEABQADAAAEAEQAEAEABADQACAEgDADQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAIgCgBg");
	this.shape_895.setTransform(114.1588,340.4885,0.671,0.6711);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#DDB242").s().p("AADALQgDgBgEgEQgEgDgBgEQgCgEADgCQAFgGAJAJQADADACAEQABAEgDACQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAg");
	this.shape_896.setTransform(111.0874,343.7561,0.671,0.6711);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#DDB242").s().p("AADALQgEgCgEgDQgEgEgBgEQgBgDACgDQADgCAEAAQADABAEAEQAJAIgFAGQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAg");
	this.shape_897.setTransform(107.7235,347.3837,0.671,0.6711);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#DDB242").s().p("AADALQgEgBgDgEQgEgDgBgEQgCgEADgCQAFgGAJAJQAEADABAEQABAEgDACQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAg");
	this.shape_898.setTransform(104.9816,350.2654,0.671,0.6711);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#DDB242").s().p("AgFAGQgJgIAGgGQACgDAEABQAEABADAEQAKAIgFAGQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgEAAgGgFg");
	this.shape_899.setTransform(113.4115,336.4499,0.671,0.6711);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#DDB242").s().p("AADAKQgEAAgEgEQgEgEgBgDQgBgEACgDQADgCAEABQAEABADADQAEAEABADQACAEgDADQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAIgCgBg");
	this.shape_900.setTransform(110.3327,339.7168,0.671,0.6711);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#DDB242").s().p("AADALQgEgBgEgEQgEgDgBgEQgBgEACgDQAFgFAJAIQAJAIgFAGQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAg");
	this.shape_901.setTransform(106.9777,343.3191,0.671,0.6711);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#DDB242").s().p("AADALQgEgBgEgEQgEgDgBgEQgBgEACgDQAFgFAJAIQAJAIgFAGQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgCAAg");
	this.shape_902.setTransform(103.8913,346.6074,0.671,0.6711);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#A93B0E").s().p("AAEChIgRgEIAGgDQALgLAGgPQAGgPgCgPIgWioQgEgegSgYQgSgZgdgNQAOABAHACQAgAIAWAWQAVAWAJAeIAvCiQAKAhgXAaQgLAMgQAEQgIADgIAAQgIAAgHgCg");
	this.shape_903.setTransform(119.1256,345.6281,0.6711,0.6712);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#C94D20").s().p("ABcChIilgkQgegHgXgVQgYgVgKgfQgJgeAHgfQAHgeAWgXIA0g4QAWgWAdgJQAegKAfAIQAgAHAWAWQAWAWAJAeIAvCjQAKAggXAbQgLALgQAFQgIACgIAAQgIAAgHgCg");
	this.shape_904.setTransform(113.1451,345.4937,0.671,0.6711);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#8A9A29").s().p("AgLAqQgGgCAAgRQgBgQAFgPQAEgNALgLIAKgJIAFANQADAQgEAMQgEAQgJANQgHANgGAAIgBAAg");
	this.shape_905.setTransform(108.399,334.8597,0.671,0.6711);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#9AAA2D").s().p("AgGAkQgJgSgEgTQgEgRAHgTIAHgQIALAMQANAQAEAQQAEAUgCAUQgCAVgIACIgBAAQgHAAgJgSg");
	this.shape_906.setTransform(106.0457,335.023,0.671,0.6711);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#8A9A29").s().p("AgbATIgNgEQACgFAGgGQAKgMAMgEQAPgGAQgBQASgBACAGQACAGgOAJQgNAKgQAGQgHADgJAAIgLgBg");
	this.shape_907.setTransform(102.0473,341.6209,0.671,0.6711);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#9AAA2D").s().p("AgIATQgRgCgQgMIgMgLIAPgIQATgHAQACQAUADATAIQATAIgBAIQgBAIgVADQgLACgLAAIgSgCg");
	this.shape_908.setTransform(102.0571,339.2793,0.671,0.6711);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#8A9A29").s().p("AAOAkQgTgJgQgPQgNgMgGgVIgDgTIAUACQAVAEAMAMQARAPAKASQALAUgHAHQgCADgGAAQgHAAgMgFg");
	this.shape_909.setTransform(104.2693,337.4735,0.671,0.6711);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#FFFFFF").s().p("AgiATQgFgKAGgLQAHgNAPgHQAOgHAOACQAOACAFALQAIAQgjARQgRAJgLAAQgLAAgEgJg");
	this.shape_910.setTransform(127.4364,329.5317,0.671,0.6711);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#DDB242").s().p("AgGANQgEgCAAgFQAAgFADgFQADgFAEgCQAEgDADACQAIAEgHAMQgDAGgEACIgEACIgDgBg");
	this.shape_911.setTransform(123.8431,350.437,0.671,0.6711);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#DDB242").s().p("AgGANQgEgCAAgFQAAgFADgEQADgGAEgCQAEgDADACQAEACAAAFQAAAFgDAEQgDAGgEADIgEABIgDgBg");
	this.shape_912.setTransform(128.1222,348.4516,0.671,0.6711);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#DDB242").s().p("AgGANQgDgCAAgFQgBgFADgFQADgFAEgDQAEgCADACQADACABAFQAAAFgDAEQgDAGgEACIgEACIgDgBg");
	this.shape_913.setTransform(123.1404,345.706,0.671,0.6711);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#DDB242").s().p("AgGANQgEgCAAgFQAAgFADgEQADgGAEgDQAEgCADACQAEACAAAFQAAAFgDAFQgDAFgEADIgEABIgDgBg");
	this.shape_914.setTransform(132.2486,345.8738,0.671,0.6711);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#DDB242").s().p("AgGANQgDgBgBgGQAAgFADgFQADgFAEgDQAEgCADACQADACAAAFQABAFgDAEQgDAGgFACIgDACIgDgBg");
	this.shape_915.setTransform(127.7029,343.3573,0.671,0.6711);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#DDB242").s().p("AgGANQgEgCAAgFQAAgFADgFQADgFAEgDQAEgCADACQAEACAAAFQAAAFgDAEQgDAGgEACIgEACIgDgBg");
	this.shape_916.setTransform(122.721,340.6395,0.671,0.6711);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#DDB242").s().p("AgGANQgEgCAAgFQAAgFADgEQADgGAEgCQAEgDADACQAEACAAAFQAAAFgDAEQgDAGgEACIgEACIgDgBg");
	this.shape_917.setTransform(136.5428,343.8694,0.671,0.6711);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#DDB242").s().p("AgGANQgDgCgBgFQAAgFADgFQADgEAEgDQAEgDADACQAEACAAAFQAAAFgDAEQgDAGgFACIgDACIgDgBg");
	this.shape_918.setTransform(131.997,341.3777,0.671,0.6711);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#DDB242").s().p("AgGANQgEgCAAgFQAAgFADgFQADgFAEgDQAEgCADACQAEACAAAEQAAAGgDAEQgDAFgEADIgEACIgDgBg");
	this.shape_919.setTransform(127.0152,338.6598,0.671,0.6711);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#DDB242").s().p("AgGANQgEgCAAgFQAAgFADgEQADgGAEgCQAEgDADACQADACABAFQAAAFgDAFQgDAFgEADIgEABIgDgBg");
	this.shape_920.setTransform(122.4694,336.1433,0.671,0.6711);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#DDB242").s().p("AgGANQgDgCAAgFQgBgFADgEQADgGAEgCQADgDAEACQAEABgBAFQABAGgDAEQgDAFgFAEIgDABIgDgBg");
	this.shape_921.setTransform(140.6189,341.277,0.671,0.6711);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#DDB242").s().p("AgGANQgDgCAAgFQgBgFADgEQADgGAEgCQAEgDADACQADACABAFQAAAFgDAFQgDAFgEADIgEABIgDgBg");
	this.shape_922.setTransform(136.1234,338.794,0.671,0.6711);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#DDB242").s().p("AgGANQgEgCAAgFQAAgFADgEQADgGAEgCQAEgDADACQAEACAAAFQAAAFgDAFQgDAFgEACIgEACIgDgBg");
	this.shape_923.setTransform(131.5777,336.3111,0.671,0.6711);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#DDB242").s().p("AgGANQgEgCABgFQgBgFADgEQADgGAEgDQADgCAEACQADACAAAFQABAFgDAEQgDAGgFADIgDABIgDgBg");
	this.shape_924.setTransform(126.5958,333.5597,0.671,0.6711);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#DDB242").s().p("AgGANQgEgCAAgFQAAgFADgEQADgGAEgCQAEgDADACQAEACAAAFQAAAFgDAEQgDAGgFADIgDABIgDgBg");
	this.shape_925.setTransform(122.5844,331.365,0.671,0.6711);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#DDB242").s().p("AgGANQgEgCABgFQgBgFADgEQADgGAEgDQAEgCADACQADACAAAFQABAFgDAFQgDAFgEADIgEABIgDgBg");
	this.shape_926.setTransform(140.4176,336.8144,0.671,0.6711);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#DDB242").s().p("AgGANQgEgCAAgFQAAgFADgEQADgGAEgCQAEgDADACQAEACAAAFQAAAFgDAEQgDAGgEADIgEABIgDgBg");
	this.shape_927.setTransform(135.8742,334.3256,0.671,0.6711);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#DDB242").s().p("AgGANQgEgCABgFQgBgFADgFQADgFAEgDQADgCAEACQAEACgBAFQABAFgDAEQgDAGgFACIgDACIgDgBg");
	this.shape_928.setTransform(130.8899,331.5801,0.671,0.6711);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#DDB242").s().p("AgGANQgEgCAAgFQAAgFADgFQADgFAEgDQAEgCADACQAEACAAAFQAAAFgDAEQgDAGgEACIgEACIgDgBg");
	this.shape_929.setTransform(126.3466,329.0971,0.671,0.6711);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#A93B0E").s().p("AiXCuQA0gbA4gsQBvhZARhVQAHgmgXgoIgZghIAnAWQAfARATAeQATAgAAAlQABAlgSAfQgSAfgfASIioBjQgSALgSAAQgRAAgQgJg");
	this.shape_930.setTransform(132.6387,341.4236,0.671,0.6711);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#C94D20").s().p("AiCDBQgQgJgJgQQgJgQgBgSIgHjDQgBgkAQgfQARghAggUQAfgTAlgBQAkAAAfARIBNArQAfARATAeQATAgAAAlQABAkgSAgQgSAfgfASIioBjQgSALgSAAQgQAAgRgJg");
	this.shape_931.setTransform(131.2109,340.148,0.671,0.6711);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#8A9A29").s().p("AAFASQgTgBgRgFQgTgHABgGQAAgHATgFQASgFASABQAZABATASQgTAQgYAAIgCAAg");
	this.shape_932.setTransform(140.7694,330.7542,0.671,0.6711);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#9AAA2D").s().p("Ag3AaQgEgIASgQQARgPAWgLQARgIAXABQALABAIADIgJARQgOASgRAJQgVAKgXAEIgNABQgNAAgCgGg");
	this.shape_933.setTransform(139.8737,328.2697,0.671,0.6711);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#8A9A29").s().p("AAGAhQgOgMgLgQQgIgMgCgSIAAgQIAPAGQAQAIAIAMQALAQAGARQAGATgGAEIgEABQgGAAgLgJg");
	this.shape_934.setTransform(131.477,325.6308,0.671,0.6711);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#9AAA2D").s().p("AgKApQgJgVgDgYQgDgTAJgVIAKgSIAMAPQAOATACATQADAYgEAWQgEAZgKABIAAAAQgIAAgJgWg");
	this.shape_935.setTransform(133.9481,324.9537,0.671,0.6711);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#8A9A29").s().p("AgeA6QgJgFAEgaQAFgZAMgWQAKgSAVgMIAUgIIAEAWQACAZgKARQgNAWgRARQgPAOgJAAIgFgBg");
	this.shape_936.setTransform(136.825,326.8803,0.671,0.6711);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#E3AAE8").s().p("AgrBEIABgCIALiCQAsgGAeAEIgKCEIAAACg");
	this.shape_937.setTransform(144.9353,362.376,0.6711,0.6712);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#E3AAE8").s().p("AgoAsIAJh1QAuARAaAOIgJB0QgggOgogQg");
	this.shape_938.setTransform(146.4956,343.6101,0.6711,0.6712);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#D58AE5").s().p("AgnAcIAHhUQAqARAeAPIgHBRQgigRgmgMg");
	this.shape_939.setTransform(146.7573,340.498,0.6711,0.6712);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#EF8BC2").s().p("Ag6ESIABgDIAsogQAnAPAhAUIgqH9IAAADg");
	this.shape_940.setTransform(145.9855,348.6867,0.6711,0.6712);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#F4AED8").s().p("AkcDpQgrgsgRg4QgahHAWhNQAWhNA6gxQBehOCLgMQB4gKB+AqQBhAfAzAlIgIBsQgLAAgKgFQhyg4hhgWQiGgehTAqQg1AcgYAtQgbAyAdAyQAaAtBMAMQA2AJBDgJQAXgDBygcQBwgUApAbIgKB3IgBACg");
	this.shape_941.setTransform(128.0472,351.3902,0.6711,0.6712);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#E694F8").s().p("AlyD+Qg1hnAOhqQAOhxBYhMQCHh1DXAJQDEAHCuBnIgHBRQh+hHiSgRQiigShtBAQihBgAjCHQATBJA+A1g");
	this.shape_942.setTransform(124.6528,350.0265,0.6711,0.6712);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#EF8BC2").s().p("AmiEkIAAgCIgalAQA7huBtg+QCDhLDUgMQDsgOCOByIgnHfIgBACg");
	this.shape_943.setTransform(122.9401,347.3675,0.6711,0.6712);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#BAB8B0").s().p("AhGAeQAaAAATgSQATgQACgZIBLAAQgDAagSAPQgUASgbAAg");
	this.shape_944.setTransform(142.3531,369.0912,0.6711,0.6712);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#CACACA").s().p("AlXAeQgaAAgVgSQgSgPgDgaIM3AAQgDAZgSAQQgUASgbAAg");
	this.shape_945.setTransform(122.4966,369.0912,0.6711,0.6712);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#34B8E6").s().p("AlXIxQgaAAgVgSQgTgSgDgbIhWwjIPlAAIhXQjQgBAbgVASQgTASgbAAg");
	this.shape_946.setTransform(122.5134,333.4336,0.6711,0.6712);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#66CAEC").s().p("Al0A4QibgXAAghQAAgfCbgYQCagXDaAAQDaAACcAXQCaAYAAAfQAAAhiaAXQibAXjbAAQjaAAiagXg");
	this.shape_947.setTransform(114.7822,369.1879,0.6712,0.6712);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#B0BE10").s().p("AiRCaQgShKAXgtQAWgrBigfQAxgRBAgTQAXgPANgtQAOgugLglIARAwQANA5gTApQgRAkhQAcQhgAigYATQgmAhgJBJQgFAmADAeQgOgcgIglg");
	this.shape_948.setTransform(183.6812,259.769,0.6711,0.6712);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#C0CE02").s().p("AiHDaQgOgcgIglQgShKAXgtQAWgrBiggQAxgQBAgTQAXgQANgsQAOgugLglIAKAMQAMAPAIAUQAbA+gRBMQgVBahiBYQhWBMhDAAQgMAAgLgCg");
	this.shape_949.setTransform(184.4987,259.85,0.6711,0.6712);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#99A51F").s().p("AkUATQgSgSgOgWIgKgTIAOgeQAVAZA8AGQAMACB1ADQAxABBUAlQBXAoApABQA2ACA3gdIArgcIgHAMQgLAPgPANQgwAohLABQggAAhwgEQhLgChNAGIgRAAQhIAAg2g0g");
	this.shape_950.setTransform(196.7719,277.2085,0.6711,0.6712);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#A7B518").s().p("AkUAvQgSgSgOgXIgKgSIAphXIA6AfIA+gVQBLgOBGAgQAbANA3AiQA3AhAbANQBhAtBGgyIgHANQgLAPgPANQgwAohLABQggAAhwgEQhLgChNAGIgRABQhIAAg2g1g");
	this.shape_951.setTransform(196.7719,275.3124,0.6711,0.6712);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#A7B518").s().p("Ag1AZIgHgyIBrgBIAOAgQgSAHgYAGQggAIgWAAQgKAAgIgCg");
	this.shape_952.setTransform(173.4843,275.3821,0.6711,0.6712);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#FDC71C").s().p("Agug3IAIgBQAmA+AvArIgBAIQg8gyggg+g");
	this.shape_953.setTransform(219.0528,248.4927,0.6711,0.6712);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#FDC71C").s().p("AgBAQQgog2gPgqIAOgDQAdBKBGBXIgEAGQgdgggZgkg");
	this.shape_954.setTransform(216.9556,250.6238,0.6711,0.6712);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#FDC71C").s().p("AAJAdQgvgygmg/IAJgEQAZAlAeAmQAwA8ApAlIgDAFQgggZghgjg");
	this.shape_955.setTransform(214.053,252.5032,0.6711,0.6712);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#FDC71C").s().p("AhNhgIAKgGQBHCEBKBGIgDADQhthngrhgg");
	this.shape_956.setTransform(210.9156,255.0034,0.6711,0.6712);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#FDC71C").s().p("AADAVQg4hOgbguIAIgGICZDQIgLAKQgdgkgmg0g");
	this.shape_957.setTransform(208.2312,257.2855,0.6711,0.6712);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#FDC71C").s().p("AhKhsIAJgGICMDhIgFAEQhviUghhLg");
	this.shape_958.setTransform(205.2447,259.2991,0.6711,0.6712);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#FDC71C").s().p("AACAtQg3hAgchTIAMgIQAOAnAaAqQAsBIBCBAIgFAEQgngagjgog");
	this.shape_959.setTransform(202.3254,261.3966,0.6711,0.6712);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#FDC71C").s().p("Ag2gcQgMgXgHgVIgEgQIAMgKQAZBMAxA4QAgAkAlAXIgIAFQhTg4gphGg");
	this.shape_960.setTransform(196.2015,266.5146,0.6711,0.6712);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#FDC71C").s().p("AAAAoQg2g/gdhKIAOgLQAZA2AgAwQAvBHAxAlIgKAHQgngdgjgog");
	this.shape_961.setTransform(198.9027,263.964,0.6711,0.6712);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#FDC71C").s().p("Ai0CwQDZiFBbh5QAyhCABgqIABAAQAPBgi1CUQhZBKhdA3g");
	this.shape_962.setTransform(209.4107,260.1046,0.6711,0.6712);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#FDC71C").s().p("AjEBSQAxgiA7gnQB2hMA3gUQA3gTAkAPQATAHAIAMQgsg3i4BsQhdA1hUBAg");
	this.shape_963.setTransform(207.7782,252.3597,0.6711,0.6712);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#FDC71C").s().p("Ai9BMQDwiiBzgnQA6gUALAOQgygPjWCNQhrBFhiBKg");
	this.shape_964.setTransform(205.6641,256.3369,0.6711,0.6712);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#FDC71C").s().p("AjrCaIHXlIInHFdg");
	this.shape_965.setTransform(205.5635,259.2488,0.6711,0.6712);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#FDC71C").s().p("AjTClQBUg5BehJQC9iSA4hOIAAABQgUAphEBHQh8CAjSCKg");
	this.shape_966.setTransform(207.1742,260.222,0.6711,0.6712);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#FFD34B").s().p("AjvCxIgwhDIB5iBQBahRBkg8QDJh6A0BkQAzBki2CZQhcBNhkA5IhfAYg");
	this.shape_967.setTransform(202.9741,260.0024,0.6711,0.6712);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#575F21").s().p("Ah0BmQgNghBFhFQBEhEA/ghIAxgTQgsAdgaAqQgNAUgEAPIgXA5IgGAJIhdBFQgVgDgGgQg");
	this.shape_968.setTransform(210.8129,247.9222,0.6711,0.6712);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#747E25").s().p("AivBEQBniKCOg0QBHgaAyACQgrAdgaAqQgNAUgEAPIgXA5IhIBgIjJAig");
	this.shape_969.setTransform(205.9829,249.6625,0.6711,0.6712);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#575F21").s().p("ABSAMQhOgghiAfQhsAjCQheIAKgBQBYgJA7A2QAeAaAMAdQgUgXgngQg");
	this.shape_970.setTransform(212.0972,266.7275,0.6711,0.6712);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#747E25").s().p("AiyAzIAPhCQADgSAUgTQAognBagJQBYgJA8A2QAdAbAMAcQhRglhjA8QgxAfgiAnIgwAJg");
	this.shape_971.setTransform(209.5398,270.1506,0.6711,0.6712);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#66CAEC").s().p("AkXA8Qh1gZABgjQgBgiB1gZQB0gYCjAAQCkAAB0AYQB1AZgBAiQABAjh1AZQhzAYilAAQikAAhzgYg");
	this.shape_972.setTransform(192.0343,278.6552,0.6712,0.6712);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#99DBF3").s().p("ApDVdQkLhxjOjOQjPjPhxkLQh1kVAAkvQAAkuB1kVQBxkLDPjPQDOjNELhyQEVh1EuAAQEvAAEVB1QELByDPDNQDODPBxELQB1EVAAEuQAAEvh1EVQhxELjODPQjODOkMBxQkVB1kvAAQkuAAkVh1g");
	this.shape_973.setTransform(150.1194,301.0936,0.6712,0.6713);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764}]},4).wait(4));

	// Runner
	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#359188").s().p("AhlAmQgPgcgGgUQgIgbAFgZQAGghAWgZQAYgdAgAAQBUgBA6B6QAOAcANApQhVAqhDBDQgxg9gcgzg");
	this.shape_974.setTransform(342.5174,391.8031,0.6711,0.671);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#C4894D").s().p("Ag2ApQAHgMAIgdQAHgcAJgNIAHgHQAKgHAQACIAcAGQAFABAFACQAGADAAAFQAGASguAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAADQgBAJABARQAAAXgKATg");
	this.shape_975.setTransform(375.5423,395.5135,0.6711,0.671);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#C4894D").s().p("AhhDvQgIgFgPgNQgTgRgYgdIgpgxQg2hCgRgXQgogzgXgsQgPgcgGgUQgIgcAEgZQAGggAWgaQAZgcAfAAQBWgCA6B7QAOAdAXBHQAVBBASAiQAFAKAEABQAEAAAKgGIASgJQAVgJAigKIA5gPQA1gPAMgFQAmgQAOgXQAKgQAXgPIAXgOIAagQQAPgHALACQAFABAFAEQAEAEgCAGQAKAAAFAIQAGAJgDAJQAGABAEAHQACAIgEAGQAGACABAKQAEAXgaATQgUAOgdAGQgHACgUADQgRACgKADQgKAEgNAOQgiAagjAYQhGAwhJArQgUANgPAGQgVAJgSAAIgCAAQgNAAgMgHg");
	this.shape_976.setTransform(358.3956,398.3123,0.6711,0.671);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#3EB6AD").s().p("AAIGcQgygIhFgZQg3gUgZgWQgNgLgEgKQgGgQAMggQAdhTANhYQAJhFgLg2IgOhCQgHgmgCgcQgHhoAthjQALgXAVggQAsBCA8AQQAmALAugBIAJALQA1A7AcAuQAkA9AJA/QAHAtgIA3IgSBjQgPBNgWCbQgFAfgGAVIgCAEQgCACgEABQghALgnAAQgZAAgcgFg");
	this.shape_977.setTransform(343.2583,403.1714,0.6711,0.671);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#005370").s().p("AjCCYQgagSgVgUIAdhQQAahHAQgjQAbg7AhgmQAggmApgXQArgYAvgBQA0gCAtAOQA4ASAWAkQAUAigIAxQgGAjgXAuIgGAMQgkBFg1BIQgrA5g/BIQhugkhehFg");
	this.shape_978.setTransform(335.072,438.8549,0.6711,0.671);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#01404F").s().p("Ag6CVQgqg/gSgiQgeg4gMgxIgDgQIAEgIQAOgeAQgRQAQgRAigSQBRgsBDgJQAegEAVAGQAdAIAKAYQAGAOgCAYQgDA2gLAiQgJAbgSAgIghA4QgqBHgVAxQgIAVgFAHQgNADgPAAg");
	this.shape_979.setTransform(340.6927,441.8512,0.6711,0.671);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#005370").s().p("AhnDTQgqhAgTgiQgeg4gLgyQgLgvAHgvQAHgyAbgmQAegqAmgcQAvgiArAEQBCAHA2BpIAGAMQAkBLAbBcQAUBGAVBoQggAUgvASQgeAKgxAOIgQAEIgwAMQgdAHgWABg");
	this.shape_980.setTransform(343.7467,437.7216,0.6711,0.671);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#2D2D2D").s().p("AggDoQhHgMgEAFQgcAOghgVQghgVgTgqQgVgtAIgwQAJg4AvgrQAgguAYguQAfg9A8gdQA9geBBAPQArAKAsAvQAvAyAGAwQgJgDgGgEQgLgHgIgRQgCgEADAQQAEATgDAAQgJAFgZAGQgCABgIgSQgIgSgCAAQgCABACATQABAUgCAAQgQAFgWATQgHAbgFALQgCAEgEAQQgEANgEAGQgGAKgIgWQgFgQgOgGQgJgEgKADQgJACgHAIQgRAWARAhQAJARAEAPQAGAdgJAOQAOAhAEASQAGAagKASQgBACgIAAQgRAAgvgIg");
	this.shape_981.setTransform(337.4632,359.1314,0.6711,0.671);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#C4894D").s().p("AhACPQgxgpgchCQgSgmgDgjQgHhKA7grQA7grBFAZQAYAJAVASQAVATAJAWQALAYASAvQASAoAUAYIADAFQAEAJgNAHQgLAFgDAEQgEAEgCALQgFAigNAYQgKATgSAMQgSANgVADIgTABQgwAAgugng");
	this.shape_982.setTransform(345.8401,361.6392,0.6711,0.671);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#AC764B").s().p("AhFgPIAVgwIABgDIACgCQAKgGAOAAQAMABALAHQAIAFALAJIASAQIAVARQAKAKAAAKQgBAFgEAJIgNAdQgIASgEANQg+gTgvhHg");
	this.shape_983.setTransform(343.6295,370.6478,0.6711,0.671);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#C4894D").s().p("AAIHkQgygJhFgZQg2gTgagXQgMgKgFgLQgGgPAMghQAdhSANhYQAKhIgMg1IgNhAQgIgmgCgdQgHhpAthhQANgcAqg8QAVgeAdhFIACgDIACgCQAKgHAOABQAMABALAGQAOAIAXAWIAUARQALALgBAKQAAAFgEAJIgRAnQgKAXAAASQgBAVALAVQAIANATAVQA1A8AcAuQAlA9AIA+QAHAsgIA4IgSBjQgPBNgWCcQgDAXgIAcQgBAEgBABQgCACgEABQghAKgnAAQgZAAgcgEg");
	this.shape_984.setTransform(343.1912,398.3723,0.6711,0.671);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#359188").s().p("AiVgVQA+gzAxgcQAcgQATgGQAbgIAZADQAhAFAaAWQAcAYACAfQADBUh5A+QgaANgqAPQguhWhDhAg");
	this.shape_985.setTransform(335.4111,387.29,0.6711,0.671);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#C4894D").s().p("AgQFYQgOgTgHgdQgCgHgDgUQgCgRgEgJQgDgGgGgHIgKgLIgzhDQgtg+gyhOQgdgsgBgeQgBgOAIgNQAEgIANgPQARgVAcgYIAxgpQA9g2AagUQAygpArgYQAcgQAUgGQAbgJAZAEQAhAFAaAVQAcAYACAgQADBVh5A9QgdAPhGAYQhBAXghATQgKAGAAAEQgBADAGALIAKARQAKAUAKAiIARA5QAQA0AFAMQAQAlAYAOQASAKAOAWIAOAXIAJAMIAIAOQAHAOgCALQgBAHgDADQgFAFgFgCQABAJgJAGQgIAGgJgDQgCAHgHADQgHADgGgEQgCAGgKACIgGAAQgVAAgQgWg");
	this.shape_986.setTransform(329.0346,403.1741,0.6711,0.671);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#0198D7").s().p("AgiAHQAZgTAZgFQAJgDAIACIADABQAGADABAFQABAFgFAEQgNAJgbAAQgYAAgRAKQABgEAHgIg");
	this.shape_987.setTransform(273.9237,463.9602,0.6711,0.671);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#02A7E1").s().p("AhaCeQgMgGgFgMQgCgIgBgKIgCggQAAgRAEgOQAKgeAagcIAQgRQAJgLADgKIADgPIACgPQACgKAJgSQARghALgPQAQgYAcALQAqAPAbAlIgdAPQgMAJgKATQgOAbABAPQABARAFASQABAFgBACQgBADgFADIgFADQgJAHgHAEIggATQgRALgKAOQgJAKgIASIgPAeQgGANgIACIgEAAQgEAAgFgCg");
	this.shape_988.setTransform(271.2677,461.5758,0.6711,0.671);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#F3F3F3").s().p("AhQBMQgJgBgGgJQgGgIgBgKQAAgMAMgYIAQghQAKgTAKgMIALgMQAKgIAMgCQANgDAJAGQAGADAKAKQASAPAaAIIAqAKQgWAlgRAzQgngKgSgDQgegEgaAQIgPAKQgIAEgHAAIgBAAg");
	this.shape_989.setTransform(277.4754,458.6308,0.6711,0.671);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#017DA8").s().p("Ag6CkQgIgHgFgJQgEgHgFgVQgEgPADgfQADgcAQgaIAhgwQAHgLAFgQIAIgdQAJgdAOgaQAFgJAGgGQATgVAUAHQAMAEAGAKIABAEQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAIgCAAQgIAAgHAIQgDAEgHALQgNASgGASQgDALgEAWQgFAWgNAWQgGAKgVAaQgSAXgHAPQgHASgDAVQgDAWAEAKQADAJAIAFIAQAKIACACIgBACQgFAJgKAAQgKAAgKgHg");
	this.shape_990.setTransform(267.9161,461.2199,0.6711,0.671);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#C4894D").s().p("AD5CCQgPgCgZgJQg3gUhOgaIiEgsQhCgWhLgbIhIgYQg9gWgBgHQgCgPALgNQAKgNAQgGQAegLAvADQARAAA+AIQAlAFA2ABIBaABIAGABQB3AEBEAqQAiAUASAQQAbAXAMAZQANAegJAeQgJAfgeAOQgRAHgRAAIgHAAg");
	this.shape_991.setTransform(299.8625,465.7985,0.6711,0.671);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#02A7E1").s().p("AATAeQgcgNgQgUQgGgIgCgGIAAgEQAAgHADgDQAEgDAHADQAOAHALAZQALAVARALIgDAAQgEAAgIgDg");
	this.shape_992.setTransform(371.5967,512.7881,0.6711,0.671);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#02A7E1").s().p("AAXA7IgXgHQgNgDgLABIgOAEIgPAFQgLADgSgBQgjAAgVgDQgdgFgDgeQgEgsAUgoIANAKIANAJQANAHAWABQAPAAAIgBQAMgBAJgFQAPgJAPgMQADgDADAAQACgBAGADIAFAEQAJAEAHAFQAVAPAKAGQASALARADQANADAUAAIAhgBQAPABAFAGQADAEABAHQAAAOgJAJQgEAEgLAHIgbAQQgQAIgPACQgKABgKAAQgWAAgZgHg");
	this.shape_993.setTransform(371.1669,516.8506,0.6711,0.671);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#F3F3F3").s().p("AgoBNIgPgEQgMgGgHgJQgIgLAAgMIAFgUQAGgVgFgbIgKgrQAvADAygIQAGAjAIAXQAJAdAaAQIAPAJQAJAGACAHQADAIgFAKQgEAIgJAGQgMAFgaAAIgkABQgWgBgPgEg");
	this.shape_994.setTransform(366.2682,511.8349,0.6711,0.671);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#017DA8").s().p("AiAAxIgSgDQgbgIgDgVQgBgMAGgJIADgDQABAAAAgBQABAAAAAAQABABAAAAQABAAAAAAIABACQADAGALADIARADQAXAEASgEIAggHQAYgFAYACQAJABAkAIQAbAGASgBQARgBAWgIQAWgGAHgHQAGgGACgLIABgSIABgCIACgBQAKABAFAJQAEAJgCAMQgCAKgGAIQgFAGgQAOQgIAHgMAFIgVAJQgZAJgggCIg6gIQgNgCgQADIgeAFQgWAEgTAAIgTgBg");
	this.shape_995.setTransform(371.3817,519.563,0.6711,0.671);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#C4894D").s().p("ABbFMQgQgDgMgMQgXgWgTgrQgJgVgQg2QgMgjgXgxIgohTIgCgFQgwhsAHhPQAEgnAGgYQAJgiASgWQAVgaAegFQAggFAZAVQARAOAIAUQAFAOADAaQAGA6ALBSIATCKQAHAzAKBhIAKBMQAIBAgGAEQgJAGgKAAIgLgCg");
	this.shape_996.setTransform(358.8984,489.0639,0.6711,0.671);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#C4894D").s().p("Aj1GEQgZgJgMgXQgKgVACgnQADgzAchMIBhkPQAZhIARgjQAag6AhgnQAggmAogWQAtgZAugBQA1gBAsAOQA4ARAWAlQAVAigJAwQgGAjgWAuIgHANQg5BwhyCDQhCBMiGCUIgiAqQgWAXgWAHQgLADgMAAQgNAAgOgFg");
	this.shape_997.setTransform(331.7393,448.0115,0.6711,0.671);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#C4894D").s().p("ACfGsQgYgEgdgZQgngigrhDIifjxQgqg+gSgiQgeg5gMgxQgKgxAGguQAHgzAbglQAfgrAlgbQAwgiAqAEQBDAHA1BoIAGANQA4BxAlCrQAVBhAlDEIANA1QAGAggIAVQgJAZgWAOQgSAMgSAAIgNgCg");
	this.shape_998.setTransform(345.8463,448.0294,0.6711,0.671);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#66CAEC").s().p("ArgAeQgwgbgpgcQExgOHKAAQEaAADxAGQDqAGCDAJIhDAqQkoAQoNAAQmPAAkTgKg");
	this.shape_999.setTransform(335.8889,524.0324,0.6711,0.6711);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#99DBF3").s().p("AmFWeQi6gyimhgQgwgbgpgdQkwjNivlAQi0lMAAl7QAAkuB1kVQBykLDOjOQDOjPELhxQEVh1EuAAQEvAAEVB1QEMBxDODPQDODOBxELQB1EVAAEuQAAF/i3FNQixFDk1DMIhDArQipBji8AzQjCA2jLAAQjGAAi/g0g");
	this.shape_1000.setTransform(335.5245,439.3439,0.6711,0.6711);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974}]},4).wait(4));

	// Walker
	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f().s("#017DA8").ss(1.2,1).p("AAPgyIgWAbQgSAhAZAp");
	this.shape_1001.setTransform(473.984,208.6993,0.6711,0.6711);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#ECCA9B").s().p("ABIB1QgbgYgcACQgXgtgMgTQgXgggZgVIgkgaQgWgQgKgPICygkQAsgJAXgBQAKAAAEADQALAGgBAPQAAAHgGAQQgeBKANBRQgFAMgHAbQgEAKgHAAQgHAAgKgJg");
	this.shape_1002.setTransform(497.7896,293.6207,0.671,0.671);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#FFFFFF").s().p("AAdBwQgRgEgRgPQgFgGgFgJIgJgRQgxhfgagwIgHgMQAcgCAcAYQAUASAIgTQAGgbAFgMQAIAwAUAxQAKAWAHAMQAMASAOAKQAIAFATAHQARAIACANQACAPgKAJQgKAHgPABIgWAAIgKABIgMgBg");
	this.shape_1003.setTransform(506.0681,306.3668,0.671,0.671);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#FFFFFF").s().p("AAAADQgDgBABgCQAAgBAAAAQABgBAAAAQABAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAg");
	this.shape_1004.setTransform(519.1437,259.7239,0.671,0.671);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#302D29").s().p("AgEAQQgGgBgEgHQgEgFADgGQABgHAHgEQAGgDAFABQAIACADAGQADAHgBAGQgDAGgFAEQgEACgFAAIgEgBg");
	this.shape_1005.setTransform(518.6908,260.0435,0.671,0.671);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#302D29").s().p("AAAAAQgLgFgIgKQAPAAAKAHQALAOADAKQgKgFgKgLg");
	this.shape_1006.setTransform(518.6572,260.3119,0.671,0.671);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#25282B").s().p("AgMAVQgQgDgRgJIgOgIQA9AVAhgUQAQgJAFgOIAEAAQgTArgnAAQgGAAgIgBg");
	this.shape_1007.setTransform(525.3815,270.1884,0.6711,0.6711);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#25282B").s().p("AgHAbQgBgCACgVQACgUgIgKIAOAGQAOAIgEAJQgNAegFAAIgBAAg");
	this.shape_1008.setTransform(529.7063,266.9085,0.6711,0.6711);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#DAA979").s().p("AgtAmQhOhOAXghQAEgFAHgCQCbgpAgAQQAWAKgoBnQgUA0gYAyQgqgggngog");
	this.shape_1009.setTransform(508.7418,259.5066,0.6711,0.6711);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#017DA8").s().p("AhdgpIAZgkICiCDIgMAYg");
	this.shape_1010.setTransform(507.7987,267.5179,0.6711,0.6711);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#ECCA9B").s().p("ApCHaQgIAAgHgCQgXgJgGglIgGgqQgCgWADgTIAGgaIANgwQAIgcAEgUQAFgcAbgsQAUgjASgvQAKgbASg8IAriSQheglgZhQQgVhCAchGQAKgZAZgPQAXgOAeAAQgSAOAUAGQAQAHgRAWQgPAWAWAFIAMAEQgTANgDAaQgDAaAMAcQAeBEBFAJIBLALQAsAFAfAAIDOgBQBQgBAtgJQBEgPAogqQARgSASgdIAegzQARgcARgQQAVgSAZgHQAagHAjAIQAkAIASASQAQAQAIAUIANAiIASAdQAJANAOAJIAlAYIAkAZQAFADgDAIIgGAOQgLAsgbAMQgdAOgagFIg5gQIgmgKQgVgDgOAJQgRALgGAZQgDAPgDAdQgMA1gYAuQgbA2gTAWQgdAggsALQgMADglgNQgngPgKAAQhuAChugDIhwgFQgXgBgRAIQgOAGgUATIg0A8QgiAmgZAHQgqALgKAFQgYAKgXAXQgOAPgZAgQgXAfgGARQgEANAGAPQADAKAMARQAKAOACAJQACAGgCAHQgDAHgFACQgDACgHgBg");
	this.shape_1011.setTransform(487.8689,282.2968,0.671,0.671);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#FFFFFF").s().p("AggAlIgMgDQgWgFAPgWQARgWgQgGQgUgHASgOQAogBAeAVQAjAWAJArQg+gbggAVg");
	this.shape_1012.setTransform(459.2051,253.3382,0.671,0.671);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#DAA979").s().p("ABRDCQgLgJgOgWQgegsgugbQgPgJgEgFQgIgJgDgcQgKhAgtgxQgKgLgNgJIgZgPQgOgIgEgGQgHgKAGgNQAIgQAfgNQBhglBmANQAZADABAPQAAAFgHAMQgfAogKAqQgKAmAFAzQADAbAIAPQAGANAXAXIA1AxQAGAHAVAKQAIAFACACQAHAHAAAOQgBAIgCAEQgDAGgHABIgNABIghAAQgaAAgKgHg");
	this.shape_1013.setTransform(469.156,300.2726,0.6711,0.6711);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#DAA979").s().p("AgqCBIgQgOIgGgLQgDgEgHgFQgIgFgBgTIANABQANABAHgDQAYgIAFgkQACgLgBgtQAAgTgDgIQgDgJgJgLIgPgSIgUgWQgQgUAEAAQBRgJBJAbQAHACADAFQACADAAAIQAABPgbBDQggBRg6APQABgDgKgJg");
	this.shape_1014.setTransform(490.087,297.8972,0.671,0.671);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#FFFFFF").s().p("AAAAjQgdgFgLgTQgGgKABgMQAAgOAJgHQAJgHAXAEQABAUAIAFQAHAEACAFIAHAKIAPANQALAJgBADQgMADgNAAQgKAAgLgCg");
	this.shape_1015.setTransform(484.7536,305.0388,0.671,0.671);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#C4894D").s().p("AgOBXQgGgFAGgLQgGAFgGACQgIACgFgFQgEgFADgIIAEgNQgCAFgGAAQgGAAgCgEQgDgGAEgIQAEgIAEgGQgCADgFgBQgGgBgBgFQgBgFAEgHQAKgPAIgIQAIgJABgPIACgaIACgGQAIgNAQgCQAQgBAOAJQARAMAFAbQADAPACAeQABAMgCAGQgCANgSAQIgRASQgLAKgIAFQgFAFgFAAQgDAAgCgCg");
	this.shape_1016.setTransform(412.5097,228.5742,0.6711,0.6711);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#40B8AF").s().p("AAQB1QgkgigsgWQgIgEgPgEIgXgIIA5hiQARgcANgNQATgSAbgDQAcgEAXAMQApAWgFA0QgEApgdAnQgSAZgqAtg");
	this.shape_1017.setTransform(423.8458,183.463,0.6711,0.6711);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#C4894D").s().p("AAODLQgFgCgFgEQgUgSgBgbQgBgRgFgaIgJgsQgOhJgJhZQgFgjADgUQAEgVAUgZIAFgEQADgBAFAAQAagCAVAYQAWAWAGAtQAGAlgCAzIgEBWIAAAiQACAXgBALQgDAsgJARQgFAIgIAFQgGACgFAAIgGgBg");
	this.shape_1018.setTransform(412.4319,212.7018,0.6711,0.6711);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#C4894D").s().p("AiEDZQgUgBgKgKQgIgJABgOIAFgXQAJggAYgtIAqhIQAqhJA1hbQAQgcAOgNQATgRAcgEQAcgEAWAMQAqAWgFA0QgFAqgcAnQgRAYgeAfIgyA1QgPAQgTAZIgfApQgcAngQAQQgZAYgiAAIgEAAg");
	this.shape_1019.setTransform(419.866,190.16,0.6711,0.6711);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#40B8AF").s().p("AAiGLQgrgEg9gRQg1gOgcgTQgNgKgFgJQgHgQAIggQAXhYgMh4QgCgUgdi7QgQhkAjhjQAJgbARgdQAcAuAzAYQAaAOAiAIQAnAKAagEIApArQAjAnAQAUQAbAkAKAeQAKAcgMApIgQA4QgHAdgBAcQgBAwADBNIADB9IACAgQABAUgCAMQgCAMgHAEQgEADgRAEQggAIgkAAQgSAAgUgCg");
	this.shape_1020.setTransform(435.5779,197.9587,0.6711,0.6711);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#2D2D2D").s().p("AgcDPQhBgLgEAEQgZANgfgTQgegTgRglQgTgoAIgrQAIgyAqgmQAggtATglQAcg2A3gaQA3gbA7AOQAnAJApAqQAqAsAGArQgIgDgGgDQgKgHgIgPQgBgDACAOQAEAQgDABQgLAFgTAFQgCAAgIgQQgHgQgCAAQgBABABARQABASgBAAQgNAEgWASQgFAUgGANQgCAEgEANQgDAMgEAGQgEAGgEgGIgEgLQgFgOgNgGQgHgDgKACQgIADgGAGQgQAUAQAeQAIAOADAOQAHAZgKANQAOAeADAPQAFAYgJAQQgBACgHAAQgPAAgqgHg");
	this.shape_1021.setTransform(427.4308,155.5976,0.6711,0.6711);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#C4894D").s().p("Ag+CLQgvgngdhBQgQglgEgiQgHhIA6gqQA5gqBDAZQAYAIAUASQAUASAKAWIAcBFQARAmAUAYIADAFQACAEgDAFQgDAEgFACQgKAFgEAEQgEAFgBAKQgEAggOAZQgKASgRAMQgSAMgUADIgTABQguAAgtgmg");
	this.shape_1022.setTransform(434.9836,157.1715,0.6711,0.6711);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#AC764B").s().p("AhEgIIARgwIAAgDIADgCQAIgHAOgBQAMAAAMAFQAHAEAMAIIATAOIAVAPQALAJAAAKQABAEgDAJIgLAdQgHATgCANQg9gNg1hBg");
	this.shape_1023.setTransform(433.4101,166.0984,0.6711,0.6711);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#C4894D").s().p("AglEvQgpgKgdgSQgmgYgJggIgTg+QgLgkgEgcQgQhkAjhiQALgfAig7QATghAVhEIABgDIACgCQAJgHAOgBQAMAAAMAFQAOAHAXATIAWAPQALAJAAAKQAAAFgDAJIgSA4QgJAiAMAVQAOAYAaAcIAsAvQAjAlAQAVQAbAkAKAeQAKAcgMApQgPAwgMAWQgUAigjAPIgNAFQgjANgmAAQgbAAgegHg");
	this.shape_1024.setTransform(435.5779,182.1989,0.6711,0.6711);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#068BAF").s().p("AAuHCQgQhNAEgpIAJhWQgLgQgSgkQgQgkgchDQgfhIgOgeIgvhkQgcg7gPgrQgXhDgIgpQgLhBAQguQAKggAoglQBIhBA9APQA/APAmBsIAFANQAnB0ANCqQAIBhALDCIAEAjQADAWgCAOQADA0AIBMIAMB/IAEAxIh9ASQgUg8gKgtg");
	this.shape_1025.setTransform(440.0325,251.0041,0.6711,0.6711);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#C4894D").s().p("ACOBgIgVgPQgNgLgJgEQgGgCgJgBIgOgBIhRgMQhLgNhXgVQglgKgYgQQgggWgCghQgDghAggMQAZgJAjAGQAOACATAGQAgAJAyAZQA9AfARAHQAsATAmAJQAUAEAdgEIAwgIQARgCAGACQAHADAJAJQAUATAMAXQAFALABAGQABAOgRASQgaAagaAAQgaAAgigUg");
	this.shape_1026.setTransform(466.8576,206.0488,0.6711,0.6711);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#C4894D").s().p("ACUDTIgagEQgOgDgKgGQgdgRgjgkIg5g9Qg/g/hFhKQgXgXgIgQQgLgYAEgbQAEgcASgTQAggiAxAUQAmAQAfAmQAPAUAVAnQAYAqANARIAEAFQAdAlA/BKQAeAmAIAPQASAigQAaQgFAJgJAEQgEACgJAAIgNgBg");
	this.shape_1027.setTransform(442.7946,190.516,0.6711,0.6711);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#005370").s().p("AgbEuQAEhVAAgrQAAgtgUg2QgFgPgihOQglhTABhpQABgcASg0IAGgQQAGgLAGgBQAGgBAKAHIAPAJQBAArAsBGQArBCASBQQgXBNgtBmQgaA7g1B1g");
	this.shape_1028.setTransform(433.0712,238.3207,0.6711,0.6711);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#F3F3F3").s().p("AgJAgQgIgeAHgZQADgKADgEIADgDQAEgEAFABQAEABACAHQADAPgMAYQgJAUABAUQgEgCgCgKg");
	this.shape_1029.setTransform(400.6832,301.4861,0.6711,0.6711);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#F3F3F3").s().p("ABZCVQgGAAgLgEIgdgMQgPgIgLgKQgVgVgNgiIgJgXQgFgMgIgHIgMgJIgMgIQgJgGgKgPQgWgdgJgQQgOgYAWgVQAggeArgIIAAAQIABAQQACAMANATQAQAXAOAHQAQAGASAEIAGADQACACABAGIABAGIACASQACAwAKAWQAGAMAMAPIAUAaQAJALgCAIQgCAGgFAEQgJAHgLAAIgDAAg");
	this.shape_1030.setTransform(396.4696,303.0093,0.6711,0.6711);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#34B8E6").s().p("AgEBoQgMgGgPgTIgWgdQgOgRgGgOIgFgOQgDgLAEgMQADgMAJgHQADgCAPgGQAUgIATgVIAaggQAbAnAjAhQgXAZgNATQgRAYADAeIABARQABAKgEAGQgFAIgKACIgFAAQgHAAgFgDg");
	this.shape_1031.setTransform(397.6085,296.3877,0.6711,0.6711);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#4A4F55").s().p("ABECAQgOgDgagQQgWgNgQgbIgdgxQgHgLgMgLIgVgTQgYgWgOgXQgGgKgCgGQgLgZAPgOQAHgJANgBIAEAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABIgBACQgDAGAEAKIAIAPQALAUANAMQAIAHARANQATAPAMAUQAFAIAOAgQAMAZALANQALANATAMIAPAJQAKAGAHAAQAIABAPgNQAFgEADABQAEACgBAGQgCANgKAIQgJAHgNAAIgCAAQgIAAgTgEg");
	this.shape_1032.setTransform(395.685,305.0507,0.6711,0.6711);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#F3F3F3").s().p("AASAeQgagNgQgVQgFgGgCgIIAAgEQAAgGAEgDQAEgDAGADQAPAIAIAYQAKAVAQALIgDAAQgEAAgHgDg");
	this.shape_1033.setTransform(458.7583,304.726,0.6711,0.6711);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#F3F3F3").s().p("AAUA6IgWgIQgNgEgKABIgOAEIgOAEQgKACgTgBQglgCgRgDQgcgGgCgdQgDgqAWgoIAMALIANAJQAMAHAVACQAeACAOgHQAOgIAPgLQADgDADAAQADgBAFAEIAEADQALAGAEAEQAUAPAKAGQASALAPAEQANAEATAAIAhABQAOABAEAGQAEADAAAIQAAANgKAJQgEAEgKAGIgcAPQgPAHgPABIgNABQgYAAgcgJg");
	this.shape_1034.setTransform(458.1758,308.6827,0.6711,0.6711);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#34B8E6").s().p("AAdBPIgjgBQgWgBgOgEQgIgCgHgEQgLgFgHgKQgHgKABgMIAFgTQAHgUgEgbIgIgpQAwAEAugGQAGAlAFAUQAJAcAYARIAPAJQAHAGACAHQADAJgFAJQgFAIgJAEQgJAFgTAAIgIgBg");
	this.shape_1035.setTransform(453.6611,303.6285,0.6711,0.6711);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#4A4F55").s().p("AAuAtIg4gKQgMgCgRACIgdAEQgfAEgbgEIgSgDQgagKgCgTQAAgLAGgKIADgDQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABABIABACQADAHAKADIAQADQAYAEAQgDIAggFQAYgFAXAEQAKABAhAIQAbAIARgBQAQAAAWgHQAWgFAGgHQAHgFABgKIACgSQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBABAAIACAAQAKABADAJQAEAJgCALQgDALgGAHQgFAHgQAMQgNAJgcAJQgQAGgUAAIgTgBg");
	this.shape_1036.setTransform(458.3195,311.5345,0.6711,0.6711);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#C4894D").s().p("AA8FEQgQgDgLgMQgQgRgMgcQgFgMgMgnIgkhuQgUg8gKgsQgQhNAEgpIAOiKQACgYAGgNQALgbAcgDQAbgEAUATQAQAOAHAUQAEAOACAaQAEA3AIBRIANCHQAGA8AEBVIAIBKQAFA+gGAEQgIAFgKAAIgLgCg");
	this.shape_1037.setTransform(448.4283,281.3206,0.6711,0.6711);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#DD7B50").s().p("ABIGQQgTgTgag0QgRgkgbhDQgfhIgOgfIgvhkQgcg6gPgrQgXhDgIgpQgLhBAQguQALggAnglQBIhBA8APQBAAPAmBsIAFANQAnB0AOCpQAHBhALDDIAGAzQABAegOARQgJAMgSAHQgQAGgNAAQgaAAgVgUg");
	this.shape_1038.setTransform(439.1456,241.9277,0.6711,0.6711);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#017DA8").s().p("AkhG+QAgg0AdgmQAwg+AigYIBLg0QgCgVACgfQABgoAGhHQAGhOACghIAEhvQADhBAGguQAKhGANgoQAUg+AjgiQAZgZAygMQBegZAwAqQAyArgQBxIgCANQgUB5hDCeQglBYhRCxIgNAjQgIAWgJALQgFALgNAMQgOAMgSATIgfAhIh/CDIgkAkg");
	this.shape_1039.setTransform(423.9483,249.8067,0.6711,0.6711);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#C4894D").s().p("AjCECQgOgFgIgPQgHgOACgQQACgYAOgbQAGgNAVghQAVghAnhCQAegzAfgnQAwg/AhgXIByhOQASgNAIgCQAMgCAOAMQAVARAIAgQAGAWgEAOQgEAOgPAOQgOAMgTAUIggAhIh+CBQgoAqg/A8IgzA2QgrAqgIAAIAAAAg");
	this.shape_1040.setTransform(412.4975,278.9821,0.6711,0.6711);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#DD7B50").s().p("AhxGeQgvgGgOgqQgIgZACg6QACgoAGhIQAGhOACgiIAEhtQADhBAGguQAKhFANgpQAUg/AjgiQAagYAxgNQBdgZAxAqQAyArgRByIgCANQgTB5hDCcQgmBZhPCyIgSAwQgNAbgVAJQgKAFgNAAIgKgBg");
	this.shape_1041.setTransform(431.2163,241.995,0.6711,0.6711);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f().s("#017DA8").ss(1.2,1).p("AiCmAIgDBuQgBCFARBzQA1FuDGAt");
	this.shape_1042.setTransform(492.6722,237.9598,0.6711,0.6711);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#66CAEC").s().p("AttAtQg3gog0gtQGJgSJGAAQJSAAGQATQgyArg3AoQmAAPn5AAQnuAAl2gOg");
	this.shape_1043.setTransform(450.9401,313.4713,0.6711,0.6711);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#99DBF3").s().p("ApDVdQkLhxjOjPQjOjOhykLQh1kVAAkvQAAkuB1kVQBykLDOjPQDOjOELhxQEVh1EuAAQEvAAEVB1QEMBxDNDOQDPDPBxELQB1EVAAEuQAAEvh1EVQhxELjPDOQjNDPkMBxQkVB1kvAAQkuAAkVh1g");
	this.shape_1044.setTransform(450.9799,235.7451,0.6711,0.6711);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001}]},4).wait(4));

	// Meter
	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#ABB7AF").s().p("AiPA/IABh8IATAHQAaAHAfAEQBfALBugfIAECAg");
	this.shape_1045.setTransform(252.2,335.35);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#25282B").s().p("AiMi/QgHgMABgMQABgMAJgFQAIgFALAFQAMAFAGAMID2GuQgVAMgTAJg");
	this.shape_1046.setTransform(239.9118,314.45);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#017DA8").s().p("AhBhfQgHgMABgMQABgMAJgFIAAAAQAIgFALAFQAMAFAGAMIBHB+IAZCFg");
	this.shape_1047.setTransform(238.1688,309.225);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#137669").s().p("AgrgBIgYiFICID1QgLAJgWAPg");
	this.shape_1048.setTransform(249.7,323.4);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#25282B").s().p("AgcEGIAKntQgBgOAIgJQAHgKAJAAQAKAAAGAKQAHAKAAAOIgMHvQgbgBgRgCg");
	this.shape_1049.setTransform(249.907,313.4354,1,1,0.445);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#137669").s().p("AgUjGQAAgOAHgJQAHgKAJAAQAKAAAHAKQAHAKAAAOIgPGqIgmADg");
	this.shape_1050.setTransform(252.682,316.8581,1,1,0.445);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#25282B").s().p("AjUCsIF7lwQAKgJAMgCQAMgCAHAHQAHAHgDAMQgCAMgKAJIl9FzQgLgMgUgZg");
	this.shape_1051.setTransform(269.8492,313.9269,1,1,-1.2241);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#8E2B2B").s().p("Ai8CYIFMlDQALgLAPAAQAJAAAFAFQAHAHgCAMQgCAMgKAJIlJFBQgPgMgVgUg");
	this.shape_1052.setTransform(270.732,319.3468,0.9999,0.9999,-1.2242);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045,p:{rotation:0,x:252.2,y:335.35,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.shape_1050,p:{scaleX:1,scaleY:1,rotation:0.445,x:252.682,y:316.8581}},{t:this.shape_1049,p:{scaleX:1,scaleY:1,rotation:0.445,x:249.907,y:313.4354}},{t:this.shape_1045,p:{rotation:0.4459,x:250.5392,y:335.4553,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.shape_1052,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.2242,x:270.732,y:319.3468}},{t:this.shape_1051,p:{scaleX:1,scaleY:1,rotation:-1.2241,x:269.8492,y:313.9269}},{t:this.shape_1045,p:{rotation:-1.225,x:252.8401,y:335.5558,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.shape_1052,p:{scaleX:0.6787,scaleY:0.6787,rotation:-1.2213,x:885.0466,y:511.6809}},{t:this.shape_1051,p:{scaleX:0.6787,scaleY:0.6787,rotation:-1.2212,x:884.4572,y:508.0109}},{t:this.shape_1045,p:{rotation:-1.2224,x:872.9995,y:522.7518,scaleX:0.6788,scaleY:0.6788}}]},1).to({state:[{t:this.shape_1052,p:{scaleX:0.6785,scaleY:0.6785,rotation:-30.928,x:878.6135,y:510.9996}},{t:this.shape_1051,p:{scaleX:0.6786,scaleY:0.6786,rotation:-30.9277,x:876.5092,y:508.1536}},{t:this.shape_1045,p:{rotation:-1.2224,x:873.0332,y:522.7827,scaleX:0.6788,scaleY:0.6788}}]},1).to({state:[{t:this.shape_1052,p:{scaleX:0.6786,scaleY:0.6786,rotation:-30.9288,x:878.7426,y:510.993}},{t:this.shape_1051,p:{scaleX:0.6787,scaleY:0.6787,rotation:-30.9275,x:876.6076,y:508.1808}},{t:this.shape_1045,p:{rotation:-1.2224,x:873.0332,y:522.7827,scaleX:0.6788,scaleY:0.6788}}]},1).to({state:[{t:this.shape_1050,p:{scaleX:0.6968,scaleY:0.6972,rotation:9.6852,x:875.7289,y:509.9898}},{t:this.shape_1049,p:{scaleX:0.6968,scaleY:0.6972,rotation:3.9781,x:873.3499,y:507.4642}},{t:this.shape_1045,p:{rotation:-2.2965,x:873.9038,y:522.7904,scaleX:0.6968,scaleY:0.6972}}]},1).wait(1));

	// Scale
	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#4A4F55").s().p("AgKCBQgFgFAAgGIAAj7IATAAIAMAAIAAD7QAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_1053.setTransform(251.375,275.4);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#4A4F55").s().p("AgNBHQgGgBgEgFQgDgGABgGIAVh7IAeAFIgVB7QgBAGgEAEQgEADgGAAg");
	this.shape_1054.setTransform(267.7639,270.4);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#4A4F55").s().p("AgTBGQgHgCgDgFQgDgGACgGIAfh5IAfAJIggB4QgDAMgMAAg");
	this.shape_1055.setTransform(275.8136,272.125);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#4A4F55").s().p("AgGBHQgGgBgEgEQgEgGAAgGIALh8IAeADIgLB8QAAAGgFAEQgEAEgFAAg");
	this.shape_1056.setTransform(259.5972,269.4);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#4A4F55").s().p("AgvCAQgGgDgDgFQgDgGACgGIBVjsIAeALIhVDrQgDALgMAAIgFgBg");
	this.shape_1057.setTransform(281.5056,280.475);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#4A4F55").s().p("AAFBHQgFAAgEgEQgFgEAAgGIgLh8IAegDIALB8QABAGgFAGQgEAEgGABg");
	this.shape_1058.setTransform(243.1275,269.4);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#4A4F55").s().p("AgYBBQgGgCgCgHQgCgGADgGIAyhuQAJAYAGAUIglBQQgFAJgJAAQgEAAgDgCg");
	this.shape_1059.setTransform(290.4682,277.775);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#4A4F55").s().p("AABA7Iggh4IAfgJIAfB5QACAGgDAGQgEAFgGACIgEABQgMAAgDgMg");
	this.shape_1060.setTransform(226.925,272.125);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#4A4F55").s().p("AAEA6IglhQIAPgsIAzBuQACAGgCAGQgCAHgGACIgHACQgKAAgEgJg");
	this.shape_1061.setTransform(212.2444,277.775);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#4A4F55").s().p("AAcB2IhVjrIAdgLIBVDsQADAGgDAGQgDAGgGACIgFABQgLAAgEgLg");
	this.shape_1062.setTransform(221.2318,280.475);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#4A4F55").s().p("AABBEQgEgEgBgGIgWh7IAegFIAWB7QABAGgDAGQgEAFgHABIgCAAQgGAAgEgDg");
	this.shape_1063.setTransform(234.9611,270.4);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#017DA8").s().p("AgqC7QiWi7Baj1IA+gbQBOgfBagQIAJA3QhnANhkAgIgTAvQgTA7ADA/QAKDKDaCoQhfgnhKheg");
	this.shape_1064.setTransform(220.691,295.475);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#137669").s().p("AimAgIgKg2QCzggCuAgIgKA9QingcimAVg");
	this.shape_1065.setTransform(251.2,265.7937);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#8E2B2B").s().p("AA+ApQhbgihngRIAMg+QB1AWByAyIAJAZQAKAeADARQgZgNgugSg");
	this.shape_1066.setTransform(281.175,270.75);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#38B7AF").s().p("AguFYIiBqiQBXgQBZAAQBXAABYAQIiAKiQgaADgVAAQgVAAgagDg");
	this.shape_1067.setTransform(251.275,296.675);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#02A7E1").s().p("AhSDCQhyh+AAioQABhWAfhQQBugxB6gWICAKiQimgRhwh+g");
	this.shape_1068.setTransform(226.9,297.35);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#DC4340").s().p("AhElRQB5AWBwAxQAgBQAABWQAACphyB+QhwB9inASg");
	this.shape_1069.setTransform(275.8,297.325);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#F2F2F2").s().p("Ak3DaQiBiCAAi2QAAhVAghQQDDhXDVAAQDWAADDBXQAgBPAABWQAAC2iBCCQiBCBi3AAQi2AAiBiBg");
	this.shape_1070.setTransform(251.375,296.675);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#ABB7AF").s().p("AmQEXQiminAAjpIgBlDIRuAAIABFDQAADpimCnQimCmjrAAQjqAAinimg");
	this.shape_1071.setTransform(252.875,299.45);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#E6E6E6").s().p("AtxPxQg1AAglglQglglAAg0IAA7lQAAg0AlglQAlglA1AAIbkAAQA0AAAlAlQAlAlAAA0IAAblQAAA0glAlQglAlg0AAg");
	this.shape_1072.setTransform(252.925,356.575);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#ABB7AF").s().p("AtxRvQhpAAhKhKQhKhKAAhoIAA7lQAAhoBKhKQBKhKBpAAIbkAAQBoAABKBKQBKBKAABoIAAblQAABohKBKQhKBKhoAAg");
	this.shape_1073.setTransform(252.925,356.575);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#C1C9C4").s().p("AtxRvQhpAAhKhKQhKhKAAhpIAA7kQAAhnBIhLQBGhKBbAAIbkAAQB2AABNBKQBNBIAABqIAAbkQAABphKBKQhKBKhoAAg");
	this.shape_1074.setTransform(257.225,352.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1074,p:{scaleX:1,scaleY:1,x:257.225,y:352.975}},{t:this.shape_1073,p:{scaleX:1,scaleY:1,x:252.925,y:356.575}},{t:this.shape_1072,p:{scaleX:1,scaleY:1,x:252.925,y:356.575}},{t:this.shape_1071,p:{scaleX:1,scaleY:1,x:252.875,y:299.45}},{t:this.shape_1070,p:{scaleX:1,scaleY:1,x:251.375,y:296.675}},{t:this.shape_1069,p:{scaleX:1,scaleY:1,x:275.8,y:297.325}},{t:this.shape_1068,p:{scaleX:1,scaleY:1,x:226.9,y:297.35}},{t:this.shape_1067,p:{scaleX:1,scaleY:1,x:251.275,y:296.675}},{t:this.shape_1066,p:{scaleX:1,scaleY:1,x:281.175,y:270.75}},{t:this.shape_1065,p:{scaleX:1,scaleY:1,x:251.2,y:265.7937}},{t:this.shape_1064,p:{scaleX:1,scaleY:1,x:220.691,y:295.475}},{t:this.shape_1063,p:{scaleX:1,scaleY:1,x:234.9611,y:270.4}},{t:this.shape_1062,p:{scaleX:1,scaleY:1,x:221.2318,y:280.475}},{t:this.shape_1061,p:{scaleX:1,scaleY:1,x:212.2444,y:277.775}},{t:this.shape_1060,p:{scaleX:1,scaleY:1,x:226.925,y:272.125}},{t:this.shape_1059,p:{scaleX:1,scaleY:1,x:290.4682,y:277.775}},{t:this.shape_1058,p:{scaleX:1,scaleY:1,x:243.1275,y:269.4}},{t:this.shape_1057,p:{scaleX:1,scaleY:1,x:281.5056,y:280.475}},{t:this.shape_1056,p:{scaleX:1,scaleY:1,x:259.5972,y:269.4}},{t:this.shape_1055,p:{scaleX:1,scaleY:1,x:275.8136,y:272.125}},{t:this.shape_1054,p:{scaleX:1,scaleY:1,x:267.7639,y:270.4}},{t:this.shape_1053,p:{scaleX:1,scaleY:1,x:251.375,y:275.4}}]}).to({state:[{t:this.shape_1074,p:{scaleX:0.6788,scaleY:0.6788,x:875.9243,y:534.6323}},{t:this.shape_1073,p:{scaleX:0.6788,scaleY:0.6788,x:873.0055,y:537.0759}},{t:this.shape_1072,p:{scaleX:0.6788,scaleY:0.6788,x:873.0055,y:537.0759}},{t:this.shape_1071,p:{scaleX:0.6788,scaleY:0.6788,x:872.9716,y:498.3002}},{t:this.shape_1070,p:{scaleX:0.6787,scaleY:0.6787,x:871.8525,y:496.3258}},{t:this.shape_1069,p:{scaleX:0.6787,scaleY:0.6787,x:888.4308,y:496.7669}},{t:this.shape_1068,p:{scaleX:0.6787,scaleY:0.6787,x:855.2403,y:496.7839}},{t:this.shape_1067,p:{scaleX:0.6787,scaleY:0.6787,x:871.7846,y:496.3258}},{t:this.shape_1066,p:{scaleX:0.6787,scaleY:0.6787,x:892.0449,y:478.6995}},{t:this.shape_1065,p:{scaleX:0.6787,scaleY:0.6787,x:871.7001,y:475.3355}},{t:this.shape_1064,p:{scaleX:0.6787,scaleY:0.6787,x:850.9928,y:495.481}},{t:this.shape_1063,p:{scaleX:0.6787,scaleY:0.6787,x:860.6783,y:478.462}},{t:this.shape_1062,p:{scaleX:0.6787,scaleY:0.6787,x:851.3599,y:485.3001}},{t:this.shape_1061,p:{scaleX:0.6787,scaleY:0.6787,x:845.2599,y:483.4676}},{t:this.shape_1060,p:{scaleX:0.6787,scaleY:0.6787,x:855.224,y:479.6328}},{t:this.shape_1059,p:{scaleX:0.6787,scaleY:0.6787,x:898.3524,y:483.4676}},{t:this.shape_1058,p:{scaleX:0.6787,scaleY:0.6787,x:866.2211,y:477.7832}},{t:this.shape_1057,p:{scaleX:0.6787,scaleY:0.6787,x:892.2693,y:485.3001}},{t:this.shape_1056,p:{scaleX:0.6787,scaleY:0.6787,x:877.3995,y:477.7832}},{t:this.shape_1055,p:{scaleX:0.6787,scaleY:0.6787,x:888.406,y:479.6328}},{t:this.shape_1054,p:{scaleX:0.6787,scaleY:0.6787,x:882.9424,y:478.462}},{t:this.shape_1053,p:{scaleX:0.6787,scaleY:0.6787,x:871.8189,y:481.8556}}]},4).wait(4));

	// Character
	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#AC764B").s().p("AjWgxIGtAKQgeAkg1AXQg2AZg8AEIgYABQiBAAhPhjg");
	this.shape_1075.setTransform(696.8965,360.2654,0.7999,0.504);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#AC764B").s().p("AABCbIhQgKIBPkrIAmB9QAnCCADAdQACAZg+AAIgTAAg");
	this.shape_1076.setTransform(696.0196,329.0457,0.7999,0.7999);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#2D2D2D").s().p("AglBXQgPgkAAgzQAAgyAPgkQAQgkAVAAQAWAAAQAkQAPAkAAAyQAAAzgPAkQgQAkgWAAQgVAAgQgkg");
	this.shape_1077.setTransform(721.6747,312.4075,0.7999,0.7999);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#2D2D2D").s().p("AglBXQgPgkAAgzQAAgyAPgkQAQgkAVAAQAWAAAQAkQAPAkAAAyQAAAzgPAkQgQAkgWAAQgVAAgQgkg");
	this.shape_1078.setTransform(671.5983,312.7875,0.7999,0.7999);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#2D2D2D").s().p("AtED6QAAjkBVjBQBfjWCyh6QDKiJEbgBQEbAADJCNQCxB8BcDZQBTDCgGDdQgFDVhVCcQhjgCiQitQh+iXhgjCQg3BNhFBGQhIBIhQA4QhNA4hKAgQA0gzAgg3QAhg4AIg1QheBrh1BLQiABTiMAjQAtglAihBQAbgzARg/Qg1BQhfBZQiCB5hpAXQhNixAAjbg");
	this.shape_1079.setTransform(696.1756,254.9868,0.7998,0.7998);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#40B8AF").s().p("AgTCKQgJgOABgVIAAjNQgBgVAJgOQAIgOALAAQAMAAAIAOQAJAOAAAVIAADNQAAAUgJAPQgIAOgMAAQgLAAgIgOg");
	this.shape_1080.setTransform(750.6482,345.3371,0.7998,0.7998);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#40B8AF").s().p("AgTCKQgJgOABgVIAAjNQgBgVAJgOQAIgOALAAQAMAAAIAOQAJAOAAAVIAADNQAAAUgJAPQgIAOgMAAQgLAAgIgOg");
	this.shape_1081.setTransform(641.9609,345.3371,0.7998,0.7998);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#C4894D").s().p("AjfP4QhwhBhkhuQhihug7h9Qg9iDgBhzQg7AAgrgqQgrgqAAg7IAAiUQAAg8ArgpQArgqA7ABIAAkpQABh0A9iBQA7h7BihsQBkhsBwg/QB3hEBoAAQBpAAB4BEQBwA/BjBsQBjBsA6B7QA+CBAAB0IAAEpQA8gBAqAqQArApAAA8IAACUQAAA7grAqQgqAqg8AAQAABzg+CDQg6B9hjBuQhkBuhvBBQh4BGhpAAQhoAAh3hGg");
	this.shape_1082.setTransform(696.3845,306.6488,0.7998,0.7998);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#2D2D2D").s().p("AgznQIFmD0IkjB2IByCqIm0GNg");
	this.shape_1083.setTransform(723.9362,445.147,0.7998,0.7998);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#2D2D2D").s().p("AiBBCIBziqIkjh3IEcjvIFIOdg");
	this.shape_1084.setTransform(674.991,445.187,0.7998,0.7998);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#10A2E0").s().p("ArpKyQk7hXkailIgBkkQAdjbAvh6QBDiqCSiGQCZiNCIg5QB3gyCzgNIBFgJQBGgHAAADIFJObID+ufQAYgEAlAHQATADAOAEICuALQBnAIBMAQQDNArCLB/QCPCEBKDMQAyCMAfDoIAAC7Qk1DXlkByQlxB1mGAAQlUAAlFhZg");
	this.shape_1085.setTransform(699.4836,470.3785,0.7998,0.7998);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#AC764B").s().p("AkdgwIAAiEII7AAIAAFpg");
	this.shape_1086.setTransform(696.4819,394.2355,0.7998,0.7998);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#C4894D").s().p("AkdKIIiPuYICPgLIAAltII7AAIAAFtICOALIiOOYg");
	this.shape_1087.setTransform(696.4619,431.4271,0.7998,0.7998);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#2D2D2D").s().p("AocQcQhrAAhIgmQgfgPgcgZQgTgQgjj6QgokbgLkdQgOlsApj0QAzktCDhXQCJhbCHgtQCwg7DbABQCxgBCUAmQB9AgByA/QAyAbA0AjQASAMAUAQQFYEZkVXxQgSAQhSAdQhaAggxABg");
	this.shape_1088.setTransform(696.9474,303.0682,0.7999,0.7999);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#96DAF3").s().p("EghtAWZQlWpHAAqnQAAn8DFnQQC9nBFalaQFalaHBi+QHQjEH8AAQH9AAHQDEQHAC+FaFaQFbFaC+HBQDEHQAAH8QAAJzkmImQkcIUnxFZIAAi8QgfjpgyiLQhJjMiQiEQiLiAjNgqQhMgQhngIIiugMQgOgEgSgDQglgGgZAEIj+OgIlJucQAAgEhGAIIhFAIQizANh3AyQiIA6iZCMQiSCGhCCrQgwB6gdDbIABEkQo2lLlKo1g");
	this.shape_1089.setTransform(693.2168,319.367,0.7999,0.7999);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#AC764B").s().p("AgBAbIjygTQCxgoCfACQCcACgFAlQgDAWh3AAQgzAAhIgEg");
	this.shape_1090.setTransform(695.1112,357.4263,0.7998,0.8001);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#AC764B").s().p("AACCZIhRgJIBPkoIAmB8QAnCAADAcQACAag+gBIgSAAg");
	this.shape_1091.setTransform(695.9691,326.7453,0.7998,0.8001);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#2D2D2D").s().p("AglBWQgQgkAAgyQAAgxAQgkQAQgkAVAAQAWAAAQAkQAPAkAAAxQAAAygPAkQgQAkgWAAQgVAAgQgkg");
	this.shape_1092.setTransform(721.6195,310.3243,0.7998,0.8001);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#2D2D2D").s().p("AglBWQgPgjAAgzQAAgxAPgkQAQgjAVgBQAWABAQAjQAPAjAAAyQAAAzgPAjQgQAjgWABQgVgBgQgjg");
	this.shape_1093.setTransform(671.5298,310.7043,0.7998,0.8001);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#2D2D2D").s().p("AtED3QAAjhBVi/QBfjUCyh4QDKiIEbAAQEbAADJCLQCxB7BcDWQBTDAgGDaQgFDThVCaQhjgDiQiqQh/iVhfi/Qh1ChifBuQhLA1hMAiQA0gzAgg2QAhg3AIg0QheBph1BLQiABRiMAjQBShDApiSQg3BQhdBWQiCB4hpAWQhNivAAjYg");
	this.shape_1094.setTransform(696.0607,253.7197,0.7997,0.8001);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#40B8AF").s().p("AgTCIQgIgOAAgUIAAjLQAAgUAIgOQAIgPALAAQAMAAAIAPQAIAOAAAUIAADLQAAAUgIAOQgIAOgMABQgLgBgIgOg");
	this.shape_1095.setTransform(749.9192,347.4672,0.7997,0.8001);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#40B8AF").s().p("AgTCIQgJgOAAgUIAAjLQAAgUAJgOQAIgPALAAQAMAAAIAPQAIAOAAAUIAADLQAAAUgIAOQgIAOgMABQgLgBgIgOg");
	this.shape_1096.setTransform(641.2623,347.4672,0.7997,0.8001);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#C4894D").s().p("AjfPcQiRhphQi0QgTgshdiJQhFhkAAhDQhFBogZhKQgSg0AHh6IgiiQQAAg6ApgpQApgpA5AAIAAklQAAhyA8iAQA4h5BfhrQBfhrBsg/QBzhCBkAAQBlAAByBCQBsA/BgBrQBfBrA4B5QA7CAAAByIAAElQA6AAApApQApApAAA6IglCGQAKAogHA3QgFAzgTAkQgTAmgVgDQgYgEgSg7QAABAhMBbQhjB1gdBEQhTC/iKBnQhrBRhhADIgGAAQhjAAh2hVg");
	this.shape_1097.setTransform(696.7603,304.9078,0.7997,0.8001);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#2D2D2D").s().p("AhMnHIGTDqIk5B1IB7CoInPGIg");
	this.shape_1098.setTransform(725.269,442.1348,0.7997,0.8001);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#2D2D2D").s().p("AiPBAIB7ipIk6h1IFYjqIFFORg");
	this.shape_1099.setTransform(672.6499,442.0548,0.7997,0.8001);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#10A2E0").s().p("Ax8IqIgEmZQAbjWA2jYQA/j/A2grQCQh1CzgxQBzggDLgQIgDAfIgCAkIFJNTIEUtLQgFAFgThLIC5ANQB8ALBZAQQD8AxBAB4QA2BmA5DIQBGD0gFCXIgIFyQkUCYkuBQQk5BSlGAAQoxAAoDj0g");
	this.shape_1100.setTransform(698.5421,469.057,0.7997,0.8001);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#AC764B").s().p("AkdgvIAAiDII6AAIAAFlg");
	this.shape_1101.setTransform(696.3469,391.4307,0.7997,0.8001);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#C4894D").s().p("AkdKBIiOuOICOgLIAAloII6AAIAAFoICQALIiQOOg");
	this.shape_1102.setTransform(696.3469,428.1937,0.7997,0.8001);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#2D2D2D").s().p("AobQPQhsAAhIgkQgdgOgegaQgTgQgjj3QgokXgLkaQgOloAqjyQAzkoCDhXQCJhaCHgsQCwg6DbAAQCwAACUAlQB9AgByA+QAqAWA9AnQAQALAVARQFZEWkWXfQgSAQhRAdQhbAfgwAAg");
	this.shape_1103.setTransform(696.8968,301.0835,0.7998,0.8001);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#96DAF3").s().p("EgPMAj/QnAi9lblaQlZlai+nBQjFnRAAn8QAAn8DFnQQC+nAFZlaQFblaHAi+QHRjFH7AAQH9AAHQDFQHBC+FZFaQFbFZC+HBQDEHQAAH8QAAH8jEHRQi+HBlbFaQlZFanBC9QnQDFn9AAQn7AAnRjFgAovO2Qi0AxiPB1Qg2Asg/D+Qg2DYgbDYIAEGZQICD0IyAAQFGAAE5hSQEuhQETiZIAJlyQAFiXhGj0Qg6jJg2hmQg/h4j9gwQhYgRh8gKIi5gNQASBKAGgFIkVNMIlJtUIADgjIADggQjMAQhyAgg");
	this.shape_1104.setTransform(693.0254,333.0061,0.7998,0.8001);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#F6F6F7").s().p("AjWgxIGtAKQgeAkg1AXQg2AZg8AEIgYABQiBAAhPhjg");
	this.shape_1105.setTransform(696.7611,360.1192,0.7998,0.7998);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#AC764B").s().p("ADoAiIg3gNQiAgWjcAcQgFABgkgCIgeAAIBJgUQBbgUBLgLQDygiAEBWQABAIgHAAIgFgBg");
	this.shape_1106.setTransform(693.7415,362.4919,0.7999,0.7999);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#AC764B").s().p("AABCbIhQgKIBPkrIAmB9QAnCDADAcQACAZg+AAIgTAAg");
	this.shape_1107.setTransform(695.8935,328.9281,0.7999,0.7999);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#2D2D2D").s().p("AtED6QAAjkBVjBQBfjXCyh6QDJiJEbAAQEcAADJCOQCxB8BcDYQBTDCgGDdQgFDVhVCcQhjgCiQitQh/iXhfjCQg3BNhGBGQhIBIhPA4QhMA2hLAhQAzgyAhg3QAgg4AJg1QheBrh2BMQh/BSiMAkQBShFApiUQg3BRhdBYQiCB5hpAXQhNiyAAjag");
	this.shape_1108.setTransform(696.0719,254.9213,0.7998,0.7998);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#40B8AF").s().p("AgTCKQgIgPAAgUIAAjNQAAgUAIgPQAJgOAKAAQAMAAAIAOQAJAOgBAVIAADNQABAVgJAOQgIAOgMAAQgKAAgJgOg");
	this.shape_1109.setTransform(751.7556,342.1416,0.7997,0.7997);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#40B8AF").s().p("AgTCKQgIgOAAgVIAAjNQAAgVAIgOQAIgOALAAQAMAAAIAOQAIAOAAAVIAADNQAAAVgIAOQgIAOgMAAQgLAAgIgOg");
	this.shape_1110.setTransform(640.5754,342.1416,0.7997,0.7997);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#C4894D").s().p("AgKRlQjUgEhSg3QgagRgfgkQgjgngWgRQiKhqg5jBQgpiMAAjKQg8AAgqgqQgrgqAAg7IAAiUQAAg6ArgpQAqgqA8AAIAAkoQAAhzA+iBQA6h6BjhsQBjhsBxg/QB3hDBoAAQBpAAB3BDQBxA/BjBsQBjBsA6B6QA9CBAABzIAAEoQA9AAAqAqQArApAAA6IAACUQAAA7grAqQgqAqg9AAQAAHCkNC5QgXAQgZAlQgbApgUASQhKA+jNAAIgVAAg");
	this.shape_1111.setTransform(696.2755,309.7404,0.7997,0.7997);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#2D2D2D").s().p("AhJnMIGTDsIk5B2IB7CrInVGMg");
	this.shape_1112.setTransform(724.9852,445.3446,0.7997,0.7997);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#2D2D2D").s().p("AiLBBIB7irIk5h2IFXjsIE8OZg");
	this.shape_1113.setTransform(672.2641,445.2247,0.7997,0.7997);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#10A2E0").s().p("AuXJyQmPiSlLkQIAIg/QAbi0BViIQBSiDCviWQCeiGEjhcQD2hODVgOQA5gIAAAFIE+OZID/uZQAAgEA9ADIA7AEQDeAPDSA9QEMBOCbCFQC3CdBZB3QBsCQAdCiQlXFBmwCvQnBC2nnAAQm8AAmeiXg");
	this.shape_1114.setTransform(697.8777,470.5791,0.7998,0.7998);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#AC764B").s().p("AkdCAIAAk8II7AAIgDF5g");
	this.shape_1115.setTransform(696.3381,394.8218,0.7998,0.7998);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#C4894D").s().p("AkdKIIiPuYICPgLIAAlsII7AAIAAFsICOALIiOOYg");
	this.shape_1116.setTransform(696.3181,431.3314,0.7998,0.7998);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#2D2D2D").s().p("AocQcQhrAAhIglQgfgQgcgYQgTgRgjj5QgokbgLkeQgOlrApj1QA0ksCChYQCJhbCHgtQCxg7DaAAQCxAACUAmQB8AhBzA+QAuAZA5AlQASANATAPQFYEakVXxQgSAQhSAdQhaAggwAAg");
	this.shape_1117.setTransform(696.8214,302.9506,0.7999,0.7999);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#96DAF3").s().p("EgjMAVaQj3oAAAo+QAAn7DFnRQC9nAFalaQFalaHBi+QHQjFH8AAQH8AAHRDFQHAC+FaFaQFaFaC+HAQDFHRAAH7QAAISjUHfQjNHQl0FdQgdiihriRQhZh3i3icQiciFkLhPQjSg9jegOIg8gFQg8gDAAAFIj/OZIk+uZQgBgGg4AJQjVAOj2BNQkjBcieCGQivCWhSCDQhVCIgbC1IgIBAQmqlfjvnvg");
	this.shape_1118.setTransform(693.1107,310.1701,0.7999,0.7999);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#AC764B").s().p("AjWgmIGtAKQhDA8iCAGIgVABQiDAAhQhNg");
	this.shape_1119.setTransform(874.1607,145.4477,0.4,0.4);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#AC764B").s().p("AABCXIhOgKIBNkjIAlB6QAmB/ADAcQACAYg8AAIgTAAg");
	this.shape_1120.setTransform(873.7022,129.3054,0.4,0.4);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#2D2D2D").s().p("AgkBVQgPgjAAgyQAAgxAPgjQAQgjAUAAQAWAAAPAjQAPAjAAAxQAAAygPAjQgPAjgWAAQgUAAgQgjg");
	this.shape_1121.setTransform(886.2119,121.2046,0.4,0.4);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#2D2D2D").s().p("AgjBVQgQgjAAgyQAAgwAQgkQAPgjAUAAQAWAAAPAjQAPAkAAAwQAAAygPAjQgPAjgWAAQgUAAgPgjg");
	this.shape_1122.setTransform(861.7995,121.3846,0.4,0.4);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#2D2D2D").s().p("AsvD0QAAjfBTi8QBcjRCuh2QDEiGEUAAQEVAADDCJQCtB6BaDSQBQC+gFDXQgFDPhTCZQhggEiNioQh7iThei8QhxCeicBtQhKA2hIAgQAygxAgg3QAfg2AJgzQhcBohzBKQh8BQiJAiQBQhBApiRQg2BPhbBVQh+B2hnAWQhLisAAjVg");
	this.shape_1123.setTransform(873.8766,93.2918,0.4,0.4);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f("#40B8AF").s().p("AgTCGQgIgNAAgUIAAjJQAAgTAIgOQAIgOALAAQALAAAJAOQAIAOAAATIAADJQAAAUgIANQgJAOgLAAQgLAAgIgOg");
	this.shape_1124.setTransform(901.0734,135.846,0.4,0.4);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#40B8AF").s().p("AgTCGQgIgNAAgUIAAjJQAAgTAIgOQAJgOAKAAQAMAAAIAOQAIAOAAATIAADJQAAAUgIANQgIAOgMAAQgKAAgJgOg");
	this.shape_1125.setTransform(846.848,135.846,0.4,0.4);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#C4894D").s().p("AjPQKQhIghg+hIQiKidhIiFQhWiiAAiSQg7AAgpgoQgqgpAAg5IAAiRQAAg4AqgpQApgpA7AAIAAkgQAAhwA8h+QA5h3BghpQBhhpBtg9QB0hCBmAAQBmAAB0BCQBuA9BhBpQBgBpA5B3QA8B+AABwIAAEgQA7AAApApQAqApAAA4IAACRQAAA5gqApQgpAog7AAQAACfhYCgQhSCTiSCEQhUBMgnAWQhTAuh3AAQh4AAhUgng");
	this.shape_1126.setTransform(874.0107,119.1044,0.4,0.4);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#2D2D2D").s().p("AhHnBIGJDnIkyBzIB4CmInJGDg");
	this.shape_1127.setTransform(888.0121,186.171,0.4,0.4);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#2D2D2D").s().p("AiHA/IB4imIkyhzIFPjnIE0ODg");
	this.shape_1128.setTransform(862.2896,186.111,0.4,0.4);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#10A2E0").s().p("ArPKVQnWh2kZjoQACiKAdijQA8lDCMh4QCaiDEchZQDvhMDRgOQA2gIABAFIE2OCID5uCQAAgEA6ADIA6AEQDaAPDMA7QEEBNCYCBQCLB3A5DNQAUBHARBrIAbCvQmiE8m2B/QkxBZlhADIgUAAQkzAAldhYg");
	this.shape_1129.setTransform(874.7108,198.1284,0.4,0.4);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#AC764B").s().p("AkVB8IAAkzIIsAAIgDFvg");
	this.shape_1130.setTransform(874.0007,161.5086,0.4,0.4);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#C4894D").s().p("AkWJ4IiLuBICLgLIAAljIIsAAIAAFjICMALIiMOBg");
	this.shape_1131.setTransform(874.0107,179.3103,0.4,0.4);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#2D2D2D").s().p("AoOQBQhpAAhGgkQgfgPgagYQgTgRgijyQgokUgKkXQgOliApjuQAyklB/hVQCGhZCDgsQCsg5DVAAQCsAACRAlQB5AfBwA+QAvAZA1AjQAWAPAOAMQFQETkPXKQgRAPhQAdQhYAfgvAAg");
	this.shape_1132.setTransform(874.163,116.6341,0.4,0.4);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#96DAF3").s().p("EgPMAj/QnBi9lalaQlalai9nBQjFnQAAn9QAAn7DFnRQC9nAFalaQFalaHBi+QHQjFH8AAQH8AAHRDFQHAC+FaFaQFaFaC+HAQDFHRAAH7QAAH9jFHQQi+HBlaFaQlaFanAC9QnRDFn8AAQn8AAnQjFg");
	this.shape_1133.setTransform(872.0105,128.0252,0.4,0.4);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#02A7E1").s().p("AgsF5IAAlQIlBAAIAAhUIFBAAIAAlNIBZAAIAAFNIFBAAIAABUIlBAAIAAFQg");
	this.shape_1134.setTransform(311.3408,296.1932,0.6502,0.6502);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1089,p:{scaleX:0.7999,scaleY:0.7999,x:693.2168,y:319.367}},{t:this.shape_1088,p:{scaleX:0.7999,scaleY:0.7999,x:696.9474,y:303.0682}},{t:this.shape_1087,p:{scaleX:0.7998,scaleY:0.7998,x:696.4619,y:431.4271}},{t:this.shape_1086,p:{scaleX:0.7998,scaleY:0.7998,x:696.4819,y:394.2355}},{t:this.shape_1085,p:{scaleX:0.7998,scaleY:0.7998,x:699.4836,y:470.3785}},{t:this.shape_1084,p:{scaleX:0.7998,scaleY:0.7998,x:674.991,y:445.187}},{t:this.shape_1083,p:{scaleX:0.7998,scaleY:0.7998,x:723.9362,y:445.147}},{t:this.shape_1082,p:{scaleX:0.7998,scaleY:0.7998,x:696.3845,y:306.6488}},{t:this.shape_1081,p:{scaleX:0.7998,scaleY:0.7998,x:641.9609,y:345.3371}},{t:this.shape_1080,p:{scaleX:0.7998,scaleY:0.7998,x:750.6482,y:345.3371}},{t:this.shape_1079,p:{scaleX:0.7998,scaleY:0.7998,x:696.1756,y:254.9868}},{t:this.shape_1078,p:{scaleX:0.7999,scaleY:0.7999,x:671.5983,y:312.7875}},{t:this.shape_1077,p:{scaleX:0.7999,scaleY:0.7999,x:721.6747,y:312.4075}},{t:this.shape_1076,p:{scaleX:0.7999,scaleY:0.7999,x:696.0196,y:329.0457}},{t:this.shape_1075}]}).to({state:[{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090}]},1).to({state:[{t:this.shape_1089,p:{scaleX:0.7998,scaleY:0.7998,x:693.0819,y:319.2142}},{t:this.shape_1088,p:{scaleX:0.7998,scaleY:0.7998,x:696.812,y:302.9176}},{t:this.shape_1087,p:{scaleX:0.7997,scaleY:0.7997,x:696.3072,y:431.2353}},{t:this.shape_1086,p:{scaleX:0.7997,scaleY:0.7997,x:696.3272,y:394.0494}},{t:this.shape_1085,p:{scaleX:0.7997,scaleY:0.7997,x:699.3866,y:470.2549}},{t:this.shape_1084,p:{scaleX:0.7997,scaleY:0.7997,x:674.8964,y:445.0658}},{t:this.shape_1083,p:{scaleX:0.7997,scaleY:0.7997,x:723.8369,y:445.0258}},{t:this.shape_1082,p:{scaleX:0.7997,scaleY:0.7997,x:696.2879,y:306.5408}},{t:this.shape_1081,p:{scaleX:0.7997,scaleY:0.7997,x:641.8695,y:345.2255}},{t:this.shape_1080,p:{scaleX:0.7997,scaleY:0.7997,x:750.5463,y:345.2255}},{t:this.shape_1079,p:{scaleX:0.7997,scaleY:0.7997,x:696.021,y:254.822}},{t:this.shape_1078,p:{scaleX:0.7998,scaleY:0.7998,x:671.4664,y:312.6356}},{t:this.shape_1077,p:{scaleX:0.7998,scaleY:0.7998,x:721.536,y:312.2556}},{t:this.shape_1076,p:{scaleX:0.7998,scaleY:0.7998,x:695.8843,y:328.8916}},{t:this.shape_1105,p:{scaleX:0.7998,scaleY:0.7998,x:696.7611,y:360.1192}}]},1).to({state:[{t:this.shape_1118,p:{scaleX:0.7999,scaleY:0.7999,x:693.1107,y:310.1701}},{t:this.shape_1117,p:{scaleX:0.7999,scaleY:0.7999,x:696.8214,y:302.9506}},{t:this.shape_1116,p:{scaleX:0.7998,scaleY:0.7998,x:696.3181,y:431.3314}},{t:this.shape_1115,p:{scaleX:0.7998,scaleY:0.7998,x:696.3381,y:394.8218}},{t:this.shape_1114,p:{scaleX:0.7998,scaleY:0.7998,x:697.8777,y:470.5791}},{t:this.shape_1113,p:{scaleX:0.7997,scaleY:0.7997,x:672.2641,y:445.2247}},{t:this.shape_1112,p:{scaleX:0.7997,scaleY:0.7997,x:724.9852,y:445.3446}},{t:this.shape_1111,p:{scaleX:0.7997,scaleY:0.7997,x:696.2755,y:309.7404}},{t:this.shape_1110,p:{scaleX:0.7997,scaleY:0.7997,x:640.5754,y:342.1416}},{t:this.shape_1109,p:{scaleX:0.7997,scaleY:0.7997,x:751.7556,y:342.1416}},{t:this.shape_1108,p:{scaleX:0.7998,scaleY:0.7998,x:696.0719,y:254.9213}},{t:this.shape_1078,p:{scaleX:0.7999,scaleY:0.7999,x:671.4723,y:312.6899}},{t:this.shape_1077,p:{scaleX:0.7999,scaleY:0.7999,x:721.5486,y:312.31}},{t:this.shape_1107,p:{scaleX:0.7999,scaleY:0.7999,x:695.8935,y:328.9281}},{t:this.shape_1106,p:{scaleX:0.7999,scaleY:0.7999,x:693.7415,y:362.4919}}]},1).to({state:[{t:this.shape_1118,p:{scaleX:0.4,scaleY:0.4001,x:872.0006,y:116.5966}},{t:this.shape_1117,p:{scaleX:0.4,scaleY:0.4001,x:873.8562,y:112.9857}},{t:this.shape_1116,p:{scaleX:0.3999,scaleY:0.4,x:873.5967,y:177.1584}},{t:this.shape_1115,p:{scaleX:0.3999,scaleY:0.4,x:873.6067,y:158.8994}},{t:this.shape_1114,p:{scaleX:0.3999,scaleY:0.4,x:874.3766,y:196.7867}},{t:this.shape_1113,p:{scaleX:0.3999,scaleY:0.3999,x:861.5375,y:184.1066}},{t:this.shape_1112,p:{scaleX:0.3999,scaleY:0.3999,x:887.9,y:184.1666}},{t:this.shape_1111,p:{scaleX:0.3999,scaleY:0.3999,x:873.5441,y:116.3489}},{t:this.shape_1110,p:{scaleX:0.3999,scaleY:0.3999,x:845.6919,y:132.5533}},{t:this.shape_1109,p:{scaleX:0.3999,scaleY:0.3999,x:901.2862,y:132.5533}},{t:this.shape_1108,p:{scaleX:0.3999,scaleY:0.4,x:873.4736,y:88.9331}},{t:this.shape_1078,p:{scaleX:0.4,scaleY:0.4001,x:861.1795,y:117.857}},{t:this.shape_1077,p:{scaleX:0.4,scaleY:0.4001,x:886.222,y:117.6669}},{t:this.shape_1107,p:{scaleX:0.4,scaleY:0.4001,x:873.3922,y:125.9787}},{t:this.shape_1106,p:{scaleX:0.4,scaleY:0.4001,x:872.316,y:142.766}}]},1).to({state:[{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119}]},1).to({state:[{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119}]},1).to({state:[{t:this.shape_1089,p:{scaleX:0.3999,scaleY:0.3999,x:871.9159,y:121.0666}},{t:this.shape_1088,p:{scaleX:0.3999,scaleY:0.3999,x:873.781,y:112.9192}},{t:this.shape_1087,p:{scaleX:0.3998,scaleY:0.3998,x:873.5189,y:177.0348}},{t:this.shape_1086,p:{scaleX:0.3998,scaleY:0.3998,x:873.5289,y:158.445}},{t:this.shape_1085,p:{scaleX:0.3998,scaleY:0.3997,x:874.9907,y:196.5041}},{t:this.shape_1084,p:{scaleX:0.3998,scaleY:0.3997,x:862.7475,y:183.9125}},{t:this.shape_1083,p:{scaleX:0.3998,scaleY:0.3997,x:887.214,y:183.8925}},{t:this.shape_1082,p:{scaleX:0.3998,scaleY:0.3997,x:873.4416,y:114.6658}},{t:this.shape_1081,p:{scaleX:0.3998,scaleY:0.3997,x:846.2365,y:134.0037}},{t:this.shape_1080,p:{scaleX:0.3998,scaleY:0.3997,x:900.5667,y:134.0037}},{t:this.shape_1079,p:{scaleX:0.3998,scaleY:0.3998,x:873.3758,y:88.8432}},{t:this.shape_1078,p:{scaleX:0.3999,scaleY:0.3999,x:861.1082,y:117.7777}},{t:this.shape_1077,p:{scaleX:0.3999,scaleY:0.3999,x:886.143,y:117.5877}},{t:this.shape_1076,p:{scaleX:0.3999,scaleY:0.3999,x:873.3172,y:125.9047}},{t:this.shape_1105,p:{scaleX:0.3999,scaleY:0.3999,x:873.7556,y:141.5168}},{t:this.shape_1134}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(550,339.5,422,286.70000000000005);
// library properties:
lib.properties = {
	id: '1A9338FEE8584755AB48BB991EF417A3',
	width: 1000,
	height: 653,
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