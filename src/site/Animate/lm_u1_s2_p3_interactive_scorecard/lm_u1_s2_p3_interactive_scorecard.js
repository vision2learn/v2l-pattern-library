(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"lm_u1_s2_p3_interactive_scorecard_atlas_", frames: [[0,0,799,478]]}
];


// symbols:



(lib.lm_u1_s2_p3_scorecard_v2sml = function() {
	this.initialize(ss["lm_u1_s2_p3_interactive_scorecard_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
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


(lib.text_bg_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01A7E1").s().p("A18ImIAAxLMAr5AAAIAARLg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_bg_Layer_1, null, null);


(lib.Scene_1_table_image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// table_image
	this.instance = new lib.lm_u1_s2_p3_scorecard_v2sml();
	this.instance.parent = this;
	this.instance.setTransform(-3,0,1.0057,1.0134);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_table_image, null, null);


(lib.Button_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,219,243,0.027)").s().p("ApDDXQjwhZAAh+QAAh9DwhaQDxhZFSAAQFTAADxBZQDwBaAAB9QAAB+jwBZQjxBalTAAQlSAAjxhag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,-30.5,164,61);


(lib.text_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.text_bg_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_bg, new cjs.Rectangle(-140.4,-55,280.9,110), null);


(lib.Scene_1_dynamic_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dynamic_text
	this.Item_text = new cjs.Text("text", "16px 'Open Sans'", "#FFFFFF");
	this.Item_text.name = "Item_text";
	this.Item_text.textAlign = "center";
	this.Item_text.lineHeight = 24;
	this.Item_text.lineWidth = 244;
	this.Item_text.parent = this;
	this.Item_text.setTransform(399.4156,228.0426,0.9984,0.9984);

	this.text_bg1 = new lib.text_bg();
	this.text_bg1.name = "text_bg1";
	this.text_bg1.parent = this;
	this.text_bg1.setTransform(398.65,278.6,0.9204,1.2003,0,0,0,0.2,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_bg1},{t:this.Item_text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_dynamic_text, null, null);


(lib.Scene_1_buttons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buttons
	this.button_excellent = new lib.Button_1();
	this.button_excellent.name = "button_excellent";
	this.button_excellent.parent = this;
	this.button_excellent.setTransform(727.4,440.8,0.7063,0.9984,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.button_excellent, 0, 1, 1);

	this.button_average = new lib.Button_1();
	this.button_average.name = "button_average";
	this.button_average.parent = this;
	this.button_average.setTransform(464.85,440.8,0.7063,0.9984,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.button_average, 0, 1, 1);

	this.button_poor = new lib.Button_1();
	this.button_poor.name = "button_poor";
	this.button_poor.parent = this;
	this.button_poor.setTransform(199.4,440.8,0.7063,0.9984,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.button_poor, 0, 1, 1);

	this.button_support = new lib.Button_1();
	this.button_support.name = "button_support";
	this.button_support.parent = this;
	this.button_support.setTransform(69.6,373.9,0.7063,0.9984,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.button_support, 0, 1, 1);

	this.button_delivery = new lib.Button_1();
	this.button_delivery.name = "button_delivery";
	this.button_delivery.parent = this;
	this.button_delivery.setTransform(69.6,305,0.7063,0.9984,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.button_delivery, 0, 1, 1);

	this.button_price = new lib.Button_1();
	this.button_price.name = "button_price";
	this.button_price.parent = this;
	this.button_price.setTransform(58.55,171.3,0.6088,0.9002,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_price, 0, 1, 1);

	this.button_reliability = new lib.Button_1();
	this.button_reliability.name = "button_reliability";
	this.button_reliability.parent = this;
	this.button_reliability.setTransform(69.6,238.2,0.7063,0.9984,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.button_reliability, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_reliability},{t:this.button_price},{t:this.button_delivery},{t:this.button_support},{t:this.button_poor},{t:this.button_average},{t:this.button_excellent}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_buttons, null, null);


// stage content:
(lib.lm_u1_s2_p3_interactive_scorecard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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
		this.button_reliability = this.buttons.button_reliability;
		this.button_price = this.buttons.button_price;
		this.button_delivery = this.buttons.button_delivery;
		this.button_support = this.buttons.button_support;
		this.button_poor = this.buttons.button_poor;
		this.button_average = this.buttons.button_average;
		this.button_excellent = this.buttons.button_excellent;
		this.text_bg1 = this.dynamic_text.text_bg1;
		this.Item_text = this.dynamic_text.Item_text;
		this.text_bg1.visible = false;
		this.Item_text.visible = false;
		
		this.button_price.addEventListener("click", Price_function.bind(this));
		
		function Price_function()
		{
			this.text_bg1.visible = true;
			this.Item_text.visible = true;
			this.Item_text.text = "Price - How satisfied customers are with the cost of the product.";
			
		}
		
		this.button_reliability.addEventListener("click", Reliability_function.bind(this));
		
		function Reliability_function()
		{
			this.text_bg1.visible = true;
			this.Item_text.visible = true;
			this.Item_text.text = "Reliability - How much customers depend on the product to be consistent.";
			
		}
		
		this.button_delivery.addEventListener("click", Delivery_function.bind(this));
		
		function Delivery_function()
		{
			this.text_bg1.visible = true;
			this.Item_text.visible = true;
			this.Item_text.text = "Delivery - Does the delivery of the product meet customer satisfaction?";
			
		}
		
		this.button_support.addEventListener("click", Support_function.bind(this));
		
		function Support_function()
		{
			this.text_bg1.visible = true;
			this.Item_text.visible = true;
			this.Item_text.text = "Support - Has the customer received an adequate amount of support in choosing / purchasing the product?";
			
		}
		
		this.button_poor.addEventListener("click", Poor_function.bind(this));
		
		function Poor_function()
		{
			this.text_bg1.visible = true;
			this.Item_text.visible = true;
			this.Item_text.text = "Poor - The rating suggests much customer dissatisfaction with the service.";
			
		}
		
		this.button_average.addEventListener("click", Average_function.bind(this));
		
		function Average_function()
		{
			this.text_bg1.visible = true;
			this.Item_text.visible = true;
			this.Item_text.text = "Average - The rating suggests some satisfaction but room for improvement.";
			
		}
		
		this.button_excellent.addEventListener("click", Excellent_function.bind(this));
		
		function Excellent_function()
		{
			this.text_bg1.visible = true;
			this.Item_text.visible = true;
			this.Item_text.text = "Excellent - The rating suggests high customer satisfaction with the service.";
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// buttons_obj_
	this.buttons = new lib.Scene_1_buttons();
	this.buttons.name = "buttons";
	this.buttons.parent = this;
	this.buttons.setTransform(396.9,307.5,1,1,0,0,0,396.9,307.5);
	this.buttons.depth = 0;
	this.buttons.isAttachedToCamera = 0
	this.buttons.isAttachedToMask = 0
	this.buttons.layerDepth = 0
	this.buttons.layerIndex = 0
	this.buttons.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.buttons).wait(1));

	// dynamic_text_obj_
	this.dynamic_text = new lib.Scene_1_dynamic_text();
	this.dynamic_text.name = "dynamic_text";
	this.dynamic_text.parent = this;
	this.dynamic_text.setTransform(398.4,277.8,1,1,0,0,0,398.4,277.8);
	this.dynamic_text.depth = 0;
	this.dynamic_text.isAttachedToCamera = 0
	this.dynamic_text.isAttachedToMask = 0
	this.dynamic_text.layerDepth = 0
	this.dynamic_text.layerIndex = 1
	this.dynamic_text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.dynamic_text).wait(1));

	// table_image_obj_
	this.table_image = new lib.Scene_1_table_image();
	this.table_image.name = "table_image";
	this.table_image.parent = this;
	this.table_image.setTransform(398.8,242.2,1,1,0,0,0,398.8,242.2);
	this.table_image.depth = 0;
	this.table_image.isAttachedToCamera = 0
	this.table_image.isAttachedToMask = 0
	this.table_image.layerDepth = 0
	this.table_image.layerIndex = 2
	this.table_image.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.table_image).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(396.5,242.5,404.1,241.89999999999998);
// library properties:
lib.properties = {
	id: 'B459E4802A3A47C988A11F6CF58E183B',
	width: 799,
	height: 485,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"lm_u1_s2_p3_interactive_scorecard_atlas_.png", id:"lm_u1_s2_p3_interactive_scorecard_atlas_"}
	],
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
an.compositions['B459E4802A3A47C988A11F6CF58E183B'] = {
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