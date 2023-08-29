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



(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,84);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,530);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,219);


(lib.man = function() {
	this.initialize(img.man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,283);


(lib.sc1bg = function() {
	this.initialize(img.sc1bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.sc2bg = function() {
	this.initialize(img.sc2bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.sc3bg = function() {
	this.initialize(img.sc3bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.sc4bg = function() {
	this.initialize(img.sc4bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.sc5bg = function() {
	this.initialize(img.sc5bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);// helper functions:

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


(lib.sh_sc5exp = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(310.7518,29.049,1.1684,1.1684);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aj0DVQgKgKgHgDQAkgoAVhVIAThLIgWAAIAThLIASAAIAkiMICXABIgjCMIASAAIgSBLIgVAAIguCwQgEARgFAJQgHAJgKAFQgKAFgOACIghABQAEgUgFgXIAfABQAGAAACgHIALgsIg1AeIgFgcQgWA9geAhQgFgGgKgJgAifBMIgNAtIA/gbIAFgVIgYAVQgNgRgOgQgAhlA9IALgoIg3AAIgHAcIAUgRQAVASAKALgAijgQIBrABIAFgUIhrgBgAhRhKIARAAIAMguIgRAAgAh/hLIASAAIAUhOIAuAAIAFgUIhAAAgAhODcIALgqIA3AAIgDgjIAegJIgwgBIAZhfIDIABIgZBgIg1gBIAhALIgdAjIA8AAIgKAqgAAiCzIAmAAQARgbAKgSIhFAAIAEAtgAAXBjIBmABIAGgaIhlgBgAgWAVIALgoIDtACIgLAogAAAgkIAnidIA4AAIAJgiIAqAAIgIAjIAUAAIAJgjIArAAIgJAjIA9ABIgpCdgACjhJIAZAAIAGgXIgZAAgABrhJIAXAAIAGgXIgXAAgAAyhKIAYAAIAGgXIgYAAgACyiDIAZAAIAGgWIgZgBgAB6iEIAXABIAGgXIgXAAgABBiEIAYAAIAGgWIgYgBg");
	this.shape_1.setTransform(254.8434,28.8737,1.1684,1.1684);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aj4DQQgIgNgHgGQBMgnAxhlIgngBQgWAAgJAHQABgSgGgdQANgDAPgLQASgOArgwIg8AAIAMgvIBfABIAGgCIAeAQIhjBnIAhABIAJgCIAYALQgXA7gfAvQAMAgAlALQAcAJA+ABQBfABBWgIQgIAJgJARQgKAQgFAMQhAAEhigBQhFgBghgKQgogNgRgjQgiAogqAaQgDgJgIgMgAhMCKIA9jrIBFAAIAMgYIhvAAIAMgwIA+ABQgFgVgIgSIAxgSQAOAhADAQIgSAIIBGAAQAegjAOgXIAyARIgnAqIBLABIgNAvIh+gBIgSAYIBnABIg9DrgAgOBiIB3ABIAGgbIh2gBgAACAiIB3ABIAHgbIh4gBgAASgdIB3ABIAHgbIh3gBgAiKjJIAwgbQAcAqAPAgIgyAgQgNgjgcgsg");
	this.shape_2.setTransform(198.4967,28.1727,1.1684,1.1684);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaC6IAagTIhWgBIAUASQgfAOgwANQgsAMgrAGQgGgPgQgWQA8gHA9gTIgrgBIAbhnQgfAOgeAJQgJgcgNgOQA/gPA3gfIhZgBIAKgnIBxABIADgOIg4gBIAHgdIA5ABIAEgQIg+AAIAEgQIgwAAIAVhSICxABIgEgTIA8gOQAGAUABAOIClABIgVBSIgvAAIgEAQIg/gBIgEAPIA8ABIgHAdIg8AAIgEANIBwABIgJAoIhPgBQAiAZAyAOQgWAPgYAdQgXgJgXgPIgcBuIgngBQAvAQAvASIg2AfQg0gYhEgWgAh2CKIClABIAEgPIilgBgAhrBgIClABIAEgOIimgCgAhhA3IClABIAFgPIimgBgAhFAMICQABIgLgOIhzgBgAgegqIBUABIADgOIhSgBgAgShVIBSABIAEgPIhTgBgACFiTIgFARIA5ABIAGgXIkugDIgFAXIA7ABIAEgRIAzAAIgFARIBTABIAFgRg");
	this.shape_3.setTransform(143.7567,27.4716,1.1684,1.1684);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXC4IAYgSIhTAAIATARQggAPgwANQgtAMgrAGQgKgXgNgQQBBgJA1gQIgzAAIAqijIEyADIgqCiIg1AAQAwAPArARIg4AhQgwgYhMgYgAh9CHIDDABIAEgPIjEgBgAhyBbIDDACIAEgPIjDgCgAhnAwIDDACIAEgPIjDgCgAixgqIBOgDIAEgQIgzAAIAHgdIAzAAIAEgOIg6gBIAFgTIgbAAIAThMICpACIgCgVIA7gMQACAJADAYICpACIgTBLIglAAIgFASIgzAAIgEAOIBQAAIgHAdIhQAAIgHAYIAaAAIAFgUIApABIgNAxIivgCIANgxIAmAAIgFAVIAZAAIAGgZIhMAAIAHgdIAQAAQgJgJgJgFQAfgUAVgdIitgBIgFAQICEACIgJAgIgyAAIgEAPIAvAAIgGAdIgwAAIgEANIA4gCIgJAkIixAJgAA1haIApAAIADgNIgdgBQgHAIgIAGgABoiTIgLAOIBeABIAFgUIh0gBg");
	this.shape_4.setTransform(87.41,27.1211,1.1684,1.1684);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Aj5DLQgKgNgHgEQAhgiAXg0QAPgjAOgzIAVhSICdACIgBgMIgfAAIAOg7IgvAAQAXATAHAQIghAbQgJgUgUgTIAfgXIgeAAIgPA7IgwgBIAXhbICuACIgUBOIAigLIAAABIAShDICyABIgYBaIgxgBIAPg6IgwgBQAYAVAHAPIghAbQgJgUgXgUIAfgXIgdAAIgQA8IgkgBIABALICrABIgJAnIh6gBIgEASIBsABIgYBcIhqgBIgFAVIBjAAIgKAnIhjgBIgFASQgCAKACADQADADAMAAIA0AAQAJABAFgHQAFgFAHgVQANAMAZAFQgNAhgOAMQgOAMgdAAIg/gBQgmAAgKgMQgJgMAJghIAThNIhkgCIgGAWIBXABIgKAlIhWAAIgHAZIBagFQgGAPgFAZQhSAHgeADQgZADgKAEQABgKAAgNQgCgNgCgGQASgHAFgRIAShHIgRAAQghBbgzAzQgFgIgKgMgABNAvIA5ABIAFgWIg4AAgAgfAuIA7ABIAFgWIg6AAgAiLAtIA7AAIAFgVIg5AAIgHAVgAgQgKIA6ABIAFgSIg6gBgAh7gLIA6ABIAFgSIg6gBgAA/i2IAKgmIDCABIgKAmgAiSi4IALgmIC+ACIgKAmg");
	this.shape_5.setTransform(31.1218,27.5593,1.1684,1.1684);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,341.4,56.2);


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

	// sc5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE600").s().p("Ak2DYQAWACAfAAQAMAAACgMIAjiAIhCAQIAAhEIBVgTIAdhsIhGAAIAShDIBGAAIAehxIBDAAIgeBxIA4AAIgSBDIg4AAIgZBbIA7gOIgJBAIhEASIgoCUQgHAbgJANQgJAPgQAHQgbAOhAAAQAEgegGgkgAh+EYIBzmrIB9AAIAjiGIBCAAIgkCGICEAAIhyGnIhEAAIAKgnIi7AAIgMArgABeCoIBAAAIAZhdIhAAAgAgeCoIA7AAIAZhdIg7AAgACJAIIBAAAIAXhXIg/AAgAAMAIIA8AAIAXhXIg7AAg");
	this.shape.setTransform(257.975,-82.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGBkIAoABQAHgBACgGIAIgdIiPgBIgSBGIgkAAIAThGIgjAAIAJgiIAjAAIAehuIBYABIAFgVIhuAAIAJghIEDABIgJAhIhxAAIgFAUIBaAAIgeBuIAiAAIgJAiIgiAAIgIAdQgEAPgGAHQgFAIgLAEQgOAGgrAAQACgRgEgRgAAFAfIA3AAIAGgZIg2AAgAhSAfIA0AAIAHgZIg1AAgAAVgYIA2AAIAGgXIg2AAgAhEgYIA2AAIAGgXIg1gBg");
	this.shape_1.setTransform(208.05,-71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},9).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.shape}]},49).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(191.8,-110.8,97.30000000000001,56.4);


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

	// sc5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag+B1IAgh7IAqABIALgWIg4AAIAGgVICSAAIgHAVIg/AAIgNAWIA7AAIghB5IgYAAIADgMIhOAAIgEANgAggBUIBPAAIAHgaIhOgBgAgUAmIBPAAIAHgYIhPAAgAh0B1IAchnIgdAXQgEgPgEgGQAtgeAjgwIATAHQgNATgTAVIgkCEgAhfgwIALgsIBdAAIgEgRIAagHIAGAYIBaAAIgLAnIgYAAIAGgTIikAAIgGAYg");
	this.shape.setTransform(143.3073,-78.3802,1.3224,1.3224);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah6B0IAkiEQgPAPgMAJQgCgQgEgIQAwgmAmg7IAUAHQgPAYgYAdIguCpgAhSBsIAHgXIBGABIAOg6Ig2AAIAGgWIA2AAIAOgxIg/AAIAGgXICXAAIgGAXIhAAAIgOAxIA5AAIgGAXIg5AAIgQA5IBEAAIgGAXgAAhhrIAYgIQAJAaABAOIgZAIQgBgTgIgVg");
	this.shape_1.setTransform(109.5526,-78.4132,1.3224,1.3224);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiOBfQAYgUARg8IATAAIgJAdQADANAHAJIARg/IgxAAIAGgRIBvABIgEARIgsAAIgHAXIAoAAIgFASIgnAAIgJAhQASAIAuAAIBgAAQgKAKgEAJIhXAAQgqAAgUgHQgagIgIgWQgNAcgSAPQgBgIgJgIgAgdBEQAdgMASgRIARAGQgXAXgeAOQgHgLgEgDgAAyAvIATgJQASAPAMARIgUALQgJgRgUgRgAgBAkIAdhvIAgAAIAJgRIgtAAIAEgRIBzAAIgFASIgvgBIgLARIAtAAIgfBvgAAYATIA1AAIAEgQIg1AAgAAggMIA1ABIAFgQIg2AAgAAogrIA2AAIAEgPIg1gBgAhageIAWhQIBVAAIgVBQgAhAgvIAqABIAFgRIgsAAgAg4hOIArAAIAFgQIgsAAg");
	this.shape_2.setTransform(73.9465,-77.6528,1.3224,1.3224);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiABvIAGgXIBiABIAQg4IhMAAIAHgXIBLAAIANgxIhXAAIAHgXIBpAAQgMgSgUgRIAXgOQAZAVAMATIgPAJIBQAAIgGAXIhXAAIgOAxIBMAAIgGAXIhLAAIgPA4IBjAAIgHAXg");
	this.shape_3.setTransform(38.5718,-78.9753,1.3224,1.3224);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoA8IASgNQALAFAVAOQAdgPAYgQIANAOQgWAOgdANQAXAQAKAJIgVAQQgcgcgxgdgAh4BjQANgHADgNIAgh1QgOAGgRAEQgDgLgGgIQAlgKAigRQAkgTAVgXIATALIgGAGQAOAQAZAPQAaAOAbAHQgLAHgKANQghgLgbgVIgDAMIhEAAIADgNQgSALgaAKICPABIgVBPIh4gBIgOAxIA/gJQgEAMgCAIQhOAMgJAEQgBgKgFgHgAhCAXIBhAAIAEgOIhhgBgAg6gGIBhAAIAEgPIhhAAgAgVhAIA2AAQgKgIgMgNQgNALgTAKg");
	this.shape_4.setTransform(7.3627,-78.7108,1.3224,1.3224);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah1AMIAGgYIDlAAIgHAZg");
	this.shape_5.setTransform(-28.1773,-78.8761,1.3224,1.3224);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag6BzIAyi6IApAAQAOgaAHgRIAaADIgXAoIBGAAIgyC4IgYAAIADgKIhYAAIgDAMgAgaBQIBYAAIAPg3IhYAAgAgFADIBYAAIAOgzIhZAAgAh+BgQAeghAhgvIAPAPQgeAqgfAmgAhlgbIARgRQAbANALAMIgSATQgKgNgbgOgAhFhgIASgRQAbANAMANIgTATQgMgPgagNg");
	this.shape_6.setTransform(-63.2875,-78.5124,1.3224,1.3224);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah1ANIAHgZIDkAAIgHAZg");
	this.shape_7.setTransform(-96.6124,-79.0083,1.3224,1.3224);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},59).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.2,-94.1,272.3,39.39999999999999);


(lib.sb_man = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.man();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:true},1).wait(12).to({_off:false},0).wait(68));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,283);


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


(lib.an_sc5line = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1350AD").s().p("A70DYIAAmvMA3pAAAIAAGvg");
	this.shape.setTransform(1987.9931,21.575,1,1.0627,0,-19.785,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1350AD").s().p("A6nDYIibmvMA3qAAAICbGvg");
	this.shape_1.setTransform(1859.3,21.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1350AD").s().p("A6nDYIibmvMA3pAAAICcGvg");
	this.shape_2.setTransform(1730.55,21.575);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1350AD").s().p("A6mDYIicmvMA3pAAAICcGvg");
	this.shape_3.setTransform(1601.85,21.575);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1,p:{x:1859.3}}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_1,p:{x:1344.4}}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_1,p:{x:572.05}}]},1).to({state:[{t:this.shape_1,p:{x:443.35}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(13).to({_off:false,x:185.8931},0).wait(74));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:1215.65},0).wait(1).to({x:1086.95},0).wait(1).to({x:958.25},0).to({_off:true},1).wait(79));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(3).to({_off:false},0).wait(1).to({x:1473.1},0).to({_off:true},1).wait(4).to({_off:false,x:829.5},0).wait(1).to({x:700.8},0).to({_off:true},1).wait(2).to({_off:false,x:314.6},0).to({_off:true},1).wait(74));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2173.9,43.2);


