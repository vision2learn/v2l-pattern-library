(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Scene_1_whiteboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// whiteboard
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("A0iyPMApFAAAIAAZoIv0AFIgKKyI5EgJg");
	this.shape.setTransform(481.7404,157.9172,1.0622,1.0278);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(151,219,242,0.259)").s().p("A0fSHMgADgkWMApFAAAIAAZoIv0AFIgKKyg");
	this.shape_1.setTransform(481.7404,157.9172,1.0622,1.0278);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#03495B").s().p("EgvfACwIAAlfMBe/AAAIAAFfg");
	this.shape_2.setTransform(339.9706,13.8714,0.9573,0.7376);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33B8E4").s().p("EguAAA7IAAh1MBcBAAAIAAB1g");
	this.shape_3.setTransform(339.9868,31.975,0.9573,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33B8E4").s().p("AohlfIRDAAIxDK/g");
	this.shape_4.setTransform(567.325,241.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EguAATvMAAAgneMBcBAAAIAAceIx0LAg");
	this.shape_5.setTransform(339.9868,150.7,0.9573,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#005470").s().p("Egw+AWgMAAAgs/MBh9AAAMAAAAs/g");
	this.shape_6.setTransform(340.0108,144.85,0.9573,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("A14yFMArxAAAMAAAAkLMgrxAAAg");
	this.shape_7.setTransform(474.9,159.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#98DCF2").s().p("A15SGMAAAgkLMArzAAAMAAAAkLg");
	this.shape_8.setTransform(474.9,159.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_whiteboard, null, null);


(lib.Scene_1_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36AFD6").s().p("AgZAsIAAhWIAOAAIADAQIABAAQAEgIAFgEQAIgFAIAAIAJABIgCARIgIgBQgLAAgGAHQgHAIAAALIAAAsg");
	this.shape.setTransform(608.25,65.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#36AFD6").s().p("AgdAlQgIgJAAgQIAAg3IASAAIAAA1QAAAJAFAGQAEAEAIAAQALAAAFgHQAGgHgBgPIAAgrIATAAIAABWIgOAAIgDgMIgBAAQgEAGgHADQgHAEgIAAQgQAAgHgHg");
	this.shape_1.setTransform(599.2,66);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#36AFD6").s().p("AgUAnQgKgFgFgKQgFgLAAgNQAAgUALgMQAKgMATAAQATAAALAMQALAMAAAUQAAAVgLAMQgLAMgTAAQgLAAgJgGgAgQgVQgFAIAAANQAAAeAVAAQAWAAAAgeQAAgdgWAAQgLAAgFAIg");
	this.shape_2.setTransform(589.3,65.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#36AFD6").s().p("AgIA8IAAhWIARAAIAABWgAgGgpQgDgDAAgFQAAgEADgDQACgDAEAAQAFAAADADQACADAAAEQAAAFgCADQgDADgFAAQgEAAgCgDg");
	this.shape_3.setTransform(582.175,64.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#36AFD6").s().p("AgJArIghhVIAUAAIARAxQAFANAAAIIAAAAIAGgVIARgxIAUAAIghBVg");
	this.shape_4.setTransform(575.675,65.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#36AFD6").s().p("AgdAmQgHgHAAgNQAAgNAKgGQAKgGATgBIAPgBIAAgEQAAgIgDgFQgEgEgIAAQgGAAgGACIgMAFIgGgNQAHgEAJgCQAIgCAGAAQARAAAIAHQAJAIAAAPIAAA5IgOAAIgDgMIgBAAQgGAIgGADQgHADgJAAQgMAAgIgHgAgLAHQgGAEAAAIQAAAFAEAEQADADAHAAQAJAAAGgGQAGgFAAgKIAAgIIgLAAQgMABgGAEg");
	this.shape_5.setTransform(566.525,65.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#36AFD6").s().p("AAUA9IAAg1QAAgJgFgFQgDgFgJAAQgLAAgFAHQgGAGAAAQIAAArIgSAAIAAh5IASAAIgBAvIABAAQAEgGAHgEQAHgDAHAAQAgAAAAAeIAAA5g");
	this.shape_6.setTransform(557.1,64.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#36AFD6").s().p("AgaAhQgLgMAAgUQAAgUAKgNQALgMARAAQARAAAKALQAKAKAAASIAAAJIg4AAQAAANAGAHQAHAGAKAAQAIAAAHgBIAOgFIAAAPQgHADgHABQgHACgIAAQgUAAgLgMgAAUgIQAAgLgFgFQgFgGgJAAQgHAAgGAGQgFAFgBALIAmAAIAAAAg");
	this.shape_7.setTransform(547.425,65.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#36AFD6").s().p("AgUAyIgBAAIgDAKIgOAAIAAh4IASAAIgBAuIABAAQAJgNAQAAQAQAAAJAMQAJAMAAATQAAAWgJAMQgJALgQAAQgQAAgJgLgAgPgFQgFAFAAAPIAAABQAAAQAFAIQAFAGALABQAJAAAFgIQAFgIAAgPQAAgcgUAAQgKAAgFAHg");
	this.shape_8.setTransform(538.075,64.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#36AFD6").s().p("AgIA9IAAh5IARAAIAAB5g");
	this.shape_9.setTransform(526.475,64.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#36AFD6").s().p("AgdAmQgHgHAAgNQAAgNAKgGQAKgGATgBIAPgBIAAgEQAAgIgDgFQgEgEgIAAQgGAAgGACIgMAFIgGgNQAHgEAJgCQAIgCAGAAQARAAAIAHQAJAIAAAPIAAA5IgOAAIgDgMIgBAAQgGAIgGADQgHADgJAAQgMAAgIgHgAgLAHQgGAEAAAIQAAAFAEAEQADADAHAAQAJAAAGgGQAGgFAAgKIAAgIIgLAAQgMABgGAEg");
	this.shape_10.setTransform(519.375,65.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#36AFD6").s().p("AAUAsIAAg0QAAgKgFgFQgDgFgJAAQgKAAgGAHQgGAHAAAPIAAArIgSAAIAAhWIAPAAIACAMIABAAQAEgGAHgDQAIgEAHAAQAfAAAAAgIAAA3g");
	this.shape_11.setTransform(509.95,65.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#36AFD6").s().p("AgUAnQgKgFgFgKQgFgLAAgNQAAgUALgMQAKgMATAAQATAAALAMQALAMAAAUQAAAVgLAMQgLAMgTAAQgMAAgIgGgAgQgVQgFAIAAANQAAAeAVAAQAWAAAAgeQAAgdgWAAQgLAAgFAIg");
	this.shape_12.setTransform(500,65.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#36AFD6").s().p("AgIA8IAAhWIARAAIAABWgAgGgpQgDgDAAgFQAAgEADgDQACgDAEAAQAFAAADADQACADAAAEQAAAFgCADQgDADgFAAQgEAAgCgDg");
	this.shape_13.setTransform(492.875,64.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#36AFD6").s().p("AgeAoIAAgQQAPAHANAAQAQAAAAgKQAAgEgCgCQgCgCgEgCIgLgGQgPgFgFgFQgGgGAAgJQAAgLAJgHQAJgGAPAAQAPAAAOAGIgGAOQgOgFgKAAQgNAAAAAIQAAAEADADIAQAHIAPAHQAFADADAFQACAEAAAHQAAAMgJAHQgKAHgQAAQgRAAgKgFg");
	this.shape_14.setTransform(486.825,65.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#36AFD6").s().p("AgeAoIAAgQQAPAHANAAQAQAAAAgKQAAgEgCgCQgCgCgEgCIgLgGQgPgFgFgFQgGgGAAgJQAAgLAJgHQAJgGAPAAQAPAAAOAGIgGAOQgOgFgKAAQgNAAAAAIQAAAEADADIAQAHIAPAHQAFADADAFQACAEAAAHQAAAMgJAHQgKAHgQAAQgRAAgKgFg");
	this.shape_15.setTransform(479.075,65.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#36AFD6").s().p("AgaAhQgLgMAAgUQAAgUAKgNQALgMARAAQARAAAKALQAKAKAAASIAAAJIg4AAQAAANAGAHQAHAGAKAAQAIAAAHgBIAOgFIAAAPQgHADgHABQgHACgIAAQgUAAgLgMgAAUgIQAAgLgFgFQgFgGgJAAQgHAAgGAGQgFAFgBALIAmAAIAAAAg");
	this.shape_16.setTransform(470.575,65.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#36AFD6").s().p("AgQA9IAAhHIgOAAIAAgJIAOgFIAAgGQAAgPAHgIQAIgHANAAQAKAAAJADIgEAOQgHgCgGAAQgHAAgCAEQgDADAAAIIAAAGIAVAAIAAAOIgVAAIAABHg");
	this.shape_17.setTransform(463.525,64.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#36AFD6").s().p("AgVAnQgJgFgFgKQgFgLAAgNQAAgUALgMQAKgMATAAQATAAALAMQALAMAAAUQAAAVgLAMQgLAMgTAAQgMAAgJgGgAgQgVQgFAIAAANQAAAeAVAAQAWAAAAgeQAAgdgWAAQgLAAgFAIg");
	this.shape_18.setTransform(455.3,65.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#36AFD6").s().p("AgZAsIAAhWIAOAAIADAQIABAAQADgIAHgEQAHgFAIAAIAJABIgCARIgIgBQgLAAgGAHQgHAIAAALIAAAsg");
	this.shape_19.setTransform(447.5,65.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#36AFD6").s().p("AgmA/IAAh8IAPAAIACAMIABAAQAJgNAQAAQAQAAAJAMQAJALAAAVQAAAVgJALQgJAMgQAAQgQAAgJgLIgBAAIABAwgAgPgpQgFAHAAAOIAAACQAAAQAFAGQAFAHALAAQAJAAAFgHQAFgHAAgPQAAgOgFgIQgFgHgKAAQgKAAgFAGg");
	this.shape_20.setTransform(438.825,67.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#36AFD6").s().p("AgQA9IAAhHIgOAAIAAgJIAOgFIAAgGQAAgPAHgIQAIgHANAAQAKAAAJADIgEAOQgHgCgGAAQgHAAgCAEQgDADAAAIIAAAGIAVAAIAAAOIgVAAIAABHg");
	this.shape_21.setTransform(427.025,64.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#36AFD6").s().p("AgVAnQgJgFgFgKQgFgLAAgNQAAgUALgMQALgMASAAQATAAALAMQALAMAAAUQAAAVgLAMQgLAMgTAAQgLAAgKgGgAgQgVQgFAIAAANQAAAeAVAAQAWAAAAgeQAAgdgWAAQgLAAgFAIg");
	this.shape_22.setTransform(418.8,65.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#36AFD6").s().p("AgeAoIAAgQQAPAHANAAQAQAAAAgKQAAgEgCgCQgCgCgEgCIgLgGQgPgFgFgFQgGgGAAgJQAAgLAJgHQAJgGAPAAQAPAAAOAGIgGAOQgOgFgKAAQgNAAAAAIQAAAEADADIAQAHIAPAHQAFADADAFQACAEAAAHQAAAMgJAHQgKAHgQAAQgRAAgKgFg");
	this.shape_23.setTransform(405.925,65.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#36AFD6").s().p("AgPAaIAAguIgMAAIAAgIIAMgHIAHgSIAKAAIAAATIAZAAIAAAOIgZAAIAAAuQABAGADADQADADAGABQAGgBAHgCIAAAPIgIABIgKABQgZABAAgcg");
	this.shape_24.setTransform(398.85,65.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#36AFD6").s().p("AgIA9IAAh5IARAAIAAB5g");
	this.shape_25.setTransform(393.525,64.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#36AFD6").s().p("AgeAlQgHgJAAgQIAAg3IASAAIAAA1QABAJAEAGQADAEAJAAQAKAAAGgHQAFgHABgPIAAgrIASAAIAABWIgPAAIgCgMIgBAAQgEAGgHADQgHAEgIAAQgPAAgJgHg");
	this.shape_26.setTransform(386.2,66);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#36AFD6").s().p("AgeAoIAAgQQAPAHANAAQAQAAAAgKQAAgEgCgCQgCgCgEgCIgLgGQgPgFgFgFQgGgGAAgJQAAgLAJgHQAJgGAPAAQAPAAAOAGIgGAOQgOgFgKAAQgNAAAAAIQAAAEADADIAQAHIAPAHQAFADADAFQACAEAAAHQAAAMgJAHQgKAHgQAAQgRAAgKgFg");
	this.shape_27.setTransform(377.325,65.925);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#36AFD6").s().p("AgaAhQgLgMAAgUQAAgUAKgNQALgMARAAQARAAAKALQAKAKAAASIAAAJIg4AAQAAANAGAHQAHAGAKAAQAIAAAHgBIAOgFIAAAPQgHADgHABQgHACgIAAQgUAAgLgMgAAUgIQAAgLgFgFQgFgGgJAAQgHAAgGAGQgFAFgBALIAmAAIAAAAg");
	this.shape_28.setTransform(368.825,65.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#36AFD6").s().p("AAWA5IgbguIgSAAIAAAuIgTAAIAAhxIAgAAQAVAAALAIQALAIAAARQAAAWgXAHIAhAzgAgXgDIAMAAQANAAAFgFQAHgFAAgKQgBgJgGgEQgGgEgMgBIgMAAg");
	this.shape_29.setTransform(359.8,64.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D12269").s().p("AgWApIAAhQIAKAAIABAPIABAAQAFgHAFgFQAGgEAIAAIAJABIgBALIgJgBQgKAAgGAIQgHAIAAAMIAAAqg");
	this.shape_30.setTransform(327.5,74.775);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D12269").s().p("AgZAiQgHgHgBgQIAAgzIANAAIAAAzQAAAKAFAFQAEAFAJAAQAMAAAFgHQAHgHgBgPIAAgqIAMAAIAABPIgKAAIgBgKIgBAAQgEAFgGAEQgHADgIAAQgOAAgHgHg");
	this.shape_31.setTransform(319.25,74.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D12269").s().p("AgSAkQgJgEgEgKQgFgKAAgMQAAgTAKgLQAKgLAQABQARAAAKALQAKAKAAATQAAATgKAMQgKAKgRABQgKAAgIgGgAgRgWQgGAIAAAOQAAAPAGAIQAGAJALAAQAMgBAGgHQAGgJAAgPQAAgOgGgIQgGgIgMAAQgLAAgGAIg");
	this.shape_32.setTransform(310.175,74.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D12269").s().p("AgFA3IAAhPIALAAIAABPgAgEgoQgCgCAAgEQAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAAEgCACQgCACgDAAQgCAAgCgCg");
	this.shape_33.setTransform(303.8,73.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D12269").s().p("AgGAoIgfhPIAOAAIARAvIAGAVIAAAAIAZhEIAMAAIgeBPg");
	this.shape_34.setTransform(298.15,74.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D12269").s().p("AgZAjQgGgGAAgLQAAgYAmgBIANAAIAAgFQAAgJgEgFQgEgFgJABQgJAAgNAFIgDgJQAGgDAHgCIANgBQAOgBAHAHQAHAGAAAOIAAA2IgJAAIgCgMIgBAAQgGAIgGADQgGACgIABQgMAAgHgHgAAIABQgOAAgGAFQgHADAAAJQAAAHAEADQAEAEAIAAQAKAAAGgHQAHgGAAgLIAAgIg");
	this.shape_35.setTransform(290.025,74.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D12269").s().p("AAVA5IAAg0QABgIgFgGQgFgEgJAAQgMAAgGAGQgFAHgBAPIAAAqIgMAAIAAhxIAMAAIAAAtIAAAAQAFgGAGgDQAHgDAHAAQAPAAAHAGQAIAIAAAOIAAA0g");
	this.shape_36.setTransform(281.55,73.15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D12269").s().p("AgXAfQgKgLAAgUQAAgSAJgLQAKgLAPAAQAPgBAJAKQAJAKAAARIAAAGIg2AAQAAAOAGAIQAIAHALAAQAMAAANgFIAAAKIgMAFIgNABQgSgBgKgKgAAVgHQAAgLgFgHQgGgFgJAAQgIAAgHAFQgFAHgBALIApAAIAAAAg");
	this.shape_37.setTransform(272.75,74.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D12269").s().p("AgLA3QgHgDgEgGIgBAAIgDAKIgIAAIAAhxIAMAAIgBAtIABAAQAIgMAQAAQAQAAAJAKQAIALAAATQAAAUgIALQgJALgQAAQgHAAgGgDgAgRgHQgFAHAAAQQAAARAFAHQAGAIAMAAQALAAAFgJQAGgIAAgPQAAgQgGgGQgFgIgMAAQgLAAgGAHg");
	this.shape_38.setTransform(264.175,73.225);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D12269").s().p("AgFA5IAAhxIALAAIAABxg");
	this.shape_39.setTransform(253.65,73.15);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D12269").s().p("AgZAiQgIgHAAgQIAAgzIANAAIAAAzQAAAKAEAFQAFAFAKAAQALAAAGgHQAFgHAAgPIAAgqIANAAIAABPIgKAAIgCgKIgBAAQgEAFgGAEQgHADgHAAQgPAAgHgHg");
	this.shape_40.setTransform(247.1,74.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D12269").s().p("AgMA5IAAhGIgPAAIAAgFIAPgEIAAgEQAAgfAZAAQAGAAAJAEIgEAJQgHgCgFAAQgHAAgDAEQgCAFAAAKIAAAFIATAAIAAAJIgTAAIAABGg");
	this.shape_41.setTransform(240.475,73.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D12269").s().p("AgiA7IAAh0IAKAAIABALIABAAQAEgGAHgDQAGgDAHAAQAQAAAJALQAIALAAAUQAAASgIALQgJALgQAAQgHAAgGgDQgHgDgEgGIgBAAIABAvgAgRgpQgFAHAAAPIAAADQAAAQAFAHQAGAHAMAAQAKAAAGgIQAGgIAAgPQAAgPgGgIQgGgIgLAAQgLAAgGAHg");
	this.shape_42.setTransform(233.175,76.575);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D12269").s().p("AgFA5IAAhxIALAAIAABxg");
	this.shape_43.setTransform(226.5,73.15);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D12269").s().p("AgXAfQgKgLAAgUQAAgSAJgLQAKgLAPAAQAPgBAJAKQAJAKAAARIAAAGIg2AAQAAAOAGAIQAIAHAKAAQANAAANgFIAAAKIgMAFIgOABQgQgBgLgKgAAVgHQAAgLgFgHQgGgFgJAAQgIAAgHAFQgFAHgBALIApAAIAAAAg");
	this.shape_44.setTransform(220.45,74.85);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D12269").s().p("AAWA5IAAg0QAAgIgFgGQgFgEgJAAQgMAAgGAGQgFAHAAAPIAAAqIgNAAIAAhxIANAAIgBAtIABAAQAEgGAGgDQAGgDAIAAQAPAAAHAGQAHAIABAOIAAA0g");
	this.shape_45.setTransform(211.65,73.15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D12269").s().p("AAVApIAAgzQABgKgFgFQgFgFgJAAQgLAAgHAHQgFAHAAAQIAAApIgNAAIAAhQIAKAAIADALIAAAAQADgFAIgEQAGgDAHAAQAPAAAHAHQAIAHAAAPIAAA0g");
	this.shape_46.setTransform(202.45,74.775);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D12269").s().p("AgZAiQgHgHAAgQIAAgzIAMAAIAAAzQAAAKAFAFQAEAFAJAAQAMAAAFgHQAHgHAAgPIAAgqIALAAIAABPIgKAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgOAAgHgHg");
	this.shape_47.setTransform(193.15,74.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D12269").s().p("AgpAvQgIgHAAgOQAAgKAFgHQAFgHANgHIgJgKIgDgIIgBgIQAAgLAHgGQAHgGANAAQAMAAAFAGQAHAGAAALQAAAIgFAHQgFAGgKAHIAdAcQAEgFACgGIAEgNIANAAQgFAVgKAKIAVAWIgQAAIgOgNQgJAHgIAEQgIADgLAAQgQAAgJgIgAgeAKQgEADgBAEQgCAEAAAFQAAAIAGAFQAFAFAKAAQARAAALgLIgfgfIgLAIgAgXgoQgEADAAAGQAAAFACAFQADAEAGAHQAKgGADgEQADgFAAgGQAAgGgDgDQgDgEgHAAQgGAAgEAEg");
	this.shape_48.setTransform(179.725,73.475);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D12269").s().p("AgFA5IAAhxIALAAIAABxg");
	this.shape_49.setTransform(168.15,73.15);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D12269").s().p("AgZAjQgGgGAAgLQAAgYAmgBIANAAIAAgFQAAgJgEgFQgEgFgJABQgJAAgNAFIgDgJQAGgDAHgCIANgBQAOgBAHAHQAHAGAAAOIAAA2IgJAAIgCgMIgBAAQgGAIgGADQgGACgIABQgMAAgHgHgAAIABQgOAAgGAFQgHADAAAJQAAAHAEADQAEAEAIAAQAKAAAGgHQAHgGAAgLIAAgIg");
	this.shape_50.setTransform(161.875,74.85);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D12269").s().p("AAVApIAAgzQABgKgFgFQgFgFgJAAQgLAAgHAHQgFAHAAAQIAAApIgNAAIAAhQIAKAAIADALIAAAAQADgFAIgEQAGgDAHAAQAPAAAHAHQAIAHAAAPIAAA0g");
	this.shape_51.setTransform(153.4,74.775);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D12269").s().p("AgSAkQgJgEgEgKQgFgKAAgMQAAgTAKgLQAKgLAQABQARAAAKALQAKAKAAATQAAATgKAMQgKAKgRABQgKAAgIgGgAgRgWQgGAIAAAOQAAAPAGAIQAGAJALAAQAMgBAGgHQAGgJAAgPQAAgOgGgIQgGgIgMAAQgLAAgGAIg");
	this.shape_52.setTransform(144.225,74.85);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D12269").s().p("AgFA3IAAhPIALAAIAABPgAgEgoQgCgCAAgEQAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAAEgCACQgCACgDAAQgCAAgCgCg");
	this.shape_53.setTransform(137.85,73.35);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D12269").s().p("AgbAkIAAgLQAGADAGABQAHADAGAAQAIAAAGgEQAFgDAAgGQAAgFgEgDQgEgDgLgFIgQgGQgFgDgCgEQgCgEAAgFQAAgLAHgFQAIgGANABQANAAANAEIgFAKQgMgEgJAAQgIAAgFACQgEADAAAFQAAADACACQABADAEACIANAGQAOAEAFAFQAFAFAAAIQAAAMgIAFQgIAHgOAAQgQAAgJgGg");
	this.shape_54.setTransform(132.425,74.85);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D12269").s().p("AgbAkIAAgLQAGADAGABQAHADAGAAQAIAAAGgEQAFgDAAgGQAAgFgEgDQgEgDgLgFIgQgGQgFgDgCgEQgCgEAAgFQAAgLAHgFQAIgGANABQANAAANAEIgFAKQgMgEgJAAQgIAAgFACQgEADAAAFQAAADACACQABADAEACIANAGQAOAEAFAFQAFAFAAAIQAAAMgIAFQgIAHgOAAQgQAAgJgGg");
	this.shape_55.setTransform(125.275,74.85);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D12269").s().p("AgXAfQgKgLAAgUQAAgSAJgLQAKgLAPAAQAPgBAJAKQAJAKAAARIAAAGIg2AAQAAAOAGAIQAIAHALAAQANAAAMgFIAAAKIgMAFIgNABQgSgBgKgKgAAVgHQAAgLgFgHQgGgFgJAAQgIAAgHAFQgFAHgBALIApAAIAAAAg");
	this.shape_56.setTransform(117.5,74.85);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D12269").s().p("AgMA5IAAhGIgPAAIAAgFIAPgEIAAgEQAAgfAZAAQAGAAAJAEIgEAJQgHgCgFAAQgHAAgDAEQgCAFAAAKIAAAFIATAAIAAAJIgTAAIAABGg");
	this.shape_57.setTransform(111.175,73.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D12269").s().p("AgSAkQgJgEgEgKQgFgKAAgMQAAgTAKgLQAKgLAQABQARAAAKALQAKAKAAATQAAATgKAMQgKAKgRABQgKAAgIgGgAgRgWQgGAIAAAOQAAAPAGAIQAGAJALAAQAMgBAGgHQAGgJAAgPQAAgOgGgIQgGgIgMAAQgLAAgGAIg");
	this.shape_58.setTransform(103.675,74.85);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D12269").s().p("AgWApIAAhQIAKAAIABAPIABAAQAFgHAFgFQAGgEAIAAIAJABIgBALIgJgBQgKAAgGAIQgHAIAAAMIAAAqg");
	this.shape_59.setTransform(96.65,74.775);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D12269").s().p("AgiA7IAAh0IAKAAIABALIABAAQAEgGAHgDQAGgDAHAAQAQAAAJALQAIALAAAUQAAASgIALQgJALgQAAQgHAAgGgDQgHgDgEgGIgBAAIABAvgAgRgpQgFAHAAAPIAAADQAAAQAFAHQAGAHAMAAQAKAAAGgIQAGgIAAgPQAAgPgGgIQgGgIgLAAQgLAAgGAHg");
	this.shape_60.setTransform(88.725,76.575);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D12269").s().p("AAWApIAAgzQAAgKgFgFQgFgFgJAAQgLAAgHAHQgFAHAAAQIAAApIgNAAIAAhQIALAAIACALIAAAAQAEgFAGgEQAHgDAIAAQAOAAAHAHQAHAHABAPIAAA0g");
	this.shape_61.setTransform(79.35,74.775);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D12269").s().p("AgZAiQgHgHgBgQIAAgzIANAAIAAAzQAAAKAFAFQAEAFAKAAQALAAAGgHQAFgHAAgPIAAgqIANAAIAABPIgLAAIgBgKIgBAAQgEAFgGAEQgHADgIAAQgOAAgHgHg");
	this.shape_62.setTransform(70.05,74.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D12269").s().p("AgMA6IAAhGIgPAAIAAgGIAPgEIAAgFQAAgdAZAAQAGAAAJACIgEAKQgHgCgFAAQgHAAgDAFQgCAEAAAKIAAAFIATAAIAAAKIgTAAIAABGg");
	this.shape_63.setTransform(246.675,50.65);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D12269").s().p("AgSAlQgJgGgEgJQgFgKAAgMQAAgTAKgLQAKgLAQAAQARABAKAKQAKAMAAASQAAAUgKAKQgKALgRAAQgKAAgIgEgAgRgXQgGAJAAAOQAAAPAGAIQAGAIALAAQAMABAGgJQAGgIAAgPQAAgOgGgJQgGgHgMgBQgLABgGAHg");
	this.shape_64.setTransform(239.175,52.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D12269").s().p("AgbAlIAAgMQAGADAGABQAHACAGAAQAIAAAGgCQAFgDAAgHQAAgEgEgEQgEgDgLgFIgQgGQgFgDgCgEQgCgEAAgGQAAgJAHgGQAIgFANgBQANAAANAGIgFAKQgMgGgJAAQgIABgFACQgEADAAAEQAAAEACACQABADAEABIANAGQAOAFAFAFQAFAFAAAIQAAALgIAHQgIAFgOAAQgQAAgJgEg");
	this.shape_65.setTransform(227.275,52.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D12269").s().p("AgWAeQgLgKAAgTQAAgTAKgMQAJgKAPgBQAPAAAJAKQAJAKAAAQIAAAHIg3AAQABAOAHAHQAGAIAMAAQANAAANgFIAAALIgNADIgNABQgRAAgKgLgAAVgHQAAgMgGgFQgEgHgKAAQgJAAgFAHQgGAGgBALIApAAIAAAAg");
	this.shape_66.setTransform(219.5,52.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D12269").s().p("AgSAfQgKgLAAgTQAAgUAKgLQAKgLARAAIALABIAJAEIgEAKIgIgDIgJgBQgXAAgBAeQAAAPAHAIQAFAIALAAQAKAAALgEIAAALQgIADgMAAQgRAAgJgKg");
	this.shape_67.setTransform(211.9,52.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D12269").s().p("AAVApIAAgzQAAgKgEgFQgFgFgJAAQgMAAgFAHQgGAHgBAQIAAApIgLAAIAAhQIAJAAIACALIABAAQADgFAIgEQAGgDAHAAQAPAAAHAHQAIAHgBAPIAAA0g");
	this.shape_68.setTransform(203.6,52.325);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#D12269").s().p("AgXAeQgKgKAAgTQAAgTAJgMQAKgKAPgBQAPAAAJAKQAJAKAAAQIAAAHIg2AAQAAAOAGAHQAIAIAKAAQANAAANgFIAAALIgMADIgOABQgQAAgLgLgAAVgHQAAgMgFgFQgGgHgJAAQgIAAgHAHQgFAGgBALIApAAIAAAAg");
	this.shape_69.setTransform(194.8,52.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D12269").s().p("AgZAiQgIgHAAgPIAAg0IANAAIAAA0QAAAJAEAFQAFAFAKAAQALAAAGgHQAFgHAAgQIAAgpIANAAIAABQIgKAAIgCgMIgBAAQgEAHgGADQgHADgHAAQgPAAgHgHg");
	this.shape_70.setTransform(185.9,52.45);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D12269").s().p("AAXA7IAAgjIABgMIgBAAQgIAMgQAAQgQAAgJgLQgIgLAAgSQAAgUAIgLQAJgLAQAAQAPAAAJAMIABAAIACgLIAJAAIAAB0gAgQgnQgGAIAAAPQAAAPAGAHQAFAIALAAQAMAAAFgGQAGgHAAgOIAAgDQAAgRgGgHQgFgIgMAAQgKAAgGAJg");
	this.shape_71.setTransform(176.575,54.125);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D12269").s().p("AgXAeQgKgKAAgTQAAgTAJgMQAKgKAPgBQAPAAAJAKQAJAKAAAQIAAAHIg3AAQABAOAGAHQAIAIAKAAQANAAANgFIAAALIgMADIgOABQgQAAgLgLgAAVgHQAAgMgGgFQgEgHgKAAQgIAAgHAHQgFAGgBALIApAAIAAAAg");
	this.shape_72.setTransform(168.05,52.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D12269").s().p("AgbAlIAAgMQAGADAGABQAHACAGAAQAIAAAGgCQAFgDAAgHQAAgEgEgEQgEgDgLgFIgQgGQgFgDgCgEQgCgEAAgGQAAgJAHgGQAIgFANgBQANAAANAGIgFAKQgMgGgJAAQgIABgFACQgEADAAAEQAAAEACACQABADAEABIANAGQAOAFAFAFQAFAFAAAIQAAALgIAHQgIAFgOAAQgQAAgJgEg");
	this.shape_73.setTransform(160.275,52.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D12269").s().p("AAWApIAAgzQgBgKgEgFQgEgFgKAAQgMAAgFAHQgHAHAAAQIAAApIgLAAIAAhQIAKAAIABALIABAAQAEgFAGgEQAHgDAIAAQAOAAAHAHQAHAHAAAPIAAA0g");
	this.shape_74.setTransform(152.1,52.325);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D12269").s().p("AgSAlQgJgGgEgJQgFgKAAgMQAAgTAKgLQAKgLAQAAQARABAKAKQAKAMAAASQAAAUgKAKQgKALgRAAQgKAAgIgEgAgRgXQgGAJAAAOQAAAPAGAIQAGAIALAAQAMABAGgJQAGgIAAgPQAAgOgGgJQgGgHgMgBQgLABgGAHg");
	this.shape_75.setTransform(142.925,52.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D12269").s().p("AgSAfQgKgLAAgTQAAgUAKgLQAKgLAQAAIAMABIAJAEIgEAKIgIgDIgJgBQgXAAgBAeQAAAPAHAIQAFAIALAAQAKAAALgEIAAALQgIADgMAAQgRAAgJgKg");
	this.shape_76.setTransform(135.05,52.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D12269").s().p("AgFA5IAAhxIALAAIAABxg");
	this.shape_77.setTransform(125.6,50.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D12269").s().p("AgZAkQgGgHAAgLQAAgYAmAAIANgBIAAgFQAAgJgEgFQgEgEgJgBQgJAAgNAHIgDgJQAGgEAHgCIANgCQAOABAHAGQAHAGAAAOIAAA2IgJAAIgCgLIgBAAQgGAHgGADQgGACgIAAQgMAAgHgFgAAIABQgOAAgGAEQgHAFAAAIQAAAHAEADQAEAEAIgBQAKAAAGgGQAHgGAAgLIAAgHg");
	this.shape_78.setTransform(119.325,52.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D12269").s().p("AgFA3IAAhQIALAAIAABQgAgEgoQgCgCAAgEQAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAAEgCACQgCACgDAAQgCAAgCgCg");
	this.shape_79.setTransform(113.55,50.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D12269").s().p("AgLAaIAAgvIgMAAIAAgGIAMgFIAFgRIAGAAIAAASIAXAAIAAAKIgXAAIAAAuQAAAHADAEQAEAEAGAAIALgBIAAAJIgGACIgHAAQgWAAAAgYg");
	this.shape_80.setTransform(109.025,51.525);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D12269").s().p("AAWApIAAgzQAAgKgFgFQgFgFgJAAQgLAAgHAHQgFAHAAAQIAAApIgNAAIAAhQIALAAIACALIAAAAQAEgFAGgEQAHgDAIAAQAOAAAHAHQAHAHABAPIAAA0g");
	this.shape_81.setTransform(101.85,52.325);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D12269").s().p("AgWAeQgLgKAAgTQAAgTAKgMQAJgKAPgBQAPAAAJAKQAJAKAAAQIAAAHIg2AAQAAAOAHAHQAGAIAMAAQANAAANgFIAAALIgNADIgNABQgRAAgKgLgAAVgHQAAgMgGgFQgEgHgKAAQgJAAgFAHQgGAGgBALIApAAIAAAAg");
	this.shape_82.setTransform(93.05,52.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#D12269").s().p("AgLAaIAAgvIgMAAIAAgGIAMgFIAFgRIAGAAIAAASIAXAAIAAAKIgXAAIAAAuQAAAHADAEQAEAEAGAAIAGAAIAFgBIAAAJIgGACIgHAAQgWAAAAgYg");
	this.shape_83.setTransform(86.175,51.525);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#D12269").s().p("AgSAlQgJgGgEgJQgFgKAAgMQAAgTAKgLQAKgLAQAAQARABAKAKQAKAMAAASQAAAUgKAKQgKALgRAAQgKAAgIgEgAgRgXQgGAJAAAOQAAAPAGAIQAGAIALAAQAMABAGgJQAGgIAAgPQAAgOgGgJQgGgHgMgBQgLABgGAHg");
	this.shape_84.setTransform(79.025,52.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D12269").s().p("AghA2IAAhqIAcAAQAnAAAAAeQAAARgLAHQgLAKgUAAIgMAAIAAAqgAgUABIALAAQAQAAAHgFQAHgFAAgMQAAgLgGgEQgIgGgOAAIgNAAg");
	this.shape_85.setTransform(70.35,51.05);

	this.Item_text2 = new cjs.Text("text2", "15px 'Open Sans'", "#151718");
	this.Item_text2.name = "Item_text2";
	this.Item_text2.lineHeight = 22;
	this.Item_text2.lineWidth = 260;
	this.Item_text2.parent = this;
	this.Item_text2.setTransform(354.0054,88.1803,0.9984,0.9984);

	this.Item_text = new cjs.Text("text", "15px 'Open Sans'", "#151718");
	this.Item_text.name = "Item_text";
	this.Item_text.lineHeight = 22;
	this.Item_text.lineWidth = 269;
	this.Item_text.parent = this;
	this.Item_text.setTransform(65.6756,89.1817,0.9984,0.9984);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Item_text},{t:this.Item_text2},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_text, null, null);


(lib.Scene_1_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("Eg1ng+tMBrPAAAMAAAB9bMhrPAAAg");
	this.shape.setTransform(342.2,400.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99DBF3").s().p("Eg1nA+uMAAAh9bMBrOAAAMAAAB9bg");
	this.shape_1.setTransform(342.2,400.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_bg, null, null);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,219,243,0.027)").s().p("AyjE9IAAp5MAlHAAAIAAJ5g");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.7,-31.6,237.5,63.3);


(lib.Path_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25282B").s().p("AqCFVIEwtpIFtiiIJoD1ImOR3g");
	this.shape.setTransform(64.3,69.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_Layer_1, null, null);


(lib.Path_Layer_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#25282B").s().p("AiyNRQgQgDgIgNIhmirIqBnwQgMgKgBgQQgBgRALgOIEYl5QANgSBXgsQBXgtAMgRIFEm1QALgPAPgDQAQgEAMAKIH4GHIBRgtQAQgJAQADQARADAHANIGVKkQAIANgGAPQgGAQgPAIIw5JYQgMAGgMAAIgJAAg");
	this.shape_1.setTransform(95.8992,84.942);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_Layer_1_1, null, null);


(lib.Path_15_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#127EA6").s().p("AkajFIBpgpIHMFtIgPBwg");
	this.shape.setTransform(28.25,23.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_15_Layer_1, null, null);


(lib.Path_12_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#127EA6").s().p("AkeiDIAKhzIIzG9IhgAwg");
	this.shape.setTransform(28.65,24.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12_Layer_1, null, null);


(lib.Path_10_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3CB9E4").s().p("Al7DNIL2vlIgRYxg");
	this.shape.setTransform(37.95,79.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10_Layer_1, null, null);


(lib.Path_7_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#127EA6").s().p("AjVkoIB0ABIE2HwIg1Bgg");
	this.shape.setTransform(21.35,29.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7_Layer_1, null, null);


(lib.Path_3_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#127EA6").s().p("AjXjOIAyhmIF9JgIhtAJg");
	this.shape.setTransform(21.625,30.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_Layer_1, null, null);


(lib.Path_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6ACAEA").s().p("AochRIQ5p9IpCWdg");
	this.shape.setTransform(54.125,71.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_Layer_1, null, null);


(lib.Group_2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#060A0B").s().p("Ai+DhQhdhPgKh6QgKh5BPhdQBPhdB6gKQB5gKBdBPQBeBPAKB6QAGBNghBHQggBFg9AtQACANgFAMQgGAMgMAGQgMAGgNgBQgNgCgKgKQgnAQgrAEIgaABQhpAAhThHg");
	this.shape.setTransform(29.5466,29.5497);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2_Layer_1, null, null);


(lib.Group_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#060A0B").s().p("Ai+DhQhdhPgKh6QgKh5BPhdQBPhdB6gKQB5gKBdBPQBeBPAJB6QAHBNghBHQghBEg9AtQADANgGAMQgFANgMAGQgMAHgOgCQgNgCgJgJQgoAPgqADIgaABQhpAAhThGg");
	this.shape.setTransform(29.5223,29.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_Layer_1, null, null);


(lib.Group_2_Layer_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#060A0B").s().p("Ai+DhQhdhPgKh6QgKh5BPhdQBPheB6gKQB5gJBdBPQBeBPAKB6QAGBNghBHQggBFg9AsQACANgFAMQgGANgMAGQgMAGgNgBQgNgCgKgJQgoAPgqADIgaACQhpAAhThHg");
	this.shape_1.setTransform(29.5466,29.5549);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2_Layer_1_1, null, null);


(lib.Group_1_Layer_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#060A0B").s().p("Ai+DhQhdhPgKh6QgKh5BPhdQBPhdB6gKQB5gKBdBPQBeBPAJB6QAHBNghBHQggBFg+AtQADANgGAMQgFAMgMAGQgMAGgOgBQgNgCgJgJQgoAPgqAEIgaABQhpAAhThHg");
	this.shape_1.setTransform(29.5223,29.5497);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_Layer_1_1, null, null);


(lib.Path_Layer_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#25282B").s().p("AHRF0QhPgVyMlgQgSgCgPgIQgggSAMgiIASg3IZxkCIkgLRQgBAMgLAJQgNALgXAAQgQAAgTgFg");
	this.shape_2.setTransform(83.5462,37.702);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_Layer_1_2, null, null);


(lib.Path_4_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25282B").s().p("AraE8QgTgGgJgOQgKgNAFgOIEbscQAFgOAQgGQAQgFATAFIHjCZQAWAHBNBEQBOBEAVAHIH2CXQAPAEgRAbIgZAnInuGzQgGAPguA1QgxA3gbAPg");
	this.shape.setTransform(76.5459,55.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_Layer_1, null, null);


(lib.Path_1_Layer_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A7A9AC").s().p("AH5KYI0Kl+QgIgCgIgFIE6utQAJAAAIACIHoCRQAUAGA2A3QBKBKANALIAPAMQALAIAIACII9CqQAJADAGAEIkXNJQgKAAgHgDg");
	this.shape_1.setTransform(80.15,66.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_Layer_1_1, null, null);


(lib.Group_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#818282").s().p("AnFEeIgBgCIOIo+IACABIADAGIuII+g");
	this.shape.setTransform(45.45,29.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_Layer_1, null, null);


(lib.Group_21_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#121212").s().p("AmyFXQBkiMB0h1QBDhEA5grQAShDAwg5QAug4BBhDIASgNQAXgQAagMQBTgnBSAOQAkAFARATQAQASgRAHQg8AYgkAaQgdAUAGACIAygTQA3gUAXgEQARgDAHAAQASAAAJAJQANAOgIALQgHAKgeANQhfAqgxAnIhLA2QgQAOAJAKQAIAKAWgGIBogdQAVgIAOABQAPABALAMQANAOgEARQgDAQgOAJIijBUQgwAagqABQABAFgCACIiuDrg");
	this.shape.setTransform(43.4988,34.2748);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_21_Layer_1, null, null);


(lib.Group_20_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#121212").s().p("AmyFXQBjiMB0h1QBEhDA5gsQAShDAwg5QAug4BBhDIASgNQAXgQAagMQBTgnBSAOQAkAFAQATQARASgRAHQg8AYgkAaQgdAUAGACIAygTQA3gUAXgEQARgDAHAAQASAAAIAJQAOAOgIALQgHAKgeANQhgAqgwAnIhMA2QgPAOAIAKQAJAKAVgGIBpgdQAVgIAOABQAPABALAMQANAOgEARQgDAQgPAJIiiBUQgwAagqABQABAFgDACIitDrg");
	this.shape.setTransform(43.4955,34.2748);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_20_Layer_1, null, null);


(lib.Group_11_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#09181F").s().p("AlNLWQgQgEgJgPImdq2QgIgOADgRQAEgRAOgJIQmqlQAOgJAQAFQAQAEAJAPIGdK2QAJAOgEARQgDARgOAJImlEMQgEACgGAAIgDAAQgLgBgKAHIigBlQgKAGgEALIgCADQgCAFgEADImqEPQgKAHgKAAIgKgCg");
	this.shape.setTransform(77.798,72.7615);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11_Layer_1, null, null);


(lib.Group_9_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C36431").s().p("ADKCXQBIhHgthxQgYg8hWgbQisg1iOBsQhHA2glBAQAJgZASgiQAlhEAygqQA8gzBCgTQBRgXBgAaQBUAWAyAzQArAsAJA3QAWB7hiA3QgxAcg1ADQAtgMAjgjg");
	this.shape.setTransform(30.3934,19.7672);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9_Layer_1, null, null);


(lib.Group_6_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C36431").s().p("ABTBLQAeg0gfguQgxhNhfAHQgvADgmATQALgKASgLQAigWAhgCQAngEAqANQApANAcAWQAjAcAKAsQAJAkgLAaQgOAggqAPIgnAJQAVgRAPgag");
	this.shape.setTransform(14.7976,11.7879);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6_Layer_1, null, null);


(lib.Group_5_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C36431").s().p("ABKgGQhFglhCAlQg5AegYgzQgMgagBggQADAMAHALQANAVASgDQALgCAOgOIAbgbQAqgjA7APQBTAVAZBlQAMAzgEAvQgKhThHgkg");
	this.shape.setTransform(15.6235,11.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5_Layer_1, null, null);


(lib.Group_4_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#121212").s().p("ACvK1QAKhBAFgvQAKhZgXgwIngnRQgHgQADgRQgggQgggiQgpgrgVgyQgJgOgQgoQgQgpgCgRIgiiRQgDgXANgPQAMgPAPAIQAXAMAHAjIAqBKQASAoAXAKQAGADAQAAQAVAAATggIAZhXQABgDhFgyQhGgzgBgEQgKgjAOgNQAMgMApgDQAegCAZgNQAYgNADgPQAFgcAPgFQAOgFARASQAMALAPBQIAPBQQA4BDAZBnQANA0ACAmIAFBQQANAEAJAEQAWALBGAwQBWA7BRA/QDtC8A0B7QATAsACE8g");
	this.shape.setTransform(51.146,69.2606);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4_Layer_1, null, null);


(lib.Group_3_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#121212").s().p("ACpK2IANh6QAHhOgSgxIngnRQgIgQAEgRQgggQghgiQgogrgVgyQgKgOgPgoQgQgpgCgRIgiiRQgDgXANgPQAMgPAPAIQAXAMAHAjIApBKQATAoAWAKQAHADAQAAQAIAAAJgGQAMgIAKgSIAahXQACgGhAgvQhDgxgDgIQgPgpAYgQQANgJArgEQAXgCATgKQAUgKACgKQAJghAOgEQAMgEATATQAMAMAPBPIAPBQQA3BDAaBnQANA0ABAmIAGBQQAMADAKAFQAWALBGAwQBWA7BRA/QDtC8A0B7QAOAhAKB5QAJBpAABJIijAcg");
	this.shape.setTransform(51.7392,69.3652);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3_Layer_1, null, null);


(lib.Group_2_Layer_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#060A0B").s().p("AgSEnQhOgHhBgsQg+grgihEQgOABgLgIQgLgHgEgNQgFgNAEgNQAEgMALgJQgJgpAEgpQAKh6BdhPQBdhPB5AKQB7AKBPBdQBPBdgKB5QgKB6heBPQhSBHhqAAIgagBg");
	this.shape_2.setTransform(30.0871,29.5497);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2_Layer_1_2, null, null);


(lib.Group_2_0_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#121212").s().p("AiWPLQgUgGgMgTImcq2QgLgTAEgVQAEgVASgMIBMgwIAAgBIgBgDIgBgBIgBgJIhWA3QgPAJgUgHQgMgEgVgOIkUixQgNgIgDgDQgWgOACgOQACgSAngXIVDtXQAkgYAMANQAGAGAFAeIAeFJQAEAYgBANQADAjgWAOIhiA/QACABAFAEIACADIABABIAAAAIBSg0QASgLAUAFQAUAFAMATIGcK2QAMATgFAVQgEAVgSALImlEMQgGAEgJAAIgDAAQgIAAgHAEIigBmQgIAFgDAHIgBADQgDAIgIAFImpEPQgMAHgNAAQgGAAgHgBg");
	this.shape.setTransform(97.3334,97.2611);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2_0_Layer_1, null, null);


(lib.Group_1_Layer_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#060A0B").s().p("AgSEnQhPgHhAgsQg+grgjhDQgNAAgLgIQgLgHgEgNQgFgNAEgNQAEgNALgIQgJgqAEgoQAKh6BdhPQBdhQB5AKQB6ALBPBdQBQBdgKB5QgKB6heBQQhTBGhpAAIgagBg");
	this.shape_2.setTransform(30.0743,29.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_Layer_1_2, null, null);


(lib.Group_1_3_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#121212").s().p("AgTgIIAAAAIABAAIAlgYIgGAgIAAAAIgHAig");
	this.shape.setTransform(1.95,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#121212").s().p("AE8B7IqfiyIAOhEIKfCyQANAEAIAMQAHANgDAOQgDAOgLAHQgIAFgJAAIgIgBg");
	this.shape_1.setTransform(38.1179,12.3807);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_3_Layer_1, null, null);


(lib.Group_1_2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25282B").s().p("AksBbIJZl+Ig1GSIkbC1g");
	this.shape.setTransform(30.125,29.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_2_Layer_1, null, null);


(lib.Group_1_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#818282").s().p("AnEEgIgEgIIOHo+IAGAHIADAJIuGI9g");
	this.shape.setTransform(45.65,29.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_1_Layer_1, null, null);


(lib.Group_1_0_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#121212").s().p("AiWPLQgUgGgMgTImdq2QgLgSAFgWQAEgVASgLIBMgxIgCgEIAAAAQgCgFAAgFIhVA3QgPAKgVgIQgLgEgVgOIkUiwQgIgFgJgHQgVgOACgOQACgRAngXIVDtYQAjgYANANQAGAGAEAeIAfFJQADAYAAAOQACAjgVANIhjA/QADABAEAFIADACIAAABIABABIBSg1QARgLAVAGQAUAFALATIGdK1QAMATgFAVQgFAWgRALImlELQgHAFgIgBIgDAAQgIAAgIAEIigBmQgGAEgEAIIgCADQgDAIgHAFImpEPQgMAIgNAAQgGAAgHgCg");
	this.shape.setTransform(97.3208,97.2858);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_0_Layer_1, null, null);


(lib.Scene_1_buttons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buttons
	this.sending_button = new lib.button();
	this.sending_button.name = "sending_button";
	this.sending_button.parent = this;
	this.sending_button.setTransform(496.7,374.35,0.5424,2.5463,60.9788,0,0,0.8,-0.1);
	new cjs.ButtonHelper(this.sending_button, 0, 1, 1);

	this.notes_button = new lib.button();
	this.notes_button.name = "notes_button";
	this.notes_button.parent = this;
	this.notes_button.setTransform(381.05,510.3,0.3549,2.2374,-24.4683,0,0,0.4,0.4);
	new cjs.ButtonHelper(this.notes_button, 0, 1, 1);

	this.conference_button = new lib.button();
	this.conference_button.name = "conference_button";
	this.conference_button.parent = this;
	this.conference_button.setTransform(581.65,524.35,0.6642,2.2375,23.1974,0,0,0.5,0.2);
	new cjs.ButtonHelper(this.conference_button, 0, 1, 1);

	this.coffee_button = new lib.button();
	this.coffee_button.name = "coffee_button";
	this.coffee_button.parent = this;
	this.coffee_button.setTransform(113.45,473.95,0.4964,2.1413,0,0,0,-8.1,0.4);
	new cjs.ButtonHelper(this.coffee_button, 0, 1, 1);

	this.venues_button = new lib.button();
	this.venues_button.name = "venues_button";
	this.venues_button.parent = this;
	this.venues_button.setTransform(236.1,354.6,0.426,2.049,0.0004,0,0,0.5,0.2);
	new cjs.ButtonHelper(this.venues_button, 0, 1, 1);

	this.type_button = new lib.button();
	this.type_button.name = "type_button";
	this.type_button.parent = this;
	this.type_button.setTransform(268.3,564.25,0.4979,1.9601,59.9989,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.type_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.type_button},{t:this.venues_button},{t:this.coffee_button},{t:this.conference_button},{t:this.notes_button},{t:this.sending_button}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_buttons, null, null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(64.3,69.5,1,1,0,0,0,64.3,69.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,128.6,138.9), null);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_15_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(28.2,23.9,1,1,0,0,0,28.2,23.9);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,56.5,47.7), null);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_12_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(28.7,24.7,1,1,0,0,0,28.7,24.7);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,57.3,49.4), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_10_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(38,79.3,1,1,0,0,0,38,79.3);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,75.9,158.6), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_7_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(21.4,29.7,1,1,0,0,0,21.4,29.7);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,42.7,59.4), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_3_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(21.6,30.9,1,1,0,0,0,21.6,30.9);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,43.3,61.7), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(54.1,71.9,1,1,0,0,0,54.1,71.9);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,108.3,143.8), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_1 = new lib.Path_Layer_1_1();
	this.Layer_1_1.name = "Layer_1_1";
	this.Layer_1_1.parent = this;
	this.Layer_1_1.setTransform(95.9,85,1,1,0,0,0,95.9,85);
	this.Layer_1_1.depth = 0;
	this.Layer_1_1.isAttachedToCamera = 0
	this.Layer_1_1.isAttachedToMask = 0
	this.Layer_1_1.layerDepth = 0
	this.Layer_1_1.layerIndex = 0
	this.Layer_1_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,191.8,169.9), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Group_2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(29.6,29.6,1,1,0,0,0,29.6,29.6);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,59.1,59.1), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Group_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(29.5,29.5,1,1,0,0,0,29.5,29.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,59.1,59.1), null);


(lib.Group_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_1 = new lib.Group_2_Layer_1_1();
	this.Layer_1_1.name = "Layer_1_1";
	this.Layer_1_1.parent = this;
	this.Layer_1_1.setTransform(29.6,29.6,1,1,0,0,0,29.6,29.6);
	this.Layer_1_1.depth = 0;
	this.Layer_1_1.isAttachedToCamera = 0
	this.Layer_1_1.isAttachedToMask = 0
	this.Layer_1_1.layerDepth = 0
	this.Layer_1_1.layerIndex = 0
	this.Layer_1_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2_1, new cjs.Rectangle(0,0,59.1,59.1), null);


(lib.Group_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_1 = new lib.Group_1_Layer_1_1();
	this.Layer_1_1.name = "Layer_1_1";
	this.Layer_1_1.parent = this;
	this.Layer_1_1.setTransform(29.5,29.6,1,1,0,0,0,29.5,29.6);
	this.Layer_1_1.depth = 0;
	this.Layer_1_1.isAttachedToCamera = 0
	this.Layer_1_1.isAttachedToMask = 0
	this.Layer_1_1.layerDepth = 0
	this.Layer_1_1.layerIndex = 0
	this.Layer_1_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0,0,59.1,59.1), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_4_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(76.5,55,1,1,0,0,0,76.5,55);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,153.1,110.1), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_1 = new lib.Path_1_Layer_1_1();
	this.Layer_1_1.name = "Layer_1_1";
	this.Layer_1_1.parent = this;
	this.Layer_1_1.setTransform(80.2,66.7,1,1,0,0,0,80.2,66.7);
	this.Layer_1_1.depth = 0;
	this.Layer_1_1.isAttachedToCamera = 0
	this.Layer_1_1.isAttachedToMask = 0
	this.Layer_1_1.layerDepth = 0
	this.Layer_1_1.layerIndex = 0
	this.Layer_1_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,160.3,133.4), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_2 = new lib.Path_Layer_1_2();
	this.Layer_1_2.name = "Layer_1_2";
	this.Layer_1_2.parent = this;
	this.Layer_1_2.setTransform(83.5,37.7,1,1,0,0,0,83.5,37.7);
	this.Layer_1_2.depth = 0;
	this.Layer_1_2.isAttachedToCamera = 0
	this.Layer_1_2.isAttachedToMask = 0
	this.Layer_1_2.layerDepth = 0
	this.Layer_1_2.layerIndex = 0
	this.Layer_1_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,167.1,75.4), null);


(lib.Group_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Group_21_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(43.5,34.2,1,1,0,0,0,43.5,34.2);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_21, new cjs.Rectangle(0,0,87,68.6), null);


(lib.Group_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Group_20_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(43.5,34.2,1,1,0,0,0,43.5,34.2);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_20, new cjs.Rectangle(0,0,87,68.6), null);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Group_11_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(77.8,72.8,1,1,0,0,0,77.8,72.8);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(0,0,155.6,145.5), null);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Group_9_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(30.4,19.8,1,1,0,0,0,30.4,19.8);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(0,0,60.8,39.6), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Group_6_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(14.8,11.8,1,1,0,0,0,14.8,11.8);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0,29.6,23.6), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Group_5_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(15.6,11.3,1,1,0,0,0,15.6,11.3);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0.1,31.3,22.5), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Group_4_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(51.1,69.2,1,1,0,0,0,51.1,69.2);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,102.3,138.6), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Group_3_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(51.8,69.4,1,1,0,0,0,51.8,69.4);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,103.5,138.8), null);


(lib.Group_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Group_2_0_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(97.4,97.2,1,1,0,0,0,97.4,97.2);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2_0, new cjs.Rectangle(0,0,194.7,194.5), null);


(lib.Group_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_2 = new lib.Group_2_Layer_1_2();
	this.Layer_1_2.name = "Layer_1_2";
	this.Layer_1_2.parent = this;
	this.Layer_1_2.setTransform(30.1,29.6,1,1,0,0,0,30.1,29.6);
	this.Layer_1_2.depth = 0;
	this.Layer_1_2.isAttachedToCamera = 0
	this.Layer_1_2.isAttachedToMask = 0
	this.Layer_1_2.layerDepth = 0
	this.Layer_1_2.layerIndex = 0
	this.Layer_1_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2_2, new cjs.Rectangle(0,0,60.2,59.1), null);


(lib.Group_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Group_1_3_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(36.9,12.3,1,1,0,0,0,36.9,12.3);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_3, new cjs.Rectangle(0,0,73.8,24.8), null);


(lib.Group_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Group_1_2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(30.1,29.2,1,1,0,0,0,30.1,29.2);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_2, new cjs.Rectangle(0,0,60.3,58.4), null);


(lib.Group_1_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Group_1_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(45.6,29.5,1,1,0,0,0,45.6,29.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_1_1, new cjs.Rectangle(0,0,91.3,59.1), null);


(lib.Group_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Group_1_0_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(97.3,97.2,1,1,0,0,0,97.3,97.2);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(0,0,194.7,194.6), null);


(lib.Group_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_2 = new lib.Group_1_Layer_1_2();
	this.Layer_1_2.name = "Layer_1_2";
	this.Layer_1_2.parent = this;
	this.Layer_1_2.setTransform(30.1,29.6,1,1,0,0,0,30.1,29.6);
	this.Layer_1_2.depth = 0;
	this.Layer_1_2.isAttachedToCamera = 0
	this.Layer_1_2.isAttachedToMask = 0
	this.Layer_1_2.layerDepth = 0
	this.Layer_1_2.layerIndex = 0
	this.Layer_1_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_4, new cjs.Rectangle(0,0,60.2,59.1), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Group_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(45.5,29.1,1,1,0,0,0,45.5,29.1);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,90.9,58.3), null);


(lib.Scene_1_Venues = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Venues
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1BA8DF").s().p("AgRAsQgPgGgGgIIAEgNIALAJQAGAFAFABQAIADAEgCQAFgBABgGQACgFgCgFQgCgEgJgJQgKgJgCgIQgCgHADgJQAEgMAJgDQAIgDANAEQAMAFAJAKIgIAKQgJgJgJgDQgGgDgFACQgDABgCAFIgBAHIADAGIAIAKQAIAHADAFQADAEABAGQAAADgCAIQgEAMgKAEIgHABQgHAAgJgDg");
	this.shape.setTransform(273.6685,337.2977,0.9504,0.9504);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1BA8DF").s().p("AglAjIAehXIAtASIgEANIghgOIgHAZIAeAKIgEAMIgegMIgKAcIAhANIgFAMg");
	this.shape_1.setTransform(267.8237,335.0123,0.9504,0.9504);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1BA8DF").s().p("AgSAxQgQgFgFgMQgGgMAFgPIAUg4IANAFIgTA3QgEALADAHQADAGAKAEQATAIAGgWIATg2IAOAFIgUA4QgCAJgHAHQgIAGgHAAIgEAAQgHAAgHgDg");
	this.shape_2.setTransform(260.9035,331.7751,0.9504,0.9504);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1BA8DF").s().p("AADAzIgQhVIAAAAIgBAEIgWBBIgMgEIAehXIAQAGIAQBUIAXhFIAMAFIgeBXg");
	this.shape_3.setTransform(252.1899,328.9537,0.9504,0.9504);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1BA8DF").s().p("AglAjIAehXIAtASIgEAMIghgMIgHAXIAeAMIgEALIgegLIgJAbIAgAMIgFANg");
	this.shape_4.setTransform(245.0146,326.1738,0.9504,0.9504);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1BA8DF").s().p("AgjAvIABhiIAOAFIgDBRIAFgJIApg3IANAGIg5BLg");
	this.shape_5.setTransform(239.74,323.0613,0.9504,0.9504);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3F3F3").s().p("AizAkIFnivIhiEXg");
	this.shape_6.setTransform(219.2593,314.4842,0.9504,0.9504);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1BA8DF").s().p("Ak4hwIAHgUIJqD0IgIAVg");
	this.shape_7.setTransform(226.2412,387.5627,0.9504,0.9504);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1BA8DF").s().p("Ak4hwIAIgUIJpD1IgHAUg");
	this.shape_8.setTransform(229.4012,379.1282,0.9504,0.9504);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1BA8DF").s().p("Ak4hvIAIgVIJpD1IgIAUg");
	this.shape_9.setTransform(235.5073,361.2852,0.9504,0.9504);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1BA8DF").s().p("Ak3hwIAGgUIJpD0IgHAVg");
	this.shape_10.setTransform(231.9197,370.9789,0.9504,0.9504);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1BA8DF").s().p("Ak4hvIAIgVIJpD1IgHAUg");
	this.shape_11.setTransform(238.7148,352.1142,0.9504,0.9504);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1BA8DF").s().p("Ak3hwIAHgUIJoD1IgGAUg");
	this.shape_12.setTransform(242.3737,340.9236,0.9504,0.9504);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ap5F1IE9uMIFmiwIJQDrImeSkg");
	this.shape_13.setTransform(232.327,368.8458,0.9504,0.9504);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(234.45,380.65,0.9504,0.9504,0,0,0,64.5,69.5);
	this.instance.alpha = 0.1211;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Venues, null, null);


(lib.Scene_1_envelopes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// envelopes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A4F55").s().p("AgvAZIBfhAIgNAeIhHAxg");
	this.shape.setTransform(560.3113,393.9652,0.9504,0.9504);

	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(460.1,393.9,0.9504,0.9504,0,0,0,54.1,71.9);
	this.instance.alpha = 0.3008;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#08536F").s().p("AgVgDIjmmMIH2Mfg");
	this.shape_1.setTransform(535.4823,363.6477,0.9504,0.9504);

	this.instance_1 = new lib.Path_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(527.15,365.9,0.9504,0.9504,0,0,0,21.7,30.9);
	this.instance_1.alpha = 0.1602;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9BDBF2").s().p("AsYhRIQ6p9IH3MgIw6J9g");
	this.shape_2.setTransform(484.0423,393.9177,0.9504,0.9504);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AqOhGIMoosIH1K5IsoIsg");
	this.shape_3.setTransform(505.3311,381.4676,0.9504,0.9504);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4A4F55").s().p("Ajqk/IAZAAIG8JrIgKAUg");
	this.shape_4.setTransform(545.2951,356.4485,0.9504,0.9504);

	this.instance_2 = new lib.Path_7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(541.8,360.75,0.9504,0.9504,0,0,0,21.4,29.8);
	this.instance_2.alpha = 0.1602;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3CB9E4").s().p("AksmPIDlAIIFzJQIhiDHg");
	this.shape_5.setTransform(540.1392,363.6477,0.9504,0.9504);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A4F55").s().p("ArUhQIPXo+IHSLfIvXI+g");
	this.shape_6.setTransform(472.0911,391.5893,0.9504,0.9504);

	this.instance_3 = new lib.Path_10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(409.25,376.45,0.9504,0.9504,0,0,0,38.1,79.4);
	this.instance_3.alpha = 0.3008;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#08536F").s().p("AgUAEIlekpILlJLg");
	this.shape_7.setTransform(480.4545,329.0296,0.9504,0.9504);

	this.instance_4 = new lib.Path_12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(475.3,335.25,0.9504,0.9504,0,0,0,28.7,24.8);
	this.instance_4.alpha = 0.1602;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9BDBF2").s().p("ArtDNIL1vlILnJMIr3Plg");
	this.shape_8.setTransform(444.3871,376.4542,0.9504,0.9504);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D4116E").s().p("Ap9CuIKFtPIJ2H0IqENPg");
	this.shape_9.setTransform(449.4717,361.343,0.9504,0.9504);

	this.instance_5 = new lib.Path_15();
	this.instance_5.parent = this;
	this.instance_5.setTransform(483.4,323,0.9504,0.9504,0,0,0,28.2,23.9);
	this.instance_5.alpha = 0.1602;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3CB9E4").s().p("Al7kAIDShKIIlGzIgSDig");
	this.shape_10.setTransform(481.2861,325.5844,0.9504,0.9504);

	this.instance_6 = new lib.Path_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(468.35,392.3,0.9504,0.9504,0,0,0,95.9,85);
	this.instance_6.alpha = 0.1211;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.shape_10},{t:this.instance_5},{t:this.shape_9},{t:this.shape_8},{t:this.instance_4},{t:this.shape_7},{t:this.instance_3},{t:this.shape_6},{t:this.shape_5},{t:this.instance_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_envelopes, null, null);


(lib.Scene_1_desk_person_pad_laptop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// desk_person_pad_laptop
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BA9C6F").s().p("AgcCPQgJgOgQgoQgPgpgCgRIgiiQQgEgWANgQQAMgPAPAIQAYALAHAkIAoBKQASAnAXAKQAGADARAAQAVAAASgfIg2BwQglBCgWAAQgNAAgIgTg");
	this.shape.setTransform(365.4205,520.2953,0.9504,0.9504);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#113C54").s().p("AgTAeIAOhCIAZAHIgOBCg");
	this.shape_1.setTransform(417.6746,523.7813,0.9504,0.9504);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#113C54").s().p("AABALIgHgNIAAAAIABAAIAMgIIgFAVg");
	this.shape_2.setTransform(352.5737,506.5557,0.9504,0.9504);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEC796").s().p("AgTgIIAAAAIABAAIAmgYIgHAgIAAAAIgIAhg");
	this.shape_3.setTransform(353.8091,507.1259,0.9504,0.9504);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1BA8DF").s().p("AlKgzIAPhEIKFCrIgOBEg");
	this.shape_4.setTransform(385.7419,515.2754,0.9504,0.9504);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D4116E").s().p("AgGAiQgNgEgIgMQgHgMADgNQADgOALgIQAMgHAMADQANAEAIAMQAHANgDANQgDAOgLAHQgIAFgJAAIgHgBg");
	this.shape_5.setTransform(418.8958,524.1139,0.9504,0.9504);

	this.instance = new lib.Group_1_3();
	this.instance.parent = this;
	this.instance.setTransform(386.15,516.6,0.9504,0.9504,0,0,0,37,12.4);
	this.instance.alpha = 0.3008;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#08536F").s().p("AhRE4QAPAIASgQQAkgfASh1QAqjjARhtQAdjAgVg1InhneQgVgqA4gvQAtgkA+gVIAfgFQAmgDAjAQQBNAlC2CRQDsC8A1B7QBCCbhTGzQgyELhXEgQhDDhivCLQhYBGhLAYg");
	this.shape_6.setTransform(413.9448,636.4705,0.9504,0.9504);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BA9C6F").s().p("AgBEmQgagFgpgnQgygvgZg6QgKgOgPgpQgQgpgCgQIgiiRQgDgWAMgPQANgPAOAHQAYAMAHAjIApBLQATAnAWAKQAGADARAAQAWAAARggIAZhXQAGgZgCg+IgEhaQgBgyARgOQAPgNAUAUQAMAMAPBQIAPBQQA3BDAaBmQANA0ABAmIARDnIilAXg");
	this.shape_7.setTransform(376.3975,520.1391,0.9504,0.9504);

	this.instance_1 = new lib.Group_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(398.95,552.55,0.9504,0.9504,0,0,0,51.8,69.4);
	this.instance_1.alpha = 0.2305;

	this.instance_2 = new lib.Group_4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(400.3,552.7,0.9504,0.9504,0,0,0,51.3,69.4);
	this.instance_2.alpha = 0.2305;

	this.instance_3 = new lib.Group_5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(321.15,679.9,0.9504,0.9504,0,0,0,15.7,11.3);
	this.instance_3.alpha = 0.7813;

	this.instance_4 = new lib.Group_6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(354.35,743.2,0.9504,0.9504,0,0,0,15,11.8);
	this.instance_4.alpha = 0.7813;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B4552E").s().p("Ah+BBQAEgrASgcQAgg1AOgOQAggfAsAEQBJAHAaBQQAOAngCAmQgHgZgPgaQgfgzgqgCQhWgFgvBJQgXAkgGAmQgBgQADgVg");
	this.shape_8.setTransform(353.2271,691.3908,0.9504,0.9504);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B4552E").s().p("AjABPQAHg1AVgkQAegvA4ghQA/gmA7ADQBLAFAtBPQAXAoAHAmQgKgZgYgaQgwg0hCgCQhtgEhMBiQgmAygQAyQgBgUACgbg");
	this.shape_9.setTransform(359.6485,686.9403,0.9504,0.9504);

	this.instance_5 = new lib.Group_9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(349.4,741.05,0.9504,0.9504,0,0,0,30.4,19.9);
	this.instance_5.alpha = 0.7813;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B4552E").s().p("AkKByQAFhZAcg0QAnhJA3grQBDg1BLAFQCXAKBICfQAkBOAGBOQgOg0gkg2QhHhshugOQiJgShgCWQgwBLgVBPQgDghACgtg");
	this.shape_10.setTransform(366.6317,681.1807,0.9504,0.9504);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9C4A29").s().p("AjyDyQhqhlgEiNQgEiNBkhkQBlhkCSAAQCRAABrBkQBqBkAECNQAECOhkBkQhkBkiTAAQiRAAhrhkg");
	this.shape_11.setTransform(348.7906,746.4911,0.9504,0.9504);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7D3D20").s().p("AkQCCQhSgUhfg4Qg/glARgnQAggrAHgXQAIgcgfgCIggAEQAQgKATgKQAogVAUAAQAYAAgBAkQgBAigTAbQgbApBLgXQAmgLArgTIAggJQAmgEAgAVQAYAPAeAnQAPASAKAQQgBgQAIgZQASg0AxgtQAXgVAvgSQA2gUgPAJQglAUgWAcQgQAUgQAkQgbA9gLAfQAMgUAVgZQAog0AsgdQAigYArgQQA8gXA8AAQBOAABPBNQBGBEATBEQANAzjKAiIjMAXQkEgFiCgfg");
	this.shape_12.setTransform(345.0293,669.1889,0.9504,0.9504);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7D3D20").s().p("AkKGyQh9hThci2QhMiXATi/QATi2BUhDQA7gwBuAlQB4ApA4BzQARgpAlgwQBKheBrggQCMgqBjA0QBPAqAgBWQAqBzAIB7QAKCUgtCCQhBC8ibBaQh7BHiaAAQihAAh0hNg");
	this.shape_13.setTransform(347.477,710.9349,0.9504,0.9504);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BA9C6F").s().p("AANIrQjNAAiAiXQh9iUgHjwQgIkLBaiMQBuiqEDAHQD6AGBtChQBYCCAHEJQAHDxh3CXQh5CbjNAAIgCAAg");
	this.shape_14.setTransform(346.4973,699.8628,0.9504,0.9504);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#08536F").s().p("AlbDLQhbg+gFhSQgEhJBCh6QCFj2C7jFQA7g9A4gxIAtglQAqgeBUBNQAfAdAUAcQAUAegIAGIl1H4QgfAmAjAeQAZAUA6AQIG6DJIhUIAg");
	this.shape_15.setTransform(236.6131,651.9086,0.9504,0.9504);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#08536F").s().p("AmrJLQjSg4iZiWQg/g+AyjBQAPg8AZhCIAWg2QAmhcAvhoQBdjQAug5QA9hKBhgSQBZgRBVAiQBfAmAPAAIApAEQAvACAmgOIA0gTQAVgHA8gOQBPgSBPAdQBxApBSCDQBMB4BFDJQAiBkATBMIAUAbQAYAiAQAiQA1BqglA8QhvC0j/BAQhPAUhVAHIoQABIgKABQhHAAhjgbg");
	this.shape_16.setTransform(345.2275,684.8478,0.9504,0.9504);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8B5C2B").s().p("Ah4FbQk+gFhAivQgXg/AEhmQALhyACg0QAHiFBJgnQAZgNAWADQAVACgGAKQgLATADAtQADAxATATQAVAWB6AWQCBAXBxgCQB5gBAggGQAkgGA6gfQANgIAOgOQAcgcAHgcQAGgYgJgdQgJgYABABQBoA7AmAxQA+BRgPCHQgFAqgfA2QgmBDhCA2QivCOkwAAIgVgBg");
	this.shape_17.setTransform(346.566,681.1831,0.9504,0.9504);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BA9C6F").s().p("AiRC+Ih6g9QABgUAKgdQATg7AqgxQAegjAsgwIAngoIARgOQAXgPAagNQBSgmBTANQAjAGARATQAQASgRAHQg8AYgkAZQgdAVAGACIAzgTQA2gVAYgEIAXgCQASAAAJAIQAOAOgJALQgHAKgeANQhfArgxAmIhLA2QgPANAIAKQAIALAWgHIBogcQAWgIANABQAQABAKALQAOAPgEARQgEAPgOAKIijBVQgvAagpABIgEAAQgtAAgiggg");
	this.shape_18.setTransform(270.1581,574.4069,0.9504,0.9504);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7C7C7C").s().p("AgkEwIAAgBQlsgOk4iYQjJhiiViJQgjghgBgyQAAgaAKgYQAKgYATgSQAjgfAyABQAxABAmAhQCDByCwBQQERB7E5ADQE6gDELh6QCshQB8hzQAjggAygCQAygBAkAgQAUARAMAYQALAYABAaQADAygiAhQiLCJjFBjQkuCYlsANIAAABg");
	this.shape_19.setTransform(347.6335,769.0608,0.9504,0.9504);

	this.instance_6 = new lib.Group_20();
	this.instance_6.parent = this;
	this.instance_6.setTransform(248.85,585.95,0.9504,0.9504,0,0,0,43.6,34.4);
	this.instance_6.alpha = 0.2305;

	this.instance_7 = new lib.Group_21();
	this.instance_7.parent = this;
	this.instance_7.setTransform(250.6,585.95,0.9504,0.9504,0,0,0,43.5,34.4);
	this.instance_7.alpha = 0.2305;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#575C60").s().p("AgKAHQgEgHALgGQAEgDAEAAQAFAAABADQACADgCADQgCAEgFACQgEADgEABQgEAAgCgDg");
	this.shape_20.setTransform(222.2946,483.2572,0.9503,0.9503);

	this.instance_8 = new lib.Group_1_2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(192.75,514,0.9504,0.9504,0,0,0,30.1,29.4);
	this.instance_8.alpha = 0.1211;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1BA8DF").s().p("Ap7EgQMdn9GlkLIA1FTIvrJ+IkMjJg");
	this.shape_21.setTransform(224.3576,495.1767,0.9503,0.9503);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5A5C5C").s().p("AqAEhITJsNIA4FWIvzKDg");
	this.shape_22.setTransform(224.4322,495.2791,0.9503,0.9503);

	this.instance_9 = new lib.Group();
	this.instance_9.parent = this;
	this.instance_9.setTransform(239.75,516.95,0.9504,0.9504,0,0,0,45.5,29.3);
	this.instance_9.alpha = 0.5898;

	this.instance_10 = new lib.Group_1_1_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(239.75,516.8,0.9504,0.9504,0,0,0,46,29.7);
	this.instance_10.alpha = 0.2891;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4D4C4D").s().p("AnDEgQgFgIgBgGIAAgFIOAo5IAEACQAGAEAEAHQAHAMgCAHIuAI5IAAAAQgGAAgHgNg");
	this.shape_23.setTransform(239.6078,516.7264,0.9503,0.9503);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B2B2B2").s().p("Ah6D7QgIgCgEgHIiHjjQgEgHACgHQABgHAHgEIF1juQAGgEAIACQAHACAEAGICHDkQAEAHgCAHQgBAHgHAEIl1DuQgEADgFAAIgEgBgABvj2Il1DuQgFAEgBAFQgCAHAEAFICHDkQADAFAGACQAHACAFgEIF1juQAFgDACgGQABgGgDgGIiIjjQgDgGgGgBIgFgBQgDAAgEACg");
	this.shape_24.setTransform(275.3831,575.7973,0.9503,0.9503);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D2D2D2").s().p("Ah6D6QgHgCgEgHIiHjjQgDgGABgHQACgGAFgEIF1juQAGgEAHACQAHACAEAGICHDjQAEAHgCAHQgBAGgGAEIl1DuQgEADgFAAIgEgBg");
	this.shape_25.setTransform(275.3927,575.7838,0.9503,0.9503);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A1A1A1").s().p("AgDACQgCgDADgCQADgDACAFQADACgEADIgCABQAAAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBg");
	this.shape_26.setTransform(207.3494,571.7379,0.9503,0.9503);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4D4C4D").s().p("AgUAhQgDgBgCgCIgNgXIA/goIANAXQAEAHgGADIgzAgIgDACIgCgBgAgjAIIAMAUQADAFAEgDIAzggQAEgCgDgFIgMgVg");
	this.shape_27.setTransform(304.3993,534.465,0.9503,0.9503);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#676767").s().p("AgYAdIgNgWIA9gnIANAWQADAGgFADIgzAgIgEACQgCAAgCgEg");
	this.shape_28.setTransform(304.4264,534.5014,0.9503,0.9503);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4D4C4D").s().p("AglALQgCgCABgEQABgDACgBIAzggQAGgEAEAHIANAWIg/AogAARgdIgzAgQgEADADAEIAMAVIA7gmIgMgUQAAgBgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgDABg");
	this.shape_29.setTransform(302.8591,531.7302,0.9503,0.9503);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#676767").s().p("AgkALQgDgGAFgDIAzggQAFgEAEAGIAMAWIg9Amg");
	this.shape_30.setTransform(302.8354,531.7033,0.9503,0.9503);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4D4C4D").s().p("AgZAcIgKgRQgBgDAAgDQABgDADgCIAvgeQAHgEADAHIAKARQAEAGgGAEIgvAeIgFACQgDAAgDgEgAAQgcIgvAeQgFADADAFIAKARQADAEAFgDIAvgdQAFgDgDgFIgKgRQgCgDgDAAIgDABg");
	this.shape_31.setTransform(311.3737,530.2316,0.9503,0.9503);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#676767").s().p("AgYAcIgKgRQgBgCAAgDQABgDACgBIAwgeQAGgEACAGIALARQACAGgEADIgwAeIgEABQgCAAgDgDg");
	this.shape_32.setTransform(311.3638,530.2205,0.9503,0.9503);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4D4C4D").s().p("AgUAgQgDgBgBgDIgKgRQgEgGAGgFIAvgdQAGgEAFAGIAKARQABADAAADQgBADgDABIgvAfIgEABIgCAAgAAQgbIgvAdQgEAEACAEIALARQADAEAEgCIAvgeQAEgDgCgFIgKgQQgCgEgDAAIgDACg");
	this.shape_33.setTransform(297.6917,538.867,0.9503,0.9503);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#676767").s().p("AgUAfQAAgBgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIgKgQQgEgHAFgCIAwgeQAFgEAEAGIAKARQABACAAADQgBADgCABIgwAeIgEABIgBAAg");
	this.shape_34.setTransform(297.6993,538.8648,0.9503,0.9503);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4D4C4D").s().p("AgPAvIggg0QgEgHAGgEIAzghQAGgEAEAHIAgA0QACADgBADQgBADgCACIgzAhIgFABQgDAAgCgEgAAHgvIgzAhQgEADADAEIAgA1QADAEAEgCIAyghQAFgDgDgFIggg0QAAgBgBAAQAAgBgBAAQAAgBgBAAQAAAAgBAAIgDABg");
	this.shape_35.setTransform(218.6221,586.7734,0.9503,0.9503);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#676767").s().p("AgOAvIggg1QgDgFAFgEIAzggQAEgEAEAGIAgA0QADAFgFAEIgzAhIgDABQgDAAgCgDg");
	this.shape_36.setTransform(218.6134,586.7611,0.9503,0.9503);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4D4C4D").s().p("AgLAzQgDgBgBgDIggg0QgEgGAGgFIAzghQAGgDAEAGIAgA1QACACgBAEQgBADgCABIgzAhIgEABIgCAAgAAHguIgzAgQgEADADAFIAgA0QADAFAEgDIAyghQAFgDgDgEIggg1QAAgBgBAAQAAgBgBAAQAAgBgBAAQAAAAgBAAIgDACg");
	this.shape_37.setTransform(225.4167,582.4339,0.9503,0.9503);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#676767").s().p("AgOAvIggg1QgDgFAFgEIAzggQAEgEAEAGIAgA0QADAFgFAEIgzAhIgDABQgDAAgCgDg");
	this.shape_38.setTransform(225.408,582.4373,0.9503,0.9503);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#4D4C4D").s().p("AgPAvIggg0QgEgHAGgEIAzghQADgCADABQADABABADIAgA0QACADgBADQgBADgCACIgzAhIgEABQgEAAgCgEgAAHgvIgyAhQgFACADAFIAgA1QADAFAEgDIAzghQAEgDgDgFIggg0QAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAgBAAIgDABg");
	this.shape_39.setTransform(232.1174,578.181,0.9503,0.9503);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#676767").s().p("AgPAuIgfg0QgEgGAGgDIAzghQACgBACAAQABAAABABQAAAAABAAQAAABAAAAQABABAAAAIAgA1QADAFgFAEIgzAhIgDABQgDAAgDgEg");
	this.shape_40.setTransform(232.14,578.1939,0.9503,0.9503);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4D4C4D").s().p("AgXA0Iggg0QgEgHAGgEIBDgsQADgBADABQADABACACIAfA1QACACAAAEQgBADgDABIhDAsIgFABQgDAAgCgEgAAQg1IhEAsQgEACADAFIAgA1QADAEAEgCIBDgsQAFgDgEgEIgfg1QgBAAAAgBQgBAAAAgBQgBAAAAAAQgBAAgBAAIgCAAg");
	this.shape_41.setTransform(239.7808,573.3185,0.9503,0.9503);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#676767").s().p("AgXA0Iggg0QgCgHAEgDIBEgrQAEgDAEAFIAgA1QADAFgFAEIhDArIgEABQgDAAgCgDg");
	this.shape_42.setTransform(239.7921,573.3015,0.9503,0.9503);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4D4C4D").s().p("AicCJIggg2QgEgGAGgFIFNjTQADgCADABQADABABACIAhA3QABACAAAEQgBADgDABIlNDUIgEABQgEAAgCgEgACUiJIlNDTQgFADADAFIAhA2QADAFAEgDIFNjUQAEgCgCgFIghg2QAAgBgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgDABg");
	this.shape_43.setTransform(261.0061,559.8028,0.9503,0.9503);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#676767").s().p("AibCJIggg3QgEgFAFgEIFOjTQAGgEACAGIAhA2QABADAAACQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAIlNDUIgEACQgDAAgCgEg");
	this.shape_44.setTransform(261.0137,559.776,0.9503,0.9503);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4D4C4D").s().p("AgOAuIggg0QgDgHAGgEIAvgfQADgCADABQADABABADIAgA1QACACgBAEQAAADgDABIgvAfIgEABQgEAAgDgEgAAFguIgvAfQgEADACAEIAgA1QADAFAEgDIAwgfQAEgCgDgFIggg1QgBgDgCAAIgEABg");
	this.shape_45.setTransform(289.872,541.4286,0.9503,0.9503);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#676767").s().p("AgMAtIghg0QgDgGAFgDIAwgfQACgCADABQABAAAAAAQABABAAAAQABABAAAAQAAAAABABIAfA1QAEAFgFAEIgwAfIgDABQgDAAgCgEg");
	this.shape_46.setTransform(289.8699,541.4416,0.9503,0.9503);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#4D4C4D").s().p("AgXA1Iggg2QgEgHAGgDIBCgrQAGgEAFAGIAgA2QACADgBADQgBADgCACIhCArIgEABQgEAAgDgEgAAPg0IhDAqQgEAEADAEIAgA2QADAFAEgDIBDgrQAEgDgDgFIggg1QgCgEgCAAIgDACg");
	this.shape_47.setTransform(282.2835,546.2772,0.9503,0.9503);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#676767").s().p("AgWA0Iggg1QgEgGAGgEIBCgqQAFgEAEAGIAgA2QAEAFgGAEIhCArIgDABQgDAAgDgEg");
	this.shape_48.setTransform(282.2914,546.2693,0.9503,0.9503);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4D4C4D").s().p("Ag8BLIgfg1QgCgDABgDQABgDACgCICLhYQAGgDAEAGIAgA1QADAHgGAEIiKBYIgEABQgEAAgDgEgAAzhLIiLBYQgEADADAFIAfA1QADAEAEgCICLhYQAEgDgCgFIggg1QgBgDgDAAIgDABg");
	this.shape_49.setTransform(218.5587,576.8557,0.9503,0.9503);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#676767").s().p("Ag6BKIggg1QgDgFAFgEICLhYQAFgDAEAGIAfA1QADAGgFADIiLBYIgDABQgDAAgCgEg");
	this.shape_50.setTransform(218.5397,576.8448,0.9503,0.9503);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4D4C4D").s().p("AgQAvIgfg0QgCgDABgDQABgDACgCIAzghQAGgDAEAGIAgA0QADAHgGAEIgyAgIgFACQgDAAgDgEgAAHgvIgzAhQgEADADAFIAfA0QADAEAEgDIAzggQAFgDgDgFIggg0QgCgDgCAAIgDABg");
	this.shape_51.setTransform(229.5484,569.8585,0.9503,0.9503);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#676767").s().p("AgPAuIgfg0QgDgGAFgDIAyghQAGgDADAGIAgAzQADAGgFAEIgzAgIgEACQgCAAgDgEg");
	this.shape_52.setTransform(229.5379,569.8508,0.9503,0.9503);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4D4C4D").s().p("AgQAvIgfg0QgCgDABgDQABgDACgCIAzghQAGgDAEAGIAgA0QADAHgGAEIgyAgIgEACQgEAAgDgEgAAHgvIgzAhQgEADADAFIAfA0QABAAAAABQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAABgBQAAAAABAAQAAAAAAgBIAzggQAFgDgDgFIggg0QgBgDgDAAIgDABg");
	this.shape_53.setTransform(236.3291,565.5347,0.9503,0.9503);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#676767").s().p("AgPAuIgfg0QgDgGAFgDIAyghQAGgDADAGIAgA0QADAFgFAEIgzAgIgEACQgCAAgDgEg");
	this.shape_54.setTransform(236.3325,565.527,0.9503,0.9503);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4D4C4D").s().p("AgPAvIggg0QgCgDABgDQABgDACgCIAzghQAHgDADAGIAgA0QADAGgFAFIgzAhIgEABQgEAAgCgEgAAHgvIgyAhQgFADADAFIAgA0QACAEAFgDIAyggQAFgDgDgFIggg0QAAAAgBgBQAAgBgBAAQAAAAgBAAQAAgBgBAAIgDABg");
	this.shape_55.setTransform(243.0458,561.268,0.9503,0.9503);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#676767").s().p("AgOAuIggg0QgDgFAFgEIAzghQAFgDADAGIAgA0QADAFgFAEIgzAhIgEABQgDAAgBgEg");
	this.shape_56.setTransform(243.0407,561.2601,0.9503,0.9503);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4D4C4D").s().p("AgQAvIgfg0QgCgDABgDQABgDACgCIAzghQAGgDAEAGIAgA0QADAGgGAFIgyAhIgEABQgEAAgDgEgAAHgvIgzAhQgEADADAFIAfA0QADAFAEgEIAzggQAEgDgCgFIggg0QgBgDgDAAIgDABg");
	this.shape_57.setTransform(249.9182,556.8966,0.9503,0.9503);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#676767").s().p("AgOAuIggg0QgDgFAFgEIAzghQAFgDAEAGIAfA0QADAGgFADIgzAhIgDABQgDAAgCgEg");
	this.shape_58.setTransform(249.8991,556.8887,0.9503,0.9503);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#4D4C4D").s().p("AgPAvIggg0QgEgGAGgFIAzggQACgCAEABQADABABACIAgA0QABADAAADQgBADgDACIgyAhIgEABQgEAAgCgEgAAHguIgyAgQgFADADAFIAfA0QADAFAFgDIAyghQAFgDgDgFIggg0QAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAIgEACg");
	this.shape_59.setTransform(256.6586,552.5976,0.9503,0.9503);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#676767").s().p("AgPAuIgfg0QgDgFAFgEIAzghQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAAAIAEADIAgA0QADAGgFADIgzAhIgDACQgEAAgCgEg");
	this.shape_60.setTransform(256.6773,552.6075,0.9503,0.9503);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#4D4C4D").s().p("AgLAzQgDgBgBgDIggg0QgBgDAAgDQABgDADgCIAyghQAHgEADAHIAgA0QACADgBADQgBADgCACIgzAhIgFABIgBAAgAAHgvIgyAhQgFADADAFIAgA0QADAEAEgCIAyghQAFgDgDgFIgfg0QgDgCgCAAIgDAAg");
	this.shape_61.setTransform(263.4983,548.2364,0.9503,0.9503);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#676767").s().p("AgOAuIggg0QgDgFAFgEIAzghQACgBADABQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABIAgA0QADAFgFAEIgzAhIgDABQgDAAgCgEg");
	this.shape_62.setTransform(263.4795,548.2489,0.9503,0.9503);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#4D4C4D").s().p("AgLAzQgDgBgBgDIggg0QgCgDABgDQABgDADgCIAyghQAHgEADAHIAgA0QACADgBADQgBADgCACIgzAhIgEABIgCAAgAAHgvIgyAhQgFADADAFIAgA0QADAEAEgCIAyghQAFgDgDgFIggg0QAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgDAAg");
	this.shape_63.setTransform(270.2829,543.9126,0.9503,0.9503);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#676767").s().p("AgOAuIggg0QgDgFAFgEIAzghQAGgDACAGIAgA0QADAFgFAEIgzAhIgEABQgDAAgBgEg");
	this.shape_64.setTransform(270.2702,543.9283,0.9503,0.9503);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#4D4C4D").s().p("AgPAvIggg0QgDgHAGgEIAyghQAGgDAFAGIAfA0QACACgBAEQgBADgCACIgzAgIgEACQgEAAgCgEgAAHguIgyAgQgEAEACAEIAgA0QAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABgBIAzghQAEgDgDgEIgfgzQgCgEgDAAIgDACg");
	this.shape_65.setTransform(277.0332,539.6282,0.9503,0.9503);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#676767").s().p("AgOAuIggg0QgDgGAFgDIAzghQAFgDAEAFIAfA0QADAHgFACIgzAhIgDACQgDAAgCgEg");
	this.shape_66.setTransform(277.0298,539.6396,0.9503,0.9503);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#4D4C4D").s().p("AgPAuIggg0QgBgCAAgEQABgDACgBIAzghQADgCADABQADABABADIAgA0QABACAAAEQgBADgCABIgzAhIgFACQgDAAgCgFgAAHgvIgyAhQgFACADAFIAgA0QADAFAEgDIAyghQAFgCgDgFIggg0QAAgBgBAAQAAgBgBAAQAAgBgBAAQAAAAgBAAIgDABg");
	this.shape_67.setTransform(283.8593,535.307,0.9503,0.9503);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#676767").s().p("AgOAuIggg0QgDgFAFgEIAzghQAFgCADAFIAgA0QADAFgFAEIgzAhIgEABQgDAAgBgEg");
	this.shape_68.setTransform(283.8593,535.2914,0.9503,0.9503);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#4D4C4D").s().p("AgQAvIgfg0QgCgDABgDQABgDACgCIAzghQAGgDAEAGIAgA0QADAHgGAEIgyAhIgEABQgEAAgDgEgAAHgvIgzAhQgEADADAFIAfA0QADAEAEgDIAzggQAFgDgDgFIggg0QgBgDgDAAIgDABg");
	this.shape_69.setTransform(290.6855,530.9569,0.9503,0.9503);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#676767").s().p("AgOAuIggg0QgDgGAFgDIAzghQAFgDAEAGIAfAzQADAHgFADIgyAgIgEACQgDAAgCgEg");
	this.shape_70.setTransform(290.6666,530.9365,0.9503,0.9503);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#4D4C4D").s().p("Ag8BLIgfg1QgCgDABgDQABgDACgCICLhYQAGgDAEAGIAgA1QADAHgGAEIiKBXIgEACQgEAAgDgEgAAzhLIiLBYQgEADADAFIAfA1QADAEAFgDICKhXQAFgDgDgFIggg1QAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBgBAAIgDABg");
	this.shape_71.setTransform(301.6613,523.9596,0.9503,0.9503);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#676767").s().p("Ag7BLIgfg1QgDgHAFgCICLhYQAFgEADAGIAgA1QADAGgFADIiLBYIgEABQgCAAgDgDg");
	this.shape_72.setTransform(301.6647,523.9408,0.9503,0.9503);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#4D4C4D").s().p("AgpA/Iggg1QgEgGAGgEIBnhBQADgCADABQADABACACIAfA1QACADgBADQgBADgCABIhnBCIgEACQgEAAgCgFgAAig/IhnBBQgFADADAEIAfA1QAEAFAEgDIBnhBQAEgDgDgFIgfg0QgCgDgCAAIgDABg");
	this.shape_73.setTransform(212.6251,570.8747,0.9503,0.9503);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#676767").s().p("AglBCQAAAAgBAAQgBgBAAAAQAAgBgBAAQAAgBAAAAIggg1QgDgFAFgEIBnhBQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAIAEADIAfA1QACACgBADQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABIhnBBIgEABIgBAAg");
	this.shape_74.setTransform(212.6441,570.8689,0.9503,0.9503);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#4D4C4D").s().p("AgPAvIggg0QgDgHAFgEIAzghQAHgDADAGIAgA0QABADAAADQgBADgCACIgzAhIgEABQgEAAgCgEgAAHgvIgyAhQgFADADAFIAgA0QADAEAEgCIAyghQAFgDgDgFIggg0QAAgBAAAAQgBgBAAAAQgBAAgBgBQAAAAgBAAIgDABg");
	this.shape_75.setTransform(221.9369,564.9405,0.9503,0.9503);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#676767").s().p("AgLAyQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBIggg0QgDgFAFgEIAzghQAFgCADAFIAgA0QADAFgFAEIgzAhIgEABIgBAAg");
	this.shape_76.setTransform(221.9481,564.9435,0.9503,0.9503);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#4D4C4D").s().p("AgPAvIggg0QgEgGAGgFIAzggQACgCAEABQADABABACIAgA0QABADAAADQgBADgCACIgzAhIgEABQgEAAgCgEgAAHguIgyAgQgFADADAFIAgA0QADAEAEgCIAyghQAFgDgDgFIggg0QAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAIgEACg");
	this.shape_77.setTransform(228.7201,560.6275,0.9503,0.9503);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#676767").s().p("AgLAyQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBIggg0QgDgFAFgEIAzghQAFgCADAFIAgA0QADAFgFAEIgzAhIgEABIgBAAg");
	this.shape_78.setTransform(228.7427,560.6197,0.9503,0.9503);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#4D4C4D").s().p("AgPAvIggg0QgDgHAGgEIAyghQAHgDADAGIAgA0QACADgBADQgBADgCACIgzAhIgEABQgEAAgCgEgAAHguIgyAgQgFADADAFIAgA0QADAEAEgCIAzghQAEgDgDgFIgfg0QgCgDgCAAIgEACg");
	this.shape_79.setTransform(235.457,556.3326,0.9503,0.9503);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#676767").s().p("AgOAuIggg0QgDgFAFgEIAzggQAFgEAEAGIAfA0QADAGgFADIgzAhIgDABQgDAAgCgEg");
	this.shape_80.setTransform(235.4548,556.3499,0.9503,0.9503);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#4D4C4D").s().p("AgPAvIggg0QgEgGAGgFIAzggQACgCAEABQADABABACIAgA0QABADAAADQgBADgDACIgyAhIgEABQgEAAgCgEgAAHguIgzAgQgEADADAFIAfA0QAEAEAEgCIAyghQAEgDgCgFIggg0QAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgEABg");
	this.shape_81.setTransform(242.3092,551.9799,0.9503,0.9503);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#676767").s().p("AgLAyQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBIggg0QgDgFAFgEIAzggQAFgEADAGIAgA0QADAFgFAEIgzAhIgDABIgCAAg");
	this.shape_82.setTransform(242.328,551.9707,0.9503,0.9503);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#4D4C4D").s().p("AgLAyQgDgBgBgCIggg0QgEgHAHgEIAyghQAHgDADAGIAgA0QAEAGgGAFIgzAgIgEACIgCgBgAAHgvIgyAhQgFADADAFIAgA0QACAEAFgDIAyggQAFgDgDgFIgfg0QgCgDgDAAIgDABg");
	this.shape_83.setTransform(249.0825,547.6602,0.9503,0.9503);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#676767").s().p("AgOAvIggg0QgBgCAAgDQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAIAzghQAGgEACAGIAgA0QADAFgFAEIgzAhIgEABQgCAAgCgDg");
	this.shape_84.setTransform(249.0939,547.6504,0.9503,0.9503);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#4D4C4D").s().p("AgQAvIgfg0QgEgHAHgEIAyggQAGgFAFAHIAfA0QADAHgGAEIgyAhIgEABQgEAAgDgEgAAIguIgzAgQgEADACAEIAfA0QABABAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAgBIA0ggQADgDgCgFIgfg0QgCgDgCAAIgDACg");
	this.shape_85.setTransform(255.8971,543.3344,0.9503,0.9503);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#676767").s().p("AgPAuIgfgzQgDgHAFgDIAyggQAGgEADAGIAgA0QABACAAADQgBADgCABIgzAhIgDABQgDAAgDgEg");
	this.shape_86.setTransform(255.9082,543.3309,0.9503,0.9503);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#4D4C4D").s().p("AgQAvIgfg0QgCgDABgDQABgDACgCIAzghQAGgDAEAGIAgA0QADAHgGADIgyAhIgEACQgEAAgDgEgAAHgvIgzAhQgEADADAEIAfA0QADAFAEgDIAzghQAEgDgCgEIggg0QgBgDgDAAIgDABg");
	this.shape_87.setTransform(262.6995,539.0217,0.9503,0.9503);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#676767").s().p("AgOAuIggg0QgDgGAFgDIAzghQAFgDAEAGIAfAzQADAHgFACIgyAhIgEACQgDAAgCgEg");
	this.shape_88.setTransform(262.6805,539.014,0.9503,0.9503);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#4D4C4D").s().p("AgPAuIggg0QgCgCABgEQABgDACgBIAzghQACgCAEABQADABABADIAgA0QABACAAAEQgBADgDABIgyAhIgEACQgEAAgCgFgAAHgvIgyAhQgFADADAEIAfA0QAEAFAEgDIAyghQAFgCgDgFIggg0QAAgBAAAAQgBgBAAAAQgBgBgBAAQAAAAgBAAIgDABg");
	this.shape_89.setTransform(269.4526,534.7368,0.9503,0.9503);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#676767").s().p("AgPAuIgfg0QgDgFAFgEIAzghQAEgDAEAGIAgA0QADAFgFAEIgzAhIgDABQgDAAgDgEg");
	this.shape_90.setTransform(269.4587,534.7105,0.9503,0.9503);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#4D4C4D").s().p("AgPAvIggg0QgBgDAAgDQABgDADgCIAyghQADgCADABQADABABADIAgA0QAEAGgGAFIgzAgIgEACQgEAAgCgEgAAHgvIgyAhQgEADACAFIAgAzQACAFAFgDIAzggQADgEgCgEIgfg0QgCgDgDAAIgDABg");
	this.shape_91.setTransform(276.2796,530.372,0.9503,0.9503);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#676767").s().p("AgOAuIggg0QgDgGAFgDIAzghQAFgDAEAGIAfAzQADAHgFADIgyAgIgEACQgDAAgCgEg");
	this.shape_92.setTransform(276.2586,530.3663,0.9503,0.9503);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#4D4C4D").s().p("AgPAuIgggzQgEgHAGgEIAzghQACgCAEABQADABABADIAgA0QABACAAAEQgBADgCABIgzAhIgEACQgEAAgCgFgAAHgvIgyAhQgFADADAEIAgA0QADAFAEgDIAyghQAFgCgDgFIggg0QAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAIgEABg");
	this.shape_93.setTransform(283.0765,526.0449,0.9503,0.9503);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#676767").s().p("AgLAyQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBIgggzQgDgGAFgEIAzghQAFgCADAFIAgA0QADAFgFAEIgzAhIgEABIgBAAg");
	this.shape_94.setTransform(283.0991,526.0292,0.9503,0.9503);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#4D4C4D").s().p("AgPAvIggg0QgCgDABgDQABgDACgCIAzghQAGgDAEAGIAgA0QABADAAADQgBADgDACIgyAhIgEABQgEAAgCgEgAAHgvIgzAhQgEADADAFIAfA0QADAFAFgDIAyghQAFgDgDgFIggg0QgCgDgCAAIgDABg");
	this.shape_95.setTransform(289.8362,521.75,0.9503,0.9503);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#676767").s().p("AgPAuIgfg0QgDgFAFgEIAyggQAGgEADAGIAgA0QADAFgFAEIgzAhIgDABQgDAAgDgEg");
	this.shape_96.setTransform(289.8336,521.7485,0.9503,0.9503);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#4D4C4D").s().p("AgqBAIgfg1QgEgHAGgEIBohCQACgBADAAQADABACADIAfA1QAEAGgGAEIhoBCIgEACQgDAAgDgEgAAihAIhoBCQgEAEACADIAgA1QADAFAEgDIBohBQAEgDgDgFIgfg1QgBAAAAgBQAAAAgBgBQAAAAgBAAQgBAAAAAAIgDAAg");
	this.shape_97.setTransform(299.1951,515.7838,0.9503,0.9503);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#676767").s().p("AgpA/Iggg1QgCgGAEgDIBohBQAFgEAEAGIAfA1QAEAGgGADIhnBBIgEACQgDAAgCgEg");
	this.shape_98.setTransform(299.205,515.776,0.9503,0.9503);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#4D4C4D").s().p("AghA6Iggg0QgDgHAGgDIBWg4QAGgDAEAGIAgA1QABACAAADQgBADgDACIhWA3IgEABQgEAAgCgEgAAZg6IhWA4QgFACADAEIAgA1QADAEAEgCIBWg3QAEgEgCgDIggg1QgCgDgCAAIgDABg");
	this.shape_99.setTransform(207.5435,564.2882,0.9503,0.9503);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#676767").s().p("AggA5Iggg1QgDgEAFgEIBWg3QAGgDADAFIAgA1QADAFgFADIhWA4IgEABQgDAAgCgEg");
	this.shape_100.setTransform(207.5513,564.3099,0.9503,0.9503);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#4D4C4D").s().p("AgLAyQgDgBgBgCIggg0QgCgDABgDQABgDACgCIAzghQACgBAEAAQADABABADIAgA0QADAGgFAFIgzAgIgEACIgCgBgAAHgvIgyAhQgFADADAFIAfA0QAEAEAEgDIAyggQAFgDgDgFIggg0QAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgDAAg");
	this.shape_101.setTransform(216.0577,558.8814,0.9503,0.9503);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#676767").s().p("AgOAuIggg0QgDgFAFgEIAzghQAFgDADAGIAgA0QADAFgFAEIgzAgIgEACQgCAAgCgEg");
	this.shape_102.setTransform(216.0549,558.8863,0.9503,0.9503);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#4D4C4D").s().p("AgPAvIggg0QgCgDABgDQABgDACgCIAzghQACgBAEAAQADABABADIAgA0QADAHgGAEIgyAhIgEABQgEAAgCgEgAAHgvIgyAhQgFADADAFIAfA0QADAFAFgEIAyggQAFgDgDgFIggg0QAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgDABg");
	this.shape_103.setTransform(222.8488,554.5762,0.9503,0.9503);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#676767").s().p("AgPAvIgfg0QgDgGAFgDIAzghQAFgEADAGIAgA0QADAGgFADIgzAhIgEABQgDAAgCgDg");
	this.shape_104.setTransform(222.8471,554.54,0.9503,0.9503);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#4D4C4D").s().p("AgLAzQgDgBgBgDIggg0QgBgCAAgEQABgDADgBIAyghQAHgEADAHIAgAzQAEAHgGAEIgzAhIgEABIgCAAgAAHguIgyAhQgFACADAFIAgA0QADAFAEgDIAyghQAFgDgDgEIggg0QAAgBgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgDABg");
	this.shape_105.setTransform(229.573,550.2657,0.9503,0.9503);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#676767").s().p("AgOAvIggg0QgDgGAFgDIAzghQAGgEACAGIAgA0QADAFgFAEIgzAhIgDABQgDAAgCgDg");
	this.shape_106.setTransform(229.5542,550.2624,0.9503,0.9503);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#4D4C4D").s().p("AgQAvIgfg0QgCgDABgDQABgDACgCIAzghQAGgDAEAGIAgA0QADAHgGAEIgyAhIgEABQgEAAgDgEgAAHgvIgzAhQgEADADAFIAfA0QADAFAFgEIAyggQAFgDgDgFIggg0QAAAAgBgBQAAgBgBAAQAAAAgBAAQAAgBgBAAIgDABg");
	this.shape_107.setTransform(236.4379,545.9239,0.9503,0.9503);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#676767").s().p("AgPAuIgfg0QgDgFAFgEIAzghQAEgDAEAGIAgA0QADAFgFAEIgzAhIgDABQgDAAgDgEg");
	this.shape_108.setTransform(236.4275,545.9129,0.9503,0.9503);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#4D4C4D").s().p("AgPAvIggg0QgEgGAGgFIAzggQADgCADABQADABABACIAgA0QABADAAADQgBADgDACIgyAhIgEABQgEAAgCgEgAAHguIgyAgQgFADADAFIAfA0QAEAEAEgCIAyghQAEgDgCgFIggg0QAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgEABg");
	this.shape_109.setTransform(243.1645,541.6218,0.9503,0.9503);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#676767").s().p("AgLAyQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBIggg0QgDgFAFgEIAzggQAFgEADAGIAgA0QADAFgFAEIgzAhIgDABIgCAAg");
	this.shape_110.setTransform(243.1871,541.6126,0.9503,0.9503);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#4D4C4D").s().p("AgPAvIggg0QgDgGAGgFIAyghQAHgEADAHIAgA0QACADgBADQgBADgCACIgzAhIgEABQgEAAgCgEgAAIgvIgzAhQgFADADAFIAgA0QADAEAEgCIAzghQAEgDgDgFIgfg0QgCgDgDAAIgCABg");
	this.shape_111.setTransform(249.9976,537.2654,0.9503,0.9503);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#676767").s().p("AgOAuIggg0QgDgFAFgEIAzghQAFgCAEAFIAfA0QADAFgFAEIgzAhIgDABQgDAAgCgEg");
	this.shape_112.setTransform(249.9854,537.287,0.9503,0.9503);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#4D4C4D").s().p("AgPAvIggg0QgBgDAAgDQABgDADgCIAyghQAGgDAFAGIAfA0QACADgBADQgBADgCACIgzAhIgEABQgEAAgCgEgAAHgvIgyAhQgFADADAFIAgA0QADAEAEgCIAyghQAFgDgDgFIgfg0QgCgDgDAAIgDABg");
	this.shape_113.setTransform(256.7987,532.9525,0.9503,0.9503);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#676767").s().p("AgOAuIggg0QgDgFAFgEIAzghQAGgDACAGIAgA0QADAFgFAEIgzAhIgDABQgDAAgCgEg");
	this.shape_114.setTransform(256.78,532.9634,0.9503,0.9503);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#4D4C4D").s().p("AgPAvIggg0QgEgHAGgEIAzggQAGgFAEAHIAgA0QADAHgGADIgyAhIgEACQgEAAgCgEgAAHgvIgzAiQgDADACAEIAgA0QACAEAFgCIAygiQAFgCgDgFIggg0QgBgDgCAAIgEABg");
	this.shape_115.setTransform(263.547,528.6524,0.9503,0.9503);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#676767").s().p("AgPAvIgfg0QgDgHAFgCIAzgiQAEgDAEAFIAgA0QADAHgFACIgzAiIgEABQgCAAgDgDg");
	this.shape_116.setTransform(263.5582,528.6524,0.9503,0.9503);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#4D4C4D").s().p("AgLAzQgDgBgBgDIggg0QgDgHAGgEIAyggQADgCADABQADAAABADIAgA0QACADgBADQgBADgCACIgzAhIgEABIgCAAgAAHgvIgyAhQgFADADAFIAgA0QADAEAEgCIAyghQAFgDgDgFIgfg0QgDgDgCAAIgDABg");
	this.shape_117.setTransform(270.38,524.3187,0.9503,0.9503);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#676767").s().p("AgOAuIggg0QgDgFAFgEIAzggQACgCADABQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABIAgA0QADAFgFAEIgzAhIgDABQgDAAgCgEg");
	this.shape_118.setTransform(270.3691,524.3255,0.9503,0.9503);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#4D4C4D").s().p("AgPAvIggg0QgCgDABgDQABgDACgCIAzghQACgBAEABQADAAABADIAgA0QADAHgGAEIgyAhIgEABQgEAAgCgEgAAHgvIgyAhQgFADADAFIAfA0QADAFAFgEIAyggQAFgDgDgFIggg0QAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgDABg");
	this.shape_119.setTransform(277.2052,519.9965,0.9503,0.9503);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#676767").s().p("AgPAvIgfg0QgDgGAFgDIAzghQAFgEADAGIAgA0QADAGgFADIgzAhIgEABQgDAAgCgDg");
	this.shape_120.setTransform(277.2035,519.9496,0.9503,0.9503);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#4D4C4D").s().p("AgQAvIgfg0QgCgDABgDQABgDACgCIAzghQAGgDAEAGIAgA0QADAHgGAEIgyAgIgEACQgEAAgDgEgAAHgvIgzAhQgEADADAFIAfA0QADAEAEgDIAzggQAEgEgCgEIggg0QgBgDgDAAIgDABg");
	this.shape_121.setTransform(283.9384,515.6921,0.9503,0.9503);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#676767").s().p("AgPAuIgfg0QgBgCAAgDQABgDACgBIAyghQAGgDADAGIAgAzQADAHgFACIgyAhIgEACQgDAAgDgEg");
	this.shape_122.setTransform(283.9306,515.6844,0.9503,0.9503);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#4D4C4D").s().p("AgLAzQgDgBgBgDIggg0QgCgCABgEQABgDACgBIAzghQAHgEADAHIAgAzQAEAGgGAFIgzAhIgEABIgCAAgAAHguIgyAhQgFACADAFIAgA0QADAFAEgDIAyghQAFgCgDgFIggg0QAAgBgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgDABg");
	this.shape_123.setTransform(290.7141,511.3514,0.9503,0.9503);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#676767").s().p("AgOAvIggg0QgDgGAFgDIAzghQAGgEACAGIAgA0QADAGgFADIgzAhIgDABQgDAAgCgDg");
	this.shape_124.setTransform(290.7014,511.3495,0.9503,0.9503);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#4D4C4D").s().p("AgQAvIgfg0QgEgHAGgDIAzgiQAGgDAEAGIAgA0QAEAGgHAFIgyAgIgEACQgEAAgDgEgAAHgvIgzAhQgEAEADAEIAfA0QADAEAFgDIAyghQAEgCgCgEIggg0QgBgEgCAAIgEABg");
	this.shape_125.setTransform(297.5308,507.0334,0.9503,0.9503);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#676767").s().p("AgPAvIgfg0QgDgHAFgDIAzghQAEgDAEAGIAgAzQADAHgFACIgzAhIgEACQgDAAgCgDg");
	this.shape_126.setTransform(297.542,507.0334,0.9503,0.9503);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#4D4C4D").s().p("AghA6Iggg1QgCgDABgCQABgDACgCIBXg3QAGgEAEAGIAfA1QAEAGgGAEIhWA4IgEABQgEAAgCgEgAAZg6IhWA3QgFADADAEIAgA1QADAEAEgCIBWg4QAFgDgEgDIgfg1QAAgBgBAAQAAgBgBAAQAAgBgBAAQAAAAgBAAIgDABg");
	this.shape_127.setTransform(291.6406,501.0544,0.9503,0.9503);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#676767").s().p("AggA6Iggg1QgDgFAFgDIBWg4QAGgEADAHIAfA1QAEAEgFAEIhXA3IgDABQgDAAgCgDg");
	this.shape_128.setTransform(291.6317,501.0138,0.9503,0.9503);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#4D4C4D").s().p("AgPAvIggg0QgEgGAGgFIAzghQAGgDAEAGIAgA0QABADAAADQgBADgDACIgyAhIgEABQgEAAgCgEgAAHgvIgzAhQgEADADAFIAfA0QADAFAFgDIAyghQAFgDgDgFIggg0QAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAgBAAIgDABg");
	this.shape_129.setTransform(283.1241,506.4504,0.9503,0.9503);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#676767").s().p("AgLAyQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBIggg0QgDgFAFgEIAzggQAEgEAEAGIAgA0QADAFgFAEIgzAhIgDABIgCAAg");
	this.shape_130.setTransform(283.1341,506.452,0.9503,0.9503);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#4D4C4D").s().p("AgPAvIggg0QgCgDABgDQABgDACgCIAzghQAGgDAEAGIAgA0QABADAAADQgBADgDACIgyAhIgEABQgEAAgCgEgAAHgvIgyAhQgFADADAFIAfA0QAEAEAEgCIAyghQAFgDgDgFIggg0QAAgBgBAAQAAgBAAAAQgBAAgBgBQAAAAgBAAIgDABg");
	this.shape_131.setTransform(276.3422,510.7742,0.9503,0.9503);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#676767").s().p("AgPAuIgfg0QgDgFAFgEIAzghQAFgCADAFIAgA0QADAFgFAEIgzAhIgDABQgDAAgDgEg");
	this.shape_132.setTransform(276.3483,510.7849,0.9503,0.9503);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#4D4C4D").s().p("AgPAvIggg0QgBgDAAgDQABgDACgCIAzghQAGgDAEAGIAgA0QABADAAADQgBADgCACIgzAhIgEABQgEAAgCgEgAAHgvIgyAhQgFADADAFIAgA0QACAEAFgCIAyghQAFgDgDgFIggg0QgBgDgDAAIgDABg");
	this.shape_133.setTransform(269.6288,515.0396,0.9503,0.9503);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#676767").s().p("AgOAuIggg0QgDgFAFgEIAzghQAFgCAEAFIAfA0QADAGgFADIgyAhIgEABQgDAAgCgEg");
	this.shape_134.setTransform(269.6176,515.0612,0.9503,0.9503);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#4D4C4D").s().p("AgPAuIggg0QgCgCABgEQABgDACgBIAzghQADgCADABQADABABADIAgA0QABACAAAEQgBADgCABIgzAhIgEACQgEAAgCgFgAAHgvIgyAhQgFACADAFIAgA0QADAFAEgDIAyghQAFgCgDgFIggg0QAAgBAAAAQgBgBAAAAQgBgBgBAAQAAAAgBAAIgDABg");
	this.shape_135.setTransform(262.7531,519.4372,0.9503,0.9503);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#676767").s().p("AgLAxQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBIggg0QgDgFAFgEIAzghQAFgCADAFIAgA0QADAFgFAEIgzAhIgCABIgDgBg");
	this.shape_136.setTransform(262.7592,519.414,0.9503,0.9503);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#4D4C4D").s().p("AgQAvIgfg0QgCgDABgDQABgDACgCIAzghQAGgDAEAGIAgA0QADAHgGAEIgyAgIgFACQgDAAgDgEgAAHgvIgzAhQgEADADAFIAfA0QADAEAEgDIAzggQAEgDgCgFIggg0QgCgDgCAAIgDABg");
	this.shape_137.setTransform(256.0138,523.7221,0.9503,0.9503);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#676767").s().p("AgPAuIgfg0QgDgGAFgDIAyghQAGgDADAGIAgAzQADAGgFAEIgzAgIgEACQgCAAgDgEg");
	this.shape_138.setTransform(256.0034,523.7143,0.9503,0.9503);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#4D4C4D").s().p("AgLAzQgDgBgCgDIgfg0QgCgDABgDQABgDACgCIAzghQAGgEAEAHIAfA0QAFAGgHAFIgzAhIgEABIgBAAgAAHgvIgzAhQgEADADAFIAfA0QADAFAEgEIAzggQAFgDgEgFIgfg0QgCgCgCAAIgDAAg");
	this.shape_139.setTransform(249.2079,528.0428,0.9503,0.9503);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#676767").s().p("AgOAuIggg0QgDgFAFgEIAzghQAGgDACAGIAgA0QADAFgFAEIgzAhIgDABQgDAAgCgEg");
	this.shape_140.setTransform(249.1777,528.0478,0.9503,0.9503);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#4D4C4D").s().p("AgLAzQgDgBgBgDIggg0QgBgCAAgEQABgDADgBIAyghQAHgEADAHIAgAzQACADgBAEQgBADgCABIgzAhIgDABIgDAAgAAHguIgyAhQgFACADAFIAgA0QACAEAFgCIAyghQAFgDgDgEIgfg0QgCgEgDAAIgDACg");
	this.shape_141.setTransform(242.4019,532.3559,0.9503,0.9503);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#676767").s().p("AgOAuIggg0QgDgFAFgEIAzghQAFgDAEAGIAfA0QADAGgFADIgzAhIgDABQgDAAgCgEg");
	this.shape_142.setTransform(242.3919,532.3713,0.9503,0.9503);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#4D4C4D").s().p("AgLAyQgDgBgBgCIggg0QgEgHAGgDIAzghQACgCAEABQADAAABADIAgA0QADAGgFAFIgzAhIgEABIgCgBgAAHgvIgyAhQgFADADAFIAgAzQADAFAEgCIAygiQAEgCgCgFIggg0QAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAIgEABg");
	this.shape_143.setTransform(235.6095,536.6823,0.9503,0.9503);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#676767").s().p("AgLAyQAAgBgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIgggzQgDgGAFgEIAzggQAFgEADAGIAgA0QADAGgFADIgzAhIgEABIgBAAg");
	this.shape_144.setTransform(235.6399,536.6711,0.9503,0.9503);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#4D4C4D").s().p("AgPAvIggg0QgBgDAAgDQABgDADgCIAyghQAHgDAEAGIAfA0QAEAGgGAFIgzAhIgEABQgEAAgCgEgAAHgvIgyAhQgFADADAFIAgA0QACAEAFgDIAyggQAFgDgDgFIgfg0QgCgDgDAAIgDABg");
	this.shape_145.setTransform(228.8128,541.0299,0.9503,0.9503);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#676767").s().p("AgOAuIggg0QgCgCABgDQABgDACgBIAyghQAGgDAEAGIAfA0QADAGgFADIgyAgIgEACQgDAAgCgEg");
	this.shape_146.setTransform(228.814,541.0096,0.9503,0.9503);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#4D4C4D").s().p("AgPAuIgggzQgEgHAGgEIAzghQACgCAEABQADABABADIAgA0QABACAAAEQgBADgDABIgyAhIgEACQgEAAgCgFgAAHgvIgyAhQgFADADAEIAfA0QADAFAFgDIAyghQAFgCgDgFIggg0QAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAgBAAIgDABg");
	this.shape_147.setTransform(221.9731,545.3801,0.9503,0.9503);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#676767").s().p("AgLAxQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBIggg0QgDgFAFgEIAzghQAFgCADAFIAgA0QADAFgFAEIgzAhIgCABIgDgBg");
	this.shape_148.setTransform(221.9919,545.3569,0.9503,0.9503);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#4D4C4D").s().p("AgPAvIggg0QgDgHAFgEIAzghQADgCADABQADABABADIAgA0QACACgBAEQgBADgCABIgzAhIgFACQgDAAgCgEgAAHgvIgyAhQgFACADAFIAgA0QADAFAEgDIAyghQAFgDgDgEIggg0QgBgDgDAAIgDABg");
	this.shape_149.setTransform(215.26,549.6628,0.9503,0.9503);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#676767").s().p("AgLAyQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBIggg0QgDgGAFgDIAzggQACgCADABQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABIAgA0QABACAAACQgBAEgCABIgzAgIgDACIgCAAg");
	this.shape_150.setTransform(215.2374,549.6538,0.9503,0.9503);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#4D4C4D").s().p("AgPAvIggg0QgDgHAGgEIAyghQAHgDAEAGIAfA0QACADgBADQgBADgCACIgzAhIgEABQgEAAgCgEgAAHgvIgyAhQgFADADAFIAgA0QADAFAEgDIAzghQAEgDgDgFIgfg0QgCgDgDAAIgDABg");
	this.shape_151.setTransform(208.47,553.9538,0.9503,0.9503);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#676767").s().p("AgOAuIggg0QgDgFAFgEIAzghQAFgCAEAFIAfA0QADAGgFADIgyAhIgEABQgDAAgCgEg");
	this.shape_152.setTransform(208.4666,553.9755,0.9503,0.9503);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#4D4C4D").s().p("AgLAzQgDgBgBgDIggg0QgEgHAGgEIAzggQADgDADACQADABABACIAgA0QADAGgFAFIgzAhIgEABIgCAAgAAHguIgyAgQgFADADAEIAfA0QAEAFAEgDIAyggQAEgDgCgFIggg0QAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBgBAAIgDACg");
	this.shape_153.setTransform(201.6482,558.3014,0.9503,0.9503);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#676767").s().p("AgOAuIggg0QgDgGAFgDIAzghQAFgDADAFIAgA0QADAGgFADIgzAhIgEACQgCAAgCgEg");
	this.shape_154.setTransform(201.6595,558.3127,0.9503,0.9503);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#4D4C4D").s().p("AgXAhIgQgaQgEgHAGgDIAzghQADgCADABQADABABADIAQAbQACACgBAEQgBACgCABIgzAhIgEACQgEAAgCgFgAAPgiIgyAhQgFACADAEIAQAbQADAFAEgDIAzghQAEgBgDgFIgQgbQAAgBgBAAQAAgBgBAAQAAgBgBAAQAAAAgBAAIgDABg");
	this.shape_155.setTransform(289.7048,493.9695,0.9503,0.9503);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#676767").s().p("AgWAhIgQgbQgDgFAFgDIAzghQAFgCADAFIAQAbQAEAFgGADIgyAhIgEABQgDAAgCgEg");
	this.shape_156.setTransform(289.7236,493.9539,0.9503,0.9503);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#4D4C4D").s().p("AgXAhIgQgaQgCgDABgDQABgCACgCIAzghQAGgDAEAGIAQAbQACACgBAEQgBACgCABIgzAhIgEACQgEAAgCgFgAAPgiIgzAhQgEACADAFIAQAaQADAFAEgDIAyghQAFgBgDgFIgQgbQgCgCgCAAIgDAAg");
	this.shape_157.setTransform(282.6101,498.4887,0.9503,0.9503);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#676767").s().p("AgTAlQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIgQgaQgEgGAGgCIAzghQAFgEADAGIAQAbQADAFgFADIgyAhIgEABIgCAAg");
	this.shape_158.setTransform(282.6002,498.4619,0.9503,0.9503);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#4D4C4D").s().p("AgSAlQgDgBgCgCIgQgbQgCgDABgDQABgCACgCIAzghQACgBAEAAQADABABADIAQAbQACACgBAEQgBACgCABIgzAhIgDACIgCgBgAAPgiIgyAhQgFACADAFIAQAaQADAFAEgDIAzghQAEgBgDgFIgQgbQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgDAAg");
	this.shape_159.setTransform(275.6057,503.0046,0.9503,0.9503);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#676767").s().p("AgXAhIgPgaQgCgDABgCQAAgBAAgBQAAAAABAAQAAAAAAgBQABAAAAAAIAzghQAFgEAEAGIAQAbQADAFgFADIgzAhIgDABQgDAAgDgEg");
	this.shape_160.setTransform(275.6268,502.9835,0.9503,0.9503);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#4D4C4D").s().p("AgXAiIgQgbQgCgDABgDQABgCACgCIAzghQAHgEADAHIAQAbQAEAGgGAEIgzAhIgEABQgDAAgDgEgAAPgiIgyAhQgFACADAFIAQAbQADAFAEgEIAzggQAEgCgDgFIgQgbQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgDABg");
	this.shape_161.setTransform(268.4864,507.5214,0.9503,0.9503);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#676767").s().p("AgWAhIgQgbQgEgFAGgDIAzghQAFgDADAGIAQAbQADAFgFADIgyAgIgEACQgDAAgCgEg");
	this.shape_162.setTransform(268.4884,507.5343,0.9503,0.9503);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#4D4C4D").s().p("AgSAlQgDgBgCgCIgQgbQgCgDABgDQABgCACgCIAzghQADgBADABQADAAABADIAQAbQAEAGgGAEIgzAgIgEACIgBgBgAAPgiIgyAhQgFACADAFIAQAbQACAEAFgDIAzggQAEgCgDgFIgQgbQAAAAgBgBQAAgBgBAAQAAAAgBAAQAAgBgBAAIgDABg");
	this.shape_163.setTransform(261.5493,511.948,0.9503,0.9503);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#676767").s().p("AgWAhIgQgbQgDgFAFgDIAzghQAFgCADAFIAQAaQAEAGgGADIgyAgIgEACQgDAAgCgEg");
	this.shape_164.setTransform(261.5475,511.9638,0.9503,0.9503);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#4D4C4D").s().p("AgXAhIgQgaQgDgHAFgDIAzghQADgCADABQADABABADIAQAbQACACgBAEQAAACgDABIgzAhIgEACQgEAAgCgFgAAPgiIgyAhQgFABADAFIAQAbQADAFAEgDIAzghQAEgBgDgFIgPgbQgCgDgDAAIgDABg");
	this.shape_165.setTransform(254.413,516.4945,0.9503,0.9503);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#676767").s().p("AgWAhIgQgaQgDgGAFgDIAyggQADgCADABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABIAQAbQAEAFgGADIgzAhIgDAAQgDAAgCgDg");
	this.shape_166.setTransform(254.4242,516.4749,0.9503,0.9503);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#4D4C4D").s().p("AgXAiIgQgbQgCgCABgEQABgCACgBIAzghQAGgEAEAGIAQAbQACADgBADQgBACgCABIgzAhIgEACQgDAAgDgEgAAPgiIgzAiQgEABADAFIAQAbQADAEAEgCIAzgiQAEgBgDgFIgQgbQgBgDgDAAIgDABg");
	this.shape_167.setTransform(247.4634,520.9076,0.9503,0.9503);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#676767").s().p("AgWAhIgQgaQgDgHAFgBIAyghQAGgEADAGIAQAbQADAFgFADIgyAhIgEABQgDAAgCgEg");
	this.shape_168.setTransform(247.4634,520.9042,0.9503,0.9503);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#4D4C4D").s().p("AgSAlQgDgBgCgCIgQgbQgCgDABgDQABgCACgCIAzghQACgBAEABQADAAABADIAQAbQAEAGgGAEIgzAgIgEACIgBgBgAAPgiIgyAhQgFACADAFIAQAbQACAEAFgDIAzghQAEgBgDgFIgQgbQAAAAgBgBQAAgBgBAAQAAAAgBAAQAAgBgBAAIgDABg");
	this.shape_169.setTransform(240.3579,525.442,0.9503,0.9503);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#676767").s().p("AgWAhIgQgbQgDgFAFgDIAzghQAEgDAEAGIAQAaQAEAGgGADIgyAgIgEACQgDAAgCgEg");
	this.shape_170.setTransform(240.3562,525.4358,0.9503,0.9503);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#4D4C4D").s().p("AgXAiIgQgbQgCgDABgDQABgCACgCIAzghQAGgDAEAGIAQAbQAEAGgGAEIgzAgIgEACQgEAAgCgEgAAPgiIgyAhQgFACADAFIAQAaQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABgBIAzghQAEgBgDgFIgQgbQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgDABg");
	this.shape_171.setTransform(233.4208,529.8545,0.9503,0.9503);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#676767").s().p("AgWAiIgQgbQgDgGAFgCIAzghQAFgEADAGIAQAbQAEAFgGADIgyAhIgEABQgDAAgCgDg");
	this.shape_172.setTransform(233.4103,529.8325,0.9503,0.9503);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#4D4C4D").s().p("AgXAiIgQgbQgEgGAGgEIAzggQADgCADABQADABABACIAQAbQACADgBADQgBACgCACIgzAhIgEABQgDAAgDgEgAAPgiIgyAhQgFACADAFIAQAbQADAFAEgDIAzghQAEgCgDgFIgQgbQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgDABg");
	this.shape_173.setTransform(226.2731,534.3965,0.9503,0.9503);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#676767").s().p("AgWAhIgQgbQgDgFAFgDIAzggQAFgEADAGIAQAbQAEAFgGADIgyAhIgEABQgDAAgCgEg");
	this.shape_174.setTransform(226.2919,534.3873,0.9503,0.9503);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#4D4C4D").s().p("AgXAiIgQgbQgCgDABgDQABgCACgCIAzghQACgBAEABQADABABACIAQAbQACADgBADQgBACgCACIgzAhIgEABQgDAAgDgEgAAPgiIgyAhQgFACADAFIAQAbQADAEAEgDIAzggQAEgCgDgFIgQgbQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgDABg");
	this.shape_175.setTransform(219.3487,538.8122,0.9503,0.9503);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#676767").s().p("AgWAhIgQgbQgDgFAFgDIAzghQAFgCADAFIAQAbQAEAFgGADIgyAhIgEABQgDAAgCgEg");
	this.shape_176.setTransform(219.3548,538.8074,0.9503,0.9503);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#4D4C4D").s().p("AgXAhIgQgaQgEgHAGgDIAzghQADgCADABQACABACADIAQAbQAEAGgGADIgzAhIgEACQgEAAgCgFgAAPgiIgzAhQgEACADAEIAQAbQADAFAEgDIAyghQAFgBgDgFIgQgbQgCgDgCAAIgDABg");
	this.shape_177.setTransform(212.2315,543.3401,0.9503,0.9503);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#676767").s().p("AgTAkQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIgQgaQgEgHAGgBIAygiQADgBADAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAAAIAQAbQADAGgFACIgyAhIgEACIgCgBg");
	this.shape_178.setTransform(212.2315,543.3344,0.9503,0.9503);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#4D4C4D").s().p("AgXAhIgQgaQgEgGAGgEIAzghQADgCADABQADABABADIAQAbQACACgBAEQAAACgDABIgzAhIgEACQgEAAgCgFgAAPgiIgyAhQgFACADAEIAQAbQADAFAEgDIAzghQAEgBgDgFIgQgbQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBgBAAIgDABg");
	this.shape_179.setTransform(205.2718,547.7589,0.9503,0.9503);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#676767").s().p("AgTAkQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIgQgaQgEgGAGgCIAzghQAEgEAEAGIAQAbQADAFgFADIgyAhIgDABIgDgBg");
	this.shape_180.setTransform(205.2944,547.7313,0.9503,0.9503);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#4D4C4D").s().p("AgTAmQgDgBgBgDIgQgbQgCgCABgEQABgCACgBIAzghQAGgEAEAHIAQAaQACADgBADQgBACgCACIgzAhIgEABIgCAAgAAPghIgzAhQgEABADAFIAQAbQADAEAEgCIAyghQAFgCgDgEIgQgbQgCgDgCAAIgDABg");
	this.shape_181.setTransform(198.1898,552.2613,0.9503,0.9503);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#676767").s().p("AgWAiIgQgbQgCgCABgDQABgCACgBIAyghQAGgEADAGIAQAbQADAFgFADIgzAhIgDABQgDAAgCgDg");
	this.shape_182.setTransform(198.1822,552.2593,0.9503,0.9503);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#C6C5C5").s().p("AmIIlQgLgDgFgKIjvmQQgFgJACgLQACgLAJgFIP2qFQAIgGALADQAKADAFAJIDvGRQAFAKgCAKQgCALgJAFIv2KFQgGAEgGAAIgGgBg");
	this.shape_183.setTransform(254.7407,541.3548,0.9503,0.9503);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#A1A1A1").s().p("Ag8BLIgfg1QgCgDABgDQABgDACgCICLhYQAGgDAEAGIAgA1QADAHgGAEIiKBYIgEABQgEAAgDgEgAAzhLIiLBYQgEADADAFIAfA1QADAEAEgCICLhYQAEgDgCgFIggg1QgBgDgDAAIgDABg");
	this.shape_184.setTransform(218.5652,576.873,0.9503,0.9503);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#E1E1E1").s().p("Ag6BKIggg1QgDgFAFgEICLhYQAFgDAEAGIAfA1QADAGgFADIiLBYIgDABQgDAAgCgEg");
	this.shape_185.setTransform(218.5461,576.862,0.9503,0.9503);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#A1A1A1").s().p("AgQAvIgfg0QgCgDABgDQABgDACgCIAzghQAGgDAEAGIAgA0QADAHgGAEIgyAgIgFACQgDAAgDgEgAAHgvIgzAhQgEADADAFIAfA0QADAEAEgDIAzggQAFgDgDgFIggg0QgCgDgCAAIgDABg");
	this.shape_186.setTransform(229.5552,569.8755,0.9503,0.9503);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#E1E1E1").s().p("AgPAuIgfg0QgDgGAFgDIAyghQAGgDADAGIAgAzQADAGgFAEIgzAgIgEACQgCAAgDgEg");
	this.shape_187.setTransform(229.5447,569.8678,0.9503,0.9503);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#A1A1A1").s().p("AgQAvIgfg0QgCgDABgDQABgDACgCIAzghQAGgDAEAGIAgA0QADAHgGAEIgyAgIgEACQgEAAgDgEgAAHgvIgzAhQgEADADAFIAfA0QABAAAAABQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAABgBQAAAAABAAQAAAAAAgBIAzggQAFgDgDgFIggg0QgBgDgDAAIgDABg");
	this.shape_188.setTransform(236.3361,565.5516,0.9503,0.9503);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#E1E1E1").s().p("AgPAuIgfg0QgDgGAFgDIAyghQAGgDADAGIAgA0QADAFgFAEIgzAgIgEACQgCAAgDgEg");
	this.shape_189.setTransform(236.3395,565.5438,0.9503,0.9503);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#A1A1A1").s().p("AgPAvIggg0QgCgDABgDQABgDACgCIAzghQAHgDADAGIAgA0QADAGgFAFIgzAhIgEABQgEAAgCgEgAAHgvIgyAhQgFADADAFIAgA0QACAEAFgDIAyggQAFgDgDgFIggg0QAAAAgBgBQAAgBgBAAQAAAAgBAAQAAgBgBAAIgDABg");
	this.shape_190.setTransform(243.0531,561.2847,0.9503,0.9503);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#E1E1E1").s().p("AgOAuIggg0QgDgFAFgEIAzghQAFgDADAGIAgA0QADAFgFAEIgzAhIgEABQgDAAgBgEg");
	this.shape_191.setTransform(243.048,561.2768,0.9503,0.9503);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#A1A1A1").s().p("AgQAvIgfg0QgCgDABgDQABgDACgCIAzghQAGgDAEAGIAgA0QADAGgGAFIgyAhIgEABQgEAAgDgEgAAHgvIgzAhQgEADADAFIAfA0QADAFAEgEIAzggQAEgDgCgFIggg0QgBgDgDAAIgDABg");
	this.shape_192.setTransform(249.9256,556.9132,0.9503,0.9503);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#E1E1E1").s().p("AgOAuIggg0QgDgFAFgEIAzghQAFgDAEAGIAfA0QADAGgFADIgzAhIgDABQgDAAgCgEg");
	this.shape_193.setTransform(249.9066,556.9053,0.9503,0.9503);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#A1A1A1").s().p("AgPAvIggg0QgEgGAGgFIAzggQACgCAEABQADABABACIAgA0QABADAAADQgBADgDACIgyAhIgEABQgEAAgCgEgAAHguIgyAgQgFADADAFIAfA0QADAFAFgDIAyghQAFgDgDgFIggg0QAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAIgEACg");
	this.shape_194.setTransform(256.6663,552.614,0.9503,0.9503);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#E1E1E1").s().p("AgPAuIgfg0QgDgFAFgEIAzghQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAAAIAEADIAgA0QADAGgFADIgzAhIgDACQgEAAgCgEg");
	this.shape_195.setTransform(256.685,552.6239,0.9503,0.9503);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#A1A1A1").s().p("AgLAzQgDgBgBgDIggg0QgBgDAAgDQABgDADgCIAyghQAHgEADAHIAgA0QACADgBADQgBADgCACIgzAhIgFABIgBAAgAAHgvIgyAhQgFADADAFIAgA0QADAEAEgCIAyghQAFgDgDgFIgfg0QgDgCgCAAIgDAAg");
	this.shape_196.setTransform(263.5062,548.2527,0.9503,0.9503);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#E1E1E1").s().p("AgOAuIggg0QgDgFAFgEIAzghQACgBADABQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABIAgA0QADAFgFAEIgzAhIgDABQgDAAgCgEg");
	this.shape_197.setTransform(263.4874,548.2652,0.9503,0.9503);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#A1A1A1").s().p("AgLAzQgDgBgBgDIggg0QgCgDABgDQABgDADgCIAyghQAHgEADAHIAgA0QACADgBADQgBADgCACIgzAhIgEABIgCAAgAAHgvIgyAhQgFADADAFIAgA0QADAEAEgCIAyghQAFgDgDgFIggg0QAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgDAAg");
	this.shape_198.setTransform(270.291,543.9288,0.9503,0.9503);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#E1E1E1").s().p("AgOAuIggg0QgDgFAFgEIAzghQAGgDACAGIAgA0QADAFgFAEIgzAhIgEABQgDAAgBgEg");
	this.shape_199.setTransform(270.2784,543.9445,0.9503,0.9503);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#A1A1A1").s().p("AgPAvIggg0QgDgHAGgEIAyghQAGgDAFAGIAfA0QACACgBAEQgBADgCACIgzAgIgEACQgEAAgCgEgAAHguIgyAgQgEAEACAEIAgA0QAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABgBIAzghQAEgDgDgEIgfgzQgCgEgDAAIgDACg");
	this.shape_200.setTransform(277.0416,539.6443,0.9503,0.9503);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#E1E1E1").s().p("AgOAuIggg0QgDgGAFgDIAzghQAFgDAEAFIAfA0QADAHgFACIgzAhIgDACQgDAAgCgEg");
	this.shape_201.setTransform(277.0382,539.6556,0.9503,0.9503);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#A1A1A1").s().p("AgPAuIggg0QgBgCAAgEQABgDACgBIAzghQADgCADABQADABABADIAgA0QABACAAAEQgBADgCABIgzAhIgFACQgDAAgCgFgAAHgvIgyAhQgFACADAFIAgA0QADAFAEgDIAyghQAFgCgDgFIggg0QAAgBgBAAQAAgBgBAAQAAgBgBAAQAAAAgBAAIgDABg");
	this.shape_202.setTransform(283.8679,535.3229,0.9503,0.9503);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#E1E1E1").s().p("AgOAuIggg0QgDgFAFgEIAzghQAFgCADAFIAgA0QADAFgFAEIgzAhIgEABQgDAAgBgEg");
	this.shape_203.setTransform(283.8679,535.3073,0.9503,0.9503);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#A1A1A1").s().p("AgQAvIgfg0QgCgDABgDQABgDACgCIAzghQAGgDAEAGIAgA0QADAHgGAEIgyAhIgEABQgEAAgDgEgAAHgvIgzAhQgEADADAFIAfA0QADAEAEgDIAzggQAFgDgDgFIggg0QgBgDgDAAIgDABg");
	this.shape_204.setTransform(290.6943,530.9726,0.9503,0.9503);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#E1E1E1").s().p("AgOAuIggg0QgDgGAFgDIAzghQAFgDAEAGIAfAzQADAHgFADIgyAgIgEACQgDAAgCgEg");
	this.shape_205.setTransform(290.6754,530.9523,0.9503,0.9503);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#A1A1A1").s().p("Ag8BLIgfg1QgCgDABgDQABgDACgCICLhYQAGgDAEAGIAgA1QADAHgGAEIiKBXIgEACQgEAAgDgEgAAzhLIiLBYQgEADADAFIAfA1QADAEAFgDICKhXQAFgDgDgFIggg1QAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBgBAAIgDABg");
	this.shape_206.setTransform(301.6704,523.9752,0.9503,0.9503);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#E1E1E1").s().p("Ag7BLIgfg1QgDgHAFgCICLhYQAFgEADAGIAgA1QADAGgFADIiLBYIgEABQgCAAgDgDg");
	this.shape_207.setTransform(301.6738,523.9563,0.9503,0.9503);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#A1A1A1").s().p("AgXAhIgQgaQgEgHAGgDIAzghQADgCADABQADABABADIAQAbQACACgBAEQgBACgCABIgzAhIgEACQgEAAgCgFgAAPgiIgyAhQgFACADAEIAQAbQADAFAEgDIAzghQAEgBgDgFIgQgbQAAgBgBAAQAAgBgBAAQAAgBgBAAQAAAAgBAAIgDABg");
	this.shape_208.setTransform(289.7136,493.9841,0.9503,0.9503);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#E1E1E1").s().p("AgWAhIgQgbQgDgFAFgDIAzghQAFgCADAFIAQAbQAEAFgGADIgyAhIgEABQgDAAgCgEg");
	this.shape_209.setTransform(289.7323,493.9685,0.9503,0.9503);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#A1A1A1").s().p("AgXAhIgQgaQgCgDABgDQABgCACgCIAzghQAGgDAEAGIAQAbQACACgBAEQgBACgCABIgzAhIgEACQgEAAgCgFgAAPgiIgzAhQgEACADAFIAQAaQADAFAEgDIAyghQAFgBgDgFIgQgbQgCgCgCAAIgDAAg");
	this.shape_210.setTransform(282.6186,498.5034,0.9503,0.9503);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#E1E1E1").s().p("AgTAlQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIgQgaQgEgGAGgCIAzghQAFgEADAGIAQAbQADAFgFADIgyAhIgEABIgCAAg");
	this.shape_211.setTransform(282.6087,498.4766,0.9503,0.9503);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#A1A1A1").s().p("AgSAlQgDgBgCgCIgQgbQgCgDABgDQABgCACgCIAzghQACgBAEAAQADABABADIAQAbQACACgBAEQgBACgCABIgzAhIgDACIgCgBgAAPgiIgyAhQgFACADAFIAQAaQADAFAEgDIAzghQAEgBgDgFIgQgbQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgDAAg");
	this.shape_212.setTransform(275.614,503.0194,0.9503,0.9503);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#E1E1E1").s().p("AgXAhIgPgaQgCgDABgCQAAgBAAgBQAAAAABAAQAAAAAAgBQABAAAAAAIAzghQAFgEAEAGIAQAbQADAFgFADIgzAhIgDABQgDAAgDgEg");
	this.shape_213.setTransform(275.6351,502.9984,0.9503,0.9503);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#A1A1A1").s().p("AgXAiIgQgbQgCgDABgDQABgCACgCIAzghQAHgEADAHIAQAbQAEAGgGAEIgzAhIgEABQgDAAgDgEgAAPgiIgyAhQgFACADAFIAQAbQADAFAEgEIAzggQAEgCgDgFIgQgbQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgDABg");
	this.shape_214.setTransform(268.4944,507.5364,0.9503,0.9503);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#E1E1E1").s().p("AgWAhIgQgbQgEgFAGgDIAzghQAFgDADAGIAQAbQADAFgFADIgyAgIgEACQgDAAgCgEg");
	this.shape_215.setTransform(268.4965,507.5493,0.9503,0.9503);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#A1A1A1").s().p("AgSAlQgDgBgCgCIgQgbQgCgDABgDQABgCACgCIAzghQADgBADABQADAAABADIAQAbQAEAGgGAEIgzAgIgEACIgBgBgAAPgiIgyAhQgFACADAFIAQAbQACAEAFgDIAzggQAEgCgDgFIgQgbQAAAAgBgBQAAgBgBAAQAAAAgBAAQAAgBgBAAIgDABg");
	this.shape_216.setTransform(261.5571,511.9631,0.9503,0.9503);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#E1E1E1").s().p("AgWAhIgQgbQgDgFAFgDIAzghQAFgCADAFIAQAaQAEAGgGADIgyAgIgEACQgDAAgCgEg");
	this.shape_217.setTransform(261.5554,511.9789,0.9503,0.9503);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#A1A1A1").s().p("AgXAhIgQgaQgDgHAFgDIAzghQADgCADABQADABABADIAQAbQACACgBAEQAAACgDABIgzAhIgEACQgEAAgCgFgAAPgiIgyAhQgFABADAFIAQAbQADAFAEgDIAzghQAEgBgDgFIgPgbQgCgDgDAAIgDABg");
	this.shape_218.setTransform(254.4206,516.5098,0.9503,0.9503);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#E1E1E1").s().p("AgWAhIgQgaQgDgGAFgDIAyggQADgCADABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABIAQAbQAEAFgGADIgzAhIgDAAQgDAAgCgDg");
	this.shape_219.setTransform(254.4318,516.4902,0.9503,0.9503);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#A1A1A1").s().p("AgXAiIgQgbQgCgCABgEQABgCACgBIAzghQAGgEAEAGIAQAbQACADgBADQgBACgCABIgzAhIgEACQgDAAgDgEgAAPgiIgzAiQgEABADAFIAQAbQADAEAEgCIAzgiQAEgBgDgFIgQgbQgBgDgDAAIgDABg");
	this.shape_220.setTransform(247.4708,520.923,0.9503,0.9503);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#E1E1E1").s().p("AgWAhIgQgaQgDgHAFgBIAyghQAGgEADAGIAQAbQADAFgFADIgyAhIgEABQgDAAgCgEg");
	this.shape_221.setTransform(247.4708,520.9196,0.9503,0.9503);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#A1A1A1").s().p("AgSAlQgDgBgCgCIgQgbQgCgDABgDQABgCACgCIAzghQACgBAEABQADAAABADIAQAbQAEAGgGAEIgzAgIgEACIgBgBgAAPgiIgyAhQgFACADAFIAQAbQACAEAFgDIAzghQAEgBgDgFIgQgbQAAAAgBgBQAAgBgBAAQAAAAgBAAQAAgBgBAAIgDABg");
	this.shape_222.setTransform(240.365,525.4576,0.9503,0.9503);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#E1E1E1").s().p("AgWAhIgQgbQgDgFAFgDIAzghQAEgDAEAGIAQAaQAEAGgGADIgyAgIgEACQgDAAgCgEg");
	this.shape_223.setTransform(240.3633,525.4514,0.9503,0.9503);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#A1A1A1").s().p("AgXAiIgQgbQgCgDABgDQABgCACgCIAzghQAGgDAEAGIAQAbQAEAGgGAEIgzAgIgEACQgEAAgCgEgAAPgiIgyAhQgFACADAFIAQAaQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABgBIAzghQAEgBgDgFIgQgbQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgDABg");
	this.shape_224.setTransform(233.4277,529.8702,0.9503,0.9503);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#E1E1E1").s().p("AgWAiIgQgbQgDgGAFgCIAzghQAFgEADAGIAQAbQAEAFgGADIgyAhIgEABQgDAAgCgDg");
	this.shape_225.setTransform(233.4173,529.8483,0.9503,0.9503);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#A1A1A1").s().p("AgXAiIgQgbQgEgGAGgEIAzggQADgCADABQADABABACIAQAbQACADgBADQgBACgCACIgzAhIgEABQgDAAgDgEgAAPgiIgyAhQgFACADAFIAQAbQADAFAEgDIAzghQAEgCgDgFIgQgbQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgDABg");
	this.shape_226.setTransform(226.2799,534.4124,0.9503,0.9503);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#E1E1E1").s().p("AgWAhIgQgbQgDgFAFgDIAzggQAFgEADAGIAQAbQAEAFgGADIgyAhIgEABQgDAAgCgEg");
	this.shape_227.setTransform(226.2986,534.4032,0.9503,0.9503);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#A1A1A1").s().p("AgXAiIgQgbQgCgDABgDQABgCACgCIAzghQACgBAEABQADABABACIAQAbQACADgBADQgBACgCACIgzAhIgEABQgDAAgDgEgAAPgiIgyAhQgFACADAFIAQAbQADAEAEgDIAzggQAEgCgDgFIgQgbQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgDABg");
	this.shape_228.setTransform(219.3552,538.8282,0.9503,0.9503);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#E1E1E1").s().p("AgWAhIgQgbQgDgFAFgDIAzghQAFgCADAFIAQAbQAEAFgGADIgyAhIgEABQgDAAgCgEg");
	this.shape_229.setTransform(219.3613,538.8235,0.9503,0.9503);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#A1A1A1").s().p("AgXAhIgQgaQgEgHAGgDIAzghQADgCADABQACABACADIAQAbQAEAGgGADIgzAhIgEACQgEAAgCgFgAAPgiIgzAhQgEACADAEIAQAbQADAFAEgDIAyghQAFgBgDgFIgQgbQgCgDgCAAIgDABg");
	this.shape_230.setTransform(212.2377,543.3563,0.9503,0.9503);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#E1E1E1").s().p("AgTAkQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIgQgaQgEgHAGgBIAygiQADgBADAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAAAIAQAbQADAGgFACIgyAhIgEACIgCgBg");
	this.shape_231.setTransform(212.2377,543.3505,0.9503,0.9503);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#A1A1A1").s().p("AgXAhIgQgaQgEgGAGgEIAzghQADgCADABQADABABADIAQAbQACACgBAEQAAACgDABIgzAhIgEACQgEAAgCgFgAAPgiIgyAhQgFACADAEIAQAbQADAFAEgDIAzghQAEgBgDgFIgQgbQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBgBAAIgDABg");
	this.shape_232.setTransform(205.2779,547.7752,0.9503,0.9503);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#E1E1E1").s().p("AgTAkQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIgQgaQgEgGAGgCIAzghQAEgEAEAGIAQAbQADAFgFADIgyAhIgDABIgDgBg");
	this.shape_233.setTransform(205.3004,547.7476,0.9503,0.9503);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#A1A1A1").s().p("AgTAmQgDgBgBgDIgQgbQgCgCABgEQABgCACgBIAzghQAGgEAEAHIAQAaQACADgBADQgBACgCACIgzAhIgEABIgCAAgAAPghIgzAhQgEABADAFIAQAbQADAEAEgCIAyghQAFgCgDgEIgQgbQgCgDgCAAIgDABg");
	this.shape_234.setTransform(198.1956,552.2777,0.9503,0.9503);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#E1E1E1").s().p("AgWAiIgQgbQgCgCABgDQABgCACgBIAyghQAGgEADAGIAQAbQADAFgFADIgzAhIgDABQgDAAgCgDg");
	this.shape_235.setTransform(198.1881,552.2758,0.9503,0.9503);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#ECECEC").s().p("AlPLhQgUgGgMgTImcq2QgLgSAEgVQAFgVARgMIQmqkQASgLAUAFQAVAGALATIGcK2QAMARgFAWQgEAVgSALImlEMQgHAEgIAAIgDAAQgIAAgHAEIigBmQgIAFgDAHIgBADQgDAIgIAFImpEPQgMAHgNAAQgHAAgGgBg");
	this.shape_236.setTransform(261.8977,553.5463,0.9503,0.9503);

	this.instance_11 = new lib.Group_11();
	this.instance_11.parent = this;
	this.instance_11.setTransform(261.9,553.6,0.9504,0.9504,0,0,0,77.8,72.9);
	this.instance_11.alpha = 0.3984;

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#D0D1D3").s().p("AmSI0QgJgEgYgQIkRiuQgagQAAgOQAAgSAqgZIU2tRQAkgXAMAMQAGAGAFAeIAeFKQAFAdgCANQgCAUgQAKIw5KwQgJAFgKAAQgIAAgKgEg");
	this.shape_237.setTransform(222.6679,494.0229,0.9503,0.9503);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#888888").s().p("AmPI3QgMgFgVgOIkUixQgbgQAAgPQAAgSAigVIVBtYQAegTAOAHQAGAEAEAKIAEAVIABAFIAeFJQAFAegCANQgCAVgRALIw5KvQgJAGgKAAQgIAAgIgDgAKDonI0+NWQghAWAAAQQAAAMAZAPIEVCyQAVAOAKAEQATAHAOgJIQ5qwQAQgKACgUQACgNgFgcIgelKIgBgFQgDgbgKgFQgDgCgEAAQgNAAgXAPg");
	this.shape_238.setTransform(222.6444,494.0144,0.9503,0.9503);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#999EA1").s().p("AmXI3QgKgEgYgQIkQivQgagPgBgOQAAgSAqgZIVCtXQAkgXANAMQAGAGAEAeIAfFKQAEAdgBANQgDAUgQAKIxFK2QgJAFgKAAQgIAAgJgEg");
	this.shape_239.setTransform(222.2164,493.1676,0.9503,0.9503);

	this.instance_12 = new lib.Group_1_0();
	this.instance_12.parent = this;
	this.instance_12.setTransform(248.5,531.4,0.9504,0.9504,0,0,0,97.4,97.4);
	this.instance_12.alpha = 0.2305;

	this.instance_13 = new lib.Group_2_0();
	this.instance_13.parent = this;
	this.instance_13.setTransform(251.85,531.45,0.9504,0.9504,0,0,0,97.5,97.4);
	this.instance_13.alpha = 0.1094;

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#AE8476").s().p("AgYCiQgFgOAEgPQADgPALgMIASgUQAFgEAGgBQAHAAAFADQAHAGAJgCQAJgDAEgIIAKgUQADgFgCgGQgDgGgFgCQgJgEgCgKIgEgbQgBgPAOgGQAJgDADgJQAEgJgEgIIgJgUQgEgJgJgDQgJgEgJAEQgOAGgPgFIgzgUQgGgDgDgGQgEgGABgGQABgJgFgHQgGgHgKgBIgCAAQgRgBgKgNIgCgEQAdgJAgADQBIAGAwA4QAvA4gGBJQgFA5glArQgkArg1AOg");
	this.shape_240.setTransform(180.7931,498.1093,0.9503,0.9503);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#EAE7E5").s().p("AgvAzQgPgHgGgQQgFgQAHgPQAHgPAQgGIBWgeIAcBNIhWAeQgHACgHAAQgJAAgJgEg");
	this.shape_241.setTransform(152.6566,505.7021,0.9503,0.9503);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#A25F44").s().p("AgOCxQhJgGgvg4Qgwg5AGhHQAGhKA4gvQA4gwBIAGQBJAGAxA4QAvA4gGBIQgGBKg4AwQgyAqg/AAIgQgBg");
	this.shape_242.setTransform(174.5551,498.3931,0.9503,0.9503);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#EAE7E5").s().p("AgQDUQhYgHg5hDQg5hEAHhWQAHhYBEg5QBDg5BXAHQBYAHA4BDQA5BEgHBXQgHBXhDA5Qg8AzhMAAIgSgBg");
	this.shape_243.setTransform(174.5501,498.3694,0.9503,0.9503);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#D2D2D2").s().p("AgXEmQh6gKhPhdQhQhdAKh5QALh6BdhPQBdhPB5AJQB6AKBQBeQBOBdgJB5QgLB6hdBPQhTBHhpAAIgagCg");
	this.shape_244.setTransform(174.9878,498.2702,0.9503,0.9503);

	this.instance_14 = new lib.Group_1_4();
	this.instance_14.parent = this;
	this.instance_14.setTransform(172.2,495.55,0.9504,0.9504,0,0,0,30.3,29.7);
	this.instance_14.alpha = 0.2617;

	this.instance_15 = new lib.Group_2_2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(170.7,493.8,0.9504,0.9504,0,0,0,30.2,29.7);
	this.instance_15.alpha = 0.1094;

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#E0E0E0").s().p("AgFAOQgFgCgCgFQgCgFACgEQACgFAEgCIALgFQgFACgBAFQgBAFACAEQABAFAFACQAEACAEgCIgKAEIgFACIgEgBg");
	this.shape_245.setTransform(354.469,565.3823,0.9504,0.9504);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#BDBDBD").s().p("AgYAVQgFgCgCgFQgCgFACgFQACgEAFgCIAngRQAFgCAFABQAEACACAFQADAFgCAFQgCAEgFACIgnASIgFABIgFgBg");
	this.shape_246.setTransform(355.4786,565.0838,0.9504,0.9504);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#9E9E9E").s().p("AgiAZQgFgCgCgFQgCgFACgFQACgFAFgCIA7gZQAFgCAFACQAEACACAFQADAFgCAFQgCAFgFACIg7AZIgFABIgFgBg");
	this.shape_247.setTransform(355.4786,565.0668,0.9504,0.9504);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#757575").s().p("AgqAdQgFgDgCgFQgCgFABgFQACgEAFgDIBMgfQAFgCAFACQAEACADAFQACAFgCAFQgCAFgFACIhLAfIgGABIgEAAg");
	this.shape_248.setTransform(355.4786,565.0853,0.9504,0.9504);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#E0E0E0").s().p("AgFAOQgFgCgCgFQgCgFACgEQACgEAFgDIAKgFQgEADgBAEQgCAFACAEQABAFAFACQAEACAEgCIgKAFIgEABIgFgBg");
	this.shape_249.setTransform(351.7062,558.8657,0.9504,0.9504);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#BDBDBD").s().p("AgYAUQgEgBgDgGQgCgEACgGQACgDAFgCIAngRQAFgCAFACQAEACADAEQACAGgCAFQgCADgFACIgnARIgFABIgFgBg");
	this.shape_250.setTransform(352.7055,558.5806,0.9504,0.9504);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#9E9E9E").s().p("AgiAZQgEgCgDgFQgCgFACgFQACgFAFgCIA7gZQAFgCAFACQAFACACAFQACAFgCAFQgCAFgFACIg7AZIgFABIgFgBg");
	this.shape_251.setTransform(352.7055,558.5806,0.9504,0.9504);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#757575").s().p("AgqAcQgFgBgCgGQgCgEACgGQACgEAFgDIBLgfQAFgCAFACQAFABACAGQACAEgCAGQgCAEgFACIhLAgIgFABIgFgBg");
	this.shape_252.setTransform(352.704,558.5806,0.9504,0.9504);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#E0E0E0").s().p("AgGAOQgEgCgDgFQgCgFACgEQACgEAFgDIALgFQgFACgBAFQgCAFACAEQABAFAFACQAFACAFgCIgMAFIgEABIgFgBg");
	this.shape_253.setTransform(348.9807,552.3557,0.9504,0.9504);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#BDBDBD").s().p("AgYAVQgFgDgCgFQgCgFACgEQACgEAFgCIAngSQAFgCAFACQAEACACAFQADAFgCAFQgCAEgFACIgnARIgGACIgEgBg");
	this.shape_254.setTransform(349.9189,552.089,0.9504,0.9504);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#9E9E9E").s().p("AgiAZQgFgCgCgFQgCgFACgFQACgFAFgCIA7gZQAFgCAFACQAEACACAFQADAFgCAFQgCAFgFACIg7AZIgFABIgFgBg");
	this.shape_255.setTransform(349.9189,552.0943,0.9504,0.9504);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#757575").s().p("AgqAcQgFgCgCgFQgCgFABgFQACgEAFgDIBMgfQAFgDAFADQAFACACAFQACAFgCAFQgCAEgFACIhLAgIgFABIgFgBg");
	this.shape_256.setTransform(349.9189,552.0824,0.9504,0.9504);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#E0E0E0").s().p("AgFAOQgFgCgCgFQgCgFACgEQACgFAFgCIAKgFQgFACAAAFQgCAFACAEQABAFAFACQAEACAEgCIgKAFIgEABIgFgBg");
	this.shape_257.setTransform(346.1465,545.9051,0.9504,0.9504);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#BDBDBD").s().p("AgYAVQgEgDgDgEQgCgGACgEQACgFAFgBIAngSQAFgBAFABQAFACACAGQACAEgCAGQgCADgFACIgnASIgFABIgFgBg");
	this.shape_258.setTransform(347.1459,545.6081,0.9504,0.9504);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#9E9E9E").s().p("AgiAZQgEgCgDgFQgCgFACgFQACgFAFgCIA7gZQAFgCAFACQAFACACAFQACAFgCAFQgCAFgFACIg7AZIgGABIgEgBg");
	this.shape_259.setTransform(347.1459,545.6028,0.9504,0.9504);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#757575").s().p("AgqAdQgFgDgCgFQgCgFACgEQACgFAFgCIBLggQAFgCAFACQAFACACAFQACAFgCAFQgCAFgFACIhLAfIgGABIgEAAg");
	this.shape_260.setTransform(347.1444,545.6028,0.9504,0.9504);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#E0E0E0").s().p("AgGAOQgEgCgDgFQgCgFACgEQADgFAEgCIALgFQgFACgBAFQgCAFADAEQABAFAEACQAFACAEgCIgLAFIgEABIgFgBg");
	this.shape_261.setTransform(343.3973,539.3832,0.9504,0.9504);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#BDBDBD").s().p("AgYAUQgFgCgCgFQgCgFACgFQACgDAFgDIAngRQAFgCAFACQAEACACAFQADAFgCAFQgCAEgFACIgnARIgFACIgFgCg");
	this.shape_262.setTransform(344.3593,539.11,0.9504,0.9504);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#9E9E9E").s().p("AgiAZQgFgCgCgFQgCgFACgFQACgFAFgCIA7gZQAFgCAFACQAEACACAFQADAFgCAFQgCAFgFACIg7AZIgFABIgFgBg");
	this.shape_263.setTransform(344.3593,539.0981,0.9504,0.9504);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#757575").s().p("AgqAcQgFgCgCgEQgCgFABgGQACgEAFgCIBMggQAFgCAFACQAFABACAGQACAEgCAGQgCAEgFADIhLAfIgFABIgFgBg");
	this.shape_264.setTransform(344.3593,539.0981,0.9504,0.9504);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#E0E0E0").s().p("AgFAOQgEgDgDgFQgCgFACgDQACgFAFgCIAKgFQgFACAAAFQgCAEACAEQABAFAFADQAEACAEgCIgKAEIgEACIgFgBg");
	this.shape_265.setTransform(340.5869,532.9273,0.9504,0.9504);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#BDBDBD").s().p("AgYAVQgEgCgDgFQgCgFACgFQACgEAFgCIAngSQAFgCAFACQAFACACAFQACAFgCAFQgCAEgFACIgnARIgFACIgFgBg");
	this.shape_266.setTransform(341.5863,532.6066,0.9504,0.9504);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#9E9E9E").s().p("AgiAZQgEgCgDgFQgCgFACgFQACgFAFgCIA7gZQAFgCAFACQAEACADAFQACAFgCAFQgCAFgFACIg7AZIgFABIgFgBg");
	this.shape_267.setTransform(341.5863,532.6119,0.9504,0.9504);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#757575").s().p("AgqAcQgFgCgCgFQgCgFACgFQACgEAFgDIBLgfQAFgCAFACQAFACACAFQACAFgCAFQgCAFgEACIhMAfIgFABIgFgBg");
	this.shape_268.setTransform(341.5848,532.6119,0.9504,0.9504);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#E0E0E0").s().p("AgGAOQgEgCgDgFQgCgFACgEQADgFAEgCIAKgFQgEACgBAFQgCAFADAEQABAFAEACQAFACAEgCIgLAFIgEABIgFgBg");
	this.shape_269.setTransform(337.8376,526.4226,0.9504,0.9504);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#BDBDBD").s().p("AgYAVQgFgDgCgFQgCgEACgFQACgEAFgDIAngRQAFgCAFACQAEADACAFQADAEgCAFQgCAEgFADIgnARIgFABIgFgBg");
	this.shape_270.setTransform(338.7997,526.1256,0.9504,0.9504);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#9E9E9E").s().p("AgiAZQgFgCgCgFQgCgFACgFQACgFAFgCIA7gZQAFgCAFACQAEACACAFQADAFgCAFQgCAFgFACIg7AZIgFABIgFgBg");
	this.shape_271.setTransform(338.7997,526.1204,0.9504,0.9504);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#757575").s().p("AgqAdQgFgCgCgFQgCgFABgFQACgGAFgCIBMggQAFgCAFACQAFACACAFQACAFgCAFQgCAGgFACIhLAgIgFABIgFgBg");
	this.shape_272.setTransform(338.7997,526.1256,0.9504,0.9504);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#E0E0E0").s().p("AgGAOQgEgCgDgFQgCgFACgEQACgEAFgDIAKgFQgEADgBAEQgCAFACAEQABAFAFACQAFACAFgCIgMAFIgEABIgFgBg");
	this.shape_273.setTransform(335.0986,519.9008,0.9504,0.9504);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#BDBDBD").s().p("AgYAVQgEgCgDgFQgCgFACgFQACgEAFgDIAngRQAFgBAFABQAFACACAGQACAFgCAEQgCAEgFADIgnARIgFABIgFgBg");
	this.shape_274.setTransform(336.0267,519.6157,0.9504,0.9504);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#9E9E9E").s().p("AgiAZQgEgCgDgFQgCgFACgFQACgFAFgCIA7gZQAFgCAFACQAFACACAFQACAFgCAFQgCAFgFACIg7AZIgFABIgFgBg");
	this.shape_275.setTransform(336.0267,519.6326,0.9504,0.9504);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#757575").s().p("AgqAdQgFgDgCgEQgCgGACgEQACgFAFgCIBLghQAFgBAFABQAFADACAFQACAEgCAFQgCAFgEADIhMAgIgFABIgFgBg");
	this.shape_276.setTransform(336.0252,519.6157,0.9504,0.9504);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#E0E0E0").s().p("AgFAOQgEgCgDgFQgCgGACgDQACgFAFgCIAKgFQgEACgBAFQgCAFACAEQABAFAFACQAEABAEgBIgKAEIgEACIgFgBg");
	this.shape_277.setTransform(332.2067,513.4449,0.9504,0.9504);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#BDBDBD").s().p("AgYAVQgFgCgCgFQgCgFACgFQACgEAFgCIAngSQAFgCAFACQAEACACAFQADAFgCAFQgCAEgFACIgnASIgFABIgFgBg");
	this.shape_278.setTransform(333.2401,513.1294,0.9504,0.9504);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#9E9E9E").s().p("AgiAZQgFgCgCgFQgCgFACgFQACgFAFgCIA7gZQAFgCAFACQAEACACAFQADAFgCAFQgCAFgFACIg7AZIgFABIgFgBg");
	this.shape_279.setTransform(333.2401,513.1413,0.9504,0.9504);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#757575").s().p("AgqAcQgFgCgCgFQgCgFACgFQABgFAFgCIBMgfQAFgCAFACQAFACACAFQACAFgCAFQgCAFgFACIhLAfIgFABIgFgBg");
	this.shape_280.setTransform(333.2469,513.1294,0.9504,0.9504);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#E0E0E0").s().p("AgGAOQgEgCgDgFQgCgFACgEQACgFAFgCIAKgFQgEACgBAFQgCAFACAEQABAFAFACQAFACAFgCIgMAFIgEABIgFgBg");
	this.shape_281.setTransform(329.5389,506.9402,0.9504,0.9504);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#BDBDBD").s().p("AgYAVQgEgCgDgGQgCgFACgFQACgDAFgDIAngRQAFgCAFACQAEADADAEQACAGgCAEQgCAFgFABIgnASIgFAAIgFAAg");
	this.shape_282.setTransform(330.467,506.6432,0.9504,0.9504);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#9E9E9E").s().p("AgiAZQgEgCgDgFQgCgFACgFQACgFAFgCIA7gZQAFgCAFACQAFACACAFQACAFgCAFQgCAFgFACIg7AZIgFABIgFgBg");
	this.shape_283.setTransform(330.467,506.6379,0.9504,0.9504);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#757575").s().p("AgqAdQgFgDgCgFQgCgFACgEQACgFAFgDIBLgfQAFgDAFADQAFACACAEQACAGgCAEQgCAGgEABIhMAhIgFAAIgFAAg");
	this.shape_284.setTransform(330.4655,506.6432,0.9504,0.9504);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#E0E0E0").s().p("AgFAOQgEgCgDgFQgCgFACgEQACgFAFgCIALgFQgFACgBAFQgCAFACAEQABAFAFACQAEACAEgBIgKAEIgEABIgFgBg");
	this.shape_285.setTransform(326.6471,500.4183,0.9504,0.9504);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#BDBDBD").s().p("AgYAVQgFgDgCgFQgCgFACgFQACgDAFgDIAngRQAFgCAFACQAEACACAFQADAFgCAFQgCAEgFACIgnARIgFACIgFgBg");
	this.shape_286.setTransform(327.6804,500.1517,0.9504,0.9504);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#9E9E9E").s().p("AgiAZQgFgCgCgFQgCgFACgFQACgFAFgCIA7gZQAFgCAFACQAEACACAFQADAFgCAFQgCAFgFACIg7AZIgFABIgFgBg");
	this.shape_287.setTransform(327.6804,500.1451,0.9504,0.9504);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#757575").s().p("AgqAcQgFgCgCgFQgCgFACgFQABgFAFgCIBMgfQAFgCAFABQAFACACAFQACAFgCAFQgCAFgFACIhLAgIgFABIgFgBg");
	this.shape_288.setTransform(327.6872,500.1502,0.9504,0.9504);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#E0E0E0").s().p("AgGAOQgEgCgDgFQgCgFACgEQACgFAFgCIAKgFQgEACgBAFQgCAFACAEQABAFAFACQAFACAFgCIgMAFIgEABIgFgBg");
	this.shape_289.setTransform(323.9793,493.9677,0.9504,0.9504);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#BDBDBD").s().p("AgYAUQgEgCgDgEQgCgGACgFQACgDAFgCIAngRQAFgCAFACQAFABACAGQACAEgCAGQgCADgFACIgnARIgFABIgFgBg");
	this.shape_290.setTransform(324.9074,493.6708,0.9504,0.9504);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#9E9E9E").s().p("AgiAZQgEgCgDgFQgCgFACgFQACgFAFgCIA7gZQAFgCAFACQAFACACAFQACAFgCAFQgCAFgFACIg7AZIgFABIgFgBg");
	this.shape_291.setTransform(324.9074,493.647,0.9504,0.9504);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#757575").s().p("AgqAdQgFgDgCgFQgCgFACgEQACgFAFgCIBLggQAFgCAFACQAFACACAFQACAFgCAFQgCAFgEACIhMAfIgGABIgEAAg");
	this.shape_292.setTransform(324.9059,493.6655,0.9504,0.9504);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#E0E0E0").s().p("AgFAOQgFgCgCgFQgCgFABgEQACgEAFgDIALgFQgFADgBAEQgCAFACAEQABAFAFACQAFACAEgCIgLAFIgEABIgEgBg");
	this.shape_293.setTransform(321.1757,487.4459,0.9504,0.9504);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#BDBDBD").s().p("AgYAUQgFgCgCgFQgCgFACgFQACgDAFgDIAngRQAFgCAFACQAEACADAFQACAFgCAFQgCAEgFACIgnARIgFACIgFgCg");
	this.shape_294.setTransform(322.1261,487.1726,0.9504,0.9504);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#9E9E9E").s().p("AgiAZQgFgCgCgFQgCgFACgFQACgFAFgCIA7gZQAFgCAFACQAFACACAFQACAFgCAFQgCAFgFACIg7AZIgFABIgFgBg");
	this.shape_295.setTransform(322.1261,487.1608,0.9504,0.9504);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#757575").s().p("AgqAcQgFgBgCgGQgCgEACgGQACgEAEgDIBMgfQAFgCAFACQAFABACAGQACAEgCAGQgCAEgFACIhLAgIgFABIgFgBg");
	this.shape_296.setTransform(322.1276,487.1608,0.9504,0.9504);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#E0E0E0").s().p("AgFAOQgEgCgDgFQgCgFACgEQACgEAFgDIAKgFQgEACgBAFQgCAFACAEQABAFAFACQAEACAEgCIgKAFIgEABIgFgBg");
	this.shape_297.setTransform(318.3484,480.9359,0.9504,0.9504);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#BDBDBD").s().p("AgYAVQgEgDgDgFQgCgFACgEQACgEAFgCIAngSQAFgCAFACQAFACACAFQACAFgCAFQgCAEgFACIgnARIgGACIgEgBg");
	this.shape_298.setTransform(319.3478,480.6693,0.9504,0.9504);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#9E9E9E").s().p("AgiAZQgEgCgDgFQgCgFACgFQACgFAFgCIA7gZQAFgCAFACQAEACADAFQACAFgCAFQgCAFgFACIg7AZIgFABIgFgBg");
	this.shape_299.setTransform(319.3478,480.6745,0.9504,0.9504);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#757575").s().p("AgqAcQgFgCgCgFQgCgFACgFQACgEAFgDIBLgfQAFgCAFACQAFACACAFQACAFgCAFQgCAEgEACIhMAgIgFABIgFgBg");
	this.shape_300.setTransform(319.3463,480.6745,0.9504,0.9504);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#6B6B6B").s().p("AgCARQgHgDgDgHQgDgHADgGQADgHAGgDIADgCQgEAFgCAFQgCAHADAFQACAHAFADQAGADAGgCIgDACIgHACIgGgCg");
	this.shape_301.setTransform(322.9342,478.9876,0.9504,0.9504);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#6B6B6B").s().p("AgCARQgHgDgDgHQgDgHADgGQADgHAHgDIACgBQgEAEgCAGQgCAGADAFQADAGAFADQAFADAHgBIgEACQgDABgEAAIgGgBg");
	this.shape_302.setTransform(325.714,485.4739,0.9504,0.9504);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#6B6B6B").s().p("AgCARQgHgDgDgHQgDgHADgGQADgHAGgDIADgBQgEADgCAHQgCAGADAFQACAGAFADQAGADAGgBIgDACIgHABIgGgBg");
	this.shape_303.setTransform(328.4938,491.9839,0.9504,0.9504);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#6B6B6B").s().p("AgCARQgHgDgDgHQgDgHADgHQADgHAHgDIACgBQgEAEgCAGQgCAHADAFQADAGAFAEQAFACAGgBIgDACIgHACIgGgCg");
	this.shape_304.setTransform(331.2499,498.4701,0.9504,0.9504);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#6B6B6B").s().p("AgCARQgHgDgDgHQgDgHADgGQADgHAGgDIADgBQgLAIAGANQACAGAFADQAGADAGgBIgDACIgHABIgGgBg");
	this.shape_305.setTransform(334.0535,504.9563,0.9504,0.9504);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#6B6B6B").s().p("AgCARQgHgDgDgHQgDgHADgGQADgHAHgDIACgBQgEADgCAGQgCAHADAFQADAGAFADQAFADAGgBIgDACIgHABIgGgBg");
	this.shape_306.setTransform(336.8095,511.4663,0.9504,0.9504);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#6B6B6B").s().p("AgCARQgHgDgDgHQgDgHADgHQADgGAGgDIADgBQgEAEgCAFQgCAHADAFQAFANAOgCIgDACIgHACIgGgCg");
	this.shape_307.setTransform(339.6131,517.9525,0.9504,0.9504);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#6B6B6B").s().p("AgCARQgHgDgDgHQgDgHADgGQADgHAHgDIACgBQgEADgCAHQgCAGADAFQADAGAFADQAFADAGgBIgDACIgHABIgGgBg");
	this.shape_308.setTransform(342.3691,524.4388,0.9504,0.9504);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#6B6B6B").s().p("AgCARQgHgDgDgHQgDgHADgGQADgIAGgCIADgBQgEADgCAHQgCAGADAFQACAGAFADQAGADAGgBIgDACIgHABIgGgBg");
	this.shape_309.setTransform(345.1727,530.925,0.9504,0.9504);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#6B6B6B").s().p("AgCARQgHgDgDgHQgDgHADgGQADgHAHgDIACgBQgEAEgCAGQgCAGADAFQADAGAFADQAFADAGgBIgDACIgHABIgGgBg");
	this.shape_310.setTransform(347.9288,537.4231,0.9504,0.9504);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#6B6B6B").s().p("AgCARQgHgDgDgHQgDgHADgGQADgHAGgDIADgBQgEADgCAHQgCAGADAFQACAGAFADQAGADAGgBIgDACIgHABIgGgBg");
	this.shape_311.setTransform(350.7323,543.9212,0.9504,0.9504);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#6B6B6B").s().p("AgCARQgHgDgDgHQgDgHADgGQADgHAHgEIACgBQgEAFgCAFQgCAHADAFQACAHAFADQAGACAGgBIgDACIgHACIgGgCg");
	this.shape_312.setTransform(353.4884,550.4074,0.9504,0.9504);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#6B6B6B").s().p("AgCARQgHgDgDgHQgDgHADgGQACgHAHgDIADgBQgLAIAGANQACAGAFADQAGADAGgBIgDACIgHABIgGgBg");
	this.shape_313.setTransform(356.2802,556.8937,0.9504,0.9504);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#6B6B6B").s().p("AgCARQgHgDgDgHQgDgHADgGQADgHAHgDIACgBQgEADgCAGQgCAHADAFQACAGAFADQAGADAGgBIgDACIgHABIgGgBg");
	this.shape_314.setTransform(359.048,563.4036,0.9504,0.9504);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#616161").s().p("AgFARQgIgDgCgHQgDgHACgGQADgHAHgDQAGgDAGADQAHACAEAIQACAGgCAHQgDAHgGADIgHACIgGgCg");
	this.shape_315.setTransform(323.2971,478.9876,0.9504,0.9504);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#616161").s().p("AgGARQgHgDgDgGQgDgIADgGQADgHAHgDQAGgDAHADQAHADADAHQADAGgDAIQgDAGgHADQgDACgEAAIgGgCg");
	this.shape_316.setTransform(326.0769,485.4501,0.9504,0.9504);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#616161").s().p("AgFARQgIgDgCgHQgDgHACgGQADgHAHgDQAGgDAGADQAHADAEAHQACAGgCAHQgDAHgGADIgHACIgGgCg");
	this.shape_317.setTransform(328.8567,491.9601,0.9504,0.9504);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#616161").s().p("AgGARQgHgDgDgHQgDgHADgGQADgHAHgDQAGgDAHADQAHADADAHQADAGgDAHQgDAHgHADIgHACIgGgCg");
	this.shape_318.setTransform(331.6365,498.4582,0.9504,0.9504);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#616161").s().p("AgGARQgHgDgCgHQgDgHACgGQADgHAHgDQAGgDAGADQAHADAEAHQACAGgCAIQgDAGgGADIgIABIgGgBg");
	this.shape_319.setTransform(334.4163,504.9326,0.9504,0.9504);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#616161").s().p("AgGARQgHgDgDgHQgDgHADgGQADgHAHgDQAGgDAHADQAHADADAHQADAGgDAHQgDAHgHADIgHABIgGgBg");
	this.shape_320.setTransform(337.1897,511.4425,0.9504,0.9504);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#616161").s().p("AgGARQgHgDgCgHQgDgHACgGQADgHAHgDQAGgDAGADQAHADAEAHQACAGgCAHQgDAHgGADIgHACIgHgCg");
	this.shape_321.setTransform(339.976,517.9288,0.9504,0.9504);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#616161").s().p("AgGARQgHgDgDgHQgDgHADgGQADgHAHgDQAGgDAHADQAHADADAHQADAGgDAHQgDAHgHADIgHABIgGgBg");
	this.shape_322.setTransform(342.7493,524.415,0.9504,0.9504);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#616161").s().p("AgGARQgHgDgCgHQgDgHACgGQADgIAHgCQAGgDAGADQAHACAEAIQACAGgCAHQgDAHgGADIgHABIgHgBg");
	this.shape_323.setTransform(345.5356,530.925,0.9504,0.9504);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#616161").s().p("AgGARQgHgDgDgHQgDgHADgGQADgHAHgDQAGgDAHADQAHADADAHQADAGgDAHQgDAHgHADIgHACIgGgCg");
	this.shape_324.setTransform(348.3089,537.3993,0.9504,0.9504);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#616161").s().p("AgFARQgIgDgCgHQgDgHACgGQADgHAHgDQAGgDAGADQAHADAEAHQACAGgCAHQgDAHgGADIgHACIgGgCg");
	this.shape_325.setTransform(351.0952,543.8974,0.9504,0.9504);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#616161").s().p("AgGARQgHgDgDgHQgDgHADgGQADgHAHgDQAGgDAHADQAHADADAHQADAGgDAHQgDAHgHADIgHACIgGgCg");
	this.shape_326.setTransform(353.8685,550.401,0.9504,0.9504);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#616161").s().p("AgFARQgHgDgDgGQgEgIADgGQADgHAHgDQAGgDAHADQAHADADAHQADAGgDAIQgDAGgGADIgHACIgGgCg");
	this.shape_327.setTransform(356.643,556.8699,0.9504,0.9504);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#616161").s().p("AgGARQgHgDgDgHQgDgHADgGQADgHAHgDQAGgDAHADQAHADADAHQADAGgDAHQgDAHgHADIgHACIgGgCg");
	this.shape_328.setTransform(359.4282,563.3799,0.9504,0.9504);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#EEEEEE").s().p("AgUAAIAhgPIAIAQIgiAPg");
	this.shape_329.setTransform(322.0379,480.4845,0.9504,0.9504);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#EEEEEE").s().p("AgUAAIAigPIAHAQIghAPg");
	this.shape_330.setTransform(324.7939,486.9707,0.9504,0.9504);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#EEEEEE").s().p("AgUAAIAhgPIAIAQIgiAPg");
	this.shape_331.setTransform(327.5975,493.4569,0.9504,0.9504);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#EEEEEE").s().p("AgUAAIAhgPIAIAQIghAPg");
	this.shape_332.setTransform(330.3535,499.9669,0.9504,0.9504);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#EEEEEE").s().p("AgUgBIAhgOIAIAQIgiAPg");
	this.shape_333.setTransform(333.1571,506.4531,0.9504,0.9504);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#EEEEEE").s().p("AgUAAIAhgPIAIAQIghAPg");
	this.shape_334.setTransform(335.9131,512.9394,0.9504,0.9504);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#EEEEEE").s().p("AgUAAIAhgPIAIAQIgiAPg");
	this.shape_335.setTransform(338.7167,519.4256,0.9504,0.9504);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#EEEEEE").s().p("AgUgBIAhgOIAIAQIghAPg");
	this.shape_336.setTransform(341.4728,525.9356,0.9504,0.9504);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#EEEEEE").s().p("AgUAAIAhgPIAIAQIgiAPg");
	this.shape_337.setTransform(344.2764,532.4218,0.9504,0.9504);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#EEEEEE").s().p("AgUAAIAhgPIAIAQIghAPg");
	this.shape_338.setTransform(347.0324,538.908,0.9504,0.9504);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#EEEEEE").s().p("AgUAAIAhgPIAIAQIgiAPg");
	this.shape_339.setTransform(349.836,545.3943,0.9504,0.9504);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#EEEEEE").s().p("AgUAAIAhgPIAIAQIghAPg");
	this.shape_340.setTransform(352.592,551.9043,0.9504,0.9504);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#EEEEEE").s().p("AgUAAIAhgPIAIAQIgiAPg");
	this.shape_341.setTransform(355.3956,558.3905,0.9504,0.9504);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#EEEEEE").s().p("AgUAAIAhgPIAIAQIghAPg");
	this.shape_342.setTransform(358.1517,564.8767,0.9504,0.9504);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#E0E0E0").s().p("AjYBdQgBgDADgCIGqi2QADgBACADQABADgDACImqC2IgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_343.setTransform(349.1559,471.7437,0.9503,0.9503);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#E0E0E0").s().p("AjYBdQgBgEADgBIGqi2QADgBACADQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIgCACImqC2IgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_344.setTransform(351.9333,478.2346,0.9503,0.9503);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#E0E0E0").s().p("AjYBdIAAgDIACgCIGqi2QADgBACADQABADgDACImqC2IgCAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_345.setTransform(354.7249,484.7262,0.9503,0.9503);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#E0E0E0").s().p("AjYBdQgBgEADgBIGqi2QADgBACADQABADgDACImqC2IgCAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_346.setTransform(357.4904,491.2163,0.9503,0.9503);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#E0E0E0").s().p("AjXBdQgCgEAEgBIGpi2QABAAABAAQABAAAAAAQABAAAAABQAAAAABABIAAADIgCACImqC2IgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_347.setTransform(360.2409,497.7064,0.9503,0.9503);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#E0E0E0").s().p("AjYBdQAAgBAAgBQAAgBAAAAQAAgBABAAQAAgBABAAIGqi2QADgBACADQABADgDACImqC2IgCAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_348.setTransform(363.05,504.1981,0.9503,0.9503);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#E0E0E0").s().p("AjYBdQgBgDADgCIGqi2QABAAABAAQAAAAABAAQAAAAABABQAAAAAAABQACADgDACImqC2IgCAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_349.setTransform(365.8226,510.6787,0.9503,0.9503);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#E0E0E0").s().p("AjYBdQAAgBAAgBQAAgBAAAAQAAgBABAAQAAgBABAAIGqi1QADgCACADQACAEgEABImqC2IgCAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_350.setTransform(368.6198,517.1822,0.9503,0.9503);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#E0E0E0").s().p("AjWBfIgCgCQgBgDADgCIGqi2QABAAABAAQABAAAAAAQABAAAAABQAAAAAAABQACADgDACImqC2IgBAAIgCAAg");
	this.shape_351.setTransform(371.3821,523.6826,0.9503,0.9503);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#E0E0E0").s().p("AjYBdQgBgEADgBIGqi2QADgBACADQAAABAAABQAAABAAAAQAAABgBAAQAAABgBAAImqC2IgCAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAg");
	this.shape_352.setTransform(374.1793,530.1711,0.9503,0.9503);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#E0E0E0").s().p("AjWBfIgCgCIAAgDIACgCIGqi2QABAAAAAAQABAAABAAQAAAAABABQAAAAAAABQACAEgDABImqC2IgBAAIgCAAg");
	this.shape_353.setTransform(376.962,536.6548,0.9503,0.9503);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#E0E0E0").s().p("AjYBdQgBgEADgBIGqi2QADgBACADQABADgDACImqC2IgCAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_354.setTransform(379.7286,543.1528,0.9503,0.9503);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#E0E0E0").s().p("AjXBdQgCgDAEgCIGpi2IADAAIACACIAAADIgCACImqC2IgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_355.setTransform(382.4893,549.6627,0.9503,0.9503);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FAFAFA").s().p("An3lyIJGj5IGpPdIpHD6g");
	this.shape_356.setTransform(365.8496,510.706,0.9504,0.9504);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#E0E0E0").s().p("An3lxIJGj6IGpPeIpHD5g");
	this.shape_357.setTransform(366.3248,510.4922,0.9504,0.9504);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#F5F5F5").s().p("An3lyIJGj5IGpPeIpHD5g");
	this.shape_358.setTransform(366.8,510.3021,0.9504,0.9504);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#E0E0E0").s().p("An3lxIJGj6IGpPdIpHD6g");
	this.shape_359.setTransform(367.2751,510.0883,0.9504,0.9504);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#F5F5F5").s().p("An3lyIJGj5IGpPdIpHD6g");
	this.shape_360.setTransform(367.7503,509.8982,0.9504,0.9504);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#E0E0E0").s().p("An3lyIJGj5IGpPdIpHD6g");
	this.shape_361.setTransform(368.2255,509.6844,0.9504,0.9504);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#F5F5F5").s().p("An3lxIJGj6IGpPeIpHD5g");
	this.shape_362.setTransform(368.7007,509.4705,0.9504,0.9504);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#E0E0E0").s().p("An3lxIJGj6IGpPdIpHD6g");
	this.shape_363.setTransform(369.1759,509.2805,0.9504,0.9504);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#1B82A3").s().p("AgcACIAxgUIAIARIgxAUg");
	this.shape_364.setTransform(321.2776,480.8171,0.9504,0.9504);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#1B82A3").s().p("AgcACIAygUIAHARIgyAUg");
	this.shape_365.setTransform(324.0574,487.2796,0.9504,0.9504);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#1B82A3").s().p("AgcACIAxgUIAIARIgxAUg");
	this.shape_366.setTransform(326.8372,493.7895,0.9504,0.9504);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#1B82A3").s().p("AgcACIAxgUIAIARIgxAUg");
	this.shape_367.setTransform(329.5932,500.2995,0.9504,0.9504);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#1B82A3").s().p("AgcACIAxgUIAIARIgxAUg");
	this.shape_368.setTransform(332.3968,506.762,0.9504,0.9504);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#1B82A3").s().p("AgcACIAxgUIAIARIgxAUg");
	this.shape_369.setTransform(335.1529,513.272,0.9504,0.9504);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#1B82A3").s().p("AgcACIAxgUIAIARIgxAUg");
	this.shape_370.setTransform(337.9564,519.7345,0.9504,0.9504);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#1B82A3").s().p("AgcACIAxgUIAIARIgxAUg");
	this.shape_371.setTransform(340.7125,526.2444,0.9504,0.9504);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#1B82A3").s().p("AgcACIAxgUIAIARIgxAUg");
	this.shape_372.setTransform(343.5161,532.7544,0.9504,0.9504);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#1B82A3").s().p("AgcACIAxgUIAIARIgxAUg");
	this.shape_373.setTransform(346.2721,539.2169,0.9504,0.9504);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#1B82A3").s().p("AgcACIAxgUIAIARIgxAUg");
	this.shape_374.setTransform(349.0757,545.7269,0.9504,0.9504);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#1B82A3").s().p("AgcACIAxgUIAIARIgxAUg");
	this.shape_375.setTransform(351.8317,552.2369,0.9504,0.9504);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#1B82A3").s().p("AgcACIAxgUIAIARIgxAUg");
	this.shape_376.setTransform(354.6353,558.6993,0.9504,0.9504);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#1B82A3").s().p("AgcACIAxgUIAIARIgxAUg");
	this.shape_377.setTransform(357.3914,565.2093,0.9504,0.9504);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#23A1C7").s().p("Ak4B6IJvkLQAFAKgEAKQgEAKgKAEIpYEBg");
	this.shape_378.setTransform(345.5828,462.957,0.9504,0.9504);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#1B82A3").s().p("AlMJyIJykNQAHgDADgHQACgHgDgHImfvMIgFgJQALgCALAHQALAGAFALIGZO8QAGAOgGAOQgFAOgOAGIp4EPg");
	this.shape_379.setTransform(388.1003,510.1923,0.9504,0.9504);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#2691BD").s().p("Aogl4IJukLQASgHASAHQASAHAIASIGROpQAIASgHASQgHASgSAIIpvELg");
	this.shape_380.setTransform(367.6195,510.3391,0.9504,0.9504);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#E6E6E6").s().p("A2Ea/QldAAlBiIQk2iEjvjvQjwjwiDk2QiJlAAAleQAAlcCJlCQCDk1DwjwQDvjvE2iDQFBiJFdAAMAsJAAAQFdAAFBCJQE2CDDvDvQDwDwCDE1QCJFCAAFcQAAFeiJFAQiDE3jwDvQjvDvk2CEQlBCIldAAg");
	this.shape_381.setTransform(340.0153,454.2981,0.9504,0.9504);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#09485A").s().p("AgMI2QjMgMijg3Qiwg8hLhdQhXhrgNmQQgEh9AEiLIAEhzIWJgcIAQCGQASChAGCQQARHJhwBiQhaBQi4AlQiAAaiQAAQgzAAgzgDg");
	this.shape_382.setTransform(343.0397,635.9305,0.9504,0.9504);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#545454").s().p("AqzNzQh6iqgMjzIgtuJQgMjzBoiuQBqiuCggDIObgTQCggDB6CqQB6CpAMDzIAsOKQAMDyhpCuQhpCuifADIucATIgGAAQicAAh3img");
	this.shape_383.setTransform(346.8239,683.6358,0.9504,0.9504);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.instance_15},{t:this.instance_14},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.instance_13},{t:this.instance_12},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.instance_11},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.instance_10},{t:this.instance_9},{t:this.shape_22},{t:this.shape_21},{t:this.instance_8},{t:this.shape_20},{t:this.instance_7},{t:this.instance_6},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance_5},{t:this.shape_9},{t:this.shape_8},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_7},{t:this.shape_6},{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_desk_person_pad_laptop, null, null);


(lib.Scene_1_conference = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// conference
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVA9QgUgFgNgLIAFgSIARALQAHAEAKACQAOADAFgCQAHgDACgIQACgHgEgGQgEgGgOgKQgQgKgEgLQgFgKADgMQAFgQANgFQANgGATAFQATAFAPAMIgLAOQgPgLgNgDQgKgDgGADQgGADgCAHQgBAEABAEQACAFADADIAOAMQALAHAHAIQAFAGABAHQACAHgDAIQgEAQgPAGQgIADgIAAQgJAAgLgCg");
	this.shape.setTransform(574.3682,549.7436,0.9504,0.9504);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAIBCIgYhAIgOAGIgNAtIgVgFIAih3IAVAFIgQA5IBCgsIAYAGIg/ApIAeBOg");
	this.shape_1.setTransform(565.102,547.3982,0.9504,0.9504);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNA9QgcgHgKgUQgLgTAJgdQAFgTALgMQAMgNAPgEQAOgDAUAEQAUAGAOALIgNAPIgMgJQgHgEgHgCQgSgEgNAJQgNAJgGAWQgHATAHAQQAGAMATAGIAQACIAQABIgEAQIgJAAQgMAAgOgDg");
	this.shape_2.setTransform(554.3484,544.8556,0.9504,0.9504);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAlBAIgEglIgvgMIgWAeIgWgFIBQhsIAYAGIANCDgAAQgcIgUAcIAlAJIgEg5QgFAKgIAKg");
	this.shape_3.setTransform(540.9862,542.2661,0.9504,0.9504);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag2A5IAih3IAkAJQAYAGAJANQAKAMgGASQgFASgQAGQgQAHgXgGIgNgDIgNAtgAgQABIALADQAPAEAJgDQAKgEADgKQADgKgGgHQgFgHgOgEIgOgDg");
	this.shape_4.setTransform(531.7652,538.3696,0.9504,0.9504);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0AzIAih3IBHASIgFAQIgygMIgJAgIAvANIgFAPIgvgMIgKAlIAyAOIgFAQg");
	this.shape_5.setTransform(606.4197,537.2054,0.9504,0.9504);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNA9QgcgHgKgUQgLgTAJgdQAFgTALgMQAMgNAQgDQAOgFATAFQASAFAQAMIgMAOIgMgIQgHgEgIgCQgRgFgOAKQgNAKgGAUQgGAWAGANQAHAOATAFQAIACAHAAQAIABAJgBIgFARIgIABQgNgBgOgDg");
	this.shape_6.setTransform(596.7828,534.9598,0.9504,0.9504);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AALBDIgjhvIgBAAIgZBfIgTgEIAih4IAZAHIAjBtIAAABIAaheIATAEIgiB4g");
	this.shape_7.setTransform(584.0146,531.5981,0.9504,0.9504);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag0AzIAih3IBHASIgFARIgygOIgJAhIAvAMIgEAQIgwgMIgLAmIAzAMIgFARg");
	this.shape_8.setTransform(572.9189,528.7945,0.9504,0.9504);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARBCIgRg3IgUgGIgNAwIgVgFIAih3IAjAJQAZAGAJAMQAJAMgFARQgGAWgcADIAVA+gAgPgKIAOAEQAOAEAIgEQAIgDADgLQADgKgGgGQgGgGgOgEIgNgDg");
	this.shape_9.setTransform(562.2853,526.3473,0.9504,0.9504);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag0AzIAih3IBHASIgFARIgygNIgJAhIAvAMIgFAPIgvgMIgKAmIAyANIgFAQg");
	this.shape_10.setTransform(552.6283,523.6862,0.9504,0.9504);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag0A6IAih4IBHASIgFARIgygNIgKAmIAuALIgEAQIgwgLIgNAwg");
	this.shape_11.setTransform(543.5997,520.8113,0.9504,0.9504);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAKBDIgihvIgBAAIgBAGQgEATgDAJIgRA+IgTgFIAih3IAZAGIAjBuIAAAAIAahfIATAGIgiB2g");
	this.shape_12.setTransform(531.9576,518.4829,0.9504,0.9504);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQA+QgdgHgLgUQgLgVAJgcQAIgeAUgMQAVgMAbAHQAcAIALAUQALAUgIAcQgJAegUAMQgMAIgQAAQgJAAgKgDgAgRgoQgNAJgGAXQgHAVAHAOQAGAOATAEQARAFANgJQAMgJAHgXQAGgVgGgNQgGgOgTgFQgGgCgGAAQgKAAgIAGg");
	this.shape_13.setTransform(518.6289,515.1328,0.9504,0.9504);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNA9QgcgHgKgUQgLgTAJgdQAFgTALgMQAMgNAPgDQAPgEATAEQASAFAQAMIgMAOIgNgIQgGgEgIgCQgRgFgOAKQgNAKgGAUQgGAWAGANQAHAOATAFQAIACAHAAQAIABAJgBIgFARIgIAAQgNAAgOgDg");
	this.shape_14.setTransform(507.3522,512.4952,0.9504,0.9504);

	this.instance = new lib.Path_5();
	this.instance.parent = this;
	this.instance.setTransform(558.85,555.05,0.9504,0.9504,0,0,0,83.5,37.8);
	this.instance.alpha = 0.1602;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3CB9E4").s().p("AHpKXI0Ll/QgHgCgIgFQgMgIgFgNQgFgMAEgNIDqtZQAFgTASgJQARgKAUAGIIOCcQAVAGA6A7QBPBPAOAMIAQAMQALAJAJADIJkC1QAQAFAKAOQAMATgIAUIkeLUQgFANgMAHQgMAIgPAAQgJAAgHgCg");
	this.shape_15.setTransform(558.9883,527.5912,0.9504,0.9504);

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(557.45,527.45,0.9504,0.9504,0,0,0,80.2,66.8);
	this.instance_1.alpha = 0.1484;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#08536F").s().p("AqiiZIErmNIQaLAIkrGNg");
	this.shape_16.setTransform(566.5751,503.8233,0.9504,0.9504);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AqiiZIErmNIQaLAIkrGNg");
	this.shape_17.setTransform(566.8127,492.6564,0.9504,0.9504);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D4116E").s().p("ApJlYIGfkhIL0PLImYEog");
	this.shape_18.setTransform(578.8112,495.6976,0.9504,0.9504);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#127EA6").s().p("AHJLLIzTluQgSgFgJgQQgIgQAFgRIFHvVQAGgRARgIQAQgIASAFIHXCLQAVAHBJBKQBJBLAVAGIIgCiQASAFAJAQQAIAPgFARIknN1QgFARgRAIQgKAFgLAAQgHAAgHgCg");
	this.shape_19.setTransform(560.3501,518.7555,0.9504,0.9504);

	this.instance_2 = new lib.Path_4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(556,533.8,0.9504,0.9504,0,0,0,76.5,55.1);
	this.instance_2.alpha = 0.1211;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance_1},{t:this.shape_15},{t:this.instance},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_conference, null, null);


(lib.Scene_1_coffee_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// coffee_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#77462E").s().p("AioBCQgGhIAvg4QAwg4BJgGQA4gFAxAdQAwAdAXAzIgMAGQgOAHgPgBQgPgBgNgIIgXgQQgGgEgBgGQgCgGADgGQAEgIgDgIQgEgJgIgCIgWgHQgGgCgFADQgFADgCAGQgCAKgKADIgZAIQgHACgGgCQgHgDgDgGQgFgIgJgCQgJgCgIAFIgSAMQgIAFgCAKQgCAJAFAJQAIANgDAPIgLA1QgDAPgQABQgJAAgGAHQgGAHABAJIAAADQADARgNALIgDAEQgNgdgCgfg");
	this.shape.setTransform(102.3518,503.18,0.9503,0.9503);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAE7E5").s().p("AAIBFQgPgFgJgPIgshPIBIgoIAsBPQAIAPgFARQgEARgPAIQgKAFgKAAQgGAAgGgCg");
	this.shape_1.setTransform(113.7794,528.265,0.9503,0.9503);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#53301B").s().p("AhyCHQg4gwgGhIQgGhJAvg4QAwg4BKgGQBHgGA5AwQA4AvAGBJQAGBJgwA4QgwA4hIAGIgQABQg/AAgygrg");
	this.shape_2.setTransform(103.0938,508.0937,0.9503,0.9503);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAE7E5").s().p("AiJCiQhDg5gHhYQgHhWA5hEQA5hDBYgHQBXgHBDA5QBDA5AHBXQAHBYg5BCQg5BEhYAHIgSABQhMAAg8gzg");
	this.shape_3.setTransform(103.07,508.0937,0.9503,0.9503);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D2D2D2").s().p("Ai+DhQhdhPgKh6QgKh5BPhdQBPheB6gKQB5gJBdBPQBeBPAKB6QAKB5hQBdQhPBeh6AJIgaACQhpAAhThHg");
	this.shape_4.setTransform(102.9062,507.686,0.9503,0.9503);

	this.instance = new lib.Group_1();
	this.instance.parent = this;
	this.instance.setTransform(100.6,510.55,0.9504,0.9504,0,0,0,29.6,29.6);
	this.instance.alpha = 0.2617;

	this.instance_1 = new lib.Group_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(99,512.3,0.9504,0.9504,0,0,0,29.6,29.6);
	this.instance_1.alpha = 0.1094;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_coffee_2, null, null);


(lib.Scene_1_coffee_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// coffee_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#654B41").s().p("AioBCQgGhIAvg4QAwg4BJgGQA4gFAxAeQAwAdAXAzIgMAGQgOAHgPgBQgPgBgNgJIgXgQQgGgEgBgGQgCgGADgGQAEgIgDgIQgEgJgIgCIgWgHQgGgCgFADQgFADgCAGQgCAKgKADIgZAIQgHACgGgCQgHgDgDgGQgFgIgJgCQgJgCgIAFIgSAMQgIAFgCAKQgDAJAGAJQAIANgDAPIgLA1QgCAHgFAEQgFAFgHAAQgJAAgGAHQgGAHABAKIAAACQADARgNALIgDAEQgNgdgCgfg");
	this.shape.setTransform(130.7197,436.2285,0.9503,0.9503);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAE7E5").s().p("AAIBFQgQgEgIgPIgshQIBIgoIAsBQQAIAPgFAQQgEARgPAIQgKAFgKAAQgGAAgGgCg");
	this.shape_1.setTransform(142.1468,461.3141,0.9503,0.9503);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C0704").s().p("AhyCHQg4gvgGhJQgGhJAwg4QAvg4BJgGQBJgGA4AvQA4AxAGBJQAGBIgwA4QgwA4hIAGIgQABQg/AAgygrg");
	this.shape_2.setTransform(131.4608,441.1439,0.9503,0.9503);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAE7E5").s().p("AiJCiQhDg5gHhYQgHhWA5hDQA5hEBYgHQBXgHBDA5QBDA5AHBXQAHBYg5BDQg5BDhYAHIgSABQhMAAg8gzg");
	this.shape_3.setTransform(131.437,441.1439,0.9503,0.9503);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D2D2D2").s().p("Ai/DhQhchPgKh6QgKh5BPhdQBPhdB6gKQB5gKBdBPQBeBPAJB6QALB5hQBdQhPBeh6AJIgaABQhqAAhThGg");
	this.shape_4.setTransform(131.2741,440.7528,0.9503,0.9503);

	this.instance = new lib.Group_1_1();
	this.instance.parent = this;
	this.instance.setTransform(128.85,443.6,0.9504,0.9504,0,0,0,29.5,29.6);
	this.instance.alpha = 0.2617;

	this.instance_1 = new lib.Group_2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(127.45,445.35,0.9504,0.9504,0,0,0,29.6,29.6);
	this.instance_1.alpha = 0.1094;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_coffee_1, null, null);


// stage content:
(lib.ba_u5_s2_p1_behaviour = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.type_button = this.buttons.type_button;
		this.venues_button = this.buttons.venues_button;
		this.coffee_button = this.buttons.coffee_button;
		this.conference_button = this.buttons.conference_button;
		this.notes_button = this.buttons.notes_button;
		this.sending_button = this.buttons.sending_button;
		this.Item_text = this.text.Item_text;
		this.Item_text2 = this.text.Item_text2;
		this.Item_text.text = "\nSelect the six items on the table to explore the impact of professional and helpful behaviour on the support of business events.";
		this.Item_text2.text = "";
		this.type_button.addEventListener("click", Type_function.bind(this));
		
		function Type_function()
		{	
			this.Item_text.text = "Typing up minutes / notes:\n\nHand written notes are illegible. Written notes are in just one place and difficult to circulate. Losing one written copy results in the record being lost. People may be ill informed and records lost.";
			this.Item_text2.text = "Accurate records are typed. This makes it possible to distribute, store and more easily access the required information.";
		
		}
		
		this.notes_button.addEventListener("click", Notes_function.bind(this));
		
		function Notes_function()
		{	
			this.Item_text.text = "Minute/note taking:\n\nNo notes / minutes taken. Inaccurate notes / minutes taken. Insufficient notes / minutes taken. People uninformed or misinformed. Limited information for making decisions /taking actions.";
			this.Item_text2.text = "The notes / minutes taken are high quality and ensure people are well informed and better decisions and actions are likely to follow.";
		
		}
		
		this.conference_button.addEventListener("click", Conference_function.bind(this));
		
		function Conference_function()
		{	
			this.Item_text.text = "Distributing conference packs / reading materials:\n\nPeople do not receive the appropriate materials. People are ill informed and do not get the most out of the event. Dissatisfied people. Poor perception of the event. Failure to achieve objectives.";
			this.Item_text2.text = "People get all the information required leading to a better experience of the event and a better perception of the organisation.";
		
		}
		
		this.venues_button.addEventListener("click", Venues_function.bind(this));
		
		function Venues_function()
		{	
			this.Item_text.text = "Organising an appropriate venue:\n\nThe venue may be too big / too small / too expensive / Lack essential facilities / booked on wrong date. Events do not go ahead. People cannot get in. Too much money is spent. People are dissatisfied and outcomes may not be achieved.";
			this.Item_text2.text = "The correct venue arrangements are made. Dissatisfaction is minimised and the chances of positive outcomes are enhanced.";
		
		}
		
		this.coffee_button.addEventListener("click", Coffee_function.bind(this));
		
		function Coffee_function()
		{	
			this.Item_text.text = "Arranging for refreshments:\n\nNone are available. They are available at the wrong times. Special needs are not catered for. People are thirsty, hungry and dissatisfied. The host organisation presents itself poorly.";
			this.Item_text2.text = "People are properly refreshed. They are better able to enjoy the event and make a useful contribution to it if required to do so. The host organisation is seen in a more positive light.";
		
		}
		
		this.sending_button.addEventListener("click", Sending_function.bind(this));
		
		function Sending_function()
		{	
			this.Item_text.text = "Sending out conference papers:\n\nNone or only parts of conference papers sent out. Attendees dissatisfied. Poor perception of the event organiser. ";
			this.Item_text2.text = "Attendees receive any post event papers promptly and to the required standard. This helps create a positive experience of the event. This will contribute to the achievement of the event objectives.";
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// buttons_obj_
	this.buttons = new lib.Scene_1_buttons();
	this.buttons.name = "buttons";
	this.buttons.parent = this;
	this.buttons.setTransform(370.2,462.4,1,1,0,0,0,370.2,462.4);
	this.buttons.depth = 0;
	this.buttons.isAttachedToCamera = 0
	this.buttons.isAttachedToMask = 0
	this.buttons.layerDepth = 0
	this.buttons.layerIndex = 0
	this.buttons.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.buttons).wait(1));

	// text_obj_
	this.text = new lib.Scene_1_text();
	this.text.name = "text";
	this.text.parent = this;
	this.text.setTransform(339.8,161,1,1,0,0,0,339.8,161);
	this.text.depth = 0;
	this.text.isAttachedToCamera = 0
	this.text.isAttachedToMask = 0
	this.text.layerDepth = 0
	this.text.layerIndex = 1
	this.text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// whiteboard_obj_
	this.whiteboard = new lib.Scene_1_whiteboard();
	this.whiteboard.name = "whiteboard";
	this.whiteboard.parent = this;
	this.whiteboard.setTransform(340,144.8,1,1,0,0,0,340,144.8);
	this.whiteboard.depth = 0;
	this.whiteboard.isAttachedToCamera = 0
	this.whiteboard.isAttachedToMask = 0
	this.whiteboard.layerDepth = 0
	this.whiteboard.layerIndex = 2
	this.whiteboard.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.whiteboard).wait(1));

	// Venues_obj_
	this.Venues = new lib.Scene_1_Venues();
	this.Venues.name = "Venues";
	this.Venues.parent = this;
	this.Venues.setTransform(233.7,373.9,1,1,0,0,0,233.7,373.9);
	this.Venues.depth = 0;
	this.Venues.isAttachedToCamera = 0
	this.Venues.isAttachedToMask = 0
	this.Venues.layerDepth = 0
	this.Venues.layerIndex = 3
	this.Venues.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Venues).wait(1));

	// coffee_1_obj_
	this.coffee_1 = new lib.Scene_1_coffee_1();
	this.coffee_1.name = "coffee_1";
	this.coffee_1.parent = this;
	this.coffee_1.setTransform(129.3,443,1,1,0,0,0,129.3,443);
	this.coffee_1.depth = 0;
	this.coffee_1.isAttachedToCamera = 0
	this.coffee_1.isAttachedToMask = 0
	this.coffee_1.layerDepth = 0
	this.coffee_1.layerIndex = 4
	this.coffee_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.coffee_1).wait(1));

	// coffee_2_obj_
	this.coffee_2 = new lib.Scene_1_coffee_2();
	this.coffee_2.name = "coffee_2";
	this.coffee_2.parent = this;
	this.coffee_2.setTransform(100.9,509.9,1,1,0,0,0,100.9,509.9);
	this.coffee_2.depth = 0;
	this.coffee_2.isAttachedToCamera = 0
	this.coffee_2.isAttachedToMask = 0
	this.coffee_2.layerDepth = 0
	this.coffee_2.layerIndex = 5
	this.coffee_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.coffee_2).wait(1));

	// conference_obj_
	this.conference = new lib.Scene_1_conference();
	this.conference.name = "conference";
	this.conference.parent = this;
	this.conference.setTransform(559,513.1,1,1,0,0,0,559,513.1);
	this.conference.depth = 0;
	this.conference.isAttachedToCamera = 0
	this.conference.isAttachedToMask = 0
	this.conference.layerDepth = 0
	this.conference.layerIndex = 6
	this.conference.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.conference).wait(1));

	// envelopes_obj_
	this.envelopes = new lib.Scene_1_envelopes();
	this.envelopes.name = "envelopes";
	this.envelopes.parent = this;
	this.envelopes.setTransform(470.9,383.6,1,1,0,0,0,470.9,383.6);
	this.envelopes.depth = 0;
	this.envelopes.isAttachedToCamera = 0
	this.envelopes.isAttachedToMask = 0
	this.envelopes.layerDepth = 0
	this.envelopes.layerIndex = 7
	this.envelopes.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.envelopes).wait(1));

	// desk_person_pad_laptop_obj_
	this.desk_person_pad_laptop = new lib.Scene_1_desk_person_pad_laptop();
	this.desk_person_pad_laptop.name = "desk_person_pad_laptop";
	this.desk_person_pad_laptop.parent = this;
	this.desk_person_pad_laptop.setTransform(340,544,1,1,0,0,0,340,544);
	this.desk_person_pad_laptop.depth = 0;
	this.desk_person_pad_laptop.isAttachedToCamera = 0
	this.desk_person_pad_laptop.isAttachedToMask = 0
	this.desk_person_pad_laptop.layerDepth = 0
	this.desk_person_pad_laptop.layerIndex = 8
	this.desk_person_pad_laptop.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.desk_person_pad_laptop).wait(1));

	// bg_obj_
	this.bg = new lib.Scene_1_bg();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(342.2,400.4,1,1,0,0,0,342.2,400.4);
	this.bg.depth = 0;
	this.bg.isAttachedToCamera = 0
	this.bg.isAttachedToMask = 0
	this.bg.layerDepth = 0
	this.bg.layerIndex = 9
	this.bg.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(338.1,398,348.29999999999995,404.9);
// library properties:
lib.properties = {
	id: '786DA3F1042B4C23A41F4E90074ECD41',
	width: 680,
	height: 800,
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
an.compositions['786DA3F1042B4C23A41F4E90074ECD41'] = {
	getStage: function() { return exportRoot.getStage(); },
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


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;