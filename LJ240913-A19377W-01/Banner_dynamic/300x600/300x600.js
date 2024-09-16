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



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.kicks = function() {
	this.initialize(img.kicks);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,472);


(lib.sc2car = function() {
	this.initialize(img.sc2car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,425);


(lib.sc2gift = function() {
	this.initialize(img.sc2gift);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,451,330);


(lib.sentra = function() {
	this.initialize(img.sentra);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,387);// helper functions:

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


(lib.sb_sc2try = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#050102").s().p("Ag9DDIARhgQgsAuhuAwQgGgTgOgdQgBgEgCgDQBQgeAsgdIgdAAIADgOIgjAIIgjAIIgEgxIBSgPIACgPIhFAAIAIgvIBGAAIADgUIA4AAIgUB1QAVgWAOgSIAPhUIijAAIAIgyICjAAIADgSIiMABQgBgbgCgVQClABC/gIIAFAxIgrABQg4ACg3AAIgDAUIClAAIgJAyIikAAIgOBSQAdBbB5AgIgoA4QhggpgdgxIgRBggABpBLQg2AAAKg3IAPhVIA3AAIgFAYIBEgWIAOApQgzARgmAIIgCAKQgCAOANAAIARAAQANACAFgOIAIgYIAoALQgKAdgGANQgMAfgkAAg");
	this.shape.setTransform(68.575,20.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#050102").s().p("ABHCBQgChAATh8IhrAAIAKg9IBqAAIALhOIA5AAIgFAbIAkgVQANASAKASQAEAFACAEIgrAbIAnAAIgKA9IhCAAQgUB8AFA7QgBAFAEAAQADAAADgIIAFgWQAHgUACgMIASAKIATAIQgMArgKAaQgTAsgcABQgvgEgDhCgACZh4IAbAAIgWgngAiHDFIACgQIgkAAIgDAQIg0AAIAZiRICMAAIgZCRgAihCGIAkAAIAGgfIglAAgAg+B3QARAAAWgFIAOhVIgXAAIAKg5IBiAAIgKA5IgVAAIgNBOIAigEQgIAkgCAUQhDAKgyAJgAjHAnIAIgtICOAAIgIAtgAi8gUIAHgtICOAAIgIAtgAi8hOIAIgzICjAAIgJAzgAifiSIAIgtICAAAIgIAtg");
	this.shape_1.setTransform(22.475,19.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90.8,39.7);


(lib.sb_sc2title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8ED4E").s().p("AhwCbQAhABAkAAQAVAAgBgRIi6AAIAAg0IDEAAIBBgTIjjAAIAAgxIFYAAIAAAxIg8ATIBlAAIAAA0IihAAIAAAJQABA2g4ADQgcAChCAAQgEgagIgagAihAFIAAhuIFBAAIAABugAhfgnIC9AAIAAgTIi9AAgAjQh3IAAg4ICzAAIAAgfIBDAAIAAAfICsAAIAAA4g");
	this.shape.setTransform(173.425,25.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8ED4E").s().p("AgiDKIAAiJIg9ADIApAsQgpAghOAxIgHgKQgJgNgYgdQBAgmAtgjQgqAEgZAAIgNg9QAbAAAagBIA8gfQgjgcgwgjIAognIAXANIAcgVQg4AEg9AAIgOg+QDqgECQgJIAQA8IhPAEIhPAEQgJAHgTAMQgoAegPAIQAQANAQAIQBPguAzgkIAzAwQhWAvhjA1QA0gCAyAAIgXgbIAxgcQAZAaAwAyIAWAYIgyAmIgaggQgOACghABIgvABIAACLgAA5B0IAsgyQBEArAtAeIgrA1Qg2gog8gkg");
	this.shape_1.setTransform(124.3,26.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8ED4E").s().p("AgiDQIAAgwIivAAIAAgzICvAAIAAgUIiLAAIAAi7ICLAAIAAgVIigAAIAAg0ICgAAIAAgkIBFAAIAAAkICgAAIAAA0IigAAIAAAVICLAAIAAC7IiLAAIAAAUICvAAIAAAzIivAAIAAAwgAAjApIBFAAIAAgZIhFAAgAhnApIBFAAIAAgZIhFAAgAAjgZIBFAAIAAgaIhFAAgAhngZIBFAAIAAgaIhFAAg");
	this.shape_2.setTransform(75.525,25.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8ED4E").s().p("AjEDHIAAg9ICgAAIAAgoIh3AAIAAhAIB3AAIAAgiIhLAAIAAgfIhAAjQgEgEgFgMQgRgdgNgQQBwguApgoIhQAAIAAg3ICmAAQBEBaB6AsQgTAbgUAlQgigRgcgVIAAAmIhNAAIAAAiIB6AAIAABAIh6AAIAAAoICgAAIAAA9gAhAg/ICPAAQgfgWglgrQgcAhgvAgg");
	this.shape_3.setTransform(26.475,25.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#050102").s().p("AiFD1QgOgNgCgSIgFgZIg3AAQgVAAgPgOQgOgPAAgVIAAg0QAAgRAKgNQAJgNAPgFIAAgUQAAgTAOgPIAAg2QgTgBgOgPQgOgOAAgUIAAg4QAAgUAPgPQAPgPAUAAICFAAQAGgNAMgJQANgJAPAAIBDAAQAQAAANAJQAMAJAGANIB9AAQAVAAAPAPQAOAPAAAUIAAA4QAAAVgOAPQgPAOgVAAIAAAAIAAA9QAJAMAAAPIAAATQASADALAOQAMAOAAASIAAA0QAAAVgOAPQgPAOgVAAIh1AAQgKAdgZARQgZASgkACQgaAChHAAQgTAAgOgMg");
	this.shape_4.setTransform(173.425,25.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#050102").s().p("AhwCbQAhABAkAAQAVAAgBgRIi6AAIAAg0IDEAAIBBgTIjjAAIAAgxIFYAAIAAAxIg8ATIBlAAIAAA0IihAAIAAAJQABA2g4ADQgcAChCAAQgEgagIgagAihAFIAAhuIFBAAIAABugAhfgnIC9AAIAAgTIi9AAgAjQh3IAAg4ICzAAIAAgfIBDAAIAAAfICsAAIAAA4g");
	this.shape_5.setTransform(173.425,25.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#050102").s().p("AgiD9QgUAAgPgPQgPgPAAgUIAAgIIg9ApQgSAMgXgGQgVgGgKgTIgEgGQgJgNgUgYQgQgRAEgXQAEgXAUgMIATgMIgNhCQgFgWAPgSQAQgTAXAAIAHAAIgHgFQgTgNgBgXIgBgEQgSgKgGgUIgPhDQgEgXAPgSQAOgSAYAAQDqgECNgIQASgBAPAKQAOALAFARIAPA7QAHAWgOAUQgIAKgLAGQABAGgBAHQgDAagWALIgIAFIAjAmIABAAIAVAWQAQAPgCAXQgBAYgSANIgEACIAFADQASAMADAXQAEAVgPASIgrA0QgNAPgTADQgUACgQgMIgzgjIAAAGQAAAUgOAPQgPAPgVAAg");
	this.shape_6.setTransform(124.2849,26.6457);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#050102").s().p("AgiDKIAAiJIg9ADIApAsQgpAghOAxIgHgKQgJgNgYgdQBAgmAtgjQgqAEgZAAIgNg9QAbAAAagBIA8gfQgjgcgwgjIAognIAXANIAcgVQg4AEg9AAIgOg+QDqgECQgJIAQA8IhPAEIhPAEQgJAHgTAMQgoAegPAIQAQANAQAIQBPguAzgkIAzAwQhWAvhjA1QA0gCAyAAIgXgbIAxgcQAZAaAwAyIAWAYIgyAmIgaggQgOACghABIgvABIAACLgAA5B0IAsgyQBEArAtAeIgrA1Qg2gog8gkg");
	this.shape_7.setTransform(124.3,26.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#050102").s().p("AgiEDQgUAAgPgPQgOgOgBgUIh9AAQgVAAgPgOQgOgQAAgUIAAgzQAAgQAKgOQAKgOAQgDIAAiNQgVgOAAgaIAAg0QAAgVAPgOQAPgPAUAAIBwAAQAEgQAOgKQANgLARAAIBFAAQARAAANALQANAKAFAQIBwAAQAUAAAPAPQAPAOAAAVIAAA0QAAAagVAOIAACNQAQADAKAOQAKAOAAAQIAAAzQAAAUgOAQQgPAOgVAAIh9AAQgBAUgOAOQgPAPgUAAg");
	this.shape_8.setTransform(75.525,25.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#050102").s().p("AgiDQIAAgwIivAAIAAgzICvAAIAAgUIiLAAIAAi7ICLAAIAAgVIigAAIAAg0ICgAAIAAgkIBFAAIAAAkICgAAIAAA0IigAAIAAAVICLAAIAAC7IiLAAIAAAUICvAAIAAAzIivAAIAAAwgAAjApIBFAAIAAgZIhFAAgAhnApIBFAAIAAgZIhFAAgAAjgZIBFAAIAAgaIhFAAgAhngZIBFAAIAAgaIhFAAg");
	this.shape_9.setTransform(75.525,25.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#050102").s().p("AjED5QgVAAgPgPQgOgPAAgUIAAg9QAAgSAMgOQAMgPARgDIAAgrQgGgFgGgIQgEgGgIgQQgOgXgLgPQgOgUAGgXQAHgYAXgIIAtgVQgEgJAAgKIAAg3QAAgVAPgPQAPgOAUAAICmAAQAaAAAOAUQA8BPBrAmQAWAIAIAXQAIAWgOAWQgUAdgPAeQgFAKgHAFIAAAzQARAEALAOQAKAOAAARIAAA9QAAAUgOAPQgPAPgVAAg");
	this.shape_10.setTransform(26.4949,25.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#050102").s().p("AjEDHIAAg9ICgAAIAAgoIh3AAIAAhAIB3AAIAAgiIhLAAIAAgfIhAAjQgEgEgFgMQgRgdgNgQQBwguApgoIhQAAIAAg3ICmAAQBEBaB6AsQgTAbgUAlQgigRgcgVIAAAmIhNAAIAAAiIB6AAIAABAIh6AAIAAAoICgAAIAAA9gAhAg/ICPAAQgfgWglgrQgcAhgvAgg");
	this.shape_11.setTransform(26.475,25.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199.5,51.9);


(lib.sb_sc2gift = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _Image_
	this.instance = new lib.sc2gift();
	this.instance.setTransform(0,0,0.3923,0.3923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177,129.5);


(lib.sb_sc2framewhite = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_13
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221916").s().p("EggXAdgQhKgBg/gjQg7ghgmg6QhSh/A9iKMAWNgyRQAhhLBGgtQBFguBTABMAqkAAAQB0AABRBSQBSBRAAB0MAAAAyPQAAB0hSBSQhRBRh0ABgArx7mQgvAfgXAzMgWNAyQQgUAsAEAwQAEAuAaApQAbApApAXQAqAXAxAAMBAxAAAQBOgBA4g3QA3g3AAhPMAAAgyPQAAhPg3g3Qg4g3hOAAMgqkAAAQg4AAgvAeg");
	this.shape.setTransform(235.3035,188.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EggXAdgQhKgBg/gjQg7ghgmg6QhSh/A9iKMAWNgyRQAhhLBGgtQBFguBTABMAqkAAAQB0AABRBSQBSBRAAB0MAAAAyPQAAB0hSBSQhRBRh0ABg");
	this.shape_1.setTransform(235.3035,188.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470.6,377.5);


(lib.sb_sc2cup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#050102").s().p("AiBCkIAThzIgeADQgLACgHAAIAAgqIAWgBIALgNIgCACIAjgmIg3gsIAfgfIAIAHQAWgaATgfIAuARIg5A/IAPALIAggmIAoATIhIBPIAkgNIACAHIAPA+IgqAPIgBgQIgJABIgFAAIgUB4gAhTAIIALgBQAHAAAFgBIgEgRgAgtCYIAEgWIgUAFIgFhGIAggGIAFAuIAKAAIAqj9ICdAAIgrD9IATAAIgIAvgAAfBpIA3AAIAGgmIg2AAgAAuAVIA2AAIAGgmIg2AAgAA8g/IA2AAIAHgmIg3AAgAizCTIAYhQIAjACIgWBTg");
	this.shape.setTransform(170.325,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#050102").s().p("AieCjIAUh2QgUAggSAUIAEhLQAbghAWgsIgiAAIAJgvIAjAAIAKg8IAyAAIgKA8IAgAAIgIAvIggAAIgEAaIAJgJIAkAjIglAjIgQgUIgZCXgAgGChIAViDQgdAlgoAhIgGgMQgFgLgOgXQBKg4ArhYIhAAAIAJgyIDCAAIgJAyIhJAAQgQAegLATIAPAAIgFAaIAXgPQAPAVAZAnIAOAVIgwAkIgFgLIgeg2IgYCLg");
	this.shape_1.setTransform(133.475,16.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#050102").s().p("AAbByQANABAUAAQARACADgVIAHgsIgmAMIgDgSIgMhAIArgMQAFAUADASIAFAbIAPhXIg2AAIAIgxIA2AAIAKg7IA0AAIgKA7IATAAIgIAxIgTAAIgdCnQgGAtgvAAIgvABgAi1BxIAlgCQAZAAAMgBIADgUIg6AAIAHgpIA6AAIADgTIhBAAIAHgoIAkAAIgNgVIARgHIgqAAIAHgqIAxAAIAEgVIgaARQgIgUgPgYIAjgTQAJALAIAQIAHgnIAqAAIgOBPIAPAAIANhPIApAAIgGAmIASgSIAIgIIAcAVQgPASgZAYIgSgPIgDATIAwAAIgHAqIguAAIARAHIgRAVIAiAAIgHAoIhAAAIgDATIA6AAIgGApIg7AAIgDASQApAAAegCIgJAqQhnADhXAFgAhEgSIgTAIIAgAAIAXgcIgyAAg");
	this.shape_2.setTransform(94.775,16.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#050102").s().p("AAxCjIADgMIiqAAIgDAMIg2AAIAPhaIBdAAIAGgNIhJAAIAKg8IgnAAIAKg9IAUAAIgQgXQApgNAPgQQANgNAHgkIAtAAQgGAegIAQQAGAFAJAEQAJAFAUARIgYAYIArAAQgDgDgHgNIgGgLQAwgPAIgOQAHgKAFgjIAuAAQgGAggGANIA4AjIgXAVIASAAIgLA+IgnAAIgKA7IhtAAIgGANICIAAIgQBagAhxB3ICqAAIACgOIiqAAgAhNAfIB/AAIADgPIh/AAgAhsgOIDNAAIACgLIjNAAgAApg9IBNAAIgigYQgPAOgcAKgAhrg9IBHAAIgegYQgKALgfANgAgih+IAhgdIARANIAUgNQANAMAMAPIgjAYIgOgSIgIAHQgIAKgFACgAiPiGIAkgXIAQAVIAGAJIglAYQgHgOgOgRgABwh/IAjgeIAcAZIgUAPIgRANg");
	this.shape_3.setTransform(57.7,16.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#050102").s().p("ABLCdIABgJIg+AAIgCAJIgrAAIAMhKIgGAAIgHABQgCgRgEgQIggAAIgDAOIAiAAIgFAfIgiAAIgCAOQAHgCAPAAIAUgBIgBAEQgEANgEATIiIANIACgmQAGgCAIAAIAJgzIAkAAIgIAxQAGAAAEgCIAKg9IgsAAIANhJIB2AAIgOBJIAYgEIgGgMQgGgPgEgFQAggTAVgZIAsAAIgEAHIgDADIBeAAIgGAiQgSAOgVALQASAEAjADIgRAkIgIgCIgGAAIgMBMgAATB3IA/AAIACgMIg/AAgAACBOIB2AAQgegGgdgIQgeAIgdAGgAgLAvIAigHIgMgJIgWAQgABEAbQAVgIANgIIg7AAQAKAJAPAHgAhoAXIAdAAIADgSIgeAAgAgSggIAKg5IhPAAIgIAtIg1AAIANhIICDAAIACgMIh3AAIAFgcIEjAAIgEAcIh4AAIgCAMICGAAIgLBIIg1AAIAHgtIhRAAIgKA5gAArghIAEgSIA/AAIgDASgAhYghIACgSIA/AAIgDASgAAwg8IADgSIBAAAIgDASgAhUg8IAEgSIA9AAIgDASg");
	this.shape_4.setTransform(18.35,16.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188.4,32.8);


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

	// _Image__0
	this.instance = new lib.sc2car();
	this.instance.setTransform(0,0,0.5302,0.5302);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,530.2,225.4);


(lib.sb_sc1title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_13
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8ED4E").s().p("AjXDTIAAg7ICzAAIAAgfIiZAAIAAg8ICZAAIAAgbIgdAAIAAhKIgnAAQACA2gtAmQgfgRgggOQApgcAAghIguAAIAAg8IAvAAIAAgsIgkAAIAAg6IDpAAIAAA6IgdAAIAAAsIAnAAIAAA8IgnAAIAAA5IAmAAIAAAsICZAAIAAA8IiZAAIAAAfICyAAIAAA7gAhohkIAnAAIAAgsIgnAAgABDAgQgEgYgHgeQANACAtAAQAcACgCgbIAAilIBCAAIAAC3QABBCg8AAQgTACg7AAQAAgEgCgFgAAxgoIAAiXIA+AAIAACXg");
	this.shape.setTransform(286.475,28.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8ED4E").s().p("AgkDbIAAgzIi4AAIAAg1IC4AAIAAgWIiSAAIAAjEICSAAIAAgWIioAAIAAg3ICoAAIAAgmIBIAAIAAAmICoAAIAAA3IioAAIAAAWICSAAIAADEIiSAAIAAAWIC5AAIAAA1Ii5AAIAAAzgAAkAsIBJAAIAAgcIhJAAgAhtAsIBJAAIAAgcIhJAAgAAkgbIBJAAIAAgbIhJAAgAhtgbIBJAAIAAgbIhJAAg");
	this.shape_1.setTransform(235.225,28.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8ED4E").s().p("AjPC1IgQgSQA+g3AJhoIBHAMQgEAggIAgQAWAtAqALIAAiRIiiAAIAAhBIGDAAIAABBIiYAAIAAApICNAAIAABAIiNAAIAAAuIC0AAIgGAQQgMAjgFAOQhiABhigEQhggEgggvQgSAfggAiQgJgMgZgZgACHhTIAAgeIkLAAIAAAeIhJAAIAAheICqAAIAAgoIBKAAIAAAoICpAAIAABeg");
	this.shape_2.setTransform(183.75,29.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8ED4E").s().p("Ag4DaIAAjuIEAAAIAADsIhHAAIAAgUIh1AAIAAAWgAAMCMIB1AAIAAgXIh1AAgAAMA9IB1AAIAAgWIh1AAgAjXCoQgEgMAAgGIAdAAQARABAAgTIAAhFIgWAGIgWAHIgEhOIAwgJIAAhGIgoAAIAAhBIAoAAIAAhGIBBAAIAABGIAlAAIAABBIglAAIAAA3IATgDIASgEIAABGIgEAAIghAJIAABwQACA0gvADIgLABQgYACgSAAQgCgQgHgggAg8hsIAAhtIBGAAIAAAsQBVgLBggXIAXA9QgQACgSAEQAHADAQAGIATAFIgNAyQgNAlg3ABIiFAAIgEAAQhCAAAChGgAB4hhQAXACAIgWQAAgKADgKQhWAPg6AFQAAAWAbgCg");
	this.shape_3.setTransform(132.525,29);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjKDGIgUgqQBKgFBXgRIh2AAIAAjWIFpAAIAADWIh6AAIAjAGQBVANArADIgXA3IiwghIAVgsIhZAAIAbAtQhcAUhXAOIgGgPgAhsBYIDbAAIAAgSIjbAAgAhsAjIDbAAIAAgSIjbAAgAhsgRIDbAAIAAgQIjbAAgAjGhfIAAh0IGOAAIAAB0gABaiKIAqAAIAAgcIgqAAgAgTiKIApAAIAAgcIgpAAgAiAiKIApAAIAAgcIgpAAg");
	this.shape_4.setTransform(81.05,29.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjfDCQATgbAbgwIAtAUIApgUIAjA0IALASIgyAbIgLgWQgNgagNgSQgOAUgPAcIgMAYQgRgLghgRgABaDWQgCgRgIgiIAwAAQAVACgCgQIiCAAIAABBIg5AAIAAhBIgQAAIAAgwIAQAAIAAh1IBcAAIAAgRIhpAAIAAgtIAzAAIAAgRIgmAAIAAgoIAmAAIAAgQIgxAAIAAguIAxAAIAAgYIA7AAIAAAYIAyAAIAAgYIA8AAIAAAYIAuAAIAAAuIguAAIAAAQIAlAAIAAAoIglAAIAAARIA5AAIAAAtIhwAAIAAARIBfAAIAAB1IARAAIAAAwIgRAAIAAALQAAA1g4ABgABwBlIAjAAIAAgSIgjAAgAARBlIAjAAIAAgSIgjAAgABwAuIAjAAIAAgSIgjAAgAARAuIAjAAIAAgSIgjAAgAA5hOIAyAAIAAgRIgyAAgAA5iHIAyAAIAAgQIgyAAgAjOBwIAAk5ICQAAIAAE5gAiZA2IAmAAIAAgfIgmAAgAiZgdIAmAAIAAgdIgmAAgAiZhxIAmAAIAAgdIgmAAg");
	this.shape_5.setTransform(29.4,29.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#221916").s().p("AjXEZQgdAAgVgVQgUgUAAgdIAAg7QAAghAagVIAAgcQgRgRgDgZQgCgRAGgOQgKgSAAgTIAAg8QAAgUALgSIAAgGIAAg6QAAgdAUgVQAVgUAdAAIDpAAQAUAAARALIAbAAQAUgTAbAAIBCAAQAdAAAUAVQAVAUAAAdIAAC2QABArgSAgIACAOIAAAlQAZAVAAAhIAAA7QAAAdgUAUQgUAVgeAAg");
	this.shape_6.setTransform(286.475,28.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#221916").s().p("AjXDTIAAg7ICzAAIAAgfIiZAAIAAg8ICZAAIAAgbIgdAAIAAhKIgnAAQACA2gtAmQgfgRgggOQApgcAAghIguAAIAAg8IAvAAIAAgsIgkAAIAAg6IDpAAIAAA6IgdAAIAAAsIAnAAIAAA8IgnAAIAAA5IAmAAIAAAsICZAAIAAA8IiZAAIAAAfICyAAIAAA7gAhohkIAnAAIAAgsIgnAAgABDAgQgEgYgHgeQANACAtAAQAcACgCgbIAAilIBCAAIAAC3QABBCg8AAQgTACg7AAQAAgEgCgFgAAxgoIAAiXIA+AAIAACXg");
	this.shape_7.setTransform(286.475,28.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#221916").s().p("AgkEhQgXAAgTgOQgTgOgGgXIh1AAQgdAAgUgVQgVgUAAgdIAAg1QAAgUALgRQAKgQARgKIAAh+QgWgVAAgeIAAg3QAAgcAVgVQAUgUAdgBIBqAAQAIgRARgLQARgKAUAAIBIAAQAVAAARAKQAQALAJARIBpAAQAdABAVAUQAUAVAAAcIAAA3QAAAegWAVIAAB+QASAKAKAQQALARAAAUIAAA1QAAAdgVAUQgUAVgdAAIh1AAQgHAXgSAOQgTAOgYAAg");
	this.shape_8.setTransform(235.225,28.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#221916").s().p("AgkDbIAAgzIi4AAIAAg1IC4AAIAAgWIiSAAIAAjEICSAAIAAgWIioAAIAAg3ICoAAIAAgmIBIAAIAAAmICoAAIAAA3IioAAIAAAWICSAAIAADEIiSAAIAAAWIC5AAIAAA1Ii5AAIAAAzgAAkAsIBJAAIAAgcIhJAAgAhtAsIBJAAIAAgcIhJAAgAAkgbIBJAAIAAgbIhJAAgAhtgbIBJAAIAAgbIhJAAg");
	this.shape_9.setTransform(235.225,28.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#221916").s().p("AizEgQgggDgUgaQgHgKgSgSIgQgSQgWgVABgeQABgfAXgUQAagYAMgnQgOgJgIgPQgJgQAAgRIAAgiQgNgSAAgWIAAheQAAgdAVgUQAUgVAdAAIBrAAQAIgSARgLQARgLAVAAIBKAAQAUAAASALQAQALAJASIBqAAQAdAAAVAVQAUAUAAAdIAABeQAAAVgMATIAAAiQAAATgLASIAAAzQAPAIAKANQAVAegMAiIgFAQIgBACQgNAjgBAHQgGAYgTAOQgTAPgYABQhjAAhlgFQhAgBgugVIgOAQQgUAVgfAAg");
	this.shape_10.setTransform(183.7601,29.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#221916").s().p("AjPC1IgQgSQA+g3AJhoIBHAMQgEAggIAgQAWAtAqALIAAiRIiiAAIAAhBIGDAAIAABBIiYAAIAAApICNAAIAABAIiNAAIAAAuIC0AAIgGAQQgMAjgFAOQhiABhigEQhggEgggvQgSAfggAiQgJgMgZgZgACHhTIAAgeIkLAAIAAAeIhJAAIAAheICqAAIAAgoIBKAAIAAAoICpAAIAABeg");
	this.shape_11.setTransform(183.75,29.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#221916").s().p("Ag4EgQgaAAgUgRQgTAKgaABIgNACQgbACgTAAQgbAAgUgSQgUgRgDgbQgBgNgGgZQgGgTAAgRQAAgWAMgQQgJgRgBgQIgEhPQAAgZAQgVQgIgQAAgTIAAhBQAAgUALgSQALgQASgJIAAgHQAAgcAUgVQAVgUAdgBIBBAAQAMAAAKAEQALgFAPAAIBGAAQATAAAQAJQAQAKAJAOQAlgFBEgPQAZgGAXAMQAXAMAKAYIAYA8IADAMQANAZgGAaIgPA2QgCAJgFAJQACAIAAAJIAADsQAAAdgVAVQgUAUgdAAIhHAAQgdAAgUgUIgRAAQgVAWgeAAg");
	this.shape_12.setTransform(132.5326,29);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#221916").s().p("Ag4DaIAAjuIEAAAIAADsIhHAAIAAgUIh1AAIAAAWgAAMCMIB1AAIAAgXIh1AAgAAMA9IB1AAIAAgWIh1AAgAjXCoQgEgMAAgGIAdAAQARABAAgTIAAhFIgWAGIgWAHIgEhOIAwgJIAAhGIgoAAIAAhBIAoAAIAAhGIBBAAIAABGIAlAAIAABBIglAAIAAA3IATgDIASgEIAABGIgEAAIghAJIAABwQACA0gvADIgLABQgYACgSAAQgCgQgHgggAg8hsIAAhtIBGAAIAAAsQBVgLBggXIAXA9QgQACgSAEQAHADAQAGIATAFIgNAyQgNAlg3ABIiFAAIgEAAQhCAAAChGgAB4hhQAXACAIgWQAAgKADgKQhWAPg6AFQAAAWAbgCg");
	this.shape_13.setTransform(132.525,29);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#221916").s().p("AjpERQgRgLgJgSIgZg5QgIgQAAgRQABgRAIgPQALgVAWgJIAAiLQgSgVAAgbIAAh0QAAgdAUgVQAVgVAdABIGOAAQAegBAUAVQAUAVAAAdIAAB0QAAAcgSAUIAACMQAUAJAKASQAJAOABAQQACARgHAPIgWA3QgJAXgWANQgWALgZgFIi2ghIgJADQhuAVhHAMIgLABQgUgBgRgJg");
	this.shape_14.setTransform(81.0626,29.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#221916").s().p("AjKDGIgUgqQBKgFBXgRIh2AAIAAjWIFpAAIAADWIh6AAIAjAGQBVANArADIgXA3IiwghIAVgsIhZAAIAbAtQhcAUhXAOIgGgPgAhsBYIDbAAIAAgSIjbAAgAhsAjIDbAAIAAgSIjbAAgAhsgRIDbAAIAAgQIjbAAgAjGhfIAAh0IGOAAIAAB0gABaiKIAqAAIAAgcIgqAAgAgTiKIApAAIAAgcIgpAAgAiAiKIApAAIAAgcIgpAAg");
	this.shape_15.setTransform(81.05,29.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#221916").s().p("AjUEYQgMgIgegPQgcgPgIgdQgIgeARgbIALgRQgGgNAAgOIAAk5QAAgdAVgUQAUgVAdAAICQAAIALABQAUgVAdAAIA8AAQANAAALAFQAMgFANAAIA8AAQAgAAAVAYQAaADATAUQASAUAAAbIAAAuQAAAOgGANQARAUAAAaIAAAtQAAAagRASIAAAtQARATAAAaIAAAwQAAAegWAUQgLAngfAWQggAXgtABIg+AAQgVAAgQgKQgRAKgTAAIg6AAQgNAAgMgEQgZALgZgIIgPgGQgMAJgNADQgJADgJAAQgVAAgSgMg");
	this.shape_16.setTransform(29.3833,29.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#221916").s().p("AjfDCQATgbAbgwIAtAUIApgUIAjA0IALASIgyAbIgLgWQgNgagNgSQgOAUgPAcIgMAYQgRgLghgRgABaDWQgCgRgIgiIAwAAQAVACgCgQIiCAAIAABBIg5AAIAAhBIgQAAIAAgwIAQAAIAAh1IBcAAIAAgRIhpAAIAAgtIAzAAIAAgRIgmAAIAAgoIAmAAIAAgQIgxAAIAAguIAxAAIAAgYIA7AAIAAAYIAyAAIAAgYIA8AAIAAAYIAuAAIAAAuIguAAIAAAQIAlAAIAAAoIglAAIAAARIA5AAIAAAtIhwAAIAAARIBfAAIAAB1IARAAIAAAwIgRAAIAAALQAAA1g4ABgABwBlIAjAAIAAgSIgjAAgAARBlIAjAAIAAgSIgjAAgABwAuIAjAAIAAgSIgjAAgAARAuIAjAAIAAgSIgjAAgAA5hOIAyAAIAAgRIgyAAgAA5iHIAyAAIAAgQIgyAAgAjOBwIAAk5ICQAAIAAE5gAiZA2IAmAAIAAgfIgmAAgAiZgdIAmAAIAAgdIgmAAgAiZhxIAmAAIAAgdIgmAAg");
	this.shape_17.setTransform(29.4,29.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,315.1,58.4);


(lib.sb_sc1record = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#050102").s().p("AA2CAIACgIIgeAAIgCAIIglAAIANhVIAtAAQgjgIgPgRQgUAPgtAKIA4AAIgPBVIgnAAIACgIIggAAIgBAIIgmAAIANhMIgGABIgFAAIgEgkQBegHANgMIhgAAIAGghIBpAAIADgMIAtAAIgBAGIgCAGIAeAAIgDgKIApgCIABAEIACAIIAjAAIgFAhIhnAAQAOARBcACIgDAIIgMAbIgLAAIgMBMgAAfBbIAeAAIACgRIgeAAgAhcBbIAeAAIAEgRIggAAgAARgyIANhNIBuAAIgNBNgAA8hQIAhAAIADgQIgiAAgAhugyIAOhNIBsAAIgNBNgAhDhQIAiAAIACgQIghAAg");
	this.shape.setTransform(252.8,13.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#050102").s().p("AgMBkIAXAAQANAAACgNIABgLIgVAMIghARIgJghIAogUIAegPIAGgkIgmAAIAPAMQAMAKADABIgcAcQgNgOgPgNIAZgYIgUAAIAFggIBdAAIADgKIguAAIgCAGIgnAAIAhhgIAoAAIgFAPIBQAAIgYBVIAbAAIgFAgIgVAAIATAaIgqAaQALARAVANIgNASQgIAJgHAHQgagYgIgUIgEAZQgEAfghADIgPAAIgUABQAAgTgDgOgABPAEQABAJAEAMQAUgNAOgLIgnAAgAAvhIIAsAAIAEgNIgrAAgAiQBcQAWAAASgCIADgPIgYAGQgCgagEgWIAYgHIAHApIAIgxIgjAAIAFggIAkAAIADgRIgRAAIACgLIgRAPIgBgqQAigcAUgjIAnADIgIALIAlAsIgbAeIgHgKIgEAXIgQAAIgDARIAfAAIgGAgIgeAAIgIAyIALgWIAKgVIAVAHIgXAuIgUgHIgDAPIAhgDIgHAjIhnAKgAhChJIgIAJIAnAAIgSgYg");
	this.shape_1.setTransform(222.25,13.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#050102").s().p("AhNCCIACgLIgbAAIgCALIgnAAIARhhIBnAAIgQBhgAhhBYIAbAAIAEgVIgbAAgAA9B9IgoAAQgvACAKgxIAShuIBVAAIAHgtIhVAAIAHgrICAAAIgWCBIhUAAIgKA6QgFAVAWgBIAMAAQATABAGgVIAKglIASAGQALAGALACQgGAbgKAWQgKAhgoAAIgFgBgAh+AYIAGgdIBpAAIgFAdgAh3gOIAFgfIBpAAIgFAfgAh4g2IAFgiIB4AAIgFAigAhjhjIAFgeIBeAAIgDAeg");
	this.shape_2.setTransform(192.65,13.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#050102").s().p("AgnCFIAFgfIhwAAIAFggIBwAAIADgNIhZAAIAUh3IBZAAIACgOIhmAAIAFghIBmAAIAEgXIAsAAIgEAXIBmAAIgFAhIhmAAIgDAOIBZAAIgUB3IhZAAIgCANIBwAAIgFAgIhxAAIgFAfgAAWAbIAtAAIACgRIgsAAgAhCAbIAtAAIACgRIgsAAgAAdgQIAtAAIADgQIgtAAgAg7gQIAtAAIADgQIgtAAg");
	this.shape_3.setTransform(162.775,13.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#050102").s().p("Ah8CFIAPhZQgKAJgQAKIgGgrQAkgXAwgzIAeAaIgDADQgQASgNAJIgWCDgAgbB6QAAgagBgHIAUAAIAWABQAUAAACgTIALg/IhNAAIAIgrICfAAIgIArIgjAAIgNBJQgFAvgwABIg3ABgAh7hIQAlgXAnglIAfAbQgqAng1AlgAgHhKIAHgqICOAAIgIAqg");
	this.shape_4.setTransform(133.625,13.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#050102").s().p("AiVCAIAGgjIBtAAIADgTIhdAAIAGglIBdAAIADgRIgSAAIAIgsIgXAAQgFAgggAXQgSgLgQgHQAbgRAEgUIgcAAIAGglIAdAAIAEgaIgWAAIAGgkICNAAIgGAkIgRAAIgFAaIAZAAIgHAlIgYAAIgGAiIAXAAIgEAbIBdAAIgGAlIheAAIgDATIBtAAIgGAjgAgxg9IAXAAIAFgaIgYAAgAAngNQAGABAeAAQAQABACgQIARhkIAoAAIgTBvQgGAogkAAIgwABgAAlgYIAQhcIAlAAIgPBcg");
	this.shape_5.setTransform(103.125,13.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#050102").s().p("Ag5BzIg5AIIghAEIgBgkIAkgEIACgLIgWAGIAAgFQAAgVgDgbIAWgEIAEAxIAJg5IgfAAIAGggIAfAAIACgQIgXAAIAEgWIgJgYQAegXASgiIAmACQgDAHgEAEIAOARIAPAQIAFgbIA8AAIADgRIAkAAIgCARIA7AAIgGAfIgQAAIgLAPIAfAAIgFAgIipAAIAFggIAiAAIgHgPIgOAAIgWAWIgFAfIgVAAIgDAQIAbAAIgGAgIgaAAIgJAxIASgqIASAFIgCAFQgLAcgGAMIgRgEIgCANIAegDIgEAUQAigJAGgSIgbAAIARhkICUAAIgRBkIgKAAQAQAIAJACIgGARIgCAFQgJAYgagCIgUAAQggACAEgdIAFgbIgNAAQgKAqhDAUgABLBbQgCAHAHABIAEAAQAHgBADgHIAGgSIgWAAgAAFAtIBJAAIACgLIhKAAgAAKAKIBKAAIACgKIhKAAgAhXg+IArAAIgTgaQgLAOgNAMgAA2hFIATAAIALgPIgkAAg");
	this.shape_6.setTransform(73.225,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#050102").s().p("Ag9BiQA2gQAFghIgWAAIABAPIgeAJIgDg/IgUByIgoAAIAZiOIgkAAIAHgnIBpAAIgGAnIgfAAIgDAVIAagHIADAbIACARIAcipICTAAIgfCyIghAAIgFAfQgCAHAHAAIACAAQAGAAAEgJIAIgcIATAJIAIACIgDAMQgCAJgGAMQgJAdgagBIgRAAQgkABAIgjIAHgnIgQAAQgGA1hFAcgAAUAOIBCAAIABgKIhCAAgAAagZIBCAAIAEgWIhCAAgAAjhPIBCAAIADgPIhCAAgAiWBNIAahQIAcAEQgHAbgUA5gAhqhWIAHgoIBXAAIgGAog");
	this.shape_7.setTransform(43.25,14.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#050102").s().p("AhNBkQAhgHAegJIgOgSQgJAJgOAJIgWgdQAkgWAXggIArAAIgFAJIBXAAIgGAiQgTAXgYASQAVAGAkAEQgOASgLASQgsgHgggRQgiARgxALQgEgRgIgSgAAaBDQAUgMANgNIg4AAQAJANAOAMgAiACEIAOhTIgTANIgEguQAngbAngqIAXATIAOAAIAbgRIglgmIAfgYIAJAJIAngeIAjASIgyAgIAKALIBBgoIAdAZQgXAKgqAWIgmAVIArgDQgBgCgCgDQgDgFgCgBIAfgRIAnA0IgiATIgIgMQgxABhWAGIgCgOIgYAYIgVB6gAh7hJQAlgVAlgkIAdAbQgwArgtAeg");
	this.shape_8.setTransform(13.825,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,266.8,27.2);


(lib.sb_sc1io = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221916").s().p("AgjA/QgYgBgBgXIAAhMQAAgLAHgHQAGgGALgBQAkgBAkABQAYABABAaQABAjgBAkQgBAbgcAAg");
	this.shape.setTransform(191.4625,6.3625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221916").s().p("AgaCnQgaAAAAgYIAAkcQAAgLAHgHQAHgHALAAIA3AAQALAAAHAIQAHAHAAAMIAAEVQAAAPgHAHQgHAHgOAAIgZAAIgaAAg");
	this.shape_1.setTransform(191.45,34.5125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#221916").s().p("AgkETQhygNhNhTQhXheAVh9QAUh+BxhDQBLgsBWABQC+AHBOCaQAvBbgcBgQgcBghYA6QhOAzhbAAQgTAAgUgCgAhxiGQhZBEAWBlQAOA8AzAoQAyAmBBADIAkgIQAVgEAOgFQBWggAWhXQAWhVg9hCQgxg1hKgGIgTgBQg+AAgxAlg");
	this.shape_2.setTransform(233.5298,32.1446);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221916").s().p("AtQD/QgOgFgKgJQgMgKABgMQAAgMAMgKII9l7QAsgdAggQQArgVAogIQAggHAbADQAbADARATQARATACAdQACAXgFAfIgJA1IgOBdQgBAJABAGQACARAHAHQAIAHAQgCQArgFBBgNIGthSQCkghAZgEQAvgHAuADQAiACAUAaQAUAYABAmIABBdIAABZQAAAYgYAEQgaAEgTgNQgTgOgEgbQgCgNAAgTIAAggIAAgOQABgJgBgGQgIg5g8ACQgrADg3AMIpIB2QgWAFgfAEIg3AGQgKABgUgEQgggIgOgZQgOgYAHglQANg2AEgbQADgbgFgYQgEgVgPgJQgPgJgVAHQgQAEgXAOInEEdQgrAageAQQgbAPgcAAQgTAAgUgHg");
	this.shape_3.setTransform(88.449,33.2377);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,263.4,59.9);


(lib.sb_sc1high = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8ED4E").s().p("Ag/C/IAJg6IifAAIAJg2ICgAAIADgRIBCAAIgDARICgAAIgJA2IigAAIgKA6gAAvA2Qg/AAgyAEQgOAAgPAEIgGgkQgdAMgvAZIgQg4QAdgJArgUQgYgTgcgPIAlgrIAiATIAUAMIAkgdIAGADIAFAFIAIgIIAGgHIiQAAIAJg0ICYAAIAEgiIBEAAIgGAiICYAAIgJA0IiqAAQgOAOgaAXQAIAEAKAJQAPgLAcgbIAKgKIAkAgIgEADIAFgBIBGggIAVAuQgcAPgjAOQAaAKAiATIgjAzIhFgpIARAhIgyAXgAAggQIgoAeIAmAAIgJgUIAsgXIAQAhIAagiIgLgjQgRAOgvAjgAhmgZIAQAnIAOAAQAMgHAQgMQAJgIAEgDQgTgSgbgWg");
	this.shape.setTransform(297.95,27.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8ED4E").s().p("AiWC8IAShuQgcAngtAkIgChTQAvghAmg0IhCAAIAKg7IBIAAIAHgqIggACQgUAAgLACIAAgTQACgYgBgPQBEgDB5gIIACA4QgVADgoADIgFAAIgHAtIBCAAIgKA7IhCAAIgHAnIARgQQANAKAlAoIAEADIgvAvIgggmIgUB2gAAKB7QAWACAlgBQAaAEACgdIAxkfIA+AAIg1E3QgGA7g/ACQgSACg5AAIgBg/gAAIBZIAnjoIA7AAIgnDog");
	this.shape_1.setTransform(253.275,27.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8ED4E").s().p("AiUCLQgjgyAPhYQAQhZAxgxQA0gzBQAAQBVAAAjAzQAiAxgPBZQgOBYg2AxQg2AzhRAAQhOAAgjgygAgshWQgbAggJA4QgKA7ASAdQAQAaAjAAQAjAAAagaQAegeAKg6QAKg3gTghQgRgeglAAQgjAAgaAeg");
	this.shape_2.setTransform(207.9023,26.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZCkIgkAaQgVgpgVgZIAkgXIhGAAIAfAXIhEBCIgogmQAdgYAbgbIgxAAIAJg1IAYAAIAaicIgTAAIAJg1IATAAIAFgeIA7AAIgFAeIAyAAIAFgeIA6AAIgFAeIASAAIgJA1IgSAAIgZCcIAXAAIAJgvIAfi2ICeAAIg2FAQgHAogoADQgfADgdAAIgBgVQgBgTgCgOQAQABASAAQATAAADgRIAHgrIgrAAQgRBHgwAxgAgVCGQAPgVAGgMIgvAAgAhzAwIAxAAIAEgXIgxAAgABSARIAoAAIAHgoIgoAAgAhogSIAyAAIAEgXIgyAAgABjhPIAoAAIAHgrIgoAAgAhchXIAxAAIAEgVIgyAAg");
	this.shape_3.setTransform(163.525,27.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjTCMQB1goAJhMIABgIIgrAAIAEgZIgoAcQgLgmgKgZQBSgtAihAIA4AaQgkA3giAeIC3AAQgggogKg3IhFAAIAJg3IBxAAQAWBfBOAyQgZAfgSAhIgbgSIgIAkQgMA8gEAMQgLBNhTgCIgnACIgYAAIgCg/QAsADASgBQAdABAFgcQAEgMAEgcIAIgoIhYAAIgBAFIgDAIQgMBtiRA3QgSgjgPgSg");
	this.shape_4.setTransform(118.375,27.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA9CSIAlggIhBAAIAZAgQg4AhgeANIgWguIgGAkIgzAAIADgPIg5AAIgCAPIgzAAIAVh6IgOgrIAygMIALgDIgRgIIAlggIAJADQATAIAFADQARgKANgQIg/AAQgXAbgfAVQgEgEgIgVIgHgQQAggVAaggIgpAAIAMhDIBCAAIAEgdIA8AAIgGAdIA8AAIgKBAIgwAAIAEgRIhZAAIAAAIIAwAEIgIALIBVAAIgJAyQgSAVgTARIArAUIgcAoIgOBaQAmgNAcgSIgmAAIAljeIA1AAIAHgUIg9AAIAIgyIDAAAIgJAyIhGAAIgIAUIA/AAIgnDeIgqAAIA5AgIgqAuQgkgbgcgTgAiZB8IA3AAIAFgcIg3AAgAAnBEIBEAAIAEgUIhFAAgAiaAyIBlAAIgsgWQgYANghAJgAAxALIBEAAIAEgRIhGAAgAA7guIBEAAIADgRIhFAAg");
	this.shape_5.setTransform(74.75,27.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAVCsIgCgTIiNAAIAPhZIC1AAIgNBOQAcgCACgYIALhCIjnAAIgXCKIg+AAIAfi7IFkAAIgXCJQgIAvg2ACIgLAAIg4ADIAAgSgAg3B2IA9AAIADgSIg9AAgAiRgKIAPhbIEbAAIgPBbgAhLgvICdAAIADgQIieAAgAizhyIAIgxICfAAIAEgaIBAAAIgEAaICjAAIgIAxg");
	this.shape_6.setTransform(29.575,27.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// a
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D4374F").s().p("AsrEEIgXgQQgiASgPAHQgQAHgSAAQgRAAgOgGIgJgFIgnAAQgNAAgPgFQgOAFgOAAIgzAAQgkAAgYgbQgkAbgyABIgLAAQgnAEgUAAQgVgBgSgJQgSgKgKgRIgpAAQgLAQgRAKQgSAJgUAAIg+AAQglAAgYgdQgZgcAHglIAfi5QAFgcAVgTIgEgFQgYgcAGglIAJgyQAFgcAWgTQAWgTAdAAIBoAAQAYgaAjABIBBAAQAjgBAYAaIBkAAQAUAAASAKQAOgGAOAAIAJAAQAXgcAmAAIA7AAQAaAAAVAPQAIgCAKAAIDAAAQAeAAAXAUQAWAUAEAdIACgDQALgUATgLQASgLAVAAQAKgSATgLQASgLAWAAIByAAQAcAAAVASQAWARAHAbQAHAeAOAWIADgPQAFggAZgTQAKgVATgNQAUgNAYABIA7AAQAMAAANADQAKgDAPAAIA6AAQAUAAASAJICQAAQAZAAAVAPQAUAOAJAYQBKhEBtAAQByAAA9BHIAJANQAGgTAMgNQAWgaAigBIC9gLIAFAAQAfAAAXAUIACACQAYgdAmAAIA+AAQAlAAAYAcIAEAGIARgCIBcAAQALgQARgIQASgKATABIBDAAQAUgBASAKQARAIALAQIBRAAQAhAAAXAXQAYAXAAAiQAAAJgCAGIgJAzQgCAOgIAPQABAVgIASIADAKQAIAhgUAdIgBAAQAGAOAAAQIgCAPIgJA0QgFAdgWASQgWAUgeAAIhcAAQgIAZgVAQQgVAQgbAAIhDAAQgmAAgXgcQgMgOgEgPIhJAAQgPgBgNgEQgpAzhKADQgVACg6AAQgbAAgVgQQgWATgeAAIg+AAQglAAgYgdIgGgHQgMgCgJgEQgigQgKgkQgmAqg1AXQg1AXg+AAQhsAAg9hHIgHgKQgOAjgdAWQgdAVgoAEQghADgiAAIgOgBQgSAIgRAAQgRAAgRgJQgOAHgRAAQgLAAgJgCQgVgFgQgRQgXAYgiAAQggAAgXgWIgognQgGgFgGgJQgXAggjASQglARgvAAIgDAAIhAACQgfAAgXgVQgaANgfANQgNAEgPAAQgTAAgRgJQgSgIgLgQIgIAJQgXAagkAAQgbAAgVgQg");
	this.shape_7.setTransform(163.6819,27.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,327.4,55.2);


(lib.sb_sc1giftgo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sc1_giftgo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEgZIAZgIIBVArIgWhBIAUgGIAdBXIgYAIIhXgrIAWBBIgTAGg");
	this.shape.setTransform(79.925,31.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsArIBSgcQAGgDgCgIQgCgGgJABIg9AUQgLACgJgHQgIgFgDgJQgDgJAEgJQADgJAKgFIBSgcIAGASIhPAbQgFAEACAFQACAGAGAAIAGgBIAzgSIAGgBQALgDAJAGQAJAGADAKQADAJgDAJQgEALgLAEIhVAdg");
	this.shape_1.setTransform(36.4308,45.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsArIBRgcQAHgDgCgIQgDgGgIABIgEABIgxAQIgIACQgLACgJgGQgIgFgDgJQgDgJAEgJQADgJAKgFIBSgcIAGASIhPAbQgGADADAGQACAGAGAAIA5gTIAGgBQALgDAJAGQAIAGAEAKQADAJgDAJQgEAKgLAFIgGADIhPAag");
	this.shape_2.setTransform(51.0308,41.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgngxIAVgHIBTBFIgXAIIgPgMIg/AVIgFASIgXAJgAggAKIArgOIgggcg");
	this.shape_3.setTransform(66.825,37.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhEgZIAZgIIBWArIgWhBIATgGIAdBWIgYAJIhWgsIAWBCIgUAGg");
	this.shape_4.setTransform(15.325,52.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXgoIATgGIAcBXIgTAGg");
	this.shape_5.setTransform(26.075,49.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah8D5QgHgDgEgIIhCiWQgDgIADgHQADgIAHgEIArgUQAIgDAHADQAIADADAIIBCCWQAEAIgDAIQgDAHgIAEIgrAUQgEACgEAAIgHgCgAgnDEIhFieQgCgFAEgBQAJgDAGgMQAFgMADgTQADgZgCgqQgBgUAJgSQAMgWAAgVQgCgagPgtQgCgFAAgCQABgDAEgCIAFgDQAQgFAPAGQATAHANAZQALAYgBAfIAAApQAAAOAGAJIADAEQAAABAAAAQABAAAAgBQABAAABAAQAAAAABgBIBagnQAKgFAIACQAWAFAPASQAEAGgBAGIgDAPQgCAIAGAFIARANQAIAGgDAJIgEARQgCAJAFAFIAJAKQAPALgIATIgCAFIgDAKQgDAIAIANQAEAJgCAIIgFAQQgHARgNAJQgTANggANIg1AWIgZAJIhSAUIgCABQgCAAgCgEg");
	this.shape_6.setTransform(133.3449,30.5556);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D4374F").s().p("AiKEWQgSgIgIgSIhCiWQgIgVAHgTQAHgVAUgJIArgUQAPgHARAEIAJgGQADgFACgQQADgWgBgnQgCgeAOgZQAIgOgBgMQgBgYgOgmQgMghAdgSIALgFQAYgJAbAKQAeALASAlQAQAggBAnIgBAWIAIgEIA1gWQATgIARAEQAgAHAWAbQAPASgGAXIAAACIABABIAFADQAMAJAFAOQAFANgEAPIgCAHQAPANAFASQAEASgJATIgBACIgBAEIAAAAIAAABQALAVgFAUIgHAVQgLAbgVANQgQALgnARIg2AXIgdAKIhSAUIgBAAQgIATgSAJIgrAUIgGACQgIACgHAAQgLAAgKgFg");
	this.shape_7.setTransform(133.3632,30.536);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D4374F").s().p("AgagKIAZgmIAcBig");
	this.shape_8.setTransform(114.025,12.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D4374F").s().p("AhTgkICngGIiEBVg");
	this.shape_9.setTransform(106.175,29.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D4374F").s().p("AAFgUIAcARIhBAYg");
	this.shape_10.setTransform(154.975,10.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D4374F").s().p("AhiALIAxhJICUB9g");
	this.shape_11.setTransform(106.875,15.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D4374F").s().p("Agbg5IA6ALIg+Bog");
	this.shape_12.setTransform(153.15,5.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EEE455").s().p("Ag8DOQgpgTgSgyIgDgKIgCgNIgSiRQgFgfAGgcQAGgeAOgWQAOgXAWgRQAWgRAcgJQA3gQApARQAoASASAwQAEAMACAPIhQAZIgCgHIgCgHQgGgRgQgHQgQgGgVAGQgXAHgMAUQgMATADAZIASCRIADAOQAGAOAPAJQAPAJAXgHQAZgIALgTQALgUgCgbIg2AQIgJhPICFgpIAKBSQAEAhgGAbQgFAcgOAXQgOAWgXASQgXARgdAJQgYAIgVAAQgaAAgWgLg");
	this.shape_13.setTransform(132.3586,79.3028);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhUDEQgMgVgFgGQAVgFAYgIQANgEgEgMQgBgLgDgIIgWAHIABAJIgsAOIgZhpIA+gVIgFgQIgsAOQgEAFgNAJIgIAHIgegkQAYgOAYgXIgvgMIARgbIgZAJIgNgnICHgtQgIgIgFgIIAzgRQARASALAIIA2g3IAhAUQgbAegZAZQADADAGACIAIACQALgMASgXIAUgVIAiAXIglApQAcAAAdgBQgCAPAAAgIgvAAIAKAgQABADAFgBIABgBQAEgCgBgDQABgCgEgMQAIAEAUgEIACgBIAFAcQAAAOgYAHIgRAFQgiALgGgRIgOgnIgaAIIAEAKQAKAegeAiICGgrIAOAlQgJAagQAcQAJAAAagEQASgDAJAAQgLAcgFATQg3ACgZgEQgQARgxAiQgTgSgRgOQAegOAXgPQgbgLgXgPIAMgLIgSAHIgMgkIAagJIgSgGIgYgLQAXgUgLgYIgJgdIA/gWQgrgKgfgZQgQAsgTAcIAPgFIAfBbIhCAWIAFAUIBDgWIASBEQALAlglAOQgMAGgqAOQgDgDgEgHgAA7A+IAkAOQANgQAGgRgAiRhLQAGABAPAFIAVAFQAJgNAKgSg");
	this.shape_14.setTransform(96.7,96.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EEE455").s().p("AiRA+QAJA1AHA0IgmABQgIhEgIgxIAhgEIgIgaIgmANIgSg2IB6goIASA2IglAMIBEDKIgvAPgAgWCTIA0gRIgNgOIgaAJIgZhMIDJhBIAaBKIgbAJIgCATIA1gRIAMAlIjuBPgABFBjIALAOIAggKQACgIAAgLgAAYBBIAEAMIBrgjIgEgMgAhaAuIgIgQIAYgSIAxBMIgaAUQgRgegWgggAg+AHIDmhMIANAlIjnBLgAhpiQIAygRIgIgYIAtgPIAIAYIAUgGIgIgZIAvgPIAIAYIAygQIAvCKIjUBGgAgjhIIAFARIAVgHIgFgRgAAShaIAGARIAVgHIgGgRgABKhsIAGARIAVgHIgGgRgAg0h4IAGARIAVgHIgFgRgAACiKIAGARIAVgHIgGgRgAA6icIAGAQIAVgHIgGgQgAjkhuIBhggIARA0IhhAgg");
	this.shape_15.setTransform(76.775,62.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ah5DFQAfgnAOghQgKgGgJgCQgBAFABADIg2gGQgFhGgIg0IgYAHIgTg1IAigMIgPhHIA6gPIAMBDIBKgZIASAwQAYBagIA9IAqAPIgUA6IglgRQgSAjgaAqIg2gegAhtgVQAHAqAEAmQAUAHAQAGQACgogRhAgAAyB1IAngMQAZgHgJgXIgXhAIhFAXIgUg5IBFgYIgKgcIAahGIhlAjIgUg5ICug7IAUA5IghBZIAFANIA/gVIAUA5Ig/AVIAeBUQAUA1g5AVIgeAMIgZAJQgMgXgTgdg");
	this.shape_16.setTransform(35.3,74.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiECaIAUgjIgSg1IgcAJIgRgxIAogOQgdgQgggLIAVgsQAnAOAlARIgRAiIAXgGIAjBkQAeAbAugRQBPgZBvgmQgCAgABAUIi4A7Qg2AQgigXQgMATgOAlgAg7BEIBdgfIgGgPIhPAbIgsh/IBQgbIgEgOIhZAeIgFgOIgUAtQgngUgjgMIASgsQApANAiAPIgIgXIBYgeIgGgTIAzgSIAHAUIBZgeIANAoIhYAeIAEANIBSgbIAsCAIhSAbIAGAPIBegfIAOAnIhfAgIAGAPIg0ARIgGgPIhcAfgAgSgPIAGAPIAdgKIgGgPgABAgrIAGAQIAegLIgFgPgAgig+IAGARIAdgKIgEgRgAAwhZIAFAQIAfgKIgFgRg");
	this.shape_17.setTransform(58.15,111.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D4374F").s().p("AjiCLIhUiFIAahXIHFiXICOCNIgJC/IlcCFg");
	this.shape_18.setTransform(51.9,61.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EEE455").s().p("AgPDYQgXAAgWgJQgTgJgRgRQgQgSgHgWIgDgMIgVigQgDgeAFgeQAFgcAPgXQAQgYAVgQQAYgRAbgJQAbgHAWAAQAYABAUAIQAUAJAPASQAQASAIAYIAGAZIASCRQAIBCgcAuQgdAug7ASQgXAHgWAAIgFAAgAgRh+QgYAHgMATQgMATADAaIASCRQAAAGACAGQAHATAQAHQARAGAVgGQAXgHALgTQAMgUgDgZIgTiXIgCgGQgGgUgQgGQgIgEgJAAQgJAAgKAEg");
	this.shape_19.setTransform(163.5546,69.6803);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D4374F").s().p("At8BcIBgggIiCl6INyklIB/F2IKZjgIAHBOQATADAPAHIAKAEQAiAPAaAdQAZAdANAmIAGATQADAPABAIIARCPQAMBbgqBDQgqBGhWAaIgdAHI0EGog");
	this.shape_20.setTransform(92.6833,79.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#050102").s().p("An+G3IkvlhQGFilGJiRQMRkiAWBmQAxDhgOBzQgRCKhuAjQhIAYovCdQopCdgKAAIAAAAg");
	this.shape_21.setTransform(99.6306,89.123);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#D4374F","#561825"],[0,1],30.7,3.1,-11.8,-6.5).s().p("AkdADIFeiEIDdEEg");
	this.shape_22.setTransform(66.425,140.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185.4,153.5);


(lib.sb_sc1frameyellow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_14
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221916").s().p("A9zNeQhtAAg7iEQg7iFAuiOIF1x/QAZhLAxgtQAxgtA6AAMA10AAAQBTAAA6BUQA6BUAAB3IAAR+QAAB3g6BTQg6BUhTAAgA40rmQgaAcgPAuIl1R/QgWBEAMBKQAKBAAeAqQAfApAiAAMA7pAAAQApAAAhg4QAjg7AAhRIAAx+QAAhRgjg8Qghg4gpAAMg10AAAQgbAAgbAdg");
	this.shape.setTransform(220.4914,86.2,0.9543,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0E55B").s().p("A9zNeQhtAAg7iEQg7iFAuiOIF1x/QAZhLAxgtQAxgtA6AAMA10AAAQBTAAA6BUQA6BUAAB3IAAR+QAAB3g6BTQg6BUhTAAg");
	this.shape_1.setTransform(220.4914,86.2,0.9543,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.2,0,402.6,172.4);


(lib.sb_sc1framewhite = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_15
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221916").s().p("EgjeANaQhdAAhChUQhBhTAAh2IAAx5QAAh2BBhTQBChUBdAAMBAYAAAQBBAAA3AtQA3AtAcBLIGjR5QA0CNhCCEQhCCEh7AAgEgk9gLFQgnA6AABPIAAR5QAABPAnA6QAoA6A3AAMBG7AAAQA2AAAng5QAhguAHg+QAGg+gVg6Imjx4QgRgwghgdQgggdgkAAMhAYAAAQg3AAgoA6g");
	this.shape.setTransform(249.5159,85.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgjeANaQhdAAhChUQhBhTAAh2IAAx5QAAh2BBhTQBChUBdAAMBAYAAAQBBAAA3AtQA3AtAcBLIGjR5QA0CNhCCEQhCCEh7AAg");
	this.shape_1.setTransform(249.5159,85.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,499.1,171.6);


(lib.sb_sc1car2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.kicks();
	this.instance.setTransform(0,0,1.25,1.25);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(83));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,590);


(lib.sb_sc1car1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sentra_png
	this.instance = new lib.sentra();
	this.instance.setTransform(0,0,1.25,1.25);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(83));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,483.8);


(lib.sb_sc14w = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjUC7IAJg1IBHAAQgLgUgPgYIAogXIgzAAIAKg4IB/AAIAEgUIhSAAIAFgbIg2AYQgDgNgPgmIgFgJQCOgvAzhDIBLAFIgGAIIgHAHQAuBABeAYIgsA/QgZgKgUgLIgEAbIhQAAIgEAUIB+AAIgJA4IgzAAIAjATIgTAUIgcAcIBKAAIgJA1gAAPCGIAvAAIgagQIAvgzIg4AAgAhFB1IgfARIAwAAIALhDIg9AAgAgxg/ICAAAQgbgYgYggQgjAfgqAZg");
	this.shape.setTransform(251.225,26.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AADC/IAThwIh3AAIALg+IB2AAIALhBIgtAAIgcA2IgZgIQgVgGgNgGQAlg6AhhfIA8AMIgRAtIAeAAIAOhQIBBAAIgNBQIBPAAIgLA+IhPAAIgMBBIBcAAIgLA+IhbAAIgTBwgAi+C9IAdirIgPAQIgWAaIAGhaQAzg/AthhIA7ASIgqBNIgwEcg");
	this.shape_1.setTransform(206.7,27.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhEC4IADgVIhcAAIgEAVIgyAAIAxkdIAoAAIAFggIgxAAIAIgyIDNAAIgIAyIgqAAIgGAgIAmAAIgwEdgAiWB4IBdAAIADgWIhcAAgAiLA1IBdAAIADgTIgGAAQggAAAGgjIAJg0IgPAAQgIA4gbAoIgNgLIgFgFgAiMAOQAUgXAJgsIgSAAgAgsgSQgCAOAOAAIAEAAIAIgxIgSAAgAhJhlIAPAAIAFggIgOAAgABoCtIg0AAQg3ABAJg4IAdirIBhAAIAMhHIhjAAIAKg5ICdAAIggC4IhhAAIgQBfQgEAUAVAAIANAAQAWACAFgWIAPg9IArANIALADQgLAogMAjQgMAtgzAAIgDAAg");
	this.shape_2.setTransform(160.925,28.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8ED4E").s().p("AjPCBQA+gfAVgbQAYgaAKgzIhYAAIALhAIF3AAIgLBAIhuAAIgSBlQgFAXATgCIAFAAQAUADAGgYIALgjIAIgcIAtATIAPAEQgOAwgLAYQgRAyg/gDIgmAAQg+gBAKg7IAUh4IgnAAQgQCEiKA5QgQgigQgUgAh/h2IALhAIE3AAIgLBAg");
	this.shape_3.setTransform(115.375,28.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8ED4E").s().p("AjWDAIAYiQICTAAIADgQIh6AAIAYiMIEtAAIgYCMIh7AAIgCAQICUAAIgQBhQgGAqgtACQgPABgeAAQgBgCAAgLIgDgMIgSADQgBgKABgJIieAGIABgpIBLAAIAEgXIhXAAIgRBlgABGCTQAQAAACgNIAIgrIhaAAIgDAVIAWAAIAAgIQABgFgCgBIArgFQAAAcADAagAAXgFIBAAAIACgQIhAAAgAhggFIA+AAIADgQIg+AAgAAfg1IBAAAIACgQIg/AAgAhYg1IA+AAIADgQIg+AAgAAvhwIACgNIhFAAIgCANIg+AAIACgNIhgAAIAHgtIBgAAIAEgVIA+AAIgDAVIBFAAIADgVIA/AAIgEAVIBgAAIgHAtIhgAAIgCANg");
	this.shape_4.setTransform(72.125,27.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8ED4E").s().p("AAPC2IALhAIjJAAIALhDQBRhlCXiDIBpAAQioCNhHBVIBoAAIAOhOIBUAAIgNBOIA1AAIgMBJIg2AAIgLBAg");
	this.shape_5.setTransform(25.675,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// a
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D4374F").s().p("AKbERQglAAgYgcIgFgGQgYAhgpAAIg+AAQglAAgYgdIgIgKQglAdg2AAIg6AAQgKAAgPgCQgUANgYAAIgyAAQgaAAgUgOQgVAOgZAAIgxAAQglAAgYgcIgCgDQgkAWgxAAIguAAQhFAAglgsIgCgCQglAcgyAVQgPAGgQAAQgVAAgSgKQgSgLgLgSQgiAig2ACQgQACgiAAQgVAAgSgKQgRgKgLgRIgBAAIgDgDIhCADQgLASgSAKQgSAKgVAAIg9AAQglAAgYgcQgMgOgFgTQgKAUgTAMQgTANgYAAIhUAAQglAAgYgdQgNgPgEgUIhxAAQgmAAgXgcQgZgdAHgkIALhEQAEgVANgPQBWhrCciIQAXgTAeAAIBpAAQAUAAATAKQARAKALARQAYgTAdAAIAuAAQAWgVAfAAIA/AAQASAAARAIQARgIASAAIA+AAQAfAAAXAVIAnAAQAbAAAVAQQAXgUAdAAIE4AAQAcAAAWASQAVgTAeAAIDOAAQAIAAAIABICUAAQAXAAATAMQASAMALATIAGgNQAKgVAUgMQATgNAXAAQAKAAANAEIA7ARIAHADIAQADQAYgbAkAAIBBAAQAhAAAYAYQAXAXAAAhIAAABQAcAGARATQBnglAfgqQAZgfAnAAIAFAAIBMAFQAYABAUAPQATAPAIAXQAEAMAAALQAaASAoALQATAFAPANQAOANAHATQAHATgDAUQgDATgLAQIgjAxIgLA+IgCAIQAOAUAAAaIgBAQIgJAyQgFAdgWATQgXATgdAAIlvAAQglAAgYgdQgXgbAFgjIgHAlQgFAdgWASQgWATgeAAgAu6hhQAZAZAAAiIgBAJQAHAEAIAHIAHgqQgGgFgHgHQgNgQgEgWg");
	this.shape_6.setTransform(140.2519,27.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,280.5,54.7);


(lib.scbg = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bg();
	this.instance.setTransform(382,-112,1.0175,1.0175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scbg, new cjs.Rectangle(382,-112,610.5,1221), null);


(lib.sb_scplus = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D4374F").s().p("AgNBBIAAg1Ig0AAIAAgaIA0AAIAAgyIAbAAIAAAyIA0AAIAAAaIg0AAIAAA1g");
	this.shape.setTransform(21.275,21.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D4374F").s().p("AiTCUQg9g9gBhXQABhVA9g+QA9g9BWAAQBXAAA9A9QA+A+AABVQAABXg+A9Qg9A9hXAAQhWAAg9g9gAhbhaQgmAmABA0QgBA2AmAmQAnAlA0AAQA2AAAlglQAngmAAg2QAAg0gngmQglgmg2AAQg0AAgnAmg");
	this.shape_1.setTransform(20.95,20.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8ED4E").s().p("AhbBcQgmgmABg2QgBg0AmgmQAngmA0AAQA2AAAlAmQAnAmAAA0QAAA2gnAmQglAlg2AAQg0AAgnglg");
	this.shape_2.setTransform(20.95,20.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.9,41.9);


(lib.sb_scfree = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F8ED4E").s().p("AiyB0IAlggIAAgyIgkAAIAAg1IA0AAQgQgOgfgWIgMgJIAhgqIAYARQAcASAUAQIgcAkIAaAAIAABsQASAYAdAFIgdggQBCggAJgfIhRAAIAAgzIBXAAIAAgeIhJAAIAAg0IApAAIgcgrIA0gYIAjA0IggAPIAwAAQARgjANgfIA8AUIgdAuIAvAAIAAA0IhaAAIAAAeIBjAAIAAAzIhoAAQgDASgIANIAbgZQA2AjAcAWIggAkIAtgCIgQA3QhOAAhogDIgMAAQg7gCgbgjQghAhgMAQgAgHB6ICBAAQgNgOgggYQgPgLgFgHQgUAdgsAbgAiCh0IgkgbIAigoIAwAgIAYARIgkAtIgigbg");
	this.shape.setTransform(27.8,27.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D4374F").s().p("AjEDFQhShSAAhzQAAhyBShSQBRhRBzgBQBzABBSBRQBRBSAAByQAABzhRBSQhSBRhzAAQhzAAhRhRg");
	this.shape_1.setTransform(27.85,27.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.7,55.7);


(lib.sb_decolyellow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_26
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C89235").s().p("AgEgEIAAgDQABgFACgDQACgEAEABIgBAlQgIgLAAgMg");
	this.shape.setTransform(7.675,85.2795);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDBE5F").s().p("AhgBQIABgMQABgiAMgcQAMgeAUgWQAcgfAngRQAmgSAqgCQABA1gCAAQgWABgTAFQgoAKgfAWQgjAXgTAhQgRAcgGAeQgDALgBANg");
	this.shape_1.setTransform(9.7667,11.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C89235").s().p("ABlByQgGgdgTgZQgSgXgegRQgXgNgigMIgjgPQgSgKgKgPQgKgSgBgeIAAgCQABgOADgLQADAPAHAJQAJAPAUAJIAkAPQAkAOAYAPQA6AjAJA+IABAiIgCASg");
	this.shape_2.setTransform(10.4,32.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDBE5F").s().p("AhhBxIABgdQAAgRAFgMQAFgRAMgOQASgTAigKIA9gUQAhgPANgbQAGgMAEgWIADgTIgCAwIgDAbQgHAsgfAUQgRALgpALQgoALgSANQgWAQgIAZQgFAJgBAGg");
	this.shape_3.setTransform(11.05,55.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C89235").s().p("ABSA+QgXgigugHIgqgGQgYgFgQgKQgRgOgHgRQgFgOABgXIAAgDQAAgFAFgKIAFANQALASAVAKQAQAHAcAEQAiAFAKADQAnAKASAmQAHAOABAQIAAAHQABAPgFANQgFgOgHgLg");
	this.shape_4.setTransform(11.1196,74.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EDBE5F").s().p("Ag2A7QgKgIgEgOIAAgBIgBgOIABgtQAAANAJAKQANAPAWACQATABASgIQAkgOAOgkIABgCQAFgMAAgPQABAEgCAqIAAAFQAAAKgCAIQgHAmglAUQgSALgUABIgFAAQgUAAgNgLg");
	this.shape_5.setTransform(14.0571,87.183);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21,94.2);


(lib.sb_decolpink = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_28
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CA4479").s().p("AgHB5IgUgKIgOgHIgOgGIAUgXQApg6gGg7QgFgjgTgWIgFgGQgJgKgPgIIAGADIABAAIAAAAIABAAIAEACIABAAIADACIAuAXQAaAQAMAgQAMAdgEAfQgGA9gxAwIAAAAIgHgDg");
	this.shape.setTransform(78.9408,36.8778);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CA4479").s().p("AA5BrIgDgCIgBAAIgFgCQgegQgTgXQgXgbgKgiIgHgiQgEgWgEgNQgJgcgWgSQgLgLgIgEIAcAOQAWAKAMAIQARAKALAPQAOAUAJArQAJAvAKATQAQAfAcAWQAMAJALAHIgrgVg");
	this.shape_1.setTransform(43.075,20.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#912865").s().p("Ag9A2QgKgBgLgDIgUgIIAAAAQgLgGgMgKIAMABQAXAAAWgNQANgHAggXQAagUASgIQAdgMAdAFIAVAGIACABQAPAIAJAKQgagCgbANQgSAJgeAVQgaAUgNAHQgWAMgUAAIgFAAg");
	this.shape_2.setTransform(63.35,28.9342);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CA4479").s().p("AA7BHQgjgPgcgQQgegQgOgdQgPgfAGghQAAABAcALIAPAHQANAGAAABQgDAPACARQADAgAWAZIAGAFQAKALAVAJgAg5hFIAAAAIAAAAg");
	this.shape_3.setTransform(5.9767,7.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#912865").s().p("AhDArQgPgBgNgFIgEgCQgUgIgLgLIAPABQAagBAhgPQATgIAlgUQAggPAZAAQAXgBAdANIACABQAHADANALQgOgBgLAAQgZACggAQQglAUgRAIQgdANgaAAIgHAAg");
	this.shape_4.setTransform(21.925,10.5855);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84.6,49.3);


(lib.sb_decolgreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_25
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#428881").s().p("AAhATQgbg0AAghQASADAQAKQApAYAUAfQAMAVgBARQAAAMgOAKIgCAAQgHAFgHAAQgYAAgZgwgAhggqIACAAQAVgNAUgGIAAAJIABAVQgSgDgTADIgXAFQALgNAFgDg");
	this.shape.setTransform(44.951,31.9626);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#428881").s().p("ABgB0QAGgTgFgcQgFgWgKgVQgXgtg0geQgDgeAGgdQA7ARAoAoQAsAsAEA4QADAegOATQgEAFgEADIAAAAIgBABIAAAAIgEADIgBAAQgLAIgOAAIgLgCgAhxhRQgTABgTAFIgFABQAQgPAIgEIACgBQAWgMAUgFQAagHAcACQgLAbgDAQQgggJghABg");
	this.shape_1.setTransform(65.0445,21.4846);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#428881").s().p("AgjgRQgcgNgYgBQgLAAgMABQAJgNALgGIAHgEQAzgcA8AfQA4AdAbA1QABACg8AhQgdg5g6gbg");
	this.shape_2.setTransform(80.1508,6.7162);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#75BBAB").s().p("AhEBeQgdhEAKhFIABgHQADgQALgbQAFgMAFgGQAMgSAPgKQAagSAfgRQgKAGgKANQgVAdgIApQgGAcADAeQADA3AaAxQASAkATAPQAJAIANADQASAEAPgIIhCAlQgIADgIAAQgqAAgjhRg");
	this.shape_3.setTransform(68.8229,19.2171);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#75BBAB").s().p("AAHCUQgMgBgQgOQgWgVgPgnQgMgcgDgaIgBgdQADghAQgZQAQgaAjgWQAfgUAUgLQgIAEgQAPQgWAWgIAaQgMAdAFAkQAAAgAbA1QAfA9AfgRIgMAHIgqAYQgGADgGAAIgCAAg");
	this.shape_4.setTransform(47.0375,26.8536);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#75BBAB").s().p("AglCOQAHgHADgGQARgYACgfQACgWgUg0QgRguAHgcQAEgPAVgTQAPgPASgLIAdgRQgGAEgJALQgRAVABAeQACAWAMAgIALAfQAFARABAPQgBAXgJAWQgLAXgSANIgMAIQACABg0AeQAHgEAGgGg");
	this.shape_5.setTransform(30.15,42.9125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#428881").s().p("AAPAkQgMgEgQgKIgbgRQgWgKgbADIgHACIAHgIIAMgKIANgIQAWgKASgBQAdgCAiAXQAhAVAZgBQgDAGgHAHQgIAHgIAEIgLAGQgMAFgNAAQgKAAgKgDg");
	this.shape_6.setTransform(17.625,55.4451);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#75BBAB").s().p("Ag+BJQgQgSgBgaQgCgaAMgUQAJgPASgNQAIgGAagQIAigVIgUAQIgGAHQgaAeAHAlQADAUAMAOQAMAPATACIAEAAQAKAAAOgFQAQgGAKgJQgHAHgFACQgaATglATQgLAHgOABIgGABQgWAAgPgQg");
	this.shape_7.setTransform(8.0417,61.8652);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#428881").s().p("AgcAHQAAgBAJgFIATgLQAegQAAgBQAEASgPAQIAAABQgKAJgPAGQgOAFgKAAQAEgLgCgKg");
	this.shape_8.setTransform(14.2421,64.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.3,70.8);


(lib.sb_decolblue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_27
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A768D").s().p("AgBB4IgOgPIAAgBIgFgFQgZghgEgpQAcgCAYgKQgPA2AVAwIAKATIgUgOgAAQh5QATgRALAIIADACQAHAHgpArQgoAqgSAGQAPg0Asgng");
	this.shape.setTransform(62.5824,52.997);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#60B8C9").s().p("ADOBIIgVgPQhOgzhYgNQgggGg6ABQg3ABgegQQgJgFgVgTIgDgCIAAAAIgigfIAVAOQANAHATAEQAVAEAsgBQAggBAdADQA7AHA7AaQA6AYAuAnIAuArIgSgNg");
	this.shape_1.setTransform(84.8125,73.4625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#60B8C9").s().p("Ag7BDQgQgHgPgNIgHgGQgbgXgPgRQANAMAOAHQAOAHALACQArALAsgTQARgGApgpQApgrgHgHQAFAEAKAKIATASIAJAIQAFAFAAAFQABAIgHAKIgMANQgNARgRAOQgXASgXAKQgZAKgbADIgEAAQgaAAgXgKg");
	this.shape_2.setTransform(58.2768,47.8042);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A768D").s().p("AgxByIgGgHIgHgJQgUgcAEgjIAAgBQAnAGARgBQgOAmAGAfQACAMAGAMQgOgGgNgMgAgugvQAbgpAngdQAXgQARACQAFABAGAEIAAAAQAJAHAAAPQgBAQgKANIgMAKQgWASgQARQgkAagzAAQAJgYANgTg");
	this.shape_3.setTransform(49.2923,36.5886);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#60B8C9").s().p("AghBNQghgGgdgQQgRgJgMgLIgHgGIgQgOIgYgXQAIAIANAGQAPAKATAHQAuASAugDQAyAAAmgaQATgLATgSIAMgPQAKgNAAgQQABgNgHgHIAEAEQAXAUARARQAaAZgqAqQgwAzhMAEIgIAAQgQAAgfgFg");
	this.shape_4.setTransform(44.8096,32.2775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3A768D").s().p("Ag7CHIgCgCIgBAAIgGgHQgPgSgKgWQAXABANgBIAAADQADAlAWAeQgSgKgJgLgAhWggQAQgiAhgjQAgggAggOQASgHAUgBQAMgBAJADIABAAIABAAQAKAEAEARQAEAPgDAGIgBAAQgQACgVAKQghAPggAkQghAngPAmIgcAIQgUAEgHABQgCgkATgmg");
	this.shape_5.setTransform(32.955,17.2625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#60B8C9").s().p("AgkB3QgQgBgOgDQgngJgggWQgQgKgRgQIgmgkQAKAJAKAGIAOAJQAbAQAeAIQAiAJAlgEQAHgBAUgEIAbgIQA8gVAtgwQAXgZAPgbQAHgMACgHQADgGgEgPQgEgPgIgFQAFADAIAHIApAmQAGAGABAIQAEAQgLATQgRAigeAfQgeAdgkATQgsAXgsAFIgWABIgOgBg");
	this.shape_6.setTransform(27.2563,13.9583);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3A768D").s().p("AATBGIgBAAIgLgMQgagegNghQgQgxANghIAnAlIAHAGQgMAeAKAnQAKAiAXAdQgMgGgLgMg");
	this.shape_7.setTransform(4.1963,8.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#60B8C9").s().p("AANAqIgWgVQgNgMgIgJQgJgLgBgMQgBgNAIgKQAIgLANgBQABgBAGAHIAnAlQgOACgHAKQgHAIAAANQAAAHAMAOQAMAPALAFQgOgFgOgMg");
	this.shape_8.setTransform(99.7194,95.2232);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3A768D").s().p("AgZBmIgDgBQgLgFgMgPQgMgOAAgHIABAAQASABAQgIQAjgRAIgmQAIgmgUgoQgIgPgGgGIgBgCIAUAQIAFAFIARATQAVAZAIAcQAIAZgFAZQgGAcgTARQgWASgXABIgFAAQgGAAgGgCg");
	this.shape_9.setTransform(106.724,91.0393);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113.1,101.5);


(lib.an_sc2try = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_try
	this.instance = new lib.sb_sc2try("synched",0);
	this.instance.setTransform(45.4,19.9,1,1,0,0,0,45.4,19.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:231.4,alpha:1},9,cjs.Ease.cubicOut).wait(81));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276.8,39.7);


(lib.an_sc2title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_title
	this.instance = new lib.sb_sc2title("synched",0);
	this.instance.setTransform(99.7,-11.6,1,1,0,0,0,99.7,25.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:25.9,alpha:1},9,cjs.Ease.cubicOut).wait(81));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-37.5,199.5,89.4);


(lib.an_sc2gift = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_gift
	this.instance = new lib.sb_sc2gift("synched",0);
	this.instance.setTransform(73.3,144.45,1,1,27.7002,0,0,67.3,127.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:127.7,rotation:0,x:73.35,y:144.35,alpha:1},9,cjs.Ease.backOut).to({startPosition:0},6).to({scaleX:1.1642,scaleY:1.1642,x:73.4,y:154.35},8).to({scaleX:1,scaleY:1,x:73.35,y:144.35},8).wait(59));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,0,234.70000000000002,196.9);


(lib.an_sc2framewhite = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_frame_white
	this.instance = new lib.sb_sc2framewhite("synched",0);
	this.instance.setTransform(291.1,195.35,0.6258,0.6258,0,0,0,235.3,188.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:188.8,scaleX:1,scaleY:1,x:291.05,y:195.4,alpha:1},9,cjs.Ease.backOut).wait(81));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(47.1,-0.2,488,391.5);


(lib.an_sc2cup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_cup
	this.instance = new lib.sb_sc2cup("synched",0);
	this.instance.setTransform(94.2,16.4,1,1,0,0,0,94.2,16.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:339.7,alpha:1},9,cjs.Ease.cubicOut).wait(81));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,433.9,32.8);


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
	this.instance.setTransform(515,44.65,0.5783,0.5783,0,0,0,515,44.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,y:44.6,alpha:1},9,cjs.Ease.cubicOut).wait(81));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,530.2,225.4);


(lib.an_sc1title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc1_title
	this.instance = new lib.sb_sc1title("synched",0);
	this.instance.setTransform(157.6,-1.8,1,1,0,0,0,157.6,29.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:29.2,alpha:1},11,cjs.Ease.cubicOut).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-31,315.1,89.4);


(lib.an_sc1record = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc1_record
	this.instance = new lib.sb_sc1record("synched",0);
	this.instance.setTransform(391.15,13.6,1,1,0,0,0,133.4,13.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},6,cjs.Ease.cubicOut).wait(39));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(257.8,0,266.8,27.2);


(lib.an_sc1io = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc1_io
	this.instance = new lib.sb_sc1io("synched",0);
	this.instance.setTransform(389.45,29.9,1,1,0,0,0,131.7,29.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},7,cjs.Ease.cubicOut).to({startPosition:0},7).to({scaleX:1.2281,scaleY:1.2281,x:389.5},6).to({scaleX:1,scaleY:1,x:389.45},5).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(227.8,-6.7,323.40000000000003,73.5);


(lib.an_sc1high = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc1_high
	this.instance = new lib.sb_sc1high("synched",0);
	this.instance.setTransform(163.7,27.6,1,1,0,0,0,163.7,27.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10,cjs.Ease.cubicOut).to({startPosition:0},12).to({scaleX:1.1714,scaleY:1.1714,x:163.75,y:27.65},6).to({scaleX:1,scaleY:1,x:163.7,y:27.6},9).wait(18));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-4.7,383.5,64.7);


(lib.an_sc1frameyellow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc1_frame_yellow
	this.instance = new lib.sb_sc1frameyellow("synched",0);
	this.instance.setTransform(262.8,90.95,0.6014,0.6014,0,0,0,211,86.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:210.9,scaleX:1,scaleY:1,x:262.7,y:90.9,alpha:1},14,cjs.Ease.backOut).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(63.4,1.3,418.5,179.2);


(lib.an_sc1framewhite = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc1_frame_white
	this.instance = new lib.sb_sc1framewhite("synched",0);
	this.instance.setTransform(1006,92.1,0.6968,0.6968,0,0,0,249.5,85.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:1005.95,y:92.05,alpha:1},14,cjs.Ease.backOut).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(748.9,3.8,514.1,176.7);


(lib.an_sc14w = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc1_4w
	this.instance = new lib.sb_sc14w("synched",0);
	this.instance.setTransform(140.2,27.3,1,1,0,0,0,140.2,27.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10,cjs.Ease.cubicOut).to({startPosition:0},7).to({regY:27.2,scaleX:1.139,scaleY:1.139,y:27.25},6).to({regY:27.3,scaleX:1,scaleY:1,y:27.3},8).wait(18));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-3.7,319.5,62.2);


(lib.an_sc1_giftgo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc1_giftgo
	this.instance = new lib.sb_sc1giftgo("synched",0);
	this.instance.setTransform(122.95,165.05,1,1,-19.7439,0,0,92.6,153.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:92.7,rotation:0,y:165,alpha:1},10,cjs.Ease.backOut).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,218.3,171.5);


(lib.an_scplus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc_plus
	this.instance = new lib.sb_scplus("synched",0);
	this.instance.setTransform(28.55,28.35,1.3595,1.3595,0,0,0,21,20.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:20.9,scaleX:1,scaleY:1,x:28.45,alpha:1},6,cjs.Ease.cubicOut).wait(39));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,56.9);


(lib.an_scfree = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc_free
	this.instance = new lib.sb_scfree("synched",0);
	this.instance.setTransform(41.6,41.5,1.4901,1.4901,0,0,0,27.9,27.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.cubicOut).wait(38));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,83);


(lib.an_deco = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_35
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(109,104,168,0)").s().p("AgMAaQgLgFgEgMQgDgKAFgLQAFgLALgEQALgDALAFQALAFAEALQAEAKgGALQgFALgLAEQgFACgFAAQgGAAgGgDg");
	this.shape.setTransform(969.4964,801.9799,0.6627,0.6627);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(112,133,169,0.349)").s().p("AgJAUQgJgEgDgJQgDgIAEgIQAFgIAIgDQAIgDAJAEQAIAEAEAJQADAHgEAJQgEAIgJADIgIACQgEAAgFgDg");
	this.shape_1.setTransform(1017.275,764.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(114,155,170,0.62)").s().p("AgKAWQgKgEgDgKQgEgJAFgJQAFgKAJgDQAJgDAKAEQAJAFAEAKQADAIgEAKQgFAJgKAEIgIABQgFAAgFgDg");
	this.shape_2.setTransform(1054.1584,734.9121);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(116,172,170,0.816)").s().p("AgLAYQgKgFgEgKQgDgKAEgKQAGgKAKgEQAKgDAKAEQAKAFAEALQAEAJgFAKQgFALgLADQgFACgEAAQgFAAgGgDg");
	this.shape_3.setTransform(1081.4455,713.3039);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(117,183,171,0.957)").s().p("AgLAaQgLgFgEgMQgEgKAFgKQAGgLALgEQAKgEALAFQAKAGAEALQAEAJgFALQgFALgLAEQgFACgFAAQgFAAgGgDg");
	this.shape_4.setTransform(1100.3872,698.2872);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#75BBAB").s().p("AgMAaQgLgFgEgLQgEgLAFgLQAGgLALgEQALgDALAFQALAFAEALQAEALgGALQgFALgLAEQgFABgFAAQgGAAgGgDg");
	this.shape_5.setTransform(1112.3122,688.8494);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#75BBAB").s().p("AgMAbQgMgGgEgLQgDgLAFgLQAGgLALgFQALgDALAFQALAGAEALQAFAKgGAMQgFALgMAEQgFACgFAAQgGAAgGgDg");
	this.shape_6.setTransform(1118.4744,683.9662);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#75BBAB").s().p("AgMAbQgMgFgEgMQgEgLAGgLQAFgLAMgFQALgDALAFQALAGAEALQAFAKgGAMQgFALgMAEQgFACgFAAQgGAAgGgDg");
	this.shape_7.setTransform(1120.1622,682.6161);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#75BBAB").s().p("AgMAbQgMgGgEgLQgDgLAFgLQAFgLAMgFQALgDALAFQALAGAEALQAEAKgFAMQgFALgMAEQgFACgFAAQgGAAgGgDg");
	this.shape_8.setTransform(1118.6622,683.8162);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#75BBAB").s().p("AgMAaQgMgFgEgMQgDgKAFgLQAGgLALgEQALgEALAFQALAGAEALQAEAKgFAMQgGALgLAEQgFACgFAAQgGAAgGgEg");
	this.shape_9.setTransform(1115.2622,686.5122);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#75BBAB").s().p("AgMAaQgLgFgEgLQgEgLAFgLQAGgLALgEQALgDALAFQALAFAEALQAEALgFALQgFALgMAEQgFABgFAAQgGAAgGgDg");
	this.shape_10.setTransform(1111.2372,689.6872);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#75BBAB").s().p("AgMAaQgLgFgEgMQgDgKAFgLQAFgLALgEQALgDALAFQALAFAEALQAEAKgGALQgFALgLAEQgFACgFAAQgGAAgGgDg");
	this.shape_11.setTransform(1107.8872,692.3622);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(11).to({_off:false},0).wait(1).to({x:1106.4872,y:693.4621},0).wait(40));

	// Layer_36
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#428881").s().p("AgMAaQgLgFgEgMQgDgKAFgLQAFgLALgEQALgDALAFQALAFAEALQAEAKgGALQgFALgLAEQgFACgFAAQgGAAgGgDg");
	this.shape_12.setTransform(965.4464,812.4799,0.6627,0.6627);
	this.shape_12._off = true;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#428881").s().p("AgJAVQgJgEgDgJQgDgIAEgJQAEgJAJgDQAIgDAJAEQAJAFADAIQADAIgEAJQgEAJgJADIgIABQgEAAgFgCg");
	this.shape_13.setTransform(999.7207,762.9457);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#428881").s().p("AgKAYQgLgFgDgKQgEgKAFgJQAFgKAKgEQAJgDAKAFQALAFADAKQADAIgFAKQgEAKgKAEIgJABQgFAAgFgCg");
	this.shape_14.setTransform(1024.6,726.9416);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#428881").s().p("AgLAZQgLgFgEgLQgDgKAFgKQAFgLALgEQAKgDAKAFQALAFAEALQAEAKgGAKQgEALgMAEQgFABgEAAQgFAAgGgDg");
	this.shape_15.setTransform(1041.4872,702.5492);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#428881").s().p("AgMAaQgLgFgEgMQgEgKAFgLQAGgLALgEQAKgDAMAFQALAFAEALQAEAKgGALQgFAMgMAEQgEABgFAAQgGAAgGgDg");
	this.shape_16.setTransform(1051.7122,687.7872);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#428881").s().p("AgMAbQgMgFgEgMQgDgLAFgLQAGgLALgEQALgEALAFQALAGAEALQAFALgGALQgFALgMAEQgFACgFAAQgGAAgGgDg");
	this.shape_17.setTransform(1056.6244,680.6494);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#428881").s().p("AgMAbQgLgFgFgMQgDgLAFgLQAGgLALgEQALgEALAFQAMAGAEALQAEALgGALQgFALgMAEQgFACgFAAQgGAAgGgDg");
	this.shape_18.setTransform(1057.5912,679.2372);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#428881").s().p("AgMAbQgMgFgEgMQgDgLAFgLQAFgLAMgEQAKgEAMAFQALAGAEALQAEALgFALQgGALgLAEQgFACgFAAQgGAAgGgDg");
	this.shape_19.setTransform(1056.0122,681.5494);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#428881").s().p("AgMAaQgLgFgEgLQgEgLAFgLQAGgLALgEQALgDALAFQALAFAEALQAEALgFALQgGALgLAEQgFABgFAAQgGAAgGgDg");
	this.shape_20.setTransform(1053.1872,685.6494);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#428881").s().p("AgMAaQgLgFgEgMQgDgKAFgLQAFgLALgEQALgDALAFQALAFAEALQAEAKgGALQgFAMgLAEQgFABgFAAQgGAAgGgDg");
	this.shape_21.setTransform(1050.4872,689.5372);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(2).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false,scaleX:1,scaleY:1,x:1049.2872,y:691.2622},0).wait(40));

	// Layer_12
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(109,104,168,0)").s().p("AgRASQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape_22.setTransform(823.4952,774.2965,0.6627,0.6627);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(141,91,152,0.349)").s().p("AgNAOQgGgGAAgIQAAgHAGgHQAFgFAIAAQAIAAAGAFQAGAHAAAHQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_23.setTransform(827.55,725.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(166,82,139,0.62)").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgGAIgBQAKABAGAGQAHAHgBAIQABAJgHAHQgGAGgKAAQgIAAgHgGg");
	this.shape_24.setTransform(830.65,687.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(185,75,130,0.816)").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_25.setTransform(832.95,659.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(198,70,123,0.957)").s().p("AgRASQgIgHAAgLQAAgKAIgHQAHgHAKAAQALAAAHAHQAHAHAAAKQAAALgHAHQgHAHgLAAQgKAAgHgHg");
	this.shape_26.setTransform(834.55,639.875);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CA4479").s().p("AgSASQgHgHAAgLQAAgKAHgIQAIgHAKAAQALAAAHAHQAIAIAAAKQAAALgIAHQgHAIgLAAQgKAAgIgIg");
	this.shape_27.setTransform(835.575,627.65);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CA4479").s().p("AgSATQgIgIABgKQgBgLAIgHQAIgJAKABQALgBAIAJQAHAHAAALQAAAKgHAIQgIAIgLAAQgKAAgIgIg");
	this.shape_28.setTransform(836.1,621.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CA4479").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_29.setTransform(836.225,619.575);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CA4479").s().p("AgSATQgIgIABgKQgBgLAIgHQAIgIAKAAQALAAAIAIQAIAHgBALQABAKgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_30.setTransform(836.1,621.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CA4479").s().p("AgSATQgHgIAAgLQAAgKAHgIQAIgHAKAAQALAAAIAHQAHAIAAAKQAAALgHAIQgIAHgLAAQgKAAgIgHg");
	this.shape_31.setTransform(835.825,624.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CA4479").s().p("AgRATQgIgIAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAIQgHAHgLAAQgKAAgHgHg");
	this.shape_32.setTransform(835.475,628.75);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CA4479").s().p("AgSASQgHgHAAgLQAAgKAHgHQAIgIAKAAQAKAAAIAIQAIAHAAAKQAAALgIAHQgIAIgKAAQgKAAgIgIg");
	this.shape_33.setTransform(835.2,632.175);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CA4479").s().p("AgRASQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape_34.setTransform(835.075,633.625);
	this.shape_34._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22}]}).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(12).to({_off:false},0).wait(40));

	// Layer_13
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CA4479").s().p("AgZAaQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgLALgPAAQgOAAgLgLg");
	this.shape_35.setTransform(947.3518,765.8472,0.6627,0.6627);
	this.shape_35._off = true;

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CA4479").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgIALgBQAMABAJAIQAIAJABALQgBAMgIAJQgJAJgMAAQgLAAgJgJg");
	this.shape_36.setTransform(977.85,706.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CA4479").s().p("AgWAYQgKgKAAgOQAAgMAKgKQAJgKANAAQAOAAAJAKQAKAKAAAMQAAAOgKAKQgJAJgOAAQgNAAgJgJg");
	this.shape_37.setTransform(1000,663.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CA4479").s().p("AgYAZQgLgKAAgPQAAgOALgKQAKgLAOAAQAPAAAKALQALAKAAAOQAAAPgLAKQgKALgPAAQgOAAgKgLg");
	this.shape_38.setTransform(1015.025,634.375);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CA4479").s().p("AgZAbQgLgMAAgOQAAgPALgLQALgLAOAAQAPAAALALQALALAAAPQAAAOgLAMQgLAKgPAAQgOAAgLgKg");
	this.shape_39.setTransform(1024.125,616.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CA4479").s().p("AgaAbQgLgLAAgQQAAgPALgKQAMgMAOAAQAQAAAKAMQAMAKAAAPQAAAQgMALQgKALgQAAQgOAAgMgLg");
	this.shape_40.setTransform(1028.5,608.175);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CA4479").s().p("AgaAbQgLgMAAgPQAAgPALgLQALgLAPAAQAQAAALALQALALAAAPQAAAPgLAMQgLALgQAAQgPAAgLgLg");
	this.shape_41.setTransform(1029.375,606.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CA4479").s().p("AgaAbQgLgLAAgQQAAgPALgLQALgLAPAAQAPAAALALQAMALAAAPQAAAQgMALQgLALgPAAQgPAAgLgLg");
	this.shape_42.setTransform(1027.975,609.275);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CA4479").s().p("AgZAaQgLgKAAgQQAAgOALgLQALgMAOAAQAQAAAKAMQALALAAAOQAAAQgLAKQgKAMgQAAQgOAAgLgMg");
	this.shape_43.setTransform(1025.425,614.15);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CA4479").s().p("AgZAbQgLgMAAgPQAAgPALgKQALgLAOAAQAPAAALALQALAKAAAPQAAAPgLAMQgLAKgPAAQgOAAgLgKg");
	this.shape_44.setTransform(1023.05,618.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_35}]},2).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(2).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false,scaleX:1,scaleY:1,x:1021.975,y:620.875},0).wait(40));

	// Layer_14
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(109,104,168,0)").s().p("AgtAjQgJgjADgnQAzgTA1ATQgiAogTAxQgSgRgbACg");
	this.shape_45.setTransform(687.2243,800.6084,0.6627,0.6627);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(154,134,143,0.349)").s().p("AgjAbQgHgbADgeQAngQApAQQgaAegPAnQgOgNgVABg");
	this.shape_46.setTransform(631.08,747.9125);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(188,157,123,0.62)").s().p("AgnAeQgIgeADgiQAsgRAuARQgdAigRArQgPgOgYABg");
	this.shape_47.setTransform(587.7091,707.225);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(214,174,108,0.816)").s().p("AgqAgQgJggAEgkQAwgTAxATQggAkgSAuQgQgPgaABg");
	this.shape_48.setTransform(555.649,677.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(231,186,98,0.957)").s().p("AgtAiQgJgiAEgmQAygUA0AUQghAmgUAxQgRgRgbACg");
	this.shape_49.setTransform(533.401,656.2125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EDBE5F").s().p("AguAjQgJgjAEgoQAzgTA2ATQgiAogUAyQgSgRgcACg");
	this.shape_50.setTransform(519.3907,643.0625);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EDBE5F").s().p("AguAkQgKgjAEgpQA0gUA2AUQgiApgUAyQgSgRgcACg");
	this.shape_51.setTransform(512.1279,636.25);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EDBE5F").s().p("AgvAkQgJgkADgoQA1gVA2AVQgiAogVAzQgSgRgcACg");
	this.shape_52.setTransform(510.151,634.4125);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EDBE5F").s().p("AgvAkQgJgkAEgoQA0gUA2AUQgiAogUAzQgSgRgdACg");
	this.shape_53.setTransform(511.926,636.05);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EDBE5F").s().p("AguAjQgKgjAEgoQA0gUA2AUQgiAogUAzQgSgRgcABg");
	this.shape_54.setTransform(515.9029,639.825);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDBE5F").s().p("AguAjQgJgjAEgnQAzgUA1AUQghAogUAxQgSgQgcABg");
	this.shape_55.setTransform(520.626,644.2375);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EDBE5F").s().p("AgtAjQgJgjADgnQAzgTA1ATQgiAogTAxQgSgRgbACg");
	this.shape_56.setTransform(524.576,647.9375);
	this.shape_56._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45}]}).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_56).wait(11).to({_off:false},0).wait(1).to({x:526.226,y:649.4875},0).wait(40));

	// Layer_15
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(109,104,168,0)").s().p("AgtAjQgJghADgpQAzgUA1AUQgjArgSAuQgSgRgbACg");
	this.shape_57.setTransform(987.518,803.7198,0.6627,0.6627);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(96,112,176,0.408)").s().p("AgkAcQgHgaADggQAogRAqARQgcAigOAkQgOgNgWABg");
	this.shape_58.setTransform(1026.3903,752.3375);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(86,117,181,0.706)").s().p("AgpAgQgIgeADglQAugSAvASQgfAngQApQgRgPgYACg");
	this.shape_59.setTransform(1054.6071,715.025);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(80,121,185,0.906)").s().p("AgsAiQgIggADgnQAxgUAzAUQgiApgRAsQgSgQgaACg");
	this.shape_60.setTransform(1073.7359,689.7375);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#4D7BBB").s().p("AguAjQgIghADgpQAzgVA1AVQgjArgSAuQgTgRgbACg");
	this.shape_61.setTransform(1085.3359,674.4125);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#4D7BBB").s().p("AguAkQgJgiADgqQA0gUA2AUQgkAsgSAvQgTgRgbACg");
	this.shape_62.setTransform(1090.8875,667.0375);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#4D7BBB").s().p("AgvAkQgJgiADgqQA1gVA2AVQgkAsgSAvQgTgRgcACg");
	this.shape_63.setTransform(1092.0109,665.5625);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#4D7BBB").s().p("AguAlQgJgiADgrQA0gUA2AUQgkAtgSAuQgTgRgbADg");
	this.shape_64.setTransform(1090.1875,667.9375);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#4D7BBB").s().p("AguAjQgJghADgpQA0gVA1AVQgjAsgSAtQgTgRgbACg");
	this.shape_65.setTransform(1087.001,672.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#4D7BBB").s().p("AguAjQgIghADgpQAzgUA1AUQgkArgRAuQgTgRgbACg");
	this.shape_66.setTransform(1083.9609,676.2375);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#4D7BBB").s().p("AgtAjQgJghADgpQAzgUA1AUQgjArgSAuQgSgRgbACg");
	this.shape_67.setTransform(1082.5859,678.025);
	this.shape_67._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57}]}).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_67).wait(10).to({_off:false},0).wait(42));

	// Layer_16
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EDBE5F").s().p("AgygNQAtgcA0AKQAFAbgCAcQgjgIgaATQgPgbgYgVg");
	this.shape_68.setTransform(907.7489,797.9324,0.6627,0.6627);
	this.shape_68._off = true;

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EDBE5F").s().p("AgogKQAkgXAqAIQAFAWgCAWQgcgGgWAPQgMgWgTgQg");
	this.shape_69.setTransform(932.0808,740.4451);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EDBE5F").s().p("AgtgMQAogaAwAKQAFAYgCAaQgggHgYARQgOgZgVgTg");
	this.shape_70.setTransform(949.0417,700.4211);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EDBE5F").s().p("AgxgNQAsgbAzAJQAGAbgDAbQgigHgaASQgPgbgXgUg");
	this.shape_71.setTransform(959.7891,675.0014);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EDBE5F").s().p("AgzgOQAugcA1AKQAFAcgCAcQgjgIgbATQgQgcgYgVg");
	this.shape_72.setTransform(965.5641,661.3587);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EDBE5F").s().p("AgzgOQAugcA2AKQAFAcgCAcQgkgHgbATQgQgcgYgWg");
	this.shape_73.setTransform(967.5891,656.5837);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EDBE5F").s().p("AgzgOQAtgcA2AKQAGAcgDAdQgjgIgcATQgPgcgYgWg");
	this.shape_74.setTransform(967.0641,657.8434);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EDBE5F").s().p("AgzgOQAugcA1AKQAFAcgCAcQgjgIgbATQgQgbgYgWg");
	this.shape_75.setTransform(965.1641,662.3184);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EDBE5F").s().p("AgygOQAtgbA0AKQAGAbgDAcQgigIgbATQgPgbgYgWg");
	this.shape_76.setTransform(963.1391,667.0667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_68}]},2).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_68).wait(2).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false,scaleX:1,scaleY:1,x:962.2141,y:669.2917},0).wait(41));

	// Layer_17
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(109,104,168,0)").s().p("AhAgmQA8gdA/AOQALA1gLAxQgfgGgbAPQgVg2gsgqg");
	this.shape_77.setTransform(765.8909,768.6544,0.6627,0.6627);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(151,88,147,0.447)").s().p("Ag0geQAxgYAzALQAJAsgJAoQgZgGgWANQgRgtgkghg");
	this.shape_78.setTransform(757.95,704.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(179,77,132,0.757)").s().p("Ag6giQA2gbA6ANQALAxgLAtQgcgGgYAOQgVgygngmg");
	this.shape_79.setTransform(752.4375,659.8388);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(198,70,123,0.957)").s().p("Ag/glQA6gdA/AOQALA1gLAwQgegHgbAQQgVg2grgpg");
	this.shape_80.setTransform(748.95,631.4971);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CA4479").s().p("AhBgnQA9gdBBAPQALA2gLAxQghgGgbAPQgWg2gsgsg");
	this.shape_81.setTransform(747.05,616.25);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CA4479").s().p("AhCgnQA9geBCAPQALA2gLAzQgggHgcAQQgWg3gtgsg");
	this.shape_82.setTransform(746.4125,610.9277);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CA4479").s().p("AhBgnQA8geBCAPQALA2gLAzQgggHgbAQQgXg4gsgrg");
	this.shape_83.setTransform(746.5875,612.3528);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CA4479").s().p("AhBgmQA9geBAAOQALA2gLAyQgfgGgbAPQgXg3gsgqg");
	this.shape_84.setTransform(747.175,617.3138);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CA4479").s().p("AhAgmQA8gdBAAOQAKA1gKAyQgggHgbAQQgWg3grgqg");
	this.shape_85.setTransform(747.85,622.6361);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CA4479").s().p("AhAgmQA8gdA/AOQALA1gLAxQgfgGgbAPQgVg2gsgqg");
	this.shape_86.setTransform(748.15,625.1111);
	this.shape_86._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77}]}).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_86).wait(9).to({_off:false},0).wait(43));

	// Layer_18
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#75BBAB").s().p("Ai6CpQAGhyBPhdQBQhhB+gkQAsAbAmAiQh/AOhaBSQhXBOgUBsQgcgDgVAAg");
	this.shape_87.setTransform(806.0996,760.8107,0.6627,0.6627);
	this.shape_87._off = true;

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#75BBAB").s().p("AioCYQAGhnBHhUQBIhXByggQAnAYAjAfQhzANhRBKQhPBFgRBiQgZgDgUAAg");
	this.shape_88.setTransform(808.025,656.725);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#75BBAB").s().p("Ai8CrQAGh0BQheQBRhiB/gkQAsAcAnAiQiBAOhaBTQhYBOgUBuQgdgEgVABg");
	this.shape_89.setTransform(808.9,609.025);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#75BBAB").s().p("AjBCvQAHh3BShfQBShlCDglQAtAcAoAjQiFAPhcBUQhaBRgUBwQgdgEgXABg");
	this.shape_90.setTransform(809.1,598.65);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#75BBAB").s().p("Ai9CsQAHh0BPhfQBShiCAglQAtAcAmAiQiBAPhbBTQhZBPgUBuQgcgEgWABg");
	this.shape_91.setTransform(808.95,606.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_87}]},4).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_87).wait(4).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,scaleX:1,scaleY:1,x:808.825,y:613.275},0).wait(43));

	// Layer_19
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(109,104,168,0)").s().p("AhpgGQAVhFAvg2QBTAPBJAyQg+AagsAyQgpAwgQA/QgmgDghALQgKhGAUhDg");
	this.shape_92.setTransform(916.1944,770.9333,0.6627,0.6627);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(109,104,168,0.447)").s().p("AhVgFQARg4AmgsQBEANA7AoQgyAVgkAoQghAogNAzQgfgDgbAJQgIg5AQg2g");
	this.shape_93.setTransform(942.4417,707.325);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(109,104,168,0.757)").s().p("AhggGQATg/ArgyQBNAPBCAuQg5AXgoAtQgmAtgOA7QgjgEgeAKQgJhAASg+g");
	this.shape_94.setTransform(960.7388,663);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(109,104,168,0.957)").s().p("AhngHQAUhDAvg1QBSAPBHAyQg9AZgrAwQgoAwgQA+QglgDghAKQgJhFAThCg");
	this.shape_95.setTransform(972.3444,634.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#6D68A8").s().p("AhrgHQAVhGAwg3QBVAQBLAzQhAAagsAzQgrAygQBAQgmgEgiALQgKhHAUhFg");
	this.shape_96.setTransform(978.5972,619.775);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#6D68A8").s().p("AhsgHQAVhGAxg5QBWARBLAzQhAAbgtAzQgrAzgRBBQgmgEgjALQgKhIAVhGg");
	this.shape_97.setTransform(980.7611,614.475);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#6D68A8").s().p("AhsgHQAVhHAxg3QBWAQBLAzQhAAbgtAzQgrAygQBBQgngEgiAMQgKhJAUhFg");
	this.shape_98.setTransform(980.1972,615.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#6D68A8").s().p("AhqgHQAVhFAvg4QBWAQBJAzQg/AagsAzQgqAygRBAQgmgEghALQgLhHAVhFg");
	this.shape_99.setTransform(978.1472,620.825);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#6D68A8").s().p("AhpgGQAUhFAwg3QBUAQBJAyQg/AagsAyQgpAxgQA/QgmgDghAKQgKhGAUhDg");
	this.shape_100.setTransform(975.9833,626.075);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#6D68A8").s().p("AhpgGQAVhFAvg2QBTAPBJAyQg+AagsAyQgpAwgQA/QgmgDghALQgKhGAUhDg");
	this.shape_101.setTransform(974.9583,628.55);
	this.shape_101._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92}]}).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_101).wait(9).to({_off:false},0).wait(43));

	// Layer_20
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#4D7BBB").s().p("ABHCZQgWhWg9g5Qg+g4hVgLQBFg8BWgnQBQAvAsBTQAtBUgGBjQgqgIguAEg");
	this.shape_102.setTransform(688.4825,762.9434,0.6627,0.6627);
	this.shape_102._off = true;

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#4D7BBB").s().p("AA7B+QgShHgzgvQg0gvhGgIQA5gxBIghQBBAnAlBFQAlBFgEBSQgjgGgmACg");
	this.shape_103.setTransform(626.0193,691.35);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#4D7BBB").s().p("ABDCPQgVhQg5g2Qg7g1hPgKQBBg4BRgkQBKAsApBOQAqBOgEBdQgogHgrADg");
	this.shape_104.setTransform(584.8718,644.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#4D7BBB").s().p("ABHCZQgVhWg+g5Qg/g4hUgKQBFg9BXgnQBPAuAsBUQAtBUgFBjQgqgIgvAEg");
	this.shape_105.setTransform(561.075,616.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#4D7BBB").s().p("ABJCdQgWhXhAg7QhAg7hXgKQBHg+BZgoQBSAvAtBXQAuBVgFBnQgrgIgwADg");
	this.shape_106.setTransform(550.6243,604.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#4D7BBB").s().p("ABJCeQgWhZg/g6QhBg7hXgLQBHg+BagoQBRAwAuBWQAuBXgFBmQgrgIgxAEg");
	this.shape_107.setTransform(549.4291,603.575);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#4D7BBB").s().p("ABJCcQgWhXg/g7QhAg5hWgLQBGg9BYgoQBRAvAtBWQAuBVgFBlQgrgIgvAEg");
	this.shape_108.setTransform(553.5794,608.325);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#4D7BBB").s().p("ABICaQgWhWg+g6Qg/g5hVgKQBGg9BWgnQBQAvAsBUQAtBUgFBkQgqgIguAEg");
	this.shape_109.setTransform(559,614.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_102}]},2).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_102}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_102).wait(2).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false,scaleX:1,scaleY:1,x:561.7,y:617.625},0).wait(42));

	// Layer_21
	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(109,104,168,0)").s().p("Ah7A6QA3hXBfg7QA6AaAnAwQhnAgg+BHQgjgcgvgDg");
	this.shape_110.setTransform(995.6287,870.2704,0.6627,0.6627);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(96,112,176,0.408)").s().p("AhiAuQAshFBLgvQAvAVAfAmQhTAZgxA5QgcgWglgDg");
	this.shape_111.setTransform(1036.2,832.75);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(86,117,181,0.706)").s().p("AhuA0QAxhOBWg1QA0AXAiAsQhcAcg4BAQgggZgpgDg");
	this.shape_112.setTransform(1065.625,805.475);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(80,121,185,0.906)").s().p("Ah3A4QA1hUBdg5QA4AZAlAuQhkAgg8BDQgigagtgDg");
	this.shape_113.setTransform(1085.6,787);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#4D7BBB").s().p("Ah8A6QA3hXBgg7QA7AZAnAxQhoAgg/BHQgjgcgvgDg");
	this.shape_114.setTransform(1097.7,775.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#4D7BBB").s().p("Ah/A8QA4haBjg8QA8AaAoAxQhrAhg/BJQgkgcgxgDg");
	this.shape_115.setTransform(1103.5,770.425);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#4D7BBB").s().p("Ah/A8QA4haBkg8QA7AaAoAxQhrAig/BIQglgcgwgDg");
	this.shape_116.setTransform(1104.65,769.35);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#4D7BBB").s().p("Ah+A8QA4haBig8QA7AbAoAxQhqAgg/BJQgkgdgwgCg");
	this.shape_117.setTransform(1102.775,771.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#4D7BBB").s().p("Ah9A7QA4hYBhg8QA7AaAnAwQhpAhg+BIQgkgcgwgDg");
	this.shape_118.setTransform(1099.425,774.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#4D7BBB").s().p("Ah8A6QA3hYBgg6QA6AaAoAwQhoAgg+BHQgjgcgwgDg");
	this.shape_119.setTransform(1096.25,777.15);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#4D7BBB").s().p("Ah7A6QA3hXBfg7QA6AaAnAwQhnAgg+BHQgjgcgvgDg");
	this.shape_120.setTransform(1094.825,778.45);
	this.shape_120._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_110}]}).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_120).wait(10).to({_off:false},0).wait(42));

	// Layer_22
	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#6D68A8").s().p("Ah8A0QBChXBqgxQAxAgAdAxQhpAXhEBBQgigcgrgFg");
	this.shape_121.setTransform(962.3582,778.9684,0.6627,0.6627);
	this.shape_121._off = true;

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#6D68A8").s().p("AhsAtQA6hMBcgqQArAcAYArQhaATg8A5QgdgYgmgFg");
	this.shape_122.setTransform(1057.775,693.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#6D68A8").s().p("Ah7AzQBChWBpgvQAvAfAcAxQhmAWhEA/QghgagrgGg");
	this.shape_123.setTransform(1109.9,646.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#6D68A8").s().p("AiAA1QBFhZBtgyQAyAhAdAyQhrAYhHBCQgjgcgsgGg");
	this.shape_124.setTransform(1130.275,628.575);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#6D68A8").s().p("AiAA1QBFhZBtgyQAyAhAdAyQhrAYhGBCQgjgcgtgGg");
	this.shape_125.setTransform(1130.475,628.375);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#6D68A8").s().p("Ah+A0QBEhYBrgxQAxAhAdAxQhpAXhFBCQgjgcgsgGg");
	this.shape_126.setTransform(1122.1,635.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_121}]},4).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_121).wait(4).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false,scaleX:1,scaleY:1,x:1116.75,y:640.675},0).wait(42));

	// Layer_34
	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(109,104,168,0)").s().p("AgSATQgJgIAAgLQAAgKAJgIQAIgJAKAAQALAAAIAJQAJAHgBALQABALgJAIQgIAJgLgBQgLABgHgJg");
	this.shape_127.setTransform(834.8724,802.0724,0.6627,0.6627);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(88,110,157,0.408)").s().p("AgPAPQgGgFAAgKQAAgIAGgHQAHgGAIAAQAJAAAHAGQAGAHAAAIQAAAKgGAFQgHAHgJAAQgIAAgHgHg");
	this.shape_128.setTransform(842,750.35);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(73,114,149,0.706)").s().p("AgRARQgHgGAAgLQAAgJAHgHQAIgIAJAAQAKAAAHAIQAIAGAAAKQAAALgIAGQgHAIgKAAQgJAAgIgIg");
	this.shape_129.setTransform(847.175,712.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(63,117,144,0.906)").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_130.setTransform(850.675,687.325);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#3A768D").s().p("AgTAUQgIgJAAgLQAAgKAIgJQAJgIAKAAQALAAAIAIQAJAIAAALQAAALgJAJQgIAIgLAAQgLAAgIgIg");
	this.shape_131.setTransform(852.825,671.925);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#3A768D").s().p("AgTAUQgIgIAAgMQAAgKAIgJQAJgIAKAAQAMAAAIAIQAIAIAAALQAAAMgIAIQgIAIgMAAQgLAAgIgIg");
	this.shape_132.setTransform(853.825,664.475);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#3A768D").s().p("AgTAUQgIgIAAgMQAAgKAIgJQAJgIAKgBQAMABAIAIQAIAIAAALQAAAMgIAIQgIAIgMAAQgLAAgIgIg");
	this.shape_133.setTransform(854.025,663);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#3A768D").s().p("AgTAUQgIgIAAgMQAAgKAIgJQAJgIAKAAQAMAAAIAIQAIAIAAALQAAAMgIAIQgIAIgMAAQgKAAgJgIg");
	this.shape_134.setTransform(853.1,669.675);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#3A768D").s().p("AgTAUQgIgJAAgLQAAgKAIgJQAJgHAKAAQAMAAAHAHQAIAIAAALQAAALgIAJQgHAHgMABQgKgBgJgHg");
	this.shape_135.setTransform(852.55,673.75);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#3A768D").s().p("AgSATQgJgIAAgLQAAgKAJgIQAIgJAKAAQALAAAIAJQAJAHgBALQABALgJAIQgIAJgLgBQgLABgHgJg");
	this.shape_136.setTransform(852.3,675.55);
	this.shape_136._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_127}]}).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132,p:{x:853.825,y:664.475}}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_132,p:{x:853.675,y:665.425}}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_136).wait(10).to({_off:false},0).wait(42));

	// Layer_24
	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(58,118,141,0)").s().p("AhlBEQBBgLAsgyQAsgxAGhFQAUgEASgKQARBLgaBEQgaBEg7AoQg5gVguglg");
	this.shape_137.setTransform(883.509,784.1043,0.6627,0.6627);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(58,118,141,0.549)").s().p("AhWA6QA4gKAkgqQAmgpAFg7QARgDAPgJQAOA/gWA6QgVA6gzAiQgwgSgngfg");
	this.shape_138.setTransform(906.6222,709.65);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(58,118,141,0.882)").s().p("AhhBBQA/gKApgwQArgvAGhDQATgDARgKQAQBIgZBBQgYBCg5AmQg3gUgsgkg");
	this.shape_139.setTransform(920.728,664.225);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#3A768D").s().p("AhnBFQBCgLAtgzQAsgyAHhGQAUgEASgLQARBNgaBFQgaBGg9AoQg6gWguglg");
	this.shape_140.setTransform(927.8072,641.45);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#3A768D").s().p("AhpBGQBEgMAtgzQAtgzAHhHQAUgEATgLQASBOgbBGQgbBHg9ApQg7gWgwgmg");
	this.shape_141.setTransform(929.835,634.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#3A768D").s().p("AhoBGQBDgMAtgzQAtgyAHhHQAUgFASgJQASBMgbBGQgaBGg9ApQg7gVgvgmg");
	this.shape_142.setTransform(928.8441,638.15);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#3A768D").s().p("AhmBEQBCgLAsgyQAsgyAHhGQATgDASgKQASBLgbBFQgZBFg8AoQg6gWguglg");
	this.shape_143.setTransform(926.773,644.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#3A768D").s().p("AhlBEQBBgLAsgyQAsgxAGhFQAUgEASgKQARBLgaBEQgaBEg7AoQg5gVguglg");
	this.shape_144.setTransform(925.6361,648.425);
	this.shape_144._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_137}]},3).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_144).wait(10).to({_off:false},0).wait(42));

	// sb_deco_l_green
	this.instance = new lib.sb_decolgreen("synched",0);
	this.instance.setTransform(876.85,889.4,0.4355,0.4355,0,0,0,45.7,35.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:45.6,scaleX:1,scaleY:1,x:1126.55,y:719.9,alpha:1},15,cjs.Ease.backOut).wait(37));

	// sb_deco_l_yellow
	this.instance_1 = new lib.sb_decolyellow("synched",0);
	this.instance_1.setTransform(834.8,873.25,0.4355,0.4355,0,0,0,10.7,47.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:10.5,regY:47.1,scaleX:1,scaleY:1,x:885.8,y:620.45,alpha:1},15,cjs.Ease.backOut).wait(37));

	// sb_deco_l_blue
	this.instance_2 = new lib.sb_decolblue("synched",0);
	this.instance_2.setTransform(802.75,874.85,0.4355,0.4355,0,0,0,56.6,50.9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:50.7,scaleX:1,scaleY:1,x:675.05,y:620.65,alpha:1},15,cjs.Ease.backOut).wait(37));

	// sb_deco_l_pink_copy
	this.instance_3 = new lib.sb_decolpink("synched",0);
	this.instance_3.setTransform(856.9,879.1,0.472,0.472,-70.7778,0,0,42.3,24.8);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:24.7,scaleX:1.0838,scaleY:1.0838,rotation:-70.7773,x:1058.7,y:642.05,alpha:1},15,cjs.Ease.backOut).wait(37));

	// sb_deco_l_pink
	this.instance_4 = new lib.sb_decolpink("synched",0);
	this.instance_4.setTransform(784.8,891.1,0.4355,0.4355,0,0,0,42.4,24.8);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:42.2,regY:24.7,scaleX:1,scaleY:1,x:532.45,y:777,alpha:1},15,cjs.Ease.backOut).wait(37));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(462.8,541.8,736.7,363);


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

	// an_sc2_car
	this.instance = new lib.an_sc2car("synched",0,false);
	this.instance.setTransform(327.15,593.8,1.4636,1.4636,0,0,0,265.1,112.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(90).to({startPosition:89},0).to({_off:true},1).wait(56));

	// an_sc2_gift
	this.instance_1 = new lib.an_sc2gift("synched",0,false);
	this.instance_1.setTransform(406.25,153.65,1.2886,1.2886,0,0,0,115,98.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).wait(88).to({startPosition:88},0).to({_off:true},1).wait(56));

	// an_sc2_title
	this.instance_2 = new lib.an_sc2title("synched",0,false);
	this.instance_2.setTransform(554.1,4.3,1.3484,1.3484,0,0,0,99.8,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(93).to({startPosition:89},0).to({_off:true},1).wait(56));

	// an_sc_free
	this.instance_3 = new lib.an_scfree("synched",0,false);
	this.instance_3.setTransform(633.05,176.25,1.3374,1.3374,0,0,0,41.6,41.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).wait(89).to({startPosition:44},0).to({_off:true},1).wait(56));

	// an_sc2_cup
	this.instance_4 = new lib.an_sc2cup("synched",0,false);
	this.instance_4.setTransform(304.2,258.9,1.6862,1.6862,0,0,0,216.8,16.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).wait(91).to({startPosition:89},0).to({_off:true},1).wait(56));

	// an_sc2_try
	this.instance_5 = new lib.an_sc2try("synched",0,false);
	this.instance_5.setTransform(403.15,175.6,1.3374,1.3374,0,0,0,138.4,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(93).to({startPosition:89},0).to({_off:true},1).wait(56));

	// an_sc2_frame_white
	this.instance_6 = new lib.an_sc2framewhite("synched",0,false);
	this.instance_6.setTransform(820.15,202.7,1,0.6968,0,0,0,630.1,195.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(93).to({startPosition:89},0).to({_off:true},1).wait(56));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.4,-81.1,786.5,839.8000000000001);


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

	// an_sc2_car
	this.instance = new lib.an_sc2car("synched",0,false);
	this.instance.setTransform(88.35,385.35,1.1204,1.1204,0,0,0,264.9,112.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(88).to({startPosition:88},0).to({_off:true},1).wait(1));

	// sb_sc1_car2
	this.instance_1 = new lib.sb_sc1car2("synched",7);
	this.instance_1.setTransform(311.85,484.2,0.2545,0.2545,0,0,0,500.1,295.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:295.4,scaleX:0.3594,scaleY:0.3594,x:413,y:534.65,alpha:1},7,cjs.Ease.cubicOut).to({startPosition:88},81).to({_off:true},1).wait(1));

	// sb_sc1_car1
	this.instance_2 = new lib.sb_sc1car1("synched",7);
	this.instance_2.setTransform(126.95,676.5,0.3015,0.3015,0,0,0,500.2,242.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:500.1,regY:242.2,scaleX:0.3862,scaleY:0.3862,x:245.95,y:700.7,alpha:1},7,cjs.Ease.cubicOut).to({startPosition:88},81).to({_off:true},1).wait(1));

	// an_sc1_giftgo
	this.instance_3 = new lib.an_sc1_giftgo("synched",0,false);
	this.instance_3.setTransform(104.25,46.8,1.0242,1.0242,0,0,0,109.1,85.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).wait(74).to({startPosition:44},0).to({_off:true},1).wait(1));

	// an_sc1_4w
	this.instance_4 = new lib.an_sc14w("synched",0,false);
	this.instance_4.setTransform(544.8,123.7,0.9224,0.9224,0,0,0,363.5,27.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).wait(85).to({startPosition:48},0).to({_off:true},1).wait(1));

	// an_sc_plus_copy
	this.instance_5 = new lib.an_scplus("synched",0,false);
	this.instance_5.setTransform(196.35,122.45,0.9224,0.9224,0,0,0,28.4,28.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({_off:false},0).wait(81).to({startPosition:44},0).to({_off:true},1).wait(1));

	// an_sc1_high
	this.instance_6 = new lib.an_sc1high("synched",0,false);
	this.instance_6.setTransform(537.15,179.05,0.9224,0.9224,0,0,0,386.9,27.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:false},0).wait(81).to({startPosition:54},0).to({_off:true},1).wait(1));

	// an_sc_plus
	this.instance_7 = new lib.an_scplus("synched",0,false);
	this.instance_7.setTransform(167.25,177.3,0.9224,0.9224,0,0,0,28.4,28.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).wait(80).to({startPosition:44},0).to({_off:true},1).wait(1));

	// an_sc_free
	this.instance_8 = new lib.an_scfree("synched",0,false);
	this.instance_8.setTransform(225.4,-39.2,1.0796,1.0796,0,0,0,41.6,41.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).wait(84).to({startPosition:44},0).to({_off:true},1).wait(1));

	// an_sc1_io
	this.instance_9 = new lib.an_sc1io("synched",0,false);
	this.instance_9.setTransform(243.7,-21.7,1.0796,1.0796,0,0,0,260.5,29.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({_off:false},0).wait(85).to({startPosition:60},0).to({_off:true},1).wait(1));

	// an_sc1_record
	this.instance_10 = new lib.an_sc1record("synched",0,false);
	this.instance_10.setTransform(238.1,35.35,1.0796,1.0796,0,0,0,262.2,13.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2).to({_off:false},0).wait(86).to({startPosition:44},0).to({_off:true},1).wait(1));

	// an_sc1_title
	this.instance_11 = new lib.an_sc1title("synched",0,false);
	this.instance_11.setTransform(362.5,-118.05,1.153,1.153,0,0,0,157.8,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(88).to({startPosition:39},0).to({_off:true},1).wait(1));

	// an_sc1_frame_yellow
	this.instance_12 = new lib.an_sc1frameyellow("synched",0,false);
	this.instance_12.setTransform(625.9,-9.75,1.0796,1.0796,0,0,0,535.4,90.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(88).to({startPosition:44},0).to({_off:true},1).wait(1));

	// an_sc1_frame_white
	this.instance_13 = new lib.an_sc1framewhite("synched",0,false);
	this.instance_13.setTransform(-33.6,146.2,0.9807,0.9807,0,0,0,660.8,92.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(7).to({_off:false},0).wait(81).to({startPosition:44},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.4,-187,801.1,981);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#050102").s().p("AA6BVIh9h/IAAB/IgmAAIAAipIAxAAIB8B+IAAh+IAmAAIAACpg");
	this.shape.setTransform(434.3375,-75.4875,0.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#050102").s().p("AhmBVIAAgjICeAAQAOgDAAgOQAAgPgPgCIgHAAIhxgBQgVgDgLgPQgLgNAAgSQAAgTANgOQAMgOASgCICigBIAAAjIiRAAIgKAAQgLAEAAALQAAAMALADIALABIBwAAQAVACALAQQALAOAAATQAAATgLAOQgNARgWACIgMAAg");
	this.shape_1.setTransform(392.2,-75.4875,0.5,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#050102").s().p("AhnBVIAAgjICXAAIAIAAQAOgDAAgOQAAgPgPgCIgHAAIhxgBQgVgDgLgPQgKgNAAgSQAAgTAMgOQAMgOASgCICigBIAAAjIiQAAIgLAAQgLAEAAALQAAAMALADIALABIBwAAQAUACAMAQQALAOAAATQAAATgLAOQgNARgVACIgNAAg");
	this.shape_2.setTransform(406.3375,-75.4875,0.5,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#050102").s().p("ABRBVIgTgeIh7AAIgTAeIguAAIBripIAnAAIBrCpgAArAWIgrhDIgqBDIBVAAg");
	this.shape_3.setTransform(420.2375,-75.4875,0.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#050102").s().p("AA6BVIh9h/IAAB/IgmAAIAAipIAxAAIB9B+IAAh+IAlAAIAACpg");
	this.shape_4.setTransform(371.75,-75.4875,0.5,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#050102").s().p("AgSBVIAAipIAlAAIAACpg");
	this.shape_5.setTransform(382.1625,-75.4875,0.5,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#050102").s().p("AlHB4QiXhfhLifIgCgGQgLgWgKgIQgOgNgdgEIhFgIIAAgUICmAAIABABQA5CnCQBlQCQBnCwAAQCyAACPhmQCQhmA6imIAAgCICmAAIAAAUIhFAIQgcADgPAOQgJAIgLAWIgDAHQhLCeiXBfQiXBgixAAQiwAAiXhgg");
	this.shape_6.setTransform(403.05,-55.675,0.5,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#050102").s().p("AILDYIAAgCQg6iniQhlQiPhmiyAAQiwAAiQBmQiQBlg5CnIgBACIimAAIAAgUIBFgIQAdgDAOgOQAKgIALgWIACgHQBLieCXhgQCXhfCwAAQCxAACXBfQCXBgBLCeIADAHQALAWAJAIQAPAOAcADIBFAIIAAAUg");
	this.shape_7.setTransform(403.05,-95.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(187));

	// sc2
	this.instance = new lib.sc2("synched",0);
	this.instance.setTransform(452.55,156.8,0.5,0.5,0,0,0,390.5,250);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90).to({_off:false},0).to({startPosition:89},91).to({regY:250.1,scaleX:0.2755,scaleY:0.2755,x:465.05,alpha:0},5).wait(1));

	// sc1
	this.instance_1 = new lib.sc1("synched",0,false);
	this.instance_1.setTransform(497.8,156.8,0.5,0.5,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:78},84).to({regX:299.9,regY:250.1,scaleX:0.1124,scaleY:0.1124,alpha:0},11,cjs.Ease.cubicOut).to({_off:true},1).wait(91));

	// an_deco
	this.instance_2 = new lib.an_deco("synched",0,false);
	this.instance_2.setTransform(740.55,25,0.5,0.6822,0,0,0,1304.7,842.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90).to({startPosition:0},0).wait(97));

	// sc_bg
	this.instance_3 = new lib.scbg();
	this.instance_3.setTransform(492.5,146.55,0.5,0.5,0,0,0,675.2,472.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(187));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(226.6,-180.3,461.29999999999995,645.1);


// stage content:
(lib._300x600 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.wrap("synched",0);
	this.instance.setTransform(151.4,285.3,1,1,0,0,0,499.2,142.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360).to({mode:"single",startPosition:179},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(28.8,262.9,311.4,345.1);
// library properties:
lib.properties = {
	id: '28C5218B42C84C298A29266CCFDD9C29',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/kicks.png", id:"kicks"},
		{src:"images/sc2car.png", id:"sc2car"},
		{src:"images/sc2gift.png", id:"sc2gift"},
		{src:"images/sentra.png", id:"sentra"}
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
an.compositions['28C5218B42C84C298A29266CCFDD9C29'] = {
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