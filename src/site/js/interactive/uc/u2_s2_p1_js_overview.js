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
	this.shape_169.setTransform(1078.175,607.825);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgEAcIgFg3IATAAIgEA3g");
	this.shape_170.setTransform(1072.925,596.325);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_171.setTransform(1066.975,603.075);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_172.setTransform(1055.425,603.175);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAZBEIAJAfIAAAAIAIgXIAchMIASAAIgsBzg");
	this.shape_173.setTransform(1044.4,603.175);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgEAcIgFg3IATAAIgEA3g");
	this.shape_174.setTransform(1036.625,596.325);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgpBMQgMgIAAgQQgBgKAIgIQAGgIANgCQgFgCgDgFQgDgEAAgFQAAgHAEgDQACgFAIgFQgJgDgGgJQgFgJAAgLQAAgTALgLQALgKAWAAQAHAAAHACIApAAIAAALIgVADIAEAJQADAGAAAIQAAARgMAKQgMAKgSAAIgLgBQgKAGgBAIQAAAFAFACQADACAKAAIATAAQATAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgHAGABAKQAAAKAIAEQAHAFAPAAQAVAAALgGQALgHAAgLQAAgKgHgDQgFgEgQAAIgVAAQgLAAgHAGgAgVhBQgGAHAAANQAAAMAHAHQAGAGANAAQAYAAAAgZQAAgagYAAQgMAAgIAGg");
	this.shape_175.setTransform(1022.7,605.675);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_176.setTransform(1010.325,603.075);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgDgDAAgGQAAgGADgCQAEgDADAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgDAAgEgDg");
	this.shape_177.setTransform(1000.95,601.025);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgGgFgRgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgLAAgHAEQgGAEAAAGQAAAFADADQABAEAGADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_178.setTransform(993.1,603.175);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_179.setTransform(981.275,603.275);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQANgPAWAAQAWAAANAQIACAAIgBgIIAAgIIAAgvIARAAIAACjIgPAAIgCgPIAAAAQgNARgXAAQgWAAgNgQgAgYgJQgHALAAAVQAAAXAHALQAIALAQAAQARAAAIgKQAJgJAAgWIAAgEQAAgXgJgLQgIgKgRAAQgQAAgIAMg");
	this.shape_180.setTransform(962.25,600.85);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_181.setTransform(950,603.175);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_182.setTransform(940.275,603.075);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_183.setTransform(928.725,603.175);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_184.setTransform(920.375,600.75);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_185.setTransform(912.775,603.175);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_186.setTransform(901.45,603.175);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQANgPAWAAQAWAAANAQIABAAIAAgIIAAgIIAAgvIARAAIAACjIgPAAIgCgPIAAAAQgNARgXAAQgWAAgNgQgAgYgJQgHALAAAVQAAAXAHALQAIALAQAAQARAAAIgKQAJgJAAgWIAAgEQAAgXgJgLQgIgKgRAAQgQAAgIAMg");
	this.shape_187.setTransform(888.45,600.85);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_188.setTransform(870.025,603.075);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAKALAQAAQASAAATgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_189.setTransform(857.4,603.175);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgJAJQgIAJgBAQIA7AAIAAAAg");
	this.shape_190.setTransform(845.35,603.175);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgRAXAAQAXAAAMAPQANAQAAAbQAAAdgNAPQgMAQgXAAQgKAAgKgEgAgZgLQgHALgBAXQABAYAHALQAJAKAQAAQARAAAIgLQAIgMAAgWQAAgWgIgLQgIgLgRAAQgQAAgJAKg");
	this.shape_191.setTransform(833,600.85);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQAMAAAIgEQAHgEAAgJQAAgHgFgFQgHgFgPgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgNgHg");
	this.shape_192.setTransform(815.4,603.175);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_193.setTransform(803.825,603.175);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAPIACAAQAFgJAJgFQAKgEALAAQAVAAALAKQAKAJAAAVIAABMg");
	this.shape_194.setTransform(791.675,600.75);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_195.setTransform(775.55,601.925);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgEAAgDgDg");
	this.shape_196.setTransform(769.1,601.025);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQAMgPAXAAQAWAAANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgOAAIgDgPIgBAAQgMARgXAAQgXAAgMgQgAgXgJQgJALAAAVQAAAXAJALQAHALAQAAQARAAAIgKQAIgJAAgWIAAgEQABgXgJgLQgIgKgRAAQgQAAgHAMg");
	this.shape_197.setTransform(753.85,600.85);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_198.setTransform(741.025,603.075);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_199.setTransform(727.975,603.175);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgPAaIAGgaIAFgaIATAAIABADIgIAXIgJAag");
	this.shape_200.setTransform(713.75,609.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_201.setTransform(707.65,601.925);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgEAAgDgDg");
	this.shape_202.setTransform(701.15,601.025);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_203.setTransform(686.325,603.175);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAJAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_204.setTransform(675.95,601.925);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQANgPAWAAQAWAAANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgOAAIgDgPIgBAAQgMARgXAAQgWAAgNgQgAgXgJQgJALABAVQgBAXAJALQAHALAQAAQARAAAIgKQAJgJgBgWIAAgEQAAgXgIgLQgIgKgRAAQgQAAgHAMg");
	this.shape_205.setTransform(659.7,600.85);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_206.setTransform(647.45,603.175);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_207.setTransform(634.825,603.075);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgpBMQgMgIAAgQQgBgKAIgIQAGgIANgCQgFgCgDgFQgDgEAAgFQAAgHAEgDQACgFAIgFQgJgDgGgJQgFgJAAgLQAAgTALgLQALgKAWAAQAHAAAHACIApAAIAAALIgVADIAEAJQADAGAAAIQAAARgMAKQgMAKgSAAIgLgBQgKAGgBAIQAAAFAFACQADACAKAAIATAAQATAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgHAGABAKQAAAKAIAEQAHAFAPAAQAVAAALgGQALgHAAgLQAAgKgHgDQgFgEgQAAIgVAAQgLAAgHAGgAgVhBQgGAHAAANQAAAMAHAHQAGAGANAAQAYAAAAgZQAAgagYAAQgMAAgIAGg");
	this.shape_208.setTransform(622.2,605.675);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgEAAgDgDg");
	this.shape_209.setTransform(613.65,601.025);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQAMAAAIgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgQgFgGgFQgHgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgLAAgHAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgXAAgNgHg");
	this.shape_210.setTransform(605.8,603.175);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPALgIQAMgIATAAQATAAARAIIgGAOQgRgHgOAAQgLAAgHAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgXAAgNgHg");
	this.shape_211.setTransform(595.55,603.175);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_212.setTransform(583.975,603.175);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_213.setTransform(566.275,603.075);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_214.setTransform(553.6,603.175);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQASAAATgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_215.setTransform(541.55,603.175);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgQBPQgKgEgGgJIgBAAIgFAPIgMAAIAAijIASAAIAAAoIgBAYIABAAQAMgRAXAAQAXAAANAPQAMAQAAAbQAAAdgNAPQgNAQgWAAQgLAAgIgEgAgYgLQgJALABAXQgBAYAJALQAIAKARAAQAQAAAIgLQAHgMAAgWQAAgWgHgLQgIgLgQAAQgSAAgHAKg");
	this.shape_216.setTransform(529.2,600.85);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgGgFgRgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgLAAgHAEQgGAEAAAGQAAAFADADQABAEAGADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_217.setTransform(511.6,603.175);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_218.setTransform(500.025,603.175);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAPIACAAQAFgJAJgFQAKgEALAAQAVAAALAKQAKAJAAAVIAABMg");
	this.shape_219.setTransform(487.875,600.75);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgEAcIgFg3IATAAIgEA3g");
	this.shape_220.setTransform(473.275,596.325);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgwBGIAAgRQAIAFALADQALACALAAQARAAALgJQAKgIAAgRQAAgggnABQgKgBgQADIgKgFIAGhIIBMAAIAAAQIg9AAIgEAuQAMgCAMAAQAXAAAOAMQAOALABAVQgBAYgPANQgPAOgZAAQgbAAgOgIg");
	this.shape_221.setTransform(464.85,601.35);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgyBOIAAgPIApgpQARgSAGgHQAGgIADgIQADgIAAgIQAAgNgHgHQgIgHgMAAQgKAAgIADQgJADgKAIIgKgLQAWgSAZAAQAUAAANALQAMALAAATQAAAPgIAOQgIANgXAWIghAhIAAABIBPAAIAAAQg");
	this.shape_222.setTransform(452.425,601.125);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgEAcIgFg3IATAAIgEA3g");
	this.shape_223.setTransform(443.925,596.325);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_224.setTransform(432.375,603.075);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAKALAQAAQATAAASgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_225.setTransform(421.25,603.175);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgQBPQgKgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgRAXAAQAWAAANAPQANAQAAAbQAAAdgNAPQgNAQgWAAQgKAAgJgEgAgYgLQgJALAAAXQAAAYAJALQAIAKARAAQAQAAAIgLQAIgMgBgWQABgWgIgLQgIgLgQAAQgRAAgIAKg");
	this.shape_226.setTransform(408.9,600.85);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgRAAgHAJQgJAKABATIAABAIgRAAIAAhKQAAgOgGgHQgFgHgNAAQgQAAgIAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgIAIgFQAKgFALAAQAbAAAHAUIABAAQAFgJAKgGQAKgFANAAQATAAAJAKQALAKgBAWIAABLg");
	this.shape_227.setTransform(392,603.075);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_228.setTransform(375.275,603.275);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_229.setTransform(362.175,603.075);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgIAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_230.setTransform(1024.45,571.375);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgGALAAQAVABALAJQAKAKAAAWIAABLg");
	this.shape_231.setTransform(1011.825,568.95);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAGgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_232.setTransform(1001.25,570.125);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQANgQAWAAQAWABANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgOAAIgDgPIgBAAQgMARgXAAQgWAAgNgPgAgXgJQgJALABAWQgBAWAJALQAHAMAQAAQARgBAIgJQAJgKgBgWIAAgDQAAgYgIgLQgIgKgRAAQgQAAgHAMg");
	this.shape_233.setTransform(985.05,569.05);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_234.setTransform(972.225,571.275);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_235.setTransform(959.175,571.375);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AgEAcIgFg3IATAAIgEA3g");
	this.shape_236.setTransform(945.575,564.525);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AALBNIAAhtIAAgaIgFAFIgYAUIgJgLIAoggIAPAAIAACZg");
	this.shape_237.setTransform(935.675,569.45);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgwAHIAAgNIBhAAIAAANg");
	this.shape_238.setTransform(926.075,579.775);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQATAAASgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgHgJgNAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_239.setTransform(915.3,571.375);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_240.setTransform(906.475,568.95);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgQBPQgKgEgHgJIAAAAIgFAPIgMAAIAAijIARAAIAAAoIAAAYIAAAAQANgSAXAAQAWAAANAQQANAQAAAbQAAAcgNARQgMAPgXAAQgLAAgIgEgAgYgLQgJALAAAXQAAAYAJALQAIALARAAQAQgBAIgLQAIgMgBgWQABgXgIgKQgIgLgQAAQgSAAgHAKg");
	this.shape_241.setTransform(897.5,569.05);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_242.setTransform(884.175,571.375);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgCgDgBgGQABgGACgCQAEgDADAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgDAAgEgDg");
	this.shape_243.setTransform(875.85,569.225);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_244.setTransform(869.475,571.275);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_245.setTransform(857.925,571.375);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAYBEIAKAfIABAAIAHgXIAbhMIATAAIgrBzg");
	this.shape_246.setTransform(846.9,571.375);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgEAcIgFg3IATAAIgEA3g");
	this.shape_247.setTransform(839.175,564.525);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQANgQAWAAQAWABANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgPAAIgCgPIgBAAQgMARgXAAQgWAAgNgPgAgXgJQgJALABAWQgBAWAJALQAHAMAQAAQARgBAIgJQAJgKgBgWIAAgDQAAgYgIgLQgIgKgRAAQgQAAgHAMg");
	this.shape_248.setTransform(824.3,569.05);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQASAAATgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgIAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_249.setTransform(812.05,571.375);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_250.setTransform(803.225,568.95);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_251.setTransform(797.725,568.95);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_252.setTransform(788.625,571.375);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_253.setTransform(778.125,571.375);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgGAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_254.setTransform(762.1,571.375);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgGg6QgEgDAAgGQAAgGAEgCQADgDADAAQAEAAADADQAEACAAAGQAAAGgEADQgDADgEAAQgDAAgDgDg");
	this.shape_255.setTransform(754.2,569.225);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQAMAAAIgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgQgFgGgFQgHgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgLAAgHAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgXAAgNgHg");
	this.shape_256.setTransform(740.8,571.375);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQASAAATgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_257.setTransform(729.65,571.375);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_258.setTransform(720.825,568.95);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgSAXAAQAWAAANAQQANAQAAAbQAAAcgNARQgNAPgWAAQgKAAgKgEgAgZgLQgIALAAAXQAAAYAIALQAJALAQAAQARgBAIgLQAIgMAAgWQAAgXgIgKQgIgLgRAAQgQAAgJAKg");
	this.shape_259.setTransform(711.85,569.05);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_260.setTransform(698.525,571.375);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgGg6QgEgDAAgGQAAgGAEgCQADgDADAAQAEAAADADQAEACAAAGQAAAGgEADQgDADgEAAQgDAAgDgDg");
	this.shape_261.setTransform(690.2,569.225);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_262.setTransform(683.875,571.275);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_263.setTransform(672.325,571.375);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAYBEIAKAfIAAAAIAIgXIAbhMIATAAIgsBzg");
	this.shape_264.setTransform(661.3,571.375);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_265.setTransform(644.35,571.375);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgGALAAQAVABALAJQAKAKAAAWIAABLg");
	this.shape_266.setTransform(631.725,568.95);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_267.setTransform(621.15,570.125);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AgSBTIAAhlIgVAAIAAgIIAVgGIAAgHQAAgrAkAAQAJAAANAEIgFAOQgKgDgHAAQgKAAgFAHQgEAGAAAPIAAAHIAdAAIAAAOIgdAAIAABlg");
	this.shape_268.setTransform(608.875,568.875);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_269.setTransform(598.075,571.375);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_270.setTransform(580,571.375);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_271.setTransform(567.375,571.275);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_272.setTransform(554.225,571.375);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgPAbIAGgbIAFgaIASAAIACADIgIAXIgKAbg");
	this.shape_273.setTransform(539.1,577.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgOAAgIAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_274.setTransform(530.9,571.375);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_275.setTransform(522.025,568.95);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAOAAIACAQIABAAQAHgKAJgEQAJgEALAAQAXAAAMAQQANAPAAAdQAAAbgNAQQgMAQgXAAQgKAAgKgEQgJgEgHgJIgBAAIABATIAAAwgAgZg7QgHAKgBAVIAAAEQABAYAHAKQAJAKAQAAQAPAAAKgMQAHgLABgVQgBgWgHgLQgKgMgPAAQgQAAgJAKg");
	this.shape_276.setTransform(513.05,573.875);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgQAAgHAJQgJAKABATIAABAIgRAAIAAhKQAAgOgGgHQgFgHgNAAQgRAAgHAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgIAIgFQAKgFAKAAQAcAAAHAUIABAAQAFgJAKgGQAJgFAOAAQATAAAKAKQAKAKAAAWIAABLg");
	this.shape_277.setTransform(496.2,571.275);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_278.setTransform(479.725,571.375);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AAgA6IgggvIgfAvIgUAAIAqg6Igog5IATAAIAeAsIAfgsIATAAIgoA5IAqA6g");
	this.shape_279.setTransform(468.45,571.375);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_280.setTransform(456.85,571.375);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_281.setTransform(441.575,571.275);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_282.setTransform(429.775,571.475);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_283.setTransform(416.725,571.375);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_284.setTransform(398.075,571.275);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgGg6QgEgDAAgGQAAgGAEgCQADgDADAAQAEAAADADQAEACAAAGQAAAGgEADQgDADgEAAQgDAAgDgDg");
	this.shape_285.setTransform(388.7,569.225);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_286.setTransform(373.875,571.375);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgwBIIAAgRQAKAEAMACQAKADALAAQARAAAKgHQAJgHgBgMQAAgIgCgFQgEgFgIgFQgHgEgOgFQgWgHgJgLQgKgKAAgRQAAgSAOgLQANgKAWAAQAXAAATAIIgGAQQgTgIgSAAQgNAAgIAGQgIAGAAALQAAAIADAFQADAFAHAFQAHAEANAFQAYAIAJAJQAKAKgBAQQAAAVgOALQgPALgYAAQgcAAgPgHg");
	this.shape_287.setTransform(361.45,569.425);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AgIALQgEgDAAgIQAAgGAEgEQADgDAFAAQAGAAADADQAEAEAAAGQAAAHgEAEQgDADgGAAQgFAAgDgDg");
	this.shape_288.setTransform(612.325,512.425);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgPAAgJAJQgHAKAAATIAABAIgRAAIAAhKQAAgOgGgHQgFgHgNAAQgRAAgHAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIACAQIABAAQAFgIAKgFQAJgFAKAAQAcAAAHAUIABAAQAFgJAKgGQAJgFANAAQAUAAAKAKQAJAKABAWIAABLg");
	this.shape_289.setTransform(599.5,507.675);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_290.setTransform(583.025,507.775);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_291.setTransform(573.825,507.675);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQAAgKAIgIQAGgIAMgCQgEgCgDgFQgDgEAAgFQAAgHADgDQADgFAIgFQgJgDgFgJQgHgJAAgLQAAgTAMgLQALgKAVAAQAIAAAIACIAnAAIAAALIgUADIAEAJQADAGAAAIQAAARgMAKQgMAKgSAAIgKgBQgLAGAAAIQAAAFAEACQADACAKAAIAUAAQASAAAKAIQAKAIAAAPQAAATgPALQgPAKgdAAQgXAAgMgJgAgeAkQgGAGgBAKQAAAKAJAEQAHAFAPAAQAVAAALgGQAKgHAAgLQAAgKgFgDQgHgEgQAAIgTAAQgMAAgHAGgAgUhBQgHAHAAANQAAAMAHAHQAHAGAMAAQAYAAABgZQAAgagZAAQgNAAgGAGg");
	this.shape_292.setTransform(562.65,510.275);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_293.setTransform(550.325,507.775);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_294.setTransform(540.225,507.675);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAOAAIACAQIABAAQAHgKAJgEQAJgEALAAQAXAAAMAQQANAPAAAdQAAAbgNAQQgMAQgXAAQgKAAgKgEQgJgEgHgJIgBAAIABATIAAAwgAgZg7QgHAKgBAVIAAAEQABAYAHAKQAJAKAQAAQAPAAAKgMQAHgLABgVQgBgWgHgLQgKgMgPAAQgQAAgJAKg");
	this.shape_295.setTransform(528.8,510.275);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_296.setTransform(509.875,507.775);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AgSBTIAAhlIgVAAIAAgIIAVgGIAAgHQAAgrAkAAQAJAAANAEIgFAOQgKgDgHAAQgKAAgFAHQgEAGAAAPIAAAHIAdAAIAAAOIgdAAIAABlg");
	this.shape_297.setTransform(495.675,505.275);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_298.setTransform(484.925,507.775);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AgpBMQgMgIAAgQQAAgKAGgIQAHgIANgCQgFgCgDgFQgDgEAAgFQAAgHAEgDQADgFAHgFQgJgDgGgJQgFgJAAgLQAAgTALgLQALgKAWAAQAHAAAHACIApAAIAAALIgWADIAFAJQADAGAAAIQAAARgMAKQgLAKgUAAIgKgBQgKAGgBAIQAAAFAFACQAEACAJAAIATAAQATAAAKAIQAKAIAAAPQAAATgPALQgPAKgdAAQgXAAgMgJgAgeAkQgHAGABAKQAAAKAHAEQAIAFAPAAQAVAAALgGQALgHAAgLQAAgKgHgDQgFgEgQAAIgVAAQgLAAgHAGgAgVhBQgGAHAAANQAAAMAHAHQAGAGANAAQAYAAAAgZQAAgagZAAQgLAAgIAGg");
	this.shape_299.setTransform(466.85,510.275);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_300.setTransform(454.475,507.675);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgEAAgDgDg");
	this.shape_301.setTransform(445.1,505.625);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_302.setTransform(435.825,507.675);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_303.setTransform(422.625,507.675);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_304.setTransform(409.325,507.875);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_305.setTransform(399.175,507.675);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_306.setTransform(382.45,507.775);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAPIACAAQAFgJAJgFQAKgEALAAQAVAAALAKQAKAJAAAVIAABMg");
	this.shape_307.setTransform(369.825,505.35);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_308.setTransform(359.25,506.525);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQAAgKAIgIQAGgIAMgCQgEgCgDgFQgDgEAAgFQAAgHADgDQAEgFAHgFQgJgDgFgJQgHgJAAgLQAAgTAMgLQALgKAVAAQAIAAAIACIAnAAIAAALIgVADIAGAJQACAGAAAIQAAARgMAKQgLAKgTAAIgKgBQgLAGAAAIQAAAFADACQAEACAKAAIAUAAQASAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgGAGgBAKQAAAKAIAEQAJAFAOAAQAVAAALgGQAKgHAAgLQAAgKgFgDQgHgEgQAAIgTAAQgMAAgHAGgAgUhBQgHAHAAANQAAAMAHAHQAHAGAMAAQAYAAABgZQAAgagZAAQgNAAgGAGg");
	this.shape_309.setTransform(1078.9,478.475);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_310.setTransform(1066.525,475.875);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgEgDAAgGQAAgGAEgCQADgDADAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgDAAgDgDg");
	this.shape_311.setTransform(1057.15,473.825);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_312.setTransform(1050.825,475.875);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_313.setTransform(1039.025,476.075);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQANgQAWAAQAWABANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgPAAIgCgPIgBAAQgMARgXAAQgWAAgNgPgAgXgJQgJALABAWQgBAWAJALQAHAMAQAAQARgBAIgJQAJgKgBgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_314.setTransform(1025.55,473.65);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_315.setTransform(1010.075,475.875);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_316.setTransform(998.95,475.975);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_317.setTransform(988.95,474.725);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_318.setTransform(982.475,473.55);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_319.setTransform(973.375,475.975);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_320.setTransform(955.675,475.975);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_321.setTransform(945.3,474.725);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_322.setTransform(933.225,473.55);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_323.setTransform(924.125,475.975);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgEAAgDgDg");
	this.shape_324.setTransform(915.8,473.825);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_325.setTransform(909.15,474.725);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_326.setTransform(898.875,475.875);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQASAAATgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_327.setTransform(886.25,475.975);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_328.setTransform(876.3,474.725);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_329.setTransform(866.025,475.975);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAOAAIACAQIABAAQAHgKAJgEQAJgEALAAQAXAAAMAQQANAPAAAdQAAAbgNAQQgMAQgXAAQgKAAgKgEQgJgEgHgJIgBAAIABATIAAAwgAgZg7QgHAKgBAVIAAAEQABAYAHAKQAJAKAQAAQAPAAAKgMQAHgLABgVQgBgWgHgLQgKgMgPAAQgQAAgJAKg");
	this.shape_330.setTransform(853.25,478.475);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAKALAQAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_331.setTransform(834.8,475.975);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgGALAAQAVABALAJQAKAKAAAWIAABLg");
	this.shape_332.setTransform(822.175,473.55);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_333.setTransform(811.6,474.725);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgGAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_334.setTransform(797.2,475.975);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_335.setTransform(785.625,475.975);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgGALAAQAVABALAJQAKAKAAAWIAABLg");
	this.shape_336.setTransform(773.475,473.55);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgGALAAQAVABALAJQAKAKAAAWIAABLg");
	this.shape_337.setTransform(754.725,473.55);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_338.setTransform(743.175,475.975);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDAAgGQAAgGADgCQACgDAEAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgEAAgCgDg");
	this.shape_339.setTransform(735.05,473.825);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgGALAAQAVABALAJQAKAKAAAWIAABLg");
	this.shape_340.setTransform(725.775,473.55);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgIgcIAAAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAHAfIABAAIADgPIAFgQIAVhBIASAAIAVBBQAFATACAMIACAAIACgMIAVhUIASAAIgfBzg");
	this.shape_341.setTransform(710.7,475.975);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_342.setTransform(692.85,474.725);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgDgDAAgGQAAgGADgCQAEgDADAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgDAAgEgDg");
	this.shape_343.setTransform(686.4,473.825);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_344.setTransform(671.575,475.975);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_345.setTransform(661.2,474.725);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAXABAMAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgOAAIgDgPIgBAAQgMARgXAAQgXAAgMgPgAgXgJQgJALABAWQgBAWAJALQAHAMAQAAQARgBAIgJQAIgKAAgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_346.setTransform(644.95,473.65);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_347.setTransform(632.7,475.975);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_348.setTransform(620.075,475.875);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AgpBMQgMgIAAgQQgBgKAIgIQAGgIANgCQgFgCgDgFQgDgEAAgFQAAgHADgDQADgFAIgFQgJgDgFgJQgHgJABgLQAAgTALgLQALgKAWAAQAHAAAIACIAnAAIAAALIgUADIAEAJQADAGAAAIQAAARgMAKQgMAKgSAAIgKgBQgMAGAAAIQAAAFAFACQADACAKAAIAUAAQASAAAKAIQAKAIAAAPQAAATgPALQgPAKgdAAQgXAAgMgJgAgeAkQgGAGAAAKQgBAKAJAEQAHAFAPAAQAVAAALgGQAKgHAAgLQABgKgHgDQgFgEgQAAIgUAAQgMAAgHAGgAgUhBQgHAHAAANQAAAMAHAHQAHAGAMAAQAZAAAAgZQAAgagZAAQgNAAgGAGg");
	this.shape_349.setTransform(607.45,478.475);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgGg6QgEgDAAgGQAAgGAEgCQADgDADAAQAEAAADADQAEACAAAGQAAAGgEADQgDADgEAAQgDAAgDgDg");
	this.shape_350.setTransform(598.85,473.825);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPALgIQAMgIATAAQATAAARAIIgGAOQgRgHgOAAQgLAAgHAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgXAAgNgHg");
	this.shape_351.setTransform(591.05,475.975);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgGgFgRgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgGAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFACADQADAEAFADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_352.setTransform(580.8,475.975);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_353.setTransform(569.225,475.975);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgOAAgIAJQgIAJgBAQIA7AAIAAAAg");
	this.shape_354.setTransform(552.05,475.975);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgSAXAAQAWAAANAQQANAQAAAbQAAAdgNAQQgMAPgXAAQgKAAgKgEgAgZgKQgHAKgBAXQABAYAHALQAJALAQAAQARgBAIgLQAIgMAAgWQAAgXgIgKQgIgLgRAAQgQAAgJALg");
	this.shape_355.setTransform(539.7,473.65);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAWABANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgOAAIgDgPIgBAAQgMARgXAAQgXAAgMgPgAgXgJQgJALAAAWQAAAWAJALQAHAMAQAAQARgBAIgJQAIgKAAgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_356.setTransform(520.3,473.65);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_357.setTransform(511.225,473.55);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_358.setTransform(501.875,476.075);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_359.setTransform(488.825,475.975);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgIgcIAAAAIgHAcIgWBDIgUAAIgfhzIASAAIARBBIAHAfIABAAIADgPIAFgQIAVhBIASAAIAUBBQAHATABAMIABAAIADgMIAVhUIASAAIgfBzg");
	this.shape_360.setTransform(473.9,475.975);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AgXBeQAOgUAIgYQAHgYAAgZQAAgZgHgZQgHgYgPgUIARAAQAOASAIAZQAIAYAAAbQAAAcgIAXQgIAYgOASg");
	this.shape_361.setTransform(456.65,475.75);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_362.setTransform(449.975,475.875);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_363.setTransform(438.85,475.975);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgGgJIgBAAIgFAPIgMAAIAAijIASAAIAAAoIgBAYIABAAQAMgSAXAAQAXAAANAQQAMAQAAAbQAAAdgNAQQgMAPgXAAQgLAAgJgEgAgYgKQgIAKAAAXQAAAYAIALQAIALAQAAQARgBAIgLQAHgMABgWQgBgXgHgKQgIgLgRAAQgRAAgHALg");
	this.shape_364.setTransform(426.5,473.65);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgPAAgJAJQgHAKAAATIAABAIgRAAIAAhKQAAgOgGgHQgFgHgNAAQgRAAgHAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIACAQIABAAQAGgIAIgFQAJgFALAAQAcAAAHAUIABAAQAFgJAKgGQAJgFANAAQAUAAAKAKQAJAKABAWIAABLg");
	this.shape_365.setTransform(409.6,475.875);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_366.setTransform(392.875,476.075);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_367.setTransform(379.775,475.875);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_368.setTransform(361.125,475.975);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFFFF").s().p("AgIALQgEgDAAgIQAAgGAEgEQADgDAFAAQAGAAADADQAEAEAAAGQAAAHgEAEQgDADgGAAQgFAAgDgDg");
	this.shape_369.setTransform(1088.425,448.825);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQABgKAGgIQAHgIAMgCQgEgCgDgFQgDgEAAgFQAAgHAEgDQADgFAHgFQgJgDgGgJQgFgJgBgLQAAgTAMgLQAMgKAUAAQAJAAAGACIApAAIAAALIgWADIAGAJQACAGAAAIQAAARgMAKQgLAKgUAAIgKgBQgLAGABAIQAAAFADACQAFACAJAAIATAAQATAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgHAGAAAKQABAKAHAEQAJAFAOAAQAVAAALgGQAKgHAAgLQAAgKgFgDQgHgEgQAAIgUAAQgLAAgHAGgAgVhBQgGAHAAANQAAAMAHAHQAGAGANAAQAZAAgBgZQAAgagZAAQgLAAgIAGg");
	this.shape_370.setTransform(1079.55,446.675);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFFFF").s().p("AgIALQgEgDAAgIQAAgGAEgEQADgDAFAAQAGAAADADQAEAEAAAGQAAAHgEAEQgDADgGAAQgFAAgDgDg");
	this.shape_371.setTransform(1070.875,448.825);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_372.setTransform(1062.05,444.175);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("AAHBeQgOgSgIgYQgJgYABgbQAAgbAIgYQAIgZAOgSIARAAQgPAUgHAZQgHAYAAAYQAAAaAHAYQAIAYAOAUg");
	this.shape_373.setTransform(1052.9,443.95);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgHgJgPAAQgMAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_374.setTransform(1038.05,444.175);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAOAAIACAQIABAAQAIgKAIgEQAJgEALAAQAXAAAMAQQANAPAAAdQAAAbgNAQQgMAQgXAAQgLAAgJgEQgJgEgHgJIgBAAIABATIAAAwgAgZg7QgHAKgBAVIAAAEQABAYAHAKQAJAKAQAAQAPAAAKgMQAHgLABgVQgBgWgHgLQgKgMgPAAQgQAAgJAKg");
	this.shape_375.setTransform(1025.7,446.675);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("Ag0BSIAAgOQAGABAHAAQASAAAIgUIAHgRIgvhzIATAAIAZBCQAIAWABAKIABAAIAGgSIAdhQIASAAIgxCDQgHATgJAJQgKAIgPAAQgIAAgIgCg");
	this.shape_376.setTransform(1013.325,446.775);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAGgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_377.setTransform(1004.05,442.925);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_378.setTransform(988.325,444.175);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAGgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_379.setTransform(978.85,442.925);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_380.setTransform(968.725,444.175);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQAMgPAXAAQAXAAAMARIACAAIgBgJIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgXAAgMgQgAgYgJQgHALgBAWQABAWAHALQAJAMAPAAQARAAAJgLQAHgJABgWIAAgDQAAgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_381.setTransform(956.2,441.85);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_382.setTransform(939.425,444.175);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQADACAAAGQAAAGgDADQgDADgEAAQgEAAgDgDg");
	this.shape_383.setTransform(931.35,442.025);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFFFFF").s().p("AgSBTIAAhlIgVAAIAAgIIAVgGIAAgHQAAgrAkAAQAJAAANAEIgFAOQgKgDgHAAQgKAAgFAHQgEAGAAAPIAAAHIAdAAIAAAOIgdAAIAABlg");
	this.shape_384.setTransform(925.575,441.675);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgCgDgBgGQABgGACgCQAEgDADAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgDAAgEgDg");
	this.shape_385.setTransform(918.6,442.025);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_386.setTransform(910.975,444.175);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_387.setTransform(899.65,444.175);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAOAAIADAQIABAAQAHgKAIgEQAJgEALAAQAXAAANAQQAMAPAAAdQAAAbgNAQQgMAQgXAAQgLAAgJgEQgJgEgGgJIgBAAIABATIAAAwgAgYg7QgIAKAAAVIAAAEQAAAYAIAKQAIAKAQAAQAQAAAIgMQAJgLgBgVQABgWgJgLQgIgMgQAAQgRAAgHAKg");
	this.shape_388.setTransform(887.3,446.675);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQANAAAHgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgRgFgHgFQgGgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_389.setTransform(875.3,444.175);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFFFFF").s().p("AAyBNIgTgxIg9AAIgTAxIgSAAIA9iaIAOAAIA8CagAAZAMIgSguIgHgXQgBAKgFANIgSAuIAxAAg");
	this.shape_390.setTransform(857.725,442.2);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFFFFF").s().p("AgIALQgEgDAAgIQAAgGAEgEQADgDAFAAQAGAAADADQAEAEAAAGQAAAHgEAEQgDADgGAAQgFAAgDgDg");
	this.shape_391.setTransform(836.875,448.825);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAKALAQAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_392.setTransform(828.05,444.175);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_393.setTransform(815.325,444.275);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_394.setTransform(806.025,441.75);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_395.setTransform(796.925,444.175);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAZBEIAJAfIABAAIAHgXIAchMIASAAIgrBzg");
	this.shape_396.setTransform(785.9,444.175);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_397.setTransform(768.525,444.175);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgOAAgIAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_398.setTransform(751.4,444.175);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_399.setTransform(741.675,444.075);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_400.setTransform(730.025,444.175);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAGgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_401.setTransform(719.65,442.925);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgGAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_402.setTransform(710.8,444.175);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_403.setTransform(693.525,444.075);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_404.setTransform(680.475,444.175);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_405.setTransform(669.975,444.175);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALAKQAKALAAAVIAABLg");
	this.shape_406.setTransform(652.475,441.75);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_407.setTransform(640.925,444.175);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgCgDgBgGQABgGACgCQAEgDADAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgDAAgEgDg");
	this.shape_408.setTransform(632.85,442.025);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALAKQAKALAAAVIAABLg");
	this.shape_409.setTransform(623.575,441.75);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgHgcIgBAAIgHAcIgWBDIgUAAIgfhzIASAAIARBBIAGAfIABAAIAEgPIAEgQIAWhBIASAAIAUBBQAGATADAMIABAAIABgMIAXhUIASAAIghBzg");
	this.shape_410.setTransform(608.5,444.175);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_411.setTransform(590.925,444.075);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQASAAATgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_412.setTransform(579.8,444.175);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_413.setTransform(567.175,444.075);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDAAgGQAAgGADgCQADgDADAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgDAAgDgDg");
	this.shape_414.setTransform(557.75,442.025);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_415.setTransform(548.625,444.175);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAJAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_416.setTransform(539.15,442.925);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_417.setTransform(528.875,444.075);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_418.setTransform(515.725,444.175);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_419.setTransform(504.275,444.175);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_420.setTransform(486.975,444.175);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQAMAAAIgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgPgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgXAAgNgHg");
	this.shape_421.setTransform(470.7,444.175);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDAAgGQAAgGADgCQADgDADAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgDAAgDgDg");
	this.shape_422.setTransform(462.8,442.025);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAKALQAJALARAAQASAAATgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgCAQIA8AAIAAAAg");
	this.shape_423.setTransform(448.5,444.175);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_424.setTransform(439.675,441.75);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgRAXAAQAXAAAMAPQANAPAAAcQAAAcgNAQQgMAQgXAAQgKAAgKgEgAgZgKQgHAJgBAYQABAZAHAKQAJALAQAAQARAAAIgNQAIgLAAgWQAAgXgIgKQgIgLgRAAQgQAAgJALg");
	this.shape_425.setTransform(430.7,441.85);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_426.setTransform(417.375,444.175);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgGg6QgEgDAAgGQAAgGAEgCQADgDADAAQAEAAADADQAEACAAAGQAAAGgEADQgDADgEAAQgDAAgDgDg");
	this.shape_427.setTransform(409.05,442.025);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_428.setTransform(402.675,444.075);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_429.setTransform(391.125,444.175);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAZBEIAJAfIABAAIAHgXIAchMIASAAIgsBzg");
	this.shape_430.setTransform(380.1,444.175);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FFFFFF").s().p("AAyBNIgTgxIg9AAIgTAxIgSAAIA9iaIAOAAIA8CagAAZAMIgSguIgHgXQgBAKgFANIgSAuIAxAAg");
	this.shape_431.setTransform(362.325,442.2);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FFFFFF").s().p("AgIALQgEgDAAgIQAAgGAEgEQADgDAFAAQAGAAADADQAEAEAAAGQAAAHgEAEQgDADgGAAQgFAAgDgDg");
	this.shape_432.setTransform(793.075,385.225);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FFFFFF").s().p("AgEAcIgFg3IATAAIgEA3g");
	this.shape_433.setTransform(787.875,373.725);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAWABANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgOAAIgDgPIgBAAQgMARgXAAQgXAAgMgPgAgXgJQgJALAAAWQAAAWAJALQAHAMAQAAQARAAAIgKQAIgKAAgWIAAgDQABgYgJgKQgIgLgRAAQgQAAgHAMg");
	this.shape_434.setTransform(778.6,378.25);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_435.setTransform(766.3,380.575);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FFFFFF").s().p("AAhA6IghgvIggAvIgUAAIArg6Igpg5IAVAAIAdAsIAegsIAUAAIgoA5IArA6g");
	this.shape_436.setTransform(754.6,380.575);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgDgDABgGQgBgGADgCQAEgDADAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgDAAgEgDg");
	this.shape_437.setTransform(746.25,378.425);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FFFFFF").s().p("AgSBTIAAhlIgVAAIAAgIIAVgGIAAgHQAAgrAkAAQAJAAANAEIgFAOQgKgDgHAAQgKAAgFAHQgEAGAAAPIAAAHIAdAAIAAAOIgdAAIAABlg");
	this.shape_438.setTransform(740.475,378.075);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FFFFFF").s().p("AgEAcIgFg3IATAAIgEA3g");
	this.shape_439.setTransform(733.875,373.725);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_440.setTransform(719.375,380.475);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgGg6QgEgDAAgGQAAgGAEgCQADgDADAAQAEAAADADQAEACAAAGQAAAGgEADQgDADgEAAQgDAAgDgDg");
	this.shape_441.setTransform(710,378.425);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_442.setTransform(700.875,380.575);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgQAAgHAJQgJAKABATIAABAIgRAAIAAhKQAAgOgGgHQgFgHgNAAQgQAAgIAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgIAIgFQAKgFALAAQAbAAAHAUIABAAQAFgJAKgGQAJgFAOAAQATAAAJAKQALAKgBAWIAABLg");
	this.shape_443.setTransform(685.3,380.475);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_444.setTransform(669.25,380.575);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_445.setTransform(659.575,380.475);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_446.setTransform(642.325,380.575);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAGgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_447.setTransform(631.9,379.325);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAXABAMAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgOAAIgDgPIgBAAQgMARgXAAQgXAAgMgPgAgXgJQgJALABAWQgBAWAJALQAHAMAQAAQARAAAIgKQAIgKAAgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_448.setTransform(615.7,378.25);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_449.setTransform(603.4,380.575);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQANgQAWAAQAWABANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgOAAIgDgPIgBAAQgMARgXAAQgWAAgNgPgAgXgJQgJALABAWQgBAWAJALQAHAMAQAAQARAAAIgKQAJgKgBgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_450.setTransform(590.4,378.25);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgOAAgIAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_451.setTransform(578.15,380.575);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgHgJgNAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_452.setTransform(566.1,380.575);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_453.setTransform(553.475,380.475);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgQAAgHAJQgJAKABATIAABAIgRAAIAAhKQAAgOgGgHQgFgHgNAAQgRAAgHAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgIAIgFQAKgFAKAAQAcAAAHAUIABAAQAFgJAKgGQAJgFAOAAQATAAAKAKQAKAKgBAWIAABLg");
	this.shape_454.setTransform(531.3,380.475);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_455.setTransform(515.2,380.575);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_456.setTransform(505.25,379.325);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDAAgGQAAgGADgCQADgDADAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgDAAgDgDg");
	this.shape_457.setTransform(498.8,378.425);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_458.setTransform(483.925,380.475);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_459.setTransform(470.875,380.575);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FFFFFF").s().p("AgSBTIAAhlIgVAAIAAgIIAVgGIAAgHQAAgrAkAAQAJAAANAEIgFAOQgKgDgHAAQgKAAgFAHQgEAGAAAPIAAAHIAdAAIAAAOIgdAAIAABlg");
	this.shape_460.setTransform(456.675,378.075);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgCgDgBgGQABgGACgCQAEgDADAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgDAAgEgDg");
	this.shape_461.setTransform(449.7,378.425);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FFFFFF").s().p("AgiAuIACgOIANg7IgSAAIADgLIAUgJIANgYIAPAAIgGAaIAeAAIgEASIgeAAIgMA8IgBAJQAAAFADADQACACAFAAQAHAAAJgDIAAATIgKADIgMABQgdAAAAgag");
	this.shape_462.setTransform(438.175,379.325);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FFFFFF").s().p("AANA7IAQhGIABgNQAAgOgNAAQgIAAgHAGQgGAGgHALQgFALgEAOIgKAxIgYAAIAYhzIAUAAIgDAVIABAAQAJgMAIgGQAKgFALAAQAOAAAHAIQAJAIAAAOQgBAIgCALIgPBEg");
	this.shape_463.setTransform(426.8,380.425);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FFFFFF").s().p("AguAyQgJgLAAgTQAAgVAIgSQAHgTANgLQANgKAOAAQAKAAAIAEQAHAFAEAJIABAAIAHgQIATAAIgZBzIgTAAIACgSIgBAAQgQAUgUAAQgPAAgIgKgAgMgfQgIAIgFAOQgFANAAAPQAAALAFAFQAEAFAHAAQAJAAAHgIQAJgIAFgOQAFgMAAgRQAAgJgEgGQgFgFgIAAQgIAAgIAIg");
	this.shape_464.setTransform(414.825,380.525);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FFFFFF").s().p("AgiAuIACgOIANg7IgSAAIADgLIAUgJIANgYIAPAAIgGAaIAeAAIgEASIgeAAIgMA8IgBAJQAAAFADADQACACAFAAQAHAAAJgDIAAATIgKADIgMABQgdAAAAgag");
	this.shape_465.setTransform(405.075,379.325);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FFFFFF").s().p("AgtA1IAAgVQAQAJARAAQAKAAAGgEQAGgEAAgHQAAgGgEgEQgDgDgLgHQgNgGgFgHQgGgIAAgKQAAgQAMgJQALgJASAAQAVAAAQAIIgIATQgPgIgNAAQgIAAgEADQgFAEAAAGQAAAFAEAEQADADAKAGQALAGAFAEQAEAEADAFQACAGAAAGQAAATgMAKQgNAJgVAAQgUAAgOgHg");
	this.shape_466.setTransform(395.325,380.525);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FFFFFF").s().p("AANA7IAQhGIACgNQgBgOgNAAQgIAAgHAGQgGAGgHALQgFALgEAOIgKAxIgZAAIAZhzIAUAAIgDAVIABAAQAJgMAIgGQAKgFAKAAQAPAAAIAIQAHAIABAOQgBAIgCALIgOBEg");
	this.shape_467.setTransform(383.95,380.425);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FFFFFF").s().p("AgnAwQgMgMAAgVQAAgUAHgRQAIgSANgJQAOgKARAAQAVAAALAMQAMAMAAAVQAAAVgIARQgHARgOAKQgOAJgQAAQgVAAgLgMgAgJgfQgJAHgDANQgFAMAAAPQAAALAGAHQAFAGAJAAQAJAAAIgHQAHgHAFgNQAEgNAAgPQAAgLgGgGQgEgHgKAAQgJAAgHAIg");
	this.shape_468.setTransform(371.75,380.525);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FFFFFF").s().p("AgiAxQgLgLAAgVQAAgVAHgRQAIgSAOgKQAOgKARAAQARAAAOAGIgHATQgNgFgKAAQgQAAgKAQQgKAQAAAXQAAAMAGAGQAGAGAJAAQAIAAAHgCIANgGIAAAVQgOAHgRAAQgVAAgLgLg");
	this.shape_469.setTransform(361.125,380.525);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_470.setTransform(1057.575,348.775);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_471.setTransform(1040.4,348.775);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQAMAAAIgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgQgFgGgFQgHgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgLAAgHAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgXAAgNgHg");
	this.shape_472.setTransform(1029.25,348.775);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_473.setTransform(1017.425,348.875);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQAMgPAXAAQAWAAANARIABAAIAAgJIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgXAAgMgQgAgXgJQgIALAAAWQAAAWAIALQAIAMAPAAQARAAAIgLQAJgJAAgWIAAgDQgBgYgIgKQgIgLgRAAQgPAAgIAMg");
	this.shape_474.setTransform(998.35,346.45);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_475.setTransform(989.325,346.35);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_476.setTransform(979.975,348.875);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_477.setTransform(966.925,348.775);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgIgcIAAAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAHAfIAAAAIAEgPIAFgQIAVhBIASAAIAVBBQAFATADAMIABAAIACgMIAVhUIASAAIgfBzg");
	this.shape_478.setTransform(952,348.775);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_479.setTransform(931.375,348.875);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_480.setTransform(918.325,348.775);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FFFFFF").s().p("AgIBNIAAg7IgzheIATAAIAoBMIAphMIATAAIgzBdIAAA8g");
	this.shape_481.setTransform(905.75,346.85);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FFFFFF").s().p("AgIALQgEgDAAgIQAAgGAEgEQADgDAFAAQAGAAADADQAEAEAAAGQAAAHgEAEQgDADgGAAQgFAAgDgDg");
	this.shape_482.setTransform(885.725,353.425);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FFFFFF").s().p("AgjAtQgQgQABgcQgBgcAOgQQAOgQAZAAQAWAAAOAOQANAOAAAYIAAANIhMAAQABAQAIAKQAJAJAOAAQAKAAAKgCQAIgCALgFIAAAUQgKAFgIACQgKABgMAAQgaAAgPgPgAAbgLQAAgPgHgHQgGgIgMAAQgLAAgHAIQgIAHgBAPIA0AAIAAAAg");
	this.shape_483.setTransform(876.7,348.725);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FFFFFF").s().p("AgrBNQgNgJAAgPQAAgLAHgHQAHgIAMgDQgFgCgDgEQgDgFAAgFQAAgHADgDQAEgFAHgEQgJgEgFgJQgGgJAAgMQAAgTAMgKQAMgKAWAAIAJAAIAJACIAoAAIAAANIgUAEIAFAJQABAFAAAGQAAASgMALQgNAKgUAAIgKgBQgIAFAAAGQAAAEADACQAEACAKAAIATAAQAUAAAKAIQAKAIAAAQQAAAUgRAKQgQALgeAAQgYAAgMgIgAgbAmQgHAFAAAIQAAAIAIAFQAHAEANAAQATAAAKgGQAKgGAAgJQAAgIgFgDQgGgDgPAAIgRAAQgLAAgGAFgAgRg+QgGAGAAALQAAALAGAGQAFAGALAAQAUAAAAgXQAAgLgFgGQgFgHgKAAQgLAAgFAHg");
	this.shape_484.setTransform(864.375,351.225);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FFFFFF").s().p("AAaA7IAAhGQAAgOgFgHQgFgGgMAAQgPAAgHAJQgIAJAAAVIAAA6IgYAAIAAhzIATAAIADAPIACAAQAFgIAKgFQAJgEALAAQAqAAAAAqIAABLg");
	this.shape_485.setTransform(851.65,348.625);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FFFFFF").s().p("AgnAzQgKgJAAgRQAAgSAOgIQANgKAaAAIAVgBIAAgGQAAgLgGgGQgEgGgMAAQgIAAgIADIgPAGIgIgRQAJgFALgDQAMgCAIAAQAXAAALAJQALAKAAAVIAABNIgSAAIgEgQIgBAAQgIALgJAEQgIADgNAAQgRAAgKgJgAAKADQgRABgIAFQgIAFAAALQAAAIAFAEQAFAEAJAAQAMAAAJgHQAHgIABgNIAAgKg");
	this.shape_486.setTransform(838.2,348.725);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FFFFFF").s().p("AAbBSIAAhIQAAgMgGgHQgFgGgMgBQgPAAgHAKQgHAIAAAWIAAA6IgaAAIAAijIAaAAIAAApIgCAWIACAAQAFgIAJgFQAJgFALABQAqAAAAApIAABMg");
	this.shape_487.setTransform(825.5,346.35);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FFFFFF").s().p("AgeAtQgNgQAAgcQgBgdAOgQQAPgPAaAAQASAAAQAGIgIAUQgQgGgKAAQgdAAAAAnQAAAUAIAKQAHAKANAAQARAAAOgJIAAAWQgGAEgHACQgIABgKAAQgaAAgOgPg");
	this.shape_488.setTransform(813.45,348.725);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FFFFFF").s().p("AgcA1QgMgHgIgOQgGgOAAgSQAAgcAOgQQAPgPAaAAQAZAAAOAQQAPAQAAAbQAAAcgPAQQgOAQgaAAQgQAAgMgHgAgWgdQgGAKgBATQAAAoAdAAQAdAAABgoQgBgngdAAQgOAAgIAKg");
	this.shape_489.setTransform(795.8,348.725);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FFFFFF").s().p("AgVAjIAAg+IgQAAIAAgLIARgJIAJgYIAOAAIAAAaIAhAAIAAASIghAAIAAA+QAAAJAFAEQAEAEAHAAQAJAAAKgDIAAATIgLADIgNABQgjAAAAglg");
	this.shape_490.setTransform(784.925,347.525);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FFFFFF").s().p("AgqA1IAAgVQAVAJASAAQAVAAAAgNQAAgFgCgDQgDgDgFgDIgQgHQgUgHgHgIQgHgIAAgMQAAgPAMgIQAMgIAUAAQAVAAASAIIgIASQgTgHgNAAQgSAAAAALQAAAFAFAEQAFAEAQAHQAOAFAHAEQAGAEAEAHQADAGAAAIQAAARgNAJQgMAJgWAAQgYAAgOgHg");
	this.shape_491.setTransform(769.975,348.725);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FFFFFF").s().p("AgoBDQgMgQAAgcQAAgcAMgPQAMgRAXABQAWAAALAQIACAAIgCgUIAAgqIAZAAIAACjIgTAAIgFgQIgBAAQgMASgWAAQgWAAgMgQgAgUgGQgHAJAAAVQABATAGAKQAHAKANAAQAPAAAHgJQAHgIAAgTIAAgEQAAgWgHgIQgHgKgPAAQgNAAgHALg");
	this.shape_492.setTransform(757.6,346.45);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FFFFFF").s().p("AgjAtQgPgQgBgcQABgcAOgQQAOgQAYAAQAXAAANAOQAOAOAAAYIAAANIhNAAQABAQAIAKQAIAJAQAAQAJAAAKgCQAIgCALgFIAAAUQgJAFgJACQgKABgMAAQgaAAgPgPgAAbgLQAAgPgHgHQgHgIgLAAQgLAAgHAIQgHAHgCAPIA0AAIAAAAg");
	this.shape_493.setTransform(745.05,348.725);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FFFFFF").s().p("AgjAtQgQgQAAgcQAAgcAPgQQANgQAYAAQAYAAANAOQAOAOAAAYIAAANIhNAAQAAAQAJAKQAIAJAQAAQAKAAAIgCQAJgCAKgFIAAAUQgJAFgJACQgJABgMAAQgaAAgPgPgAAbgLQAAgPgHgHQgHgIgMAAQgKAAgIAIQgGAHgCAPIA0AAIAAAAg");
	this.shape_494.setTransform(732.65,348.725);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FFFFFF").s().p("AAaA7IAAhGQAAgOgFgHQgGgGgLAAQgPAAgHAJQgHAJgBAVIAAA6IgZAAIAAhzIAUAAIAEAPIABAAQAFgIAKgFQAJgEALAAQAqAAABAqIAABLg");
	this.shape_495.setTransform(719.6,348.625);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_496.setTransform(703.25,347.525);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_497.setTransform(692.975,348.675);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_498.setTransform(680.35,348.775);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_499.setTransform(670.35,347.525);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_500.setTransform(660.075,348.675);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_501.setTransform(646.925,348.775);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_502.setTransform(635.525,348.775);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgGAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFACADQADAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_503.setTransform(619.5,348.775);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FFFFFF").s().p("AgEAcIgFg3IATAAIgEA3g");
	this.shape_504.setTransform(611.925,341.925);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAGgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_505.setTransform(605.7,347.525);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQADACAAAGQAAAGgDADQgDADgEAAQgEAAgDgDg");
	this.shape_506.setTransform(599.25,346.625);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_507.setTransform(584.375,348.675);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgIAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_508.setTransform(571.75,348.775);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALAKQAKALAAAVIAABLg");
	this.shape_509.setTransform(559.125,346.35);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgHgcIgBAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAGAfIABAAIAEgPIAEgQIAWhBIASAAIAVBBQAFATADAMIABAAIABgMIAXhUIASAAIggBzg");
	this.shape_510.setTransform(544.05,348.775);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQAMgPAXAAQAXAAAMARIABAAIAAgJIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgXAAgMgQgAgXgJQgIALAAAWQAAAWAIALQAHAMAQAAQARAAAIgLQAJgJAAgWIAAgDQgBgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_511.setTransform(523.15,346.45);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAKALAQAAQASAAATgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_512.setTransform(510.9,348.775);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgGAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_513.setTransform(499.75,348.775);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_514.setTransform(487.925,348.875);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQAMAAAIgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgPgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgXAAgNgHg");
	this.shape_515.setTransform(470.7,348.775);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDAAgGQAAgGADgCQADgDADAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgDAAgDgDg");
	this.shape_516.setTransform(462.8,346.625);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAKALQAJALARAAQASAAATgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgCAQIA8AAIAAAAg");
	this.shape_517.setTransform(448.5,348.775);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_518.setTransform(439.675,346.35);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgRAXAAQAXAAAMAPQANAPAAAcQAAAcgNAQQgMAQgXAAQgKAAgKgEgAgZgKQgHAJgBAYQABAZAHAKQAJALAQAAQARAAAIgNQAIgLAAgWQAAgXgIgKQgIgLgRAAQgQAAgJALg");
	this.shape_519.setTransform(430.7,346.45);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_520.setTransform(417.375,348.775);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgGg6QgEgDAAgGQAAgGAEgCQADgDADAAQAEAAADADQAEACAAAGQAAAGgEADQgDADgEAAQgDAAgDgDg");
	this.shape_521.setTransform(409.05,346.625);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_522.setTransform(402.675,348.675);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_523.setTransform(391.125,348.775);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAZBEIAJAfIABAAIAHgXIAchMIASAAIgsBzg");
	this.shape_524.setTransform(380.1,348.775);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FFFFFF").s().p("AAyBNIgTgxIg9AAIgTAxIgSAAIA9iaIAOAAIA8CagAAZAMIgSguIgHgXQgBAKgFANIgSAuIAxAAg");
	this.shape_525.setTransform(362.325,346.8);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#FFFFFF").s().p("AgzBBIAAgaQAZAMAVAAQAbAAAAgRQAAgGgDgDQgCgEgIgEIgSgJQgZgIgJgKQgJgJAAgPQABgTAPgKQAOgKAYAAQAZAAAXAKIgKAXQgXgJgQAAQgXAAAAANQAAAHAHAFQAGAEAUAIQARAHAIAFQAJAGADAHQAFAHAAALQAAAVgQALQgPALgcAAQgcAAgRgJg");
	this.shape_526.setTransform(466.6,282.375);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#FFFFFF").s().p("AgrA2QgTgTAAgiQAAgiARgUQASgUAdAAQAcAAARARQAQARAAAeIAAAQIheAAQABAVAKALQALALASAAQANAAALgCQAKgDANgFIAAAYQgLAFgLADQgMACgOAAQghAAgSgUgAAhgOQAAgSgIgJQgIgJgPAAQgNAAgJAJQgJAJgBASIA/AAIAAAAg");
	this.shape_527.setTransform(452.525,282.375);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#FFFFFF").s().p("AgOBkIAAjHIAdAAIAADHg");
	this.shape_528.setTransform(441.275,279.475);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#FFFFFF").s().p("AghBSIgCAAIgGARIgXAAIAAjHIAfAAIAAAvIgBAQIgBANIACAAQAOgVAbAAQAbAAAPATQAPAUAAAhQAAAjgPAUQgPATgbAAQgaAAgPgTgAgZgKQgIAKAAAZIAAACQAAAaAIAMQAIAMASAAQAQAAAIgNQAJgNAAgYQAAgwgiABQgRgBgIALg");
	this.shape_529.setTransform(429.775,279.6);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#FFFFFF").s().p("AgvA+QgMgLgBgVQAAgWARgKQARgLAggBIAYgBIAAgHQABgOgHgHQgGgHgOAAQgJAAgLAEIgTAHIgKgWQAMgGAOgDQAOgDALAAQAbAAANAMQAPAMAAAZIAABfIgWAAIgGgUIgBAAQgLANgKAFQgKAFgQAAQgVAAgLgMgAAMAEQgVABgJAGQgKAGAAAOQAAAJAFAFQAGAGALAAQAQAAAKgKQAKgJAAgQIAAgNg");
	this.shape_530.setTransform(413.05,282.375);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#FFFFFF").s().p("AgPBjIAAiOIAeAAIAACOgAgLhFQgFgEAAgIQAAgIAFgFQAEgDAHAAQAIAAAEADQAFAFAAAIQAAAIgFAEQgEAFgIAAQgHAAgEgFg");
	this.shape_531.setTransform(402.25,279.65);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#FFFFFF").s().p("AgrBJIAAiOIAYAAIAEAZIACAAQAHgNAKgHQAMgIANABIAPABIgDAcQgHgBgHAAQgSAAgKALQgLAMAAATIAABKg");
	this.shape_532.setTransform(393.725,282.25);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#FFFFFF").s().p("AgwA+QgMgLAAgVQAAgWARgKQARgLAggBIAYgBIAAgHQAAgOgGgHQgHgHgNAAQgKAAgJAEIgUAHIgKgWQAMgGANgDQAOgDALAAQAcAAAOAMQANAMAAAZIAABfIgVAAIgGgUIgBAAQgLANgKAFQgKAFgQAAQgVAAgMgMgAAMAEQgUABgKAGQgKAGAAAOQAAAJAFAFQAHAGAKAAQAQAAAKgKQAKgJAAgQIAAgNg");
	this.shape_533.setTransform(379.1,282.375);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#FFFFFF").s().p("AgPBeIhCi7IAfAAIAoB0IAGAWIAEATIAFgWIAGgUIAnhzIAgAAIhCC7g");
	this.shape_534.setTransform(363.7,280.075);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAWABANAQIABAAIAAgIIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgXAAgMgPgAgXgJQgIALAAAWQAAAWAIALQAIAMAPAAQARgBAIgJQAJgKAAgWIAAgDQgBgYgIgKQgIgLgRAAQgPAAgIAMg");
	this.shape_535.setTransform(858.85,609.45);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQANgQAWAAQAWABANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgOAAIgDgQIgBAAQgMASgXAAQgWAAgNgPgAgXgJQgJALABAWQgBAWAJALQAHAMAQAAQARgBAIgJQAJgKgBgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_536.setTransform(828,609.45);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_537.setTransform(731.45,610.525);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAOAAIADAQIABAAQAHgKAIgEQAJgEALAAQAXAAANAQQAMAPAAAdQAAAbgNAQQgMAQgXAAQgLAAgJgEQgJgEgGgJIgBAAIABATIAAAwgAgYg7QgIAKAAAVIAAAEQAAAYAIAKQAIAKAQAAQAQAAAIgMQAJgLAAgVQAAgWgJgLQgIgMgQAAQgRAAgHAKg");
	this.shape_538.setTransform(599.75,614.275);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAPIACAAQAFgIAJgEQAKgGALAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_539.setTransform(543.525,609.35);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgIgcIAAAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAHAfIABAAIADgPIAFgQIAVhBIASAAIAVBBQAFATADAMIABAAIACgMIAVhUIASAAIgfBzg");
	this.shape_540.setTransform(506.05,611.775);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#FFFFFF").s().p("AAZBSIgog3IgNAMIAAArIgRAAIAAijIARAAIAABWIgBASIABAAIAOgRIAkgnIAVAAIguAxIAxBCg");
	this.shape_541.setTransform(466.625,609.35);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAWABANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgPAAIgCgQIgBAAQgMASgXAAQgXAAgMgPgAgXgJQgIALAAAWQAAAWAIALQAIAMAPAAQARgBAIgJQAJgKgBgWIAAgDQAAgYgIgKQgIgLgRAAQgPAAgIAMg");
	this.shape_542.setTransform(421.45,609.45);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQATAAASgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_543.setTransform(1017,579.975);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgGgJIgCAAIgEAPIgMAAIAAijIASAAIAAAoIgCAYIACAAQAMgRAXAAQAXAAANAPQAMAQAAAbQAAAcgNAQQgMAQgXAAQgLAAgJgEgAgZgKQgHAJAAAYQAAAZAHAKQAJALAQgBQARAAAIgMQAHgLABgWQgBgXgHgKQgIgLgRAAQgQAAgJALg");
	this.shape_544.setTransform(1004.65,577.65);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgPAAgJAJQgHAKgBATIAABAIgQAAIAAhKQAAgOgFgHQgHgHgMAAQgRAAgHAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIACAQIABAAQAGgIAJgFQAJgFAKAAQAcAAAHAUIABAAQAFgJAKgGQAJgFANAAQAUAAAKAKQAJAKABAWIAABLg");
	this.shape_545.setTransform(987.75,579.875);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgQAAgJAJQgHAKgBATIAABAIgQAAIAAhKQAAgOgFgHQgHgHgMAAQgRAAgHAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIACAQIABAAQAGgIAJgFQAIgFAMAAQAbAAAHAUIABAAQAFgJAKgGQAJgFANAAQAUAAAJAKQALAKAAAWIAABLg");
	this.shape_546.setTransform(930.05,579.875);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALALQAKAKAAAUIAABMg");
	this.shape_547.setTransform(855.325,577.55);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_548.setTransform(844.8,578.725);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQANgPAWAAQAWgBANASIACAAIgBgJIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgWAAgNgQgAgYgJQgHALAAAVQAAAXAHALQAIALAQAAQARAAAIgKQAJgJAAgWIAAgEQAAgXgJgKQgIgLgRAAQgQAAgIAMg");
	this.shape_549.setTransform(815.55,577.65);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgQAAgJAJQgHAKgBATIAABAIgQAAIAAhKQAAgOgFgHQgHgHgMAAQgRAAgHAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIACAQIABAAQAGgIAJgFQAIgFAMAAQAbAAAHAUIABAAQAFgJAKgGQAJgFANAAQAUAAAJAKQALAKAAAWIAABLg");
	this.shape_550.setTransform(768.5,579.875);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_551.setTransform(730.5,578.725);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQAAgKAIgIQAGgIANgCQgFgCgDgFQgDgEAAgFQAAgHADgDQADgFAIgFQgJgDgFgJQgHgJAAgLQAAgTAMgLQALgKAWAAQAHAAAIACIAnAAIAAALIgUADIAEAJQADAGAAAIQAAARgMAKQgMAKgSAAIgKgBQgLAGAAAIQAAAFADACQAEACAKAAIAUAAQASAAAKAIQAKAIAAAPQAAATgPALQgPAKgdAAQgXAAgMgJgAgeAkQgGAGgBAKQAAAKAJAEQAHAFAPAAQAVAAALgGQAKgHAAgLQAAgKgFgDQgHgEgQAAIgTAAQgMAAgHAGgAgUhBQgHAHAAANQAAAMAHAHQAGAGANAAQAYAAABgZQAAgagZAAQgNAAgGAGg");
	this.shape_552.setTransform(673.35,582.475);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#FFFFFF").s().p("AAZBSIgog2IgNALIAAArIgRAAIAAijIARAAIAABWIgBASIABAAIAOgRIAkgmIAVAAIguAvIAxBDg");
	this.shape_553.setTransform(644.075,577.55);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgIgcIAAAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAHAfIAAAAIAEgPIAEgQIAWhBIASAAIAVBBQAFATADAMIABAAIABgMIAWhUIASAAIgfBzg");
	this.shape_554.setTransform(607.4,579.975);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALALQAKAKAAAUIAABMg");
	this.shape_555.setTransform(561.625,577.55);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgIgcIAAAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAHAfIABAAIADgPIAFgQIAVhBIASAAIAVBBQAFATADAMIABAAIACgMIAVhUIASAAIgfBzg");
	this.shape_556.setTransform(546.55,579.975);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAKALQAJALARAAQASAAATgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgOAAgHAJQgJAJgCAQIA8AAIAAAAg");
	this.shape_557.setTransform(500.7,579.975);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgGgFQgFgFgRgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgLAAgHAEQgGAEAAAGQAAAFADADQABAEAGADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_558.setTransform(489.55,579.975);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAKALAQAAQATAAASgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_559.setTransform(459.6,579.975);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALALQAKAKAAAUIAABMg");
	this.shape_560.setTransform(397.725,577.55);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#FFFFFF").s().p("AgIBNIAAiKIgxAAIAAgPIBzAAIAAAPIgxAAIAACKg");
	this.shape_561.setTransform(385.075,578.05);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#FFFFFF").s().p("AgeBOQgKgCgKgFIAAgRQAKAFAMADQALACAKAAQAnAAAAgfQAAgcgrAAIgPAAIAAgOIAPAAQASAAAKgIQALgIAAgOQAAgLgIgHQgIgGgMAAQgKAAgKADQgIACgMAIIgJgMQAKgIAMgEQAMgEAOAAQAWAAAMAKQANAKAAASQgBAPgHAJQgJAKgPADIAAABQATACAIAJQAJAJAAAQQAAAWgPAMQgPALgbAAQgMAAgLgBg");
	this.shape_562.setTransform(361.55,578.025);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgGgFgPgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQABAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_563.setTransform(830.15,548.175);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQATAAASgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_564.setTransform(819,548.175);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#FFFFFF").s().p("AgpBMQgMgIAAgQQAAgKAGgIQAHgIANgCQgFgCgDgFQgDgEAAgFQAAgHAEgDQADgFAHgFQgJgDgGgJQgFgJAAgLQAAgTALgLQALgKAWAAQAHAAAHACIApAAIAAALIgWADIAGAJQACAGAAAIQAAARgMAKQgLAKgUAAIgKgBQgLAGAAAIQAAAFAFACQADACAKAAIATAAQATAAAKAIQAKAIAAAPQAAATgPALQgPAKgdAAQgXAAgMgJgAgeAkQgHAGABAKQAAAKAHAEQAIAFAPAAQAVAAALgGQALgHAAgLQAAgKgHgDQgFgEgQAAIgVAAQgLAAgHAGgAgVhBQgGAHAAANQAAAMAHAHQAGAGANAAQAYAAAAgZQAAgagZAAQgLAAgIAGg");
	this.shape_565.setTransform(777.35,550.675);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#FFFFFF").s().p("AgQBPQgKgEgGgJIgBAAIgFAPIgMAAIAAijIASAAIAAAoIgBAYIABAAQAMgRAXgBQAXABANAPQAMAPAAAcQAAAdgNAPQgNAQgWAAQgKAAgJgEgAgYgLQgJALABAXQgBAYAJALQAIAKARAAQAQABAIgMQAHgMAAgWQAAgWgHgLQgIgLgQAAQgSAAgHAKg");
	this.shape_566.setTransform(752.05,545.85);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgRAXgBQAWABANAPQANAPAAAcQAAAdgNAPQgMAQgXAAQgKAAgKgEgAgZgLQgHALgBAXQABAYAHALQAJAKAQAAQARABAIgMQAIgMAAgWQAAgWgIgLQgIgLgRAAQgQAAgJAKg");
	this.shape_567.setTransform(699.45,545.85);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgQAAgHAJQgJAKABATIAABAIgRAAIAAhKQAAgOgGgHQgFgHgNAAQgRAAgHAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgIAIgFQAKgFAKAAQAcAAAHAUIABAAQAFgJAKgGQAJgFAOAAQATAAAKAKQAKAKgBAWIAABLg");
	this.shape_568.setTransform(613.65,548.075);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQAMgPAXgBQAXAAAMARIACAAIgBgIIAAgIIAAgvIARAAIAACjIgOAAIgDgPIAAAAQgNARgXAAQgXAAgMgQgAgYgJQgIALAAAVQAAAXAIALQAJALAPAAQARABAJgKQAHgKABgWIAAgEQAAgXgJgLQgIgKgRAAQgPAAgJAMg");
	this.shape_569.setTransform(531.3,545.85);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAOAAIACAQIABAAQAIgKAIgEQAJgEALAAQAXAAAMAQQANAPAAAdQAAAbgNAQQgMAQgXAAQgKAAgKgEQgJgEgHgJIgBAAIABATIAAAwgAgZg7QgHAKgBAVIAAAEQABAYAHAKQAJAKAQAAQAPAAAKgMQAHgLABgVQgBgWgHgLQgKgMgPAAQgQAAgJAKg");
	this.shape_570.setTransform(480.75,550.675);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#FFFFFF").s().p("Ag0BSIAAgOQAGABAHAAQASAAAIgUIAHgRIgvhzIATAAIAZBCQAIAWABAKIABAAIAGgSIAdhQIASAAIgxCDQgHATgJAJQgKAIgPAAQgIAAgIgCg");
	this.shape_571.setTransform(421.725,550.775);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgFALgBQAVAAALALQAKAJAAAVIAABMg");
	this.shape_572.setTransform(397.725,545.75);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#FFFFFF").s().p("AgIBNIAAiKIgxAAIAAgPIBzAAIAAAPIgxAAIAACKg");
	this.shape_573.setTransform(385.075,546.25);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQANAAAHgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgRgFgHgFQgGgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_574.setTransform(834.35,516.375);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAKALAQAAQASAAATgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_575.setTransform(823.2,516.375);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAXABAMAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgPAAIgCgQIgBAAQgMASgXAAQgXAAgMgPgAgXgJQgIALAAAWQAAAWAIALQAHAMAQAAQARgBAIgJQAJgKgBgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_576.setTransform(797.2,514.05);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQANgQAWAAQAWABANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgOAAIgDgQIgBAAQgMASgXAAQgWAAgNgPgAgXgJQgJALABAWQgBAWAJALQAHAMAQAAQARgBAIgJQAJgKgBgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_577.setTransform(766.35,514.05);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQASAAATgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgIAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_578.setTransform(677.05,516.375);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAOAAIADAQIABAAQAGgKAKgEQAIgEALAAQAXAAANAQQAMAPAAAdQAAAbgNAQQgNAQgWAAQgLAAgIgEQgKgEgGgJIgBAAIABATIAAAwgAgYg7QgIAKAAAVIAAAEQgBAYAJAKQAIAKARAAQAPAAAIgMQAJgLgBgVQABgWgJgLQgIgMgPAAQgSAAgHAKg");
	this.shape_579.setTransform(659.25,518.875);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAPIACAAQAFgIAJgEQAKgGALAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_580.setTransform(628.125,513.95);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_581.setTransform(617.55,515.125);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAPIACAAQAFgIAJgEQAKgGALAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_582.setTransform(582.075,513.95);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQANgQAWAAQAWABANAQIACAAIgBgIIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgWAAgNgPgAgYgJQgHALAAAWQAAAWAHALQAIAMAQAAQARgBAIgJQAJgKAAgWIAAgDQAAgYgJgKQgIgLgRAAQgQAAgIAMg");
	this.shape_583.setTransform(498.75,514.05);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#FFFFFF").s().p("Ag0BSIAAgOQAGABAHAAQASAAAIgUIAHgRIgvhzIATAAIAZBCQAIAWABAKIABAAIAGgSIAdhQIASAAIgxCDQgHATgJAJQgKAIgPAAQgIAAgIgCg");
	this.shape_584.setTransform(421.725,518.975);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAPIACAAQAFgIAJgEQAKgGALAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_585.setTransform(397.725,513.95);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#FFFFFF").s().p("AgIBNIAAiJIgxAAIAAgQIBzAAIAAAQIgxAAIAACJg");
	this.shape_586.setTransform(385.075,514.45);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#FFFFFF").s().p("AALBNIAAhtIAAgaIgFAFIgYAVIgJgMIAoggIAPAAIAACZg");
	this.shape_587.setTransform(360.275,514.45);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#FFFFFF").s().p("AgIA6QgEgEAAgHQAAgHAEgEQADgEAFAAQAGAAADAEQAEAEAAAHQAAAGgEAEQgDAEgGAAQgFAAgDgDgAgIgjQgEgDAAgIQAAgOAMAAQANAAAAAOQAAAHgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_588.setTransform(437.975,452.775);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPAMgIQALgIATAAQATAAASAIIgGAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_589.setTransform(393.55,452.775);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAKALAQAAQATAAASgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_590.setTransform(370.4,452.775);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_591.setTransform(975.55,420.975);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQANAAAHgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgRgFgHgFQgGgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_592.setTransform(964.4,420.975);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#FFFFFF").s().p("AgSBTIAAhlIgVAAIAAgIIAVgGIAAgHQAAgrAkAAQAJAAANAEIgFAOQgKgDgHAAQgKAAgFAHQgEAGAAAPIAAAHIAdAAIAAAOIgdAAIAABlg");
	this.shape_593.setTransform(928.825,418.475);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAXABAMAQIACAAIgBgIIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgXAAgMgPgAgYgJQgHALgBAWQABAWAHALQAJAMAPAAQARgBAJgJQAHgKABgWIAAgDQAAgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_594.setTransform(912.1,418.65);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQASAAATgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgIAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_595.setTransform(899.8,420.975);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgGgFgPgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQABAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_596.setTransform(888.65,420.975);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgGgJIgBAAIgFAPIgMAAIAAijIASAAIAAAoIgBAYIABAAQAMgSAXAAQAXAAANAQQAMAPAAAcQAAAcgNARQgNAPgWAAQgLAAgJgEgAgYgKQgIAJAAAYQAAAYAIALQAIALAQAAQARgBAIgMQAHgLAAgWQAAgWgHgLQgIgLgRAAQgRAAgHALg");
	this.shape_597.setTransform(846.35,418.65);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#FFFFFF").s().p("Ag0BSIAAgOQAGABAHAAQASAAAIgUIAHgRIgvhzIATAAIAZBCQAIAWABAKIABAAIAGgSIAdhQIASAAIgxCDQgHATgJAJQgKAIgPAAQgIAAgIgCg");
	this.shape_598.setTransform(787.375,423.575);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAPIACAAQAFgIAJgEQAKgGALAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_599.setTransform(763.375,418.55);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQABgKAGgIQAHgIAMgCQgEgCgDgFQgDgEAAgFQAAgHAEgDQADgFAHgFQgJgDgGgJQgFgJgBgLQAAgTAMgLQAMgKAUAAQAJAAAGACIApAAIAAALIgWADIAGAJQACAGAAAIQAAARgMAKQgLAKgUAAIgKgBQgLAGABAIQAAAFADACQAFACAJAAIATAAQATAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgHAGAAAKQABAKAHAEQAJAFAOAAQAVAAALgGQALgHAAgLQgBgKgFgDQgGgEgRAAIgUAAQgLAAgHAGgAgVhBQgGAHAAANQAAAMAHAHQAGAGANAAQAZAAgBgZQAAgagZAAQgLAAgIAGg");
	this.shape_600.setTransform(709.65,423.475);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAWABANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgOAAIgDgQIgBAAQgMASgXAAQgXAAgMgPgAgXgJQgJALAAAWQAAAWAJALQAHAMAQAAQARgBAIgJQAIgKAAgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_601.setTransform(678.25,418.65);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_602.setTransform(665.475,420.975);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_603.setTransform(654.075,420.975);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#FFFFFF").s().p("AgSBTIAAhlIgVAAIAAgIIAVgGIAAgHQAAgrAkAAQAJAAANAEIgFAOQgKgDgHAAQgKAAgFAHQgEAGAAAPIAAAHIAdAAIAAAOIgdAAIAABlg");
	this.shape_604.setTransform(597.225,418.475);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQASAAATgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_605.setTransform(587,420.975);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#FFFFFF").s().p("Ag0BSIAAgOQAGABAHAAQASAAAIgUIAHgRIgvhzIATAAIAZBCQAIAWABAKIABAAIAGgSIAdhQIASAAIgxCDQgHATgJAJQgKAIgPAAQgIAAgIgCg");
	this.shape_606.setTransform(546.425,423.575);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQASAAATgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_607.setTransform(526.25,420.975);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAZBEIAJAfIAAAAIAIgXIAchMIASAAIgsBzg");
	this.shape_608.setTransform(514.75,420.975);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgGgFQgFgFgRgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgLAAgHAEQgGAEAAAGQAAAFADADQABAEAGADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_609.setTransform(460.3,420.975);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_610.setTransform(451.25,419.725);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgPAAgJAJQgHAKAAATIAABAIgRAAIAAhKQAAgOgFgHQgGgHgNAAQgRAAgHAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIACAQIABAAQAFgIAJgFQAJgFALAAQAcAAAHAUIABAAQAFgJAKgGQAJgFANAAQAUAAAKAKQAJAKABAWIAABLg");
	this.shape_611.setTransform(412.3,420.875);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_612.setTransform(375.675,420.975);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#FFFFFF").s().p("AgnA7QgSgVgBgmQABgXAIgSQAKgSAQgJQARgKAWAAQAYAAASAJIgHAPQgSgIgRAAQgZAAgPARQgOARAAAcQAAAeAOARQAOAQAaAAQAPAAAWgFIAAAPQgQAGgYAAQgiAAgSgUg");
	this.shape_613.setTransform(362.65,419.025);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#FFFFFF").s().p("AgzBBIAAgaQAZAMAVAAQAcAAAAgRQgBgGgDgDQgCgEgIgEIgSgJQgZgIgJgKQgIgJgBgPQABgTAPgKQAOgKAYAAQAZAAAXAKIgJAXQgYgJgQAAQgXAAABANQgBAHAHAFQAGAEAUAIQASAHAHAFQAJAGADAHQAFAHAAALQAAAVgQALQgPALgcAAQgcAAgRgJg");
	this.shape_614.setTransform(487.4,354.575);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#FFFFFF").s().p("AgaArIAAhMIgTAAIAAgNIAVgLIAKgfIASAAIAAAhIAoAAIAAAWIgoAAIAABMQAAAKAFAGQAGAFAJAAQALAAALgDIAAAWIgNAEIgQACQgqgBgBgtg");
	this.shape_615.setTransform(475.7,353.1);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#FFFFFF").s().p("AAgBJIAAhXQAAgRgGgIQgHgIgOAAQgTAAgIAMQgJALAAAaIAABHIgfAAIAAiOIAYAAIAEASIACAAQAGgKAMgFQAMgGAOABQAzAAAAA0IAABcg");
	this.shape_616.setTransform(462.275,354.45);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#FFFFFF").s().p("ABLBJIAAhYQAAgQgGgIQgHgIgNAAQgSAAgIALQgIALAAAXIAABLIgdAAIAAhYQAAgQgHgIQgGgIgNAAQgRAAgJAMQgIALAAAaIAABHIgeAAIAAiOIAYAAIAEASIABAAQAGgKAMgFQALgGANABQAhgBAKAXIACAAQAGgLAMgGQALgFAPAAQAagBALANQAMANAAAbIAABcg");
	this.shape_617.setTransform(426.175,354.45);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#FFFFFF").s().p("ABLBJIAAhYQAAgQgGgIQgHgIgNAAQgSAAgIALQgIALAAAXIAABLIgdAAIAAhYQAAgQgHgIQgGgIgNAAQgRAAgJAMQgIALAAAaIAABHIgeAAIAAiOIAYAAIAEASIABAAQAGgKAMgFQALgGANABQAhgBAKAXIACAAQAGgLAMgGQALgFAPAAQAagBALANQAMANAAAbIAABcg");
	this.shape_618.setTransform(400.975,354.45);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#FFFFFF").s().p("AgiBBQgQgJgIgRQgIgRgBgWQABgiARgTQASgUAgAAQAfAAARAUQASAUABAhQgBAjgSATQgRAUggAAQgTAAgPgJgAgbgkQgIANAAAXQAAAxAkAAQAjAAABgxQAAgwglAAQgSAAgJAMg");
	this.shape_619.setTransform(380.25,354.575);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#FFFFFF").s().p("AgwBIQgWgZgBgvQABgcAKgWQALgWAVgMQAUgMAaAAQAdAAAYAMIgKAaIgUgIQgLgDgMAAQgZAAgPASQgQATAAAgQAAAjAPASQAPASAaAAQAMAAAMgDIAWgGIAAAaQgVAJgcAAQgpAAgWgZg");
	this.shape_620.setTransform(364.2,352.275);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAIgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_621.setTransform(781.6,851.225);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDgBgGQABgGADgCQADgDADAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgDAAgDgDg");
	this.shape_622.setTransform(621.55,850.325);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQAMgPAXAAQAXAAAMAQIACAAIgBgIIAAgIIAAgvIARAAIAACjIgOAAIgDgPIAAAAQgNARgXAAQgXAAgMgQgAgYgJQgHALgBAVQABAXAHALQAJALAPAAQARABAJgLQAHgJABgWIAAgEQAAgXgJgLQgIgKgRAAQgPAAgJAMg");
	this.shape_623.setTransform(541.65,850.15);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAPAAIABAQIABAAQAIgKAJgEQAIgEALAAQAXAAAMAQQANAPAAAdQAAAbgNAQQgNAQgWAAQgKAAgJgEQgKgEgHgJIgBAAIABATIAAAwgAgZg7QgHAKgBAVIAAAEQAAAYAIAKQAJAKARAAQAOAAAKgMQAHgLAAgVQAAgWgHgLQgKgMgOAAQgRAAgJAKg");
	this.shape_624.setTransform(503.85,854.975);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQANgPAWAAQAWAAANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgOAAIgDgPIgBAAQgMARgXAAQgWAAgNgQgAgXgJQgJALABAVQgBAXAJALQAHALAQAAQARABAIgLQAJgJgBgWIAAgEQAAgXgIgLQgIgKgRAAQgQAAgHAMg");
	this.shape_625.setTransform(477.9,850.15);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgLAAgHAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_626.setTransform(461,852.475);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgQAAgHAJQgIAKAAATIAABAIgRAAIAAhKQAAgOgGgHQgGgHgMAAQgRAAgHAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIACAQIACAAQAEgIAJgFQAKgFAKAAQAcAAAHAUIABAAQAFgJAKgGQAJgFAOAAQATAAAKAKQAJAKABAWIAABLg");
	this.shape_627.setTransform(422.75,852.375);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#FFFFFF").s().p("AgZAIIAAgPIAzAAIAAAPg");
	this.shape_628.setTransform(966.675,820.65);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgSAXAAQAWAAANAQQANAQAAAbQAAAcgNARQgNAPgWAAQgKAAgKgEgAgZgKQgIAJAAAYQAAAYAIALQAJALARAAQAQgBAIgLQAIgMAAgWQAAgXgIgKQgIgLgQAAQgRAAgJALg");
	this.shape_629.setTransform(907.15,818.35);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAYBEIAKAfIABAAIAHgXIAchMIASAAIgrBzg");
	this.shape_630.setTransform(766.9,820.675);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgJAJQgIAJgBAQIA7AAIAAAAg");
	this.shape_631.setTransform(749.95,820.675);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#FFFFFF").s().p("AAiBVIAAgyIAAgSIgBAAQgMASgXAAQgXAAgNgQQgMgQAAgbQAAgcANgQQAMgQAXAAQAWAAAOASIAAAAIADgQIAOAAIAACngAgXg5QgIAMAAAVQAAAWAIALQAHALAQAAQAQAAAIgJQAJgKABgVIAAgEQgBgYgIgLQgIgKgRAAQgQAAgHAMg");
	this.shape_632.setTransform(653.65,823.175);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgDgDAAgGQAAgGADgCQADgDAEAAQAEAAADADQADACAAAGQAAAGgDADQgDADgEAAQgEAAgDgDg");
	this.shape_633.setTransform(616.75,818.525);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#FFFFFF").s().p("AgwAHIAAgNIBhAAIAAANg");
	this.shape_634.setTransform(586.525,829.075);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#FFFFFF").s().p("AgQBPQgKgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgSAXAAQAWAAANAQQANAQAAAbQAAAcgNARQgNAPgWAAQgKAAgJgEgAgZgKQgIAJAAAYQABAYAHALQAJALAQAAQARgBAIgLQAIgMAAgWQAAgXgIgKQgIgLgRAAQgQAAgJALg");
	this.shape_635.setTransform(557.95,818.35);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAYBEIAKAfIAAAAIAIgXIAbhMIATAAIgsBzg");
	this.shape_636.setTransform(507.4,820.675);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAYBEIAKAfIABAAIAHgXIAchMIASAAIgrBzg");
	this.shape_637.setTransform(417.7,820.675);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgJAJQgIAJgBAQIA7AAIAAAAg");
	this.shape_638.setTransform(400.75,820.675);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQAAgKAHgIQAHgIAMgCQgEgCgDgFQgDgEAAgFQAAgHADgDQAEgFAHgFQgJgDgFgJQgHgJAAgLQAAgTAMgLQALgKAVAAQAIAAAIACIAnAAIAAALIgVADIAFAJQADAGAAAIQAAARgMAKQgMAKgTAAIgJgBQgLAGAAAIQAAAFADACQAEACAKAAIAUAAQASAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgGAGgBAKQAAAKAJAEQAIAFAOAAQAVAAALgGQAKgHAAgLQAAgKgFgDQgHgEgQAAIgTAAQgMAAgHAGgAgUhBQgHAHAAANQAAAMAHAHQAHAGAMAAQAYAAABgZQAAgagaAAQgMAAgGAGg");
	this.shape_639.setTransform(1070.35,791.375);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgEAAgDgDg");
	this.shape_640.setTransform(1048.55,786.725);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#FFFFFF").s().p("AAZBSIgog2IgNALIAAArIgRAAIAAijIARAAIAABWIgBASIABAAIAOgRIAkgnIAVAAIguAxIAxBCg");
	this.shape_641.setTransform(1041.025,786.45);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgGgFgPgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgGAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFACADQADAEAFADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_642.setTransform(1029.5,788.875);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgDgDABgGQgBgGADgCQAEgDADAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgDAAgEgDg");
	this.shape_643.setTransform(993.75,786.725);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#FFFFFF").s().p("AgIBNIAAiZIARAAIAACZg");
	this.shape_644.setTransform(974.8,786.95);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgGAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_645.setTransform(814.75,788.875);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgJAJQgIAJgBAQIA7AAIAAAAg");
	this.shape_646.setTransform(798.1,788.875);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQANgPAWAAQAWAAANARIABAAIgBgJIAAgIIAAgvIASAAIAACjIgPAAIgCgQIgBAAQgMASgXAAQgWAAgNgQgAgXgJQgJALABAWQgBAWAJALQAHAMAQAAQARAAAIgLQAJgJgBgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_647.setTransform(774.8,786.55);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#FFFFFF").s().p("AgdBSIAiijIAZAAIgiCjg");
	this.shape_648.setTransform(659.425,786.45);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#FFFFFF").s().p("AAOA7IAOhGIACgNQAAgOgNAAQgIAAgHAGQgHAGgFALQgHALgCAOIgKAxIgZAAIAZhzIATAAIgCAVIABAAQAIgMAJgGQAJgFALAAQAOAAAHAIQAJAIgBAOQABAIgDALIgPBEg");
	this.shape_649.setTransform(636.8,788.725);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#FFFFFF").s().p("AgnAwQgMgMAAgVQAAgUAIgRQAHgSAOgJQANgKARAAQAVAAALAMQAMAMAAAVQAAAVgIARQgIARgNAKQgOAJgQAAQgVAAgLgMgAgKgfQgHAHgFANQgEAMAAAPQAAALAFAHQAFAGALAAQAIAAAIgHQAIgHADgNQAFgNAAgPQAAgLgFgGQgGgHgJAAQgJAAgIAIg");
	this.shape_650.setTransform(624.6,788.825);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#FFFFFF").s().p("AgcBRIAZh0IAXAAIgXB0gAAEg3QgDgDAAgGQAAgHAEgEQAEgFAIAAQAFAAAEADQADADAAAGQAAAHgEAEQgFAFgGAAQgGAAgEgDg");
	this.shape_651.setTransform(615.9,786.575);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#FFFFFF").s().p("AgcBRIAZh0IAYAAIgYB0gAAEg3QgDgDAAgGQAAgHAEgEQAEgFAHAAQAGAAADADQAEADAAAGQAAAHgEAEQgFAFgGAAQgGAAgEgDg");
	this.shape_652.setTransform(602.1,786.575);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#FFFFFF").s().p("AgzBIQgJgKAAgUQAAgVAIgUQAHgRANgKQANgLAPABQASAAAJASIABAAQABgPADgLIAIgmIAZAAIgjCjIgUAAIACgSIAAAAQgJAKgIAGQgJAEgKAAQgPAAgIgLgAgSgIQgHAHgFAOQgFAOAAAPQAAAVARAAQAIAAAJgIQAHgJAGgOQAFgOAAgPQAAgIgFgFQgEgHgJAAQgJAAgIAJg");
	this.shape_653.setTransform(593.175,786.55);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#FFFFFF").s().p("AANA7IAPhGIACgNQAAgOgNAAQgIAAgHAGQgHAGgFALQgHALgCAOIgLAxIgYAAIAYhzIAUAAIgDAVIABAAQAJgMAIgGQAKgFALAAQAOAAAHAIQAJAIgBAOQAAAIgCALIgPBEg");
	this.shape_654.setTransform(579.45,788.725);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#FFFFFF").s().p("AgnAwQgMgMAAgVQAAgUAIgRQAHgSANgJQAOgKARAAQAVAAALAMQAMAMAAAVQAAAVgIARQgHARgOAKQgNAJgRAAQgUAAgMgMgAgJgfQgIAHgFANQgEAMAAAPQAAALAFAHQAGAGAJAAQAJAAAIgHQAIgHADgNQAFgNAAgPQAAgLgGgGQgEgHgKAAQgJAAgHAIg");
	this.shape_655.setTransform(567.2,788.825);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#FFFFFF").s().p("AAhA6IghgvIgfAvIgVAAIArg6Igog5IAUAAIAdAsIAfgsIATAAIgoA5IAqA6g");
	this.shape_656.setTransform(438.55,788.875);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#FFFFFF").s().p("AgIBNIAAiZIARAAIAACZg");
	this.shape_657.setTransform(358.5,786.95);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDgBgGQABgGADgCQADgDADAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgDAAgDgDg");
	this.shape_658.setTransform(516.25,723.125);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#FFFFFF").s().p("AANA7IAPhGIACgNQAAgOgNAAQgIAAgHAGQgHAGgFALQgHALgCAOIgKAxIgZAAIAZhzIATAAIgDAVIACAAQAIgMAJgGQAJgFALAAQAOAAAHAIQAJAIgBAOQABAIgDALIgPBEg");
	this.shape_659.setTransform(501.25,725.125);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#FFFFFF").s().p("AgnAwQgMgMAAgVQAAgUAHgRQAIgSAOgJQANgKARAAQAUAAAMAMQAMAMAAAVQAAAVgIARQgIARgNAKQgOAJgQAAQgVAAgLgMgAgKgfQgHAHgEANQgFAMAAAPQAAALAFAHQAFAGALAAQAIAAAIgHQAIgHAEgNQAEgNAAgPQAAgLgFgGQgGgHgJAAQgJAAgIAIg");
	this.shape_660.setTransform(489.05,725.225);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#FFFFFF").s().p("AgcBRIAZh0IAXAAIgXB0gAAEg3QgDgDAAgGQAAgHAEgEQAEgFAIAAQAFAAAEADQADADAAAGQAAAHgEAEQgEAFgHAAQgGAAgEgDg");
	this.shape_661.setTransform(480.35,722.975);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#FFFFFF").s().p("AgcBRIAZh0IAYAAIgYB0gAAFg3QgEgDAAgGQAAgHAEgEQAEgFAHAAQAGAAADADQAEADAAAGQAAAHgEAEQgFAFgGAAQgGAAgDgDg");
	this.shape_662.setTransform(466.55,722.975);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#FFFFFF").s().p("AgzBIQgJgKAAgUQAAgVAIgUQAHgRANgLQANgKAPAAQASAAAJATIABAAQABgQADgLIAIglIAZAAIgjCjIgUAAIACgTIAAAAQgJAMgIAEQgJAFgKAAQgPAAgIgLgAgSgJQgHAJgFANQgFAOAAAPQAAAVARAAQAIAAAJgJQAHgIAGgOQAFgOAAgOQAAgJgFgGQgEgFgJgBQgJABgIAHg");
	this.shape_663.setTransform(457.625,722.95);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#FFFFFF").s().p("AANA7IAQhGIABgNQAAgOgNAAQgIAAgHAGQgGAGgHALQgFALgEAOIgKAxIgYAAIAYhzIAUAAIgDAVIABAAQAJgMAIgGQAKgFALAAQAOAAAHAIQAJAIAAAOQgBAIgCALIgOBEg");
	this.shape_664.setTransform(443.9,725.125);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#FFFFFF").s().p("AgnAwQgMgMAAgVQAAgUAHgRQAIgSAOgJQANgKARAAQAUAAAMAMQAMAMAAAVQAAAVgIARQgIARgNAKQgOAJgQAAQgVAAgLgMgAgKgfQgIAHgDANQgFAMAAAPQAAALAGAHQAFAGAJAAQAJAAAIgHQAHgHAFgNQAEgNAAgPQAAgLgFgGQgGgHgJAAQgJAAgIAIg");
	this.shape_665.setTransform(431.7,725.225);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#FFFFFF").s().p("AgiAxQgLgLAAgVQAAgVAHgRQAIgSAOgKQAOgKARAAQARAAAOAGIgHATQgNgFgKAAQgQAAgKAQQgKAQAAAXQAAAMAGAGQAGAGAJAAQAIAAAHgCIANgGIAAAVQgOAHgRAAQgVAAgLgLg");
	this.shape_666.setTransform(421.075,725.225);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALALQAKAKAAAVIAABLg");
	this.shape_667.setTransform(1050.225,691.05);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQAMgPAXAAQAXgBAMASIACAAIgBgJIAAgIIAAgvIARAAIAACjIgOAAIgDgQIAAAAQgNASgXAAQgXAAgMgQgAgYgJQgHALgBAWQABAWAHALQAJAMAPAAQARAAAJgLQAHgJABgWIAAgDQAAgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_668.setTransform(1005.15,691.15);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgGAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_669.setTransform(981.7,693.475);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#FFFFFF").s().p("AgQBPQgKgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgRAXAAQAWAAANAPQANAPAAAcQAAAcgNAQQgNAQgWAAQgKAAgJgEgAgZgKQgIAJAAAYQAAAZAIAKQAJALARAAQAQAAAIgNQAIgLgBgWQABgXgIgKQgIgLgQAAQgRAAgJALg");
	this.shape_670.setTransform(939.45,691.15);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQAMgPAXAAQAXgBAMASIACAAIgCgJIAAgIIAAgvIASAAIAACjIgOAAIgDgQIgBAAQgMASgXAAQgXAAgMgQgAgYgJQgIALAAAWQAAAWAIALQAJAMAPAAQARAAAJgLQAHgJAAgWIAAgDQABgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_671.setTransform(920,691.15);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgJAJQgIAJgBAQIA7AAIAAAAg");
	this.shape_672.setTransform(848.95,693.475);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgGgFgPgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFACADQADAEAFADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_673.setTransform(837.8,693.475);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgOAAgIAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_674.setTransform(821.15,693.475);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#FFFFFF").s().p("AgEAcIgFg3IATAAIgEA3g");
	this.shape_675.setTransform(812.675,686.625);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQANgPAWAAQAWgBANASIABAAIgBgJIAAgIIAAgvIASAAIAACjIgOAAIgDgQIgBAAQgMASgXAAQgWAAgNgQgAgXgJQgJALABAWQgBAWAJALQAHAMAQAAQARAAAIgLQAJgJgBgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_676.setTransform(797.85,691.15);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#FFFFFF").s().p("AgPAbIAHgbIAEgZIATAAIABACIgIAYIgJAag");
	this.shape_677.setTransform(757.75,699.4);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgGAOQgRgHgOAAQgLAAgHAEQgGAEAAAGQAAAFACADQADAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_678.setTransform(703.2,693.475);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#FFFFFF").s().p("AAOA7IAPhGIACgNQAAgOgOAAQgIAAgHAGQgGAGgHALQgFALgEAOIgJAxIgaAAIAahzIATAAIgCAVIAAAAQAJgMAIgGQAKgFAKAAQAPAAAIAIQAHAIABAOQAAAIgDALIgOBEg");
	this.shape_679.setTransform(680.3,693.325);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#FFFFFF").s().p("AgnAwQgMgMAAgVQAAgUAIgRQAHgSANgJQAOgKARAAQAVAAALAMQAMAMAAAVQAAAVgIARQgHARgOAKQgNAJgRAAQgUAAgMgMgAgJgfQgIAHgFANQgEAMAAAPQAAALAFAHQAFAGAKAAQAJAAAIgHQAHgHAEgNQAFgNAAgPQAAgLgGgGQgEgHgKAAQgJAAgHAIg");
	this.shape_680.setTransform(668.1,693.425);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#FFFFFF").s().p("AgcBRIAZh0IAXAAIgXB0gAAFg3QgEgDAAgGQAAgHAEgEQAEgFAHAAQAGAAAEADQADADAAAGQAAAHgEAEQgEAFgHAAQgGAAgDgDg");
	this.shape_681.setTransform(659.4,691.175);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#FFFFFF").s().p("AgiAuIACgOIANg7IgSAAIADgLIAUgJIANgYIAPAAIgGAaIAeAAIgEASIgeAAIgMA8IgBAJQAAAFADADQACACAFAAQAHAAAJgDIAAATIgKADIgMABQgdAAAAgag");
	this.shape_682.setTransform(652.825,692.225);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#FFFFFF").s().p("AgcBRIAZh0IAXAAIgXB0gAAEg3QgDgDAAgGQAAgHAEgEQAEgFAIAAQAFAAAEADQADADAAAGQAAAHgEAEQgFAFgGAAQgGAAgEgDg");
	this.shape_683.setTransform(645.6,691.175);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#FFFFFF").s().p("AgzBIQgJgLAAgTQAAgVAIgUQAHgRANgKQANgLAPABQASAAAJASIABAAQABgPADgLIAIgmIAZAAIgjCjIgUAAIACgSIAAAAQgJAKgIAGQgJAEgKAAQgPAAgIgLgAgSgIQgHAHgFAOQgFAOAAAPQAAAVARAAQAIAAAJgJQAHgIAGgOQAFgOAAgPQAAgIgFgFQgEgHgJAAQgJAAgIAJg");
	this.shape_684.setTransform(636.675,691.15);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#FFFFFF").s().p("AAOA7IAOhGIADgNQAAgOgOAAQgIAAgHAGQgHAGgFALQgHALgCAOIgKAxIgaAAIAahzIATAAIgCAVIABAAQAIgMAJgGQAJgFAKAAQAPAAAHAIQAIAIAAAOQAAAIgCALIgPBEg");
	this.shape_685.setTransform(622.95,693.325);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#FFFFFF").s().p("AgiAxQgLgLAAgVQAAgVAHgRQAIgSAOgKQAOgKARAAQARAAAOAGIgHATQgNgFgKAAQgQAAgKAQQgKAQAAAXQAAAMAGAGQAGAGAJAAQAIAAAHgCIANgGIAAAVQgOAHgRAAQgVAAgLgLg");
	this.shape_686.setTransform(600.125,693.425);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgDgDABgGQgBgGADgCQAEgDADAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgDAAgEgDg");
	this.shape_687.setTransform(573,691.325);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#FFFFFF").s().p("AgSBTIAAhlIgVAAIAAgIIAVgGIAAgHQAAgrAkAAQAJAAANAEIgFAOQgKgDgHAAQgKAAgFAHQgEAGAAAPIAAAHIAdAAIAAAOIgdAAIAABlg");
	this.shape_688.setTransform(493.425,690.975);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQANgPAWAAQAWgBANASIACAAIgBgJIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgWAAgNgQgAgYgJQgHALgBAWQABAWAHALQAJAMAPAAQARAAAJgLQAHgJABgWIAAgDQAAgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_689.setTransform(471.2,691.15);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_690.setTransform(448.95,692.225);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_691.setTransform(374.8,693.475);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#FFFFFF").s().p("AgQBPQgKgEgGgJIgBAAIgFAPIgMAAIAAijIASAAIAAAoIgBAYIABAAQAMgRAXAAQAWAAANAPQANAPAAAcQAAAcgNAQQgNAQgWAAQgLAAgIgEgAgYgKQgJAJABAYQgBAZAJAKQAIALARAAQAQAAAIgNQAIgLgBgWQABgXgIgKQgIgLgQAAQgSAAgHALg");
	this.shape_692.setTransform(362.45,691.15);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgHgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_693.setTransform(1058.45,661.675);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQANgPAWAAQAWAAANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgOAAIgDgPIgBAAQgMARgXAAQgWAAgNgQgAgXgJQgJALAAAVQAAAXAJALQAHALAQAAQARAAAIgKQAIgJAAgWIAAgEQAAgXgIgLQgIgKgRAAQgQAAgHAMg");
	this.shape_694.setTransform(1045.45,659.35);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#FFFFFF").s().p("AgSBTIAAhlIgVAAIAAgIIAVgGIAAgHQAAgrAkAAQAJAAANAEIgFAOQgKgDgHAAQgKAAgFAHQgEAGAAAPIAAAHIAdAAIAAAOIgdAAIAABlg");
	this.shape_695.setTransform(1007.325,659.175);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgGgJIgBAAIgFAPIgMAAIAAijIASAAIAAAoIgBAYIABAAQAMgRAXAAQAXAAANAPQAMAQAAAbQAAAdgNAPQgMAQgXAAQgLAAgJgEgAgYgLQgIALAAAXQAAAYAIALQAIAKAQAAQARAAAIgLQAHgMAAgWQAAgWgHgLQgIgLgRAAQgRAAgHAKg");
	this.shape_696.setTransform(938.15,659.35);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#FFFFFF").s().p("AgSBTIAAhlIgVAAIAAgIIAVgGIAAgHQAAgrAkAAQAJAAANAEIgFAOQgKgDgHAAQgKAAgFAHQgEAGAAAPIAAAHIAdAAIAAAOIgdAAIAABlg");
	this.shape_697.setTransform(894.225,659.175);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQADACAAAGQAAAGgDADQgDADgEAAQgEAAgDgDg");
	this.shape_698.setTransform(887.25,659.525);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgRgFgHgFQgGgEgEgGQgDgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_699.setTransform(843.9,661.675);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAJAAIAKgBIAGgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_700.setTransform(816.25,660.425);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQANgPAWAAQAWAAANAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgPAAIgCgPIgBAAQgMARgXAAQgWAAgNgQgAgXgJQgJALABAVQgBAXAJALQAHALAQAAQARAAAIgKQAJgJgBgWIAAgEQAAgXgIgLQgIgKgRAAQgQAAgHAMg");
	this.shape_701.setTransform(800,659.35);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgIAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_702.setTransform(787.75,661.675);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgGgFgPgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQABAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_703.setTransform(776.6,661.675);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgGgJIgBAAIgFAPIgMAAIAAijIASAAIAAAoIgBAYIABAAQAMgRAXAAQAXAAANAPQAMAQAAAbQAAAdgNAPQgMAQgXAAQgLAAgJgEgAgYgLQgIALAAAXQAAAYAIALQAIAKAQAAQARAAAIgLQAHgMAAgWQAAgWgHgLQgIgLgRAAQgRAAgHAKg");
	this.shape_704.setTransform(734.3,659.35);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQAMgPAXAAQAWAAANAQIABAAIAAgIIAAgIIAAgvIARAAIAACjIgPAAIgCgPIAAAAQgNARgXAAQgXAAgMgQgAgXgJQgIALAAAVQAAAXAIALQAIALAPAAQARAAAIgKQAJgJAAgWIAAgEQgBgXgIgLQgIgKgRAAQgPAAgIAMg");
	this.shape_705.setTransform(714.85,659.35);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAIgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_706.setTransform(650.65,660.425);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgRAAgIAJQgIAKAAATIAABAIgQAAIAAhKQAAgOgFgHQgHgHgMAAQgQAAgIAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIAAAAQAFgIAKgFQAIgFAMAAQAbAAAHAUIABAAQAFgJAKgGQAKgFAMAAQAUAAAJAKQAKAKAAAWIAABLg");
	this.shape_707.setTransform(611.7,661.575);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgJAJQgIAJgBAQIA7AAIAAAAg");
	this.shape_708.setTransform(595.6,661.675);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAJAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_709.setTransform(566.05,660.425);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#FFFFFF").s().p("AgEAcIgFg3IATAAIgEA3g");
	this.shape_710.setTransform(544.075,654.825);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#FFFFFF").s().p("AgSBTIAAhlIgVAAIAAgIIAVgGIAAgHQAAgrAkAAQAJAAANAEIgFAOQgKgDgHAAQgKAAgFAHQgEAGAAAPIAAAHIAdAAIAAAOIgdAAIAABlg");
	this.shape_711.setTransform(538.725,659.175);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQADACAAAGQAAAGgDADQgDADgEAAQgEAAgDgDg");
	this.shape_712.setTransform(531.75,659.525);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#FFFFFF").s().p("AgEAcIgFg3IATAAIgEA3g");
	this.shape_713.setTransform(526.625,654.825);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#FFFFFF").s().p("AAyBNIgTgwIg9AAIgTAwIgSAAIA9iZIAOAAIA8CZgAAZANIgSgvIgHgXQgBALgFAMIgSAvIAxAAg");
	this.shape_714.setTransform(498.675,659.7);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgIgcIAAAAIgHAcIgWBDIgUAAIgfhzIASAAIARBBIAHAfIABAAIADgPIAFgQIAVhBIASAAIAUBBQAHATABAMIABAAIADgMIAVhUIASAAIggBzg");
	this.shape_715.setTransform(466.6,661.675);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#FFFFFF").s().p("AgSBTIAAhlIgVAAIAAgIIAVgGIAAgHQAAgrAkAAQAJAAANAEIgFAOQgKgDgHAAQgKAAgFAHQgEAGAAAPIAAAHIAdAAIAAAOIgdAAIAABlg");
	this.shape_716.setTransform(436.725,659.175);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_717.setTransform(424.125,659.25);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_718.setTransform(395.75,660.425);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAGgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_719.setTransform(1022.95,628.625);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQAAgKAIgIQAGgIANgCQgFgCgDgFQgDgEAAgFQAAgHADgDQADgFAIgFQgJgDgFgJQgHgJAAgLQAAgTAMgLQALgKAVAAQAJAAAHACIAnAAIAAALIgUADIAEAJQADAGAAAIQAAARgMAKQgMAKgSAAIgKgBQgLAGAAAIQAAAFADACQAEACAKAAIAUAAQASAAAKAIQAKAIAAAPQAAATgPALQgPAKgdAAQgXAAgMgJgAgeAkQgGAGgBAKQAAAKAJAEQAHAFAPAAQAVAAALgGQAKgHAAgLQAAgKgFgDQgHgEgQAAIgTAAQgMAAgHAGgAgUhBQgHAHAAANQAAAMAHAHQAGAGANAAQAYAAABgZQAAgagZAAQgNAAgGAGg");
	this.shape_720.setTransform(995.55,632.375);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQADACAAAGQAAAGgDADQgDADgEAAQgEAAgDgDg");
	this.shape_721.setTransform(909.3,627.725);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgGALAAQAVABALAJQAKAKAAAWIAABLg");
	this.shape_722.setTransform(900.025,627.45);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgIgcIAAAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAHAfIAAAAIAEgPIAFgQIAVhBIASAAIAVBBQAFATADAMIABAAIACgMIAVhUIASAAIgfBzg");
	this.shape_723.setTransform(884.95,629.875);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAOAAIADAQIABAAQAHgKAIgEQAJgEALAAQAXAAANAQQAMAPAAAdQAAAbgNAQQgNAQgWAAQgLAAgJgEQgJgEgGgJIgBAAIABATIAAAwgAgYg7QgIAKAAAVIAAAEQAAAYAIAKQAIAKAQAAQAQAAAIgMQAJgLAAgVQAAgWgJgLQgIgMgQAAQgRAAgHAKg");
	this.shape_724.setTransform(854.45,632.375);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_725.setTransform(841.025,629.875);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_726.setTransform(828.025,629.875);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_727.setTransform(818.725,627.45);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAXABAMAQIACAAIgBgIIAAgIIAAgvIARAAIAACjIgOAAIgDgPIAAAAQgNARgXAAQgXAAgMgPgAgYgJQgIALAAAWQAAAWAIALQAJAMAPAAQARgBAJgJQAHgKABgWIAAgDQAAgYgJgLQgIgKgRAAQgPAAgJAMg");
	this.shape_728.setTransform(803.55,627.55);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_729.setTransform(753.475,627.45);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_730.setTransform(719.025,629.875);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgCgDAAgGQAAgGACgCQAEgDADAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgDAAgEgDg");
	this.shape_731.setTransform(709.8,627.725);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_732.setTransform(703.2,628.625);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgDgDABgGQgBgGADgCQAEgDADAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgDAAgEgDg");
	this.shape_733.setTransform(696.75,627.725);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAWABANAQIACAAIgBgIIAAgIIAAgvIARAAIAACjIgPAAIgCgPIAAAAQgNARgXAAQgXAAgMgPgAgYgJQgHALgBAWQABAWAHALQAJAMAPAAQARgBAJgJQAHgKABgWIAAgDQAAgYgJgLQgIgKgRAAQgPAAgJAMg");
	this.shape_734.setTransform(687.1,627.55);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_735.setTransform(661.075,629.875);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_736.setTransform(632.75,629.875);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_737.setTransform(607.175,627.45);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgOAAgIAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_738.setTransform(582.65,629.875);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_739.setTransform(561.175,629.975);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAJAAIAKgBIAGgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_740.setTransform(550.75,628.625);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_741.setTransform(542.075,629.875);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_742.setTransform(530.075,629.975);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgGgFgPgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgGAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFACADQADAEAFADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_743.setTransform(502.1,629.875);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgGgFgPgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgGAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_744.setTransform(476,629.875);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_745.setTransform(464.275,629.875);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_746.setTransform(444.125,629.875);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgGgFgRgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgGAOQgRgHgOAAQgLAAgHAEQgGAEAAAGQAAAFACADQADAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_747.setTransform(416.1,629.875);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgPAAgJAJQgHAKAAATIAABAIgRAAIAAhKQAAgOgGgHQgFgHgNAAQgRAAgHAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIACAQIABAAQAGgIAJgFQAIgFALAAQAcAAAHAUIABAAQAFgJAKgGQAJgFANAAQAUAAAKAKQAJAKABAWIAABLg");
	this.shape_748.setTransform(388.9,629.775);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_749.setTransform(372.325,629.875);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_750.setTransform(360.875,629.875);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQASAAATgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_751.setTransform(1008.2,598.075);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAGgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_752.setTransform(998.2,596.825);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_753.setTransform(987.825,598.175);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAPAAIABAQIABAAQAIgKAJgEQAIgEALAAQAXAAAMAQQANAPAAAdQAAAbgNAQQgNAQgWAAQgKAAgJgEQgKgEgHgJIgBAAIABATIAAAwgAgYg7QgIAKgBAVIAAAEQAAAYAJAKQAIAKARAAQAOAAAKgMQAHgLAAgVQAAgWgHgLQgKgMgOAAQgRAAgIAKg");
	this.shape_754.setTransform(975,600.575);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgRAAgHAJQgJAKABATIAABAIgRAAIAAhKQAAgOgGgHQgFgHgNAAQgQAAgIAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgIAIgFQAKgFALAAQAbAAAHAUIABAAQAFgJAKgGQAKgFANAAQATAAAJAKQALAKgBAWIAABLg");
	this.shape_755.setTransform(958.1,597.975);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_756.setTransform(941.525,598.075);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_757.setTransform(930.125,598.075);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAJAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_758.setTransform(890.05,596.825);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgGgFgRgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgLAAgHAEQgGAEAAAGQAAAFADADQABAEAGADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_759.setTransform(875.65,598.075);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQANAAAHgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgRgFgHgFQgGgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_760.setTransform(865.4,598.075);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_761.setTransform(845.375,595.65);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_762.setTransform(822.825,598.175);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAJAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_763.setTransform(806.8,596.825);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgRgFgHgFQgGgEgEgGQgDgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_764.setTransform(798,598.075);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_765.setTransform(778.075,595.65);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAKALAQAAQASAAATgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_766.setTransform(763.8,598.075);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAIgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_767.setTransform(740.65,596.825);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_768.setTransform(724.825,598.075);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgJAJQgIAJgBAQIA7AAIAAAAg");
	this.shape_769.setTransform(699.1,598.075);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQADACAAAGQAAAGgDADQgDADgEAAQgEAAgDgDg");
	this.shape_770.setTransform(677.1,595.925);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_771.setTransform(671.625,595.65);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_772.setTransform(659.45,596.825);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgGgFgRgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgLAAgHAEQgGAEAAAGQAAAFADADQABAEAGADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_773.setTransform(650.65,598.075);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#FFFFFF").s().p("AgSBTIAAhlIgVAAIAAgIIAVgGIAAgHQAAgrAkAAQAJAAANAEIgFAOQgKgDgHAAQgKAAgFAHQgEAGAAAPIAAAHIAdAAIAAAOIgdAAIAABlg");
	this.shape_774.setTransform(628.225,595.575);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_775.setTransform(612.4,598.075);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALAKQAKALAAAVIAABLg");
	this.shape_776.setTransform(599.775,595.65);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_777.setTransform(589.25,596.825);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_778.setTransform(553.375,598.075);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#FFFFFF").s().p("AgSBTIAAhlIgVAAIAAgIIAVgGIAAgHQAAgrAkAAQAJAAANAEIgFAOQgKgDgHAAQgKAAgFAHQgEAGAAAPIAAAHIAdAAIAAAOIgdAAIAABlg");
	this.shape_779.setTransform(535.125,595.575);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgPgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgXAAgNgHg");
	this.shape_780.setTransform(520.2,598.075);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_781.setTransform(495.175,598.175);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgcQAAgcANgQQANgPAWAAQAWAAANARIABAAIgBgJIAAgIIAAgvIASAAIAACjIgPAAIgCgQIgBAAQgMASgXAAQgWAAgNgQgAgXgJQgJALABAWQgBAWAJALQAHAMAQAAQARAAAIgLQAJgJgBgWIAAgDQAAgYgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_782.setTransform(455.3,595.75);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_783.setTransform(442.525,598.075);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#FFFFFF").s().p("AgnA7QgTgVAAgmQABgXAIgSQAKgSAQgJQARgKAWAAQAYAAASAJIgIAPQgRgIgSAAQgXAAgQARQgOARAAAcQAAAeAOARQAOAQAZAAQARAAAVgFIAAAPQgRAGgXAAQgiAAgSgUg");
	this.shape_784.setTransform(429.5,596.125);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAJAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_785.setTransform(407.2,596.825);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAPAAIABAQIABAAQAIgKAJgEQAIgEALAAQAXAAAMAQQANAPAAAdQAAAbgNAQQgNAQgWAAQgKAAgJgEQgKgEgHgJIgBAAIABATIAAAwgAgZg7QgHAKgBAVIAAAEQAAAYAIAKQAJAKARAAQAOAAAKgMQAHgLAAgVQAAgWgHgLQgKgMgOAAQgRAAgJAKg");
	this.shape_786.setTransform(397.2,600.575);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDgBgGQABgGADgCQADgDADAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgDAAgDgDg");
	this.shape_787.setTransform(387.55,595.925);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_788.setTransform(371.175,598.075);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgGAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_789.setTransform(360.7,598.075);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgEAAgDgDg");
	this.shape_790.setTransform(1030.55,564.125);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPALgIQAMgIATAAQATAAARAIIgGAOQgRgHgOAAQgLAAgHAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_791.setTransform(1017.2,566.275);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAGgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_792.setTransform(1008.1,565.025);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAKALAQAAQASAAATgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_793.setTransform(985.2,566.275);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgHgJgNAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_794.setTransform(953.1,566.275);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAIgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_795.setTransform(943.15,565.025);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAGgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_796.setTransform(923.5,565.025);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgGAOQgRgHgOAAQgLAAgHAEQgGAEAAAGQAAAFACADQADAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_797.setTransform(914.7,566.275);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgLAAgHAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgXAAgNgHg");
	this.shape_798.setTransform(898.85,566.275);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_799.setTransform(867.375,566.375);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_800.setTransform(855.875,566.275);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_801.setTransform(821.2,566.275);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_802.setTransform(805.975,566.175);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAJAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_803.setTransform(784.85,565.025);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#FFFFFF").s().p("AglAxQgKgKAAgWIAAhLIARAAIAABKQAAAOAHAHQAGAHAOAAQARAAAIgKQAJgKAAgWIAAg8IARAAIAABzIgOAAIgDgQIgBAAQgFAJgKAEQgJAFgLAAQgVAAgLgKg");
	this.shape_804.setTransform(774.475,566.375);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAOAAIACAQIACAAQAHgKAIgEQAJgEALAAQAXAAANAQQAMAPAAAdQAAAbgNAQQgMAQgXAAQgLAAgJgEQgJgEgGgJIgCAAIACATIAAAwgAgZg7QgHAKAAAVIAAAEQAAAYAHAKQAJAKAQAAQAPAAAJgMQAJgLAAgVQAAgWgJgLQgJgMgPAAQgQAAgJAKg");
	this.shape_805.setTransform(761.65,568.775);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgPAAgJAJQgHAKgBATIAABAIgQAAIAAhKQAAgOgFgHQgHgHgMAAQgRAAgHAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIACAQIABAAQAGgIAJgFQAJgFAKAAQAcAAAHAUIABAAQAFgJAKgGQAJgFANAAQAUAAAKAKQAJAKABAWIAABLg");
	this.shape_806.setTransform(744.75,566.175);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_807.setTransform(728.175,566.275);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_808.setTransform(716.775,566.275);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_809.setTransform(670.125,566.275);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDgBgGQABgGADgCQADgDADAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgDAAgDgDg");
	this.shape_810.setTransform(662.05,564.125);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgIgcIAAAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAHAfIABAAIADgPIAFgQIAVhBIASAAIAUBBQAHATABAMIABAAIADgMIAVhUIASAAIgfBzg");
	this.shape_811.setTransform(637.7,566.275);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQADACAAAGQAAAGgDADQgDADgEAAQgEAAgDgDg");
	this.shape_812.setTransform(607.8,564.125);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_813.setTransform(595.875,566.175);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQASAAATgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_814.setTransform(584.75,566.275);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQAMgPAXAAQAXAAAMAQIABAAIgBgIIAAgIIAAgvIASAAIAACjIgPAAIgCgPIgBAAQgMARgXAAQgXAAgMgQgAgXgJQgIALAAAVQAAAXAIALQAIALAPAAQARABAIgLQAJgJgBgWIAAgEQAAgXgIgLQgIgKgRAAQgQAAgHAMg");
	this.shape_815.setTransform(571.75,563.95);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_816.setTransform(561.875,566.175);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_817.setTransform(550.225,566.275);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgJAJQgIAJgBAQIA7AAIAAAAg");
	this.shape_818.setTransform(532.15,566.275);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAGgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_819.setTransform(508.95,565.025);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQANAAAHgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgRgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_820.setTransform(494.6,566.275);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgIgcIAAAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAHAfIABAAIADgPIAFgQIAVhBIASAAIAVBBQAFATACAMIACAAIACgMIAVhUIASAAIgfBzg");
	this.shape_821.setTransform(469.95,566.275);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_822.setTransform(455.025,566.275);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_823.setTransform(445.775,563.85);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#FFFFFF").s().p("AgSBTIAAhlIgVAAIAAgIIAVgGIAAgHQAAgrAkAAQAJAAANAEIgFAOQgKgDgHAAQgKAAgFAHQgEAGAAAPIAAAHIAdAAIAAAOIgdAAIAABlg");
	this.shape_824.setTransform(440.075,563.775);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_825.setTransform(427.475,563.85);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_826.setTransform(418.275,566.275);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_827.setTransform(408.175,566.175);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAJAAIAKgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_828.setTransform(399.1,565.025);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_829.setTransform(375.675,566.275);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#FFFFFF").s().p("AgvA+QgMgLAAgVQAAgWAQgKQAQgLAhgBIAZgBIAAgHQAAgOgHgHQgGgHgNAAQgLAAgKAEIgTAHIgKgWQAMgGANgDQAOgDAMAAQAbAAANAMQAOAMAAAZIAABfIgVAAIgGgUIgBAAQgKANgLAFQgLAFgPAAQgVAAgLgMgAAMAEQgVABgJAGQgKAGAAAOQAAAJAGAFQAFAGAMAAQAPAAALgKQAJgJAAgQIAAgNg");
	this.shape_830.setTransform(656.35,499.875);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#FFFFFF").s().p("AAgBIIAAhWQAAgQgGgJQgHgIgOAAQgTAAgIALQgJAMAAAZIAABHIgfAAIAAiNIAYAAIAEATIACAAQAGgKAMgGQAMgFAOgBQAzAAAAA0IAABcg");
	this.shape_831.setTransform(640.825,499.75);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#FFFFFF").s().p("AgjBBQgPgJgIgRQgIgRAAgWQgBgiATgTQARgUAfAAQAfAAATAUQARAUABAhQgBAjgRATQgSAUggAAQgTAAgQgJgAgbgkQgIANAAAXQAAAxAjAAQAkAAAAgxQAAgwgkAAQgSAAgJAMg");
	this.shape_832.setTransform(624.4,499.875);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#FFFFFF").s().p("AgOBiIAAiNIAdAAIAACNgAgLhEQgFgFAAgIQAAgIAFgEQADgEAIgBQAIABAFAEQAEAEAAAIQAAAIgEAFQgFAEgIAAQgIAAgDgEg");
	this.shape_833.setTransform(612.7,497.15);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#FFFFFF").s().p("AgaArIAAhLIgTAAIAAgOIAVgLIAKgfIASAAIAAAhIAoAAIAAAXIgoAAIAABKQAAAMAFAFQAGAFAJAAQALAAALgDIAAAXIgNADIgRABQgqAAAAgtg");
	this.shape_834.setTransform(603.8,498.4);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#FFFFFF").s().p("AgPBiIAAiNIAeAAIAACNgAgMhEQgEgFAAgIQAAgIAEgEQAFgEAHgBQAIABAEAEQAFAEAAAIQAAAIgFAFQgEAEgIAAQgHAAgFgEg");
	this.shape_835.setTransform(595.1,497.15);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#FFFFFF").s().p("AgxBSQgPgTAAgjQAAgiAPgTQAPgUAbAAQAbAAAPAUIACAAQgDgOAAgKIAAgzIAfAAIAADHIgYAAIgFgSIgCAAQgOAUgbAAQgbABgPgUgAgYgHQgIALAAAYQgBAYAJAMQAIANAQAAQASAAAJgLQAJgKAAgYIAAgEQAAgbgJgKQgJgMgSAAQgPAAgJAOg");
	this.shape_836.setTransform(582.75,497.1);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#FFFFFF").s().p("AAgBIIAAhWQAAgQgGgJQgHgIgOAAQgTAAgIALQgJAMAAAZIAABHIgfAAIAAiNIAYAAIAEATIACAAQAGgKAMgGQAMgFAOgBQAzAAAAA0IAABcg");
	this.shape_837.setTransform(566.625,499.75);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#FFFFFF").s().p("AgjBBQgPgJgIgRQgIgRAAgWQgBgiATgTQARgUAfAAQAfAAATAUQARAUABAhQgBAjgRATQgSAUggAAQgTAAgQgJgAgbgkQgIANAAAXQAAAxAjAAQAkAAAAgxQAAgwgkAAQgSAAgJAMg");
	this.shape_838.setTransform(550.15,499.875);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#FFFFFF").s().p("AgwBIQgWgZAAgvQAAgcALgWQAKgWAUgMQAVgMAbAAQAcAAAYAMIgLAaIgTgIQgLgDgMAAQgaAAgOASQgQATAAAgQAAAjAPASQAOASAbAAQAMAAALgDIAYgGIAAAaQgXAJgcAAQgoAAgWgZg");
	this.shape_839.setTransform(534.15,497.575);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#FFFFFF").s().p("AgNBGQgFgGAAgJQAAgJAFgGQAFgEAIAAQAJAAAFAEQAFAGAAAJQAAAJgFAGQgFAEgJAAQgIAAgFgEgAgNgoQgFgFAAgJQAAgTASAAQAKAAAEAEQAFAGAAAJQAAAJgFAFQgFAGgJAAQgIAAgFgGg");
	this.shape_840.setTransform(515.025,499.9);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#FFFFFF").s().p("AAfBHIgThCIgMgwIAAAAQgHAigFAOIgTBCIghAAIgoiNIAfAAIASBGQAGAZADATIAAAAIAEgWIAFgSIAWhKIAgAAIAVBKIAFATIADAUIABAAQACgQAHgbIAThGIAeAAIgoCNg");
	this.shape_841.setTransform(500.625,499.875);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#FFFFFF").s().p("AgjBBQgPgJgIgRQgIgRAAgWQAAgiASgTQARgUAfAAQAgAAASAUQARAUABAhQgBAjgRATQgSAUggAAQgTAAgQgJgAgbgkQgIANAAAXQAAAxAjAAQAkAAAAgxQABgwglAAQgSAAgJAMg");
	this.shape_842.setTransform(481.85,499.875);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#FFFFFF").s().p("AgOBkIAAjHIAdAAIAADHg");
	this.shape_843.setTransform(470.125,496.975);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#FFFFFF").s().p("AgbBlIAAh2IgXAAIAAgPIAXgJIAAgJQAAgZAMgMQALgNAYAAQAQAAAPAGIgIAWQgLgDgKgBQgKABgFAGQgFAHABAMIAAAKIAiAAIAAAXIgiAAIAAB2g");
	this.shape_844.setTransform(462.5,496.9);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#FFFFFF").s().p("AgOBkIAAjHIAdAAIAADHg");
	this.shape_845.setTransform(446.425,496.975);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#FFFFFF").s().p("AgjBBQgPgJgIgRQgJgRABgWQgBgiATgTQARgUAfAAQAfAAATAUQASAUAAAhQAAAjgSATQgSAUggAAQgTAAgQgJgAgbgkQgIANAAAXQAAAxAjAAQAlAAgBgxQAAgwgkAAQgSAAgJAMg");
	this.shape_846.setTransform(434.75,499.875);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#FFFFFF").s().p("AgrBIIAAiNIAYAAIAEAZIACAAQAHgNAKgHQAMgIANAAIAPABIgDAdQgHgCgHAAQgSAAgKAMQgLAMAAATIAABJg");
	this.shape_847.setTransform(421.875,499.75);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#FFFFFF").s().p("AgaArIAAhLIgTAAIAAgOIAVgLIAKgfIASAAIAAAhIAoAAIAAAXIgoAAIAABKQAAAMAFAFQAGAFAJAAQALAAALgDIAAAXIgNADIgRABQgpAAgBgtg");
	this.shape_848.setTransform(410.1,498.4);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#FFFFFF").s().p("AAgBIIAAhWQAAgQgGgJQgHgIgOAAQgTAAgIALQgJAMAAAZIAABHIgfAAIAAiNIAYAAIAEATIACAAQAGgKAMgGQAMgFAOgBQAzAAAAA0IAABcg");
	this.shape_849.setTransform(396.725,499.75);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgFALgBQAVABALAJQAKAKAAAWIAABLg");
	this.shape_850.setTransform(1017.025,836.8);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgFALgBQAVABALAJQAKAKAAAWIAABLg");
	this.shape_851.setTransform(968.325,836.8);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgSAXAAQAWAAANAQQANAPAAAcQAAAdgNAQQgMAPgXAAQgKAAgKgEgAgZgLQgHALgBAXQABAZAHAKQAJAKAQAAQARABAIgMQAIgMAAgWQAAgXgIgKQgIgLgRAAQgQAAgJAKg");
	this.shape_852.setTransform(820.05,836.9);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgFALgBQAVABALAJQAKAKAAAWIAABLg");
	this.shape_853.setTransform(739.875,836.8);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgFALgBQAVABALAJQAKAKAAAWIAABLg");
	this.shape_854.setTransform(606.225,836.8);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAPAAIACAQIABAAQAGgKAKgEQAIgEALAAQAXAAANAQQAMAPAAAdQAAAbgNAQQgNAQgWAAQgKAAgJgEQgKgEgGgJIgBAAIABATIAAAwgAgYg7QgIAKAAAVIAAAEQgBAYAJAKQAIAKARAAQAPAAAIgMQAJgLgBgVQABgWgJgLQgIgMgPAAQgSAAgHAKg");
	this.shape_855.setTransform(545.05,841.725);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgFALgBQAVABALAJQAKAKAAAWIAABLg");
	this.shape_856.setTransform(396.475,836.8);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#FFFFFF").s().p("AgqBNIAAiZIBVAAIAAAPIhDAAIAAAzIA/AAIAAAOIg/AAIAAA5IBDAAIAAAQg");
	this.shape_857.setTransform(361.9,837.3);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAyIgBAPIACAAQAFgJAJgFQAKgEALAAQAVAAALAKQAKAJAAAVIAABMg");
	this.shape_858.setTransform(369.825,773.2);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_859.setTransform(359.25,774.375);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgGALAAQAVABALAJQAKAKAAAVIAABMg");
	this.shape_860.setTransform(1094.275,741.4);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgGALAAQAVABALAJQAKAKAAAVIAABMg");
	this.shape_861.setTransform(1034.275,741.4);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAJAAIAJgBIAHgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_862.setTransform(1023.7,742.575);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgQAAgHAJQgIAKAAATIAABAIgRAAIAAhKQAAgOgGgHQgGgHgMAAQgRAAgHAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIACAQIACAAQAEgIAJgFQAJgFALAAQAcAAAHAUIABAAQAFgJAKgGQAJgFAOAAQATAAAKAKQAJAKABAWIAABLg");
	this.shape_863.setTransform(896.15,743.725);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgRAAgIAJQgIAKAAATIAABAIgQAAIAAhKQAAgOgFgHQgHgHgMAAQgQAAgIAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIADAQIABAAQAEgIAKgFQAIgFAMAAQAbAAAHAUIABAAQAFgJAKgGQAKgFANAAQATAAAJAKQAKAKAAAWIAABLg");
	this.shape_864.setTransform(821.4,743.725);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgIgcIAAAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAGAfIABAAIAEgPIAFgQIAVhBIASAAIAVBBQAFATADAMIABAAIACgMIAVhUIASAAIgfBzg");
	this.shape_865.setTransform(797.3,743.825);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgGALAAQAVABALAJQAKAKAAAVIAABMg");
	this.shape_866.setTransform(769.375,741.4);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgRAAgHAJQgJAKAAATIAABAIgQAAIAAhKQAAgOgGgHQgFgHgNAAQgQAAgIAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgIAIgFQAKgFALAAQAbAAAHAUIABAAQAFgJAKgGQAKgFANAAQATAAAJAKQAKAKAAAWIAABLg");
	this.shape_867.setTransform(716.45,743.725);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgdQAAgbANgQQANgQAWAAQAWAAANARIABAAIAAgIIAAgIIAAgvIARAAIAACjIgPAAIgCgPIAAAAQgNARgXAAQgWAAgNgPgAgYgJQgHALAAAVQAAAXAHALQAIAMAQgBQARABAIgKQAJgKAAgWIAAgEQAAgXgJgLQgIgKgRAAQgQAAgIAMg");
	this.shape_868.setTransform(658.95,741.5);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#FFFFFF").s().p("AgHA0IAAgtIgrAAIAAgNIArAAIAAgtIAOAAIAAAtIAsAAIAAANIgsAAIAAAtg");
	this.shape_869.setTransform(636.175,741.975);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#FFFFFF").s().p("AgHA0IAAgtIgrAAIAAgNIArAAIAAgtIAOAAIAAAtIAsAAIAAANIgsAAIAAAtg");
	this.shape_870.setTransform(623.875,741.975);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgdQAAgbANgQQANgQAWAAQAWAAANARIACAAIgBgIIAAgIIAAgvIARAAIAACjIgPAAIgCgPIAAAAQgNARgXAAQgWAAgNgPgAgYgJQgHALAAAVQAAAXAHALQAIAMAQgBQARABAIgKQAJgKAAgWIAAgEQAAgXgJgLQgIgKgRAAQgQAAgIAMg");
	this.shape_871.setTransform(595.05,741.5);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgGALAAQAVABALAJQAKAKAAAVIAABMg");
	this.shape_872.setTransform(546.675,741.4);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#FFFFFF").s().p("AgPAaIAHgaIAEgaIATAAIABADIgIAXIgJAag");
	this.shape_873.setTransform(476.5,749.75);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgQAAgHAJQgIAKAAATIAABAIgRAAIAAhKQAAgOgGgHQgGgHgMAAQgRAAgHAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIACAQIACAAQAEgIAJgFQAKgFAKAAQAcAAAHAUIABAAQAFgJAKgGQAJgFAOAAQATAAAKAKQAKAKAAAWIAABLg");
	this.shape_874.setTransform(433.55,743.725);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgGALAAQAVABALAJQAKAKAAAVIAABMg");
	this.shape_875.setTransform(374.125,741.4);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAZBEIAJAfIAAAAIAIgXIAbhMIATAAIgsBzg");
	this.shape_876.setTransform(758.3,680.225);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPAMgIQALgIATAAQATAAASAIIgGAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_877.setTransform(734.65,680.225);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgQAAgJAJQgHAKgBATIAABAIgQAAIAAhKQAAgOgFgHQgHgHgMAAQgRAAgHAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIACAQIABAAQAGgIAJgFQAIgFALAAQAcAAAHAUIABAAQAFgJAKgGQAJgFANAAQAUAAAJAKQALAKAAAWIAABLg");
	this.shape_878.setTransform(692.45,680.125);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQAAgKAIgIQAGgIANgCQgFgCgDgFQgDgEAAgFQAAgHADgDQADgFAIgFQgJgDgFgJQgHgJABgLQgBgTAMgLQALgKAWAAQAIAAAHACIAnAAIAAALIgUADIAEAJQADAGAAAIQAAARgMAKQgMAKgSAAIgKgBQgMAGAAAIQABAFAEACQADACAKAAIAUAAQASAAAKAIQAKAIAAAPQAAATgPALQgPAKgdAAQgXAAgMgJgAgeAkQgGAGAAAKQgBAKAJAEQAHAFAPAAQAVAAALgGQAKgHAAgLQABgKgHgDQgGgEgQAAIgTAAQgMAAgHAGgAgUhBQgHAHAAANQAAAMAHAHQAHAGAMAAQAZAAAAgZQAAgagZAAQgNAAgGAGg");
	this.shape_879.setTransform(641.75,682.725);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#FFFFFF").s().p("AALBNIAAhtIAAgaIgFAFIgYAUIgJgMIAogfIAPAAIAACZg");
	this.shape_880.setTransform(553.125,678.3);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgRAXAAQAXAAAMAPQANAQAAAbQAAAdgNAPQgMAQgXAAQgKAAgKgEgAgZgLQgHAKgBAYQABAZAHAKQAJAKAQAAQARAAAIgMQAIgLAAgWQAAgXgIgKQgIgLgRAAQgQAAgJAKg");
	this.shape_881.setTransform(475.8,677.9);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAYBEIAKAfIABAAIAHgXIAbhMIATAAIgrBzg");
	this.shape_882.setTransform(425.25,680.225);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVAAALAKQAKAKAAAUIAABMg");
	this.shape_883.setTransform(395.675,677.8);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQAMAAAIgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgPgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgLAAgHAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgXAAgNgHg");
	this.shape_884.setTransform(1094.95,648.425);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgQAAgJAJQgIAKAAATIAABAIgQAAIAAhKQAAgOgFgHQgHgHgMAAQgQAAgIAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIADAQIAAAAQAFgIAKgFQAIgFAMAAQAbAAAHAUIABAAQAFgJAKgGQAKgFAMAAQAUAAAJAKQAKAKAAAWIAABLg");
	this.shape_885.setTransform(1079.8,648.325);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgHgJgOAAQgNAAgHAJQgJAJgCAQIA8AAIAAAAg");
	this.shape_886.setTransform(1063.75,648.425);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAJALQALALAQAAQASAAATgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgMAAgJAJQgIAJgBAQIA7AAIAAAAg");
	this.shape_887.setTransform(1033,648.425);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgGALAAQAVABALAJQAKAKAAAVIAABMg");
	this.shape_888.setTransform(1020.375,646);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgGALAAQAVABALAJQAKAKAAAVIAABMg");
	this.shape_889.setTransform(993.975,646);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQABgKAGgIQAHgIAMgCQgEgCgDgFQgDgEAAgFQAAgHADgDQAEgFAHgFQgJgDgGgJQgFgJgBgLQAAgTAMgLQAMgKAUAAQAIAAAHACIAoAAIAAALIgVADIAGAJQACAGAAAIQAAARgMAKQgLAKgUAAIgKgBQgLAGABAIQAAAFADACQAFACAJAAIATAAQATAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgGAGgBAKQABAKAHAEQAJAFAOAAQAVAAALgGQALgHgBgLQAAgKgFgDQgHgEgQAAIgUAAQgLAAgHAGgAgUhBQgHAHAAANQAAAMAHAHQAGAGANAAQAZAAAAgZQAAgagaAAQgLAAgHAGg");
	this.shape_890.setTransform(981.35,650.925);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgGALAAQAVABALAJQAKAKAAAVIAABMg");
	this.shape_891.setTransform(933.975,646);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQANgQAWAAQAWAAANARIABAAIgBgIIAAgIIAAgvIASAAIAACjIgOAAIgDgPIgBAAQgMARgXAAQgWAAgNgPgAgXgJQgJALABAWQgBAWAJALQAHALAQABQARAAAIgKQAJgKgBgWIAAgDQAAgYgIgLQgIgKgRAAQgQAAgHAMg");
	this.shape_892.setTransform(821.25,646.1);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgNAAgJAJQgIAJgBAQIA7AAIAAAAg");
	this.shape_893.setTransform(809,648.425);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_894.setTransform(742.6,648.425);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgGgJIgBAAIgFAPIgMAAIAAijIASAAIAAAoIgBAYIABAAQAMgSAXAAQAXAAANAQQAMAPAAAcQAAAdgNAQQgMAPgXAAQgLAAgJgEgAgYgLQgIALAAAXQAAAZAIAKQAIALAQAAQARAAAIgMQAHgMABgWQgBgXgHgKQgIgLgRAAQgRAAgHAKg");
	this.shape_895.setTransform(730.25,646.1);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAijIARAAIAAAyIgBAOIACAAQAFgIAJgEQAKgGALAAQAVABALAJQAKAKAAAVIAABMg");
	this.shape_896.setTransform(688.975,646);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQASAAATgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_897.setTransform(649.9,648.425);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_898.setTransform(607.85,647.175);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPAMgIQALgIATAAQATAAASAIIgGAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_899.setTransform(579.4,648.425);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#FFFFFF").s().p("AgEAcIgFg3IATAAIgEA3g");
	this.shape_900.setTransform(566.275,641.575);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#FFFFFF").s().p("AgEAcIgFg3IATAAIgEA3g");
	this.shape_901.setTransform(532.475,641.575);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAKALAQAAQATAAASgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_902.setTransform(501,648.425);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_903.setTransform(655.45,428.275);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_904.setTransform(612.35,428.275);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#FFFFFF").s().p("AgpBMQgMgIAAgQQgBgKAIgIQAGgIANgCQgFgCgDgFQgDgEAAgFQAAgHADgDQADgFAIgFQgJgDgFgJQgHgJABgLQAAgTALgLQAMgKAVAAQAHAAAIACIAnAAIAAALIgUADIAEAJQADAGAAAIQAAARgMAKQgMAKgSAAIgKgBQgMAGAAAIQAAAFAFACQADACAKAAIAUAAQASAAAKAIQAKAIAAAPQAAATgPALQgPAKgdAAQgXAAgMgJgAgeAkQgGAGAAAKQgBAKAJAEQAHAFAPAAQAVAAALgGQAKgHAAgLQABgKgHgDQgFgEgQAAIgUAAQgMAAgHAGgAgUhBQgHAHAAANQAAAMAHAHQAHAGAMAAQAZAAAAgZQAAgagZAAQgNAAgGAGg");
	this.shape_905.setTransform(495.85,432.025);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#FFFFFF").s().p("AgJA6IgshzIATAAIAZBEIAJAfIAAAAIAIgXIAbhMIATAAIgsBzg");
	this.shape_906.setTransform(465.9,429.525);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgRAAgIAJQgIAKAAATIAABAIgQAAIAAhKQAAgOgFgHQgHgHgMAAQgQAAgIAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIADAQIABAAQAEgIAKgFQAIgFAMAAQAbAAAHAUIABAAQAFgJAKgGQAKgFAMAAQAUAAAJAKQAKAKAAAWIAABLg");
	this.shape_907.setTransform(437.55,429.425);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_908.setTransform(415.9,429.525);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#FFFFFF").s().p("AgQBPQgKgEgGgJIgBAAIgFAPIgMAAIAAijIASAAIAAAoIgBAYIABAAQAMgSAXAAQAWAAANAQQANAPAAAcQAAAcgNARQgNAPgWAAQgLAAgIgEgAgYgKQgJAJABAYQgBAYAJALQAIALARAAQAQgBAIgMQAIgLgBgWQABgWgIgLQgIgLgQAAQgSAAgHALg");
	this.shape_909.setTransform(362.45,427.2);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_910.setTransform(956.8,397.725);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_911.setTransform(933.65,396.475);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQAMgPAXAAQAXgBAMASIACAAIgBgJIAAgIIAAgvIARAAIAACjIgOAAIgDgQIAAAAQgNASgXAAQgXAAgMgQgAgYgJQgHALgBAVQABAXAHALQAJAMAPgBQARAAAJgKQAHgJABgWIAAgEQAAgXgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_912.setTransform(917.4,395.4);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#FFFFFF").s().p("AgEAcIgFg3IATAAIgEA3g");
	this.shape_913.setTransform(765.675,390.875);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#FFFFFF").s().p("AgEAcIgFg3IATAAIgEA3g");
	this.shape_914.setTransform(716.225,390.875);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQAMgPAXAAQAWgBANASIABAAIAAgJIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgXAAgMgQgAgXgJQgIALAAAVQAAAXAIALQAIAMAPgBQARAAAIgKQAJgJAAgWIAAgEQgBgXgIgKQgIgLgRAAQgPAAgIAMg");
	this.shape_915.setTransform(701.35,395.4);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAIgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_916.setTransform(637.15,396.475);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgRAAgIAJQgIAKAAATIAABAIgQAAIAAhKQAAgOgFgHQgHgHgMAAQgQAAgIAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIAAAAQAFgIAKgFQAIgFAMAAQAbAAAHAUIABAAQAFgJAKgGQAKgFAMAAQAUAAAJAKQAKAKAAAWIAABLg");
	this.shape_917.setTransform(598.2,397.625);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_918.setTransform(898.3,334.125);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_919.setTransform(856.55,332.875);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#FFFFFF").s().p("AAhA6IghgvIgfAvIgVAAIArg6Igog5IAUAAIAdAsIAfgsIATAAIgoA5IAqA6g");
	this.shape_920.setTransform(847.15,334.125);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_921.setTransform(804.7,334.125);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_922.setTransform(781.55,332.875);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_923.setTransform(733.75,332.875);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAPAAIABAQIABAAQAHgKAJgEQAJgEALAAQAXAAAMAQQANAPAAAdQAAAbgNAQQgNAQgWAAQgKAAgKgEQgJgEgHgJIgBAAIABATIAAAwgAgZg7QgHAKgBAVIAAAEQABAYAHAKQAJAKAQAAQAPAAAKgMQAHgLABgVQgBgWgHgLQgKgMgPAAQgQAAgJAKg");
	this.shape_924.setTransform(692.05,336.625);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQABgKAGgIQAHgIAMgCQgEgCgDgFQgDgEAAgFQAAgHADgDQAEgFAHgFQgJgDgGgJQgFgJgBgLQAAgTAMgLQAMgKAUAAQAIAAAIACIAnAAIAAALIgVADIAGAJQACAGAAAIQAAARgMAKQgLAKgUAAIgKgBQgLAGABAIQAAAFADACQAEACAKAAIAUAAQASAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgGAGgBAKQAAAKAIAEQAJAFAOAAQAVAAALgGQALgHgBgLQAAgKgFgDQgGgEgRAAIgUAAQgLAAgHAGgAgVhBQgGAHAAANQAAAMAHAHQAGAGANAAQAZAAgBgZQAAgagZAAQgLAAgIAGg");
	this.shape_925.setTransform(673.55,336.625);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPALgIQAMgIATAAQATAAARAIIgGAOQgRgHgOAAQgLAAgHAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_926.setTransform(553.7,334.125);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_927.setTransform(458.25,332.875);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_928.setTransform(417.85,332.875);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAKALAQAAQATAAASgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_929.setTransform(1024.8,302.325);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAKALQAJALARAAQASAAATgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgCAQIA8AAIAAAAg");
	this.shape_930.setTransform(930,302.325);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALALQAKAKAAAUIAABMg");
	this.shape_931.setTransform(917.375,299.9);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQANgPAWAAQAWgBANASIACAAIgBgJIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgWAAgNgQgAgYgJQgHALgBAVQABAXAHALQAJAMAPgBQARAAAJgKQAHgJABgWIAAgEQAAgXgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_932.setTransform(890.6,300);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_933.setTransform(877.775,302.225);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#FFFFFF").s().p("AgPAaIAGgaIAFgZIASAAIACACIgIAYIgKAZg");
	this.shape_934.setTransform(850.5,308.25);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_935.setTransform(841.725,302.225);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_936.setTransform(782.2,302.325);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAIgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAJAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_937.setTransform(772.25,301.075);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgGg6QgEgDAAgGQAAgGAEgCQADgDADAAQAEAAADADQAEACAAAGQAAAGgEADQgDADgEAAQgDAAgDgDg");
	this.shape_938.setTransform(765.8,300.175);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_939.setTransform(721.575,302.225);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDAAgGQAAgGADgCQACgDAEAAQAEAAADADQADACAAAGQAAAGgDADQgDADgEAAQgEAAgCgDg");
	this.shape_940.setTransform(712.2,300.175);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgRgFgHgFQgGgEgEgGQgDgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgXAAgNgHg");
	this.shape_941.setTransform(704.4,302.325);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQANAAAHgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgRgFgHgFQgGgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgFAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_942.setTransform(671,302.325);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDAAgGQAAgGADgCQACgDAEAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgEAAgCgDg");
	this.shape_943.setTransform(663.05,300.175);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_944.setTransform(595.275,302.225);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAPAAIACAQIAAAAQAIgKAJgEQAIgEALAAQAXAAANAQQAMAPAAAdQAAAbgNAQQgNAQgWAAQgLAAgIgEQgKgEgHgJIAAAAIAAATIAAAwgAgYg7QgIAKgBAVIAAAEQAAAYAJAKQAIAKARAAQAPAAAIgMQAIgLAAgVQAAgWgIgLQgIgMgPAAQgSAAgHAKg");
	this.shape_945.setTransform(583.85,304.825);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALALQAKAKAAAUIAABMg");
	this.shape_946.setTransform(552.775,299.9);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAJAAIAKgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_947.setTransform(542.2,301.075);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_948.setTransform(519.125,302.325);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_949.setTransform(500.475,302.225);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_950.setTransform(487.325,302.325);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDAAgGQAAgGADgCQADgDADAAQAEAAADADQADACABAGQgBAGgDADQgDADgEAAQgDAAgDgDg");
	this.shape_951.setTransform(478.1,300.175);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_952.setTransform(471.45,301.075);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgDgDAAgGQAAgGADgCQAEgDADAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgDAAgEgDg");
	this.shape_953.setTransform(465,300.175);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_954.setTransform(458.4,301.075);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_955.setTransform(413.725,302.225);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALALQAKAKAAAUIAABMg");
	this.shape_956.setTransform(396.475,299.9);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#FFFFFF").s().p("AgqBNIAAiZIBVAAIAAAPIhDAAIAAAzIA/AAIAAAOIg/AAIAAA5IBDAAIAAAQg");
	this.shape_957.setTransform(361.9,300.4);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_958.setTransform(832.975,238.725);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAGgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_959.setTransform(812.35,237.475);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_960.setTransform(788.875,238.725);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAXABAMAQIACAAIgBgIIAAgIIAAgvIARAAIAACjIgOAAIgDgQIAAAAQgNASgXAAQgXAAgMgPgAgYgJQgIALAAAWQABAWAHALQAJAMAPAAQARgBAJgJQAHgKABgWIAAgDQAAgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_961.setTransform(744.6,236.4);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_962.setTransform(731.775,238.625);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_963.setTransform(719.15,238.725);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAGgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_964.setTransform(709.2,237.475);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_965.setTransform(698.925,238.625);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_966.setTransform(674.675,238.625);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_967.setTransform(644.45,238.725);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAGgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_968.setTransform(634.5,237.475);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_969.setTransform(615.175,238.625);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_970.setTransform(604,238.725);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_971.setTransform(591.375,238.625);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_972.setTransform(578.75,238.725);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQAAgKAIgIQAGgIAMgCQgEgCgDgFQgDgEAAgFQAAgHADgDQADgFAIgFQgJgDgFgJQgHgJAAgLQAAgTAMgLQALgKAVAAQAIAAAIACIAnAAIAAALIgUADIAEAJQADAGAAAIQAAARgMAKQgMAKgSAAIgKgBQgLAGAAAIQAAAFADACQAEACAKAAIAUAAQASAAAKAIQAKAIAAAPQAAATgPALQgPAKgdAAQgXAAgMgJgAgeAkQgGAGAAAKQgBAKAJAEQAHAFAPAAQAVAAALgGQAKgHAAgLQAAgKgFgDQgHgEgQAAIgTAAQgMAAgHAGgAgUhBQgHAHAAANQAAAMAHAHQAHAGAMAAQAYAAABgZQAAgagZAAQgNAAgGAGg");
	this.shape_973.setTransform(566.7,241.225);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_974.setTransform(548.775,238.725);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQggAAgBgjg");
	this.shape_975.setTransform(538.35,237.475);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_976.setTransform(525.475,238.625);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_977.setTransform(514.3,238.725);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_978.setTransform(491.425,238.625);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_979.setTransform(479.775,238.725);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_980.setTransform(461.125,238.625);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#FFFFFF").s().p("AgYBeQAPgUAIgYQAHgYAAgZQAAgZgGgYQgJgZgPgUIARAAQAPASAIAZQAJAYAAAbQAAAcgJAXQgIAZgPARg");
	this.shape_981.setTransform(440.15,238.5);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQABgKAGgIQAHgIAMgCQgEgCgDgFQgDgEAAgFQAAgHAEgDQADgFAHgFQgJgDgGgJQgFgJgBgLQAAgTAMgLQAMgKAUAAQAJAAAGACIApAAIAAALIgWADIAGAJQACAGAAAIQAAARgMAKQgLAKgUAAIgKgBQgLAGABAIQAAAFADACQAFACAJAAIATAAQATAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgHAGAAAKQABAKAHAEQAJAFAOAAQAVAAALgGQALgHAAgLQgBgKgFgDQgGgEgRAAIgUAAQgLAAgHAGgAgVhBQgGAHAAANQAAAMAHAHQAGAGANAAQAZAAgBgZQAAgagZAAQgLAAgIAGg");
	this.shape_982.setTransform(431.1,241.225);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_983.setTransform(418.725,238.625);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIARAAIAABygAgGg6QgDgDAAgGQAAgGADgCQACgDAEAAQAEAAADADQADACAAAGQAAAGgDADQgDADgEAAQgEAAgCgDg");
	this.shape_984.setTransform(409.35,236.575);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_985.setTransform(386.875,238.725);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_986.setTransform(373.875,238.725);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_987.setTransform(364.625,236.3);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#FFFFFF").s().p("AAHBeQgOgSgIgYQgJgXAAgcQAAgbAJgYQAIgZAOgSIASAAQgPAUgJAZQgGAYAAAZQAAAZAHAYQAHAYAQAUg");
	this.shape_988.setTransform(358.8,238.5);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_989.setTransform(1021.975,206.825);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgRAGQgJACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgGgJgOAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_990.setTransform(1010.8,206.925);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_991.setTransform(987.425,206.925);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQANgPAWAAQAWgBANASIABAAIgBgJIAAgIIAAgvIASAAIAACjIgOAAIgDgQIgBAAQgMASgXAAQgWAAgNgQgAgXgJQgJALABAVQgBAXAJALQAHAMAQgBQARAAAIgKQAJgJgBgWIAAgEQAAgXgIgKQgIgLgRAAQgQAAgHAMg");
	this.shape_992.setTransform(968.4,204.6);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_993.setTransform(955.575,206.825);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_994.setTransform(927.775,206.825);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_995.setTransform(893.225,206.925);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAKALQAJALARAAQASAAATgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgCAQIA8AAIAAAAg");
	this.shape_996.setTransform(851.7,206.925);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_997.setTransform(841.75,205.675);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#FFFFFF").s().p("AgIBSIAAijIARAAIAACjg");
	this.shape_998.setTransform(819.425,204.5);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_999.setTransform(810.325,206.925);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_1000.setTransform(795.35,205.675);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_1001.setTransform(785.075,206.825);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#FFFFFF").s().p("AAiBVIAAgyIABgSIgCAAQgMASgXAAQgXAAgMgQQgNgQAAgbQAAgcANgQQANgQAWAAQAXAAANASIABAAIACgQIAOAAIAACngAgYg5QgHAMAAAVQAAAWAHALQAIALAQAAQAQAAAJgJQAIgKABgVIAAgEQAAgYgJgLQgIgKgRAAQgQAAgIAMg");
	this.shape_1002.setTransform(746.25,209.425);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_1003.setTransform(734,206.925);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQABgKAGgIQAHgIAMgCQgEgCgDgFQgDgEAAgFQAAgHAEgDQADgFAHgFQgJgDgGgJQgFgJgBgLQAAgTAMgLQAMgKAUAAQAJAAAGACIApAAIAAALIgWADIAGAJQACAGAAAIQAAARgMAKQgLAKgUAAIgKgBQgLAGABAIQAAAFADACQAFACAJAAIATAAQATAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgHAGAAAKQABAKAHAEQAJAFAOAAQAVAAALgGQALgHAAgLQgBgKgFgDQgGgEgRAAIgUAAQgLAAgHAGgAgVhBQgGAHAAANQAAAMAHAHQAGAGANAAQAZAAgBgZQAAgagZAAQgLAAgIAGg");
	this.shape_1004.setTransform(706.05,209.425);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_1005.setTransform(693.675,206.825);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAGgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQghAAABgjg");
	this.shape_1006.setTransform(677.7,205.675);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_1007.setTransform(667.575,206.925);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgNAAgJAJQgIAJgBAQIA7AAIAAAAg");
	this.shape_1008.setTransform(656,206.925);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAOAAIACAQIABAAQAIgKAIgEQAJgEALAAQAXAAAMAQQANAPAAAdQAAAbgNAQQgMAQgXAAQgLAAgJgEQgJgEgHgJIgBAAIABATIAAAwgAgZg7QgHAKgBAVIAAAEQABAYAHAKQAJAKAQAAQAPAAAKgMQAHgLABgVQgBgWgHgLQgKgMgPAAQgQAAgJAKg");
	this.shape_1009.setTransform(643.65,209.425);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_1010.setTransform(621.025,206.825);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_1011.setTransform(596.525,206.925);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgGgFgRgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgGAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFACADQADAEAFADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_1012.setTransform(569.1,206.925);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_1013.setTransform(557.95,206.925);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_1014.setTransform(535.075,206.925);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_1015.setTransform(524.975,206.825);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAPAAIACAQIABAAQAGgKAKgEQAIgEALAAQAXAAANAQQAMAPAAAdQAAAbgNAQQgNAQgWAAQgKAAgJgEQgKgEgGgJIgBAAIABATIAAAwgAgYg7QgIAKAAAVIAAAEQgBAYAJAKQAIAKARAAQAPAAAIgMQAJgLgBgVQABgWgJgLQgIgMgPAAQgSAAgHAKg");
	this.shape_1016.setTransform(513.55,209.425);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgSAGQgIACgLAAQgZAAgPgQgAAegKQAAgRgHgIQgIgJgOAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_1017.setTransform(495.05,206.925);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALALQAKAKAAAUIAABMg");
	this.shape_1018.setTransform(482.425,204.5);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_1019.setTransform(471.9,205.675);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgEAAgDgDg");
	this.shape_1020.setTransform(449.6,204.775);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#FFFFFF").s().p("AAfA7IAAhKQAAgOgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAWIAAA8IgRAAIAAhzIAOAAIADAQIABAAQAFgJAKgEQAKgFAKAAQAVAAALAKQAKAKAAAWIAABLg");
	this.shape_1021.setTransform(434.725,206.825);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#FFFFFF").s().p("AgbA1QgMgIgHgNQgGgOAAgSQAAgbAOgQQAOgQAYAAQAYAAAPAQQAOAQAAAbQAAAcgOAQQgOAQgZAAQgPAAgMgHgAgZghQgJALAAAWQAAAWAJAMQAJALAQAAQARAAAJgLQAJgMAAgWQAAgVgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_1022.setTransform(421.575,206.925);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgDgDAAgGQAAgGADgCQAEgDADAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgDAAgEgDg");
	this.shape_1023.setTransform(412.35,204.775);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAFAGAIAAIAJgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_1024.setTransform(405.7,205.675);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#FFFFFF").s().p("AgkAzQgJgJAAgQQAAgiA3gCIATgBIAAgHQAAgNgGgHQgFgGgNAAQgOAAgSAJIgFgOQAIgEAKgDQALgDAJAAQAUAAAKAJQAKAKAAAUIAABOIgNAAIgDgRIgBAAQgJALgIAEQgJAEgMAAQgRAAgKgJgAALACQgUAAgJAGQgJAGAAAMQAAAJAGAFQAGAFAKAAQAPAAAKgJQAJgJAAgQIAAgKg");
	this.shape_1025.setTransform(395.575,206.925);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#FFFFFF").s().p("AggA7IAAhzIAOAAIACAWIABAAQAHgMAIgGQAJgGALAAIANABIgCARQgHgCgGAAQgOAAgJALQgKAMAAARIAAA9g");
	this.shape_1026.setTransform(386.375,206.825);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_1027.setTransform(375.25,206.925);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#FFFFFF").s().p("AgQAlIAAhEIgRAAIAAgIIARgHIAHgZIAJAAIAAAbIAiAAIAAANIgiAAIAABDQAAALAFAFQAEAGAKAAIAJgBIAGgBIAAANIgIADIgKAAQggAAAAgjg");
	this.shape_1028.setTransform(365.25,205.675);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#FFFFFF").s().p("AgfBzQASgYAJgdQAIgeAAgfQAAgfgIgeQgJgegSgYIAaAAQASAWAKAeQAKAegBAhQABAigKAdQgKAdgSAWg");
	this.shape_1029.setTransform(718.2,140.325);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#FFFFFF").s().p("AAgBJIAAhXQAAgRgGgIQgHgIgOAAQgTAAgIALQgJAMAAAaIAABHIgfAAIAAiOIAYAAIAEATIACAAQAGgLAMgFQAMgGAOAAQAzAAAAA0IAABdg");
	this.shape_1030.setTransform(705.825,140.4);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#FFFFFF").s().p("AgjBBQgPgJgIgRQgJgRAAgWQAAgiASgTQASgUAfAAQAfAAASAUQATAUgBAhQABAjgTATQgRAUggAAQgTAAgQgJgAgagkQgJANAAAXQAAAxAjAAQAlAAgBgxQAAgwgkAAQgSAAgIAMg");
	this.shape_1031.setTransform(689.35,140.525);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#FFFFFF").s().p("AgOBjIAAiOIAdAAIAACOgAgMhEQgEgFAAgIQAAgIAEgFQAEgDAIAAQAIAAAFADQAEAFAAAIQAAAIgEAFQgFAEgIAAQgIAAgEgEg");
	this.shape_1032.setTransform(677.7,137.8);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#FFFFFF").s().p("AgZArIAAhLIgUAAIAAgOIAVgLIAKgeIASAAIAAAfIApAAIAAAYIgpAAIAABKQAAALAGAGQAFAFAJAAQALAAALgEIAAAYIgNADIgRABQgpAAAAgtg");
	this.shape_1033.setTransform(668.8,139.05);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#FFFFFF").s().p("AgvA+QgMgLgBgVQAAgWARgKQARgLAggBIAYgBIAAgHQABgOgHgHQgGgHgOAAQgJAAgLAEIgTAHIgKgWQAMgGAOgDQAOgDALAAQAbAAANAMQAPAMAAAZIAABfIgWAAIgGgUIgBAAQgLANgKAFQgLAFgPAAQgVAAgLgMgAAMAEQgVABgJAGQgKAGAAAOQAAAJAFAFQAHAGAKAAQAQAAAKgKQAKgJAAgQIAAgNg");
	this.shape_1034.setTransform(655.6,140.525);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#FFFFFF").s().p("AgrBJIAAiOIAYAAIAEAZIACAAQAHgNAKgHQAMgIANAAIAPACIgDAcQgHgBgHAAQgSgBgKAMQgLAMAAATIAABKg");
	this.shape_1035.setTransform(643.575,140.4);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#FFFFFF").s().p("AgaArIAAhLIgTAAIAAgOIAVgLIAKgeIASAAIAAAfIAoAAIAAAYIgoAAIAABKQAAALAFAGQAGAFAJAAQALAAALgEIAAAYIgNADIgRABQgqAAAAgtg");
	this.shape_1036.setTransform(616.65,139.05);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#FFFFFF").s().p("AgOBeIAAi7IAdAAIAAC7g");
	this.shape_1037.setTransform(607.525,138.225);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#FFFFFF").s().p("AAGBzQgSgWgKgdQgKgdAAgiQAAghAKgeQAKgeASgWIAbAAQgSAYgKAeQgIAeAAAfQAAAfAIAeQAKAdARAYg");
	this.shape_1038.setTransform(599.475,140.325);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#FFFFFF").s().p("AhABoIAAjNIAZAAIAEATIACAAQAOgVAbAAQAbAAAPATQAPATAAAjQAAAigPAUQgQATgaAAQgaAAgPgTIgCAAIACAWIAAA6gAgZhEQgIAKAAAYIAAAEQAAAaAIALQAIAMASAAQAQAAAIgNQAJgMAAgYQAAgYgJgMQgIgNgRAAQgRAAgIALg");
	this.shape_1039.setTransform(580.525,143.575);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#FFFFFF").s().p("AgiBBQgQgJgIgRQgIgRgBgWQABgiARgTQASgUAgAAQAfAAARAUQASAUAAAhQAAAjgSATQgRAUggAAQgTAAgPgJgAgbgkQgIANAAAXQAAAxAkAAQAjAAABgxQAAgwglAAQgSAAgJAMg");
	this.shape_1040.setTransform(563.85,140.525);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#FFFFFF").s().p("AgiBBQgQgJgIgRQgJgRAAgWQABgiARgTQASgUAgAAQAfAAARAUQASAUAAAhQAAAjgSATQgRAUggAAQgTAAgPgJgAgagkQgJANAAAXQAAAxAkAAQAjAAABgxQAAgwglAAQgSAAgIAMg");
	this.shape_1041.setTransform(547.75,140.525);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#FFFFFF").s().p("Ag2BeIAAi7IAeAAIAAChIBPAAIAAAag");
	this.shape_1042.setTransform(533.475,138.225);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#FFFFFF").s().p("AgNBGQgFgGAAgJQAAgKAFgEQAFgGAIAAQAJAAAFAGQAFAFAAAJQAAAJgFAGQgFAEgJAAQgIAAgFgEgAgNgnQgFgGAAgJQAAgUASABQAKAAAEAEQAFAGAAAJQAAAJgFAGQgFAEgJAAQgIAAgFgEg");
	this.shape_1043.setTransform(515.025,140.55);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#FFFFFF").s().p("AgbBlIAAh2IgXAAIAAgPIAXgJIAAgKQAAgZAMgMQALgMAYAAQAQAAAPAFIgIAXQgLgEgKAAQgKAAgFAHQgFAGABANIAAAJIAiAAIAAAYIgiAAIAAB2g");
	this.shape_1044.setTransform(462.5,137.55);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#FFFFFF").s().p("AgrBJIAAiOIAYAAIAEAZIACAAQAHgNAKgHQAMgIANAAIAPACIgDAcQgHgBgHAAQgSgBgKAMQgLAMAAATIAABKg");
	this.shape_1045.setTransform(421.875,140.4);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#FFFFFF").s().p("AgaArIAAhLIgTAAIAAgOIAVgLIAKgeIASAAIAAAfIAoAAIAAAYIgoAAIAABKQAAALAFAGQAGAFAJAAQALAAALgEIAAAYIgNADIgRABQgpAAgBgtg");
	this.shape_1046.setTransform(410.1,139.05);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#FFFFFF").s().p("AAgBJIAAhXQAAgRgGgIQgHgIgOAAQgTAAgIALQgJAMAAAaIAABHIgfAAIAAiOIAYAAIAEATIACAAQAGgLAMgFQAMgGAOAAQAzAAAAA0IAABdg");
	this.shape_1047.setTransform(396.725,140.4);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAPAAIACAQIAAAAQAHgKAKgEQAIgEALAAQAXAAAMAQQANAPAAAdQAAAbgNAQQgMAQgXAAQgLAAgIgEQgKgEgHgJIAAAAIAAATIAAAwgAgYg7QgIAKgBAVIAAAEQAAAYAJAKQAIAKARAAQAPAAAIgMQAIgLAAgVQAAgWgIgLQgIgMgPAAQgSAAgHAKg");
	this.shape_1048.setTransform(661.7,480.675);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVAAALAKQAKAKAAAUIAABMg");
	this.shape_1049.setTransform(395.675,475.75);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgFgFgQgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgGAOQgSgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_1050.setTransform(1065.4,446.375);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgdQAAgbANgQQAMgQAXAAQAWAAANARIABAAIgBgIIAAgIIAAgvIASAAIAACjIgOAAIgDgPIgBAAQgMARgXAAQgXAAgMgPgAgXgJQgJALAAAVQAAAXAJALQAHAMAQgBQARABAIgKQAIgKAAgWIAAgEQAAgXgIgLQgIgKgRAAQgQAAgHAMg");
	this.shape_1051.setTransform(925.3,444.05);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgdQAAgbANgQQAMgQAXAAQAXAAAMARIACAAIgBgIIAAgIIAAgvIARAAIAACjIgPAAIgCgPIAAAAQgNARgXAAQgXAAgMgPgAgYgJQgHALgBAVQABAXAHALQAJAMAPgBQARABAJgKQAHgKABgWIAAgEQAAgXgJgLQgIgKgRAAQgPAAgJAMg");
	this.shape_1052.setTransform(912.1,444.05);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgGgFgRgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgGAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFACADQADAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_1053.setTransform(831,446.375);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#FFFFFF").s().p("AgqBNIAAiZIBVAAIAAAPIhDAAIAAA5IA/AAIAAAPIg/AAIAABCg");
	this.shape_1054.setTransform(554.6,444.45);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgQAAgJAJQgHAKgBATIAABAIgQAAIAAhKQAAgOgFgHQgHgHgMAAQgRAAgHAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIACAQIABAAQAGgIAJgFQAJgFAKAAQAcAAAHAUIABAAQAFgJAKgGQAJgFANAAQAUAAAKAKQAJAKABAWIAABLg");
	this.shape_1055.setTransform(527.4,446.275);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQANgPAWAAQAWgBANASIABAAIAAgJIAAgIIAAgvIARAAIAACjIgPAAIgCgPIAAAAQgNARgXAAQgWAAgNgQgAgYgJQgHALAAAVQAAAXAHALQAIALAQAAQARAAAJgKQAIgJAAgWIAAgEQAAgXgJgLQgIgKgRAAQgQAAgIAMg");
	this.shape_1056.setTransform(936.15,380.45);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgRAAgIAJQgIAKAAATIAABAIgQAAIAAhKQAAgOgFgHQgHgHgMAAQgQAAgIAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIADAQIAAAAQAFgIAKgFQAIgFAMAAQAbAAAHAUIABAAQAFgJAKgGQAKgFAMAAQAUAAAJAKQAKAKAAAWIAABLg");
	this.shape_1057.setTransform(879,382.675);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAyIgBAPIACAAQAFgJAJgFQAKgEALAAQAVAAALAKQAKAKAAAUIAABMg");
	this.shape_1058.setTransform(822.475,380.35);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAPAAIACAQIABAAQAGgKAKgEQAIgEALAAQAXAAANAQQAMAPAAAdQAAAbgNAQQgNAQgWAAQgKAAgJgEQgKgEgGgJIgBAAIABATIAAAwgAgYg7QgIAKAAAVIAAAEQgBAYAJAKQAIAKARAAQAPAAAIgMQAIgLAAgVQAAgWgIgLQgIgMgPAAQgSAAgHAKg");
	this.shape_1059.setTransform(764.65,385.275);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQAMgPAXAAQAXgBAMASIABAAIgBgJIAAgIIAAgvIASAAIAACjIgPAAIgCgPIgBAAQgMARgXAAQgXAAgMgQgAgXgJQgIALAAAVQAAAXAIALQAHALAQAAQARAAAIgKQAJgJgBgWIAAgEQAAgXgIgLQgIgKgRAAQgQAAgHAMg");
	this.shape_1060.setTransform(698.2,380.45);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAyIgBAPIACAAQAFgJAJgFQAKgEALAAQAVAAALAKQAKAKAAAUIAABMg");
	this.shape_1061.setTransform(556.475,380.35);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQAMAAAIgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgQgFgGgFQgHgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgLAAgHAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgXAAgNgHg");
	this.shape_1062.setTransform(439.75,382.775);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgGgFgPgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_1063.setTransform(1006.55,350.975);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#FFFFFF").s().p("AgpBMQgMgIAAgQQgBgKAIgIQAGgIANgCQgFgCgDgFQgDgEAAgFQAAgHADgDQADgFAIgFQgJgDgFgJQgHgJABgLQAAgTALgLQALgKAWAAQAHAAAIACIAnAAIAAALIgUADIAEAJQADAGAAAIQAAARgMAKQgMAKgSAAIgKgBQgMAGAAAIQAAAFAFACQADACAKAAIAUAAQASAAAKAIQAKAIAAAPQAAATgPALQgPAKgdAAQgXAAgMgJgAgeAkQgHAGABAKQgBAKAJAEQAHAFAPAAQAVAAALgGQAKgHAAgLQABgKgHgDQgFgEgQAAIgUAAQgMAAgHAGgAgUhBQgHAHAAANQAAAMAHAHQAHAGAMAAQAZAAAAgZQAAgagZAAQgNAAgGAGg");
	this.shape_1064.setTransform(907.15,353.475);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAOAAIACAQIACAAQAHgKAIgEQAJgEALAAQAXAAANAQQAMAPAAAdQAAAbgNAQQgMAQgXAAQgLAAgJgEQgJgEgGgJIgCAAIACATIAAAwgAgZg7QgHAKAAAVIAAAEQAAAYAHAKQAJAKAQAAQAPAAAKgMQAIgLAAgVQAAgWgIgLQgKgMgPAAQgQAAgJAKg");
	this.shape_1065.setTransform(873.25,353.475);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAXAAAMARIACAAIgBgIIAAgIIAAgvIARAAIAACjIgOAAIgDgPIAAAAQgNARgXAAQgXAAgMgPgAgYgJQgHALgBAWQABAWAHALQAJAMAPAAQARAAAJgKQAHgKABgWIAAgDQAAgYgJgLQgIgKgRAAQgPAAgJAMg");
	this.shape_1066.setTransform(768.9,348.65);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAXAAAMARIABAAIAAgIIAAgIIAAgvIARAAIAACjIgPAAIgCgPIAAAAQgNARgXAAQgXAAgMgPgAgXgJQgIALAAAWQAAAWAIALQAHAMAQAAQARAAAIgKQAJgKAAgWIAAgDQgBgYgIgLQgIgKgRAAQgQAAgHAMg");
	this.shape_1067.setTransform(743.65,348.65);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQAMAAAIgEQAHgEAAgJQAAgHgFgFQgHgFgQgGQgQgFgGgFQgHgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgLAAgHAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgXAAgNgHg");
	this.shape_1068.setTransform(649.45,350.975);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQANAAAHgEQAHgEAAgJQAAgHgFgFQgGgFgRgGQgQgFgGgFQgHgEgDgGQgEgGAAgHQAAgPAMgIQALgIATAAQATAAARAIIgGAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFACADQADAEAFADIATAIQAVAHAHAHQAHAIAAALQAAAQgMAJQgMAJgVAAQgWAAgOgHg");
	this.shape_1069.setTransform(498.9,350.975);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAXAAAMARIACAAIgBgIIAAgIIAAgvIARAAIAACjIgOAAIgDgPIAAAAQgNARgXAAQgXAAgMgPgAgYgJQgHALgBAWQABAWAHALQAJAMAPAAQARAAAJgKQAHgKABgWIAAgDQAAgYgJgLQgIgKgRAAQgPAAgJAMg");
	this.shape_1070.setTransform(469.2,348.65);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#FFFFFF").s().p("AgQBPQgKgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgSAXAAQAWAAANAQQANAPAAAcQAAAdgNAQQgNAPgWAAQgKAAgJgEgAgZgLQgIALAAAXQAAAZAIAKQAJALARAAQAQAAAIgMQAIgMgBgWQABgXgIgKQgIgLgQAAQgRAAgJAKg");
	this.shape_1071.setTransform(403.5,348.65);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#FFFFFF").s().p("AgoA1IAAgRQAJAFAJACQAKACAJAAQAMAAAIgEQAHgEAAgJQAAgHgFgFQgHgFgPgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgNgHg");
	this.shape_1072.setTransform(1007.1,319.175);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgQAAgJAJQgHAKgBATIAABAIgQAAIAAhKQAAgOgFgHQgHgHgMAAQgRAAgHAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIACAQIABAAQAGgIAJgFQAJgFAKAAQAcAAAHAUIABAAQAFgJAKgGQAJgFANAAQAUAAAKAKQAJAKABAWIAABLg");
	this.shape_1073.setTransform(846.9,319.075);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAOAAIADAQIABAAQAHgKAIgEQAJgEALAAQAXAAANAQQAMAPAAAdQAAAbgNAQQgMAQgXAAQgLAAgJgEQgJgEgGgJIgBAAIABATIAAAwgAgYg7QgIAKAAAVIAAAEQAAAYAIAKQAIAKAQAAQAQAAAIgMQAJgLgBgVQABgWgJgLQgIgMgQAAQgRAAgHAKg");
	this.shape_1074.setTransform(780.65,321.675);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQANgQAWAAQAWABANARIACAAIgBgJIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgWAAgNgPgAgYgJQgHALAAAWQAAAWAHALQAIAMAQAAQARgBAIgJQAJgKAAgWIAAgDQAAgYgJgKQgIgLgRAAQgQAAgIAMg");
	this.shape_1075.setTransform(735,316.85);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAXABAMARIACAAIgBgJIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgXAAgMgPgAgYgJQgHALgBAWQABAWAHALQAJAMAPAAQARgBAJgJQAHgKABgWIAAgDQAAgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_1076.setTransform(656.95,316.85);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQANgQAWAAQAWABANARIABAAIAAgJIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgWAAgNgPgAgYgJQgHALAAAWQAAAWAHALQAIAMAQAAQARgBAIgJQAJgKAAgWIAAgDQAAgYgJgKQgIgLgRAAQgQAAgIAMg");
	this.shape_1077.setTransform(626.1,316.85);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#FFFFFF").s().p("AAZBSIgog2IgNALIAAArIgRAAIAAijIARAAIAABWIgBASIABAAIAOgRIAkgnIAVAAIguAxIAxBCg");
	this.shape_1078.setTransform(560.275,316.75);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#FFFFFF").s().p("AgQBPQgKgEgGgJIgBAAIgFAPIgMAAIAAijIASAAIAAAoIgBAYIABAAQAMgSAXAAQAXAAANAQQAMAPAAAcQAAAcgNARQgNAPgWAAQgLAAgIgEgAgYgKQgJAKABAXQgBAYAJALQAIALARAAQAQAAAIgNQAHgLAAgWQAAgXgHgKQgIgLgQAAQgSAAgHALg");
	this.shape_1079.setTransform(518.85,316.85);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgGgFgPgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFADADQACAEAFADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_1080.setTransform(483.65,319.175);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#FFFFFF").s().p("AAyBOIgTgyIg9AAIgTAyIgSAAIA9ibIAOAAIA8CbgAAZAMIgSgvIgHgVQgBAJgFAMIgSAvIAxAAg");
	this.shape_1081.setTransform(362.325,317.2);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#FFFFFF").s().p("AAgBJIAAhXQAAgRgGgIQgHgIgOAAQgTAAgIAMQgJALAAAaIAABHIgfAAIAAiOIAYAAIAEATIACAAQAGgLAMgFQAMgGAOABQAzAAAAAzIAABdg");
	this.shape_1082.setTransform(458.225,252.65);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#FFFFFF").s().p("AgiBBQgQgJgIgRQgJgRAAgWQAAgiASgTQASgUAgAAQAeAAASAUQATAUgBAhQABAjgTATQgRAUggAAQgTAAgPgJgAgagkQgJANAAAXQAAAxAkAAQAkAAAAgxQAAgwglAAQgSAAgIAMg");
	this.shape_1083.setTransform(441.75,252.775);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#FFFFFF").s().p("AgOBjIAAiOIAdAAIAACOgAgLhFQgFgEAAgIQAAgIAFgFQADgDAIAAQAIAAAFADQAEAFAAAIQAAAIgEAEQgFAFgIAAQgIAAgDgFg");
	this.shape_1084.setTransform(430.1,250.05);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#FFFFFF").s().p("AgZArIAAhMIgUAAIAAgNIAVgLIAKgeIASAAIAAAfIApAAIAAAXIgpAAIAABLQAAALAGAGQAFAFAJAAQALAAALgEIAAAXIgNAEIgQACQgqgBAAgtg");
	this.shape_1085.setTransform(421.15,251.3);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#FFFFFF").s().p("AgkA3QgSgTABgjQgBgjATgUQARgTAgAAQAXAAASAIIgJAZQgUgIgMAAQgkAAAAAwQAAAYAJANQAJAMARAAQAUAAATgKIAAAaQgJAFgJACQgJACgOAAQgeAAgRgTg");
	this.shape_1086.setTransform(409.8,252.775);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#FFFFFF").s().p("AAgBJIAAhXQAAgRgGgIQgHgIgOAAQgTAAgIAMQgJALAAAaIAABHIgfAAIAAiOIAYAAIAEATIACAAQAGgLAMgFQAMgGAOABQAzAAAAAzIAABdg");
	this.shape_1087.setTransform(394.725,252.65);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#FFFFFF").s().p("AgxA7QgNgMAAgaIAAhdIAfAAIAABXQAAAQAGAJQAHAIAOAAQASAAAJgLQAJgMAAgaIAAhHIAfAAIAACOIgYAAIgEgTIgCAAQgGAKgMAGQgMAGgNAAQgaAAgNgOg");
	this.shape_1088.setTransform(377.875,252.9);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#FFFFFF").s().p("Ag0BeIAAi7IBpAAIAAAaIhKAAIAAA7IBGAAIAAAZIhGAAIAABNg");
	this.shape_1089.setTransform(363.3,250.475);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#FFFFFF").s().p("AASBNIAAgjIhKAAIAAgPIBIhoIATAAIAABnIAWAAIAAAQIgWAAIAAAjgAAIgqIgvBEIA5AAIAAgyIABgiIgBAAg");
	this.shape_1090.setTransform(742.375,703.1);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#FFFFFF").s().p("AgpBMQgNgIAAgQQAAgKAHgIQAHgIAMgCQgEgCgDgFQgDgEAAgFQAAgHADgDQAEgFAHgFQgJgDgFgJQgHgJAAgLQAAgTAMgLQAMgKAUAAQAIAAAIACIAnAAIAAALIgUADIAFAJQACAGAAAIQAAARgMAKQgMAKgTAAIgJgBQgLAGAAAIQAAAFADACQAEACAKAAIAUAAQASAAAKAIQAKAIAAAPQAAATgPALQgQAKgcAAQgXAAgMgJgAgeAkQgGAGgBAKQAAAKAIAEQAJAFAOAAQAVAAALgGQAKgHAAgLQAAgKgFgDQgHgEgQAAIgTAAQgMAAgHAGgAgUhBQgHAHAAANQAAAMAHAHQAHAGAMAAQAYAAABgZQAAgagaAAQgMAAgGAGg");
	this.shape_1091.setTransform(712.6,707.575);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#FFFFFF").s().p("AgIBNIAAg7Ig0heIAUAAIAoBMIAphMIATAAIgzBdIAAA8g");
	this.shape_1092.setTransform(361.55,703.15);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#FFFFFF").s().p("AgYBeQAQgUAHgYQAHgYAAgZQAAgZgGgZQgJgYgPgUIARAAQAPASAIAZQAJAYAAAbQAAAcgJAXQgIAZgPARg");
	this.shape_1093.setTransform(423.4,641.25);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQAMgQAXAAQAXABAMARIACAAIgBgJIAAgIIAAgvIARAAIAACjIgOAAIgDgQIAAAAQgNASgXAAQgXAAgMgPgAgYgJQgIALAAAWQAAAWAIALQAJAMAPAAQARgBAJgJQAHgKABgWIAAgDQAAgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_1094.setTransform(413.4,639.15);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#FFFFFF").s().p("AAHBeQgOgSgIgYQgJgXAAgcQAAgbAJgYQAIgZAOgSIASAAQgPAUgJAYQgGAZAAAZQAAAZAHAYQAHAYAQAUg");
	this.shape_1095.setTransform(358.8,641.25);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQAMgPAXAAQAXgBAMASIACAAIgCgJIAAgIIAAgvIASAAIAACjIgOAAIgDgQIgBAAQgMASgXAAQgXAAgMgQgAgYgJQgHALgBAVQABAXAHALQAJALAPAAQARAAAJgKQAHgJAAgWIAAgEQAAgXgIgKQgIgLgRAAQgPAAgJAMg");
	this.shape_1096.setTransform(1068.6,607.35);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgHgcIgBAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAGAfIABAAIAEgPIAEgQIAWhBIASAAIAVBBQAFATADAMIABAAIABgMIAXhUIASAAIghBzg");
	this.shape_1097.setTransform(768.6,609.675);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQAMgPAXAAQAXgBAMASIACAAIgBgJIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgXAAgMgQgAgYgJQgHALgBAVQABAXAHALQAJALAPAAQARAAAJgKQAHgJABgWIAAgEQAAgXgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_1098.setTransform(735.7,607.35);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#FFFFFF").s().p("AgPAaIAGgaIAFgZIATAAIABACIgIAYIgKAZg");
	this.shape_1099.setTransform(659.05,615.6);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgIgcIAAAAIgHAcIgWBDIgUAAIgfhzIASAAIARBBIAHAfIABAAIADgPIAFgQIAVhBIASAAIAUBBQAHATABAMIABAAIADgMIAVhUIATAAIghBzg");
	this.shape_1100.setTransform(474.7,609.675);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgMAAQgQAAgJAJQgHAKgBATIAABAIgQAAIAAhKQAAgOgFgHQgHgHgMAAQgQAAgIAKQgIAKAAAWIAAA8IgSAAIAAhzIAPAAIADAQIAAAAQAFgIAKgFQAIgFAMAAQAbAAAHAUIABAAQAFgJAKgGQAKgFAMAAQAUAAAJAKQAKAKAAAWIAABLg");
	this.shape_1101.setTransform(931.3,545.975);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgSAXAAQAWAAANAQQANAPAAAcQAAAcgNARQgMAPgXAAQgLAAgJgEgAgZgKQgHAJgBAYQABAYAHALQAJALAQAAQARgBAIgMQAIgLAAgWQAAgWgIgLQgIgLgRAAQgQAAgJALg");
	this.shape_1102.setTransform(771.9,543.75);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#FFFFFF").s().p("AgZAIIAAgPIAzAAIAAAPg");
	this.shape_1103.setTransform(668.425,546.05);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQANgQAWAAQAWABANAQIACAAIgBgIIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgWAAgNgPgAgYgJQgHALgBAWQABAWAHALQAJAMAPAAQARgBAJgJQAHgKABgWIAAgDQAAgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_1104.setTransform(640.4,543.75);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgOAAgIAJQgIAJgBAQIA7AAIAAAAg");
	this.shape_1105.setTransform(599.3,546.075);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgHgcIgBAAIgHAcIgWBDIgUAAIgghzIATAAIARBBIAGAfIABAAIAEgPIAEgQIAWhBIASAAIAVBBQAFATADAMIABAAIABgMIAXhUIASAAIghBzg");
	this.shape_1106.setTransform(513.45,546.075);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQANgQAWAAQAWABANAQIACAAIgBgIIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgWAAgNgPgAgYgJQgHALgBAWQABAWAHALQAJAMAPAAQARgBAJgJQAHgKABgWIAAgDQAAgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_1107.setTransform(437.9,543.75);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgDgDAAgGQAAgGADgCQADgDAEAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgEAAgDgDg");
	this.shape_1108.setTransform(1036.5,512.125);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#FFFFFF").s().p("AgPAaIAGgaIAFgZIATAAIABACIgIAYIgJAZg");
	this.shape_1109.setTransform(997.8,520.2);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#FFFFFF").s().p("AgYBeQAQgTAHgZQAHgYAAgaQAAgYgGgYQgJgZgPgUIARAAQAPATAIAXQAJAZAAAbQAAAbgJAYQgIAZgPARg");
	this.shape_1110.setTransform(992.3,514.05);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQAMgPAXAAQAWgBANASIACAAIgBgJIAAgIIAAgvIARAAIAACjIgOAAIgDgQIAAAAQgNASgXAAQgXAAgMgQgAgYgJQgHALgBAVQABAXAHALQAJAMAPgBQARAAAJgKQAHgJABgWIAAgEQAAgXgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_1111.setTransform(982.3,511.95);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#FFFFFF").s().p("AgQBPQgKgEgGgJIgBAAIgFAPIgMAAIAAijIASAAIAAAoIgBAYIABAAQAMgRAXAAQAXAAANAPQAMAQAAAbQAAAcgNAQQgNAQgWAAQgLAAgIgEgAgYgKQgJAJABAYQgBAZAJAKQAIALARgBQAQAAAIgMQAHgLAAgWQAAgXgHgKQgIgLgQAAQgSAAgHALg");
	this.shape_1112.setTransform(833.4,511.95);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#FFFFFF").s().p("AgpBMQgNgIABgQQAAgKAGgIQAHgIAMgCQgEgCgDgFQgDgEAAgFQAAgHAEgDQADgFAHgFQgJgDgGgJQgFgJAAgLQgBgTAMgLQAMgKAUAAQAJAAAGACIApAAIAAALIgWADIAGAJQACAGAAAIQAAARgMAKQgMAKgTAAIgKgBQgLAGAAAIQAAAFAEACQAFACAJAAIATAAQATAAAKAIQAKAIAAAPQAAATgPALQgPAKgdAAQgXAAgMgJgAgeAkQgHAGAAAKQABAKAHAEQAJAFAOAAQAVAAALgGQALgHAAgLQgBgKgFgDQgGgEgQAAIgVAAQgLAAgHAGgAgVhBQgGAHAAANQAAAMAHAHQAGAGANAAQAZAAgBgZQAAgagZAAQgLAAgIAGg");
	this.shape_1113.setTransform(791.65,516.775);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#FFFFFF").s().p("AAIBeQgPgSgIgYQgJgYAAgbQAAgbAJgZQAIgYAPgSIARAAQgPAUgJAZQgGAYAAAYQAAAaAHAYQAHAYAQAUg");
	this.shape_1114.setTransform(764.95,514.05);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgQAAgHAJQgIAKAAATIAABAIgRAAIAAhKQAAgOgGgHQgGgHgMAAQgRAAgHAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIACAQIACAAQAEgIAJgFQAJgFALAAQAcAAAHAUIABAAQAFgJAKgGQAJgFAOAAQATAAAKAKQAKAKAAAWIAABLg");
	this.shape_1115.setTransform(654.05,514.175);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#FFFFFF").s().p("AAZBSIgog2IgNALIAAArIgRAAIAAijIARAAIAABWIgBASIABAAIAOgRIAkgmIAVAAIguAvIAxBDg");
	this.shape_1116.setTransform(579.275,511.85);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgHgJIgBAAIgDAPIgNAAIAAijIARAAIAAAoIgBAYIABAAQANgRAXAAQAWAAANAPQANAQAAAbQAAAcgNAQQgMAQgXAAQgKAAgKgEgAgZgKQgHAJgBAYQABAZAHAKQAJALAQgBQARAAAIgMQAIgLAAgWQAAgXgIgKQgIgLgRAAQgQAAgJALg");
	this.shape_1117.setTransform(506.4,511.95);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQANgQAWAAQAWABANAQIACAAIgBgIIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgWAAgNgPgAgYgJQgHALgBAWQABAWAHALQAJAMAPAAQARgBAJgJQAHgKABgWIAAgDQAAgYgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_1118.setTransform(597.2,448.35);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgcQAAgcANgQQANgQAWAAQAWABANAQIABAAIAAgIIAAgIIAAgvIARAAIAACjIgPAAIgCgQIAAAAQgNASgXAAQgWAAgNgPgAgYgJQgHALAAAWQAAAWAHALQAIAMAQAAQARgBAIgJQAJgKAAgWIAAgDQAAgYgJgKQgIgLgRAAQgQAAgIAMg");
	this.shape_1119.setTransform(528.45,448.35);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgHgcIgBAAIgHAcIgWBDIgUAAIgfhzIASAAIARBBIAGAfIACAAIADgPIAEgQIAWhBIASAAIAUBBQAHATABAMIABAAIACgMIAXhUIASAAIghBzg");
	this.shape_1120.setTransform(363.9,450.675);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhPAAQABAUAJALQALALAQAAQATAAASgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgIgIQgHgJgNAAQgNAAgJAJQgIAJgCAQIA8AAIAAAAg");
	this.shape_1121.setTransform(1083.7,418.875);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#FFFFFF").s().p("AAhA6IghgvIgfAvIgVAAIArg6Igog5IAUAAIAdAsIAfgsIATAAIgoA5IAqA6g");
	this.shape_1122.setTransform(1028.85,418.875);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#FFFFFF").s().p("AglBDQgNgPAAgdQAAgbANgQQAMgPAXAAQAXgBAMASIACAAIgCgJIAAgIIAAgvIASAAIAACjIgOAAIgDgQIgBAAQgMASgXAAQgXAAgMgQgAgYgJQgIALAAAVQAAAXAIALQAJAMAPgBQARAAAJgKQAHgJAAgWIAAgEQABgXgJgKQgIgLgRAAQgPAAgJAMg");
	this.shape_1123.setTransform(698.6,416.55);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f("#FFFFFF").s().p("AgpBMQgNgIABgQQAAgKAGgIQAHgIAMgCQgEgCgDgFQgDgEAAgFQAAgHAEgDQADgFAHgFQgJgDgGgJQgFgJAAgLQgBgTAMgLQAMgKAUAAQAJAAAGACIApAAIAAALIgWADIAGAJQACAGAAAIQAAARgMAKQgMAKgTAAIgKgBQgLAGABAIQgBAFAEACQAFACAJAAIATAAQATAAAKAIQAKAIAAAPQAAATgPALQgPAKgdAAQgXAAgMgJgAgeAkQgHAGAAAKQABAKAHAEQAJAFAOAAQAVAAALgGQALgHAAgLQgBgKgGgDQgFgEgQAAIgVAAQgLAAgHAGgAgVhBQgGAHAAANQAAAMAHAHQAGAGANAAQAYAAAAgZQAAgagZAAQgMAAgHAGg");
	this.shape_1124.setTransform(562.6,421.375);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#FFFFFF").s().p("AgyBVIAAinIAOAAIADAQIABAAQAGgKAKgEQAIgEALAAQAXAAANAQQAMAPAAAdQAAAbgNAQQgNAQgWAAQgLAAgIgEQgKgEgGgJIgBAAIABATIAAAwgAgYg7QgIAKAAAVIAAAEQgBAYAJAKQAIAKARAAQAPAAAIgMQAJgLgBgVQABgWgJgLQgIgMgPAAQgSAAgHAKg");
	this.shape_1125.setTransform(528.75,421.375);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#FFFFFF").s().p("AAfBSIAAhLQAAgNgHgHQgGgHgOAAQgRAAgIAKQgJAKAAAVIAAA9IgRAAIAAijIARAAIAAAxIgBAQIACAAQAFgJAJgFQAKgEALAAQAVgBALALQAKAKAAAUIAABMg");
	this.shape_1126.setTransform(473.425,416.45);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQANgRAXAAQAWAAAMAOQANAPAAAXIAAAKIhOAAQAAAUAJALQAKALARAAQASAAATgIIAAAPIgSAGQgIACgMAAQgYAAgPgQgAAegKQAAgRgHgIQgIgJgNAAQgNAAgJAJQgIAJgBAQIA7AAIAAAAg");
	this.shape_1127.setTransform(386.9,418.875);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#FFFFFF").s().p("AgnA1IAAgRQAIAFAKACQAJACAJAAQAMAAAIgEQAHgEAAgJQAAgHgGgFQgGgFgPgGQgQgFgIgFQgGgEgEgGQgDgGAAgHQAAgPALgIQAMgIATAAQATAAASAIIgHAOQgRgHgOAAQgMAAgGAEQgGAEAAAGQAAAFACADQACAEAGADIATAIQAUAHAIAHQAHAIAAALQAAAQgMAJQgMAJgUAAQgYAAgMgHg");
	this.shape_1128.setTransform(1046.6,387.075);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#FFFFFF").s().p("AgRAlIAAhEIgQAAIAAgIIAQgHIAHgZIAKAAIAAAbIAhAAIAAANIghAAIAABDQAAALAFAFQAFAGAJAAIAIgBIAHgBIAAANIgIADIgKAAQghAAAAgjg");
	this.shape_1129.setTransform(1026.45,385.825);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#FFFFFF").s().p("AgIBPIAAhyIAQAAIAABygAgHg6QgCgDAAgGQAAgGACgCQADgDAEAAQAEAAADADQAEACgBAGQABAGgEADQgDADgEAAQgEAAgDgDg");
	this.shape_1130.setTransform(938.75,384.925);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#FFFFFF").s().p("ABBA7IAAhKQAAgOgGgHQgGgHgNAAQgQAAgHAJQgIAKAAATIAABAIgRAAIAAhKQAAgOgGgHQgGgHgMAAQgRAAgHAKQgIAKAAAWIAAA8IgRAAIAAhzIAOAAIACAQIACAAQAEgIAJgFQAJgFALAAQAcAAAHAUIABAAQAFgJAKgGQAJgFAOAAQATAAAKAKQAKAKAAAWIAABLg");
	this.shape_1131.setTransform(876.8,386.975);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#FFFFFF").s().p("AglBEQgNgQAAgdQAAgbANgQQAMgPAXgBQAXAAAMARIACAAIgCgIIAAgIIAAgvIASAAIAACjIgOAAIgDgPIgBAAQgMARgXAAQgXAAgMgPgAgXgJQgJALAAAVQAAAXAJALQAIALAPAAQARABAJgKQAHgKAAgWIAAgEQABgXgJgLQgIgKgRAAQgPAAgIAMg");
	this.shape_1132.setTransform(826.4,384.75);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#FFFFFF").s().p("AghAsQgPgPAAgcQAAgbAOgQQAOgRAWAAQAVAAANAOQANAPAAAXIAAAKIhOAAQAAAUAKALQAJALARAAQATAAASgIIAAAPIgRAGQgJACgLAAQgZAAgPgQgAAegKQAAgRgIgIQgGgJgPAAQgNAAgHAJQgJAJgBAQIA7AAIAAAAg");
	this.shape_1133.setTransform(773.05,387.075);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#FFFFFF").s().p("AgQBPQgKgEgHgJIAAAAIgFAPIgMAAIAAijIARAAIAAAoIAAAYIAAAAQANgRAXgBQAWABANAPQANAPAAAcQAAAdgNAQQgMAPgXAAQgLAAgIgEgAgYgLQgJALAAAXQAAAYAJALQAIAKARAAQAQABAIgMQAIgMgBgWQABgWgIgLQgIgLgQAAQgSAAgHAKg");
	this.shape_1134.setTransform(760.7,384.75);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#FFFFFF").s().p("AAdA6IgVhDIgHgcIgBAAIgHAcIgWBDIgUAAIgfhzIASAAIARBBIAGAfIACAAIADgPIAEgQIAWhBIASAAIAUBBQAHATABAMIABAAIACgMIAXhUIASAAIghBzg");
	this.shape_1135.setTransform(625.35,387.075);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#FFFFFF").s().p("AgRBPQgJgEgGgJIgBAAIgFAPIgMAAIAAijIASAAIAAAoIgBAYIABAAQAMgRAXgBQAXABANAPQAMAPAAAcQAAAdgNAQQgMAPgXAAQgLAAgJgEgAgYgLQgIALAAAXQAAAYAIALQAIAKAQAAQARABAIgMQAHgMAAgWQAAgWgHgLQgIgLgRAAQgRAAgHAKg");
	this.shape_1136.setTransform(567.8,384.75);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#FFFFFF").s().p("AgbAsQgOgPAAgcQAAgcAOgQQAOgQAZAAIARACQAIACAFACIgFAPIgNgEIgMgBQgiAAAAArQAAAWAIALQAJAMAQAAQAOAAAPgHIAAAQQgLAGgSAAQgYAAgOgQg");
	this.shape_1137.setTransform(390.875,387.075);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#FFFFFF").s().p("Ag0A7QgSgVAAgmQAAglASgVQATgUAiAAQAgAAAUAVQASAVAAAkQAAAlgSAVQgUAVggAAQgiAAgTgUgAglguQgOAQAAAeQAAAfAOARQANAQAZAAQAZAAANgQQANgRAAgfQAAgegNgQQgNgQgZAAQgZAAgNAQg");
	this.shape_1138.setTransform(363.9,385.125);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#FFFFFF").s().p("AgwA+QgMgLABgVQgBgWARgKQARgLAggBIAYgBIAAgHQAAgOgGgHQgHgHgNAAQgKAAgJAEIgUAHIgKgWQAMgGANgDQAOgDALAAQAcAAAOAMQANAMAAAZIAABfIgVAAIgGgUIgBAAQgLANgKAFQgKAFgQAAQgVAAgMgMgAAMAEQgUABgKAGQgKAGAAAOQAAAJAFAFQAHAGAKAAQAQAAAKgKQAKgJAAgQIAAgNg");
	this.shape_1139.setTransform(663.5,320.675);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#FFFFFF").s().p("AglA3QgQgTgBgjQABgjARgUQASgTAgAAQAXAAARAIIgJAZQgTgIgMAAQgkAAAAAwQAAAYAJANQAKAMAQAAQAVAAASgKIAAAaQgJAFgJACQgJACgNAAQggAAgRgTg");
	this.shape_1140.setTransform(650.05,320.675);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#FFFFFF").s().p("AAgBIIAAhWQAAgQgGgJQgHgIgOAAQgTAAgIALQgJAMAAAZIAABHIgfAAIAAiNIAYAAIAEASIACAAQAGgJAMgGQAMgFAOgBQAzAAAAA1IAABbg");
	this.shape_1141.setTransform(628.125,320.55);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#FFFFFF").s().p("AgPBiIAAiNIAeAAIAACNgAgLhEQgFgFAAgIQAAgIAFgEQADgFAIAAQAIAAAFAFQAEAEAAAIQAAAIgEAFQgFAEgIAAQgIAAgDgEg");
	this.shape_1142.setTransform(600,317.95);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#FFFFFF").s().p("AgaArIAAhMIgTAAIAAgNIAVgLIAKgfIASAAIAAAhIAoAAIAAAWIgoAAIAABMQAAALAFAFQAGAFAJAAQALAAALgDIAAAWIgNAEIgRABQgqABAAgug");
	this.shape_1143.setTransform(591.1,319.2);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#FFFFFF").s().p("AglA3QgQgTAAgjQgBgjATgUQARgTAgAAQAWAAATAIIgJAZQgUgIgMAAQgkAAAAAwQAAAYAJANQAJAMARAAQAUAAASgKIAAAaQgIAFgJACQgJACgNAAQgfAAgSgTg");
	this.shape_1144.setTransform(579.7,320.675);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#FFFFFF").s().p("AAgBIIAAhWQAAgQgGgJQgHgIgOAAQgTAAgIALQgJAMAAAZIAABHIgfAAIAAiNIAYAAIAEASIACAAQAGgJAMgGQAMgFAOgBQAzAAAAA1IAABbg");
	this.shape_1145.setTransform(564.625,320.55);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#FFFFFF").s().p("AgxA8QgNgNAAgbIAAhbIAfAAIAABXQAAAPAGAJQAHAIAOAAQASAAAJgMQAJgLAAgZIAAhHIAfAAIAACNIgYAAIgEgSIgCAAQgGAJgMAGQgMAFgNAAQgaABgNgNg");
	this.shape_1146.setTransform(547.825,320.8);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#FFFFFF").s().p("Ag0BeIAAi7IBpAAIAAAaIhLAAIAAA7IBHAAIAAAZIhHAAIAABNg");
	this.shape_1147.setTransform(533.25,318.375);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#FFFFFF").s().p("AgbBlIAAh3IgXAAIAAgOIAXgJIAAgJQAAgZAMgMQALgNAYAAQAQAAAPAGIgIAWQgLgDgKgBQgKABgFAGQgFAHABAMIAAAKIAiAAIAAAWIgiAAIAAB3g");
	this.shape_1148.setTransform(462.5,317.7);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#FFFFFF").s().p("AgOBkIAAjHIAdAAIAADHg");
	this.shape_1149.setTransform(446.425,317.775);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#FFFFFF").s().p("AgrBIIAAiNIAYAAIAEAZIACAAQAHgMAKgIQAMgHANgBIAPABIgDAdQgHgBgHgBQgSAAgKAMQgLAMAAATIAABJg");
	this.shape_1150.setTransform(421.875,320.55);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#FFFFFF").s().p("AgaArIAAhMIgTAAIAAgNIAVgLIAKgfIASAAIAAAhIAoAAIAAAWIgoAAIAABMQAAALAFAFQAGAFAJAAQALAAALgDIAAAWIgNAEIgRABQgpABgBgug");
	this.shape_1151.setTransform(410.1,319.2);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#FFFFFF").s().p("AAgBIIAAhWQAAgQgGgJQgHgIgOAAQgTAAgIALQgJAMAAAZIAABHIgfAAIAAiNIAYAAIAEASIACAAQAGgJAMgGQAMgFAOgBQAzAAAAA1IAABbg");
	this.shape_1152.setTransform(396.725,320.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528,p:{x:441.275,y:279.475}},{t:this.shape_527,p:{x:452.525,y:282.375}},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523,p:{x:391.125,y:348.775}},{t:this.shape_522,p:{x:402.675,y:348.675}},{t:this.shape_521,p:{x:409.05,y:346.625}},{t:this.shape_520,p:{x:417.375,y:348.775}},{t:this.shape_519},{t:this.shape_518,p:{x:439.675,y:346.35}},{t:this.shape_517,p:{x:448.5,y:348.775}},{t:this.shape_516,p:{x:462.8,y:346.625}},{t:this.shape_515},{t:this.shape_514,p:{x:487.925,y:348.875}},{t:this.shape_513,p:{x:499.75,y:348.775}},{t:this.shape_512,p:{x:510.9,y:348.775}},{t:this.shape_511},{t:this.shape_510,p:{x:544.05,y:348.775}},{t:this.shape_509,p:{x:559.125,y:346.35}},{t:this.shape_508,p:{x:571.75,y:348.775}},{t:this.shape_507,p:{x:584.375,y:348.675}},{t:this.shape_506,p:{x:599.25,y:346.625}},{t:this.shape_505,p:{x:605.7,y:347.525}},{t:this.shape_504,p:{x:611.925,y:341.925}},{t:this.shape_503},{t:this.shape_502,p:{x:635.525,y:348.775}},{t:this.shape_501,p:{x:646.925,y:348.775}},{t:this.shape_500,p:{x:660.075,y:348.675}},{t:this.shape_499,p:{x:670.35,y:347.525}},{t:this.shape_498,p:{x:680.35,y:348.775}},{t:this.shape_497,p:{x:692.975,y:348.675}},{t:this.shape_496,p:{x:703.25,y:347.525}},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482,p:{x:885.725,y:353.425}},{t:this.shape_481},{t:this.shape_480,p:{x:918.325,y:348.775}},{t:this.shape_479,p:{x:931.375,y:348.875}},{t:this.shape_478,p:{x:952,y:348.775}},{t:this.shape_477,p:{x:966.925,y:348.775}},{t:this.shape_476,p:{x:979.975,y:348.875}},{t:this.shape_475,p:{x:989.325,y:346.35}},{t:this.shape_474},{t:this.shape_473,p:{x:1017.425,y:348.875}},{t:this.shape_472,p:{x:1029.25,y:348.775}},{t:this.shape_471,p:{x:1040.4,y:348.775}},{t:this.shape_470,p:{x:1057.575,y:348.775}},{t:this.shape_469,p:{x:361.125,y:380.525}},{t:this.shape_468,p:{x:371.75,y:380.525}},{t:this.shape_467},{t:this.shape_466,p:{x:395.325,y:380.525}},{t:this.shape_465,p:{x:405.075,y:379.325}},{t:this.shape_464,p:{x:414.825,y:380.525}},{t:this.shape_463},{t:this.shape_462,p:{x:438.175,y:379.325}},{t:this.shape_461},{t:this.shape_460,p:{x:456.675,y:378.075}},{t:this.shape_459,p:{x:470.875,y:380.575}},{t:this.shape_458,p:{x:483.925,y:380.475}},{t:this.shape_457,p:{x:498.8,y:378.425}},{t:this.shape_456,p:{x:505.25,y:379.325}},{t:this.shape_455,p:{x:515.2,y:380.575}},{t:this.shape_454,p:{x:531.3,y:380.475}},{t:this.shape_453,p:{x:553.475,y:380.475}},{t:this.shape_452,p:{x:566.1,y:380.575}},{t:this.shape_451,p:{x:578.15,y:380.575}},{t:this.shape_450},{t:this.shape_449,p:{x:603.4,y:380.575}},{t:this.shape_448},{t:this.shape_447,p:{x:631.9,y:379.325}},{t:this.shape_446,p:{x:642.325,y:380.575}},{t:this.shape_445,p:{x:659.575,y:380.475}},{t:this.shape_444,p:{x:669.25,y:380.575}},{t:this.shape_443,p:{x:685.3,y:380.475}},{t:this.shape_442,p:{x:700.875,y:380.575}},{t:this.shape_441,p:{x:710,y:378.425}},{t:this.shape_440,p:{x:719.375,y:380.475}},{t:this.shape_439,p:{x:733.875,y:373.725}},{t:this.shape_438,p:{x:740.475,y:378.075}},{t:this.shape_437,p:{x:746.25,y:378.425}},{t:this.shape_436,p:{x:754.6,y:380.575}},{t:this.shape_435,p:{x:766.3,y:380.575}},{t:this.shape_434},{t:this.shape_433,p:{x:787.875,y:373.725}},{t:this.shape_432,p:{x:793.075,y:385.225}},{t:this.shape_431},{t:this.shape_430,p:{x:380.1,y:444.175}},{t:this.shape_429,p:{x:391.125,y:444.175}},{t:this.shape_428,p:{x:402.675,y:444.075}},{t:this.shape_427,p:{x:409.05,y:442.025}},{t:this.shape_426,p:{x:417.375,y:444.175}},{t:this.shape_425},{t:this.shape_424,p:{x:439.675,y:441.75}},{t:this.shape_423,p:{x:448.5,y:444.175}},{t:this.shape_422,p:{x:462.8,y:442.025}},{t:this.shape_421},{t:this.shape_420,p:{x:486.975,y:444.175}},{t:this.shape_419,p:{x:504.275,y:444.175}},{t:this.shape_418,p:{x:515.725,y:444.175}},{t:this.shape_417,p:{x:528.875,y:444.075}},{t:this.shape_416,p:{x:539.15,y:442.925}},{t:this.shape_415,p:{x:548.625,y:444.175}},{t:this.shape_414,p:{x:557.75,y:442.025}},{t:this.shape_413,p:{x:567.175,y:444.075}},{t:this.shape_412,p:{x:579.8,y:444.175}},{t:this.shape_411,p:{x:590.925,y:444.075}},{t:this.shape_410},{t:this.shape_409,p:{x:623.575,y:441.75}},{t:this.shape_408},{t:this.shape_407,p:{x:640.925,y:444.175}},{t:this.shape_406,p:{x:652.475,y:441.75}},{t:this.shape_405,p:{x:669.975,y:444.175}},{t:this.shape_404,p:{x:680.475,y:444.175}},{t:this.shape_403,p:{x:693.525,y:444.075}},{t:this.shape_402,p:{x:710.8,y:444.175}},{t:this.shape_401,p:{x:719.65,y:442.925}},{t:this.shape_400,p:{x:730.025,y:444.175}},{t:this.shape_399,p:{x:741.675,y:444.075}},{t:this.shape_398,p:{x:751.4,y:444.175}},{t:this.shape_397,p:{x:768.525,y:444.175}},{t:this.shape_396,p:{x:785.9,y:444.175}},{t:this.shape_395,p:{x:796.925,y:444.175}},{t:this.shape_394,p:{x:806.025,y:441.75}},{t:this.shape_393,p:{x:815.325,y:444.275}},{t:this.shape_392,p:{x:828.05,y:444.175}},{t:this.shape_391,p:{x:836.875,y:448.825}},{t:this.shape_390},{t:this.shape_389,p:{x:875.3,y:444.175}},{t:this.shape_388,p:{x:887.3,y:446.675}},{t:this.shape_387,p:{x:899.65,y:444.175}},{t:this.shape_386,p:{x:910.975,y:444.175}},{t:this.shape_385},{t:this.shape_384,p:{x:925.575,y:441.675}},{t:this.shape_383,p:{x:931.35,y:442.025}},{t:this.shape_382,p:{x:939.425,y:444.175}},{t:this.shape_381},{t:this.shape_380,p:{x:968.725,y:444.175}},{t:this.shape_379,p:{x:978.85,y:442.925}},{t:this.shape_378,p:{x:988.325,y:444.175}},{t:this.shape_377,p:{x:1004.05,y:442.925}},{t:this.shape_376,p:{x:1013.325,y:446.775}},{t:this.shape_375,p:{x:1025.7,y:446.675}},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372,p:{x:1062.05,y:444.175}},{t:this.shape_371,p:{x:1070.875,y:448.825}},{t:this.shape_370},{t:this.shape_369,p:{x:1088.425,y:448.825}},{t:this.shape_368,p:{x:361.125,y:475.975}},{t:this.shape_367,p:{x:379.775,y:475.875}},{t:this.shape_366,p:{x:392.875,y:476.075}},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363,p:{x:438.85,y:475.975}},{t:this.shape_362,p:{x:449.975,y:475.875}},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359,p:{x:488.825,y:475.975}},{t:this.shape_358,p:{x:501.875,y:476.075}},{t:this.shape_357,p:{x:511.225,y:473.55}},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354,p:{x:552.05,y:475.975}},{t:this.shape_353,p:{x:569.225,y:475.975}},{t:this.shape_352,p:{x:580.8,y:475.975}},{t:this.shape_351,p:{x:591.05,y:475.975}},{t:this.shape_350,p:{x:598.85,y:473.825}},{t:this.shape_349,p:{x:607.45,y:478.475}},{t:this.shape_348,p:{x:620.075,y:475.875}},{t:this.shape_347,p:{x:632.7,y:475.975}},{t:this.shape_346},{t:this.shape_345,p:{x:661.2,y:474.725}},{t:this.shape_344,p:{x:671.575,y:475.975}},{t:this.shape_343,p:{x:686.4,y:473.825}},{t:this.shape_342,p:{x:692.85,y:474.725}},{t:this.shape_341,p:{x:710.7,y:475.975}},{t:this.shape_340,p:{x:725.775,y:473.55}},{t:this.shape_339,p:{x:735.05,y:473.825}},{t:this.shape_338,p:{x:743.175,y:475.975}},{t:this.shape_337,p:{x:754.725,y:473.55}},{t:this.shape_336,p:{x:773.475,y:473.55}},{t:this.shape_335,p:{x:785.625,y:475.975}},{t:this.shape_334,p:{x:797.2,y:475.975}},{t:this.shape_333},{t:this.shape_332,p:{x:822.175,y:473.55}},{t:this.shape_331,p:{x:834.8,y:475.975}},{t:this.shape_330},{t:this.shape_329,p:{x:866.025,y:475.975}},{t:this.shape_328,p:{x:876.3,y:474.725}},{t:this.shape_327,p:{x:886.25,y:475.975}},{t:this.shape_326,p:{x:898.875,y:475.875}},{t:this.shape_325},{t:this.shape_324,p:{x:915.8,y:473.825}},{t:this.shape_323,p:{x:924.125,y:475.975}},{t:this.shape_322,p:{x:933.225,y:473.55}},{t:this.shape_321,p:{x:945.3,y:474.725}},{t:this.shape_320,p:{x:955.675,y:475.975}},{t:this.shape_319,p:{x:973.375,y:475.975}},{t:this.shape_318,p:{x:982.475,y:473.55}},{t:this.shape_317,p:{x:988.95,y:474.725}},{t:this.shape_316,p:{x:998.95,y:475.975}},{t:this.shape_315,p:{x:1010.075,y:475.875}},{t:this.shape_314},{t:this.shape_313,p:{x:1039.025,y:476.075}},{t:this.shape_312,p:{x:1050.825,y:475.875}},{t:this.shape_311},{t:this.shape_310,p:{x:1066.525,y:475.875}},{t:this.shape_309},{t:this.shape_308,p:{x:359.25,y:506.525}},{t:this.shape_307,p:{x:369.825,y:505.35}},{t:this.shape_306,p:{x:382.45,y:507.775}},{t:this.shape_305,p:{x:399.175,y:507.675}},{t:this.shape_304,p:{x:409.325,y:507.875}},{t:this.shape_303,p:{x:422.625,y:507.675}},{t:this.shape_302,p:{x:435.825,y:507.675}},{t:this.shape_301,p:{x:445.1,y:505.625}},{t:this.shape_300,p:{x:454.475,y:507.675}},{t:this.shape_299},{t:this.shape_298,p:{x:484.925,y:507.775}},{t:this.shape_297,p:{x:495.675,y:505.275}},{t:this.shape_296,p:{x:509.875,y:507.775}},{t:this.shape_295},{t:this.shape_294,p:{x:540.225,y:507.675}},{t:this.shape_293,p:{x:550.325,y:507.775}},{t:this.shape_292},{t:this.shape_291,p:{x:573.825,y:507.675}},{t:this.shape_290,p:{x:583.025,y:507.775}},{t:this.shape_289},{t:this.shape_288,p:{x:612.325,y:512.425}},{t:this.shape_287},{t:this.shape_286,p:{x:373.875,y:571.375}},{t:this.shape_285,p:{x:388.7,y:569.225}},{t:this.shape_284,p:{x:398.075,y:571.275}},{t:this.shape_283,p:{x:416.725,y:571.375}},{t:this.shape_282,p:{x:429.775,y:571.475}},{t:this.shape_281,p:{x:441.575,y:571.275}},{t:this.shape_280,p:{x:456.85,y:571.375}},{t:this.shape_279,p:{x:468.45,y:571.375}},{t:this.shape_278,p:{x:479.725,y:571.375}},{t:this.shape_277,p:{x:496.2,y:571.275}},{t:this.shape_276,p:{x:513.05,y:573.875}},{t:this.shape_275,p:{x:522.025,y:568.95}},{t:this.shape_274,p:{x:530.9,y:571.375}},{t:this.shape_273},{t:this.shape_272,p:{x:554.225,y:571.375}},{t:this.shape_271,p:{x:567.375,y:571.275}},{t:this.shape_270,p:{x:580,y:571.375}},{t:this.shape_269,p:{x:598.075,y:571.375}},{t:this.shape_268,p:{x:608.875,y:568.875}},{t:this.shape_267,p:{x:621.15,y:570.125}},{t:this.shape_266,p:{x:631.725,y:568.95}},{t:this.shape_265,p:{x:644.35,y:571.375}},{t:this.shape_264,p:{x:661.3,y:571.375}},{t:this.shape_263,p:{x:672.325,y:571.375}},{t:this.shape_262,p:{x:683.875,y:571.275}},{t:this.shape_261,p:{x:690.2,y:569.225}},{t:this.shape_260,p:{x:698.525,y:571.375}},{t:this.shape_259},{t:this.shape_258,p:{x:720.825,y:568.95}},{t:this.shape_257,p:{x:729.65,y:571.375}},{t:this.shape_256,p:{x:740.8,y:571.375}},{t:this.shape_255,p:{x:754.2,y:569.225}},{t:this.shape_254,p:{x:762.1,y:571.375}},{t:this.shape_253,p:{x:778.125,y:571.375}},{t:this.shape_252,p:{x:788.625,y:571.375}},{t:this.shape_251,p:{x:797.725,y:568.95}},{t:this.shape_250,p:{x:803.225,y:568.95}},{t:this.shape_249,p:{x:812.05,y:571.375}},{t:this.shape_248},{t:this.shape_247,p:{x:839.175,y:564.525}},{t:this.shape_246,p:{x:846.9,y:571.375}},{t:this.shape_245,p:{x:857.925,y:571.375}},{t:this.shape_244,p:{x:869.475,y:571.275}},{t:this.shape_243,p:{x:875.85,y:569.225}},{t:this.shape_242,p:{x:884.175,y:571.375}},{t:this.shape_241},{t:this.shape_240,p:{x:906.475,y:568.95}},{t:this.shape_239,p:{x:915.3,y:571.375}},{t:this.shape_238,p:{x:926.075,y:579.775}},{t:this.shape_237,p:{x:935.675,y:569.45}},{t:this.shape_236,p:{x:945.575,y:564.525}},{t:this.shape_235,p:{x:959.175,y:571.375}},{t:this.shape_234,p:{x:972.225,y:571.275}},{t:this.shape_233},{t:this.shape_232,p:{x:1001.25,y:570.125}},{t:this.shape_231,p:{x:1011.825,y:568.95}},{t:this.shape_230,p:{x:1024.45,y:571.375}},{t:this.shape_229,p:{x:362.175,y:603.075}},{t:this.shape_228,p:{x:375.275,y:603.275}},{t:this.shape_227,p:{x:392,y:603.075}},{t:this.shape_226},{t:this.shape_225,p:{x:421.25,y:603.175}},{t:this.shape_224,p:{x:432.375,y:603.075}},{t:this.shape_223,p:{x:443.925,y:596.325}},{t:this.shape_222,p:{x:452.425,y:601.125}},{t:this.shape_221},{t:this.shape_220,p:{x:473.275,y:596.325}},{t:this.shape_219,p:{x:487.875,y:600.75}},{t:this.shape_218,p:{x:500.025,y:603.175}},{t:this.shape_217,p:{x:511.6,y:603.175}},{t:this.shape_216},{t:this.shape_215,p:{x:541.55,y:603.175}},{t:this.shape_214,p:{x:553.6,y:603.175}},{t:this.shape_213,p:{x:566.275,y:603.075}},{t:this.shape_212,p:{x:583.975,y:603.175}},{t:this.shape_211,p:{x:595.55,y:603.175}},{t:this.shape_210,p:{x:605.8,y:603.175}},{t:this.shape_209,p:{x:613.65,y:601.025}},{t:this.shape_208},{t:this.shape_207,p:{x:634.825,y:603.075}},{t:this.shape_206,p:{x:647.45,y:603.175}},{t:this.shape_205},{t:this.shape_204,p:{x:675.95,y:601.925}},{t:this.shape_203,p:{x:686.325,y:603.175}},{t:this.shape_202,p:{x:701.15,y:601.025}},{t:this.shape_201,p:{x:707.65,y:601.925}},{t:this.shape_200},{t:this.shape_199,p:{x:727.975,y:603.175}},{t:this.shape_198,p:{x:741.025,y:603.075}},{t:this.shape_197},{t:this.shape_196,p:{x:769.1,y:601.025}},{t:this.shape_195,p:{x:775.55,y:601.925}},{t:this.shape_194,p:{x:791.675,y:600.75}},{t:this.shape_193,p:{x:803.825,y:603.175}},{t:this.shape_192,p:{x:815.4,y:603.175}},{t:this.shape_191},{t:this.shape_190,p:{x:845.35,y:603.175}},{t:this.shape_189,p:{x:857.4,y:603.175}},{t:this.shape_188,p:{x:870.025,y:603.075}},{t:this.shape_187},{t:this.shape_186,p:{x:901.45,y:603.175}},{t:this.shape_185,p:{x:912.775,y:603.175}},{t:this.shape_184,p:{x:920.375,y:600.75}},{t:this.shape_183,p:{x:928.725,y:603.175}},{t:this.shape_182,p:{x:940.275,y:603.075}},{t:this.shape_181,p:{x:950,y:603.175}},{t:this.shape_180},{t:this.shape_179,p:{x:981.275,y:603.275}},{t:this.shape_178,p:{x:993.1,y:603.175}},{t:this.shape_177,p:{x:1000.95,y:601.025}},{t:this.shape_176,p:{x:1010.325,y:603.075}},{t:this.shape_175,p:{x:1022.7,y:605.675}},{t:this.shape_174,p:{x:1036.625,y:596.325}},{t:this.shape_173,p:{x:1044.4,y:603.175}},{t:this.shape_172,p:{x:1055.425,y:603.175}},{t:this.shape_171,p:{x:1066.975,y:603.075}},{t:this.shape_170,p:{x:1072.925,y:596.325}},{t:this.shape_169,p:{x:1078.175,y:607.825}}]},1).to({state:[{t:this.shape_620,p:{y:352.275}},{t:this.shape_619,p:{y:354.575}},{t:this.shape_618},{t:this.shape_617},{t:this.shape_527,p:{x:446.325,y:354.575}},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613,p:{y:419.025}},{t:this.shape_612,p:{x:375.675,y:420.975}},{t:this.shape_277,p:{x:392.25,y:420.875}},{t:this.shape_611,p:{x:412.3,y:420.875}},{t:this.shape_455,p:{x:428.35,y:420.975}},{t:this.shape_403,p:{x:440.975,y:420.875}},{t:this.shape_610,p:{x:451.25,y:419.725}},{t:this.shape_609,p:{x:460.3,y:420.975}},{t:this.shape_368,p:{x:476.575,y:420.975}},{t:this.shape_399,p:{x:488.125,y:420.875}},{t:this.shape_280,p:{x:497.8,y:420.975}},{t:this.shape_608,p:{x:514.75,y:420.975}},{t:this.shape_607,p:{x:526.25,y:420.975}},{t:this.shape_362,p:{x:537.375,y:420.875}},{t:this.shape_606},{t:this.shape_393,p:{x:563.975,y:421.075}},{t:this.shape_402,p:{x:575.8,y:420.975}},{t:this.shape_605,p:{x:587,y:420.975}},{t:this.shape_604,p:{x:597.225,y:418.475}},{t:this.shape_366,p:{x:606.775,y:421.075}},{t:this.shape_251,p:{x:616.125,y:418.55}},{t:this.shape_427,p:{x:627.2,y:418.825}},{t:this.shape_367,p:{x:636.575,y:420.875}},{t:this.shape_603,p:{x:654.075,y:420.975}},{t:this.shape_602,p:{x:665.475,y:420.975}},{t:this.shape_601},{t:this.shape_209,p:{x:687.9,y:418.825}},{t:this.shape_348,p:{x:697.275,y:420.875}},{t:this.shape_600,p:{x:709.65,y:423.475}},{t:this.shape_353,p:{x:726.825,y:420.975}},{t:this.shape_178,p:{x:738.4,y:420.975}},{t:this.shape_204,p:{x:752.8,y:419.725}},{t:this.shape_599},{t:this.shape_412,p:{x:776,y:420.975}},{t:this.shape_598},{t:this.shape_502,p:{x:803.775,y:420.975}},{t:this.shape_335,p:{x:814.275,y:420.975}},{t:this.shape_326,p:{x:827.325,y:420.875}},{t:this.shape_597},{t:this.shape_186,p:{x:858.7,y:420.975}},{t:this.shape_358,p:{x:876.825,y:421.075}},{t:this.shape_596,p:{x:888.65,y:420.975}},{t:this.shape_595},{t:this.shape_594,p:{x:912.1,y:418.65}},{t:this.shape_593,p:{x:928.825,y:418.475}},{t:this.shape_501,p:{x:938.325,y:420.975}},{t:this.shape_315,p:{x:950.025,y:420.875}},{t:this.shape_592,p:{x:964.4,y:420.975}},{t:this.shape_591,p:{x:975.55,y:420.975}},{t:this.shape_173,p:{x:986.9,y:420.975}},{t:this.shape_423,p:{x:998.4,y:420.975}},{t:this.shape_312,p:{x:1009.525,y:420.875}},{t:this.shape_323,p:{x:1018.725,y:420.975}},{t:this.shape_250,p:{x:1027.825,y:418.55}},{t:this.shape_305,p:{x:360.675,y:452.675}},{t:this.shape_590},{t:this.shape_319,p:{x:381.975,y:452.775}},{t:this.shape_589,p:{x:393.55,y:452.775}},{t:this.shape_480,p:{x:405.125,y:452.775}},{t:this.shape_310,p:{x:418.275,y:452.675}},{t:this.shape_334,p:{x:430,y:452.775}},{t:this.shape_588},{t:this.shape_587},{t:this.shape_369,p:{x:370.675,y:521.025}},{t:this.shape_586},{t:this.shape_585,p:{x:397.725,y:513.95}},{t:this.shape_449,p:{x:410.35,y:516.375}},{t:this.shape_584},{t:this.shape_419,p:{x:438.125,y:516.375}},{t:this.shape_296,p:{x:448.625,y:516.375}},{t:this.shape_303,p:{x:461.675,y:516.275}},{t:this.shape_350,p:{x:476.55,y:514.225}},{t:this.shape_302,p:{x:485.925,y:516.275}},{t:this.shape_583},{t:this.shape_285,p:{x:508.4,y:514.225}},{t:this.shape_407,p:{x:516.475,y:516.375}},{t:this.shape_290,p:{x:526.975,y:516.375}},{t:this.shape_201,p:{x:537.1,y:515.125}},{t:this.shape_274,p:{x:547.1,y:516.375}},{t:this.shape_510,p:{x:567,y:516.375}},{t:this.shape_582,p:{x:582.075,y:513.95}},{t:this.shape_278,p:{x:594.225,y:516.375}},{t:this.shape_379,p:{x:604.35,y:515.125}},{t:this.shape_581},{t:this.shape_580,p:{x:628.125,y:513.95}},{t:this.shape_435,p:{x:640.75,y:516.375}},{t:this.shape_579,p:{x:659.25,y:518.875}},{t:this.shape_261,p:{x:668.25,y:514.225}},{t:this.shape_578,p:{x:677.05,y:516.375}},{t:this.shape_405,p:{x:688.375,y:516.375}},{t:this.shape_225,p:{x:699.35,y:516.375}},{t:this.shape_477,p:{x:717.425,y:516.375}},{t:this.shape_460,p:{x:728.175,y:513.875}},{t:this.shape_386,p:{x:742.125,y:516.375}},{t:this.shape_446,p:{x:753.525,y:516.375}},{t:this.shape_577},{t:this.shape_316,p:{x:779.35,y:516.375}},{t:this.shape_576},{t:this.shape_418,p:{x:810.625,y:516.375}},{t:this.shape_575,p:{x:823.2,y:516.375}},{t:this.shape_574,p:{x:834.35,y:516.375}},{t:this.shape_222,p:{x:361.625,y:546.125}},{t:this.shape_288,p:{x:370.675,y:552.825}},{t:this.shape_573},{t:this.shape_572,p:{x:397.725,y:545.75}},{t:this.shape_306,p:{x:410.35,y:548.175}},{t:this.shape_571,p:{x:421.725,y:550.775}},{t:this.shape_382,p:{x:438.125,y:548.175}},{t:this.shape_263,p:{x:448.625,y:548.175}},{t:this.shape_300,p:{x:461.675,y:548.075}},{t:this.shape_570,p:{x:480.75,y:550.675}},{t:this.shape_294,p:{x:492.175,y:548.075}},{t:this.shape_400,p:{x:502.275,y:548.175}},{t:this.shape_264,p:{x:514.15,y:548.175}},{t:this.shape_506,p:{x:522.3,y:546.025}},{t:this.shape_569},{t:this.shape_249,p:{x:544.3,y:548.175}},{t:this.shape_243,p:{x:558.6,y:546.025}},{t:this.shape_284,p:{x:567.975,y:548.075}},{t:this.shape_438,p:{x:578.775,y:545.675}},{t:this.shape_359,p:{x:588.325,y:548.175}},{t:this.shape_291,p:{x:599.975,y:548.075}},{t:this.shape_568},{t:this.shape_260,p:{x:629.225,y:548.175}},{t:this.shape_496,p:{x:639.35,y:546.925}},{t:this.shape_414,p:{x:645.95,y:546.025}},{t:this.shape_344,p:{x:655.225,y:548.175}},{t:this.shape_271,p:{x:668.375,y:548.075}},{t:this.shape_252,p:{x:686.125,y:548.175}},{t:this.shape_567},{t:this.shape_329,p:{x:712.225,y:548.175}},{t:this.shape_313,p:{x:725.275,y:548.275}},{t:this.shape_456,p:{x:735.65,y:546.925}},{t:this.shape_566},{t:this.shape_304,p:{x:764.875,y:548.275}},{t:this.shape_565},{t:this.shape_384,p:{x:793.175,y:545.675}},{t:this.shape_177,p:{x:798.9,y:546.025}},{t:this.shape_436,p:{x:807.25,y:548.175}},{t:this.shape_564,p:{x:819,y:548.175}},{t:this.shape_563,p:{x:830.15,y:548.175}},{t:this.shape_562},{t:this.shape_169,p:{x:370.675,y:584.625}},{t:this.shape_561,p:{x:385.075,y:578.05}},{t:this.shape_560,p:{x:397.725,y:577.55}},{t:this.shape_265,p:{x:410.35,y:579.975}},{t:this.shape_376,p:{x:421.725,y:582.575}},{t:this.shape_245,p:{x:438.375,y:579.975}},{t:this.shape_281,p:{x:449.925,y:579.875}},{t:this.shape_559,p:{x:459.6,y:579.975}},{t:this.shape_282,p:{x:477.725,y:580.075}},{t:this.shape_558,p:{x:489.55,y:579.975}},{t:this.shape_557,p:{x:500.7,y:579.975}},{t:this.shape_297,p:{x:510.925,y:577.475}},{t:this.shape_228,p:{x:520.475,y:580.075}},{t:this.shape_240,p:{x:529.825,y:577.55}},{t:this.shape_556},{t:this.shape_555,p:{x:561.625,y:577.55}},{t:this.shape_372,p:{x:574.25,y:579.975}},{t:this.shape_234,p:{x:586.875,y:579.875}},{t:this.shape_554},{t:this.shape_320,p:{x:622.325,y:579.975}},{t:this.shape_262,p:{x:633.975,y:579.875}},{t:this.shape_553,p:{x:644.075,y:577.55}},{t:this.shape_255,p:{x:651.6,y:577.825}},{t:this.shape_229,p:{x:660.975,y:579.875}},{t:this.shape_552},{t:this.shape_301,p:{x:687.65,y:577.825}},{t:this.shape_213,p:{x:697.075,y:579.875}},{t:this.shape_242,p:{x:714.775,y:579.975}},{t:this.shape_551},{t:this.shape_327,p:{x:740.45,y:579.975}},{t:this.shape_235,p:{x:752.025,y:579.975}},{t:this.shape_550},{t:this.shape_218,p:{x:789.675,y:579.975}},{t:this.shape_207,p:{x:802.725,y:579.875}},{t:this.shape_549},{t:this.shape_298,p:{x:834.525,y:579.975}},{t:this.shape_548,p:{x:844.8,y:578.725}},{t:this.shape_547,p:{x:855.325,y:577.55}},{t:this.shape_206,p:{x:867.95,y:579.975}},{t:this.shape_244,p:{x:879.075,y:579.875}},{t:this.shape_377,p:{x:892,y:578.725}},{t:this.shape_257,p:{x:902,y:579.975}},{t:this.shape_212,p:{x:913.575,y:579.975}},{t:this.shape_546,p:{x:930.05,y:579.875}},{t:this.shape_454,p:{x:955.65,y:579.875}},{t:this.shape_512,p:{x:971.7,y:579.975}},{t:this.shape_545,p:{x:987.75,y:579.875}},{t:this.shape_544},{t:this.shape_543,p:{x:1017,y:579.975}},{t:this.shape_224,p:{x:1028.125,y:579.875}},{t:this.shape_472,p:{x:1036.9,y:579.975}},{t:this.shape_198,p:{x:384.525,y:611.675}},{t:this.shape_230,p:{x:397.15,y:611.775}},{t:this.shape_189,p:{x:409.2,y:611.775}},{t:this.shape_542},{t:this.shape_317,p:{x:437.7,y:610.525}},{t:this.shape_293,p:{x:448.075,y:611.775}},{t:this.shape_541,p:{x:466.625,y:609.35}},{t:this.shape_188,p:{x:478.125,y:611.675}},{t:this.shape_286,p:{x:491.175,y:611.775}},{t:this.shape_540,p:{x:506.05,y:611.775}},{t:this.shape_341,p:{x:528.45,y:611.775}},{t:this.shape_539,p:{x:543.525,y:609.35}},{t:this.shape_199,p:{x:555.675,y:611.775}},{t:this.shape_328,p:{x:565.8,y:610.525}},{t:this.shape_193,p:{x:580.875,y:611.775}},{t:this.shape_538,p:{x:599.75,y:614.275}},{t:this.shape_183,p:{x:611.625,y:611.775}},{t:this.shape_182,p:{x:623.175,y:611.675}},{t:this.shape_232,p:{x:630.55,y:610.525}},{t:this.shape_383,p:{x:637.15,y:609.625}},{t:this.shape_338,p:{x:645.225,y:611.775}},{t:this.shape_179,p:{x:656.675,y:611.875}},{t:this.shape_184,p:{x:666.025,y:609.35}},{t:this.shape_172,p:{x:674.425,y:611.775}},{t:this.shape_171,p:{x:685.975,y:611.675}},{t:this.shape_256,p:{x:700.3,y:611.775}},{t:this.shape_181,p:{x:711.5,y:611.775}},{t:this.shape_253,p:{x:722.825,y:611.775}},{t:this.shape_537,p:{x:731.45,y:610.525}},{t:this.shape_202,p:{x:738.05,y:609.625}},{t:this.shape_283,p:{x:747.325,y:611.775}},{t:this.shape_176,p:{x:760.475,y:611.675}},{t:this.shape_272,p:{x:779.125,y:611.775}},{t:this.shape_268,p:{x:789.875,y:609.275}},{t:this.shape_185,p:{x:803.825,y:611.775}},{t:this.shape_269,p:{x:815.225,y:611.775}},{t:this.shape_536,p:{x:828,y:609.45}},{t:this.shape_270,p:{x:841,y:611.775}},{t:this.shape_535},{t:this.shape_203,p:{x:872.275,y:611.775}},{t:this.shape_215,p:{x:884.9,y:611.775}},{t:this.shape_210,p:{x:896.05,y:611.775}}]},1).to({state:[{t:this.shape_620,p:{y:497.575}},{t:this.shape_619,p:{y:499.875}},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846,p:{y:499.875}},{t:this.shape_845,p:{x:446.425,y:496.975}},{t:this.shape_844},{t:this.shape_843,p:{x:470.125,y:496.975}},{t:this.shape_842,p:{y:499.875}},{t:this.shape_841,p:{y:499.875}},{t:this.shape_840,p:{y:499.9}},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_528,p:{x:668.125,y:496.975}},{t:this.shape_613,p:{y:564.325}},{t:this.shape_829,p:{x:375.675,y:566.275}},{t:this.shape_500,p:{x:388.825,y:566.175}},{t:this.shape_828,p:{y:565.025,x:399.1}},{t:this.shape_827,p:{x:408.175,y:566.175}},{t:this.shape_826,p:{x:418.275,y:566.275}},{t:this.shape_825,p:{x:427.475,y:563.85}},{t:this.shape_824},{t:this.shape_823,p:{x:445.775,y:563.85}},{t:this.shape_822,p:{x:455.025,y:566.275}},{t:this.shape_821,p:{y:566.275}},{t:this.shape_457,p:{x:486.65,y:564.125}},{t:this.shape_820},{t:this.shape_819,p:{x:508.95,y:565.025}},{t:this.shape_307,p:{x:519.525,y:563.85}},{t:this.shape_818,p:{x:532.15,y:566.275}},{t:this.shape_817,p:{x:550.225,y:566.275}},{t:this.shape_816,p:{x:561.875,y:566.175}},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813,p:{x:595.875,y:566.175}},{t:this.shape_812},{t:this.shape_497,p:{x:617.175,y:566.175}},{t:this.shape_811,p:{x:637.7,y:566.275}},{t:this.shape_219,p:{x:652.775,y:563.85}},{t:this.shape_810},{t:this.shape_809,p:{x:670.125,y:566.275}},{t:this.shape_194,p:{x:681.675,y:563.85}},{t:this.shape_420,p:{x:699.425,y:566.275}},{t:this.shape_808,p:{x:716.775,y:566.275}},{t:this.shape_807,p:{x:728.175,y:566.275}},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803,p:{x:784.85,y:565.025}},{t:this.shape_387,p:{x:794.8,y:566.275}},{t:this.shape_802,p:{x:805.975,y:566.175}},{t:this.shape_801,p:{x:821.2,y:566.275}},{t:this.shape_279,p:{x:832.85,y:566.275}},{t:this.shape_354,p:{x:844.55,y:566.275}},{t:this.shape_800,p:{x:855.875,y:566.275}},{t:this.shape_799},{t:this.shape_610,p:{x:877.75,y:565.025}},{t:this.shape_517,p:{x:887.7,y:566.275}},{t:this.shape_798,p:{x:898.85,y:566.275}},{t:this.shape_797},{t:this.shape_796,p:{x:923.5,y:565.025}},{t:this.shape_415,p:{x:933.025,y:566.275}},{t:this.shape_795,p:{x:943.15,y:565.025}},{t:this.shape_794},{t:this.shape_454,p:{x:969.15,y:566.175}},{t:this.shape_793},{t:this.shape_458,p:{x:997.825,y:566.175}},{t:this.shape_792,p:{x:1008.1,y:565.025}},{t:this.shape_791,p:{x:1017.2,y:566.275}},{t:this.shape_790,p:{x:1030.55,y:564.125}},{t:this.shape_453,p:{x:1039.975,y:566.175}},{t:this.shape_404,p:{x:1057.675,y:566.275}},{t:this.shape_789},{t:this.shape_788,p:{x:371.175,y:598.075}},{t:this.shape_522,p:{x:381.225,y:597.975}},{t:this.shape_787,p:{x:387.55,y:595.925}},{t:this.shape_786,p:{x:397.2,y:600.575}},{t:this.shape_785,p:{x:407.2,y:596.825}},{t:this.shape_391,p:{x:413.975,y:602.725}},{t:this.shape_784,p:{x:429.5,y:596.125}},{t:this.shape_783,p:{x:442.525,y:598.075}},{t:this.shape_782},{t:this.shape_423,p:{x:468.3,y:598.075}},{t:this.shape_445,p:{x:485.025,y:597.975}},{t:this.shape_781},{t:this.shape_440,p:{x:508.475,y:597.975}},{t:this.shape_780},{t:this.shape_779,p:{x:535.125,y:595.575}},{t:this.shape_428,p:{x:543.275,y:597.975}},{t:this.shape_778,p:{x:553.375,y:598.075}},{t:this.shape_277,p:{x:570,y:597.975}},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775,p:{x:612.4,y:598.075}},{t:this.shape_774,p:{x:628.225,y:595.575}},{t:this.shape_427,p:{x:633.95,y:595.925}},{t:this.shape_411,p:{x:641.875,y:597.975}},{t:this.shape_773},{t:this.shape_772,p:{x:659.45,y:596.825}},{t:this.shape_771,p:{x:671.625,y:595.65}},{t:this.shape_770,p:{x:677.1,y:595.925}},{t:this.shape_417,p:{x:686.475,y:597.975}},{t:this.shape_769,p:{x:699.1,y:598.075}},{t:this.shape_201,p:{x:714.4,y:596.825}},{t:this.shape_768,p:{x:724.825,y:598.075}},{t:this.shape_767,p:{x:740.65,y:596.825}},{t:this.shape_509,p:{x:751.175,y:595.65}},{t:this.shape_766},{t:this.shape_765,p:{x:778.075,y:595.65}},{t:this.shape_397,p:{x:786.425,y:598.075}},{t:this.shape_764,p:{x:798,y:598.075}},{t:this.shape_763,p:{x:806.8,y:596.825}},{t:this.shape_762},{t:this.shape_413,p:{x:836.125,y:597.975}},{t:this.shape_761,p:{x:845.375,y:595.65}},{t:this.shape_363,p:{x:854.2,y:598.075}},{t:this.shape_760,p:{x:865.4,y:598.075}},{t:this.shape_759,p:{x:875.65,y:598.075}},{t:this.shape_758,p:{x:890.05,y:596.825}},{t:this.shape_409,p:{x:900.575,y:595.65}},{t:this.shape_575,p:{x:913.2,y:598.075}},{t:this.shape_757,p:{x:930.125,y:598.075}},{t:this.shape_756,p:{x:941.525,y:598.075}},{t:this.shape_755},{t:this.shape_754,p:{x:975,y:600.575}},{t:this.shape_753},{t:this.shape_752,p:{x:998.2,y:596.825}},{t:this.shape_751},{t:this.shape_399,p:{x:1019.325,y:597.975}},{t:this.shape_750,p:{x:360.875,y:629.875}},{t:this.shape_749,p:{x:372.325,y:629.875}},{t:this.shape_748},{t:this.shape_498,p:{x:404.95,y:629.875}},{t:this.shape_747,p:{x:416.1,y:629.875}},{t:this.shape_395,p:{x:432.375,y:629.875}},{t:this.shape_746,p:{x:444.125,y:629.875}},{t:this.shape_362,p:{x:454.175,y:629.775}},{t:this.shape_745,p:{x:464.275,y:629.875}},{t:this.shape_744},{t:this.shape_513,p:{x:486.25,y:629.875}},{t:this.shape_743,p:{x:502.1,y:629.875}},{t:this.shape_548,p:{x:510.9,y:628.625}},{t:this.shape_315,p:{x:519.925,y:629.775}},{t:this.shape_742,p:{x:530.075,y:629.975}},{t:this.shape_741,p:{x:542.075,y:629.875}},{t:this.shape_740,p:{x:550.75,y:628.625}},{t:this.shape_739,p:{x:561.175,y:629.975}},{t:this.shape_312,p:{x:572.975,y:629.775}},{t:this.shape_738},{t:this.shape_402,p:{x:593.8,y:629.875}},{t:this.shape_737,p:{x:607.175,y:627.45}},{t:this.shape_422,p:{x:612.65,y:627.725}},{t:this.shape_541,p:{x:621.875,y:627.45}},{t:this.shape_736,p:{x:632.75,y:629.875}},{t:this.shape_603,p:{x:649.675,y:629.875}},{t:this.shape_735,p:{x:661.075,y:629.875}},{t:this.shape_403,p:{x:674.275,y:629.775}},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732,p:{x:703.2,y:628.625}},{t:this.shape_731,p:{x:709.8,y:627.725}},{t:this.shape_730,p:{x:719.025,y:629.875}},{t:this.shape_367,p:{x:732.225,y:629.775}},{t:this.shape_380,p:{x:744.375,y:629.875}},{t:this.shape_729,p:{x:753.475,y:627.45}},{t:this.shape_192,p:{x:761.4,y:629.875}},{t:this.shape_378,p:{x:777.675,y:629.875}},{t:this.shape_348,p:{x:790.725,y:629.775}},{t:this.shape_728},{t:this.shape_727,p:{x:818.725,y:627.45}},{t:this.shape_726,p:{x:828.025,y:629.875}},{t:this.shape_725,p:{x:841.025,y:629.875}},{t:this.shape_724},{t:this.shape_256,p:{x:865.9,y:629.875}},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721,p:{x:909.3,y:627.725}},{t:this.shape_502,p:{x:917.375,y:629.875}},{t:this.shape_340,p:{x:928.975,y:627.45}},{t:this.shape_419,p:{x:946.425,y:629.875}},{t:this.shape_337,p:{x:957.975,y:627.45}},{t:this.shape_368,p:{x:970.125,y:629.875}},{t:this.shape_326,p:{x:983.175,y:629.775}},{t:this.shape_720},{t:this.shape_280,p:{x:1007.65,y:629.875}},{t:this.shape_719,p:{x:1022.95,y:628.625}},{t:this.shape_336,p:{x:1033.475,y:627.45}},{t:this.shape_557,p:{x:1046.1,y:629.875}},{t:this.shape_407,p:{x:360.875,y:661.675}},{t:this.shape_612,p:{x:372.325,y:661.675}},{t:this.shape_310,p:{x:385.475,y:661.575}},{t:this.shape_718,p:{x:395.75,y:660.425}},{t:this.shape_305,p:{x:404.775,y:661.575}},{t:this.shape_602,p:{x:414.925,y:661.675}},{t:this.shape_717,p:{x:424.125,y:659.25}},{t:this.shape_716,p:{x:436.725,y:659.175}},{t:this.shape_518,p:{x:442.425,y:659.25}},{t:this.shape_501,p:{x:451.675,y:661.675}},{t:this.shape_715},{t:this.shape_371,p:{x:477.875,y:666.325}},{t:this.shape_714},{t:this.shape_303,p:{x:512.125,y:661.575}},{t:this.shape_713,p:{x:526.625,y:654.825}},{t:this.shape_712,p:{x:531.75,y:659.525}},{t:this.shape_711,p:{x:538.725,y:659.175}},{t:this.shape_710,p:{x:544.075,y:654.825}},{t:this.shape_210,p:{x:557.2,y:661.675}},{t:this.shape_709,p:{x:566.05,y:660.425}},{t:this.shape_353,p:{x:575.525,y:661.675}},{t:this.shape_537,p:{x:585.65,y:660.425}},{t:this.shape_708,p:{x:595.6,y:661.675}},{t:this.shape_707,p:{x:611.7,y:661.575}},{t:this.shape_455,p:{x:627.7,y:661.675}},{t:this.shape_302,p:{x:640.375,y:661.575}},{t:this.shape_706,p:{x:650.65,y:660.425}},{t:this.shape_478,p:{x:668.5,y:661.675}},{t:this.shape_480,p:{x:683.425,y:661.675}},{t:this.shape_514,p:{x:696.475,y:661.775}},{t:this.shape_475,p:{x:705.825,y:659.25}},{t:this.shape_705},{t:this.shape_704},{t:this.shape_186,p:{x:746.65,y:661.675}},{t:this.shape_479,p:{x:764.775,y:661.775}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700,p:{x:816.25,y:660.425}},{t:this.shape_477,p:{x:826.625,y:661.675}},{t:this.shape_699,p:{x:843.9,y:661.675}},{t:this.shape_579,p:{x:855.9,y:664.175}},{t:this.shape_607,p:{x:868.25,y:661.675}},{t:this.shape_405,p:{x:879.575,y:661.675}},{t:this.shape_698,p:{x:887.25,y:659.525}},{t:this.shape_697,p:{x:894.225,y:659.175}},{t:this.shape_376,p:{x:902.625,y:664.275}},{t:this.shape_335,p:{x:919.275,y:661.675}},{t:this.shape_696},{t:this.shape_424,p:{x:947.125,y:659.25}},{t:this.shape_446,p:{x:956.425,y:661.675}},{t:this.shape_386,p:{x:968.275,y:661.675}},{t:this.shape_553,p:{x:979.625,y:659.25}},{t:this.shape_418,p:{x:996.525,y:661.675}},{t:this.shape_695,p:{x:1007.325,y:659.175}},{t:this.shape_382,p:{x:1021.275,y:661.675}},{t:this.shape_400,p:{x:1032.675,y:661.675}},{t:this.shape_694},{t:this.shape_693},{t:this.shape_416,p:{x:1073.75,y:660.425}},{t:this.shape_359,p:{x:1084.125,y:661.675}},{t:this.shape_692},{t:this.shape_691,p:{x:374.8,y:693.475}},{t:this.shape_392,p:{x:392.45,y:693.475}},{t:this.shape_436,p:{x:404.05,y:693.475}},{t:this.shape_239,p:{x:415.8,y:693.475}},{t:this.shape_338,p:{x:427.125,y:693.475}},{t:this.shape_476,p:{x:438.575,y:693.575}},{t:this.shape_690,p:{x:448.95,y:692.225}},{t:this.shape_449,p:{x:458.95,y:693.475}},{t:this.shape_689},{t:this.shape_350,p:{x:486.45,y:691.325}},{t:this.shape_688,p:{x:493.425,y:690.975}},{t:this.shape_323,p:{x:507.625,y:693.475}},{t:this.shape_253,p:{x:524.925,y:693.475}},{t:this.shape_316,p:{x:535.9,y:693.475}},{t:this.shape_294,p:{x:547.075,y:693.375}},{t:this.shape_505,p:{x:554.4,y:692.225}},{t:this.shape_319,p:{x:563.875,y:693.475}},{t:this.shape_687},{t:this.shape_300,p:{x:582.375,y:693.375}},{t:this.shape_686},{t:this.shape_468,p:{x:610.7,y:693.425}},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_202,p:{x:695.3,y:691.325}},{t:this.shape_678,p:{x:703.2,y:693.475}},{t:this.shape_499,p:{x:717.6,y:692.225}},{t:this.shape_291,p:{x:726.625,y:693.375}},{t:this.shape_473,p:{x:736.775,y:693.575}},{t:this.shape_508,p:{x:749.5,y:693.475}},{t:this.shape_677},{t:this.shape_296,p:{x:771.975,y:693.475}},{t:this.shape_284,p:{x:785.025,y:693.375}},{t:this.shape_676},{t:this.shape_675,p:{x:812.675,y:686.625}},{t:this.shape_674},{t:this.shape_394,p:{x:829.825,y:691.05}},{t:this.shape_673,p:{x:837.8,y:693.475}},{t:this.shape_672,p:{x:848.95,y:693.475}},{t:this.shape_504,p:{x:857.275,y:686.625}},{t:this.shape_341,p:{x:873.6,y:693.475}},{t:this.shape_344,p:{x:888.525,y:693.475}},{t:this.shape_393,p:{x:901.625,y:693.575}},{t:this.shape_357,p:{x:910.975,y:691.05}},{t:this.shape_671},{t:this.shape_670},{t:this.shape_331,p:{x:951.8,y:693.475}},{t:this.shape_366,p:{x:969.875,y:693.575}},{t:this.shape_669},{t:this.shape_605,p:{x:992.9,y:693.475}},{t:this.shape_668},{t:this.shape_414,p:{x:1020.35,y:691.325}},{t:this.shape_604,p:{x:1027.375,y:690.975}},{t:this.shape_308,p:{x:1039.65,y:692.225}},{t:this.shape_667},{t:this.shape_306,p:{x:1062.85,y:693.475}},{t:this.shape_334,p:{x:360.7,y:725.275}},{t:this.shape_290,p:{x:371.425,y:725.275}},{t:this.shape_545,p:{x:387.9,y:725.175}},{t:this.shape_230,p:{x:403.9,y:725.275}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_465,p:{x:473.775,y:724.025}},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658,p:{x:516.25,y:723.125}},{t:this.shape_596,p:{x:524.15,y:725.275}},{t:this.shape_593,p:{x:539.075,y:722.775}},{t:this.shape_278,p:{x:547.675,y:725.275}},{t:this.shape_322,p:{x:556.775,y:722.85}},{t:this.shape_558,p:{x:564.7,y:725.275}},{t:this.shape_451,p:{x:575.9,y:725.275}},{t:this.shape_369,p:{x:584.725,y:729.925}},{t:this.shape_657,p:{y:786.95,x:358.5}},{t:this.shape_271,p:{x:368.175,y:788.775}},{t:this.shape_329,p:{x:386.825,y:788.875}},{t:this.shape_358,p:{x:399.875,y:788.975}},{t:this.shape_281,p:{x:411.675,y:788.775}},{t:this.shape_398,p:{x:426.95,y:788.875}},{t:this.shape_656,p:{y:788.875,x:438.55}},{t:this.shape_263,p:{x:449.825,y:788.875}},{t:this.shape_611,p:{x:466.3,y:788.775}},{t:this.shape_388,p:{x:483.2,y:791.375}},{t:this.shape_318,p:{x:492.175,y:786.45}},{t:this.shape_559,p:{x:501,y:788.875}},{t:this.shape_328,p:{x:516.3,y:787.625}},{t:this.shape_406,p:{x:526.825,y:786.45}},{t:this.shape_206,p:{x:539.45,y:788.875}},{t:this.shape_469,p:{x:556.625,y:788.825}},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_462,p:{x:609.325,y:787.625}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_464,p:{x:650.025,y:788.825}},{t:this.shape_648},{t:this.shape_466,p:{x:666.525,y:788.825}},{t:this.shape_260,p:{x:682.725,y:788.875}},{t:this.shape_262,p:{x:694.275,y:788.775}},{t:this.shape_412,p:{x:704,y:788.875}},{t:this.shape_439,p:{x:717.875,y:782.025}},{t:this.shape_506,p:{x:723,y:786.725}},{t:this.shape_460,p:{x:729.975,y:786.375}},{t:this.shape_433,p:{x:735.375,y:782.025}},{t:this.shape_252,p:{x:748.925,y:788.875}},{t:this.shape_234,p:{x:761.975,y:788.775}},{t:this.shape_647},{t:this.shape_247,p:{x:789.675,y:782.025}},{t:this.shape_646,p:{x:798.1,y:788.875}},{t:this.shape_275,p:{x:806.825,y:786.45}},{t:this.shape_645},{t:this.shape_512,p:{x:825.9,y:788.875}},{t:this.shape_236,p:{x:834.225,y:782.025}},{t:this.shape_592,p:{x:847.4,y:788.875}},{t:this.shape_342,p:{x:856.2,y:787.625}},{t:this.shape_245,p:{x:865.675,y:788.875}},{t:this.shape_447,p:{x:875.8,y:787.625}},{t:this.shape_327,p:{x:885.8,y:788.875}},{t:this.shape_227,p:{x:901.85,y:788.775}},{t:this.shape_274,p:{x:917.9,y:788.875}},{t:this.shape_229,p:{x:930.525,y:788.775}},{t:this.shape_321,p:{x:940.8,y:787.625}},{t:this.shape_563,p:{x:949.85,y:788.875}},{t:this.shape_288,p:{x:957.775,y:793.525}},{t:this.shape_644,p:{x:974.8,y:786.95}},{t:this.shape_401,p:{x:981.55,y:787.625}},{t:this.shape_643,p:{x:993.75,y:786.725}},{t:this.shape_217,p:{x:1001.65,y:788.875}},{t:this.shape_242,p:{x:1017.925,y:788.875}},{t:this.shape_642,p:{x:1029.5,y:788.875}},{t:this.shape_641,p:{x:1041.025,y:786.45}},{t:this.shape_640,p:{x:1048.55,y:786.725}},{t:this.shape_213,p:{x:1057.975,y:788.775}},{t:this.shape_639,p:{x:1070.35,y:791.375}},{t:this.shape_196,p:{x:358.25,y:818.525}},{t:this.shape_438,p:{x:365.275,y:818.175}},{t:this.shape_379,p:{x:377.55,y:819.425}},{t:this.shape_332,p:{x:388.125,y:818.25}},{t:this.shape_638,p:{x:400.75,y:820.675}},{t:this.shape_637},{t:this.shape_235,p:{x:428.725,y:820.675}},{t:this.shape_258,p:{x:437.825,y:818.25}},{t:this.shape_313,p:{x:447.125,y:820.775}},{t:this.shape_265,p:{x:459.85,y:820.675}},{t:this.shape_320,p:{x:477.925,y:820.675}},{t:this.shape_384,p:{x:488.675,y:818.175}},{t:this.shape_223,p:{x:499.625,y:813.825}},{t:this.shape_636},{t:this.shape_218,p:{x:518.425,y:820.675}},{t:this.shape_244,p:{x:529.975,y:820.575}},{t:this.shape_285,p:{x:536.3,y:818.525}},{t:this.shape_212,p:{x:544.625,y:820.675}},{t:this.shape_635},{t:this.shape_251,p:{x:566.925,y:818.25}},{t:this.shape_257,p:{x:575.75,y:820.675}},{t:this.shape_634,p:{x:586.525,y:829.075}},{t:this.shape_237,p:{x:596.175,y:818.75}},{t:this.shape_220,p:{x:606.075,y:813.825}},{t:this.shape_633,p:{x:616.75,y:818.525}},{t:this.shape_574,p:{x:624.65,y:820.675}},{t:this.shape_189,p:{x:641.4,y:820.675}},{t:this.shape_632},{t:this.shape_304,p:{x:667.125,y:820.775}},{t:this.shape_199,p:{x:679.375,y:820.675}},{t:this.shape_250,p:{x:688.475,y:818.25}},{t:this.shape_496,p:{x:700.55,y:819.425}},{t:this.shape_298,p:{x:710.925,y:820.675}},{t:this.shape_377,p:{x:726.75,y:819.425}},{t:this.shape_266,p:{x:737.325,y:818.25}},{t:this.shape_631,p:{x:749.95,y:820.675}},{t:this.shape_630},{t:this.shape_193,p:{x:777.925,y:820.675}},{t:this.shape_240,p:{x:787.025,y:818.25}},{t:this.shape_282,p:{x:796.325,y:820.775}},{t:this.shape_591,p:{x:809.05,y:820.675}},{t:this.shape_293,p:{x:827.125,y:820.675}},{t:this.shape_297,p:{x:837.875,y:818.175}},{t:this.shape_174,p:{x:848.825,y:813.825}},{t:this.shape_264,p:{x:856.6,y:820.675}},{t:this.shape_183,p:{x:867.625,y:820.675}},{t:this.shape_224,p:{x:879.175,y:820.575}},{t:this.shape_261,p:{x:885.5,y:818.525}},{t:this.shape_172,p:{x:893.825,y:820.675}},{t:this.shape_629},{t:this.shape_184,p:{x:916.125,y:818.25}},{t:this.shape_215,p:{x:924.95,y:820.675}},{t:this.shape_238,p:{x:935.725,y:829.075}},{t:this.shape_222,p:{x:946.725,y:818.625}},{t:this.shape_170,p:{x:955.275,y:813.825}},{t:this.shape_628,p:{x:966.675,y:820.65}},{t:this.shape_456,p:{x:979.45,y:819.425}},{t:this.shape_231,p:{x:989.975,y:818.25}},{t:this.shape_452,p:{x:1002.6,y:820.675}},{t:this.shape_286,p:{x:362.025,y:852.475}},{t:this.shape_228,p:{x:375.125,y:852.575}},{t:this.shape_317,p:{x:385.5,y:851.225}},{t:this.shape_185,p:{x:394.725,y:852.475}},{t:this.shape_283,p:{x:406.125,y:852.475}},{t:this.shape_627},{t:this.shape_372,p:{x:438.8,y:852.475}},{t:this.shape_255,p:{x:453.05,y:850.325}},{t:this.shape_626},{t:this.shape_625},{t:this.shape_435,p:{x:490.9,y:852.475}},{t:this.shape_624,p:{x:503.85,y:854.975}},{t:this.shape_181,p:{x:516.2,y:852.475}},{t:this.shape_207,p:{x:528.825,y:852.375}},{t:this.shape_623},{t:this.shape_190,p:{x:554.65,y:852.475}},{t:this.shape_198,p:{x:567.275,y:852.375}},{t:this.shape_195,p:{x:577.55,y:851.225}},{t:this.shape_272,p:{x:593.525,y:852.475}},{t:this.shape_188,p:{x:606.675,y:852.375}},{t:this.shape_622,p:{x:621.55,y:850.325}},{t:this.shape_268,p:{x:628.525,y:849.975}},{t:this.shape_383,p:{x:639.85,y:850.325}},{t:this.shape_232,p:{x:646.3,y:851.225}},{t:this.shape_437,p:{x:658.5,y:850.325}},{t:this.shape_178,p:{x:666.4,y:852.475}},{t:this.shape_204,p:{x:680.8,y:851.225}},{t:this.shape_182,p:{x:689.875,y:852.375}},{t:this.shape_179,p:{x:700.025,y:852.575}},{t:this.shape_270,p:{x:712.75,y:852.475}},{t:this.shape_269,p:{x:730.825,y:852.475}},{t:this.shape_171,p:{x:742.475,y:852.375}},{t:this.shape_176,p:{x:758.325,y:852.375}},{t:this.shape_203,p:{x:771.375,y:852.475}},{t:this.shape_621,p:{x:781.6,y:851.225}},{t:this.shape_169,p:{x:788.375,y:857.125}}]},1).to({state:[{t:this.shape_620,p:{y:138.225}},{t:this.shape_619,p:{y:140.525}},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_846,p:{y:140.525}},{t:this.shape_843,p:{x:446.425,y:137.625}},{t:this.shape_1044},{t:this.shape_528,p:{x:470.125,y:137.625}},{t:this.shape_842,p:{y:140.525}},{t:this.shape_841,p:{y:140.525}},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041,p:{x:547.75,y:140.525}},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_527,p:{x:629.475,y:140.525}},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_657,p:{y:205,x:358.5}},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020,p:{x:449.6,y:204.775}},{t:this.shape_747,p:{x:457.5,y:206.925}},{t:this.shape_1019},{t:this.shape_1018,p:{x:482.425,y:204.5}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_502,p:{x:546.975,y:206.925}},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_798,p:{x:579.35,y:206.925}},{t:this.shape_1011},{t:this.shape_779,p:{x:607.275,y:204.425}},{t:this.shape_1010},{t:this.shape_818,p:{x:630.7,y:206.925}},{t:this.shape_1009},{t:this.shape_1008,p:{x:656,y:206.925}},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_770,p:{x:684.3,y:204.775}},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_256,p:{x:722.8,y:206.925}},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_742,p:{x:759.725,y:207.025}},{t:this.shape_769,p:{x:772.45,y:206.925}},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_324,p:{x:801.95,y:204.775}},{t:this.shape_999},{t:this.shape_998},{t:this.shape_759,p:{x:832.9,y:206.925}},{t:this.shape_997},{t:this.shape_996},{t:this.shape_375,p:{x:864.6,y:209.425}},{t:this.shape_673,p:{x:876.05,y:206.925}},{t:this.shape_995},{t:this.shape_264,p:{x:905.1,y:206.925}},{t:this.shape_801,p:{x:916.6,y:206.925}},{t:this.shape_994},{t:this.shape_523,p:{x:942.525,y:206.925}},{t:this.shape_993},{t:this.shape_992,p:{x:968.4,y:204.6}},{t:this.shape_991},{t:this.shape_430,p:{x:999.3,y:206.925}},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_786,p:{x:400.35,y:241.225}},{t:this.shape_984,p:{x:409.35,y:236.575}},{t:this.shape_983},{t:this.shape_982,p:{x:431.1,y:241.225}},{t:this.shape_981},{t:this.shape_721,p:{x:451.75,y:236.575}},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_536,p:{x:501.3,y:236.4}},{t:this.shape_977,p:{x:514.3,y:238.725}},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_520,p:{x:624.375,y:238.725}},{t:this.shape_968},{t:this.shape_967},{t:this.shape_470,p:{x:661.625,y:238.725}},{t:this.shape_966,p:{x:674.675,y:238.625}},{t:this.shape_731,p:{x:689.55,y:236.575}},{t:this.shape_965,p:{x:698.925,y:238.625}},{t:this.shape_964},{t:this.shape_963,p:{x:719.15,y:238.725}},{t:this.shape_962,p:{x:731.775,y:238.625}},{t:this.shape_961},{t:this.shape_708,p:{x:757.6,y:238.725}},{t:this.shape_594,p:{x:769.9,y:236.4}},{t:this.shape_960},{t:this.shape_739,p:{x:801.975,y:238.825}},{t:this.shape_959},{t:this.shape_419,p:{x:821.575,y:238.725}},{t:this.shape_958},{t:this.shape_545,p:{x:849.6,y:238.625}},{t:this.shape_672,p:{x:865.6,y:238.725}},{t:this.shape_432,p:{x:874.475,y:243.375}},{t:this.shape_957},{t:this.shape_459,p:{x:373.125,y:302.325}},{t:this.shape_407,p:{x:384.875,y:302.325}},{t:this.shape_956,p:{x:396.475,y:299.9}},{t:this.shape_955},{t:this.shape_691,p:{x:423.4,y:302.325}},{t:this.shape_624,p:{x:436.35,y:304.825}},{t:this.shape_331,p:{x:448.7,y:302.325}},{t:this.shape_954},{t:this.shape_953,p:{x:465,y:300.175}},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949,p:{x:500.475,y:302.225}},{t:this.shape_948},{t:this.shape_774,p:{x:529.875,y:299.825}},{t:this.shape_947},{t:this.shape_946,p:{x:552.775,y:299.9}},{t:this.shape_605,p:{x:565.4,y:302.325}},{t:this.shape_945},{t:this.shape_944},{t:this.shape_829,p:{x:605.425,y:302.325}},{t:this.shape_405,p:{x:617.275,y:302.325}},{t:this.shape_736,p:{x:628.25,y:302.325}},{t:this.shape_217,p:{x:639.4,y:302.325}},{t:this.shape_743,p:{x:649.7,y:302.325}},{t:this.shape_943},{t:this.shape_942},{t:this.shape_442,p:{x:687.225,y:302.325}},{t:this.shape_941},{t:this.shape_940,p:{x:712.2,y:300.175}},{t:this.shape_939,p:{x:721.575,y:302.225}},{t:this.shape_600,p:{x:733.95,y:304.825}},{t:this.shape_825,p:{x:742.675,y:299.9}},{t:this.shape_564,p:{x:751.5,y:302.325}},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_827,p:{x:793.375,y:302.225}},{t:this.shape_429,p:{x:802.575,y:302.325}},{t:this.shape_819,p:{x:812.7,y:301.075}},{t:this.shape_712,p:{x:819.3,y:300.175}},{t:this.shape_826,p:{x:828.525,y:302.325}},{t:this.shape_935,p:{x:841.725,y:302.225}},{t:this.shape_934},{t:this.shape_426,p:{x:864.725,y:302.325}},{t:this.shape_933,p:{x:877.775,y:302.225}},{t:this.shape_932,p:{x:890.6,y:300}},{t:this.shape_796,p:{x:906.85,y:301.075}},{t:this.shape_931,p:{x:917.375,y:299.9}},{t:this.shape_930},{t:this.shape_822,p:{x:948.075,y:302.325}},{t:this.shape_514,p:{x:961.125,y:302.425}},{t:this.shape_740,p:{x:971.5,y:301.075}},{t:this.shape_386,p:{x:980.775,y:302.325}},{t:this.shape_817,p:{x:992.175,y:302.325}},{t:this.shape_277,p:{x:1008.75,y:302.225}},{t:this.shape_929},{t:this.shape_807,p:{x:1042.875,y:302.325}},{t:this.shape_716,p:{x:1053.625,y:299.825}},{t:this.shape_646,p:{x:361.6,y:334.125}},{t:this.shape_420,p:{x:373.225,y:334.125}},{t:this.shape_382,p:{x:384.975,y:334.125}},{t:this.shape_585,p:{x:396.525,y:331.7}},{t:this.shape_301,p:{x:411.35,y:331.975}},{t:this.shape_928},{t:this.shape_517,p:{x:427.8,y:334.125}},{t:this.shape_816,p:{x:438.925,y:334.025}},{t:this.shape_415,p:{x:448.125,y:334.125}},{t:this.shape_927},{t:this.shape_790,p:{x:464.9,y:331.975}},{t:this.shape_783,p:{x:474.125,y:334.125}},{t:this.shape_507,p:{x:487.275,y:334.025}},{t:this.shape_711,p:{x:503.675,y:331.625}},{t:this.shape_778,p:{x:513.175,y:334.125}},{t:this.shape_813,p:{x:524.875,y:334.025}},{t:this.shape_546,p:{x:538.55,y:334.025}},{t:this.shape_926},{t:this.shape_328,p:{x:568.05,y:332.875}},{t:this.shape_582,p:{x:578.625,y:331.7}},{t:this.shape_591,p:{x:591.25,y:334.125}},{t:this.shape_389,p:{x:608,y:334.125}},{t:this.shape_732,p:{x:616.8,y:332.875}},{t:this.shape_404,p:{x:626.275,y:334.125}},{t:this.shape_802,p:{x:637.825,y:334.025}},{t:this.shape_690,p:{x:645.15,y:332.875}},{t:this.shape_339,p:{x:651.8,y:331.975}},{t:this.shape_500,p:{x:661.175,y:334.025}},{t:this.shape_925},{t:this.shape_924},{t:this.shape_768,p:{x:704.825,y:334.125}},{t:this.shape_521,p:{x:714.05,y:331.975}},{t:this.shape_497,p:{x:723.475,y:334.025}},{t:this.shape_923},{t:this.shape_697,p:{x:747.475,y:331.625}},{t:this.shape_756,p:{x:756.975,y:334.125}},{t:this.shape_522,p:{x:768.625,y:334.025}},{t:this.shape_922},{t:this.shape_580,p:{x:792.075,y:331.7}},{t:this.shape_921},{t:this.shape_458,p:{x:822.925,y:334.025}},{t:this.shape_354,p:{x:835.55,y:334.125}},{t:this.shape_920,p:{x:847.15,y:334.125}},{t:this.shape_919},{t:this.shape_749,p:{x:872.525,y:334.125}},{t:this.shape_453,p:{x:885.675,y:334.025}},{t:this.shape_918},{t:this.shape_391,p:{x:907.175,y:338.775}},{t:this.shape_613,p:{y:395.775}},{t:this.shape_745,p:{x:375.675,y:397.725}},{t:this.shape_440,p:{x:388.825,y:397.625}},{t:this.shape_828,p:{y:396.475,x:399.1}},{t:this.shape_445,p:{x:408.175,y:397.625}},{t:this.shape_735,p:{x:418.275,y:397.725}},{t:this.shape_823,p:{x:427.475,y:395.3}},{t:this.shape_695,p:{x:440.075,y:395.225}},{t:this.shape_771,p:{x:445.775,y:395.3}},{t:this.shape_730,p:{x:455.025,y:397.725}},{t:this.shape_821,p:{y:397.725}},{t:this.shape_628,p:{x:487.375,y:397.7}},{t:this.shape_718,p:{x:500.15,y:396.475}},{t:this.shape_560,p:{x:510.675,y:395.3}},{t:this.shape_516,p:{x:519.95,y:395.575}},{t:this.shape_760,p:{x:527.9,y:397.725}},{t:this.shape_210,p:{x:543.7,y:397.725}},{t:this.shape_803,p:{x:552.55,y:396.475}},{t:this.shape_397,p:{x:562.025,y:397.725}},{t:this.shape_772,p:{x:572.15,y:396.475}},{t:this.shape_638,p:{x:582.1,y:397.725}},{t:this.shape_917},{t:this.shape_775,p:{x:614.2,y:397.725}},{t:this.shape_417,p:{x:626.875,y:397.625}},{t:this.shape_916},{t:this.shape_478,p:{x:655,y:397.725}},{t:this.shape_726,p:{x:669.925,y:397.725}},{t:this.shape_479,p:{x:682.975,y:397.825}},{t:this.shape_765,p:{x:692.325,y:395.3}},{t:this.shape_915},{t:this.shape_914},{t:this.shape_761,p:{x:721.325,y:395.3}},{t:this.shape_725,p:{x:730.575,y:397.725}},{t:this.shape_612,p:{x:743.575,y:397.725}},{t:this.shape_570,p:{x:757.05,y:400.225}},{t:this.shape_913},{t:this.shape_476,p:{x:780.175,y:397.825}},{t:this.shape_413,p:{x:793.475,y:397.625}},{t:this.shape_785,p:{x:803.75,y:396.475}},{t:this.shape_441,p:{x:810.35,y:395.575}},{t:this.shape_737,p:{x:815.825,y:395.3}},{t:this.shape_457,p:{x:826.85,y:395.575}},{t:this.shape_795,p:{x:833.35,y:396.475}},{t:this.shape_428,p:{x:847.975,y:397.625}},{t:this.shape_498,p:{x:857.65,y:397.725}},{t:this.shape_395,p:{x:869.225,y:397.725}},{t:this.shape_338,p:{x:880.975,y:397.725}},{t:this.shape_555,p:{x:892.525,y:395.3}},{t:this.shape_412,p:{x:905.15,y:397.725}},{t:this.shape_912,p:{x:917.4,y:395.4}},{t:this.shape_911},{t:this.shape_547,p:{x:944.175,y:395.3}},{t:this.shape_910},{t:this.shape_688,p:{x:972.625,y:395.225}},{t:this.shape_640,p:{x:978.35,y:395.575}},{t:this.shape_403,p:{x:987.775,y:397.625}},{t:this.shape_380,p:{x:999.925,y:397.725}},{t:this.shape_729,p:{x:1009.025,y:395.3}},{t:this.shape_396,p:{x:1022.7,y:397.725}},{t:this.shape_378,p:{x:1033.725,y:397.725}},{t:this.shape_727,p:{x:1042.825,y:395.3}},{t:this.shape_473,p:{x:1052.175,y:397.825}},{t:this.shape_327,p:{x:1064.9,y:397.725}},{t:this.shape_909,p:{y:427.2}},{t:this.shape_435,p:{x:374.8,y:429.525}},{t:this.shape_604,p:{x:385.075,y:427.025}},{t:this.shape_602,p:{x:394.575,y:429.525}},{t:this.shape_411,p:{x:406.225,y:429.425}},{t:this.shape_908},{t:this.shape_907},{t:this.shape_501,p:{x:454.025,y:429.525}},{t:this.shape_906},{t:this.shape_422,p:{x:474.05,y:427.375}},{t:this.shape_367,p:{x:483.475,y:429.425}},{t:this.shape_905},{t:this.shape_767,p:{x:511.15,y:428.275}},{t:this.shape_480,p:{x:521.525,y:429.525}},{t:this.shape_763,p:{x:537.35,y:428.275}},{t:this.shape_539,p:{x:547.875,y:427.1}},{t:this.shape_230,p:{x:560.5,y:429.525}},{t:this.shape_348,p:{x:578.725,y:429.425}},{t:this.shape_225,p:{x:591.35,y:429.525}},{t:this.shape_436,p:{x:602.95,y:429.525}},{t:this.shape_904},{t:this.shape_764,p:{x:627,y:429.525}},{t:this.shape_758,p:{x:635.8,y:428.275}},{t:this.shape_368,p:{x:645.325,y:429.525}},{t:this.shape_903},{t:this.shape_423,p:{x:665.4,y:429.525}},{t:this.shape_707,p:{x:681.45,y:429.425}},{t:this.shape_543,p:{x:697.5,y:429.525}},{t:this.shape_326,p:{x:710.125,y:429.425}},{t:this.shape_706,p:{x:720.4,y:428.275}},{t:this.shape_371,p:{x:727.175,y:434.175}},{t:this.shape_644,p:{x:358.5,y:646.5}},{t:this.shape_310,p:{x:368.175,y:648.325}},{t:this.shape_477,p:{x:386.825,y:648.425}},{t:this.shape_393,p:{x:399.875,y:648.525}},{t:this.shape_399,p:{x:411.675,y:648.325}},{t:this.shape_398,p:{x:426.95,y:648.425}},{t:this.shape_656,p:{y:648.425,x:438.55}},{t:this.shape_353,p:{x:449.825,y:648.425}},{t:this.shape_611,p:{x:466.3,y:648.325}},{t:this.shape_388,p:{x:483.2,y:650.925}},{t:this.shape_717,p:{x:492.175,y:646}},{t:this.shape_902},{t:this.shape_335,p:{x:518.175,y:648.425}},{t:this.shape_901},{t:this.shape_593,p:{x:539.125,y:645.925}},{t:this.shape_446,p:{x:548.625,y:648.425}},{t:this.shape_362,p:{x:560.325,y:648.325}},{t:this.shape_900},{t:this.shape_899},{t:this.shape_792,p:{x:588.25,y:647.175}},{t:this.shape_323,p:{x:597.725,y:648.425}},{t:this.shape_898,p:{x:607.85,y:647.175}},{t:this.shape_270,p:{x:617.8,y:648.425}},{t:this.shape_454,p:{x:633.9,y:648.325}},{t:this.shape_897,p:{x:649.9,y:648.425}},{t:this.shape_303,p:{x:662.575,y:648.325}},{t:this.shape_752,p:{x:672.85,y:647.175}},{t:this.shape_896},{t:this.shape_319,p:{x:701.125,y:648.425}},{t:this.shape_642,p:{x:712.7,y:648.425}},{t:this.shape_895},{t:this.shape_894,p:{x:742.6,y:648.425}},{t:this.shape_372,p:{x:754.7,y:648.425}},{t:this.shape_302,p:{x:767.325,y:648.325}},{t:this.shape_366,p:{x:785.975,y:648.525}},{t:this.shape_609,p:{x:797.8,y:648.425}},{t:this.shape_893,p:{x:809,y:648.425}},{t:this.shape_892},{t:this.shape_719,p:{x:837.45,y:647.175}},{t:this.shape_418,p:{x:847.875,y:648.425}},{t:this.shape_713,p:{x:862.325,y:641.575}},{t:this.shape_518,p:{x:867.425,y:646}},{t:this.shape_400,p:{x:876.675,y:648.425}},{t:this.shape_359,p:{x:889.675,y:648.425}},{t:this.shape_579,p:{x:903.15,y:650.925}},{t:this.shape_710,p:{x:911.775,y:641.575}},{t:this.shape_709,p:{x:923.45,y:647.175}},{t:this.shape_891},{t:this.shape_315,p:{x:945.675,y:648.325}},{t:this.shape_344,p:{x:955.825,y:648.425}},{t:this.shape_358,p:{x:968.875,y:648.525}},{t:this.shape_890},{t:this.shape_889},{t:this.shape_416,p:{x:1009.85,y:647.175}},{t:this.shape_888},{t:this.shape_887},{t:this.shape_437,p:{x:1047.3,y:646.275}},{t:this.shape_195,p:{x:1053.75,y:647.175}},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_329,p:{x:362.025,y:680.225}},{t:this.shape_460,p:{x:372.825,y:677.725}},{t:this.shape_621,p:{x:385.15,y:678.975}},{t:this.shape_883},{t:this.shape_189,p:{x:408.3,y:680.225}},{t:this.shape_882},{t:this.shape_296,p:{x:436.275,y:680.225}},{t:this.shape_312,p:{x:447.825,y:680.125}},{t:this.shape_787,p:{x:454.15,y:678.075}},{t:this.shape_290,p:{x:462.475,y:680.225}},{t:this.shape_881,p:{y:677.9}},{t:this.shape_475,p:{x:484.775,y:677.8}},{t:this.shape_455,p:{x:493.6,y:680.225}},{t:this.shape_675,p:{x:507.525,y:673.375}},{t:this.shape_424,p:{x:512.625,y:677.8}},{t:this.shape_243,p:{x:518.1,y:678.075}},{t:this.shape_558,p:{x:526,y:680.225}},{t:this.shape_267,p:{x:534.85,y:678.975}},{t:this.shape_238,p:{x:543.525,y:688.625}},{t:this.shape_880,p:{x:553.125,y:678.3}},{t:this.shape_504,p:{x:563.025,y:673.375}},{t:this.shape_791,p:{x:576.2,y:680.225}},{t:this.shape_505,p:{x:585,y:678.975}},{t:this.shape_278,p:{x:594.475,y:680.225}},{t:this.shape_305,p:{x:606.025,y:680.125}},{t:this.shape_447,p:{x:613.35,y:678.975}},{t:this.shape_427,p:{x:620,y:678.075}},{t:this.shape_300,p:{x:629.375,y:680.125}},{t:this.shape_879},{t:this.shape_438,p:{x:657.575,y:677.725}},{t:this.shape_294,p:{x:665.725,y:680.125}},{t:this.shape_320,p:{x:675.825,y:680.225}},{t:this.shape_878,p:{x:692.45,y:680.125}},{t:this.shape_384,p:{x:712.225,y:677.725}},{t:this.shape_414,p:{x:717.95,y:678.075}},{t:this.shape_291,p:{x:725.875,y:680.125}},{t:this.shape_877},{t:this.shape_204,p:{x:743.45,y:678.975}},{t:this.shape_876,p:{x:758.3,y:680.225}},{t:this.shape_263,p:{x:769.325,y:680.225}},{t:this.shape_394,p:{x:778.425,y:677.8}},{t:this.shape_313,p:{x:787.725,y:680.325}},{t:this.shape_471,p:{x:800.45,y:680.225}},{t:this.shape_369,p:{x:809.275,y:684.875}},{t:this.shape_561,p:{x:361.475,y:741.9}},{t:this.shape_875},{t:this.shape_257,p:{x:386.75,y:743.825}},{t:this.shape_658,p:{x:401.05,y:741.675}},{t:this.shape_201,p:{x:407.5,y:742.575}},{t:this.shape_347,p:{x:417.5,y:743.825}},{t:this.shape_874},{t:this.shape_592,p:{x:448.7,y:743.825}},{t:this.shape_439,p:{x:461.675,y:736.975}},{t:this.shape_343,p:{x:466.8,y:741.675}},{t:this.shape_433,p:{x:471.875,y:736.975}},{t:this.shape_873},{t:this.shape_247,p:{x:487.475,y:736.975}},{t:this.shape_357,p:{x:492.575,y:741.4}},{t:this.shape_387,p:{x:501.4,y:743.825}},{t:this.shape_284,p:{x:514.075,y:743.725}},{t:this.shape_349,p:{x:526.45,y:746.325}},{t:this.shape_537,p:{x:536.15,y:742.575}},{t:this.shape_872},{t:this.shape_236,p:{x:555.575,y:736.975}},{t:this.shape_260,p:{x:569.175,y:743.825}},{t:this.shape_271,p:{x:582.225,y:743.725}},{t:this.shape_871},{t:this.shape_223,p:{x:609.875,y:736.975}},{t:this.shape_698,p:{x:615,y:741.675}},{t:this.shape_870},{t:this.shape_869},{t:this.shape_220,p:{x:644.675,y:736.975}},{t:this.shape_868},{t:this.shape_363,p:{x:671.95,y:743.825}},{t:this.shape_610,p:{x:681.65,y:742.575}},{t:this.shape_449,p:{x:691.6,y:743.825}},{t:this.shape_281,p:{x:702.775,y:743.725}},{t:this.shape_867,p:{x:716.45,y:743.725}},{t:this.shape_177,p:{x:729.15,y:741.675}},{t:this.shape_234,p:{x:738.525,y:743.725}},{t:this.shape_280,p:{x:751.15,y:743.825}},{t:this.shape_866},{t:this.shape_298,p:{x:782.425,y:743.825}},{t:this.shape_865},{t:this.shape_864},{t:this.shape_252,p:{x:836.925,y:743.825}},{t:this.shape_229,p:{x:849.975,y:743.725}},{t:this.shape_376,p:{x:861.925,y:746.425}},{t:this.shape_401,p:{x:876.7,y:742.575}},{t:this.shape_350,p:{x:883.35,y:741.675}},{t:this.shape_863},{t:this.shape_181,p:{x:912.2,y:743.825}},{t:this.shape_178,p:{x:923.35,y:743.825}},{t:this.shape_700,p:{x:937.75,y:742.575}},{t:this.shape_293,p:{x:948.125,y:743.825}},{t:this.shape_174,p:{x:962.575,y:736.975}},{t:this.shape_322,p:{x:967.675,y:741.4}},{t:this.shape_286,p:{x:976.925,y:743.825}},{t:this.shape_283,p:{x:989.925,y:743.825}},{t:this.shape_538,p:{x:1003.4,y:746.325}},{t:this.shape_170,p:{x:1012.025,y:736.975}},{t:this.shape_862},{t:this.shape_861,p:{x:1034.275,y:741.4}},{t:this.shape_262,p:{x:1045.975,y:743.725}},{t:this.shape_272,p:{x:1056.075,y:743.825}},{t:this.shape_304,p:{x:1069.125,y:743.925}},{t:this.shape_639,p:{x:1081.6,y:746.325}},{t:this.shape_860,p:{x:1094.275,y:741.4}},{t:this.shape_859,p:{x:359.25,y:774.375}},{t:this.shape_858},{t:this.shape_316,p:{x:382.45,y:775.625}},{t:this.shape_574,p:{x:399.2,y:775.625}},{t:this.shape_499,p:{x:408,y:774.375}},{t:this.shape_245,p:{x:417.475,y:775.625}},{t:this.shape_379,p:{x:427.6,y:774.375}},{t:this.shape_215,p:{x:437.6,y:775.625}},{t:this.shape_227,p:{x:453.65,y:775.525}},{t:this.shape_274,p:{x:469.7,y:775.625}},{t:this.shape_213,p:{x:482.325,y:775.525}},{t:this.shape_342,p:{x:492.6,y:774.375}},{t:this.shape_288,p:{x:499.325,y:780.275}},{t:this.shape_857},{t:this.shape_242,p:{x:373.125,y:839.225}},{t:this.shape_253,p:{x:384.875,y:839.225}},{t:this.shape_856},{t:this.shape_285,p:{x:411.3,y:837.075}},{t:this.shape_345,p:{x:417.75,y:837.975}},{t:this.shape_631,p:{x:427.75,y:839.225}},{t:this.shape_244,p:{x:438.875,y:839.125}},{t:this.shape_235,p:{x:448.075,y:839.225}},{t:this.shape_377,p:{x:458.2,y:837.975}},{t:this.shape_261,p:{x:464.85,y:837.075}},{t:this.shape_269,p:{x:474.075,y:839.225}},{t:this.shape_207,p:{x:487.225,y:839.125}},{t:this.shape_341,p:{x:507.75,y:839.225}},{t:this.shape_202,p:{x:518.9,y:837.075}},{t:this.shape_318,p:{x:524.325,y:836.8}},{t:this.shape_275,p:{x:529.775,y:836.8}},{t:this.shape_855},{t:this.shape_224,p:{x:556.475,y:839.125}},{t:this.shape_506,p:{x:562.8,y:837.075}},{t:this.shape_198,p:{x:572.175,y:839.125}},{t:this.shape_308,p:{x:582.45,y:837.975}},{t:this.shape_321,p:{x:595.65,y:837.975}},{t:this.shape_854},{t:this.shape_444,p:{x:618.85,y:839.225}},{t:this.shape_608,p:{x:635.8,y:839.225}},{t:this.shape_218,p:{x:646.825,y:839.225}},{t:this.shape_258,p:{x:655.925,y:836.8}},{t:this.shape_282,p:{x:665.225,y:839.325}},{t:this.shape_190,p:{x:677.95,y:839.225}},{t:this.shape_699,p:{x:689.1,y:839.225}},{t:this.shape_203,p:{x:706.275,y:839.225}},{t:this.shape_297,p:{x:717.025,y:836.725}},{t:this.shape_496,p:{x:729.35,y:837.975}},{t:this.shape_853},{t:this.shape_214,p:{x:752.5,y:839.225}},{t:this.shape_173,p:{x:769.45,y:839.225}},{t:this.shape_212,p:{x:780.475,y:839.225}},{t:this.shape_182,p:{x:792.025,y:839.125}},{t:this.shape_196,p:{x:798.35,y:837.075}},{t:this.shape_199,p:{x:806.725,y:839.225}},{t:this.shape_852},{t:this.shape_251,p:{x:829.025,y:836.8}},{t:this.shape_306,p:{x:837.85,y:839.225}},{t:this.shape_228,p:{x:855.975,y:839.325}},{t:this.shape_188,p:{x:869.275,y:839.125}},{t:this.shape_456,p:{x:879.55,y:837.975}},{t:this.shape_622,p:{x:886.15,y:837.075}},{t:this.shape_250,p:{x:891.575,y:836.8}},{t:this.shape_383,p:{x:902.65,y:837.075}},{t:this.shape_232,p:{x:909.1,y:837.975}},{t:this.shape_171,p:{x:923.725,y:839.125}},{t:this.shape_186,p:{x:933.4,y:839.225}},{t:this.shape_193,p:{x:945.025,y:839.225}},{t:this.shape_185,p:{x:956.775,y:839.225}},{t:this.shape_851,p:{x:968.325,y:836.8}},{t:this.shape_265,p:{x:980.95,y:839.225}},{t:this.shape_352,p:{x:992.1,y:839.225}},{t:this.shape_317,p:{x:1006.5,y:837.975}},{t:this.shape_850,p:{x:1017.025,y:836.8}},{t:this.shape_559,p:{x:1029.65,y:839.225}},{t:this.shape_268,p:{x:1045.475,y:836.725}},{t:this.shape_255,p:{x:1051.2,y:837.075}},{t:this.shape_176,p:{x:1060.575,y:839.125}},{t:this.shape_183,p:{x:1072.725,y:839.225}},{t:this.shape_240,p:{x:1081.825,y:836.8}},{t:this.shape_246,p:{x:360.9,y:871.025}},{t:this.shape_172,p:{x:371.925,y:871.025}},{t:this.shape_184,p:{x:381.025,y:868.6}},{t:this.shape_179,p:{x:390.375,y:871.125}},{t:this.shape_206,p:{x:403.1,y:871.025}},{t:this.shape_169,p:{x:411.925,y:875.675}}]},1).to({state:[{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_439,p:{x:377.075,y:312.325}},{t:this.shape_593,p:{x:383.725,y:316.675}},{t:this.shape_514,p:{x:393.275,y:319.275}},{t:this.shape_413,p:{x:406.575,y:319.075}},{t:this.shape_407,p:{x:418.475,y:319.175}},{t:this.shape_752,p:{x:427.15,y:317.925}},{t:this.shape_712,p:{x:433.75,y:317.025}},{t:this.shape_477,p:{x:442.975,y:319.175}},{t:this.shape_403,p:{x:456.175,y:319.075}},{t:this.shape_433,p:{x:465.075,y:312.325}},{t:this.shape_787,p:{x:475.75,y:317.025}},{t:this.shape_1080},{t:this.shape_368,p:{x:499.925,y:319.175}},{t:this.shape_1079},{t:this.shape_318,p:{x:527.825,y:316.75}},{t:this.shape_446,p:{x:537.075,y:319.175}},{t:this.shape_405,p:{x:548.925,y:319.175}},{t:this.shape_1078},{t:this.shape_418,p:{x:577.225,y:319.175}},{t:this.shape_460,p:{x:587.975,y:316.675}},{t:this.shape_386,p:{x:601.925,y:319.175}},{t:this.shape_400,p:{x:613.325,y:319.175}},{t:this.shape_1077},{t:this.shape_444,p:{x:639.1,y:319.175}},{t:this.shape_1076},{t:this.shape_347,p:{x:669.95,y:319.175}},{t:this.shape_254,p:{x:681.1,y:319.175}},{t:this.shape_427,p:{x:688.95,y:317.025}},{t:this.shape_982,p:{x:697.5,y:321.675}},{t:this.shape_367,p:{x:710.125,y:319.075}},{t:this.shape_181,p:{x:722.75,y:319.175}},{t:this.shape_1075},{t:this.shape_772,p:{x:751.25,y:317.925}},{t:this.shape_359,p:{x:761.625,y:319.175}},{t:this.shape_1074},{t:this.shape_214,p:{x:793,y:319.175}},{t:this.shape_399,p:{x:804.175,y:319.075}},{t:this.shape_438,p:{x:812.025,y:316.675}},{t:this.shape_344,p:{x:821.525,y:319.175}},{t:this.shape_362,p:{x:833.175,y:319.075}},{t:this.shape_1073},{t:this.shape_353,p:{x:868.025,y:319.175}},{t:this.shape_579,p:{x:886.95,y:321.675}},{t:this.shape_335,p:{x:898.825,y:319.175}},{t:this.shape_315,p:{x:910.375,y:319.075}},{t:this.shape_859,p:{x:917.7,y:317.925}},{t:this.shape_350,p:{x:924.3,y:317.025}},{t:this.shape_382,p:{x:932.375,y:319.175}},{t:this.shape_479,p:{x:943.875,y:319.275}},{t:this.shape_275,p:{x:953.225,y:316.75}},{t:this.shape_323,p:{x:961.575,y:319.175}},{t:this.shape_312,p:{x:973.125,y:319.075}},{t:this.shape_719,p:{x:986.05,y:317.925}},{t:this.shape_319,p:{x:995.525,y:319.175}},{t:this.shape_1072},{t:this.shape_641,p:{x:1018.625,y:316.75}},{t:this.shape_371,p:{x:1026.325,y:323.825}},{t:this.shape_657,p:{y:317.25,x:1043.3}},{t:this.shape_537,p:{x:1050.05,y:317.925}},{t:this.shape_338,p:{x:360.875,y:350.975}},{t:this.shape_296,p:{x:371.425,y:350.975}},{t:this.shape_348,p:{x:384.475,y:350.875}},{t:this.shape_1071},{t:this.shape_225,p:{x:415.85,y:350.975}},{t:this.shape_476,p:{x:433.975,y:351.075}},{t:this.shape_747,p:{x:445.8,y:350.975}},{t:this.shape_605,p:{x:456.95,y:350.975}},{t:this.shape_1070},{t:this.shape_290,p:{x:487.325,y:350.975}},{t:this.shape_1069},{t:this.shape_878,p:{x:519.65,y:350.875}},{t:this.shape_278,p:{x:535.225,y:350.975}},{t:this.shape_326,p:{x:548.275,y:350.875}},{t:this.shape_571,p:{x:560.225,y:353.575}},{t:this.shape_499,p:{x:574.95,y:349.725}},{t:this.shape_422,p:{x:581.6,y:348.825}},{t:this.shape_443,p:{x:594.4,y:350.875}},{t:this.shape_631,p:{x:610.45,y:350.975}},{t:this.shape_699,p:{x:621.6,y:350.975}},{t:this.shape_263,p:{x:637.875,y:350.975}},{t:this.shape_1068},{t:this.shape_285,p:{x:662.85,y:348.825}},{t:this.shape_328,p:{x:669.3,y:349.725}},{t:this.shape_414,p:{x:681.5,y:348.825}},{t:this.shape_192,p:{x:689.4,y:350.975}},{t:this.shape_310,p:{x:706.725,y:350.875}},{t:this.shape_190,p:{x:719.35,y:350.975}},{t:this.shape_512,p:{x:731.4,y:350.975}},{t:this.shape_1067},{t:this.shape_412,p:{x:756.65,y:350.975}},{t:this.shape_1066},{t:this.shape_811,p:{x:789.8,y:350.975}},{t:this.shape_698,p:{x:800.95,y:348.825}},{t:this.shape_505,p:{x:807.4,y:349.725}},{t:this.shape_861,p:{x:817.975,y:348.55}},{t:this.shape_437,p:{x:827.25,y:348.825}},{t:this.shape_303,p:{x:836.625,y:350.875}},{t:this.shape_260,p:{x:854.325,y:350.975}},{t:this.shape_1065},{t:this.shape_305,p:{x:884.675,y:350.875}},{t:this.shape_329,p:{x:894.775,y:350.975}},{t:this.shape_1064},{t:this.shape_294,p:{x:918.275,y:350.875}},{t:this.shape_252,p:{x:927.475,y:350.975}},{t:this.shape_277,p:{x:943.95,y:350.875}},{t:this.shape_369,p:{x:956.775,y:355.625}},{t:this.shape_561,p:{x:976.725,y:349.05}},{t:this.shape_860,p:{x:989.375,y:348.55}},{t:this.shape_658,p:{x:998.65,y:348.825}},{t:this.shape_1063},{t:this.shape_633,p:{x:1019.95,y:348.825}},{t:this.shape_389,p:{x:1027.85,y:350.975}},{t:this.shape_473,p:{x:362.075,y:382.875}},{t:this.shape_178,p:{x:373.9,y:382.775}},{t:this.shape_206,p:{x:385.1,y:382.775}},{t:this.shape_384,p:{x:395.325,y:380.275}},{t:this.shape_393,p:{x:404.875,y:382.875}},{t:this.shape_258,p:{x:414.225,y:380.35}},{t:this.shape_245,p:{x:428.175,y:382.775}},{t:this.shape_1062},{t:this.shape_261,p:{x:453.15,y:380.625}},{t:this.shape_345,p:{x:459.6,y:381.525}},{t:this.shape_546,p:{x:479.15,y:382.675}},{t:this.shape_327,p:{x:495.2,y:382.775}},{t:this.shape_242,p:{x:506.775,y:382.775}},{t:this.shape_302,p:{x:519.825,y:382.675}},{t:this.shape_472,p:{x:531.55,y:382.775}},{t:this.shape_447,p:{x:545.95,y:381.525}},{t:this.shape_1061},{t:this.shape_517,p:{x:569.1,y:382.775}},{t:this.shape_291,p:{x:580.225,y:382.675}},{t:this.shape_449,p:{x:589.9,y:382.775}},{t:this.shape_984,p:{x:604.2,y:380.625}},{t:this.shape_256,p:{x:612.1,y:382.775}},{t:this.shape_300,p:{x:629.425,y:382.675}},{t:this.shape_320,p:{x:642.475,y:382.775}},{t:this.shape_284,p:{x:661.225,y:382.675}},{t:this.shape_257,p:{x:673.85,y:382.775}},{t:this.shape_363,p:{x:685.9,y:382.775}},{t:this.shape_1060},{t:this.shape_201,p:{x:714.4,y:381.525}},{t:this.shape_298,p:{x:724.825,y:382.775}},{t:this.shape_281,p:{x:742.075,y:382.675}},{t:this.shape_230,p:{x:751.75,y:382.775}},{t:this.shape_1059},{t:this.shape_423,p:{x:777,y:382.775}},{t:this.shape_235,p:{x:788.575,y:382.775}},{t:this.shape_828,p:{y:381.525,x:798.7}},{t:this.shape_401,p:{x:811.9,y:381.525}},{t:this.shape_1058},{t:this.shape_451,p:{x:835.1,y:382.775}},{t:this.shape_558,p:{x:851.8,y:382.775}},{t:this.shape_218,p:{x:862.525,y:382.775}},{t:this.shape_1057},{t:this.shape_270,p:{x:895,y:382.775}},{t:this.shape_253,p:{x:911.925,y:382.775}},{t:this.shape_293,p:{x:923.325,y:382.775}},{t:this.shape_1056},{t:this.shape_280,p:{x:949.15,y:382.775}},{t:this.shape_288,p:{x:957.975,y:387.425}},{t:this.shape_644,p:{x:358.5,y:444.45}},{t:this.shape_271,p:{x:368.175,y:446.275}},{t:this.shape_286,p:{x:386.825,y:446.375}},{t:this.shape_366,p:{x:399.875,y:446.475}},{t:this.shape_262,p:{x:411.675,y:446.275}},{t:this.shape_398,p:{x:426.95,y:446.375}},{t:this.shape_656,p:{y:446.375,x:438.55}},{t:this.shape_212,p:{x:449.825,y:446.375}},{t:this.shape_611,p:{x:466.3,y:446.275}},{t:this.shape_388,p:{x:483.2,y:448.875}},{t:this.shape_251,p:{x:492.175,y:443.95}},{t:this.shape_559,p:{x:501,y:446.375}},{t:this.shape_247,p:{x:514.925,y:439.525}},{t:this.shape_1055},{t:this.shape_376,p:{x:542.725,y:448.975}},{t:this.shape_1054,p:{x:554.6,y:444.45}},{t:this.shape_358,p:{x:565.875,y:446.475}},{t:this.shape_234,p:{x:579.175,y:446.275}},{t:this.shape_185,p:{x:591.075,y:446.375}},{t:this.shape_342,p:{x:599.7,y:445.125}},{t:this.shape_731,p:{x:606.3,y:444.225}},{t:this.shape_283,p:{x:615.525,y:446.375}},{t:this.shape_229,p:{x:628.725,y:446.275}},{t:this.shape_236,p:{x:637.625,y:439.525}},{t:this.shape_506,p:{x:648.3,y:444.225}},{t:this.shape_210,p:{x:656.2,y:446.375}},{t:this.shape_244,p:{x:672.025,y:446.275}},{t:this.shape_316,p:{x:681.7,y:446.375}},{t:this.shape_456,p:{x:691.45,y:445.125}},{t:this.shape_313,p:{x:701.875,y:446.475}},{t:this.shape_224,p:{x:713.675,y:446.275}},{t:this.shape_213,p:{x:723.925,y:446.275}},{t:this.shape_177,p:{x:733.2,y:444.225}},{t:this.shape_207,p:{x:742.575,y:446.275}},{t:this.shape_175,p:{x:754.95,y:448.875}},{t:this.shape_321,p:{x:770.25,y:445.125}},{t:this.shape_851,p:{x:780.825,y:443.95}},{t:this.shape_186,p:{x:793.45,y:446.375}},{t:this.shape_182,p:{x:810.175,y:446.275}},{t:this.shape_306,p:{x:819.85,y:446.375}},{t:this.shape_1053},{t:this.shape_304,p:{x:842.625,y:446.475}},{t:this.shape_250,p:{x:851.975,y:443.95}},{t:this.shape_317,p:{x:858.45,y:445.125}},{t:this.shape_272,p:{x:874.425,y:446.375}},{t:this.shape_297,p:{x:885.225,y:443.875}},{t:this.shape_199,p:{x:899.425,y:446.375}},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_940,p:{x:934.95,y:444.225}},{t:this.shape_198,p:{x:944.325,y:446.275}},{t:this.shape_600,p:{x:956.7,y:448.875}},{t:this.shape_379,p:{x:972,y:445.125}},{t:this.shape_850,p:{x:982.525,y:443.95}},{t:this.shape_215,p:{x:995.15,y:446.375}},{t:this.shape_173,p:{x:1012.1,y:446.375}},{t:this.shape_193,p:{x:1023.125,y:446.375}},{t:this.shape_240,p:{x:1032.225,y:443.95}},{t:this.shape_282,p:{x:1041.525,y:446.475}},{t:this.shape_274,p:{x:1054.25,y:446.375}},{t:this.shape_1050},{t:this.shape_269,p:{x:362.025,y:478.175}},{t:this.shape_268,p:{x:372.825,y:475.675}},{t:this.shape_621,p:{x:385.15,y:476.925}},{t:this.shape_1049},{t:this.shape_189,p:{x:408.3,y:478.175}},{t:this.shape_246,p:{x:425.25,y:478.175}},{t:this.shape_183,p:{x:436.275,y:478.175}},{t:this.shape_171,p:{x:447.825,y:478.075}},{t:this.shape_622,p:{x:454.15,y:476.025}},{t:this.shape_172,p:{x:462.475,y:478.175}},{t:this.shape_881,p:{y:475.85}},{t:this.shape_184,p:{x:484.775,y:475.75}},{t:this.shape_265,p:{x:493.6,y:478.175}},{t:this.shape_673,p:{x:504.8,y:478.175}},{t:this.shape_223,p:{x:517.775,y:471.325}},{t:this.shape_255,p:{x:522.9,y:476.025}},{t:this.shape_188,p:{x:532.275,y:478.075}},{t:this.shape_538,p:{x:545.75,y:480.675}},{t:this.shape_228,p:{x:558.575,y:478.275}},{t:this.shape_308,p:{x:568.95,y:476.925}},{t:this.shape_634,p:{x:577.675,y:486.575}},{t:this.shape_880,p:{x:587.275,y:476.25}},{t:this.shape_220,p:{x:597.175,y:471.325}},{t:this.shape_377,p:{x:608.85,y:476.925}},{t:this.shape_203,p:{x:619.275,y:478.175}},{t:this.shape_174,p:{x:633.725,y:471.325}},{t:this.shape_383,p:{x:638.85,y:476.025}},{t:this.shape_176,p:{x:648.225,y:478.075}},{t:this.shape_1048},{t:this.shape_179,p:{x:674.525,y:478.275}},{t:this.shape_232,p:{x:684.9,y:476.925}},{t:this.shape_238,p:{x:693.575,y:486.575}},{t:this.shape_222,p:{x:704.525,y:476.125}},{t:this.shape_170,p:{x:713.075,y:471.325}},{t:this.shape_169,p:{x:718.325,y:482.825}}]},1).to({state:[{t:this.shape_620,p:{y:318.375}},{t:this.shape_619,p:{y:320.675}},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_846,p:{y:320.675}},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_845,p:{x:470.125,y:317.775}},{t:this.shape_842,p:{y:320.675}},{t:this.shape_841,p:{y:320.675}},{t:this.shape_840,p:{y:320.7}},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1041,p:{x:611.65,y:320.675}},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_843,p:{x:675.275,y:317.775}},{t:this.shape_528,p:{x:682.575,y:317.775}},{t:this.shape_1138},{t:this.shape_966,p:{x:378.975,y:386.975}},{t:this.shape_1137},{t:this.shape_225,p:{x:401.9,y:387.075}},{t:this.shape_380,p:{x:419.025,y:387.075}},{t:this.shape_688,p:{x:435.275,y:384.575}},{t:this.shape_739,p:{x:444.825,y:387.175}},{t:this.shape_965,p:{x:458.125,y:386.975}},{t:this.shape_809,p:{x:470.025,y:387.075}},{t:this.shape_732,p:{x:478.65,y:385.825}},{t:this.shape_414,p:{x:485.3,y:384.925}},{t:this.shape_745,p:{x:494.525,y:387.075}},{t:this.shape_962,p:{x:507.675,y:386.975}},{t:this.shape_572,p:{x:526.475,y:384.65}},{t:this.shape_378,p:{x:538.625,y:387.075}},{t:this.shape_678,p:{x:550.2,y:387.075}},{t:this.shape_1136},{t:this.shape_897,p:{x:580.15,y:387.075}},{t:this.shape_471,p:{x:592.2,y:387.075}},{t:this.shape_949,p:{x:604.825,y:386.975}},{t:this.shape_1135},{t:this.shape_362,p:{x:638.925,y:386.975}},{t:this.shape_721,p:{x:645.25,y:384.925}},{t:this.shape_505,p:{x:651.7,y:385.825}},{t:this.shape_447,p:{x:659.35,y:385.825}},{t:this.shape_512,p:{x:669.3,y:387.075}},{t:this.shape_939,p:{x:681.925,y:386.975}},{t:this.shape_339,p:{x:696.8,y:384.925}},{t:this.shape_898,p:{x:703.25,y:385.825}},{t:this.shape_808,p:{x:718.075,y:387.075}},{t:this.shape_368,p:{x:728.575,y:387.075}},{t:this.shape_935,p:{x:741.625,y:386.975}},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_514,p:{x:791.175,y:387.175}},{t:this.shape_351,p:{x:803,y:387.075}},{t:this.shape_894,p:{x:814.15,y:387.075}},{t:this.shape_1132},{t:this.shape_353,p:{x:844.525,y:387.075}},{t:this.shape_798,p:{x:856.1,y:387.075}},{t:this.shape_1131},{t:this.shape_335,p:{x:892.375,y:387.075}},{t:this.shape_933,p:{x:905.425,y:386.975}},{t:this.shape_376,p:{x:917.375,y:389.675}},{t:this.shape_772,p:{x:932.15,y:385.825}},{t:this.shape_1130},{t:this.shape_454,p:{x:951.6,y:386.975}},{t:this.shape_387,p:{x:967.6,y:387.075}},{t:this.shape_389,p:{x:978.8,y:387.075}},{t:this.shape_323,p:{x:995.025,y:387.075}},{t:this.shape_217,p:{x:1006.6,y:387.075}},{t:this.shape_712,p:{x:1020,y:384.925}},{t:this.shape_1129},{t:this.shape_1020,p:{x:1038.65,y:384.925}},{t:this.shape_1128},{t:this.shape_507,p:{x:362.175,y:418.775}},{t:this.shape_977,p:{x:374.8,y:418.875}},{t:this.shape_1127},{t:this.shape_992,p:{x:399.15,y:416.55}},{t:this.shape_691,p:{x:412.15,y:418.875}},{t:this.shape_932,p:{x:424.4,y:416.55}},{t:this.shape_478,p:{x:445.3,y:418.875}},{t:this.shape_243,p:{x:456.45,y:416.725}},{t:this.shape_690,p:{x:462.9,y:417.625}},{t:this.shape_1126},{t:this.shape_209,p:{x:482.7,y:416.725}},{t:this.shape_500,p:{x:492.075,y:418.775}},{t:this.shape_319,p:{x:509.825,y:418.875}},{t:this.shape_1125},{t:this.shape_315,p:{x:540.175,y:418.775}},{t:this.shape_735,p:{x:550.275,y:418.875}},{t:this.shape_1124},{t:this.shape_312,p:{x:573.775,y:418.775}},{t:this.shape_296,p:{x:582.975,y:418.875}},{t:this.shape_867,p:{x:599.45,y:418.775}},{t:this.shape_482,p:{x:612.275,y:423.525}},{t:this.shape_561,p:{x:632.225,y:416.95}},{t:this.shape_1018,p:{x:644.875,y:416.45}},{t:this.shape_963,p:{x:657.5,y:418.875}},{t:this.shape_800,p:{x:674.375,y:418.875}},{t:this.shape_730,p:{x:685.825,y:418.875}},{t:this.shape_1123},{t:this.shape_559,p:{x:711.6,y:418.875}},{t:this.shape_604,p:{x:727.425,y:416.375}},{t:this.shape_305,p:{x:735.575,y:418.775}},{t:this.shape_726,p:{x:745.675,y:418.875}},{t:this.shape_545,p:{x:762.3,y:418.775}},{t:this.shape_811,p:{x:786.2,y:418.875}},{t:this.shape_698,p:{x:797.35,y:416.725}},{t:this.shape_401,p:{x:803.8,y:417.625}},{t:this.shape_956,p:{x:814.375,y:416.45}},{t:this.shape_953,p:{x:823.65,y:416.725}},{t:this.shape_497,p:{x:833.025,y:418.775}},{t:this.shape_345,p:{x:848.85,y:417.625}},{t:this.shape_946,p:{x:859.425,y:416.45}},{t:this.shape_591,p:{x:872.05,y:418.875}},{t:this.shape_593,p:{x:887.875,y:416.375}},{t:this.shape_479,p:{x:897.425,y:418.975}},{t:this.shape_458,p:{x:910.725,y:418.775}},{t:this.shape_788,p:{x:922.625,y:418.875}},{t:this.shape_537,p:{x:931.25,y:417.625}},{t:this.shape_640,p:{x:937.85,y:416.725}},{t:this.shape_725,p:{x:947.125,y:418.875}},{t:this.shape_453,p:{x:960.275,y:418.775}},{t:this.shape_540,p:{x:980.8,y:418.875}},{t:this.shape_343,p:{x:991.95,y:416.725}},{t:this.shape_727,p:{x:997.375,y:416.45}},{t:this.shape_717,p:{x:1002.825,y:416.45}},{t:this.shape_578,p:{x:1017.25,y:418.875}},{t:this.shape_1122},{t:this.shape_607,p:{x:1040.6,y:418.875}},{t:this.shape_757,p:{x:1051.925,y:418.875}},{t:this.shape_476,p:{x:1063.375,y:418.975}},{t:this.shape_416,p:{x:1073.75,y:417.625}},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_585,p:{x:378.975,y:448.25}},{t:this.shape_363,p:{x:391.6,y:450.675}},{t:this.shape_440,p:{x:404.275,y:450.575}},{t:this.shape_177,p:{x:419.1,y:448.525}},{t:this.shape_499,p:{x:425.55,y:449.425}},{t:this.shape_350,p:{x:437.75,y:448.525}},{t:this.shape_791,p:{x:445.7,y:450.675}},{t:this.shape_324,p:{x:459.05,y:448.525}},{t:this.shape_417,p:{x:468.475,y:450.575}},{t:this.shape_264,p:{x:480.4,y:450.675}},{t:this.shape_612,p:{x:492.325,y:450.675}},{t:this.shape_541,p:{x:505.275,y:448.25}},{t:this.shape_736,p:{x:516.2,y:450.675}},{t:this.shape_1119},{t:this.shape_223,p:{x:543.275,y:443.825}},{t:this.shape_750,p:{x:551.025,y:450.675}},{t:this.shape_290,p:{x:561.525,y:450.675}},{t:this.shape_518,p:{x:570.625,y:448.25}},{t:this.shape_475,p:{x:576.125,y:448.25}},{t:this.shape_316,p:{x:584.95,y:450.675}},{t:this.shape_1118},{t:this.shape_220,p:{x:606.475,y:443.825}},{t:this.shape_432,p:{x:611.725,y:455.325}},{t:this.shape_1054,p:{x:361.9,y:512.35}},{t:this.shape_473,p:{x:373.175,y:514.375}},{t:this.shape_413,p:{x:386.475,y:514.175}},{t:this.shape_746,p:{x:398.375,y:514.275}},{t:this.shape_610,p:{x:407.05,y:513.025}},{t:this.shape_658,p:{x:413.65,y:512.125}},{t:this.shape_602,p:{x:422.875,y:514.275}},{t:this.shape_403,p:{x:436.075,y:514.175}},{t:this.shape_574,p:{x:447.8,y:514.275}},{t:this.shape_741,p:{x:463.775,y:514.275}},{t:this.shape_278,p:{x:474.325,y:514.275}},{t:this.shape_367,p:{x:487.375,y:514.175}},{t:this.shape_1117},{t:this.shape_1008,p:{x:518.75,y:514.275}},{t:this.shape_633,p:{x:533.05,y:512.125}},{t:this.shape_348,p:{x:542.425,y:514.175}},{t:this.shape_173,p:{x:554.35,y:514.275}},{t:this.shape_501,p:{x:566.275,y:514.275}},{t:this.shape_1116},{t:this.shape_605,p:{x:590.15,y:514.275}},{t:this.shape_912,p:{x:602.4,y:511.95}},{t:this.shape_460,p:{x:619.175,y:511.775}},{t:this.shape_294,p:{x:627.325,y:514.175}},{t:this.shape_480,p:{x:637.425,y:514.275}},{t:this.shape_1115},{t:this.shape_263,p:{x:675.175,y:514.275}},{t:this.shape_326,p:{x:688.225,y:514.175}},{t:this.shape_306,p:{x:706.45,y:514.275}},{t:this.shape_876,p:{x:717.8,y:514.275}},{t:this.shape_557,p:{x:729.3,y:514.275}},{t:this.shape_310,p:{x:741.925,y:514.175}},{t:this.shape_496,p:{x:752.2,y:513.025}},{t:this.shape_1114},{t:this.shape_280,p:{x:774.1,y:514.275}},{t:this.shape_391,p:{x:782.975,y:518.925}},{t:this.shape_1113},{t:this.shape_371,p:{x:800.475,y:518.925}},{t:this.shape_260,p:{x:814.525,y:514.275}},{t:this.shape_1112},{t:this.shape_393,p:{x:846.225,y:514.375}},{t:this.shape_267,p:{x:856.6,y:513.025}},{t:this.shape_456,p:{x:864.25,y:513.025}},{t:this.shape_477,p:{x:874.625,y:514.275}},{t:this.shape_303,p:{x:887.775,y:514.175}},{t:this.shape_506,p:{x:902.65,y:512.125}},{t:this.shape_211,p:{x:910.55,y:514.275}},{t:this.shape_603,p:{x:926.575,y:514.275}},{t:this.shape_424,p:{x:934.175,y:511.85}},{t:this.shape_301,p:{x:939.65,y:512.125}},{t:this.shape_502,p:{x:947.775,y:514.275}},{t:this.shape_553,p:{x:959.125,y:511.85}},{t:this.shape_508,p:{x:970,y:514.275}},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_446,p:{x:1012.925,y:514.275}},{t:this.shape_291,p:{x:1024.575,y:514.175}},{t:this.shape_1108},{t:this.shape_342,p:{x:1042.95,y:513.025}},{t:this.shape_419,p:{x:1057.775,y:514.275}},{t:this.shape_252,p:{x:1068.325,y:514.275}},{t:this.shape_302,p:{x:1081.375,y:514.175}},{t:this.shape_909,p:{y:543.75}},{t:this.shape_435,p:{x:374.8,y:546.075}},{t:this.shape_407,p:{x:391.725,y:546.075}},{t:this.shape_245,p:{x:402.225,y:546.075}},{t:this.shape_394,p:{x:411.325,y:543.65}},{t:this.shape_357,p:{x:416.825,y:543.65}},{t:this.shape_270,p:{x:425.65,y:546.075}},{t:this.shape_1107},{t:this.shape_438,p:{x:454.675,y:543.575}},{t:this.shape_281,p:{x:462.825,y:545.975}},{t:this.shape_418,p:{x:472.925,y:546.075}},{t:this.shape_878,p:{x:489.5,y:545.975}},{t:this.shape_1106},{t:this.shape_285,p:{x:524.6,y:543.925}},{t:this.shape_204,p:{x:531.05,y:544.825}},{t:this.shape_582,p:{x:541.575,y:543.65}},{t:this.shape_196,p:{x:550.85,y:543.925}},{t:this.shape_300,p:{x:560.275,y:545.975}},{t:this.shape_379,p:{x:576.1,y:544.825}},{t:this.shape_580,p:{x:586.675,y:543.65}},{t:this.shape_1105},{t:this.shape_405,p:{x:616.175,y:546.075}},{t:this.shape_400,p:{x:627.625,y:546.075}},{t:this.shape_1104},{t:this.shape_452,p:{x:653.4,y:546.075}},{t:this.shape_1103},{t:this.shape_242,p:{x:683.025,y:546.075}},{t:this.shape_254,p:{x:694.6,y:546.075}},{t:this.shape_643,p:{x:708,y:543.925}},{t:this.shape_321,p:{x:714.45,y:544.825}},{t:this.shape_539,p:{x:730.575,y:543.65}},{t:this.shape_235,p:{x:742.725,y:546.075}},{t:this.shape_472,p:{x:754.3,y:546.075}},{t:this.shape_1102},{t:this.shape_893,p:{x:784.25,y:546.075}},{t:this.shape_249,p:{x:796.3,y:546.075}},{t:this.shape_284,p:{x:808.975,y:545.975}},{t:this.shape_383,p:{x:823.8,y:543.925}},{t:this.shape_271,p:{x:833.175,y:545.975}},{t:this.shape_359,p:{x:851.825,y:546.075}},{t:this.shape_366,p:{x:864.875,y:546.175}},{t:this.shape_262,p:{x:876.675,y:545.975}},{t:this.shape_372,p:{x:891.95,y:546.075}},{t:this.shape_436,p:{x:903.55,y:546.075}},{t:this.shape_218,p:{x:914.825,y:546.075}},{t:this.shape_1101},{t:this.shape_276,p:{x:948.2,y:548.575}},{t:this.shape_322,p:{x:957.175,y:543.65}},{t:this.shape_423,p:{x:966,y:546.075}},{t:this.shape_369,p:{x:974.825,y:550.725}},{t:this.shape_174,p:{x:357.875,y:602.825}},{t:this.shape_784,p:{x:367.4,y:607.725}},{t:this.shape_344,p:{x:380.425,y:609.675}},{t:this.shape_234,p:{x:393.575,y:609.575}},{t:this.shape_718,p:{x:403.85,y:608.425}},{t:this.shape_244,p:{x:412.875,y:609.575}},{t:this.shape_329,p:{x:423.025,y:609.675}},{t:this.shape_318,p:{x:432.225,y:607.25}},{t:this.shape_384,p:{x:444.825,y:607.175}},{t:this.shape_275,p:{x:450.525,y:607.25}},{t:this.shape_320,p:{x:459.775,y:609.675}},{t:this.shape_1100},{t:this.shape_170,p:{x:485.475,y:602.825}},{t:this.shape_628,p:{x:496.875,y:609.65}},{t:this.shape_437,p:{x:508.65,y:607.525}},{t:this.shape_229,p:{x:518.025,y:609.575}},{t:this.shape_298,p:{x:536.625,y:609.675}},{t:this.shape_358,p:{x:549.725,y:609.775}},{t:this.shape_224,p:{x:561.525,y:609.575}},{t:this.shape_354,p:{x:576.8,y:609.675}},{t:this.shape_920,p:{x:588.4,y:609.675}},{t:this.shape_212,p:{x:599.625,y:609.675}},{t:this.shape_227,p:{x:616.1,y:609.575}},{t:this.shape_754,p:{x:633,y:612.175}},{t:this.shape_258,p:{x:641.975,y:607.25}},{t:this.shape_186,p:{x:650.8,y:609.675}},{t:this.shape_1099},{t:this.shape_377,p:{x:671.4,y:608.425}},{t:this.shape_931,p:{x:681.925,y:607.25}},{t:this.shape_412,p:{x:694.55,y:609.675}},{t:this.shape_386,p:{x:711.475,y:609.675}},{t:this.shape_293,p:{x:722.875,y:609.675}},{t:this.shape_1098},{t:this.shape_347,p:{x:748.7,y:609.675}},{t:this.shape_1097},{t:this.shape_261,p:{x:779.75,y:607.525}},{t:this.shape_232,p:{x:786.25,y:608.425}},{t:this.shape_560,p:{x:796.775,y:607.25}},{t:this.shape_622,p:{x:806.05,y:607.525}},{t:this.shape_213,p:{x:815.425,y:609.575}},{t:this.shape_286,p:{x:834.075,y:609.675}},{t:this.shape_313,p:{x:847.125,y:609.775}},{t:this.shape_182,p:{x:858.925,y:609.575}},{t:this.shape_297,p:{x:877.975,y:607.175}},{t:this.shape_304,p:{x:887.525,y:609.775}},{t:this.shape_207,p:{x:900.825,y:609.575}},{t:this.shape_382,p:{x:912.725,y:609.675}},{t:this.shape_195,p:{x:921.35,y:608.425}},{t:this.shape_202,p:{x:927.95,y:607.525}},{t:this.shape_283,p:{x:937.225,y:609.675}},{t:this.shape_198,p:{x:950.375,y:609.575}},{t:this.shape_255,p:{x:965.25,y:607.525}},{t:this.shape_589,p:{x:973.15,y:609.675}},{t:this.shape_274,p:{x:989.9,y:609.675}},{t:this.shape_656,p:{y:609.675,x:1001.5}},{t:this.shape_230,p:{x:1013.2,y:609.675}},{t:this.shape_338,p:{x:1024.575,y:609.675}},{t:this.shape_282,p:{x:1036.025,y:609.775}},{t:this.shape_308,p:{x:1046.4,y:608.425}},{t:this.shape_327,p:{x:1056.35,y:609.675}},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_253,p:{x:367.275,y:641.475}},{t:this.shape_199,p:{x:377.775,y:641.475}},{t:this.shape_251,p:{x:386.875,y:639.05}},{t:this.shape_250,p:{x:392.325,y:639.05}},{t:this.shape_257,p:{x:401.15,y:641.475}},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_240,p:{x:434.975,y:639.05}},{t:this.shape_193,p:{x:443.325,y:641.475}},{t:this.shape_178,p:{x:454.9,y:641.475}},{t:this.shape_201,p:{x:463.75,y:640.225}},{t:this.shape_288,p:{x:470.475,y:646.125}},{t:this.shape_1092},{t:this.shape_272,p:{x:374.125,y:705.075}},{t:this.shape_228,p:{x:387.175,y:705.175}},{t:this.shape_185,p:{x:404.775,y:705.075}},{t:this.shape_183,p:{x:415.275,y:705.075}},{t:this.shape_188,p:{x:428.325,y:704.975}},{t:this.shape_256,p:{x:445.6,y:705.075}},{t:this.shape_181,p:{x:456.8,y:705.075}},{t:this.shape_265,p:{x:468.85,y:705.075}},{t:this.shape_706,p:{x:484.15,y:703.825}},{t:this.shape_555,p:{x:494.675,y:702.65}},{t:this.shape_189,p:{x:507.3,y:705.075}},{t:this.shape_171,p:{x:524.025,y:704.975}},{t:this.shape_206,p:{x:533.7,y:705.075}},{t:this.shape_563,p:{x:544.85,y:705.075}},{t:this.shape_179,p:{x:556.475,y:705.175}},{t:this.shape_184,p:{x:565.825,y:702.65}},{t:this.shape_621,p:{x:572.35,y:703.825}},{t:this.shape_269,p:{x:588.325,y:705.075}},{t:this.shape_268,p:{x:599.075,y:702.575}},{t:this.shape_317,p:{x:611.4,y:703.825}},{t:this.shape_547,p:{x:621.925,y:702.65}},{t:this.shape_940,p:{x:631.2,y:702.925}},{t:this.shape_210,p:{x:639.1,y:705.075}},{t:this.shape_203,p:{x:656.275,y:705.075}},{t:this.shape_176,p:{x:669.475,y:704.975}},{t:this.shape_579,p:{x:688.5,y:707.575}},{t:this.shape_172,p:{x:700.375,y:705.075}},{t:this.shape_1091},{t:this.shape_215,p:{x:724.7,y:705.075}},{t:this.shape_1090},{t:this.shape_169,p:{x:751.375,y:709.725}}]},1).wait(1));

	// text_bg
	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#1A1A1A").s().p("A0lCfIAAk9MApLAAAIAAE9g");
	this.shape_1153.setTransform(742.6621,562.1772,3.0718,19.994);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#1A1A1A").s().p("Eg/FAVuMAAAgrbMB+LAAAMAAAArbg");
	this.shape_1154.setTransform(741.7,172.6395,1,0.5252);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#1A1A1A").s().p("Eg/FAVuMAAAgrbMB+LAAAMAAAArbg");
	this.shape_1155.setTransform(741.7,587.4451,1,2.0419);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#1A1A1A").s().p("Eg/AAVuMAAAgrbMB+BAAAMAAAArbg");
	this.shape_1156.setTransform(741.25,202.5844,1,0.7244);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#1A1A1A").s().p("Eg/AAVuMAAAgrbMB+BAAAMAAAArbg");
	this.shape_1157.setTransform(741.25,691.5356,1,1.3399);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#1A1A1A").s().p("Eg/AAd/MAAAg79MB+BAAAMAAAA79g");
	this.shape_1158.setTransform(741.25,295.525);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#1A1A1A").s().p("A0lCfIAAk9MApLAAAIAAE9g");
	this.shape_1159.setTransform(741.2283,350.6494,3.0604,15.7129);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1153,p:{scaleX:3.0718,scaleY:19.994,x:742.6621,y:562.1772}}]},1).to({state:[{t:this.shape_1155},{t:this.shape_1154}]},1).to({state:[{t:this.shape_1157},{t:this.shape_1156}]},1).to({state:[{t:this.shape_1158},{t:this.shape_1153,p:{scaleX:3.0605,scaleY:7.4854,x:741.2341,y:754.5649}}]},1).to({state:[{t:this.shape_1159},{t:this.shape_1153,p:{scaleX:3.0162,scaleY:3.2497,x:740.2128,y:830.0083}}]},1).to({state:[{t:this.shape_1153,p:{scaleX:3.0535,scaleY:20.2275,x:740.3034,y:422.9425}}]},1).wait(1));

	// ai_js_code
	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#059245").s().p("AAYBMQgWAAgIgJQgJgJAAgVIAAg/IgfAAIAAgPIAfAAIAAgiIASAAIAAAiIAsAAIAAAPIgsAAIAAA/QAAANAFAFQAFAFANAAIAVAAIAAAQg");
	this.shape_1160.setTransform(893.3,273.825);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#059245").s().p("AgvBTIAAiiIATAAIAAAPQAFgJAIgFQAIgEAJAAQAWAAAMARQAMAQAAAeQAAAbgMARQgMAQgWAAQgJAAgIgFQgIgEgFgJIAAA8gAgUg2QgIALAAAXQAAAWAIALQAGAMAOAAQAOAAAHgMQAHgLAAgWQAAgXgHgLQgHgMgOABQgOgBgGAMg");
	this.shape_1161.setTransform(881.05,277.6);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#059245").s().p("AgvBSIAAgPIAmAAIAAhXIgeAAIAAgPIAxAAIAABmIAmAAIAAAPgAgJg4IAAgZIATAAIAAAZg");
	this.shape_1162.setTransform(868.575,273.225);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#059245").s().p("AgpA9IAAh1IATAAIAAAWQAGgMAJgHQAKgHAOAAQAGAAAHACQAGACAGAEIAAATQgGgEgHgDQgGgCgIAAQgRAAgJAMQgLALAAAVIAAA7g");
	this.shape_1163.setTransform(856.3,275.35);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f("#059245").s().p("AgdAuQgQgRAAgdQAAgcAQgQQAPgRAbAAQAIAAAIACQAIADAJAEIAAAUQgIgHgIgCQgIgDgJAAQgSAAgJAMQgKALAAAVQAAAWAKAMQAJAMASAAQAKAAAIgEQAIgDAHgGIAAAUQgIAEgIADQgJACgIAAQgbAAgPgQg");
	this.shape_1164.setTransform(841.925,275.5);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#059245").s().p("AgZBPQgLgCgMgFIAAgWQANAHAKAEQALAEALAAQAPAAAJgIQAJgHAAgNQAAgMgGgGQgGgGgPgEIgLgCQgWgFgKgJQgKgKAAgRQAAgVAPgNQAOgNAWAAQAJAAAKADQAKACALAEIAAAVQgJgGgKgDQgKgDgKAAQgOAAgIAHQgJAHAAAMQAAAKAGAGQAFAFAQAEIAKACQAWAFAKALQALALAAATQAAAWgOAMQgOAMgaAAQgLAAgLgDg");
	this.shape_1165.setTransform(828.875,273.525);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f("#059245").s().p("AglA0QgLgKAAgSQAAgTAOgKQANgKAYABIAaAAIAAgDQAAgPgHgGQgHgHgPABQgJAAgKADQgKACgKAGIAAgTQALgFAKgCQAJgCAJAAQAOAAALAEQAKAFAHAJQAEAFABAHQACAIAAAQIAABCIgUAAIAAgSQgGALgJAFQgKAFgMAAQgSAAgLgKgAgUAFQgIAHAAALQAAALAGAGQAHAGALAAQAPAAAJgMQAJgKAAgUIAAgEIgSAAIgGAAQgQAAgJAFg");
	this.shape_1166.setTransform(815.675,275.5);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#059245").s().p("AgLA7Igrh1IAUAAIAiBiIAihiIAUAAIgpB1g");
	this.shape_1167.setTransform(802.95,275.5);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#059245").s().p("AglA0QgLgKAAgSQAAgTAOgKQANgKAYABIAaAAIAAgDQAAgPgHgGQgHgHgPABQgJAAgKADQgKACgKAGIAAgTQALgFAKgCQAJgCAJAAQAOAAALAEQAKAFAHAJQAEAFABAHQACAIAAAQIAABCIgUAAIAAgSQgGALgJAFQgKAFgMAAQgSAAgLgKgAgUAFQgIAHAAALQAAALAGAGQAHAGALAAQAPAAAJgMQAJgKAAgUIAAgEIgSAAIgGAAQgQAAgJAFg");
	this.shape_1168.setTransform(789.775,275.5);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#059245").s().p("AgXBOQgKgCgLgFIAAgZQAKAIAKAFQAKAEALAAQAOAAAGgIQAGgIAAgVIAAhXIgnAAIAAgSIA9AAIAABpQAAAegMAMQgLAMgZAAQgKAAgKgCg");
	this.shape_1169.setTransform(776.125,273.675);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f("#059245").s().p("AgNBSIAAhmIggAAIAAgPIAgAAIAAgJQAAgSAJgKQAIgJATAAIAXAAIAAAQIgWAAQgLAAgEAEQgEAFAAALIAAAKIApAAIAAAPIgpAAIAABmg");
	this.shape_1170.setTransform(751.225,273.2);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#059245").s().p("AglAuQgMgQAAgeQAAgdAMgQQAOgQAXAAQAYAAANAQQANAQABAdQgBAegNAQQgNAQgYAAQgXAAgOgQgAgVghQgIALAAAWQAAAXAIALQAHAMAOAAQAPAAAIgMQAHgLAAgXQAAgWgHgLQgIgMgPABQgOgBgHAMg");
	this.shape_1171.setTransform(738.15,275.5);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f("#059245").s().p("AgkAuQgPgRAAgdQAAgbAOgRQAQgRAYAAQAXAAANAPQANAQAAAVIAAAJIhSAAIAAABQgBAXAKALQAKALARAAQAJAAAKgEQAKgCAMgHIAAAUQgLAEgKADQgLACgJAAQgbAAgPgQgAAhgOQgBgNgIgIQgHgJgOAAQgOgBgJAKQgJAJAAAMIA+AAIAAAAg");
	this.shape_1172.setTransform(712.25,275.5);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#059245").s().p("AAWBSQgSAAgIgLQgKgLAAgUIAAhqIgfAAIAAgPIAyAAIAAB5QgBANAFAGQAFAHAKAAIAWAAIAAAQg");
	this.shape_1173.setTransform(699.9,273.175);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f("#059245").s().p("AgvBTIAAiiIATAAIAAAPQAFgJAIgFQAIgEAJAAQAWAAAMARQAMAQAAAeQAAAbgMARQgMAQgWAAQgJAAgIgFQgIgEgFgJIAAA8gAgUg2QgIALAAAXQAAAWAIALQAGAMAOAAQAOAAAHgMQAHgLAAgWQAAgXgHgLQgHgMgOABQgOgBgGAMg");
	this.shape_1174.setTransform(686.65,277.6);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#059245").s().p("AAlA9IAAhDQAAgZgEgGQgCgGgIAAQgIAAgDAHQgDAFAAAZIAABDIgRAAIAAhDQAAgagDgFQgDgGgIAAQgHAAgEAHQgCAFAAAZIAABDIgSAAIAAh1IASAAIAAAKQADgHAGgDQAFgDAGgBQAIABAFADQAFAEADAIQADgIAGgEQAFgDAJgBQAOABAFAKQAGALAAAfIAABEg");
	this.shape_1175.setTransform(673.4,275.35);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#059245").s().p("AglA0QgLgKAAgSQAAgTAOgKQANgKAYABIAaAAIAAgDQAAgPgHgGQgHgHgPABQgJAAgKADQgKACgKAGIAAgTQALgFAKgCQAJgCAJAAQAOAAALAEQAKAFAHAJQAEAFABAHQACAIAAAQIAABCIgUAAIAAgSQgGALgJAFQgKAFgMAAQgSAAgLgKgAgUAFQgIAHAAALQAAALAGAGQAHAGALAAQAPAAAJgMQAJgKAAgUIAAgEIgSAAIgGAAQgQAAgJAFg");
	this.shape_1176.setTransform(660.175,275.5);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#059245").s().p("AAjA7IgjgvIghAvIgXAAIAvg9Igrg4IAVAAIAfArIAfgrIAWAAIgqA4IAuA9g");
	this.shape_1177.setTransform(647.4,275.5);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#059245").s().p("AgkAuQgPgRAAgdQAAgbAOgRQAQgRAYAAQAWAAAOAPQANAQAAAVIAAAJIhTAAIAAABQAAAXAKALQAKALARAAQAJAAAKgEQAKgCAMgHIAAAUQgLAEgKADQgLACgJAAQgaAAgQgQgAAhgOQgBgNgIgIQgHgJgOAAQgOgBgJAKQgJAJgBAMIA/AAIAAAAg");
	this.shape_1178.setTransform(634.5,275.5);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#059245").s().p("AAaA9IAAhIQAAgRgGgHQgGgHgMgBQgMAAgHAKQgIAJAAASIAABDIgTAAIAAh1IATAAIAAARQAFgKAJgFQAJgFALgBQASABAJAMQAJALAAAZIAABIg");
	this.shape_1179.setTransform(608.625,275.35);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#059245").s().p("AglA0QgLgKAAgSQAAgTAOgKQANgKAYABIAaAAIAAgDQAAgPgHgGQgHgHgPABQgJAAgKADQgKACgKAGIAAgTQALgFAKgCQAJgCAJAAQAOAAALAEQAKAFAHAJQAEAFABAHQACAIAAAQIAABCIgUAAIAAgSQgGALgJAFQgKAFgMAAQgSAAgLgKgAgUAFQgIAHAAALQAAALAGAGQAHAGALAAQAPAAAJgMQAJgKAAgUIAAgEIgSAAIgGAAQgQAAgJAFg");
	this.shape_1180.setTransform(595.375,275.5);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#059245").s().p("AgVA8IgVgFIAAgVQALAGAKADQAJADAJAAQANAAAGgGQAIgEgBgKQAAgNgZgGIAAAAIgIgCQgQgCgIgIQgHgHAAgNQAAgSALgIQALgKAVAAQAJAAAJACQAIACAJADIAAATQgIgFgIgCQgJgCgJAAQgMAAgGAEQgHAEAAAIQAAAIAFAFQAEAEATADIAIACQAPACAGAIQAIAIAAANQAAASgMAJQgNAKgVAAIgSgCg");
	this.shape_1181.setTransform(569.7,275.5);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f("#059245").s().p("AgvBSIAAgPIAmAAIAAhXIgeAAIAAgPIAxAAIAABmIAmAAIAAAPgAgJg4IAAgZIATAAIAAAZg");
	this.shape_1182.setTransform(557.525,273.225);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#059245").s().p("AgkAuQgQgRAAgdQABgbAPgRQAPgRAYAAQAWAAAOAPQANAQABAVIAAAJIhUAAIAAABQgBAXALALQAKALARAAQAKAAAKgEQAJgCAMgHIAAAUQgLAEgKADQgLACgJAAQgbAAgPgQgAAhgOQgBgNgHgIQgJgJgOAAQgMgBgKAKQgJAJgBAMIA/AAIAAAAg");
	this.shape_1183.setTransform(530.85,275.5);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f("#059245").s().p("AgjBDQgMgRAAgdQAAgcAMgQQAMgRAWAAQAJABAIAEQAIAFAFAIIAAg9IATAAIAACkIgTAAIAAgQQgFAKgIAEQgIAEgJAAQgWAAgMgQgAgUgMQgHAMAAAVQAAAXAHAMQAIALAMAAQAPAAAGgLQAIgMAAgXQAAgVgIgMQgGgLgPAAQgMAAgIALg");
	this.shape_1184.setTransform(517.45,273.35);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#059245").s().p("AgkAuQgOgQAAgeQAAgdAOgQQANgQAXAAQAYAAANAQQAOAQAAAdQAAAegOAQQgNAQgYAAQgXAAgNgQgAgWghQgHALAAAWQAAAXAHALQAIAMAOAAQAPAAAHgMQAIgLAAgXQAAgWgIgLQgHgMgPABQgOgBgIAMg");
	this.shape_1185.setTransform(504.85,275.5);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#059245").s().p("AgdAuQgQgRAAgdQAAgcAQgQQAPgRAbAAQAIAAAIACQAIADAJAEIAAAUQgIgHgIgCQgIgDgJAAQgSAAgJAMQgKALAAAVQAAAWAKAMQAJAMASAAQAKAAAIgEQAIgDAHgGIAAAUQgIAEgIADQgJACgIAAQgbAAgPgQg");
	this.shape_1186.setTransform(492.025,275.5);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#059245").s().p("AgWA8QgJgCgLgDIAAgVQALAGAJADQALADAIAAQAMAAAIgGQAGgEAAgKQAAgNgYgGIgBAAIgHgCQgRgCgIgIQgHgHgBgNQAAgSAMgIQALgKAUAAQAKAAAJACQAIACAJADIAAATQgIgFgJgCQgIgCgJAAQgMAAgHAEQgGAEAAAIQAAAIAFAFQAFAEASADIAIACQAOACAIAIQAHAIAAANQAAASgNAJQgMAKgVAAIgTgCg");
	this.shape_1187.setTransform(466.05,275.5);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f("#059245").s().p("AgvBSIAAgPIAmAAIAAhXIgeAAIAAgPIAxAAIAABmIAmAAIAAAPgAgJg4IAAgZIATAAIAAAZg");
	this.shape_1188.setTransform(453.825,273.225);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#059245").s().p("AAaBSIAAhJQAAgPgGgIQgGgHgMAAQgMAAgHAKQgIAJAAARIAABDIgTAAIAAijIATAAIAABAQAFgKAJgGQAJgFALAAQASAAAJAMQAJAMAAAXIAABJg");
	this.shape_1189.setTransform(440.125,273.2);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f("#059245").s().p("AgJBPIAAiLIgyAAIAAgSIB3AAIAAASIgxAAIAACLg");
	this.shape_1190.setTransform(427.1,273.525);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#059245").s().p("AgyBZIBSixIATAAIhSCxg");
	this.shape_1191.setTransform(400.95,274.525);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f("#059245").s().p("AgzBZIBTixIAUAAIhSCxg");
	this.shape_1192.setTransform(387.95,274.525);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#FFFFFF").s().p("AgSBBIAJgjIAAgZIAcAAIAAAZIgSAjgAgKgfIAAghIAcAAIAAAhg");
	this.shape_1193.setTransform(779.425,797.875);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f("#FFFFFF").s().p("AgUBVQALgUAHgXQAFgVAAgVQAAgUgFgWQgHgXgLgTIAOAAQANAVAHAWQAHAWAAATQAAAUgHAWQgGAUgOAXg");
	this.shape_1194.setTransform(768.225,794.85);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#0BFFFF").s().p("AgpBHIAAgQIAvg0QAIgIAFgKQADgGAAgIQAAgLgHgHQgHgHgLAAQgHAAgLADQgIADgLAGIAAgTQAJgEAKgCQAKgDAIAAQATAAANALQAMALAAASQABAIgFAJQgEAJgKAKIgsAxIA/AAIAAAQg");
	this.shape_1195.setTransform(757,794.675);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_1196.setTransform(745.6,804.3);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#0BFFFF").s().p("AgfAoQgPgOAAgaQAAgYAOgPQAOgPAVAAQAUAAALAOQAMANABAUIAAAHIhKAAIAAAAQAAAVAIAKQAKAJAOAAQAKAAAIgCQAHgCALgGIAAARQgKAEgIACQgIACgKAAQgYAAgMgPgAgSgfQgHAJgBAKIA4AAQgCgLgGgIQgIgIgMAAQgLAAgJAIg");
	this.shape_1197.setTransform(734.2,796.525);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f("#0BFFFF").s().p("AATBJQgPAAgIgKQgJgKAAgSIAAhdIgbAAIAAgOIAsAAIAABrQAAAMAEAFQAFAGAHAAIAUAAIAAAPg");
	this.shape_1198.setTransform(723.25,794.475);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#0BFFFF").s().p("AgNBGQgIgEgDgIIAAANIgSAAIAAiQIASAAIAAA2QADgHAIgEQAHgFAJAAQASAAALAPQALAPAAAYQAAAZgLAPQgLAPgTAAQgJAAgGgEgAgSgKQgGAKAAATQAAAUAGAKQAHAKALAAQAMAAAHgKQAGgKAAgUQAAgTgGgKQgHgKgMAAQgLAAgHAKg");
	this.shape_1199.setTransform(711.525,794.625);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f("#0BFFFF").s().p("AggAuQgKgJAAgPQAAgSALgIQANgJAVAAIAXAAIAAgCQgBgNgFgFQgHgGgNAAQgHAAgKACQgKADgHAFIAAgRIASgGIAQgCQAMAAAKAEQAIAEAHAIQADAEABAHQACAHAAAOIAAA6IgRAAIAAgPQgHAKgHADQgIAFgLAAQgRAAgIgJgAgSAFQgHAGAAAKQAAAJAFAFQAHAGAJAAQANAAAIgKQAIgJABgSIAAgEIgWAAQgOAAgIAFg");
	this.shape_1200.setTransform(699.55,796.525);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAjAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_1201.setTransform(689,794.525);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f("#0BFFFF").s().p("AgkA1IAAhnIARAAIAAAVQAEgLAJgGQAJgHAMAAQAHAAAEACIALAFIAAASIgLgHQgGgBgGAAQgQgBgIAKQgIALgBARIAAA0g");
	this.shape_1202.setTransform(678.1,796.4);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#0BFFFF").s().p("AghAuQgJgKAAgOQAAgSAMgIQALgJAWAAIAXAAIAAgCQAAgNgHgFQgGgGgNAAQgHAAgKACIgSAIIAAgRIATgGIAQgCQAMAAAKAEQAIAEAHAIQADAFACAGQABAHAAAOIAAA6IgRAAIAAgPQgGAKgIADQgIAFgLAAQgQAAgKgJgAgRAFQgIAFAAALQAAAJAGAFQAFAGAKAAQANAAAJgKQAIgKAAgRIAAgEIgWAAQgNAAgIAFg");
	this.shape_1203.setTransform(665.125,796.525);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f("#0BFFFF").s().p("AgKA0IglhnIARAAIAeBWIAehWIASAAIglBng");
	this.shape_1204.setTransform(653.85,796.525);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#FFFFFF").s().p("AgSAgIAKgnIAAgYIAbAAIAAAYIgTAng");
	this.shape_1205.setTransform(630.2,801.625);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f("#0BFFFF").s().p("AgiBFIAAgQIAdAAIAAhnIgjAQIAAgSIAjgQIARAAIAAB5IAdAAIAAAQg");
	this.shape_1206.setTransform(619.725,794.825);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_1207.setTransform(607.9,804.3);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f("#0BFFFF").s().p("AgfAoQgPgPAAgZQAAgYAOgPQAOgPAVAAQATAAAMAOQAMANABAUIAAAHIhKAAIAAAAQAAAWAIAJQAKAJAOAAQAKAAAIgCQAHgCAMgGIAAARQgLAEgIACQgIACgKAAQgYAAgMgPgAgSgfQgHAJgBAKIA4AAQgCgLgGgIQgIgIgMAAQgLAAgJAIg");
	this.shape_1208.setTransform(596.5,796.525);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#0BFFFF").s().p("AATBJQgPAAgIgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAAMAEAFQAEAGAIAAIAUAAIAAAPg");
	this.shape_1209.setTransform(585.55,794.475);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f("#0BFFFF").s().p("AgNBGQgIgEgEgIIAAANIgRAAIAAiQIARAAIAAA2QAEgHAHgEQAIgFAIAAQATAAALAPQALAPAAAYQAAAZgLAPQgLAPgTAAQgJAAgGgEgAgSgKQgGAKgBATQABAUAGAKQAGAKAMAAQAMAAAHgKQAFgKABgUQgBgTgFgKQgHgKgMAAQgMAAgGAKg");
	this.shape_1210.setTransform(573.85,794.625);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#0BFFFF").s().p("AggAuQgKgJAAgPQAAgSAMgIQAMgJAVAAIAXAAIAAgCQAAgNgGgFQgHgGgNAAQgHAAgKACQgKADgHAFIAAgRIASgGIAQgCQAMAAAKAEQAJAEAGAIQADAEABAHQACAHAAAOIAAA6IgRAAIAAgPQgHAKgHADQgIAFgLAAQgRAAgIgJgAgSAFQgHAGAAAKQAAAJAFAFQAHAGAJAAQAOAAAHgKQAJgKAAgRIAAgEIgWAAQgOAAgIAFg");
	this.shape_1211.setTransform(561.85,796.525);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAiAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_1212.setTransform(551.3,794.525);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#0BFFFF").s().p("AgkA1IAAhnIASAAIAAAVQAEgMAIgFQAJgHAMAAQAHAAAEACIALAFIAAASIgLgHQgGgBgGAAQgQgBgIAKQgIAMAAAQIAAA0g");
	this.shape_1213.setTransform(540.4,796.4);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f("#0BFFFF").s().p("AghAuQgJgKAAgOQAAgSAMgIQALgJAWAAIAXAAIAAgCQAAgNgGgFQgHgGgNAAQgHAAgKACIgRAIIAAgRQAKgEAIgCIAQgCQAMAAAKAEQAIAEAHAIQADAFACAGQABAHAAAOIAAA6IgRAAIAAgPQgGAKgIADQgIAFgLAAQgQAAgKgJgAgRAFQgIAGAAAKQAAAJAGAFQAGAGAJAAQANAAAJgKQAIgKAAgRIAAgEIgWAAQgNAAgIAFg");
	this.shape_1214.setTransform(527.425,796.525);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f("#0BFFFF").s().p("AgKA0IglhnIARAAIAeBWIAehWIASAAIglBng");
	this.shape_1215.setTransform(516.15,796.525);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f("#FFFFFF").s().p("AAHBVQgNgXgIgVQgGgVAAgUQAAgTAGgWQAIgWANgVIAOAAQgLAUgHAWQgFAWAAAUQAAAVAFAVQAGAWAMAVg");
	this.shape_1216.setTransform(504.75,794.85);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("#F9EB70").s().p("AAXA1IAAg/QAAgPgGgGQgFgGgJAAQgMAAgGAIQgGAJAAAPIAAA6IgSAAIAAhnIASAAIAAAQQAEgJAHgEQAJgGAJAAQAQAAAIALQAIAKAAAWIAAA/g");
	this.shape_1217.setTransform(493.25,796.4);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f("#F9EB70").s().p("AggApQgMgOAAgbQAAgZAMgOQALgPAVAAQAVAAAMAPQAMAOAAAZQAAAbgMAOQgLAOgWAAQgVAAgLgOgAgTgdQgHAKAAATQAAATAHALQAHAKAMAAQANAAAHgKQAGgKAAgUQAAgTgGgKQgHgKgNAAQgMAAgHAKg");
	this.shape_1218.setTransform(481.725,796.525);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("#F9EB70").s().p("AgqBIIAAgNIAiAAIAAhMIgbAAIAAgOIArAAIAABaIAjAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_1219.setTransform(471,794.525);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f("#F9EB70").s().p("AAVBDQgTAAgHgIQgIgHAAgTIAAg4IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA4QAAALAEAEQAFAGAKgBIAUAAIAAAOg");
	this.shape_1220.setTransform(458.45,795.05);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f("#F9EB70").s().p("AgaAoQgNgOAAgaQAAgYANgPQAOgPAXAAIAPACIAOAGIAAASQgHgGgHgCQgGgDgJAAQgPAAgJAKQgIAKAAATQAAAUAIAKQAJAKAPAAQAIAAAIgCQAHgDAGgGIAAASQgGAEgIACQgGACgJAAQgYAAgNgPg");
	this.shape_1221.setTransform(447.425,796.525);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f("#F9EB70").s().p("AAXA1IAAg/QAAgPgFgGQgFgGgLAAQgKAAgHAIQgHAKAAAOIAAA6IgRAAIAAhnIARAAIAAAQQAFgJAIgEQAIgGAJAAQAQAAAIALQAIALAAAVIAAA/g");
	this.shape_1222.setTransform(435.875,796.4);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f("#F9EB70").s().p("AgfArQgIgLAAgVIAAg/IARAAIAAA/QAAAPAFAGQAFAHALAAQAKAAAHgJQAGgJAAgPIAAg6IASAAIAABnIgSAAIAAgQQgEAJgIAFQgIAEgJAAQgQAAgIgKg");
	this.shape_1223.setTransform(424.425,796.675);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f("#F9EB70").s().p("AgoBFIAAiJIBRAAIAAAPIg+AAIAAAlIA4AAIAAAQIg4AAIAABFg");
	this.shape_1224.setTransform(413.4,794.8);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("#F9EB70").s().p("AgoBIIAAgOIAKAAQAIAAADgFQAEgDAHgTIgohmIASAAIAeBRIAfhRIASAAIgnBiQgJAagCAFQgEAGgHAEQgFAEgKAAg");
	this.shape_1225.setTransform(401.525,798.5);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f("#F9EB70").s().p("AAgA1IAAg6QAAgVgCgHQgDgFgGAAQgIAAgCAGQgDAFAAAWIAAA6IgPAAIAAg6QAAgXgDgFQgCgFgHAAQgHAAgCAGQgDAFAAAWIAAA6IgQAAIAAhnIAQAAIAAAJQADgGAFgDQAEgDAGAAQAHABAFADQADADADAHQADgHAFgDQAGgDAGgBQAMAAAGAKQAFAKAAAbIAAA7g");
	this.shape_1226.setTransform(389.975,796.4);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("#FFFFFF").s().p("AgnBXIAAgOIAHAAQANAAAEgEQADgDAAgOIAAgTQAAgQAHgGQAGgHASgBQgTgDgFgEQgHgGAAgRIAAgZQAAgNgDgDQgEgFgNAAIgHAAIAAgNIAGAAQAXAAAIAHQAHAHAAAUIAAAYQAAAMAFAHQAGAGAMAAIAMAAIAAAMIgMAAQgMABgFAGQgGAIAAAKIAAATQAAAUgHAHQgHAHgYAAg");
	this.shape_1227.setTransform(390.225,718.5);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f("#FFFFFF").s().p("AgSBBIAJgjIAAgZIAcAAIAAAZIgSAjgAgKgfIAAgiIAcAAIAAAig");
	this.shape_1228.setTransform(985.95,698.65);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#FFFFFF").s().p("AgUBVQAMgVAGgWQAFgVAAgVQAAgUgFgVQgGgWgMgVIAOAAQAOAWAHAVQAGAWABATQgBAUgGAWQgHAVgOAWg");
	this.shape_1229.setTransform(974.75,695.625);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f("#0BFFFF").s().p("AgTA1IgSgFIAAgRQAJAEAJADQAHACAJAAQALAAAGgEQAHgFAAgIQAAgMgXgFIAAAAIgHgBQgPgDgGgGQgHgHAAgLQAAgPAKgJQAKgIATAAIAPACIAPAEIAAARIgOgGQgHgCgIAAQgLAAgGADQgGAEAAAIQAAAHAFADQADAEARADIAHABQAMACAHAHQAHAIAAALQAAAPgLAJQgLAJgTAAg");
	this.shape_1230.setTransform(963.7,697.325);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#0BFFFF").s().p("AAVBDQgTAAgIgIQgHgHAAgTIAAg4IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA4QAAALAFAFQAEAEAKAAIAUAAIAAAOg");
	this.shape_1231.setTransform(951.85,695.825);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f("#0BFFFF").s().p("AgfArQgIgLAAgUIAAhBIARAAIAABBQAAAOAGAGQAEAHAKAAQAMAAAGgJQAGgIABgRIAAg6IARAAIAABnIgRAAIAAgPQgFAJgIAFQgHAFgKgBQgQAAgIgKg");
	this.shape_1232.setTransform(940.75,697.45);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f("#0BFFFF").s().p("AgqBJIAAiPIARAAIAAAOQAEgHAIgFQAIgEAHAAQATAAALAOQALAPAAAaQAAAZgLAOQgLAOgTAAQgIAAgHgEQgIgEgEgIIAAA1gAgSgwQgHAMAAASQAAATAHAKQAHALALAAQAMAAAGgKQAHgKAAgUQAAgUgHgKQgGgKgMAAQgLAAgHAKg");
	this.shape_1233.setTransform(929.525,699.175);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f("#0BFFFF").s().p("AAWA1IAAg/QABgOgGgHQgEgGgLAAQgLAAgGAIQgGAIgBARIAAA5IgRAAIAAhnIARAAIAAAQQAFgJAHgFQAJgEAJAAQAQAAAIAKQAIALAAAVIAAA/g");
	this.shape_1234.setTransform(917.8,697.175);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAiAAIAAhNIgcAAIAAgNIArAAIAABaIAiAAIAAANgAgHgxIAAgWIAPAAIAAAWg");
	this.shape_1235.setTransform(907,695.3);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_1236.setTransform(894.75,705.075);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("#0BFFFF").s().p("AgLBIIAAhZIgcAAIAAgOIAcAAIAAgHQAAgRAHgIQAHgIARAAIAUAAIAAAOIgTAAQgJAAgEAEQgDADAAAKIAAAJIAjAAIAAAOIgjAAIAABZg");
	this.shape_1237.setTransform(883.425,695.275);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f("#0BFFFF").s().p("AggApQgMgOABgbQgBgaAMgOQALgOAVAAQAWAAALAOQAMAPAAAZQAAAagMAPQgLAOgWAAQgVAAgLgOgAgTgdQgGAKgBATQABAUAGAKQAHAKAMAAQANAAAGgKQAIgKAAgUQAAgSgIgLQgGgKgNAAQgMAAgHAKg");
	this.shape_1238.setTransform(871.85,697.325);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_1239.setTransform(860.325,705.075);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f("#0BFFFF").s().p("AAgA1IAAg6QAAgXgCgFQgCgFgHAAQgHAAgDAGQgDAGAAAVIAAA6IgPAAIAAg6QAAgWgCgGQgDgFgHAAQgHAAgCAGQgDAFAAAWIAAA6IgQAAIAAhnIAQAAIAAAJQADgFAFgDQAEgDAGAAQAIAAAEADQAEADACAHQADgGAFgEQAGgDAGAAQAMAAAGAJQAFAKAAAbIAAA7g");
	this.shape_1240.setTransform(848.925,697.175);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f("#0BFFFF").s().p("AgfArQgIgKAAgVIAAhBIARAAIAABBQAAANAFAHQAFAHALAAQAKAAAHgJQAHgIAAgRIAAg6IARAAIAABnIgRAAIAAgPQgFAJgIAFQgHAFgKgBQgQAAgIgKg");
	this.shape_1241.setTransform(837.475,697.45);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f("#0BFFFF").s().p("AgTA1IgSgFIAAgRQALAFAHACQAIACAJAAQALAAAFgEQAHgFAAgIQgBgMgVgFIgBAAIgHgBQgPgDgGgGQgHgGAAgMQABgQAJgIQAKgIATAAQAIAAAHACIAPAEIAAARQgFgEgJgCQgHgCgIAAQgMAAgEADQgHAEAAAIQABAHAEADQADAEARADIAHABQAMACAIAHQAGAHAAAMQAAAQgLAIQgLAJgTAAg");
	this.shape_1242.setTransform(826,697.325);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#FFFFFF").s().p("AgTAgIALgmIAAgZIAcAAIAAAZIgUAmg");
	this.shape_1243.setTransform(802.325,702.4);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f("#C69C6D").s().p("AgJAdIAAg5IAUAAIAAA5g");
	this.shape_1244.setTransform(791.65,690.925);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f("#C69C6D").s().p("AgwAeIAAgQIBhAAIAAAQgAgwgNIAAgQIBhAAIAAAQg");
	this.shape_1245.setTransform(768.575,696.475);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#C69C6D").s().p("AgTA1IgSgFIAAgRQALAFAHACQAIACAJAAQAKAAAGgEQAHgFAAgIQAAgMgWgFIgBAAIgGgBQgPgDgHgGQgHgHAAgLQAAgPALgJQAJgIASAAQAJAAAIACIAPAEIAAARQgHgEgIgCQgHgCgIAAQgLAAgGADQgFAEAAAIQAAAGAEAEQAEAEAQADIAHABQANACAGAHQAHAIAAALQAAAPgLAJQgLAJgSAAg");
	this.shape_1246.setTransform(745.675,697.325);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f("#C69C6D").s().p("AAVBDQgTAAgHgIQgIgIAAgSIAAg4IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA4QAAALAEAFQAFAEALAAIATAAIAAAOg");
	this.shape_1247.setTransform(733.825,695.825);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f("#C69C6D").s().p("AgfArQgIgKAAgVIAAhBIARAAIAABBQAAANAFAHQAFAHALAAQALAAAGgJQAHgIAAgRIAAg6IARAAIAABnIgRAAIAAgPQgFAJgIAFQgHAFgKgBQgQAAgIgKg");
	this.shape_1248.setTransform(722.725,697.45);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#C69C6D").s().p("AgqBJIAAiPIARAAIAAAOQAEgIAIgEQAHgEAIAAQATAAALAOQALAQAAAZQAAAYgLAPQgLAOgTAAQgIAAgHgEQgIgEgEgIIAAA1gAgSgwQgHAKAAAUQAAAUAHAJQAHALALAAQAMAAAGgKQAHgMAAgSQAAgSgHgMQgGgKgMAAQgLAAgHAKg");
	this.shape_1249.setTransform(711.525,699.175);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f("#C69C6D").s().p("AAXA1IAAg/QAAgOgGgHQgEgGgLAAQgLAAgHAIQgGAJAAAQIAAA5IgRAAIAAhnIARAAIAAAQQAGgJAGgFQAJgEAJAAQAQAAAIAKQAIALAAAVIAAA/g");
	this.shape_1250.setTransform(699.8,697.175);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("#C69C6D").s().p("AgpBIIAAgNIAhAAIAAhNIgbAAIAAgNIArAAIAABaIAjAAIAAANgAgIgxIAAgWIAQAAIAAAWg");
	this.shape_1251.setTransform(689,695.3);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f("#C69C6D").s().p("AgMBIIAAhZIgbAAIAAgOIAbAAIAAgHQAAgQAIgJQAHgIARAAIAUAAIAAAOIgTAAQgJAAgEAEQgDADAAAKIAAAJIAjAAIAAAOIgjAAIAABZg");
	this.shape_1252.setTransform(665.425,695.275);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#C69C6D").s().p("AggApQgMgPAAgaQAAgZAMgPQAMgOAUAAQAWAAALAOQAMAPAAAZQAAAagMAPQgLAOgWAAQgUAAgMgOgAgTgdQgGAKAAATQAAAUAGAKQAHAKAMAAQANAAAHgKQAHgKAAgUQAAgSgHgLQgHgKgNAAQgMAAgHAKg");
	this.shape_1253.setTransform(653.825,697.325);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#C69C6D").s().p("AAgA1IAAg6QAAgVgCgHQgCgFgHAAQgIAAgCAGQgDAGAAAVIAAA6IgPAAIAAg6QAAgWgCgGQgDgFgHAAQgHAAgCAGQgDAGAAAVIAAA6IgQAAIAAhnIAQAAIAAAJQACgEAGgEQAEgDAGAAQAIAAAEADQADADADAHQADgHAFgDQAFgDAHAAQAMAAAGAJQAFAKAAAbIAAA7g");
	this.shape_1254.setTransform(630.925,697.175);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#C69C6D").s().p("AgfArQgIgLAAgUIAAhBIARAAIAABBQAAAOAFAGQAFAHALAAQAKAAAHgJQAHgJAAgQIAAg6IARAAIAABnIgRAAIAAgPQgEAIgJAGQgIAFgJgBQgQAAgIgKg");
	this.shape_1255.setTransform(619.475,697.45);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#C69C6D").s().p("AgTA1IgSgFIAAgRQAJAEAJADQAHACAKAAQAKAAAHgEQAFgFABgIQgBgMgVgFIgBAAIgHgBQgOgDgHgGQgHgHAAgLQAAgPAKgJQAKgIASAAIAQACIAQAEIAAARIgPgGQgHgCgIAAQgMAAgFADQgFAEAAAIQAAAHAEADQADAEARADIAHABQAMACAIAHQAGAIAAALQAAAPgLAJQgLAJgSAAg");
	this.shape_1256.setTransform(608,697.325);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#C69C6D").s().p("AggAoQgOgPAAgZQAAgYAOgPQANgPAWAAQAUAAALAOQAMAOAAASIAAAIIhJAAIAAAAQAAAVAIAKQAJAJAQAAQAGAAALgCIATgIIAAARIgTAGQgJACgJAAQgWAAgPgPgAgSgfQgHAIgCAKIA4AAQgBgLgGgHQgHgIgNAAQgKAAgKAIg");
	this.shape_1257.setTransform(585.05,697.325);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#C69C6D").s().p("AAXBIIAAhAQAAgMgFgIQgFgGgLAAQgLAAgGAIQgHAIAAAQIAAA6IgRAAIAAiPIARAAIAAA4QAFgJAIgFQAHgEAKAAQAQAAAIAKQAIAKAAAVIAABAg");
	this.shape_1258.setTransform(573.575,695.275);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#C69C6D").s().p("AgIBFIAAh6IgsAAIAAgPIBpAAIAAAPIgrAAIAAB6g");
	this.shape_1259.setTransform(562.05,695.575);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#C69C6D").s().p("AgKAdIAAg5IAVAAIAAA5g");
	this.shape_1260.setTransform(550.7,690.925);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#FFFFFF").s().p("AAGBVQgNgXgGgUQgHgUAAgWQAAgVAHgUQAGgUANgXIAPAAQgNAXgFATQgFAVAAAVQAAAVAFAVQAGAVAMAWg");
	this.shape_1261.setTransform(539.175,695.625);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f("#F9EB70").s().p("AgPBJIgPgEIAAgRQAIAEAIACQAHACAHAAQANAAAGgHQAGgIAAgQIAAgNQgDAJgIAEQgGAFgKAAQgSAAgLgPQgLgPAAgXQAAgYALgPQALgPASAAQAIAAAIAEQAGAEAFAJIAAgOIASAAIAABgQAAAXgMANQgKAMgVAAgAgRgwQgHAJAAAUQAAATAHAJQAHALALAAQAMAAAGgLQAGgJAAgTQAAgTgGgKQgHgKgLAAQgLAAgHAKg");
	this.shape_1262.setTransform(527.325,699.225);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#F9EB70").s().p("AggApQgLgOAAgbQAAgaALgOQALgOAVAAQAWAAALAOQAMAPAAAZQAAAbgMAOQgLAOgWAAQgVAAgLgOgAgTgdQgGAKAAATQAAAUAGAKQAHAKAMAAQANAAAHgKQAGgKABgUQgBgSgGgLQgHgKgNAAQgMAAgHAKg");
	this.shape_1263.setTransform(516.15,697.325);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#F9EB70").s().p("AATBIQgQAAgHgJQgIgKAAgSIAAhdIgcAAIAAgNIAsAAIAABqQAAALAEAHQAFAFAIAAIAUAAIAAAOg");
	this.shape_1264.setTransform(505.225,695.25);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#FFFFFF").s().p("AgPATIAAglIAfAAIAAAlg");
	this.shape_1265.setTransform(492.725,700.625);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f("#0BFFFF").s().p("AggAoQgNgPAAgZQAAgXANgQQANgPAWAAQATAAAMAOQAMANAAATIAAAIIhJAAIAAAAQgBAWAJAJQAJAJAPAAQAIAAAKgCIATgIIAAARIgTAGQgIACgKAAQgXAAgOgPgAgRgfQgIAIgBAKIA3AAQgBgLgHgHQgGgIgNAAQgLAAgIAIg");
	this.shape_1266.setTransform(481.775,697.325);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f("#0BFFFF").s().p("AATBIQgQAAgHgJQgIgJAAgTIAAhdIgcAAIAAgNIAsAAIAABqQAAALAEAHQAEAFAJAAIAUAAIAAAOg");
	this.shape_1267.setTransform(470.825,695.25);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f("#0BFFFF").s().p("AggApQgMgPAAgaQAAgZAMgPQALgOAVAAQAVAAAMAOQAMAPAAAZQAAAagMAPQgLAOgWAAQgVAAgLgOgAgTgdQgGAKAAATQAAAUAGAKQAHAKAMAAQANAAAHgKQAGgKAAgUQAAgTgGgKQgHgKgNAAQgMAAgHAKg");
	this.shape_1268.setTransform(458.775,697.325);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f("#0BFFFF").s().p("AgTA1IgSgFIAAgRQALAFAHACQAIACAJAAQAKAAAHgEQAFgFABgIQgBgMgVgFIgBAAIgHgBQgOgDgHgGQgGgGgBgMQAAgQAKgIQAKgIASAAQAJAAAHACIAQAEIAAARQgHgEgIgCQgHgCgIAAQgLAAgFADQgHAEAAAIQABAHAEADQAEAEAQADIAHABQAMACAIAHQAGAHAAAMQAAAQgLAIQgLAJgSAAg");
	this.shape_1269.setTransform(447.35,697.325);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f("#0BFFFF").s().p("AAXA1IAAg/QAAgOgFgHQgFgGgLAAQgLAAgGAIQgHAJAAAQIAAA5IgRAAIAAhnIARAAIAAAQQAFgJAIgFQAHgEAKAAQAQAAAIAKQAIALAAAVIAAA/g");
	this.shape_1270.setTransform(435.875,697.175);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f("#0BFFFF").s().p("AggApQgLgOAAgbQAAgaALgOQALgOAVAAQAWAAALAOQAMAOAAAaQAAAbgMAOQgLAOgWAAQgVAAgLgOgAgTgdQgGALAAASQAAATAGALQAHAKAMAAQANAAAHgKQAHgKAAgUQAAgTgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_1271.setTransform(424.35,697.325);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("#0BFFFF").s().p("AgaAoQgNgOAAgaQAAgZANgOQAPgPAWAAQAJAAAGACQAIADAGADIAAASQgGgGgHgDQgIgCgIAAQgPAAgIAKQgJALAAASQAAATAJALQAIAKAPAAQAKAAAGgDQAHgCAGgGIAAASQgHAEgHACQgGACgJAAQgWAAgPgPg");
	this.shape_1272.setTransform(412.975,697.325);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f("#0BFFFF").s().p("AgpBHIAAgQIAvg0QAKgKADgIQADgGAAgIQAAgLgHgHQgHgHgLAAQgHAAgLADQgKAEgJAGIAAgTQALgFAHgCQALgDAIAAQATAAANALQAMALAAASQABAJgFAIQgEAKgKAJIgsAxIA/AAIAAAQg");
	this.shape_1273.setTransform(779.95,672.575);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_1274.setTransform(768.55,682.2);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f("#0BFFFF").s().p("AAVBDQgTAAgHgHQgIgKAAgRIAAg4IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA4QAAALAEAFQAFAEALAAIATAAIAAAOg");
	this.shape_1275.setTransform(756.775,672.95);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#0BFFFF").s().p("AgfArQgIgKAAgWIAAg/IARAAIAAA/QAAAOAFAHQAGAHAKAAQALAAAGgJQAHgIAAgQIAAg6IARAAIAABnIgRAAIAAgQQgFAJgIAFQgHAEgKAAQgRAAgHgKg");
	this.shape_1276.setTransform(745.675,674.575);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f("#0BFFFF").s().p("AgqBJIAAiOIARAAIAAANQAFgJAHgDQAGgEAJAAQAUAAAKAPQALAOAAAaQAAAYgLAPQgLAOgTAAQgJAAgGgEQgHgEgFgHIAAA0gAgSgwQgHALAAATQAAAUAHAKQAGAJAMABQANgBAFgJQAHgLAAgTQAAgTgHgLQgFgKgNABQgMgBgGAKg");
	this.shape_1277.setTransform(734.475,676.3);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f("#0BFFFF").s().p("AAXA1IAAg/QAAgPgFgGQgFgHgLAAQgKAAgHAJQgHAKAAAOIAAA6IgRAAIAAhnIARAAIAAAQQAFgJAIgFQAIgEAJAAQAQAAAIAKQAIALAAAVIAAA/g");
	this.shape_1278.setTransform(722.725,674.325);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAjAAIAAANgAgIgxIAAgWIAQAAIAAAWg");
	this.shape_1279.setTransform(711.95,672.425);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f("#FF931D").s().p("AgHAxIAAgpIgpAAIAAgPIApAAIAAgpIAPAAIAAApIApAAIAAAPIgpAAIAAApg");
	this.shape_1280.setTransform(688.45,673.6);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f("#0BFFFF").s().p("AgiBFIAAgPIAdAAIAAhoIgjAQIAAgSIAjgQIARAAIAAB6IAdAAIAAAPg");
	this.shape_1281.setTransform(665.625,672.725);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_1282.setTransform(653.8,682.2);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f("#0BFFFF").s().p("AAVBDQgTAAgHgHQgIgJAAgSIAAg4IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA4QAAALAEAFQAEAEALAAIAUAAIAAAOg");
	this.shape_1283.setTransform(642.05,672.95);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f("#0BFFFF").s().p("AgfArQgIgKAAgWIAAg/IASAAIAAA/QgBAPAFAGQAFAHALAAQALAAAGgJQAGgIABgQIAAg6IARAAIAABnIgRAAIAAgQQgFAJgIAFQgIAEgJAAQgRAAgHgKg");
	this.shape_1284.setTransform(630.95,674.575);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f("#0BFFFF").s().p("AgqBJIAAiOIARAAIAAANQAFgIAHgEQAGgEAJAAQAUAAAKAPQALAOAAAaQAAAZgLAOQgLAOgTAAQgJAAgGgEQgHgEgFgHIAAA0gAgSgwQgHAMAAASQAAASAHAMQAGAJAMABQANgBAFgJQAHgKAAgUQAAgUgHgKQgFgKgNABQgMgBgGAKg");
	this.shape_1285.setTransform(619.725,676.3);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f("#0BFFFF").s().p("AAXA1IAAg/QAAgPgGgGQgEgHgLAAQgKAAgIAJQgFAJAAAPIAAA6IgSAAIAAhnIASAAIAAAQQAEgJAHgFQAJgEAJAAQAQAAAIAKQAIALAAAVIAAA/g");
	this.shape_1286.setTransform(608,674.325);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAjAAIAAANgAgIgxIAAgWIAQAAIAAAWg");
	this.shape_1287.setTransform(597.2,672.425);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f("#FF931D").s().p("AgwAeIAAgQIBhAAIAAAQgAgwgNIAAgQIBhAAIAAAQg");
	this.shape_1288.setTransform(573.525,673.575);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f("#FFFFFF").s().p("AgTA1QgKgCgIgDIAAgSQAKAGAIACQAKACAHAAQAKABAGgFQAHgFAAgIQAAgMgWgEIgBAAIgGgCQgPgDgHgGQgGgHgBgMQABgOAJgIQAKgJATABQAIgBAHACQAIACAIACIAAARQgKgFgFgBQgJgDgGAAQgKAAgGAFQgGADAAAIQAAAHAEADQAGAFAOACIAIABQAMACAHAHQAGAHAAAMQAAAPgLAJQgKAJgUAAIgQgCg");
	this.shape_1289.setTransform(550.6,674.45);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f("#FFFFFF").s().p("AAVBDQgTAAgHgHQgIgJAAgSIAAg4IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA4QAAAMAFAEQAEAEALAAIATAAIAAAOg");
	this.shape_1290.setTransform(538.75,672.95);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f("#FFFFFF").s().p("AgfArQgIgKAAgWIAAg/IARAAIAAA/QAAAPAFAGQAGAHAKAAQAKAAAHgJQAHgIAAgQIAAg6IARAAIAABnIgRAAIAAgQQgFAJgIAFQgIAEgJAAQgRAAgHgKg");
	this.shape_1291.setTransform(527.675,674.575);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("#FFFFFF").s().p("AgqBJIAAiOIARAAIAAANQAFgJAHgDQAGgEAJAAQAUAAAKAPQALAOAAAaQAAAYgLAPQgLAOgTAAQgJAAgHgEQgHgEgEgHIAAA0gAgSgwQgGALgBATQABAUAGAKQAGAJAMABQANgBAFgJQAHgKAAgUQAAgTgHgLQgFgKgNABQgMgBgGAKg");
	this.shape_1292.setTransform(516.45,676.3);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f("#FFFFFF").s().p("AAXA1IAAg/QAAgPgFgGQgGgHgKAAQgKAAgHAJQgHAKAAAOIAAA6IgRAAIAAhnIARAAIAAAQQAFgJAIgFQAHgEAKAAQAQAAAIAKQAIALAAAVIAAA/g");
	this.shape_1293.setTransform(504.725,674.325);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f("#FFFFFF").s().p("AgqBIIAAgNIAiAAIAAhMIgaAAIAAgOIArAAIAABaIAiAAIAAANgAgIgxIAAgWIARAAIAAAWg");
	this.shape_1294.setTransform(493.925,672.425);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f("#FFFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_1295.setTransform(481.7,682.2);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f("#FFFFFF").s().p("AgMBIIAAhZIgbAAIAAgNIAbAAIAAgIQAAgRAIgIQAHgIARgBIAUAAIAAAPIgTAAQgKAAgDAEQgEAEAAAJIAAAKIAkAAIAAANIgkAAIAABZg");
	this.shape_1296.setTransform(470.375,672.4);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f("#FFFFFF").s().p("AggAoQgMgOAAgaQAAgaAMgOQALgOAVABQAVgBAMAOQAMAOAAAaQAAAagMAOQgLAOgWABQgVgBgLgOgAgTgdQgGAKAAATQAAAUAGAKQAHAKAMAAQANAAAHgKQAGgKAAgUQAAgTgGgKQgHgKgNAAQgMAAgHAKg");
	this.shape_1297.setTransform(458.775,674.45);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#FFFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_1298.setTransform(447.25,682.2);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f("#FFFFFF").s().p("AAgA1IAAg6QAAgWgCgGQgDgFgGAAQgIAAgDAGQgCAGAAAVIAAA6IgPAAIAAg6QAAgWgDgGQgCgFgHAAQgHAAgDAGQgCAGAAAVIAAA6IgQAAIAAhnIAQAAIAAAJQADgGAEgDQAGgCAFAAQAHAAAFADQADADADAHQADgIAFgCQAFgDAHAAQANAAAFAJQAFAKAAAbIAAA7g");
	this.shape_1299.setTransform(435.875,674.325);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f("#FFFFFF").s().p("AgfArQgIgKAAgWIAAg/IARAAIAAA/QAAAPAFAGQAFAHALAAQAKAAAHgJQAGgJAAgPIAAg6IASAAIAABnIgSAAIAAgQQgEAJgIAFQgIAEgJAAQgQAAgIgKg");
	this.shape_1300.setTransform(424.425,674.575);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f("#FFFFFF").s().p("AgTA1QgJgCgJgDIAAgSQAKAGAIACQAKACAHAAQAKABAGgFQAHgFAAgIQAAgMgWgEIgBAAIgGgCQgPgDgHgGQgHgHAAgMQAAgOAKgIQAKgJASABQAJgBAIACIAPAEIAAARQgKgFgFgBQgJgDgGAAQgKAAgHAFQgFADAAAIQAAAGAEAEQAFAFAPACIAHABQAOADAFAGQAHAIAAALQAAAPgLAJQgKAJgUAAg");
	this.shape_1301.setTransform(412.925,674.45);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#FFFFFF").s().p("AAiBXQgXAAgIgHQgHgHAAgUIAAgTQAAgJgFgIQgHgIgLAAIgMAAIAAgMIAMAAQANAAAFgGQAFgGAAgMIAAgZQAAgUAHgIQAHgGAYAAIAGAAIAAANIgGAAQgOAAgDAEQgEAEgBANIAAAZQABAQgHAGQgGAGgSABQASADAGAGQAGAGAAAQIAAAUQABANAEAEQADADAOAAIAGAAIAAAOg");
	this.shape_1302.setTransform(837.3,649.9);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f("#FFFFFF").s().p("AgUBVQAMgUAGgXQAGgUAAgWQAAgVgGgUQgGgXgMgUIAPAAQAMAWAIAVQAGAWABATQgBAUgGAWQgIAVgMAWg");
	this.shape_1303.setTransform(814.1,649.875);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#0BFFFF").s().p("AgpBHIAAgQIAeghIARgTQAJgJAEgJQADgGAAgIQAAgMgHgGQgHgHgLAAQgIAAgKADQgIADgLAGIAAgTIASgHQAJgCAKAAQATAAANALQAMALAAARQAAAKgEAIQgEAJgKAKIgsAxIA/AAIAAAQg");
	this.shape_1304.setTransform(802.9,649.725);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_1305.setTransform(791.5,659.35);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f("#0BFFFF").s().p("AAVBDQgTAAgHgIQgIgIAAgSIAAg4IgcAAIAAgOIAcAAIAAgdIAQAAIAAAdIAnAAIAAAOIgnAAIAAA4QAAALAEAFQAFAEALAAIATAAIAAAOg");
	this.shape_1306.setTransform(779.725,650.1);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f("#0BFFFF").s().p("AgfArQgIgKAAgWIAAg/IARAAIAAA/QAAANAFAIQAFAGALAAQAMAAAFgIQAHgIAAgRIAAg5IARAAIAABnIgRAAIAAgQQgFAKgIAEQgHAEgKAAQgQAAgIgKg");
	this.shape_1307.setTransform(768.625,651.725);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f("#0BFFFF").s().p("AgqBJIAAiPIARAAIAAAOQAFgIAHgEQAHgEAIAAQATAAALAOQALAQAAAZQAAAYgLAPQgLAOgTAAQgIAAgHgEQgHgDgFgJIAAA1gAgSgvQgHAJAAAVQAAATAHAKQAHAKALAAQAMAAAGgKQAHgMAAgRQAAgUgHgKQgGgLgMAAQgLAAgHALg");
	this.shape_1308.setTransform(757.425,653.425);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f("#0BFFFF").s().p("AAXA1IAAg/QAAgPgFgGQgFgGgLgBQgKABgHAIQgHAJAAAQIAAA5IgRAAIAAhnIARAAIAAAQQAEgIAJgGQAIgFAJAAQAQAAAIALQAIALAAAVIAAA/g");
	this.shape_1309.setTransform(745.675,651.45);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAiAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_1310.setTransform(734.9,649.575);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f("#FFFFFF").s().p("AgTAgIALgnIAAgYIAcAAIAAAYIgUAng");
	this.shape_1311.setTransform(710.525,656.675);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f("#0BFFFF").s().p("AgjBFIAAgQIAeAAIAAhoIgjARIAAgSIAigQIASAAIAAB5IAdAAIAAAQg");
	this.shape_1312.setTransform(700.075,649.875);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_1313.setTransform(688.2,659.35);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f("#0BFFFF").s().p("AAVBDQgUAAgGgIQgIgHAAgTIAAg4IgcAAIAAgOIAcAAIAAgdIAQAAIAAAdIAnAAIAAAOIgnAAIAAA4QAAALAFAFQAEAEAKAAIAUAAIAAAOg");
	this.shape_1314.setTransform(676.45,650.1);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f("#0BFFFF").s().p("AgfArQgIgLAAgVIAAg/IARAAIAAA/QAAAOAFAHQAFAGALAAQALAAAGgIQAHgJAAgQIAAg5IARAAIAABnIgRAAIAAgQQgFAJgIAFQgIAEgJAAQgQAAgIgKg");
	this.shape_1315.setTransform(665.375,651.725);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("#0BFFFF").s().p("AgqBJIAAiPIASAAIAAAOQADgIAIgEQAHgEAIAAQATAAALAOQALAPAAAaQAAAZgLAOQgLAOgTAAQgHAAgIgEQgIgEgDgIIAAA1gAgSgvQgGAJAAAVQAAATAGAKQAGAKAMAAQAMAAAHgKQAGgLAAgSQAAgUgGgKQgHgLgMAAQgMAAgGALg");
	this.shape_1316.setTransform(654.125,653.425);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f("#0BFFFF").s().p("AAXA1IAAg/QAAgNgFgIQgFgGgLgBQgKABgHAIQgHAIAAARIAAA5IgRAAIAAhnIARAAIAAAQQAFgJAIgFQAHgFAKAAQAQAAAIALQAIAKAAAWIAAA/g");
	this.shape_1317.setTransform(642.425,651.45);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAiAAIAAhMIgbAAIAAgOIAqAAIAABaIAiAAIAAANgAgHgyIAAgVIAPAAIAAAVg");
	this.shape_1318.setTransform(631.6,649.575);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f("#FFFFFF").s().p("AAHBVQgNgWgIgVQgGgWAAgUQAAgTAGgWQAIgVANgWIAOAAQgMAUgGAWQgFAWAAAUQAAAVAFAVQAHAXALAUg");
	this.shape_1319.setTransform(619.5,649.875);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("#F9EB70").s().p("AAXA1IAAg/QAAgNgFgIQgFgGgLgBQgKABgHAIQgHAIAAARIAAA5IgRAAIAAhnIARAAIAAAQQAFgJAIgFQAHgFAKAAQAQAAAIALQAIAKAAAWIAAA/g");
	this.shape_1320.setTransform(596.525,651.45);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f("#F9EB70").s().p("AghApQgLgOABgbQgBgaALgOQANgOAUAAQAWAAALAOQAMAPAAAZQAAAagMAPQgLAOgWAAQgUAAgNgOgAgTgdQgHAKABATQgBAUAHAKQAHAKAMAAQAMAAAIgKQAGgLABgTQgBgTgGgKQgHgKgNAAQgMAAgHAKg");
	this.shape_1321.setTransform(585,651.575);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("#F9EB70").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAjAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_1322.setTransform(574.25,649.575);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f("#F9EB70").s().p("AAVBDQgUAAgGgIQgIgHAAgTIAAg4IgcAAIAAgOIAcAAIAAgdIAQAAIAAAdIAnAAIAAAOIgnAAIAAA4QAAALAFAFQAEAEALAAIATAAIAAAOg");
	this.shape_1323.setTransform(561.7,650.1);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f("#F9EB70").s().p("AgaAoQgNgOAAgaQAAgYANgPQAOgPAXAAQAGAAAJACIAOAGIAAASQgHgGgGgCQgHgDgJAAQgPAAgJAKQgIALAAASQAAATAIALQAJAKAPAAQAIAAAIgCQAHgDAGgGIAAASQgGADgIADQgGACgJAAQgXAAgOgPg");
	this.shape_1324.setTransform(550.675,651.575);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f("#F9EB70").s().p("AAXA1IAAg/QAAgPgGgGQgEgGgKgBQgMABgGAIQgHAIABARIAAA5IgSAAIAAhnIASAAIAAAQQAEgIAHgGQAJgFAJAAQARAAAHALQAIALAAAVIAAA/g");
	this.shape_1325.setTransform(539.15,651.45);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("#F9EB70").s().p("AgfArQgIgKAAgWIAAg/IARAAIAAA/QAAAOAFAHQAFAGALAAQALAAAGgIQAHgIAAgRIAAg5IARAAIAABnIgRAAIAAgQQgFAJgIAFQgIAEgJAAQgQAAgIgKg");
	this.shape_1326.setTransform(527.675,651.725);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f("#F9EB70").s().p("AgoBFIAAiJIBRAAIAAAPIg+AAIAAAmIA4AAIAAAPIg4AAIAABFg");
	this.shape_1327.setTransform(516.675,649.85);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f("#F9EB70").s().p("AgoBIIAAgOIAKAAQAHgBAFgDQAEgFAHgTIgphlIASAAIAeBRIAfhRIASAAIgmBjIgMAeQgEAHgHADQgFAEgKAAg");
	this.shape_1328.setTransform(504.775,653.55);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f("#F9EB70").s().p("AAgA1IAAg6QAAgXgCgEQgCgGgHAAQgHAAgDAGQgDAFAAAWIAAA6IgPAAIAAg6QAAgWgCgGQgDgFgHAAQgHAAgCAGQgDAEAAAXIAAA6IgQAAIAAhnIAQAAIAAAJQADgFAFgDQAEgEAGAAQAIAAAEAEQAEADACAHQADgHAFgDQAFgEAHAAQAMABAGAJQAFAKAAAbIAAA7g");
	this.shape_1329.setTransform(493.225,651.45);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f("#0071BC").s().p("AAWA1IAAg/QAAgOgEgHQgFgGgLgBQgLABgGAIQgHAIAAARIAAA5IgRAAIAAhnIARAAIAAAQQAFgJAIgFQAHgFAKAAQAQAAAIALQAIAKAAAWIAAA/g");
	this.shape_1330.setTransform(470.325,651.45);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f("#0071BC").s().p("AggApQgMgPAAgaQAAgZAMgPQALgOAVAAQAVAAAMAOQAMAPAAAZQAAAagMAPQgLAOgWAAQgVAAgLgOgAgTgdQgGAKAAATQAAAUAGAKQAHAKAMAAQANAAAHgKQAGgKAAgUQAAgTgGgKQgHgKgNAAQgMAAgHAKg");
	this.shape_1331.setTransform(458.775,651.575);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f("#0071BC").s().p("AgqBIIAAgNIAiAAIAAhMIgbAAIAAgOIArAAIAABaIAjAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_1332.setTransform(448.05,649.575);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f("#0071BC").s().p("AAVBDQgTAAgHgIQgIgHAAgTIAAg4IgcAAIAAgOIAcAAIAAgdIAQAAIAAAdIAnAAIAAAOIgnAAIAAA4QAAALAEAFQAFAEAKAAIAUAAIAAAOg");
	this.shape_1333.setTransform(435.5,650.1);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f("#0071BC").s().p("AgaAoQgNgOAAgaQAAgYANgPQAOgPAXAAIAPACIAOAGIAAASQgHgGgHgCQgGgDgJAAQgPAAgJAKQgIAKAAATQAAAUAIAKQAJAKAPAAQAIAAAIgCQAHgDAGgGIAAASQgGADgIADQgGACgJAAQgXAAgOgPg");
	this.shape_1334.setTransform(424.475,651.575);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f("#0071BC").s().p("AAXA1IAAg/QAAgPgFgGQgFgGgLgBQgKABgHAIQgHAJAAAQIAAA5IgRAAIAAhnIARAAIAAAQQAEgIAJgGQAIgFAJAAQAQAAAIALQAIALAAAVIAAA/g");
	this.shape_1335.setTransform(412.925,651.45);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f("#0071BC").s().p("AgfArQgIgLAAgVIAAg/IARAAIAAA/QAAAOAFAHQAFAGALAAQALAAAGgIQAGgIAAgRIAAg5IASAAIAABnIgSAAIAAgQQgFAJgHAFQgIAEgJAAQgQAAgIgKg");
	this.shape_1336.setTransform(401.475,651.725);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f("#0071BC").s().p("AgMBIIAAhaIgcAAIAAgNIAcAAIAAgHQAAgRAIgJQAHgIARAAIAUAAIAAAPIgTAAQgJAAgEADQgDAEgBAKIAAAJIAkAAIAAANIgkAAIAABag");
	this.shape_1337.setTransform(390.05,649.55);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f("#FFFFFF").s().p("AgnBXIAAgNIAHAAQANAAAEgFQADgDAAgOIAAgTQAAgQAHgGQAGgGASgCQgSgDgGgEQgHgHAAgQIAAgYQAAgOgDgEQgFgEgMAAIgHAAIAAgNIAGAAQAXAAAIAHQAHAHAAAUIAAAYQAAAMAFAGQAFAHANAAIAMAAIAAAMIgMAAQgMAAgFAHQgGAIAAAKIAAASQAAAVgHAHQgIAHgXAAg");
	this.shape_1338.setTransform(390.225,573.55);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f("#FFFFFF").s().p("AgUBVQAMgWAGgVQAFgVAAgVQAAgUgFgWQgGgVgMgVIAOAAQAOAXAHAUQAGAWABATQgBAUgGAWQgHAVgOAWg");
	this.shape_1339.setTransform(928.85,550.65);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f("#FFFFFF").s().p("AgTBVIAAgNIAWAAIAAiPIgWAAIAAgNIAnAAIAACpg");
	this.shape_1340.setTransform(916.725,550.65);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAiAAIAAhMIgcAAIAAgOIArAAIAABaIAiAAIAAANgAgHgyIAAgVIAPAAIAAAVg");
	this.shape_1341.setTransform(907,550.35);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f("#FFFFFF").s().p("AgTBVIAAipIAnAAIAAANIgWAAIAACPIAWAAIAAANg");
	this.shape_1342.setTransform(896.275,550.65);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f("#FFFFFF").s().p("AgiBFIAAgPIAdAAIAAhoIgjARIAAgTIAjgQIASAAIAAB6IAcAAIAAAPg");
	this.shape_1343.setTransform(883.625,550.625);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f("#FFFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_1344.setTransform(871.8,560.125);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f("#FFFFFF").s().p("AAVBDQgUAAgGgIQgIgHAAgTIAAg4IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA4QAAALAFAFQAEAEAKAAIAUAAIAAAOg");
	this.shape_1345.setTransform(860.05,550.875);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f("#FFFFFF").s().p("AgTA1IgSgFIAAgSQAKAGAIACQAKACAHAAQAKAAAGgEQAHgFAAgIQgBgMgVgFIgBAAIgHgBQgPgDgGgGQgHgGAAgNQABgPAJgIQAKgIATAAQAIAAAHACIAPAEIAAARQgGgEgIgCQgJgDgGAAQgLAAgFAEQgHAEAAAIQABAHAEADQAEAEAQADIAHABQAMACAHAHQAHAHAAAMQAAAQgLAIQgLAJgTAAQgIAAgIgCg");
	this.shape_1346.setTransform(848.95,552.375);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f("#FFFFFF").s().p("AgpBIIAAgNIAiAAIAAhMIgbAAIAAgOIAqAAIAABaIAiAAIAAANgAgHgyIAAgVIAPAAIAAAVg");
	this.shape_1347.setTransform(838.15,550.35);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f("#FFFFFF").s().p("AATBIQgQAAgHgJQgIgJAAgTIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAHQAEAFAJAAIAUAAIAAAOg");
	this.shape_1348.setTransform(826.525,550.3);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f("#FFFFFF").s().p("AgTAgIALgnIAAgZIAcAAIAAAZIgUAng");
	this.shape_1349.setTransform(802.325,557.45);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f("#C69C6D").s().p("AgJAdIAAg5IAUAAIAAA5g");
	this.shape_1350.setTransform(791.65,545.95);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f("#C69C6D").s().p("AgwAeIAAgQIBhAAIAAAQgAgwgNIAAgQIBhAAIAAAQg");
	this.shape_1351.setTransform(768.575,551.525);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f("#C69C6D").s().p("AgJAdIAAg5IATAAIAAA5g");
	this.shape_1352.setTransform(745.75,545.95);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f("#FFFFFF").s().p("AgSAgIAKgnIAAgZIAbAAIAAAZIgTAng");
	this.shape_1353.setTransform(722,557.45);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAjAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_1354.setTransform(711.95,550.35);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f("#FFFFFF").s().p("AgTAgIALgnIAAgZIAcAAIAAAZIgUAng");
	this.shape_1355.setTransform(687.575,557.45);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f("#C69C6D").s().p("AgJAdIAAg5IAUAAIAAA5g");
	this.shape_1356.setTransform(676.9,545.95);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f("#C69C6D").s().p("AAgA1IAAg6QAAgWgCgGQgDgFgGAAQgIAAgCAGQgDAGAAAVIAAA6IgPAAIAAg6QAAgWgCgGQgDgFgHAAQgHAAgCAGQgDAGAAAVIAAA6IgQAAIAAhnIAQAAIAAAJQACgEAGgEQAEgDAGAAQAHAAAFADQAEAEACAGQADgHAFgDQAFgDAHAAQANAAAFAJQAFAKAAAbIAAA7g");
	this.shape_1357.setTransform(653.875,552.225);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f("#C69C6D").s().p("AgfAoQgPgOAAgaQAAgYAOgPQAOgPAVAAQAUAAALAOQAMANABATIAAAIIhKAAIAAAAQAAAWAIAJQAKAJAOAAQAIAAAJgDQAKgCAJgFIAAARIgSAGIgSACQgXAAgNgPgAgSgfQgHAIgBAKIA4AAQgCgLgGgHQgHgIgNAAQgMAAgIAIg");
	this.shape_1358.setTransform(642.4,552.375);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f("#C69C6D").s().p("AAVBDQgUAAgGgIQgIgHAAgTIAAg4IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA4QAAALAFAFQAEAEALAAIATAAIAAAOg");
	this.shape_1359.setTransform(630.55,550.875);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f("#C69C6D").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAiAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_1360.setTransform(620.15,550.35);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f("#C69C6D").s().p("AAVBDQgTAAgHgIQgIgHAAgTIAAg4IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA4QAAALAEAFQAFAEAKAAIAUAAIAAAOg");
	this.shape_1361.setTransform(596.15,550.875);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f("#C69C6D").s().p("AgTA1IgSgFIAAgSQAIAFAKADQAKACAHAAQAKAAAHgEQAFgFABgIQgBgMgVgFIgBAAIgHgBQgOgDgHgGQgHgHAAgMQAAgOAKgJQAKgIASAAQAJAAAHACIAQAEIAAARIgPgGQgJgDgGAAQgLAAgFAEQgHAEABAIQAAAHAEADQAEAEAQADIAHABQAMACAIAHQAGAIAAALQAAAPgLAJQgLAJgSAAQgJAAgIgCg");
	this.shape_1362.setTransform(585.05,552.375);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f("#C69C6D").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAjAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_1363.setTransform(574.25,550.35);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f("#C69C6D").s().p("AgqBFIAAiJIATAAIAAB6IBCAAIAAAPg");
	this.shape_1364.setTransform(562.6,550.6);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f("#C69C6D").s().p("AgKAdIAAg5IAVAAIAAA5g");
	this.shape_1365.setTransform(550.7,545.95);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f("#FFFFFF").s().p("AAGBVQgNgYgGgTQgHgUAAgWQAAgWAHgTQAGgTANgYIAPAAQgNAYgFASQgFAWAAAUQAAAVAFAWQAFASANAYg");
	this.shape_1366.setTransform(539.175,550.65);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f("#F9EB70").s().p("AgPBJIgPgEIAAgRQAIAEAIACIAOACQANAAAGgHQAGgIAAgQIAAgNQgDAIgIAFQgGAFgKAAQgSAAgLgPQgLgPAAgXQAAgYALgPQALgPASAAQAKAAAGAEQAHAEAEAJIAAgOIASAAIAABgQAAAXgMANQgKAMgVAAgAgRgwQgHAJAAAUQAAATAHAJQAGAKAMAAQAMAAAGgKQAGgJAAgTQAAgTgGgKQgHgKgLAAQgLAAgHAKg");
	this.shape_1367.setTransform(527.325,554.275);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f("#F9EB70").s().p("AggApQgLgOAAgbQAAgaALgOQALgOAVAAQAWAAALAOQAMAPAAAZQAAAbgMAOQgLAOgWAAQgVAAgLgOgAgTgdQgGAKAAATQAAAUAGAKQAHAKAMAAQANAAAHgKQAGgKABgUQgBgSgGgLQgHgKgNAAQgMAAgHAKg");
	this.shape_1368.setTransform(516.15,552.375);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f("#F9EB70").s().p("AATBIQgQAAgHgJQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAHQAEAFAJAAIAUAAIAAAOg");
	this.shape_1369.setTransform(505.225,550.3);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f("#FFFFFF").s().p("AgPATIAAglIAfAAIAAAlg");
	this.shape_1370.setTransform(492.725,555.675);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f("#0BFFFF").s().p("AggAoQgNgPAAgZQAAgYANgPQANgPAWAAQATAAAMAOQAMANAAATIAAAIIhJAAIAAAAQgBAWAJAJQAKAJAOAAQAJAAAJgDQAJgCAKgFIAAARIgTAGIgSACQgXAAgOgPgAgRgfQgJAIAAAKIA3AAQgBgLgHgHQgGgIgNAAQgMAAgHAIg");
	this.shape_1371.setTransform(481.775,552.375);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f("#0BFFFF").s().p("AATBIQgQAAgHgJQgIgJAAgTIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAHQAEAFAJAAIAUAAIAAAOg");
	this.shape_1372.setTransform(470.825,550.3);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f("#0BFFFF").s().p("AggApQgMgPAAgaQAAgZAMgPQALgOAVAAQAVAAAMAOQAMAPAAAZQAAAagMAPQgLAOgWAAQgVAAgLgOgAgTgdQgGAKAAATQAAAUAGAKQAHAKAMAAQANAAAHgKQAGgKAAgUQAAgTgGgKQgHgKgNAAQgMAAgHAKg");
	this.shape_1373.setTransform(458.775,552.375);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f("#0BFFFF").s().p("AgTA1IgSgFIAAgSQAKAGAIACQAKACAHAAQAKAAAHgEQAFgFABgIQgBgMgVgFIgBAAIgHgBQgOgDgHgGQgGgGgBgNQAAgPAKgIQAKgIASAAQAJAAAHACIAQAEIAAARQgHgEgIgCQgJgDgGAAQgLAAgFAEQgHAEAAAIQABAHAEADQAFAEAPADIAHABQAMACAIAHQAGAHAAAMQAAAQgLAIQgLAJgSAAQgJAAgIgCg");
	this.shape_1374.setTransform(447.35,552.375);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f("#0BFFFF").s().p("AAXA1IAAg/QAAgOgFgHQgFgGgLAAQgLAAgGAIQgHAJAAAPIAAA6IgRAAIAAhnIARAAIAAAQQAFgJAIgFQAHgEAKAAQAQAAAIAKQAIALAAAVIAAA/g");
	this.shape_1375.setTransform(435.875,552.225);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f("#0BFFFF").s().p("AggApQgLgOAAgbQAAgaALgOQALgOAVAAQAWAAALAOQAMAOAAAaQAAAbgMAOQgLAOgWAAQgVAAgLgOgAgTgdQgGALAAASQAAATAGALQAHAKAMAAQANAAAHgKQAHgKAAgUQAAgTgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_1376.setTransform(424.35,552.375);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f("#0BFFFF").s().p("AgaAoQgNgPAAgZQAAgZANgOQAOgPAXAAQAJAAAGACQAIACAGAEIAAASQgGgGgHgDQgIgCgIAAQgPAAgIAKQgJALAAASQAAATAJALQAIAKAPAAQAKAAAGgDQAIgDAFgFIAAASQgHAEgHACIgPACQgWAAgPgPg");
	this.shape_1377.setTransform(412.975,552.375);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f("#FFFFFF").s().p("AAiBXQgYAAgHgHQgHgGAAgVIAAgTQAAgKgGgIQgFgHgMAAIgMAAIAAgMIAMAAQANAAAFgHQAFgGAAgMIAAgYQAAgUAHgHQAHgHAYAAIAGAAIAAANIgHAAQgNABgEADQgEAFAAAMIAAAZQAAARgGAGQgGAEgSACQASADAGAGQAGAGAAAQIAAAUQAAANAEAEQAEADANAAIAHAAIAAAOg");
	this.shape_1378.setTransform(848.775,527.8);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f("#FFFFFF").s().p("AgUBVQANgXAFgUQAFgVAAgVQAAgVgFgVQgGgTgMgXIAPAAQAMAVAIAWQAGAUAAAVQAAAVgGAVQgHAUgNAXg");
	this.shape_1379.setTransform(825.575,527.8);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f("#FF931D").s().p("AgHAxIAAgpIgpAAIAAgPIApAAIAAgpIAPAAIAAApIApAAIAAAPIgpAAIAAApg");
	this.shape_1380.setTransform(814.675,528.65);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f("#FF931D").s().p("AgHAxIAAgpIgpAAIAAgPIApAAIAAgpIAPAAIAAApIApAAIAAAPIgpAAIAAApg");
	this.shape_1381.setTransform(803.175,528.65);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAiAAIAAhMIgbAAIAAgOIAqAAIAABaIAiAAIAAANgAgHgyIAAgVIAPAAIAAAVg");
	this.shape_1382.setTransform(792.25,527.475);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f("#FFFFFF").s().p("AgSBBIAJgjIAAgZIAcAAIAAAZIgSAjgAgKgfIAAghIAcAAIAAAhg");
	this.shape_1383.setTransform(767.95,530.825);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f("#0BFFFF").s().p("AAWBIIAAhAQAAgNgEgHQgGgGgKgBQgLAAgGAJQgHAIAAAQIAAA6IgRAAIAAiQIARAAIAAA5QAFgJAIgFQAHgEAKgBQAQAAAIALQAIAKAAAVIAABAg");
	this.shape_1384.setTransform(757.175,527.45);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f("#0BFFFF").s().p("AAVBDQgUAAgGgIQgIgIAAgTIAAg3IgcAAIAAgOIAcAAIAAgdIAQAAIAAAdIAnAAIAAAOIgnAAIAAA3QAAAMAFAFQAFAEAJAAIAUAAIAAAOg");
	this.shape_1385.setTransform(745.3,528);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f("#0BFFFF").s().p("AgPBIIgPgDIAAgRIARAGQAGACAHAAQANAAAGgIQAHgGAAgSIAAgLQgEAIgHAEQgIAFgJAAQgSAAgLgPQgLgOAAgYQAAgZALgOQAMgPARAAQAJAAAHAEQAHAEAFAJIAAgOIARAAIAABgQAAAXgLANQgLAMgVAAgAgRgwQgHAKAAATQAAATAHAJQAHAKALAAQAMAAAGgKQAHgJAAgTQAAgUgHgJQgGgKgMAAQgMAAgGAKg");
	this.shape_1386.setTransform(733.825,531.4);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f("#0BFFFF").s().p("AAXA1IAAg/QAAgOgFgHQgFgGgLgBQgKAAgHAJQgHAKAAAPIAAA5IgRAAIAAhnIARAAIAAAQQAFgJAIgFQAIgEAJgBQAQAAAIALQAIAKAAAWIAAA/g");
	this.shape_1387.setTransform(722.725,529.35);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f("#0BFFFF").s().p("AgfAoQgPgOAAgaQAAgYAOgPQAOgPAVAAQAUAAALAOQAMANABAUIAAAHIhKAAIAAAAQAAAVAIAKQAKAJAOAAQAIAAAKgCQAHgCALgGIAAARQgKAEgIACQgIACgKAAQgYAAgMgPgAgSgfQgHAJgBAKIA4gBQgCgKgGgIQgIgIgMAAQgLAAgJAIg");
	this.shape_1388.setTransform(711.25,529.475);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f("#0BFFFF").s().p("AATBJQgPAAgIgKQgJgKAAgSIAAhdIgbAAIAAgOIAsAAIAABrQAAALAEAGQAEAGAIAAIAUAAIAAAPg");
	this.shape_1389.setTransform(700.3,527.425);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f("#FFFFFF").s().p("AgPATIAAglIAfAAIAAAlg");
	this.shape_1390.setTransform(687.775,532.825);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f("#0BFFFF").s().p("AgjBFIAAgQIAeAAIAAhoIgjARIAAgSIAigQIASAAIAAB5IAdAAIAAAQg");
	this.shape_1391.setTransform(677.125,527.775);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_1392.setTransform(665.25,537.25);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f("#0BFFFF").s().p("AAVBDQgUAAgGgIQgIgIAAgTIAAg3IgcAAIAAgOIAcAAIAAgdIAQAAIAAAdIAnAAIAAAOIgnAAIAAA3QAAAMAFAFQAEAEALAAIATAAIAAAOg");
	this.shape_1393.setTransform(653.5,528);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f("#0BFFFF").s().p("AgTA1QgJgBgJgEIAAgRIASAHQAJADAIAAQALAAAFgFQAHgFAAgIQAAgMgWgEIgBgBIgGgBQgOgDgIgGQgHgGAAgMQABgPAJgIQALgJASAAQAIAAAHACIAQAFIAAAQQgGgEgJgCQgHgCgIAAQgKAAgGAEQgHAEAAAHQAAAHAFADQAEADAQAEIAHABQAOADAFAGQAHAHAAAMQAAAPgLAJQgLAJgTAAIgQgCg");
	this.shape_1394.setTransform(642.4,529.475);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAiAAIAAhMIgbAAIAAgOIAqAAIAABaIAiAAIAAANgAgHgyIAAgVIAPAAIAAAVg");
	this.shape_1395.setTransform(631.6,527.475);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f("#0BFFFF").s().p("AATBJQgPAAgIgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAGQAEAGAJAAIAUAAIAAAPg");
	this.shape_1396.setTransform(619.975,527.425);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f("#FF931D").s().p("AgwAIIAAgPIBhgnIAAARIhOAdIBOAeIAAARg");
	this.shape_1397.setTransform(596.475,528.725);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAjAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_1398.setTransform(574.25,527.475);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f("#FFFFFF").s().p("AgSBBIAJgjIAAgZIAcAAIAAAZIgSAjgAgKgfIAAghIAcAAIAAAhg");
	this.shape_1399.setTransform(549.925,530.825);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f("#FF931D").s().p("AghA2QgLgRAAglQAAgjALgSQAMgSAVAAQAXAAAKASQAMATAAAiQAAAjgMATQgKASgXAAQgVAAgMgSgAgTAqQAHAPAMAAQANAAAHgOQAGgNAAgeQAAgPgCgMgAgSgqQgHAOAAAcQAAANABAMIArhFQgHgMgMAAQgNAAgFAOg");
	this.shape_1400.setTransform(539.1,527.775);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f("#FF931D").s().p("AgwAeIAAgQIBhAAIAAAQgAgwgNIAAgQIBhAAIAAAQg");
	this.shape_1401.setTransform(516.15,528.625);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f("#0BFFFF").s().p("AgqBIIAAgNIAiAAIAAhMIgaAAIAAgOIArAAIAABaIAiAAIAAANgAgIgyIAAgVIARAAIAAAVg");
	this.shape_1402.setTransform(493.925,527.475);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f("#0071BC").s().p("AAVBDQgTAAgHgIQgIgIAAgTIAAg3IgcAAIAAgOIAcAAIAAgdIAQAAIAAAdIAnAAIAAAOIgnAAIAAA3QAAAMAEAFQAFAEALAAIATAAIAAAOg");
	this.shape_1403.setTransform(469.925,528);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f("#0071BC").s().p("AggAoQgNgOAAgaQAAgXANgQQANgPAWAAQATAAAMAOQAMANAAAUIAAAHIhJAAIAAAAQAAAWAIAJQAJAJAPAAQAIAAAKgCIATgIIAAARQgKAEgJACQgIACgKAAQgYAAgNgPgAgRgfQgJAJAAAKIA3gBQgBgKgHgIQgHgIgMAAQgMAAgHAIg");
	this.shape_1404.setTransform(458.825,529.475);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f("#0071BC").s().p("AATBJQgPAAgIgKQgIgJAAgTIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAGQAEAGAJAAIAUAAIAAAPg");
	this.shape_1405.setTransform(447.875,527.425);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f("#FFFFFF").s().p("AAHBVQgNgXgIgUQgGgXAAgTQAAgTAGgWQAIgWANgVIAOAAQgLAUgHAWQgFAVAAAVQAAAVAFAVQAGAVAMAWg");
	this.shape_1406.setTransform(435.9,527.8);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f("#0071BC").s().p("AgkA1IAAhnIASAAIAAAVQADgLAJgHQAJgFAMgBQAGABAGACIAKAEIAAARIgLgGQgFgCgIAAQgOABgJAJQgIAKAAATIAAAzg");
	this.shape_1407.setTransform(414.2,529.35);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f("#0071BC").s().p("AggApQgLgNAAgcQAAgaALgOQALgOAVAAQAWAAALAOQAMAOAAAaQAAAcgMANQgLAOgWAAQgVAAgLgOgAgSgdQgIAKABATQgBATAIALQAFAKANAAQANAAAHgKQAHgKAAgUQAAgTgHgKQgGgKgOAAQgNAAgFAKg");
	this.shape_1408.setTransform(401.4,529.475);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f("#0071BC").s().p("AgMBIIAAhaIgcAAIAAgNIAcAAIAAgHQAAgRAIgJQAIgHAQgBIAUAAIAAAPIgTAAQgJAAgEADQgDAEgBAKIAAAJIAkAAIAAANIgkAAIAABag");
	this.shape_1409.setTransform(390.05,527.45);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f("#FFFFFF").s().p("AgnBXIAAgNIAHAAQAMAAAFgEQADgEAAgOIAAgTQAAgQAHgGQAGgGASgCQgTgDgFgFQgHgFAAgRIAAgYQAAgOgDgEQgFgEgMAAIgHAAIAAgNIAGAAQAXAAAIAHQAHAHAAAUIAAAYQAAAMAFAHQAGAGAMAAIAMAAIAAAMIgMAAQgMAAgFAIQgGAHAAAKIAAATQAAAVgHAGQgIAHgXAAg");
	this.shape_1410.setTransform(390.225,441.075);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f("#FFFFFF").s().p("AgSBBIAJgjIAAgZIAcAAIAAAZIgSAjgAgKgfIAAghIAcAAIAAAhg");
	this.shape_1411.setTransform(905.625,421.225);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f("#FFFFFF").s().p("AgUBVQAMgWAGgVQAFgVAAgVQAAgUgFgVQgGgUgMgXIAPAAQAMAWAIAVQAGAUAAAVQAAAWgGAUQgHAUgNAXg");
	this.shape_1412.setTransform(894.425,418.175);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f("#C69C6D").s().p("AgJAdIAAg5IATAAIAAA5g");
	this.shape_1413.setTransform(883.45,413.5);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f("#C69C6D").s().p("AgPATIAAglIAfAAIAAAlg");
	this.shape_1414.setTransform(871.375,423.225);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f("#C69C6D").s().p("AATBJQgPAAgIgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAGQAFAGAIAAIAUAAIAAAPg");
	this.shape_1415.setTransform(860.925,417.825);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f("#C69C6D").s().p("AghAuQgJgJAAgPQAAgSALgIQAMgJAWAAIAXAAIAAgCQAAgNgGgFQgHgGgNAAQgHAAgKACQgKADgHAFIAAgRIASgGIAQgCQAMAAAKAEQAJAEAGAIQADAEABAHQACAHAAAOIAAA6IgRAAIAAgPQgFAJgJAEQgIAFgLAAQgPAAgLgJgAgRAFQgIAGAAAKQAAAJAGAFQAFAGAKAAQAOAAAIgKQAIgKAAgRIAAgEIgWAAQgOAAgHAFg");
	this.shape_1416.setTransform(848.7,419.875);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f("#C69C6D").s().p("AgfArQgIgKAAgWIAAg/IARAAIAAA/QAAANAFAIQAFAGALAAQALAAAGgIQAHgIAAgQIAAg6IARAAIAABnIgRAAIAAgQQgFAJgIAFQgHAEgKAAQgQAAgIgKg");
	this.shape_1417.setTransform(837.475,420.025);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f("#C69C6D").s().p("AAZBJIAAg1QgDAHgIAFQgIAEgIAAQgSAAgLgOQgLgOAAgZQAAgaALgPQALgOASAAQAJAAAHAEQAHAEAEAIIAAgOIASAAIAACPgAgRgwQgHAKAAAVQAAATAHAKQAGAKALAAQANAAAGgKQAGgKAAgTQAAgVgGgJQgGgLgNAAQgLAAgGAKg");
	this.shape_1418.setTransform(825.775,421.775);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f("#C69C6D").s().p("AggAoQgNgOAAgaQAAgXANgQQANgPAWAAQATAAAMAOQAMANAAATIAAAIIhJAAIAAAAQAAAWAIAJQAJAJAPAAQAIAAAKgCIATgIIAAARQgKAEgJACQgIACgKAAQgYAAgNgPgAgRgfQgJAJAAAKIA3gBQgBgKgHgIQgHgIgMAAQgMAAgHAIg");
	this.shape_1419.setTransform(814.525,419.875);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f("#C69C6D").s().p("AAVBDQgUAAgGgIQgIgIAAgTIAAg3IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA3QAAAMAFAEQAEAFAKAAIAUAAIAAAOg");
	this.shape_1420.setTransform(791.2,418.4);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f("#C69C6D").s().p("AggApQgMgNAAgcQAAgaAMgOQAMgOAUAAQAVAAAMAOQAMAOAAAaQAAAcgMANQgLAOgWAAQgVAAgLgOgAgTgdQgGALgBASQABATAGALQAHAKAMAAQANAAAHgKQAGgKABgUQgBgTgGgKQgHgKgNAAQgMAAgHAKg");
	this.shape_1421.setTransform(780.05,419.875);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f("#C69C6D").s().p("AAXA2IAAhAQAAgPgFgGQgFgHgLABQgKgBgHAJQgHAKAAAOIAAA7IgRAAIAAhoIARAAIAAAQQAFgIAIgGQAIgEAJAAQAQAAAIAKQAIAKAAAWIAABAg");
	this.shape_1422.setTransform(768.625,419.75);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f("#C69C6D").s().p("AggAoQgNgOAAgaQAAgYANgPQANgPAWAAQATAAAMAOQAMANAAATIAAAIIhJAAIAAAAQAAAWAIAJQAJAJAPAAQAIAAAKgCQAGgCANgGIAAARQgKAEgJACQgIACgKAAQgYAAgNgPgAgRgfQgJAJAAAKIA3gBQAAgJgIgJQgHgIgMAAQgMAAgHAIg");
	this.shape_1423.setTransform(745.675,419.875);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f("#C69C6D").s().p("AgkA2IAAhoIARAAIAAAUQAFgKAIgGQAIgHANABQAHAAAEABQAGACAFADIAAASQgGgFgFgBQgGgCgHAAQgPAAgIAKQgJALAAAQIAAA1g");
	this.shape_1424.setTransform(735.475,419.75);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f("#C69C6D").s().p("AggAuQgKgJAAgPQAAgSALgIQANgJAVAAIAXAAIAAgCQgBgNgFgFQgHgGgNAAQgHAAgKACQgKADgHAFIAAgRIASgGIAQgCQAMAAAKAEQAIAEAHAIQADAEABAHQACAHAAAOIAAA6IgRAAIAAgPQgHAKgHADQgIAFgLAAQgRAAgIgJgAgSAFQgHAGAAAKQAAAJAFAFQAHAGAJAAQANAAAIgKQAIgJABgSIAAgEIgWAAQgOAAgIAFg");
	this.shape_1425.setTransform(722.5,419.875);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f("#C69C6D").s().p("AgTA1QgKgBgIgEIAAgRIASAHQAKADAHAAQAKAAAHgFQAFgFABgIQAAgMgXgEIAAgBIgHgBQgOgDgHgGQgHgHAAgLQAAgPAKgIQALgJARAAQAJAAAHACIAQAFIAAAQQgHgEgJgCQgGgCgIAAQgKAAgHAEQgFAEAAAHQgBAHAEADQAFADAQAEIAHABQAOADAFAGQAHAHAAAMQAAAPgLAJQgMAJgRAAg");
	this.shape_1426.setTransform(699.8,419.875);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f("#C69C6D").s().p("AgfAoQgPgOAAgaQAAgYAOgPQAOgPAVAAQAUAAALAOQAMANABATIAAAIIhKAAIAAAAQAAAWAIAJQAKAJAOAAQAIAAAJgCQAIgCALgGIAAARQgKAEgIACQgIACgKAAQgYAAgMgPgAgSgfQgHAJgBAKIA4gBQgCgKgGgIQgIgIgMAAQgLAAgJAIg");
	this.shape_1427.setTransform(688.3,419.875);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f("#C69C6D").s().p("AATBJQgPAAgIgKQgJgKAAgSIAAhdIgbAAIAAgOIAsAAIAABrQAAALAEAGQAFAGAHAAIAUAAIAAAPg");
	this.shape_1428.setTransform(677.35,417.825);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f("#C69C6D").s().p("AgNBGQgIgEgDgIIAAANIgSAAIAAiQIASAAIAAA2QADgHAIgEQAHgFAJAAQASAAALAPQALAPAAAYQAAAZgLAPQgLAPgTAAQgJAAgGgEgAgSgKQgGAKAAATQAAAUAGAKQAHAKALAAQAMAAAHgKQAGgKAAgUQAAgTgGgKQgHgKgMAAQgLAAgHAKg");
	this.shape_1429.setTransform(665.625,417.975);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f("#C69C6D").s().p("AggAuQgKgJAAgPQAAgSALgIQANgJAVAAIAXAAIAAgCQAAgNgGgFQgHgGgNAAQgHAAgKACQgKADgHAFIAAgRIASgGIAQgCQAMAAAKAEQAIADAHAJQADAEABAHQACAHAAAOIAAA6IgRAAIAAgPQgHAKgHADQgIAFgLAAQgRAAgIgJgAgSAFQgHAGAAAKQAAAJAFAFQAHAGAKAAQAMAAAIgKQAJgKAAgRIAAgEIgWAAQgOAAgIAFg");
	this.shape_1430.setTransform(653.65,419.875);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f("#C69C6D").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAiAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_1431.setTransform(643.1,417.875);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f("#C69C6D").s().p("AgkA2IAAhoIARAAIAAAUQAFgLAIgFQAJgHAMABQAHAAAEABIALAFIAAASIgLgGQgGgCgGAAQgQAAgIAKQgIAJgBASIAAA1g");
	this.shape_1432.setTransform(632.2,419.75);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f("#C69C6D").s().p("AghAuQgJgKAAgOQAAgSAMgIQALgJAWAAIAXAAIAAgCQAAgNgGgFQgHgGgNAAQgHAAgKACIgRAIIAAgRQAKgEAIgCIAQgCQAMAAAKAEQAIAEAHAIQADAFACAGQABAHAAAOIAAA6IgRAAIAAgPQgGAKgIADQgJAFgKAAQgQAAgKgJgAgRAFQgIAGAAAKQAAAJAGAFQAFAGAKAAQANAAAJgKQAIgKAAgRIAAgEIgWAAQgNAAgIAFg");
	this.shape_1433.setTransform(619.225,419.875);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f("#C69C6D").s().p("AgKA0IglhnIARAAIAeBWIAehWIASAAIglBng");
	this.shape_1434.setTransform(607.95,419.875);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f("#C69C6D").s().p("AggAoQgOgOAAgaQAAgYAOgPQANgPAWAAQAUAAALAOQAMAOAAASIAAAIIhJAAIAAAAQAAAVAIAKQAJAJAQAAQAGAAALgCQAFgCAOgGIAAARQgKAEgJACQgJACgJAAQgXAAgOgPgAgSgfQgIAJgBAKIA4gBQgBgKgGgIQgIgIgMAAQgLAAgJAIg");
	this.shape_1435.setTransform(585.05,419.875);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f("#C69C6D").s().p("AAXBJIAAhBQAAgNgFgHQgGgHgKABQgKgBgHAJQgHAJAAAOIAAA8IgRAAIAAiQIARAAIAAA4QAFgJAIgFQAHgEAKAAQAQAAAIAKQAIAKAAAVIAABBg");
	this.shape_1436.setTransform(573.575,417.85);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f("#C69C6D").s().p("AAVBDQgUAAgGgIQgIgIAAgTIAAg3IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA3QAAAMAFAEQAEAFALAAIATAAIAAAOg");
	this.shape_1437.setTransform(561.7,418.4);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f("#C69C6D").s().p("AgKAdIAAg5IAVAAIAAA5g");
	this.shape_1438.setTransform(550.7,413.5);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f("#FFFFFF").s().p("AAGBVQgNgXgGgUQgHgUAAgWQAAgVAHgUQAGgUANgXIAPAAQgNAXgFAUQgFAVAAAUQAAAVAFAVQAFAUANAXg");
	this.shape_1439.setTransform(539.175,418.175);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f("#F9EB70").s().p("AgeBFIAAgRIAQAGQAHACAHAAQANAAAGgIQAGgHAAgQIAAgNQgDAIgIAGQgHADgJAAQgSAAgLgOQgLgOAAgYQAAgYALgPQALgPASAAQAIAAAIAEQAHAFAEAHIAAgNIASAAIAABgQAAAXgMANQgKAMgVAAgAgRgxQgHAKAAAUQAAATAHAKQAHAJALABQALgBAHgJQAGgKAAgTQAAgTgGgLQgHgKgLAAQgLAAgHAKg");
	this.shape_1440.setTransform(527.325,421.8);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f("#F9EB70").s().p("AggApQgLgNAAgcQAAgaALgOQALgOAVAAQAWAAALAOQAMAPAAAZQAAAcgMANQgLAOgWAAQgVAAgLgOgAgTgdQgGAKAAATQAAAUAGAKQAHAKAMAAQANAAAHgKQAGgLABgTQgBgTgGgKQgHgKgNAAQgMAAgHAKg");
	this.shape_1441.setTransform(516.15,419.875);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f("#F9EB70").s().p("AATBJQgPAAgIgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAGQAFAGAIAAIAUAAIAAAPg");
	this.shape_1442.setTransform(505.225,417.825);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f("#FFFFFF").s().p("AgPATIAAglIAfAAIAAAlg");
	this.shape_1443.setTransform(492.725,423.225);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f("#0BFFFF").s().p("AggAoQgNgOAAgaQAAgXANgQQANgPAWAAQATAAAMAOQAMANAAATIAAAIIhJAAIAAAAQAAAWAIAJQAJAJAPAAQAIAAAKgCIATgIIAAARQgKAEgJACQgIACgKAAQgYAAgNgPgAgRgfQgJAJAAAKIA3gBQgBgKgHgIQgHgIgMAAQgMAAgHAIg");
	this.shape_1444.setTransform(481.775,419.875);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f("#0BFFFF").s().p("AATBJQgPAAgIgKQgIgJAAgTIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAGQAEAGAJAAIAUAAIAAAPg");
	this.shape_1445.setTransform(470.825,417.825);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f("#0BFFFF").s().p("AggApQgMgOAAgbQAAgZAMgPQALgOAVAAQAVAAAMAOQAMAPAAAZQAAAbgMAOQgLAOgWAAQgVAAgLgOgAgTgdQgGAKAAATQAAAUAGAKQAHAKAMAAQANAAAHgKQAGgKAAgUQAAgTgGgKQgHgKgNAAQgMAAgHAKg");
	this.shape_1446.setTransform(458.775,419.875);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f("#0BFFFF").s().p("AgTA1QgJgBgJgEIAAgRIASAHQAKADAHAAQALAAAGgFQAFgFABgIQgBgMgVgEIgBgBIgHgBQgOgDgHgGQgGgGgBgMQAAgPAKgIQALgJARAAQAJAAAHACIAQAFIAAAQQgHgEgIgCQgHgCgIAAQgLAAgFAEQgHAEAAAHQABAHAEADQADADARAEIAHABQANADAHAGQAGAHAAAMQAAAPgLAJQgMAJgRAAg");
	this.shape_1447.setTransform(447.35,419.875);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f("#0BFFFF").s().p("AAXA2IAAhAQAAgPgFgGQgFgHgLABQgKgBgHAJQgHAKAAAOIAAA7IgRAAIAAhoIARAAIAAAQQAFgIAIgGQAHgEAKAAQAQAAAIAKQAIAKAAAWIAABAg");
	this.shape_1448.setTransform(435.875,419.75);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f("#0BFFFF").s().p("AggApQgLgNAAgcQAAgaALgOQALgOAVAAQAWAAALAOQAMAOAAAaQAAAcgMANQgLAOgWAAQgVAAgLgOgAgTgdQgGALAAASQAAATAGALQAHAKAMAAQANAAAHgKQAHgKAAgUQAAgTgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_1449.setTransform(424.35,419.875);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f("#0BFFFF").s().p("AgaAoQgNgOAAgaQAAgYANgPQAPgPAWAAQAGAAAJACQAIADAGADIAAASQgHgGgGgCQgHgDgJAAQgPAAgIAKQgJALAAASQAAATAJALQAIAKAPAAQAJAAAHgCQAHgDAGgGIAAASQgHAEgHACQgGACgJAAQgXAAgOgPg");
	this.shape_1450.setTransform(412.975,419.875);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f("#FFFFFF").s().p("AAiBXQgXAAgIgHQgHgGAAgVIAAgTQAAgKgGgHQgFgIgMAAIgMAAIAAgMIAMAAQAMAAAGgGQAFgHAAgMIAAgYQAAgVAHgGQAIgHAXAAIAGAAIAAANIgHAAQgMAAgFAEQgEAFAAANIAAAZQAAAQgGAFQgGAGgSACQASABAGAHQAGAGAAAPIAAAUQAAANAEAEQAFAFAMAAIAHAAIAAANg");
	this.shape_1451.setTransform(470.125,395.35);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.f("#0071BC").s().p("AgfAoQgOgOgBgaQAAgYAOgPQANgPAWAAQAUAAALAOQALANABATIAAAIIhJAAIAAAAQgBAWAJAJQAKAJAPAAQAGAAALgCQAKgEAJgEIAAARIgTAGQgIACgKAAQgWAAgOgPgAgSgfQgHAHgBALIA3AAQgBgLgGgHQgHgIgNAAQgLAAgJAIg");
	this.shape_1452.setTransform(447.35,397.025);

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f("#0071BC").s().p("AgTA1IgSgFIAAgSQAKAGAIACQAIACAJAAQAKAAAGgEQAHgFAAgIQAAgMgWgFIgBAAIgGgBQgPgDgHgGQgGgHgBgLQABgPAJgJQAKgIATAAIAQACIAPAEIAAARQgGgEgJgCQgGgCgJAAQgLAAgFADQgGAEAAAIQAAAGAEAEQAEAEAQADIAIABQAMACAHAHQAGAHAAAMQAAAQgKAIQgLAJgUAAg");
	this.shape_1453.setTransform(435.85,397.025);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.f("#0071BC").s().p("AATBIQgQAAgHgJQgIgJAAgTIAAhdIgcAAIAAgOIAsAAIAABrQAAAMAEAFQAEAHAJAAIAUAAIAAANg");
	this.shape_1454.setTransform(424.925,394.95);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f("#0071BC").s().p("AggAoQgNgPAAgZQAAgXANgQQANgPAWAAQATAAAMAOQAMANAAATIAAAIIhJAAIAAAAQgBAWAJAJQAJAJAPAAQAIAAAKgCIATgIIAAARIgTAGQgIACgKAAQgXAAgOgPgAgRgfQgIAIgBAKIA3AAQAAgKgIgIQgGgIgNAAQgMAAgHAIg");
	this.shape_1455.setTransform(412.925,397.025);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f("#FFFFFF").s().p("AgnBXIAAgNIAHAAQAMAAAFgFQADgDAAgOIAAgUQAAgPAHgGQAGgGASgCQgSgCgGgGQgHgGAAgPIAAgZQAAgOgDgEQgFgEgMAAIgHAAIAAgNIAGAAQAXAAAIAHQAHAGAAAVIAAAYQAAAMAFAHQAGAGAMAAIAMAAIAAAMIgMAAQgMAAgFAIQgGAHAAAKIAAATQAAAVgHAGQgIAHgXAAg");
	this.shape_1456.setTransform(390.225,395.35);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f("#FFFFFF").s().p("AgSBBIAJgjIAAgZIAcAAIAAAZIgSAjgAgKgfIAAghIAcAAIAAAhg");
	this.shape_1457.setTransform(859.725,375.475);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.f("#FFFFFF").s().p("AgUBVQANgYAFgTQAFgVAAgVQAAgVgFgUQgFgTgNgYIAPAAQAMAWAIAVQAGAUAAAVQAAAWgGAUQgHAUgNAXg");
	this.shape_1458.setTransform(848.525,372.45);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f("#C69C6D").s().p("AgJAdIAAg5IATAAIAAA5g");
	this.shape_1459.setTransform(837.55,367.75);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f("#C69C6D").s().p("AgPATIAAglIAfAAIAAAlg");
	this.shape_1460.setTransform(825.475,377.475);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f("#C69C6D").s().p("AATBJQgPAAgIgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAANAEAEQAFAGAIAAIAUAAIAAAPg");
	this.shape_1461.setTransform(815.025,372.075);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f("#C69C6D").s().p("AggAtQgKgHAAgQQAAgSALgHQAMgKAWAAIAXAAIAAgDQAAgMgGgGQgGgFgOAAQgJAAgIACIgRAIIAAgRIASgGIAQgCQANABAJADQAJAEAGAIQADADABAIQACAHAAANIAAA7IgRAAIAAgQQgFAJgJAGQgJADgKAAQgPABgKgKgAgRAFQgIAGAAAJQAAAKAGAFQAFAGAKAAQAOgBAIgJQAIgLAAgQIAAgEIgWAAQgNAAgIAFg");
	this.shape_1462.setTransform(802.8,374.15);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f("#C69C6D").s().p("AgfArQgIgKAAgWIAAg/IARAAIAAA/QAAAOAFAHQAGAHAKAAQALAAAGgJQAHgIAAgQIAAg6IARAAIAABnIgRAAIAAgQQgFAJgIAFQgHAEgKAAQgQAAgIgKg");
	this.shape_1463.setTransform(791.575,374.275);

	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f("#C69C6D").s().p("AAZBJIAAg1QgDAHgIAFQgIAEgHAAQgTAAgLgOQgLgOAAgZQAAgaALgOQALgPATAAQAIAAAHAEQAGAEAFAIIAAgOIASAAIAACPgAgRgvQgHAJAAAVQAAATAHAKQAGAKALAAQANAAAGgKQAGgKAAgTQAAgVgGgJQgGgLgNAAQgLAAgGALg");
	this.shape_1464.setTransform(779.875,376.025);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f("#C69C6D").s().p("AggAoQgNgOAAgaQAAgYANgPQANgPAWAAQATAAAMAOQAMAOAAASIAAAIIhJAAIAAAAQAAAVAIAKQAJAJAPAAQAKAAAIgDQAGgBANgHIAAARQgKAFgJABQgIACgKAAQgYAAgNgOgAgRgfQgJAJAAAKIA3AAQAAgLgIgIQgGgIgNAAQgMAAgHAIg");
	this.shape_1465.setTransform(768.625,374.15);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f("#C69C6D").s().p("AggAoQgNgOAAgaQAAgYANgPQANgPAWAAQATAAAMAOQAMAOAAASIAAAIIhJAAIAAAAQAAAVAIAKQAJAJAPAAQAKAAAIgDQAGgBANgHIAAARQgKAFgJABQgIACgKAAQgYAAgNgOgAgRgfQgJAJAAAKIA3AAQAAgLgIgIQgGgIgNAAQgMAAgHAIg");
	this.shape_1466.setTransform(745.675,374.15);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f("#C69C6D").s().p("AgkA1IAAhnIARAAIAAAUQAFgLAIgGQAJgFAMAAQAGAAAFABQAHACAEADIAAASQgFgEgGgDIgNgCQgPAAgIAKQgJALAAARIAAA0g");
	this.shape_1467.setTransform(735.475,374.025);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f("#C69C6D").s().p("AggAtQgKgHAAgQQAAgSALgHQAMgKAWAAIAXAAIAAgDQgBgMgFgGQgGgFgOAAQgJAAgIACQgJACgIAGIAAgRIASgGIAQgCQANABAJADQAIADAHAJQADADABAIQACAHAAANIAAA7IgRAAIAAgQQgGAKgIAFQgJADgKAAQgRABgIgKgAgSAFQgHAGAAAJQAAAJAFAGQAHAGAJAAQANgBAIgJQAIgKABgRIAAgEIgWAAQgOAAgIAFg");
	this.shape_1468.setTransform(722.5,374.15);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f("#C69C6D").s().p("AgTA1QgKgCgIgDIAAgRQAIAFAKACQAKADAHAAQAKAAAHgFQAFgFABgIQAAgMgXgEIAAgBIgHgBQgOgDgHgGQgHgHAAgLQAAgPAKgJQAKgIASAAQAJABAHABIAQAFIAAAQQgKgFgGgBQgIgCgGAAQgKAAgHADQgFAEAAAIQgBAGAEAFQAGAEAPACIAHABQAOADAFAGQAHAIAAALQAAAOgLAKQgLAIgSAAg");
	this.shape_1469.setTransform(699.8,374.15);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f("#C69C6D").s().p("AgfAoQgPgOAAgaQAAgYAOgPQANgPAWAAQAUAAALAOQAMANABATIAAAIIhKAAIAAAAQAAAVAIAKQAKAJAOAAQAKAAAHgDQAIgBALgHIAAARQgKAFgIABQgIACgKAAQgYAAgMgOgAgSgfQgHAJgBAKIA4AAQgCgMgGgHQgHgIgNAAQgMAAgIAIg");
	this.shape_1470.setTransform(688.3,374.15);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f("#C69C6D").s().p("AATBJQgPAAgIgKQgJgKAAgSIAAhdIgbAAIAAgOIAsAAIAABrQAAAMAEAFQAFAGAHAAIAUAAIAAAPg");
	this.shape_1471.setTransform(677.35,372.075);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f("#C69C6D").s().p("AgNBGQgIgEgDgIIAAANIgSAAIAAiQIASAAIAAA2QADgHAIgEQAGgEAKAAQASAAALAOQALAPAAAYQAAAagLAOQgLAPgTAAQgJAAgGgEgAgSgKQgGAKAAATQAAAUAGAKQAGAKAMAAQAMAAAHgKQAGgJAAgVQAAgTgGgKQgHgKgMAAQgMAAgGAKg");
	this.shape_1472.setTransform(665.625,372.225);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f("#C69C6D").s().p("AggAtQgKgHAAgQQAAgSALgHQAMgKAWAAIAXAAIAAgDQAAgMgGgGQgGgFgOAAQgJAAgIACQgJACgIAGIAAgRIASgGIAQgCQANABAJADQAIADAHAJQADADABAIQACAHAAANIAAA7IgRAAIAAgQQgGAKgIAFQgJADgKAAQgRABgIgKgAgSAFQgHAGAAAJQAAAJAFAGQAHAGAKAAQAMgBAIgJQAJgKAAgRIAAgEIgWAAQgOAAgIAFg");
	this.shape_1473.setTransform(653.65,374.15);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f("#C69C6D").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAiAAIAAANgAgIgxIAAgWIAQAAIAAAWg");
	this.shape_1474.setTransform(643.1,372.125);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f("#C69C6D").s().p("AgkA1IAAhnIARAAIAAAUQAFgLAIgGQAJgFAMAAQAGAAAFABQAGACAFADIAAASQgEgEgHgDIgMgCQgQAAgIAKQgIAKgBASIAAA0g");
	this.shape_1475.setTransform(632.2,374.025);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f("#C69C6D").s().p("AghAtQgJgIAAgPQAAgSAMgHQALgKAWAAIAXAAIAAgDQAAgMgGgGQgGgFgOAAQgKAAgHACQgIACgJAGIAAgRIASgGIAQgCQANABAJADQAIADAHAJQADAFACAGQABAHAAANIAAA7IgRAAIAAgQQgFAKgJAFQgJADgKAAQgQABgKgKgAgRAFQgIAGAAAJQAAAKAGAFQAFAGAKAAQANgBAJgJQAIgKAAgRIAAgEIgWAAQgNAAgIAFg");
	this.shape_1476.setTransform(619.225,374.15);

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f("#C69C6D").s().p("AgKA0IglhnIARAAIAeBWIAehWIASAAIglBng");
	this.shape_1477.setTransform(607.95,374.15);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f("#C69C6D").s().p("AggAoQgOgOAAgaQAAgYAOgPQANgPAWAAQAUAAALAOQAMAOAAASIAAAIIhJAAIAAAAQAAAVAIAKQAJAJAQAAQAJAAAIgDQAFgBAOgHIAAARQgKAFgJABQgJACgJAAQgXAAgOgOgAgSgfQgIAJgBAKIA4AAQgBgLgGgIQgHgIgNAAQgLAAgJAIg");
	this.shape_1478.setTransform(585.05,374.15);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f("#C69C6D").s().p("AAXBIIAAhAQAAgNgFgHQgGgHgKAAQgKAAgHAJQgHAIAAAQIAAA6IgRAAIAAiQIARAAIAAA5QAFgJAIgFQAHgEAKAAQAQAAAIALQAIAJAAAVIAABAg");
	this.shape_1479.setTransform(573.575,372.1);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f("#C69C6D").s().p("AAVBDQgUAAgGgIQgIgHAAgUIAAg3IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA3QAAAMAFAFQAEAFALgBIATAAIAAAOg");
	this.shape_1480.setTransform(561.7,372.65);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f("#C69C6D").s().p("AgKAdIAAg5IAVAAIAAA5g");
	this.shape_1481.setTransform(550.7,367.75);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f("#FFFFFF").s().p("AAGBVQgNgYgGgTQgHgUAAgWQAAgVAHgUQAGgUANgXIAPAAQgMAWgGAVQgFAUAAAVQAAAVAFAWQAFASANAYg");
	this.shape_1482.setTransform(539.175,372.45);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f("#F9EB70").s().p("AgPBIIgPgDIAAgRQAJAEAHACQAJACAFAAQANAAAGgHQAGgIAAgQIAAgNQgDAIgIAFQgGAFgKAAQgSAAgLgPQgLgOAAgYQAAgZALgOQALgPASAAQAKAAAGAEQAHAEAEAIIAAgNIASAAIAABgQAAAXgMANQgKAMgVAAgAgRgwQgHAJAAAUQAAATAHAJQAHAKALAAQALAAAHgKQAGgJAAgTQAAgTgGgKQgGgKgMAAQgMAAgGAKg");
	this.shape_1483.setTransform(527.325,376.075);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f("#F9EB70").s().p("AggApQgLgNAAgcQAAgaALgNQALgOAVgBQAWABALAOQAMAOAAAZQAAAcgMANQgLAOgWgBQgVABgLgOgAgTgdQgGAJAAAUQAAAUAGAKQAGAKANAAQAOAAAGgKQAGgLABgTQgBgTgGgKQgGgKgOAAQgNAAgGAKg");
	this.shape_1484.setTransform(516.15,374.15);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f("#F9EB70").s().p("AATBJQgPAAgIgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAAMAEAFQAFAGAIAAIAUAAIAAAPg");
	this.shape_1485.setTransform(505.225,372.075);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f("#FFFFFF").s().p("AgPATIAAglIAfAAIAAAlg");
	this.shape_1486.setTransform(492.725,377.475);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f("#0BFFFF").s().p("AggAoQgNgOAAgaQAAgYANgPQANgPAWAAQATAAAMAOQAMAOAAASIAAAIIhJAAIAAAAQAAAVAIAKQAJAJAPAAQAKAAAIgDIATgIIAAARQgKAFgJABQgIACgKAAQgYAAgNgOgAgRgfQgJAJAAAKIA3AAQgBgMgHgHQgGgIgNAAQgMAAgHAIg");
	this.shape_1487.setTransform(481.775,374.15);

	this.shape_1488 = new cjs.Shape();
	this.shape_1488.graphics.f("#0BFFFF").s().p("AATBJQgPAAgIgKQgIgJAAgTIAAhdIgcAAIAAgOIAsAAIAABrQAAAMAEAFQAEAGAJAAIAUAAIAAAPg");
	this.shape_1488.setTransform(470.825,372.075);

	this.shape_1489 = new cjs.Shape();
	this.shape_1489.graphics.f("#0BFFFF").s().p("AggApQgMgOAAgbQAAgZAMgOQALgOAVgBQAVABAMAOQAMAOAAAZQAAAbgMAOQgLAOgWgBQgVABgLgOgAgTgdQgGAJAAAUQAAAUAGAKQAHAKAMAAQANAAAHgKQAGgKAAgUQAAgUgGgJQgHgKgNAAQgMAAgHAKg");
	this.shape_1489.setTransform(458.775,374.15);

	this.shape_1490 = new cjs.Shape();
	this.shape_1490.graphics.f("#0BFFFF").s().p("AgTA1QgJgCgJgDIAAgRQAKAFAIACQAKADAHAAQAKAAAHgFQAFgFABgIQgBgMgVgEIgBgBIgHgBQgPgDgGgGQgGgHgBgLQAAgQAKgIQAKgIASAAQAJABAHABIAQAFIAAAQQgJgFgGgBQgJgCgGAAQgLAAgFADQgHAEAAAIQABAHAEAEQAFADAPADIAHABQANADAHAGQAGAHAAAMQAAAPgLAJQgLAIgSAAg");
	this.shape_1490.setTransform(447.35,374.15);

	this.shape_1491 = new cjs.Shape();
	this.shape_1491.graphics.f("#0BFFFF").s().p("AAXA1IAAg/QAAgPgFgGQgFgHgLAAQgKAAgHAJQgHAKAAAOIAAA6IgRAAIAAhnIARAAIAAAQQAFgJAIgFQAHgEAKAAQAQAAAIAKQAIAKAAAWIAAA/g");
	this.shape_1491.setTransform(435.875,374.025);

	this.shape_1492 = new cjs.Shape();
	this.shape_1492.graphics.f("#0BFFFF").s().p("AggApQgLgNAAgcQAAgaALgNQALgOAVgBQAWABALAOQAMANAAAaQAAAcgMANQgLAOgWgBQgVABgLgOgAgTgdQgGAKAAATQAAASAGAMQAGAKANAAQANAAAHgKQAHgKAAgUQAAgUgHgJQgHgKgNAAQgNAAgGAKg");
	this.shape_1492.setTransform(424.35,374.15);

	this.shape_1493 = new cjs.Shape();
	this.shape_1493.graphics.f("#0BFFFF").s().p("AgaAoQgNgOAAgaQAAgZANgOQAOgPAXAAQAIABAHABQAIADAGADIAAASQgFgFgIgEQgGgCgKAAQgPAAgIAKQgJAKAAATQAAAUAJAJQAIALAPAAQALAAAFgDQAIgDAFgFIAAARQgHAFgHABQgGACgJAAQgXAAgOgOg");
	this.shape_1493.setTransform(412.975,374.15);

	this.shape_1494 = new cjs.Shape();
	this.shape_1494.graphics.f("#FFFFFF").s().p("AAiBXQgXAAgIgHQgHgHAAgVIAAgSQAAgJgGgJQgGgHgMAAIgLAAIAAgMIALAAQAOAAAFgHQAFgFAAgNIAAgYQAAgUAHgIQAHgGAYAAIAGAAIAAANIgHAAQgNAAgEAEQgEAFAAANIAAAYQAAARgGAGQgGAFgSACQASACAGAGQAGAGAAAQIAAATQAAAOAEADQAEAEANABIAHAAIAAANg");
	this.shape_1494.setTransform(745.525,349.6);

	this.shape_1495 = new cjs.Shape();
	this.shape_1495.graphics.f("#FFFFFF").s().p("AgUBVQALgVAHgWQAFgVAAgVQAAgUgFgVQgHgXgLgUIAOAAQANAWAHAVQAHAWAAATQAAAUgHAWQgHAVgNAWg");
	this.shape_1495.setTransform(722.325,349.575);

	this.shape_1496 = new cjs.Shape();
	this.shape_1496.graphics.f("#0BFFFF").s().p("AgpBHIAAgQIAvg0QAJgKAEgIQADgHAAgHQAAgNgHgFQgHgHgLAAQgIAAgKADQgIADgLAGIAAgTIATgHQAIgCAKAAQATAAANALQAMALAAARQABAJgFAJQgEAJgKAKIgsAxIA/AAIAAAQg");
	this.shape_1496.setTransform(711.1,349.425);

	this.shape_1497 = new cjs.Shape();
	this.shape_1497.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_1497.setTransform(699.7,359.05);

	this.shape_1498 = new cjs.Shape();
	this.shape_1498.graphics.f("#0BFFFF").s().p("AgfAoQgPgOAAgaQAAgYAOgPQAOgPAVAAQAUAAALAOQAMANABATIAAAIIhKAAIAAAAQAAAWAIAJQAKAJAOAAQAIAAAJgCQAMgEAHgEIAAARIgSAGQgIACgKAAQgXAAgNgPgAgSgfQgHAIgBAKIA4AAQgCgLgGgHQgHgIgNAAQgLAAgJAIg");
	this.shape_1498.setTransform(688.3,351.275);

	this.shape_1499 = new cjs.Shape();
	this.shape_1499.graphics.f("#0BFFFF").s().p("AATBJQgPAAgIgKQgJgKAAgSIAAhdIgbAAIAAgOIAsAAIAABrQAAALAEAGQAFAGAHAAIAUAAIAAAPg");
	this.shape_1499.setTransform(677.35,349.225);

	this.shape_1500 = new cjs.Shape();
	this.shape_1500.graphics.f("#0BFFFF").s().p("AgNBGQgIgEgDgIIAAANIgSAAIAAiQIASAAIAAA2QADgHAIgFQAIgEAIAAQASAAALAPQALAOAAAZQAAAZgLAPQgLAPgTAAQgHAAgIgEgAgSgKQgGAKAAATQAAAUAGAKQAHAKALAAQAMAAAHgKQAGgKAAgUQAAgTgGgKQgHgKgMAAQgLAAgHAKg");
	this.shape_1500.setTransform(665.625,349.375);

	this.shape_1501 = new cjs.Shape();
	this.shape_1501.graphics.f("#0BFFFF").s().p("AggAuQgKgJAAgPQAAgSALgIQANgJAVAAIAXAAIAAgCQAAgMgGgHQgHgFgNAAQgHAAgKACQgMAEgFAEIAAgRIASgGQAIgCAIAAQAMAAAKAEQAIADAHAJQADAEABAHQACAHAAAOIAAA6IgRAAIAAgPQgGAJgIAEQgIAFgLAAQgRAAgIgJgAgSAFQgHAFAAALQAAAJAFAFQAGAFALAAQANAAAHgJQAJgKAAgSIAAgDIgWAAQgOAAgIAFg");
	this.shape_1501.setTransform(653.65,351.275);

	this.shape_1502 = new cjs.Shape();
	this.shape_1502.graphics.f("#0BFFFF").s().p("AgpBIIAAgNIAhAAIAAhMIgbAAIAAgOIArAAIAABaIAiAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_1502.setTransform(643.1,349.275);

	this.shape_1503 = new cjs.Shape();
	this.shape_1503.graphics.f("#0BFFFF").s().p("AgkA2IAAhoIARAAIAAAUQAFgLAIgGQAJgFAMAAQAGAAAFABIALAFIAAARQgFgEgGgBQgGgCgGgBQgQAAgIALQgIAIgBAUIAAA0g");
	this.shape_1503.setTransform(632.2,351.15);

	this.shape_1504 = new cjs.Shape();
	this.shape_1504.graphics.f("#0BFFFF").s().p("AghAuQgJgKAAgOQAAgSAMgIQALgJAWAAIAXAAIAAgCQAAgNgGgGQgHgFgNAAQgHAAgKACQgLAEgGAEIAAgRQAKgEAIgCQAIgCAIAAQAMAAAKAEQAIAEAHAIQADAFACAGQABAHAAAOIAAA6IgRAAIAAgPQgFAJgJAEQgJAFgKAAQgQAAgKgJgAgRAFQgIAFAAALQAAAJAGAFQAFAFAKAAQAOAAAIgJQAIgKAAgSIAAgDIgWAAQgOAAgHAFg");
	this.shape_1504.setTransform(619.225,351.275);

	this.shape_1505 = new cjs.Shape();
	this.shape_1505.graphics.f("#0BFFFF").s().p("AgKA0IglhnIARAAIAeBWIAehWIASAAIglBng");
	this.shape_1505.setTransform(607.95,351.275);

	this.shape_1506 = new cjs.Shape();
	this.shape_1506.graphics.f("#FF931D").s().p("AgwAeIAAgQIBhAAIAAAQgAgwgNIAAgQIBhAAIAAAQg");
	this.shape_1506.setTransform(584.975,350.425);

	this.shape_1507 = new cjs.Shape();
	this.shape_1507.graphics.f("#FF931D").s().p("AgwAeIAAgQIBhAAIAAAQgAgwgNIAAgQIBhAAIAAAQg");
	this.shape_1507.setTransform(573.525,350.425);

	this.shape_1508 = new cjs.Shape();
	this.shape_1508.graphics.f("#FF931D").s().p("AgwAeIAAgQIBhAAIAAAQgAgwgNIAAgQIBhAAIAAAQg");
	this.shape_1508.setTransform(562.025,350.425);

	this.shape_1509 = new cjs.Shape();
	this.shape_1509.graphics.f("#0BFFFF").s().p("AgjBFIAAgQIAeAAIAAhoIgjARIAAgSIAigQIASAAIAAB5IAdAAIAAAQg");
	this.shape_1509.setTransform(539.425,349.575);

	this.shape_1510 = new cjs.Shape();
	this.shape_1510.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_1510.setTransform(527.575,359.05);

	this.shape_1511 = new cjs.Shape();
	this.shape_1511.graphics.f("#0BFFFF").s().p("AggAoQgOgPAAgZQAAgYAOgPQANgPAWAAQAUAAALAOQAMAOAAASIAAAIIhJAAIAAAAQgBAWAJAJQAJAJAQAAQAGAAALgCQALgEAIgEIAAARIgTAGQgJACgJAAQgWAAgPgPgAgSgfQgHAHgBALIA3AAQgBgLgGgHQgHgIgNAAQgLAAgJAIg");
	this.shape_1511.setTransform(516.2,351.275);

	this.shape_1512 = new cjs.Shape();
	this.shape_1512.graphics.f("#0BFFFF").s().p("AATBJQgPAAgIgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAGQAFAGAIAAIAUAAIAAAPg");
	this.shape_1512.setTransform(505.225,349.225);

	this.shape_1513 = new cjs.Shape();
	this.shape_1513.graphics.f("#0BFFFF").s().p("AgNBGQgHgEgFgIIAAANIgRAAIAAiQIARAAIAAA2QAFgIAHgEQAIgEAHAAQATAAALAPQALAOAAAZQAAAagLAOQgLAPgTAAQgHAAgIgEgAgSgKQgHAKAAATQAAATAHALQAHAKALAAQAMAAAGgKQAHgKAAgUQAAgTgHgKQgGgKgMAAQgLAAgHAKg");
	this.shape_1513.setTransform(493.525,349.375);

	this.shape_1514 = new cjs.Shape();
	this.shape_1514.graphics.f("#0BFFFF").s().p("AghAuQgJgKAAgOQAAgSAMgIQALgJAWAAIAXAAIAAgCQAAgNgGgGQgHgFgNAAQgIAAgJACQgMAEgFAEIAAgRQAKgEAIgCQAIgCAIAAQAMAAAKAEQAIAEAHAIQADAFACAGQABAHAAAOIAAA6IgRAAIAAgPQgFAJgJAEQgIAFgLAAQgQAAgKgJgAgRAFQgIAFAAALQAAAJAGAFQAFAFALAAQANAAAIgJQAIgKAAgSIAAgDIgWAAQgOAAgHAFg");
	this.shape_1514.setTransform(481.525,351.275);

	this.shape_1515 = new cjs.Shape();
	this.shape_1515.graphics.f("#0BFFFF").s().p("AgqBIIAAgNIAiAAIAAhMIgbAAIAAgOIArAAIAABaIAjAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_1515.setTransform(471,349.275);

	this.shape_1516 = new cjs.Shape();
	this.shape_1516.graphics.f("#0BFFFF").s().p("AgkA2IAAhoIASAAIAAAUQADgKAJgHQAJgFAMAAIAMABIAKAFIAAARQgGgEgFgBQgFgCgIgBQgPAAgIALQgJAJABATIAAA0g");
	this.shape_1516.setTransform(460.1,351.15);

	this.shape_1517 = new cjs.Shape();
	this.shape_1517.graphics.f("#0BFFFF").s().p("AggAuQgKgJAAgPQAAgSAMgIQAMgJAVAAIAXAAIAAgCQAAgNgGgGQgHgFgNAAQgHAAgKACQgLAEgGAEIAAgRIASgGQAIgCAIAAQAMAAAKAEQAJAEAGAIQADAEABAHQACAHAAAOIAAA6IgRAAIAAgPQgFAIgJAFQgIAFgLAAQgPAAgKgJgAgSAFQgHAFAAALQAAAJAGAFQAFAFAKAAQAOAAAIgJQAIgLAAgRIAAgDIgWAAQgNAAgJAFg");
	this.shape_1517.setTransform(447.1,351.275);

	this.shape_1518 = new cjs.Shape();
	this.shape_1518.graphics.f("#0BFFFF").s().p("AgKA0IglhnIASAAIAdBWIAehWIASAAIglBng");
	this.shape_1518.setTransform(435.825,351.275);

	this.shape_1519 = new cjs.Shape();
	this.shape_1519.graphics.f("#FFFFFF").s().p("AAHBVQgNgWgHgVQgHgWAAgUQAAgTAHgWQAHgVANgWIAOAAQgLAUgHAWQgFAVAAAVQAAAVAFAVQAHAXALAUg");
	this.shape_1519.setTransform(424.425,349.575);

	this.shape_1520 = new cjs.Shape();
	this.shape_1520.graphics.f("#0071BC").s().p("AgMBJIAAhbIgbAAIAAgNIAbAAIAAgHQAAgRAIgJQAHgHARgBIAUAAIAAAPIgTAAQgKAAgDADQgDAEAAAKIAAAJIAjAAIAAANIgjAAIAABbg");
	this.shape_1520.setTransform(401.525,349.25);

	this.shape_1521 = new cjs.Shape();
	this.shape_1521.graphics.f("#0071BC").s().p("AgpBIIAAgNIAhAAIAAhMIgaAAIAAgOIAqAAIAABaIAiAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_1521.setTransform(390.65,349.275);

	this.shape_1522 = new cjs.Shape();
	this.shape_1522.graphics.f("#FFFFFF").s().p("AgTBVIAAgNIAWAAIAAiPIgWAAIAAgNIAnAAIAACpg");
	this.shape_1522.setTransform(733.125,195.3);

	this.shape_1523 = new cjs.Shape();
	this.shape_1523.graphics.f("#FF931D").s().p("AgpBHIAAgQIAvg0QALgNACgFQADgIAAgGQAAgMgHgGQgHgHgLAAQgJAAgIADQgJADgLAGIAAgTQAKgFAJgCQAIgCAKAAQAUAAAMALQAMALAAARQAAAJgEAJQgEAJgJAKIgtAxIA/AAIAAAQg");
	this.shape_1523.setTransform(722.575,195.175);

	this.shape_1524 = new cjs.Shape();
	this.shape_1524.graphics.f("#FFFFFF").s().p("AgSAgIAKgnIAAgZIAbAAIAAAZIgTAng");
	this.shape_1524.setTransform(699.05,202.1);

	this.shape_1525 = new cjs.Shape();
	this.shape_1525.graphics.f("#FF931D").s().p("AgYBFIAvh6IhCAAIAAgPIBXAAIAAAHIgxCCg");
	this.shape_1525.setTransform(688.175,195.3);

	this.shape_1526 = new cjs.Shape();
	this.shape_1526.graphics.f("#FFFFFF").s().p("AgTAgIALgnIAAgZIAcAAIAAAZIgUAng");
	this.shape_1526.setTransform(664.625,202.1);

	this.shape_1527 = new cjs.Shape();
	this.shape_1527.graphics.f("#FF931D").s().p("AgXBGQgLgCgJgDIAAgTIATAIQAIACALAAQAOAAAIgHQAJgHgBgNQABgMgJgHQgIgHgNAAIgPAAIAAgOIAPAAQALAAAIgHQAHgFAAgKQAAgMgHgEQgGgHgMAAIgRACIgTAGIAAgRIAUgFIAQgBQATAAANAKQAMALgBAQQABALgHAIQgGAIgNADQAPAEAHAIQAHAJAAAOQAAAUgNAKQgMALgXAAQgLAAgIgCg");
	this.shape_1527.setTransform(653.75,195.3);

	this.shape_1528 = new cjs.Shape();
	this.shape_1528.graphics.f("#FFFFFF").s().p("AgSAgIAKgnIAAgZIAbAAIAAAZIgTAng");
	this.shape_1528.setTransform(630.2,202.1);

	this.shape_1529 = new cjs.Shape();
	this.shape_1529.graphics.f("#FF931D").s().p("AghA2QgLgRAAglQAAgiANgTQAOgSAZAAQAHAAAGABQAJACAFADIAAARQgGgEgHgCIgNgCQgQAAgKAOQgKANABAbQAEgJAIgGQAHgEAKAAQAUAAALAMQALALAAAWQAAAYgLAMQgMAMgUAAQgXAAgMgSgAgRABQgHAJAAAOQAAAQAHAJQAIAIAKABQANAAAGgJQAHgIAAgRQAAgPgHgJQgGgHgNAAQgLAAgHAIg");
	this.shape_1529.setTransform(619.4,195.3);

	this.shape_1530 = new cjs.Shape();
	this.shape_1530.graphics.f("#FFFFFF").s().p("AgTAgIALgnIAAgZIAcAAIAAAZIgUAng");
	this.shape_1530.setTransform(595.775,202.1);

	this.shape_1531 = new cjs.Shape();
	this.shape_1531.graphics.f("#FF931D").s().p("AgpBHIAAgQIAeghIARgTQAKgLADgHQADgHAAgHQAAgMgHgGQgHgHgKAAQgKAAgIADQgLAEgJAFIAAgTQAKgEAJgDQAIgCAKAAQAUAAAMALQAMALAAARQAAAKgEAIQgFALgIAIIgtAxIA/AAIAAAQg");
	this.shape_1531.setTransform(584.875,195.175);

	this.shape_1532 = new cjs.Shape();
	this.shape_1532.graphics.f("#FFFFFF").s().p("AgSAgIAKgnIAAgZIAbAAIAAAZIgTAng");
	this.shape_1532.setTransform(561.35,202.1);

	this.shape_1533 = new cjs.Shape();
	this.shape_1533.graphics.f("#FF931D").s().p("AgaBFQgJgBgHgDIAAgTQAKAFAHACQAIACAKAAQAPAAAIgIQAIgJAAgPQAAgOgJgJQgIgHgPAAIgPACIgNAFIAAhGIBFAAIAAAQIg0AAIAAAiIAIgCIAIgBQAVAAAMANQANAMAAAVQAAAXgNAMQgNANgWAAg");
	this.shape_1533.setTransform(550.475,195.425);

	this.shape_1534 = new cjs.Shape();
	this.shape_1534.graphics.f("#FFFFFF").s().p("AgTBVIAAipIAnAAIAAANIgWAAIAACPIAWAAIAAANg");
	this.shape_1534.setTransform(540.575,195.3);

	this.shape_1535 = new cjs.Shape();
	this.shape_1535.graphics.f("#FF931D").s().p("AgwAeIAAgQIBhAAIAAAQgAgwgNIAAgQIBhAAIAAAQg");
	this.shape_1535.setTransform(516.15,196.175);

	this.shape_1536 = new cjs.Shape();
	this.shape_1536.graphics.f("#FFFFFF").s().p("AgjBFIAAgQIAeAAIAAhoIgjARIAAgSIAjgQIARAAIAAB5IAdAAIAAAQg");
	this.shape_1536.setTransform(493.525,195.325);

	this.shape_1537 = new cjs.Shape();
	this.shape_1537.graphics.f("#FFFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_1537.setTransform(481.7,204.8);

	this.shape_1538 = new cjs.Shape();
	this.shape_1538.graphics.f("#FFFFFF").s().p("AAVBDQgSAAgIgIQgIgIAAgSIAAg4IgcAAIAAgNIAcAAIAAgeIAQAAIAAAeIAnAAIAAANIgnAAIAAA4QAAALAEAEQAFAFALAAIATAAIAAAOg");
	this.shape_1538.setTransform(469.925,195.55);

	this.shape_1539 = new cjs.Shape();
	this.shape_1539.graphics.f("#FFFFFF").s().p("AgTA1IgSgFIAAgRQALAFAHACQAIACAJAAQAKAAAGgEQAHgFAAgIQAAgMgWgFIgBAAIgGgBQgOgCgIgHQgGgHgBgLQABgPAJgJQALgIASAAQAIAAAHACQAIABAIADIAAARQgGgEgJgCQgGgCgJAAQgLAAgFADQgGAEAAAIQAAAHAEADQAEADAQAEIAIABQANADAGAGQAGAHAAAMQAAAPgLAJQgLAJgTAAg");
	this.shape_1539.setTransform(458.8,197.025);

	this.shape_1540 = new cjs.Shape();
	this.shape_1540.graphics.f("#FFFFFF").s().p("AgqBIIAAgNIAiAAIAAhMIgbAAIAAgOIArAAIAABaIAjAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_1540.setTransform(448.05,195.025);

	this.shape_1541 = new cjs.Shape();
	this.shape_1541.graphics.f("#FFFFFF").s().p("AATBJQgPAAgIgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAAMAEAFQAFAGAIAAIAUAAIAAAPg");
	this.shape_1541.setTransform(436.375,194.975);

	this.shape_1542 = new cjs.Shape();
	this.shape_1542.graphics.f("#0071BC").s().p("AgkA1IAAhnIASAAIAAAVQADgLAJgGQAJgHAMAAIAMACIAKAFIAAASQgGgFgFgCQgFgBgIAAQgPgBgIAKQgIAKAAASIAAA0g");
	this.shape_1542.setTransform(414.2,196.9);

	this.shape_1543 = new cjs.Shape();
	this.shape_1543.graphics.f("#0071BC").s().p("AggAuQgKgJAAgPQAAgSALgIQANgJAVAAIAXAAIAAgCQAAgNgGgGQgHgFgNAAQgHAAgKACQgLAEgGAEIAAgRIASgGQAIgCAIAAQAMAAAKAEQAKAEAFAIQADAEABAHQACAHAAAOIAAA6IgRAAIAAgPQgFAIgJAFQgIAFgLAAQgQAAgJgJgAgSAFQgHAFAAALQAAAJAGAFQAFAFAKAAQAOAAAIgJQAIgLAAgRIAAgDIgWAAQgNAAgJAFg");
	this.shape_1543.setTransform(401.2,197.025);

	this.shape_1544 = new cjs.Shape();
	this.shape_1544.graphics.f("#0071BC").s().p("AgKA0IglhnIASAAIAdBWIAehWIASAAIglBng");
	this.shape_1544.setTransform(389.925,197.025);

	this.shape_1545 = new cjs.Shape();
	this.shape_1545.graphics.f("#FF931D").s().p("AggA9QgMgKAAgTQAAgOAHgKQAIgIANgDQgLgDgHgJQgHgIAAgMQAAgQALgKQAMgKASAAQATAAAMAKQALAJAAARQAAAMgHAIQgHAJgMADQAOADAIAIQAHAKAAAOQAAATgMAKQgLALgWAAQgVAAgLgLgAgTAKQgGAHAAANQAAANAHAHQAHAHALAAQANAAAGgHQAHgHAAgNQAAgMgHgIQgHgHgMAAQgLAAgIAHgAgQgzQgGAGAAAMQAAALAGAGQAGAGAKAAQALAAAGgGQAGgGAAgLQAAgMgGgGQgGgGgLAAQgKAAgGAGg");
	this.shape_1545.setTransform(596.475,172.425);

	this.shape_1546 = new cjs.Shape();
	this.shape_1546.graphics.f("#FF931D").s().p("AgpBHIAAgQIAvg0QAKgKADgIQADgGAAgIQAAgLgHgHQgGgHgLAAQgJAAgJADQgLAEgJAGIAAgTQAKgFAJgCQALgDAHAAQATAAANALQAMALAAASQAAAKgEAIQgFALgIAHIgtAxIA/AAIAAAQg");
	this.shape_1546.setTransform(584.875,172.275);

	this.shape_1547 = new cjs.Shape();
	this.shape_1547.graphics.f("#FF931D").s().p("AgwAeIAAgQIBhAAIAAAQgAgwgNIAAgQIBhAAIAAAQg");
	this.shape_1547.setTransform(562.025,173.325);

	this.shape_1548 = new cjs.Shape();
	this.shape_1548.graphics.f("#0BFFFF").s().p("AgpBHIAAgQIAvg0QAKgKADgIQADgGAAgIQAAgLgHgHQgGgHgLAAQgIAAgKADQgKAEgKAGIAAgTQAKgFAJgCQALgDAHAAQATAAANALQAMALAAASQAAAKgEAIQgDAJgKAJIgsAxIA+AAIAAAQg");
	this.shape_1548.setTransform(538.975,172.275);

	this.shape_1549 = new cjs.Shape();
	this.shape_1549.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_1549.setTransform(527.575,181.925);

	this.shape_1550 = new cjs.Shape();
	this.shape_1550.graphics.f("#0BFFFF").s().p("AggAoQgOgOAAgaQAAgYAOgPQANgPAWAAQAUAAALAOQAMAOAAASIAAAIIhJAAIAAAAQgBAWAJAJQAJAJAQAAQAHAAAKgDQAJgCAKgFIAAARIgTAGIgSACQgWAAgPgPgAgSgfQgHAHgBALIA3AAQgBgLgGgHQgHgIgNAAQgLAAgJAIg");
	this.shape_1550.setTransform(516.2,174.175);

	this.shape_1551 = new cjs.Shape();
	this.shape_1551.graphics.f("#0BFFFF").s().p("AATBJQgQAAgHgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAAMAEAFQAFAGAIAAIAUAAIAAAPg");
	this.shape_1551.setTransform(505.225,172.1);

	this.shape_1552 = new cjs.Shape();
	this.shape_1552.graphics.f("#0BFFFF").s().p("AgNBGQgHgFgFgHIAAANIgRAAIAAiQIARAAIAAA2QAFgIAHgEQAGgEAJAAQATAAALAPQALAOAAAYQAAAbgLAOQgLAPgTAAQgHAAgIgEgAgSgKQgHAKAAATQAAASAHAMQAHAKALAAQAMAAAGgKQAHgKAAgUQAAgTgHgKQgGgKgMAAQgLAAgHAKg");
	this.shape_1552.setTransform(493.525,172.275);

	this.shape_1553 = new cjs.Shape();
	this.shape_1553.graphics.f("#0BFFFF").s().p("AghAuQgJgKAAgOQAAgSAMgIQALgJAWAAIAXAAIAAgDQAAgMgGgGQgHgFgNAAQgKAAgHACQgJADgIAFIAAgSIASgFIAQgCQANAAAJAEQAIADAHAIQADAGACAGQABAHAAANIAAA7IgRAAIAAgQQgFAKgJAEQgIAFgLAAQgQAAgKgJgAgRAFQgIAFAAAKQAAAKAGAFQAGAFAKAAQAMAAAJgKQAIgJAAgSIAAgDIgWAAQgNAAgIAFg");
	this.shape_1553.setTransform(481.525,174.175);

	this.shape_1554 = new cjs.Shape();
	this.shape_1554.graphics.f("#0BFFFF").s().p("AgqBIIAAgNIAiAAIAAhMIgbAAIAAgNIArAAIAABZIAjAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_1554.setTransform(471,172.15);

	this.shape_1555 = new cjs.Shape();
	this.shape_1555.graphics.f("#0BFFFF").s().p("AgkA1IAAhnIASAAIAAAVQAEgMAIgFQAJgGAMAAIAMABQAFACAFADIAAASQgGgFgFgCQgIgCgFAAQgPAAgIAKQgJAKABATIAAAzg");
	this.shape_1555.setTransform(460.1,174.025);

	this.shape_1556 = new cjs.Shape();
	this.shape_1556.graphics.f("#0BFFFF").s().p("AggAuQgKgJAAgPQAAgSAMgIQAMgJAVAAIAXAAIAAgDQAAgMgGgGQgHgFgNAAQgJAAgIACQgIACgJAGIAAgSIASgFIAQgCQANAAAJAEQAJAEAGAHQADAEABAIQACAHAAANIAAA7IgRAAIAAgQQgFAJgJAFQgIAFgLAAQgPAAgKgJgAgSAFQgHAFAAAKQAAAKAGAFQAGAFAJAAQANAAAJgKQAIgKAAgRIAAgDIgWAAQgNAAgJAFg");
	this.shape_1556.setTransform(447.1,174.175);

	this.shape_1557 = new cjs.Shape();
	this.shape_1557.graphics.f("#0BFFFF").s().p("AgKA0IglhnIASAAIAdBWIAehWIASAAIglBng");
	this.shape_1557.setTransform(435.825,174.15);

	this.shape_1558 = new cjs.Shape();
	this.shape_1558.graphics.f("#0071BC").s().p("AgkA1IAAhnIASAAIAAAVQAEgMAIgFQAJgGAMAAIAMABQAFACAFADIAAASQgGgFgFgCQgIgCgFAAQgOAAgJAKQgIAKAAATIAAAzg");
	this.shape_1558.setTransform(414.2,174.025);

	this.shape_1559 = new cjs.Shape();
	this.shape_1559.graphics.f("#0071BC").s().p("AggAuQgKgJAAgPQAAgSALgIQANgJAVAAIAXAAIAAgDQAAgMgGgGQgHgFgNAAQgJAAgIACQgIACgJAGIAAgSIASgFIAQgCQANAAAJAEQAJAEAGAHQADAEABAIQACAHAAANIAAA7IgRAAIAAgQQgFAJgJAFQgIAFgLAAQgQAAgJgJgAgSAFQgHAFAAAKQAAAKAGAFQAGAFAJAAQANAAAJgKQAIgKAAgRIAAgDIgWAAQgNAAgJAFg");
	this.shape_1559.setTransform(401.2,174.175);

	this.shape_1560 = new cjs.Shape();
	this.shape_1560.graphics.f("#0071BC").s().p("AgKA0IglhnIASAAIAdBWIAehWIASAAIglBng");
	this.shape_1560.setTransform(389.925,174.15);

	this.shape_1561 = new cjs.Shape();
	this.shape_1561.graphics.f("#FF931D").s().p("AgaBFQgJgBgHgDIAAgTQAKAFAHACQAJACAJAAQAOAAAJgIQAIgJAAgOQAAgPgJgJQgIgHgPAAIgPACQgGABgHAEIAAhGIBFAAIAAAQIg0AAIAAAiIAIgCIAIgBQAUAAANANQANAMAAAWQAAAWgNAMQgNANgXAAg");
	this.shape_1561.setTransform(596.375,149.675);

	this.shape_1562 = new cjs.Shape();
	this.shape_1562.graphics.f("#FF931D").s().p("AgpBHIAAgQIAeghIARgTQAJgJAEgJQADgGAAgIQAAgLgHgHQgGgHgLAAQgJAAgJADQgLAEgJAFIAAgTQAIgDALgDQAIgDAKAAQAUAAAMALQAMALAAARQAAAKgEAIQgFALgIAIIgtAxIA/AAIAAAQg");
	this.shape_1562.setTransform(584.875,149.425);

	this.shape_1563 = new cjs.Shape();
	this.shape_1563.graphics.f("#FF931D").s().p("AgwAeIAAgQIBhAAIAAAQgAgwgNIAAgQIBhAAIAAAQg");
	this.shape_1563.setTransform(562.025,150.425);

	this.shape_1564 = new cjs.Shape();
	this.shape_1564.graphics.f("#0BFFFF").s().p("AgjBFIAAgQIAeAAIAAhoIgjARIAAgSIAigQIASAAIAAB5IAdAAIAAAQg");
	this.shape_1564.setTransform(539.425,149.575);

	this.shape_1565 = new cjs.Shape();
	this.shape_1565.graphics.f("#0BFFFF").s().p("Ag4AIIAAgPIBxAAIAAAPg");
	this.shape_1565.setTransform(527.575,159.05);

	this.shape_1566 = new cjs.Shape();
	this.shape_1566.graphics.f("#0BFFFF").s().p("AggAoQgOgOAAgaQAAgYAOgPQANgPAWAAQAUAAALAOQAMAOAAASIAAAIIhJAAIAAAAQgBAVAJAKQAJAJAQAAQAGAAALgCQALgEAIgEIAAARQgLAEgIACQgJACgJAAQgWAAgPgPgAgSgfQgHAIgBALIA3gBQgBgKgGgIQgIgIgMAAQgLAAgJAIg");
	this.shape_1566.setTransform(516.2,151.275);

	this.shape_1567 = new cjs.Shape();
	this.shape_1567.graphics.f("#0BFFFF").s().p("AATBJQgPAAgIgKQgIgKAAgSIAAhdIgcAAIAAgOIAsAAIAABrQAAALAEAGQAFAGAIAAIAUAAIAAAPg");
	this.shape_1567.setTransform(505.225,149.225);

	this.shape_1568 = new cjs.Shape();
	this.shape_1568.graphics.f("#0BFFFF").s().p("AgNBGQgHgEgFgIIAAANIgRAAIAAiQIARAAIAAA2QAFgIAHgDQAHgFAIAAQATAAALAPQALAPAAAYQAAAagLAOQgLAPgTAAQgJAAgGgEgAgSgKQgHAKAAATQAAATAHALQAHAKALAAQAMAAAGgKQAHgKAAgUQAAgTgHgKQgGgKgMAAQgLAAgHAKg");
	this.shape_1568.setTransform(493.525,149.375);

	this.shape_1569 = new cjs.Shape();
	this.shape_1569.graphics.f("#0BFFFF").s().p("AghAuQgJgKAAgOQAAgSAMgIQALgJAWAAIAXAAIAAgCQAAgNgGgFQgHgGgNAAQgIAAgJACQgJADgIAFIAAgRQAKgEAIgCIAQgCQAMAAAKAEQAIAEAHAIQADAFACAGQABAHAAAOIAAA6IgRAAIAAgPQgFAJgJAEQgIAFgLAAQgQAAgKgJgAgRAFQgIAGAAAKQAAAJAGAFQAGAGAKAAQAMAAAJgKQAIgKAAgRIAAgEIgWAAQgNAAgIAFg");
	this.shape_1569.setTransform(481.525,151.275);

	this.shape_1570 = new cjs.Shape();
	this.shape_1570.graphics.f("#0BFFFF").s().p("AgqBIIAAgNIAiAAIAAhMIgbAAIAAgOIArAAIAABaIAjAAIAAANgAgIgyIAAgVIAQAAIAAAVg");
	this.shape_1570.setTransform(471,149.275);

	this.shape_1571 = new cjs.Shape();
	this.shape_1571.graphics.f("#0BFFFF").s().p("AgkA2IAAhoIASAAIAAAUQADgKAJgHQAJgFAMAAIAMABIAKAFIAAARIgLgFQgFgCgIAAQgPAAgIAKQgJAJABATIAAA0g");
	this.shape_1571.setTransform(460.1,151.15);

	this.shape_1572 = new cjs.Shape();
	this.shape_1572.graphics.f("#0BFFFF").s().p("AggAuQgKgJAAgPQAAgSAMgIQAMgJAVAAIAXAAIAAgCQAAgNgGgFQgHgGgNAAQgHAAgKACIgRAIIAAgRIASgGIAQgCQAMAAAKAEQAJAEAGAIQADAEABAHQACAHAAAOIAAA6IgRAAIAAgPQgFAIgJAFQgIAFgLAAQgPAAgKgJgAgSAFQgHAGAAAKQAAAJAGAFQAFAGAKAAQANAAAJgKQAIgLAAgQIAAgEIgWAAQgNAAgJAFg");
	this.shape_1572.setTransform(447.1,151.275);

	this.shape_1573 = new cjs.Shape();
	this.shape_1573.graphics.f("#0BFFFF").s().p("AgKA0IglhnIASAAIAdBWIAehWIASAAIglBng");
	this.shape_1573.setTransform(435.825,151.275);

	this.shape_1574 = new cjs.Shape();
	this.shape_1574.graphics.f("#0071BC").s().p("AgkA2IAAhoIASAAIAAAUQADgKAJgHQAJgFAMAAIAMABIAKAFIAAARIgLgFQgFgCgIAAQgOAAgJAKQgIAIAAAUIAAA0g");
	this.shape_1574.setTransform(414.2,151.15);

	this.shape_1575 = new cjs.Shape();
	this.shape_1575.graphics.f("#0071BC").s().p("AggAuQgKgJAAgPQAAgSALgIQANgJAVAAIAXAAIAAgCQAAgNgGgFQgHgGgNAAQgHAAgKACIgRAIIAAgRIASgGIAQgCQAMAAAKAEQAJAEAGAIQADAEABAHQACAHAAAOIAAA6IgRAAIAAgPQgFAIgJAFQgIAFgLAAQgQAAgJgJgAgSAFQgHAGAAAKQAAAJAGAFQAFAGAKAAQANAAAJgKQAIgLAAgQIAAgEIgWAAQgNAAgJAFg");
	this.shape_1575.setTransform(401.2,151.275);

	this.shape_1576 = new cjs.Shape();
	this.shape_1576.graphics.f("#0071BC").s().p("AgKA0IglhnIASAAIAdBWIAehWIASAAIglBng");
	this.shape_1576.setTransform(389.925,151.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1576},{t:this.shape_1575},{t:this.shape_1574},{t:this.shape_1573},{t:this.shape_1572},{t:this.shape_1571},{t:this.shape_1570},{t:this.shape_1569},{t:this.shape_1568},{t:this.shape_1567},{t:this.shape_1566},{t:this.shape_1565},{t:this.shape_1564},{t:this.shape_1563},{t:this.shape_1562},{t:this.shape_1561},{t:this.shape_1560},{t:this.shape_1559},{t:this.shape_1558},{t:this.shape_1557},{t:this.shape_1556},{t:this.shape_1555},{t:this.shape_1554},{t:this.shape_1553},{t:this.shape_1552},{t:this.shape_1551},{t:this.shape_1550},{t:this.shape_1549},{t:this.shape_1548},{t:this.shape_1547},{t:this.shape_1546},{t:this.shape_1545},{t:this.shape_1544},{t:this.shape_1543},{t:this.shape_1542},{t:this.shape_1541},{t:this.shape_1540},{t:this.shape_1539},{t:this.shape_1538},{t:this.shape_1537},{t:this.shape_1536},{t:this.shape_1535},{t:this.shape_1534},{t:this.shape_1533},{t:this.shape_1532},{t:this.shape_1531},{t:this.shape_1530},{t:this.shape_1529},{t:this.shape_1528},{t:this.shape_1527},{t:this.shape_1526},{t:this.shape_1525},{t:this.shape_1524},{t:this.shape_1523},{t:this.shape_1522},{t:this.shape_1521},{t:this.shape_1520},{t:this.shape_1519},{t:this.shape_1518},{t:this.shape_1517},{t:this.shape_1516},{t:this.shape_1515},{t:this.shape_1514},{t:this.shape_1513},{t:this.shape_1512},{t:this.shape_1511},{t:this.shape_1510},{t:this.shape_1509},{t:this.shape_1508},{t:this.shape_1507},{t:this.shape_1506},{t:this.shape_1505},{t:this.shape_1504},{t:this.shape_1503},{t:this.shape_1502},{t:this.shape_1501},{t:this.shape_1500},{t:this.shape_1499},{t:this.shape_1498},{t:this.shape_1497},{t:this.shape_1496},{t:this.shape_1495},{t:this.shape_1494},{t:this.shape_1493},{t:this.shape_1492},{t:this.shape_1491},{t:this.shape_1490},{t:this.shape_1489},{t:this.shape_1488},{t:this.shape_1487},{t:this.shape_1486},{t:this.shape_1485},{t:this.shape_1484},{t:this.shape_1483},{t:this.shape_1482},{t:this.shape_1481},{t:this.shape_1480},{t:this.shape_1479},{t:this.shape_1478},{t:this.shape_1477},{t:this.shape_1476},{t:this.shape_1475},{t:this.shape_1474},{t:this.shape_1473},{t:this.shape_1472},{t:this.shape_1471},{t:this.shape_1470},{t:this.shape_1469},{t:this.shape_1468},{t:this.shape_1467},{t:this.shape_1466},{t:this.shape_1465},{t:this.shape_1464},{t:this.shape_1463},{t:this.shape_1462},{t:this.shape_1461},{t:this.shape_1460},{t:this.shape_1459},{t:this.shape_1458},{t:this.shape_1457},{t:this.shape_1456},{t:this.shape_1455},{t:this.shape_1454},{t:this.shape_1453},{t:this.shape_1452},{t:this.shape_1451},{t:this.shape_1450},{t:this.shape_1449},{t:this.shape_1448},{t:this.shape_1447},{t:this.shape_1446},{t:this.shape_1445},{t:this.shape_1444},{t:this.shape_1443},{t:this.shape_1442},{t:this.shape_1441},{t:this.shape_1440},{t:this.shape_1439},{t:this.shape_1438},{t:this.shape_1437},{t:this.shape_1436},{t:this.shape_1435},{t:this.shape_1434},{t:this.shape_1433},{t:this.shape_1432},{t:this.shape_1431},{t:this.shape_1430},{t:this.shape_1429},{t:this.shape_1428},{t:this.shape_1427},{t:this.shape_1426},{t:this.shape_1425},{t:this.shape_1424},{t:this.shape_1423},{t:this.shape_1422},{t:this.shape_1421},{t:this.shape_1420},{t:this.shape_1419},{t:this.shape_1418},{t:this.shape_1417},{t:this.shape_1416},{t:this.shape_1415},{t:this.shape_1414},{t:this.shape_1413},{t:this.shape_1412},{t:this.shape_1411},{t:this.shape_1410},{t:this.shape_1409},{t:this.shape_1408},{t:this.shape_1407},{t:this.shape_1406},{t:this.shape_1405},{t:this.shape_1404},{t:this.shape_1403},{t:this.shape_1402},{t:this.shape_1401},{t:this.shape_1400},{t:this.shape_1399},{t:this.shape_1398},{t:this.shape_1397},{t:this.shape_1396},{t:this.shape_1395},{t:this.shape_1394},{t:this.shape_1393},{t:this.shape_1392},{t:this.shape_1391},{t:this.shape_1390},{t:this.shape_1389},{t:this.shape_1388},{t:this.shape_1387},{t:this.shape_1386},{t:this.shape_1385},{t:this.shape_1384},{t:this.shape_1383},{t:this.shape_1382},{t:this.shape_1381},{t:this.shape_1380},{t:this.shape_1379},{t:this.shape_1378},{t:this.shape_1377},{t:this.shape_1376},{t:this.shape_1375},{t:this.shape_1374},{t:this.shape_1373},{t:this.shape_1372},{t:this.shape_1371},{t:this.shape_1370},{t:this.shape_1369},{t:this.shape_1368},{t:this.shape_1367},{t:this.shape_1366},{t:this.shape_1365},{t:this.shape_1364},{t:this.shape_1363},{t:this.shape_1362},{t:this.shape_1361},{t:this.shape_1360},{t:this.shape_1359},{t:this.shape_1358},{t:this.shape_1357},{t:this.shape_1356},{t:this.shape_1355},{t:this.shape_1354},{t:this.shape_1353},{t:this.shape_1352},{t:this.shape_1351},{t:this.shape_1350},{t:this.shape_1349},{t:this.shape_1348},{t:this.shape_1347},{t:this.shape_1346},{t:this.shape_1345},{t:this.shape_1344},{t:this.shape_1343},{t:this.shape_1342},{t:this.shape_1341},{t:this.shape_1340},{t:this.shape_1339},{t:this.shape_1338},{t:this.shape_1337},{t:this.shape_1336},{t:this.shape_1335},{t:this.shape_1334},{t:this.shape_1333},{t:this.shape_1332},{t:this.shape_1331},{t:this.shape_1330},{t:this.shape_1329},{t:this.shape_1328},{t:this.shape_1327},{t:this.shape_1326},{t:this.shape_1325},{t:this.shape_1324},{t:this.shape_1323},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_1320},{t:this.shape_1319},{t:this.shape_1318},{t:this.shape_1317},{t:this.shape_1316},{t:this.shape_1315},{t:this.shape_1314},{t:this.shape_1313},{t:this.shape_1312},{t:this.shape_1311},{t:this.shape_1310},{t:this.shape_1309},{t:this.shape_1308},{t:this.shape_1307},{t:this.shape_1306},{t:this.shape_1305},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_1287},{t:this.shape_1286},{t:this.shape_1285},{t:this.shape_1284},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_1281},{t:this.shape_1280},{t:this.shape_1279},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1266},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1248},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_1243},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_1239},{t:this.shape_1238},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_1235},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160}]}).wait(7));

	// menu_items
	this.shape_1577 = new cjs.Shape();
	this.shape_1577.graphics.f("#E5E5E5").s().p("Au2B9QgGAAgFgFQgEgFAAgHIAAjWQAAgIAEgFQAFgFAGAAIdsAAQAQAAAAASIAADWQAAARgQAAg");
	this.shape_1577.setTransform(210.9066,650,1.0994,1);

	this.shape_1578 = new cjs.Shape();
	this.shape_1578.graphics.f("#E5E5E5").s().p("AoTBBQgEAAgCgDQgCgCgBgDIAAhwQABgJAIAAIQnAAQAIAAAAAJIAABwQAAAIgIAAg");
	this.shape_1578.setTransform(202.3458,589.9049,1.7872,1.9235);

	this.shape_1579 = new cjs.Shape();
	this.shape_1579.graphics.f("#E5E5E5").s().p("AoTBBQgEAAgCgCQgCgDgBgEIAAhvQABgEACgDQACgCAEAAIQnAAQAIAAAAAJIAABvQAAAJgIAAg");
	this.shape_1579.setTransform(202.3458,485.6028,1.7872,1.9159);

	this.shape_1580 = new cjs.Shape();
	this.shape_1580.graphics.f("#E5E5E5").s().p("AoTBBQgEAAgCgCQgCgDgBgEIAAhvQABgEACgDQACgCAEAAIQnAAQAIAAAAAJIAABvQAAAJgIAAg");
	this.shape_1580.setTransform(211.9431,434.9676,1.9641,1.9161);

	this.shape_1581 = new cjs.Shape();
	this.shape_1581.graphics.f("#E5E5E5").s().p("AoTBBQgEAAgCgDQgCgCgBgDIAAhxQABgIAIAAIQnAAQAIAAAAAIIAABxQAAAIgIAAg");
	this.shape_1581.setTransform(202.3458,270.5951,1.7872,1.9233);

	this.shape_1582 = new cjs.Shape();
	this.shape_1582.graphics.f("#E5E5E5").s().p("AoTBBQgDAAgDgDQgDgDAAgDIAAhvQAAgEADgDQADgCADAAIQnAAQAJAAAAAJIAABvQAAAJgJAAg");
	this.shape_1582.setTransform(202.3102,196.6313,1.7872,1.923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1582},{t:this.shape_1581},{t:this.shape_1580},{t:this.shape_1579},{t:this.shape_1578},{t:this.shape_1577}]}).wait(7));

	// menu
	this.shape_1583 = new cjs.Shape();
	this.shape_1583.graphics.f("#AAB6AE").s().p("AoTBBQgJAAAAgJIAAhvQAAgJAJAAIQnAAQADAAADACQADADgBAEIAABvQABAEgDADQgDACgDAAg");
	this.shape_1583.setTransform(200.3445,552.2271,1,0.9944);

	this.shape_1584 = new cjs.Shape();
	this.shape_1584.graphics.f("#AAB6AE").s().p("AoTBBQgJAAAAgJIAAhvQABgEACgDQACgCAEAAIQnAAQADAAADACQADADgBAEIAABvQAAAJgIAAg");
	this.shape_1584.setTransform(200.3445,520.6296,1,0.9944);

	this.shape_1585 = new cjs.Shape();
	this.shape_1585.graphics.f("#AAB6AE").s().p("AoTBBQgDAAgDgDQgDgCAAgDIAAhxQAAgDADgDQADgCADAAIQnAAQADAAADACQADADAAADIAABxQAAADgDACQgDADgDAAg");
	this.shape_1585.setTransform(245.7188,364.1118,1,0.9944);

	this.shape_1586 = new cjs.Shape();
	this.shape_1586.graphics.f("#AAB6AE").s().p("AoTBBQgJAAAAgJIAAhvQAAgJAJAAIQnAAQADAAADACQADADgBAEIAABvQABAEgDADQgDACgDAAg");
	this.shape_1586.setTransform(200.3445,337.2643,1,0.9944);

	this.shape_1587 = new cjs.Shape();
	this.shape_1587.graphics.f("#AAB6AE").s().p("AoTBBQgJAAAAgJIAAhvQABgEACgDQACgCAEAAIQnAAQADAAADACQADADgBAEIAABvQAAAJgIAAg");
	this.shape_1587.setTransform(200.3445,305.6667,1,0.9944);

	this.shape_1588 = new cjs.Shape();
	this.shape_1588.graphics.f("#AAB6AE").s().p("AoTBBQgJAAAAgJIAAhvQAAgJAJAAIQnAAQADAAADACQADADgBAEIAABvQABAEgDADQgDACgDAAg");
	this.shape_1588.setTransform(200.3445,232.9965,1,0.9944);

	this.shape_1589 = new cjs.Shape();
	this.shape_1589.graphics.f("#525354").s().p("A0lCfIAAk9MApLAAAIAAE9g");
	this.shape_1589.setTransform(206.7194,129.7657,1,1.476);

	this.shape_1590 = new cjs.Shape();
	this.shape_1590.graphics.f("#383B3D").s().p("EgUlA9ZMAAAh6xMApLAAAMAAAB6xg");
	this.shape_1590.setTransform(206.675,492.075);

	this.shape_1591 = new cjs.Shape();
	this.shape_1591.graphics.f("#AAB6AE").s().p("AoTBBQgJAAAAgIIAAhxQABgDACgDQACgCAEAAIQnAAQADAAADACQADADgBADIAABxQABADgDACQgDADgDAAg");
	this.shape_1591.setTransform(200.3445,201.3989,1,0.9944);

	this.shape_1592 = new cjs.Shape();
	this.shape_1592.graphics.f("#525354").s().p("A0lDqIAAnTMApLAAAIAAHTg");
	this.shape_1592.setTransform(206.725,482.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1590},{t:this.shape_1589,p:{y:129.7657}},{t:this.shape_1588},{t:this.shape_1587},{t:this.shape_1586},{t:this.shape_1585},{t:this.shape_1584},{t:this.shape_1583}]}).to({state:[{t:this.shape_1590},{t:this.shape_1589,p:{y:196.2657}},{t:this.shape_1588},{t:this.shape_1587},{t:this.shape_1586},{t:this.shape_1585},{t:this.shape_1584},{t:this.shape_1583}]},1).to({state:[{t:this.shape_1590},{t:this.shape_1589,p:{y:268.4657}},{t:this.shape_1591},{t:this.shape_1588},{t:this.shape_1587},{t:this.shape_1586},{t:this.shape_1585},{t:this.shape_1584},{t:this.shape_1583}]},1).to({state:[{t:this.shape_1590},{t:this.shape_1589,p:{y:433.7657}},{t:this.shape_1591},{t:this.shape_1588},{t:this.shape_1587},{t:this.shape_1586},{t:this.shape_1585},{t:this.shape_1584},{t:this.shape_1583}]},1).to({state:[{t:this.shape_1590},{t:this.shape_1592},{t:this.shape_1591},{t:this.shape_1588},{t:this.shape_1587},{t:this.shape_1586},{t:this.shape_1585},{t:this.shape_1584},{t:this.shape_1583}]},1).to({state:[{t:this.shape_1590},{t:this.shape_1589,p:{y:591.4657}},{t:this.shape_1591},{t:this.shape_1588},{t:this.shape_1587},{t:this.shape_1586},{t:this.shape_1585},{t:this.shape_1584},{t:this.shape_1583}]},1).to({state:[{t:this.shape_1590},{t:this.shape_1589,p:{y:652.2657}},{t:this.shape_1591},{t:this.shape_1588},{t:this.shape_1587},{t:this.shape_1586},{t:this.shape_1585},{t:this.shape_1584},{t:this.shape_1583}]},1).wait(1));

	// ai_bg
	this.shape_1593 = new cjs.Shape();
	this.shape_1593.graphics.f("#EFEFEF").s().p("AlfAeIAAg7IK/AAIAAA7g");
	this.shape_1593.setTransform(1033.225,88.45);

	this.shape_1594 = new cjs.Shape();
	this.shape_1594.graphics.f("#EFEFEF").s().p("AhcAeIAAg7IC5AAIAAA7g");
	this.shape_1594.setTransform(1121.8,88.45);

	this.shape_1595 = new cjs.Shape();
	this.shape_1595.graphics.f("#EFEFEF").s().p("AgfAqQgNgSAAgYQAAgYANgRQAOgRARAAQATAAANARQANARAAAYQAAAZgNARQgNARgTAAQgSAAgNgRg");
	this.shape_1595.setTransform(1082.275,88.425);

	this.shape_1596 = new cjs.Shape();
	this.shape_1596.graphics.f("#EFEFEF").s().p("AgfAqQgNgRAAgZQAAgYANgRQANgRASAAQATAAANARQANARAAAYQAAAYgNASQgNARgTAAQgSAAgNgRg");
	this.shape_1596.setTransform(1098.675,88.425);

	this.shape_1597 = new cjs.Shape();
	this.shape_1597.graphics.f("#A7B3AB").s().p("EhU/ABfIAAi8MCp/AAAIAAC8g");
	this.shape_1597.setTransform(601.25,88.55);

	this.shape_1598 = new cjs.Shape();
	this.shape_1598.graphics.f("#EFEFEF").s().p("AgfAqQgNgRAAgZQAAgYANgRQANgRASAAQATAAANARQANARAAAYQAAAYgNASQgNARgTAAQgSAAgNgRg");
	this.shape_1598.setTransform(75.875,88.425);

	this.shape_1599 = new cjs.Shape();
	this.shape_1599.graphics.f("#FFFFFF").s().p("AAABuQgjAAgYggQgZghABgtQAAgtAYggQAZghAiAAQAjAAAZAhQAYAgAAAtQAAAugYAgQgZAggjAAg");
	this.shape_1599.setTransform(600.0245,40.1);

	this.shape_1600 = new cjs.Shape();
	this.shape_1600.graphics.f("#1A1A1A").s().p("EhU/A90MAAAh7nMCp/AAAMAAAB7ng");
	this.shape_1600.setTransform(601.25,487.125);

	this.shape_1601 = new cjs.Shape();
	this.shape_1601.graphics.f("#25282B").s().p("EhVMBK3QjiAAihigQigigAAjjMAAAiHTQAAibBehuQBfhuCEAAMCxWAAAQCHAABgBwQBhBwAACfMAAACHLQAADjigCgQigCgjjAAgEhSSg78QigChAADjMAAXBsbQABDiCgCgQCgCfDiAAMCYhAAAQDjAACgigQCgigAAjjMAAAhsXQgBjiigigQigigjiAAMiY3gAFQjjAAihChg");
	this.shape_1601.setTransform(600,479.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1601},{t:this.shape_1600},{t:this.shape_1599},{t:this.shape_1598},{t:this.shape_1597},{t:this.shape_1596},{t:this.shape_1595},{t:this.shape_1594},{t:this.shape_1593}]}).wait(7));

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