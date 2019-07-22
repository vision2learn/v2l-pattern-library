(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ba_u2_s1_p3_positive_phone_atlas_", frames: [[270,607,216,234],[0,607,268,274],[0,0,775,605]]}
];


// symbols:



(lib.ba_u1_s1_p3_positive_rep = function() {
	this.initialize(ss["ba_u2_s1_p3_positive_phone_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ba_u1_s1_p3_positive_speech = function() {
	this.initialize(ss["ba_u2_s1_p3_positive_phone_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ba_u2_s1_p3_positive_phone_1 = function() {
	this.initialize(ss["ba_u2_s1_p3_positive_phone_atlas_"]);
	this.gotoAndStop(2);
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


(lib.speech_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ba_u1_s1_p3_positive_speech();
	this.instance.parent = this;
	this.instance.setTransform(134,-137,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.speech_Layer_1, null, null);


(lib.Scene_1_phone_image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// phone_image
	this.instance = new lib.ba_u2_s1_p3_positive_phone_1();
	this.instance.parent = this;
	this.instance.setTransform(-3,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_phone_image, null, null);


(lib.Scene_1_dynamic_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dynamic_text
	this.Item_text = new cjs.Text("text", "16px 'Open Sans'");
	this.Item_text.name = "Item_text";
	this.Item_text.textAlign = "center";
	this.Item_text.lineHeight = 24;
	this.Item_text.lineWidth = 230;
	this.Item_text.parent = this;
	this.Item_text.setTransform(629.3425,271.875,0.9984,0.9984);

	this.timeline.addTween(cjs.Tween.get(this.Item_text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_dynamic_text, null, null);


(lib.Rep_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ba_u1_s1_p3_positive_rep();
	this.instance.parent = this;
	this.instance.setTransform(-108,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Rep_Layer_1, null, null);


(lib.Button_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,219,243,0.027)").s().p("ApDDXQjwhZAAh+QAAh9DwhaQDxhZFSAAQFTAADxBZQDwBaAAB9QAAB+jwBZQjxBalTAAQlSAAjxhag");
	this.shape.setTransform(0,-3.8,0.5603,1.0782);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,-36.7,91.9,65.80000000000001);


(lib.speech = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.speech_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.speech, new cjs.Rectangle(-134,-137,268,274), null);


(lib.Scene_1_speech_image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// speech_image
	this.speech = new lib.speech();
	this.speech.name = "speech";
	this.speech.parent = this;
	this.speech.setTransform(632,322,1,1,29.9992);

	this.timeline.addTween(cjs.Tween.get(this.speech).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_speech_image, null, null);


(lib.Scene_1_buttons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buttons
	this.button_hide = new lib.Button_1();
	this.button_hide.name = "button_hide";
	this.button_hide.parent = this;
	this.button_hide.setTransform(570.3,481.55,0.6088,0.9002,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_hide, 0, 1, 1);

	this.button_two = new lib.Button_1();
	this.button_two.name = "button_two";
	this.button_two.parent = this;
	this.button_two.setTransform(428.75,206.4,0.6088,0.9002,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_two, 0, 1, 1);

	this.button_one = new lib.Button_1();
	this.button_one.name = "button_one";
	this.button_one.parent = this;
	this.button_one.setTransform(495.95,229.2,0.6088,0.9002,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_one, 0, 1, 1);

	this.button_six = new lib.Button_1();
	this.button_six.name = "button_six";
	this.button_six.parent = this;
	this.button_six.setTransform(266.75,384.6,0.6088,0.9002,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_six, 0, 1, 1);

	this.button_three = new lib.Button_1();
	this.button_three.name = "button_three";
	this.button_three.parent = this;
	this.button_three.setTransform(364,218.2,0.6088,0.9002,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_three, 0, 1, 1);

	this.button_four = new lib.Button_1();
	this.button_four.name = "button_four";
	this.button_four.parent = this;
	this.button_four.setTransform(303.3,255.85,0.6088,0.9002,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_four, 0, 1, 1);

	this.button_five = new lib.Button_1();
	this.button_five.name = "button_five";
	this.button_five.parent = this;
	this.button_five.setTransform(270.35,317.7,0.6088,0.9002,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_five, 0, 1, 1);

	this.button_seven = new lib.Button_1();
	this.button_seven.name = "button_seven";
	this.button_seven.parent = this;
	this.button_seven.setTransform(291.85,447.8,0.6088,0.9002,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_seven, 0, 1, 1);

	this.button_eight = new lib.Button_1();
	this.button_eight.name = "button_eight";
	this.button_eight.parent = this;
	this.button_eight.setTransform(343.85,494.2,0.6088,0.9002,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_eight, 0, 1, 1);

	this.button_zero = new lib.Button_1();
	this.button_zero.name = "button_zero";
	this.button_zero.parent = this;
	this.button_zero.setTransform(483.6,497.8,0.6088,0.9002,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_zero, 0, 1, 1);

	this.button_nine = new lib.Button_1();
	this.button_nine.name = "button_nine";
	this.button_nine.parent = this;
	this.button_nine.setTransform(411.7,514.95,0.6088,0.9002,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_nine, 0, 1, 1);

	this.button_phoneExit = new lib.Button_1();
	this.button_phoneExit.name = "button_phoneExit";
	this.button_phoneExit.parent = this;
	this.button_phoneExit.setTransform(364,219.9,0.6088,0.9002,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_phoneExit, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_phoneExit},{t:this.button_nine},{t:this.button_zero},{t:this.button_eight},{t:this.button_seven},{t:this.button_five},{t:this.button_four},{t:this.button_three},{t:this.button_six},{t:this.button_one},{t:this.button_two},{t:this.button_hide}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_buttons, null, null);


(lib.Rep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Rep_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Rep, new cjs.Rectangle(-108,-117,216,234), null);


(lib.Scene_1_rep_image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rep_image
	this.rep = new lib.Rep();
	this.rep.name = "rep";
	this.rep.parent = this;
	this.rep.setTransform(418,368);

	this.timeline.addTween(cjs.Tween.get(this.rep).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_rep_image, null, null);


// stage content:
(lib.ba_u2_s1_p3_positive_phone = function(mode,startPosition,loop) {
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
		this.button_phoneExit = this.buttons.button_phoneExit;
		this.button_nine = this.buttons.button_nine;
		this.button_zero = this.buttons.button_zero;
		this.button_eight = this.buttons.button_eight;
		this.button_seven = this.buttons.button_seven;
		this.button_five = this.buttons.button_five;
		this.button_four = this.buttons.button_four;
		this.button_three = this.buttons.button_three;
		this.button_six = this.buttons.button_six;
		this.button_one = this.buttons.button_one;
		this.button_two = this.buttons.button_two;
		this.button_hide = this.buttons.button_hide;
		this.Item_text = this.dynamic_text.Item_text;
		this.speech = this.speech_image.speech;
		this.rep = this.rep_image.rep;
		this.speech.visible = false;
		this.Item_text.visible = false;
		this.rep.visible = false;
		
		this.button_hide.addEventListener("click", Hide_function.bind(this));
		
		function Hide_function()
		{
			this.speech.visible = false;
			this.rep.visible = false;
			this.Item_text.visible = false;
		}
		
		
		this.button_one.addEventListener("click", One_function.bind(this));
		
		function One_function()
		{
			this.speech.visible = true;
			this.rep.visible = true;
			this.Item_text.visible = true;
			this.Item_text.text = "Have a positive frame of mind.";
			
		}
		
		this.button_two.addEventListener("click", Two_function.bind(this));
		
		function Two_function()
		{
			this.speech.visible = true;
			this.rep.visible = true;
			this.Item_text.visible = true;
			this.Item_text.text = "Always clearly identify yourself and your organisation.";
			
		}
		
		this.button_three.addEventListener("click", Three_function.bind(this));
		
		function Three_function()
		{
			this.speech.visible = true;
			this.rep.visible = true;
			this.Item_text.visible = true;
			this.Item_text.text = "Always seek to identify the caller or the person you have called. Where possible, use the person's name.";
			
		}
		
		this.button_four.addEventListener("click", Four_function.bind(this));
		
		function Four_function()
		{
			this.speech.visible = true;
			this.rep.visible = true;
			this.Item_text.visible = true;
			this.Item_text.text = "Do not use slang words, and do not use technical jargon – unless it is necessary.";
			
		}
		
		this.button_five.addEventListener("click", Five_function.bind(this));
		
		function Five_function()
		{
			this.speech.visible = true;
			this.rep.visible = true;
			this.Item_text.visible = true;
			this.Item_text.text = "Speak naturally at a sensible speed. Don't try to change your accent. If you cut out slang and speak at a reasonable speed, people will understand what you're saying.";
			
		}
		
		this.button_six.addEventListener("click", Six_function.bind(this));
		
		function Six_function()
		{
			this.speech.visible = true;
			this.rep.visible = true;
			this.Item_text.visible = true;
			this.Item_text.text = "When providing or receiving information containing numbers or statistics, always double-check them. Give figures in pairs where possible.";
			
		}
		
		this.button_seven.addEventListener("click", Seven_function.bind(this));
		
		function Seven_function()
		{
			this.speech.visible = true;
			this.rep.visible = true;
			this.Item_text.visible = true;
			this.Item_text.text = "Always seek clarification in a polite manner and be willing to repeat information for the recipient.";
			
		}
		
		this.button_eight.addEventListener("click", Eight_function.bind(this));
		
		function Eight_function()
		{
			this.speech.visible = true;
			this.rep.visible = true;
			this.Item_text.visible = true;
			this.Item_text.text = "Bring any calls you make to a conclusion once the purpose of the call has been achieved.";
			
		}
		
		this.button_nine.addEventListener("click", Nine_function.bind(this));
		
		function Nine_function()
		{
			this.speech.visible = true;
			this.rep.visible = true;
			this.Item_text.visible = true;
			this.Item_text.text = "Summarise the points you made and be willing to help a caller summarise their points.";
			
		}
		
		this.button_zero.addEventListener("click", Zero_function.bind(this));
		
		function Zero_function()
		{
			this.speech.visible = true;
			this.rep.visible = true;
			this.Item_text.visible = true;
			this.Item_text.text = "Thank the person you have called for their time.";
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// buttons_obj_
	this.buttons = new lib.Scene_1_buttons();
	this.buttons.name = "buttons";
	this.buttons.parent = this;
	this.buttons.setTransform(418.4,357.2,1,1,0,0,0,418.4,357.2);
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
	this.dynamic_text.setTransform(629.4,335.8,1,1,0,0,0,629.4,335.8);
	this.dynamic_text.depth = 0;
	this.dynamic_text.isAttachedToCamera = 0
	this.dynamic_text.isAttachedToMask = 0
	this.dynamic_text.layerDepth = 0
	this.dynamic_text.layerIndex = 1
	this.dynamic_text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.dynamic_text).wait(1));

	// speech_image_obj_
	this.speech_image = new lib.Scene_1_speech_image();
	this.speech_image.name = "speech_image";
	this.speech_image.parent = this;
	this.speech_image.setTransform(632,322,1,1,0,0,0,632,322);
	this.speech_image.depth = 0;
	this.speech_image.isAttachedToCamera = 0
	this.speech_image.isAttachedToMask = 0
	this.speech_image.layerDepth = 0
	this.speech_image.layerIndex = 2
	this.speech_image.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.speech_image).wait(1));

	// rep_image_obj_
	this.rep_image = new lib.Scene_1_rep_image();
	this.rep_image.name = "rep_image";
	this.rep_image.parent = this;
	this.rep_image.setTransform(418,368,1,1,0,0,0,418,368);
	this.rep_image.depth = 0;
	this.rep_image.isAttachedToCamera = 0
	this.rep_image.isAttachedToMask = 0
	this.rep_image.layerDepth = 0
	this.rep_image.layerIndex = 3
	this.rep_image.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.rep_image).wait(1));

	// phone_image_obj_
	this.phone_image = new lib.Scene_1_phone_image();
	this.phone_image.name = "phone_image";
	this.phone_image.parent = this;
	this.phone_image.setTransform(384.5,304.5,1,1,0,0,0,384.5,304.5);
	this.phone_image.depth = 0;
	this.phone_image.isAttachedToCamera = 0
	this.phone_image.isAttachedToMask = 0
	this.phone_image.layerDepth = 0
	this.phone_image.layerIndex = 4
	this.phone_image.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.phone_image).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(384.5,304.5,432.1,302.5);
// library properties:
lib.properties = {
	id: 'B459E4802A3A47C988A11F6CF58E183B',
	width: 775,
	height: 605,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ba_u2_s1_p3_positive_phone_atlas_.png?1563205281531", id:"ba_u2_s1_p3_positive_phone_atlas_"}
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