(lib.Path = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#C30D23").s().p("ApoClIhYlJIUpAAIBYFJg");
	this.shape.setTransform(79.675,25.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(9.2,9.2,141,33), null);


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

	// sc4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2BkQAfABAHgBQAHAAAAgEIAAgdIhnAAIAAgQIBnAAIAAgPQAegHAUgIIiBAAIAAgQICgABIAEgBIAMAKQghATguAKIAAAHIBoAAIAAAQIhoAAIAAAdQAAAOgLADQgIADgmAAQgBgGgFgKgAhNgJIAAgyICdAAIAAAzgAg7gWIB3AAIAAgXIh3AAgAhthLIAAgQIBmAAIgJgUIASgEIALAYIBhAAIAAAQg");
	this.shape.setTransform(119.2282,-22.9848,1.4354,1.4354);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYBsIAAjVIBUAAIAACOQAAAPgKAEQgHAEgeAAQgBgKgFgIIAdAAQAFAAAAgFIAAh9IguAAIAADEgAhqBRQALgEgBgMIAAisIBhAAIAAB1IhOAAIAAA9IAxgQIgPgZIAQgHQAXAjAMAdIgRAJQgEgMgIgNQhHAZgGAEQgCgJgGgKgAhNgGIA8AAIAAgjIg8AAgAhNg5IA8AAIAAghIg8AAg");
	this.shape_1.setTransform(49.3582,-22.0876,1.4354,1.4354);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhvBuIAAgTIBlABIAAg+IhOAAIAAgSIBOAAIAAg2IhaAAIAAgSIBvAAQgPgTgbgUIAPgKQAeAVAQATIgMAJIBSAAIAAASIhbAAIAAA2IBQAAIAAASIhQAAIAAA+IBoAAIAAASg");
	this.shape_2.setTransform(-19.6865,-23.5948,1.4354,1.4354);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AABggQgbBhhKAqQgKgLgHgEQBQgpAYhrIALACQgCgQgBgRIg/AAIAAgTIBQABQAACHBqA9QgHAFgJALQhOgvgXhcg");
	this.shape_3.setTransform(-89.1977,-22.2312,1.4354,1.4354);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},19).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},39).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.1,-39.6,241.5,33.300000000000004);


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

	// sc4
	this.instance = new lib.ball();
	this.instance.setTransform(-18,18,0.355,0.355);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EggwAAIIAAgPMBBhAAAIAAAPg");
	this.shape.setTransform(0.8014,-27.225,0.4822,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EggwAAIIAAgPMBBhAAAIAAAPg");
	this.shape_1.setTransform(0.8014,92.575,0.4822,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiECLIAAgaIB0AAIAAhFIhmAAIAAgaIBmAAIAAgkIhAgBIAAgQQgcAOgRAGQgHgOgNgNQAugNAlgZQAngaAWghIAaAMIgIAMQAXAXAjAUQAkAVAjAKQgNAMgHANQgVgHgZgOIgBATIhBAAIAAAkIBoAAIAAAaIhoAAIAABFIB3AAIAAAbgAg9gtIB/AAQgngXgbgbQgZAcgkAWgAAlBnQAVgdAKgbIAbALQgSAegSAYgAhfA4IAYgJQAVAeAIAYIgZALQgHgYgVggg");
	this.shape_2.setTransform(74.775,68.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgCNIAAhoIhVAAIAAgdIBVAAIAAg8IgrAAQgJAZgMATQgLgIgOgHQAZgjAMhEIAbAGIgJAoIAiAAIAAg6IAdAAIAAA6IBEAAIAAAcIhEAAIAAA8IBSABIAAAcIhSAAIgBBogAhmCNIAAikQgMASgMALQgFgKgLgSQAtguAahJIAbAJQgMAggTAiIAADPg");
	this.shape_3.setTransform(34.825,68.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiICIIAAjTIAlAAIAAgkIgqAAIAAgYICSAAIgBAZIgoAAIAAAkIAkAAIAADNIgXAAIAAgRIhaAAIAAAWgAhxBcIBaAAIAAhMIgQAAQgLAAgEgFQgEgEAAgNIAAgsIgSAAIAAAXQAAAkgYAUQgIgIgFgDgAhxARQAUgQAAgdIAAgWIgUAAgAgpgGQAAAFAEAAIAKAAIAEgBIAAgwIgRAAgAhNhLIASABIAAgkIgSAAgAA3CFQgWAAgJgIQgIgIAAgYIAAh/IBWAAIAAhHIhXAAIAAgcIBzAAIAAB+IhVAAIgBBjQAAAJADADQADACAJAAIAoAAQAKAAACgJQADgJACggQAKAIAQAEQgDAngIANQgIANgVAAgAhmBCIAAgXIBEAAIAAAXg");
	this.shape_4.setTransform(-4.425,69.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABCB4IgGACQgBgFgEgNIhFAFIg8AEIgCgaIA/gCIAAgdIhPAAIgBBWIgbAAIAAhWIgMAAIAAgYIAMAAIAAgKIAcAAIAAAKIBPAAIAAgQIhXAAIAAheIDLAAIAABeIhaAAIAAAQIBvAAIAABTQgBALgCAEQgCAGgGACQgIAFgggBQgBgIgGgOgABTByIgOAFQASABAEgBQAFAAAAgFIAAg6IhTAAIAAAcIAggCIgLgRIAVgGQAXAhAFAWgAANgDIA9AAIAAgTIg9AAgAhJgDIA8AAIAAgTIg8AAgAANgoIA9AAIAAgSIg9AAgAhJgoIA8AAIAAgSIg8gBgAAnhTIAAgRIgiAAIAAgYIAiABIAAgSIAcAAIAAASIBFAAIAAAXIhFAAIAAARgAhEhUIAAgQIhDAAIAAgYIBDAAIAAgRIAcAAIAAARIAjAAIAAAYIgjAAIAAARg");
	this.shape_5.setTransform(-44.325,68.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASBvIAAg7IhiAAIAAgYIBaiKIAqAAIAACGIAcAAIAAAcIgcAAIAAA7gAAAgqIgsBCIA+AAIAChkIgCAAQgEAMgOAWg");
	this.shape_6.setTransform(-77.5,69);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AABB8QAbgsAAhhIAAhwIBuAAIAADrQAAAWgOAGQgKAFglAAQgCgOgGgNIAiAAQAHAAAAgGIAAhFIg6AAQgGBEgWAkQgGgHgRgKgAA2ALIA4AAIAAgsIg3gBgAA4g7IA2AAIAAgsIg2AAgAiJB7QAbgWAPgfIAbAIQgSAkgcAaQgIgIgPgJgAgzBSIAWgNQAZAdAIARIgXAOQgJgUgXgbgAiIBBIAAgZIAcAAIABh4IgZAAIAAgZIAZAAIAAgjIAaAAIAAAjIAxAAIAAgjIAaAAIAAAjIAVAAIAAAZIgVAAIAAB4IAUAAIAAAagAhRAoIAwAAIAAgaIgwAAgAhRgIIAwAAIAAgaIgwAAgAhRg4IAxAAIAAgYIgxAAg");
	this.shape_7.setTransform(59.7,-2.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiDBzQAxgRAWggQASgaAGgqIg7AAIAAgVQgOAPgLAIQgMgNgMgIQA3gmAYhLIAeAHQgUA5giAoICyAAQgigigTgxIgzAAIAAgbIBIAAQALAlAXAdQAZAgAdAQQgMALgIAPQgSgMgKgKIgBAGQgDBHgEAeQgEAfgIAIQgJALgQACQgNACgkgCQAAgOgIgPQASACAZAAQAJAAAEgEQALgLADhhIhGAAQgHAzgUAgQgaAog3ATQgGgOgMgLg");
	this.shape_8.setTransform(20.6,-2.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABCB4IgGACQgCgJgDgIIiBAHIgCgYIA/gDIAAgdIhPAAIAABWIgcAAIAAhWIgMAAIAAgYIAMAAIAAgKIAcAAIAAAKIBPAAIAAgQIhYAAIABhfIDLABIAABeIhaAAIAAAQIBvAAIgBBTQABAKgCAFQgCAFgHADQgIAEggAAQgDgMgEgKgABTBzIgOAEIAWAAQAFAAAAgEIAAg7IhTAAIAAAcIAfgCIgKgRIAVgGQAXAfAFAZgAANgDIA9AAIAAgSIg9AAgAhJgDIA8AAIAAgSIg8AAgAANgoIA9AAIAAgSIg8gBgAhJgoIA8AAIAAgTIg8AAgAAohTIAAgQIgiAAIAAgZIAiAAIAAgRIAcAAIAAARIBEABIAAAYIhEAAIgBAQgAhDhTIAAgRIhEAAIAAgYIBEAAIAAgRIAcAAIAAARIAjAAIAAAZIgjgBIAAARg");
	this.shape_9.setTransform(-19.15,-3.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABKCGIAAgTIiRAAIAAATIgeAAIABjGIBLAAQAEgTADgWIhzAAIAAgcIEMAAIAAAcIh5AAIgLApIBmAAIAADGgAhHBYICRAAIAAgyIiRAAgAhHAMICRAAIAAgxIiRAAg");
	this.shape_10.setTransform(-58.8,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},15).to({state:[]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},43).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.3,-28,202.2,121.4);


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

	// sc4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("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");
	this.shape.setTransform(22.8,27.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(14).to({_off:true},1).wait(44).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.2,-32.7,338.1,119.7);


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
	this.instance.setTransform(94,-993,1.6619,1.6619);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(94,-993,531.8,1994.3);


(lib.sc3conf = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AjyG/IBBt9IGkAAIgNCzIkEAAIgMClIDdAAIgNCzIjdAAIgOC+IEOAAIgNC0g");
	this.shape.setTransform(531.975,46.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjKFcQhTh+AQjZQAPjXBpiCQBhh7CEAAQA9AAA1AjQAtAeAiA0IhdCJQgagigXgRQgcgTgiAAQhCAAgwBJQg0BOgJB/QgJCDAkBLQAkBKBGAAQBHAAA+hSIBKCHQheCEiEAAQiEAAhOh0g");
	this.shape_1.setTransform(477.6964,46.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABFG/IiEmvIgzjCIgFAAIACCiQAABkgFBDIgVEoIiYAAIBBt9ICiAAICFGsIAzDFIAEAAIgCigQAAhlAFhEIAVkoICYAAIhBN9g");
	this.shape_2.setTransform(414.175,46.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjyG/IBBt9IGkAAIgNCzIkFAAIgMClIDdAAIgNCzIjdAAIgNC+IEOAAIgNC0g");
	this.shape_3.setTransform(354.925,46.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkYG/IBAt9IC/AAQCeAABOBoQBUBygRDhQgQDghjB1QhdBtiWAAgAhsESIAVAAQBXAAAwg7QA4hEALiWQALiWguhCQgog4hXAAIgVAAg");
	this.shape_4.setTransform(295.9605,46.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhvG/IBAt9ICfAAIhAN9g");
	this.shape_5.setTransform(250.1,46.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjzG/IBAt9IGnAAIgMCzIkHAAIgPDDIDhAAIgMCyIjhAAIgZFVg");
	this.shape_6.setTransform(211.65,46.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABFG/IiEmvIgzjCIgEAAIABCiQAABjgFBEIgVEoIiYAAIBBt9ICiAAICFGsIAzDFIAFAAIgDigQAAhkAFhFIAVkoICYAAIhBN9g");
	this.shape_7.setTransform(150.925,46.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Aj0FUQhLiAAQjXQAQjZBdh7QBah4CJAAQCKAABKB4QBLB7gQDZQgPDXheCAQhbB8iJAAQiJAAhKh8gAhXjPQgrBKgKCCQgJCBAgBMQAgBNBCAAQBAAAAshNQArhNAKiAQAJiCghhKQgghIhCAAQhBAAgqBIg");
	this.shape_8.setTransform(84.1421,46.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjKFcQhTh+AQjZQAPjWBpiDQBih7CDAAQA9AAA1AjQAtAeAiA0IhdCJQgZgigYgRQgcgTghAAQhDAAgwBJQgzBNgKCAQgJCDAlBLQAjBKBGAAQBHAAA+hSIBKCHQheCEiEAAQiEAAhOh0g");
	this.shape_9.setTransform(27.2964,46.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sc3conf, new cjs.Rectangle(0,0,556.3,92.8), null);


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
	this.shape.setTransform(85.9512,14.5865,1.1641,1.1641);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxBjQAZABAKgBQAFAAAAgEIAAg6QhMAGgKAEIgIgXQAPgCAWgLQAQgHAkgTQg7AEgJADQgDgNgFgKQAJgBANgIQAagMAcgXQgoAJgwAIQgCgJgFgNQBwgRA3gZIASATQgeANguAMIAPAKQgZAUgaANIA5gCIAdgVIATAQQgwAjg1AYIBggGQgKgLgMgMIAVgKQAiAfATAbIgVANIgOgTIhBAFIAAA9QAAATgNAEQgJAEgiAAQgBgKgIgOgAhzBhQAhgTAXgeIAZAJQgaAhgiAYQgKgKgLgHgAAjA6IAVgMQAnAcAVAWIgVAPQgTgWgpgfg");
	this.shape_1.setTransform(51.524,14.4701,1.1641,1.1641);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhwB0IAAgXIBjAAIAAgnIhJAAIAAgWIBJAAIAAgjIg9gBIABgVQgVANgPAIQgGgLgJgJQAzgXAsgtIgrAAIAAgXIBVAAQASAbAeAYQAfAYAhANQgMALgFALQgUgJgPgKIAAAVIg9AAIgBAjIBKAAIAAAWIhKAAIAAAnIBnABIAAAWgAhJgaICQABQgpgcgegnQgdAkgsAeg");
	this.shape_2.setTransform(17.3297,14.5283,1.1641,1.1641);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQBSQglAfhOAMQgEgMgMgNQBEgIAjgWQgigNgmgNQANgTAKgRIg2AAIAAgXIBEAAQAMgXAJgVIAbAFQgFAPgMAYIA4AAIAFgaIAdADIgDAXIAuAAIgBAXIg0AAQgKAggSAXQAyAWAbARIgTAXQgegVgwgWgAgsAgIA1AUQAPgRAKgbIg/AAgABTgjIAAghIingBIAAAiIgZAAIAAg5IBhABIgLgaIAagHIAQAhIBbAAIAAA4g");
	this.shape_3.setTransform(-17.0684,14.3246,1.1641,1.1641);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhQB8IAAhwQgMAMgOAMQgGgKgLgMQAuggAcgvIAYAJQgOAWgQATIAACLgAANBiQAfABAKgBQAGAAAAgFIAAhmIhTAAIAAgYICTAAIAAAYIgmAAIgBBmQAAALgCAGQgDAGgIADQgMAEgmAAQgCgNgHgMgAh5hBQARgLASgQQARgQAKgPIAYAKQgeAngpAdQgIgNgHgHgAgMhTIAAgYICBABIAAAXg");
	this.shape_4.setTransform(-51.8738,14.3537,1.1641,1.1641);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABDB8IAAgKIh1AAIAAAKIgZAAIAAhvICoAAIgBBvgAgyBeIB1AAIAAgVIh1AAgAgyA2IB1AAIAAgVIh1AAgAhyADQAngPAMgbIgxAAIAAgUIASAAIgTgLQAVgUAJghIAXAFIgHARIBFABIAAATIgkAAIAAAWIArAAIAAAUIgwAAIgBADQAZAMAXAQIgRAPQgUgPgSgMQgQAXgkARQgGgKgJgHgAhdg7IAiAAIABgWIgTAAQgHAMgJAKgAATgFIAAhgIBhAAIAABggAAqgbIAxAAIAAg0IgxAAg");
	this.shape_5.setTransform(-86.8539,14.2373,1.1641,1.1641);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaBuIABiuIhIAAIAAgtIDDABIAAAsIhIAAIAACug");
	this.shape_6.setTransform(76.425,-17.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAABxQgyAAgfgaQglgfABg5QAAg2AmgfQAhgbAuAAQAvAAAhAbQAmAfAAA2QAAA6glAeQgfAbgxAAIgBgBgAgsgxQgTASAAAeQAAAiAVATQARAQAZAAQAaAAARgQQAUgTAAgiQAAgegSgSQgSgRgbAAQgaAAgSARg");
	this.shape_7.setTransform(52.2747,-17.9995);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhNBtIABjaIA0AAIAACuIBmABIAAAsg");
	this.shape_8.setTransform(30.425,-18.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaBtIABjZIAzAAIAADZg");
	this.shape_9.setTransform(13.65,-18.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhiBtIAAjaIBlAAQBgABAABPQAAApgfAVQgaAQgnABIgxAAIAAA7gAguAFIAtAAQAVAAALgFQANgJAAgVQAAgUgNgHQgLgHgWAAIgsgBg");
	this.shape_10.setTransform(-4,-18.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhHBDQgbgXAAgsQAAgqAcgZQAagWAsAAQAtgBAbAYQAbAYAAAqQAAAsgcAXQgaAYgtAAQgsAAgbgYgAghgiQgMANAAAVQAAAVANAOQANANAUAAQAUABANgOQAMgOAAgVQAAgVgNgNQgNgNgUAAQgUAAgNANg");
	this.shape_11.setTransform(-29.025,-15.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag5BYIABisIAoAAIAGATQAfgWAlAAIAAAwQgjAAgdARIAABug");
	this.shape_12.setTransform(-47.4,-16.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhiBtIAAjaIBlAAQBgAAAABQQAAAoggAWQgZARgnAAIgxAAIAAA7gAguAFIAtAAQAWAAAKgGQANgIAAgVQAAgUgNgHQgLgHgVAAIgtAAg");
	this.shape_13.setTransform(-68.025,-18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},84).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.9,-41.3,202.4,70.4);


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

	// sc3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#581916").s().p("AgMC2IAAlrIAZAAIAAFrg");
	this.shape.setTransform(-78.8,13.9499,1,1.3618);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(52).to({_off:false},0).to({_off:true},1).wait(7));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVBMQAYgPALgdQAKgYACglIgcAAIAAgRIAdAAIAAgrIASAAIgBArIAsAAIgBAJQgBA/gCAWQgCAZgFAHQgEAGgLACIgaABQgBgLgFgHIAYABQAFAAADgEQAGgHAChaIgaAAQgDAqgKAbQgNAggaASQgEgGgJgIgAhXA0IAOgDIAAiBIBCAAIgBB0IAJgCIACAQIhXAVgAg5AuIAggHIAAgWIggAAgAg5ABIAhAAIAAgZIggAAgAg4goIAgABIAAgZIggAAg");
	this.shape_1.setTransform(62.825,26.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA2BKIANAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIAAgYIgUAAIgBAqIgQAAIAAgqIgUAAIAAArIgPAAIAAh6IAkAAIAAgPIgoAAIAAgQIAoAAIAAgaIAQAAIAAAaIAbAAQgJgJgNgJIAKgIQAPAJAJAJIgJAIIALAAIAAAQIgpAAIAAAPIAlAAIAABnQgBANgGADQgFADgPAAQgBgIgEgIgAAxAgIAUAAIAAgSIgUAAgAAMAgIAUAAIAAgSIgUAAgAAxAAIAUAAIAAgQIgUAAgAAMAAIAVAAIAAgQIgUAAgAg4BaIAAghIghAAIAAgQIAhAAIAAgOIgaAAIAAhEIAaAAIAAgMIgfAAIABgQIAeAAIAAgUIARAAIAAAUIAdAAIAAAQIgdAAIAAANIAbAAIAABEIgbgBIAAAOIAfAAIAAARIgfgBIAAAhgAgqAOIAQAAIAAgOIgQAAgAhFAOIAPAAIAAgOIgPAAgAgqgNIAQAAIAAgOIgQAAgAhFgNIAPAAIAAgOIgPAAg");
	this.shape_2.setTransform(39.3,26.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWBJQATABAEgBQAEAAAAgEIAAgtIhIAAIAAgRIBIAAIAAgOIASAAIAAAOIAXAAIAAARIgXAAIAAAuQAAANgJAEQgIADgWAAQgCgLgEgGgAhUBHIARAAQABAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBIAAgvIgXAHIgEgRIAbgIIAAgmIgYAAIAAgRIAYAAIAAglIARAAIAAAmIASAAIAAAQIgSAAIAAAiIARgFIACAQIgUAGIAAA0QAAANgHADQgGAEgTAAQgBgKgEgHgAgKAkIANgIQARAYAFAJIgPAJQgKgSgKgQgAgPgMIAAgRIAnAAIAAgUIgxAAIAAgQIAxAAIAAgYIASAAIAAAYIAxAAIAAAQIgxAAIAAAUIAoABIAAAQg");
	this.shape_3.setTransform(15.425,26.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDBaIAAhqIgKANQgDgIgGgJQAWgZAMgrIARAFQgEALgIASIAcAAQgFgPgHgNIAPgGQAJAOAFANIgQAHIAqAAIAAAQIghAAIAAAWIAdAAIAAAQIgdAAIAAAUIAdABIAAAQIgdAAIAAAXIAjAAIAAARIhNAAIAAANgAANA8IAaAAIAAgXIgaAAgAANAUIAaAAIAAgUIgaAAgAANgRIAaABIAAgWIgaAAgAhZBRQAGgPADgeIAOACQgDAcgGAUQgHgEgHgBgAg7AmIANgDQAEARACAYIgOADQgBgRgEgYgAglAhIAMgDQAJAXACAOIgMAFQgDgNgIgagAhXANQAEgBALgMIAPgTQgVACgFACIgFgPQAFgCAGgJQAPgXAJgZIAQAGQgMAagRAYIASgBIAPgbIAOAIQgTAkgYAaIAegEIgIgRIANgEQAKAUAEASIgNAFIgDgJQgwAIgEACIgGgPg");
	this.shape_4.setTransform(-8.425,26.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhcBOQAdgRAKgsIgUAAQgIAAgDADIgGgQQAFgBAEgEQAJgIAOgUIgdgBIAAgOIAoAAIACgBIAMAFIggArIASAAIADgBIAJAEQgDAWgJAVQAJANASAFQAOAEAbAAQAoAAAggDQgEAEgCANQgaACgoAAQgdAAgQgEQgTgGgLgOQgKARgQAKQgFgIgHgEgAgUA3IAAhcIAdAAIAFgNIgxAAIAAgPIAeAAQgFgKgHgIIAPgGQAIAMAEAJIgIADIAhABQAKgNAEgMIASAFIgOAUIAjAAIAAAPIg3gBIgGANIAtAAIgBBcgAgCAqIA4AAIAAgOIg4AAgAgCAPIA4AAIAAgNIg4AAgAgCgKIA4ABIAAgOIg4AAgAhRhRIAOgIQARASAIALIgOAKQgLgRgOgOg");
	this.shape_5.setTransform(-32.2,26.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKBaIABgbIhOgBIAAgQIBOAAIAAgOIg5AAIAAhMIA5ABIAAgNIhIAAIAAgRIBIAAIAAgQIASAAIAAAQIBJAAIAAARIhJAAIAAANIA7AAIAABLIg8AAIAAAOIBQAAIAAARIhQAAIAAAcgAAIASIAqAAIAAgRIgqAAgAgxASIAoAAIAAgRIgoAAgAAJgMIApAAIAAgRIgpAAgAgxgNIAoABIAAgRIgoAAg");
	this.shape_6.setTransform(-56,26.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAtBQIgJgdIhKAAIgJAdIgoAAQAdhcAghDIA0AAQAjBLAbBUgAgcATIA1AAQgPgsgLgaQgOAjgNAjg");
	this.shape_7.setTransform(-25.3,1.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAbBQQgdgpghgkQAXgnAjgrIAyAAQgsAygUAdQATASAYAeIAaAggAhNBQIAAifIAnAAIAACfg");
	this.shape_8.setTransform(-42.6,1.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag4BQIABifIAmAAIAAB/IBKAAIAAAgg");
	this.shape_9.setTransform(-59.125,1.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},52).to({state:[]},1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-10.8,151.6,49.5);


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

	// sc3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#581916").s().p("AgMC2IAAlrIAZAAIAAFrg");
	this.shape.setTransform(-157.8,-12.2001,1,1.3618);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(52).to({_off:false},0).to({_off:true},1).wait(7));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmBZIAAhEIgWAAIAAA1IgQAAIAAhFIAmAAIAAgQIgugBIAAgQIANAAIgQgGQANgTAHghIARAEIgFATIARAAIAAgaIARAAIAAAbIAlAAIAAAQIglAAIAAASIAsAAIAAARIgsAAIAAAQIAmAAIAAA0QAAALgGAEQgHADgPgBQgBgIgEgHQAMABADgBQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAAgjIgVAAIAABFgAhGgcIAgAAIAAgSIgYAAQgDAJgFAJgAApBGIAYABQAFAAAAgFIAAiZIASAAIgBCZQAAAPgIAFQgIADgZAAQgCgKgDgJgAAjAjIAAhrIARAAIAABrg");
	this.shape_1.setTransform(11.35,0.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhWBKIARAAQABAAABAAQABgBAAAAQABgBAAAAQAAgBAAgBIAAgqIgVAHIgDgSIAYgHIAAgrIgXAAIAAgRIAXAAIAAgnIARAAIAAAnIASAAIAAARIgSAAIgBAmIAUgFIADAQIgXAHIAAAvQAAANgGAEQgIAEgSAAQgBgKgEgHgAggBVIAAgRIA0AAIAAgkIgnAAIAAgRIBkAAIAAARIgrAAIAAAlIA1AAIAAAQgAgZgIQATgFAHgKQAGgIABgUIgTAAIAAATIgQAAIABgjIAvAAIgJgSIARgFQAIANADAKIAyABIAAAhIgRAAIAAgSIgSAAIAAAeQAAAHADAAIASAAIAMgBIACAOQgDABgKAAIgTAAQgMAAgEgEQgEgFAAgMIAAgeIgNAAQgCAZgIALQgJAOgXAFQgCgFgGgHg");
	this.shape_2.setTransform(-13.25,0.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhbBOQAagSAJgrIgRAAQgJAAgDADQgCgJgEgHQAFgBAFgEQAHgHAOgWIgcAAIAAgPIAnABIADgCIALAGIgfAqIAUAAIAIADQgDAYgIASQAJAOASAGQAOAEAdAAQAtAAAagDQgDAFgDAMQgZACgpAAQgdAAgQgFQgUgGgKgPQgJASgPALQgFgHgHgFgAAQA+IAAgpQgTAZgXAMQgFgIgHgGQAegMAQgZIgiAAIABgwIApAAIAAgOIgxAAIABgQIAwABIAAgTIASAAIAAATIA0AAIAAAPIg0AAIAAAOIAtAAIAAAxIgmAAQAdASARAQIgMANQgKgLgfgWIAAAogAAigGIAbAAIAAgVIgbAAgAgJgGIAZAAIAAgVIgZAAgAhShRIAOgIQANANALAQIgPAKQgHgOgQgRg");
	this.shape_3.setTransform(-38.025,0.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhaBPQAegWAGg4IASACQgBANgDAMQAKAYAWALIAAhKIgtAAIAAgSIBtABIAAARIguAAIAAAbIA4AAIAAARIg5AAIAAAjQANACAQAAIA0AAQgFAGgCAMIgvAAQgfAAgRgHQgXgJgMgWQgLAagRAPQgEgFgLgHgABAgWIAAgcIh/AAIAAAcIgSAAIABgtIBKAAIgIgSIARgFIALAXIBEAAIAAAtg");
	this.shape_4.setTransform(-63,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAsA7QgNARgRAMQgIgIgFgEQAVgNARgYQgGghgCgzIg/AAIAAgQIA/AAIgBgcIASAAIAAAcIAaAAQgLgNgKgGIALgJQAQALAHAJIgJAIIAKAAIAAAQIgoAAQABAmAEAWQAJgQAGgcIARAEQgKAngSAbQAHAgAJAAQAFAAAAgbQAGAGAHAEQgDAUgDAHQgFAHgKAAQgPAAgLgfgAgnAzIBDgQIACAPIhAASgAhaAvIAVgKIAAg+IgTAAIAAgRIATAAIAAgtIARAAIAAAtIAQAAIAAARIgQAAIAAA2IAQgIIAFAQIg1AcgAgbAcIAAg5IAwAAIAAA5gAgNANIAUAAIAAgbIgUAAg");
	this.shape_5.setTransform(-87.8,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhbBOQAagSAJgrIgRAAQgIAAgEACQgCgIgEgHQAFgBAFgEIAVgcIgcAAIAAgQIAnAAIADAAIALAEQgRAagOARIARAAIADAAIAIAEQgDAVgHATQAIAPASAFQAPAFAcAAQAoAAAfgDQgDAGgDALQgcACglAAQgeAAgQgFQgUgGgKgOQgJAQgPAMQgFgHgHgFgAAQA+IAAgqQgQAYgaANQgGgIgGgFQAdgMASgYIgiAAIAAgyIApAAIAAgNIgwAAIAAgQIAxAAIAAgSIARAAIAAASIA0AAIAAAQIg0AAIAAANIAtABIAAAxIgmAAQAcARASARIgMANQgMgNgdgTIAAAngAAigGIAbAAIAAgVIgbAAgAgJgGIAZAAIAAgVIgYAAgAhRhRIANgJQANAOALAQIgPAKQgGgMgQgTg");
	this.shape_6.setTransform(-112.675,0.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhRBVIAAgRIBIAAIAAgcIg1AAIAAgRIA1AAIAAgZIgsgBIAAgPIgaAPQgFgIgGgHQAlgPAggiIgfAAIAAgRIA+AAQANAUAWARQAXASAYAJQgGAGgHALQgLgGgOgJIAAAQIgtAAIAAAZIA1AAIAAARIg1AAIAAAcIBKAAIAAARgAg1gTIBqABQgggWgVgbQgTAZgiAXg");
	this.shape_7.setTransform(-137.55,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhXBWIAAgRIBPAAIAAgVIg7AAIAAgQIA7AAIAAgQIgOAAIAAgnIgWAAQgGAdgZAPQgDgHgIgGQAUgKAEgVIgWAAIAAgQIAYAAIAAgYIgRAAIAAgRIBXABIAAAQIgPAAIAAAYIATAAIAAARIgTgBIAAAkIAPAAIAAATIA6AAIAAAQIg6AAIAAAVIBOAAIAAARgAgrgnIAVAAIAAgYIgVAAgAAiACIAXAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAAAIABhVIARAAIAABVQAAAMgJAEQgGADgXgBgAAZgKIAAhBIAQAAIAABBg");
	this.shape_8.setTransform(-38.075,-24.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLBZQgRAAgFgEQgGgFAAgMIAAgYIASAAIAAAYQAAADACABQACABAIAAIAfABQAGAAABgDQACgDABgLQAFAEALACQgCAQgFAFQgFAFgMAAgAhaBNQATgMAHgUIAQAFQgKAagRALgAAqA0IAPgJQAXAQAKATIgPAJQgJgRgYgSgAgTAqIAGgFIg4AAIAAgMIB3AAIAAgKIiGAAIAAgLICGAAIAAgJIh2AAIAAgMICIABIAAAUIASAAIAAALIgSAAIAAAWIhCAAQAOAJAFAFIgMALQgJgLgTgJgAAggTIAAgJIggAAIAAgMIAgAAIAAgIIgaAAIAAgMIAaAAIAAgHIgfAAIAAgMIAfAAIAAgJIARAAIAAAJIAgAAIAAAMIggAAIAAAHIAdAAIAAAMIgdAAIAAAIIAkAAIAAAMIgkAAIAAAJgAgzgTIAAgKIggAAIAAgLIAgAAIAAgIIgaAAIAAgMIAaAAIAAgHIgeAAIAAgMIAeAAIAAgJIAQAAIAAAJIAeAAIAAAMIgeAAIAAAHIAbABIAAALIgbAAIAAAIIAgAAIAAAMIggAAIAAAJg");
	this.shape_9.setTransform(-62.95,-24.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAxBaIAAgGIhVAAIAAAGIgSAAIAAhRIB6AAIAABRgAgkBFIBVAAIAAgQIhVAAgAgkAoIBVAAIAAgQIhVAAgAhUACQAegKAIgUIgkAAIAAgPIAOAAQgJgGgFgCQAPgOAHgZIAQAEIgFANIAzAAIAAAPIgaAAIgBAPIAfAAIAAAPIgiAAIgBACIATAKIAPALIgLAKIgcgTQgMAQgaANQgEgJgIgEgAhDgrIAZAAIAAgPIgOAAQgFAIgGAHgAANgDIABhHIBGABIAABGgAAfgTIAjAAIAAgmIgjAAg");
	this.shape_10.setTransform(-88.4,-24.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgqA/QgcgVAAgqQAAgoAdgWQAZgUAnAAQAYAAAYAHIAAAiQgYgIgUAAQgcAAgOANQgPANAAAXQAAAYARANQAOANAYgBQATAAAbgHIAAAkQgbAFgWAAQgoAAgYgUg");
	this.shape_11.setTransform(-112.7,-25.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgrA/QgbgVAAgqQAAgoAdgWQAagUAmAAQAbAAAVAHIAAAiQgVgIgYABQgaAAgPAMQgPANAAAXQgBAYARANQAOANAZAAQAVgBAZgHIAAAkQgYAFgZAAQgoAAgZgUg");
	this.shape_12.setTransform(-129.6004,-25.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSBQIAAifIAlAAIAACfg");
	this.shape_13.setTransform(-142.575,-25.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},52).to({state:[]},1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-36.9,179.1,49.5);


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
	this.instance.setTransform(68,-980,1.7125,1.7125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(68,-980,548,2055.1);


(lib.sc2power = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AB0IzIiImMIhpAAIgfGMIjbAAIBYxkIFNAAQCiAABTBLQBiBZgPC+QgJB4gyBUQguBOhNAqICoG+gAhsgtIBiAAQBNAAAsgpQAsgpAHhQQAGhMgnghQgjgfhSAAIhgAAg");
	this.shape.setTransform(409.2246,58.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlMIzIBYxkIJBAAIgSDhIllAAIgQDQIEvAAIgSDhIkvAAIgTDvIFzAAIgSDjg");
	this.shape_1.setTransform(327.85,58.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgIzIgrnqQgLh+gEiGIgEAAIg5EEIh3HqIkOAAIhMxkIDeAAIAaNkIAEAAQAqi5AoiqICGoBIC3AAIA2IBQAKByAPDxIAGAAIA/ljIBkoBIDPAAIj3Rkg");
	this.shape_2.setTransform(235.7,58.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AlOGqQhnifAVkQQAWkQB/iaQB8iXC9AAQC9AABkCXQBoCbgWEPQgVEQiACfQh+Cdi7AAQi9AAhkidgAh4kDQg7BcgNCiQgNCjAsBgQAtBgBZAAQBZAAA8hgQA8hhANiiQAMiigthcQgshchbAAQhZAAg6Bcg");
	this.shape_3.setTransform(126.0493,58.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Al0IzIBYxkIFAAAQClAABWBPQBkBdgQDCQgPC/hzBlQhoBcibAAIhqAAIgdF2gAhrgWIBfAAQBOgBAsgsQAqgsAGhUQAHhSgogkQgkgihSAAIhZAAg");
	this.shape_4.setTransform(37.329,58.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sc2power, new cjs.Rectangle(0,0,446.9,116.6), null);


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
	this.shape.setTransform(71.3531,34.1366,1.1377,1.1377);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABDBpIABjRIAVAAIAADRgAg2BnQgBgNgGgKQATACAQAAQAHAAAEgDQAHgGAEgwIhUAAQAIgmAEggIBJAAIAAghIhQAAIAAgUIBkAAIAABIIhKAAIgGAfIBSAAIgBAKQgDAmgDARQgEASgGAHQgGAGgOACIgMAAIgYAAg");
	this.shape_1.setTransform(41.773,34.3357,1.1377,1.1377);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhqBZQALgUADghQACgUABgiIAAhRIDBAAIgBARIitAAIAABAQAABQgTAlQgGgGgLgEgAhJBiIAAgQIBQAAIAAgPIhAgBIAAgPIBAAAIAAgLIAUAAIAAALIA/AAIAAAQIg/AAIAAAPIBOAAIAAAQgAhHAfQAJgLgBgUIAAgaIBOAAIgBAzQAdgUAEghIgdAAIAAgRIAeAAIAAgfIAQAAIAAAfIAlAAIAAARIggAAQAMAnAaANQgJAHgEAIQgWgNgMggQgJAbgbARQgCgDgIgHQgBAGgGACQgFACgVAAQgBgFgEgHIATAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAAAIAAgKIgqALIgDgIQgCANgGAKIgQgJgAguANIAjgIIgggIIAFgIQATADANAFIgEAIIAJgDIAAgQIgsgBgAg7ghIABgqIBEAAIAAAqgAgrgrIAmAAIAAgGIgmgBgAgrg7IAmAAIAAgGIgmAAgABFhFIAMgHQAOAMAFAKIgMAIQgKgOgJgJg");
	this.shape_2.setTransform(13.16,34.3357,1.1377,1.1377);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABGBrIAAgMIg/AAIAAAMIgSAAIAAhaIBlAAIAABagAAHBQIA/AAIAAgPIg/AAgAAHAxIA/AAIAAgPIg/AAgAhkA4IAagJIABhNIgYAAIAAgUIAYAAIAAg1IATAAIAAA1IAXAAIAAAUIgXAAIAABFIAWgHIAEATIhBAagAgWAFIAAhNIAcAAQgGgNgIgMIARgIQAMANAFANIgPAHIAnAAQANgTAFgPIAWAIIgSAaIAdAAIAABNgAAugJIAkABIABgxIgkAAgAgFgJIAjAAIABgwIgkAAgAAygSQAKgPAGgSIANAFQgJARgKAOgAAAgwIAKgEQAMARADAQIgMAEQgCgMgLgVg");
	this.shape_3.setTransform(-16.3063,33.9944,1.1377,1.1377);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNBrIAAhyIBsAAIAABeQAAAMgGAFQgFADgOAAQgBgJgEgJIALAAQAAAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAIAAgfIgPAAIAAAwIgPAAIAAgwIgPAAIAAAwIgQAAIAAgwIgOAAIAAAzgAA/AmIAPAAIAAgcIgPAAgAAhAmIAPAAIAAgcIgPAAgAADAmIAOAAIAAgcIgOAAgAhIBrIAAgkIgjAAIAAgTIAjAAIAAgRIgcAAIAAhSIAcAAIAAgQIggAAIAAgSIAgAAIAAgXIATAAIAAAXIAhAAIAAASIghAAIAAAQIAeAAIAAAKQAmgcAXgqIAPAIIgEAIQAbAgAgAWQgKAJgEAIIgRgPIAAALIhKAAIAAgJIgPAOQgFgJgGgFIgBBFIgdgBIAAARIAhAAIAAATIghAAIAAAkgAg3AUIAPAAIAAgTIgPAAgAhUAUIAOAAIAAgTIgOAAgAg3gMIAPAAIAAgTIgPAAgAhUgNIAOABIAAgTIgOAAgAAMgqIA6AAQgVgVgKgMQgPAUgMANg");
	this.shape_4.setTransform(-44.4643,33.8238,1.1377,1.1377);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAxBXIAdAAQAEAAABgEIAAhTIhiAAIAABqIgVAAIAAh8IAVAAIAAhQIBkAAIAABQIASAAIAABlQAAAPgKAFQgHADgeAAQgCgMgFgHgAAngSIAaAAIAAgaIgaAAgAADgSIASAAIAAgrIAsAAIAAgSIg+AAgAhgBaQATgfAUgsIAQANQgQAogUAjgAABBRIAAhDIBAAAIAAA3IgvAAIAAAMgAASA2IAeAAIAAgYIgeAAgAhmgbIAMgQQAcALANALIgMASQgOgMgbgMgAhahZIAMgQQAbALANAMIgMASQgNgNgbgMg");
	this.shape_5.setTransform(-74.215,34.0229,1.1377,1.1377);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiBoQgTAAgGgHQgHgIAAgVIAAirIAXAAIAABGIA7AAIAAAVIg7AAIAABQQAAAKABADQADACAHAAIAgAAQAGABADgJQACgGACgaQAJAIAKABQgCAegGALQgHALgQAAgAhjBVQAKgGgBgNIABipIAWAAIAABGIA4AAIAAAVIg4AAIAABUIA5gNQgBAJADALQhKAUgIAEQgEgMgFgGg");
	this.shape_6.setTransform(58.4183,3.1247,1.1377,1.1377);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBrIAAhvIAYAAIAEgTIghgBIAAgRQgEAQgHARIAABzIgRAAIAAhQIgKANQgFgJgFgFIABgCIgKAFIgBgGQgzAIgHADIgFgSQAEgBAMgOIARgXQgZADgEACIgGgRQAEgCAIgLQASgbAKgeIARAHQgPAhgRAaIAUgBIARggIAPAKQgWAqgaAfIAfgFIgIgUIAOgFQAKAUADARQAVgdAGgpIATAEIgCAGIBXAAIAAASIghAAIgGATIAjABIAABtIgTgBIAAgIIgpAAIAAAKgAAqBPIApABIAAgaIgpAAgAArAlIAoAAIAAgYIgoAAgAhpBgQAGgSADgjIAQAEQgDAhgHAWQgFgDgKgDgAhHAuIAPgEQAEAbABAWIgOAEQgBgUgFgdgAguApIAMgFQAKAaAEASIgPAFQgCgQgJgcgAgWgrIAAgoIA4AAIgJgQIARgHQAGAIAHAPIAzAAIAAAkIgUAAIAAgSIhYAAIAAAWg");
	this.shape_7.setTransform(28.3263,3.2669,1.1377,1.1377);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhqBaQARgjAAhJIAAhRIDAAAIAAAQIitAAIAABBQgBBSgRAjQgJgGgJgDgAhJBiIAAgQIBQAAIAAgPIhAgBIAAgQIBAAAIAAgKIAVAAIAAAKIA/AAIAAARIg/AAIAAAPIBNAAIAAAQgAhGAfQAIgLAAgUIAAgaIBMAAIAAAyQAegTADghIgcAAIAAgRIAdAAIAAgfIAQAAIAAAfIAlAAIAAARIggAAQALAnAbANQgJAIgEAHQgWgNgNgfQgIAagbASIgKgKQAAAFgHACQgFACgVAAIgFgMIATAAQABAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAIAAgKIgqALIgDgIQgDAOgGAJQgDgDgMgGgAguANIAjgIIgggIIAFgJQARAEAPAFIgEAIIAJgCIAAgRIgsAAgAg6ghIAAgqIBFAAIgBAqgAgrgqIAmAAIABgHIgngBgAgrg7IAnAAIAAgGIgnAAgABGhEIAMgIQANAMAFAKIgMAIQgHgLgLgLg");
	this.shape_8.setTransform(-0.685,3.5513,1.1377,1.1377);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhqBaQAxgDAigIQgWgMgMgKQgOALgUAJQgGgKgGgGQArgQARgbIATAGIgHAJICAAAIAAAQIgfAAQgOARgYAMQAgAIAvAEQgFAGgGALQg0gEgqgOQgkANg+AGQgFgNgFgFgAACBHQAZgJANgNIhRAAQARAMAaAKgAhoAWQAFgOABgTIANADQgBAVgHAQgAAjATQAEgPABgQIAOADQgCAUgFAPgAhOgJIANgCQAFASAAANIgOADQAAgMgEgUgAA9gJIANgDQAFASAAAOIgOADQAAgQgEgQgABTgMIAMgCQAGAOADARIgNAEQgBgOgHgTgAgeAUIAAgpIA8AAIAAApgAgQAIIAgAAIAAgRIggAAgAg4gKIAMgDQAFANADAOIgNAEgABagYQgtAFgFADIgFgOQAFgBAJgJIANgOQgTABgEACIgFgOQAEgBAGgGQAOgTAGgPIAPAGQgIAQgOASIAQgBIAMgRIAOAGQgSAagSASIAYgCIgGgOIANgDQAJAUACAOIgNAEgAgwgXQgsAFgGADIgEgPQAEAAAJgJIAPgPQgTABgFACIgFgPQAFAAAEgHQAMgLAJgWIAQAFQgNAWgKAMIARAAIALgRIAPAHQgUAbgTASIAYgDIgFgMIANgEQAIARADAPIgNAEgAgegfIAAgMIA9AAIAAAMgAgeg1IAAgMIA9ABIAAAMgAgjhJIAAgNIAdAAIgHgPIAPgGQAGAKAEALIAXAAIAAANg");
	this.shape_9.setTransform(-29.4971,3.2385,1.1377,1.1377);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAEBLIAqABQAHgBAAgFIAAiSIibAAIAAgWIDNAAIAAAWIgbAAIAACSQAAAUgOAEQgLAEgmABQgCgKgHgOgAhQA6IAAhnIBfAAIAABVIhJAAIAAASgAg6AUIA1AAIAAgtIg1AAg");
	this.shape_10.setTransform(-58.4799,4.1202,1.1377,1.1377);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAABOQgmAAgXgUQgYgVAAglQAAglAYgUQAXgUAmAAQAnAAAXAUQAYAVAAAkQAAAlgYAVQgXAUglAAIgCAAgAgcgeQgLAMAAASQAAASALAMQAMALARABQARAAALgMQALgMAAgSQAAgTgLgLQgLgLgSAAQgRAAgLALg");
	this.shape_11.setTransform(88.1563,-28.6789,1.3838,1.3838);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AguBYIgEALIgggBIAAjHIAsAAIAAA6QAVgKAUAAQAiABAWARQAZAWgBAlQAAAkgYAWQgXAUggABQgZAAgZgPgAgmgIIAABBQAQAJATAAQARABALgLQANgMAAgVQAAgTgLgLQgLgJgRgBQgUABgRAIg");
	this.shape_12.setTransform(59.9271,-32.0702,1.3838,1.3838);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgxBMIAAiUIAkAAIAFAQQAagTAgAAIAAAqQgdgBgaAPIAABfg");
	this.shape_13.setTransform(36.1593,-28.9912,1.3838,1.3838);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag9BAQgPgPAAghIAAhcIAsABIAABWQAAAdAaAAQAUAAATgOIAAhlIAsAAIAACUIgkAAIgFgQQgdAUgbAAQgbgBgOgMg");
	this.shape_14.setTransform(11.3889,-28.576,1.3838,1.3838);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWBfIABiWIg/gBIAAgmICpABIAAAmIg+AAIAACWg");
	this.shape_15.setTransform(-13.8658,-31.6204,1.3838,1.3838);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag4AVIAAgpIBxAAIAAApg");
	this.shape_16.setTransform(-33.7582,-30.4442,1.3838,1.3838);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgzBLQgggZAAgyQAAgvAigbQAfgXAtAAQAdAAAcAIIAAAoQgdgIgYAAQggAAgRAPQgSAPAAAbQAAAdAUAPQAQAPAdAAQAagBAdgJIAAArQgfAGgbAAQgwAAgdgXg");
	this.shape_17.setTransform(-56.2798,-31.6896,1.3838,1.3838);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AghBfQgqhagahjIAwAAIASA6QAUA/APAgQAOghAUg7IATg8IAxAAQggBsgnBQg");
	this.shape_18.setTransform(-84.7519,-31.7588,1.3838,1.3838);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.9,-46.3,198.9,92.5);


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
	this.instance.setTransform(45,-1078,1.8107,1.8107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45,-1078,579.4,2172.9);


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


(lib.sc1zone = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AnXKdIAA05IOvAAIAACxIruAAIAAGBIKzAAIAACuIqzAAIAAGoILuAAIAACxg");
	this.shape.setTransform(502.375,69.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AGkKdIsqw1IAAQ1Ii/AAIAA05IDeAAILuPnIAAvnIC/AAIAAU5g");
	this.shape_1.setTransform(358.875,69.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AoEH4QjDi9AAk8QAAk8DDi8QDCi7FKAAQFOAAC4C8QC6C8AAE7QAAE7jCC+QjBC9k7AAQlJAAjFi9gAlul9QiOCDAAD5QAADtCPCIQCNCIDqAAQDfAACMiJQCLiJAAjrQAAj3iKiEQiKiDjkAAQjpAAiNCCg");
	this.shape_2.setTransform(197.55,69.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AoVKdIAAirIMqvdIsqAAIAAixIQrAAIAACrIsoPdIMkAAIAACxg");
	this.shape_3.setTransform(53.4,69.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sc1zone, new cjs.Rectangle(0,0,549.6,138.7), null);


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

	// sc1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("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");
	this.shape.setTransform(14.125,-0.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.5,-19.2,159.3,37.7);


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
	this.instance.setTransform(339,-1004,1.656,1.656);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(339,-1004,529.9,1987.3);


(lib.sb_sc3_tjp = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgVBMQAYgPAMgdQAJgYACglIgbAAIAAgRIAcAAIAAgrIASAAIgBArIAsAAIAAAIQgCA+gCAYQgCAZgEAGQgGAIgKABQgKABgQgBQAAgJgGgIIAYAAQAFABADgDQAFgIADhaIgaAAQgDAqgKAbQgNAggaASQgGgJgHgFgAhXA0IAOgDIABiCIBAAAIAAB1IAJgCIACAQIhWAVgAg4AuIAfgHIAAgWIgfAAgAg4AAIAfAAIAAgXIgfgBgAg4gnIAfAAIAAgZIgfAAg");
	this.shape.setTransform(125.75,-3.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA2BKIAMAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBIAAgYIgVAAIAAAqIgQAAIAAgqIgUAAIAAArIgPAAIAAh6IAjAAIAAgPIgmAAIAAgQIAmAAIAAgaIARAAIAAAaIAbAAQgKgKgMgIIAKgIQAPAIAJAKIgJAIIALAAIAAAQIgpAAIgBAPIAmAAIAABoQAAALgGAEQgGADgPAAIgFgQgAAwAgIAVAAIAAgRIgVAAgAAMAgIAUAAIAAgRIgUgBgAAwAAIAVAAIAAgQIgVAAgAAMAAIAUAAIAAgQIgUAAgAg4BaIAAggIghAAIAAgRIAhAAIAAgNIgaAAIAAhEIAaAAIAAgNIgeAAIAAgQIAeAAIAAgUIARAAIAAAUIAdAAIAAAQIgdAAIAAANIAbAAIAABEIgcAAIAAANIAgAAIAAARIggAAIAAAggAgqAOIAQAAIAAgOIgPAAgAhFAOIAPAAIAAgOIgPAAgAgpgMIAPAAIAAgPIgPAAgAhFgNIAPABIAAgPIgPAAg");
	this.shape_1.setTransform(102.225,-3.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEBaIABhHQgMAGgJAEIgDgGIADAQIg7AaIgHgTIAagJIAAg8IgWAAIAAgSIAWAAIAAgtIARAAIAAAtIATAAIAAALIAjAAIAAgVIgdAAIAAgQIAdAAIAAgWIASAAIAAAWIAcAAIAAAOQAIgLAIgQIARAFQgMAagSATIAjAAIgBARIgyAAQgMAMgJAEIA8AAIAABXIgSAAIAAgGIgwAAIAAAGgAANBEIAwAAIAAgSIgwAAgAANAkIAwAAIAAgQIgwAAgAgvAeIATgIIgHgJQAbgKAUgQIgoAAIAAgKIgTAAgAAZgeIAHAAQAJgIAKgNIgaAAg");
	this.shape_2.setTransform(78.4,-3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqBOQAZgNANgbQgZAFgEAEIgFgOQAFgBAGgKIAOgXQgRABgEACIgFgNQADgBAEgHQAHgMAFgUIAPAGQgGAQgJAOIAOgBIAEgNIANAIQgLAXgNAWIANgDIACgIIANACQgKA1glAVQgGgHgEgEgAhXBJQAOABACgBQABAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBIAAgvIgRAHIgFgSIAWgHIAAgmIgTAAIAAgRIATAAIAAgmIAQAAIAAAmIAOAAIAAARIgOAAIAAAhIANgEIACAPIgPAGIAAA1QAAALgHAFQgGADgSAAQgBgIgEgIgAARBYIAAhSIgDAEIgLgKQAPgRAKggIAOADIgGASIAUAAIgIgPIAMgFQAHALADAJIARAAIAAAPIgWAAIAAAQIAUAAIAAAMIgUAAIAAARIATAAIAAANIgTAAIAAAUIAYAAIAAAOIg5AAIAAAJgAAgBBIATAAIAAgUIgTAAgAAgAgIATAAIAAgRIgTAAgAAgADIATAAIAAgQIgTAAgAgig0IAAgQIA0AAIgHgPIAMgEQAHAJAEAKIA3AAIAAAQg");
	this.shape_3.setTransform(54.5,-3.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhcBOQAdgSAKgrIgUAAQgIAAgDADQgCgGgEgJQAGgDADgDQAGgFARgXIgdAAIAAgPIAoAAIACgBIAMAFIggArIASAAIAEgBIAJAEQgFAZgIASQAIAOASAEQAPAEAbAAQAoAAAggDQgEAGgDAMQgcABglAAQgdAAgQgEQgUgGgKgOQgKARgPAKQgFgHgIgFgAAsAuIASAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAgPIgfAAIAAAfIgPAAIAAgfIgdAAIAAAfIgQAAIAAhkIAyABQgVgKgKgEIAKgKQANAEANAGQAIgFANgJIhKAAIAAgOIBbAAIAEgBIALAJQgRAPgVAMIAOAHIAYAAIAABTQgBALgGADQgGADgUAAQgBgHgEgHgAAiAPIAfAAIAAgPIgfAAgAgKAPIAdAAIAAgPIgdAAgAAigNIAfABIAAgPIgfAAgAgKgNIAdAAIAAgOIgdAAgAhRhRIAOgIQAPAPAKAOIgOAKQgJgNgQgSg");
	this.shape_4.setTransform(30.75,-3.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhYBLQAwgKAcgUQgUgTgLgbIARgFQAJAXARARQASgRAJgYIATAGQgLAbgVAUQAeAUAtAIQgIAHgDAJQgvgIgfgZQgcAWgxAMQgDgIgIgIgAAVgeIAOgKQAjAXAQARIgQAMQgQgTghgXgAhUgBQAggSAQgVIASAHQgVAZgfATQgGgHgIgFgAhUgsIAAgSIBPAAQgEgJgIgNIARgGQALATADAHIgFACIBLAAIAAASg");
	this.shape_5.setTransform(6.95,-3.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhHBQIAAifIBJAAQBHAAgBA6QAAAdgXAPQgTANgcAAIgjAAIAAAsgAghADIAhAAQAPABAIgEQAKgGAAgQQAAgZgiAAIggAAg");
	this.shape_6.setTransform(33.9252,-26.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIBRQgSAAgagFIAAgiQAWAGARAAQAQAAAGgIQAFgGAAgPIABhjIAmAAIAABqQAAAbgQAOQgPAOgcAAIgCAAg");
	this.shape_7.setTransform(16.9,-26.8742);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSBQIAAh/Ig1AAIAAggICPAAIAAAgIg1AAIAAB/g");
	this.shape_8.setTransform(5.275,-27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},22).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},7).to({state:[]},1).wait(30));

	// sc3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#581916").s().p("AgMC2IAAlrIAZAAIAAFrg");
	this.shape_9.setTransform(-13.45,-15.4001,1,1.3618);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(22).to({_off:false},0).wait(7).to({_off:true},1).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.7,-40.1,149.29999999999998,49.5);


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


(lib.sb_bglight = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.light();
	this.instance.setTransform(37,-903,2.1297,4.4149);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(37,-903,1277.8,2339.9);


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

	// sh_sc5_exp
	this.instance = new lib.sh_sc5exp();
	this.instance.setTransform(-14.25,24.85,1,1,0,0,0,170.8,28.1);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.62)",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:true},1).wait(24).to({_off:false},0).wait(15).to({_off:true},1).wait(6).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190.1,-8.2,355,69);


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

	// sc5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhQBEQgPgZALgrQAMgrAcgXQAcgZAoAAQArAAAPAZQAPAXgMAsQgMAqgdAZQgdAYgoAAQgoAAgPgYgAgRgpQgPAPgHAbQgIAdAIAOQAGANASAAQARAAAOgNQARgPAIgcQAHgagIgQQgHgPgSAAQgSAAgOAPg");
	this.shape.setTransform(16.4921,35.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhYBSIAKgkQAlAJATAAQApAAAHgaQAGgVglAAQgdAAghAGIAlhoIB3ABIgJAjIhUAAIgKAfQAOgCANAAQAiAAAPAQQAPAOgHAZQgIAcgZAQQgaARgmAAQgfAAgegJg");
	this.shape_1.setTransform(-2.275,35.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAqBcIACgIIhCAAIgCAIIgXAAIAPg4QgWALgbAIQgCgMgGgIQAogLAmgXQgJgNgOgNQgOAJgLAFQgEgKgIgIQAygXAfgnIAZAFIgOAPIAtAAIAEgBIAOAIQgaAogmAcIBGAAIgYBYgAgQA/IBBAAIALgmIhCAAgAgMgpQAPAPAIALQAVgQAQgTIgwAAg");
	this.shape_2.setTransform(36.125,35.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhoBWIAFgRIBNAAIACgHIg8AAIAEgPIA8AAIACgGIg4AAIANgxICHAAIgOAxIg5AAIgCAGIA9AAIgEAQIg9gBIgBAHIBOABIgFAQgAALAcIAiABIACgHIgjAAgAgtAcIAiAAIACgGIgigBgAAQAKIAiAAIACgHIgjAAgAgoAKIAiAAIACgHIgiAAgAhMgOIAEgRICxAAIgFARgAguglIAOgwIB+AAIgNAwgAgUgxIBRAAIABgGIhQAAgAgPhDIBRAAIABgGIhQAAg");
	this.shape_3.setTransform(-22.975,35.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkBGQALgFADgMIAliLIBYAAIgYBZIgiAAQAAAMACAJIAcgTIAKARIggATQAHASARAIQgMAJgJALQghgVACg/IgMAAIgOA3IAcgGQgDALgBAKQgrALgLAEQgBgJgEgJgAATgQIArAAIAEgQIgrAAgAAcgzIArAAIAEgPIgrgBgAhmBXIAvitIAuAAIAEgBIAMAJIgeAyQAJATgGAWQgFATgLAHQgGADgGAAIgNABQADgMgCgIIAIAAQAEAAACgBQAFgDABgJQAGgRgKgSIAXgpIgTAAIgqCZg");
	this.shape_4.setTransform(-42.725,36.05);

	this.instance = new lib.Path();
	this.instance.setTransform(-3.3,36.1,1,1,0,0,0,79.7,25.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",0,0,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},16).to({state:[]},1).to({state:[{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},42).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.8,9.6,164,56.99999999999999);


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

	// sb_sc5_exp
	this.instance = new lib.sb_sc5exp("synched",0,false);
	this.instance.setTransform(-580.4,-1.25);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-113.75,alpha:1,startPosition:37},13,cjs.Ease.cubicOut).to({mode:"single",startPosition:59},16).wait(1));

	// sb_sc5_11
	this.instance_1 = new lib.sb_sc511("single",59);
	this.instance_1.setTransform(-519.35,42.85);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:-139.8},10).to({startPosition:59},16).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-770.5,-51.3,821.5,110.8);


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

	// Layer_2
	this.instance = new lib.sb_bglight();
	this.instance.setTransform(-0.1,46.85,1.1274,1.1274,0,0,0,299.9,265);
	this.instance.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(88));

	// sb_circle_copy
	this.instance_1 = new lib.sb_circle2();
	this.instance_1.setTransform(-192,562.1,1.5246,1.5246);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.62,scaleY:1.5126,x:125.25,y:1254.45},39).to({regX:0.1,regY:-0.1,scaleX:1.7375,scaleY:1.498,x:189.45,y:1315.3},48).wait(1));

	// sb_circle
	this.instance_2 = new lib.sb_circle2();
	this.instance_2.setTransform(1288.8,-282.6,2.2359,2.2359);
	this.instance_2.compositeOperation = "lighten";

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0.1,regY:-0.1,scaleX:1.7375,scaleY:1.498,x:1089.1,y:-1423.6},87).wait(1));

	// sc5_bg
	this.instance_3 = new lib.sc5bg();
	this.instance_3.setTransform(144,-1087,1.8216,1.8216);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(88));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-694.6,-1917.3,2720.6,3726.7);


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
p.nominalBounds = new cjs.Rectangle(-83.8,9.6,164,56.99999999999999);


(lib.an_man = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_man
	this.instance = new lib.sb_man("synched",0);
	this.instance.setTransform(75,141.5,1,1,0,0,0,75,141.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:176.45,alpha:1,startPosition:20,loop:false},8).wait(94));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,318);


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

	// sb_sc4_nissan_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("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");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:22.7,y:15.725}).wait(16));

	// Layer_9
	this.instance = new lib.sb_light("synched",0);
	this.instance.setTransform(-316.3,-44.45,1,1,0,0,0,5,0);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({x:324.55,startPosition:13},15,cjs.Ease.none).wait(1));

	// sb_sc4_nissan
	this.instance_1 = new lib.sb_sc4nissan("synched",0);
	this.instance_1.setTransform(-0.1,-11.4,0.5326,0.5326);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1,startPosition:59},12,cjs.Ease.cubicOut).to({startPosition:59},14).wait(1));

	// sb_sc4_season
	this.instance_2 = new lib.sb_sc4season("synched",59);
	this.instance_2.setTransform(24.35,-88.3,0.4567,0.4567,0,0,0,14.7,-23.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({regY:-23,scaleX:1,scaleY:1,x:24.4,y:-88.2,alpha:1},5,cjs.Ease.cubicOut).to({startPosition:59},21).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.3,-104.8,338.1,180.39999999999998);


(lib.an_sc4plan = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sb_sc4plan("synched",59);
	this.instance.setTransform(176.8,28.25,1.5363,1.5363,0,0,0,0.1,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:176.65,y:28.1,alpha:1},17,cjs.Ease.cubicOut).to({startPosition:59},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-14.9,333.2,186.5);


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

	// sb_bg_light
	this.instance = new lib.sb_bglight();
	this.instance.setTransform(0,-8,1,1,0,0,0,300,265);
	this.instance.compositeOperation = "lighten";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:299.9,regY:264.9,scaleX:1.1436,scaleY:1.1436,x:-0.1,y:-8.1},55).wait(1));

	// sb_sc4_bg
	this.instance_1 = new lib.sb_sc4bg("single",42);
	this.instance_1.setTransform(-5.6,0,1.0933,1.0933);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:10.4},55).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300.7,-1343.7,1461.2,2675.9);


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

	// sb_sc3_tjp
	this.instance = new lib.sb_sc3_tjp("synched",22);
	this.instance.setTransform(-203.9,154.7,1.2991,1.2991,0,0,0,1.2,24.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({x:40.25},8,cjs.Ease.cubicOut).wait(1));

	// sb_sc3_lka
	this.instance_1 = new lib.sb_sc3lka("single",52);
	this.instance_1.setTransform(-140.9,-5.55,1.2991,1.2991);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({x:123.6},10,cjs.Ease.cubicOut).wait(1));

	// sb_sc3_icc
	this.instance_2 = new lib.sb_sc3icc("single",52);
	this.instance_2.setTransform(-62.1,-57.9,1.2991,1.2991);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({x:226.3},12,cjs.Ease.cubicOut).wait(1));

	// sb_sc3_pro
	this.instance_3 = new lib.sb_sc3pro("single",84);
	this.instance_3.setTransform(-164.95,-212.85,1.226,1.226);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:136.2},18,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-287.8,-248.8,547.2,383.4);


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
	this.instance.setTransform(552.45,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:233.45,alpha:1,mode:"single"},13,cjs.Ease.cubicOut).wait(47));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(134.5,-46.3,518,92.5);


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
	this.instance.setTransform(34.6,-0.05,1.4781,1.4781);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1,mode:"single",startPosition:59},14,cjs.Ease.cubicOut).wait(1));

	// Layer_10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguBBIAAh/IAMAAIACAJQAPgLASAAQAUAAANAMQANANAAAWQAAAWgPAOQgOAMgTAAQgQABgNgIIAAApgAgegnIAAAvQAMAJAPAAQAPgBAKgJQAIgJAAgOQAAgOgIgKQgJgJgPgBQgQAAgMALg");
	this.shape.setTransform(141.7232,23.1044,1.2303,1.2303);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcA+IAAg3QAAgMgEgFQgFgGgPAAQgQAAgQAMIAABCIgQAAIAAh8IAQAAIAAAqQATgMARABQASgBAJAIQAKAIAAAUIAAA6g");
	this.shape_1.setTransform(127.082,19.0442,1.2303,1.2303);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag9A5QAvgcAEg0IguAAIAAgKIAvAAIAAgfIAKAAIAAAfIA9AAIgBAFQgCAqgDATQgCAUgFAEQgEAFgJABQgKABgNgBQgBgIgDgDIAXABQAFAAACgCQAHgHAEhDIgxAAQgCAagJATQgOAagcARQgFgGgEgCg");
	this.shape_2.setTransform(147.2597,-0.8259,1.2303,1.2303);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdA9QgCgGgCgEIARABQADAAACgBQAEgEACgfIhiAAIAAhMIBlAAIAAAJIgvAAIAAAOIApAAIAAAJIgpAAIAAANIApAAIAAAJIgpAAIAAANIA4AAIAAAFQgDAngGAGQgDAEgGAAIgHAAIgLAAgAgiAHIAhAAIAAgNIghAAgAgigPIAhAAIAAgNIghAAgAgiglIAhAAIAAgOIghAAgAhAA3QAMgKAEgXIAKADQgFAZgMAKgAgbAbIAJgBQAFAPAAANIgJABQAAgLgFgRgAgCAaIAHgCQAHAMADANIgJADQgBgKgHgQgAAVAYIAIgDQAHAIAFALIgIAEQgEgJgIgLg");
	this.shape_3.setTransform(128.5277,-0.4629,1.2303,1.2303);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},15).wait(15));

	// sb_sc2_369
	this.instance_1 = new lib.sb_sc2369("synched",0);
	this.instance_1.setTransform(29.8,85.7,1.4447,1.4447);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1,mode:"single",startPosition:59},9,cjs.Ease.cubicOut).wait(1));

	// Layer_11
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA7AvIAAg2QAAgNgFgFQgFgGgMAAQgPAAgOAMIAABCIgPAAIAAg2QAAgNgEgFQgFgGgMAAQgPAAgOAMIAABCIgRAAIAAhbIAMAAIADAKQARgMARAAQAXAAAGAOQATgOASAAQARAAAIAHQAJAJAAAUIAAA5g");
	this.shape_4.setTransform(166.0401,108.8775,1.218,1.218);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAIIAAgPIA7AAIAAAPg");
	this.shape_5.setTransform(150.7547,107.9641,1.218,1.218);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnA6IAAgQQAWAJARAAQAfAAAAgWIAAgFQgNAHgQAAQgUgBgNgMQgPgNAAgWQAAgWAPgOQAOgNATABQATgBAMAJIACgGIAMAAIAABXQAAAqgvABQgTAAgUgJgAgTgqQgKAJAAAQQAAAQAKAIQAJAJAOgBQAOAAANgIIAAgxQgMgJgPAAQgNAAgKAJg");
	this.shape_6.setTransform(138.8492,111.2221,1.218,1.218);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVA+QgbgfgTgQQAUgYAWgUIAYAAQgeAXgPAUQAJAIATATQAQAQAEAFgAgrA+IAAh8IAQAAIAAB8g");
	this.shape_7.setTransform(126.9132,107.0201,1.218,1.218);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag9A5QAvgbAEg1IguAAIAAgKIAvAAIAAgfIAKAAIAAAfIA9AAIgBAFQgCArgDASQgCAUgFAEQgFAGgIABIgXgBQgBgHgDgEIAXABQAFAAACgCQAHgHAEhDIgxAAQgDA6gyAeg");
	this.shape_8.setTransform(147.0749,85.3001,1.218,1.218);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag9A3IAPAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAgBIAAgmIgUAGIgDgKIAXgGIAAgeIgVAAIAAgJIAVAAIAAgdIAKAAIAAAdIASAAIAAAJIgSAAIAAAbIARgEIAAgDIAUAAIADgmIgRAAIAAgKIBAAAIgBAwIAOAAIAAAJIgOAAIgDAuIARAAIAAAKIhVAAIAAgKIASAAIAEguIgSAAIAAADIgTAFIAAApQAAAJgFACQgGACgOAAQAAgFgDgFgAAKAxIAeAAIACguIgcAAgAAPgGIAcAAIABgmIgaAAg");
	this.shape_9.setTransform(128.7446,85.2697,1.218,1.218);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},20).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.7,-46.1,262.9,173.5);


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

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AHpRUQhBgEhQgIIAAAAIgdgCIAAAAQhigJh2gSIAAAAIgUgDIAAAAIhcgNIAAAAQjdghj1grIAAAAIjMgkIAAAAIi9gkIAAAAQlOg/oIhrIAAAAQhWgSgrgNIAAAAQhGgYgwgjIAAAAQgMgJgKgKIAAAAQglgRgegYIAAAAQg3gugUg8IAAAAQgLghgBgwIAAAAIgChUIAAAAIgHheIAAAAQgEg6AEglIAAAAQAEguAbhSIAAAAQAbhWAGgqIAAAAQAEgigBg2IAAAAQgChHAAgRIAAAAQAEhsAwg3IAAAAQAVgXAogXIAAAAQAugZAVgOIAAAAQBDgpBUhiIAAAAQBqh7AigfIAAAAQBRhIB6g3IAAAAQArgSA7gVIAAAAQB1gxCMgYIAAAAIA6gJIAAAAQCegUDBAJIAAAAQB3AFDnAZIAAAAICXAPIAAAAQB7AMBKADIAAAAIA9ADIAAAAIDOALIAAAAQCYAPBnAxIAAAAQBFAfBKA7IAAAAQAtAkBTBMIAAAAQA2AyAdAWIAAAAQAwAmAtATIAAAAQAdAMA7AQIAAAAIAKACIAAAAQA1AOAaALIAAAAQAnAPA3AkIAAAAIBaA5IAAAAQA/AkCRA2IAAAAQCMA0BCAoIAAAAQAcARAbAVIAAAAIAHAEIAAAAQAWATAVATIAAAAIBHBAIAAAAIABABIAAAAQARAVAQAYIAAAAQAZAjAtBLIAAAAQAlA/AQAjIAAAAQAaA5AHAxIAAAAQAHApgFBBIAAAAQgHBaAAARIAAAAQAAAMAHBfIAAAAQAFBCgHApIAAAAQgIA6giAqIAAAAQglAugzAGIAAAAQgLABgVgDIAAAAIgKANIAAAAIgHAJIAAAAIgWAZIAAAAQhOBThlAzIAAAAIgPAHIAAAAIgSAIIAAAAQhIAfhaAUIAAAAQhMAQiBAPIAAAAQj9Afi/AKIAAAAQiDAIh5AAIAAAAQhjAAhdgFgAbiPOIgKAGIAAAAIgIACIAAAAIASgIgAoWPHQhSgMg8gOIAAAAIgHgCIAAAAIDMAkIAAAAIg3gIgAe6MoIAHgJIAAAAIAAATIAAAAIgFACIAAAAQgLAFgNAIIAAAAIAWgZgAc2kBQgbgVgcgRIAAAAQhCgoiMg0IAAAAQiRg2g/gkIAAAAIhag5IAAAAQg3gkgngPIAAAAQgagLg1gOIAAAAIA8ABIAAAAQAxAAAWAMIAAAAQAPAIAQAQIAAAAIAaAeIAAAAQAsAvBSAhIAAAAQAwATBiAfIAAAAQCbA5B8BnIAAAAIgHgEgAAvwZQhKgDh7gMIAAAAICQADIAAAAIByAPIg9gDgAwhxGIAogEIAAAAIAHgBIAAAAIAIABIAAAAIg6AJIAAAAg");
	var mask_graphics_67 = new cjs.Graphics().p("AHpRUQhBgEhQgHIAAAAIgdgDIAAAAQhigJh2gSIAAAAIgUgDIAAAAIhcgNIAAAAQjdghj1grIAAAAIg3gIIAAAAQhSgMg8gOIAAAAIgHgCIAAAAIi9gjIAAAAQlOhAoIhrIAAAAQhWgSgrgNIAAAAQhGgYgwgjIAAAAQgMgJgKgKIAAAAQglgRgegYIAAAAQg3gugUg8IAAAAQgLghgBgwIAAAAIgChUIAAAAIgHheIAAAAQgEg6AEglIAAAAQAEguAbhSIAAAAQAbhWAGgqIAAAAQAEgigBg2IAAAAQgChHAAgRIAAAAQAEhsAwg3IAAAAQAVgXAogXIAAAAQAugZAVgNIAAAAQBDgqBUhiIAAAAQBqh7AigfIAAAAQBRhIB6g3IAAAAQArgSA7gVIAAAAQB2gxCLgYIAAAAIA6gJIAAAAQCegUDBAJIAAAAQB3AFDnAZIAAAAICXAPIAAAAQB8AMBJADIAAAAIA9ADIAAAAIDOALIAAAAQCYAPBnAxIAAAAQBFAfBKA7IAAAAQAtAkBTBMIAAAAQA2AyAdAWIAAAAQAwAmAtATIAAAAQAdAMA7AQIAAAAIAKACIAAAAQA2AOAZALIAAAAQAnAPA3AkIAAAAIBaA5IAAAAQA/AkCRA2IAAAAQCMA0BCAoIAAAAQAcASAcAUIAAAAIAGAFIAAAAQAWASAVATIAAAAQA+A5AJAHIAAAAIABABIAAAAQARAVAQAYIAAAAQAZAkAtBKIAAAAQAlA/AQAjIAAAAQAaA5AHAxIAAAAQAHApgFBBIAAAAQgHBaAAARIAAAAQAAAMAHBfIAAAAQAFBCgHApIAAAAQgIA6giAqIAAAAQglAugzAGIAAAAQgLABgVgDIAAAAIgKAOIAAAAIAAASIAAAAIgFACIAAAAQgMAFgMAJIAAAAQhOBShlAzIAAAAIgPAHIAAAAIgKAGIAAAAIgIACIAAAAQhIAfhaAUIAAAAQhMAQiBAPIAAAAQj9Afi/AKIAAAAQiDAIh5AAIAAAAQhkAAhcgFgAc3kBQgcgUgcgSIAAAAQhCgoiMg0IAAAAQiRg2g/gkIAAAAIhag5IAAAAQg3gkgngPIAAAAQgZgLg2gOIAAAAIA8ABIAAAAQAxAAAWAMIAAAAQAPAIAQAQIAAAAIAaAeIAAAAQAsAvBSAhIAAAAQAwATBiAgIAAAAQCbA4B8BoIAAAAIgGgFgAAvwZQhJgDh8gMIAAAAICQADIAAAAIByAPIg9gDgAwhxGQAUgBAUgDIAAAAIAHAAIAAAAIAIAAIAAAAIg6AJIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:574.9736,y:-25.723}).wait(67).to({graphics:mask_graphics_67,x:574.9854,y:-25.7279}).wait(1).to({graphics:null,x:0,y:0}).wait(16));

	// sb_sc2_bg_copy
	this.instance = new lib.sb_sc2bg("synched",0);
	this.instance.setTransform(43.85,-31.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(67).to({startPosition:67},0).to({_off:true},1).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(358.9,-137,309.4,222.6);


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
	var mask_graphics_17 = new cjs.Graphics().p("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");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_graphics_17,x:14.075,y:-0.375}).wait(22));

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
p.nominalBounds = new cjs.Rectangle(-65.6,-19.2,159.3,37.7);


(lib.an_sc1car = function(mode,startPosition,loop,reversed) {
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
	var mask_graphics_0 = new cjs.Graphics().p("EAF6BbcQkGgNm3g/QoPhLixgRQmMgmk0AcIkCAdQiYAPhqgHQiMgJhygxQiAg2hMhhQhKhfgdiTQgThkgEiqQgNqDA7sWQAnoCBluUQBwvtAkmoQBFsfABp5QgEmSAEjIQAGlZAsj9QiLgtg8idQg6iXA3iRQAziGCBhiQB0hZCbgqQB+giCqgIQBDgEDrAAQBSAAEogGQDpgECRADQGyAKEzBaQCvAzDvBuQCHA/EOCAQCTBBC8BJQBxArDjBSQHJClDvBAQGJBpFFABQDnABAeACQCTAMBeA6QB+BMAqCbQAoCUg9B8QA4AsAjA2QAXAgATAnQAtBeAFB1QAEBRgOCHQgRCggBA4QgFC4BDEMIA7DgQAkCHASBaQBNGMg8HdQgwFyiQHsIiKHVQhLENgdDPQgZCzgGDzQgDCNgBEcQgDD9gQCpQgVDjg2C5QhaE6i5B/QhsBLixAeQg7AKhhALIibARQj7AgmwCSQj8BVhUAaQi/A6iYAdQjtAskXAAQhYAAhdgEgEg79hbWIAIgJIA4APQDZA8DDBKQkLAOkLASQgLhWBFhWg");
	var mask_graphics_20 = new cjs.Graphics().p("EAF6BbcQkGgNm3g/QoPhLixgRQmMgmk0AcIkCAdQiYAPhqgHQiMgJhygxQiAg2hMhhQhKhfgdiTQgThkgEiqQgNqDA7sWQAnoCBluUQBwvtAkmoQBFsfABp5QgEmSAEjIQAGlZAsj9QiLgtg8idQg6iXA3iRQAziGCBhiQB0hZCbgqQB+giCqgIQBDgEDrAAQBSAAEogGQDpgECRADQGyAKEzBaQCvAzDvBuQCHA/EOCAQCTBBC8BJQBxArDjBSQHJClDvBAQGJBpFFABQDnABAeACQCTAMBeA6QB+BMAqCbQAoCUg9B8QA4AsAjA2QAXAgATAnQAtBeAFB1QAEBRgOCHQgRCggBA4QgFC4BDEMIA7DgQAkCHASBaQBNGMg8HdQgwFyiQHsIiKHVQhLENgdDPQgZCzgGDzQgDCNgBEcQgDD9gQCpQgVDjg2C5QhaE6i5B/QhsBLixAeQg7AKhhALIibARQj7AgmwCSQj8BVhUAaQi/A6iYAdQjtAskXAAQhYAAhdgEgEg79hbWIAIgJIA4APQDZA8DDBKQkLAOkLASQgLhWBFhWg");
	var mask_graphics_22 = new cjs.Graphics().p("EAF6BbcQkGgNm3g/QoPhLixgRQmMgmk0AcIkCAdQiYAPhqgHQiMgJhygxQiAg2hMhhQhKhfgdiTQgThkgEiqQgNqDA7sWQAnoCBluUQBwvtAkmoQBFsfABp5QgEmSAEjIQAGlZAsj9QiLgtg8idQg6iXA3iRQAziGCBhiQB0hZCbgqQB+giCqgIQBDgEDrAAQBSAAEogGQDpgECRADQGyAKEzBaQCvAzDvBuQCHA/EOCAQCTBBC8BJQBxArDjBSQHJClDvBAQGJBpFFABQDnABAeACQCTAMBeA6QB+BMAqCbQAoCUg9B8QA4AsAjA2QAXAgATAnQAtBeAFB1QAEBRgOCHQgRCggBA4QgFC4BDEMIA7DgQAkCHASBaQBNGMg8HdQgwFyiQHsIiKHVQhLENgdDPQgZCzgGDzQgDCNgBEcQgDD9gQCpQgVDjg2C5QhaE6i5B/QhsBLixAeQg7AKhhALIibARQj7AgmwCSQj8BVhUAaQi/A6iYAdQjtAskXAAQhYAAhdgEgEg79hbWIAIgJIA4APQDZA8DDBKQkLAOkLASQgLhWBFhWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:620.0064,y:328.8097}).wait(20).to({graphics:mask_graphics_20,x:620.0064,y:328.8097}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_22,x:620.0064,y:328.8097}).wait(29));

	// sb_sc1_bg_copy
	this.instance = new lib.sb_sc1bg("synched",0);
	this.instance.setTransform(66.9,-153.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({startPosition:20},0).to({_off:true},1).wait(1).to({_off:false,startPosition:22},0).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(405.9,-256.8,529.9,1086.9);


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
	this.instance.setTransform(180.45,868.35,1.4116,1.4116);
	this.instance.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1685,scaleY:1.0273,x:-185.1,y:427.45},22).to({scaleX:1.2068,scaleY:1.0335,x:-647.65,y:404.05},5).to({scaleX:1.3829,scaleY:1.3829,x:-1143.95,y:185.95},23).wait(1));

	// sc1
	this.instance_1 = new lib.sc1zone();
	this.instance_1.setTransform(392.75,182.6,0.9215,0.9215,0,0,0,274.9,69.2);
	this.instance_1.alpha = 0.0508;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(51));

	// an_sc1_car
	this.instance_2 = new lib.an_sc1car("synched",22);
	this.instance_2.setTransform(-334.25,186.15,1.1035,1.1031,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1.1033,x:-338.2,mode:"single",startPosition:50},50).wait(1));

	// sb_sc1_bg
	this.instance_3 = new lib.sb_sc1bg("synched",21);
	this.instance_3.setTransform(-267.35,21.55,1.0938,1.0938);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-264.5,mode:"single",startPosition:43},50).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1599.9,-1076.6,2298.4,2410.3999999999996);


(lib.sb_wheelf = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AjRDSQhWhXAAh7QAAh6BWhXQBXhWB6AAQB7AABXBWQBWBXAAB6QAAB7hWBXQhXBWh7AAQh6AAhXhWg");
	mask.setTransform(22.4146,22.45);

	// sb_sc3_bg_copy_copy
	this.instance = new lib.sb_sc3bg("synched",23);
	this.instance.setTransform(-631.2,-61.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.sb_wheelb = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AikClQhEhEAAhhQAAhgBEhEQBEhEBgAAQBhAABEBEQBEBEAABgQAABhhEBEQhEBEhhAAQhgAAhEhEg");
	mask.setTransform(22.1398,22.4323);

	// sb_sc3_bg_copy_copy
	this.instance = new lib.sb_sc3bg("synched",23);
	this.instance.setTransform(-393.15,-60.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-0.9,46.7,46.699999999999996);


(lib.anan_sc2car = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// an_sc2_car
	this.instance = new lib.an_sc2car("synched",0);
	this.instance.setTransform(-358.85,138.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(83));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,370.5,237.6);


(lib.an_wheelb = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_wheel_b
	this.instance = new lib.sb_wheelb("synched",0);
	this.instance.setTransform(22.25,22.2,1,1,0,0,0,22.1,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90,x:22.15,startPosition:52},52,cjs.Ease.cubicOut).wait(32));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-1.1,47.300000000000004,47.2);


(lib.an_sc5free = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-396.95,229.1,2.0699,2.0699,0,0,0,0,-0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,x:-79.45,y:229.3,alpha:1,mode:"single",startPosition:59},10,cjs.Ease.cubicOut).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209.7,174.9);


(lib.ab_wheelf = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_wheel_f
	this.instance = new lib.sb_wheelf("synched",0);
	this.instance.setTransform(22.55,22.5,1,1,0,0,0,22.4,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90,x:22.45,startPosition:52},52,cjs.Ease.cubicOut).wait(32));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-7.1,59.599999999999994,59.5);


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
	this.instance.setTransform(70.85,-2.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).wait(55).to({startPosition:36},0).to({_off:true},1).wait(9).to({_off:false},0).wait(1));

	// an_arr
	this.instance_1 = new lib.an_arr("synched",3,false);
	this.instance_1.setTransform(57.65,-2.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37).to({_off:false},0).wait(55).to({startPosition:36},0).to({_off:true},1).wait(9).to({_off:false},0).wait(1));

	// MergedLayer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA+B8QgBgKgEgGIAYABQAGAAACgCQAGgGAEggIimAAIAAgBIgNAAIAAhjIC1AAIAAAOIhMAAIAAAQIBBAAIAAALIhBAAIAAAPIBCAAIAAANIhCAAIAAAQIBeAAIgBAHQgEAxgJAIQgFAGgKAAIgKABIgSgBgAg8A2IBCAAIAAgQIhCAAgAg8AZIBCAAIAAgPIhCAAgAg8gBIBCAAIAAgQIhCAAgAh1BxQAPgNARgbIARAJQgYAhgIAJgAgyBRIARgDQAHATACATIgSADQgBgQgHgWgAgFBRIAOgFQANAWAEAMIgQAGQgGgRgJgSgAAlBPIAOgHQAOANAHANIgPAHQgGgLgOgPgAh2grQAjgNALghIgnAAIAAgQIArAAIADgTIATAAIgCATIA3AAIgBAIQgCAqgHAIQgEAEgKABQgIABgRgBQgBgKgEgFIAWABQAFAAACgDQAEgEACgaIgoAAQgMArgrARQgGgKgFgEgAAWgtIAAhBIBgAAIAABBgAApg9IA5AAIAAghIg5AAg");
	this.shape.setTransform(31.825,-2.43);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA0gzIhQAAIAAgTIBPAAIgBg0IAUAAIAAA0IA1AAIAAATIg0AAQADBEAIAsQAJAsALAAQAGAAABgsQAHAHAJAEQgDAegFAMQgGALgMAAQgoAAgHiwgAhxB5IAAhcIBKAAIAABPIg4AAIAAANgAhfBbIAmAAIAAgtIgmAAgAgjBVIAigIIAAhIIgdAAIAAgRIBLAAIAAARIgdAAIAABDIAmgKIACARIhVAZgAhwAJIAAgPIBJAAIAAAPgAhwgZIAAgQIBJAAIAAAQgAh8g8IAAgRIBZAAIAAARgABNhtIANgIQARARAIAQIgPAKQgIgRgPgSgAhih0IAQgIQAPAVAFAOIgQAJQgGgPgOgVg");
	this.shape_1.setTransform(-0.15,-2.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AApB7QgBgKgFgKQARACAWgBQAHAAAEgDQAGgHADgjQAEgiAChOIhOAAQgLAYgLAPIgRgLQAagiAQg/IATADQgGAYgJAXIBbAAIAAALQgDBcgDAjQgDAlgIAJQgHAKgPABIgOABIgagBgAh3BxQALgVAHgqIASAFQgIAngKAaQgJgEgJgDgAhEA1IAQgEQAIAtABAPIgRAEQgCgagGgigAgjAwIAPgFQAMAcAGAYIgQAGQgGgagLgbgAANgGIAOgLQAhAfAPAbIgPALQgNgZgighgAh1AUQAGgBAQgQQAJgIATgYQgnAFgGADQgCgLgEgIQAGgCALgNQAZgeARgmIATAIQgWApgbAfIAkgEIAVggIASALQgjAyghAgIA0gIIgJgYIAQgEQANAeAGAYIgSAGIgDgPQhPAMgGAEg");
	this.shape_2.setTransform(-33.525,-2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA/BTIAPgKQAdAQAUASIgQAMQgRgQgfgUgAgjBpQAkgNAUgUIASAKQgZAXgkAOgAh0BiQAYABAGgBQAFAAAAgEIAAhrIgtAAIAAgSIBGAAQgZgWgfgRIALgNIAbAQQAPgPAMgQIhJAAIAAgSIBWAAIAEgCIANAJQgTAegYAWQAMAJAKAJIgHAIIAUAAIADAAIAMADQgOApgJARIgPgEQAIgQAHgXIgdAAIAABrQAAAQgKAEQgIAEgeAAQgBgIgFgMgAgFBDIAAiNIAoAAIAFgZIg3AAIAAgSICIAAIAAASIg6AAIgIAZIA5AAIAACNgAANAzIBPAAIAAgbIhPAAgAANAJIBPAAIAAgaIhPAAgAANgfIBPAAIAAgbIhPAAg");
	this.shape_3.setTransform(-65.575,-1.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},16).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},55).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).wait(1));

	// Layer_5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0080FF").s().p("Ax9EBIiBoBMAl8AAAICBIBg");
	this.shape_4.setTransform(-31.7979,-1.175,1.1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(16).to({_off:true},1).wait(4).to({_off:false},0).wait(2).to({_off:true},1).wait(1).to({_off:false},0).wait(2).to({_off:true},1).wait(9).to({_off:false},0).wait(55).to({_off:true},1).wait(9).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.5,-26.9,281.4,51.5);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({startPosition:21},17).to({regX:0.1,regY:0.1,scaleX:0.7876,scaleY:0.7876,x:0.1,y:0.1,startPosition:25},3).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0,startPosition:21},3).to({regX:0.1,regY:0.1,scaleX:0.7876,scaleY:0.7876,x:0.1,y:0.1,startPosition:25},3).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0,startPosition:37},3).to({mode:"single",startPosition:102},56).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.5,-26.9,281.4,51.5);


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

	// an_sc4_plan
	this.instance = new lib.an_sc4plan("synched",0,false);
	this.instance.setTransform(395.2,-154.75,1.7214,1.7214,0,0,0,176.8,27.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75));

	// an_sc4_tt
	this.instance_1 = new lib.an_sc4tt("synched",0,false);
	this.instance_1.setTransform(376.95,-441.9,1.2883,1.2883,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75));

	// an_sc4_bg
	this.instance_2 = new lib.an_sc4bg("synched",0,false);
	this.instance_2.setTransform(-30.25,0,1.0671,1.0671);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-351.1,-1433.7,1559.1999999999998,2855.2);


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

	// an_wheel_b
	this.instance = new lib.an_wheelb("synched",0);
	this.instance.setTransform(438.85,56.45,1,1,0,0,0,22.2,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({startPosition:79},0).to({_off:true},1).wait(3).to({_off:false,startPosition:83},0).wait(1));

	// ab_wheel_f
	this.instance_1 = new lib.ab_wheelf("synched",0);
	this.instance_1.setTransform(677.1,57.15,1,1,0,0,0,22.4,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({startPosition:79},0).to({_off:true},1).wait(3).to({_off:false,startPosition:83},0).wait(1));

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgmPAVCIwngeQlBgJiigSIAAAAQkMgejIhJIAAAAQjwhYisilIAAAAQi8izg3jgIAAAAQgIgdgPhRIAAAAQgMhHgNgoIAAAAQgQg5gshbIAAAAQg0hqgPgnIAAAAQhYjjBEj/IAAAAQBDj7C7ijIAAAAQB/huC9hLIAAAAQCLg2DagzIAAAAQPSjjPvA+IAAAAQC5AMCCAUIAAAAQCpAZCIAvIAAAAQAtAPArARIAAAAIQ8AEQFHAACjgEIAAAAQEQgEDagTIAAAAQBrgJDUgTIAAAAQC4gMCHAKIAAAAQA4AGBfAMIAAAAQBvARAoAEIAAAAIBMAHIAAAAICsAPIAAAAQCQAQBgAlIAAAAQB8AwBiBhIAAAAQBgBjAuB9IAAAAQAmBnABBwIAAAAQgBhwgmhnIAAAAQguh9hghjIAAAAQhihhh8gwIAAAAQhggliQgQIAAAAIisgPIAAAAIAfAAIAAAAQBQgDBFAAIAAAAQASADAWAAIAAAAIBWAEIAAAAQBYAECbAoIAAAAQCHAjB4AhIAAAAQBmAsBoA1IAAAAQBHAnAYALIAAAAQA1AbBVAlIAAAAICJA+IAAAAQCBA7CKBOIAAAAIBMAqIAAAAQAeAPAeAKIAAAAQAgAUBCAPIAAAAQBYATB/AKIAAAAQCQAJBHAHIAAAAQCEAKCCAWIAAAAIAKABIAAAAIAQACIAAAAIBTAPIAAAAIC8AnQDjAuCDAeIAAAAIARAJIAAAAQARAHASADIAAAAIAIAEIAAAAQAUAIAcAJIAAAAQAPAHAgAKIAAAAQArAPAxAVIAAAAQBZAkApAZIAAAAQATAKAgAYIAAAAQAiAYARAKIAAAAQARALAiATIAAAAQAfARARAQIAAAAQANAOARAVIAAAAIAbAkIAAAAIAQATIAAAAQAtCHAHCEIAAAAQACAmABBKIAAAAQAEBAALAuIAAAAIADAKIAAAAQgLBTgOAvIAAAAQgVBSgtAzIAAAAQghAkg0AfIAAAAQgjAWg/AbIAAAAQiMBAhiAiIAAAAQiEAzhzAYIAAAAQhpAWiDALIAAAAQhWAHiZAGIAAAAQo2AUpIAAIAAAAQhpAAhVgBIAAAAIhqgIIAAAAIg5gCIAAAAQhBgHgbAAIAAAAIgIABIAAAAQkFgPixgBIAAAAQhAAAh8AAIAAAAQhDAHhUAEIAAAAIvgA8IAAAAQpJAkmWARIAAAAQsDAgqDgIIAAAAIgQAIIAAAAQicBLjWAUIAAAAQhUAHiAAAIAAAAQhRAAhigDgEAhSgD8QBJBUCbChIAAAAQB/CSAvCDIAAAAQAiBeAABjIAAAAQAAhjgiheIAAAAQgviDh/iSIAAAAQibihhJhUIAAAAIAAAAgEAkwgFMQAfAAAWgDIAAAAQAOgBAIgFIAAAAIgEgHQgkAGgjAKg");
	var mask_graphics_79 = new cjs.Graphics().p("EgmPAVCIwngeQlBgKiigRIAAAAQkMgejIhJIAAAAQjwhZisikIAAAAQi8izg3jgIAAAAQgIgdgPhRIAAAAQgMhHgNgoIAAAAQgQg5gshbIAAAAQg0hqgPgnIAAAAQhYjkBEj+IAAAAQBDj7C6ikIAAAAQCAhuC9hKIAAAAQCLg2Dag0IAAAAQPSjjPvA/IAAAAQC5ALCCAVIAAAAQCpAZCIAuIAAAAIBYAhIAAAAIQ8ADQFHAACjgDIAAAAQEQgEDagTIAAAAQBqgJDVgTIAAAAQC4gNCHALIAAAAQA4AGBfAMIAAAAQBuARApADIAAAAIBMAIIAAAAICsAPIAAAAQCPAQBhAkIAAAAQB8AxBiBhIAAAAQBgBjAuB9IAAAAQAmBnAABwIAAAAQAAAXgBAYIAAAAQgKCIg/B3IAAAAQBKBTCbCiIAAAAQB/CSAvCCIAAAAQAiBgAABjIAAAAQAABjgjBmIAAAAQhHDNisBrIAAAAQhuBDigAeIAAAAQg3AJhVAIIAAAAQhDAHhUAEIAAAAIvgA8IAAAAQpJAjmWARIAAAAQsDAgqDgHIAAAAIgRAHIAAAAQibBMjWAUIAAAAQhTAIh/AAIAAAAQhRAAhkgEgEArPARiIhqgHIAAAAIg5gCIAAAAQhBgHgbAAIAAAAIgIABIAAAAQkGgPiwgBIAAAAQhAgBh8ABIAAAAQBVgIA3gJIAAAAQCggeBuhDIAAAAQCshrBHjNIAAAAQAjhmAAhjIAAAAQAAhjgihgIAAAAQgviCh/iSIAAAAQibiihKhTIAAAAQA/h3AKiIIAAAAQABgYAAgXIAAAAQAAhwgmhnIAAAAQguh9hghjIAAAAQhihhh8gxIAAAAQhhgkiPgQIAAAAIisgPIAAAAIAfgBIAAAAQBQgDBFAAIAAAAQASADAWABIAAAAIBWADIAAAAQBYAFCbAoIAAAAQCHAjB4AhIAAAAQBmAsBnA1IAAAAIBgAyIAAAAQA1AbBVAlIAAAAICJA+IAAAAQCBA7CKBOIAAAAIBMAqIAAAAQAeAPAeAKIAAAAQAgAUBCAPIAAAAQBYATB/AKIAAAAQCQAJBHAGIAAAAQCEALCCAVIAAAAIAKACIAAAAIAQACIAAAAQAoAGArAIIAAAAIC8AnQDjAuCDAfIAAAAIARAIIAAAAQAQAHATAEIAAAAIAIADIAAAAQATAJAdAJIAAAAIAvARIAAAAQArAPAxAUIAAAAQBZAkApAZIAAAAQATALAgAYIAAAAQAiAYARAKIAAAAQARALAiATIAAAAQAfARARAQIAAAAIAeAjIAAAAIAbAkIAAAAIAQATIAAAAQAtCGAHCFIAAAAIADBwIAAAAQAEBAAKAtIAAAAIAEALIAAAAQgLBSgOAwIAAAAQgVBSgtAyIAAAAQghAlg0AfIAAAAQgjAVg/AcIAAAAQiNBAhhAiIAAAAQiEAzhzAYIAAAAQhpAWiDAKIAAAAQhWAIiZAGIAAAAQo2AUpIAAIAAAAQhpAAhVgCgEAkwgFMQAfAAAWgEIAAAAQAOAAAIgFIAAAAIgEgHQgkAFgjALg");
	var mask_graphics_83 = new cjs.Graphics().p("EgmPAVCIwngeQlBgKiigRIAAAAQkMgejIhJIAAAAQjwhZisikIAAAAQi8izg3jgIAAAAQgIgdgPhRIAAAAQgMhHgNgoIAAAAQgQg5gshbIAAAAQg0hqgPgnIAAAAQhYjkBEj+IAAAAQBDj7C6ikIAAAAQCAhuC9hKIAAAAQCLg2Dag0IAAAAQPSjjPvA/IAAAAQC5ALCCAVIAAAAQCpAZCIAuIAAAAIBYAhIAAAAIQ8ADQFHAACjgDIAAAAQEQgEDagTIAAAAQBqgJDVgTIAAAAQC4gNCHALIAAAAQA4AGBfAMIAAAAQBuARApADIAAAAIBMAIIAAAAICsAPIAAAAQCPAQBhAkIAAAAQB8AxBiBhIAAAAQBgBjAuB9IAAAAQAmBnAABwIAAAAQAAAXgBAYIAAAAQgKCIg/B3IAAAAQBKBTCbCiIAAAAQB/CSAvCCIAAAAQAiBgAABjIAAAAQAABjgjBmIAAAAQhHDNisBrIAAAAQhuBDigAeIAAAAQg3AJhVAIIAAAAQhDAHhUAEIAAAAIvgA8IAAAAQpJAjmWARIAAAAQsDAgqDgHIAAAAIgRAHIAAAAQibBMjWAUIAAAAQhTAIh/AAIAAAAQhRAAhkgEgEArPARiIhqgHIAAAAIg5gCIAAAAQhBgHgbAAIAAAAIgIABIAAAAQkGgPiwgBIAAAAQhAgBh8ABIAAAAQBVgIA3gJIAAAAQCggeBuhDIAAAAQCshrBHjNIAAAAQAjhmAAhjIAAAAQAAhjgihgIAAAAQgviCh/iSIAAAAQibiihKhTIAAAAQA/h3AKiIIAAAAQABgYAAgXIAAAAQAAhwgmhnIAAAAQguh9hghjIAAAAQhihhh8gxIAAAAQhhgkiPgQIAAAAIisgPIAAAAIAfgBIAAAAQBQgDBFAAIAAAAQASADAWABIAAAAIBWADIAAAAQBYAFCbAoIAAAAQCHAjB4AhIAAAAQBmAsBnA1IAAAAIBgAyIAAAAQA1AbBVAlIAAAAICJA+IAAAAQCBA7CKBOIAAAAIBMAqIAAAAQAeAPAeAKIAAAAQAgAUBCAPIAAAAQBYATB/AKIAAAAQCQAJBHAGIAAAAQCEALCCAVIAAAAIAKACIAAAAIAQACIAAAAQAoAGArAIIAAAAIC8AnQDjAuCDAfIAAAAIARAIIAAAAQAQAHATAEIAAAAIAIADIAAAAQATAJAdAJIAAAAIAvARIAAAAQArAPAxAUIAAAAQBZAkApAZIAAAAQATALAgAYIAAAAQAiAYARAKIAAAAQARALAiATIAAAAQAfARARAQIAAAAIAeAjIAAAAIAbAkIAAAAIAQATIAAAAQAtCGAHCFIAAAAIADBwIAAAAQAEBAAKAtIAAAAIAEALIAAAAQgLBSgOAwIAAAAQgVBSgtAyIAAAAQghAlg0AfIAAAAQgjAVg/AcIAAAAQiNBAhhAiIAAAAQiEAzhzAYIAAAAQhpAWiDAKIAAAAQhWAIiZAGIAAAAQo2AUpIAAIAAAAQhpAAhVgCgEAkwgFMQAfAAAWgEIAAAAQAOAAAIgFIAAAAIgEgHQgkAFgjALg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:71.466,y:727.5522}).wait(79).to({graphics:mask_graphics_79,x:71.4679,y:727.5564}).wait(1).to({graphics:null,x:0,y:0}).wait(3).to({graphics:mask_graphics_83,x:71.4679,y:727.5564}).wait(1));

	// sb_sc3_bg_copy
	this.instance_2 = new lib.sb_sc3bg("synched",23);
	this.instance_2.setTransform(23.65,-26.25);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({startPosition:18},0).to({_off:true},1).wait(3).to({_off:false,startPosition:22},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(91.7,27.6,615.3,834.9);


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
	this.instance.setTransform(-316.05,277.35,0.8717,0.6502,0,0,0,-0.1,-0.1);
	this.instance.alpha = 0.5508;
	this.instance.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,scaleX:1.3829,scaleY:1.3829,x:-979.75,y:483.4,alpha:1},91).wait(1));

	// sb_circle
	this.instance_1 = new lib.sb_circle();
	this.instance_1.setTransform(-59.8,608.7,0.9843,1.1946,-14.9989,0,0,0.2,-0.1);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.9439,scaleY:1.1945,rotation:-10.4343,x:291.4,y:877.85,alpha:0.25},34).to({scaleX:0.8764,rotation:-2.7823,x:770.1,y:867.15,alpha:1},57).wait(1));

	// sb_sc3_bg
	this.instance_2 = new lib.sb_sc3bg("synched",23);
	this.instance_2.setTransform(0,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(92));

	// sb_sc3_car
	this.instance_3 = new lib.sb_sc3car("single",0);
	this.instance_3.setTransform(55,26.2,0.954,0.9539);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:0.9536,mode:"synched"},11).to({scaleY:0.9539,x:71,mode:"single",startPosition:83},80,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1435.7,-981.8,2513.3,2303.5);


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
	this.instance.setTransform(-1190.3,301.65,0.9605,0.915);
	this.instance.compositeOperation = "lighten";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,regY:-0.1,scaleX:1.1228,scaleY:1.299,x:-179,y:525.4},32).to({regX:0,regY:0,scaleX:1.3829,scaleY:1.3829,x:-78.65,y:482.9},51).wait(1));

	// sb_circle
	this.instance_1 = new lib.sb_circle();
	this.instance_1.setTransform(-108.8,86.85,1.1749,1.1749);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.2576,scaleY:1.2576,x:297.8,y:574.05,alpha:0.3711},33).to({scaleX:1.3829,scaleY:1.3829,x:914,y:695.75,alpha:1},50).wait(1));

	// sc2
	this.instance_2 = new lib.sc2power();
	this.instance_2.setTransform(395.2,968.45,1.1536,1.1536,0,0,0,223.6,58.5);
	this.instance_2.alpha = 0.1016;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84));

	// anan_sc2_car
	this.instance_3 = new lib.anan_sc2car("single",0);
	this.instance_3.setTransform(624.6,11.75,1,1,0,0,0,245.6,118.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84));

	// sb_sc2_bg
	this.instance_4 = new lib.sb_sc2bg("synched",0);
	this.instance_4.setTransform(64,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(84));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1507,-1078,2877,2229.7);


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

	// sc1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIBrIAAhyIg4AAIAABXIgPAAIAAhmIBHAAIAAggIhfAAIAAgQIBlAAQgGgOgKgQIAOgGQANAXAEAMIgDABIBdAAIAAAQIhgAAIAAAgIBLAAIAABRQAAANgJADQgKADgeABQgCgGgEgKIAjABQAEgBAAgFIAAhBIg7AAIAAByg");
	this.shape.setTransform(615.0215,-477.1975,1.7984,1.7984);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhnBiIAAgPIBYAAIAAi0IAPAAIAABHIBXAAIAAAQIhXAAIAABdIBnAAIAAAPg");
	this.shape_1.setTransform(529.5097,-477.6921,1.7984,1.7984);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDBfQAbgYALgkQAGgXAAghIAAgKIAOAAIAAAfQAOBIAnAUQgIAGgDAHQgfgTgQg1QgKArggAeQgGgHgFgEgAg5BpIAAhNIgxAAIAAgNIBuAAIAAANIguAAIAABNgAhqBUQAMgUAJgbIANADQgJAbgOAXQgFgEgGgCgAgbAqIALgFQANAVAEAPIgLAGQgFgOgMgXgAgEgKQATggAIg/IAPACQgEAbgEANIA8AAIACgBIALADQgJAngJAVIgMgEQAGgPAGgdIg5AAQgJAdgLATgAhfgDIAAgNIBbAAIAAAGIAAAHgAgEgKIAAAAgAhhgjIAAgNIAoAAIAAgVIguAAIAAgNIAuAAIAAgWIAPAAIAAAWIAsAAIAAANIgsAAIAAAVIApAAIAAANg");
	this.shape_2.setTransform(444.0878,-476.9727,1.7984,1.7984);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVBcQAigPAWgfQgQgfgKgmQgIARgIALQgFgFgHgEQAagjANhCIAPACQgFAXgGARIBMAAIAAAPIgPAAQgKA6gWAkQAVAfAeAOQgFAEgFAJQgdgPgVgeQgWAdgiASQgDgHgGgHgAASguQAJAtARAgQARggAIgvIgyAAgAhnBNQAHgDAAgJIAAhXIA+AAIAAg0IhBAAIAAgOIBRAAIAABRIg/AAIAABKIA+gXIADAPQhJAcgIAGQgCgKgEgGg");
	this.shape_3.setTransform(359.0256,-476.9278,1.7984,1.7984);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABABqIAAh1IgiAAIAAAJQAABJgYAiQgGgHgFgCQAVggAAhCIAAhPQAygJAXgJIAMALQgZAKguAHIAAAuIBLAAIAAAOIgaAAIAAB1gAg4BqIAAhRIgvAAIAAgOIAvAAIAAgYIgwAAIAAgNIBBAAQAIgUAFgSIAOADIgNAjIAdAAIAAANIgtAAIAAAYIArAAIAAAOIgrAAIAABRgAhnBQQAOgRAIgZIAMADQgIAZgPAWgAgdAqIALgFQAOAVAEAQIgKAGQgJgWgKgQgAhUg9IAMgDQAIASACAPIgNADQgCgOgHgTgAhkhCIAAgNIAvAAIgLgWIAPgEQAGAKAHAQIAlAAIAAANg");
	this.shape_4.setTransform(273.0193,-477.2425,1.7984,1.7984);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhhBjIAAgOIBZAAIAAgpIhCAAIAAgNIBCAAIAAgkIg4AAIAAgOICBAAIAAAOIg6AAIAAAkIBDAAIAAANIhDAAIAAApIBcAAIAAAOgAhqgQQAXgLAYgTQAYgSASgUIgsAAIAAgOIBFAAQAQAYAcAWQAbAVAcAMQgHAGgEAIQgagNgagVQgbgVgRgYQgSAWgaAXQgbAWgZANQgEgHgGgFg");
	this.shape_5.setTransform(187.5525,-477.0626,1.7984,1.7984);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(66));

	// sc1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ADHD+QgehXgZg9IkiAAQgiBZgVA7IgyAAQA8i2BNikQA5h3AegqIA5AAQAeAtA3B0QBNClA8C1gAiAA8ID+AAQgohfglhQQgihIgPgZQg0BUhMC8g");
	this.shape_6.setTransform(622.076,-377.4698,1.2067,1.2067);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AECD+QgvlegihkQhRDBhNDNIglAAQhOjQhRi9QgjB+guFDIgwAAQAejSAZiBQARhQAXhYIA8AAQApBcAyB9IA8CaQBOjNBKimIA9AAQAZBfAPBJQAbCDAbDQg");
	this.shape_7.setTransform(514.1371,-377.4698,1.2067,1.2067);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXD+IAAn7IAvAAIAAH7g");
	this.shape_8.setTransform(425.5958,-377.4698,1.2067,1.2067);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYD+IAAnOIjKAAIAAgtIHEAAIAAAtIjJAAIAAHOg");
	this.shape_9.setTransform(348.1259,-377.4698,1.2067,1.2067);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AixD+IAAn7IAyAAIAAHOIExAAIAAAtg");
	this.shape_10.setTransform(269.5701,-377.4698,1.2067,1.2067);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ADID+QgahKgehKIkiAAQgiBZgVA7IgyAAQA8i3BNijQA5h4AegpIA5AAQAeArA3B2QBNCkA8C2gAiAA8ID+AAQgohfglhQQgihIgPgZQg2BXhKC5g");
	this.shape_11.setTransform(171.9786,-377.4698,1.2067,1.2067);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(66));

	// an_sc1_heart
	this.instance = new lib.an_sc1heart("synched",0,false);
	this.instance.setTransform(351.25,691.3,2.7697,2.7697,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(66));

	// an_sc1_bg
	this.instance_1 = new lib.an_sc1bg("synched",0,false);
	this.instance_1.setTransform(1.65,-8.45,1.0108,1.0108);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AhRBjQgegZgLglQgLgnAPgpQAPgqAjgWQAogZAyAIQAyAIAdAmQAeAlgEAyQgDAzgiAgQgiAhgzACIgFAAQgvAAgigcg");
	this.shape_12.setTransform(-42.1263,159.5999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.instance_1}]}).wait(66));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1615.5,-1096.7,2323.2,2436.4);


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
	this.instance.setTransform(313.3,841.6,2.041,2.041,0,0,0,-11.9,-0.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).wait(80).to({startPosition:80},0).to({_off:true},1).wait(15));

	// an_sc5_50
	this.instance_1 = new lib.an_sc550("synched",0,false);
	this.instance_1.setTransform(296.15,-42.25,1.8534,1.8534,0,0,0,0.2,34.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).wait(83).to({startPosition:37},0).to({_off:true},1).wait(15));

	// an_sc5_exp
	this.instance_2 = new lib.an_sc5exp("synched",0,false);
	this.instance_2.setTransform(386.9,-196.35,1.3887,1.3887,0,0,0,-128,8.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(87).to({startPosition:29},0).to({_off:true},1).wait(15));

	// an_man
	this.instance_3 = new lib.an_man("synched",0,false);
	this.instance_3.setTransform(492.65,121.2,1.9206,1.9206,0,0,0,75.3,158.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(91).to({startPosition:91},0).to({_off:true},1).wait(15));

	// an_sc5_free
	this.instance_4 = new lib.an_sc5free("synched",0,false);
	this.instance_4.setTransform(406.8,-461.7,3.1228,3.1228,0,0,0,160.8,146.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(91).to({startPosition:29},0).to({_off:true},1).wait(15));

	// an_sc5_bg
	this.instance_5 = new lib.an_sc5bg("synched",0,false);
	this.instance_5.setTransform(-58.25,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(91).to({startPosition:87},0).to({_off:true},1).wait(15));

	// an_sc5_line
	this.instance_6 = new lib.an_sc5line("synched",0,false);
	this.instance_6.setTransform(544.8,-30.35,0.4343,0.8044,0,0,0,346.1,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(91).to({startPosition:87},0).to({_off:true},1).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-752.9,-1918.8,2720.6,3726.7);


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

	// an_sc3_tt
	this.instance = new lib.an_sc3tt("synched",0,false);
	this.instance.setTransform(137.4,-201.25,1.9356,1.9356,0,0,0,-0.5,0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(90).to({startPosition:18},0).to({_off:true},1).wait(9));

	// sc3
	this.instance_1 = new lib.sc3conf();
	this.instance_1.setTransform(516.2,964.3,1.3621,1.3621,0,0,0,278.3,46.6);
	this.instance_1.alpha = 0.1016;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(92).to({_off:true},1).wait(9));

	// an_sc3_bg
	this.instance_2 = new lib.an_sc3bg("synched",0,false);
	this.instance_2.setTransform(29.4,-51.7,1.062,1.062,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(92).to({startPosition:91},0).to({_off:true},1).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1495.4,-1094.2,2649.6000000000004,2391.2);


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

	// an_sc2_num
	this.instance = new lib.an_sc2num("synched",0,false);
	this.instance.setTransform(289.1,-184.75,1.9421,1.9421,0,0,0,0.2,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(81));

	// an_sc2_vc
	this.instance_1 = new lib.an_sc2vc("synched",0,false);
	this.instance_1.setTransform(-154.15,-487.85,2.3983,2.3983);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(81));

	// an_sc2_bg
	this.instance_2 = new lib.an_sc2bg("synched",0,false);
	this.instance_2.setTransform(0,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1506.9,-1086.1,2917.4,2229.7);


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
	this.instance.setTransform(276,-1076,1.5446,1.5446);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(449));

	// sc5
	this.instance_1 = new lib.sc5("single",0);
	this.instance_1.setTransform(85.85,1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(348).to({_off:false},0).to({alpha:1,mode:"synched",loop:false},8).to({startPosition:87},92).wait(1));

	// sc4
	this.instance_2 = new lib.sc4("single",0);
	this.instance_2.setTransform(67.4,-0.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(259).to({_off:false},0).to({alpha:1,mode:"synched",loop:false},8).to({mode:"single",startPosition:42},89).to({alpha:0},8).to({_off:true},1).wait(84));

	// sc3
	this.instance_3 = new lib.sc3("single",0);
	this.instance_3.setTransform(67.4,-0.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(167).to({_off:false},0).to({alpha:1,mode:"synched",loop:false},7).to({mode:"single",startPosition:81},93).to({alpha:0},8).to({_off:true},1).wait(173));

	// sc2
	this.instance_4 = new lib.sc2("single",0);
	this.instance_4.setTransform(67.4,-0.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(71).to({_off:false},0).to({alpha:1,mode:"synched",loop:false},8).to({startPosition:59},95).to({startPosition:59},7).to({_off:true},1).wait(267));

	// sc1
	this.instance_5 = new lib.sc1("synched",0,false);
	this.instance_5.setTransform(67.4,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({startPosition:43},79).to({alpha:0},7).to({_off:true},1).wait(362));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1548.1,-1917.8,3601.7,3726.7);


// stage content:
(lib._160x600 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-48.75,300.15,0.2778,0.2778,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(449).to({startPosition:0},0).wait(448).to({mode:"single",startPosition:448},0).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgODgwbIcHAAMAAABg3I8HAAg");
	this.shape.setTransform(80,300);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgODAwcMAAAhg3IcHAAMAAABg3g");
	this.shape_1.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(898));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-398.7,67.4,920.3,735);
// library properties:
lib.properties = {
	id: 'B292DCCD4A3E42C59A84614B5737EDAF',
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ball.png", id:"ball"},
		{src:"images/light.jpg", id:"light"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/man.png", id:"man"},
		{src:"images/sc1bg.jpg", id:"sc1bg"},
		{src:"images/sc2bg.jpg", id:"sc2bg"},
		{src:"images/sc3bg.jpg", id:"sc3bg"},
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