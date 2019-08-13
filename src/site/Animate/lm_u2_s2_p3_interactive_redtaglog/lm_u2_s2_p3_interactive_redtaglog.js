(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"lm_u2_s2_p3_interactive_redtaglog_atlas_", frames: [[0,0,6113,3171]]}
];


// symbols:



(lib.LM_U2_S2_P3_RTLog_Table = function() {
	this.initialize(ss["lm_u2_s2_p3_interactive_redtaglog_atlas_"]);
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
	this.shape.graphics.f("#98DBF3").s().p("A18ImIAAxLMAr5AAAIAARLg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_bg_Layer_1, null, null);


(lib.Scene_1_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.title_text = new cjs.Text("Action code:", "22px 'Open Sans'");
	this.title_text.name = "title_text";
	this.title_text.textAlign = "center";
	this.title_text.lineHeight = 32;
	this.title_text.lineWidth = 326;
	this.title_text.parent = this;
	this.title_text.setTransform(395.7308,209.4758,0.9984,0.9984);

	this.Item_text = new cjs.Text("text", "22px 'Open Sans'", "#333333");
	this.Item_text.name = "Item_text";
	this.Item_text.textAlign = "center";
	this.Item_text.lineHeight = 32;
	this.Item_text.lineWidth = 326;
	this.Item_text.parent = this;
	this.Item_text.setTransform(395.7308,252.3258,0.9984,0.9984);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Item_text},{t:this.title_text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_text, null, null);


(lib.Scene_1_table_image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// table_image
	this.instance = new lib.LM_U2_S2_P3_RTLog_Table();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.1309,0.1309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_table_image, null, null);


(lib.Button_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,219,243,0.027)").s().p("ApDDXQjwhZAAh+QAAh9DwhaQDxhZFSAAQFTAADxBZQDwBaAAB9QAAB+jwBZQjxBalTAAQlSAAjxhag");
	this.shape.setTransform(-6,-3.7,0.8781,0.8787);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-30.5,144,53.6);


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


(lib.Scene_1_text_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text_bg
	this.text_bg1 = new lib.text_bg();
	this.text_bg1.name = "text_bg1";
	this.text_bg1.parent = this;
	this.text_bg1.setTransform(398.3,267.55,1.1872,0.4702,0,0,0,0.4,0.7);

	this.timeline.addTween(cjs.Tween.get(this.text_bg1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_text_bg, null, null);


(lib.Scene_1_buttons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buttons
	this.button_5 = new lib.Button_1();
	this.button_5.name = "button_5";
	this.button_5.parent = this;
	this.button_5.setTransform(63.15,387.2,0.7063,0.9984,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.button_5, 0, 1, 1);

	this.button_4 = new lib.Button_1();
	this.button_4.name = "button_4";
	this.button_4.parent = this;
	this.button_4.setTransform(64.15,327.7,0.7063,0.9984,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.button_4, 0, 1, 1);

	this.button_3 = new lib.Button_1();
	this.button_3.name = "button_3";
	this.button_3.parent = this;
	this.button_3.setTransform(64.15,271.15,0.7063,0.9984,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.button_3, 0, 1, 1);

	this.button_1 = new lib.Button_1();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(59.1,153.1,0.6088,0.9002,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.button_2 = new lib.Button_1();
	this.button_2.name = "button_2";
	this.button_2.parent = this;
	this.button_2.setTransform(62.15,213,0.7063,0.9984,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.button_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_2},{t:this.button_1},{t:this.button_3},{t:this.button_4},{t:this.button_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_buttons, null, null);


// stage content:
(lib.lm_u2_s2_p3_interactive_redtaglog = function(mode,startPosition,loop) {
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
		this.button_2 = this.buttons.button_2;
		this.button_1 = this.buttons.button_1;
		this.button_3 = this.buttons.button_3;
		this.button_4 = this.buttons.button_4;
		this.button_5 = this.buttons.button_5;
		this.Item_text = this.text.Item_text;
		this.title_text = this.text.title_text;
		this.text_bg1 = this.text_bg.text_bg1;
		this.text_bg1.visible = false;
		this.Item_text.visible = false;
		this.title_text.visible = false;
		
		this.button_1.addEventListener("click", one_function.bind(this));
		
		function one_function()
		{
			this.text_bg1.visible = true;
			this.Item_text.visible = true;
			this.title_text.visible = true;
			this.Item_text.text = "1. Move to tag area";
			
		}
		
		this.button_2.addEventListener("click", two_function.bind(this));
		
		function two_function()
		{
			this.text_bg1.visible = true;
			this.Item_text.visible = true;
			this.title_text.visible = true;
			this.Item_text.text = "2. Return to area";
			
		}
		
		this.button_3.addEventListener("click", three_function.bind(this));
		
		function three_function()
		{
			this.text_bg1.visible = true;
			this.Item_text.visible = true;
			this.title_text.visible = true;
			this.Item_text.text = "3. Remove and dispose";
			
		}
		
		this.button_4.addEventListener("click", four_function.bind(this));
		
		function four_function()
		{
			this.text_bg1.visible = true;
			this.Item_text.visible = true;
			this.title_text.visible = true;
			this.Item_text.text = "4. Store distant to area";
			
		}
		
		this.button_5.addEventListener("click", five_function.bind(this));
		
		function five_function()
		{
			this.text_bg1.visible = true;
			this.Item_text.visible = true;
			this.title_text.visible = true;
			this.Item_text.text = "5. Other (state)";
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// buttons_obj_
	this.buttons = new lib.Scene_1_buttons();
	this.buttons.name = "buttons";
	this.buttons.parent = this;
	this.buttons.setTransform(58.8,267.9,1,1,0,0,0,58.8,267.9);
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
	this.text.setTransform(395.8,245.8,1,1,0,0,0,395.8,245.8);
	this.text.depth = 0;
	this.text.isAttachedToCamera = 0
	this.text.isAttachedToMask = 0
	this.text.layerDepth = 0
	this.text.layerIndex = 1
	this.text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// text_bg_obj_
	this.text_bg = new lib.Scene_1_text_bg();
	this.text_bg.name = "text_bg";
	this.text_bg.parent = this;
	this.text_bg.setTransform(397.9,267.2,1,1,0,0,0,397.9,267.2);
	this.text_bg.depth = 0;
	this.text_bg.isAttachedToCamera = 0
	this.text_bg.isAttachedToMask = 0
	this.text_bg.layerDepth = 0
	this.text_bg.layerIndex = 2
	this.text_bg.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text_bg).wait(1));

	// table_image_obj_
	this.table_image = new lib.Scene_1_table_image();
	this.table_image.name = "table_image";
	this.table_image.parent = this;
	this.table_image.setTransform(399.9,207.5,1,1,0,0,0,399.9,207.5);
	this.table_image.depth = 0;
	this.table_image.isAttachedToCamera = 0
	this.table_image.isAttachedToMask = 0
	this.table_image.layerDepth = 0
	this.table_image.layerIndex = 3
	this.table_image.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.table_image).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,207.5,400,207.60000000000002);
// library properties:
lib.properties = {
	id: 'B459E4802A3A47C988A11F6CF58E183B',
	width: 800,
	height: 415,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"lm_u2_s2_p3_interactive_redtaglog_atlas_.png", id:"lm_u2_s2_p3_interactive_redtaglog_atlas_"}
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