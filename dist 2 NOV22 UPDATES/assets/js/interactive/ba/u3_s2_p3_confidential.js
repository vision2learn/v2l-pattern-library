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

	this.timeline.addTween(cjs.Tween.get(this.Item_text).wait(3));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_padlock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// padlock
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25282B").s().p("AgeBKIAAhDQgQgNAAgUQAAgXARgNQANgLAQAAIAKABQANADAKAKQAKAKACAOQAFAagTAQIAABDg");
	this.shape.setTransform(767.0835,768.0242,1.1332,1.1085);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7A026").s().p("AjJCzIAAllIGTFlg");
	this.shape_1.setTransform(767.139,766.6663,1.1332,1.1085);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6BD2C").s().p("AhkCyIAAljIDJAAIAAFjg");
	this.shape_2.setTransform(755.6372,766.7217,1.1332,1.1085);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6BD2C").s().p("AhkCyIAAljIDJAAIAAFjg");
	this.shape_3.setTransform(778.5274,766.7217,1.1332,1.1085);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3F3F3").s().p("AA2BxIAAg3QAAg5gpgpQgngpg7AAIAAgfQBHAAAyAyQAyAygBBGIAAA3g");
	this.shape_4.setTransform(776.771,734.4374,1.1332,1.1085);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ABB7AF").s().p("AhVBxIAAg3QAAhGAygyQAygyBGAAIAAAfQg5AAgpApQgpApABA5IAAA3g");
	this.shape_5.setTransform(757.3936,734.4374,1.1332,1.1085);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#08536F").s().p("AjJEjIAAlkIABAAIAAgBIABABIAdAAIAAg3QAAhGAygyQAygyBGAAQBGAAAzAyQAxAyAABGIAAA3IAgAAIAAFkgAhijaQgpAoAAA6IAAA3IEXAAIAAg3QgBg5gpgpQgogpg6AAQg5AAgpApg");
	this.shape_6.setTransform(763.8667,756.6943,1.1332,1.1085);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#25282B").s().p("AgeBKIAAhDQgQgMAAgVQAAgWARgOQANgLAQAAIAKABQANADAKAKQAKAKADAOQAEAbgTAPIAABDg");
	this.shape_7.setTransform(767.0927,768.0493,1.1329,1.1083);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D7A026").s().p("AjICzIAAllIGRFlg");
	this.shape_8.setTransform(767.1666,766.7193,1.1329,1.1083);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6BD2C").s().p("AhkCzIAAllIDJAAIAAFlg");
	this.shape_9.setTransform(755.6396,766.7747,1.1329,1.1083);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6BD2C").s().p("AhkCzIAAllIDJAAIAAFlg");
	this.shape_10.setTransform(778.5236,766.7747,1.1329,1.1083);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F3F3F3").s().p("AA2BxIAAg3QAAg5gogoQgpgpg5AAIAAggQBGAAAxAzQAzAyAABFIAAA3g");
	this.shape_11.setTransform(776.7677,734.4676,1.1329,1.1083);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#ABB7AF").s().p("AhUBdIAAgPQAAhGAxgxQAygzBHAAIAAAgQg6gBgoApQgqApAAA5IABAPg");
	this.shape_12.setTransform(757.3955,732.2787,1.1329,1.1083);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#08536F").s().p("AjJEjIAAlkIABAAIAAgBIABABIFSAAIAAg2QABg6gpgpQgpgpg6AAQg5AAgpArQgpArAAA6IgfABQAAhHAyg0QAzg1BFAAQBGAAAyAyQAzAyAABHIAAA2IAfAAIAAFkg");
	this.shape_13.setTransform(763.8717,756.6891,1.1329,1.1083);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13,p:{x:763.8717,y:756.6891}},{t:this.shape_12,p:{scaleX:1.1329,scaleY:1.1083,x:757.3955,y:732.2787}},{t:this.shape_11,p:{scaleX:1.1329,scaleY:1.1083,x:776.7677,y:734.4676}},{t:this.shape_10,p:{scaleX:1.1329,scaleY:1.1083,x:778.5236,y:766.7747}},{t:this.shape_9,p:{scaleX:1.1329,scaleY:1.1083,x:755.6396,y:766.7747}},{t:this.shape_8,p:{scaleX:1.1329,scaleY:1.1083,x:767.1666,y:766.7193}},{t:this.shape_7,p:{scaleX:1.1329,scaleY:1.1083,x:767.0927,y:768.0493}}]},1).to({state:[{t:this.shape_13,p:{x:763.8529,y:756.6731}},{t:this.shape_12,p:{scaleX:1.1328,scaleY:1.1082,x:757.3675,y:732.2002}},{t:this.shape_11,p:{scaleX:1.1328,scaleY:1.1082,x:776.7389,y:734.389}},{t:this.shape_10,p:{scaleX:1.1328,scaleY:1.1082,x:778.4948,y:766.6939}},{t:this.shape_9,p:{scaleX:1.1328,scaleY:1.1082,x:755.6117,y:766.6939}},{t:this.shape_8,p:{scaleX:1.1328,scaleY:1.1082,x:767.1382,y:766.6385}},{t:this.shape_7,p:{scaleX:1.1328,scaleY:1.1082,x:767.0643,y:767.9684}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


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


(lib.Compound_Path_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A4F55").s().p("Aw7L7IhpCgIyAiHIg1iAIQv5hISBCHIAIAUIgRAaIABAAIAHAUIgBACIACAAIAIAUIgKAOIBNAJIBkhcIHuC/IMKmmIO3KYIgCAVIgbAPIABAAIgDAVIgCACIACABIgDAVIgPAIIDWCVIgDARIlbDBIltgVIydKDIj0irIpOIag");
	this.shape.setTransform(239.375,105.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Compound_Path_Layer_1, null, null);


(lib.Clip_Group_0_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfEPIAAo9IA/AgIAAI9g");
	this.shape.setTransform(158.35,171.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiMglIAAhAIEYCLIAABAg");
	this.shape_1.setTransform(38.9,34.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C2F30").s().p("Ag9AYIB7hCIAAASIh7BDg");
	this.shape_2.setTransform(191.425,238.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4F5557").s().p("AkaggIAAjaIFuCyIDHFDg");
	this.shape_3.setTransform(46.425,33.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4F5557").s().p("At3CSIAAyaIbuN4IAASZg");
	this.shape_4.setTransform(96.5,139.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C2F30").s().p("AtaCCIgnyFIAUgLIbvN4IAASaIgVALg");
	this.shape_5.setTransform(97.5,138.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8A9396").s().p("At3B9IAAxlIbvNsIAARlg");
	this.shape_6.setTransform(99.05,137.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AuAmwIATgKIbuNrIgTAKg");
	this.shape_7.setTransform(100.025,80.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9BA5A8").s().p("AgJotIATgJIAARkIgTAKg");
	this.shape_8.setTransform(188.775,180.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8A9396").s().p("At3B9IAAxlIbvNsIAARlg");
	this.shape_9.setTransform(101.2,136.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AuAmwIATgKIbuNrIgTAKg");
	this.shape_10.setTransform(102.175,79.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9BA5A8").s().p("AgJotIATgJIAARkIgTAKg");
	this.shape_11.setTransform(190.925,179.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8A9396").s().p("At3B9IAAxlIbuNsIAARlg");
	this.shape_12.setTransform(103.35,135.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AuAmwIATgKIbuNrIgTAKg");
	this.shape_13.setTransform(104.325,78.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9BA5A8").s().p("AgJotIATgKIAARlIgTAJg");
	this.shape_14.setTransform(193.075,178.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#414647").s().p("AgpgsIBTAsIhTAtg");
	this.shape_15.setTransform(191.425,235.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4F5557").s().p("At3CSIAAyaIbuN4IAASZg");
	this.shape_16.setTransform(106.85,133.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C2F30").s().p("AtaCCIgnyFIAUgLIbvN4IAASaIgVALg");
	this.shape_17.setTransform(107.85,133.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C2F30").s().p("AChC5InDmuIAPgIIFqCxIDMFJg");
	this.shape_18.setTransform(47.225,33.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgfEPIAAo9IA/AgIAAI9g");
	this.shape_19.setTransform(171.525,164.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AiMglIAAhBIEYCMIAABAg");
	this.shape_20.setTransform(52.05,27.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C2F30").s().p("Ag9AYIB7hCIAAASIh7BDg");
	this.shape_21.setTransform(204.6,230.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4F5557").s().p("AkagfIAAjbIFuCyIDHFCg");
	this.shape_22.setTransform(59.575,25.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4F5557").s().p("At3CSIAAyaIbvN4IAASag");
	this.shape_23.setTransform(109.675,131.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2C2F30").s().p("AtZCBIgoyEIAUgLIbvN4IAASaIgUALg");
	this.shape_24.setTransform(110.65,131.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8A9396").s().p("At2B9IAAxkIbuNrIAARkg");
	this.shape_25.setTransform(112.2,129.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AuAmwIATgKIbuNrIgTAKg");
	this.shape_26.setTransform(113.175,72.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9BA5A8").s().p("AgJotIATgJIAARkIgTAJg");
	this.shape_27.setTransform(201.925,172.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8A9396").s().p("At3B9IAAxkIbvNrIAARkg");
	this.shape_28.setTransform(114.35,128.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AuAmwIATgKIbuNrIgTAKg");
	this.shape_29.setTransform(115.325,71.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9BA5A8").s().p("AgJotIATgJIAARkIgTAJg");
	this.shape_30.setTransform(204.075,171.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8A9396").s().p("At2B9IAAxlIbtNtIAARkg");
	this.shape_31.setTransform(116.55,127.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AuAmwIATgKIbuNrIgTAKg");
	this.shape_32.setTransform(117.5,70.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9BA5A8").s().p("AgJotIASgJIAARkIgSAJg");
	this.shape_33.setTransform(206.25,170.775);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#414647").s().p("AgpgsIBTAsIhTAsg");
	this.shape_34.setTransform(204.575,227.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4F5557").s().p("At3CRIAAyZIbuN3IAASag");
	this.shape_35.setTransform(120,125.875);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2C2F30").s().p("AtZCBIgoyEIAUgLIbvN4IAASaIgVALg");
	this.shape_36.setTransform(121,125.325);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2C2F30").s().p("ACiC5InFmuIAQgIIFqCxIDMFJg");
	this.shape_37.setTransform(60.4,25.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_0_Layer_3, null, null);


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


(lib.Path_Layer_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#08536F").s().p("AwiiZQgLgQAEgXQAHgtBIghQBJghOSluIOFloIAPgJQATgJASgCQA4gKAWA4IAkBYI6wevg");
	this.shape_1.setTransform(106.7467,105.1806);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_Layer_1_1, null, null);


(lib.Path_16_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ak1Q3QgKgBhHgLQhKgLgGgDQg9gYgBggQgBgaAqgsIBihbQBEhBAng4IBtiPQAVgigVgNQgVgNgkAZIixB0QgjAbgbAIQgcAIgagOQghgRgCghQgBgeAVgaID/j8QBcheBdgTQhGhCA3hQIAHgNQgQgfAGhMQAFhIAOgXQBQjmBMjoQCImdABg2QAiCZA+CfQB/FHCUAkIhFI0QgNAUgXBcQgZBOglgQIgOAZQgOATgWAMQgeARgjgCQAdBVg7BoQhxDJgmBKIgXAkQgfAqgpAjQh2BiieAAIgmgBg");
	this.shape.setTransform(56.27,108.7812);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_16_Layer_1, null, null);


(lib.Path_11_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25282B").s().p("AFDagMggNgfSIAOhwIIWi3QAmgQAWgEQAcgJAUACQAYADATASICWCSQABgFAGgJIgBAAIAFgHIAAAAIh+h7QgbgaAAglQgBgmAagbIPBvfQAagbAlAAQAlgBAbAaIKFJxQALALADAPIABAFQADAPALAKID1DuQAMAKAOADIAGABQAQAEAJAKIKOJ5QAbAaAAAmQABAlgaAbIvBPeQgaAbgmABQglAAgbgaIh1hxIgBABIgFADIgBABQgJAGgFAAICDCAQAXAWgCAmQgCAWgNAqIilImQgHAXgFAJQgNArgYADIgDAAQgeAAg2g4g");
	this.shape.setTransform(173.9255,175.2068);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11_Layer_1, null, null);


(lib.Path_10_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25282B").s().p("AFDagMggNgfSIAOhwIIWi3QAqgQASgEQAcgIAUACQAYACATASICXCTQABgIAFgHIAAAAIADgFIABgBIABgBIh+h6QgbgagBgmQgBgmAagaIPBvfQAagbAlgBQAlAAAbAaIKFJxQALALADAOIABAFQADAOALALID2DuQAKAKAPADIAGABQAOADAMALIKNJ5QAbAaAAAmQABAlgaAbIvBPeQgaAbgmABQglAAgbgaIh1hxIgGAFIgBAAQgHAGgHABICDB/QAXAXgCAmQgCAVgNAqIilImQgEARgHAQQgOAqgYADIgDAAQgeAAg2g4g");
	this.shape.setTransform(173.9255,175.1843);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10_Layer_1, null, null);


(lib.Path_8_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#121212").s().p("AA0SOQgbgNhEiBQhBh+gEgDQirhghAiIQgUgrgGgqIgEghIAMlmQgggVgHgzIgDhEQglgggIhQIAJxVQElCGCrBbQD8CFC0CDQgRAAgiAIIgjAJQhUAEgJACQhAAQAEA3IAzIeQABAagIAaQgKAjgYAUIAAAiQAKBchVAaQAbAXAKANQAvAjAcBBIBvFWQASAlgPAiQgOAhgfgEQgxgGgfg5IhYizQgjhGgdgQQgMgIgQAFQgbAJgJAmIgVDWQABAvAoBwQAWA8AmBkQAcBWgYAiQgMASgUAAQgPAAgTgJg");
	this.shape.setTransform(45.25,117.511);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8_Layer_1, null, null);


(lib.Path_6_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#060A0B").s().p("AiSH+QiHgshfhqQhdhnggiGQgXgFgQgSQgRgRgCgZQgDgZANgVQAMgUAXgKQAChNAYhIQBGjUDHhkQDHhlDSBHQDUBFBkDHQBkDHhGDTQhFDTjHBkQh2A7h5AAQhUAAhXgdg");
	this.shape.setTransform(56.0953,53.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6_Layer_1, null, null);


(lib.Path_5_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#060A0B").s().p("AiSH+QiHgshfhqQhdhnggiGQgXgFgQgSQgRgSgCgYQgDgZANgVQAMgUAXgKQAChMAYhKQBGjTDHhkQDHhlDSBGQDUBGBkDHQBkDHhGDTQhFDTjHBkQh1A7h6AAQhUAAhXgdg");
	this.shape.setTransform(56.0911,53.7542);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_Layer_1, null, null);


(lib.Path_3_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2DFDC").s().p("AhKDPQgqgZgMgwIg3jWQgKgnAJggQAKglAhgQQAjgRA+gCQAeAAAXACQA7AGAmAbQAlAbAMAwIAdBvQARA/giA+QgjBBhGATIgwANQgPAEgOAAQgfAAgcgRg");
	this.shape.setTransform(18.9814,22.3654);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_Layer_1, null, null);


(lib.Path_2_Layer_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B2DFDC").s().p("AheDPQgZgYgKgnIg3jWQgMgvAYgrQAZgqAvgMIAwgMQBFgRA+AnQA8AmAQBAIAdBvQAZBfhlBGQgaASgYALQgmARgdAIIgWAEIgFAAQghAAgZgZg");
	this.shape_2.setTransform(18.8859,23.1616);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_Layer_1_2, null, null);


(lib.Path_1_Layer_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ao1mdIK4hEIGzGnIjRIbg");
	this.shape_2.setTransform(56.625,48.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_Layer_1_2, null, null);


(lib.Path_1_0_Layer_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4F55").s().p("A0ckLQAKgIAMgGIejsbQANgEAMgBIJnXlQgKAJgMAFIrkEtQggANh6gQQiogVgbgBQgPgBgOABQgXABgLAEItkFiQgMAEgOABg");
	this.shape_2.setTransform(130.9,108.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0_Layer_1_2, null, null);


(lib.Group_2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#121212").s().p("AglAWQgFgEgCgGQgCgHAEgFQADgFAHgCIA5gPQAHgCAGADQAGAEABAGQACAHgDAFQgEAGgHABIg5AQIgEAAQgFAAgEgCg");
	this.shape.setTransform(12.8889,2.3861);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#121212").s().p("AgkAWQgGgEgDgGQgBgHADgFQAEgGAGgBIA6gQQAHgBAGADQAFAEACAGQACAHgEAFQgDAFgGACIg7APIgEABQgEAAgDgCg");
	this.shape_1.setTransform(42.45,116.8139);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#121212").s().p("AgdIlQgxgdgOg3IhBj7QgKgpAOgoQAOgnAggZIgYhfQgpgGgfgbQgggcgLgpIhAj7QgPg3AdgyQAdgxA4gOIA5gPQAvgLAvALQAtALAjAcIASgeQAEgIAJABQAIACACAIIAGAYQAHAYgLAZQATAcAJAgIAhCCQAcBrh3BSIgjAZQgHAEgJALIAaBkQAKAFAKABIAuADQCOANAcBtIAhCCQAJAggEAiQAVAQAHAZIAGAYQACAIgHAFQgHAFgHgEIgfgSQgSArghAeQgkAhgvANIgvANIgBAAIgJACQgSAFgSAAQgkAAgggUg");
	this.shape_2.setTransform(31.5912,59.5728);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2_Layer_1, null, null);


(lib.Group_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#121212").s().p("AglAWQgFgEgCgGQgCgHADgFQAEgGAHgBIA5gPQAHgCAGADQAGAEABAGQACAHgDAFQgEAFgHACIg5APIgFABQgEAAgEgCg");
	this.shape.setTransform(12.875,2.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#121212").s().p("AgkAWQgGgEgCgGQgCgHAEgFQADgFAHgCIA5gPQAHgCAGADQAGAEABAGQACAHgDAFQgEAGgGABIg6AQIgEAAQgFAAgDgCg");
	this.shape_1.setTransform(42.4389,116.8361);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#121212").s().p("AgdIlQgxgdgOg3IhBj7QgKgpAOgoQAOgnAggZIgZhfQgogGgfgbQgggcgLgpIhBj7QgOg4AdgxQAdgxA4gPIA5gOQAvgLAvALQAtAKAjAdIASgfQAEgHAJABQAIABACAJIAGAYQAHAYgLAZQAUAdAIAfIAhCCQAcBrh3BRIgjAaQgIAFgIAKIAaBkQANAFAHAAIAuAEQCOANAcBtIAhCCQAJAggEAiQAVAQAGAYIAHAZQACAIgHAFQgHAFgHgEIgfgSQgSAqghAfQgkAhgvANIgvAMIgBAAIgJADQgSAFgSAAQgkAAgggUg");
	this.shape_2.setTransform(31.58,59.6139);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_Layer_1, null, null);


(lib.Compound_Path_Layer_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#09181F").s().p("AEcU5I5c4qQgVgVgBgeQgBgeAWgVIPAvfQAVgWAdAAQAfgBAVAVIKDJxQAHAGACAKIACAFQAEAVAPAOID1DtQAPAPAUAEIAGABQAJACAHAGIKNJ5QAWAUAAAeQAAAegUAVIvBPfQgVAWgdAAIgCAAQgdAAgVgUg");
	this.shape_1.setTransform(136.7,135.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Compound_Path_Layer_1_1, null, null);


(lib.Compound_Path_0_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25282B").s().p("AGgJCIgLgPIgCABIABAKIhjgFIArgeIAAAAIgrAeIg2hNQgGADgGgBQgHgCgDgFIj+lmQgDgGAAgGQABgGAFgEImWo6QgEgGACgHQABgHAFgDIARgMIgGgIQgEgGABgGQACgHAFgEIBCgvQAFgEAHABQAHABAEAGIA6BSIgCgDIBcAPICsD1QADAEgBAFQgBAFgDADQgEADgFgBQgFgBgDgEIijjlIg5gKIAMARIAoAGICtD1QADAEAAAFQgBAFgFADQgEADgFgBQgFgBgDgEIijjlIgFgBIEeGVQAGgDAGABQAGACAEAEID/FmQADAFAAAHQgBAGgFAEIA3BNIAGBHIAAAAIADAUIgDACIALAPQADADgBAEQgBADgDACg");
	this.shape.setTransform(43.1938,58.0295);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Compound_Path_0_Layer_1, null, null);


(lib.Scene_1_hide_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hide_button
	this.hide_button = new lib.button();
	this.hide_button.name = "hide_button";
	this.hide_button.parent = this;
	this.hide_button.setTransform(759.75,759.85,0.3258,1.2379,-0.5608,0,0,0.3,0.2);
	new cjs.ButtonHelper(this.hide_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.hide_button).wait(3));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_buttons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buttons
	this.computer_button = new lib.button();
	this.computer_button.name = "computer_button";
	this.computer_button.parent = this;
	this.computer_button.setTransform(349.4,357.95,0.9843,4.3922,-49.5293,0,0,-8.2,0.2);
	new cjs.ButtonHelper(this.computer_button, 0, 1, 1);

	this.folder_button = new lib.button();
	this.folder_button.name = "folder_button";
	this.folder_button.parent = this;
	this.folder_button.setTransform(635.2,630.6,0.8276,3.9733,70.4688,0,0,-8.1,0.2);
	new cjs.ButtonHelper(this.folder_button, 0, 1, 1);

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

	this.folder3_button = new lib.button();
	this.folder3_button.name = "folder3_button";
	this.folder3_button.parent = this;
	this.folder3_button.setTransform(738.45,552.55,0.6157,1.8376,59.9988,0,0,0.7,0);
	new cjs.ButtonHelper(this.folder3_button, 0, 1, 1);

	this.folder1_button = new lib.button();
	this.folder1_button.name = "folder1_button";
	this.folder1_button.parent = this;
	this.folder1_button.setTransform(456.15,556.95,0.5062,3.1227,29.9984,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.folder1_button, 0, 1, 1);

	this.folder6_button = new lib.button();
	this.folder6_button.name = "folder6_button";
	this.folder6_button.parent = this;
	this.folder6_button.setTransform(497.75,171.95,0.7943,1.4796,25.5185,0,0,2.1,0.6);
	new cjs.ButtonHelper(this.folder6_button, 0, 1, 1);

	this.folder5_button = new lib.button();
	this.folder5_button.name = "folder5_button";
	this.folder5_button.parent = this;
	this.folder5_button.setTransform(411.7,226.85,0.7682,0.676,25.5193,0,0,1.7,0.5);
	new cjs.ButtonHelper(this.folder5_button, 0, 1, 1);

	this.folder4_button = new lib.button();
	this.folder4_button.name = "folder4_button";
	this.folder4_button.parent = this;
	this.folder4_button.setTransform(374.05,290.15,0.8227,0.7393,25.5432,0,0,1.6,0.6);
	new cjs.ButtonHelper(this.folder4_button, 0, 1, 1);

	this.folder2_button = new lib.button();
	this.folder2_button.name = "folder2_button";
	this.folder2_button.parent = this;
	this.folder2_button.setTransform(574.2,593.2,0.4838,3.0183,29.9986,0,0,0,0.3);
	new cjs.ButtonHelper(this.folder2_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.folder_button},{t:this.computer_button}]}).to({state:[{t:this.file1_button},{t:this.file2_button},{t:this.file3_button},{t:this.file4_button},{t:this.file5_button},{t:this.file6_button}]},1).to({state:[{t:this.folder2_button},{t:this.folder4_button},{t:this.folder5_button},{t:this.folder6_button},{t:this.folder1_button},{t:this.folder3_button}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


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


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Compound_Path_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(239.3,105.1,1,1,0,0,0,239.3,105.1);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,478.8,210.3), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwOCwIAA1uMAgdAQPIAAVug");
	mask.setTransform(103.85,132.075);

	// Layer_3_obj_
	this.Layer_3 = new lib.Clip_Group_0_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(109.2,121.4,1,1,0,0,0,109.2,121.4);
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

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(7.8,10.6,199.89999999999998,232.1), null);


(lib.Clip_Group_Layer_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#25282B").s().p("AgUAuIACguQgIgNAAgNQABgQAKgIQAIgFAJACIAFACQAIAEAFAJQAGAIAAAKQADATgNAJIgCAvg");
	this.shape_1.setTransform(310.2694,701.1359);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#25282B").s().p("Ag6LjIAA3yIB1AoIgpX3g");
	this.shape_2.setTransform(606.3,325.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A4F55").s().p("Aw3CmIAAvQIBEibIhEkDMAg/AQjIAwD2IgwCmIAAPSg");
	this.shape_3.setTransform(500.7,277.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#25282B").s().p("AwOCwIAA1uMAgcAQPIAAVug");
	this.shape_4.setTransform(496.55,276.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3F3F3").s().p("AjFAZIAAj3IGLDGIAAD3g");
	this.shape_5.setTransform(314.55,674.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#127EA6").s().p("AjcAlIAAklIG5DcIAAElg");
	this.shape_6.setTransform(314.55,674.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A4F55").s().p("Aw4gyIAAvSMAhxAQ3IAAPSg");
	this.shape_7.setTransform(321.075,702.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ABB7AF").s().p("Axpn/IBhg4MAhxAQ3IhgA5g");
	this.shape_8.setTransform(325.9,609.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#54595E").s().p("Agvg6IBfg5IAAC3IhfAwg");
	this.shape_9.setTransform(434.025,672.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4A4F55").s().p("Aw4m0IAAi/MAhxAQ4IAACvg");
	this.shape_10.setTransform(321.075,621.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#54595E").s().p("AxQnNIBEibMAhdAQrIgwCmg");
	this.shape_11.setTransform(323.475,645.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#25282B").s().p("AxQCcIAAvRIBEibIhEkDMAhxAQ5IAwD2IgwCmIAAPSg");
	this.shape_12.setTransform(323.475,681.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#25282B").s().p("Aw4B/IAA1uMAhxAQ4IAAVuIhgA5g");
	this.shape_13.setTransform(330.725,679.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E6E6E6").s().p("AtGiNIaNtHIAARiI6NNHg");
	this.shape_14.setTransform(516.5,702.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F3F3F3").s().p("AtXiEIavtZIgiR0I6NNHg");
	this.shape_15.setTransform(514.8,699.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgfEPIAAo9IA/AgIAAI9g");
	this.shape_16.setTransform(427.2,680.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F3F3F3").s().p("AiMgmIAAg/IEZCLIAABBg");
	this.shape_17.setTransform(307.725,543.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C2F30").s().p("Ag8AXIB5hBIAAASIh5BDg");
	this.shape_18.setTransform(460.25,747.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1BA8DF").s().p("AkaggIAAjaIFuCyIDHFDg");
	this.shape_19.setTransform(315.225,542.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1BA8DF").s().p("At3CRIAAyaIbvN4IAASag");
	this.shape_20.setTransform(365.325,648.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#127EA6").s().p("AtZCBIgnyEIATgLIbuN4IAASaIgTALg");
	this.shape_21.setTransform(366.3,647.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8A9396").s().p("At2B8IAAxkIbuNsIAARlg");
	this.shape_22.setTransform(367.9,646.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AuAmwIATgJIbuNqIgTAJg");
	this.shape_23.setTransform(368.85,589.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9BA5A8").s().p("AgIotIARgJIAARkIgRAKg");
	this.shape_24.setTransform(457.6,689.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8A9396").s().p("At2B8IAAxkIbuNsIAARlg");
	this.shape_25.setTransform(370.05,645.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AuAmwIATgJIbuNqIgTAKg");
	this.shape_26.setTransform(371,588.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9BA5A8").s().p("AgIotIASgKIAARlIgSAKg");
	this.shape_27.setTransform(459.75,688.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8A9396").s().p("At3B8IAAxkIbvNsIAARkg");
	this.shape_28.setTransform(372.2,644.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AuAmwIATgKIbuNrIgTAKg");
	this.shape_29.setTransform(373.15,587.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9BA5A8").s().p("AgIotIASgKIAARlIgSAJg");
	this.shape_30.setTransform(461.9,687.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#414647").s().p("AgpgrIBTArIhTAtg");
	this.shape_31.setTransform(460.25,744.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1BA8DF").s().p("At3CSIAAyaIbvN3IAASag");
	this.shape_32.setTransform(375.675,642.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#127EA6").s().p("AtZCBIgnyEIATgLIbuN4IAASaIgTALg");
	this.shape_33.setTransform(376.65,641.975);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#127EA6").s().p("AChC5InDmuIAPgIIFrCxIDMFJg");
	this.shape_34.setTransform(316.05,541.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgfEPIAAo9IA/AgIAAI9g");
	this.shape_35.setTransform(457.625,620.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F3F3F3").s().p("AiMglIAAhAIEYCLIAABAg");
	this.shape_36.setTransform(338.15,483.525);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2C2F30").s().p("Ag8AYIB6hCIAAASIh6BDg");
	this.shape_37.setTransform(490.7,686.975);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D4116E").s().p("AkaggIAAjaIFuCyIDHFDg");
	this.shape_38.setTransform(345.675,482.125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D4116E").s().p("At3CSIAAyaIbvN4IAASZg");
	this.shape_39.setTransform(395.775,587.925);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#970D56").s().p("AtZCCIgoyFIAUgKIbvN3IAASaIgUALg");
	this.shape_40.setTransform(396.75,587.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#8A9396").s().p("At3B8IAAxkIbvNsIAARlg");
	this.shape_41.setTransform(398.3,586);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AuAmwIATgJIbuNqIgTAJg");
	this.shape_42.setTransform(399.275,529.25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9BA5A8").s().p("AgJotIATgJIAARkIgTAKg");
	this.shape_43.setTransform(488.025,629.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#8A9396").s().p("At2B8IAAxkIbtNsIAARlg");
	this.shape_44.setTransform(400.5,584.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AuAmwIATgJIbuNqIgTAJg");
	this.shape_45.setTransform(401.45,528.15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#9BA5A8").s().p("AgJotIASgKIAARlIgSAKg");
	this.shape_46.setTransform(490.2,628.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#8A9396").s().p("At2B9IAAxkIbtNrIAARkg");
	this.shape_47.setTransform(402.65,583.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AuAmwIATgKIbuNrIgTAKg");
	this.shape_48.setTransform(403.6,527.05);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9BA5A8").s().p("AgJotIASgKIAARlIgSAJg");
	this.shape_49.setTransform(492.35,627.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#414647").s().p("AgpgrIBTArIhTAtg");
	this.shape_50.setTransform(490.7,683.85);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D4116E").s().p("At3CSIAAyaIbvN3IAASag");
	this.shape_51.setTransform(406.125,582.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#970D56").s().p("AtaCBIgnyEIAUgLIbvN4IAASaIgUALg");
	this.shape_52.setTransform(407.1,581.675);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#970D56").s().p("AChC5InEmuIAQgIIFqCxIDNFJg");
	this.shape_53.setTransform(346.5,481.65);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F3F3F3").s().p("Ai1DLIFJnUIAiA/IlJHUg");
	this.shape_54.setTransform(490.575,602.575);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F3F3F3").s().p("AhchvIAlg1ICUEUIglA1g");
	this.shape_55.setTransform(471.75,421.775);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2C2F30").s().p("AhKAAIALgOICKAPIgKAOg");
	this.shape_56.setTransform(479.375,675.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3CB9E4").s().p("Aihi9IB+iyIDFFlIgXF6g");
	this.shape_57.setTransform(473.575,424.975);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FC0D1B").s().p("AhDAyIB5iHIAOANIhkBuIAaAYIgVAYg");
	this.shape_58.setTransform(499.1,531.025);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FC0D1B").s().p("AggBJIAYglIgXgVIgiAcIgPgOICRhyIAQAPIhiCcgAgGgFIAQAOIAlg3IAHgKg");
	this.shape_59.setTransform(493.325,526.65);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FC0D1B").s().p("AhDA+IB5iHIAOAMIh6CHg");
	this.shape_60.setTransform(489.85,521.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FC0D1B").s().p("AhMBFIBkhuIgSgQIAWgYIAxAsIgWAZIgRgRIhkBvg");
	this.shape_61.setTransform(486.575,516.95);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FC0D1B").s().p("AgxBOIBAh/IgBAAIhaBmIgNgLIB6iHIARAQIg+B+IAAAAIBahlIAMALIh5CHg");
	this.shape_62.setTransform(479.4,512.075);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FC0D1B").s().p("AhPAzIB5iHIAmAiIgWAXIgXgVIgbAeIAWATIgVAXIgVgTIggAjIAYAVIgWAYg");
	this.shape_63.setTransform(473.325,506.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FC0D1B").s().p("Ag5BHIgTgQIB5iHIAVATQAPAOgGAZQgIAagcAeQgdAhgZAKQgKAEgIAAQgNAAgLgKgAgpAsIAGAFQAUASAngtQAogrgTgQIgHgHg");
	this.shape_64.setTransform(466.271,500.1423);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FC0D1B").s().p("AhDA+IB5iHIAOAMIh6CHg");
	this.shape_65.setTransform(462.4,496.75);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FC0D1B").s().p("AhPA+IB6iHIAlAhIgVAYIgYgVIggAjIAWATIgVAXIgVgUIgwA2g");
	this.shape_66.setTransform(458.575,492.25);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FC0D1B").s().p("AgxBOIA/h/IAAAAIhbBmIgMgLIB5iHIASAQIg/B+IABAAIBZhlIANALIh5CHg");
	this.shape_67.setTransform(452.225,487.575);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FC0D1B").s().p("Ag+BGQgPgNAIgaQAIgYAfgiQAegiAYgKQAYgLAPANQAPAOgJAZQgIAZgfAhQgeAigXAKQgLAFgJAAQgLAAgIgHgAASgsQgOAHgUAXQgUAVgHAQQgGAPAIAIQARAPAoguQApgtgQgPQgDgDgGAAQgGAAgIAEg");
	this.shape_68.setTransform(444.9615,480.975);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FC0D1B").s().p("Ag/BEQgPgNAJgZQAJgZAeggQASgUASgOQARgLAQgEQAOgCAKAJQAJAIABASIgaAUQAAgHgBgGQgBgFgEgFQgIgGgPAIQgPAIgTAWQgpAsARAPQAHAGAQACIgWAYQgOAAgKgJg");
	this.shape_69.setTransform(439.1027,475.806);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3CB9E4").s().p("AspmHIKnvEIOsbTIqnPEg");
	this.shape_70.setTransform(458.775,540.325);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#127EA6").s().p("ABiVKIuA7NIJ7vJIAVACIOtbTIqnPEg");
	this.shape_71.setTransform(462.1,540.475);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#8A9396").s().p("AsdmYIKIuYIOzbJIqIOYg");
	this.shape_72.setTransform(461.975,540.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AHPNkIuy7JIAVADIOybIg");
	this.shape_73.setTransform(495.425,494.35);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#9BA5A8").s().p("AlOHKIKHuXIAWADIqHOYg");
	this.shape_74.setTransform(510.4,627.275);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#8A9396").s().p("AsdmYIKIuYIOzbIIqIOZg");
	this.shape_75.setTransform(464.375,540.55);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AHPNjIuy7JIAVAEIOybJg");
	this.shape_76.setTransform(497.825,494.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#9BA5A8").s().p("AlOHLIKHuYIAVAEIqHOXg");
	this.shape_77.setTransform(512.8,627.575);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#8A9396").s().p("AsdmYIKIuYIOybJIqHOYg");
	this.shape_78.setTransform(466.75,540.875);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AHPNjIuy7JIAVAEIOybJg");
	this.shape_79.setTransform(500.225,495.025);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#9BA5A8").s().p("AlNHLIKGuYIAVAEIqHOXg");
	this.shape_80.setTransform(515.2,627.925);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#414647").s().p("AguAfIAyhIIArBTg");
	this.shape_81.setTransform(479.925,671.55);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#3CB9E4").s().p("AspmHIKnvEIOsbTIqnPEg");
	this.shape_82.setTransform(470.525,541.575);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#127EA6").s().p("ABiVKIt/7NIJ5vJIAXACIOrbTIqmPEg");
	this.shape_83.setTransform(473.85,541.725);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#127EA6").s().p("AAQDxIh5pkIARADIDCFhIgXGDg");
	this.shape_84.setTransform(480.6,425.35);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#ABB7AF").s().p("AwOn8IAAgUMAgcAQNIAAAUg");
	this.shape_85.setTransform(496.55,366.75);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AjFAZIAAj3IGLDGIAAD3g");
	this.shape_86.setTransform(483.325,427.75);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#127EA6").s().p("AjcAlIAAklIG5DcIAAEmg");
	this.shape_87.setTransform(483.325,427.75);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#25282B").s().p("AvmniIgKgnIfhPkIAAAvg");
	this.shape_88.setTransform(499.45,389.025);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#25282B").s().p("Ag6LjIAA3xIB1AmIgpX4g");
	this.shape_89.setTransform(606.3,485.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#54595E").s().p("AwfmpIAAi/MAg/AQhIAACwg");
	this.shape_90.setTransform(498.3,376.55);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#54595E").s().p("Aw3nCIBEibMAgrAQVIgwCmg");
	this.shape_91.setTransform(500.7,401.325);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#4A4F55").s().p("Aw3CmIAAvQIBEibIhEkDMAg/AQjIAwD1IgwCnIAAPRg");
	this.shape_92.setTransform(500.7,437.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#25282B").s().p("AwOCwIAA1uMAgcAQPIAAVug");
	this.shape_93.setTransform(496.55,436.275);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgfEPIAAo9IA/AgIAAI9g");
	this.shape_94.setTransform(503.275,635.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AiMglIAAhAIEZCLIAABAg");
	this.shape_95.setTransform(383.8,498.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#2C2F30").s().p("Ag9AYIB7hCIAAASIh7BDg");
	this.shape_96.setTransform(536.35,701.675);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#4F5557").s().p("AkagfIAAjaIFuCxIDHFCg");
	this.shape_97.setTransform(391.325,496.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#4F5557").s().p("At3CRIAAyaIbvN5IAASag");
	this.shape_98.setTransform(441.425,602.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#2C2F30").s().p("AtZCBIgoyEIAVgLIbuN4IAASaIgUALg");
	this.shape_99.setTransform(442.4,602.075);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#8A9396").s().p("At3B9IAAxlIbuNtIAARkg");
	this.shape_100.setTransform(444,600.65);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AuAmwIATgKIbuNrIgTAKg");
	this.shape_101.setTransform(444.95,543.925);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#9BA5A8").s().p("AgJotIATgJIAARkIgTAJg");
	this.shape_102.setTransform(533.7,643.975);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#8A9396").s().p("At3B9IAAxkIbuNrIAARkg");
	this.shape_103.setTransform(446.15,599.55);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AuAmwIATgKIbuNrIgTAKg");
	this.shape_104.setTransform(447.1,542.825);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#9BA5A8").s().p("AgJotIASgJIAARkIgSAJg");
	this.shape_105.setTransform(535.85,642.875);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#8A9396").s().p("At3B9IAAxkIbuNrIAARkg");
	this.shape_106.setTransform(448.3,598.45);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AuAmwIATgKIbuNrIgTAKg");
	this.shape_107.setTransform(449.25,541.725);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#9BA5A8").s().p("AgJotIASgJIAARkIgSAJg");
	this.shape_108.setTransform(538,641.775);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#414647").s().p("AgpgrIBTArIhTAtg");
	this.shape_109.setTransform(536.35,698.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#4F5557").s().p("At3CRIAAyZIbvN3IAASag");
	this.shape_110.setTransform(451.775,596.875);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#2C2F30").s().p("AtZCBIgoyEIAUgLIbvN4IAASaIgUALg");
	this.shape_111.setTransform(452.75,596.325);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#2C2F30").s().p("ACiC4InFmtIAQgIIFqCxIDMFKg");
	this.shape_112.setTransform(392.15,496.35);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgfEOIAAo8IA/AgIAAI9g");
	this.shape_113.setTransform(534.65,633.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AiMglIAAhBIEZCMIAABAg");
	this.shape_114.setTransform(415.175,496.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#2C2F30").s().p("Ag9AXIB6hBIAAARIh6BEg");
	this.shape_115.setTransform(567.7,699.675);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#08536F").s().p("AkaggIAAjaIFuCyIDHFDg");
	this.shape_116.setTransform(422.675,494.775);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#08536F").s().p("At3CRIAAyaIbvN5IAASag");
	this.shape_117.setTransform(472.775,600.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#25282B").s().p("AtZCBIgnyEIAUgLIbtN4IAASaIgTALg");
	this.shape_118.setTransform(473.75,600.075);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#8A9396").s().p("At2B8IAAxjIbuNrIAARkg");
	this.shape_119.setTransform(475.35,598.65);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AuAmwIATgKIbuNrIgTAKg");
	this.shape_120.setTransform(476.3,541.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#9BA5A8").s().p("AgIotIASgKIAARlIgSAJg");
	this.shape_121.setTransform(565.05,641.95);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#8A9396").s().p("At3B9IAAxkIbvNrIAARkg");
	this.shape_122.setTransform(477.5,597.55);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AuAmwIATgKIbuNrIgTAKg");
	this.shape_123.setTransform(478.45,540.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#9BA5A8").s().p("AgIotIASgKIAARlIgSAJg");
	this.shape_124.setTransform(567.2,640.85);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#8A9396").s().p("At3B9IAAxkIbvNrIAARlg");
	this.shape_125.setTransform(479.65,596.45);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AuAmwIATgKIbuNrIgTAJg");
	this.shape_126.setTransform(480.6,539.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#9BA5A8").s().p("AgIotIASgJIAARkIgSAKg");
	this.shape_127.setTransform(569.35,639.75);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#414647").s().p("AgpgsIBTAsIhTAsg");
	this.shape_128.setTransform(567.7,696.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#08536F").s().p("At3CRIAAyaIbvN5IAASag");
	this.shape_129.setTransform(483.125,594.85);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#25282B").s().p("AtZCBIgnyEIATgLIbuN4IAASaIgTALg");
	this.shape_130.setTransform(484.1,594.325);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#25282B").s().p("AChC5InDmuIAPgHIFrCvIDLFLg");
	this.shape_131.setTransform(423.5,494.3);

	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(498.1,590.95,1,1,0,0,0,105.4,126.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#ABB7AF").s().p("AtGiNIaNtHIAARiI6NNHg");
	this.shape_132.setTransform(312.2,599.275);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#F3F3F3").s().p("AtXiFIavtYIgiR0I6NNHg");
	this.shape_133.setTransform(310.5,596.175);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#737B7D").s().p("AwOCwIAA1uMAgcAQPIAAVtg");
	this.shape_134.setTransform(496.55,594.35);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#25282B").s().p("AyhdYMAAAhNHMAlEASYMAAABNHg");
	this.shape_135.setTransform(496.55,432.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#ABB7AF").s().p("Az48mMAnxgT6MAAABNIMgnxAT5g");
	this.shape_136.setTransform(742.525,428);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.instance},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_Layer_3_1, null, null);


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


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_16_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(56.2,108.8,1,1,0,0,0,56.2,108.8);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(0,0.8,112.6,216), null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_11_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(173.9,175.2,1,1,0,0,0,173.9,175.2);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,347.9,350.4), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_10_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(173.9,175.2,1,1,0,0,0,173.9,175.2);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,347.9,350.4), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_8_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(45.2,117.5,1,1,0,0,0,45.2,117.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,90.5,235), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_6_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(56.1,53.8,1,1,0,0,0,56.1,53.8);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,-0.1,112.2,107.8), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_5_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(56.1,53.8,1,1,0,0,0,56.1,53.8);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,-0.1,112.2,107.8), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_3_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(18.9,22.4,1,1,0,0,0,18.9,22.4);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,38,44.8), null);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_2 = new lib.Path_2_Layer_1_2();
	this.Layer_1_2.name = "Layer_1_2";
	this.Layer_1_2.parent = this;
	this.Layer_1_2.setTransform(18.9,23.2,1,1,0,0,0,18.9,23.2);
	this.Layer_1_2.depth = 0;
	this.Layer_1_2.isAttachedToCamera = 0
	this.Layer_1_2.isAttachedToMask = 0
	this.Layer_1_2.layerDepth = 0
	this.Layer_1_2.layerIndex = 0
	this.Layer_1_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(0,0,37.8,46.4), null);


(lib.Path_1_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_2 = new lib.Path_1_0_Layer_1_2();
	this.Layer_1_2.name = "Layer_1_2";
	this.Layer_1_2.parent = this;
	this.Layer_1_2.setTransform(130.9,108.2,1,1,0,0,0,130.9,108.2);
	this.Layer_1_2.depth = 0;
	this.Layer_1_2.isAttachedToCamera = 0
	this.Layer_1_2.isAttachedToMask = 0
	this.Layer_1_2.layerDepth = 0
	this.Layer_1_2.layerIndex = 0
	this.Layer_1_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0_2, new cjs.Rectangle(0,0,261.8,216.5), null);


(lib.Path_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_2 = new lib.Path_1_Layer_1_2();
	this.Layer_1_2.name = "Layer_1_2";
	this.Layer_1_2.parent = this;
	this.Layer_1_2.setTransform(56.6,48.1,1,1,0,0,0,56.6,48.1);
	this.Layer_1_2.depth = 0;
	this.Layer_1_2.isAttachedToCamera = 0
	this.Layer_1_2.isAttachedToMask = 0
	this.Layer_1_2.layerDepth = 0
	this.Layer_1_2.layerIndex = 0
	this.Layer_1_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_4, new cjs.Rectangle(0,0,113.3,96.3), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_1 = new lib.Path_Layer_1_1();
	this.Layer_1_1.name = "Layer_1_1";
	this.Layer_1_1.parent = this;
	this.Layer_1_1.setTransform(106.8,105.2,1,1,0,0,0,106.8,105.2);
	this.Layer_1_1.depth = 0;
	this.Layer_1_1.isAttachedToCamera = 0
	this.Layer_1_1.isAttachedToMask = 0
	this.Layer_1_1.layerDepth = 0
	this.Layer_1_1.layerIndex = 0
	this.Layer_1_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,213.5,210.4), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Group_2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(31.6,59.6,1,1,0,0,0,31.6,59.6);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,63.2,119.2), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Group_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(31.6,59.6,1,1,0,0,0,31.6,59.6);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0.1,63.2,119.2), null);


(lib.CompoundPath_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Compound_Path_0_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(43.2,58,1,1,0,0,0,43.2,58);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_0, new cjs.Rectangle(0,0,86.4,116.1), null);


(lib.CompoundPath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_1 = new lib.Compound_Path_Layer_1_1();
	this.Layer_1_1.name = "Layer_1_1";
	this.Layer_1_1.parent = this;
	this.Layer_1_1.setTransform(136.7,135.7,1,1,0,0,0,136.7,135.7);
	this.Layer_1_1.depth = 0;
	this.Layer_1_1.isAttachedToCamera = 0
	this.Layer_1_1.isAttachedToMask = 0
	this.Layer_1_1.layerDepth = 0
	this.Layer_1_1.layerIndex = 0
	this.Layer_1_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, new cjs.Rectangle(0,0,273.4,271.5), null);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.instance_3},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_2},{t:this.shape_3},{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(3));

}).prototype = p = new cjs.MovieClip();


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgXgA3pQq1kloWoXQoYoXklq1QkvrPgBsSQABsSEvrOQElq1IYoWQIWoYK1klQLOkvMSgBQMSABLPEvQK1ElIXIYQIXIWElK1QEvLOABMSQgBMSkvLPQklK1oXIXQoXIXq1ElQrPEvsSABQsSgBrOkvg");
	mask_1.setTransform(386.45,710.45);

	// Layer_3_obj_
	this.Layer_3_1 = new lib.Clip_Group_Layer_3_1();
	this.Layer_3_1.name = "Layer_3_1";
	this.Layer_3_1.parent = this;
	this.Layer_3_1.setTransform(541.4,461.4,1,1,0,0,0,541.4,461.4);
	this.Layer_3_1.depth = 0;
	this.Layer_3_1.isAttachedToCamera = 0
	this.Layer_3_1.isAttachedToMask = 0
	this.Layer_3_1.layerDepth = 0
	this.Layer_3_1.layerIndex = 0
	this.Layer_3_1.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_3_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_3_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(213,324,559.9,481.4), null);


(lib.Scene_1_images = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// images
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1BA8DF").s().p("ABaCGQgFgBgDgEIi6kHIAiAFICtD0QADAEgBAFQgBAFgEADQgDADgEAAIgDgBg");
	this.shape.setTransform(103.4625,302.2625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1BA8DF").s().p("AgWALIgZghIBGAMIAZAhg");
	this.shape_1.setTransform(92.05,290.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1BA8DF").s().p("Ag1AYQgEgFACgHQABgHAFgEIBBguQAGgEAHACQAGABAEAFIARAYIhcBBg");
	this.shape_2.setTransform(77.6545,284.0045);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1BA8DF").s().p("ABQDkQgHgCgEgFIj+lmQgEgFABgHQACgHAFgEIBahAQAGgEAHABQAGABAEAGID+FmQAEAFgBAHQgBAHgGAEIhaBAQgEADgGAAIgCAAg");
	this.shape_3.setTransform(131.175,359.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1BA8DF").s().p("AgSAHIAigXIACATIgSAOg");
	this.shape_4.setTransform(154.05,391.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BDC0C6").s().p("AgwASIBbhAIAHBFIgjAYg");
	this.shape_5.setTransform(150.65,387.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AmUnXIBdhCILMPwIhdBDg");
	this.shape_6.setTransform(114.475,336);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#454F6A").s().p("AAHATQgDAAgDgDIgRgZIAOgKIASAZQACADgBADQgBAEgDACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgCgBg");
	this.shape_7.setTransform(155.1917,393.4143);

	this.instance = new lib.CompoundPath_0();
	this.instance.parent = this;
	this.instance.setTransform(112.85,342.3,1,1,0,0,0,43.2,58);
	this.instance.alpha = 0.1211;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#77462E").s().p("AiYErQgCgcAMgZQANgZAYgPIAqgbQAKgHAMACQALACAIAJQALAMAPAAQAQAAALgMIAbggQAHgIgBgLQgCgLgJgHQgOgLACgSIAFgyQABgNAJgJQAIgJANgBQARgCAKgNQAKgOgDgSIgHgmQgEgSgOgKQgPgKgSADQgcAFgXgQIhSg6QgKgHgDgLQgEgMAFgMQAGgQgIgPQgHgPgRgEIgEgBQgegJgLgcIgDgIQA5gCA2ASQB+AqA8B3QA8B4gqB+QggBjhVA+QhRA7hmACg");
	this.shape_8.setTransform(254.0147,168.7191);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EAE7E5").s().p("AhgBDQgYgUgDgfQgDgeATgZQAUgYAfgDIClgQIAQCUIilARIgKAAQgZAAgVgQg");
	this.shape_9.setTransform(193.33,172.8766);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#53301B").s().p("AhkEzQh/gqg9h4Qg8h3Aqh+QAqiAB4g8QB3g8B+AqQB/AqA9B4QA8B4gqB9QgqCAh4A8QhGAjhJAAQgyAAg0gRg");
	this.shape_10.setTransform(238.275,168.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EAE7E5").s().p("Ah4FwQiZgyhIiQQhIiPAyiYQAziYCPhIQCPhICYAyQCYAzBICPQBICPgyCXQgyCZiQBIQhUAqhYAAQg8AAg+gUg");
	this.shape_11.setTransform(238.2792,168.7371);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D2D2D2").s().p("AioH/QjThGhkjHQhkjHBGjTQBGjTDGhkQDHhkDTBGQDTBGBkDGQBlDHhGDTQhGDTjHBkQh2A7h5AAQhUAAhXgcg");
	this.shape_12.setTransform(239.1458,168.6958);

	this.instance_1 = new lib.Path_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(233.8,162.4,1,1,0,0,0,56.1,53.8);
	this.instance_1.alpha = 0.3008;

	this.instance_2 = new lib.Path_6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(231.8,158.4,1,1,0,0,0,56.1,53.8);
	this.instance_2.alpha = 0.1211;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3CB9E4").s().p("AnPFNIAhgFQBLgMBYgdQBngkA0gdQBAgiBKg6QB0hbB+iLQBrh3BVh1IAEBIQhVBqhSBUQiECIh8BZQhKA3hGAhQg1AbhrAhQhaAbhMAJIgfACg");
	this.shape_13.setTransform(716.375,282.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3CB9E4").s().p("Al9GsIAFgfQAShLAjhWQArhmAggzQAohBBAhGQBlhyCTh2QBdhJByhKIBHAMQh3BEiIBiQiaBzhjBoQg/BBgrA/QgfAtgwBmQgoBagSBEIgIAhg");
	this.shape_14.setTransform(532.5,85.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6ACAEA").s().p("AoYM/IoAgQQgwgBgZgvQgRgggFgzIAKybQgDjZC9hNQB+gyDbAMQDQAMYBAkIsJNlIlLgGQlNgFgZABQhUAFgJACQhAAPAFA3IAxIeQADAtgVAlQgcAyg8AAIgEAAg");
	this.shape_15.setTransform(468.35,122.1369);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ACOB7IlfgSQhbAAgKhYIgIiLIJ8AYIAABdQAMCAirAAIgRAAg");
	this.shape_16.setTransform(389.9139,206.8399);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C59C70").s().p("AAyInQgbgNhEiBIhGiBQiqhfhAiJQgUgqgHgpIgDghIAOmwIDRg8IBqAxQAkgFBZA7QBRA2AcAjQAvAkAcBAIBvFWQARAkgOAiQgPAhgegEQgygHgeg4IhYiyQgjhFgdgRQgMgHgRAFQgLADgJALQgKANgFAUIgWDVQACAuAoBwIA7CgQAdBWgYAjQgMASgUAAQgPAAgTgKg");
	this.shape_17.setTransform(399.4535,258.511);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6ACAEA").s().p("AhXVBIolkFQgfgFCFlXICMlVQAHg+AJiWQAJiNACgQQAGgkA2qJIO2q2IhiMxQhuNLg2CEQhHCxhSDdQhMDHiHEYQgMAbggAIQgLADgLAAQgTAAgTgJg");
	this.shape_18.setTransform(694.2405,373.7339);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ABLDIIj/iEQiphUBNhxIAuhRIILD9IhGB5QgTAbghAMQgVAIgWAAQgbAAgegLg");
	this.shape_19.setTransform(660.8567,502.1851);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C59C70").s().p("AitG0QiXgWgKgEQg8gYgCggQgBgbArgrQAZgbBIhBQBEhAAng4IBtiPQAVgigVgMQgUgNglAZIixBzQgjAbgaAHQgdAIgagOQgggRgCggQgCgdAVgaID/j8QBKhMBLgbQBXghBSAlIDSB1IAPAQQAQAVAJAbQAdBUg6BnQhxDJgmBJQgeA6hCA3Qh3BjieAAIglgBg");
	this.shape_20.setTransform(631.6395,547.5039);

	this.instance_3 = new lib.Path_8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(407.1,198.8,1,1,0,0,0,45.2,117.5);
	this.instance_3.alpha = 0.1992;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B1409").s().p("AkpM2ImcjtQgPgJgBgIQgCgKAPgNQANgLA0gwQAWgTgCgNQgCgMgZgNIgNgGQhKgigSgRQgmgignhhIg4icIAAABQhCi7B8jjQBciqCsicIBfhVQDpjSE/A4QCNAZCFBMQCCBKBkBuIBoBzQDgD5AHEwQAGE+jvDZIhvBkQilCVjrAuQhQAQhLAAQirAAiPhUg");
	this.shape_21.setTransform(649.1736,158.3465);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C59C70").s().p("AiJCvQgcgfAAgnQgBgnAcgZICQjCQAcgZAnADQAnADAcAfQAbAeAAAoQgBAngcAaIiuCdQgYAVgpAEg");
	this.shape_22.setTransform(588.3,99.3535);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C59C70").s().p("Ah2CdQgmgFgcgeQgBgQAEgVQAIgpAXgVICuidQAcgZAoADQAnAEAbAeQAcAfgBAnQAAAogcAYIjQB8QgYAVgfAAIgMAAg");
	this.shape_23.setTransform(703.6904,227.1878);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C59C70").s().p("AgyMYQiSgGiFg+QiGg/hmhwQj7kWASkyQASkoEFjrQB9hxCbg7QCVg4CcACQCcADCMA8QCQA/BqB0QBpB1AwCWQAuCQgOCbQgNCchICQQhJCUh9BxQjuDYklAAIghgBg");
	this.shape_24.setTransform(631.3397,174.7542);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D4116E").s().p("AjVDfIgEgFIhjhuIEtiwQAbgQAMggIAvh+IDwgwIAEgDIgBADIADgBIgEAEIhHDqIiGAkQgaAFgLAKIgOASIjMEWg");
	this.shape_25.setTransform(586.425,217.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F3F3F3").s().p("AraEwIFiwMIRTTIIwxDxg");
	this.shape_26.setTransform(616.875,185.825);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6ACAEA").s().p("AFlVIQnBh1kjlBIoJpBQkwlQhTnYQgaiUgBiQIAFhyQABgiAJgzQAThlAohUQCAkMEmALQHHARHBEBQDhCBCGB9IIBI7IA/BZQBMBxA8B5QDCGIghFVQgcEgkPDUQhVBChjAyIhSAlIgfABQidAAjMg1g");
	this.shape_27.setTransform(631.3154,179.2062);

	this.instance_4 = new lib.Path_16();
	this.instance_4.parent = this;
	this.instance_4.setTransform(640.6,479.85,1,1,0,0,0,56.2,108.8);
	this.instance_4.alpha = 0.1992;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FC0D1B").s().p("AgQhFIg4AXIgQgqIBWgiIBbDpIgeAMg");
	this.shape_28.setTransform(528.9,652.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FC0D1B").s().p("AhXhPIAfgOIAgA0IAxgUIgLg9IAggMIAqD+IgkAPgAgBgCIA5BdIgWhrg");
	this.shape_29.setTransform(539.2,647.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FC0D1B").s().p("Ag8hvIAegLIBbDpIgeAMg");
	this.shape_30.setTransform(551.55,644.325);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FC0D1B").s().p("AgpBZIAmgPIhLjAIAdgMIBKDAIAmgPIAQApIhoArg");
	this.shape_31.setTransform(562.275,641.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FC0D1B").s().p("AhqhbIAlgQICBCYIAAAAIgbhBIgqhvIAZgKIBbDpIglAPIh/iWIgBAAIAaA/IArBwIgaAKg");
	this.shape_32.setTransform(573.925,635.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FC0D1B").s().p("AgJBdIAxgVIgUgzIguATIgQgoIAugTIgWg9IgzAVIgQgpIBQghIBbDqIhQAhg");
	this.shape_33.setTransform(586.975,629.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FC0D1B").s().p("AgTByQgegWgVg3QgXg5AIgmQAHgnAlgPIAngQIBaDqIgrARQgNAGgNAAQgTAAgTgPgAgchGQgqARAeBNQAdBLAngQIAPgGIg6iYg");
	this.shape_34.setTransform(601.0813,623.6016);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FC0D1B").s().p("Ag7huIAdgMIBaDpIgdAMg");
	this.shape_35.setTransform(610.325,620.425);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FC0D1B").s().p("AgdBdIAygVIgXg8IgvATIgQgoIAvgTIgkhcIAdgNIBbDqIhPAhg");
	this.shape_36.setTransform(620.475,617.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FC0D1B").s().p("AhqhbIAlgQICBCZIAAgBIgbhBIgqhvIAZgKIBbDpIglAPIiAiWIAAAAIBECvIgZAKg");
	this.shape_37.setTransform(632.125,611.575);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FC0D1B").s().p("AgNBtQgdgXgXg7QgXg6AFgmQAFglAggOQAggNAcAYQAdAZAXA6QAXA6gFAmQgFAlggAOQgMAEgLAAQgUAAgRgQgAgehOQgjAOAfBOQAeBQAjgPQARgHABgYQACgWgQgoQgQgngQgQQgKgLgMAAQgFAAgGACg");
	this.shape_38.setTransform(647.775,605.2613);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FC0D1B").s().p("AgCB5IgGgsIATAFQAJABAIgDQARgGAAgZQACgXgPgnQgfhOgiAOQgPAGgPAUIgQgpQALgTAWgJQAegNAbAZQAdAZAWA6QAOAjADAfQADAegJAWQgJAUgUAJQgJADgMAAQgMAAgNgEg");
	this.shape_39.setTransform(660.511,600.0966);

	this.instance_5 = new lib.Path_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(570.65,623.9,1,1,0,0,0,106.8,105.2);
	this.instance_5.alpha = 0.6719;

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1BA8DF").s().p("AuAQwQghgMgMgiImky4QgHgUAHgWQAGgVARgPQAKgJANgFIeisbQANgFANgBQAWgBAUALQAUAKAJAUIJuUsQAOAegMAdQgMAegeAMIsbFEQgiANiDgQQi2gXgagBIggAAQgaABgKAFIueF5QgOAGgPAAQgLAAgMgEg");
	this.shape_40.setTransform(600.3204,626.4061);

	this.instance_6 = new lib.Path_1_0_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(597.35,627.05,1,1,0,0,0,130.9,108.2);
	this.instance_6.alpha = 0.3008;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AwHlHIfUiTIA7MiI/UCTg");
	this.shape_41.setTransform(613.625,677.375);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#127EA6").s().p("ArBSEQgbgKgLgcIpC2NQgLgbALgbQALgaAbgLIdQr6QAbgLAbALQAbAMALAbIKCYoQALAbgMAbQgLAagcALIrKEjQgfANingXQimgXghANIs3FQQgNAFgNAAQgOAAgOgGg");
	this.shape_42.setTransform(603.3,642);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#575C60").s().p("AAGATQgHgCgIgHQgGgHgDgHQgCgIAEgEQAEgEAIACQAHACAGAHQAIAHACAHQACAIgEAEQgDACgEAAIgEAAg");
	this.shape_43.setTransform(305.7,452.425);

	this.instance_7 = new lib.Path_1_4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(367.85,494.2,1,1,0,0,0,56.6,48.1);
	this.instance_7.alpha = 0.1992;

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1BA8DF").s().p("AwOsWIIcjjIYBXSIhJDCIiIFfQzIygqEpwg");
	this.shape_44.setTransform(320.525,440.95);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#5A5C5C").s().p("AwVsaIIfjnIYMXfIjTIkg");
	this.shape_45.setTransform(320.675,440.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#818282").s().p("Aq5qaIACgEIAIgGIVpU/IgKAKg");
	this.shape_46.setTransform(356.05,406.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#818282").s().p("Aq+qTQAFgIAFgFQAHgHAEgCIVoU9IgJAMQgHAHgGADg");
	this.shape_47.setTransform(355.825,406.875);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#4D4C4D").s().p("AKZKwI1d0zQAAgNAQgQQAKgKAKgEIAIgCIVdUzIAAAHQgDAJgMAMQgRASgKAAIgCgBg");
	this.shape_48.setTransform(355.75,406.9095);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B2B2B2").s().p("ABqHQIo8orQgKgKAAgNQAAgOAKgKIE6lEQAKgJANgBQAOAAAKAJII8IrQAKAKAAANQAAAOgKAKIk6FEQgKAKgNAAQgOAAgKgJgAiUnKIk6FEQgJAIAAAMQAAALAJAIII9IrQAIAIALAAQALAAAIgJIE6lEQAJgIAAgLQgBgMgIgIIo9orQgIgIgLAAQgMABgHAIg");
	this.shape_49.setTransform(441.45,316.9987);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D2D2D2").s().p("ABtHNIo9oqQgJgJAAgMQAAgNAJgJIE6lFQAJgIAMgBQANAAAJAJII8IrQAJAIAAANQAAAMgIAKIk7FEQgIAJgNAAQgMABgJgKg");
	this.shape_50.setTransform(441.4487,317);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A1A1A1").s().p("AgEAGQgGgGAFgFQAFgFAGAFQACADAAACQAAADgCACQgDADgDAAQgCAAgCgCg");
	this.shape_51.setTransform(468.2685,443.019);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4D4C4D").s().p("AhCgdIAgggQAEgEAFAAQAGAAAEAEIBOBLQAEAEAAAGQAAAFgEAEIgfAhgAgfg6IgdAdIBcBZIAcgeQADgCAAgEQAAgEgDgDIhOhMQgDgCgEAAQgEAAgCADg");
	this.shape_52.setTransform(354.5278,281.075);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#676767").s().p("Ag/gcIAegfQADgEAFABQAEgBAEAEIBOBMQADADAAAEQABAFgEADIgeAgg");
	this.shape_53.setTransform(354.5781,281);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4D4C4D").s().p("AARA+IhOhMQgEgDAAgGQgBgGAEgEIAgggIBhBfIgfAgQgEAEgGAAIgBAAQgFAAgDgEgAg7geQgCADAAAEQAAAEADACIBOBMQACADAEAAQAEAAADgDIAcgdIhbhZg");
	this.shape_54.setTransform(350.7472,284.9778);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#676767").s().p("AATA8IhOhMQgEgDAAgFQAAgEADgEIAegeIBeBbIgdAfQgEADgEAAQgFAAgDgDg");
	this.shape_55.setTransform(350.6969,285.025);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4D4C4D").s().p("AAQA6IhJhHQgEgEAAgGQAAgGAEgDIAXgYQADgEAGAAQAGgBAEAEIBJBHQAEAEAAAGQAAAFgEAEIgXAYQgEAEgFAAIgBAAQgFAAgEgDgAgfg2IgYAZQgCACAAAEQAAAEADADIBJBHQAHAGAGgGIAXgZQADgCAAgEQAAgEgDgDIhJhHQgDgCgEAAQgEAAgCACg");
	this.shape_56.setTransform(343.775,270.075);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#676767").s().p("AARA4IhJhHQgDgDAAgFQAAgEADgEIAXgYQAEgEAEAAQAFAAADAEIBKBHQADADAAAFQAAAEgDAEIgXAYQgEAEgEAAQgFAAgEgEg");
	this.shape_57.setTransform(343.775,270.075);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#4D4C4D").s().p("AAQA6IhJhHQgEgEAAgGQgBgFAEgEIAYgYQAEgEAFAAQAGgBAEAEIBJBHQAEAEAAAGQABAFgFAEIgXAYQgEAEgFAAIgCAAQgEAAgEgDgAgfg2IgXAZQgDACAAAEQAAAEADADIBJBHQAHAGAGgGIAYgZQACgCAAgEQAAgEgCgDIhKhHQgDgCgEAAQgDAAgDACg");
	this.shape_58.setTransform(365.7,291.475);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#676767").s().p("AASA4IhJhHQgEgDAAgFQAAgEADgEIAXgYQAEgDAEAAQAFgBAEAEIBIBHQAEADAAAFQAAAEgDAEIgXAYQgEADgEABQgFAAgDgEg");
	this.shape_59.setTransform(365.7,291.4969);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#4D4C4D").s().p("AgGBWIhPhNQgEgDAAgGQAAgFAEgEIBKhMQADgEAGAAQAEAAAEAEIBQBNQAEAEAAAEQAAAGgEAEIhKBMQgEAEgFAAQgFAAgEgEgAgJhSIhJBMQgDADAAADQAAAEADACIBPBNQADADADAAQAEAAACgDIBKhMQADgDAAgEQAAgDgDgCIhPhNQgDgDgDAAQgEAAgDADg");
	this.shape_60.setTransform(489.0222,416.1222);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#676767").s().p("AgEBVIhQhNQgDgEAAgEQAAgEADgDIBLhMQACgEAGAAQADAAADADIBPBNQAEADAAAEQAAAFgEADIhJBMQgEAEgEAAQgEAAgDgDg");
	this.shape_61.setTransform(489,416.1219);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#4D4C4D").s().p("AgGBWIhPhNQgEgDAAgGQAAgFAEgEIBKhLQADgFAGAAQAEAAAEAEIBQBNQAEAEAAAEQAAAGgEADIhKBNQgEADgFAAIgBABQgEAAgEgEgAgJhSIhJBMQgDADAAADQAAAEADADIBPBMQADADADAAQAEgBACgCIBKhMQAGgGgGgHIhPhMQgDgCgDAAQgEAAgDACg");
	this.shape_62.setTransform(478.075,405.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#676767").s().p("AgEBUIhPhMQgEgEAAgEQAAgEAEgDIBJhMQAEgEAFAAQADAAAEAEIBPBMQADADAAAEQAAAEgDAEIhKBMQgEAEgEAAQgEAAgDgEg");
	this.shape_63.setTransform(478.05,405.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#4D4C4D").s().p("AgGBWIhPhNQgEgEAAgFQAAgFAEgEIBKhLQADgEAGgBQAFAAAEAEIBPBNQAEAEAAAEQAAAFgEAEIhKBNQgEADgFAAIgBABQgEAAgEgEgAgJhSIhJBMQgDADAAADQAAAEADACIBPBNQADACADABQAEgBACgCIBKhMQADgDAAgEQAAgDgDgCIhPhNQgDgDgDABQgEgBgDADg");
	this.shape_64.setTransform(467.2222,395);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#676767").s().p("AgEBVIhPhNQgEgDAAgFQAAgDADgEIBKhNQADgDAFAAQAEAAADADIBPBNQAEAEAAADQAAAEgDAEIhKBNQgEADgEAAQgEAAgDgDg");
	this.shape_65.setTransform(467.225,395);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#4D4C4D").s().p("AAGBiIhohlQgDgDAAgGQAAgFADgEIBKhMQAEgEAFAAQAGAAAEAEIBnBkQAEAEAAAFQABAGgEAEIhKBMQgEAEgFAAQgGAAgEgEgAgVhfIhKBMQgGAIAGAGIBoBkQADADAEAAQAEAAACgDIBKhMQACgDAAgEQAAgEgCgDIhohkQgDgCgEAAQgEAAgCACg");
	this.shape_66.setTransform(454.8778,383.05);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#676767").s().p("AAHBhIhnhlQgEgDAAgFQAAgEAEgEIBJhMQAEgDAEAAQAFAAADADIBoBlQADADAAAFQABAEgEAEIhKBMQgDADgEAAQgFAAgEgDg");
	this.shape_67.setTransform(454.8531,383.025);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#4D4C4D").s().p("ADREpIn/nwQgEgDAAgGQAAgGAEgEIBLhNQAEgEAFAAQAGgBAEAEIH/HwQAEAEAAAGQAAAFgEAEIhLBNQgDAEgGAAIgCAAQgEAAgEgDgAjgklIhLBOQgDADAAAEQAAAEADACIH/HwQADADAEAAQAEgBACgCIBLhOQADgDAAgEQAAgEgDgCIn/nwQgDgCgEAAQgEAAgCACg");
	this.shape_68.setTransform(420.6472,349.825);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#676767").s().p("ADTEnIoAnvQgDgEAAgEQAAgFADgDIBLhOQAEgDAEAAQAFgBADAEIIAHvQADAEAAAEQAAAFgDADIhLBOQgEAEgEAAQgFAAgDgEg");
	this.shape_69.setTransform(420.625,349.8469);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#4D4C4D").s().p("AgJBUIhKhIQgEgDAAgHQAAgEAEgEIBKhMQAEgFAFAAQAFAAAEAEIBKBIQAFAEAAAGQAAAEgFAEIhKBMQgDAFgGAAIAAAAQgFAAgEgEgAgGhQIhLBNQgCACAAADQAAAEADADIBKBIQADACADAAQAEAAADgCIBKhNQACgCAAgDQAAgFgDgCIhJhIQgEgDgDABQgDgBgDADg");
	this.shape_70.setTransform(374.1,304.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#676767").s().p("AgHBSIhKhIQgEgDAAgFQAAgDAEgEIBKhMQADgEAEAAQAFAAADAEIBKBIQAEADAAAFQAAADgDAEIhLBMQgDAEgFAAQgDAAgEgEg");
	this.shape_71.setTransform(374.075,304.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#4D4C4D").s().p("AAFBiIhnhjQgDgDAAgGQgBgFAEgEIBMhOQAEgEAFAAQAFgBAFAEIBlBjQAFAEAAAGQAAAFgEAEIhMBOQgDAEgGAAQgFAAgEgEgAgUhfIhLBOQgDADAAAEQAAAEADADIBmBiQAGAHAIgHIBLhOQAGgHgGgGIhmhjQgDgDgEAAQgDAAgEADg");
	this.shape_72.setTransform(386.35,316.5722);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#676767").s().p("AAGBhIhmhjQgDgDgBgEQAAgFAEgDIBLhPQAEgDAEAAQAFAAADADIBmBjQAEADAAAFQAAAFgDADIhMBOQgDADgFABQgFgBgDgDg");
	this.shape_73.setTransform(386.325,316.55);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#4D4C4D").s().p("AA9CXIjVjOQgEgEAAgGQAAgFAEgEIBJhMQAEgEAFAAQAGAAAEAEIDVDOQAEAEAAAGQAAAFgEAEIhJBMQgEAEgFAAIgBAAQgFAAgEgEgAhMiTIhJBMQgDACAAAEQAAAEADADIDVDOQAGAHAHgHIBJhMQADgCAAgEQAAgEgDgDIjVjOQgDgDgEAAQgEAAgCADg");
	this.shape_74.setTransform(471.6778,420.375);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#676767").s().p("AA+CWIjVjPQgDgDAAgFQAAgEADgEIBJhMQAEgDAEAAQAFAAADADIDVDPQAEADAAAFQAAAEgDAEIhKBLQgDAEgFAAIgBAAQgDAAgEgDg");
	this.shape_75.setTransform(471.6531,420.3781);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#4D4C4D").s().p("AgFBWIhPhNQgEgDAAgGQgBgFAEgEIBKhLQADgEAGAAQAEgBAEAEIBQBNQAEAEAAAFQAAAFgEAEIhJBMQgEAEgGAAQgEAAgEgEgAgIhRIhKBLQgCADAAADQAAAEACACIBQBNQACADADAAQAEgBADgCIBJhMQADgCAAgEQAAgDgDgDIhPhNQgDgCgDAAQgEAAgCADg");
	this.shape_76.setTransform(453.9472,403.1972);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#676767").s().p("AgEBVIhPhOQgDgDAAgEQgBgEAEgDIBJhMQADgEAFABQAEAAADACIBPBOQAEACAAAFQAAAEgEADIhJBMQgDAEgFgBQgDAAgEgCg");
	this.shape_77.setTransform(453.9469,403.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#4D4C4D").s().p("AgFBWIhPhNQgEgEAAgFQgBgFAEgEIBKhLQADgEAGAAQAEgBAEAEIBQBNQAEAEAAAEQAAAGgEAEIhJBLQgEAEgGAAIgBAAQgEAAgDgDgAgJhSIhJBMQgCADAAADQAAAEACACIBQBNQACACADAAQAEAAADgCIBJhMQADgDAAgEQAAgDgDgCIhPhNQgEgDgCAAQgDAAgEADg");
	this.shape_78.setTransform(442.9972,392.575);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#676767").s().p("AgEBUIhPhMQgDgEgBgEQAAgEAEgDIBJhMQADgEAFAAQAEAAADAEIBPBMQAEAEAAADQAAAFgEADIhJBMQgDAEgFAAQgDAAgEgEg");
	this.shape_79.setTransform(442.975,392.575);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#4D4C4D").s().p("AgGBWIhOhNQgFgEAAgFQAAgFAEgEIBKhLQADgEAGAAQAFgBAEAEIBPBNQADAEAAAEQABAGgEAEIhJBLQgEAEgGAAIgBAAQgEAAgEgDgAgJhSIhJBMQgCADAAADQAAAEACACIBQBNQACADADAAQAEgBACgCIBKhMQADgDAAgEQAAgDgEgCIhOhNQgDgCgDAAQgEAAgDACg");
	this.shape_80.setTransform(432.15,382.075);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#676767").s().p("AgEBUIhPhNQgEgDAAgEQABgEADgDIBJhMQAEgEAEAAQAEAAADAEIBPBMQADAEABADQAAAFgDADIhKBMQgDADgFAAIgBABQgDAAgDgEg");
	this.shape_81.setTransform(432.15,382.0531);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#4D4C4D").s().p("AgFBWIhPhNQgEgEAAgFQgBgFAEgEIBKhLQADgEAGAAQAEgBAEAEIBQBNQAEAEAAAFQAAAFgEAEIhJBMQgEAEgGAAQgEAAgEgEgAgJhSIhJBMQgCADAAADQAAAEACACIBPBNQAGAHAHgHIBJhMQAGgGgGgGIhPhNQgDgCgDAAQgEAAgDACg");
	this.shape_82.setTransform(421.0972,371.3472);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#676767").s().p("AgEBUIhPhMQgEgEAAgEQAAgEAEgDIBJhMQAIgIAHAIIBPBNQAEADAAAEQAAAEgEAEIhJBLQgDAEgFAAQgDAAgEgEg");
	this.shape_83.setTransform(421.075,371.3185);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#4D4C4D").s().p("AgFBWIhQhNQgDgEAAgFQAAgFADgEIBKhLQADgEAGAAQAEgBAEAEIBPBNQAEAEAAAEQABAGgEAEIhKBLQgDAEgGAAIgBAAQgEAAgDgDgAgJhSIhJBMQgDACAAAEQABADACADIBPBNQAGAGAHgGIBJhMQACgDAAgEQAAgDgCgCIhQhNQgCgDgDAAQgEABgDACg");
	this.shape_84.setTransform(410.1778,360.775);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#676767").s().p("AgEBUIhPhMQgEgEAAgEQAAgEAEgDIBJhMQADgDAFgBQADABAEADIBPBMQAEAEAAAEQAAAEgEAEIhJBLQgDAEgFAAQgEgBgDgDg");
	this.shape_85.setTransform(410.175,360.75);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#4D4C4D").s().p("AgFBWIhPhNQgEgEAAgFQgBgFAEgEIBKhMQAEgDAFAAQAFAAADADIBQBNQAEAEAAAEQAAAGgEAEIhJBLQgEAEgGAAIgBAAQgEAAgDgDgAgJhSIhJBMQgCACAAAEQAAADACADIBPBNQADACADAAQAEAAADgDIBJhLQADgDAAgEQgBgDgCgCIhPhNQgDgDgDAAQgEABgDACg");
	this.shape_86.setTransform(399.1972,350.1278);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#676767").s().p("AgEBUIhPhNQgEgDAAgEQAAgEAEgEIBJhLQADgEAFAAQADAAAEAEIBPBMQAEAEAAADQAAAFgEADIhJBMQgDADgFAAIgBABQgDAAgDgEg");
	this.shape_87.setTransform(399.175,350.1031);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#4D4C4D").s().p("AgFBVIhPhMQgEgEAAgFQgBgFAEgEIBJhMQAEgEAGAAQAEAAAEAEIBQBNQAEAEAAAEQAAAGgEAEIhJBLQgFAFgFAAQgEAAgEgFgAgJhSIhJBMQgCACAAAEQAAADACADIBPBNQADACADAAQAEAAADgDIBJhLQADgDAAgEQgBgDgCgCIhPhNQgDgDgDAAQgEAAgDADg");
	this.shape_88.setTransform(388.2472,339.5222);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#676767").s().p("AgEBUIhPhMQgEgEAAgEQAAgEAEgDIBJhMQADgDAFAAQADgBAEAEIBPBNQAEADAAAEQAAAEgEAEIhJBLQgDAEgFAAQgDAAgEgEg");
	this.shape_89.setTransform(388.225,339.4969);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#4D4C4D").s().p("AgFBWIhQhNQgDgEAAgFQAAgFADgEIBJhMQAEgDAGAAQAEAAAEADIBPBNQAEAEAAAEQABAGgEAEIhJBLQgEAEgGAAIgBAAQgEAAgDgDgAgJhSIhJBMQgDADAAADQAAAEADACIBPBNQAGAGAHgGIBJhMQACgDAAgEQAAgDgCgCIhQhNQgCgCgDAAQgEAAgDACg");
	this.shape_90.setTransform(377.3278,328.9278);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#676767").s().p("AgEBUIhPhMQgEgEAAgEQAAgEAEgEIBJhLQADgEAFAAQADAAAEAEIBPBMQAEAEAAADQAAAFgEADIhJBMQgDAEgFAAQgEAAgDgEg");
	this.shape_91.setTransform(377.325,328.925);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#4D4C4D").s().p("AgFBVIhQhMQgEgEAAgFQAAgFAEgEIBJhMQAEgDAGAAQAEAAAEADIBPBNQAEADAAAGQABAFgEAEIhKBLQgEAEgFABQgFgBgDgEgAgJhSIhJBMQgDADAAADQAAAEADACIBPBNQADADADgBQAEAAACgCIBKhMQACgCAAgEQAAgDgCgDIhQhNQgCgCgDgBQgEAAgDADg");
	this.shape_92.setTransform(366.3028,318.25);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#676767").s().p("AgEBVIhPhNQgEgEAAgEQAAgEAEgDIBJhMQAIgIAHAIIBPBNQADADAAAEQABAEgEAEIhJBLQgDAEgFAAQgEAAgDgDg");
	this.shape_93.setTransform(366.3031,318.2185);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#4D4C4D").s().p("AgFBWIhQhNQgEgEAAgFQAAgFAEgEIBJhLQAEgEAGAAQAEgBAEAEIBPBNQAEAEAAAFQABAFgEAEIhKBMQgEAEgFAAQgFAAgDgEgAgJhSIhJBMQgDADAAADQAAAEADACIBPBNQAGAGAHgGIBJhMQACgCAAgEQAAgDgCgDIhQhNQgCgCgDAAQgEAAgDACg");
	this.shape_94.setTransform(355.3028,307.5972);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#676767").s().p("AgEBUIhPhMQgEgEAAgEQAAgEAEgDIBJhMQAIgIAHAIIBPBMQADAEAAAEQABAEgEAEIhJBLQgDAEgFAAQgEAAgDgEg");
	this.shape_95.setTransform(355.3031,307.5685);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#4D4C4D").s().p("AA9CXIjVjOQgEgEAAgGQAAgFAEgEIBJhMQADgEAGAAQAGAAAEAEIDVDOQAEAEAAAGQAAAFgEAEIhJBMQgEAEgGAAIgBAAQgEAAgEgEgAhMiTIhKBLQgCADAAAEQAAAEADADIDVDOQACADAEAAQAEAAADgDIBJhMQADgCAAgEQAAgEgDgDIjVjOQgDgDgEAAQgEAAgCADg");
	this.shape_96.setTransform(337.6028,290.425);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#676767").s().p("AA/CWIjVjOQgEgEAAgEQAAgFADgEIBKhLQADgDAFgBQAEAAAEAEIDUDOQAEADAAAFQAAAEgDAEIhKBMQgDADgFAAQgEAAgDgDg");
	this.shape_97.setTransform(337.6,290.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#4D4C4D").s().p("AAiB9IifiaQgEgDAAgGQAAgGAEgEIBJhLQAEgEAGAAQAFgBAEAEICeCaQAEAEAAAGQABAFgEAEIhKBMQgDAEgGAAQgFAAgEgEgAgxh4IhJBLQgDADAAAEQAAAEADACICeCaQADADAEAAQAEgBADgCIBJhMQAGgGgGgHIifiaQgDgDgDAAQgEAAgDAEg");
	this.shape_98.setTransform(464.1028,433.6472);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#676767").s().p("AAjB7IifiZQgDgEAAgEQAAgFADgDIBJhMQAJgIAHAIICfCaQAEADAAAEQAAAFgEADIhIBMQgEAEgFAAQgEAAgEgEg");
	this.shape_99.setTransform(464.1,433.6185);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#4D4C4D").s().p("AgFBWIhPhNQgEgEAAgFQgBgFAEgEIBKhLQAEgFAFAAQAFABAEADIBPBNQAEAEAAAEQAAAGgEAEIhJBMQgEADgGAAQgEAAgEgDgAgIhRIhKBLQgCADAAADQAAADACADIBQBNQACADADAAQAEAAADgEIBJhLQADgDAAgEQAAgDgDgCIhPhNQgDgCgDAAQgEAAgCADg");
	this.shape_100.setTransform(449.0972,419.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#676767").s().p("AgEBVIhPhNQgEgEABgEQAAgEACgDIBKhMQAIgIAHAIIBPBNQAEADgBAEQABAEgEAEIhJBLQgDAEgFAAQgDAAgEgDg");
	this.shape_101.setTransform(449.1,419.0685);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#4D4C4D").s().p("AgFBWIhPhNQgEgEAAgFQgBgFAEgEIBKhLQADgEAGAAQAFgBAEAEIBPBNQAEAEAAAFQAAAFgEAEIhJBMQgEAEgGAAQgEAAgEgEgAgIhSIhKBMQgCADAAADQAAAEADACIBPBNQACADADAAQAEgBADgCIBJhMQAGgHgGgFIhPhNQgDgCgDAAQgEAAgCACg");
	this.shape_102.setTransform(438.1472,408.4972);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#676767").s().p("AgEBUIhPhMQgDgEgBgEQAAgEADgDIBKhMQADgDAFAAQADgBAEAEIBPBNQAEADAAAEQgBAEgDAEIhJBLQgEAEgEAAQgEAAgDgEg");
	this.shape_103.setTransform(438.15,408.4969);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#4D4C4D").s().p("AgFBWIhQhNQgEgEAAgFQAAgFAEgEIBJhLQAEgEAGAAQAEgBAEAEIBPBNQAEAEAAAFQABAFgEAEIhKBLQgDAEgGAAIgBAAQgDAAgEgDgAgJhSIhJBMQgGAGAGAGIBPBNQAGAGAGgGIBKhMQAGgGgGgGIhQhNQgCgCgDAAQgEAAgDACg");
	this.shape_104.setTransform(427.3028,397.975);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#676767").s().p("AgEBUIhPhMQgDgEAAgEQAAgEADgDIBJhMQAEgDAEAAQAEgBADAEIBPBMQADAEAAAEQAAAEgCAEIhKBLQgDAEgFAAQgEAAgDgEg");
	this.shape_105.setTransform(427.3,397.9969);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#4D4C4D").s().p("AgFBWIhPhNQgEgDAAgGQgBgFAEgEIBJhLQAEgEAGAAQAEgBAEAEIBQBNQAEAEAAAFQAAAFgEAEIhJBMQgEAEgGAAQgFAAgDgEgAgJhRIhJBLQgCADAAADQAAAEACACIBQBNQACADADAAQAEAAADgDIBJhMQADgCAAgEQAAgDgDgDIhPhNQgEgDgCAAQgEAAgDAEg");
	this.shape_106.setTransform(416.2472,387.2472);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#676767").s().p("AgEBVIhPhNQgDgEAAgEQgBgEAEgDIBJhMQAHgHAIAHIBPBNQAEADAAAEQAAAEgEAEIhJBLQgDAEgFAAQgDAAgEgDg");
	this.shape_107.setTransform(416.2469,387.231);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#4D4C4D").s().p("AgFBWIhPhNQgEgEAAgFQgBgFAEgEIBJhLQAEgEAGAAQAEgBAEAEIBPBNQAEAEAAAEQABAGgEAEIhJBLQgEAEgGAAIgBAAQgEAAgDgDgAgJhSIhJBMQgGAGAGAGIBPBNQAGAGAHgGIBJhMQADgDAAgEQgBgDgCgCIhPhNQgEgDgCAAQgDAAgEADg");
	this.shape_108.setTransform(405.325,376.675);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#676767").s().p("AgEBUIhPhNQgEgDAAgEQAAgEAEgEIBJhLQADgEAFAAQADAAAEAEIBPBMQAEAEAAADQAAAFgEADIhJBMQgDADgFAAIgBABQgDAAgDgEg");
	this.shape_109.setTransform(405.325,376.6531);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#4D4C4D").s().p("AgFBWIhPhNQgEgEAAgFQgBgFAEgEIBKhLQADgEAGAAQAEgBAEAEIBQBNQAEAEAAAEQAAAGgEAEIhJBLQgEAEgGAAIgBAAQgEAAgDgDgAgJhSIhJBMQgGAGAGAGIBQBNQACACADAAQAEAAADgCIBJhMQADgDAAgEQAAgDgDgCIhPhNQgEgDgCAAQgDAAgEADg");
	this.shape_110.setTransform(394.3472,366.025);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#676767").s().p("AgEBUIhPhNQgDgDAAgEQgBgEAEgEIBJhLQADgEAFAAQAEAAADAEIBPBMQAEAEAAADQAAAFgEADIhJBMQgDADgFAAIgBABQgDAAgDgEg");
	this.shape_111.setTransform(394.3469,366.0031);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#4D4C4D").s().p("AgFBWIhPhNQgEgDAAgGQgBgFAEgEIBKhLQAEgEAFgBQAFABADAEIBQBMQAEAEAAAEQAAAGgEAEIhJBMQgEADgGAAQgFAAgDgDgAgJhSIhJBMQgCACAAAEQAAADACADIBPBNQADACADABQAEAAADgDIBJhMQADgDAAgEQAAgDgDgCIhPhNQgEgDgCAAQgEAAgDADg");
	this.shape_112.setTransform(383.3972,355.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#676767").s().p("AgEBUIhPhNQgEgDAAgEQAAgEAEgEIBJhLQADgEAFABQAEAAADACIBPBOQAEADAAADQAAAFgEADIhJBMQgDADgFAAQgDAAgEgDg");
	this.shape_113.setTransform(383.375,355.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#4D4C4D").s().p("AgFBWIhPhNQgEgEAAgFQgBgFAEgEIBKhLQADgEAGAAQAEgBAEAEIBPBNQAEAEAAAEQABAGgEAEIhJBLQgEAEgGAAIgBAAQgEAAgDgDgAgJhSIhJBMQgDADAAADQABAEACACIBPBNQAGAGAHgGIBJhMQADgDAAgEQgBgDgCgCIhPhNQgDgCgDAAQgEAAgDACg");
	this.shape_114.setTransform(372.475,344.825);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#676767").s().p("AgEBUIhPhMQgEgEAAgEQAAgEAEgDIBJhMQADgEAFAAQAEAAADAEIBPBMQAEAEAAADQAAAFgEADIhJBMQgDADgFABQgDAAgEgEg");
	this.shape_115.setTransform(372.475,344.825);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#4D4C4D").s().p("AgFBWIhPhNQgEgEAAgFQgBgFAEgEIBJhMQAEgDAGAAQAFAAADADIBQBNQAEAEAAAEQAAAGgEAEIhJBLQgEAEgGAAIgBAAQgEAAgDgDgAgJhSIhJBMQgGAGAGAGIBPBNQADACADAAQAEAAADgDIBJhLQACgDAAgEQAAgDgCgCIhPhNQgDgDgDAAQgEABgDACg");
	this.shape_116.setTransform(361.4972,334.1778);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#676767").s().p("AgEBUIhPhNQgEgDAAgEQAAgEAEgEIBJhLQADgEAFAAQADAAAEAEIBPBMQAEAEAAADQAAAFgEADIhJBMQgDADgFAAIgBABQgDAAgDgEg");
	this.shape_117.setTransform(361.475,334.1531);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#4D4C4D").s().p("AgFBWIhQhNQgDgDAAgGQAAgFADgEIBJhLQAEgEAGAAQAEgBAEAEIBPBNQAEAEAAAFQABAFgEAEIhJBMQgEAEgGAAQgEAAgEgEgAgJhRIhJBLQgDADAAADQAAAEADACIBPBNQAGAGAHgGIBJhMQACgCAAgEQAAgDgCgDIhQhNQgCgCgDAAQgEAAgDADg");
	this.shape_118.setTransform(350.4778,323.4972);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#676767").s().p("AgEBUIhPhMQgEgEAAgEQAAgEAEgDIBJhMQAIgIAHAIIBPBNQAEADAAAEQAAAEgEAEIhJBLQgDAEgFAAQgEAAgDgEg");
	this.shape_119.setTransform(350.475,323.4685);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#4D4C4D").s().p("AgGBWIhPhNQgEgEAAgFQAAgFAEgEIBJhMQAEgDAGAAQAEAAAEADIBPBNQAEAEAAAEQABAGgEAEIhKBLQgDAEgGAAIgBAAQgEAAgEgDgAgJhSIhJBMQgGAGAGAGIBPBNQAGAGAHgGIBJhMQACgDAAgEQAAgDgCgCIhQhNQgCgDgDAAQgEABgDACg");
	this.shape_120.setTransform(339.6028,312.9778);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#676767").s().p("AgEBUIhPhNQgEgDAAgEQAAgEAEgDIBJhMQADgEAFAAQADAAAEAEIBPBMQADAEAAADQABAFgEADIhJBMQgDADgFAAIgBABQgDAAgDgEg");
	this.shape_121.setTransform(339.6031,312.9531);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#4D4C4D").s().p("AAjB9IigibQgEgDAAgGQAAgFAEgEIBIhMQAEgEAGAAQAFAAAEAEICgCaQAEAEAAAGQAAAFgEAEIhJBMQgDAEgGAAIgBAAQgFAAgDgEgAgyh5IhJBLQgCADAAAEQAAAEACADICgCaQAHAHAHgHIBJhLQACgDAAgEQAAgEgCgDIigiaQgDgDgEAAQgEAAgDADg");
	this.shape_122.setTransform(324.5,298.325);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#676767").s().p("AAkB8IigibQgEgDABgFQgBgEAEgEIBJhLQADgEAFAAQAFAAADADICgCbQAEADgBAFQABAEgEAEIhJBMQgDADgFAAIgBAAQgEAAgDgDg");
	this.shape_123.setTransform(324.5,298.3031);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#4D4C4D").s().p("AAVBwIiFiAQgEgEAAgGQAAgFAEgEIBJhMQAEgEAGAAQAFAAAEAEICFCBQAEADAAAGQAAAFgEAEIhJBMQgEAEgGAAIgBAAQgFAAgDgEgAgkhsIhJBMQgDACAAAEQAAAEADADICFCAQAGAHAHgHIBJhLQAGgHgGgHIiFiAQgCgDgEAAQgEAAgDADg");
	this.shape_124.setTransform(455.1278,445.675);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#676767").s().p("AAWBvIiEiBQgEgDAAgFQAAgEADgEIBKhLQAIgIAIAHICECBQAEADAAAFQAAAFgDADIhKBMQgDADgFAAQgEAAgEgDg");
	this.shape_125.setTransform(455.1281,445.6685);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#4D4C4D").s().p("AgFBVIhQhMQgDgEAAgFQAAgFADgEIBJhMQAEgEAGAAQAFABADADIBPBNQAEAEAAAEQABAGgEAEIhJBLQgEAFgGAAQgFAAgDgFgAgJhRIhJBLQgDADAAADQABADACADIBPBNQADACADAAQAEAAADgDIBJhLQACgDAAgEQAAgCgCgDIhPhNQgEgDgCAAQgEAAgDAEg");
	this.shape_126.setTransform(441.4278,432.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#676767").s().p("AgEBVIhPhNQgEgEAAgEQAAgEAEgDIBJhMQAIgIAHAIIBPBNQAEADAAAEQAAAEgEAEIhJBLQgDAEgFAAQgDAAgEgDg");
	this.shape_127.setTransform(441.425,432.3685);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#4D4C4D").s().p("AgFBWIhQhNQgDgEAAgFQAAgFADgEIBJhLQAEgEAGAAQAEgBAEAEIBPBNQAEAEAAAFQABAFgEAEIhKBLQgDAEgGAAIgBAAQgEAAgDgDgAgJhSIhJBMQgDADAAADQABAEACACIBPBNQAGAGAHgGIBJhMQAGgGgGgGIhQhNQgCgCgDAAQgEAAgDACg");
	this.shape_128.setTransform(430.4778,421.775);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#676767").s().p("AgEBUIhPhMQgEgEAAgEQAAgEAEgDIBJhMQADgDAFgBQADAAAEAEIBPBNQADADABADQAAAFgEAEIhJBLQgDAEgFAAQgDAAgEgEg");
	this.shape_129.setTransform(430.475,421.775);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#4D4C4D").s().p("AgFBWIhPhNQgEgEAAgFQgBgFAEgEIBKhLQADgEAGAAQAEgBAEAEIBQBNQAEAEAAAFQAAAFgEAEIhJBLQgEAEgGAAIgBAAQgEAAgDgDgAgJhSIhJBMQgCADAAADQAAAEACACIBQBNQACACADAAQAEAAADgCIBJhMQAGgHgGgFIhPhNQgDgCgDAAQgEAAgDACg");
	this.shape_130.setTransform(419.6472,411.275);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#676767").s().p("AgEBUIhPhMQgDgEAAgEQgBgEAEgDIBJhMQADgDAFgBQAEAAADAEIBPBMQAEAEAAADQAAAFgEADIhJBMQgDAEgFAAQgDAAgEgEg");
	this.shape_131.setTransform(419.6469,411.275);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#4D4C4D").s().p("AgFBWIhQhNQgEgEAAgFQAAgFAEgEIBJhLQAEgEAGAAQAEgBAEAEIBPBNQAEAEAAAFQABAFgEAEIhKBMQgDAEgGAAQgEAAgEgEgAgJhRIhJBLQgDADAAADQAAAEADACIBPBNQAGAGAGgGIBKhMQACgCAAgEQAAgDgCgDIhQhNQgCgCgDAAQgEAAgDADg");
	this.shape_132.setTransform(408.5528,400.5472);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#676767").s().p("AgEBUIhPhMQgEgEAAgEQAAgEADgDIBKhMQAIgIAHAIIBPBNQADADAAAEQABAEgEAEIhJBLQgDAEgFAAQgEAAgDgEg");
	this.shape_133.setTransform(408.5531,400.5185);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#4D4C4D").s().p("AgGBWIhPhNQgEgEAAgFQAAgFAEgEIBJhMQAEgDAGAAQAEAAAEADIBPBNQAEAEAAAEQABAGgEAEIhKBLQgDAEgGAAIgBAAQgEAAgEgDgAgJhSIhJBMQgDADAAADQAAAEADACIBPBNQADACADAAQAEAAACgCIBKhMQACgDAAgEQAAgDgDgCIhPhNQgCgCgDAAQgEAAgDACg");
	this.shape_134.setTransform(397.6528,389.9778);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#676767").s().p("AgEBUIhPhMQgDgEgBgEQAAgEADgDIBKhMQADgEAFAAQADAAAEAEIBPBMQAEAEAAADQgBAFgDADIhJBMQgDADgFAAIgBABQgDAAgDgEg");
	this.shape_135.setTransform(397.65,389.9531);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#4D4C4D").s().p("AgFBWIhQhNQgEgEAAgFQAAgFAEgEIBJhMQAEgDAGAAQAEAAAEADIBPBNQAEAEAAAEQABAGgEAEIhKBLQgDAEgGAAIgBAAQgDAAgEgDgAgJhSIhJBMQgGAGAGAGIBPBNQAGAGAHgGIBJhMQACgDAAgEQAAgDgCgCIhQhNQgCgDgDAAQgEABgDACg");
	this.shape_136.setTransform(386.6528,379.3278);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#676767").s().p("AgEBUIhPhNQgEgDAAgEQAAgEAEgEIBJhLQADgEAFAAQADAAAEAEIBPBMQAEAEAAADQAAAFgEADIhJBMQgDADgFAAIgBABQgDAAgDgEg");
	this.shape_137.setTransform(386.675,379.3031);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#4D4C4D").s().p("AgGBWIhPhNQgDgEgBgFQAAgFAEgEIBJhLQAEgFAGAAQAEAAAEAFIBPBMQAEAEAAAEQABAGgEAEIhKBMQgEADgFAAQgFAAgEgDgAgJhSIhJBMQgDADAAADQAAADADADIBPBNQADADADAAQAEAAACgEIBKhLQACgCAAgFQAAgDgCgCIhQhNQgCgCgDAAQgEAAgDACg");
	this.shape_138.setTransform(375.7028,368.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#676767").s().p("AgEBVIhPhNQgEgEAAgEQAAgEAEgDIBJhMQAIgIAHAIIBPBNQADADAAAEQABAEgEAEIhJBLQgDAEgFAAQgEAAgDgDg");
	this.shape_139.setTransform(375.7031,368.6685);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#4D4C4D").s().p("AgGBWIhPhNQgEgEAAgFQAAgFAEgEIBJhLQAEgEAGAAQAEgBAEAEIBPBNQAEAEAAAEQABAGgEAEIhKBLQgDAEgGAAIgBAAQgEAAgEgDgAgJhSIhJBMQgDADAAADQAAAEADACIBPBNQADACADAAQAEAAACgCIBKhMQAGgHgHgFIhPhNQgCgCgDAAQgEAAgDACg");
	this.shape_140.setTransform(364.8028,358.125);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#676767").s().p("AgEBUIhPhMQgDgEgBgEQAAgEADgDIBKhMQADgEAFAAQADAAAEAEIBPBMQAEAEAAADQgBAFgDADIhJBMQgEAEgEAAQgEAAgDgEg");
	this.shape_141.setTransform(364.8,358.125);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#4D4C4D").s().p("AgFBWIhQhNQgDgEAAgFQgBgFAEgEIBJhMQAEgDAGAAQAEAAAEADIBPBNQAEADABAFQAAAGgEAEIhKBLQgDAEgGAAIgBAAQgEAAgDgDgAgIhSIhKBMQgCACgBAEQAAADADADIBPBNQADACADAAQAEAAADgCIBJhMQADgDgBgEQAAgDgCgCIhQhNQgCgDgDAAQgEABgCACg");
	this.shape_142.setTransform(353.8,347.4778);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#676767").s().p("AgEBUIhPhNQgEgDABgEQAAgEACgEIBKhLQADgEAFAAQADAAAEAEIBPBMQAEAEgBADQAAAFgDADIhJBMQgDADgFAAIgBABQgDAAgDgEg");
	this.shape_143.setTransform(353.8,347.4531);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#4D4C4D").s().p("AgFBWIhPhNQgEgDAAgGQgBgFAEgEIBKhLQADgEAGAAQAEgBAEAEIBQBNQAEAEAAAFQAAAFgEAEIhJBMQgEAEgGAAQgEAAgEgEgAgIhRIhKBLQgCADAAADQAAAEADACIBPBNQACADADAAQAEAAADgDIBJhMQADgCAAgEQAAgDgDgDIhPhNQgDgCgDAAQgEAAgCADg");
	this.shape_144.setTransform(342.7972,336.7972);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#676767").s().p("AgEBUIhPhMQgDgEAAgEQgBgEAEgDIBJhMQAIgIAHAIIBPBNQAEADAAAEQAAAEgEAEIhJBLQgDAEgFAAQgDAAgEgEg");
	this.shape_145.setTransform(342.7969,336.7685);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#4D4C4D").s().p("AgFBWIhPhNQgEgEAAgFQgBgFAEgEIBKhMQAEgDAFAAQAFAAADADIBQBNQAEAEAAAEQAAAGgEAEIhJBLQgEAEgGAAIgBAAQgEAAgDgDgAgJhSIhJBMQgCADAAADQAAAEACACIBQBNQACACADAAQAEAAADgCIBJhMQADgDAAgEQgBgDgCgCIhPhNQgEgDgCAAQgEAAgDADg");
	this.shape_146.setTransform(331.9472,326.2778);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#676767").s().p("AgEBUIhPhMQgDgEgBgEQAAgEAEgEIBJhLQADgEAFAAQAEAAADAEIBPBMQAEAEAAADQAAAFgDADIhKBMQgDADgFAAIgBABQgDAAgDgEg");
	this.shape_147.setTransform(331.925,326.2531);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#4D4C4D").s().p("AgGBWIhPhNQgEgEAAgFQAAgFAEgEIBJhLQAEgEAGAAQAEgBAEAEIBPBNQAEAEAAAEQABAGgEAEIhKBLQgDAEgGAAIgBAAQgEAAgEgDgAgJhSIhJBMQgGAGAGAGIBPBNQADACADAAQAEAAACgCIBKhMQACgDAAgEQAAgDgCgCIhQhNQgCgCgDAAQgEAAgDACg");
	this.shape_148.setTransform(321.0028,315.675);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#676767").s().p("AgEBUIhPhNQgEgDAAgEQABgEADgEIBJhLQAEgEAEAAQAEAAADAEIBPBMQADAEABADQAAAFgDADIhKBMQgDAEgFAAQgDAAgEgEg");
	this.shape_149.setTransform(321,315.675);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#4D4C4D").s().p("AgGBWIhPhNQgEgEAAgFQAAgFAEgEIBJhMQAEgEAGAAQAEAAAEAEIBPBNQAEADAAAFQABAGgEAEIhKBLQgDAEgGAAIgBABQgEAAgEgEgAgJhSIhJBMQgDACAAAEQAAADADADIBPBNQADACADAAQAEAAACgDIBKhLQACgDAAgEQAAgDgDgCIhPhNQgCgDgDAAQgEAAgDADg");
	this.shape_150.setTransform(310.0028,305.0028);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#676767").s().p("AgEBVIhPhOQgDgCgBgFQAAgEAEgEIBJhLQADgEAFABQADgBAEAEIBPBNQAEADAAADQAAAFgEADIhJBMQgEADgEAAQgEAAgDgCg");
	this.shape_151.setTransform(310,305);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#4D4C4D").s().p("AAVBwIiFiBQgEgEAAgFQAAgGAEgDIBJhMQAEgEAGAAQAFAAAEAEICFCAQAEAEAAAGQAAAFgEAEIhJBMQgEAEgFAAIgBAAQgFAAgEgEgAgkhsIhJBLQgDADAAAEQAAAEADADICFCAQACADAFAAQAEAAACgDIBJhLQADgDAAgEQAAgEgDgDIiFiAQgCgDgEAAQgEAAgDADg");
	this.shape_152.setTransform(302.4278,318.275);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#676767").s().p("AAWBvIiEiBQgEgDAAgFQAAgEADgEIBKhMQADgDAFAAQAEAAAEADICFCBQADADAAAFQAAAEgDAEIhKBLQgDAEgFAAIgBAAQgEAAgDgDg");
	this.shape_153.setTransform(302.4281,318.2531);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#4D4C4D").s().p("AgFBWIhPhNQgEgDAAgGQgBgFAEgEIBKhLQAEgEAFgBQAFABAEAEIBPBMQAEAEAAAEQAAAGgEAEIhJBMQgEADgGAAQgEABgEgEgAgIhSIhKBMQgCACAAAEQAAADACADIBQBNQACACADABQAEAAADgDIBJhMQADgDAAgEQAAgDgDgCIhPhNQgDgDgDABQgEAAgCACg");
	this.shape_154.setTransform(316.1472,331.55);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#676767").s().p("AgEBVIhPhOQgDgCAAgFQgBgEAEgEIBJhLQADgEAFABQAEAAADADIBPBNQAEADAAADQAAAFgEADIhJBMQgDADgFAAQgDAAgEgCg");
	this.shape_155.setTransform(316.1469,331.55);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#4D4C4D").s().p("AgGBWIhPhNQgDgEgBgFQABgFADgEIBKhLQADgEAGAAQAEgBAFAEIBOBNQAFAEAAAEQAAAGgFAEIhJBLQgDAEgGAAIgBAAQgEAAgEgDgAgIhSIhKBMQgDADAAADQAAAEADACIBQBNQACACADAAQAEAAACgCIBKhMQACgDAAgEQAAgDgDgCIhPhNQgCgCgDAAQgEAAgCACg");
	this.shape_156.setTransform(327.1,342.175);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#676767").s().p("AgEBUIhPhMQgDgEAAgEQgBgEAEgDIBJhMQADgDAFAAQAEgBADAEIBPBMQAEAEAAADQAAAFgDADIhKBMQgDADgFABQgDAAgEgEg");
	this.shape_157.setTransform(327.0969,342.1969);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#4D4C4D").s().p("AgFBWIhPhNQgEgEAAgFQgBgFAEgEIBJhLQAEgEAGAAQAEgBAEAEIBQBNQAEAEAAAFQAAAFgEAEIhJBLQgEAEgGAAIgBAAQgEAAgDgDgAgJhSIhJBMQgCADAAADQAAAEACACIBQBNQACADADAAQAEgBADgCIBJhMQAGgHgGgFIhPhNQgEgDgCAAQgDAAgEADg");
	this.shape_158.setTransform(337.9472,352.675);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#676767").s().p("AgEBUIhPhMQgEgEAAgEQAAgEAEgDIBJhMQADgEAFAAQAEAAADAEIBPBMQAEAEAAADQAAAFgEADIhJBMQgDAEgFAAQgDAAgEgEg");
	this.shape_159.setTransform(337.925,352.675);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#4D4C4D").s().p("AgGBWIhPhNQgEgEAAgFQAAgFAEgEIBJhMQAEgEAGAAQAEAAAEAEIBPBNQAEADAAAFQABAGgEAEIhKBLQgDAEgGAAIgBABQgEAAgEgEgAgJhSIhJBMQgGAGAGAGIBPBNQAGAGAGgGIBKhMQACgDAAgEQAAgDgDgCIhPhNQgCgCgDAAQgEAAgDACg");
	this.shape_160.setTransform(349.0028,363.4028);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#676767").s().p("AgEBUIhPhNQgEgDAAgEQAAgEADgEIBKhLQADgEAFAAQADAAAEAEIBPBMQADAEAAADQABAFgEADIhJBMQgDADgFAAIgBABQgDAAgDgEg");
	this.shape_161.setTransform(349.0031,363.4031);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#4D4C4D").s().p("AgFBWIhQhNQgEgEAAgFQAAgFAEgEIBJhLQAEgEAGAAQAEgBAEAEIBPBNQAEAEAAAFQABAFgEAEIhKBMQgDAEgGAAQgEAAgEgEgAgJhSIhJBMQgDADAAADQABAEACACIBPBNQAGAHAHgHIBJhMQAGgGgGgGIhQhNQgCgCgDAAQgEAAgDACg");
	this.shape_162.setTransform(359.9028,373.9972);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#676767").s().p("AgEBUIhPhMQgEgEAAgEQAAgEAEgDIBJhMQADgDAFAAQADgBAEAEIBPBNQADADABAEQAAAEgEAEIhJBLQgDAEgFAAQgEAAgDgEg");
	this.shape_163.setTransform(359.925,373.9969);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#4D4C4D").s().p("AgFBWIhQhNQgDgDAAgGQgBgFAEgEIBJhLQAEgEAGAAQAEgBAEAEIBPBNQAEAEABAFQAAAFgEAEIhKBMQgDAEgGAAQgFAAgDgEgAgIhRIhKBLQgCADgBADQAAAEADACIBPBNQADADADAAQAEgBADgCIBJhMQADgCgBgEQAAgDgCgDIhPhNQgDgCgDAAQgEAAgCADg");
	this.shape_164.setTransform(370.9,384.6472);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#676767").s().p("AgEBUIhPhMQgDgEAAgEQAAgEACgDIBKhMQADgDAFAAQADgBAEAEIBPBNQAEADgBAEQAAAEgCAEIhKBLQgDAEgFAAQgDAAgEgEg");
	this.shape_165.setTransform(370.9,384.6469);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#4D4C4D").s().p("AgGBWIhPhNQgEgEAAgFQAAgFAEgEIBJhMQAEgEAGAAQAEAAAEAEIBPBNQAEADAAAFQABAGgEAEIhKBLQgDAEgGAAIgBABQgEAAgEgEgAgJhSIhJBMQgDACAAAEQAAADADADIBPBNQADACADAAQAEAAADgDIBJhLQACgDAAgEQAAgDgCgCIhQhNQgCgDgDAAQgEAAgDADg");
	this.shape_166.setTransform(381.8528,395.2528);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#676767").s().p("AgEBVIhPhNQgEgEAAgEQAAgEAEgEIBJhLQADgEAFAAQADAAAEAEIBPBMQADAEAAADQABAFgEADIhJBMQgDADgFABQgEAAgDgDg");
	this.shape_167.setTransform(381.8531,395.25);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#4D4C4D").s().p("AgFBWIhQhNQgDgEAAgFQAAgFADgEIBJhLQAEgEAGAAQAEgBAEAEIBPBNQAEAEAAAFQABAFgEAEIhKBMQgDAEgGAAQgEAAgEgEgAgJhSIhJBMQgDADAAADQAAAEADACIBPBNQAGAGAHgGIBJhMQAGgGgGgGIhQhNQgCgCgDAAQgEAAgDACg");
	this.shape_168.setTransform(392.7778,405.8472);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#676767").s().p("AgEBUIhPhMQgEgEAAgEQAAgEAEgDIBJhMQADgEAFAAQADAAAEAEIBPBMQAEAEAAAEQAAAEgEAEIhJBLQgDAEgFAAQgEAAgDgEg");
	this.shape_169.setTransform(392.775,405.825);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#4D4C4D").s().p("AgFBWIhQhNQgDgEAAgFQAAgFADgEIBJhLQAEgFAGAAQAFAAADAEIBPBNQAEAEAAAEQABAGgEAEIhKBMQgEADgFAAQgFAAgDgDgAgJhSIhJBMQgDACAAAEQABAEACACIBPBNQADACADABQAEAAADgEIBJhLQACgDAAgEQAAgDgCgCIhPhNQgEgDgCAAQgEAAgDADg");
	this.shape_170.setTransform(403.7778,416.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#676767").s().p("AgEBUIhPhMQgEgEAAgEQAAgEAEgDIBJhMQAIgIAHAIIBPBNQADADABAEQAAAEgEAEIhJBLQgDAEgFAAQgEAAgDgEg");
	this.shape_171.setTransform(403.775,416.4685);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#4D4C4D").s().p("AgFBWIhQhNQgEgEAAgFQAAgFAEgEIBJhMQAEgEAFAAQAFAAAEAEIBQBNQADAEAAAEQAAAGgDAEIhJBLQgFAEgFAAIgBABQgEAAgDgEgAgJhSIhJBMQgHAGAHAGIBPBNQAGAGAGgGIBKhMQADgDAAgEQgBgDgCgCIhPhNQgEgDgCAAQgEAAgDADg");
	this.shape_172.setTransform(414.8,427.1528);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#676767").s().p("AgEBUIhPhNQgEgDAAgEQAAgEAEgEIBJhLQADgEAFAAQADAAAEAEIBPBMQAEAEAAADQAAAFgEADIhJBMQgDADgFAAIgBABQgDAAgDgEg");
	this.shape_173.setTransform(414.775,427.1531);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#4D4C4D").s().p("AgFBVIhPhMQgEgEAAgFQgBgFAEgEIBKhMQADgEAGAAQAEAAAEAEIBQBNQAEAEAAAEQAAAGgEADIhJBMQgFAFgFAAQgEAAgEgFgAgJhSIhJBMQgCACAAAEQAAADACADIBPBMQAGAHAHgHIBJhLQADgDAAgEQgBgDgCgDIhPhMQgEgDgCAAQgEAAgDADg");
	this.shape_174.setTransform(425.6472,437.7222);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#676767").s().p("AgEBUIhPhMQgEgEAAgEQAAgEAEgDIBJhMQADgDAFAAQAEgBADAEIBPBNQAEADAAAEQAAAEgEAEIhJBLQgDAEgFAAQgDAAgEgEg");
	this.shape_175.setTransform(425.625,437.6969);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#4D4C4D").s().p("AgFBWIhQhNQgEgEAAgFQAAgFAEgEIBJhLQAEgEAGAAQAEgBAEAEIBPBNQAEAEAAAFQABAFgEAEIhKBLQgDAEgGAAIgBAAQgDAAgEgDgAgJhSIhJBMQgDADAAADQAAAEADACIBPBNQAFAGAIgGIBJhMQAGgGgGgGIhQhNQgCgCgDAAQgEAAgDACg");
	this.shape_176.setTransform(436.5528,448.275);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#676767").s().p("AgEBUIhPhMQgEgEAAgEQAAgEADgDIBKhMQADgDAFAAQADgBAEAEIBPBNQADADAAAEQABAEgEAEIhJBLQgDAEgFAAQgEAAgDgEg");
	this.shape_177.setTransform(436.5531,448.2969);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#4D4C4D").s().p("AgGBVIhPhMQgDgEAAgFQAAgFADgEIBJhMQAEgDAGAAQAEAAAEADIBPBNQAEAEAAAFQABAFgEAEIhKBLQgEAFgFAAQgFAAgEgFgAgJhRIhJBLQgDADAAADQAAADADADIBPBNQAGAGAGgHIBKhLQACgDAAgDQAAgDgCgDIhQhNQgCgDgDAAQgEABgDADg");
	this.shape_178.setTransform(447.5778,458.95);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#676767").s().p("AgEBVIhPhNQgEgEAAgEQAAgEAEgDIBJhMQAIgIAHAIIBPBNQADADAAAEQABAEgEAEIhJBLQgDAEgFAAQgEAAgDgDg");
	this.shape_179.setTransform(447.5531,458.9185);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#4D4C4D").s().p("AAMBDIhPhMQgDgDAAgGQAAgGADgEIAlgmQAEgEAGAAQAFAAAEAEIBOBLQAEAEAAAGQAAAGgEADIglAnQgDAEgGAAQgFAAgEgEgAgbg/IglAmQgDADAAAEQAAAEADACIBOBMQADADAEAAQAEAAADgDIAlgmQACgDAAgEQAAgEgDgDIhOhLQgCgDgEAAQgEAAgDADg");
	this.shape_180.setTransform(290.975,324.7222);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#676767").s().p("AANBCIhOhMQgDgEAAgEQAAgFADgDIAlgnQADgDAFAAQAFAAADADIBOBMQADAEAAAEQAAAEgDAEIglAnQgDADgFAAQgFAAgDgDg");
	this.shape_181.setTransform(290.95,324.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#4D4C4D").s().p("AAMBDIhOhLQgEgEAAgGQgBgFAEgEIAlgnQAEgEAGAAQAGAAADAEIBPBMQAEAEAAAFQAAAGgEAEIglAmQgEAEgGAAIgBAAQgFAAgDgEgAgbg/IglAmQgGAHAGAHIBPBLQACADAEAAQAEAAADgDIAlgmQADgDAAgEQgBgEgCgCIhOhMQgEgDgDAAQgEAAgDADg");
	this.shape_182.setTransform(302.4472,335.8278);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#676767").s().p("AANBCIhOhLQgEgEAAgEQAAgFAEgEIAlgmQAHgIAJAIIBOBMQADADABAFQgBAEgDAEIglAmQgDADgFAAIgBAAQgEAAgDgDg");
	this.shape_183.setTransform(302.45,335.7967);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#4D4C4D").s().p("AAMBDIhPhMQgDgEAAgFQAAgGADgEIAlgmQAEgEAGAAQAFAAAEAEIBOBLQAFAEAAAGQAAAGgFADIglAnQgDAEgGAAQgFAAgEgEgAgag/IgmAmQgCADgBAEQAAAEAEACIBNBMQADADAEAAQAEgBADgCIAlgmQAGgHgGgHIhPhLQgCgDgFAAQgDAAgCADg");
	this.shape_184.setTransform(313.85,346.7722);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#676767").s().p("AANBCIhOhMQgDgEgBgEQAAgFADgDIAlgnQAEgDAFAAQAFAAADADIBOBMQADAEAAAEQAAAFgDADIglAnQgDADgFAAQgFAAgDgDg");
	this.shape_185.setTransform(313.85,346.75);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#4D4C4D").s().p("AAMBDIhOhMQgEgDAAgGQgBgFAEgEIAlgnQAEgEAGAAQAFAAAEAEIBOBMQAEADAAAGQABAGgEAEIglAmQgEAEgGAAIgBAAQgFAAgDgEgAgbg/IglAmQgCADAAAEQAAAEACADIBPBLQACADAEAAQAEAAADgDIAlgmQACgDAAgEQAAgEgCgCIhPhMQgCgDgEAAQgEAAgDADg");
	this.shape_186.setTransform(325.325,357.8778);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#676767").s().p("AANBBIhOhLQgDgDAAgFQgBgFAEgDIAlgmQADgEAFAAQAEAAAEADIBOBMQAEADAAAFQAAAEgEAEIglAmQgDADgFABQgEAAgEgEg");
	this.shape_187.setTransform(325.3469,357.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#4D4C4D").s().p("AAMBDIhOhMQgEgDAAgGQgBgFAEgEIAlgnQAEgEAGAAQAFAAAEAEIBOBMQAEADAAAGQABAGgEAEIglAmQgEAEgGAAIgBAAQgFAAgDgEgAgbg/IglAmQgGAHAGAHIBOBLQAHAHAHgHIAlgmQACgDAAgEQAAgEgCgCIhPhMQgCgDgEAAQgEAAgDADg");
	this.shape_188.setTransform(336.525,368.7278);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#676767").s().p("AAOBCIhPhMQgEgDABgFQgBgEAEgEIAlgmQAIgIAIAIIBOBMQADADAAAFQAAAEgCAEIglAmQgEADgEAAIgCAAQgDAAgDgDg");
	this.shape_189.setTransform(336.5,368.6967);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#4D4C4D").s().p("AALBDIhNhMQgFgEAAgFQAAgGAFgEIAlgmQADgEAGAAQAGAAAEAEIBOBMQADAEAAAFQAAAGgDADIglAnQgFAEgFAAQgFAAgFgEgAgbg/IglAmQgCADAAAEQAAAEACACIBPBMQACADAFAAQAEAAACgDIAlgmQAGgHgHgHIhNhLQgEgDgDAAQgFAAgCADg");
	this.shape_190.setTransform(348,379.8722);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#676767").s().p("AANBCIhOhMQgEgEAAgEQABgFADgDIAlgmQADgEAFAAQAFAAADADIBOBMQADADABAFQgBAFgDADIglAmQgDAEgFAAQgFAAgDgDg");
	this.shape_191.setTransform(348,379.8719);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#4D4C4D").s().p("AAMBDIhOhMQgEgEAAgFQgBgGAEgEIAmgmQADgEAGAAQAFAAAEAEIBOBLQAEAEAAAGQABAFgEAEIglAnQgEAEgGAAQgFAAgEgEgAgbg/IglAmQgCADAAAEQAAAEACACIBPBMQACADAEAAQAEgBADgCIAlgnQACgCAAgEQAAgEgCgDIhPhLQgCgDgEAAQgEAAgDADg");
	this.shape_192.setTransform(359.225,390.775);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#676767").s().p("AANBBIhOhLQgDgEAAgEQgBgFAEgDIAlgmQADgEAFAAQAEAAAEAEIBOBLQADADABAFQAAAEgEAEIglAmQgDAEgFAAQgEAAgEgEg");
	this.shape_193.setTransform(359.2469,390.75);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#4D4C4D").s().p("AAMBDIhPhMQgEgEAAgFQAAgGAEgEIAlgmQAEgEAGAAQAFAAAEAEIBOBMQAEADAAAGQABAGgEAEIgmAmQgDAEgGAAIgBAAQgEAAgEgEgAgbg/IglAmQgGAHAGAHIBOBLQAHAGAHgGIAlgmQACgDAAgEQAAgEgDgCIhOhMQgCgDgEAAQgEAAgDADg");
	this.shape_194.setTransform(370.7028,401.8778);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#676767").s().p("AAOBCIhPhMQgEgDABgFQgBgFAEgDIAlgmQAIgIAIAHIBOBMQADAEAAAEQAAAFgCADIglAmQgEAEgEAAQgFAAgDgDg");
	this.shape_195.setTransform(370.7,401.8685);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#4D4C4D").s().p("AAMBDIhPhMQgEgEAAgFQAAgGAEgDIAlgnQAEgEAGAAQAFAAAEAEIBOBMQAEADAAAGQABAGgEAEIgmAmQgDAEgGAAIgBAAQgEAAgEgEgAgbg/IglAmQgGAHAGAGIBOBMQAHAHAHgHIAlgmQACgDAAgEQAAgEgDgCIhOhMQgDgDgDAAQgEAAgDADg");
	this.shape_196.setTransform(381.9028,412.725);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#676767").s().p("AANBCIhOhMQgDgDgBgFQABgFADgDIAlgmQADgEAFAAQAFAAADADIBOBMQAEAEAAAEQgBAFgDADIglAmQgDAEgFAAQgEAAgEgDg");
	this.shape_197.setTransform(381.9,412.725);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#4D4C4D").s().p("AAMBDIhOhMQgEgDAAgGQgBgGAEgEIAmgmQADgEAGAAQAFAAAEAEIBPBMQAEAEAAAFQAAAGgEADIglAnQgEAEgGAAQgFAAgEgEgAgbg/IglAmQgCADAAAEQAAAEACACIBPBMQACADAEAAQAEAAADgDIAlgmQAGgHgGgHIhOhLQgDgDgEAAQgEAAgDADg");
	this.shape_198.setTransform(393.3972,423.8722);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#676767").s().p("AANBBIhOhLQgDgDAAgFQgBgEAEgEIAlgmQADgEAFAAQAEAAAEAEIBOBLQAEADAAAFQAAAFgEADIglAmQgDAEgFAAQgEAAgEgEg");
	this.shape_199.setTransform(393.3969,423.85);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#4D4C4D").s().p("AAMBDIhOhMQgEgDAAgGQgBgGAEgEIAmgmQADgEAGAAQAFAAAEAEIBOBLQAEAEAAAGQABAFgEAEIglAnQgFAEgFAAQgFAAgEgEgAgbg/IglAmQgCADAAAEQAAAEACACIBPBMQACADAEAAQAEAAADgDIAlgmQAGgHgGgHIhPhLQgCgDgEAAQgEAAgDADg");
	this.shape_200.setTransform(404.575,434.7472);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#676767").s().p("AANBBIhOhLQgEgEAAgEQAAgFAEgDIAlgnQADgDAFAAQAEAAAEADIBOBMQADADABAFQgBAEgDAEIglAmQgDAEgFAAQgEAAgEgEg");
	this.shape_201.setTransform(404.6,434.7219);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#4D4C4D").s().p("AAMBDIhPhMQgDgDAAgGQAAgFADgEIAlgnQAEgEAGAAQAFAAAEAEIBOBMQAEADAAAGQABAGgEAEIgmAmQgDAEgGAAIgBAAQgFAAgDgEgAgbg/IglAmQgGAHAGAHIBOBLQAHAHAHgHIAlgmQACgDAAgEQAAgEgDgCIhOhMQgCgDgEAAQgEAAgDADg");
	this.shape_202.setTransform(416.0778,445.8278);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#676767").s().p("AANBCIhOhNQgEgDAAgEQAAgFAEgDIAlgnQADgDAFAAQAEAAAEADIBOBMQADADAAAFQABAEgEAEIglAnQgDADgFAAQgEAAgEgDg");
	this.shape_203.setTransform(416.0531,445.85);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#4D4C4D").s().p("AAMBDIhPhMQgDgEAAgFQAAgGADgDIAlgnQAEgEAGAAQAFAAAEAEIBOBMQAFAEAAAFQAAAGgFAEIglAmQgDAEgGAAIgBAAQgEAAgEgEgAgag/IgmAmQgCADgBAEQABAEADADIBNBLQAIAHAGgHIAlgmQADgDgBgEQAAgEgCgCIhPhMQgCgDgEAAQgEABgCACg");
	this.shape_204.setTransform(427.25,456.6778);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#676767").s().p("AANBBIhOhLQgDgDgBgFQABgEADgEIAlgmQADgEAFAAQAFAAADAEIBOBLQADADAAAFQAAAEgDAEIglAmQgDAEgFAAQgFAAgDgEg");
	this.shape_205.setTransform(427.25,456.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#4D4C4D").s().p("AAMBDIhOhMQgEgDAAgGQgBgGAEgEIAmgmQADgEAGAAQAFAAAEAEIBPBMQAEAEAAAFQAAAGgEADIglAnQgEAEgGAAQgFAAgEgEgAgbg/IglAmQgCADAAAEQAAAEACACIBPBMQACADAEAAQAEAAADgDIAlgmQACgDAAgEQAAgEgCgCIhPhMQgCgDgEAAQgEAAgDADg");
	this.shape_206.setTransform(438.7472,467.8222);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#676767").s().p("AANBCIhOhMQgDgEAAgEQgBgFAEgDIAlgmQADgEAFAAQAEAAAEADIBOBMQAEADAAAFQAAAFgEADIglAmQgDAEgFAAQgEAAgEgDg");
	this.shape_207.setTransform(438.7469,467.8219);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#C6C5C5").s().p("AHVQwI4T3iQgNgNAAgTQgBgTANgNIIro8QANgOATAAQATAAANANIYSXiQAOANAAATQAAATgNANIoqI8QgNAOgTAAQgTAAgNgNg");
	this.shape_208.setTransform(391.4241,368.975);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#A1A1A1").s().p("AA9CXIjVjOQgEgEAAgGQAAgFAEgEIBJhMQAEgEAFAAQAGAAAEAEIDVDOQAEAEAAAGQAAAFgEAEIhJBMQgEAEgFAAIgBAAQgFAAgEgEgAhMiTIhJBMQgDACAAAEQAAAEADADIDVDOQAGAHAHgHIBJhMQADgCAAgEQAAgEgDgDIjVjOQgDgDgEAAQgEAAgCADg");
	this.shape_209.setTransform(471.6778,420.375);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#E1E1E1").s().p("AA+CWIjVjPQgDgDAAgFQAAgEADgEIBJhMQAEgDAEAAQAFAAADADIDVDPQAEADAAAFQAAAEgDAEIhKBLQgDAEgFAAIgBAAQgDAAgEgDg");
	this.shape_210.setTransform(471.6531,420.3781);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#A1A1A1").s().p("AgFBWIhPhNQgEgDAAgGQgBgFAEgEIBKhLQADgEAGAAQAEgBAEAEIBQBNQAEAEAAAFQAAAFgEAEIhJBMQgEAEgGAAQgEAAgEgEgAgIhRIhKBLQgCADAAADQAAAEACACIBQBNQACADADAAQAEgBADgCIBJhMQADgCAAgEQAAgDgDgDIhPhNQgDgCgDAAQgEAAgCADg");
	this.shape_211.setTransform(453.9472,403.1972);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#E1E1E1").s().p("AgEBVIhPhOQgDgDAAgEQgBgEAEgDIBJhMQADgEAFABQAEAAADACIBPBOQAEACAAAFQAAAEgEADIhJBMQgDAEgFgBQgDAAgEgCg");
	this.shape_212.setTransform(453.9469,403.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#A1A1A1").s().p("AgFBWIhPhNQgEgEAAgFQgBgFAEgEIBKhLQADgEAGAAQAEgBAEAEIBQBNQAEAEAAAEQAAAGgEAEIhJBLQgEAEgGAAIgBAAQgEAAgDgDgAgJhSIhJBMQgCADAAADQAAAEACACIBQBNQACACADAAQAEAAADgCIBJhMQADgDAAgEQAAgDgDgCIhPhNQgEgDgCAAQgDAAgEADg");
	this.shape_213.setTransform(442.9972,392.575);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#E1E1E1").s().p("AgEBUIhPhMQgDgEgBgEQAAgEAEgDIBJhMQADgEAFAAQAEAAADAEIBPBMQAEAEAAADQAAAFgEADIhJBMQgDAEgFAAQgDAAgEgEg");
	this.shape_214.setTransform(442.975,392.575);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#A1A1A1").s().p("AgGBWIhOhNQgFgEAAgFQAAgFAEgEIBKhLQADgEAGAAQAFgBAEAEIBPBNQADAEAAAEQABAGgEAEIhJBLQgEAEgGAAIgBAAQgEAAgEgDgAgJhSIhJBMQgCADAAADQAAAEACACIBQBNQACADADAAQAEgBACgCIBKhMQADgDAAgEQAAgDgEgCIhOhNQgDgCgDAAQgEAAgDACg");
	this.shape_215.setTransform(432.15,382.075);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#E1E1E1").s().p("AgEBUIhPhNQgEgDAAgEQABgEADgDIBJhMQAEgEAEAAQAEAAADAEIBPBMQADAEABADQAAAFgDADIhKBMQgDADgFAAIgBABQgDAAgDgEg");
	this.shape_216.setTransform(432.15,382.0531);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#A1A1A1").s().p("AgFBWIhPhNQgEgEAAgFQgBgFAEgEIBKhLQADgEAGAAQAEgBAEAEIBQBNQAEAEAAAFQAAAFgEAEIhJBMQgEAEgGAAQgEAAgEgEgAgJhSIhJBMQgCADAAADQAAAEACACIBPBNQAGAHAHgHIBJhMQAGgGgGgGIhPhNQgDgCgDAAQgEAAgDACg");
	this.shape_217.setTransform(421.0972,371.3472);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#E1E1E1").s().p("AgEBUIhPhMQgEgEAAgEQAAgEAEgDIBJhMQAIgIAHAIIBPBNQAEADAAAEQAAAEgEAEIhJBLQgDAEgFAAQgDAAgEgEg");
	this.shape_218.setTransform(421.075,371.3185);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#A1A1A1").s().p("AgFBWIhQhNQgDgEAAgFQAAgFADgEIBKhLQADgEAGAAQAEgBAEAEIBPBNQAEAEAAAEQABAGgEAEIhKBLQgDAEgGAAIgBAAQgEAAgDgDgAgJhSIhJBMQgDACAAAEQABADACADIBPBNQAGAGAHgGIBJhMQACgDAAgEQAAgDgCgCIhQhNQgCgDgDAAQgEABgDACg");
	this.shape_219.setTransform(410.1778,360.775);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#E1E1E1").s().p("AgEBUIhPhMQgEgEAAgEQAAgEAEgDIBJhMQADgDAFgBQADABAEADIBPBMQAEAEAAAEQAAAEgEAEIhJBLQgDAEgFAAQgEgBgDgDg");
	this.shape_220.setTransform(410.175,360.75);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#A1A1A1").s().p("AgFBWIhPhNQgEgEAAgFQgBgFAEgEIBKhMQAEgDAFAAQAFAAADADIBQBNQAEAEAAAEQAAAGgEAEIhJBLQgEAEgGAAIgBAAQgEAAgDgDgAgJhSIhJBMQgCACAAAEQAAADACADIBPBNQADACADAAQAEAAADgDIBJhLQADgDAAgEQgBgDgCgCIhPhNQgDgDgDAAQgEABgDACg");
	this.shape_221.setTransform(399.1972,350.1278);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#E1E1E1").s().p("AgEBUIhPhNQgEgDAAgEQAAgEAEgEIBJhLQADgEAFAAQADAAAEAEIBPBMQAEAEAAADQAAAFgEADIhJBMQgDADgFAAIgBABQgDAAgDgEg");
	this.shape_222.setTransform(399.175,350.1031);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#A1A1A1").s().p("AgFBVIhPhMQgEgEAAgFQgBgFAEgEIBJhMQAEgEAGAAQAEAAAEAEIBQBNQAEAEAAAEQAAAGgEAEIhJBLQgFAFgFAAQgEAAgEgFgAgJhSIhJBMQgCACAAAEQAAADACADIBPBNQADACADAAQAEAAADgDIBJhLQADgDAAgEQgBgDgCgCIhPhNQgDgDgDAAQgEAAgDADg");
	this.shape_223.setTransform(388.2472,339.5222);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#E1E1E1").s().p("AgEBUIhPhMQgEgEAAgEQAAgEAEgDIBJhMQADgDAFAAQADgBAEAEIBPBNQAEADAAAEQAAAEgEAEIhJBLQgDAEgFAAQgDAAgEgEg");
	this.shape_224.setTransform(388.225,339.4969);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#A1A1A1").s().p("AgFBWIhQhNQgDgEAAgFQAAgFADgEIBJhMQAEgDAGAAQAEAAAEADIBPBNQAEAEAAAEQABAGgEAEIhJBLQgEAEgGAAIgBAAQgEAAgDgDgAgJhSIhJBMQgDADAAADQAAAEADACIBPBNQAGAGAHgGIBJhMQACgDAAgEQAAgDgCgCIhQhNQgCgCgDAAQgEAAgDACg");
	this.shape_225.setTransform(377.3278,328.9278);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#E1E1E1").s().p("AgEBUIhPhMQgEgEAAgEQAAgEAEgEIBJhLQADgEAFAAQADAAAEAEIBPBMQAEAEAAADQAAAFgEADIhJBMQgDAEgFAAQgEAAgDgEg");
	this.shape_226.setTransform(377.325,328.925);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#A1A1A1").s().p("AgFBVIhQhMQgEgEAAgFQAAgFAEgEIBJhMQAEgDAGAAQAEAAAEADIBPBNQAEADAAAGQABAFgEAEIhKBLQgEAEgFABQgFgBgDgEgAgJhSIhJBMQgDADAAADQAAAEADACIBPBNQADADADgBQAEAAACgCIBKhMQACgCAAgEQAAgDgCgDIhQhNQgCgCgDgBQgEAAgDADg");
	this.shape_227.setTransform(366.3028,318.25);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#E1E1E1").s().p("AgEBVIhPhNQgEgEAAgEQAAgEAEgDIBJhMQAIgIAHAIIBPBNQADADAAAEQABAEgEAEIhJBLQgDAEgFAAQgEAAgDgDg");
	this.shape_228.setTransform(366.3031,318.2185);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#A1A1A1").s().p("AgFBWIhQhNQgEgEAAgFQAAgFAEgEIBJhLQAEgEAGAAQAEgBAEAEIBPBNQAEAEAAAFQABAFgEAEIhKBMQgEAEgFAAQgFAAgDgEgAgJhSIhJBMQgDADAAADQAAAEADACIBPBNQAGAGAHgGIBJhMQACgCAAgEQAAgDgCgDIhQhNQgCgCgDAAQgEAAgDACg");
	this.shape_229.setTransform(355.3028,307.5972);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#E1E1E1").s().p("AgEBUIhPhMQgEgEAAgEQAAgEAEgDIBJhMQAIgIAHAIIBPBMQADAEAAAEQABAEgEAEIhJBLQgDAEgFAAQgEAAgDgEg");
	this.shape_230.setTransform(355.3031,307.5685);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#A1A1A1").s().p("AA9CXIjVjOQgEgEAAgGQAAgFAEgEIBJhMQADgEAGAAQAGAAAEAEIDVDOQAEAEAAAGQAAAFgEAEIhJBMQgEAEgGAAIgBAAQgEAAgEgEgAhMiTIhKBLQgCADAAAEQAAAEADADIDVDOQACADAEAAQAEAAADgDIBJhMQADgCAAgEQAAgEgDgDIjVjOQgDgDgEAAQgEAAgCADg");
	this.shape_231.setTransform(337.6028,290.425);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#E1E1E1").s().p("AA/CWIjVjOQgEgEAAgEQAAgFADgEIBKhLQADgDAFgBQAEAAAEAEIDUDOQAEADAAAFQAAAEgDAEIhKBMQgDADgFAAQgEAAgDgDg");
	this.shape_232.setTransform(337.6,290.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#A1A1A1").s().p("AAMBDIhPhMQgDgDAAgGQAAgGADgEIAlgmQAEgEAGAAQAFAAAEAEIBOBLQAEAEAAAGQAAAGgEADIglAnQgDAEgGAAQgFAAgEgEgAgbg/IglAmQgDADAAAEQAAAEADACIBOBMQADADAEAAQAEAAADgDIAlgmQACgDAAgEQAAgEgDgDIhOhLQgCgDgEAAQgEAAgDADg");
	this.shape_233.setTransform(290.975,324.7222);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#E1E1E1").s().p("AANBCIhOhMQgDgEAAgEQAAgFADgDIAlgnQADgDAFAAQAFAAADADIBOBMQADAEAAAEQAAAEgDAEIglAnQgDADgFAAQgFAAgDgDg");
	this.shape_234.setTransform(290.95,324.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#A1A1A1").s().p("AAMBDIhOhLQgEgEAAgGQgBgFAEgEIAlgnQAEgEAGAAQAGAAADAEIBPBMQAEAEAAAFQAAAGgEAEIglAmQgEAEgGAAIgBAAQgFAAgDgEgAgbg/IglAmQgGAHAGAHIBPBLQACADAEAAQAEAAADgDIAlgmQADgDAAgEQgBgEgCgCIhOhMQgEgDgDAAQgEAAgDADg");
	this.shape_235.setTransform(302.4472,335.8278);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#E1E1E1").s().p("AANBCIhOhLQgEgEAAgEQAAgFAEgEIAlgmQAHgIAJAIIBOBMQADADABAFQgBAEgDAEIglAmQgDADgFAAIgBAAQgEAAgDgDg");
	this.shape_236.setTransform(302.45,335.7967);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#A1A1A1").s().p("AAMBDIhPhMQgDgEAAgFQAAgGADgEIAlgmQAEgEAGAAQAFAAAEAEIBOBLQAFAEAAAGQAAAGgFADIglAnQgDAEgGAAQgFAAgEgEgAgag/IgmAmQgCADgBAEQAAAEAEACIBNBMQADADAEAAQAEgBADgCIAlgmQAGgHgGgHIhPhLQgCgDgFAAQgDAAgCADg");
	this.shape_237.setTransform(313.85,346.7722);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#E1E1E1").s().p("AANBCIhOhMQgDgEgBgEQAAgFADgDIAlgnQAEgDAFAAQAFAAADADIBOBMQADAEAAAEQAAAFgDADIglAnQgDADgFAAQgFAAgDgDg");
	this.shape_238.setTransform(313.85,346.75);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#A1A1A1").s().p("AAMBDIhOhMQgEgDAAgGQgBgFAEgEIAlgnQAEgEAGAAQAFAAAEAEIBOBMQAEADAAAGQABAGgEAEIglAmQgEAEgGAAIgBAAQgFAAgDgEgAgbg/IglAmQgCADAAAEQAAAEACADIBPBLQACADAEAAQAEAAADgDIAlgmQACgDAAgEQAAgEgCgCIhPhMQgCgDgEAAQgEAAgDADg");
	this.shape_239.setTransform(325.325,357.8778);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#E1E1E1").s().p("AANBBIhOhLQgDgDAAgFQgBgFAEgDIAlgmQADgEAFAAQAEAAAEADIBOBMQAEADAAAFQAAAEgEAEIglAmQgDADgFABQgEAAgEgEg");
	this.shape_240.setTransform(325.3469,357.9);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#A1A1A1").s().p("AAMBDIhOhMQgEgDAAgGQgBgFAEgEIAlgnQAEgEAGAAQAFAAAEAEIBOBMQAEADAAAGQABAGgEAEIglAmQgEAEgGAAIgBAAQgFAAgDgEgAgbg/IglAmQgGAHAGAHIBOBLQAHAHAHgHIAlgmQACgDAAgEQAAgEgCgCIhPhMQgCgDgEAAQgEAAgDADg");
	this.shape_241.setTransform(336.525,368.7278);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#E1E1E1").s().p("AAOBCIhPhMQgEgDABgFQgBgEAEgEIAlgmQAIgIAIAIIBOBMQADADAAAFQAAAEgCAEIglAmQgEADgEAAIgCAAQgDAAgDgDg");
	this.shape_242.setTransform(336.5,368.6967);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#A1A1A1").s().p("AALBDIhNhMQgFgEAAgFQAAgGAFgEIAlgmQADgEAGAAQAGAAAEAEIBOBMQADAEAAAFQAAAGgDADIglAnQgFAEgFAAQgFAAgFgEgAgbg/IglAmQgCADAAAEQAAAEACACIBPBMQACADAFAAQAEAAACgDIAlgmQAGgHgHgHIhNhLQgEgDgDAAQgFAAgCADg");
	this.shape_243.setTransform(348,379.8722);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#E1E1E1").s().p("AANBCIhOhMQgEgEAAgEQABgFADgDIAlgmQADgEAFAAQAFAAADADIBOBMQADADABAFQgBAFgDADIglAmQgDAEgFAAQgFAAgDgDg");
	this.shape_244.setTransform(348,379.8719);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#A1A1A1").s().p("AAMBDIhOhMQgEgEAAgFQgBgGAEgEIAmgmQADgEAGAAQAFAAAEAEIBOBLQAEAEAAAGQABAFgEAEIglAnQgEAEgGAAQgFAAgEgEgAgbg/IglAmQgCADAAAEQAAAEACACIBPBMQACADAEAAQAEgBADgCIAlgnQACgCAAgEQAAgEgCgDIhPhLQgCgDgEAAQgEAAgDADg");
	this.shape_245.setTransform(359.225,390.775);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#E1E1E1").s().p("AANBBIhOhLQgDgEAAgEQgBgFAEgDIAlgmQADgEAFAAQAEAAAEAEIBOBLQADADABAFQAAAEgEAEIglAmQgDAEgFAAQgEAAgEgEg");
	this.shape_246.setTransform(359.2469,390.75);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#A1A1A1").s().p("AAMBDIhPhMQgEgEAAgFQAAgGAEgEIAlgmQAEgEAGAAQAFAAAEAEIBOBMQAEADAAAGQABAGgEAEIgmAmQgDAEgGAAIgBAAQgEAAgEgEgAgbg/IglAmQgGAHAGAHIBOBLQAHAGAHgGIAlgmQACgDAAgEQAAgEgDgCIhOhMQgCgDgEAAQgEAAgDADg");
	this.shape_247.setTransform(370.7028,401.8778);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#E1E1E1").s().p("AAOBCIhPhMQgEgDABgFQgBgFAEgDIAlgmQAIgIAIAHIBOBMQADAEAAAEQAAAFgCADIglAmQgEAEgEAAQgFAAgDgDg");
	this.shape_248.setTransform(370.7,401.8685);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#A1A1A1").s().p("AAMBDIhPhMQgEgEAAgFQAAgGAEgDIAlgnQAEgEAGAAQAFAAAEAEIBOBMQAEADAAAGQABAGgEAEIgmAmQgDAEgGAAIgBAAQgEAAgEgEgAgbg/IglAmQgGAHAGAGIBOBMQAHAHAHgHIAlgmQACgDAAgEQAAgEgDgCIhOhMQgDgDgDAAQgEAAgDADg");
	this.shape_249.setTransform(381.9028,412.725);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#E1E1E1").s().p("AANBCIhOhMQgDgDgBgFQABgFADgDIAlgmQADgEAFAAQAFAAADADIBOBMQAEAEAAAEQgBAFgDADIglAmQgDAEgFAAQgEAAgEgDg");
	this.shape_250.setTransform(381.9,412.725);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#A1A1A1").s().p("AAMBDIhOhMQgEgDAAgGQgBgGAEgEIAmgmQADgEAGAAQAFAAAEAEIBPBMQAEAEAAAFQAAAGgEADIglAnQgEAEgGAAQgFAAgEgEgAgbg/IglAmQgCADAAAEQAAAEACACIBPBMQACADAEAAQAEAAADgDIAlgmQAGgHgGgHIhOhLQgDgDgEAAQgEAAgDADg");
	this.shape_251.setTransform(393.3972,423.8722);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#E1E1E1").s().p("AANBBIhOhLQgDgDAAgFQgBgEAEgEIAlgmQADgEAFAAQAEAAAEAEIBOBLQAEADAAAFQAAAFgEADIglAmQgDAEgFAAQgEAAgEgEg");
	this.shape_252.setTransform(393.3969,423.85);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#A1A1A1").s().p("AAMBDIhOhMQgEgDAAgGQgBgGAEgEIAmgmQADgEAGAAQAFAAAEAEIBOBLQAEAEAAAGQABAFgEAEIglAnQgFAEgFAAQgFAAgEgEgAgbg/IglAmQgCADAAAEQAAAEACACIBPBMQACADAEAAQAEAAADgDIAlgmQAGgHgGgHIhPhLQgCgDgEAAQgEAAgDADg");
	this.shape_253.setTransform(404.575,434.7472);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#E1E1E1").s().p("AANBBIhOhLQgEgEAAgEQAAgFAEgDIAlgnQADgDAFAAQAEAAAEADIBOBMQADADABAFQgBAEgDAEIglAmQgDAEgFAAQgEAAgEgEg");
	this.shape_254.setTransform(404.6,434.7219);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#A1A1A1").s().p("AAMBDIhPhMQgDgDAAgGQAAgFADgEIAlgnQAEgEAGAAQAFAAAEAEIBOBMQAEADAAAGQABAGgEAEIgmAmQgDAEgGAAIgBAAQgFAAgDgEgAgbg/IglAmQgGAHAGAHIBOBLQAHAHAHgHIAlgmQACgDAAgEQAAgEgDgCIhOhMQgCgDgEAAQgEAAgDADg");
	this.shape_255.setTransform(416.0778,445.8278);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#E1E1E1").s().p("AANBCIhOhNQgEgDAAgEQAAgFAEgDIAlgnQADgDAFAAQAEAAAEADIBOBMQADADAAAFQABAEgEAEIglAnQgDADgFAAQgEAAgEgDg");
	this.shape_256.setTransform(416.0531,445.85);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#A1A1A1").s().p("AAMBDIhPhMQgDgEAAgFQAAgGADgDIAlgnQAEgEAGAAQAFAAAEAEIBOBMQAFAEAAAFQAAAGgFAEIglAmQgDAEgGAAIgBAAQgEAAgEgEgAgag/IgmAmQgCADgBAEQABAEADADIBNBLQAIAHAGgHIAlgmQADgDgBgEQAAgEgCgCIhPhMQgCgDgEAAQgEABgCACg");
	this.shape_257.setTransform(427.25,456.6778);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#E1E1E1").s().p("AANBBIhOhLQgDgDgBgFQABgEADgEIAlgmQADgEAFAAQAFAAADAEIBOBLQADADAAAFQAAAEgDAEIglAmQgDAEgFAAQgFAAgDgEg");
	this.shape_258.setTransform(427.25,456.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#A1A1A1").s().p("AAMBDIhOhMQgEgDAAgGQgBgGAEgEIAmgmQADgEAGAAQAFAAAEAEIBPBMQAEAEAAAFQAAAGgEADIglAnQgEAEgGAAQgFAAgEgEgAgbg/IglAmQgCADAAAEQAAAEACACIBPBMQACADAEAAQAEAAADgDIAlgmQACgDAAgEQAAgEgCgCIhPhMQgCgDgEAAQgEAAgDADg");
	this.shape_259.setTransform(438.7472,467.8222);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#E1E1E1").s().p("AANBCIhOhMQgDgEAAgEQgBgFAEgDIAlgmQADgEAFAAQAEAAAEADIBOBMQAEADAAAFQAAAFgEADIglAmQgDAEgFAAQgEAAgEgDg");
	this.shape_260.setTransform(438.7469,467.8219);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#ECECEC").s().p("AEPVGI5c4qQgbgagBgmQAAglAagbIPAvfQAbgbAlgBQAmAAAbAaIKDJxQALALAEAOIABAFQADAPALAKID1DuQAKAKAPADIAGACQAPACALALIKNJ4QAbAaABAmQAAAlgaAcIvBPeQgaAbglABIgCAAQgkAAgbgag");
	this.shape_261.setTransform(409.225,350.875);

	this.instance_8 = new lib.CompoundPath_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(409.2,350.85,1,1,0,0,0,136.7,135.7);
	this.instance_8.alpha = 0.3984;

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#D0D1D3").s().p("ANlRjI/9+/IAOhwIIWi3QAvgTAWgDQAjgEAYAYIZ6ZHQAXAXgEAoQgCASgPAvIiiIfQgOAzgXAGIgIABQgeAAg2g4g");
	this.shape_262.setTransform(319.7362,443.7461);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#888888").s().p("AN0RtMggKgfLIANhsIIWi3QAtgSAVgDQAkgEAXAXIZ6ZHQAVAVgCAjQgCAWgNAoIilImQgGAXgHAMQgJARgMADIgHABQgaAAgsgrg");
	this.shape_263.setTransform(319.7133,443.7447);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#888888").s().p("ANvRwMggKgfKIAPh1IIWi3QAwgUAWgBQAkgFAZAZIZ6ZHQAXAWgCAmQgCAVgOAqIikInQgHAYgHANQgKASgOADIgJABQgcAAgugtg");
	this.shape_264.setTransform(319.7873,443.7498);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#999EA1").s().p("ANtRsMggNgfSIAOhwIIWi3QAvgTAWgCQAjgEAYAXIaKZaQAXAXgEAoQgCARgPAwIijIfQgNAzgXAGIgHABQgfAAg2g4g");
	this.shape_265.setTransform(318.4296,444.8774);

	this.instance_9 = new lib.Path_10();
	this.instance_9.parent = this;
	this.instance_9.setTransform(371.85,380.8,1,1,0,0,0,173.9,175.2);
	this.instance_9.alpha = 0.1211;

	this.instance_10 = new lib.Path_11();
	this.instance_10.parent = this;
	this.instance_10.setTransform(370.3,374.9,1,1,0,0,0,173.9,175.2);
	this.instance_10.alpha = 0.1211;

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#127EA6").s().p("AglAWQgFgEgCgGQgCgHAEgFQADgGAHgBIA5gQQAHgBAGADQAGAEABAGQACAHgDAFQgEAFgGACIg6APIgFABQgEAAgEgCg");
	this.shape_266.setTransform(129.2389,182.1639);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#127EA6").s().p("AgkAWQgHgEgBgGQgCgHADgFQAEgFAGgCIA7gPQAGgCAGADQAFAEACAGQACAHgDAFQgEAFgGACIg7APIgEABQgEAAgDgCg");
	this.shape_267.setTransform(158.8,296.575);

	this.instance_11 = new lib.Path_2_2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(138.65,209.15,1,1,0,0,0,18.9,23.2);
	this.instance_11.alpha = 0.8008;

	this.instance_12 = new lib.Path_3();
	this.instance_12.parent = this;
	this.instance_12.setTransform(154.05,270.3,1,1,0,0,0,18.9,22.4);
	this.instance_12.alpha = 0.8008;

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#1BA8DF").s().p("AgNIlQgxgdgOg3IhBj7QgKgpAOgoQAOgnAggZIgYhfQgpgFgfgcQgggcgLgpIhAj7QgPg3AdgxQAdgyA4gOIA5gPQBTgTBIAtQBGArAUBMIAiCCQAbBsh3BRIgkAZQgOAJgHARQgHAQAEARIAGAWQAFARANALQAOALARABIAuADQCOANAcBuIAhCBQAUBMgoBIQgrBLhSAXIg5APQgSAFgRAAQgkAAghgUgAAhBWQg9ACgjARQghAQgKAlQgJAgAKAnIA3DXQAMAvApAZQAqAZAvgMIAwgMQBGgUAjhAQAig+gRhBIgdhvQgMgvglgbQgmgcg7gFQgUgDgYAAIgKABgAiBoQIgwAMQgvAMgZAqQgYArAMAvIA3DXQAKAnAZAYQAbAbAkgCIAWgEQAegIAmgRQAXgLAagSQBlhGgZhfIgdhwQgQhAg8gmQgqgbgwAAQgUAAgVAFg");
	this.shape_268.setTransform(146.3029,239.3442);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#1D3C67").s().p("ABFIsIi/rjQgJgmAFgmQAFgnAUgiICCjeQAFgIAIACQAJABACAIIAGAYQAIAfgQAaIhrC3QgUAiAKAoIDCLyQABABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAIgwANIgCAAQgEAAgBgFg");
	this.shape_269.setTransform(148.7588,239.411);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#1D3C67").s().p("ADyH5IjeiDQghgUgXgfQgYgfgJgmIjArkQgCgFAHgCIAvgMQABgBABAAQAAAAABAAQAAAAABABQAAAAABAAQACACABACIDDLyQAJAnAjAVIC2BrQAbARAIAdIAGAZQADAIgHAFQgEADgEAAQgDAAgEgCg");
	this.shape_270.setTransform(153.3594,233.6813);

	this.instance_13 = new lib.Group_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(144.6,244.6,1,1,0,0,0,31.6,59.6);
	this.instance_13.alpha = 0.1211;

	this.instance_14 = new lib.Group_2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(146.35,241.75,1,1,0,0,0,31.6,59.6);
	this.instance_14.alpha = 0.1211;

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#9BDBF2").s().p("EAK+A12QqiiKqhl7Qq5mJpVpUQpVpVmJq5Ql7qhiJqiQiJqjB9o7QCCpPGLmKQGKmLJPiCQI7h9KiCJQKjCKKhF7QK5GIJVJVQJVJVGIK5QF8KhCJKiQCJKjh9I7QiCJPmLGKQmKGLpPCCQkRA8koAAQlEAAlhhIg");
	this.shape_271.setTransform(365.425,442.625);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#08536F").s().p("ANiTFQgyg5gChKQgHkAhdkTQiPmqk/lnQlFlhmZi5QkJh4j+ghQhIgJg0g4Qg0g3gDhHQgBgnAPgjQAOgkAcgaQAZgYAggLQAggLAiAEQEnAcE3CCQHeDIGDGQIABgBIBpB0IgBABQFmGpCYHwQBhFBgBEqIjDCgQhGgJgyg6g");
	this.shape_272.setTransform(676.9973,134.6578);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#25282B").s().p("Azfn5INnsTIZYcFItnMUg");
	this.shape_273.setTransform(554.175,248.175);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#08536F").s().p("Am5Z+Qh7glhRhZIuzwYQhQhZgZh+QgXh7AgiLQBFknEFjsIPRtzQEFjsEtgnQCOgSB3AjQB7AlBRBZIOzQYQBQBZAZB+QAXB7ggCLQhFEnkGDsIvQNzQkFDsktAnQgwAGguAAQhYAAhPgXg");
	this.shape_274.setTransform(607.1,198.55);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#25282B").s().p("AgeBKIAAhDQgQgNAAgUQAAgXARgNQANgLAQAAIAKABQANADAKAKQAKAKADAOQAEAZgTARIAABDg");
	this.shape_275.setTransform(295.4672,353.025);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#D7A026").s().p("AjICzIAAllIGRFlg");
	this.shape_276.setTransform(295.525,351.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#F6BD2C").s().p("AhkCzIAAllIDJAAIAAFlg");
	this.shape_277.setTransform(285.35,351.85);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#F6BD2C").s().p("AhkCzIAAllIDJAAIAAFlg");
	this.shape_278.setTransform(305.55,351.85);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#F3F3F3").s().p("AA2BxIAAg3QAAg5gpgpQgngpg7AAIAAgfQBHAAAyAyQAyAygBBGIAAA3g");
	this.shape_279.setTransform(304,322.725);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#ABB7AF").s().p("AhVBdIAAgPQAAhHAzgxQAxgyBGAAIAAAfQg5AAgpApQgpAoABA6IAAAPg");
	this.shape_280.setTransform(286.9,320.75);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#08536F").s().p("AjJEjIAAlkIABAAIAAgBIABABIFTAAIAAg3QgBg5gpgpQgogpg6AAQg4AAgqArQgoAqAAA7IggABQAAhHAyg0QAzg1BFAAQBGAAAzAyQAxAyAABGIAAA3IAgAAIAAFkg");
	this.shape_281.setTransform(292.6,342.775);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#25282B").s().p("AgeBKIAAhDQgQgMAAgVQAAgWARgOQANgLAQAAIAKABQANADAKAKQAKAKADAOQAEAbgTAPIAABDg");
	this.shape_282.setTransform(629.7598,208.325);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#D7A026").s().p("AjICzIAAllIGRFlg");
	this.shape_283.setTransform(629.825,207.125);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#F6BD2C").s().p("AhkCzIAAllIDJAAIAAFlg");
	this.shape_284.setTransform(619.65,207.175);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#F6BD2C").s().p("AhkCzIAAllIDJAAIAAFlg");
	this.shape_285.setTransform(639.85,207.175);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#F3F3F3").s().p("AA2BxIAAg3QAAg5gogoQgpgpg5AAIAAggQBGAAAxAzQAzAyAABFIAAA3g");
	this.shape_286.setTransform(638.3,178.025);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#ABB7AF").s().p("AhUBdIAAgPQAAhGAxgxQAygzBHAAIAAAgQg6gBgoApQgqApAAA5IABAPg");
	this.shape_287.setTransform(621.2,176.05);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#08536F").s().p("AjJEjIAAlkIABAAIAAgBIABABIFSAAIAAg2QABg6gpgpQgpgpg6AAQg5AAgpArQgpArAAA6IgfABQAAhHAyg0QAzg1BFAAQBGAAAyAyQAzAyAABHIAAA2IAfAAIAAFkg");
	this.shape_288.setTransform(626.9,198.075);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#25282B").s().p("AgeBKIAAhCQgQgNAAgVQAAgWARgOQAOgLAPAAIAKABQANADAKALQAKAKADANQAEAagTARIAABCg");
	this.shape_289.setTransform(633.9672,353.475);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#D7A026").s().p("AjICzIAAllIGRFlg");
	this.shape_290.setTransform(634.025,352.275);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#F6BD2C").s().p("AhkCzIAAllIDJAAIAAFlg");
	this.shape_291.setTransform(623.85,352.325);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#F6BD2C").s().p("AhkCzIAAllIDJAAIAAFlg");
	this.shape_292.setTransform(644.05,352.325);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#F3F3F3").s().p("AA2BwIAAg2QABg6gpgoQgpgog5AAIAAggQBGAAAxAzQAzAxAABGIAAA2g");
	this.shape_293.setTransform(642.5,323.2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#ABB7AF").s().p("AhUBdIAAgQQgBhGAygxQAxgyBIAAIAAAfQg7AAgnApQgqAoABA5IAAAQg");
	this.shape_294.setTransform(625.4,321.25);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#08536F").s().p("AjJEjIAAlkIABAAIAAgBIABABIFTAAIAAg2QgBg6gpgpQgpgpg5AAQg4AAgqArQgoArAAA6IggABQAAhHAyg0QAzg1BFAAQBGAAAzAyQAxAyAABHIAAA2IAgAAIAAFkg");
	this.shape_295.setTransform(631.1,343.225);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#25282B").s().p("AgeBKIAAhDQgQgNAAgUQAAgXASgNQANgLAPAAIAKABQAOADAKAKQAKAKACAOQAFAagUAQIAABDg");
	this.shape_296.setTransform(470.776,352.075);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#D7A026").s().p("AjJCzIAAllIGSFlg");
	this.shape_297.setTransform(470.85,350.85);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#F6BD2C").s().p("AhkCyIAAljIDJAAIAAFjg");
	this.shape_298.setTransform(460.7,350.9);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#F6BD2C").s().p("AhkCyIAAljIDJAAIAAFjg");
	this.shape_299.setTransform(480.9,350.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#F3F3F3").s().p("AA2BxIAAg3QAAg6gpgoQgogpg5AAIAAgfQBGAAAxAyQAyAyAABGIAAA3g");
	this.shape_300.setTransform(479.325,321.775);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#ABB7AF").s().p("AhUBxIAAg3QAAhGAxgyQAxgyBIAAIAAAfQg7AAgnApQgpAogBA6IAAA3g");
	this.shape_301.setTransform(462.25,321.775);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#08536F").s().p("AjJEjIAAlkIACAAIAAgBIABABIAcAAIAAg3QAAhGAzgyQAxgyBGAAQBHAAAyAyQAyAyAABGIAAA3IAfAAIAAFkgAhijaQgoApAAA5IAAA3IEWAAIAAg3QAAg6gpgoQgpgpg6AAQg5AAgpApg");
	this.shape_302.setTransform(467.9,341.825);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#25282B").s().p("AgeBKIAAhDQgQgNAAgUQAAgXARgNQANgLAQAAIAKABQANADAKAKQAKAKACAOQAFAagTAQIAABDg");
	this.shape_303.setTransform(469.151,207.375);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#D7A026").s().p("AjJCzIAAllIGTFlg");
	this.shape_304.setTransform(469.2,206.15);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#F6BD2C").s().p("AhkCyIAAljIDJAAIAAFjg");
	this.shape_305.setTransform(459.05,206.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#F6BD2C").s().p("AhkCyIAAljIDJAAIAAFjg");
	this.shape_306.setTransform(479.25,206.2);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#F3F3F3").s().p("AA2BxIAAg3QAAg5gpgpQgngpg7AAIAAgfQBHAAAyAyQAyAygBBGIAAA3g");
	this.shape_307.setTransform(477.7,177.075);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#ABB7AF").s().p("AhVBxIAAg3QAAhGAygyQAygyBGAAIAAAfQg5AAgpApQgpApABA5IAAA3g");
	this.shape_308.setTransform(460.6,177.075);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#08536F").s().p("AjJEjIAAlkIABAAIAAgBIABABIAdAAIAAg3QAAhGAygyQAygyBGAAQBGAAAzAyQAxAyAABGIAAA3IAgAAIAAFkgAhijaQgpAoAAA6IAAA3IEXAAIAAg3QgBg5gpgpQgogpg6AAQg5AAgpApg");
	this.shape_309.setTransform(466.3,197.125);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#25282B").s().p("AgeBKIAAhDQgQgNAAgUQAAgXASgNQANgLAPAAIAKABQAOADAKAKQAKAKACAOQAFAagUAQIAABDg");
	this.shape_310.setTransform(290.726,207.375);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#D7A026").s().p("AjICzIAAllIGSFlg");
	this.shape_311.setTransform(290.8,206.15);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#F6BD2C").s().p("AhkCyIAAljIDJAAIAAFjg");
	this.shape_312.setTransform(280.65,206.2);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#F6BD2C").s().p("AhkCyIAAljIDJAAIAAFjg");
	this.shape_313.setTransform(300.85,206.2);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#F3F3F3").s().p("AA2BxIAAg3QAAg6gpgoQgogpg5AAIAAgfQBGAAAxAyQAyAyAABGIAAA3g");
	this.shape_314.setTransform(299.275,177.075);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#ABB7AF").s().p("AhVBxIAAg3QAAhGAzgyQAwgyBHAAIAAAfQg6AAgoApQgoAoAAA6IAAA3g");
	this.shape_315.setTransform(282.2,177.075);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#08536F").s().p("AjJEjIAAlkIABAAIAAgBIABABIAeAAIAAg3QgBhGAygyQAzgyBFAAQBHAAAyAyQAyAyAABGIAAA3IAfAAIAAFkgAhhjaQgpApgBA5IAAA3IEXAAIAAg3QAAg6gpgoQgpgpg6AAQg4AAgpApg");
	this.shape_316.setTransform(287.85,197.125);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#4A4F55").s().p("AgSAZIAAgHIAXghIgWAAIAAgJIAjAAIAAAHIgXAiIAYAAIAAAIg");
	this.shape_317.setTransform(567.575,355.7);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#4A4F55").s().p("AgIAEIAAgHIARAAIAAAHg");
	this.shape_318.setTransform(564.425,356.325);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#4A4F55").s().p("AANAZIgEgMIgRAAIgEAMIgLAAIARgxIAMAAIASAxgAAGAEIgGgUIgGAUIAMAAg");
	this.shape_319.setTransform(560.925,355.7);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#1BA8DF").s().p("AoAFBQgNADgOgDQgbgGAAgdIAAgvIRto3IglJpIgDATQgMAUgnABIgwAAQivAAr9gIg");
	this.shape_320.setTransform(634.575,332.4674);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#9BDBF2").s().p("AoAGFQgHAAgGgCQgKgEgHgIQgHgJAAgKIgjrGQgBgPALgMQAKgLAQAAIGiACQARAAA4AfQBMAsAMAGIAPAGQALAEAGAAIHmABQANAAALAJQANAMgBARIgjJsQAAALgHAIQgHAIgLAEQgFACgHAAg");
	this.shape_321.setTransform(632.7564,325.675);

	this.instance_15 = new lib.Path_1_2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(632.8,324.9,1,1,0,0,0,52.6,40);
	this.instance_15.alpha = 0.1484;

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AnpDkIAAmGIEwACIAihDIDHAAIAdBDIGdgCIAAGGg");
	this.shape_322.setTransform(633.1,301.025);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#9BDBF2").s().p("AnrG+QgOAAgLgKQgKgKAAgOIADs7QAAgOAKgKQAKgKAPAAIF2ABQARABBGAoQBGApARAAIGwACQAPAAAKAKQAKAKAAAOIgCLpQgBAPgKAKQgKAKgOAAg");
	this.shape_323.setTransform(632.9,317.275);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#4A4F55").s().p("AgSAZIAAgHIAXghIgWAAIAAgJIAjAAIAAAHIgXAiIAYAAIAAAIg");
	this.shape_324.setTransform(380.575,355.7);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#4A4F55").s().p("AgIAEIAAgHIARAAIAAAHg");
	this.shape_325.setTransform(377.425,356.325);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#4A4F55").s().p("AANAZIgEgMIgRAAIgEAMIgLAAIARgxIAMAAIASAxgAAGAEIgGgUIgGAUIAMAAg");
	this.shape_326.setTransform(373.925,355.7);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#3CB9E4").s().p("AoAFBQgOADgNgDQgbgGAAgdIAAgvIRto3IglJpIgEATQgLAUgnABIgwAAQiwAAr8gIg");
	this.shape_327.setTransform(467.3245,332.4674);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#1BA8DF").s().p("AoAGFQgHAAgGgCQgKgEgHgIQgHgIgBgLIgirGQgBgQALgLQAKgLAQAAIGiACQARAAA4AfQBMAsAMAGIAOAGQALAEAHAAIHmABQANAAALAJQANALgBASIgjJsQAAAKgIAJQgGAIgLAEQgFACgHAAg");
	this.shape_328.setTransform(465.5024,325.675);

	this.instance_16 = new lib.Path_1_1_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(465.55,324.9,1,1,0,0,0,52.6,40);
	this.instance_16.alpha = 0.1484;

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#9BDBF2").s().p("AnpDiIAAmFIARAAIApg+IC4AAIAmA+IK7gCIAAGHg");
	this.shape_329.setTransform(465.85,299.15);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#1BA8DF").s().p("AnrG+QgOAAgLgKQgKgKAAgOIADs7QAAgOAKgKQAKgKAPAAIF2ABQARABBHAoQBFApARAAIGxACQAOAAAKAKQAKAKAAAOIgDLpQAAAPgKAKQgKAKgOAAg");
	this.shape_330.setTransform(465.625,317.275);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#4A4F55").s().p("AgQAWIAAgGIAVgeIgUAAIAAgHIAfAAIAAAGIgUAdIAVAAIAAAIg");
	this.shape_331.setTransform(291.65,281.675);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#4A4F55").s().p("AgHAEIAAgHIAPAAIAAAHg");
	this.shape_332.setTransform(288.85,282.225);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#4A4F55").s().p("AALAWIgDgKIgPAAIgDAKIgKAAIAPgsIALAAIAPAsgAAGAEIgGgTIgFATIALAAg");
	this.shape_333.setTransform(285.7,281.65);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#08536F").s().p("AoAFBQgOADgNgDQgbgGAAgdIAAgvIRto3IglJpIgDATQgMAUgnABIgwAAQivAAr9gIg");
	this.shape_334.setTransform(295.575,332.4674);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#127EA6").s().p("AoAGFQgHAAgGgCQgKgEgHgIQgHgJAAgKIgjrGQgBgPALgMQAKgLAQAAIGiACQARAAA4AfQBMAsAMAGIAPAGQAKAEAHAAIHmABQANAAALAJQANALgBASIgjJsQAAALgHAIQgHAIgLAEQgFACgHAAg");
	this.shape_335.setTransform(293.7524,325.675);

	this.instance_17 = new lib.Path_1_0_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(293.8,324.9,1,1,0,0,0,52.6,40);
	this.instance_17.alpha = 0.1484;

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AnpDkIAAmGIEwACIAihDIDHAAIAdBDIGdgCIAAGGg");
	this.shape_336.setTransform(294.1,301.025);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#D4116E").s().p("AnpDiIAAmHIJ0ADIAqg/IC4AAIAmA/IBXgDIAAGHg");
	this.shape_337.setTransform(294.1,300);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#9BDBF2").s().p("AnpDiIAAmFIAQAAIAqg+IC4AAIAmA+IK7gCIAAGHg");
	this.shape_338.setTransform(294.1,299.15);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#127EA6").s().p("AnsG+QgNAAgLgKQgKgKAAgOIADs7QAAgOAKgKQAKgKAOAAIF3ABQARABBHAoQBFApARAAIGwACQAPAAAKAKQAKAKAAAOIgDLpQAAAPgKAKQgKAKgPAAg");
	this.shape_339.setTransform(293.9,317.275);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#1BA8DF").s().p("AntE9QgNACgNgDQgagGAAgcIAAguIRDowIgjJhIgDATQgMATglABIguABQipAArhgIg");
	this.shape_340.setTransform(626.5,188.5174);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#127EA6").s().p("AnuGAQgGAAgGgCQgKgEgGgIQgHgJAAgKIgiq8QAAgQAKgLQAKgLAPABIGSABQARAAA2AfQBJArAMAGIAOAGQAJADAIAAIHUACQANAAAKAJQAMALgBARIghJkQgBAKgGAJQgHAIgKADQgGACgGAAg");
	this.shape_341.setTransform(624.7525,181.8239);

	this.instance_18 = new lib.Path_2_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(624.9,181.1,1,1,0,0,0,50.8,39.5);
	this.instance_18.alpha = 0.1484;

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#E6E6E6").s().p("AnXDfIAAl/IAQAAIAog+ICxAAIAkA+IKigCIAAGBg");
	this.shape_342.setTransform(625.075,157.575);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#127EA6").s().p("AHYG7IuxgDQgPAAgJgKQgKgKAAgOIADsvQAAgOAKgKQAKgKANAAIFpABQAQABBFAoQBCAoARAAIGgACQAOAAAKAKQAKAKAAAOIgDLfQAAAOgKAKQgJAKgNAAIgBgBg");
	this.shape_343.setTransform(624.9,173.5012);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#3CB9E4").s().p("AntE9QgNADgNgDQgagHAAgcIAAguIRDowIgjJiIgEASQgLATglABIgxABQitAAragIg");
	this.shape_344.setTransform(469.0745,186.7182);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#6ACAEA").s().p("AntGAQgIAAgEgDQgKgDgHgIQgGgJgBgKIgiq8QAAgQAKgLQAKgLAPAAIGTACQAQAAA2AfQBKArALAFIAOAHQALADAGAAIHUACQANAAAKAIQANANgCAQIghJjQAAALgHAJQgHAIgKAEIgMABg");
	this.shape_345.setTransform(467.3066,180.05);

	this.instance_19 = new lib.Path_1_3();
	this.instance_19.parent = this;
	this.instance_19.setTransform(467.4,179.3,1,1,0,0,0,50.7,39.5);
	this.instance_19.alpha = 0.1484;

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#E6E6E6").s().p("AnXDfIAAl/IAQAAIAog+ICxAAIAkA+IKigCIAAGBg");
	this.shape_346.setTransform(467.65,155.775);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#6ACAEA").s().p("AnaG4QgNAAgJgKQgKgKAAgOIADsvQgBgOAKgKQAKgKAOAAIFpACQAQAABEAoQBDAoAQAAIGhACQANAAAKAKQAKAKgBAOIgCLfQAAAOgKAKQgKAKgNAAg");
	this.shape_347.setTransform(467.45,171.725);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#127EA6").s().p("AntE9QgNADgNgDQgagHAAgcIAAguIRDowIgjJiIgEASQgLATglABIgxABQitAAragIg");
	this.shape_348.setTransform(291.95,186.7182);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#1BA8DF").s().p("AntGAQgIAAgEgDQgKgDgHgIQgHgJAAgKIgiq8QAAgQAKgLQAKgLAPAAIGTACQAQAAA2AfQBKArALAFIAOAHQALADAGAAIHUACQANAAAKAIQAMAMgBARIghJjQgBALgGAJQgHAIgKAEQgHABgFAAg");
	this.shape_349.setTransform(290.2025,180.05);

	this.instance_20 = new lib.Path_0();
	this.instance_20.parent = this;
	this.instance_20.setTransform(290.3,179.3,1,1,0,0,0,50.7,39.5);
	this.instance_20.alpha = 0.1484;

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#E6E6E6").s().p("AnXDfIAAl/IAQAAIAog+ICxAAIAkA+IKigCIAAGBg");
	this.shape_350.setTransform(290.55,155.775);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#127EA6").s().p("AnZG4QgOAAgKgKQgJgKAAgOIACsvQAAgOAKgKQAJgKAPAAIFoACQAQAABEAoQBDAoARAAIGgACQAOAAAKAKQAKAKAAAOIgDLfQAAAOgKAKQgJAKgOAAg");
	this.shape_351.setTransform(290.35,171.725);

	this.instance_21 = new lib.Path();
	this.instance_21.parent = this;
	this.instance_21.setTransform(467.65,241.05,1,1,0,0,0,282.1,169.6);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#F3F3F3").s().p("AilALIAAgVIFKAAIAAAVg");
	this.shape_352.setTransform(668.2,101.575);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#F3F3F3").s().p("AgrALIAAgVIBXAAIAAAVg");
	this.shape_353.setTransform(709.825,101.575);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#F3F3F3").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAHgGAHAAQAIAAAHAGQAGAGAAAIQAAAJgGAGQgHAGgIAAQgHAAgHgGg");
	this.shape_354.setTransform(691.25,101.575);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#F3F3F3").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_355.setTransform(698.925,101.575);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#F3F3F3").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_356.setTransform(218.075,101.575);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#ABB7AF").s().p("Egn9AAiIAAhDMBP7AAAIAABDg");
	this.shape_357.setTransform(465.075,101.625);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQARAAALAMQAMALAAAQQAAAQgMAMQgLAMgRAAQgPAAgMgMg");
	this.shape_358.setTransform(464.5,84.225);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#08536F").s().p("Egn9AWCMAAAgsDMBP7AAAMAAAAsDg");
	this.shape_359.setTransform(465.075,246);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#25282B").s().p("EgsEAa6MAAAgzsQAAg4AtgnQArgoA/AAMBTYAAAQA/AAAuApQAtAoAAA5MAAAAzpg");
	this.shape_360.setTransform(464.5,241.975);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#25282B").s().p("AhIBJQgfgeABgrQgBgqAfgeQAegeAqAAQArAAAeAeQAeAeABAqQgBArgeAeQgeAegrAAQgqAAgegeg");
	this.shape_361.setTransform(464.5,438.125);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#F3F3F3").s().p("Aw0AqQghAAgZgMQgXgMAAgRIAAgBQAAgRAXgLQAZgNAhAAMAhpAAAQAiAAAXANQAYALAAARIAAABQAAARgYAMQgXAMgiAAg");
	this.shape_362.setTransform(464.5,514.3);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#F3F3F3").s().p("EgpgADwQhDAAgxgrQgwgsAAg8IAAlMMBYJAAAIAAFNQAAA9gwArQgvAqhEAAg");
	this.shape_363.setTransform(464.5,438.15);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#ABB7AF").s().p("AuVDwIAAnfIcrAAIAAHfg");
	this.shape_364.setTransform(464.5,486.15);

	this.instance_22 = new lib.ClipGroup();
	this.instance_22.parent = this;
	this.instance_22.setTransform(473.5,399,1,1,0,0,0,459.8,384.9);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#9BDBF2").s().p("EgXTA3OQqxkjoToTQoSoTkkqwQktrJAAsMQAAsMEtrIQEkqwISoTQIToTKxkjQLIktMLAAQMMAALJEtQKwEjITITQITITEiKwQEuLIAAMMQAAMMkuLJQkiKwoTITQoTITqwEjQrJEtsMAAQsLAArIktg");
	this.shape_365.setTransform(400,399.725);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("AkrgCIAng7IIwBAIgnA7g");
	this.shape_366.setTransform(390.025,641.975);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#F3F3F3").s().p("AhzB9ICpkBIA+AHIioECg");
	this.shape_367.setTransform(537.625,540.85);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#2C2F30").s().p("AASA/Ig0h/IATACIAyB/g");
	this.shape_368.setTransform(321.275,666.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#1BA8DF").s().p("ABBkEIDUAZIjYFSIlRCeg");
	this.shape_369.setTransform(538.15,547.125);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#1BA8DF").s().p("AxXLuIQv5iISACHIwvZig");
	this.shape_370.setTransform(428.975,585.25);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#127EA6").s().p("AxTLkIgIgVIRA45IRuBfIAJAUIwwZig");
	this.shape_371.setTransform(429.4,588.3);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#8A9396").s().p("Aw3LxIQk5iIRLCBIwjZig");
	this.shape_372.setTransform(430.575,587.95);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("AoUMnIQi5hIAHATIwiZig");
	this.shape_373.setTransform(485.95,595.4);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#9BA5A8").s().p("Aoig2IgHgTIRMB/IAHAUg");
	this.shape_374.setTransform(377.975,670.7);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#8A9396").s().p("Aw3LxIQj5iIRMCAIwkZjg");
	this.shape_375.setTransform(431.425,590.2);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("AoUMoIQi5jIAHAUIwiZjg");
	this.shape_376.setTransform(486.775,597.6);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#9BA5A8").s().p("Aoig1IgHgUIRMCAIAGATg");
	this.shape_377.setTransform(378.8,672.925);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#8A9396").s().p("Aw3LyIQk5jIRLCBIwjZig");
	this.shape_378.setTransform(432.225,592.4);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("AoUMoIQi5jIAHAUIwiZjg");
	this.shape_379.setTransform(487.625,599.85);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#9BA5A8").s().p("Aoig2IgHgTIRMB/IAHAUg");
	this.shape_380.setTransform(379.625,675.175);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#414647").s().p("AgrgqIBXAJIg0BNg");
	this.shape_381.setTransform(324.825,666.8);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#1BA8DF").s().p("AxXLtIQv5gISACHIwvZgg");
	this.shape_382.setTransform(433.4,596);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#127EA6").s().p("AxSLjIgJgUIRA44IRvBeIAIAUIwvZhg");
	this.shape_383.setTransform(433.8,599.075);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#127EA6").s().p("AjFCJIHYmIIAFAQIjVFOIlaChg");
	this.shape_384.setTransform(538.425,549.175);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFFFFF").s().p("AkhhNIA1gwIIODLIg1Avg");
	this.shape_385.setTransform(487.825,644.15);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFFFFF").s().p("AiPBdIDkjPIA7AWIjkDQg");
	this.shape_386.setTransform(656,583);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#2C2F30").s().p("AACBCIgSiJIARAHIARCIg");
	this.shape_387.setTransform(415.05,650.925);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#4F5557").s().p("ACCjRIDJBNIkmESIlvBEg");
	this.shape_388.setTransform(654.625,586.55);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#4F5557").s().p("AzvHBIWk0jIQ7GiI2kUjg");
	this.shape_389.setTransform(539.675,598.875);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#2C2F30").s().p("AztG2IgDgWIWqz3IQ0F2IADAWI2kUjg");
	this.shape_390.setTransform(539.825,602.175);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#8A9396").s().p("AzQHMIWY0mIQJGPI2YUmg");
	this.shape_391.setTransform(540.575,601.925);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFFFFF").s().p("ArNKJIWZ0mIACAVI2ZUmg");
	this.shape_392.setTransform(592.325,622.925);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#9BA5A8").s().p("AoDi8IgBgVIQHGOIADAVg");
	this.shape_393.setTransform(469,668.95);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#8A9396").s().p("AzQHMIWY0mIQKGPI2ZUmg");
	this.shape_394.setTransform(540.8,604.275);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFFFFF").s().p("ArNKJIWZ0mIACAVI2ZUmg");
	this.shape_395.setTransform(592.575,625.275);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#9BA5A8").s().p("AoDi8IgCgVIQJGOIACAVg");
	this.shape_396.setTransform(469.225,671.3);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#8A9396").s().p("AzQHMIWZ0mIQJGPI2ZUmg");
	this.shape_397.setTransform(541.05,606.675);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFFFFF").s().p("ArNKJIWZ0mIACAVI2ZUmg");
	this.shape_398.setTransform(592.825,627.675);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#9BA5A8").s().p("AoDi8IgCgVIQJGOIACAVg");
	this.shape_399.setTransform(469.475,673.7);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#414647").s().p("AgogtIBRAfIhFA8g");
	this.shape_400.setTransform(419.45,651.275);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#4F5557").s().p("AzvHBIWk0jIQ7GiI2kUjg");
	this.shape_401.setTransform(541.3,610.425);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#2C2F30").s().p("AztG2IgDgWIWqz3IQ0F2IADAXI2kUig");
	this.shape_402.setTransform(541.45,613.7);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#2C2F30").s().p("AjfBUIIrkGIABARIkiEOIl3BGg");
	this.shape_403.setTransform(654.475,591.175);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FFFFFF").s().p("AkFiQIA+ghIHNFCIg+Ahg");
	this.shape_404.setTransform(585.55,600.475);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FFFFFF").s().p("AihA4IEPiTIA0AkIkPCTg");
	this.shape_405.setTransform(763.425,581.2);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#2C2F30").s().p("AgOBAIAOiJIAPALIgPCIg");
	this.shape_406.setTransform(513.325,589.725);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#08536F").s().p("AlpCKIIjkpICwB7IlfDEg");
	this.shape_407.setTransform(760.35,582.975);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#08536F").s().p("A01CGIa0ukIO3KYI60Olg");
	this.shape_408.setTransform(646.7,568.9);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#25282B").s().p("A02B8IACgWIavt5IO8JtIgCAVI60Olg");
	this.shape_409.setTransform(646.575,572.175);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#8A9396").s().p("A0bCZIaqurIONJ6I6qOrg");
	this.shape_410.setTransform(646.825,572.075);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FFFFFF").s().p("AtTHMIaqurIgDAVI6qOqg");
	this.shape_411.setTransform(692.1,604.775);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#9BA5A8").s().p("AnHkxIADgVIOMJ5IgDAUg");
	this.shape_412.setTransform(561.325,620.075);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#8A9396").s().p("A0bCZIaqurIONJ6I6qOrg");
	this.shape_413.setTransform(646.5,574.425);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FFFFFF").s().p("AtTHMIaqurIgDAVI6qOqg");
	this.shape_414.setTransform(691.775,607.125);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#9BA5A8").s().p("AnHkxIADgVIOMJ5IgDAUg");
	this.shape_415.setTransform(561.025,622.425);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#8A9396").s().p("A0bCZIaqurIONJ6I6qOrg");
	this.shape_416.setTransform(646.175,576.775);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FFFFFF").s().p("AtTHLIaquqIgDAUI6qOrg");
	this.shape_417.setTransform(691.45,609.525);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#9BA5A8").s().p("AnHkyIADgUIOMJ4IgDAWg");
	this.shape_418.setTransform(560.675,624.8);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#414647").s().p("AgegtIBHAwIhRAsg");
	this.shape_419.setTransform(517.625,590.3);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#08536F").s().p("A01CHIazulIO4KYI60Olg");
	this.shape_420.setTransform(645.525,580.475);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#25282B").s().p("A02B8IACgWIavt5IO8JsIgCAWI60Olg");
	this.shape_421.setTransform(645.4,583.775);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#25282B").s().p("AltBTICBhBIJah7IgDARIlaDCg");
	this.shape_422.setTransform(759.95,589.85);

	this.instance_23 = new lib.CompoundPath();
	this.instance_23.parent = this;
	this.instance_23.setTransform(559.1,604.15,1,1,0,0,0,239.3,105.1);
	this.instance_23.alpha = 0.2383;

	this.instance_24 = new lib.ClipGroup_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(446.2,295.95,1,1,0,0,0,434.9,607.2);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFFFFF").s().p("EgXtA4KQq8koococQocockoq8QkyrUAAsaQAAsYEyrVQEoq8IcobQIcocK8kpQLUkyMZAAQMZAALVEyQK8EpIcIcQIcIbEnK8QEzLVAAMYQAAMakzLUQknK8ocIcQocIcq8EoQrVEysZAAQsZAArUkygEgXjg3wQq3EloYIZQoZIZkmK2QkwLQAAMTQAAMUEwLQQEmK3IZIZQIYIXK3EnQLREwMSAAQMUAALQkwQK2kmIZoYQIYoYEmq4QExrQAAsUQAAsTkxrQQklq3oZoYQoZoaq2kkQrQkxsUAAQsSAArRExg");
	this.shape_423.setTransform(396.2,400.75);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#9BDBF2").s().p("EgXtA4KQq8koococQocockoq8QkyrUAAsaQAAsYEyrVQEoq8IcobQIcocK8kpQLUkyMZAAQMZAALVEyQK8EpIcIcQIcIbEnK8QEzLVAAMYQAAMakzLUQknK8ocIcQocIcq8EoQrVEysZAAQsZAArUkyg");
	this.shape_424.setTransform(396.2,400.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.instance_14},{t:this.instance_13},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.instance_12},{t:this.instance_11},{t:this.shape_267},{t:this.shape_266},{t:this.instance_10},{t:this.instance_9},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.instance_8},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.instance_7},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.instance_6},{t:this.shape_40},{t:this.instance_5},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_4},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.instance_3},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.instance_2},{t:this.instance_1},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_365},{t:this.instance_22},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.instance_21},{t:this.shape_351},{t:this.shape_350},{t:this.instance_20},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.instance_19},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.instance_18},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.instance_17},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.instance_16},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.instance_15},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_424},{t:this.shape_423},{t:this.instance_24},{t:this.instance_23},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366}]},1).wait(1));

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
		if(this.hide_button.parent == undefined || this.hide_button.parent == this)
		this.hide_button = this.hide_button.hide_button;
		this.folder_button = this.buttons.folder_button;
		this.computer_button = this.buttons.computer_button;
		this.Item_text = this.text.Item_text;
		this.stop();
		
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
		}*/
			
		
		
		
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
			Hide_folders_function.call(this);*/
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
			Hide_files_function.call(this);	*/
		}
	}
	this.frame_1 = function() {
		this.folder_button = undefined;this.computer_button = undefined;this.file1_button = this.buttons.file1_button;
		this.file2_button = this.buttons.file2_button;
		this.file3_button = this.buttons.file3_button;
		this.file4_button = this.buttons.file4_button;
		this.file5_button = this.buttons.file5_button;
		this.file6_button = this.buttons.file6_button;
		this.file1_button.addEventListener("click", File_1_function.bind(this));
		
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
	}
	this.frame_2 = function() {
		this.file1_button = undefined;this.file2_button = undefined;this.file3_button = undefined;this.file4_button = undefined;this.file5_button = undefined;this.file6_button = undefined;this.folder2_button = this.buttons.folder2_button;
		this.folder4_button = this.buttons.folder4_button;
		this.folder5_button = this.buttons.folder5_button;
		this.folder6_button = this.buttons.folder6_button;
		this.folder1_button = this.buttons.folder1_button;
		this.folder3_button = this.buttons.folder3_button;
		this.___loopingOver___ = true;
		this.folder1_button.addEventListener("click", Folder_1_function.bind(this));
		
		function Folder_1_function() {
			//this.Item_text.visible = true;
			//this.gotoAndStop(2);
			this.Item_text.text = "\nConfidential files should not be taken from their office base without permission.";
			
		}
		
		
		this.folder2_button.addEventListener("click", Folder_2_function.bind(this));
		
		function Folder_2_function() {
			//this.Item_text.visible = true;
			//this.gotoAndStop(2);
			this.Item_text.text = "\nThe confidential files are stored in designated cabinets. The cabinets are always locked. For each cabinet there will be an authorised keyholder (or keyholders).";
		}
		
		this.folder3_button.addEventListener("click", Folder_3_function.bind(this));
		
		function Folder_3_function() {
			//this.Item_text.visible = true;
			//this.gotoAndStop(2);
			this.Item_text.text = "\nThe files may only be accessed with the consent of the authorised keyholder. This consent may be withheld.";
		}
		
		this.folder4_button.addEventListener("click", Folder_4_function.bind(this));
		
		function Folder_4_function() {
			//this.Item_text.visible = true;
			//this.gotoAndStop(2);
			this.Item_text.text = "\nConfidential files should be kept up to date by an authorised senior administrator.";
		}
		
		this.folder5_button.addEventListener("click", Folder_5_function.bind(this));
		
		function Folder_5_function() {
			//this.Item_text.visible = true;
			//this.gotoAndStop(2);
			this.Item_text.text = "\nConfidential files that have passed their retention date or that are no longer required should be deleted / destroyed by cross shredding.";
		}
		
		this.folder6_button.addEventListener("click", Folder_6_function.bind(this));
		
		function Folder_6_function() {
			//this.Item_text.visible = true;
			//this.gotoAndStop(2);
			this.Item_text.text = "\nConfidential paper-based information must be stored in designated folders. These will be marked clearly with the word CONFIDENTIAL.";
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// hide_button_obj_
	this.hide_button = new lib.Scene_1_hide_button();
	this.hide_button.name = "hide_button";
	this.hide_button.parent = this;
	this.hide_button.setTransform(758.9,770.6,1,1,0,0,0,758.9,770.6);
	this.hide_button.depth = 0;
	this.hide_button.isAttachedToCamera = 0
	this.hide_button.isAttachedToMask = 0
	this.hide_button.layerDepth = 0
	this.hide_button.layerIndex = 0
	this.hide_button.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.hide_button).wait(3));

	// buttons_obj_
	this.buttons = new lib.Scene_1_buttons();
	this.buttons.name = "buttons";
	this.buttons.parent = this;
	this.buttons.setTransform(477.9,490.2,1,1,0,0,0,477.9,490.2);
	this.buttons.depth = 0;
	this.buttons.isAttachedToCamera = 0
	this.buttons.isAttachedToMask = 0
	this.buttons.layerDepth = 0
	this.buttons.layerIndex = 1
	this.buttons.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.buttons).wait(3));

	// text_obj_
	this.text = new lib.Scene_1_text();
	this.text.name = "text";
	this.text.parent = this;
	this.text.setTransform(197.4,654.2,1,1,0,0,0,197.4,654.2);
	this.text.depth = 0;
	this.text.isAttachedToCamera = 0
	this.text.isAttachedToMask = 0
	this.text.layerDepth = 0
	this.text.layerIndex = 2
	this.text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text).wait(3));

	// folder_obj_
	this.folder = new lib.Scene_1_folder();
	this.folder.name = "folder";
	this.folder.parent = this;
	this.folder.setTransform(204.4,653.8,1,1,0,0,0,204.4,653.8);
	this.folder.depth = 0;
	this.folder.isAttachedToCamera = 0
	this.folder.isAttachedToMask = 0
	this.folder.layerDepth = 0
	this.folder.layerIndex = 3
	this.folder.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.folder).wait(3));

	// padlock_obj_
	this.padlock = new lib.Scene_1_padlock();
	this.padlock.name = "padlock";
	this.padlock.parent = this;
	this.padlock.setTransform(765.5,755.5,1,1,0,0,0,765.5,755.5);
	this.padlock.depth = 0;
	this.padlock.isAttachedToCamera = 0
	this.padlock.isAttachedToMask = 0
	this.padlock.layerDepth = 0
	this.padlock.layerIndex = 4
	this.padlock.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.padlock).wait(3));

	// images_obj_
	this.images = new lib.Scene_1_images();
	this.images.name = "images";
	this.images.parent = this;
	this.images.setTransform(404.4,400.1,1,1,0,0,0,404.4,400.1);
	this.images.depth = 0;
	this.images.isAttachedToCamera = 0
	this.images.isAttachedToMask = 0
	this.images.layerDepth = 0
	this.images.layerIndex = 5
	this.images.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.images).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(402.6,206.3,530.6999999999999,603.9000000000001);
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