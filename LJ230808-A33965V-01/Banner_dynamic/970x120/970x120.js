(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,219);


(lib.sc1bg = function() {
	this.initialize(img.sc1bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.sc2bg = function() {
	this.initialize(img.sc2bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.sc3bg = function() {
	this.initialize(img.sc3bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.sc3bgfront = function() {
	this.initialize(img.sc3bgfront);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.sc3bgline = function() {
	this.initialize(img.sc3bgline);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,249);


(lib.sc4bg = function() {
	this.initialize(img.sc4bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.sc5bg = function() {
	this.initialize(img.sc5bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.sb_sc5free = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai3CXIAnABQAHgBABgHIAAhaIgtALIgNgvIA6gOIAAhKIgzAAIAAguIAzAAIAAhPIAwAAIAABPIApAAIAAAuIgpAAIAABAIAngKIAGAsIgtAMIAABoQAAASgEAKQgEAKgLAFQgJAGgQABQgMACgaAAQgBgQgMgdgAgmDEIAAkqIBaAAIAAhdIAvAAIAABdIBgAAIgBEnIgygBIAAgbIiIAAIAAAfgABjB2IAtAAIAAhBIgtgBgAAJB1IArABIAAhCIgrAAgABjAFIAuAAIAAg7IguAAgAAJAFIArAAIAAg7IgrAAg");
	this.shape.setTransform(-0.6,-0.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F72E5").s().p("AkJDpQhThhAUiIQATiHBuhhQBuhgCHAAQCJAABTBgQBSBhgTCHQgTCIhuBhQhuBgiIAAQiIAAhThgg");
	this.shape_1.setTransform(0.0009,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},20).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.shape}]},38).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.2,-32.9,66.5,65.9);


(lib.sb_sc5exp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAwDYIgRgQQAxgnAghSIAvAJQgLAcgQAdQAfAbAMAQIgrAoQgIgOgXgXQgUAZgSAQQgEgGgLgKgAhXDIIgHAKQgNAOgRACQgQADgXgBQAEgXgEgUQALABAPAAQAIAAAFgFQAGgHALgjIgSAGQACgYgEgnIAVgHQADAXABAYIASg6Ih6gBIBGkQIChACIgNAvIguAAIgJAgIApAAIgDAMQApgVAogfQAogfAbggIAtASIgNAPQAQAUAYASQAXASAYALQgIAKgLARQgKAQgFALQgRgKgTgSIgJAhIiJgCIAGgYIglAVQgJgSgMgQIgHAbIgpgBIgHAdIApAAIgKArIgqAAIgIAeIA0AAIgFATQgmCFgOAbQAygmAihOIArAJQgJATgKASQAYATAKASIgkAlQgKgPgPgQQgaAlgeAZQgGgLgVgUgAiXAQIAdAAIAIgeIgdAAgAiEg5IAdABIAHgdIgdAAgABSh1IBhAAQgZgXgQgWQgUATgkAagAhxiBIAcABIAJghIgdAAgAkFC5QAVgmAZhEIAZALQgZBHgTAjgAi5BaIAXgCQgIAxgLAoIgZADQAOgvAHgrgAidBXIAYgEQgCA0gFAbIgYAFQAHgpAAgngABUBHIAfh2IBoABIgfB2gACCAjIAdAAIAMgtIgeAAgAgeBGIAeh2IBkABIgfB2gAAPAiIAZAAIAMgtIgZAAg");
	this.shape.setTransform(119.925,0.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aj0DVQgKgKgHgDQAkgoAVhVIAThLIgWAAIAThLIASAAIAkiMICXABIgjCMIASAAIgSBLIgVAAIguCwQgEARgFAJQgHAJgKAFQgKAFgOACIghABQAEgUgFgXIAfABQAGAAACgHIALgsIg1AeIgFgcQgWA9geAhQgFgGgKgJgAifBMIgNAtIA/gbIAFgVIgYAVQgNgRgOgQgAhlA9IALgoIg3AAIgHAcIAUgRQAVASAKALgAijgQIBrABIAFgUIhrgBgAhRhKIARAAIAMguIgRAAgAh/hLIASAAIAUhOIAuAAIAFgUIhAAAgAhODcIALgqIA3AAIgDgjIAegJIgwgBIAZhfIDIABIgZBgIg1gBIAhALIgdAjIA8AAIgKAqgAAiCzIAmAAQARgbAKgSIhFAAIAEAtgAAXBjIBmABIAGgaIhlgBgAgWAVIALgoIDtACIgLAogAAAgkIAnidIA4AAIAJgiIAqAAIgIAjIAUAAIAJgjIArAAIgJAjIA9ABIgpCdgACjhJIAZAAIAGgXIgZAAgABrhJIAXAAIAGgXIgXAAgAAyhKIAYAAIAGgXIgYAAgACyiDIAZAAIAGgWIgZgBgAB6iEIAXABIAGgXIgXAAgABBiEIAYAAIAGgWIgYgBg");
	this.shape_1.setTransform(72.075,0.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aj4DQQgIgNgHgGQBMgnAxhlIgngBQgWAAgJAHQABgSgGgdQANgDAPgLQASgOArgwIg8AAIAMgvIBfABIAGgCIAeAQIhjBnIAhABIAJgCIAYALQgXA7gfAvQAMAgAlALQAcAJA+ABQBfABBWgIQgIAJgJARQgKAQgFAMQhAAEhigBQhFgBghgKQgogNgRgjQgiAogqAaQgDgJgIgMgAhMCKIA9jrIBFAAIAMgYIhvAAIAMgwIA+ABQgFgVgIgSIAxgSQAOAhADAQIgSAIIBGAAQAegjAOgXIAyARIgnAqIBLABIgNAvIh+gBIgSAYIBnABIg9DrgAgOBiIB3ABIAGgbIh2gBgAACAiIB3ABIAHgbIh4gBgAASgdIB3ABIAHgbIh3gBgAiKjJIAwgbQAcAqAPAgIgyAgQgNgjgcgsg");
	this.shape_2.setTransform(23.85,0.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaC6IAagTIhWgBIAUASQgfAOgwANQgsAMgrAGQgGgPgQgWQA8gHA9gTIgrgBIAbhnQgfAOgeAJQgJgcgNgOQA/gPA3gfIhZgBIAKgnIBxABIADgOIg4gBIAHgdIA5ABIAEgQIg+AAIAEgQIgwAAIAVhSICxABIgEgTIA8gOQAGAUABAOIClABIgVBSIgvAAIgEAQIg/gBIgEAPIA8ABIgHAdIg8AAIgEANIBwABIgJAoIhPgBQAiAZAyAOQgWAPgYAdQgXgJgXgPIgcBuIgngBQAvAQAvASIg2AfQg0gYhEgWgAh2CKIClABIAEgPIilgBgAhrBgIClABIAEgOIimgCgAhhA3IClABIAFgPIimgBgAhFAMICQABIgLgOIhzgBgAgegqIBUABIADgOIhSgBgAgShVIBSABIAEgPIhTgBgACFiTIgFARIA5ABIAGgXIkugDIgFAXIA7ABIAEgRIAzAAIgFARIBTABIAFgRg");
	this.shape_3.setTransform(-23,-0.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXC4IAYgSIhTAAIATARQggAPgwANQgtAMgrAGQgKgXgNgQQBBgJA1gQIgzAAIAqijIEyADIgqCiIg1AAQAwAPArARIg4AhQgwgYhMgYgAh9CHIDDABIAEgPIjEgBgAhyBbIDDACIAEgPIjDgCgAhnAwIDDACIAEgPIjDgCgAixgqIBOgDIAEgQIgzAAIAHgdIAzAAIAEgOIg6gBIAFgTIgbAAIAThMICpACIgCgVIA7gMQACAJADAYICpACIgTBLIglAAIgFASIgzAAIgEAOIBQAAIgHAdIhQAAIgHAYIAaAAIAFgUIApABIgNAxIivgCIANgxIAmAAIgFAVIAZAAIAGgZIhMAAIAHgdIAQAAQgJgJgJgFQAfgUAVgdIitgBIgFAQICEACIgJAgIgyAAIgEAPIAvAAIgGAdIgwAAIgEANIA4gCIgJAkIixAJgAA1haIApAAIADgNIgdgBQgHAIgIAGgABoiTIgLAOIBeABIAFgUIh0gBg");
	this.shape_4.setTransform(-71.225,-0.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Aj5DLQgKgNgHgEQAhgiAXg0QAPgjAOgzIAVhSICdACIgBgMIgfAAIAOg7IgvAAQAXATAHAQIghAbQgJgUgUgTIAfgXIgeAAIgPA7IgwgBIAXhbICuACIgUBOIAigLIAAABIAShDICyABIgYBaIgxgBIAPg6IgwgBQAYAVAHAPIghAbQgJgUgXgUIAfgXIgdAAIgQA8IgkgBIABALICrABIgJAnIh6gBIgEASIBsABIgYBcIhqgBIgFAVIBjAAIgKAnIhjgBIgFASQgCAKACADQADADAMAAIA0AAQAJABAFgHQAFgFAHgVQANAMAZAFQgNAhgOAMQgOAMgdAAIg/gBQgmAAgKgMQgJgMAJghIAThNIhkgCIgGAWIBXABIgKAlIhWAAIgHAZIBagFQgGAPgFAZQhSAHgeADQgZADgKAEQABgKAAgNQgCgNgCgGQASgHAFgRIAShHIgRAAQghBbgzAzQgFgIgKgMgABNAvIA5ABIAFgWIg4AAgAgfAuIA7ABIAFgWIg6AAgAiLAtIA7AAIAFgVIg5AAIgHAVgAgQgKIA6ABIAFgSIg6gBgAh7gLIA6ABIAFgSIg6gBgAA/i2IAKgmIDCABIgKAmgAiSi4IALgmIC+ACIgKAmg");
	this.shape_5.setTransform(-119.4,-0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},12).to({state:[]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},24).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},15).to({state:[]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.1,-24,292.29999999999995,48.1);


(lib.sb_sc51031 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA3BLIgNgnIhRAAIgPAnIgXAAQAPgtAWgxQASgnAKgQIAZAAQAKAQAPAhQAXAxARAzgAggARIBCAAQgUgwgOgYQgPAfgRApg");
	this.shape.setTransform(67.75,-0.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABHBLQgKhLgMgtIgpBoIgPAAQgkhegFgJQgMAwgKBHIgWAAQAIg7AJgnIANgzIAWAAQAUAtAUA0QAYg7ASgmIAWAAIANAyQAJAoAHA7g");
	this.shape_1.setTransform(45.425,-0.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKBLIAAiVIAVAAIAACVg");
	this.shape_2.setTransform(27.8,-0.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKBLIAAiBIg5AAIAAgUICHAAIAAAUIg5AAIAACBg");
	this.shape_3.setTransform(12.95,-0.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1BLIAAiVIAWAAIAACCIBVAAIAAATg");
	this.shape_4.setTransform(-2.175,-0.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA3BLIgOgnIhRAAQgIAVgFASIgYAAQAPgtAWgxQASgnAKgQIAZAAQAJAQAQAhQAXAxARAzgAggARIBCAAQgRgpgQgfQgQAfgRApg");
	this.shape_5.setTransform(-21.75,-0.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhNBLIAAgNIBHAAIAAgqIg2AAIAAgMIA2AAIAAgkIg+AAIAAgNIBLAAQgKgNgSgNIAKgHQATAOANAOIgJAFIA5AAIgBANIg+AAIAAAkIA3AAIAAAMIg3AAIAAAqIBHAAIAAANg");
	this.shape_6.setTransform(-43.35,-1.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AABgVQgSBBg0AcIgLgKQA2gbARhJIAIABIgDgWIgrAAIAAgNIA4AAQgCBcBKAqQgGAEgEAGQg4gggOg9g");
	this.shape_7.setTransform(-64.4,-0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AxIC5IAAlxMAiRAAAIAAFxgAw0ClMAhpAAAIAAlJMghpAAAg");
	this.shape_8.setTransform(0.025,0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRASQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape_9.setTransform(89.775,0.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRASQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape_10.setTransform(-87.775,0.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},16).to({state:[]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},42).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.6,-18.4,219.3,36.9);


(lib.sb_sc550 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8D548").s().p("AhdAPIAAgdIC7AAIAAAdg");
	this.shape.setTransform(-76.075,-0.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8D548").s().p("AhdAPIAAgdIC7AAIAAAdg");
	this.shape_1.setTransform(76.1,-0.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8D548").s().p("AgBBxQgxAAgageQgbgeABg0QAAg1AZgdQAagfAzAAQAyABAcAeQAaAdAAA1QgBA1gbAdQgcAegwAAIgBAAgAgjgzQgNATAAAhQgBAjAPASQAMAPAWABQAVAAANgQQAPgSABgjQAAgggPgTQgOgTgVAAQgWAAgNASg");
	this.shape_2.setTransform(25.4495,-0.0246);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8D548").s().p("AhXBkIAAgsQAuALAaAAQAxAAAAgfQAAgagsAAQgiAAgoAHIALh+ICSAAIAAArIhmAAIgDAmQAWgDALgBQApABAYATQAWARAAAfQAAAjgZATQgaAVgvgBQglAAgogKg");
	this.shape_3.setTransform(3.225,0.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8D548").s().p("ABLBwIAAgKIhQAAIAAAKIgdAAIAAhEQgXANgeAKQgIgRgIgIQAugOAlgbQgMgNgYgUQgOAMgNAGQgIgOgMgHQA3gdAZgwIAfAHIgLASIA1AAIAFgBIAUAKQgSAvgmAjIBVAAIAABsgAgFBNIBQAAIAAgvIhQAAgAgigyQAbAUAKAMQASgTAPgZIg7AAg");
	this.shape_4.setTransform(50,0.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8D548").s().p("AhsBpIAAgVIBfABIAAgJIhJAAIAAgTIBJABIAAgIIhFAAIAAg9IClABIAAA8IhGAAIAAAIIBKAAIAAASIhKAAIAAAJIBgAAIAAAUgAANAjIAqAAIAAgJIgqAAgAg3AjIAqAAIAAgJIgqAAgAANAMIAqAAIAAgIIgqAAgAg3AMIAqAAIAAgIIgqAAgAhrgSIAAgUIDYAAIAAAVgAhNgtIAAg7ICbAAIgBA7gAgyg8IBjAAIAAgIIhjAAgAgyhSIBjAAIAAgHIhjAAg");
	this.shape_5.setTransform(-21.825,0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8D548").s().p("AgeBWQAKgGABgPIAAirIBrAAIAABtIgqAAQADALAHAPQATgOAIgJIATAUQgXASgKAGQAPAVAXALQgNAMgGANQgvgagThOIgOAAIAABEIAhgIQgBAPACALQg0ANgIAGQgGgNgGgJgAAIgUIA1AAIAAgTIg1AAgAAIg/IA1AAIAAgSIg1AAgAhqBrIAAjVIA6AAIADgBIATALQgIAdgMAhQARAXAAAbQAAAXgMAHQgEAFgJABIgQABQAAgPgFgKIAKAAQAEAAACgCQAEgDABgLQAAgXgRgTQAIgdAGgVIgYAAIAAC7g");
	this.shape_6.setTransform(-45.8,0.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},16).to({state:[]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},42).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.4,-11.3,170.9,22.6);


(lib.sb_sc511 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVBrIAAhwIAnAAIAEgUIgzAAIAAgTICFAAIAAATIg6AAIgHAUIA2AAIAABvIgVAAIAAgKIhIgBIgBAMgAAABNIBIAAIAAgYIhIAAgAAAAjIBIAAIAAgWIhIgBgAhGBrIAAhfQgIAKgNALQgFgLgHgIQAhgZAVguIAUAHIgUAkIgBB5gAhcgsIAAgpIBWABIgIgQIAWgGIALAWIBSAAIAAAjIgWAAIAAgRIiVAAIAAAWg");
	this.shape.setTransform(128.6137,0.2566,1.3228,1.3228);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhLBrIAAh6QgKAOgJAIQgEgMgIgJQAjgjAUg3IAVAHQgJAXgOAZIgBCcgAgoBjIAAgUIA/AAIAAg1IgyAAIAAgVIAyABIAAguIg6AAIAAgVICLABIAAAUIg7AAIAAAuIA0AAIAAAUIg0AAIAAA1IA+AAIAAAVgAAMhjIATgHQAPAYAEANIgUAIQgFgOgNgYg");
	this.shape_1.setTransform(92.2686,0.1905,1.3228,1.3228);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhrBYQAPgTACg3IASAAQAAAOgCAMQAHAOAIAHIABg6IgtAAIAAgPIBnAAIAAAQIgogBIAAAWIAkAAIAAARIgkAAIAAAeQAUAHApAAIBXAAQgFAKgCAIIhQAAQgnAAgUgGQgZgIgOgUQgFAZgMAOQgEgHgJgHgAgLA/QAWgLAOgQIASAGQgPATgZAPQgLgLgDgCgAA5AsIAPgJQAVAOAOAQIgPAKQgNgRgWgOgAAGAhIAAhmIAdAAIAFgPIgpAAIAAgQIBpAAIAAAQIgsAAIgGAPIApAAIAABmgAAZASIAyAAIAAgPIgyAAgAAZgKIAyAAIAAgPIgyAAgAAZgnIAyAAIAAgOIgyAAgAhbgbIAAhKIBPAAIAABKgAhIgqIApAAIAAgPIgpAAgAhIhHIApAAIAAgPIgpAAg");
	this.shape_2.setTransform(55.4935,0.8519,1.3228,1.3228);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhmBmIAAgVIBbAAIAAgzIhFAAIAAgVIBFAAIAAgtIhQAAIAAgVIBgAAQgPgRgVgQIASgLQAbATAPARIgLAIIBJAAIAAAVIhQAAIAAAtIBGAAIAAAVIhGAAIAAAzIBcAAIAAAVg");
	this.shape_3.setTransform(18.8176,-0.3056,1.3228,1.3228);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOA3IAOgMIAiARQAcgQANgMIAQANQgNAKgbAPQATAKARANIgQAOQgggZg1gbgAhNBaQAKgGAAgLIAAhsIgaAKQgFgLgIgHQAggJAagQQAdgRAPgVIATAJIgFAGQARAOAbAOQAbANAaAHQgGAFgIANQgigLgcgSIAAAKIg/AAIABgLQgSALgSAIICEABIgBBIIhuAAIAAAsIA2gIQgBALABAHQhFAMgGADQgFgKgFgGgAguAVIBZAAIAAgNIhZAAgAgugGIBZAAIAAgNIhZgBgAgag7IAxAAQgNgIgMgLQgIAIgQALg");
	this.shape_4.setTransform(-17.8253,-0.0741,1.3228,1.3228);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhoAMIAAgXIDRAAIAAAXg");
	this.shape_5.setTransform(-54.7657,-0.2395,1.3228,1.3228);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYBqIAAirIAlAAQAHgZABgPIAaADIgLAlIBAAAIAACpIgXAAIAAgJIhRgBIAAAMgAgEBKIBSAAIAAgzIhRAAgAgDADIBRAAIAAgvIhRAAgAhbBZQASgfAVgrIAQANQgTApgRAhgAhjgZIAMgPQAaAKAPANIgNARQgMgMgcgNgAhWhYIAMgPQAcALAOANIgNARQgOgOgbgMg");
	this.shape_6.setTransform(-92.3345,0.0582,1.3228,1.3228);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhoAMIAAgXIDRAAIAAAXg");
	this.shape_7.setTransform(-128.3159,-0.3717,1.3228,1.3228);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},27).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},15).to({state:[]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.2,-14.2,284.6,28.7);


(lib.sb_arr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1BcIBQhbIAAgCIhQhaIAPgOIBcBoIAAADIhdBog");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(11).to({_off:true},1).wait(47).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-10.6,10.9,21.2);


(lib.sc4nissan = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ly
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjfDxIAAhDIBcAAQgOglgYgkIAfgNIg7AAIAAhCICcAAIAAgrIhkAAIAAgYQgbAMgfALQgRgkggghQCrguBChnIBFAfIgOAVQAlAeA4AbQA3AaA5AOQgMAMgPAUQgPATgJAOQgjgMgbgMIAAAdIhiAAIAAArICbAAIAABCIg+AAIAoAPQgaApgVAeIBiAAIAABDgAAmCuIAwAAIgbgMQATgeASgsIg6AAgAg/CeIglAQIA7AAIAAhWIg7AAQAcAqAJAcgAg8hZICAAAQgjgWgggbQgaAagjAXg");
	this.shape.setTransform(376.2295,18.5967,0.9999,0.9999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AAsDxIAAipIiFAAIAAhIICFAAIAAhKIgzAAQgQAlgNAXQgbgTgmgQQATgcARguQAPgrAIgvIBHAPQgGAegHAVIAcAAIAAhZIBLAAIAABZIBlAAIAABJIhlAAIAABKIB/AAIAABIIh/AAIAACpgAi4DxIAAj0QgJALgNAOQgFgOgMgYQgNgagJgNQAhgiAegxQAdgxATg1IBGAWQgVA4gdA0IAAFfg");
	this.shape_1.setTransform(296.5905,19.4716,0.9999,0.9999);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AjpDpIAAlrIA3AAIAAgpIg8AAIAAg9ID1AAIAAA9Ig6AAIAAApIA6AAIAAFkIg6AAIAAgZIh9AAIAAAggAiwCRIB9AAIAAhqIgQAAQgWAAgHgKQgIgKAAgdIAAg7IgQAAIAAAlQAAA7gbAcQgSgRgLgIgAiwAaQARgVAAglIAAglIgRAAgAhBgLIABAIQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIAEAAQAFAAABgBIAAhCIgOAAgAh6iCIAOAAIAAgpIgOAAgABkDjQgtAAgRgUQgRgTAAg2IAAjKIB+AAIAAhYIiAAAIAAhGIDHAAIAADkIh8AAIAACDQAAARADAEQADAEANAAIAnAAQAMAAAEgOQADgOACgxQALAJAVAJQASAHAQAEQgFBDgRAYQgRAagpAAgAilB6IAAg3IBnAAIAAA3g");
	this.shape_2.setTransform(218.3012,20.2465,0.9999,0.9999);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AB8DTIgtAKIgDgYQgkADihALIgFhBIBZgEIAAgeIhpAAIAACMIhJAAIAAiMIgUAAIAAg+IAUAAIAAgNIBJAAIAAANIBpAAIAAgQIiRAAIAAiwIFvAAIAACwIiVAAIAAAQIC8AAIAACJQAAAYgFALQgFAOgNAHQgMAHgRACQgMACgYAAQgEgSgIgZgACKDBIAEAAQAGAAAAgHIAAhKIgkAAQATAqAHAngAAkCLIAZgBIgIgUIAegGIgvAAgAAkgOIBHAAIAAgQIhHAAgAhsgOIBHAAIAAgQIhHAAgAAkhMIBHAAIAAgQIhHAAgAhshMIBHAAIAAgQIhHAAgAA3iVIAAgRIguAAIAAg/IAuAAIAAgYIBNAAIAAAYIBuAAIAAA/IhuAAIAAARgAiFiVIAAgRIhsAAIAAg/IBsAAIAAgYIBLAAIAAAYIAyAAIAAA/IgyAAIAAARg");
	this.shape_3.setTransform(138.9151,19.0865,0.9549,0.9549);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AAlDVIAAhLIjsAAIABhPQBKh0CXibIB8AAQioClhDBkIB5AAIAAhcIBjAAIAABcIA/AAIAABWIg/gBIAABLg");
	this.shape_4.setTransform(65.1473,18.6717,0.9999,0.9999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sc4nissan, new cjs.Rectangle(45.3,-5.5,355.9,49.1), null);


(lib.sb_sc4season = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjhAGIAAgLIHDAAIAAALg");
	this.shape.setTransform(-101.975,-4.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjhAGIAAgLIHDAAIAAALg");
	this.shape_1.setTransform(96.8,-4.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhZChQAvACAQgCQAKAAAAgHIAAguIimgBIAAgaICmAAIAAgXQAugKAlgOIjTgBIAAgZIEEABIAHgBIAVAQQg3AehKARIAAAKICoABIAAAaIioAAIAAAuQAAANgFAGQgEAGgKADQgOAEg9AAQgCgLgIgOgAh+gPIAAhRIEAABIAABQgAhgglIDCAAIAAgkIjCAAgAiyh5IAAgaICmAAQgGgQgJgQIAegGQALATAHATICeAAIAAAbg");
	this.shape_2.setTransform(38.275,-4.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAmCQQAxABAMgBQAKAAAAgJIAAg8IjbgBIAABiIgeAAIAAhiIgxAAIAAgcIAxABIAAiXIB8AAIAAgnIidAAIAAgcIFcAAIAAAcIihAAIgBAnIB/AAIAACXIAyAAIAAAcIgzAAIAAA8QAAAOgEAHQgEAIgJADQgKADgSABIgtABQgDgPgIgNgAANAvIBgAAIAAgxIhgAAgAhuAvIBeAAIAAgxIheAAgAANgcIBgAAIAAgxIhgAAgAhugcIBeAAIAAgxIhdAAg");
	this.shape_3.setTransform(-40.375,-3.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},19).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},39).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.5,-22.9,243.9,37.2);


(lib.sb_sc4plan = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A7mEZIAAoxMA3NAAAIAAIxgA7SEFMA2lAAAIAAoIMg2lAAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAcQgLgMAAgQQAAgPALgMQAMgLAPAAQAQAAAMALQALAMAAAPQAAAQgMAMQgLALgQAAQgPAAgMgLg");
	this.shape_1.setTransform(148.075,-0.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQCbIAAhPIiFAAIAAgaICFAAIAAgaIAfAAIAAAaICIAAIAAAaIhcAAQA3AaAfAaIgXAWQgdgbg5gbIAWgUIgrAAIgBBPgAiTB+QAzgSAZgcIAgALQgcAgg2AYQgLgLgPgKgAAMAJQgvAUhmAGQgDgPgHgLQBFgDAmgIIhCgLIAggeIhIgBIAAgZIBdAAQAPgRALgRIhUAAIAAAXIgdAAIAAgyIB8ABIgKgSIAggHIAPAZIB5AAIAAAyIgeAAIAAgYIiKAAIAbAJIgSAZIBKAAQAEgHAFgOIAfAGIgGAPIA4AAIAAAaIhFAAQgNATgVAQQA+ANAnANIgfAUQgrgQg7gNgAg4gcIA9ALQAUgKAPgQIhQAAg");
	this.shape_2.setTransform(112.7,-0.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiVCDQA4gdAVg6QAOgnAEhIIhZAAIAAgeICQAAQgGgVgPgaIAegMQARAeAHATIgXAKICLAAIAAAfIiqAAQgCAhgCAOICPABIgCAOQgFBFgFAfQgGAggKAKQgMAMgUACQgRABgogCQgBgQgKgPQAdADAbAAQALAAAFgEQAOgMAHhgIhxAAQgSBnhQArQgHgOgPgMg");
	this.shape_3.setTransform(68.575,-0.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZCYQgfAAgKgIQgLgHAAgVIAAgsIAfAAIAAAsQAAAGAEACQAFACAPAAIBCAAQALABAEgGQADgGACgUQAJAGASAEQgDAdgJAJQgJAJgYAAgAiVCEQATgXANgnIAbALQgPAtgRAVgABVBRIAbgJQAcAiAKAeIgdAKQgIgcgcglgAgcBGIATgQIiBACIgCgaIB9gBIAAgXIhngBIAAhfIBnABIAAgTIh9gBIAAgZIB9ABIAAgTIAgABIAAASICAAAIAAAZIiAAAIAAATIBpAAIAABfIgsAAQAtAWAYAYIgWARIgSgRIhxACQAiATARATIgVASQgQgTgkgVgAAQAdIA3AAQgNgHgKgFIAPgLIgvAAgAAQgMIBKAAIAAgTIhJgBgAhZgNIBKABIAAgUIhKAAgAARgyIBJAAIAAgTIhJAAgAhZgzIBKAAIAAgSIhKgBg");
	this.shape_4.setTransform(24.75,-0.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAqCFQgpAOg7AHQgDgIgMgOQAsgFAlgKQgRgKgJgHQgIAFgYALQgIgLgKgHQAWgJAJgGIgMgOIAXgIIAKAKQARgOAHgIQgKgFAAgSIAAgFQgQAXgQALIgSgOQATgLAOgWIARAIIAAgIIAYAAIAAASQAAAFADABQACABAHABIAkAAQAGgBACgCQACgCAAgJQAGADAOAEIgKgLIAQgJQAYASANATIgRAMQgGgJgTgUQgCAOgGAFQgGAGgNAAIgkAAIgMAMIBOAAIAFgCIAUALQgRAagkASQAiAJAuAFQgJAIgHAPQg5gGgpgPgAABBWQASAMAXAJQAZgKARgOIhQAAgAhzCZIABixQgQAZgKAKQgFgPgLgQQAqgzAYhTIAdAJQgJAegOAgIgBDsgAAaAGIALgGIhMAAIAAAaIgbAAIABgtIAgAAIAAhTIA4AAIADgQIhSAAIAAgXIDPAAIAAAYIhcgBIgGAQIBKAAIAABTIAeAAIAAAtIgcAAIAAgaIhRAAQASALAHAHIgSAMQgKgMgTgMgAgFgTIBmAAIAAgMIhmAAgAgFguIBmAAIAAgNIhmAAgAgFhJIBmAAIABgMIhnAAg");
	this.shape_5.setTransform(-19.075,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAeB+IArAAQAHAAAAgGIAAhTIh5AAIAAgbIB5AAIAAggIhtAAIAAgbIBCAAIAAgnIhPAAIAAgbIBPAAIAAgnIAfABIAAAmIBQAAIAAAcIhQgBIAAAnIBHAAIAAAbIgcAAIAAAgIAkAAIAAAbIgkAAIAABTQAAAXgPAHQgNAFgrAAQgBgNgJgQgAgYA8IAZgOQAdAgANAXIgcARQgOgagZgggAiTB2IAAj7IBjAAIgBDfIhGAAIAAAcgAh3A+IAqAAIAAhGIgqAAgAh2gkIApAAIAAhEIgpAAg");
	this.shape_6.setTransform(-62.15,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqB8QAOgIAAgSIABjzICUAAIAACUIhBAAQAIAZAKAUQAjgaALgLIAUAWQgSAPgjAWQAZAjAjAPQgOANgHANQhGgjgbhsIgbAAIAABnIA2gMQAAAVABAHQhLAVgKAGQgFgQgJgJgAACgXIBYAAIAAgjIhYAAgAAChUIBYAAIAAgiIhYAAgAiSCTIAAklIBQAAIAEgCIAVAMQgVA7gLAcQAcAiAAAlQAAAegOALQgHAFgMACIgVAAQAAgOgIgNIASAAQAFAAAFgCQAGgGAAgRQAAgggbgfQAOgmAJgjIgpAAIgBEJg");
	this.shape_7.setTransform(-105.625,-0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAcQgLgMAAgQQAAgPALgLQAMgMAPAAQAQAAAMAMQALALAAAPQAAAQgLAMQgMALgQAAQgPAAgMgLg");
	this.shape_8.setTransform(-141.925,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},16).to({state:[]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},42).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.6,-28,353.29999999999995,56.1);


(lib.sb_sc4bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sc4_bg
	this.instance = new lib.sc4bg();
	this.instance.setTransform(-710,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-710,-90,1456,180);


(lib.sb_sc3pro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnBpQAbgMALgZQAGgUACgqQgRACgFADIgJgYQAIgBAMgSQAEgJAOgZIgjAAIAAgYIAuAAIANghIAcAIIgMAZIBCAAIAAAYIhOAAQgQAdgOAUIBEgGIgPgbIAUgIQAdApAIAXIgWALIgJgUIgQACIAABZQAAAGABABQABACAEAAIAPAAQAEAAABgHQACgGABgXQAGAFAOAFQgBAcgGAKQgFAKgOAAIgUAAQgQAAgGgHQgEgGAAgSIAAhYIgVADQgCAzgKAYQgLAfggAQQgFgMgKgIgAh8BvQAJgVADgpIAUAEQgGArgHAWQgDgCgQgFgAhSA0IASgEQAGAkABATIgTAFQgBgSgFgmgAg1AuIARgFQAKAaAEAUIgSAGQgDgPgKgggAh5AQQAGgBAOgPQAGgHANgUQgcAEgGADIgHgXQAFgCAJgNQAGgHAKgSQAMgWAHgTIAWAKQgTApgVAcIAXgBQAOgXAIgQIAUANQgbAxgfAjIAkgGIgJgWIASgGQAOAfAEAVIgSAHIgEgNQg/AMgHADQgCgMgFgLg");
	this.shape.setTransform(157.6,0.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxBjQAZABAKgBQAFAAAAgEIAAg6QhMAGgKAEIgIgXQAPgCAWgLQAQgHAkgTQg7AEgJADQgDgNgFgKQAJgBANgIQAagMAcgXQgoAJgwAIQgCgJgFgNQBwgRA3gZIASATQgeANguAMIAPAKQgZAUgaANIA5gCIAdgVIATAQQgwAjg1AYIBggGQgKgLgMgMIAVgKQAiAfATAbIgVANIgOgTIhBAFIAAA9QAAATgNAEQgJAEgiAAQgBgKgIgOgAhzBhQAhgTAXgeIAZAJQgaAhgiAYQgKgKgLgHgAAjA6IAVgMQAnAcAVAWIgVAPQgTgWgpgfg");
	this.shape_1.setTransform(128.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhwB0IAAgXIBjAAIAAgnIhJAAIAAgWIBJAAIAAgjIg9gBIABgVQgVANgPAIQgGgLgJgJQAzgXAsgtIgrAAIAAgXIBVAAQASAbAeAYQAfAYAhANQgMALgFALQgUgJgPgKIAAAVIg9AAIgBAjIBKAAIAAAWIhKAAIAAAnIBnABIAAAWgAhJgaICQABQgpgcgegnQgdAkgsAeg");
	this.shape_2.setTransform(98.65,0.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQBSQglAfhOAMQgEgMgMgNQBEgIAjgWQgigNgmgNQANgTAKgRIg2AAIAAgXIBEAAQAMgXAJgVIAbAFQgFAPgMAYIA4AAIAFgaIAdADIgDAXIAuAAIgBAXIg0AAQgKAggSAXQAyAWAbARIgTAXQgegVgwgWgAgsAgIA1AUQAPgRAKgbIg/AAgABTgjIAAghIingBIAAAiIgZAAIAAg5IBhABIgLgaIAagHIAQAhIBbAAIAAA4g");
	this.shape_3.setTransform(69.1,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhQB8IAAhwQgMAMgOAMQgGgKgLgMQAuggAcgvIAYAJQgOAWgQATIAACLgAANBiQAfABAKgBQAGAAAAgFIAAhmIhTAAIAAgYICTAAIAAAYIgmAAIgBBmQAAALgCAGQgDAGgIADQgMAEgmAAQgCgNgHgMgAh5hBQARgLASgQQARgQAKgPIAYAKQgeAngpAdQgIgNgHgHgAgMhTIAAgYICBABIAAAXg");
	this.shape_4.setTransform(39.2,-0.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABDB8IAAgKIh1AAIAAAKIgZAAIAAhvICoAAIgBBvgAgyBeIB1AAIAAgVIh1AAgAgyA2IB1AAIAAgVIh1AAgAhyADQAngPAMgbIgxAAIAAgUIASAAIgTgLQAVgUAJghIAXAFIgHARIBFABIAAATIgkAAIAAAWIArAAIAAAUIgwAAIgBADQAZAMAXAQIgRAPQgUgPgSgMQgQAXgkARQgGgKgJgHgAhdg7IAiAAIABgWIgTAAQgHAMgJAKgAATgFIAAhgIBhAAIAABggAAqgbIAxAAIAAg0IgxAAg");
	this.shape_5.setTransform(9.15,-0.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaBuIABiuIhIAAIAAgtIDDABIAAAsIhIAAIAACug");
	this.shape_6.setTransform(-15.675,-0.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAABxQgyAAgfgaQglgfABg5QAAg2AmgfQAhgbAuAAQAvAAAhAbQAmAfAAA2QAAA6glAeQgfAbgxAAIgBgBgAgsgxQgTASAAAeQAAAiAVATQARAQAZAAQAaAAARgQQAUgTAAgiQAAgegSgSQgSgRgbAAQgaAAgSARg");
	this.shape_7.setTransform(-39.8253,-0.9495);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhNBtIABjaIA0AAIAACuIBmABIAAAsg");
	this.shape_8.setTransform(-61.675,-0.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaBtIABjZIAzAAIAADZg");
	this.shape_9.setTransform(-78.45,-1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhiBtIAAjaIBlAAQBgABAABPQAAApgfAVQgaAQgnABIgxAAIAAA7gAguAFIAtAAQAVAAALgFQANgJAAgVQAAgUgNgHQgLgHgWAAIgsgBg");
	this.shape_10.setTransform(-96.1,-1.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhHBDQgbgXAAgsQAAgqAcgZQAagWAsAAQAtgBAbAYQAbAYAAAqQAAAsgcAXQgaAYgtAAQgsAAgbgYgAghgiQgMANAAAVQAAAVANAOQANANAUAAQAUABANgOQAMgOAAgVQAAgVgNgNQgNgNgUAAQgUAAgNANg");
	this.shape_11.setTransform(-121.125,1.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag5BYIABisIAoAAIAGATQAfgWAlAAIAAAwQgjAAgdARIAABug");
	this.shape_12.setTransform(-139.5,1.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhiBtIAAjaIBlAAQBgAAAABQQAAAoggAWQgZARgnAAIgxAAIAAA7gAguAFIAtAAQAWAAAKgGQANgIAAgVQAAgUgNgHQgLgHgVAAIgtAAg");
	this.shape_13.setTransform(-160.125,-1.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},12).to({state:[]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},71).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170,-12.5,340.1,25.1);


(lib.sb_sc3lka = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVBMQAYgPAMgdQAJgYACglIgbAAIAAgRIAcAAIAAgrIASAAIgBArIAsAAIAAAIQgCA+gCAYQgCAZgEAGQgGAIgKABQgKABgQgBQAAgJgGgIIAYAAQAFABADgDQAFgIADhaIgaAAQgDAqgKAbQgNAggaASQgGgJgHgFgAhXA0IAOgDIABiCIBAAAIAAB1IAJgCIACAQIhWAVgAg4AuIAfgHIAAgWIgfAAgAg4AAIAfAAIAAgXIgfgBgAg4gnIAfAAIAAgZIgfAAg");
	this.shape.setTransform(199.1,-0.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA2BKIAMAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBIAAgYIgVAAIAAAqIgQAAIAAgqIgUAAIAAArIgPAAIAAh6IAjAAIAAgPIgmAAIAAgQIAmAAIAAgaIARAAIAAAaIAbAAQgKgKgMgIIAKgIQAPAIAJAKIgJAIIALAAIAAAQIgpAAIgBAPIAmAAIAABoQAAALgGAEQgGADgPAAIgFgQgAAwAgIAVAAIAAgRIgVAAgAAMAgIAUAAIAAgRIgUgBgAAwAAIAVAAIAAgQIgVAAgAAMAAIAUAAIAAgQIgUAAgAg4BaIAAggIghAAIAAgRIAhAAIAAgNIgaAAIAAhEIAaAAIAAgNIgeAAIAAgQIAeAAIAAgUIARAAIAAAUIAdAAIAAAQIgdAAIAAANIAbAAIAABEIgcAAIAAANIAgAAIAAARIggAAIAAAggAgqAOIAQAAIAAgOIgPAAgAhFAOIAPAAIAAgOIgPAAgAgpgMIAPAAIAAgPIgPAAgAhFgNIAPABIAAgPIgPAAg");
	this.shape_1.setTransform(175.575,-0.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEBaIABhHQgMAGgJAEIgDgGIADAQIg7AaIgHgTIAagJIAAg8IgWAAIAAgSIAWAAIAAgtIARAAIAAAtIATAAIAAALIAjAAIAAgVIgdAAIAAgQIAdAAIAAgWIASAAIAAAWIAcAAIAAAOQAIgLAIgQIARAFQgMAagSATIAjAAIgBARIgyAAQgMAMgJAEIA8AAIAABXIgSAAIAAgGIgwAAIAAAGgAANBEIAwAAIAAgSIgwAAgAANAkIAwAAIAAgQIgwAAgAgvAeIATgIIgHgJQAbgKAUgQIgoAAIAAgKIgTAAgAAZgeIAHAAQAJgIAKgNIgaAAg");
	this.shape_2.setTransform(151.75,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqBOQAZgNANgbQgZAFgEAEIgFgOQAFgBAGgKIAOgXQgRABgEACIgFgNQADgBAEgHQAHgMAFgUIAPAGQgGAQgJAOIAOgBIAEgNIANAIQgLAXgNAWIANgDIACgIIANACQgKA1glAVQgGgHgEgEgAhXBJQAOABACgBQABAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBIAAgvIgRAHIgFgSIAWgHIAAgmIgTAAIAAgRIATAAIAAgmIAQAAIAAAmIAOAAIAAARIgOAAIAAAhIANgEIACAPIgPAGIAAA1QAAALgHAFQgGADgSAAQgBgIgEgIgAARBYIAAhSIgDAEIgLgKQAPgRAKggIAOADIgGASIAUAAIgIgPIAMgFQAHALADAJIARAAIAAAPIgWAAIAAAQIAUAAIAAAMIgUAAIAAARIATAAIAAANIgTAAIAAAUIAYAAIAAAOIg5AAIAAAJgAAgBBIATAAIAAgUIgTAAgAAgAgIATAAIAAgRIgTAAgAAgADIATAAIAAgQIgTAAgAgig0IAAgQIA0AAIgHgPIAMgEQAHAJAEAKIA3AAIAAAQg");
	this.shape_3.setTransform(127.85,-0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhcBOQAdgSAKgrIgUAAQgIAAgDADQgCgGgEgJQAGgDADgDQAGgFARgXIgdAAIAAgPIAoAAIACgBIAMAFIggArIASAAIAEgBIAJAEQgFAZgIASQAIAOASAEQAPAEAbAAQAoAAAggDQgEAGgDAMQgcABglAAQgdAAgQgEQgUgGgKgOQgKARgPAKQgFgHgIgFgAAsAuIASAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAgPIgfAAIAAAfIgPAAIAAgfIgdAAIAAAfIgQAAIAAhkIAyABQgVgKgKgEIAKgKQANAEANAGQAIgFANgJIhKAAIAAgOIBbAAIAEgBIALAJQgRAPgVAMIAOAHIAYAAIAABTQgBALgGADQgGADgUAAQgBgHgEgHgAAiAPIAfAAIAAgPIgfAAgAgKAPIAdAAIAAgPIgdAAgAAigNIAfABIAAgPIgfAAgAgKgNIAdAAIAAgOIgdAAgAhRhRIAOgIQAPAPAKAOIgOAKQgJgNgQgSg");
	this.shape_4.setTransform(104.1,-0.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhYBLQAwgKAcgUQgUgTgLgbIARgFQAJAXARARQASgRAJgYIATAGQgLAbgVAUQAeAUAtAIQgIAHgDAJQgvgIgfgZQgcAWgxAMQgDgIgIgIgAAVgeIAOgKQAjAXAQARIgQAMQgQgTghgXgAhUgBQAggSAQgVIASAHQgVAZgfATQgGgHgIgFgAhUgsIAAgSIBPAAQgEgJgIgNIARgGQALATADAHIgFACIBLAAIAAASg");
	this.shape_5.setTransform(80.3,-0.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhHBQIAAifIBJAAQBHAAgBA6QAAAdgXAPQgTANgcAAIgjAAIAAAsgAghADIAhAAQAPABAIgEQAKgGAAgQQAAgZgiAAIggAAg");
	this.shape_6.setTransform(55.4752,-1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIBRQgSAAgagFIAAgiQAWAGARAAQAQAAAGgIQAFgGAAgPIABhjIAmAAIAABqQAAAbgQAOQgPAOgcAAIgCAAg");
	this.shape_7.setTransform(38.45,-1.2242);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSBQIAAh/Ig1AAIAAggICPAAIAAAgIg1AAIAAB/g");
	this.shape_8.setTransform(26.825,-1.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiBgIA2i/IAPAAIg2C/g");
	this.shape_9.setTransform(2.425,0.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVBMQAYgPALgdQAKgYACglIgcAAIAAgRIAdAAIAAgrIASAAIgBArIAsAAIgBAJQgBA/gCAWQgCAZgFAHQgEAGgLACIgaABQgBgLgFgHIAYABQAFAAADgEQAGgHAChaIgaAAQgDAqgKAbQgNAggaASQgEgGgJgIgAhXA0IAOgDIAAiBIBCAAIgBB0IAJgCIACAQIhXAVgAg5AuIAggHIAAgWIggAAgAg5ABIAhAAIAAgZIggAAgAg4goIAgABIAAgZIggAAg");
	this.shape_10.setTransform(-24.325,-0.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA2BKIANAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIAAgYIgUAAIgBAqIgQAAIAAgqIgUAAIAAArIgPAAIAAh6IAkAAIAAgPIgoAAIAAgQIAoAAIAAgaIAQAAIAAAaIAbAAQgJgJgNgJIAKgIQAPAJAJAJIgJAIIALAAIAAAQIgpAAIAAAPIAlAAIAABnQgBANgGADQgFADgPAAQgBgIgEgIgAAxAgIAUAAIAAgSIgUAAgAAMAgIAUAAIAAgSIgUAAgAAxAAIAUAAIAAgQIgUAAgAAMAAIAVAAIAAgQIgUAAgAg4BaIAAghIghAAIAAgQIAhAAIAAgOIgaAAIAAhEIAaAAIAAgMIgfAAIABgQIAeAAIAAgUIARAAIAAAUIAdAAIAAAQIgdAAIAAANIAbAAIAABEIgbgBIAAAOIAfAAIAAARIgfgBIAAAhgAgqAOIAQAAIAAgOIgQAAgAhFAOIAPAAIAAgOIgPAAgAgqgNIAQAAIAAgOIgQAAgAhFgNIAPAAIAAgOIgPAAg");
	this.shape_11.setTransform(-47.85,-0.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAWBJQATABAEgBQAEAAAAgEIAAgtIhIAAIAAgRIBIAAIAAgOIASAAIAAAOIAXAAIAAARIgXAAIAAAuQAAANgJAEQgIADgWAAQgCgLgEgGgAhUBHIARAAQABAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBIAAgvIgXAHIgEgRIAbgIIAAgmIgYAAIAAgRIAYAAIAAglIARAAIAAAmIASAAIAAAQIgSAAIAAAiIARgFIACAQIgUAGIAAA0QAAANgHADQgGAEgTAAQgBgKgEgHgAgKAkIANgIQARAYAFAJIgPAJQgKgSgKgQgAgPgMIAAgRIAnAAIAAgUIgxAAIAAgQIAxAAIAAgYIASAAIAAAYIAxAAIAAAQIgxAAIAAAUIAoABIAAAQg");
	this.shape_12.setTransform(-71.725,-0.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDBaIAAhqIgKANQgDgIgGgJQAWgZAMgrIARAFQgEALgIASIAcAAQgFgPgHgNIAPgGQAJAOAFANIgQAHIAqAAIAAAQIghAAIAAAWIAdAAIAAAQIgdAAIAAAUIAdABIAAAQIgdAAIAAAXIAjAAIAAARIhNAAIAAANgAANA8IAaAAIAAgXIgaAAgAANAUIAaAAIAAgUIgaAAgAANgRIAaABIAAgWIgaAAgAhZBRQAGgPADgeIAOACQgDAcgGAUQgHgEgHgBgAg7AmIANgDQAEARACAYIgOADQgBgRgEgYgAglAhIAMgDQAJAXACAOIgMAFQgDgNgIgagAhXANQAEgBALgMIAPgTQgVACgFACIgFgPQAFgCAGgJQAPgXAJgZIAQAGQgMAagRAYIASgBIAPgbIAOAIQgTAkgYAaIAegEIgIgRIANgEQAKAUAEASIgNAFIgDgJQgwAIgEACIgGgPg");
	this.shape_13.setTransform(-95.575,-0.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhcBOQAdgRAKgsIgTAAQgKAAgCADIgGgQQAFgBAFgEQAHgIAOgUIgcgBIAAgOIAoAAIADgBIALAFIggArIASAAIAEgBIAJAEQgEAWgJAVQAJANARAFQAPAEAbAAQAoAAAggDQgDAEgEANQgZACgoAAQgdAAgQgEQgTgGgLgOQgKARgPAKQgGgIgHgEgAgUA3IAAhcIAeAAIADgNIgwAAIAAgPIAdAAQgEgKgGgIIAOgGQAIAMAEAJIgIADIAiABQAIgNAFgMIASAFIgNAUIAiAAIAAAPIg3gBIgGANIAtAAIAABcgAgDAqIA5AAIAAgOIg5AAgAgDAPIA5AAIAAgNIg5AAgAgDgKIA5ABIAAgOIg5AAgAhRhRIAOgIQARASAIALIgOAKQgMgRgNgOg");
	this.shape_14.setTransform(-119.35,-1.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKBaIABgbIhOgBIAAgQIBOAAIAAgOIg5AAIAAhMIA5ABIAAgNIhIAAIAAgRIBIAAIAAgQIASAAIAAAQIBJAAIAAARIhJAAIAAANIA7AAIAABLIg8AAIAAAOIBQAAIAAARIhQAAIAAAcgAAIASIAqAAIAAgRIgqAAgAgxASIAoAAIAAgRIgoAAgAAJgMIApAAIAAgRIgpAAgAgxgNIAoABIAAgRIgoAAg");
	this.shape_15.setTransform(-143.15,-1.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAtBQIgJgdIhKAAIgJAdIgoAAQAdhcAghDIA0AAQAjBLAbBUgAgcATIA1AAQgPgsgLgaQgOAjgNAjg");
	this.shape_16.setTransform(-168.35,-1.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAbBQQgdgpghgkQAXgnAjgrIAyAAQgsAygUAdQATASAYAeIAaAggAhNBQIAAifIAnAAIAACfg");
	this.shape_17.setTransform(-185.65,-1.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag4BQIABifIAmAAIAAB/IBKAAIAAAgg");
	this.shape_18.setTransform(-202.175,-1.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},13).to({state:[]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},38).to({state:[]},1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.8,-10.1,415.70000000000005,20.299999999999997);


(lib.sb_sc3icc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmBZIAAhEIgWAAIAAA1IgQAAIAAhFIAmAAIAAgQIgugBIAAgQIANAAIgQgGQANgTAHghIARAEIgFATIARAAIAAgaIARAAIAAAbIAlAAIAAAQIglAAIAAASIAsAAIAAARIgsAAIAAAQIAmAAIAAA0QAAALgGAEQgHADgPgBQgBgIgEgHQAMABADgBQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAAgjIgVAAIAABFgAhGgcIAgAAIAAgSIgYAAQgDAJgFAJgAApBGIAYABQAFAAAAgFIAAiZIASAAIgBCZQAAAPgIAFQgIADgZAAQgCgKgDgJgAAjAjIAAhrIARAAIAABrg");
	this.shape.setTransform(135.75,0.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhWBKIARAAQABAAABAAQABgBAAAAQABgBAAAAQAAgBAAgBIAAgqIgVAHIgDgSIAYgHIAAgrIgXAAIAAgRIAXAAIAAgnIARAAIAAAnIASAAIAAARIgSAAIgBAmIAUgFIADAQIgXAHIAAAvQAAANgGAEQgIAEgSAAQgBgKgEgHgAggBVIAAgRIA0AAIAAgkIgnAAIAAgRIBkAAIAAARIgrAAIAAAlIA1AAIAAAQgAgZgIQATgFAHgKQAGgIABgUIgTAAIAAATIgQAAIABgjIAvAAIgJgSIARgFQAIANADAKIAyABIAAAhIgRAAIAAgSIgSAAIAAAeQAAAHADAAIASAAIAMgBIACAOQgDABgKAAIgTAAQgMAAgEgEQgEgFAAgMIAAgeIgNAAQgCAZgIALQgJAOgXAFQgCgFgGgHg");
	this.shape_1.setTransform(111.15,0.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhbBOQAagSAJgrIgRAAQgJAAgDADQgCgJgEgHQAFgBAFgEQAHgHAOgWIgcAAIAAgPIAnABIADgCIALAGIgfAqIAUAAIAIADQgDAYgIASQAJAOASAGQAOAEAdAAQAtAAAagDQgDAFgDAMQgZACgpAAQgdAAgQgFQgUgGgKgPQgJASgPALQgFgHgHgFgAAQA+IAAgpQgTAZgXAMQgFgIgHgGQAegMAQgZIgiAAIABgwIApAAIAAgOIgxAAIABgQIAwABIAAgTIASAAIAAATIA0AAIAAAPIg0AAIAAAOIAtAAIAAAxIgmAAQAdASARAQIgMANQgKgLgfgWIAAAogAAigGIAbAAIAAgVIgbAAgAgJgGIAZAAIAAgVIgZAAgAhShRIAOgIQANANALAQIgPAKQgHgOgQgRg");
	this.shape_2.setTransform(86.375,0.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhaBPQAegWAGg4IASACQgBANgDAMQAKAYAWALIAAhKIgtAAIAAgSIBtABIAAARIguAAIAAAbIA4AAIAAARIg5AAIAAAjQANACAQAAIA0AAQgFAGgCAMIgvAAQgfAAgRgHQgXgJgMgWQgLAagRAPQgEgFgLgHgABAgWIAAgcIh/AAIAAAcIgSAAIABgtIBKAAIgIgSIARgFIALAXIBEAAIAAAtg");
	this.shape_3.setTransform(61.4,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAsA7QgNARgRAMQgIgIgFgEQAVgNARgYQgGghgCgzIg/AAIAAgQIA/AAIgBgcIASAAIAAAcIAaAAQgLgNgKgGIALgJQAQALAHAJIgJAIIAKAAIAAAQIgoAAQABAmAEAWQAJgQAGgcIARAEQgKAngSAbQAHAgAJAAQAFAAAAgbQAGAGAHAEQgDAUgDAHQgFAHgKAAQgPAAgLgfgAgnAzIBDgQIACAPIhAASgAhaAvIAVgKIAAg+IgTAAIAAgRIATAAIAAgtIARAAIAAAtIAQAAIAAARIgQAAIAAA2IAQgIIAFAQIg1AcgAgbAcIAAg5IAwAAIAAA5gAgNANIAUAAIAAgbIgUAAg");
	this.shape_4.setTransform(36.6,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhbBOQAagSAJgrIgRAAQgIAAgEACQgCgIgEgHQAFgBAFgEIAVgcIgcAAIAAgQIAnAAIADAAIALAEQgRAagOARIARAAIADAAIAIAEQgDAVgHATQAIAPASAFQAPAFAcAAQAoAAAfgDQgDAGgDALQgcACglAAQgeAAgQgFQgUgGgKgOQgJAQgPAMQgFgHgHgFgAAQA+IAAgqQgQAYgaANQgGgIgGgFQAdgMASgYIgiAAIAAgyIApAAIAAgNIgwAAIAAgQIAxAAIAAgSIARAAIAAASIA0AAIAAAQIg0AAIAAANIAtABIAAAxIgmAAQAcARASARIgMANQgMgNgdgTIAAAngAAigGIAbAAIAAgVIgbAAgAgJgGIAZAAIAAgVIgYAAgAhRhRIANgJQANAOALAQIgPAKQgGgMgQgTg");
	this.shape_5.setTransform(11.725,0.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhRBVIAAgRIBIAAIAAgcIg1AAIAAgRIA1AAIAAgZIgsgBIAAgPIgaAPQgFgIgGgHQAlgPAggiIgfAAIAAgRIA+AAQANAUAWARQAXASAYAJQgGAGgHALQgLgGgOgJIAAAQIgtAAIAAAZIA1AAIAAARIg1AAIAAAcIBKAAIAAARgAg1gTIBqABQgggWgVgbQgTAZgiAXg");
	this.shape_6.setTransform(-13.15,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhXBWIAAgRIBPAAIAAgVIg7AAIAAgQIA7AAIAAgQIgOAAIAAgnIgWAAQgGAdgZAPQgDgHgIgGQAUgKAEgVIgWAAIAAgQIAYAAIAAgYIgRAAIAAgRIBXABIAAAQIgPAAIAAAYIATAAIAAARIgTgBIAAAkIAPAAIAAATIA6AAIAAAQIg6AAIAAAVIBOAAIAAARgAgrgnIAVAAIAAgYIgVAAgAAiACIAXAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAAAIABhVIARAAIAABVQAAAMgJAEQgGADgXgBgAAZgKIAAhBIAQAAIAABBg");
	this.shape_7.setTransform(-38.075,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLBZQgRAAgFgEQgGgFAAgMIAAgYIASAAIAAAYQAAADACABQACABAIAAIAfABQAGAAABgDQACgDABgLQAFAEALACQgCAQgFAFQgFAFgMAAgAhaBNQATgMAHgUIAQAFQgKAagRALgAAqA0IAPgJQAXAQAKATIgPAJQgJgRgYgSgAgTAqIAGgFIg4AAIAAgMIB3AAIAAgKIiGAAIAAgLICGAAIAAgJIh2AAIAAgMICIABIAAAUIASAAIAAALIgSAAIAAAWIhCAAQAOAJAFAFIgMALQgJgLgTgJgAAggTIAAgJIggAAIAAgMIAgAAIAAgIIgaAAIAAgMIAaAAIAAgHIgfAAIAAgMIAfAAIAAgJIARAAIAAAJIAgAAIAAAMIggAAIAAAHIAdAAIAAAMIgdAAIAAAIIAkAAIAAAMIgkAAIAAAJgAgzgTIAAgKIggAAIAAgLIAgAAIAAgIIgaAAIAAgMIAaAAIAAgHIgeAAIAAgMIAeAAIAAgJIAQAAIAAAJIAeAAIAAAMIgeAAIAAAHIAbABIAAALIgbAAIAAAIIAgAAIAAAMIggAAIAAAJg");
	this.shape_8.setTransform(-62.95,-0.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAxBaIAAgGIhVAAIAAAGIgSAAIAAhRIB6AAIAABRgAgkBFIBVAAIAAgQIhVAAgAgkAoIBVAAIAAgQIhVAAgAhUACQAegKAIgUIgkAAIAAgPIAOAAQgJgGgFgCQAPgOAHgZIAQAEIgFANIAzAAIAAAPIgaAAIgBAPIAfAAIAAAPIgiAAIgBACIATAKIAPALIgLAKIgcgTQgMAQgaANQgEgJgIgEgAhDgrIAZAAIAAgPIgOAAQgFAIgGAHgAANgDIABhHIBGABIAABGgAAfgTIAjAAIAAgmIgjAAg");
	this.shape_9.setTransform(-88.4,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgqA/QgcgVAAgqQAAgoAdgWQAZgUAnAAQAYAAAYAHIAAAiQgYgIgUAAQgcAAgOANQgPANAAAXQAAAYARANQAOANAYgBQATAAAbgHIAAAkQgbAFgWAAQgoAAgYgUg");
	this.shape_10.setTransform(-112.7,-0.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgrA/QgbgVAAgqQAAgoAdgWQAagUAmAAQAbAAAVAHIAAAiQgVgIgYABQgaAAgPAMQgPANAAAXQgBAYARANQAOANAZAAQAVgBAZgHIAAAkQgYAFgZAAQgoAAgZgUg");
	this.shape_11.setTransform(-129.6004,-0.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSBQIAAifIAlAAIAACfg");
	this.shape_12.setTransform(-142.575,-0.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},15).to({state:[]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},36).to({state:[]},1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.5,-9.2,289,18.5);


(lib.sb_sc3bgline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.instance = new lib.sc3bgline();
	this.instance.setTransform(-80,-124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55).to({_off:true},1).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-124.5,160,249);


(lib.sb_sc3bgfront = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.sc3bgfront();
	this.instance.setTransform(-300,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-250,1456,180);


(lib.sb_sc3bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sc3_bg
	this.instance = new lib.sc3bg();
	this.instance.setTransform(-728,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-728,-90,1456,180);


(lib.sc2vtext = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiVBIIAMgFIAACWICDg2IAAi4IiAA0IAAiaIALgFIAACMIB1gvIAAi7IALgFIAAC7IB2gxIAAiNIAMgFIAACbIiCA2IAAC4ICFg4IAAiUIAMgFIAAC/IgMAFIAAgdIkfB4g");
	this.shape.setTransform(18.4,170.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiyBCIFliTIAAAPIllCUg");
	this.shape_1.setTransform(18.425,120.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiNAsQgPAwgNAgIgLgFQArhZASiiIg3AXIAAgOICUg9IAAAOIhQAhQgJBKgOA9IBWgjIAAC8IhWAjIAAAtIgMAFgAiBALIAAChIBKgfIAAiggAAHC7QgIgEAAgXIAAjrIBqgsIAAB3IhfAnIAAB0QAAAPAGACQAFACAUgIIBkgqQARgGAFgQQAFgOABgvQAEACAIAAQgCAxgGARQgIATgYAKIhjApQgUAJgJAAIgGgBgAAKhBIAABbIBTgiIAAhcgABWAxQAXgHATgJQAHgCAEgIQAGgLADgwQAEgwACh1IiMA5QgQBAgXAwQgCgCgIgDQAkhLAVh5IAMgCQgGAogKAkICUg9IAAAKQgDB+gDAxQgDAwgIAOQgGANgOAGQgOAHgZAIQgCgJgCgDg");
	this.shape_2.setTransform(18.1,74.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiuD8ICohGIAAg5IiKA5IAAgOICKg5IAAguIh+A1IAAiPIB+g1IAAgnIimBFIAAgPICmhFIAAgvQg+AghHAfIgDgLQC6hUBPg2IAKAIQguAehSAqIAAAxICphGIAAAOIipBGIAAAoICCg2IAACPIiCA2IAAAtICRg9IAAAPIiRA8IAAA6ICqhHIAAANIldCSgAh4AvIAAA0IBygvIAAg0gAAFgDIAAAyIB3gwIAAg0gAh4gQIAAAyIByguIAAgzgAAFhFIAAAzIB3gxIAAgzg");
	this.shape_3.setTransform(18.35,26.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sc2vtext, new cjs.Rectangle(0,0,36.4,193.8), null);


(lib.sb_sc2vc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrBZQAYABAGgBQAEAAAAgDIAAgLIhbgBIAAgPIBbAAIAAgMIhMAAIAAgPIBMAAIABgLIhDAAQgBgEgDgKQBcABAxgIIANANQgaAFglABIAAANIBOAAIAAAPIhOAAIAAAMIBcAAIAAAQIhcAAIAAALQAAAOgKAEQgFACgKAAIgXABQgCgKgFgIgAAzgTQgQALgcAIQgDgHgHgJQAYgGARgKQgJgKgGgKIgMANQgIgIgFgEQgDApgFAGQgEAEgIAAQgIABgPgBQgBgFgCgHIgXAAIAAAHIgOAAIAAghIgKAKQgFgIgHgDQARgPAHgVIARADIgDAIIBDAAIAAALQAVgUALghIATAFIgHARIA+AAIAAAQIgNAAQgIAWgQAPQAUAMAVAEQgHAHgFAJQgZgFgUgPgAhQgtIAvAAIAAAhIACAAQAEAAABgCQAEgEACgiIg3AAgAhHgWIAXAAIAAgMIgXAAgAA0gqQAMgLAGgPIglAAQAHANAMANgAglhHIAAgiIARAAIAAAKIAdABIAAAOIgdAAIAAAJgAhFhJIAAgHIgeAAIAAgPIAeAAIAAgKIASAAIAAAgg");
	this.shape.setTransform(204.5,0.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABDBpIABjRIAVAAIAADRgAg2BnQgBgNgGgKQATACAQAAQAHAAAEgDQAHgGAEgwIhUAAQAIgmAEggIBJAAIAAghIhQAAIAAgUIBkAAIAABIIhKAAIgGAfIBSAAIgBAKQgDAmgDARQgEASgGAHQgGAGgOACIgMAAIgYAAg");
	this.shape_1.setTransform(178.5,0.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhqBZQALgUADghQACgUABgiIAAhRIDBAAIgBARIitAAIAABAQAABQgTAlQgGgGgLgEgAhJBiIAAgQIBQAAIAAgPIhAgBIAAgPIBAAAIAAgLIAUAAIAAALIA/AAIAAAQIg/AAIAAAPIBOAAIAAAQgAhHAfQAJgLgBgUIAAgaIBOAAIgBAzQAdgUAEghIgdAAIAAgRIAeAAIAAgfIAQAAIAAAfIAlAAIAAARIggAAQAMAnAaANQgJAHgEAIQgWgNgMggQgJAbgbARQgCgDgIgHQgBAGgGACQgFACgVAAQgBgFgEgHIATAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAAAIAAgKIgqALIgDgIQgCANgGAKIgQgJgAguANIAjgIIgggIIAFgIQATADANAFIgEAIIAJgDIAAgQIgsgBgAg7ghIABgqIBEAAIAAAqgAgrgrIAmAAIAAgGIgmgBgAgrg7IAmAAIAAgGIgmAAgABFhFIAMgHQAOAMAFAKIgMAIQgKgOgJgJg");
	this.shape_2.setTransform(153.35,0.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABGBrIAAgMIg/AAIAAAMIgSAAIAAhaIBlAAIAABagAAHBQIA/AAIAAgPIg/AAgAAHAxIA/AAIAAgPIg/AAgAhkA4IAagJIABhNIgYAAIAAgUIAYAAIAAg1IATAAIAAA1IAXAAIAAAUIgXAAIAABFIAWgHIAEATIhBAagAgWAFIAAhNIAcAAQgGgNgIgMIARgIQAMANAFANIgPAHIAnAAQANgTAFgPIAWAIIgSAaIAdAAIAABNgAAugJIAkABIABgxIgkAAgAgFgJIAjAAIABgwIgkAAgAAygSQAKgPAGgSIANAFQgJARgKAOgAAAgwIAKgEQAMARADAQIgMAEQgCgMgLgVg");
	this.shape_3.setTransform(127.45,0.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNBrIAAhyIBsAAIAABeQAAAMgGAFQgFADgOAAQgBgJgEgJIALAAQAAAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAIAAgfIgPAAIAAAwIgPAAIAAgwIgPAAIAAAwIgQAAIAAgwIgOAAIAAAzgAA/AmIAPAAIAAgcIgPAAgAAhAmIAPAAIAAgcIgPAAgAADAmIAOAAIAAgcIgOAAgAhIBrIAAgkIgjAAIAAgTIAjAAIAAgRIgcAAIAAhSIAcAAIAAgQIggAAIAAgSIAgAAIAAgXIATAAIAAAXIAhAAIAAASIghAAIAAAQIAeAAIAAAKQAmgcAXgqIAPAIIgEAIQAbAgAgAWQgKAJgEAIIgRgPIAAALIhKAAIAAgJIgPAOQgFgJgGgFIgBBFIgdgBIAAARIAhAAIAAATIghAAIAAAkgAg3AUIAPAAIAAgTIgPAAgAhUAUIAOAAIAAgTIgOAAgAg3gMIAPAAIAAgTIgPAAgAhUgNIAOABIAAgTIgOAAgAAMgqIA6AAQgVgVgKgMQgPAUgMANg");
	this.shape_4.setTransform(102.7,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAxBXIAdAAQAEAAABgEIAAhTIhiAAIAABqIgVAAIAAh8IAVAAIAAhQIBkAAIAABQIASAAIAABlQAAAPgKAFQgHADgeAAQgCgMgFgHgAAngSIAaAAIAAgaIgaAAgAADgSIASAAIAAgrIAsAAIAAgSIg+AAgAhgBaQATgfAUgsIAQANQgQAogUAjgAABBRIAAhDIBAAAIAAA3IgvAAIAAAMgAASA2IAeAAIAAgYIgeAAgAhmgbIAMgQQAcALANALIgMASQgOgMgbgMgAhahZIAMgQQAbALANAMIgMASQgNgNgbgMg");
	this.shape_5.setTransform(76.55,0.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiBoQgTAAgGgHQgHgIAAgVIAAirIAXAAIAABGIA7AAIAAAVIg7AAIAABQQAAAKABADQADACAHAAIAgAAQAGABADgJQACgGACgaQAJAIAKABQgCAegGALQgHALgQAAgAhjBVQAKgGgBgNIABipIAWAAIAABGIA4AAIAAAVIg4AAIAABUIA5gNQgBAJADALQhKAUgIAEQgEgMgFgGg");
	this.shape_6.setTransform(52.1,0.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBrIAAhvIAYAAIAEgTIghgBIAAgRQgEAQgHARIAABzIgRAAIAAhQIgKANQgFgJgFgFIABgCIgKAFIgBgGQgzAIgHADIgFgSQAEgBAMgOIARgXQgZADgEACIgGgRQAEgCAIgLQASgbAKgeIARAHQgPAhgRAaIAUgBIARggIAPAKQgWAqgaAfIAfgFIgIgUIAOgFQAKAUADARQAVgdAGgpIATAEIgCAGIBXAAIAAASIghAAIgGATIAjABIAABtIgTgBIAAgIIgpAAIAAAKgAAqBPIApABIAAgaIgpAAgAArAlIAoAAIAAgYIgoAAgAhpBgQAGgSADgjIAQAEQgDAhgHAWQgFgDgKgDgAhHAuIAPgEQAEAbABAWIgOAEQgBgUgFgdgAguApIAMgFQAKAaAEASIgPAFQgCgQgJgcgAgWgrIAAgoIA4AAIgJgQIARgHQAGAIAHAPIAzAAIAAAkIgUAAIAAgSIhYAAIAAAWg");
	this.shape_7.setTransform(25.65,0.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhqBaQARgjAAhJIAAhRIDAAAIAAAQIitAAIAABBQgBBSgRAjQgJgGgJgDgAhJBiIAAgQIBQAAIAAgPIhAgBIAAgQIBAAAIAAgKIAVAAIAAAKIA/AAIAAARIg/AAIAAAPIBNAAIAAAQgAhGAfQAIgLAAgUIAAgaIBMAAIAAAyQAegTADghIgcAAIAAgRIAdAAIAAgfIAQAAIAAAfIAlAAIAAARIggAAQALAnAbANQgJAIgEAHQgWgNgNgfQgIAagbASIgKgKQAAAFgHACQgFACgVAAIgFgMIATAAQABAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAIAAgKIgqALIgDgIQgDAOgGAJQgDgDgMgGgAguANIAjgIIgggIIAFgJQARAEAPAFIgEAIIAJgCIAAgRIgsAAgAg6ghIAAgqIBFAAIgBAqgAgrgqIAmAAIABgHIgngBgAgrg7IAnAAIAAgGIgnAAgABGhEIAMgIQANAMAFAKIgMAIQgHgLgLgLg");
	this.shape_8.setTransform(0.15,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhqBaQAxgDAigIQgWgMgMgKQgOALgUAJQgGgKgGgGQArgQARgbIATAGIgHAJICAAAIAAAQIgfAAQgOARgYAMQAgAIAvAEQgFAGgGALQg0gEgqgOQgkANg+AGQgFgNgFgFgAACBHQAZgJANgNIhRAAQARAMAaAKgAhoAWQAFgOABgTIANADQgBAVgHAQgAAjATQAEgPABgQIAOADQgCAUgFAPgAhOgJIANgCQAFASAAANIgOADQAAgMgEgUgAA9gJIANgDQAFASAAAOIgOADQAAgQgEgQgABTgMIAMgCQAGAOADARIgNAEQgBgOgHgTgAgeAUIAAgpIA8AAIAAApgAgQAIIAgAAIAAgRIggAAgAg4gKIAMgDQAFANADAOIgNAEgABagYQgtAFgFADIgFgOQAFgBAJgJIANgOQgTABgEACIgFgOQAEgBAGgGQAOgTAGgPIAPAGQgIAQgOASIAQgBIAMgRIAOAGQgSAagSASIAYgCIgGgOIANgDQAJAUACAOIgNAEgAgwgXQgsAFgGADIgEgPQAEAAAJgJIAPgPQgTABgFACIgFgPQAFAAAEgHQAMgLAJgWIAQAFQgNAWgKAMIARAAIALgRIAPAHQgUAbgTASIAYgDIgFgMIANgEQAIARADAPIgNAEgAgegfIAAgMIA9AAIAAAMgAgeg1IAAgMIA9ABIAAAMgAgjhJIAAgNIAdAAIgHgPIAPgGQAGAKAEALIAXAAIAAANg");
	this.shape_9.setTransform(-25.175,0.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAEBLIAqABQAHgBAAgFIAAiSIibAAIAAgWIDNAAIAAAWIgbAAIAACSQAAAUgOAEQgLAEgmABQgCgKgHgOgAhQA6IAAhnIBfAAIAABVIhJAAIAAASgAg6AUIA1AAIAAgtIg1AAg");
	this.shape_10.setTransform(-50.65,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAABOQgmAAgXgUQgYgVAAglQAAglAYgUQAXgUAmAAQAnAAAXAUQAYAVAAAkQAAAlgYAVQgXAUglAAIgCAAgAgcgeQgLAMAAASQAAASALAMQAMALARABQARAAALgMQALgMAAgSQAAgTgLgLQgLgLgSAAQgRAAgLALg");
	this.shape_11.setTransform(-80.075,1.5006);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AguBYIgEALIgggBIAAjHIAsAAIAAA6QAVgKAUAAQAiABAWARQAZAWgBAlQAAAkgYAWQgXAUggABQgZAAgZgPgAgmgIIAABBQAQAJATAAQARABALgLQANgMAAgVQAAgTgLgLQgLgJgRgBQgUABgRAIg");
	this.shape_12.setTransform(-100.4745,-0.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgxBMIAAiUIAkAAIAFAQQAagTAgAAIAAAqQgdgBgaAPIAABfg");
	this.shape_13.setTransform(-117.65,1.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag9BAQgPgPAAghIAAhcIAsABIAABWQAAAdAaAAQAUAAATgOIAAhlIAsAAIAACUIgkAAIgFgQQgdAUgbAAQgbgBgOgMg");
	this.shape_14.setTransform(-135.55,1.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWBfIABiWIg/gBIAAgmICpABIAAAmIg+AAIAACWg");
	this.shape_15.setTransform(-153.8,-0.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag4AVIAAgpIBxAAIAAApg");
	this.shape_16.setTransform(-168.175,0.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgzBLQgggZAAgyQAAgvAigbQAfgXAtAAQAdAAAcAIIAAAoQgdgIgYAAQggAAgRAPQgSAPAAAbQAAAdAUAPQAQAPAdAAQAagBAdgJIAAArQgfAGgbAAQgwAAgdgXg");
	this.shape_17.setTransform(-184.45,-0.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AghBfQgqhagahjIAwAAIASA6QAUA/APAgQAOghAUg7IATg8IAxAAQggBsgnBQg");
	this.shape_18.setTransform(-205.025,-0.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.2,-11.2,430.5,22.5);


(lib.sb_sc2bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sc2_bg
	this.instance = new lib.sc2bg();
	this.instance.setTransform(-727,-101,1.0094,1.0094);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-727,-101,1469.7,181.7);


(lib.sb_sc2369 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjADVQBTgLBMgoQBVgsAohAQgRAPgmAOQgoAOggAAQhdAAgwg3QgugzALhPQALhQBBg5QBGg+BhAAQBeAAAxA6QAyA7gOBlQgUCQh4BiQhvBaijAZgAhPiyQgqAhgIA4QgIA4AjAhQAfAdA3AAQA5AAAqggQAqgiAIg1QAHg2gcghQgfgig9AAQg7AAgoAhg");
	this.shape.setTransform(60.021,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvApIALhRIBUAAIgMBRg");
	this.shape_1.setTransform(22.8,23.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiuDlQgyg8AOhlQAUiPB4hhQBuhaCkgYIgKBKQhVAMhLAmQhVAsgnA/QARgPAmgNQAngPAgAAQBdAAAwA3QAuAzgLBPQgMBRhAA5QhFA+hhAAQhfAAgxg6gAhSADQgpAhgIA2QgIA1AdAiQAeAjA+AAQA5AAAqgiQApgiAIg3QAIg5giggQgggeg3AAQg5AAgqAhg");
	this.shape_2.setTransform(-7.821,0.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjkD+IAKhOQBuAfA1AAQCfAAAQhtQAJg7g4gVQgmgOhdAAIgmAAIAHg0IDAihIkLAAIAKhJIGAAAIgIA6IjJClQBRACAwAhQA+ApgMBSQgNBZhIAxQhFAuhsAAQhBAAhlgdg");
	this.shape_3.setTransform(-58.45,0.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},8).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},50).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.4,-28.7,162.8,57.5);


(lib.sb_sc2239 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjRDoQBbgNBSgrQBdgwArhGQgSARgqAPQgrAQgjAAQhlAAg0g8Qgyg3AMhWQANhYBGg+QBLhCBqAAQBmAAA1A+QA2BAgPBuQgWCciCBqQh4BjixAagAhWjCQgtAlgJA8QgIA9AlAkQAiAfA8AAQA+AAAtgjQAugkAIg6QAIg6gfgkQghgmhCAAQhAAAgsAkg");
	this.shape.setTransform(56.7795,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aj5ETIANhUQB1AiA7AAQCtAAARh2QAKhAg8gXQgqgPhlAAIgqAAIAIg6IDQiuIkhAAIALhPIGhAAIgJA/IjaCyQBXADA1AkQBCAtgMBZQgNBhhPA0QhLAyh2AAQhIAAhtggg");
	this.shape_1.setTransform(-0.7,0.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjyEzIALhLQCghqBJg8QCIhuALhJQAGgxgagcQgegghJAAQhPAAhmAtIAMhWQBjgnBbAAQBmAAA0AxQAzAxgMBUQgNBdhvBlQhQBKiJBTIEvAAIgLBQg");
	this.shape_2.setTransform(-55.6866,-0.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},13).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},45).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.9,-31.2,159.9,62.5);


(lib.sb_sc1heart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("A8YBoIh3AJIgDgYIA8gDIAAgiIgyAAIAAhEIAyAAIAAgYIAXAAIAAAYIA0AAIAABEIg0AAIAAAhIAdgCIgNgUIAUgIQAXAgAIAYIgVAJgA8/AgIAeAAIAAgeIgeAAgA90AgIAeAAIAAgeIgeAAgAdBBlQAegFAMgMQAKgLADgVIgYAAIAAhKIB3AAIAABKIgdAAIAAAkQAAAHABAAQADACADgBIAKAAIAIgBQADAAAAgEIACgWQAFAFANAGQgBASgCAGQgDAHgHACQgFACgLAAIgRAAQgMAAgGgFQgGgEAAgTIAAgjIgVAAQgEAcgNAPQgOAQgiAJQgEgKgJgJgAd1AlIBLAAIAAgPIhLAAgAd1AHIBLAAIAAgMIhLAAgAPIBEIAWgJQASAcAKAWIgXAKQgIgTgTgggAMZBuQAQgVALgdIAXAHQgNAggOAUgAFfBeIAiABIAFgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAiDIhEAAIAAgXIBeAAIAAAVQAJAdALATQAfgXAYgbIAWAQQgiAfggAWQAeAqAtARQgIAHgJAOQg6gagfhAIAABMQAAAUgNAFQgKAFgjAAQgBgLgHgOgA1+AAQgXBShMAkQgGgKgMgKQBNgiAThVIhbAAIAAgZIBgAAQABgNACg6IAaAAQgBA0gDATIBoAAIAAAZIheAAQAdBYBGAcQgLALgHAMQhEgfgghXgA/SB0QgBgLgGgLIAaABQAHABACgDQAHgGADg3Ig9AAQAFggAFgtIAzAAIAAglIg6AAIAAgVIBQAAIAABQIg2AAIgEAiIA9AAIgBAJQgEBNgKALQgFAHgNABIgQABIgOgBgANfBFIAXgCQAGAeAAAQIgXAEQgBgZgFgXgAOUBEIAWgDQALAZAFAWIgYAEQgDgVgLgbgAtoByQgBgNgGgJIAmABQAHAAADgFQAGgGAEghQADgdAChLIg8AAQgMAagMARQgIgHgLgGIAAB1IhGAAIAAAUIgVAAIAAi8IAcAAQAHgTACgXIAaAFIgNAlIApAAIAAAxQAZggAOg7IAXAGQgFAUgGAPIBLAAIAAALQgDBZgDAiQgEAkgHAKQgIAKgPABIgRABIgWgBgAvdBHIAwAAIAAg5IgwAAgAvdgGIAwAAIAAgxIgwAAgAmfByQgXAAgIgIQgIgIAAgVIAAh6IAZAAIAAB6QAAAJADADQADADALAAIArAAQALAAADgKQAEgJABghQAKAIAMACQgCAmgIANQgIANgVAAgAUMBqIAAgYIAiAAIAAiQIAZAAIAACQIA2AAIAAjGIAZAAIAABTIBRAAIAAAXIhRAAIAABcIBdAAIAAAYgAEbBVQArgaATg0Ig4AAIAAgWIBDAAIAEAAIAQAGQgKAmgUAdQgTAcgYARQgNgOgHgEgAb+A+IAfgLIAAhTIgbAAIAAgXIAbAAIAAg6IAXAAIAAA6IAYAAIAAAXIgYAAIAABLIAagJIAEAWIhMAegAoGBFQAPgoAGg5IAYAFQgJBAgMAmgAlSgaIAXgJQAYAyAKAtIgYAKQgHgpgag3gAMYA0IAAgVIAlAAIAAgmIgdAAIAAgWIAdAAIAAgaIAWAAIAAAaIAWAAIAAgaIAVAAIAAAaIAZAAIAAgaIAUAAIAAAaIAZAAIAAgaIAWAAIAAAaIAbAAIAAAWIgbAAIAAAmIAhAAIAAAVgAOrAfIAZAAIAAgmIgZAAgAN+AfIAZAAIAAgmIgZAAgANTAfIAWAAIAAgmIgWAAgAt8gHIASgLQAdAjAKAWIgUAMQgKgXgbgjgA8dgvQhgAIgJADIgIgUQAGgBAIgKQATgWALgaIAZAFQgSAegSAVIBCgGIgRgUIARgKQAgAhAKAVIgSALgAdUggIAAgUIAiAAIgHgWIAUgEQAGAOACAKIgFACIAlAAIAJgaIAWAEIgKAWIAkAAIAAAUgAMSg4QAkgZASgmIAVAHQgHAOgHAKICkAAIAAAVIi0AAQgPASgPAMQgKgPgFgEgAm7heIAQgQQA0AjASAUIgRASQgYgagtgfgAFZhgIAMgVQAYAGAbAJQAcAJAPAJIgMAXQghgUg9gPgAdchPIAAgVIA1AAIgGgOIAWgFIAIATIA0AAIAAAVg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.6,-12,405.29999999999995,24);


(lib.sb_sc1bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sc1_bg
	this.instance = new lib.sc1bg();
	this.instance.setTransform(-300,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-250,600,500);


(lib.sb_light = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_12
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CCCCCC","#FFFFFF","#CCCCCC"],[0,0.529,1],-60.3,0,60.3,0).s().p("EgJaApUMAAAhSnIS1AAMAAABSng");
	this.shape.setTransform(5.0638,0.0204,1,1,24.7181);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20).to({_off:true},1).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.2,-265.3,330.6,530.7);


(lib.sb_circle2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#7FBDF2","#194F7F","#000000"],[0,0.451,1],0,0,0,0,0,333.3).s().p("EgkaAkbQvGvFAA1WQAA1VPGvFQPFvGVVAAQVWAAPFPGQPGPFAAVVQAAVWvGPFQvFPG1WAAQ1VAAvFvGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(44));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-329.7,-329.7,659.4,659.4);


(lib.sb_circle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#194F7F","#000000"],[0,1],0,0,0,0,0,333.3).s().p("EgkaAkbQvGvFAA1WQAA1VPGvFQPFvGVVAAQVWAAPFPGQPGPFAAVVQAAVWvGPFQvFPG1WAAQ1VAAvFvGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(44));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-329.7,-329.7,659.4,659.4);


(lib.sc3vtext = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHDsQAfgMAagMQAJgEAAgJIAAg0IitBIIAAgOICthIIAAgkIiNA7IAAgOICNg7IAAgjQhJAjhOAdQAAgEgCgHQBTgiBNgkQBZgpArgbIAPAFQg4AjhYAoIAAAkICKg6IAAAOIiKA5IAAAlICuhIIAAANIiuBJIAAAzQAAAJgCAFQgDAFgFAFQgLAIgzAUQAAgDgEgHgAiaAjIAMgFIAAAeIAwgUIAAgjIhRAhIAAgNIBRghIAAgTIg+AaIAAhVIA+gaIAAgUIhNAgIAAgOIBNggIAAgaIAMgFIAAAaIBPghIAAAOIhPAhIAAAVIBAgbIAABVIhAAbIAAASIBSgiIAAAOIhSAhIAAAkIA0gWIAAgdIALgFIAAArIiHA4gAiRgqIAAAWIAzgVIAAgWgAhShEIAAAXIA0gWIAAgXgAiRhNIAAAVIAzgVIAAgVgAhShnIAAAVIA0gVIAAgVgAgKAPQArgaAlgmQgegLgPgZIAKgJQAOAYAfAKQAegkAQgjIhsAsIAAgOIBzgvIACgCIAIACQgQAvgkAsQAoAHAwgNQgEAGgDAKQg0ALgngKQgjAmgxAhQgEgHgDgDgAgKhqQApglAAgkIAAgcIBbgmIAAA6QAAAJABACQABACAEgBIAfgNQAJgDAGgEIACAMQgCACgPAHIgfANQgLAEgEgEQgDgFAAgQIAAgsIhEAcIAAAOQAAAtgsAoQgFgFgDgCg");
	this.shape.setTransform(18.525,167.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiVBIIAMgFIAACWICEg2IAAi4IiBA0IAAiaIAMgFIAACMIB1gvIAAi7IAKgFIAAC7IB2gxIAAiNIAMgFIAACbIiCA2IAAC4ICGg4IAAiUIALgFIAAC/IgLAFIAAgdIkgB4g");
	this.shape_1.setTransform(18.55,120.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEB2IioBGIAAgOICohGIAAgnIALgGIAAApICqhHIAAAOIiqBGIAABqIgLAFgAikB8QAphAAjhBIAHAHQgtBTgdAwgAgzhiQgRAggRAaQgDgEgHgBQAxhHAbhXIALAAQgIAbgPAjIBVgjQgHgSgOgUIAMgJQAPAVAIATIBYgkIAAAOIhgAoIAAAwIBWgkIAAAOIhWAkIAAAwIBYglIAAAPIhYAkIAAAxIBngqIAAAOIjLBUIAAAWIgLAGgAgoAAIAAAxIBZgkIAAgygAgog9IAAAvIBZgkIAAgwgAgnh8IgBACIAAAuIBZglIAAgvgAiwgmIAGgMQAlgDAcAHIgGAQQgVgIgsAAgAiRiDIAFgOQAqAAAYAJIgFAPQgagJgogBg");
	this.shape_2.setTransform(18.375,71.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhtAAIhCAaIAAgNIBCgbIAAigIALgGIAAChIA5gXIAAAOIg5AXIAAD+IgLAEgAghDaQAbg2AAhWIAAhZIChhDIAADHQAAAPgJAHQgIAGgmAQQgCgGgEgGIArgRQAGgDAAgHIAAg+IiNA7QgEA6gWAsQgFgGgEgBgAAFA8IgBAwICLg5IAAgxgAAFgCIAAAvICKg3IAAgygAi1DRQAMgcANgvQANguAHgnIAJgCQgHAsgNAvQgNAygNAdQgDgFgFgDgAg+BLQgNgigGgJIAJgKIAUApIATAtIgLAQQgFgQgNghgAiqhzIALgHQARAuAJArIgLAIQgJgtgRgtgAgigzIBjgqIAAgsIhWAkIAAgOIBWgkIAAgoIhgAoIAAgNIBggpIAAgrIAMgFIAAAsIBngrIAAAOIhnAqIAAAoIBfgnIAAAOIhfAnIAAAsIBpgrIAAAOIjYBagAhSg0QARgwAPhFIAMABQgXBWgLAfg");
	this.shape_3.setTransform(18.225,25.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sc3vtext, new cjs.Rectangle(0,0,36.5,191.9), null);


(lib.an_sc5exp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc5_free
	this.instance = new lib.sb_sc5free("synched",0,false);
	this.instance.setTransform(-299.75,-0.25,2.0699,2.0699,0,0,0,0,-0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:-0.05,alpha:1,mode:"single",startPosition:59},21,cjs.Ease.cubicOut).wait(1));

	// sb_sc5_exp
	this.instance_1 = new lib.sb_sc5exp("synched",0,false);
	this.instance_1.setTransform(222.4,-1.25);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-113.75,alpha:1,startPosition:37},13,cjs.Ease.cubicOut).to({mode:"single",startPosition:59},16).wait(1));

	// sb_sc5_11
	this.instance_2 = new lib.sb_sc511("synched",0,false);
	this.instance_2.setTransform(230.85,47.35);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({x:-114.35,y:46.45,alpha:1,startPosition:37},10,cjs.Ease.cubicOut).to({mode:"single",startPosition:59},16).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-368.5,-68.1,741.8,136.3);


(lib.an_sc5bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_circle_copy
	this.instance = new lib.sb_circle2();
	this.instance.setTransform(-438.75,-453.75,1.2708,1.2708,0,0,0,-0.1,-0.2);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.3,regY:-0.4,scaleX:1.0655,scaleY:1.3361,rotation:80.4685,x:-785.2,y:-326.35},87).wait(1));

	// sb_circle
	this.instance_1 = new lib.sb_circle2();
	this.instance_1.setTransform(378.15,-333.4,1.3042,1.3042);
	this.instance_1.compositeOperation = "lighten";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.5184,scaleY:1.5184,x:511.65,y:-444.05},43).to({regX:0.1,regY:-0.1,scaleX:1.7375,scaleY:1.498,x:749.5,y:-343.45},44).wait(1));

	// sc5_bg
	this.instance_2 = new lib.sc5bg();
	this.instance_2.setTransform(-769,-96,1.0527,1.0524);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(88));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1278.2,-944.6,2600.4,1095.2);


(lib.an_sc51031 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc5_1031
	this.instance = new lib.sb_sc51031("synched",0,false);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1,mode:"single",startPosition:59},17).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.6,-18.4,219.3,36.9);


(lib.an_sc550 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc5_50
	this.instance = new lib.sb_sc550("synched",0,false);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1,mode:"single",startPosition:59},17).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.4,-11.3,170.9,22.6);


(lib.an_arr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_arr
	this.instance = new lib.sb_arr("synched",0);
	this.instance.setTransform(-4.85,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0.4,alpha:1,startPosition:5},5).to({x:4.85,alpha:0,startPosition:59},5).to({x:-4.85,startPosition:0},3).to({x:0.4,alpha:1,startPosition:5},5).to({x:3.6,startPosition:59},5).to({startPosition:59},13).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-10.6,20.5,21.2);


(lib.sb_sc4nissan = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sc4_nissan
	this.instance = new lib.sc4nissan();
	this.instance.setTransform(-1.3,-1.4,1,1,0,0,0,217.2,20.1);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:true},1).wait(44).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.2,-43,391,85);


(lib.an_sc4tt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc4_plan
	this.instance = new lib.sb_sc4plan("synched",0);
	this.instance.setTransform(445.5,-39.6,0.5557,0.5557,0,0,0,-0.1,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:445.55,y:-39.65,alpha:1,startPosition:59},17,cjs.Ease.cubicOut).to({startPosition:59},5).wait(1));

	// sb_sc4_nissan_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_12 = new cjs.Graphics().p("AMKD1IAAipIiGAAIAAhIICGAAIAAhKIg0AAQgQAmgNAXIAAAAQgbgTgmgQIAAAAQATgcARguIAAAAQAPgrAIgvIAAAAIBIAOQgGAegHAWIAAAAIAcAAIAAhZIBLAAIAABZIBlAAIAABIIhlAAIAABKIB/AAIAABIIh/AAIAACpgAIlD1IAAj0QgJAMgNANIAAAAQgFgOgMgXIAAAAQgNgagJgOIAAAAQAhghAegxIAAAAQAdgyATg1IAAAAIBGAWQgVA4gdA0IAAAAIAAFfgAkZD1IAAlqIA2AAIAAgqIg8AAIAAg9ID2AAIAAA9Ig7AAIAAAqIA7AAIAAFiIg6AAIAAgYIh+AAIAAAggAjhCcIB+AAIAAhpIgRAAQgVAAgIgKIAAAAQgHgKAAgdIAAAAIAAg7IgQAAIAAAmQAAA6gcAcIAAAAQgRgSgMgHIAAAAgAjhAmQARgUAAgmIAAAAIAAglIgRAAgAhxABIAAAHIAAAAQAAAAAAABQABAAAAAAQAAAAABAAQAAABABAAIAAAAIAEAAQAGAAABgBIAAAAIAAhCIgOAAgAiqh1IANAAIAAgqIgNAAgArTDJIgrAKIgDgWQgiADibAJIAAAAIgFg9IBVgEIAAgdIhkAAIAACGIhGAAIAAiGIgTAAIAAg7IATAAIAAgMIBGAAIAAAMIBkAAIAAgPIiKAAIAAioIFfAAIAACoIiPAAIAAAPIC0AAIAACDQAAAWgEALIAAAAQgFAOgNAGIAAAAQgLAIgQACIAAAAQgMABgXAAIAAAAQgDgRgIgZgArFC4IADAAQAGAAAAgGIAAAAIAAhHIgiAAQARAoAIAlgAsoCFIAZgBIgIgTIAdgGIguAAgAsogNIBFAAIAAgQIhFAAgAuygNIBEAAIAAgQIhEAAgAsohIIBFAAIAAgQIhFAAgAuyhIIBEAAIAAgQIhEAAgAAzDuQgtAAgQgTIAAAAQgRgUAAg1IAAAAIAAjKIB9AAIAAhYIh+AAIAAhGIDFAAIAADkIh8AAIAACDQAAAQADAFIAAAAQADAEANAAIAAAAIAnAAQAMAAAEgOIAAAAQADgOACgxIAAAAQALAJAVAIIAAAAQASAIAQAEIAAAAQgFBDgRAYIAAAAQgRAZgpAAIAAAAgAUaDsIAAhDIBdAAQgPglgXgkIAAAAIAegMIg6AAIAAhCICbAAIAAgrIhkAAIAAgYQgaAMgfALIAAAAQgRglghggIAAAAQCrguBChnIAAAAIBHAfIgOAVQAlAeA3AbIAAAAQA4AaA5AOIAAAAQgNAMgPAUIAAAAQgPATgIAOIAAAAQgkgMgbgNIAAAAIAAAeIhiAAIAAArICcAAIAABCIg/AAIApAOQgbApgVAeIAAAAIBjAAIAABDgAYgCpIAxAAIgcgLQAUgeASgsIAAAAIg7AAgAW7CZIglAQIA6AAIAAhVIg7AAQAcApAKAcgAW9hdICBAAQgigWghgcIAAAAQgaAagkAYgA4GDRIAAhLIjtAAIABhPQBJhzCZicIAAAAIB8ABQiqCkhDBkIAAAAIB7ABIAAhdIBjABIAABcIA/AAIAABVIg/gBIAABLgAjWCGIAAg3IBoAAIAAA3gAsViOIAAgRIgsAAIAAg8IAsAAIAAgWIBJAAIAAAWIBpAAIAAA8IhpAAIAAARgAvKiOIAAgRIhnAAIAAg8IBnAAIAAgWIBJAAIAAAWIAvAAIAAA8IgvAAIAAARg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_graphics_12,x:4.5756,y:-13.8537}).wait(16));

	// Layer_9
	this.instance_1 = new lib.sb_light("synched",0);
	this.instance_1.setTransform(-316.3,-44.45,1,1,0,0,0,5,0);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({x:324.55,startPosition:13},15,cjs.Ease.none).wait(1));

	// sb_sc4_nissan
	this.instance_2 = new lib.sb_sc4nissan("synched",0);
	this.instance_2.setTransform(-0.1,-11.4,0.5326,0.5326);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,alpha:1,startPosition:59},13,cjs.Ease.cubicOut).to({startPosition:59},14).wait(1));

	// sb_sc4_season
	this.instance_3 = new lib.sb_sc4season("synched",0);
	this.instance_3.setTransform(9.7,-65.2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1,startPosition:59},6).to({startPosition:59},21).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.3,-88.1,811.5999999999999,118.1);


(lib.an_sc4bgfront = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_42 = new cjs.Graphics().p("EAU6A1cQAJn5icpmQhfl4j5rHQBULFBPGcQB1JlC6HZIs7gBQi6pOh2r8QhGnOhduZQg6CHiRBDQiSBCiNgsQgrBthnBFQhmBFh2AAQh1gBhlhHQhmhGgqhuQg/BghwAuQhvAuhwgYQhvgXhUhXQhUhWgUhxQgGghgDhLQgDhGgIglQgIglgWg3IgkhaQgghcgIh2QgFhQAFiJQAHiigBg4QgCh7gWhcQhTAshjgBQhjgChSgvQhSgvg0hUQgzhUgFhfQgGiTByiwQAhgyBKhiQBJhhAhgyIBniwQA9hpA3g8QBKhQBgghQBpglBZAnQAahnBNhQQBOhPBmgdQBngdBrAaQBsAbBNBKQADg5gChjQgDh0ABgqQAEi4BDhrQAthJBLguQBLgvBVgJQBVgIBTAfQBTAfA7A+QBaBfAvDSIAmCrQAYBjAfBCQACg4BMg+IA8gyQAhgeAPgdQAOgbAEgnQACgYgBgvIgJlVQgEiXAKhTQARiBA4hXQBUiBClgeQCngfB3BgQBJA7AyBqQAfBFAnCEIEEOAIDugSQgIiyAQhlQAYiYBThbQBQhYCAgVQB/gUBtA3QBqA2A/BvQA+BugEB6QB1gXBwBRQBoBMAuB7QAmBmAECNQACA+gKC9QgPEtASIyQATJQgKEOQgFCBgQBNQgYBwg3BKIhCBMQgoAtgPAkQgPAigFAvQgDAbAAA7QAAEpglEzQgOBvgRBEQgZBhgrBFQgxBRhPAvQhVAxhWgLQDLK7gELUg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(42).to({graphics:mask_graphics_42,x:53.88,y:711.4559}).wait(1));

	// sb_sc4_bg_copy
	this.instance = new lib.sb_sc4bg("synched",42);
	this.instance.setTransform(417.65,502.05,1.0408,1.0408,0,0,0,427.4,-159.7);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.5,574.6,518.8,187.29999999999995);


(lib.an_sc4bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// an_sc4_bgfront
	this.instance = new lib.an_sc4bgfront("single",42);
	this.instance.setTransform(616.9,-315.15,1.3362,1.3362,0,0,0,458.2,366.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:586.9},55).wait(1));

	// sb_sc4_bg
	this.instance_1 = new lib.sb_sc4bg("single",42);
	this.instance_1.setTransform(-76,89.9,1.387,1.387);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-62},55).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1060.7,-36.6,2033.4,251.4);


(lib.sc3vtext_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sc3
	this.instance = new lib.sc3vtext();
	this.instance.setTransform(18.2,95.9,1,1,0,0,0,18.2,95.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sc3vtext_1, new cjs.Rectangle(0,0,36.5,191.9), null);


(lib.sb_sc3car = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AojZIQg8gCgmgEQg1gHgrgNQgxgQgmgbQgrgfgXgpQgZgrgGg9QgFgoADhJIAKkwQABgtAEgZQACgPAEgOIABgVQAEhzAehXIAOgpIAEgMQAAgSAEgYIgCgLIAEgQIAFgMIAIgyQADgRABgjQADhSgKhMIgCgVIgBgBIgEgJIgEgTIABgCIADgKQAJgIAHgDQAGgEALgDQAWgGAZACQANAAAEgBQAJgDANgOQANgSAGgGIAOgNIAGgDIAjgLQAUgEAZgDQESgiENAtQAbANATAYIACACQAEAIAEAEIAGAGIADAGIADAFQABADAEgBQAEAAACgDIACgEIADgBIAGgCIACAAIAJAAIAIAAIAMADIAZALIAMAIIAFAEIACACQADADACAHIABAHIABABQAEAIABAMIAAAVQABAVARApQATAxAKAUIAIATQAFAMACAJIAAACQBvAiBnA1IAEALIAUAJQARAHAMAHQAPAKATASIAfAQIAiASQAdARAaAaQAZAZAiA1IAiA0QA+AkAqAiQBCA2AhBAQAYAtAIA0QAIA0gIA0QgQBmhHBSIgdAfIgeAfIgiAjQgTAUgQANQgjAdg2AYQgUATgaAOQgjATgvAKQghAIg3AFQhiAKh7AFQhGADiYACQixAEhNAAIgfAAQh8AAhkgEg");
	var mask_graphics_79 = new cjs.Graphics().p("AojMHQg8gCgmgFQg1gGgrgOQgxgQgmgbQgrgegXgpQgZgrgGg+QgFgnADhJIAKkwQABguAEgYQACgQAEgOIABgTQAEh0AehXIAOgpIAEgMQAAgSAEgYIgCgLIAEgPIAFgMIAIgzQADgRABgiQADhTgKhMIgCgUIgBgBIgEgJIgEgUIABgCIADgKQAJgIAHgDQAGgDALgDQAWgGAZABQANABAEgBQAJgDANgPQANgRAGgHIAOgMIAGgDIAjgLQAUgEAZgDQESgiENAtQAbAMATAYIACACQAEAJAEAEIAGAFIADAHIADAEQABAEAEgBQAEgBACgCIACgEIADgBIAGgDIACAAIAJAAIAIABIAMADIAZAKIAMAJIAFAEIACABQADAEACAHIABAGIABACQAEAHABANIAAAUQABAWARAoQATAxAKAUIAIAUQAFALACAKIAAABQBvAiBnA1IAEALIAUAJQARAHAMAIQAPAJATASIAfARIAiARQAdARAaAaQAZAZAiA1IAiA1QA+AkAqAhQBCA2AhA/QAYAtAIA1QAIAzgIA0QgQBmhHBSIgdAgIgeAfIgiAjQgTAUgQANQgjAdg2AYQgUATgaANQgjAUgvAKQghAIg3AFQhiAJh7AGQhGACiYADQixADhNAAIgfAAQh8AAhkgDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:18.0054,y:161.1778}).wait(79).to({graphics:mask_graphics_79,x:18.0054,y:244.5461}).wait(1).to({graphics:null,x:0,y:0}).wait(4));

	// sb_sc3_bg_copy
	this.instance = new lib.sb_sc3bg("single",0);
	this.instance.setTransform(-428,149.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({startPosition:0},0).to({_off:true},1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.9,166.8,185.8,72.79999999999998);


(lib.an_sc3tt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_lka
	this.instance = new lib.sb_sc3lka("synched",0);
	this.instance.setTransform(-229.45,30.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({x:229.45,alpha:1,mode:"single",startPosition:52},14,cjs.Ease.cubicOut).wait(1));

	// sb_sc3_icc
	this.instance_1 = new lib.sb_sc3icc("synched",0);
	this.instance_1.setTransform(-167.1,3.35);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({x:166,alpha:1,mode:"single",startPosition:52},16,cjs.Ease.cubicOut).wait(1));

	// sb_sc3_pro
	this.instance_2 = new lib.sb_sc3pro("synched",0,false);
	this.instance_2.setTransform(-207.2,-28.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:173.2,alpha:1,mode:"single",startPosition:84},13,cjs.Ease.cubicOut).to({startPosition:84},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-437.3,-40.7,874.7,81.5);


(lib.an_sc3light = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_bgline
	this.instance = new lib.sb_sc3bgline("synched",0);
	this.instance.setTransform(39.95,62.4,0.5025,0.5025,0,0,0,-0.4,-0.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},27).to({regY:-0.6,y:62.3,alpha:1,startPosition:23},10).to({regY:-0.4,y:62.4,alpha:0.4609,startPosition:0},4).to({alpha:1,startPosition:13},8).wait(43));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,80.4,125.3);


(lib.an_sc3car = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_car
	this.instance = new lib.sb_sc3car("synched",0);
	this.instance.setTransform(392.95,81.35,1,1,0,0,0,416.6,55.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},11,cjs.Ease.cubicOut).to({y:74.8},80,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.5,186.5,185.8,79.39999999999998);


(lib.an_sc3bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_circle_copy
	this.instance = new lib.sb_circle();
	this.instance.setTransform(-1583.85,317.65,3.5242,2.6284,0,0,0,-0.2,0);
	this.instance.alpha = 0.5508;
	this.instance.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.9964,scaleY:2.5042,x:-565.25,y:683.75,alpha:0.75},41).to({regX:-0.1,scaleX:2.3529,scaleY:2.3529,x:-602.05,y:695,alpha:1},50).wait(1));

	// sb_circle
	this.instance_1 = new lib.sb_circle();
	this.instance_1.setTransform(1074.1,-484.1,1.1422,1.336,-14.9978,0,0,0,-0.1);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:1336.3,y:-111.25},91).wait(1));

	// sb_sc3_bgfront
	this.instance_2 = new lib.sb_sc3bgfront();
	this.instance_2.setTransform(-805.1,271.1,1.9088,1.9089,0,0,0,-0.1,-0.1);
	this.instance_2.compositeOperation = "lighten";

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(92));

	// an_sc3_car
	this.instance_3 = new lib.an_sc3car("synched",0,false);
	this.instance_3.setTransform(1203.1,-304.2,2.1303,2.1303,0,0,0,159.8,50.2);

	this.instance_4 = new lib.an_sc3car("synched",0,false);
	this.instance_4.setTransform(1203.1,-303.3,2.1303,2.1303,0,0,0,159.8,50.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(92));

	// an_sc3_light
	this.instance_5 = new lib.an_sc3light("synched",0,false);
	this.instance_5.setTransform(776.05,-78.3,1.3733,1.3733,0,0,0,40.3,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(92));

	// sb_sc3_bg
	this.instance_6 = new lib.sb_sc3bg("synched",0,false);
	this.instance_6.setTransform(-11.2,-29.3,1.927,1.927,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(92));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2745,-1006.9,4559.1,2516.3);


(lib.sb_sc2car = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AZSDTQjAgZg6gEQgegCgQgGQgZgIgIgUQgDgHAAgIQAAgKAEgLQAIgSARgNQAFgFAagSQAVgOAJgLQAIgJAKgRIAAgBQAFgFADgGQAEgLgCgMIgEgLIgEgKIgDgPIgBgOQADgIgDgOQgGg3gDhCIgEh6IADgdIgBgZIgJhCIAAgFQAAgwADgYQADgnAOgdQAMgdAfgkIAlgrIALgHQAIgFABgGIABAAQAFgCACgDQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAgBIgBgDIgIAAIgHABQgEgBgFAAIgfAAIgNABIgNABQgaAAgWgNQgJgDgEgGQgEgFgCgIQgEgLgCgDIgDgIIgBgEIAFgIQAOgVAXgOIAZgMIABgBQAigFAigBQAHgBAFACQAGABAIAFQAFAEAEADIACAYQACAOgDALQgCAGABACQAAADACACQADADADAAQAFAAAFgFQAEgEAEgJIAEgOIAKgYQAKgWAIgJIAJgNQAJgOAGgVIAHgNIAQgdIAegqIAOgVIAPgOIAPgMIADgCQAPgHAQgGQADgCAYgGIAMgCIBLgKIAIgCIAkgCQCegLBVgEIBCgDIAPAAICFABIDEAEIATACIAVAEIATAEQAJAEAGAEQAOAIAOAOQAIAHAQATIAcAgQAgAtAZAvIAKAQQAHAJAJAJIADACIACAEIAHgKIADgCQAKgJAMgGQAJgDAMAAQACgBAkAAIAgAAQATAAAMAEQARAFANAMQAOANAEARQAEARgGASQgGARgOAKQgLAHgQADQgJADgSABIg1ADIgEACIAJAHQAZASAdAoQAOATAKAQQANANAIAOQADAEABAFIAAAEQAIBFACBHIACAEQgBAAAAABQAAAAAAABQAAAAAAAAQAAABABAAIAAAMIgCAkIAAARQgBANABAGIACACIAAA4QABBMAIA4IgEBgIAAAfIgCAJQACABABADIABAIQADARAKAWIAXAwQANAeAGAVQADANABAMQgCAJgEAJQgKASgXAMQgQAIgcAHQlABMkogGIipgHQhmgEhEADIhCAFIhCAEIgcABQhZAAiEgTg");
	var mask_graphics_67 = new cjs.Graphics().p("AofKOQjAgag6gEQgegCgQgFQgZgJgIgTQgDgIAAgIQAAgJAEgMQAIgSARgNIAggXQAVgOAJgKQAHgKALgRIAAAAQAEgGADgHQAEgLgCgMIgEgKIgEgLIgCgOIgCgOQADgJgCgOQgHg3gChCIgFh5IAEgdIgCgZIgJhCIAAgFQAAgvAEgYQACgoAOgdQANgdAegkQAYgZANgSIALgGQAJgGABgGIABAAQAEgCACgCQAAgBAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBIgCgDIgHAAIgHABQgEgBgGAAIgfAAIgMABIgNABQgbABgWgNQgJgEgEgFQgDgFgDgJQgDgLgDgDIgCgIIgBgEIAFgHQANgVAYgOIAYgNIACgBQAhgEAigBQAHgCAFACQAGABAIAFQAFAEAEADIACAYQACAPgDAKQgBAGAAACQAAADACACQADADAEAAQAFAAAFgEQAEgFAEgJIADgOIAKgYQALgWAHgJIAJgNQAJgNAGgWIAIgNIAPgcIAegrIAOgUIAQgPIAPgLIACgDQAPgHARgFQACgCAZgHIALgCIBLgJIAIgCIAkgDQCfgKBUgEIBCgEIAOAAICGACIDDAEIAUABIAUAEIAUAEQAIAEAHAEQAOAJAOANQAHAHARATIAcAgQAfAtAaAvIAJAQIAQATIADABIADAEIAGgKIAEgCQAKgJALgFQAKgEAMAAQABgBAkAAIAgAAQATAAANAEQARAFANAMQANAOAEARQAFARgHARQgGARgOAKQgLAHgPAEQgKACgSABIg0AEIgFACIAKAGQAYASAdAoQAPATAJARQANAMAIAOIAFAJIAAAEQAIBFACBIIABADQAAABAAAAQgBABAAAAQAAAAABABQAAAAAAAAIAAANIgBAjIAAARQgBANABAFIABADIAAA3QABBMAIA4IgDBhIAAAeIgDAKQADABABADIABAIQACARAKAVIAXAxQANAfAGAUIAFAaQgCAJgFAJQgKARgWANQgRAHgcAHQk/BMkogFIiqgHQhlgEhEADIhBAEIhDAFIgcAAQhZAAiEgSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:303.7412,y:-111.4136}).wait(67).to({graphics:mask_graphics_67,x:519.9,y:-155.65}).wait(1).to({graphics:null,x:0,y:0}).wait(16));

	// sb_sc2_bg_copy
	this.instance = new lib.sb_sc2bg("synched",0);
	this.instance.setTransform(61,-171.35);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(67).to({startPosition:67},0).to({_off:true},1).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(432.3,-222.8,175.2,132.20000000000002);


(lib.an_sc2vc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_vc
	this.instance = new lib.sb_sc2vc("synched",0,false);
	this.instance.setTransform(-233.5,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:233.45,alpha:1,mode:"single"},13,cjs.Ease.cubicOut).wait(47));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-448.7,-11.2,897.5,22.5);


(lib.an_sc2num = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_239
	this.instance = new lib.sb_sc2239("synched",0);
	this.instance.setTransform(-116.7,-0.05,1.4781,1.4781);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1,mode:"single",startPosition:59},14,cjs.Ease.cubicOut).wait(1));

	// Layer_10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguBBIAAh/IAMAAIACAJQAPgLASAAQAUAAANAMQANANAAAWQAAAWgPAOQgOAMgTAAQgQABgNgIIAAApgAgegnIAAAvQAMAJAPAAQAPgBAKgJQAIgJAAgOQAAgOgIgKQgJgJgPgBQgQAAgMALg");
	this.shape.setTransform(-13.925,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcA+IAAg3QAAgMgEgFQgFgGgPAAQgQAAgQAMIAABCIgQAAIAAh8IAQAAIAAAqQATgMARABQASgBAJAIQAKAIAAAUIAAA6g");
	this.shape_1.setTransform(-25.825,22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag9A5QAvgcAEg0IguAAIAAgKIAvAAIAAgfIAKAAIAAAfIA9AAIgBAFQgCAqgDATQgCAUgFAEQgEAFgJABQgKABgNgBQgBgIgDgDIAXABQAFAAACgCQAHgHAEhDIgxAAQgCAagJATQgOAagcARQgFgGgEgCg");
	this.shape_2.setTransform(-9.425,6.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdA9QgCgGgCgEIARABQADAAACgBQAEgEACgfIhiAAIAAhMIBlAAIAAAJIgvAAIAAAOIApAAIAAAJIgpAAIAAANIApAAIAAAJIgpAAIAAANIA4AAIAAAFQgDAngGAGQgDAEgGAAIgHAAIgLAAgAgiAHIAhAAIAAgNIghAAgAgigPIAhAAIAAgNIghAAgAgiglIAhAAIAAgOIghAAgAhAA3QAMgKAEgXIAKADQgFAZgMAKgAgbAbIAJgBQAFAPAAANIgJABQAAgLgFgRgAgCAaIAHgCQAHAMADANIgJADQgBgKgHgQgAAVAYIAIgDQAHAIAFALIgIAEQgEgJgIgLg");
	this.shape_3.setTransform(-24.65,6.945);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},15).wait(15));

	// sb_sc2_369
	this.instance_1 = new lib.sb_sc2369("synched",0);
	this.instance_1.setTransform(100.2,-2.3,1.4447,1.4447);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1,mode:"single",startPosition:59},9,cjs.Ease.cubicOut).wait(1));

	// Layer_11
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA7AvIAAg2QAAgNgFgFQgFgGgMAAQgPAAgOAMIAABCIgPAAIAAg2QAAgNgEgFQgFgGgMAAQgPAAgOAMIAABCIgRAAIAAhbIAMAAIADAKQARgMARAAQAXAAAGAOQATgOASAAQARAAAIAHQAJAJAAAUIAAA5g");
	this.shape_4.setTransform(227.4,17.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAIIAAgPIA7AAIAAAPg");
	this.shape_5.setTransform(214.85,16.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnA6IAAgQQAWAJARAAQAfAAAAgWIAAgFQgNAHgQAAQgUgBgNgMQgPgNAAgWQAAgWAPgOQAOgNATABQATgBAMAJIACgGIAMAAIAABXQAAAqgvABQgTAAgUgJgAgTgqQgKAJAAAQQAAAQAKAIQAJAJAOgBQAOAAANgIIAAgxQgMgJgPAAQgNAAgKAJg");
	this.shape_6.setTransform(205.075,18.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVA+QgbgfgTgQQAUgYAWgUIAYAAQgeAXgPAUQAJAIATATQAQAQAEAFgAgrA+IAAh8IAQAAIAAB8g");
	this.shape_7.setTransform(195.275,15.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag9A5QAvgbAEg1IguAAIAAgKIAvAAIAAgfIAKAAIAAAfIA9AAIgBAFQgCArgDASQgCAUgFAEQgFAGgIABIgXgBQgBgHgDgEIAXABQAFAAACgCQAHgHAEhDIgxAAQgDA6gyAeg");
	this.shape_8.setTransform(212.075,-0.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag9A3IAPAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAgBIAAgmIgUAGIgDgKIAXgGIAAgeIgVAAIAAgJIAVAAIAAgdIAKAAIAAAdIASAAIAAAJIgSAAIAAAbIARgEIAAgDIAUAAIADgmIgRAAIAAgKIBAAAIgBAwIAOAAIAAAJIgOAAIgDAuIARAAIAAAKIhVAAIAAgKIASAAIAEguIgSAAIAAADIgTAFIAAApQAAAJgFACQgGACgOAAQAAgFgDgFgAAKAxIAeAAIACguIgcAAgAAPgGIAcAAIABgmIgaAAg");
	this.shape_9.setTransform(197.025,-0.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},20).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-234.8,-46.1,469.70000000000005,92.30000000000001);


(lib.an_sc2car = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_car
	this.instance = new lib.sb_sc2car("synched",0);
	this.instance.setTransform(0.15,0.75,1,1,0,0,0,533.6,-130.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},7,cjs.Ease.cubicOut).to({scaleX:1.15,scaleY:1.15,y:6.4},68,cjs.Ease.cubicOut).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.3,-100.2,201.5,152.2);


(lib.an_sc2bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_circle_copy
	this.instance = new lib.sb_circle();
	this.instance.setTransform(-1237,93.7,2.2263,2.35,0,0,0,-0.1,-0.1);
	this.instance.alpha = 0.1406;
	this.instance.compositeOperation = "lighten";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,scaleX:2.6333,scaleY:1.5786,x:-788.65,y:373.65,alpha:1},83).wait(1));

	// sb_circle
	this.instance_1 = new lib.sb_circle();
	this.instance_1.setTransform(387.6,-297.45,0.7995,1.1946,0,0,0,0,-0.1);
	this.instance_1.alpha = 0.1406;
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0,scaleX:1.3829,scaleY:1.3829,x:964.35,y:-214.55,alpha:1},83).wait(1));

	// an_sc2_car
	this.instance_2 = new lib.an_sc2car("synched",0,false);
	this.instance_2.setTransform(495.1,49.55,1.0695,1.0695,0,0,0,-1,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84));

	// sb_sc2_bg
	this.instance_3 = new lib.sb_sc2bg("synched",0);
	this.instance_3.setTransform(-2.1,11.75,1.0529,1.0529,0,0,0,-0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1970.8,-691.2,3391.1,1585.3000000000002);


(lib.sb_sc1car = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_50 = new cjs.Graphics().p("EBKoAQ4IAbABIBLACIgSAUQgaAcghATQgKglgPghgAUrKMQjlgChngDQi5gFiTgLQjfgSktgwQitgclbg9Qj7grmmg8Qiggwijg2QgtgOgTgRQgRgOgOgaQgGgMgPgjQgUgwgtheQglhTgIhAQgJhJAbh8QAeiSACg1QABgygKhEQgFglgNhKQA9gJA1gNQDEguC6hzQBcgoCihBIALgEIB2gcQBHgRAlgGQA7gKBpgIQD5gTCUgFQDZgICzANIAsAEQCeAWCcAYQBPAMAxALQArAMBBAVIBvAkQBKAZAXAJQB6AxCDBgIAmAcQAWAQARAKQAnAWA8AVQA1ATAxANQApATA5AKIBuAOQBjAXBQAYQCLApBgAuIAZAMIApAdQAfAXAVANIASAOQAaAXAdAuIAvBLQALAPAnAtIAKAKIABAIQAMA3ABAcIgCAgIgCAhQAAARACARQgOA0AGAhQABAIAMApQAIAdgDATQgCARgLATIg1AfQgyAcgYAaQgdAfgRAtIgDABQgeAPguANIhPAWQgkALiRA9QhuAuhLAKIg1AGQgiADgUAEQg+AMgfAlQgOAQgFAUQhMAKhZADQg0AChYAAIhOAAgEhKEAJlQg/gegmg2Qgpg7AGg/QAFg2ApgvQAmgrA3gXIAPgGQgKBsAGBSQAIB4AqBcQgjgJgdgOg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(50).to({graphics:mask_graphics_50,x:-1.7883,y:1.1628}).wait(1));

	// sb_sc1_bg_copy
	this.instance = new lib.sb_sc1bg("synched",6);
	this.instance.setTransform(66.9,-153.2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233.1,-113.8,600,210.6);


(lib.an_sc1heart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc1_heart_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_17 = new cjs.Graphics().p("A8YBoIh3AJIgDgYIA8gDIAAgiIgyAAIAAhEIAyAAIAAgYIAXAAIAAAYIA0AAIAABEIg0AAIAAAhIAdgCIgNgUIAUgIQAXAgAIAYIgVAJgA8/AgIAeAAIAAgeIgeAAgA90AgIAeAAIAAgeIgeAAgAdBBlQAegFAMgMQAKgLADgVIgYAAIAAhKIB3AAIAABKIgdAAIAAAkQAAAHABAAQADACADgBIAKAAIAIgBQADAAAAgEIACgWQAFAFANAGQgBASgCAGQgDAHgHACQgFACgLAAIgRAAQgMAAgGgFQgGgEAAgTIAAgjIgVAAQgEAcgNAPQgOAQgiAJQgEgKgJgJgAd1AlIBLAAIAAgPIhLAAgAd1AHIBLAAIAAgMIhLAAgAPIBEIAWgJQASAcAKAWIgXAKQgIgTgTgggAMZBuQAQgVALgdIAXAHQgNAggOAUgAFfBeIAiABIAFgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIAAiDIhEAAIAAgXIBeAAIAAAVQAJAdALATQAfgXAYgbIAWAQQgiAfggAWQAeAqAtARQgIAHgJAOQg6gagfhAIAABMQAAAUgNAFQgKAFgjAAQgBgLgHgOgA1+AAQgXBShMAkQgGgKgMgKQBNgiAThVIhbAAIAAgZIBgAAQABgNACg6IAaAAQgBA0gDATIBoAAIAAAZIheAAQAdBYBGAcQgLALgHAMQhEgfgghXgA/SB0QgBgLgGgLIAaABQAHABACgDQAHgGADg3Ig9AAQAFggAFgtIAzAAIAAglIg6AAIAAgVIBQAAIAABQIg2AAIgEAiIA9AAIgBAJQgEBNgKALQgFAHgNABIgQABIgOgBgANfBFIAXgCQAGAeAAAQIgXAEQgBgZgFgXgAOUBEIAWgDQALAZAFAWIgYAEQgDgVgLgbgAtoByQgBgNgGgJIAmABQAHAAADgFQAGgGAEghQADgdAChLIg8AAQgMAagMARQgIgHgLgGIAAB1IhGAAIAAAUIgVAAIAAi8IAcAAQAHgTACgXIAaAFIgNAlIApAAIAAAxQAZggAOg7IAXAGQgFAUgGAPIBLAAIAAALQgDBZgDAiQgEAkgHAKQgIAKgPABIgRABIgWgBgAvdBHIAwAAIAAg5IgwAAgAvdgGIAwAAIAAgxIgwAAgAmfByQgXAAgIgIQgIgIAAgVIAAh6IAZAAIAAB6QAAAJADADQADADALAAIArAAQALAAADgKQAEgJABghQAKAIAMACQgCAmgIANQgIANgVAAgAUMBqIAAgYIAiAAIAAiQIAZAAIAACQIA2AAIAAjGIAZAAIAABTIBRAAIAAAXIhRAAIAABcIBdAAIAAAYgAEbBVQArgaATg0Ig4AAIAAgWIBDAAIAEAAIAQAGQgKAmgUAdQgTAcgYARQgNgOgHgEgAb+A+IAfgLIAAhTIgbAAIAAgXIAbAAIAAg6IAXAAIAAA6IAYAAIAAAXIgYAAIAABLIAagJIAEAWIhMAegAoGBFQAPgoAGg5IAYAFQgJBAgMAmgAlSgaIAXgJQAYAyAKAtIgYAKQgHgpgag3gAMYA0IAAgVIAlAAIAAgmIgdAAIAAgWIAdAAIAAgaIAWAAIAAAaIAWAAIAAgaIAVAAIAAAaIAZAAIAAgaIAUAAIAAAaIAZAAIAAgaIAWAAIAAAaIAbAAIAAAWIgbAAIAAAmIAhAAIAAAVgAOrAfIAZAAIAAgmIgZAAgAN+AfIAZAAIAAgmIgZAAgANTAfIAWAAIAAgmIgWAAgAt8gHIASgLQAdAjAKAWIgUAMQgKgXgbgjgA8dgvQhgAIgJADIgIgUQAGgBAIgKQATgWALgaIAZAFQgSAegSAVIBCgGIgRgUIARgKQAgAhAKAVIgSALgAdUggIAAgUIAiAAIgHgWIAUgEQAGAOACAKIgFACIAlAAIAJgaIAWAEIgKAWIAkAAIAAAUgAMSg4QAkgZASgmIAVAHQgHAOgHAKICkAAIAAAVIi0AAQgPASgPAMQgKgPgFgEgAm7heIAQgQQA0AjASAUIgRASQgYgagtgfgAFZhgIAMgVQAYAGAbAJQAcAJAPAJIgMAXQghgUg9gPgAdchPIAAgVIA1AAIgGgOIAWgFIAIATIA0AAIAAAVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_graphics_17,x:-0.025,y:0}).wait(22));

	// sb_light
	this.instance = new lib.sb_light("synched",0);
	this.instance.setTransform(-348.8,-13);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({x:503.85,startPosition:6},21,cjs.Ease.none).wait(1));

	// sb_sc1_heart
	this.instance_1 = new lib.sb_sc1heart("synched",0);
	this.instance_1.setTransform(-0.05,0,0.4875,0.4875);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,alpha:1},17,cjs.Ease.quartOut).to({startPosition:0},21).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.7,-12,405.29999999999995,24);


(lib.an_sc1bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_circle
	this.instance = new lib.sb_circle();
	this.instance.setTransform(437.05,-351.85);
	this.instance.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1685,scaleY:1.0273,x:151.65,y:-461.25},22).to({scaleX:1.2068,scaleY:1.0335,x:86.75,y:-486.05},5).to({scaleX:1.3829,scaleY:1.3829,x:-83.5,y:-530.1},23).wait(1));

	// an_sc1_car
	this.instance_1 = new lib.sb_sc1car("single",50);
	this.instance_1.setTransform(-462.15,15,0.8333,0.8332,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-438.6},50).wait(1));

	// sb_sc1_bg
	this.instance_2 = new lib.sb_sc1bg("synched",21);
	this.instance_2.setTransform(467.1,31.55,1.0938,1.0938);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:459.5,mode:"single",startPosition:43},50).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-656.2,-986,1451.5,1291);


(lib.sb_sc5btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// an_arr_copy
	this.instance = new lib.an_arr("synched",0,false);
	this.instance.setTransform(54.85,-2.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).wait(55).to({startPosition:36},0).to({_off:true},1).wait(9).to({_off:false},0).wait(1));

	// an_arr
	this.instance_1 = new lib.an_arr("synched",3,false);
	this.instance_1.setTransform(41.65,-2.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37).to({_off:false},0).wait(55).to({startPosition:36},0).to({_off:true},1).wait(9).to({_off:false},0).wait(1));

	// MergedLayer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA+B8QgBgKgEgGIAYABQAGAAACgCQAGgGAEggIimAAIAAgBIgNAAIAAhjIC1AAIAAAOIhMAAIAAAQIBBAAIAAALIhBAAIAAAPIBCAAIAAANIhCAAIAAAQIBeAAIgBAHQgEAxgJAIQgFAGgKAAIgKABIgSgBgAg8A2IBCAAIAAgQIhCAAgAg8AZIBCAAIAAgPIhCAAgAg8gBIBCAAIAAgQIhCAAgAh1BxQAPgNARgbIARAJQgYAhgIAJgAgyBRIARgDQAHATACATIgSADQgBgQgHgWgAgFBRIAOgFQANAWAEAMIgQAGQgGgRgJgSgAAlBPIAOgHQAOANAHANIgPAHQgGgLgOgPgAh2grQAjgNALghIgnAAIAAgQIArAAIADgTIATAAIgCATIA3AAIgBAIQgCAqgHAIQgEAEgKABQgIABgRgBQgBgKgEgFIAWABQAFAAACgDQAEgEACgaIgoAAQgMArgrARQgGgKgFgEgAAWgtIAAhBIBgAAIAABBgAApg9IA5AAIAAghIg5AAg");
	this.shape.setTransform(15.825,-2.43);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA0gzIhQAAIAAgTIBPAAIgBg0IAUAAIAAA0IA1AAIAAATIg0AAQADBEAIAsQAJAsALAAQAGAAABgsQAHAHAJAEQgDAegFAMQgGALgMAAQgoAAgHiwgAhxB5IAAhcIBKAAIAABPIg4AAIAAANgAhfBbIAmAAIAAgtIgmAAgAgjBVIAigIIAAhIIgdAAIAAgRIBLAAIAAARIgdAAIAABDIAmgKIACARIhVAZgAhwAJIAAgPIBJAAIAAAPgAhwgZIAAgQIBJAAIAAAQgAh8g8IAAgRIBZAAIAAARgABNhtIANgIQARARAIAQIgPAKQgIgRgPgSgAhih0IAQgIQAPAVAFAOIgQAJQgGgPgOgVg");
	this.shape_1.setTransform(-16.15,-2.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AApB7QgBgKgFgKQARACAWgBQAHAAAEgDQAGgHADgjQAEgiAChOIhOAAQgLAYgLAPIgRgLQAagiAQg/IATADQgGAYgJAXIBbAAIAAALQgDBcgDAjQgDAlgIAJQgHAKgPABIgOABIgagBgAh3BxQALgVAHgqIASAFQgIAngKAaQgJgEgJgDgAhEA1IAQgEQAIAtABAPIgRAEQgCgagGgigAgjAwIAPgFQAMAcAGAYIgQAGQgGgagLgbgAANgGIAOgLQAhAfAPAbIgPALQgNgZgighgAh1AUQAGgBAQgQQAJgIATgYQgnAFgGADQgCgLgEgIQAGgCALgNQAZgeARgmIATAIQgWApgbAfIAkgEIAVggIASALQgjAyghAgIA0gIIgJgYIAQgEQANAeAGAYIgSAGIgDgPQhPAMgGAEg");
	this.shape_2.setTransform(-49.525,-2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA/BTIAPgKQAdAQAUASIgQAMQgRgQgfgUgAgjBpQAkgNAUgUIASAKQgZAXgkAOgAh0BiQAYABAGgBQAFAAAAgEIAAhrIgtAAIAAgSIBGAAQgZgWgfgRIALgNIAbAQQAPgPAMgQIhJAAIAAgSIBWAAIAEgCIANAJQgTAegYAWQAMAJAKAJIgHAIIAUAAIADAAIAMADQgOApgJARIgPgEQAIgQAHgXIgdAAIAABrQAAAQgKAEQgIAEgeAAQgBgIgFgMgAgFBDIAAiNIAoAAIAFgZIg3AAIAAgSICIAAIAAASIg6AAIgIAZIA5AAIAACNgAANAzIBPAAIAAgbIhPAAgAANAJIBPAAIAAgaIhPAAgAANgfIBPAAIAAgbIhPAAg");
	this.shape_3.setTransform(-81.575,-1.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},16).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},55).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).wait(1));

	// Layer_5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3680F7").s().p("AxCEBIBVoBMAgwAAAIhVIBg");
	this.shape_4.setTransform(-17.275,-1.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(16).to({_off:true},1).wait(4).to({_off:false},0).wait(2).to({_off:true},1).wait(1).to({_off:false},0).wait(2).to({_off:true},1).wait(9).to({_off:false},0).wait(55).to({_off:true},1).wait(9).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.3,-27.2,218.1,51.4);


(lib.an_sc5btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc5_btn
	this.instance = new lib.sb_sc5btn("synched",0,false);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({startPosition:21},17).to({regX:0.1,regY:0.1,scaleX:0.7876,scaleY:0.7876,x:0.1,y:0.1,startPosition:25},3).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0,startPosition:21},3).to({regX:0.1,regY:0.1,scaleX:0.7876,scaleY:0.7876,x:0.1,y:0.1,startPosition:25},3).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0,startPosition:37},3).to({startPosition:80},43).to({_off:true},1).wait(13));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.3,-27.2,218.1,51.4);


(lib.sc4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// an_sc4_tt
	this.instance = new lib.an_sc4tt("synched",0,false);
	this.instance.setTransform(-379.75,29.55,0.7899,0.7899);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(58));

	// an_sc4_bg
	this.instance_1 = new lib.an_sc4bg("synched",0,false);
	this.instance_1.setTransform(6.85,-6.6,0.7654,0.7654,0,0,0,-54,79);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-763.6,-95,1556.2,192.4);


(lib.sc3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sc3_vtext
	this.instance = new lib.sc3vtext_1();
	this.instance.setTransform(639.65,-0.5,0.8427,0.8427,0,0,0,18.2,97.5);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(91).to({_off:true},1).wait(10));

	// an_sc3_tt
	this.instance_1 = new lib.an_sc3tt("synched",0,false);
	this.instance_1.setTransform(-398.4,2,1.2273,1.2273,0,0,0,-0.1,0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(89).to({startPosition:22},0).to({_off:true},1).wait(10));

	// an_sc3_bg
	this.instance_2 = new lib.an_sc3bg("synched",0,false);
	this.instance_2.setTransform(-2.8,16.25,0.5532,0.5532);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(91).to({startPosition:91},0).to({_off:true},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1521.2,-493.4,2469.1,1344.6);


(lib.sc2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sc2_vtext
	this.instance = new lib.sc2vtext();
	this.instance.setTransform(682.55,-9.85,0.7921,0.7921,0,0,0,18.2,96.9);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(67).to({_off:true},1).wait(16));

	// an_sc2_num
	this.instance_1 = new lib.an_sc2num("synched",0,false);
	this.instance_1.setTransform(-168.35,21.05,0.9959,0.9959,0,0,0,-0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(64).to({startPosition:29},0).to({_off:true},1).wait(16));

	// an_sc2_vc
	this.instance_2 = new lib.an_sc2vc("synched",0,false);
	this.instance_2.setTransform(-380.75,-36.6,1.1595,1.1595,0,0,0,-0.2,-0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(1).to({x:-424.45,startPosition:1},0).wait(63).to({startPosition:59},0).to({_off:true},1).wait(16));

	// an_sc2_bg
	this.instance_3 = new lib.an_sc2bg("synched",0,false);
	this.instance_3.setTransform(0.6,-0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(67).to({startPosition:67},0).to({_off:true},1).wait(16));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eh9iAVeMAAAgq7MD7FAAAMAAAAq7g");
	this.shape.setTransform(2.15,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(67).to({_off:true},1).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1970.2,-691.8,3391.1000000000004,1585.4);


(lib.sc1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACjDeQgXhDgSgvIjxAAQgZA/gQAzIhFAAQAtiHBBiQQA0hzAegxIBLAAQAaAqAvBmQBECSAzCZgAhgAyIDDAAQg2iHgshOQgsBVg1CAg");
	this.shape.setTransform(154.0712,14.6777,1.108,1.108);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADRDeQgdjcgiiIQhRDBgrB0IgsAAQhrkZgOgZQgjCHgeDaIhCAAQAYivAbh1QALgwAchnIBBAAQA9CLA6CWQBCihA5iAIBBAAQAcBpALAsQAaB2AVCwg");
	this.shape_1.setTransform(81.1944,14.6777,1.108,1.108);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfDeIAAm7IA/AAIAAG7g");
	this.shape_2.setTransform(23.8015,14.6777,1.108,1.108);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfDeIAAmAIioAAIAAg7IGPAAIAAA7IioAAIAAGAg");
	this.shape_3.setTransform(-24.6168,14.6777,1.108,1.108);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AieDeIAAm7IBAAAIAAGAID9AAIAAA7g");
	this.shape_4.setTransform(-73.977,14.6777,1.108,1.108);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACjDeQgXhDgSgvIjxAAQgZA/gQAzIhFAAQAtiHBBiQQA0hzAegxIBLAAQAaAqAvBmQBECSAzCZgAhgAyIDDAAQg2iGgshPQguBZgzB8g");
	this.shape_5.setTransform(-137.8792,14.6777,1.108,1.108);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},63).to({state:[]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFB4IAAjvIALAAIAADvg");
	this.shape_6.setTransform(174.4025,-38.8373,1.108,1.108);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHBjIAAhpIg1AAIAABQIgOAAIAAheIBDAAIAAgfIhZAAIAAgOIBeAAQgDgHgMgWIANgEQAMASAEAOIgDABIBYAAIAAAOIhaAAIAAAfIBFAAIAABLQAAANgIACQgIADgeAAQgBgFgEgJQAZABAHgBQAFAAAAgEIAAg9Ig3AAIAABpg");
	this.shape_7.setTransform(134.1554,-41.3579,1.108,1.108);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhfBcIAAgPIBRAAIAAinIAOAAIAABCIBSAAIAAAPIhSAAIAABWIBgAAIAAAPg");
	this.shape_8.setTransform(85.0446,-41.6626,1.108,1.108);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCBZQAYgXAKghQAGgXAAgdIAAgKIAOAAIgBAdQANBDAkATQgGAHgEAFQgcgSgPgxQgKAogeAbQgEgFgFgEgAg1BiIAAhIIgtAAIAAgMIBmAAIAAAMIgrAAIAABIgAhjBOQALgRAJgbIAMADQgJAagMAUIgLgFgAgZAmIAKgEQALASAGAQIgLAFQgFgNgLgWgAgDgJQASgeAHg7IAOACQgEAagDALIA3AAIACgBIAKAEQgIAigIAVIgMgEQAHgQAFgYIg2AAQgIAcgLARIgKgJgAhYgCIAAgNIBUAAIAAANgAhbghIAAgMIAmAAIAAgTIgrAAIAAgNIArAAIAAgVIAOAAIAAAVIApAAIAAANIgpAAIAAATIAmAAIAAAMg");
	this.shape_9.setTransform(36.0169,-41.2194,1.108,1.108);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUBWQAhgPAUgdQgQgcgIgkQgIARgIAKIgLgJQAYggANg+IANACQgEAWgFAQIBHAAIAAANIgPAAQgJA3gUAhQAUAeAbAMQgHAGgDAGQgbgOgTgbQgVAaggARQgDgIgFgFgAARgqQAIApAQAeQAQgdAHgtIguAAgAhgBIQAGgCAAgKIAAhRIA7AAIAAgwIg9AAIAAgOIBLAAIAABMIg6AAIAABFIA6gVIACAOQhFAbgGAFQgCgJgEgGg");
	this.shape_10.setTransform(-12.7892,-41.1917,1.108,1.108);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA7BiIAAhsIgfAAIAAAIQAABEgXAgQgFgGgFgDQAUgdgBg+IAAhKQArgHAagJIALAKQgZAKgpAGIAAArIBFAAIAAANIgYAAIAABsgAg0BiIAAhLIgsAAIAAgMIAsAAIAAgXIgsAAIAAgMIA7AAQAHgRAFgSIANACIgMAhIAcAAIAAAMIgqAAIAAAXIAnAAIAAAMIgnAAIAABLgAhgBLQANgRAHgXIAMAEQgJAZgNASgAgcAoIALgGQANAWAEANIgKAGQgGgTgMgQgAhPg5IAMgCQAHAQACAOIgMAEQgBgOgIgSgAheg9IAAgNIAsAAIgKgUIAOgDQAIAMAFALIAhAAIAAANg");
	this.shape_11.setTransform(-62.1217,-41.3856,1.108,1.108);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhbBdIAAgOIBTAAIAAgmIg9AAIAAgMIA9AAIAAgiIgzAAIAAgNIB3AAIAAANIg1AAIAAAiIA+AAIAAAMIg+AAIAAAmIBUAAIAAAOgAhigPQAUgJAXgSQAXgRAQgTIgoAAIAAgOIA/AAQAPAXAaAUQAZAVAaALQgHAGgDAGQgYgLgYgVQgZgTgQgWQgRAVgYAUQgaAWgWAMQgDgGgGgGg");
	this.shape_12.setTransform(-111.2048,-41.2748,1.108,1.108);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFB4IAAjvIALAAIAADvg");
	this.shape_13.setTransform(-151.5626,-38.8373,1.108,1.108);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},63).to({state:[]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	// an_sc1_heart
	this.instance = new lib.an_sc1heart("synched",0,false);
	this.instance.setTransform(471.4,14.7,1.1081,1.1081,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(63).to({startPosition:38},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1));

	// an_sc1_bg
	this.instance_1 = new lib.an_sc1bg("synched",0,false);
	this.instance_1.setTransform(0,16.5,0.9666,0.9666);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(63).to({startPosition:50},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-634.3,-936.6,1403,1247.9);


(lib.sc5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// an_sc5_btn
	this.instance = new lib.an_sc5btn("synched",0,false);
	this.instance.setTransform(-34.25,40.1,0.9506,0.9506);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).wait(77));

	// an_sc5_50
	this.instance_1 = new lib.an_sc550("synched",0,false);
	this.instance_1.setTransform(591.95,28.4,1.046,1.046,0,0,0,0.2,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).wait(80));

	// an_sc5_1031
	this.instance_2 = new lib.an_sc51031("synched",0,false);
	this.instance_2.setTransform(-51.35,-34.5,1.1499,1.1499,0,0,0,0.1,-0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(84));

	// an_sc5_exp
	this.instance_3 = new lib.an_sc5exp("synched",0,false);
	this.instance_3.setTransform(459.75,-15.6,0.9225,0.9225,0,0,0,0.2,-0.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).wait(84));

	// an_sc5_bg
	this.instance_4 = new lib.an_sc5bg("synched",0,false);
	this.instance_4.setTransform(-18.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(88));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1242.8,-944.2,2546.6,1095.3);


(lib.wrap = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(-706,-111,0.7617,0.7617);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(396).to({_off:true},1).wait(9));

	// sc5
	this.instance_1 = new lib.sc5("single",0);
	this.instance_1.setTransform(85.85,1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(305).to({_off:false},0).to({alpha:1,mode:"synched",loop:false},8).to({startPosition:83},83).to({_off:true},1).wait(9));

	// sc4
	this.instance_2 = new lib.sc4("single",0);
	this.instance_2.setTransform(67.4,-0.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(230).to({_off:false},0).to({alpha:1,mode:"synched",loop:false},8).to({mode:"single",startPosition:42},75).to({alpha:0},8).to({_off:true},1).wait(84));

	// sc3
	this.instance_3 = new lib.sc3("single",0);
	this.instance_3.setTransform(67.4,-0.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(139).to({_off:false},0).to({alpha:1,mode:"synched",loop:false},7).to({mode:"single",startPosition:81},92).to({alpha:0},8).to({_off:true},1).wait(159));

	// sc2
	this.instance_4 = new lib.sc2("single",0);
	this.instance_4.setTransform(67.4,-0.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(64).to({_off:false},0).to({alpha:1,mode:"synched",loop:false},7).to({startPosition:59},68).to({startPosition:59},7).to({_off:true},1).wait(259));

	// sc1
	this.instance_5 = new lib.sc1("synched",0,false);
	this.instance_5.setTransform(67.4,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({startPosition:65},64).to({alpha:0},7).to({_off:true},1).wait(334));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eh6pATlMAAAgnJMD1TAAAMAAAAnJg");
	this.shape.setTransform(78.975,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(396).to({_off:true},1).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1902.8,-943.2,3292.3999999999996,1831.6);


// stage content:
(lib._970x120 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// wrap
	this.instance = new lib.wrap("synched",0,false);
	this.instance.setTransform(441.85,60.35,0.6408,0.6408,0,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(397).to({startPosition:0},0).wait(389).to({mode:"single",startPosition:389},0).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EhNVgK7MCarAAAIAAV3MiarAAAg");
	this.shape.setTransform(485,60);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhNVAK8IAA13MCarAAAIAAV3g");
	this.shape_1.setTransform(485,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(787));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-292.4,-484.2,1606.4,1113.4);
// library properties:
lib.properties = {
	id: 'B292DCCD4A3E42C59A84614B5737EDAF',
	width: 970,
	height: 120,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/logo.png", id:"logo"},
		{src:"images/sc1bg.jpg", id:"sc1bg"},
		{src:"images/sc2bg.jpg", id:"sc2bg"},
		{src:"images/sc3bg.jpg", id:"sc3bg"},
		{src:"images/sc3bgfront.jpg", id:"sc3bgfront"},
		{src:"images/sc3bgline.jpg", id:"sc3bgline"},
		{src:"images/sc4bg.jpg", id:"sc4bg"},
		{src:"images/sc5bg.jpg", id:"sc5bg"}
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
an.compositions['B292DCCD4A3E42C59A84614B5737EDAF'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;