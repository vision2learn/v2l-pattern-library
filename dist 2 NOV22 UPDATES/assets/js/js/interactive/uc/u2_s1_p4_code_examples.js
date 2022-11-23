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



(lib.Button1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A+BHjIAAvFMA8DAAAIAAPFg");
	this.shape.setTransform(192.175,48.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,384.4,96.6);


// stage content:
(lib.uc_u2_s1_p4_code_examples = function(mode,startPosition,loop,reversed) {
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
		//Python tab button and starting point of activity
		
		this.stop(0);
		
		this.button_python_tab.addEventListener("click", python_tab_function.bind(this));
		
		function python_tab_function() {
			
			this.gotoAndStop(0);
		}
		
		
		
		
		//full code button
		
		this.button_full.addEventListener("click", full_function.bind(this));
		
		function full_function() {
		
		var _this = this;
		var frameNumber = _this.currentFrame;
		
			if(frameNumber < 4){
			this.gotoAndStop(0);
			}
			else if(frameNumber < 8){
			this.gotoAndStop(4)
			}
			else{
			this.gotoAndStop(8);
			}
		}
		
		
		
		//Comments button
		
		this.button_comment.addEventListener("click", comment_function.bind(this));
		this.comment_button2.addEventListener("click", comment_function.bind(this));
		
		function comment_function() {
			
		var _this = this;
		var frameNumber = _this.currentFrame;
		
			if(frameNumber < 4){
			this.gotoAndStop(1);
			}
			else if(frameNumber < 8){
			this.gotoAndStop(5)
			}
			else{
			this.gotoAndStop(9);
			}
		}	
		
		
		//Variable button
		
		this.button_variable.addEventListener("click", variable_function.bind(this));
		this.variable_button2.addEventListener("click", variable_function.bind(this));
		
		function variable_function() {
			
		var _this = this;
		var frameNumber = _this.currentFrame;
		
			if(frameNumber < 4){
			this.gotoAndStop(2);
			}
			else if(frameNumber < 8){
			this.gotoAndStop(6)
			}
			else{
			this.gotoAndStop(10);
			}
		}
		
		
		
		//Printing button
		
		this.button_print.addEventListener("click", print_function.bind(this));
		this.print_button2.addEventListener("click", print_function.bind(this));
		
		function print_function() {
		
		var _this = this;
		var frameNumber = _this.currentFrame;
		
			if(frameNumber < 4){
			this.gotoAndStop(3);
			}
			else if(frameNumber < 8){
			this.gotoAndStop(7)
			}
			else{
			this.gotoAndStop(11);
			}
		}	
		
		
		
		//JavaScript tab button
		
		this.button_js_tab.addEventListener("click", js_tab_function.bind(this));
		
		function js_tab_function() {
			
			this.gotoAndStop(4);	
		}
		
		
		//Cpp tab button
		
		this.button_cpp_tab.addEventListener("click", cpp_tab_function.bind(this));
		
		function cpp_tab_function() {
			
			this.gotoAndStop(8);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// label_text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnAyQgRgSAAgfQAAgfAQgSQAPgSAbAAQAaAAAPAPQAOAQAAAbIAAAOIhVAAQABATAJAKQAKAKAQAAQAMAAAKgCQAKgCALgFIAAAWQgKAFgKACQgLACgNAAQgdAAgRgRgAAegNQAAgQgHgIQgIgIgNAAQgMAAgIAIQgIAIgBAQIA5AAIAAAAg");
	this.shape.setTransform(206.725,131.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtBLQgNgSAAgfQAAggAOgRQANgSAZAAQAYAAAOATIABAAIgCgWIAAgwIAcAAIAAC2IgWAAIgEgRIgCAAQgNAUgZgBQgYAAgOgRgAgWgGQgHAKAAAWQAAAWAHALQAIALAOAAQARAAAHgKQAIgJABgVIAAgEQAAgZgJgJQgIgLgQABQgOAAgIAMg");
	this.shape_1.setTransform(191.95,129.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfA7QgOgIgIgQQgHgPAAgUQAAgfAQgSQAQgRAcAAQAdAAAQASQAQASAAAeQAAAfgQASQgQASgdAAQgRAAgOgIgAgYggQgIALAAAVQAAAtAgAAQAhAAAAgtQAAgsghAAQgQAAgIAMg");
	this.shape_2.setTransform(177.525,131.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghAyQgQgRAAggQABggAPgSQAQgRAdAAQAVAAAQAHIgIAXQgRgHgMAAQggAAAAArQAAAWAIALQAIALAPAAQATAAARgJIAAAYQgIAEgIACQgIACgMAAQgdAAgPgRg");
	this.shape_3.setTransform(164.45,131.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNBbIAAi1IAbAAIAAC1g");
	this.shape_4.setTransform(148.825,129.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNBbIAAi1IAbAAIAAC1g");
	this.shape_5.setTransform(142.125,129.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtA2QgLgLAAgZIAAhTIAcAAIAABPQAAAOAGAIQAGAHANAAQAQABAIgKQAIgLAAgYIAAhAIAcAAIAACAIgWAAIgEgRIgBAAQgGAKgKAFQgLAFgMAAQgYAAgMgMg");
	this.shape_6.setTransform(131.225,132);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgwBWIAAirIBgAAIAAAYIhEAAIAAA2IBAAAIAAAWIhAAAIAABHg");
	this.shape_7.setTransform(118,129.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAKQgEgDABgHQAAgFACgDQADgEAFAAQAFAAADAEQADADAAAFQABAGgEAEQgDADgFAAQgEgBgDgCg");
	this.shape_8.setTransform(249.8,829.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_9.setTransform(241.925,825.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghA8QgLgOAAgZQAAgYALgOQAMgOAUgBQATABALAPIABAAIAAgIIgBgHIAAgqIAQAAIAACRIgMAAIgDgOIgBAAQgKAQgUAAQgVAAgLgOgAgVgIQgHAJAAAUQAAAUAHAKQAIAKANAAQAPAAAHgJQAIgJgBgTIAAgDQABgVgIgJQgHgKgPABQgNgBgIALg");
	this.shape_10.setTransform(230.35,823.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYAvQgLgHgFgMQgGgMAAgQQAAgYAMgOQANgOAVAAQAWAAAMAOQANAOAAAYQAAAZgNAOQgMAOgWAAQgNAAgLgGgAgWgdQgIAKAAATQAAATAIALQAIAKAOAAQAPAAAIgKQAIgKAAgUQAAgTgIgKQgIgKgPAAQgPAAgHAKg");
	this.shape_11.setTransform(218.95,825.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYAnQgMgNAAgZQAAgZAMgOQANgOAVAAIAQABQAHACAEACIgFANIgLgDIgLgCQgeAAAAAnQAAATAIAKQAHALAOAAQANAAANgGIAAAOQgKAFgQAAQgVAAgMgOg");
	this.shape_12.setTransform(208.85,825.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQBJIAAhZIgTAAIAAgHIATgGIAAgGQAAgmAgABQAIgBALAEIgDANQgJgEgHAAQgJABgEAFQgDAGgBANIAAAHIAaAAIAAAMIgaAAIAABZg");
	this.shape_13.setTransform(196.35,823.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAvQgKgHgHgMQgFgMAAgQQAAgYAMgOQANgOAVAAQAWAAANAOQAMAOAAAYQAAAZgMAOQgNAOgWAAQgNAAgLgGgAgXgdQgHAKAAATQAAATAIALQAHAKAPAAQAPAAAIgKQAIgKAAgUQAAgTgIgKQgIgKgPAAQgOAAgJAKg");
	this.shape_14.setTransform(186.8,825.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAcA0IAAhBQgBgNgGgGQgFgGgMAAQgQAAgHAJQgIAIABAUIAAA1IgQAAIAAhlIAMAAIADAOIABAAQAEgIAJgEQAJgEAJAAQATAAAJAJQAKAJAAATIAABCg");
	this.shape_15.setTransform(170.2,825.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYAvQgKgHgHgMQgFgMAAgQQAAgYAMgOQANgOAVAAQAWAAANAOQAMAOAAAYQAAAZgMAOQgNAOgWAAQgNAAgLgGgAgXgdQgHAKAAATQAAATAIALQAHAKAPAAQAPAAAIgKQAIgKAAgUQAAgTgIgKQgIgKgPAAQgOAAgJAKg");
	this.shape_16.setTransform(158.45,825.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgHBGIAAhlIAPAAIAABlgAgFgzQgDgDAAgFQAAgGADgCQACgCADAAQAEAAADACQACACAAAGQAAAFgCADQgDACgEABQgDgBgCgCg");
	this.shape_17.setTransform(150.275,823.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPAhIAAg8IgOAAIAAgIIAOgGIAHgWIAIAAIAAAYIAeAAIAAAMIgeAAIAAA7QAAAJAEAFQAFAFAHAAIAIAAIAGgCIAAAMIgHACIgJABQgdAAAAgfg");
	this.shape_18.setTransform(144.475,824.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYAnQgMgNAAgZQAAgZAMgOQANgOAVAAIAQABQAHACAEACIgFANIgLgDIgLgCQgeAAAAAnQAAATAIAKQAHALAOAAQANAAANgGIAAAOQgKAFgQAAQgVAAgMgOg");
	this.shape_19.setTransform(136.85,825.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_20.setTransform(126.725,825.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgkAvIAAgPIAQAGQAJACAIAAQALAAAHgEQAGgDABgIQAAgGgGgFQgFgEgOgGQgPgEgFgEQgHgEgCgFQgEgFAAgHQABgNAJgHQALgHAQAAQARAAAQAGIgGANQgPgGgNAAQgJAAgGADQgGAEAAAGQAAAEACADQACADAFACIARAIQATAGAGAGQAHAHgBAKQAAAPgLAHQgKAIgSAAQgVAAgMgGg");
	this.shape_21.setTransform(116.8,825.325);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_22.setTransform(301.975,796.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAbBJIAAhCQABgMgHgGQgFgGgNAAQgOgBgIAKQgHAIgBAUIAAA1IgPAAIAAiRIAPAAIAAAtIAAAMIAAAAQAFgHAJgEQAJgFAJAAQATABAKAIQAJAKAAASIAABDg");
	this.shape_23.setTransform(290.75,794.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgPAhIAAg8IgOAAIAAgIIAOgGIAHgWIAIAAIAAAYIAeAAIAAAMIgeAAIAAA7QAAAJAEAFQAFAFAHAAIAIAAIAGgCIAAAMIgHACIgJABQgdAAAAgfg");
	this.shape_24.setTransform(281.375,795.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAcA0IAAhBQgBgNgFgGQgGgGgMAAQgQAAgHAJQgIAIAAAUIAAA1IgPAAIAAhlIAMAAIADAOIABAAQAEgIAJgEQAJgEAJAAQATAAAJAJQAKAJAAATIAABCg");
	this.shape_25.setTransform(267.3,796.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYAvQgKgHgHgMQgFgMAAgQQAAgYAMgOQANgOAVAAQAWAAANAOQAMAOAAAYQAAAZgMAOQgNAOgWAAQgNAAgLgGgAgXgdQgHAKAAATQAAATAIALQAHAKAPAAQAPAAAIgKQAIgKAAgUQAAgTgIgKQgIgKgPAAQgOAAgJAKg");
	this.shape_26.setTransform(255.55,796.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AguBJIAAgNIAMABQAQAAAHgSIAFgOIgphmIARAAIAWA6QAIATAAAJIABAAIAFgPIAahHIAQAAIgsBzQgFASgJAHQgJAHgNAAIgOgBg");
	this.shape_27.setTransform(239.925,799.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHBJIAAiRIAPAAIAACRg");
	this.shape_28.setTransform(232.725,794.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgPAhIAAg8IgOAAIAAgIIAOgGIAHgWIAIAAIAAAYIAeAAIAAAMIgeAAIAAA7QAAAJAEAFQAFAFAHAAIAIAAIAGgCIAAAMIgHACIgJABQgdAAAAgfg");
	this.shape_29.setTransform(226.925,795.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgYAnQgMgNAAgZQAAgZAMgOQAMgOAXAAIAOABQAIACAEACIgFANIgLgDIgLgCQgeAAAAAnQAAATAHAKQAIALAOAAQANAAAOgGIAAAOQgLAFgPAAQgWAAgMgOg");
	this.shape_30.setTransform(219.25,796.725);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_31.setTransform(209.175,796.725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgcA0IAAhlIAMAAIACATIABAAQAFgKAIgGQAHgFALAAIALABIgBAOIgMgBQgMAAgIAKQgJAKAAAPIAAA2g");
	this.shape_32.setTransform(200.55,796.625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgHBGIAAhlIAPAAIAABlgAgFgzQgDgDAAgFQAAgFADgDQACgDADABQAEgBADADQACADAAAFQAAAFgCADQgDACgEAAQgDAAgCgCg");
	this.shape_33.setTransform(193.575,794.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AghA8QgLgNAAgaQAAgYALgOQAMgPATAAQAUAAAMAPIABAAIgBgHIAAgHIAAgqIAPAAIAACRIgNAAIgBgOIgBAAQgLAQgVAAQgUAAgLgOgAgVgIQgHAJAAAUQAAAUAHAKQAHAKAOAAQAPAAAHgJQAIgIAAgUIAAgDQAAgVgIgJQgHgJgPAAQgOAAgHAKg");
	this.shape_34.setTransform(184.95,794.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAWBJIgjgwIgLAKIAAAmIgQAAIAAiRIAQAAIAABMIgBAQIABAAIAMgPIAgghIATAAIgqAqIAsA7g");
	this.shape_35.setTransform(170.1,794.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgYAnQgMgNAAgZQAAgZAMgOQAMgOAWAAIAQABIALAEIgFANIgLgDIgLgCQgeAAAAAnQAAATAHAKQAIALAOAAQANAAAOgGIAAAOQgLAFgPAAQgWAAgMgOg");
	this.shape_36.setTransform(160.05,796.725);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgHBGIAAhlIAPAAIAABlgAgFgzQgDgDAAgFQAAgFADgDQACgDADABQAEgBADADQACADAAAFQAAAFgCADQgDACgEAAQgDAAgCgCg");
	this.shape_37.setTransform(152.875,794.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgHBJIAAiRIAPAAIAACRg");
	this.shape_38.setTransform(148.075,794.55);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgYAnQgMgNAAgZQAAgZAMgOQANgOAVAAIAQABIALAEIgFANIgLgDIgLgCQgeAAAAAnQAAATAIAKQAHALAOAAQANAAANgGIAAAOQgKAFgQAAQgVAAgMgOg");
	this.shape_39.setTransform(141.35,796.725);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgdA0IAAhlIAOAAIABATIABAAQAFgKAIgGQAHgFALAAIAMABIgCAOIgMgBQgMAAgIAKQgJAKAAAPIAAA2g");
	this.shape_40.setTransform(128.35,796.625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgYAvQgKgHgHgMQgFgMAAgQQAAgYAMgOQANgOAVAAQAWAAANAOQAMAOAAAYQAAAZgMAOQgNAOgWAAQgNAAgLgGgAgXgdQgHAKAAATQAAATAIALQAHAKAPAAQAPAAAIgKQAIgKAAgUQAAgTgIgKQgIgKgPAAQgOAAgJAKg");
	this.shape_41.setTransform(117.95,796.725);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgNAXIAFgXIAFgXIAQAAIABADIgHAVIgIAWg");
	this.shape_42.setTransform(308.4,773.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AghArQgJgJAAgTIAAhCIAPAAIAABBQABANAGAGQAFAGAMAAQAQAAAHgJQAIgJgBgTIAAg1IAQAAIAABlIgNAAIgDgOIAAAAQgFAIgIAEQgJAEgJAAQgUAAgJgJg");
	this.shape_43.setTransform(300.5,768.275);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAbA0IAAhBQAAgNgFgGQgGgGgMAAQgQAAgHAJQgIAIAAAUIAAA1IgPAAIAAhlIAMAAIADAOIABAAQAEgIAKgEQAIgEAKAAQASAAAJAJQAKAJAAATIAABCg");
	this.shape_44.setTransform(288.8,768.075);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_45.setTransform(277.575,768.175);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AA6A0IAAhCQAAgMgGgGQgFgGgLAAQgOAAgHAIQgHAJAAARIAAA4IgPAAIAAhCQAAgMgFgGQgFgGgLAAQgPAAgHAJQgHAIAAAUIAAA1IgPAAIAAhlIAMAAIADAOIABAAQAEgIAIgEQAIgEAKAAQAYAAAHARIAAAAQAFgIAJgFQAIgEALAAQASAAAJAJQAIAJAAATIAABCg");
	this.shape_46.setTransform(263.275,768.075);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_47.setTransform(244.025,768.175);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgIAzIgnhlIARAAIAWA7QAHAWABAGIAAAAIAHgUIAZhDIAQAAIgnBlg");
	this.shape_48.setTransform(233.8,768.175);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgYAvQgLgHgFgMQgGgMAAgQQAAgYANgOQAMgOAVAAQAWAAAMAOQANAOAAAYQAAAZgNAOQgMAOgWAAQgNAAgLgGgAgWgdQgIAKAAATQAAATAIALQAIAKAOAAQAPAAAIgKQAIgKAAgUQAAgTgIgKQgIgKgPAAQgPAAgHAKg");
	this.shape_49.setTransform(223.2,768.175);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgPBGQgIgEgGgHIgBAAIgDANIgLAAIAAiRIAPAAIAAAjIAAAWIAAAAQALgQAVAAQAUABALAOQALANAAAYQAAAagLAOQgLAOgUAAQgJAAgJgEgAgWgJQgHAJAAAUQAAAWAIAJQAHAKAPAAQAOAAAHgLQAHgKAAgUQAAgUgHgIQgHgKgPAAQgPgBgHAKg");
	this.shape_50.setTransform(211.825,766.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgfAtQgJgIAAgOQAAgeAwgCIASAAIAAgHQAAgMgFgGQgFgFgMAAQgMAAgQAIIgFgMQAIgEAJgDQAJgCAIAAQATAAAJAIQAIAIAAASIAABFIgLAAIgEgOIAAAAQgIAJgIAEQgHADgLAAQgPAAgIgIgAAKABQgRABgJAFQgIAFAAALQAAAIAFAFQAFAEAKAAQANAAAIgIQAJgIgBgOIAAgJg");
	this.shape_51.setTransform(200.05,768.175);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_52.setTransform(184.725,768.175);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAbBJIAAhDQAAgLgFgGQgGgHgMABQgQAAgHAJQgIAIAAAUIAAA1IgPAAIAAiRIAPAAIAAAsIAAAOIAAAAQAGgIAIgEQAJgEAJgBQATAAAJAJQAKAJAAATIAABDg");
	this.shape_53.setTransform(173.5,766);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgPAhIAAg8IgOAAIAAgIIAOgGIAHgWIAIAAIAAAYIAeAAIAAAMIgeAAIAAA7QAAAJAEAFQAFAFAHAAIAIAAIAGgCIAAAMIgHACIgJABQgdAAAAgfg");
	this.shape_54.setTransform(164.175,767.075);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AA6A0IAAhCQAAgMgGgGQgFgGgLAAQgOAAgHAIQgHAJAAARIAAA4IgPAAIAAhCQAAgMgFgGQgFgGgLAAQgPAAgHAJQgHAIAAAUIAAA1IgPAAIAAhlIAMAAIADAOIABAAQAEgIAIgEQAIgEAKAAQAYAAAHARIAAAAQAFgIAJgFQAIgEALAAQASAAAJAJQAIAJAAATIAABCg");
	this.shape_55.setTransform(147.025,768.075);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgYAvQgKgHgHgMQgFgMAAgQQAAgYAMgOQANgOAVAAQAWAAANAOQAMAOAAAYQAAAZgMAOQgNAOgWAAQgNAAgLgGgAgXgdQgHAKAAATQAAATAIALQAHAKAPAAQAPAAAIgKQAIgKAAgUQAAgTgIgKQgIgKgPAAQgOAAgJAKg");
	this.shape_56.setTransform(132.25,768.175);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgcA0IAAhlIAMAAIACATIABAAQAFgKAIgGQAHgFALAAIALABIgBAOIgMgBQgMAAgIAKQgJAKAAAPIAAA2g");
	this.shape_57.setTransform(123.25,768.075);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgQBJIAAhZIgSAAIAAgHIASgGIAAgGQAAgmAgABQAJAAALADIgFANQgIgEgHAAQgJABgEAFQgEAGABANIAAAHIAZAAIAAAMIgZAAIAABZg");
	this.shape_58.setTransform(115.95,765.95);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgPAhIAAg8IgOAAIAAgIIAOgGIAHgWIAIAAIAAAYIAeAAIAAAMIgeAAIAAA7QAAAJAEAFQAFAFAHAAIAIAAIAGgCIAAAMIgHACIgJABQgdAAAAgfg");
	this.shape_59.setTransform(268.125,738.525);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgYAnQgMgNAAgZQAAgZAMgOQAMgOAWAAQAIAAAIABIALAEIgFANIgLgDIgLgCQgeAAAAAnQAAATAHAKQAIALAOAAQANAAAOgGIAAAOQgLAFgQAAQgVAAgMgOg");
	this.shape_60.setTransform(260.5,739.625);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_61.setTransform(250.375,739.625);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgHBJIAAiRIAPAAIAACRg");
	this.shape_62.setTransform(242.575,737.45);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_63.setTransform(234.825,739.625);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgjAvIAAgPIAQAGQAIACAIAAQALAAAHgEQAGgDAAgIQABgGgGgFQgFgEgOgGQgOgEgHgEQgGgEgDgFQgCgFAAgHQgBgNALgHQAKgHAQAAQARAAAQAGIgGANQgPgGgMAAQgLAAgFADQgGAEAAAGQAAAEADADQACADAEACIARAIQASAGAHAGQAGAHAAAKQABAPgLAHQgLAIgTAAQgUAAgLgGg");
	this.shape_64.setTransform(224.95,739.625);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAbA0IAAhBQAAgNgFgGQgGgGgMAAQgQAAgHAJQgIAIAAAUIAAA1IgPAAIAAhlIANAAIACAOIABAAQAEgIAKgEQAIgEAKAAQASAAAJAJQAKAJAAATIAABCg");
	this.shape_65.setTransform(209.5,739.525);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_66.setTransform(198.225,739.625);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAbBJIAAhDQAAgLgFgGQgGgHgMAAQgQABgHAIQgIAJAAAUIAAA1IgPAAIAAiRIAPAAIAAAsIAAAOIAAAAQAGgIAIgEQAJgEAJAAQATgBAJAKQAKAJAAASIAABDg");
	this.shape_67.setTransform(187,737.45);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgHBFIAAh7IgrAAIAAgNIBlAAIAAANIgrAAIAAB7g");
	this.shape_68.setTransform(175.75,737.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgHAKQgEgDABgHQAAgFADgEQACgCAFgBQAFABAEACQACAEAAAFQABAGgEADQgDAEgFAAQgEgBgDgCg");
	this.shape_69.setTransform(157.9,743.75);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_70.setTransform(150.075,739.625);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AghA8QgLgNAAgaQAAgZALgOQALgOAVABQATgBALAQIABAAIAAgIIgBgHIAAgqIAQAAIAACRIgNAAIgCgOIgBAAQgKAQgUAAQgVAAgLgOgAgVgIQgHAKAAATQAAAUAHAKQAHAKAOAAQAPAAAHgJQAIgJgBgTIAAgDQABgVgIgJQgHgKgPAAQgOAAgHALg");
	this.shape_71.setTransform(138.45,737.55);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgYAvQgKgHgHgMQgFgMAAgQQAAgYANgOQAMgOAVAAQAWAAANAOQAMAOAAAYQAAAZgMAOQgNAOgWAAQgNAAgLgGgAgXgdQgHAKAAATQAAATAIALQAHAKAPAAQAPAAAIgKQAIgKAAgUQAAgTgIgKQgIgKgPAAQgOAAgJAKg");
	this.shape_72.setTransform(127.1,739.625);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgYAnQgMgNAAgZQAAgZAMgOQAMgOAWAAQAIAAAIABIALAEIgFANIgLgDIgLgCQgeAAAAAnQAAATAHAKQAIALAOAAQANAAAOgGIAAAOQgLAFgPAAQgWAAgMgOg");
	this.shape_73.setTransform(116.95,739.625);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgQBKIAAhaIgTAAIAAgHIATgGIAAgFQAAgnAgAAQAIAAALAEIgDAMQgJgCgHAAQgJgBgEAHQgDAFAAANIAAAHIAZAAIAAAMIgZAAIAABag");
	this.shape_74.setTransform(267.9,708.85);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgYAvQgLgHgFgMQgGgMAAgQQAAgYANgOQAMgOAVAAQAWAAAMAOQANAOAAAYQAAAZgNAOQgMAOgWAAQgNAAgLgGgAgWgdQgIAKAAATQAAATAIALQAIAKAOAAQAPAAAIgKQAIgKAAgUQAAgTgIgKQgIgKgPAAQgPAAgHAKg");
	this.shape_75.setTransform(258.3,711.075);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_76.setTransform(242.225,711.075);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgHBJIAAiRIAPAAIAACRg");
	this.shape_77.setTransform(234.425,708.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgsBLIAAiTIAMAAIADAOIAAAAQAGgJAIgEQAIgDAKAAQAUAAALAOQALAOAAAZQAAAYgLAOQgLAOgUAAQgJAAgJgEQgIgDgGgIIgBAAIABARIAAAqgAgVg0QgIAIAAATIAAAEQAAAVAIAJQAHAJAPAAQANAAAIgLQAHgJAAgTQAAgUgHgKQgIgKgOAAQgOAAgHAJg");
	this.shape_78.setTransform(226.425,713.275);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AA6A0IAAhCQAAgMgGgGQgFgGgLAAQgOAAgHAIQgHAJAAARIAAA4IgPAAIAAhCQAAgMgFgGQgFgGgLAAQgPAAgHAJQgHAIAAAUIAAA1IgPAAIAAhlIAMAAIADAOIABAAQAEgIAIgEQAIgEAKAAQAYAAAHARIAAAAQAFgIAJgFQAIgEALAAQASAAAJAJQAIAJAAATIAABCg");
	this.shape_79.setTransform(211.375,710.975);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgfAtQgJgIAAgOQAAgeAwgCIASAAIAAgHQAAgMgFgGQgFgFgMAAQgMAAgQAIIgEgMQAHgEAJgDQAJgCAIAAQATAAAJAIQAIAIAAASIAABFIgMAAIgDgOIAAAAQgIAJgIAEQgHADgLAAQgPAAgIgIgAAKABQgSABgIAFQgIAFAAALQAAAIAFAFQAFAEAKAAQANAAAIgIQAJgIgBgOIAAgJg");
	this.shape_80.setTransform(196.8,711.075);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAdAzIgcgpIgdApIgSAAIAmgzIgjgyIARAAIAbAnIAbgnIARAAIgkAyIAmAzg");
	this.shape_81.setTransform(186.75,711.075);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_82.setTransform(176.475,711.075);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_83.setTransform(160.725,711.075);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_84.setTransform(149.975,711.075);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgkAvIAAgPIARAGQAIACAIAAQALAAAHgEQAGgDABgIQAAgGgGgFQgFgEgOgGQgOgEgHgEQgFgEgEgFQgDgFAAgHQAAgNAKgHQALgHAQAAQASAAAPAGIgGANQgPgGgNAAQgKAAgFADQgGAEAAAGQAAAEACADQADADAEACIARAIQATAGAGAGQAGAHAAAKQABAPgMAHQgKAIgSAAQgVAAgMgGg");
	this.shape_85.setTransform(140.1,711.075);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgYAvQgKgHgHgMQgFgMAAgQQAAgYAMgOQANgOAVAAQAWAAANAOQAMAOAAAYQAAAZgMAOQgNAOgWAAQgNAAgLgGgAgXgdQgHAKAAATQAAATAIALQAHAKAPAAQAPAAAIgKQAIgKAAgUQAAgTgIgKQgIgKgPAAQgOAAgJAKg");
	this.shape_86.setTransform(124.7,711.075);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgPAhIAAg8IgOAAIAAgIIAOgGIAHgWIAIAAIAAAYIAeAAIAAAMIgeAAIAAA7QAAAJAEAFQAFAFAHAAIAIAAIAGgCIAAAMIgHACIgJABQgdAAAAgfg");
	this.shape_87.setTransform(115.475,709.975);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgUBUQANgSAHgVQAGgWAAgXQAAgVgGgWQgHgWgOgSIAQAAQAMARAIAVQAHAWAAAYQAAAYgHAWQgIAVgMAQg");
	this.shape_88.setTransform(289.275,682.325);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgGAvIAAgoIgmAAIAAgMIAmAAIAAgpIAMAAIAAApIAnAAIAAAMIgnAAIAAAog");
	this.shape_89.setTransform(281.075,680.85);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgGAvIAAgoIgmAAIAAgMIAmAAIAAgpIAMAAIAAApIAnAAIAAAMIgnAAIAAAog");
	this.shape_90.setTransform(270.175,680.85);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgjA0QgQgSAAgiQAAgUAIgQQAIgQAPgJQAPgJATAAQAWAAAQAIIgHAOQgQgIgPABQgVAAgNAPQgOAPAAAZQAAAbANAPQANAOAWAAQAOAAASgFIAAAOQgOAFgUABQgeAAgRgTg");
	this.shape_91.setTransform(259,680.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AghA8QgLgNAAgaQAAgZALgOQALgOAVAAQATAAALAPIABAAIAAgHIgBgHIAAgqIAQAAIAACRIgNAAIgCgOIgBAAQgKAQgUAAQgVAAgLgOgAgVgIQgHAJAAAUQAAAUAHAKQAHAKAOAAQAPAAAHgJQAIgIgBgUIAAgDQABgVgIgJQgHgJgPAAQgOAAgHAKg");
	this.shape_92.setTransform(241.5,680.45);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAbA0IAAhBQAAgNgFgGQgGgGgMAAQgQAAgHAJQgHAIgBAUIAAA1IgPAAIAAhlIANAAIACAOIABAAQAEgIAKgEQAIgEAKAAQASAAAKAJQAJAJAAATIAABCg");
	this.shape_93.setTransform(230.1,682.425);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgfAtQgJgIAAgOQAAgeAwgCIASAAIAAgHQAAgMgFgGQgFgFgMAAQgMAAgQAIIgEgMQAHgEAJgDQAJgCAIAAQATAAAJAIQAIAIAAASIAABFIgLAAIgEgOIAAAAQgIAJgIAEQgHADgLAAQgPAAgIgIgAAKABQgRABgJAFQgIAFAAALQAAAIAFAFQAFAEAKAAQANAAAIgIQAJgIgBgOIAAgJg");
	this.shape_94.setTransform(218.5,682.525);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgqBAIAAgQQAIAFAKACQAKABAKAAQAPAAAIgFQAIgHAAgKQAAgIgDgEQgDgEgGgFQgHgEgNgEQgTgGgIgJQgJgKAAgPQAAgQANgJQALgKATAAQAUABARAHIgEAOQgRgIgRABQgLgBgHAGQgHAFAAALQAAAGACAFQADAEAGAEQAHAEAMAEQAVAIAIAIQAIAJAAAOQAAASgNALQgNAJgWABQgYgBgNgGg");
	this.shape_95.setTransform(203.35,680.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgXBUIAAgNQAGABAIAAQAJABAEgHQAFgFAAgKIAAiJIAPAAIAACHQAAASgJAKQgJAKgPAAQgJAAgFgDg");
	this.shape_96.setTransform(193.875,682.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgNAYIAGgYIADgWIARAAIABACIgHAUIgIAYg");
	this.shape_97.setTransform(185.25,687.75);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgHBFIAAg1IguhUIASAAIAjBEIAlhEIARAAIguBUIAAA1g");
	this.shape_98.setTransform(177.925,680.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgqBFIAAiJIAjAAQAyAAAAApQAAAUgOAKQgOAMgZAAIgQAAIAAA2gAgaABIAOAAQAUAAAKgGQAJgHAAgPQAAgNgJgHQgJgHgSAAIgRAAg");
	this.shape_99.setTransform(167.225,680.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAHBUQgNgQgHgWQgIgVAAgYQAAgYAIgWQAHgVANgRIAPAAQgOASgGAWQgGAWAAAVQAAAXAGAVQAHAWANASg");
	this.shape_100.setTransform(158.275,682.325);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgjAvIAAgPIAPAGQAJACAIAAQALAAAGgEQAIgDAAgIQgBgGgFgFQgFgEgOgGQgPgEgFgEQgHgEgCgFQgDgFAAgHQAAgNAKgHQAKgHARAAQARAAAPAGIgFANQgQgGgMAAQgKAAgGADQgGAEAAAGQAAAEACADQADADAEACIARAIQATAGAGAGQAHAHAAAKQAAAPgMAHQgKAIgTAAQgUAAgLgGg");
	this.shape_101.setTransform(145.9,682.525);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgPBGQgIgDgGgIIgBAAIgDANIgLAAIAAiRIAPAAIAAAkIAAAVIAAAAQALgPAVgBQAUAAALAOQALAOAAAYQAAAagLAOQgLAOgUAAQgJAAgJgEgAgWgJQgHAJAAAUQAAAWAIAKQAHAJAPAAQAOAAAHgKQAHgLAAgUQAAgTgHgKQgHgKgPABQgPAAgHAJg");
	this.shape_102.setTransform(135.675,680.45);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgfAtQgJgIAAgOQAAgeAwgCIASAAIAAgHQAAgMgFgGQgFgFgMAAQgMAAgQAIIgEgMQAHgEAJgDQAJgCAIAAQATAAAJAIQAIAIAAASIAABFIgMAAIgDgOIAAAAQgIAJgIAEQgHADgLAAQgPAAgIgIgAAKABQgSABgIAFQgIAFAAALQAAAIAFAFQAFAEAKAAQANAAAIgIQAJgIgBgOIAAgJg");
	this.shape_103.setTransform(123.9,682.525);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgPAhIAAg8IgOAAIAAgIIAOgGIAHgWIAIAAIAAAYIAeAAIAAAMIgeAAIAAA7QAAAJAEAFQAFAFAHAAIAIAAIAGgCIAAAMIgHACIgJABQgdAAAAgfg");
	this.shape_104.setTransform(115.475,681.425);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_105.setTransform(290.525,653.925);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AghA8QgLgOAAgZQAAgZALgOQAMgNAUAAQATAAALAOIABAAIAAgHIgBgHIAAgqIAQAAIAACRIgMAAIgDgOIgBAAQgKAQgUAAQgVAAgLgOgAgVgIQgHAKAAATQAAAUAHAKQAIAKANAAQAPAAAHgJQAIgIgBgUIAAgDQABgVgIgJQgHgKgPAAQgNAAgIALg");
	this.shape_106.setTransform(278.95,651.85);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgYAvQgLgHgFgMQgGgMAAgQQAAgYAMgOQANgOAVAAQAWAAAMAOQANAOAAAYQAAAZgNAOQgMAOgWAAQgNAAgLgGgAgWgdQgIAKAAATQAAATAIALQAIAKAOAAQAPAAAIgKQAIgKAAgUQAAgTgIgKQgIgKgPAAQgPAAgHAKg");
	this.shape_107.setTransform(267.55,653.925);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgYAnQgMgNAAgZQAAgZAMgOQANgOAVAAIAQABIALAEIgFANIgLgDIgLgCQgeAAAAAnQAAATAIAKQAHALAOAAQANAAAOgGIAAAOQgLAFgQAAQgVAAgMgOg");
	this.shape_108.setTransform(257.45,653.925);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_109.setTransform(242.325,653.925);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAbBJIAAhCQAAgMgFgGQgGgGgMgBQgQAAgHAJQgIAJAAATIAAA2IgPAAIAAiRIAPAAIAAAsIAAANIAAAAQAGgHAIgEQAJgFAJABQATAAAJAJQAKAIAAATIAABDg");
	this.shape_110.setTransform(231.1,651.75);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgPAhIAAg8IgOAAIAAgIIAOgGIAHgWIAIAAIAAAYIAeAAIAAAMIgeAAIAAA7QAAAJAEAFQAFAFAHAAIAIAAIAGgCIAAAMIgHACIgJABQgdAAAAgfg");
	this.shape_111.setTransform(221.775,652.825);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AA6A0IAAhCQAAgMgGgGQgFgGgLAAQgOAAgHAIQgHAJAAARIAAA4IgPAAIAAhCQAAgMgFgGQgFgGgLAAQgPAAgHAJQgHAIAAAUIAAA1IgPAAIAAhlIAMAAIADAOIABAAQAEgIAIgEQAIgEAKAAQAYAAAHARIAAAAQAFgIAJgFQAIgEALAAQASAAAJAJQAIAJAAATIAABCg");
	this.shape_112.setTransform(204.625,653.825);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgYAvQgKgHgHgMQgFgMAAgQQAAgYAMgOQANgOAVAAQAWAAANAOQAMAOAAAYQAAAZgMAOQgNAOgWAAQgNAAgLgGgAgXgdQgHAKAAATQAAATAIALQAHAKAPAAQAPAAAIgKQAIgKAAgUQAAgTgIgKQgIgKgPAAQgOAAgJAKg");
	this.shape_113.setTransform(189.85,653.925);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgcA0IAAhlIAMAAIACATIABAAQAFgKAIgGQAHgFALAAIALABIgCAOIgLgBQgMAAgIAKQgJAKAAAPIAAA2g");
	this.shape_114.setTransform(180.85,653.825);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgQBKIAAhaIgSAAIAAgHIASgGIAAgFQAAgnAgAAQAJAAALAEIgFAMQgIgCgHAAQgJgBgEAHQgEAFABANIAAAHIAZAAIAAAMIgZAAIAABag");
	this.shape_115.setTransform(173.55,651.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgPAhIAAg8IgOAAIAAgIIAOgGIAHgWIAIAAIAAAYIAeAAIAAAMIgeAAIAAA7QAAAJAEAFQAFAFAHAAIAIAAIAGgCIAAAMIgHACIgJABQgdAAAAgfg");
	this.shape_116.setTransform(161.375,652.825);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgYAnQgMgNAAgZQAAgZAMgOQAMgOAXAAIAPABIALAEIgFANIgLgDIgLgCQgeAAAAAnQAAATAHAKQAIALAOAAQANAAAOgGIAAAOQgLAFgPAAQgWAAgMgOg");
	this.shape_117.setTransform(153.75,653.925);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_118.setTransform(143.625,653.925);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgHBJIAAiRIAPAAIAACRg");
	this.shape_119.setTransform(135.825,651.75);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_120.setTransform(128.075,653.925);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgqBAIAAgPQAJADAKACQAJACAKAAQAPAAAIgFQAIgHAAgKQAAgIgDgEQgDgEgHgEQgGgFgNgEQgTgGgIgJQgIgKAAgPQgBgQAMgJQANgKASAAQAVAAARAIIgGAOQgQgHgQAAQgMAAgHAFQgHAFAAAKQAAAIACAEQADAEAGAEQAGAEAMAEQAWAHAIAJQAIAJAAAOQAAASgNALQgNAKgVgBQgZAAgNgGg");
	this.shape_121.setTransform(117.45,652.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgfApIAAgMIAPAEQAHACAGABQALAAAFgEQAGgEAAgHQAAgEgFgFQgEgDgNgFQgMgEgGgEQgEgDgDgFQgDgEAAgGQAAgLAJgGQAJgHAPAAQAOABAOAFIgFALQgOgFgKAAQgJAAgFADQgFADAAAFQAAAEACADIAGAEIAOAHQAQAFAGAFQAGAHAAAJQAAAMgJAHQgKAGgQABQgRgBgLgFg");
	this.shape_122.setTransform(193.5,197.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgNAcIAAg0IgNAAIAAgGIANgGIAGgTIAHAAIAAAUIAaAAIAAALIgaAAIAAA0QAAAIAEAFQADAEAHAAIAHgBIAGAAIAAAJIgHACIgIABQgZAAAAgcg");
	this.shape_123.setTransform(186.525,196.25);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAYAuIAAg5QAAgLgFgGQgFgFgLAAQgNAAgGAHQgHAIAAASIAAAuIgNAAIAAhZIALAAIABAMIABAAQAFgGAHgEQAIgEAIAAQAQAAAIAIQAJAIAAARIAAA6g");
	this.shape_124.setTransform(178.5,197.125);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgaAiQgLgLAAgWQAAgVAKgMQALgOASAAQAQAAAKAMQAKAKAAATIAAAIIg9AAQABAPAHAJQAIAHAMAAQAPAAAOgFIAAAMIgNAFIgQABQgTgBgMgMgAAYgHQAAgOgHgGQgFgHgLAAQgJAAgHAHQgGAHgBANIAuAAIAAAAg");
	this.shape_125.setTransform(168.65,197.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AAyAuIAAg6QAAgKgEgGQgEgFgKAAQgNAAgGAHQgGAHAAAQIAAAxIgNAAIAAg6QAAgKgFgGQgEgFgKAAQgNAAgFAHQgHAIABASIAAAuIgOAAIAAhZIALAAIACAMIABAAQAEgGAHgEQAHgEAJAAQAUAAAGAPIAAAAQAFgHAHgEQAIgEAJAAQAQAAAIAIQAHAIAAARIAAA6g");
	this.shape_126.setTransform(156.15,197.125);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AAzAuIAAg6QgBgKgEgGQgFgFgJAAQgNAAgGAHQgGAHAAAQIAAAxIgNAAIAAg6QAAgKgEgGQgFgFgKAAQgMAAgHAHQgFAIAAASIAAAuIgOAAIAAhZIALAAIACAMIABAAQADgGAIgEQAHgEAJAAQAVAAAFAPIABAAQADgHAIgEQAIgEAKAAQAPAAAHAIQAIAIAAARIAAA6g");
	this.shape_127.setTransform(140.55,197.125);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgVApQgJgGgFgLQgFgKAAgOQAAgVALgMQALgNASAAQATAAALANQALANAAAUQAAAWgLAMQgLAMgTABQgLgBgKgFgAgTgZQgHAJAAAQQAAARAHAJQAHAJAMAAQANAAAHgIQAHgKAAgRQAAgQgHgJQgHgJgNAAQgNAAgGAJg");
	this.shape_128.setTransform(127.625,197.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgeAuQgOgQAAgeQAAgSAGgOQAHgOANgHQAOgHAQgBQATABAOAGIgGAMQgNgGgOAAQgTAAgLANQgMANAAAWQAAAXAMANQAKANAUAAQAMAAARgEIAAAMQgNAEgSABQgagBgOgPg");
	this.shape_129.setTransform(117.575,195.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgfA8QgLgIAAgLQAAgIAGgHQAFgFAKgDQgEgBgCgDQgDgEABgEQgBgFADgCQADgEAGgEQgHgDgFgHQgEgHAAgJQAAgOAIgIQAKgIAQAAQAGAAAFABIAgAAIAAAJIgRACIAEAIQACAEAAAGQAAANgJAIQgJAIgPAAIgIgBQgJAFAAAGQABADADACQADACAHAAIAPAAQAOAAAJAGQAHAHABALQgBAPgMAIQgLAIgWAAQgSAAgJgGgAgXAcQgFAEAAAJQAAAHAGAEQAGADAMAAQAQAAAIgEQAIgGAAgJQAAgHgEgDQgFgCgMAAIgQAAQgJgBgFAFgAgQgyQgFAFAAAKQAAAKAFAFQAGAEAKAAQASAAAAgTQABgUgUAAQgJAAgGAFg");
	this.shape_130.setTransform(168.45,487.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAYAuIAAg5QAAgLgFgGQgFgFgKAAQgOAAgGAHQgHAIAAASIAAAuIgOAAIAAhZIAMAAIACAMIABAAQADgGAIgEQAHgEAJAAQAQAAAJAIQAHAIABARIAAA6g");
	this.shape_131.setTransform(158.85,485.475);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgGA+IAAhZIANAAIAABZgAgFgtQgCgCAAgFQAAgEACgCQACgDADAAQADAAADADQACACAAAEQAAAFgCACQgDADgDAAQgDAAgCgDg");
	this.shape_132.setTransform(151.6,483.875);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgNAcIAAg0IgNAAIAAgHIANgFIAGgTIAHAAIAAAUIAaAAIAAALIgaAAIAAA0QAAAIAEAEQADAFAHAAIAHAAIAGgBIAAAKIgHABIgIABQgZAAAAgcg");
	this.shape_133.setTransform(146.525,484.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAYAuIAAg5QAAgLgFgGQgFgFgKAAQgOAAgHAHQgGAIAAASIAAAuIgOAAIAAhZIALAAIADAMIABAAQADgGAIgEQAIgEAIAAQAQAAAJAIQAHAIABARIAAA6g");
	this.shape_134.setTransform(138.5,485.475);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgGA+IAAhZIANAAIAABZgAgFgtQgCgCAAgFQAAgEACgCQADgDACAAQADAAACADQADACAAAEQAAAFgDACQgCADgDAAQgCAAgDgDg");
	this.shape_135.setTransform(131.25,483.875);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgZAuIAAhZIALAAIACARIABAAQAFgJAGgFQAHgFAIAAIALABIgCANIgKgBQgLAAgGAIQgIAJAAAOIAAAvg");
	this.shape_136.setTransform(126.325,485.475);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AglA8IAAh3IAfAAQAsAAAAAjQAAASgMAJQgNAKgWAAIgOAAIAAAvgAgXABIAMAAQASAAAIgFQAIgGAAgOQABgLgIgGQgIgGgPAAIgQAAg");
	this.shape_137.setTransform(117.65,484.05);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgeApIAAgNIANAGQAIACAGAAQALgBAFgDQAGgDAAgIQAAgEgFgFQgEgDgNgFQgMgEgFgEQgFgDgDgFQgDgEAAgGQAAgLAJgGQAJgHAPABQAOAAAOAFIgFAMQgNgGgMAAQgIAAgFADQgFADAAAFQAAAEACADIAGAEIAPAHQAQAFAFAFQAGAGAAAJQAAANgJAHQgKAGgQABQgRgBgKgFg");
	this.shape_138.setTransform(179.45,271.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgaAjQgLgMAAgWQAAgVAKgNQAMgMAQAAQASAAAJALQAKAKAAATIAAAHIg9AAQAAAQAIAJQAHAHAOABQAOgBAOgGIAAANIgOAFIgPABQgTAAgMgMgAAYgHQAAgNgHgHQgFgHgLAAQgKAAgGAHQgHAHAAANIAuAAIAAAAg");
	this.shape_139.setTransform(170.7,271.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_140.setTransform(163.875,269.325);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgNA+QgHgEgFgGIgBAAIgDALIgKAAIAAh+IAOAAIAAAeIAAATIAAAAQAKgNARAAQASAAAKAMQAJAMAAAVQABAWgLANQgJAMgSAAQgIgBgHgCgAgTgIQgGAIAAASQAAATAHAIQAFAIAOAAQAMAAAGgJQAGgJABgRQgBgRgGgIQgGgJgMAAQgNAAgHAIg");
	this.shape_141.setTransform(156.9,269.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgbAoQgIgHAAgNQAAgaArgBIAPgBIAAgGQAAgKgFgFQgEgFgKAAQgLAAgOAHIgEgKQAHgFAIgBQAIgCAGAAQARgBAHAIQAIAHAAAPIAAA9IgKAAIgDgNIAAAAQgHAIgHAEQgGACgJABQgOgBgHgGgAAJACQgPAAgIAFQgHAEAAAJQAAAIAFADQAEAFAIAAQAMAAAHgIQAHgHAAgMIAAgIg");
	this.shape_142.setTransform(146.575,271.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgGA+IAAhZIAMAAIAABZgAgFgtQgCgCAAgFQAAgEACgCQADgDACAAQADAAACADQADACAAAEQAAAFgDACQgCADgDAAQgCAAgDgDg");
	this.shape_143.setTransform(140.15,269.525);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgZAuIAAhZIALAAIACARIABAAQAFgJAGgFQAHgFAIAAIALABIgCANIgKgBQgLAAgGAIQgIAJAAAOIAAAvg");
	this.shape_144.setTransform(135.175,271.125);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgbAoQgIgHAAgNQAAgaArgBIAPgBIAAgGQAAgKgFgFQgEgFgKAAQgLAAgOAHIgEgKQAHgFAIgBQAIgCAGAAQARgBAHAIQAIAHAAAPIAAA9IgKAAIgDgNIAAAAQgHAIgHAEQgGACgJABQgOgBgHgGgAAJACQgPAAgIAFQgHAEAAAJQAAAIAFADQAEAFAIAAQAMAAAHgIQAHgHAAgMIAAgIg");
	this.shape_145.setTransform(126.225,271.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgGA8Igrh3IAPAAIAcBMIAGAaIAHgaIAchMIAPAAIgrB3g");
	this.shape_146.setTransform(116.9,269.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(12));

	// box_outline
	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#FFFFFF").ss(1,1,1).p("Egm8gM1MBN5AAAIAAZrMhN5AAAg");
	this.shape_147.setTransform(595,241.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#FFFFFF").ss(1,1,1).p("Eg+PgMJMB8eAAAIAAYTMh8eAAAg");
	this.shape_148.setTransform(741.95,411.375);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(255,255,255,0)").s().p("Eg+OAMKIAA4TMB8dAAAIAAYTg");
	this.shape_149.setTransform(741.95,411.375);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#FFFFFF").ss(1,1,1).p("Eg38gM5MBv5AAAIAAZyMhv5AAAg");
	this.shape_150.setTransform(702.925,586.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgpcgM1MBS5AAAIAAZrMhS5AAAg");
	this.shape_151.setTransform(610.975,241.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgyagM5MBk1AAAIAAZyMhk1AAAg");
	this.shape_152.setTransform(667.425,556.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#FFFFFF").ss(1,1,1).p("Egl7gM1MBL3AAAIAAZrMhL3AAAg");
	this.shape_153.setTransform(588.475,224.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#FFFFFF").ss(1,1,1).p("Eg+PgUNMB8eAAAMAAAAobMh8eAAAg");
	this.shape_154.setTransform(741.95,418.475);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(255,255,255,0)").s().p("Eg+OAUOMAAAgobMB8dAAAMAAAAobg");
	this.shape_155.setTransform(741.95,418.475);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#FFFFFF").ss(1,1,1).p("Egx3gM5MBjvAAAIAAZyMhjvAAAg");
	this.shape_156.setTransform(663.875,644.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_150}]},1).to({state:[]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_152}]},1).to({state:[]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_156}]},1).wait(1));

	// Buttons2
	this.print_button2 = new lib.Button1();
	this.print_button2.name = "print_button2";
	this.print_button2.setTransform(704.9,594.3,1.8541,1.6813,0,0,0,192.5,48.6);
	new cjs.ButtonHelper(this.print_button2, 0, 1, 1);

	this.comment_button2 = new lib.Button1();
	this.comment_button2.name = "comment_button2";
	this.comment_button2.setTransform(601.2,241.25,1.3134,1.6984,0,0,0,193.8,49.6);
	new cjs.ButtonHelper(this.comment_button2, 0, 1, 1);

	this.variable_button2 = new lib.Button1();
	this.variable_button2.name = "variable_button2";
	this.variable_button2.setTransform(742.15,422.45,1.9886,1.4966,0,0,0,192.2,48.4);
	new cjs.ButtonHelper(this.variable_button2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.variable_button2,p:{scaleY:1.4966,y:422.45,regY:48.4}},{t:this.comment_button2,p:{regY:49.6,scaleX:1.3134,x:601.2,y:241.25}},{t:this.print_button2,p:{regX:192.5,scaleX:1.8541,scaleY:1.6813,x:704.9,y:594.3}}]}).to({state:[]},1).to({state:[{t:this.variable_button2,p:{scaleY:1.1968,y:407.95,regY:48.4}},{t:this.comment_button2,p:{regY:49.5,scaleX:1.3496,x:621.35,y:246.05}},{t:this.print_button2,p:{regX:192.4,scaleX:1.6458,scaleY:1.4522,x:661.6,y:554.35}}]},3).to({state:[]},1).to({state:[{t:this.variable_button2,p:{scaleY:1.4761,y:473.75,regY:48.6}},{t:this.comment_button2,p:{regY:49.5,scaleX:1.1729,x:573.95,y:231.05}},{t:this.print_button2,p:{regX:192.5,scaleX:1.6172,scaleY:1.6123,x:666.25,y:645.25}}]},3).to({state:[]},1).wait(3));

	// buttons
	this.button_full = new lib.Button1();
	this.button_full.name = "button_full";
	this.button_full.setTransform(206.65,132.2,0.6734,0.4299,0,0,0,193.8,49.3);
	new cjs.ButtonHelper(this.button_full, 0, 1, 1);

	this.button_cpp_tab = new lib.Button1();
	this.button_cpp_tab.name = "button_cpp_tab";
	this.button_cpp_tab.setTransform(1014.45,123.75,0.6734,0.4299,0,0,0,193.8,49.3);
	new cjs.ButtonHelper(this.button_cpp_tab, 0, 1, 1);

	this.button_js_tab = new lib.Button1();
	this.button_js_tab.name = "button_js_tab";
	this.button_js_tab.setTransform(747.6,121.45,0.6734,0.4299,0,0,0,193.8,49.3);
	new cjs.ButtonHelper(this.button_js_tab, 0, 1, 1);

	this.button_print = new lib.Button1();
	this.button_print.name = "button_print";
	this.button_print.setTransform(207.6,486.25,0.6734,0.4299,0,0,0,193.8,49.3);
	new cjs.ButtonHelper(this.button_print, 0, 1, 1);

	this.button_python_tab = new lib.Button1();
	this.button_python_tab.name = "button_python_tab";
	this.button_python_tab.setTransform(473.55,121.55,0.6734,0.4299,0,0,0,193.8,49.3);
	new cjs.ButtonHelper(this.button_python_tab, 0, 1, 1);

	this.button_variable = new lib.Button1();
	this.button_variable.name = "button_variable";
	this.button_variable.setTransform(208.55,270.15,0.6734,0.4299,0,0,0,193.8,49.3);
	new cjs.ButtonHelper(this.button_variable, 0, 1, 1);

	this.button_comment = new lib.Button1();
	this.button_comment.name = "button_comment";
	this.button_comment.setTransform(209.55,197.25,0.6734,0.4299,0,0,0,193.8,49.3);
	new cjs.ButtonHelper(this.button_comment, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_comment},{t:this.button_variable},{t:this.button_python_tab},{t:this.button_print},{t:this.button_js_tab},{t:this.button_cpp_tab},{t:this.button_full}]}).wait(12));

	// text
	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AAOAcIgEg3IATAAIgEA3gAgYAcIgEg3IATAAIgEA3g");
	this.shape_157.setTransform(1051.425,484.725);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AAOAcIgEg3IATAAIgEA3gAgYAcIgEg3IATAAIgEA3g");
	this.shape_158.setTransform(1042.775,484.725);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AAOAcIgEg3IATAAIgEA3gAgYAcIgEg3IATAAIgEA3g");
	this.shape_159.setTransform(1034.125,484.725);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgIA6QgEgEAAgHQAAgHAEgEQADgEAFAAQAGAAADAEQAEAEAAAHQAAAGgEAEQgDAEgGAAQgFAAgDgDgAgIgjQgEgDAAgIQAAgOAMAAQANAAAAAOQAAAHgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_160.setTransform(1021.425,491.575);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("Ag0BSIAAgOQAGABAHAAQASAAAIgUIAHgRIgvhzIATAAIAZBCQAIAWABAKIABAAIAGgSIAdhQIASAAIgxCDQgHATgJAJQgKAIgPAAQgIAAgIgCg");
	this.shape_161.setTransform(1013.125,494.175);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgQBPQgKgEgHgJIAAAAIgFAPIgMAAIAAijIARAAIAAAoIAAAYIAAAAQANgRAXAAQAWAAANAPQANAQAAAbQAAAdgNAPQgMAQgXAAQgLAAgIgEgAgYgLQgJALAAAXQAAAYAJALQAIAKARAAQAQABAIgMQAIgMgBgWQABgWgIgLQgIgLgQAAQgSAAgHAKg");
	this.shape_162.setTransform(1001.45,489.25);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQAMgPAXAAQAWAAANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgOAAIgDgPIgBAAQgMARgXAAQgXAAgMgQgAgXgJQgJALAAAVQAAAXAJALQAHALAQAAQARABAIgLQAIgJAAgWIAAgEQAAgXgIgLQgIgKgRAAQgQAAgHAMg");
	this.shape_163.setTransform(982,489.25);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQATAAASgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_164.setTransform(969.75,491.575);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgIgcIAAAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAGAfIABAAIAEgPIAFgQIAVhBIASAAIAVBBQAGATACAMIABAAIABgMIAWhUIASAAIgfBzg");
	this.shape_165.setTransform(955.25,491.575);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_166.setTransform(940.325,491.575);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_167.setTransform(931.075,489.15);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_168.setTransform(925.625,489.15);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_169.setTransform(916.425,491.575);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgSBTIAAhlIgVAAIAAgIIAVgGIAAgHQAAgrAkAAQAJAAANAEIgFAOQgKgDgHAAQgKAAgFAHQgEAGAAAPIAAAHIAdAAIAAAOIgdAAIAABlg");
	this.shape_170.setTransform(906.875,489.075);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQANgPAWAAQAWAAANAQIACAAIgBgIIAAgIIAAgvIARAAIAACjIgPAAIgCgPIAAAAQgNARgXAAQgWAAgNgQgAgYgJQgHALgBAVQABAXAHALQAJALAPAAQARABAJgLQAHgJABgWIAAgEQAAgXgJgLQgIgKgRAAQgPAAgJAMg");
	this.shape_171.setTransform(890.15,489.25);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_172.setTransform(877.325,491.475);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_173.setTransform(864.275,491.575);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQANgPAWAAQAWAAANAQIABAAIAAgIIAAgIIAAgvIARAAIAACjIgPAAIgCgPIAAAAQgNARgXAAQgWAAgNgQgAgYgJQgHALAAAVQAAAXAHALQAIALAQAAQARABAJgLQAIgJAAgWIAAgEQAAgXgJgLQgIgKgRAAQgQAAgIAMg");
	this.shape_174.setTransform(846.15,489.25);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_175.setTransform(833.9,491.575);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQAMgPAXAAQAXAAAMAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgOAAIgDgPIgBAAQgMARgXAAQgXAAgMgQgAgXgJQgJALAAAVQAAAXAJALQAHALAQAAQARABAIgLQAIgJAAgWIAAgEQABgXgJgLQgIgKgRAAQgQAAgHAMg");
	this.shape_176.setTransform(820.9,489.25);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgHgJgNAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_177.setTransform(808.65,491.575);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_178.setTransform(797.675,491.575);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAKALAQAAQASAAATgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_179.setTransform(786.3,491.575);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_180.setTransform(776.625,491.475);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAPAAIACAQIAAAAQAHgKAKgEQAIgEALAAQAXAAAMAQQANAPAAAdQAAAbgNAQQgMAQgXAAQgLAAgIgEQgKgEgHgJIAAAAIAAATIAAAwgAgYg7QgIAKgBAVIAAAEQAAAYAJAKQAIAKARAAQAPAAAIgMQAIgLAAgVQAAgWgIgLQgIgMgPAAQgSAAgHAKg");
	this.shape_181.setTransform(765.2,494.075);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAKALAQAAQASAAATgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_182.setTransform(746.7,491.575);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_183.setTransform(737.025,491.475);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_184.setTransform(725.475,491.575);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQATAAASgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgHgJgNAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_185.setTransform(708.3,491.575);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_186.setTransform(695.675,491.475);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgEAAgDgDg");
	this.shape_187.setTransform(686.3,489.425);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_188.setTransform(680.825,489.15);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_189.setTransform(666.55,491.575);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_190.setTransform(653.925,491.475);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_191.setTransform(640.775,491.575);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_192.setTransform(622.125,491.475);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_193.setTransform(609.075,491.575);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAPIACAAQAFgJAJgFQAKgEALAAQAVAAALAKQAKAJAAAVIAABMg");
	this.shape_194.setTransform(596.925,489.15);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAJAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_195.setTransform(586.4,490.325);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAKALAQAAQATAAASgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_196.setTransform(571.1,491.575);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_197.setTransform(561.425,491.475);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_198.setTransform(549.725,491.575);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgRAAgHAJQgJAKAAATIAABAIgQAAIAAhKQAAgOgGgHQgFgHgNAAQgQAAgIAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgIAIgFQAKgFALAAQAbAAAHAUIABAAQAFgJAKgGQAKgFANAAQATAAAJAKQALAKgBAWIAABLg");
	this.shape_199.setTransform(533.3,491.475);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_200.setTransform(514.025,491.475);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgIAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_201.setTransform(502.9,491.575);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAYBEIAKAfIABAAIAHgXIAbhMIATAAIgrBzg");
	this.shape_202.setTransform(491.4,491.575);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_203.setTransform(479.475,491.575);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgRgFgHgFQgGgEgEgGQgDgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_204.setTransform(462.3,491.575);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAGgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_205.setTransform(453.25,490.325);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_206.setTransform(442.975,491.475);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAKALAQAAQATAAASgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_207.setTransform(430.35,491.575);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgQAAgHAJQgJAKABATIAABAIgRAAIAAhKQAAgOgGgHQgFgHgNAAQgRAAgHAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgIAIgFQAKgFAKAAQAcAAAHAUIABAAQAFgJAKgGQAJgFAOAAQATAAAKAKQAKAKgBAWIAABLg");
	this.shape_208.setTransform(414.3,491.475);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgRAAgHAJQgJAKABATIAABAIgRAAIAAhKQAAgOgGgHQgFgHgNAAQgQAAgIAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgIAIgFQAKgFALAAQAbAAAHAUIABAAQAFgJAKgGQAKgFANAAQATAAAJAKQALAKgBAWIAABLg");
	this.shape_209.setTransform(394.25,491.475);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_210.setTransform(377.675,491.575);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgnA7QgSgVAAgmQAAgXAJgSQAIgSASgJQAQgKAWAAQAYAAATAJIgIAPQgSgIgRAAQgYAAgQARQgOARAAAcQAAAeAOARQAOAQAaAAQAPAAAVgFIAAAPQgPAGgYAAQghAAgTgUg");
	this.shape_211.setTransform(364.65,489.625);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AABBNIAJgtIgfAAIgJAtIgOAAIAIgtIgbAAIAAgOIAeAAIAHgjIgdAAIAAgNIAfAAIAJguIAPAAIgJAuIAfAAIAJguIAOAAIgJAuIAcAAIAAANIgeAAIgHAjIAeAAIAAAOIghAAIgJAtgAgTASIAfAAIAHgjIgfAAg");
	this.shape_212.setTransform(900.425,426.05);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgIA6QgEgEAAgHQAAgHAEgEQADgEAFAAQAGAAADAEQAEAEAAAHQAAAGgEAEQgDAEgGAAQgFAAgDgDgAgIgjQgEgDAAgIQAAgOAMAAQANAAAAAOQAAAHgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_213.setTransform(885.025,427.975);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_214.setTransform(878.575,427.875);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAKALQAJALARAAQASAAATgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgCAQIA8AAIAAAAg");
	this.shape_215.setTransform(867.45,427.975);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_216.setTransform(857.45,426.725);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_217.setTransform(848.825,427.975);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_218.setTransform(837.075,427.975);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_219.setTransform(827.875,427.875);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_220.setTransform(816.325,427.975);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALAKQAKALAAAVIAABLg");
	this.shape_221.setTransform(804.175,425.55);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_222.setTransform(792.625,427.975);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALAKQAKALAAAVIAABLg");
	this.shape_223.setTransform(775.125,425.55);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgLAAgHAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_224.setTransform(763.4,427.975);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_225.setTransform(751.825,427.975);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALAKQAKALAAAVIAABLg");
	this.shape_226.setTransform(739.675,425.55);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_227.setTransform(721.45,427.975);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALAKQAKALAAAVIAABLg");
	this.shape_228.setTransform(708.825,425.55);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_229.setTransform(698.3,426.725);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgIgcIAAAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAHAfIABAAIADgPIAFgQIAVhBIASAAIAVBBQAFATACAMIACAAIACgMIAVhUIASAAIgfBzg");
	this.shape_230.setTransform(680.55,427.975);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_231.setTransform(665.675,427.975);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_232.setTransform(656.425,425.55);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_233.setTransform(650.925,425.55);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_234.setTransform(641.725,427.975);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgSBTIAAhlIgVAAIAAgIIAVgGIAAgHQAAgrAkAAQAJAAANAEIgFAOQgKgDgHAAQgKAAgFAHQgEAGAAAPIAAAHIAdAAIAAAOIgdAAIAABlg");
	this.shape_235.setTransform(632.225,425.475);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgOAAgIAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_236.setTransform(616.4,427.975);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_237.setTransform(603.775,427.875);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQADACAAAGQAAAGgDADQgDADgEAAQgEAAgDgDg");
	this.shape_238.setTransform(594.4,425.825);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_239.setTransform(588.925,425.55);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgHgJgNAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_240.setTransform(574.65,427.975);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_241.setTransform(565.825,425.55);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQABgKAGgIQAHgIAMgCQgEgCgDgFQgDgEAAgFQAAgHAEgDQADgFAHgFQgJgDgGgJQgFgJgBgLQAAgTAMgLQAMgKAUAAQAJAAAGACIApAAIAAALIgWADIAGAJQACAGAAAIQAAARgMAKQgLAKgUAAIgKgBQgLAGABAIQAAAFADACQAFACAJAAIATAAQATAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgHAGAAAKQABAKAHAEQAJAFAOAAQAVAAALgGQALgHAAgLQgBgKgFgDQgHgEgQAAIgUAAQgLAAgHAGgAgVhBQgGAHAAANQAAAMAHAHQAGAGANAAQAZAAgBgZQAAgagZAAQgLAAgIAGg");
	this.shape_242.setTransform(557.1,430.475);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_243.setTransform(544.725,427.875);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQADACAAAGQAAAGgDADQgDADgEAAQgEAAgDgDg");
	this.shape_244.setTransform(535.35,425.825);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgRgFgHgFQgGgEgEgGQgDgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_245.setTransform(527.55,427.975);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_246.setTransform(510.375,427.975);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_247.setTransform(492.675,427.875);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_248.setTransform(479.475,427.975);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgRgFgHgFQgGgEgEgGQgDgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_249.setTransform(462.3,427.975);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAGgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_250.setTransform(453.25,426.725);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_251.setTransform(442.975,427.875);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAKALAQAAQATAAASgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_252.setTransform(430.35,427.975);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgQAAgHAJQgJAKABATIAABAIgRAAIAAhKQAAgOgGgHQgFgHgNAAQgRAAgHAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgIAIgFQAKgFAKAAQAcAAAHAUIABAAQAFgJAKgGQAJgFAOAAQATAAAKAKQAKAKgBAWIAABLg");
	this.shape_253.setTransform(414.3,427.875);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgRAAgHAJQgJAKABATIAABAIgRAAIAAhKQAAgOgGgHQgFgHgNAAQgQAAgIAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgIAIgFQAKgFALAAQAbAAAHAUIABAAQAFgJAKgGQAKgFANAAQATAAAJAKQALAKgBAWIAABLg");
	this.shape_254.setTransform(394.25,427.875);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_255.setTransform(377.675,427.975);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgnA7QgSgVAAgmQAAgXAJgSQAIgSASgJQAQgKAWAAQAYAAATAJIgIAPQgSgIgRAAQgYAAgQARQgOARAAAcQAAAeAOARQAOAQAaAAQAPAAAVgFIAAAPQgPAGgYAAQghAAgTgUg");
	this.shape_256.setTransform(364.65,426.025);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgzBBIAAgaQAZAMAVAAQAbAAAAgRQAAgGgCgDQgDgEgHgEIgUgJQgYgIgIgKQgKgJABgPQgBgTAPgKQAPgKAZAAQAZAAAWAKIgKAXQgXgJgPAAQgYAAAAANQABAHAGAFQAGAEAUAIQASAHAIAFQAHAGAEAHQAEAHAAALQAAAVgPALQgPALgbAAQgdAAgRgJg");
	this.shape_257.setTransform(586.45,361.575);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgaArIAAhLIgTAAIAAgOIAVgLIAKgeIASAAIAAAfIAoAAIAAAYIgoAAIAABKQAAALAFAGQAGAFAJAAQALAAALgEIAAAYIgNADIgQABQgqAAgBgtg");
	this.shape_258.setTransform(574.7,360.1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AAgBJIAAhXQAAgRgGgIQgHgIgOAAQgTAAgIAMQgJALAAAaIAABHIgfAAIAAiOIAYAAIAEATIACAAQAGgLAMgFQAMgGAOABQAzgBAAA0IAABdg");
	this.shape_259.setTransform(561.325,361.45);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AgrA2QgTgTAAgiQAAgiARgUQASgUAdAAQAcAAARARQAQARAAAeIAAAQIheAAQABAVAKALQALALASAAQANAAALgCQAKgDANgFIAAAYQgLAFgLADQgMACgOAAQghAAgSgUgAAhgOQAAgSgIgJQgIgJgPAAQgNAAgJAJQgJAJgBASIA/AAIAAAAg");
	this.shape_260.setTransform(545.325,361.575);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("ABLBJIAAhXQAAgRgGgIQgHgIgNAAQgSAAgIALQgIALAAAXIAABLIgdAAIAAhXQAAgRgHgIQgGgIgNAAQgRAAgJAMQgIALAAAaIAABHIgeAAIAAiOIAYAAIAEATIABAAQAGgLAMgFQALgGANABQAhAAAKAWIACAAQAGgLAMgGQALgFAPAAQAaAAALANQAMAMAAAaIAABdg");
	this.shape_261.setTransform(525.175,361.45);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("ABLBJIAAhXQAAgRgGgIQgHgIgNAAQgSAAgIALQgIALAAAXIAABLIgdAAIAAhXQAAgRgHgIQgGgIgNAAQgRAAgJAMQgIALAAAaIAABHIgeAAIAAiOIAYAAIAEATIABAAQAGgLAMgFQALgGANABQAhAAAKAWIACAAQAGgLAMgGQALgFAPAAQAaAAALANQAMAMAAAaIAABdg");
	this.shape_262.setTransform(499.975,361.45);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AgiBBQgQgJgIgRQgIgRgBgWQABgiARgTQASgUAgAAQAfAAARAUQASAUABAhQgBAjgSATQgRAUggAAQgTAAgPgJgAgbgkQgIANAAAXQAAAxAkAAQAjAAABgxQAAgwglAAQgSAAgJAMg");
	this.shape_263.setTransform(479.25,361.575);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgwBIQgXgZABgvQgBgcALgWQALgWAUgMQAVgMAbAAQAcAAAZAMIgMAaIgUgIQgKgDgMAAQgaAAgPASQgPATAAAgQAAAjAPASQAPASAaAAQAMAAALgDIAYgGIAAAaQgXAJgcAAQgoAAgWgZg");
	this.shape_264.setTransform(463.25,359.275);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AAgBJIAAhXQAAgRgGgIQgHgIgOAAQgTAAgIAMQgJALAAAaIAABHIgfAAIAAiOIAYAAIAEATIACAAQAGgLAMgFQAMgGAOABQAzgBAAA0IAABdg");
	this.shape_265.setTransform(439.375,361.45);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AgjBBQgPgJgIgRQgJgRAAgWQAAgiASgTQASgUAgAAQAeAAASAUQATAUgBAhQABAjgTATQgRAUggAAQgTAAgQgJgAgagkQgJANAAAXQAAAxAkAAQAkAAAAgxQAAgwglAAQgSAAgIAMg");
	this.shape_266.setTransform(422.95,361.575);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AAgBkIAAhXQAAgQgGgIQgHgIgOAAQgSAAgJALQgJALAAAaIAABHIgfAAIAAjHIAfAAIAAAzIgCAaIACAAQAGgLALgFQALgGAOAAQA0AAAAAzIAABdg");
	this.shape_267.setTransform(406.575,358.675);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AgaArIAAhLIgTAAIAAgOIAVgLIAKgeIASAAIAAAfIApAAIAAAYIgpAAIAABKQAAALAFAGQAGAFAJAAQALAAALgEIAAAYIgNADIgQABQgqAAgBgtg");
	this.shape_268.setTransform(392.9,360.1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AhABkIAAgXQAHABAIABQAWAAAJgaIAFgNIg5iOIAhAAIAdBRQAHARABAOIABAAIAEgQIAhhgIAhAAIg9ChQgQAsgnAAQgKAAgJgDg");
	this.shape_269.setTransform(380.775,364.75);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("Ag9BeIAAi7IA2AAQAiAAASAOQARAPAAAcQAAAdgTAPQgTAQgjAAIgUAAIAABGgAgfgBIARAAQAXAAALgIQALgJAAgRQAAgQgKgIQgKgIgUAAIgWAAg");
	this.shape_270.setTransform(366.225,359.275);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AgwAdIAAgPIBhAAIAAAPgAgwgNIAAgPIBhAAIAAAPg");
	this.shape_271.setTransform(787.3,287.925);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgpBMQgMgIAAgQQAAgKAGgIQAHgIAMgCQgEgCgDgFQgDgEAAgFQAAgHAEgDQADgFAHgFQgJgDgGgJQgFgJAAgLQgBgTAMgLQAMgKAUAAQAJAAAGACIApAAIAAALIgWADIAGAJQACAGAAAIQAAARgMAKQgMAKgTAAIgKgBQgLAGAAAIQABAFADACQAFACAJAAIATAAQATAAAKAIQAKAIAAAPQAAATgPALQgPAKgdAAQgXAAgMgJgAgeAkQgHAGAAAKQABAKAHAEQAJAFAOAAQAVAAALgGQALgHAAgLQgBgKgGgDQgFgEgQAAIgVAAQgLAAgHAGgAgVhBQgGAHAAANQAAAMAHAHQAGAGANAAQAZAAgBgZQAAgagZAAQgMAAgHAGg");
	this.shape_272.setTransform(750.7,292.275);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgEAAgDgDg");
	this.shape_273.setTransform(742.1,287.625);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgGgFgPgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFACADQADAEAFADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_274.setTransform(734.3,289.775);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgGAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_275.setTransform(718.45,289.775);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_276.setTransform(689.175,289.875);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AAhBVIAAgyIABgSIgBAAQgMASgXAAQgXAAgNgQQgMgQAAgbQAAgcANgQQAMgQAXAAQAWAAANASIABAAIADgQIAOAAIAACngAgXg5QgIAMAAAVQAAAWAIALQAHALAQAAQAQAAAIgJQAJgKAAgVIAAgEQAAgYgIgLQgIgKgRAAQgQAAgHAMg");
	this.shape_277.setTransform(675.7,292.275);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAKALAQAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_278.setTransform(645.8,289.775);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgFALgBQAVABALAJQAKAKAAAVIAABMg");
	this.shape_279.setTransform(633.175,287.35);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_280.setTransform(622.65,288.525);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgpBMQgMgIAAgQQgBgKAIgIQAGgIANgCQgFgCgDgFQgDgEAAgFQAAgHAEgDQACgFAIgFQgJgDgGgJQgFgJAAgLQAAgTALgLQALgKAWAAQAHAAAHACIApAAIAAALIgVADIAEAJQADAGAAAIQAAARgMAKQgMAKgSAAIgLgBQgKAGgBAIQAAAFAFACQADACAKAAIATAAQATAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgHAGABAKQAAAKAIAEQAHAFAPAAQAVAAALgGQALgHAAgLQAAgKgHgDQgFgEgQAAIgVAAQgLAAgHAGgAgVhBQgGAHAAANQAAAMAHAHQAGAGANAAQAYAAAAgZQAAgagYAAQgMAAgIAGg");
	this.shape_281.setTransform(607.35,292.275);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgCgDgBgGQABgGACgCQAEgDADAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgDAAgEgDg");
	this.shape_282.setTransform(585.6,287.625);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgGgFQgFgFgRgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgLAAgHAEQgGAEAAAGQAAAFADADQABAEAGADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_283.setTransform(577.75,289.775);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_284.setTransform(565.925,289.875);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgdQAAgbANgQQANgQAWAAQAWAAANARIABAAIAAgIIAAgIIAAgvIARAAIAACjIgPAAIgCgPIAAAAQgNARgXAAQgWAAgNgPgAgYgJQgHALAAAVQAAAXAHALQAIALAQAAQARABAJgKQAIgKAAgWIAAgEQAAgXgJgLQgIgKgRAAQgQAAgIAMg");
	this.shape_285.setTransform(546.9,287.45);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgpBMQgMgIAAgQQgBgKAIgIQAGgIANgCQgFgCgDgFQgDgEAAgFQAAgHADgDQADgFAIgFQgJgDgFgJQgHgJABgLQAAgTALgLQAMgKAVAAQAHAAAIACIAnAAIAAALIgUADIAEAJQADAGAAAIQAAARgMAKQgMAKgSAAIgKgBQgMAGAAAIQAAAFAFACQADACAKAAIAUAAQASAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgGAGAAAKQgBAKAJAEQAHAFAPAAQAVAAALgGQALgHAAgLQAAgKgHgDQgFgEgQAAIgUAAQgMAAgHAGgAgUhBQgHAHAAANQAAAMAHAHQAHAGAMAAQAZAAAAgZQAAgagZAAQgNAAgGAGg");
	this.shape_286.setTransform(509.35,292.275);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgGAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_287.setTransform(493,289.775);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgGgFgPgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgGAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_288.setTransform(482.75,289.775);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgdQAAgbANgQQANgQAWAAQAWAAANARIABAAIgBgIIAAgIIAAgvIASAAIAACjIgPAAIgCgPIgBAAQgMARgXAAQgWAAgNgPgAgXgJQgJALABAVQgBAXAJALQAHALAQAAQARABAIgKQAJgKgBgWIAAgEQAAgXgIgLQgIgKgRAAQgQAAgHAMg");
	this.shape_289.setTransform(453.05,287.45);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgPAbIAHgbIAEgaIASAAIACADIgIAXIgJAbg");
	this.shape_290.setTransform(412.95,295.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQASAAATgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_291.setTransform(404.75,289.775);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_292.setTransform(392.025,289.875);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAZBEIAJAfIABAAIAHgXIAchMIASAAIgrBzg");
	this.shape_293.setTransform(362.55,289.775);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgEQAKgGALAAQAVAAALAKQAKALAAAVIAABLg");
	this.shape_294.setTransform(1052.225,255.55);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgSAXABQAXAAAMAPQANAPAAAcQAAAcgNARQgMAPgXAAQgKAAgKgEgAgZgKQgHAKgBAXQABAYAHALQAJALAQAAQARAAAIgNQAIgLAAgWQAAgXgIgKQgIgLgRAAQgQAAgJALg");
	this.shape_295.setTransform(1015.25,255.65);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgPAXAAQAWAAANARIACAAIgBgJIAAgIIAAgvIARAAIAACjIgOAAIgDgQIAAAAQgNASgXAAQgXAAgMgPgAgYgJQgHALgBAWQABAWAHALQAJAMAPAAQARgBAJgJQAHgKABgWIAAgDQAAgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_296.setTransform(995.8,255.65);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAKALQAJALARAAQASAAATgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgOAAgHAJQgJAJgCAQIA8AAIAAAAg");
	this.shape_297.setTransform(983.55,257.975);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgHgcIgBAAIgHAcIgWBDIgUAAIgfhzIASAAIARBBIAGAfIABAAIAEgPIAEgQIAWhBIASAAIAUBBQAHATABAMIABAAIACgMIAXhUIASAAIghBzg");
	this.shape_298.setTransform(969.05,257.975);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQASAAATgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_299.setTransform(886.25,257.975);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAZBEIAJAfIAAAAIAIgXIAchMIASAAIgsBzg");
	this.shape_300.setTransform(874.75,257.975);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgGg6QgEgDAAgGQAAgGAEgCQADgDADAAQAEAAADADQAEACAAAGQAAAGgEADQgDADgEAAQgDAAgDgDg");
	this.shape_301.setTransform(866.6,255.825);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AgpBMQgMgIAAgQQAAgKAGgIQAHgIANgCQgFgCgDgFQgDgEAAgFQAAgHAEgDQADgFAHgFQgJgDgGgJQgFgJAAgLQAAgTALgLQALgKAWAAQAHAAAHACIApAAIAAALIgWADIAFAJQADAGAAAIQAAARgMAKQgLAKgUAAIgKgBQgKAGgBAIQAAAFAFACQAEACAJAAIATAAQATAAAKAIQAKAIAAAPQAAATgPALQgPAKgdAAQgXAAgMgJgAgeAkQgHAGABAKQAAAKAHAEQAIAFAPAAQAVAAALgGQALgHAAgLQAAgKgHgDQgFgEgQAAIgVAAQgLAAgHAGgAgVhBQgGAHAAANQAAAMAHAHQAGAGANAAQAYAAAAgZQAAgagZAAQgLAAgIAGg");
	this.shape_302.setTransform(857.9,260.475);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_303.setTransform(839.825,258.075);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("Ag0BSIAAgOQAGABAHAAQASAAAIgUIAHgRIgvhzIATAAIAZBCQAIAWABAKIABAAIAGgSIAdhQIASAAIgxCDQgHATgJAJQgKAIgPAAQgIAAgIgCg");
	this.shape_304.setTransform(814.825,260.575);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgRAAgHAJQgJAKAAATIAABAIgQAAIAAhKQAAgOgFgHQgHgHgMAAQgQAAgIAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIADAQIAAAAQAFgIAKgFQAIgFAMAAQAbAAAHAUIABAAQAFgJAKgGQAKgFAMAAQAUAAAJAKQAKAKAAAWIAABLg");
	this.shape_305.setTransform(781.8,257.875);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgEQAKgGALAAQAVAAALAKQAKALAAAVIAABLg");
	this.shape_306.setTransform(722.325,255.55);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_307.setTransform(711.8,256.725);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("Ag0BSIAAgOQAGABAHAAQASAAAIgUIAHgRIgvhzIATAAIAZBCQAIAWABAKIABAAIAGgSIAdhQIASAAIgxCDQgHATgJAJQgKAIgPAAQgIAAgIgCg");
	this.shape_308.setTransform(697.025,260.575);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AgQBPQgKgEgGgJIgBAAIgFAPIgMAAIAAijIASAAIAAAoIgBAYIABAAQAMgSAXABQAXAAANAPQAMAPAAAcQAAAcgNARQgNAPgWAAQgLAAgIgEgAgYgKQgJAKABAXQgBAYAJALQAIALARAAQAQAAAIgNQAHgLAAgWQAAgXgHgKQgIgLgQAAQgSAAgHALg");
	this.shape_309.setTransform(685.35,255.65);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("Ag0BSIAAgOQAGABAHAAQASAAAIgUIAHgRIgvhzIATAAIAZBCQAIAWABAKIABAAIAGgSIAdhQIASAAIgxCDQgHATgJAJQgKAIgPAAQgIAAgIgCg");
	this.shape_310.setTransform(667.375,260.575);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_311.setTransform(652.65,256.725);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_312.setTransform(632.65,257.975);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgPAXAAQAXAAAMARIACAAIgCgJIAAgIIAAgvIASAAIAACjIgOAAIgDgQIgBAAQgMASgXAAQgXAAgMgPgAgYgJQgIALAAAWQAAAWAIALQAJAMAPAAQARgBAJgJQAHgKAAgWIAAgDQABgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_313.setTransform(605.45,255.65);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgPAXAAQAXAAAMARIACAAIgBgJIAAgIIAAgvIARAAIAACjIgOAAIgDgQIAAAAQgNASgXAAQgXAAgMgPgAgYgJQgHALgBAWQABAWAHALQAJAMAPAAQARgBAJgJQAHgKABgWIAAgDQAAgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_314.setTransform(586.65,255.65);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQASAAATgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_315.setTransform(574.4,257.975);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgJAJQgIAJgBAQIA7AAIAAAAg");
	this.shape_316.setTransform(525.85,257.975);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgPAXAAQAXAAAMARIACAAIgBgJIAAgIIAAgvIARAAIAACjIgOAAIgDgQIAAAAQgNASgXAAQgXAAgMgPgAgYgJQgHALgBAWQABAWAHALQAJAMAPAAQARgBAJgJQAHgKABgWIAAgDQAAgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_317.setTransform(512.85,255.65);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQANAAAHgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgRgFgHgFQgGgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_318.setTransform(495.95,257.975);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDAAgGQAAgGADgCQADgDADAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgDAAgDgDg");
	this.shape_319.setTransform(488,255.825);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_320.setTransform(473.75,257.975);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgSAXABQAXAAAMAPQANAPAAAcQAAAcgNARQgMAPgXAAQgKAAgKgEgAgZgKQgHAKgBAXQABAYAHALQAJALAQAAQARAAAIgNQAIgLAAgWQAAgXgIgKQgIgLgRAAQgQAAgJALg");
	this.shape_321.setTransform(455.9,255.65);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgGg6QgEgDAAgGQAAgGAEgCQADgDADAAQAEAAADADQAEACAAAGQAAAGgEADQgDADgEAAQgDAAgDgDg");
	this.shape_322.setTransform(434.25,255.825);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_323.setTransform(416.375,257.975);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAYBEIAKAfIAAAAIAIgXIAbhMIATAAIgrBzg");
	this.shape_324.setTransform(405.35,257.975);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgEQAKgGALAAQAVAAALAKQAKALAAAVIAABLg");
	this.shape_325.setTransform(375.775,255.55);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AgIBNIAAiJIgxAAIAAgQIBzAAIAAAQIgxAAIAACJg");
	this.shape_326.setTransform(363.125,256.05);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AgzBBIAAgaQAZAMAVAAQAbAAABgRQgBgGgDgDQgCgEgIgEIgSgJQgZgIgJgKQgIgJgBgPQAAgTAQgKQAOgKAYAAQAZAAAXAKIgJAXQgYgJgQAAQgXAAABANQgBAHAHAFQAGAEAUAIQASAHAHAFQAJAGADAHQAFAHAAALQAAAVgQALQgPALgcAAQgcAAgRgJg");
	this.shape_327.setTransform(565.25,191.575);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AgOBkIAAjHIAdAAIAADHg");
	this.shape_328.setTransform(539.925,188.675);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AghBSIgCAAIgGARIgXAAIAAjIIAfAAIAAAwIgBAQIgBANIACAAQAOgVAbAAQAbAAAPATQAPAUAAAhQAAAjgPAUQgPATgbABQgagBgPgTgAgZgKQgIAKAAAZIAAACQAAAaAIAMQAIAMASAAQAQAAAIgNQAJgMAAgZQAAgwgiABQgRgBgIALg");
	this.shape_329.setTransform(528.475,188.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("AgwA+QgMgLABgVQAAgWAQgKQAQgLAhgBIAYgBIAAgHQAAgOgGgHQgHgHgNAAQgJAAgKAEIgUAHIgKgWQAMgGANgDQAOgDALAAQAcAAAOAMQANAMAAAZIAABfIgVAAIgGgUIgBAAQgLANgKAFQgKAFgQAAQgVAAgMgMgAAMAEQgUABgKAGQgKAGAAAOQAAAJAFAFQAGAGAMAAQAPAAALgKQAJgJAAgQIAAgNg");
	this.shape_330.setTransform(511.75,191.575);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AgPBjIAAiOIAeAAIAACOgAgLhFQgFgEAAgIQAAgIAFgFQADgDAIAAQAIAAAEADQAFAFAAAIQAAAIgFAEQgEAFgIAAQgIAAgDgFg");
	this.shape_331.setTransform(500.9,188.85);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AgrBJIAAiOIAYAAIAEAZIACAAQAHgMAKgIQAMgIANABIAPABIgDAcQgHgCgHABQgSAAgKALQgLAMAAATIAABKg");
	this.shape_332.setTransform(492.375,191.45);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AgwA+QgLgLgBgVQAAgWARgKQARgLAggBIAYgBIAAgHQAAgOgGgHQgGgHgOAAQgJAAgKAEIgUAHIgKgWQAMgGAOgDQAOgDAKAAQAcAAANAMQAPAMAAAZIAABfIgWAAIgGgUIgBAAQgLANgKAFQgKAFgQAAQgVAAgMgMgAAMAEQgVABgJAGQgKAGAAAOQAAAJAFAFQAHAGAKAAQAQAAAKgKQAKgJAAgQIAAgNg");
	this.shape_333.setTransform(477.75,191.575);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AgQBeIhBi7IAgAAIAnB0IAHAWIADATIAGgWIAFgUIAnhzIAgAAIhCC7g");
	this.shape_334.setTransform(462.4,189.275);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AAgBJIAAhXQAAgRgGgIQgHgIgOAAQgTAAgIAMQgJALAAAaIAABHIgfAAIAAiOIAYAAIAEATIACAAQAGgLAMgFQAMgGAOABQAzAAAAAzIAABdg");
	this.shape_335.setTransform(439.025,191.45);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AgjBBQgPgJgIgRQgJgRABgWQgBgiATgTQARgUAfAAQAfAAATAUQASAUAAAhQAAAjgSATQgSAUggAAQgTAAgQgJgAgagkQgJANAAAXQAAAxAjAAQAlAAgBgxQAAgwgkAAQgSAAgIAMg");
	this.shape_336.setTransform(422.6,191.575);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AgaArIAAhLIgTAAIAAgOIAVgLIAKgeIASAAIAAAfIAoAAIAAAYIgoAAIAABKQAAALAFAGQAGAFAJAAQALAAALgEIAAAXIgNAEIgRACQgpgBgBgtg");
	this.shape_337.setTransform(392.55,190.1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AhABlIAAgYQAHACAIgBQAWABAJgaIAFgNIg5iOIAhAAIAdBRQAHARABAOIABAAIAEgQIAhhgIAhAAIg9ChQgQAsgnAAQgKAAgJgCg");
	this.shape_338.setTransform(380.425,194.75);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AgIALQgEgDAAgIQAAgGAEgEQADgDAFAAQAGAAADADQAEAEAAAGQAAAHgEAEQgDADgGAAQgFAAgDgDg");
	this.shape_339.setTransform(962.425,604.075);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AgEAcIgFg3IATAAIgEA3g");
	this.shape_340.setTransform(957.175,592.575);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("AgwAdIAAgPIBhAAIAAAPgAgwgNIAAgPIBhAAIAAAPg");
	this.shape_341.setTransform(948.65,597.575);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AgEAcIgFg3IATAAIgEA3g");
	this.shape_342.setTransform(940.175,592.575);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQAAgKAIgIQAGgIAMgCQgEgCgDgFQgDgEAAgFQAAgHADgDQADgFAIgFQgJgDgFgJQgHgJAAgLQAAgTAMgLQALgKAVAAQAJAAAHACIAnAAIAAALIgUADIAEAJQADAGAAAIQAAARgMAKQgMAKgSAAIgKgBQgLAGAAAIQAAAFADACQAEACAKAAIAUAAQASAAAKAIQAKAIAAAPQAAATgPALQgPAKgdAAQgXAAgMgJgAgeAkQgGAGgBAKQAAAKAJAEQAHAFAPAAQAVAAALgGQAKgHAAgLQAAgKgFgDQgHgEgQAAIgTAAQgMAAgHAGgAgUhBQgHAHAAANQAAAMAHAHQAHAGAMAAQAYAAABgZQAAgagZAAQgNAAgGAGg");
	this.shape_343.setTransform(926.25,601.925);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQADACAAAGQAAAGgDADQgDADgEAAQgEAAgDgDg");
	this.shape_344.setTransform(904.45,597.275);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPAMgIQALgIATAAQATAAASAIIgGAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_345.setTransform(896.65,599.425);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_346.setTransform(884.825,599.525);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_347.setTransform(868.8,598.175);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgCgDgBgGQABgGACgCQAEgDADAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgDAAgEgDg");
	this.shape_348.setTransform(862.35,597.275);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_349.setTransform(837.15,598.175);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQAMgPAXAAQAXgBAMASIABAAIgBgJIAAgIIAAgvIASAAIAACjIgOAAIgDgQIgBAAQgMASgXAAQgXAAgMgQgAgXgJQgJALAAAWQAAAWAJALQAHAMAQAAQARAAAIgLQAIgJAAgWIAAgDQABgYgJgKQgIgLgRAAQgQAAgHAMg");
	this.shape_350.setTransform(820.9,597.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQABgKAGgIQAHgIAMgCQgEgCgDgFQgDgEAAgFQAAgHADgDQAEgFAHgFQgJgDgGgJQgFgJgBgLQAAgTAMgLQAMgKAUAAQAIAAAHACIAoAAIAAALIgVADIAGAJQACAGAAAIQAAARgMAKQgLAKgUAAIgKgBQgLAGABAIQAAAFADACQAFACAJAAIATAAQATAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgGAGgBAKQABAKAHAEQAJAFAOAAQAVAAALgGQALgHgBgLQAAgKgFgDQgHgEgQAAIgUAAQgLAAgHAGgAgUhBQgHAHAAANQAAAMAHAHQAGAGANAAQAZAAAAgZQAAgagaAAQgLAAgHAGg");
	this.shape_351.setTransform(783.35,601.925);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgGg6QgEgDAAgGQAAgGAEgCQADgDADAAQAEAAADADQAEACAAAGQAAAGgEADQgDADgEAAQgDAAgDgDg");
	this.shape_352.setTransform(774.8,597.275);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPALgIQAMgIATAAQATAAARAIIgGAOQgRgHgOAAQgLAAgHAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgXAAgNgHg");
	this.shape_353.setTransform(767,599.425);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgGgFgRgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgGAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFACADQADAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_354.setTransform(756.75,599.425);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_355.setTransform(745.175,599.425);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQASAAATgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_356.setTransform(714.8,599.425);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFFFFF").s().p("AgQBPQgKgEgGgJIgBAAIgFAPIgMAAIAAijIASAAIAAAoIgBAYIABAAQAMgRAXAAQAXAAANAPQAMAPAAAcQAAAcgNAQQgNAQgWAAQgKAAgJgEgAgYgKQgJAJABAYQgBAZAJAKQAIALARAAQAQAAAIgNQAHgLAAgWQAAgXgHgKQgIgLgQAAQgSAAgHALg");
	this.shape_357.setTransform(690.4,597.1);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQANAAAHgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgRgFgHgFQgGgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_358.setTransform(672.8,599.425);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_359.setTransform(661.225,599.425);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALALQAKAKAAAVIAABLg");
	this.shape_360.setTransform(649.075,597);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AgEAcIgFg3IATAAIgEA3g");
	this.shape_361.setTransform(634.475,592.575);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AgwBGIAAgRQAIAEALADQALADALAAQARAAALgIQAKgKgBgQQAAgfgmgBQgKABgQACIgKgFIAGhIIBMAAIAAAQIg9AAIgEAuQAMgCAMAAQAXAAAOAMQAOALAAAVQAAAYgPAOQgPANgZAAQgbAAgOgIg");
	this.shape_362.setTransform(626.05,597.6);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("AgEAcIgFg3IATAAIgEA3g");
	this.shape_363.setTransform(617.425,592.575);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAKALQAJALARAAQASAAATgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgCAQIA8AAIAAAAg");
	this.shape_364.setTransform(594.75,599.425);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFFFF").s().p("AgQBPQgKgEgGgJIgBAAIgFAPIgMAAIAAijIASAAIAAAoIgBAYIABAAQAMgRAXAAQAXAAANAPQAMAPAAAcQAAAcgNAQQgNAQgWAAQgKAAgJgEgAgYgKQgJAJABAYQgBAZAJAKQAIALARAAQAQAAAIgNQAHgLAAgWQAAgXgHgKQgIgLgQAAQgSAAgHALg");
	this.shape_365.setTransform(582.4,597.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgQAAgHAJQgJAKABATIAABAIgRAAIAAhKQAAgOgGgHQgFgHgNAAQgRAAgHAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgIAIgFQAKgFAKAAQAcAAAHAUIABAAQAFgJAKgGQAJgFAOAAQATAAAKAKQAKAKAAAWIAABLg");
	this.shape_366.setTransform(565.5,599.325);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_367.setTransform(548.775,599.525);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_368.setTransform(517.45,599.425);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALALQAKAKAAAVIAABLg");
	this.shape_369.setTransform(504.825,597);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FFFFFF").s().p("AgPAbIAGgbIAFgZIASAAIACACIgIAYIgKAag");
	this.shape_370.setTransform(481.95,605.35);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFFFF").s().p("AgEAcIgFg3IATAAIgEA3g");
	this.shape_371.setTransform(477.325,592.575);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_372.setTransform(460.125,597);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgGgJIgCAAIgEAPIgMAAIAAijIASAAIAAAoIgCAYIACAAQAMgRAXAAQAXAAANAPQAMAPAAAcQAAAcgNAQQgMAQgXAAQgLAAgJgEgAgZgKQgHAJAAAYQAAAZAHAKQAJALAQAAQARAAAIgNQAHgLABgWQgBgXgHgKQgIgLgRAAQgQAAgJALg");
	this.shape_373.setTransform(451.15,597.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_374.setTransform(437.825,599.425);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDAAgGQAAgGADgCQADgDADAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgDAAgDgDg");
	this.shape_375.setTransform(429.5,597.275);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_376.setTransform(411.625,599.425);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("AgIBNIg3iZIATAAIAjBjQAGARADAQQAEgRAGgRIAjhiIATAAIg3CZg");
	this.shape_377.setTransform(399.575,597.5);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("Ag0BSIAAgOQAGABAHAAQASAAAIgUIAHgRIgvhzIATAAIAZBCQAIAWABAKIABAAIAGgSIAdhQIASAAIgxCDQgHATgJAJQgKAIgPAAQgIAAgIgCg");
	this.shape_378.setTransform(387.725,602.025);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgQAAgHAJQgIAKAAATIAABAIgRAAIAAhKQAAgOgGgHQgGgHgMAAQgRAAgHAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIACAQIACAAQAEgIAJgFQAJgFALAAQAcAAAHAUIABAAQAFgJAKgGQAJgFAOAAQATAAAKAKQAKAKAAAWIAABLg");
	this.shape_379.setTransform(372.35,599.325);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("AgEAcIgFg3IATAAIgEA3g");
	this.shape_380.setTransform(359.875,592.575);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_381.setTransform(1051.3,567.625);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgQAAgJAJQgHAKgBATIAABAIgQAAIAAhKQAAgOgFgHQgHgHgMAAQgQAAgIAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIACAQIABAAQAFgIAKgFQAIgFAMAAQAbAAAHAUIABAAQAFgJAKgGQAKgFAMAAQAUAAAJAKQAKAKAAAWIAABLg");
	this.shape_382.setTransform(1035.25,567.525);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_383.setTransform(1018.775,567.625);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_384.setTransform(1006.625,567.525);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQASAAATgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_385.setTransform(988.4,567.625);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAPIACAAQAFgJAJgFQAKgEALAAQAVAAALAKQAKAJAAAVIAABMg");
	this.shape_386.setTransform(949.375,565.2);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_387.setTransform(938.85,566.375);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQADACAAAGQAAAGgDADQgDADgEAAQgEAAgDgDg");
	this.shape_388.setTransform(932.35,565.475);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgIgcIAAAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAHAfIABAAIADgPIAFgQIAVhBIASAAIAUBBQAHATABAMIABAAIADgMIAVhUIASAAIgfBzg");
	this.shape_389.setTransform(921.2,567.625);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQANgPAWAAQAWAAANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgPAAIgCgPIgBAAQgMARgXAAQgWAAgNgQgAgXgJQgJALABAVQgBAXAJALQAHALAQAAQARAAAIgKQAJgJgBgWIAAgEQAAgXgIgLQgIgKgRAAQgQAAgHAMg");
	this.shape_390.setTransform(900.35,565.3);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgJAJQgIAJgBAQIA7AAIAAAAg");
	this.shape_391.setTransform(888.1,567.625);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_392.setTransform(866.825,567.625);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_393.setTransform(858.475,565.2);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAKALQAJALARAAQASAAATgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgOAAgHAJQgJAJgCAQIA8AAIAAAAg");
	this.shape_394.setTransform(839.55,567.625);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQANgPAWAAQAWAAANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgPAAIgCgPIgBAAQgMARgXAAQgWAAgNgQgAgXgJQgJALABAVQgBAXAJALQAHALAQAAQARAAAIgKQAJgJgBgWIAAgEQAAgXgIgLQgIgKgRAAQgQAAgHAMg");
	this.shape_395.setTransform(826.55,565.3);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFFFFF").s().p("Ag9BNIAAiZIAwAAQAjAAAUAUQAUATAAAlQAAAkgVAVQgVAUgmAAgAgrA+IAWAAQAfAAAQgQQARgQAAgeQAAgegQgPQgPgPgdgBIgaAAg");
	this.shape_396.setTransform(807.225,565.7);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFFFFF").s().p("AAoBNIhTiBIgBAAQACAXAAAUIAABWIgRAAIAAiZIAUAAIBTCAIABAAIgBgSIAAgXIAAhXIAQAAIAACZg");
	this.shape_397.setTransform(790.825,565.7);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFFFFF").s().p("AAyBNIgTgwIg9AAIgTAwIgSAAIA9iZIAOAAIA8CZgAAZANIgSgvIgHgXQgBALgFAMIgSAvIAxAAg");
	this.shape_398.setTransform(775.875,565.65);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQANgPAWAAQAWAAANAQIABAAIAAgIIAAgIIAAgvIARAAIAACjIgPAAIgCgPIAAAAQgNARgXAAQgWAAgNgQgAgYgJQgHALAAAVQAAAXAHALQAIALAQAAQARAAAIgKQAJgJAAgWIAAgEQAAgXgJgLQgIgKgRAAQgQAAgIAMg");
	this.shape_399.setTransform(756.6,565.3);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_400.setTransform(735.475,565.2);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_401.setTransform(730.025,565.2);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_402.setTransform(720.925,567.625);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_403.setTransform(710.425,567.625);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQANAAAHgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgRgFgHgFQgGgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_404.setTransform(694.4,567.625);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgDgDAAgGQAAgGADgCQADgDAEAAQAEAAADADQADACAAAGQAAAGgDADQgDADgEAAQgEAAgDgDg");
	this.shape_405.setTransform(686.5,565.475);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgGgFgPgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQABAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_406.setTransform(673.1,567.625);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_407.setTransform(661.95,567.625);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_408.setTransform(653.125,565.2);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FFFFFF").s().p("AgQBPQgKgEgHgJIAAAAIgFAPIgMAAIAAijIARAAIAAAoIAAAYIAAAAQANgRAXAAQAWAAAOAPQAMAQAAAbQAAAdgNAPQgNAQgWAAQgLAAgIgEgAgYgLQgJALAAAXQAAAYAJALQAIAKARAAQAQABAIgMQAIgMgBgWQABgWgIgLQgIgLgQAAQgSAAgHAKg");
	this.shape_409.setTransform(644.15,565.3);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_410.setTransform(630.825,567.625);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDgBgGQABgGADgCQADgDADAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgDAAgDgDg");
	this.shape_411.setTransform(622.45,565.475);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_412.setTransform(616.125,567.525);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_413.setTransform(604.575,567.625);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAPIACAAQAFgJAJgFQAKgEALAAQAVAAALAKQAKAJAAAVIAABMg");
	this.shape_414.setTransform(563.975,565.2);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAJAAIAKgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_415.setTransform(553.45,566.375);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FFFFFF").s().p("AgPAaIAHgaIAEgaIASAAIACADIgIAXIgKAag");
	this.shape_416.setTransform(541.1,573.55);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQASAAATgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_417.setTransform(532.9,567.625);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_418.setTransform(524.025,565.2);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAOAAIACAQIACAAQAHgKAIgEQAJgEALAAQAXAAANAQQAMAPAAAdQAAAbgNAQQgMAQgXAAQgLAAgJgEQgJgEgGgJIgCAAIACATIAAAwgAgZg7QgHAKAAAVIAAAEQAAAYAHAKQAJAKAQAAQAPAAAKgMQAIgLAAgVQAAgWgIgLQgKgMgPAAQgQAAgJAKg");
	this.shape_419.setTransform(515.05,570.125);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_420.setTransform(481.725,567.625);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFFFFF").s().p("AAgA6IgggvIggAvIgTAAIAqg6Igpg5IAUAAIAeAsIAegsIAUAAIgoA5IArA6g");
	this.shape_421.setTransform(470.45,567.625);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAKALQAJALARAAQASAAATgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgCAQIA8AAIAAAAg");
	this.shape_422.setTransform(458.85,567.625);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_423.setTransform(443.575,567.525);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_424.setTransform(431.775,567.725);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_425.setTransform(400.075,567.525);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDgBgGQABgGADgCQADgDADAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgDAAgDgDg");
	this.shape_426.setTransform(390.7,565.475);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FFFFFF").s().p("AgwBIIAAgRQAKAEAMACQAKADALAAQASAAAIgHQAKgHgBgMQAAgIgCgFQgEgFgHgFQgIgEgPgFQgVgHgJgLQgJgKAAgRQAAgSANgLQANgKAVAAQAYAAATAIIgGAQQgTgIgSAAQgNAAgIAGQgIAGAAALQAAAIADAFQACAFAIAFQAHAEANAFQAZAIAIAJQAKAKgBAQQAAAVgOALQgPALgYAAQgbAAgQgHg");
	this.shape_427.setTransform(363.45,565.675);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAXABAMAQIACAAIgCgIIAAgIIAAgvIASAAIAACjIgOAAIgDgPIgBAAQgMARgXAAQgXAAgMgPgAgYgJQgIALAAAWQAAAWAIALQAJAMAPAAQARAAAJgKQAHgKAAgWIAAgDQABgYgJgLQgIgKgRAAQgPAAgJAMg");
	this.shape_428.setTransform(481.25,449.35);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgIgcIAAAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAHAfIABAAIADgPIAFgQIAVhBIASAAIAVBBQAFATACAMIACAAIACgMIAVhUIASAAIgfBzg");
	this.shape_429.setTransform(447.9,451.675);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAOAAIACAQIACAAQAHgKAIgEQAJgEALAAQAXAAANAQQAMAPAAAdQAAAbgNAQQgMAQgXAAQgLAAgJgEQgJgEgGgJIgCAAIACATIAAAwgAgZg7QgHAKAAAVIAAAEQAAAYAHAKQAJAKAQAAQAPAAAJgMQAJgLAAgVQAAgWgJgLQgJgMgPAAQgQAAgJAKg");
	this.shape_430.setTransform(402.1,454.175);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_431.setTransform(391.25,450.425);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FFFFFF").s().p("Ag0A7QgSgVAAgmQAAglASgVQAUgUAgAAQAhAAAUAVQASAVAAAkQAAAlgSAVQgUAVghAAQghAAgTgUgAglguQgOAQAAAeQAAAfAOARQANAQAYAAQAaAAANgQQANgRAAgfQAAgegNgQQgNgQgaAAQgYAAgNAQg");
	this.shape_432.setTransform(365.9,449.725);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgEAAgDgDg");
	this.shape_433.setTransform(1043.6,417.725);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgQAAgHAJQgJAKABATIAABAIgRAAIAAhKQAAgOgGgHQgFgHgNAAQgQAAgIAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgIAIgFQAKgFALAAQAbAAAHAUIABAAQAFgJAKgGQAJgFAOAAQATAAAKAKQAKAKgBAWIAABLg");
	this.shape_434.setTransform(1030.9,419.775);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQASAAATgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgIAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_435.setTransform(971.8,419.875);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgIgcIAAAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAHAfIAAAAIAEgPIAEgQIAWhBIASAAIAVBBQAFATADAMIABAAIABgMIAWhUIASAAIgfBzg");
	this.shape_436.setTransform(906.65,419.875);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgOAAgIAJQgIAJgBAQIA7AAIAAAAg");
	this.shape_437.setTransform(873.8,419.875);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgRAXAAQAWAAANAPQANAPAAAcQAAAcgNAQQgMAQgXAAQgKAAgKgEgAgZgKQgHAJgBAYQABAZAHAKQAJALAQAAQARAAAIgNQAIgLAAgWQAAgXgIgKQgIgLgRAAQgQAAgJALg");
	this.shape_438.setTransform(861.45,417.55);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQANgPAWAAQAWAAANARIACAAIgBgJIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgWAAgNgQgAgYgJQgHALgBAWQABAWAHALQAJAMAPAAQARAAAJgLQAHgJABgWIAAgDQAAgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_439.setTransform(842,417.55);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_440.setTransform(829.75,419.875);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgEAAgDgDg");
	this.shape_441.setTransform(800.15,417.725);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAOAAIACAQIACAAQAHgKAIgEQAJgEALAAQAXAAANAQQAMAPAAAdQAAAbgNAQQgMAQgXAAQgLAAgJgEQgJgEgGgJIgCAAIACATIAAAwgAgZg7QgHAKAAAVIAAAEQAAAYAHAKQAJAKAQAAQAPAAAJgMQAJgLAAgVQAAgWgJgLQgJgMgPAAQgQAAgJAKg");
	this.shape_442.setTransform(782.35,422.375);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgQAAgJAJQgHAKgBATIAABAIgQAAIAAhKQAAgOgFgHQgHgHgMAAQgRAAgHAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIACAQIABAAQAGgIAJgFQAIgFAMAAQAbAAAHAUIABAAQAFgJAKgGQAJgFANAAQAUAAAJAKQALAKAAAWIAABLg");
	this.shape_443.setTransform(701,419.775);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_444.setTransform(655.35,418.625);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgGAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFACADQADAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_445.setTransform(646.5,419.875);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_446.setTransform(601.85,418.625);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FFFFFF").s().p("AgZAIIAAgPIAzAAIAAAPg");
	this.shape_447.setTransform(589.125,419.85);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQAMAAAIgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgQgFgGgFQgHgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgLAAgHAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgXAAgNgHg");
	this.shape_448.setTransform(524.8,419.875);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQANgPAWAAQAWAAANARIABAAIgBgJIAAgIIAAgvIASAAIAACjIgOAAIgDgQIgBAAQgMASgXAAQgWAAgNgQgAgXgJQgJALABAWQgBAWAJALQAHAMAQAAQARAAAIgLQAJgJgBgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_449.setTransform(489.6,417.55);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgJAJQgIAJgBAQIA7AAIAAAAg");
	this.shape_450.setTransform(448.45,419.875);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAJAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_451.setTransform(425.3,418.625);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgNAAgJAJQgIAJgBAQIA7AAIAAAAg");
	this.shape_452.setTransform(396.8,419.875);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FFFFFF").s().p("AAmBNIgfhmIgFgRIgCgNQgCAOgFARIgeBlIgSAAIgpiZIATAAIAYBeQAGAUACAQQADgTAFgTIAchcIASAAIAdBdQAEARAEAUQACgPAGgVIAYheIATAAIgpCZg");
	this.shape_453.setTransform(367.5,417.95);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FFFFFF").s().p("AgYBeQAPgUAIgYQAHgYAAgZQAAgZgGgZQgJgYgPgUIARAAQAPASAIAZQAJAYAAAbQAAAcgJAXQgIAYgPASg");
	this.shape_454.setTransform(779.9,356.05);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FFFFFF").s().p("AAIBeQgPgSgIgYQgIgXgBgcQABgbAIgYQAIgZAPgSIAQAAQgPAUgHAYQgHAZAAAZQAAAZAHAYQAHAYAPAUg");
	this.shape_455.setTransform(773.75,356.05);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_456.setTransform(766.55,355.025);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAOAAIACAQIABAAQAIgKAIgEQAJgEALAAQAXAAAMAQQANAPAAAdQAAAbgNAQQgMAQgXAAQgLAAgJgEQgJgEgHgJIgBAAIABATIAAAwgAgZg7QgHAKgBAVIAAAEQABAYAHAKQAJAKAQAAQAPAAAKgMQAHgLABgVQgBgWgHgLQgKgMgPAAQgQAAgJAKg");
	this.shape_457.setTransform(729.15,358.775);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQAAgKAIgIQAGgIAMgCQgEgCgDgFQgDgEAAgFQAAgHADgDQAEgFAHgFQgJgDgFgJQgHgJAAgLQAAgTAMgLQAMgKAUAAQAIAAAIACIAnAAIAAALIgVADIAGAJQACAGAAAIQAAARgMAKQgMAKgSAAIgKgBQgLAGAAAIQAAAFADACQAEACAKAAIAUAAQASAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgGAGgBAKQAAAKAIAEQAJAFAOAAQAVAAALgGQAKgHAAgLQAAgKgFgDQgHgEgQAAIgTAAQgMAAgHAGgAgUhBQgHAHAAANQAAAMAHAHQAHAGAMAAQAYAAABgZQAAgagZAAQgNAAgGAGg");
	this.shape_458.setTransform(704.95,358.775);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgGgFgRgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgLAAgHAEQgGAEAAAGQAAAFADADQABAEAGADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_459.setTransform(675.4,356.275);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAWABANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgOAAIgDgPIgBAAQgMARgXAAQgXAAgMgPgAgXgJQgJALAAAWQAAAWAJALQAHAMAQAAQARAAAIgKQAIgKAAgWIAAgDQAAgYgIgLQgIgKgRAAQgQAAgHAMg");
	this.shape_460.setTransform(644.5,353.95);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAJACQAKACAJAAQAMAAAIgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgPgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgXAAgMgHg");
	this.shape_461.setTransform(582.3,356.275);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDAAgGQAAgGADgCQACgDAEAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgEAAgCgDg");
	this.shape_462.setTransform(574.4,354.125);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_463.setTransform(562.2,355.025);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgQAAgJAJQgHAKgBATIAABAIgQAAIAAhKQAAgOgFgHQgHgHgMAAQgRAAgHAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIACAQIABAAQAGgIAJgFQAIgFAMAAQAbAAAHAUIABAAQAFgJAKgGQAJgFANAAQAUAAAJAKQALAKAAAWIAABLg");
	this.shape_464.setTransform(523.25,356.175);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_465.setTransform(477.6,355.025);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FFFFFF").s().p("AgEAcIgFg3IATAAIgEA3g");
	this.shape_466.setTransform(455.675,349.425);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAOAAIACAQIACAAQAHgKAIgEQAJgEALAAQAXAAANAQQAMAPAAAdQAAAbgNAQQgMAQgXAAQgLAAgJgEQgJgEgGgJIgCAAIACATIAAAwgAgZg7QgHAKAAAVIAAAEQAAAYAHAKQAJAKAQAAQAPAAAJgMQAJgLAAgVQAAgWgJgLQgJgMgPAAQgQAAgJAKg");
	this.shape_467.setTransform(412,358.775);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FFFFFF").s().p("AgEAcIgFg3IATAAIgEA3g");
	this.shape_468.setTransform(402.675,349.425);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgGALAAQAVABALAJQAKAKAAAWIAABLg");
	this.shape_469.setTransform(376.125,353.85);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FFFFFF").s().p("AgIBNIAAiJIgxAAIAAgQIBzAAIAAAQIgxAAIAACJg");
	this.shape_470.setTransform(363.475,354.35);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FFFFFF").s().p("Ag1BeQgPgKAAgUQAAgNAIgJQAIgJAPgDQgGgDgEgFQgEgGAAgGQAAgIAEgFQAFgGAJgFQgLgFgHgKQgHgLAAgPQAAgXAPgNQAOgMAbAAIANABIAJABIAxAAIAAARIgYAEQADAFACAGQADAHAAAHQAAAWgPANQgPANgaAAIgMgBQgKAGAAAHQAAAFAEACQAFADAMAAIAYAAQAXAAANAKQAMAKAAATQAAAYgUANQgUANgkAAQgeAAgPgKgAghAuQgJAGABALQgBAKAKAFQAIAFAQAAQAYAAAMgHQAMgHAAgMQAAgJgHgEQgGgEgSAAIgWAAQgNAAgHAGgAgWhMQgGAHgBAOQABAOAGAHQAIAHAMAAQAZAAAAgcQAAgOgGgHQgHgIgMAAQgNAAgHAIg");
	this.shape_471.setTransform(547.75,292.925);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FFFFFF").s().p("AAgBJIAAhXQAAgQgGgJQgHgIgOAAQgTAAgIAMQgJALAAAZIAABIIgfAAIAAiOIAYAAIAEASIACAAQAGgKAMgFQAMgFAOAAQAzAAAAA0IAABcg");
	this.shape_472.setTransform(532.225,289.75);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FFFFFF").s().p("AgPBjIAAiOIAeAAIAACOgAgLhFQgFgEAAgIQAAgIAFgEQAEgFAHAAQAIAAAEAFQAFAEAAAIQAAAIgFAEQgEAFgIAAQgHAAgEgFg");
	this.shape_473.setTransform(520.15,287.15);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FFFFFF").s().p("AgaArIAAhMIgTAAIAAgNIAVgLIAKgfIASAAIAAAhIApAAIAAAWIgpAAIAABMQAAAKAFAGQAGAFAJAAQALAAALgDIAAAWIgNAEIgQACQgqAAgBgug");
	this.shape_474.setTransform(511.25,288.4);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FFFFFF").s().p("AAgBJIAAhXQAAgQgGgJQgHgIgOAAQgTAAgIAMQgJALAAAZIAABIIgfAAIAAiOIAYAAIAEASIACAAQAGgKAMgFQAMgFAOAAQAzAAAAA0IAABcg");
	this.shape_475.setTransform(497.825,289.75);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FFFFFF").s().p("AgOBjIAAiOIAdAAIAACOgAgLhFQgFgEAAgIQAAgIAFgEQADgFAIAAQAIAAAFAFQAEAEAAAIQAAAIgEAEQgFAFgIAAQgIAAgDgFg");
	this.shape_476.setTransform(485.8,287.15);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#FFFFFF").s().p("AgrBJIAAiOIAYAAIAEAZIACAAQAHgNAKgHQAMgHANAAIAPABIgDAcQgHgBgHgBQgSAAgKAMQgLAMAAATIAABKg");
	this.shape_477.setTransform(477.275,289.75);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FFFFFF").s().p("AAgBJIAAhXQAAgQgGgJQgHgIgOAAQgTAAgIAMQgJALAAAZIAABIIgfAAIAAiOIAYAAIAEASIACAAQAGgKAMgFQAMgFAOAAQAzAAAAA0IAABcg");
	this.shape_478.setTransform(439.375,289.75);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FFFFFF").s().p("AgaArIAAhMIgTAAIAAgNIAVgLIAKgfIASAAIAAAhIApAAIAAAWIgpAAIAABMQAAAKAFAGQAGAFAJAAQALAAALgDIAAAWIgNAEIgQACQgqAAgBgug");
	this.shape_479.setTransform(392.9,288.4);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FFFFFF").s().p("AhABlIAAgYQAHABAIAAQAWAAAJgZIAFgOIg5iNIAhAAIAdBRQAHARABAOIABAAIAEgQIAhhgIAhAAIg9CgQgQAtgnAAQgKAAgJgCg");
	this.shape_480.setTransform(380.775,293.05);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FFFFFF").s().p("Ag9BeIAAi7IA2AAQAiAAASAOQARAPAAAcQAAAdgTAPQgTAQgjAAIgUAAIAABGgAgfgBIARAAQAXAAALgIQALgJAAgRQAAgQgKgIQgKgIgUAAIgWAAg");
	this.shape_481.setTransform(366.225,287.575);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FFFFFF").s().p("AglBNIA5iZIASAAIg5CZg");
	this.shape_482.setTransform(971.55,489.65);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FFFFFF").s().p("AAAAKIgQAmIgTgKIAagiIgogDIADgSIApALIgEgpIATAAIgEApIApgLIADASIgoADIAaAiIgSAKg");
	this.shape_483.setTransform(961.625,485.775);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FFFFFF").s().p("AAAAKIgQAmIgTgKIAagiIgogDIADgSIApALIgEgpIATAAIgEApIApgLIADASIgoADIAaAiIgSAKg");
	this.shape_484.setTransform(900.225,485.775);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FFFFFF").s().p("AgkBNIA4iZIASAAIg5CZg");
	this.shape_485.setTransform(890.3,489.65);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgHgcIgBAAIgHAcIgWBDIgUAAIgfhzIASAAIARBBIAGAfIACAAIADgPIAEgQIAWhBIASAAIAUBBQAHATABAMIABAAIACgMIAXhUIASAAIghBzg");
	this.shape_486.setTransform(823.8,491.575);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_487.setTransform(811.5,490.325);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgRAXAAQAWAAANAPQANAQAAAbQAAAdgNAPQgMAQgXAAQgKAAgKgEgAgZgLQgHALgBAXQABAYAHALQAJAKAQAAQARABAIgMQAIgMAAgWQAAgWgIgLQgIgLgRAAQgQAAgJAKg");
	this.shape_488.setTransform(789.45,489.25);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FFFFFF").s().p("AgkBNIA4iZIARAAIg4CZg");
	this.shape_489.setTransform(1008.05,426.05);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FFFFFF").s().p("AgkBNIA4iZIASAAIg5CZg");
	this.shape_490.setTransform(1000.1,426.05);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgHgcIgBAAIgHAcIgWBDIgUAAIgfhzIASAAIARBBIAGAfIABAAIAEgPIAEgQIAWhBIASAAIAUBBQAGATADAMIABAAIABgMIAXhUIASAAIghBzg");
	this.shape_491.setTransform(775,427.975);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgHgcIgBAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAGAfIABAAIAEgPIAEgQIAWhBIASAAIAVBBQAFATADAMIABAAIABgMIAXhUIASAAIggBzg");
	this.shape_492.setTransform(710.55,427.975);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgRgFgHgFQgGgEgEgGQgDgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_493.setTransform(527.55,427.975);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgRgFgHgFQgGgEgEgGQgDgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_494.setTransform(462.3,427.975);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAGgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_495.setTransform(453.25,426.725);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#FFFFFF").s().p("AgzBBIAAgaQAZAMAWAAQAbAAAAgRQAAgGgEgDQgCgEgIgEIgTgJQgYgIgJgKQgIgJgBgPQAAgTAPgKQAPgKAZAAQAYAAAXAKIgJAXQgYgJgQAAQgWAAAAANQAAAHAGAFQAGAEAUAIQASAHAHAFQAIAGAFAHQADAHAAALQAAAVgPALQgPALgbAAQgdAAgRgJg");
	this.shape_496.setTransform(621.7,361.575);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FFFFFF").s().p("AgaArIAAhLIgTAAIAAgOIAVgLIAKgeIASAAIAAAfIAoAAIAAAYIgoAAIAABKQAAALAFAGQAGAFAJAAQALAAALgEIAAAYIgNADIgRABQgqAAAAgtg");
	this.shape_497.setTransform(610,360.1);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FFFFFF").s().p("AgiBBQgQgJgIgRQgJgRAAgWQABgiARgTQASgUAgAAQAfAAARAUQATAUgBAhQABAjgTATQgRAUggAAQgTAAgPgJgAgagkQgJANAAAXQAAAxAkAAQAjAAABgxQAAgwglAAQgSAAgIAMg");
	this.shape_498.setTransform(514.55,361.575);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FFFFFF").s().p("AgwBIQgWgZgBgvQAAgcAMgWQAKgWAUgMQAVgMAaAAQAdAAAYAMIgLAaIgTgIQgLgDgMAAQgZAAgPASQgQATAAAgQAAAjAPASQAOASAbAAQAMAAALgDIAYgGIAAAaQgXAJgcAAQgoAAgWgZg");
	this.shape_499.setTransform(498.5,359.275);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FFFFFF").s().p("AgZArIAAhLIgUAAIAAgOIAVgLIAKgeIASAAIAAAfIApAAIAAAYIgpAAIAABKQAAALAGAGQAFAFAJAAQALAAALgEIAAAYIgNADIgQABQgrAAABgtg");
	this.shape_500.setTransform(477.75,360.1);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FFFFFF").s().p("AhABoIAAjNIAZAAIAEATIACAAQAOgVAbAAQAbAAAPATQAPATAAAjQAAAigPAUQgQATgaAAQgaAAgPgTIgCAAIACAWIAAA6gAgZhEQgIAKAAAYIAAAEQAAAaAIALQAIAMASAAQAQAAAIgNQAJgMAAgYQAAgYgJgMQgIgNgRAAQgRAAgIALg");
	this.shape_501.setTransform(464.825,364.625);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FFFFFF").s().p("AgOBjIAAiOIAdAAIAACOgAgLhFQgFgEAAgIQAAgIAFgFQADgDAIAAQAIAAAFADQAEAFAAAIQAAAIgEAEQgFAFgIAAQgIAAgDgFg");
	this.shape_502.setTransform(452.6,358.85);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FFFFFF").s().p("AgrBJIAAiOIAYAAIAEAZIACAAQAHgNAKgHQAMgIANABIAPABIgDAcQgHgBgHAAQgSAAgKALQgLAMAAATIAABKg");
	this.shape_503.setTransform(444.075,361.45);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FFFFFF").s().p("AgkA3QgSgTABgjQgBgjATgUQARgTAgAAQAWAAATAIIgJAZQgUgIgMAAQgkAAAAAwQAAAYAJANQAJAMARAAQAUAAASgKIAAAaQgIAFgJACQgJACgOAAQgeAAgRgTg");
	this.shape_504.setTransform(431.3,361.575);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FFFFFF").s().p("Ag7BXIAAgdQANAGAOADQAPAEAMAAQARAAAJgHQAJgHAAgMQAAgKgIgIQgIgHgYgKQgagKgLgNQgKgNAAgTQAAgYARgNQAQgOAcAAQAbAAAaAMIgJAZQgZgKgUAAQgOAAgIAGQgIAHAAAKQAAAIADAFQAEAFAHAFQAHAEARAIQAVAJAKAGQAJAHAFAKQAEAJAAANQAAAZgSAPQgSAOgfAAQggAAgUgKg");
	this.shape_505.setTransform(417.425,359.275);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#FFFFFF").s().p("AgvA+QgNgLAAgVQABgWAQgKQARgLAggBIAZgBIAAgHQAAgOgHgHQgGgHgNAAQgKAAgLAEIgTAHIgKgWQAMgGAOgDQAOgDALAAQAbAAANAMQAOAMABAZIAABfIgWAAIgGgUIgBAAQgLANgKAFQgLAFgPAAQgVAAgLgMgAAMAEQgVABgJAGQgKAGAAAOQAAAJAGAFQAGAGAKAAQAQAAAKgKQAKgJAAgQIAAgNg");
	this.shape_506.setTransform(402,361.575);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FFFFFF").s().p("AgQBHIg2iNIAgAAIAdBSQAIAUABANIAAAAQABgJAIgYIAdhSIAhAAIg3CNg");
	this.shape_507.setTransform(387.775,361.575);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#FFFFFF").s().p("AgwA+QgMgLABgVQAAgWAQgKQAQgLAhgBIAZgBIAAgHQgBgOgGgHQgHgHgNAAQgKAAgJAEIgUAHIgKgWQAMgGANgDQAOgDALAAQAcAAAOAMQAOAMgBAZIAABfIgVAAIgGgUIgBAAQgKANgLAFQgLAFgPAAQgVAAgMgMgAAMAEQgUABgKAGQgKAGAAAOQAAAJAGAFQAFAGAMAAQAPAAALgKQAJgJAAgQIAAgNg");
	this.shape_508.setTransform(372.6,361.575);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#FFFFFF").s().p("AglB2IAAgaQALACAIAAQAYAAABggIAAi2IAeAAIAAC1QAAAdgNAPQgOAPgaAAQgMAAgJgCg");
	this.shape_509.setTransform(359.25,361.9);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#FFFFFF").s().p("AgpBMQgMgIAAgQQAAgKAGgIQAHgIAMgCQgEgCgDgFQgDgEAAgFQAAgHAEgDQADgFAHgFQgJgDgGgJQgFgJAAgLQgBgTAMgLQAMgKAUAAQAJAAAGACIApAAIAAALIgWADIAGAJQACAGAAAIQAAARgMAKQgMAKgTAAIgKgBQgLAGAAAIQAAAFAEACQAFACAJAAIATAAQATAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgHAGAAAKQABAKAHAEQAIAFAPAAQAVAAALgGQALgHAAgLQgBgKgGgDQgFgEgQAAIgVAAQgLAAgHAGgAgVhBQgGAHAAANQAAAMAHAHQAGAGANAAQAZAAgBgZQAAgagZAAQgMAAgHAGg");
	this.shape_510.setTransform(894.25,304.075);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgGgFgRgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgGAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFACADQADAEAFADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_511.setTransform(862.05,301.575);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#FFFFFF").s().p("AAiBVIAAgyIABgSIgCAAQgMASgYAAQgWAAgMgQQgNgQAAgbQAAgcANgQQAMgQAXAAQAXAAANASIABAAIACgQIAOAAIAACngAgYg5QgIAMAAAVQAAAWAIALQAJALAPAAQAQAAAJgJQAIgKABgVIAAgEQAAgYgJgLQgIgKgRAAQgPAAgJAMg");
	this.shape_512.setTransform(819.3,304.075);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgFALgBQAVAAALALQAKAJAAAVIAABMg");
	this.shape_513.setTransform(776.775,299.15);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgDgDAAgGQAAgGADgCQAEgDADAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgDAAgEgDg");
	this.shape_514.setTransform(729.15,299.425);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQAMAAAIgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgPgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgXAAgNgHg");
	this.shape_515.setTransform(721.35,301.575);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgdQAAgbANgQQANgPAWgBQAWAAANARIABAAIAAgIIAAgIIAAgvIARAAIAACjIgPAAIgCgPIAAAAQgNARgXAAQgWAAgNgPgAgYgJQgHALAAAVQAAAXAHALQAIALAQAAQARABAIgKQAJgKAAgWIAAgEQAAgXgJgLQgIgKgRAAQgQAAgIAMg");
	this.shape_516.setTransform(690.45,299.25);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQABgKAGgIQAHgIAMgCQgEgCgDgFQgDgEAAgFQAAgHAEgDQADgFAHgFQgJgDgGgJQgFgJgBgLQAAgTAMgLQAMgKAUAAQAJAAAGACIApAAIAAALIgWADIAGAJQACAGAAAIQAAARgMAKQgLAKgUAAIgKgBQgLAGABAIQAAAFADACQAFACAJAAIATAAQATAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgHAGAAAKQABAKAHAEQAJAFAOAAQAVAAALgGQALgHAAgLQgBgKgFgDQgGgEgRAAIgUAAQgLAAgHAGgAgVhBQgGAHAAANQAAAMAHAHQAGAGANAAQAZAAgBgZQAAgagZAAQgLAAgIAGg");
	this.shape_517.setTransform(652.95,304.075);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgDgDABgGQgBgGADgCQAEgDADAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgDAAgEgDg");
	this.shape_518.setTransform(590.55,299.425);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FFFFFF").s().p("AgQBPQgKgEgGgJIgBAAIgFAPIgMAAIAAijIASAAIAAAoIgBAYIABAAQAMgRAXgBQAXABANAPQAMAPAAAcQAAAdgNAQQgNAPgWAAQgLAAgIgEgAgYgLQgJALABAXQgBAYAJALQAIAKARAAQAQABAIgMQAHgMAAgWQAAgWgHgLQgIgLgQAAQgSAAgHAKg");
	this.shape_519.setTransform(558.45,299.25);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgFALgBQAVAAALALQAKAJAAAVIAABMg");
	this.shape_520.setTransform(375.775,299.15);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FFFFFF").s().p("AgIBNIAAiKIgxAAIAAgPIBzAAIAAAPIgxAAIAACKg");
	this.shape_521.setTransform(363.125,299.65);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAYBEIAKAfIABAAIAHgXIAchMIASAAIgrBzg");
	this.shape_522.setTransform(882.55,237.975);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgPAAgJAJQgHAKgBATIAABAIgQAAIAAhKQAAgOgFgHQgHgHgMAAQgRAAgHAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIACAQIABAAQAGgIAJgFQAJgFAKAAQAcAAAHAUIABAAQAFgJAKgGQAJgFANAAQAUAAAKAKQAJAKABAWIAABLg");
	this.shape_523.setTransform(823.05,237.875);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgGgFQgFgFgRgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgLAAgHAEQgGAEAAAGQAAAFADADQABAEAGADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_524.setTransform(768.55,237.975);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALALQAKAKAAAUIAABMg");
	this.shape_525.setTransform(739.225,235.55);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#FFFFFF").s().p("AgpBMQgNgIABgQQAAgKAGgIQAHgIAMgCQgEgCgDgFQgDgEAAgFQAAgHAEgDQADgFAHgFQgJgDgGgJQgFgJAAgLQgBgTAMgLQAMgKAUAAQAJAAAGACIApAAIAAALIgWADIAGAJQACAGAAAIQAAARgMAKQgMAKgTAAIgKgBQgLAGABAIQgBAFAEACQAFACAJAAIATAAQATAAAKAIQAKAIAAAPQAAATgPALQgPAKgdAAQgXAAgMgJgAgeAkQgHAGAAAKQABAKAHAEQAJAFAOAAQAVAAALgGQALgHAAgLQgBgKgGgDQgFgEgQAAIgVAAQgLAAgHAGgAgVhBQgGAHAAANQAAAMAHAHQAGAGANAAQAYAAAAgZQAAgagZAAQgMAAgHAGg");
	this.shape_526.setTransform(713.35,240.475);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQAMgPAXAAQAWgBANASIACAAIgBgJIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgXAAgMgQgAgYgJQgHALgBAVQABAXAHALQAJAMAPgBQARAAAJgKQAHgJABgWIAAgEQAAgXgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_527.setTransform(652.9,235.65);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgOAAgIAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_528.setTransform(592.1,237.975);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQAMgPAXAAQAWgBANASIACAAIgBgJIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgXAAgMgQgAgYgJQgHALgBAVQABAXAHALQAJAMAPgBQARAAAJgKQAHgJABgWIAAgEQAAgXgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_529.setTransform(579.1,235.65);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_530.setTransform(561.25,237.975);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgGgJIgBAAIgFAPIgMAAIAAijIASAAIAAAoIgBAYIABAAQAMgRAXAAQAXAAANAPQAMAQAAAbQAAAcgNAQQgNAQgWAAQgLAAgJgEgAgYgKQgIAJAAAYQAAAZAIAKQAIALAQgBQARAAAIgMQAHgLAAgWQAAgXgHgKQgIgLgRAAQgRAAgHALg");
	this.shape_531.setTransform(548.9,235.65);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_532.setTransform(532.5,236.725);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgGgFgPgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgGAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFACADQADAEAFADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_533.setTransform(523.7,237.975);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgQAAgJAJQgHAKgBATIAABAIgQAAIAAhKQAAgOgFgHQgHgHgMAAQgRAAgHAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIACAQIABAAQAGgIAJgFQAIgFALAAQAcAAAHAUIABAAQAFgJAKgGQAJgFANAAQAUAAAJAKQALAKAAAWIAABLg");
	this.shape_534.setTransform(495.35,237.875);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgRAXAAQAXAAAMAPQANAQAAAbQAAAcgNAQQgMAQgXAAQgKAAgKgEgAgZgKQgHAJgBAYQABAZAHAKQAJALAQgBQARAAAIgMQAIgLAAgWQAAgXgIgKQgIgLgRAAQgQAAgJALg");
	this.shape_535.setTransform(455.9,235.65);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAYBEIAKAfIAAAAIAIgXIAbhMIATAAIgrBzg");
	this.shape_536.setTransform(405.35,237.975);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAKALAQAAQATAAASgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_537.setTransform(388.4,237.975);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALALQAKAKAAAUIAABMg");
	this.shape_538.setTransform(375.775,235.55);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FFFFFF").s().p("AgIBNIAAiKIgxAAIAAgPIBzAAIAAAPIgxAAIAACKg");
	this.shape_539.setTransform(363.125,236.05);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#FFFFFF").s().p("AgzBBIAAgaQAZAMAWAAQAbAAAAgRQAAgGgEgDQgCgEgIgEIgTgJQgYgIgJgKQgIgJgBgPQAAgTAPgKQAPgKAZAAQAYAAAXAKIgJAXQgYgJgQAAQgWAAAAANQgBAHAHAFQAGAEAUAIQASAHAHAFQAIAGAFAHQADAHAAALQAAAVgPALQgPALgbAAQgdAAgRgJg");
	this.shape_540.setTransform(600.55,171.575);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#FFFFFF").s().p("AghBSIgCAAIgGARIgXAAIAAjHIAfAAIAAAvIgBAQIgBANIACAAQAOgVAbAAQAbAAAPATQAPAUAAAhQAAAjgPAUQgPATgbAAQgaAAgPgTgAgZgJQgIAJAAAaIAAABQAAAaAIAMQAIAMASAAQAQAAAIgNQAJgNAAgYQAAgvgiAAQgRAAgIALg");
	this.shape_541.setTransform(563.725,168.8);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#FFFFFF").s().p("AgvA+QgMgLAAgVQAAgWAQgKQARgLAggBIAZgBIAAgHQAAgOgHgHQgGgHgNAAQgLAAgKAEIgTAHIgKgWQAMgGAOgDQANgDAMAAQAbAAANAMQAOAMAAAZIAABfIgVAAIgGgUIgBAAQgKANgLAFQgLAFgPAAQgVAAgLgMgAAMAEQgVABgJAGQgKAGAAAOQAAAJAGAFQAFAGAMAAQAPAAALgKQAJgJAAgQIAAgNg");
	this.shape_542.setTransform(547,171.575);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#FFFFFF").s().p("AgOBjIAAiOIAdAAIAACOgAgLhEQgFgFAAgIQAAgIAFgFQADgDAIAAQAIAAAFADQAEAFAAAIQAAAIgEAFQgFAEgIAAQgIAAgDgEg");
	this.shape_543.setTransform(536.2,168.85);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#FFFFFF").s().p("AgrBJIAAiOIAYAAIAEAZIACAAQAHgNAKgHQAMgIANAAIAPACIgDAcQgHgBgHAAQgSgBgKAMQgLAMAAATIAABKg");
	this.shape_544.setTransform(527.675,171.45);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#FFFFFF").s().p("AgvA+QgNgLAAgVQAAgWARgKQARgLAggBIAYgBIAAgHQABgOgHgHQgHgHgMAAQgKAAgLAEIgTAHIgKgWQAMgGAOgDQAOgDALAAQAbAAANAMQAOAMABAZIAABfIgWAAIgGgUIgBAAQgKANgLAFQgLAFgPAAQgVAAgLgMgAAMAEQgVABgJAGQgKAGAAAOQAAAJAFAFQAHAGAKAAQAQAAAKgKQAKgJAAgQIAAgNg");
	this.shape_545.setTransform(513.05,171.575);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#FFFFFF").s().p("AgQBeIhBi7IAfAAIAoB0IAGAWIAEATIAGgWIAFgUIAnhzIAgAAIhCC7g");
	this.shape_546.setTransform(497.65,169.275);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FFFFFF").s().p("AgZArIAAhLIgUAAIAAgOIAVgLIAKgeIASAAIAAAfIApAAIAAAYIgpAAIAABKQAAALAGAGQAFAFAJAAQALAAALgEIAAAYIgNADIgQABQgqAAAAgtg");
	this.shape_547.setTransform(477.4,170.1);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#FFFFFF").s().p("AgOBjIAAiOIAdAAIAACOgAgMhEQgEgFAAgIQAAgIAEgFQAEgDAIAAQAIAAAFADQAEAFAAAIQAAAIgEAFQgFAEgIAAQgIAAgEgEg");
	this.shape_548.setTransform(452.25,168.85);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#FFFFFF").s().p("AgrBJIAAiOIAYAAIAEAZIACAAQAHgNAKgHQAMgIANAAIAPACIgDAcQgHgBgHAAQgSgBgKAMQgLAMAAATIAABKg");
	this.shape_549.setTransform(443.725,171.45);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#FFFFFF").s().p("AgkA3QgSgTABgjQgBgjATgUQARgTAgAAQAXAAASAIIgJAZQgUgIgMAAQgkAAAAAwQAAAYAJANQAJAMARAAQAUAAATgKIAAAaQgJAFgJACQgJACgOAAQgeAAgRgTg");
	this.shape_550.setTransform(430.95,171.575);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FFFFFF").s().p("AgvA+QgMgLAAgVQAAgWAQgKQARgLAggBIAZgBIAAgHQAAgOgHgHQgGgHgNAAQgLAAgKAEIgTAHIgKgWQAMgGAOgDQANgDAMAAQAbAAANAMQAOAMAAAZIAABfIgVAAIgGgUIgBAAQgKANgLAFQgLAFgPAAQgVAAgLgMgAAMAEQgVABgJAGQgKAGAAAOQAAAJAGAFQAFAGAMAAQAPAAALgKQAJgJAAgQIAAgNg");
	this.shape_551.setTransform(401.65,171.575);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#FFFFFF").s().p("AglB2IAAgaQALACAIAAQAZAAgBggIAAi2IAfAAIAAC1QAAAdgNAPQgOAPgaABQgMAAgJgDg");
	this.shape_552.setTransform(358.9,171.9);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAYBEIAKAfIAAAAIAIgXIAbhMIATAAIgrBzg");
	this.shape_553.setTransform(879.65,599.425);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgGgFgRgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgLAAgHAEQgGAEAAAGQAAAFADADQABAEAGADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_554.setTransform(828.4,599.425);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQAMgPAXAAQAWgBANASIABAAIgBgJIAAgIIAAgvIASAAIAACjIgOAAIgDgQIgBAAQgMASgXAAQgXAAgMgQgAgXgJQgJALAAAWQAAAWAJALQAHAMAQAAQARAAAIgLQAIgJAAgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_555.setTransform(797.5,597.1);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_556.setTransform(736.7,599.425);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQAMgPAXAAQAXgBAMASIABAAIgBgJIAAgIIAAgvIASAAIAACjIgOAAIgDgQIgBAAQgMASgXAAQgXAAgMgQgAgXgJQgJALABAWQgBAWAJALQAHAMAQAAQARAAAIgLQAIgJAAgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_557.setTransform(723.7,597.1);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_558.setTransform(692.65,599.425);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#FFFFFF").s().p("AgQBPQgKgEgGgJIgBAAIgFAPIgMAAIAAijIASAAIAAAoIgBAYIABAAQAMgRAXAAQAXAAANAPQAMAPAAAcQAAAcgNAQQgNAQgWAAQgLAAgIgEgAgYgKQgJAJABAYQgBAZAJAKQAIALARAAQAQAAAIgNQAHgLAAgWQAAgXgHgKQgIgLgQAAQgSAAgHALg");
	this.shape_559.setTransform(668.25,597.1);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgGgFgRgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgLAAgHAEQgGAEAAAGQAAAFADADQABAEAGADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_560.setTransform(650.65,599.425);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQANgPAWAAQAWgBANASIACAAIgBgJIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgWAAgNgQgAgYgJQgHALgBAWQABAWAHALQAJAMAPAAQARAAAJgLQAHgJABgWIAAgDQAAgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_561.setTransform(589.1,597.1);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQANgPAWAAQAWgBANASIABAAIgBgJIAAgIIAAgvIASAAIAACjIgOAAIgDgQIgBAAQgMASgXAAQgWAAgNgQgAgXgJQgJALABAWQgBAWAJALQAHAMAQAAQARAAAIgLQAJgJgBgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_562.setTransform(495,597.1);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQAAgKAHgIQAHgIAMgCQgEgCgDgFQgDgEAAgFQAAgHADgDQAEgFAHgFQgJgDgFgJQgHgJAAgLQAAgTAMgLQAMgKAUAAQAIAAAIACIAnAAIAAALIgVADIAGAJQACAGAAAIQAAARgMAKQgMAKgTAAIgJgBQgLAGAAAIQAAAFADACQAEACAKAAIAUAAQASAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgGAGgBAKQAAAKAJAEQAIAFAOAAQAVAAALgGQAKgHAAgLQAAgKgFgDQgHgEgQAAIgTAAQgMAAgHAGgAgUhBQgHAHAAANQAAAMAHAHQAHAGAMAAQAYAAABgZQAAgagaAAQgMAAgGAGg");
	this.shape_563.setTransform(457.45,601.925);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_564.setTransform(388.9,599.425);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgRAXAAQAWAAANAPQANAPAAAcQAAAcgNAQQgNAQgWAAQgKAAgKgEgAgZgKQgHAJgBAYQABAZAHAKQAJALAQAAQARAAAIgNQAIgLAAgWQAAgXgIgKQgIgLgRAAQgQAAgJALg");
	this.shape_565.setTransform(364.45,597.1);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgGgFQgFgFgRgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgGAOQgRgHgOAAQgLAAgHAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_566.setTransform(1074.1,567.625);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#FFFFFF").s().p("AgvBGIAAgRQAHAFALADQALACAKAAQASAAAKgJQAKgIAAgRQAAgggmABQgKgBgRADIgJgFIAGhIIBLAAIAAAQIg8AAIgEAuQAMgCAMAAQAYAAAOAMQANALAAAVQAAAYgOANQgQAOgaAAQgaAAgNgIg");
	this.shape_567.setTransform(1027.3,565.8);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgRAXAAQAWAAANAPQANAQAAAbQAAAdgNAPQgNAQgWAAQgKAAgKgEgAgZgLQgIALAAAXQAAAYAIALQAJAKARAAQAQABAIgMQAIgMAAgWQAAgWgIgLQgIgLgQAAQgRAAgJAKg");
	this.shape_568.setTransform(983.65,565.3);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#FFFFFF").s().p("AgPAaIAHgaIAEgaIASAAIACADIgIAXIgJAag");
	this.shape_569.setTransform(883.2,573.55);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDgBgGQABgGADgCQADgDADAAQAEAAADADQAEACAAAGQAAAGgEADQgDADgEAAQgDAAgDgDg");
	this.shape_570.setTransform(830.8,565.475);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_571.setTransform(812.925,567.625);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgPAAgJAJQgHAKAAATIAABAIgRAAIAAhKQAAgOgFgHQgGgHgNAAQgRAAgHAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIACAQIABAAQAGgIAIgFQAKgFAKAAQAcAAAHAUIABAAQAFgJAKgGQAJgFANAAQAUAAAKAKQAJAKABAWIAABLg");
	this.shape_572.setTransform(773.65,567.525);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQAMgPAXAAQAXAAAMAQIACAAIgCgIIAAgIIAAgvIASAAIAACjIgOAAIgDgPIgBAAQgMARgXAAQgXAAgMgQgAgYgJQgIALAAAVQAAAXAIALQAJALAPAAQARAAAJgKQAHgJAAgWIAAgEQABgXgJgLQgIgKgRAAQgPAAgJAMg");
	this.shape_573.setTransform(746.3,565.3);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_574.setTransform(734.05,567.625);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_575.setTransform(710.675,567.625);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgGg6QgEgDAAgGQAAgGAEgCQADgDADAAQAEAAADADQAEACAAAGQAAAGgEADQgDADgEAAQgDAAgDgDg");
	this.shape_576.setTransform(676.25,565.475);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_577.setTransform(630.825,567.625);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDgBgGQABgGADgCQADgDADAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgDAAgDgDg");
	this.shape_578.setTransform(622.45,565.475);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_579.setTransform(616.125,567.525);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_580.setTransform(604.575,567.625);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_581.setTransform(481.725,567.625);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_582.setTransform(443.575,567.525);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_583.setTransform(431.775,567.725);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_584.setTransform(400.075,567.525);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDgBgGQABgGADgCQADgDADAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgDAAgDgDg");
	this.shape_585.setTransform(390.7,565.475);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAXABAMARIACAAIgCgJIAAgIIAAgvIASAAIAACjIgOAAIgDgQIgBAAQgMASgXAAQgXAAgMgPgAgYgJQgIALAAAWQAAAWAIALQAJAMAPAAQARgBAJgJQAHgKAAgWIAAgDQABgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_586.setTransform(481.25,429.35);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVAAALAKQAKAKAAAUIAABMg");
	this.shape_587.setTransform(959.175,397.45);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgRAXAAQAWAAANAPQANAQAAAbQAAAdgNAPQgMAQgXAAQgKAAgKgEgAgZgLQgHAKgBAYQABAZAHAKQAJAKAQAAQARAAAIgMQAIgLAAgWQAAgXgIgKQgIgLgRAAQgQAAgJAKg");
	this.shape_588.setTransform(861.45,397.55);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQANgPAWAAQAWgBANASIACAAIgBgJIAAgIIAAgvIARAAIAACjIgPAAIgCgPIAAAAQgNARgXAAQgWAAgNgQgAgYgJQgHALgBAVQABAXAHALQAJALAPAAQARAAAJgKQAHgJABgWIAAgEQAAgXgJgLQgIgKgRAAQgPAAgJAMg");
	this.shape_589.setTransform(842,397.55);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVAAALAKQAKAKAAAUIAABMg");
	this.shape_590.setTransform(612.425,397.45);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQANgPAWAAQAWgBANASIABAAIgBgJIAAgIIAAgvIASAAIAACjIgOAAIgDgPIgBAAQgMARgXAAQgWAAgNgQgAgXgJQgJALABAVQgBAXAJALQAHALAQAAQARAAAIgKQAJgJgBgWIAAgEQAAgXgIgLQgIgKgRAAQgQAAgHAMg");
	this.shape_591.setTransform(489.6,397.55);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVAAALAKQAKAKAAAUIAABMg");
	this.shape_592.setTransform(435.825,397.45);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVAAALAKQAKAKAAAUIAABMg");
	this.shape_593.setTransform(384.175,397.45);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#FFFFFF").s().p("AAmBNIgfhmIgFgSIgCgMQgCAOgFAQIgeBmIgSAAIgpiZIATAAIAYBeQAGAUACAQQADgTAFgSIAchdIASAAIAdBdQAEARAEAUQACgPAGgVIAYheIATAAIgpCZg");
	this.shape_594.setTransform(367.5,397.95);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#FFFFFF").s().p("AgYBeQAQgTAHgZQAHgYAAgaQAAgYgGgYQgJgZgPgUIASAAQAOATAIAYQAJAYAAAbQAAAbgJAYQgIAZgOARg");
	this.shape_595.setTransform(844.95,336.05);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#FFFFFF").s().p("AAHBeQgOgSgIgYQgIgYAAgbQAAgbAIgYQAIgZAOgSIARAAQgPAUgHAZQgHAYAAAYQAAAaAHAYQAIAYAOAUg");
	this.shape_596.setTransform(838.8,336.05);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#FFFFFF").s().p("AgIALQgEgDAAgIQAAgGAEgEQADgDAFAAQAGAAADADQAEAEAAAGQAAAHgEAEQgDADgGAAQgFAAgDgDg");
	this.shape_597.setTransform(802.375,340.925);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPAMgIQALgIATAAQATAAASAIIgGAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_598.setTransform(763.9,336.275);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAWABANARIABAAIgBgJIAAgIIAAgvIASAAIAACjIgOAAIgDgQIgBAAQgMASgXAAQgXAAgMgPgAgXgJQgJALAAAWQAAAWAJALQAHAMAQAAQARgBAIgJQAIgKAAgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_599.setTransform(644.5,333.95);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#FFFFFF").s().p("Ag1BeQgQgKAAgUQAAgNAJgJQAIgJAPgDQgGgDgEgFQgEgGAAgGQAAgIAFgFQAEgGAJgFQgLgFgHgKQgHgLAAgPQAAgXAPgNQAOgMAcAAIALABIAKABIAyAAIAAARIgZAEQAEAFABAGQADAHAAAHQAAAWgQANQgOANgaAAIgNgBQgKAGABAHQAAAFAEACQAFADAMAAIAYAAQAXAAANAKQAMAKAAATQAAAYgUANQgUANgkAAQgeAAgPgKgAgiAuQgIAGAAALQAAAKAJAFQAJAFAQAAQAYAAAMgHQAMgHAAgMQAAgJgGgEQgHgEgSAAIgWAAQgNAAgIAGgAgWhMQgGAHAAAOQAAAOAGAHQAIAHAMAAQAZAAAAgcQABgOgHgHQgGgIgNAAQgNAAgHAIg");
	this.shape_600.setTransform(583.05,272.925);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#FFFFFF").s().p("AgPBjIAAiOIAeAAIAACOgAgLhFQgFgEAAgIQAAgIAFgFQADgDAIAAQAIAAAFADQAEAFAAAIQAAAIgEAEQgFAFgIAAQgIAAgDgFg");
	this.shape_601.setTransform(555.45,267.15);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#FFFFFF").s().p("AgZArIAAhMIgUAAIAAgNIAVgLIAKgeIASAAIAAAfIApAAIAAAXIgpAAIAABLQAAALAGAGQAFAFAJAAQALAAALgEIAAAYIgNADIgQACQgrgBABgtg");
	this.shape_602.setTransform(546.5,268.4);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#FFFFFF").s().p("AAgBJIAAhXQAAgRgGgIQgHgIgOAAQgTAAgIAMQgJALAAAaIAABHIgfAAIAAiOIAYAAIAEATIACAAQAGgLAMgFQAMgGAOABQAzAAAAAzIAABdg");
	this.shape_603.setTransform(533.125,269.75);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#FFFFFF").s().p("AgPBjIAAiOIAeAAIAACOgAgLhFQgFgEAAgIQAAgIAFgFQAEgDAHAAQAIAAAEADQAFAFAAAIQAAAIgFAEQgEAFgIAAQgHAAgEgFg");
	this.shape_604.setTransform(521.05,267.15);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#FFFFFF").s().p("AgZArIAAhMIgUAAIAAgNIAVgLIAKgeIASAAIAAAfIApAAIAAAXIgpAAIAABLQAAALAGAGQAFAFAJAAQALAAALgEIAAAYIgNADIgQACQgrgBABgtg");
	this.shape_605.setTransform(477.75,268.4);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#FFFFFF").s().p("AgrBJIAAiOIAYAAIAEAZIACAAQAHgMAKgIQAMgIANABIAPABIgDAcQgHgCgHABQgSAAgKALQgLAMAAATIAABKg");
	this.shape_606.setTransform(444.075,269.75);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#FFFFFF").s().p("AglB2IAAgaQALACAIAAQAYAAABggIAAi2IAeAAIAAC1QAAAdgNAPQgOAQgagBQgMAAgJgCg");
	this.shape_607.setTransform(359.25,270.2);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQAMAAAIgEQAHgEAAgJQAAgHgFgFQgHgFgPgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgNgHg");
	this.shape_608.setTransform(664.65,523.375);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQAMgPAXAAQAXAAAMARIACAAIgCgJIAAgIIAAgvIASAAIAACjIgOAAIgDgQIgBAAQgMASgXAAQgXAAgMgQgAgYgJQgIALAAAWQAAAWAIALQAJAMAPAAQARAAAJgLQAHgJAAgWIAAgDQABgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_609.setTransform(389,521.05);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#FFFFFF").s().p("AAAAKIgQAmIgTgKIAagiIgogDIADgSIApALIgEgpIATAAIgEApIApgLIADASIgoADIAaAiIgSAKg");
	this.shape_610.setTransform(900.225,485.775);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgHgcIgBAAIgHAcIgWBDIgUAAIgfhzIASAAIARBBIAGAfIACAAIADgPIAEgQIAWhBIASAAIAUBBQAHATABAMIABAAIACgMIAXhUIASAAIghBzg");
	this.shape_611.setTransform(823.8,491.575);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_612.setTransform(698.3,426.725);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_613.setTransform(544.725,427.875);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_614.setTransform(492.675,427.875);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_615.setTransform(442.975,427.875);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#FFFFFF").s().p("AgzBBIAAgaQAZAMAWAAQAbAAAAgRQAAgGgDgDQgEgEgHgEIgTgJQgYgIgIgKQgJgJAAgPQAAgTAOgKQAPgKAZAAQAZAAAWAKIgJAXQgYgJgPAAQgXAAAAANQAAAHAGAFQAGAEAUAIQARAHAIAFQAIAGAFAHQADAHAAALQAAAVgPALQgPALgbAAQgdAAgRgJg");
	this.shape_616.setTransform(543.05,361.575);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#FFFFFF").s().p("AgiBBQgQgJgIgRQgJgRAAgWQAAgiASgTQASgUAgAAQAeAAASAUQATAUgBAhQABAjgTATQgRAUggAAQgTAAgPgJgAgagkQgJANAAAXQAAAxAkAAQAkAAAAgxQAAgwglAAQgSAAgIAMg");
	this.shape_617.setTransform(435.9,361.575);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#FFFFFF").s().p("AgwBIQgWgZAAgvQAAgcALgWQAKgWAUgMQAVgMAbAAQAcAAAYAMIgLAaIgUgIQgKgDgMAAQgaAAgOASQgQATAAAgQAAAjAPASQAOASAbAAQAMAAALgDIAYgGIAAAaQgXAJgcAAQgoAAgWgZg");
	this.shape_618.setTransform(419.85,359.275);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#FFFFFF").s().p("AgLBAIAAg0IgzAAIAAgWIAzAAIAAg1IAXAAIAAA1IAzAAIAAAWIgzAAIAAA0g");
	this.shape_619.setTransform(396.8,359.375);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#FFFFFF").s().p("AgLBAIAAg0IgzAAIAAgWIAzAAIAAg1IAWAAIAAA1IA0AAIAAAWIg0AAIAAA0g");
	this.shape_620.setTransform(381.75,359.375);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#FFFFFF").s().p("AgwBIQgWgZgBgvQAAgcAMgWQAKgWAUgMQAVgMAaAAQAdAAAYAMIgLAaIgTgIQgLgDgMAAQgZAAgPASQgQATAAAgQAAAjAPASQAOASAbAAQAMAAAMgDIAXgGIAAAaQgXAJgcAAQgoAAgWgZg");
	this.shape_621.setTransform(366.2,359.275);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#FFFFFF").s().p("AgQAjIAAhAIgPAAIAAgIIAPgHIAHgXIAJAAIAAAZIAgAAIAAANIggAAIAAA/QAAAKAFAFQAEAGAJAAIAIgBIAGgBIAAAMIgHACIgKABQgfAAAAghg");
	this.shape_622.setTransform(1122.175,252.375);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#FFFFFF").s().p("AAdA4IAAhGQAAgNgGgHQgGgGgNAAQgQgBgIAJQgIAKAAAVIAAA5IgRAAIAAhsIAOAAIACAOIABAAQAFgIAJgEQAKgFAKAAQAUAAAKAKQAKAJAAAWIAABGg");
	this.shape_623.setTransform(1112.475,253.45);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#FFFFFF").s().p("AgHBLIAAhsIAPAAIAABsgAgGg3QgDgCAAgGQAAgGADgCQADgDADAAQAEAAADADQADACAAAGQAAAGgDACQgDADgEAAQgDAAgDgDg");
	this.shape_624.setTransform(1103.625,251.525);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#FFFFFF").s().p("AgIA3QgDgEAAgHQAAgGADgEQADgDAFgBQAFABAEADQADAEAAAGQAAAHgDADQgEADgFAAQgEAAgEgCgAgIghQgDgDAAgHQAAgOALAAQAMAAAAAOQAAAHgDADQgEAEgFgBQgEAAgEgDg");
	this.shape_625.setTransform(1093.05,253.55);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#FFFFFF").s().p("AgfAqQgOgPAAgaQAAgaANgPQANgPAVgBQAUAAAMAOQAMANAAAXIAAAJIhKAAQAAATAKAKQAJAKAPAAQASAAARgHIAAAOIgQAGQgIABgLAAQgXAAgOgOgAAcgJQAAgQgHgIQgHgJgNAAQgMAAgIAJQgHAIgCAQIA4AAIAAAAg");
	this.shape_626.setTransform(1084.725,253.55);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#FFFFFF").s().p("AglAxIAAgOQAHADAKACQAJADAIAAQAMAAAHgEQAHgFAAgIQAAgGgGgFQgFgEgPgHQgQgEgGgFQgGgDgEgGQgDgFAAgIQAAgNALgIQALgIASAAQASABAQAGIgFAOQgRgHgNAAQgLAAgGAEQgGAEAAAGQAAAEACADQADAEAFACIASAJQATAGAHAGQAHAIAAAKQAAAQgMAIQgLAIgUAAQgVABgMgIg");
	this.shape_627.setTransform(1074.175,253.55);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#FFFFFF").s().p("AgiAwQgJgIAAgQQAAgfA0gCIATgBIAAgGQAAgOgGgFQgGgHgMAAQgMAAgSAJIgFgNQAIgFAKgCQAKgDAIAAQAUAAAJAJQAKAJAAATIAABKIgNAAIgDgQIgBAAQgIAKgIAEQgIADgLAAQgQAAgKgIgAALACQgTAAgJAGQgJAFAAALQAAAKAGAEQAFAFAKAAQAOAAAJgIQAJgJAAgPIAAgKg");
	this.shape_628.setTransform(1063.225,253.55);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#FFFFFF").s().p("AgaAqQgNgOABgbQgBgbANgPQAOgPAYAAIAPACQAIABAFADIgGAOIgLgEIgMgBQggAAAAAqQAAATAIALQAIALAPAAQANAAAOgGIAAAPQgKAFgRAAQgXAAgNgOg");
	this.shape_629.setTransform(1053.35,253.55);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#FFFFFF").s().p("AglAxIAAgOQAHADAKACQAJADAIAAQAMAAAHgEQAHgFAAgIQAAgGgGgFQgFgEgPgHQgQgEgGgFQgGgDgEgGQgDgFAAgIQAAgNALgIQALgIASAAQASABAQAGIgFAOQgRgHgNAAQgLAAgGAEQgGAEAAAGQAAAEACADQADAEAFACIASAJQATAGAHAGQAHAIAAAKQAAAQgMAIQgLAIgUAAQgVABgMgIg");
	this.shape_630.setTransform(1038.175,253.55);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#FFFFFF").s().p("AgHBLIAAhsIAPAAIAABsgAgGg3QgDgCAAgGQAAgGADgCQADgDADAAQAEAAADADQADACAAAGQAAAGgDACQgDADgEAAQgDAAgDgDg");
	this.shape_631.setTransform(1030.725,251.525);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#FFFFFF").s().p("AAdBOIAAhHQAAgMgGgHQgGgGgNAAQgQAAgIAJQgIAJAAAUIAAA6IgRAAIAAiaIARAAIAAAvIgBANIABAAQAFgHAJgFQAJgFAKAAQAUAAALAKQAKAJAAAVIAABHg");
	this.shape_632.setTransform(1021.975,251.25);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#FFFFFF").s().p("AgQAjIAAhAIgPAAIAAgIIAPgHIAHgXIAJAAIAAAZIAgAAIAAANIggAAIAAA/QAAAKAFAFQAEAGAJAAIAIgBIAGgBIAAAMIgHACIgKABQgfAAAAghg");
	this.shape_633.setTransform(1011.975,252.375);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#FFFFFF").s().p("AAdA4IAAhGQAAgNgGgHQgGgGgNAAQgQgBgIAJQgIAKAAAVIAAA5IgRAAIAAhsIAOAAIACAOIABAAQAFgIAJgEQAKgFAKAAQAUAAAKAKQAKAJAAAWIAABGg");
	this.shape_634.setTransform(997.025,253.45);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#FFFFFF").s().p("AgHBLIAAhsIAPAAIAABsgAgGg3QgDgCAAgGQAAgGADgCQADgDADAAQAEAAADADQADACAAAGQAAAGgDACQgDADgEAAQgDAAgDgDg");
	this.shape_635.setTransform(988.175,251.525);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#FFFFFF").s().p("AgOAZIAGgZIAEgYIARAAIACACIgIAWIgJAZg");
	this.shape_636.setTransform(977.5,259.15);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#FFFFFF").s().p("AgfAqQgOgPAAgaQAAgaANgPQANgPAVgBQAUAAAMAOQAMANAAAXIAAAJIhKAAQAAATAKAKQAJAKAPAAQASAAARgHIAAAOIgQAGQgIABgLAAQgXAAgOgOgAAcgJQAAgQgHgIQgHgJgNAAQgMAAgIAJQgHAIgCAQIA4AAIAAAAg");
	this.shape_637.setTransform(969.725,253.55);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#FFFFFF").s().p("AgvBQIAAidIANAAIADAPIAAAAQAHgJAIgEQAJgEAKAAQAVAAAMAPQAMAPAAAaQAAAagMAPQgMAPgVAAQgKAAgJgEQgJgEgGgIIgBAAIABASIAAAtgAgXg4QgHAJgBAVIAAADQAAAXAIAKQAIAJAQAAQAOAAAIgLQAIgLAAgUQAAgVgIgKQgIgLgPAAQgQAAgHAJg");
	this.shape_638.setTransform(958,255.9);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#FFFFFF").s().p("AgxBOIAAgOQAGACAHgBQARAAAHgTIAGgQIgshsIASAAIAYA+QAHAUABAKIABAAIAGgQIAbhMIARAAIgvB7QgGASgJAJQgJAHgOAAIgPgBg");
	this.shape_639.setTransform(946.325,256);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#FFFFFF").s().p("AgQAjIAAhAIgPAAIAAgIIAPgHIAHgXIAJAAIAAAZIAgAAIAAANIggAAIAAA/QAAAKAFAFQAEAGAJAAIAIgBIAGgBIAAAMIgHACIgKABQgfAAAAghg");
	this.shape_640.setTransform(937.525,252.375);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#FFFFFF").s().p("AgiAwQgJgIAAgQQAAgfA0gCIATgBIAAgGQAAgOgGgFQgGgHgMAAQgMAAgSAJIgFgNQAIgFAKgCQAKgDAIAAQAUAAAJAJQAKAJAAATIAABKIgNAAIgDgQIgBAAQgIAKgIAEQgIADgLAAQgQAAgKgIgAALACQgTAAgJAGQgJAFAAALQAAAKAGAEQAFAFAKAAQAOAAAJgIQAJgJAAgPIAAgKg");
	this.shape_641.setTransform(922.725,253.55);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#FFFFFF").s().p("AgQAjIAAhAIgPAAIAAgIIAPgHIAHgXIAJAAIAAAZIAgAAIAAANIggAAIAAA/QAAAKAFAFQAEAGAJAAIAIgBIAGgBIAAAMIgHACIgKABQgfAAAAghg");
	this.shape_642.setTransform(913.725,252.375);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#FFFFFF").s().p("AgiAwQgJgIAAgQQAAgfA0gCIATgBIAAgGQAAgOgGgFQgGgHgMAAQgMAAgSAJIgFgNQAIgFAKgCQAKgDAIAAQAUAAAJAJQAKAJAAATIAABKIgNAAIgDgQIgBAAQgIAKgIAEQgIADgLAAQgQAAgKgIgAALACQgTAAgJAGQgJAFAAALQAAAKAGAEQAFAFAKAAQAOAAAJgIQAJgJAAgPIAAgKg");
	this.shape_643.setTransform(904.175,253.55);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#FFFFFF").s().p("AgjBAQgMgPAAgbQAAgaAMgPQAMgPAVAAQAWAAALAQIACAAIgBgIIgBgHIAAgsIARAAIAACaIgNAAIgCgPIgCAAQgLAQgWAAQgVAAgMgOgAgWgJQgIALAAAVQAAAUAIALQAHALAPgBQAQAAAIgJQAIgJgBgVIAAgDQABgWgIgKQgIgKgQAAQgPAAgHALg");
	this.shape_644.setTransform(892.3,251.35);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#FFFFFF").s().p("AgfAqQgOgPAAgaQAAgaANgPQANgPAVgBQAUAAAMAOQAMANAAAXIAAAJIhKAAQAAATAKAKQAJAKAPAAQASAAARgHIAAAOIgQAGQgIABgLAAQgXAAgOgOgAAcgJQAAgQgHgIQgHgJgNAAQgMAAgIAJQgHAIgCAQIA4AAIAAAAg");
	this.shape_645.setTransform(875.475,253.55);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#FFFFFF").s().p("AAdBOIAAhHQAAgMgGgHQgGgGgNAAQgQAAgIAJQgIAJAAAUIAAA6IgRAAIAAiaIARAAIAAAvIgBANIABAAQAFgHAJgFQAJgFAKAAQAUAAALAKQAKAJAAAVIAABHg");
	this.shape_646.setTransform(863.525,251.25);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#FFFFFF").s().p("AgQAjIAAhAIgPAAIAAgIIAPgHIAHgXIAJAAIAAAZIAgAAIAAANIggAAIAAA/QAAAKAFAFQAEAGAJAAIAIgBIAGgBIAAAMIgHACIgKABQgfAAAAghg");
	this.shape_647.setTransform(853.525,252.375);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#FFFFFF").s().p("AglAxIAAgOQAHADAKACQAJADAIAAQAMAAAHgEQAHgFAAgIQAAgGgGgFQgFgEgPgHQgQgEgGgFQgGgDgEgGQgDgFAAgIQAAgNALgIQALgIASAAQASABAQAGIgFAOQgRgHgNAAQgLAAgGAEQgGAEAAAGQAAAEACADQADAEAFACIASAJQATAGAHAGQAHAIAAAKQAAAQgMAIQgLAIgUAAQgVABgMgIg");
	this.shape_648.setTransform(839.925,253.55);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#FFFFFF").s().p("AgfAqQgOgPAAgaQAAgaANgPQANgPAVgBQAUAAAMAOQAMANAAAXIAAAJIhKAAQAAATAKAKQAJAKAPAAQASAAARgHIAAAOIgQAGQgIABgLAAQgXAAgOgOgAAcgJQAAgQgHgIQgHgJgNAAQgMAAgIAJQgHAIgCAQIA4AAIAAAAg");
	this.shape_649.setTransform(829.375,253.55);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#FFFFFF").s().p("AgHBLIAAhsIAPAAIAABsgAgGg3QgDgCAAgGQAAgGADgCQADgDADAAQAEAAADADQADACAAAGQAAAGgDACQgDADgEAAQgDAAgDgDg");
	this.shape_650.setTransform(821.075,251.525);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#FFFFFF").s().p("AgRBOIAAhfIgUAAIAAgIIAUgGIAAgGQAAgoAiAAQAJAAALADIgEAOQgJgDgHgBQgKAAgEAHQgDAGgBAOIAAAHIAbAAIAAANIgbAAIAABfg");
	this.shape_651.setTransform(815.65,251.2);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#FFFFFF").s().p("AgHBLIAAhsIAPAAIAABsgAgGg3QgDgCAAgGQAAgGADgCQADgDADAAQAEAAADADQADACAAAGQAAAGgDACQgDADgEAAQgDAAgDgDg");
	this.shape_652.setTransform(809.075,251.525);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#FFFFFF").s().p("AgaAqQgMgOAAgbQAAgbAMgPQAOgPAXAAIAQACQAIABAEADIgEAOIgMgEIgMgBQghAAABAqQgBATAJALQAIALAPAAQAOAAANgGIAAAPQgKAFgRAAQgXAAgNgOg");
	this.shape_653.setTransform(801.95,253.55);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#FFFFFF").s().p("AgfAqQgOgPAAgaQAAgaANgPQANgPAVgBQAUAAAMAOQAMANAAAXIAAAJIhKAAQAAATAKAKQAJAKAPAAQASAAARgHIAAAOIgQAGQgIABgLAAQgXAAgOgOgAAcgJQAAgQgHgIQgHgJgNAAQgMAAgIAJQgHAIgCAQIA4AAIAAAAg");
	this.shape_654.setTransform(791.225,253.55);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#FFFFFF").s().p("AgvBQIAAidIAOAAIACAPIAAAAQAHgJAJgEQAIgEAKAAQAWAAAMAPQALAPAAAaQAAAagMAPQgMAPgVAAQgKAAgIgEQgJgEgHgIIgBAAIABASIAAAtgAgXg4QgHAJgBAVIAAADQABAXAHAKQAIAJAQAAQAOAAAIgLQAIgLAAgUQAAgVgIgKQgIgLgOAAQgRAAgHAJg");
	this.shape_655.setTransform(779.5,255.9);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#FFFFFF").s().p("AglAxIAAgOQAHADAKACQAJADAIAAQAMAAAHgEQAHgFAAgIQAAgGgGgFQgFgEgPgHQgQgEgGgFQgGgDgEgGQgDgFAAgIQAAgNALgIQALgIASAAQASABAQAGIgFAOQgRgHgNAAQgLAAgGAEQgGAEAAAGQAAAEACADQADAEAFACIASAJQATAGAHAGQAHAIAAAKQAAAQgMAIQgLAIgUAAQgVABgMgIg");
	this.shape_656.setTransform(768.175,253.55);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#FFFFFF").s().p("AAdBOIAAhHQAAgMgGgHQgGgGgNAAQgQAAgIAJQgIAJAAAUIAAA6IgRAAIAAiaIARAAIAAAvIgBANIABAAQAFgHAJgFQAJgFAKAAQAUAAALAKQAKAJAAAVIAABHg");
	this.shape_657.setTransform(751.825,251.25);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#FFFFFF").s().p("AgaAqQgNgOABgbQgBgbANgPQAOgPAYAAIAPACQAIABAFADIgGAOIgLgEIgMgBQghAAABAqQAAATAIALQAIALAPAAQANAAAOgGIAAAPQgKAFgRAAQgXAAgNgOg");
	this.shape_658.setTransform(740.95,253.55);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#FFFFFF").s().p("AgHBLIAAhsIAPAAIAABsgAgGg3QgDgCAAgGQAAgGADgCQADgDADAAQAEAAADADQADACAAAGQAAAGgDACQgDADgEAAQgDAAgDgDg");
	this.shape_659.setTransform(733.325,251.525);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#FFFFFF").s().p("AAdBOIAAhHQAAgMgGgHQgGgGgNAAQgQAAgIAJQgIAJAAAUIAAA6IgRAAIAAiaIARAAIAAAvIgBANIABAAQAFgHAJgFQAJgFAKAAQAUAAALAKQAKAJAAAVIAABHg");
	this.shape_660.setTransform(724.575,251.25);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#FFFFFF").s().p("AAbA3IgUg/IgHgbIAAAAIgHAbIgVA/IgTAAIgdhsIARAAIAQA9IAGAdIABAAIAEgPIAEgOIAUg9IARAAIATA9QAGARACAMIABAAIACgLIAVhPIARAAIgeBsg");
	this.shape_661.setTransform(710.35,253.55);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#FFFFFF").s().p("AgQAjIAAhAIgPAAIAAgIIAPgHIAHgXIAJAAIAAAZIAgAAIAAANIggAAIAAA/QAAAKAFAFQAEAGAJAAIAIgBIAGgBIAAAMIgHACIgKABQgfAAAAghg");
	this.shape_662.setTransform(693.475,252.375);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#FFFFFF").s().p("AAdA4IAAhGQAAgNgGgHQgGgGgNAAQgQgBgIAJQgIAKAAAVIAAA5IgRAAIAAhsIAOAAIACAOIABAAQAFgIAJgEQAKgFAKAAQAUAAAKAKQAKAJAAAWIAABGg");
	this.shape_663.setTransform(683.775,253.45);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#FFFFFF").s().p("AgfAqQgOgPAAgaQAAgaANgPQANgPAVgBQAUAAAMAOQAMANAAAXIAAAJIhKAAQAAATAKAKQAJAKAPAAQASAAARgHIAAAOIgQAGQgIABgLAAQgXAAgOgOgAAcgJQAAgQgHgIQgHgJgNAAQgMAAgIAJQgHAIgCAQIA4AAIAAAAg");
	this.shape_664.setTransform(671.825,253.55);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#FFFFFF").s().p("AA9A4IAAhGQAAgNgFgHQgGgGgLAAQgQgBgHAJQgIAJAAASIAAA9IgPAAIAAhGQAAgNgGgHQgFgGgMAAQgQAAgHAJQgHAJAAAVIAAA5IgRAAIAAhsIAOAAIACAOIABAAQAFgHAIgFQAJgFAKAAQAaABAHASIABAAQAFgJAJgFQAJgEAMgBQATAAAJAKQAJAJAAAWIAABGg");
	this.shape_665.setTransform(656.625,253.45);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#FFFFFF").s().p("AgfAqQgOgPAAgaQAAgaANgPQANgPAVgBQAUAAAMAOQAMANAAAXIAAAJIhKAAQAAATAKAKQAJAKAPAAQASAAARgHIAAAOIgQAGQgIABgLAAQgXAAgOgOgAAcgJQAAgQgHgIQgHgJgNAAQgMAAgIAJQgHAIgCAQIA4AAIAAAAg");
	this.shape_666.setTransform(641.475,253.55);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#FFFFFF").s().p("AgQAjIAAhAIgPAAIAAgIIAPgHIAHgXIAJAAIAAAZIAgAAIAAANIggAAIAAA/QAAAKAFAFQAEAGAJAAIAIgBIAGgBIAAAMIgHACIgKABQgfAAAAghg");
	this.shape_667.setTransform(632.025,252.375);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#FFFFFF").s().p("AgiAwQgJgIAAgQQAAgfA0gCIATgBIAAgGQAAgOgGgFQgGgHgMAAQgMAAgSAJIgFgNQAIgFAKgCQAKgDAIAAQAUAAAJAJQAKAJAAATIAABKIgNAAIgDgQIgBAAQgIAKgIAEQgIADgLAAQgQAAgKgIgAALACQgTAAgJAGQgJAFAAALQAAAKAGAEQAFAFAKAAQAOAAAJgIQAJgJAAgPIAAgKg");
	this.shape_668.setTransform(622.475,253.55);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#FFFFFF").s().p("AgQAjIAAhAIgPAAIAAgIIAPgHIAHgXIAJAAIAAAZIAgAAIAAANIggAAIAAA/QAAAKAFAFQAEAGAJAAIAIgBIAGgBIAAAMIgHACIgKABQgfAAAAghg");
	this.shape_669.setTransform(613.475,252.375);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#FFFFFF").s().p("AglAxIAAgOQAHADAKACQAJADAIAAQAMAAAHgEQAHgFAAgIQAAgGgGgFQgFgEgPgHQgQgEgGgFQgGgDgEgGQgDgFAAgIQAAgNALgIQALgIASAAQASABAQAGIgFAOQgRgHgNAAQgLAAgGAEQgGAEAAAGQAAAEACADQADAEAFACIASAJQATAGAHAGQAHAIAAAKQAAAQgMAIQgLAIgUAAQgVABgMgIg");
	this.shape_670.setTransform(605.175,253.55);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#FFFFFF").s().p("AgiAwQgJgIAAgQQAAgfA0gCIATgBIAAgGQAAgOgGgFQgGgHgMAAQgMAAgSAJIgFgNQAIgFAKgCQAKgDAIAAQAUAAAJAJQAKAJAAATIAABKIgNAAIgDgQIgBAAQgIAKgIAEQgIADgLAAQgQAAgKgIgAALACQgTAAgJAGQgJAFAAALQAAAKAGAEQAFAFAKAAQAOAAAJgIQAJgJAAgPIAAgKg");
	this.shape_671.setTransform(588.925,253.55);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#FFFFFF").s().p("AgnBIQgMgIAAgPQABgJAGgIQAGgHAMgDQgFgCgDgDQgCgFAAgEQAAgHADgDQADgFAHgEQgJgDgEgJQgGgIAAgLQAAgSAKgKQAMgJATAAQAIAAAGACIAnAAIAAAKIgVADQADADACAGQADAGgBAHQABAQgLAJQgMAKgRAAIgKgBQgLAGAAAHQAAAEAFACQADACAJAAIASAAQASAAAJAIQAKAHAAAPQAAASgOAKQgPAJgbAAQgVAAgMgIgAgcAiQgHAGABAJQAAAJAHAFQAIAFANgBQAUABAKgHQAKgGAAgLQAAgIgGgEQgFgDgPAAIgTAAQgLAAgGAFgAgTg9QgHAHABAMQAAALAGAGQAGAGAMAAQAXAAAAgXQAAgZgXAAQgMAAgGAGg");
	this.shape_672.setTransform(572.7,255.9);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#FFFFFF").s().p("AAdA4IAAhGQAAgNgGgHQgGgGgNAAQgQgBgIAJQgIAKAAAVIAAA5IgRAAIAAhsIAOAAIACAOIABAAQAFgIAJgEQAKgFAKAAQAUAAAKAKQAKAJAAAWIAABGg");
	this.shape_673.setTransform(561.025,253.45);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#FFFFFF").s().p("AgHBLIAAhsIAPAAIAABsgAgGg3QgDgCAAgGQAAgGADgCQADgDADAAQAEAAADADQADACAAAGQAAAGgDACQgDADgEAAQgDAAgDgDg");
	this.shape_674.setTransform(552.175,251.525);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#FFFFFF").s().p("AglAxIAAgOQAHADAKACQAJADAIAAQAMAAAHgEQAHgFAAgIQAAgGgGgFQgFgEgPgHQgQgEgGgFQgGgDgEgGQgDgFAAgIQAAgNALgIQALgIASAAQASABAQAGIgFAOQgRgHgNAAQgLAAgGAEQgGAEAAAGQAAAEACADQADAEAFACIASAJQATAGAHAGQAHAIAAAKQAAAQgMAIQgLAIgUAAQgVABgMgIg");
	this.shape_675.setTransform(544.775,253.55);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#FFFFFF").s().p("AgjAuQgJgJgBgVIAAhGIARAAIAABFQAAAOAGAGQAGAHANgBQARAAAIgJQAHgJAAgVIAAg4IAQAAIAABsIgNAAIgCgPIgBAAQgGAIgJAEQgJAEgKAAQgUAAgKgJg");
	this.shape_676.setTransform(533.6,253.65);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#FFFFFF").s().p("AgjBAQgMgPAAgbQAAgaAMgPQAMgPAVAAQAVAAAMAQIABAAIAAgIIAAgHIAAgsIAQAAIAACaIgOAAIgCgPIAAAAQgMAQgWAAQgVAAgMgOgAgWgJQgIALAAAVQAAAUAIALQAIALAOgBQAQAAAIgJQAHgJABgVIAAgDQgBgWgHgKQgIgKgQAAQgOAAgIALg");
	this.shape_677.setTransform(515.6,251.35);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#FFFFFF").s().p("AgfAqQgOgPAAgaQAAgaANgPQANgPAVgBQAUAAAMAOQAMANAAAXIAAAJIhKAAQAAATAKAKQAJAKAPAAQASAAARgHIAAAOIgQAGQgIABgLAAQgXAAgOgOgAAcgJQAAgQgHgIQgHgJgNAAQgMAAgIAJQgHAIgCAQIA4AAIAAAAg");
	this.shape_678.setTransform(504.025,253.55);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#FFFFFF").s().p("AgfA4IAAhsIAOAAIACAUIABAAQAGgLAIgGQAIgGALAAIAMACIgCAPIgMgCQgNAAgJALQgJALAAAQIAAA6g");
	this.shape_679.setTransform(494.85,253.45);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#FFFFFF").s().p("AgiAwQgJgIAAgQQAAgfA0gCIATgBIAAgGQAAgOgGgFQgGgHgMAAQgMAAgSAJIgFgNQAIgFAKgCQAKgDAIAAQAUAAAJAJQAKAJAAATIAABKIgNAAIgDgQIgBAAQgIAKgIAEQgIADgLAAQgQAAgKgIgAALACQgTAAgJAGQgJAFAAALQAAAKAGAEQAFAFAKAAQAOAAAJgIQAJgJAAgPIAAgKg");
	this.shape_680.setTransform(483.925,253.55);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#FFFFFF").s().p("AgHBOIAAiaIAPAAIAACag");
	this.shape_681.setTransform(476.075,251.25);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#FFFFFF").s().p("AgaAqQgMgOAAgbQAAgbAMgPQAOgPAXAAIAQACQAIABAEADIgEAOIgMgEIgMgBQghAAABAqQgBATAJALQAIALAPAAQAOAAANgGIAAAPQgKAFgRAAQgXAAgNgOg");
	this.shape_682.setTransform(468.95,253.55);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#FFFFFF").s().p("AgfAqQgOgPAAgaQAAgaANgPQANgPAVgBQAUAAAMAOQAMANAAAXIAAAJIhKAAQAAATAKAKQAJAKAPAAQASAAARgHIAAAOIgQAGQgIABgLAAQgXAAgOgOgAAcgJQAAgQgHgIQgHgJgNAAQgMAAgIAJQgHAIgCAQIA4AAIAAAAg");
	this.shape_683.setTransform(458.225,253.55);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#FFFFFF").s().p("AgjBAQgMgPAAgbQAAgaAMgPQAMgPAVAAQAWAAALAQIACAAIgBgIIgBgHIAAgsIARAAIAACaIgNAAIgCgPIgCAAQgLAQgWAAQgVAAgMgOgAgWgJQgIALAAAVQAAAUAIALQAHALAPgBQAQAAAIgJQAIgJgBgVIAAgDQABgWgIgKQgIgKgQAAQgPAAgHALg");
	this.shape_684.setTransform(445.9,251.35);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#FFFFFF").s().p("AgfAqQgOgPAAgaQAAgaANgPQANgPAVgBQAUAAAMAOQAMANAAAXIAAAJIhKAAQAAATAKAKQAJAKAPAAQASAAARgHIAAAOIgQAGQgIABgLAAQgXAAgOgOgAAcgJQAAgQgHgIQgHgJgNAAQgMAAgIAJQgHAIgCAQIA4AAIAAAAg");
	this.shape_685.setTransform(429.075,253.55);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#FFFFFF").s().p("AgPBLQgJgFgHgIIgBAAIgDAPIgMAAIAAiaIAQAAIAAAlIAAAXIAAAAQAMgQAWgBQAVAAANAPQALAPAAAaQAAAagMAPQgMAPgVAAQgKAAgIgDgAgXgKQgIAKAAAWQAAAXAIAKQAIAKAQgBQAPAAAHgLQAIgLAAgUQAAgWgIgJQgHgKgPAAQgQAAgIAJg");
	this.shape_686.setTransform(417.35,251.35);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#FFFFFF").s().p("AgQAjIAAhAIgPAAIAAgIIAPgHIAHgXIAJAAIAAAZIAgAAIAAANIggAAIAAA/QAAAKAFAFQAEAGAJAAIAIgBIAGgBIAAAMIgHACIgKABQgfAAAAghg");
	this.shape_687.setTransform(401.875,252.375);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#FFFFFF").s().p("AglAxIAAgOQAHADAKACQAJADAIAAQAMAAAHgEQAHgFAAgIQAAgGgGgFQgFgEgPgHQgQgEgGgFQgGgDgEgGQgDgFAAgIQAAgNALgIQALgIASAAQASABAQAGIgFAOQgRgHgNAAQgLAAgGAEQgGAEAAAGQAAAEACADQADAEAFACIASAJQATAGAHAGQAHAIAAAKQAAAQgMAIQgLAIgUAAQgVABgMgIg");
	this.shape_688.setTransform(393.525,253.55);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#FFFFFF").s().p("AgiAuQgLgJABgVIAAhGIAQAAIAABFQAAAOAGAGQAGAHANgBQARAAAHgJQAIgJAAgVIAAg4IARAAIAABsIgOAAIgDgPIgBAAQgEAIgKAEQgIAEgLAAQgUAAgJgJg");
	this.shape_689.setTransform(382.35,253.65);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#FFFFFF").s().p("AA9A4IAAhGQAAgNgFgHQgGgGgLAAQgQgBgHAJQgIAJAAASIAAA9IgPAAIAAhGQAAgNgGgHQgFgGgMAAQgQAAgHAJQgHAJAAAVIAAA5IgRAAIAAhsIAOAAIACAOIABAAQAFgHAIgFQAJgFAKAAQAaABAHASIABAAQAFgJAJgFQAJgEAMgBQATAAAJAKQAJAJAAAWIAABGg");
	this.shape_690.setTransform(366.675,253.45);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#FFFFFF").s().p("AgfAqQgOgPAAgaQAAgaANgPQANgPAVAAQAUAAAMANQAMAOAAAVIAAAKIhKAAQAAATAKAKQAJAKAPAAQASAAARgHIAAAPIgQAFQgIABgLAAQgXAAgOgOgAAcgJQAAgQgHgJQgHgIgNAAQgMAAgIAJQgHAJgCAPIA4AAIAAAAg");
	this.shape_691.setTransform(1134.075,223.35);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#FFFFFF").s().p("AgHBNIAAiZIAPAAIAACZg");
	this.shape_692.setTransform(1125.775,221.05);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#FFFFFF").s().p("AgQBKQgJgEgFgHIgBAAIgEANIgMAAIAAiZIARAAIAAAlIgBAXIABAAQALgQAWAAQAVgBAMAQQAMAOAAAaQAAAbgMAPQgMAOgVAAQgKAAgJgEgAgXgKQgHAKAAAWQAAAXAHAKQAIAKAQAAQAPgBAHgKQAIgLAAgWQAAgUgIgKQgHgLgQAAQgPAAgIAKg");
	this.shape_693.setTransform(1117.25,221.15);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#FFFFFF").s().p("AgiAwQgJgIAAgPQAAghA0gBIATgBIAAgHQAAgMgGgHQgGgGgMAAQgMAAgSAIIgFgMQAIgEAKgDQAKgDAIABQAUAAAJAIQAKAJAAATIAABJIgNAAIgDgPIgBAAQgIAKgIAEQgIADgLAAQgQABgKgJgAALABQgTABgJAFQgJAGAAAMQAAAJAGAEQAFAFAKAAQAOAAAJgIQAJgJAAgQIAAgJg");
	this.shape_694.setTransform(1104.675,223.35);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#FFFFFF").s().p("AgHBLIAAhsIAPAAIAABsgAgGg3QgDgCAAgGQAAgGADgCQADgDADAAQAEAAADADQADACAAAGQAAAGgDACQgDADgEAAQgDAAgDgDg");
	this.shape_695.setTransform(1096.825,221.325);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#FFFFFF").s().p("AgfA3IAAhsIAOAAIACAUIABAAQAGgKAIgGQAIgFALAAIAMABIgCAPIgMgBQgNgBgJALQgJALAAAQIAAA5g");
	this.shape_696.setTransform(1090.9,223.25);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#FFFFFF").s().p("AgiAwQgJgIAAgPQAAghA0gBIATgBIAAgHQAAgMgGgHQgGgGgMAAQgMAAgSAIIgFgMQAIgEAKgDQAKgDAIABQAUAAAJAIQAKAJAAATIAABJIgNAAIgDgPIgBAAQgIAKgIAEQgIADgLAAQgQABgKgJgAALABQgTABgJAFQgJAGAAAMQAAAJAGAEQAFAFAKAAQAOAAAJgIQAJgJAAgQIAAgJg");
	this.shape_697.setTransform(1079.975,223.35);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#FFFFFF").s().p("AgJA2IgphsIASAAIAXBAIAJAeIAAAAIAHgXIAahHIASAAIgpBsg");
	this.shape_698.setTransform(1069.55,223.35);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#FFFFFF").s().p("AgfAqQgOgPAAgaQAAgaANgPQANgPAVAAQAUAAAMANQAMAOAAAVIAAAKIhKAAQAAATAKAKQAJAKAPAAQASAAARgHIAAAPIgQAFQgIABgLAAQgXAAgOgOgAAcgJQAAgQgHgJQgHgIgNAAQgMAAgIAJQgHAJgCAPIA4AAIAAAAg");
	this.shape_699.setTransform(1053.525,223.35);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#FFFFFF").s().p("AAdBNIAAhGQAAgNgGgGQgGgHgNAAQgQAAgIAKQgIAJAAAVIAAA4IgRAAIAAiZIARAAIAAAuIgBAPIABAAQAFgJAJgEQAJgEAKAAQAUAAALAJQAKAKAAATIAABHg");
	this.shape_700.setTransform(1041.625,221.05);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#FFFFFF").s().p("AgIBJIAAiCIguAAIAAgPIBsAAIAAAPIguAAIAACCg");
	this.shape_701.setTransform(1029.65,221.525);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#FFFFFF").s().p("AgHAKQgEgDAAgHQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAGgDAEQgDAEgGAAQgEgBgDgDg");
	this.shape_702.setTransform(1016.05,227.75);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#FFFFFF").s().p("AgfAqQgOgPAAgaQAAgaANgPQANgPAVAAQAUAAAMANQAMAOAAAVIAAAKIhKAAQAAATAKAKQAJAKAPAAQASAAARgHIAAAPIgQAFQgIABgLAAQgXAAgOgOgAAcgJQAAgQgHgJQgHgIgNAAQgMAAgIAJQgHAJgCAPIA4AAIAAAAg");
	this.shape_703.setTransform(1007.725,223.35);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#FFFFFF").s().p("AgjBAQgMgPAAgbQAAgaAMgOQAMgQAVABQAWgBALARIABAAIAAgIIgBgIIAAgsIARAAIAACZIgOAAIgCgOIgBAAQgLAQgWAAQgVAAgMgOgAgWgIQgIAKAAAUQAAAVAIALQAHALAPAAQAQAAAIgJQAHgKAAgUIAAgEQAAgWgHgKQgIgKgQAAQgOAAgIAMg");
	this.shape_704.setTransform(995.4,221.15);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#FFFFFF").s().p("AgaAyQgLgIgGgMQgGgNAAgRQAAgaANgOQANgQAXABQAXgBAOAQQANAPAAAZQAAAbgNAPQgOAOgXAAQgOAAgMgGgAgYgfQgIAKAAAVQAAAUAIAMQAJAKAPABQAQAAAJgLQAIgLAAgVQAAgUgIgLQgJgLgQAAQgQAAgIALg");
	this.shape_705.setTransform(983.325,223.35);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#FFFFFF").s().p("AgaAqQgNgPABgbQgBgaANgOQAOgQAXABIAQABQAIACAFACIgGAOIgLgDIgMgCQghAAABApQgBAVAJALQAIAKAPAAQANAAAOgGIAAAPQgKAGgRgBQgXAAgNgOg");
	this.shape_706.setTransform(972.6,223.35);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#FFFFFF").s().p("AgfAqQgOgPAAgaQAAgaANgPQANgPAVAAQAUAAAMANQAMAOAAAVIAAAKIhKAAQAAATAKAKQAJAKAPAAQASAAARgHIAAAPIgQAFQgIABgLAAQgXAAgOgOgAAcgJQAAgQgHgJQgHgIgNAAQgMAAgIAJQgHAJgCAPIA4AAIAAAAg");
	this.shape_707.setTransform(956.575,223.35);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#FFFFFF").s().p("AAdBNIAAhGQAAgNgGgGQgGgHgNAAQgQAAgIAKQgIAJAAAVIAAA4IgRAAIAAiZIARAAIAAAuIgBAPIABAAQAFgJAJgEQAJgEAKAAQAUAAALAJQAKAKAAATIAABHg");
	this.shape_708.setTransform(944.675,221.05);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#FFFFFF").s().p("AgQAjIAAhAIgPAAIAAgIIAPgHIAHgXIAJAAIAAAZIAgAAIAAANIggAAIAAA/QAAAKAFAFQAEAGAJAAIAIgBIAGgBIAAAMIgHACIgKABQgfAAAAghg");
	this.shape_709.setTransform(934.675,222.175);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#FFFFFF").s().p("AAdA3IAAhFQAAgOgGgGQgGgHgNAAQgQABgIAIQgIAKAAAVIAAA4IgRAAIAAhsIAOAAIACAQIABAAQAFgJAJgEQAKgEAKAAQAUAAAKAJQAKAKAAAUIAABGg");
	this.shape_710.setTransform(919.675,223.25);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#FFFFFF").s().p("AgjAuQgJgKgBgUIAAhHIARAAIAABGQAAANAGAHQAGAGANABQARAAAIgJQAHgKAAgWIAAg4IAQAAIAABsIgNAAIgCgOIgBAAQgGAIgJAEQgJAFgKgBQgUABgKgKg");
	this.shape_711.setTransform(907.1,223.45);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#FFFFFF").s().p("AgfA3IAAhsIAOAAIACAUIABAAQAGgKAIgGQAIgFALAAIAMABIgCAPIgMgBQgNgBgJALQgJALAAAQIAAA5g");
	this.shape_712.setTransform(897.5,223.25);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#FFFFFF").s().p("AgjBAQgMgPAAgbQAAgaAMgOQAMgQAVABQAVgBAMARIACAAIgBgIIAAgIIAAgsIAQAAIAACZIgNAAIgCgOIgBAAQgMAQgWAAQgVAAgMgOgAgWgIQgIAKAAAUQAAAVAIALQAIALAOAAQAQAAAIgJQAIgKAAgUIAAgEQAAgWgIgKQgIgKgQAAQgPAAgHAMg");
	this.shape_713.setTransform(880.8,221.15);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#FFFFFF").s().p("AAdA3IAAhFQAAgOgGgGQgGgHgNAAQgQABgIAIQgIAKAAAVIAAA4IgRAAIAAhsIAOAAIACAQIABAAQAFgJAJgEQAKgEAKAAQAUAAAKAJQAKAKAAAUIAABGg");
	this.shape_714.setTransform(868.675,223.25);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#FFFFFF").s().p("AgiAwQgJgIAAgPQAAghA0gBIATgBIAAgHQAAgMgGgHQgGgGgMAAQgMAAgSAIIgFgMQAIgEAKgDQAKgDAIABQAUAAAJAIQAKAJAAATIAABJIgNAAIgDgPIgBAAQgIAKgIAEQgIADgLAAQgQABgKgJgAALABQgTABgJAFQgJAGAAAMQAAAJAGAEQAFAFAKAAQAOAAAJgIQAJgJAAgQIAAgJg");
	this.shape_715.setTransform(856.375,223.35);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#FFFFFF").s().p("AgvBQIAAidIAOAAIACAPIAAAAQAHgJAJgEQAIgEAKAAQAWAAAMAOQALAQAAAbQAAAZgMAPQgMAPgVAAQgKAAgIgEQgJgEgHgIIgBAAIABASIAAAtgAgXg4QgHAKgBATIAAAFQABAWAHAJQAIAKAQAAQAOAAAIgMQAIgKAAgUQAAgVgIgKQgIgLgOAAQgRAAgHAJg");
	this.shape_716.setTransform(839.8,225.7);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#FFFFFF").s().p("AgjAuQgJgKgBgUIAAhHIARAAIAABGQAAANAGAHQAGAGANABQARAAAIgJQAHgKAAgWIAAg4IAQAAIAABsIgNAAIgCgOIgBAAQgGAIgIAEQgKAFgKgBQgUABgKgKg");
	this.shape_717.setTransform(827,223.45);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#FFFFFF").s().p("AgQAjIAAhAIgPAAIAAgIIAPgHIAHgXIAJAAIAAAZIAgAAIAAANIggAAIAAA/QAAAKAFAFQAEAGAJAAIAIgBIAGgBIAAAMIgHACIgKABQgfAAAAghg");
	this.shape_718.setTransform(811.825,222.175);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#FFFFFF").s().p("AgfAqQgOgPAAgaQAAgaANgPQANgPAVAAQAUAAAMANQAMAOAAAVIAAAKIhKAAQAAATAKAKQAJAKAPAAQASAAARgHIAAAPIgQAFQgIABgLAAQgXAAgOgOgAAcgJQAAgQgHgJQgHgIgNAAQgMAAgIAJQgHAJgCAPIA4AAIAAAAg");
	this.shape_719.setTransform(802.675,223.35);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#FFFFFF").s().p("AglAyIAAgPQAHAEAKACQAJACAIAAQAMAAAHgEQAHgFAAgIQAAgHgGgDQgFgFgPgGQgQgFgGgEQgGgFgEgFQgDgFAAgIQAAgNALgIQALgHASAAQASgBAQAIIgFANQgRgHgNAAQgLAAgGAEQgGAEAAAGQAAAFACADQADACAFADIASAIQATAHAHAHQAHAHAAALQAAAPgMAIQgLAJgUgBQgVAAgMgGg");
	this.shape_720.setTransform(792.125,223.35);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#FFFFFF").s().p("AgaAyQgLgIgGgMQgGgNAAgRQAAgaANgOQANgQAXABQAXgBAOAQQANAPAAAZQAAAbgNAPQgOAOgXAAQgOAAgMgGgAgYgfQgIAKAAAVQAAAUAIAMQAJAKAPABQAQAAAJgLQAIgLAAgVQAAgUgIgLQgJgLgQAAQgQAAgIALg");
	this.shape_721.setTransform(775.775,223.35);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#FFFFFF").s().p("AgQAjIAAhAIgPAAIAAgIIAPgHIAHgXIAJAAIAAAZIAgAAIAAANIggAAIAAA/QAAAKAFAFQAEAGAJAAIAIgBIAGgBIAAAMIgHACIgKABQgfAAAAghg");
	this.shape_722.setTransform(765.925,222.175);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#FFFFFF").s().p("AgjBAQgMgPAAgbQAAgaAMgOQAMgQAVABQAWgBALARIABAAIAAgIIAAgIIAAgsIAQAAIAACZIgOAAIgCgOIAAAAQgMAQgWAAQgVAAgMgOgAgWgIQgIAKAAAUQAAAVAIALQAHALAPAAQAQAAAIgJQAHgKABgUIAAgEQgBgWgHgKQgIgKgQAAQgOAAgIAMg");
	this.shape_723.setTransform(750.6,221.15);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#FFFFFF").s().p("AgfAqQgOgPAAgaQAAgaANgPQANgPAVAAQAUAAAMANQAMAOAAAVIAAAKIhKAAQAAATAKAKQAJAKAPAAQASAAARgHIAAAPIgQAFQgIABgLAAQgXAAgOgOgAAcgJQAAgQgHgJQgHgIgNAAQgMAAgIAJQgHAJgCAPIA4AAIAAAAg");
	this.shape_724.setTransform(739.025,223.35);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#FFFFFF").s().p("AgfA3IAAhsIAOAAIACAUIABAAQAGgKAIgGQAIgFALAAIAMABIgCAPIgMgBQgNgBgJALQgJALAAAQIAAA5g");
	this.shape_725.setTransform(729.85,223.25);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#FFFFFF").s().p("AgHBLIAAhsIAPAAIAABsgAgGg3QgDgCAAgGQAAgGADgCQADgDADAAQAEAAADADQADACAAAGQAAAGgDACQgDADgEAAQgDAAgDgDg");
	this.shape_726.setTransform(722.425,221.325);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#FFFFFF").s().p("AgjAuQgJgKgBgUIAAhHIARAAIAABGQAAANAGAHQAGAGANABQARAAAIgJQAHgKAAgWIAAg4IAQAAIAABsIgNAAIgCgOIgBAAQgGAIgJAEQgJAFgKgBQgUABgKgKg");
	this.shape_727.setTransform(713.6,223.45);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#FFFFFF").s().p("AAfBQIAAguIABgSIgBAAQgLARgWAAQgWAAgLgPQgMgOAAgaQAAgbAMgPQAMgPAVAAQAWAAALARIABAAIADgPIANAAIAACdgAgWg2QgIAMAAAUQAAAUAIAKQAIALAOAAQAQAAAHgJQAIgIAAgVIAAgDQABgXgJgKQgHgLgQABQgPAAgHALg");
	this.shape_728.setTransform(700.85,225.7);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#FFFFFF").s().p("AgfAqQgOgPAAgaQAAgaANgPQANgPAVAAQAUAAAMANQAMAOAAAVIAAAKIhKAAQAAATAKAKQAJAKAPAAQASAAARgHIAAAPIgQAFQgIABgLAAQgXAAgOgOgAAcgJQAAgQgHgJQgHgIgNAAQgMAAgIAJQgHAJgCAPIA4AAIAAAAg");
	this.shape_729.setTransform(689.275,223.35);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#FFFFFF").s().p("AgfA3IAAhsIAOAAIACAUIABAAQAGgKAIgGQAIgFALAAIAMABIgCAPIgMgBQgNgBgJALQgJALAAAQIAAA5g");
	this.shape_730.setTransform(680.15,223.25);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#FFFFFF").s().p("AglAyIAAgPQAHAEAKACQAJACAIAAQAMAAAHgEQAHgFAAgIQAAgHgGgDQgFgFgPgGQgQgFgGgEQgGgFgEgFQgDgFAAgIQAAgNALgIQALgHASAAQASgBAQAIIgFANQgRgHgNAAQgLAAgGAEQgGAEAAAGQAAAFACADQADACAFADIASAIQATAHAHAHQAHAHAAALQAAAPgMAIQgLAJgUgBQgVAAgMgGg");
	this.shape_731.setTransform(665.175,223.35);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#FFFFFF").s().p("AgfAqQgOgPAAgaQAAgaANgPQANgPAVAAQAUAAAMANQAMAOAAAVIAAAKIhKAAQAAATAKAKQAJAKAPAAQASAAARgHIAAAPIgQAFQgIABgLAAQgXAAgOgOgAAcgJQAAgQgHgJQgHgIgNAAQgMAAgIAJQgHAJgCAPIA4AAIAAAAg");
	this.shape_732.setTransform(654.625,223.35);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#FFFFFF").s().p("AAdA3IAAhFQAAgOgGgGQgGgHgNAAQgQABgIAIQgIAKAAAVIAAA4IgRAAIAAhsIAOAAIACAQIABAAQAFgJAJgEQAKgEAKAAQAUAAAKAJQAKAKAAAUIAABGg");
	this.shape_733.setTransform(642.675,223.25);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#FFFFFF").s().p("AgHBLIAAhsIAPAAIAABsgAgGg3QgDgCAAgGQAAgGADgCQADgDADAAQAEAAADADQADACAAAGQAAAGgDACQgDADgEAAQgDAAgDgDg");
	this.shape_734.setTransform(633.825,221.325);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#FFFFFF").s().p("AgHBNIAAiZIAPAAIAACZg");
	this.shape_735.setTransform(628.725,221.05);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#FFFFFF").s().p("AgiAwQgJgIAAgPQAAghA0gBIATgBIAAgHQAAgMgGgHQgGgGgMAAQgMAAgSAIIgFgMQAIgEAKgDQAKgDAIABQAUAAAJAIQAKAJAAATIAABJIgNAAIgDgPIgBAAQgIAKgIAEQgIADgLAAQgQABgKgJgAALABQgTABgJAFQgJAGAAAMQAAAJAGAEQAFAFAKAAQAOAAAJgIQAJgJAAgQIAAgJg");
	this.shape_736.setTransform(614.875,223.35);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#FFFFFF").s().p("AgeA3IAAhsIANAAIACAUIABAAQAGgKAIgGQAIgFALAAIAMABIgCAPIgMgBQgNgBgIALQgKALAAAQIAAA5g");
	this.shape_737.setTransform(606.15,223.25);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#FFFFFF").s().p("AgQAjIAAhAIgPAAIAAgIIAPgHIAHgXIAJAAIAAAZIAgAAIAAANIggAAIAAA/QAAAKAFAFQAEAGAJAAIAIgBIAGgBIAAAMIgHACIgKABQgfAAAAghg");
	this.shape_738.setTransform(597.575,222.175);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#FFFFFF").s().p("AAeA2IgegsIgeAsIgTAAIApg3Igng1IATAAIAcAqIAdgqIATAAIgmA1IAnA3g");
	this.shape_739.setTransform(588.7,223.35);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#FFFFFF").s().p("AgfAqQgOgPAAgaQAAgaANgPQANgPAVAAQAUAAAMANQAMAOAAAVIAAAKIhKAAQAAATAKAKQAJAKAPAAQASAAARgHIAAAPIgQAFQgIABgLAAQgXAAgOgOgAAcgJQAAgQgHgJQgHgIgNAAQgMAAgIAJQgHAJgCAPIA4AAIAAAAg");
	this.shape_740.setTransform(577.725,223.35);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#FFFFFF").s().p("AgfAqQgOgPAAgaQAAgaANgPQANgPAVAAQAUAAAMANQAMAOAAAVIAAAKIhKAAQAAATAKAKQAJAKAPAAQASAAARgHIAAAPIgQAFQgIABgLAAQgXAAgOgOgAAcgJQAAgQgHgJQgHgIgNAAQgMAAgIAJQgHAJgCAPIA4AAIAAAAg");
	this.shape_741.setTransform(561.075,223.35);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#FFFFFF").s().p("AA9A3IAAhGQAAgNgFgGQgGgHgLAAQgQABgHAIQgIAJAAASIAAA8IgPAAIAAhGQAAgNgGgGQgFgHgMAAQgQAAgHAKQgHAJAAAVIAAA4IgRAAIAAhsIAOAAIACAQIABAAQAFgJAIgEQAJgEAKAAQAaAAAHASIABAAQAFgIAJgGQAJgEAMAAQATAAAJAJQAJAKAAAUIAABGg");
	this.shape_742.setTransform(545.875,223.25);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#FFFFFF").s().p("AgaAyQgLgIgGgMQgGgNAAgRQAAgaANgOQANgQAXABQAXgBAOAQQANAPAAAZQAAAbgNAPQgOAOgXAAQgOAAgMgGgAgYgfQgIAKAAAVQAAAUAIAMQAJAKAPABQAQAAAJgLQAIgLAAgVQAAgUgIgLQgJgLgQAAQgQAAgIALg");
	this.shape_743.setTransform(530.225,223.35);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#FFFFFF").s().p("AglAyIAAgPQAHAEAKACQAJACAIAAQAMAAAHgEQAHgFAAgIQAAgHgGgDQgFgFgPgGQgQgFgGgEQgGgFgEgFQgDgFAAgIQAAgNALgIQALgHASAAQASgBAQAIIgFANQgRgHgNAAQgLAAgGAEQgGAEAAAGQAAAFACADQADACAFADIASAIQATAHAHAHQAHAHAAALQAAAPgMAIQgLAJgUgBQgVAAgMgGg");
	this.shape_744.setTransform(519.225,223.35);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#FFFFFF").s().p("AgfAqQgOgPAAgaQAAgaANgPQANgPAVAAQAUAAAMANQAMAOAAAVIAAAKIhKAAQAAATAKAKQAJAKAPAAQASAAARgHIAAAPIgQAFQgIABgLAAQgXAAgOgOgAAcgJQAAgQgHgJQgHgIgNAAQgMAAgIAJQgHAJgCAPIA4AAIAAAAg");
	this.shape_745.setTransform(503.425,223.35);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#FFFFFF").s().p("AgeA3IAAhsIANAAIACAUIABAAQAGgKAIgGQAIgFAKAAIAOABIgDAPIgMgBQgNgBgIALQgKALAAAQIAAA5g");
	this.shape_746.setTransform(494.25,223.25);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#FFFFFF").s().p("AgiAwQgJgIAAgPQAAghA0gBIATgBIAAgHQAAgMgGgHQgGgGgMAAQgMAAgSAIIgFgMQAIgEAKgDQAKgDAIABQAUAAAJAIQAKAJAAATIAABJIgNAAIgDgPIgBAAQgIAKgIAEQgIADgLAAQgQABgKgJgAALABQgTABgJAFQgJAGAAAMQAAAJAGAEQAFAFAKAAQAOAAAJgIQAJgJAAgQIAAgJg");
	this.shape_747.setTransform(483.325,223.35);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#FFFFFF").s().p("AgfAqQgOgPAAgaQAAgaANgPQANgPAVAAQAUAAAMANQAMAOAAAVIAAAKIhKAAQAAATAKAKQAJAKAPAAQASAAARgHIAAAPIgQAFQgIABgLAAQgXAAgOgOgAAcgJQAAgQgHgJQgHgIgNAAQgMAAgIAJQgHAJgCAPIA4AAIAAAAg");
	this.shape_748.setTransform(467.125,223.35);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#FFFFFF").s().p("AgfA3IAAhsIAOAAIACAUIABAAQAGgKAIgGQAIgFALAAIAMABIgCAPIgMgBQgNgBgJALQgJALAAAQIAAA5g");
	this.shape_749.setTransform(457.95,223.25);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#FFFFFF").s().p("AgfAqQgOgPAAgaQAAgaANgPQANgPAVAAQAUAAAMANQAMAOAAAVIAAAKIhKAAQAAATAKAKQAJAKAPAAQASAAARgHIAAAPIgQAFQgIABgLAAQgXAAgOgOgAAcgJQAAgQgHgJQgHgIgNAAQgMAAgIAJQgHAJgCAPIA4AAIAAAAg");
	this.shape_750.setTransform(447.425,223.35);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#FFFFFF").s().p("AAdBNIAAhGQAAgNgGgGQgGgHgNAAQgQAAgIAKQgIAJAAAVIAAA4IgRAAIAAiZIARAAIAAAuIgBAPIABAAQAFgJAJgEQAJgEAKAAQAUAAALAJQAKAKAAATIAABHg");
	this.shape_751.setTransform(435.475,221.05);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#FFFFFF").s().p("AgQAjIAAhAIgPAAIAAgIIAPgHIAHgXIAJAAIAAAZIAgAAIAAANIggAAIAAA/QAAAKAFAFQAEAGAJAAIAIgBIAGgBIAAAMIgHACIgKABQgfAAAAghg");
	this.shape_752.setTransform(425.475,222.175);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#FFFFFF").s().p("AgGAxIAAgqIgpAAIAAgNIApAAIAAgrIANAAIAAArIApAAIAAANIgpAAIAAAqg");
	this.shape_753.setTransform(410.875,221.6);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#FFFFFF").s().p("AgGAxIAAgqIgpAAIAAgNIApAAIAAgrIANAAIAAArIApAAIAAANIgpAAIAAAqg");
	this.shape_754.setTransform(399.225,221.6);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#FFFFFF").s().p("AgkA3QgSgTAAgkQAAgWAJgRQAIgRAPgJQARgJAUAAQAXAAARAIIgHAPQgRgIgQAAQgXAAgOAQQgOAQAAAbQAAAdANAPQAOAQAXAAQAQAAATgGIAAAPQgPAGgWAAQgfAAgRgUg");
	this.shape_755.setTransform(387.3,221.525);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#FFFFFF").s().p("AAdA3IAAhFQAAgOgGgGQgGgHgNAAQgQABgIAIQgIAKAAAVIAAA4IgRAAIAAhsIAOAAIACAQIABAAQAFgJAJgEQAKgEAKAAQAUAAAKAJQAKAKAAAUIAABGg");
	this.shape_756.setTransform(369.125,223.25);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#FFFFFF").s().p("AgHBJIAAiRIAPAAIAACRg");
	this.shape_757.setTransform(360,221.525);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#FFFFFF").s().p("AgzBBIAAgaQAZAMAWAAQAbAAAAgRQAAgGgDgDQgEgEgHgEIgTgJQgYgIgIgKQgJgJAAgPQAAgTAOgKQAPgKAZAAQAYAAAXAKIgJAXQgYgJgPAAQgXAAAAANQAAAHAGAFQAGAEAUAIQARAHAIAFQAIAGAFAHQADAHAAALQAAAVgPALQgPALgbAAQgdAAgRgJg");
	this.shape_758.setTransform(521.9,171.575);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#FFFFFF").s().p("AgwA+QgLgLAAgVQAAgWAQgKQAQgLAhgBIAZgBIAAgHQgBgOgGgHQgHgHgMAAQgLAAgJAEIgUAHIgKgWQAMgGANgDQAOgDALAAQAcAAAOAMQAOAMgBAZIAABfIgVAAIgGgUIgBAAQgKANgLAFQgLAFgPAAQgVAAgMgMgAAMAEQgVABgJAGQgKAGAAAOQAAAJAGAFQAFAGAMAAQAPAAALgKQAJgJAAgQIAAgNg");
	this.shape_759.setTransform(468.35,171.575);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#FFFFFF").s().p("AgQBeIhBi7IAfAAIAoB0IAHAWIADATIAGgWIAFgUIAnhzIAgAAIhCC7g");
	this.shape_760.setTransform(419,169.275);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#FFFFFF").s().p("AgLBAIAAg0IgzAAIAAgWIAzAAIAAg1IAXAAIAAA1IAzAAIAAAWIgzAAIAAA0g");
	this.shape_761.setTransform(381.4,169.375);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#FFFFFF").s().p("AgQBPQgKgEgGgJIgBAAIgFAPIgMAAIAAijIASAAIAAAoIgBAYIABAAQAMgRAXAAQAXAAANAPQAMAPAAAcQAAAcgNAQQgNAQgWAAQgLAAgIgEgAgYgKQgJAJABAYQgBAYAJALQAIALARAAQAQAAAIgNQAHgLAAgWQAAgXgHgKQgIgLgQAAQgSAAgHALg");
	this.shape_762.setTransform(668.25,690.7);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgRAXAAQAWAAANAPQANAPAAAcQAAAcgNAQQgNAQgWAAQgKAAgKgEgAgZgKQgHAJgBAYQABAYAHALQAJALAQAAQARAAAIgNQAIgLAAgWQAAgXgIgKQgIgLgRAAQgQAAgJALg");
	this.shape_763.setTransform(364.45,690.7);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgRAXAAQAWAAANAPQANAQAAAbQAAAdgNAPQgNAQgWAAQgKAAgKgEgAgZgLQgIALAAAXQAAAYAIALQAJAKARAAQAQAAAIgLQAIgMAAgWQAAgWgIgLQgIgLgQAAQgRAAgJAKg");
	this.shape_764.setTransform(983.65,658.9);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgRAXAAQAWAAANAPQANAQAAAbQAAAdgNAPQgMAQgXAAQgKAAgKgEgAgZgLQgHALgBAXQABAYAHALQAJAKAQAAQARAAAIgLQAIgMAAgWQAAgWgIgLQgIgLgRAAQgQAAgJAKg");
	this.shape_765.setTransform(852.45,658.9);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQAMgPAXAAQAXAAAMAQIACAAIgCgIIAAgIIAAgvIASAAIAACjIgOAAIgDgPIgBAAQgMARgXAAQgXAAgMgQgAgYgJQgIALAAAVQAAAXAIALQAJALAPAAQARABAJgLQAHgJAAgWIAAgEQABgXgJgLQgIgKgRAAQgPAAgJAMg");
	this.shape_766.setTransform(746.3,658.9);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#FFFFFF").s().p("AgQBPQgKgEgHgJIAAAAIgFAPIgMAAIAAijIARAAIAAAoIAAAYIAAAAQANgRAXAAQAWAAAOAPQAMAQAAAbQAAAdgNAPQgNAQgWAAQgLAAgIgEgAgYgLQgJALAAAXQAAAYAJALQAIAKARAAQAQAAAIgLQAIgMgBgWQABgWgIgLQgIgLgQAAQgSAAgHAKg");
	this.shape_767.setTransform(644.15,658.9);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#FFFFFF").s().p("AAhBVIAAgyIACgSIgCAAQgMASgYAAQgWAAgNgQQgMgQAAgbQAAgcANgQQAMgQAXAAQAWAAANASIACAAIACgQIAOAAIAACngAgXg5QgJAMAAAVQAAAWAJALQAIALAPAAQAQAAAIgJQAJgKAAgVIAAgEQABgYgJgLQgIgKgRAAQgPAAgIAMg");
	this.shape_768.setTransform(819.65,600.125);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQATAAASgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_769.setTransform(789.75,597.625);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#FFFFFF").s().p("AgpBMQgMgIAAgQQAAgKAGgIQAHgIANgCQgFgCgDgFQgDgEAAgFQAAgHAEgDQADgFAHgFQgJgDgGgJQgFgJAAgLQAAgTALgLQALgKAWAAQAHAAAHACIApAAIAAALIgWADIAFAJQADAGAAAIQAAARgMAKQgLAKgUAAIgKgBQgLAGAAAIQAAAFAFACQADACAKAAIATAAQATAAAKAIQAKAIAAAPQAAATgPALQgPAKgdAAQgXAAgMgJgAgeAkQgHAGABAKQAAAKAHAEQAIAFAPAAQAVAAALgGQALgHAAgLQAAgKgHgDQgFgEgQAAIgVAAQgLAAgHAGgAgVhBQgGAHAAANQAAAMAHAHQAGAGANAAQAYAAAAgZQAAgagZAAQgLAAgIAGg");
	this.shape_770.setTransform(751.25,600.125);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQANgPAWAAQAWAAANARIACAAIgBgJIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgWAAgNgQgAgYgJQgHALgBAWQABAWAHALQAIAMAQAAQARAAAJgLQAHgJABgWIAAgDQAAgYgJgKQgIgLgRAAQgQAAgIAMg");
	this.shape_771.setTransform(690.8,595.3);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_772.setTransform(678.55,597.625);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQABgKAGgIQAHgIAMgCQgEgCgDgFQgDgEAAgFQAAgHADgDQAEgFAHgFQgJgDgGgJQgFgJgBgLQAAgTAMgLQAMgKAUAAQAIAAAIACIAnAAIAAALIgVADIAGAJQACAGAAAIQAAARgMAKQgLAKgUAAIgKgBQgLAGABAIQAAAFADACQAEACAKAAIAUAAQASAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgGAGgBAKQAAAKAIAEQAJAFAOAAQAVAAALgGQALgHgBgLQAAgKgFgDQgGgEgRAAIgUAAQgLAAgHAGgAgVhBQgGAHAAANQAAAMAHAHQAGAGANAAQAZAAgBgZQAAgagZAAQgLAAgIAGg");
	this.shape_773.setTransform(653.3,600.125);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgGgJIgBAAIgFAPIgMAAIAAijIASAAIAAAoIgBAYIABAAQAMgRAXAAQAXAAANAPQAMAPAAAcQAAAcgNAQQgMAQgXAAQgLAAgJgEgAgYgKQgIAJAAAYQAAAZAIAKQAIALAQAAQARAAAIgNQAHgLAAgWQAAgXgHgKQgIgLgRAAQgRAAgHALg");
	this.shape_774.setTransform(558.8,595.3);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgEAAgDgDg");
	this.shape_775.setTransform(537.15,595.475);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAYBEIAKAfIAAAAIAIgXIAbhMIATAAIgsBzg");
	this.shape_776.setTransform(405.7,597.625);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#FFFFFF").s().p("AgQBJIAGgbIAFgaIASAAIACADIgIAYIgKAagAgEgwQgDgDAAgHQAAgOALAAQANAAAAAOQAAAHgDADQgEAEgGAAQgFAAgDgEg");
	this.shape_777.setTransform(1009.075,337.525);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAXABAMARIACAAIgBgJIAAgIIAAgvIARAAIAACjIgOAAIgDgQIAAAAQgNASgXAAQgXAAgMgPgAgYgJQgIALAAAWQABAWAHALQAJAMAPAAQARgBAJgJQAHgKABgWIAAgDQAAgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_778.setTransform(994.35,333.95);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#FFFFFF").s().p("AgyAIIAAgJIBlgzIAAAQIhSAmIBSAjIAAAQg");
	this.shape_779.setTransform(945.525,334.225);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#FFFFFF").s().p("AgyAIIAAgJIBlgzIAAAQIhSAmIBSAjIAAAQg");
	this.shape_780.setTransform(933.225,334.225);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQANgQAWAAQAWABANARIACAAIgBgJIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgWAAgNgPgAgYgJQgHALAAAWQAAAWAHALQAIAMAQAAQARgBAIgJQAJgKAAgWIAAgDQAAgYgJgKQgIgLgRAAQgQAAgIAMg");
	this.shape_781.setTransform(914.55,333.95);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#FFFFFF").s().p("AgyAIIAAgJIBlgzIAAAQIhSAmIBSAjIAAAQg");
	this.shape_782.setTransform(865.775,334.225);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#FFFFFF").s().p("AgyAIIAAgJIBlgzIAAAQIhSAmIBSAjIAAAQg");
	this.shape_783.setTransform(853.475,334.225);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAJAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_784.setTransform(763.7,335.025);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgHgcIgBAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAGAfIABAAIAEgPIAEgQIAWhBIASAAIAVBBQAFATADAMIABAAIABgMIAXhUIASAAIghBzg");
	this.shape_785.setTransform(746.1,336.275);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQANgQAWAAQAWABANARIABAAIgBgJIAAgIIAAgvIASAAIAACjIgPAAIgCgQIgBAAQgMASgXAAQgWAAgNgPgAgXgJQgJALABAWQgBAWAJALQAHAMAQAAQARgBAIgJQAJgKgBgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_786.setTransform(714.95,333.95);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAXABAMARIACAAIgBgJIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgXAAgMgPgAgYgJQgHALgBAWQABAWAHALQAJAMAPAAQARgBAJgJQAHgKABgWIAAgDQAAgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_787.setTransform(670.9,333.95);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQAMAAAIgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgQgFgGgFQgHgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgLAAgHAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgXAAgNgHg");
	this.shape_788.setTransform(628.75,336.275);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAJAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_789.setTransform(619.7,335.025);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAIgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_790.setTransform(567.85,335.025);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgRAAgIAJQgIAKAAATIAABAIgQAAIAAhKQAAgOgFgHQgHgHgMAAQgQAAgIAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIADAQIABAAQAEgIAKgFQAIgFAMAAQAbAAAHAUIABAAQAFgJAKgGQAKgFANAAQATAAAJAKQAKAKAAAWIAABLg");
	this.shape_791.setTransform(528.9,336.175);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_792.setTransform(483.25,335.025);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#FFFFFF").s().p("AADAaIAHgaIAFgZIATAAIABACIgHAXIgLAagAgiAaQAHgdAEgWIATAAIABACIgHAXIgLAag");
	this.shape_793.setTransform(459.875,329.275);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAOAAIADAQIABAAQAHgKAIgEQAJgEALAAQAXAAANAQQAMAPAAAdQAAAbgNAQQgMAQgXAAQgLAAgJgEQgJgEgGgJIgBAAIABATIAAAwgAgYg7QgIAKAAAVIAAAEQAAAYAIAKQAIAKAQAAQAQAAAIgMQAJgLgBgVQABgWgJgLQgIgMgQAAQgRAAgHAKg");
	this.shape_794.setTransform(414.8,338.775);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#FFFFFF").s().p("AAFAaIgCgCQAGgXANgaIANAAIgGAaIgFAZgAghAaIgBgCIAHgYIALgZIANAAQgHAZgDAag");
	this.shape_795.setTransform(404.075,329.275);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#FFFFFF").s().p("Ag1BeQgQgKAAgUQAAgNAJgJQAIgJAPgDQgGgDgEgFQgEgGAAgGQAAgIAFgFQAEgGAJgFQgLgFgHgKQgHgLAAgPQAAgXAPgNQAPgMAbAAIALABIAKABIAyAAIAAARIgZAEQADAFADAGQACAHAAAHQAAAWgQANQgOANgaAAIgNgBQgKAGABAHQgBAFAGACQAEADAMAAIAYAAQAXAAANAKQAMAKAAATQAAAYgUANQgUANgkAAQgeAAgPgKgAgiAuQgIAGAAALQABAKAIAFQAJAFAQAAQAYAAAMgHQAMgHAAgMQAAgJgGgEQgHgEgSAAIgWAAQgNAAgIAGgAgWhMQgGAHAAAOQAAAOAGAHQAIAHAMAAQAaAAAAgcQAAgOgHgHQgGgIgNAAQgNAAgHAIg");
	this.shape_796.setTransform(504.4,272.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_270,p:{x:366.225,y:359.275}},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267,p:{x:406.575,y:358.675}},{t:this.shape_266,p:{y:361.575}},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262,p:{x:499.975}},{t:this.shape_261,p:{x:525.175}},{t:this.shape_260,p:{x:545.325,y:361.575}},{t:this.shape_259,p:{x:561.325}},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252,p:{x:430.35,y:427.975}},{t:this.shape_251,p:{x:442.975,y:427.875}},{t:this.shape_250,p:{x:453.25,y:426.725}},{t:this.shape_249,p:{x:462.3,y:427.975}},{t:this.shape_248},{t:this.shape_247,p:{x:492.675,y:427.875}},{t:this.shape_246,p:{x:510.375,y:427.975}},{t:this.shape_245,p:{x:527.55,y:427.975}},{t:this.shape_244,p:{x:535.35,y:425.825}},{t:this.shape_243,p:{x:544.725,y:427.875}},{t:this.shape_242,p:{x:557.1,y:430.475}},{t:this.shape_241,p:{x:565.825,y:425.55}},{t:this.shape_240,p:{x:574.65,y:427.975}},{t:this.shape_239,p:{x:588.925,y:425.55}},{t:this.shape_238,p:{x:594.4,y:425.825}},{t:this.shape_237,p:{x:603.775,y:427.875}},{t:this.shape_236,p:{x:616.4,y:427.975}},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233,p:{x:650.925,y:425.55}},{t:this.shape_232,p:{x:656.425,y:425.55}},{t:this.shape_231},{t:this.shape_230,p:{x:680.55,y:427.975}},{t:this.shape_229,p:{x:698.3,y:426.725}},{t:this.shape_228,p:{x:708.825,y:425.55}},{t:this.shape_227,p:{x:721.45,y:427.975}},{t:this.shape_226,p:{x:739.675,y:425.55}},{t:this.shape_225,p:{x:751.825,y:427.975}},{t:this.shape_224,p:{x:763.4,y:427.975}},{t:this.shape_223,p:{x:775.125,y:425.55}},{t:this.shape_222,p:{x:792.625,y:427.975}},{t:this.shape_221,p:{x:804.175,y:425.55}},{t:this.shape_220,p:{x:816.325,y:427.975}},{t:this.shape_219,p:{x:827.875,y:427.875}},{t:this.shape_218,p:{x:837.075,y:427.975}},{t:this.shape_217,p:{x:848.825,y:427.975}},{t:this.shape_216,p:{x:857.45,y:426.725}},{t:this.shape_215,p:{x:867.45,y:427.975}},{t:this.shape_214,p:{x:878.575,y:427.875}},{t:this.shape_213,p:{x:885.025,y:427.975}},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210,p:{x:377.675,y:491.575}},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207,p:{x:430.35,y:491.575}},{t:this.shape_206,p:{x:442.975,y:491.475}},{t:this.shape_205,p:{x:453.25,y:490.325}},{t:this.shape_204,p:{x:462.3,y:491.575}},{t:this.shape_203,p:{x:479.475,y:491.575}},{t:this.shape_202,p:{x:491.4,y:491.575}},{t:this.shape_201,p:{x:502.9,y:491.575}},{t:this.shape_200,p:{x:514.025,y:491.475}},{t:this.shape_199,p:{x:533.3,y:491.475}},{t:this.shape_198,p:{x:549.725,y:491.575}},{t:this.shape_197,p:{x:561.425,y:491.475}},{t:this.shape_196,p:{x:571.1,y:491.575}},{t:this.shape_195,p:{x:586.4,y:490.325}},{t:this.shape_194,p:{x:596.925,y:489.15}},{t:this.shape_193,p:{x:609.075,y:491.575}},{t:this.shape_192,p:{x:622.125,y:491.475}},{t:this.shape_191,p:{x:640.775,y:491.575}},{t:this.shape_190,p:{x:653.925,y:491.475}},{t:this.shape_189,p:{x:666.55,y:491.575}},{t:this.shape_188,p:{x:680.825,y:489.15}},{t:this.shape_187,p:{x:686.3,y:489.425}},{t:this.shape_186,p:{x:695.675,y:491.475}},{t:this.shape_185,p:{x:708.3,y:491.575}},{t:this.shape_184,p:{x:725.475,y:491.575}},{t:this.shape_183,p:{x:737.025,y:491.475}},{t:this.shape_182,p:{x:746.7,y:491.575}},{t:this.shape_181},{t:this.shape_180,p:{x:776.625,y:491.475}},{t:this.shape_179,p:{x:786.3,y:491.575}},{t:this.shape_178,p:{x:797.675,y:491.575}},{t:this.shape_177,p:{x:808.65,y:491.575}},{t:this.shape_176},{t:this.shape_175,p:{x:833.9,y:491.575}},{t:this.shape_174},{t:this.shape_173,p:{x:864.275,y:491.575}},{t:this.shape_172,p:{x:877.325,y:491.475}},{t:this.shape_171,p:{x:890.15}},{t:this.shape_170,p:{x:906.875,y:489.075}},{t:this.shape_169,p:{x:916.425,y:491.575}},{t:this.shape_168,p:{x:925.625,y:489.15}},{t:this.shape_167,p:{x:931.075,y:489.15}},{t:this.shape_166,p:{x:940.325,y:491.575}},{t:this.shape_165},{t:this.shape_164,p:{x:969.75,y:491.575}},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161,p:{x:1013.125,y:494.175}},{t:this.shape_160,p:{x:1021.425,y:491.575}},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157}]},1).to({state:[{t:this.shape_427,p:{y:565.675}},{t:this.shape_210,p:{x:375.875,y:567.625}},{t:this.shape_426,p:{x:390.7,y:565.475}},{t:this.shape_425,p:{x:400.075,y:567.525}},{t:this.shape_203,p:{x:418.725,y:567.625}},{t:this.shape_424,p:{x:431.775}},{t:this.shape_423,p:{x:443.575,y:567.525}},{t:this.shape_422},{t:this.shape_421,p:{y:567.625}},{t:this.shape_420,p:{x:481.725}},{t:this.shape_199,p:{x:498.2,y:567.525}},{t:this.shape_419,p:{y:570.125}},{t:this.shape_418},{t:this.shape_417,p:{y:567.625}},{t:this.shape_416,p:{y:573.55}},{t:this.shape_415,p:{x:553.45,y:566.375}},{t:this.shape_414,p:{y:565.2}},{t:this.shape_207,p:{x:576.6,y:567.625}},{t:this.shape_202,p:{x:593.55,y:567.625}},{t:this.shape_413,p:{x:604.575,y:567.625}},{t:this.shape_412,p:{x:616.125,y:567.525}},{t:this.shape_411,p:{x:622.45,y:565.475}},{t:this.shape_410,p:{x:630.825,y:567.625}},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405,p:{x:686.5,y:565.475}},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402,p:{x:720.925,y:567.625}},{t:this.shape_401,p:{x:730.025}},{t:this.shape_400,p:{x:735.475}},{t:this.shape_185,p:{x:744.3,y:567.625}},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_222,p:{x:850.875,y:567.625}},{t:this.shape_393,p:{x:858.475,y:565.2}},{t:this.shape_392,p:{x:866.825,y:567.625}},{t:this.shape_219,p:{x:878.375,y:567.525}},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387,p:{x:938.85,y:566.375}},{t:this.shape_386,p:{x:949.375,y:565.2}},{t:this.shape_205,p:{x:965.25,y:566.375}},{t:this.shape_194,p:{x:975.775,y:565.2}},{t:this.shape_385},{t:this.shape_384,p:{x:1006.625,y:567.525}},{t:this.shape_383,p:{x:1018.775,y:567.625}},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380,p:{x:359.875,y:592.575}},{t:this.shape_379,p:{x:372.35,y:599.325}},{t:this.shape_378},{t:this.shape_377,p:{x:399.575,y:597.5}},{t:this.shape_376,p:{x:411.625,y:599.425}},{t:this.shape_214,p:{x:423.175,y:599.325}},{t:this.shape_375},{t:this.shape_374,p:{x:437.825,y:599.425}},{t:this.shape_373},{t:this.shape_372,p:{x:460.125,y:597}},{t:this.shape_227,p:{x:469,y:599.425}},{t:this.shape_371,p:{x:477.325,y:592.575}},{t:this.shape_370,p:{x:481.95,y:605.35}},{t:this.shape_216,p:{x:494.3,y:598.175}},{t:this.shape_369},{t:this.shape_368,p:{x:517.45,y:599.425}},{t:this.shape_251,p:{x:535.675,y:599.325}},{t:this.shape_367,p:{x:548.775,y:599.525}},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364,p:{x:594.75,y:599.425}},{t:this.shape_200,p:{x:605.875,y:599.325}},{t:this.shape_363,p:{x:617.425,y:592.575}},{t:this.shape_362},{t:this.shape_361,p:{x:634.475,y:592.575}},{t:this.shape_360,p:{x:649.075}},{t:this.shape_359,p:{x:661.225,y:599.425}},{t:this.shape_358},{t:this.shape_357},{t:this.shape_215,p:{x:702.75,y:599.425}},{t:this.shape_356},{t:this.shape_247,p:{x:727.425,y:599.325}},{t:this.shape_355,p:{x:745.175,y:599.425}},{t:this.shape_354,p:{x:756.75,y:599.425}},{t:this.shape_353,p:{x:767,y:599.425}},{t:this.shape_352,p:{x:774.8,y:597.275}},{t:this.shape_351},{t:this.shape_243,p:{x:796.025,y:599.325}},{t:this.shape_240,p:{x:808.65,y:599.425}},{t:this.shape_350},{t:this.shape_349},{t:this.shape_198,p:{x:847.525,y:599.425}},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346,p:{x:884.825,y:599.525}},{t:this.shape_345},{t:this.shape_344},{t:this.shape_237,p:{x:913.875,y:599.325}},{t:this.shape_343,p:{x:926.25,y:601.925}},{t:this.shape_342,p:{x:940.175,y:592.575}},{t:this.shape_341},{t:this.shape_340,p:{x:957.175,y:592.575}},{t:this.shape_339,p:{x:962.425,y:604.075}},{t:this.shape_270,p:{x:365.875,y:189.275}},{t:this.shape_338},{t:this.shape_337},{t:this.shape_267,p:{x:406.225,y:188.675}},{t:this.shape_336},{t:this.shape_335,p:{x:439.025,y:191.45}},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332,p:{x:492.375,y:191.45}},{t:this.shape_331,p:{x:500.9,y:188.85}},{t:this.shape_330,p:{x:511.75,y:191.575}},{t:this.shape_329},{t:this.shape_328,p:{x:539.925,y:188.675}},{t:this.shape_260,p:{x:551.225,y:191.575}},{t:this.shape_327},{t:this.shape_326,p:{x:363.125,y:256.05}},{t:this.shape_325},{t:this.shape_196,p:{x:388.4,y:257.975}},{t:this.shape_324,p:{y:257.975}},{t:this.shape_323,p:{x:416.375,y:257.975}},{t:this.shape_197,p:{x:427.925,y:257.875}},{t:this.shape_322,p:{x:434.25,y:255.825}},{t:this.shape_246,p:{x:442.575,y:257.975}},{t:this.shape_321},{t:this.shape_241,p:{x:464.875,y:255.55}},{t:this.shape_320,p:{y:257.975,x:473.75}},{t:this.shape_319,p:{x:488,y:255.825}},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_217,p:{x:537.225,y:257.975}},{t:this.shape_239,p:{x:544.825,y:255.55}},{t:this.shape_225,p:{x:553.175,y:257.975}},{t:this.shape_183,p:{x:564.725,y:257.875}},{t:this.shape_315,p:{x:574.4,y:257.975}},{t:this.shape_314},{t:this.shape_313},{t:this.shape_244,p:{x:615.1,y:255.825}},{t:this.shape_180,p:{x:622.975,y:257.875}},{t:this.shape_312,p:{x:632.65,y:257.975}},{t:this.shape_178,p:{x:644.025,y:257.975}},{t:this.shape_311,p:{x:652.65,y:256.725}},{t:this.shape_233,p:{x:659.225,y:255.55}},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307,p:{x:711.8,y:256.725}},{t:this.shape_306,p:{x:722.325,y:255.55}},{t:this.shape_189,p:{x:734.95,y:257.975}},{t:this.shape_206,p:{x:753.175,y:257.875}},{t:this.shape_220,p:{x:765.325,y:257.975}},{t:this.shape_305},{t:this.shape_177,p:{x:797.85,y:257.975}},{t:this.shape_304},{t:this.shape_191,p:{x:826.775,y:257.975}},{t:this.shape_303,p:{x:839.825,y:258.075}},{t:this.shape_302},{t:this.shape_301,p:{x:866.6,y:255.825}},{t:this.shape_300},{t:this.shape_299,p:{x:886.25,y:257.975}},{t:this.shape_187,p:{x:900.5,y:255.825}},{t:this.shape_229,p:{x:907,y:256.725}},{t:this.shape_170,p:{x:920.725,y:255.475}},{t:this.shape_169,p:{x:930.225,y:257.975}},{t:this.shape_232,p:{x:939.425,y:255.55}},{t:this.shape_188,p:{x:944.875,y:255.55}},{t:this.shape_166,p:{x:954.175,y:257.975}},{t:this.shape_298},{t:this.shape_297,p:{x:983.55,y:257.975}},{t:this.shape_296},{t:this.shape_295},{t:this.shape_161,p:{x:1026.925,y:260.575}},{t:this.shape_195,p:{x:1041.7,y:256.725}},{t:this.shape_294,p:{x:1052.225,y:255.55}},{t:this.shape_182,p:{x:1064.85,y:257.975}},{t:this.shape_293,p:{x:362.55,y:289.775}},{t:this.shape_218,p:{x:373.575,y:289.775}},{t:this.shape_168,p:{x:382.675,y:287.35}},{t:this.shape_292,p:{x:392.025,y:289.875}},{t:this.shape_291,p:{x:404.75,y:289.775}},{t:this.shape_290},{t:this.shape_193,p:{x:427.175,y:289.775}},{t:this.shape_192,p:{x:440.225,y:289.675}},{t:this.shape_289},{t:this.shape_184,p:{x:471.175,y:289.775}},{t:this.shape_288},{t:this.shape_287,p:{x:493,y:289.775}},{t:this.shape_238,p:{x:500.8,y:287.625}},{t:this.shape_286},{t:this.shape_190,p:{x:522.025,y:289.675}},{t:this.shape_175,p:{x:534.65,y:289.775}},{t:this.shape_285},{t:this.shape_284,p:{x:565.925,y:289.875}},{t:this.shape_283,p:{x:577.75,y:289.775}},{t:this.shape_282},{t:this.shape_186,p:{x:594.975,y:289.675}},{t:this.shape_281,p:{x:607.35,y:292.275}},{t:this.shape_280,p:{x:622.65,y:288.525}},{t:this.shape_279},{t:this.shape_278,p:{x:645.8,y:289.775}},{t:this.shape_179,p:{x:663.45,y:289.775}},{t:this.shape_277},{t:this.shape_276,p:{x:689.175,y:289.875}},{t:this.shape_173,p:{x:701.425,y:289.775}},{t:this.shape_167,p:{x:710.525,y:287.35}},{t:this.shape_275,p:{x:718.45,y:289.775}},{t:this.shape_274,p:{x:734.3,y:289.775}},{t:this.shape_273,p:{x:742.1,y:287.625}},{t:this.shape_272},{t:this.shape_172,p:{x:763.325,y:289.675}},{t:this.shape_160,p:{x:772.725,y:289.775}},{t:this.shape_271,p:{x:787.3,y:287.925}}]},1).to({state:[{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_267,p:{x:406.575,y:286.975}},{t:this.shape_266,p:{y:289.875}},{t:this.shape_478},{t:this.shape_270,p:{x:463.275,y:287.575}},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_368,p:{x:388.75,y:356.275}},{t:this.shape_468,p:{y:349.425}},{t:this.shape_467,p:{y:358.775}},{t:this.shape_214,p:{x:423.425,y:356.175}},{t:this.shape_322,p:{x:429.75,y:354.125}},{t:this.shape_425,p:{x:439.125,y:356.175}},{t:this.shape_280,p:{x:449.4,y:355.025}},{t:this.shape_466,p:{y:349.425}},{t:this.shape_274,p:{x:468.8,y:356.275}},{t:this.shape_465,p:{y:355.025}},{t:this.shape_218,p:{x:487.125,y:356.275}},{t:this.shape_250,p:{x:497.25,y:355.025}},{t:this.shape_278,p:{x:507.2,y:356.275}},{t:this.shape_464,p:{y:356.175}},{t:this.shape_291,p:{x:539.3,y:356.275}},{t:this.shape_384,p:{x:551.925,y:356.175}},{t:this.shape_463,p:{y:355.025}},{t:this.shape_462,p:{y:354.125}},{t:this.shape_461,p:{y:356.275}},{t:this.shape_217,p:{x:598.325,y:356.275}},{t:this.shape_193,p:{x:608.825,y:356.275}},{t:this.shape_232,p:{x:617.925,y:353.85}},{t:this.shape_188,p:{x:623.425,y:353.85}},{t:this.shape_164,p:{x:632.25,y:356.275}},{t:this.shape_460},{t:this.shape_303,p:{x:663.575,y:356.375}},{t:this.shape_459,p:{x:675.4,y:356.275}},{t:this.shape_411,p:{x:683.2,y:354.125}},{t:this.shape_251,p:{x:692.575,y:356.175}},{t:this.shape_458,p:{x:704.95,y:358.775}},{t:this.shape_160,p:{x:713.775,y:356.275}},{t:this.shape_457},{t:this.shape_200,p:{x:740.575,y:356.175}},{t:this.shape_301,p:{x:746.9,y:354.125}},{t:this.shape_247,p:{x:756.275,y:356.175}},{t:this.shape_456,p:{x:766.55,y:355.025}},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_228,p:{x:384.175,y:417.45}},{t:this.shape_452,p:{y:419.875}},{t:this.shape_243,p:{x:409.425,y:419.775}},{t:this.shape_451,p:{x:425.3,y:418.625}},{t:this.shape_226,p:{x:435.825,y:417.45}},{t:this.shape_450,p:{y:419.875}},{t:this.shape_178,p:{x:465.375,y:419.875}},{t:this.shape_191,p:{x:476.775,y:419.875}},{t:this.shape_449,p:{x:489.6,y:417.55}},{t:this.shape_312,p:{x:502.6,y:419.875}},{t:this.shape_405,p:{x:516.85,y:417.725}},{t:this.shape_448,p:{x:524.8,y:419.875}},{t:this.shape_380,p:{x:537.775,y:413.025}},{t:this.shape_197,p:{x:545.325,y:419.775}},{t:this.shape_292,p:{x:555.475,y:419.975}},{t:this.shape_237,p:{x:568.775,y:419.775}},{t:this.shape_371,p:{x:577.675,y:413.025}},{t:this.shape_447,p:{y:419.85}},{t:this.shape_446,p:{y:418.625}},{t:this.shape_223,p:{x:612.425,y:417.45}},{t:this.shape_185,p:{x:625.05,y:419.875}},{t:this.shape_363,p:{x:638.975,y:413.025}},{t:this.shape_445,p:{y:419.875}},{t:this.shape_444,p:{y:418.625}},{t:this.shape_184,p:{x:664.825,y:419.875}},{t:this.shape_415,p:{x:674.95,y:418.625}},{t:this.shape_177,p:{x:684.9,y:419.875}},{t:this.shape_443,p:{y:419.775}},{t:this.shape_179,p:{x:717,y:419.875}},{t:this.shape_206,p:{x:729.675,y:419.775}},{t:this.shape_387,p:{x:739.95,y:418.625}},{t:this.shape_361,p:{x:746.175,y:413.025}},{t:this.shape_244,p:{x:756.85,y:417.725}},{t:this.shape_275,p:{x:764.8,y:419.875}},{t:this.shape_442,p:{y:422.375}},{t:this.shape_183,p:{x:793.775,y:419.775}},{t:this.shape_441,p:{y:417.725,x:800.15}},{t:this.shape_192,p:{x:809.525,y:419.775}},{t:this.shape_229,p:{x:819.8,y:418.625}},{t:this.shape_440,p:{x:829.75,y:419.875}},{t:this.shape_439},{t:this.shape_438,p:{x:861.45,y:417.55}},{t:this.shape_437,p:{x:873.8,y:419.875}},{t:this.shape_168,p:{x:882.475,y:417.45}},{t:this.shape_169,p:{x:891.725,y:419.875}},{t:this.shape_436,p:{y:419.875}},{t:this.shape_238,p:{x:923.35,y:417.725}},{t:this.shape_190,p:{x:932.775,y:419.775}},{t:this.shape_205,p:{x:948.6,y:418.625}},{t:this.shape_221,p:{x:959.175,y:417.45}},{t:this.shape_435,p:{x:971.8,y:419.875}},{t:this.shape_342,p:{x:985.675,y:413.025}},{t:this.shape_326,p:{x:994.025,y:417.95}},{t:this.shape_236,p:{x:1006.1,y:419.875}},{t:this.shape_180,p:{x:1017.225,y:419.775}},{t:this.shape_434,p:{y:419.775}},{t:this.shape_433,p:{x:1043.6,y:417.725}},{t:this.shape_186,p:{x:1052.975,y:419.775}},{t:this.shape_173,p:{x:1065.125,y:419.875}},{t:this.shape_167,p:{x:1074.225,y:417.45}},{t:this.shape_432,p:{y:449.725}},{t:this.shape_284,p:{x:380.875,y:451.775}},{t:this.shape_431,p:{y:450.425,x:391.25}},{t:this.shape_430,p:{y:454.175}},{t:this.shape_276,p:{x:414.925,y:451.775}},{t:this.shape_195,p:{x:425.3,y:450.425}},{t:this.shape_340,p:{x:431.525,y:444.825}},{t:this.shape_429,p:{y:451.675,x:447.9}},{t:this.shape_187,p:{x:459.05,y:449.525}},{t:this.shape_172,p:{x:468.425,y:451.575}},{t:this.shape_428},{t:this.shape_166,p:{x:494.675,y:451.675}},{t:this.shape_230,p:{x:509.55,y:451.675}},{t:this.shape_339,p:{x:520.825,y:456.325}}]},1).to({state:[]},1).to({state:[{t:this.shape_509},{t:this.shape_508,p:{y:361.575}},{t:this.shape_507,p:{x:387.775,y:361.575}},{t:this.shape_506,p:{y:361.575,x:402}},{t:this.shape_505,p:{x:417.425,y:359.275}},{t:this.shape_504,p:{y:361.575}},{t:this.shape_503},{t:this.shape_502,p:{y:358.85,x:452.6}},{t:this.shape_501,p:{x:464.825,y:364.625}},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_262,p:{x:535.275}},{t:this.shape_261,p:{x:560.475}},{t:this.shape_260,p:{x:580.625,y:361.575}},{t:this.shape_259,p:{x:596.575}},{t:this.shape_497,p:{x:610}},{t:this.shape_496},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252,p:{x:430.35,y:427.975}},{t:this.shape_425,p:{x:442.975,y:427.875}},{t:this.shape_495,p:{x:453.25,y:426.725}},{t:this.shape_494},{t:this.shape_248},{t:this.shape_384,p:{x:492.675,y:427.875}},{t:this.shape_323,p:{x:510.375,y:427.975}},{t:this.shape_493},{t:this.shape_244,p:{x:535.35,y:425.825}},{t:this.shape_251,p:{x:544.725,y:427.875}},{t:this.shape_242,p:{x:557.1,y:430.475}},{t:this.shape_239,p:{x:565.825,y:425.55}},{t:this.shape_177,p:{x:574.65,y:427.975}},{t:this.shape_233,p:{x:588.925,y:425.55}},{t:this.shape_238,p:{x:594.4,y:425.825}},{t:this.shape_247,p:{x:603.775,y:427.875}},{t:this.shape_236,p:{x:616.4,y:427.975}},{t:this.shape_235},{t:this.shape_234},{t:this.shape_232,p:{x:650.925,y:425.55}},{t:this.shape_188,p:{x:656.425,y:425.55}},{t:this.shape_231},{t:this.shape_230,p:{x:680.55,y:427.975}},{t:this.shape_229,p:{x:698.3,y:426.725}},{t:this.shape_492},{t:this.shape_210,p:{x:725.475,y:427.975}},{t:this.shape_170,p:{x:741.825,y:425.475}},{t:this.shape_203,p:{x:751.325,y:427.975}},{t:this.shape_412,p:{x:763.025,y:427.875}},{t:this.shape_491},{t:this.shape_246,p:{x:789.025,y:427.975}},{t:this.shape_219,p:{x:800.575,y:427.875}},{t:this.shape_449,p:{x:810.45,y:425.65}},{t:this.shape_249,p:{x:828.15,y:427.975}},{t:this.shape_168,p:{x:835.925,y:425.55}},{t:this.shape_225,p:{x:844.275,y:427.975}},{t:this.shape_459,p:{x:855.85,y:427.975}},{t:this.shape_223,p:{x:867.575,y:425.55}},{t:this.shape_217,p:{x:885.075,y:427.975}},{t:this.shape_221,p:{x:896.625,y:425.55}},{t:this.shape_220,p:{x:908.775,y:427.975}},{t:this.shape_214,p:{x:920.325,y:427.875}},{t:this.shape_218,p:{x:929.525,y:427.975}},{t:this.shape_178,p:{x:941.275,y:427.975}},{t:this.shape_250,p:{x:949.95,y:426.725}},{t:this.shape_175,p:{x:959.9,y:427.975}},{t:this.shape_200,p:{x:971.025,y:427.875}},{t:this.shape_245,p:{x:979.8,y:427.975}},{t:this.shape_213,p:{x:987.775,y:427.975}},{t:this.shape_490},{t:this.shape_489},{t:this.shape_211},{t:this.shape_198,p:{x:377.675,y:491.575}},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207,p:{x:430.35,y:491.575}},{t:this.shape_243,p:{x:442.975,y:491.475}},{t:this.shape_205,p:{x:453.25,y:490.325}},{t:this.shape_204,p:{x:462.3,y:491.575}},{t:this.shape_191,p:{x:479.475,y:491.575}},{t:this.shape_202,p:{x:491.4,y:491.575}},{t:this.shape_201,p:{x:502.9,y:491.575}},{t:this.shape_197,p:{x:514.025,y:491.475}},{t:this.shape_199,p:{x:533.3,y:491.475}},{t:this.shape_169,p:{x:549.725,y:491.575}},{t:this.shape_183,p:{x:561.425,y:491.475}},{t:this.shape_196,p:{x:571.1,y:491.575}},{t:this.shape_195,p:{x:586.4,y:490.325}},{t:this.shape_194,p:{x:596.925,y:489.15}},{t:this.shape_193,p:{x:609.075,y:491.575}},{t:this.shape_237,p:{x:622.125,y:491.475}},{t:this.shape_166,p:{x:640.775,y:491.575}},{t:this.shape_206,p:{x:653.925,y:491.475}},{t:this.shape_189,p:{x:666.55,y:491.575}},{t:this.shape_167,p:{x:680.825,y:489.15}},{t:this.shape_433,p:{x:686.3,y:489.425}},{t:this.shape_192,p:{x:695.675,y:491.475}},{t:this.shape_185,p:{x:708.3,y:491.575}},{t:this.shape_184,p:{x:725.475,y:491.575}},{t:this.shape_180,p:{x:737.025,y:491.475}},{t:this.shape_179,p:{x:746.7,y:491.575}},{t:this.shape_187,p:{x:761,y:489.425}},{t:this.shape_190,p:{x:770.375,y:491.475}},{t:this.shape_488,p:{x:789.45,y:489.25}},{t:this.shape_437,p:{x:801.8,y:491.575}},{t:this.shape_487,p:{x:811.5,y:490.325}},{t:this.shape_486,p:{x:823.8,y:491.575}},{t:this.shape_440,p:{x:838.3,y:491.575}},{t:this.shape_215,p:{x:850.35,y:491.575}},{t:this.shape_186,p:{x:862.975,y:491.475}},{t:this.shape_160,p:{x:872.375,y:491.575}},{t:this.shape_485},{t:this.shape_484,p:{x:900.225}},{t:this.shape_173,p:{x:917.375,y:491.575}},{t:this.shape_172,p:{x:930.425,y:491.475}},{t:this.shape_171,p:{x:943.25}},{t:this.shape_483,p:{x:961.625,y:485.775}},{t:this.shape_482}]},1).to({state:[{t:this.shape_427,p:{y:565.675}},{t:this.shape_198,p:{x:375.875,y:567.625}},{t:this.shape_585},{t:this.shape_584,p:{x:400.075,y:567.525}},{t:this.shape_191,p:{x:418.725,y:567.625}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_422},{t:this.shape_421,p:{y:567.625}},{t:this.shape_581},{t:this.shape_199,p:{x:498.2,y:567.525}},{t:this.shape_419,p:{y:570.125}},{t:this.shape_401,p:{x:524.025}},{t:this.shape_417,p:{y:567.625}},{t:this.shape_416,p:{y:573.55}},{t:this.shape_415,p:{x:553.45,y:566.375}},{t:this.shape_414,p:{y:565.2}},{t:this.shape_207,p:{x:576.6,y:567.625}},{t:this.shape_202,p:{x:593.55,y:567.625}},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578,p:{x:622.45,y:565.475}},{t:this.shape_577},{t:this.shape_409},{t:this.shape_400,p:{x:653.125}},{t:this.shape_407},{t:this.shape_576,p:{x:676.25,y:565.475}},{t:this.shape_245,p:{x:684.15,y:567.625}},{t:this.shape_222,p:{x:700.175,y:567.625}},{t:this.shape_575},{t:this.shape_393,p:{x:719.775,y:565.2}},{t:this.shape_372,p:{x:725.225,y:565.2}},{t:this.shape_574,p:{x:734.05,y:567.625}},{t:this.shape_573},{t:this.shape_380,p:{x:761.175,y:560.775}},{t:this.shape_572,p:{y:567.525}},{t:this.shape_161,p:{x:789.025,y:570.225}},{t:this.shape_377,p:{x:800.875,y:565.7}},{t:this.shape_571},{t:this.shape_423,p:{x:824.475,y:567.525}},{t:this.shape_570,p:{y:565.475}},{t:this.shape_420,p:{x:839.125}},{t:this.shape_488,p:{x:852.45,y:565.3}},{t:this.shape_241,p:{x:861.425,y:565.2}},{t:this.shape_440,p:{x:870.25,y:567.625}},{t:this.shape_371,p:{x:878.575,y:560.775}},{t:this.shape_569,p:{y:573.55}},{t:this.shape_451,p:{x:895.55,y:566.375}},{t:this.shape_386,p:{x:906.125,y:565.2}},{t:this.shape_364,p:{x:918.75,y:567.625}},{t:this.shape_425,p:{x:936.975,y:567.525}},{t:this.shape_424,p:{x:950.075}},{t:this.shape_379,p:{x:966.8,y:567.525}},{t:this.shape_568},{t:this.shape_182,p:{x:996,y:567.625}},{t:this.shape_412,p:{x:1007.175,y:567.525}},{t:this.shape_363,p:{x:1018.675,y:560.775}},{t:this.shape_567,p:{y:565.8}},{t:this.shape_361,p:{x:1035.725,y:560.775}},{t:this.shape_194,p:{x:1050.375,y:565.2}},{t:this.shape_413,p:{x:1062.525,y:567.625}},{t:this.shape_566,p:{y:567.625}},{t:this.shape_565},{t:this.shape_179,p:{x:376.8,y:599.425}},{t:this.shape_564,p:{x:388.9,y:599.425}},{t:this.shape_384,p:{x:401.525,y:599.325}},{t:this.shape_410,p:{x:419.225,y:599.425}},{t:this.shape_204,p:{x:430.8,y:599.425}},{t:this.shape_448,p:{x:441.1,y:599.425}},{t:this.shape_405,p:{x:448.9,y:597.275}},{t:this.shape_563,p:{y:601.925}},{t:this.shape_251,p:{x:470.075,y:599.325}},{t:this.shape_297,p:{x:482.7,y:599.425}},{t:this.shape_562,p:{y:597.1}},{t:this.shape_250,p:{x:511.2,y:598.175}},{t:this.shape_169,p:{x:521.625,y:599.425}},{t:this.shape_187,p:{x:536.45,y:597.275}},{t:this.shape_216,p:{x:542.9,y:598.175}},{t:this.shape_370,p:{x:549,y:605.35}},{t:this.shape_402,p:{x:563.225,y:599.425}},{t:this.shape_247,p:{x:576.275,y:599.325}},{t:this.shape_561,p:{y:597.1}},{t:this.shape_352,p:{x:604.35,y:597.275}},{t:this.shape_487,p:{x:610.8,y:598.175}},{t:this.shape_360,p:{x:626.925}},{t:this.shape_392,p:{x:639.075,y:599.425}},{t:this.shape_560},{t:this.shape_559},{t:this.shape_315,p:{x:680.6,y:599.425}},{t:this.shape_558,p:{x:692.65,y:599.425}},{t:this.shape_243,p:{x:705.275,y:599.325}},{t:this.shape_557,p:{y:597.1}},{t:this.shape_556},{t:this.shape_217,p:{x:748.025,y:599.425}},{t:this.shape_239,p:{x:755.625,y:597}},{t:this.shape_383,p:{x:764.025,y:599.425}},{t:this.shape_219,p:{x:775.575,y:599.325}},{t:this.shape_164,p:{x:785.25,y:599.425}},{t:this.shape_555,p:{y:597.1}},{t:this.shape_367,p:{x:816.575,y:599.525}},{t:this.shape_554,p:{x:828.4,y:599.425}},{t:this.shape_426,p:{x:836.2,y:597.275}},{t:this.shape_237,p:{x:845.575,y:599.325}},{t:this.shape_458,p:{x:857.95,y:601.925}},{t:this.shape_342,p:{x:871.875,y:592.575}},{t:this.shape_553},{t:this.shape_376,p:{x:890.675,y:599.425}},{t:this.shape_214,p:{x:902.225,y:599.325}},{t:this.shape_340,p:{x:908.175,y:592.575}},{t:this.shape_339,p:{x:913.425,y:604.075}},{t:this.shape_552},{t:this.shape_330,p:{x:372.25,y:171.575}},{t:this.shape_507,p:{x:387.425,y:171.575}},{t:this.shape_551},{t:this.shape_505,p:{x:417.075,y:169.275}},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548,p:{x:452.25}},{t:this.shape_501,p:{x:464.475,y:174.625}},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544,p:{x:527.675}},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541,p:{x:563.725}},{t:this.shape_328,p:{x:575.225,y:168.675}},{t:this.shape_260,p:{x:586.475,y:171.575}},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_374,p:{x:416.375,y:237.975}},{t:this.shape_200,p:{x:427.925,y:237.875}},{t:this.shape_322,p:{x:434.25,y:235.825}},{t:this.shape_359,p:{x:442.575,y:237.975}},{t:this.shape_535},{t:this.shape_233,p:{x:464.875,y:235.55}},{t:this.shape_320,p:{y:237.975,x:473.75}},{t:this.shape_534},{t:this.shape_346,p:{x:511.875,y:238.075}},{t:this.shape_533,p:{x:523.7,y:237.975}},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530,p:{x:561.25,y:237.975}},{t:this.shape_529},{t:this.shape_528,p:{x:592.1,y:237.975}},{t:this.shape_178,p:{x:603.425,y:237.975}},{t:this.shape_232,p:{x:611.075,y:235.55}},{t:this.shape_355,p:{x:619.425,y:237.975}},{t:this.shape_197,p:{x:630.975,y:237.875}},{t:this.shape_215,p:{x:640.65,y:237.975}},{t:this.shape_527},{t:this.shape_303,p:{x:671.975,y:238.075}},{t:this.shape_287,p:{x:683.8,y:237.975}},{t:this.shape_244,p:{x:691.6,y:235.825}},{t:this.shape_206,p:{x:700.975,y:237.875}},{t:this.shape_526},{t:this.shape_205,p:{x:728.65,y:236.725}},{t:this.shape_525},{t:this.shape_236,p:{x:751.85,y:237.975}},{t:this.shape_524},{t:this.shape_311,p:{x:777.4,y:236.725}},{t:this.shape_323,p:{x:786.875,y:237.975}},{t:this.shape_195,p:{x:797,y:236.725}},{t:this.shape_227,p:{x:806.95,y:237.975}},{t:this.shape_523},{t:this.shape_435,p:{x:839.05,y:237.975}},{t:this.shape_192,p:{x:851.725,y:237.875}},{t:this.shape_229,p:{x:862,y:236.725}},{t:this.shape_213,p:{x:868.725,y:237.975}},{t:this.shape_522},{t:this.shape_246,p:{x:893.575,y:237.975}},{t:this.shape_183,p:{x:905.125,y:237.875}},{t:this.shape_521,p:{x:363.125,y:299.65}},{t:this.shape_520},{t:this.shape_196,p:{x:388.4,y:301.575}},{t:this.shape_324,p:{y:301.575}},{t:this.shape_225,p:{x:416.375,y:301.575}},{t:this.shape_188,p:{x:425.475,y:299.15}},{t:this.shape_292,p:{x:434.775,y:301.675}},{t:this.shape_299,p:{x:447.5,y:301.575}},{t:this.shape_166,p:{x:465.575,y:301.575}},{t:this.shape_170,p:{x:476.325,y:299.075}},{t:this.shape_220,p:{x:490.525,y:301.575}},{t:this.shape_293,p:{x:507.9,y:301.575}},{t:this.shape_218,p:{x:518.925,y:301.575}},{t:this.shape_180,p:{x:530.475,y:301.475}},{t:this.shape_238,p:{x:536.8,y:299.425}},{t:this.shape_193,p:{x:545.125,y:301.575}},{t:this.shape_519},{t:this.shape_168,p:{x:567.425,y:299.15}},{t:this.shape_201,p:{x:576.25,y:301.575}},{t:this.shape_518},{t:this.shape_283,p:{x:598.45,y:301.575}},{t:this.shape_184,p:{x:614.725,y:301.575}},{t:this.shape_274,p:{x:626.3,y:301.575}},{t:this.shape_275,p:{x:636.55,y:301.575}},{t:this.shape_301,p:{x:644.4,y:299.425}},{t:this.shape_517},{t:this.shape_190,p:{x:665.575,y:301.475}},{t:this.shape_175,p:{x:678.2,y:301.575}},{t:this.shape_516},{t:this.shape_284,p:{x:709.525,y:301.675}},{t:this.shape_515},{t:this.shape_514},{t:this.shape_186,p:{x:738.525,y:301.475}},{t:this.shape_281,p:{x:750.9,y:304.075}},{t:this.shape_280,p:{x:766.2,y:300.325}},{t:this.shape_513},{t:this.shape_189,p:{x:789.4,y:301.575}},{t:this.shape_291,p:{x:807.05,y:301.575}},{t:this.shape_512},{t:this.shape_276,p:{x:832.775,y:301.675}},{t:this.shape_173,p:{x:845.025,y:301.575}},{t:this.shape_167,p:{x:854.125,y:299.15}},{t:this.shape_511,p:{x:862.05,y:301.575}},{t:this.shape_459,p:{x:877.9,y:301.575}},{t:this.shape_411,p:{x:885.7,y:299.425}},{t:this.shape_510},{t:this.shape_172,p:{x:906.925,y:301.475}},{t:this.shape_160,p:{x:916.325,y:301.575}},{t:this.shape_271,p:{x:930.85,y:299.725}}]},1).to({state:[{t:this.shape_607},{t:this.shape_508,p:{y:269.875}},{t:this.shape_507,p:{x:387.775,y:269.875}},{t:this.shape_506,p:{y:269.875,x:402}},{t:this.shape_505,p:{x:417.425,y:267.575}},{t:this.shape_504,p:{y:269.875}},{t:this.shape_606},{t:this.shape_502,p:{y:267.15,x:452.6}},{t:this.shape_501,p:{x:464.825,y:272.925}},{t:this.shape_605},{t:this.shape_270,p:{x:498.525,y:267.575}},{t:this.shape_332,p:{x:512.525,y:269.75}},{t:this.shape_604},{t:this.shape_603,p:{x:533.125}},{t:this.shape_602,p:{x:546.5}},{t:this.shape_601},{t:this.shape_335,p:{x:567.475,y:269.75}},{t:this.shape_600},{t:this.shape_326,p:{x:363.475,y:334.35}},{t:this.shape_294,p:{x:376.125,y:333.85}},{t:this.shape_368,p:{x:388.75,y:336.275}},{t:this.shape_468,p:{y:329.425}},{t:this.shape_467,p:{y:338.775}},{t:this.shape_200,p:{x:423.425,y:336.175}},{t:this.shape_301,p:{x:429.75,y:334.125}},{t:this.shape_425,p:{x:439.125,y:336.175}},{t:this.shape_280,p:{x:449.4,y:335.025}},{t:this.shape_466,p:{y:329.425}},{t:this.shape_274,p:{x:468.8,y:336.275}},{t:this.shape_465,p:{y:335.025}},{t:this.shape_218,p:{x:487.125,y:336.275}},{t:this.shape_250,p:{x:497.25,y:335.025}},{t:this.shape_278,p:{x:507.2,y:336.275}},{t:this.shape_464,p:{y:336.175}},{t:this.shape_291,p:{x:539.3,y:336.275}},{t:this.shape_384,p:{x:551.925,y:336.175}},{t:this.shape_463,p:{y:335.025}},{t:this.shape_462,p:{y:334.125}},{t:this.shape_461,p:{y:336.275}},{t:this.shape_222,p:{x:598.325,y:336.275}},{t:this.shape_193,p:{x:608.825,y:336.275}},{t:this.shape_239,p:{x:617.925,y:333.85}},{t:this.shape_233,p:{x:623.425,y:333.85}},{t:this.shape_164,p:{x:632.25,y:336.275}},{t:this.shape_599},{t:this.shape_303,p:{x:663.575,y:336.375}},{t:this.shape_459,p:{x:675.4,y:336.275}},{t:this.shape_411,p:{x:683.2,y:334.125}},{t:this.shape_251,p:{x:692.575,y:336.175}},{t:this.shape_458,p:{x:704.95,y:338.775}},{t:this.shape_160,p:{x:713.775,y:336.275}},{t:this.shape_217,p:{x:727.575,y:336.275}},{t:this.shape_210,p:{x:738.975,y:336.275}},{t:this.shape_247,p:{x:752.175,y:336.175}},{t:this.shape_598,p:{x:763.9,y:336.275}},{t:this.shape_203,p:{x:775.475,y:336.275}},{t:this.shape_232,p:{x:784.675,y:333.85}},{t:this.shape_182,p:{x:793.5,y:336.275}},{t:this.shape_597},{t:this.shape_188,p:{x:807.925,y:333.85}},{t:this.shape_198,p:{x:817.175,y:336.275}},{t:this.shape_343,p:{x:829.5,y:338.775}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_452,p:{y:399.875}},{t:this.shape_243,p:{x:409.425,y:399.775}},{t:this.shape_451,p:{x:425.3,y:398.625}},{t:this.shape_592},{t:this.shape_450,p:{y:399.875}},{t:this.shape_178,p:{x:465.375,y:399.875}},{t:this.shape_191,p:{x:476.775,y:399.875}},{t:this.shape_591},{t:this.shape_312,p:{x:502.6,y:399.875}},{t:this.shape_405,p:{x:516.85,y:397.725}},{t:this.shape_448,p:{x:524.8,y:399.875}},{t:this.shape_380,p:{x:537.775,y:393.025}},{t:this.shape_197,p:{x:545.325,y:399.775}},{t:this.shape_292,p:{x:555.475,y:399.975}},{t:this.shape_237,p:{x:568.775,y:399.775}},{t:this.shape_371,p:{x:577.675,y:393.025}},{t:this.shape_447,p:{y:399.85}},{t:this.shape_446,p:{y:398.625}},{t:this.shape_590},{t:this.shape_185,p:{x:625.05,y:399.875}},{t:this.shape_363,p:{x:638.975,y:393.025}},{t:this.shape_445,p:{y:399.875}},{t:this.shape_444,p:{y:398.625}},{t:this.shape_184,p:{x:664.825,y:399.875}},{t:this.shape_415,p:{x:674.95,y:398.625}},{t:this.shape_177,p:{x:684.9,y:399.875}},{t:this.shape_443,p:{y:399.775}},{t:this.shape_179,p:{x:717,y:399.875}},{t:this.shape_206,p:{x:729.675,y:399.775}},{t:this.shape_387,p:{x:739.95,y:398.625}},{t:this.shape_361,p:{x:746.175,y:393.025}},{t:this.shape_244,p:{x:756.85,y:397.725}},{t:this.shape_275,p:{x:764.8,y:399.875}},{t:this.shape_442,p:{y:402.375}},{t:this.shape_183,p:{x:793.775,y:399.775}},{t:this.shape_441,p:{y:397.725,x:800.15}},{t:this.shape_192,p:{x:809.525,y:399.775}},{t:this.shape_229,p:{x:819.8,y:398.625}},{t:this.shape_440,p:{x:829.75,y:399.875}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_437,p:{x:873.8,y:399.875}},{t:this.shape_168,p:{x:882.475,y:397.45}},{t:this.shape_169,p:{x:891.725,y:399.875}},{t:this.shape_436,p:{y:399.875}},{t:this.shape_238,p:{x:923.35,y:397.725}},{t:this.shape_190,p:{x:932.775,y:399.775}},{t:this.shape_205,p:{x:948.6,y:398.625}},{t:this.shape_587},{t:this.shape_435,p:{x:971.8,y:399.875}},{t:this.shape_342,p:{x:985.675,y:393.025}},{t:this.shape_521,p:{x:994.025,y:397.95}},{t:this.shape_236,p:{x:1006.1,y:399.875}},{t:this.shape_180,p:{x:1017.225,y:399.775}},{t:this.shape_434,p:{y:399.775}},{t:this.shape_433,p:{x:1043.6,y:397.725}},{t:this.shape_186,p:{x:1052.975,y:399.775}},{t:this.shape_173,p:{x:1065.125,y:399.875}},{t:this.shape_167,p:{x:1074.225,y:397.45}},{t:this.shape_432,p:{y:429.725}},{t:this.shape_284,p:{x:380.875,y:431.775}},{t:this.shape_431,p:{y:430.425,x:391.25}},{t:this.shape_430,p:{y:434.175}},{t:this.shape_276,p:{x:414.925,y:431.775}},{t:this.shape_195,p:{x:425.3,y:430.425}},{t:this.shape_340,p:{x:431.525,y:424.825}},{t:this.shape_429,p:{y:431.675,x:447.9}},{t:this.shape_187,p:{x:459.05,y:429.525}},{t:this.shape_172,p:{x:468.425,y:431.575}},{t:this.shape_586},{t:this.shape_166,p:{x:494.675,y:431.675}},{t:this.shape_230,p:{x:509.55,y:431.675}},{t:this.shape_339,p:{x:520.825,y:436.325}}]},1).to({state:[]},1).to({state:[{t:this.shape_621,p:{y:359.275}},{t:this.shape_620,p:{y:359.375}},{t:this.shape_619,p:{x:396.8,y:359.375}},{t:this.shape_618,p:{x:419.85,y:359.275}},{t:this.shape_617},{t:this.shape_262,p:{x:456.575}},{t:this.shape_261,p:{x:481.775}},{t:this.shape_260,p:{x:501.925,y:361.575}},{t:this.shape_259,p:{x:517.925}},{t:this.shape_497,p:{x:531.35}},{t:this.shape_616},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252,p:{x:430.35,y:427.975}},{t:this.shape_615},{t:this.shape_495,p:{x:453.25,y:426.725}},{t:this.shape_494},{t:this.shape_248},{t:this.shape_614},{t:this.shape_374,p:{x:510.375,y:427.975}},{t:this.shape_493},{t:this.shape_244,p:{x:535.35,y:425.825}},{t:this.shape_613,p:{x:544.725,y:427.875}},{t:this.shape_242,p:{x:557.1,y:430.475}},{t:this.shape_241,p:{x:565.825,y:425.55}},{t:this.shape_177,p:{x:574.65,y:427.975}},{t:this.shape_239,p:{x:588.925,y:425.55}},{t:this.shape_238,p:{x:594.4,y:425.825}},{t:this.shape_584,p:{x:603.775,y:427.875}},{t:this.shape_528,p:{x:616.4,y:427.975}},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233,p:{x:650.925,y:425.55}},{t:this.shape_232,p:{x:656.425,y:425.55}},{t:this.shape_231},{t:this.shape_429,p:{y:427.975,x:680.55}},{t:this.shape_612},{t:this.shape_492},{t:this.shape_210,p:{x:725.475,y:427.975}},{t:this.shape_170,p:{x:741.825,y:425.475}},{t:this.shape_203,p:{x:751.325,y:427.975}},{t:this.shape_423,p:{x:763.025,y:427.875}},{t:this.shape_491},{t:this.shape_359,p:{x:789.025,y:427.975}},{t:this.shape_412,p:{x:800.575,y:427.875}},{t:this.shape_449,p:{x:810.45,y:425.65}},{t:this.shape_249,p:{x:828.15,y:427.975}},{t:this.shape_188,p:{x:835.925,y:425.55}},{t:this.shape_355,p:{x:844.275,y:427.975}},{t:this.shape_459,p:{x:855.85,y:427.975}},{t:this.shape_228,p:{x:867.575,y:425.55}},{t:this.shape_222,p:{x:885.075,y:427.975}},{t:this.shape_226,p:{x:896.625,y:425.55}},{t:this.shape_323,p:{x:908.775,y:427.975}},{t:this.shape_219,p:{x:920.325,y:427.875}},{t:this.shape_246,p:{x:929.525,y:427.975}},{t:this.shape_217,p:{x:941.275,y:427.975}},{t:this.shape_250,p:{x:949.95,y:426.725}},{t:this.shape_175,p:{x:959.9,y:427.975}},{t:this.shape_214,p:{x:971.025,y:427.875}},{t:this.shape_245,p:{x:979.8,y:427.975}},{t:this.shape_213,p:{x:987.775,y:427.975}},{t:this.shape_490},{t:this.shape_489},{t:this.shape_211},{t:this.shape_198,p:{x:377.675,y:491.575}},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207,p:{x:430.35,y:491.575}},{t:this.shape_425,p:{x:442.975,y:491.475}},{t:this.shape_205,p:{x:453.25,y:490.325}},{t:this.shape_204,p:{x:462.3,y:491.575}},{t:this.shape_191,p:{x:479.475,y:491.575}},{t:this.shape_202,p:{x:491.4,y:491.575}},{t:this.shape_201,p:{x:502.9,y:491.575}},{t:this.shape_200,p:{x:514.025,y:491.475}},{t:this.shape_199,p:{x:533.3,y:491.475}},{t:this.shape_169,p:{x:549.725,y:491.575}},{t:this.shape_197,p:{x:561.425,y:491.475}},{t:this.shape_196,p:{x:571.1,y:491.575}},{t:this.shape_195,p:{x:586.4,y:490.325}},{t:this.shape_194,p:{x:596.925,y:489.15}},{t:this.shape_225,p:{x:609.075,y:491.575}},{t:this.shape_384,p:{x:622.125,y:491.475}},{t:this.shape_166,p:{x:640.775,y:491.575}},{t:this.shape_251,p:{x:653.925,y:491.475}},{t:this.shape_189,p:{x:666.55,y:491.575}},{t:this.shape_168,p:{x:680.825,y:489.15}},{t:this.shape_441,p:{y:489.425,x:686.3}},{t:this.shape_247,p:{x:695.675,y:491.475}},{t:this.shape_185,p:{x:708.3,y:491.575}},{t:this.shape_220,p:{x:725.475,y:491.575}},{t:this.shape_183,p:{x:737.025,y:491.475}},{t:this.shape_182,p:{x:746.7,y:491.575}},{t:this.shape_433,p:{x:761,y:489.425}},{t:this.shape_243,p:{x:770.375,y:491.475}},{t:this.shape_488,p:{x:789.45,y:489.25}},{t:this.shape_437,p:{x:801.8,y:491.575}},{t:this.shape_487,p:{x:811.5,y:490.325}},{t:this.shape_611},{t:this.shape_440,p:{x:838.3,y:491.575}},{t:this.shape_364,p:{x:850.35,y:491.575}},{t:this.shape_237,p:{x:862.975,y:491.475}},{t:this.shape_160,p:{x:872.375,y:491.575}},{t:this.shape_485},{t:this.shape_610},{t:this.shape_218,p:{x:917.375,y:491.575}},{t:this.shape_206,p:{x:930.425,y:491.475}},{t:this.shape_171,p:{x:943.25}},{t:this.shape_484,p:{x:961.625}},{t:this.shape_482},{t:this.shape_193,p:{x:363.125,y:523.375}},{t:this.shape_192,p:{x:376.175,y:523.275}},{t:this.shape_609},{t:this.shape_320,p:{y:523.375,x:407.6}},{t:this.shape_184,p:{x:419.175,y:523.375}},{t:this.shape_178,p:{x:430.925,y:523.375}},{t:this.shape_223,p:{x:442.475,y:520.95}},{t:this.shape_167,p:{x:457.325,y:520.95}},{t:this.shape_319,p:{x:462.8,y:521.225}},{t:this.shape_190,p:{x:472.175,y:523.275}},{t:this.shape_179,p:{x:484.8,y:523.375}},{t:this.shape_187,p:{x:499.1,y:521.225}},{t:this.shape_186,p:{x:508.475,y:523.275}},{t:this.shape_438,p:{x:527.55,y:521.05}},{t:this.shape_236,p:{x:539.9,y:523.375}},{t:this.shape_387,p:{x:549.6,y:522.125}},{t:this.shape_486,p:{x:561.9,y:523.375}},{t:this.shape_312,p:{x:576.4,y:523.375}},{t:this.shape_215,p:{x:588.45,y:523.375}},{t:this.shape_172,p:{x:601.075,y:523.275}},{t:this.shape_448,p:{x:618.4,y:523.375}},{t:this.shape_307,p:{x:627.2,y:522.125}},{t:this.shape_173,p:{x:636.675,y:523.375}},{t:this.shape_180,p:{x:648.225,y:523.275}},{t:this.shape_229,p:{x:655.55,y:522.125}},{t:this.shape_608},{t:this.shape_230,p:{x:683.7,y:523.375}},{t:this.shape_273,p:{x:694.85,y:521.225}},{t:this.shape_431,p:{y:522.125,x:701.3}},{t:this.shape_221,p:{x:711.825,y:520.95}},{t:this.shape_483,p:{x:729.875,y:517.575}}]},1).to({state:[{t:this.shape_326,p:{x:363.475,y:595.7}},{t:this.shape_226,p:{x:376.125,y:595.2}},{t:this.shape_312,p:{x:388.75,y:597.625}},{t:this.shape_776},{t:this.shape_413,p:{x:416.725,y:597.625}},{t:this.shape_393,p:{x:425.825,y:595.2}},{t:this.shape_367,p:{x:435.125,y:597.725}},{t:this.shape_574,p:{x:447.85,y:597.625}},{t:this.shape_198,p:{x:465.925,y:597.625}},{t:this.shape_170,p:{x:476.675,y:595.125}},{t:this.shape_410,p:{x:490.875,y:597.625}},{t:this.shape_293,p:{x:508.25,y:597.625}},{t:this.shape_402,p:{x:519.275,y:597.625}},{t:this.shape_219,p:{x:530.825,y:597.525}},{t:this.shape_775},{t:this.shape_392,p:{x:545.475,y:597.625}},{t:this.shape_774},{t:this.shape_372,p:{x:567.775,y:595.2}},{t:this.shape_252,p:{x:576.6,y:597.625}},{t:this.shape_441,p:{y:595.475,x:590.9}},{t:this.shape_511,p:{x:598.8,y:597.625}},{t:this.shape_383,p:{x:615.075,y:597.625}},{t:this.shape_598,p:{x:626.65,y:597.625}},{t:this.shape_249,p:{x:636.9,y:597.625}},{t:this.shape_576,p:{x:644.75,y:595.475}},{t:this.shape_773},{t:this.shape_425,p:{x:665.925,y:597.525}},{t:this.shape_772},{t:this.shape_771},{t:this.shape_346,p:{x:709.875,y:597.725}},{t:this.shape_533,p:{x:721.7,y:597.625}},{t:this.shape_433,p:{x:729.5,y:595.475}},{t:this.shape_384,p:{x:738.875,y:597.525}},{t:this.shape_770},{t:this.shape_431,p:{y:596.375,x:766.55}},{t:this.shape_223,p:{x:777.125,y:595.2}},{t:this.shape_769},{t:this.shape_564,p:{x:807.4,y:597.625}},{t:this.shape_768},{t:this.shape_303,p:{x:833.125,y:597.725}},{t:this.shape_376,p:{x:845.375,y:597.625}},{t:this.shape_241,p:{x:854.475,y:595.2}},{t:this.shape_224,p:{x:862.4,y:597.625}},{t:this.shape_354,p:{x:878.25,y:597.625}},{t:this.shape_352,p:{x:886.05,y:595.475}},{t:this.shape_242,p:{x:894.6,y:600.125}},{t:this.shape_251,p:{x:907.275,y:597.525}},{t:this.shape_160,p:{x:916.675,y:597.625}},{t:this.shape_271,p:{x:931.2,y:595.775}},{t:this.shape_427,p:{y:659.275}},{t:this.shape_191,p:{x:375.875,y:661.225}},{t:this.shape_578,p:{x:390.7,y:659.075}},{t:this.shape_247,p:{x:400.075,y:661.125}},{t:this.shape_169,p:{x:418.725,y:661.225}},{t:this.shape_292,p:{x:431.775,y:661.325}},{t:this.shape_214,p:{x:443.575,y:661.125}},{t:this.shape_364,p:{x:458.85,y:661.225}},{t:this.shape_421,p:{y:661.225}},{t:this.shape_374,p:{x:481.725,y:661.225}},{t:this.shape_199,p:{x:498.2,y:661.125}},{t:this.shape_419,p:{y:663.725}},{t:this.shape_239,p:{x:524.025,y:658.8}},{t:this.shape_417,p:{y:661.225}},{t:this.shape_416,p:{y:667.15}},{t:this.shape_415,p:{x:553.45,y:659.975}},{t:this.shape_414,p:{y:658.8}},{t:this.shape_207,p:{x:576.6,y:661.225}},{t:this.shape_202,p:{x:593.55,y:661.225}},{t:this.shape_359,p:{x:604.575,y:661.225}},{t:this.shape_200,p:{x:616.125,y:661.125}},{t:this.shape_426,p:{x:622.45,y:659.075}},{t:this.shape_355,p:{x:630.825,y:661.225}},{t:this.shape_767},{t:this.shape_233,p:{x:653.125,y:658.8}},{t:this.shape_320,p:{y:661.225,x:661.95}},{t:this.shape_322,p:{x:676.25,y:659.075}},{t:this.shape_245,p:{x:684.15,y:661.225}},{t:this.shape_217,p:{x:700.175,y:661.225}},{t:this.shape_323,p:{x:710.675,y:661.225}},{t:this.shape_232,p:{x:719.775,y:658.8}},{t:this.shape_188,p:{x:725.225,y:658.8}},{t:this.shape_558,p:{x:734.05,y:661.225}},{t:this.shape_766},{t:this.shape_380,p:{x:761.175,y:654.375}},{t:this.shape_572,p:{y:661.125}},{t:this.shape_161,p:{x:789.025,y:663.825}},{t:this.shape_377,p:{x:800.875,y:659.3}},{t:this.shape_246,p:{x:812.925,y:661.225}},{t:this.shape_197,p:{x:824.475,y:661.125}},{t:this.shape_570,p:{y:659.075}},{t:this.shape_225,p:{x:839.125,y:661.225}},{t:this.shape_765},{t:this.shape_168,p:{x:861.425,y:658.8}},{t:this.shape_440,p:{x:870.25,y:661.225}},{t:this.shape_371,p:{x:878.575,y:654.375}},{t:this.shape_569,p:{y:667.15}},{t:this.shape_195,p:{x:895.55,y:659.975}},{t:this.shape_386,p:{x:906.125,y:658.8}},{t:this.shape_215,p:{x:918.75,y:661.225}},{t:this.shape_243,p:{x:936.975,y:661.125}},{t:this.shape_284,p:{x:950.075,y:661.325}},{t:this.shape_379,p:{x:966.8,y:661.125}},{t:this.shape_764},{t:this.shape_182,p:{x:996,y:661.225}},{t:this.shape_183,p:{x:1007.175,y:661.125}},{t:this.shape_363,p:{x:1018.675,y:654.375}},{t:this.shape_567,p:{y:659.4}},{t:this.shape_361,p:{x:1035.725,y:654.375}},{t:this.shape_194,p:{x:1050.375,y:658.8}},{t:this.shape_220,p:{x:1062.525,y:661.225}},{t:this.shape_566,p:{y:661.225}},{t:this.shape_763},{t:this.shape_179,p:{x:376.8,y:693.025}},{t:this.shape_227,p:{x:388.9,y:693.025}},{t:this.shape_237,p:{x:401.525,y:692.925}},{t:this.shape_218,p:{x:419.225,y:693.025}},{t:this.shape_204,p:{x:430.8,y:693.025}},{t:this.shape_448,p:{x:441.1,y:693.025}},{t:this.shape_405,p:{x:448.9,y:690.875}},{t:this.shape_563,p:{y:695.525}},{t:this.shape_206,p:{x:470.075,y:692.925}},{t:this.shape_297,p:{x:482.7,y:693.025}},{t:this.shape_562,p:{y:690.7}},{t:this.shape_205,p:{x:511.2,y:691.775}},{t:this.shape_166,p:{x:521.625,y:693.025}},{t:this.shape_187,p:{x:536.45,y:690.875}},{t:this.shape_216,p:{x:542.9,y:691.775}},{t:this.shape_370,p:{x:549,y:698.95}},{t:this.shape_193,p:{x:563.225,y:693.025}},{t:this.shape_192,p:{x:576.275,y:692.925}},{t:this.shape_561,p:{y:690.7}},{t:this.shape_301,p:{x:604.35,y:690.875}},{t:this.shape_487,p:{x:610.8,y:691.775}},{t:this.shape_221,p:{x:626.925,y:690.6}},{t:this.shape_184,p:{x:639.075,y:693.025}},{t:this.shape_554,p:{x:650.65,y:693.025}},{t:this.shape_762},{t:this.shape_291,p:{x:680.6,y:693.025}},{t:this.shape_189,p:{x:692.65,y:693.025}},{t:this.shape_190,p:{x:705.275,y:692.925}},{t:this.shape_557,p:{y:690.7}},{t:this.shape_175,p:{x:736.7,y:693.025}},{t:this.shape_178,p:{x:748.025,y:693.025}},{t:this.shape_167,p:{x:755.625,y:690.6}},{t:this.shape_173,p:{x:764.025,y:693.025}},{t:this.shape_180,p:{x:775.575,y:692.925}},{t:this.shape_164,p:{x:785.25,y:693.025}},{t:this.shape_555,p:{y:690.7}},{t:this.shape_276,p:{x:816.575,y:693.125}},{t:this.shape_459,p:{x:828.4,y:693.025}},{t:this.shape_411,p:{x:836.2,y:690.875}},{t:this.shape_186,p:{x:845.575,y:692.925}},{t:this.shape_458,p:{x:857.95,y:695.525}},{t:this.shape_342,p:{x:871.875,y:686.175}},{t:this.shape_238,p:{x:877,y:690.875}},{t:this.shape_172,p:{x:886.375,y:692.925}},{t:this.shape_311,p:{x:896.65,y:691.775}},{t:this.shape_340,p:{x:902.875,y:686.175}},{t:this.shape_339,p:{x:908.125,y:697.675}},{t:this.shape_618,p:{x:365.85,y:169.275}},{t:this.shape_761},{t:this.shape_619,p:{x:396.45,y:169.375}},{t:this.shape_760},{t:this.shape_506,p:{y:171.575,x:434.4}},{t:this.shape_544,p:{x:449.025}},{t:this.shape_548,p:{x:457.55}},{t:this.shape_759},{t:this.shape_541,p:{x:485.075}},{t:this.shape_328,p:{x:496.575,y:168.675}},{t:this.shape_260,p:{x:507.825,y:171.575}},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622}]},1).to({state:[{t:this.shape_621,p:{y:267.575}},{t:this.shape_620,p:{y:267.675}},{t:this.shape_619,p:{x:396.8,y:267.675}},{t:this.shape_270,p:{x:419.875,y:267.575}},{t:this.shape_332,p:{x:433.875,y:269.75}},{t:this.shape_331,p:{x:442.4,y:267.15}},{t:this.shape_603,p:{x:454.425}},{t:this.shape_602,p:{x:467.85}},{t:this.shape_502,p:{y:267.15,x:476.8}},{t:this.shape_335,p:{x:488.825,y:269.75}},{t:this.shape_796},{t:this.shape_326,p:{x:363.475,y:334.35}},{t:this.shape_306,p:{x:376.125,y:333.85}},{t:this.shape_368,p:{x:388.75,y:336.275}},{t:this.shape_795},{t:this.shape_794},{t:this.shape_214,p:{x:426.225,y:336.175}},{t:this.shape_411,p:{x:432.55,y:334.125}},{t:this.shape_613,p:{x:441.975,y:336.175}},{t:this.shape_495,p:{x:452.25,y:335.025}},{t:this.shape_793},{t:this.shape_204,p:{x:474.45,y:336.275}},{t:this.shape_792},{t:this.shape_225,p:{x:492.725,y:336.275}},{t:this.shape_456,p:{x:502.85,y:335.025}},{t:this.shape_215,p:{x:512.85,y:336.275}},{t:this.shape_791},{t:this.shape_320,p:{y:336.275,x:544.95}},{t:this.shape_584,p:{x:557.575,y:336.175}},{t:this.shape_790},{t:this.shape_353,p:{x:582.5,y:336.275}},{t:this.shape_250,p:{x:591.3,y:335.025}},{t:this.shape_220,p:{x:600.825,y:336.275}},{t:this.shape_200,p:{x:612.375,y:336.175}},{t:this.shape_789},{t:this.shape_788},{t:this.shape_218,p:{x:645.025,y:336.275}},{t:this.shape_425,p:{x:658.075,y:336.175}},{t:this.shape_787},{t:this.shape_530,p:{x:689.5,y:336.275}},{t:this.shape_384,p:{x:702.125,y:336.175}},{t:this.shape_786},{t:this.shape_511,p:{x:727.05,y:336.275}},{t:this.shape_785},{t:this.shape_301,p:{x:757.25,y:334.125}},{t:this.shape_784},{t:this.shape_294,p:{x:774.225,y:333.85}},{t:this.shape_160,p:{x:783.625,y:336.275}},{t:this.shape_217,p:{x:797.425,y:336.275}},{t:this.shape_198,p:{x:808.825,y:336.275}},{t:this.shape_303,p:{x:821.875,y:336.375}},{t:this.shape_216,p:{x:832.25,y:335.025}},{t:this.shape_783},{t:this.shape_782},{t:this.shape_193,p:{x:888.675,y:336.275}},{t:this.shape_251,p:{x:901.725,y:336.175}},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_175,p:{x:968.9,y:336.275}},{t:this.shape_247,p:{x:981.525,y:336.175}},{t:this.shape_778},{t:this.shape_188,p:{x:1003.975,y:333.85}},{t:this.shape_777},{t:this.shape_594},{t:this.shape_593},{t:this.shape_452,p:{y:399.875}},{t:this.shape_243,p:{x:409.425,y:399.775}},{t:this.shape_451,p:{x:425.3,y:398.625}},{t:this.shape_592},{t:this.shape_450,p:{y:399.875}},{t:this.shape_178,p:{x:465.375,y:399.875}},{t:this.shape_191,p:{x:476.775,y:399.875}},{t:this.shape_591},{t:this.shape_312,p:{x:502.6,y:399.875}},{t:this.shape_405,p:{x:516.85,y:397.725}},{t:this.shape_448,p:{x:524.8,y:399.875}},{t:this.shape_380,p:{x:537.775,y:393.025}},{t:this.shape_197,p:{x:545.325,y:399.775}},{t:this.shape_292,p:{x:555.475,y:399.975}},{t:this.shape_237,p:{x:568.775,y:399.775}},{t:this.shape_371,p:{x:577.675,y:393.025}},{t:this.shape_447,p:{y:399.85}},{t:this.shape_446,p:{y:398.625}},{t:this.shape_590},{t:this.shape_185,p:{x:625.05,y:399.875}},{t:this.shape_363,p:{x:638.975,y:393.025}},{t:this.shape_445,p:{y:399.875}},{t:this.shape_444,p:{y:398.625}},{t:this.shape_184,p:{x:664.825,y:399.875}},{t:this.shape_415,p:{x:674.95,y:398.625}},{t:this.shape_177,p:{x:684.9,y:399.875}},{t:this.shape_443,p:{y:399.775}},{t:this.shape_179,p:{x:717,y:399.875}},{t:this.shape_206,p:{x:729.675,y:399.775}},{t:this.shape_387,p:{x:739.95,y:398.625}},{t:this.shape_361,p:{x:746.175,y:393.025}},{t:this.shape_244,p:{x:756.85,y:397.725}},{t:this.shape_275,p:{x:764.8,y:399.875}},{t:this.shape_442,p:{y:402.375}},{t:this.shape_183,p:{x:793.775,y:399.775}},{t:this.shape_441,p:{y:397.725,x:800.15}},{t:this.shape_192,p:{x:809.525,y:399.775}},{t:this.shape_229,p:{x:819.8,y:398.625}},{t:this.shape_440,p:{x:829.75,y:399.875}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_437,p:{x:873.8,y:399.875}},{t:this.shape_168,p:{x:882.475,y:397.45}},{t:this.shape_169,p:{x:891.725,y:399.875}},{t:this.shape_436,p:{y:399.875}},{t:this.shape_238,p:{x:923.35,y:397.725}},{t:this.shape_190,p:{x:932.775,y:399.775}},{t:this.shape_205,p:{x:948.6,y:398.625}},{t:this.shape_587},{t:this.shape_435,p:{x:971.8,y:399.875}},{t:this.shape_342,p:{x:985.675,y:393.025}},{t:this.shape_521,p:{x:994.025,y:397.95}},{t:this.shape_236,p:{x:1006.1,y:399.875}},{t:this.shape_180,p:{x:1017.225,y:399.775}},{t:this.shape_434,p:{y:399.775}},{t:this.shape_433,p:{x:1043.6,y:397.725}},{t:this.shape_186,p:{x:1052.975,y:399.775}},{t:this.shape_173,p:{x:1065.125,y:399.875}},{t:this.shape_167,p:{x:1074.225,y:397.45}},{t:this.shape_432,p:{y:429.725}},{t:this.shape_284,p:{x:380.875,y:431.775}},{t:this.shape_431,p:{y:430.425,x:391.25}},{t:this.shape_430,p:{y:434.175}},{t:this.shape_276,p:{x:414.925,y:431.775}},{t:this.shape_195,p:{x:425.3,y:430.425}},{t:this.shape_340,p:{x:431.525,y:424.825}},{t:this.shape_429,p:{y:431.675,x:447.9}},{t:this.shape_187,p:{x:459.05,y:429.525}},{t:this.shape_172,p:{x:468.425,y:431.575}},{t:this.shape_586},{t:this.shape_166,p:{x:494.675,y:431.675}},{t:this.shape_230,p:{x:509.55,y:431.675}},{t:this.shape_339,p:{x:520.825,y:436.325}}]},1).wait(1));

	// text_bg
	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#1A1A1A").s().p("Eg/FAdWMAAAg6rMB+LAAAMAAAA6rg");
	this.shape_797.setTransform(741.7,537.425);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#1A1A1A").s().p("A0lCfIAAk9MApLAAAIAAE9g");
	this.shape_798.setTransform(740.0139,232.0198,3.0112,6.2396);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#1A1A1A").s().p("A0lCfIAAk9MApLAAAIAAE9g");
	this.shape_799.setTransform(742.7639,628.1198,3.0112,6.2396);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#1A1A1A").s().p("Eg/AAVuMAAAgrbMB+BAAAMAAAArbg");
	this.shape_800.setTransform(741.25,313.1513,1,1.1953);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_797,p:{scaleX:1,scaleY:1,x:741.7,y:537.425}}]},1).to({state:[{t:this.shape_799,p:{y:628.1198,scaleY:6.2396}},{t:this.shape_798,p:{scaleY:6.2396,y:232.0198}}]},1).to({state:[{t:this.shape_800,p:{y:313.1513,scaleX:1,scaleY:1.1953,x:741.25}}]},1).to({state:[]},1).to({state:[{t:this.shape_797,p:{scaleX:1,scaleY:1,x:741.7,y:537.425}}]},1).to({state:[{t:this.shape_799,p:{y:598.1198,scaleY:6.2396}},{t:this.shape_798,p:{scaleY:6.2396,y:232.0198}}]},1).to({state:[{t:this.shape_800,p:{y:313.143,scaleX:1,scaleY:1.1953,x:741.25}}]},1).to({state:[]},1).to({state:[{t:this.shape_797,p:{scaleX:0.9728,scaleY:1.0905,x:735.6984,y:521.4283}}]},1).to({state:[{t:this.shape_799,p:{y:649.9586,scaleY:4.8836}},{t:this.shape_798,p:{scaleY:5.7352,y:224.646}}]},1).to({state:[{t:this.shape_800,p:{y:346.6495,scaleX:0.9628,scaleY:1.4581,x:741.2861}}]},1).wait(1));

	// code_tabs
	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#FCEE20").s().p("AgKBQIAAhIIgzhXIAXAAIAmBGIAnhGIAXAAIgzBXIAABIg");
	this.shape_801.setTransform(363.625,115.7);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#0071BC").s().p("AgyBQIAAifIAvAAQAaAAAOAMQAOAMAAAYQAAAXgOAMQgOAMgaAAIgZAAIAABAgAgcgBIAZAAQANAAAKgIQAIgIAAgOQAAgOgIgJQgIgHgPgBIgZAAg");
	this.shape_802.setTransform(350.925,115.7);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#FCEE20").s().p("AgaBRQgPgEgIgEIAAgXQANAIALAEQAKADAMAAQAPAAAKgHQAJgHAAgOQAAgMgHgGQgFgGgQgEIgLgCQgXgGgJgJQgLgJABgSQgBgWAOgMQAPgNAXAAQALAAAJACIAVAGIAAAWQgJgGgLgEQgJgDgLAAQgOAAgJAHQgJAIAAAMQAAALAGAFQAGAGAPADIALADQAXAFAKAKQAKAMAAATQAAAXgOAMQgOAMgaAAQgKAAgNgCg");
	this.shape_803.setTransform(633.65,115.725);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#FCEE20").s().p("AgXBPQgKgCgLgFIAAgaQAJAJALAFQAKAEALAAQAPAAAGgIQAGgIAAgWIAAhZIgoAAIAAgSIA+AAIAABrQAAAfgMAMQgMANgZAAQgJAAgLgDg");
	this.shape_804.setTransform(619.45,115.875);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#0071BC").s().p("AgIA5IAAgwIgwAAIAAgRIAwAAIAAgwIARAAIAAAwIAwAAIAAARIgwAAIAAAwg");
	this.shape_805.setTransform(917.075,116.725);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#0071BC").s().p("AgIA5IAAgwIgwAAIAAgRIAwAAIAAgwIARAAIAAAwIAwAAIAAARIgwAAIAAAwg");
	this.shape_806.setTransform(903.825,116.725);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#0071BC").s().p("AggA9QgRgVAAgoQAAgnARgVQARgWAdAAQALAAAIACQAJACAIAEIAAAXQgIgHgJgDQgJgEgKAAQgTAAgLARQgLAQAAAgQAAAhALAQQALAQATAAQAKAAAJgDQAJgDAIgHIAAAWQgIAEgJADQgJACgKAAQgdAAgRgWg");
	this.shape_807.setTransform(890.25,115.725);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#525354").s().p("A0lCfIAAk9MApLAAAIAAE9g");
	this.shape_808.setTransform(1013.375,115.575);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#525354").s().p("A03CfIAAk9MApwAAAIAAE9g");
	this.shape_809.setTransform(743.25,115.575);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#525354").s().p("A0tCfIAAk9MApbAAAIAAE9g");
	this.shape_810.setTransform(471.525,115.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801}]}).to({state:[{t:this.shape_810},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801}]},4).to({state:[{t:this.shape_809},{t:this.shape_810},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801}]},4).wait(4));

	// code_text
	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#FFFFFF").s().p("AgTBQQAMgVAGgTQAEgVAAgTQAAgSgEgVQgGgTgMgVIAOAAQAOAXAEASQAHATAAATQAAAUgHAUQgEARgOAXg");
	this.shape_811.setTransform(1033.6,621.475);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#F9EB70").s().p("AgeAmQgNgPAAgXQAAgXANgOQAMgOAUABQAUAAAKAMQALANABASIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAGAAAKgCQAJgDAJgFIAAAQQgLAEgHABQgHACgJAAQgWAAgNgNgAgQgeQgIAJgBAJIA1AAQgBgKgHgIQgGgHgMAAQgLAAgHAHg");
	this.shape_812.setTransform(1023.15,623.1);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#F9EB70").s().p("AASBFQgOgBgIgIQgIgKAAgRIAAhYIgZAAIAAgNIAoAAIAABlQAAAKAFAGQAEAGAHAAIATAAIAAAOg");
	this.shape_813.setTransform(1012.8,621.15);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#F9EB70").s().p("AgMBCQgIgFgDgGIAAAMIgQAAIAAiHIAQAAIAAAyQAEgIAHgDQAGgDAIAAQASAAAKANQALAOAAAXQAAAYgLAOQgKANgSAAQgIABgGgEgAgRgKQgGAKAAASQAAATAGAJQAGAKALAAQALAAAGgJQAGgKABgTQgBgSgGgKQgGgJgLAAQgLAAgGAJg");
	this.shape_814.setTransform(1001.75,621.3);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#F9EB70").s().p("AgfArQgJgIAAgOQAAgRALgIQAMgIAUAAIAVAAIAAgCQAAgMgGgGQgFgFgNAAQgHAAgJADQgKACgHAEIAAgQIASgFIAPgBQANAAAHADQAJAEAFAGQAEAFABAHQACAGAAANIAAA3IgRAAIAAgPQgFAJgIAFQgIADgKAAQgPAAgJgIgAgQAEQgIAGAAAKQAAAIAGAFQAFAFAKAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgGAEg");
	this.shape_815.setTransform(990.425,623.1);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#F9EB70").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_816.setTransform(980.45,621.2);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#F9EB70").s().p("AgiAyIAAhhIAQAAIAAATQAFgLAIgFQAGgFANAAIALABQAFACAFADIAAAQQgEgDgHgDQgHgCgFAAQgNAAgJAKQgIAKAAAQIAAAxg");
	this.shape_817.setTransform(970.175,622.975);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#F9EB70").s().p("AgfArQgIgIgBgOQAAgRAMgIQAKgIAVAAIAVAAIAAgCQAAgMgFgGQgGgFgNAAQgHAAgJADQgJACgIAEIAAgQIARgFIAQgBQANAAAHADQAJAEAGAGQADAFABAHQABAEAAAPIAAA3IgQAAIAAgPQgEAJgJAFQgJADgJAAQgPAAgJgIgAgQAEQgIAGAAAKQABAIAFAFQAFAFAJAAQANAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgGAEg");
	this.shape_818.setTransform(957.9,623.1);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#F9EB70").s().p("AgKBCIgmiDIASAAIAeB0IAfh0IASAAIgmCDg");
	this.shape_819.setTransform(947.25,621.45);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#F9EB70").s().p("AgmBEIAAgOIAJAAQAHAAAFgDQAEgGAGgQIgmhgIARAAIAcBMIAdhMIARAAIgkBdQgIAWgDAGQgFAIgFACQgGAEgIAAg");
	this.shape_820.setTransform(936.525,624.95);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#F9EB70").s().p("AAeAyIAAg3QAAgWgCgEQgCgFgHAAQgGAAgDAFQgDAHAAATIAAA3IgNAAIAAg3QAAgVgDgFQgCgFgHAAQgHAAgCAFQgCAFAAAVIAAA3IgPAAIAAhhIAPAAIAAAIQACgEAFgEQAEgCAGAAQAGAAAFADQAEADACAGQADgGAEgDQAFgDAGAAQAMAAAFAJQAFAKAAAYIAAA4g");
	this.shape_821.setTransform(925.625,622.975);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#FFFFFF").s().p("AgRAeIAJglIAAgWIAbAAIAAAWIgTAlg");
	this.shape_822.setTransform(903.25,627.9);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#C69C6D").s().p("AAOAbIAAg1IATAAIAAA1gAggAbIAAg1IATAAIAAA1g");
	this.shape_823.setTransform(892.625,617.1);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#C69C6D").s().p("AgNAxIAAggIAaAAIAAAggAgNgQIAAggIAaAAIAAAgg");
	this.shape_824.setTransform(881.95,623.075);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#C69C6D").s().p("AgeAmQgNgPAAgXQAAgXANgOQAMgOAVABQATAAAKAMQALAMABATIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAHAAAJgCQAJgDAJgFIAAAQQgKAEgHABQgIACgJAAQgWAAgNgNgAgQgeQgIAJgBAJIA1AAQgBgKgHgIQgGgHgMAAQgLAAgHAHg");
	this.shape_825.setTransform(871.425,623.1);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#C69C6D").s().p("AgdAoQgIgJABgUIAAg8IAPAAIAAA8QAAANAGAGQAEAGAKAAQALAAAFgIQAHgIgBgPIAAg2IARAAIAABhIgRAAIAAgPQgFAJgGAEQgHAEgJAAQgQAAgHgKg");
	this.shape_826.setTransform(860.6,623.225);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#C69C6D").s().p("AASBFQgOgBgIgIQgHgKgBgRIAAhYIgaAAIAAgNIApAAIAABlQAAAKAFAGQAEAGAIAAIATAAIAAAOg");
	this.shape_827.setTransform(850.25,621.15);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#C69C6D").s().p("AgeArQgKgIABgOQgBgRALgIQALgIAVAAIAVAAIAAgCQABgMgHgGQgFgFgNAAQgHAAgJADQgKACgGAEIAAgQIARgFIAPgBQAMAAAJADQAIAEAFAGQAEAFACAHIABBKIgRAAIAAgPQgEAJgIAFQgKADgIAAQgRAAgHgIgAgRAEQgGAGAAAKQgBAIAGAFQAFAFAKAAQAMAAAHgJQAJgJgBgRIAAgDIgUAAQgNAAgIAEg");
	this.shape_828.setTransform(838.7,623.1);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#C69C6D").s().p("AgJAxIgkhhIASAAIAbBSIAchSIARAAIgjBhg");
	this.shape_829.setTransform(828.05,623.075);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#C69C6D").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAUABQATAAALAMQALANABASIAAAHIhFAAIAAAAQgBAVAIAIQAJAJAOAAQAHAAAJgCQAJgDAJgFIAAAQQgKAEgIABQgHACgJAAQgWAAgNgNgAgQgeQgIAJgBAJIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAHg");
	this.shape_830.setTransform(806.425,623.1);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#C69C6D").s().p("AAVBEIAAg9QAAgMgFgGQgEgGgKAAQgLAAgFAIQgHAHAAAPIAAA3IgQAAIAAiHIAQAAIAAA1QAFgJAHgEQAHgEAJAAQAPAAAIAJQAIAKAAATIAAA9g");
	this.shape_831.setTransform(795.6,621.175);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#C69C6D").s().p("AATA/QgRAAgHgHQgIgHABgSIAAg1IgaAAIAAgMIAaAAIAAgcIAOAAIAAAcIAlAAIAAAMIglAAIAAA1QAAALAFAEQAEAEAKAAIASAAIAAANg");
	this.shape_832.setTransform(784.4,621.675);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#C69C6D").s().p("AgRAyIgSgEIAAgRIASAHQAHACAIAAQAKAAAGgFQAFgDAAgJQABgLgVgEIAAAAIgGgCQgNgBgIgHQgGgGAAgLQAAgOAJgIQAKgHAQAAIAQABQAHABAHADIAAAQQgHgFgHgBQgGgCgJAAQgJAAgGAEQgFADAAAHQAAAHAEADQAFAEAOADIAGABQAMACAHAGQAGAHAAALQAAAPgKAHQgKAIgSAAg");
	this.shape_833.setTransform(763.05,623.1);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#C69C6D").s().p("AgdA4QgKgPAAgXQAAgXAKgOQAKgNASAAQAIAAAHADQAGADAEAIIAAgyIAQAAIAACHIgQAAIAAgMQgDAGgHAFQgHAEgIgBQgSAAgKgNgAgQgKQgGAKAAASQAAATAGAKQAGAJAKAAQAMAAAGgKQAGgJAAgTQAAgSgGgKQgGgJgMAAQgKAAgGAJg");
	this.shape_834.setTransform(751.875,621.3);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#C69C6D").s().p("AASBFQgPgBgGgIQgIgKAAgRIAAhYIgaAAIAAgNIApAAIAABlQAAAKAEAGQAEAGAIAAIASAAIAAAOg");
	this.shape_835.setTransform(741.875,621.15);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#C69C6D").s().p("AgeAnQgLgNAAgaQAAgZALgNQAKgNAUABQAUgBAMANQAKAOAAAYQAAAZgKAOQgMAMgUAAQgUAAgKgMgAgSgcQgGAKAAASQAAATAGAKQAHAJALAAQAMAAAHgJQAGgKAAgTQAAgRgGgLQgHgJgMAAQgLAAgHAJg");
	this.shape_836.setTransform(730.5,623.1);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#C69C6D").s().p("AAVBEIAAg9QAAgMgEgGQgFgGgKAAQgKAAgGAIQgGAHAAAPIAAA3IgRAAIAAiHIARAAIAAA1QAEgJAHgEQAHgEAKAAQAPAAAHAJQAIAKAAATIAAA9g");
	this.shape_837.setTransform(719.725,621.175);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#C69C6D").s().p("AgJAbIAAg2IATAAIAAA2g");
	this.shape_838.setTransform(698.125,617.05);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#C69C6D").s().p("AgeAmQgNgPAAgXQAAgXANgOQANgOATABQAUAAALAMQAKANABASIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAHAAAJgCQAJgDAJgFIAAAQQgLAEgHABQgHACgJAAQgWAAgNgNgAgRgeQgHAJgBAJIA0AAQAAgJgHgJQgGgHgMAAQgLAAgIAHg");
	this.shape_839.setTransform(687.2,623.1);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#C69C6D").s().p("AASBFQgOgBgHgIQgIgKAAgRIAAhYIgaAAIAAgNIApAAIAABlQAAALAEAFQAEAGAHAAIATAAIAAAOg");
	this.shape_840.setTransform(676.85,621.15);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#C69C6D").s().p("AgMBCQgIgFgDgGIAAAMIgQAAIAAiHIAQAAIAAAyQAEgIAHgDQAGgDAJAAQARAAAKANQALAOAAAXQAAAYgLAOQgKANgSAAQgIABgGgEgAgRgKQgGAKAAASQAAATAGAJQAGAKALAAQALAAAGgJQAHgKAAgTQAAgSgHgKQgFgJgMAAQgLAAgGAJg");
	this.shape_841.setTransform(665.8,621.3);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#C69C6D").s().p("AgfArQgJgIAAgOQAAgRALgIQAMgIAUAAIAVAAIAAgCQAAgMgGgGQgFgFgNAAQgGAAgKADQgKACgHAEIAAgQIASgFIAPgBQANAAAHADQAIAEAHAGQADAFABAHQACAGAAANIAAA3IgRAAIAAgPQgFAJgIAFQgIADgKAAQgPAAgJgIgAgQAEQgIAGAAAKQAAAIAGAFQAFAFAKAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgGAEg");
	this.shape_842.setTransform(654.475,623.1);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#C69C6D").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_843.setTransform(644.5,621.2);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#C69C6D").s().p("AgiAyIAAhhIAQAAIAAATQAFgLAIgFQAGgFANAAIALABQAFACAFADIAAAQQgEgDgHgDQgHgCgEAAQgOAAgJAKQgIAKAAAQIAAAxg");
	this.shape_844.setTransform(634.225,622.975);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#C69C6D").s().p("AgfArQgJgIAAgOQAAgRALgIQAMgIAUAAIAVAAIAAgCQAAgMgGgGQgFgFgNAAQgHAAgJADQgKACgHAEIAAgQIASgFIAPgBQANAAAHADQAJAEAFAGQAEAFABAHQACAGAAANIAAA3IgRAAIAAgPQgEAJgJAFQgJADgJAAQgPAAgJgIgAgRAEQgHAGAAAKQAAAIAGAFQAFAFAKAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgHAEg");
	this.shape_845.setTransform(621.975,623.1);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#C69C6D").s().p("AgJBCIgniDIASAAIAeB0IAfh0IASAAIgmCDg");
	this.shape_846.setTransform(611.3,621.45);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#C69C6D").s().p("AgmBEIAAgOIAJAAQAHAAAFgDQAEgGAGgQIgmhgIARAAIAcBMIAdhMIARAAIgkBdQgIAWgDAGQgFAIgFACQgFAEgJAAg");
	this.shape_847.setTransform(600.575,624.95);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#C69C6D").s().p("AAeAyIAAg3QAAgWgCgEQgDgFgFAAQgHAAgDAFQgDAHAAATIAAA3IgNAAIAAg3QAAgUgDgGQgDgFgGAAQgHAAgCAFQgCAFAAAVIAAA3IgPAAIAAhhIAPAAIAAAIQADgFAEgDQAEgCAGAAQAGAAAFADQAEADACAGQADgGAEgDQAFgDAHAAQALAAAFAJQAFAKAAAYIAAA4g");
	this.shape_848.setTransform(589.675,622.975);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#C69C6D").s().p("AgJAbIAAg2IATAAIAAA2g");
	this.shape_849.setTransform(578.925,617.05);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#C69C6D").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAUABQATAAALAMQALANABASIAAAHIhFAAIAAAAQgBAVAIAIQAJAJAOAAQAHAAAJgCQAJgDAJgFIAAAQQgKAEgIABQgHACgJAAQgWAAgNgNgAgQgeQgIAJgBAJIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAHg");
	this.shape_850.setTransform(557.175,623.1);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#C69C6D").s().p("AASBFQgOgBgHgIQgIgLAAgQIAAhYIgaAAIAAgNIApAAIAABlQAAALAEAFQAEAGAHAAIATAAIAAAOg");
	this.shape_851.setTransform(546.8,621.15);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#C69C6D").s().p("AgMBCQgIgFgDgGIAAAMIgQAAIAAiHIAQAAIAAAyQAEgIAHgDQAGgDAJAAQARAAALANQAJAOABAXQgBAXgJAPQgLANgSAAQgIABgGgEgAgRgKQgGAKAAASQAAATAGAJQAGAKALAAQALAAAGgJQAHgKAAgTQAAgSgHgKQgFgJgMAAQgLAAgGAJg");
	this.shape_852.setTransform(535.75,621.3);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#C69C6D").s().p("AgfArQgJgIAAgOQAAgRALgIQAMgIAUAAIAVAAIAAgCQAAgMgGgGQgFgFgNAAQgGAAgKADQgKACgGAEIAAgQIARgFIAPgBQAMAAAJADQAJAEAFAGQADAFABAHQACAGAAANIAAA3IgRAAIAAgPQgEAJgJAFQgIADgKAAQgPAAgJgIgAgQAEQgHAFAAALQAAAIAFAFQAFAFAKAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgGAEg");
	this.shape_853.setTransform(524.425,623.1);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#C69C6D").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_854.setTransform(514.475,621.2);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#C69C6D").s().p("AgiAyIAAhhIAQAAIAAATQAFgLAIgFQAHgFAMAAQAGAAAFABQAFACAFADIAAAQQgEgDgHgDQgHgCgEAAQgOAAgJAKQgIAKAAAQIAAAxg");
	this.shape_855.setTransform(504.175,622.975);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#C69C6D").s().p("AgfArQgJgIAAgOQAAgRALgIQAMgIAUAAIAVAAIAAgCQAAgMgGgGQgFgFgNAAQgGAAgKADQgKACgHAEIAAgQIASgFIAPgBQANAAAHADQAJAEAFAGQAEAFABAHQACAGAAANIAAA3IgRAAIAAgPQgFAJgIAFQgIADgKAAQgPAAgJgIgAgQAEQgIAGAAAKQAAAIAGAFQAFAFAKAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgGAEg");
	this.shape_856.setTransform(491.925,623.1);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#C69C6D").s().p("AgJAxIgjhhIARAAIAbBSIAdhSIARAAIgjBhg");
	this.shape_857.setTransform(481.25,623.075);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#C69C6D").s().p("AgeAmQgNgPAAgXQAAgXANgOQAMgOAVABQATAAAKAMQALAMABATIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAHAAAJgCQAKgDAIgFIAAAQQgKAEgHABQgIACgJAAQgWAAgNgNgAgQgeQgIAJgBAJIA1AAQgCgLgGgHQgGgHgMAAQgLAAgHAHg");
	this.shape_858.setTransform(459.625,623.1);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#C69C6D").s().p("AAWBEIAAg9QAAgMgFgGQgFgGgKAAQgKAAgHAIQgFAHAAAPIAAA3IgRAAIAAiHIARAAIAAA1QAEgJAHgEQAHgEAKAAQAPAAAIAJQAGAKAAATIAAA9g");
	this.shape_859.setTransform(448.8,621.175);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#C69C6D").s().p("AgIBCIAAhzIgpAAIAAgQIBjAAIAAAQIgpAAIAABzg");
	this.shape_860.setTransform(437.9,621.45);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#C69C6D").s().p("AAOAbIAAg1IATAAIAAA1gAggAbIAAg1IAUAAIAAA1g");
	this.shape_861.setTransform(426.625,617.1);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#FFFFFF").s().p("AAGBQQgMgUgHgUQgGgUAAgUQAAgTAGgTQAHgVAMgUIAOAAQgMAVgFATQgFAUAAATQAAAUAFAUQAFATAMAVg");
	this.shape_862.setTransform(416.325,621.475);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#F9EB70").s().p("AAUA/QgSAAgHgHQgHgHgBgSIAAg1IgaAAIAAgMIAaAAIAAgcIAQAAIAAAcIAkAAIAAAMIgkAAIAAA1QAAALAEAEQAEAEAKAAIASAAIAAANg");
	this.shape_863.setTransform(405.1,621.675);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#F9EB70").s().p("AAVAyIAAg8QAAgNgEgGQgFgGgKAAQgKAAgGAIQgGAHAAAQIAAA2IgRAAIAAhhIARAAIAAAPQAEgJAHgEQAHgEAKAAQAPAAAHAJQAIAKAAAUIAAA8g");
	this.shape_864.setTransform(394.625,622.975);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#F9EB70").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_865.setTransform(384.425,621.2);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#F9EB70").s().p("AgiAyIAAhhIARAAIAAATQAEgLAIgFQAHgFAMAAIALABQAFACAFADIAAAQQgEgDgHgDQgHgCgEAAQgOAAgIAKQgIAJAAARIAAAxg");
	this.shape_866.setTransform(374.125,622.975);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#F9EB70").s().p("AgnBFIAAiHIAQAAIAAAMQAEgHAHgDQAGgEAIAAQATAAAJAOQAKANAAAZQAAAXgKANQgJAOgTAAQgIAAgGgEQgHgEgEgHIAAAygAgRgtQgGAKAAASQAAASAGAJQAGAKALAAQALAAAHgJQAGgKAAgSQAAgSgGgKQgGgJgMAAQgLAAgGAJg");
	this.shape_867.setTransform(362.325,624.85);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAVABQATAAAKAMQAMANAAASIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAHAAAJgCQAJgDAJgFIAAAQQgKAEgHABQgIACgJAAQgWAAgNgNgAgQgeQgIAJAAAJIA0AAQgBgKgHgIQgGgHgMAAQgLAAgHAHg");
	this.shape_868.setTransform(947.275,558.3);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#059245").s().p("AASBFQgPgBgHgIQgHgKAAgRIAAhYIgaAAIAAgNIAoAAIAABlQABAKAEAGQAEAGAHAAIATAAIAAAOg");
	this.shape_869.setTransform(936.95,556.35);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#059245").s().p("AgeAnQgLgNAAgaQAAgZALgNQAKgNAUABQAVgBAKANQALANAAAZQAAAagLANQgKAMgVAAQgUAAgKgMgAgSgcQgGALAAARQAAASAGALQAHAJALAAQAMAAAHgJQAGgKAAgTQAAgRgGgLQgHgJgMAAQgLAAgHAJg");
	this.shape_870.setTransform(925.575,558.3);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#059245").s().p("AgSAyIgRgEIAAgRQAIAEAJADQAHACAJAAQAKAAAGgFQAGgDAAgJQAAgLgVgEIgBAAIgGgCQgNgBgHgHQgGgGAAgLQAAgOAJgIQAJgHARAAIAQAAIAOAFIAAAQQgHgFgHgBQgGgCgIAAQgLAAgFAEQgFADAAAHQAAAHAEADQAFAEAOADIAHABQAMACAGAGQAGAHAAALQAAAPgKAHQgKAIgSAAg");
	this.shape_871.setTransform(914.775,558.3);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#059245").s().p("AAWAyIAAg8QgBgNgEgGQgFgGgKAAQgKAAgGAIQgHAHABAQIAAA2IgRAAIAAhhIARAAIAAAPQAEgJAHgEQAHgEAKAAQAPAAAIAJQAGAKABAUIAAA8g");
	this.shape_872.setTransform(903.95,558.175);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#059245").s().p("AgeAnQgLgNAAgaQAAgZALgNQAKgNAUABQAUgBALANQALAOAAAYQAAAZgLAOQgKAMgVAAQgUAAgKgMgAgSgcQgGAKAAASQAAATAGAKQAHAJALAAQAMAAAHgJQAGgKAAgTQAAgRgGgLQgHgJgMAAQgMAAgGAJg");
	this.shape_873.setTransform(893.075,558.3);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#059245").s().p("AgYAmQgNgOAAgYQAAgXANgOQANgNAWAAQAHgBAGACIAOAGIAAARQgHgGgGgCQgHgDgHAAQgPAAgIAKQgIAKAAARQAAASAIAKQAJAKAOAAQAHAAAIgCQAHgEAFgEIAAAQQgHAEgGABQgGACgIAAQgWAAgNgNg");
	this.shape_874.setTransform(882.325,558.3);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAUABQATAAALAMQAMANAAASIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAGAAAKgCQAJgDAJgFIAAAQIgSAFQgHACgJAAQgWAAgNgNgAgQgeQgIAJAAAJIA0AAQgBgKgHgIQgGgHgMAAQgLAAgHAHg");
	this.shape_875.setTransform(860.6,558.3);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#059245").s().p("AAVBEIAAg9QAAgMgEgGQgFgGgKAAQgKAAgGAIQgGAHAAAPIAAA3IgRAAIAAiHIARAAIAAA1QAEgJAHgEQAHgEAKAAQAPAAAHAJQAIAKAAATIAAA9g");
	this.shape_876.setTransform(849.775,556.375);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#059245").s().p("AAUA/QgSAAgHgHQgHgHAAgSIAAg1IgbAAIAAgMIAbAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAAKAEAFQAFAEAJAAIATAAIAAANg");
	this.shape_877.setTransform(838.575,556.875);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#059245").s().p("AgfAnQgKgOAAgZQAAgYAKgOQALgNAUABQAVgBALANQAKAOAAAYQAAAZgKAOQgMAMgUAAQgTAAgMgMgAgSgcQgGAKAAASQAAATAGAKQAHAJALAAQAMAAAHgJQAGgKAAgTQAAgSgGgKQgHgJgMAAQgLAAgHAJg");
	this.shape_878.setTransform(817.2,558.3);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#059245").s().p("AAUA/QgTAAgGgHQgHgHAAgSIAAg1IgbAAIAAgMIAbAAIAAgcIAPAAIAAAcIAkAAIAAAMIgkAAIAAA1QAAAKAEAFQAFAEAJAAIASAAIAAANg");
	this.shape_879.setTransform(806.05,556.875);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#059245").s().p("AgRAyIgSgEIAAgRQAHAEALADQAGACAJAAQAKAAAFgFQAHgDgBgJQABgLgVgEIgBAAIgGgCQgNgBgHgHQgGgGgBgLQABgOAJgIQAKgHAQAAIAQAAIAOAFIAAAQQgIgFgGgBQgGgCgJAAQgKAAgFAEQgGADABAHQAAAHADADQAGAEAOADIAGABQANACAFAGQAHAHAAALQAAAPgKAHQgLAIgRAAIgPgBg");
	this.shape_880.setTransform(784.75,558.3);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#059245").s().p("AAUA/QgSAAgHgHQgHgHgBgSIAAg1IgaAAIAAgMIAaAAIAAgcIAQAAIAAAcIAlAAIAAAMIglAAIAAA1QAAALAEAEQAEAEALAAIASAAIAAANg");
	this.shape_881.setTransform(773.55,556.875);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#059245").s().p("AAVAyIAAg8QAAgNgEgGQgFgGgKAAQgKAAgGAIQgGAHAAAQIAAA2IgRAAIAAhhIARAAIAAAPQAEgJAHgEQAHgEAKAAQAPAAAHAJQAIAKAAAUIAAA8g");
	this.shape_882.setTransform(763.075,558.175);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#059245").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_883.setTransform(752.875,556.375);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#059245").s().p("AgiAyIAAhhIARAAIAAATQAEgLAIgFQAGgFAMAAIAMABIAKAFIAAAQQgDgDgIgDIgLgCQgOAAgJAKQgHAJAAARIAAAxg");
	this.shape_884.setTransform(742.6,558.175);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#059245").s().p("AgoBFIAAiHIARAAIAAAMQAEgHAGgDQAHgEAIAAQATAAAJAOQALAOAAAYQAAAXgLANQgJAOgTAAQgIAAgHgEQgGgEgEgHIAAAygAgRgtQgGAKAAASQAAATAGAIQAGAKALAAQALAAAGgJQAHgJgBgTQABgSgHgKQgFgJgMAAQgLAAgGAJg");
	this.shape_885.setTransform(730.8,560.05);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#059245").s().p("AAWBEIAAg9QgBgMgFgGQgEgGgKAAQgKAAgHAIQgFAHAAAPIAAA3IgRAAIAAiHIARAAIAAA1QAEgJAHgEQAGgEALAAQAOAAAIAJQAIAKgBATIAAA9g");
	this.shape_886.setTransform(708.9,556.375);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#059245").s().p("AgYAmQgNgNAAgZQAAgYANgNQANgNAVAAQAIgBAHACQAJADAEADIAAARQgGgGgHgCQgGgDgJAAQgOAAgIAKQgIAKAAARQAAASAIAKQAJAKANAAQAIAAAHgCQAJgEAEgEIAAAQQgIAEgFABQgHACgIAAQgVAAgNgNg");
	this.shape_887.setTransform(698.1,558.3);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#059245").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_888.setTransform(687.85,556.375);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#059245").s().p("AAVBEIAAg9QAAgMgEgGQgFgGgKAAQgKAAgGAIQgGAHAAAPIAAA3IgRAAIAAiHIARAAIAAA1QAFgJAGgEQAHgEAKAAQAPAAAHAJQAIAKAAATIAAA9g");
	this.shape_889.setTransform(676.375,556.375);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#059245").s().p("AAQAxIgQg1IgPA1IgPAAIgXhhIAQAAIARBOIAOgxIANAAIAOAxIARhOIAQAAIgXBhg");
	this.shape_890.setTransform(665.475,558.275);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#059245").s().p("AAUA/QgSAAgHgHQgHgHAAgSIAAg1IgbAAIAAgMIAbAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAAKAEAFQAFAEAKAAIASAAIAAANg");
	this.shape_891.setTransform(643.5,556.875);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#059245").s().p("AAVAyIAAg8QAAgNgEgGQgFgGgKAAQgKAAgGAIQgGAHAAAQIAAA2IgRAAIAAhhIARAAIAAAPQAFgJAGgEQAHgEAKAAQAPAAAHAJQAIAKAAAUIAAA8g");
	this.shape_892.setTransform(633.025,558.175);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAVABQATAAAKAMQALAMABATIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAHAAAJgCQAJgDAJgFIAAAQQgKAEgHABQgIACgJAAQgWAAgNgNgAgQgeQgIAJgBAJIA1AAQgBgKgHgIQgGgHgMAAQgLAAgHAHg");
	this.shape_893.setTransform(622.175,558.3);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#059245").s().p("AAfAyIAAg3QAAgVgDgFQgCgFgHAAQgHAAgCAFQgCAFgBAVIAAA3IgOAAIAAg3QAAgUgCgGQgCgFgHAAQgGAAgDAFQgDAHABATIAAA3IgPAAIAAhhIAPAAIAAAIQADgFAEgDQAEgCAGAAQAGAAAFADQADACADAHQADgGAFgDQAEgDAHAAQAMAAAEAJQAFAIAAAaIAAA4g");
	this.shape_894.setTransform(611.35,558.175);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAUABQATAAALAMQALANABASIAAAHIhFAAIAAAAQgBAVAIAIQAJAJAOAAQAHAAAJgCQAJgDAJgFIAAAQQgKAEgIABQgHACgJAAQgWAAgNgNgAgRgeQgHAJgBAJIA0AAQAAgJgHgJQgGgHgMAAQgKAAgJAHg");
	this.shape_895.setTransform(600.525,558.3);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#059245").s().p("AAUA/QgSAAgHgHQgHgHAAgSIAAg1IgbAAIAAgMIAbAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAAKAEAFQAFAEAJAAIATAAIAAANg");
	this.shape_896.setTransform(589.325,556.875);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#059245").s().p("AgfArQgJgIAAgOQAAgRALgIQAMgIAUAAIAVAAIAAgCQAAgMgGgFQgFgGgNAAQgHAAgJADQgKACgHAEIAAgQIASgFIAPgBQANAAAHADQAJAEAFAGQAEAFABAHQACAGAAANIAAA3IgRAAIAAgPQgEAIgJAGQgIADgKAAQgPAAgJgIgAgQAEQgIAGAAAKQAAAIAGAFQAFAFAKAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgGAEg");
	this.shape_897.setTransform(578.625,558.3);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#059245").s().p("AAUA/QgSAAgHgHQgIgHAAgSIAAg1IgaAAIAAgMIAaAAIAAgcIAQAAIAAAcIAkAAIAAAMIgkAAIAAA1QAAALAEAEQAEAEAKAAIASAAIAAANg");
	this.shape_898.setTransform(567.65,556.875);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#059245").s().p("AgSAyIgRgEIAAgRIARAHQAIACAIAAQAKAAAGgFQAFgDAAgJQABgLgVgEIAAAAIgHgCQgMgBgIgHQgGgGgBgLQAAgOAKgIQAKgHAQAAIAQAAQAHACAHADIAAAQQgGgFgIgBQgGgCgJAAQgKAAgEAEQgGADAAAHQAAAHAEADQAEAEAPADIAGABQAMABAHAHQAGAHAAALQAAAPgKAHQgKAIgSAAg");
	this.shape_899.setTransform(557.15,558.3);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#059245").s().p("AAUA/QgSAAgHgHQgHgHgBgSIAAg1IgaAAIAAgMIAaAAIAAgcIAQAAIAAAcIAlAAIAAAMIglAAIAAA1QAAALAEAEQAEAEAKAAIATAAIAAANg");
	this.shape_900.setTransform(535.15,556.875);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#059245").s().p("AAVAyIAAg8QAAgNgEgGQgFgGgKAAQgKAAgGAIQgHAHAAAQIAAA2IgQAAIAAhhIAQAAIAAAPQAFgJAHgEQAHgEAKAAQAPAAAHAJQAIAKAAAUIAAA8g");
	this.shape_901.setTransform(524.675,558.175);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#059245").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_902.setTransform(514.475,556.375);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#059245").s().p("AgiAyIAAhhIAQAAIAAATQAFgLAIgFQAHgFAMAAIALABIAKAFIAAAQQgEgDgHgDQgHgCgEAAQgOAAgJAKQgIAKAAAQIAAAxg");
	this.shape_903.setTransform(504.175,558.175);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#059245").s().p("AgnBFIAAiHIAQAAIAAAMQAEgHAHgDQAGgEAIAAQATAAAJAOQAKANAAAZQAAAXgKANQgKAOgSAAQgIAAgGgEQgHgEgEgHIAAAygAgRgtQgGAKAAASQAAATAGAIQAGAKALAAQALAAAHgJQAFgKAAgSQAAgSgFgKQgGgJgMAAQgLAAgGAJg");
	this.shape_904.setTransform(492.375,560.05);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#059245").s().p("AgfArQgJgIAAgOQAAgRAMgIQALgIAUAAIAWAAIAAgCQAAgMgGgFQgGgGgNAAQgHAAgJADQgJACgHAEIAAgQIARgFIAPgBQAMAAAJADQAJAEAFAGQAEAGAAAGQACAGAAANIAAA3IgQAAIAAgPQgFAIgIAGQgJADgKAAQgPAAgJgIgAgQAEQgHAGAAAKQAAAJAFAEQAFAFAKAAQAMAAAIgJQAIgKAAgQIAAgDIgVAAQgNAAgHAEg");
	this.shape_905.setTransform(470.225,558.3);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#059245").s().p("AgSAyQgJgBgIgDIAAgRQAHAEAKADQAIACAIAAQAJAAAHgFQAFgDAAgJQAAgLgUgEIAAAAIgHgCQgNgBgHgHQgGgGgBgLQAAgOAKgIQAKgHAQAAIAPAAIAPAFIAAAQQgHgFgHgBQgHgCgIAAQgKAAgFAEQgFADAAAHQAAAHAEADQAEAEAPADIAGABQAMACAGAGQAHAGAAAMQAAAPgKAHQgLAIgRAAIgQgBg");
	this.shape_906.setTransform(448.8,558.3);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#059245").s().p("AgnBEIAAgMIAgAAIAAhIIgaAAIAAgNIApAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_907.setTransform(438.6,556.375);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAVABQATAAAKAMQALAMABATIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAHAAAJgCQAJgDAJgFIAAAQQgKAEgHABQgIACgJAAQgWAAgNgNgAgQgeQgIAJgBAJIA1AAQgBgKgHgIQgGgHgMAAQgLAAgHAHg");
	this.shape_908.setTransform(416.275,558.3);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#059245").s().p("AgiAyIAAhhIARAAIAAATQADgKAJgGQAGgFANAAIALABIAKAFIAAAQQgEgDgGgDIgNgCQgOAAgHAKQgJAJABARIAAAxg");
	this.shape_909.setTransform(406.65,558.175);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAUABQATAAALAMQALANABASIAAAHIhFAAIAAAAQgBAVAIAIQAJAJAOAAQAHAAAJgCQAJgDAJgFIAAAQQgKAEgIABQgHACgJAAQgWAAgNgNgAgRgeQgHAJgBAJIA0AAQAAgJgHgJQgGgHgMAAQgKAAgJAHg");
	this.shape_910.setTransform(394.625,558.3);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#059245").s().p("AAYBCIAAhCIgvAAIAABCIgSAAIAAiCIASAAIAAAyIAvAAIAAgyIASAAIAACCg");
	this.shape_911.setTransform(383.725,556.65);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#059245").s().p("AgFBAIAJgkIgUAAIgKAkIgOAAIAJgkIgWAAIAAgNIAaAAIAJgiIgYAAIAAgNIAaAAIAJgfIAMAAIgGAfIAUAAIAIgfIAOAAIgIAfIAWAAIAAANIgZAAIgJAiIAXAAIAAANIgaAAIgJAkgAgOAPIAWAAIAIgiIgVAAg");
	this.shape_912.setTransform(362.1,556.775);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#FF931D").s().p("AgYBBQgHAAgJgEIAAgSQAIAEAJADQAHACAJAAQAOAAAIgIQAIgIAAgOQAAgNgIgJQgIgGgOAAIgOABQgHACgGADIAAhCIBCAAIAAAPIgyAAIAAAgIAIgCIAIAAQATAAAMAMQAMALAAAUQAAAVgNAMQgMAMgVAAg");
	this.shape_913.setTransform(502.825,448.775);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#FFFFFF").s().p("AgtAcIAAgPIBcAAIAAAPgAgtgMIAAgPIBcAAIAAAPg");
	this.shape_914.setTransform(481.25,449.475);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#FFFFFF").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAVABQATAAAKAMQALAMABATIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAHAAAJgCQAKgDAIgFIAAAQQgKAEgHABQgIACgJAAQgWAAgNgNgAgQgeQgIAJgBAJIA1AAQgCgLgGgHQgGgHgMAAQgLAAgHAHg");
	this.shape_915.setTransform(459.625,450.3);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#FFFFFF").s().p("AASBFQgPgBgGgIQgIgKAAgRIAAhYIgaAAIAAgNIApAAIAABlQAAAKAEAGQAEAGAIAAIASAAIAAAOg");
	this.shape_916.setTransform(449.275,448.35);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#FFFFFF").s().p("AgMBCQgHgFgEgGIAAAMIgQAAIAAiHIAQAAIAAAyQAEgIAHgDQAGgDAIAAQASAAAKANQAKANAAAYQAAAYgKAOQgKANgSAAQgIABgGgEgAgRgKQgGAKAAASQAAATAGAJQAGAKALAAQALAAAGgJQAGgKAAgTQAAgSgGgKQgGgJgLAAQgLAAgGAJg");
	this.shape_917.setTransform(438.225,448.5);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#FFFFFF").s().p("AgfArQgJgJAAgNQAAgRAMgIQAKgIAUAAIAXAAIAAgCQgBgMgFgFQgGgGgNAAQgHAAgJADQgJACgIAEIAAgQIARgFIAQgBQAMAAAIADQAJAEAGAGQAEAGAAAGQABAGAAANIAAA3IgPAAIAAgPQgFAIgJAGQgJADgJAAQgQAAgIgIgAgQAEQgIAGAAAKQABAJAFAEQAFAFAJAAQANAAAIgJQAHgJABgRIAAgDIgVAAQgOAAgGAEg");
	this.shape_918.setTransform(426.9,450.3);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#FFFFFF").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_919.setTransform(416.925,448.375);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#FFFFFF").s().p("AgiAyIAAhhIARAAIAAATQADgKAJgGQAGgFANAAIALABIAKAFIAAAQQgEgDgGgDIgNgCQgOAAgHAKQgJAJABARIAAAxg");
	this.shape_920.setTransform(406.65,450.175);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#FFFFFF").s().p("AgfArQgJgIAAgOQAAgRALgIQAMgIAUAAIAWAAIAAgCQgBgMgFgFQgGgGgNAAQgHAAgJADQgKACgGAEIAAgQIARgFIAPgBQAMAAAJADQAJAEAFAGQADAFABAHQACAGAAANIAAA3IgQAAIAAgPQgFAJgJAFQgIADgKAAQgPAAgJgIgAgQAEQgHAFAAALQAAAIAFAFQAFAFAKAAQAMAAAIgJQAHgJABgRIAAgDIgVAAQgNAAgHAEg");
	this.shape_921.setTransform(394.375,450.3);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#FFFFFF").s().p("AgKBCIgmiCIASAAIAeBzIAfhzIASAAIgmCCg");
	this.shape_922.setTransform(383.725,448.65);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#FFFFFF").s().p("AgmBEIAAgOIAKAAQAHAAAEgDQAEgFAGgRIgmhgIARAAIAcBMIAdhMIARAAIgvB5QgEAIgGACQgGAEgIAAg");
	this.shape_923.setTransform(373,452.15);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#FFFFFF").s().p("AAeAyIAAg3QABgVgDgFQgCgFgHAAQgHAAgCAFQgCAFAAAVIAAA3IgOAAIAAg3QgBgUgCgGQgCgFgHAAQgGAAgDAFQgDAHAAATIAAA3IgOAAIAAhhIAOAAIAAAIQADgFAFgDQAEgCAGAAQAGAAAFADQADACADAHQADgGAEgDQAFgDAGAAQAMAAAFAJQAFAIAAAaIAAA4g");
	this.shape_924.setTransform(362.1,450.175);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAUABQATAAALAMQALANABASIAAAHIhFAAIAAAAQgBAVAIAIQAJAJAOAAQAHAAAJgCQAJgDAJgFIAAAQQgKAEgIABQgHACgJAAQgWAAgNgNgAgRgeQgHAJgBAJIA0AAQAAgJgHgJQgGgHgMAAQgKAAgJAHg");
	this.shape_925.setTransform(1099.025,385.5);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#059245").s().p("AgdAoQgIgJAAgUIAAg8IARAAIAAA8QAAANAEAGQAFAGAKAAQAKAAAGgIQAGgIAAgPIAAg2IARAAIAABhIgRAAIAAgPQgEAJgHAEQgIAEgJAAQgPAAgHgKg");
	this.shape_926.setTransform(1088.175,385.625);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#059245").s().p("AASBFQgOgBgIgIQgIgLAAgQIAAhYIgZAAIAAgNIApAAIAABlQAAALAEAFQAEAGAHAAIATAAIAAAOg");
	this.shape_927.setTransform(1077.825,383.55);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#059245").s().p("AgfArQgJgIAAgOQAAgRALgIQAMgIAUAAIAVAAIAAgCQAAgMgGgGQgFgFgNAAQgGAAgKADQgKACgGAEIAAgQQAKgEAHgBIAPgBQAMgBAJAEQAIAEAGAGQADAFABAHQACAGAAANIAAA3IgRAAIAAgPQgFAJgIAFQgIADgKAAQgPAAgJgIgAgQAEQgIAGAAAKQAAAIAGAFQAFAFAKAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgGAEg");
	this.shape_928.setTransform(1066.275,385.5);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#059245").s().p("AgJAxIgjhhIAQAAIAcBRIAdhRIAQAAIgjBhg");
	this.shape_929.setTransform(1055.625,385.475);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#059245").s().p("AgfArQgJgIAAgOQAAgRALgIQAMgIAUAAIAVAAIAAgCQAAgMgGgGQgFgFgNAAQgHAAgJADQgKACgHAEIAAgQIASgFIAPgBQANgBAHAEQAJAEAFAGQAEAFABAHQACAGAAANIAAA3IgRAAIAAgPQgFAJgIAFQgIADgKAAQgPAAgJgIgAgQAEQgIAGAAAKQAAAIAGAFQAFAFAKAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgGAEg");
	this.shape_930.setTransform(1033.775,385.5);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#059245").s().p("AAUA/QgSAAgGgHQgIgHAAgSIAAg1IgbAAIAAgMIAbAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAAKAEAFQAFAEAKAAIASAAIAAANg");
	this.shape_931.setTransform(1011.95,384.075);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#059245").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_932.setTransform(1002.125,383.575);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQANgOATABQAUAAALAMQALANAAASIAAAHIhFAAIAAAAQgBAVAIAIQAJAJAOAAQAHAAAKgCQAIgDAJgFIAAAQQgLAEgGABQgIACgJAAQgVAAgOgNgAgRgeQgHAJgBAJIA0AAQAAgJgHgJQgGgHgMAAQgLAAgIAHg");
	this.shape_933.setTransform(979.8,385.5);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#059245").s().p("AgJAxIgjhhIAQAAIAcBRIAdhRIAQAAIgjBhg");
	this.shape_934.setTransform(968.925,385.475);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#059245").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_935.setTransform(958.775,383.575);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#059245").s().p("AgOBEIgOgDIAAgQIAPAGIANACQAMAAAGgIQAGgGAAgQIAAgMQgEAJgGAEQgHAEgIAAQgSAAgKgOQgLgNABgXQgBgXALgOQAKgNASAAQAIgBAHAEQAGADAEAJIAAgNIARAAIAABaQAAAWgLAMQgLALgTAAgAgQguQgHAJAAATQAAASAHAJQAGAKALAAQAMgBAFgJQAGgJAAgSQAAgSgGgKQgFgJgMAAQgLAAgGAJg");
	this.shape_936.setTransform(946.95,387.3);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#059245").s().p("AgdA4QgKgPAAgXQAAgXAKgOQAKgNASAAQAIgBAHAEQAGADAEAIIAAgyIAQAAIAACHIgQAAIAAgMQgDAGgIAFQgGAEgIgBQgSAAgKgNgAgQgKQgGAKAAASQAAATAGAKQAGAJAKAAQAMAAAGgKQAGgJAAgTQAAgSgGgKQgGgJgMAAQgKAAgGAJg");
	this.shape_937.setTransform(925.275,383.7);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#059245").s().p("AAVAyIAAg8QAAgOgEgFQgFgGgKAAQgKAAgHAIQgFAHAAAQIAAA2IgQAAIAAhhIAQAAIAAAPQAEgJAHgEQAHgEAKAAQAOAAAIAJQAHAKAAAUIAAA8g");
	this.shape_938.setTransform(914.8,385.375);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#059245").s().p("AgfArQgJgIAAgOQAAgRALgIQAMgIAUAAIAVAAIAAgCQAAgMgGgGQgFgFgNAAQgGAAgKADQgKACgHAEIAAgQIASgFIAPgBQANgBAHAEQAJAEAFAGQAEAFABAHQACAGAAANIAAA3IgRAAIAAgPQgFAJgIAFQgIADgKAAQgPAAgJgIgAgQAEQgIAGAAAKQAAAIAGAFQAFAFAKAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgGAEg");
	this.shape_939.setTransform(903.725,385.5);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#059245").s().p("AgJAbIAAg2IATAAIAAA2g");
	this.shape_940.setTransform(882.35,379.45);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAVABQATAAAKAMQALAMABATIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAHAAAJgCQAJgDAJgFIAAAQQgKAEgHABQgIACgJAAQgWAAgNgNgAgQgeQgIAJgBAJIA1AAQgBgKgHgIQgGgHgMAAQgLAAgHAHg");
	this.shape_941.setTransform(871.425,385.5);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#059245").s().p("AASBFQgPgBgGgIQgJgKABgRIAAhYIgbAAIAAgNIAqAAIAABlQAAAKADAGQAFAGAHAAIAUAAIAAAOg");
	this.shape_942.setTransform(861.1,383.55);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#059245").s().p("AgMBCQgHgFgEgGIAAAMIgQAAIAAiHIAQAAIAAAyQAEgIAHgDQAGgEAIABQASAAAKANQAKANAAAYQAAAYgKAOQgKANgSAAQgIABgGgEgAgRgKQgGAKAAASQAAATAGAJQAGAKALAAQALAAAGgJQAGgKAAgTQAAgSgGgKQgGgJgLAAQgLAAgGAJg");
	this.shape_943.setTransform(850.025,383.7);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#059245").s().p("AgeArQgKgIABgOQgBgRALgIQALgIAVAAIAVAAIAAgCQABgMgHgGQgFgFgNAAQgHAAgJADQgKACgGAEIAAgQIARgFIAPgBQAMgBAJAEQAIAEAFAGQAEAFACAHIABBKIgRAAIAAgPQgEAIgIAGQgKADgIAAQgRAAgHgIgAgRAEQgGAGAAAKQgBAIAGAFQAFAFAKAAQAMAAAHgJQAJgJgBgRIAAgDIgUAAQgNAAgIAEg");
	this.shape_944.setTransform(838.7,385.5);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#059245").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_945.setTransform(828.725,383.575);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#059245").s().p("AgiAyIAAhhIAQAAIAAATQAEgKAJgGQAGgFANAAIALABIAKAFIAAAQQgEgDgHgDQgGgCgFAAQgOAAgJAKQgHAJgBARIAAAxg");
	this.shape_946.setTransform(818.45,385.375);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#059245").s().p("AgfArQgJgIAAgOQAAgRALgIQAMgIAUAAIAWAAIAAgCQAAgMgGgGQgGgFgNAAQgHAAgJADQgKACgGAEIAAgQIARgFIAPgBQAMgBAJAEQAJAEAFAGQADAFABAHQACAGAAANIAAA3IgQAAIAAgPQgFAIgIAGQgJADgKAAQgPAAgJgIgAgQAEQgHAFAAALQAAAIAFAFQAFAFAKAAQAMAAAIgJQAIgKAAgQIAAgDIgVAAQgNAAgHAEg");
	this.shape_947.setTransform(806.175,385.5);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#059245").s().p("AgKBCIgmiCIASAAIAeBzIAfhzIASAAIgmCCg");
	this.shape_948.setTransform(795.525,383.85);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#059245").s().p("AgmBEIAAgOIAJAAQAIAAADgDQAFgFAGgRIgmhgIARAAIAcBMIAdhMIARAAIgvB5QgEAIgGACQgGAEgIAAg");
	this.shape_949.setTransform(784.8,387.35);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#059245").s().p("AAfAyIAAg3QgBgVgCgFQgCgFgGAAQgIAAgCAFQgCAFgBAVIAAA3IgNAAIAAg3QAAgWgDgEQgCgFgHAAQgGAAgDAFQgCAHAAATIAAA3IgPAAIAAhhIAPAAIAAAIQACgFAFgDQAEgCAGAAQAGAAAFADQADACADAHQADgGAFgDQAEgDAGAAQANAAAFAJQAEAJAAAZIAAA4g");
	this.shape_950.setTransform(773.9,385.375);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#059245").s().p("AgJAbIAAg2IATAAIAAA2g");
	this.shape_951.setTransform(763.125,379.45);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#059245").s().p("AgdA4QgKgOAAgYQAAgXAKgOQAKgNASAAQAIgBAHAEQAGADAEAIIAAgyIARAAIAACHIgRAAIAAgMQgEAGgGAFQgHAEgIgBQgSAAgKgNgAgRgKQgFAKAAASQAAATAFAKQAHAJAKAAQAMAAAGgKQAGgJAAgTQAAgSgGgKQgGgJgMAAQgKAAgHAJg");
	this.shape_952.setTransform(741.05,383.7);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAUABQAUAAAKAMQALANABASIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAGAAAKgCQAJgDAJgFIAAAQQgLAEgHABQgHACgJAAQgWAAgNgNgAgQgeQgIAJAAAJIA0AAQgBgJgGgJQgHgHgMAAQgLAAgHAHg");
	this.shape_953.setTransform(730.55,385.5);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#059245").s().p("AASBFQgOgBgIgIQgHgKgBgRIAAhYIgaAAIAAgNIApAAIAABlQAAAKAFAGQAEAGAIAAIASAAIAAAOg");
	this.shape_954.setTransform(720.2,383.55);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#059245").s().p("AASBFQgOgBgIgIQgIgLAAgQIAAhYIgZAAIAAgNIApAAIAABlQAAALAEAFQAEAGAHAAIATAAIAAAOg");
	this.shape_955.setTransform(709.375,383.55);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#059245").s().p("AgfArQgJgIAAgOQAAgRALgIQAMgIAUAAIAVAAIAAgCQAAgMgGgGQgFgFgNAAQgGAAgKADQgKACgHAEIAAgQIASgFIAPgBQANgBAHAEQAJAEAFAGQAEAFABAHQACAGAAANIAAA3IgRAAIAAgPQgFAJgIAFQgIADgKAAQgPAAgJgIgAgQAEQgIAGAAAKQAAAIAGAFQAFAFAKAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgGAEg");
	this.shape_956.setTransform(697.825,385.5);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#059245").s().p("AgYAmQgNgOAAgYQAAgXANgOQANgNAWAAQAHgBAGACQAKADAEADIAAARQgGgGgHgCQgHgDgHAAQgPAAgIAKQgIAKAAARQAAASAIAKQAJAKAOAAQAHAAAIgCQAIgFAEgDIAAAQQgHAEgGABQgHACgHAAQgWAAgNgNg");
	this.shape_957.setTransform(687.25,385.5);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAVABQATAAAKAMQALAMABATIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAHAAAJgCQAJgDAJgFIAAAQQgKAEgHABQgIACgJAAQgWAAgNgNgAgQgeQgIAJgBAJIA1AAQgBgKgHgIQgGgHgMAAQgLAAgHAHg");
	this.shape_958.setTransform(665.525,385.5);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#059245").s().p("AASBFQgPgBgGgIQgIgKAAgRIAAhYIgaAAIAAgNIApAAIAABlQAAAKAEAGQAEAGAIAAIASAAIAAAOg");
	this.shape_959.setTransform(655.175,383.55);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#059245").s().p("AgMBCQgHgFgEgGIAAAMIgQAAIAAiHIAQAAIAAAyQAEgIAHgDQAGgEAIABQASAAAKANQAKANAAAYQAAAYgKAOQgKANgSAAQgIABgGgEgAgRgKQgGAKAAASQAAATAGAJQAGAKALAAQALAAAGgJQAGgKAAgTQAAgSgGgKQgGgJgLAAQgLAAgGAJg");
	this.shape_960.setTransform(644.125,383.7);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#059245").s().p("AgfArQgJgIAAgOQABgRAKgIQALgIAVAAIAVAAIAAgCQAAgMgFgGQgGgFgNAAQgHAAgJADQgKACgGAEIAAgQIARgFIAPgBQAMgBAJAEQAIAEAFAGQAFAGAAAGIABBKIgQAAIAAgPQgEAIgIAGQgKADgJAAQgPAAgJgIgAgQAEQgIAGABAKQAAAJAFAEQAFAFAJAAQANAAAHgJQAIgJAAgRIAAgDIgUAAQgOAAgGAEg");
	this.shape_961.setTransform(632.8,385.5);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#059245").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_962.setTransform(622.825,383.575);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#059245").s().p("AgiAyIAAhhIARAAIAAATQADgKAJgGQAHgFAMAAIALABIAKAFIAAAQQgDgDgIgDQgHgCgFAAQgNAAgJAKQgHAJAAARIAAAxg");
	this.shape_963.setTransform(612.55,385.375);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#059245").s().p("AgfArQgJgIAAgOQAAgRALgIQAMgIAUAAIAWAAIAAgCQgBgMgFgGQgGgFgNAAQgHAAgJADQgKACgGAEIAAgQIARgFIAPgBQAMgBAJAEQAJAEAFAGQADAFABAHQACAGAAANIAAA3IgQAAIAAgPQgFAIgIAGQgJADgKAAQgPAAgJgIgAgQAEQgHAFAAALQAAAIAFAFQAFAFAKAAQAMAAAIgJQAHgJABgRIAAgDIgVAAQgNAAgHAEg");
	this.shape_964.setTransform(600.275,385.5);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#059245").s().p("AgJAxIgjhhIAQAAIAcBRIAdhRIAQAAIgjBhg");
	this.shape_965.setTransform(589.625,385.475);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#059245").s().p("AgfArQgJgIAAgOQAAgRALgIQAMgIAUAAIAVAAIAAgCQAAgMgGgGQgFgFgNAAQgGAAgKADQgKACgGAEIAAgQIARgFIAPgBQAMgBAJAEQAIAEAGAGQADAFABAHQACAGAAANIAAA3IgRAAIAAgPQgFAJgIAFQgIADgKAAQgPAAgJgIgAgQAEQgIAGAAAKQAAAIAGAFQAFAFAKAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgGAEg");
	this.shape_966.setTransform(567.775,385.5);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAVABQATAAAKAMQALAMABATIAAAHIhFAAIAAAAQgBAVAIAIQAJAJAOAAQAHAAAJgCQAJgDAJgFIAAAQQgKAEgHABQgIACgJAAQgWAAgNgNgAgQgeQgIAJgBAJIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAHg");
	this.shape_967.setTransform(546.325,385.5);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#059245").s().p("AgiAyIAAhhIARAAIAAATQADgLAJgFQAGgFAMAAIAMABIAKAFIAAAQQgEgDgHgDQgHgCgFAAQgOAAgHAKQgJAJABARIAAAxg");
	this.shape_968.setTransform(536.7,385.375);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#059245").s().p("AgfArQgJgIAAgOQAAgRALgIQAMgIAUAAIAVAAIAAgCQAAgMgGgGQgFgFgNAAQgGAAgKADQgKACgGAEIAAgQIARgFIAPgBQAMgBAJAEQAJAEAFAGQADAFABAHQACAGAAANIAAA3IgRAAIAAgPQgEAIgJAGQgIADgKAAQgPAAgJgIgAgQAEQgHAFAAALQAAAIAFAFQAFAFAKAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgGAEg");
	this.shape_969.setTransform(524.425,385.5);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#059245").s().p("AASBFQgOgBgIgIQgHgKAAgRIAAhYIgaAAIAAgNIAoAAIAABlQAAAKAFAGQAEAGAHAAIATAAIAAAOg");
	this.shape_970.setTransform(514.3,383.55);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#059245").s().p("AgfArQgJgIAAgOQABgRAKgIQAMgIAUAAIAVAAIAAgCQAAgMgFgGQgGgFgNAAQgHAAgJADQgKACgGAEIAAgQIARgFIAPgBQANgBAIAEQAIAEAFAGQAEAFABAHQABAEAAAPIAAA3IgQAAIAAgPQgEAIgIAGQgKADgIAAQgQAAgJgIgAgQAEQgIAGABAKQAAAIAFAFQAFAFAJAAQANAAAHgJQAIgJAAgRIAAgDIgUAAQgOAAgGAEg");
	this.shape_971.setTransform(502.75,385.5);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#059245").s().p("AgYAmQgNgNAAgZQAAgYANgNQANgNAWAAQAHgBAGACQAKADAEADIAAARQgGgGgHgCQgHgDgHAAQgPAAgIAKQgIAKAAARQAAASAIAKQAIAKAPAAQAHAAAHgCQAIgEAFgEIAAAQQgHAEgHABQgFACgIAAQgWAAgNgNg");
	this.shape_972.setTransform(492.2,385.5);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAVABQASAAAMAMQALANAAASIAAAHIhFAAIAAAAQgBAVAIAIQAJAJAOAAQAHAAAKgCQAIgDAKgFIAAAQQgMAEgGABQgIACgJAAQgVAAgOgNgAgRgeQgHAJgBAJIA0AAQAAgJgGgJQgHgHgMAAQgLAAgIAHg");
	this.shape_973.setTransform(481.3,385.5);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#059245").s().p("AgdA4QgKgPAAgXQAAgXAKgOQAKgNASAAQAIgBAHAEQAGADAEAIIAAgyIAQAAIAACHIgQAAIAAgMQgDAGgIAFQgGAEgIgBQgSAAgKgNgAgQgKQgGAKAAASQAAATAGAKQAGAJAKAAQAMAAAGgKQAGgJAAgTQAAgSgGgKQgGgJgMAAQgKAAgGAJg");
	this.shape_974.setTransform(470.125,383.7);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAUABQATAAALAMQALANABASIAAAHIhGAAIAAAAQAAAVAIAIQAJAJAOAAQAHAAAKgCQAIgDAKgFIAAAQIgSAFQgIACgJAAQgWAAgNgNgAgRgeQgHAJgBAJIA0AAQAAgKgHgIQgGgHgMAAQgLAAgIAHg");
	this.shape_975.setTransform(448.8,385.5);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#059245").s().p("AAQAxIgQg1IgPA1IgPAAIgXhhIAQAAIARBOIAOgxIANAAIAOAxIARhOIAQAAIgXBhg");
	this.shape_976.setTransform(437.925,385.475);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAVABQATAAAKAMQALAMABATIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAHAAAJgCQAJgDAJgFIAAAQQgKAEgHABQgIACgJAAQgWAAgNgNgAgQgeQgIAJgBAJIA1AAQgBgKgHgIQgGgHgMAAQgLAAgHAHg");
	this.shape_977.setTransform(416.275,385.5);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#059245").s().p("AgiAyIAAhhIARAAIAAATQADgKAJgGQAGgFANAAIALABIAKAFIAAAQQgEgDgGgDIgNgCQgOAAgHAKQgJAJABARIAAAxg");
	this.shape_978.setTransform(406.65,385.375);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAUABQATAAALAMQALANABASIAAAHIhFAAIAAAAQgBAVAIAIQAJAJAOAAQAHAAAJgCQAJgDAJgFIAAAQQgKAEgIABQgHACgJAAQgWAAgNgNgAgRgeQgHAJgBAJIA0AAQAAgJgHgJQgGgHgMAAQgKAAgJAHg");
	this.shape_979.setTransform(394.625,385.5);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#059245").s().p("AAYBCIAAhCIgvAAIAABCIgSAAIAAiCIASAAIAAAyIAvAAIAAgyIASAAIAACCg");
	this.shape_980.setTransform(383.725,383.85);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#059245").s().p("AgFBAIAJgkIgUAAIgKAkIgOAAIAJgkIgWAAIAAgNIAaAAIAJgiIgYAAIAAgNIAaAAIAJgfIAMAAIgGAfIAUAAIAIgfIAOAAIgIAfIAWAAIAAANIgZAAIgJAiIAXAAIAAANIgaAAIgJAkgAgOAPIAWAAIAIgiIgVAAg");
	this.shape_981.setTransform(362.1,383.975);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#C69C6D").s().p("AgJAbIAAg2IATAAIAAA2g");
	this.shape_982.setTransform(383.85,293.05);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#C69C6D").s().p("AgJAbIAAg2IATAAIAAA2g");
	this.shape_983.setTransform(373.025,293.05);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#C69C6D").s().p("AgJAbIAAg2IATAAIAAA2g");
	this.shape_984.setTransform(362.175,293.05);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#C69C6D").s().p("AAUA/QgSAAgHgHQgHgHAAgSIAAg1IgbAAIAAgMIAbAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAAKAEAFQAFAEAJAAIATAAIAAANg");
	this.shape_985.setTransform(426.775,276.075);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#C69C6D").s().p("AAVAyIAAg8QAAgOgEgFQgFgGgKAAQgKAAgHAIQgFAHAAAQIAAA2IgQAAIAAhhIAQAAIAAAPQAEgJAHgEQAHgEAKAAQAOAAAIAJQAHAKAAAUIAAA8g");
	this.shape_986.setTransform(416.3,277.375);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#C69C6D").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAVABQASAAALAMQALANABASIAAAHIhFAAIAAAAQAAAVAHAIQAJAJAOAAQAGAAALgCQAIgDAKgFIAAAQIgSAFQgIACgJAAQgWAAgNgNgAgQgeQgIAJAAAJIA0AAQgBgKgHgIQgGgHgMAAQgLAAgHAHg");
	this.shape_987.setTransform(405.45,277.5);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#C69C6D").s().p("AAeAyIAAg3QAAgVgCgFQgCgFgHAAQgGAAgDAFQgDAHABATIAAA3IgPAAIAAg3QAAgWgCgEQgCgFgHAAQgGAAgDAFQgCAHAAATIAAA3IgPAAIAAhhIAPAAIAAAIQADgFAEgDQAEgCAGAAQAGAAAFADQADACADAHQADgGAEgDQAFgDAHAAQALAAAFAJQAFAJAAAZIAAA4g");
	this.shape_988.setTransform(394.6,277.375);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#C69C6D").s().p("AAeAyIAAg3QAAgWgCgEQgDgFgFAAQgHAAgDAFQgDAHAAATIAAA3IgNAAIAAg3QAAgUgDgGQgDgFgGAAQgHAAgCAFQgCAFAAAVIAAA3IgPAAIAAhhIAPAAIAAAIQADgFAEgDQAEgCAGAAQAGAAAFADQAEADACAGQADgGAEgDQAFgDAGAAQAMAAAFAJQAFAKAAAYIAAA4g");
	this.shape_989.setTransform(383.775,277.375);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#C69C6D").s().p("AgfAnQgKgOAAgZQAAgYAKgOQAMgNATABQAVgBAKANQALANAAAZQAAAZgLAOQgLAMgUAAQgTAAgMgMgAgSgcQgGALAAARQAAATAGAKQAHAJALAAQAMAAAHgJQAGgKAAgTQAAgSgGgKQgHgJgMAAQgMAAgGAJg");
	this.shape_990.setTransform(372.9,277.5);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#C69C6D").s().p("AgYAmQgNgOAAgYQAAgXANgOQANgNAWAAQAHgBAGACQAKADAEADIAAARQgGgGgHgCQgHgDgHAAQgPAAgIAKQgIALAAAQQAAASAIAKQAJAKAOAAQAIAAAGgCQAJgEAEgEIAAAQQgGAEgIABQgFACgIAAQgWAAgNgNg");
	this.shape_991.setTransform(362.15,277.5);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#C69C6D").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAVABQASAAALAMQAMANAAASIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAGAAAKgCQAJgDAJgFIAAAQQgLAEgHABQgHACgJAAQgWAAgNgNgAgQgeQgIAJAAAJIA0AAQgBgKgHgIQgGgHgMAAQgLAAgHAHg");
	this.shape_992.setTransform(568,255.9);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#C69C6D").s().p("AAVAyIAAg8QAAgNgEgGQgFgGgKAAQgKAAgGAIQgGAHAAAQIAAA2IgRAAIAAhhIARAAIAAAPQAEgJAHgEQAHgEAKAAQAPAAAHAJQAIAKAAAUIAAA8g");
	this.shape_993.setTransform(557.175,255.775);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#C69C6D").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_994.setTransform(546.975,253.975);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#C69C6D").s().p("AASBFQgOgBgIgIQgHgKAAgRIAAhYIgaAAIAAgNIApAAIAABlQAAAKAEAGQAEAGAIAAIASAAIAAAOg");
	this.shape_995.setTransform(535.975,253.95);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#C69C6D").s().p("AgtAIIAAgOIBbAAIAAAOg");
	this.shape_996.setTransform(524.75,255.2);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#C69C6D").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_997.setTransform(514.475,253.975);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#C69C6D").s().p("AAUA/QgSAAgHgHQgHgHAAgSIAAg1IgbAAIAAgMIAbAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAALAEAEQAEAEAKAAIATAAIAAANg");
	this.shape_998.setTransform(502.625,254.475);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#C69C6D").s().p("AASBFQgPgBgGgIQgIgKAAgRIAAhYIgaAAIAAgNIApAAIAABlQAAAKAEAGQAEAGAIAAIASAAIAAAOg");
	this.shape_999.setTransform(492.625,253.95);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#C69C6D").s().p("AgdAoQgIgJAAgUIAAg8IAQAAIAAA8QAAAMAFAHQAFAGAKAAQAKAAAGgIQAGgIAAgPIAAg2IARAAIAABhIgRAAIAAgPQgFAKgGADQgIAEgJAAQgPAAgHgKg");
	this.shape_1000.setTransform(481.325,256.025);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#C69C6D").s().p("AAeAyIAAg3QAAgWgCgEQgCgFgHAAQgGAAgDAFQgDAHAAATIAAA3IgNAAIAAg3QAAgVgDgFQgCgFgHAAQgHAAgCAFQgCAFAAAVIAAA3IgPAAIAAhhIAPAAIAAAIQACgEAFgEQAEgCAGAAQAGAAAFADQAEADACAGQADgGAEgDQAFgDAGAAQAMAAAFAJQAFAKAAAYIAAA4g");
	this.shape_1001.setTransform(470.475,255.775);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#C69C6D").s().p("AgfArQgJgIAAgOQAAgRALgIQAMgIAUAAIAVAAIAAgCQAAgMgGgGQgFgFgNAAQgGAAgKADQgKACgHAEIAAgQIASgFIAPgBQANAAAHADQAJAEAFAGQAEAFABAHQACAGAAANIAAA3IgRAAIAAgPQgFAJgIAFQgIADgKAAQgPAAgJgIgAgQAEQgIAGAAAKQAAAIAGAFQAFAFAKAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgGAEg");
	this.shape_1002.setTransform(448.575,255.9);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#C69C6D").s().p("AgSAyIgRgEIAAgRQAIAEAJADQAHACAJAAQAKAAAGgFQAGgDAAgJQAAgLgVgEIgBAAIgGgCQgMgBgIgHQgHgHAAgKQAAgOAKgIQAKgHAQAAIAQABQAIABAGADIAAAQQgHgFgHgBQgGgCgIAAQgLAAgFAEQgFADAAAHQAAAHAEADQAEAEAPADIAGABQANACAGAGQAGAHAAALQAAAPgLAHQgJAIgSAAg");
	this.shape_1003.setTransform(427.125,255.9);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#C69C6D").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1004.setTransform(416.925,253.975);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#C69C6D").s().p("AgRAyIgSgEIAAgRQAHAEALADQAGACAJAAQAKAAAGgFQAFgDAAgJQABgLgVgEIAAAAIgHgCQgNgBgHgHQgGgGgBgLQAAgOAKgIQAKgHAQAAIAQABQAHABAHADIAAAQQgHgFgHgBQgGgCgJAAQgKAAgFAEQgFADAAAHQAAAHAEADQAEAEAPADIAGABQAMABAHAHQAGAHAAALQAAAPgKAHQgLAIgRAAg");
	this.shape_1005.setTransform(394.6,255.9);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#C69C6D").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1006.setTransform(384.425,253.975);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#C69C6D").s().p("AAWBEIAAg9QAAgNgGgFQgEgGgKAAQgLAAgFAIQgHAHAAAPIAAA3IgQAAIAAiHIAQAAIAAA1QAFgJAHgEQAGgEAKAAQAQAAAHAJQAIAKAAATIAAA9g");
	this.shape_1007.setTransform(372.95,253.975);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#C69C6D").s().p("AgIBCIAAhzIgpAAIAAgPIBjAAIAAAPIgpAAIAABzg");
	this.shape_1008.setTransform(362.05,254.25);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#C69C6D").s().p("AgJAbIAAg2IATAAIAAA2g");
	this.shape_1009.setTransform(383.85,228.25);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#C69C6D").s().p("AgJAbIAAg2IATAAIAAA2g");
	this.shape_1010.setTransform(373.025,228.25);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#C69C6D").s().p("AgJAbIAAg2IATAAIAAA2g");
	this.shape_1011.setTransform(362.175,228.25);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#059245").s().p("AgWBDIgSgGIAAgRQAKAFAHACQAIACAKAAQANAAAIgHQAIgGAAgNQAAgKgIgIQgJgGgLAAIgOAAIAAgOIAOAAQAMAAAGgFQAHgGAAgJQgBgKgGgFQgFgGgMAAIgQACIgSAFIAAgRIAigFQATAAALAKQAMAJAAAQQAAAMgHAGQgGAIgMADQAOACAGAIQAIAKgBANQABARgNALQgNAKgTAAg");
	this.shape_1012.setTransform(806.3,189.45);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#059245").s().p("AAVAyIAAg8QAAgNgFgGQgEgGgKAAQgLAAgFAIQgHAHAAAQIAAA2IgQAAIAAhhIAQAAIAAAPQAFgJAHgEQAHgEAJAAQAPAAAIAJQAIAKAAAUIAAA8g");
	this.shape_1013.setTransform(795.6,190.975);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#059245").s().p("AgeAnQgLgOAAgZQAAgYALgOQAKgNAUABQAVgBAKANQALANAAAZQAAAZgKAOQgMAMgUAAQgTAAgLgMgAgSgcQgGAKAAASQAAATAGAKQAHAJALAAQAMAAAGgJQAHgKAAgTQAAgSgHgKQgFgJgNAAQgLAAgHAJg");
	this.shape_1014.setTransform(784.7,191.1);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#059245").s().p("AAVBEIAAg9QAAgMgEgGQgFgGgKAAQgKAAgGAIQgHAHAAAPIAAA3IgQAAIAAiHIAQAAIAAA1QAFgJAHgEQAHgEAKAAQAPAAAHAJQAIAKAAATIAAA9g");
	this.shape_1015.setTransform(773.925,189.175);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#059245").s().p("AAUA/QgSAAgHgHQgHgHAAgSIAAg1IgaAAIAAgMIAaAAIAAgcIAPAAIAAAcIAkAAIAAAMIgkAAIAAA1QAAAKAEAFQAFAEAJAAIASAAIAAANg");
	this.shape_1016.setTransform(762.7,189.675);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#059245").s().p("AgmBEIAAgOIAJAAQAIAAADgDQAEgEAHgSIgmhgIARAAIAcBMIAdhMIARAAIgvB5QgEAIgGACQgFAEgJAAg");
	this.shape_1017.setTransform(752.3,192.95);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#059245").s().p("AgpBCIAAiDIAnAAQAWAAAKAKQALAKAAATQAAAUgLAJQgMAKgUAAIgVAAIAAA1gAgXgBIAVAAQALAAAHgHQAHgFAAgNQAAgMgHgGQgHgGgLAAIgVAAg");
	this.shape_1018.setTransform(741.8,189.45);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#059245").s().p("AAVAyIAAg8QAAgNgEgGQgFgGgKAAQgKAAgGAIQgGAHAAAQIAAA2IgRAAIAAhhIARAAIAAAPQAEgJAHgEQAHgEAKAAQAPAAAHAJQAIAKAAAUIAAA8g");
	this.shape_1019.setTransform(719.725,190.975);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#059245").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1020.setTransform(709.525,189.175);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#059245").s().p("AAUA/QgSAAgHgHQgIgHABgSIAAg1IgaAAIAAgMIAaAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAAKAEAFQAFAEAKAAIASAAIAAANg");
	this.shape_1021.setTransform(686.85,189.675);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#059245").s().p("AAVAyIAAg8QAAgNgEgGQgFgGgKAAQgKAAgGAIQgGAHAAAQIAAA2IgRAAIAAhhIARAAIAAAPQAFgJAGgEQAHgEAKAAQAPAAAHAJQAIAKAAAUIAAA8g");
	this.shape_1022.setTransform(676.375,190.975);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAVABQATAAAKAMQALAMABATIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAHAAAJgCQAJgDAJgFIAAAQQgKAEgHABQgIACgJAAQgWAAgNgNgAgQgeQgIAJgBAJIA1AAQgBgKgHgIQgGgHgMAAQgLAAgHAHg");
	this.shape_1023.setTransform(665.525,191.1);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#059245").s().p("AAeAyIAAg3QAAgVgCgFQgCgFgHAAQgHAAgCAFQgDAFABAVIAAA3IgPAAIAAg3QABgUgDgGQgCgFgHAAQgGAAgDAFQgCAHAAATIAAA3IgPAAIAAhhIAPAAIAAAIQADgFAEgDQAEgCAFAAQAIAAAEADQADACADAHQACgGAFgDQAFgDAHAAQALAAAFAJQAFAIAAAaIAAA4g");
	this.shape_1024.setTransform(654.7,190.975);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#059245").s().p("AAfAyIAAg3QgBgVgCgFQgCgFgGAAQgIAAgCAFQgCAHgBATIAAA3IgNAAIAAg3QAAgWgDgEQgCgFgHAAQgGAAgDAFQgCAHgBATIAAA3IgOAAIAAhhIAOAAIAAAIQADgFAFgDQAEgCAGAAQAGAAAFADQADACADAHQADgGAFgDQAEgDAGAAQANAAAFAJQAEAJAAAZIAAA4g");
	this.shape_1025.setTransform(643.85,190.975);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#059245").s().p("AgeAnQgLgNAAgaQAAgZALgNQAKgNAUABQAVgBAKANQALANAAAZQAAAagLANQgKAMgVAAQgUAAgKgMgAgSgcQgGALAAARQAAATAGAKQAHAJALAAQAMAAAHgJQAGgLAAgSQAAgRgGgLQgHgJgMAAQgLAAgHAJg");
	this.shape_1026.setTransform(632.975,191.1);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#059245").s().p("AgYAmQgNgNAAgZQAAgYANgNQANgNAWAAQAHgBAGACQAKADAEADIAAARQgHgGgGgCQgHgDgHAAQgPAAgIAKQgIAKAAARQAAASAIAKQAIAKAPAAQAHAAAHgCQAIgEAFgEIAAAQQgHAEgHABQgFACgIAAQgWAAgNgNg");
	this.shape_1027.setTransform(622.25,191.1);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAUABQATAAALAMQALANABASIAAAHIhFAAIAAAAQgBAVAIAIQAJAJAOAAQAHAAAJgCQAJgDAJgFIAAAQQgKAEgIABQgHACgJAAQgWAAgNgNgAgRgeQgHAJgBAJIA0AAQAAgJgHgJQgGgHgMAAQgKAAgJAHg");
	this.shape_1028.setTransform(600.525,191.1);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#059245").s().p("AAVAyIAAg8QAAgNgEgGQgFgGgKAAQgKAAgGAIQgGAHgBAQIAAA2IgPAAIAAhhIAPAAIAAAPQAGgJAGgEQAHgEAKAAQAPAAAHAJQAHAKABAUIAAA8g");
	this.shape_1029.setTransform(589.7,190.975);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#059245").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1030.setTransform(579.475,189.175);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#059245").s().p("AASBFQgPgBgGgIQgJgKABgRIAAhYIgaAAIAAgNIApAAIAABlQAAAKADAGQAFAGAHAAIATAAIAAAOg");
	this.shape_1031.setTransform(568.5,189.15);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#059245").s().p("AgtAIIAAgPIBbAAIAAAPg");
	this.shape_1032.setTransform(557.25,190.4);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAVABQATAAAKAMQALAMABATIAAAHIhFAAIAAAAQgBAVAIAIQAJAJAOAAQAHAAAJgCQAJgDAJgFIAAAQQgKAEgHABQgIACgJAAQgWAAgNgNgAgQgeQgIAJgBAJIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAHg");
	this.shape_1033.setTransform(546.325,191.1);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#059245").s().p("AASBFQgOgBgIgIQgHgKAAgRIAAhYIgaAAIAAgNIApAAIAABlQAAAKAEAGQAEAGAIAAIASAAIAAAOg");
	this.shape_1034.setTransform(535.975,189.15);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#059245").s().p("AgOBEIgOgDIAAgQIAQAGIAMACQANAAAFgIQAHgGAAgQIAAgMQgFAJgGAEQgHAEgIAAQgRAAgLgOQgLgNABgXQgBgXALgOQAKgNASAAQAIAAAHADQAFADAGAJIAAgNIAQAAIAABaQAAAWgLAMQgLALgTAAIgOgBgAgQguQgGAKAAASQAAASAGAJQAGAKALAAQAMgBAFgJQAHgJAAgSQAAgSgHgKQgGgJgLAAQgLAAgGAJg");
	this.shape_1035.setTransform(524.3,192.9);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#059245").s().p("AAVAyIAAg8QAAgNgEgGQgFgGgKAAQgKAAgGAIQgGAHAAAQIAAA2IgRAAIAAhhIARAAIAAAPQAEgJAHgEQAHgEAKAAQAPAAAHAJQAIAKAAAUIAAA8g");
	this.shape_1036.setTransform(513.825,190.975);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#059245").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1037.setTransform(503.625,189.175);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#059245").s().p("AgRAyQgKgBgIgDIAAgRIASAHQAHACAIAAQAKAAAFgFQAHgDAAgJQAAgLgVgEIgBAAIgGgCQgNgBgHgHQgGgGAAgLQAAgOAJgIQAKgHAQAAIAQAAIAOAFIAAAQQgHgFgHgBQgGgCgJAAQgKAAgFAEQgGADABAHQgBAHAFADQAFAEAOADIAGABQANACAFAGQAHAGAAAMQAAAPgKAHQgKAIgTAAIgOgBg");
	this.shape_1038.setTransform(492.15,191.1);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#059245").s().p("AgfArQgJgIAAgOQAAgRAMgIQALgIAUAAIAWAAIAAgCQAAgMgGgGQgGgFgNAAQgHAAgJADQgJACgHAEIAAgQIARgFIAPgBQAMAAAJADQAJAEAFAGQAEAGAAAGQACAGAAANIAAA3IgQAAIAAgPQgFAIgIAGQgJADgKAAQgPABgJgJgAgQAEQgHAGAAAKQAAAJAFAEQAFAFAKAAQAMAAAIgJQAIgKAAgQIAAgDIgVAAQgNAAgHAEg");
	this.shape_1039.setTransform(470.225,191.1);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#059245").s().p("AgSAyQgJgBgIgDIAAgRIARAHQAIACAIAAQAJAAAHgFQAFgDAAgJQAAgLgUgEIAAAAIgHgCQgNgBgHgHQgGgGgBgLQAAgOAKgIQAKgHAQAAIAPAAIAPAFIAAAQQgHgFgHgBQgHgCgIAAQgKAAgFAEQgFADAAAHQAAAHAEADQAEAEAPADIAGABQAMACAGAGQAHAGAAAMQAAAPgKAHQgLAIgRAAIgQgBg");
	this.shape_1040.setTransform(448.8,191.1);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#059245").s().p("AgnBEIAAgMIAgAAIAAhIIgaAAIAAgNIApAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1041.setTransform(438.6,189.175);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#059245").s().p("AgSAyIgRgEIAAgRIARAHQAIACAIAAQAKAAAGgFQAGgDAAgJQAAgLgVgEIgBAAIgGgCQgNgBgHgHQgGgGAAgLQAAgOAJgIQAJgHARAAIAQAAIAOAFIAAAQQgHgFgHgBQgGgCgIAAQgLAAgFAEQgFADAAAHQAAAHAEADQAFAEAOADIAHABQAMACAGAGQAGAHAAALQAAAPgKAHQgKAIgSAAIgQgBg");
	this.shape_1042.setTransform(416.275,191.1);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#059245").s().p("AgnBEIAAgMIAgAAIAAhIIgaAAIAAgNIApAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1043.setTransform(406.1,189.175);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#059245").s().p("AAVBEIAAg9QAAgMgEgGQgFgGgKAAQgKAAgGAIQgGAHAAAPIAAA3IgRAAIAAiHIARAAIAAA1QAEgJAHgEQAHgEAKAAQAPAAAHAJQAIAKAAATIAAA9g");
	this.shape_1044.setTransform(394.625,189.175);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#059245").s().p("AgIBCIAAhzIgpAAIAAgQIBjAAIAAAQIgpAAIAABzg");
	this.shape_1045.setTransform(383.725,189.45);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#059245").s().p("AgFBAIAJgkIgUAAIgKAkIgOAAIAJgkIgWAAIAAgNIAaAAIAJgiIgYAAIAAgNIAaAAIAJgfIAMAAIgGAfIAUAAIAIgfIAOAAIgIAfIAWAAIAAANIgZAAIgJAiIAXAAIAAANIgaAAIgJAkgAgOAPIAWAAIAIgiIgVAAg");
	this.shape_1046.setTransform(362.1,189.575);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#FFFFFF").s().p("AgSBBIAJgkIAAgYIAcAAIAAAYIgSAkgAgKgfIAAghIAcAAIAAAhg");
	this.shape_1047.setTransform(861.2,585.25);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#FFFFFF").s().p("AgUBVQAMgVAGgWQAFgVAAgVQAAgVgFgUQgGgWgMgVIAPAAQANAXAHAUQAGAUAAAVQAAAWgGAUQgHAWgNAVg");
	this.shape_1048.setTransform(849.975,582.2);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#0BFFFF").s().p("AggAoQgNgPAAgZQAAgYANgPQANgPAWAAQATAAAMAOQAMANAAATIAAAIIhJAAIAAAAQgBAWAJAJQAKAJAOAAQAJAAAJgDQAIgCALgFIAAARIgTAGIgSACQgXAAgOgPgAgRgfQgJAIAAAKIA3AAQAAgKgIgIQgGgIgNAAQgMAAgHAIg");
	this.shape_1049.setTransform(838.925,583.925);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#0BFFFF").s().p("AATBIQgQABgHgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAAMAEAFQAEAGAJAAIAUAAIAAAOg");
	this.shape_1050.setTransform(827.975,581.85);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#0BFFFF").s().p("AgNBGQgHgEgFgIIAAANIgRAAIAAiQIARAAIAAA2QAEgIAIgEQAHgEAIAAQAUAAAKAPQALAOAAAYQAAAbgLAOQgLAPgTAAQgIAAgHgEgAgSgKQgHAKAAATQAAAUAHAKQAGAKAMAAQAMAAAGgKQAHgLAAgTQAAgTgHgKQgGgKgMAAQgMAAgGAKg");
	this.shape_1051.setTransform(816.275,582.025);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#0BFFFF").s().p("AghAuQgJgJAAgPQAAgSALgIQAMgJAWAAIAXAAIAAgDQAAgMgGgGQgHgFgNAAQgHAAgKACQgIACgJAGIAAgSIASgFIAQgCQANAAAJAEQAKAFAFAGQADAFABAHQACAHAAANIAAA7IgRAAIAAgQQgFAJgJAFQgIAFgLAAQgPAAgLgJgAgRAFQgIAFAAAKQAAAKAGAFQAFAFAKAAQAOAAAIgKQAIgKAAgRIAAgDIgWAAQgNAAgIAFg");
	this.shape_1052.setTransform(804.25,583.925);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAiAAIAAhMIgbAAIAAgOIAqAAIAABaIAiAAIAAANgAgHgyIAAgVIAPAAIAAAVg");
	this.shape_1053.setTransform(793.7,581.9);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#0BFFFF").s().p("AgkA1IAAhnIARAAIAAAVQAFgLAIgGQAIgGANAAQAGAAAFABQAHACAEADIAAASQgFgEgGgDIgNgCQgPAAgIALQgJAKAAASIAAAzg");
	this.shape_1054.setTransform(782.825,583.775);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#0BFFFF").s().p("AggAuQgKgJAAgPQAAgSALgIQANgJAVAAIAXAAIAAgDQgBgMgFgGQgHgFgNAAQgHAAgKACQgKADgHAFIAAgSIASgFIAQgCQANAAAJAEQAJAFAGAGQADAFABAHQACAHAAANIAAA7IgRAAIAAgQQgGAKgIAEQgIAFgLAAQgRAAgIgJgAgSAFQgHAFAAAKQAAAKAFAFQAGAFAKAAQANAAAIgKQAIgJABgSIAAgDIgWAAQgOAAgIAFg");
	this.shape_1055.setTransform(769.85,583.925);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#0BFFFF").s().p("AgKBFIgpiKIATAAIAgB7IAhh7IATAAIgpCKg");
	this.shape_1056.setTransform(758.55,582.15);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#0BFFFF").s().p("AgoBIIAAgOIAKAAQAHgBAFgEQAEgEAHgSIgphmIATAAIAdBQIAfhQIASAAIgyCBQgEAGgGAEQgHAEgIAAg");
	this.shape_1057.setTransform(747.175,585.9);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#0BFFFF").s().p("AAgA1IAAg6QAAgXgDgFQgCgFgHAAQgHAAgDAGQgCAFAAAWIAAA6IgPAAIAAg6QAAgXgDgFQgDgFgGAAQgHAAgDAGQgCAGAAAVIAAA6IgQAAIAAhnIAQAAIAAAJQACgFAFgDQAFgDAGAAQAHAAAFADQAEAEACAGQACgGAGgEQAFgDAHAAQAMAAAFAJQAGAKAAAbIAAA7g");
	this.shape_1058.setTransform(735.675,583.775);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#C69C6D").s().p("AgTAgIALgnIAAgZIAcAAIAAAZIgUAng");
	this.shape_1059.setTransform(711.975,589);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#C69C6D").s().p("AAFAbIAJgiIAAgTIAYAAIAAATIgTAigAglAbIAJgiIAAgTIAYAAIAAATIgSAig");
	this.shape_1060.setTransform(701.175,577.375);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#C69C6D").s().p("AgOA0IAAgiIAcAAIAAAigAgOgSIAAghIAcAAIAAAhg");
	this.shape_1061.setTransform(689.4,583.9);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#C69C6D").s().p("AggAoQgNgPAAgZQAAgYANgPQANgPAWAAQAUAAALAOQAMANAAATIAAAIIhJAAIAAAAQgBAWAJAJQAKAJAOAAQAJAAAJgDQAIgCALgFIAAARIgTAGIgSACQgXAAgOgPgAgRgfQgJAIAAAKIA3AAQAAgKgIgIQgGgIgNAAQgLAAgIAIg");
	this.shape_1062.setTransform(678.275,583.925);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#C69C6D").s().p("AgfArQgIgLAAgVIAAg/IARAAIAAA/QAAAOAFAHQAGAGAKAAQAKAAAHgIQAHgJAAgQIAAg5IARAAIAABmIgRAAIAAgPQgFAJgIAEQgIAGgJAAQgQAAgIgLg");
	this.shape_1063.setTransform(666.825,584.05);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#C69C6D").s().p("AATBIQgPABgIgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAGQAEAGAIAAIAUAAIAAAOg");
	this.shape_1064.setTransform(655.85,581.85);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#C69C6D").s().p("AghAuQgJgKAAgOQAAgSAMgIQALgJAWAAIAXAAIAAgDQAAgMgHgGQgGgFgNAAQgHAAgKACQgIACgKAGIAAgSIATgFIAQgCQANAAAJAEQAJAFAGAGQAEAHABAFQABAHAAANIAAA7IgRAAIAAgQQgFAKgJAEQgIAFgLAAQgQAAgKgJgAgRAFQgIAFAAAKQAAAKAGAFQAFAFAKAAQANAAAJgKQAIgJAAgSIAAgDIgWAAQgNAAgIAFg");
	this.shape_1065.setTransform(643.625,583.925);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#C69C6D").s().p("AgKA0IglhnIARAAIAeBWIAehWIASAAIglBng");
	this.shape_1066.setTransform(632.35,583.9);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#C69C6D").s().p("AggAoQgNgPAAgZQAAgYANgPQAOgPAVAAQAUAAALAOQAMANAAATIAAAIIhJAAIAAAAQAAAVAIAKQAKAJAPAAQAIAAAJgDQAIgCALgFIAAARIgTAGIgSACQgXAAgOgPgAgRgfQgJAIAAAKIA3AAQAAgKgIgIQgGgIgNAAQgLAAgIAIg");
	this.shape_1067.setTransform(609.425,583.925);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#C69C6D").s().p("AAXBIIAAhAQAAgMgFgIQgFgGgLAAQgLAAgGAIQgHAIAAAPIAAA7IgRAAIAAiPIARAAIAAA4QAFgJAIgFQAHgEAKAAQAQAAAIAKQAIAKAAAVIAABAg");
	this.shape_1068.setTransform(597.975,581.875);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#C69C6D").s().p("AAVBDQgUAAgGgIQgIgHAAgTIAAg4IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA4QAAALAFAFQAEAEALAAIATAAIAAAOg");
	this.shape_1069.setTransform(586.1,582.425);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#C69C6D").s().p("AgTA1IgSgFIAAgSQAIAFAKADQAKACAHAAQAKAAAHgEQAFgFABgIQAAgMgXgFIAAAAIgHgBQgOgDgHgGQgHgHAAgMQAAgOAKgJQAKgIASAAIAQACIAQAEIAAARIgPgGQgJgDgGAAQgKAAgHAEQgFAEAAAIQAAAHAEADQAEAEAQADIAHABQAMACAIAHQAGAIAAALQAAAPgLAJQgLAJgSAAQgJAAgIgCg");
	this.shape_1070.setTransform(563.55,583.925);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#C69C6D").s().p("AgfA7QgLgPAAgaQAAgXALgPQALgPATAAQAJAAAHAEQAHAEAEAIIAAg2IARAAIAACQIgRAAIAAgNQgFAIgHAEQgHAEgIAAQgSAAgMgPgAgRgKQgGAKAAATQAAAUAGAKQAHAKALAAQAMAAAGgKQAHgKAAgUQAAgTgHgKQgGgKgMAAQgLAAgHAKg");
	this.shape_1071.setTransform(551.675,582.025);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#C69C6D").s().p("AATBIQgPABgIgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAGQAEAGAIAAIAUAAIAAAOg");
	this.shape_1072.setTransform(541.1,581.85);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#C69C6D").s().p("AggApQgMgPAAgaQAAgZAMgPQALgOAVAAQAVAAAMAOQAMAPAAAZQAAAagMAPQgMAOgVAAQgVAAgLgOgAgTgdQgHALAAASQAAAUAHAKQAHAKAMAAQANAAAHgKQAGgKAAgUQAAgTgGgKQgHgKgNAAQgMAAgHAKg");
	this.shape_1073.setTransform(529.075,583.925);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#C69C6D").s().p("AAXBIIAAhAQAAgNgGgHQgEgGgLAAQgMAAgFAIQgHAIABAPIAAA7IgSAAIAAiPIASAAIAAA4QAEgJAHgFQAJgEAJAAQAQAAAIAKQAIALAAAUIAABAg");
	this.shape_1074.setTransform(517.65,581.875);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#C69C6D").s().p("AgPAcIAJgjIAAgUIAWAAIAAAUIgRAjg");
	this.shape_1075.setTransform(787.925,554.5);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#C69C6D").s().p("AggAoQgOgOAAgaQAAgYAOgPQAOgPAUAAQAVAAALAOQAMAOAAATIAAAHIhJAAIAAAAQAAAVAIAKQAJAJAQAAQAJAAAIgCQAHgCAMgGIAAARQgLAEgIACQgJACgJAAQgXAAgOgPgAgSgfQgHAIgBALIA3gBQgBgKgGgIQgIgIgMAAQgLAAgJAIg");
	this.shape_1076.setTransform(776.3,561.025);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#C69C6D").s().p("AATBJQgPAAgIgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAAMAEAFQAFAGAIAAIAUAAIAAAPg");
	this.shape_1077.setTransform(765.325,558.975);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#C69C6D").s().p("AgNBGQgHgEgFgIIAAANIgRAAIAAiQIARAAIAAA2QAFgIAHgDQAHgFAIAAQATAAALAPQALAPAAAYQAAAagLAOQgKAPgUAAQgJAAgGgEgAgSgKQgHAKAAATQAAATAHALQAHAKALAAQAMAAAGgKQAHgKAAgUQAAgTgHgKQgGgKgMAAQgLAAgHAKg");
	this.shape_1078.setTransform(753.625,559.125);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#C69C6D").s().p("AghAuQgJgKAAgOQAAgSAMgIQALgJAWAAIAXAAIAAgCQAAgNgGgFQgHgGgNAAQgIAAgJACQgJADgIAFIAAgRQAJgEAJgCIAQgCQAMAAAKAEQAIAEAHAIQADAEACAHQABAHAAAOIAAA6IgRAAIAAgPQgGAKgIADQgIAFgLAAQgQAAgKgJgAgRAFQgIAGAAAKQAAAJAGAFQAGAGAKAAQAMAAAJgKQAIgKAAgRIAAgEIgWAAQgNAAgIAFg");
	this.shape_1079.setTransform(741.625,561.025);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#C69C6D").s().p("AgqBIIAAgNIAiAAIAAhMIgaAAIAAgOIArAAIAABaIAiAAIAAANgAgIgyIAAgVIARAAIAAAVg");
	this.shape_1080.setTransform(731.1,559.025);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#C69C6D").s().p("AgkA2IAAhoIASAAIAAAUQADgKAJgHQAJgFALAAQAHAAAGACIAKAEIAAARIgLgFQgFgDgIAAQgOAAgJALQgJAJABATIAAA0g");
	this.shape_1081.setTransform(720.2,560.9);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#C69C6D").s().p("AggAuQgKgJAAgPQAAgSAMgIQAMgJAVAAIAXAAIAAgCQAAgNgGgFQgHgGgNAAQgHAAgKACIgSAIIAAgRIATgGIAQgCQAMAAAKAEQAJAEAFAIQAEAEABAHQACAHAAAOIAAA6IgRAAIAAgPQgGAJgIAEQgIAFgLAAQgQAAgJgJgAgSAFQgHAGAAAKQAAAJAGAFQAFAGALAAQAMAAAJgKQAIgLAAgQIAAgEIgVAAQgOAAgJAFg");
	this.shape_1082.setTransform(707.2,561.025);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#C69C6D").s().p("AgKBGIgpiLIATAAIAgB7IAhh7IATAAIgpCLg");
	this.shape_1083.setTransform(695.925,559.3);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#C69C6D").s().p("AgoBIIAAgOIAKAAQAIAAADgEQAEgEAHgTIgohmIASAAIAeBRIAfhRIASAAIgnBiQgJAagCAEQgEAHgHAFQgGADgJAAg");
	this.shape_1084.setTransform(684.575,563);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#C69C6D").s().p("AAgA2IAAg7QAAgWgCgFQgDgGgGAAQgIAAgCAGQgDAGAAAVIAAA7IgPAAIAAg7QAAgWgDgGQgCgFgHAAQgHAAgCAGQgDAGAAAVIAAA7IgQAAIAAhoIAQAAIAAAJQADgGAFgDQAEgCAGAAQAHgBAFAEQADADADAHQADgIAFgCQAGgEAGABQAMAAAGAKQAFAJAAAbIAAA8g");
	this.shape_1085.setTransform(673.025,560.9);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#C69C6D").s().p("AgPAcIAAgUIARgjIAOAAIgJAjIAAAUg");
	this.shape_1086.setTransform(661.725,554.5);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#C69C6D").s().p("AgfAoQgPgOAAgaQAAgYAOgPQANgPAWAAQAUAAALAOQAMANAAAUIAAAHIhJAAIAAAAQAAAVAIAKQAKAJAPAAQAJAAAIgCQAHgCAMgGIAAARQgKAEgJACQgIACgJAAQgYAAgNgPgAgSgfQgHAJgBAKIA3gBQgBgKgGgIQgIgIgMAAQgLAAgJAIg");
	this.shape_1087.setTransform(638.6,561.025);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#C69C6D").s().p("AATBJQgPAAgIgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAGQAEAGAJAAIATAAIAAAPg");
	this.shape_1088.setTransform(627.65,558.975);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#C69C6D").s().p("AgNBGQgIgEgDgIIAAANIgSAAIAAiQIASAAIAAA2QADgHAIgEQAHgFAJAAQASAAALAPQALAPAAAYQAAAZgLAPQgLAPgTAAQgJAAgGgEgAgSgKQgGAKAAATQAAAUAGAKQAHAKALAAQAMAAAHgKQAGgKAAgUQAAgTgGgKQgHgKgMAAQgLAAgHAKg");
	this.shape_1089.setTransform(615.925,559.125);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#C69C6D").s().p("AghAuQgJgJAAgPQAAgSAMgIQAMgJAVAAIAXAAIAAgCQAAgNgHgFQgFgGgOAAQgHAAgKACQgJADgJAFIAAgRIASgGIARgCQAMAAAKAEQAIADAGAJQAEAEACAHQABAHAAAOIAAA6IgRAAIAAgPQgHAKgHADQgIAFgMAAQgPAAgKgJgAgSAFQgHAGAAAKQAAAJAGAFQAGAGAKAAQAMAAAIgKQAIgJABgSIAAgEIgWAAQgNAAgJAFg");
	this.shape_1090.setTransform(603.95,561.025);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#C69C6D").s().p("AgqBIIAAgNIAiAAIAAhMIgbAAIAAgOIAsAAIAABaIAiAAIAAANgAgIgyIAAgVIARAAIAAAVg");
	this.shape_1091.setTransform(593.4,559.025);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#C69C6D").s().p("AgkA2IAAhoIASAAIAAAUQADgKAJgHQAJgFALAAQAIAAAFACIAKAEIAAARIgLgFQgFgDgIAAQgOAAgJALQgJAJABATIAAA0g");
	this.shape_1092.setTransform(582.5,560.9);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#C69C6D").s().p("AghAuQgJgKAAgOQAAgSAMgIQALgJAWAAIAXAAIAAgCQAAgNgHgFQgGgGgNAAQgHAAgKACIgSAIIAAgRIATgGIAQgCQAMAAAKAEQAIAEAHAIQADAFACAGQABAHAAAOIAAA6IgRAAIAAgPQgGAKgIADQgIAFgLAAQgQAAgKgJgAgRAFQgIAGAAAKQAAAJAGAFQAFAGAKAAQANAAAJgKQAIgKAAgRIAAgEIgWAAQgNAAgIAFg");
	this.shape_1093.setTransform(569.525,561.025);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#C69C6D").s().p("AgKA0IglhnIARAAIAeBWIAehWIASAAIglBng");
	this.shape_1094.setTransform(558.25,561.025);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#C69C6D").s().p("AggAoQgNgOAAgaQAAgYANgPQAOgPAVAAQAUAAALAOQAMANAAAUIAAAHIhJAAIAAAAQAAAVAIAKQAJAJAQAAQAJAAAIgCQAGgCANgGIAAARQgKAEgJACQgIACgKAAQgXAAgOgPgAgRgfQgJAJAAAKIA3gBQAAgJgIgJQgHgIgMAAQgLAAgIAIg");
	this.shape_1095.setTransform(535.325,561.025);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#C69C6D").s().p("AAXBJIAAhBQAAgNgFgHQgGgHgKAAQgKAAgHAJQgHAIAAAPIAAA8IgRAAIAAiRIARAAIAAA5QAFgJAIgFQAHgEAKAAQAQAAAIAKQAIAKAAAVIAABBg");
	this.shape_1096.setTransform(523.875,559);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#C69C6D").s().p("AgJBGIAAh6IgrAAIAAgRIBpAAIAAARIgsAAIAAB6g");
	this.shape_1097.setTransform(512.35,559.3);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#C69C6D").s().p("AAFAcIAJgjIAAgUIAYAAIAAAUIgSAjgAglAcIAJgjIAAgUIAYAAIAAAUIgSAjg");
	this.shape_1098.setTransform(500.85,554.5);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#FFFFFF").s().p("AAGBVQgNgXgGgVQgHgTAAgWQAAgVAHgUQAGgUANgXIAPAAQgMAWgGAVQgFAUAAAVQAAAVAFAVQAFATANAYg");
	this.shape_1099.setTransform(489.475,559.35);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#F9EB70").s().p("AgeBFIAAgRIARAGQAGACAHAAQANAAAGgIQAHgHgBgQIAAgNQgDAIgHAGQgHADgKAAQgSAAgLgOQgLgPAAgXQAAgYALgPQAMgPARAAQAIAAAJAEQAGAEAEAIIAAgNIASAAIAABgQAAAXgLANQgLAMgVAAgAgRgwQgHAJABAUQgBATAHAJQAHALALAAQAMAAAGgLQAHgJgBgTQABgTgHgKQgGgLgMABQgLgBgHALg");
	this.shape_1100.setTransform(477.6,562.95);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#F9EB70").s().p("AggApQgMgNAAgcQAAgaAMgNQALgPAVAAQAVAAAMAPQALAOAAAZQAAAbgLAOQgLAOgWAAQgVAAgLgOgAgTgdQgHAKAAATQAAAUAHAKQAHAKAMAAQAMAAAIgKQAGgLAAgTQAAgTgGgKQgHgKgNAAQgMAAgHAKg");
	this.shape_1101.setTransform(466.45,561.025);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#F9EB70").s().p("AATBJQgPAAgIgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAGQAFAGAIAAIAUAAIAAAPg");
	this.shape_1102.setTransform(455.525,558.975);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#FFFFFF").s().p("AgPATIAAglIAfAAIAAAlg");
	this.shape_1103.setTransform(443.025,564.375);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#0BFFFF").s().p("AggAoQgNgOAAgaQAAgYANgPQANgPAWAAQATAAAMAOQAMANAAAUIAAAHIhJAAIAAAAQAAAWAIAJQAJAJAPAAQAKAAAHgCQAHgCANgGIAAARQgKAEgJACQgIACgKAAQgYAAgNgPgAgRgfQgJAJAAAKIA3gBQgBgKgHgIQgHgIgMAAQgMAAgHAIg");
	this.shape_1104.setTransform(432.075,561.025);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#0BFFFF").s().p("AATBJQgPAAgIgKQgIgJAAgTIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAGQAEAGAJAAIAUAAIAAAPg");
	this.shape_1105.setTransform(421.125,558.975);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#0BFFFF").s().p("AggApQgMgOAAgbQAAgZAMgOQALgPAVAAQAVAAAMAPQAMAOAAAZQAAAbgMAOQgLAOgWAAQgVAAgLgOgAgTgdQgHAKAAATQAAATAHALQAHAKAMAAQANAAAHgKQAGgKAAgUQAAgTgGgKQgHgKgNAAQgMAAgHAKg");
	this.shape_1106.setTransform(409.075,561.025);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#0BFFFF").s().p("AgSA1QgKgBgJgEIAAgRIATAHQAIADAIAAQALAAAGgFQAFgFAAgIQABgMgWgEIgBgBIgGgBQgPgDgHgGQgHgGABgMQgBgPALgIQAKgJARAAQAJAAAIACIAPAFIAAAQQgHgEgIgCQgGgCgKAAQgKAAgGAEQgFAEAAAHQgBAHAFADQAEADAQAEIAHABQAOADAFAGQAHAHAAAMQAAAPgLAJQgLAJgSAAg");
	this.shape_1107.setTransform(397.65,561.025);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#0BFFFF").s().p("AAXA2IAAhAQAAgPgFgGQgGgHgKAAQgKAAgHAJQgHAKAAAOIAAA7IgRAAIAAhoIARAAIAAAQQAFgIAIgGQAHgEAKAAQAQAAAIAKQAIAKAAAWIAABAg");
	this.shape_1108.setTransform(386.175,560.9);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#0BFFFF").s().p("AggApQgMgNAAgcQAAgaAMgNQALgPAVAAQAVAAAMAPQALANAAAaQAAAcgLANQgLAOgWAAQgVAAgLgOgAgTgdQgHALAAASQAAATAHALQAHAKAMAAQANAAAHgKQAHgLgBgTQABgSgHgLQgGgKgOAAQgMAAgHAKg");
	this.shape_1109.setTransform(374.65,561.025);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#0BFFFF").s().p("AgaAoQgNgOAAgaQAAgYANgPQAPgPAWAAQAGAAAJACQAIADAGADIAAASQgHgGgGgCQgHgDgJAAQgPAAgJAKQgIALAAASQAAATAJALQAIAKAPAAQAJAAAHgCQAHgDAGgGIAAASQgHAEgHACQgGACgJAAQgXAAgOgPg");
	this.shape_1110.setTransform(363.275,561.025);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAVAAQATAAAKANQALAMABATIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAHAAAJgDQAKgCAIgFIAAAQIgRAGIgRACQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgLgGgHQgGgHgMAAQgLAAgHAIg");
	this.shape_1111.setTransform(958.925,516.875);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#059245").s().p("AASBEQgPABgGgKQgIgIAAgSIAAhYIgaAAIAAgMIApAAIAABkQAAALAEAFQADAGAJAAIASAAIAAANg");
	this.shape_1112.setTransform(948.575,514.9);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#059245").s().p("AgeAmQgLgNAAgZQAAgZALgNQAKgNAUAAQAUAAALANQALAOAAAYQAAAYgLAOQgKAOgVAAQgUAAgKgOgAgSgcQgGAKAAASQAAATAGAJQAGAKAMAAQAMAAAHgKQAGgJAAgTQAAgSgGgKQgHgJgMAAQgLAAgHAJg");
	this.shape_1113.setTransform(937.225,516.875);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#059245").s().p("AgSAyIgRgFIAAgQIARAHQAIACAIAAQAKAAAGgEQAGgFAAgIQAAgLgVgEIgBAAIgGgBQgOgDgGgGQgHgGAAgLQAAgOAKgIQAKgIAQAAQAIAAAIACIAOAEIAAAQQgHgEgHgCQgGgCgIAAQgLAAgFADQgFAEAAAHQAAAHAEADQADADAQADIAGACQANACAGAGQAGAHAAALQAAAOgLAIQgKAJgRAAQgIAAgIgCg");
	this.shape_1114.setTransform(926.425,516.875);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#059245").s().p("AAVAyIAAg8QAAgNgEgGQgFgGgKAAQgKAAgHAIQgFAIAAAPIAAA2IgQAAIAAhhIAQAAIAAAPQAFgJAGgEQAIgEAJAAQAPAAAHAKQAHAKAAATIAAA8g");
	this.shape_1115.setTransform(915.6,516.725);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#059245").s().p("AgfAmQgKgNAAgZQAAgYAKgOQAMgNATAAQAUAAALANQALAOAAAYQAAAZgLANQgLAOgUAAQgTAAgMgOgAgRgcQgHAKAAASQAAATAHAJQAFAKAMAAQAMAAAHgKQAGgJAAgTQAAgSgGgKQgHgJgMAAQgLAAgGAJg");
	this.shape_1116.setTransform(904.7,516.875);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#059245").s().p("AgYAmQgNgOAAgYQAAgXANgOQANgOAVAAQAJAAAFACQAGACAIAEIAAARQgEgFgJgEQgHgCgIAAQgNAAgIAKQgJAKAAARQAAASAJAKQAIAKANAAQAIAAAIgDQAGgCAGgGIAAARQgFADgIADIgPACQgVAAgNgOg");
	this.shape_1117.setTransform(893.95,516.875);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgWANgPQAMgOAVAAQATAAAKANQALAMABATIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAHAAAJgDQAJgCAJgFIAAAQIgRAGIgRACQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgBgKgHgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1118.setTransform(872.225,516.875);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#059245").s().p("AAVBEIAAg9QAAgLgEgHQgFgGgKAAQgKAAgGAIQgHAIAAAOIAAA3IgPAAIAAiHIAPAAIAAA1QAGgJAHgEQAHgEAJAAQAQAAAGAKQAIAJAAATIAAA9g");
	this.shape_1119.setTransform(861.4,514.925);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#059245").s().p("AAUA/QgTAAgFgHQgIgHAAgSIAAg1IgaAAIAAgMIAaAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAAKAEAFQAEAEALAAIASAAIAAANg");
	this.shape_1120.setTransform(850.2,515.45);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#059245").s().p("AgeAmQgLgNAAgZQAAgYALgOQALgNATAAQAUAAALANQALANAAAZQAAAZgKANQgMAOgUAAQgTAAgLgOgAgRgcQgHAKAAASQAAATAHAJQAFAKAMAAQAMAAAGgKQAHgJAAgTQAAgSgHgKQgGgJgMAAQgLAAgGAJg");
	this.shape_1121.setTransform(828.85,516.875);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#059245").s().p("AAUA/QgTAAgGgHQgIgHABgSIAAg1IgaAAIAAgMIAaAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAALAEAEQAEAEALAAIASAAIAAANg");
	this.shape_1122.setTransform(817.7,515.45);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#059245").s().p("AgSAyIgRgFIAAgQIARAHQAIACAIAAQAKAAAGgEQAGgFAAgIQAAgLgVgEIgBAAIgGgBQgOgDgGgGQgHgGAAgLQAAgPAKgHQAJgIARAAQAIAAAIACIAOAEIAAAQQgHgEgHgCQgGgCgIAAQgLAAgFADQgFAEAAAHQAAAHAEADQAEADAPADIAGACQANACAGAGQAGAHAAALQAAAOgKAIQgLAJgRAAQgIAAgIgCg");
	this.shape_1123.setTransform(796.375,516.875);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f("#059245").s().p("AATA/QgSAAgGgHQgIgHABgSIAAg1IgaAAIAAgMIAaAAIAAgcIAOAAIAAAcIAlAAIAAAMIglAAIAAA1QAAAKAFAFQAEAEAKAAIASAAIAAANg");
	this.shape_1124.setTransform(785.2,515.45);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#059245").s().p("AAVAyIAAg8QAAgMgEgHQgFgGgKAAQgKAAgGAIQgHAJAAAOIAAA2IgQAAIAAhhIAQAAIAAAPQAFgJAHgEQAIgEAJAAQAPAAAHAKQAIAKAAATIAAA8g");
	this.shape_1125.setTransform(774.725,516.725);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#059245").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHguIAAgVIAPAAIAAAVg");
	this.shape_1126.setTransform(764.525,514.95);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#059245").s().p("AgiAyIAAhhIAQAAIAAATQAFgLAIgFQAIgFALAAQAGAAAFABIAKAFIAAAQIgLgGQgFgBgGAAQgPAAgIAJQgIAKAAARIAAAwg");
	this.shape_1127.setTransform(754.225,516.725);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#059245").s().p("AgnBFIAAiHIAQAAIAAANQAEgGAHgGQAGgDAIAAQATAAAJANQAKAOAAAZQAAAYgKANQgLANgRAAQgHAAgHgDQgHgEgEgHIAAAxgAgRgsQgGAIAAAUQAAASAGAJQAGAKALAAQAMAAAGgKQAFgKAAgRQAAgTgFgKQgHgKgLAAQgLAAgGALg");
	this.shape_1128.setTransform(742.425,518.6);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#059245").s().p("AAVBEIAAg9QAAgLgEgHQgFgGgKAAQgKAAgGAIQgGAIAAAOIAAA3IgRAAIAAiHIARAAIAAA1QAEgJAHgEQAIgEAJAAQAPAAAHAKQAIAKAAASIAAA9g");
	this.shape_1129.setTransform(720.525,514.925);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#059245").s().p("AgYAmQgNgNAAgZQAAgXANgOQANgOAWAAQAHAAAGACQAHACAHAEIAAARQgGgGgHgDQgHgCgHAAQgPAAgIAKQgIAJAAASQAAASAIAKQAIAKAPAAQAHAAAIgDQAFgCAHgGIAAARIgOAGIgNACQgWAAgNgOg");
	this.shape_1130.setTransform(709.75,516.875);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#059245").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHguIAAgVIAPAAIAAAVg");
	this.shape_1131.setTransform(699.475,514.95);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#059245").s().p("AAVBEIAAg9QAAgLgEgHQgFgGgKAAQgKAAgGAIQgGAIAAAOIAAA3IgRAAIAAiHIARAAIAAA1QAEgJAHgEQAIgEAJAAQAPAAAHAKQAIAKAAASIAAA9g");
	this.shape_1132.setTransform(688.025,514.925);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#059245").s().p("AAQAxIgQg0IgPA0IgPAAIgXhhIAQAAIARBPIAOgyIANAAIAOAyIARhPIAQAAIgXBhg");
	this.shape_1133.setTransform(677.125,516.85);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#059245").s().p("AAUA/QgTAAgGgHQgIgHABgSIAAg1IgaAAIAAgMIAaAAIAAgcIAPAAIAAAcIAkAAIAAAMIgkAAIAAA1QAAALAEAEQAEAEAKAAIASAAIAAANg");
	this.shape_1134.setTransform(655.15,515.45);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#059245").s().p("AAVAyIAAg8QAAgMgEgHQgFgGgKAAQgKAAgGAIQgGAIAAAPIAAA2IgRAAIAAhhIARAAIAAAPQAEgJAHgEQAIgEAJAAQAPAAAHAKQAIAKAAATIAAA8g");
	this.shape_1135.setTransform(644.675,516.725);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#059245").s().p("AgeAmQgNgNAAgZQAAgXANgOQAMgOAVAAQATAAAKANQALANABASIAAAHIhFAAIAAAAQgBAUAIAJQAKAJANAAQAHAAAJgDQAJgCAJgFIAAAQIgRAGIgRACQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1136.setTransform(633.825,516.875);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#059245").s().p("AAeAyIAAg3QAAgVgCgFQgCgFgHAAQgGAAgDAGQgDAFAAAUIAAA3IgNAAIAAg3QgBgVgCgFQgCgFgHAAQgHAAgCAGQgDAGAAATIAAA3IgOAAIAAhhIAOAAIAAAIQADgEAEgEQAGgCAEAAQAIAAAEADQADADACAGQAEgGAEgDQAFgDAGAAQAMAAAFAJQAFAIAAAaIAAA4g");
	this.shape_1137.setTransform(623,516.725);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgWANgPQAMgOAVAAQATAAAKANQAMANAAASIAAAHIhFAAIAAAAQAAAUAHAJQAJAJAOAAQAHAAAKgDQAIgCAKgFIAAAQIgSAGIgRACQgWAAgNgOgAgRgdQgHAHgBAKIA0AAQgBgKgGgIQgGgHgMAAQgLAAgIAIg");
	this.shape_1138.setTransform(612.15,516.875);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#059245").s().p("AAUA/QgTAAgGgHQgHgHAAgSIAAg1IgbAAIAAgMIAbAAIAAgcIAPAAIAAAcIAkAAIAAAMIgkAAIAAA1QAAAKAEAFQAEAEAKAAIASAAIAAANg");
	this.shape_1139.setTransform(600.95,515.45);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#059245").s().p("AgfArQgIgJgBgOQAAgQAMgIQAKgIAUAAIAXAAIAAgDQgBgLgGgGQgGgFgMAAQgHAAgJACQgHACgKAFIAAgQIARgFIAQgCQANAAAHAEQAJADAGAIQADAEABAGIABBLIgPAAIAAgPQgGAJgIAEQgHAFgLAAQgOAAgKgJgAgQAEQgIAGAAAJQABAJAFAFQAGAFAIAAQANAAAIgJQAHgJABgRIAAgDIgVAAQgMAAgIAEg");
	this.shape_1140.setTransform(590.25,516.875);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#059245").s().p("AATA/QgSAAgGgHQgHgHAAgSIAAg1IgaAAIAAgMIAaAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QgBAKAFAFQAEAEALAAIASAAIAAANg");
	this.shape_1141.setTransform(579.3,515.45);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#059245").s().p("AgRAyIgSgFIAAgQQAKAFAIACQAHACAIAAQALAAAEgEQAHgFAAgIQgBgLgUgEIgBAAIgFgBQgQgDgFgGQgHgGABgLQgBgPAKgHQAKgIARAAIAOACIAPAEIAAAQQgGgEgIgCQgGgCgIAAQgLAAgFADQgFAEAAAHQAAAHAEADQADADAQADIAHACQALACAHAGQAGAGAAAMQAAAOgLAIQgKAJgSAAQgHAAgHgCg");
	this.shape_1142.setTransform(568.8,516.875);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#059245").s().p("AAUA/QgTAAgGgHQgHgHAAgSIAAg1IgbAAIAAgMIAbAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAAKAEAFQAEAEAKAAIATAAIAAANg");
	this.shape_1143.setTransform(546.775,515.45);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#059245").s().p("AAWAyIAAg8QAAgNgGgGQgEgGgKAAQgKAAgGAIQgHAIAAAPIAAA2IgQAAIAAhhIAQAAIAAAPQAFgJAHgEQAIgEAJAAQAQAAAGAKQAIAKAAATIAAA8g");
	this.shape_1144.setTransform(536.3,516.725);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#059245").s().p("AgnBEIAAgNIAgAAIAAhIIgaAAIAAgMIApAAIAABUIAgAAIAAANgAgHguIAAgVIAPAAIAAAVg");
	this.shape_1145.setTransform(526.1,514.95);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#059245").s().p("AgiAyIAAhhIAQAAIAAATQAFgLAIgFQAHgFAMAAIALABQAFACAFADIAAAQIgLgGQgFgBgHAAQgOAAgIAJQgIAKAAARIAAAwg");
	this.shape_1146.setTransform(515.825,516.725);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#059245").s().p("AgnBFIAAiHIAQAAIAAANQAEgHAHgFQAGgDAIAAQASAAAKANQAKAPAAAYQAAAXgKAOQgLANgRAAQgIAAgHgDQgGgEgEgHIAAAxgAgRgsQgGAIAAAUQAAASAGAJQAGAKALAAQALAAAGgKQAGgJAAgSQAAgTgGgKQgGgKgLAAQgLAAgGALg");
	this.shape_1147.setTransform(504.025,518.6);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#059245").s().p("AgfArQgJgJAAgOQAAgPALgJQAMgIAUAAIAWAAIAAgDQgBgLgFgGQgHgFgMAAQgHAAgJACQgIACgIAFIAAgQIARgFIAPgCQAMAAAJAEQAJAEAFAHQADAEABAGQACAHAAANIAAA3IgQAAIAAgPQgGAKgIADQgHAFgLAAQgOAAgKgJgAgQAEQgHAFAAAKQAAAJAFAFQAFAFAKAAQAMAAAIgJQAHgJABgRIAAgDIgVAAQgNAAgHAEg");
	this.shape_1148.setTransform(481.875,516.875);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#059245").s().p("AgSAyIgRgFIAAgQIARAHQAIACAIAAQAKAAAGgEQAGgFAAgIQAAgLgVgEIgBAAIgGgBQgOgDgGgGQgGgGAAgLQAAgPAJgHQAJgIARAAQAIAAAIACIAOAEIAAAQQgHgEgHgCQgGgCgIAAQgLAAgFADQgFAEAAAHQAAAHAEADQAEADAPADIAHACQAMACAGAGQAGAHAAALQAAAOgKAIQgLAJgRAAQgIAAgIgCg");
	this.shape_1149.setTransform(460.425,516.875);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#059245").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHguIAAgVIAPAAIAAAVg");
	this.shape_1150.setTransform(450.25,514.95);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#059245").s().p("AgeAmQgNgNAAgZQAAgXANgOQAMgOAVAAQASAAALANQALANABASIAAAHIhFAAIAAAAQgBAUAIAJQAKAJANAAQAHAAAJgDQAJgCAJgFIAAAQIgRAGIgRACQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1151.setTransform(427.925,516.875);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#059245").s().p("AgiAyIAAhhIARAAIAAATQAEgLAIgFQAIgFALAAIALABQAFACAFADIAAAQQgFgDgGgDQgFgBgGAAQgPAAgHAJQgIAJAAASIAAAwg");
	this.shape_1152.setTransform(418.275,516.725);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgWANgPQAMgOAVAAQASAAALANQALANABASIAAAHIhFAAIAAAAQAAAVAHAIQAJAJAOAAQAGAAALgDQAIgCAKgFIAAAQIgSAGIgRACQgWAAgNgOgAgQgdQgIAHAAAKIA0AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1153.setTransform(406.25,516.875);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#059245").s().p("AAYBBIAAhBIgvAAIAABBIgSAAIAAiBIASAAIAAAyIAvAAIAAgyIASAAIAACBg");
	this.shape_1154.setTransform(395.375,515.2);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#059245").s().p("AgqBKIBEiTIARAAIhECTg");
	this.shape_1155.setTransform(373.45,516.05);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#059245").s().p("AgqBKIBEiTIARAAIhECTg");
	this.shape_1156.setTransform(362.625,516.05);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#FFFFFF").s().p("AgRA+IAJgiIAAgXIAaAAIAAAXIgRAigAgKgdIAAggIAbAAIAAAgg");
	this.shape_1157.setTransform(568.8,431.725);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#FF931D").s().p("AgaBFQgKgBgGgDIAAgTQAJAFAIACQAIACAJAAQAPAAAIgIQAJgIAAgQQAAgOgJgJQgJgHgOAAQgGAAgIACQgHABgHAEIAAhGIBFAAIAAAQIg0AAIAAAiIAIgCIAIgBQAVAAANANQAMALAAAWQAAAXgNAMQgOANgVAAg");
	this.shape_1158.setTransform(558.15,428.575);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#FF931D").s().p("AgwAeIAAgQIBhAAIAAAQgAgwgNIAAgQIBhAAIAAAQg");
	this.shape_1159.setTransform(535.275,429.325);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#0BFFFF").s().p("AggAoQgNgPAAgZQAAgYANgPQAOgPAUAAQAVAAALAOQAMAOAAASIAAAIIhJAAIAAAAQAAAVAIAKQAJAJAQAAQAHAAAJgCIAUgIIAAARIgUAGQgHACgKAAQgXAAgOgPgAgRgfQgJAIAAAKIA3AAQgBgLgHgHQgGgIgNAAQgMAAgHAIg");
	this.shape_1160.setTransform(512.4,430.175);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#0BFFFF").s().p("AATBIQgQAAgHgJQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAHQAFAFAIABIAUAAIAAANg");
	this.shape_1161.setTransform(501.425,428.1);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#0BFFFF").s().p("AgNBGQgIgFgEgHIAAANIgRAAIAAiQIARAAIAAA2QAEgHAIgFQAHgEAIAAQATAAALAPQALAOAAAZQAAAagLAOQgLAPgTAAQgHAAgIgEgAgSgKQgHAKAAATQAAATAHALQAHAKALAAQAMAAAGgKQAHgKAAgUQAAgTgHgKQgGgKgMAAQgLAAgHAKg");
	this.shape_1162.setTransform(489.725,428.275);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#0BFFFF").s().p("AghAuQgJgKAAgOQAAgSAMgIQALgJAWAAIAXAAIAAgDQAAgMgGgGQgHgFgNAAQgHAAgKACQgJADgIAFIAAgRQAKgEAIgCQAIgCAIAAQAMAAAKAEQAJAEAGAIQAEAGABAFQABAHAAAOIAAA6IgRAAIAAgPQgFAJgJAEQgIAFgLAAQgQAAgKgJgAgRAFQgIAFAAALQAAAJAGAFQAFAFAKAAQAOAAAIgJQAIgKAAgSIAAgDIgWAAQgOAAgHAFg");
	this.shape_1163.setTransform(477.725,430.175);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f("#0BFFFF").s().p("AgqBIIAAgNIAiAAIAAhMIgaAAIAAgOIArAAIAABaIAiAAIAAANgAgIgyIAAgVIARAAIAAAVg");
	this.shape_1164.setTransform(467.175,428.15);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#0BFFFF").s().p("AgkA1IAAhnIARAAIAAAVQAEgLAKgGQAIgGALAAIANABIAKAFIAAASQgGgFgGgBQgEgCgIAAQgPAAgJAKQgIAKAAASIAAAzg");
	this.shape_1165.setTransform(456.3,430.025);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f("#0BFFFF").s().p("AghAuQgJgJAAgPQAAgSAMgIQALgJAWAAIAXAAIAAgDQAAgLgHgHQgGgFgNAAQgHAAgKACQgJADgJAFIAAgRIATgGQAHgCAJAAQALAAALAEQAKAEAEAIQAEAEACAHQABAHAAAOIAAA6IgRAAIAAgPQgFAIgJAFQgIAFgLAAQgPAAgLgJgAgSAFQgHAFAAALQAAAJAGAFQAFAFALAAQANAAAHgJQAJgLAAgRIAAgDIgWAAQgOAAgIAFg");
	this.shape_1166.setTransform(443.3,430.175);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#0BFFFF").s().p("AgKBFIgpiJIATAAIAgB6IAhh6IATAAIgpCJg");
	this.shape_1167.setTransform(432.025,428.425);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#0BFFFF").s().p("AgpBIIAAgPIALAAQAIABADgFQAEgDAHgUIgohlIASAAIAeBQIAehQIATAAIgnBiQgJAagCAEQgEAIgHAEQgIADgHAAg");
	this.shape_1168.setTransform(420.675,432.15);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#0BFFFF").s().p("AAgA1IAAg6QAAgVgCgHQgDgFgGAAQgIAAgDAGQgCAGAAAVIAAA6IgPAAIAAg6QAAgWgDgGQgCgFgHAAQgHAAgDAGQgCAGAAAVIAAA6IgQAAIAAhnIAQAAIAAAJQACgFAFgDQAGgDAFAAQAIAAAEADQADADADAHQADgHAFgDQAFgDAHAAQANAAAFAJQAFALAAAaIAAA7g");
	this.shape_1169.setTransform(409.125,430.025);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f("#0071BC").s().p("AgkA1IAAhnIARAAIAAAVQAEgLAKgGQAIgGALAAIANABIAKAFIAAASQgGgFgGgBQgEgCgIAAQgPAAgJAKQgHAJgBATIAAAzg");
	this.shape_1170.setTransform(387.45,430.025);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#0071BC").s().p("AghAuQgJgJAAgPQAAgSAMgIQALgJAWAAIAXAAIAAgDQAAgMgHgGQgGgFgNAAQgHAAgKACQgIACgKAGIAAgRIATgGQAHgCAJAAQALAAALAEQAKAEAEAIQAEAEACAHQABAHAAAOIAAA6IgRAAIAAgPQgFAIgJAFQgIAFgLAAQgPAAgLgJgAgSAFQgHAFAAALQAAAJAGAFQAFAFALAAQANAAAIgJQAIgLAAgRIAAgDIgVAAQgOAAgJAFg");
	this.shape_1171.setTransform(374.45,430.175);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f("#0071BC").s().p("AgKA0IglhnIASAAIAdBXIAehXIASAAIglBng");
	this.shape_1172.setTransform(363.175,430.15);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgNQANgPATAAQATAAALANQALANABASIAAAHIhFAAIAAAAQgBAUAIAJQAJAJAOAAQAHAAAJgCQAJgCAJgGIAAAQQgKAEgIACQgHACgJAAQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgKgGgHQgGgIgMAAQgLAAgHAIg");
	this.shape_1173.setTransform(1099.825,385.975);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f("#059245").s().p("AgeAoQgGgJgBgUIAAg8IAQAAIAAA8QABANAEAGQAGAGAIAAQALAAAGgIQAGgIAAgPIAAg2IARAAIAABhIgRAAIAAgPQgEAJgHAEQgIAEgJAAQgPAAgIgKg");
	this.shape_1174.setTransform(1089,386.125);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#059245").s().p("AASBFQgOAAgIgJQgHgKAAgRIAAhYIgaAAIAAgNIApAAIAABlQAAAKAEAHQAEAFAIAAIASAAIAAAOg");
	this.shape_1175.setTransform(1078.625,384.025);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#059245").s().p("AgfArQgJgIAAgOQAAgRALgHQALgJAVAAIAVAAIAAgCQAAgMgGgFQgFgGgNAAQgJAAgHADQgKACgGAEIAAgQIARgFIAPgCQALAAAKAEQAHADAHAIQADAEABAHQACAHAAAMIAAA3IgRAAIAAgOQgFAIgIAFQgIAEgKAAQgPAAgJgJgAgQAFQgIAFAAAKQAAAJAGAEQAFAFAKAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgGAFg");
	this.shape_1176.setTransform(1067.075,385.975);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#059245").s().p("AgfArQgJgIAAgOQAAgRALgHQALgJAVAAIAVAAIAAgCQAAgMgGgFQgFgGgNAAQgJAAgHADQgJACgIAEIAAgQIASgFIAPgCQALAAAJAEQAIADAGAIQAEAEABAHQACAHAAAMIAAA3IgRAAIAAgOQgFAIgIAFQgIAEgKAAQgPAAgJgJgAgQAFQgIAFAAAKQAAAJAGAEQAFAFAKAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgGAFg");
	this.shape_1177.setTransform(1034.575,385.975);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgWANgOQANgPATAAQATAAAMANQAKANABASIAAAHIhFAAIAAAAQgBAUAIAJQAJAJAOAAQAHAAAJgCQAJgCAKgGIAAAQQgMAFgHABQgHACgJAAQgVAAgOgOgAgRgdQgHAIgBAJIA0AAQAAgJgHgIQgGgIgMAAQgLAAgIAIg");
	this.shape_1178.setTransform(980.6,385.975);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#059245").s().p("AgOBFIgOgEIAAgQIAQAGIAMACQANAAAFgHQAGgHAAgQIAAgLQgEAIgGAEQgHAEgIAAQgRAAgLgOQgKgOAAgWQAAgXAKgOQALgOARAAQAHAAAIAEQAGAEAEAIIAAgNIARAAIAABbQAAAWgLAMQgLALgTAAgAgQgtQgHAKAAARQAAASAHAJQAGAKALAAQAMAAAFgKQAGgIAAgTQAAgTgGgIQgFgKgMAAQgLAAgGAKg");
	this.shape_1179.setTransform(947.75,387.775);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#059245").s().p("AgdA3QgKgOAAgYQAAgWAKgOQALgOARAAQAIAAAHAEQAGAEAEAHIAAgyIAQAAIAACHIgQAAIAAgNQgDAHgIAFQgGADgIABQgSgBgKgOgAgQgKQgGAKAAASQAAATAGAJQAGAKAKAAQAMAAAGgKQAGgJAAgTQAAgSgGgKQgGgJgMAAQgKAAgGAJg");
	this.shape_1180.setTransform(926.075,384.2);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#059245").s().p("AAVAyIAAg8QAAgOgEgFQgFgGgKAAQgKAAgHAIQgFAHAAAQIAAA2IgQAAIAAhhIAQAAIAAAPQAEgIAHgFQAIgEAJgBQAOAAAIAKQAHALAAATIAAA8g");
	this.shape_1181.setTransform(915.6,385.85);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f("#059245").s().p("AgfArQgJgIAAgOQAAgRALgHQALgJAVAAIAVAAIAAgCQAAgMgGgFQgFgGgNAAQgJAAgHADQgJACgIAEIAAgQIASgFIAPgCQALAAAKAEQAHADAHAIQADAEABAHQACAHAAAMIAAA3IgRAAIAAgOQgFAIgIAFQgIAEgKAAQgPAAgJgJgAgQAFQgIAFAAAKQAAAJAGAEQAFAFAKAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgGAFg");
	this.shape_1182.setTransform(904.525,385.975);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgWANgOQANgPAUAAQATAAAKANQALAMABATIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAHAAAJgCQAJgCAJgGIAAAQQgKAEgHACQgIACgJAAQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgBgKgHgHQgGgIgMAAQgLAAgHAIg");
	this.shape_1183.setTransform(872.225,385.975);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f("#059245").s().p("AASBFQgPAAgGgJQgJgKABgRIAAhYIgbAAIAAgNIAqAAIAABlQAAAKADAHQAEAFAIAAIAUAAIAAAOg");
	this.shape_1184.setTransform(861.9,384.025);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#059245").s().p("AgMBCQgHgEgEgIIAAANIgQAAIAAiHIAQAAIAAAyQAEgHAHgEQAHgEAHAAQARAAALAOQAKANAAAXQAAAZgKANQgKAOgSABQgIgBgGgDgAgRgKQgGAKAAASQAAATAGAJQAGAKALAAQALAAAGgKQAGgJAAgTQAAgSgGgKQgGgJgLAAQgLAAgGAJg");
	this.shape_1185.setTransform(850.825,384.2);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#059245").s().p("AgeArQgKgIABgOQgBgRALgHQALgJAVAAIAVAAIAAgCQABgMgHgFQgFgGgNAAQgJAAgHADQgJACgHAEIAAgQIARgFIAPgCQALAAAKAEQAHADAGAIQAEAEACAHIABBKIgRAAIAAgOQgEAIgIAFQgKAEgIAAQgQAAgIgJgAgRAFQgGAFAAAKQgBAJAGAEQAFAFAKAAQAMAAAHgJQAJgJgBgRIAAgDIgUAAQgNAAgIAFg");
	this.shape_1186.setTransform(839.5,385.975);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#059245").s().p("AgiAyIAAhhIAQAAIAAATQAEgKAJgFQAIgHALAAIALACIAKAFIAAARQgFgFgGgBQgGgCgFAAQgOAAgJAJQgHAJgBASIAAAwg");
	this.shape_1187.setTransform(819.25,385.85);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f("#059245").s().p("AgfArQgJgIAAgOQAAgRALgHQALgJAVAAIAWAAIAAgCQAAgMgGgFQgGgGgNAAQgJAAgHADQgJACgHAEIAAgQIARgFIAPgCQALAAAKAEQAIADAGAIQAEAGAAAFQACAHAAAMIAAA3IgQAAIAAgOQgFAIgIAFQgJAEgKAAQgPAAgJgJgAgQAFQgHAFAAAKQAAAJAFAEQAFAFAKAAQAMAAAIgJQAIgKAAgQIAAgDIgVAAQgNAAgHAFg");
	this.shape_1188.setTransform(806.975,385.975);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#059245").s().p("AgKBBIgmiBIASAAIAeBzIAfhzIASAAIgmCBg");
	this.shape_1189.setTransform(796.325,384.35);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f("#059245").s().p("AgmBEIAAgNIAJAAQAIAAADgFQAFgEAGgRIgmhgIARAAIAcBMIAdhMIARAAIgvB6QgEAGgGADQgGAEgIAAg");
	this.shape_1190.setTransform(785.6,387.85);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#059245").s().p("AAfAyIAAg3QgBgVgCgFQgCgEgGAAQgIAAgCAEQgCAFgBAVIAAA3IgNAAIAAg3QAAgVgDgFQgCgFgHABQgGAAgDAEQgCAHgBATIAAA3IgOAAIAAhhIAOAAIAAAIQADgEAFgEQAFgDAFAAQAHABAEADQADACADAHQADgGAFgDQADgDAIgBQALABAGAJQAEAJAAAaIAAA3g");
	this.shape_1191.setTransform(774.7,385.85);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f("#059245").s().p("AgdA3QgKgNAAgZQAAgXAKgNQALgOARAAQAHAAAIAEQAGAEAEAHIAAgyIARAAIAACHIgRAAIAAgNQgEAIgGAEQgHADgIABQgTgBgJgOgAgRgKQgFAKAAASQAAATAFAJQAHAKAKAAQAMAAAGgKQAGgJAAgTQAAgSgGgKQgGgJgMAAQgKAAgHAJg");
	this.shape_1192.setTransform(741.85,384.2);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgWANgOQANgPATAAQATAAALANQALANABASIAAAHIhFAAIAAAAQgBAUAJAJQAIAJAOAAQAGAAAKgCQAJgCAJgGIAAAQQgLAFgHABQgHACgJAAQgWAAgNgOgAgQgdQgIAIAAAJIA0AAQgBgJgHgIQgGgIgMAAQgLAAgHAIg");
	this.shape_1193.setTransform(731.35,385.975);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f("#059245").s().p("AASBFQgOAAgIgJQgHgKgBgRIAAhYIgaAAIAAgNIAqAAIAABlQAAALAEAGQAEAFAIAAIASAAIAAAOg");
	this.shape_1194.setTransform(721,384.025);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#059245").s().p("AASBFQgOAAgIgJQgIgLAAgQIAAhYIgZAAIAAgNIApAAIAABlQAAALAEAGQAEAFAHAAIATAAIAAAOg");
	this.shape_1195.setTransform(710.175,384.025);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f("#059245").s().p("AgfArQgJgIAAgOQAAgRALgHQALgJAVAAIAVAAIAAgCQAAgMgGgFQgFgGgNAAQgJAAgHADQgJACgIAEIAAgQIASgFIAPgCQALAAAJAEQAIADAHAIQADAEABAHQACAHAAAMIAAA3IgRAAIAAgOQgFAIgIAFQgIAEgKAAQgPAAgJgJgAgQAFQgIAFAAAKQAAAJAGAEQAFAFAKAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgGAFg");
	this.shape_1196.setTransform(698.625,385.975);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#059245").s().p("AgYAmQgNgOAAgYQAAgXANgOQANgOAWAAIANACQAKADAEADIAAARQgGgGgHgCQgHgDgHAAQgOAAgJAKQgIAKAAARQAAASAIAKQAJAKAOAAQAHAAAIgCQAIgEAEgFIAAARQgHAEgGACQgHACgHAAQgWAAgNgOg");
	this.shape_1197.setTransform(688.05,385.975);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgNQANgPAUAAQATAAAKANQALAMABATIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAHAAAJgCQAJgCAJgGIAAAQQgKAEgHACQgIACgJAAQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgBgKgHgHQgGgIgMAAQgLAAgHAIg");
	this.shape_1198.setTransform(666.325,385.975);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#059245").s().p("AASBFQgPAAgHgJQgIgKAAgRIAAhYIgaAAIAAgNIAqAAIAABlQAAAKADAHQAFAFAIAAIATAAIAAAOg");
	this.shape_1199.setTransform(656,384.025);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f("#059245").s().p("AgMBCQgHgEgEgIIAAANIgQAAIAAiHIAQAAIAAAyQAEgHAHgEQAHgEAHAAQARAAALAOQAKANAAAXQAAAZgKANQgKAOgSABQgIgBgGgDgAgRgKQgGAKAAASQAAATAGAJQAGAKALAAQALAAAGgKQAGgJAAgTQAAgSgGgKQgGgJgLAAQgLAAgGAJg");
	this.shape_1200.setTransform(644.925,384.2);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#059245").s().p("AgfArQgJgIAAgOQAAgRALgHQAKgJAWAAIAVAAIAAgCQAAgMgFgFQgGgGgNAAQgJAAgHADQgJACgHAEIAAgQIARgFIAPgCQALAAAKAEQAHADAGAIQAEAEACAHIAABKIgQAAIAAgOQgEAIgIAFQgJAEgJAAQgQAAgJgJgAgQAFQgIAFABAKQAAAJAFAEQAFAFAJAAQANAAAHgJQAIgJAAgRIAAgDIgUAAQgOAAgGAFg");
	this.shape_1201.setTransform(633.6,385.975);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f("#059245").s().p("AgiAyIAAhhIARAAIAAATQADgKAJgFQAIgHALAAIALACIAKAFIAAARQgFgFgGgBQgHgCgFAAQgNAAgJAJQgHAJAAASIAAAwg");
	this.shape_1202.setTransform(613.35,385.85);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#059245").s().p("AgfArQgJgIAAgOQAAgRALgHQALgJAVAAIAWAAIAAgCQAAgMgGgFQgGgGgNAAQgJAAgHADQgJACgHAEIAAgQIARgFIAPgCQALAAAKAEQAIADAGAIQADAEABAHQACAHAAAMIAAA3IgQAAIAAgOQgFAIgIAFQgJAEgKAAQgPAAgJgJgAgQAFQgHAFAAAKQAAAJAFAEQAFAFAKAAQAMAAAIgJQAIgKAAgQIAAgDIgVAAQgNAAgHAFg");
	this.shape_1203.setTransform(601.075,385.975);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f("#059245").s().p("AgfArQgJgIAAgOQAAgRALgHQALgJAVAAIAVAAIAAgCQAAgMgGgFQgFgGgNAAQgJAAgHADQgKACgGAEIAAgQIARgFIAPgCQALAAAKAEQAHADAHAIQADAEABAHQACAHAAAMIAAA3IgRAAIAAgOQgEAIgJAFQgIAEgKAAQgPAAgJgJgAgQAFQgHAFAAAKQAAAJAFAEQAFAFAKAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgGAFg");
	this.shape_1204.setTransform(568.575,385.975);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgNQANgPAUAAQATAAAKANQALAMABATIAAAHIhFAAIAAAAQgBAUAIAJQAJAJAOAAQAHAAAJgCQAJgCAJgGIAAAQQgKAEgHACQgIACgJAAQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgKgGgHQgGgIgMAAQgLAAgHAIg");
	this.shape_1205.setTransform(547.125,385.975);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f("#059245").s().p("AgiAyIAAhhIARAAIAAATQADgKAJgFQAHgHALAAQAHABAFABIAKAFIAAARQgFgFgFgBIgNgCQgOAAgHAJQgJAJABASIAAAwg");
	this.shape_1206.setTransform(537.5,385.85);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#059245").s().p("AgfArQgJgIAAgOQAAgRALgHQALgJAVAAIAVAAIAAgCQAAgMgFgFQgGgGgNAAQgJAAgHADQgJACgHAEIAAgQIARgFIAPgCQALAAAKAEQAIADAGAIQADAEABAHQACAHAAAMIAAA3IgRAAIAAgOQgEAIgJAFQgIAEgKAAQgPAAgJgJgAgQAFQgHAFAAAKQAAAJAFAEQAFAFAKAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgGAFg");
	this.shape_1207.setTransform(525.225,385.975);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f("#059245").s().p("AASBFQgOAAgIgJQgHgKAAgRIAAhYIgaAAIAAgNIAoAAIAABlQAAAKAFAHQAEAFAHAAIATAAIAAAOg");
	this.shape_1208.setTransform(515.1,384.025);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#059245").s().p("AgZAmQgMgOAAgYQAAgXAMgOQAOgOAVAAIAPACQAIADAFADIAAARQgIgHgFgBQgGgDgJAAQgOAAgIAKQgIAKAAARQAAATAIAJQAJAKANAAQAIAAAIgCQAGgDAGgGIAAARQgIAEgFACQgHACgIAAQgVAAgOgOg");
	this.shape_1209.setTransform(503.85,385.975);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgWANgOQAMgPAUAAQAUAAAKANQAMANAAASIAAAHIhFAAIAAAAQgBAUAJAJQAIAJAOAAQAGAAAKgCQAJgCAJgGIAAAQIgSAGQgHACgJAAQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgBgKgHgHQgGgIgMAAQgLAAgHAIg");
	this.shape_1210.setTransform(492.95,385.975);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#059245").s().p("AgdA3QgKgNAAgZQAAgXAKgNQALgOARAAQAHAAAHAEQAHAEAEAHIAAgyIAQAAIAACHIgQAAIAAgNQgEAIgHAEQgGADgIABQgSgBgKgOgAgQgKQgGAKAAASQAAATAGAJQAGAKAKAAQAMAAAGgKQAGgJAAgTQAAgSgGgKQgGgJgMAAQgKAAgGAJg");
	this.shape_1211.setTransform(481.775,384.2);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgNQANgPAUAAQATAAAKANQALAMABATIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAHAAAJgCQAJgCAJgGIAAAQQgKAEgHACQgIACgJAAQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgBgKgHgHQgGgIgMAAQgLAAgHAIg");
	this.shape_1212.setTransform(460.425,385.975);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#059245").s().p("AAPAxIgPg1IgOA1IgQAAIgXhhIAQAAIARBOIAOgxIANAAIAOAxIARhOIAQAAIgXBhg");
	this.shape_1213.setTransform(449.55,385.975);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f("#059245").s().p("AgeAmQgNgNAAgZQAAgXANgNQANgPAUAAQASAAALANQALANABASIAAAHIhFAAIAAAAQgBAUAIAJQAJAJAOAAQAHAAAJgCQAJgCAJgGIAAAQQgKAEgHACQgIACgJAAQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgKgGgHQgGgIgMAAQgLAAgHAIg");
	this.shape_1214.setTransform(427.925,385.975);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f("#059245").s().p("AgiAyIAAhhIARAAIAAATQAEgKAIgFQAIgHALAAIALACIAKAFIAAARQgFgFgGgBQgHgCgEAAQgOAAgIAJQgIAJAAASIAAAwg");
	this.shape_1215.setTransform(418.275,385.85);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgWANgOQANgPAUAAQASAAALANQALANABASIAAAHIhFAAIAAAAQAAAVAHAIQAJAJAOAAQAGAAALgCQAIgCAKgGIAAAQIgSAGQgIACgJAAQgWAAgNgOgAgQgdQgIAIAAAJIA0AAQgBgKgHgHQgGgIgMAAQgLAAgHAIg");
	this.shape_1216.setTransform(406.25,385.975);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("#059245").s().p("AAYBBIAAhBIgvAAIAABBIgSAAIAAiBIASAAIAAAxIAvAAIAAgxIASAAIAACBg");
	this.shape_1217.setTransform(395.375,384.35);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f("#059245").s().p("AgqBKIBEiTIARAAIhECTg");
	this.shape_1218.setTransform(373.45,385.175);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("#059245").s().p("AgqBKIBEiTIARAAIhECTg");
	this.shape_1219.setTransform(362.625,385.175);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f("#059245").s().p("AgqBKIBEiTIARAAIhECTg");
	this.shape_1220.setTransform(373.45,298.775);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f("#059245").s().p("AgFAzIAAgpIglAWIgGgLIAngVIgngUIAGgLIAlAWIAAgpIALAAIAAApIAlgWIAGALIgnAUIAnAVIgGALIglgWIAAApg");
	this.shape_1221.setTransform(362.875,298.975);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f("#059245").s().p("AAVAyIAAg8QAAgOgEgFQgFgGgKAAQgKAAgHAIQgFAHAAAQIAAA2IgQAAIAAhhIAQAAIAAAPQAEgIAHgFQAHgEAKAAQAOgBAIAKQAHALAAATIAAA8g");
	this.shape_1222.setTransform(417.1,277.85);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgWANgOQANgPAUAAQASAAALANQALANABASIAAAHIhFAAIAAAAQAAAVAHAIQAJAJAOAAQAGAAALgCQAIgCAKgGIAAAQIgSAGQgIACgJAAQgWAAgNgOgAgQgdQgIAIAAAJIA0AAQgBgKgHgHQgGgIgMAAQgLAAgHAIg");
	this.shape_1223.setTransform(406.25,277.975);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f("#059245").s().p("AAeAyIAAg3QAAgVgCgFQgCgEgHAAQgGAAgDAEQgDAHABATIAAA3IgPAAIAAg3QAAgVgCgFQgCgFgHABQgGAAgDAEQgCAHAAATIAAA3IgPAAIAAhhIAPAAIAAAIQADgEAEgEQAFgDAFABQAHAAAEADQAEADACAGQADgGAEgDQAFgDAHAAQALAAAFAJQAFAJAAAaIAAA3g");
	this.shape_1224.setTransform(395.4,277.85);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("#059245").s().p("AAeAyIAAg3QAAgWgCgEQgDgEgFAAQgHAAgDAEQgDAHAAATIAAA3IgNAAIAAg3QAAgUgDgGQgDgFgGABQgHAAgCAEQgCAFAAAVIAAA3IgPAAIAAhhIAPAAIAAAIQADgFAEgDQAEgDAGABQAHAAAEADQAEADACAGQADgGAEgDQAEgDAIAAQALAAAFAJQAFAKAAAZIAAA3g");
	this.shape_1225.setTransform(384.575,277.85);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f("#059245").s().p("AgfAnQgKgOAAgZQAAgYAKgNQAMgOATAAQAVAAAKAOQALANAAAYQAAAZgLAOQgLANgUAAQgTAAgMgNgAgRgbQgHAJAAASQAAAUAHAIQAFAKAMAAQAMAAAHgKQAGgIAAgUQAAgSgGgJQgHgKgMAAQgMAAgFAKg");
	this.shape_1226.setTransform(373.7,277.975);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("#059245").s().p("AgYAmQgNgOAAgYQAAgXANgOQANgOAWAAIANACQAKADAEADIAAARQgGgGgHgCQgHgDgHAAQgPAAgIAKQgIALAAAQQAAASAIAKQAJAKAOAAQAIAAAGgCQAJgEAEgFIAAARQgGAEgIACQgGACgHAAQgWAAgNgOg");
	this.shape_1227.setTransform(362.95,277.975);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgWANgOQANgPAUAAQASAAALANQAMANAAASIAAAHIhFAAIAAAAQgBAUAJAJQAIAJAOAAQAGAAAKgCQAJgCAKgGIAAAQQgMAFgHABQgHACgJAAQgWAAgNgOgAgQgdQgIAIAAAJIA0AAQgBgKgHgHQgGgIgMAAQgLAAgHAIg");
	this.shape_1228.setTransform(568.8,256.375);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#059245").s().p("AAVAyIAAg8QAAgNgEgGQgFgGgKAAQgKAAgGAIQgGAHAAAQIAAA2IgRAAIAAhhIARAAIAAAPQADgIAIgFQAIgEAJgBQAPAAAHAKQAIALAAATIAAA8g");
	this.shape_1229.setTransform(557.975,256.25);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f("#059245").s().p("AASBFQgPAAgGgJQgIgKAAgRIAAhYIgaAAIAAgNIApAAIAABlQAAAKAEAHQAEAFAIAAIASAAIAAAOg");
	this.shape_1230.setTransform(536.775,254.425);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#059245").s().p("AgtAHIAAgNIBbAAIAAANg");
	this.shape_1231.setTransform(525.55,255.7);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f("#059245").s().p("AAUA/QgSAAgHgHQgHgHAAgSIAAg1IgbAAIAAgMIAbAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAALAEAEQAEAEAKAAIATAAIAAANg");
	this.shape_1232.setTransform(503.425,254.975);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f("#059245").s().p("AASBFQgPAAgGgJQgIgKAAgRIAAhYIgaAAIAAgNIApAAIAABlQAAAKAEAHQAEAFAIAAIASAAIAAAOg");
	this.shape_1233.setTransform(493.425,254.425);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f("#059245").s().p("AgdAoQgIgJAAgUIAAg8IARAAIAAA8QAAANAEAGQAFAGAKAAQAKAAAGgIQAGgIAAgPIAAg2IARAAIAABhIgRAAIAAgPQgFAKgGADQgIAEgJAAQgPAAgHgKg");
	this.shape_1234.setTransform(482.125,256.525);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f("#059245").s().p("AAeAyIAAg3QAAgWgCgEQgCgEgGAAQgHAAgDAEQgDAHAAATIAAA3IgNAAIAAg3QAAgUgDgGQgDgFgGABQgHAAgCAEQgCAFAAAVIAAA3IgPAAIAAhhIAPAAIAAAIQADgFAEgDQAEgDAGAAQAHABAEADQAEADACAGQADgGAEgDQAEgDAHgBQAMAAAFAKQAFAKAAAZIAAA3g");
	this.shape_1235.setTransform(471.275,256.25);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f("#059245").s().p("AgfArQgJgIAAgOQAAgRALgHQALgJAVAAIAVAAIAAgCQAAgMgGgFQgFgGgNAAQgJAAgHADQgKACgHAFIAAgRIASgFIAPgCQALAAAJAEQAIADAHAIQADAEABAHQACAHAAAMIAAA3IgRAAIAAgOQgFAIgIAFQgIAEgKAAQgPAAgJgJgAgQAFQgIAFAAAKQAAAJAGAEQAFAFAKAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgGAFg");
	this.shape_1236.setTransform(449.375,256.375);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("#059245").s().p("AgSAyIgRgEIAAgRQAIAEAJADQAHACAJAAQAKAAAGgEQAGgEAAgIQAAgLgVgFIgBAAIgGgBQgNgDgHgFQgHgIAAgKQAAgOAKgIQAKgIAQAAQAIAAAIACQAIABAGADIAAAQQgHgEgHgCQgGgCgIAAQgLAAgFAEQgFADAAAHQAAAHAEADQAFAEAOADIAGABQANACAGAGQAGAHAAALQAAAOgKAJQgKAIgSAAg");
	this.shape_1237.setTransform(427.925,256.375);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f("#059245").s().p("AgRAyIgSgEIAAgRQAHAEALADQAGACAJAAQAKAAAGgEQAFgEAAgIQABgLgVgFIAAAAIgHgBQgNgDgHgFQgGgHgBgLQAAgOAKgIQAKgIAQAAQAJAAAHACQAHABAHADIAAAQQgHgEgHgCQgGgCgJAAQgKAAgFAEQgFADAAAHQAAAHAEADQAEAEAPADIAGABQAMACAHAGQAGAHAAALQAAAPgKAIQgLAIgRAAg");
	this.shape_1238.setTransform(395.4,256.375);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f("#059245").s().p("AAWBEIAAg9QAAgNgGgFQgEgGgKAAQgLAAgFAIQgHAHAAAPIAAA3IgQAAIAAiHIAQAAIAAA1QAFgJAHgEQAHgFAJAAQAQAAAHAKQAIAKAAATIAAA9g");
	this.shape_1239.setTransform(373.75,254.475);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f("#059245").s().p("AgIBBIAAhzIgpAAIAAgOIBjAAIAAAOIgpAAIAABzg");
	this.shape_1240.setTransform(362.85,254.75);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f("#059245").s().p("AgFAzIAAgpIglAWIgGgLIAngVIgngUIAGgLIAlAWIAAgpIALAAIAAApIAlgWIAGALIgnAUIAnAVIgGALIglgWIAAApg");
	this.shape_1241.setTransform(373.725,234.175);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f("#059245").s().p("AgqBKIBEiTIARAAIhECTg");
	this.shape_1242.setTransform(362.625,233.975);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#059245").s().p("AAUA/QgSAAgGgHQgIgHAAgSIAAg1IgaAAIAAgMIAaAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAAKAEAFQAFAEAKAAIASAAIAAANg");
	this.shape_1243.setTransform(850.2,190.175);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f("#059245").s().p("AgnBFIAAiHIAQAAIAAANQAFgIAGgDQAHgEAHAAQARAAALAOQAKAOAAAYQAAAXgKAOQgKANgSAAQgIAAgHgDQgHgFgDgHIAAAygAgRgtQgGAKAAATQAAASAGAJQAGAKALAAQALAAAGgKQAGgJAAgSQAAgTgGgKQgGgJgLAAQgLAAgGAJg");
	this.shape_1244.setTransform(839.975,193.325);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f("#059245").s().p("AgiAyIAAhhIAQAAIAAATQAEgKAJgFQAIgHALAAIALACIAKAFIAAARQgFgFgGgBQgGgCgFAAQgOAAgJAJQgHAJgBASIAAAwg");
	this.shape_1245.setTransform(819.25,191.45);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#059245").s().p("AgYAmQgNgOAAgYQAAgXANgOQANgOAWAAIANACQAJADAFADIAAARQgHgGgGgCQgHgDgHAAQgPAAgIAKQgIAKAAARQAAASAIAKQAJAKAOAAQAHAAAIgCQAHgDAFgGIAAARQgHAEgGACQgGACgIAAQgWAAgNgOg");
	this.shape_1246.setTransform(807.275,191.575);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f("#059245").s().p("AgUBCQgKgCgKgEIAAgSQALAGAJADQAIADAKAAQAMAAAIgHQAHgFAAgLQAAgKgFgFQgGgGgMgCIgJgCQgRgEgJgIQgIgIAAgOQAAgSAMgKQALgLATAAIAQACIASAFIAAASQgLgHgGgBQgHgCgJgBQgLABgIAFQgHAGAAAKQAAAJAFAEQAFAFANADIAIACQATAFAIAHQAIAJAAAQQAAAUgMAJQgKAKgWAAQgLAAgHgCg");
	this.shape_1247.setTransform(796.35,189.95);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f("#059245").s().p("AgfArQgJgIAAgOQAAgRALgHQALgJAVAAIAVAAIAAgCQAAgMgGgGQgFgFgNAAQgJAAgHADQgJACgIAEIAAgQIASgFIAPgCQALAAAJAEQAIADAGAIQAEAEABAHQACAHAAAMIAAA3IgRAAIAAgOQgFAIgIAFQgIAEgKAAQgPAAgJgJgAgQAFQgIAFAAAKQAAAJAGAEQAFAFAKAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgGAFg");
	this.shape_1248.setTransform(785.325,191.575);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#059245").s().p("AgJAxIgjhhIARAAIAbBRIAdhRIARAAIgkBhg");
	this.shape_1249.setTransform(774.65,191.575);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f("#059245").s().p("AgfArQgJgIAAgOQAAgRAMgHQAKgJAVAAIAWAAIAAgCQAAgMgGgGQgGgFgNAAQgJAAgHADQgIACgIAEIAAgQIARgFIAPgCQALAAAKAEQAIADAGAIQAEAGAAAFQACAHAAAMIAAA3IgQAAIAAgOQgFAIgIAFQgJAEgKAAQgPAAgJgJgAgQAFQgHAFAAAKQAAAJAFAEQAFAFAKAAQAMAAAIgJQAIgKAAgQIAAgDIgVAAQgNAAgHAFg");
	this.shape_1250.setTransform(763.625,191.575);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("#059245").s().p("AgTBBQgIgCgJgEIAAgVQAIAHAJAEQAHADAKAAQALAAAGgGQAEgGAAgTIAAhIIggAAIAAgPIAyAAIAABXQAAAZgJALQgKAKgUAAQgKAAgHgCg");
	this.shape_1251.setTransform(752.25,190.075);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f("#059245").s().p("AAVAyIAAg8QAAgNgEgGQgFgGgKAAQgKAAgGAIQgHAIAAAPIAAA2IgQAAIAAhhIAQAAIAAAPQAEgJAIgEQAIgEAJgBQAPAAAHAKQAIALAAATIAAA8g");
	this.shape_1252.setTransform(731.375,191.45);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#059245").s().p("AAUA/QgTAAgGgHQgIgHAAgSIAAg1IgaAAIAAgMIAaAAIAAgcIAQAAIAAAcIAkAAIAAAMIgkAAIAAA1QAAALAEAEQAEAEAKAAIASAAIAAANg");
	this.shape_1253.setTransform(698.5,190.175);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#059245").s().p("AAVAyIAAg8QAAgNgEgGQgFgGgKAAQgKAAgGAIQgGAHAAAQIAAA2IgRAAIAAhhIARAAIAAAPQADgIAIgFQAIgEAJgBQAPAAAHAKQAIALAAATIAAA8g");
	this.shape_1254.setTransform(688.025,191.45);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#059245").s().p("AgeAmQgNgNAAgZQAAgXANgNQANgPAUAAQASAAALANQALANABASIAAAHIhFAAIAAAAQgBAUAIAJQAJAJAOAAQAHAAAJgCQAJgCAJgGIAAAQQgKAEgIACQgHACgJAAQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgKgGgHQgGgIgMAAQgLAAgHAIg");
	this.shape_1255.setTransform(677.175,191.575);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#059245").s().p("AAeAyIAAg3QAAgWgCgEQgCgEgGAAQgIAAgCAEQgDAHAAATIAAA3IgNAAIAAg3QAAgUgDgGQgDgFgGABQgHAAgCAEQgCAHgBATIAAA3IgOAAIAAhhIAOAAIAAAIQADgEAFgEQAEgDAGAAQAHABADADQAFADACAGQACgGAFgDQAFgDAGgBQANAAAEAKQAFAIAAAbIAAA3g");
	this.shape_1256.setTransform(666.35,191.45);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#059245").s().p("AAeAyIAAg3QAAgVgCgFQgCgEgHAAQgHAAgCAEQgDAFABAVIAAA3IgPAAIAAg3QAAgUgCgGQgCgFgHABQgGAAgDAEQgCAHAAATIAAA3IgPAAIAAhhIAPAAIAAAIQADgEAEgEQAEgDAFAAQAIABAEADQADACADAHQADgGAEgDQAFgDAHgBQALAAAFAKQAFAIAAAbIAAA3g");
	this.shape_1257.setTransform(655.5,191.45);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#059245").s().p("AgeAnQgLgNAAgaQAAgYALgNQAKgOAUAAQAUAAALAOQALAOAAAXQAAAZgLAOQgKANgVAAQgUAAgKgNgAgSgbQgGAKAAARQAAATAGAJQAGAKAMAAQAMAAAHgKQAGgJAAgTQAAgRgGgKQgHgKgMAAQgMAAgGAKg");
	this.shape_1258.setTransform(644.625,191.575);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#059245").s().p("AgZAmQgMgOAAgYQAAgXAMgOQANgOAWAAIAOACQAJADAFADIAAARQgIgHgFgBQgHgDgIAAQgOAAgIAKQgIAKAAARQAAATAIAJQAJAKANAAQAIAAAIgCQAGgDAGgGIAAARQgIAEgFACQgHACgIAAQgWAAgNgOg");
	this.shape_1259.setTransform(633.9,191.575);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgWANgOQANgPAUAAQATAAAKANQAMANAAASIAAAHIhFAAIAAAAQAAAUAHAJQAJAJAOAAQAHAAAKgCQAIgCAKgGIAAAQIgSAGQgIACgJAAQgWAAgNgOgAgRgdQgHAIgBAJIA0AAQAAgKgHgHQgGgIgMAAQgLAAgIAIg");
	this.shape_1260.setTransform(612.15,191.575);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#059245").s().p("AAVAyIAAg8QAAgNgEgGQgFgGgKAAQgKAAgGAIQgGAHAAAQIAAA2IgRAAIAAhhIARAAIAAAPQADgIAIgFQAIgEAJgBQAPAAAHAKQAIALAAATIAAA8g");
	this.shape_1261.setTransform(601.325,191.45);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f("#059245").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1262.setTransform(591.125,189.675);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#059245").s().p("AASBFQgPAAgHgKQgHgJAAgRIAAhYIgaAAIAAgNIApAAIAABlQAAAKAEAHQAEAFAIAAIASAAIAAAOg");
	this.shape_1263.setTransform(580.125,189.625);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#059245").s().p("AgtAHIAAgNIBcAAIAAANg");
	this.shape_1264.setTransform(568.9,190.875);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#059245").s().p("AgeAmQgNgNAAgZQAAgXANgNQANgPATAAQATAAALANQALANABASIAAAHIhFAAIAAAAQgBAUAIAJQAJAJAOAAQAHAAAJgCQAJgCAJgGIAAAQQgKAEgIACQgHACgJAAQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgKgGgHQgGgIgMAAQgLAAgHAIg");
	this.shape_1265.setTransform(557.975,191.575);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f("#059245").s().p("AASBFQgPAAgHgKQgIgJAAgRIAAhYIgZAAIAAgNIApAAIAABlQAAALAEAGQAEAFAHAAIATAAIAAAOg");
	this.shape_1266.setTransform(547.625,189.625);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f("#059245").s().p("AgOBFIgPgEIAAgQIAQAGIANACQAMAAAGgHQAGgHAAgQIAAgLQgEAIgHAEQgFAEgKAAQgRAAgKgOQgLgOAAgWQAAgXALgOQAKgOARAAQAJAAAGAEQAHAEAEAIIAAgNIAQAAIAABbQAAAWgKAMQgKALgUAAgAgQgtQgGAIgBATQABASAGAJQAGAKALAAQALAAAHgKQAFgJAAgSQAAgSgFgJQgHgKgLAAQgLAAgGAKg");
	this.shape_1267.setTransform(535.95,193.375);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f("#059245").s().p("AAVAyIAAg8QAAgNgEgGQgFgGgKAAQgKAAgGAIQgHAIAAAPIAAA2IgQAAIAAhhIAQAAIAAAPQAEgJAIgEQAIgEAJgBQAPAAAHAKQAIALAAATIAAA8g");
	this.shape_1268.setTransform(525.475,191.45);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f("#059245").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1269.setTransform(515.275,189.675);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f("#059245").s().p("AgSAyIgRgEIAAgRQAIAEAJADQAHACAJAAQAKAAAGgEQAGgEAAgIQAAgLgVgFIgBAAIgGgBQgNgDgHgFQgGgHAAgLQAAgOAJgIQAKgIAQAAQAIAAAIACQAIABAGADIAAAQQgHgEgHgCQgGgCgIAAQgLAAgFAEQgFADAAAHQAAAHAEADQAFAEAOADIAHABQAMACAGAGQAGAHAAALQAAAPgKAIQgKAIgSAAIgQgCg");
	this.shape_1270.setTransform(503.775,191.575);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f("#059245").s().p("AgfArQgJgIAAgOQAAgRALgHQALgJAVAAIAWAAIAAgCQgBgMgFgGQgGgFgNAAQgJAAgHADQgJACgHAEIAAgQIARgFIAPgCQALAAAKAEQAIADAGAIQADAEABAHQACAHAAAMIAAA3IgQAAIAAgOQgFAIgJAFQgIAEgKAAQgPAAgJgJgAgQAFQgHAFAAAKQAAAJAFAEQAFAFAKAAQAMAAAIgJQAHgJABgRIAAgDIgVAAQgOAAgGAFg");
	this.shape_1271.setTransform(481.875,191.575);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("#059245").s().p("AgSAyIgRgEIAAgRQAIAEAJADQAHACAJAAQAKAAAGgEQAGgEAAgIQAAgLgVgFIgBAAIgGgBQgOgDgGgFQgGgHAAgLQAAgOAJgIQAKgIAQAAQAIAAAIACIAOAEIAAAQQgHgEgHgCQgGgCgIAAQgLAAgFAEQgFADAAAHQAAAHAEADQAFAEAOADIAHABQAMACAGAGQAGAHAAALQAAAPgKAIQgKAIgSAAg");
	this.shape_1272.setTransform(460.425,191.575);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f("#059245").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1273.setTransform(450.25,189.675);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#059245").s().p("AgSAyIgRgEIAAgRQAIAEAJADQAHACAJAAQAKAAAGgEQAGgEAAgIQAAgLgVgFIgBAAIgGgBQgNgDgHgFQgHgIAAgKQAAgOAKgIQAKgIAQAAQAIAAAIACQAIABAGADIAAAQQgHgEgHgCQgGgCgIAAQgLAAgFAEQgFADAAAHQAAAHAEADQAFAEAOADIAGABQANACAGAGQAGAHAAALQAAAOgKAJQgKAIgSAAg");
	this.shape_1274.setTransform(427.925,191.575);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f("#059245").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1275.setTransform(417.725,189.675);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#059245").s().p("AAWBEIAAg9QgBgMgEgGQgFgGgKAAQgKAAgGAIQgGAHgBAPIAAA3IgQAAIAAiHIAQAAIAAA1QAEgJAIgEQAIgFAJAAQAPAAAIAKQAGAJABAUIAAA9g");
	this.shape_1276.setTransform(406.25,189.675);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f("#059245").s().p("AgIBBIAAhzIgpAAIAAgOIBjAAIAAAOIgpAAIAABzg");
	this.shape_1277.setTransform(395.35,189.95);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f("#059245").s().p("AgqBKIBEiTIARAAIhECTg");
	this.shape_1278.setTransform(373.45,190.775);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f("#059245").s().p("AgqBKIBEiTIARAAIhECTg");
	this.shape_1279.setTransform(362.625,190.775);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f("#FFFFFF").s().p("AglBSIAAgNIAHAAQAMAAAEgDQADgEAAgNIAAgSQAAgPAHgGQAEgFASgDQgSgCgFgEQgGgFAAgQIAAgYQAAgMgDgEQgEgEgMAAIgHAAIAAgMIAGAAQAWAAAHAGQAHAGAAAUIAAAXQAAAMAFAFQAEAGANAAIALAAIAAAMIgLAAQgMAAgFAHQgFAHAAAJIAAASQAAATgHAHQgIAGgVAAg");
	this.shape_1280.setTransform(364.875,713.425);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f("#FFFFFF").s().p("AgRA+IAIgiIAAgXIAbAAIAAAXIgSAigAgKgdIAAggIAbAAIAAAgg");
	this.shape_1281.setTransform(472.4,694.675);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f("#FF931D").s().p("AgfAyQgLgQABgiQgBggALgSQALgRAUAAQAUAAAMARQALARAAAhQAAAigLAQQgLASgVAAQgUAAgLgSgAgSAnQAGAOAMABQANAAAFgOQAHgNgBgbQAAgOgBgLgAgSgoQgFAOAAAaQAAAMABALIAohAQgHgMgLAAQgLAAgHANg");
	this.shape_1282.setTransform(462.15,691.8);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f("#A54FF4").s().p("AAVAzIAAg9QAAgNgEgGQgFgHgKAAQgKAAgGAIQgGAJAAAPIAAA3IgRAAIAAhiIARAAIAAAPQAEgJAHgEQAIgFAJABQAPAAAHAKQAIAJAAAUIAAA9g");
	this.shape_1283.setTransform(440.525,693.3);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f("#A54FF4").s().p("AgiAzIAAhiIAQAAIAAATQAFgKAIgGQAIgGALABIALABQAFABAFADIAAARIgLgGQgFgCgGAAQgPAAgIAKQgIAKAAAQIAAAyg");
	this.shape_1284.setTransform(430.875,693.3);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f("#A54FF4").s().p("AgdApQgHgKgBgVIAAg8IARAAIAAA8QAAAOAEAGQAFAGAKAAQAKAAAHgIQAFgIABgPIAAg3IAPAAIAABiIgPAAIAAgPQgFAIgIAFQgHAFgJAAQgPgBgHgJg");
	this.shape_1285.setTransform(418.85,693.55);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f("#A54FF4").s().p("AAUA/QgTAAgGgHQgIgIAAgRIAAg1IgaAAIAAgMIAaAAIAAgcIAQAAIAAAcIAkAAIAAAMIgkAAIAAA1QAAAKAEAFQAEAEAKAAIASAAIAAANg");
	this.shape_1286.setTransform(407.65,692.025);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f("#A54FF4").s().p("AgeAmQgNgNAAgZQAAgXANgOQAMgOAVAAQASAAALANQALANABASIAAAHIhFAAIAAAAQgBAUAIAJQAJAJAOAAQAJAAAHgDQAJgCAJgFIAAAQQgGADgMADIgQACQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1287.setTransform(397.175,693.425);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f("#A54FF4").s().p("AgiAzIAAhiIARAAIAAATQADgKAJgGQAIgGALABIALABIAKAEIAAARIgLgGQgFgCgGAAQgPAAgHAKQgIAJAAARIAAAyg");
	this.shape_1288.setTransform(387.525,693.3);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f("#FFFFFF").s().p("AgRA+IAJgiIAAgXIAaAAIAAAXIgRAigAgJgdIAAggIAaAAIAAAgg");
	this.shape_1289.setTransform(613.25,651.475);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f("#FFFFFF").s().p("AASBFQgOAAgHgKQgJgIAAgSIAAhYIgaAAIAAgNIAqAAIAABlQAAAMAEAEQADAGAJAAIATAAIAAAOg");
	this.shape_1290.setTransform(603.55,648.275);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f("#FFFFFF").s().p("AgdA4QgLgOAAgYQAAgYALgNQAKgOASAAQAJAAAFAEQAIAEADAHIAAgzIAQAAIAACIIgQAAIAAgMQgEAHgHAEQgGAEgIAAQgSAAgKgOgAgQgKQgGAKgBASQABATAGAJQAGAKAKAAQAMAAAGgKQAGgJAAgTQAAgSgGgJQgGgKgMAAQgKAAgGAJg");
	this.shape_1291.setTransform(591.9,648.425);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("#FFFFFF").s().p("AAWAzIAAg9QAAgNgFgGQgFgHgKAAQgKAAgGAIQgHAJABAPIAAA3IgRAAIAAhiIARAAIAAAPQAFgKAGgDQAIgFAJABQAPAAAIAKQAGAKAAATIAAA9g");
	this.shape_1292.setTransform(581.4,650.1);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f("#FFFFFF").s().p("AgeAmQgNgNAAgZQAAgXANgOQAMgOAUAAQATAAALANQALANABASIAAAHIhFAAIAAAAQgBAUAIAJQAJAJAOAAQAJAAAHgDQAJgCAJgFIAAAQQgGADgMADIgQACQgVAAgOgOgAgRgdQgHAHgBAKIA0AAQAAgKgHgIQgGgHgMAAQgLAAgIAIg");
	this.shape_1293.setTransform(570.575,650.225);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f("#FFFFFF").s().p("AguAHIAAgNIBdglIAAAQIhLAbIBLAcIAAAQg");
	this.shape_1294.setTransform(548.85,649.5);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f("#FFFFFF").s().p("AgtAHIAAgNIBbglIAAAQIhJAbIBJAcIAAAQg");
	this.shape_1295.setTransform(538,649.5);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f("#FFFFFF").s().p("AgeAmQgNgNAAgZQAAgXANgOQAMgOAVAAQATAAAKANQALANABASIAAAHIhFAAIAAAAQgBAUAIAJQAKAJANAAQAJAAAHgDQAJgCAJgFIAAAQIgRAGIgRACQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1296.setTransform(516.375,650.225);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f("#FFFFFF").s().p("AASBFQgOAAgIgKQgHgJAAgRIAAhYIgaAAIAAgNIApAAIAABlQAAALAEAFQADAGAJAAIASAAIAAAOg");
	this.shape_1297.setTransform(506.025,648.275);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#FFFFFF").s().p("AgMBCQgHgEgEgHIAAAMIgQAAIAAiIIAQAAIAAAzQADgHAHgEQAGgEAJAAQASAAAKAOQAKAOAAAXQAAAXgKAPQgLAOgRAAQgHAAgHgEgAgRgJQgGAJAAASQAAATAGAJQAGAKALAAQALAAAGgKQAGgJAAgTQAAgSgGgKQgGgJgLAAQgLAAgGAKg");
	this.shape_1298.setTransform(494.975,648.425);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f("#FFFFFF").s().p("AgfArQgJgJAAgOQAAgPALgJQAMgIAUAAIAWAAIAAgDQAAgLgGgGQgHgFgMAAQgHAAgJACQgIACgIAFIAAgQIARgFIAPgCQAMAAAJAEQAJAEAFAHQADAEABAGQACAHAAANIAAA3IgQAAIAAgPQgGAJgHAEQgIAFgLAAQgOAAgKgJgAgQAEQgHAGAAAJQAAAJAFAFQAGAFAJAAQAMAAAIgJQAIgKAAgQIAAgDIgVAAQgNAAgHAEg");
	this.shape_1299.setTransform(483.625,650.225);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f("#FFFFFF").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1300.setTransform(473.675,648.325);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f("#FFFFFF").s().p("AgiAzIAAhiIAQAAIAAATQAEgLAJgFQAIgGALABQAGAAAFABQAFABAFADIAAARQgFgEgGgCIgLgCQgPAAgIAKQgIAJAAARIAAAyg");
	this.shape_1301.setTransform(463.4,650.1);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#FFFFFF").s().p("AgfArQgJgJAAgOQAAgPALgJQAMgIAUAAIAVAAIAAgDQAAgLgGgGQgFgFgNAAQgGAAgKACQgIACgIAFIAAgQIARgFIAPgCQAMAAAJAEQAJAEAFAHQADAEABAGQACAHAAANIAAA3IgRAAIAAgPQgEAJgJAEQgHAFgLAAQgOAAgKgJgAgQAEQgHAFAAAKQAAAJAFAFQAGAFAJAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgNAAgHAEg");
	this.shape_1302.setTransform(451.125,650.225);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f("#FFFFFF").s().p("AgKBCIgmiDIASAAIAeB0IAfh0IASAAIgmCDg");
	this.shape_1303.setTransform(440.475,648.575);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#FFFFFF").s().p("AgmBEIAAgOIAJAAQAIAAADgEQADgCAIgTIgmhgIARAAIAcBMIAdhMIARAAIgvB5QgEAHgGAEQgGADgIAAg");
	this.shape_1304.setTransform(429.75,652.075);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f("#FFFFFF").s().p("AAfAzIAAg4QAAgUgDgGQgCgFgHAAQgGAAgDAGQgCAEgBAVIAAA4IgOAAIAAg4QAAgVgCgFQgCgFgHAAQgHAAgCAGQgDAGABATIAAA4IgPAAIAAhiIAPAAIAAAJQACgFAFgEQAEgCAGAAQAGAAAFACQAEADACAHQACgHAGgDQAEgCAHAAQAMAAAEAJQAFAJAAAZIAAA5g");
	this.shape_1305.setTransform(418.85,650.1);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f("#FFFFFF").s().p("AgtAHIAAgNIBbglIAAAQIhJAbIBJAcIAAAQg");
	this.shape_1306.setTransform(397.125,649.5);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f("#FFFFFF").s().p("AguAHIAAgNIBdglIAAAQIhLAbIBLAcIAAAQg");
	this.shape_1307.setTransform(386.3,649.5);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f("#C69C6D").s().p("AgNAxIAAggIAbAAIAAAggAgNgRIAAgfIAbAAIAAAfg");
	this.shape_1308.setTransform(927.875,628.625);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f("#C69C6D").s().p("AgeAmQgNgOAAgYQAAgWANgPQAMgOAVAAQATAAAKANQALAMABATIAAAHIhFAAIAAAAQgBAUAJAJQAIAJAOAAQAJAAAHgDQAJgCAJgFIAAAQIgRAGIgRACQgWAAgNgOgAgQgdQgIAIAAAJIA0AAQgBgKgHgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1309.setTransform(917.325,628.625);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f("#C69C6D").s().p("AgdApQgIgKAAgVIAAg8IAQAAIAAA8QAAANAFAHQAFAGAKAAQAKAAAGgIQAGgIAAgPIAAg3IARAAIAABiIgRAAIAAgPQgEAIgHAFQgIAFgJAAQgPgBgHgJg");
	this.shape_1310.setTransform(906.525,628.75);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f("#C69C6D").s().p("AASBFQgOAAgHgKQgJgIAAgSIAAhYIgaAAIAAgNIAqAAIAABlQAAALADAFQAFAGAIAAIATAAIAAAOg");
	this.shape_1311.setTransform(896.15,626.675);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f("#C69C6D").s().p("AgeArQgJgJAAgOQAAgQALgIQAKgIAVAAIAWAAIAAgDQAAgLgHgGQgGgFgMAAQgHAAgJACQgIACgJAFIAAgQIARgFIAQgCQANAAAHAEQAKADAEAIQAEAEABAGQACAFAAAPIAAA3IgQAAIAAgPQgGAJgIAEQgHAFgLAAQgOAAgJgJgAgRAEQgGAGgBAJQAAAJAGAFQAGAFAJAAQALAAAIgJQAJgJAAgRIAAgDIgVAAQgNAAgIAEg");
	this.shape_1312.setTransform(884.6,628.625);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f("#C69C6D").s().p("AgJAxIgjhhIARAAIAbBRIAchRIASAAIgkBhg");
	this.shape_1313.setTransform(873.95,628.625);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f("#C69C6D").s().p("AgeAmQgNgNAAgZQAAgXANgOQAMgOAVAAQASAAALANQALANABASIAAAHIhFAAIAAAAQgBAUAIAJQAJAJAOAAQAJAAAHgDQAJgCAJgFIAAAQQgGADgMADIgQACQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1314.setTransform(852.325,628.625);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f("#C69C6D").s().p("AAWBFIAAg+QgBgMgFgGQgEgHgKAAQgLAAgFAIQgHAJABAOIAAA4IgRAAIAAiIIARAAIAAA1QAEgKAHgDQAHgFAJABQAQAAAHAKQAIAJgBATIAAA+g");
	this.shape_1315.setTransform(841.5,626.7);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("#C69C6D").s().p("AATA/QgRAAgHgHQgIgIAAgRIAAg1IgaAAIAAgMIAaAAIAAgcIAQAAIAAAcIAkAAIAAAMIgkAAIAAA1QAAALAEAEQAEAEAKAAIASAAIAAANg");
	this.shape_1316.setTransform(830.3,627.225);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f("#C69C6D").s().p("AgSAyIgRgFIAAgQIARAHQAJACAHAAQAKAAAGgEQAGgFAAgIQAAgLgVgEIgBAAIgGgBQgOgDgGgGQgHgGAAgLQAAgOAKgIQAKgIAQAAQAIAAAIACIAOAEIAAAQQgHgEgHgCQgGgCgIAAQgLAAgFADQgFAEAAAHQAAAHAEADQADADAQADIAGACQANACAGAGQAGAHAAALQAAAOgLAIQgKAJgRAAIgQgCg");
	this.shape_1317.setTransform(808.975,628.625);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f("#C69C6D").s().p("AgdA4QgLgOAAgYQAAgYALgNQAKgOASAAQAJAAAFAEQAIAEADAHIAAgzIAQAAIAACIIgQAAIAAgMQgEAHgHAEQgGAEgIAAQgSAAgKgOgAgQgKQgHAKAAASQAAATAHAJQAFAKALAAQAMAAAGgKQAGgJAAgTQAAgSgGgJQgGgKgMAAQgKAAgGAJg");
	this.shape_1318.setTransform(797.8,626.825);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f("#C69C6D").s().p("AASBFQgOAAgIgKQgHgIgBgSIAAhYIgaAAIAAgNIAqAAIAABlQgBALAEAFQAEAGAJAAIATAAIAAAOg");
	this.shape_1319.setTransform(787.8,626.675);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("#C69C6D").s().p("AgeAmQgLgMAAgaQAAgZALgNQAKgNAUAAQAUAAALANQALAOAAAYQAAAZgLANQgKAOgVAAQgUAAgKgOgAgSgcQgGALAAARQAAASAGAKQAGAKAMAAQAMAAAHgKQAGgJAAgTQAAgSgGgKQgHgJgMAAQgLAAgHAJg");
	this.shape_1320.setTransform(776.425,628.625);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f("#C69C6D").s().p("AAVBFIAAg+QAAgMgEgGQgFgHgKAAQgKAAgGAIQgGAJAAAOIAAA4IgRAAIAAiIIARAAIAAA1QAFgKAGgDQAIgFAJABQAPAAAHAKQAIAJAAATIAAA+g");
	this.shape_1321.setTransform(765.625,626.7);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("#C69C6D").s().p("AgJAbIAAg1IATAAIAAA1g");
	this.shape_1322.setTransform(744.025,622.575);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f("#C69C6D").s().p("AgeAmQgNgNAAgZQAAgXANgOQAMgOAUAAQATAAALANQALANABASIAAAHIhFAAIAAAAQgBAUAIAJQAJAJAOAAQAJAAAHgDQAJgCAJgFIAAAQQgGADgMADIgQACQgVAAgOgOgAgQgdQgIAHgBAKIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1323.setTransform(733.125,628.625);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f("#C69C6D").s().p("AASBFQgOAAgIgKQgHgJgBgRIAAhYIgZAAIAAgNIApAAIAABlQAAAMAEAEQADAGAJAAIASAAIAAAOg");
	this.shape_1324.setTransform(722.75,626.675);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f("#C69C6D").s().p("AgMBCQgHgEgEgHIAAAMIgQAAIAAiIIAQAAIAAAzQADgHAIgEQAGgEAIAAQASAAAKAOQALAOAAAXQAAAXgLAPQgKAOgSAAQgIAAgGgEgAgRgJQgGAJAAASQAAATAGAJQAGAKALAAQALAAAHgKQAFgJABgTQgBgSgFgKQgHgJgLAAQgLAAgGAKg");
	this.shape_1325.setTransform(711.7,626.825);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("#C69C6D").s().p("AgfArQgJgJAAgOQAAgPALgJQAMgIAUAAIAVAAIAAgDQAAgLgGgGQgFgFgNAAQgGAAgKACQgIACgIAFIAAgQIARgFIAPgCQAMAAAJAEQAIADAGAIQADAEABAGQACAHAAANIAAA3IgRAAIAAgPQgEAJgJAEQgHAFgLAAQgOAAgKgJgAgQAEQgHAFAAAKQAAAJAFAFQAGAFAJAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgNAAgHAEg");
	this.shape_1326.setTransform(700.375,628.625);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f("#C69C6D").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1327.setTransform(690.425,626.725);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f("#C69C6D").s().p("AgiAzIAAhiIAQAAIAAATQAFgKAIgGQAIgGALABQAGAAAFABQAFABAFADIAAARIgLgGQgFgCgGAAQgPAAgIAKQgIAKAAAQIAAAyg");
	this.shape_1328.setTransform(680.125,628.5);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f("#C69C6D").s().p("AgfArQgJgJAAgOQAAgQALgIQAMgIAUAAIAVAAIAAgDQAAgLgGgGQgGgFgMAAQgHAAgJACQgIACgJAFIAAgQIASgFIAPgCQANAAAHAEQAJADAFAIQAEAEABAGQACAHAAANIAAA3IgRAAIAAgPQgFAKgIADQgHAFgLAAQgOAAgKgJgAgQAEQgIAGAAAJQAAAJAGAFQAGAFAJAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgNAAgHAEg");
	this.shape_1329.setTransform(667.875,628.625);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f("#C69C6D").s().p("AgKBCIgmiDIASAAIAeB0IAfh0IASAAIgmCDg");
	this.shape_1330.setTransform(657.225,626.975);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f("#C69C6D").s().p("AgmBEIAAgOIAKAAQAHAAAEgEQAEgEAGgRIgmhgIARAAIAcBMIAdhMIARAAIgkBdQgIAWgDAGQgDAHgHAEQgGADgIAAg");
	this.shape_1331.setTransform(646.475,630.475);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f("#C69C6D").s().p("AAeAzIAAg4QAAgVgCgFQgCgFgGAAQgIAAgCAGQgDAGAAATIAAA4IgNAAIAAg4QAAgVgDgFQgDgFgGAAQgHAAgCAGQgCAGgBATIAAA4IgOAAIAAhiIAOAAIAAAJQADgFAFgEQAFgCAEAAQAHAAAEACQAFAEABAGQADgHAFgDQAGgCAFAAQANAAAEAJQAFAJAAAZIAAA5g");
	this.shape_1332.setTransform(635.6,628.5);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f("#C69C6D").s().p("AgJAbIAAg1IATAAIAAA1g");
	this.shape_1333.setTransform(624.825,622.575);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f("#C69C6D").s().p("AgeAmQgNgNAAgZQAAgXANgOQAMgOAVAAQASAAALANQALANABASIAAAHIhFAAIAAAAQgBAUAIAJQAJAJAOAAQAJAAAHgDQAJgCAJgFIAAAQQgGADgMADIgQACQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1334.setTransform(603.075,628.625);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f("#C69C6D").s().p("AASBFQgOAAgIgKQgIgJAAgRIAAhYIgZAAIAAgNIApAAIAABlQAAAMAEAEQADAGAIAAIATAAIAAAOg");
	this.shape_1335.setTransform(592.725,626.675);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f("#C69C6D").s().p("AgNBCQgGgEgEgHIAAAMIgQAAIAAiIIAQAAIAAAzQADgHAHgEQAGgEAJAAQASAAAKAOQAKAOAAAXQAAAXgKAPQgLAOgRAAQgIAAgHgEgAgRgJQgGAJAAASQAAATAGAJQAGAKALAAQALAAAGgKQAGgJAAgTQAAgSgGgKQgGgJgLAAQgLAAgGAKg");
	this.shape_1336.setTransform(581.675,626.825);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f("#C69C6D").s().p("AgfArQgJgJAAgOQAAgPALgJQAMgIAUAAIAWAAIAAgDQgBgLgFgGQgHgFgMAAQgHAAgJACQgIACgIAFIAAgQIARgFIAPgCQAMAAAJAEQAJAEAFAHQADAEABAGQACAHAAANIAAA3IgQAAIAAgPQgGAKgIADQgHAFgLAAQgOAAgKgJgAgQAEQgHAFAAAKQAAAJAFAFQAGAFAJAAQAMAAAIgJQAHgJABgRIAAgDIgVAAQgNAAgHAEg");
	this.shape_1337.setTransform(570.325,628.625);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f("#C69C6D").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1338.setTransform(560.375,626.725);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f("#C69C6D").s().p("AgiAzIAAhiIARAAIAAATQADgKAJgGQAIgGALABQAGAAAFABQAFABAFADIAAARQgFgEgGgCIgLgCQgPAAgHAKQgIAIAAASIAAAyg");
	this.shape_1339.setTransform(550.075,628.5);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f("#C69C6D").s().p("AgfArQgJgJAAgOQAAgQALgIQAMgIAUAAIAVAAIAAgDQAAgLgGgGQgFgFgNAAQgGAAgKACQgIACgIAFIAAgQIARgFIAPgCQAMAAAJAEQAIADAGAIQADAEABAGQACAHAAANIAAA3IgRAAIAAgPQgFAKgIADQgHAFgLAAQgOAAgKgJgAgQAEQgIAGAAAJQAAAJAGAFQAGAFAJAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgNAAgHAEg");
	this.shape_1340.setTransform(537.825,628.625);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f("#C69C6D").s().p("AgJAxIgjhhIAQAAIAcBRIAdhRIAQAAIgjBhg");
	this.shape_1341.setTransform(527.175,628.625);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f("#C69C6D").s().p("AgeAmQgNgOAAgYQAAgWANgPQAMgOAVAAQATAAAKANQALAMABATIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAJAAAHgDQAJgCAJgFIAAAQIgRAGIgRACQgWAAgNgOgAgQgdQgIAIAAAJIA0AAQgBgKgHgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1342.setTransform(505.525,628.625);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f("#C69C6D").s().p("AAVBFIAAg+QAAgMgEgGQgFgHgKAAQgKAAgGAIQgHAJAAAOIAAA4IgQAAIAAiIIAQAAIAAA1QAFgKAHgDQAIgFAJABQAPAAAHAKQAIAJAAATIAAA+g");
	this.shape_1343.setTransform(494.725,626.7);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f("#C69C6D").s().p("AgHBCIAAh0IgqAAIAAgPIBjAAIAAAPIgpAAIAAB0g");
	this.shape_1344.setTransform(483.8,626.975);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f("#FFFFFF").s().p("AgtAHIAAgNIBcglIAAAQIhKAbIBKAcIAAAQg");
	this.shape_1345.setTransform(451.3,627.9);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f("#FFFFFF").s().p("AgtAHIAAgNIBbglIAAAQIhJAbIBJAcIAAAQg");
	this.shape_1346.setTransform(440.475,627.9);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f("#FFFFFF").s().p("AATA/QgRAAgHgHQgHgIAAgRIAAg1IgaAAIAAgMIAaAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAALAEAEQAEAEALAAIASAAIAAANg");
	this.shape_1347.setTransform(418.5,627.225);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f("#FFFFFF").s().p("AgdApQgIgKAAgVIAAg8IAQAAIAAA8QAAANAFAHQAFAGAKAAQAKAAAGgIQAGgIAAgPIAAg3IARAAIAABiIgRAAIAAgPQgFAJgGAEQgIAFgJAAQgPgBgHgJg");
	this.shape_1348.setTransform(408.025,628.75);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f("#FFFFFF").s().p("AgeAmQgLgMAAgaQAAgZALgNQAKgNAUAAQAVAAAKANQALANAAAZQAAAagLAMQgKAOgVAAQgUAAgKgOgAgSgcQgGALAAARQAAASAGAKQAHAKALAAQAMAAAHgKQAGgJAAgTQAAgSgGgKQgHgJgMAAQgLAAgHAJg");
	this.shape_1349.setTransform(397.125,628.625);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f("#FFFFFF").s().p("AgYAmQgNgNAAgZQAAgXANgOQANgOAWAAQAHAAAGACQAHACAHAEIAAARQgGgGgHgDQgHgCgHAAQgPAAgIAKQgIAJAAASQAAASAIAKQAIAKAPAAQAHAAAHgDQAGgCAHgGIAAARQgEADgKADIgNACQgWAAgNgOg");
	this.shape_1350.setTransform(386.4,628.625);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgWANgPQAMgOAVAAQATAAAKANQALAMABATIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAJAAAHgDQAJgCAJgFIAAAQIgRAGIgRACQgWAAgNgOgAgQgdQgIAIAAAJIA0AAQgBgKgHgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1351.setTransform(982.675,585.425);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f("#059245").s().p("AASBFQgOAAgIgKQgHgIgBgSIAAhYIgaAAIAAgNIApAAIAABlQAAALAFAFQADAGAJAAIASAAIAAAOg");
	this.shape_1352.setTransform(972.35,583.475);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f("#059245").s().p("AgeAmQgLgMAAgaQAAgZALgNQAKgNAUAAQAUAAALANQALAOAAAYQAAAZgLANQgKAOgVAAQgUAAgKgOgAgSgcQgGALAAARQAAASAGAKQAGAKAMAAQAMAAAHgKQAGgJAAgTQAAgSgGgKQgHgJgMAAQgLAAgHAJg");
	this.shape_1353.setTransform(960.975,585.425);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f("#059245").s().p("AgSAyIgRgFIAAgQIARAHQAJACAHAAQAKAAAGgEQAGgFAAgIQAAgLgVgEIgBAAIgGgBQgOgDgGgGQgHgGAAgLQAAgOAKgIQAJgIARAAQAIAAAIACIAOAEIAAAQQgHgEgHgCQgGgCgIAAQgLAAgFADQgFAEAAAHQAAAHAEADQAEADAPADIAGACQANACAGAGQAGAHAAALQAAAOgKAIQgLAJgRAAg");
	this.shape_1354.setTransform(950.175,585.425);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f("#059245").s().p("AAVAzIAAg9QAAgNgEgGQgFgHgKAAQgKAAgHAIQgFAJAAAPIAAA3IgQAAIAAhiIAQAAIAAAPQAEgKAHgDQAHgFAKABQAQAAAGAKQAHAJAAAUIAAA9g");
	this.shape_1355.setTransform(939.35,585.3);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f("#059245").s().p("AgeAmQgLgMAAgaQAAgZALgNQALgNATAAQAUAAALANQALAOAAAYQAAAagLAMQgKAOgVAAQgTAAgLgOgAgRgcQgHAKAAASQAAATAHAJQAFAKAMAAQAMAAAHgKQAGgJAAgTQAAgSgGgKQgHgJgMAAQgLAAgGAJg");
	this.shape_1356.setTransform(928.45,585.425);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f("#059245").s().p("AgYAmQgNgOAAgYQAAgXANgOQANgOAWAAQAHAAAGACQAGABAIAFIAAARQgFgFgIgEQgHgCgHAAQgOAAgJAKQgIAKAAARQAAASAIAKQAIAKAPAAQAHAAAIgDQAFgCAHgGIAAARQgEADgJADIgOACQgWAAgNgOg");
	this.shape_1357.setTransform(917.725,585.425);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgWANgPQAMgOAVAAQATAAAKANQAMANAAASIAAAHIhFAAIAAAAQgBAUAJAJQAIAJAOAAQAJAAAHgDQAJgCAKgFIAAAQIgSAGIgRACQgWAAgNgOgAgQgdQgHAHgBAKIA0AAQgBgKgHgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1358.setTransform(895.975,585.425);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f("#059245").s().p("AAVBFIAAg+QAAgMgEgGQgFgHgKAAQgKAAgGAIQgHAKAAANIAAA4IgQAAIAAiIIAQAAIAAA1QAFgKAHgDQAIgFAJABQAPAAAHAKQAIAJAAATIAAA+g");
	this.shape_1359.setTransform(885.175,583.5);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f("#059245").s().p("AAUA/QgSAAgHgHQgHgIAAgRIAAg1IgbAAIAAgMIAbAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAAKAEAFQAEAEAKAAIATAAIAAANg");
	this.shape_1360.setTransform(873.975,584.025);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f("#059245").s().p("AgeAmQgLgMAAgaQAAgYALgOQALgNATAAQAUAAAMANQAKAOAAAYQAAAagKAMQgMAOgUAAQgTAAgLgOgAgSgcQgGAKAAASQAAATAGAJQAHAKALAAQANAAAFgKQAHgJAAgTQAAgSgHgKQgGgJgMAAQgLAAgHAJg");
	this.shape_1361.setTransform(852.6,585.425);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f("#059245").s().p("AAUA/QgSAAgHgHQgHgIAAgRIAAg1IgaAAIAAgMIAaAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAAKAEAFQAEAEALAAIASAAIAAANg");
	this.shape_1362.setTransform(841.45,584.025);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f("#059245").s().p("AgSAyIgRgFIAAgQIARAHQAKACAGAAQAKAAAGgEQAGgFAAgIQAAgLgVgEIgBAAIgGgBQgOgDgGgGQgGgGAAgLQAAgOAJgIQAKgIAQAAQAIAAAIACIAOAEIAAAQIgOgGQgGgCgIAAQgLAAgFADQgFAEAAAHQAAAHAEADQAEADAPADIAHACQAMACAGAGQAGAHAAALQAAAOgKAIQgLAJgRAAg");
	this.shape_1363.setTransform(820.125,585.425);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f("#059245").s().p("AAUA/QgTAAgGgHQgIgIABgRIAAg1IgaAAIAAgMIAaAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAALAEAEQAEAEALAAIASAAIAAANg");
	this.shape_1364.setTransform(808.95,584.025);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f("#059245").s().p("AAVAzIAAg9QAAgNgEgGQgFgHgKAAQgKAAgGAIQgGAJAAAPIAAA3IgRAAIAAhiIARAAIAAAPQAEgJAHgEQAIgFAJABQAPAAAHAKQAIAJAAAUIAAA9g");
	this.shape_1365.setTransform(798.475,585.3);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f("#059245").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1366.setTransform(788.275,583.525);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f("#059245").s().p("AgiAzIAAhiIAQAAIAAATQAEgKAJgGQAIgGALABIALABQAEABAGADIAAARQgGgEgFgCQgFgCgGAAQgPAAgIAKQgHAJgBARIAAAyg");
	this.shape_1367.setTransform(778,585.3);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f("#059245").s().p("AgnBFIAAiHIAQAAIAAANQADgHAIgEQAFgEAJAAQASAAAKAOQALAOAAAYQAAAXgLANQgKAPgSAAQgIgBgGgEQgHgDgEgHIAAAxgAgRgsQgGAIAAAUQAAARAGAKQAGAJALAAQAMAAAFgJQAHgKAAgRQAAgTgHgKQgGgKgLABQgLAAgGAKg");
	this.shape_1368.setTransform(766.2,587.15);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f("#059245").s().p("AAVBFIAAg+QAAgMgEgGQgFgHgKAAQgKAAgHAIQgFAJgBAOIAAA4IgPAAIAAiIIAPAAIAAA1QAGgKAGgDQAIgFAJABQAPAAAHAKQAHAJAAATIAAA+g");
	this.shape_1369.setTransform(744.3,583.5);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f("#059245").s().p("AgYAmQgNgNAAgZQAAgYANgNQANgOAVAAQAJAAAGACQAFACAIAEIAAARQgGgGgHgDQgGgCgJAAQgOAAgIAKQgIAJAAASQAAASAIAKQAIAKAOAAQAIAAAIgDQAFgCAHgGIAAARQgFADgIADIgPACQgVAAgNgOg");
	this.shape_1370.setTransform(733.5,585.425);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f("#059245").s().p("AgnBEIAAgNIAgAAIAAhIIgaAAIAAgMIApAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1371.setTransform(723.25,583.525);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f("#059245").s().p("AAVBFIAAg+QAAgMgEgGQgFgHgKAAQgKAAgGAIQgGAJAAAOIAAA4IgRAAIAAiIIARAAIAAA1QAEgJAHgEQAIgFAJABQAPAAAHAKQAIAJAAATIAAA+g");
	this.shape_1372.setTransform(711.775,583.5);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f("#059245").s().p("AAQAxIgQg1IgPA1IgPAAIgXhhIAQAAIARBOIAOgyIANAAIAOAyIARhOIAQAAIgXBhg");
	this.shape_1373.setTransform(700.875,585.425);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f("#059245").s().p("AAUA/QgSAAgHgHQgIgIABgRIAAg1IgaAAIAAgMIAaAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAAKAEAFQAFAEAKAAIASAAIAAANg");
	this.shape_1374.setTransform(678.9,584.025);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f("#059245").s().p("AAVAzIAAg9QAAgNgEgGQgFgHgKAAQgKAAgGAIQgGAJAAAPIAAA3IgRAAIAAhiIARAAIAAAPQAEgJAHgEQAIgFAJABQAPAAAHAKQAIAJAAAUIAAA9g");
	this.shape_1375.setTransform(668.425,585.3);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAVAAQATAAAKANQALAMABATIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAJAAAHgDQAJgCAJgFIAAAQIgRAGIgRACQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgLgGgHQgGgHgMAAQgLAAgHAIg");
	this.shape_1376.setTransform(657.575,585.425);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f("#059245").s().p("AAeAzIAAg4QAAgUgCgGQgCgFgHAAQgGAAgDAGQgDAEABAVIAAA4IgPAAIAAg4QABgVgDgFQgCgFgHAAQgGAAgDAGQgCAGAAATIAAA4IgPAAIAAhiIAPAAIAAAJQACgFAFgEQAEgCAFAAQAIAAAEADQADACACAHQADgGAFgDQAFgDAHAAQALAAAFAJQAFAJAAAZIAAA5g");
	this.shape_1377.setTransform(646.75,585.3);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgWANgPQAMgOAVAAQASAAAMANQALANAAASIAAAHIhFAAIAAAAQAAAUAHAJQAJAJAOAAQAJAAAIgDQAIgCAKgFIAAAQQgIADgKADIgRACQgVAAgOgOgAgRgdQgGAHgBAKIAzAAQAAgKgGgIQgHgHgMAAQgLAAgIAIg");
	this.shape_1378.setTransform(635.9,585.425);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f("#059245").s().p("AAUA/QgSAAgHgHQgHgIAAgRIAAg1IgbAAIAAgMIAbAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAAKAEAFQAEAEAKAAIATAAIAAANg");
	this.shape_1379.setTransform(624.725,584.025);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f("#059245").s().p("AgfArQgJgJAAgOQAAgQALgIQAMgIAUAAIAVAAIAAgDQAAgLgGgGQgGgFgMAAQgHAAgJACQgIACgJAFIAAgQIASgFIAPgCQANAAAHAEQAJADAFAIQAEAEABAGQACAHAAANIAAA3IgRAAIAAgPQgFAJgIAEQgIAFgKAAQgOAAgKgJgAgRAEQgHAGAAAJQAAAJAGAFQAGAFAJAAQALAAAJgJQAHgJAAgRIAAgDIgUAAQgNAAgIAEg");
	this.shape_1380.setTransform(614.025,585.425);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f("#059245").s().p("AAUA/QgSAAgHgHQgHgIAAgRIAAg1IgbAAIAAgMIAbAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAALAEAEQAEAEALAAIASAAIAAANg");
	this.shape_1381.setTransform(603.05,584.025);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f("#059245").s().p("AgRAyIgSgFIAAgQQAKAFAIACQAIACAHAAQAKAAAGgEQAFgFABgIQAAgLgVgEIgBAAIgFgBQgQgDgFgGQgHgGABgLQAAgOAJgIQAKgIARAAQAIAAAHACIAOAEIAAAQIgOgGQgGgCgJAAQgJAAgGADQgFAEAAAHQAAAHAEADQAEADAPADIAGACQAMACAHAGQAGAHAAALQAAAOgKAIQgMAJgQAAIgPgCg");
	this.shape_1382.setTransform(592.55,585.425);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f("#059245").s().p("AAUA/QgSAAgHgHQgHgIAAgRIAAg1IgbAAIAAgMIAbAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAAKAEAFQAEAEAKAAIATAAIAAANg");
	this.shape_1383.setTransform(570.525,584.025);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f("#059245").s().p("AAVAzIAAg9QAAgNgEgGQgFgHgKAAQgKAAgGAIQgHAJAAAPIAAA3IgQAAIAAhiIAQAAIAAAPQAGgKAHgDQAHgFAJABQAPAAAHAKQAIAJAAAUIAAA9g");
	this.shape_1384.setTransform(560.05,585.3);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f("#059245").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1385.setTransform(549.85,583.525);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f("#059245").s().p("AgiAzIAAhiIAQAAIAAATQAFgKAIgGQAHgGAMABIALABQAFABAFADIAAARIgLgGQgFgCgGAAQgPAAgIAKQgIAKAAAQIAAAyg");
	this.shape_1386.setTransform(539.575,585.3);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f("#059245").s().p("AgnBFIAAiHIAQAAIAAANQAEgIAHgDQAGgEAIAAQASAAAKAOQAKANAAAZQAAAWgKAOQgKAPgSAAQgHgBgHgEQgGgCgFgIIAAAxgAgRgsQgGAIAAAUQAAARAGAKQAGAJALAAQAMAAAFgJQAGgKAAgRQAAgTgGgKQgFgKgMABQgLAAgGAKg");
	this.shape_1387.setTransform(527.775,587.15);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f("#059245").s().p("AgfArQgJgJAAgOQAAgPALgJQAMgIAUAAIAWAAIAAgDQAAgLgGgGQgHgFgMAAQgHAAgJACQgIACgIAFIAAgQIARgFIAPgCQAMAAAJAEQAJAEAFAHQADAEABAGQACAHAAANIAAA3IgQAAIAAgPQgGAJgHAEQgIAFgLAAQgOAAgKgJgAgQAEQgHAGAAAJQAAAJAFAFQAGAFAJAAQAMAAAIgJQAIgKAAgQIAAgDIgVAAQgNAAgHAEg");
	this.shape_1388.setTransform(505.625,585.425);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f("#059245").s().p("AgRAyIgSgFIAAgQQAKAFAIACQAIACAHAAQAKAAAFgEQAHgFAAgIQAAgLgVgEIgBAAIgGgBQgOgDgGgGQgGgGAAgLQAAgOAJgIQAKgIAQAAIAQACIAOAEIAAAQIgOgGQgGgCgJAAQgKAAgFADQgGAEABAHQAAAHADADQAFADAPADIAGACQANACAFAGQAHAHAAALQAAAOgKAIQgLAJgSAAIgOgCg");
	this.shape_1389.setTransform(484.2,585.425);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f("#059245").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1390.setTransform(474,583.525);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAVAAQATAAAKANQALAMABATIAAAHIhFAAIAAAAQgBAUAIAJQAKAJANAAQAJAAAHgDQAJgCAJgFIAAAQIgRAGIgRACQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1391.setTransform(451.675,585.425);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f("#059245").s().p("AgiAzIAAhiIAQAAIAAATQAEgKAJgGQAHgGAMABQAGAAAFABQAEABAGADIAAARIgLgGIgLgCQgPAAgIAKQgHAJgBARIAAAyg");
	this.shape_1392.setTransform(442.05,585.3);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgWANgPQAMgOAVAAQASAAALANQAMANAAASIAAAHIhFAAIAAAAQgBAUAJAJQAIAJAOAAQAJAAAIgDQAIgCAKgFIAAAQQgIADgKADIgRACQgVAAgOgOgAgQgdQgIAHAAAKIA0AAQgBgKgGgIQgHgHgMAAQgLAAgHAIg");
	this.shape_1393.setTransform(430,585.425);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f("#059245").s().p("AAYBCIAAhCIgvAAIAABCIgSAAIAAiDIASAAIAAAzIAvAAIAAgzIASAAIAACDg");
	this.shape_1394.setTransform(419.125,583.775);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f("#059245").s().p("AgqBKIBEiTIARAAIhFCTg");
	this.shape_1395.setTransform(386.4,584.6);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f("#FFFFFF").s().p("AgRA+IAIgiIAAgXIAbAAIAAAXIgRAigAgJgdIAAggIAaAAIAAAgg");
	this.shape_1396.setTransform(580.75,521.875);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f("#FF931D").s().p("AgYBBQgJgBgHgDIAAgSQAKAFAHABQAIADAIAAQAOAAAIgIQAIgHAAgPQAAgOgIgHQgIgIgOABQgHgBgHACIgNAFIAAhCIBBAAIAAAPIgxAAIAAAgIAIgCIAHgBQAUAAAMANQAMAKAAAVQAAAUgNANQgMAMgVAAg");
	this.shape_1397.setTransform(570.425,519.1);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f("#FFFFFF").s().p("AguAcIAAgPIBdAAIAAAPgAgugMIAAgPIBdAAIAAAPg");
	this.shape_1398.setTransform(548.85,519.8);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f("#FFFFFF").s().p("AgeAmQgNgNAAgZQAAgXANgOQAMgOAUAAQATAAALANQALANABASIAAAHIhFAAIAAAAQgBAUAIAJQAJAJAOAAQAJAAAHgDQAJgCAJgFIAAAQQgGADgMADIgQACQgVAAgOgOgAgQgdQgIAHgBAKIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1399.setTransform(527.225,520.625);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f("#FFFFFF").s().p("AASBFQgOAAgHgKQgIgJAAgRIAAhYIgaAAIAAgNIApAAIAABlQAAAMAEAEQAEAGAHAAIATAAIAAAOg");
	this.shape_1400.setTransform(516.85,518.675);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f("#FFFFFF").s().p("AgMBCQgHgEgEgHIAAAMIgQAAIAAiIIAQAAIAAAzQADgHAIgEQAFgEAKAAQARAAALAOQAJAOABAXQAAAYgLAOQgKAOgSAAQgIAAgGgEgAgRgJQgGAJAAASQAAATAGAJQAGAKALAAQAMAAAFgKQAHgJAAgTQAAgSgHgKQgGgJgLAAQgLAAgGAKg");
	this.shape_1401.setTransform(505.8,518.825);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f("#FFFFFF").s().p("AgfArQgJgJAAgOQAAgQALgIQAMgIAUAAIAVAAIAAgDQAAgLgGgGQgFgFgNAAQgGAAgKACQgIACgIAFIAAgQIARgFIAPgCQAMAAAJAEQAIADAGAIQADAEABAGQACAHAAANIAAA3IgRAAIAAgPQgFAKgIADQgHAFgLAAQgOAAgKgJgAgQAEQgIAGAAAJQAAAJAGAFQAGAFAJAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgNAAgHAEg");
	this.shape_1402.setTransform(494.475,520.625);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f("#FFFFFF").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1403.setTransform(484.525,518.725);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f("#FFFFFF").s().p("AgiAzIAAhiIAQAAIAAATQAFgKAIgGQAHgGAMABQAGAAAFABQAFABAFADIAAARIgLgGQgFgCgGAAQgPAAgIAKQgIAKAAAQIAAAyg");
	this.shape_1404.setTransform(474.225,520.5);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f("#FFFFFF").s().p("AgfArQgJgJAAgOQAAgQALgIQAMgIAUAAIAVAAIAAgDQAAgLgGgGQgGgFgMAAQgHAAgJACQgIACgJAFIAAgQIASgFIAPgCQANAAAHAEQAJADAFAIQAEAEABAGQACAHAAANIAAA3IgRAAIAAgPQgFAKgIADQgHAFgLAAQgOAAgKgJgAgQAEQgIAGAAAJQAAAJAGAFQAGAFAJAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgNAAgHAEg");
	this.shape_1405.setTransform(461.975,520.625);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f("#FFFFFF").s().p("AgKBCIgmiDIASAAIAeB0IAfh0IASAAIgmCDg");
	this.shape_1406.setTransform(451.325,518.975);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f("#FFFFFF").s().p("AgmBEIAAgOIAKAAQAHAAAEgEQAEgEAGgRIgmhgIARAAIAcBMIAdhMIARAAIgkBdQgIAWgDAGQgDAHgHAEQgGADgIAAg");
	this.shape_1407.setTransform(440.575,522.475);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f("#FFFFFF").s().p("AAeAzIAAg4QAAgVgCgFQgCgFgGAAQgHAAgDAGQgDAGAAATIAAA4IgNAAIAAg4QAAgVgDgFQgDgFgGAAQgGAAgDAGQgCAGAAATIAAA4IgPAAIAAhiIAPAAIAAAJQACgFAFgEQAFgCAFAAQAGAAAFACQAEAEACAGQADgHAEgDQAGgCAGAAQAMAAAEAJQAFAJAAAZIAAA5g");
	this.shape_1408.setTransform(429.675,520.5);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f("#0071BC").s().p("AAUA/QgTAAgGgHQgIgIAAgRIAAg1IgaAAIAAgMIAaAAIAAgcIAQAAIAAAcIAkAAIAAAMIgkAAIAAA1QAAAKAEAFQAEAEAKAAIASAAIAAANg");
	this.shape_1409.setTransform(407.65,519.225);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f("#0071BC").s().p("AAVAzIAAg9QAAgNgEgGQgFgHgKAAQgKAAgGAIQgGAJAAAPIAAA3IgRAAIAAhiIARAAIAAAPQAEgJAHgEQAIgFAJABQAPAAAHAKQAIAJAAAUIAAA9g");
	this.shape_1410.setTransform(397.175,520.5);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f("#0071BC").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1411.setTransform(386.975,518.725);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgWANgPQANgOATAAQAUAAALANQALANAAASIAAAHIhFAAIAAAAQAAAUAHAJQAJAJAOAAQAJAAAIgDQAIgCAKgFIAAAQQgIADgKADIgRACQgVAAgOgOgAgRgdQgHAHgBAKIA0AAQAAgKgGgIQgHgHgMAAQgLAAgIAIg");
	this.shape_1412.setTransform(1135.4,477.425);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f("#059245").s().p("AgdApQgIgKAAgVIAAg8IARAAIAAA8QAAAOAEAGQAFAGAKAAQAKAAAGgIQAGgIAAgPIAAg3IARAAIAABiIgRAAIAAgPQgEAIgHAFQgIAFgJAAQgPgBgHgJg");
	this.shape_1413.setTransform(1124.575,477.55);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f("#059245").s().p("AASBFQgOAAgIgKQgIgJAAgRIAAhYIgZAAIAAgNIApAAIAABlQAAAMAEAEQADAGAIAAIATAAIAAAOg");
	this.shape_1414.setTransform(1114.225,475.475);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f("#059245").s().p("AgfArQgJgJAAgOQAAgQALgIQAMgIAUAAIAVAAIAAgDQAAgLgGgGQgGgFgMAAQgGAAgKACQgIACgJAFIAAgQIASgFIAPgCQANAAAHAEQAJADAFAIQAEAEABAGQACAHAAANIAAA3IgRAAIAAgPQgFAKgIADQgHAFgLAAQgOAAgKgJgAgQAEQgIAGAAAJQAAAJAGAFQAGAFAJAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgNAAgHAEg");
	this.shape_1415.setTransform(1102.675,477.425);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f("#059245").s().p("AgJAxIgjhhIARAAIAbBRIAchRIARAAIgjBhg");
	this.shape_1416.setTransform(1092,477.425);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f("#059245").s().p("AgfArQgJgJAAgOQAAgQALgIQAMgIAUAAIAVAAIAAgDQAAgLgGgGQgGgFgMAAQgHAAgJACQgIACgJAFIAAgQIASgFIAPgCQANAAAHAEQAJADAFAIQAEAEABAGQACAHAAANIAAA3IgRAAIAAgPQgFAJgIAEQgIAFgKAAQgOAAgKgJgAgRAEQgHAGAAAJQAAAJAGAFQAGAFAJAAQALAAAJgJQAHgJAAgRIAAgDIgUAAQgNAAgIAEg");
	this.shape_1417.setTransform(1070.175,477.425);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f("#059245").s().p("AAUA/QgTAAgGgHQgHgHAAgSIAAg1IgaAAIAAgMIAaAAIAAgcIAPAAIAAAcIAkAAIAAAMIgkAAIAAA1QAAAKAEAFQAFAEAJAAIASAAIAAANg");
	this.shape_1418.setTransform(1048.35,476.025);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f("#059245").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1419.setTransform(1038.525,475.525);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgWANgPQAMgOAUAAQAUAAAKANQAMANAAASIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAJAAAHgDQAJgCAJgFIAAAQIgSAGIgQACQgWAAgNgOgAgQgdQgIAHgBAKIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1420.setTransform(1016.2,477.425);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f("#059245").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1421.setTransform(995.175,475.525);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f("#059245").s().p("AgOBEIgPgDIAAgQQAJAEAHACQAGACAHAAQAMAAAGgHQAGgIAAgPIAAgMQgDAIgIAFQgHAEgHAAQgTAAgJgOQgLgOAAgWQAAgXALgOQAKgOASAAQAIAAAGAEQAIAEADAIIAAgNIAQAAIAABbQAAAWgKALQgKAMgUAAIgOgCgAgQguQgGAKgBASQABASAGAJQAGAJALAAQAMAAAFgJQAGgJAAgSQAAgSgGgKQgGgJgLAAQgLAAgGAJg");
	this.shape_1422.setTransform(983.35,479.225);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f("#059245").s().p("AgdA4QgKgOAAgYQAAgXAKgOQAKgOASAAQAJAAAGAEQAHAEADAHIAAgzIAQAAIAACIIgQAAIAAgMQgFAIgGADQgHAEgHAAQgRAAgLgOgAgQgKQgGAKAAASQAAATAGAJQAGAKAKAAQAMAAAGgKQAGgJAAgTQAAgSgGgJQgHgKgLAAQgKAAgGAJg");
	this.shape_1423.setTransform(961.675,475.625);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f("#059245").s().p("AAWAzIAAg9QAAgMgGgHQgEgHgKAAQgLAAgFAIQgHAJAAAPIAAA3IgQAAIAAhiIAQAAIAAAPQAFgKAHgDQAIgFAIABQAQAAAHAKQAIAJAAAUIAAA9g");
	this.shape_1424.setTransform(951.2,477.3);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f("#059245").s().p("AgfArQgJgJAAgOQAAgQALgIQAMgIAUAAIAVAAIAAgDQAAgLgGgGQgGgFgMAAQgHAAgJACQgIACgJAFIAAgQIASgFIAPgCQANAAAHAEQAJADAFAIQAEAEABAGQACAHAAANIAAA3IgRAAIAAgPQgFAKgIADQgHAFgLAAQgOAAgKgJgAgQAEQgIAGAAAJQAAAJAGAFQAGAFAJAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgNAAgHAEg");
	this.shape_1425.setTransform(940.125,477.425);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f("#059245").s().p("AgJAbIAAg1IATAAIAAA1g");
	this.shape_1426.setTransform(918.75,471.375);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAVAAQATAAAKANQALAMABATIAAAHIhFAAIAAAAQgBAUAIAJQAKAJANAAQAJAAAHgDQAJgCAJgFIAAAQIgRAGIgRACQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1427.setTransform(907.825,477.425);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f("#059245").s().p("AASBFQgOAAgHgKQgIgIAAgSIAAhYIgaAAIAAgNIApAAIAABlQAAALAEAFQADAGAJAAIASAAIAAAOg");
	this.shape_1428.setTransform(897.475,475.475);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f("#059245").s().p("AgMBCQgGgDgFgIIAAAMIgQAAIAAiIIAQAAIAAAzQADgHAHgEQAHgEAIAAQASAAAKAOQAKANAAAYQAAAXgKAPQgLAOgRAAQgHAAgHgEgAgRgJQgGAJAAASQAAATAGAJQAGAKALAAQALAAAGgKQAGgJAAgTQAAgSgGgKQgGgJgLAAQgLAAgGAKg");
	this.shape_1429.setTransform(886.425,475.625);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f("#059245").s().p("AgfArQgJgJAAgOQAAgQAMgIQALgIAUAAIAWAAIAAgDQAAgLgGgGQgHgFgMAAQgHAAgJACQgHACgJAFIAAgQIARgFIAPgCQAMAAAJAEQAJAEAFAHQAEAGAAAEQACAHAAANIAAA3IgQAAIAAgPQgGAJgHAEQgIAFgLAAQgOAAgKgJgAgQAEQgHAGAAAJQAAAJAFAFQAGAFAJAAQAMAAAIgJQAIgKAAgQIAAgDIgVAAQgNAAgHAEg");
	this.shape_1430.setTransform(875.075,477.425);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f("#059245").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1431.setTransform(865.125,475.525);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f("#059245").s().p("AgiAzIAAhiIAQAAIAAATQAEgKAJgGQAHgGAMABQAGAAAFABQAFABAFADIAAARIgKgGIgNgCQgOAAgHAKQgJAJAAARIAAAyg");
	this.shape_1432.setTransform(854.85,477.3);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f("#059245").s().p("AgfArQgJgJAAgOQAAgPALgJQAMgIAUAAIAWAAIAAgDQgBgLgFgGQgHgFgMAAQgHAAgJACQgIACgIAFIAAgQIARgFIAPgCQAMAAAJAEQAJAEAFAHQADAEABAGQACAHAAANIAAA3IgQAAIAAgPQgGAKgIADQgHAFgLAAQgOAAgKgJgAgQAEQgHAFAAAKQAAAJAFAFQAGAFAJAAQAMAAAIgJQAHgJABgRIAAgDIgVAAQgNAAgHAEg");
	this.shape_1433.setTransform(842.575,477.425);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f("#059245").s().p("AgKBCIgmiDIASAAIAeB0IAfh0IASAAIgmCDg");
	this.shape_1434.setTransform(831.925,475.775);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f("#059245").s().p("AgmBEIAAgOIAKAAQAHAAADgEQAFgDAGgSIgmhgIARAAIAcBMIAdhMIARAAIgvB5QgDAHgHAEQgGADgIAAg");
	this.shape_1435.setTransform(821.2,479.275);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f("#059245").s().p("AAeAzIAAg4QAAgUgCgGQgCgFgHAAQgGAAgDAGQgDAEABAVIAAA4IgPAAIAAg4QABgVgDgFQgCgFgHAAQgGAAgDAGQgCAGAAATIAAA4IgPAAIAAhiIAPAAIAAAJQACgFAFgEQAFgCAFAAQAGAAAFADQADACADAHQADgHAEgCQAFgDAHAAQAMAAAEAJQAFAJAAAZIAAA5g");
	this.shape_1436.setTransform(810.3,477.3);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f("#059245").s().p("AgJAbIAAg1IATAAIAAA1g");
	this.shape_1437.setTransform(799.525,471.375);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f("#059245").s().p("AgdA4QgLgOABgYQgBgYALgNQAKgOASAAQAIAAAHAEQAGAEAEAHIAAgzIARAAIAACIIgRAAIAAgMQgEAHgGAEQgIAEgHAAQgSAAgKgOgAgRgKQgFAKgBASQABATAFAJQAHAKAKAAQAMAAAGgKQAGgJAAgTQAAgSgGgJQgGgKgMAAQgKAAgHAJg");
	this.shape_1438.setTransform(777.45,475.625);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgWANgPQAMgOAVAAQATAAAKANQALANABASIAAAHIhFAAIAAAAQAAAUAHAJQAJAJAOAAQAJAAAIgDQAIgCAKgFIAAAQIgSAGIgRACQgWAAgNgOgAgRgdQgGAHgBAKIAzAAQAAgKgHgIQgGgHgMAAQgLAAgIAIg");
	this.shape_1439.setTransform(766.95,477.425);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f("#059245").s().p("AASBFQgOAAgHgKQgJgIAAgSIAAhYIgaAAIAAgNIAqAAIAABlQAAALADAFQAFAGAIAAIATAAIAAAOg");
	this.shape_1440.setTransform(756.6,475.475);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f("#059245").s().p("AASBFQgOAAgIgKQgHgJgBgRIAAhYIgZAAIAAgNIApAAIAABlQAAAMAEAEQADAGAJAAIASAAIAAAOg");
	this.shape_1441.setTransform(745.75,475.475);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f("#059245").s().p("AgfArQgJgJAAgOQAAgQALgIQAMgIAUAAIAVAAIAAgDQAAgLgGgGQgGgFgMAAQgHAAgJACQgIACgJAFIAAgQIASgFIAPgCQANAAAHAEQAJADAFAIQAEAEABAGQACAHAAANIAAA3IgRAAIAAgPQgFAKgIADQgHAFgLAAQgOAAgKgJgAgQAEQgIAGAAAJQAAAJAGAFQAGAFAJAAQALAAAJgJQAHgJAAgRIAAgDIgUAAQgNAAgHAEg");
	this.shape_1442.setTransform(734.225,477.425);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f("#059245").s().p("AgYAmQgNgOAAgYQAAgXANgOQANgOAVAAQAJAAAFACQAGACAIAEIAAARQgEgFgJgEQgHgCgIAAQgOAAgHAKQgJAKAAARQAAASAJAKQAHAKAOAAQAIAAAIgDQAHgCAFgGIAAARQgEADgKADIgOACQgVAAgNgOg");
	this.shape_1443.setTransform(723.65,477.425);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAVAAQATAAAKANQALAMABATIAAAHIhFAAIAAAAQgBAUAIAJQAKAJANAAQAJAAAHgDQAJgCAJgFIAAAQIgRAGIgRACQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1444.setTransform(701.925,477.425);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f("#059245").s().p("AASBFQgOAAgHgKQgIgIAAgSIAAhYIgaAAIAAgNIApAAIAABlQAAALAEAFQADAGAJAAIASAAIAAAOg");
	this.shape_1445.setTransform(691.575,475.475);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f("#059245").s().p("AgMBCQgHgEgEgHIAAAMIgQAAIAAiIIAQAAIAAAzQADgHAHgEQAHgEAIAAQASAAAKAOQAKANAAAYQAAAXgKAPQgLAOgRAAQgHAAgHgEgAgRgJQgGAJAAASQAAATAGAJQAGAKALAAQALAAAGgKQAGgJAAgTQAAgSgGgKQgGgJgLAAQgLAAgGAKg");
	this.shape_1446.setTransform(680.525,475.625);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f("#059245").s().p("AgfArQgJgJAAgOQAAgQAMgIQALgIAUAAIAWAAIAAgDQAAgLgGgGQgHgFgMAAQgHAAgJACQgHACgJAFIAAgQIARgFIAPgCQAMAAAJAEQAJAEAFAHQAEAGAAAEQACAHAAANIAAA3IgQAAIAAgPQgGAJgHAEQgIAFgLAAQgOAAgKgJgAgQAEQgHAGAAAJQAAAJAFAFQAGAFAJAAQAMAAAIgJQAIgKAAgQIAAgDIgVAAQgNAAgHAEg");
	this.shape_1447.setTransform(669.175,477.425);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f("#059245").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1448.setTransform(659.225,475.525);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f("#059245").s().p("AgiAzIAAhiIAQAAIAAATQAEgKAJgGQAIgGALABIALABQAEABAGADIAAARIgKgGIgMgCQgPAAgIAKQgHAJgBARIAAAyg");
	this.shape_1449.setTransform(648.95,477.3);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f("#059245").s().p("AgfArQgJgJAAgOQAAgPALgJQAMgIAUAAIAWAAIAAgDQgBgLgFgGQgHgFgMAAQgHAAgJACQgIACgIAFIAAgQIARgFIAPgCQAMAAAJAEQAJAEAFAHQADAEABAGQACAHAAANIAAA3IgQAAIAAgPQgGAKgIADQgHAFgLAAQgOAAgKgJgAgQAEQgHAFAAAKQAAAJAFAFQAGAFAJAAQAMAAAIgJQAHgJABgRIAAgDIgVAAQgNAAgHAEg");
	this.shape_1450.setTransform(636.675,477.425);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f("#059245").s().p("AgfArQgJgJAAgOQAAgQALgIQAMgIAUAAIAVAAIAAgDQAAgLgGgGQgGgFgMAAQgGAAgKACQgIACgJAFIAAgQIASgFIAPgCQANAAAHAEQAJADAGAIQADAEABAGQACAHAAANIAAA3IgRAAIAAgPQgFAKgIADQgHAFgLAAQgOAAgKgJgAgQAEQgIAGAAAJQAAAJAGAFQAGAFAJAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgNAAgHAEg");
	this.shape_1451.setTransform(604.175,477.425);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.f("#059245").s().p("AgeAmQgNgNAAgZQAAgXANgOQAMgOAVAAQASAAALANQALANABASIAAAHIhFAAIAAAAQgBAUAIAJQAKAJANAAQAJAAAHgDQAJgCAJgFIAAAQQgGADgMADIgQACQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1452.setTransform(582.725,477.425);

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f("#059245").s().p("AgiAzIAAhiIARAAIAAATQADgKAJgGQAIgGALABQAGAAAFABQAFABAFADIAAARQgFgEgGgCIgLgCQgPAAgHAKQgIAJAAARIAAAyg");
	this.shape_1453.setTransform(573.075,477.3);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.f("#059245").s().p("AgfArQgJgJAAgOQAAgQALgIQAMgIAUAAIAVAAIAAgDQAAgLgGgGQgFgFgNAAQgGAAgKACQgIACgIAFIAAgQIARgFIAPgCQAMAAAJAEQAIADAGAIQADAEABAGQACAHAAANIAAA3IgRAAIAAgPQgFAKgIADQgHAFgLAAQgOAAgKgJgAgQAEQgIAGAAAJQAAAJAGAFQAGAFAJAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgNAAgHAEg");
	this.shape_1454.setTransform(560.825,477.425);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f("#059245").s().p("AASBFQgOAAgIgKQgIgIAAgSIAAhYIgaAAIAAgNIApAAIAABlQABALADAFQAFAGAIAAIATAAIAAAOg");
	this.shape_1455.setTransform(550.7,475.475);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f("#059245").s().p("AgeArQgKgJABgOQgBgQALgIQALgIAVAAIAVAAIAAgDQABgLgHgGQgGgFgMAAQgHAAgJACQgIACgIAFIAAgQIAQgFIAQgCQAMAAAJAEQAIADAFAIQAEAEACAGIABBLIgRAAIAAgPQgFAJgHAEQgJAFgKAAQgPAAgIgJgAgRAEQgGAGAAAJQgBAJAGAFQAGAFAJAAQALAAAIgJQAJgJgBgRIAAgDIgUAAQgNAAgIAEg");
	this.shape_1456.setTransform(539.15,477.425);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f("#059245").s().p("AgYAmQgNgNAAgZQAAgYANgNQANgOAVAAQAIAAAHACQAFACAIAEIAAARQgGgGgHgDQgGgCgJAAQgNAAgJAKQgIAJAAASQAAASAIAKQAIAKAOAAQAIAAAIgDQAFgCAHgGIAAARQgFADgIADIgPACQgVAAgNgOg");
	this.shape_1457.setTransform(528.6,477.425);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgWANgPQANgOATAAQAUAAALANQAKANABASIAAAHIhFAAIAAAAQgBAUAJAJQAIAJAOAAQAJAAAHgDQAJgCAJgFIAAAQQgGADgMADIgQACQgWAAgNgOgAgRgdQgHAHgBAKIA1AAQgCgKgGgIQgGgHgMAAQgLAAgIAIg");
	this.shape_1458.setTransform(517.7,477.425);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f("#059245").s().p("AgdA4QgKgOAAgYQAAgYAKgNQAKgOASAAQAJAAAGAEQAHAEADAHIAAgzIAQAAIAACIIgQAAIAAgMQgFAIgGADQgHAEgHAAQgRAAgLgOgAgQgKQgGAKAAASQAAATAGAJQAGAKAKAAQAMAAAGgKQAGgJAAgTQAAgSgGgJQgHgKgLAAQgKAAgGAJg");
	this.shape_1459.setTransform(506.525,475.625);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgWANgPQAMgOAVAAQATAAAKANQALAMABATIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAJAAAHgDQAJgCAJgFIAAAQIgRAGIgRACQgWAAgNgOgAgQgdQgIAIAAAJIA0AAQgBgKgHgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1460.setTransform(485.175,477.425);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f("#059245").s().p("AAQAxIgQg1IgPA1IgPAAIgXhhIAQAAIARBOIAOgyIANAAIAOAyIARhOIAQAAIgXBhg");
	this.shape_1461.setTransform(474.325,477.425);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAVAAQATAAAKANQALAMABATIAAAHIhFAAIAAAAQgBAUAIAJQAKAJANAAQAJAAAHgDQAJgCAJgFIAAAQIgRAGIgRACQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1462.setTransform(452.675,477.425);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f("#059245").s().p("AgiAzIAAhiIAQAAIAAATQAEgKAJgGQAHgGAMABQAGAAAFABQAEABAGADIAAARIgLgGIgLgCQgPAAgIAKQgHAJgBARIAAAyg");
	this.shape_1463.setTransform(443.05,477.3);

	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgWANgPQAMgOAVAAQASAAALANQAMANAAASIAAAHIhFAAIAAAAQgBAUAJAJQAIAJAOAAQAJAAAIgDQAIgCAKgFIAAAQQgIADgKADIgRACQgVAAgOgOgAgQgdQgIAHAAAKIA0AAQgBgKgGgIQgHgHgMAAQgLAAgHAIg");
	this.shape_1464.setTransform(431,477.425);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f("#059245").s().p("AAYBCIAAhCIgvAAIAABCIgSAAIAAiDIASAAIAAAzIAvAAIAAgzIASAAIAACDg");
	this.shape_1465.setTransform(420.125,475.775);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f("#059245").s().p("AgqBKIBEiTIARAAIhFCTg");
	this.shape_1466.setTransform(387.4,476.6);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f("#FFFFFF").s().p("AAgBSQgVAAgIgGQgHgHAAgTIAAgSQAAgKgFgGQgGgHgLAAIgLAAIAAgMIALAAQANAAAEgGQAFgGAAgLIAAgXQAAgUAHgGQAHgGAWAAIAFAAIAAAMIgFAAQgNAAgEAEQgDAEAAAMIAAAYQgBAQgFAFQgGAEgRACQARACAGAGQAFAGABAPIAAASQAAANADAEQAEADANAAIAFAAIAAANg");
	this.shape_1467.setTransform(494.55,432.625);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f("#FFFFFF").s().p("AgTBQQAMgVAFgTQAFgUAAgUQAAgTgFgUQgFgTgMgVIAOAAQAMAVAHATQAGAUAAATQAAAVgGATQgHAUgMAUg");
	this.shape_1468.setTransform(472.625,432.6);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f("#FFFFFF").s().p("AAGBQQgMgUgHgUQgGgUAAgUQAAgTAGgUQAHgUAMgUIAOAAQgLASgGAWQgFAUAAATQAAAUAFAUQAGAVALATg");
	this.shape_1469.setTransform(462.225,432.6);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f("#F9EB70").s().p("AAVAzIAAg9QAAgNgEgGQgFgHgKAAQgKAAgGAIQgGAJAAAPIAAA3IgRAAIAAhiIARAAIAAAPQAEgJAHgEQAIgFAJABQAPAAAHAKQAIAKAAATIAAA9g");
	this.shape_1470.setTransform(440.525,434.1);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f("#F9EB70").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1471.setTransform(430.325,432.325);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f("#F9EB70").s().p("AgfArQgJgJAAgOQAAgQALgIQAMgIAUAAIAVAAIAAgDQAAgLgGgGQgGgFgMAAQgGAAgKACQgIACgJAFIAAgQIASgFIAPgCQANAAAHAEQAJADAFAIQAEAEABAGQACAHAAANIAAA3IgRAAIAAgPQgFAKgIADQgHAFgLAAQgOAAgKgJgAgQAEQgIAGAAAJQAAAJAGAFQAGAFAJAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgNAAgHAEg");
	this.shape_1472.setTransform(418.625,434.225);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f("#F9EB70").s().p("AAeAzIAAg4QAAgUgCgGQgCgFgGAAQgIAAgCAGQgDAEAAAVIAAA4IgNAAIAAg4QgBgWgCgEQgCgFgHAAQgGAAgDAGQgCAGgBATIAAA4IgOAAIAAhiIAOAAIAAAJQADgFAFgEQAFgCAFAAQAHAAAEACQADADADAHQADgHAEgDQAFgCAGAAQANAAAEAJQAFAJAAAZIAAA5g");
	this.shape_1473.setTransform(408,434.1);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f("#0071BC").s().p("AAUA/QgSAAgHgHQgHgIAAgRIAAg1IgbAAIAAgMIAbAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAAKAEAFQAEAEAKAAIATAAIAAANg");
	this.shape_1474.setTransform(385.975,432.825);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f("#0071BC").s().p("AAWAzIAAg9QgBgNgEgGQgFgHgKAAQgKAAgGAIQgHAJAAAPIAAA3IgQAAIAAhiIAQAAIAAAPQAFgKAHgDQAIgFAJABQAPAAAIAKQAGAKABATIAAA9g");
	this.shape_1475.setTransform(375.5,434.1);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f("#0071BC").s().p("AgnBEIAAgNIAgAAIAAhIIgaAAIAAgMIApAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1476.setTransform(365.3,432.325);

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f("#05A99D").s().p("AgdA4QgKgPAAgXQAAgXAKgOQAKgOASAAQAJAAAGAEQAHAEADAHIAAgzIAQAAIAACIIgQAAIAAgMQgEAHgHAEQgHAEgHAAQgRAAgLgOgAgQgKQgGAKAAASQAAATAGAJQAGAKAKAAQAMAAAGgKQAGgJAAgTQAAgSgGgJQgGgKgMAAQgKAAgGAJg");
	this.shape_1477.setTransform(559.375,389.225);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f("#05A99D").s().p("AAUA/QgSAAgHgHQgHgIAAgRIAAg1IgbAAIAAgMIAbAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAAKAEAFQAEAEAKAAIATAAIAAANg");
	this.shape_1478.setTransform(548.525,389.625);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f("#05A99D").s().p("AgRAyIgSgFIAAgQQAKAFAIACQAIACAHAAQAKAAAFgEQAHgFAAgIQgBgLgUgEIgBAAIgGgBQgPgDgFgGQgHgGABgLQgBgOAKgIQAKgIARAAIAOACIAPAEIAAAQIgOgGQgHgCgHAAQgLAAgFADQgFAEAAAHQAAAHAEADQADADAQADIAHACQALACAHAGQAGAGAAAMQAAAOgLAIQgKAJgSAAIgOgCg");
	this.shape_1479.setTransform(538.05,391.025);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f("#0071BC").s().p("AgeAmQgNgNAAgZQAAgXANgOQAMgOAVAAQATAAAKANQALANABASIAAAHIhFAAIAAAAQgBAUAIAJQAKAJANAAQAJAAAHgDQAJgCAJgFIAAAQIgRAGIgRACQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1480.setTransform(516.375,391.025);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f("#0071BC").s().p("AgYAmQgNgNAAgZQAAgYANgNQANgOAVAAQAIAAAHACQAFACAIAEIAAARQgGgGgHgDQgGgCgJAAQgNAAgJAKQgIAJAAASQAAASAIAKQAIAKAOAAQAIAAAIgDQAFgCAHgGIAAARQgFADgIADIgPACQgVAAgNgOg");
	this.shape_1481.setTransform(505.6,391.025);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f("#0071BC").s().p("AgfArQgJgJAAgOQAAgQALgIQAMgIAUAAIAVAAIAAgDQAAgLgGgGQgFgFgNAAQgGAAgKACQgIACgIAFIAAgQIARgFIAPgCQAMAAAJAEQAIADAGAIQADAEABAGQACAHAAANIAAA3IgRAAIAAgPQgFAKgIADQgHAFgLAAQgOAAgKgJgAgQAEQgIAGAAAJQAAAJAGAFQAGAFAJAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgNAAgHAEg");
	this.shape_1482.setTransform(494.475,391.025);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f("#0071BC").s().p("AgnBFIAAiHIAQAAIAAANQADgHAIgEQAFgEAJAAQASAAAKAOQALAOAAAYQAAAXgLANQgKAPgSAAQgIAAgGgFQgHgDgEgHIAAAxgAgRgsQgGAIAAAUQAAARAGAKQAGAJALAAQAMAAAFgJQAHgKAAgRQAAgTgHgKQgGgKgLABQgLAAgGAKg");
	this.shape_1483.setTransform(484.1,392.75);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f("#0071BC").s().p("AgSAyIgRgFIAAgQIARAHQAJACAHAAQAKAAAGgEQAGgFAAgIQAAgLgVgEIgBAAIgGgBQgOgDgGgGQgHgGAAgLQAAgOAKgIQAJgIARAAQAIAAAIACIAOAEIAAAQQgHgEgHgCQgGgCgIAAQgLAAgFADQgFAEAAAHQAAAHAEADQAEADAPADIAGACQANACAGAGQAGAHAAALQAAAOgKAIQgLAJgRAAIgQgCg");
	this.shape_1484.setTransform(473.025,391.025);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f("#0071BC").s().p("AgeAmQgNgOAAgYQAAgWANgPQAMgOAVAAQATAAAKANQALAMABATIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAJAAAHgDQAJgCAJgFIAAAQIgRAGIgRACQgWAAgNgOgAgQgdQgIAIAAAJIA0AAQgBgKgHgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1485.setTransform(462.175,391.025);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f("#0071BC").s().p("AAfAzIAAg4QAAgUgDgGQgCgFgHAAQgGAAgDAGQgCAEgBAVIAAA4IgOAAIAAg4QAAgWgCgEQgCgFgHAAQgGAAgDAGQgDAGABATIAAA4IgPAAIAAhiIAPAAIAAAJQACgFAFgEQAFgCAFAAQAGAAAFACQADADADAHQADgHAFgDQAEgCAHAAQALAAAGAJQAEAJAAAZIAAA5g");
	this.shape_1486.setTransform(451.35,390.9);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f("#0071BC").s().p("AgfArQgJgJAAgOQAAgPALgJQAMgIAUAAIAWAAIAAgDQAAgLgGgGQgHgFgMAAQgHAAgJACQgHACgJAFIAAgQIARgFIAPgCQAMAAAJAEQAJAEAFAHQAEAGAAAEQACAHAAANIAAA3IgQAAIAAgPQgGAJgHAEQgIAFgLAAQgOAAgKgJgAgQAEQgHAGAAAJQAAAJAFAFQAGAFAJAAQAMAAAIgJQAIgKAAgQIAAgDIgVAAQgNAAgHAEg");
	this.shape_1487.setTransform(440.275,391.025);

	this.shape_1488 = new cjs.Shape();
	this.shape_1488.graphics.f("#0071BC").s().p("AAVAzIAAg9QAAgMgEgHQgFgHgKAAQgKAAgGAIQgGAJgBAPIAAA3IgPAAIAAhiIAPAAIAAAPQAGgKAGgDQAIgFAJABQAPAAAHAKQAHAJABAUIAAA9g");
	this.shape_1488.setTransform(429.7,390.9);

	this.shape_1489 = new cjs.Shape();
	this.shape_1489.graphics.f("#A54FF4").s().p("AgOBEIgPgDIAAgQQAKAEAGACQAHACAGAAQAMAAAHgHQAFgIAAgPIAAgMQgDAHgHAGQgHAEgJAAQgQAAgLgOQgLgOAAgWQAAgXALgOQALgOAQAAQAJAAAGAEQAHADAEAJIAAgNIAQAAIAABbQAAAWgKALQgLAMgTAAIgOgCgAgQguQgGAKAAASQAAASAGAJQAHAJALAAQAKAAAHgJQAFgJAAgSQAAgSgFgKQgHgJgLAAQgLAAgGAJg");
	this.shape_1489.setTransform(407.65,392.825);

	this.shape_1490 = new cjs.Shape();
	this.shape_1490.graphics.f("#A54FF4").s().p("AAVAzIAAg9QAAgNgEgGQgFgHgKAAQgKAAgGAIQgGAJAAAPIAAA3IgRAAIAAhiIARAAIAAAPQAEgJAHgEQAIgFAJABQAPAAAHAKQAIAJAAAUIAAA9g");
	this.shape_1490.setTransform(397.175,390.9);

	this.shape_1491 = new cjs.Shape();
	this.shape_1491.graphics.f("#A54FF4").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1491.setTransform(386.975,389.125);

	this.shape_1492 = new cjs.Shape();
	this.shape_1492.graphics.f("#A54FF4").s().p("AgSAyIgRgFIAAgQQAKAFAHACQAJACAHAAQAJAAAGgEQAGgFABgIQgBgLgUgEIgBAAIgGgBQgPgDgFgGQgHgGABgLQgBgOAKgIQAKgIARAAIAOACIAPAEIAAAQIgOgGQgHgCgHAAQgKAAgGADQgGAEAAAHQAAAHAFADQAEADAPADIAHACQALACAHAGQAGAGAAAMQAAAOgLAIQgLAJgRAAIgPgCg");
	this.shape_1492.setTransform(375.5,391.025);

	this.shape_1493 = new cjs.Shape();
	this.shape_1493.graphics.f("#A54FF4").s().p("AgdApQgIgKAAgVIAAg8IARAAIAAA8QAAAOAEAGQAFAGAKAAQAKAAAGgIQAGgIAAgPIAAg3IARAAIAABiIgRAAIAAgPQgFAJgGAEQgIAFgJAAQgPgBgHgJg");
	this.shape_1493.setTransform(364.675,391.15);

	this.shape_1494 = new cjs.Shape();
	this.shape_1494.graphics.f("#C69C6D").s().p("AgtAcIBJgcIhJgbIAAgQIBbAlIAAANIhbAlg");
	this.shape_1494.setTransform(559.675,368.7);

	this.shape_1495 = new cjs.Shape();
	this.shape_1495.graphics.f("#C69C6D").s().p("AAeAzIAAg4QAAgVgCgFQgCgFgHAAQgGAAgDAGQgDAFAAAUIAAA4IgOAAIAAg4QAAgVgCgFQgCgFgHAAQgHAAgCAGQgDAGABATIAAA4IgPAAIAAhiIAPAAIAAAJQACgGAFgDQAEgCAGAAQAHAAAEACQADAEADAGQADgHAEgDQAFgCAHAAQAMAAAEAJQAFAJAAAZIAAA5g");
	this.shape_1495.setTransform(548.9,369.3);

	this.shape_1496 = new cjs.Shape();
	this.shape_1496.graphics.f("#C69C6D").s().p("AgfArQgJgJAAgOQAAgQALgIQAMgIAUAAIAVAAIAAgDQAAgLgGgGQgFgFgNAAQgGAAgKACQgIACgIAFIAAgQIARgFIAPgCQAMAAAJAEQAIADAGAIQADAEABAGQACAHAAANIAAA3IgRAAIAAgPQgFAKgIADQgHAFgLAAQgOAAgKgJgAgQAEQgIAGAAAJQAAAJAGAFQAGAFAJAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgNAAgHAEg");
	this.shape_1496.setTransform(537.825,369.425);

	this.shape_1497 = new cjs.Shape();
	this.shape_1497.graphics.f("#C69C6D").s().p("AgeAmQgNgNAAgZQAAgXANgOQAMgOAUAAQATAAALANQALANABASIAAAHIhFAAIAAAAQgBAUAIAJQAJAJAOAAQAJAAAHgDQAJgCAJgFIAAAQQgGADgMADIgQACQgVAAgOgOgAgQgdQgIAHgBAKIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1497.setTransform(527.225,369.425);

	this.shape_1498 = new cjs.Shape();
	this.shape_1498.graphics.f("#C69C6D").s().p("AgiAzIAAhiIAQAAIAAATQAFgKAIgGQAHgGAMABIALABQAFABAFADIAAARIgLgGQgFgCgGAAQgPAAgIAKQgIAKAAAQIAAAyg");
	this.shape_1498.setTransform(517.575,369.3);

	this.shape_1499 = new cjs.Shape();
	this.shape_1499.graphics.f("#C69C6D").s().p("AAUA/QgTAAgGgHQgHgIgBgRIAAg1IgaAAIAAgMIAaAAIAAgcIAQAAIAAAcIAlAAIAAAMIglAAIAAA1QAAAKAEAFQAEAEAKAAIATAAIAAANg");
	this.shape_1499.setTransform(505.2,368.025);

	this.shape_1500 = new cjs.Shape();
	this.shape_1500.graphics.f("#C69C6D").s().p("AgRAyIgSgFIAAgQQAKAFAIACQAJACAGAAQAKAAAFgEQAHgFgBgIQABgLgVgEIAAAAIgHgBQgOgDgGgGQgGgGAAgLQgBgOAKgIQAKgIAQAAIAQACIAOAEIAAAQQgGgEgIgCQgGgCgJAAQgKAAgFADQgFAEAAAHQAAAHAEADQAEADAPADIAGACQANACAFAGQAHAGAAAMQAAAOgKAIQgMAJgQAAIgPgCg");
	this.shape_1500.setTransform(494.7,369.425);

	this.shape_1501 = new cjs.Shape();
	this.shape_1501.graphics.f("#C69C6D").s().p("AgeAmQgLgMAAgaQAAgZALgNQAKgNAUAAQAUAAALANQALAOAAAYQAAAZgLANQgKAOgVAAQgUAAgKgOgAgSgcQgGALAAARQAAASAGAKQAGAKAMAAQAMAAAHgKQAGgJAAgTQAAgSgGgKQgHgJgMAAQgLAAgHAJg");
	this.shape_1501.setTransform(483.825,369.425);

	this.shape_1502 = new cjs.Shape();
	this.shape_1502.graphics.f("#C69C6D").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1502.setTransform(473.675,367.525);

	this.shape_1503 = new cjs.Shape();
	this.shape_1503.graphics.f("#C69C6D").s().p("AguAHIAAgNIBcglIAAAQIhKAbIBKAcIAAAQg");
	this.shape_1503.setTransform(462.15,368.7);

	this.shape_1504 = new cjs.Shape();
	this.shape_1504.graphics.f("#A54FF4").s().p("AgeAmQgNgNAAgZQAAgXANgOQAMgOAUAAQATAAALANQALANABASIAAAHIhFAAIAAAAQgBAUAIAJQAJAJAOAAQAJAAAHgDQAJgCAJgFIAAAQQgGADgMADIgQACQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1504.setTransform(440.525,369.425);

	this.shape_1505 = new cjs.Shape();
	this.shape_1505.graphics.f("#A54FF4").s().p("AgdA4QgKgPAAgXQAAgYAKgNQAKgOASAAQAJAAAGAEQAHAEADAHIAAgzIAQAAIAACIIgQAAIAAgMQgEAHgGAEQgHAEgIAAQgRAAgLgOgAgQgKQgGAKAAASQAAATAGAJQAGAKAKAAQAMAAAGgKQAGgJAAgTQAAgSgGgJQgGgKgMAAQgKAAgGAJg");
	this.shape_1505.setTransform(429.325,367.625);

	this.shape_1506 = new cjs.Shape();
	this.shape_1506.graphics.f("#A54FF4").s().p("AgdApQgHgKgBgVIAAg8IARAAIAAA8QAAAOAEAGQAFAGAKAAQAKAAAHgIQAFgIABgPIAAg3IAPAAIAABiIgPAAIAAgPQgFAIgIAFQgHAFgJAAQgPgBgHgJg");
	this.shape_1506.setTransform(418.85,369.55);

	this.shape_1507 = new cjs.Shape();
	this.shape_1507.graphics.f("#A54FF4").s().p("AASBFQgPAAgGgKQgJgIABgSIAAhYIgaAAIAAgNIApAAIAABlQAAALADAFQAFAGAHAAIATAAIAAAOg");
	this.shape_1507.setTransform(408.5,367.475);

	this.shape_1508 = new cjs.Shape();
	this.shape_1508.graphics.f("#A54FF4").s().p("AgYAmQgNgOAAgYQAAgXANgOQANgOAWAAQAHAAAGACQAGABAIAFIAAARQgFgFgIgEQgHgCgHAAQgOAAgJAKQgIAKAAARQAAASAIAKQAIAKAPAAQAHAAAIgDQAFgCAHgGIAAARQgEADgJADIgOACQgWAAgNgOg");
	this.shape_1508.setTransform(397.225,369.425);

	this.shape_1509 = new cjs.Shape();
	this.shape_1509.graphics.f("#A54FF4").s().p("AAVAzIAAg9QAAgMgEgHQgFgHgKAAQgKABgHAHQgFAJAAAPIAAA3IgQAAIAAhiIAQAAIAAAPQAFgKAGgDQAHgFAKABQAPAAAHAKQAHAJAAAUIAAA9g");
	this.shape_1509.setTransform(386.35,369.3);

	this.shape_1510 = new cjs.Shape();
	this.shape_1510.graphics.f("#A54FF4").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1510.setTransform(376.125,367.525);

	this.shape_1511 = new cjs.Shape();
	this.shape_1511.graphics.f("#A54FF4").s().p("AgEBBIAIglIgUAAIgKAlIgOAAIAJglIgWAAIAAgOIAaAAIAJghIgYAAIAAgOIAaAAIAIgeIAOAAIgHAeIAUAAIAIgeIAOAAIgHAeIAUAAIAAAOIgYAAIgJAhIAXAAIAAAOIgaAAIgJAlgAgNAOIAVAAIAIghIgVAAg");
	this.shape_1511.setTransform(364.65,367.9);

	this.shape_1512 = new cjs.Shape();
	this.shape_1512.graphics.f("#059245").s().p("AAfAzIAAg4QgBgUgCgGQgCgFgGAAQgIAAgCAGQgDAEAAAVIAAA4IgNAAIAAg4QAAgWgDgEQgCgFgHAAQgGAAgDAGQgCAGgBATIAAA4IgOAAIAAhiIAOAAIAAAJQADgFAFgEQAFgCAFAAQAGAAAFACQADADADAHQADgHAFgDQAEgCAGAAQANAAAEAJQAFAJAAAZIAAA5g");
	this.shape_1512.setTransform(906.5,326.1);

	this.shape_1513 = new cjs.Shape();
	this.shape_1513.graphics.f("#059245").s().p("AgfArQgJgJAAgOQAAgQAMgIQALgIAUAAIAWAAIAAgDQAAgLgGgGQgHgFgMAAQgHAAgJACQgHACgJAFIAAgQIARgFIAPgCQAMAAAJAEQAJAEAFAHQAEAGAAAEQACAHAAANIAAA3IgQAAIAAgPQgGAJgHAEQgIAFgLAAQgOAAgKgJgAgQAEQgHAGAAAJQAAAJAFAFQAGAFAJAAQAMAAAIgJQAIgKAAgQIAAgDIgVAAQgNAAgHAEg");
	this.shape_1513.setTransform(895.425,326.225);

	this.shape_1514 = new cjs.Shape();
	this.shape_1514.graphics.f("#059245").s().p("AgiAzIAAhiIAQAAIAAATQAFgLAIgFQAIgGALABQAGAAAFABQAFABAFADIAAARIgLgGIgLgCQgPAAgIAKQgIAKAAAQIAAAyg");
	this.shape_1514.setTransform(886.025,326.1);

	this.shape_1515 = new cjs.Shape();
	this.shape_1515.graphics.f("#059245").s().p("AgOBEIgPgDIAAgQQAKAEAGACQAGACAHAAQAMAAAGgHQAGgIAAgPIAAgMQgEAIgHAFQgHAEgIAAQgSAAgJgOQgKgOAAgWQAAgXAKgOQAKgOARAAQAJAAAGAEQAHAEAEAIIAAgNIAQAAIAABbQAAAWgKALQgKAMgUAAIgOgCgAgQguQgGAKAAASQAAASAGAJQAGAJALAAQALAAAHgJQAFgJAAgSQAAgSgFgKQgHgJgLAAQgKAAgHAJg");
	this.shape_1515.setTransform(873.65,328.025);

	this.shape_1516 = new cjs.Shape();
	this.shape_1516.graphics.f("#059245").s().p("AgeAmQgLgMAAgaQAAgZALgNQAKgNAUAAQAUAAALANQALAOAAAYQAAAZgLANQgLAOgUAAQgUAAgKgOgAgSgcQgGAKAAASQAAATAGAJQAGAKAMAAQAMAAAHgKQAGgJAAgTQAAgSgGgKQgHgJgMAAQgLAAgHAJg");
	this.shape_1516.setTransform(863.125,326.225);

	this.shape_1517 = new cjs.Shape();
	this.shape_1517.graphics.f("#059245").s().p("AgiAzIAAhiIAQAAIAAATQAFgLAIgFQAHgGAMABIALABQAFABAFADIAAARIgLgGQgFgCgHAAQgOAAgIAKQgIAKAAAQIAAAyg");
	this.shape_1517.setTransform(853.525,326.1);

	this.shape_1518 = new cjs.Shape();
	this.shape_1518.graphics.f("#059245").s().p("AgnBFIAAiHIAQAAIAAANQAEgHAHgEQAGgEAIAAQASAAAKAOQAKAOAAAYQAAAWgKAOQgKAPgSAAQgIgBgHgEQgGgDgEgIIAAAygAgRgsQgGAIAAAUQAAARAGAKQAGAJALAAQALAAAGgJQAGgKAAgRQAAgTgGgKQgGgJgLAAQgKAAgHAKg");
	this.shape_1518.setTransform(841.725,327.95);

	this.shape_1519 = new cjs.Shape();
	this.shape_1519.graphics.f("#059245").s().p("AgeAmQgNgNAAgZQAAgXANgOQAMgOAUAAQATAAALANQALANABASIAAAHIhFAAIAAAAQgBAUAIAJQAJAJAOAAQAJAAAHgDQAJgCAJgFIAAAQQgGADgMADIgQACQgVAAgOgOgAgRgdQgHAHgBAKIA0AAQAAgKgHgIQgGgHgMAAQgLAAgIAIg");
	this.shape_1519.setTransform(819.825,326.225);

	this.shape_1520 = new cjs.Shape();
	this.shape_1520.graphics.f("#059245").s().p("AAVBFIAAg+QAAgMgEgGQgFgHgKAAQgKABgGAHQgGAJAAAOIAAA4IgRAAIAAiIIARAAIAAA1QAFgKAGgDQAIgFAJABQAPAAAHAKQAIAKAAASIAAA+g");
	this.shape_1520.setTransform(808.975,324.3);

	this.shape_1521 = new cjs.Shape();
	this.shape_1521.graphics.f("#059245").s().p("AAUA/QgSAAgHgHQgHgIAAgRIAAg1IgbAAIAAgMIAbAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAAKAEAFQAEAEAKAAIATAAIAAANg");
	this.shape_1521.setTransform(797.775,324.825);

	this.shape_1522 = new cjs.Shape();
	this.shape_1522.graphics.f("#059245").s().p("AgnBFIAAiHIAQAAIAAANQADgHAIgEQAFgEAJAAQASAAAKAOQALAOAAAYQAAAXgLANQgKAPgSAAQgIgBgGgEQgHgDgEgIIAAAygAgRgsQgGAIAAAUQAAARAGAKQAGAJALAAQAMAAAFgJQAHgKAAgRQAAgTgHgKQgGgJgLAAQgLAAgGAKg");
	this.shape_1522.setTransform(776.7,327.95);

	this.shape_1523 = new cjs.Shape();
	this.shape_1523.graphics.f("#059245").s().p("AgdApQgIgKAAgVIAAg8IARAAIAAA8QAAAOAEAGQAFAGAKAAQAKAAAGgIQAGgIAAgPIAAg3IARAAIAABiIgRAAIAAgPQgEAIgHAFQgIAFgJAAQgPgBgHgJg");
	this.shape_1523.setTransform(765.625,326.35);

	this.shape_1524 = new cjs.Shape();
	this.shape_1524.graphics.f("#059245").s().p("AAUA/QgSAAgHgHQgHgIgBgRIAAg1IgaAAIAAgMIAaAAIAAgcIAQAAIAAAcIAlAAIAAAMIglAAIAAA1QAAALAEAEQAEAEALAAIASAAIAAANg");
	this.shape_1524.setTransform(743.6,324.825);

	this.shape_1525 = new cjs.Shape();
	this.shape_1525.graphics.f("#059245").s().p("AgeAmQgNgNAAgZQAAgXANgOQAMgOAUAAQATAAALANQALANABASIAAAHIhFAAIAAAAQgBAUAIAJQAJAJAOAAQAJAAAHgDQAJgCAJgFIAAAQQgGADgMADIgQACQgVAAgOgOgAgQgdQgIAHgBAKIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1525.setTransform(733.125,326.225);

	this.shape_1526 = new cjs.Shape();
	this.shape_1526.graphics.f("#059245").s().p("AgSAyIgRgFIAAgQIARAHQAJACAHAAQAKAAAGgEQAGgFAAgIQAAgLgVgEIgBAAIgGgBQgOgDgGgGQgHgGAAgLQAAgOAKgIQAJgIARAAQAIAAAIACIAOAEIAAAQQgHgEgHgCQgGgCgIAAQgLAAgFADQgFAEAAAHQAAAHAEADQAEADAPADIAGACQANACAGAGQAGAHAAALQAAAOgKAIQgLAJgRAAg");
	this.shape_1526.setTransform(722.275,326.225);

	this.shape_1527 = new cjs.Shape();
	this.shape_1527.graphics.f("#059245").s().p("AgeAmQgLgMAAgaQAAgYALgOQALgNATAAQAUAAAMANQAKAOAAAYQAAAagKAMQgMAOgUAAQgTAAgLgOgAgSgcQgGAKAAASQAAATAGAJQAHAKALAAQAMAAAHgKQAGgJAAgTQAAgSgGgKQgHgJgMAAQgLAAgHAJg");
	this.shape_1527.setTransform(700.55,326.225);

	this.shape_1528 = new cjs.Shape();
	this.shape_1528.graphics.f("#059245").s().p("AAUA/QgSAAgGgHQgIgIAAgRIAAg1IgaAAIAAgMIAaAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAAKAEAFQAEAEALAAIASAAIAAANg");
	this.shape_1528.setTransform(689.4,324.825);

	this.shape_1529 = new cjs.Shape();
	this.shape_1529.graphics.f("#059245").s().p("AAUA/QgSAAgHgHQgIgIAAgRIAAg1IgaAAIAAgMIAaAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QABAKAEAFQAEAEAKAAIASAAIAAANg");
	this.shape_1529.setTransform(667.75,324.825);

	this.shape_1530 = new cjs.Shape();
	this.shape_1530.graphics.f("#059245").s().p("AgRAyIgSgFIAAgQQAKAFAIACQAJACAGAAQAKAAAGgEQAFgFAAgIQABgLgVgEIAAAAIgHgBQgOgDgGgGQgGgGgBgLQAAgOAKgIQAKgIAQAAIAQACIAOAEIAAAQIgOgGQgGgCgJAAQgKAAgFADQgFAEAAAHQAAAHAEADQADADAQADIAGACQAMACAHAGQAGAHAAALQAAAOgKAIQgMAJgQAAg");
	this.shape_1530.setTransform(657.25,326.225);

	this.shape_1531 = new cjs.Shape();
	this.shape_1531.graphics.f("#059245").s().p("AgdApQgIgKAAgVIAAg8IARAAIAAA8QAAAOAEAGQAFAGAKAAQAKAAAGgIQAGgIAAgPIAAg3IARAAIAABiIgRAAIAAgPQgEAIgHAFQgIAFgJAAQgPgBgHgJg");
	this.shape_1531.setTransform(646.425,326.35);

	this.shape_1532 = new cjs.Shape();
	this.shape_1532.graphics.f("#059245").s().p("AgZBXIAAgOIAUAAQAHAAAEgFQAEgGAAgKIAAhXIgbAAIAAgNIArAAIAABkQAAAQgIAKQgHAJgOAAgAAKhCIAAgUIAQAAIAAAUg");
	this.shape_1532.setTransform(634.375,326.15);

	this.shape_1533 = new cjs.Shape();
	this.shape_1533.graphics.f("#059245").s().p("AgSAyIgRgFIAAgQQAKAFAHACQAJACAHAAQAKAAAGgEQAFgFABgIQgBgLgUgEIgBAAIgGgBQgPgDgFgGQgHgGAAgLQAAgOAKgIQAKgIARAAQAIAAAGACIAPAEIAAAQIgOgGQgGgCgIAAQgLAAgEADQgGAEAAAHQAAAHAEADQADADAQADIAHACQALACAHAGQAGAHAAALQAAAOgLAIQgLAJgQAAIgQgCg");
	this.shape_1533.setTransform(613.9,326.225);

	this.shape_1534 = new cjs.Shape();
	this.shape_1534.graphics.f("#059245").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1534.setTransform(603.725,324.325);

	this.shape_1535 = new cjs.Shape();
	this.shape_1535.graphics.f("#059245").s().p("AAWAzIAAg9QAAgNgFgGQgFgHgKAAQgKABgGAHQgHAJABAPIAAA3IgRAAIAAhiIARAAIAAAPQAFgKAGgDQAIgFAJABQAPAAAIAKQAGAKAAATIAAA9g");
	this.shape_1535.setTransform(581.4,326.1);

	this.shape_1536 = new cjs.Shape();
	this.shape_1536.graphics.f("#059245").s().p("AgeAmQgLgMAAgaQAAgZALgNQAKgNAUAAQAUAAALANQALAOAAAYQAAAZgLANQgKAOgVAAQgUAAgKgOgAgSgcQgGALAAARQAAASAGAKQAGAKAMAAQAMAAAHgKQAGgJAAgTQAAgSgGgKQgHgJgMAAQgLAAgHAJg");
	this.shape_1536.setTransform(570.525,326.225);

	this.shape_1537 = new cjs.Shape();
	this.shape_1537.graphics.f("#059245").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1537.setTransform(560.375,324.325);

	this.shape_1538 = new cjs.Shape();
	this.shape_1538.graphics.f("#059245").s().p("AAUA/QgSAAgHgHQgHgIAAgRIAAg1IgbAAIAAgMIAbAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAAKAEAFQAEAEAKAAIATAAIAAANg");
	this.shape_1538.setTransform(548.525,324.825);

	this.shape_1539 = new cjs.Shape();
	this.shape_1539.graphics.f("#059245").s().p("AgYAmQgNgOAAgYQAAgXANgOQANgOAVAAQAIAAAHACQAFACAIAEIAAARQgFgFgIgEQgGgCgJAAQgNAAgJAKQgIAKAAARQAAASAJAKQAGAKAPAAQAJAAAHgDQAGgCAGgGIAAARQgEADgJADIgPACQgVAAgNgOg");
	this.shape_1539.setTransform(538.1,326.225);

	this.shape_1540 = new cjs.Shape();
	this.shape_1540.graphics.f("#059245").s().p("AgeAmQgNgNAAgZQAAgXANgOQAMgOAUAAQATAAALANQALANABASIAAAHIhFAAIAAAAQgBAUAIAJQAJAJAOAAQAJAAAHgDQAJgCAJgFIAAAQQgGADgMADIgQACQgVAAgOgOgAgQgdQgIAHgBAKIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1540.setTransform(527.225,326.225);

	this.shape_1541 = new cjs.Shape();
	this.shape_1541.graphics.f("#059245").s().p("AgSAyIgRgFIAAgQIARAHQAJACAHAAQAKAAAGgEQAGgFAAgIQAAgLgVgEIgBAAIgGgBQgOgDgGgGQgHgGAAgLQAAgOAKgIQAJgIARAAQAIAAAIACIAOAEIAAAQQgHgEgHgCQgGgCgIAAQgLAAgFADQgFAEAAAHQAAAHAEADQAEADAPADIAGACQANACAGAGQAGAHAAALQAAAOgKAIQgLAJgRAAIgQgCg");
	this.shape_1541.setTransform(516.375,326.225);

	this.shape_1542 = new cjs.Shape();
	this.shape_1542.graphics.f("#059245").s().p("AAUA/QgTAAgGgHQgIgIABgRIAAg1IgaAAIAAgMIAaAAIAAgcIAPAAIAAAcIAkAAIAAAMIgkAAIAAA1QAAALAEAEQAEAEAKAAIASAAIAAANg");
	this.shape_1542.setTransform(494.35,324.825);

	this.shape_1543 = new cjs.Shape();
	this.shape_1543.graphics.f("#059245").s().p("AgSAyIgRgFIAAgQIARAHQAJACAHAAQAKAAAGgEQAGgFAAgIQgBgLgUgEIgBAAIgGgBQgOgDgGgGQgHgGAAgLQAAgOAKgIQAKgIARAAQAIAAAGACIAPAEIAAAQQgGgEgIgCQgGgCgIAAQgLAAgEADQgGAEAAAHQAAAHAEADQADADAQADIAHACQALACAHAGQAGAHAAALQAAAOgLAIQgKAJgRAAIgQgCg");
	this.shape_1543.setTransform(483.85,326.225);

	this.shape_1544 = new cjs.Shape();
	this.shape_1544.graphics.f("#059245").s().p("AgiAzIAAhiIAQAAIAAATQAFgLAIgFQAHgGAMABQAGAAAFABQAFABAFADIAAARIgLgGQgFgCgGAAQgPAAgIAKQgIAKAAAQIAAAyg");
	this.shape_1544.setTransform(474.225,326.1);

	this.shape_1545 = new cjs.Shape();
	this.shape_1545.graphics.f("#059245").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1545.setTransform(462.825,324.325);

	this.shape_1546 = new cjs.Shape();
	this.shape_1546.graphics.f("#059245").s().p("AgLBFIAAhWIgaAAIAAgMIAaAAIAAgHQAAgQAHgIQAHgIAQABIATAAIAAANIgSAAQgJAAgDAEQgEADAAAJIAAAJIAiAAIAAAMIgiAAIAABWg");
	this.shape_1546.setTransform(451.425,324.3);

	this.shape_1547 = new cjs.Shape();
	this.shape_1547.graphics.f("#059245").s().p("AgSAyIgRgFIAAgQIARAHQAJACAHAAQAKAAAGgEQAGgFAAgIQAAgLgVgEIgBAAIgGgBQgOgDgGgGQgHgGAAgLQAAgOAKgIQAJgIARAAQAIAAAIACIAOAEIAAAQQgHgEgHgCQgGgCgIAAQgLAAgFADQgFAEAAAHQAAAHAEADQAEADAPADIAHACQAMACAGAGQAGAHAAALQAAAOgKAIQgLAJgRAAg");
	this.shape_1547.setTransform(429.675,326.225);

	this.shape_1548 = new cjs.Shape();
	this.shape_1548.graphics.f("#059245").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1548.setTransform(419.475,324.325);

	this.shape_1549 = new cjs.Shape();
	this.shape_1549.graphics.f("#059245").s().p("AAVBFIAAg+QAAgMgEgGQgFgHgKAAQgKABgGAHQgHAKAAANIAAA4IgQAAIAAiIIAQAAIAAA1QAFgKAHgDQAIgFAJABQAPAAAHAKQAIAKAAASIAAA+g");
	this.shape_1549.setTransform(408.025,324.3);

	this.shape_1550 = new cjs.Shape();
	this.shape_1550.graphics.f("#059245").s().p("AgIBCIAAh0IgpAAIAAgPIBjAAIAAAPIgpAAIAAB0g");
	this.shape_1550.setTransform(397.125,324.575);

	this.shape_1551 = new cjs.Shape();
	this.shape_1551.graphics.f("#059245").s().p("AgqBKIBEiTIARAAIhFCTg");
	this.shape_1551.setTransform(364.4,325.4);

	this.shape_1552 = new cjs.Shape();
	this.shape_1552.graphics.f("#059245").s().p("AAUA/QgSAAgHgHQgHgIAAgRIAAg1IgbAAIAAgMIAbAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAALAEAEQAEAEALAAIASAAIAAANg");
	this.shape_1552.setTransform(451,260.025);

	this.shape_1553 = new cjs.Shape();
	this.shape_1553.graphics.f("#059245").s().p("AAVAzIAAg9QAAgNgEgGQgFgHgKAAQgKABgGAHQgGAJAAAPIAAA3IgRAAIAAhiIARAAIAAAPQAEgJAHgEQAIgFAJABQAPAAAHAKQAIAJAAAUIAAA9g");
	this.shape_1553.setTransform(440.525,261.3);

	this.shape_1554 = new cjs.Shape();
	this.shape_1554.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAVAAQATAAAKANQALAMABATIAAAHIhFAAIAAAAQgBAUAIAJQAKAJANAAQAJAAAHgDQAJgCAJgFIAAAQIgRAGIgRACQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1554.setTransform(429.675,261.425);

	this.shape_1555 = new cjs.Shape();
	this.shape_1555.graphics.f("#059245").s().p("AAfAzIAAg4QAAgUgDgGQgCgFgHAAQgGAAgDAGQgCAEgBAVIAAA4IgOAAIAAg4QAAgVgCgFQgCgFgHAAQgHAAgCAGQgDAGABATIAAA4IgPAAIAAhiIAPAAIAAAJQACgGAFgDQAEgCAGAAQAGAAAFACQAEADACAHQACgHAGgDQAEgCAHAAQAMAAAEAJQAFAJAAAZIAAA5g");
	this.shape_1555.setTransform(418.85,261.3);

	this.shape_1556 = new cjs.Shape();
	this.shape_1556.graphics.f("#059245").s().p("AAeAzIAAg4QAAgUgCgGQgCgFgGAAQgIAAgCAGQgDAEAAAVIAAA4IgNAAIAAg4QgBgWgCgEQgCgFgHAAQgGAAgDAGQgCAGgBATIAAA4IgOAAIAAhiIAOAAIAAAJQADgGAFgDQAFgCAFAAQAHAAAEACQADADADAHQADgHAEgDQAFgCAGAAQANAAAEAJQAFAJAAAZIAAA5g");
	this.shape_1556.setTransform(408,261.3);

	this.shape_1557 = new cjs.Shape();
	this.shape_1557.graphics.f("#059245").s().p("AgeAmQgLgMAAgaQAAgZALgNQAKgNAUAAQAVAAAKANQALANAAAZQAAAagLAMQgKAOgVAAQgUAAgKgOgAgSgcQgGALAAARQAAASAGAKQAHAKALAAQAMAAAHgKQAGgJAAgTQAAgSgGgKQgHgJgMAAQgLAAgHAJg");
	this.shape_1557.setTransform(397.125,261.425);

	this.shape_1558 = new cjs.Shape();
	this.shape_1558.graphics.f("#059245").s().p("AgYAmQgNgNAAgZQAAgXANgOQANgOAWAAQAHAAAGACQAHACAHAEIAAARQgGgGgHgDQgHgCgHAAQgPAAgIAKQgIAJAAASQAAASAIAKQAIAKAPAAQAHAAAHgDQAGgCAHgGIAAARQgEADgKADIgNACQgWAAgNgOg");
	this.shape_1558.setTransform(386.4,261.425);

	this.shape_1559 = new cjs.Shape();
	this.shape_1559.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAVAAQATAAAKANQALAMABATIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAJAAAHgDQAJgCAJgFIAAAQIgRAGIgRACQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgBgKgHgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1559.setTransform(592.225,239.825);

	this.shape_1560 = new cjs.Shape();
	this.shape_1560.graphics.f("#059245").s().p("AAWAzIAAg9QAAgNgFgGQgFgGgKgBQgKABgGAHQgHAJABAPIAAA3IgRAAIAAhiIARAAIAAAPQAFgKAGgDQAIgFAJABQAPAAAIAKQAGAKAAATIAAA9g");
	this.shape_1560.setTransform(581.4,239.7);

	this.shape_1561 = new cjs.Shape();
	this.shape_1561.graphics.f("#059245").s().p("AgnBEIAAgNIAgAAIAAhIIgaAAIAAgMIApAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1561.setTransform(571.2,237.925);

	this.shape_1562 = new cjs.Shape();
	this.shape_1562.graphics.f("#059245").s().p("AASBFQgOAAgIgKQgHgJgBgRIAAhYIgaAAIAAgNIAqAAIAABlQAAAMAEAEQADAGAJAAIASAAIAAAOg");
	this.shape_1562.setTransform(560.2,237.875);

	this.shape_1563 = new cjs.Shape();
	this.shape_1563.graphics.f("#059245").s().p("AguAHIAAgNIBdAAIAAANg");
	this.shape_1563.setTransform(548.975,239.1);

	this.shape_1564 = new cjs.Shape();
	this.shape_1564.graphics.f("#059245").s().p("AgnBEIAAgNIAgAAIAAhIIgaAAIAAgMIApAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1564.setTransform(538.7,237.925);

	this.shape_1565 = new cjs.Shape();
	this.shape_1565.graphics.f("#059245").s().p("AAUA/QgSAAgHgHQgHgIAAgRIAAg1IgaAAIAAgMIAaAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QAAAKAEAFQAFAEAKAAIASAAIAAANg");
	this.shape_1565.setTransform(526.85,238.425);

	this.shape_1566 = new cjs.Shape();
	this.shape_1566.graphics.f("#059245").s().p("AASBFQgOAAgHgKQgIgJAAgRIAAhYIgaAAIAAgNIApAAIAABlQAAAMAEAEQAEAGAHAAIATAAIAAAOg");
	this.shape_1566.setTransform(516.85,237.875);

	this.shape_1567 = new cjs.Shape();
	this.shape_1567.graphics.f("#059245").s().p("AgdApQgIgKAAgVIAAg8IAQAAIAAA8QAAAOAGAGQAEAGAKAAQALAAAFgIQAHgIAAgPIAAg3IAQAAIAABiIgQAAIAAgPQgFAIgHAFQgIAFgIAAQgQgBgHgJg");
	this.shape_1567.setTransform(505.55,239.95);

	this.shape_1568 = new cjs.Shape();
	this.shape_1568.graphics.f("#059245").s().p("AAeAzIAAg4QAAgUgCgGQgCgFgHAAQgGAAgDAGQgDAEABAVIAAA4IgPAAIAAg4QABgVgDgFQgCgFgHAAQgGAAgDAGQgCAGAAATIAAA4IgPAAIAAhiIAPAAIAAAJQACgGAFgDQAFgCAFAAQAGAAAFADQADACADAHQADgHAEgCQAFgDAHAAQALAAAFAJQAFAJAAAZIAAA5g");
	this.shape_1568.setTransform(494.7,239.7);

	this.shape_1569 = new cjs.Shape();
	this.shape_1569.graphics.f("#059245").s().p("AgfArQgJgJAAgOQABgQAKgIQALgIAVAAIAVAAIAAgDQAAgLgFgGQgHgFgMAAQgHAAgJACQgHACgJAFIAAgQIARgFIAPgCQANAAAIAEQAJADAEAIQAEAEABAGIABBLIgQAAIAAgPQgFAJgHAEQgJAFgJAAQgPAAgKgJgAgQAEQgIAGABAJQAAAJAFAFQAGAFAIAAQANAAAHgJQAIgJAAgRIAAgDIgUAAQgNAAgHAEg");
	this.shape_1569.setTransform(472.8,239.825);

	this.shape_1570 = new cjs.Shape();
	this.shape_1570.graphics.f("#059245").s().p("AgSAyIgRgFIAAgQQAKAFAHACQAKACAGAAQAKAAAGgEQAFgFAAgIQAAgLgUgEIgBAAIgGgBQgPgDgFgGQgHgGAAgLQAAgOAKgIQAKgIAQAAIAPACIAPAEIAAAQQgGgEgIgCQgGgCgIAAQgKAAgGADQgFAEAAAHQAAAHAEADQADADAQADIAHACQALACAHAGQAGAGAAAMQAAAOgLAIQgLAJgQAAg");
	this.shape_1570.setTransform(451.35,239.825);

	this.shape_1571 = new cjs.Shape();
	this.shape_1571.graphics.f("#059245").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1571.setTransform(441.175,237.925);

	this.shape_1572 = new cjs.Shape();
	this.shape_1572.graphics.f("#059245").s().p("AgSAyIgRgFIAAgQQAKAFAHACQAKACAGAAQAJAAAHgEQAFgFAAgIQAAgLgUgEIgBAAIgGgBQgOgDgGgGQgGgGgBgLQAAgOAKgIQAKgIAQAAIAPACIAPAEIAAAQIgOgGQgHgCgIAAQgKAAgFADQgFAEAAAHQAAAHAEADQADADAQADIAGACQAMACAGAGQAHAGAAAMQAAAOgKAIQgMAJgQAAIgQgCg");
	this.shape_1572.setTransform(418.85,239.825);

	this.shape_1573 = new cjs.Shape();
	this.shape_1573.graphics.f("#059245").s().p("AgnBEIAAgNIAgAAIAAhIIgaAAIAAgMIApAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1573.setTransform(408.65,237.925);

	this.shape_1574 = new cjs.Shape();
	this.shape_1574.graphics.f("#059245").s().p("AAVBFIAAg+QAAgMgEgGQgFgGgKgBQgKABgGAHQgGAJAAAOIAAA4IgRAAIAAiIIARAAIAAA1QAEgJAHgEQAIgFAJABQAPAAAHAKQAIAKAAASIAAA+g");
	this.shape_1574.setTransform(397.175,237.9);

	this.shape_1575 = new cjs.Shape();
	this.shape_1575.graphics.f("#059245").s().p("AgIBCIAAh0IgpAAIAAgPIBjAAIAAAPIgpAAIAAB0g");
	this.shape_1575.setTransform(386.3,238.175);

	this.shape_1576 = new cjs.Shape();
	this.shape_1576.graphics.f("#059245").s().p("AgFAzIAAgpIglAWIgGgLIAngVIgngUIAGgLIAlAWIAAgpIALAAIAAApIAlgWIAGALIgnAUIAnAVIgGALIglgWIAAApg");
	this.shape_1576.setTransform(364.625,239.175);

	this.shape_1577 = new cjs.Shape();
	this.shape_1577.graphics.f("#059245").s().p("AgFAzIAAgpIglAWIgGgLIAngVIgngUIAGgLIAlAWIAAgpIALAAIAAApIAlgWIAGALIgnAUIAnAVIgGALIglgWIAAApg");
	this.shape_1577.setTransform(375.475,217.575);

	this.shape_1578 = new cjs.Shape();
	this.shape_1578.graphics.f("#059245").s().p("AgqBKIBEiTIARAAIhFCTg");
	this.shape_1578.setTransform(364.4,217.4);

	this.shape_1579 = new cjs.Shape();
	this.shape_1579.graphics.f("#059245").s().p("AgHAvIAAgoIgmAAIAAgNIAmAAIAAgoIAOAAIAAAoIAnAAIAAANIgnAAIAAAog");
	this.shape_1579.setTransform(776.6,174.2);

	this.shape_1580 = new cjs.Shape();
	this.shape_1580.graphics.f("#059245").s().p("AgGAvIAAgoIgoAAIAAgNIAoAAIAAgoIANAAIAAAoIAoAAIAAANIgoAAIAAAog");
	this.shape_1580.setTransform(765.75,174.2);

	this.shape_1581 = new cjs.Shape();
	this.shape_1581.graphics.f("#059245").s().p("AgaAyQgOgRAAghQAAggAOgRQAOgSAYAAQAGAAAJACQAGABAIAEIAAASQgHgFgHgDQgHgDgIAAQgQAAgJAOQgIAOAAAZQAAAaAIAOQAJAOAQAAQAIAAAHgDQAJgEAFgEIAAASQgIAEgGABQgJACgGAAQgZAAgNgSg");
	this.shape_1581.setTransform(754.65,173.375);

	this.shape_1582 = new cjs.Shape();
	this.shape_1582.graphics.f("#059245").s().p("AAVAzIAAg9QAAgNgEgGQgFgHgKAAQgKAAgGAIQgGAJAAAPIAAA3IgRAAIAAhiIARAAIAAAPQAEgJAHgEQAIgFAJABQAPAAAHAKQAIAJAAAUIAAA9g");
	this.shape_1582.setTransform(733.125,174.9);

	this.shape_1583 = new cjs.Shape();
	this.shape_1583.graphics.f("#059245").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1583.setTransform(722.925,173.125);

	this.shape_1584 = new cjs.Shape();
	this.shape_1584.graphics.f("#059245").s().p("AAUA/QgTAAgGgHQgIgIAAgRIAAg1IgaAAIAAgMIAaAAIAAgcIAQAAIAAAcIAkAAIAAAMIgkAAIAAA1QAAALAEAEQAEAEAKAAIASAAIAAANg");
	this.shape_1584.setTransform(700.25,173.625);

	this.shape_1585 = new cjs.Shape();
	this.shape_1585.graphics.f("#059245").s().p("AAVAzIAAg9QAAgNgEgGQgFgHgKAAQgKAAgGAIQgGAJAAAPIAAA3IgRAAIAAhiIARAAIAAAPQAEgJAHgEQAIgFAJABQAPAAAHAKQAIAJAAAUIAAA9g");
	this.shape_1585.setTransform(689.775,174.9);

	this.shape_1586 = new cjs.Shape();
	this.shape_1586.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAVAAQATAAAKANQALAMABATIAAAHIhFAAIAAAAQgBAUAIAJQAKAJANAAQAJAAAHgDQAJgCAJgFIAAAQIgRAGIgRACQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1586.setTransform(678.925,175.025);

	this.shape_1587 = new cjs.Shape();
	this.shape_1587.graphics.f("#059245").s().p("AAfAzIAAg4QgBgUgCgGQgCgFgGAAQgIAAgCAGQgDAFAAAUIAAA4IgNAAIAAg4QgBgVgCgFQgCgFgHAAQgHAAgCAGQgCAGgBATIAAA4IgOAAIAAhiIAOAAIAAAJQADgFAFgEQAEgCAFAAQAIAAAEACQADADACAHQAEgHAEgDQAFgCAGAAQAMAAAFAJQAFAJAAAZIAAA5g");
	this.shape_1587.setTransform(668.1,174.9);

	this.shape_1588 = new cjs.Shape();
	this.shape_1588.graphics.f("#059245").s().p("AAeAzIAAg4QAAgUgCgGQgCgFgHAAQgGAAgDAGQgDAEABAVIAAA4IgPAAIAAg4QABgWgDgEQgCgFgHAAQgGAAgDAGQgCAGAAATIAAA4IgPAAIAAhiIAPAAIAAAJQACgFAFgEQAFgCAFAAQAHAAAEACQADADADAHQADgHAEgDQAFgCAHAAQALAAAGAJQAEAJAAAZIAAA5g");
	this.shape_1588.setTransform(657.25,174.9);

	this.shape_1589 = new cjs.Shape();
	this.shape_1589.graphics.f("#059245").s().p("AgeAmQgLgMAAgaQAAgZALgNQAKgNAUAAQAVAAAKANQALANAAAZQAAAagLAMQgKAOgVAAQgUAAgKgOgAgSgcQgGALAAARQAAASAGAKQAHAKALAAQAMAAAHgKQAGgJAAgTQAAgSgGgKQgHgJgMAAQgLAAgHAJg");
	this.shape_1589.setTransform(646.375,175.025);

	this.shape_1590 = new cjs.Shape();
	this.shape_1590.graphics.f("#059245").s().p("AgZAmQgMgNAAgZQAAgXAMgOQAOgOAVAAQAIAAAHACQAFACAIAEIAAARQgGgGgHgDQgGgCgJAAQgNAAgJAKQgIAJAAASQAAASAIAKQAIAKAOAAQAIAAAIgDQAFgCAHgGIAAARQgFADgIADIgPACQgUAAgPgOg");
	this.shape_1590.setTransform(635.65,175.025);

	this.shape_1591 = new cjs.Shape();
	this.shape_1591.graphics.f("#059245").s().p("AgeAmQgNgOAAgYQAAgWANgPQAMgOAVAAQASAAAMANQALANAAASIAAAHIhFAAIAAAAQAAAUAHAJQAJAJAOAAQAJAAAIgDQAIgCAKgFIAAAQQgIADgKADIgRACQgVAAgOgOgAgRgdQgGAHgBAKIAzAAQAAgKgGgIQgHgHgMAAQgLAAgIAIg");
	this.shape_1591.setTransform(613.9,175.025);

	this.shape_1592 = new cjs.Shape();
	this.shape_1592.graphics.f("#059245").s().p("AAVAzIAAg9QAAgNgEgGQgFgHgKAAQgKAAgGAIQgGAJAAAPIAAA3IgRAAIAAhiIARAAIAAAPQAFgKAGgDQAIgFAJABQAPAAAHAKQAIAJAAAUIAAA9g");
	this.shape_1592.setTransform(603.075,174.9);

	this.shape_1593 = new cjs.Shape();
	this.shape_1593.graphics.f("#059245").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1593.setTransform(592.875,173.125);

	this.shape_1594 = new cjs.Shape();
	this.shape_1594.graphics.f("#059245").s().p("AASBFQgOAAgHgKQgIgIAAgSIAAhYIgaAAIAAgNIApAAIAABlQAAALAEAFQADAGAJAAIASAAIAAAOg");
	this.shape_1594.setTransform(581.875,173.075);

	this.shape_1595 = new cjs.Shape();
	this.shape_1595.graphics.f("#059245").s().p("AgeAmQgNgNAAgZQAAgXANgOQAMgOAVAAQASAAALANQALANABASIAAAHIhFAAIAAAAQgBAUAIAJQAKAJANAAQAJAAAHgDQAJgCAJgFIAAAQQgGADgMADIgQACQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1595.setTransform(559.725,175.025);

	this.shape_1596 = new cjs.Shape();
	this.shape_1596.graphics.f("#059245").s().p("AASBFQgOAAgIgKQgIgJAAgRIAAhYIgZAAIAAgNIApAAIAABlQAAAMAEAEQADAGAIAAIATAAIAAAOg");
	this.shape_1596.setTransform(549.375,173.075);

	this.shape_1597 = new cjs.Shape();
	this.shape_1597.graphics.f("#059245").s().p("AgOBEIgPgDIAAgQQAKAEAGACQAHACAGAAQAMAAAHgHQAFgIAAgPIAAgMQgEAIgHAFQgGAEgJAAQgQAAgLgOQgLgOAAgWQAAgXALgOQALgOAQAAQAJAAAGAEQAHADAEAJIAAgNIAQAAIAABbQAAAWgKALQgKAMgUAAIgOgCgAgQguQgGALgBARQABARAGAKQAGAJALAAQALAAAHgJQAFgJAAgSQAAgSgFgKQgHgJgLAAQgLAAgGAJg");
	this.shape_1597.setTransform(537.7,176.825);

	this.shape_1598 = new cjs.Shape();
	this.shape_1598.graphics.f("#059245").s().p("AAVAzIAAg9QAAgNgEgGQgFgHgKAAQgKAAgGAIQgGAJAAAPIAAA3IgRAAIAAhiIARAAIAAAPQAEgJAHgEQAIgFAJABQAPAAAHAKQAIAJAAAUIAAA9g");
	this.shape_1598.setTransform(527.225,174.9);

	this.shape_1599 = new cjs.Shape();
	this.shape_1599.graphics.f("#059245").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1599.setTransform(517.025,173.125);

	this.shape_1600 = new cjs.Shape();
	this.shape_1600.graphics.f("#059245").s().p("AgSAyIgRgFIAAgQQAKAFAHACQAJACAHAAQAJAAAHgEQAFgFABgIQgBgLgUgEIgBAAIgGgBQgOgDgHgGQgFgGAAgLQgBgOAKgIQAKgIAQAAQAIAAAHACIAPAEIAAAQIgOgGQgHgCgHAAQgLAAgFADQgGAEAAAHQAAAHAFADQAEADAPADIAHACQALACAHAGQAGAHAAALQAAAOgLAIQgKAJgSAAIgPgCg");
	this.shape_1600.setTransform(505.55,175.025);

	this.shape_1601 = new cjs.Shape();
	this.shape_1601.graphics.f("#059245").s().p("AgfArQgJgJAAgOQAAgPALgJQAMgIAUAAIAWAAIAAgDQAAgLgGgGQgHgFgMAAQgHAAgJACQgIACgIAFIAAgQIARgFIAPgCQAMAAAJAEQAJAEAFAHQADAEABAGQACAHAAANIAAA3IgQAAIAAgPQgGAJgHAEQgIAFgLAAQgOAAgKgJgAgQAEQgHAGAAAJQAAAJAFAFQAGAFAJAAQAMAAAIgJQAIgKAAgQIAAgDIgVAAQgNAAgHAEg");
	this.shape_1601.setTransform(483.625,175.025);

	this.shape_1602 = new cjs.Shape();
	this.shape_1602.graphics.f("#059245").s().p("AgRAyIgSgFIAAgQQAKAFAIACQAIACAHAAQAKAAAFgEQAHgFAAgIQAAgLgVgEIgBAAIgGgBQgOgDgGgGQgGgGAAgLQAAgOAJgIQAKgIAQAAIAQACIAOAEIAAAQIgOgGQgGgCgJAAQgKAAgFADQgGAEABAHQAAAHADADQAFADAPADIAGACQANACAFAGQAHAHAAALQAAAOgKAIQgLAJgSAAIgOgCg");
	this.shape_1602.setTransform(462.2,175.025);

	this.shape_1603 = new cjs.Shape();
	this.shape_1603.graphics.f("#059245").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1603.setTransform(452,173.125);

	this.shape_1604 = new cjs.Shape();
	this.shape_1604.graphics.f("#059245").s().p("AgSAyIgRgFIAAgQIARAHQAJACAHAAQAKAAAGgEQAGgFAAgIQAAgLgVgEIgBAAIgGgBQgOgDgGgGQgHgGAAgLQAAgOAKgIQAJgIARAAQAIAAAIACIAOAEIAAAQQgHgEgHgCQgGgCgIAAQgLAAgFADQgFAEAAAHQAAAHAEADQAEADAPADIAHACQAMACAGAGQAGAHAAALQAAAOgKAIQgLAJgRAAg");
	this.shape_1604.setTransform(429.675,175.025);

	this.shape_1605 = new cjs.Shape();
	this.shape_1605.graphics.f("#059245").s().p("AgnBEIAAgNIAgAAIAAhIIgZAAIAAgMIAoAAIAABUIAgAAIAAANgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1605.setTransform(419.475,173.125);

	this.shape_1606 = new cjs.Shape();
	this.shape_1606.graphics.f("#059245").s().p("AAVBFIAAg+QAAgMgEgGQgFgHgKAAQgKAAgGAIQgHAKAAANIAAA4IgQAAIAAiIIAQAAIAAA1QAFgKAHgDQAIgFAJABQAPAAAHAKQAIAJAAATIAAA+g");
	this.shape_1606.setTransform(408.025,173.1);

	this.shape_1607 = new cjs.Shape();
	this.shape_1607.graphics.f("#059245").s().p("AgIBCIAAh0IgpAAIAAgPIBjAAIAAAPIgpAAIAAB0g");
	this.shape_1607.setTransform(397.125,173.375);

	this.shape_1608 = new cjs.Shape();
	this.shape_1608.graphics.f("#059245").s().p("AgqBKIBEiTIARAAIhFCTg");
	this.shape_1608.setTransform(364.4,174.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037,p:{x:503.625,y:189.175}},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030,p:{x:579.475,y:189.175}},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020,p:{x:709.525,y:189.175}},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965,p:{x:589.625,y:385.475}},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962,p:{x:622.825,y:383.575}},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951,p:{x:763.125,y:379.45}},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945,p:{x:828.725,y:383.575}},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940,p:{x:882.35,y:379.45}},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935,p:{x:958.775,y:383.575}},{t:this.shape_934,p:{x:968.925,y:385.475}},{t:this.shape_933},{t:this.shape_932,p:{x:1002.125,y:383.575}},{t:this.shape_931,p:{x:1011.95,y:384.075}},{t:this.shape_930},{t:this.shape_929,p:{x:1055.625,y:385.475}},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902,p:{x:514.475,y:556.375}},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888,p:{x:687.85,y:556.375}},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883,p:{x:752.875,y:556.375}},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877,p:{x:838.575,y:556.875}},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861,p:{x:426.625,y:617.1}},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823,p:{x:892.625,y:617.1}},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811}]}).to({state:[{t:this.shape_1279},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1266},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1037,p:{x:721.175,y:189.675}},{t:this.shape_1252},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1248},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_1030,p:{x:829.525,y:189.675}},{t:this.shape_1244},{t:this.shape_1243},{t:this.shape_1242},{t:this.shape_1241,p:{x:373.725,y:234.175}},{t:this.shape_1240},{t:this.shape_1239},{t:this.shape_1020,p:{x:385.225,y:254.475}},{t:this.shape_1238},{t:this.shape_962,p:{x:417.725,y:254.475}},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_1235},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_945,p:{x:515.275,y:254.475}},{t:this.shape_1231,p:{x:525.55,y:255.7}},{t:this.shape_1230},{t:this.shape_935,p:{x:547.775,y:254.475}},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_877,p:{x:427.575,y:276.575}},{t:this.shape_1221,p:{x:362.875,y:298.975}},{t:this.shape_1220,p:{x:373.45,y:298.775}},{t:this.shape_1219,p:{x:362.625,y:385.175}},{t:this.shape_1218,p:{x:373.45,y:385.175}},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_965,p:{x:590.425,y:385.975}},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_932,p:{x:623.625,y:384.075}},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_951,p:{x:763.95,y:379.95}},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_902,p:{x:829.525,y:384.075}},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_940,p:{x:883.15,y:379.95}},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_888,p:{x:959.575,y:384.075}},{t:this.shape_934,p:{x:969.725,y:385.975}},{t:this.shape_1178},{t:this.shape_883,p:{x:1002.925,y:384.075}},{t:this.shape_931,p:{x:1012.75,y:384.575}},{t:this.shape_1177},{t:this.shape_929,p:{x:1056.425,y:385.975}},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157,p:{x:568.8,y:431.725}},{t:this.shape_1156,p:{x:362.625,y:516.05}},{t:this.shape_1155,p:{x:373.45,y:516.05}},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047}]},4).to({state:[{t:this.shape_1608},{t:this.shape_1220,p:{x:375.225,y:174.2}},{t:this.shape_1607},{t:this.shape_1606},{t:this.shape_1605},{t:this.shape_1604},{t:this.shape_1603},{t:this.shape_1602},{t:this.shape_1601},{t:this.shape_1600},{t:this.shape_1599},{t:this.shape_1598},{t:this.shape_1597},{t:this.shape_1596},{t:this.shape_1595},{t:this.shape_1231,p:{x:570.65,y:174.3}},{t:this.shape_1594},{t:this.shape_1593},{t:this.shape_1592},{t:this.shape_1591},{t:this.shape_1590},{t:this.shape_1589},{t:this.shape_1588},{t:this.shape_1587},{t:this.shape_1586},{t:this.shape_1585},{t:this.shape_1584},{t:this.shape_1583},{t:this.shape_1582},{t:this.shape_1581},{t:this.shape_1580},{t:this.shape_1579},{t:this.shape_1578},{t:this.shape_1577},{t:this.shape_1576},{t:this.shape_1575},{t:this.shape_1574},{t:this.shape_1573},{t:this.shape_1572},{t:this.shape_1571},{t:this.shape_1570},{t:this.shape_1569},{t:this.shape_1568},{t:this.shape_1567},{t:this.shape_1566},{t:this.shape_1565},{t:this.shape_1564},{t:this.shape_1563},{t:this.shape_1562},{t:this.shape_1561},{t:this.shape_1560},{t:this.shape_1559},{t:this.shape_1241,p:{x:364.625,y:260.775}},{t:this.shape_1558},{t:this.shape_1557},{t:this.shape_1556},{t:this.shape_1555},{t:this.shape_1554},{t:this.shape_1553},{t:this.shape_1552},{t:this.shape_1221,p:{x:364.625,y:282.375}},{t:this.shape_1219,p:{x:375.225,y:282.2}},{t:this.shape_1551},{t:this.shape_1218,p:{x:375.225,y:325.4}},{t:this.shape_1550},{t:this.shape_1549},{t:this.shape_1548},{t:this.shape_1547},{t:this.shape_1546},{t:this.shape_1545},{t:this.shape_1544},{t:this.shape_1543},{t:this.shape_1542},{t:this.shape_1541},{t:this.shape_1540},{t:this.shape_1539},{t:this.shape_1538},{t:this.shape_1537},{t:this.shape_1536},{t:this.shape_1535},{t:this.shape_1534},{t:this.shape_1533},{t:this.shape_1532},{t:this.shape_1531},{t:this.shape_1530},{t:this.shape_1529},{t:this.shape_1528},{t:this.shape_1527},{t:this.shape_1526},{t:this.shape_1525},{t:this.shape_1524},{t:this.shape_1523},{t:this.shape_1522},{t:this.shape_1521},{t:this.shape_1520},{t:this.shape_1519},{t:this.shape_1518},{t:this.shape_1517},{t:this.shape_1516},{t:this.shape_1515},{t:this.shape_1514},{t:this.shape_1513},{t:this.shape_1512},{t:this.shape_1511},{t:this.shape_1510},{t:this.shape_1509},{t:this.shape_1508},{t:this.shape_1507},{t:this.shape_1506},{t:this.shape_1505},{t:this.shape_1504},{t:this.shape_1503},{t:this.shape_1502},{t:this.shape_1501},{t:this.shape_1500},{t:this.shape_1499},{t:this.shape_1498},{t:this.shape_1497},{t:this.shape_1496},{t:this.shape_1495},{t:this.shape_1494},{t:this.shape_1493},{t:this.shape_1492},{t:this.shape_1491},{t:this.shape_1490},{t:this.shape_1489},{t:this.shape_1488},{t:this.shape_1487},{t:this.shape_1486},{t:this.shape_1485},{t:this.shape_1484},{t:this.shape_1483},{t:this.shape_1482},{t:this.shape_1481},{t:this.shape_1480},{t:this.shape_1479},{t:this.shape_1478},{t:this.shape_1477},{t:this.shape_1157,p:{x:569.9,y:392.275}},{t:this.shape_1476},{t:this.shape_1475},{t:this.shape_1474},{t:this.shape_1473},{t:this.shape_1472},{t:this.shape_1471},{t:this.shape_1470},{t:this.shape_1469},{t:this.shape_1468},{t:this.shape_1467},{t:this.shape_1466},{t:this.shape_1156,p:{x:398.225,y:476.6}},{t:this.shape_1465},{t:this.shape_1464},{t:this.shape_1463},{t:this.shape_1462},{t:this.shape_1461},{t:this.shape_1460},{t:this.shape_1459},{t:this.shape_1458},{t:this.shape_1457},{t:this.shape_1456},{t:this.shape_1455},{t:this.shape_1454},{t:this.shape_1453},{t:this.shape_1452},{t:this.shape_1451},{t:this.shape_934,p:{x:626.025,y:477.425}},{t:this.shape_1450},{t:this.shape_1449},{t:this.shape_1448},{t:this.shape_1447},{t:this.shape_1446},{t:this.shape_1445},{t:this.shape_1444},{t:this.shape_1443},{t:this.shape_1442},{t:this.shape_1441},{t:this.shape_1440},{t:this.shape_1439},{t:this.shape_1438},{t:this.shape_1437},{t:this.shape_1436},{t:this.shape_1435},{t:this.shape_1434},{t:this.shape_1433},{t:this.shape_1432},{t:this.shape_1431},{t:this.shape_1430},{t:this.shape_1429},{t:this.shape_1428},{t:this.shape_1427},{t:this.shape_1426},{t:this.shape_1425},{t:this.shape_1424},{t:this.shape_1423},{t:this.shape_1422},{t:this.shape_1421},{t:this.shape_929,p:{x:1005.325,y:477.425}},{t:this.shape_1420},{t:this.shape_1419},{t:this.shape_1418},{t:this.shape_1417},{t:this.shape_1416},{t:this.shape_1415},{t:this.shape_1414},{t:this.shape_1413},{t:this.shape_1412},{t:this.shape_1411},{t:this.shape_1410},{t:this.shape_1409},{t:this.shape_1408},{t:this.shape_1407},{t:this.shape_1406},{t:this.shape_1405},{t:this.shape_1404},{t:this.shape_1403},{t:this.shape_1402},{t:this.shape_1401},{t:this.shape_1400},{t:this.shape_1399},{t:this.shape_1398},{t:this.shape_1397},{t:this.shape_1396},{t:this.shape_1395},{t:this.shape_1155,p:{x:397.225,y:584.6}},{t:this.shape_1394},{t:this.shape_1393},{t:this.shape_1392},{t:this.shape_1391},{t:this.shape_1390},{t:this.shape_1389},{t:this.shape_1388},{t:this.shape_1387},{t:this.shape_1386},{t:this.shape_1385},{t:this.shape_1384},{t:this.shape_1383},{t:this.shape_1382},{t:this.shape_1381},{t:this.shape_1380},{t:this.shape_1379},{t:this.shape_1378},{t:this.shape_1377},{t:this.shape_1376},{t:this.shape_1375},{t:this.shape_1374},{t:this.shape_1373},{t:this.shape_1372},{t:this.shape_1371},{t:this.shape_1370},{t:this.shape_1369},{t:this.shape_1368},{t:this.shape_1367},{t:this.shape_1366},{t:this.shape_1365},{t:this.shape_1364},{t:this.shape_1363},{t:this.shape_1362},{t:this.shape_1361},{t:this.shape_1360},{t:this.shape_1359},{t:this.shape_1358},{t:this.shape_1357},{t:this.shape_1356},{t:this.shape_1355},{t:this.shape_1354},{t:this.shape_1353},{t:this.shape_1352},{t:this.shape_1351},{t:this.shape_1350},{t:this.shape_1349},{t:this.shape_1348},{t:this.shape_1347},{t:this.shape_1346},{t:this.shape_1345},{t:this.shape_861,p:{x:472.525,y:622.625}},{t:this.shape_1344},{t:this.shape_1343},{t:this.shape_1342},{t:this.shape_1341},{t:this.shape_1340},{t:this.shape_1339},{t:this.shape_1338},{t:this.shape_1337},{t:this.shape_1336},{t:this.shape_1335},{t:this.shape_1334},{t:this.shape_1333},{t:this.shape_1332},{t:this.shape_1331},{t:this.shape_1330},{t:this.shape_1329},{t:this.shape_1328},{t:this.shape_1327},{t:this.shape_1326},{t:this.shape_1325},{t:this.shape_1324},{t:this.shape_1323},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_1320},{t:this.shape_1319},{t:this.shape_1318},{t:this.shape_1317},{t:this.shape_1316},{t:this.shape_1315},{t:this.shape_1314},{t:this.shape_1313},{t:this.shape_1312},{t:this.shape_1311},{t:this.shape_1310},{t:this.shape_1309},{t:this.shape_1308},{t:this.shape_823,p:{x:949.375,y:622.625}},{t:this.shape_1307},{t:this.shape_1306},{t:this.shape_1305},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_1287},{t:this.shape_1286},{t:this.shape_1285},{t:this.shape_1284},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_1281},{t:this.shape_1280}]},4).wait(4));

	// output_text
	this.shape_1609 = new cjs.Shape();
	this.shape_1609.graphics.f("#FFFFFF").s().p("AgSBQIAAgMIAVAAIAAiHIgVAAIAAgMIAlAAIAACfg");
	this.shape_1609.setTransform(556.525,814.275);

	this.shape_1610 = new cjs.Shape();
	this.shape_1610.graphics.f("#FFFFFF").s().p("AgSAyIgRgEIAAgRQAKAFAHACQAIACAIAAQAJAAAHgEQAFgEAAgJQAAgLgUgEIgBAAIgGgCQgOgCgGgGQgHgGAAgLQAAgOAKgIQAKgHAQgBIAPACIAPAEIAAAQQgGgDgIgDQgHgCgHAAQgKAAgGADQgFAEAAAHQAAAIAEACQADAEAQACIAHABQALACAHAHQAGAGAAALQAAAPgLAJQgKAHgRABIgQgCg");
	this.shape_1610.setTransform(546.7,815.9);

	this.shape_1611 = new cjs.Shape();
	this.shape_1611.graphics.f("#FFFFFF").s().p("AAeAyIAAg3QABgUgDgGQgCgFgGAAQgHAAgDAGQgCAGAAATIAAA3IgOAAIAAg3QgBgWgCgEQgCgFgHAAQgGAAgDAGQgDAGAAATIAAA3IgOAAIAAhhIAOAAIAAAIQAEgFAEgDQAFgCAFAAQAGAAAFADQAEADACAGQADgGAEgDQAFgDAGAAQANAAAEAJQAFAJAAAZIAAA4g");
	this.shape_1611.setTransform(535.85,815.775);

	this.shape_1612 = new cjs.Shape();
	this.shape_1612.graphics.f("#FFFFFF").s().p("AgfA0QgLgQAAgkQAAggANgRQANgSAXAAQAHAAAGABIANAFIAAAPIgMgEQgGgCgHAAQgQAAgJAMQgIAOgBAYQAFgIAIgFQAHgFAIAAQATAAALALQALAMAAAUQgBAVgKANQgKALgVAAQgWAAgKgQgAgQABQgHAJABANQgBAOAHAJQAHAJAKAAQAMgBAGgHQAGgIAAgQQAAgPgGgHQgGgHgMAAQgLAAgGAHg");
	this.shape_1612.setTransform(525,814.25);

	this.shape_1613 = new cjs.Shape();
	this.shape_1613.graphics.f("#FFFFFF").s().p("AgWBDQgKgCgIgEIAAgRQAKAFAHACQAKACAIAAQANAAAIgGQAIgHAAgMQAAgMgIgGQgHgHgNAAIgOAAIAAgOIAOAAQALAAAHgFQAHgFAAgKQAAgKgHgGQgGgFgLAAQgIAAgIACQgJABgJAEIAAgQIAigGQASAAAMAJQALALAAAPQAAALgGAIQgGAGgLADQAMAEAHAHQAHAJAAAOQAAASgMAKQgLAKgWAAg");
	this.shape_1613.setTransform(514.075,814.25);

	this.shape_1614 = new cjs.Shape();
	this.shape_1614.graphics.f("#FFFFFF").s().p("AgnBDIAAgPIAtgxQAJgJADgIQADgGAAgHQAAgLgGgGQgHgHgKAAQgIAAgJADIgSAJIAAgSQAKgFAHgBQAKgDAIAAQARAAAMALQAMAKAAAQQAAAKgEAHQgEAKgJAIIgOAQIgbAeIA7AAIAAAPg");
	this.shape_1614.setTransform(503.2,814.125);

	this.shape_1615 = new cjs.Shape();
	this.shape_1615.graphics.f("#FFFFFF").s().p("AAVAyIAAg8QAAgMgEgHQgFgGgKAAQgKAAgHAIQgFAIAAAPIAAA2IgQAAIAAhhIAQAAIAAAPQAEgJAHgEQAIgEAJAAQAPAAAHAKQAHAKAAATIAAA8g");
	this.shape_1615.setTransform(481.7,815.775);

	this.shape_1616 = new cjs.Shape();
	this.shape_1616.graphics.f("#FFFFFF").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1616.setTransform(471.475,814);

	this.shape_1617 = new cjs.Shape();
	this.shape_1617.graphics.f("#FFFFFF").s().p("AgdA4QgKgPAAgXQAAgXAKgOQAKgOASAAQAIABAHADQAGADAEAJIAAg0IAQAAIAACIIgQAAIAAgMQgEAHgHAEQgGAEgIAAQgSAAgKgOgAgQgJQgGAJAAASQAAATAGAKQAGAJAKAAQAMAAAGgJQAGgKAAgTQAAgSgGgJQgGgKgMAAQgKAAgGAKg");
	this.shape_1617.setTransform(448.825,814.1);

	this.shape_1618 = new cjs.Shape();
	this.shape_1618.graphics.f("#FFFFFF").s().p("AgeAmQgNgOAAgYQAAgWANgOQAMgOAVgBQATAAAKANQALAMABATIAAAHIhFAAIAAABQgBATAIAJQAJAJAOAAQAHAAAJgCQAJgCAJgGIAAAQIgRAGIgRACQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgLgGgHQgGgHgMAAQgLAAgHAIg");
	this.shape_1618.setTransform(438.325,815.9);

	this.shape_1619 = new cjs.Shape();
	this.shape_1619.graphics.f("#FFFFFF").s().p("AAVBEIAAg9QABgLgFgHQgFgGgKAAQgKAAgHAIQgFAIgBAOIAAA3IgPAAIAAiHIAPAAIAAA1QAFgJAIgEQAGgEAKAAQAPAAAHAKQAHAKAAASIAAA9g");
	this.shape_1619.setTransform(427.5,813.975);

	this.shape_1620 = new cjs.Shape();
	this.shape_1620.graphics.f("#FFFFFF").s().p("AgSAyIgRgEIAAgRQAKAFAHACQAIACAIAAQAKAAAGgEQAFgEAAgJQAAgLgUgEIgBAAIgGgCQgOgCgGgGQgHgGAAgLQAAgOAKgIQAKgHAQgBQAJABAGABIAPAEIAAAQQgGgDgIgDQgGgCgIAAQgLAAgEADQgGAEAAAHQAAAIAEACQADAEAQACIAHABQAKACAIAHQAGAHAAAKQAAAPgLAJQgKAHgRABg");
	this.shape_1620.setTransform(416.65,815.9);

	this.shape_1621 = new cjs.Shape();
	this.shape_1621.graphics.f("#FFFFFF").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1621.setTransform(406.475,814);

	this.shape_1622 = new cjs.Shape();
	this.shape_1622.graphics.f("#FFFFFF").s().p("AAVAyIAAg8QAAgNgEgGQgFgGgKAAQgKAAgHAIQgFAIgBAPIAAA2IgPAAIAAhhIAPAAIAAAPQAFgJAHgEQAIgEAJAAQAPAAAHAKQAHAKABATIAAA8g");
	this.shape_1622.setTransform(395,815.775);

	this.shape_1623 = new cjs.Shape();
	this.shape_1623.graphics.f("#FFFFFF").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1623.setTransform(384.775,814);

	this.shape_1624 = new cjs.Shape();
	this.shape_1624.graphics.f("#FFFFFF").s().p("AgmBCIAAiDIBNAAIAAAQIg7AAIAAAjIA1AAIAAAOIg1AAIAABCg");
	this.shape_1624.setTransform(373.75,814.25);

	this.shape_1625 = new cjs.Shape();
	this.shape_1625.graphics.f("#FFFFFF").s().p("AgSBQIAAifIAlAAIAAAMIgVAAIAACHIAVAAIAAAMg");
	this.shape_1625.setTransform(363.825,814.275);

	this.shape_1626 = new cjs.Shape();
	this.shape_1626.graphics.f("#FFFFFF").s().p("AgYBCQgJgCgHgDIAAgSQAIAEAJADQAIACAIAAQAOAAAIgIQAIgHAAgPQAAgOgIgIQgIgGgOAAIgOABQgHACgGADIAAhCIBBAAIAAAPIgxAAIAAAgIAIgCIAHAAQAUAAAMAMQAMALAAAUQAAAVgNAMQgNAMgUAAIgTgBg");
	this.shape_1626.setTransform(828.325,792.775);

	this.shape_1627 = new cjs.Shape();
	this.shape_1627.graphics.f("#FFFFFF").s().p("AgNAxIAAggIAbAAIAAAggAgNgQIAAggIAbAAIAAAgg");
	this.shape_1627.setTransform(806.475,794.3);

	this.shape_1628 = new cjs.Shape();
	this.shape_1628.graphics.f("#FFFFFF").s().p("AgeAmQgNgOAAgYQAAgWANgOQAMgOAUgBQATAAALANQAMANAAASIAAAHIhFAAIAAABQgBAUAJAIQAIAJAOAAQAGAAAKgCQAJgCAJgGIAAAQIgSAGIgQACQgWAAgNgOgAgQgdQgIAHAAAKIA0AAQgBgKgHgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1628.setTransform(795.95,794.3);

	this.shape_1629 = new cjs.Shape();
	this.shape_1629.graphics.f("#FFFFFF").s().p("AgdApQgIgKAAgUIAAg8IARAAIAAA8QAAANAEAGQAFAGAKAAQAKAAAGgIQAGgHAAgQIAAg2IARAAIAABhIgRAAIAAgPQgFAJgGAEQgHAEgKAAQgPAAgHgJg");
	this.shape_1629.setTransform(785.125,794.425);

	this.shape_1630 = new cjs.Shape();
	this.shape_1630.graphics.f("#FFFFFF").s().p("AASBFQgOgBgHgIQgJgLABgQIAAhYIgaAAIAAgMIApAAIAABkQAAAMAEAFQAEAFAHAAIATAAIAAAOg");
	this.shape_1630.setTransform(774.75,792.35);

	this.shape_1631 = new cjs.Shape();
	this.shape_1631.graphics.f("#FFFFFF").s().p("AgfArQgJgIAAgPQAAgPALgJQAMgIAUAAIAVAAIAAgDQAAgLgGgGQgGgFgMAAQgHAAgJADQgIABgJAGIAAgRIASgFIAPgCQANABAHADQAJAEAFAHQADADACAIQACAGAAANIAAA3IgRAAIAAgOQgFAIgIAEQgGAEgMABQgPAAgJgJgAgQAEQgIAGAAAKQAAAIAGAGQAFAEAKAAQAMAAAIgJQAHgKAAgQIAAgDIgUAAQgNAAgHAEg");
	this.shape_1631.setTransform(763.225,794.3);

	this.shape_1632 = new cjs.Shape();
	this.shape_1632.graphics.f("#FFFFFF").s().p("AgKAxIgjhhIARAAIAcBSIAdhSIARAAIgjBhg");
	this.shape_1632.setTransform(752.55,794.275);

	this.shape_1633 = new cjs.Shape();
	this.shape_1633.graphics.f("#FFFFFF").s().p("AgeAmQgNgNAAgZQAAgWANgOQAMgOAVgBQATAAAKANQALANABASIAAAHIhFAAIAAABQgBATAIAJQAJAJAOAAQAHAAAJgCQAJgCAJgGIAAAQIgRAGIgRACQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1633.setTransform(730.925,794.3);

	this.shape_1634 = new cjs.Shape();
	this.shape_1634.graphics.f("#FFFFFF").s().p("AAVBEIAAg9QAAgMgEgGQgFgGgKAAQgKAAgHAIQgFAIAAAOIAAA3IgQAAIAAiHIAQAAIAAA1QAEgJAIgEQAHgEAJAAQAPAAAHAKQAHAKAAASIAAA9g");
	this.shape_1634.setTransform(720.1,792.375);

	this.shape_1635 = new cjs.Shape();
	this.shape_1635.graphics.f("#FFFFFF").s().p("AAUA/QgSAAgHgHQgHgIAAgRIAAg0IgbAAIAAgOIAbAAIAAgbIAPAAIAAAbIAlAAIAAAOIglAAIAAA0QAAALAEAEQAEAEALABIASAAIAAAMg");
	this.shape_1635.setTransform(708.9,792.9);

	this.shape_1636 = new cjs.Shape();
	this.shape_1636.graphics.f("#FFFFFF").s().p("AgSAyIgRgEIAAgRIARAHQAIACAIAAQAJAAAHgEQAGgEAAgJQAAgLgVgEIgBAAIgGgCQgNgBgHgHQgHgHAAgKQAAgOAKgIQAJgHARgBQAIABAIABQAKACAEACIAAAQQgHgEgHgCQgGgCgIAAQgLAAgFADQgFAFAAAGQAAAHAEADQAEAEAPACIAGABQAMACAHAHQAGAHAAAKQAAAPgKAJQgKAHgSABg");
	this.shape_1636.setTransform(687.575,794.3);

	this.shape_1637 = new cjs.Shape();
	this.shape_1637.graphics.f("#FFFFFF").s().p("AgdA4QgKgOAAgYQAAgYAKgNQAKgOASAAQAIABAHADQAGADAEAJIAAg0IARAAIAACIIgRAAIAAgMQgEAHgGAEQgHAEgIAAQgSAAgKgOgAgRgJQgFAJAAASQAAATAFAJQAHAKAKAAQAMAAAGgKQAGgJAAgTQAAgSgGgJQgHgKgLAAQgKAAgHAKg");
	this.shape_1637.setTransform(676.4,792.5);

	this.shape_1638 = new cjs.Shape();
	this.shape_1638.graphics.f("#FFFFFF").s().p("AASBFQgPgBgGgIQgJgKABgRIAAhYIgaAAIAAgMIApAAIAABkQAAALADAGQAFAFAHAAIAUAAIAAAOg");
	this.shape_1638.setTransform(666.4,792.35);

	this.shape_1639 = new cjs.Shape();
	this.shape_1639.graphics.f("#FFFFFF").s().p("AgeAmQgLgNAAgZQAAgZALgMQAKgNAUgBQAVABAKANQALAMAAAZQAAAZgLANQgKAOgVAAQgUAAgKgOgAgSgbQgGAKAAARQAAASAGAKQAHAKALAAQAMAAAHgKQAGgJAAgTQAAgSgGgJQgHgKgMAAQgLAAgHAKg");
	this.shape_1639.setTransform(655.025,794.3);

	this.shape_1640 = new cjs.Shape();
	this.shape_1640.graphics.f("#FFFFFF").s().p("AAWBEIAAg9QgBgLgFgHQgEgGgKAAQgKAAgHAIQgFAIAAAOIAAA3IgRAAIAAiHIARAAIAAA1QAEgJAHgEQAIgEAIAAQAQAAAHAKQAIAKgBASIAAA9g");
	this.shape_1640.setTransform(644.25,792.375);

	this.shape_1641 = new cjs.Shape();
	this.shape_1641.graphics.f("#FFFFFF").s().p("AgPAaIAJghIAAgSIAVAAIAAASIgQAhg");
	this.shape_1641.setTransform(622.7,788.125);

	this.shape_1642 = new cjs.Shape();
	this.shape_1642.graphics.f("#FFFFFF").s().p("AgeAmQgNgNAAgZQAAgWANgOQAMgOAVgBQASAAALANQALANABASIAAAHIhFAAIAAABQgBATAIAJQAJAJAOAAQAHAAAJgCQAJgCAJgGIAAAQQgJAEgJACIgQACQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1642.setTransform(611.725,794.3);

	this.shape_1643 = new cjs.Shape();
	this.shape_1643.graphics.f("#FFFFFF").s().p("AASBFQgOgBgIgIQgIgLAAgQIAAhYIgZAAIAAgMIApAAIAABkQAAAMAEAFQAEAFAHAAIATAAIAAAOg");
	this.shape_1643.setTransform(601.375,792.35);

	this.shape_1644 = new cjs.Shape();
	this.shape_1644.graphics.f("#FFFFFF").s().p("AgNBCQgGgEgEgHIAAAMIgQAAIAAiIIAQAAIAAA0QADgHAHgFQAHgDAIgBQASAAAKAOQAKAOAAAXQAAAXgKAPQgKAOgSAAQgIAAgHgEgAgRgJQgGAJAAASQAAATAGAJQAGAKALAAQALAAAGgKQAGgJAAgTQAAgSgGgJQgGgKgLAAQgLAAgGAKg");
	this.shape_1644.setTransform(590.325,792.5);

	this.shape_1645 = new cjs.Shape();
	this.shape_1645.graphics.f("#FFFFFF").s().p("AgfArQgJgIAAgPQAAgPALgJQAMgIAUAAIAWAAIAAgDQgBgLgFgGQgHgFgMAAQgHAAgJADQgIABgIAGIAAgRIARgFIAPgCQAMABAJADQAJAEAFAHQACADACAIQACAGAAANIAAA3IgQAAIAAgOQgGAJgIADQgGAEgMABQgPAAgJgJgAgQAEQgHAGAAAKQAAAIAFAGQAGAEAJAAQAMAAAIgJQAHgKABgQIAAgDIgVAAQgMAAgIAEg");
	this.shape_1645.setTransform(578.975,794.3);

	this.shape_1646 = new cjs.Shape();
	this.shape_1646.graphics.f("#FFFFFF").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1646.setTransform(569.025,792.4);

	this.shape_1647 = new cjs.Shape();
	this.shape_1647.graphics.f("#FFFFFF").s().p("AgiAyIAAhhIARAAIAAATQAEgLAIgFQAHgFAMAAQAGAAAFABQAFACAFADIAAAQQgFgDgGgDIgLgBQgPAAgHAJQgIAJAAARIAAAxg");
	this.shape_1647.setTransform(558.725,794.175);

	this.shape_1648 = new cjs.Shape();
	this.shape_1648.graphics.f("#FFFFFF").s().p("AgfArQgJgIAAgPQAAgPALgJQAMgIAUAAIAVAAIAAgDQAAgLgGgGQgFgFgNAAQgGAAgKADQgIABgIAGIAAgRQAKgEAHgBIAPgCQAMABAJADQAIAEAGAHQACADACAIQACAGAAANIAAA3IgRAAIAAgOQgFAJgIADQgGAEgMABQgPAAgJgJgAgQAEQgIAGAAAKQAAAIAGAGQAFAEAKAAQAMAAAIgJQAHgKAAgQIAAgDIgUAAQgNAAgHAEg");
	this.shape_1648.setTransform(546.475,794.3);

	this.shape_1649 = new cjs.Shape();
	this.shape_1649.graphics.f("#FFFFFF").s().p("AgKBCIgmiDIASAAIAeBzIAfhzIASAAIgmCDg");
	this.shape_1649.setTransform(535.825,792.65);

	this.shape_1650 = new cjs.Shape();
	this.shape_1650.graphics.f("#FFFFFF").s().p("AgmBEIAAgOIAJAAQAHAAAEgEQAFgEAGgRIgmhgIARAAIAcBMIAdhMIARAAIgvB5QgEAHgGAEQgFADgJAAg");
	this.shape_1650.setTransform(525.1,796.15);

	this.shape_1651 = new cjs.Shape();
	this.shape_1651.graphics.f("#FFFFFF").s().p("AAeAyIAAg3QAAgVgCgFQgCgFgHAAQgHAAgCAGQgDAFAAAUIAAA3IgOAAIAAg3QAAgVgCgFQgCgFgHAAQgHAAgCAGQgDAGABATIAAA3IgPAAIAAhhIAPAAIAAAIQACgEAFgEQAEgCAGAAQAGAAAFADQAEADACAGQACgGAGgDQAEgDAHAAQAMAAAEAJQAFAIAAAaIAAA4g");
	this.shape_1651.setTransform(514.2,794.175);

	this.shape_1652 = new cjs.Shape();
	this.shape_1652.graphics.f("#FFFFFF").s().p("AgOAaIAAgSIAQghIAOAAIgKAhIAAASg");
	this.shape_1652.setTransform(503.5,788.125);

	this.shape_1653 = new cjs.Shape();
	this.shape_1653.graphics.f("#FFFFFF").s().p("AgeAmQgNgOAAgYQAAgWANgOQAMgOAVgBQATAAAKANQALAMABATIAAAHIhFAAIAAABQgBATAIAJQAJAJAOAAQAHAAAJgCQAJgCAJgGIAAAQIgRAGIgRACQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1653.setTransform(481.675,794.3);

	this.shape_1654 = new cjs.Shape();
	this.shape_1654.graphics.f("#FFFFFF").s().p("AASBFQgOgBgIgIQgHgKAAgRIAAhYIgaAAIAAgMIApAAIAABkQAAALAEAGQAEAFAIAAIASAAIAAAOg");
	this.shape_1654.setTransform(471.325,792.35);

	this.shape_1655 = new cjs.Shape();
	this.shape_1655.graphics.f("#FFFFFF").s().p("AgMBCQgHgEgEgHIAAAMIgQAAIAAiIIAQAAIAAA0QADgHAHgFQAHgDAIgBQASAAAKAOQAKAOAAAXQAAAXgKAPQgKAOgSAAQgIAAgGgEgAgRgJQgGAJAAASQAAATAGAJQAGAKALAAQALAAAGgKQAGgJAAgTQAAgSgGgJQgGgKgLAAQgLAAgGAKg");
	this.shape_1655.setTransform(460.275,792.5);

	this.shape_1656 = new cjs.Shape();
	this.shape_1656.graphics.f("#FFFFFF").s().p("AgfArQgJgIAAgPQAAgPAMgJQALgIAUAAIAWAAIAAgDQAAgLgGgGQgHgFgMAAQgHAAgJADQgHABgJAGIAAgRIARgFIAPgCQAMABAJADQAJAEAFAHQAEAFAAAGQACAGAAANIAAA3IgQAAIAAgOQgGAIgHAEQgIAEgLABQgPAAgJgJgAgQAEQgHAGAAAKQAAAIAFAGQAGAEAJAAQAMAAAIgJQAIgLAAgPIAAgDIgVAAQgMAAgIAEg");
	this.shape_1656.setTransform(448.925,794.3);

	this.shape_1657 = new cjs.Shape();
	this.shape_1657.graphics.f("#FFFFFF").s().p("AgnBEIAAgMIAgAAIAAhIIgZAAIAAgNIAoAAIAABVIAgAAIAAAMgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_1657.setTransform(438.975,792.4);

	this.shape_1658 = new cjs.Shape();
	this.shape_1658.graphics.f("#FFFFFF").s().p("AgiAyIAAhhIAQAAIAAATQAEgLAJgFQAHgFAMAAQAGAAAFABQAFABAFAEIAAAQIgKgGIgMgBQgPAAgIAJQgIAJAAARIAAAxg");
	this.shape_1658.setTransform(428.7,794.175);

	this.shape_1659 = new cjs.Shape();
	this.shape_1659.graphics.f("#FFFFFF").s().p("AgfArQgJgIAAgPQAAgPALgJQAMgIAUAAIAVAAIAAgDQAAgLgFgGQgHgFgMAAQgHAAgJADQgIABgIAGIAAgRIARgFIAPgCQAMABAJADQAJAEAFAHQACADACAIQACAGAAANIAAA3IgRAAIAAgOQgEAIgJAEQgGAEgMABQgPAAgJgJgAgQAEQgHAGAAAKQAAAIAFAGQAFAEAKAAQAMAAAIgJQAHgKAAgQIAAgDIgUAAQgNAAgHAEg");
	this.shape_1659.setTransform(416.425,794.3);

	this.shape_1660 = new cjs.Shape();
	this.shape_1660.graphics.f("#FFFFFF").s().p("AgJAxIgjhhIAQAAIAcBSIAdhSIAQAAIgjBhg");
	this.shape_1660.setTransform(405.775,794.275);

	this.shape_1661 = new cjs.Shape();
	this.shape_1661.graphics.f("#FFFFFF").s().p("AgeAmQgNgOAAgYQAAgWANgOQAMgOAUgBQATAAALANQAMANAAASIAAAHIhGAAIAAABQAAATAIAJQAJAJAOAAQAHAAAKgCQAIgCAKgGIAAAQIgSAGIgRACQgWAAgNgOgAgRgdQgGAHgCAKIA0AAQgBgKgGgIQgGgHgMAAQgLAAgIAIg");
	this.shape_1661.setTransform(384.15,794.3);

	this.shape_1662 = new cjs.Shape();
	this.shape_1662.graphics.f("#FFFFFF").s().p("AAVBEIAAg9QAAgLgEgHQgFgGgKAAQgKAAgGAIQgGAIAAAOIAAA3IgRAAIAAiHIARAAIAAA1QAEgJAHgEQAIgEAJAAQAPAAAHAKQAIAKAAASIAAA9g");
	this.shape_1662.setTransform(373.325,792.375);

	this.shape_1663 = new cjs.Shape();
	this.shape_1663.graphics.f("#FFFFFF").s().p("AgIBCIAAhzIgpAAIAAgQIBjAAIAAAQIgpAAIAABzg");
	this.shape_1663.setTransform(362.425,792.65);

	this.shape_1664 = new cjs.Shape();
	this.shape_1664.graphics.f("#FFFFFF").s().p("AgSBQIAAgNIAUAAIAAiGIgUAAIAAgMIAlAAIAACfg");
	this.shape_1664.setTransform(557.625,814.325);

	this.shape_1665 = new cjs.Shape();
	this.shape_1665.graphics.f("#FFFFFF").s().p("AgSAyIgRgEIAAgRIARAHQAKACAGAAQAKAAAGgEQAGgFAAgHQAAgMgVgEIgBAAIgGgBQgOgDgGgGQgGgGAAgLQAAgOAJgIQAKgIAQAAQAIAAAIACIAOAEIAAAQIgOgGIgOgCQgKAAgGADQgFAEAAAHQAAAGAEAEQAEADAPADIAHACQAMACAGAGQAGAHAAALQAAAOgKAIQgLAJgRAAIgQgCg");
	this.shape_1665.setTransform(547.775,815.925);

	this.shape_1666 = new cjs.Shape();
	this.shape_1666.graphics.f("#FFFFFF").s().p("AAfAzIAAg4QAAgUgDgGQgCgFgHAAQgGAAgDAGQgCAEgBAVIAAA4IgOAAIAAg4QAAgUgCgGQgCgFgHAAQgGAAgDAGQgDAFABAUIAAA4IgPAAIAAhiIAPAAIAAAJQADgHAEgBQAEgEAGAAQAGABAFADQADACADAHQACgGAGgDQAEgEAHAAQAMABAEAIQAFAKAAAZIAAA5g");
	this.shape_1666.setTransform(536.95,815.8);

	this.shape_1667 = new cjs.Shape();
	this.shape_1667.graphics.f("#FFFFFF").s().p("AgXBCIAth0Ig+AAIAAgPIBRAAIAAAIIgtB7g");
	this.shape_1667.setTransform(526,814.275);

	this.shape_1668 = new cjs.Shape();
	this.shape_1668.graphics.f("#FFFFFF").s().p("AggBCIAAgQIAbAAIAAhhIghAQIAAgSIAhgQIARAAIAABzIAbAAIAAAQg");
	this.shape_1668.setTransform(515.525,814.3);

	this.shape_1669 = new cjs.Shape();
	this.shape_1669.graphics.f("#FFFFFF").s().p("AgnBDIAAgPIAtgyQAIgJADgHQAEgGAAgIQgBgLgFgGQgIgGgKAAQgIAAgIADQgKADgJAGIAAgSQAIgEAKgDQAIgCAJAAQATAAALAKQAMALAAAQQAAAIgEAJQgCAGgKAMIgrAuIA8AAIAAAPg");
	this.shape_1669.setTransform(504.3,814.175);

	this.shape_1670 = new cjs.Shape();
	this.shape_1670.graphics.f("#FFFFFF").s().p("AAVAzIAAg8QAAgOgEgGQgFgGgKAAQgKgBgGAJQgGAIAAAOIAAA4IgRAAIAAhiIARAAIAAAOQADgHAIgFQAIgFAJAAQAPAAAHALQAIAJAAAVIAAA8g");
	this.shape_1670.setTransform(482.775,815.8);

	this.shape_1671 = new cjs.Shape();
	this.shape_1671.graphics.f("#FFFFFF").s().p("AgdA4QgLgOAAgYQAAgXALgOQALgOARAAQAIAAAGAEQAHAEAFAHIAAgzIAPAAIAACIIgPAAIAAgMQgFAHgHAEQgGAEgIAAQgRAAgLgOgAgRgJQgFAJgBASQABATAFAJQAGAKALAAQAMAAAGgKQAHgJAAgTQAAgSgHgJQgGgKgMAAQgLAAgGAKg");
	this.shape_1671.setTransform(449.9,814.125);

	this.shape_1672 = new cjs.Shape();
	this.shape_1672.graphics.f("#FFFFFF").s().p("AgeAmQgNgNAAgZQAAgXANgOQAMgOAUAAQATAAALANQALANABASIAAAHIhFAAIAAAAQgBAUAIAJQAIAJAPAAQAJAAAHgDIASgHIAAAQQgKAEgIACQgHACgJAAQgWAAgNgOgAgQgdQgIAHgBAKIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1672.setTransform(439.425,815.925);

	this.shape_1673 = new cjs.Shape();
	this.shape_1673.graphics.f("#FFFFFF").s().p("AAWBFIAAg9QgBgMgFgHQgEgGgKAAQgKgBgGAJQgHAIABANIAAA5IgRAAIAAiJIARAAIAAA1QAEgIAHgEQAHgFAJAAQAQAAAHALQAIAJgBAUIAAA9g");
	this.shape_1673.setTransform(428.6,814);

	this.shape_1674 = new cjs.Shape();
	this.shape_1674.graphics.f("#FFFFFF").s().p("AgRAyIgSgEIAAgRQAKAFAIACQAIACAHAAQAKAAAFgEQAHgFAAgHQAAgMgVgEIgBAAIgGgBQgPgDgFgGQgHgGABgLQAAgOAJgIQAKgIARAAIAPACIAOAEIAAAQIgOgGIgOgCQgKAAgGADQgGAEABAHQAAAGADAEQAFADAPADIAGACQANACAFAGQAHAHAAALQAAAOgKAIQgLAJgSAAIgOgCg");
	this.shape_1674.setTransform(417.75,815.925);

	this.shape_1675 = new cjs.Shape();
	this.shape_1675.graphics.f("#FFFFFF").s().p("AAVAzIAAg8QAAgOgEgGQgFgGgKAAQgKgBgGAJQgGAIAAAOIAAA4IgRAAIAAhiIARAAIAAAOQADgHAIgFQAIgFAJAAQAPAAAHALQAIAJAAAVIAAA8g");
	this.shape_1675.setTransform(396.075,815.8);

	this.shape_1676 = new cjs.Shape();
	this.shape_1676.graphics.f("#FFFFFF").s().p("AglBCIAAiDIBLAAIAAAPIg6AAIAAAjIA1AAIAAAPIg1AAIAABCg");
	this.shape_1676.setTransform(374.85,814.275);

	this.shape_1677 = new cjs.Shape();
	this.shape_1677.graphics.f("#FFFFFF").s().p("AgSBQIAAifIAlAAIAAAMIgVAAIAACGIAVAAIAAANg");
	this.shape_1677.setTransform(364.9,814.325);

	this.shape_1678 = new cjs.Shape();
	this.shape_1678.graphics.f("#FFFFFF").s().p("AgYBCQgHgBgJgEIAAgSIAQAHQAIACAJAAQAOAAAIgIQAIgIAAgOQAAgOgJgHQgIgHgNAAIgOABIgNAFIAAhCIBBAAIAAAPIgxAAIAAAgIAIgCIAHgBQAUAAAMAMQAMALAAAVQAAAVgNAMQgMAMgVAAg");
	this.shape_1678.setTransform(829.425,792.8);

	this.shape_1679 = new cjs.Shape();
	this.shape_1679.graphics.f("#FFFFFF").s().p("AgNAxIAAggIAaAAIAAAggAgNgRIAAgfIAaAAIAAAfg");
	this.shape_1679.setTransform(807.55,794.325);

	this.shape_1680 = new cjs.Shape();
	this.shape_1680.graphics.f("#FFFFFF").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAVAAQATAAAKANQALAMABATIAAAHIhFAAIAAAAQgBAVAJAIQAIAJAOAAQAJAAAHgDQAIgCAKgFIAAAQQgKAEgHACQgIACgJAAQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgBgKgHgIQgFgHgNAAQgLAAgHAIg");
	this.shape_1680.setTransform(797.025,794.325);

	this.shape_1681 = new cjs.Shape();
	this.shape_1681.graphics.f("#FFFFFF").s().p("AgdAoQgIgJAAgVIAAg8IAQAAIAAA8QAAAOAGAGQAEAGAKABQAKAAAGgJQAHgIgBgPIAAg3IARAAIAABiIgRAAIAAgPQgEAJgHAEQgHAFgJgBQgQAAgHgKg");
	this.shape_1681.setTransform(786.2,794.45);

	this.shape_1682 = new cjs.Shape();
	this.shape_1682.graphics.f("#FFFFFF").s().p("AASBFQgPAAgHgKQgIgIAAgSIAAhYIgaAAIAAgNIApAAIAABlQAAALAEAFQAFAGAIAAIATAAIAAAOg");
	this.shape_1682.setTransform(775.85,792.375);

	this.shape_1683 = new cjs.Shape();
	this.shape_1683.graphics.f("#FFFFFF").s().p("AgfArQgIgIAAgPQgBgQALgIQAMgIAUAAIAWAAIAAgDQAAgLgHgGQgFgFgNAAQgIAAgIACQgIACgIAFIAAgQQAIgDAIgCQAIgCAIAAQAKAAALAEQAIADAFAIQAEAGACAFIABBKIgQAAIAAgOQgGAJgHADQgIAFgLAAQgOAAgKgJgAgRAFQgGAEAAAKQgBAJAGAFQAGAFAJAAQAMAAAHgJQAJgJAAgRIAAgDIgVAAQgNAAgIAFg");
	this.shape_1683.setTransform(764.3,794.325);

	this.shape_1684 = new cjs.Shape();
	this.shape_1684.graphics.f("#FFFFFF").s().p("AgJAxIgjhhIARAAIAbBRIAchRIARAAIgjBhg");
	this.shape_1684.setTransform(753.65,794.325);

	this.shape_1685 = new cjs.Shape();
	this.shape_1685.graphics.f("#FFFFFF").s().p("AgeAmQgNgNAAgZQAAgXANgOQAMgOAUAAQATAAALANQALANABASIAAAHIhFAAIAAAAQgBAUAIAJQAIAJAPAAQAJAAAHgDIASgHIAAAQQgKAEgIACQgHACgJAAQgWAAgNgOgAgRgdQgHAHgBAKIA0AAQAAgKgHgIQgGgHgMAAQgKAAgJAIg");
	this.shape_1685.setTransform(732.025,794.325);

	this.shape_1686 = new cjs.Shape();
	this.shape_1686.graphics.f("#FFFFFF").s().p("AAVBFIAAg9QAAgNgFgGQgEgGgKgBQgKAAgGAJQgHAIABANIAAA5IgRAAIAAiJIARAAIAAA1QAEgIAHgEQAHgFAJAAQAQAAAHALQAIAJAAAUIAAA9g");
	this.shape_1686.setTransform(721.2,792.4);

	this.shape_1687 = new cjs.Shape();
	this.shape_1687.graphics.f("#FFFFFF").s().p("AATA/QgSAAgGgHQgIgIAAgRIAAg1IgZAAIAAgMIAZAAIAAgcIAPAAIAAAcIAlAAIAAAMIglAAIAAA1QABALAEAEQAEAEAKAAIASAAIAAANg");
	this.shape_1687.setTransform(710,792.925);

	this.shape_1688 = new cjs.Shape();
	this.shape_1688.graphics.f("#FFFFFF").s().p("AgRAyIgSgEIAAgRIASAHQAIACAHAAQAKAAAGgEQAFgFABgHQAAgMgVgEIgBAAIgFgBQgPgDgGgGQgHgGABgLQAAgOAJgIQAKgIARAAQAIAAAHACQAHABAHADIAAAQQgGgEgIgCQgJgCgGAAQgIAAgHADQgFAEAAAHQAAAGAEAEQAEADAPADIAGACQAMACAHAGQAGAHAAALQAAAOgKAIQgMAJgQAAg");
	this.shape_1688.setTransform(688.65,794.325);

	this.shape_1689 = new cjs.Shape();
	this.shape_1689.graphics.f("#FFFFFF").s().p("AgdA4QgKgOAAgYQAAgXAKgOQAKgOASAAQAIAAAHAEQAHAEADAHIAAgzIAQAAIAACIIgQAAIAAgMQgDAHgHAEQgHAEgIAAQgSAAgKgOgAgQgJQgGAJAAASQAAATAGAJQAGAKAKAAQAMAAAGgKQAGgJAAgTQAAgSgGgJQgGgKgMAAQgKAAgGAKg");
	this.shape_1689.setTransform(677.475,792.525);

	this.shape_1690 = new cjs.Shape();
	this.shape_1690.graphics.f("#FFFFFF").s().p("AASBFQgPAAgHgKQgHgJAAgRIAAhYIgaAAIAAgNIApAAIAABlQAAALAEAFQADAGAJAAIASAAIAAAOg");
	this.shape_1690.setTransform(667.475,792.375);

	this.shape_1691 = new cjs.Shape();
	this.shape_1691.graphics.f("#FFFFFF").s().p("AgeAmQgLgMAAgaQAAgZALgMQAKgOAUAAQAUAAAMAOQAKANAAAYQAAAagKAMQgMAOgUAAQgUAAgKgOgAgRgbQgHAIAAATQAAATAHAJQAFAKAMAAQAMAAAHgKQAGgJAAgTQAAgSgGgJQgHgKgMAAQgMAAgFAKg");
	this.shape_1691.setTransform(656.1,794.325);

	this.shape_1692 = new cjs.Shape();
	this.shape_1692.graphics.f("#FFFFFF").s().p("AAVBFIAAg9QAAgNgEgGQgFgGgKgBQgKAAgGAJQgGAIAAANIAAA5IgRAAIAAiJIARAAIAAA1QADgHAIgFQAIgFAJAAQAPAAAHALQAIAJAAAUIAAA9g");
	this.shape_1692.setTransform(645.325,792.4);

	this.shape_1693 = new cjs.Shape();
	this.shape_1693.graphics.f("#FFFFFF").s().p("AgOAaIAIghIAAgSIAVAAIAAASIgQAhg");
	this.shape_1693.setTransform(623.775,788.15);

	this.shape_1694 = new cjs.Shape();
	this.shape_1694.graphics.f("#FFFFFF").s().p("AgeAmQgNgOAAgYQAAgWANgPQANgOATAAQATAAAMANQAKANABASIAAAHIhFAAIAAAAQgBAUAJAJQAHAJAPAAQAJAAAHgDIASgHIAAAQQgLAFgHABQgHACgJAAQgWAAgNgOgAgRgdQgHAHgBAKIA1AAQgBgKgHgIQgGgHgMAAQgLAAgIAIg");
	this.shape_1694.setTransform(612.8,794.325);

	this.shape_1695 = new cjs.Shape();
	this.shape_1695.graphics.f("#FFFFFF").s().p("AASBFQgPAAgHgKQgHgIAAgSIAAhYIgaAAIAAgNIAoAAIAABlQAAALAFAFQADAGAIAAIATAAIAAAOg");
	this.shape_1695.setTransform(602.45,792.375);

	this.shape_1696 = new cjs.Shape();
	this.shape_1696.graphics.f("#FFFFFF").s().p("AgMBCQgIgEgDgHIAAAMIgQAAIAAiIIAQAAIAAAzQADgHAIgEQAHgEAHAAQATAAAJAOQALAOAAAXQAAAYgLAOQgKAOgSAAQgIAAgGgEgAgRgJQgGAJAAASQAAATAGAJQAGAKALAAQAMAAAFgKQAHgJAAgTQAAgSgHgJQgFgKgMAAQgLAAgGAKg");
	this.shape_1696.setTransform(591.4,792.525);

	this.shape_1697 = new cjs.Shape();
	this.shape_1697.graphics.f("#FFFFFF").s().p("AgfArQgJgIAAgPQAAgQALgIQAMgIAUAAIAVAAIAAgDQAAgLgGgGQgFgFgNAAQgIAAgIACQgIACgJAFIAAgQIASgFQAHgCAIAAQALAAAJAEQAJADAFAIQAEAEABAHQACAGAAANIAAA3IgRAAIAAgOQgGAJgHADQgHAFgLAAQgOAAgKgJgAgQAFQgIAEAAAKQAAAJAGAFQAGAFAJAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgGAFg");
	this.shape_1697.setTransform(580.075,794.325);

	this.shape_1698 = new cjs.Shape();
	this.shape_1698.graphics.f("#FFFFFF").s().p("AgiAzIAAhiIAQAAIAAATQAFgKAIgGQAHgGAMAAIALACQAFABAFADIAAARQgGgEgFgCQgEgCgHAAQgPAAgIAKQgIAKAAAQIAAAyg");
	this.shape_1698.setTransform(559.825,794.2);

	this.shape_1699 = new cjs.Shape();
	this.shape_1699.graphics.f("#FFFFFF").s().p("AgfArQgJgIAAgPQAAgQALgIQAMgIAUAAIAVAAIAAgDQAAgLgGgGQgFgFgNAAQgJAAgHACQgIACgJAFIAAgQIASgFQAHgCAIAAQALAAAJAEQAJADAFAIQAEAEABAHQACAGAAANIAAA3IgRAAIAAgOQgFAJgIADQgIAFgKAAQgOAAgKgJgAgRAFQgHAEAAAKQAAAJAGAFQAGAFAJAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgHAFg");
	this.shape_1699.setTransform(547.575,794.325);

	this.shape_1700 = new cjs.Shape();
	this.shape_1700.graphics.f("#FFFFFF").s().p("AgKBCIgmiDIASAAIAeB0IAfh0IASAAIgmCDg");
	this.shape_1700.setTransform(536.9,792.675);

	this.shape_1701 = new cjs.Shape();
	this.shape_1701.graphics.f("#FFFFFF").s().p("AgmBEIAAgOIAJAAQAHABAFgFQAEgEAGgRIgmhgIARAAIAcBMIAdhMIARAAIgkBdQgIAVgDAHQgFAHgFADQgHAEgHAAg");
	this.shape_1701.setTransform(526.175,796.2);

	this.shape_1702 = new cjs.Shape();
	this.shape_1702.graphics.f("#FFFFFF").s().p("AAeAzIAAg4QAAgWgCgEQgDgFgFAAQgHAAgDAGQgDAFAAAUIAAA4IgNAAIAAg4QAAgUgDgGQgDgFgGAAQgGAAgDAGQgCAEAAAVIAAA4IgPAAIAAhiIAPAAIAAAJQADgHAEgBQAEgDAGgBQAGABAFADQADADADAGQADgGAEgDQAFgDAGgBQAMABAFAIQAFAMAAAXIAAA5g");
	this.shape_1702.setTransform(515.275,794.2);

	this.shape_1703 = new cjs.Shape();
	this.shape_1703.graphics.f("#FFFFFF").s().p("AgOAaIAAgSIAQghIANAAIgIAhIAAASg");
	this.shape_1703.setTransform(504.575,788.15);

	this.shape_1704 = new cjs.Shape();
	this.shape_1704.graphics.f("#FFFFFF").s().p("AgeAmQgNgNAAgZQAAgXANgOQAMgOAUAAQATAAALANQALANABASIAAAHIhFAAIAAAAQgBAUAIAJQAIAJAPAAQAJAAAHgDIASgHIAAAQQgKAEgIACQgHACgJAAQgWAAgNgOgAgQgdQgIAHgBAKIA1AAQgCgKgGgIQgGgHgMAAQgLAAgHAIg");
	this.shape_1704.setTransform(482.775,794.325);

	this.shape_1705 = new cjs.Shape();
	this.shape_1705.graphics.f("#FFFFFF").s().p("AASBFQgPAAgHgKQgHgJAAgRIAAhYIgaAAIAAgNIApAAIAABlQAAAMAEAEQADAGAIAAIATAAIAAAOg");
	this.shape_1705.setTransform(472.4,792.375);

	this.shape_1706 = new cjs.Shape();
	this.shape_1706.graphics.f("#FFFFFF").s().p("AgMBCQgIgEgDgHIAAAMIgQAAIAAiIIAQAAIAAAzQADgHAIgEQAHgEAHAAQASAAALAOQAJAOABAXQAAAYgLAOQgKAOgSAAQgIAAgGgEgAgRgJQgGAJAAASQAAATAGAJQAGAKALAAQALAAAGgKQAHgJAAgTQAAgSgHgJQgGgKgLAAQgLAAgGAKg");
	this.shape_1706.setTransform(461.35,792.525);

	this.shape_1707 = new cjs.Shape();
	this.shape_1707.graphics.f("#FFFFFF").s().p("AgfArQgJgIAAgPQAAgPALgJQAMgIAUAAIAVAAIAAgDQAAgLgGgGQgFgFgNAAQgIAAgIACQgIACgIAFIAAgQQAIgDAJgCQAHgCAIAAQAKAAALAEQAIADAGAIQADAEABAHQACAGAAANIAAA3IgRAAIAAgOQgGAJgHADQgHAFgLAAQgOAAgKgJgAgQAFQgIAEAAAKQAAAJAGAFQAGAFAJAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgGAFg");
	this.shape_1707.setTransform(450.025,794.325);

	this.shape_1708 = new cjs.Shape();
	this.shape_1708.graphics.f("#FFFFFF").s().p("AgiAzIAAhiIAQAAIAAATQAFgKAIgGQAIgGALAAQAGAAAFACQAFABAFADIAAARQgGgEgFgCQgEgCgHAAQgPAAgIAKQgIAKAAAQIAAAyg");
	this.shape_1708.setTransform(429.775,794.2);

	this.shape_1709 = new cjs.Shape();
	this.shape_1709.graphics.f("#FFFFFF").s().p("AgfArQgJgIAAgPQAAgQALgIQAMgIAUAAIAVAAIAAgDQAAgLgGgGQgFgFgNAAQgJAAgHACQgIACgJAFIAAgQIASgFQAHgCAIAAQALAAAJAEQAJADAFAIQAEAEABAHQACAGAAANIAAA3IgRAAIAAgOQgGAJgHADQgHAFgLAAQgOAAgKgJgAgQAFQgIAEAAAKQAAAJAGAFQAGAFAJAAQAMAAAIgJQAHgJAAgRIAAgDIgUAAQgOAAgGAFg");
	this.shape_1709.setTransform(417.525,794.325);

	this.shape_1710 = new cjs.Shape();
	this.shape_1710.graphics.f("#FFFFFF").s().p("AgKAxIgihhIAQAAIAcBRIAdhRIARAAIgjBhg");
	this.shape_1710.setTransform(406.85,794.325);

	this.shape_1711 = new cjs.Shape();
	this.shape_1711.graphics.f("#FFFFFF").s().p("AgeAmQgNgOAAgYQAAgXANgOQAMgOAVAAQATAAAKANQALAMABATIAAAHIhFAAIAAAAQgBAUAIAJQAJAJAOAAQAJAAAHgDIASgHIAAAQQgKAEgHACQgIACgJAAQgWAAgNgOgAgQgdQgIAIgBAJIA1AAQgCgLgGgHQgFgHgNAAQgLAAgHAIg");
	this.shape_1711.setTransform(385.225,794.325);

	this.shape_1712 = new cjs.Shape();
	this.shape_1712.graphics.f("#FFFFFF").s().p("AAVBFIAAg9QABgNgFgGQgFgGgKgBQgJAAgIAJQgFAIAAANIAAA5IgQAAIAAiJIAQAAIAAA1QAEgHAHgFQAIgFAJAAQAPAAAHALQAHAJAAAUIAAA9g");
	this.shape_1712.setTransform(374.4,792.4);

	this.shape_1713 = new cjs.Shape();
	this.shape_1713.graphics.f("#FFFFFF").s().p("AgIBCIAAh0IgpAAIAAgPIBjAAIAAAPIgpAAIAAB0g");
	this.shape_1713.setTransform(363.5,792.675);

	this.shape_1714 = new cjs.Shape();
	this.shape_1714.graphics.f("#FFFFFF").s().p("AgSBQIAAgNIAVAAIAAiGIgVAAIAAgMIAlAAIAACfg");
	this.shape_1714.setTransform(546.775,814.325);

	this.shape_1715 = new cjs.Shape();
	this.shape_1715.graphics.f("#FFFFFF").s().p("AgSAyIgRgEIAAgRQAKAFAHACQAKACAGAAQAJAAAHgEQAFgFAAgHQAAgMgUgEIAAAAIgHgBQgOgDgGgGQgGgGgBgLQAAgOAKgIQAKgIAQAAIAPACIAPAEIAAAQIgOgGIgPgCQgIAAgHADQgFAEAAAHQAAAHAEADQAEADAPADIAGACQAMACAGAGQAHAGAAAMQAAAOgKAIQgMAJgQAAIgQgCg");
	this.shape_1715.setTransform(536.95,815.925);

	this.shape_1716 = new cjs.Shape();
	this.shape_1716.graphics.f("#FFFFFF").s().p("AgeAzQgMgPAAgkQAAggAOgSQAMgRAYAAIAMABIANAEIAAAQQgEgDgIgBIgNgDQgPAAgKAOQgIANAAAYQAFgJAGgEQAIgGAJABQATgBAKAMQALALAAAWQAAAVgLALQgLAMgTAAQgWAAgKgRgAgQAAQgGAKAAAOQAAANAGAJQAHAIAKAAQAMAAAGgIQAGgIAAgOQAAgPgGgJQgGgHgMABQgKAAgHAGg");
	this.shape_1716.setTransform(526.05,814.3);

	this.shape_1717 = new cjs.Shape();
	this.shape_1717.graphics.f("#FFFFFF").s().p("AgOASIAAgjIAdAAIAAAjg");
	this.shape_1717.setTransform(514.775,819.075);

	this.shape_1718 = new cjs.Shape();
	this.shape_1718.graphics.f("#FFFFFF").s().p("AgYBCQgHgBgIgEIAAgSIAQAHQAHACAKAAQANAAAIgIQAIgIAAgNQAAgPgIgHQgIgHgPAAIgNABIgNAFIAAhCIBCAAIAAAPIgyAAIAAAgIAHgCIAIAAQAVgBALAMQALALABAWQAAAUgNAMQgMAMgVAAg");
	this.shape_1718.setTransform(504.3,814.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1663},{t:this.shape_1662},{t:this.shape_1661},{t:this.shape_1660},{t:this.shape_1659},{t:this.shape_1658},{t:this.shape_1657,p:{x:438.975,y:792.4}},{t:this.shape_1656},{t:this.shape_1655},{t:this.shape_1654},{t:this.shape_1653},{t:this.shape_1652},{t:this.shape_1651},{t:this.shape_1650},{t:this.shape_1649},{t:this.shape_1648},{t:this.shape_1647},{t:this.shape_1646,p:{x:569.025,y:792.4}},{t:this.shape_1645},{t:this.shape_1644},{t:this.shape_1643},{t:this.shape_1642},{t:this.shape_1641},{t:this.shape_1640},{t:this.shape_1639},{t:this.shape_1638},{t:this.shape_1637},{t:this.shape_1636},{t:this.shape_1635},{t:this.shape_1634},{t:this.shape_1633},{t:this.shape_1632},{t:this.shape_1631},{t:this.shape_1630},{t:this.shape_1629},{t:this.shape_1628},{t:this.shape_1627},{t:this.shape_1626},{t:this.shape_1625},{t:this.shape_1624},{t:this.shape_1623,p:{x:384.775,y:814}},{t:this.shape_1622},{t:this.shape_1621,p:{x:406.475,y:814}},{t:this.shape_1620},{t:this.shape_1619},{t:this.shape_1618},{t:this.shape_1617},{t:this.shape_1616,p:{x:471.475,y:814}},{t:this.shape_1615},{t:this.shape_1614},{t:this.shape_1613},{t:this.shape_1612},{t:this.shape_1611},{t:this.shape_1610},{t:this.shape_1609}]}).to({state:[]},1).to({state:[{t:this.shape_1663},{t:this.shape_1662},{t:this.shape_1661},{t:this.shape_1660},{t:this.shape_1659},{t:this.shape_1658},{t:this.shape_1657,p:{x:438.975,y:792.4}},{t:this.shape_1656},{t:this.shape_1655},{t:this.shape_1654},{t:this.shape_1653},{t:this.shape_1652},{t:this.shape_1651},{t:this.shape_1650},{t:this.shape_1649},{t:this.shape_1648},{t:this.shape_1647},{t:this.shape_1646,p:{x:569.025,y:792.4}},{t:this.shape_1645},{t:this.shape_1644},{t:this.shape_1643},{t:this.shape_1642},{t:this.shape_1641},{t:this.shape_1640},{t:this.shape_1639},{t:this.shape_1638},{t:this.shape_1637},{t:this.shape_1636},{t:this.shape_1635},{t:this.shape_1634},{t:this.shape_1633},{t:this.shape_1632},{t:this.shape_1631},{t:this.shape_1630},{t:this.shape_1629},{t:this.shape_1628},{t:this.shape_1627},{t:this.shape_1626},{t:this.shape_1625},{t:this.shape_1624},{t:this.shape_1623,p:{x:384.775,y:814}},{t:this.shape_1622},{t:this.shape_1621,p:{x:406.475,y:814}},{t:this.shape_1620},{t:this.shape_1619},{t:this.shape_1618},{t:this.shape_1617},{t:this.shape_1616,p:{x:471.475,y:814}},{t:this.shape_1615},{t:this.shape_1614},{t:this.shape_1613},{t:this.shape_1612},{t:this.shape_1611},{t:this.shape_1610},{t:this.shape_1609}]},2).to({state:[{t:this.shape_1713},{t:this.shape_1712},{t:this.shape_1711},{t:this.shape_1710},{t:this.shape_1709},{t:this.shape_1708},{t:this.shape_1657,p:{x:440.075,y:792.425}},{t:this.shape_1707},{t:this.shape_1706},{t:this.shape_1705},{t:this.shape_1704},{t:this.shape_1703},{t:this.shape_1702},{t:this.shape_1701},{t:this.shape_1700},{t:this.shape_1699},{t:this.shape_1698},{t:this.shape_1646,p:{x:570.1,y:792.425}},{t:this.shape_1697},{t:this.shape_1696},{t:this.shape_1695},{t:this.shape_1694},{t:this.shape_1693},{t:this.shape_1692},{t:this.shape_1691},{t:this.shape_1690},{t:this.shape_1689},{t:this.shape_1688},{t:this.shape_1687},{t:this.shape_1686},{t:this.shape_1685},{t:this.shape_1684},{t:this.shape_1683},{t:this.shape_1682},{t:this.shape_1681},{t:this.shape_1680},{t:this.shape_1679},{t:this.shape_1678},{t:this.shape_1677},{t:this.shape_1676},{t:this.shape_1623,p:{x:385.875,y:814.025}},{t:this.shape_1675},{t:this.shape_1621,p:{x:407.55,y:814.025}},{t:this.shape_1674},{t:this.shape_1673},{t:this.shape_1672},{t:this.shape_1671},{t:this.shape_1616,p:{x:472.575,y:814.025}},{t:this.shape_1670},{t:this.shape_1669},{t:this.shape_1668},{t:this.shape_1667},{t:this.shape_1666},{t:this.shape_1665},{t:this.shape_1664}]},1).to({state:[{t:this.shape_1713},{t:this.shape_1712},{t:this.shape_1711},{t:this.shape_1710},{t:this.shape_1709},{t:this.shape_1708},{t:this.shape_1657,p:{x:440.075,y:792.425}},{t:this.shape_1707},{t:this.shape_1706},{t:this.shape_1705},{t:this.shape_1704},{t:this.shape_1703},{t:this.shape_1702},{t:this.shape_1701},{t:this.shape_1700},{t:this.shape_1699},{t:this.shape_1698},{t:this.shape_1646,p:{x:570.1,y:792.425}},{t:this.shape_1697},{t:this.shape_1696},{t:this.shape_1695},{t:this.shape_1694},{t:this.shape_1693},{t:this.shape_1692},{t:this.shape_1691},{t:this.shape_1690},{t:this.shape_1689},{t:this.shape_1688},{t:this.shape_1687},{t:this.shape_1686},{t:this.shape_1685},{t:this.shape_1684},{t:this.shape_1683},{t:this.shape_1682},{t:this.shape_1681},{t:this.shape_1680},{t:this.shape_1679},{t:this.shape_1678},{t:this.shape_1677},{t:this.shape_1676},{t:this.shape_1623,p:{x:385.875,y:814.025}},{t:this.shape_1675},{t:this.shape_1621,p:{x:407.55,y:814.025}},{t:this.shape_1674},{t:this.shape_1673},{t:this.shape_1672},{t:this.shape_1671},{t:this.shape_1616,p:{x:472.575,y:814.025}},{t:this.shape_1670},{t:this.shape_1718},{t:this.shape_1717},{t:this.shape_1716},{t:this.shape_1715},{t:this.shape_1714}]},4).wait(4));

	// output_bg
	this.shape_1719 = new cjs.Shape();
	this.shape_1719.graphics.f("#E6E6E6").s().p("AgLA0IAAhTIgfAAIAAgUIBVAAIAAAUIgfAAIAABTg");
	this.shape_1719.setTransform(404.925,752.95);

	this.shape_1720 = new cjs.Shape();
	this.shape_1720.graphics.f("#E6E6E6").s().p("AglALIAAg/IAYAAIAABBQAAATANAAQAPAAAAgTIAAhBIAXAAIAAA/QAAAqgmAAQglAAAAgqg");
	this.shape_1720.setTransform(395.325,753.05);

	this.shape_1721 = new cjs.Shape();
	this.shape_1721.graphics.f("#E6E6E6").s().p("AgmA0IAAhnIAlAAQAoAAAAAhQAAASgMAIQgLAJgRAAIgNAAIAAAjgAgOgBIAMAAQASAAAAgRQAAgPgSABIgMAAg");
	this.shape_1721.setTransform(386,752.95);

	this.shape_1722 = new cjs.Shape();
	this.shape_1722.graphics.f("#E6E6E6").s().p("AgLA0IAAhTIgfAAIAAgUIBVAAIAAAUIggAAIAABTg");
	this.shape_1722.setTransform(376.15,752.95);

	this.shape_1723 = new cjs.Shape();
	this.shape_1723.graphics.f("#E6E6E6").s().p("AglALIAAg/IAYAAIAABBQAAATANAAQAPAAAAgTIAAhBIAXAAIAAA/QAAAqgmAAQglAAAAgqg");
	this.shape_1723.setTransform(366.525,753.05);

	this.shape_1724 = new cjs.Shape();
	this.shape_1724.graphics.f("#E6E6E6").s().p("AgeAoQgLgPAAgZQAAgZALgOQAMgOASAAQATAAALAOQAMAOAAAZQAAAZgMAPQgLAOgTAAQgSAAgMgOgAgRAAQAAAhARAAQASAAAAghQAAgggSAAQgRAAAAAgg");
	this.shape_1724.setTransform(356.95,752.95);

	this.shape_1725 = new cjs.Shape();
	this.shape_1725.graphics.f().s("#FFFFFF").p("EA/AAAAMh9/AAA");
	this.shape_1725.setTransform(742.525,732);

	this.shape_1726 = new cjs.Shape();
	this.shape_1726.graphics.f("#232323").s().p("Eg+/AMEIAA4HMB9/AAAIAAYHg");
	this.shape_1726.setTransform(741.55,808.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1726},{t:this.shape_1725},{t:this.shape_1724},{t:this.shape_1723},{t:this.shape_1722},{t:this.shape_1721},{t:this.shape_1720},{t:this.shape_1719}]}).wait(12));

	// menu_items
	this.shape_1727 = new cjs.Shape();
	this.shape_1727.graphics.f("rgba(37,37,37,0.098)").s().p("Au2B9QgGAAgFgFQgEgFAAgHIAAjWQAAgIAEgFQAFgFAGAAIdsAAQAQAAAAASIAADWQAAARgQAAg");
	this.shape_1727.setTransform(210.9066,736.9106,1.0994,8.7984);

	this.shape_1728 = new cjs.Shape();
	this.shape_1728.graphics.f("rgba(0,0,0,0.098)").s().p("AoTBBQgEAAgCgDQgCgCgBgDIAAhwQABgJAIAAIQnAAQAIAAAAAJIAABwQAAAIgIAAg");
	this.shape_1728.setTransform(202.3458,589.9049,1.7872,1.9235);

	this.shape_1729 = new cjs.Shape();
	this.shape_1729.graphics.f("#E5E5E5").s().p("AoTBBQgEAAgCgCQgCgDgBgEIAAhvQABgEACgDQACgCAEAAIQnAAQAIAAAAAJIAABvQAAAJgIAAg");
	this.shape_1729.setTransform(202.3458,485.6028,1.7872,1.9159);

	this.shape_1730 = new cjs.Shape();
	this.shape_1730.graphics.f("rgba(37,37,37,0.098)").s().p("AoTBBQgEAAgCgCQgCgDgBgEIAAhvQABgEACgDQACgCAEAAIQnAAQAIAAAAAJIAABvQAAAJgIAAg");
	this.shape_1730.setTransform(211.9431,434.9676,1.9641,1.9161);

	this.shape_1731 = new cjs.Shape();
	this.shape_1731.graphics.f("#E5E5E5").s().p("AoTBBQgEAAgCgDQgCgCgBgDIAAhxQABgIAIAAIQnAAQAIAAAAAIIAABxQAAAIgIAAg");
	this.shape_1731.setTransform(202.3458,270.5951,1.7872,1.9233);

	this.shape_1732 = new cjs.Shape();
	this.shape_1732.graphics.f("#E5E5E5").s().p("AoTBBQgDAAgDgDQgDgDAAgDIAAhvQAAgEADgDQADgCADAAIQnAAQAJAAAAAJIAABvQAAAJgJAAg");
	this.shape_1732.setTransform(202.3102,196.6313,1.7872,1.923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1732},{t:this.shape_1731},{t:this.shape_1730},{t:this.shape_1729},{t:this.shape_1728},{t:this.shape_1727}]}).wait(12));

	// menu
	this.shape_1733 = new cjs.Shape();
	this.shape_1733.graphics.f("#AAB6AE").s().p("AoTBBQgJAAAAgJIAAhvQAAgJAJAAIQnAAQADAAADACQADADgBAEIAABvQABAEgDADQgDACgDAAg");
	this.shape_1733.setTransform(200.3445,552.2271,1,0.9944);

	this.shape_1734 = new cjs.Shape();
	this.shape_1734.graphics.f("#AAB6AE").s().p("AoTBBQgJAAAAgJIAAhvQABgEACgDQACgCAEAAIQnAAQADAAADACQADADgBAEIAABvQAAAJgIAAg");
	this.shape_1734.setTransform(200.3445,520.6296,1,0.9944);

	this.shape_1735 = new cjs.Shape();
	this.shape_1735.graphics.f("#AAB6AE").s().p("AoTBBQgDAAgDgDQgDgCAAgDIAAhxQAAgDADgDQADgCADAAIQnAAQADAAADACQADADAAADIAABxQAAADgDACQgDADgDAAg");
	this.shape_1735.setTransform(245.7188,364.1118,1,0.9944);

	this.shape_1736 = new cjs.Shape();
	this.shape_1736.graphics.f("#AAB6AE").s().p("AoTBBQgJAAAAgJIAAhvQAAgJAJAAIQnAAQADAAADACQADADgBAEIAABvQABAEgDADQgDACgDAAg");
	this.shape_1736.setTransform(200.3445,337.2643,1,0.9944);

	this.shape_1737 = new cjs.Shape();
	this.shape_1737.graphics.f("#AAB6AE").s().p("AoTBBQgJAAAAgJIAAhvQABgEACgDQACgCAEAAIQnAAQADAAADACQADADgBAEIAABvQAAAJgIAAg");
	this.shape_1737.setTransform(200.3445,305.6667,1,0.9944);

	this.shape_1738 = new cjs.Shape();
	this.shape_1738.graphics.f("#AAB6AE").s().p("AoTBBQgJAAAAgJIAAhvQAAgJAJAAIQnAAQADAAADACQADADgBAEIAABvQABAEgDADQgDACgDAAg");
	this.shape_1738.setTransform(200.3445,232.9965,1,0.9944);

	this.shape_1739 = new cjs.Shape();
	this.shape_1739.graphics.f("#525354").s().p("A0lCfIAAk9MApLAAAIAAE9g");
	this.shape_1739.setTransform(206.7194,129.7657,1,1.476);

	this.shape_1740 = new cjs.Shape();
	this.shape_1740.graphics.f("#383B3D").s().p("EgUlA9ZMAAAh6xMApLAAAMAAAB6xg");
	this.shape_1740.setTransform(206.675,492.075);

	this.shape_1741 = new cjs.Shape();
	this.shape_1741.graphics.f("#AAB6AE").s().p("AoTBBQgJAAAAgIIAAhxQABgDACgDQACgCAEAAIQnAAQADAAADACQADADgBADIAABxQABADgDACQgDADgDAAg");
	this.shape_1741.setTransform(200.3445,201.3989,1,0.9944);

	this.shape_1742 = new cjs.Shape();
	this.shape_1742.graphics.f("#525354").s().p("A0lDqIAAnTMApLAAAIAAHTg");
	this.shape_1742.setTransform(206.725,482.225);

	this.shape_1743 = new cjs.Shape();
	this.shape_1743.graphics.f("#AAB6AE").s().p("AoTBBQgJAAAAgJIAAhvQAAgJAJAAIQnAAQADAAADACQADADgBAEIAABvQABAEgDADQgDACgDAAg");
	this.shape_1743.setTransform(200.3445,552.2271,1,0.9944);

	this.shape_1744 = new cjs.Shape();
	this.shape_1744.graphics.f("#AAB6AE").s().p("AoTBBQgJAAAAgJIAAhvQABgEACgDQACgCAEAAIQnAAQADAAADACQADADgBAEIAABvQAAAJgIAAg");
	this.shape_1744.setTransform(200.3445,520.6296,1,0.9944);

	this.shape_1745 = new cjs.Shape();
	this.shape_1745.graphics.f("#AAB6AE").s().p("AoTBBQgDAAgDgDQgDgCAAgDIAAhxQAAgDADgDQADgCADAAIQnAAQADAAADACQADADAAADIAABxQAAADgDACQgDADgDAAg");
	this.shape_1745.setTransform(245.7188,364.1118,1,0.9944);

	this.shape_1746 = new cjs.Shape();
	this.shape_1746.graphics.f("#AAB6AE").s().p("AoTBBQgJAAAAgJIAAhvQAAgJAJAAIQnAAQADAAADACQADADgBAEIAABvQABAEgDADQgDACgDAAg");
	this.shape_1746.setTransform(200.3445,337.2643,1,0.9944);

	this.shape_1747 = new cjs.Shape();
	this.shape_1747.graphics.f("#AAB6AE").s().p("AoTBBQgJAAAAgJIAAhvQABgEACgDQACgCAEAAIQnAAQADAAADACQADADgBAEIAABvQAAAJgIAAg");
	this.shape_1747.setTransform(200.3445,305.6667,1,0.9944);

	this.shape_1748 = new cjs.Shape();
	this.shape_1748.graphics.f("#AAB6AE").s().p("AoTBBQgJAAAAgJIAAhvQAAgJAJAAIQnAAQADAAADACQADADgBAEIAABvQABAEgDADQgDACgDAAg");
	this.shape_1748.setTransform(200.3445,232.9965,1,0.9944);

	this.shape_1749 = new cjs.Shape();
	this.shape_1749.graphics.f("#AAB6AE").s().p("AoTBBQgJAAAAgIIAAhxQABgDACgDQACgCAEAAIQnAAQADAAADACQADADgBADIAABxQABADgDACQgDADgDAAg");
	this.shape_1749.setTransform(200.3445,201.3989,1,0.9944);

	this.shape_1750 = new cjs.Shape();
	this.shape_1750.graphics.f("#383B3D").s().p("EgUlA9ZMAAAh6xMApLAAAMAAAB6xg");
	this.shape_1750.setTransform(206.675,492.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1740},{t:this.shape_1739,p:{y:129.7657}},{t:this.shape_1738},{t:this.shape_1737},{t:this.shape_1736},{t:this.shape_1735},{t:this.shape_1734},{t:this.shape_1733}]}).to({state:[{t:this.shape_1740},{t:this.shape_1739,p:{y:196.2657}},{t:this.shape_1738},{t:this.shape_1737},{t:this.shape_1736},{t:this.shape_1735},{t:this.shape_1734},{t:this.shape_1733}]},1).to({state:[{t:this.shape_1740},{t:this.shape_1739,p:{y:268.4657}},{t:this.shape_1741},{t:this.shape_1738},{t:this.shape_1737},{t:this.shape_1736},{t:this.shape_1735},{t:this.shape_1734},{t:this.shape_1733}]},1).to({state:[{t:this.shape_1740},{t:this.shape_1742},{t:this.shape_1741},{t:this.shape_1738},{t:this.shape_1737},{t:this.shape_1736},{t:this.shape_1735},{t:this.shape_1734},{t:this.shape_1733}]},1).to({state:[{t:this.shape_1740},{t:this.shape_1739,p:{y:129.7657}},{t:this.shape_1738},{t:this.shape_1737},{t:this.shape_1736},{t:this.shape_1735},{t:this.shape_1734},{t:this.shape_1733}]},1).to({state:[{t:this.shape_1740},{t:this.shape_1739,p:{y:196.2657}},{t:this.shape_1738},{t:this.shape_1737},{t:this.shape_1736},{t:this.shape_1735},{t:this.shape_1734},{t:this.shape_1733}]},1).to({state:[{t:this.shape_1740},{t:this.shape_1739,p:{y:268.4657}},{t:this.shape_1741},{t:this.shape_1738},{t:this.shape_1737},{t:this.shape_1736},{t:this.shape_1735},{t:this.shape_1734},{t:this.shape_1733}]},1).to({state:[{t:this.shape_1750},{t:this.shape_1739,p:{y:268.4657}},{t:this.shape_1749},{t:this.shape_1748},{t:this.shape_1747},{t:this.shape_1746},{t:this.shape_1745},{t:this.shape_1744},{t:this.shape_1743},{t:this.shape_1740},{t:this.shape_1742},{t:this.shape_1741},{t:this.shape_1738},{t:this.shape_1737},{t:this.shape_1736},{t:this.shape_1735},{t:this.shape_1734},{t:this.shape_1733}]},1).to({state:[{t:this.shape_1740},{t:this.shape_1739,p:{y:129.7657}},{t:this.shape_1738},{t:this.shape_1737},{t:this.shape_1736},{t:this.shape_1735},{t:this.shape_1734},{t:this.shape_1733}]},1).to({state:[{t:this.shape_1740},{t:this.shape_1739,p:{y:196.2657}},{t:this.shape_1738},{t:this.shape_1737},{t:this.shape_1736},{t:this.shape_1735},{t:this.shape_1734},{t:this.shape_1733}]},1).to({state:[{t:this.shape_1740},{t:this.shape_1739,p:{y:268.4657}},{t:this.shape_1741},{t:this.shape_1738},{t:this.shape_1737},{t:this.shape_1736},{t:this.shape_1735},{t:this.shape_1734},{t:this.shape_1733}]},1).to({state:[{t:this.shape_1740},{t:this.shape_1742},{t:this.shape_1741},{t:this.shape_1738},{t:this.shape_1737},{t:this.shape_1736},{t:this.shape_1735},{t:this.shape_1734},{t:this.shape_1733}]},1).wait(1));

	// ai_bg
	this.shape_1751 = new cjs.Shape();
	this.shape_1751.graphics.f("#EFEFEF").s().p("AlfAeIAAg7IK/AAIAAA7g");
	this.shape_1751.setTransform(1033.225,88.45);

	this.shape_1752 = new cjs.Shape();
	this.shape_1752.graphics.f("#EFEFEF").s().p("AhcAeIAAg7IC5AAIAAA7g");
	this.shape_1752.setTransform(1121.8,88.45);

	this.shape_1753 = new cjs.Shape();
	this.shape_1753.graphics.f("#EFEFEF").s().p("AgfAqQgNgSAAgYQAAgYANgRQAOgRARAAQATAAANARQANARAAAYQAAAZgNARQgNARgTAAQgSAAgNgRg");
	this.shape_1753.setTransform(1082.275,88.425);

	this.shape_1754 = new cjs.Shape();
	this.shape_1754.graphics.f("#EFEFEF").s().p("AgfAqQgNgRAAgZQAAgYANgRQANgRASAAQATAAANARQANARAAAYQAAAYgNASQgNARgTAAQgSAAgNgRg");
	this.shape_1754.setTransform(1098.675,88.425);

	this.shape_1755 = new cjs.Shape();
	this.shape_1755.graphics.f("#A7B3AB").s().p("EhU/ABfIAAi8MCp/AAAIAAC8g");
	this.shape_1755.setTransform(601.25,88.55);

	this.shape_1756 = new cjs.Shape();
	this.shape_1756.graphics.f("#EFEFEF").s().p("AgfAqQgNgRAAgZQAAgYANgRQANgRASAAQATAAANARQANARAAAYQAAAYgNASQgNARgTAAQgSAAgNgRg");
	this.shape_1756.setTransform(75.875,88.425);

	this.shape_1757 = new cjs.Shape();
	this.shape_1757.graphics.f("#FFFFFF").s().p("AAABuQgjAAgYggQgZghABgtQAAgtAYggQAZghAiAAQAjAAAZAhQAYAgAAAtQAAAugYAgQgZAggjAAg");
	this.shape_1757.setTransform(600.0245,40.1);

	this.shape_1758 = new cjs.Shape();
	this.shape_1758.graphics.f("#1A1A1A").s().p("EhU/A90MAAAh7nMCp/AAAMAAAB7ng");
	this.shape_1758.setTransform(601.25,487.125);

	this.shape_1759 = new cjs.Shape();
	this.shape_1759.graphics.f("#25282B").s().p("EhVMBK3QjiAAihigQigigAAjjMAAAiHTQAAibBehuQBfhuCEAAMCxWAAAQCHAABgBwQBhBwAACfMAAACHLQAADjigCgQigCgjjAAgEhSSg78QigChAADjMAAXBsbQABDiCgCgQCgCfDiAAMCYhAAAQDjAACgigQCgigAAjjMAAAhsXQgBjiigigQigigjiAAMiY3gAFQjjAAihChg");
	this.shape_1759.setTransform(600,479.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1759},{t:this.shape_1758},{t:this.shape_1757},{t:this.shape_1756},{t:this.shape_1755},{t:this.shape_1754},{t:this.shape_1753},{t:this.shape_1752},{t:this.shape_1751}]}).wait(12));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(600,479.5,600,478.79999999999995);
// library properties:
lib.properties = {
	id: '1A9338FEE8584755AB48BB991EF417A3',
	width: 1200,
	height: 959,
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