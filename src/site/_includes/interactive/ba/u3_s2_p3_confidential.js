(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ba_u3_s2_p3_confidential_atlas_", frames: [[803,0,800,800],[0,0,801,801],[803,802,444,336],[1249,802,49,67],[0,803,801,801],[1249,871,48,67]]}
];


// symbols:



(lib.ba_u3_s2_p3_confidential_bg = function() {
	this.initialize(ss["ba_u3_s2_p3_confidential_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ba_u3_s2_p3_confidential_computer = function() {
	this.initialize(ss["ba_u3_s2_p3_confidential_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ba_u3_s2_p3_confidential_folder = function() {
	this.initialize(ss["ba_u3_s2_p3_confidential_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ba_u3_s2_p3_confidential_lock = function() {
	this.initialize(ss["ba_u3_s2_p3_confidential_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ba_u3_s2_p3_confidential_paperv2 = function() {
	this.initialize(ss["ba_u3_s2_p3_confidential_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ba_u3_s2_p3_confidential_unlock = function() {
	this.initialize(ss["ba_u3_s2_p3_confidential_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Scene_1_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.Item_text = new cjs.Text("text", "16px 'Open Sans'", "#151718");
	this.Item_text.name = "Item_text";
	this.Item_text.textAlign = "center";
	this.Item_text.lineHeight = 24;
	this.Item_text.lineWidth = 175;
	this.Item_text.parent = this;
	this.Item_text.setTransform(227.6505,538.346,0.9984,0.9984,-0.528);

	this.timeline.addTween(cjs.Tween.get(this.Item_text).wait(3));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_images = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// images
	this.instance = new lib.ba_u3_s2_p3_confidential_lock();
	this.instance.parent = this;
	this.instance.setTransform(741,722);

	this.instance_1 = new lib.ba_u3_s2_p3_confidential_bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1,1);

	this.instance_2 = new lib.ba_u3_s2_p3_confidential_unlock();
	this.instance_2.parent = this;
	this.instance_2.setTransform(741,722);

	this.instance_3 = new lib.ba_u3_s2_p3_confidential_computer();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1,-1);

	this.instance_4 = new lib.ba_u3_s2_p3_confidential_paperv2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_2},{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_folder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// folder
	this.instance = new lib.ba_u3_s2_p3_confidential_folder();
	this.instance.parent = this;
	this.instance.setTransform(5,487);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();


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
	this.folder3_button = new lib.button();
	this.folder3_button.name = "folder3_button";
	this.folder3_button.parent = this;
	this.folder3_button.setTransform(330.2,322.55,0.3456,1.1197,59.9981,0,0,0.4,0.1);
	new cjs.ButtonHelper(this.folder3_button, 0, 1, 1);

	this.folder1_button = new lib.button();
	this.folder1_button.name = "folder1_button";
	this.folder1_button.parent = this;
	this.folder1_button.setTransform(131.25,348.4,0.3469,2.2624,29.9985);
	new cjs.ButtonHelper(this.folder1_button, 0, 1, 1);

	this.folder6_button = new lib.button();
	this.folder6_button.name = "folder6_button";
	this.folder6_button.parent = this;
	this.folder6_button.setTransform(593.35,286.5,0.4988,1.4796,25.5185,0,0,1.9,0.6);
	new cjs.ButtonHelper(this.folder6_button, 0, 1, 1);

	this.folder5_button = new lib.button();
	this.folder5_button.name = "folder5_button";
	this.folder5_button.parent = this;
	this.folder5_button.setTransform(525.95,340.1,0.5875,0.7392,25.5199,0,0,1.6,0.4);
	new cjs.ButtonHelper(this.folder5_button, 0, 1, 1);

	this.folder4_button = new lib.button();
	this.folder4_button.name = "folder4_button";
	this.folder4_button.parent = this;
	this.folder4_button.setTransform(499.45,385.2,0.5875,0.7393,25.5432,0,0,1.6,0.5);
	new cjs.ButtonHelper(this.folder4_button, 0, 1, 1);

	this.folder2_button = new lib.button();
	this.folder2_button.name = "folder2_button";
	this.folder2_button.parent = this;
	this.folder2_button.setTransform(221.35,376.85,0.3456,1.9974,29.9986,0,0,0,0.1);
	new cjs.ButtonHelper(this.folder2_button, 0, 1, 1);

	this.file6_button = new lib.button();
	this.file6_button.name = "file6_button";
	this.file6_button.parent = this;
	this.file6_button.setTransform(661.1,316.3,0.3504,1.8959,90.9726,0,0,-41.4,1.2);
	new cjs.ButtonHelper(this.file6_button, 0, 1, 1);

	this.file5_button = new lib.button();
	this.file5_button.name = "file5_button";
	this.file5_button.parent = this;
	this.file5_button.setTransform(505.1,312.3,0.3504,1.8959,90.9726,0,0,-41.4,1.2);
	new cjs.ButtonHelper(this.file5_button, 0, 1, 1);

	this.file4_button = new lib.button();
	this.file4_button.name = "file4_button";
	this.file4_button.parent = this;
	this.file4_button.setTransform(328.15,312.3,0.3504,1.8959,90.9726,0,0,-41.4,1.2);
	new cjs.ButtonHelper(this.file4_button, 0, 1, 1);

	this.file3_button = new lib.button();
	this.file3_button.name = "file3_button";
	this.file3_button.parent = this;
	this.file3_button.setTransform(661.1,167.3,0.3504,1.8959,90.9726,0,0,-41.4,1.2);
	new cjs.ButtonHelper(this.file3_button, 0, 1, 1);

	this.file2_button = new lib.button();
	this.file2_button.name = "file2_button";
	this.file2_button.parent = this;
	this.file2_button.setTransform(505.1,163.3,0.3504,1.8959,90.9726,0,0,-41.4,1.2);
	new cjs.ButtonHelper(this.file2_button, 0, 1, 1);

	this.file1_button = new lib.button();
	this.file1_button.name = "file1_button";
	this.file1_button.parent = this;
	this.file1_button.setTransform(328.15,163.3,0.3504,1.8959,90.9726,0,0,-41.4,1.2);
	new cjs.ButtonHelper(this.file1_button, 0, 1, 1);

	this.computer_button = new lib.button();
	this.computer_button.name = "computer_button";
	this.computer_button.parent = this;
	this.computer_button.setTransform(407.7,357.95,0.9843,4.3922,-49.5293,0,0,-8.2,0.2);
	new cjs.ButtonHelper(this.computer_button, 0, 1, 1);

	this.hide_button = new lib.button();
	this.hide_button.name = "hide_button";
	this.hide_button.parent = this;
	this.hide_button.setTransform(759.75,759.85,0.3258,1.2379,-0.5608,0,0,0.3,0.2);
	new cjs.ButtonHelper(this.hide_button, 0, 1, 1);

	this.folder_button = new lib.button();
	this.folder_button.name = "folder_button";
	this.folder_button.parent = this;
	this.folder_button.setTransform(612.1,585.5,0.8276,3.9733,70.4688,0,0,-8.1,0.2);
	new cjs.ButtonHelper(this.folder_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.folder_button},{t:this.hide_button},{t:this.computer_button},{t:this.file1_button},{t:this.file2_button},{t:this.file3_button},{t:this.file4_button},{t:this.file5_button},{t:this.file6_button},{t:this.folder2_button},{t:this.folder4_button},{t:this.folder5_button},{t:this.folder6_button},{t:this.folder1_button},{t:this.folder3_button}]}).wait(3));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.ba_u3_s2_p3_confidential = function(mode,startPosition,loop) {
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
		this.folder_button = this.buttons.folder_button;
		this.hide_button = this.buttons.hide_button;
		this.computer_button = this.buttons.computer_button;
		this.file1_button = this.buttons.file1_button;
		this.file2_button = this.buttons.file2_button;
		this.file3_button = this.buttons.file3_button;
		this.file4_button = this.buttons.file4_button;
		this.file5_button = this.buttons.file5_button;
		this.file6_button = this.buttons.file6_button;
		this.folder2_button = this.buttons.folder2_button;
		this.folder4_button = this.buttons.folder4_button;
		this.folder5_button = this.buttons.folder5_button;
		this.folder6_button = this.buttons.folder6_button;
		this.folder1_button = this.buttons.folder1_button;
		this.folder3_button = this.buttons.folder3_button;
		this.Item_text = this.text.Item_text;
		//this.stop();
		
		Hide_function.call(this);
		
		
		
		
		this.hide_button.addEventListener("click", Hide_function.bind(this));
		
		function Hide_function() {
			//this.Item_text.visible = true;
			this.computer_button.visible = true;
			this.folder_button.visible = true;
			Hide_files_function.call(this);
			Hide_folders_function.call(this);
			this.gotoAndStop(0);
			this.Item_text.text = "Dealing with confidential information \n\n Select the folder and the computer to learn more. \n Select the padlock to return";
		}
		
		function Hide_files_function() {
			//this.Item_text.visible = true;
			//this.gotoAndStop(0);
			this.file1_button.visible = false;
			this.file2_button.visible = false;
			this.file3_button.visible = false;
			this.file4_button.visible = false;
			this.file5_button.visible = false;
			this.file6_button.visible = false;
		}
		
		function Hide_folders_function() {
			//this.Item_text.visible = true;
			//this.gotoAndStop(0);
			this.folder1_button.visible = false;
			this.folder2_button.visible = false;
			this.folder3_button.visible = false;
			this.folder4_button.visible = false;
			this.folder5_button.visible = false;
			this.folder6_button.visible = false;
		}
			
		
		
		
		this.computer_button.addEventListener("click", computer_function.bind(this));
		
		function computer_function() {
			this.Item_text.visible = true;
			this.gotoAndStop(1);
			this.Item_text.text = "Confidential electronic based information \n\n Select the six files on the screen to unlock the information.  \n Lock the padlock to return";
			this.file1_button.visible = true;
			this.file2_button.visible = true;
			this.file3_button.visible = true;
			this.file4_button.visible = true;
			this.file5_button.visible = true;
			this.file6_button.visible = true;
			this.computer_button.visible = false;
			this.folder_button.visible = false;
			this.Hide_folders_function.call(this);
		}
		
		this.folder_button.addEventListener("click", folder_function.bind(this));
		
		function folder_function() {
			this.Item_text.visible = true;
			this.Item_text.text = "Confidential paper based information \n\n Select the six files to see their contents. \n \n Lock the padlock to return";
			this.gotoAndStop(2);
			this.folder1_button.visible = true;
			this.folder2_button.visible = true;
			this.folder3_button.visible = true;
			this.folder4_button.visible = true;
			this.folder5_button.visible = true;
			this.folder6_button.visible = true;
			this.computer_button.visible = false;
			this.folder_button.visible = false;
			this.Hide_files_function.call(this);	
		}
		
		this.file1_button.addEventListener("click", File_1_function.bind(this));
		
		function File_1_function() {
			//this.Item_text.visible = true;
			//this.gotoAndStop(1);
			this.Item_text.text = "No access allowed \n - this means highly confidential documents cannot be found or read by all but a few people. The document will not show up when internal organisation searches are made.";
		}
		
		this.file2_button.addEventListener("click", File_2_function.bind(this));
		
		function File_2_function() {
			//this.Item_text.visible = true;
			//this.gotoAndStop(1);
			this.Item_text.text = "Read-only access \n\n – this means a member of staff can read the document.";
		}
		
		this.file3_button.addEventListener("click", File_3_function.bind(this));
		
		function File_3_function() {
			//this.Item_text.visible = true;
			//this.gotoAndStop(1);
			this.Item_text.text = "Read and edit access \n\n – a member of staff can access the document and change it.";
		}
		
		this.file4_button.addEventListener("click", File_4_function.bind(this));
		
		function File_4_function() {
			//this.Item_text.visible = true;
			//this.gotoAndStop(1);
			this.Item_text.text = "Enter and index access \n\n – the member of staff can scan in new documents, index them and save them in a designated folder.";
		}
		
		this.file5_button.addEventListener("click", File_5_function.bind(this));
		
		function File_5_function() {
			//this.Item_text.visible = true;
			//this.gotoAndStop(1);
			this.Item_text.text = "Distribution access \n\n – the member of staff is authorised to distribute documents.";
		}
		
		this.file6_button.addEventListener("click", File_6_function.bind(this));
		
		function File_6_function() {
			//this.Item_text.visible = true;
			//this.gotoAndStop(1);
			this.Item_text.text = "System administration access \n – this senior member of staff has the authority to change access levels / change how things are stored and filed / make decisions on archiving and deleting files.";
		}
		
		this.folder1_button.addEventListener("click", Folder_1_function.bind(this));
		
		function Folder_1_function() {
			//this.Item_text.visible = true;
			//this.gotoAndStop(2);
			this.Item_text.text = "Confidential paper-based information must be stored in designated folders. These will be marked clearly with the word CONFIDENTIAL.";
		}
		
		
		this.folder2_button.addEventListener("click", Folder_2_function.bind(this));
		
		function Folder_2_function() {
			//this.Item_text.visible = true;
			//this.gotoAndStop(2);
			this.Item_text.text = "The confidential files are stored in designated cabinets. The cabinets are always locked. For each cabinet there will be an authorised keyholder (or keyholders).";
		}
		
		this.folder3_button.addEventListener("click", Folder_3_function.bind(this));
		
		function Folder_3_function() {
			//this.Item_text.visible = true;
			//this.gotoAndStop(2);
			this.Item_text.text = "The files may only be accessed with the consent of the authorised keyholder. This consent may be withheld.";
		}
		
		this.folder4_button.addEventListener("click", Folder_4_function.bind(this));
		
		function Folder_4_function() {
			//this.Item_text.visible = true;
			//this.gotoAndStop(2);
			this.Item_text.text = "Confidential files should be kept up to date by an authorised senior administrator.";
		}
		
		this.folder5_button.addEventListener("click", Folder_5_function.bind(this));
		
		function Folder_5_function() {
			//this.Item_text.visible = true;
			//this.gotoAndStop(2);
			this.Item_text.text = "Confidential files that have passed their retention date or that are no longer required should be deleted / destroyed by cross shredding.";
		}
		
		this.folder6_button.addEventListener("click", Folder_6_function.bind(this));
		
		function Folder_6_function() {
			//this.Item_text.visible = true;
			//this.gotoAndStop(2);
			this.Item_text.text = "Confidential files should not be taken from their office base without permission.";
		}
	}
	this.frame_2 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// buttons_obj_
	this.buttons = new lib.Scene_1_buttons();
	this.buttons.name = "buttons";
	this.buttons.parent = this;
	this.buttons.setTransform(429.2,467.2,1,1,0,0,0,429.2,467.2);
	this.buttons.depth = 0;
	this.buttons.isAttachedToCamera = 0
	this.buttons.isAttachedToMask = 0
	this.buttons.layerDepth = 0
	this.buttons.layerIndex = 0
	this.buttons.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.buttons).wait(3));

	// text_obj_
	this.text = new lib.Scene_1_text();
	this.text.name = "text";
	this.text.parent = this;
	this.text.setTransform(228.7,647.9,1,1,0,0,0,228.7,647.9);
	this.text.depth = 0;
	this.text.isAttachedToCamera = 0
	this.text.isAttachedToMask = 0
	this.text.layerDepth = 0
	this.text.layerIndex = 1
	this.text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text).wait(3));

	// folder_obj_
	this.folder = new lib.Scene_1_folder();
	this.folder.name = "folder";
	this.folder.parent = this;
	this.folder.setTransform(227,655,1,1,0,0,0,227,655);
	this.folder.depth = 0;
	this.folder.isAttachedToCamera = 0
	this.folder.isAttachedToMask = 0
	this.folder.layerDepth = 0
	this.folder.layerIndex = 2
	this.folder.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.folder).wait(3));

	// images_obj_
	this.images = new lib.Scene_1_images();
	this.images.name = "images";
	this.images.parent = this;
	this.images.setTransform(399,401,1,1,0,0,0,399,401);
	this.images.depth = 0;
	this.images.isAttachedToCamera = 0
	this.images.isAttachedToMask = 0
	this.images.layerDepth = 0
	this.images.layerIndex = 3
	this.images.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.images).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(399,399,401,424);
// library properties:
lib.properties = {
	id: '786DA3F1042B4C23A41F4E90074ECD41',
	width: 800,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"ba_u3_s2_p3_confidential_atlas_.png", id:"ba_u3_s2_p3_confidential_atlas_"}
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