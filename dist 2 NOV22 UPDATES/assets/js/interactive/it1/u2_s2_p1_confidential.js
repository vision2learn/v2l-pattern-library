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


(lib.Scene_1_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.Item_text = new cjs.Text("text", "16px 'Open Sans'", "#151718");
	this.Item_text.name = "Item_text";
	this.Item_text.lineHeight = 24;
	this.Item_text.lineWidth = 185;
	this.Item_text.parent = this;
	this.Item_text.setTransform(103.8005,531.046,0.9984,0.9984,-0.528);

	this.timeline.addTween(cjs.Tween.get(this.Item_text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_text, null, null);


(lib.Scene_1_padlock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// padlock
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25282B").s().p("AgeBKIAAhDQgQgMAAgVQAAgWARgOQANgLAQAAIAKABQANADAKAKQAKAKADAOQAEAbgTAPIAABDg");
	this.shape.setTransform(914.0643,768.9345,1.1328,1.1082);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7A026").s().p("AjICzIAAllIGRFlg");
	this.shape_1.setTransform(914.1382,767.6047,1.1328,1.1082);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6BD2C").s().p("AhkCzIAAllIDJAAIAAFlg");
	this.shape_2.setTransform(902.6117,767.6601,1.1328,1.1082);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6BD2C").s().p("AhkCzIAAllIDJAAIAAFlg");
	this.shape_3.setTransform(925.4948,767.6601,1.1328,1.1082);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3F3F3").s().p("AA2BxIAAg3QAAg5gogoQgpgpg5AAIAAggQBGAAAxAzQAzAyAABFIAAA3g");
	this.shape_4.setTransform(923.7389,735.3547,1.1328,1.1082);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ABB7AF").s().p("AhUBdIAAgPQAAhGAxgxQAygzBHAAIAAAgQg6gBgoApQgqApAAA5IABAPg");
	this.shape_5.setTransform(904.3675,733.1659,1.1328,1.1082);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#08536F").s().p("AjJEjIAAlkIABAAIAAgBIABABIFSAAIAAg2QABg6gpgpQgpgpg6AAQg5AAgpArQgpArAAA6IgfABQAAhHAyg0QAzg1BFAAQBGAAAyAyQAzAyAABHIAAA2IAfAAIAAFkg");
	this.shape_6.setTransform(910.8529,757.6071,1.1329,1.1083);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_padlock, null, null);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,219,243,0.027)").s().p("AyjE9IAAp5MAlHAAAIAAJ5g");
	this.shape.setTransform(-2.675,8.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.4,-22.8,237.5,63.400000000000006);


(lib.Path_2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A4F55").s().p("Av6QeMADjgjvIaLDAIgEAmICLBxIgtGqIieBIIilZag");
	this.shape.setTransform(101.9,123.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_Layer_1, null, null);


(lib.Path_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25282B").s().p("Aq9OJIk+pzIH237IYBH4IqQfTg");
	this.shape.setTransform(101.975,125.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_Layer_1, null, null);


(lib.Path_1_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A4F55").s().p("AxEUrMAAIgpeMAiBAANMgAHApOIqeAMg");
	this.shape.setTransform(109.325,133.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1_Layer_1, null, null);


(lib.Path_1_0_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25282B").s().p("AmfQCInHoXICB5GIZMCCMgCpAg1g");
	this.shape.setTransform(87.125,111.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0_Layer_1, null, null);


(lib.Path_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,102,255,0.098)").s().p("EgsEAagMAAEg0KIAdg1MBXoA0/g");
	this.shape.setTransform(282.125,169.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_Layer_1, null, null);


(lib.Path_2_Layer_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A7A9AC").s().p("AnvGHQgGAAgGgCIADsNQAFgCAIAAIF1ABQAQABAzAdQBEAoAKAFIAOAGQAIADAIAAIG2ACQAGAAAHACIgDK6QgFACgHAAg");
	this.shape_1.setTransform(50.75,39.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_Layer_1_1, null, null);


(lib.Path_1_Layer_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A7A9AC").s().p("AnuGHQgIAAgEgCIACsNQAGgCAGAAIF3ACQAPAAAyAdQBEAoAMAFIANAGQAIADAHAAIG3ACQAIAAAEACIgCK6IgMACg");
	this.shape_1.setTransform(50.725,39.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_Layer_1_1, null, null);


(lib.Path_1_2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A7A9AC").s().p("AoBGNQgHAAgGgCIADsYQAHgCAGAAIGEABQAQAAA0AeQBHAoAMAGIANAGQALADAFAAIHIACQAGAAAHACIgDLDQgFACgHAAg");
	this.shape.setTransform(52.675,40.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_2_Layer_1, null, null);


(lib.Path_1_1_Layer_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A7A9AC").s().p("AoBGNQgHAAgGgCIADsYIAMgCIGFABQAQAAA0AeIBSAuIAOAGQALADAFAAIHIACQAGAAAHACIgDLDQgFACgHAAg");
	this.shape_1.setTransform(52.675,40.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1_Layer_1_1, null, null);


(lib.Path_1_0_Layer_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A7A9AC").s().p("AoBGNQgHAAgGgCIADsYIAMgCIGFABQAQAAA0AeIBTAuIANAGQALADAFAAIHIACQAGAAAHACIgDLDQgFACgHAAg");
	this.shape_1.setTransform(52.675,40.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0_Layer_1_1, null, null);


(lib.Path_0_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A7A9AC").s().p("AnuGHQgIAAgEgCIACsNQAFgCAHAAIF3ACQAPAAAyAdQBEAoALAFIANAGQAJADAHAAIG3ACQAIAAAEACIgCK6QgHACgFAAg");
	this.shape.setTransform(50.725,39.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_Layer_1, null, null);


(lib.Clip_Group_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6ACAEA").s().p("EgtmgKgIKYglMAyhgUSIeUegMhEeAgPg");
	this.shape.setTransform(627.65,568.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_Layer_3, null, null);


(lib.Scene_1_buttons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buttons
	this.file6_button = new lib.button();
	this.file6_button.name = "file6_button";
	this.file6_button.parent = this;
	this.file6_button.setTransform(649,314.1,0.3504,1.8959,90.9726,0,0,-41.4,1.2);
	new cjs.ButtonHelper(this.file6_button, 0, 1, 1);

	this.file5_button = new lib.button();
	this.file5_button.name = "file5_button";
	this.file5_button.parent = this;
	this.file5_button.setTransform(484.2,313.4,0.3504,1.8959,90.9726,0,0,-41.4,1.2);
	new cjs.ButtonHelper(this.file5_button, 0, 1, 1);

	this.file4_button = new lib.button();
	this.file4_button.name = "file4_button";
	this.file4_button.parent = this;
	this.file4_button.setTransform(308.35,313.4,0.3504,1.8959,90.9726,0,0,-41.4,1.2);
	new cjs.ButtonHelper(this.file4_button, 0, 1, 1);

	this.file3_button = new lib.button();
	this.file3_button.name = "file3_button";
	this.file3_button.parent = this;
	this.file3_button.setTransform(642.4,170.6,0.3504,1.8959,90.9726,0,0,-41.4,1.2);
	new cjs.ButtonHelper(this.file3_button, 0, 1, 1);

	this.file2_button = new lib.button();
	this.file2_button.name = "file2_button";
	this.file2_button.parent = this;
	this.file2_button.setTransform(485.3,168.8,0.3504,1.8959,90.9726,0,0,-41.4,1.2);
	new cjs.ButtonHelper(this.file2_button, 0, 1, 1);

	this.file1_button = new lib.button();
	this.file1_button.name = "file1_button";
	this.file1_button.parent = this;
	this.file1_button.setTransform(307.25,168.8,0.3504,1.8959,90.9726,0,0,-41.4,1.2);
	new cjs.ButtonHelper(this.file1_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.file1_button},{t:this.file2_button},{t:this.file3_button},{t:this.file4_button},{t:this.file5_button},{t:this.file6_button}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_buttons, null, null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(101.9,123.4,1,1,0,0,0,101.9,123.4);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,203.8,246.9), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_1_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(109.3,133.2,1,1,0,0,0,109.3,133.2);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,218.7,266.4), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_1_0_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(87.1,111.5,1,1,0,0,0,87.1,111.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,174.3,223.2), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(102,125.4,1,1,0,0,0,102,125.4);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,204,250.7), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_1 = new lib.Path_2_Layer_1_1();
	this.Layer_1_1.name = "Layer_1_1";
	this.Layer_1_1.parent = this;
	this.Layer_1_1.setTransform(50.8,39.5,1,1,0,0,0,50.8,39.5);
	this.Layer_1_1.depth = 0;
	this.Layer_1_1.isAttachedToCamera = 0
	this.Layer_1_1.isAttachedToMask = 0
	this.Layer_1_1.layerDepth = 0
	this.Layer_1_1.layerIndex = 0
	this.Layer_1_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,101.5,79), null);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_1_2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(52.6,40,1,1,0,0,0,52.6,40);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,105.4,80.1), null);


(lib.Path_1_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_1 = new lib.Path_1_1_Layer_1_1();
	this.Layer_1_1.name = "Layer_1_1";
	this.Layer_1_1.parent = this;
	this.Layer_1_1.setTransform(52.6,40,1,1,0,0,0,52.6,40);
	this.Layer_1_1.depth = 0;
	this.Layer_1_1.isAttachedToCamera = 0
	this.Layer_1_1.isAttachedToMask = 0
	this.Layer_1_1.layerDepth = 0
	this.Layer_1_1.layerIndex = 0
	this.Layer_1_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1_1, new cjs.Rectangle(0,0,105.4,80.1), null);


(lib.Path_1_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_1 = new lib.Path_1_0_Layer_1_1();
	this.Layer_1_1.name = "Layer_1_1";
	this.Layer_1_1.parent = this;
	this.Layer_1_1.setTransform(52.6,40,1,1,0,0,0,52.6,40);
	this.Layer_1_1.depth = 0;
	this.Layer_1_1.isAttachedToCamera = 0
	this.Layer_1_1.isAttachedToMask = 0
	this.Layer_1_1.layerDepth = 0
	this.Layer_1_1.layerIndex = 0
	this.Layer_1_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0_1, new cjs.Rectangle(0,0,105.4,80.1), null);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_1 = new lib.Path_1_Layer_1_1();
	this.Layer_1_1.name = "Layer_1_1";
	this.Layer_1_1.parent = this;
	this.Layer_1_1.setTransform(50.7,39.5,1,1,0,0,0,50.7,39.5);
	this.Layer_1_1.depth = 0;
	this.Layer_1_1.isAttachedToCamera = 0
	this.Layer_1_1.isAttachedToMask = 0
	this.Layer_1_1.layerDepth = 0
	this.Layer_1_1.layerIndex = 0
	this.Layer_1_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,0,101.5,79), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_0_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(50.7,39.5,1,1,0,0,0,50.7,39.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,101.5,79), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(282.1,169.6,1,1,0,0,0,282.1,169.6);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,564.3,339.3), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgXZA3aQqzkkoVoUQoUoVkkqzQkvrLAAsPQAAsOEvrLQEkqzIUoUQIVoVKzkkQLLkvMOAAQMPAALLEvQKzEkIVIVQIUIUEkKzQEvLLAAMOQAAMPkvLLQkkKzoUIVQoVIUqzEkQrLEvsPAAQsOAArLkvg");
	mask.setTransform(384.875,384.875);

	// Layer_3_obj_
	this.Layer_3 = new lib.Clip_Group_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(627.6,569,1,1,0,0,0,627.6,569);
	this.Layer_3.depth = 0;
	this.Layer_3.isAttachedToCamera = 0
	this.Layer_3.isAttachedToMask = 0
	this.Layer_3.layerDepth = 0
	this.Layer_3.layerIndex = 0
	this.Layer_3.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(335.8,368.2,433.99999999999994,401.59999999999997), null);


(lib.Scene_1_images = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// images
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25282B").s().p("AgeBKIAAhDQgQgNAAgUQAAgXARgNQANgLAQAAIAKABQANADAKAKQAKAKADAOQAEAZgTARIAABDg");
	this.shape.setTransform(295.4672,353.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7A026").s().p("AjICzIAAllIGRFlg");
	this.shape_1.setTransform(295.525,351.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6BD2C").s().p("AhkCzIAAllIDJAAIAAFlg");
	this.shape_2.setTransform(285.35,351.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6BD2C").s().p("AhkCzIAAllIDJAAIAAFlg");
	this.shape_3.setTransform(305.55,351.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3F3F3").s().p("AA2BxIAAg3QAAg5gpgpQgngpg7AAIAAgfQBHAAAyAyQAyAygBBGIAAA3g");
	this.shape_4.setTransform(304,322.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ABB7AF").s().p("AhVBdIAAgPQAAhHAzgxQAxgyBGAAIAAAfQg5AAgpApQgpAoABA6IAAAPg");
	this.shape_5.setTransform(286.9,320.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#08536F").s().p("AjJEjIAAlkIABAAIAAgBIABABIFTAAIAAg3QgBg5gpgpQgogpg6AAQg4AAgqArQgoAqAAA7IggABQAAhHAyg0QAzg1BFAAQBGAAAzAyQAxAyAABGIAAA3IAgAAIAAFkg");
	this.shape_6.setTransform(292.6,342.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#25282B").s().p("AgeBKIAAhDQgQgMAAgVQAAgWARgOQANgLAQAAIAKABQANADAKAKQAKAKADAOQAEAbgTAPIAABDg");
	this.shape_7.setTransform(629.7598,208.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D7A026").s().p("AjICzIAAllIGRFlg");
	this.shape_8.setTransform(629.825,207.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6BD2C").s().p("AhkCzIAAllIDJAAIAAFlg");
	this.shape_9.setTransform(619.65,207.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6BD2C").s().p("AhkCzIAAllIDJAAIAAFlg");
	this.shape_10.setTransform(639.85,207.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F3F3F3").s().p("AA2BxIAAg3QAAg5gogoQgpgpg5AAIAAggQBGAAAxAzQAzAyAABFIAAA3g");
	this.shape_11.setTransform(638.3,178.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#ABB7AF").s().p("AhUBdIAAgPQAAhGAxgxQAygzBHAAIAAAgQg6gBgoApQgqApAAA5IABAPg");
	this.shape_12.setTransform(621.2,176.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#08536F").s().p("AjJEjIAAlkIABAAIAAgBIABABIFSAAIAAg2QABg6gpgpQgpgpg6AAQg5AAgpArQgpArAAA6IgfABQAAhHAyg0QAzg1BFAAQBGAAAyAyQAzAyAABHIAAA2IAfAAIAAFkg");
	this.shape_13.setTransform(626.9,198.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#25282B").s().p("AgeBKIAAhCQgQgNAAgVQAAgWARgOQAOgLAPAAIAKABQANADAKALQAKAKADANQAEAagTARIAABCg");
	this.shape_14.setTransform(633.9672,353.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D7A026").s().p("AjICzIAAllIGRFlg");
	this.shape_15.setTransform(634.025,352.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F6BD2C").s().p("AhkCzIAAllIDJAAIAAFlg");
	this.shape_16.setTransform(623.85,352.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F6BD2C").s().p("AhkCzIAAllIDJAAIAAFlg");
	this.shape_17.setTransform(644.05,352.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F3F3F3").s().p("AA2BwIAAg2QABg6gpgoQgpgog5AAIAAggQBGAAAxAzQAzAxAABGIAAA2g");
	this.shape_18.setTransform(642.5,323.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#ABB7AF").s().p("AhUBdIAAgQQgBhGAygxQAxgyBIAAIAAAfQg7AAgnApQgqAoABA5IAAAQg");
	this.shape_19.setTransform(625.4,321.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#08536F").s().p("AjJEjIAAlkIABAAIAAgBIABABIFTAAIAAg2QgBg6gpgpQgpgpg5AAQg4AAgqArQgoArAAA6IggABQAAhHAyg0QAzg1BFAAQBGAAAzAyQAxAyAABHIAAA2IAgAAIAAFkg");
	this.shape_20.setTransform(631.1,343.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#25282B").s().p("AgeBKIAAhDQgQgNAAgUQAAgXASgNQANgLAPAAIAKABQAOADAKAKQAKAKACAOQAFAagUAQIAABDg");
	this.shape_21.setTransform(470.776,352.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D7A026").s().p("AjJCzIAAllIGSFlg");
	this.shape_22.setTransform(470.85,350.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F6BD2C").s().p("AhkCyIAAljIDJAAIAAFjg");
	this.shape_23.setTransform(460.7,350.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F6BD2C").s().p("AhkCyIAAljIDJAAIAAFjg");
	this.shape_24.setTransform(480.9,350.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F3F3F3").s().p("AA2BxIAAg3QAAg6gpgoQgogpg5AAIAAgfQBGAAAxAyQAyAyAABGIAAA3g");
	this.shape_25.setTransform(479.325,321.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#ABB7AF").s().p("AhUBxIAAg3QAAhGAxgyQAxgyBIAAIAAAfQg7AAgnApQgpAogBA6IAAA3g");
	this.shape_26.setTransform(462.25,321.775);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#08536F").s().p("AjJEjIAAlkIACAAIAAgBIABABIAcAAIAAg3QAAhGAzgyQAxgyBGAAQBHAAAyAyQAyAyAABGIAAA3IAfAAIAAFkgAhijaQgoApAAA5IAAA3IEWAAIAAg3QAAg6gpgoQgpgpg6AAQg5AAgpApg");
	this.shape_27.setTransform(467.9,341.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#25282B").s().p("AgeBKIAAhDQgQgNAAgUQAAgXARgNQANgLAQAAIAKABQANADAKAKQAKAKACAOQAFAagTAQIAABDg");
	this.shape_28.setTransform(469.151,207.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D7A026").s().p("AjJCzIAAllIGTFlg");
	this.shape_29.setTransform(469.2,206.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F6BD2C").s().p("AhkCyIAAljIDJAAIAAFjg");
	this.shape_30.setTransform(459.05,206.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F6BD2C").s().p("AhkCyIAAljIDJAAIAAFjg");
	this.shape_31.setTransform(479.25,206.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F3F3F3").s().p("AA2BxIAAg3QAAg5gpgpQgngpg7AAIAAgfQBHAAAyAyQAyAygBBGIAAA3g");
	this.shape_32.setTransform(477.7,177.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#ABB7AF").s().p("AhVBxIAAg3QAAhGAygyQAygyBGAAIAAAfQg5AAgpApQgpApABA5IAAA3g");
	this.shape_33.setTransform(460.6,177.075);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#08536F").s().p("AjJEjIAAlkIABAAIAAgBIABABIAdAAIAAg3QAAhGAygyQAygyBGAAQBGAAAzAyQAxAyAABGIAAA3IAgAAIAAFkgAhijaQgpAoAAA6IAAA3IEXAAIAAg3QgBg5gpgpQgogpg6AAQg5AAgpApg");
	this.shape_34.setTransform(466.3,197.125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#25282B").s().p("AgeBKIAAhDQgQgNAAgUQAAgXASgNQANgLAPAAIAKABQAOADAKAKQAKAKACAOQAFAagUAQIAABDg");
	this.shape_35.setTransform(290.726,207.375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D7A026").s().p("AjICzIAAllIGSFlg");
	this.shape_36.setTransform(290.8,206.15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F6BD2C").s().p("AhkCyIAAljIDJAAIAAFjg");
	this.shape_37.setTransform(280.65,206.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F6BD2C").s().p("AhkCyIAAljIDJAAIAAFjg");
	this.shape_38.setTransform(300.85,206.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F3F3F3").s().p("AA2BxIAAg3QAAg6gpgoQgogpg5AAIAAgfQBGAAAxAyQAyAyAABGIAAA3g");
	this.shape_39.setTransform(299.275,177.075);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#ABB7AF").s().p("AhVBxIAAg3QAAhGAzgyQAwgyBHAAIAAAfQg6AAgoApQgoAoAAA6IAAA3g");
	this.shape_40.setTransform(282.2,177.075);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#08536F").s().p("AjJEjIAAlkIABAAIAAgBIABABIAeAAIAAg3QgBhGAygyQAzgyBFAAQBHAAAyAyQAyAyAABGIAAA3IAfAAIAAFkgAhhjaQgpApgBA5IAAA3IEXAAIAAg3QAAg6gpgoQgpgpg6AAQg4AAgpApg");
	this.shape_41.setTransform(287.85,197.125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#4A4F55").s().p("AgSAZIAAgHIAXghIgWAAIAAgJIAjAAIAAAHIgXAiIAYAAIAAAIg");
	this.shape_42.setTransform(567.575,355.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4A4F55").s().p("AgIAEIAAgHIARAAIAAAHg");
	this.shape_43.setTransform(564.425,356.325);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4A4F55").s().p("AANAZIgEgMIgRAAIgEAMIgLAAIARgxIAMAAIASAxgAAGAEIgGgUIgGAUIAMAAg");
	this.shape_44.setTransform(560.925,355.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1BA8DF").s().p("AoAFBQgNADgOgDQgbgGAAgdIAAgvIRto3IglJpIgDATQgMAUgnABIgwAAQivAAr9gIg");
	this.shape_45.setTransform(634.575,332.4674);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#9BDBF2").s().p("AoAGFQgHAAgGgCQgKgEgHgIQgHgJAAgKIgjrGQgBgPALgMQAKgLAQAAIGiACQARAAA4AfQBMAsAMAGIAPAGQALAEAGAAIHmABQANAAALAJQANAMgBARIgjJsQAAALgHAIQgHAIgLAEQgFACgHAAg");
	this.shape_46.setTransform(632.7564,325.675);

	this.instance = new lib.Path_1_2();
	this.instance.parent = this;
	this.instance.setTransform(632.8,324.9,1,1,0,0,0,52.6,40);
	this.instance.alpha = 0.1484;

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AnpDkIAAmGIEwACIAihDIDHAAIAdBDIGdgCIAAGGg");
	this.shape_47.setTransform(633.1,301.025);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#9BDBF2").s().p("AnrG+QgOAAgLgKQgKgKAAgOIADs7QAAgOAKgKQAKgKAPAAIF2ABQARABBGAoQBGApARAAIGwACQAPAAAKAKQAKAKAAAOIgCLpQgBAPgKAKQgKAKgOAAg");
	this.shape_48.setTransform(632.9,317.275);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4A4F55").s().p("AgSAZIAAgHIAXghIgWAAIAAgJIAjAAIAAAHIgXAiIAYAAIAAAIg");
	this.shape_49.setTransform(380.575,355.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4A4F55").s().p("AgIAEIAAgHIARAAIAAAHg");
	this.shape_50.setTransform(377.425,356.325);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4A4F55").s().p("AANAZIgEgMIgRAAIgEAMIgLAAIARgxIAMAAIASAxgAAGAEIgGgUIgGAUIAMAAg");
	this.shape_51.setTransform(373.925,355.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3CB9E4").s().p("AoAFBQgOADgNgDQgbgGAAgdIAAgvIRto3IglJpIgEATQgLAUgnABIgwAAQiwAAr8gIg");
	this.shape_52.setTransform(467.3245,332.4674);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1BA8DF").s().p("AoAGFQgHAAgGgCQgKgEgHgIQgHgIgBgLIgirGQgBgQALgLQAKgLAQAAIGiACQARAAA4AfQBMAsAMAGIAOAGQALAEAHAAIHmABQANAAALAJQANALgBASIgjJsQAAAKgIAJQgGAIgLAEQgFACgHAAg");
	this.shape_53.setTransform(465.5024,325.675);

	this.instance_1 = new lib.Path_1_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(465.55,324.9,1,1,0,0,0,52.6,40);
	this.instance_1.alpha = 0.1484;

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#9BDBF2").s().p("AnpDiIAAmFIARAAIApg+IC4AAIAmA+IK7gCIAAGHg");
	this.shape_54.setTransform(465.85,299.15);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1BA8DF").s().p("AnrG+QgOAAgLgKQgKgKAAgOIADs7QAAgOAKgKQAKgKAPAAIF2ABQARABBHAoQBFApARAAIGxACQAOAAAKAKQAKAKAAAOIgDLpQAAAPgKAKQgKAKgOAAg");
	this.shape_55.setTransform(465.625,317.275);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4A4F55").s().p("AgQAWIAAgGIAVgeIgUAAIAAgHIAfAAIAAAGIgUAdIAVAAIAAAIg");
	this.shape_56.setTransform(291.65,281.675);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4A4F55").s().p("AgHAEIAAgHIAPAAIAAAHg");
	this.shape_57.setTransform(288.85,282.225);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#4A4F55").s().p("AALAWIgDgKIgPAAIgDAKIgKAAIAPgsIALAAIAPAsgAAGAEIgGgTIgFATIALAAg");
	this.shape_58.setTransform(285.7,281.65);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#08536F").s().p("AoAFBQgOADgNgDQgbgGAAgdIAAgvIRto3IglJpIgDATQgMAUgnABIgwAAQivAAr9gIg");
	this.shape_59.setTransform(295.575,332.4674);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#127EA6").s().p("AoAGFQgHAAgGgCQgKgEgHgIQgHgJAAgKIgjrGQgBgPALgMQAKgLAQAAIGiACQARAAA4AfQBMAsAMAGIAPAGQAKAEAHAAIHmABQANAAALAJQANALgBASIgjJsQAAALgHAIQgHAIgLAEQgFACgHAAg");
	this.shape_60.setTransform(293.7524,325.675);

	this.instance_2 = new lib.Path_1_0_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(293.8,324.9,1,1,0,0,0,52.6,40);
	this.instance_2.alpha = 0.1484;

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AnpDkIAAmGIEwACIAihDIDHAAIAdBDIGdgCIAAGGg");
	this.shape_61.setTransform(294.1,301.025);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D4116E").s().p("AnpDiIAAmHIJ0ADIAqg/IC4AAIAmA/IBXgDIAAGHg");
	this.shape_62.setTransform(294.1,300);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#9BDBF2").s().p("AnpDiIAAmFIAQAAIAqg+IC4AAIAmA+IK7gCIAAGHg");
	this.shape_63.setTransform(294.1,299.15);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#127EA6").s().p("AnsG+QgNAAgLgKQgKgKAAgOIADs7QAAgOAKgKQAKgKAOAAIF3ABQARABBHAoQBFApARAAIGwACQAPAAAKAKQAKAKAAAOIgDLpQAAAPgKAKQgKAKgPAAg");
	this.shape_64.setTransform(293.9,317.275);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1BA8DF").s().p("AntE9QgNACgNgDQgagGAAgcIAAguIRDowIgjJhIgDATQgMATglABIguABQipAArhgIg");
	this.shape_65.setTransform(626.5,188.5174);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#127EA6").s().p("AnuGAQgGAAgGgCQgKgEgGgIQgHgJAAgKIgiq8QAAgQAKgLQAKgLAPABIGSABQARAAA2AfQBJArAMAGIAOAGQAJADAIAAIHUACQANAAAKAJQAMALgBARIghJkQgBAKgGAJQgHAIgKADQgGACgGAAg");
	this.shape_66.setTransform(624.7525,181.8239);

	this.instance_3 = new lib.Path_2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(624.9,181.1,1,1,0,0,0,50.8,39.5);
	this.instance_3.alpha = 0.1484;

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E6E6E6").s().p("AnXDfIAAl/IAQAAIAog+ICxAAIAkA+IKigCIAAGBg");
	this.shape_67.setTransform(625.075,157.575);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#127EA6").s().p("AHYG7IuxgDQgPAAgJgKQgKgKAAgOIADsvQAAgOAKgKQAKgKANAAIFpABQAQABBFAoQBCAoARAAIGgACQAOAAAKAKQAKAKAAAOIgDLfQAAAOgKAKQgJAKgNAAIgBgBg");
	this.shape_68.setTransform(624.9,173.5012);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#3CB9E4").s().p("AntE9QgNADgNgDQgagHAAgcIAAguIRDowIgjJiIgEASQgLATglABIgxABQitAAragIg");
	this.shape_69.setTransform(469.0745,186.7182);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#6ACAEA").s().p("AntGAQgIAAgEgDQgKgDgHgIQgGgJgBgKIgiq8QAAgQAKgLQAKgLAPAAIGTACQAQAAA2AfQBKArALAFIAOAHQALADAGAAIHUACQANAAAKAIQANANgCAQIghJjQAAALgHAJQgHAIgKAEIgMABg");
	this.shape_70.setTransform(467.3066,180.05);

	this.instance_4 = new lib.Path_1_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(467.4,179.3,1,1,0,0,0,50.7,39.5);
	this.instance_4.alpha = 0.1484;

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E6E6E6").s().p("AnXDfIAAl/IAQAAIAog+ICxAAIAkA+IKigCIAAGBg");
	this.shape_71.setTransform(467.65,155.775);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#6ACAEA").s().p("AnaG4QgNAAgJgKQgKgKAAgOIADsvQgBgOAKgKQAKgKAOAAIFpACQAQAABEAoQBDAoAQAAIGhACQANAAAKAKQAKAKgBAOIgCLfQAAAOgKAKQgKAKgNAAg");
	this.shape_72.setTransform(467.45,171.725);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#127EA6").s().p("AntE9QgNADgNgDQgagHAAgcIAAguIRDowIgjJiIgEASQgLATglABIgxABQitAAragIg");
	this.shape_73.setTransform(291.95,186.7182);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#1BA8DF").s().p("AntGAQgIAAgEgDQgKgDgHgIQgHgJAAgKIgiq8QAAgQAKgLQAKgLAPAAIGTACQAQAAA2AfQBKArALAFIAOAHQALADAGAAIHUACQANAAAKAIQAMAMgBARIghJjQgBALgGAJQgHAIgKAEQgHABgFAAg");
	this.shape_74.setTransform(290.2025,180.05);

	this.instance_5 = new lib.Path_0();
	this.instance_5.parent = this;
	this.instance_5.setTransform(290.3,179.3,1,1,0,0,0,50.7,39.5);
	this.instance_5.alpha = 0.1484;

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E6E6E6").s().p("AnXDfIAAl/IAQAAIAog+ICxAAIAkA+IKigCIAAGBg");
	this.shape_75.setTransform(290.55,155.775);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#127EA6").s().p("AnZG4QgOAAgKgKQgJgKAAgOIACsvQAAgOAKgKQAJgKAPAAIFoACQAQAABEAoQBDAoARAAIGgACQAOAAAKAKQAKAKAAAOIgDLfQAAAOgKAKQgJAKgOAAg");
	this.shape_76.setTransform(290.35,171.725);

	this.instance_6 = new lib.Path();
	this.instance_6.parent = this;
	this.instance_6.setTransform(467.65,241.05,1,1,0,0,0,282.1,169.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F3F3F3").s().p("AilALIAAgVIFKAAIAAAVg");
	this.shape_77.setTransform(668.2,101.575);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F3F3F3").s().p("AgrALIAAgVIBXAAIAAAVg");
	this.shape_78.setTransform(709.825,101.575);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F3F3F3").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAHgGAHAAQAIAAAHAGQAGAGAAAIQAAAJgGAGQgHAGgIAAQgHAAgHgGg");
	this.shape_79.setTransform(691.25,101.575);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F3F3F3").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_80.setTransform(698.925,101.575);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F3F3F3").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_81.setTransform(218.075,101.575);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#ABB7AF").s().p("Egn9AAiIAAhDMBP7AAAIAABDg");
	this.shape_82.setTransform(465.075,101.625);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQARAAALAMQAMALAAAQQAAAQgMAMQgLAMgRAAQgPAAgMgMg");
	this.shape_83.setTransform(464.5,84.225);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#08536F").s().p("Egn9AWCMAAAgsDMBP7AAAMAAAAsDg");
	this.shape_84.setTransform(465.075,246);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#25282B").s().p("EgsEAa6MAAAgzsQAAg4AtgnQArgoA/AAMBTYAAAQA/AAAuApQAtAoAAA5MAAAAzpg");
	this.shape_85.setTransform(464.5,241.975);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#25282B").s().p("AhIBJQgfgeABgrQgBgqAfgeQAegeAqAAQArAAAeAeQAeAeABAqQgBArgeAeQgeAegrAAQgqAAgegeg");
	this.shape_86.setTransform(464.5,438.125);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F3F3F3").s().p("Aw0AqQghAAgZgMQgXgMAAgRIAAgBQAAgRAXgLQAZgNAhAAMAhpAAAQAiAAAXANQAYALAAARIAAABQAAARgYAMQgXAMgiAAg");
	this.shape_87.setTransform(464.5,514.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F3F3F3").s().p("EgpgADwQhDAAgxgrQgwgsAAg8IAAlMMBYJAAAIAAFNQAAA9gwArQgvAqhEAAg");
	this.shape_88.setTransform(464.5,438.15);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#ABB7AF").s().p("AuVDwIAAnfIcrAAIAAHfg");
	this.shape_89.setTransform(464.5,486.15);

	this.instance_7 = new lib.ClipGroup();
	this.instance_7.parent = this;
	this.instance_7.setTransform(473.5,399,1,1,0,0,0,459.8,384.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#9BDBF2").s().p("EgXTA3OQqxkjoToTQoSoTkkqwQktrJAAsMQAAsMEtrIQEkqwISoTQIToTKxkjQLIktMLAAQMMAALJEtQKwEjITITQITITEiKwQEuLIAAMMQAAMMkuLJQkiKwoTITQoTITqwEjQrJEtsMAAQsLAArIktg");
	this.shape_90.setTransform(400,399.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_90},{t:this.instance_7},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.instance_6},{t:this.shape_76},{t:this.shape_75},{t:this.instance_5},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.instance_4},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.instance_3},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.instance_2},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.instance_1},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.instance},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_images, null, null);


(lib.Scene_1_folder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// folder
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwYVBMAAJgqKMAgoAANMgAIAp6IqCAMg");
	this.shape.setTransform(195.025,648.4);

	this.instance = new lib.Path_1_1();
	this.instance.parent = this;
	this.instance.setTransform(192.55,656.75,1,1,0,0,0,109.3,133.2);
	this.instance.alpha = 0.3008;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#127EA6").s().p("AJuVFI13g3QgogCgXggQgRgZADgeIBkxBQACgOgHgaIgKghQgJgahSi4Qg7iEADgnIBXuoQADgjAbgWQAcgVAjAFIYyDmQAXADASARQASARAGAZQADAPgBANMgDUAj7QgCAPgGANQgKAXgUANQgTANgXAAIgDAAg");
	this.shape_1.setTransform(94.2877,644.1312);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3F3F3").s().p("ADkQ5IxdhYMACngg1IZMCBMgCmAgog");
	this.shape_2.setTransform(255.95,668.95);

	this.instance_1 = new lib.Path_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(261.25,672.6,1,1,0,0,0,87.1,111.5);
	this.instance_1.alpha = 0.3086;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9BDBF2").s().p("Av6QeMADjgjvIaLC/IgEAnICLBxIgtGqIidBIIimZag");
	this.shape_3.setTransform(272.45,666.35);

	this.instance_2 = new lib.Path_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(272.45,669.55,1,1,0,0,0,101.9,123.4);
	this.instance_2.alpha = 0.3008;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4A4F55").s().p("AoaiiIAMglIQpFqIgMAlg");
	this.shape_4.setTransform(277.675,707.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4A4F55").s().p("AoaiiIAMglIQpFrIgMAkg");
	this.shape_5.setTransform(280.625,698.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A4F55").s().p("AoaiiIAMglIQpFqIgMAlg");
	this.shape_6.setTransform(283.275,690.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A4F55").s().p("AoaijIAMgkIQpFqIgMAlg");
	this.shape_7.setTransform(286.225,682.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4A4F55").s().p("AoaiiIAMglIQpFqIgMAlg");
	this.shape_8.setTransform(289.175,673.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A4F55").s().p("AoaiiIAMglIQpFqIgMAlg");
	this.shape_9.setTransform(292.125,664.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4A4F55").s().p("AoaijIAMgkIQpFrIgMAkg");
	this.shape_10.setTransform(303.575,631.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4A4F55").s().p("AoaijIAMgkIQpFrIgMAkg");
	this.shape_11.setTransform(306.525,622.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A4F55").s().p("AoaijIAMgkIQpFrIgMAkg");
	this.shape_12.setTransform(309.175,614.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A4F55").s().p("AoaijIAMgkIQpFrIgMAkg");
	this.shape_13.setTransform(312.125,606.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4A4F55").s().p("AoaiiIAMglIQqFrIgNAkg");
	this.shape_14.setTransform(315.1,597.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4A4F55").s().p("AoaiiIAMglIQpFrIgMAkg");
	this.shape_15.setTransform(318.05,588.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F3F3F3").s().p("AgdRRIwqlcIKN/TIYCH1IqKfIg");
	this.shape_16.setTransform(294.025,668.625);

	this.instance_3 = new lib.Path_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(304.25,673.05,1,1,0,0,0,102,125.4);
	this.instance_3.alpha = 0.3086;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#127EA6").s().p("AKTUkI7ui/QghgDgWgaQgVgaADghMAD2gjpQAEghAagVQAagUAiADIevDUQAiAEAWAZQAVAagEAhIhdNmQgEAohzCYQhyCagFAnIhsPtQgDAhgbAVQgVARgcAAIgLAAg");
	this.shape_17.setTransform(281.0569,666.5815);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.instance_3},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_2},{t:this.shape_3},{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_folder, null, null);


// stage content:
(lib.it1_u2_s2_p1_confidential = function(mode,startPosition,loop) {
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
		this.file1_button = this.buttons.file1_button;
		this.file2_button = this.buttons.file2_button;
		this.file3_button = this.buttons.file3_button;
		this.file4_button = this.buttons.file4_button;
		this.file5_button = this.buttons.file5_button;
		this.file6_button = this.buttons.file6_button;
		this.Item_text = this.text.Item_text;
		this.file1_button.addEventListener("click", File_1_function.bind(this));
		this.Item_text.text = "Confidential electronic based information \n\n Select the six files on the screen to unlock the information.";
		
		
		function File_1_function() {
			//this.Item_text.visible = true;
			//this.gotoAndStop(1);
			this.Item_text.text = "No access allowed \n\n - this means highly confidential documents cannot be found or read by all but a few people. The document will not show up when internal organisation searches are made.";
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
			this.Item_text.text = "System administration access \n\n – this senior member of staff has the authority to change access levels / change how things are stored and filed / make decisions on archiving and deleting files.";
		}
		/*this.stop();
		
		Hide_function.call(this);
		
		
		
		
		this.hide_button.addEventListener("click", Hide_function.bind(this));
		
		function Hide_function() {
			//this.Item_text.visible = true;
			//this.computer_button.visible = true;
			//this.folder_button.visible = true;
			//Hide_files_function.call(this);
			//Hide_folders_function.call(this);
			this.gotoAndStop(0);
			this.Item_text.text = "Dealing with confidential information \n\n Select the folder and the computer to learn more. \n\n Select the padlock to the right to return.";
		}
		
		/*function Hide_files_function() {
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
			this.Item_text.text = "Confidential electronic based information \n\n Select the six files on the screen to unlock the information.  \n\n Lock the padlock to the right to return.";
			/*this.file1_button.visible = true;
			this.file2_button.visible = true;
			this.file3_button.visible = true;
			this.file4_button.visible = true;
			this.file5_button.visible = true;
			this.file6_button.visible = true;
			this.computer_button.visible = false;
			this.folder_button.visible = false;
			Hide_folders_function.call(this);
		}
		
		this.folder_button.addEventListener("click", folder_function.bind(this));
		
		function folder_function() {
			this.Item_text.visible = true;
			this.Item_text.text = "Confidential paper based information \n\n Select the six files to see their contents. \n\n Lock the padlock to return.";
			this.gotoAndStop(2);
			/*this.folder1_button.visible = true;
			this.folder2_button.visible = true;
			this.folder3_button.visible = true;
			this.folder4_button.visible = true;
			this.folder5_button.visible = true;
			this.folder6_button.visible = true;
			this.computer_button.visible = false;
			this.folder_button.visible = false;
			Hide_files_function.call(this);	
		}
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// buttons_obj_
	this.buttons = new lib.Scene_1_buttons();
	this.buttons.name = "buttons";
	this.buttons.parent = this;
	this.buttons.setTransform(463.3,254.8,1,1,0,0,0,463.3,254.8);
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
	this.text.setTransform(197.4,654.2,1,1,0,0,0,197.4,654.2);
	this.text.depth = 0;
	this.text.isAttachedToCamera = 0
	this.text.isAttachedToMask = 0
	this.text.layerDepth = 0
	this.text.layerIndex = 1
	this.text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// folder_obj_
	this.folder = new lib.Scene_1_folder();
	this.folder.name = "folder";
	this.folder.parent = this;
	this.folder.setTransform(204.4,653.8,1,1,0,0,0,204.4,653.8);
	this.folder.depth = 0;
	this.folder.isAttachedToCamera = 0
	this.folder.isAttachedToMask = 0
	this.folder.layerDepth = 0
	this.folder.layerIndex = 2
	this.folder.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.folder).wait(1));

	// padlock_obj_
	this.padlock = new lib.Scene_1_padlock();
	this.padlock.name = "padlock";
	this.padlock.parent = this;
	this.padlock.setTransform(912.5,756.4,1,1,0,0,0,912.5,756.4);
	this.padlock.depth = 0;
	this.padlock.isAttachedToCamera = 0
	this.padlock.isAttachedToMask = 0
	this.padlock.layerDepth = 0
	this.padlock.layerIndex = 3
	this.padlock.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.padlock).wait(1));

	// images_obj_
	this.images = new lib.Scene_1_images();
	this.images.name = "images";
	this.images.parent = this;
	this.images.setTransform(473.4,398.9,1,1,0,0,0,473.4,398.9);
	this.images.depth = 0;
	this.images.isAttachedToCamera = 0
	this.images.isAttachedToMask = 0
	this.images.layerDepth = 0
	this.images.layerIndex = 4
	this.images.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.images).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(402.6,414.1,534.4,384.29999999999995);
// library properties:
lib.properties = {
	id: '786DA3F1042B4C23A41F4E90074ECD41',
	width: 800,
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