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
(lib.uc_u2_s2_p1_js_overview = function(mode,startPosition,loop,reversed) {
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
		this.stop(0);
		
		this.button_clear.addEventListener("click", clear_function.bind(this));
		
		function clear_function() {
			
			this.gotoAndStop(0);	
		}
		
		
		
		this.stop(1);
		
		this.button_variable.addEventListener("click", variable_function.bind(this));
		this.variable_button2.addEventListener("click", variable_function.bind(this));
		
		function variable_function() {
			
			this.gotoAndStop(1);	
		}
		
		this.stop(2);
		
		this.button_comment.addEventListener("click", comment_function.bind(this));
		this.comment_button2.addEventListener("click", comment_function.bind(this));
		
		function comment_function() {
			
			this.gotoAndStop(2);	
		}
		
		this.stop(3);
		
		this.button_conditional.addEventListener("click", conditional_function.bind(this));
		this.conditional_button2.addEventListener("click", conditional_function.bind(this));
		
		function conditional_function() {
			
			this.gotoAndStop(3);
		}
		
		this.stop(4);
		
		this.button_iteration.addEventListener("click", iteration_function.bind(this));
		this.iteration_button2.addEventListener("click", iteration_function.bind(this));
		
		function iteration_function() {
			
			this.gotoAndStop(4);	
		}
		
		this.stop(5);
		
		this.button_functionB.addEventListener("click", functionB_function.bind(this));
		this.function_button2.addEventListener("click", functionB_function.bind(this));
		
		function functionB_function() {
			
			this.gotoAndStop(5);	
		}
		
		this.stop(6);
		
		this.button_functionC.addEventListener("click", functionC_function.bind(this));
		this.functionC_button2.addEventListener("click", functionC_function.bind(this));
		
		function functionC_function() {
			
			this.gotoAndStop(6);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

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
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAKQgEgDAAgHQABgFADgDQADgEAEAAQAFAAAEAEQACADAAAFQAAAGgDAEQgDADgFAAQgEgBgDgCg");
	this.shape_8.setTransform(305.3,809.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_9.setTransform(297.425,805.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghA8QgLgOAAgZQAAgYALgOQAMgOATgBQAUABAMAPIAAAAIAAgIIAAgHIAAgqIAPAAIAACRIgNAAIgCgOIAAAAQgLAQgVAAQgUAAgLgOgAgVgIQgHAJAAAUQAAAUAHAKQAHAKAOAAQAPAAAHgJQAIgJAAgTIAAgDQAAgVgIgJQgHgKgPABQgOgBgHALg");
	this.shape_10.setTransform(285.85,803);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYAvQgKgHgHgMQgFgMAAgQQAAgYAMgOQANgOAVAAQAWAAANAOQAMAOAAAYQAAAZgMAOQgNAOgWAAQgNAAgLgGgAgXgdQgHAKAAATQAAATAIALQAHAKAPAAQAPAAAIgKQAIgKAAgUQAAgTgIgKQgIgKgPAAQgOAAgJAKg");
	this.shape_11.setTransform(274.45,805.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYAnQgMgNAAgZQAAgZAMgOQAMgOAXAAIAPABQAHACAEACIgFANIgLgDIgLgCQgeAAAAAnQAAATAHAKQAIALAOAAQANAAAOgGIAAAOQgLAFgPAAQgWAAgMgOg");
	this.shape_12.setTransform(264.35,805.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQBJIAAhZIgTAAIAAgHIATgGIAAgGQAAgmAgABQAJgBAKAEIgDANQgKgEgGAAQgJABgEAFQgDAGgBANIAAAHIAaAAIAAAMIgaAAIAABZg");
	this.shape_13.setTransform(251.9,802.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAvQgKgHgHgMQgFgMAAgQQAAgYANgOQAMgOAVAAQAWAAANAOQAMAOAAAYQAAAZgMAOQgNAOgWAAQgNAAgLgGgAgXgdQgHAKAAATQAAATAIALQAHAKAPAAQAPAAAIgKQAIgKAAgUQAAgTgIgKQgIgKgPAAQgOAAgJAKg");
	this.shape_14.setTransform(242.3,805.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAbA0IAAhBQAAgNgFgGQgGgGgMAAQgQAAgHAJQgIAIAAAUIAAA1IgPAAIAAhlIANAAIACAOIABAAQAEgIAKgEQAIgEAKAAQASAAAKAJQAJAJAAATIAABCg");
	this.shape_15.setTransform(225.7,804.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYAvQgLgHgFgMQgGgMAAgQQAAgYAMgOQANgOAVAAQAWAAAMAOQANAOAAAYQAAAZgNAOQgMAOgWAAQgNAAgLgGgAgWgdQgIAKAAATQAAATAIALQAIAKAOAAQAPAAAIgKQAIgKAAgUQAAgTgIgKQgIgKgPAAQgPAAgHAKg");
	this.shape_16.setTransform(214,805.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgHBGIAAhlIAPAAIAABlgAgFgzQgDgDAAgFQAAgGADgCQACgCADAAQAEAAADACQACACAAAGQAAAFgCADQgDACgEABQgDgBgCgCg");
	this.shape_17.setTransform(205.825,803.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPAhIAAg8IgOAAIAAgIIAOgGIAHgWIAIAAIAAAYIAeAAIAAAMIgeAAIAAA7QAAAJAEAFQAFAFAHAAIAIAAIAGgCIAAAMIgHACIgJABQgdAAAAgfg");
	this.shape_18.setTransform(199.975,803.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYAnQgMgNAAgZQAAgZAMgOQAMgOAXAAIAPABQAHACAEACIgFANIgLgDIgLgCQgeAAAAAnQAAATAHAKQAIALAOAAQANAAAOgGIAAAOQgLAFgPAAQgWAAgMgOg");
	this.shape_19.setTransform(192.35,805.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_20.setTransform(182.225,805.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgkAvIAAgPIAQAGQAJACAIAAQALAAAGgEQAIgDAAgIQgBgGgFgFQgFgEgOgGQgPgEgFgEQgHgEgCgFQgDgFgBgHQAAgNALgHQAKgHARAAQARAAAPAGIgFANQgQgGgMAAQgKAAgGADQgGAEAAAGQAAAEACADQACADAFACIARAIQATAGAGAGQAHAHAAAKQAAAPgMAHQgKAIgTAAQgUAAgMgGg");
	this.shape_21.setTransform(172.35,805.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_22.setTransform(157.375,805.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAbBJIAAhDQAAgLgFgGQgGgHgMABQgQAAgHAJQgIAIAAAUIAAA1IgPAAIAAiRIAPAAIAAAsIAAAOIAAAAQAGgIAIgEQAJgEAJgBQATAAAJAJQAKAJAAATIAABDg");
	this.shape_23.setTransform(146.15,802.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgPAhIAAg8IgOAAIAAgIIAOgGIAHgWIAIAAIAAAYIAeAAIAAAMIgeAAIAAA7QAAAJAEAFQAFAFAHAAIAIAAIAGgCIAAAMIgHACIgJABQgdAAAAgfg");
	this.shape_24.setTransform(136.825,803.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAcA0IAAhBQAAgNgHgGQgFgGgNAAQgOAAgIAJQgHAIAAAUIAAA1IgQAAIAAhlIAMAAIADAOIABAAQAFgIAIgEQAJgEAJAAQATAAAKAJQAJAJAAATIAABCg");
	this.shape_25.setTransform(122.7,804.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYAvQgLgHgFgMQgGgMAAgQQAAgYAMgOQANgOAVAAQAWAAAMAOQANAOAAAYQAAAZgNAOQgMAOgWAAQgNAAgLgGgAgWgdQgIAKAAATQAAATAIALQAIAKAOAAQAPAAAIgKQAIgKAAgUQAAgTgIgKQgIgKgPAAQgPAAgHAKg");
	this.shape_26.setTransform(110.95,805.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AguBJIAAgNIAMABQAQAAAHgSIAFgOIgphmIARAAIAWA6QAIATAAAJIABAAIAFgPIAahHIAQAAIgsBzQgFASgJAHQgJAHgNAAQgHAAgHgBg");
	this.shape_27.setTransform(294.675,778.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHBJIAAiRIAPAAIAACRg");
	this.shape_28.setTransform(287.475,774.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgPAhIAAg8IgOAAIAAgIIAOgGIAHgWIAIAAIAAAYIAeAAIAAAMIgeAAIAAA7QAAAJAEAFQAFAFAHAAIAIAAIAGgCIAAAMIgHACIgJABQgdAAAAgfg");
	this.shape_29.setTransform(281.675,775.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgYAnQgMgNAAgZQAAgZAMgOQAMgOAWAAQAIAAAIABIALAEIgFANIgLgDIgLgCQgeAAAAAnQAAATAHAKQAIALAOAAQANAAAOgGIAAAOQgLAFgQAAQgVAAgMgOg");
	this.shape_30.setTransform(274,776.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_31.setTransform(263.875,776.525);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgdA0IAAhlIAOAAIABATIABAAQAFgKAIgGQAHgFALAAIAMABIgCAOIgMgBQgMAAgIAKQgJAKAAAPIAAA2g");
	this.shape_32.setTransform(255.25,776.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgHBGIAAhlIAPAAIAABlgAgFgzQgDgDAAgFQAAgFADgDQACgDADAAQAEAAADADQACADAAAFQAAAFgCADQgDADgEAAQgDAAgCgDg");
	this.shape_33.setTransform(248.275,774.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AghA8QgLgNAAgaQAAgZALgOQALgOAVABQATgBALAQIABAAIAAgIIgBgHIAAgqIAQAAIAACRIgNAAIgCgOIgBAAQgKAQgUAAQgVAAgLgOgAgVgIQgHAKAAATQAAAUAHAKQAHAKAOAAQAPAAAHgJQAIgJgBgTIAAgDQABgVgIgJQgHgKgPAAQgOAAgHALg");
	this.shape_34.setTransform(239.7,774.45);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAWBJIgjgxIgLAKIAAAnIgQAAIAAiRIAQAAIAABNIgBAQIABAAIALgQIAhgiIASAAIgpArIAsA7g");
	this.shape_35.setTransform(224.85,774.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgYAnQgMgNAAgZQAAgZAMgOQANgOAVAAQAIAAAHABIAMAEIgFANIgLgDIgLgCQgeAAAAAnQAAATAIAKQAHALAOAAQANAAANgGIAAAOQgKAFgQAAQgVAAgMgOg");
	this.shape_36.setTransform(214.8,776.525);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgHBGIAAhlIAPAAIAABlgAgFgzQgDgDAAgFQAAgFADgDQACgDADAAQAEAAADADQACADAAAFQAAAFgCADQgDADgEAAQgDAAgCgDg");
	this.shape_37.setTransform(207.625,774.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgHBJIAAiRIAPAAIAACRg");
	this.shape_38.setTransform(202.825,774.35);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgYAnQgMgNAAgZQAAgZAMgOQAMgOAWAAQAIAAAIABIALAEIgFANIgLgDIgLgCQgeAAAAAnQAAATAHAKQAIALAOAAQANAAAOgGIAAAOQgLAFgPAAQgWAAgMgOg");
	this.shape_39.setTransform(196.05,776.525);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgcA0IAAhlIAMAAIACATIABAAQAFgKAIgGQAHgFALAAIALABIgCAOIgLgBQgMAAgIAKQgJAKAAAPIAAA2g");
	this.shape_40.setTransform(183.1,776.425);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgYAvQgLgHgFgMQgGgMAAgQQAAgYANgOQAMgOAVAAQAWAAAMAOQANAOAAAYQAAAZgNAOQgMAOgWAAQgNAAgLgGgAgWgdQgIAKAAATQAAATAIALQAIAKAOAAQAPAAAIgKQAIgKAAgUQAAgTgIgKQgIgKgPAAQgPAAgHAKg");
	this.shape_41.setTransform(172.7,776.525);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgNAXIAFgXIAEgXIARAAIABADIgHAVIgIAWg");
	this.shape_42.setTransform(159.25,781.75);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AghArQgJgJAAgTIAAhCIAPAAIAABBQAAANAHAGQAFAGAMAAQAPAAAIgJQAHgJAAgTIAAg1IAQAAIAABlIgNAAIgDgOIAAAAQgFAIgIAEQgJAEgJAAQgTAAgKgJg");
	this.shape_43.setTransform(151.35,776.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAcA0IAAhBQAAgNgHgGQgFgGgNAAQgOAAgIAJQgIAIABAUIAAA1IgQAAIAAhlIAMAAIADAOIABAAQAFgIAIgEQAJgEAJAAQATAAAJAJQAKAJAAATIAABCg");
	this.shape_44.setTransform(139.7,776.425);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_45.setTransform(128.425,776.525);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AA6A0IAAhCQAAgMgGgGQgFgGgLAAQgOAAgHAIQgHAJAAARIAAA4IgPAAIAAhCQAAgMgFgGQgFgGgLAAQgPAAgHAJQgHAIAAAUIAAA1IgPAAIAAhlIAMAAIADAOIABAAQAEgIAIgEQAIgEAKAAQAYAAAHARIAAAAQAFgIAJgFQAIgEALAAQASAAAJAJQAIAJAAATIAABCg");
	this.shape_46.setTransform(114.125,776.425);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_47.setTransform(294.625,747.925);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgIAzIgnhlIARAAIAWA7QAIAWAAAGIABAAIAGgUIAYhDIARAAIgnBlg");
	this.shape_48.setTransform(284.4,747.925);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgYAvQgKgHgHgMQgFgMAAgQQAAgYANgOQAMgOAVAAQAWAAANAOQAMAOAAAYQAAAZgMAOQgNAOgWAAQgNAAgLgGgAgXgdQgHAKAAATQAAATAIALQAHAKAPAAQAPAAAIgKQAIgKAAgUQAAgTgIgKQgIgKgPAAQgOAAgJAKg");
	this.shape_49.setTransform(273.8,747.925);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgPBGQgIgEgGgHIgBAAIgDANIgLAAIAAiRIAPAAIAAAjIAAAWIAAAAQALgQAVAAQAUABALAOQALANAAAYQAAAagLAOQgLAOgUAAQgJAAgJgEgAgWgJQgHAJAAAUQAAAWAIAJQAHAKAPAAQAOAAAHgLQAHgKAAgUQAAgUgHgIQgHgKgPAAQgPgBgHAKg");
	this.shape_50.setTransform(262.425,745.85);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgfAtQgJgIAAgOQAAgeAwgCIASAAIAAgHQAAgMgFgGQgFgFgMAAQgLAAgRAIIgFgMQAIgEAJgDQAJgCAIAAQASAAAJAIQAJAIAAASIAABFIgLAAIgEgOIAAAAQgIAJgHAEQgIADgKAAQgQAAgIgIgAAKABQgSABgHAFQgJAFAAALQAAAIAFAFQAGAEAJAAQANAAAIgIQAIgIAAgOIAAgJg");
	this.shape_51.setTransform(250.65,747.925);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_52.setTransform(235.325,747.925);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAcBJIAAhDQgBgLgFgGQgGgHgMABQgQAAgHAJQgIAIAAAUIAAA1IgPAAIAAiRIAPAAIAAAsIAAAOIAAAAQAGgIAIgEQAJgEAJgBQATAAAJAJQAKAJAAATIAABDg");
	this.shape_53.setTransform(224.1,745.75);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgPAhIAAg8IgOAAIAAgIIAOgGIAHgWIAIAAIAAAYIAeAAIAAAMIgeAAIAAA7QAAAJAEAFQAFAFAHAAIAIAAIAGgCIAAAMIgHACIgJABQgdAAAAgfg");
	this.shape_54.setTransform(214.775,746.825);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AA6A0IAAhCQAAgMgGgGQgFgGgLAAQgOAAgHAIQgHAJAAARIAAA4IgPAAIAAhCQAAgMgFgGQgFgGgLAAQgPAAgHAJQgHAIAAAUIAAA1IgPAAIAAhlIAMAAIADAOIABAAQAEgIAIgEQAIgEAKAAQAYAAAHARIAAAAQAFgIAJgFQAIgEALAAQASAAAJAJQAIAJAAATIAABCg");
	this.shape_55.setTransform(197.625,747.825);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgYAvQgLgHgFgMQgGgMAAgQQAAgYAMgOQANgOAVAAQAWAAANAOQAMAOAAAYQAAAZgMAOQgNAOgWAAQgNAAgLgGgAgWgdQgIAKAAATQAAATAIALQAIAKAOAAQAPAAAIgKQAIgKAAgUQAAgTgIgKQgIgKgPAAQgPAAgHAKg");
	this.shape_56.setTransform(182.85,747.925);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgcA0IAAhlIAMAAIACATIABAAQAGgKAHgGQAIgFAJAAIAMABIgCAOIgLgBQgMAAgIAKQgJAKAAAPIAAA2g");
	this.shape_57.setTransform(173.85,747.825);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgQBJIAAhZIgTAAIAAgHIATgGIAAgGQAAgmAgABQAIAAALADIgDANQgJgEgHAAQgJABgEAFQgDAGAAANIAAAHIAZAAIAAAMIgZAAIAABZg");
	this.shape_58.setTransform(166.55,745.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgPAhIAAg8IgOAAIAAgIIAOgGIAHgWIAIAAIAAAYIAeAAIAAAMIgeAAIAAA7QAAAJAEAFQAFAFAHAAIAIAAIAGgCIAAAMIgHACIgJABQgdAAAAgfg");
	this.shape_59.setTransform(154.375,746.825);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgYAnQgMgNAAgZQAAgZAMgOQANgOAVAAIAQABIALAEIgFANIgLgDIgLgCQgeAAAAAnQAAATAIAKQAHALAOAAQANAAAOgGIAAAOQgLAFgQAAQgVAAgMgOg");
	this.shape_60.setTransform(146.75,747.925);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_61.setTransform(136.625,747.925);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgHBJIAAiRIAPAAIAACRg");
	this.shape_62.setTransform(128.825,745.75);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgdAnQgNgOAAgYQAAgYAMgPQAMgOAUAAQATAAALAMQALANAAAVIAAAJIhFAAQAAASAJAJQAIAKAPAAQARAAAQgHIAAANQgIAEgIACQgHABgKAAQgWAAgNgOgAAbgJQAAgPgHgHQgGgIgNAAQgLAAgHAIQgIAIgBAOIA1AAIAAAAg");
	this.shape_63.setTransform(121.075,747.925);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgqBAIAAgQQAIAEAKADQAKACAKAAQAPAAAIgHQAIgFAAgMQAAgGgDgFQgCgFgIgEQgGgDgNgFQgTgGgIgKQgJgJAAgPQABgQALgJQAMgJATAAQAVAAAQAHIgEAOQgRgIgQAAQgMAAgHAGQgHAGAAAKQAAAGACAFQADAFAGAEQAHADALAFQAWAGAIAJQAIAJAAAOQAAASgNAKQgNAKgWAAQgYABgNgHg");
	this.shape_64.setTransform(110.45,746.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgSBJQAMgPAFgTQAGgTgBgTQAAgTgEgTQgGgTgMgQIANAAQAMAOAFATQAHATAAAVQAAAVgHATQgFATgMANg");
	this.shape_65.setTransform(305.2,435.075);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAXAtIgRgzIgGgXIAAAAIgFAXIgRAzIgQAAIgZhZIAPAAIANAyIAFAYIABAAIACgLIAEgNIAQgyIAOAAIARAyQAEAPACAJIABAAIABgJIAShBIANAAIgYBZg");
	this.shape_66.setTransform(296.35,435.25);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgVApQgJgGgFgLQgFgKAAgOQAAgVALgMQALgNASAAQATAAALANQALANAAAUQAAAWgLAMQgLAMgTABQgLgBgKgFgAgTgZQgHAJAAAQQAAARAHAJQAHAJAMAAQANAAAHgIQAHgKAAgRQAAgQgHgJQgHgJgNAAQgNAAgGAJg");
	this.shape_67.setTransform(284.725,435.25);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_68.setTransform(277.575,433.375);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgOBAIAAhOIgQAAIAAgGIAQgFIAAgFQAAghAcAAQAHAAAKADIgEAKQgIgCgFAAQgIAAgDAFQgDAFAAAMIAAAFIAWAAIAAALIgWAAIAABOg");
	this.shape_69.setTransform(273.125,433.325);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_70.setTransform(263.425,433.375);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgVApQgJgGgFgLQgFgKAAgOQAAgVALgMQALgNASAAQATAAALANQALANAAAUQAAAWgLAMQgLAMgTABQgLgBgKgFgAgTgZQgHAJAAAQQAAARAHAJQAHAJAMAAQANAAAHgIQAHgKAAgRQAAgQgHgJQgHgJgNAAQgNAAgGAJg");
	this.shape_71.setTransform(256.225,435.25);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgZAuIAAhZIALAAIACARIABAAQAFgJAGgFQAHgFAIAAIALABIgCANIgKgBQgLAAgGAIQgIAJAAAOIAAAvg");
	this.shape_72.setTransform(248.325,435.175);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgNAcIAAg0IgNAAIAAgGIANgGIAGgTIAHAAIAAAUIAaAAIAAALIgaAAIAAA0QAAAIAEAFQADAEAHAAIAHAAIAGgBIAAAJIgHACIgIABQgZAAAAgcg");
	this.shape_73.setTransform(241.325,434.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAYAuIAAg5QAAgLgFgGQgFgFgKAAQgOAAgHAHQgGAIAAASIAAAuIgOAAIAAhZIALAAIADAMIABAAQAEgGAHgEQAIgEAIAAQAQAAAJAIQAHAIAAARIAAA6g");
	this.shape_74.setTransform(233.35,435.175);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgVApQgJgGgFgLQgFgKAAgOQAAgVALgMQALgNASAAQATAAALANQALANAAAUQAAAWgLAMQgLAMgTABQgLgBgKgFgAgTgZQgHAJAAAQQAAARAHAJQAHAJAMAAQANAAAHgIQAHgKAAgRQAAgQgHgJQgHgJgNAAQgNAAgGAJg");
	this.shape_75.setTransform(223.075,435.25);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgVAiQgLgLAAgWQAAgWAMgMQAKgNATAAIANACIALADIgFALIgKgCIgJgBQgagBgBAjQAAAQAIAJQAGAJAMgBQALABAMgFIAAAMQgJAEgOABQgSgBgLgMg");
	this.shape_76.setTransform(214.25,435.25);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAGBJQgLgOgHgSQgGgTAAgVQAAgVAGgTQAHgTALgOIANAAQgMAQgFATQgGATAAATQAAATAGATQAFATAMAPg");
	this.shape_77.setTransform(207.65,435.075);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_78.setTransform(198.725,433.375);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgbAoQgIgHAAgNQAAgaArgBIAPgBIAAgGQAAgKgFgFQgEgFgKAAQgLAAgOAHIgEgLQAHgDAIgCQAIgDAGAAQARAAAHAIQAIAHAAAQIAAA8IgKAAIgDgNIAAAAQgHAIgHADQgGAEgJAAQgOgBgHgGgAAJACQgPAAgIAEQgHAFAAAKQAAAGAFAEQAEAEAIABQAMgBAHgGQAHgIAAgMIAAgIg");
	this.shape_79.setTransform(191.675,435.25);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAYAuIAAg5QAAgLgFgGQgFgFgKAAQgOAAgGAHQgHAIAAASIAAAuIgOAAIAAhZIAMAAIACAMIABAAQADgGAIgEQAHgEAJAAQAQAAAJAIQAHAIABARIAAA6g");
	this.shape_80.setTransform(182.25,435.175);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgVApQgJgGgFgLQgFgKAAgOQAAgVALgMQALgNASAAQATAAALANQALANAAAUQAAAWgLAMQgLAMgTABQgLgBgKgFgAgTgZQgHAJAAAQQAAARAHAJQAHAJAMAAQANAAAHgIQAHgKAAgRQAAgQgHgJQgHgJgNAAQgNAAgGAJg");
	this.shape_81.setTransform(171.975,435.25);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgGA+IAAhZIANAAIAABZgAgFgtQgCgCAAgFQAAgEACgCQACgDADAAQADAAADADQACACAAAEQAAAFgCACQgDADgDAAQgDAAgCgDg");
	this.shape_82.setTransform(164.85,433.575);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgNAcIAAg0IgNAAIAAgGIANgGIAGgTIAHAAIAAAUIAaAAIAAALIgaAAIAAA0QAAAIAEAFQADAEAHAAIAHAAIAGgBIAAAJIgHACIgIABQgZAAAAgcg");
	this.shape_83.setTransform(159.725,434.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgGA+IAAhZIANAAIAABZgAgFgtQgCgCAAgFQAAgEACgCQACgDADAAQADAAADADQACACAAAEQAAAFgCACQgDADgDAAQgDAAgCgDg");
	this.shape_84.setTransform(154.75,433.575);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgdA0QgJgLgBgWQABgWAJgMQAKgNARAAQASAAAJAOIACAAIgBgHIAAgGIAAglIANAAIAAB/IgKAAIgCgMIgBAAQgJAOgTAAQgRgBgKgMgAgSgHQgGAIAAASQAAAQAGAKQAGAIAMAAQANAAAHgHQAGgIAAgRIAAgCQAAgTgGgIQgHgIgNAAQgMAAgGAJg");
	this.shape_85.setTransform(147.25,433.45);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAYAuIAAg5QAAgLgFgGQgFgFgLAAQgNAAgHAHQgGAIAAASIAAAuIgNAAIAAhZIAKAAIACAMIABAAQAFgGAHgEQAHgEAJAAQAQAAAIAIQAJAIgBARIAAA6g");
	this.shape_86.setTransform(137.3,435.175);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgVApQgJgGgFgLQgFgKAAgOQAAgVALgMQALgNASAAQATAAALANQALANAAAUQAAAWgLAMQgLAMgTABQgLgBgKgFgAgTgZQgHAJAAAQQAAARAHAJQAHAJAMAAQANAAAHgIQAHgKAAgRQAAgQgHgJQgHgJgNAAQgNAAgGAJg");
	this.shape_87.setTransform(127.025,435.25);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgeAtQgOgPAAgeQAAgSAGgOQAHgOANgHQAOgHAQgBQATABAOAGIgGAMQgNgGgOAAQgTAAgLANQgMANAAAWQAAAXAMANQAKANAUAAQAMAAARgEIAAAMQgNAEgSABQgagBgOgQg");
	this.shape_88.setTransform(116.975,433.75);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgeApIAAgMIANAEQAIADAGAAQALAAAFgEQAGgEAAgHQAAgFgFgEQgEgDgNgFQgMgEgGgEQgEgDgDgFQgDgEAAgGQAAgLAJgGQAJgHAPABQAOAAAOAFIgFALQgNgFgMAAQgIAAgFADQgFADAAAFQAAAEACADIAGAEIAPAHQAQAFAFAFQAGAGAAAJQAAANgJAHQgKAGgQABQgRgBgKgFg");
	this.shape_89.setTransform(192.5,270.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgNAcIAAg0IgNAAIAAgGIANgGIAGgTIAHAAIAAAUIAaAAIAAALIgaAAIAAA0QAAAIAEAFQADAEAHAAIAHgBIAGAAIAAAJIgHACIgIABQgZAAAAgcg");
	this.shape_90.setTransform(185.525,269.25);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAYAuIAAg5QAAgLgFgGQgFgFgLAAQgNAAgGAHQgHAIAAASIAAAuIgNAAIAAhZIALAAIACAMIAAAAQAEgGAIgEQAHgEAJAAQAQAAAIAIQAJAIAAARIAAA6g");
	this.shape_91.setTransform(177.5,270.125);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgaAjQgLgMAAgWQAAgVAKgMQAMgNAQAAQASAAAJALQAKAKAAATIAAAHIg9AAQAAAQAIAJQAIAHANABQAOgBAOgFIAAAMIgNAFIgQABQgTgBgMgLgAAYgHQAAgNgHgHQgFgHgLAAQgKAAgGAHQgGAHgBANIAuAAIAAAAg");
	this.shape_92.setTransform(167.65,270.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAyAuIAAg6QAAgKgEgGQgEgFgKAAQgNAAgGAHQgGAHAAAQIAAAxIgNAAIAAg6QAAgKgFgGQgEgFgKAAQgMAAgHAHQgFAIAAASIAAAuIgOAAIAAhZIALAAIACAMIABAAQAEgGAHgEQAHgEAJAAQAUAAAGAPIABAAQAEgHAHgEQAIgEAJAAQAQAAAIAIQAHAIAAARIAAA6g");
	this.shape_93.setTransform(155.15,270.125);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAzAuIAAg6QAAgKgFgGQgFgFgJAAQgNAAgGAHQgGAHAAAQIAAAxIgNAAIAAg6QAAgKgEgGQgFgFgKAAQgMAAgHAHQgFAIgBASIAAAuIgNAAIAAhZIALAAIACAMIABAAQAEgGAHgEQAHgEAIAAQAWAAAFAPIABAAQADgHAJgEQAHgEAKAAQAPAAAHAIQAIAIAAARIAAA6g");
	this.shape_94.setTransform(139.55,270.125);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgVApQgJgGgFgLQgFgKAAgOQAAgVALgMQALgMASAAQATAAALAMQALANAAAUQAAAWgLANQgLALgTABQgLgBgKgFgAgTgZQgHAJAAAQQAAARAHAJQAHAJAMAAQANAAAHgIQAHgJAAgSQAAgQgHgJQgHgJgNAAQgNAAgGAJg");
	this.shape_95.setTransform(126.625,270.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgeAtQgOgPAAgeQAAgSAGgOQAHgOANgHQAOgIAQAAQATABAOAGIgGAMQgNgGgOAAQgTAAgLANQgMANAAAWQAAAXAMANQAKAOAUAAQAMgBARgFIAAANQgNAEgSABQgagBgOgQg");
	this.shape_96.setTransform(116.575,268.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgSBJQAMgPAFgTQAGgTgBgTQAAgTgEgTQgGgTgMgQIAOAAQALAOAFATQAHATAAAVQAAAVgHATQgFATgLANg");
	this.shape_97.setTransform(313.3,650.975);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAXAtIgRgzIgGgXIAAAAIgFAXIgRAzIgQAAIgZhZIAPAAIANAyIAFAZIABAAIACgMIAEgNIAQgyIAOAAIARAyQAEAPACAKIABAAIABgJIAShCIANAAIgYBZg");
	this.shape_98.setTransform(304.45,651.15);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgVApQgJgGgFgLQgFgKAAgOQAAgVALgMQALgNASAAQATAAALANQALAMAAAVQAAAWgLAMQgLANgTAAQgLAAgKgGgAgTgZQgHAJAAAQQAAARAHAJQAHAJAMAAQANAAAHgJQAHgIAAgSQAAgQgHgJQgHgJgNAAQgNAAgGAJg");
	this.shape_99.setTransform(292.825,651.15);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_100.setTransform(285.675,649.275);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgOBAIAAhOIgQAAIAAgGIAQgFIAAgFQAAghAcAAQAHAAAKADIgEAKQgIgCgFAAQgIAAgDAFQgDAFAAAMIAAAFIAWAAIAAALIgWAAIAABOg");
	this.shape_101.setTransform(281.225,649.225);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_102.setTransform(271.525,649.275);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgVApQgJgGgFgLQgFgKAAgOQAAgVALgMQALgNASAAQATAAALANQALAMAAAVQAAAWgLAMQgLANgTAAQgLAAgKgGgAgTgZQgHAJAAAQQAAARAHAJQAHAJAMAAQANAAAHgJQAHgIAAgSQAAgQgHgJQgHgJgNAAQgNAAgGAJg");
	this.shape_103.setTransform(264.325,651.15);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgZAuIAAhZIALAAIACARIABAAQAFgJAGgFQAHgFAIAAIALABIgCANIgKgBQgLAAgGAIQgIAJAAAOIAAAvg");
	this.shape_104.setTransform(256.425,651.075);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgNAcIAAg0IgNAAIAAgHIANgFIAGgTIAHAAIAAAUIAaAAIAAALIgaAAIAAA0QAAAIAEAEQADAFAHAAIAHAAIAGgBIAAAKIgHABIgIABQgZAAAAgcg");
	this.shape_105.setTransform(249.475,650.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAYAuIAAg5QAAgLgFgGQgFgFgLAAQgNAAgGAHQgHAIAAASIAAAuIgNAAIAAhZIALAAIABAMIABAAQAFgGAHgEQAIgEAIAAQAQAAAIAIQAJAIAAARIAAA6g");
	this.shape_106.setTransform(241.5,651.075);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgVApQgJgGgFgLQgFgKAAgOQAAgVALgMQALgNASAAQATAAALANQALAMAAAVQAAAWgLAMQgLANgTAAQgLAAgKgGgAgTgZQgHAJAAAQQAAARAHAJQAHAJAMAAQANAAAHgJQAHgIAAgSQAAgQgHgJQgHgJgNAAQgNAAgGAJg");
	this.shape_107.setTransform(231.225,651.15);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgVAiQgLgMAAgVQAAgWAMgMQAKgNATAAIANACIALADIgFALIgKgCIgJgBQgaAAAAAiQgBAQAIAJQAGAIAMAAQALABAMgFIAAAMQgJAFgOAAQgSAAgLgNg");
	this.shape_108.setTransform(222.35,651.15);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAGBJQgLgOgGgSQgHgTAAgVQAAgVAHgTQAGgTALgOIANAAQgLAQgHATQgEATAAATQAAATAEATQAHATALAPg");
	this.shape_109.setTransform(215.8,650.975);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_110.setTransform(206.825,649.275);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_111.setTransform(202.625,649.275);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgbAoQgIgHAAgNQAAgaArgBIAPgBIAAgFQAAgLgFgFQgEgFgKAAQgLAAgOAHIgEgLQAHgDAIgCQAIgDAGAAQARAAAHAIQAIAHAAAQIAAA8IgKAAIgDgNIAAAAQgHAIgHADQgGAEgJAAQgOAAgHgHgAAJACQgPAAgIAEQgHAFAAAKQAAAGAFAEQAEAEAIAAQAMAAAHgGQAHgIAAgMIAAgIg");
	this.shape_112.setTransform(195.575,651.15);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgVAiQgKgMAAgVQAAgWALgMQAKgNATAAIANACIALADIgFALIgKgCIgJgBQgaAAgBAiQAAAQAIAJQAGAIAMAAQAMABALgFIAAAMQgJAFgOAAQgSAAgLgNg");
	this.shape_113.setTransform(187.45,651.15);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAYAuIAAg5QAAgLgFgGQgFgFgKAAQgOAAgHAHQgGAIAAASIAAAuIgOAAIAAhZIALAAIACAMIACAAQAEgGAHgEQAIgEAIAAQAQAAAIAIQAIAIAAARIAAA6g");
	this.shape_114.setTransform(173.85,651.075);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgVApQgJgGgFgLQgFgKAAgOQAAgVALgMQALgNASAAQATAAALANQALAMAAAVQAAAWgLAMQgLANgTAAQgLAAgKgGgAgTgZQgHAJAAAQQAAARAHAJQAHAJAMAAQANAAAHgJQAHgIAAgSQAAgQgHgJQgHgJgNAAQgNAAgGAJg");
	this.shape_115.setTransform(163.575,651.15);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgGA+IAAhZIANAAIAABZgAgFgtQgCgCAAgFQAAgEACgCQADgDACAAQADAAACADQADACAAAEQAAAFgDACQgCADgDAAQgCAAgDgDg");
	this.shape_116.setTransform(156.45,649.475);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgNAcIAAg0IgNAAIAAgHIANgFIAGgTIAHAAIAAAUIAaAAIAAALIgaAAIAAA0QAAAIAEAEQADAFAHAAIAHAAIAGgBIAAAKIgHABIgIABQgZAAAAgcg");
	this.shape_117.setTransform(151.375,650.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgVAiQgLgMAAgVQABgWAKgMQALgNAUAAIAMACIAKADIgEALIgJgCIgKgBQgaAAAAAiQAAAQAGAJQAHAIAMAAQAMABALgFIAAAMQgJAFgNAAQgTAAgLgNg");
	this.shape_118.setTransform(144.65,651.15);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAYAuIAAg5QAAgLgFgGQgFgFgLAAQgNAAgHAHQgGAIAAASIAAAuIgNAAIAAhZIAKAAIACAMIABAAQAFgGAHgEQAIgEAIAAQAQAAAIAIQAJAIgBARIAAA6g");
	this.shape_119.setTransform(135.4,651.075);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgcAmQgJgIABgRIAAg6IANAAIAAA6QAAALAFAFQAFAFALAAQANAAAHgHQAGgIAAgRIAAgvIANAAIAABZIgKAAIgCgMIgBAAQgFAHgHADQgHAEgJAAQgQAAgIgIg");
	this.shape_120.setTransform(125.05,651.225);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AghA8IAAh3IBCAAIAAANIgzAAIAAArIAwAAIAAAMIgwAAIAAAzg");
	this.shape_121.setTransform(116.3,649.65);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAYAuIAAg5QAAgLgFgGQgFgFgLAAQgNAAgHAHQgGAIAAASIAAAuIgNAAIAAhZIAKAAIACAMIABAAQAFgGAHgEQAIgEAIAAQAQAAAIAIQAJAIgBARIAAA6g");
	this.shape_122.setTransform(172.75,590.475);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgVApQgJgFgFgLQgFgLAAgOQAAgVALgMQALgNASAAQATAAALANQALAMAAAVQAAAWgLANQgLALgTAAQgLABgKgGgAgTgZQgHAIAAARQAAARAHAJQAHAJAMAAQANAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgNAAQgNAAgGAJg");
	this.shape_123.setTransform(162.475,590.55);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgGA+IAAhZIAMAAIAABZgAgFgtQgCgCAAgFQAAgEACgCQADgDACAAQADAAACADQADACAAAEQAAAFgDACQgCADgDAAQgCAAgDgDg");
	this.shape_124.setTransform(155.35,588.875);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgNAdIAAg1IgNAAIAAgHIANgFIAGgTIAHAAIAAAVIAaAAIAAAKIgaAAIAAA0QAAAIAEAEQADAFAHAAIAHAAIAGgCIAAALIgHACIgIAAQgZAAAAgbg");
	this.shape_125.setTransform(150.275,589.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgVAjQgKgMAAgXQgBgVALgMQALgNAUAAIAMACIAKADIgEAMIgJgEIgKgBQgbABAAAhQABARAGAJQAHAIAMABQAMgBALgEIAAAMQgJAFgOgBQgSAAgLgLg");
	this.shape_126.setTransform(143.55,590.55);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AAYAuIAAg5QAAgLgFgGQgFgFgLAAQgNAAgGAHQgHAIAAASIAAAuIgNAAIAAhZIALAAIABAMIABAAQAEgGAIgEQAHgEAJAAQAQAAAIAIQAJAIAAARIAAA6g");
	this.shape_127.setTransform(134.3,590.475);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgdAmQgHgIAAgRIAAg6IANAAIAAA6QAAALAFAFQAFAFALAAQANAAAHgHQAGgIAAgRIAAgvIAOAAIAABZIgLAAIgDgMIgBAAQgEAHgHADQgIAEgIAAQgQAAgJgIg");
	this.shape_128.setTransform(123.95,590.625);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AggA8IAAh3IBBAAIAAAMIg0AAIAAAsIAxAAIAAALIgxAAIAAA0g");
	this.shape_129.setTransform(115.2,589.05);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgSBJQALgPAHgTQAEgTAAgTQABgTgFgTQgGgTgMgQIANAAQAMAOAFATQAHATAAAVQAAAVgHATQgFATgMANg");
	this.shape_130.setTransform(282.9,485.825);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAWAtIgQgzIgGgXIAAAAIgFAXIgRAzIgQAAIgZhZIAPAAIANAyIAFAZIABAAIACgMIAEgNIARgyIANAAIAQAyQAFAPACAKIABAAIABgJIAShCIAOAAIgZBZg");
	this.shape_131.setTransform(274.05,486);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgVApQgJgGgFgLQgFgKAAgOQAAgVALgMQALgNASAAQATAAALANQALAMAAAVQAAAWgLAMQgLANgTAAQgLAAgKgGgAgTgZQgHAJAAAQQAAARAHAJQAHAJAMAAQANAAAHgJQAHgIAAgSQAAgQgHgJQgHgJgNAAQgNAAgGAJg");
	this.shape_132.setTransform(262.425,486);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_133.setTransform(255.275,484.125);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgOBAIAAhOIgQAAIAAgGIAQgFIAAgFQAAghAcAAQAHAAAKADIgEAKQgIgCgFAAQgIAAgDAFQgDAFAAAMIAAAFIAWAAIAAALIgWAAIAABOg");
	this.shape_134.setTransform(250.825,484.075);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_135.setTransform(241.125,484.125);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgVApQgJgGgFgLQgFgKAAgOQAAgVALgMQALgNASAAQATAAALANQALAMAAAVQAAAWgLAMQgLANgTAAQgLAAgKgGgAgTgZQgHAJAAAQQAAARAHAJQAHAJAMAAQANAAAHgJQAHgIAAgSQAAgQgHgJQgHgJgNAAQgNAAgGAJg");
	this.shape_136.setTransform(233.925,486);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgZAuIAAhZIALAAIACARIABAAQAFgJAGgFQAHgFAIAAIALABIgCANIgKgBQgLAAgGAIQgIAJAAAOIAAAvg");
	this.shape_137.setTransform(226.025,485.925);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgNAcIAAg0IgNAAIAAgHIANgFIAGgTIAHAAIAAAVIAaAAIAAAKIgaAAIAAA0QAAAIAEAEQADAFAHAAIAHAAIAGgBIAAAKIgHABIgIABQgZAAAAgcg");
	this.shape_138.setTransform(219.025,485.05);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAYAuIAAg5QAAgLgFgGQgFgFgKAAQgOAAgGAHQgHAIAAASIAAAuIgOAAIAAhZIAMAAIACAMIABAAQADgGAIgEQAHgEAJAAQAQAAAJAIQAHAIABARIAAA6g");
	this.shape_139.setTransform(211.05,485.925);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgVApQgJgGgFgLQgFgKAAgOQAAgVALgMQALgNASAAQATAAALANQALAMAAAVQAAAWgLAMQgLANgTAAQgLAAgKgGgAgTgZQgHAJAAAQQAAARAHAJQAHAJAMAAQANAAAHgJQAHgIAAgSQAAgQgHgJQgHgJgNAAQgNAAgGAJg");
	this.shape_140.setTransform(200.775,486);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgVAiQgKgMAAgVQAAgWALgMQAKgNATAAIANACIALADIgFALIgKgCIgJgBQgaAAgBAiQAAAQAIAJQAGAIAMAAQAMABALgFIAAAMQgJAFgOAAQgSAAgLgNg");
	this.shape_141.setTransform(191.95,486);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAGBJQgLgOgGgSQgHgTAAgVQAAgVAHgTQAGgTALgOIANAAQgLAQgHATQgEATgBATQABATAEATQAHATALAPg");
	this.shape_142.setTransform(185.35,485.825);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AAYAuIAAg5QAAgLgFgGQgFgFgLAAQgNAAgGAHQgHAIAAASIAAAuIgNAAIAAhZIALAAIACAMIAAAAQAEgGAIgEQAHgEAJAAQAQAAAIAIQAJAIAAARIAAA6g");
	this.shape_143.setTransform(173.45,485.925);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgVApQgJgGgFgLQgFgKAAgOQAAgVALgMQALgNASAAQATAAALANQALAMAAAVQAAAWgLAMQgLANgTAAQgLAAgKgGgAgTgZQgHAJAAAQQAAARAHAJQAHAJAMAAQANAAAHgJQAHgIAAgSQAAgQgHgJQgHgJgNAAQgNAAgGAJg");
	this.shape_144.setTransform(163.175,486);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgGA+IAAhZIAMAAIAABZgAgFgtQgCgCAAgFQAAgEACgCQADgDACAAQADAAACADQADACAAAEQAAAFgDACQgCADgDAAQgCAAgDgDg");
	this.shape_145.setTransform(156.05,484.325);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgNAcIAAg0IgNAAIAAgHIANgFIAGgTIAHAAIAAAVIAaAAIAAAKIgaAAIAAA0QAAAIAEAEQADAFAHAAIAHAAIAGgBIAAAKIgHABIgIABQgZAAAAgcg");
	this.shape_146.setTransform(150.925,485.05);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgbAoQgIgHAAgNQAAgaArgBIAPgBIAAgFQAAgLgFgFQgEgFgKAAQgLAAgOAHIgEgLQAHgDAIgCQAIgDAGAAQARAAAHAIQAIAHAAAQIAAA8IgKAAIgDgNIAAAAQgHAIgHADQgGAEgJAAQgOAAgHgHgAAJACQgPAAgIAEQgHAFAAAKQAAAGAFAEQAEAEAIAAQAMAAAHgGQAHgIAAgMIAAgIg");
	this.shape_147.setTransform(143.075,486);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgZAuIAAhZIALAAIACARIABAAQAFgJAGgFQAHgFAIAAIALABIgCANIgKgBQgLAAgGAIQgIAJAAAOIAAAvg");
	this.shape_148.setTransform(135.925,485.925);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgZAiQgMgLAAgWQAAgVALgMQALgOAQAAQASAAAJAMQAKAKAAATIAAAIIg9AAQABAQAHAHQAHAIANAAQAPAAAOgFIAAAMIgOAFIgPABQgTAAgLgNgAAXgHQAAgOgFgGQgGgHgLAAQgJAAgHAHQgHAHgBANIAuAAIAAAAg");
	this.shape_149.setTransform(127.2,486);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgNAcIAAg0IgNAAIAAgHIANgFIAGgTIAHAAIAAAVIAaAAIAAAKIgaAAIAAA0QAAAIAEAEQADAFAHAAIAHAAIAGgBIAAAKIgHABIgIABQgZAAAAgcg");
	this.shape_150.setTransform(119.525,485.05);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgGA8IAAh3IANAAIAAB3g");
	this.shape_151.setTransform(114.25,484.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgeApIAAgMIANAEQAIADAGAAQALAAAFgEQAGgDAAgIQAAgFgFgEQgEgDgNgFQgMgEgFgEQgFgDgDgFQgDgEAAgGQAAgLAJgGQAJgHAPABQAOAAAOAFIgFALQgNgFgMAAQgIAAgFADQgFADAAAFQAAAEACADIAGAEIAPAHQAQAFAFAFQAGAGAAAKQAAAMgJAHQgKAGgQABQgRgBgKgFg");
	this.shape_152.setTransform(179.45,198.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgaAjQgLgMAAgWQAAgVAKgNQAMgMAQAAQASAAAJALQAKALAAASIAAAHIg9AAQAAAQAIAJQAHAHAOABQAOgBAOgFIAAAMIgOAFIgPABQgTgBgMgLgAAYgHQAAgNgHgHQgFgHgLAAQgKAAgGAHQgHAHAAANIAuAAIAAAAg");
	this.shape_153.setTransform(170.7,198.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_154.setTransform(163.875,196.325);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgNA+QgHgEgFgHIgBAAIgDAMIgKAAIAAh+IAOAAIAAAfIAAASIAAAAQAKgNARAAQASAAAKAMQAJAMAAAVQABAWgLANQgJALgSABQgIAAgHgDgAgTgIQgGAIAAASQAAATAHAIQAFAIAOAAQAMAAAGgJQAGgJABgRQgBgSgGgHQgGgJgMAAQgNAAgHAIg");
	this.shape_155.setTransform(156.9,196.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgbAoQgIgHAAgNQAAgaArgBIAPgBIAAgGQAAgKgFgFQgEgFgKAAQgLAAgOAHIgEgLQAHgEAIgBQAIgCAGAAQARgBAHAIQAIAHAAAQIAAA8IgKAAIgDgNIAAAAQgHAIgHAEQgGADgJAAQgOgBgHgGgAAJACQgPAAgIAEQgHAFAAAKQAAAHAFADQAEAFAIAAQAMgBAHgGQAHgIAAgMIAAgIg");
	this.shape_156.setTransform(146.575,198.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgGA+IAAhZIAMAAIAABZgAgFgtQgCgCAAgFQAAgEACgCQADgDACAAQADAAACADQADACAAAEQAAAFgDACQgCADgDAAQgCAAgDgDg");
	this.shape_157.setTransform(140.15,196.525);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgZAuIAAhZIALAAIACARIABAAQAFgJAGgFQAHgFAIAAIALABIgCANIgKgBQgLAAgGAIQgIAJAAAOIAAAvg");
	this.shape_158.setTransform(135.175,198.125);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgbAoQgIgHAAgNQAAgaArgBIAPgBIAAgGQAAgKgFgFQgEgFgKAAQgLAAgOAHIgEgLQAHgEAIgBQAIgCAGAAQARgBAHAIQAIAHAAAQIAAA8IgKAAIgDgNIAAAAQgHAIgHAEQgGADgJAAQgOgBgHgGgAAJACQgPAAgIAEQgHAFAAAKQAAAHAFADQAEAFAIAAQAMgBAHgGQAHgIAAgMIAAgIg");
	this.shape_159.setTransform(126.225,198.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgGA8Igrh3IAPAAIAcBMIAGAbIAHgbIAchMIAPAAIgrB3g");
	this.shape_160.setTransform(116.9,196.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(7));

	// arrows
	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#FFFFFF").ss(1,1,1).p("A+PmyMA8fAAAIAANlMg8fAAAg");
	this.shape_161.setTransform(560.825,174.325);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgsEgDuMBYIAAAIAAHdMhYIAAAg");
	this.shape_162.setTransform(647.35,270.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(255,255,255,0)").s().p("EgsDADvIAAndMBYIAAAIAAHdg");
	this.shape_163.setTransform(647.35,270.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgtCgLaMBaFAAAIAAW1MhaFAAAg");
	this.shape_164.setTransform(649.75,393.175);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgurgJeMBdXAAAIAAS9MhdXAAAg");
	this.shape_165.setTransform(661.2,559.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgyagMeMBk1AAAIAAY9Mhk1AAAg");
	this.shape_166.setTransform(692.775,686.25);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#FFFFFF").ss(1,1,1).p("EghwgEBMBDhAAAIAAIDMhDhAAAg");
	this.shape_167.setTransform(585.2,795.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).wait(1));

	// Buttons2
	this.functionC_button2 = new lib.Button1();
	this.functionC_button2.name = "functionC_button2";
	this.functionC_button2.setTransform(585.55,794.5,1.0839,0.4299,0,0,0,193.8,49.3);
	new cjs.ButtonHelper(this.functionC_button2, 0, 1, 1);

	this.function_button2 = new lib.Button1();
	this.function_button2.name = "function_button2";
	this.function_button2.setTransform(688.85,684.65,1.6176,1.2018,0,0,0,192.3,48.6);
	new cjs.ButtonHelper(this.function_button2, 0, 1, 1);

	this.iteration_button2 = new lib.Button1();
	this.iteration_button2.name = "iteration_button2";
	this.iteration_button2.setTransform(654.45,554.3,1.4483,1.2018,0,0,0,192.3,48.6);
	new cjs.ButtonHelper(this.iteration_button2, 0, 1, 1);

	this.conditional_button2 = new lib.Button1();
	this.conditional_button2.name = "conditional_button2";
	this.conditional_button2.setTransform(646.6,395.55,1.3986,1.2018,0,0,0,192.2,48.6);
	new cjs.ButtonHelper(this.conditional_button2, 0, 1, 1);

	this.comment_button2 = new lib.Button1();
	this.comment_button2.name = "comment_button2";
	this.comment_button2.setTransform(645.55,275.8,1.3897,0.4299,0,0,0,193.7,49.3);
	new cjs.ButtonHelper(this.comment_button2, 0, 1, 1);

	this.variable_button2 = new lib.Button1();
	this.variable_button2.name = "variable_button2";
	this.variable_button2.setTransform(565.15,172.8,1,0.7826,0,0,0,192.2,48.3);
	new cjs.ButtonHelper(this.variable_button2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.variable_button2},{t:this.comment_button2},{t:this.conditional_button2},{t:this.iteration_button2},{t:this.function_button2},{t:this.functionC_button2}]}).to({state:[]},1).wait(6));

	// buttons
	this.button_clear = new lib.Button1();
	this.button_clear.name = "button_clear";
	this.button_clear.setTransform(206.65,132.2,0.6734,0.4299,0,0,0,193.8,49.3);
	new cjs.ButtonHelper(this.button_clear, 0, 1, 1);

	this.button_functionC = new lib.Button1();
	this.button_functionC.name = "button_functionC";
	this.button_functionC.setTransform(210.5,649.7,0.6734,0.4299,0,0,0,193.8,49.3);
	new cjs.ButtonHelper(this.button_functionC, 0, 1, 1);

	this.button_functionB = new lib.Button1();
	this.button_functionB.name = "button_functionB";
	this.button_functionB.setTransform(206.65,591.4,0.6734,0.4299,0,0,0,193.8,49.3);
	new cjs.ButtonHelper(this.button_functionB, 0, 1, 1);

	this.button_iteration = new lib.Button1();
	this.button_iteration.name = "button_iteration";
	this.button_iteration.setTransform(207.6,486.25,0.6734,0.4299,0,0,0,193.8,49.3);
	new cjs.ButtonHelper(this.button_iteration, 0, 1, 1);

	this.button_conditional = new lib.Button1();
	this.button_conditional.name = "button_conditional";
	this.button_conditional.setTransform(207.6,434.5,0.6734,0.4299,0,0,0,193.8,49.3);
	new cjs.ButtonHelper(this.button_conditional, 0, 1, 1);

	this.button_comment = new lib.Button1();
	this.button_comment.name = "button_comment";
	this.button_comment.setTransform(208.55,270.15,0.6734,0.4299,0,0,0,193.8,49.3);
	new cjs.ButtonHelper(this.button_comment, 0, 1, 1);

	this.button_variable = new lib.Button1();
	this.button_variable.name = "button_variable";
	this.button_variable.setTransform(209.55,197.25,0.6734,0.4299,0,0,0,193.8,49.3);
	new cjs.ButtonHelper(this.button_variable, 0, 1, 1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("A+BniMA8DAAAIAAPFMg8DAAAg");
	this.shape_168.setTransform(565.125,194.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_168},{t:this.button_variable},{t:this.button_comment},{t:this.button_conditional},{t:this.button_iteration},{t:this.button_functionB},{t:this.button_functionC},{t:this.button_clear}]}).wait(7));

	// text
	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgIALQgEgDAAgIQAAgGAEgEQADgDAFAAQAGAAADADQAEAEAAAGQAAAHgEAEQgDADgGAAQgFAAgDgDg");
	this.shape_169.setTransform(682.175,480.625);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQAMAAAIgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgQgFgGgFQgHgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgLAAgHAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgXAAgNgHg");
	this.shape_170.setTransform(674.2,475.975);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_171.setTransform(662.475,475.875);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_172.setTransform(649.325,475.975);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDAAgGQAAgGADgCQADgDADAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgDAAgDgDg");
	this.shape_173.setTransform(640.1,473.825);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_174.setTransform(633.45,474.725);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgDgDABgGQgBgGADgCQAEgDADAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgDAAgEgDg");
	this.shape_175.setTransform(627,473.825);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAWABANAQIACAAIgBgIIAAgIIAAgvIARAAIAACjIgPAAIgCgPIAAAAQgNARgXAAQgXAAgMgPgAgYgJQgHALgBAWQABAWAHALQAJAMAPAAQARgBAJgJQAHgKABgWIAAgDQAAgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_176.setTransform(617.35,473.65);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_177.setTransform(604.525,475.875);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_178.setTransform(591.375,475.975);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_179.setTransform(579.975,475.975);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_180.setTransform(562.475,475.875);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgEAAgDgDg");
	this.shape_181.setTransform(553.1,473.825);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_182.setTransform(543.975,475.975);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_183.setTransform(534.45,474.725);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_184.setTransform(527.125,475.875);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAKALQAJALARAAQASAAATgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgCAQIA8AAIAAAAg");
	this.shape_185.setTransform(516,475.975);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_186.setTransform(505.025,475.975);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_187.setTransform(490.475,475.875);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_188.setTransform(479.35,475.975);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQANgQAWAAQAWABANAQIABAAIAAgIIAAgIIAAgvIARAAIAACjIgPAAIgCgPIAAAAQgNARgXAAQgWAAgNgPgAgYgJQgHALAAAWQAAAWAHALQAIAMAQAAQARgBAIgJQAJgKAAgWIAAgDQAAgYgJgKQgIgLgRAAQgQAAgIAMg");
	this.shape_189.setTransform(466.35,473.65);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_190.setTransform(453.525,475.875);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_191.setTransform(440.225,476.075);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQATAAASgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_192.setTransform(422.1,475.975);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgpBMQgMgIAAgQQAAgKAGgIQAHgIAMgCQgEgCgDgFQgDgEAAgFQAAgHAEgDQADgFAHgFQgJgDgGgJQgFgJAAgLQgBgTAMgLQAMgKAUAAQAJAAAGACIApAAIAAALIgWADIAGAJQACAGAAAIQAAARgMAKQgMAKgTAAIgKgBQgLAGAAAIQAAAFAEACQAFACAJAAIATAAQATAAAKAIQAKAIAAAPQAAATgPALQgPAKgdAAQgXAAgMgJgAgeAkQgHAGAAAKQABAKAHAEQAJAFAOAAQAVAAALgGQALgHAAgLQgBgKgFgDQgGgEgQAAIgVAAQgLAAgHAGgAgVhBQgGAHAAANQAAAMAHAHQAGAGANAAQAZAAgBgZQAAgagZAAQgMAAgHAGg");
	this.shape_193.setTransform(410.05,478.475);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_194.setTransform(397.675,475.875);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_195.setTransform(384.625,475.975);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgGALAAQAVABALAJQAKAKAAAWIAABLg");
	this.shape_196.setTransform(372.475,473.55);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_197.setTransform(360.875,475.975);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_198.setTransform(1077.425,444.175);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAGgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_199.setTransform(1067.05,442.925);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("Ag0BSIAAgOQAGABAHAAQASAAAIgUIAHgRIgvhzIATAAIAZBCQAIAWABAKIABAAIAGgSIAdhQIASAAIgxCDQgHATgJAJQgKAIgPAAQgIAAgIgCg");
	this.shape_200.setTransform(1052.275,446.775);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_201.setTransform(1042.95,442.925);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgDgDAAgGQAAgGADgCQADgDAEAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgEAAgDgDg");
	this.shape_202.setTransform(1036.5,442.025);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_203.setTransform(1031.025,441.75);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgEAAgDgDg");
	this.shape_204.setTransform(1025.6,442.025);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgRAXAAQAXAAAMAPQANAPAAAcQAAAcgNAQQgMAQgXAAQgKAAgKgEgAgZgKQgHAJgBAYQABAZAHAKQAJALAQAAQARAAAIgNQAIgLAAgWQAAgXgIgKQgIgLgRAAQgQAAgJALg");
	this.shape_205.setTransform(1016.6,441.85);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDAAgGQAAgGADgCQACgDAEAAQAEAAADADQADACAAAGQAAAGgDADQgDADgEAAQgEAAgCgDg");
	this.shape_206.setTransform(1006.95,442.025);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AAgA6IgggvIgfAvIgUAAIAqg6Igog5IATAAIAeAsIAfgsIATAAIgoA5IAqA6g");
	this.shape_207.setTransform(998.55,444.175);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_208.setTransform(986.95,444.175);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_209.setTransform(978.125,441.75);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgSBTIAAhlIgVAAIAAgIIAVgGIAAgHQAAgrAkAAQAJAAANAEIgFAOQgKgDgHAAQgKAAgFAHQgEAGAAAPIAAAHIAdAAIAAAOIgdAAIAABlg");
	this.shape_210.setTransform(972.375,441.675);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgOAAgIAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_211.setTransform(956.6,444.175);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALAKQAKALAAAVIAABLg");
	this.shape_212.setTransform(943.975,441.75);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAGgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_213.setTransform(933.4,442.925);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_214.setTransform(918.1,444.175);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAZBEIAJAfIABAAIAHgXIAchMIASAAIgsBzg");
	this.shape_215.setTransform(906.6,444.175);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_216.setTransform(894.825,444.175);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALAKQAKALAAAVIAABLg");
	this.shape_217.setTransform(882.675,441.75);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_218.setTransform(863.925,444.175);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_219.setTransform(853.55,442.925);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgGgFgPgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQABAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_220.setTransform(839.15,444.175);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQAMgPAXAAQAWAAANARIACAAIgBgJIAAgIIAAgvIARAAIAACjIgOAAIgDgQIAAAAQgNASgXAAQgXAAgMgQgAgYgJQgHALgBAWQABAWAHALQAJAMAPAAQARAAAJgLQAHgJABgWIAAgDQAAgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_221.setTransform(827.05,441.85);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAKALQAJALARAAQASAAATgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgOAAgHAJQgJAJgCAQIA8AAIAAAAg");
	this.shape_222.setTransform(814.8,444.175);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_223.setTransform(802.75,444.175);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_224.setTransform(790.125,444.075);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAKALAQAAQASAAATgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_225.setTransform(771.9,444.175);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_226.setTransform(763.075,441.75);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgGgJIgBAAIgFAPIgMAAIAAijIASAAIAAAoIgBAYIABAAQAMgRAXAAQAXAAANAPQAMAPAAAcQAAAcgNAQQgNAQgWAAQgLAAgJgEgAgYgKQgIAJAAAYQAAAZAIAKQAIALAQAAQARAAAIgNQAHgLAAgWQAAgXgHgKQgIgLgRAAQgRAAgHALg");
	this.shape_227.setTransform(754.1,441.85);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_228.setTransform(740.775,444.175);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDAAgGQAAgGADgCQACgDAEAAQAEAAADADQADACAAAGQAAAGgDADQgDADgEAAQgEAAgCgDg");
	this.shape_229.setTransform(732.45,442.025);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_230.setTransform(726.075,444.075);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_231.setTransform(714.525,444.175);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAZBEIAJAfIAAAAIAIgXIAbhMIATAAIgsBzg");
	this.shape_232.setTransform(703.5,444.175);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_233.setTransform(686.175,444.175);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AgPAbIAHgbIAEgZIASAAIACACIgIAYIgKAag");
	this.shape_234.setTransform(671.95,450.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQAMgPAXAAQAWAAANARIACAAIgBgJIAAgIIAAgvIARAAIAACjIgOAAIgDgQIAAAAQgNASgXAAQgXAAgMgQgAgYgJQgHALgBAWQABAWAHALQAJAMAPAAQARAAAJgLQAHgJABgWIAAgDQAAgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_235.setTransform(662.8,441.85);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgIAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_236.setTransform(650.5,444.175);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AAhA6IghgvIgfAvIgVAAIArg6Igog5IAUAAIAdAsIAfgsIATAAIgoA5IAqA6g");
	this.shape_237.setTransform(638.8,444.175);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgGg6QgEgDAAgGQAAgGAEgCQADgDADAAQAEAAADADQAEACAAAGQAAAGgEADQgDADgEAAQgDAAgDgDg");
	this.shape_238.setTransform(630.45,442.025);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AgSBTIAAhlIgVAAIAAgIIAVgGIAAgHQAAgrAkAAQAJAAANAEIgFAOQgKgDgHAAQgKAAgFAHQgEAGAAAPIAAAHIAdAAIAAAOIgdAAIAABlg");
	this.shape_239.setTransform(624.675,441.675);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQANAAAHgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgRgFgHgFQgGgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_240.setTransform(609.8,444.175);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDAAgGQAAgGADgCQADgDADAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgDAAgDgDg");
	this.shape_241.setTransform(601.85,442.025);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALAKQAKALAAAVIAABLg");
	this.shape_242.setTransform(587.025,441.75);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_243.setTransform(575.475,444.175);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgGg6QgEgDAAgGQAAgGAEgCQADgDADAAQAEAAADADQAEACAAAGQAAAGgEADQgDADgEAAQgDAAgDgDg");
	this.shape_244.setTransform(567.35,442.025);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALAKQAKALAAAVIAABLg");
	this.shape_245.setTransform(558.075,441.75);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgHgcIgBAAIgHAcIgWBDIgUAAIgfhzIASAAIARBBIAGAfIACAAIADgPIAEgQIAWhBIASAAIAUBBQAHATABAMIABAAIACgMIAXhUIASAAIghBzg");
	this.shape_246.setTransform(543,444.175);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAGgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_247.setTransform(525.15,442.925);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_248.setTransform(514.875,444.075);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_249.setTransform(501.825,444.175);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAJAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_250.setTransform(492.35,442.925);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPAMgIQALgIATAAQATAAASAIIgGAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_251.setTransform(483.55,444.175);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_252.setTransform(471.825,444.075);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_253.setTransform(458.625,444.175);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_254.setTransform(447.225,444.175);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_255.setTransform(429.925,444.175);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_256.setTransform(412.75,444.175);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AAZBSIgog2IgNALIAAArIgRAAIAAijIARAAIAABWIgBASIABAAIAOgRIAkgnIAVAAIguAxIAxBCg");
	this.shape_257.setTransform(401.825,441.75);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgDgDAAgGQAAgGADgCQADgDAEAAQAEAAADADQADACAAAGQAAAGgDADQgDADgEAAQgEAAgDgDg");
	this.shape_258.setTransform(392.65,442.025);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_259.setTransform(387.175,441.75);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_260.setTransform(377.925,444.075);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgqA/QgQgQAAgaIAAhiIASAAIAABkQAAASAKALQALALAUgBQATABAKgLQALgKAAgUIAAhjIASAAIAABjQAAAagQAPQgPAPgcAAQgbAAgPgPg");
	this.shape_261.setTransform(363.35,442.35);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AgIALQgEgDAAgIQAAgGAEgEQADgDAFAAQAGAAADADQAEAEAAAGQAAAHgEAEQgDADgGAAQgFAAgDgDg");
	this.shape_262.setTransform(761.225,385.225);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgRAAgHAJQgJAKABATIAABAIgRAAIAAhKQAAgOgGgHQgFgHgNAAQgQAAgIAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgIAIgFQAKgFALAAQAbAAAHAUIABAAQAFgJAKgGQAKgFANAAQATAAAJAKQAKAKAAAWIAABLg");
	this.shape_263.setTransform(748.4,380.475);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_264.setTransform(731.925,380.575);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_265.setTransform(722.725,380.475);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQAAgKAIgIQAGgIANgCQgFgCgDgFQgDgEAAgFQAAgHADgDQADgFAIgFQgJgDgFgJQgHgJAAgLQAAgTAMgLQALgKAWAAQAHAAAIACIAnAAIAAALIgUADIAEAJQADAGAAAIQAAARgMAKQgMAKgSAAIgKgBQgLAGAAAIQAAAFADACQAEACAKAAIAUAAQASAAAKAIQAKAIAAAPQAAATgPALQgPAKgdAAQgXAAgMgJgAgeAkQgGAGgBAKQAAAKAJAEQAHAFAPAAQAVAAALgGQAKgHAAgLQAAgKgFgDQgHgEgQAAIgTAAQgMAAgHAGgAgUhBQgHAHAAANQAAAMAHAHQAGAGANAAQAYAAABgZQAAgagZAAQgNAAgGAGg");
	this.shape_266.setTransform(711.6,383.075);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_267.setTransform(699.225,380.575);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_268.setTransform(689.125,380.475);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAOAAIADAQIABAAQAGgKAKgEQAIgEALAAQAXAAANAQQAMAPAAAdQAAAbgNAQQgNAQgWAAQgLAAgIgEQgKgEgGgJIgBAAIABATIAAAwgAgYg7QgIAKAAAVIAAAEQgBAYAJAKQAIAKARAAQAPAAAIgMQAJgLgBgVQABgWgJgLQgIgMgPAAQgSAAgHAKg");
	this.shape_269.setTransform(677.7,383.075);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_270.setTransform(658.825,380.575);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AgSBTIAAhlIgVAAIAAgIIAVgGIAAgHQAAgrAkAAQAJAAANAEIgFAOQgKgDgHAAQgKAAgFAHQgEAGAAAPIAAAHIAdAAIAAAOIgdAAIAABlg");
	this.shape_271.setTransform(644.625,378.075);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_272.setTransform(633.825,380.575);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQAAgKAIgIQAGgIAMgCQgEgCgDgFQgDgEAAgFQAAgHADgDQADgFAIgFQgJgDgFgJQgHgJAAgLQAAgTAMgLQALgKAVAAQAIAAAIACIAnAAIAAALIgUADIAEAJQADAGAAAIQAAARgMAKQgMAKgSAAIgKgBQgLAGAAAIQAAAFADACQAEACAKAAIAUAAQASAAAKAIQAKAIAAAPQAAATgPALQgPAKgdAAQgXAAgMgJgAgeAkQgGAGgBAKQAAAKAJAEQAHAFAPAAQAVAAALgGQAKgHAAgLQAAgKgFgDQgHgEgQAAIgTAAQgMAAgHAGgAgUhBQgHAHAAANQAAAMAHAHQAHAGAMAAQAYAAABgZQAAgagZAAQgNAAgGAGg");
	this.shape_273.setTransform(615.75,383.075);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_274.setTransform(603.375,380.475);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgGg6QgEgDAAgGQAAgGAEgCQADgDADAAQAEAAADADQAEACAAAGQAAAGgEADQgDADgEAAQgDAAgDgDg");
	this.shape_275.setTransform(594,378.425);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_276.setTransform(584.725,380.475);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_277.setTransform(571.525,380.475);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_278.setTransform(558.225,380.675);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_279.setTransform(548.075,380.475);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgOAAgIAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_280.setTransform(531.35,380.575);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgGALAAQAVABALAJQAKAKAAAWIAABLg");
	this.shape_281.setTransform(518.725,378.15);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_282.setTransform(508.2,379.325);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQAAgKAIgIQAGgIAMgCQgEgCgDgFQgDgEAAgFQAAgHADgDQADgFAIgFQgJgDgFgJQgHgJAAgLQAAgTAMgLQALgKAWAAQAIAAAHACIAnAAIAAALIgUADIAEAJQADAGAAAIQAAARgMAKQgMAKgSAAIgKgBQgLAGAAAIQAAAFADACQAEACAKAAIAUAAQASAAAKAIQAKAIAAAPQAAATgPALQgPAKgdAAQgXAAgMgJgAgeAkQgGAGgBAKQAAAKAJAEQAHAFAPAAQAVAAALgGQAKgHAAgLQAAgKgFgDQgHgEgQAAIgTAAQgMAAgHAGgAgUhBQgHAHAAANQAAAMAHAHQAHAGAMAAQAYAAABgZQAAgagZAAQgNAAgGAGg");
	this.shape_283.setTransform(492.9,383.075);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_284.setTransform(480.525,380.475);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgGg6QgEgDAAgGQAAgGAEgCQADgDADAAQAEAAADADQAEACAAAGQAAAGgEADQgDADgEAAQgDAAgDgDg");
	this.shape_285.setTransform(471.15,378.425);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_286.setTransform(464.775,380.475);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_287.setTransform(452.975,380.675);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAXABAMAQIACAAIgBgIIAAgIIAAgvIARAAIAACjIgOAAIgDgPIAAAAQgNARgXAAQgXAAgMgPgAgYgJQgHALgBAWQABAWAHALQAJAMAPAAQARAAAJgKQAHgKABgWIAAgDQAAgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_288.setTransform(439.5,378.25);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_289.setTransform(424.075,380.475);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgIAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_290.setTransform(412.9,380.575);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_291.setTransform(402.95,379.325);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_292.setTransform(396.475,378.15);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_293.setTransform(387.375,380.575);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_294.setTransform(369.675,380.575);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_295.setTransform(359.25,379.325);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_296.setTransform(1079.825,346.35);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_297.setTransform(1070.725,348.775);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgDgDAAgGQAAgGADgCQAEgDADAAQAEAAADADQAEACAAAGQAAAGgEADQgDADgEAAQgDAAgEgDg");
	this.shape_298.setTransform(1062.35,346.625);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAJAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_299.setTransform(1055.75,347.525);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_300.setTransform(1045.475,348.675);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_301.setTransform(1032.85,348.775);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAGgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAFAGAIAAIAKgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_302.setTransform(1022.85,347.525);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_303.setTransform(1012.625,348.775);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAPAAIABAQIABAAQAIgKAIgEQAJgEALAAQAXAAAMAQQANAPAAAdQAAAbgNAQQgNAQgWAAQgKAAgKgEQgJgEgHgJIgBAAIABATIAAAwgAgZg7QgHAKgBAVIAAAEQAAAYAIAKQAJAKAQAAQAPAAAKgMQAHgLABgVQgBgWgHgLQgKgMgPAAQgQAAgJAKg");
	this.shape_304.setTransform(999.85,351.275);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgOAAgIAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_305.setTransform(981.35,348.775);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALAKQAKALAAAVIAABLg");
	this.shape_306.setTransform(968.725,346.35);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_307.setTransform(958.2,347.525);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgRgFgHgFQgGgEgEgGQgDgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_308.setTransform(943.8,348.775);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_309.setTransform(932.225,348.775);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALAKQAKALAAAVIAABLg");
	this.shape_310.setTransform(920.075,346.35);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALAKQAKALAAAVIAABLg");
	this.shape_311.setTransform(901.275,346.35);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_312.setTransform(889.725,348.775);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDgBgGQABgGADgCQADgDADAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgDAAgDgDg");
	this.shape_313.setTransform(881.65,346.625);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALAKQAKALAAAVIAABLg");
	this.shape_314.setTransform(872.375,346.35);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgIgcIAAAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAHAfIABAAIADgPIAFgQIAVhBIASAAIAUBBQAHATABAMIABAAIADgMIAVhUIASAAIgfBzg");
	this.shape_315.setTransform(857.3,348.775);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_316.setTransform(836.925,348.775);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_317.setTransform(827.45,347.525);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_318.setTransform(817.325,348.775);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQAMgPAXAAQAXAAAMARIACAAIgCgJIAAgIIAAgvIASAAIAACjIgOAAIgDgQIgBAAQgMASgXAAQgXAAgMgQgAgYgJQgIALAAAWQAAAWAIALQAJAMAPAAQARAAAJgLQAHgJAAgWIAAgDQABgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_319.setTransform(804.8,346.45);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AgSBTIAAhlIgVAAIAAgIIAVgGIAAgHQAAgrAkAAQAJAAANAEIgFAOQgKgDgHAAQgKAAgFAHQgEAGAAAPIAAAHIAdAAIAAAOIgdAAIAABlg");
	this.shape_320.setTransform(789.925,346.275);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_321.setTransform(779.175,348.775);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAKALAQAAQATAAASgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_322.setTransform(761.1,348.775);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAPAAIABAQIABAAQAHgKAJgEQAJgEALAAQAXAAAMAQQANAPAAAdQAAAbgNAQQgNAQgWAAQgKAAgKgEQgJgEgHgJIgBAAIABATIAAAwgAgZg7QgHAKgBAVIAAAEQABAYAHAKQAJAKAQAAQAPAAAKgMQAHgLABgVQgBgWgHgLQgKgMgPAAQgQAAgJAKg");
	this.shape_323.setTransform(748.75,351.275);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("Ag0BSIAAgOQAGABAHAAQASAAAIgUIAHgRIgvhzIATAAIAZBCQAIAWABAKIABAAIAGgSIAdhQIASAAIgxCDQgHATgJAJQgKAIgPAAQgIAAgIgCg");
	this.shape_324.setTransform(736.375,351.375);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_325.setTransform(727.05,347.525);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_326.setTransform(712.875,348.775);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgEAAgDgDg");
	this.shape_327.setTransform(704.75,346.625);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AgSBTIAAhlIgVAAIAAgIIAVgGIAAgHQAAgrAkAAQAJAAANAEIgFAOQgKgDgHAAQgKAAgFAHQgEAGAAAPIAAAHIAdAAIAAAOIgdAAIAABlg");
	this.shape_328.setTransform(699.025,346.275);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQADACAAAGQAAAGgDADQgDADgEAAQgEAAgDgDg");
	this.shape_329.setTransform(692.05,346.625);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_330.setTransform(684.425,348.775);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgOAAgIAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_331.setTransform(673.1,348.775);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAOAAIACAQIABAAQAIgKAIgEQAJgEALAAQAXAAAMAQQANAPAAAdQAAAbgNAQQgMAQgXAAQgKAAgKgEQgJgEgHgJIgBAAIABATIAAAwgAgZg7QgHAKgBAVIAAAEQABAYAHAKQAJAKAQAAQAPAAAKgMQAHgLABgVQgBgWgHgLQgKgMgPAAQgQAAgJAKg");
	this.shape_332.setTransform(660.75,351.275);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgGAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_333.setTransform(648.7,348.775);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_334.setTransform(631.575,348.775);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AgSBTIAAhlIgVAAIAAgIIAVgGIAAgHQAAgrAkAAQAJAAANAEIgFAOQgKgDgHAAQgKAAgFAHQgEAGAAAPIAAAHIAdAAIAAAOIgdAAIAABlg");
	this.shape_335.setTransform(617.375,346.275);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_336.setTransform(606.625,348.775);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_337.setTransform(590.925,348.675);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQASAAATgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_338.setTransform(579.8,348.775);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_339.setTransform(567.175,348.675);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDAAgGQAAgGADgCQADgDADAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgDAAgDgDg");
	this.shape_340.setTransform(557.75,346.625);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_341.setTransform(548.625,348.775);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAJAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_342.setTransform(539.15,347.525);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_343.setTransform(528.875,348.675);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_344.setTransform(515.725,348.775);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_345.setTransform(504.275,348.775);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_346.setTransform(486.975,348.775);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQAMAAAIgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgPgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgXAAgNgHg");
	this.shape_347.setTransform(470.7,348.775);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDAAgGQAAgGADgCQADgDADAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgDAAgDgDg");
	this.shape_348.setTransform(462.8,346.625);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAKALQAJALARAAQASAAATgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgCAQIA8AAIAAAAg");
	this.shape_349.setTransform(448.5,348.775);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_350.setTransform(439.675,346.35);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgRAXAAQAXAAAMAPQANAPAAAcQAAAcgNAQQgMAQgXAAQgKAAgKgEgAgZgKQgHAJgBAYQABAZAHAKQAJALAQAAQARAAAIgNQAIgLAAgWQAAgXgIgKQgIgLgRAAQgQAAgJALg");
	this.shape_351.setTransform(430.7,346.45);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_352.setTransform(417.375,348.775);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgGg6QgEgDAAgGQAAgGAEgCQADgDADAAQAEAAADADQAEACAAAGQAAAGgEADQgDADgEAAQgDAAgDgDg");
	this.shape_353.setTransform(409.05,346.625);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_354.setTransform(402.675,348.675);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_355.setTransform(391.125,348.775);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAZBEIAJAfIABAAIAHgXIAchMIASAAIgsBzg");
	this.shape_356.setTransform(380.1,348.775);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFFFFF").s().p("AAyBNIgTgxIg9AAIgTAxIgSAAIA9iaIAOAAIA8CagAAZAMIgSguIgHgXQgBAKgFANIgSAuIAxAAg");
	this.shape_357.setTransform(362.325,346.8);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AgzBBIAAgaQAZAMAVAAQAbAAAAgRQAAgGgDgDQgCgEgIgEIgSgJQgZgIgJgKQgJgJAAgPQABgTAPgKQAOgKAYAAQAZAAAXAKIgKAXQgXgJgQAAQgXAAAAANQAAAHAHAFQAGAEAUAIQARAHAIAFQAJAGADAHQAFAHAAALQAAAVgQALQgPALgcAAQgcAAgRgJg");
	this.shape_358.setTransform(466.6,282.375);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFFFF").s().p("AgrA2QgTgTAAgiQAAgiARgUQASgUAdAAQAcAAARARQAQARAAAeIAAAQIheAAQABAVAKALQALALASAAQANAAALgCQAKgDANgFIAAAYQgLAFgLADQgMACgOAAQghAAgSgUgAAhgOQAAgSgIgJQgIgJgPAAQgNAAgJAJQgJAJgBASIA/AAIAAAAg");
	this.shape_359.setTransform(452.525,282.375);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFFFF").s().p("AgOBkIAAjHIAdAAIAADHg");
	this.shape_360.setTransform(441.275,279.475);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AghBSIgCAAIgGARIgXAAIAAjHIAfAAIAAAvIgBAQIgBANIACAAQAOgVAbAAQAbAAAPATQAPAUAAAhQAAAjgPAUQgPATgbAAQgaAAgPgTgAgZgKQgIAKAAAZIAAACQAAAaAIAMQAIAMASAAQAQAAAIgNQAJgNAAgYQAAgwgiABQgRgBgIALg");
	this.shape_361.setTransform(429.775,279.6);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AgvA+QgMgLgBgVQAAgWARgKQARgLAggBIAYgBIAAgHQABgOgHgHQgGgHgOAAQgJAAgLAEIgTAHIgKgWQAMgGAOgDQAOgDALAAQAbAAANAMQAPAMAAAZIAABfIgWAAIgGgUIgBAAQgLANgKAFQgKAFgQAAQgVAAgLgMgAAMAEQgVABgJAGQgKAGAAAOQAAAJAFAFQAGAGALAAQAQAAAKgKQAKgJAAgQIAAgNg");
	this.shape_362.setTransform(413.05,282.375);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("AgPBjIAAiOIAeAAIAACOgAgLhFQgFgEAAgIQAAgIAFgFQAEgDAHAAQAIAAAEADQAFAFAAAIQAAAIgFAEQgEAFgIAAQgHAAgEgFg");
	this.shape_363.setTransform(402.25,279.65);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AgrBJIAAiOIAYAAIAEAZIACAAQAHgNAKgHQAMgIANABIAPABIgDAcQgHgBgHAAQgSAAgKALQgLAMAAATIAABKg");
	this.shape_364.setTransform(393.725,282.25);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFFFF").s().p("AgwA+QgMgLAAgVQAAgWARgKQARgLAggBIAYgBIAAgHQAAgOgGgHQgHgHgNAAQgKAAgJAEIgUAHIgKgWQAMgGANgDQAOgDALAAQAcAAAOAMQANAMAAAZIAABfIgVAAIgGgUIgBAAQgLANgKAFQgKAFgQAAQgVAAgMgMgAAMAEQgUABgKAGQgKAGAAAOQAAAJAFAFQAHAGAKAAQAQAAAKgKQAKgJAAgQIAAgNg");
	this.shape_365.setTransform(379.1,282.375);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("AgPBeIhCi7IAfAAIAoB0IAGAWIAEATIAFgWIAGgUIAnhzIAgAAIhCC7g");
	this.shape_366.setTransform(363.7,280.075);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAWABANAQIABAAIAAgIIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgXAAgMgPgAgXgJQgIALAAAWQAAAWAIALQAIAMAPAAQARgBAIgJQAJgKAAgWIAAgDQgBgYgIgKQgIgLgRAAQgPAAgIAMg");
	this.shape_367.setTransform(858.85,609.45);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQANgQAWAAQAWABANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgOAAIgDgQIgBAAQgMASgXAAQgWAAgNgPgAgXgJQgJALABAWQgBAWAJALQAHAMAQAAQARgBAIgJQAJgKgBgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_368.setTransform(828,609.45);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_369.setTransform(731.45,610.525);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_370.setTransform(711.5,611.775);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQAMAAAIgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgQgFgGgFQgHgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgLAAgHAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgXAAgNgHg");
	this.shape_371.setTransform(700.3,611.775);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAOAAIADAQIABAAQAHgKAIgEQAJgEALAAQAXAAANAQQAMAPAAAdQAAAbgNAQQgMAQgXAAQgLAAgJgEQgJgEgGgJIgBAAIABATIAAAwgAgYg7QgIAKAAAVIAAAEQAAAYAIAKQAIAKAQAAQAQAAAIgMQAJgLAAgVQAAgWgJgLQgIgMgQAAQgRAAgHAKg");
	this.shape_372.setTransform(599.75,614.275);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_373.setTransform(565.8,610.525);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAPIACAAQAFgIAJgEQAKgGALAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_374.setTransform(543.525,609.35);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgIgcIAAAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAHAfIABAAIADgPIAFgQIAVhBIASAAIAVBBQAFATACAMIACAAIACgMIAVhUIASAAIgfBzg");
	this.shape_375.setTransform(528.45,611.775);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgIgcIAAAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAHAfIABAAIADgPIAFgQIAVhBIASAAIAVBBQAFATADAMIABAAIACgMIAVhUIASAAIgfBzg");
	this.shape_376.setTransform(506.05,611.775);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("AAZBSIgog3IgNAMIAAArIgRAAIAAijIARAAIAABWIgBASIABAAIAOgRIAkgnIAVAAIguAxIAxBCg");
	this.shape_377.setTransform(466.625,609.35);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAWABANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgPAAIgCgQIgBAAQgMASgXAAQgXAAgMgPgAgXgJQgIALAAAWQAAAWAIALQAIAMAPAAQARgBAIgJQAJgKgBgWIAAgDQAAgYgIgKQgIgLgRAAQgPAAgIAMg");
	this.shape_378.setTransform(421.45,609.45);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQAMAAAIgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgQgFgGgFQgHgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgLAAgHAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgXAAgNgHg");
	this.shape_379.setTransform(1036.9,579.975);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgGgJIgCAAIgEAPIgMAAIAAijIASAAIAAAoIgCAYIACAAQAMgRAXAAQAXAAANAPQAMAQAAAbQAAAcgNAQQgMAQgXAAQgLAAgJgEgAgZgKQgHAJAAAYQAAAZAHAKQAJALAQgBQARAAAIgMQAHgLABgWQgBgXgHgKQgIgLgRAAQgQAAgJALg");
	this.shape_380.setTransform(1004.65,577.65);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgPAAgJAJQgHAKgBATIAABAIgQAAIAAhKQAAgOgFgHQgHgHgMAAQgRAAgHAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIACAQIABAAQAGgIAJgFQAJgFAKAAQAcAAAHAUIABAAQAFgJAKgGQAJgFANAAQAUAAAKAKQAJAKABAWIAABLg");
	this.shape_381.setTransform(987.75,579.875);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAKALAQAAQASAAATgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_382.setTransform(971.7,579.975);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgQAAgHAJQgJAKABATIAABAIgRAAIAAhKQAAgOgGgHQgFgHgNAAQgRAAgHAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgIAIgFQAKgFAKAAQAcAAAHAUIABAAQAFgJAKgGQAJgFAOAAQATAAAKAKQAKAKgBAWIAABLg");
	this.shape_383.setTransform(955.65,579.875);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgQAAgJAJQgHAKgBATIAABAIgQAAIAAhKQAAgOgFgHQgHgHgMAAQgRAAgHAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIACAQIABAAQAGgIAJgFQAIgFAMAAQAbAAAHAUIABAAQAFgJAKgGQAJgFANAAQAUAAAJAKQALAKAAAWIAABLg");
	this.shape_384.setTransform(930.05,579.875);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQASAAATgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_385.setTransform(902,579.975);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_386.setTransform(867.95,579.975);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALALQAKAKAAAUIAABMg");
	this.shape_387.setTransform(855.325,577.55);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_388.setTransform(844.8,578.725);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQANgPAWAAQAWgBANASIACAAIgBgJIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgWAAgNgQgAgYgJQgHALAAAVQAAAXAHALQAIALAQAAQARAAAIgKQAJgJAAgWIAAgEQAAgXgJgKQgIgLgRAAQgQAAgIAMg");
	this.shape_389.setTransform(815.55,577.65);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgQAAgJAJQgHAKgBATIAABAIgQAAIAAhKQAAgOgFgHQgHgHgMAAQgRAAgHAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIACAQIABAAQAGgIAJgFQAIgFAMAAQAbAAAHAUIABAAQAFgJAKgGQAJgFANAAQAUAAAJAKQALAKAAAWIAABLg");
	this.shape_390.setTransform(768.5,579.875);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQASAAATgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_391.setTransform(740.45,579.975);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_392.setTransform(730.5,578.725);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFFFFF").s().p("AAZBSIgog2IgNALIAAArIgRAAIAAijIARAAIAABWIgBASIABAAIAOgRIAkgmIAVAAIguAvIAxBDg");
	this.shape_393.setTransform(644.075,577.55);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgIgcIAAAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAHAfIAAAAIAEgPIAEgQIAWhBIASAAIAVBBQAFATADAMIABAAIABgMIAWhUIASAAIgfBzg");
	this.shape_394.setTransform(607.4,579.975);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_395.setTransform(574.25,579.975);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALALQAKAKAAAUIAABMg");
	this.shape_396.setTransform(561.625,577.55);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgIgcIAAAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAHAfIABAAIADgPIAFgQIAVhBIASAAIAVBBQAFATADAMIABAAIACgMIAVhUIASAAIgfBzg");
	this.shape_397.setTransform(546.55,579.975);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgGgFQgFgFgRgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgLAAgHAEQgGAEAAAGQAAAFADADQABAEAGADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_398.setTransform(489.55,579.975);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_399.setTransform(410.35,579.975);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALALQAKAKAAAUIAABMg");
	this.shape_400.setTransform(397.725,577.55);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FFFFFF").s().p("AgIBNIAAiKIgxAAIAAgPIBzAAIAAAPIgxAAIAACKg");
	this.shape_401.setTransform(385.075,578.05);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FFFFFF").s().p("AgeBOQgKgCgKgFIAAgRQAKAFAMADQALACAKAAQAnAAAAgfQAAgcgrAAIgPAAIAAgOIAPAAQASAAAKgIQALgIAAgOQAAgLgIgHQgIgGgMAAQgKAAgKADQgIACgMAIIgJgMQAKgIAMgEQAMgEAOAAQAWAAAMAKQANAKAAASQgBAPgHAJQgJAKgPADIAAABQATACAIAJQAJAJAAAQQAAAWgPAMQgPALgbAAQgMAAgLgBg");
	this.shape_402.setTransform(361.55,578.025);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQATAAASgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_403.setTransform(819,548.175);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FFFFFF").s().p("AAhA6IghgvIggAvIgUAAIArg6Igpg5IAVAAIAdAsIAegsIAUAAIgoA5IArA6g");
	this.shape_404.setTransform(807.25,548.175);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgDgDAAgGQAAgGADgCQAEgDADAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgDAAgEgDg");
	this.shape_405.setTransform(798.9,546.025);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FFFFFF").s().p("AgpBMQgMgIAAgQQAAgKAGgIQAHgIANgCQgFgCgDgFQgDgEAAgFQAAgHAEgDQADgFAHgFQgJgDgGgJQgFgJAAgLQAAgTALgLQALgKAWAAQAHAAAHACIApAAIAAALIgWADIAGAJQACAGAAAIQAAARgMAKQgLAKgUAAIgKgBQgLAGAAAIQAAAFAFACQADACAKAAIATAAQATAAAKAIQAKAIAAAPQAAATgPALQgPAKgdAAQgXAAgMgJgAgeAkQgHAGABAKQAAAKAHAEQAIAFAPAAQAVAAALgGQALgHAAgLQAAgKgHgDQgFgEgQAAIgVAAQgLAAgHAGgAgVhBQgGAHAAANQAAAMAHAHQAGAGANAAQAYAAAAgZQAAgagZAAQgLAAgIAGg");
	this.shape_406.setTransform(777.35,550.675);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_407.setTransform(764.875,548.275);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FFFFFF").s().p("AgQBPQgKgEgGgJIgBAAIgFAPIgMAAIAAijIASAAIAAAoIgBAYIABAAQAMgRAXgBQAXABANAPQAMAPAAAcQAAAdgNAPQgNAQgWAAQgKAAgJgEgAgYgLQgJALABAXQgBAYAJALQAIAKARAAQAQABAIgMQAHgMAAgWQAAgWgHgLQgIgLgQAAQgSAAgHAKg");
	this.shape_408.setTransform(752.05,545.85);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_409.setTransform(725.275,548.275);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgRAXgBQAWABANAPQANAPAAAcQAAAdgNAPQgMAQgXAAQgKAAgKgEgAgZgLQgHALgBAXQABAYAHALQAJAKAQAAQARABAIgMQAIgMAAgWQAAgWgIgLQgIgLgRAAQgQAAgJAKg");
	this.shape_410.setTransform(699.45,545.85);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgQAAgHAJQgJAKABATIAABAIgRAAIAAhKQAAgOgGgHQgFgHgNAAQgRAAgHAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgIAIgFQAKgFAKAAQAcAAAHAUIABAAQAFgJAKgGQAJgFAOAAQATAAAKAKQAKAKgBAWIAABLg");
	this.shape_411.setTransform(613.65,548.075);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgCgDgBgGQABgGACgCQAEgDADAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgDAAgEgDg");
	this.shape_412.setTransform(558.6,546.025);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQASAAATgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgIAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_413.setTransform(544.3,548.175);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQAMgPAXgBQAXAAAMARIACAAIgBgIIAAgIIAAgvIARAAIAACjIgOAAIgDgPIAAAAQgNARgXAAQgXAAgMgQgAgYgJQgIALAAAVQAAAXAIALQAJALAPAAQARABAJgKQAHgKABgWIAAgEQAAgXgJgLQgIgKgRAAQgPAAgJAMg");
	this.shape_414.setTransform(531.3,545.85);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQADACAAAGQAAAGgDADQgDADgEAAQgEAAgDgDg");
	this.shape_415.setTransform(522.3,546.025);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAYBEIAKAfIAAAAIAIgXIAbhMIATAAIgsBzg");
	this.shape_416.setTransform(514.15,548.175);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_417.setTransform(410.35,548.175);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgFALgBQAVAAALALQAKAJAAAVIAABMg");
	this.shape_418.setTransform(397.725,545.75);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFFFFF").s().p("AgIBNIAAiKIgxAAIAAgPIBzAAIAAAPIgxAAIAACKg");
	this.shape_419.setTransform(385.075,546.25);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FFFFFF").s().p("AgyBOIAAgPIApgpQARgSAGgHQAGgIADgIQADgIAAgIQAAgNgHgHQgIgHgMAAQgKAAgIADQgJADgKAIIgKgLQAWgSAZAAQAUAAANALQAMALAAATQAAAPgIAOQgIANgXAWIghAhIAAABIBPAAIAAAQg");
	this.shape_420.setTransform(361.625,546.125);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQANAAAHgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgRgFgHgFQgGgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_421.setTransform(834.35,516.375);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAKALAQAAQASAAATgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_422.setTransform(823.2,516.375);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_423.setTransform(810.625,516.375);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAXABAMAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgPAAIgCgQIgBAAQgMASgXAAQgXAAgMgPgAgXgJQgIALAAAWQAAAWAIALQAHAMAQAAQARgBAIgJQAJgKgBgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_424.setTransform(797.2,514.05);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_425.setTransform(779.35,516.375);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQANgQAWAAQAWABANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgOAAIgDgQIgBAAQgMASgXAAQgWAAgNgPgAgXgJQgJALABAWQgBAWAJALQAHAMAQAAQARgBAIgJQAJgKgBgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_426.setTransform(766.35,514.05);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_427.setTransform(753.525,516.375);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_428.setTransform(717.425,516.375);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAKALAQAAQATAAASgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_429.setTransform(699.35,516.375);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQASAAATgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgIAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_430.setTransform(677.05,516.375);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_431.setTransform(640.75,516.375);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAPIACAAQAFgIAJgEQAKgGALAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_432.setTransform(628.125,513.95);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_433.setTransform(617.55,515.125);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAPIACAAQAFgIAJgEQAKgGALAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_434.setTransform(582.075,513.95);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgHgcIgBAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAGAfIABAAIAEgPIAEgQIAWhBIASAAIAVBBQAFATADAMIABAAIABgMIAXhUIASAAIggBzg");
	this.shape_435.setTransform(567,516.375);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_436.setTransform(537.1,515.125);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQANgQAWAAQAWABANAQIACAAIgBgIIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgWAAgNgPgAgYgJQgHALAAAWQAAAWAHALQAIAMAQAAQARgBAIgJQAJgKAAgWIAAgDQAAgYgJgKQgIgLgRAAQgQAAgIAMg");
	this.shape_437.setTransform(498.75,514.05);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FFFFFF").s().p("Ag0BSIAAgOQAGABAHAAQASAAAIgUIAHgRIgvhzIATAAIAZBCQAIAWABAKIABAAIAGgSIAdhQIASAAIgxCDQgHATgJAJQgKAIgPAAQgIAAgIgCg");
	this.shape_438.setTransform(421.725,518.975);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_439.setTransform(410.35,516.375);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAPIACAAQAFgIAJgEQAKgGALAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_440.setTransform(397.725,513.95);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFFFFF").s().p("AgIBNIAAiJIgxAAIAAgQIBzAAIAAAQIgxAAIAACJg");
	this.shape_441.setTransform(385.075,514.45);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FFFFFF").s().p("AgIALQgEgDAAgIQAAgGAEgEQADgDAFAAQAGAAADADQAEAEAAAGQAAAHgEAEQgDADgGAAQgFAAgDgDg");
	this.shape_442.setTransform(370.675,521.025);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FFFFFF").s().p("AALBNIAAhtIAAgaIgFAFIgYAVIgJgMIAoggIAPAAIAACZg");
	this.shape_443.setTransform(360.275,514.45);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FFFFFF").s().p("AgIA6QgEgEAAgHQAAgHAEgEQADgEAFAAQAGAAADAEQAEAEAAAHQAAAGgEAEQgDAEgGAAQgFAAgDgDgAgIgjQgEgDAAgIQAAgOAMAAQANAAAAAOQAAAHgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_444.setTransform(437.975,452.775);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_445.setTransform(405.125,452.775);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAKALAQAAQATAAASgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_446.setTransform(370.4,452.775);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAZBEIAJAfIAAAAIAIgXIAchMIASAAIgsBzg");
	this.shape_447.setTransform(986.9,420.975);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_448.setTransform(975.55,420.975);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQANAAAHgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgRgFgHgFQgGgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_449.setTransform(964.4,420.975);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_450.setTransform(950.025,420.875);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_451.setTransform(938.325,420.975);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAXABAMAQIACAAIgBgIIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgXAAgMgPgAgYgJQgHALgBAWQABAWAHALQAJAMAPAAQARgBAJgJQAHgKABgWIAAgDQAAgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_452.setTransform(912.1,418.65);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQASAAATgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgIAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_453.setTransform(899.8,420.975);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgGgFgPgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQABAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_454.setTransform(888.65,420.975);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_455.setTransform(876.825,421.075);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgGgJIgBAAIgFAPIgMAAIAAijIASAAIAAAoIgBAYIABAAQAMgSAXAAQAXAAANAQQAMAPAAAcQAAAcgNARQgNAPgWAAQgLAAgJgEgAgYgKQgIAJAAAYQAAAYAIALQAIALAQAAQARgBAIgMQAHgLAAgWQAAgWgHgLQgIgLgRAAQgRAAgHALg");
	this.shape_456.setTransform(846.35,418.65);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FFFFFF").s().p("Ag0BSIAAgOQAGABAHAAQASAAAIgUIAHgRIgvhzIATAAIAZBCQAIAWABAKIABAAIAGgSIAdhQIASAAIgxCDQgHATgJAJQgKAIgPAAQgIAAgIgCg");
	this.shape_457.setTransform(787.375,423.575);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQASAAATgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_458.setTransform(776,420.975);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAPIACAAQAFgIAJgEQAKgGALAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_459.setTransform(763.375,418.55);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgGgFgRgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgLAAgHAEQgGAEAAAGQAAAFADADQABAEAGADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_460.setTransform(738.4,420.975);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQABgKAGgIQAHgIAMgCQgEgCgDgFQgDgEAAgFQAAgHAEgDQADgFAHgFQgJgDgGgJQgFgJgBgLQAAgTAMgLQAMgKAUAAQAJAAAGACIApAAIAAALIgWADIAGAJQACAGAAAIQAAARgMAKQgLAKgUAAIgKgBQgLAGABAIQAAAFADACQAFACAJAAIATAAQATAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgHAGAAAKQABAKAHAEQAJAFAOAAQAVAAALgGQALgHAAgLQgBgKgFgDQgGgEgRAAIgUAAQgLAAgHAGgAgVhBQgGAHAAANQAAAMAHAHQAGAGANAAQAZAAgBgZQAAgagZAAQgLAAgIAGg");
	this.shape_461.setTransform(709.65,423.475);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgEAAgDgDg");
	this.shape_462.setTransform(687.9,418.825);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAWABANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgOAAIgDgQIgBAAQgMASgXAAQgXAAgMgPgAgXgJQgJALAAAWQAAAWAJALQAHAMAQAAQARgBAIgJQAIgKAAgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_463.setTransform(678.25,418.65);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_464.setTransform(665.475,420.975);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_465.setTransform(654.075,420.975);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_466.setTransform(606.775,421.075);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FFFFFF").s().p("AgSBTIAAhlIgVAAIAAgIIAVgGIAAgHQAAgrAkAAQAJAAANAEIgFAOQgKgDgHAAQgKAAgFAHQgEAGAAAPIAAAHIAdAAIAAAOIgdAAIAABlg");
	this.shape_467.setTransform(597.225,418.475);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQASAAATgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_468.setTransform(587,420.975);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgGAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_469.setTransform(575.8,420.975);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_470.setTransform(563.975,421.075);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FFFFFF").s().p("Ag0BSIAAgOQAGABAHAAQASAAAIgUIAHgRIgvhzIATAAIAZBCQAIAWABAKIABAAIAGgSIAdhQIASAAIgxCDQgHATgJAJQgKAIgPAAQgIAAgIgCg");
	this.shape_471.setTransform(546.425,423.575);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_472.setTransform(537.375,420.875);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQASAAATgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_473.setTransform(526.25,420.975);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAZBEIAJAfIAAAAIAIgXIAchMIASAAIgsBzg");
	this.shape_474.setTransform(514.75,420.975);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_475.setTransform(488.125,420.875);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgGgFQgFgFgRgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgLAAgHAEQgGAEAAAGQAAAFADADQABAEAGADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_476.setTransform(460.3,420.975);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_477.setTransform(451.25,419.725);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_478.setTransform(440.975,420.875);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_479.setTransform(428.35,420.975);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgPAAgJAJQgHAKAAATIAABAIgRAAIAAhKQAAgOgFgHQgGgHgNAAQgRAAgHAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIACAQIABAAQAFgIAJgFQAJgFALAAQAcAAAHAUIABAAQAFgJAKgGQAJgFANAAQAUAAAKAKQAJAKABAWIAABLg");
	this.shape_480.setTransform(412.3,420.875);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgQAAgHAJQgJAKABATIAABAIgRAAIAAhKQAAgOgGgHQgFgHgNAAQgRAAgHAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgIAIgFQAKgFAKAAQAcAAAHAUIABAAQAFgJAKgGQAJgFAOAAQATAAAKAKQAKAKAAAWIAABLg");
	this.shape_481.setTransform(392.25,420.875);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_482.setTransform(375.675,420.975);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FFFFFF").s().p("AgnA7QgSgVgBgmQABgXAIgSQAKgSAQgJQARgKAWAAQAYAAASAJIgHAPQgSgIgRAAQgZAAgPARQgOARAAAcQAAAeAOARQAOAQAaAAQAPAAAWgFIAAAPQgQAGgYAAQgiAAgSgUg");
	this.shape_483.setTransform(362.65,419.025);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FFFFFF").s().p("AgzBBIAAgaQAZAMAVAAQAcAAAAgRQgBgGgDgDQgCgEgIgEIgSgJQgZgIgJgKQgIgJgBgPQABgTAPgKQAOgKAYAAQAZAAAXAKIgJAXQgYgJgQAAQgXAAABANQgBAHAHAFQAGAEAUAIQASAHAHAFQAJAGADAHQAFAHAAALQAAAVgQALQgPALgcAAQgcAAgRgJg");
	this.shape_484.setTransform(487.4,354.575);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FFFFFF").s().p("AgaArIAAhMIgTAAIAAgNIAVgLIAKgfIASAAIAAAhIAoAAIAAAWIgoAAIAABMQAAAKAFAGQAGAFAJAAQALAAALgDIAAAWIgNAEIgQACQgqgBgBgtg");
	this.shape_485.setTransform(475.7,353.1);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FFFFFF").s().p("AAgBJIAAhXQAAgRgGgIQgHgIgOAAQgTAAgIAMQgJALAAAaIAABHIgfAAIAAiOIAYAAIAEASIACAAQAGgKAMgFQAMgGAOABQAzAAAAA0IAABcg");
	this.shape_486.setTransform(462.275,354.45);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FFFFFF").s().p("ABLBJIAAhYQAAgQgGgIQgHgIgNAAQgSAAgIALQgIALAAAXIAABLIgdAAIAAhYQAAgQgHgIQgGgIgNAAQgRAAgJAMQgIALAAAaIAABHIgeAAIAAiOIAYAAIAEASIABAAQAGgKAMgFQALgGANABQAhgBAKAXIACAAQAGgLAMgGQALgFAPAAQAagBALANQAMANAAAbIAABcg");
	this.shape_487.setTransform(426.175,354.45);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FFFFFF").s().p("ABLBJIAAhYQAAgQgGgIQgHgIgNAAQgSAAgIALQgIALAAAXIAABLIgdAAIAAhYQAAgQgHgIQgGgIgNAAQgRAAgJAMQgIALAAAaIAABHIgeAAIAAiOIAYAAIAEASIABAAQAGgKAMgFQALgGANABQAhgBAKAXIACAAQAGgLAMgGQALgFAPAAQAagBALANQAMANAAAbIAABcg");
	this.shape_488.setTransform(400.975,354.45);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FFFFFF").s().p("AgiBBQgQgJgIgRQgIgRgBgWQABgiARgTQASgUAgAAQAfAAARAUQASAUABAhQgBAjgSATQgRAUggAAQgTAAgPgJgAgbgkQgIANAAAXQAAAxAkAAQAjAAABgxQAAgwglAAQgSAAgJAMg");
	this.shape_489.setTransform(380.25,354.575);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FFFFFF").s().p("AgwBIQgWgZgBgvQABgcAKgWQALgWAVgMQAUgMAaAAQAdAAAYAMIgKAaIgUgIQgLgDgMAAQgZAAgPASQgQATAAAgQAAAjAPASQAPASAaAAQAMAAAMgDIAWgGIAAAaQgVAJgcAAQgpAAgWgZg");
	this.shape_490.setTransform(364.2,352.275);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAYBEIAKAfIABAAIAHgXIAchMIASAAIgrBzg");
	this.shape_491.setTransform(668.35,586.275);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQAMgPAXAAQAXgBAMASIABAAIgBgJIAAgIIAAgvIASAAIAACjIgPAAIgCgQIgBAAQgMASgXAAQgXAAgMgQgAgXgJQgIALAAAVQAAAXAIALQAHAMAQgBQARAAAIgKQAJgJgBgWIAAgEQAAgXgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_492.setTransform(637.45,583.95);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQANgPAWAAQAWgBANASIABAAIAAgJIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgWAAgNgQgAgYgJQgHALAAAVQAAAXAHALQAIAMAQgBQARAAAIgKQAJgJAAgWIAAgEQAAgXgJgKQgIgLgRAAQgQAAgIAMg");
	this.shape_493.setTransform(530.7,583.95);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQAMgPAXAAQAXgBAMASIABAAIAAgJIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgXAAgMgQgAgXgJQgIALAAAVQAAAXAIALQAIAMAPgBQARAAAIgKQAJgJAAgWIAAgEQgBgXgIgKQgIgLgRAAQgPAAgIAMg");
	this.shape_494.setTransform(401.65,583.95);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FFFFFF").s().p("AgvA+QgMgLAAgVQAAgWAQgKQAQgLAhgBIAZgBIAAgHQAAgOgHgHQgGgHgNAAQgLAAgKAEIgTAHIgKgWQAMgGANgDQAOgDAMAAQAbAAANAMQAOAMAAAZIAABfIgVAAIgGgUIgBAAQgKANgLAFQgLAFgPAAQgVAAgLgMgAAMAEQgVABgJAGQgKAGAAAOQAAAJAGAFQAFAGAMAAQAPAAALgKQAJgJAAgQIAAgNg");
	this.shape_495.setTransform(656.35,519.875);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#FFFFFF").s().p("AAgBJIAAhXQAAgRgGgIQgHgIgOAAQgTAAgIALQgJAMAAAaIAABHIgfAAIAAiOIAYAAIAEATIACAAQAGgLAMgFQAMgGAOAAQAzAAAAA0IAABdg");
	this.shape_496.setTransform(640.825,519.75);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FFFFFF").s().p("AgjBBQgPgJgIgRQgIgRAAgWQgBgiATgTQARgUAfAAQAfAAATAUQARAUABAhQgBAjgRATQgSAUggAAQgTAAgQgJgAgbgkQgIANAAAXQAAAxAjAAQAkAAAAgxQAAgwgkAAQgSAAgJAMg");
	this.shape_497.setTransform(624.4,519.875);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FFFFFF").s().p("AgOBjIAAiOIAdAAIAACOgAgLhEQgFgFAAgIQAAgIAFgFQADgDAIAAQAIAAAFADQAEAFAAAIQAAAIgEAFQgFAEgIAAQgIAAgDgEg");
	this.shape_498.setTransform(612.7,517.15);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FFFFFF").s().p("AgaArIAAhLIgTAAIAAgOIAVgLIAKgeIASAAIAAAfIAoAAIAAAYIgoAAIAABKQAAALAFAGQAGAFAJAAQALAAALgEIAAAYIgNADIgRABQgqAAAAgtg");
	this.shape_499.setTransform(603.8,518.4);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FFFFFF").s().p("AgPBjIAAiOIAeAAIAACOgAgMhEQgEgFAAgIQAAgIAEgFQAFgDAHAAQAIAAAEADQAFAFAAAIQAAAIgFAFQgEAEgIAAQgHAAgFgEg");
	this.shape_500.setTransform(595.1,517.15);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FFFFFF").s().p("AgxBSQgPgTAAgjQAAgiAPgUQAPgTAbAAQAbAAAPAUIACAAQgDgPAAgIIAAg0IAfAAIAADHIgYAAIgFgTIgCAAQgOAWgbgBQgbAAgPgTgAgYgIQgIAMAAAYQgBAYAJAMQAIANAQAAQASAAAJgLQAJgKAAgXIAAgFQAAgagJgLQgJgLgSAAQgPAAgJAMg");
	this.shape_501.setTransform(582.75,517.1);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FFFFFF").s().p("AAgBJIAAhXQAAgRgGgIQgHgIgOAAQgTAAgIALQgJAMAAAaIAABHIgfAAIAAiOIAYAAIAEATIACAAQAGgLAMgFQAMgGAOAAQAzAAAAA0IAABdg");
	this.shape_502.setTransform(566.625,519.75);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FFFFFF").s().p("AgjBBQgPgJgIgRQgIgRAAgWQgBgiATgTQARgUAfAAQAfAAATAUQARAUABAhQgBAjgRATQgSAUggAAQgTAAgQgJgAgbgkQgIANAAAXQAAAxAjAAQAkAAAAgxQAAgwgkAAQgSAAgJAMg");
	this.shape_503.setTransform(550.15,519.875);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FFFFFF").s().p("AgwBIQgWgZAAgvQAAgcALgWQAKgWAUgMQAVgMAbAAQAcAAAYAMIgLAaIgTgIQgLgDgMAAQgaAAgOASQgQATAAAgQAAAjAPASQAOASAbAAQAMAAALgDIAYgGIAAAaQgXAJgcAAQgoAAgWgZg");
	this.shape_504.setTransform(534.15,517.575);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FFFFFF").s().p("AgNBGQgFgGAAgJQAAgKAFgEQAFgGAIAAQAJAAAFAGQAFAFAAAJQAAAJgFAGQgFAEgJAAQgIAAgFgEgAgNgnQgFgGAAgJQAAgUASABQAKAAAEAEQAFAGAAAJQAAAJgFAGQgFAEgJAAQgIAAgFgEg");
	this.shape_505.setTransform(515.025,519.9);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#FFFFFF").s().p("AAfBHIgThCIgMgwIAAAAQgHAigFAOIgTBCIghAAIgoiNIAfAAIASBGQAGAZADATIAAAAIAEgWIAFgSIAWhKIAgAAIAVBKIAFATIADAUIABAAQACgQAHgbIAThGIAeAAIgoCNg");
	this.shape_506.setTransform(500.625,519.875);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FFFFFF").s().p("AgjBBQgPgJgIgRQgIgRAAgWQAAgiASgTQARgUAfAAQAgAAASAUQARAUABAhQgBAjgRATQgSAUggAAQgTAAgQgJgAgbgkQgIANAAAXQAAAxAjAAQAkAAAAgxQABgwglAAQgSAAgJAMg");
	this.shape_507.setTransform(481.85,519.875);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#FFFFFF").s().p("AgOBkIAAjHIAdAAIAADHg");
	this.shape_508.setTransform(470.125,516.975);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#FFFFFF").s().p("AgbBlIAAh2IgXAAIAAgPIAXgJIAAgKQAAgZAMgMQALgMAYAAQAQAAAPAFIgIAXQgLgEgKAAQgKAAgFAHQgFAGABANIAAAJIAiAAIAAAYIgiAAIAAB2g");
	this.shape_509.setTransform(462.5,516.9);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#FFFFFF").s().p("AgOBkIAAjHIAdAAIAADHg");
	this.shape_510.setTransform(446.425,516.975);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#FFFFFF").s().p("AgjBBQgPgJgIgRQgJgRABgWQgBgiATgTQARgUAfAAQAfAAATAUQASAUAAAhQAAAjgSATQgSAUggAAQgTAAgQgJgAgbgkQgIANAAAXQAAAxAjAAQAlAAgBgxQAAgwgkAAQgSAAgJAMg");
	this.shape_511.setTransform(434.75,519.875);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#FFFFFF").s().p("AgrBJIAAiOIAYAAIAEAZIACAAQAHgNAKgHQAMgIANAAIAPACIgDAcQgHgBgHAAQgSgBgKAMQgLAMAAATIAABKg");
	this.shape_512.setTransform(421.875,519.75);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FFFFFF").s().p("AgaArIAAhLIgTAAIAAgOIAVgLIAKgeIASAAIAAAfIAoAAIAAAYIgoAAIAABKQAAALAFAGQAGAFAJAAQALAAALgEIAAAYIgNADIgRABQgpAAgBgtg");
	this.shape_513.setTransform(410.1,518.4);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#FFFFFF").s().p("AAgBJIAAhXQAAgRgGgIQgHgIgOAAQgTAAgIALQgJAMAAAaIAABHIgfAAIAAiOIAYAAIAEATIACAAQAGgLAMgFQAMgGAOAAQAzAAAAA0IAABdg");
	this.shape_514.setTransform(396.725,519.75);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgJAJQgIAJgBAQIA7AAIAAAAg");
	this.shape_515.setTransform(687.4,326.925);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_516.setTransform(650.35,326.925);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQANgQAWAAQAWABANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgPAAIgCgQIgBAAQgMASgXAAQgWAAgNgPgAgXgJQgJALABAWQgBAWAJALQAHAMAQAAQARgBAIgJQAJgKgBgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_517.setTransform(501.2,324.6);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgDgDAAgGQAAgGADgCQAEgDADAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgDAAgEgDg");
	this.shape_518.setTransform(412.35,324.775);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FFFFFF").s().p("AgIBNIAAiZIARAAIAACZg");
	this.shape_519.setTransform(358.5,325);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#FFFFFF").s().p("AgfBzQASgYAJgdQAIgeAAgfQAAgfgIgeQgJgegSgYIAaAAQASAWAKAeQAKAegBAhQABAigKAdQgKAdgSAWg");
	this.shape_520.setTransform(718.2,260.325);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FFFFFF").s().p("AAgBJIAAhXQAAgRgGgIQgHgIgOAAQgTAAgIAMQgJALAAAZIAABIIgfAAIAAiOIAYAAIAEASIACAAQAGgKAMgFQAMgGAOABQAzAAAAA0IAABcg");
	this.shape_521.setTransform(705.825,260.4);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#FFFFFF").s().p("AgjBBQgPgJgIgRQgJgRAAgWQAAgiASgTQASgUAfAAQAfAAASAUQATAUgBAhQABAjgTATQgRAUggAAQgTAAgQgJgAgagkQgJANAAAXQAAAxAjAAQAlAAgBgxQAAgwgkAAQgSAAgIAMg");
	this.shape_522.setTransform(689.35,260.525);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#FFFFFF").s().p("AgOBjIAAiOIAdAAIAACOgAgMhFQgEgEAAgIQAAgIAEgFQAEgEAIAAQAIAAAFAEQAEAFAAAIQAAAIgEAEQgFAFgIAAQgIAAgEgFg");
	this.shape_523.setTransform(677.7,257.8);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#FFFFFF").s().p("AgZArIAAhMIgUAAIAAgNIAVgLIAKgfIASAAIAAAhIApAAIAAAWIgpAAIAABMQAAAKAGAGQAFAFAJAAQALAAALgDIAAAWIgNAEIgRACQgpgBAAgtg");
	this.shape_524.setTransform(668.8,259.05);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FFFFFF").s().p("AgvA+QgMgLgBgVQAAgWARgKQARgLAggBIAYgBIAAgHQABgOgHgHQgGgHgOAAQgJAAgLAEIgTAHIgKgWQAMgGAOgDQAOgDALAAQAbAAANAMQAPAMAAAZIAABfIgWAAIgGgUIgBAAQgLANgKAFQgLAFgPAAQgVAAgLgMgAAMAEQgVABgJAGQgKAGAAAOQAAAJAFAFQAHAGAKAAQAQAAAKgKQAKgJAAgQIAAgNg");
	this.shape_525.setTransform(655.6,260.525);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#FFFFFF").s().p("AgrBJIAAiOIAYAAIAEAZIACAAQAHgMAKgIQAMgHANAAIAPABIgDAcQgHgCgHABQgSAAgKALQgLAMAAATIAABKg");
	this.shape_526.setTransform(643.575,260.4);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#FFFFFF").s().p("AgaArIAAhMIgTAAIAAgNIAVgLIAKgfIASAAIAAAhIAoAAIAAAWIgoAAIAABMQAAAKAFAGQAGAFAJAAQALAAALgDIAAAWIgNAEIgRACQgqgBAAgtg");
	this.shape_527.setTransform(616.65,259.05);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#FFFFFF").s().p("AgOBeIAAi7IAdAAIAAC7g");
	this.shape_528.setTransform(607.525,258.225);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#FFFFFF").s().p("AAGBzQgSgWgKgdQgKgdAAgiQAAghAKgeQAKgeASgWIAbAAQgSAYgKAeQgIAeAAAfQAAAfAIAeQAKAdARAYg");
	this.shape_529.setTransform(599.475,260.325);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#FFFFFF").s().p("AhABoIAAjNIAZAAIAEATIACAAQAOgVAbAAQAbAAAPATQAPATAAAjQAAAigPAUQgQATgaAAQgaAAgPgTIgCAAIACAWIAAA6gAgZhEQgIAKAAAYIAAAEQAAAaAIALQAIAMASAAQAQAAAIgNQAJgMAAgYQAAgYgJgMQgIgNgRAAQgRAAgIALg");
	this.shape_530.setTransform(580.525,263.575);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#FFFFFF").s().p("AgiBBQgQgJgIgRQgIgRgBgWQABgiARgTQASgUAgAAQAfAAARAUQASAUAAAhQAAAjgSATQgRAUggAAQgTAAgPgJgAgbgkQgIANAAAXQAAAxAkAAQAjAAABgxQAAgwglAAQgSAAgJAMg");
	this.shape_531.setTransform(563.85,260.525);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#FFFFFF").s().p("AgiBBQgQgJgIgRQgJgRAAgWQABgiARgTQASgUAgAAQAfAAARAUQASAUAAAhQAAAjgSATQgRAUggAAQgTAAgPgJgAgagkQgJANAAAXQAAAxAkAAQAjAAABgxQAAgwglAAQgSAAgIAMg");
	this.shape_532.setTransform(547.75,260.525);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#FFFFFF").s().p("Ag2BeIAAi7IAeAAIAAChIBPAAIAAAag");
	this.shape_533.setTransform(533.475,258.225);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#FFFFFF").s().p("AgNBFQgFgFAAgJQAAgKAFgEQAFgFAIgBQAJABAFAFQAFAFAAAJQAAAJgFAFQgFAGgJAAQgIAAgFgGgAgNgoQgFgFAAgJQAAgUASAAQAKAAAEAGQAFAEAAAKQAAAJgFAFQgFAFgJABQgIgBgFgFg");
	this.shape_534.setTransform(515.025,260.55);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#FFFFFF").s().p("AgbBlIAAh3IgXAAIAAgOIAXgJIAAgKQAAgYAMgNQALgMAYAAQAQAAAPAGIgIAWQgLgEgKABQgKgBgFAHQgFAGABANIAAAKIAiAAIAAAWIgiAAIAAB3g");
	this.shape_535.setTransform(462.5,257.55);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#FFFFFF").s().p("AgrBJIAAiOIAYAAIAEAZIACAAQAHgMAKgIQAMgHANAAIAPABIgDAcQgHgCgHABQgSAAgKALQgLAMAAATIAABKg");
	this.shape_536.setTransform(421.875,260.4);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#FFFFFF").s().p("AgaArIAAhMIgTAAIAAgNIAVgLIAKgfIASAAIAAAhIAoAAIAAAWIgoAAIAABMQAAAKAFAGQAGAFAJAAQALAAALgDIAAAWIgNAEIgRACQgpgBgBgtg");
	this.shape_537.setTransform(410.1,259.05);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#FFFFFF").s().p("AAgBJIAAhXQAAgRgGgIQgHgIgOAAQgTAAgIAMQgJALAAAZIAABIIgfAAIAAiOIAYAAIAEASIACAAQAGgKAMgFQAMgGAOABQAzAAAAA0IAABcg");
	this.shape_538.setTransform(396.725,260.4);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgGgFQgGgFgPgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgLAAgHAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgNgHg");
	this.shape_539.setTransform(1029.6,564.325);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQAAgKAIgIQAGgIAMgCQgEgCgDgFQgDgEAAgFQAAgHADgDQADgFAIgFQgJgDgFgJQgHgJAAgLQAAgTAMgLQALgKAVAAQAJAAAHACIAnAAIAAALIgUADIAEAJQADAGAAAIQAAARgMAKQgMAKgSAAIgKgBQgLAGAAAIQAAAFADACQAEACAKAAIAUAAQASAAAKAIQAKAIAAAPQAAATgPALQgPAKgdAAQgXAAgMgJgAgeAkQgGAGgBAKQAAAKAJAEQAHAFAPAAQAVAAALgGQAKgHAAgLQAAgKgFgDQgHgEgQAAIgTAAQgMAAgHAGgAgUhBQgHAHAAANQAAAMAHAHQAHAGAMAAQAYAAABgZQAAgagZAAQgNAAgGAGg");
	this.shape_540.setTransform(966.75,566.825);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#FFFFFF").s().p("AgZAIIAAgPIAzAAIAAAPg");
	this.shape_541.setTransform(902.775,564.3);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQANgPAWAAQAWAAANARIABAAIgBgJIAAgIIAAgvIASAAIAACjIgOAAIgDgQIgBAAQgMASgXAAQgWAAgNgQgAgXgJQgJALABAWQgBAWAJALQAHAMAQAAQARAAAIgLQAJgJgBgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_542.setTransform(715.5,562);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQANgPAWAAQAWAAANARIABAAIgBgJIAAgIIAAgvIASAAIAACjIgOAAIgDgQIgBAAQgMASgXAAQgWAAgNgQgAgXgJQgJALABAWQgBAWAJALQAHAMAQAAQARAAAIgLQAJgJgBgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_543.setTransform(476.1,562);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQAMgPAXAAQAXAAAMARIACAAIgBgJIAAgIIAAgvIARAAIAACjIgOAAIgDgQIAAAAQgNASgXAAQgXAAgMgQgAgYgJQgIALAAAWQAAAWAIALQAJAMAPAAQARAAAJgLQAHgJABgWIAAgDQAAgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_544.setTransform(462.9,562);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQANgPAWAAQAWAAANARIABAAIgBgJIAAgIIAAgvIASAAIAACjIgPAAIgCgQIgBAAQgMASgXAAQgWAAgNgQgAgXgJQgJALABAWQgBAWAJALQAHAMAQAAQARAAAIgLQAJgJgBgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_545.setTransform(385.1,562);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgHgJgNAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_546.setTransform(1028.7,532.525);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAPIACAAQAFgJAJgFQAKgEALAAQAVAAALAKQAKAJAAAVIAABMg");
	this.shape_547.setTransform(1016.075,530.1);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQAAgKAHgIQAHgIAMgCQgEgCgDgFQgDgEAAgFQAAgHADgDQAEgFAHgFQgJgDgFgJQgHgJAAgLQAAgTAMgLQAMgKAUAAQAIAAAIACIAnAAIAAALIgVADIAGAJQACAGAAAIQAAARgMAKQgMAKgTAAIgJgBQgLAGAAAIQAAAFADACQAEACAKAAIAUAAQASAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgGAGgBAKQAAAKAIAEQAJAFAOAAQAVAAALgGQAKgHAAgLQAAgKgFgDQgHgEgQAAIgTAAQgMAAgHAGgAgUhBQgHAHAAANQAAAMAHAHQAHAGAMAAQAYAAABgZQAAgagaAAQgMAAgGAGg");
	this.shape_548.setTransform(990.25,535.025);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQANgPAWAAQAWAAANAQIABAAIAAgIIAAgIIAAgvIARAAIAACjIgPAAIgCgPIAAAAQgNARgXAAQgWAAgNgQgAgYgJQgHALAAAVQAAAXAHALQAIALAQAAQARABAIgLQAJgJAAgWIAAgEQAAgXgJgLQgIgKgRAAQgQAAgIAMg");
	this.shape_549.setTransform(888.45,530.2);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgLAAgHAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgXAAgNgHg");
	this.shape_550.setTransform(822.35,532.525);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAPIACAAQAFgJAJgFQAKgEALAAQAVAAALAKQAKAJAAAVIAABMg");
	this.shape_551.setTransform(750.225,530.1);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAPAAIACAQIAAAAQAHgKAKgEQAIgEALAAQAXAAANAQQAMAPAAAdQAAAbgNAQQgNAQgWAAQgLAAgIgEQgKgEgHgJIAAAAIAAATIAAAwgAgYg7QgIAKgBAVIAAAEQAAAYAJAKQAIAKARAAQAPAAAIgMQAIgLAAgVQAAgWgIgLQgIgMgPAAQgSAAgHAKg");
	this.shape_552.setTransform(637.4,535.025);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgNAAgJAJQgIAJgBAQIA7AAIAAAAg");
	this.shape_553.setTransform(624.5,532.525);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQANgPAWAAQAWAAANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgOAAIgDgPIgBAAQgMARgXAAQgWAAgNgQgAgXgJQgJALABAVQgBAXAJALQAHALAQAAQARABAIgLQAJgJgBgWIAAgEQAAgXgIgLQgIgKgRAAQgQAAgHAMg");
	this.shape_554.setTransform(597.15,530.2);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgHgcIgBAAIgHAcIgWBDIgUAAIgfhzIASAAIARBBIAGAfIABAAIAEgPIAEgQIAWhBIASAAIAUBBQAHATABAMIABAAIACgMIAXhUIASAAIghBzg");
	this.shape_555.setTransform(476.3,532.525);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgNAAgJAJQgIAJgBAQIA7AAIAAAAg");
	this.shape_556.setTransform(443.15,532.525);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAPIACAAQAFgJAJgFQAKgEALAAQAVAAALAKQAKAJAAAVIAABMg");
	this.shape_557.setTransform(374.125,530.1);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#FFFFFF").s().p("AADAaIAHgaIAFgZIATAAIABACIgHAXIgLAagAgiAaQAHgdAEgWIATAAIABACIgHAXIgLAag");
	this.shape_558.setTransform(975.675,461.925);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#FFFFFF").s().p("AAFAaIgCgCQAGgXANgaIANAAIgGAaIgFAZgAghAaIgBgCIAHgYIALgZIANAAQgHAZgDAag");
	this.shape_559.setTransform(884.875,461.925);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#FFFFFF").s().p("AgPAbIAHgbIAEgZIATAAIABACIgIAYIgJAag");
	this.shape_560.setTransform(845.15,474.85);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgPAAgJAJQgHAKAAATIAABAIgRAAIAAhKQAAgOgFgHQgGgHgNAAQgRAAgHAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIACAQIABAAQAGgIAIgFQAKgFAKAAQAcAAAHAUIABAAQAFgJAKgGQAJgFANAAQAUAAAKAKQAJAKABAWIAABLg");
	this.shape_561.setTransform(820.9,468.825);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_562.setTransform(783.65,467.675);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgEAAgDgDg");
	this.shape_563.setTransform(735.15,466.775);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAOAAIADAQIABAAQAHgKAIgEQAJgEALAAQAXAAANAQQAMAPAAAdQAAAbgNAQQgNAQgWAAQgLAAgJgEQgJgEgGgJIgBAAIABATIAAAwgAgYg7QgIAKAAAVIAAAEQAAAYAIAKQAIAKAQAAQAQAAAIgMQAJgLgBgVQABgWgJgLQgIgMgQAAQgRAAgHAKg");
	this.shape_564.setTransform(691.1,471.425);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgNAAgJAJQgIAJgBAQIA7AAIAAAAg");
	this.shape_565.setTransform(644.75,468.925);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgHgJgNAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_566.setTransform(621.9,468.925);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_567.setTransform(552.4,467.675);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_568.setTransform(505.2,467.675);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#FFFFFF").s().p("AgpBMQgMgIAAgQQAAgKAGgIQAHgIAMgCQgEgCgDgFQgDgEAAgFQAAgHAEgDQADgFAHgFQgJgDgGgJQgFgJAAgLQgBgTAMgLQAMgKAUAAQAJAAAGACIApAAIAAALIgWADIAGAJQACAGAAAIQAAARgMAKQgMAKgTAAIgKgBQgLAGAAAIQAAAFAEACQAFACAJAAIATAAQATAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgHAGAAAKQABAKAHAEQAJAFAOAAQAVAAALgGQALgHAAgLQgBgKgGgDQgFgEgQAAIgVAAQgLAAgHAGgAgVhBQgGAHAAANQAAAMAHAHQAGAGANAAQAZAAgBgZQAAgagZAAQgLAAgIAGg");
	this.shape_569.setTransform(483.4,471.425);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_570.setTransform(471.075,468.925);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_571.setTransform(460.65,467.675);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQAMgPAXAAQAXAAAMARIACAAIgBgJIAAgIIAAgvIARAAIAACjIgOAAIgDgQIAAAAQgNASgXAAQgXAAgMgQgAgYgJQgHALgBAWQABAWAHALQAJAMAPAAQARAAAJgLQAHgJABgWIAAgDQAAgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_572.setTransform(444.45,466.6);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQAAgKAIgIQAGgIAMgCQgEgCgDgFQgDgEAAgFQAAgHADgDQAEgFAHgFQgJgDgFgJQgHgJAAgLQAAgTAMgLQAMgKAUAAQAIAAAIACIAnAAIAAALIgVADIAGAJQACAGAAAIQAAARgMAKQgMAKgSAAIgKgBQgLAGAAAIQAAAFADACQAEACAKAAIAUAAQASAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgGAGgBAKQAAAKAIAEQAJAFAOAAQAVAAALgGQAKgHAAgLQAAgKgFgDQgHgEgQAAIgTAAQgMAAgHAGgAgUhBQgHAHAAANQAAAMAHAHQAHAGAMAAQAYAAABgZQAAgagZAAQgNAAgGAGg");
	this.shape_573.setTransform(420.1,471.425);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_574.setTransform(386.075,468.925);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAPAAIACAQIABAAQAHgKAJgEQAIgEALAAQAXAAAMAQQANAPAAAdQAAAbgNAQQgNAQgWAAQgLAAgIgEQgKgEgGgJIgBAAIABATIAAAwgAgYg7QgIAKAAAVIAAAEQgBAYAJAKQAIAKARAAQAPAAAIgMQAIgLAAgVQAAgWgIgLQgIgMgPAAQgSAAgHAKg");
	this.shape_575.setTransform(362.45,471.425);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAPIACAAQAFgJAJgFQAKgEALAAQAVAAALAKQAKAJAAAVIAABMg");
	this.shape_576.setTransform(940.825,434.7);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgRgFgHgFQgGgEgEgGQgDgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_577.setTransform(915.9,437.125);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_578.setTransform(891.025,437.125);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_579.setTransform(875.15,435.875);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_580.setTransform(866.525,437.125);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgGgFgRgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgGAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFACADQADAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_581.setTransform(826.5,437.125);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQANgPAWAAQAWAAANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgPAAIgCgPIgBAAQgMARgXAAQgWAAgNgQgAgXgJQgJALABAVQgBAXAJALQAHALAQAAQARABAIgLQAJgJgBgWIAAgEQAAgXgIgLQgIgKgRAAQgQAAgHAMg");
	this.shape_582.setTransform(759.5,434.8);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgGg6QgEgDAAgGQAAgGAEgCQADgDADAAQAEAAADADQAEACAAAGQAAAGgEADQgDADgEAAQgDAAgDgDg");
	this.shape_583.setTransform(750.5,434.975);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQAMgPAXAAQAWAAANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgOAAIgDgPIgBAAQgMARgXAAQgXAAgMgQgAgXgJQgJALAAAVQAAAXAJALQAHALAQAAQARABAIgLQAIgJAAgWIAAgEQABgXgJgLQgIgKgRAAQgQAAgHAMg");
	this.shape_584.setTransform(724.6,434.8);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgGg6QgEgDAAgGQAAgGAEgCQADgDADAAQAEAAADADQAEACAAAGQAAAGgEADQgDADgEAAQgDAAgDgDg");
	this.shape_585.setTransform(702.35,434.975);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_586.setTransform(680.275,437.125);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQAAgKAIgIQAGgIAMgCQgEgCgDgFQgDgEAAgFQAAgHADgDQAEgFAHgFQgJgDgFgJQgHgJAAgLQAAgTAMgLQAMgKAUAAQAIAAAIACIAnAAIAAALIgVADIAGAJQACAGAAAIQAAARgMAKQgMAKgSAAIgKgBQgLAGAAAIQAAAFADACQAEACAKAAIAUAAQASAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgGAGgBAKQAAAKAIAEQAJAFAOAAQAVAAALgGQAKgHAAgLQAAgKgFgDQgHgEgQAAIgTAAQgMAAgHAGgAgUhBQgHAHAAANQAAAMAHAHQAHAGAMAAQAYAAABgZQAAgagZAAQgNAAgGAGg");
	this.shape_587.setTransform(662.2,439.625);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDgBgGQABgGADgCQADgDADAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgDAAgDgDg");
	this.shape_588.setTransform(640.45,434.975);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAPAAIACAQIABAAQAGgKAKgEQAIgEALAAQAXAAANAQQAMAPAAAdQAAAbgNAQQgNAQgWAAQgKAAgJgEQgKgEgGgJIgBAAIABATIAAAwgAgYg7QgIAKAAAVIAAAEQgBAYAJAKQAIAKARAAQAPAAAIgMQAJgLgBgVQABgWgJgLQgIgMgPAAQgSAAgHAKg");
	this.shape_589.setTransform(631.45,439.625);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_590.setTransform(604.825,437.125);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_591.setTransform(594.675,437.025);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQABgKAGgIQAHgIAMgCQgEgCgDgFQgDgEAAgFQAAgHADgDQAEgFAHgFQgJgDgGgJQgFgJgBgLQAAgTAMgLQAMgKAUAAQAIAAAIACIAnAAIAAALIgVADIAGAJQACAGAAAIQAAARgMAKQgLAKgUAAIgKgBQgLAGABAIQAAAFADACQAEACAKAAIAUAAQASAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgGAGgBAKQAAAKAIAEQAJAFAOAAQAVAAALgGQALgHgBgLQAAgKgFgDQgGgEgRAAIgUAAQgLAAgHAGgAgVhBQgGAHAAANQAAAMAHAHQAGAGANAAQAZAAgBgZQAAgagZAAQgLAAgIAGg");
	this.shape_592.setTransform(583.55,439.625);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_593.setTransform(568.25,435.875);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_594.setTransform(559.625,437.125);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgGgFgRgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgGAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFACADQADAEAFADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_595.setTransform(519.6,437.125);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_596.setTransform(475.575,437.025);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_597.setTransform(422.875,437.125);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDgBgGQABgGADgCQADgDADAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgDAAgDgDg");
	this.shape_598.setTransform(413.65,434.975);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_599.setTransform(407.05,435.875);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_600.setTransform(398.375,437.125);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#FFFFFF").s().p("AgqBNIAAiZIBVAAIAAAPIhDAAIAAA5IA/AAIAAAPIg/AAIAABCg");
	this.shape_601.setTransform(361.9,435.2);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#FFFFFF").s().p("AAgBIIAAhWQAAgQgGgJQgHgIgOAAQgTAAgIALQgJAMAAAZIAABHIgfAAIAAiNIAYAAIAEATIACAAQAGgKAMgGQAMgFAOgBQAzAAAAA0IAABcg");
	this.shape_602.setTransform(458.225,370.6);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#FFFFFF").s().p("AgiBBQgQgJgIgRQgJgRAAgWQAAgiASgTQASgUAgAAQAeAAASAUQATAUgBAhQABAjgTATQgRAUggAAQgTAAgPgJgAgagkQgJANAAAXQAAAxAkAAQAkAAAAgxQAAgwglAAQgSAAgIAMg");
	this.shape_603.setTransform(441.75,370.725);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#FFFFFF").s().p("AgOBiIAAiNIAdAAIAACNgAgLhEQgFgFAAgIQAAgIAFgEQADgEAIgBQAIABAFAEQAEAEAAAIQAAAIgEAFQgFAEgIAAQgIAAgDgEg");
	this.shape_604.setTransform(430.1,368);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#FFFFFF").s().p("AgZArIAAhLIgUAAIAAgOIAVgLIAKgfIASAAIAAAhIApAAIAAAXIgpAAIAABLQAAALAGAFQAFAFAJAAQALAAALgEIAAAYIgNADIgQABQgqAAAAgtg");
	this.shape_605.setTransform(421.15,369.25);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#FFFFFF").s().p("AgkA3QgSgTABgjQgBgjATgUQARgTAgAAQAXAAASAIIgJAZQgUgIgMAAQgkAAAAAwQAAAYAJANQAJAMARAAQAUAAATgKIAAAaQgJAFgJACQgJACgOAAQgeAAgRgTg");
	this.shape_606.setTransform(409.8,370.725);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#FFFFFF").s().p("AAgBIIAAhWQAAgQgGgJQgHgIgOAAQgTAAgIALQgJAMAAAZIAABHIgfAAIAAiNIAYAAIAEATIACAAQAGgKAMgGQAMgFAOgBQAzAAAAA0IAABcg");
	this.shape_607.setTransform(394.725,370.6);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#FFFFFF").s().p("AgxA8QgNgNAAgbIAAhbIAfAAIAABXQAAAPAGAJQAHAIAOAAQASAAAJgMQAJgLAAgZIAAhHIAfAAIAACNIgYAAIgEgSIgCAAQgGAJgMAGQgMAFgNAAQgaABgNgNg");
	this.shape_608.setTransform(377.875,370.85);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#FFFFFF").s().p("Ag0BeIAAi7IBpAAIAAAaIhKAAIAAA7IBGAAIAAAZIhGAAIAABNg");
	this.shape_609.setTransform(363.3,368.425);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgIgcIAAAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAHAfIAAAAIAEgPIAFgQIAVhBIASAAIAVBBQAFATADAMIABAAIACgMIAVhUIASAAIgfBzg");
	this.shape_610.setTransform(741.85,640.525);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAYBEIAKAfIABAAIAHgXIAbhMIATAAIgrBzg");
	this.shape_611.setTransform(710.55,640.525);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAZBEIAJAfIABAAIAHgXIAchMIASAAIgrBzg");
	this.shape_612.setTransform(678.9,640.525);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQAMgPAXAAQAXAAAMAQIACAAIgBgIIAAgIIAAgvIARAAIAACjIgOAAIgDgPIAAAAQgNARgXAAQgXAAgMgQgAgYgJQgHALgBAVQABAXAHALQAJALAPAAQARABAJgLQAHgJABgWIAAgEQAAgXgJgLQgIgKgRAAQgPAAgJAMg");
	this.shape_613.setTransform(541.3,638.2);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAIgBIAHgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_614.setTransform(509.35,639.275);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#FFFFFF").s().p("AgqBNIAAiZIBVAAIAAAQIhDAAIAAA4IA/AAIAAAPIg/AAIAABCg");
	this.shape_615.setTransform(496,575);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAJAAIAKgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_616.setTransform(399.1,575.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360,p:{x:441.275,y:279.475}},{t:this.shape_359,p:{x:452.525,y:282.375}},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355,p:{x:391.125,y:348.775}},{t:this.shape_354,p:{x:402.675,y:348.675}},{t:this.shape_353,p:{x:409.05,y:346.625}},{t:this.shape_352,p:{x:417.375,y:348.775}},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349,p:{x:448.5,y:348.775}},{t:this.shape_348,p:{x:462.8,y:346.625}},{t:this.shape_347},{t:this.shape_346,p:{x:486.975,y:348.775}},{t:this.shape_345,p:{x:504.275,y:348.775}},{t:this.shape_344,p:{x:515.725,y:348.775}},{t:this.shape_343,p:{x:528.875,y:348.675}},{t:this.shape_342},{t:this.shape_341,p:{x:548.625,y:348.775}},{t:this.shape_340,p:{x:557.75,y:346.625}},{t:this.shape_339,p:{x:567.175,y:348.675}},{t:this.shape_338,p:{x:579.8,y:348.775}},{t:this.shape_337,p:{x:590.925,y:348.675}},{t:this.shape_336,p:{x:606.625,y:348.775}},{t:this.shape_335,p:{x:617.375,y:346.275}},{t:this.shape_334,p:{x:631.575,y:348.775}},{t:this.shape_333,p:{x:648.7,y:348.775}},{t:this.shape_332,p:{x:660.75,y:351.275}},{t:this.shape_331},{t:this.shape_330,p:{x:684.425,y:348.775}},{t:this.shape_329,p:{x:692.05,y:346.625}},{t:this.shape_328,p:{x:699.025,y:346.275}},{t:this.shape_327,p:{x:704.75,y:346.625}},{t:this.shape_326,p:{x:712.875,y:348.775}},{t:this.shape_325,p:{x:727.05,y:347.525}},{t:this.shape_324,p:{x:736.375,y:351.375}},{t:this.shape_323},{t:this.shape_322,p:{x:761.1,y:348.775}},{t:this.shape_321,p:{x:779.175,y:348.775}},{t:this.shape_320,p:{x:789.925,y:346.275}},{t:this.shape_319,p:{x:804.8,y:346.45}},{t:this.shape_318,p:{x:817.325,y:348.775}},{t:this.shape_317,p:{x:827.45,y:347.525}},{t:this.shape_316,p:{x:836.925,y:348.775}},{t:this.shape_315,p:{x:857.3,y:348.775}},{t:this.shape_314},{t:this.shape_313,p:{x:881.65,y:346.625}},{t:this.shape_312,p:{x:889.725,y:348.775}},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309,p:{x:932.225,y:348.775}},{t:this.shape_308,p:{x:943.8,y:348.775}},{t:this.shape_307},{t:this.shape_306,p:{x:968.725,y:346.35}},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303,p:{x:1012.625,y:348.775}},{t:this.shape_302},{t:this.shape_301,p:{x:1032.85,y:348.775}},{t:this.shape_300,p:{x:1045.475,y:348.675}},{t:this.shape_299,p:{x:1055.75,y:347.525}},{t:this.shape_298},{t:this.shape_297,p:{x:1070.725,y:348.775}},{t:this.shape_296,p:{x:1079.825,y:346.35}},{t:this.shape_295,p:{x:359.25,y:379.325}},{t:this.shape_294,p:{x:369.675,y:380.575}},{t:this.shape_293,p:{x:387.375,y:380.575}},{t:this.shape_292,p:{x:396.475,y:378.15}},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289,p:{x:424.075,y:380.475}},{t:this.shape_288},{t:this.shape_287,p:{x:452.975,y:380.675}},{t:this.shape_286,p:{x:464.775,y:380.475}},{t:this.shape_285,p:{x:471.15,y:378.425}},{t:this.shape_284,p:{x:480.525,y:380.475}},{t:this.shape_283},{t:this.shape_282,p:{x:508.2,y:379.325}},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279,p:{x:548.075,y:380.475}},{t:this.shape_278,p:{x:558.225,y:380.675}},{t:this.shape_277,p:{x:571.525,y:380.475}},{t:this.shape_276,p:{x:584.725,y:380.475}},{t:this.shape_275,p:{x:594,y:378.425}},{t:this.shape_274,p:{x:603.375,y:380.475}},{t:this.shape_273},{t:this.shape_272,p:{x:633.825,y:380.575}},{t:this.shape_271,p:{x:644.625,y:378.075}},{t:this.shape_270,p:{x:658.825,y:380.575}},{t:this.shape_269,p:{x:677.7,y:383.075}},{t:this.shape_268,p:{x:689.125,y:380.475}},{t:this.shape_267,p:{x:699.225,y:380.575}},{t:this.shape_266,p:{x:711.6,y:383.075}},{t:this.shape_265,p:{x:722.725,y:380.475}},{t:this.shape_264,p:{x:731.925,y:380.575}},{t:this.shape_263},{t:this.shape_262,p:{x:761.225,y:385.225}},{t:this.shape_261},{t:this.shape_260,p:{x:377.925,y:444.075}},{t:this.shape_259,p:{x:387.175,y:441.75}},{t:this.shape_258},{t:this.shape_257,p:{x:401.825,y:441.75}},{t:this.shape_256,p:{x:412.75,y:444.175}},{t:this.shape_255,p:{x:429.925,y:444.175}},{t:this.shape_254,p:{x:447.225,y:444.175}},{t:this.shape_253,p:{x:458.625,y:444.175}},{t:this.shape_252,p:{x:471.825,y:444.075}},{t:this.shape_251,p:{x:483.55,y:444.175}},{t:this.shape_250,p:{x:492.35,y:442.925}},{t:this.shape_249,p:{x:501.825,y:444.175}},{t:this.shape_248,p:{x:514.875,y:444.075}},{t:this.shape_247,p:{x:525.15,y:442.925}},{t:this.shape_246},{t:this.shape_245,p:{x:558.075,y:441.75}},{t:this.shape_244,p:{x:567.35,y:442.025}},{t:this.shape_243,p:{x:575.475,y:444.175}},{t:this.shape_242,p:{x:587.025,y:441.75}},{t:this.shape_241,p:{x:601.85,y:442.025}},{t:this.shape_240},{t:this.shape_239,p:{x:624.675,y:441.675}},{t:this.shape_238,p:{x:630.45,y:442.025}},{t:this.shape_237},{t:this.shape_236,p:{x:650.5,y:444.175}},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233,p:{x:686.175,y:444.175}},{t:this.shape_232},{t:this.shape_231,p:{x:714.525,y:444.175}},{t:this.shape_230,p:{x:726.075,y:444.075}},{t:this.shape_229},{t:this.shape_228,p:{x:740.775,y:444.175}},{t:this.shape_227},{t:this.shape_226,p:{x:763.075,y:441.75}},{t:this.shape_225,p:{x:771.9,y:444.175}},{t:this.shape_224,p:{x:790.125,y:444.075}},{t:this.shape_223,p:{x:802.75,y:444.175}},{t:this.shape_222,p:{x:814.8,y:444.175}},{t:this.shape_221},{t:this.shape_220,p:{x:839.15,y:444.175}},{t:this.shape_219,p:{x:853.55,y:442.925}},{t:this.shape_218,p:{x:863.925,y:444.175}},{t:this.shape_217,p:{x:882.675,y:441.75}},{t:this.shape_216,p:{x:894.825,y:444.175}},{t:this.shape_215,p:{x:906.6,y:444.175}},{t:this.shape_214,p:{x:918.1,y:444.175}},{t:this.shape_213,p:{x:933.4,y:442.925}},{t:this.shape_212,p:{x:943.975,y:441.75}},{t:this.shape_211,p:{x:956.6,y:444.175}},{t:this.shape_210,p:{x:972.375,y:441.675}},{t:this.shape_209,p:{x:978.125,y:441.75}},{t:this.shape_208,p:{x:986.95,y:444.175}},{t:this.shape_207},{t:this.shape_206,p:{x:1006.95,y:442.025}},{t:this.shape_205},{t:this.shape_204,p:{x:1025.6,y:442.025}},{t:this.shape_203,p:{x:1031.025,y:441.75}},{t:this.shape_202},{t:this.shape_201,p:{x:1042.95,y:442.925}},{t:this.shape_200,p:{x:1052.275,y:446.775}},{t:this.shape_199,p:{x:1067.05,y:442.925}},{t:this.shape_198,p:{x:1077.425,y:444.175}},{t:this.shape_197,p:{x:360.875,y:475.975}},{t:this.shape_196},{t:this.shape_195,p:{x:384.625,y:475.975}},{t:this.shape_194,p:{x:397.675,y:475.875}},{t:this.shape_193},{t:this.shape_192,p:{x:422.1,y:475.975}},{t:this.shape_191,p:{x:440.225,y:476.075}},{t:this.shape_190,p:{x:453.525,y:475.875}},{t:this.shape_189},{t:this.shape_188,p:{x:479.35,y:475.975}},{t:this.shape_187,p:{x:490.475,y:475.875}},{t:this.shape_186,p:{x:505.025,y:475.975}},{t:this.shape_185,p:{x:516,y:475.975}},{t:this.shape_184,p:{x:527.125,y:475.875}},{t:this.shape_183,p:{x:534.45,y:474.725}},{t:this.shape_182,p:{x:543.975,y:475.975}},{t:this.shape_181,p:{x:553.1,y:473.825}},{t:this.shape_180,p:{x:562.475,y:475.875}},{t:this.shape_179,p:{x:579.975,y:475.975}},{t:this.shape_178,p:{x:591.375,y:475.975}},{t:this.shape_177,p:{x:604.525,y:475.875}},{t:this.shape_176},{t:this.shape_175,p:{x:627,y:473.825}},{t:this.shape_174,p:{x:633.45,y:474.725}},{t:this.shape_173,p:{x:640.1,y:473.825}},{t:this.shape_172,p:{x:649.325,y:475.975}},{t:this.shape_171,p:{x:662.475,y:475.875}},{t:this.shape_170,p:{x:674.2,y:475.975}},{t:this.shape_169,p:{x:682.175,y:480.625}}]},1).to({state:[{t:this.shape_490,p:{y:352.275}},{t:this.shape_489,p:{y:354.575}},{t:this.shape_488},{t:this.shape_487},{t:this.shape_359,p:{x:446.325,y:354.575}},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483,p:{y:419.025}},{t:this.shape_482,p:{x:375.675,y:420.975}},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477,p:{x:451.25,y:419.725}},{t:this.shape_476},{t:this.shape_355,p:{x:476.575,y:420.975}},{t:this.shape_475,p:{x:488.125,y:420.875}},{t:this.shape_208,p:{x:497.8,y:420.975}},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472,p:{x:537.375,y:420.875}},{t:this.shape_471},{t:this.shape_470,p:{x:563.975,y:421.075}},{t:this.shape_469},{t:this.shape_468,p:{x:587,y:420.975}},{t:this.shape_467},{t:this.shape_466,p:{x:606.775,y:421.075}},{t:this.shape_259,p:{x:616.125,y:418.55}},{t:this.shape_353,p:{x:627.2,y:418.825}},{t:this.shape_343,p:{x:636.575,y:420.875}},{t:this.shape_465,p:{x:654.075,y:420.975}},{t:this.shape_464,p:{x:665.475,y:420.975}},{t:this.shape_463},{t:this.shape_462,p:{x:687.9,y:418.825}},{t:this.shape_339,p:{x:697.275,y:420.875}},{t:this.shape_461},{t:this.shape_352,p:{x:726.825,y:420.975}},{t:this.shape_460},{t:this.shape_250,p:{x:752.8,y:419.725}},{t:this.shape_459},{t:this.shape_458,p:{x:776,y:420.975}},{t:this.shape_457},{t:this.shape_345,p:{x:803.775,y:420.975}},{t:this.shape_346,p:{x:814.275,y:420.975}},{t:this.shape_300,p:{x:827.325,y:420.875}},{t:this.shape_456},{t:this.shape_188,p:{x:858.7,y:420.975}},{t:this.shape_455,p:{x:876.825,y:421.075}},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_335,p:{x:928.825,y:418.475}},{t:this.shape_451,p:{x:938.325,y:420.975}},{t:this.shape_450,p:{x:950.025,y:420.875}},{t:this.shape_449,p:{x:964.4,y:420.975}},{t:this.shape_448},{t:this.shape_447,p:{x:986.9,y:420.975}},{t:this.shape_185,p:{x:998.4,y:420.975}},{t:this.shape_354,p:{x:1009.525,y:420.875}},{t:this.shape_341,p:{x:1018.725,y:420.975}},{t:this.shape_226,p:{x:1027.825,y:418.55}},{t:this.shape_337,p:{x:360.675,y:452.675}},{t:this.shape_446,p:{x:370.4,y:452.775}},{t:this.shape_334,p:{x:381.975,y:452.775}},{t:this.shape_251,p:{x:393.55,y:452.775}},{t:this.shape_445,p:{x:405.125,y:452.775}},{t:this.shape_284,p:{x:418.275,y:452.675}},{t:this.shape_333,p:{x:430,y:452.775}},{t:this.shape_444,p:{x:437.975,y:452.775}},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_330,p:{x:438.125,y:516.375}},{t:this.shape_318,p:{x:448.625,y:516.375}},{t:this.shape_277,p:{x:461.675,y:516.275}},{t:this.shape_285,p:{x:476.55,y:514.225}},{t:this.shape_276,p:{x:485.925,y:516.275}},{t:this.shape_437},{t:this.shape_275,p:{x:508.4,y:514.225}},{t:this.shape_326,p:{x:516.475,y:516.375}},{t:this.shape_316,p:{x:526.975,y:516.375}},{t:this.shape_436,p:{x:537.1,y:515.125}},{t:this.shape_211,p:{x:547.1,y:516.375}},{t:this.shape_435},{t:this.shape_434},{t:this.shape_309,p:{x:594.225,y:516.375}},{t:this.shape_247,p:{x:604.35,y:515.125}},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431,p:{x:640.75,y:516.375}},{t:this.shape_269,p:{x:659.25,y:518.875}},{t:this.shape_244,p:{x:668.25,y:514.225}},{t:this.shape_430},{t:this.shape_312,p:{x:688.375,y:516.375}},{t:this.shape_429,p:{x:699.35,y:516.375}},{t:this.shape_428,p:{x:717.425,y:516.375}},{t:this.shape_328,p:{x:728.175,y:513.875}},{t:this.shape_254,p:{x:742.125,y:516.375}},{t:this.shape_427,p:{x:753.525,y:516.375}},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423,p:{x:810.625,y:516.375}},{t:this.shape_422},{t:this.shape_421,p:{x:834.35,y:516.375}},{t:this.shape_420},{t:this.shape_262,p:{x:370.675,y:552.825}},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417,p:{x:410.35,y:548.175}},{t:this.shape_324,p:{x:421.725,y:550.775}},{t:this.shape_243,p:{x:438.125,y:548.175}},{t:this.shape_297,p:{x:448.625,y:548.175}},{t:this.shape_274,p:{x:461.675,y:548.075}},{t:this.shape_332,p:{x:480.75,y:550.675}},{t:this.shape_289,p:{x:492.175,y:548.075}},{t:this.shape_344,p:{x:502.275,y:548.175}},{t:this.shape_416,p:{x:514.15,y:548.175}},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_260,p:{x:567.975,y:548.075}},{t:this.shape_320,p:{x:578.775,y:545.675}},{t:this.shape_336,p:{x:588.325,y:548.175}},{t:this.shape_286,p:{x:599.975,y:548.075}},{t:this.shape_411},{t:this.shape_293,p:{x:629.225,y:548.175}},{t:this.shape_317,p:{x:639.35,y:546.925}},{t:this.shape_173,p:{x:645.95,y:546.025}},{t:this.shape_321,p:{x:655.225,y:548.175}},{t:this.shape_252,p:{x:668.375,y:548.075}},{t:this.shape_270,p:{x:686.125,y:548.175}},{t:this.shape_410},{t:this.shape_303,p:{x:712.225,y:548.175}},{t:this.shape_409,p:{x:725.275,y:548.275}},{t:this.shape_219,p:{x:735.65,y:546.925}},{t:this.shape_408},{t:this.shape_407,p:{x:764.875,y:548.275}},{t:this.shape_406},{t:this.shape_271,p:{x:793.175,y:545.675}},{t:this.shape_405,p:{x:798.9,y:546.025}},{t:this.shape_404},{t:this.shape_403},{t:this.shape_220,p:{x:830.15,y:548.175}},{t:this.shape_402},{t:this.shape_169,p:{x:370.675,y:584.625}},{t:this.shape_401,p:{x:385.075,y:578.05}},{t:this.shape_400},{t:this.shape_399,p:{x:410.35,y:579.975}},{t:this.shape_200,p:{x:421.725,y:582.575}},{t:this.shape_264,p:{x:438.375,y:579.975}},{t:this.shape_279,p:{x:449.925,y:579.875}},{t:this.shape_322,p:{x:459.6,y:579.975}},{t:this.shape_287,p:{x:477.725,y:580.075}},{t:this.shape_398,p:{x:489.55,y:579.975}},{t:this.shape_222,p:{x:500.7,y:579.975}},{t:this.shape_239,p:{x:510.925,y:577.475}},{t:this.shape_278,p:{x:520.475,y:580.075}},{t:this.shape_209,p:{x:529.825,y:577.55}},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395,p:{x:574.25,y:579.975}},{t:this.shape_248,p:{x:586.875,y:579.875}},{t:this.shape_394},{t:this.shape_294,p:{x:622.325,y:579.975}},{t:this.shape_268,p:{x:633.975,y:579.875}},{t:this.shape_393,p:{x:644.075,y:577.55}},{t:this.shape_238,p:{x:651.6,y:577.825}},{t:this.shape_224,p:{x:660.975,y:579.875}},{t:this.shape_266,p:{x:673.35,y:582.475}},{t:this.shape_327,p:{x:687.65,y:577.825}},{t:this.shape_194,p:{x:697.075,y:579.875}},{t:this.shape_255,p:{x:714.775,y:579.975}},{t:this.shape_392},{t:this.shape_391,p:{x:740.45,y:579.975}},{t:this.shape_249,p:{x:752.025,y:579.975}},{t:this.shape_390},{t:this.shape_233,p:{x:789.675,y:579.975}},{t:this.shape_190,p:{x:802.725,y:579.875}},{t:this.shape_389},{t:this.shape_272,p:{x:834.525,y:579.975}},{t:this.shape_388,p:{x:844.8,y:578.725}},{t:this.shape_387},{t:this.shape_386},{t:this.shape_265,p:{x:879.075,y:579.875}},{t:this.shape_213,p:{x:892,y:578.725}},{t:this.shape_385,p:{x:902,y:579.975}},{t:this.shape_231,p:{x:913.575,y:579.975}},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_192,p:{x:1017,y:579.975}},{t:this.shape_230,p:{x:1028.125,y:579.875}},{t:this.shape_379},{t:this.shape_180,p:{x:384.525,y:611.675}},{t:this.shape_236,p:{x:397.15,y:611.775}},{t:this.shape_225,p:{x:409.2,y:611.775}},{t:this.shape_378},{t:this.shape_174,p:{x:437.7,y:610.525}},{t:this.shape_267,p:{x:448.075,y:611.775}},{t:this.shape_377},{t:this.shape_177,p:{x:478.125,y:611.675}},{t:this.shape_253,p:{x:491.175,y:611.775}},{t:this.shape_376,p:{x:506.05,y:611.775}},{t:this.shape_375,p:{x:528.45,y:611.775}},{t:this.shape_374},{t:this.shape_228,p:{x:555.675,y:611.775}},{t:this.shape_373,p:{x:565.8,y:610.525}},{t:this.shape_216,p:{x:580.875,y:611.775}},{t:this.shape_372},{t:this.shape_195,p:{x:611.625,y:611.775}},{t:this.shape_187,p:{x:623.175,y:611.675}},{t:this.shape_199,p:{x:630.55,y:610.525}},{t:this.shape_329,p:{x:637.15,y:609.625}},{t:this.shape_197,p:{x:645.225,y:611.775}},{t:this.shape_191,p:{x:656.675,y:611.875}},{t:this.shape_203,p:{x:666.025,y:609.35}},{t:this.shape_182,p:{x:674.425,y:611.775}},{t:this.shape_184,p:{x:685.975,y:611.675}},{t:this.shape_371},{t:this.shape_370,p:{x:711.5,y:611.775}},{t:this.shape_186,p:{x:722.825,y:611.775}},{t:this.shape_369,p:{x:731.45,y:610.525}},{t:this.shape_204,p:{x:738.05,y:609.625}},{t:this.shape_218,p:{x:747.325,y:611.775}},{t:this.shape_171,p:{x:760.475,y:611.675}},{t:this.shape_198,p:{x:779.125,y:611.775}},{t:this.shape_210,p:{x:789.875,y:609.275}},{t:this.shape_179,p:{x:803.825,y:611.775}},{t:this.shape_178,p:{x:815.225,y:611.775}},{t:this.shape_368,p:{x:828,y:609.45}},{t:this.shape_223,p:{x:841,y:611.775}},{t:this.shape_367},{t:this.shape_172,p:{x:872.275,y:611.775}},{t:this.shape_338,p:{x:884.9,y:611.775}},{t:this.shape_170,p:{x:896.05,y:611.775}}]},1).to({state:[{t:this.shape_490,p:{y:517.575}},{t:this.shape_489,p:{y:519.875}},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511,p:{y:519.875}},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508,p:{x:470.125,y:516.975}},{t:this.shape_507,p:{y:519.875}},{t:this.shape_506,p:{y:519.875}},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_360,p:{x:668.125,y:516.975}},{t:this.shape_483,p:{y:584.325}},{t:this.shape_253,p:{x:375.675,y:586.275}},{t:this.shape_194,p:{x:388.825,y:586.175}},{t:this.shape_494},{t:this.shape_238,p:{x:411.3,y:584.125}},{t:this.shape_295,p:{x:417.75,y:585.025}},{t:this.shape_181,p:{x:424.4,y:584.125}},{t:this.shape_218,p:{x:433.625,y:586.275}},{t:this.shape_190,p:{x:446.775,y:586.175}},{t:this.shape_195,p:{x:458.925,y:586.275}},{t:this.shape_203,p:{x:468.025,y:583.85}},{t:this.shape_206,p:{x:479.1,y:584.125}},{t:this.shape_180,p:{x:488.475,y:586.175}},{t:this.shape_282,p:{x:498.75,y:585.025}},{t:this.shape_187,p:{x:507.825,y:586.175}},{t:this.shape_198,p:{x:517.925,y:586.275}},{t:this.shape_493},{t:this.shape_191,p:{x:544.175,y:586.375}},{t:this.shape_179,p:{x:556.175,y:586.275}},{t:this.shape_199,p:{x:564.85,y:585.025}},{t:this.shape_329,p:{x:571.45,y:584.125}},{t:this.shape_178,p:{x:580.675,y:586.275}},{t:this.shape_177,p:{x:593.875,y:586.175}},{t:this.shape_182,p:{x:611.575,y:586.275}},{t:this.shape_171,p:{x:624.625,y:586.175}},{t:this.shape_492},{t:this.shape_172,p:{x:656.475,y:586.275}},{t:this.shape_491,p:{x:668.35,y:586.275}},{t:this.shape_211,p:{x:679.85,y:586.275}},{t:this.shape_184,p:{x:690.975,y:586.175}},{t:this.shape_416,p:{x:700,y:586.275}},{t:this.shape_462,p:{x:708.15,y:584.125}},{t:this.shape_188,p:{x:716.95,y:586.275}},{t:this.shape_315,p:{x:731.3,y:586.275}}]},1).to({state:[{t:this.shape_490,p:{y:258.225}},{t:this.shape_489,p:{y:260.525}},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_511,p:{y:260.525}},{t:this.shape_508,p:{x:446.425,y:257.625}},{t:this.shape_535},{t:this.shape_360,p:{x:470.125,y:257.625}},{t:this.shape_507,p:{y:260.525}},{t:this.shape_506,p:{y:260.525}},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_359,p:{x:629.475,y:260.525}},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_174,p:{x:365.25,y:325.675}},{t:this.shape_399,p:{x:375.25,y:326.925}},{t:this.shape_230,p:{x:386.375,y:326.825}},{t:this.shape_195,p:{x:395.575,y:326.925}},{t:this.shape_477,p:{x:405.7,y:325.675}},{t:this.shape_518,p:{x:412.35,y:324.775}},{t:this.shape_218,p:{x:421.575,y:326.925}},{t:this.shape_190,p:{x:434.725,y:326.825}},{t:this.shape_204,p:{x:449.6,y:324.775}},{t:this.shape_180,p:{x:458.975,y:326.825}},{t:this.shape_317,p:{x:469.25,y:325.675}},{t:this.shape_187,p:{x:478.275,y:326.825}},{t:this.shape_198,p:{x:488.425,y:326.925}},{t:this.shape_517},{t:this.shape_191,p:{x:514.675,y:327.025}},{t:this.shape_179,p:{x:526.675,y:326.925}},{t:this.shape_219,p:{x:535.3,y:325.675}},{t:this.shape_405,p:{x:541.95,y:324.775}},{t:this.shape_178,p:{x:551.175,y:326.925}},{t:this.shape_177,p:{x:564.325,y:326.825}},{t:this.shape_182,p:{x:582.075,y:326.925}},{t:this.shape_171,p:{x:595.125,y:326.825}},{t:this.shape_368,p:{x:607.95,y:324.6}},{t:this.shape_172,p:{x:626.925,y:326.925}},{t:this.shape_215,p:{x:638.85,y:326.925}},{t:this.shape_516},{t:this.shape_184,p:{x:661.475,y:326.825}},{t:this.shape_447,p:{x:670.45,y:326.925}},{t:this.shape_238,p:{x:678.6,y:324.775}},{t:this.shape_515},{t:this.shape_376,p:{x:701.8,y:326.925}}]},1).to({state:[{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601,p:{y:435.2}},{t:this.shape_470,p:{x:373.175,y:437.225}},{t:this.shape_339,p:{x:386.475,y:437.025}},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_300,p:{x:436.075,y:437.025}},{t:this.shape_449,p:{x:447.8,y:437.125}},{t:this.shape_334,p:{x:464.025,y:437.125}},{t:this.shape_596},{t:this.shape_468,p:{x:485.3,y:437.125}},{t:this.shape_318,p:{x:502.425,y:437.125}},{t:this.shape_595},{t:this.shape_458,p:{x:530.75,y:437.125}},{t:this.shape_296,p:{x:539.425,y:434.7}},{t:this.shape_391,p:{x:548.3,y:437.125}},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_466,p:{x:617.875,y:437.225}},{t:this.shape_589},{t:this.shape_588,p:{x:640.45,y:434.975}},{t:this.shape_284,p:{x:649.825,y:437.025}},{t:this.shape_587},{t:this.shape_586},{t:this.shape_328,p:{x:691.075,y:434.625}},{t:this.shape_585},{t:this.shape_277,p:{x:711.775,y:437.025}},{t:this.shape_584},{t:this.shape_329,p:{x:734.25,y:434.975}},{t:this.shape_215,p:{x:742.35,y:437.125}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_455,p:{x:772.975,y:437.225}},{t:this.shape_316,p:{x:785.225,y:437.125}},{t:this.shape_292,p:{x:794.325,y:434.7}},{t:this.shape_353,p:{x:805.4,y:434.975}},{t:this.shape_276,p:{x:814.775,y:437.025}},{t:this.shape_581},{t:this.shape_247,p:{x:835.3,y:435.875}},{t:this.shape_475,p:{x:844.375,y:437.025}},{t:this.shape_409,p:{x:854.525,y:437.225}},{t:this.shape_580},{t:this.shape_579},{t:this.shape_348,p:{x:881.75,y:434.975}},{t:this.shape_578},{t:this.shape_274,p:{x:904.175,y:437.025}},{t:this.shape_577},{t:this.shape_388,p:{x:930.3,y:435.875}},{t:this.shape_576},{t:this.shape_309,p:{x:952.975,y:437.125}},{t:this.shape_213,p:{x:963.1,y:435.875}},{t:this.shape_297,p:{x:978.175,y:437.125}},{t:this.shape_472,p:{x:989.725,y:437.025}},{t:this.shape_417,p:{x:999.4,y:437.125}},{t:this.shape_575},{t:this.shape_293,p:{x:374.325,y:468.925}},{t:this.shape_574},{t:this.shape_257,p:{x:397.475,y:466.5}},{t:this.shape_270,p:{x:407.875,y:468.925}},{t:this.shape_573},{t:this.shape_385,p:{x:432.2,y:468.925}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_446,p:{x:495.5,y:468.925}},{t:this.shape_568},{t:this.shape_306,p:{x:515.725,y:466.5}},{t:this.shape_429,p:{x:528.35,y:468.925}},{t:this.shape_450,p:{x:539.475,y:468.825}},{t:this.shape_567},{t:this.shape_482,p:{x:562.825,y:468.925}},{t:this.shape_264,p:{x:580.525,y:468.925}},{t:this.shape_465,p:{x:592.275,y:468.925}},{t:this.shape_245,p:{x:603.825,y:466.5}},{t:this.shape_340,p:{x:613.1,y:466.775}},{t:this.shape_566},{t:this.shape_491,p:{x:633.25,y:468.925}},{t:this.shape_565},{t:this.shape_255,p:{x:661.925,y:468.925}},{t:this.shape_421,p:{x:679.1,y:468.925}},{t:this.shape_564},{t:this.shape_301,p:{x:703.45,y:468.925}},{t:this.shape_345,p:{x:714.775,y:468.925}},{t:this.shape_518,p:{x:722.4,y:466.775}},{t:this.shape_320,p:{x:729.375,y:466.425}},{t:this.shape_563},{t:this.shape_330,p:{x:743.225,y:468.925}},{t:this.shape_464,p:{x:760.225,y:468.925}},{t:this.shape_407,p:{x:773.275,y:469.025}},{t:this.shape_562},{t:this.shape_326,p:{x:792.875,y:468.925}},{t:this.shape_451,p:{x:804.325,y:468.925}},{t:this.shape_561},{t:this.shape_399,p:{x:836.95,y:468.925}},{t:this.shape_560},{t:this.shape_445,p:{x:860.275,y:468.925}},{t:this.shape_354,p:{x:871.975,y:468.825}},{t:this.shape_559},{t:this.shape_271,p:{x:892.975,y:466.425}},{t:this.shape_287,p:{x:902.525,y:469.025}},{t:this.shape_260,p:{x:915.825,y:468.825}},{t:this.shape_312,p:{x:927.725,y:468.925}},{t:this.shape_477,p:{x:936.35,y:467.675}},{t:this.shape_241,p:{x:942.95,y:466.775}},{t:this.shape_428,p:{x:952.225,y:468.925}},{t:this.shape_252,p:{x:965.375,y:468.825}},{t:this.shape_558},{t:this.shape_262,p:{x:982.325,y:473.575}},{t:this.shape_401,p:{x:361.475,y:530.6}},{t:this.shape_557},{t:this.shape_338,p:{x:386.75,y:532.525}},{t:this.shape_200,p:{x:398.125,y:535.125}},{t:this.shape_427,p:{x:415.675,y:532.525}},{t:this.shape_239,p:{x:426.475,y:530.025}},{t:this.shape_325,p:{x:433.2,y:531.275}},{t:this.shape_556},{t:this.shape_248,p:{x:455.775,y:532.425}},{t:this.shape_555},{t:this.shape_423,p:{x:491.225,y:532.525}},{t:this.shape_337,p:{x:502.875,y:532.425}},{t:this.shape_393,p:{x:512.975,y:530.1}},{t:this.shape_282,p:{x:527.1,y:531.275}},{t:this.shape_344,p:{x:537.475,y:532.525}},{t:this.shape_249,p:{x:555.175,y:532.525}},{t:this.shape_447,p:{x:566.95,y:532.525}},{t:this.shape_336,p:{x:578.875,y:532.525}},{t:this.shape_285,p:{x:588.15,y:530.375}},{t:this.shape_554,p:{x:597.15,y:530.2}},{t:this.shape_289,p:{x:614.775,y:532.425}},{t:this.shape_553},{t:this.shape_552},{t:this.shape_431,p:{x:649.75,y:532.525}},{t:this.shape_369,p:{x:659.45,y:531.275}},{t:this.shape_327,p:{x:666.05,y:530.375}},{t:this.shape_317,p:{x:672.55,y:531.275}},{t:this.shape_313,p:{x:679.15,y:530.375}},{t:this.shape_321,p:{x:688.375,y:532.525}},{t:this.shape_224,p:{x:701.575,y:532.425}},{t:this.shape_376,p:{x:722.05,y:532.525}},{t:this.shape_405,p:{x:733.2,y:530.375}},{t:this.shape_201,p:{x:739.65,y:531.275}},{t:this.shape_551},{t:this.shape_275,p:{x:759.5,y:530.375}},{t:this.shape_194,p:{x:768.875,y:532.425}},{t:this.shape_259,p:{x:783.725,y:530.1}},{t:this.shape_244,p:{x:789.2,y:530.375}},{t:this.shape_190,p:{x:798.575,y:532.425}},{t:this.shape_349,p:{x:811.2,y:532.525}},{t:this.shape_550},{t:this.shape_303,p:{x:839.525,y:532.525}},{t:this.shape_210,p:{x:850.275,y:530.025}},{t:this.shape_254,p:{x:864.225,y:532.525}},{t:this.shape_294,p:{x:875.625,y:532.525}},{t:this.shape_549},{t:this.shape_256,p:{x:901.45,y:532.525}},{t:this.shape_233,p:{x:918.625,y:532.525}},{t:this.shape_226,p:{x:927.725,y:530.1}},{t:this.shape_209,p:{x:933.175,y:530.1}},{t:this.shape_272,p:{x:942.425,y:532.525}},{t:this.shape_375,p:{x:957.3,y:532.525}},{t:this.shape_204,p:{x:968.45,y:530.375}},{t:this.shape_180,p:{x:977.875,y:532.425}},{t:this.shape_548},{t:this.shape_436,p:{x:1005.55,y:531.275}},{t:this.shape_547},{t:this.shape_546},{t:this.shape_243,p:{x:360.875,y:564.325}},{t:this.shape_267,p:{x:372.325,y:564.325}},{t:this.shape_545},{t:this.shape_185,p:{x:398.1,y:564.325}},{t:this.shape_286,p:{x:409.225,y:564.225}},{t:this.shape_299,p:{x:422.15,y:563.075}},{t:this.shape_253,p:{x:432.525,y:564.325}},{t:this.shape_231,p:{x:450.225,y:564.325}},{t:this.shape_544},{t:this.shape_543},{t:this.shape_308,p:{x:493.8,y:564.325}},{t:this.shape_242,p:{x:505.525,y:561.9}},{t:this.shape_218,p:{x:518.575,y:564.325}},{t:this.shape_279,p:{x:530.275,y:564.225}},{t:this.shape_183,p:{x:537.6,y:563.075}},{t:this.shape_197,p:{x:546.825,y:564.325}},{t:this.shape_278,p:{x:558.275,y:564.425}},{t:this.shape_174,p:{x:568.65,y:563.075}},{t:this.shape_398,p:{x:577.75,y:564.325}},{t:this.shape_462,p:{x:591.15,y:562.175}},{t:this.shape_177,p:{x:600.525,y:564.225}},{t:this.shape_373,p:{x:610.8,y:563.075}},{t:this.shape_198,p:{x:621.175,y:564.325}},{t:this.shape_219,p:{x:637,y:563.075}},{t:this.shape_217,p:{x:647.575,y:561.9}},{t:this.shape_395,p:{x:660.2,y:564.325}},{t:this.shape_173,p:{x:668.9,y:562.175}},{t:this.shape_268,p:{x:676.775,y:564.225}},{t:this.shape_186,p:{x:691.325,y:564.325}},{t:this.shape_178,p:{x:702.725,y:564.325}},{t:this.shape_542},{t:this.shape_223,p:{x:728.5,y:564.325}},{t:this.shape_250,p:{x:743.8,y:563.075}},{t:this.shape_172,p:{x:754.225,y:564.325}},{t:this.shape_228,p:{x:771.925,y:564.325}},{t:this.shape_179,p:{x:783.675,y:564.325}},{t:this.shape_212,p:{x:795.225,y:561.9}},{t:this.shape_238,p:{x:804.5,y:562.175}},{t:this.shape_225,p:{x:813.3,y:564.325}},{t:this.shape_416,p:{x:824.65,y:564.325}},{t:this.shape_370,p:{x:836.15,y:564.325}},{t:this.shape_216,p:{x:853.325,y:564.325}},{t:this.shape_332,p:{x:872.25,y:566.825}},{t:this.shape_265,p:{x:883.675,y:564.225}},{t:this.shape_214,p:{x:893.35,y:564.325}},{t:this.shape_541},{t:this.shape_195,p:{x:911.825,y:564.325}},{t:this.shape_230,p:{x:923.375,y:564.225}},{t:this.shape_187,p:{x:932.125,y:564.225}},{t:this.shape_182,p:{x:941.325,y:564.325}},{t:this.shape_171,p:{x:954.375,y:564.225}},{t:this.shape_540},{t:this.shape_208,p:{x:978.85,y:564.325}},{t:this.shape_319,p:{x:991.1,y:562}},{t:this.shape_184,p:{x:1008.775,y:564.225}},{t:this.shape_188,p:{x:1018.45,y:564.325}},{t:this.shape_539},{t:this.shape_191,p:{x:1041.225,y:564.425}},{t:this.shape_203,p:{x:1050.575,y:561.9}},{t:this.shape_199,p:{x:1057.05,y:563.075}},{t:this.shape_169,p:{x:1063.825,y:568.975}}]},1).to({state:[{t:this.shape_483,p:{y:574.975}},{t:this.shape_294,p:{x:375.675,y:576.925}},{t:this.shape_252,p:{x:388.825,y:576.825}},{t:this.shape_616},{t:this.shape_230,p:{x:408.175,y:576.825}},{t:this.shape_272,p:{x:418.275,y:576.925}},{t:this.shape_296,p:{x:427.475,y:574.5}},{t:this.shape_210,p:{x:440.075,y:574.425}},{t:this.shape_292,p:{x:445.775,y:574.5}},{t:this.shape_267,p:{x:455.025,y:576.925}},{t:this.shape_375,p:{x:469.95,y:576.925}},{t:this.shape_444,p:{x:481.225,y:576.925}},{t:this.shape_615},{t:this.shape_287,p:{x:507.275,y:577.025}},{t:this.shape_248,p:{x:520.575,y:576.825}},{t:this.shape_254,p:{x:532.475,y:576.925}},{t:this.shape_436,p:{x:541.15,y:575.675}},{t:this.shape_588,p:{x:547.75,y:574.775}},{t:this.shape_253,p:{x:556.975,y:576.925}},{t:this.shape_224,p:{x:570.175,y:576.825}},{t:this.shape_243,p:{x:587.625,y:576.925}},{t:this.shape_216,p:{x:598.125,y:576.925}},{t:this.shape_259,p:{x:607.225,y:574.5}},{t:this.shape_226,p:{x:612.725,y:574.5}},{t:this.shape_601,p:{y:638.6}},{t:this.shape_278,p:{x:373.175,y:640.625}},{t:this.shape_194,p:{x:386.475,y:640.425}},{t:this.shape_197,p:{x:398.375,y:640.525}},{t:this.shape_219,p:{x:407.05,y:639.275}},{t:this.shape_313,p:{x:413.65,y:638.375}},{t:this.shape_218,p:{x:422.875,y:640.525}},{t:this.shape_190,p:{x:436.075,y:640.425}},{t:this.shape_186,p:{x:453.525,y:640.525}},{t:this.shape_195,p:{x:464.025,y:640.525}},{t:this.shape_209,p:{x:473.125,y:638.1}},{t:this.shape_203,p:{x:478.625,y:638.1}},{t:this.shape_181,p:{x:489.65,y:638.375}},{t:this.shape_180,p:{x:499.075,y:640.425}},{t:this.shape_614},{t:this.shape_187,p:{x:518.375,y:640.425}},{t:this.shape_198,p:{x:528.475,y:640.525}},{t:this.shape_613},{t:this.shape_191,p:{x:554.775,y:640.625}},{t:this.shape_179,p:{x:566.775,y:640.525}},{t:this.shape_174,p:{x:575.4,y:639.275}},{t:this.shape_175,p:{x:582,y:638.375}},{t:this.shape_178,p:{x:591.225,y:640.525}},{t:this.shape_177,p:{x:604.425,y:640.425}},{t:this.shape_182,p:{x:622.125,y:640.525}},{t:this.shape_171,p:{x:635.175,y:640.425}},{t:this.shape_554,p:{x:648,y:638.2}},{t:this.shape_172,p:{x:667.025,y:640.525}},{t:this.shape_612},{t:this.shape_188,p:{x:690.4,y:640.525}},{t:this.shape_184,p:{x:701.575,y:640.425}},{t:this.shape_611},{t:this.shape_204,p:{x:718.7,y:638.375}},{t:this.shape_185,p:{x:727.5,y:640.525}},{t:this.shape_610}]},1).wait(1));

	// text_bg
	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#1A1A1A").s().p("A0lCfIAAk9MApLAAAIAAE9g");
	this.shape_617.setTransform(742.6621,562.1772,3.0718,19.994);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#1A1A1A").s().p("Eg/FAVuMAAAgrbMB+LAAAMAAAArbg");
	this.shape_618.setTransform(741.7,172.6395,1,0.5252);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#1A1A1A").s().p("Eg/FAVuMAAAgrbMB+LAAAMAAAArbg");
	this.shape_619.setTransform(741.7,587.4451,1,2.0419);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#1A1A1A").s().p("Eg/AAVuMAAAgrbMB+BAAAMAAAArbg");
	this.shape_620.setTransform(741.25,202.5844,1,0.7244);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#1A1A1A").s().p("Eg/AAVuMAAAgrbMB+BAAAMAAAArbg");
	this.shape_621.setTransform(741.25,691.5356,1,1.3399);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#1A1A1A").s().p("A0lCfIAAk9MApLAAAIAAE9g");
	this.shape_622.setTransform(741.2341,301.5574,3.0605,12.0898);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_617,p:{scaleX:3.0718,scaleY:19.994,x:742.6621,y:562.1772}}]},1).to({state:[{t:this.shape_619},{t:this.shape_618}]},1).to({state:[{t:this.shape_621},{t:this.shape_620}]},1).to({state:[{t:this.shape_622,p:{scaleX:3.0605,scaleY:12.0898,x:741.2341,y:301.5574}},{t:this.shape_617,p:{scaleX:3.0605,scaleY:7.4854,x:741.2341,y:754.5649}}]},1).to({state:[{t:this.shape_622,p:{scaleX:3.0604,scaleY:15.7129,x:741.2283,y:350.6494}},{t:this.shape_617,p:{scaleX:3.0162,scaleY:3.2497,x:740.2128,y:830.0083}}]},1).to({state:[{t:this.shape_617,p:{scaleX:3.0535,scaleY:20.2275,x:740.3034,y:422.9425}}]},1).wait(1));

	// ai_js_code
	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#059245").s().p("AAYBMQgWAAgIgJQgJgJAAgVIAAg/IgfAAIAAgPIAfAAIAAgiIASAAIAAAiIAsAAIAAAPIgsAAIAAA/QAAANAFAFQAFAFANAAIAVAAIAAAQg");
	this.shape_623.setTransform(893.3,273.825);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#059245").s().p("AgvBTIAAiiIATAAIAAAPQAFgJAIgFQAIgEAJAAQAWAAAMARQAMAQAAAeQAAAbgMARQgMAQgWAAQgJAAgIgFQgIgEgFgJIAAA8gAgUg2QgIALAAAXQAAAWAIALQAGAMAOAAQAOAAAHgMQAHgLAAgWQAAgXgHgLQgHgMgOABQgOgBgGAMg");
	this.shape_624.setTransform(881.05,277.6);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#059245").s().p("AgvBSIAAgPIAmAAIAAhXIgeAAIAAgPIAxAAIAABmIAmAAIAAAPgAgJg4IAAgZIATAAIAAAZg");
	this.shape_625.setTransform(868.575,273.225);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#059245").s().p("AgpA9IAAh1IATAAIAAAWQAGgMAJgHQAKgHAOAAQAGAAAHACQAGACAGAEIAAATQgGgEgHgDQgGgCgIAAQgRAAgJAMQgLALAAAVIAAA7g");
	this.shape_626.setTransform(856.3,275.35);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#059245").s().p("AgdAuQgQgRAAgdQAAgcAQgQQAPgRAbAAQAIAAAIACQAIADAJAEIAAAUQgIgHgIgCQgIgDgJAAQgSAAgJAMQgKALAAAVQAAAWAKAMQAJAMASAAQAKAAAIgEQAIgDAHgGIAAAUQgIAEgIADQgJACgIAAQgbAAgPgQg");
	this.shape_627.setTransform(841.925,275.5);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#059245").s().p("AgZBPQgLgCgMgFIAAgWQANAHAKAEQALAEALAAQAPAAAJgIQAJgHAAgNQAAgMgGgGQgGgGgPgEIgLgCQgWgFgKgJQgKgKAAgRQAAgVAPgNQAOgNAWAAQAJAAAKADQAKACALAEIAAAVQgJgGgKgDQgKgDgKAAQgOAAgIAHQgJAHAAAMQAAAKAGAGQAFAFAQAEIAKACQAWAFAKALQALALAAATQAAAWgOAMQgOAMgaAAQgLAAgLgDg");
	this.shape_628.setTransform(828.875,273.525);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#059245").s().p("AglA0QgLgKAAgSQAAgTAOgKQANgKAYABIAaAAIAAgDQAAgPgHgGQgHgHgPABQgJAAgKADQgKACgKAGIAAgTQALgFAKgCQAJgCAJAAQAOAAALAEQAKAFAHAJQAEAFABAHQACAIAAAQIAABCIgUAAIAAgSQgGALgJAFQgKAFgMAAQgSAAgLgKgAgUAFQgIAHAAALQAAALAGAGQAHAGALAAQAPAAAJgMQAJgKAAgUIAAgEIgSAAIgGAAQgQAAgJAFg");
	this.shape_629.setTransform(815.675,275.5);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#059245").s().p("AgLA7Igrh1IAUAAIAiBiIAihiIAUAAIgpB1g");
	this.shape_630.setTransform(802.95,275.5);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#059245").s().p("AglA0QgLgKAAgSQAAgTAOgKQANgKAYABIAaAAIAAgDQAAgPgHgGQgHgHgPABQgJAAgKADQgKACgKAGIAAgTQALgFAKgCQAJgCAJAAQAOAAALAEQAKAFAHAJQAEAFABAHQACAIAAAQIAABCIgUAAIAAgSQgGALgJAFQgKAFgMAAQgSAAgLgKgAgUAFQgIAHAAALQAAALAGAGQAHAGALAAQAPAAAJgMQAJgKAAgUIAAgEIgSAAIgGAAQgQAAgJAFg");
	this.shape_631.setTransform(789.775,275.5);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#059245").s().p("AgXBOQgKgCgLgFIAAgZQAKAIAKAFQAKAEALAAQAOAAAGgIQAGgIAAgVIAAhXIgnAAIAAgSIA9AAIAABpQAAAegMAMQgLAMgZAAQgKAAgKgCg");
	this.shape_632.setTransform(776.125,273.675);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#059245").s().p("AgNBSIAAhmIggAAIAAgPIAgAAIAAgJQAAgSAJgKQAIgJATAAIAXAAIAAAQIgWAAQgLAAgEAEQgEAFAAALIAAAKIApAAIAAAPIgpAAIAABmg");
	this.shape_633.setTransform(751.225,273.2);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#059245").s().p("AglAuQgMgQAAgeQAAgdAMgQQAOgQAXAAQAYAAANAQQANAQABAdQgBAegNAQQgNAQgYAAQgXAAgOgQgAgVghQgIALAAAWQAAAXAIALQAHAMAOAAQAPAAAIgMQAHgLAAgXQAAgWgHgLQgIgMgPABQgOgBgHAMg");
	this.shape_634.setTransform(738.15,275.5);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#059245").s().p("AgkAuQgPgRAAgdQAAgbAOgRQAQgRAYAAQAXAAANAPQANAQAAAVIAAAJIhSAAIAAABQgBAXAKALQAKALARAAQAJAAAKgEQAKgCAMgHIAAAUQgLAEgKADQgLACgJAAQgbAAgPgQgAAhgOQgBgNgIgIQgHgJgOAAQgOgBgJAKQgJAJAAAMIA+AAIAAAAg");
	this.shape_635.setTransform(712.25,275.5);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#059245").s().p("AAWBSQgSAAgIgLQgKgLAAgUIAAhqIgfAAIAAgPIAyAAIAAB5QgBANAFAGQAFAHAKAAIAWAAIAAAQg");
	this.shape_636.setTransform(699.9,273.175);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#059245").s().p("AgvBTIAAiiIATAAIAAAPQAFgJAIgFQAIgEAJAAQAWAAAMARQAMAQAAAeQAAAbgMARQgMAQgWAAQgJAAgIgFQgIgEgFgJIAAA8gAgUg2QgIALAAAXQAAAWAIALQAGAMAOAAQAOAAAHgMQAHgLAAgWQAAgXgHgLQgHgMgOABQgOgBgGAMg");
	this.shape_637.setTransform(686.65,277.6);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#059245").s().p("AAlA9IAAhDQAAgZgEgGQgCgGgIAAQgIAAgDAHQgDAFAAAZIAABDIgRAAIAAhDQAAgagDgFQgDgGgIAAQgHAAgEAHQgCAFAAAZIAABDIgSAAIAAh1IASAAIAAAKQADgHAGgDQAFgDAGgBQAIABAFADQAFAEADAIQADgIAGgEQAFgDAJgBQAOABAFAKQAGALAAAfIAABEg");
	this.shape_638.setTransform(673.4,275.35);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#059245").s().p("AglA0QgLgKAAgSQAAgTAOgKQANgKAYABIAaAAIAAgDQAAgPgHgGQgHgHgPABQgJAAgKADQgKACgKAGIAAgTQALgFAKgCQAJgCAJAAQAOAAALAEQAKAFAHAJQAEAFABAHQACAIAAAQIAABCIgUAAIAAgSQgGALgJAFQgKAFgMAAQgSAAgLgKgAgUAFQgIAHAAALQAAALAGAGQAHAGALAAQAPAAAJgMQAJgKAAgUIAAgEIgSAAIgGAAQgQAAgJAFg");
	this.shape_639.setTransform(660.175,275.5);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#059245").s().p("AAjA7IgjgvIghAvIgXAAIAvg9Igrg4IAVAAIAfArIAfgrIAWAAIgqA4IAuA9g");
	this.shape_640.setTransform(647.4,275.5);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#059245").s().p("AgkAuQgPgRAAgdQAAgbAOgRQAQgRAYAAQAWAAAOAPQANAQAAAVIAAAJIhTAAIAAABQAAAXAKALQAKALARAAQAJAAAKgEQAKgCAMgHIAAAUQgLAEgKADQgLACgJAAQgaAAgQgQgAAhgOQgBgNgIgIQgHgJgOAAQgOgBgJAKQgJAJgBAMIA/AAIAAAAg");
	this.shape_641.setTransform(634.5,275.5);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#059245").s().p("AAaA9IAAhIQAAgRgGgHQgGgHgMgBQgMAAgHAKQgIAJAAASIAABDIgTAAIAAh1IATAAIAAARQAFgKAJgFQAJgFALgBQASABAJAMQAJALAAAZIAABIg");
	this.shape_642.setTransform(608.625,275.35);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#059245").s().p("AglA0QgLgKAAgSQAAgTAOgKQANgKAYABIAaAAIAAgDQAAgPgHgGQgHgHgPABQgJAAgKADQgKACgKAGIAAgTQALgFAKgCQAJgCAJAAQAOAAALAEQAKAFAHAJQAEAFABAHQACAIAAAQIAABCIgUAAIAAgSQgGALgJAFQgKAFgMAAQgSAAgLgKgAgUAFQgIAHAAALQAAALAGAGQAHAGALAAQAPAAAJgMQAJgKAAgUIAAgEIgSAAIgGAAQgQAAgJAFg");
	this.shape_643.setTransform(595.375,275.5);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#059245").s().p("AgVA8IgVgFIAAgVQALAGAKADQAJADAJAAQANAAAGgGQAIgEgBgKQAAgNgZgGIAAAAIgIgCQgQgCgIgIQgHgHAAgNQAAgSALgIQALgKAVAAQAJAAAJACQAIACAJADIAAATQgIgFgIgCQgJgCgJAAQgMAAgGAEQgHAEAAAIQAAAIAFAFQAEAEATADIAIACQAPACAGAIQAIAIAAANQAAASgMAJQgNAKgVAAIgSgCg");
	this.shape_644.setTransform(569.7,275.5);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#059245").s().p("AgvBSIAAgPIAmAAIAAhXIgeAAIAAgPIAxAAIAABmIAmAAIAAAPgAgJg4IAAgZIATAAIAAAZg");
	this.shape_645.setTransform(557.525,273.225);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#059245").s().p("AgkAuQgQgRAAgdQABgbAPgRQAPgRAYAAQAWAAAOAPQANAQABAVIAAAJIhUAAIAAABQgBAXALALQAKALARAAQAKAAAKgEQAJgCAMgHIAAAUQgLAEgKADQgLACgJAAQgbAAgPgQgAAhgOQgBgNgHgIQgJgJgOAAQgMgBgKAKQgJAJgBAMIA/AAIAAAAg");
	this.shape_646.setTransform(530.85,275.5);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#059245").s().p("AgjBDQgMgRAAgdQAAgcAMgQQAMgRAWAAQAJABAIAEQAIAFAFAIIAAg9IATAAIAACkIgTAAIAAgQQgFAKgIAEQgIAEgJAAQgWAAgMgQgAgUgMQgHAMAAAVQAAAXAHAMQAIALAMAAQAPAAAGgLQAIgMAAgXQAAgVgIgMQgGgLgPAAQgMAAgIALg");
	this.shape_647.setTransform(517.45,273.35);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#059245").s().p("AgkAuQgOgQAAgeQAAgdAOgQQANgQAXAAQAYAAANAQQAOAQAAAdQAAAegOAQQgNAQgYAAQgXAAgNgQgAgWghQgHALAAAWQAAAXAHALQAIAMAOAAQAPAAAHgMQAIgLAAgXQAAgWgIgLQgHgMgPABQgOgBgIAMg");
	this.shape_648.setTransform(504.85,275.5);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#059245").s().p("AgdAuQgQgRAAgdQAAgcAQgQQAPgRAbAAQAIAAAIACQAIADAJAEIAAAUQgIgHgIgCQgIgDgJAAQgSAAgJAMQgKALAAAVQAAAWAKAMQAJAMASAAQAKAAAIgEQAIgDAHgGIAAAUQgIAEgIADQgJACgIAAQgbAAgPgQg");
	this.shape_649.setTransform(492.025,275.5);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#059245").s().p("AgWA8QgJgCgLgDIAAgVQALAGAJADQALADAIAAQAMAAAIgGQAGgEAAgKQAAgNgYgGIgBAAIgHgCQgRgCgIgIQgHgHgBgNQAAgSAMgIQALgKAUAAQAKAAAJACQAIACAJADIAAATQgIgFgJgCQgIgCgJAAQgMAAgHAEQgGAEAAAIQAAAIAFAFQAFAEASADIAIACQAOACAIAIQAHAIAAANQAAASgNAJQgMAKgVAAIgTgCg");
	this.shape_650.setTransform(466.05,275.5);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#059245").s().p("AgvBSIAAgPIAmAAIAAhXIgeAAIAAgPIAxAAIAABmIAmAAIAAAPgAgJg4IAAgZIATAAIAAAZg");
	this.shape_651.setTransform(453.825,273.225);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#059245").s().p("AAaBSIAAhJQAAgPgGgIQgGgHgMAAQgMAAgHAKQgIAJAAARIAABDIgTAAIAAijIATAAIAABAQAFgKAJgGQAJgFALAAQASAAAJAMQAJAMAAAXIAABJg");
	this.shape_652.setTransform(440.125,273.2);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#059245").s().p("AgJBPIAAiLIgyAAIAAgSIB3AAIAAASIgxAAIAACLg");
	this.shape_653.setTransform(427.1,273.525);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#059245").s().p("AgyBZIBSixIATAAIhSCxg");
	this.shape_654.setTransform(400.95,274.525);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#059245").s().p("AgzBZIBTixIAUAAIhSCxg");
	this.shape_655.setTransform(387.95,274.525);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#FFFFFF").s().p("AgSBBIAJgjIAAgZIAcAAIAAAZIgSAjgAgKgfIAAghIAcAAIAAAhg");
	this.shape_656.setTransform(779.425,797.875);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#FFFFFF").s().p("AgUBVQALgUAHgXQAFgVAAgVQAAgUgFgWQgHgXgLgTIAOAAQANAVAHAWQAHAWAAATQAAAUgHAWQgGAUgOAXg");
	this.shape_657.setTransform(768.225,794.85);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#0BFFFF").s().p("AgpBHIAAgQIAvg0QAIgIAFgKQADgGAAgIQAAgLgHgHQgHgHgLAAQgHAAgLADQgIADgLAGIAAgTQAJgEAKgCQAKgDAIAAQATAAANALQAMALAAASQABAIgFAJQgEAJgKAKIgsAxIA/AAIAAAQg");
	this.shape_658.setTransform(757,794.675);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_659.setTransform(745.6,804.3);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#0BFFFF").s().p("AgfAoQgPgOAAgaQAAgYAOgPQAOgPAVAAQAUAAALAOQAMANABAUIAAAHIhKAAIAAAAQAAAVAIAKQAKAJAOAAQAKAAAIgCQAHgCALgGIAAARQgKAEgIACQgIACgKAAQgYAAgMgPgAgSgfQgHAJgBAKIA4AAQgCgLgGgIQgIgIgMAAQgLAAgJAIg");
	this.shape_660.setTransform(734.2,796.525);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#0BFFFF").s().p("AATBJQgPAAgIgKQgJgKAAgSIAAhdIgbAAIAAgOIAsAAIAABrQAAAMAEAFQAFAGAHAAIAUAAIAAAPg");
	this.shape_661.setTransform(723.25,794.475);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#0BFFFF").s().p("AgNBGQgIgEgDgIIAAANIgSAAIAAiQIASAAIAAA2QADgHAIgEQAHgFAJAAQASAAALAPQALAPAAAYQAAAZgLAPQgLAPgTAAQgJAAgGgEgAgSgKQgGAKAAATQAAAUAGAKQAHAKALAAQAMAAAHgKQAGgKAAgUQAAgTgGgKQgHgKgMAAQgLAAgHAKg");
	this.shape_662.setTransform(711.525,794.625);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#0BFFFF").s().p("AggAuQgKgJAAgPQAAgSALgIQANgJAVAAIAXAAIAAgCQgBgNgFgFQgHgGgNAAQgHAAgKACQgKADgHAFIAAgRIASgGIAQgCQAMAAAKAEQAIAEAHAIQADAEABAHQACAHAAAOIAAA6IgRAAIAAgPQgHAKgHADQgIAFgLAAQgRAAgIgJgAgSAFQgHAGAAAKQAAAJAFAFQAHAGAJAAQANAAAIgKQAIgJABgSIAAgEIgWAAQgOAAgIAFg");
	this.shape_663.setTransform(699.55,796.525);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAjAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_664.setTransform(689,794.525);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#0BFFFF").s().p("AgkA1IAAhnIARAAIAAAVQAEgLAJgGQAJgHAMAAQAHAAAEACIALAFIAAASIgLgHQgGgBgGAAQgQgBgIAKQgIALgBARIAAA0g");
	this.shape_665.setTransform(678.1,796.4);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#0BFFFF").s().p("AghAuQgJgKAAgOQAAgSAMgIQALgJAWAAIAXAAIAAgCQAAgNgHgFQgGgGgNAAQgHAAgKACIgSAIIAAgRIATgGIAQgCQAMAAAKAEQAIAEAHAIQADAFACAGQABAHAAAOIAAA6IgRAAIAAgPQgGAKgIADQgIAFgLAAQgQAAgKgJgAgRAFQgIAFAAALQAAAJAGAFQAFAGAKAAQANAAAJgKQAIgKAAgRIAAgEIgWAAQgNAAgIAFg");
	this.shape_666.setTransform(665.125,796.525);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#0BFFFF").s().p("AgKA0IglhnIARAAIAeBWIAehWIASAAIglBng");
	this.shape_667.setTransform(653.85,796.525);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#FFFFFF").s().p("AgSAgIAKgnIAAgYIAbAAIAAAYIgTAng");
	this.shape_668.setTransform(630.2,801.625);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#0BFFFF").s().p("AgiBFIAAgQIAdAAIAAhnIgjAQIAAgSIAjgQIARAAIAAB5IAdAAIAAAQg");
	this.shape_669.setTransform(619.725,794.825);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_670.setTransform(607.9,804.3);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#0BFFFF").s().p("AgfAoQgPgPAAgZQAAgYAOgPQAOgPAVAAQATAAAMAOQAMANABAUIAAAHIhKAAIAAAAQAAAWAIAJQAKAJAOAAQAKAAAIgCQAHgCAMgGIAAARQgLAEgIACQgIACgKAAQgYAAgMgPgAgSgfQgHAJgBAKIA4AAQgCgLgGgIQgIgIgMAAQgLAAgJAIg");
	this.shape_671.setTransform(596.5,796.525);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#0BFFFF").s().p("AATBJQgPAAgIgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAAMAEAFQAEAGAIAAIAUAAIAAAPg");
	this.shape_672.setTransform(585.55,794.475);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#0BFFFF").s().p("AgNBGQgIgEgEgIIAAANIgRAAIAAiQIARAAIAAA2QAEgHAHgEQAIgFAIAAQATAAALAPQALAPAAAYQAAAZgLAPQgLAPgTAAQgJAAgGgEgAgSgKQgGAKgBATQABAUAGAKQAGAKAMAAQAMAAAHgKQAFgKABgUQgBgTgFgKQgHgKgMAAQgMAAgGAKg");
	this.shape_673.setTransform(573.85,794.625);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#0BFFFF").s().p("AggAuQgKgJAAgPQAAgSAMgIQAMgJAVAAIAXAAIAAgCQAAgNgGgFQgHgGgNAAQgHAAgKACQgKADgHAFIAAgRIASgGIAQgCQAMAAAKAEQAJAEAGAIQADAEABAHQACAHAAAOIAAA6IgRAAIAAgPQgHAKgHADQgIAFgLAAQgRAAgIgJgAgSAFQgHAGAAAKQAAAJAFAFQAHAGAJAAQAOAAAHgKQAJgKAAgRIAAgEIgWAAQgOAAgIAFg");
	this.shape_674.setTransform(561.85,796.525);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAiAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_675.setTransform(551.3,794.525);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#0BFFFF").s().p("AgkA1IAAhnIASAAIAAAVQAEgMAIgFQAJgHAMAAQAHAAAEACIALAFIAAASIgLgHQgGgBgGAAQgQgBgIAKQgIAMAAAQIAAA0g");
	this.shape_676.setTransform(540.4,796.4);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#0BFFFF").s().p("AghAuQgJgKAAgOQAAgSAMgIQALgJAWAAIAXAAIAAgCQAAgNgGgFQgHgGgNAAQgHAAgKACIgRAIIAAgRQAKgEAIgCIAQgCQAMAAAKAEQAIAEAHAIQADAFACAGQABAHAAAOIAAA6IgRAAIAAgPQgGAKgIADQgIAFgLAAQgQAAgKgJgAgRAFQgIAGAAAKQAAAJAGAFQAGAGAJAAQANAAAJgKQAIgKAAgRIAAgEIgWAAQgNAAgIAFg");
	this.shape_677.setTransform(527.425,796.525);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#0BFFFF").s().p("AgKA0IglhnIARAAIAeBWIAehWIASAAIglBng");
	this.shape_678.setTransform(516.15,796.525);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#FFFFFF").s().p("AAHBVQgNgXgIgVQgGgVAAgUQAAgTAGgWQAIgWANgVIAOAAQgLAUgHAWQgFAWAAAUQAAAVAFAVQAGAWAMAVg");
	this.shape_679.setTransform(504.75,794.85);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#F9EB70").s().p("AAXA1IAAg/QAAgPgGgGQgFgGgJAAQgMAAgGAIQgGAJAAAPIAAA6IgSAAIAAhnIASAAIAAAQQAEgJAHgEQAJgGAJAAQAQAAAIALQAIAKAAAWIAAA/g");
	this.shape_680.setTransform(493.25,796.4);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#F9EB70").s().p("AggApQgMgOAAgbQAAgZAMgOQALgPAVAAQAVAAAMAPQAMAOAAAZQAAAbgMAOQgLAOgWAAQgVAAgLgOgAgTgdQgHAKAAATQAAATAHALQAHAKAMAAQANAAAHgKQAGgKAAgUQAAgTgGgKQgHgKgNAAQgMAAgHAKg");
	this.shape_681.setTransform(481.725,796.525);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#F9EB70").s().p("AgqBIIAAgNIAiAAIAAhMIgbAAIAAgOIArAAIAABaIAjAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_682.setTransform(471,794.525);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#F9EB70").s().p("AAVBDQgTAAgHgIQgIgHAAgTIAAg4IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA4QAAALAEAEQAFAGAKgBIAUAAIAAAOg");
	this.shape_683.setTransform(458.45,795.05);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#F9EB70").s().p("AgaAoQgNgOAAgaQAAgYANgPQAOgPAXAAIAPACIAOAGIAAASQgHgGgHgCQgGgDgJAAQgPAAgJAKQgIAKAAATQAAAUAIAKQAJAKAPAAQAIAAAIgCQAHgDAGgGIAAASQgGAEgIACQgGACgJAAQgYAAgNgPg");
	this.shape_684.setTransform(447.425,796.525);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#F9EB70").s().p("AAXA1IAAg/QAAgPgFgGQgFgGgLAAQgKAAgHAIQgHAKAAAOIAAA6IgRAAIAAhnIARAAIAAAQQAFgJAIgEQAIgGAJAAQAQAAAIALQAIALAAAVIAAA/g");
	this.shape_685.setTransform(435.875,796.4);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#F9EB70").s().p("AgfArQgIgLAAgVIAAg/IARAAIAAA/QAAAPAFAGQAFAHALAAQAKAAAHgJQAGgJAAgPIAAg6IASAAIAABnIgSAAIAAgQQgEAJgIAFQgIAEgJAAQgQAAgIgKg");
	this.shape_686.setTransform(424.425,796.675);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#F9EB70").s().p("AgoBFIAAiJIBRAAIAAAPIg+AAIAAAlIA4AAIAAAQIg4AAIAABFg");
	this.shape_687.setTransform(413.4,794.8);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#F9EB70").s().p("AgoBIIAAgOIAKAAQAIAAADgFQAEgDAHgTIgohmIASAAIAeBRIAfhRIASAAIgnBiQgJAagCAFQgEAGgHAEQgFAEgKAAg");
	this.shape_688.setTransform(401.525,798.5);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#F9EB70").s().p("AAgA1IAAg6QAAgVgCgHQgDgFgGAAQgIAAgCAGQgDAFAAAWIAAA6IgPAAIAAg6QAAgXgDgFQgCgFgHAAQgHAAgCAGQgDAFAAAWIAAA6IgQAAIAAhnIAQAAIAAAJQADgGAFgDQAEgDAGAAQAHABAFADQADADADAHQADgHAFgDQAGgDAGgBQAMAAAGAKQAFAKAAAbIAAA7g");
	this.shape_689.setTransform(389.975,796.4);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#FFFFFF").s().p("AgnBXIAAgOIAHAAQANAAAEgEQADgDAAgOIAAgTQAAgQAHgGQAGgHASgBQgTgDgFgEQgHgGAAgRIAAgZQAAgNgDgDQgEgFgNAAIgHAAIAAgNIAGAAQAXAAAIAHQAHAHAAAUIAAAYQAAAMAFAHQAGAGAMAAIAMAAIAAAMIgMAAQgMABgFAGQgGAIAAAKIAAATQAAAUgHAHQgHAHgYAAg");
	this.shape_690.setTransform(390.225,718.5);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#FFFFFF").s().p("AgSBBIAJgjIAAgZIAcAAIAAAZIgSAjgAgKgfIAAgiIAcAAIAAAig");
	this.shape_691.setTransform(985.95,698.65);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#FFFFFF").s().p("AgUBVQAMgVAGgWQAFgVAAgVQAAgUgFgVQgGgWgMgVIAOAAQAOAWAHAVQAGAWABATQgBAUgGAWQgHAVgOAWg");
	this.shape_692.setTransform(974.75,695.625);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#0BFFFF").s().p("AgTA1IgSgFIAAgRQAJAEAJADQAHACAJAAQALAAAGgEQAHgFAAgIQAAgMgXgFIAAAAIgHgBQgPgDgGgGQgHgHAAgLQAAgPAKgJQAKgIATAAIAPACIAPAEIAAARIgOgGQgHgCgIAAQgLAAgGADQgGAEAAAIQAAAHAFADQADAEARADIAHABQAMACAHAHQAHAIAAALQAAAPgLAJQgLAJgTAAg");
	this.shape_693.setTransform(963.7,697.325);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#0BFFFF").s().p("AAVBDQgTAAgIgIQgHgHAAgTIAAg4IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA4QAAALAFAFQAEAEAKAAIAUAAIAAAOg");
	this.shape_694.setTransform(951.85,695.825);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#0BFFFF").s().p("AgfArQgIgLAAgUIAAhBIARAAIAABBQAAAOAGAGQAEAHAKAAQAMAAAGgJQAGgIABgRIAAg6IARAAIAABnIgRAAIAAgPQgFAJgIAFQgHAFgKgBQgQAAgIgKg");
	this.shape_695.setTransform(940.75,697.45);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#0BFFFF").s().p("AgqBJIAAiPIARAAIAAAOQAEgHAIgFQAIgEAHAAQATAAALAOQALAPAAAaQAAAZgLAOQgLAOgTAAQgIAAgHgEQgIgEgEgIIAAA1gAgSgwQgHAMAAASQAAATAHAKQAHALALAAQAMAAAGgKQAHgKAAgUQAAgUgHgKQgGgKgMAAQgLAAgHAKg");
	this.shape_696.setTransform(929.525,699.175);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#0BFFFF").s().p("AAWA1IAAg/QABgOgGgHQgEgGgLAAQgLAAgGAIQgGAIgBARIAAA5IgRAAIAAhnIARAAIAAAQQAFgJAHgFQAJgEAJAAQAQAAAIAKQAIALAAAVIAAA/g");
	this.shape_697.setTransform(917.8,697.175);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAiAAIAAhNIgcAAIAAgNIArAAIAABaIAiAAIAAANgAgHgxIAAgWIAPAAIAAAWg");
	this.shape_698.setTransform(907,695.3);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_699.setTransform(894.75,705.075);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#0BFFFF").s().p("AgLBIIAAhZIgcAAIAAgOIAcAAIAAgHQAAgRAHgIQAHgIARAAIAUAAIAAAOIgTAAQgJAAgEAEQgDADAAAKIAAAJIAjAAIAAAOIgjAAIAABZg");
	this.shape_700.setTransform(883.425,695.275);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#0BFFFF").s().p("AggApQgMgOABgbQgBgaAMgOQALgOAVAAQAWAAALAOQAMAPAAAZQAAAagMAPQgLAOgWAAQgVAAgLgOgAgTgdQgGAKgBATQABAUAGAKQAHAKAMAAQANAAAGgKQAIgKAAgUQAAgSgIgLQgGgKgNAAQgMAAgHAKg");
	this.shape_701.setTransform(871.85,697.325);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_702.setTransform(860.325,705.075);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#0BFFFF").s().p("AAgA1IAAg6QAAgXgCgFQgCgFgHAAQgHAAgDAGQgDAGAAAVIAAA6IgPAAIAAg6QAAgWgCgGQgDgFgHAAQgHAAgCAGQgDAFAAAWIAAA6IgQAAIAAhnIAQAAIAAAJQADgFAFgDQAEgDAGAAQAIAAAEADQAEADACAHQADgGAFgEQAGgDAGAAQAMAAAGAJQAFAKAAAbIAAA7g");
	this.shape_703.setTransform(848.925,697.175);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#0BFFFF").s().p("AgfArQgIgKAAgVIAAhBIARAAIAABBQAAANAFAHQAFAHALAAQAKAAAHgJQAHgIAAgRIAAg6IARAAIAABnIgRAAIAAgPQgFAJgIAFQgHAFgKgBQgQAAgIgKg");
	this.shape_704.setTransform(837.475,697.45);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#0BFFFF").s().p("AgTA1IgSgFIAAgRQALAFAHACQAIACAJAAQALAAAFgEQAHgFAAgIQgBgMgVgFIgBAAIgHgBQgPgDgGgGQgHgGAAgMQABgQAJgIQAKgIATAAQAIAAAHACIAPAEIAAARQgFgEgJgCQgHgCgIAAQgMAAgEADQgHAEAAAIQABAHAEADQADAEARADIAHABQAMACAIAHQAGAHAAAMQAAAQgLAIQgLAJgTAAg");
	this.shape_705.setTransform(826,697.325);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#FFFFFF").s().p("AgTAgIALgmIAAgZIAcAAIAAAZIgUAmg");
	this.shape_706.setTransform(802.325,702.4);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#C69C6D").s().p("AgJAdIAAg5IAUAAIAAA5g");
	this.shape_707.setTransform(791.65,690.925);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#C69C6D").s().p("AgwAeIAAgQIBhAAIAAAQgAgwgNIAAgQIBhAAIAAAQg");
	this.shape_708.setTransform(768.575,696.475);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#C69C6D").s().p("AgTA1IgSgFIAAgRQALAFAHACQAIACAJAAQAKAAAGgEQAHgFAAgIQAAgMgWgFIgBAAIgGgBQgPgDgHgGQgHgHAAgLQAAgPALgJQAJgIASAAQAJAAAIACIAPAEIAAARQgHgEgIgCQgHgCgIAAQgLAAgGADQgFAEAAAIQAAAGAEAEQAEAEAQADIAHABQANACAGAHQAHAIAAALQAAAPgLAJQgLAJgSAAg");
	this.shape_709.setTransform(745.675,697.325);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#C69C6D").s().p("AAVBDQgTAAgHgIQgIgIAAgSIAAg4IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA4QAAALAEAFQAFAEALAAIATAAIAAAOg");
	this.shape_710.setTransform(733.825,695.825);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#C69C6D").s().p("AgfArQgIgKAAgVIAAhBIARAAIAABBQAAANAFAHQAFAHALAAQALAAAGgJQAHgIAAgRIAAg6IARAAIAABnIgRAAIAAgPQgFAJgIAFQgHAFgKgBQgQAAgIgKg");
	this.shape_711.setTransform(722.725,697.45);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#C69C6D").s().p("AgqBJIAAiPIARAAIAAAOQAEgIAIgEQAHgEAIAAQATAAALAOQALAQAAAZQAAAYgLAPQgLAOgTAAQgIAAgHgEQgIgEgEgIIAAA1gAgSgwQgHAKAAAUQAAAUAHAJQAHALALAAQAMAAAGgKQAHgMAAgSQAAgSgHgMQgGgKgMAAQgLAAgHAKg");
	this.shape_712.setTransform(711.525,699.175);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#C69C6D").s().p("AAXA1IAAg/QAAgOgGgHQgEgGgLAAQgLAAgHAIQgGAJAAAQIAAA5IgRAAIAAhnIARAAIAAAQQAGgJAGgFQAJgEAJAAQAQAAAIAKQAIALAAAVIAAA/g");
	this.shape_713.setTransform(699.8,697.175);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#C69C6D").s().p("AgpBIIAAgNIAhAAIAAhNIgbAAIAAgNIArAAIAABaIAjAAIAAANgAgIgxIAAgWIAQAAIAAAWg");
	this.shape_714.setTransform(689,695.3);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#C69C6D").s().p("AgMBIIAAhZIgbAAIAAgOIAbAAIAAgHQAAgQAIgJQAHgIARAAIAUAAIAAAOIgTAAQgJAAgEAEQgDADAAAKIAAAJIAjAAIAAAOIgjAAIAABZg");
	this.shape_715.setTransform(665.425,695.275);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#C69C6D").s().p("AggApQgMgPAAgaQAAgZAMgPQAMgOAUAAQAWAAALAOQAMAPAAAZQAAAagMAPQgLAOgWAAQgUAAgMgOgAgTgdQgGAKAAATQAAAUAGAKQAHAKAMAAQANAAAHgKQAHgKAAgUQAAgSgHgLQgHgKgNAAQgMAAgHAKg");
	this.shape_716.setTransform(653.825,697.325);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#C69C6D").s().p("AAgA1IAAg6QAAgVgCgHQgCgFgHAAQgIAAgCAGQgDAGAAAVIAAA6IgPAAIAAg6QAAgWgCgGQgDgFgHAAQgHAAgCAGQgDAGAAAVIAAA6IgQAAIAAhnIAQAAIAAAJQACgEAGgEQAEgDAGAAQAIAAAEADQADADADAHQADgHAFgDQAFgDAHAAQAMAAAGAJQAFAKAAAbIAAA7g");
	this.shape_717.setTransform(630.925,697.175);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#C69C6D").s().p("AgfArQgIgLAAgUIAAhBIARAAIAABBQAAAOAFAGQAFAHALAAQAKAAAHgJQAHgJAAgQIAAg6IARAAIAABnIgRAAIAAgPQgEAIgJAGQgIAFgJgBQgQAAgIgKg");
	this.shape_718.setTransform(619.475,697.45);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#C69C6D").s().p("AgTA1IgSgFIAAgRQAJAEAJADQAHACAKAAQAKAAAHgEQAFgFABgIQgBgMgVgFIgBAAIgHgBQgOgDgHgGQgHgHAAgLQAAgPAKgJQAKgIASAAIAQACIAQAEIAAARIgPgGQgHgCgIAAQgMAAgFADQgFAEAAAIQAAAHAEADQADAEARADIAHABQAMACAIAHQAGAIAAALQAAAPgLAJQgLAJgSAAg");
	this.shape_719.setTransform(608,697.325);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#C69C6D").s().p("AggAoQgOgPAAgZQAAgYAOgPQANgPAWAAQAUAAALAOQAMAOAAASIAAAIIhJAAIAAAAQAAAVAIAKQAJAJAQAAQAGAAALgCIATgIIAAARIgTAGQgJACgJAAQgWAAgPgPgAgSgfQgHAIgCAKIA4AAQgBgLgGgHQgHgIgNAAQgKAAgKAIg");
	this.shape_720.setTransform(585.05,697.325);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#C69C6D").s().p("AAXBIIAAhAQAAgMgFgIQgFgGgLAAQgLAAgGAIQgHAIAAAQIAAA6IgRAAIAAiPIARAAIAAA4QAFgJAIgFQAHgEAKAAQAQAAAIAKQAIAKAAAVIAABAg");
	this.shape_721.setTransform(573.575,695.275);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#C69C6D").s().p("AgIBFIAAh6IgsAAIAAgPIBpAAIAAAPIgrAAIAAB6g");
	this.shape_722.setTransform(562.05,695.575);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#C69C6D").s().p("AgKAdIAAg5IAVAAIAAA5g");
	this.shape_723.setTransform(550.7,690.925);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#FFFFFF").s().p("AAGBVQgNgXgGgUQgHgUAAgWQAAgVAHgUQAGgUANgXIAPAAQgNAXgFATQgFAVAAAVQAAAVAFAVQAGAVAMAWg");
	this.shape_724.setTransform(539.175,695.625);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#F9EB70").s().p("AgPBJIgPgEIAAgRQAIAEAIACQAHACAHAAQANAAAGgHQAGgIAAgQIAAgNQgDAJgIAEQgGAFgKAAQgSAAgLgPQgLgPAAgXQAAgYALgPQALgPASAAQAIAAAIAEQAGAEAFAJIAAgOIASAAIAABgQAAAXgMANQgKAMgVAAgAgRgwQgHAJAAAUQAAATAHAJQAHALALAAQAMAAAGgLQAGgJAAgTQAAgTgGgKQgHgKgLAAQgLAAgHAKg");
	this.shape_725.setTransform(527.325,699.225);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#F9EB70").s().p("AggApQgLgOAAgbQAAgaALgOQALgOAVAAQAWAAALAOQAMAPAAAZQAAAbgMAOQgLAOgWAAQgVAAgLgOgAgTgdQgGAKAAATQAAAUAGAKQAHAKAMAAQANAAAHgKQAGgKABgUQgBgSgGgLQgHgKgNAAQgMAAgHAKg");
	this.shape_726.setTransform(516.15,697.325);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#F9EB70").s().p("AATBIQgQAAgHgJQgIgKAAgSIAAhdIgcAAIAAgNIAsAAIAABqQAAALAEAHQAFAFAIAAIAUAAIAAAOg");
	this.shape_727.setTransform(505.225,695.25);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#FFFFFF").s().p("AgPATIAAglIAfAAIAAAlg");
	this.shape_728.setTransform(492.725,700.625);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#0BFFFF").s().p("AggAoQgNgPAAgZQAAgXANgQQANgPAWAAQATAAAMAOQAMANAAATIAAAIIhJAAIAAAAQgBAWAJAJQAJAJAPAAQAIAAAKgCIATgIIAAARIgTAGQgIACgKAAQgXAAgOgPgAgRgfQgIAIgBAKIA3AAQgBgLgHgHQgGgIgNAAQgLAAgIAIg");
	this.shape_729.setTransform(481.775,697.325);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#0BFFFF").s().p("AATBIQgQAAgHgJQgIgJAAgTIAAhdIgcAAIAAgNIAsAAIAABqQAAALAEAHQAEAFAJAAIAUAAIAAAOg");
	this.shape_730.setTransform(470.825,695.25);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#0BFFFF").s().p("AggApQgMgPAAgaQAAgZAMgPQALgOAVAAQAVAAAMAOQAMAPAAAZQAAAagMAPQgLAOgWAAQgVAAgLgOgAgTgdQgGAKAAATQAAAUAGAKQAHAKAMAAQANAAAHgKQAGgKAAgUQAAgTgGgKQgHgKgNAAQgMAAgHAKg");
	this.shape_731.setTransform(458.775,697.325);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#0BFFFF").s().p("AgTA1IgSgFIAAgRQALAFAHACQAIACAJAAQAKAAAHgEQAFgFABgIQgBgMgVgFIgBAAIgHgBQgOgDgHgGQgGgGgBgMQAAgQAKgIQAKgIASAAQAJAAAHACIAQAEIAAARQgHgEgIgCQgHgCgIAAQgLAAgFADQgHAEAAAIQABAHAEADQAEAEAQADIAHABQAMACAIAHQAGAHAAAMQAAAQgLAIQgLAJgSAAg");
	this.shape_732.setTransform(447.35,697.325);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#0BFFFF").s().p("AAXA1IAAg/QAAgOgFgHQgFgGgLAAQgLAAgGAIQgHAJAAAQIAAA5IgRAAIAAhnIARAAIAAAQQAFgJAIgFQAHgEAKAAQAQAAAIAKQAIALAAAVIAAA/g");
	this.shape_733.setTransform(435.875,697.175);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#0BFFFF").s().p("AggApQgLgOAAgbQAAgaALgOQALgOAVAAQAWAAALAOQAMAOAAAaQAAAbgMAOQgLAOgWAAQgVAAgLgOgAgTgdQgGALAAASQAAATAGALQAHAKAMAAQANAAAHgKQAHgKAAgUQAAgTgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_734.setTransform(424.35,697.325);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#0BFFFF").s().p("AgaAoQgNgOAAgaQAAgZANgOQAPgPAWAAQAJAAAGACQAIADAGADIAAASQgGgGgHgDQgIgCgIAAQgPAAgIAKQgJALAAASQAAATAJALQAIAKAPAAQAKAAAGgDQAHgCAGgGIAAASQgHAEgHACQgGACgJAAQgWAAgPgPg");
	this.shape_735.setTransform(412.975,697.325);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#0BFFFF").s().p("AgpBHIAAgQIAvg0QAKgKADgIQADgGAAgIQAAgLgHgHQgHgHgLAAQgHAAgLADQgKAEgJAGIAAgTQALgFAHgCQALgDAIAAQATAAANALQAMALAAASQABAJgFAIQgEAKgKAJIgsAxIA/AAIAAAQg");
	this.shape_736.setTransform(779.95,672.575);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_737.setTransform(768.55,682.2);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#0BFFFF").s().p("AAVBDQgTAAgHgHQgIgKAAgRIAAg4IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA4QAAALAEAFQAFAEALAAIATAAIAAAOg");
	this.shape_738.setTransform(756.775,672.95);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#0BFFFF").s().p("AgfArQgIgKAAgWIAAg/IARAAIAAA/QAAAOAFAHQAGAHAKAAQALAAAGgJQAHgIAAgQIAAg6IARAAIAABnIgRAAIAAgQQgFAJgIAFQgHAEgKAAQgRAAgHgKg");
	this.shape_739.setTransform(745.675,674.575);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#0BFFFF").s().p("AgqBJIAAiOIARAAIAAANQAFgJAHgDQAGgEAJAAQAUAAAKAPQALAOAAAaQAAAYgLAPQgLAOgTAAQgJAAgGgEQgHgEgFgHIAAA0gAgSgwQgHALAAATQAAAUAHAKQAGAJAMABQANgBAFgJQAHgLAAgTQAAgTgHgLQgFgKgNABQgMgBgGAKg");
	this.shape_740.setTransform(734.475,676.3);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#0BFFFF").s().p("AAXA1IAAg/QAAgPgFgGQgFgHgLAAQgKAAgHAJQgHAKAAAOIAAA6IgRAAIAAhnIARAAIAAAQQAFgJAIgFQAIgEAJAAQAQAAAIAKQAIALAAAVIAAA/g");
	this.shape_741.setTransform(722.725,674.325);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAjAAIAAANgAgIgxIAAgWIAQAAIAAAWg");
	this.shape_742.setTransform(711.95,672.425);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#FF931D").s().p("AgHAxIAAgpIgpAAIAAgPIApAAIAAgpIAPAAIAAApIApAAIAAAPIgpAAIAAApg");
	this.shape_743.setTransform(688.45,673.6);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#0BFFFF").s().p("AgiBFIAAgPIAdAAIAAhoIgjAQIAAgSIAjgQIARAAIAAB6IAdAAIAAAPg");
	this.shape_744.setTransform(665.625,672.725);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_745.setTransform(653.8,682.2);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#0BFFFF").s().p("AAVBDQgTAAgHgHQgIgJAAgSIAAg4IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA4QAAALAEAFQAEAEALAAIAUAAIAAAOg");
	this.shape_746.setTransform(642.05,672.95);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#0BFFFF").s().p("AgfArQgIgKAAgWIAAg/IASAAIAAA/QgBAPAFAGQAFAHALAAQALAAAGgJQAGgIABgQIAAg6IARAAIAABnIgRAAIAAgQQgFAJgIAFQgIAEgJAAQgRAAgHgKg");
	this.shape_747.setTransform(630.95,674.575);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#0BFFFF").s().p("AgqBJIAAiOIARAAIAAANQAFgIAHgEQAGgEAJAAQAUAAAKAPQALAOAAAaQAAAZgLAOQgLAOgTAAQgJAAgGgEQgHgEgFgHIAAA0gAgSgwQgHAMAAASQAAASAHAMQAGAJAMABQANgBAFgJQAHgKAAgUQAAgUgHgKQgFgKgNABQgMgBgGAKg");
	this.shape_748.setTransform(619.725,676.3);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#0BFFFF").s().p("AAXA1IAAg/QAAgPgGgGQgEgHgLAAQgKAAgIAJQgFAJAAAPIAAA6IgSAAIAAhnIASAAIAAAQQAEgJAHgFQAJgEAJAAQAQAAAIAKQAIALAAAVIAAA/g");
	this.shape_749.setTransform(608,674.325);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAjAAIAAANgAgIgxIAAgWIAQAAIAAAWg");
	this.shape_750.setTransform(597.2,672.425);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#FF931D").s().p("AgwAeIAAgQIBhAAIAAAQgAgwgNIAAgQIBhAAIAAAQg");
	this.shape_751.setTransform(573.525,673.575);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#FFFFFF").s().p("AgTA1QgKgCgIgDIAAgSQAKAGAIACQAKACAHAAQAKABAGgFQAHgFAAgIQAAgMgWgEIgBAAIgGgCQgPgDgHgGQgGgHgBgMQABgOAJgIQAKgJATABQAIgBAHACQAIACAIACIAAARQgKgFgFgBQgJgDgGAAQgKAAgGAFQgGADAAAIQAAAHAEADQAGAFAOACIAIABQAMACAHAHQAGAHAAAMQAAAPgLAJQgKAJgUAAIgQgCg");
	this.shape_752.setTransform(550.6,674.45);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#FFFFFF").s().p("AAVBDQgTAAgHgHQgIgJAAgSIAAg4IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA4QAAAMAFAEQAEAEALAAIATAAIAAAOg");
	this.shape_753.setTransform(538.75,672.95);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#FFFFFF").s().p("AgfArQgIgKAAgWIAAg/IARAAIAAA/QAAAPAFAGQAGAHAKAAQAKAAAHgJQAHgIAAgQIAAg6IARAAIAABnIgRAAIAAgQQgFAJgIAFQgIAEgJAAQgRAAgHgKg");
	this.shape_754.setTransform(527.675,674.575);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#FFFFFF").s().p("AgqBJIAAiOIARAAIAAANQAFgJAHgDQAGgEAJAAQAUAAAKAPQALAOAAAaQAAAYgLAPQgLAOgTAAQgJAAgHgEQgHgEgEgHIAAA0gAgSgwQgGALgBATQABAUAGAKQAGAJAMABQANgBAFgJQAHgKAAgUQAAgTgHgLQgFgKgNABQgMgBgGAKg");
	this.shape_755.setTransform(516.45,676.3);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#FFFFFF").s().p("AAXA1IAAg/QAAgPgFgGQgGgHgKAAQgKAAgHAJQgHAKAAAOIAAA6IgRAAIAAhnIARAAIAAAQQAFgJAIgFQAHgEAKAAQAQAAAIAKQAIALAAAVIAAA/g");
	this.shape_756.setTransform(504.725,674.325);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#FFFFFF").s().p("AgqBIIAAgNIAiAAIAAhMIgaAAIAAgOIArAAIAABaIAiAAIAAANgAgIgxIAAgWIARAAIAAAWg");
	this.shape_757.setTransform(493.925,672.425);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#FFFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_758.setTransform(481.7,682.2);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#FFFFFF").s().p("AgMBIIAAhZIgbAAIAAgNIAbAAIAAgIQAAgRAIgIQAHgIARgBIAUAAIAAAPIgTAAQgKAAgDAEQgEAEAAAJIAAAKIAkAAIAAANIgkAAIAABZg");
	this.shape_759.setTransform(470.375,672.4);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#FFFFFF").s().p("AggAoQgMgOAAgaQAAgaAMgOQALgOAVABQAVgBAMAOQAMAOAAAaQAAAagMAOQgLAOgWABQgVgBgLgOgAgTgdQgGAKAAATQAAAUAGAKQAHAKAMAAQANAAAHgKQAGgKAAgUQAAgTgGgKQgHgKgNAAQgMAAgHAKg");
	this.shape_760.setTransform(458.775,674.45);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#FFFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_761.setTransform(447.25,682.2);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#FFFFFF").s().p("AAgA1IAAg6QAAgWgCgGQgDgFgGAAQgIAAgDAGQgCAGAAAVIAAA6IgPAAIAAg6QAAgWgDgGQgCgFgHAAQgHAAgDAGQgCAGAAAVIAAA6IgQAAIAAhnIAQAAIAAAJQADgGAEgDQAGgCAFAAQAHAAAFADQADADADAHQADgIAFgCQAFgDAHAAQANAAAFAJQAFAKAAAbIAAA7g");
	this.shape_762.setTransform(435.875,674.325);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#FFFFFF").s().p("AgfArQgIgKAAgWIAAg/IARAAIAAA/QAAAPAFAGQAFAHALAAQAKAAAHgJQAGgJAAgPIAAg6IASAAIAABnIgSAAIAAgQQgEAJgIAFQgIAEgJAAQgQAAgIgKg");
	this.shape_763.setTransform(424.425,674.575);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#FFFFFF").s().p("AgTA1QgJgCgJgDIAAgSQAKAGAIACQAKACAHAAQAKABAGgFQAHgFAAgIQAAgMgWgEIgBAAIgGgCQgPgDgHgGQgHgHAAgMQAAgOAKgIQAKgJASABQAJgBAIACIAPAEIAAARQgKgFgFgBQgJgDgGAAQgKAAgHAFQgFADAAAIQAAAGAEAEQAFAFAPACIAHABQAOADAFAGQAHAIAAALQAAAPgLAJQgKAJgUAAg");
	this.shape_764.setTransform(412.925,674.45);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#FFFFFF").s().p("AAiBXQgXAAgIgHQgHgHAAgUIAAgTQAAgJgFgIQgHgIgLAAIgMAAIAAgMIAMAAQANAAAFgGQAFgGAAgMIAAgZQAAgUAHgIQAHgGAYAAIAGAAIAAANIgGAAQgOAAgDAEQgEAEgBANIAAAZQABAQgHAGQgGAGgSABQASADAGAGQAGAGAAAQIAAAUQABANAEAEQADADAOAAIAGAAIAAAOg");
	this.shape_765.setTransform(837.3,649.9);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#FFFFFF").s().p("AgUBVQAMgUAGgXQAGgUAAgWQAAgVgGgUQgGgXgMgUIAPAAQAMAWAIAVQAGAWABATQgBAUgGAWQgIAVgMAWg");
	this.shape_766.setTransform(814.1,649.875);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#0BFFFF").s().p("AgpBHIAAgQIAeghIARgTQAJgJAEgJQADgGAAgIQAAgMgHgGQgHgHgLAAQgIAAgKADQgIADgLAGIAAgTIASgHQAJgCAKAAQATAAANALQAMALAAARQAAAKgEAIQgEAJgKAKIgsAxIA/AAIAAAQg");
	this.shape_767.setTransform(802.9,649.725);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_768.setTransform(791.5,659.35);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#0BFFFF").s().p("AAVBDQgTAAgHgIQgIgIAAgSIAAg4IgcAAIAAgOIAcAAIAAgdIAQAAIAAAdIAnAAIAAAOIgnAAIAAA4QAAALAEAFQAFAEALAAIATAAIAAAOg");
	this.shape_769.setTransform(779.725,650.1);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#0BFFFF").s().p("AgfArQgIgKAAgWIAAg/IARAAIAAA/QAAANAFAIQAFAGALAAQAMAAAFgIQAHgIAAgRIAAg5IARAAIAABnIgRAAIAAgQQgFAKgIAEQgHAEgKAAQgQAAgIgKg");
	this.shape_770.setTransform(768.625,651.725);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#0BFFFF").s().p("AgqBJIAAiPIARAAIAAAOQAFgIAHgEQAHgEAIAAQATAAALAOQALAQAAAZQAAAYgLAPQgLAOgTAAQgIAAgHgEQgHgDgFgJIAAA1gAgSgvQgHAJAAAVQAAATAHAKQAHAKALAAQAMAAAGgKQAHgMAAgRQAAgUgHgKQgGgLgMAAQgLAAgHALg");
	this.shape_771.setTransform(757.425,653.425);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#0BFFFF").s().p("AAXA1IAAg/QAAgPgFgGQgFgGgLgBQgKABgHAIQgHAJAAAQIAAA5IgRAAIAAhnIARAAIAAAQQAEgIAJgGQAIgFAJAAQAQAAAIALQAIALAAAVIAAA/g");
	this.shape_772.setTransform(745.675,651.45);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAiAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_773.setTransform(734.9,649.575);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#FFFFFF").s().p("AgTAgIALgnIAAgYIAcAAIAAAYIgUAng");
	this.shape_774.setTransform(710.525,656.675);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#0BFFFF").s().p("AgjBFIAAgQIAeAAIAAhoIgjARIAAgSIAigQIASAAIAAB5IAdAAIAAAQg");
	this.shape_775.setTransform(700.075,649.875);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_776.setTransform(688.2,659.35);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#0BFFFF").s().p("AAVBDQgUAAgGgIQgIgHAAgTIAAg4IgcAAIAAgOIAcAAIAAgdIAQAAIAAAdIAnAAIAAAOIgnAAIAAA4QAAALAFAFQAEAEAKAAIAUAAIAAAOg");
	this.shape_777.setTransform(676.45,650.1);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#0BFFFF").s().p("AgfArQgIgLAAgVIAAg/IARAAIAAA/QAAAOAFAHQAFAGALAAQALAAAGgIQAHgJAAgQIAAg5IARAAIAABnIgRAAIAAgQQgFAJgIAFQgIAEgJAAQgQAAgIgKg");
	this.shape_778.setTransform(665.375,651.725);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#0BFFFF").s().p("AgqBJIAAiPIASAAIAAAOQADgIAIgEQAHgEAIAAQATAAALAOQALAPAAAaQAAAZgLAOQgLAOgTAAQgHAAgIgEQgIgEgDgIIAAA1gAgSgvQgGAJAAAVQAAATAGAKQAGAKAMAAQAMAAAHgKQAGgLAAgSQAAgUgGgKQgHgLgMAAQgMAAgGALg");
	this.shape_779.setTransform(654.125,653.425);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#0BFFFF").s().p("AAXA1IAAg/QAAgNgFgIQgFgGgLgBQgKABgHAIQgHAIAAARIAAA5IgRAAIAAhnIARAAIAAAQQAFgJAIgFQAHgFAKAAQAQAAAIALQAIAKAAAWIAAA/g");
	this.shape_780.setTransform(642.425,651.45);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAiAAIAAhMIgbAAIAAgOIAqAAIAABaIAiAAIAAANgAgHgyIAAgVIAPAAIAAAVg");
	this.shape_781.setTransform(631.6,649.575);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#FFFFFF").s().p("AAHBVQgNgWgIgVQgGgWAAgUQAAgTAGgWQAIgVANgWIAOAAQgMAUgGAWQgFAWAAAUQAAAVAFAVQAHAXALAUg");
	this.shape_782.setTransform(619.5,649.875);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#F9EB70").s().p("AAXA1IAAg/QAAgNgFgIQgFgGgLgBQgKABgHAIQgHAIAAARIAAA5IgRAAIAAhnIARAAIAAAQQAFgJAIgFQAHgFAKAAQAQAAAIALQAIAKAAAWIAAA/g");
	this.shape_783.setTransform(596.525,651.45);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#F9EB70").s().p("AghApQgLgOABgbQgBgaALgOQANgOAUAAQAWAAALAOQAMAPAAAZQAAAagMAPQgLAOgWAAQgUAAgNgOgAgTgdQgHAKABATQgBAUAHAKQAHAKAMAAQAMAAAIgKQAGgLABgTQgBgTgGgKQgHgKgNAAQgMAAgHAKg");
	this.shape_784.setTransform(585,651.575);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#F9EB70").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAjAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_785.setTransform(574.25,649.575);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#F9EB70").s().p("AAVBDQgUAAgGgIQgIgHAAgTIAAg4IgcAAIAAgOIAcAAIAAgdIAQAAIAAAdIAnAAIAAAOIgnAAIAAA4QAAALAFAFQAEAEALAAIATAAIAAAOg");
	this.shape_786.setTransform(561.7,650.1);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#F9EB70").s().p("AgaAoQgNgOAAgaQAAgYANgPQAOgPAXAAQAGAAAJACIAOAGIAAASQgHgGgGgCQgHgDgJAAQgPAAgJAKQgIALAAASQAAATAIALQAJAKAPAAQAIAAAIgCQAHgDAGgGIAAASQgGADgIADQgGACgJAAQgXAAgOgPg");
	this.shape_787.setTransform(550.675,651.575);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#F9EB70").s().p("AAXA1IAAg/QAAgPgGgGQgEgGgKgBQgMABgGAIQgHAIABARIAAA5IgSAAIAAhnIASAAIAAAQQAEgIAHgGQAJgFAJAAQARAAAHALQAIALAAAVIAAA/g");
	this.shape_788.setTransform(539.15,651.45);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#F9EB70").s().p("AgfArQgIgKAAgWIAAg/IARAAIAAA/QAAAOAFAHQAFAGALAAQALAAAGgIQAHgIAAgRIAAg5IARAAIAABnIgRAAIAAgQQgFAJgIAFQgIAEgJAAQgQAAgIgKg");
	this.shape_789.setTransform(527.675,651.725);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#F9EB70").s().p("AgoBFIAAiJIBRAAIAAAPIg+AAIAAAmIA4AAIAAAPIg4AAIAABFg");
	this.shape_790.setTransform(516.675,649.85);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#F9EB70").s().p("AgoBIIAAgOIAKAAQAHgBAFgDQAEgFAHgTIgphlIASAAIAeBRIAfhRIASAAIgmBjIgMAeQgEAHgHADQgFAEgKAAg");
	this.shape_791.setTransform(504.775,653.55);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#F9EB70").s().p("AAgA1IAAg6QAAgXgCgEQgCgGgHAAQgHAAgDAGQgDAFAAAWIAAA6IgPAAIAAg6QAAgWgCgGQgDgFgHAAQgHAAgCAGQgDAEAAAXIAAA6IgQAAIAAhnIAQAAIAAAJQADgFAFgDQAEgEAGAAQAIAAAEAEQAEADACAHQADgHAFgDQAFgEAHAAQAMABAGAJQAFAKAAAbIAAA7g");
	this.shape_792.setTransform(493.225,651.45);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#0071BC").s().p("AAWA1IAAg/QAAgOgEgHQgFgGgLgBQgLABgGAIQgHAIAAARIAAA5IgRAAIAAhnIARAAIAAAQQAFgJAIgFQAHgFAKAAQAQAAAIALQAIAKAAAWIAAA/g");
	this.shape_793.setTransform(470.325,651.45);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#0071BC").s().p("AggApQgMgPAAgaQAAgZAMgPQALgOAVAAQAVAAAMAOQAMAPAAAZQAAAagMAPQgLAOgWAAQgVAAgLgOgAgTgdQgGAKAAATQAAAUAGAKQAHAKAMAAQANAAAHgKQAGgKAAgUQAAgTgGgKQgHgKgNAAQgMAAgHAKg");
	this.shape_794.setTransform(458.775,651.575);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#0071BC").s().p("AgqBIIAAgNIAiAAIAAhMIgbAAIAAgOIArAAIAABaIAjAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_795.setTransform(448.05,649.575);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#0071BC").s().p("AAVBDQgTAAgHgIQgIgHAAgTIAAg4IgcAAIAAgOIAcAAIAAgdIAQAAIAAAdIAnAAIAAAOIgnAAIAAA4QAAALAEAFQAFAEAKAAIAUAAIAAAOg");
	this.shape_796.setTransform(435.5,650.1);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#0071BC").s().p("AgaAoQgNgOAAgaQAAgYANgPQAOgPAXAAIAPACIAOAGIAAASQgHgGgHgCQgGgDgJAAQgPAAgJAKQgIAKAAATQAAAUAIAKQAJAKAPAAQAIAAAIgCQAHgDAGgGIAAASQgGADgIADQgGACgJAAQgXAAgOgPg");
	this.shape_797.setTransform(424.475,651.575);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#0071BC").s().p("AAXA1IAAg/QAAgPgFgGQgFgGgLgBQgKABgHAIQgHAJAAAQIAAA5IgRAAIAAhnIARAAIAAAQQAEgIAJgGQAIgFAJAAQAQAAAIALQAIALAAAVIAAA/g");
	this.shape_798.setTransform(412.925,651.45);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#0071BC").s().p("AgfArQgIgLAAgVIAAg/IARAAIAAA/QAAAOAFAHQAFAGALAAQALAAAGgIQAGgIAAgRIAAg5IASAAIAABnIgSAAIAAgQQgFAJgHAFQgIAEgJAAQgQAAgIgKg");
	this.shape_799.setTransform(401.475,651.725);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#0071BC").s().p("AgMBIIAAhaIgcAAIAAgNIAcAAIAAgHQAAgRAIgJQAHgIARAAIAUAAIAAAPIgTAAQgJAAgEADQgDAEgBAKIAAAJIAkAAIAAANIgkAAIAABag");
	this.shape_800.setTransform(390.05,649.55);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#FFFFFF").s().p("AgnBXIAAgNIAHAAQANAAAEgFQADgDAAgOIAAgTQAAgQAHgGQAGgGASgCQgSgDgGgEQgHgHAAgQIAAgYQAAgOgDgEQgFgEgMAAIgHAAIAAgNIAGAAQAXAAAIAHQAHAHAAAUIAAAYQAAAMAFAGQAFAHANAAIAMAAIAAAMIgMAAQgMAAgFAHQgGAIAAAKIAAASQAAAVgHAHQgIAHgXAAg");
	this.shape_801.setTransform(390.225,573.55);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#FFFFFF").s().p("AgUBVQAMgWAGgVQAFgVAAgVQAAgUgFgWQgGgVgMgVIAOAAQAOAXAHAUQAGAWABATQgBAUgGAWQgHAVgOAWg");
	this.shape_802.setTransform(928.85,550.65);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#FFFFFF").s().p("AgTBVIAAgNIAWAAIAAiPIgWAAIAAgNIAnAAIAACpg");
	this.shape_803.setTransform(916.725,550.65);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAiAAIAAhMIgcAAIAAgOIArAAIAABaIAiAAIAAANgAgHgyIAAgVIAPAAIAAAVg");
	this.shape_804.setTransform(907,550.35);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#FFFFFF").s().p("AgTBVIAAipIAnAAIAAANIgWAAIAACPIAWAAIAAANg");
	this.shape_805.setTransform(896.275,550.65);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#FFFFFF").s().p("AgiBFIAAgPIAdAAIAAhoIgjARIAAgTIAjgQIASAAIAAB6IAcAAIAAAPg");
	this.shape_806.setTransform(883.625,550.625);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#FFFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_807.setTransform(871.8,560.125);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#FFFFFF").s().p("AAVBDQgUAAgGgIQgIgHAAgTIAAg4IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA4QAAALAFAFQAEAEAKAAIAUAAIAAAOg");
	this.shape_808.setTransform(860.05,550.875);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#FFFFFF").s().p("AgTA1IgSgFIAAgSQAKAGAIACQAKACAHAAQAKAAAGgEQAHgFAAgIQgBgMgVgFIgBAAIgHgBQgPgDgGgGQgHgGAAgNQABgPAJgIQAKgIATAAQAIAAAHACIAPAEIAAARQgGgEgIgCQgJgDgGAAQgLAAgFAEQgHAEAAAIQABAHAEADQAEAEAQADIAHABQAMACAHAHQAHAHAAAMQAAAQgLAIQgLAJgTAAQgIAAgIgCg");
	this.shape_809.setTransform(848.95,552.375);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#FFFFFF").s().p("AgpBIIAAgNIAiAAIAAhMIgbAAIAAgOIAqAAIAABaIAiAAIAAANgAgHgyIAAgVIAPAAIAAAVg");
	this.shape_810.setTransform(838.15,550.35);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#FFFFFF").s().p("AATBIQgQAAgHgJQgIgJAAgTIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAHQAEAFAJAAIAUAAIAAAOg");
	this.shape_811.setTransform(826.525,550.3);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#FFFFFF").s().p("AgTAgIALgnIAAgZIAcAAIAAAZIgUAng");
	this.shape_812.setTransform(802.325,557.45);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#C69C6D").s().p("AgJAdIAAg5IAUAAIAAA5g");
	this.shape_813.setTransform(791.65,545.95);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#C69C6D").s().p("AgwAeIAAgQIBhAAIAAAQgAgwgNIAAgQIBhAAIAAAQg");
	this.shape_814.setTransform(768.575,551.525);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#C69C6D").s().p("AgJAdIAAg5IATAAIAAA5g");
	this.shape_815.setTransform(745.75,545.95);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#FFFFFF").s().p("AgSAgIAKgnIAAgZIAbAAIAAAZIgTAng");
	this.shape_816.setTransform(722,557.45);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAjAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_817.setTransform(711.95,550.35);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#FFFFFF").s().p("AgTAgIALgnIAAgZIAcAAIAAAZIgUAng");
	this.shape_818.setTransform(687.575,557.45);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#C69C6D").s().p("AgJAdIAAg5IAUAAIAAA5g");
	this.shape_819.setTransform(676.9,545.95);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#C69C6D").s().p("AAgA1IAAg6QAAgWgCgGQgDgFgGAAQgIAAgCAGQgDAGAAAVIAAA6IgPAAIAAg6QAAgWgCgGQgDgFgHAAQgHAAgCAGQgDAGAAAVIAAA6IgQAAIAAhnIAQAAIAAAJQACgEAGgEQAEgDAGAAQAHAAAFADQAEAEACAGQADgHAFgDQAFgDAHAAQANAAAFAJQAFAKAAAbIAAA7g");
	this.shape_820.setTransform(653.875,552.225);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#C69C6D").s().p("AgfAoQgPgOAAgaQAAgYAOgPQAOgPAVAAQAUAAALAOQAMANABATIAAAIIhKAAIAAAAQAAAWAIAJQAKAJAOAAQAIAAAJgDQAKgCAJgFIAAARIgSAGIgSACQgXAAgNgPgAgSgfQgHAIgBAKIA4AAQgCgLgGgHQgHgIgNAAQgMAAgIAIg");
	this.shape_821.setTransform(642.4,552.375);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#C69C6D").s().p("AAVBDQgUAAgGgIQgIgHAAgTIAAg4IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA4QAAALAFAFQAEAEALAAIATAAIAAAOg");
	this.shape_822.setTransform(630.55,550.875);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#C69C6D").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAiAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_823.setTransform(620.15,550.35);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#C69C6D").s().p("AAVBDQgTAAgHgIQgIgHAAgTIAAg4IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA4QAAALAEAFQAFAEAKAAIAUAAIAAAOg");
	this.shape_824.setTransform(596.15,550.875);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#C69C6D").s().p("AgTA1IgSgFIAAgSQAIAFAKADQAKACAHAAQAKAAAHgEQAFgFABgIQgBgMgVgFIgBAAIgHgBQgOgDgHgGQgHgHAAgMQAAgOAKgJQAKgIASAAQAJAAAHACIAQAEIAAARIgPgGQgJgDgGAAQgLAAgFAEQgHAEABAIQAAAHAEADQAEAEAQADIAHABQAMACAIAHQAGAIAAALQAAAPgLAJQgLAJgSAAQgJAAgIgCg");
	this.shape_825.setTransform(585.05,552.375);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#C69C6D").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAjAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_826.setTransform(574.25,550.35);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#C69C6D").s().p("AgqBFIAAiJIATAAIAAB6IBCAAIAAAPg");
	this.shape_827.setTransform(562.6,550.6);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#C69C6D").s().p("AgKAdIAAg5IAVAAIAAA5g");
	this.shape_828.setTransform(550.7,545.95);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#FFFFFF").s().p("AAGBVQgNgYgGgTQgHgUAAgWQAAgWAHgTQAGgTANgYIAPAAQgNAYgFASQgFAWAAAUQAAAVAFAWQAFASANAYg");
	this.shape_829.setTransform(539.175,550.65);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#F9EB70").s().p("AgPBJIgPgEIAAgRQAIAEAIACIAOACQANAAAGgHQAGgIAAgQIAAgNQgDAIgIAFQgGAFgKAAQgSAAgLgPQgLgPAAgXQAAgYALgPQALgPASAAQAKAAAGAEQAHAEAEAJIAAgOIASAAIAABgQAAAXgMANQgKAMgVAAgAgRgwQgHAJAAAUQAAATAHAJQAGAKAMAAQAMAAAGgKQAGgJAAgTQAAgTgGgKQgHgKgLAAQgLAAgHAKg");
	this.shape_830.setTransform(527.325,554.275);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#F9EB70").s().p("AggApQgLgOAAgbQAAgaALgOQALgOAVAAQAWAAALAOQAMAPAAAZQAAAbgMAOQgLAOgWAAQgVAAgLgOgAgTgdQgGAKAAATQAAAUAGAKQAHAKAMAAQANAAAHgKQAGgKABgUQgBgSgGgLQgHgKgNAAQgMAAgHAKg");
	this.shape_831.setTransform(516.15,552.375);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#F9EB70").s().p("AATBIQgQAAgHgJQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAHQAEAFAJAAIAUAAIAAAOg");
	this.shape_832.setTransform(505.225,550.3);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#FFFFFF").s().p("AgPATIAAglIAfAAIAAAlg");
	this.shape_833.setTransform(492.725,555.675);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#0BFFFF").s().p("AggAoQgNgPAAgZQAAgYANgPQANgPAWAAQATAAAMAOQAMANAAATIAAAIIhJAAIAAAAQgBAWAJAJQAKAJAOAAQAJAAAJgDQAJgCAKgFIAAARIgTAGIgSACQgXAAgOgPgAgRgfQgJAIAAAKIA3AAQgBgLgHgHQgGgIgNAAQgMAAgHAIg");
	this.shape_834.setTransform(481.775,552.375);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#0BFFFF").s().p("AATBIQgQAAgHgJQgIgJAAgTIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAHQAEAFAJAAIAUAAIAAAOg");
	this.shape_835.setTransform(470.825,550.3);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#0BFFFF").s().p("AggApQgMgPAAgaQAAgZAMgPQALgOAVAAQAVAAAMAOQAMAPAAAZQAAAagMAPQgLAOgWAAQgVAAgLgOgAgTgdQgGAKAAATQAAAUAGAKQAHAKAMAAQANAAAHgKQAGgKAAgUQAAgTgGgKQgHgKgNAAQgMAAgHAKg");
	this.shape_836.setTransform(458.775,552.375);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#0BFFFF").s().p("AgTA1IgSgFIAAgSQAKAGAIACQAKACAHAAQAKAAAHgEQAFgFABgIQgBgMgVgFIgBAAIgHgBQgOgDgHgGQgGgGgBgNQAAgPAKgIQAKgIASAAQAJAAAHACIAQAEIAAARQgHgEgIgCQgJgDgGAAQgLAAgFAEQgHAEAAAIQABAHAEADQAFAEAPADIAHABQAMACAIAHQAGAHAAAMQAAAQgLAIQgLAJgSAAQgJAAgIgCg");
	this.shape_837.setTransform(447.35,552.375);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#0BFFFF").s().p("AAXA1IAAg/QAAgOgFgHQgFgGgLAAQgLAAgGAIQgHAJAAAPIAAA6IgRAAIAAhnIARAAIAAAQQAFgJAIgFQAHgEAKAAQAQAAAIAKQAIALAAAVIAAA/g");
	this.shape_838.setTransform(435.875,552.225);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#0BFFFF").s().p("AggApQgLgOAAgbQAAgaALgOQALgOAVAAQAWAAALAOQAMAOAAAaQAAAbgMAOQgLAOgWAAQgVAAgLgOgAgTgdQgGALAAASQAAATAGALQAHAKAMAAQANAAAHgKQAHgKAAgUQAAgTgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_839.setTransform(424.35,552.375);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#0BFFFF").s().p("AgaAoQgNgPAAgZQAAgZANgOQAOgPAXAAQAJAAAGACQAIACAGAEIAAASQgGgGgHgDQgIgCgIAAQgPAAgIAKQgJALAAASQAAATAJALQAIAKAPAAQAKAAAGgDQAIgDAFgFIAAASQgHAEgHACIgPACQgWAAgPgPg");
	this.shape_840.setTransform(412.975,552.375);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#FFFFFF").s().p("AAiBXQgYAAgHgHQgHgGAAgVIAAgTQAAgKgGgIQgFgHgMAAIgMAAIAAgMIAMAAQANAAAFgHQAFgGAAgMIAAgYQAAgUAHgHQAHgHAYAAIAGAAIAAANIgHAAQgNABgEADQgEAFAAAMIAAAZQAAARgGAGQgGAEgSACQASADAGAGQAGAGAAAQIAAAUQAAANAEAEQAEADANAAIAHAAIAAAOg");
	this.shape_841.setTransform(848.775,527.8);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#FFFFFF").s().p("AgUBVQANgXAFgUQAFgVAAgVQAAgVgFgVQgGgTgMgXIAPAAQAMAVAIAWQAGAUAAAVQAAAVgGAVQgHAUgNAXg");
	this.shape_842.setTransform(825.575,527.8);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#FF931D").s().p("AgHAxIAAgpIgpAAIAAgPIApAAIAAgpIAPAAIAAApIApAAIAAAPIgpAAIAAApg");
	this.shape_843.setTransform(814.675,528.65);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#FF931D").s().p("AgHAxIAAgpIgpAAIAAgPIApAAIAAgpIAPAAIAAApIApAAIAAAPIgpAAIAAApg");
	this.shape_844.setTransform(803.175,528.65);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAiAAIAAhMIgbAAIAAgOIAqAAIAABaIAiAAIAAANgAgHgyIAAgVIAPAAIAAAVg");
	this.shape_845.setTransform(792.25,527.475);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#FFFFFF").s().p("AgSBBIAJgjIAAgZIAcAAIAAAZIgSAjgAgKgfIAAghIAcAAIAAAhg");
	this.shape_846.setTransform(767.95,530.825);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#0BFFFF").s().p("AAWBIIAAhAQAAgNgEgHQgGgGgKgBQgLAAgGAJQgHAIAAAQIAAA6IgRAAIAAiQIARAAIAAA5QAFgJAIgFQAHgEAKgBQAQAAAIALQAIAKAAAVIAABAg");
	this.shape_847.setTransform(757.175,527.45);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#0BFFFF").s().p("AAVBDQgUAAgGgIQgIgIAAgTIAAg3IgcAAIAAgOIAcAAIAAgdIAQAAIAAAdIAnAAIAAAOIgnAAIAAA3QAAAMAFAFQAFAEAJAAIAUAAIAAAOg");
	this.shape_848.setTransform(745.3,528);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#0BFFFF").s().p("AgPBIIgPgDIAAgRIARAGQAGACAHAAQANAAAGgIQAHgGAAgSIAAgLQgEAIgHAEQgIAFgJAAQgSAAgLgPQgLgOAAgYQAAgZALgOQAMgPARAAQAJAAAHAEQAHAEAFAJIAAgOIARAAIAABgQAAAXgLANQgLAMgVAAgAgRgwQgHAKAAATQAAATAHAJQAHAKALAAQAMAAAGgKQAHgJAAgTQAAgUgHgJQgGgKgMAAQgMAAgGAKg");
	this.shape_849.setTransform(733.825,531.4);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#0BFFFF").s().p("AAXA1IAAg/QAAgOgFgHQgFgGgLgBQgKAAgHAJQgHAKAAAPIAAA5IgRAAIAAhnIARAAIAAAQQAFgJAIgFQAIgEAJgBQAQAAAIALQAIAKAAAWIAAA/g");
	this.shape_850.setTransform(722.725,529.35);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#0BFFFF").s().p("AgfAoQgPgOAAgaQAAgYAOgPQAOgPAVAAQAUAAALAOQAMANABAUIAAAHIhKAAIAAAAQAAAVAIAKQAKAJAOAAQAIAAAKgCQAHgCALgGIAAARQgKAEgIACQgIACgKAAQgYAAgMgPgAgSgfQgHAJgBAKIA4gBQgCgKgGgIQgIgIgMAAQgLAAgJAIg");
	this.shape_851.setTransform(711.25,529.475);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#0BFFFF").s().p("AATBJQgPAAgIgKQgJgKAAgSIAAhdIgbAAIAAgOIAsAAIAABrQAAALAEAGQAEAGAIAAIAUAAIAAAPg");
	this.shape_852.setTransform(700.3,527.425);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#FFFFFF").s().p("AgPATIAAglIAfAAIAAAlg");
	this.shape_853.setTransform(687.775,532.825);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#0BFFFF").s().p("AgjBFIAAgQIAeAAIAAhoIgjARIAAgSIAigQIASAAIAAB5IAdAAIAAAQg");
	this.shape_854.setTransform(677.125,527.775);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_855.setTransform(665.25,537.25);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#0BFFFF").s().p("AAVBDQgUAAgGgIQgIgIAAgTIAAg3IgcAAIAAgOIAcAAIAAgdIAQAAIAAAdIAnAAIAAAOIgnAAIAAA3QAAAMAFAFQAEAEALAAIATAAIAAAOg");
	this.shape_856.setTransform(653.5,528);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#0BFFFF").s().p("AgTA1QgJgBgJgEIAAgRIASAHQAJADAIAAQALAAAFgFQAHgFAAgIQAAgMgWgEIgBgBIgGgBQgOgDgIgGQgHgGAAgMQABgPAJgIQALgJASAAQAIAAAHACIAQAFIAAAQQgGgEgJgCQgHgCgIAAQgKAAgGAEQgHAEAAAHQAAAHAFADQAEADAQAEIAHABQAOADAFAGQAHAHAAAMQAAAPgLAJQgLAJgTAAIgQgCg");
	this.shape_857.setTransform(642.4,529.475);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAiAAIAAhMIgbAAIAAgOIAqAAIAABaIAiAAIAAANgAgHgyIAAgVIAPAAIAAAVg");
	this.shape_858.setTransform(631.6,527.475);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#0BFFFF").s().p("AATBJQgPAAgIgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAGQAEAGAJAAIAUAAIAAAPg");
	this.shape_859.setTransform(619.975,527.425);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#FF931D").s().p("AgwAIIAAgPIBhgnIAAARIhOAdIBOAeIAAARg");
	this.shape_860.setTransform(596.475,528.725);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAjAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_861.setTransform(574.25,527.475);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#FFFFFF").s().p("AgSBBIAJgjIAAgZIAcAAIAAAZIgSAjgAgKgfIAAghIAcAAIAAAhg");
	this.shape_862.setTransform(549.925,530.825);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#FF931D").s().p("AghA2QgLgRAAglQAAgjALgSQAMgSAVAAQAXAAAKASQAMATAAAiQAAAjgMATQgKASgXAAQgVAAgMgSgAgTAqQAHAPAMAAQANAAAHgOQAGgNAAgeQAAgPgCgMgAgSgqQgHAOAAAcQAAANABAMIArhFQgHgMgMAAQgNAAgFAOg");
	this.shape_863.setTransform(539.1,527.775);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#FF931D").s().p("AgwAeIAAgQIBhAAIAAAQgAgwgNIAAgQIBhAAIAAAQg");
	this.shape_864.setTransform(516.15,528.625);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#0BFFFF").s().p("AgqBIIAAgNIAiAAIAAhMIgaAAIAAgOIArAAIAABaIAiAAIAAANgAgIgyIAAgVIARAAIAAAVg");
	this.shape_865.setTransform(493.925,527.475);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#0071BC").s().p("AAVBDQgTAAgHgIQgIgIAAgTIAAg3IgcAAIAAgOIAcAAIAAgdIAQAAIAAAdIAnAAIAAAOIgnAAIAAA3QAAAMAEAFQAFAEALAAIATAAIAAAOg");
	this.shape_866.setTransform(469.925,528);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#0071BC").s().p("AggAoQgNgOAAgaQAAgXANgQQANgPAWAAQATAAAMAOQAMANAAAUIAAAHIhJAAIAAAAQAAAWAIAJQAJAJAPAAQAIAAAKgCIATgIIAAARQgKAEgJACQgIACgKAAQgYAAgNgPgAgRgfQgJAJAAAKIA3gBQgBgKgHgIQgHgIgMAAQgMAAgHAIg");
	this.shape_867.setTransform(458.825,529.475);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#0071BC").s().p("AATBJQgPAAgIgKQgIgJAAgTIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAGQAEAGAJAAIAUAAIAAAPg");
	this.shape_868.setTransform(447.875,527.425);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#FFFFFF").s().p("AAHBVQgNgXgIgUQgGgXAAgTQAAgTAGgWQAIgWANgVIAOAAQgLAUgHAWQgFAVAAAVQAAAVAFAVQAGAVAMAWg");
	this.shape_869.setTransform(435.9,527.8);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#0071BC").s().p("AgkA1IAAhnIASAAIAAAVQADgLAJgHQAJgFAMgBQAGABAGACIAKAEIAAARIgLgGQgFgCgIAAQgOABgJAJQgIAKAAATIAAAzg");
	this.shape_870.setTransform(414.2,529.35);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#0071BC").s().p("AggApQgLgNAAgcQAAgaALgOQALgOAVAAQAWAAALAOQAMAOAAAaQAAAcgMANQgLAOgWAAQgVAAgLgOgAgSgdQgIAKABATQgBATAIALQAFAKANAAQANAAAHgKQAHgKAAgUQAAgTgHgKQgGgKgOAAQgNAAgFAKg");
	this.shape_871.setTransform(401.4,529.475);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#0071BC").s().p("AgMBIIAAhaIgcAAIAAgNIAcAAIAAgHQAAgRAIgJQAIgHAQgBIAUAAIAAAPIgTAAQgJAAgEADQgDAEgBAKIAAAJIAkAAIAAANIgkAAIAABag");
	this.shape_872.setTransform(390.05,527.45);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#FFFFFF").s().p("AgnBXIAAgNIAHAAQAMAAAFgEQADgEAAgOIAAgTQAAgQAHgGQAGgGASgCQgTgDgFgFQgHgFAAgRIAAgYQAAgOgDgEQgFgEgMAAIgHAAIAAgNIAGAAQAXAAAIAHQAHAHAAAUIAAAYQAAAMAFAHQAGAGAMAAIAMAAIAAAMIgMAAQgMAAgFAIQgGAHAAAKIAAATQAAAVgHAGQgIAHgXAAg");
	this.shape_873.setTransform(390.225,441.075);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#FFFFFF").s().p("AgSBBIAJgjIAAgZIAcAAIAAAZIgSAjgAgKgfIAAghIAcAAIAAAhg");
	this.shape_874.setTransform(905.625,421.225);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#FFFFFF").s().p("AgUBVQAMgWAGgVQAFgVAAgVQAAgUgFgVQgGgUgMgXIAPAAQAMAWAIAVQAGAUAAAVQAAAWgGAUQgHAUgNAXg");
	this.shape_875.setTransform(894.425,418.175);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#C69C6D").s().p("AgJAdIAAg5IATAAIAAA5g");
	this.shape_876.setTransform(883.45,413.5);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#C69C6D").s().p("AgPATIAAglIAfAAIAAAlg");
	this.shape_877.setTransform(871.375,423.225);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#C69C6D").s().p("AATBJQgPAAgIgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAGQAFAGAIAAIAUAAIAAAPg");
	this.shape_878.setTransform(860.925,417.825);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#C69C6D").s().p("AghAuQgJgJAAgPQAAgSALgIQAMgJAWAAIAXAAIAAgCQAAgNgGgFQgHgGgNAAQgHAAgKACQgKADgHAFIAAgRIASgGIAQgCQAMAAAKAEQAJAEAGAIQADAEABAHQACAHAAAOIAAA6IgRAAIAAgPQgFAJgJAEQgIAFgLAAQgPAAgLgJgAgRAFQgIAGAAAKQAAAJAGAFQAFAGAKAAQAOAAAIgKQAIgKAAgRIAAgEIgWAAQgOAAgHAFg");
	this.shape_879.setTransform(848.7,419.875);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#C69C6D").s().p("AgfArQgIgKAAgWIAAg/IARAAIAAA/QAAANAFAIQAFAGALAAQALAAAGgIQAHgIAAgQIAAg6IARAAIAABnIgRAAIAAgQQgFAJgIAFQgHAEgKAAQgQAAgIgKg");
	this.shape_880.setTransform(837.475,420.025);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#C69C6D").s().p("AAZBJIAAg1QgDAHgIAFQgIAEgIAAQgSAAgLgOQgLgOAAgZQAAgaALgPQALgOASAAQAJAAAHAEQAHAEAEAIIAAgOIASAAIAACPgAgRgwQgHAKAAAVQAAATAHAKQAGAKALAAQANAAAGgKQAGgKAAgTQAAgVgGgJQgGgLgNAAQgLAAgGAKg");
	this.shape_881.setTransform(825.775,421.775);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#C69C6D").s().p("AggAoQgNgOAAgaQAAgXANgQQANgPAWAAQATAAAMAOQAMANAAATIAAAIIhJAAIAAAAQAAAWAIAJQAJAJAPAAQAIAAAKgCIATgIIAAARQgKAEgJACQgIACgKAAQgYAAgNgPgAgRgfQgJAJAAAKIA3gBQgBgKgHgIQgHgIgMAAQgMAAgHAIg");
	this.shape_882.setTransform(814.525,419.875);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#C69C6D").s().p("AAVBDQgUAAgGgIQgIgIAAgTIAAg3IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA3QAAAMAFAEQAEAFAKAAIAUAAIAAAOg");
	this.shape_883.setTransform(791.2,418.4);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#C69C6D").s().p("AggApQgMgNAAgcQAAgaAMgOQAMgOAUAAQAVAAAMAOQAMAOAAAaQAAAcgMANQgLAOgWAAQgVAAgLgOgAgTgdQgGALgBASQABATAGALQAHAKAMAAQANAAAHgKQAGgKABgUQgBgTgGgKQgHgKgNAAQgMAAgHAKg");
	this.shape_884.setTransform(780.05,419.875);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#C69C6D").s().p("AAXA2IAAhAQAAgPgFgGQgFgHgLABQgKgBgHAJQgHAKAAAOIAAA7IgRAAIAAhoIARAAIAAAQQAFgIAIgGQAIgEAJAAQAQAAAIAKQAIAKAAAWIAABAg");
	this.shape_885.setTransform(768.625,419.75);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#C69C6D").s().p("AggAoQgNgOAAgaQAAgYANgPQANgPAWAAQATAAAMAOQAMANAAATIAAAIIhJAAIAAAAQAAAWAIAJQAJAJAPAAQAIAAAKgCQAGgCANgGIAAARQgKAEgJACQgIACgKAAQgYAAgNgPgAgRgfQgJAJAAAKIA3gBQAAgJgIgJQgHgIgMAAQgMAAgHAIg");
	this.shape_886.setTransform(745.675,419.875);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#C69C6D").s().p("AgkA2IAAhoIARAAIAAAUQAFgKAIgGQAIgHANABQAHAAAEABQAGACAFADIAAASQgGgFgFgBQgGgCgHAAQgPAAgIAKQgJALAAAQIAAA1g");
	this.shape_887.setTransform(735.475,419.75);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#C69C6D").s().p("AggAuQgKgJAAgPQAAgSALgIQANgJAVAAIAXAAIAAgCQgBgNgFgFQgHgGgNAAQgHAAgKACQgKADgHAFIAAgRIASgGIAQgCQAMAAAKAEQAIAEAHAIQADAEABAHQACAHAAAOIAAA6IgRAAIAAgPQgHAKgHADQgIAFgLAAQgRAAgIgJgAgSAFQgHAGAAAKQAAAJAFAFQAHAGAJAAQANAAAIgKQAIgJABgSIAAgEIgWAAQgOAAgIAFg");
	this.shape_888.setTransform(722.5,419.875);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#C69C6D").s().p("AgTA1QgKgBgIgEIAAgRIASAHQAKADAHAAQAKAAAHgFQAFgFABgIQAAgMgXgEIAAgBIgHgBQgOgDgHgGQgHgHAAgLQAAgPAKgIQALgJARAAQAJAAAHACIAQAFIAAAQQgHgEgJgCQgGgCgIAAQgKAAgHAEQgFAEAAAHQgBAHAEADQAFADAQAEIAHABQAOADAFAGQAHAHAAAMQAAAPgLAJQgMAJgRAAg");
	this.shape_889.setTransform(699.8,419.875);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#C69C6D").s().p("AgfAoQgPgOAAgaQAAgYAOgPQAOgPAVAAQAUAAALAOQAMANABATIAAAIIhKAAIAAAAQAAAWAIAJQAKAJAOAAQAIAAAJgCQAIgCALgGIAAARQgKAEgIACQgIACgKAAQgYAAgMgPgAgSgfQgHAJgBAKIA4gBQgCgKgGgIQgIgIgMAAQgLAAgJAIg");
	this.shape_890.setTransform(688.3,419.875);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#C69C6D").s().p("AATBJQgPAAgIgKQgJgKAAgSIAAhdIgbAAIAAgOIAsAAIAABrQAAALAEAGQAFAGAHAAIAUAAIAAAPg");
	this.shape_891.setTransform(677.35,417.825);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#C69C6D").s().p("AgNBGQgIgEgDgIIAAANIgSAAIAAiQIASAAIAAA2QADgHAIgEQAHgFAJAAQASAAALAPQALAPAAAYQAAAZgLAPQgLAPgTAAQgJAAgGgEgAgSgKQgGAKAAATQAAAUAGAKQAHAKALAAQAMAAAHgKQAGgKAAgUQAAgTgGgKQgHgKgMAAQgLAAgHAKg");
	this.shape_892.setTransform(665.625,417.975);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#C69C6D").s().p("AggAuQgKgJAAgPQAAgSALgIQANgJAVAAIAXAAIAAgCQAAgNgGgFQgHgGgNAAQgHAAgKACQgKADgHAFIAAgRIASgGIAQgCQAMAAAKAEQAIADAHAJQADAEABAHQACAHAAAOIAAA6IgRAAIAAgPQgHAKgHADQgIAFgLAAQgRAAgIgJgAgSAFQgHAGAAAKQAAAJAFAFQAHAGAKAAQAMAAAIgKQAJgKAAgRIAAgEIgWAAQgOAAgIAFg");
	this.shape_893.setTransform(653.65,419.875);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#C69C6D").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAiAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_894.setTransform(643.1,417.875);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#C69C6D").s().p("AgkA2IAAhoIARAAIAAAUQAFgLAIgFQAJgHAMABQAHAAAEABIALAFIAAASIgLgGQgGgCgGAAQgQAAgIAKQgIAJgBASIAAA1g");
	this.shape_895.setTransform(632.2,419.75);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#C69C6D").s().p("AghAuQgJgKAAgOQAAgSAMgIQALgJAWAAIAXAAIAAgCQAAgNgGgFQgHgGgNAAQgHAAgKACIgRAIIAAgRQAKgEAIgCIAQgCQAMAAAKAEQAIAEAHAIQADAFACAGQABAHAAAOIAAA6IgRAAIAAgPQgGAKgIADQgJAFgKAAQgQAAgKgJgAgRAFQgIAGAAAKQAAAJAGAFQAFAGAKAAQANAAAJgKQAIgKAAgRIAAgEIgWAAQgNAAgIAFg");
	this.shape_896.setTransform(619.225,419.875);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#C69C6D").s().p("AgKA0IglhnIARAAIAeBWIAehWIASAAIglBng");
	this.shape_897.setTransform(607.95,419.875);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#C69C6D").s().p("AggAoQgOgOAAgaQAAgYAOgPQANgPAWAAQAUAAALAOQAMAOAAASIAAAIIhJAAIAAAAQAAAVAIAKQAJAJAQAAQAGAAALgCQAFgCAOgGIAAARQgKAEgJACQgJACgJAAQgXAAgOgPgAgSgfQgIAJgBAKIA4gBQgBgKgGgIQgIgIgMAAQgLAAgJAIg");
	this.shape_898.setTransform(585.05,419.875);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#C69C6D").s().p("AAXBJIAAhBQAAgNgFgHQgGgHgKABQgKgBgHAJQgHAJAAAOIAAA8IgRAAIAAiQIARAAIAAA4QAFgJAIgFQAHgEAKAAQAQAAAIAKQAIAKAAAVIAABBg");
	this.shape_899.setTransform(573.575,417.85);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#C69C6D").s().p("AAVBDQgUAAgGgIQgIgIAAgTIAAg3IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA3QAAAMAFAEQAEAFALAAIATAAIAAAOg");
	this.shape_900.setTransform(561.7,418.4);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#C69C6D").s().p("AgKAdIAAg5IAVAAIAAA5g");
	this.shape_901.setTransform(550.7,413.5);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#FFFFFF").s().p("AAGBVQgNgXgGgUQgHgUAAgWQAAgVAHgUQAGgUANgXIAPAAQgNAXgFAUQgFAVAAAUQAAAVAFAVQAFAUANAXg");
	this.shape_902.setTransform(539.175,418.175);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#F9EB70").s().p("AgeBFIAAgRIAQAGQAHACAHAAQANAAAGgIQAGgHAAgQIAAgNQgDAIgIAGQgHADgJAAQgSAAgLgOQgLgOAAgYQAAgYALgPQALgPASAAQAIAAAIAEQAHAFAEAHIAAgNIASAAIAABgQAAAXgMANQgKAMgVAAgAgRgxQgHAKAAAUQAAATAHAKQAHAJALABQALgBAHgJQAGgKAAgTQAAgTgGgLQgHgKgLAAQgLAAgHAKg");
	this.shape_903.setTransform(527.325,421.8);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#F9EB70").s().p("AggApQgLgNAAgcQAAgaALgOQALgOAVAAQAWAAALAOQAMAPAAAZQAAAcgMANQgLAOgWAAQgVAAgLgOgAgTgdQgGAKAAATQAAAUAGAKQAHAKAMAAQANAAAHgKQAGgLABgTQgBgTgGgKQgHgKgNAAQgMAAgHAKg");
	this.shape_904.setTransform(516.15,419.875);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#F9EB70").s().p("AATBJQgPAAgIgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAGQAFAGAIAAIAUAAIAAAPg");
	this.shape_905.setTransform(505.225,417.825);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#FFFFFF").s().p("AgPATIAAglIAfAAIAAAlg");
	this.shape_906.setTransform(492.725,423.225);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#0BFFFF").s().p("AggAoQgNgOAAgaQAAgXANgQQANgPAWAAQATAAAMAOQAMANAAATIAAAIIhJAAIAAAAQAAAWAIAJQAJAJAPAAQAIAAAKgCIATgIIAAARQgKAEgJACQgIACgKAAQgYAAgNgPgAgRgfQgJAJAAAKIA3gBQgBgKgHgIQgHgIgMAAQgMAAgHAIg");
	this.shape_907.setTransform(481.775,419.875);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#0BFFFF").s().p("AATBJQgPAAgIgKQgIgJAAgTIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAGQAEAGAJAAIAUAAIAAAPg");
	this.shape_908.setTransform(470.825,417.825);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#0BFFFF").s().p("AggApQgMgOAAgbQAAgZAMgPQALgOAVAAQAVAAAMAOQAMAPAAAZQAAAbgMAOQgLAOgWAAQgVAAgLgOgAgTgdQgGAKAAATQAAAUAGAKQAHAKAMAAQANAAAHgKQAGgKAAgUQAAgTgGgKQgHgKgNAAQgMAAgHAKg");
	this.shape_909.setTransform(458.775,419.875);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#0BFFFF").s().p("AgTA1QgJgBgJgEIAAgRIASAHQAKADAHAAQALAAAGgFQAFgFABgIQgBgMgVgEIgBgBIgHgBQgOgDgHgGQgGgGgBgMQAAgPAKgIQALgJARAAQAJAAAHACIAQAFIAAAQQgHgEgIgCQgHgCgIAAQgLAAgFAEQgHAEAAAHQABAHAEADQADADARAEIAHABQANADAHAGQAGAHAAAMQAAAPgLAJQgMAJgRAAg");
	this.shape_910.setTransform(447.35,419.875);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#0BFFFF").s().p("AAXA2IAAhAQAAgPgFgGQgFgHgLABQgKgBgHAJQgHAKAAAOIAAA7IgRAAIAAhoIARAAIAAAQQAFgIAIgGQAHgEAKAAQAQAAAIAKQAIAKAAAWIAABAg");
	this.shape_911.setTransform(435.875,419.75);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#0BFFFF").s().p("AggApQgLgNAAgcQAAgaALgOQALgOAVAAQAWAAALAOQAMAOAAAaQAAAcgMANQgLAOgWAAQgVAAgLgOgAgTgdQgGALAAASQAAATAGALQAHAKAMAAQANAAAHgKQAHgKAAgUQAAgTgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_912.setTransform(424.35,419.875);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#0BFFFF").s().p("AgaAoQgNgOAAgaQAAgYANgPQAPgPAWAAQAGAAAJACQAIADAGADIAAASQgHgGgGgCQgHgDgJAAQgPAAgIAKQgJALAAASQAAATAJALQAIAKAPAAQAJAAAHgCQAHgDAGgGIAAASQgHAEgHACQgGACgJAAQgXAAgOgPg");
	this.shape_913.setTransform(412.975,419.875);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#FFFFFF").s().p("AAiBXQgXAAgIgHQgHgGAAgVIAAgTQAAgKgGgHQgFgIgMAAIgMAAIAAgMIAMAAQAMAAAGgGQAFgHAAgMIAAgYQAAgVAHgGQAIgHAXAAIAGAAIAAANIgHAAQgMAAgFAEQgEAFAAANIAAAZQAAAQgGAFQgGAGgSACQASABAGAHQAGAGAAAPIAAAUQAAANAEAEQAFAFAMAAIAHAAIAAANg");
	this.shape_914.setTransform(470.125,395.35);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#0071BC").s().p("AgfAoQgOgOgBgaQAAgYAOgPQANgPAWAAQAUAAALAOQALANABATIAAAIIhJAAIAAAAQgBAWAJAJQAKAJAPAAQAGAAALgCQAKgEAJgEIAAARIgTAGQgIACgKAAQgWAAgOgPgAgSgfQgHAHgBALIA3AAQgBgLgGgHQgHgIgNAAQgLAAgJAIg");
	this.shape_915.setTransform(447.35,397.025);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#0071BC").s().p("AgTA1IgSgFIAAgSQAKAGAIACQAIACAJAAQAKAAAGgEQAHgFAAgIQAAgMgWgFIgBAAIgGgBQgPgDgHgGQgGgHgBgLQABgPAJgJQAKgIATAAIAQACIAPAEIAAARQgGgEgJgCQgGgCgJAAQgLAAgFADQgGAEAAAIQAAAGAEAEQAEAEAQADIAIABQAMACAHAHQAGAHAAAMQAAAQgKAIQgLAJgUAAg");
	this.shape_916.setTransform(435.85,397.025);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#0071BC").s().p("AATBIQgQAAgHgJQgIgJAAgTIAAhdIgcAAIAAgOIAsAAIAABrQAAAMAEAFQAEAHAJAAIAUAAIAAANg");
	this.shape_917.setTransform(424.925,394.95);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#0071BC").s().p("AggAoQgNgPAAgZQAAgXANgQQANgPAWAAQATAAAMAOQAMANAAATIAAAIIhJAAIAAAAQgBAWAJAJQAJAJAPAAQAIAAAKgCIATgIIAAARIgTAGQgIACgKAAQgXAAgOgPgAgRgfQgIAIgBAKIA3AAQAAgKgIgIQgGgIgNAAQgMAAgHAIg");
	this.shape_918.setTransform(412.925,397.025);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#FFFFFF").s().p("AgnBXIAAgNIAHAAQAMAAAFgFQADgDAAgOIAAgUQAAgPAHgGQAGgGASgCQgSgCgGgGQgHgGAAgPIAAgZQAAgOgDgEQgFgEgMAAIgHAAIAAgNIAGAAQAXAAAIAHQAHAGAAAVIAAAYQAAAMAFAHQAGAGAMAAIAMAAIAAAMIgMAAQgMAAgFAIQgGAHAAAKIAAATQAAAVgHAGQgIAHgXAAg");
	this.shape_919.setTransform(390.225,395.35);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#FFFFFF").s().p("AgSBBIAJgjIAAgZIAcAAIAAAZIgSAjgAgKgfIAAghIAcAAIAAAhg");
	this.shape_920.setTransform(859.725,375.475);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#FFFFFF").s().p("AgUBVQANgYAFgTQAFgVAAgVQAAgVgFgUQgFgTgNgYIAPAAQAMAWAIAVQAGAUAAAVQAAAWgGAUQgHAUgNAXg");
	this.shape_921.setTransform(848.525,372.45);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#C69C6D").s().p("AgJAdIAAg5IATAAIAAA5g");
	this.shape_922.setTransform(837.55,367.75);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#C69C6D").s().p("AgPATIAAglIAfAAIAAAlg");
	this.shape_923.setTransform(825.475,377.475);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#C69C6D").s().p("AATBJQgPAAgIgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAANAEAEQAFAGAIAAIAUAAIAAAPg");
	this.shape_924.setTransform(815.025,372.075);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#C69C6D").s().p("AggAtQgKgHAAgQQAAgSALgHQAMgKAWAAIAXAAIAAgDQAAgMgGgGQgGgFgOAAQgJAAgIACIgRAIIAAgRIASgGIAQgCQANABAJADQAJAEAGAIQADADABAIQACAHAAANIAAA7IgRAAIAAgQQgFAJgJAGQgJADgKAAQgPABgKgKgAgRAFQgIAGAAAJQAAAKAGAFQAFAGAKAAQAOgBAIgJQAIgLAAgQIAAgEIgWAAQgNAAgIAFg");
	this.shape_925.setTransform(802.8,374.15);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#C69C6D").s().p("AgfArQgIgKAAgWIAAg/IARAAIAAA/QAAAOAFAHQAGAHAKAAQALAAAGgJQAHgIAAgQIAAg6IARAAIAABnIgRAAIAAgQQgFAJgIAFQgHAEgKAAQgQAAgIgKg");
	this.shape_926.setTransform(791.575,374.275);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#C69C6D").s().p("AAZBJIAAg1QgDAHgIAFQgIAEgHAAQgTAAgLgOQgLgOAAgZQAAgaALgOQALgPATAAQAIAAAHAEQAGAEAFAIIAAgOIASAAIAACPgAgRgvQgHAJAAAVQAAATAHAKQAGAKALAAQANAAAGgKQAGgKAAgTQAAgVgGgJQgGgLgNAAQgLAAgGALg");
	this.shape_927.setTransform(779.875,376.025);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#C69C6D").s().p("AggAoQgNgOAAgaQAAgYANgPQANgPAWAAQATAAAMAOQAMAOAAASIAAAIIhJAAIAAAAQAAAVAIAKQAJAJAPAAQAKAAAIgDQAGgBANgHIAAARQgKAFgJABQgIACgKAAQgYAAgNgOgAgRgfQgJAJAAAKIA3AAQAAgLgIgIQgGgIgNAAQgMAAgHAIg");
	this.shape_928.setTransform(768.625,374.15);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#C69C6D").s().p("AggAoQgNgOAAgaQAAgYANgPQANgPAWAAQATAAAMAOQAMAOAAASIAAAIIhJAAIAAAAQAAAVAIAKQAJAJAPAAQAKAAAIgDQAGgBANgHIAAARQgKAFgJABQgIACgKAAQgYAAgNgOgAgRgfQgJAJAAAKIA3AAQAAgLgIgIQgGgIgNAAQgMAAgHAIg");
	this.shape_929.setTransform(745.675,374.15);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#C69C6D").s().p("AgkA1IAAhnIARAAIAAAUQAFgLAIgGQAJgFAMAAQAGAAAFABQAHACAEADIAAASQgFgEgGgDIgNgCQgPAAgIAKQgJALAAARIAAA0g");
	this.shape_930.setTransform(735.475,374.025);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#C69C6D").s().p("AggAtQgKgHAAgQQAAgSALgHQAMgKAWAAIAXAAIAAgDQgBgMgFgGQgGgFgOAAQgJAAgIACQgJACgIAGIAAgRIASgGIAQgCQANABAJADQAIADAHAJQADADABAIQACAHAAANIAAA7IgRAAIAAgQQgGAKgIAFQgJADgKAAQgRABgIgKgAgSAFQgHAGAAAJQAAAJAFAGQAHAGAJAAQANgBAIgJQAIgKABgRIAAgEIgWAAQgOAAgIAFg");
	this.shape_931.setTransform(722.5,374.15);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#C69C6D").s().p("AgTA1QgKgCgIgDIAAgRQAIAFAKACQAKADAHAAQAKAAAHgFQAFgFABgIQAAgMgXgEIAAgBIgHgBQgOgDgHgGQgHgHAAgLQAAgPAKgJQAKgIASAAQAJABAHABIAQAFIAAAQQgKgFgGgBQgIgCgGAAQgKAAgHADQgFAEAAAIQgBAGAEAFQAGAEAPACIAHABQAOADAFAGQAHAIAAALQAAAOgLAKQgLAIgSAAg");
	this.shape_932.setTransform(699.8,374.15);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#C69C6D").s().p("AgfAoQgPgOAAgaQAAgYAOgPQANgPAWAAQAUAAALAOQAMANABATIAAAIIhKAAIAAAAQAAAVAIAKQAKAJAOAAQAKAAAHgDQAIgBALgHIAAARQgKAFgIABQgIACgKAAQgYAAgMgOgAgSgfQgHAJgBAKIA4AAQgCgMgGgHQgHgIgNAAQgMAAgIAIg");
	this.shape_933.setTransform(688.3,374.15);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#C69C6D").s().p("AATBJQgPAAgIgKQgJgKAAgSIAAhdIgbAAIAAgOIAsAAIAABrQAAAMAEAFQAFAGAHAAIAUAAIAAAPg");
	this.shape_934.setTransform(677.35,372.075);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#C69C6D").s().p("AgNBGQgIgEgDgIIAAANIgSAAIAAiQIASAAIAAA2QADgHAIgEQAGgEAKAAQASAAALAOQALAPAAAYQAAAagLAOQgLAPgTAAQgJAAgGgEgAgSgKQgGAKAAATQAAAUAGAKQAGAKAMAAQAMAAAHgKQAGgJAAgVQAAgTgGgKQgHgKgMAAQgMAAgGAKg");
	this.shape_935.setTransform(665.625,372.225);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#C69C6D").s().p("AggAtQgKgHAAgQQAAgSALgHQAMgKAWAAIAXAAIAAgDQAAgMgGgGQgGgFgOAAQgJAAgIACQgJACgIAGIAAgRIASgGIAQgCQANABAJADQAIADAHAJQADADABAIQACAHAAANIAAA7IgRAAIAAgQQgGAKgIAFQgJADgKAAQgRABgIgKgAgSAFQgHAGAAAJQAAAJAFAGQAHAGAKAAQAMgBAIgJQAJgKAAgRIAAgEIgWAAQgOAAgIAFg");
	this.shape_936.setTransform(653.65,374.15);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#C69C6D").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAiAAIAAANgAgIgxIAAgWIAQAAIAAAWg");
	this.shape_937.setTransform(643.1,372.125);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#C69C6D").s().p("AgkA1IAAhnIARAAIAAAUQAFgLAIgGQAJgFAMAAQAGAAAFABQAGACAFADIAAASQgEgEgHgDIgMgCQgQAAgIAKQgIAKgBASIAAA0g");
	this.shape_938.setTransform(632.2,374.025);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#C69C6D").s().p("AghAtQgJgIAAgPQAAgSAMgHQALgKAWAAIAXAAIAAgDQAAgMgGgGQgGgFgOAAQgKAAgHACQgIACgJAGIAAgRIASgGIAQgCQANABAJADQAIADAHAJQADAFACAGQABAHAAANIAAA7IgRAAIAAgQQgFAKgJAFQgJADgKAAQgQABgKgKgAgRAFQgIAGAAAJQAAAKAGAFQAFAGAKAAQANgBAJgJQAIgKAAgRIAAgEIgWAAQgNAAgIAFg");
	this.shape_939.setTransform(619.225,374.15);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#C69C6D").s().p("AgKA0IglhnIARAAIAeBWIAehWIASAAIglBng");
	this.shape_940.setTransform(607.95,374.15);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#C69C6D").s().p("AggAoQgOgOAAgaQAAgYAOgPQANgPAWAAQAUAAALAOQAMAOAAASIAAAIIhJAAIAAAAQAAAVAIAKQAJAJAQAAQAJAAAIgDQAFgBAOgHIAAARQgKAFgJABQgJACgJAAQgXAAgOgOgAgSgfQgIAJgBAKIA4AAQgBgLgGgIQgHgIgNAAQgLAAgJAIg");
	this.shape_941.setTransform(585.05,374.15);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#C69C6D").s().p("AAXBIIAAhAQAAgNgFgHQgGgHgKAAQgKAAgHAJQgHAIAAAQIAAA6IgRAAIAAiQIARAAIAAA5QAFgJAIgFQAHgEAKAAQAQAAAIALQAIAJAAAVIAABAg");
	this.shape_942.setTransform(573.575,372.1);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#C69C6D").s().p("AAVBDQgUAAgGgIQgIgHAAgUIAAg3IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA3QAAAMAFAFQAEAFALgBIATAAIAAAOg");
	this.shape_943.setTransform(561.7,372.65);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#C69C6D").s().p("AgKAdIAAg5IAVAAIAAA5g");
	this.shape_944.setTransform(550.7,367.75);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#FFFFFF").s().p("AAGBVQgNgYgGgTQgHgUAAgWQAAgVAHgUQAGgUANgXIAPAAQgMAWgGAVQgFAUAAAVQAAAVAFAWQAFASANAYg");
	this.shape_945.setTransform(539.175,372.45);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#F9EB70").s().p("AgPBIIgPgDIAAgRQAJAEAHACQAJACAFAAQANAAAGgHQAGgIAAgQIAAgNQgDAIgIAFQgGAFgKAAQgSAAgLgPQgLgOAAgYQAAgZALgOQALgPASAAQAKAAAGAEQAHAEAEAIIAAgNIASAAIAABgQAAAXgMANQgKAMgVAAgAgRgwQgHAJAAAUQAAATAHAJQAHAKALAAQALAAAHgKQAGgJAAgTQAAgTgGgKQgGgKgMAAQgMAAgGAKg");
	this.shape_946.setTransform(527.325,376.075);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#F9EB70").s().p("AggApQgLgNAAgcQAAgaALgNQALgOAVgBQAWABALAOQAMAOAAAZQAAAcgMANQgLAOgWgBQgVABgLgOgAgTgdQgGAJAAAUQAAAUAGAKQAGAKANAAQAOAAAGgKQAGgLABgTQgBgTgGgKQgGgKgOAAQgNAAgGAKg");
	this.shape_947.setTransform(516.15,374.15);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#F9EB70").s().p("AATBJQgPAAgIgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAAMAEAFQAFAGAIAAIAUAAIAAAPg");
	this.shape_948.setTransform(505.225,372.075);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#FFFFFF").s().p("AgPATIAAglIAfAAIAAAlg");
	this.shape_949.setTransform(492.725,377.475);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#0BFFFF").s().p("AggAoQgNgOAAgaQAAgYANgPQANgPAWAAQATAAAMAOQAMAOAAASIAAAIIhJAAIAAAAQAAAVAIAKQAJAJAPAAQAKAAAIgDIATgIIAAARQgKAFgJABQgIACgKAAQgYAAgNgOgAgRgfQgJAJAAAKIA3AAQgBgMgHgHQgGgIgNAAQgMAAgHAIg");
	this.shape_950.setTransform(481.775,374.15);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#0BFFFF").s().p("AATBJQgPAAgIgKQgIgJAAgTIAAhdIgcAAIAAgOIAsAAIAABrQAAAMAEAFQAEAGAJAAIAUAAIAAAPg");
	this.shape_951.setTransform(470.825,372.075);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#0BFFFF").s().p("AggApQgMgOAAgbQAAgZAMgOQALgOAVgBQAVABAMAOQAMAOAAAZQAAAbgMAOQgLAOgWgBQgVABgLgOgAgTgdQgGAJAAAUQAAAUAGAKQAHAKAMAAQANAAAHgKQAGgKAAgUQAAgUgGgJQgHgKgNAAQgMAAgHAKg");
	this.shape_952.setTransform(458.775,374.15);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#0BFFFF").s().p("AgTA1QgJgCgJgDIAAgRQAKAFAIACQAKADAHAAQAKAAAHgFQAFgFABgIQgBgMgVgEIgBgBIgHgBQgPgDgGgGQgGgHgBgLQAAgQAKgIQAKgIASAAQAJABAHABIAQAFIAAAQQgJgFgGgBQgJgCgGAAQgLAAgFADQgHAEAAAIQABAHAEAEQAFADAPADIAHABQANADAHAGQAGAHAAAMQAAAPgLAJQgLAIgSAAg");
	this.shape_953.setTransform(447.35,374.15);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#0BFFFF").s().p("AAXA1IAAg/QAAgPgFgGQgFgHgLAAQgKAAgHAJQgHAKAAAOIAAA6IgRAAIAAhnIARAAIAAAQQAFgJAIgFQAHgEAKAAQAQAAAIAKQAIAKAAAWIAAA/g");
	this.shape_954.setTransform(435.875,374.025);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#0BFFFF").s().p("AggApQgLgNAAgcQAAgaALgNQALgOAVgBQAWABALAOQAMANAAAaQAAAcgMANQgLAOgWgBQgVABgLgOgAgTgdQgGAKAAATQAAASAGAMQAGAKANAAQANAAAHgKQAHgKAAgUQAAgUgHgJQgHgKgNAAQgNAAgGAKg");
	this.shape_955.setTransform(424.35,374.15);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#0BFFFF").s().p("AgaAoQgNgOAAgaQAAgZANgOQAOgPAXAAQAIABAHABQAIADAGADIAAASQgFgFgIgEQgGgCgKAAQgPAAgIAKQgJAKAAATQAAAUAJAJQAIALAPAAQALAAAFgDQAIgDAFgFIAAARQgHAFgHABQgGACgJAAQgXAAgOgOg");
	this.shape_956.setTransform(412.975,374.15);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#FFFFFF").s().p("AAiBXQgXAAgIgHQgHgHAAgVIAAgSQAAgJgGgJQgGgHgMAAIgLAAIAAgMIALAAQAOAAAFgHQAFgFAAgNIAAgYQAAgUAHgIQAHgGAYAAIAGAAIAAANIgHAAQgNAAgEAEQgEAFAAANIAAAYQAAARgGAGQgGAFgSACQASACAGAGQAGAGAAAQIAAATQAAAOAEADQAEAEANABIAHAAIAAANg");
	this.shape_957.setTransform(745.525,349.6);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#FFFFFF").s().p("AgUBVQALgVAHgWQAFgVAAgVQAAgUgFgVQgHgXgLgUIAOAAQANAWAHAVQAHAWAAATQAAAUgHAWQgHAVgNAWg");
	this.shape_958.setTransform(722.325,349.575);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#0BFFFF").s().p("AgpBHIAAgQIAvg0QAJgKAEgIQADgHAAgHQAAgNgHgFQgHgHgLAAQgIAAgKADQgIADgLAGIAAgTIATgHQAIgCAKAAQATAAANALQAMALAAARQABAJgFAJQgEAJgKAKIgsAxIA/AAIAAAQg");
	this.shape_959.setTransform(711.1,349.425);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_960.setTransform(699.7,359.05);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#0BFFFF").s().p("AgfAoQgPgOAAgaQAAgYAOgPQAOgPAVAAQAUAAALAOQAMANABATIAAAIIhKAAIAAAAQAAAWAIAJQAKAJAOAAQAIAAAJgCQAMgEAHgEIAAARIgSAGQgIACgKAAQgXAAgNgPgAgSgfQgHAIgBAKIA4AAQgCgLgGgHQgHgIgNAAQgLAAgJAIg");
	this.shape_961.setTransform(688.3,351.275);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#0BFFFF").s().p("AATBJQgPAAgIgKQgJgKAAgSIAAhdIgbAAIAAgOIAsAAIAABrQAAALAEAGQAFAGAHAAIAUAAIAAAPg");
	this.shape_962.setTransform(677.35,349.225);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#0BFFFF").s().p("AgNBGQgIgEgDgIIAAANIgSAAIAAiQIASAAIAAA2QADgHAIgFQAIgEAIAAQASAAALAPQALAOAAAZQAAAZgLAPQgLAPgTAAQgHAAgIgEgAgSgKQgGAKAAATQAAAUAGAKQAHAKALAAQAMAAAHgKQAGgKAAgUQAAgTgGgKQgHgKgMAAQgLAAgHAKg");
	this.shape_963.setTransform(665.625,349.375);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#0BFFFF").s().p("AggAuQgKgJAAgPQAAgSALgIQANgJAVAAIAXAAIAAgCQAAgMgGgHQgHgFgNAAQgHAAgKACQgMAEgFAEIAAgRIASgGQAIgCAIAAQAMAAAKAEQAIADAHAJQADAEABAHQACAHAAAOIAAA6IgRAAIAAgPQgGAJgIAEQgIAFgLAAQgRAAgIgJgAgSAFQgHAFAAALQAAAJAFAFQAGAFALAAQANAAAHgJQAJgKAAgSIAAgDIgWAAQgOAAgIAFg");
	this.shape_964.setTransform(653.65,351.275);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAiAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_965.setTransform(643.1,349.275);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#0BFFFF").s().p("AgkA2IAAhoIARAAIAAAUQAFgLAIgGQAJgFAMAAQAGAAAFABIALAFIAAARQgFgEgGgBQgGgCgGgBQgQAAgIALQgIAIgBAUIAAA0g");
	this.shape_966.setTransform(632.2,351.15);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#0BFFFF").s().p("AghAuQgJgKAAgOQAAgSAMgIQALgJAWAAIAXAAIAAgCQAAgNgGgGQgHgFgNAAQgHAAgKACQgLAEgGAEIAAgRQAKgEAIgCQAIgCAIAAQAMAAAKAEQAIAEAHAIQADAFACAGQABAHAAAOIAAA6IgRAAIAAgPQgFAJgJAEQgJAFgKAAQgQAAgKgJgAgRAFQgIAFAAALQAAAJAGAFQAFAFAKAAQAOAAAIgJQAIgKAAgSIAAgDIgWAAQgOAAgHAFg");
	this.shape_967.setTransform(619.225,351.275);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#0BFFFF").s().p("AgKA0IglhnIARAAIAeBWIAehWIASAAIglBng");
	this.shape_968.setTransform(607.95,351.275);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#FF931D").s().p("AgwAeIAAgQIBhAAIAAAQgAgwgNIAAgQIBhAAIAAAQg");
	this.shape_969.setTransform(584.975,350.425);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#FF931D").s().p("AgwAeIAAgQIBhAAIAAAQgAgwgNIAAgQIBhAAIAAAQg");
	this.shape_970.setTransform(573.525,350.425);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#FF931D").s().p("AgwAeIAAgQIBhAAIAAAQgAgwgNIAAgQIBhAAIAAAQg");
	this.shape_971.setTransform(562.025,350.425);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#0BFFFF").s().p("AgjBFIAAgQIAeAAIAAhoIgjARIAAgSIAigQIASAAIAAB5IAdAAIAAAQg");
	this.shape_972.setTransform(539.425,349.575);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_973.setTransform(527.575,359.05);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#0BFFFF").s().p("AggAoQgOgPAAgZQAAgYAOgPQANgPAWAAQAUAAALAOQAMAOAAASIAAAIIhJAAIAAAAQgBAWAJAJQAJAJAQAAQAGAAALgCQALgEAIgEIAAARIgTAGQgJACgJAAQgWAAgPgPgAgSgfQgHAHgBALIA3AAQgBgLgGgHQgHgIgNAAQgLAAgJAIg");
	this.shape_974.setTransform(516.2,351.275);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#0BFFFF").s().p("AATBJQgPAAgIgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAGQAFAGAIAAIAUAAIAAAPg");
	this.shape_975.setTransform(505.225,349.225);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#0BFFFF").s().p("AgNBGQgHgEgFgIIAAANIgRAAIAAiQIARAAIAAA2QAFgIAHgEQAIgEAHAAQATAAALAPQALAOAAAZQAAAagLAOQgLAPgTAAQgHAAgIgEgAgSgKQgHAKAAATQAAATAHALQAHAKALAAQAMAAAGgKQAHgKAAgUQAAgTgHgKQgGgKgMAAQgLAAgHAKg");
	this.shape_976.setTransform(493.525,349.375);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#0BFFFF").s().p("AghAuQgJgKAAgOQAAgSAMgIQALgJAWAAIAXAAIAAgCQAAgNgGgGQgHgFgNAAQgIAAgJACQgMAEgFAEIAAgRQAKgEAIgCQAIgCAIAAQAMAAAKAEQAIAEAHAIQADAFACAGQABAHAAAOIAAA6IgRAAIAAgPQgFAJgJAEQgIAFgLAAQgQAAgKgJgAgRAFQgIAFAAALQAAAJAGAFQAFAFALAAQANAAAIgJQAIgKAAgSIAAgDIgWAAQgOAAgHAFg");
	this.shape_977.setTransform(481.525,351.275);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#0BFFFF").s().p("AgqBIIAAgNIAiAAIAAhMIgbAAIAAgOIArAAIAABaIAjAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_978.setTransform(471,349.275);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#0BFFFF").s().p("AgkA2IAAhoIASAAIAAAUQADgKAJgHQAJgFAMAAIAMABIAKAFIAAARQgGgEgFgBQgFgCgIgBQgPAAgIALQgJAJABATIAAA0g");
	this.shape_979.setTransform(460.1,351.15);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#0BFFFF").s().p("AggAuQgKgJAAgPQAAgSAMgIQAMgJAVAAIAXAAIAAgCQAAgNgGgGQgHgFgNAAQgHAAgKACQgLAEgGAEIAAgRIASgGQAIgCAIAAQAMAAAKAEQAJAEAGAIQADAEABAHQACAHAAAOIAAA6IgRAAIAAgPQgFAIgJAFQgIAFgLAAQgPAAgKgJgAgSAFQgHAFAAALQAAAJAGAFQAFAFAKAAQAOAAAIgJQAIgLAAgRIAAgDIgWAAQgNAAgJAFg");
	this.shape_980.setTransform(447.1,351.275);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#0BFFFF").s().p("AgKA0IglhnIASAAIAdBWIAehWIASAAIglBng");
	this.shape_981.setTransform(435.825,351.275);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#FFFFFF").s().p("AAHBVQgNgWgHgVQgHgWAAgUQAAgTAHgWQAHgVANgWIAOAAQgLAUgHAWQgFAVAAAVQAAAVAFAVQAHAXALAUg");
	this.shape_982.setTransform(424.425,349.575);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#0071BC").s().p("AgMBJIAAhbIgbAAIAAgNIAbAAIAAgHQAAgRAIgJQAHgHARgBIAUAAIAAAPIgTAAQgKAAgDADQgDAEAAAKIAAAJIAjAAIAAANIgjAAIAABbg");
	this.shape_983.setTransform(401.525,349.25);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#0071BC").s().p("AgpBIIAAgNIAhAAIAAhMIgaAAIAAgOIAqAAIAABaIAiAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_984.setTransform(390.65,349.275);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#FFFFFF").s().p("AgTBVIAAgNIAWAAIAAiPIgWAAIAAgNIAnAAIAACpg");
	this.shape_985.setTransform(733.125,195.3);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#FF931D").s().p("AgpBHIAAgQIAvg0QALgNACgFQADgIAAgGQAAgMgHgGQgHgHgLAAQgJAAgIADQgJADgLAGIAAgTQAKgFAJgCQAIgCAKAAQAUAAAMALQAMALAAARQAAAJgEAJQgEAJgJAKIgtAxIA/AAIAAAQg");
	this.shape_986.setTransform(722.575,195.175);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#FFFFFF").s().p("AgSAgIAKgnIAAgZIAbAAIAAAZIgTAng");
	this.shape_987.setTransform(699.05,202.1);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#FF931D").s().p("AgYBFIAvh6IhCAAIAAgPIBXAAIAAAHIgxCCg");
	this.shape_988.setTransform(688.175,195.3);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#FFFFFF").s().p("AgTAgIALgnIAAgZIAcAAIAAAZIgUAng");
	this.shape_989.setTransform(664.625,202.1);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#FF931D").s().p("AgXBGQgLgCgJgDIAAgTIATAIQAIACALAAQAOAAAIgHQAJgHgBgNQABgMgJgHQgIgHgNAAIgPAAIAAgOIAPAAQALAAAIgHQAHgFAAgKQAAgMgHgEQgGgHgMAAIgRACIgTAGIAAgRIAUgFIAQgBQATAAANAKQAMALgBAQQABALgHAIQgGAIgNADQAPAEAHAIQAHAJAAAOQAAAUgNAKQgMALgXAAQgLAAgIgCg");
	this.shape_990.setTransform(653.75,195.3);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#FFFFFF").s().p("AgSAgIAKgnIAAgZIAbAAIAAAZIgTAng");
	this.shape_991.setTransform(630.2,202.1);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#FF931D").s().p("AghA2QgLgRAAglQAAgiANgTQAOgSAZAAQAHAAAGABQAJACAFADIAAARQgGgEgHgCIgNgCQgQAAgKAOQgKANABAbQAEgJAIgGQAHgEAKAAQAUAAALAMQALALAAAWQAAAYgLAMQgMAMgUAAQgXAAgMgSgAgRABQgHAJAAAOQAAAQAHAJQAIAIAKABQANAAAGgJQAHgIAAgRQAAgPgHgJQgGgHgNAAQgLAAgHAIg");
	this.shape_992.setTransform(619.4,195.3);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#FFFFFF").s().p("AgTAgIALgnIAAgZIAcAAIAAAZIgUAng");
	this.shape_993.setTransform(595.775,202.1);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#FF931D").s().p("AgpBHIAAgQIAeghIARgTQAKgLADgHQADgHAAgHQAAgMgHgGQgHgHgKAAQgKAAgIADQgLAEgJAFIAAgTQAKgEAJgDQAIgCAKAAQAUAAAMALQAMALAAARQAAAKgEAIQgFALgIAIIgtAxIA/AAIAAAQg");
	this.shape_994.setTransform(584.875,195.175);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#FFFFFF").s().p("AgSAgIAKgnIAAgZIAbAAIAAAZIgTAng");
	this.shape_995.setTransform(561.35,202.1);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#FF931D").s().p("AgaBFQgJgBgHgDIAAgTQAKAFAHACQAIACAKAAQAPAAAIgIQAIgJAAgPQAAgOgJgJQgIgHgPAAIgPACIgNAFIAAhGIBFAAIAAAQIg0AAIAAAiIAIgCIAIgBQAVAAAMANQANAMAAAVQAAAXgNAMQgNANgWAAg");
	this.shape_996.setTransform(550.475,195.425);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#FFFFFF").s().p("AgTBVIAAipIAnAAIAAANIgWAAIAACPIAWAAIAAANg");
	this.shape_997.setTransform(540.575,195.3);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#FF931D").s().p("AgwAeIAAgQIBhAAIAAAQgAgwgNIAAgQIBhAAIAAAQg");
	this.shape_998.setTransform(516.15,196.175);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#FFFFFF").s().p("AgjBFIAAgQIAeAAIAAhoIgjARIAAgSIAjgQIARAAIAAB5IAdAAIAAAQg");
	this.shape_999.setTransform(493.525,195.325);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#FFFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_1000.setTransform(481.7,204.8);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#FFFFFF").s().p("AAVBDQgSAAgIgIQgIgIAAgSIAAg4IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA4QAAALAEAEQAFAFALAAIATAAIAAAOg");
	this.shape_1001.setTransform(469.925,195.55);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#FFFFFF").s().p("AgTA1IgSgFIAAgRQALAFAHACQAIACAJAAQAKAAAGgEQAHgFAAgIQAAgMgWgFIgBAAIgGgBQgOgCgIgHQgGgHgBgLQABgPAJgJQALgIASAAQAIAAAHACQAIABAIADIAAARQgGgEgJgCQgGgCgJAAQgLAAgFADQgGAEAAAIQAAAHAEADQAEADAQAEIAIABQANADAGAGQAGAHAAAMQAAAPgLAJQgLAJgTAAg");
	this.shape_1002.setTransform(458.8,197.025);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#FFFFFF").s().p("AgqBIIAAgNIAiAAIAAhMIgbAAIAAgOIArAAIAABaIAjAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_1003.setTransform(448.05,195.025);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#FFFFFF").s().p("AATBJQgPAAgIgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAAMAEAFQAFAGAIAAIAUAAIAAAPg");
	this.shape_1004.setTransform(436.375,194.975);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#0071BC").s().p("AgkA1IAAhnIASAAIAAAVQADgLAJgGQAJgHAMAAIAMACIAKAFIAAASQgGgFgFgCQgFgBgIAAQgPgBgIAKQgIAKAAASIAAA0g");
	this.shape_1005.setTransform(414.2,196.9);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#0071BC").s().p("AggAuQgKgJAAgPQAAgSALgIQANgJAVAAIAXAAIAAgCQAAgNgGgGQgHgFgNAAQgHAAgKACQgLAEgGAEIAAgRIASgGQAIgCAIAAQAMAAAKAEQAKAEAFAIQADAEABAHQACAHAAAOIAAA6IgRAAIAAgPQgFAIgJAFQgIAFgLAAQgQAAgJgJgAgSAFQgHAFAAALQAAAJAGAFQAFAFAKAAQAOAAAIgJQAIgLAAgRIAAgDIgWAAQgNAAgJAFg");
	this.shape_1006.setTransform(401.2,197.025);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#0071BC").s().p("AgKA0IglhnIASAAIAdBWIAehWIASAAIglBng");
	this.shape_1007.setTransform(389.925,197.025);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#FF931D").s().p("AggA9QgMgKAAgTQAAgOAHgKQAIgIANgDQgLgDgHgJQgHgIAAgMQAAgQALgKQAMgKASAAQATAAAMAKQALAJAAARQAAAMgHAIQgHAJgMADQAOADAIAIQAHAKAAAOQAAATgMAKQgLALgWAAQgVAAgLgLgAgTAKQgGAHAAANQAAANAHAHQAHAHALAAQANAAAGgHQAHgHAAgNQAAgMgHgIQgHgHgMAAQgLAAgIAHgAgQgzQgGAGAAAMQAAALAGAGQAGAGAKAAQALAAAGgGQAGgGAAgLQAAgMgGgGQgGgGgLAAQgKAAgGAGg");
	this.shape_1008.setTransform(596.475,172.425);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#FF931D").s().p("AgpBHIAAgQIAvg0QAKgKADgIQADgGAAgIQAAgLgHgHQgGgHgLAAQgJAAgJADQgLAEgJAGIAAgTQAKgFAJgCQALgDAHAAQATAAANALQAMALAAASQAAAKgEAIQgFALgIAHIgtAxIA/AAIAAAQg");
	this.shape_1009.setTransform(584.875,172.275);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#FF931D").s().p("AgwAeIAAgQIBhAAIAAAQgAgwgNIAAgQIBhAAIAAAQg");
	this.shape_1010.setTransform(562.025,173.325);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#0BFFFF").s().p("AgpBHIAAgQIAvg0QAKgKADgIQADgGAAgIQAAgLgHgHQgGgHgLAAQgIAAgKADQgKAEgKAGIAAgTQAKgFAJgCQALgDAHAAQATAAANALQAMALAAASQAAAKgEAIQgDAJgKAJIgsAxIA+AAIAAAQg");
	this.shape_1011.setTransform(538.975,172.275);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_1012.setTransform(527.575,181.925);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#0BFFFF").s().p("AggAoQgOgOAAgaQAAgYAOgPQANgPAWAAQAUAAALAOQAMAOAAASIAAAIIhJAAIAAAAQgBAWAJAJQAJAJAQAAQAHAAAKgDQAJgCAKgFIAAARIgTAGIgSACQgWAAgPgPgAgSgfQgHAHgBALIA3AAQgBgLgGgHQgHgIgNAAQgLAAgJAIg");
	this.shape_1013.setTransform(516.2,174.175);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#0BFFFF").s().p("AATBJQgQAAgHgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAAMAEAFQAFAGAIAAIAUAAIAAAPg");
	this.shape_1014.setTransform(505.225,172.1);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#0BFFFF").s().p("AgNBGQgHgFgFgHIAAANIgRAAIAAiQIARAAIAAA2QAFgIAHgEQAGgEAJAAQATAAALAPQALAOAAAYQAAAbgLAOQgLAPgTAAQgHAAgIgEgAgSgKQgHAKAAATQAAASAHAMQAHAKALAAQAMAAAGgKQAHgKAAgUQAAgTgHgKQgGgKgMAAQgLAAgHAKg");
	this.shape_1015.setTransform(493.525,172.275);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#0BFFFF").s().p("AghAuQgJgKAAgOQAAgSAMgIQALgJAWAAIAXAAIAAgDQAAgMgGgGQgHgFgNAAQgKAAgHACQgJADgIAFIAAgSIASgFIAQgCQANAAAJAEQAIADAHAIQADAGACAGQABAHAAANIAAA7IgRAAIAAgQQgFAKgJAEQgIAFgLAAQgQAAgKgJgAgRAFQgIAFAAAKQAAAKAGAFQAGAFAKAAQAMAAAJgKQAIgJAAgSIAAgDIgWAAQgNAAgIAFg");
	this.shape_1016.setTransform(481.525,174.175);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#0BFFFF").s().p("AgqBIIAAgNIAiAAIAAhMIgbAAIAAgNIArAAIAABZIAjAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_1017.setTransform(471,172.15);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#0BFFFF").s().p("AgkA1IAAhnIASAAIAAAVQAEgMAIgFQAJgGAMAAIAMABQAFACAFADIAAASQgGgFgFgCQgIgCgFAAQgPAAgIAKQgJAKABATIAAAzg");
	this.shape_1018.setTransform(460.1,174.025);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#0BFFFF").s().p("AggAuQgKgJAAgPQAAgSAMgIQAMgJAVAAIAXAAIAAgDQAAgMgGgGQgHgFgNAAQgJAAgIACQgIACgJAGIAAgSIASgFIAQgCQANAAAJAEQAJAEAGAHQADAEABAIQACAHAAANIAAA7IgRAAIAAgQQgFAJgJAFQgIAFgLAAQgPAAgKgJgAgSAFQgHAFAAAKQAAAKAGAFQAGAFAJAAQANAAAJgKQAIgKAAgRIAAgDIgWAAQgNAAgJAFg");
	this.shape_1019.setTransform(447.1,174.175);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#0BFFFF").s().p("AgKA0IglhnIASAAIAdBWIAehWIASAAIglBng");
	this.shape_1020.setTransform(435.825,174.15);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#0071BC").s().p("AgkA1IAAhnIASAAIAAAVQAEgMAIgFQAJgGAMAAIAMABQAFACAFADIAAASQgGgFgFgCQgIgCgFAAQgOAAgJAKQgIAKAAATIAAAzg");
	this.shape_1021.setTransform(414.2,174.025);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#0071BC").s().p("AggAuQgKgJAAgPQAAgSALgIQANgJAVAAIAXAAIAAgDQAAgMgGgGQgHgFgNAAQgJAAgIACQgIACgJAGIAAgSIASgFIAQgCQANAAAJAEQAJAEAGAHQADAEABAIQACAHAAANIAAA7IgRAAIAAgQQgFAJgJAFQgIAFgLAAQgQAAgJgJgAgSAFQgHAFAAAKQAAAKAGAFQAGAFAJAAQANAAAJgKQAIgKAAgRIAAgDIgWAAQgNAAgJAFg");
	this.shape_1022.setTransform(401.2,174.175);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#0071BC").s().p("AgKA0IglhnIASAAIAdBWIAehWIASAAIglBng");
	this.shape_1023.setTransform(389.925,174.15);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#FF931D").s().p("AgaBFQgJgBgHgDIAAgTQAKAFAHACQAJACAJAAQAOAAAJgIQAIgJAAgOQAAgPgJgJQgIgHgPAAIgPACQgGABgHAEIAAhGIBFAAIAAAQIg0AAIAAAiIAIgCIAIgBQAUAAANANQANAMAAAWQAAAWgNAMQgNANgXAAg");
	this.shape_1024.setTransform(596.375,149.675);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#FF931D").s().p("AgpBHIAAgQIAeghIARgTQAJgJAEgJQADgGAAgIQAAgLgHgHQgGgHgLAAQgJAAgJADQgLAEgJAFIAAgTQAIgDALgDQAIgDAKAAQAUAAAMALQAMALAAARQAAAKgEAIQgFALgIAIIgtAxIA/AAIAAAQg");
	this.shape_1025.setTransform(584.875,149.425);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#FF931D").s().p("AgwAeIAAgQIBhAAIAAAQgAgwgNIAAgQIBhAAIAAAQg");
	this.shape_1026.setTransform(562.025,150.425);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#0BFFFF").s().p("AgjBFIAAgQIAeAAIAAhoIgjARIAAgSIAigQIASAAIAAB5IAdAAIAAAQg");
	this.shape_1027.setTransform(539.425,149.575);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_1028.setTransform(527.575,159.05);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#0BFFFF").s().p("AggAoQgOgOAAgaQAAgYAOgPQANgPAWAAQAUAAALAOQAMAOAAASIAAAIIhJAAIAAAAQgBAVAJAKQAJAJAQAAQAGAAALgCQALgEAIgEIAAARQgLAEgIACQgJACgJAAQgWAAgPgPgAgSgfQgHAIgBALIA3gBQgBgKgGgIQgIgIgMAAQgLAAgJAIg");
	this.shape_1029.setTransform(516.2,151.275);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#0BFFFF").s().p("AATBJQgPAAgIgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAGQAFAGAIAAIAUAAIAAAPg");
	this.shape_1030.setTransform(505.225,149.225);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#0BFFFF").s().p("AgNBGQgHgEgFgIIAAANIgRAAIAAiQIARAAIAAA2QAFgIAHgDQAHgFAIAAQATAAALAPQALAPAAAYQAAAagLAOQgLAPgTAAQgJAAgGgEgAgSgKQgHAKAAATQAAATAHALQAHAKALAAQAMAAAGgKQAHgKAAgUQAAgTgHgKQgGgKgMAAQgLAAgHAKg");
	this.shape_1031.setTransform(493.525,149.375);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#0BFFFF").s().p("AghAuQgJgKAAgOQAAgSAMgIQALgJAWAAIAXAAIAAgCQAAgNgGgFQgHgGgNAAQgIAAgJACQgJADgIAFIAAgRQAKgEAIgCIAQgCQAMAAAKAEQAIAEAHAIQADAFACAGQABAHAAAOIAAA6IgRAAIAAgPQgFAJgJAEQgIAFgLAAQgQAAgKgJgAgRAFQgIAGAAAKQAAAJAGAFQAGAGAKAAQAMAAAJgKQAIgKAAgRIAAgEIgWAAQgNAAgIAFg");
	this.shape_1032.setTransform(481.525,151.275);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#0BFFFF").s().p("AgqBIIAAgNIAiAAIAAhMIgbAAIAAgOIArAAIAABaIAjAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_1033.setTransform(471,149.275);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#0BFFFF").s().p("AgkA2IAAhoIASAAIAAAUQADgKAJgHQAJgFAMAAIAMABIAKAFIAAARIgLgFQgFgCgIAAQgPAAgIAKQgJAJABATIAAA0g");
	this.shape_1034.setTransform(460.1,151.15);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#0BFFFF").s().p("AggAuQgKgJAAgPQAAgSAMgIQAMgJAVAAIAXAAIAAgCQAAgNgGgFQgHgGgNAAQgHAAgKACIgRAIIAAgRIASgGIAQgCQAMAAAKAEQAJAEAGAIQADAEABAHQACAHAAAOIAAA6IgRAAIAAgPQgFAIgJAFQgIAFgLAAQgPAAgKgJgAgSAFQgHAGAAAKQAAAJAGAFQAFAGAKAAQANAAAJgKQAIgLAAgQIAAgEIgWAAQgNAAgJAFg");
	this.shape_1035.setTransform(447.1,151.275);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#0BFFFF").s().p("AgKA0IglhnIASAAIAdBWIAehWIASAAIglBng");
	this.shape_1036.setTransform(435.825,151.275);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#0071BC").s().p("AgkA2IAAhoIASAAIAAAUQADgKAJgHQAJgFAMAAIAMABIAKAFIAAARIgLgFQgFgCgIAAQgOAAgJAKQgIAIAAAUIAAA0g");
	this.shape_1037.setTransform(414.2,151.15);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#0071BC").s().p("AggAuQgKgJAAgPQAAgSALgIQANgJAVAAIAXAAIAAgCQAAgNgGgFQgHgGgNAAQgHAAgKACIgRAIIAAgRIASgGIAQgCQAMAAAKAEQAJAEAGAIQADAEABAHQACAHAAAOIAAA6IgRAAIAAgPQgFAIgJAFQgIAFgLAAQgQAAgJgJgAgSAFQgHAGAAAKQAAAJAGAFQAFAGAKAAQANAAAJgKQAIgLAAgQIAAgEIgWAAQgNAAgJAFg");
	this.shape_1038.setTransform(401.2,151.275);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#0071BC").s().p("AgKA0IglhnIASAAIAdBWIAehWIASAAIglBng");
	this.shape_1039.setTransform(389.925,151.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623}]}).wait(7));

	// menu_items
	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#E5E5E5").s().p("Au2B9QgGAAgFgFQgEgFAAgHIAAjWQAAgIAEgFQAFgFAGAAIdsAAQAQAAAAASIAADWQAAARgQAAg");
	this.shape_1040.setTransform(210.9066,650,1.0994,1);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#E5E5E5").s().p("AoTBBQgEAAgCgDQgCgCgBgDIAAhwQABgJAIAAIQnAAQAIAAAAAJIAABwQAAAIgIAAg");
	this.shape_1041.setTransform(202.3458,589.9049,1.7872,1.9235);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#E5E5E5").s().p("AoTBBQgEAAgCgCQgCgDgBgEIAAhvQABgEACgDQACgCAEAAIQnAAQAIAAAAAJIAABvQAAAJgIAAg");
	this.shape_1042.setTransform(202.3458,485.6028,1.7872,1.9159);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#E5E5E5").s().p("AoTBBQgEAAgCgCQgCgDgBgEIAAhvQABgEACgDQACgCAEAAIQnAAQAIAAAAAJIAABvQAAAJgIAAg");
	this.shape_1043.setTransform(211.9431,434.9676,1.9641,1.9161);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#E5E5E5").s().p("AoTBBQgEAAgCgDQgCgCgBgDIAAhxQABgIAIAAIQnAAQAIAAAAAIIAABxQAAAIgIAAg");
	this.shape_1044.setTransform(202.3458,270.5951,1.7872,1.9233);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#E5E5E5").s().p("AoTBBQgDAAgDgDQgDgDAAgDIAAhvQAAgEADgDQADgCADAAIQnAAQAJAAAAAJIAABvQAAAJgJAAg");
	this.shape_1045.setTransform(202.3102,196.6313,1.7872,1.923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040}]}).wait(7));

	// menu
	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#AAB6AE").s().p("AoTBBQgJAAAAgJIAAhvQAAgJAJAAIQnAAQADAAADACQADADgBAEIAABvQABAEgDADQgDACgDAAg");
	this.shape_1046.setTransform(200.3445,552.2271,1,0.9944);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#AAB6AE").s().p("AoTBBQgJAAAAgJIAAhvQABgEACgDQACgCAEAAIQnAAQADAAADACQADADgBAEIAABvQAAAJgIAAg");
	this.shape_1047.setTransform(200.3445,520.6296,1,0.9944);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#AAB6AE").s().p("AoTBBQgDAAgDgDQgDgCAAgDIAAhxQAAgDADgDQADgCADAAIQnAAQADAAADACQADADAAADIAABxQAAADgDACQgDADgDAAg");
	this.shape_1048.setTransform(245.7188,364.1118,1,0.9944);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#AAB6AE").s().p("AoTBBQgJAAAAgJIAAhvQAAgJAJAAIQnAAQADAAADACQADADgBAEIAABvQABAEgDADQgDACgDAAg");
	this.shape_1049.setTransform(200.3445,337.2643,1,0.9944);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#AAB6AE").s().p("AoTBBQgJAAAAgJIAAhvQABgEACgDQACgCAEAAIQnAAQADAAADACQADADgBAEIAABvQAAAJgIAAg");
	this.shape_1050.setTransform(200.3445,305.6667,1,0.9944);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#AAB6AE").s().p("AoTBBQgJAAAAgJIAAhvQAAgJAJAAIQnAAQADAAADACQADADgBAEIAABvQABAEgDADQgDACgDAAg");
	this.shape_1051.setTransform(200.3445,232.9965,1,0.9944);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#525354").s().p("A0lCfIAAk9MApLAAAIAAE9g");
	this.shape_1052.setTransform(206.7194,129.7657,1,1.476);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#383B3D").s().p("EgUlA9ZMAAAh6xMApLAAAMAAAB6xg");
	this.shape_1053.setTransform(206.675,492.075);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#AAB6AE").s().p("AoTBBQgJAAAAgIIAAhxQABgDACgDQACgCAEAAIQnAAQADAAADACQADADgBADIAABxQABADgDACQgDADgDAAg");
	this.shape_1054.setTransform(200.3445,201.3989,1,0.9944);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#525354").s().p("A0lDqIAAnTMApLAAAIAAHTg");
	this.shape_1055.setTransform(206.725,482.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1053},{t:this.shape_1052,p:{y:129.7657}},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046}]}).to({state:[{t:this.shape_1053},{t:this.shape_1052,p:{y:196.2657}},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046}]},1).to({state:[{t:this.shape_1053},{t:this.shape_1052,p:{y:268.4657}},{t:this.shape_1054},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046}]},1).to({state:[{t:this.shape_1053},{t:this.shape_1052,p:{y:433.7657}},{t:this.shape_1054},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046}]},1).to({state:[{t:this.shape_1053},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046}]},1).to({state:[{t:this.shape_1053},{t:this.shape_1052,p:{y:591.4657}},{t:this.shape_1054},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046}]},1).to({state:[{t:this.shape_1053},{t:this.shape_1052,p:{y:652.2657}},{t:this.shape_1054},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046}]},1).wait(1));

	// ai_bg
	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#EFEFEF").s().p("AlfAeIAAg7IK/AAIAAA7g");
	this.shape_1056.setTransform(1033.225,88.45);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#EFEFEF").s().p("AhcAeIAAg7IC5AAIAAA7g");
	this.shape_1057.setTransform(1121.8,88.45);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#EFEFEF").s().p("AgfAqQgNgSAAgYQAAgYANgRQAOgRARAAQATAAANARQANARAAAYQAAAZgNARQgNARgTAAQgSAAgNgRg");
	this.shape_1058.setTransform(1082.275,88.425);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#EFEFEF").s().p("AgfAqQgNgRAAgZQAAgYANgRQANgRASAAQATAAANARQANARAAAYQAAAYgNASQgNARgTAAQgSAAgNgRg");
	this.shape_1059.setTransform(1098.675,88.425);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#A7B3AB").s().p("EhU/ABfIAAi8MCp/AAAIAAC8g");
	this.shape_1060.setTransform(601.25,88.55);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#EFEFEF").s().p("AgfAqQgNgRAAgZQAAgYANgRQANgRASAAQATAAANARQANARAAAYQAAAYgNASQgNARgTAAQgSAAgNgRg");
	this.shape_1061.setTransform(75.875,88.425);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#FFFFFF").s().p("AAABuQgjAAgYggQgZghABgtQAAgtAYggQAZghAiAAQAjAAAZAhQAYAgAAAtQAAAugYAgQgZAggjAAg");
	this.shape_1062.setTransform(600.0245,40.1);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#1A1A1A").s().p("EhU/A90MAAAh7nMCp/AAAMAAAB7ng");
	this.shape_1063.setTransform(601.25,487.125);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#25282B").s().p("EhVMBK3QjiAAihigQigigAAjjMAAAiHTQAAibBehuQBfhuCEAAMCxWAAAQCHAABgBwQBhBwAACfMAAACHLQAADjigCgQigCgjjAAgEhSSg78QigChAADjMAAXBsbQABDiCgCgQCgCfDiAAMCYhAAAQDjAACgigQCgigAAjjMAAAhsXQgBjiigigQigigjiAAMiY3gAFQjjAAihChg");
	this.shape_1064.setTransform(600,479.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056}]}).wait(7));

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