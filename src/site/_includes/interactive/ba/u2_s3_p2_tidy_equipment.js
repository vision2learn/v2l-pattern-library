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
	this.Item_text = new cjs.Text("text", "16px 'Open Sans'");
	this.Item_text.name = "Item_text";
	this.Item_text.textAlign = "center";
	this.Item_text.lineHeight = 24;
	this.Item_text.lineWidth = 204;
	this.Item_text.parent = this;
	this.Item_text.setTransform(408.1027,296.6902,0.9984,0.9984,-0.0044);

	this.timeline.addTween(cjs.Tween.get(this.Item_text).wait(1).to({x:156.0708,y:263.5343,lineWidth:163},0).wait(1).to({x:654.768,y:471.7439,lineWidth:179},0).wait(1).to({x:648.7796,y:520.9262,lineWidth:189},0).wait(1).to({x:628.951,y:175.6473,lineWidth:172},0).wait(1).to({x:639.5333,y:267.8947,lineWidth:195},0).wait(1).to({x:644.9773,y:255.9444,lineWidth:204},0).wait(1).to({x:160.7382,y:194.0026,lineWidth:160},0).wait(1).to({x:568.5373,y:521.0177,lineWidth:201},0).wait(1).to({x:197.4423,y:533.0165,lineWidth:175},0).wait(1).to({x:164.4892,y:512.9615,lineWidth:160},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_background_opaque = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// background_opaque
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C7C7C7").ss(1,1,1).p("Eg/Zg/ZMB+zAAAMAAAB+zMh+zAAAg");
	this.shape.setTransform(404.825,404.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(48,48,48,0.898)").s().p("Eg/ZA/aMAAAh+zMB+zAAAMAAAB+zg");
	this.shape_1.setTransform(404.825,404.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(10));

}).prototype = p = new cjs.MovieClip();


(lib.button_close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("AA6hTIhzCn");
	this.shape.setTransform(0.5,0.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("Ag6hSIB1Cl");
	this.shape_1.setTransform(0.875,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#01A7E1").ss(5,1,1).p("AC0AAQAABLg1A0Qg0A1hLAAQhKAAg1g1Qg0g0AAhLQAAhKA0g1QA1g0BKAAQBLAAA0A0QA1A1AABKg");
	this.shape_2.setTransform(0,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#01A7E1").s().p("Ah/B/Qg0g0AAhLQAAhJA0g2QA1g0BKAAQBLAAA0A0QA1A2AABJQAABLg1A0Qg0A1hLAAQhKAAg1g1g");
	this.shape_3.setTransform(0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-21.3,41,41);


(lib.Button_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,219,243,0.027)").s().p("ApDDXQjwhZAAh+QAAh9DwhaQDxhZFSAAQFTAADxBZQDwBaAAB9QAAB+jwBZQjxBalTAAQlSAAjxhag");
	this.shape.setTransform(0,-3.8,0.5603,1.0782);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,-36.7,91.9,65.80000000000001);


(lib.Path_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3F3F3").s().p("AqaBxIAJjsIUsALIgJDsg");
	this.shape.setTransform(66.675,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_Layer_1, null, null);


(lib.Path_2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1BA8DF").s().p("AxLWdMABogtMMAgvAteg");
	this.shape.setTransform(109.975,145.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_Layer_1, null, null);


(lib.Path_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A4F55").s().p("AqXAWIACg2IUsALIgCA2g");
	this.shape.setTransform(66.35,3.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_Layer_1, null, null);


(lib.Compound_Path_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#08536F").s().p("AQRcKMgiTgASQg4gBgmgkQgngkACgzMABpgt0QACgyApgkQApgjA4AAIGyAEIABgjQACgpAhgdQAhgdAuAAIE2ADIADhDQADhZBJg/QBIg/BiABQBjABBEBAQBEBAgDBZIgDBDIE7ADQAuAAAfAdQAfAdgBAqIgBAjIG1ADQA4ABAmAkQAnAkgCAzMgBpAt0QgCAygpAkQgpAjg3AAIgBAAgAAG5rQgZAWgBAgQgCAbAVAWQAYAaAnAAQAaABAWgNQAWgMALgVQAGgNABgQQABgfgWgXQgZgXgkAAIgBAAQgjAAgaAWg");
	this.shape.setTransform(128.575,180.2252);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Compound_Path_Layer_1, null, null);


(lib.Compound_Path_0_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A4F55").s().p("AgDB+QgcgBgagKQgbgMgSgTQgjgkACgxQACg0AogkQApgkA2AAIACAAQAcABAaAKQAaAMATATQAjAkgCAxQgCAzgoAlQgpAkg3AAgAg6g1QgaAXgBAeQgCAbAVAWQAZAaAnAAQAiABAbgWQAagWABggQABgbgUgWQgZgZgnAAIgBAAQgigBgaAWg");
	this.shape.setTransform(13.625,12.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Compound_Path_0_Layer_1, null, null);


(lib.Path_Layer_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9C4A1C").s().p("AhNAbQgkgbgMgjQAygRA3gHQBvgNAbAyQAMAVgGAaQgFAWgJADQgrAMgmAAQg+AAgsgjg");
	this.shape_1.setTransform(12.6114,6.205);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_Layer_1_1, null, null);


(lib.Path_4_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25282B").s().p("AApDzIiNjNIA3hLIhEiTIBrg6IB4Hlg");
	this.shape.setTransform(11.425,24.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_Layer_1, null, null);


(lib.Path_2_Layer_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E6E6").s().p("AgOABQAHhAAYgBQgJAFgIATQgRAlABBEQgBggADggg");
	this.shape_1.setTransform(1.7025,6.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_Layer_1_1, null, null);


(lib.Path_1_Layer_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#25282B").s().p("AhvDuIBunbIBxA6IhECTIAmBMIh7DCg");
	this.shape_1.setTransform(11.175,23.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_Layer_1_1, null, null);


(lib.Path_0_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25282B").s().p("AgYARQgSheAugcIAZAlQADAlgCAnQgEBRgYARQgRgqgJgvg");
	this.shape.setTransform(3.0408,10.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_Layer_1, null, null);


(lib.Clip_Group_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().p("AhxAsICqidIA5AQIirDTg");
	this.shape.setTransform(80.75,111.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E6E6").s().p("AhthhIAzgPICpCdIg/BEg");
	this.shape_1.setTransform(58.3,111.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3CB9E4").s().p("AhlCZIA+kyIg+hqIBcgIIBPATIg2BcIBWEsIhrB8g");
	this.shape_2.setTransform(70.275,143.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#846D50").s().p("AA0CsIgBgSQArg2ADg+QADg6ghg0Qghg1g8ggQgwgag4gIQBGAIA6AkQBPAxAdBXQATA5AEAzQACAeAAA2QgFgOgJgMQgLgPgIAAQgUAAgOAqQgDAKgDAAQgEAAgCgUg");
	this.shape_3.setTransform(87.2125,39.3134);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#846D50").s().p("AgQDEQgDAAgMgjQgOgqgUAAQgEAAgMAhQgLAdgKgLQgChSAihvQATg/AwguQAsgqA+gVQhdAkgdBlQgbBZAfBnQgBghACAtQADAygFAAIAAAAg");
	this.shape_4.setTransform(47.9194,41.4002);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhIARQgegXAAgiIDNAAQAAAigeAXQgeAYgrAAQgqAAgegYg");
	this.shape_5.setTransform(70.525,81.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#687278").s().p("AAxBAQgKAAgIgIQgIgHAAgLIAAg8IgtAAIAAA8QAAALgIAHQgIAIgLAAIiRAAQgLAAgIgIQgHgHgBgLIAAhMQABgKAHgHQAIgIALABICRAAQAKgBAHAHQAIAGABAJIAuAAQACgJAHgGQAIgHAJABICSAAQALgBAIAIQAHAHAAAKIAABMQAAALgHAHQgIAIgLAAgAAngwQgEAFAAAFIAABMQAAAGAEAEQAFAEAFAAICSAAQAGAAAFgEQADgEAAgGIAAhMQAAgFgDgFQgFgDgGAAIiSAAQgFAAgFADgAjMgwQgFAFABAFIAABMQgBAGAFAEQAEAEAGAAICRAAQAHAAAEgEQAEgEAAgGIAAhMQAAgFgEgFQgEgDgHAAIiRAAQgGAAgEADg");
	this.shape_6.setTransform(69.15,54.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FBD8A9").s().p("AiQEqQhziCgfh3IgDgBIgCgUQgDgUgBgOIAAgHQgJhgAThMQAdhwBZg/QBSg6BmADQB7ACBOBQQBJBMAMB4QAGAqgDAdQgDAqAAAQQgBgEgDAMQgDAKgBgFQgfCUhoCKQhgB+g1AAQgtAAhqh3g");
	this.shape_7.setTransform(69.3812,61.7926);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F2F2").s().p("AkVDDQiJgjhbhaIAAjBQABgUAdghQAegiATAAIDugJIA0BVIAEAIQAGALALAJQAlAcBMAAQBMAAAhgaQAMgJAFgKIACgIIAthZIEBAKQASAAAeAhQAdAfAAAUIAADEQhZBaiLAjQhqAbirgBQiqABhrgbg");
	this.shape_8.setTransform(69.55,124.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DFC098").s().p("AgbAoIh0iVIDpgQIA2BdIgfCeg");
	this.shape_9.setTransform(72.425,105.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FBD8A9").s().p("AiPBZQhKhZgLhjQAygSAVgQQAggXAKgoQAWgDAjALQAmALAUAAQAVAAAngOQAlgNAUADQAVBQBbAgQgMBhhJBWQhBBNhPAfQhNgfhChSg");
	this.shape_10.setTransform(69.65,113.4542);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_Layer_3, null, null);


(lib.Clip_Group_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1BA8DF").s().p("AkOKRQiGg4hlhmQhhhjg1iBQhxkPBxkPQA4iGBmhlQBjhhCAg1QCBg2CKgBQCOgBCGA4QCFA4BlBmQBiBjA1CAQA1CBABCKQACCOg4CGQhyEQkQBxQiAA2iLAAIgGABQiLAAiCg3g");
	this.shape.setTransform(71.0582,71.1511);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_Layer_1, null, null);


(lib.Clip_Group_9_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#795337").s().p("AhQEAQg3gXgngkQgUgPgKjVQgFhqgChoQATgrBhALQAxAGAtAOQCmglAjBFQAMAYgBAuIgCBMQABA7gSBrQgIA2gKAqIhCA2QgtAjg3AAQgoAAgwgUg");
	this.shape.setTransform(21.151,27.6047);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_9_Layer_3, null, null);


(lib.Clip_Group_8_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3CB9E4").s().p("AkGJ8QkHhshukIQhskHBskHQBtkHEHhtQEHhtEHBsQEHBuBuEHQBtEGhtEHQhsEHkIBtQiEA3iEAAQiDAAiDg2g");
	this.shape.setTransform(68.8,68.7813);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_8_Layer_1, null, null);


(lib.Clip_Group_7_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8BF9B").s().p("AhBEGQhDgjgigrQgjgrgFhFIABg9QADglAYgvQAyhbBvgiQBvgiAnggQASgPgCgKIAUBLQAWBOAJAMQAMAPgHB2QgIB4gTAhQgPAbgeAeQg+A7hMALQgagIgigTg");
	this.shape.setTransform(20.8442,29.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_7_Layer_3, null, null);


(lib.Clip_Group_6_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AhNgKICbAAQgQALgcAGQgQAEgQAAQgnAAgogVg");
	this.shape.setTransform(86.025,83.3546);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E39A6B").s().p("AABA1IgbgDIAahnIANAsQANAsABAKQABAJgWAAIgFgBg");
	this.shape_1.setTransform(86.0268,70.9048);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#25282B").s().p("AgMAeQgFgNAAgRQAAgRAFgMQAGgMAGAAQAHAAAGAMQAFAMAAARQAAARgFANQgGAMgHAAQgGAAgGgMg");
	this.shape_2.setTransform(96.95,63.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#25282B").s().p("AgMAeQgFgNAAgRQAAgQAFgNQAGgMAGAAQAIAAAFAMQAFANAAAQQAAASgFAMQgFAMgIAAQgGAAgGgMg");
	this.shape_3.setTransform(75.625,63.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4A4F55").s().p("AAzA4QgTgXgKgsQgCgMACgJQgIgEgOgBQgNABgHAEQACAJgDAMQgJAsgUAXQgcAeg3AAQg9ABgXgjQgRgXAAgqQAAgKADgJIgQgGIAAgjIAwAAQAYgNAqABQBLAAAZAcQASgKAPAAQARAAARAKQAZgcBLAAQApgBAZANIAxAAIAAAjIgRAGQADALAAAIQAAAqgQAXQgZAjg8gBQg3AAgcgegAAwgnIgHAKQgDAHACAIQAIApATASQAWAXAtAAQAxAAAUgZQAOgSAAgmQAAgSgLgKQgSgSg2AAQhGAAgQAUgAjOgpQgKAKAAASQAAAmAOASQAUAZAxAAQAtAAAXgXQASgSAJgpQACgIgDgHIgIgKQgQgUhGAAQg1AAgUASg");
	this.shape_4.setTransform(86.3,63.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3B2417").s().p("ADkBrQgQh3hBAKQhbAMg4gBQg3ABhbgMQhBgKgQB3QgHA8AFA+QgphxAIhyQARjiD1gEQD1AEASDiQAIBygpBxQAFg+gHg8g");
	this.shape_5.setTransform(86.3,45.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EEAD7D").s().p("AiNEMQhQhLAAhSQgSABgNgNQgNgNAAgTIAAguQAAgVAQgMQAGgFAMgEIgHhdQAAhbBJhCQBIhBBdAAQBdAABJBBQBJBCAABbIgHBdQAPAEAKAMQAJAKAAAQIAAAuQAAATgNANQgNANgSgBQAABShQBLQhLBFhDAAQhCAAhLhFg");
	this.shape_6.setTransform(86.3,64.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3CB9E4").s().p("AhYAPIBrhiIBGAjIhvCEg");
	this.shape_7.setTransform(95.175,110.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3CB9E4").s().p("AhYgwIBGgjIBrBiIhCBFg");
	this.shape_8.setTransform(77.425,110.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#127EA6").s().p("AgfAoIgTgnIAygpIAzApIgUAng");
	this.shape_9.setTransform(86.325,116.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#127EA6").s().p("AgoDgIAKm/IA9AAIAKG/g");
	this.shape_10.setTransform(86.3,143.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6ACAEA").s().p("AoXE2QAGhYAUh+IAfjHQALhNBjgqQAVgJBSgdQBKgaAxgXIAEAUQAJAjAeAPQAgARBDAAQBHAAAWgHQAggJAKgiIAIglQBWApCMAuQBjAqAKBNIAgDHQAUB/AGBXg");
	this.shape_11.setTransform(86.325,135.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E39A6B").s().p("AhqAHIAAg3IDUAAIABA3IhrAqg");
	this.shape_12.setTransform(86.325,97.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EEAD7D").s().p("AhqDoIAAgtIgYAAIgJkqIAhgPIAAhpIDUAAIAABpIAiAPIgJEqIgZAAIAAAtg");
	this.shape_13.setTransform(86.325,115.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_6_Layer_3, null, null);


(lib.Clip_Group_6_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().p("AlAL2QiTg+hyhyQhyhyg+iTQhBiaAAinQAAimBBiaQA+iTByhyQByhyCTg+QCahBCmAAQCnAACaBBQCTA+ByByQByByA+CTQBBCaAACmQAACnhBCaQg+CThyByQhyByiTA+QiaBBinAAQimAAiahBg");
	this.shape.setTransform(82.3,82.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_6_Layer_1, null, null);


(lib.Clip_Group_5_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A07849").s().p("Ah0BjQhAgBgKgeQgLgeAwgoQAxgqBPgcQBOgcBAACQA/ABALAeQALAegxAoQgwAqhPAcQhKAbg9AAIgHgBg");
	this.shape.setTransform(63.5,46.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#08536F").s().p("Aj6DBQiBgQhNhNIAAjSQAAgSAbgeQAbgeAQAAIDYgJIAbCIIAGAMQAKAOANAMQAsAlBFAAQBEAAAmgiQAMgLAHgNIAFgLIAaiPIDoAKQARAAAaAdQAbAdAAASIAADMQhOBOiAAUQg8AJi/AAQjQAAgqgGg");
	this.shape_1.setTransform(69.175,121.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A07849").s().p("ADVCpQAKkajtBiQh4Axh5BqIgQAZQgQAagCAFQgDhZAgh5QAahiBMg4QBGg1BZgCQBagCBHAyQBOA1AbBiQASA+AEA3QACAhAAA6QgFgOgJgOQgKgQgHAAQgTAAgNAuQgLAlgCABIgBAAQgDAAACg3g");
	this.shape_2.setTransform(68.9373,44.922);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBD8A9").s().p("AgyEhQgqgggqgvQhqh4gFheQgIiwBfhQQBAg1BlgFQCMgIA5BeQAqBGAACQQAACShjBqQglAogrAYQglAWgXAAQgRAAgogfg");
	this.shape_3.setTransform(68.6689,70.6686);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DAD5C6").s().p("AglASIhQhqIDEgHIAnAwIgcCPg");
	this.shape_4.setTransform(73.025,106.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ECEBE6").s().p("AiCBMQhBhRgLhZQArgPAPgNQAXgSAJglQAUgCAlAHQAqAHARAAQA5AAA8AHQAJAjAWAPQAKAGAxARQgKBYhDBOQg6BFhIAcQhFgcg9hKg");
	this.shape_5.setTransform(69.25,112.1028);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A07849").s().p("AAVDaQgQgTgSguIgPgrIirkfQgJgOAMgCIAUgCIA+goQAGgEAVAJQAXAKAKAPIAkBSQAmBUAPANQAMAKApAOQAvAWAxA7QARAUACAZQADAVgHAFQgRAlgcAUQggAZgoAEIgNABQghAAgPgTg");
	this.shape_6.setTransform(93.1919,55.1115);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A07849").s().p("AhRDsQgogFghgYQgRgNgPgXIgMgWQgHgEADgVQACgZARgUQAxg7AvgWIA1gYQAPgNAmhUIAkhSQAKgQAXgJQAVgJAGAEIA+AoQAEACAQgBQAMACgJAPIisEfIgOArQgRAugRATQgPATggAAIgOgBg");
	this.shape_7.setTransform(43.3581,54.951);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_5_Layer_3, null, null);


(lib.Clip_Group_5_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9BDBF2").s().p("AkGJ8QkHhthukHQhtkHBtkHQBskHEIhtQEHhuEHBtQEHBuBtEHQBtEGhsEHQhsEHkIBtQiEA3iEAAQiCAAiEg2g");
	this.shape.setTransform(68.8063,68.8062);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_5_Layer_1, null, null);


(lib.Clip_Group_4_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("Ag8gJIB5AAQgMAKgWAGQgMADgNAAQgeAAgggTg");
	this.shape.setTransform(79.725,108.272);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9F7357").s().p("AAABJIgZgFIAZiNIAMA8QANA9ABANQABANgVAAIgGgBg");
	this.shape_1.setTransform(80.3255,92.3125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#25282B").s().p("AgLAdQgGgMAAgRQAAgQAGgMQAFgMAGAAQAHAAAFAMQAGAMgBAQQABARgGAMQgFAMgHAAQgGAAgFgMg");
	this.shape_2.setTransform(90.05,85.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#25282B").s().p("AgLAdQgFgMAAgRQAAgQAFgMQAFgMAGAAQAHAAAFAMQAFAMAAAQQAAARgFAMQgFAMgHAAQgGAAgFgMg");
	this.shape_3.setTransform(68.675,86.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3B2419").s().p("ABzDJQgRgRAAgYIABgHIgFAAQgWAAgQgOQgQgOgCgWQgYgBgSgNQgSgNgIgUIgJACQgJAbgdAJIAAABQAAAXgRAQQgQARgYAAIgBAAQgDAPgLALQgMAMgPADQgWAVgdAAQgfAAgVgWQgWgVAAgfIABgLQgggVAAgnQAAgdAWgXQgBgFAAgIQAAgRALgQQALgPARgFQAAgSAIgOQAIgOAOgIQANgbAegEQAAgYAQgSQARgRAYgDQAWgUAeAAIAQACIAEAAQAaAAATATQATASAAAcIgBAJQAYARAAAfIAAACQAIgGALgDQgHgOAAgPQAAgcAUgUQATgTAcgBQAXAAARAOQASAMAGAWQARgOAVgBQAXABARAQQARARAAAYQAAAIgDAIQAJADAGADQAUAFANAQQANAQAAAUQAAAWgNAOQAJAOAAARQAAATgLAPQAQAKAJARQAKAQAAAUQAAAegWAWQgWAWgeAAQgfAAgWgWQgHANgOAIQgNAIgQAAQgYAAgRgRg");
	this.shape_4.setTransform(82.375,55.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D4116E").s().p("AgGAbQgDgCAAgFIAAgnQAAgFADgCQADgDADAAQAEAAADADQADACAAAFIAAAnQAAAFgDACQgDADgEAAQgDAAgDgDg");
	this.shape_5.setTransform(103.275,98.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D4116E").s().p("AgGAbQgDgCAAgFIAAgnQAAgFADgCQADgDADAAQAEAAADADQADACAAAFIAAAnQAAAFgDACQgDADgEAAQgDAAgDgDg");
	this.shape_6.setTransform(56.425,98.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BC875F").s().p("AiVEgQhKhTAAhRQgVAAgPgPQgPgOAAgVIAAgyQAAgVAPgNQAPgPAVAAIAAhlQAAhRBKhSQBMhSBJAAQBLAABKBSQBMBSAABRIAABlQAUAAAPAPQAOANAAAVIAAAyQAAAVgOAOQgPAPgUAAQAABRhMBTQhLBUhKAAQhJAAhMhUg");
	this.shape_7.setTransform(79.85,83.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1BA8DF").s().p("AjNC4QAChmAEgYQAKg6AVgnQAdg3A3gjQBTg1CPgBIBBDGIAACpg");
	this.shape_8.setTransform(54.3,147.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1BA8DF").s().p("AjOC4IAAipIBBjGIABAAQCPABBTA1QA3AjAdA3QAVAnAJA6QAEAYADBmg");
	this.shape_9.setTransform(105.35,147.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F3F3F3").s().p("AjEB1IAAjoIGJAAIAADog");
	this.shape_10.setTransform(79.65,154.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F3F3F3").s().p("AjEB1IAAjoIGKAAIAADog");
	this.shape_11.setTransform(79.75,154.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9F7357").s().p("AhhAAIAAguIDDAAIAAAuIhdAvg");
	this.shape_12.setTransform(79.75,121.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BC875F").s().p("AhhDeIgxk0IAxgKIAAh9IDDAAIAAB9IAxAKIgxE0g");
	this.shape_13.setTransform(79.75,139.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231510").s().p("AijhkIFHAAIg8CqIjDAfg");
	this.shape_14.setTransform(79.175,119.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3B2419").s().p("AgfHuQgPAIgPAAQgRAAgOgJQgPgIgIgOIgLABQgWAAgPgQQgQgPgBgWIgMABQgbAAgUgSQgUgSgDgbIgCAAQgYgBgRgQQgRgRAAgYIAAgHQgOgIgKgNQgKgPABgQQAAgKADgIQgSgHgMgRQgMgQAAgUQABgNAFgNQgTgQAAgYQAAgTALgOQgOgQAAgXQAAgNAFgNQgZgWAAgiQAAgWANgUQAMgSATgKIAAgBQAAgcAVgQQgKgPAAgSQAAgTAMgRQAMgPASgFIgBgGQAAgRALgOQAKgOAQgEQgBgIAAgJQAAgfAVgWQAWgVAfgBQAIgQAPgJQAPgKASAAQAYAAARAQQAOgSAWgEQAGgbAVgSQAVgRAcgBQATABASAJQARAKALAQQAHgBAHAAQAbAAAVARQAUAQAGAaQAPAAANAHQAMAIAIANQAKgEAKAAQATAAAQANQAQAKAFATIANgBQAXAAARAQQAQAQABAYQAAAKgDAJQAcAUAAAiIgBAOQATAIAMASQAMASAAAVQAAAXgNAQQAMASAAAVIgBAJQAPAJAKAPQAJAQAAASQAAAUgMARQgEAIgFAGQATATAAAaQAAAUgLAQQgLAQgSAGIAAAHQAAAegXAVIABALQAAAUgLARQgMARgSAJQgBAQgKANQgIAOgPAHIABAHQgBAdgUAVQgVAVgcgBQgHABgFgCQgHAQgOAJQgOAKgSAAQgTAAgPgMQgOANgTACQgEAcgUASQgVASgcAAQgbAAgWgTg");
	this.shape_15.setTransform(79.35,81.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_4_Layer_3, null, null);


(lib.Clip_Group_4_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#127EA6").s().p("Ak7L+QichAh1h3Qhyhzg+iWQg+iVgCiiQgCimBAicQBAibB3h2QBzhxCWg/QCWg+ChgCQCmgBCcBAQCdBAB2B3QByByA+CWQA+CWABCiQACCmhBCcQhACbh3B2QhzBxiWA/QiWA+ihABIgJABQiiAAiXg/g");
	this.shape.setTransform(82.925,82.8513);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_4_Layer_1, null, null);


(lib.Clip_Group_3_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D2B1D").s().p("AE5BmQgwg6gWAqQgRAhgZAMQgdAIgNAIQgPAIgYAIQgwARguADQg3ADhegNQhjgOgggSQhYgyg9hjQgTgfgOggIgKgbQA5gECKACQBOABBghAQA0giAVgKQAogUAoAAQBDAAA3AaQA1AaAZAqQAMgFALAAQA6AAAtBBQAtBBAABaQAAAigbAtQggAvgLAUQgVhJgrg1g");
	this.shape.setTransform(90.525,44.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D4116E").s().p("AhGCkIA5lfIgphZIAzAJIAugJIgpBbIBFFfIhHBvg");
	this.shape_1.setTransform(97.625,179.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#687278").s().p("AhrBdQgJAAgSgaQgRgagKgBIgCABIAAiFIEqAAQAQAAAFABQAIADAAALIAACdQAAALgFACIgRAAgAh0gVIAAArQAAAqAeAAICwAAQAeAAAAgqIAAgrQAAgqgeAAIiwAAQgeAAAAAqg");
	this.shape_2.setTransform(114.625,86.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#687278").s().p("AiDBdIgZAAQgNgDAAgKIAAidQAAgLAJgDQAEgBARAAIE0AAIAACFQgKABgVAaQgVAZgLAAgAh8gVIAAArQAAAqAeAAICvAAQAfAAAAgqIAAgrQAAgqgfAAIivAAQgeAAAAAqg");
	this.shape_3.setTransform(81.25,86.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EAF6FC").s().p("AiFBSIAAijIEMAAIAACjg");
	this.shape_4.setTransform(115.85,86.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAF6FC").s().p("AiHBQIAAifIEPAAIAACfg");
	this.shape_5.setTransform(78.45,86.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D2E6F4").s().p("AjxhfIAWgCIDZBsIDehsIAWACIj0DBg");
	this.shape_6.setTransform(97.2,152.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E6E6E6").s().p("ABZEMQg7gDgeAAIhcADQg2ABglgHIg6oRIAKAAIDlBzIDqh0IAKABIhBISQgdAGgoAAIgTgBg");
	this.shape_7.setTransform(97.225,168.9641);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E5BB8A").s().p("Ajxg0IDzgOIDwAOIj0B3g");
	this.shape_8.setTransform(97.2,146.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#08536F").s().p("AC4ETQiBgChCAAIi7ACQhpAAhGgIQi7gWhxhpIAAk+QAAgYARgSQASgSAZAAIJmglIJlAlQAZAAASASQARASAAAYIAAE2QhyByjCAWQhAAIheAAIgYgBg");
	this.shape_9.setTransform(98.375,168.2056);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3D2B1D").s().p("Ak8hdQBSi7DVAAQBvAABaA2QBVAyAwBWQAvBVgDBfQgDBlg9BYQAFiJgyhSQgZgngTgKQgagMgyAPQg/AVhOAAQhNAAhAgVQg6gRggAOQgbAMgXAsQgoBJABCNQg2jUBHiig");
	this.shape_10.setTransform(100.4802,53.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3D2B1D").s().p("AE6D5QAJjshjiMQhZh9iEgBQiDAAhYB9QhjCMAIDtQADBSgGgBQgFgBgPg3QgThEgcAAQgKAAgTAlQgOAagHAUQgEiDAvi0QAmiPBwhUQBohNCEgDQCEgDBpBJQByBPApCPQAaBcAFBSQAEAwAABXQgIgWgNgUQgPgYgKAAQgcAAgTBEQgPA3gEABIAAAAQgGAAADhRg");
	this.shape_11.setTransform(98.0345,58.3197);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FBD8A9").s().p("AjKGSQhShAgyhuQgngHgbgoQgZgkgJg1QgIg1AMguQANgzAggaQAOimBdhoQBph0CtAAQCuAABoB0QBdBoAPCmQAhAaAMAzQAMAugIA1QgJA1gYAkQgcAogoAHQgxBuhSBAQhaBFhxAAQhwAAhahFg");
	this.shape_12.setTransform(98.25,88.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E5BB8A").s().p("AjBCcQhkhggPiIQBiglAliZQBSgLBbAAQBcAABSALQAlCZBiAlQgPCIhjBgQhIBFh7A1Qh6g1hHhFg");
	this.shape_13.setTransform(98.125,155.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_3_Layer_3, null, null);


(lib.Clip_Group_3_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1BA8DF").s().p("AlzOHQi3hMiLiMQiGiIhJiwQhKixgCi+QgCjEBMi3QBMi4CNiKQCHiGCxhKQCwhJC+gCQDEgCC4BMQC3BMCLCMQCFCIBKCwQBJCxACC+QACDEhLC3QhMC4iMCLQiICGiwBJQixBKi+ACIgIAAQjAAAi0hLg");
	this.shape.setTransform(97.675,97.7489);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_3_Layer_1, null, null);


(lib.Clip_Group_2_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4116E").s().p("AA1A2QgLAAgJgFQgIgHAAgJIAAgzIgxAAIAAAzQAAAJgJAHQgHAFgMAAIicAAQgLAAgIgGQgIgGAAgJIAAhAQAAgKAIgGQAIgGALgBICcAAQALABAHAFQAJAGABAHIAxAAQACgHAHgGQAJgFAKgBICbAAQAMABAIAGQAIAGAAAKIAABAQAAAJgIAHQgJAFgLAAgAAqgoQgFADAAAGIAABAQABAFAEAEQAFADAGAAICbAAQAGAAAFgDQAEgEAAgFIABhAQgBgGgEgDQgFgEgGAAIibAAIgCAAQgGAAgDAEgAjagoQgFADAAAGIAABAQAAAFAFAEQAEADAGAAICcAAQAGAAAFgDQAEgEAAgFIABhAQgBgGgEgDQgFgEgGAAIicAAIgBAAQgGAAgDAEg");
	this.shape.setTransform(75.75,68.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3F3F3").s().p("AgBAKQgqgBgqgSICrABQgmASgrAAIgGAAg");
	this.shape_1.setTransform(75.775,89.8802);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5BB8A").s().p("AgcATQgTgIgUgQIgUgSQBQAGBfgHQgoAxgtAAQgOAAgRgGg");
	this.shape_2.setTransform(75.7,91.3301);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5BB8A").s().p("AABBPIgcgFIAbiYIANBAQAOBCABAOQABANgWAAIgGAAg");
	this.shape_3.setTransform(76.0537,76.7868);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#493324").s().p("AgQAZQgIgLAAgOQAAgOAIgKQAHgKAJAAQAKAAAIAKQAGAKAAAOQAAAOgGALQgIAKgKAAQgJAAgHgKg");
	this.shape_4.setTransform(88.4,67.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#493324").s().p("AgPAaQgGgLAAgPQAAgOAGgKQAHgLAIAAQAJAAAHALQAGAKAAAOQAAAPgGALQgHAKgJAAQgIAAgHgKg");
	this.shape_5.setTransform(63.875,67.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#805A37").s().p("AjvhZQA+iyChABQBUAABEAyQBBAxAkBSQAkBRgDBaQgDBhgtBUIAGhZQACgigQghIgQg5QgHgUghANQgRAIhAgLQhNgLgKAAQg6AAgwgTQgsgRgZANQgUAMgSApQgeBIABCFQgpjLA2iag");
	this.shape_6.setTransform(76.2564,46.1499);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#805A37").s().p("AjqD6QgEgBgMgqQgEgQgQgTIgPgQIgSAcQgSAdgCAGQgDhjAkiIQAchtBVg/QBPg7BjgCQBlgCBPA3QBWA8AfBtQAUBFAEA+QACAkAABCQgFgQgKgQQgLgSgIAAQgLAAgEAOQgDAIgFAZQgNArgDACQgGACADg+QAGizhMhpQhFhfhlAAQhlAAhFBfQhMBpAGCzQADA+gFAAIAAAAg");
	this.shape_7.setTransform(74.0135,44.1704);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FBD8A9").s().p("Ag4FDQgvgkgug0Qh4iGgEhqQgJjEBqhZQBHg7BxgGQCdgJA/BpQAvBOAAChQAACjhvB3QgpAsgwAbQgqAYgZAAQgTAAgtgig");
	this.shape_8.setTransform(73.7149,72.8895);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D4116E").s().p("AkXC5QiOgZhYhVIgBh2QAAgcAJgWQAMghAcgHQELg4ADgDIAmD0IAGANQAIAPANAOQApApBOAAQBLAAAsgpQANgOAJgPIAGgNIAjj6QACADCIAXICJAXQAhAIAQAZQAMATgBAXIABCVQhZBViNAZQhSAOjGAAQjHAAhRgOg");
	this.shape_9.setTransform(74.25,126.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E5BB8A").s().p("AhpABQgwgzgfgxQgdguAEgQQAWgCAoAGQAuAIAUAAQBCAAA/AHQAKAnAZAMQARAJAxAMQgFAuATAuQAEALAfA4QASAggHAOQgJASgzAJQh+gZiAiIg");
	this.shape_10.setTransform(82.6388,115.6653);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FBD8A9").s().p("Ai1BUQgghBgRiPQAPgGAZgGIAHgCQAngMARhBQAXgDAoAHQAtAIATAAQBCAABAAHQAKAmAaANQAQAIAxANQgOB7g2BaQhABvhmARQh9gZg1hsg");
	this.shape_11.setTransform(74.4,121.1403);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A6839").s().p("AhQE/Qh8gOhvg4Qhtg3hWhYQAjghBXgcICdgwQBHgZAchmQAWhNgIheIDrgRQgIBkARBOQAZBsBHAdQAcAKCDAoQBcAbAmAeQhVBZhtA3QhxA4h+APg");
	this.shape_12.setTransform(74.3,115.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4E331E").s().p("AkaD7QgUAAgOgRQgOgQABgXIBWmuQAAgUAwgXQAqgVAYAAID3AAQANAAAsgKQAngFgBASIB1HrQABAXgOAQQgOARgUAAIkfA8g");
	this.shape_13.setTransform(74.7,61.862);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#805A37").s().p("AlND1QgXAAgRgQQgQgQAAgXIBnmuQgBgVA4gXQAygUAdAAIEiAAQAegBBUAHIAcA9IBuGrQAAAXgRAQQgQAQgXAAIlTA9g");
	this.shape_14.setTransform(75,62.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_2_Layer_3, null, null);


(lib.Clip_Group_2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9BDBF2").s().p("AkXKlQiKg5hnhpQhlhlg2iFQg3iFgCiOQgBiTA5iJQA5iKBqhoQBlhkCFg3QCEg3COgBQCTgBCJA4QCKA5BoBpQBlBmA3CEQA3CFABCOQABCTg6CJQg4CKhpBoQhmBkiEA3QiFA3iPABIgFAAQiQAAiHg3g");
	this.shape.setTransform(73.225,73.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_2_Layer_1, null, null);


(lib.Clip_Group_1_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().p("AhIgQICRAAQgQAdgxAEIgIAAQgtAAgbghg");
	this.shape.setTransform(70.775,90.9649);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AC7B58").s().p("AgIBGIgWgLIAfiDIATA9QARA+gJALQgJALgOAAQgFAAgIgDg");
	this.shape_1.setTransform(70.6558,75.1306);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3B2418").s().p("AgOAjQgHgOAAgVQAAgTAHgOQAGgPAIAAQAJAAAGAPQAHAOAAATQAAAUgHAPQgGAOgJAAQgIAAgGgOg");
	this.shape_2.setTransform(83.825,68.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3B2418").s().p("AgOAjQgHgOAAgVQAAgTAHgOQAGgPAIAAQAJAAAGAPQAHAOAAATQAAAUgHAPQgGAOgJAAQgIAAgGgOg");
	this.shape_3.setTransform(58.525,68.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3B2418").s().p("ADxDiQgIgBgBgIQgIhsgwgwQg7g6h1AlQhzglg8A6QgwAwgIBsQAAAIgJABQgIABgDgIQg4iuBCiCQBGiMCrAAQCsAABGCMQBCCCg4CuQgDAHgHAAIgBAAg");
	this.shape_4.setTransform(71.0427,40.4806);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2D1B11").s().p("AgbCXQgJACgIAAQgXAAgQgPQgQgPgBgXQgNAGgOAAQgbAAgTgSQgTgSAAgbQAAgUANgQQgRgUAAgZQAAgYAPgUQAPgTAXgIIAAgDQAAgXAUgEQAEgBAqAAQAIAAAJADQAKgTASgLQATgMAVAAQAYABAUANQATANAJAUQArABAGACQAUAEABAZQAVAGANASQANARAAAVQAAAGgCAIIACAPQAAATgLASQgLAQgRAJQgCAVgNARQgMARgUAHQgEAbgWATQgWASgdAAQglAAgYgcg");
	this.shape_5.setTransform(70.575,20.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D4116E").s().p("AgVAVQgJgJAAgMQAAgMAJgIQAJgJAMAAQANAAAJAJQAJAIAAAMQAAAMgJAJQgJAJgNAAQgLAAgKgJg");
	this.shape_6.setTransform(45.6,77.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D4116E").s().p("AgVAVQgJgJAAgMQAAgMAJgIQAJgJAMAAQANAAAJAJQAJAIAAAMQAAAMgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_7.setTransform(96.85,77.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BE885C").s().p("AiaEhQhOhUAAhSQgWAAgPgOQgPgPAAgTIAAg0QAAgTAPgOQAPgOAWAAIAAhnQAAhRBOhSQBOhSBMAAQBOAABNBSQBOBSAABRIAABnQAWAAAPAOQAPANAAAUIAAA0QAAAUgPAOQgPAOgWAAQAABShOBUQhOBThNABQhMgBhOhTg");
	this.shape_8.setTransform(71.025,64.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#32303A").s().p("AgXicIB2BOIhxApIAsA6Ih4CIg");
	this.shape_9.setTransform(85.55,122.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#32303A").s().p("AgZAVIAsg6IhxgpIB3hOIBGE5g");
	this.shape_10.setTransform(56.4,122.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#42404D").s().p("AjWETQADiUAEgoQAKhWAWg7QAfhSA5g1QBWhQCUgBIBEEpIAAD8g");
	this.shape_11.setTransform(44.475,136.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#42404D").s().p("AjWETIAAj8IBDkpIABAAQBDABAzAPQBDATAxAuQA6A1AeBSQAWA7AKBWQAEAhADCbg");
	this.shape_12.setTransform(97.55,136.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D4116E").s().p("AjMCfIAAk9IGZAAIAAE9g");
	this.shape_13.setTransform(70.9,147.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjMCfIAAk9IGZAAIAAE9g");
	this.shape_14.setTransform(70.975,147.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#AC7B58").s().p("AhlgGIAAg3IDLAAIAAB7g");
	this.shape_15.setTransform(70.975,102.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BE885C").s().p("AhlDeIgzk0IAzgKIAAh9IDLAAIAAB9IAzAKIgzE0g");
	this.shape_16.setTransform(70.975,118.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5C6166").s().p("Ah2AsIgChXIDyAAIgEBXg");
	this.shape_17.setTransform(71,111.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_1_Layer_3, null, null);


(lib.Clip_Group_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3F3F3").s().p("AkNKNQkPhyhwkNQhxkOBxkNQA4iGBlhjQBjhiB/g0QENhxEOBxQEPBxBwEOQBxEOhxEOQhxEOkOBwQiHA4iHAAQiGAAiHg4g");
	this.shape.setTransform(70.725,70.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_1_Layer_1, null, null);


(lib.Clip_Group_1_0_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().p("Aj9JoQj/hqhrj/Qhqj+Bqj+QBqj/D/hrQD+hqD/BqQD+BqBrD/QBqD+hqD/QhpD+kABqQiAA2h/AAQh+AAh/g1g");
	this.shape.setTransform(66.725,66.7063);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_1_0_Layer_1, null, null);


(lib.Clip_Group_0_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AC7238").s().p("Ah9BrQgcg6AZg8QAYg9A+gdQAvgXAzAIQAyAHAjAiQgzAIgyAXQg8AdgrAsQgqAsgOAug");
	this.shape.setTransform(88.2728,48.7063);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3899CF").s().p("AjahWIAUgBIDEBhIDJhiIAUACIjdCvg");
	this.shape_1.setTransform(82.8,133.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#355A78").s().p("AilDtIg1ngIAJgBIDPBoIDUhoIAJABIg8HhQgnAHh6AAQh7AAgogIg");
	this.shape_2.setTransform(82.8,148.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5BB8A").s().p("AjaguIDbgOIDaANIjdBsg");
	this.shape_3.setTransform(82.8,128.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#88CBEC").s().p("ACmD5Qh4gIg3AAQjiALhmgHQirgMhkheIAAkxQAAgXAQgQQAQgQAWAAIIrghIIqAhQAWAAAQAQQAQAQAAAXIAAE7QhkBkiyAFIgaABQg0AAhXgGg");
	this.shape_4.setTransform(83.825,148.4211);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AC7238").s().p("AkhhUQBDiGDDAAQBlAABSAmQBPAkAsA/QAtA/gCBMQgBBRg3BPQAEh9gthJQgWgjgSgJQgXgLgtAOQg5AThGgBQhHABg5gTQg0gQgdANQgYAMgVAmQglBCACB/Qgxi7A7h0g");
	this.shape_5.setTransform(85.6282,47.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AC7238").s().p("AEcDNQAIjUhah/QhQhxh3AAQh2gBhQByQhaB+AIDVQADBLgGgBQgEgBgOgyQgRg9gZAAQgJAAgSAhQgLAWgIAUQgBgQAahkQAYhbgKhKQgQh8B3hBQBng5CfAHQCcAHBlA8QBvBBgeBeQgZBMAYBRQAGAVAOAoQALAjABAZQgHgTgLgSQgOgWgJAAQgaAAgQA9QgPAygDABIAAAAQgFAAADhKg");
	this.shape_6.setTransform(83.5245,50.4619);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FBD8A9").s().p("Ai2FrQhKg6gthkQgkgFgZgkQgWgigIgwQgHgvALgqQALgtAdgYQAOiWBThdQBehqCdABQCegBBeBqQBTBdAOCWQAdAYALAtQALAqgHAvQgIAwgWAiQgZAkgkAFQgtBkhKA6QhRA/hmgBQhlABhRg/g");
	this.shape_7.setTransform(83.725,76.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E5BB8A").s().p("AiuCNQhbhXgNh6QBYghAiiMQBLgJBRAAQBTAABLAJQAgCLBZAiQgMB6hbBXQhAA+hwAwQhugwhAg+g");
	this.shape_8.setTransform(83.6,136.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_0_Layer_3, null, null);


(lib.Clip_Group_0_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().p("AlGMYQihhCh6h7Qh2h3hAibQhAibgBinQgCisBDihQBCihB8h6QB2h1CbhBQCbhACngCQCsgBChBCQCiBDB5B7QB2B3BACbQBACbABCnQACCshCChQhDChh7B6Qh3B1ibBBQibBAinACIgHAAQipAAidhCg");
	this.shape.setTransform(85.8,85.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_0_Layer_1, null, null);


(lib.Clip_Group_Layer_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6ACAEA").s().p("EglXABqMAukgkZIcLcQMgHoAkwMghPAEfg");
	this.shape_11.setTransform(342.875,392.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_Layer_3_1, null, null);


(lib.Path_Layer_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1BA6E0").s().p("A+LUDIPgxvI4S7ZMAi0gS6MArHAwxMguDAnOg");
	this.shape_2.setTransform(249.375,281.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_Layer_1_2, null, null);


(lib.Path_0_Layer_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#272729").s().p("A2grxIE8o6IbVnbMAMwAu7MgiMAJSg");
	this.shape_1.setTransform(144.1,179.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_Layer_1_1, null, null);


(lib.Clip_Group_Layer_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#98DAF2").s().p("EgRoApwQoIjcmSmRQmRmSjcoIQjkobAApOQAApNDkobQDcoIGRmRQGSmSIIjcQIbjkJNAAQJOAAIbDkQIIDcGSGSQGRGRDcIIQDkIbAAJNQAAJOjkIbQjcIImRGSQmSGRoIDcQobDkpOAAQpNAAobjkg");
	this.shape_1.setTransform(300.65,290);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_Layer_1_1, null, null);


(lib.Path_Layer_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(83,83,83,0.2)").s().p("At3HhIAAvBIbuPBg");
	this.shape_3.setTransform(88.75,48.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_Layer_1_3, null, null);


(lib.Path_7_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(8,83,111,0.2)").s().p("A1pLCQhPAAg2g4Qg4g3AAhPIAAw5QAAgpARglQAQgkAdgaMAwPAVAQgbAfglARQgmATgrAAg");
	this.shape.setTransform(157.5,70.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7_Layer_1, null, null);


(lib.Path_0_Layer_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(37,40,43,0.2)").s().p("Ak6BrIAAjVIJ1DVg");
	this.shape_2.setTransform(31.45,10.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_Layer_1_2, null, null);


(lib.Path_1_Layer_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4F55").s().p("AlaDdQAHjDgWhcQBegiB+g7QD8h0Chh6IBaIBQhpA3iOA/QkcB+i7AlQAHhPADhhg");
	this.shape_2.setTransform(36.225,39.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_Layer_1_2, null, null);


(lib.Path_1_2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25282B").s().p("An/CNIBTkkIOtEkQkCAGkAADIj5ACQkIAAADgLg");
	this.shape.setTransform(51.2485,15.1526);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_2_Layer_1, null, null);


(lib.Path_1_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25282B").s().p("AijBpQhjgkhTgaQAPgiBph5QA1g+Ayg3QCTA0CvBkQBYAyA6AnQiCBlhCBEQgiAjgHANQhMgzjEhJg");
	this.shape.setTransform(34.6,22.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1_Layer_1, null, null);


(lib.Path_1_0_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25282B").s().p("AqlB2QEilAFyj8QC3h/B/g+IGBKVQkeCckgD6QiOB+hWBeg");
	this.shape.setTransform(67.8,64.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0_Layer_1, null, null);


(lib.Clip_Group_Layer_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6ACAEA").s().p("AsvXgI6W6WMAp/gUpIbcbcIIwH0IrvLvg");
	this.shape_12.setTransform(331.325,483.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_Layer_3_2, null, null);


(lib.Path_Layer_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1BA7DE").s().p("ATMEOMgm9gFJQgkgFgWgcQgWgdAFgkIAPhxMApqAFhIgPBwQgEAkgdAWQgXASgcAAIgOgBg");
	this.shape_4.setTransform(134.1537,27.0963);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_Layer_1_4, null, null);


(lib.Path_3_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9BDBF2").s().p("AUz4NMAFiAjeIAHARQAGAUgCATQgIA8hcAUMgzbAK1g");
	this.shape.setTransform(169.625,155);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_Layer_1, null, null);


(lib.Path_2_Layer_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#127EA6").s().p("A6JHWQgogagKgvIgfiTMA2UgLiIAfCTQAKAvgaAoQgaAogvAKMgyyAKyQgNADgNAAQggAAgdgTg");
	this.shape_2.setTransform(175.5389,48.8639);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_Layer_1_2, null, null);


(lib.Path_1_Layer_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A7A9AC").s().p("ARfQHMgm9gFKQgOgCgQgHIDk65QAPgDAQABIRUCTQAPACAZgFIAjgJQAcgJC9hMQCIg3AoAFIOxB+QAQACANAHIj/eGQgJACgKAAIgMgBg");
	this.shape_3.setTransform(140.525,103.215);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_Layer_1_3, null, null);


(lib.Path_1_0_Layer_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A7A9AC").s().p("A2SZKMgHdgjDQASgMAUgEIWlkzQAUgEAdgSQATgLAUgQQAhgYDJiyQCQiAA0gLITPkGQATgEAWADMAIWAnPQgSALgUAEMgyzAKzQgMADgOAAIgPgBg");
	this.shape_1.setTransform(190.375,161.1304);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0_Layer_1_1, null, null);


(lib.Path_0_Layer_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#08536F").s().p("AzIKjQgUgKgUgSQgngiAEgkQAIg5Bs2xIAnhCMAmMAfXg");
	this.shape_3.setTransform(130.0267,100.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_Layer_1_3, null, null);


(lib.Clip_Group_Layer_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6ACAEA").s().p("EgkeAOtMAtlgQoMAEQghRIQXh0MAGyAoSMgnLAhvg");
	this.shape_13.setTransform(385.55,394.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_Layer_3_3, null, null);


(lib.Path_Layer_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EghugGJMBDdAAAIkXMTg");
	this.shape_5.setTransform(215.925,39.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_Layer_1_5, null, null);


(lib.Path_3_Layer_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ABB7AF").s().p("Al2DNQgGgZgCgVQgai9BcimQBaijCnhPIHAD5IlYJ0g");
	this.shape_1.setTransform(38.8733,43.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_Layer_1_1, null, null);


(lib.Path_2_Layer_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#25282B").s().p("Ao/MnQgbAAgBgTQgBgOAPgoQAthzAAg9IAAg/QAAgYAEgeI0RAAQgqAAgogYQgogZgOghIgshrIgDAAIlYvEIgGAAQgfhGAHgMQAIgNBUAAMBHrAAAQBZABAMAEQAUAIgRAoQgBANgEAJImAPYIgDAAIgwBrQgPAigoAYQgpAYgpAAI1MAAQAEAeAAAYIAAA/QAAA9AtBzQAPAogBAOQgBATgbAAg");
	this.shape_3.setTransform(239.7966,80.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_Layer_1_3, null, null);


(lib.Path_1_Layer_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#25282B").s().p("AE6KoIuBjUQhVgUgthKQgthKAThUICvrjQAUhUBJguQBLgtBTATIOCDUQBTAUAuBKQAtBKgTBUIivLjQgUBUhKAuQgzAgg5AAQgYAAgZgGg");
	this.shape_4.setTransform(74.55,68.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_Layer_1_4, null, null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgRjApkQoGjamQmQQmQmPjboHQjjoZAApLQAApKDjoZQDboGGQmQQGQmQIGjbQIZjjJKAAQJLAAIZDjQIGDbGQGQQGPGQDbIGQDkIZAAJKQAAJLjkIZQjbIHmPGPQmQGQoGDaQoZDkpLAAQpKAAoZjkg");
	mask.setTransform(288.75,288.75);

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,0,0), null);


(lib.Path_Layer_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A4F55").s().p("A0veOMAAAg8bMApfA8bg");
	this.shape_6.setTransform(132.8,193.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_Layer_1_6, null, null);


(lib.Clip_Group_Layer_3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6ACAEA").s().p("EghzAQMMApfg8iMAaIAiYQjgQKgPAIQgJAFrKQwIrJQuI5AEgg");
	this.shape_14.setTransform(383.125,373.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_Layer_3_4, null, null);


(lib.Clip_Group_Layer_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9BDBF2").s().p("EgRoApwQoIjcmRmRQmSmSjcoIQjkobAApOQAApNDkobQDcoIGSmRQGRmSIIjcQIbjkJNAAQJOAAIbDkQIIDcGRGSQGSGRDcIIQDkIbAAJNQAAJOjkIbQjcIImSGSQmRGRoIDcQobDkpOAAQpNAAobjkg");
	this.shape_2.setTransform(289.975,290);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_Layer_1_2, null, null);


(lib.Path_4_Layer_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4F55").s().p("A1aSTQCzrhEkq6QEkq8GOqFIYsPPQlBIJjsIzQjrI2iRJSg");
	this.shape_1.setTransform(137.125,161.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_Layer_1_1, null, null);


(lib.Path_3_Layer_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4F55").s().p("AsamPIO6okQHBMPC6N2Iw1DiQiVrKlrp5g");
	this.shape_2.setTransform(79.5,94.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_Layer_1_2, null, null);


(lib.Path_2_Layer_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4A4F55").s().p("AneGhQjxkUiolCIM/rTQCnFEDvETQDwEUEqDTIs+LTQkpjVjvkTg");
	this.shape_4.setTransform(88.8,90.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_Layer_1_4, null, null);


(lib.Path_1_Layer_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4A4F55").s().p("Az5lQQINhTHqjMQHpjMGuk4IJlXEQmtE4nqDMQnqDMoMBTg");
	this.shape_5.setTransform(127.375,114.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_Layer_1_5, null, null);


(lib.Path_0_Layer_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4A4F55").s().p("AuJE9IGVv+QKkEMLZAtIhDRKQuHg4tIlNg");
	this.shape_4.setTransform(90.55,70.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_Layer_1_4, null, null);


(lib.Group_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A4F55").s().p("Am5hjIAGg1INtD8IgGA1g");
	this.shape.setTransform(92.55,196.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4F55").s().p("Am6hkIAIg1INtD+IgIA0g");
	this.shape_1.setTransform(93.825,185.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4F55").s().p("Ah3gpIAngeIA5BOIBrhdIAkAtQhXBKg7A2IhdiAg");
	this.shape_2.setTransform(31.45,173.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A4F55").s().p("Am7hkIAKg0INtD9IgJA0g");
	this.shape_3.setTransform(96.525,168.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4A4F55").s().p("Am7hkIAKg0INtD9IgKA0g");
	this.shape_4.setTransform(98.475,157.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4A4F55").s().p("Ah5gpIAqgdIA0BNIB0hcIAhAtQg/AxhdBNIhXh/g");
	this.shape_5.setTransform(35.975,146);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A4F55").s().p("Am8hkIAMg0INtD9IgMA0g");
	this.shape_6.setTransform(102.275,140.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A4F55").s().p("Am9hkIAOg0INtD9IgOA0g");
	this.shape_7.setTransform(104.85,130.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4A4F55").s().p("Ah8gpIAtgdIAxBMIB7hZIAgAsQhSA6hVBCg");
	this.shape_8.setTransform(42.25,118.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A4F55").s().p("Am+hlIAQgyINtD9IgQAyg");
	this.shape_9.setTransform(109.8,113.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4A4F55").s().p("Am/hkIARg0INuD+IgRAzg");
	this.shape_10.setTransform(113,103.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4A4F55").s().p("Ah9gpIAugcIAuBLICDhYIAdAsQhtBIhEAxg");
	this.shape_11.setTransform(50.25,91.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A4F55").s().p("Am/hlIASgyINuD9IgUAyg");
	this.shape_12.setTransform(119,86.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A4F55").s().p("AnAhlIAUgyINtD9IgUAyg");
	this.shape_13.setTransform(122.85,77.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4A4F55").s().p("Ah/gpIAwgbIAqBJICKhUIAbAqQhfA5hbA9g");
	this.shape_14.setTransform(60,64.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4A4F55").s().p("AqOhjQAghEArhZITRFlQghBDgpBZg");
	this.shape_15.setTransform(118.1,49.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4A4F55").s().p("AwQMCQAYoJCRn0QCRn2ECnFIXlG1QkCHFiRH1QiRH1gYIJg");
	this.shape_16.setTransform(104.1,120.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_Layer_1, null, null);


(lib.Path_Layer_1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#25282B").s().p("AqJqnQBzDGDcD5QG3HwIND6IxFCmg");
	this.shape_7.setTransform(65.025,68.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_Layer_1_7, null, null);


(lib.Path_2_Layer_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DFA026").s().p("AgxA+QgbgbAAgmIAAhVICZCZQgbAYgjAAQglAAgbgbg");
	this.shape_5.setTransform(7.675,8.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_Layer_1_5, null, null);


(lib.Path_1_Layer_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DFA026").s().p("ACNGiQgbgbAAgmIAAlDIgYAAIAAFDQAAAmgbAbQgaAbglAAQgmAAgbgbQgbgbAAgmIAAlDIgVAAIAABlQAAAmgbAbQgbAbgmAAQgmAAgagbQgcgbAAgmIAAoAQABgkAVgbII8I8IAADhQAAAmgbAbQgaAbgmAAQgnAAgagbg");
	this.shape_6.setTransform(29.75,44.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_Layer_1_6, null, null);


(lib.Path_0_Layer_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#25282B").s().p("AFUr6IDPVPIxFCmg");
	this.shape_5.setTransform(54.7,76.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_Layer_1_5, null, null);


(lib.Path_Layer_1_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,102,255,0.298)").s().p("A52PjIAC+mIARgfMAzaAfFg");
	this.shape_8.setTransform(165.525,99.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_Layer_1_8, null, null);


(lib.Path_7_Layer_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4F55").s().p("AkEAXIAAgtIIJAAIAAAtg");
	this.shape_1.setTransform(26.1,2.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7_Layer_1_1, null, null);


(lib.Path_0_Layer_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#08536F").s().p("AwnoGIQnOHIQouHIwoQNg");
	this.shape_6.setTransform(106.425,51.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_Layer_1_6, null, null);


(lib.Clip_Group_Layer_3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6ACAEA").s().p("EgI3AmpMgk0gk0MA/zgodINSM9QNYM8AiAAQAigBgOZsQgHM3gNM2g");
	this.shape_15.setTransform(379.9668,398.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_Layer_3_5, null, null);


(lib.Scene_1_buttons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buttons
	this.button_hide = new lib.button_close();
	this.button_hide.name = "button_hide";
	this.button_hide.parent = this;
	this.button_hide.setTransform(765.8,30.6,1,1,0,0,0,0,-0.2);
	this.button_hide.visible = false;
	new cjs.ButtonHelper(this.button_hide, 0, 1, 1);

	this.button_neel = new lib.Button_1();
	this.button_neel.name = "button_neel";
	this.button_neel.parent = this;
	this.button_neel.setTransform(406.15,708.25,1.4889,2.1177,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_neel, 0, 1, 1);

	this.button_tom = new lib.Button_1();
	this.button_tom.name = "button_tom";
	this.button_tom.parent = this;
	this.button_tom.setTransform(193.15,192.5,1.8719,2.6188,0,0,0,0.4,0.4);
	new cjs.ButtonHelper(this.button_tom, 0, 1, 1);

	this.button_naomi = new lib.Button_1();
	this.button_naomi.name = "button_naomi";
	this.button_naomi.parent = this;
	this.button_naomi.setTransform(568.25,656.3,1.4418,2.0318,0,0,-1.2954,0.1,0.5);
	new cjs.ButtonHelper(this.button_naomi, 0, 1, 1);

	this.button_polly = new lib.Button_1();
	this.button_polly.name = "button_polly";
	this.button_polly.parent = this;
	this.button_polly.setTransform(265.25,652.75,1.4799,2.0844,0,0,0,9.2,0.8);
	new cjs.ButtonHelper(this.button_polly, 0, 1, 1);

	this.button_monique = new lib.Button_1();
	this.button_monique.name = "button_monique";
	this.button_monique.parent = this;
	this.button_monique.setTransform(101.85,550.9,1.8219,2.5013,0,0,0,0.5,0.4);
	new cjs.ButtonHelper(this.button_monique, 0, 1, 1);

	this.button_paul = new lib.Button_1();
	this.button_paul.name = "button_paul";
	this.button_paul.parent = this;
	this.button_paul.setTransform(695.55,542.7,1.7663,2.4965,0,0,0,0.5,0.4);
	new cjs.ButtonHelper(this.button_paul, 0, 1, 1);

	this.button_rhonda = new lib.Button_1();
	this.button_rhonda.name = "button_rhonda";
	this.button_rhonda.parent = this;
	this.button_rhonda.setTransform(645.15,356.45,1.5512,2.1327,0,0,0,0.6,0.5);
	new cjs.ButtonHelper(this.button_rhonda, 0, 1, 1);

	this.button_harold = new lib.Button_1();
	this.button_harold.name = "button_harold";
	this.button_harold.parent = this;
	this.button_harold.setTransform(157.4,365.15,1.564,2.1533);
	new cjs.ButtonHelper(this.button_harold, 0, 1, 1);

	this.button_jane = new lib.Button_1();
	this.button_jane.name = "button_jane";
	this.button_jane.parent = this;
	this.button_jane.setTransform(637.35,201,1.6353,2.2927,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_jane, 0, 1, 1);

	this.button_george = new lib.Button_1();
	this.button_george.name = "button_george";
	this.button_george.parent = this;
	this.button_george.setTransform(395.3,136.95,2.0964,2.9509,0,0,0,0.4,0.6);
	new cjs.ButtonHelper(this.button_george, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_george},{t:this.button_jane},{t:this.button_harold},{t:this.button_rhonda},{t:this.button_paul},{t:this.button_monique},{t:this.button_polly},{t:this.button_naomi},{t:this.button_tom},{t:this.button_neel},{t:this.button_hide}]}).wait(11));

}).prototype = p = new cjs.MovieClip();


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(110,145.6,1,1,0,0,0,110,145.6);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,220,291.1), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(66.3,3.3,1,1,0,0,0,66.3,3.3);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,132.7,6.7), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(66.7,12.4,1,1,0,0,0,66.7,12.4);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,133.4,24.8), null);


(lib.CompoundPath_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Compound_Path_0_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(13.6,12.6,1,1,0,0,0,13.6,12.6);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_0, new cjs.Rectangle(0,0,27.3,25.1), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Compound_Path_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(128.6,180.2,1,1,0,0,0,128.6,180.2);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,257.2,360.5), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_4_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(11.4,24.2,1,1,0,0,0,11.4,24.2);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,22.9,48.5), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_1 = new lib.Path_2_Layer_1_1();
	this.Layer_1_1.name = "Layer_1_1";
	this.Layer_1_1.parent = this;
	this.Layer_1_1.setTransform(1.7,6.5,1,1,0,0,0,1.7,6.5);
	this.Layer_1_1.depth = 0;
	this.Layer_1_1.isAttachedToCamera = 0
	this.Layer_1_1.isAttachedToMask = 0
	this.Layer_1_1.layerDepth = 0
	this.Layer_1_1.layerIndex = 0
	this.Layer_1_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,3.4,13.1), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_1 = new lib.Path_1_Layer_1_1();
	this.Layer_1_1.name = "Layer_1_1";
	this.Layer_1_1.parent = this;
	this.Layer_1_1.setTransform(11.2,23.8,1,1,0,0,0,11.2,23.8);
	this.Layer_1_1.depth = 0;
	this.Layer_1_1.isAttachedToCamera = 0
	this.Layer_1_1.isAttachedToMask = 0
	this.Layer_1_1.layerDepth = 0
	this.Layer_1_1.layerIndex = 0
	this.Layer_1_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,22.4,47.6), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_0_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(3.1,10.6,1,1,0,0,0,3.1,10.6);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,6.1,21.2), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_1 = new lib.Path_Layer_1_1();
	this.Layer_1_1.name = "Layer_1_1";
	this.Layer_1_1.parent = this;
	this.Layer_1_1.setTransform(12.6,6.2,1,1,0,0,0,12.6,6.2);
	this.Layer_1_1.depth = 0;
	this.Layer_1_1.isAttachedToCamera = 0
	this.Layer_1_1.isAttachedToMask = 0
	this.Layer_1_1.layerDepth = 0
	this.Layer_1_1.layerIndex = 0
	this.Layer_1_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,25.2,12.5), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhNB7Ig3hxIgDiEIAmAAIDpATIAABxIgvBxg");
	mask.setTransform(21.2,52.825);

	// Layer_3_obj_
	this.Layer_3 = new lib.Clip_Group_9_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(21.2,27.6,1,1,0,0,0,21.2,27.6);
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

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(7.6,40.5,27.199999999999996,14.700000000000003), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgCCOIhiADIg2hHIALgzQASABARgUQAigogChtIBKgIIBJAKIgCAaQgCAfADAbQAKBSA6AAIARAqIhHBZg");
	mask.setTransform(20.275,62.475);

	// Layer_3_obj_
	this.Layer_3 = new lib.Clip_Group_7_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(20.9,29.1,1,1,0,0,0,20.9,29.1);
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

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(4.8,47.1,30.999999999999996,10.899999999999999), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlAL2QiTg+hyhyQhyhyg+iTQhBiaAAinQAAimBBiaQA+iTByhyQByhyCTg+QCahBCmAAQCnAACaBBQCTA+ByByQByByA+CTQBBCaAACmQAACnhBCaQg+CThyByQhyByiTA+QiaBBinAAQimAAiahBg");
	mask.setTransform(82.3,82.3);

	// Layer_3_obj_
	this.Layer_3 = new lib.Clip_Group_6_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(86.3,94.3,1,1,0,0,0,86.3,94.3);
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

	// Layer_1_obj_
	this.Layer_1 = new lib.Clip_Group_6_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(82.3,82.3,1,1,0,0,0,82.3,82.3);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 1
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0,0,164.6,164.6), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkGJ8QkHhthukHQhtkHBtkHQBskHEIhtQEHhuEHBtQEHBuBtEHQBtEGhsEHQhsEHkIBtQiEA3iEAAQiCAAiEg2g");
	mask.setTransform(68.8063,68.8062);

	// Layer_3_obj_
	this.Layer_3 = new lib.Clip_Group_5_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(69,82,1,1,0,0,0,69,82);
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

	// Layer_1_obj_
	this.Layer_1 = new lib.Clip_Group_5_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(68.9,68.8,1,1,0,0,0,68.9,68.8);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 1
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(-0.2,-0.2,138.1,138), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak7L+QichAh1h3Qhyhzg+iWQg+iVgCiiQgCimBAicQBAibB3h2QBzhxCWg/QCWg+ChgCQCmgBCcBAQCdBAB2B3QByByA+CWQA+CWABCiQACCmhBCcQhACbh3B2QhzBxiWA/QiWA+ihABIgJABQiiAAiXg/g");
	mask.setTransform(82.925,82.8513);

	// Layer_3_obj_
	this.Layer_3 = new lib.Clip_Group_4_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(79.9,98.3,1,1,0,0,0,79.9,98.3);
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

	// Layer_1_obj_
	this.Layer_1 = new lib.Clip_Group_4_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(82.9,82.9,1,1,0,0,0,82.9,82.9);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 1
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,165.9,165.7), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlzOHQi3hMiLiMQiGiIhJiwQhKixgCi+QgCjEBMi3QBMi4CNiKQCHiGCxhKQCwhJC+gCQDEgCC4BMQC3BMCLCMQCFCIBKCwQBJCxACC+QACDEhLC3QhMC4iMCLQiICGiwBJQixBKi+ACIgIAAQjAAAi0hLg");
	mask.setTransform(97.675,97.7489);

	// Layer_3_obj_
	this.Layer_3 = new lib.Clip_Group_3_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(98.4,114.5,1,1,0,0,0,98.4,114.5);
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

	// Layer_1_obj_
	this.Layer_1 = new lib.Clip_Group_3_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(97.7,97.8,1,1,0,0,0,97.7,97.8);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 1
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,195.4,195.5), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkXKlQiKg5hnhpQhlhlg2iFQg3iFgCiOQgBiTA5iJQA5iKBqhoQBlhkCFg3QCEg3COgBQCTgBCJA4QCKA5BoBpQBlBmA3CEQA3CFABCOQABCTg6CJQg4CKhpBoQhmBkiEA3QiFA3iPABIgFAAQiQAAiHg3g");
	mask.setTransform(73.225,73.225);

	// Layer_3_obj_
	this.Layer_3 = new lib.Clip_Group_2_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(74.2,83,1,1,0,0,0,74.2,83);
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

	// Layer_1_obj_
	this.Layer_1 = new lib.Clip_Group_2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(73.2,73.2,1,1,0,0,0,73.2,73.2);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 1
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,146.5,146.5), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkNKNQkPhyhwkNQhxkOBxkNQA4iGBlhjQBjhiB/g0QENhxEOBxQEPBxBwEOQBxEOhxEOQhxEOkOBwQiHA4iHAAQiGAAiHg4g");
	mask.setTransform(70.725,70.75);

	// Layer_3_obj_
	this.Layer_3 = new lib.Clip_Group_1_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(71,83.3,1,1,0,0,0,71,83.3);
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

	// Layer_1_obj_
	this.Layer_1 = new lib.Clip_Group_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(70.7,70.8,1,1,0,0,0,70.7,70.8);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 1
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(-0.2,-0.2,141.89999999999998,141.89999999999998), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlGMYQihhCh6h7Qh2h3hAibQhAibgBinQgCisBDihQBCihB8h6QB2h1CbhBQCbhACngCQCsgBChBCQCiBDB5B7QB2B3BACbQBACbABCnQACCshCChQhDChh7B6Qh3B1ibBBQibBAinACIgHAAQipAAidhCg");
	mask.setTransform(85.8,85.775);

	// Layer_3_obj_
	this.Layer_3 = new lib.Clip_Group_0_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(83.8,98.2,1,1,0,0,0,83.8,98.2);
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

	// Layer_1_obj_
	this.Layer_1 = new lib.Clip_Group_0_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(85.8,85.8,1,1,0,0,0,85.8,85.8);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 1
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0.1,0,171.5,171.6), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AkOKRQiGg4hlhmQhhhjg1iBQhxkPBxkPQA4iGBmhlQBjhhCAg1QCBg2CKgBQCOgBCGA4QCFA4BlBmQBiBjA1CAQA1CBABCKQACCOg4CGQhyEQkQBxQiAA2iLAAIgGABQiLAAiCg3g");
	mask_1.setTransform(71.0582,71.1511);

	// Layer_3_obj_
	this.Layer_3 = new lib.Clip_Group_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(69.5,95.2,1,1,0,0,0,69.5,95.2);
	this.Layer_3.depth = 0;
	this.Layer_3.isAttachedToCamera = 0
	this.Layer_3.isAttachedToMask = 0
	this.Layer_3.layerDepth = 0
	this.Layer_3.layerIndex = 0
	this.Layer_3.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_3).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.Clip_Group_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(71,71.2,1,1,0,0,0,71,71.2);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 1
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(-0.2,0,142.5,142.3), null);


(lib.Clip_Group_8_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4116E").s().p("AgkCeIgbh3IAgjEIA5AAIAmDcIgUBfg");
	this.shape.setTransform(70.1,125.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D4116E").s().p("AgbA8IggglIA9hSIA6BSIgeAlg");
	this.shape_1.setTransform(69.725,102.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1BA8DF").s().p("AhyD8IB0n3IBxA5IhECTIAnBMIiODfg");
	this.shape_2.setTransform(86.025,114.7);

	this.instance = new lib.Path_1_1();
	this.instance.parent = this;
	this.instance.setTransform(86.95,116.15,1,1,0,0,0,11.2,23.8);
	this.instance.alpha = 0.2188;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#127EA6").s().p("AjWDfICPjfIgnhMIBEiSIDIB3IAMAWQAPAcAKAiQAgBugUCEg");
	this.shape_3.setTransform(101.8215,117.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1BA8DF").s().p("AA0D8IibjfIA3hMIhEiTIBrg5IB+H3g");
	this.shape_4.setTransform(54.725,114.7);

	this.instance_1 = new lib.Path_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(53.5,115.6,1,1,0,0,0,11.4,24.2);
	this.instance_1.alpha = 0.2188;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#127EA6").s().p("AjTDfQgMiVAdhlQAJggAMgXIALgRIDRh7IBECSIg3BMICcDfg");
	this.shape_5.setTransform(38.3244,117.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6E6E6").s().p("AgjEIIh+n3IAagYIAiA0QAtAzA4gCQA5gDArgxQAWgZALgYIAdAYIh1H3g");
	this.shape_6.setTransform(69.975,113.525);

	this.instance_2 = new lib.Path_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(48.85,41.65,1,1,0,0,0,3.1,10.6);
	this.instance_2.alpha = 0.25;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#25282B").s().p("AjlBVQgThdAxgeQgFgHgBgPQgDgeANgrIAegPQArgPA+AAQAUAAA6gFQA0gFAcACQBYAHAeBKQAdBKgNBeQgHAvgMAhQgJgGgLgZQgVgwgFhaQgLAOgjALQhFAVh0gUQgZgLgbgHQg0gPgGARIgBBRQgFBTgVAKQgTgpgJgvg");
	this.shape_7.setTransform(69.1958,34.9942);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F3F3F3").s().p("AhAgIQgFgCBDABIBDABQgiATghAAQgiAAgcgTg");
	this.shape_8.setTransform(69.9541,72.2438);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#795337").s().p("AgEA+QgGgBgOgFQgJgEARg5IASg5IARA3QAPA3gJAIQgSAHgJAAIgCgBg");
	this.shape_9.setTransform(70.2497,59.4018);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#25282B").s().p("AgKAZQgEgKAAgPQAAgOAEgKQAFgLAFAAQAHAAAEALQAFAKgBAOQABAPgFAKQgEALgHAAQgFAAgFgLg");
	this.shape_10.setTransform(78.85,51.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#25282B").s().p("AgKAZQgEgKAAgPQAAgOAEgLQAEgKAGAAQAGAAAFAKQAEALAAAOQAAAOgEALQgFALgGAAQgGAAgEgLg");
	this.shape_11.setTransform(61.525,51.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8B623C").s().p("AhQEAQgigOghgYIgbgVQgUgPgKjUQgFhrgChoQATgrBhALQAxAGAtAOQCmgkAjBEQAMAZgBAtIgCBMQACBFgMBWQgMBTgNAZQgKATgdATQgOAKgNAFQgtAjg3AAQgoAAgwgUg");
	this.shape_12.setTransform(69.601,56.339);

	this.instance_3 = new lib.ClipGroup_9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(69.65,65.85,1,1,0,0,0,21.2,32.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8B623C").s().p("AhNB7Ig3hxIgDiEIAnAAIDoATIAABxIgwBxg");
	this.shape_13.setTransform(69.65,86.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.instance_3},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_2},{t:this.shape_6},{t:this.shape_5},{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_8_Layer_3, null, null);


(lib.Clip_Group_1_0_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3F3F3").s().p("Ag5AgQgqg/ATgeQAGgKALgFQAGgCAEgBIAGARQAJAVANASQApA4BHAHQgUAYgcAKQgOAGgNAAQgmAAgfgwg");
	this.shape.setTransform(56.6267,111.2798);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3F3F3").s().p("AglBKQgRgGgRgPIgNgNQBGgHAqg4QANgSAJgVIAGgRIAJAFQAKAHAFAKQARAiglA3QgfAwgmAAQgNAAgPgGg");
	this.shape_1.setTransform(73.8201,111.2798);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3CB9E4").s().p("AgLAjQgFgPAAgUQAAgTAFgPQAFgNAGAAQAHAAAFANQAFAPAAATQAAAVgFAOQgFANgHAAQgGAAgFgNg");
	this.shape_2.setTransform(34.9,60.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#127EA6").s().p("AgNAjQgGgPAAgUQAAgTAGgPQAFgNAIAAQAIAAAGANQAGAPAAATQAAAUgGAPQgGANgIAAQgIAAgFgNg");
	this.shape_3.setTransform(35.2,60.7);

	this.instance = new lib.Path_2_1();
	this.instance.parent = this;
	this.instance.setTransform(36.65,57.05,1,1,0,0,0,1.7,6.5);
	this.instance.alpha = 0.7109;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3CB9E4").s().p("AgBALQgOgCgKgGQgKgEABgEQABgFALgBQAKgCAOADQAOACAKAFQAKAEgBAFQgBAFgLABIgIABIgQgCg");
	this.shape_4.setTransform(56.9033,81.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#25282B").s().p("Ag2AAQgOgPgJgRIgEgPIAMgEQAJAzBHAfQAlAQAiAFQhbgGgtgug");
	this.shape_5.setTransform(47.55,75.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ABB7AF").s().p("AgWBJQgKgeAAgrQAAgpAKgfQAKgeAMAAQAOAAAJAeQAKAeAAAqQAAArgKAeQgJAegOAAQgMAAgKgeg");
	this.shape_6.setTransform(38.175,60.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#25282B").s().p("AgeBKQgNgeAAgsQAAgrANgeQANgfARAAQASAAANAfQANAeAAArQAAAsgNAeQgNAfgSAAQgRAAgNgfg");
	this.shape_7.setTransform(39.3,60.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#25282B").s().p("Aj3B9QgPhaAzhOQAkg3AhgQQAxgWAkgIQBWgRBfAfQBeAeAZB3QAMA7gGA2QAAgFgEgTQgJglgag/QgehMhhgYQhggZhiAtQhRAmgaBbQgNAtAEAnIgJAKg");
	this.shape_8.setTransform(64.4507,37.7458);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C15B22").s().p("AjkDyQgjiMgFgdQgojiCJh9QCPiDBzA6QA7AdAdA2QA/ATAWBKQALAlgBAhQAXDggqB+QgVA/gZASQAQiQgdi5IggidQgHA6g2AcQgRAJgUAEIgQADQiEAXg4BVQgoA9AFBMQADAtgTBKQgJAlgKAbQAGgngWhZg");
	this.shape_9.setTransform(65.1209,48.5957);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F3F3F3").s().p("Ag+gYIB8AAQgTAkgfAKQgIADgHAAQghAAgagxg");
	this.shape_10.setTransform(67.3,79.0624);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8BF9B").s().p("AAABBIgWgEIAWh9IALA0QALA2ABAMQAAALgSAAIgFAAg");
	this.shape_11.setTransform(67.3005,64.0833);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A4F55").s().p("AgKAZQgFgKABgPQgBgOAFgKQAEgLAGAAQAGAAAFALQAEAKABAOQgBAPgEAKQgFALgGAAQgGAAgEgLg");
	this.shape_12.setTransform(75.85,58.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A4F55").s().p("AgKAZQgFgKABgPQgBgOAFgKQAEgLAGAAQAGAAAFALQAEAKAAAOQAAAPgEAKQgFALgGAAQgGAAgEgLg");
	this.shape_13.setTransform(57.05,59.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8BF9B").s().p("AAKBuQgqgsgNhCQgNhBATgsIAWgfIAEBvQANB4AzAxQgTgIgWgWg");
	this.shape_14.setTransform(50.3859,71.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FCCCA8").s().p("AhBEHQhDgkgigrQgjgrgFhFIABg9QADglAYguQAyhbBvgjQBvgiAnggQASgQgCgJIAUBLQAWBOAJAMQAMAQgHB1QgIB5gTAgQgPAbgeAeQg+A7hMAMQgagJgigSg");
	this.shape_15.setTransform(66.1942,61.5125);

	this.instance_1 = new lib.ClipGroup_7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(66.25,77.55,1,1,0,0,0,20.9,39);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FCCCA8").s().p("AgCCOIhiADIg2hHIALgzQASABARgUQAigogChtIBKgIIBJAKIgCAaQgCAfADAbQAKBSA6AAIARAqIhHBZg");
	this.shape_16.setTransform(65.625,101.025);

	this.instance_2 = new lib.Path_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(64.8,85.9,1,1,0,0,0,12.6,6.2);
	this.instance_2.alpha = 0.6289;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C15B22").s().p("AATA3Qgwg4gWgsIgMgiIBvAlIAPBSQADAogOAAQgLAAgWgZg");
	this.shape_17.setTransform(54.9775,84.6343);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C15B22").s().p("AhWEJQA/gpAghGQBCiLiRiKIgqAGIg9gbIAogrQAagZAdgWQA6grAOASIgFAdQgGAkgKAgIAtAcQA0AmAlAtQB1CRhYCrg");
	this.shape_18.setTransform(82.9807,105.0116);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1BA8DF").s().p("AmcCjQAAjMBKhRQAXgaAcgJQAOgFAJAAIIwAAQBIAAAdCiQAPBSABBRg");
	this.shape_19.setTransform(65.3,119.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.instance_2},{t:this.shape_16},{t:this.instance_1},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_1_0_Layer_3, null, null);


(lib.ClipGroup_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("EgRoAppQoIjcmRmQQmSmRjcoGQjkoZAApNQAApLDkoZQDcoIGSmQQGRmQIIjbQIbjkJNAAQJOAAIbDkQIIDbGSGQQGRGQDcIIQDkIZAAJLQAAJNjkIZQjcIGmRGRQmSGQoIDcQobDjpOAAQpNAAobjjg");
	mask_2.setTransform(290,289.2);

	// Layer_3_obj_
	this.Layer_3_1 = new lib.Clip_Group_Layer_3_1();
	this.Layer_3_1.name = "Layer_3_1";
	this.Layer_3_1.parent = this;
	this.Layer_3_1.setTransform(342.9,392.2,1,1,0,0,0,342.9,392.2);
	this.Layer_3_1.depth = 0;
	this.Layer_3_1.isAttachedToCamera = 0
	this.Layer_3_1.isAttachedToMask = 0
	this.Layer_3_1.layerDepth = 0
	this.Layer_3_1.layerIndex = 0
	this.Layer_3_1.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_3_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_3_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(103.7,169.8,476.3,408.59999999999997), null);


(lib.Path_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_1 = new lib.Path_0_Layer_1_1();
	this.Layer_1_1.name = "Layer_1_1";
	this.Layer_1_1.parent = this;
	this.Layer_1_1.setTransform(144.1,179.9,1,1,0,0,0,144.1,179.9);
	this.Layer_1_1.depth = 0;
	this.Layer_1_1.isAttachedToCamera = 0
	this.Layer_1_1.isAttachedToMask = 0
	this.Layer_1_1.layerDepth = 0
	this.Layer_1_1.layerIndex = 0
	this.Layer_1_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_1, new cjs.Rectangle(0,0,288.2,359.8), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_2 = new lib.Path_Layer_1_2();
	this.Layer_1_2.name = "Layer_1_2";
	this.Layer_1_2.parent = this;
	this.Layer_1_2.setTransform(249.3,281.6,1,1,0,0,0,249.3,281.6);
	this.Layer_1_2.depth = 0;
	this.Layer_1_2.isAttachedToCamera = 0
	this.Layer_1_2.isAttachedToMask = 0
	this.Layer_1_2.layerDepth = 0
	this.Layer_1_2.layerIndex = 0
	this.Layer_1_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,498.8,563.2), null);


(lib.Clip_Group_Layer_3_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Path_5();
	this.instance.parent = this;
	this.instance.setTransform(335.9,430.35,1,1,0,0,0,249.3,281.6);
	this.instance.alpha = 0.3008;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgrAyIBIgcQANgGAFgIQAEgIgEgLQgHgQgMgDQgLgEgWAIIg6AYIgKgaIB0guIAIAUIgOAJIAAACQAKABAJAJQAHAGAGAOQARApgrAQIhMAfg");
	this.shape_16.setTransform(1501.9038,204.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgcA6QgWgIgKgaQgGgRACgOQADgQALgMQAMgNARgGQAcgLAVAIQAWAIALAbQAJAYgKAVQgKAWgcALQgQAGgNAAQgLAAgKgEgAgLgdQgoAQALAdQAMAdAogPQAngQgLgdQgGgPgNgDIgIgBQgLAAgNAFg");
	this.shape_17.setTransform(1497.1006,190.9918);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhTASIB0gtIAKAZIh0AtgAA/gMQgFgCgDgHQgCgGACgGQACgFAHgCQAGgDAFACQAGADACAGQADAHgDAFQgCAFgGADIgHABIgFgBg");
	this.shape_18.setTransform(1495.3818,180.5806);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag9AxIgHgNQgOgjAmgOIA+gYIgGgQIALgFIAPAOIAdgBIAGAPIgbAKIAOAhIgTAHIgNggIg+AXQgKAEgCAGQgCAGADAHQAEALAGAGIgTAIg");
	this.shape_19.setTransform(1491.7847,174.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgtAvIAPgLIAAgBQgNgDgJgIQgHgHgFgOQgHgQAGgOQAFgNARgGQASgIAPAKQAOALALAaIAIATIAHgCQALgFADgFQAEgJgEgKQgEgJgGgIIgMgNIAOgPQAIAGAIAMQAJANACAHQAJAYgFANQgGAPgVAJIhOAegAghgUQgIADgCAGQgCAGADAIQAFAOALAGQALAEAOgEIAJgFIgHgPQgGgPgJgGQgEgEgGAAIgJACg");
	this.shape_20.setTransform(1486.1041,163.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhKAxIANgLIAAgBQgWgFgJgXQgJgWALgRQAMgTAcgLQAcgLAWAGQAUAGAIAWQAJAXgMASIABABIATgJIArgQIAJAYIikBAgAgogiQgUAHgHALQgIALAGANQAGAPALAEQALADAUgHIADgBQAWgJAGgLQAGgKgGgPQgFgNgMgDIgIgBQgMAAgNAGg");
	this.shape_21.setTransform(1484.0897,150.8691);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgcA6QgWgIgKgaQgGgRACgOQADgQALgMQALgNASgHQAcgKAVAIQAWAIALAbQAJAYgKAVQgLAWgbAKQgRAHgNAAQgLAAgJgEgAgLgdQgoAQALAdQAMAdAogPQAngQgLgdQgGgPgNgDIgIgBQgLAAgNAFg");
	this.shape_22.setTransform(1476.0006,137.0205);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdBUIBHgcQAOgFAEgIQAFgIgEgKQgGgPgMgDQgLgDgTAHIg9AYIgKgZIBHgbQAOgGAEgHQAFgIgEgKQgGgPgMgDQgNgDgUAJIg6AWIgKgZIB0gtIAIATIgOAKIAAABQAKABAJAIQAIAIAEALQALAbgPAQIABABQALADAIAGQAIAGAFANQAJAVgIAOQgHAOgVAIIhLAeg");
	this.shape_23.setTransform(1468.9008,120.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgcA6QgVgIgLgbQgGgRACgNQADgRALgLQALgNASgHQAbgLAWAJQAWAIALAbQAJAYgKAVQgLAWgbAKQgRAHgNAAQgLAAgJgEgAgLgdQgoAQALAdQAMAdAogPQAngQgLgdQgHgQgMgDIgIAAQgLAAgNAFg");
	this.shape_24.setTransform(1462.7006,103.0082);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag0AtIgJgRQgKgcAKgSQAKgUAdgLQAegMAUAIQAWAJALAbQAHARgBASIgXAAQAAgSgEgJQgMgfgnAQQgTAHgIAMQgHALAGAPQAHARANALIgVAIQgIgFgEgHg");
	this.shape_25.setTransform(1458.5375,91.7859);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag0AtIgJgRQgKgbAKgTQAKgUAdgLQAegMAUAIQAWAJALAbQAHARgBASIgXAAQAAgSgEgJQgMgfgnAQQgUAHgHANQgHAKAGAPQAGAQAOAMIgVAIQgIgFgEgHg");
	this.shape_26.setTransform(1454.325,81.0359);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgwAuIAlggIgXg6IgxABIgLgaICygDIALAbIiEB2gAgJgtIAQAtIA8gyg");
	this.shape_27.setTransform(1449.675,69.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F1F1F1").s().p("Ak6QPMAAAggdIJ0AAMAAAAgdg");
	this.shape_28.setTransform(230.75,205.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D2116E").s().p("AnqVOMAAAgqbIPVAAMAAAAqbg");
	this.shape_29.setTransform(230.775,215.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F1F1F1").s().p("Ak6QPMAAAggdIJ1AAMAAAAgdg");
	this.shape_30.setTransform(336.725,205.725);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1BA6DD").s().p("AnqVOMAAAgqbIPVAAMAAAAqbg");
	this.shape_31.setTransform(336.725,215.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F1F1F1").s().p("AqltPIJIjqIMDeJIpJDqg");
	this.shape_32.setTransform(479,196.125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#127EA4").s().p("Au/w2IOQlsMAPvAnZIuQFsg");
	this.shape_33.setTransform(482.3,207.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A9B5AD").s().p("AjCAGIAAgMIGFAAIAAAMg");
	this.shape_34.setTransform(1173.325,265.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A9B5AD").s().p("EglbAAGIAAgMMBK3AAAIAAAMg");
	this.shape_35.setTransform(1393.425,265.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#08536F").s().p("AjCCXIAAktIGFAAIAAEtg");
	this.shape_36.setTransform(1173.325,271.25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#127EA4").s().p("EgtTACXQgCiEAQipMBaOAAAIALEtg");
	this.shape_37.setTransform(289.9581,371.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_Layer_3_6, null, null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_7_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(157.5,70.6,1,1,0,0,0,157.5,70.6);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,315,141.2), null);


(lib.Path_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_2 = new lib.Path_0_Layer_1_2();
	this.Layer_1_2.name = "Layer_1_2";
	this.Layer_1_2.parent = this;
	this.Layer_1_2.setTransform(31.4,10.7,1,1,0,0,0,31.4,10.7);
	this.Layer_1_2.depth = 0;
	this.Layer_1_2.isAttachedToCamera = 0
	this.Layer_1_2.isAttachedToMask = 0
	this.Layer_1_2.layerDepth = 0
	this.Layer_1_2.layerIndex = 0
	this.Layer_1_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_2, new cjs.Rectangle(0,0,62.9,21.5), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_3 = new lib.Path_Layer_1_3();
	this.Layer_1_3.name = "Layer_1_3";
	this.Layer_1_3.parent = this;
	this.Layer_1_3.setTransform(88.8,48.1,1,1,0,0,0,88.8,48.1);
	this.Layer_1_3.depth = 0;
	this.Layer_1_3.isAttachedToCamera = 0
	this.Layer_1_3.isAttachedToMask = 0
	this.Layer_1_3.layerDepth = 0
	this.Layer_1_3.layerIndex = 0
	this.Layer_1_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,177.5,96.2), null);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_1_2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(51.2,15.2,1,1,0,0,0,51.2,15.2);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,102.5,30.3), null);


(lib.Path_1_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_1_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(34.6,22.9,1,1,0,0,0,34.6,22.9);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1_1, new cjs.Rectangle(0,0,69.2,45.9), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_1_0_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(67.8,64.3,1,1,0,0,0,67.8,64.3);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,135.6,128.8), null);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_2 = new lib.Path_1_Layer_1_2();
	this.Layer_1_2.name = "Layer_1_2";
	this.Layer_1_2.parent = this;
	this.Layer_1_2.setTransform(36.2,39.8,1,1,0,0,0,36.2,39.8);
	this.Layer_1_2.depth = 0;
	this.Layer_1_2.isAttachedToCamera = 0
	this.Layer_1_2.isAttachedToMask = 0
	this.Layer_1_2.layerDepth = 0
	this.Layer_1_2.layerIndex = 0
	this.Layer_1_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,0,72.5,79.5), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("EgRoApwQoIjcmRmRQmSmSjcoIQjkobAApOQAApNDkobQDcoIGSmRQGRmSIIjcQIbjkJNAAQJOAAIbDkQIIDcGSGSQGRGRDcIIQDkIbAAJNQAAJOjkIbQjcIImRGSQmSGRoIDcQobDkpOAAQpNAAobjkg");
	mask_3.setTransform(290,290);

	// Layer_3_obj_
	this.Layer_3_2 = new lib.Clip_Group_Layer_3_2();
	this.Layer_3_2.name = "Layer_3_2";
	this.Layer_3_2.parent = this;
	this.Layer_3_2.setTransform(331.3,483.7,1,1,0,0,0,331.3,483.7);
	this.Layer_3_2.depth = 0;
	this.Layer_3_2.isAttachedToCamera = 0
	this.Layer_3_2.isAttachedToMask = 0
	this.Layer_3_2.layerDepth = 0
	this.Layer_3_2.layerIndex = 0
	this.Layer_3_2.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_3_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_3_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(81.2,333.3,498.8,246.7), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Path_3_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(169.6,155,1,1,0,0,0,169.6,155);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,339.3,310), null);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_2 = new lib.Path_2_Layer_1_2();
	this.Layer_1_2.name = "Layer_1_2";
	this.Layer_1_2.parent = this;
	this.Layer_1_2.setTransform(175.6,48.9,1,1,0,0,0,175.6,48.9);
	this.Layer_1_2.depth = 0;
	this.Layer_1_2.isAttachedToCamera = 0
	this.Layer_1_2.isAttachedToMask = 0
	this.Layer_1_2.layerDepth = 0
	this.Layer_1_2.layerIndex = 0
	this.Layer_1_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(0,0,351.1,97.8), null);


(lib.Path_1_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_1 = new lib.Path_1_0_Layer_1_1();
	this.Layer_1_1.name = "Layer_1_1";
	this.Layer_1_1.parent = this;
	this.Layer_1_1.setTransform(190.3,161.1,1,1,0,0,0,190.3,161.1);
	this.Layer_1_1.depth = 0;
	this.Layer_1_1.isAttachedToCamera = 0
	this.Layer_1_1.isAttachedToMask = 0
	this.Layer_1_1.layerDepth = 0
	this.Layer_1_1.layerIndex = 0
	this.Layer_1_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0_1, new cjs.Rectangle(0,0,380.8,322.3), null);


(lib.Path_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_3 = new lib.Path_1_Layer_1_3();
	this.Layer_1_3.name = "Layer_1_3";
	this.Layer_1_3.parent = this;
	this.Layer_1_3.setTransform(140.5,103.2,1,1,0,0,0,140.5,103.2);
	this.Layer_1_3.depth = 0;
	this.Layer_1_3.isAttachedToCamera = 0
	this.Layer_1_3.isAttachedToMask = 0
	this.Layer_1_3.layerDepth = 0
	this.Layer_1_3.layerIndex = 0
	this.Layer_1_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_4, new cjs.Rectangle(0,0,281.1,206.5), null);


(lib.Path_0_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_3 = new lib.Path_0_Layer_1_3();
	this.Layer_1_3.name = "Layer_1_3";
	this.Layer_1_3.parent = this;
	this.Layer_1_3.setTransform(130,100.4,1,1,0,0,0,130,100.4);
	this.Layer_1_3.depth = 0;
	this.Layer_1_3.isAttachedToCamera = 0
	this.Layer_1_3.isAttachedToMask = 0
	this.Layer_1_3.layerDepth = 0
	this.Layer_1_3.layerIndex = 0
	this.Layer_1_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_3, new cjs.Rectangle(0,0,260.1,200.9), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_4 = new lib.Path_Layer_1_4();
	this.Layer_1_4.name = "Layer_1_4";
	this.Layer_1_4.parent = this;
	this.Layer_1_4.setTransform(134.2,27.1,1,1,0,0,0,134.2,27.1);
	this.Layer_1_4.depth = 0;
	this.Layer_1_4.isAttachedToCamera = 0
	this.Layer_1_4.isAttachedToMask = 0
	this.Layer_1_4.layerDepth = 0
	this.Layer_1_4.layerIndex = 0
	this.Layer_1_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,268.3,54.2), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("EgRnApvQoIjdmRmRQmRmRjcoIQjkoaAApOQAApMDkobQDcoIGRmRQGRmRIIjcQIbjkJMAAQJOAAIaDkQIIDbGRGSQGRGRDdIIQDjIaAAJNQAAJOjjIaQjcIImSGRQmRGSoIDcQoaDjpOAAQpMAAobjjg");
	mask_4.setTransform(289.825,289.825);

	// Layer_3_obj_
	this.Layer_3_3 = new lib.Clip_Group_Layer_3_3();
	this.Layer_3_3.name = "Layer_3_3";
	this.Layer_3_3.parent = this;
	this.Layer_3_3.setTransform(385.6,394.3,1,1,0,0,0,385.6,394.3);
	this.Layer_3_3.depth = 0;
	this.Layer_3_3.isAttachedToCamera = 0
	this.Layer_3_3.isAttachedToMask = 0
	this.Layer_3_3.layerDepth = 0
	this.Layer_3_3.layerIndex = 0
	this.Layer_3_3.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_3_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_3_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(152,157.4,427.70000000000005,422.30000000000007), null);


(lib.Path_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_1 = new lib.Path_3_Layer_1_1();
	this.Layer_1_1.name = "Layer_1_1";
	this.Layer_1_1.parent = this;
	this.Layer_1_1.setTransform(38.9,43.9,1,1,0,0,0,38.9,43.9);
	this.Layer_1_1.depth = 0;
	this.Layer_1_1.isAttachedToCamera = 0
	this.Layer_1_1.isAttachedToMask = 0
	this.Layer_1_1.layerDepth = 0
	this.Layer_1_1.layerIndex = 0
	this.Layer_1_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_2, new cjs.Rectangle(0,0,77.8,87.8), null);


(lib.Path_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_3 = new lib.Path_2_Layer_1_3();
	this.Layer_1_3.name = "Layer_1_3";
	this.Layer_1_3.parent = this;
	this.Layer_1_3.setTransform(239.8,80.8,1,1,0,0,0,239.8,80.8);
	this.Layer_1_3.depth = 0;
	this.Layer_1_3.isAttachedToCamera = 0
	this.Layer_1_3.isAttachedToMask = 0
	this.Layer_1_3.layerDepth = 0
	this.Layer_1_3.layerIndex = 0
	this.Layer_1_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_3, new cjs.Rectangle(0.2,0,479.3,161.5), null);


(lib.Path_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_4 = new lib.Path_1_Layer_1_4();
	this.Layer_1_4.name = "Layer_1_4";
	this.Layer_1_4.parent = this;
	this.Layer_1_4.setTransform(74.5,68.5,1,1,0,0,0,74.5,68.5);
	this.Layer_1_4.depth = 0;
	this.Layer_1_4.isAttachedToCamera = 0
	this.Layer_1_4.isAttachedToMask = 0
	this.Layer_1_4.layerDepth = 0
	this.Layer_1_4.layerIndex = 0
	this.Layer_1_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_5, new cjs.Rectangle(0,0,149.2,137.1), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_5 = new lib.Path_Layer_1_5();
	this.Layer_1_5.name = "Layer_1_5";
	this.Layer_1_5.parent = this;
	this.Layer_1_5.setTransform(215.9,39.4,1,1,0,0,0,215.9,39.4);
	this.Layer_1_5.depth = 0;
	this.Layer_1_5.isAttachedToCamera = 0
	this.Layer_1_5.isAttachedToMask = 0
	this.Layer_1_5.layerDepth = 0
	this.Layer_1_5.layerIndex = 0
	this.Layer_1_5.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,431.9,78.9), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_6 = new lib.Path_Layer_1_6();
	this.Layer_1_6.name = "Layer_1_6";
	this.Layer_1_6.parent = this;
	this.Layer_1_6.setTransform(132.8,193.3,1,1,0,0,0,132.8,193.3);
	this.Layer_1_6.depth = 0;
	this.Layer_1_6.isAttachedToCamera = 0
	this.Layer_1_6.isAttachedToMask = 0
	this.Layer_1_6.layerDepth = 0
	this.Layer_1_6.layerIndex = 0
	this.Layer_1_6.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,265.6,386.8), null);


(lib.ClipGroup_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("EgRoApwQoIjcmRmRQmSmSjcoIQjkobAApOQAApNDkobQDcoIGSmRQGRmSIIjcQIbjkJNAAQJOAAIbDkQIIDcGRGSQGSGRDcIIQDkIbAAJNQAAJOjkIbQjcIImSGSQmRGRoIDcQobDkpOAAQpNAAobjkg");
	mask_5.setTransform(289.975,290);

	// Layer_3_obj_
	this.Layer_3_4 = new lib.Clip_Group_Layer_3_4();
	this.Layer_3_4.name = "Layer_3_4";
	this.Layer_3_4.parent = this;
	this.Layer_3_4.setTransform(383.1,373.9,1,1,0,0,0,383.1,373.9);
	this.Layer_3_4.depth = 0;
	this.Layer_3_4.isAttachedToCamera = 0
	this.Layer_3_4.isAttachedToMask = 0
	this.Layer_3_4.layerDepth = 0
	this.Layer_3_4.layerIndex = 0
	this.Layer_3_4.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_3_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_3_4).wait(1));

	// Layer_1_obj_
	this.Layer_1_1 = new lib.Clip_Group_Layer_1_2();
	this.Layer_1_1.name = "Layer_1_1";
	this.Layer_1_1.parent = this;
	this.Layer_1_1.setTransform(289.9,290,1,1,0,0,0,289.9,290);
	this.Layer_1_1.depth = 0;
	this.Layer_1_1.isAttachedToCamera = 0
	this.Layer_1_1.isAttachedToMask = 0
	this.Layer_1_1.layerDepth = 0
	this.Layer_1_1.layerIndex = 1
	this.Layer_1_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13, new cjs.Rectangle(0,0,580,580), null);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_1 = new lib.Path_4_Layer_1_1();
	this.Layer_1_1.name = "Layer_1_1";
	this.Layer_1_1.parent = this;
	this.Layer_1_1.setTransform(137.1,161,1,1,0,0,0,137.1,161);
	this.Layer_1_1.depth = 0;
	this.Layer_1_1.isAttachedToCamera = 0
	this.Layer_1_1.isAttachedToMask = 0
	this.Layer_1_1.layerDepth = 0
	this.Layer_1_1.layerIndex = 0
	this.Layer_1_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0,274.3,322.1), null);


(lib.Path_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_2 = new lib.Path_3_Layer_1_2();
	this.Layer_1_2.name = "Layer_1_2";
	this.Layer_1_2.parent = this;
	this.Layer_1_2.setTransform(79.5,94.8,1,1,0,0,0,79.5,94.8);
	this.Layer_1_2.depth = 0;
	this.Layer_1_2.isAttachedToCamera = 0
	this.Layer_1_2.isAttachedToMask = 0
	this.Layer_1_2.layerDepth = 0
	this.Layer_1_2.layerIndex = 0
	this.Layer_1_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_3, new cjs.Rectangle(0,0,159,189.5), null);


(lib.Path_2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_4 = new lib.Path_2_Layer_1_4();
	this.Layer_1_4.name = "Layer_1_4";
	this.Layer_1_4.parent = this;
	this.Layer_1_4.setTransform(88.8,90.5,1,1,0,0,0,88.8,90.5);
	this.Layer_1_4.depth = 0;
	this.Layer_1_4.isAttachedToCamera = 0
	this.Layer_1_4.isAttachedToMask = 0
	this.Layer_1_4.layerDepth = 0
	this.Layer_1_4.layerIndex = 0
	this.Layer_1_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_4, new cjs.Rectangle(0,0,177.6,181), null);


(lib.Path_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_5 = new lib.Path_1_Layer_1_5();
	this.Layer_1_5.name = "Layer_1_5";
	this.Layer_1_5.parent = this;
	this.Layer_1_5.setTransform(127.4,114,1,1,0,0,0,127.4,114);
	this.Layer_1_5.depth = 0;
	this.Layer_1_5.isAttachedToCamera = 0
	this.Layer_1_5.isAttachedToMask = 0
	this.Layer_1_5.layerDepth = 0
	this.Layer_1_5.layerIndex = 0
	this.Layer_1_5.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_6, new cjs.Rectangle(0,0,254.8,228.1), null);


(lib.Path_0_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_4 = new lib.Path_0_Layer_1_4();
	this.Layer_1_4.name = "Layer_1_4";
	this.Layer_1_4.parent = this;
	this.Layer_1_4.setTransform(90.5,70.6,1,1,0,0,0,90.5,70.6);
	this.Layer_1_4.depth = 0;
	this.Layer_1_4.isAttachedToCamera = 0
	this.Layer_1_4.isAttachedToMask = 0
	this.Layer_1_4.layerDepth = 0
	this.Layer_1_4.layerIndex = 0
	this.Layer_1_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_4, new cjs.Rectangle(0,0,181.1,141.3), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Group_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(104.1,120.7,1,1,0,0,0,104.1,120.7);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,208.2,241.5), null);


(lib.Path_2_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_5 = new lib.Path_2_Layer_1_5();
	this.Layer_1_5.name = "Layer_1_5";
	this.Layer_1_5.parent = this;
	this.Layer_1_5.setTransform(7.7,8.8,1,1,0,0,0,7.7,8.8);
	this.Layer_1_5.depth = 0;
	this.Layer_1_5.isAttachedToCamera = 0
	this.Layer_1_5.isAttachedToMask = 0
	this.Layer_1_5.layerDepth = 0
	this.Layer_1_5.layerIndex = 0
	this.Layer_1_5.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_5, new cjs.Rectangle(0,0,15.4,17.7), null);


(lib.Path_1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_6 = new lib.Path_1_Layer_1_6();
	this.Layer_1_6.name = "Layer_1_6";
	this.Layer_1_6.parent = this;
	this.Layer_1_6.setTransform(29.8,44.5,1,1,0,0,0,29.8,44.5);
	this.Layer_1_6.depth = 0;
	this.Layer_1_6.isAttachedToCamera = 0
	this.Layer_1_6.isAttachedToMask = 0
	this.Layer_1_6.layerDepth = 0
	this.Layer_1_6.layerIndex = 0
	this.Layer_1_6.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_7, new cjs.Rectangle(0,0,59.5,89), null);


(lib.Path_0_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_5 = new lib.Path_0_Layer_1_5();
	this.Layer_1_5.name = "Layer_1_5";
	this.Layer_1_5.parent = this;
	this.Layer_1_5.setTransform(54.7,76.3,1,1,0,0,0,54.7,76.3);
	this.Layer_1_5.depth = 0;
	this.Layer_1_5.isAttachedToCamera = 0
	this.Layer_1_5.isAttachedToMask = 0
	this.Layer_1_5.layerDepth = 0
	this.Layer_1_5.layerIndex = 0
	this.Layer_1_5.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_5, new cjs.Rectangle(0,0,109.4,152.7), null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_7 = new lib.Path_Layer_1_7();
	this.Layer_1_7.name = "Layer_1_7";
	this.Layer_1_7.parent = this;
	this.Layer_1_7.setTransform(65,68,1,1,0,0,0,65,68);
	this.Layer_1_7.depth = 0;
	this.Layer_1_7.isAttachedToCamera = 0
	this.Layer_1_7.isAttachedToMask = 0
	this.Layer_1_7.layerDepth = 0
	this.Layer_1_7.layerIndex = 0
	this.Layer_1_7.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,130.1,136.1), null);


(lib.Path_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_1 = new lib.Path_7_Layer_1_1();
	this.Layer_1_1.name = "Layer_1_1";
	this.Layer_1_1.parent = this;
	this.Layer_1_1.setTransform(26.1,2.2,1,1,0,0,0,26.1,2.2);
	this.Layer_1_1.depth = 0;
	this.Layer_1_1.isAttachedToCamera = 0
	this.Layer_1_1.isAttachedToMask = 0
	this.Layer_1_1.layerDepth = 0
	this.Layer_1_1.layerIndex = 0
	this.Layer_1_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7_1, new cjs.Rectangle(0,0,52.2,4.5), null);


(lib.Path_0_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_6 = new lib.Path_0_Layer_1_6();
	this.Layer_1_6.name = "Layer_1_6";
	this.Layer_1_6.parent = this;
	this.Layer_1_6.setTransform(106.4,51.9,1,1,0,0,0,106.4,51.9);
	this.Layer_1_6.depth = 0;
	this.Layer_1_6.isAttachedToCamera = 0
	this.Layer_1_6.isAttachedToMask = 0
	this.Layer_1_6.layerDepth = 0
	this.Layer_1_6.layerIndex = 0
	this.Layer_1_6.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_6, new cjs.Rectangle(0,0,212.9,103.8), null);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_8 = new lib.Path_Layer_1_8();
	this.Layer_1_8.name = "Layer_1_8";
	this.Layer_1_8.parent = this;
	this.Layer_1_8.setTransform(165.5,99.5,1,1,0,0,0,165.5,99.5);
	this.Layer_1_8.depth = 0;
	this.Layer_1_8.isAttachedToCamera = 0
	this.Layer_1_8.isAttachedToMask = 0
	this.Layer_1_8.layerDepth = 0
	this.Layer_1_8.layerIndex = 0
	this.Layer_1_8.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_8).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,331.1,199.1), null);


(lib.ClipGroup_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("EgRoApwQoIjcmRmRQmSmSjcoIQjkobAApOQAApNDkobQDcoIGSmRQGRmSIIjcQIbjkJNAAQJOAAIbDkQIIDcGSGSQGRGRDcIIQDkIbAAJNQAAJOjkIbQjcIImRGSQmSGRoIDcQobDkpOAAQpNAAobjkg");
	mask_6.setTransform(290,290);

	// Layer_3_obj_
	this.Layer_3_5 = new lib.Clip_Group_Layer_3_5();
	this.Layer_3_5.name = "Layer_3_5";
	this.Layer_3_5.parent = this;
	this.Layer_3_5.setTransform(379.9,398.1,1,1,0,0,0,379.9,398.1);
	this.Layer_3_5.depth = 0;
	this.Layer_3_5.isAttachedToCamera = 0
	this.Layer_3_5.isAttachedToMask = 0
	this.Layer_3_5.layerDepth = 0
	this.Layer_3_5.layerIndex = 0
	this.Layer_3_5.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_3_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_3_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14, new cjs.Rectangle(87.6,150.8,492.4,429.2), null);


(lib.Scene_1_clipboard_image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// clipboard_image
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(412.85,276.35,1,1,0,0,0,66.7,12.4);
	this.instance.alpha = 0.3984;

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(412.25,290.95,1,1,0,0,0,66.3,3.3);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.CompoundPath_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(414.15,244,1,1,0,0,0,13.6,12.6);
	this.instance_2.alpha = 0.5195;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ABB7AF").s().p("AqbFbIALlIQACgoAhgcQAhgdAuAAIE2ACIADhCQADhaBJg/QBIg+BiAAQBjABBEBAQBEBAgDBaIgDBCIE7ADQAuABAfAdQAfAdgBAoIgLFIgAgvjIQgaAXgCAgQgBAhAZAXQAZAXAjABQAkAAAbgXQAagXABggQABghgYgYQgZgXgkAAQgkAAgaAXg");
	this.shape.setTransform(412.7766,258.5248);

	this.instance_3 = new lib.Path_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(402.5,423.45,1,1,0,0,0,110,145.6);
	this.instance_3.alpha = 0.0781;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3F3F3").s().p("Ax/WdMABogtMMAiXAASMgBoAtNg");
	this.shape_1.setTransform(407.675,423.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#127EA6").s().p("AQRY+MgiTgATQg4AAgmgkQgnglACgyMABpgt0QACgyApgkQApgkA4ABMAiTAASQA4ABAmAjQAnAlgCAyMgBpAt0QgCAzgpAkQgpAjg3AAIgBAAg");
	this.shape_2.setTransform(407.675,423.4);

	this.instance_4 = new lib.CompoundPath();
	this.instance_4.parent = this;
	this.instance_4.setTransform(413.7,407.95,1,1,0,0,0,128.6,180.2);
	this.instance_4.alpha = 0.2617;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.shape_2,p:{x:407.675,y:423.4}},{t:this.shape_1,p:{x:407.675,y:423.4}},{t:this.instance_3,p:{x:402.5,y:423.45}},{t:this.shape,p:{x:412.7766,y:258.5248}},{t:this.instance_2,p:{x:414.15,y:244}},{t:this.instance_1,p:{x:412.25,y:290.95}},{t:this.instance,p:{x:412.85,y:276.35}}]}).to({state:[{t:this.shape_2,p:{x:154.825,y:359.05}},{t:this.shape_1,p:{x:154.825,y:359.05}},{t:this.instance_3,p:{x:149.65,y:359.1}},{t:this.shape,p:{x:159.9266,y:194.1748}},{t:this.instance_2,p:{x:161.3,y:179.65}},{t:this.instance_1,p:{x:159.4,y:226.6}},{t:this.instance,p:{x:160,y:212}}]},1).to({state:[{t:this.shape_2,p:{x:651.425,y:584.6}},{t:this.shape_1,p:{x:651.425,y:584.6}},{t:this.instance_3,p:{x:646.25,y:584.65}},{t:this.shape,p:{x:656.5266,y:419.7248}},{t:this.instance_2,p:{x:657.9,y:405.2}},{t:this.instance_1,p:{x:656,y:452.15}},{t:this.instance,p:{x:656.6,y:437.55}}]},1).to({state:[{t:this.shape_2,p:{x:647.225,y:628.75}},{t:this.shape_1,p:{x:647.225,y:628.75}},{t:this.instance_3,p:{x:642.05,y:628.8}},{t:this.shape,p:{x:652.3266,y:463.8748}},{t:this.instance_2,p:{x:653.7,y:449.35}},{t:this.instance_1,p:{x:651.8,y:496.3}},{t:this.instance,p:{x:652.4,y:481.7}}]},1).to({state:[{t:this.shape_2,p:{x:631.325,y:269.15}},{t:this.shape_1,p:{x:631.325,y:269.15}},{t:this.instance_3,p:{x:626.15,y:269.2}},{t:this.shape,p:{x:636.4266,y:104.2748}},{t:this.instance_2,p:{x:637.8,y:89.75}},{t:this.instance_1,p:{x:635.9,y:136.7}},{t:this.instance,p:{x:636.5,y:122.1}}]},1).to({state:[{t:this.shape_2,p:{x:639.725,y:380.95}},{t:this.shape_1,p:{x:639.725,y:380.95}},{t:this.instance_3,p:{x:634.55,y:381}},{t:this.shape,p:{x:644.8266,y:216.0748}},{t:this.instance_2,p:{x:646.2,y:201.55}},{t:this.instance_1,p:{x:644.3,y:248.5}},{t:this.instance,p:{x:644.9,y:233.9}}]},1).to({state:[{t:this.shape_2,p:{x:643.025,y:374.65}},{t:this.shape_1,p:{x:643.025,y:374.65}},{t:this.instance_3,p:{x:637.85,y:374.7}},{t:this.shape,p:{x:648.1266,y:209.7748}},{t:this.instance_2,p:{x:649.5,y:195.25}},{t:this.instance_1,p:{x:647.6,y:242.2}},{t:this.instance,p:{x:648.2,y:227.6}}]},1).to({state:[{t:this.shape_2,p:{x:161.125,y:304.8}},{t:this.shape_1,p:{x:161.125,y:304.8}},{t:this.instance_3,p:{x:155.95,y:304.85}},{t:this.shape,p:{x:166.2266,y:139.9248}},{t:this.instance_2,p:{x:167.6,y:125.4}},{t:this.instance_1,p:{x:165.7,y:172.35}},{t:this.instance,p:{x:166.3,y:157.75}}]},1).to({state:[{t:this.shape_2,p:{x:570.175,y:633.65}},{t:this.shape_1,p:{x:570.175,y:633.65}},{t:this.instance_3,p:{x:565,y:633.7}},{t:this.shape,p:{x:575.2766,y:468.7748}},{t:this.instance_2,p:{x:576.65,y:454.25}},{t:this.instance_1,p:{x:574.75,y:501.2}},{t:this.instance,p:{x:575.35,y:486.6}}]},1).to({state:[{t:this.shape_2,p:{x:199.975,y:635.65}},{t:this.shape_1,p:{x:199.975,y:635.65}},{t:this.instance_3,p:{x:194.8,y:635.7}},{t:this.shape,p:{x:205.0766,y:470.7748}},{t:this.instance_2,p:{x:206.45,y:456.25}},{t:this.instance_1,p:{x:204.55,y:503.2}},{t:this.instance,p:{x:205.15,y:488.6}}]},1).to({state:[{t:this.shape_2,p:{x:163.825,y:618.1}},{t:this.shape_1,p:{x:163.825,y:618.1}},{t:this.instance_3,p:{x:158.65,y:618.15}},{t:this.shape,p:{x:168.9266,y:453.2248}},{t:this.instance_2,p:{x:170.3,y:438.7}},{t:this.instance_1,p:{x:168.4,y:485.65}},{t:this.instance,p:{x:169,y:471.05}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.ClipGroup_8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkGJ8QkHhshukIQhskHBskHQBtkHEHhtQEHhtEHBsQEHBuBuEHQBtEGhtEHQhsEHkIBtQiEA3iEAAQiDAAiDg2g");
	mask.setTransform(68.8,68.7813);

	// Layer_3_obj_
	this.Layer_3 = new lib.Clip_Group_8_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(70,79.3,1,1,0,0,0,70,79.3);
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

	// Layer_1_obj_
	this.Layer_1 = new lib.Clip_Group_8_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(68.8,68.8,1,1,0,0,0,68.8,68.8);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 1
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_1, new cjs.Rectangle(-0.2,-0.2,138,138.1), null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj9JoQj/hqhrj/Qhqj+Bqj+QBqj/D/hrQD+hqD/BqQD+BqBrD/QBqD+hqD/QhpD+kABqQiAA2h/AAQh+AAh/g1g");
	mask.setTransform(66.725,66.7063);

	// Layer_3_obj_
	this.Layer_3 = new lib.Clip_Group_1_0_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(65.3,73.8,1,1,0,0,0,65.3,73.8);
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

	// Layer_1_obj_
	this.Layer_1 = new lib.Clip_Group_1_0_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(66.7,66.7,1,1,0,0,0,66.7,66.7);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 1
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, new cjs.Rectangle(-0.2,-0.2,133.89999999999998,133.79999999999998), null);


(lib.ClipGroup_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("EgRoApwQoIjcmSmRQmRmSjcoIQjkobAApOQAApNDkobQDcoIGRmRQGSmSIIjcQIbjkJNAAQJOAAIbDkQIIDcGSGSQGRGRDcIIQDkIbAAJNQAAJOjkIbQjcIImRGSQmSGRoIDcQobDkpOAAQpNAAobjkg");
	mask_7.setTransform(300.65,290);

	// Layer_3_obj_
	this.Layer_3_6 = new lib.Clip_Group_Layer_3_6();
	this.Layer_3_6.name = "Layer_3_6";
	this.Layer_3_6.parent = this;
	this.Layer_3_6.setTransform(816.5,387.2,1,1,0,0,0,816.5,387.2);
	this.Layer_3_6.depth = 0;
	this.Layer_3_6.isAttachedToCamera = 0
	this.Layer_3_6.isAttachedToMask = 0
	this.Layer_3_6.layerDepth = 0
	this.Layer_3_6.layerIndex = 0
	this.Layer_3_6.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_3_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_3_6).wait(1));

	// Layer_1_obj_
	this.Layer_1_2 = new lib.Clip_Group_Layer_1_1();
	this.Layer_1_2.name = "Layer_1_2";
	this.Layer_1_2.parent = this;
	this.Layer_1_2.setTransform(300.7,290,1,1,0,0,0,300.7,290);
	this.Layer_1_2.depth = 0;
	this.Layer_1_2.isAttachedToCamera = 0
	this.Layer_1_2.isAttachedToMask = 0
	this.Layer_1_2.layerDepth = 0
	this.Layer_1_2.layerIndex = 1
	this.Layer_1_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15, new cjs.Rectangle(10.7,0,580,580), null);


(lib.Scene_1_images = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// images
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(396.1,130.75,1,1,0,0,0,97.7,103.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E5E5E5","#C8C8C9"],[0,1],16.7,21.8,-17.1,-11.5).s().p("AAXEkQg0gagTg4IhulEQgTg4Aag1QAag0A4gTIAkgMIDIJRIgjAMQgYAIgXAAQggAAgegPg");
	this.shape.setTransform(610.5904,524.3217);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#E4E4E3"],[0,1],-4.2,-21,9.7,24.3).s().p("AiqkcIAkgNQA4gUA1AaQA0AZAUA4IBzFCQAUA3gaA2QgZA1g4AUIgjANg");
	this.shape_1.setTransform(623.5146,522.3354);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#127EA6").s().p("AE6KnIuBjUQhUgTguhKQguhKAUhUICvrjQAUhUBKguQBJguBUAUIOCDUQBTAUAuBKQAuBKgUBUIivLjQgUBUhJAuQg0Agg4AAQgZAAgZgHg");
	this.shape_2.setTransform(630.1273,526.5023);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#91A4AD").s().p("AAaAYIhIgYIAIgXIBVAbIgEALQgBAGgGACIgFABIgFAAg");
	this.shape_3.setTransform(528.8,635.4444);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#91A4AD").s().p("AgkACIAJgZIBAAWIgJAYg");
	this.shape_4.setTransform(469.15,610.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#617D8A").s().p("AgkADIAJgZIBAAVIgJAZg");
	this.shape_5.setTransform(466.45,618.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#556E79").s().p("Ajbg5IAJgaIGuCNIgJAag");
	this.shape_6.setTransform(493.9,618.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#38474F").s().p("Ajbg5IAJgZIGuCMIgJAZg");
	this.shape_7.setTransform(491.225,626.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#38474F").s().p("ABmBBIiAgqQhqgjgnggQgHgFAEgJQAFgJAKAAQAKAAAKAGIAMAJQAEAEAAAIQAnAVBBAUICAAqQANAFAKgLQAJgKgNgGIAwAQQgMASgUAIQgLAFgMAAQgJAAgKgDg");
	this.shape_8.setTransform(493.4523,630.7831);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#465A63").s().p("AgUgEQgDgCABgEQACgDADAAIAoAHIgHAUg");
	this.shape_9.setTransform(402.2775,593.0969);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#617D8A").s().p("AgjgFQgcgQgVgTIABgFICoBBIgIAaQhJgcgngXg");
	this.shape_10.setTransform(412.425,598.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#91A4AD").s().p("AhbgTIABgFQAdgDAgADQAuAFBLATIgIAaIivgtg");
	this.shape_11.setTransform(413.7,594.7058);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#79909B").s().p("AgtAEQgdgPgUgTIAIgYQAdgDAfADQAuAFBLAUIgcBWQhIgdgogYg");
	this.shape_12.setTransform(413.375,597.7308);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#38474F").s().p("AjZg+IAJgaQEpBtCBAqIgJAaQiNgvkdhog");
	this.shape_13.setTransform(441.875,609.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#556E79").s().p("AjcgzIAIgaQE0BYB+AqIgJAZQidgzkUhOg");
	this.shape_14.setTransform(444.2,602.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#465A63").s().p("AjmggIAchWQE0BZB9ApIgjBrQiNgukdhpg");
	this.shape_15.setTransform(443.225,606.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#79909B").s().p("AgxArIAkhqIA/AVIgkBqg");
	this.shape_16.setTransform(467.8,614.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B0BEC5").s().p("AAYAjIhIgYIAPguIBIAYQAGACACAFQADAEgCAFIgHAWQgCAFgFADIgFABIgFgBg");
	this.shape_17.setTransform(529.0031,634.2694);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#617D8A").s().p("AAGAVQgXgCgrgOIAIgZQAzARAPADQAXADAYgHIgGASQgXAHgTAAIgHAAg");
	this.shape_18.setTransform(518.475,634.3863);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#91A4AD").s().p("AAMAJQgOgHgzgPIAJgaQAsAOATANQASAMARAVIgGATQgPgUgVgLg");
	this.shape_19.setTransform(520.375,628.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#79909B").s().p("AAAA+QgXgCgrgOIAjhrQArAPAUANQASALARAWIgSA3QgXAHgTAAIgHAAg");
	this.shape_20.setTransform(519.05,630.2863);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#465A63").s().p("AjogQIAkhrIGtCMIgjBrg");
	this.shape_21.setTransform(492.55,622.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E0E0E0").s().p("AgKATQgHgEgCgIQgCgHAEgHQAEgHAIgCIASgFQgIACgEAHQgDAHACAHQABAIAHAEQAGAEAHgBIgRAEIgEABQgGAAgEgDg");
	this.shape_22.setTransform(358.8442,696.5558);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BDBDBD").s().p("AgqAZQgHgEgCgIQgCgIAEgGQAEgHAIgCIBBgQQAIgCAHAEQAHAEACAIQACAIgEAGQgEAHgIACIhBARIgFAAQgFAAgFgDg");
	this.shape_23.setTransform(360.65,696.2974);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9E9E9E").s().p("Ag7AdQgHgEgCgIQgCgIAFgHQADgGAJgCIBigYQAHgCAIAEQAGAEADAIQACAIgFAHQgDAGgJACIhhAZIgFAAQgGAAgFgDg");
	this.shape_24.setTransform(360.65,696.2974);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#757575").s().p("AhIAhQgIgEgBgIQgDgIAFgHQAEgGAIgCIB9ggQAJgCAGAEQAIAEABAIQADAIgFAIQgEAFgIADIh+AfIgEABQgGAAgEgDg");
	this.shape_25.setTransform(360.65,696.2974);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E0E0E0").s().p("AgLATQgHgEgCgIQgCgHAEgHQAEgHAIgCIASgFQgIACgEAHQgDAHACAHQABAIAHAEQAHAEAIgCIgTAFIgEABQgFAAgFgDg");
	this.shape_26.setTransform(356.1692,685.5558);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BDBDBD").s().p("AgqAZQgHgEgCgIQgCgIAEgGQAEgHAIgCIBBgRQAIgBAHAEQAHAEACAIQADAIgFAGQgEAHgIACIhBAQIgFABQgFAAgFgDg");
	this.shape_27.setTransform(357.8889,685.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9E9E9E").s().p("Ag6AeQgHgFgDgIQgCgIAFgHQAEgFAIgDIBigYQAIgCAHADQAHAFACAHQACAJgEAHQgEAFgJADIhhAZIgFAAQgGAAgEgCg");
	this.shape_28.setTransform(357.8776,685.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#757575").s().p("AhJAhQgGgEgDgIQgBgIAEgHQAEgGAIgCIB+ggQAHgCAIAEQAGAEADAJQABAIgEAHQgEAGgIACIh9AfIgFABQgGAAgFgDg");
	this.shape_29.setTransform(357.9,685.2974);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E0E0E0").s().p("AgLATQgHgEgCgIQgCgHAEgHQAEgHAJgCIARgFQgHACgEAHQgEAHACAHQACAIAGAEQAHAEAHgBIgSAEIgEABQgFAAgFgDg");
	this.shape_30.setTransform(353.3792,674.5946);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BDBDBD").s().p("AgqAZQgHgEgCgIQgCgIAEgGQAEgHAIgCIBBgRQAIgCAHAFQAHAEACAIQACAIgEAGQgEAHgIACIhBAQIgFABQgFAAgFgDg");
	this.shape_31.setTransform(355.1276,674.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9E9E9E").s().p("Ag7AdQgGgDgDgJQgCgIAFgHQAEgFAIgDIBigYQAIgDAHAFQAHAEACAIQACAIgFAHQgEAGgIACIhiAZIgFAAQgFAAgFgDg");
	this.shape_32.setTransform(355.125,674.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#757575").s().p("AhIAhQgIgFgBgIQgCgIAEgHQAEgFAIgDIB9gfQAIgCAHAEQAIAEACAIQACAIgFAHQgEAGgIACIh+AgIgFABQgFAAgEgDg");
	this.shape_33.setTransform(355.15,674.3139);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E0E0E0").s().p("AgLATQgHgEgCgIQgCgHAEgHQAEgHAIgCIATgFQgIACgEAHQgEAHACAHQABAIAHAEQAHAEAHgBIgSAEIgEABQgFAAgFgDg");
	this.shape_34.setTransform(350.6292,663.5946);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#BDBDBD").s().p("AgqAZQgHgEgCgIQgCgIAEgGQAEgHAIgCIBBgRQAIgCAHAFQAHAEACAIQACAIgEAGQgEAHgIACIhBAQIgGABQgFAAgEgDg");
	this.shape_35.setTransform(352.375,663.3139);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9E9E9E").s().p("Ag7AdQgGgEgDgIQgCgIAFgHQAEgGAIgCIBigZQAIgCAHAFQAHAEACAIQACAIgFAHQgEAGgIACIhiAYIgFABQgFAAgFgDg");
	this.shape_36.setTransform(352.375,663.3026);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#757575").s().p("AhIAhQgHgEgCgIQgCgIAEgHQAEgGAIgDIB9gfQAIgCAIAEQAGAEADAIQACAIgFAHQgEAGgIACIh9AgIgGABQgFAAgEgDg");
	this.shape_37.setTransform(352.3974,663.3139);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E0E0E0").s().p("AgLATQgHgEgCgIQgCgHAEgHQAEgHAIgCIASgFQgHACgEAHQgEAHACAHQABAIAHAEQAHAEAHgBIgSAEIgEABQgFAAgFgDg");
	this.shape_38.setTransform(347.8792,652.5958);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BDBDBD").s().p("AgqAZQgHgEgCgIQgCgIAEgGQAEgHAIgCIBBgRQAIgCAHAFQAHAEACAIQACAIgEAGQgEAHgIACIhBAQIgGABQgFAAgEgDg");
	this.shape_39.setTransform(349.625,652.3139);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9E9E9E").s().p("Ag7AdQgHgEgCgIQgCgIAFgHQAEgGAIgCIBigZQAIgCAHAFQAHAEACAIQACAIgFAHQgEAGgIACIhiAZIgFAAQgFAAgFgDg");
	this.shape_40.setTransform(349.625,652.325);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#757575").s().p("AhIAhQgHgEgCgIQgCgIAEgHQAEgGAIgCIB9ggQAIgCAHAEQAHAEACAIQADAIgFAHQgEAGgIACIh9AgIgFABQgGAAgEgDg");
	this.shape_41.setTransform(349.6363,652.325);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E0E0E0").s().p("AgLATQgHgEgCgIQgCgHAEgHQAEgHAIgCIASgFQgHACgEAHQgEAHACAHQABAIAHAEQAHAEAIgCIgTAFIgEABQgFAAgFgDg");
	this.shape_42.setTransform(345.1192,641.6183);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BDBDBD").s().p("AgqAZQgHgEgCgIQgCgIAEgGQAEgHAIgCIBBgRQAIgCAHAFQAHAEACAIQACAIgEAGQgEAHgIACIhBAQIgGABQgFAAgEgDg");
	this.shape_43.setTransform(346.875,641.3139);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9E9E9E").s().p("Ag7AdQgHgEgCgIQgCgIAFgHQAEgGAIgCIBigZQAIgCAHAFQAHAEACAIQACAIgFAHQgEAGgIACIhiAZIgFAAQgFAAgFgDg");
	this.shape_44.setTransform(346.875,641.325);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#757575").s().p("AhIAhQgHgEgDgIQgCgIAFgHQAEgGAIgCIB9ggQAIgCAHAEQAHAEACAIQADAIgFAHQgEAGgIACIh9AgIgFABQgFAAgFgDg");
	this.shape_45.setTransform(346.8639,641.325);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E0E0E0").s().p("AgLATQgHgEgCgIQgCgHAEgHQAEgHAIgCIASgFQgHACgFAHQgDAHACAHQABAIAHAEQAHAEAIgCIgTAFIgEABQgFAAgFgDg");
	this.shape_46.setTransform(342.3692,630.6183);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BDBDBD").s().p("AgqAZQgHgEgCgIQgCgIAEgGQAEgHAIgCIBBgQQAIgCAHAEQAHAEACAIQACAIgEAGQgEAHgIACIhBARIgFAAQgFAAgFgDg");
	this.shape_47.setTransform(344.1224,630.3474);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#9E9E9E").s().p("Ag7AdQgHgEgCgIQgCgIAEgHQAFgGAIgCIBhgZQAIgCAIAFQAGAEADAIQACAIgFAHQgEAGgIACIhiAZIgFAAQgFAAgFgDg");
	this.shape_48.setTransform(344.1224,630.325);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#757575").s().p("AhIAhQgHgEgCgIQgDgIAFgHQAEgGAIgCIB+ggQAIgCAGAEQAIAEABAIQADAIgFAHQgEAGgIACIh9AgIgFABQgGAAgEgDg");
	this.shape_49.setTransform(344.1,630.325);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E0E0E0").s().p("AgKATQgHgEgCgIQgCgHAEgHQAEgHAIgCIASgFQgIACgEAHQgDAHACAHQABAIAHAEQAGAEAHgBIgRAEIgEABQgGAAgEgDg");
	this.shape_50.setTransform(339.5442,619.6058);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#BDBDBD").s().p("AgqAZQgHgEgCgIQgCgIAEgGQAEgHAIgCIBBgQQAIgCAHAEQAHAEACAIQACAIgEAGQgEAHgIACIhBARIgFAAQgFAAgFgDg");
	this.shape_51.setTransform(341.35,619.3474);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#9E9E9E").s().p("Ag7AdQgHgEgCgIQgCgIAEgHQAEgGAIgCIBigZQAIgCAHAFQAHAEACAIQADAIgFAHQgEAGgIACIhiAZIgEAAQgGAAgFgDg");
	this.shape_52.setTransform(341.3613,619.325);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#757575").s().p("AhJAhQgHgEgCgIQgBgIAEgHQAEgGAIgCIB+ggQAIgCAHAEQAHAEACAIQABAIgEAIQgEAFgIADIh+AfIgEABQgGAAgFgDg");
	this.shape_53.setTransform(341.35,619.3474);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E0E0E0").s().p("AgLATQgHgEgCgIQgCgHAEgHQAEgHAIgCIASgFQgIACgEAHQgDAHACAHQABAIAHAEQAHAEAIgCIgTAFIgEABQgFAAgFgDg");
	this.shape_54.setTransform(336.8692,608.6058);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#BDBDBD").s().p("AgqAZQgHgEgCgIQgCgIAEgGQAEgHAIgCIBBgRQAIgBAHAEQAHAEACAIQADAIgFAGQgEAHgIACIhBAQIgFABQgFAAgFgDg");
	this.shape_55.setTransform(338.5889,608.35);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#9E9E9E").s().p("Ag6AeQgHgFgDgIQgCgIAFgHQAEgFAIgDIBigYQAIgCAHADQAHAFACAHQACAJgEAHQgEAFgJADIhhAZIgGAAQgFAAgEgCg");
	this.shape_56.setTransform(338.5776,608.35);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#757575").s().p("AhIAhQgIgEgBgIQgDgIAFgHQAEgGAIgCIB9ggQAJgCAGAEQAIAFABAIQADAIgFAHQgEAGgIACIh+AfIgEABQgGAAgEgDg");
	this.shape_57.setTransform(338.6,608.3474);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E0E0E0").s().p("AgLATQgHgEgCgIQgCgHAEgHQAFgHAIgCIARgFQgHACgEAHQgEAHACAHQACAIAGAEQAHAEAIgCIgTAFIgEABQgFAAgFgDg");
	this.shape_58.setTransform(334.0917,597.6308);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#BDBDBD").s().p("AgqAZQgHgEgCgIQgCgIAEgGQAEgHAIgCIBBgRQAIgCAHAFQAHAEACAIQADAIgFAGQgEAHgIACIhBAQIgFABQgGAAgEgDg");
	this.shape_59.setTransform(335.8389,597.35);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#9E9E9E").s().p("Ag7AdQgGgEgDgIQgCgIAFgHQAEgGAIgCIBigZQAIgCAHAEQAHAFACAIQACAIgEAHQgFAGgIACIhiAYIgFABQgFAAgFgDg");
	this.shape_60.setTransform(335.8276,597.3613);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#757575").s().p("AhJAhQgGgFgDgIQgBgIAEgHQAEgFAIgDIB+gfQAHgCAIAEQAGAEADAIQABAIgEAHQgEAGgIACIh9AgIgGABQgFAAgFgDg");
	this.shape_61.setTransform(335.85,597.3613);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E0E0E0").s().p("AgLATQgHgEgCgIQgCgHAEgHQAEgHAJgCIARgFQgHACgEAHQgEAHACAHQABAIAHAEQAHAEAHgBIgSAEIgEABQgFAAgFgDg");
	this.shape_62.setTransform(331.3292,586.6446);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#BDBDBD").s().p("AgqAZQgHgEgCgIQgCgIAEgGQAEgHAIgCIBBgRQAIgCAHAFQAHAEACAIQACAIgEAGQgEAHgIACIhBAQIgFABQgGAAgEgDg");
	this.shape_63.setTransform(333.075,586.3526);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#9E9E9E").s().p("Ag7AdQgGgEgDgIQgCgIAFgHQAEgGAIgCIBigZQAIgCAHAFQAHAEACAIQACAIgFAHQgEAGgIACIhiAYIgFABQgFAAgFgDg");
	this.shape_64.setTransform(333.075,586.3526);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#757575").s().p("AhIAhQgHgEgCgIQgCgIAEgHQAEgGAIgDIB9gfQAIgCAIAEQAGAEADAIQACAIgFAHQgEAGgIACIh9AgIgGABQgFAAgEgDg");
	this.shape_65.setTransform(333.0974,586.3639);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E0E0E0").s().p("AgLATQgHgEgCgIQgCgHAEgHQAEgHAIgCIATgFQgIACgEAHQgEAHACAHQABAIAHAEQAHAEAHgBIgSAEIgEABQgFAAgFgDg");
	this.shape_66.setTransform(328.5792,575.6446);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#BDBDBD").s().p("AgqAZQgHgEgCgIQgCgIAEgGQAEgHAIgCIBBgRQAIgCAHAFQAHAEACAIQACAIgEAGQgEAHgIACIhBAQIgGABQgFAAgEgDg");
	this.shape_67.setTransform(330.325,575.3639);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#9E9E9E").s().p("Ag7AdQgHgEgCgIQgCgIAFgHQAEgGAIgCIBigZQAIgCAHAFQAHAEACAIQACAIgFAHQgEAGgIACIhiAZIgFAAQgFAAgFgDg");
	this.shape_68.setTransform(330.325,575.375);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#757575").s().p("AhIAhQgHgEgCgIQgCgIAEgHQAEgGAIgCIB9ggQAIgCAHAEQAHAEACAIQADAIgFAHQgEAGgIACIh9AgIgGABQgFAAgEgDg");
	this.shape_69.setTransform(330.3363,575.3639);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E0E0E0").s().p("AgLATQgHgEgCgIQgCgHAEgHQAEgHAIgCIASgFQgHACgEAHQgEAHACAHQABAIAHAEQAHAEAIgCIgTAFIgEABQgFAAgFgDg");
	this.shape_70.setTransform(325.8192,564.6683);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#BDBDBD").s().p("AgqAZQgHgEgCgIQgCgIAEgGQAEgHAIgCIBBgRQAIgCAHAFQAHAEACAIQACAIgEAGQgEAHgIACIhBAQIgGABQgFAAgEgDg");
	this.shape_71.setTransform(327.575,564.3639);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#9E9E9E").s().p("Ag7AdQgHgEgCgIQgCgIAFgHQAEgGAIgCIBigZQAIgCAHAFQAHAEACAIQACAIgFAHQgEAGgIACIhiAZIgFAAQgFAAgFgDg");
	this.shape_72.setTransform(327.575,564.375);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#757575").s().p("AhIAhQgHgEgDgIQgCgIAFgHQAEgGAIgCIB9ggQAIgCAHAEQAHAEACAIQADAIgFAHQgEAGgIACIh9AgIgFABQgFAAgFgDg");
	this.shape_73.setTransform(327.5639,564.375);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E0E0E0").s().p("AgLATQgHgEgCgIQgCgHAEgHQAEgHAIgCIASgFQgHACgFAHQgDAHACAHQABAIAHAEQAHAEAIgCIgTAFIgEABQgFAAgFgDg");
	this.shape_74.setTransform(323.0692,553.6683);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#BDBDBD").s().p("AgqAZQgHgEgCgIQgCgIAEgGQAEgHAIgCIBBgQQAIgCAHAEQAHAEACAIQACAIgEAGQgEAHgIACIhBARIgFAAQgFAAgFgDg");
	this.shape_75.setTransform(324.8224,553.3974);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#9E9E9E").s().p("Ag7AdQgHgEgCgIQgCgIAEgHQAFgGAIgCIBigZQAIgCAHAFQAHAEACAIQACAIgFAHQgEAGgIACIhiAZIgFAAQgFAAgFgDg");
	this.shape_76.setTransform(324.8224,553.375);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#757575").s().p("AhJAhQgGgEgDgIQgBgIAEgHQAEgGAIgCIB9ggQAIgCAIAEQAGAEADAIQABAIgEAHQgEAGgIACIh+AgIgEABQgGAAgFgDg");
	this.shape_77.setTransform(324.8,553.375);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#6B6B6B").s().p("AgGAYQgKgGgCgLQgDgLAGgJQAGgLAKgDIAGgBQgIAFgFAJQgEAKADAIQACAKAHAGQAIAGAKgBIgFACIgIABQgHAAgGgEg");
	this.shape_78.setTransform(330.875,551.65);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#6B6B6B").s().p("AgFAYQgLgFgCgMQgDgKAGgKQAGgKAKgEIAGgBQgIAFgFAJQgEAKADAIQACAKAHAGQAIAGAKgBIgFADIgHABQgIAAgFgFg");
	this.shape_79.setTransform(333.625,562.65);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#6B6B6B").s().p("AgFAYQgKgFgDgMQgDgKAGgKQAGgLAKgCIAGgBQgIAEgEAJQgFAKADAIQACAKAHAGQAIAGAKAAIgFACIgGAAQgIAAgGgEg");
	this.shape_80.setTransform(336.375,573.6368);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#6B6B6B").s().p("AgGAYQgJgGgDgLQgDgKAFgLQAHgKAKgCIAGgBQgIAEgFAJQgEAJACAJQADAKAHAGQAJAGAJAAIgFACIgHAAQgHAAgHgEg");
	this.shape_81.setTransform(339.15,584.6368);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#6B6B6B").s().p("AgGAYQgKgGgDgLQgCgLAGgKQAGgKAKgCIAGgBQgIAEgFAJQgEAJACAJQADAKAHAGQAIAGAKAAIgFACIgHAAQgIAAgGgEg");
	this.shape_82.setTransform(341.9132,595.6368);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#6B6B6B").s().p("AgGAYQgKgGgDgLQgCgLAGgKQAGgKAKgDIAGAAQgIAEgFAJQgEAJACAJQADAKAHAGQAIAGAKAAIgFABIgIABQgHAAgGgEg");
	this.shape_83.setTransform(344.6632,606.625);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#6B6B6B").s().p("AgGAYQgKgGgDgLQgCgLAGgKQAGgKAKgDIAGAAQgIAEgFAJQgEAJACAJQADAKAHAGQAJAGAJgBIgFACIgHABQgIAAgGgEg");
	this.shape_84.setTransform(347.4132,617.625);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#6B6B6B").s().p("AgGAYQgKgGgCgLQgDgLAGgKQAGgKAKgDIAGAAQgIAEgFAJQgEAJADAJQACAKAHAGQAIAGAKgBIgFACIgIABQgHAAgGgEg");
	this.shape_85.setTransform(350.175,628.625);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#6B6B6B").s().p("AgFAYQgLgFgCgMQgDgKAGgKQAGgKAKgEIAGgBQgIAFgFAJQgEAKADAIQACAKAHAGQAIAGAKgBIgFADIgHABQgIAAgFgFg");
	this.shape_86.setTransform(352.925,639.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#6B6B6B").s().p("AgFAYQgKgFgDgMQgDgKAGgKQAGgKAKgDIAGgBQgIAEgEAJQgFAKADAIQACAKAHAGQAIAGAKAAIgFACIgGAAQgIAAgGgEg");
	this.shape_87.setTransform(355.675,650.5868);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#6B6B6B").s().p("AgFAYQgKgFgEgMQgDgKAHgKQAFgLALgCIAGgBQgIAEgEAJQgFAJADAJQACAKAIAGQAHAGALAAIgGACIgHAAQgHAAgGgEg");
	this.shape_88.setTransform(358.45,661.5868);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#6B6B6B").s().p("AgGAYQgKgGgDgLQgCgLAGgKQAGgKAKgCIAGgBQgIAEgFAJQgEAJACAJQADAKAHAGQAIAGAKAAIgFACIgHAAQgIAAgGgEg");
	this.shape_89.setTransform(361.2132,672.5868);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#6B6B6B").s().p("AgGAYQgKgGgDgLQgCgLAGgKQAGgKAKgCIAGgBQgIAEgFAJQgEAJACAJQADAKAHAGQAIAGAKAAIgFABIgIABQgHAAgGgEg");
	this.shape_90.setTransform(363.9632,683.575);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#6B6B6B").s().p("AgGAYQgKgGgDgLQgCgLAGgKQAGgKAKgDIAGAAQgIAEgFAJQgEAJACAJQADAKAHAGQAJAGAJgBIgFACIgHABQgIAAgGgEg");
	this.shape_91.setTransform(366.7132,694.575);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#616161").s().p("AgOAYQgKgGgCgLQgDgLAGgKQAGgKALgDQALgCAKAGQAKAGADALQACAKgGAKQgGAKgLADIgHABQgHAAgHgEg");
	this.shape_92.setTransform(331.6868,551.6632);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#616161").s().p("AgNAYQgLgFgCgMQgDgKAGgKQAGgKALgEQAKgDALAHQAKAFADAMQACAKgGAKQgFAKgMAEIgHABQgHAAgGgFg");
	this.shape_93.setTransform(334.4368,562.65);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#616161").s().p("AgNAYQgKgFgDgMQgDgKAGgKQAGgLALgCQAKgDALAGQAKAGADALQACALgGAKQgGAKgLADIgGAAQgHAAgHgEg");
	this.shape_94.setTransform(337.1868,573.6368);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#616161").s().p("AgOAYQgJgGgDgLQgDgKAFgLQAHgKALgCQALgDAKAGQAJAGAEALQACAKgFALQgHAKgLADIgHAAQgGAAgIgEg");
	this.shape_95.setTransform(339.95,584.6368);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#616161").s().p("AgOAYQgKgGgDgLQgCgLAGgKQAGgKALgCQAKgDALAGQAKAGACALQADAKgGALQgGAKgLADIgHAAQgHAAgHgEg");
	this.shape_96.setTransform(342.7132,595.6368);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#616161").s().p("AgOAYQgKgGgDgLQgCgLAGgKQAGgKALgDQALgCAKAGQAKAGACALQADAKgGALQgGAKgLACIgHABQgHAAgHgEg");
	this.shape_97.setTransform(345.4632,606.6132);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#616161").s().p("AgOAYQgKgGgDgLQgCgLAGgKQAGgKALgDQALgCAKAGQAKAGACALQADAKgGALQgGAKgLACIgHABQgHAAgHgEg");
	this.shape_98.setTransform(348.2132,617.6132);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#616161").s().p("AgOAYQgKgGgCgLQgDgLAGgKQAGgKALgDQALgCAKAGQAKAGADALQACAKgGALQgGAKgLACIgHABQgHAAgHgEg");
	this.shape_99.setTransform(350.9868,628.6132);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#616161").s().p("AgNAYQgLgFgCgMQgDgKAGgKQAGgKALgEQAKgDALAHQAKAFADAMQACAKgGAKQgFAKgMAEIgHABQgHAAgGgFg");
	this.shape_100.setTransform(353.7368,639.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#616161").s().p("AgNAYQgKgFgDgMQgDgKAGgKQAGgKALgDQAKgDALAGQAKAGADALQACALgGAKQgGAKgLADIgGAAQgHAAgHgEg");
	this.shape_101.setTransform(356.4868,650.5868);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#616161").s().p("AgNAYQgKgFgEgMQgDgKAHgKQAFgLAMgCQAKgDALAGQAKAGACALQAEAKgHALQgFAKgMADIgHAAQgGAAgHgEg");
	this.shape_102.setTransform(359.25,661.5868);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#616161").s().p("AgOAYQgKgGgDgLQgCgLAGgKQAGgKALgCQAKgDALAGQAKAGACALQADAKgGALQgGAKgLADIgHAAQgHAAgHgEg");
	this.shape_103.setTransform(362.0132,672.5868);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#616161").s().p("AgOAYQgKgGgDgLQgCgLAGgKQAGgKALgCQALgDAKAGQAKAGACALQADAKgGALQgGAKgLACIgHABQgHAAgHgEg");
	this.shape_104.setTransform(364.7632,683.575);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#616161").s().p("AgOAYQgKgGgDgLQgCgLAGgKQAGgKALgDQALgCAKAGQAKAGACALQADALgGAKQgGAKgLACIgHABQgHAAgHgEg");
	this.shape_105.setTransform(367.5132,694.5632);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#EEEEEE").s().p("AgfgGIA4gOIAGAbIg2AOg");
	this.shape_106.setTransform(329.2,553.725);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#EEEEEE").s().p("AgfgGIA4gOIAHAbIg4AOg");
	this.shape_107.setTransform(331.975,564.725);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#EEEEEE").s().p("AgfgGIA4gOIAHAbIg4AOg");
	this.shape_108.setTransform(334.725,575.725);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#EEEEEE").s().p("AgfgGIA4gOIAHAbIg4AOg");
	this.shape_109.setTransform(337.475,586.725);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#EEEEEE").s().p("AgegGIA3gOIAHAbIg4AOg");
	this.shape_110.setTransform(340.25,597.725);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#EEEEEE").s().p("AgfgGIA4gOIAGAbIg3AOg");
	this.shape_111.setTransform(343,608.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#EEEEEE").s().p("AgegFIA2gPIAIAaIg3APg");
	this.shape_112.setTransform(345.75,619.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EEEEEE").s().p("AgfgGIA4gOIAGAbIg3AOg");
	this.shape_113.setTransform(348.5,630.675);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#EEEEEE").s().p("AgfgGIA4gOIAHAbIg4AOg");
	this.shape_114.setTransform(351.275,641.675);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#EEEEEE").s().p("AgfgGIA4gOIAHAbIg4AOg");
	this.shape_115.setTransform(354.025,652.675);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#EEEEEE").s().p("AgfgGIA4gOIAHAbIg4AOg");
	this.shape_116.setTransform(356.775,663.675);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#EEEEEE").s().p("AgfgGIA4gOIAHAbIg4AOg");
	this.shape_117.setTransform(359.525,674.675);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#EEEEEE").s().p("AgegGIA2gOIAIAbIg4AOg");
	this.shape_118.setTransform(362.3,685.65);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#EEEEEE").s().p("AgfgFIA4gPIAGAaIg3APg");
	this.shape_119.setTransform(365.05,696.65);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#E0E0E0").s().p("AliBdQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBQgCgFAGgBIK+iwQAFgBACAFQACAFgGACIq+CvIgCABIgDgBg");
	this.shape_120.setTransform(375.5161,546.5039);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#E0E0E0").s().p("AlkBaQgCgFAGgCIK+iwQAGgBABAGQACAFgGABIq+CwIgCAAQgEAAgBgEg");
	this.shape_121.setTransform(378.2839,557.4834);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#E0E0E0").s().p("AlkBaQgBgGAFgBIK/iwQAFgBABAGQACAFgGABIq+CwIgCAAQgEAAgBgEg");
	this.shape_122.setTransform(381.0417,568.4834);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#E0E0E0").s().p("AlkBaQgBgGAFgBIK/iwQAFgBABAFQAAABAAAAQABABAAABQgBAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIq+CwIgCAAQgEAAgBgEg");
	this.shape_123.setTransform(383.7873,579.4827);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#E0E0E0").s().p("AllBaQAAgGAFgBIK/iwQAFgBABAFQACAGgGABIq+CwIgCAAQgEAAgCgEg");
	this.shape_124.setTransform(386.55,590.475);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#E0E0E0").s().p("AlkBaIAAgFQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIK+iwQAFgBACAFQABAFgFACIq/CwIgBAAQgEAAgBgEg");
	this.shape_125.setTransform(389.3244,601.4673);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#E0E0E0").s().p("AlkBZQgCgFAGgBIK+iwQAFgBACAFQABAGgFABIq/CwIgBAAQgEAAgBgFg");
	this.shape_126.setTransform(392.0583,612.4666);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#E0E0E0").s().p("AlkBZIAAgEQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIK+iwQAFgBACAFQABAGgFABIq+CwIgCAAQgEAAgBgFg");
	this.shape_127.setTransform(394.825,623.4666);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#E0E0E0").s().p("AliBdQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBQgCgFAGgCIK+ivQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQACAFgGACIq+CvIgCABIgDgBg");
	this.shape_128.setTransform(397.575,634.4617);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#E0E0E0").s().p("AlkBaQgBgGAFgBIK+iwQAGgBABAGQACAFgGABIq+CwIgCAAQgEAAgBgEg");
	this.shape_129.setTransform(400.3417,645.4334);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#E0E0E0").s().p("AlkBaQgBgGAFgBIK/iwQAFgBABAFQACAGgGABIq+CwIgCAAQgEAAgBgEg");
	this.shape_130.setTransform(403.0827,656.4327);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#E0E0E0").s().p("AllBaQgBgFAGgCIK+iwQAGgBACAFQAAAGgFABIq/CwIgCAAQgDAAgCgEg");
	this.shape_131.setTransform(405.85,667.4327);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#E0E0E0").s().p("AlkBaIAAgFQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIK+iwQAFgBACAFQABAFgFACIq/CwIgBAAQgEAAgBgEg");
	this.shape_132.setTransform(408.6244,678.4173);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FAFAFA").s().p("AqoqjIPBjxIGQY4IvBDyg");
	this.shape_133.setTransform(392.075,612.45);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#E0E0E0").s().p("AqoqkIPBjwIGQY5IvBDxg");
	this.shape_134.setTransform(392.875,612.25);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#F5F5F5").s().p("AqoqkIPBjxIGQY6IvBDwg");
	this.shape_135.setTransform(393.725,612.05);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#E0E0E0").s().p("AqoqjIPBjyIGQY5IvBDxg");
	this.shape_136.setTransform(394.525,611.85);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#F5F5F5").s().p("AqoqjIPBjyIGQY5IvBDyg");
	this.shape_137.setTransform(395.375,611.625);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#E0E0E0").s().p("AqoqjIPBjyIGQY5IvBDyg");
	this.shape_138.setTransform(396.175,611.425);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#F5F5F5").s().p("AqoqjIPBjyIGQY5IvBDyg");
	this.shape_139.setTransform(397.025,611.225);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#E0E0E0").s().p("AqoqjIPBjyIGQY5IvBDyg");
	this.shape_140.setTransform(397.825,611.025);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#2381A0").s().p("AgsgCIBSgVIAGAaIhQAVg");
	this.shape_141.setTransform(327.9,554.05);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#2381A0").s().p("AgsgCIBSgVIAHAbIhSAUg");
	this.shape_142.setTransform(330.675,565.05);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#2381A0").s().p("AgsgCIBSgVIAHAbIhSAUg");
	this.shape_143.setTransform(333.425,576.05);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#2381A0").s().p("AgsgDIBSgUIAHAaIhSAVg");
	this.shape_144.setTransform(336.175,587.05);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#2381A0").s().p("AgsgDIBSgUIAHAaIhSAVg");
	this.shape_145.setTransform(338.925,598.05);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#2381A0").s().p("AgsgCIBSgVIAHAaIhSAVg");
	this.shape_146.setTransform(341.675,609.025);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#2381A0").s().p("AgsgCIBRgVIAIAaIhSAVg");
	this.shape_147.setTransform(344.45,620.025);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#2381A0").s().p("AgrgCIBRgVIAGAaIhRAVg");
	this.shape_148.setTransform(347.2,631);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#2381A0").s().p("AgsgCIBSgVIAHAbIhSAUg");
	this.shape_149.setTransform(349.975,642);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#2381A0").s().p("AgsgDIBSgUIAHAbIhSAUg");
	this.shape_150.setTransform(352.725,653);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#2381A0").s().p("AgsgDIBSgUIAHAbIhSAUg");
	this.shape_151.setTransform(355.475,664);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#2381A0").s().p("AgsgDIBSgUIAHAaIhSAVg");
	this.shape_152.setTransform(358.225,675);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#2381A0").s().p("AgsgCIBSgVIAHAaIhSAVg");
	this.shape_153.setTransform(360.975,685.975);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#2381A0").s().p("AgsgCIBSgVIAGAaIhRAVg");
	this.shape_154.setTransform(363.75,696.975);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#2DA0C4").s().p("AoDBuIQGkBQAEAQgJANQgIAPgQAEIvfD4g");
	this.shape_155.setTransform(372.289,531.75);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#2381A0").s().p("AokOWIQJkDQALgDAGgKQAGgLgDgLImI4eQgCgGgEgHQATABAPALQAPAMAFASIGCYCQAFAYgMATQgMAVgXAGIwTEFg");
	this.shape_156.setTransform(415.9114,612);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#2E91BA").s().p("Artq0IQTkGQAXgFAUAMQAUALAGAXIGCYCQAFAXgMAUQgMAVgXAFIwTEGg");
	this.shape_157.setTransform(395.7364,612.0136);

	this.instance_1 = new lib.Path_1_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(623.45,516.35,1,1,0,0,0,74.5,68.5);
	this.instance_1.alpha = 0.1016;

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AAoA5IhsgzQgEgCgCgEQgBgEACgEIATgqQACgFAEgBQAFgCAEACIBsAzQAEACACADQABAFgCAEIgTAqQgCAEgFACIgEABIgEgBg");
	this.shape_158.setTransform(187.775,520.9179);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#744C28").s().p("AiYEbQhKgegzg+QBMAeBQgLQCAgRBPhpQBPhngSiCQgLhZg7hHQBPAfA1BDQA2BEAMBXQASCBhQBpQhPBoiBARQgUADgVAAQg7AAg5gXg");
	this.shape_159.setTransform(229.8329,539.894);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AjxEWQhphcgSiJQgJhJAShGQAThHAsg7QAsg7BAgkQA+glBKgKQAWgDAagBQCJAABpBcQBoBdATCJQAUCXhcB6QhdB6iXAUQgdAEgUgBQiIAAhphcgAgrlLQiIAThUBuQhTBuASCIQARB+BfBSQBeBSB6AAQAWAAAWgDQCIgSBThuQBUhugSiIQgSh+hehSQhehSh7AAQgVgBgWADg");
	this.shape_160.setTransform(225.3998,537.15);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#8B623C").s().p("AjIEKQhthUgTiKQgSiIBThuQBUhuCIgSQCHgSBtBUQBtBUATCJQASCIhTBuQhUBuiIASQgYAEgXAAQhsAAhZhFg");
	this.shape_161.setTransform(225.375,537.1331);

	this.instance_2 = new lib.Path_3_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(207.15,529.4,1,1,0,0,0,38.9,43.9);
	this.instance_2.alpha = 0.3711;

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#E6E6E6").s().p("AlaHJQi8iRggjsQgfjsCPi+QCQi9DrgfQDqgfC8CQQC8CSAgDsQAfDriPC+QiQC+jrAfQgqAGgnAAQi6AAibh4g");
	this.shape_162.setTransform(225.375,537.15);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#ABB7AF").s().p("AgTCBQgEAAgCgDQgCgBAAgDIAAiGIggAAQgDAAgCgBQgCgDAAgDIAAhlQAAgEACgCQACgCADAAIB2AAQADAAADACQACADAAADIAADyQAAADgCABQgDADgDAAg");
	this.shape_163.setTransform(533.8,441.05);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#ABB7AF").s().p("AhCAgIAAg4QAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAAAQACgCAEAAIB1AAQAEAAACACQAAAAABAAQAAABAAAAQABABAAABQAAAAAAABIAAA4g");
	this.shape_164.setTransform(517.625,473.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#ABB7AF").s().p("Ag6AfQgEAAgCgBQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAg3ICFAAIAAA3QAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCABgEAAg");
	this.shape_165.setTransform(517.625,480.75);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB2AAQAHAAAAAHIAABlQAAAHgHAAg");
	this.shape_166.setTransform(509.25,419.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB2AAQAHAAAAAHIAABlQAAAHgHAAg");
	this.shape_167.setTransform(492.95,419.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_168.setTransform(476.675,419.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgDADgCQACgCADAAIB1AAQADAAADACQAAABABAAQAAABAAAAQABABAAAAQAAABAAABIAABlQAAAHgIAAg");
	this.shape_169.setTransform(460.375,419.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgDADgCQACgCADAAIB1AAQADAAADACQAAABABAAQAAABAAAAQABABAAAAQAAABAAABIAABlQAAAHgIAAg");
	this.shape_170.setTransform(444.075,419.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQADAAADACQAAABABAAQAAABAAAAQAAABABAAQAAABAAABIAABlQAAAHgIAAg");
	this.shape_171.setTransform(427.775,419.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgDADgCQACgCADAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_172.setTransform(411.475,419.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_173.setTransform(395.175,419.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#ABB7AF").s().p("Ag7A6QgHAAAAgHIAAhlQAAgDADgCQACgCACAAIB2AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_174.setTransform(378.9,419.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_175.setTransform(362.6,419.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_176.setTransform(346.3,419.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_177.setTransform(330,419.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#ABB7AF").s().p("AhPA6QgHAAgBgHIAAhlQABgHAHAAICfAAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_178.setTransform(315.75,462.225);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#ABB7AF").s().p("Ah3A6QgHAAgBgHIAAhlQAAgDADgCQACgCADAAIDvAAQADAAACACQADACAAADIAABlQgBAHgHAAg");
	this.shape_179.setTransform(319.75,448.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#ABB7AF").s().p("AhjA6QgIAAAAgHIAAhlQAAgHAIAAIDIAAQAHAAAAAHIAABlQAAAHgHAAg");
	this.shape_180.setTransform(529.65,419.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#ABB7AF").s().p("AhjA6QgIAAAAgHIAAhlQAAgHAIAAIDHAAQAIAAAAAHIAABmQAAAGgIAAg");
	this.shape_181.setTransform(317.825,434);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#ABB7AF").s().p("Ag7A6QgHAAAAgHIAAhlQAAgHAHAAIB2AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_182.setTransform(517.5,434);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_183.setTransform(501.2,434);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_184.setTransform(484.9,434);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgGIAAhmQAAgHAIAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_185.setTransform(468.6,434);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgGIAAhmQAAgHAIAAIB2AAQAHAAAAAHIAABlQAAAHgHAAg");
	this.shape_186.setTransform(452.3,434);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgGIAAhmQAAgHAIAAIB2AAQAHAAAAAHIAABlQAAAHgHAAg");
	this.shape_187.setTransform(436,434);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_188.setTransform(419.725,434);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_189.setTransform(403.425,434);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_190.setTransform(387.125,434);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_191.setTransform(370.825,434);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_192.setTransform(354.55,434);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_193.setTransform(521.35,448.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_194.setTransform(505.05,448.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB2AAQAHAAAAAHIAABlQAAAHgHAAg");
	this.shape_195.setTransform(488.75,448.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_196.setTransform(472.475,448.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQADAAADACQACACAAADIAABlQAAAHgIAAg");
	this.shape_197.setTransform(456.175,448.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_198.setTransform(439.875,448.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_199.setTransform(423.575,448.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgDADgCQACgCADAAIB1AAQADAAADACQACACAAADIAABlQAAAHgIAAg");
	this.shape_200.setTransform(407.275,448.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_201.setTransform(390.975,448.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#ABB7AF").s().p("Ag7A6QgHAAAAgHIAAhlQAAgHAHAAIB2AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_202.setTransform(374.7,448.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#ABB7AF").s().p("Ag7A6QgHAAAAgHIAAhlQAAgDADgCQABgCADAAIB2AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_203.setTransform(358.4,448.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#ABB7AF").s().p("AigA6QgIAAAAgHIAAhlQAAgDADgCQACgCADAAIFBAAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_204.setTransform(523.575,462.225);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgDADgCQACgCADAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_205.setTransform(497.075,462.225);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgDADgCQACgCADAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_206.setTransform(480.775,462.225);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#ABB7AF").s().p("Ag7A6QgHAAAAgHIAAhlQAAgHAHAAIB2AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_207.setTransform(464.5,462.225);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#ABB7AF").s().p("Ag7A6QgHAAAAgHIAAhlQAAgDADgCQACgCACAAIB2AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_208.setTransform(448.2,462.225);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_209.setTransform(431.9,462.225);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_210.setTransform(415.6,462.225);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_211.setTransform(399.3,462.225);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_212.setTransform(383,462.225);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB2AAQAHAAAAAHIAABlQAAAHgHAAg");
	this.shape_213.setTransform(366.7,462.225);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_214.setTransform(350.425,462.225);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#ABB7AF").s().p("AmABDQgIAAAAgHIAAh3QAAgHAIAAIMBAAQAIAAAAAHIAAB3QAAAHgIAAg");
	this.shape_215.setTransform(415.6,477.225);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#ABB7AF").s().p("AhQBDQgHAAAAgHIAAh3QAAgHAHAAICgAAQAIAAAAAHIAAB3QAAAHgIAAg");
	this.shape_216.setTransform(466.6,477.225);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#ABB7AF").s().p("AhPBDQgIAAAAgHIAAh3QAAgHAIAAICgAAQAHAAAAAHIAAB3QAAAHgHAAg");
	this.shape_217.setTransform(364.6,477.225);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#ABB7AF").s().p("Ag6BFQgDAAgCgEQgDgEAAgGIAAhtQAAgFADgFQACgEADAAIB2AAQACAAADAEQACAFAAAFIAABtQAAAGgCAEQgDAEgCAAg");
	this.shape_218.setTransform(533.9,477.025);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#ABB7AF").s().p("Ag6BFQgDAAgCgEQgDgEAAgGIAAhtQAAgFADgFQACgEADAAIB1AAQADAAADAEQACAFAAAFIAABtQAAAGgCAEQgDAEgDAAg");
	this.shape_219.setTransform(501.325,477.025);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#ABB7AF").s().p("Ag6BDQgIAAAAgHIAAh3QAAgDADgCQACgCADAAIB1AAQAIAAAAAHIAAB3QAAAHgIAAg");
	this.shape_220.setTransform(485.025,477.225);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#ABB7AF").s().p("Ag6BDQgIAAAAgHIAAh3QAAgHAIAAIB1AAQAIAAAAAHIAAB3QAAAHgIAAg");
	this.shape_221.setTransform(346.225,477.225);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#ABB7AF").s().p("Ag6BDQgIAAAAgHIAAh3QAAgHAIAAIB1AAQAIAAAAAHIAAB3QAAAHgIAAg");
	this.shape_222.setTransform(329.95,477.225);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#ABB7AF").s().p("Ag6BDQgIAAAAgHIAAh3QAAgHAIAAIB2AAQAHAAAAAHIAAB3QAAAHgHAAg");
	this.shape_223.setTransform(313.7,477.225);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB1AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_224.setTransform(334.125,462.225);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgDADgCQACgCADAAIB1AAQADAAACACQADACAAADIAABlQAAAHgIAAg");
	this.shape_225.setTransform(342.1,448.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#ABB7AF").s().p("Ag7A6QgHAAAAgHIAAhlQAAgHAHAAIB2AAQAIAAAAAHIAABlQAAAHgIAAg");
	this.shape_226.setTransform(338.25,434);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#ABB7AF").s().p("Ag6A6QgIAAAAgHIAAhlQAAgHAIAAIB2AAQAHAAAAAHIAABlQAAAHgHAAg");
	this.shape_227.setTransform(313.7,419.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#E6E6E6").s().p("AytG8QgNAAgJgJQgJgIAAgMIAAs+QAAgLAJgJQAJgIANAAMAlbAAAQANAAAJAIQAJAJAAALIAAM+QAAAMgJAIQgJAJgNAAg");
	this.shape_228.setTransform(423.825,451.225);

	this.instance_3 = new lib.Path_9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(446.25,280.15,1,1,0,0,0,215.9,39.4);
	this.instance_3.alpha = 0.1992;

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#F3F3F3").s().p("A8iBiQgqAAgogYQgogYgOgiIgvhxMA+zAAAIgyByQgPAhgoAYQgpAYgqAAg");
	this.shape_229.setTransform(426.225,347.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#25282B").s().p("A9UGKIkasTMBDdAAAIkXMTg");
	this.shape_230.setTransform(426.275,290.675);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#F3F3F3").s().p("EglCAAvQgfhFAHgLQAIgNBUAAMBHrAAAQBcAAALAFQATAJgXAwIgPAfg");
	this.shape_231.setTransform(427.3153,237.025);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#1D1D1D").s().p("A/rISIlWu8QgfhWAxgNQAggIBxAJMBEcAAAQCMAAAPACQBFAMgVA5ImAPXg");
	this.shape_232.setTransform(428.0113,285.2311);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#E6E6E6").s().p("AoUEZQgbAAgBgUQgBgOAPgnQAth0AAg8IAAg+QAAhoAphJQAqhJA7AAILPAAQA7AAApBJQAqBJAABoIAAA+QAAA8AtB0QAPAnAAAOQgCAUgbAAg");
	this.shape_233.setTransform(423.05,365.7);

	this.instance_4 = new lib.Path_2_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(406,311.95,1,1,0,0,0,239.8,80.8);
	this.instance_4.alpha = 0.1992;

	this.instance_5 = new lib.ClipGroup();
	this.instance_5.parent = this;
	this.instance_5.setTransform(433.95,480.65,1,1,0,0,0,288.8,288.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#9BDBF2").s().p("EgRjApkQoGjamPmQQmRmQjboGQjjoZABpLQgBpKDjoZQDboGGRmQQGPmQIGjbQIZjjJKAAQJMAAIYDjQIGDbGPGQQGRGQDaIGQDjIZAAJKQAAJLjjIZQjaIHmRGPQmPGQoGDaQoYDkpMAAQpKAAoZjkg");
	this.shape_234.setTransform(436.4,480.6);

	this.instance_6 = new lib.ClipGroup_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(636.75,190.95,1.0246,1.0242,0,0,0,73.2,73.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#D4116E").s().p("AgbBpQgOgRAAggIAAheIgaAAIAAgXIAdgSIAQgpIAhAAIAAAqIA3AAIAAAoIg3AAIAABeQAAAMAGAEQAHAGAKAAQAOAAAUgGIAAAoQgUAJgdAAQgfAAgPgQg");
	this.shape_235.setTransform(411.1,311.55);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#D4116E").s().p("AgtBjQgNgDgPgGIAAgsQAPAHATAFQASAEAOABQAdAAAAgRQAAgHgEgDQgEgEgKgGIgYgLQgWgJgLgHQgKgIgGgLQgFgMAAgOQAAgaAVgPQAUgOAkAAQAjAAAiAPIgQAoQgPgIgMgDQgOgEgNAAQgWAAAAANQAAAHAHAFQAKAHAXAJQAVAJANAJQALAGAEALQAGALAAAOQAAAegVAQQgWAQgoAAQgWAAgPgDg");
	this.shape_236.setTransform(394.625,313.45);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#D4116E").s().p("AgaCJIAAjEIA1AAIAADEgAgchuQAAgaAcAAQAdAAAAAaQAAANgHAHQgHAHgPAAQgcAAAAgbg");
	this.shape_237.setTransform(380.075,309.625);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#D4116E").s().p("AgaCJIAAkRIA1AAIAAERg");
	this.shape_238.setTransform(369.075,309.625);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#D4116E").s().p("AgxBZQgVgLgNgYQgLgYAAgeQAAgwAZgaQAZgbAtAAQAbAAAXAMQAVANAMAXQALAVAAAgQAAAvgZAcQgZAbgtAAQgcAAgVgNgAgegrQgJAOAAAdQAAAdAJAPQAKAPAUAAQAWAAAJgPQAKgQAAgcQAAgcgKgPQgKgOgVAAQgVAAgJAOg");
	this.shape_239.setTransform(343.075,313.45);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#D4116E").s().p("AhHBwQgUgbAAgwQAAgwAUgbQAVgbAjAAQAjAAAUAdIACAAQgEgWAAgRIAAg/IA2AAIAAERIgpAAIgLgZIgCAAQgTAdgkAAQgiAAgUgbgAgbgFQgKAOAAAdQAAAdAKAOQAKAOASAAQAVABAJgMQAKgMABgdIAAgFQAAgggKgNQgKgOgWAAQgRABgKAPg");
	this.shape_240.setTransform(319.975,309.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#D4116E").s().p("AguAWIAAgrIBdAAIAAArg");
	this.shape_241.setTransform(303.375,313.65);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#D4116E").s().p("AgxBZQgVgLgNgYQgLgYAAgeQAAgwAZgaQAZgbAtAAQAbAAAXAMQAWANALAXQALAVAAAgQAAAvgZAcQgZAbgtAAQgcAAgVgNgAgegrQgKAPAAAcQAAAdAKAPQAJAPAVAAQAWAAAJgPQAKgQAAgcQAAgcgKgPQgKgOgVAAQgUAAgKAOg");
	this.shape_242.setTransform(286.425,313.45);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#D4116E").s().p("AgaCAIAAjSIhGAAIAAguIDBAAIAAAuIhFAAIAADSg");
	this.shape_243.setTransform(264.85,310.45);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#08536F").s().p("AgfC3QgMgBgIgHQgIgJAAgMIAAk0QAAgLAIgIQAIgJAMAAIA/AAQAMAAAIAJQAIAIAAALIAAE0QAAAMgIAJQgIAHgMABg");
	this.shape_244.setTransform(451.375,253.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#08536F").s().p("AgfC3QgMgBgIgHQgIgJAAgMIAAk0QAAgLAIgIQAIgJAMAAIA/AAQAMAAAIAJQAIAIAAALIAAE0QAAAMgIAJQgIAHgMABg");
	this.shape_245.setTransform(421.275,253.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#08536F").s().p("AgfC3QgMgBgIgHQgJgJAAgMIAAk0QAAgLAJgIQAIgJAMAAIA/AAQAMAAAJAJQAHAIABALIAAE0QgBAMgHAJQgJAHgMABg");
	this.shape_246.setTransform(235.9,253.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#08536F").s().p("AgfC3QgMgBgIgHQgIgJAAgMIAAk0QAAgLAIgIQAIgJAMAAIA/AAQAMAAAIAJQAIAIAAALIAAE0QAAAMgIAJQgIAHgMABg");
	this.shape_247.setTransform(263.075,253.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#08536F").s().p("AgfC3QgMgBgIgHQgJgJABgMIAAk0QgBgLAJgIQAIgJAMAAIA/AAQALAAAJAJQAIAIAAALIAAE0QAAAMgIAJQgJAHgLABg");
	this.shape_248.setTransform(288.25,253.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#08536F").s().p("AgfC3QgMgBgIgHQgIgJAAgMIAAk0QAAgLAIgIQAIgJAMAAIA/AAQAMAAAIAJQAIAIAAALIAAE0QAAAMgIAJQgIAHgMABg");
	this.shape_249.setTransform(315.425,253.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#08536F").s().p("AgfC3QgMgBgIgHQgIgJAAgMIAAk0QAAgLAIgIQAIgJAMAAIA/AAQAMAAAIAJQAIAIAAALIAAE0QAAAMgIAJQgIAHgMABg");
	this.shape_250.setTransform(342.575,253.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#08536F").s().p("AgfC3QgMgBgIgHQgJgJAAgMIAAk0QAAgLAJgIQAIgJAMAAIBAAAQALAAAIAJQAJAIAAALIAAE0QAAAMgJAJQgIAHgLABg");
	this.shape_251.setTransform(368.5,253.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#08536F").s().p("AgfC3QgMgBgIgHQgIgJAAgMIAAk0QAAgLAIgIQAIgJAMAAIA/AAQAMAAAIAJQAIAIAAALIAAE0QAAAMgIAJQgIAHgMABg");
	this.shape_252.setTransform(394.525,253.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#D4116E").ss(5.2).p("AjOAJIB1CGIEpkx");
	this.shape_253.setTransform(279.0749,578.6808);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#D4116E").ss(5.2).p("AjOAIIB1CHIEpkx");
	this.shape_254.setTransform(279.0734,525.3826);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#D4116E").ss(5.2).p("AjOAIIB1CHIEpkx");
	this.shape_255.setTransform(279.0734,473.9326);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#D4116E").ss(5.2).p("AjOAIIB1CHIEpkx");
	this.shape_256.setTransform(279.0734,420.5326);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#D4116E").ss(5.2).p("AjOAIIB1CHIEpkx");
	this.shape_257.setTransform(279.0734,367.1326);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#ABB7AF").s().p("ApOA+IAAh7ISdAAIAAB7g");
	this.shape_258.setTransform(363.875,592.975);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#ABB7AF").s().p("ApOA+IAAh7ISdAAIAAB7g");
	this.shape_259.setTransform(363.875,570.525);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#ABB7AF").s().p("ApOA+IAAh7ISdAAIAAB7g");
	this.shape_260.setTransform(363.875,540.15);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#ABB7AF").s().p("ApOA+IAAh7ISdAAIAAB7g");
	this.shape_261.setTransform(363.875,517.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#ABB7AF").s().p("ApOA+IAAh7ISdAAIAAB7g");
	this.shape_262.setTransform(363.875,487.325);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#ABB7AF").s().p("ApOA+IAAh7ISdAAIAAB7g");
	this.shape_263.setTransform(363.875,464.875);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#ABB7AF").s().p("ApOA+IAAh7ISdAAIAAB7g");
	this.shape_264.setTransform(363.875,435.75);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#ABB7AF").s().p("ApOA+IAAh7ISdAAIAAB7g");
	this.shape_265.setTransform(363.875,413.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#ABB7AF").s().p("ApOA+IAAh7ISdAAIAAB7g");
	this.shape_266.setTransform(363.875,384.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#ABB7AF").s().p("ApOA+IAAh7ISdAAIAAB7g");
	this.shape_267.setTransform(363.875,361.725);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#ABB7AF").ss(3.4).p("AChCiIlCAAIAAlDIFCAAg");
	this.shape_268.setTransform(270.05,583.025);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#ABB7AF").ss(3.4).p("AChChIlCAAIAAlBIFCAAg");
	this.shape_269.setTransform(270.05,530.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#ABB7AF").ss(3.4).p("AChCiIlCAAIAAlDIFCAAg");
	this.shape_270.setTransform(270.05,477.375);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#ABB7AF").ss(3.4).p("AChCiIlCAAIAAlDIFCAAg");
	this.shape_271.setTransform(270.05,424.525);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#ABB7AF").ss(3.4).p("AChCiIlCAAIAAlDIFCAAg");
	this.shape_272.setTransform(270.05,371.675);

	this.instance_7 = new lib.Path_10();
	this.instance_7.parent = this;
	this.instance_7.setTransform(342.55,445.75,1,1,0,0,0,132.8,193.3);
	this.instance_7.alpha = 0.0781;

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#F3F3F3").s().p("A0veOMAAAg8bMApfAAAMAAAA8bg");
	this.shape_273.setTransform(342.55,445.825);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#ABB7AF").s().p("A0veOMAAAg8bMApfAAAMAAAA8bg");
	this.shape_274.setTransform(347.875,453.175);

	this.instance_8 = new lib.ClipGroup_13();
	this.instance_8.parent = this;
	this.instance_8.setTransform(343.8,493.3,1,1,0,0,0,299.8,328.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#9BDBF2").s().p("EgRoApwQoIjcmRmSQmSmRjcoIQjkobAApOQAApNDkobQDcoIGSmRQGRmSIIjcQIbjkJNAAQJOAAIbDkQIIDcGRGSQGSGRDcIIQDkIbAAJNQAAJOjkIbQjcIImSGRQmRGSoIDcQobDkpOAAQpNAAobjkg");
	this.shape_275.setTransform(333.975,451);

	this.instance_9 = new lib.ClipGroup_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(645.2,357.8,1,1,0,0,0,70.7,81.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AghAxIgPhNIgHgUQAAgCADgEQADgEACAAQADgBAEAEIAEAVIACAIQACgBACgKQADgLADgFQAFgJAJgCIAKAAQAQADAJAMQAPATAIAkIAIAqQAAADgDABQgEABgHgDIgDgRQgThcgWAFQgIABgGANQgPAfAIAmIAEAPIAFAQQABAEgGABIgDAAQgIAAgDgQg");
	this.shape_276.setTransform(345.4464,396.8777);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgZA3QgNgOgEgXQgFgWAGgaQAHgfAVgEQAFgBAKAEQAhAMAJAsQAEAXgGAUQgJAYgWAEIgKABQgPAAgLgLgAgGgyQgRADgEAYQgEATAEASQAEASAHALQALAPAOgDQARgEAEgVQAEgQgEgSQgEgTgHgMQgJgQgMAAIgEABg");
	this.shape_277.setTransform(334.1784,399.0922);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AAFBIIgUhlQADgDAEgBQADgBAEACQAEAAAAAEQABADAAAMQAAAIABAHIANA9QABAHAFAKQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAIgEABQgKAAgCgLgAgRg+QgFgDgBgFQgCgKAKgBQAFgCAFADQAFADAAAGQACAJgIACIgDAAQgDAAgFgCg");
	this.shape_278.setTransform(325.85,398.1781);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AAKBHQgEgIgCgHIgLg5QgCgBgKACQgJADgBgGQgCgLAXgEIgHgzIgBgCIgCgDIACgEIAFgCQAKgBABAJIACAVIACAVIACAHIAPgEQAIgCACAGQAAAFgDADQgBACgJADIgKAEIANA7IAHAUQAAACgCADQgCADgDAAIgBAAQgFAAgFgKg");
	this.shape_279.setTransform(318.9489,399.9733);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgDBpQgDgBgEgLIgFgOIgfiiQgEgUAKgCQAFgBABAEIAGApIABAAIAJgVQAGgLALgCQARgEAOAPQALAMADAUQAGAcgEAUQgGAbgXAFQgQADgNgMQgCABAEARQAGAiAHAQIAHAMQACAFgGABIgGABIgDgBgAAEhWQgHACgIAQQgIAOgBANQgBANACAQIABAMQAAABABAAQAAAAAAABQABAAAAAAQABABAAAAIAEABIALAMQAGAFAJgCQAPgDADgaQABgUgDgSQgDgPgGgKQgHgNgJAAIgCAAg");
	this.shape_280.setTransform(310.2511,407.1514);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgpAVQgEgWADgXQAEgiAPgDQANgDASALQATAKADANQADASgLAOQgMAQgQAEIgIgCIgIgBQgBABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQAGAgAVgEQALgCAHgJQAFgGAFgKQAEgIACgBQAGgBACAIQACANgOAMQgNAMgNADIgJABQgdAAgJgpgAgLgwQgLACgEAQQgEALADAOQABAHAHAFQAGAEAIgCQAKgCAGgKQAFgKgCgMQgDgLgHgHQgEgFgIAAIgDAAg");
	this.shape_281.setTransform(300.4203,406.0178);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgaA4QgNgLgEgVQgFgVAEgcQAFgkARgDQAIgCAOAFQAPAGADAGQADAGADALQAGAfgJABIgGAAQgEgBAAgCIABgDIABgDQAAgGgDgLQgGgfgNADQgPADgEAeQgDAWAEAUQADAPAHAJQAJAMAMgCQAIgCAKgLQAHgJAEgKIACgIQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQACAAADADQADADAAACQACAHgJAOQgJANgHAEQgIAEgIACIgIABQgPAAgKgJg");
	this.shape_282.setTransform(289.4166,408.1562);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgoAWQgFgUADgaQADghAQgEQAOgCARAKQATAKADAOQADAQgLAQQgLAQgRADIgQgDQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAAAQAHAhAUgFQAKgCAJgJQAEgFAFgLQAEgIACAAQAGgCACAIQACAMgOAOQgNAMgNACIgJABQgdAAgIgogAgLgwQgLACgEAQQgEALADAOQACAHAGAFQAGAEAIgBQALgDAFgKQAGgLgDgLQgCgKgHgHQgFgGgHAAIgEAAg");
	this.shape_283.setTransform(278.5737,410.4776);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AglBfQgFgFgKgxQgBgEgKgBQgKAAgBgFQgCgHARgIQAAgKgDgQIgFgtQAAgKgBgHIgIAAQgGACgBgFQgBgGAFgCIAIgEQAAgDACgEIAEgCQAEAAADACQAFACACAAIADgCIAEgBQAegGAYAIQAdAKAGAdQAFAZgLARQgHAMgXASIgDACIAcANQAVAJAMAGQAPALACANIABABQgCAEgDAAQgDABgCgBQgFgLgogSQgogSgNADIgPADIADARQABAGAFALQAEANACACIAGAGQABAGgHABIgEABQgFAAgFgEgAgjhSQgIABgFADIgCAGQgDAGACAMIACASQAAARAGAiQAUADAHgBQAEAAAHgEQATgLAJgQQAMgSgFgUQgDgVgWgIQgKgDgLAAQgJAAgKACg");
	this.shape_284.setTransform(265.1423,410.0877);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgRBeQgDgDgCgGIgiirIgBgDQgBgFAGgBQADgBAGADQAGACAAADQACAHAAANIABATIAIAlQAIgLAGgBQAJgCANADQAbAFAIAqIANA/QgBADgHABQgDABgEgDIgIgnQgOhFgXAEQgLADgDAMQgEAKACALIAAAEIAHAnQABAGAEAIIAEANQABAEgHACIgCAAQgDAAgEgDg");
	this.shape_285.setTransform(339.41,366.8475);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AAKBHQgEgIgCgHIgLg5QgCgBgKACQgJADgBgGQgDgLAXgEIgGgzIgCgCIgBgDQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBIAFgCQAKgBABAJIACAVIACAVIACAHIAPgEQAJgCAAAGQABAFgDADQgCACgIADIgKAEIANA7IADAKIADAKQABACgCADQgCACgDABIAAAAQgGAAgFgKg");
	this.shape_286.setTransform(330.4752,369.6904);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AAFBIIgUhlQACgDAEgBQAEgBAEACQAEABAAACQABAEAAAMQAAAIABAHIANA9QABAHAFAJQAAABAAABQgBAAAAABQAAAAgBAAQAAAAgBAAIgEABQgKAAgCgLgAgQg+QgFgDgCgFQgBgJAJgDQAGgBAEADQAFACAAAGQACAKgIACIgCAAQgEAAgEgCg");
	this.shape_287.setTransform(324.7643,370.4656);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgxBHIgJgaIgNhBQgGgcAGgCIAHACQADACABADQABAGAAAJIABAQIACABIAGgaQAEgQALgDQAOgDARAdQACgCACgNIAEgRQAEgIAHgBQAHgCAMAIQAVAPAKAwIAKAyQgFAFgDABIgGgBIgGgeQgShWgRAEQgLACgCAdQgCAWADAOIAGAcQAAACADAEIACAGQAAADgCACIgFADQgCABgEgDQgEgDgBgCIgKg4QgCgIgGgOQgHgQgGABQgCAAgFAKQgQAfAIAmIAEAOIAEANQACAJgHABIgCABQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_288.setTransform(314.681,374.8774);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgRBjQgbgDgDgNQgBgHAGgBQAGgBAIAEIAMAIQAMAFAXgFQAggGgDgRQgDgJgPgIIgYgLQgkgQgHgFQgVgPgFgYQgGgYAKgVQAKgYAWgFQATgEAQAOQAOALAIATIAGAUIAFAKQAEAWgLACQgDABgDgDQgDgCgBgDIgCgYQgDgSgKgOQgLgTgQADQgRAEgIAQQgHARADARQAEAXAdAPIAyAXQAbANADANQADAPgSANQgOAKgSAEQgJACgKAAIgRgCg");
	this.shape_289.setTransform(299.9244,374.5235);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgoAVQgFgTADgaQADghAQgEQAOgCARAKQATAKADAOQADAQgLAQQgMAQgQADIgIgBIgIgCQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAAAQAHAhAUgFQAKgCAJgJIAJgQQAEgIACAAQAGgCACAIQACAMgOAOQgMALgOADIgJABQgdAAgIgpgAgLgwQgLADgEAPQgEALADAOQABAHAHAFQAGAEAIgCQAKgCAGgKQAGgLgDgLQgCgKgHgHQgFgGgHAAIgEAAg");
	this.shape_290.setTransform(281.3737,381.9837);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgZA3QgNgOgEgXQgFgWAGgaQAHgfAVgEQAFgBAKAEQAhAMAJAsQAEAXgGAUQgJAYgWAEIgKABQgPAAgLgLgAgGgyQgRADgEAYQgEATAEASQAEASAHALQALAPAOgDQARgEAEgVQAEgQgEgSQgDgRgIgOQgKgQgLAAIgEABg");
	this.shape_291.setTransform(270.1284,384.2922);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgaBWQgTgSgEgUQgFgWAIgDQAMgCAFAVIADATQACAKAMAJQALAJAJgCQAggGgUhcIgMg8IAAAAQgIABgMAMIgOALQgDAAgDgDQgCgCgBgEQgBgFAFgEIATgKQAMgGAFgGIABgBQgBgJAGgBIAGABQAEADACgBIAGgDIAHgDQAEAAAGABQAEACABAEQABAEgFACIgKABQgOADACAIIADANQAKAyADAgQADAdgDATQgGAegWAEIgGABQgQAAgRgQg");
	this.shape_292.setTransform(257.5577,382.721);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#F9AF48").s().p("ApqBZIAAixITVAAIAACxg");
	this.shape_293.setTransform(299.825,351.55);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#F6BD2C").s().p("AptHeIAAu7ITbAAIAAO7g");
	this.shape_294.setTransform(299.9,390.1);

	this.instance_10 = new lib.Path_3_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(354.95,379.8,1,1,0,0,0,169.7,155);
	this.instance_10.alpha = 0.2188;

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#6ACAEA").s().p("Aikh1IBQgSICxC/IACAAQgTg/gDgRIgfiMIA4gMIBDEmIhQASIiyjCIgCABQAPA0AIAeIAfCMIg4AMg");
	this.shape_295.setTransform(459.8,339.125);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#6ACAEA").s().p("AhOCIQgtgfgRhKQgQhJAbgvQAcgvBEgPQBEgPAsAfQAtAeARBKQAQBJgbAvQgcAwhEAPQgWAFgTAAQgpAAgegVgAgVhjQglAJgOAdQgNAdALAxQALAxAZAVQAYAVAlgIQBLgSgXhiQgThWg5AAQgJAAgLADg");
	this.shape_296.setTransform(426.475,346.575);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#6ACAEA").s().p("Ag/iLIA+gPIBBEnIg+AOg");
	this.shape_297.setTransform(403.15,351.85);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#6ACAEA").s().p("AgZhOIhQASIgLg1IDegyIAMA0IhRASIA3DyIg/APg");
	this.shape_298.setTransform(381.55,355.2);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#6ACAEA").s().p("AhoiXIBMgRICrERIhDAPIgmhCIhqAYIgHBMIhDAPgAhBAWIBNgRIhEh2QAAAbgJBsg");
	this.shape_299.setTransform(361.35,363.125);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#6ACAEA").s().p("Ai+hvIBVgUIB4DSIABAAIAXjyIBWgTIBCEmIg6ANIgxjnIgCABIgYD3Ig6ANIh6jXIgCABQAVBKAEASIAfCKIg4AMg");
	this.shape_300.setTransform(324.225,369.625);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#6ACAEA").s().p("AiWiGIBWgTQA8gOAhAQQAiAPAKAtQAGAbgKAWQgKAYgXARIBzBtIhFAPIhfhhIgiAHIAaByIg/AOgAg5hlIgTAEIASBQIAUgEQAegHALgNQAMgNgFgVQgFgVgPgGQgHgDgKAAQgNAAgRAEg");
	this.shape_301.setTransform(292.875,378.0358);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#6ACAEA").s().p("AhOCIQgtgegRhLQgRhIAcgwQAcguBEgQQBEgPAsAfQAtAeARBKQAQBIgbAwQgcAwhEAPQgWAFgTAAQgpAAgegVgAgVhjQgmAJgNAdQgNAeALAwQALAxAYAVQAZAVAkgIQBLgRgWhjQgThVg5AAQgJAAgLACg");
	this.shape_302.setTransform(260.8633,383.825);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#6ACAEA").s().p("AhkiAICpgmIALA0IhqAYIARBMIBjgWIALAxIhkAXIAaB1Ig9AOg");
	this.shape_303.setTransform(232.15,389.95);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#6ACAEA").s().p("Aijh1IBPgSICxC/IABAAIg1jcIA5gMIBCEmIhPASIiyjBIgCAAQATA/AEAUIAfCLIg4AMg");
	this.shape_304.setTransform(204.825,396.475);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#6ACAEA").s().p("AhAiLIA/gPIBBEnIg+AOg");
	this.shape_305.setTransform(181.15,401.8);

	this.instance_11 = new lib.Path_2_2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(348.15,486.05,1,1,0,0,0,175.6,48.9);
	this.instance_11.alpha = 0.1484;

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#127EA6").s().p("A1lY/QgkgEgbgWQgcgXgJghIoJ+ZQgHgbAFgaQAFgaAQgVQAbgiArgJIYElIQAUgEAggTQAVgNAVgQQAigZDYi+QCbiJA4gMIUrkZQAygLApAdQApAcAIAyMAFpAjkQAFAigQAgQgQAfgfASQgRALgVAEMgyyAKzQgNADgNAAIgPgBg");
	this.shape_306.setTransform(323.4932,374.8783);

	this.instance_12 = new lib.Path_1_0_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(327.95,373.75,1,1,0,0,0,190.4,161.1);
	this.instance_12.alpha = 0.1484;

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("A6XjtMAwBgLzIEuTOMgwBALzg");
	this.shape_307.setTransform(311.225,308.275);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#08536F").s().p("A1VbHQgngZgJgtMgH3gk7QgJgtAZgnQAZgmAtgKIVbkjQA1gMDFixQDFiwA0gMISjj8QAtgJAnAZQAnAZAJAtMAItAo9QAKAtgZAmQgZAogtAJMgwoAKVQgMADgMAAQggAAgcgSg");
	this.shape_308.setTransform(322.66,349.45);

	this.instance_13 = new lib.Path_0_3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(418.75,243.1,1,1,0,0,0,130.1,100.4);
	this.instance_13.alpha = 0.3203;

	this.instance_14 = new lib.Path_8();
	this.instance_14.parent = this;
	this.instance_14.setTransform(422.8,316.65,1,1,0,0,0,134.2,27.1);
	this.instance_14.alpha = 0.1484;

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#1BA7DE").s().p("AQ0P0Mgm9gFLQgOgBgQgIQgZgMgNgWQgOgXACgaIB53wQADgrAkgXQAagSAiAFISeCcQAPACAcgFIAlgKQAdgKDLhQQCSg7ArAGIP3CGQAmAGAWAeQAXAfgHAmIlAayQgFAagTASQgTASgbAGQgJABgKAAIgMAAg");
	this.shape_309.setTransform(438.0206,242.495);

	this.instance_15 = new lib.Path_1_4();
	this.instance_15.parent = this;
	this.instance_15.setTransform(433.8,240.5,1,1,0,0,0,140.6,103.2);
	this.instance_15.alpha = 0.1484;

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AzXFlIBgu5MAlPADwIhgO5g");
	this.shape_310.setTransform(440.25,180.475);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#1BA8DF").s().p("AQaR9MglUgE8QgigFgVgbQgWgcAFgjIDw8UQAFgjAcgVQAbgVAjAEIQcCMQAoAFC5hMQC4hMAqAFIOOB5QAjAEAVAcQAVAcgEAiIkLfbQgEAigcAWQgXARgbAAIgMgBg");
	this.shape_311.setTransform(436.2175,221.4211);

	this.instance_16 = new lib.ClipGroup_12();
	this.instance_16.parent = this;
	this.instance_16.setTransform(342.85,362,1,1,0,0,0,309.6,315.6);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#9BDBF2").s().p("EgRiAphQoFjbmPmPQmPmPjboGQjioYAApKQAApKDioYQDboFGPmPQGPmPIFjbQIYjiJKAAQJKAAIZDiQIFDbGPGPQGPGPDbIFQDjIYgBJKQABJKjjIYQjbIGmPGPQmPGPoFDbQoZDipKAAQpKAAoYjig");
	this.shape_312.setTransform(322.35,336.325);

	this.instance_17 = new lib.ClipGroup_6();
	this.instance_17.parent = this;
	this.instance_17.setTransform(695.3,532.4,1,1,0,0,0,82.3,83.2);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#343345").s().p("AuvDWIdKn5IAVBOI9JH5g");
	this.shape_313.setTransform(257,574.675);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#343345").s().p("AuuDWIdIn5IAVBOI9JH5g");
	this.shape_314.setTransform(250.65,551.35);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#343345").s().p("AuvDWIdJn5IAWBOI9JH5g");
	this.shape_315.setTransform(244.325,528.025);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#343345").s().p("AuvDWIdJn5IAWBNI9KH6g");
	this.shape_316.setTransform(238,504.7);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#343345").s().p("AuvDWIdKn5IAUBOI9IH5g");
	this.shape_317.setTransform(231.65,481.375);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#343345").s().p("AuvDXIdJn6IAWBNI9JH6g");
	this.shape_318.setTransform(225.325,458.05);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#343345").s().p("AuvDWIdJn5IAWBOI9KH5g");
	this.shape_319.setTransform(219,434.725);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#343345").s().p("AuvDWIdKn5IAUBOI9IH5g");
	this.shape_320.setTransform(212.65,411.4);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#BFBFC7").s().p("ABqkoIB/HSInRB+g");
	this.shape_321.setTransform(108.825,374.55);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("A30sDIFTpRIdJn7MANNAwlMgkcAJ6g");
	this.shape_322.setTransform(238,481.375);

	this.instance_18 = new lib.Path_0_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(221.85,505.05,1,1,0,0,0,144.1,179.9);
	this.instance_18.alpha = 0.1719;

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#343345").s().p("AuuDXIdJn6IAUBOI9IH5g");
	this.shape_323.setTransform(236.6,610.275);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#343345").s().p("AuvDWIdJn5IAWBNI9KH6g");
	this.shape_324.setTransform(230.25,586.975);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#343345").s().p("AuvDXIdJn6IAWBOI9JH5g");
	this.shape_325.setTransform(223.925,563.625);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#343345").s().p("AuvDWIdKn5IAUBNI9IH6g");
	this.shape_326.setTransform(217.6,540.325);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#343345").s().p("AuuDXIdIn6IAWBOI9KH5g");
	this.shape_327.setTransform(211.25,516.975);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#343345").s().p("AuvDWIdJn5IAWBNI9JH6g");
	this.shape_328.setTransform(204.925,493.675);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#343345").s().p("AuvDXIdKn6IAUBOI9IH5g");
	this.shape_329.setTransform(198.6,470.325);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#343345").s().p("AuuDWIdIn5IAVBNI9JH6g");
	this.shape_330.setTransform(192.25,447.025);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#BFBFC7").s().p("ABqknIB/HRInRB/g");
	this.shape_331.setTransform(88.425,410.15);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#F1F1F1").s().p("A30sDIFTpRIdKn6MANMAwkMgkbAJ6g");
	this.shape_332.setTransform(217.6,517);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#F1F1F1").s().p("Ak5QPMAAAggdIJzAAMAAAAgdg");
	this.shape_333.setTransform(115.75,351.1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#4A4F55").s().p("AnqVOMAAAgqbIPVAAMAAAAqbg");
	this.shape_334.setTransform(115.775,360.6);

	this.instance_19 = new lib.ClipGroup_15();
	this.instance_19.parent = this;
	this.instance_19.setTransform(822.85,500.9,1,1,0,0,0,816.5,355.9);

	this.instance_20 = new lib.ClipGroup_1_0();
	this.instance_20.parent = this;
	this.instance_20.setTransform(568.55,649.55,1,1,0,0,0,66.7,67.8);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#1BA8DF").s().p("AzmFwIAAhUQAAgfAWgVQAWgWAeAAIRCAAQBIAAA7gqQA8gqAYhEICBljQAMgiAfgTQAfgUAkAEIN7BYIAAKGg");
	this.shape_335.setTransform(228.125,222.8234);

	this.instance_21 = new lib.Path_1_2();
	this.instance_21.parent = this;
	this.instance_21.setTransform(150.85,285.2,1,1,0,0,0,51.2,15.2);
	this.instance_21.alpha = 0.4297;

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#25282B").s().p("Ag9A2IARhrIBqAAIgRBrg");
	this.shape_336.setTransform(242.175,296.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#25282B").s().p("Ag9A2IARhrIBqAAIgRBrg");
	this.shape_337.setTransform(228.925,296.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#25282B").s().p("Ag9A2IARhrIBqAAIgRBrg");
	this.shape_338.setTransform(215.725,296.8);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#25282B").s().p("Ag9A1IARhqIBqAAIgRBqg");
	this.shape_339.setTransform(244.225,284.85);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#25282B").s().p("Ag9A1IARhqIBqAAIgRBqg");
	this.shape_340.setTransform(230.975,284.85);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#25282B").s().p("Ag9A1IARhqIBqAAIgRBqg");
	this.shape_341.setTransform(217.775,284.85);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#25282B").s().p("Ag9A2IARhrIBqAAIgRBrg");
	this.shape_342.setTransform(246.625,272.5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#25282B").s().p("Ag9A2IARhrIBqAAIgRBrg");
	this.shape_343.setTransform(233.375,272.5);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#25282B").s().p("Ag9A2IARhrIBqAAIgRBrg");
	this.shape_344.setTransform(220.175,272.5);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#08536F").s().p("AoaCSIBTkjIPiAAIg1Ejg");
	this.shape_345.setTransform(153.575,284.65);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#E6E6E6").s().p("ApQCvIBnldIQ6AAIhBFdg");
	this.shape_346.setTransform(152.925,284.65);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#1BA8DF").s().p("A1PAqQggAAgWgZQgVgZADghMAsvAAAQADAhgWAZQgVAZghAAg");
	this.shape_347.setTransform(227.55,310.2);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#127EA6").s().p("A1rCZIBTj9QAHgXATgPQATgOAYAAMAm5AAAQAZAAAUAQQATAQAHAZIA/D4g");
	this.shape_348.setTransform(228.05,274.9);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#6ACAEA").s().p("A1OESQgmAAgWggQgWghANglICAmJQAHgXATgPQATgOAYAAMAm6AAAQAZAAATAQQAUAQAGAZIBkGJQAKAkgWAfQgWAegkAAg");
	this.shape_349.setTransform(227.5418,287);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#08536F").s().p("A1aE/IAAp9MAq1AAAIAAJ9g");
	this.shape_350.setTransform(227.95,340.6);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#4A4F55").s().p("Ag6BBIBtiIIAIAHIhsCHg");
	this.shape_351.setTransform(533.8,279.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#4A4F55").s().p("Ag6BBIBtiIIAIAHIhsCIg");
	this.shape_352.setTransform(535.7,280.6);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#4A4F55").s().p("AgtAwIBShmIAJAHIhSBmg");
	this.shape_353.setTransform(531.375,274.4);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#4A4F55").s().p("AgsAwIBRhmIAIAHIhRBmg");
	this.shape_354.setTransform(533.25,275.9);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#4A4F55").s().p("AhABIIB4iWIAJAHIh4CWg");
	this.shape_355.setTransform(537.025,282.825);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#4A4F55").s().p("Ag/BIIB3iWIAIAHIh3CWg");
	this.shape_356.setTransform(538.9,284.325);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#E6E6E6").s().p("AijBpIi2g+QAOgiBqh5QA1g+Ayg2QCTAzCvBkQBYAyA6AnQiCBkhCBFIgpAwQhMgzjEhJg");
	this.shape_357.setTransform(527.5,278.475);

	this.instance_22 = new lib.Path_1_1_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(526.75,276.65,1,1,0,0,0,34.6,22.9);
	this.instance_22.alpha = 0.2617;

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#4A4F55").s().p("AiDi6IAUgNIDzGBIgUAOg");
	this.shape_358.setTransform(492.15,165.35);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#4A4F55").s().p("AiDi6IAUgMIDzGBIgUANg");
	this.shape_359.setTransform(496.65,162.5);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#4A4F55").s().p("Agxg4IAUgNIBPB+IgUANg");
	this.shape_360.setTransform(494.725,189.4);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#4A4F55").s().p("Agxg4IAUgNIBPB+IgUANg");
	this.shape_361.setTransform(499.225,186.55);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#4A4F55").s().p("AhliLIAUgNIC3EkIgUANg");
	this.shape_362.setTransform(480.175,166.3);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#4A4F55").s().p("AhliKIAUgOIC3EkIgUAMg");
	this.shape_363.setTransform(484.675,163.45);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#4A4F55").s().p("AiQjOIAVgNIELGqIgUANg");
	this.shape_364.setTransform(502.4,161.675);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#4A4F55").s().p("AiQjOIAVgNIELGqIgUANg");
	this.shape_365.setTransform(506.9,158.825);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#E6E6E6").s().p("AqlB2QEjlAFxj8QC4h/B/g+IGAKVQkdCckgD6QhaBPhOBOIg+A/g");
	this.shape_366.setTransform(470.7,183.325);

	this.instance_23 = new lib.Path_1_0();
	this.instance_23.parent = this;
	this.instance_23.setTransform(471.1,178.95,1,1,0,0,0,67.8,64.4);
	this.instance_23.alpha = 0.2617;

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#ABB7AF").s().p("AlaDcQAHjDgWhcIDchcQD8h0Chh5IBaIAQhpA3iOA/QkcB+i7Alg");
	this.shape_367.setTransform(424.725,326.5);

	this.instance_24 = new lib.Path_1_3();
	this.instance_24.parent = this;
	this.instance_24.setTransform(423.25,325.1,1,1,0,0,0,36.2,39.8);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#127EA6").s().p("ArHAFQAJhPA/gxQA+gyBPAJIS7CMIgXC/g");
	this.shape_368.setTransform(259.35,210.8814);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#3CB9E4").s().p("ArBgpQAEgkAcgWQAcgWAjAEIUlCXIgLBVg");
	this.shape_369.setTransform(215.1,210.3442);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#F3F3F3").s().p("ApbAkIAYjPISfCIIgYDPg");
	this.shape_370.setTransform(221.275,195.375);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#25282B").s().p("Ag/BAQgbgaAAgmQAAglAbgaQAagbAlAAQAmAAAaAbQAbAaAAAlQAAAmgbAaQgaAbgmAAQglAAgagbg");
	this.shape_371.setTransform(346.175,567.625);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#25282B").s().p("Ag/BAQgbgaAAgmQAAglAbgaQAbgbAkAAQAlAAAbAbQAbAaAAAlQAAAmgbAaQgbAbglAAQgkAAgbgbg");
	this.shape_372.setTransform(111.25,567.625);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#9BDBF2").s().p("Ag1A2IAAhrIBrAAIAABrg");
	this.shape_373.setTransform(351.575,494.85);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#9BDBF2").s().p("Ag1A2IAAhrIBrAAIAABrg");
	this.shape_374.setTransform(351.575,436.475);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#127EA6").s().p("A1aAdIAAg5MAq1AAAIAAA5g");
	this.shape_375.setTransform(227.95,534.375);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#127EA6").s().p("A1aAdIAAg5MAq1AAAIAAA5g");
	this.shape_376.setTransform(227.95,477.7);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#127EA6").s().p("A1aAdIAAg5MAq1AAAIAAA5g");
	this.shape_377.setTransform(227.95,421.025);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#25282B").s().p("AhmBHQg7AAgqgpQgpgpAAg7IHpAAQAAA7gqApQgpApg8AAg");
	this.shape_378.setTransform(227.95,487.725);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#25282B").s().p("AhmBHQg7AAgqgqQgpgoAAg7IHpAAQAAA7gqAoQgpAqg8AAg");
	this.shape_379.setTransform(227.95,431.075);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#1BA8DF").s().p("Az4ScQgpAAgcgdQgdgdAAgpMAAAghxQAAgpAdgdQAcgdApAAMAnwAAAQApAAAdAdQAdAdAAApMAAAAhxQAAApgdAdQgdAdgpAAg");
	this.shape_380.setTransform(227.95,436.475);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#1BA8DF").s().p("AoBAxIOdj0QAegIAcAOQAcAOAMAdIAEALIwDFNg");
	this.shape_381.setTransform(416.45,393.9045);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#127EA6").s().p("AoygNIQXklIBgDsIyJF5g");
	this.shape_382.setTransform(409.725,387.4);

	this.instance_25 = new lib.ClipGroup_11();
	this.instance_25.parent = this;
	this.instance_25.setTransform(300.5,396.25,1,1,0,0,0,290.8,317.1);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#9BDBF2").s().p("EgRoApwQoIjcmSmRQmRmSjcoIQjkobAApOQAApNDkobQDcoIGRmSQGSmRIIjcQIbjkJNAAQJOAAIbDkQIIDcGSGRQGRGSDcIIQDkIbAAJNQAAJOjkIbQjcIImRGSQmSGRoIDcQobDkpOAAQpNAAobjkg");
	this.shape_383.setTransform(299.7,369.15);

	this.instance_26 = new lib.ClipGroup_8_1();
	this.instance_26.parent = this;
	this.instance_26.setTransform(406.4,700.4,1,1,0,0,0,68.8,70.4);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#6ACAEA").s().p("AnlCcQCDk2CZktIKvFeQiLERh6Egg");
	this.shape_384.setTransform(126.05,330.375);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#E6E7E8").s().p("ArjinIAVhKIWyGlIgSA+g");
	this.shape_385.setTransform(112,475.525);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#E6E7E8").s().p("Arfi2IAWhKIWpHDIgTA+g");
	this.shape_386.setTransform(117.225,457.95);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#E6E7E8").s().p("ArbjGIAYhJIWfHiIgVA9g");
	this.shape_387.setTransform(122.8,440.475);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#E6E7E8").s().p("ArWjVIAZhJIWUIAIgVA9g");
	this.shape_388.setTransform(128.7,423.125);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#E6E7E8").s().p("ArSjlIAbhHIWKIdIgXA8g");
	this.shape_389.setTransform(135.025,405.925);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#E6E7E8").s().p("ArNj0IAdhHIV+I8IgYA7g");
	this.shape_390.setTransform(141.675,388.85);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#E6E7E8").s().p("Ak7hfIAbhAIJcEEIgZA7g");
	this.shape_391.setTransform(188.275,388.975);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#E6E7E8").s().p("Ak5hmIAdg/IJWERIgbA6g");
	this.shape_392.setTransform(195.3,373.025);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#E6E7E8").s().p("Ak3hsIAeg/IJREdIgcA6g");
	this.shape_393.setTransform(202.625,357.225);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#E6E7E8").s().p("Ak0hzIAfg+IJLEqIgeA5g");
	this.shape_394.setTransform(210.3,341.575);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#D4116E").s().p("ArOj5QAyhhBFh4IUnLvQg3BhguBVg");
	this.shape_395.setTransform(186.95,292.325);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#F3F3F3").s().p("A1aSUQCzrhEkq7QEkq8GOqFIYsPOQlBIKjsI0QjrI1iRJSg");
	this.shape_396.setTransform(150.325,369.45);

	this.instance_27 = new lib.Path_4_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(145.2,359.5,1,1,0,0,0,137.2,161.1);
	this.instance_27.alpha = 0.2109;

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#D4116E").s().p("AhuhuIA5gbQBZBmBLBdIg2AWIgggpIhEAdIAFA0IgsASQgLiEgRh0gAgxAXIAtgUQgegkgbgfg");
	this.shape_397.setTransform(466.5,440.575);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#E6E7E8").s().p("Am5BdINnjeIAMAtItpDWg");
	this.shape_398.setTransform(522.9,507.3);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#E6E7E8").s().p("Am3BlINjjvIAMAsItkDog");
	this.shape_399.setTransform(520.175,496.8);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#E6E7E8").s().p("Am0BvINckCIAOAsItfD6g");
	this.shape_400.setTransform(517.2,486.35);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#E6E7E8").s().p("AmyB4INXkTIAOArItZEMg");
	this.shape_401.setTransform(514,475.95);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#E6E7E8").s().p("AmvCBINRkmIAOArItTEfg");
	this.shape_402.setTransform(510.625,465.65);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#E6E7E8").s().p("AmtCKINLk3IAQAqItOExg");
	this.shape_403.setTransform(507.025,455.425);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#E6E7E8").s().p("AmqCTINElJIARAqItHFDg");
	this.shape_404.setTransform(503.175,445.275);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#E6E7E8").s().p("AkvBpIJNj2IASAqIpQDxg");
	this.shape_405.setTransform(511.1,430.275);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#E6E7E8").s().p("AksBwIJIkDIASApIpLD+g");
	this.shape_406.setTransform(506.75,420.025);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#E6E7E8").s().p("AkqB2IJCkPIATApIpEEKg");
	this.shape_407.setTransform(502.175,409.875);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#9BDBF2").s().p("AmuCbIMbmjIBCCCIslGPQgcg6gcg0g");
	this.shape_408.setTransform(481.975,397.4);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#F3F3F3").s().p("AsamPIO6ojQHCMPC5N1Iw1DhQiVrKlrp4g");
	this.shape_409.setTransform(501.75,443.55);

	this.instance_28 = new lib.Path_3_3();
	this.instance_28.parent = this;
	this.instance_28.setTransform(495.75,441.95,1,1,0,0,0,79.5,94.8);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#E6E7E8").s().p("Aj/DGIHimjIAdAXIniGkg");
	this.shape_410.setTransform(436.5,450.15);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#E6E7E8").s().p("Aj/DGIHimjIAdAYIniGjg");
	this.shape_411.setTransform(430.875,445.425);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#E6E7E8").s().p("Ag4AkIBDgDIgNhjIAngEIAUCGIhuAHg");
	this.shape_412.setTransform(398.675,476.075);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#E6E7E8").s().p("Aj+DFIHimjIAbAaIniGjg");
	this.shape_413.setTransform(421.575,437.175);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#E6E7E8").s().p("Aj+DFIHimjIAbAaIniGjg");
	this.shape_414.setTransform(416.275,432.15);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#E6E7E8").s().p("Ag2AkQAhAAAggCIgKhmIAngDQAHBMAIBAIhrADg");
	this.shape_415.setTransform(383.85,462.825);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#9BDBF2").s().p("Aj9DEIHhmjIAaAbIniGkg");
	this.shape_416.setTransform(407.55,423.325);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#9BDBF2").s().p("Aj9DEIHhmjIAaAcIniGjg");
	this.shape_417.setTransform(402.575,417.95);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#E6E7E8").s().p("Ag0BJIAAgmIA/ABIgGhrIAmgBIAKCRg");
	this.shape_418.setTransform(369.85,448.7);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#E6E7E8").s().p("Aj8DDIHhmiIAYAcInhGkg");
	this.shape_419.setTransform(394.425,408.6);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#E6E7E8").s().p("Aj8DDIHimjIAXAeInhGjg");
	this.shape_420.setTransform(389.775,402.925);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#D4116E").s().p("AgyBIIABgmIA9ACIgChuIAlAAIAECVIhlgDg");
	this.shape_421.setTransform(356.725,433.875);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#9BDBF2").s().p("Aj7DDIHhmjIAWAeInhGjg");
	this.shape_422.setTransform(382.225,393.05);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#9BDBF2").s().p("Aj7DCIHhmiIAWAeInhGkg");
	this.shape_423.setTransform(377.975,387.1);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#E6E7E8").s().p("AgxBIIADgnIA6ADIADhxIAjAAQgCBoAAAzIhhgGg");
	this.shape_424.setTransform(344.65,418.225);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#E6E7E8").s().p("AlyD0IKmpOQAmBBAZAmIqmJOQgmg8gZgrg");
	this.shape_425.setTransform(360.25,379.6);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#F3F3F3").s().p("AnfGiQjvkViplDIM+rSQCoFEDwEUQDwEUEpDTIs+LSQkojUjxkTg");
	this.shape_426.setTransform(396.55,414.7);

	this.instance_29 = new lib.Path_2_4();
	this.instance_29.parent = this;
	this.instance_29.setTransform(392.85,414.9,1,1,0,0,0,88.8,90.5);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#E6E7E8").s().p("AjQGQIEstPIB1AoIkWNXQhBgWhKgag");
	this.shape_427.setTransform(385.875,245.45);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#D4116E").s().p("AhwhpQAzgaA5gHQA6gHA7ANIhBESQhWh9hKh6g");
	this.shape_428.setTransform(430.625,240.7911);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#6ACAEA").s().p("Ag9ENQhDgPg2glQg0gkgigxQghgxgJg4QgKg4AQg4QARg2AmgsQAkgqA0gaQBLB5BXB+IBAkSQA7ANAyAhQAwAgAjAuQAiAvAPA1QAPA3gJA4QgKA5giAvQghAugzAdQg0Afg/AIQgZAEgZAAQgnAAgpgKg");
	this.shape_429.setTransform(436.2801,260.5555);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#E6E7E8").s().p("AhBG9IBdt+IAmAEIhWN/g");
	this.shape_430.setTransform(500.575,270.275);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#E6E7E8").s().p("AhKG7IBwt7IAmAFIhpN8g");
	this.shape_431.setTransform(489.75,269.05);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#E6E7E8").s().p("AhUG6ICDt5IAmAFIh8N6g");
	this.shape_432.setTransform(479,267.625);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#F3F3F3").s().p("AuIE+IGUv/QKlEMLZAuIhFRJQuGg4tHlMg");
	this.shape_433.setTransform(433.6,256.2);

	this.instance_30 = new lib.Path_0_4();
	this.instance_30.parent = this;
	this.instance_30.setTransform(428.65,260.9,1,1,0,0,0,90.5,70.7);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#E6E7E8").s().p("AloA/QFSh2E7isIBECkQk7CrlSB4g");
	this.shape_434.setTransform(285.825,316.75);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#9BDBF2").s().p("AjzAEQDShJDQhiIBFCkQjPBhjUBKg");
	this.shape_435.setTransform(253.975,274.3);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#D4116E").s().p("AmGBQQFyiBFXjDIBFCkQlVDBl2CEg");
	this.shape_436.setTransform(278.8,290.875);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#9BDBF2").s().p("AkaAXQEBhaDvh3IBFCkQjyB2j+Bbg");
	this.shape_437.setTransform(288,345.05);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#E6E7E8").s().p("AkpAeQENheEBiCIBFClQkAB/kPBhg");
	this.shape_438.setTransform(249.325,247.475);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#E6E7E8").s().p("AkUpVIA1gLIH1S2Ig2ALg");
	this.shape_439.setTransform(190.1,322.25);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#E6E7E8").s().p("AkUpUIA1gNIH0S2Ig0ANg");
	this.shape_440.setTransform(203.875,318.975);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#E6E7E8").s().p("AkUpTIA1gPIH0S2Ig0APg");
	this.shape_441.setTransform(217.55,315.275);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#E6E7E8").s().p("AkUpSIA0gRIH1S2Ig0ARg");
	this.shape_442.setTransform(231.125,311.15);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#E6E7E8").s().p("AlFosQBPgvBHguIH0S2QhPA0hGApg");
	this.shape_443.setTransform(331,264.725);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#F3F3F3").s().p("Az5lPQIMhUHrjMQHpjLGtk6IJmXEQmtE5nrDMQnpDMoMBUg");
	this.shape_444.setTransform(261.05,286.95);

	this.instance_31 = new lib.Path_1_6();
	this.instance_31.parent = this;
	this.instance_31.setTransform(269.7,290.85,1,1,0,0,0,127.4,114);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#E6E7E8").s().p("Am5hkIAGg1INtD9IgGA1g");
	this.shape_445.setTransform(132.25,260.6);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#E6E7E8").s().p("Am6hjIAIg1INtD9IgHA1g");
	this.shape_446.setTransform(133.525,250.2);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#E6E7E8").s().p("Ah3gpIAngeIA5BOIBshdIAjAtQhOBChDA+IheiAg");
	this.shape_447.setTransform(71.175,238.375);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#E6E7E8").s().p("Am7hkIAKg0INtD9IgJA1g");
	this.shape_448.setTransform(136.225,232.65);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#E6E7E8").s().p("Am7hkIAKg1INtD+IgKA0g");
	this.shape_449.setTransform(138.175,222.35);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#E6E7E8").s().p("Ah5gpIAqgdIA1BNIBzhcIAhAtQhAAxhcBNIhXh/g");
	this.shape_450.setTransform(75.675,210.475);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#E6E7E8").s().p("Am8hkIAMg0INtD9IgMA0g");
	this.shape_451.setTransform(141.975,205.025);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#E6E7E8").s().p("Am9hkIAOg0INtD9IgNA0g");
	this.shape_452.setTransform(144.55,194.9);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#E6E7E8").s().p("Ah8gpIAtgdIAxBMIB7haIAgAsQhTA7hUBCg");
	this.shape_453.setTransform(81.95,182.95);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#E6E7E8").s().p("Am+hkIAQgzINtD8IgQA0g");
	this.shape_454.setTransform(149.5,177.85);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#E6E7E8").s().p("Am/hlIARgyINuD9IgSAyg");
	this.shape_455.setTransform(152.7,167.925);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#D4116E").s().p("Ah9gpIAugcIAuBLICDhYIAcAsQhsBIhEAxg");
	this.shape_456.setTransform(89.95,155.875);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#E6E7E8").s().p("AnAhlIATgyINuD9IgTAyg");
	this.shape_457.setTransform(158.7,151.2);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#E6E7E8").s().p("AnAhlIAUgyINtD9IgUAyg");
	this.shape_458.setTransform(162.55,141.475);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#E6E7E8").s().p("AiAgpIAygcIApBLICLhWIAbArQhfA5hcA9g");
	this.shape_459.setTransform(99.7,129.35);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#9BDBF2").s().p("AqOhjQAfhEAshZITSFlQgiBDgpBZg");
	this.shape_460.setTransform(157.8,114.425);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#F3F3F3").s().p("AwQMCQAYoJCRn0QCRn1ECnGIXlG1QkCHFiRH1QiRH1gYIJg");
	this.shape_461.setTransform(143.8,185.175);

	this.instance_32 = new lib.Group_1();
	this.instance_32.parent = this;
	this.instance_32.setTransform(154.15,182.8,1,1,0,0,0,104.1,120.8);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#6ACAEA").s().p("EgRnApvQoIjdmRmRQmRmRjcoIQjkoaAApOQAApMDkobQDcoIGRmRQGRmRIIjdQIbjjJMAAQJOAAIaDjQIIDdGRGRQGRGRDcIIQDkIbAAJMQAAJOjkIaQjcIImRGRQmRGRoIDdQoaDjpOAAQpMAAobjjg");
	this.shape_462.setTransform(308.925,336.8);

	this.instance_33 = new lib.ClipGroup_5();
	this.instance_33.parent = this;
	this.instance_33.setTransform(251.5,642.9,1,1,0,0,0,68.9,70.6);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#3CB9E4").s().p("A/bHHIAEuOIHLHJIPZAAIAAE3ISaAAIAAk+IO3AAIG+m9IAAOJg");
	this.shape_463.setTransform(483.05,399.8);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#127EA6").s().p("AoYJIIQw4xIAAIzIp+PIIgPHYg");
	this.shape_464.setTransform(335.95,295.8);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#08536F").s().p("ALcgVI3ZAAIi6EYIAAoyIdvAAIAAJfg");
	this.shape_465.setTransform(484.75,225.975);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#127EA6").s().p("ABjIOIpsubIAApgIQTY2ImnGlg");
	this.shape_466.setTransform(632.075,296.15);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#ABB7AF").s().p("A4MAQIAAgfMAwZAAAIAAAfg");
	this.shape_467.setTransform(483.725,425.675);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#ABB7AF").s().p("A4MAQIAAgfMAwZAAAIAAAfg");
	this.shape_468.setTransform(483.725,416.925);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#ABB7AF").s().p("A4MAQIAAgfMAwZAAAIAAAfg");
	this.shape_469.setTransform(483.725,408.225);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#ABB7AF").s().p("A4MAQIAAggMAwZAAAIAAAgg");
	this.shape_470.setTransform(483.725,399.5);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#ABB7AF").s().p("A4MAQIAAgfMAwZAAAIAAAfg");
	this.shape_471.setTransform(483.725,390.775);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#ABB7AF").s().p("A4MAQIAAgfMAwZAAAIAAAfg");
	this.shape_472.setTransform(483.725,382.075);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#ABB7AF").s().p("A4MAQIAAgfMAwZAAAIAAAfg");
	this.shape_473.setTransform(483.725,373.325);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#ABB7AF").s().p("A4MAQIAAgfMAwZAAAIAAAfg");
	this.shape_474.setTransform(483.725,364.625);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#ABB7AF").s().p("A4MARIAAghMAwZAAAIAAAhg");
	this.shape_475.setTransform(483.725,355.9);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#E6E6E6").s().p("AozGcIAAk4IvZAAIgognIAPnYMAxaAAAIAAHfIgXAYIu3AAIAAFAg");
	this.shape_476.setTransform(483.05,389.95);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#F3F3F3").s().p("A4sJxIM4zhIXaAAINHThg");
	this.shape_477.setTransform(483.8,286.275);

	this.instance_34 = new lib.ClipGroup_10();
	this.instance_34.parent = this;
	this.instance_34.setTransform(469.25,349.2,1,1,0,0,0,291.1,307.4);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#9BDBF2").s().p("EgRoApwQoIjcmSmSQmRmRjcoIQjkobAApOQAApNDkobQDcoIGRmSQGSmRIIjcQIbjkJNAAQJOAAIbDkQIJDcGRGRQGRGSDcIIQDkIbAAJNQAAJOjkIbQjcIImRGRQmRGSoJDcQobDkpOAAQpNAAobjkg");
	this.shape_478.setTransform(469,329);

	this.instance_35 = new lib.ClipGroup_4();
	this.instance_35.parent = this;
	this.instance_35.setTransform(101.45,540.6,1,1,0,0,0,82.9,83.2);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#D4116E").s().p("AjPCvIjaAAIAAldIDaAAIAAkFIJ5GzIp5G0g");
	this.shape_479.setTransform(674.075,180.85);

	this.instance_36 = new lib.Path_0_6();
	this.instance_36.parent = this;
	this.instance_36.setTransform(535.6,153.9,1,1,0,0,0,106.4,51.9);
	this.instance_36.alpha = 0.25;

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#E6E6E6").s().p("AnHsUIOOMHIuOMig");
	this.shape_480.setTransform(474.75,180.85);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#CCCCCC").s().p("AwnGcIOPsiICYCCICxiXIN3M3g");
	this.shape_481.setTransform(535.625,218.55);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#E6E6E6").s().p("AwnnDMAhPAAAIwoOHg");
	this.shape_482.setTransform(535.625,147.225);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#E6E6E6").s().p("Am7giIN3ryIAAYpg");
	this.shape_483.setTransform(597.675,180.85);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FFFFFF").s().p("AghA1IAAhnIAWAAIAEARIABAAQAGgJAGgFQAJgFAJAAIAKABIgCAaIgJAAQgNgBgIAIQgGAGAAAMIAAA1g");
	this.shape_484.setTransform(543.475,272.9);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FFFFFF").s().p("AghAoQgOgPAAgYQAAgZANgOQAOgPAVAAQAVAAAOANQAMANAAAWIAAAMIhCAAQAAAMAHAHQAHAHALAAQAKAAAIgCQAHgCAKgEIAAAWIgQAFIgUACQgYAAgPgOgAgMgbQgFAHAAAJIAmAAQAAgJgFgHQgFgFgJAAQgJAAgFAFg");
	this.shape_485.setTransform(533.025,272.975);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FFFFFF").s().p("AgNBIIAAhnIAbAAIAABngAgPg5QAAgOAPAAQAPAAAAAOQAAAGgEAEQgDADgIAAQgPAAAAgNg");
	this.shape_486.setTransform(524.5,270.975);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FFFFFF").s().p("AgvBMIAAiVIAWAAIAFAOIABAAQAKgQASAAQASAAALAPQALAOAAAZQgBARgEALQgEAMgKAHQgJAGgNAAQgRAAgKgNIgBAAIABAPIAAAqgAgOgtQgFAGAAAPIAAADQAAARAFAGQAEAHAKAAQAUAAgBgeQABgQgFgHQgEgIgLAAQgKAAgEAHg");
	this.shape_487.setTransform(515.9,275.175);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FFFFFF").s().p("AgZAvQgLgGgHgMQgGgOgBgPQAAgZAOgNQAOgPAXAAQAOAAAMAHQALAHAGAMQAGANAAAOQAAAagNAOQgNAOgYAAQgPAAgKgHgAgPgWQgGAJAAANQAAAPAGAIQAEAIALAAQAMAAAEgIQAGgIAAgPQAAgNgGgJQgEgIgMAAQgKAAgFAIg");
	this.shape_488.setTransform(503.7,272.975);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FFFFFF").s().p("AgpABQAAgZANgPQAOgOAXAAQARAAAQAHIgJAWIgMgEIgMgCQgVAAAAAfQAAAeAVAAQAIAAAHgCQAJgDAFgEIAAAYQgHAFgHABQgGACgLAAQgwAAAAg1g");
	this.shape_489.setTransform(493.075,272.975);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FFFFFF").s().p("AghA1IAAhnIAWAAIAEARIABAAQAGgJAGgFQAJgFAJAAIAKABIgCAaIgJAAQgNgBgIAIQgGAGAAAMIAAA1g");
	this.shape_490.setTransform(479.325,272.9);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FFFFFF").s().p("AgaAvQgLgGgGgMQgGgNAAgQQAAgZANgNQAOgPAWAAQAOAAAMAHQAMAGAGANQAGALAAAQQAAAagNAOQgNAOgYAAQgPAAgLgHgAgQgWQgFAJAAANQAAAPAFAIQAFAIALAAQALAAAFgIQAFgIAAgPQAAgNgFgJQgFgIgLAAQgKAAgGAIg");
	this.shape_491.setTransform(468.625,272.975);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FFFFFF").s().p("AgXBJIAAhSIgPAAIAAgOIAPgHIAAgIQAAgRAJgJQAIgIATAAQAOAAAMAFIgHAUQgJgCgHAAQgGAAgDADQgCADAAAGIAAAHIAYAAIAAAVIgYAAIAABSg");
	this.shape_492.setTransform(459.675,270.925);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FFFFFF").s().p("AghA1IAAhnIAWAAIAEARIABAAQAFgJAHgFQAJgFAJAAIAKABIgDAaIgIAAQgNgBgIAIQgHAGAAAMIAAA1g");
	this.shape_493.setTransform(446.675,272.9);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FFFFFF").s().p("AghAoQgOgOAAgZQAAgaANgNQANgPAWAAQAWAAAMANQANAMAAAXIAAAMIhCAAQABANAGAGQAGAHAMAAQAKAAAHgCQAJgCAJgEIAAAWQgGADgKACIgVACQgXAAgPgOgAgMgbQgFAGgBAKIAnAAQAAgKgFgGQgFgFgKAAQgIAAgFAFg");
	this.shape_494.setTransform(436.225,272.975);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FFFFFF").s().p("AgvBMIAAiVIAXAAIAEAOIABAAQALgQARAAQATAAAKAPQAKANAAAaQAAARgEALQgFAMgJAHQgJAGgMAAQgSAAgKgNIgCAAIACAPIAAAqgAgOgtQgEAFgBAQIAAADQAAAPAFAIQAFAHAKAAQATAAAAgeQAAgQgFgHQgFgIgKAAQgJAAgFAHg");
	this.shape_495.setTransform(424.875,275.175);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#FFFFFF").s().p("AglAtQgIgIAAgQQAAgRALgGQAMgIAWgBIASAAIAAgFQAAgQgQAAQgMAAgQAIIgKgTQASgKAVAAQAVAAALAJQALAJAAATIAABEIgUAAIgFgOIgBAAQgHAJgHADQgHAEgMAAQgPAAgJgJgAgKAJQgGAEAAAIQAAAMAOAAQAIAAAHgFQAFgHAAgIIAAgJIgLAAQgLABgGAEg");
	this.shape_496.setTransform(412.5,272.975);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FFFFFF").s().p("AgvBMIAAiVIAXAAIAEAOIABAAQALgQARAAQATAAAKAPQAKANAAAaQAAARgEALQgFAMgJAHQgJAGgMAAQgSAAgKgNIgCAAIACAPIAAAqgAgOgtQgEAFgBAQIAAADQAAAPAFAIQAFAHAKAAQATAAAAgeQAAgQgFgHQgFgIgKAAQgJAAgFAHg");
	this.shape_497.setTransform(401.375,275.175);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FFFFFF").s().p("AgWBJIAAhSIgQAAIAAgOIAQgHIAAgIQAAgRAIgJQAJgIASAAQAPAAALAFIgHAUQgJgCgHAAQgFAAgEADQgCADAAAGIAAAHIAZAAIAAAVIgZAAIAABSg");
	this.shape_498.setTransform(387.05,270.925);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FFFFFF").s().p("AgaAvQgLgGgGgMQgGgNAAgQQAAgZANgNQANgPAXAAQAPAAAMAHQAMAHAFAMQAGAMAAAPQAAAagNAOQgNAOgYAAQgOAAgMgHgAgPgWQgFAIAAAOQAAAQAFAHQAFAIAKAAQAMAAAEgIQAFgHAAgQQAAgOgFgIQgEgIgMAAQgLAAgEAIg");
	this.shape_499.setTransform(376.875,272.975);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FFFFFF").s().p("AgNA3QgJgIAAgRIAAgxIgNAAIAAgMIAPgKIAJgWIARAAIAAAWIAdAAIAAAWIgdAAIAAAxQAAAGADADQAEACAFAAQAIAAAKgDIAAAVQgLAFgPAAQgRAAgGgJg");
	this.shape_500.setTransform(361.85,271.975);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FFFFFF").s().p("AgXA0QgIgBgHgDIAAgXQAIADAJADQAMACAGAAQAOAAAAgJQAAgDgBgCIgIgFIgMgGQgNgFgEgDQgHgFgBgFQgEgFAAgJQAAgNAMgIQAJgIAUAAQASAAASAJIgIAUIgPgFQgIgDgGAAQgLAAAAAHQAAAEAEADIAQAIQANAFAGAEQAGAFACAEQACAGAAAHQAAAQgKAJQgMAIgVAAg");
	this.shape_501.setTransform(353.15,272.975);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FFFFFF").s().p("AglAtQgIgIAAgQQAAgRALgGQAMgIAWgBIASAAIAAgFQAAgQgQAAQgMAAgQAIIgKgTQASgKAVAAQAVAAALAJQALAKAAASIAABEIgUAAIgFgOIgBAAQgIAKgHACQgGAEgMAAQgQAAgIgJgAgKAJQgGAEAAAIQAAAMANAAQAJAAAGgFQAGgGAAgJIAAgJIgLAAQgLABgGAEg");
	this.shape_502.setTransform(342.325,272.975);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FFFFFF").s().p("AgpBEIAAiHIAdAAIAABvIA2AAIAAAYg");
	this.shape_503.setTransform(332.05,271.4);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#D4116E").s().p("AgLAyQgEgEAAgIQAAgHAEgEQAEgEAHAAQAIAAAEAEQAEAEAAAHQAAAIgEAEQgEAEgIAAQgHAAgEgEgAgLgaQgEgEAAgHQAAgHAEgFQAFgEAGAAQAIAAAEAEQAEAEAAAIQAAAIgEADQgEAEgIAAQgHAAgEgEg");
	this.shape_504.setTransform(318.525,273.025);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#D4116E").s().p("AgpBEIAAiHIAdAAIAABvIA2AAIAAAYg");
	this.shape_505.setTransform(310.975,271.4);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#D4116E").s().p("AgNBEIAAiHIAbAAIAACHg");
	this.shape_506.setTransform(301.925,271.4);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#D4116E").s().p("AAjBEIgKggIgxAAIgKAgIgfAAIAwiHIAjAAIAwCHgAgQAMIAiAAIgSg6g");
	this.shape_507.setTransform(292.225,271.375);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#D4116E").s().p("AAuBEIAChpIgBAAIgjBpIgaAAIghhpIAAAAIABAqIAAA/IgaAAIAAiHIAoAAIAgBnIAAAAIAhhnIAnAAIAACHg");
	this.shape_508.setTransform(276.7,271.4);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#D4116E").s().p("AgmBEIAAiHIBNAAIAAAYIgxAAIAAAeIAtAAIAAAWIgtAAIAAAjIAxAAIAAAYg");
	this.shape_509.setTransform(262.75,271.4);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#E5E5E5").s().p("AjQCOIAAkbIGhAAIAAEbg");
	this.shape_510.setTransform(293.4,293.925);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#AAB6AE").s().p("AgSgCIAlgOIAAAhg");
	this.shape_511.setTransform(270,368.625);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#E5E5E5").s().p("AjcB+IgmgUIAvjnIGgAAIA2D7g");
	this.shape_512.setTransform(294,357.7);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#F2F2F2").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_513.setTransform(326.375,320.525);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#D5116D").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_514.setTransform(322.175,320.525);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#7C0645").s().p("AkzAKIAAgSIJnAAIAAASg");
	this.shape_515.setTransform(293.8,366.95);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#25282B").s().p("AD2A1InrAAIgPA0IAAjRIIJAAIAADRg");
	this.shape_516.setTransform(294,339.875);

	this.instance_37 = new lib.Path_7_1();
	this.instance_37.parent = this;
	this.instance_37.setTransform(294,312.65,1,1,0,0,0,26.1,2.2);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#25282B").s().p("AkEBoIAAjPIIJAAIAADPg");
	this.shape_517.setTransform(294,297.75);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#7C0645").s().p("AABARQgiAAgWgaIgFgHIB5AAIgKAhg");
	this.shape_518.setTransform(261.225,353.7);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#7C0645").s().p("AgyARIgKghIB5AAQgTAhgqAAg");
	this.shape_519.setTransform(326.725,353.7);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#D5116D").s().p("AkxEUIApiMIh6AAIAFAIQgRgVAAgaIAAkrIABgPQAGgZATgQQAUgRAbAAIBDAAIAAAqIIJAAIAAgqIA/AAQAeAAAVAVQAWAWAAAeIAAErQAAAVgMASIh3AAIApCMgAD4BEIAPA0IAAjRIoJAAIAADRIAOg0g");
	this.shape_520.setTransform(293.825,338.4);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#7C0645").s().p("AGNAsQAAgegVgUQgVgVgfAAIg/AAIAAgEIoJAAIAAAEIhDAAQgaAAgUAQQgUAQgFAZQADg0AegeQAagYAgAAIAvAAIAAAWIIJAAIAAgWIAvAAQAiAAAaAdQAfAlAABCIgCAVg");
	this.shape_521.setTransform(293.975,313.625);

	this.instance_38 = new lib.Path_12();
	this.instance_38.parent = this;
	this.instance_38.setTransform(394.5,315.5,1,1,0,0,0,165.5,99.5);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#F2F2F2").s().p("AvOANIAAgZIedAAIAAAZg");
	this.shape_522.setTransform(399.4,378.9);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#F2F2F2").s().p("AvOANIAAgZIedAAIAAAZg");
	this.shape_523.setTransform(399.4,373.2);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#F2F2F2").s().p("As3ANIAAgZIZvAAIAAAZg");
	this.shape_524.setTransform(384.325,367.5);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#F2F2F2").s().p("AsLANIAAgZIYXAAIAAAZg");
	this.shape_525.setTransform(379.95,361.8);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#F2F2F2").s().p("At+ANIAAgZIb9AAIAAAZg");
	this.shape_526.setTransform(391.4,356.075);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#F2F2F2").s().p("AsyANIAAgZIZlAAIAAAZg");
	this.shape_527.setTransform(383.825,350.375);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#F2F2F2").s().p("AvOANIAAgZIedAAIAAAZg");
	this.shape_528.setTransform(399.4,344.65);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#F2F2F2").s().p("AkjANIAAgZIJHAAIAAAZg");
	this.shape_529.setTransform(331.1,321.75);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#F2F2F2").s().p("AkjANIAAgZIJHAAIAAAZg");
	this.shape_530.setTransform(331.1,316.05);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#F2F2F2").s().p("Au0ANIAAgZIdpAAIAAAZg");
	this.shape_531.setTransform(396.875,338.95);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#F2F2F2").s().p("Au0ANIAAgZIdpAAIAAAZg");
	this.shape_532.setTransform(396.875,333.25);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#F2F2F2").s().p("AALAWIAAgbQAAgFgCgCQgCgDgGAAQgFAAgDAEQgDAEAAAHIAAAWIgHAAIAAgqIAFAAIABAGIABAAQACgDADgCIAHgCQAIAAAEAEQAEAEAAAIIAAAbg");
	this.shape_533.setTransform(532.775,241.675);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#F2F2F2").s().p("AgLAWIAAgqIAFAAIABAIQACgEADgCQADgDAEAAIAFABIgBAGIgEgBQgFAAgDAFQgEAEAAAGIAAAWg");
	this.shape_534.setTransform(528.975,241.675);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#F2F2F2").s().p("AgMATQgEgEAAgFQAAgMAUgBIAHgBIAAgCQAAgGgCgCQgDgCgEAAQgFAAgGADIgCgEIAHgDIAGgBQAIAAADADQAEAEAAAHIAAAcIgFAAIgBgGIAAAAQgDAEgEABQgDACgEAAQgGAAgDgDgAAEABQgGgBgEADQgDACAAAFQAAADACACQACABAEAAQAFAAADgDQAEgDAAgGIAAgEg");
	this.shape_535.setTransform(524.675,241.75);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#F2F2F2").s().p("AgMAQQgFgFAAgLQAAgIAFgHQAFgGAIAAQAIAAAEAFQAFAFAAAJIAAADIgcAAQAAAHADAFQAEAEAGAAQAHAAAGgDIAAAFIgGADIgIAAQgIAAgGgGgAgHgMQgCACgBAHIAVAAQAAgGgDgDQgCgEgFAAQgEAAgEAEg");
	this.shape_536.setTransform(520.375,241.725);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#F2F2F2").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_537.setTransform(517.125,240.825);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#F2F2F2").s().p("AgUAdIAAgKIAVgWIADgEIABgDQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAgBIgDgBIgFACIgHAEIgIgKIAIgFIAGgDIAHgBQAGAAAEACQAEACACAEQADAEAAAEIgBAGIgDAGIgEAEIgMAMIAAAAIAVAAIAAANg");
	this.shape_538.setTransform(513.7,240.975);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#F2F2F2").s().p("AALAWIAAgbQAAgFgCgCQgCgDgGAAQgFAAgDAEQgEADABAIIAAAWIgHAAIAAgqIAGAAIABAGIAAAAQABgDAFgCIAGgCQAIAAAEAEQAEAEAAAIIAAAbg");
	this.shape_539.setTransform(509,241.675);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#F2F2F2").s().p("AgJAUQgFgEgCgEQgDgGAAgGQAAgJAGgGQAFgGAIAAQAJAAAFAGQAGAGAAAJQAAAKgGAGQgFAGgJAAQgEAAgFgCgAgJgLQgDAEAAAHQAAAIADAFQAEAEAFAAQAGAAAEgEQADgFAAgIQAAgHgDgEQgEgFgGAAQgGAAgDAFg");
	this.shape_540.setTransform(504.125,241.725);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#F2F2F2").s().p("AgCAdIAAgpIAFAAIAAApgAgCgVQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADIgDACQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBg");
	this.shape_541.setTransform(500.725,240.925);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#F2F2F2").s().p("AgOAUIAAgGIAHACIAGABQAEAAADgCQADgBAAgEQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBAAAAgBIgIgEIgIgDIgEgEQgBgCAAgDQAAgEAEgEQAEgDAHAAQAHAAAGADIgCAFQgGgDgGAAQgDAAgDACQAAAAgBABQAAAAgBAAQAAABAAABQAAAAAAABIABADIADACIAGADQAJADABACQADADAAAEQAAAGgEADQgEADgIAAQgHAAgGgCg");
	this.shape_542.setTransform(497.825,241.725);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#F2F2F2").s().p("AgCAdIAAgpIAFAAIAAApgAgCgVIgBgDIABgDIACgBIADABIABADQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_543.setTransform(494.875,240.925);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#F2F2F2").s().p("AgDAVIgQgpIAHAAIAMAkIAAAAIANgkIAHAAIgRApg");
	this.shape_544.setTransform(491.9,241.725);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#25282B").s().p("A3fEiIAApDMAu/AAAIAAJDg");
	this.shape_545.setTransform(395.025,278.725);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#F2F2F2").s().p("AhgAGIAAgLIDBAAIAAALg");
	this.shape_546.setTransform(514,231.675);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#F2F2F2").s().p("AgZAGIAAgLIAzAAIAAALg");
	this.shape_547.setTransform(538.425,231.675);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#F2F2F2").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQAEAEAAAEQAAAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_548.setTransform(527.55,231.675);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#F2F2F2").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQAEAEAAAEQAAAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_549.setTransform(532.05,231.675);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#F2F2F2").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_550.setTransform(249.95,231.675);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#AAB6AE").s().p("A3cAUIAAgnMAu5AAAIAAAng");
	this.shape_551.setTransform(394.85,231.7);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#FFFFFF").s().p("AgQAQQgGgGAAgKQAAgJAGgGQAHgHAJAAQAKAAAGAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgJAAgHgHg");
	this.shape_552.setTransform(394.525,221.475);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#4A4F55").s().p("A3cBkIAAjHMAu5AAAIAADHg");
	this.shape_553.setTransform(394.85,239.725);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#1BA6E0").s().p("A3cLrIAA3VMAu5AAAIAAXVg");
	this.shape_554.setTransform(394.85,324.45);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#25282B").s().p("A52PyIAA+UQAAggAagYQAagXAkAAMAw6AAAQAmAAAbAXQAaAYAAAiIAAeSgA3RNTMAuxAAAIAA5QMguxAAAg");
	this.shape_555.setTransform(394.525,314.05);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#25282B").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_556.setTransform(394.525,429.125);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#F2F2F2").s().p("Ap3AZQgTgBgPgGQgOgIAAgJIAAgBQAAgJAOgIQAPgGATgBITvAAQAUABAOAGQANAIAAAJIAAABQAAAKgNAHQgOAGgUABg");
	this.shape_557.setTransform(394.5,473.8);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#F2F2F2").s().p("A4WCNQgoAAgcgZQgcgaAAgjIAAjDMAztAAAIAADDQAAAjgcAaQgcAZgoAAg");
	this.shape_558.setTransform(394.525,429.125);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#AAB6AE").s().p("AoaCNIAAkZIQ1AAIAAEZg");
	this.shape_559.setTransform(394.525,457.275);

	this.instance_39 = new lib.ClipGroup_14();
	this.instance_39.parent = this;
	this.instance_39.setTransform(478.25,352.6,1,1,0,0,0,336.2,322.7);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#33B7E5").s().p("EgRoApwQoJjcmQmRQmSmSjcoIQjkobAApOQAApNDkobQDcoIGSmRQGQmSIJjcQIbjkJNAAQJOAAIbDkQIIDcGRGSQGSGRDcIIQDkIbAAJNQAAJOjkIbQjcIImSGSQmRGRoIDcQobDkpOAAQpNAAobjkg");
	this.shape_560.setTransform(432.9,320.15);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#9BDBF2").s().p("EgRhApYQoFjamPmOQmPmOjboDQjioXAApIQAApHDioXQDboDGPmOQGPmNIFjbQIXjiJKAAQJKAAIYDiQIFDaGPGOQGPGNDaIEQDjIXAAJHQAAJIjjIXQjaIDmPGOQmPGOoFDaQoYDipKAAQpKAAoXjig");
	this.shape_561.setTransform(434.2,322.45);

	this.instance_40 = new lib.ClipGroup_8();
	this.instance_40.parent = this;
	this.instance_40.setTransform(157.8,370.8,1,1,0,0,0,71,85.2);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#D4116E").s().p("AgVB7QgJgIAAgOQAAgOAIgJQAJgHANAAQAPAAAIAIQAIAIAAAOQAAAOgIAIQgIAIgPAAQgOAAgHgIgAgUApIgJirIA8AAIgJCrg");
	this.shape_562.setTransform(619.875,550.35);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#D4116E").s().p("AAqCAIhDhsIgXARIAABbIg2AAIAAj/IA2AAIAAB2IBah2IA9AAIhaBxIBaCOg");
	this.shape_563.setTransform(604.425,550.1);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#D4116E").s().p("AAtCAIhwjAIgBAAQADAvAAAZIAAB4IgwAAIAAj/IBFAAIBuC/IABAAQgCgxAAgVIAAh5IAxAAIAAD/g");
	this.shape_564.setTransform(576.25,550.1);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#D4116E").s().p("AgaCAIAAj/IA1AAIAAD/g");
	this.shape_565.setTransform(555.625,550.1);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#D4116E").s().p("AAvCAIgjiGIgGgdIgGgfIgEAfIgHAeIgiCFIg+AAIhCj/IA2AAIAgCLQAJAkAEAgIAFggIAsivIAzAAIAxDPIAGgjIAnisIA2AAIhBD/g");
	this.shape_566.setTransform(522.9,550.1);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#D4116E").s().p("AhaBiQgfgigBhAQAAhAAhghQAfgiA7AAQA6AAAgAiQAgAigBA/QAAA/gfAjQggAig7AAQg6AAgggigAgwhAQgQAWgBAqQABArAQAWQARAWAfAAQBBAAAAhXQAAhWhAAAQghAAgQAWg");
	this.shape_567.setTransform(491.2,550.075);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#D4116E").s().p("AhOCAIAAj/IA2AAIAADSIBnAAIAAAtg");
	this.shape_568.setTransform(467.7,550.1);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#D4116E").s().p("AgWB7QgIgIAAgOQAAgOAIgJQAJgHANAAQAPAAAIAIQAIAHAAAPQAAAOgIAIQgIAIgPAAQgOAAgIgIgAgUApIgJirIA8AAIgJCrg");
	this.shape_569.setTransform(641.575,507.15);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#D4116E").s().p("AhKBiQgegiAAhAQAAg+AjgiQAjgjA/AAQAnAAAlAQIgSAsQgcgPgeAAQgiABgWAXQgVAYAAAnQAAAqARAWQARAWAgAAQAOAAAUgEIAAg2IgwAAIAAgsIBlAAIAACFQgaAIgUADQgWADgXAAQg5AAgfgig");
	this.shape_570.setTransform(623.025,506.9);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#D4116E").s().p("AAtCAIhvjAIgBAAQACAyAAAWIAAB4IgwAAIAAj/IBFAAIBvC/IABAAIgDi/IAxAAIAAD/g");
	this.shape_571.setTransform(595.75,506.9);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#D4116E").s().p("AgaCAIAAj/IA1AAIAAD/g");
	this.shape_572.setTransform(575.175,506.9);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#D4116E").s().p("AAtCAIhvjAIgCAAQAEAvAAAZIAAB4IgxAAIAAj/IBFAAIBuC/IACAAQgDgxAAgVIAAh5IAxAAIAAD/g");
	this.shape_573.setTransform(554.55,506.9);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#D4116E").s().p("AAqCAIg8hiIgdAAIAABiIg3AAIAAj/IBLAAQAzAAAaATQAZATAAAmQAAAYgNARQgLAQgYALIBMBvgAgvgNIARAAQAaAAAMgJQAMgIAAgTQAAgTgNgHQgLgIgbABIgQAAg");
	this.shape_574.setTransform(529.675,506.9);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#D4116E").s().p("ABBCBIgSg9IhdAAIgSA9Ig7AAIBakBIBCAAIBbEBgAggAXIBCAAIgihvg");
	this.shape_575.setTransform(503.75,506.85);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#D4116E").s().p("AAuCAIgujBIgFAeIgpCjIg+AAIhBj/IA2AAIAgCLQAJAnAEAdIALhAIAmiPIAzAAIAlCPIAGAdIAGAjIAFgjIAoisIA2AAIhCD/g");
	this.shape_576.setTransform(473.95,506.9);

	this.instance_41 = new lib.Path_0_2();
	this.instance_41.parent = this;
	this.instance_41.setTransform(406.5,321.8,1,1,0,0,0,31.4,10.8);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#3CB9E4").s().p("AjiCLIBDkVIGCAAIgREVg");
	this.shape_577.setTransform(406.5,426.575);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#F6BD2C").s().p("AjeCLIAAkVIGcAAIAhEVg");
	this.shape_578.setTransform(499.325,426.575);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#D4116E").s().p("AjVCLIARkVIGaAAIAAEVg");
	this.shape_579.setTransform(452.3,426.575);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#25282B").s().p("AjPCLIgikVIGZAAIBKEVg");
	this.shape_580.setTransform(545.825,426.575);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#25282B").s().p("AgUA5QgMgKgDgPQgDgOAGgQQAFgLAbg5IAgBCQAOAfgYAYQgKAKgLABIgBABQgKAAgKgKg");
	this.shape_581.setTransform(414.0863,321.7013);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#F6BD2C").s().p("AgUA5QgMgKgDgPQgDgOAGgQQAFgLAbg5IAgBCQAOAfgYAYQgLAMgLAAQgKAAgKgKg");
	this.shape_582.setTransform(404.7863,321.7013);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#D4116E").s().p("AgUA5QgMgKgDgPQgDgOAGgQQAFgNAKgTIARgkIAgBCQAOAfgYAYQgLAMgLAAQgKAAgKgKg");
	this.shape_583.setTransform(395.1834,321.7013);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#3CB9E4").s().p("AgUA5QgMgKgDgPQgDgOAGgQQAFgNAKgTIARgkIAgBCQANAegXAZQgLAMgLAAQgKAAgKgKg");
	this.shape_584.setTransform(385.8717,321.7013);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#08536F").s().p("Ak6BrIAAjVIJ0AAIAADVg");
	this.shape_585.setTransform(406.55,321.725);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#25282B").s().p("AgbAcQgLgMAAgQQAAgPALgMQAMgMAPAAQAQAAAMAMQALAMAAAPQAAAQgLAMQgMALgQAAQgPAAgMgLg");
	this.shape_586.setTransform(451.175,328.5);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#25282B").s().p("AgbAcQgLgMAAgQQAAgPALgMQAMgLAPAAQAQAAAMALQALAMAAAPQAAAQgLAMQgMALgQAAQgPAAgMgLg");
	this.shape_587.setTransform(451.175,316.075);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#4A4F55").s().p("AnkCaIAAkzIPJAAIAAEzg");
	this.shape_588.setTransform(417.15,321.7);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#ABB7AF").s().p("AhSgIIClgpIAABjg");
	this.shape_589.setTransform(373.8,465.625);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#E6E6E6").s().p("Au8F6Iimg8IDKq3IcSAAIDpLzg");
	this.shape_590.setTransform(477.825,432.85);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#127EA6").s().p("A0xAcIAAg3MApjAAAIAAA3g");
	this.shape_591.setTransform(477.825,460.575);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#1BA8DF").s().p("A0xE4IEJpvMAhXAAAIEDJvg");
	this.shape_592.setTransform(477.825,426.575);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#25282B").s().p("AxWEvIAApdMAitAAAIAAJdg");
	this.shape_593.setTransform(479.05,373.025);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#E6E6E6").s().p("AgfAgQgNgOAAgSQAAgSANgMQANgOASAAQATAAANAOQANAMAAASQAAATgNANQgNANgTAAQgSAAgNgNg");
	this.shape_594.setTransform(335.7,311);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#08536F").s().p("AxSBGIAAiLMAimAAAIAACLg");
	this.shape_595.setTransform(479.4,293.7);

	this.instance_42 = new lib.Path_7();
	this.instance_42.parent = this;
	this.instance_42.setTransform(474.25,345.25,1,1,0,0,0,157.5,70.6);
	this.instance_42.alpha = 0.1992;

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#127EA6").s().p("A2EA/Qg8AAgygkQgwghgVg4MAxvAAAQgVA4gwAhQgxAkg9AAg");
	this.shape_596.setTransform(477,409.575);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#6ACAEA").s().p("AYLAwQg3g2hPAAMgsJAAAQhOAAg4A2Qg2A3gCBLIAAimQAAhNA4g5QA4g3BOAAMAsJAAAQBPAAA3A3QA4A5AABNIAACmQgChLg2g3g");
	this.shape_597.setTransform(477.025,287.45);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#1BA8DF").s().p("A2ELbQhOAAg5g4Qg3g4AAhOIAAw5QAAhOA3g5QA5g3BOAAMAsJAAAQBPAAA4A3QA3A5AABOIAAQ5QAABOg3A4Qg4A4hPAAg");
	this.shape_598.setTransform(477,342.75);

	this.instance_43 = new lib.Path_6();
	this.instance_43.parent = this;
	this.instance_43.setTransform(477,224.3,1,1,0,0,0,88.8,48.1);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#E6E6E6").s().p("At2HhIAAvBIbtAAIAAPBg");
	this.shape_599.setTransform(476.95,224.3);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#25282B").s().p("AxSE4IAApvMAimAAAIAAJvg");
	this.shape_600.setTransform(479.4,241.225);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#D4116E").s().p("AiqHPQhdhSgYh2QgZh0Avh+QAphuBOieICQkgICKEbQBLCaAuBmQA4B9gXB0QgVBvhYBbQhSBUhbAEIgJABQhXAAhShJg");
	this.shape_601.setTransform(414.8747,529.3125);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#25282B").s().p("Ah7FQQhDg8gShVQgShVAihbQAehQA5hyIBnjRIBkDOQA3BuAhBLQApBagQBVQgQBQhABCQg7A9hCAEIgGAAQg/AAg8g1g");
	this.shape_602.setTransform(358.915,645.1326);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#F6BD2C").s().p("AhrElQg7g0gQhLQgQhJAehQQAahFAyhlIBbi2IBXC0QAwBhAdBAQAjBQgOBKQgNBGg4A5Qg0A1g6ADIgFABQg3AAg0gvg");
	this.shape_603.setTransform(716.159,233.9087);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#3CB9E4").s().p("AiHFwQhKhBgUheQgThdAlhjQAhhYA+h+IByjkIBuDhQA8B6AkBRQAtBjgSBdQgRBYhGBIQhBBDhJAEIgHAAQhEAAhCg6g");
	this.shape_604.setTransform(642.5134,167.9095);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#9BDBF2").s().p("EgRoApwQoIjcmRmRQmSmRjcoJQjkobAApOQAApNDkobQDcoIGSmSQGRmRIIjcQIbjkJNAAQJOAAIbDkQIIDcGSGRQGRGSDcIIQDkIbAAJNQAAJOjkIbQjcIJmRGRQmSGRoIDcQobDkpOAAQpNAAobjkg");
	this.shape_605.setTransform(467,392);

	this.instance_44 = new lib.ClipGroup_0();
	this.instance_44.parent = this;
	this.instance_44.setTransform(193.25,183,1,1,0,0,0,85.8,87);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#F3F3F3").s().p("AgFDWQgGgngSgjQg6hxibgbQAOAAAVgFQApgKAkgVQByhBAOiQQAEA4AhA7QBDB1CNANQg1AEg5AgQhyBBgVCRg");
	this.shape_606.setTransform(511.275,275.3);

	this.instance_45 = new lib.Path_2_5();
	this.instance_45.parent = this;
	this.instance_45.setTransform(560.5,460.4,1,1,0,0,0,7.7,8.8);
	this.instance_45.alpha = 0.5;

	this.instance_46 = new lib.Path_1_7();
	this.instance_46.parent = this;
	this.instance_46.setTransform(521.25,437.05,1,1,0,0,0,29.8,44.5);
	this.instance_46.alpha = 0.5;

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#F6BD2C").s().p("AAoG1QgbgbAAgmIAAlDIgXAAIAAFDQAAAmgbAbQgaAbgmAAQgmAAgbgbQgbgbAAgmIAAlDIgVAAIAABlQAAAmgbAbQgbAbgmAAQgmAAgbgbQgbgbAAgmIAAoAQAAgqAegeQAegdAqAAIJRAAQAqAAAeAdQAeAeAAAqIAAJkQAAAmgbAbQgbAbgmAAQgmAAgbgbQgbgbAAgmIAAjJIgTAAIAAFDQAAAmgbAbQgbAbgmAAQgmAAgagbg");
	this.shape_607.setTransform(531.325,435.15);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#6ACAEA").s().p("AjcBEQhbgcAAgoQAAgnBbgcQBbgdCBAAQCBAABcAdQBbAcAAAnQAAAohbAcQhcAdiBAAQiBAAhbgdg");
	this.shape_608.setTransform(472.775,523.9);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#3CB9E4").s().p("AzQA3IAAhtMAmhAAAIAABtg");
	this.shape_609.setTransform(472.15,396.475);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#4A4F55").s().p("AntJGQjjhhiwivQiviwhgjiQhkjsAAkCIADhfMAnhAAAIADBfQAAEChkDsQhhDiivCwQiwCvjjBhQjsBkkBAAQkBAAjshkgAytpKQAAD0BeDeQBbDWCmCmQCmCmDWBbQDfBfDzAAQDzAADfhfQDXhbClimQCmimBcjWQBejeAAj0IgBgZMglaAAAg");
	this.shape_610.setTransform(472.15,461.175);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#3CB9E4").s().p("Al6XmMgDUgvKISdAAMAAAAvKg");
	this.shape_611.setTransform(413,552.95);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#127EA6").s().p("AvKXmMgDTgvKMAk7AAAMgCmAvKg");
	this.shape_612.setTransform(472.15,552.95);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#DFA026").s().p("AgJA4QgXgEgNgTQgOgTAEgWQAEgXATgOQATgNAXADQAXAEANATQAOAUgEAWQgEAXgTANQgPALgRAAIgKgBg");
	this.shape_613.setTransform(382.175,365.3347);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#DFA026").s().p("AgMBLQgfgFgSgaQgSgaAFgeQAFgfAagSQAagSAeAFQAfAGASAZQASAagFAeQgGAfgaASQgTAOgXAAIgNgBg");
	this.shape_614.setTransform(361.8587,373.9987);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#DFA026").s().p("AgFAlQgQgCgJgNQgJgNADgOQACgQANgJQANgJAOADQAQACAJANQAJANgDAOQgCAQgNAJQgKAHgMAAIgFgBg");
	this.shape_615.setTransform(440.375,406.975);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#DFA026").s().p("AgBAOQgGgBgDgFQgDgFABgEQABgGAEgDQAFgDAEABQAGABADAEQAEAFgBAEQgBAGgFADQgEADgEAAIgBAAg");
	this.shape_616.setTransform(424.8986,372.3986);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#DFA026").s().p("AgDAXQgKgCgFgIQgGgHACgJQACgJAIgGQAHgFAJABQAJACAGAIQAFAHgBAJQgCAJgIAGQgGAEgHAAIgDAAg");
	this.shape_617.setTransform(435.5144,368.775);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#DFA026").s().p("AgEAaQgLgCgGgIQgGgJACgKQACgLAJgHQAIgGAKACQALACAHAJQAGAJgCAKQgCALgJAGQgHAFgIAAIgEgBg");
	this.shape_618.setTransform(397.975,329.375);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#DFA026").s().p("AgDATQgIgBgEgHQgFgGACgHQABgIAGgFQAHgFAHACQAIABAFAHQAEAGgBAHQgBAIgHAFQgFAEgGAAIgDgBg");
	this.shape_619.setTransform(386.6653,333.7653);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#DFA026").s().p("AgEAbQgLgCgHgJQgGgKACgKQACgLAJgHQAJgHALACQALADAHAJQAGAJgCAKQgCAMgJAHQgHAFgIAAIgFgBg");
	this.shape_620.setTransform(373.175,352.9013);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#DFA026").s().p("AgMBKQgfgFgSgaQgSgZAFgeQAGgfAZgSQAagSAeAFQAfAGASAZQASAagFAeQgFAfgaASQgUAOgXAAIgNgCg");
	this.shape_621.setTransform(398.1837,403.56);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#DFA026").s().p("AgCAQQgHgBgEgFQgEgGABgGQABgHAHgEQAFgDAGABQAGABAEAFQAFAGgBAGQgBAHgGAEQgFADgFAAIgCgBg");
	this.shape_622.setTransform(411.3,368.65);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#DFA026").s().p("AgGArQgSgDgKgPQgLgPADgQQADgSAPgLQAOgKARADQASADAKAPQALAPgDAQQgDASgPALQgLAIgOAAIgGgBg");
	this.shape_623.setTransform(396.05,350.5896);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#DFA026").s().p("AgMBMQgggFgTgaQgSgbAFgeQAGggAbgSQAZgTAfAFQAgAGATAaQASAagGAfQgFAggbASQgUAPgXAAIgNgCg");
	this.shape_624.setTransform(416.75,349.7098);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#DFA026").s().p("AgGAqQgRgDgLgOQgKgPADgQQADgSAPgKQAOgKAQADQASADAKAOQAKAPgDAQQgDASgPAKQgLAIgNAAIgGgBg");
	this.shape_625.setTransform(410,386.0737);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#DFA026").s().p("AgGAnQgPgDgKgNQgJgOACgPQADgQANgJQAOgJAPACQAQADAJANQAKAOgDAPQgDAQgNAJQgLAHgMAAIgGAAg");
	this.shape_626.setTransform(421.235,362.3261);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#DFA026").s().p("AgCARQgHgBgEgGQgEgGABgGQABgHAGgEQAGgEAGABQAHABAEAGQAEAGgBAGQgBAHgGAEQgFADgFAAIgCAAg");
	this.shape_627.setTransform(420.2605,401.425);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#DFA026").s().p("AgKBCQgcgFgQgWQgQgXAFgaQAFgcAWgQQAXgQAaAFQAcAFAQAWQAQAXgFAaQgFAcgWAQQgSAMgUAAIgLgBg");
	this.shape_628.setTransform(432.775,389.175);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#DFA026").s().p("AgPBbQglgHgWgfQgWgfAHgkQAGgmAfgWQAfgWAlAHQAlAGAWAfQAWAfgHAkQgGAmgfAWQgYARgcAAIgQgBg");
	this.shape_629.setTransform(390.825,375.15);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#DFA026").s().p("AgDAWQgJgCgFgHQgGgIACgIQACgJAHgFQAIgGAIACQAJACAFAHQAFAIgBAIQgCAJgHAFQgGAEgHAAIgDAAg");
	this.shape_630.setTransform(399.4656,358.9656);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#DFA026").s().p("AgCARQgIgBgEgGQgEgGABgGQABgIAHgEQAGgEAGABQAHABAFAGQAEAGgCAHQgBAHgGAFQgEADgFAAIgDgBg");
	this.shape_631.setTransform(402.1017,341.1517);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#DFA026").s().p("AgKA/QgagEgPgWQgQgVAFgaQAEgaAWgQQAWgPAZAEQAaAFAPAWQAQAVgFAaQgEAbgWAOQgRANgTAAIgLgCg");
	this.shape_632.setTransform(375.175,334.7);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#F6BD2C").s().p("AA0HYQi5hAiSi4QiSi3gWjDQgWjDB0hdQB0hdC6BAQC5BBCSC3QCTC4AWDCQAVDDh0BdQhFA3hdAAQhAAAhMgag");
	this.shape_633.setTransform(404.1494,368.1292);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#DFA026").s().p("AAbIDQjNg6iZjAQiZjAgMjUQgLjVCKhuQCJhuDNA6QDNA6CZDAQCaDAALDUQALDViJBuQhaBIh3AAQg/AAhHgUg");
	this.shape_634.setTransform(399.35,372.725);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#F3F3F3").s().p("AgEAXQgKgCgFgIQgFgIACgJQACgJAIgGQAIgFAJACQAJACAFAIQAGAIgCAJQgCAJgIAGQgGAEgHAAIgEgBg");
	this.shape_635.setTransform(653.6,300.25);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#F3F3F3").s().p("AgEAXQgJgCgGgIQgFgIACgJQACgJAIgGQAIgFAJACQAJACAGAIQAFAIgCAJQgCAJgIAGQgGAEgGAAIgFgBg");
	this.shape_636.setTransform(655.575,290.6019);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#F3F3F3").s().p("AgEAXQgJgCgGgIQgFgIACgJQACgJAIgGQAIgFAJACQAJACAGAIQAFAIgCAJQgCAJgIAGQgGAEgGAAIgFgBg");
	this.shape_637.setTransform(655.575,290.6019);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#F3F3F3").s().p("AgDAXQgKgCgFgIQgGgIACgJQACgJAIgGQAIgFAJACQAKACAEAIQAGAIgCAJQgCAJgIAGQgGAEgHAAIgDgBg");
	this.shape_638.setTransform(657.55,280.975);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#F3F3F3").s().p("AgEAXQgJgCgGgIQgFgIACgJQACgJAIgGQAIgFAIACQAKACAGAIQAFAIgCAJQgCAJgIAGQgGAEgHAAIgEgBg");
	this.shape_639.setTransform(645.8,303.675);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#F3F3F3").s().p("AgEAXQgJgCgGgIQgFgIACgJQACgJAIgGQAIgFAJACQAJACAGAIQAFAIgCAJQgCAKgIAFQgGAEgHAAIgEgBg");
	this.shape_640.setTransform(647.775,294.0481);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#F3F3F3").s().p("AgEAXQgJgCgGgIQgFgIACgJQACgJAIgGQAIgFAJACQAJACAGAIQAFAIgCAJQgCAKgIAFQgGAEgHAAIgEgBg");
	this.shape_641.setTransform(647.775,294.0481);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#F3F3F3").s().p("AgEAXQgJgCgGgIQgFgIACgJQACgJAIgGQAIgFAJACQAJACAGAIQAFAIgCAJQgCAJgIAGQgGAEgHAAIgEgBg");
	this.shape_642.setTransform(649.7624,284.3981);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#F3F3F3").s().p("AgEAXQgJgCgGgIQgFgIACgIQACgKAIgGQAIgFAJACQAJACAGAIQAFAIgCAJQgCAJgIAGQgGAEgHAAIgEgBg");
	this.shape_643.setTransform(639.9981,297.45);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#F3F3F3").s().p("AgEAXQgJgCgGgIQgFgIACgJQACgJAIgGQAIgFAJACQAJACAGAIQAFAIgCAJQgCAJgIAGQgGAEgGAAIgFgBg");
	this.shape_644.setTransform(641.9519,287.8124);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#F3F3F3").s().p("AgEAXQgJgCgFgIQgGgIACgIQACgKAIgGQAIgFAIACQAKACAFAIQAGAIgCAJQgCAKgIAEQgGAFgHAAIgEgBg");
	this.shape_645.setTransform(651.6,309.95);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#F3F3F3").s().p("AgEAXQgJgCgGgIQgFgIACgJQACgJAIgGQAIgFAJACQAJACAGAIQAFAIgCAJQgCAJgIAGQgGAEgHAAIgEgBg");
	this.shape_646.setTransform(634.175,291.2481);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#F3F3F3").s().p("AgMA/QgagFgPgWQgPgXAFgZQAGgaAWgPQAWgPAaAFQAaAGAPAWQAPAXgGAZQgFAagXAPQgQALgSAAIgNgCg");
	this.shape_647.setTransform(514.3097,507.3597);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#F3F3F3").s().p("AgcCPQg8gNghgyQghgzAMg6QAMg6AzghQAygiA6AMQA7AMAiAzQAhAygMA7QgNA6gyAiQglAYgqAAQgOAAgPgDg");
	this.shape_648.setTransform(500.5152,469.8);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#F3F3F3").s().p("AgqDRQhWgSgxhKQgwhKAShVQARhWBKgxQBJgwBWARQBWASAxBKQAwBJgRBWQgSBWhKAxQg2Ajg9AAQgVAAgXgEg");
	this.shape_649.setTransform(532.3884,433.125);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#F3F3F3").s().p("AgiCqQhGgOgog8Qgng8AOhGQAPhGA8goQA8gnBFAOQBGAPAoA8QAoA8gPBFQgOBGg8AoQgtAdgxAAQgRAAgTgEg");
	this.shape_650.setTransform(501.4482,433.1482);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#08536F").s().p("ABuElQgigThgjVQhkjcgjggIBFgtQBZgwBogOQgIAOgCAwQgEBgAcCmQAXBSAJBJQAOB2glAAQgJAAgLgGg");
	this.shape_651.setTransform(585.9476,326.8135);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#08536F").s().p("AjvAkIAhiiIG+BcIghChg");
	this.shape_652.setTransform(541.725,331.7);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#08536F").s().p("Ag8BJIAhijIBYASIghCjg");
	this.shape_653.setTransform(619.275,288.65);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#127EA6").s().p("AEaQnQlihElmhPQhngWg8hcQg8haARhqQAnjwBfi8QC1liHIt7IGbBSIgBAZQgBAPABAKIBMQWQAUD/AABuQAADMgqCgQgdBuhbBCQhIA0hOAAQgXAAgYgFg");
	this.shape_654.setTransform(506.0361,441.4549);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#1BA8DF").s().p("AEyG2QgIgNgLgdQg/h8h8j5IgMgaQgJgPgPACQgMABgJAPQgDAEgKAXQgUAvgIAfQgLAsADAnImVhUQAghNgZhJQgTg3g+hKQg4hEAWhPQAWhPBRghQBAgZBMAHQCqARDpAyQEKA8CFAcIghCkQg9AFhHAAQgnAAgMASQgKAQAGAnQAaCsAfEAQAIAfABAOQABAbgbAIQgGABgGAAQgRAAgLgQg");
	this.shape_655.setTransform(563.8647,309.3438);

	this.instance_47 = new lib.Path_0_5();
	this.instance_47.parent = this;
	this.instance_47.setTransform(465.95,386.15,1,1,0,0,0,54.7,76.4);
	this.instance_47.alpha = 0.2695;

	this.instance_48 = new lib.Path_11();
	this.instance_48.parent = this;
	this.instance_48.setTransform(455.6,394.35,1,1,0,0,0,65,68);
	this.instance_48.alpha = 0.2695;

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#D4116E").s().p("AqJpUIRFimIDOVPIxFCmg");
	this.shape_656.setTransform(455.625,386.075);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#1BA8DF").s().p("AgHHlQgZhigwhUQiYkPlGggQAfgBAugMQBegXBSgvQEHiWAxlMQgEB0BDCBQCFECFkA+Qh9AIiDBMQkHCWghFMg");
	this.shape_657.setTransform(664.75,617.3);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#127EA6").s().p("AgHEqQgJg3gZgxQhRicjYgmQATgBAdgHQA6gOAygcQCfhbAUjJQAGBOAuBRQBdCkDFATQhJAFhQAuQigBbgdDJg");
	this.shape_658.setTransform(272.1,381.475);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#F3F3F3").s().p("AgLHFQgOhTgmhLQh7jtlIg6QAdgBAsgKQBXgWBNgrQDyiKAdkyQAKB2BGB9QCND4EsAdQhwAIh5BFQjyCLguExg");
	this.shape_659.setTransform(298.25,283.575);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#9BDBF2").s().p("EgRnApvQoIjcmSmRQmRmRjcoIQjkobAApOQAApMDkobQDcoIGRmSQGRmRIJjcQIajkJNAAQJOAAIaDkQIIDcGSGRQGRGSDcIIQDkIbAAJMQAAJOjkIbQjcIImRGRQmSGRoIDcQoaDkpOAAQpNAAoajkg");
	this.shape_660.setTransform(486.875,493.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_234},{t:this.instance_5},{t:this.instance_4},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.instance_3},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.instance_2},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.instance_1},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},1).to({state:[{t:this.shape_275},{t:this.instance_8},{t:this.shape_274},{t:this.shape_273},{t:this.instance_7},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.instance_6}]},1).to({state:[{t:this.shape_312},{t:this.instance_16},{t:this.shape_311},{t:this.shape_310},{t:this.instance_15},{t:this.shape_309},{t:this.instance_14},{t:this.instance_13},{t:this.shape_308},{t:this.shape_307},{t:this.instance_12},{t:this.shape_306},{t:this.instance_11},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.instance_10},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.instance_9}]},1).to({state:[{t:this.instance_19},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.instance_18},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.instance_17}]},1).to({state:[{t:this.shape_383},{t:this.instance_25},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.instance_24},{t:this.shape_367},{t:this.instance_23},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.instance_22},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.instance_21},{t:this.shape_335},{t:this.instance_20}]},1).to({state:[{t:this.shape_462},{t:this.instance_32},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.instance_31},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.instance_30},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.instance_29},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.instance_28},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.instance_27},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.instance_26}]},1).to({state:[{t:this.shape_478},{t:this.instance_34},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.instance_33}]},1).to({state:[{t:this.shape_561},{t:this.shape_560},{t:this.instance_39},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.instance_38},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.instance_37},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.instance_36},{t:this.shape_479},{t:this.instance_35}]},1).to({state:[{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.instance_43},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.instance_42},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.instance_41},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.instance_40}]},1).to({state:[{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.instance_48},{t:this.instance_47},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.instance_46},{t:this.instance_45},{t:this.shape_606},{t:this.instance_44}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_characters = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// characters
	this.instance = new lib.ClipGroup_8_1();
	this.instance.parent = this;
	this.instance.setTransform(406.4,700.85,1,1,0,0,0,68.8,70.4);

	this.instance_1 = new lib.ClipGroup_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(568.55,649.65,1,1,0,0,0,66.7,67.8);

	this.instance_2 = new lib.ClipGroup_6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(695.3,532.4,1,1,0,0,0,82.3,83.2);

	this.instance_3 = new lib.ClipGroup_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(645.4,358,1,1,0,0,0,70.7,81.8);

	this.instance_4 = new lib.ClipGroup_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(636.75,190.95,1.0246,1.0242,0,0,0,73.2,73.5);

	this.instance_5 = new lib.ClipGroup_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(396.1,130.75,1,1,0,0,0,97.7,103.4);

	this.instance_6 = new lib.ClipGroup_0();
	this.instance_6.parent = this;
	this.instance_6.setTransform(193.2,183,1,1,0,0,0,85.8,87);

	this.instance_7 = new lib.ClipGroup_8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(157.8,370.8,1,1,0,0,0,71,85.2);

	this.instance_8 = new lib.ClipGroup_4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(101.45,540.85,1,1,0,0,0,82.9,83.2);

	this.instance_9 = new lib.ClipGroup_5();
	this.instance_9.parent = this;
	this.instance_9.setTransform(251.5,643.25,1,1,0,0,0,68.9,70.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6ACAEA").s().p("EgTZAt9Qo9jzm5m5Qm6m6jyo9Qj8pRABqJQgBqID8pRQDyo9G6m5QG5m6I9jyQJRj7KIAAQKKAAJRD7QI8DyG6G6QG5G5DzI9QD6JRAAKIQAAKKj6JQQjzI9m5G6Qm6G5o8DzQpRD6qKAAQqIAApRj6g");
	this.shape.setTransform(401.25,411.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(11));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.ba_u2_s3_p2_tidy_equipment = function(mode,startPosition,loop) {
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
		this.button_george = this.buttons.button_george;
		this.button_jane = this.buttons.button_jane;
		this.button_harold = this.buttons.button_harold;
		this.button_rhonda = this.buttons.button_rhonda;
		this.button_paul = this.buttons.button_paul;
		this.button_monique = this.buttons.button_monique;
		this.button_polly = this.buttons.button_polly;
		this.button_naomi = this.buttons.button_naomi;
		this.button_tom = this.buttons.button_tom;
		this.button_neel = this.buttons.button_neel;
		this.button_hide = this.buttons.button_hide;
		this.Item_text = this.text.Item_text;
		this.stop();
		
		Hide_function.call(this);
		
		
		this.button_hide.addEventListener("click", Hide_function.bind(this));
		
		function Hide_function() {
			this.Item_text.visible = true;
			this.button_hide.visible = false;
			this.gotoAndStop(0);
			this.Item_text.text = "There is a team of 10 people who share equipment in a communal area. Recently it has been left untidy so they have been asked how they would like to fix this issue. \n\n Select each team member to see their suggestion.";
		}
		
		
		this.button_george.addEventListener("click", George_function.bind(this));
		
		function George_function() {
			this.Item_text.visible = true;
			this.button_hide.visible = true;
			this.gotoAndStop(1);
			this.Item_text.text = "George \n\n Keep the workspace neat and tidy – do not spread papers or belongings over a wide area.";
		}
		
		this.button_jane.addEventListener("click", Jane_function.bind(this));
		
		function Jane_function() {
			this.Item_text.visible = true;
			this.button_hide.visible = true;
			this.gotoAndStop(2);
			this.Item_text.text = "Jane \n\n Be methodical and complete a task before moving onto the next one – do not have too many tasks on the go.";
		}
		
		this.button_rhonda.addEventListener("click", Rhonda_function.bind(this));
		
		function Rhonda_function() {
			this.Item_text.visible = true;
			this.button_hide.visible = true;
			this.gotoAndStop(3);
			this.Item_text.text = "Rhonda \n\n If you must leave work partially finished, mark it as yours and put it somewhere that will cause least disruption to others.";
		}
		
		this.button_paul.addEventListener("click", Paul_function.bind(this));
		
		function Paul_function() {
			this.Item_text.visible = true;
			this.button_hide.visible = true;
			this.gotoAndStop(4);
			this.Item_text.text = "Paul \n\n Have a designated place where completed work may be stored.";
		}
		
		this.button_naomi.addEventListener("click", Naomi_function.bind(this));
		
		function Naomi_function() {
			this.Item_text.visible = true;
			this.button_hide.visible = true;
			this.gotoAndStop(5);
			this.Item_text.text = "Naomi \n\n With copying jobs do not leave the machine unattended – too often the printing is done but the staff member responsible gets distracted.";
		}
		
		this.button_neel.addEventListener("click", Neel_function.bind(this));
		
		function Neel_function() {
			this.Item_text.visible = true;
			this.button_hide.visible = true;
			this.gotoAndStop(6);
			this.Item_text.text = "Neel \n\n When a task is completed be sure to clear up and put everything in its proper place. \n And, ensure all surfaces and floors where you have been working are clear.";
		}
		
		this.button_polly.addEventListener("click", Polly_function.bind(this));
		
		function Polly_function() {
			this.Item_text.visible = true;
			this.button_hide.visible = true;
			this.gotoAndStop(7);
			this.Item_text.text = "Polly \n\n Return unused resources back to where they are stored.";
		}
		
		this.button_monique.addEventListener("click", Monique_function.bind(this));
		
		function Monique_function() {
			this.Item_text.visible = true;
			this.button_hide.visible = true;
			this.gotoAndStop(8);
			this.Item_text.text = "Monique \n\n If you are taking the ‘last’ of anything inform the appropriate person. \n\n I use email as then there is a record and a reminder.";
		}
		
		this.button_harold.addEventListener("click", Harold_function.bind(this));
		
		function Harold_function() {
			this.Item_text.visible = true;
			this.button_hide.visible = true;
			this.gotoAndStop(9);
			this.Item_text.text = "Harold \n\n If equipment has run out of essential materials (such as copier or fax paper) be sure to get it refilled.";
		}
		
		this.button_tom.addEventListener("click", Tom_function.bind(this));
		
		function Tom_function() {
			this.Item_text.visible = true;
			this.button_hide.visible = true;
			this.gotoAndStop(10);
			this.Item_text.text = "Tom \n\n Keep things clean and hygienic so they and ready for use for the next person."; 
		}
	}
	this.frame_1 = function() {
		this.Item_text = undefined;this.Item_text = this.text.Item_text;
	}
	this.frame_2 = function() {
		this.Item_text = undefined;this.Item_text = this.text.Item_text;
	}
	this.frame_3 = function() {
		this.Item_text = undefined;this.Item_text = this.text.Item_text;
	}
	this.frame_4 = function() {
		this.Item_text = undefined;this.Item_text = this.text.Item_text;
	}
	this.frame_5 = function() {
		this.Item_text = undefined;this.Item_text = this.text.Item_text;
	}
	this.frame_6 = function() {
		this.Item_text = undefined;this.Item_text = this.text.Item_text;
	}
	this.frame_7 = function() {
		this.Item_text = undefined;this.Item_text = this.text.Item_text;
	}
	this.frame_8 = function() {
		this.Item_text = undefined;this.Item_text = this.text.Item_text;
	}
	this.frame_9 = function() {
		this.Item_text = undefined;this.Item_text = this.text.Item_text;
	}
	this.frame_10 = function() {
		this.Item_text = undefined;this.Item_text = this.text.Item_text;
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1));

	// buttons_obj_
	this.buttons = new lib.Scene_1_buttons();
	this.buttons.name = "buttons";
	this.buttons.parent = this;
	this.buttons.setTransform(401.8,389.6,1,1,0,0,0,401.8,389.6);
	this.buttons.depth = 0;
	this.buttons.isAttachedToCamera = 0
	this.buttons.isAttachedToMask = 0
	this.buttons.layerDepth = 0
	this.buttons.layerIndex = 0
	this.buttons.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.buttons).wait(11));

	// text_obj_
	this.text = new lib.Scene_1_text();
	this.text.name = "text";
	this.text.parent = this;
	this.text.setTransform(408.1,426.9,1,1,0,0,0,408.1,426.9);
	this.text.depth = 0;
	this.text.isAttachedToCamera = 0
	this.text.isAttachedToMask = 0
	this.text.layerDepth = 0
	this.text.layerIndex = 1
	this.text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text).wait(11));

	// clipboard_image_obj_
	this.clipboard_image = new lib.Scene_1_clipboard_image();
	this.clipboard_image.name = "clipboard_image";
	this.clipboard_image.parent = this;
	this.clipboard_image.setTransform(410.7,405.4,1,1,0,0,0,410.7,405.4);
	this.clipboard_image.depth = 0;
	this.clipboard_image.isAttachedToCamera = 0
	this.clipboard_image.isAttachedToMask = 0
	this.clipboard_image.layerDepth = 0
	this.clipboard_image.layerIndex = 2
	this.clipboard_image.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.clipboard_image).wait(11));

	// images_obj_
	this.images = new lib.Scene_1_images();
	this.images.name = "images";
	this.images.parent = this;
	this.images.depth = 0;
	this.images.isAttachedToCamera = 0
	this.images.isAttachedToMask = 0
	this.images.layerDepth = 0
	this.images.layerIndex = 3
	this.images.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.images).wait(11));

	// background_opaque_obj_
	this.background_opaque = new lib.Scene_1_background_opaque();
	this.background_opaque.name = "background_opaque";
	this.background_opaque.parent = this;
	this.background_opaque.depth = 0;
	this.background_opaque.isAttachedToCamera = 0
	this.background_opaque.isAttachedToMask = 0
	this.background_opaque.layerDepth = 0
	this.background_opaque.layerIndex = 4
	this.background_opaque.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.background_opaque).wait(11));

	// characters_obj_
	this.characters = new lib.Scene_1_characters();
	this.characters.name = "characters";
	this.characters.parent = this;
	this.characters.setTransform(398.1,399.4,1,1,0,0,0,398.1,399.4);
	this.characters.depth = 0;
	this.characters.isAttachedToCamera = 0
	this.characters.isAttachedToMask = 0
	this.characters.layerDepth = 0
	this.characters.layerIndex = 5
	this.characters.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.characters).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(398,398,1241.4,458.9);
// library properties:
lib.properties = {
	id: '509730A6FBDD4F5AB9854ADBAF29D97D',
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
an.compositions['509730A6FBDD4F5AB9854ADBAF29D97D'] = {
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