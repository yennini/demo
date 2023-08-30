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
p.nominalBounds = new cjs.Rectangle(0,0,640,280);


(lib.sc2bg = function() {
	this.initialize(img.sc2bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,280);


(lib.sc3bg = function() {
	this.initialize(img.sc3bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,280);


(lib.sc4bg = function() {
	this.initialize(img.sc4bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,280);


(lib.sc5bg = function() {
	this.initialize(img.sc5bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,280);// helper functions:

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
	this.shape.setTransform(310.7699,29.053,1.1684,1.1684);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aj0DVQgKgKgHgDQAkgoAVhVIAThLIgWAAIAThLIASAAIAkiMICXABIgjCMIASAAIgSBLIgVAAIguCwQgEARgFAJQgHAJgKAFQgKAFgOACIghABQAEgUgFgXIAfABQAGAAACgHIALgsIg1AeIgFgcQgWA9geAhQgFgGgKgJgAifBMIgNAtIA/gbIAFgVIgYAVQgNgRgOgQgAhlA9IALgoIg3AAIgHAcIAUgRQAVASAKALgAijgQIBrABIAFgUIhrgBgAhRhKIARAAIAMguIgRAAgAh/hLIASAAIAUhOIAuAAIAFgUIhAAAgAhODcIALgqIA3AAIgDgjIAegJIgwgBIAZhfIDIABIgZBgIg1gBIAhALIgdAjIA8AAIgKAqgAAiCzIAmAAQARgbAKgSIhFAAIAEAtgAAXBjIBmABIAGgaIhlgBgAgWAVIALgoIDtACIgLAogAAAgkIAnidIA4AAIAJgiIAqAAIgIAjIAUAAIAJgjIArAAIgJAjIA9ABIgpCdgACjhJIAZAAIAGgXIgZAAgABrhJIAXAAIAGgXIgXAAgAAyhKIAYAAIAGgXIgYAAgACyiDIAZAAIAGgWIgZgBgAB6iEIAXABIAGgXIgXAAgABBiEIAYAAIAGgWIgYgBg");
	this.shape_1.setTransform(254.8599,28.8777,1.1684,1.1684);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aj4DQQgIgNgHgGQBMgnAxhlIgngBQgWAAgJAHQABgSgGgdQANgDAPgLQASgOArgwIg8AAIAMgvIBfABIAGgCIAeAQIhjBnIAhABIAJgCIAYALQgXA7gfAvQAMAgAlALQAcAJA+ABQBfABBWgIQgIAJgJARQgKAQgFAMQhAAEhigBQhFgBghgKQgogNgRgjQgiAogqAaQgDgJgIgMgAhMCKIA9jrIBFAAIAMgYIhvAAIAMgwIA+ABQgFgVgIgSIAxgSQAOAhADAQIgSAIIBGAAQAegjAOgXIAyARIgnAqIBLABIgNAvIh+gBIgSAYIBnABIg9DrgAgOBiIB3ABIAGgbIh2gBgAACAiIB3ABIAHgbIh4gBgAASgdIB3ABIAHgbIh3gBgAiKjJIAwgbQAcAqAPAgIgyAgQgNgjgcgsg");
	this.shape_2.setTransform(198.5118,28.1766,1.1684,1.1684);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaC6IAagTIhWgBIAUASQgfAOgwANQgsAMgrAGQgGgPgQgWQA8gHA9gTIgrgBIAbhnQgfAOgeAJQgJgcgNgOQA/gPA3gfIhZgBIAKgnIBxABIADgOIg4gBIAHgdIA5ABIAEgQIg+AAIAEgQIgwAAIAVhSICxABIgEgTIA8gOQAGAUABAOIClABIgVBSIgvAAIgEAQIg/gBIgEAPIA8ABIgHAdIg8AAIgEANIBwABIgJAoIhPgBQAiAZAyAOQgWAPgYAdQgXgJgXgPIgcBuIgngBQAvAQAvASIg2AfQg0gYhEgWgAh2CKIClABIAEgPIilgBgAhrBgIClABIAEgOIimgCgAhhA3IClABIAFgPIimgBgAhFAMICQABIgLgOIhzgBgAgegqIBUABIADgOIhSgBgAgShVIBSABIAEgPIhTgBgACFiTIgFARIA5ABIAGgXIkugDIgFAXIA7ABIAEgRIAzAAIgFARIBTABIAFgRg");
	this.shape_3.setTransform(143.7703,27.4756,1.1684,1.1684);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXC4IAYgSIhTAAIATARQggAPgwANQgtAMgrAGQgKgXgNgQQBBgJA1gQIgzAAIAqijIEyADIgqCiIg1AAQAwAPArARIg4AhQgwgYhMgYgAh9CHIDDABIAEgPIjEgBgAhyBbIDDACIAEgPIjDgCgAhnAwIDDACIAEgPIjDgCgAixgqIBOgDIAEgQIgzAAIAHgdIAzAAIAEgOIg6gBIAFgTIgbAAIAThMICpACIgCgVIA7gMQACAJADAYICpACIgTBLIglAAIgFASIgzAAIgEAOIBQAAIgHAdIhQAAIgHAYIAaAAIAFgUIApABIgNAxIivgCIANgxIAmAAIgFAVIAZAAIAGgZIhMAAIAHgdIAQAAQgJgJgJgFQAfgUAVgdIitgBIgFAQICEACIgJAgIgyAAIgEAPIAvAAIgGAdIgwAAIgEANIA4gCIgJAkIixAJgAA1haIApAAIADgNIgdgBQgHAIgIAGgABoiTIgLAOIBeABIAFgUIh0gBg");
	this.shape_4.setTransform(87.4222,27.125,1.1684,1.1684);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Aj5DLQgKgNgHgEQAhgiAXg0QAPgjAOgzIAVhSICdACIgBgMIgfAAIAOg7IgvAAQAXATAHAQIghAbQgJgUgUgTIAfgXIgeAAIgPA7IgwgBIAXhbICuACIgUBOIAigLIAAABIAShDICyABIgYBaIgxgBIAPg6IgwgBQAYAVAHAPIghAbQgJgUgXgUIAfgXIgdAAIgQA8IgkgBIABALICrABIgJAnIh6gBIgEASIBsABIgYBcIhqgBIgFAVIBjAAIgKAnIhjgBIgFASQgCAKACADQADADAMAAIA0AAQAJABAFgHQAFgFAHgVQANAMAZAFQgNAhgOAMQgOAMgdAAIg/gBQgmAAgKgMQgJgMAJghIAThNIhkgCIgGAWIBXABIgKAlIhWAAIgHAZIBagFQgGAPgFAZQhSAHgeADQgZADgKAEQABgKAAgNQgCgNgCgGQASgHAFgRIAShHIgRAAQghBbgzAzQgFgIgKgMgABNAvIA5ABIAFgWIg4AAgAgfAuIA7ABIAFgWIg6AAgAiLAtIA7AAIAFgVIg5AAIgHAVgAgQgKIA6ABIAFgSIg6gBgAh7gLIA6ABIAFgSIg6gBgAA/i2IAKgmIDCABIgKAmgAiSi4IALgmIC+ACIgKAmg");
	this.shape_5.setTransform(31.1325,27.5632,1.1684,1.1684);

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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AidCLIAJgkIB1AAIAPg7IhXAAIAIgkIBYAAIAMg0IhnAAIAJgkIB6AAQgNgRgXgUIAjgVQAiAZANAVIgTAMIBiAAIgJAkIhnAAIgOA0IBZAAIgJAkIhZAAIgOA7IB3AAIgJAkg");
	this.shape.setTransform(227.5983,-71.4249,0.8923,0.8923);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAggRQg7BphbAvQgJgOgSgQQBnguA5h+IASAEIAEgiIhFAAIAJglIBqAAQgpClBoBHQgYARgOAQQhFgxgHhng");
	this.shape_1.setTransform(198.7551,-70.2426,0.8923,0.8923);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE600").s().p("Ak2DYQAWACAfAAQAMAAACgMIAjiAIhCAQIAAhEIBVgTIAdhsIhGAAIAShDIBGAAIAehxIBDAAIgeBxIA4AAIgSBDIg4AAIgZBbIA7gOIgJBAIhEASIgoCUQgHAbgJANQgJAPgQAHQgbAOhAAAQAEgegGgkgAh+EYIBzmrIB9AAIAjiGIBCAAIgkCGICEAAIhyGnIhEAAIAKgnIi7AAIgMArgABeCoIBAAAIAZhdIhAAAgAgeCoIA7AAIAZhdIg7AAgACJAIIBAAAIAXhXIg/AAgAAMAIIA8AAIAXhXIg7AAg");
	this.shape_2.setTransform(273.0918,-80.4598,0.8923,0.8923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},49).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(185.8,-105.6,115.09999999999997,50.3);


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
	this.shape.setTransform(110.0687,-65.8638,0.9548,0.9548);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah6B0IAkiEQgPAPgMAJQgCgQgEgIQAwgmAmg7IAUAHQgPAYgYAdIguCpgAhSBsIAHgXIBGABIAOg6Ig2AAIAGgWIA2AAIAOgxIg/AAIAGgXICXAAIgGAXIhAAAIgOAxIA5AAIgGAXIg5AAIgQA5IBEAAIgGAXgAAhhrIAYgIQAJAaABAOIgZAIQgBgTgIgVg");
	this.shape_1.setTransform(85.697,-65.8877,0.9548,0.9548);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiOBfQAYgUARg8IATAAIgJAdQADANAHAJIARg/IgxAAIAGgRIBvABIgEARIgsAAIgHAXIAoAAIgFASIgnAAIgJAhQASAIAuAAIBgAAQgKAKgEAJIhXAAQgqAAgUgHQgagIgIgWQgNAcgSAPQgBgIgJgIgAgdBEQAdgMASgRIARAGQgXAXgeAOQgHgLgEgDgAAyAvIATgJQASAPAMARIgUALQgJgRgUgRgAgBAkIAdhvIAgAAIAJgRIgtAAIAEgRIBzAAIgFASIgvgBIgLARIAtAAIgfBvgAAYATIA1AAIAEgQIg1AAgAAggMIA1ABIAFgQIg2AAgAAogrIA2AAIAEgPIg1gBgAhageIAWhQIBVAAIgVBQgAhAgvIAqABIAFgRIgsAAgAg4hOIArAAIAFgQIgsAAg");
	this.shape_2.setTransform(59.9885,-65.3386,0.9548,0.9548);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiABvIAGgXIBiABIAQg4IhMAAIAHgXIBLAAIANgxIhXAAIAHgXIBpAAQgMgSgUgRIAXgOQAZAVAMATIgPAJIBQAAIgGAXIhXAAIgOAxIBMAAIgGAXIhLAAIgPA4IBjAAIgHAXg");
	this.shape_3.setTransform(34.4471,-66.2935,0.9548,0.9548);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoA8IASgNQALAFAVAOQAdgPAYgQIANAOQgWAOgdANQAXAQAKAJIgVAQQgcgcgxgdgAh4BjQANgHADgNIAgh1QgOAGgRAEQgDgLgGgIQAlgKAigRQAkgTAVgXIATALIgGAGQAOAQAZAPQAaAOAbAHQgLAHgKANQghgLgbgVIgDAMIhEAAIADgNQgSALgaAKICPABIgVBPIh4gBIgOAxIA/gJQgEAMgCAIQhOAMgJAEQgBgKgFgHgAhCAXIBhAAIAEgOIhhgBgAg6gGIBhAAIAEgPIhhAAgAgVhAIA2AAQgKgIgMgNQgNALgTAKg");
	this.shape_4.setTransform(11.9134,-66.1025,0.9548,0.9548);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah1AMIAGgYIDlAAIgHAZg");
	this.shape_5.setTransform(-13.7474,-66.2218,0.9548,0.9548);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag6BzIAyi6IApAAQAOgaAHgRIAaADIgXAoIBGAAIgyC4IgYAAIADgKIhYAAIgDAMgAgaBQIBYAAIAPg3IhYAAgAgFADIBYAAIAOgzIhZAAgAh+BgQAeghAhgvIAPAPQgeAqgfAmgAhlgbIARgRQAbANALAMIgSATQgKgNgbgOgAhFhgIASgRQAbANAMANIgTATQgMgPgagNg");
	this.shape_6.setTransform(-39.0978,-65.9593,0.9548,0.9548);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah1ANIAHgZIDkAAIgHAZg");
	this.shape_7.setTransform(-63.1593,-66.3173,0.9548,0.9548);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},27).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},15).to({state:[]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.4,-77.2,196.60000000000002,22.5);


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
	this.shape.setTransform(1308.7431,21.575,1,1.0627,0,-19.785,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1350AD").s().p("A6mDYIicmvMA3pAAAICcGvg");
	this.shape_1.setTransform(1228.55,21.575);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1350AD").s().p("A6nDYIibmvMA3pAAAICcGvg");
	this.shape_2.setTransform(987.95,21.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1350AD").s().p("A6nDYIibmvMA3qAAAICbGvg");
	this.shape_3.setTransform(907.75,21.575);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(13).to({_off:false,x:185.8931},0).wait(74));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(1).to({x:1148.35},0).wait(1).to({x:1068.15},0).to({_off:true},1).wait(9).to({_off:false,x:266.1},0).to({_off:true},1).wait(74));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(5).to({_off:false},0).wait(1).to({x:827.55},0).wait(1).to({x:747.35},0).wait(1).to({x:667.1},0).wait(1).to({x:586.9},0).wait(1).to({x:506.7},0).wait(1).to({x:426.5},0).wait(1).to({x:346.3},0).to({_off:true},1).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1494.7,43.2);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdA3IAVAAQABAAABAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgQIg3AAIAAgJIA3AAIAAgJQARgDAKgFIhFAAIAAgIIBVAAIADgBIAHAGQgSAKgZAHIAAADIA4AAIAAAJIg4AAIAAAQQAAAHgFACQgFACgUgBIgEgIgAgpgEIAAgcIBUAAIAAAcgAgfgMIA/AAIAAgMIg/AAgAg7gpIAAgJIA4AAIgFgKIAJgDQADAFADAIIA0AAIAAAJg");
	this.shape.setTransform(41.3703,-11.5753,2.3425,2.3425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANAxIAUAAQABAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBIAAgVIhJAAIAAAiIgKAAIAAgiIgQAAIAAgJIAQAAIAAgzIAqAAIAAgNIg1AAIAAgKIBzAAIAAAKIg1AAIAAANIAqAAIAAAzIAQAAIAAAJIgQAAIAAAVQgBAJgGACQgFACgTAAQAAgGgDgEgAAFAQIAgAAIAAgQIggAAgAgkAQIAgAAIAAgQIggAAgAAFgJIAgAAIAAgRIggAAgAgkgJIAgAAIAAgRIggAAg");
	this.shape_1.setTransform(-19.5924,-10.4627,2.3425,2.3425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},19).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.shape}]},39).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.3,-26.4,89.9,29.7);


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
	this.instance.setTransform(-21,-17,0.355,0.355);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EggwAAIIAAgPMBBhAAAIAAAPg");
	this.shape.setTransform(6.75,-27.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EggwAAIIAAgPMBBhAAAIAAAPg");
	this.shape_1.setTransform(6.75,26.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiECLIAAgaIB0AAIAAhFIhmAAIAAgaIBmAAIAAgkIhAgBIAAgQQgcAOgRAGQgHgOgNgNQAugNAlgZQAngaAWghIAaAMIgIAMQAXAXAjAUQAkAVAjAKQgNAMgHANQgVgHgZgOIgBATIhBAAIAAAkIBoAAIAAAaIhoAAIAABFIB3AAIAAAbgAg9gtIB/AAQgngXgbgbQgZAcgkAWgAAlBnQAVgdAKgbIAbALQgSAegSAYgAhfA4IAYgJQAVAeAIAYIgZALQgHgYgVggg");
	this.shape_2.setTransform(185.325,-3.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgCNIAAhoIhVAAIAAgdIBVAAIAAg8IgrAAQgJAZgMATQgLgIgOgHQAZgjAMhEIAbAGIgJAoIAiAAIAAg6IAdAAIAAA6IBEAAIAAAcIhEAAIAAA8IBSABIAAAcIhSAAIgBBogAhmCNIAAikQgMASgMALQgFgKgLgSQAtguAahJIAbAJQgMAggTAiIAADPg");
	this.shape_3.setTransform(145.375,-2.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiICIIAAjTIAlAAIAAgkIgqAAIAAgYICSAAIgBAZIgoAAIAAAkIAkAAIAADNIgXAAIAAgRIhaAAIAAAWgAhxBcIBaAAIAAhMIgQAAQgLAAgEgFQgEgEAAgNIAAgsIgSAAIAAAXQAAAkgYAUQgIgIgFgDgAhxARQAUgQAAgdIAAgWIgUAAgAgpgGQAAAFAEAAIAKAAIAEgBIAAgwIgRAAgAhNhLIASABIAAgkIgSAAgAA3CFQgWAAgJgIQgIgIAAgYIAAh/IBWAAIAAhHIhXAAIAAgcIBzAAIAAB+IhVAAIgBBjQAAAJADADQADACAJAAIAoAAQAKAAACgJQADgJACggQAKAIAQAEQgDAngIANQgIANgVAAgAhmBCIAAgXIBEAAIAAAXg");
	this.shape_4.setTransform(106.125,-2.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABCB4IgGACQgBgFgEgNIhFAFIg8AEIgCgaIA/gCIAAgdIhPAAIgBBWIgbAAIAAhWIgMAAIAAgYIAMAAIAAgKIAcAAIAAAKIBPAAIAAgQIhXAAIAAheIDLAAIAABeIhaAAIAAAQIBvAAIAABTQgBALgCAEQgCAGgGACQgIAFgggBQgBgIgGgOgABTByIgOAFQASABAEgBQAFAAAAgFIAAg6IhTAAIAAAcIAggCIgLgRIAVgGQAXAhAFAWgAANgDIA9AAIAAgTIg9AAgAhJgDIA8AAIAAgTIg8AAgAANgoIA9AAIAAgSIg9AAgAhJgoIA8AAIAAgSIg8gBgAAnhTIAAgRIgiAAIAAgYIAiABIAAgSIAcAAIAAASIBFAAIAAAXIhFAAIAAARgAhEhUIAAgQIhDAAIAAgYIBDAAIAAgRIAcAAIAAARIAjAAIAAAYIgjAAIAAARg");
	this.shape_5.setTransform(66.225,-2.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASBvIAAg7IhiAAIAAgYIBaiKIAqAAIAACGIAcAAIAAAcIgcAAIAAA7gAAAgqIgsBCIA+AAIAChkIgCAAQgEAMgOAWg");
	this.shape_6.setTransform(33.05,-2.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AABB8QAbgsAAhhIAAhwIBuAAIAADrQAAAWgOAGQgKAFglAAQgCgOgGgNIAiAAQAHAAAAgGIAAhFIg6AAQgGBEgWAkQgGgHgRgKgAA2ALIA4AAIAAgsIg3gBgAA4g7IA2AAIAAgsIg2AAgAiJB7QAbgWAPgfIAbAIQgSAkgcAaQgIgIgPgJgAgzBSIAWgNQAZAdAIARIgXAOQgJgUgXgbgAiIBBIAAgZIAcAAIABh4IgZAAIAAgZIAZAAIAAgjIAaAAIAAAjIAxAAIAAgjIAaAAIAAAjIAVAAIAAAZIgVAAIAAB4IAUAAIAAAagAhRAoIAwAAIAAgaIgwAAgAhRgIIAwAAIAAgaIgwAAgAhRg4IAxAAIAAgYIgxAAg");
	this.shape_7.setTransform(-47.3,-2.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiDBzQAxgRAWggQASgaAGgqIg7AAIAAgVQgOAPgLAIQgMgNgMgIQA3gmAYhLIAeAHQgUA5giAoICyAAQgigigTgxIgzAAIAAgbIBIAAQALAlAXAdQAZAgAdAQQgMALgIAPQgSgMgKgKIgBAGQgDBHgEAeQgEAfgIAIQgJALgQACQgNACgkgCQAAgOgIgPQASACAZAAQAJAAAEgEQALgLADhhIhGAAQgHAzgUAgQgaAog3ATQgGgOgMgLg");
	this.shape_8.setTransform(-86.4,-2.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABCB4IgGACQgCgJgDgIIiBAHIgCgYIA/gDIAAgdIhPAAIAABWIgcAAIAAhWIgMAAIAAgYIAMAAIAAgKIAcAAIAAAKIBPAAIAAgQIhYAAIABhfIDLABIAABeIhaAAIAAAQIBvAAIgBBTQABAKgCAFQgCAFgHADQgIAEggAAQgDgMgEgKgABTBzIgOAEIAWAAQAFAAAAgEIAAg7IhTAAIAAAcIAfgCIgKgRIAVgGQAXAfAFAZgAANgDIA9AAIAAgSIg9AAgAhJgDIA8AAIAAgSIg8AAgAANgoIA9AAIAAgSIg8gBgAhJgoIA8AAIAAgTIg8AAgAAohTIAAgQIgiAAIAAgZIAiAAIAAgRIAcAAIAAARIBEABIAAAYIhEAAIgBAQgAhDhTIAAgRIhEAAIAAgYIBEAAIAAgRIAcAAIAAARIAjAAIAAAZIgjgBIAAARg");
	this.shape_9.setTransform(-126.15,-3.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABKCGIAAgTIiRAAIAAATIgeAAIABjGIBLAAQAEgTADgWIhzAAIAAgcIEMAAIAAAcIh5AAIgLApIBmAAIAADGgAhHBYICRAAIAAgyIiRAAgAhHAMICRAAIAAgxIiRAAg");
	this.shape_10.setTransform(-165.8,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},16).to({state:[]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},42).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.9,-28,419.3,55.8);


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
	this.instance.setTransform(-454,-293,2.0987,2.0987);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-454,-293,1343.2,587.7);


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
	this.instance.setTransform(-480,-270,2.2258,2.2258);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-270,1424.5,623.3);


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
	this.shape.setTransform(108.6847,22.9134,0.9182,0.9182);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABDBpIABjRIAVAAIAADRgAg2BnQgBgNgGgKQATACAQAAQAHAAAEgDQAHgGAEgwIhUAAQAIgmAEggIBJAAIAAghIhQAAIAAgUIBkAAIAABIIhKAAIgGAfIBSAAIgBAKQgDAmgDARQgEASgGAHQgGAGgOACIgMAAIgYAAg");
	this.shape_1.setTransform(84.8116,23.0741,0.9182,0.9182);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhqBZQALgUADghQACgUABgiIAAhRIDBAAIgBARIitAAIAABAQAABQgTAlQgGgGgLgEgAhJBiIAAgQIBQAAIAAgPIhAgBIAAgPIBAAAIAAgLIAUAAIAAALIA/AAIAAAQIg/AAIAAAPIBOAAIAAAQgAhHAfQAJgLgBgUIAAgaIBOAAIgBAzQAdgUAEghIgdAAIAAgRIAeAAIAAgfIAQAAIAAAfIAlAAIAAARIggAAQAMAnAaANQgJAHgEAIQgWgNgMggQgJAbgbARQgCgDgIgHQgBAGgGACQgFACgVAAQgBgFgEgHIATAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAAAIAAgKIgqALIgDgIQgCANgGAKIgQgJgAguANIAjgIIgggIIAFgIQATADANAFIgEAIIAJgDIAAgQIgsgBgAg7ghIABgqIBEAAIAAAqgAgrgrIAmAAIAAgGIgmgBgAgrg7IAmAAIAAgGIgmAAgABFhFIAMgHQAOAMAFAKIgMAIQgKgOgJgJg");
	this.shape_2.setTransform(61.7189,23.0741,0.9182,0.9182);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABGBrIAAgMIg/AAIAAAMIgSAAIAAhaIBlAAIAABagAAHBQIA/AAIAAgPIg/AAgAAHAxIA/AAIAAgPIg/AAgAhkA4IAagJIABhNIgYAAIAAgUIAYAAIAAg1IATAAIAAA1IAXAAIAAAUIgXAAIAABFIAWgHIAEATIhBAagAgWAFIAAhNIAcAAQgGgNgIgMIARgIQAMANAFANIgPAHIAnAAQANgTAFgPIAWAIIgSAaIAdAAIAABNgAAugJIAkABIABgxIgkAAgAgFgJIAjAAIABgwIgkAAgAAygSQAKgPAGgSIANAFQgJARgKAOgAAAgwIAKgEQAMARADAQIgMAEQgCgMgLgVg");
	this.shape_3.setTransform(37.9376,22.7987,0.9182,0.9182);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNBrIAAhyIBsAAIAABeQAAAMgGAFQgFADgOAAQgBgJgEgJIALAAQAAAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAIAAgfIgPAAIAAAwIgPAAIAAgwIgPAAIAAAwIgQAAIAAgwIgOAAIAAAzgAA/AmIAPAAIAAgcIgPAAgAAhAmIAPAAIAAgcIgPAAgAADAmIAOAAIAAgcIgOAAgAhIBrIAAgkIgjAAIAAgTIAjAAIAAgRIgcAAIAAhSIAcAAIAAgQIggAAIAAgSIAgAAIAAgXIATAAIAAAXIAhAAIAAASIghAAIAAAQIAeAAIAAAKQAmgcAXgqIAPAIIgEAIQAbAgAgAWQgKAJgEAIIgRgPIAAALIhKAAIAAgJIgPAOQgFgJgGgFIgBBFIgdgBIAAARIAhAAIAAATIghAAIAAAkgAg3AUIAPAAIAAgTIgPAAgAhUAUIAOAAIAAgTIgOAAgAg3gMIAPAAIAAgTIgPAAgAhUgNIAOABIAAgTIgOAAgAAMgqIA6AAQgVgVgKgMQgPAUgMANg");
	this.shape_4.setTransform(15.2122,22.6609,0.9182,0.9182);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAxBXIAdAAQAEAAABgEIAAhTIhiAAIAABqIgVAAIAAh8IAVAAIAAhQIBkAAIAABQIASAAIAABlQAAAPgKAFQgHADgeAAQgCgMgFgHgAAngSIAaAAIAAgaIgaAAgAADgSIASAAIAAgrIAsAAIAAgSIg+AAgAhgBaQATgfAUgsIAQANQgQAogUAjgAABBRIAAhDIBAAAIAAA3IgvAAIAAAMgAASA2IAeAAIAAgYIgeAAgAhmgbIAMgQQAcALANALIgMASQgOgMgbgMgAhahZIAMgQQAbALANAMIgMASQgNgNgbgMg");
	this.shape_5.setTransform(-8.7987,22.8216,0.9182,0.9182);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiBoQgTAAgGgHQgHgIAAgVIAAirIAXAAIAABGIA7AAIAAAVIg7AAIAABQQAAAKABADQADACAHAAIAgAAQAGABADgJQACgGACgaQAJAIAKABQgCAegGALQgHALgQAAgAhjBVQAKgGgBgNIABipIAWAAIAABGIA4AAIAAAVIg4AAIAABUIA5gNQgBAJADALQhKAUgIAEQgEgMgFgGg");
	this.shape_6.setTransform(-31.2486,22.5002,0.9182,0.9182);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBrIAAhvIAYAAIAEgTIghgBIAAgRQgEAQgHARIAABzIgRAAIAAhQIgKANQgFgJgFgFIABgCIgKAFIgBgGQgzAIgHADIgFgSQAEgBAMgOIARgXQgZADgEACIgGgRQAEgCAIgLQASgbAKgeIARAHQgPAhgRAaIAUgBIARggIAPAKQgWAqgaAfIAfgFIgIgUIAOgFQAKAUADARQAVgdAGgpIATAEIgCAGIBXAAIAAASIghAAIgGATIAjABIAABtIgTgBIAAgIIgpAAIAAAKgAAqBPIApABIAAgaIgpAAgAArAlIAoAAIAAgYIgoAAgAhpBgQAGgSADgjIAQAEQgDAhgHAWQgFgDgKgDgAhHAuIAPgEQAEAbABAWIgOAEQgBgUgFgdgAguApIAMgFQAKAaAEASIgPAFQgCgQgJgcgAgWgrIAAgoIA4AAIgJgQIARgHQAGAIAHAPIAzAAIAAAkIgUAAIAAgSIhYAAIAAAWg");
	this.shape_7.setTransform(-55.5349,22.615,0.9182,0.9182);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhqBaQARgjAAhJIAAhRIDAAAIAAAQIitAAIAABBQgBBSgRAjQgJgGgJgDgAhJBiIAAgQIBQAAIAAgPIhAgBIAAgQIBAAAIAAgKIAVAAIAAAKIA/AAIAAARIg/AAIAAAPIBNAAIAAAQgAhGAfQAIgLAAgUIAAgaIBMAAIAAAyQAegTADghIgcAAIAAgRIAdAAIAAgfIAQAAIAAAfIAlAAIAAARIggAAQALAnAbANQgJAIgEAHQgWgNgNgfQgIAagbASIgKgKQAAAFgHACQgFACgVAAIgFgMIATAAQABAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAIAAgKIgqALIgDgIQgDAOgGAJQgDgDgMgGgAguANIAjgIIgggIIAFgJQARAEAPAFIgEAIIAJgCIAAgRIgsAAgAg6ghIAAgqIBFAAIgBAqgAgrgqIAmAAIABgHIgngBgAgrg7IAnAAIAAgGIgnAAgABGhEIAMgIQANAMAFAKIgMAIQgHgLgLgLg");
	this.shape_8.setTransform(-78.949,22.8446,0.9182,0.9182);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhqBaQAxgDAigIQgWgMgMgKQgOALgUAJQgGgKgGgGQArgQARgbIATAGIgHAJICAAAIAAAQIgfAAQgOARgYAMQAgAIAvAEQgFAGgGALQg0gEgqgOQgkANg+AGQgFgNgFgFgAACBHQAZgJANgNIhRAAQARAMAaAKgAhoAWQAFgOABgTIANADQgBAVgHAQgAAjATQAEgPABgQIAOADQgCAUgFAPgAhOgJIANgCQAFASAAANIgOADQAAgMgEgUgAA9gJIANgDQAFASAAAOIgOADQAAgQgEgQgABTgMIAMgCQAGAOADARIgNAEQgBgOgHgTgAgeAUIAAgpIA8AAIAAApgAgQAIIAgAAIAAgRIggAAgAg4gKIAMgDQAFANADAOIgNAEgABagYQgtAFgFADIgFgOQAFgBAJgJIANgOQgTABgEACIgFgOQAEgBAGgGQAOgTAGgPIAPAGQgIAQgOASIAQgBIAMgRIAOAGQgSAagSASIAYgCIgGgOIANgDQAJAUACAOIgNAEgAgwgXQgsAFgGADIgEgPQAEAAAJgJIAPgPQgTABgFACIgFgPQAFAAAEgHQAMgLAJgWIAQAFQgNAWgKAMIARAAIALgRIAPAHQgUAbgTASIAYgDIgFgMIANgEQAIARADAPIgNAEgAgegfIAAgMIA9AAIAAAMgAgeg1IAAgMIA9ABIAAAMgAgjhJIAAgNIAdAAIgHgPIAPgGQAGAKAEALIAXAAIAAANg");
	this.shape_9.setTransform(-102.2023,22.5921,0.9182,0.9182);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAEBLIAqABQAHgBAAgFIAAiSIibAAIAAgWIDNAAIAAAWIgbAAIAACSQAAAUgOAEQgLAEgmABQgCgKgHgOgAhQA6IAAhnIBfAAIAABVIhJAAIAAASgAg6AUIA1AAIAAgtIg1AAg");
	this.shape_10.setTransform(-125.5934,23.3037,0.9182,0.9182);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAABOQgmAAgXgUQgYgVAAglQAAglAYgUQAXgUAmAAQAnAAAXAUQAYAVAAAkQAAAlgYAVQgXAUglAAIgCAAgAgcgeQgLAMAAASQAAASALAMQAMALARABQARAAALgMQALgMAAgSQAAgTgLgLQgLgLgSAAQgRAAgLALg");
	this.shape_11.setTransform(108.9718,-3.098,1.1168,1.1168);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AguBYIgEALIgggBIAAjHIAsAAIAAA6QAVgKAUAAQAiABAWARQAZAWgBAlQAAAkgYAWQgXAUggABQgZAAgZgPgAgmgIIAABBQAQAJATAAQARABALgLQANgMAAgVQAAgTgLgLQgLgJgRgBQgUABgRAIg");
	this.shape_12.setTransform(86.1889,-5.8349,1.1168,1.1168);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgxBMIAAiUIAkAAIAFAQQAagTAgAAIAAAqQgdgBgaAPIAABfg");
	this.shape_13.setTransform(67.0067,-3.35,1.1168,1.1168);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag9BAQgPgPAAghIAAhcIAsABIAABWQAAAdAaAAQAUAAATgOIAAhlIAsAAIAACUIgkAAIgFgQQgdAUgbAAQgbgBgOgMg");
	this.shape_14.setTransform(47.0153,-3.0149,1.1168,1.1168);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWBfIABiWIg/gBIAAgmICpABIAAAmIg+AAIAACWg");
	this.shape_15.setTransform(26.6331,-5.4719,1.1168,1.1168);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag4AVIAAgpIBxAAIAAApg");
	this.shape_16.setTransform(10.5785,-4.5226,1.1168,1.1168);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgzBLQgggZAAgyQAAgvAigbQAfgXAtAAQAdAAAcAIIAAAoQgdgIgYAAQggAAgRAPQgSAPAAAbQAAAdAUAPQAQAPAdAAQAagBAdgJIAAArQgfAGgbAAQgwAAgdgXg");
	this.shape_17.setTransform(-7.598,-5.5278,1.1168,1.1168);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AghBfQgqhagahjIAwAAIASA6QAUA/APAgQAOghAUg7IATg8IAxAAQggBsgnBQg");
	this.shape_18.setTransform(-30.5769,-5.5836,1.1168,1.1168);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135,-17.3,253.6,50);


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
	this.instance.setTransform(-557,-318,2.2809,2.2809);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-557,-318,1459.8,638.7);


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
	this.shape.setTransform(1.5,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.6,-8.3,408.2,15.8);


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
	this.instance.setTransform(-450,-312,2.0921,2.0921);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450,-312,1339,585.8);


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
	this.instance.setTransform(-211,-87,2.4786,1.3351);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211,-87,1487.2,707.7);


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
	this.instance_1 = new lib.sb_sc511("synched",0,false);
	this.instance_1.setTransform(-545.75,43.75);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:-139.8,y:42.85,alpha:1,startPosition:37},10,cjs.Ease.cubicOut).to({mode:"single",startPosition:59},16).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-770.5,-34.4,821.5,93.9);


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
	this.instance.setTransform(-0.2,2.9,0.9964,1.0838,0,0,0,299.8,264.9);
	this.instance.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(88));

	// sb_circle_copy
	this.instance_1 = new lib.sb_circle2();
	this.instance_1.setTransform(-1117.25,-260.75,1.5246,1.5246);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,regY:-0.1,scaleX:1.7375,scaleY:1.498,x:-637.05,y:-502.3},87).wait(1));

	// sb_circle
	this.instance_2 = new lib.sb_circle2();
	this.instance_2.setTransform(378.15,-487.4,1.3042,1.3042);
	this.instance_2.compositeOperation = "lighten";

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.5184,scaleY:1.5184,x:306.25,y:-543.2},43).to({regX:0.1,regY:-0.1,scaleX:1.7375,scaleY:1.498,x:204.1,y:-644.6},44).wait(1));

	// sc5_bg
	this.instance_3 = new lib.sc5bg();
	this.instance_3.setTransform(-487,-316,2.2604,2.2604);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(88));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1619.9,-1138.3,2592.6000000000004,1526.8);


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
	this.instance_2 = new lib.sb_sc4season("synched",0);
	this.instance_2.setTransform(9.7,-65.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({alpha:1,startPosition:59},5).to({startPosition:59},21).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.3,-91.6,338.1,167.2);


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
	this.instance = new lib.sb_sc4plan("synched",0);
	this.instance.setTransform(176.6,28.15,0.5557,0.5557,0,0,0,-0.1,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:176.65,y:28.1,alpha:1,startPosition:59},17,cjs.Ease.cubicOut).to({startPosition:59},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,0,419.3,55.9);


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
p.nominalBounds = new cjs.Rectangle(-584.3,-410.5,1700.6,809.2);


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
	this.instance_2.setTransform(-188.55,-28.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:191.85,alpha:1,mode:"single",startPosition:84},13,cjs.Ease.cubicOut).to({startPosition:84},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-437.3,-40.7,874.7,81.5);


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
p.nominalBounds = new cjs.Rectangle(98.4,-17.3,572.7,50);


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
	this.shape.setTransform(-11.6913,21.6098,1.2305,1.2305);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcA+IAAg3QAAgMgEgFQgFgGgPAAQgQAAgQAMIAABCIgQAAIAAh8IAQAAIAAAqQATgMARABQASgBAJAIQAKAIAAAUIAAA6g");
	this.shape_1.setTransform(-26.3339,17.5492,1.2305,1.2305);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag9A5QAvgcAEg0IguAAIAAgKIAvAAIAAgfIAKAAIAAAfIA9AAIgBAFQgCAqgDATQgCAUgFAEQgEAFgJABQgKABgNgBQgBgIgDgDIAXABQAFAAACgCQAHgHAEhDIgxAAQgCAagJATQgOAagcARQgFgGgEgCg");
	this.shape_2.setTransform(-6.1542,-2.3229,1.2305,1.2305);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdA9QgCgGgCgEIARABQADAAACgBQAEgEACgfIhiAAIAAhMIBlAAIAAAJIgvAAIAAAOIApAAIAAAJIgpAAIAAANIApAAIAAAJIgpAAIAAANIA4AAIAAAFQgDAngGAGQgDAEgGAAIgHAAIgLAAgAgiAHIAhAAIAAgNIghAAgAgigPIAhAAIAAgNIghAAgAgiglIAhAAIAAgOIghAAgAhAA3QAMgKAEgXIAKADQgFAZgMAKgAgbAbIAJgBQAFAPAAANIgJABQAAgLgFgRgAgCAaIAHgCQAHAMADANIgJADQgBgKgHgQgAAVAYIAIgDQAHAIAFALIgIAEQgEgJgIgLg");
	this.shape_3.setTransform(-24.8881,-1.9599,1.2305,1.2305);

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
	this.shape_4.setTransform(234.1969,19.475,1.2181,1.2181);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAIIAAgPIA7AAIAAAPg");
	this.shape_5.setTransform(218.9102,18.5615,1.2181,1.2181);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnA6IAAgQQAWAJARAAQAfAAAAgWIAAgFQgNAHgQAAQgUgBgNgMQgPgNAAgWQAAgWAPgOQAOgNATABQATgBAMAJIACgGIAMAAIAABXQAAAqgvABQgTAAgUgJgAgTgqQgKAJAAAQQAAAQAKAIQAJAJAOgBQAOAAANgIIAAgxQgMgJgPAAQgNAAgKAJg");
	this.shape_6.setTransform(207.0037,21.8198,1.2181,1.2181);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVA+QgbgfgTgQQAUgYAWgUIAYAAQgeAXgPAUQAJAIATATQAQAQAEAFgAgrA+IAAh8IAQAAIAAB8g");
	this.shape_7.setTransform(195.0666,17.6175,1.2181,1.2181);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag9A5QAvgbAEg1IguAAIAAgKIAvAAIAAgfIAKAAIAAAfIA9AAIgBAFQgCArgDASQgCAUgFAEQgFAGgIABIgXgBQgBgHgDgEIAXABQAFAAACgCQAHgHAEhDIgxAAQgDA6gyAeg");
	this.shape_8.setTransform(215.2301,-4.1042,1.2181,1.2181);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag9A3IAPAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAgBIAAgmIgUAGIgDgKIAXgGIAAgeIgVAAIAAgJIAVAAIAAgdIAKAAIAAAdIASAAIAAAJIgSAAIAAAbIARgEIAAgDIAUAAIADgmIgRAAIAAgKIBAAAIgBAwIAOAAIAAAJIgOAAIgDAuIARAAIAAAKIhVAAIAAgKIASAAIAEguIgSAAIAAADIgTAFIAAApQAAAJgFACQgGACgOAAQAAgFgDgFgAAKAxIAeAAIACguIgcAAgAAPgGIAcAAIABgmIgaAAg");
	this.shape_9.setTransform(196.8983,-4.1347,1.2181,1.2181);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},20).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-234.8,-46.1,478.20000000000005,92.30000000000001);


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
	var mask_graphics_0 = new cjs.Graphics().p("AYiP0QiYgQiDhNIAAAAQhVg4grgaIAAAAIgfgTIAAAAIijgEIAAAAIiCgCIAAAAIhpABIAAAAQi3ADjkALIAAAAQk/ASjJAJIAAAAIh9AFIAAAAQjaAJiJgJIAAAAQhUgGhlgNIAAAAQhFgIg+gNIAAAAIglgGIAAAAIhdgSIAAAAQmehQmPiDIAAAAIgwgQIAAAAIgMgJIAAAAQh3hZhCiMIAAAAQhBiMAGiVIAAAAQAFhwAvhxIAAAAQAshqBNheIAAAAQAkgsArgqIAAAAQAfg5AngzIAAAAIAFgHIAAAAQAvgRAzgZIAAAAQAxgYCHhPIAAAAQDiiECwhCIAAAAQAvgRAugOIAAAAQCmgkCIgSIAAAAIAmgBIAAAAQBOgBBsAOIAAAAQA+AHB7ASIAAAAQCQASFWAXIAAAAQE5AVCtAcIAAAAICxAcIAAAAQAcAOAbARIAAAAQA/AlB8BfIAAAAQB4BcBEAnIAAAAQA2AfBjAsIAAAAIALAEIAAAAIBiAtIAAAAIAuAXIAAAAQBKAnBBAxIAAAAIAmAeIAAAAQAVASAUASIAAAAIAuAZIAAAAQBOApAfASIAAAAQA9AjAsAgIAAAAQCjB1BSCmIAAAAQAfBAARBEIAAAAQAFAYAEAYIAAAAQAPBhgRBcIAAAAQgDATgFAUIAAAAQAEA9gGAnIAAAAQgIA0geAnIAAAAIg8AKIAAAAIgVAZIAAAAQhlB1iOA2IAAAAQhqAnh0AAIAAAAQgjAAglgDgAnyNXIAAAAIAAAAIAAAAgAnxNXIAoAAIAAAAIgoAAgArsNSIgIgBIAAAAIAIABgEAiFACrQhSimijh1IAAAAQgsggg9gjIAAAAQgfgShOgpIAAAAIgugZIAAAAQgUgSgVgSIAAAAIA4AWIAAAAQCDAwA9AmIAAAAQAbAQAaATIAAAAIAGAFIAAAAIAoAjIAAAAQA5A1AJAHIAAAAIABABIAAAAQAQATAPAXIAAAAQAXAgAqBGIAAAAQAiA7APAhIAAAAQAZA1AHAtIAAAAIADAYIAAAAQgRhEgfhAgAeQicQgagTgbgQIAAAAQg9gmiDgwIAAAAIg4gWIAAAAIgmgeIAAAAIBUAcIAAAAQCQA1B1BhIAAAAIgGgFgAUinlQAoABAUAKIAAAAQANAIAPAPIAAAAIAKALIAAAAIhigtg");
	var mask_graphics_67 = new cjs.Graphics().p("AYiP0QiYgQiDhNIAAAAQhVg4grgaIAAAAIgfgTIAAAAIijgEIAAAAIiCgCIAAAAQgTgKgRgCIAAAAQgUgDgZAIIAAAAIgYAIIAAAAQi3ADjkALIAAAAQk/ASjJAJIAAAAIj0ABID0gBIh9AFIAAAAQjaAJiJgJIAAAAQhUgGhlgNIAAAAQA1AGA5ADIAAAAIAIABIAAAAIgIgBIAAAAQg5gDg1gGIAAAAQhFgIg+gNIAAAAQghgGgfgIIAAAAIgwgOIAAAAIgSAEIAAAAQmehQmPiDIAAAAIgwgQIAAAAIgMgJIAAAAQh3hZhCiMIAAAAQhBiMAGiVIAAAAQAFhwAvhxIAAAAQAshqBNheIAAAAQAkgsArgqIAAAAQAfg5AngzIAAAAIAFgHIAAAAQAvgRAzgZIAAAAQAxgYCHhPIAAAAQDiiECwhCIAAAAQAvgRAugOIAAAAQCmgkCIgSIAAAAIAmgBIAAAAQBOgBBsAOIAAAAQA+AHB7ASIAAAAQCQASFWAXIAAAAQE5AVCtAcIAAAAICxAcIAAAAQAcAOAbARIAAAAQA/AlB8BfIAAAAQB4BcBEAnIAAAAQA2AfBjAsIAAAAIALAEIAAAAIBiAtIAAAAIAuAXIAAAAQBKAnBBAxIAAAAIAmAeIAAAAQAVASAUASIAAAAIAuAZIAAAAQBOApAfASIAAAAQA9AjAsAgIAAAAQCjB1BSCmIAAAAQAfBAARBEIAAAAQAFAYAEAYIAAAAQAPBhgRBcIAAAAQgDATgFAUIAAAAQgcBshIBdIAAAAIgVAZIAAAAQhlB1iOA2IAAAAQhqAnh0AAIAAAAQgjAAglgDgAnyNXIAAAAIAAAAIAAAAgAnxNXIAoAAIAAAAIgoAAgAwKMtIhdgSIAAAAIASgEIAAAAIAwAOIAAAAQAfAIAhAGIAAAAIglgGgALyMlQAZgIAUADIAAAAQARACATAKIAAAAIhpABIAAAAIAYgIgEAi0AJDQAEA9gGAnIAAAAQgIA0geAnIAAAAIg8AKIAAAAQBIhdAchsgEAiFACrQhSimijh1IAAAAQgsggg9gjIAAAAQgfgShOgpIAAAAIgugZIAAAAQgUgSgVgSIAAAAIA4AWIAAAAQCDAwA9AmIAAAAQAbAQAaATIAAAAIAGAFIAAAAIAoAjIAAAAQA5A1AJAHIAAAAIABABIAAAAQAQATAPAXIAAAAQAXAgAqBGIAAAAQAiA7APAhIAAAAQAZA1AHAtIAAAAIADAYIAAAAQgRhEgfhAgAeQicQgagTgbgQIAAAAQg9gmiDgwIAAAAIg4gWIAAAAIgmgeIAAAAIBUAcIAAAAQCQA1B1BhIAAAAIgGgFgAUinlQAoABAUAKIAAAAQANAIAPAPIAAAAIAKALIAAAAIhigtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:564.6529,y:-7.7127}).wait(67).to({graphics:mask_graphics_67,x:564.6529,y:-7.7127}).wait(1).to({graphics:null,x:0,y:0}).wait(16));

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
p.nominalBounds = new cjs.Rectangle(340.2,-109.2,449.00000000000006,203.10000000000002);


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

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_graphics_17,x:1.45,y:-0.4}).wait(22));

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
p.nominalBounds = new cjs.Rectangle(-202.7,-8.3,408.29999999999995,15.8);


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
	var mask_graphics_0 = new cjs.Graphics().p("AEcZUQnCgBwBgOI1rgWQn3gHkWgGQmvgJldgOQwTgrwNhwQjsgaiRgVQjRggiogqIiggpQhegXhEgJQghgEjNgJQiQgHhZgcQiHgrhjhsQhkhsgfiJQgeiKAuiMQAviMBshaQBshbCsgoQBugaDOgOIUNhbQVahiLJgvQSDhKOhgqQFygRCVgKQEjgTDiggQDqghEghBQCpgmFbhXQDrg8BxghQDAg6CShAQC6hSFvjmQFhjdDKhUQDlhfEggyQDjgnE1gRQDpgNCsAGQDbAIC3AmQDJAqE3B4QGJCYBwAiQCKArDjA0QEgBCBQAVQBhAaDDA2QCrAsB9AOQA8AHDyAIQC6AGBxAbQCeAmBxBkQB9BuAMCPQCcgdCbA2QCcA3BnB4QAfAlApA9IBDBmQAmA3BTBpQBIBgAgBKQBKCmgsC8QgsC8iNBxQiOBxjkAYQiVAPkIgXQgdB6hlBjQhdBbiCAxQhtAqiRASQhYAKivAHIvNAmIn3ATQksAJnXAJI0qAbQssAQmYAGQpoAKn4AAIhkgBgEAyggIFQBuAJBogPIjWAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AEcZUQnCgBwBgOI1rgWQn3gHkWgGQmvgJldgOQwTgrwNhwQjsgaiRgVQjRggiogqIiggpQhegXhEgJQghgEjNgJQiQgHhZgcQiHgrhjhsQhkhsgfiJQgeiKAuiMQAviMBshaQBshbCsgoQBugaDOgOIUNhbQVahiLJgvQSDhKOhgqQFygRCVgKQEjgTDiggQDqghEghBQCpgmFbhXQDrg8BxghQDAg6CShAQC6hSFvjmQFhjdDKhUQDlhfEggyQDjgnE1gRQDpgNCsAGQDbAIC3AmQDJAqE3B4QGJCYBwAiQCKArDjA0QEgBCBQAVQBhAaDDA2QCrAsB9AOQA8AHDyAIQC6AGBxAbQCeAmBxBkQB9BuAMCPQCcgdCbA2QCcA3BnB4QAfAlApA9IBDBmQAmA3BTBpQBIBgAgBKQBKCmgsC8QgsC8iNBxQiOBxjkAYQiVAPkIgXQgdB6hlBjQhdBbiCAxQhtAqiRASQhYAKivAHIvNAmIn3ATQksAJnXAJI0qAbQssAQmYAGQpoAKn4AAIhkgBgEAyggIFQBuAJBogPIjWAAg");
	var mask_graphics_22 = new cjs.Graphics().p("AEcZUQnCgBwBgOI1rgWQn3gHkWgGQmvgJldgOQwTgrwNhwQjsgaiRgVQjRggiogqIiggpQhegXhEgJQghgEjNgJQiQgHhZgcQiHgrhjhsQhkhsgfiJQgeiKAuiMQAviMBshaQBshbCsgoQBugaDOgOIUNhbQVahiLJgvQSDhKOhgqQFygRCVgKQEjgTDiggQDqghEghBQCpgmFbhXQDrg8BxghQDAg6CShAQC6hSFvjmQFhjdDKhUQDlhfEggyQDjgnE1gRQDpgNCsAGQDbAIC3AmQDJAqE3B4QGJCYBwAiQCKArDjA0QEgBCBQAVQBhAaDDA2QCrAsB9AOQA8AHDyAIQC6AGBxAbQCeAmBxBkQB9BuAMCPQCcgdCbA2QCcA3BnB4QAfAlApA9IBDBmQAmA3BTBpQBIBgAgBKQBKCmgsC8QgsC8iNBxQiOBxjkAYQiVAPkIgXQgdB6hlBjQhdBbiCAxQhtAqiRASQhYAKivAHIvNAmIn3ATQksAJnXAJI0qAbQssAQmYAGQpoAKn4AAIhkgBgEAyggIFQBuAJBogPIjWAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:256.8163,y:29.1072}).wait(20).to({graphics:mask_graphics_20,x:256.8163,y:29.1072}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_22,x:256.8163,y:29.1072}).wait(29));

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
p.nominalBounds = new cjs.Rectangle(-383.1,-132.9,1339,253.5);


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
	this.instance.setTransform(275.75,461.25);
	this.instance.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1685,scaleY:1.0273,x:-185.1,y:427.45},22).to({scaleX:1.2068,scaleY:1.0335,x:-647.65,y:404.05},5).to({scaleX:1.3829,scaleY:1.3829,x:-1143.95,y:185.95},23).wait(1));

	// sc1
	this.instance_1 = new lib.sc1zone();
	this.instance_1.setTransform(663.5,-3.45,0.92,0.92,0,0,0,274.9,69.2);
	this.instance_1.alpha = 0.0508;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(51));

	// an_sc1_car
	this.instance_2 = new lib.an_sc1car("synched",22);
	this.instance_2.setTransform(-78.55,186.15,1.1035,1.1031,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1.1033,x:-72.05,mode:"single",startPosition:50},50).wait(1));

	// sb_sc1_bg
	this.instance_3 = new lib.sb_sc1bg("synched",21);
	this.instance_3.setTransform(4.1,21.55,1.0938,1.0938);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-3.5,mode:"single",startPosition:43},50).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1599.9,-319.7,2582.7,1110.7);


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
	var mask_graphics_0 = new cjs.Graphics().p("EhADAFdQhnhoAAiRQAAiRBnhoQBohnCRAAQCSAABoBnQBnBoAACRQAACRhnBoQhoBniSAAQiRAAhohng");
	var mask_graphics_51 = new cjs.Graphics().p("EhADAFdQhnhoAAiRQAAiRBnhoQBohnCRAAQCSAABoBnQBnBoAACRQAACRhnBoQhoBniSAAQiRAAhohng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-420.2935,y:45.1969}).wait(51).to({graphics:mask_graphics_51,x:-420.2935,y:45.1969}).wait(1).to({graphics:null,x:0,y:0}).wait(32));

	// sb_sc3_bg_copy_copy
	this.instance = new lib.sb_sc3bg("synched",23);
	this.instance.setTransform(-631.2,-61.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(51).to({startPosition:74},0).to({_off:true},1).wait(32));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-840.6,19.9,70.5,70.5);


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
	mask.graphics.p("EhKEAFqQhEhEAAhhQAAhhBEhEQBEhDBhAAQBhAABEBDQBEBEAABhQAABhhEBEQhEBFhhAAQhhAAhEhFg");
	mask.setTransform(-480.9217,43.0578);

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
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


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
p.nominalBounds = new cjs.Rectangle(-18.7,29,507.7,218);


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
p.nominalBounds = new cjs.Rectangle(-912.3,-928.2,912.3,928.2);


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
p.nominalBounds = new cjs.Rectangle(-12.4,0,238.20000000000002,174);


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
	this.instance.setTransform(-805.25,55.2,1,1,0,0,0,-805.4,55.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90,x:-805.15},52,cjs.Ease.cubicOut).wait(32));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-840.5,19.9,70.70000000000005,70.69999999999999);


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

	// an_sc5_50
	this.instance = new lib.an_sc550("synched",0,false);
	this.instance.setTransform(543.25,138.8,1.949,1.949,0,0,0,0.2,34.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(83).to({startPosition:37},0).to({_off:true},1).wait(15));

	// an_sc5_exp
	this.instance_1 = new lib.an_sc5exp("synched",0,false);
	this.instance_1.setTransform(516.45,-9.1,1.7907,1.7907,0,0,0,-128.1,8.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(87).to({startPosition:29},0).to({_off:true},1).wait(15));

	// an_man
	this.instance_2 = new lib.an_man("synched",0,false);
	this.instance_2.setTransform(93.65,-101.55,1.3625,1.3625,0,0,0,75.2,158.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(91).to({startPosition:91},0).to({_off:true},1).wait(15));

	// an_sc5_free
	this.instance_3 = new lib.an_sc5free("synched",0,false);
	this.instance_3.setTransform(273.95,-163,1.3862,1.3862,0,0,0,161.1,146.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(91).to({startPosition:29},0).to({_off:true},1).wait(15));

	// an_sc5_line
	this.instance_4 = new lib.an_sc5line("synched",0,false);
	this.instance_4.setTransform(227.7,-145.15,0.8197,1.3464,0,0,0,185.9,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(91).to({startPosition:87},0).to({_off:true},1).wait(15));

	// an_sc5_bg
	this.instance_5 = new lib.an_sc5bg("synched",0,false);
	this.instance_5.setTransform(-18.45,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(91).to({startPosition:87},0).to({_off:true},1).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1638.3,-1139.8,2938.8,1526.8);


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
	this.shape_4.setTransform(19.2981,-1.175,1.1001,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(16).to({_off:true},1).wait(4).to({_off:false},0).wait(2).to({_off:true},1).wait(1).to({_off:false},0).wait(2).to({_off:true},1).wait(9).to({_off:false},0).wait(55).to({_off:true},1).wait(9).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.4,-26.9,281.4,51.5);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({startPosition:21},17).to({regX:0.1,regY:0.1,scaleX:0.7876,scaleY:0.7876,x:0.1,y:0.1,startPosition:25},3).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0,startPosition:21},3).to({regX:0.1,regY:0.1,scaleX:0.7876,scaleY:0.7876,x:0.1,y:0.1,startPosition:25},3).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0,startPosition:37},3).to({startPosition:87},50).to({_off:true},1).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.4,-26.9,281.4,51.5);


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

	// an_sc5_btn
	this.instance = new lib.an_sc5btn("synched",0,false);
	this.instance.setTransform(793.5,283.95,1.1865,1.1865,0,0,0,-12,-1.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).wait(74).to({startPosition:74},0).to({_off:true},1).wait(9));

	// an_sc4_plan
	this.instance_1 = new lib.an_sc4plan("synched",0,false);
	this.instance_1.setTransform(203.8,138.5,1.3984,1.3984,0,0,0,176.6,28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(97).to({startPosition:27},0).to({_off:true},1).wait(9));

	// an_sc4_tt
	this.instance_2 = new lib.an_sc4tt("synched",0,false);
	this.instance_2.setTransform(178.05,-49.75,1.6077,1.6077,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(97).to({startPosition:29},0).to({_off:true},1).wait(9));

	// an_sc4_bg
	this.instance_3 = new lib.an_sc4bg("synched",0,false);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(97).to({startPosition:55},0).to({_off:true},1).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-584.3,-410.5,1700.7,809.2);


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
	var mask_graphics_0 = new cjs.Graphics().p("AVPb3MggygAkQisgDhYgIQiQgNhugiQiEgohlhNQhZhEgzhWQp3ANoDgYQiqgIhjgQQiSgYhsg4Qh2g9hXhpQhYhpgkiAQgMglgOhGQgPhLgJgfQgIgdgUg9QgUg5gIghQgchsAHiLQADhXAYikQANhaALgxQAShOAZg6QA6h/B9heQByhXCWgrQB9glCjgMQBjgGDCAAIITABQAcgOAegMQB2gvCJgIQB2gHCOAUQBkAPCdAkQg8h/AhitQAWhzBOi7QBAiZAvhNQBKh5Beg+QBrhHChgNQBngIC7AQIMzBJQMmBHGXAvQKgBOIUBpQCzAjBoAlQCXA2BhBYQCPCCA/DrQAqCcASEZIBHRLQAMC2gHBjQgLCbg5BuQhMCRipBmQiFBQjJA4Ql4BqnoAcQi5AKkoAAQi0AAjcgEg");
	var mask_graphics_79 = new cjs.Graphics().p("AVPb3MggygAkQisgDhYgIQiQgNhugiQiEgohlhNQhZhEgzhWQp3ANoDgYQiqgIhjgQQiSgYhsg4Qh2g9hXhpQhYhpgkiAQgMglgOhGQgPhLgJgfQgIgdgUg9QgUg5gIghQgchsAHiLQADhXAYikQANhaALgxQAShOAZg6QA6h/B9heQByhXCWgrQB9glCjgMQBjgGDCAAIITABQAcgOAegMQB2gvCJgIQB2gHCOAUQBkAPCdAkQg8h/AhitQAWhzBOi7QBAiZAvhNQBKh5Beg+QBrhHChgNQBngIC7AQIMzBJQMmBHGXAvQKgBOIUBpQCzAjBoAlQCXA2BhBYQCPCCA/DrQAqCcASEZIBHRLQAMC2gHBjQgLCbg5BuQhMCRipBmQiFBQjJA4Ql4BqnoAcQi5AKkoAAQi0AAjcgEg");
	var mask_graphics_83 = new cjs.Graphics().p("AVPb3MggygAkQisgDhYgIQiQgNhugiQiEgohlhNQhZhEgzhWQp3ANoDgYQiqgIhjgQQiSgYhsg4Qh2g9hXhpQhYhpgkiAQgMglgOhGQgPhLgJgfQgIgdgUg9QgUg5gIghQgchsAHiLQADhXAYikQANhaALgxQAShOAZg6QA6h/B9heQByhXCWgrQB9glCjgMQBjgGDCAAIITABQAcgOAegMQB2gvCJgIQB2gHCOAUQBkAPCdAkQg8h/AhitQAWhzBOi7QBAiZAvhNQBKh5Beg+QBrhHChgNQBngIC7AQIMzBJQMmBHGXAvQKgBOIUBpQCzAjBoAlQCXA2BhBYQCPCCA/DrQAqCcASEZIBHRLQAMC2gHBjQgLCbg5BuQhMCRipBmQiFBQjJA4Ql4BqnoAcQi5AKkoAAQi0AAjcgEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-399.2082,y:10.7442}).wait(79).to({graphics:mask_graphics_79,x:-399.2082,y:10.7442}).wait(1).to({graphics:null,x:0,y:0}).wait(3).to({graphics:mask_graphics_83,x:-399.2082,y:10.7442}).wait(1));

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
p.nominalBounds = new cjs.Rectangle(-495.7,-894,803.4,1083.5);


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
	this.instance_1.setTransform(326.45,-336.15,0.9843,1.1946,-14.9989,0,0,0.2,-0.1);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.8764,scaleY:1.1945,rotation:-2.7823,x:704.35,y:-431.55},91).wait(1));

	// sb_sc3_car
	this.instance_2 = new lib.sb_sc3car("single",0);
	this.instance_2.setTransform(-23.65,98.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({mode:"synched"},11).to({x:-7.65,mode:"single",startPosition:83},80,cjs.Ease.cubicOut).wait(1));

	// sb_sc3_bg
	this.instance_3 = new lib.sb_sc3bg("synched",23);
	this.instance_3.setTransform(0,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(92));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1435.7,-838.8,2447.6,1778.1999999999998);


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
	this.instance_1.setTransform(285.6,-143.95,0.7995,1.1946,0,0,0,0,-0.1);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0,scaleX:1.3829,scaleY:1.3829,x:535.5,y:-374.9},83).wait(1));

	// sc2
	this.instance_2 = new lib.sc2power();
	this.instance_2.setTransform(709.1,193.75,0.7903,0.7903,0,0,0,223.5,58.4);
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
p.nominalBounds = new cjs.Rectangle(-1507,-830.8,2498.5,1784.6);


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
	this.shape.setTransform(169.5044,-107.7187,1.3926,1.3926);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhnBiIAAgPIBYAAIAAi0IAPAAIAABHIBXAAIAAAQIhXAAIAABdIBnAAIAAAPg");
	this.shape_1.setTransform(103.2858,-108.1017,1.3926,1.3926);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDBfQAbgYALgkQAGgXAAghIAAgKIAOAAIAAAfQAOBIAnAUQgIAGgDAHQgfgTgQg1QgKArggAeQgGgHgFgEgAg5BpIAAhNIgxAAIAAgNIBuAAIAAANIguAAIAABNgAhqBUQAMgUAJgbIANADQgJAbgOAXQgFgEgGgCgAgbAqIALgFQANAVAEAPIgLAGQgFgOgMgXgAgEgKQATggAIg/IAPACQgEAbgEANIA8AAIACgBIALADQgJAngJAVIgMgEQAGgPAGgdIg5AAQgJAdgLATgAhfgDIAAgNIBbAAIAAAGIAAAHgAgEgKIAAAAgAhhgjIAAgNIAoAAIAAgVIguAAIAAgNIAuAAIAAgWIAPAAIAAAWIAsAAIAAANIgsAAIAAAVIApAAIAAANg");
	this.shape_2.setTransform(37.1369,-107.5446,1.3926,1.3926);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVBcQAigPAWgfQgQgfgKgmQgIARgIALQgFgFgHgEQAagjANhCIAPACQgFAXgGARIBMAAIAAAPIgPAAQgKA6gWAkQAVAfAeAOQgFAEgFAJQgdgPgVgeQgWAdgiASQgDgHgGgHgAASguQAJAtARAgQARggAIgvIgyAAgAhnBNQAHgDAAgJIAAhXIA+AAIAAg0IhBAAIAAgOIBRAAIAABRIg/AAIAABKIA+gXIADAPQhJAcgIAGQgCgKgEgGg");
	this.shape_3.setTransform(-28.7335,-107.5098,1.3926,1.3926);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABABqIAAh1IgiAAIAAAJQAABJgYAiQgGgHgFgCQAVggAAhCIAAhPQAygJAXgJIAMALQgZAKguAHIAAAuIBLAAIAAAOIgaAAIAAB1gAg4BqIAAhRIgvAAIAAgOIAvAAIAAgYIgwAAIAAgNIBBAAQAIgUAFgSIAOADIgNAjIAdAAIAAANIgtAAIAAAYIArAAIAAAOIgrAAIAABRgAhnBQQAOgRAIgZIAMADQgIAZgPAWgAgdAqIALgFQAOAVAEAQIgKAGQgJgWgKgQgAhUg9IAMgDQAIASACAPIgNADQgCgOgHgTgAhkhCIAAgNIAvAAIgLgWIAPgEQAGAKAHAQIAlAAIAAANg");
	this.shape_4.setTransform(-95.335,-107.7535,1.3926,1.3926);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhhBjIAAgOIBZAAIAAgpIhCAAIAAgNIBCAAIAAgkIg4AAIAAgOICBAAIAAAOIg6AAIAAAkIBDAAIAAANIhDAAIAAApIBcAAIAAAOgAhqgQQAXgLAYgTQAYgSASgUIgsAAIAAgOIBFAAQAQAYAcAWQAbAVAcAMQgHAGgEAIQgagNgagVQgbgVgRgYQgSAWgaAXQgbAWgZANQgEgHgGgFg");
	this.shape_5.setTransform(-161.5187,-107.6143,1.3926,1.3926);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(66));

	// sc1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ADHD+QgehXgZg9IkiAAQgiBZgVA7IgyAAQA8i2BNikQA5h3AegqIA5AAQAeAtA3B0QBNClA8C1gAiAA8ID+AAQgohfglhQQgihIgPgZQg0BUhMC8g");
	this.shape_6.setTransform(259.002,-29.4929,1.3926,1.3926);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AECD+QgvlegihkQhRDBhNDNIglAAQhOjQhRi9QgjB+guFDIgwAAQAejSAZiBQARhQAXhYIA8AAQApBcAyB9IA8CaQBOjNBKimIA9AAQAZBfAPBJQAbCDAbDQg");
	this.shape_7.setTransform(134.4331,-29.4929,1.3926,1.3926);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXD+IAAn7IAvAAIAAH7g");
	this.shape_8.setTransform(32.2504,-29.4929,1.3926,1.3926);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYD+IAAnOIjKAAIAAgtIHEAAIAAAtIjJAAIAAHOg");
	this.shape_9.setTransform(-57.155,-29.4929,1.3926,1.3926);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AixD+IAAn7IAyAAIAAHOIExAAIAAAtg");
	this.shape_10.setTransform(-147.8138,-29.4929,1.3926,1.3926);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ADID+QgahKgehKIkiAAQgiBZgVA7IgyAAQA8i3BNijQA5h4AegpIA5AAQAeArA3B2QBNCkA8C2gAiAA8ID+AAQgohfglhQQgihIgPgZQg2BXhKC5g");
	this.shape_11.setTransform(-260.4411,-29.4929,1.3926,1.3926);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(66));

	// an_sc1_heart
	this.instance = new lib.an_sc1heart("synched",0,false);
	this.instance.setTransform(-6.55,81.8,1.5158,1.5158,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(66));

	// an_sc1_bg
	this.instance_1 = new lib.an_sc1bg("synched",0,false);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AhRBjQgegZgLglQgLgnAPgpQAPgqAjgWQAogZAyAIQAyAJAdAlQAeAlgEAyQgDAygiAhQgiAhgzACIgFAAQgvAAgigcg");
	this.shape_12.setTransform(-42.1263,168.0499);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.instance_1}]}).wait(66));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1599.9,-319.7,2582.7,1110.7);


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
	this.instance.setTransform(-177.1,-55.2,1.6386,1.6386,0,0,0,-0.4,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(90).to({startPosition:22},0).to({_off:true},1).wait(9));

	// sc3
	this.instance_1 = new lib.sc3conf();
	this.instance_1.setTransform(614.95,166.8,1.0021,1.0021,0,0,0,278.1,46.6);
	this.instance_1.alpha = 0.1016;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(92).to({_off:true},1).wait(9));

	// an_sc3_bg
	this.instance_2 = new lib.an_sc3bg("synched",0,false);
	this.instance_2.setTransform(-13.15,-43.15,1.052,1.052);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(92).to({startPosition:91},0).to({_off:true},1).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1523.4,-911.1,2555.3,1856.1);


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
	this.instance.setTransform(-76.45,86.2,1.3649,1.3649,0,0,0,0.2,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(81));

	// an_sc2_vc
	this.instance_1 = new lib.an_sc2vc("synched",0,false);
	this.instance_1.setTransform(-446.45,-61,1.994,1.994);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(81));

	// an_sc2_bg
	this.instance_2 = new lib.an_sc2bg("synched",0,false);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1506.9,-830.9,2498.3,1784.6999999999998);


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
	this.instance.setTransform(-421,-318,0.9503,0.9503);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(449));

	// sc4
	this.instance_1 = new lib.sc4("single",0);
	this.instance_1.setTransform(67.4,-0.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(343).to({_off:false},0).to({alpha:1,mode:"synched",loop:false},8).wait(98));

	// sc5
	this.instance_2 = new lib.sc5("single",0);
	this.instance_2.setTransform(85.85,1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(259).to({_off:false},0).to({alpha:1,mode:"synched",loop:false},8).to({startPosition:87},92).to({_off:true},2).wait(88));

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
p.nominalBounds = new cjs.Rectangle(-1552.5,-1138.8,2938.9,2092.1);


// stage content:
(lib._640x280 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(186.05,140.2,0.4444,0.4444,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(449).to({startPosition:0},0).wait(448).to({mode:"single",startPosition:448},0).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgzjgXbMBnHAAAMAAAAu3MhnHAAAg");
	this.shape.setTransform(320,140);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgzjAXcMAAAgu3MBnHAAAMAAAAu3g");
	this.shape_1.setTransform(320,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(898));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-183.9,-226.1,985.9,789.9);
// library properties:
lib.properties = {
	id: 'B292DCCD4A3E42C59A84614B5737EDAF',
	width: 640,
	height: 280,
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