(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ba_u2_s6_p1_travel_part_a_atlas_", frames: [[0,0,800,800]]}
];


// symbols:



(lib.ba_u2_s6_p1_travel_misunderstandings = function() {
	this.initialize(ss["ba_u2_s6_p1_travel_part_a_atlas_"]);
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


(lib.Scene_1_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.Item_text = new cjs.Text("text", "18px 'Open Sans'");
	this.Item_text.name = "Item_text";
	this.Item_text.textAlign = "center";
	this.Item_text.lineHeight = 27;
	this.Item_text.lineWidth = 237;
	this.Item_text.parent = this;
	this.Item_text.setTransform(581.7504,441.1101,0.9984,0.9984,-9.6996);

	this.timeline.addTween(cjs.Tween.get(this.Item_text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_text, null, null);


(lib.Scene_1_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// background
	this.instance = new lib.ba_u2_s6_p1_travel_misunderstandings();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_background, null, null);


(lib.Button_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,219,243,0.027)").s().p("ApDDXQjwhZAAh+QAAh9DwhaQDxhZFSAAQFTAADxBZQDwBaAAB9QAAB+jwBZQjxBalTAAQlSAAjxhag");
	this.shape.setTransform(0,-3.8,0.5603,1.0782);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,-36.7,91.9,65.80000000000001);


(lib.Scene_1_buttons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buttons
	this.button_nights = new lib.Button_1();
	this.button_nights.name = "button_nights";
	this.button_nights.parent = this;
	this.button_nights.setTransform(675.75,150.95,2.1775,3.1089);
	new cjs.ButtonHelper(this.button_nights, 0, 1, 1);

	this.button_times = new lib.Button_1();
	this.button_times.name = "button_times";
	this.button_times.parent = this;
	this.button_times.setTransform(381,101.2,1.5968,2.1522,0,0,0,0.2,0.2);
	new cjs.ButtonHelper(this.button_times, 0, 1, 1);

	this.button_transport = new lib.Button_1();
	this.button_transport.name = "button_transport";
	this.button_transport.parent = this;
	this.button_transport.setTransform(118.7,383.3,2.5721,2.1522,0,0,0,0.2,0.2);
	new cjs.ButtonHelper(this.button_transport, 0, 1, 1);

	this.button_similar = new lib.Button_1();
	this.button_similar.name = "button_similar";
	this.button_similar.parent = this;
	this.button_similar.setTransform(267.35,491.75,1.9997,1.1324,0,0,0,0.4,0.1);
	new cjs.ButtonHelper(this.button_similar, 0, 1, 1);

	this.button_hide = new lib.Button_1();
	this.button_hide.name = "button_hide";
	this.button_hide.parent = this;
	this.button_hide.setTransform(569.5,341.65,1.8316,1.2424,-8.2651,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.button_hide, 0, 1, 1);

	this.button_same = new lib.Button_1();
	this.button_same.name = "button_same";
	this.button_same.parent = this;
	this.button_same.setTransform(174,645.35,2.5721,1.4193,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.button_same, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_same},{t:this.button_hide},{t:this.button_similar},{t:this.button_transport},{t:this.button_times},{t:this.button_nights}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_buttons, null, null);


// stage content:
(lib.ba_u2_s6_p1_travel_part_a = function(mode,startPosition,loop) {
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
		this.button_same = this.buttons.button_same;
		this.button_hide = this.buttons.button_hide;
		this.button_similar = this.buttons.button_similar;
		this.button_transport = this.buttons.button_transport;
		this.button_times = this.buttons.button_times;
		this.button_nights = this.buttons.button_nights;
		this.Item_text = this.text.Item_text;
		this.Item_text.text = "There are many possible misunderstandings that may occur with travel arrangements. \n \n Select various items within this image to see examples.";
		
		
		this.button_hide.addEventListener("click", Hide_function.bind(this));
		
		function Hide_function()
		{
			this.Item_text.visible = false;
		}
		
		
		this.button_same.addEventListener("click", Same_function.bind(this));
		
		function Same_function()
		{
			this.Item_text.visible = true;
			this.Item_text.text = "Places with the same names. \n \n For example Sunderland is a city in North East England, but there is also a village called Sunderland in the Lake District.";
			
		}
		
		this.button_similar.addEventListener("click", Similar_function.bind(this));
		
		function Similar_function()
		{
			this.Item_text.visible = true;
			this.Item_text.text = "Places with similar sounding names. \n \n For example, Harrow and Jarrow. Harrow is a part of Greater London but Jarrow is a town in North East England.";
		}
		
		this.button_times.addEventListener("click", Times_function.bind(this));
		
		function Times_function()
		{
			this.Item_text.visible = true;
			this.Item_text.text = "Confusion over times and dates. \n \n For example, 11.30 could refer to 11.30 am, 11.30 pm, or even the 30th of November.";
		}
		
		this.button_transport.addEventListener("click", Transport_function.bind(this));
		
		function Transport_function()
		{
			this.Item_text.visible = true;
			this.Item_text.text = "Confusion over modes of transport. \n\n In an extreme case, a taxi could refer to a car driven taxi, or even a small boat/ferry (as in a water taxi).";
		}
		
		this.button_nights.addEventListener("click", Nights_function.bind(this));
		
		function Nights_function()
		{
			this.Item_text.visible = true;
			this.Item_text.text = "Confusion over the number of nights of a stay. \n\n For example, 3 days in a b&b could refer to 3 nights' stay or 2 nights and three breakfasts.";
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// buttons_obj_
	this.buttons = new lib.Scene_1_buttons();
	this.buttons.name = "buttons";
	this.buttons.parent = this;
	this.buttons.setTransform(387.9,354.1,1,1,0,0,0,387.9,354.1);
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
	this.text.setTransform(604.6,574.3,1,1,0,0,0,604.6,574.3);
	this.text.depth = 0;
	this.text.isAttachedToCamera = 0
	this.text.isAttachedToMask = 0
	this.text.layerDepth = 0
	this.text.layerIndex = 1
	this.text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// background_obj_
	this.background = new lib.Scene_1_background();
	this.background.name = "background";
	this.background.parent = this;
	this.background.setTransform(400,400,1,1,0,0,0,400,400);
	this.background.depth = 0;
	this.background.isAttachedToCamera = 0
	this.background.isAttachedToMask = 0
	this.background.layerDepth = 0
	this.background.layerIndex = 2
	this.background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,400,400,400);
// library properties:
lib.properties = {
	id: '0076B3A425734F8398AF8719A7CB7CA4',
	width: 800,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ba_u2_s6_p1_travel_part_a_atlas_.png?1563414053680", id:"ba_u2_s6_p1_travel_part_a_atlas_"}
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
an.compositions['0076B3A425734F8398AF8719A7CB7CA4'] = {
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