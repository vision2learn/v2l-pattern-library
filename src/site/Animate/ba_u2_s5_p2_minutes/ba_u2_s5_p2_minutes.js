(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ba_u2_s5_p2_minutes_atlas_", frames: [[1366,0,680,800],[0,0,681,801],[683,0,681,801],[1366,802,333,420]]}
];


// symbols:



(lib.ba_s5_p2_min_bg = function() {
	this.initialize(ss["ba_u2_s5_p2_minutes_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ba_s5_p2_min_example_1 = function() {
	this.initialize(ss["ba_u2_s5_p2_minutes_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ba_s5_p2_min_example_2 = function() {
	this.initialize(ss["ba_u2_s5_p2_minutes_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ba_u2_s3_p2_tidy_clipboard = function() {
	this.initialize(ss["ba_u2_s5_p2_minutes_atlas_"]);
	this.gotoAndStop(3);
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
	this.Item_text = new cjs.Text("text", "16px 'Open Sans'", "#151718");
	this.Item_text.name = "Item_text";
	this.Item_text.textAlign = "center";
	this.Item_text.lineHeight = 24;
	this.Item_text.lineWidth = 166;
	this.Item_text.parent = this;
	this.Item_text.setTransform(104.2577,205.631,0.9984,0.9984);

	this.timeline.addTween(cjs.Tween.get(this.Item_text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_text, null, null);


(lib.Scene_1_clipboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// clipboard
	this.instance = new lib.ba_u2_s3_p2_tidy_clipboard();
	this.instance.parent = this;
	this.instance.setTransform(-29,116,0.8018,0.8558);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_clipboard, null, null);


(lib.Scene_1_BG_image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BG_image
	this.instance = new lib.ba_s5_p2_min_bg();
	this.instance.parent = this;
	this.instance.setTransform(2,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_BG_image, null, null);


(lib.example_Titles_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ba_s5_p2_min_example_1();
	this.instance.parent = this;
	this.instance.setTransform(-353,-384,0.9993,0.9987);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.example_Titles_Layer_1, null, null);


(lib.example_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ba_s5_p2_min_example_2();
	this.instance.parent = this;
	this.instance.setTransform(-353,-384,0.9993,0.9987);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.example_Layer_1, null, null);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,219,243,0.027)").s().p("AyjE9IAAp5MAlHAAAIAAJ5g");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.7,-31.6,237.5,63.3);


(lib.Scene_1_buttons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buttons
	this.hideExample_button = new lib.button();
	this.hideExample_button.name = "hideExample_button";
	this.hideExample_button.parent = this;
	this.hideExample_button.setTransform(518.35,704.35,1.1386,2.7422,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.hideExample_button, 0, 1, 1);

	this.example_button = new lib.button();
	this.example_button.name = "example_button";
	this.example_button.parent = this;
	this.example_button.setTransform(405.5,305.25,1.8118,8.6769,0,0,0,-8.1,0.4);
	new cjs.ButtonHelper(this.example_button, 0, 1, 1);

	this.points_button = new lib.button();
	this.points_button.name = "points_button";
	this.points_button.parent = this;
	this.points_button.setTransform(318.45,184.45,0.5547,3.0485,-21.4741,0,0,0.5,0.3);
	new cjs.ButtonHelper(this.points_button, 0, 1, 1);

	this.easy_button = new lib.button();
	this.easy_button.name = "easy_button";
	this.easy_button.parent = this;
	this.easy_button.setTransform(544.3,314.85,0.6955,2.2375,-29.9992,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.easy_button, 0, 1, 1);

	this.checked_button = new lib.button();
	this.checked_button.name = "checked_button";
	this.checked_button.parent = this;
	this.checked_button.setTransform(511.4,118.85,0.7855,2.2375,-29.999,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.checked_button, 0, 1, 1);

	this.chairman_button = new lib.button();
	this.chairman_button.name = "chairman_button";
	this.chairman_button.parent = this;
	this.chairman_button.setTransform(150.45,596.9,0.8514,5.5647,-29.9991,0,0,-8.3,0.2);
	new cjs.ButtonHelper(this.chairman_button, 0, 1, 1);

	this.clock_button = new lib.button();
	this.clock_button.name = "clock_button";
	this.clock_button.parent = this;
	this.clock_button.setTransform(111.55,85.95,0.608,2.3732,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.clock_button, 0, 1, 1);

	this.note_button = new lib.button();
	this.note_button.name = "note_button";
	this.note_button.parent = this;
	this.note_button.setTransform(588.1,503.6,0.4555,2.3731,44.9995,0,0,0.3,0.1);
	new cjs.ButtonHelper(this.note_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.note_button},{t:this.clock_button},{t:this.chairman_button},{t:this.checked_button},{t:this.easy_button},{t:this.points_button},{t:this.example_button},{t:this.hideExample_button}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_buttons, null, null);


(lib.example_Titles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.example_Titles_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(-12.8,16,1,1,0,0,0,-12.8,16);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.example_Titles, new cjs.Rectangle(-353,-384,680.5,800), null);


(lib.example = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.example_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(-12.8,16,1,1,0,0,0,-12.8,16);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.example, new cjs.Rectangle(-353,-384,680.5,800), null);


(lib.Scene_1_example_Titles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// example_Titles
	this.titles = new lib.example_Titles();
	this.titles.name = "titles";
	this.titles.parent = this;
	this.titles.setTransform(431,303,0.865,0.865);

	this.timeline.addTween(cjs.Tween.get(this.titles).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_example_Titles, null, null);


(lib.Scene_1_Example = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Example
	this.example = new lib.example();
	this.example.name = "example";
	this.example.parent = this;
	this.example.setTransform(431.6,303.35,0.865,0.8645,0,0,0,0.7,0.4);

	this.timeline.addTween(cjs.Tween.get(this.example).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Example, null, null);


// stage content:
(lib.ba_u2_s5_p2_minutes = function(mode,startPosition,loop) {
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
		this.note_button = this.buttons.note_button;
		this.clock_button = this.buttons.clock_button;
		this.chairman_button = this.buttons.chairman_button;
		this.checked_button = this.buttons.checked_button;
		this.easy_button = this.buttons.easy_button;
		this.points_button = this.buttons.points_button;
		this.example_button = this.buttons.example_button;
		this.hideExample_button = this.buttons.hideExample_button;
		this.Item_text = this.text.Item_text;
		this.example = this.Example.example;
		this.titles = this.example_Titles.titles;
		this.example.visible = false;
		this.titles.visible = false;
		this.example_button.visible = false;
		this.Item_text.text = "Select the clock, the person and the items on the table to learn more";
		
		
		this.note_button.addEventListener("click", Note_function.bind(this));
		
		function Note_function()
		{	
			this.Item_text.text = "The minutes should be brief and written in note form.";
			this.example.visible = false;
			this.titles.visible = false;
			this.example_button.visible = false;
		}
		
		this.easy_button.addEventListener("click", Easy_function.bind(this));
		
		function Easy_function()
		{	
			this.Item_text.text = "The minutes should be easy to follow for non-attendees.";
			this.example.visible = false;
			this.titles.visible = false;
			this.example_button.visible = false;
		}
		
		this.checked_button.addEventListener("click", Checked_function.bind(this));
		
		function Checked_function()
		{	
			this.Item_text.text = "In regular meeting cycles the minutes of the previous meeting can be checked for accuracy and approved.";
			this.example.visible = false;
			this.titles.visible = false;
			this.example_button.visible = false;
		}
		
		this.clock_button.addEventListener("click", Clock_function.bind(this));
		
		function Clock_function()
		{	
			this.Item_text.text = "The minutes should be delivered promptly as this encourages people to take appropriate action while the meeting is fresh in their minds.";
			this.example.visible = false;
			this.titles.visible = false;
			this.example_button.visible = false;
		}
		
		this.chairman_button.addEventListener("click", Chairman_function.bind(this));
		
		function Chairman_function()
		{	
			this.Item_text.text = "Any uncertainty about the record should be clarified with the Chairperson as soon as possible.";
			this.example.visible = false;
			this.titles.visible = false;
			this.example_button.visible = false;
		}
		
		this.points_button.addEventListener("click", Points_function.bind(this));
		
		function Points_function()
		{	
			this.Item_text.text = "Although meetings vary in content, there are some points that tend to be recorded, no matter what subject the meeting is about. Select on the document to see an example.";
			this.example.visible = false;
			this.titles.visible = true;
			this.example_button.visible = true;
		}
		
		this.example_button.addEventListener("click", Example_function.bind(this));
		
		function Example_function()
		{	
			this.Item_text.text = "Here is an example of minutes of a meeting.  Select the glasses below to stop displaying these minutes.";
			this.example.visible = true;
			this.titles.visible = true;
			this.example_button.visible = false;
		}
		
		this.hideExample_button.addEventListener("click", HideExample_function.bind(this));
		
		function HideExample_function()
		{	
			this.Item_text.text = "Select the clock, the person and the items on the table to learn more";
			this.example.visible = false;
			this.titles.visible = false;
			this.example_button.visible = false;
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// buttons_obj_
	this.buttons = new lib.Scene_1_buttons();
	this.buttons.name = "buttons";
	this.buttons.parent = this;
	this.buttons.setTransform(329.9,403.2,1,1,0,0,0,329.9,403.2);
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
	this.text.setTransform(104.3,311.4,1,1,0,0,0,104.3,311.4);
	this.text.depth = 0;
	this.text.isAttachedToCamera = 0
	this.text.isAttachedToMask = 0
	this.text.layerDepth = 0
	this.text.layerIndex = 1
	this.text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// clipboard_obj_
	this.clipboard = new lib.Scene_1_clipboard();
	this.clipboard.name = "clipboard";
	this.clipboard.parent = this;
	this.clipboard.setTransform(104.5,295.7,1,1,0,0,0,104.5,295.7);
	this.clipboard.depth = 0;
	this.clipboard.isAttachedToCamera = 0
	this.clipboard.isAttachedToMask = 0
	this.clipboard.layerDepth = 0
	this.clipboard.layerIndex = 2
	this.clipboard.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.clipboard).wait(1));

	// Example_obj_
	this.Example = new lib.Scene_1_Example();
	this.Example.name = "Example";
	this.Example.parent = this;
	this.Example.setTransform(419.9,316.8,1,1,0,0,0,419.9,316.8);
	this.Example.depth = 0;
	this.Example.isAttachedToCamera = 0
	this.Example.isAttachedToMask = 0
	this.Example.layerDepth = 0
	this.Example.layerIndex = 3
	this.Example.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Example).wait(1));

	// example_Titles_obj_
	this.example_Titles = new lib.Scene_1_example_Titles();
	this.example_Titles.name = "example_Titles";
	this.example_Titles.parent = this;
	this.example_Titles.setTransform(419.9,316.8,1,1,0,0,0,419.9,316.8);
	this.example_Titles.depth = 0;
	this.example_Titles.isAttachedToCamera = 0
	this.example_Titles.isAttachedToMask = 0
	this.example_Titles.layerDepth = 0
	this.example_Titles.layerIndex = 4
	this.example_Titles.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.example_Titles).wait(1));

	// BG_image_obj_
	this.BG_image = new lib.Scene_1_BG_image();
	this.BG_image.name = "BG_image";
	this.BG_image.parent = this;
	this.BG_image.setTransform(342,401,1,1,0,0,0,342,401);
	this.BG_image.depth = 0;
	this.BG_image.isAttachedToCamera = 0
	this.BG_image.isAttachedToMask = 0
	this.BG_image.layerDepth = 0
	this.BG_image.layerIndex = 5
	this.BG_image.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.BG_image).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(311,370.9,403.29999999999995,430.1);
// library properties:
lib.properties = {
	id: '786DA3F1042B4C23A41F4E90074ECD41',
	width: 680,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ba_u2_s5_p2_minutes_atlas_.png?1563782619054", id:"ba_u2_s5_p2_minutes_atlas_"}
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