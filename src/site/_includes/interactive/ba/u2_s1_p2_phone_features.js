(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ba_u2_s1_p2_phone_features_atlas_", frames: [[0,0,836,801]]}
];


// symbols:



(lib.ba_u2_p2_phone_sml = function() {
	this.initialize(ss["ba_u2_s1_p2_phone_features_atlas_"]);
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


(lib.Scene_1_dynamic_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dynamic_text
	this.Item_text = new cjs.Text("text", "16px 'Open Sans'");
	this.Item_text.name = "Item_text";
	this.Item_text.textAlign = "center";
	this.Item_text.lineHeight = 24;
	this.Item_text.lineWidth = 367;
	this.Item_text.parent = this;
	this.Item_text.setTransform(492.8728,78.2573,0.9575,0.9575);

	this.timeline.addTween(cjs.Tween.get(this.Item_text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_dynamic_text, null, null);


(lib.Scene_1_ba_u2_p2_phone_bg_svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ba_u2_p2_phone_bg_svg
	this.instance = new lib.ba_u2_p2_phone_sml();
	this.instance.parent = this;
	this.instance.setTransform(0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_ba_u2_p2_phone_bg_svg, null, null);


(lib.Button_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,219,243,0.027)").s().p("ApDDXQjwhZAAh+QAAh9DwhaQDxhZFSAAQFTAADxBZQDwBaAAB9QAAB+jwBZQjxBalTAAQlSAAjxhag");
	this.shape.setTransform(0,0,0.7311,0.8115);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.9,-24.7,119.9,49.5);


(lib.Scene_1_buttons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buttons
	this.button_hide = new lib.Button_1();
	this.button_hide.name = "button_hide";
	this.button_hide.parent = this;
	this.button_hide.setTransform(495.05,309.15,0.3292,0.8633,0,0,0,0.3,0.1);
	new cjs.ButtonHelper(this.button_hide, 0, 1, 1);

	this.button_wait = new lib.Button_1();
	this.button_wait.name = "button_wait";
	this.button_wait.parent = this;
	this.button_wait.setTransform(617,223.25,0.5838,0.6746,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_wait, 0, 1, 1);

	this.button_bar = new lib.Button_1();
	this.button_bar.name = "button_bar";
	this.button_bar.parent = this;
	this.button_bar.setTransform(492.7,223.25,0.5838,0.6274,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_bar, 0, 1, 1);

	this.button_back = new lib.Button_1();
	this.button_back.name = "button_back";
	this.button_back.parent = this;
	this.button_back.setTransform(678.75,593.6,0.5838,0.8633,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_back, 0, 1, 1);

	this.button_speed = new lib.Button_1();
	this.button_speed.name = "button_speed";
	this.button_speed.parent = this;
	this.button_speed.setTransform(395.2,415.85,0.5838,0.8633,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_speed, 0, 1, 1);

	this.button_hold = new lib.Button_1();
	this.button_hold.name = "button_hold";
	this.button_hold.parent = this;
	this.button_hold.setTransform(678.75,418.75,0.5838,0.8633,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_hold, 0, 1, 1);

	this.button_conference = new lib.Button_1();
	this.button_conference.name = "button_conference";
	this.button_conference.parent = this;
	this.button_conference.setTransform(678.75,477,0.5838,0.8633,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_conference, 0, 1, 1);

	this.button_transfer = new lib.Button_1();
	this.button_transfer.name = "button_transfer";
	this.button_transfer.parent = this;
	this.button_transfer.setTransform(678.75,536.35,0.5838,0.8633,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_transfer, 0, 1, 1);

	this.button_headset = new lib.Button_1();
	this.button_headset.name = "button_headset";
	this.button_headset.parent = this;
	this.button_headset.setTransform(586.9,651.9,0.5838,0.8633,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_headset, 0, 1, 1);

	this.button_volume = new lib.Button_1();
	this.button_volume.name = "button_volume";
	this.button_volume.parent = this;
	this.button_volume.setTransform(495,651.9,0.5838,0.8633,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_volume, 0, 1, 1);

	this.button_mute = new lib.Button_1();
	this.button_mute.name = "button_mute";
	this.button_mute.parent = this;
	this.button_mute.setTransform(392.3,651.9,0.5838,0.8633,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_mute, 0, 1, 1);

	this.button_speaker = new lib.Button_1();
	this.button_speaker.name = "button_speaker";
	this.button_speaker.parent = this;
	this.button_speaker.setTransform(308.35,651.9,0.5838,0.8633,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_speaker, 0, 1, 1);

	this.button_redial = new lib.Button_1();
	this.button_redial.name = "button_redial";
	this.button_redial.parent = this;
	this.button_redial.setTransform(308.35,593.6,0.5838,0.8633,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_redial, 0, 1, 1);

	this.button_callLog = new lib.Button_1();
	this.button_callLog.name = "button_callLog";
	this.button_callLog.parent = this;
	this.button_callLog.setTransform(308.35,536.35,0.5838,0.8633,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_callLog, 0, 1, 1);

	this.button_contacts = new lib.Button_1();
	this.button_contacts.name = "button_contacts";
	this.button_contacts.parent = this;
	this.button_contacts.setTransform(308.35,477,0.5838,0.8633,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_contacts, 0, 1, 1);

	this.button_menu = new lib.Button_1();
	this.button_menu.name = "button_menu";
	this.button_menu.parent = this;
	this.button_menu.setTransform(308.35,418.75,0.5838,0.8633,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_menu, 0, 1, 1);

	this.button_phoneExit = new lib.Button_1();
	this.button_phoneExit.name = "button_phoneExit";
	this.button_phoneExit.parent = this;
	this.button_phoneExit.setTransform(592.9,311.05,0.5838,0.8633,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_phoneExit, 0, 1, 1);

	this.button_message = new lib.Button_1();
	this.button_message.name = "button_message";
	this.button_message.parent = this;
	this.button_message.setTransform(404.2,311.05,0.5063,0.8633,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.button_message, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_message},{t:this.button_phoneExit},{t:this.button_menu},{t:this.button_contacts},{t:this.button_callLog},{t:this.button_redial},{t:this.button_speaker},{t:this.button_mute},{t:this.button_volume},{t:this.button_headset},{t:this.button_transfer},{t:this.button_conference},{t:this.button_hold},{t:this.button_speed},{t:this.button_back},{t:this.button_bar},{t:this.button_wait},{t:this.button_hide}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_buttons, null, null);


// stage content:
(lib.ba_u2_s1_p2_phone_features = function(mode,startPosition,loop) {
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
		this.button_message = this.buttons.button_message;
		this.button_phoneExit = this.buttons.button_phoneExit;
		this.button_menu = this.buttons.button_menu;
		this.button_contacts = this.buttons.button_contacts;
		this.button_callLog = this.buttons.button_callLog;
		this.button_redial = this.buttons.button_redial;
		this.button_speaker = this.buttons.button_speaker;
		this.button_mute = this.buttons.button_mute;
		this.button_volume = this.buttons.button_volume;
		this.button_headset = this.buttons.button_headset;
		this.button_transfer = this.buttons.button_transfer;
		this.button_conference = this.buttons.button_conference;
		this.button_hold = this.buttons.button_hold;
		this.button_speed = this.buttons.button_speed;
		this.button_back = this.buttons.button_back;
		this.button_bar = this.buttons.button_bar;
		this.button_wait = this.buttons.button_wait;
		this.button_hide = this.buttons.button_hide;
		this.Item_text = this.dynamic_text.Item_text;
		this.Item_text.visible = true;
		this.Item_text.text = "Please select the buttons to see their features"
		
		this.button_hide.addEventListener("click", Hide_function.bind(this));
		
		function Hide_function()
		{
			this.Item_text.visible = false;
		}
		
		this.button_message.addEventListener("click", Message_function.bind(this));
		
		function Message_function()
		{
			
			this.Item_text.visible = true;
			this.Item_text.text = "Answerphone - This feature enables you to access messages left to you by others.";
			
		}
		
		this.button_phoneExit.addEventListener("click", phoneExit_function.bind(this));
		
		function phoneExit_function()
		{
			
			this.Item_text.visible = true;
			this.Item_text.text = "Phone / Exit - This button can be pressed to exit a call or to make a call handsfree.";
			
		}
		
		
		
		this.button_menu.addEventListener("click", Menu_function.bind(this));
		
		function Menu_function()
		{
			
			this.Item_text.visible = true;
			this.Item_text.text = "Menu - There can be several phone menus, e.g. there would be one which would give you access to a range of user settings.";
			
		}
		
		this.button_contacts.addEventListener("click", Contacts_function.bind(this));
		
		function Contacts_function()
		{
			
			this.Item_text.visible = true;
			this.Item_text.text = "Contacts - This feature is an address book of contacts that have been saved to the phone.";
			
		}
		
		
		this.button_callLog.addEventListener("click", CallLog_function.bind(this));
		
		function CallLog_function()
		{
			
			this.Item_text.visible = true;
			this.Item_text.text = "Call log - This feature displays the last few calls to the phone and calls made from the phone.";
			
		}
		
		this.button_redial.addEventListener("click", Redial_function.bind(this));
		
		function Redial_function()
		{
			
			this.Item_text.visible = true;
			this.Item_text.text = "Last number redial - This automatically redials the last number called on the telephone.";
			
		}
		
		this.button_speaker.addEventListener("click", Speaker_function.bind(this));
		
		function Speaker_function()
		{
			
			this.Item_text.visible = true;
			this.Item_text.text = "Speaker - This feature is used to put a call on loudspeaker.";
			
		}
		
		
		this.button_mute.addEventListener("click", Mute_function.bind(this));
		
		function Mute_function()
		{
			
			this.Item_text.visible = true;
			this.Item_text.text = "Mute / Secrecy - When this button is pressed the caller cannot hear what you are saying but you can still hear them.";
			
		}
		
		
		this.button_volume.addEventListener("click", Volume_function.bind(this));
		
		function Volume_function()
		{
			
			this.Item_text.visible = true;
			this.Item_text.text = "Volume - The volume of the caller can be raised or reduced by pressing this button.";
			
		}
		
		
		this.button_headset.addEventListener("click",  Headset_function.bind(this));
		
		function  Headset_function()
		{
			
			this.Item_text.visible = true;
			this.Item_text.text = "Headset - This feature allows you to use a headset instead of the handset.";
			
		}
		
		
		
		this.button_hold.addEventListener("click", Hold_function.bind(this));
		
		function Hold_function()
		{
			
			this.Item_text.visible = true;
			this.Item_text.text = "On hold - This makes it possible to hold incoming calls while the correct recipient of the call is located.";
			
		}
		
		this.button_conference.addEventListener("click", Conference_function.bind(this));
		
		function Conference_function()
		{
			
			this.Item_text.visible = true;
			this.Item_text.text = "Conference calls - This makes it possible to speak to more than one person simultaneously.";
			
		}
		
		this.button_transfer.addEventListener("click", Transfer_function.bind(this));
		
		function Transfer_function()
		{
			
			this.Item_text.visible = true;
			this.Item_text.text = "Transfer - This enables you to transfer a caller to another extension.";
			
		}
		
		
		this.button_speed.addEventListener("click", Speed_function.bind(this));
		
		function Speed_function()
		{
			
			this.Item_text.visible = true;
			this.Item_text.text = "Speed dialing - This makes it possible to use abbreviated dialling for longer numbers. This is helpful when calling people on a regular basis.";
			
		}
		
		this.button_back.addEventListener("click", Back_function.bind(this));
		
		function Back_function()
		{
			
			this.Item_text.visible = true;
			this.Item_text.text = "Call back - Enables people to automatically recall an engaged extension once it has become free. This means callers do not have to keep trying a number over and over again.";
			
		}
		
		this.button_bar.addEventListener("click", Bar_function.bind(this));
		
		function Bar_function()
		{
			
			this.Item_text.visible = true;
			this.Item_text.text = "Call barring - This prevents users from making calls to certain types of numbers such as premium rate numbers and international calls. Emergency numbers cannot be barred.";
			
		}
		
		this.button_wait.addEventListener("click", Wait_function.bind(this));
		
		function Wait_function()
		{
			
			this.Item_text.visible = true;
			this.Item_text.text = "Call waiting - Some phones have this function to alert the user that another call is waiting for them. This is usually signalled by a beep.";
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// buttons_obj_
	this.buttons = new lib.Scene_1_buttons();
	this.buttons.name = "buttons";
	this.buttons.parent = this;
	this.buttons.setTransform(493.5,439.8,1,1,0,0,0,493.5,439.8);
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
	this.dynamic_text.setTransform(492.9,127.3,1,1,0,0,0,492.9,127.3);
	this.dynamic_text.depth = 0;
	this.dynamic_text.isAttachedToCamera = 0
	this.dynamic_text.isAttachedToMask = 0
	this.dynamic_text.layerDepth = 0
	this.dynamic_text.layerIndex = 1
	this.dynamic_text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.dynamic_text).wait(1));

	// ba_u2_p2_phone_bg_svg_obj_
	this.ba_u2_p2_phone_bg_svg = new lib.Scene_1_ba_u2_p2_phone_bg_svg();
	this.ba_u2_p2_phone_bg_svg.name = "ba_u2_p2_phone_bg_svg";
	this.ba_u2_p2_phone_bg_svg.parent = this;
	this.ba_u2_p2_phone_bg_svg.setTransform(418,404.5,1,1,0,0,0,418,404.5);
	this.ba_u2_p2_phone_bg_svg.depth = 0;
	this.ba_u2_p2_phone_bg_svg.isAttachedToCamera = 0
	this.ba_u2_p2_phone_bg_svg.isAttachedToMask = 0
	this.ba_u2_p2_phone_bg_svg.layerDepth = 0
	this.ba_u2_p2_phone_bg_svg.layerIndex = 2
	this.ba_u2_p2_phone_bg_svg.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ba_u2_p2_phone_bg_svg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(417.5,404,418.5,401);
// library properties:
lib.properties = {
	id: 'B459E4802A3A47C988A11F6CF58E183B',
	width: 835,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"ba_u2_s1_p2_phone_features_atlas_.png", id:"ba_u2_s1_p2_phone_features_atlas_"}
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