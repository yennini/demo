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



(lib.line = function() {
	this.initialize(img.line);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,889,455);


(lib.sc1bg = function() {
	this.initialize(img.sc1bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,667);


(lib.sc2bg = function() {
	this.initialize(img.sc2bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,667);


(lib.sc3bg = function() {
	this.initialize(img.sc3bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,539);


(lib.sc4bg = function() {
	this.initialize(img.sc4bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1001,668);


(lib.sc5bg = function() {
	this.initialize(img.sc5bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,999,669);// helper functions:

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


(lib.sb_sc5titleline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// line
	this.instance = new lib.line();
	this.instance.setTransform(0,0,0.2497,0.2497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(106));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,222,113.6);


(lib.an_sc5subtitle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2CFF00").s().p("AhEA0IALAAQABAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAIAAgYIgMAEIgFgVIARgEIAAgbIgOAAIAAgUIAOAAIAAgbIAUAAIAAAbIALAAIAAAUIgLAAIAAAWIALgDIADASIgOAFIAAAeQAAAOgGAEQgIAEgPAAQAAgJgFgLgAgXBEIAAgUIAkAAIAAgTIgcAAIAAgUIBOAAIAAAUIgdAAIAAATIAlAAIAAAUgAgWgIQAPgDAFgHQADgFABgNIgFAAIAAAMIgTAAIAAgeIAjAAIgGgLIAVgGQAFAJADAIIAiAAIAAAeIgTAAIAAgMIgGAAIAAASQABAFADAAIAUgBIABAQQgDACgIAAIgLAAQgNAAgFgFQgEgEAAgNIAAgSIgFAAQgBATgGAJQgHAKgTAEQgCgHgIgHg");
	this.shape.setTransform(74.05,26.175);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50).to({_off:false},0).wait(56));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2CFF00").s().p("AAiA6IgJADQgDgHgFgIIALgFIhKAAIANAHQgGAKgKANIgSgKQAKgKAGgMIAEACIAAg7IgKAFQgFgJgHgGQARgFAFgMIgQAAIAAgQIAUAAIAAgJIAUAAIgBAJIAgAAIgBAGQgCAYgEAFQgDAEgGABIgOABQAAgIgEgIIAIABIADgCIADgIIgPAAQgEARgOAJIBqAAIAAAOIgqAAIAAADIAjAAIAAAKIgjAAIAAAEIAjAAIAAALIgjAAIAAAEIAzAAIAAAHQgDAagFAGQgEAEgGABIgQAAQgBgIgBgFgAAoA3IgCAAIADAAQAAAAABAAQABAAAAAAQABAAAAgBQAAAAABAAQACgCABgLIgQAAQAGAIACAGgAgaAbIAaAAIAAgEIgaAAgAgaAMIAaAAIAAgEIgaAAgAgagCIAaAAIAAgDIgaAAgAgeAvIASgDQAEAMABALIgTADQgBgMgDgLgAgGAvIAPgEQAFAIAEAMIgSAFQAAgJgGgMgAAMgXIAAgpIA5AAIAAApgAAggnIAPAAIAAgJIgPAAg");
	this.shape_1.setTransform(58.45,26.275);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(46).to({_off:false},0).wait(60));

	// Layer_6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2CFF00").s().p("AARBHQgBgMgGgJIAWABQAEAAADgDQAFgHAChEIgcAAQgIAPgFAHIgMgJIAABGIgmAAIAAALIgUAAIAAhwIARAAIADgZIAYADIgHAWIAVAAIAAATQALgSAGgZIAVAEIgFASIAoAAIAAAJIgDBHQgCAWgEAGQgGAIgKABIgNABIgLAAgAgtAlIATAAIAAgaIgTAAgAgtgGIATAAIAAgVIgTAAgAADgBIARgKIAVAgIgTAMQgDgIgQgag");
	this.shape_2.setTransform(43.5,26.245);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(42).to({_off:false},0).wait(64));

	// Layer_13
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2CFF00").s().p("AArA5IAAANIgOAAIAAgdIgFAAIAAAdIgOAAIAAgdIgEAAIAAAfIgPAAIAAhMIBJAAIAAA6QAAALgEAEQgFADgIAAQAAgEgEgLgAArA3IADAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIAAgMIgEAAgAArAYIAEAAIAAgMIgEAAgAAYAYIAFAAIAAgMIgFAAgAAGAYIAEAAIAAgMIgEAAgAgzBIIAAgVIgVAAIAAgSIAVAAIAAgIIgRAAIAAg4IARAAIAAgGIgTAAIAAgTIATAAIAAgNIATAAIAAANIATAAIAAATIgTAAIAAAGIARAAQAZgRAOgXIAPAHIgDAEQARATAUAMQgJAHgFALIgIgHIAAAGIgyAAIAAgFIgHAGQgCgFgHgHIAAAwIgRAAIAAAIIASAAIAAASIgSAAIAAAVgAgjAKIAEAAIAAgGIgEAAgAg1AKIAEAAIAAgGIgEAAgAgjgJIAEAAIAAgHIgEAAgAg1gJIAEAAIAAgHIgEAAgAANgdIAbAAIgOgPQgGAHgHAIg");
	this.shape_3.setTransform(28.175,26.125);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(38).to({_off:false},0).wait(68));

	// Layer_14
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2CFF00").s().p("Ag/A/IAAh9IB/AAIAAB7IgXAAIAAgIIhSAAIAAAKgAgpAgIBSAAIAAgMIgQAAQgMAAgEgHQgEgFAAgNIAAgkIgKAAQgBAegEAMQgFASgQAJQgDgIgHgHgAgpAJQAJgHADgLQADgKAAgWIgPAAgAAZgEQAAAGADAAIANAAIAAgrIgQAAg");
	this.shape_4.setTransform(12.625,26.625);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(34).to({_off:false},0).wait(72));

	// tdash
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2CFF00").s().p("AhGAKIAAgTICNAAIAAATg");
	this.shape_5.setTransform(80.925,13.2);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(30).to({_off:false},0).wait(76));

	// t3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2CFF00").s().p("AgpA2IAAgXQAVAFANAAQAYAAgBgRQABgKgJgEQgHgDgSAAIgCAAIAAgKIAagbIgvAAIAAgYIBQAAIAAATIgZAbQAKACAJAJQAIAJAAAMQAAApgvAAQgSAAgSgGg");
	this.shape_6.setTransform(66.9,8.125);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(26).to({_off:false},0).wait(80));

	// t0
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2CFF00").s().p("AgjAtQgNgQAAgcQAAgcAMgQQAMgRAYAAQAYAAANARQAMAQAAAcQAAAcgNAQQgNAQgXAAQgXAAgMgQgAgQgbQgHAKABASQgBAkAXABQAYgBgBgkQABgSgIgKQgGgKgKAAQgLAAgFAKg");
	this.shape_7.setTransform(56.8,8.2);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(22).to({_off:false},0).wait(84));

	// tk
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2CFF00").s().p("AASA7QgSgegXgbQAOgaAYgiIAiAAQggApgLARQAMANAhAugAgyA7IAAh1IAZAAIAAB1g");
	this.shape_8.setTransform(42.575,8.225);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(14).to({_off:false},0).wait(92));

	// ts
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2CFF00").s().p("AgrA3IAAgaQAYAIAQAAQAXgBAAgJQAAgJgOgEIgagIQgZgGAAgYQAAgkAvAAQAOAAAXAGIAAAZQgXgHgQABQgTgBAAALQAAAHALADIAbAIQAbAHAAAYQAAAlguAAQgWAAgVgGg");
	this.shape_9.setTransform(31.075,8.2);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(10).to({_off:false},0).wait(96));

	// ta
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2CFF00").s().p("AAeA7IgGgWIgxAAIgGAWIgaAAQAShBAWg0IAiAAQAYA6ARA7gAgSAOIAiAAQgIgbgJgYIgRAzg");
	this.shape_10.setTransform(20.3,8.225);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(6).to({_off:false},0).wait(100));

	// tt
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2CFF00").s().p("AgMA7IAAhdIgiAAIAAgYIBdAAIAAAYIgiAAIAABdg");
	this.shape_11.setTransform(10.925,8.225);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(2).to({_off:false},0).wait(104));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,33.4);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#08204F","rgba(9,33,77,0)"],[0,1],0,-37.4,0,37.5).s().p("A4jF2IAArrMAxHAAAIAALrg");
	this.shape.setTransform(334.1265,230.9813,0.469,0.6292,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#08204F","rgba(9,33,77,0)"],[0,1],0,-37.4,0,37.5).s().p("A4jF2IAArrMAxHAAAIAALrg");
	this.shape_1.setTransform(415.4274,230.9813,0.469,1.5654,0,-90,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#08204F","rgba(9,33,77,0)"],[0,1],0,-37.4,0,37.5).s().p("A4jF2IAArrMAxHAAAIAALrg");
	this.shape_2.setTransform(216.5901,230.9813,0.469,0.4191,0,-90,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#08204F","rgba(9,33,77,0)"],[0,1],0,-37.4,0,37.5).s().p("A4jF2IAArrMAxHAAAIAALrg");
	this.shape_3.setTransform(160.5154,230.9813,0.469,1.0915,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(90));

	// Layer_3
	this.instance = new lib.sc4bg();
	this.instance.setTransform(201,172,0.1557,0.1557);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// Layer_4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("EgkmANrIAA7VMBJNAAAIAAbVg");
	this.shape_4.setTransform(307.381,235.3,1.6438,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.7,147.8,770.3000000000001,175);


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

	// Layer_12
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2CFF00").s().p("AgaBsIAAgUIAZAAIAAiuIgZAAIAAgVIA1AAIAADXg");
	this.shape.setTransform(140.05,28.575);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(36).to({_off:false},0).wait(35).to({_off:true},1).wait(18));

	// Layer_13
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2CFF00").s().p("AAcBAQgTANgaAIQgGgPgIgJQAXgFAQgKQgOgSgIgVIAIgCIgLAAIAAgXIAgAAIAAgSIgkAAIAAgYIAkAAIAAgYIAaAAIAAAYIAnAAIAAAYIgnAAIAAASIASAAIAFgBIARAHQgJAjgYAYQASALAVAFQgJAJgHAOQgagHgRgPgAAcAgQAMgMAIgPIgmAAQAIAPAKAMgAhUA9IAQAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIAAghIgPAEIgHgZIAWgEIAAgbIgTAAIAAgZIATAAIAAggIAaAAIAAAgIAQAAIAAAZIgQAAIAAAVIAPgDIADAYIgSAEIAAAnQAAARgJAFQgIAEgVABQgCgNgFgLg");
	this.shape_1.setTransform(125.5,28.75);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(33).to({_off:false},0).wait(38).to({_off:true},1).wait(18));

	// Layer_14
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2CFF00").s().p("AApBWIAAgpIgzAKIgEgZIA3gKIAAhoIAaAAIAABkIAQgDIAEAYIgUAEIAAAtgAg6BWIAAg4QgJATgHAKQgEgMgIgOQAOgQALgaIgXAAIAAgZIAaAAIAAgRIgSADQAAgIgHgNQAjgEAYgKIAOAVIgWAHIAAAVIAVAAIAAAWIAAADIgVAAIAAAAIAWAXIgPAUIgHgPIAABDgAgLgMIAQgPQAWARAGAJIgSAQQgHgMgTgPgAgEg8IAQgOQATAOAIAMIgSARQgHgMgSgRg");
	this.shape_2.setTransform(105.5,28.75);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(30).to({_off:false},0).wait(41).to({_off:true},1).wait(18));

	// Layer_15
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2CFF00").s().p("AAmAyIAUgHIh2AAIAWAGQgHAUgMAOIgagLQAMgKAGgTIgPAAIAAgWIBDAAIAAgFIg1AAIAAgUIA1AAIAAgFIgzAAIAAhJICBAAIAABJIg0AAIAAAFIA2AAIAAAUIg2AAIAAAFIBEAAIAAAWIgSAAQAQAUAFALIgbAJQgEgKgPgXgAANgeIAaAAIAAgUIgJAUIgQgGIAIgZIARAGIAAgGIgaAAgAgngeIAaAAIAAgfIgaAAgAADAzIAYgFQAIARABAMIgaAGQgBgLgGgTgAggAyIAYgCQAEARAAANIgaADQAAgRgCgOgAgng2IAQgGQAIANABAKIgRAHQgBgLgHgNg");
	this.shape_3.setTransform(85.775,29.075);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(26).to({_off:false},0).wait(45).to({_off:true},1).wait(18));

	// Layer_16
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2CFF00").s().p("AhSA+QAKABAEgBQABAAAAAAQABAAAAAAQAAgBABAAQAAgBAAAAIAAgcIgPAEIgFgZIAUgEIAAgiIgRAAIAAgYIARAAIAAggIAYAAIAAAgIAMAAIAAAYIgMAAIAAAbIANgEIAEAWIgRAGIAAAkQAAAQgIAFQgHAFgTABQgDgPgEgKgAgdBRIAAgXIAsAAIAAgXIgiAAIAAgYIBfAAIAAAYIgjAAIAAAXIAtAAIAAAXgAgbgKQASgEAHgHQADgHABgQIgHAAIAAAQIgWAAIAAglIAqAAIgGgOIAYgHIAKAVIAqAAIAAAlIgYAAIAAgQIgHAAIAAAWQAAAGAEAAIAZgBIACATQgFACgJABIgOAAQgPAAgGgGQgFgFAAgQIAAgWIgGAAQgBAYgHALQgJAMgXAFQgDgJgJgJg");
	this.shape_4.setTransform(65.875,28.65);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(22).to({_off:false},0).wait(49).to({_off:true},1).wait(18));

	// Layer_17
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2CFF00").s().p("AhRBJQALgLAJgPIAEACIAAhGIgNAGQgEgLgJgIQAUgGAGgOIgTAAIAAgTIAYAAIABgMIAYAAIgBAMIAlAAIgBAHQgCAdgFAGQgEAFgGABQgJABgJgBQgBgKgDgIIAJAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQACgCAAgIIgQAAQgFAUgRALIB+AAIAAAQIgwAAIAAAFIAoAAIAAAMIgoAAIAAAFIAoAAIAAANIgoAAIAAAFIA8AAIgBAIQgCAfgHAHQgFAFgHABIgTAAQAAgHgDgJIgLAEQgCgIgIgKIAPgGIhaAAIAQAJQgLARgJALgAAwBCIgCAAIADAAQADAAABgBQACgCADgOIgUAAQAHAKADAHgAgfAhIAeAAIAAgFIgeAAgAgfAPIAeAAIAAgFIgeAAgAgfgCIAeAAIAAgFIgeAAgAgkA5IAVgEQAGAQAAALIgWAEQgCgLgDgQgAgHA5IASgFQAIANACALIgVAGQAAgLgHgOgAAPgcIAAgxIBDAAIAAAxgAAmgvIATAAIAAgLIgTAAg");
	this.shape_5.setTransform(45.8,28.775);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(19).to({_off:false},0).wait(52).to({_off:true},1).wait(18));

	// Layer_18
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2CFF00").s().p("AhWBHQAQgUAAgsIAAgcIAZAAIgKgKIAlgGIgdgFIAMgJIghAAIAAgUIA9AAIgFgHIAQgJIALAQIBAAAIAAAUIgaAAIAKAGIgTAHIAZAHIgMAKIAbAAIAAAUIiBAAIAAAdQALgLAHgRIAWAGIgCAEIAOAAIAAgIIAaAAIAAAIIAqAAIAAAVIgqAAIAAAFIAkAAIAAAUIgkAAIAAAFIA2AAIAAAVIiDAAIAAgVIAzAAIAAgFIgjAAIAAgKIgJAJQgCgHgHgOQgFAjgOATQgJgLgMgGgAgUAkIAbAAIAAgFIgYAAgAgRgVIA5AAIgZgIgAAQgtIAUgGIgvAAg");
	this.shape_6.setTransform(26.225,28.725);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(16).to({_off:false},0).wait(55).to({_off:true},1).wait(18));

	// Layer_19
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2CFF00").s().p("AAlBPIAAgMIhKAAIAAAMIgbAAIAAidICBAAIAACdgAglApIBKAAIAAgjIhKAAgAglgTIBKAAIAAghIhKAAg");
	this.shape_7.setTransform(6.6,29.15);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(13).to({_off:false},0).wait(58).to({_off:true},1).wait(18));

	// Layer_20
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2CFF00").s().p("AAYBHQgTgegOgPIgWAAIAAAtIgiAAIAAiOIBCAAQA7ABABAvQAAAQgKALQgKAMgPADQAUAWAVAegAgegCIAaAAQAdAAAAgVQAAgSgdAAIgaAAg");
	this.shape_8.setTransform(209.95,3.95);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(40).to({_off:false},0).wait(31).to({_off:true},1).wait(18));

	// Layer_21
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2CFF00").s().p("Ag3BHIAAiOIBuAAIAAAeIhMAAIAAAbIBEAAIAAAbIhEAAIAAAdIBNAAIAAAdg");
	this.shape_9.setTransform(195.7,3.95);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(37).to({_off:false},0).wait(34).to({_off:true},1).wait(18));

	// Layer_22
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2CFF00").s().p("AAYBHQgTg6gFgWQgFAWgSA6IgvAAQgRhGgOhIIAiAAQAJA+ANAtQATg2AIghIAlAAQAIAhAUA2QAMgtAJg+IAiAAQgKA+gVBQg");
	this.shape_10.setTransform(178.75,3.95);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(34).to({_off:false},0).wait(37).to({_off:true},1).wait(18));

	// Layer_23
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2CFF00").s().p("Ag1A5QgXgVAAglQAAgiAZgVQAVgRAeAAQAfAAAVARQAZAVAAAiQAAAlgYAVQgUARghAAQggAAgVgRgAgcggQgNAMAAAUQAAAWAOAMQALAKAQAAQARAAALgKQANgMAAgWQAAgUgMgMQgLgLgSAAQgRAAgLALg");
	this.shape_11.setTransform(160.625,3.95);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(31).to({_off:false},0).wait(40).to({_off:true},1).wait(18));

	// Layer_24
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2CFF00").s().p("AhABHIAAiOIBCAAQA/AAAAA0QAAAbgVANQgRALgZAAIggAAIAAAngAgeAEIAeAAQANgBAHgDQAJgGAAgOQAAgWgeABIgdAAg");
	this.shape_12.setTransform(145.425,3.95);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(28).to({_off:false},0).wait(43).to({_off:true},1).wait(18));

	// Layer_25
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2CFF00").s().p("AgqAQIAAgfIBVAAIAAAfg");
	this.shape_13.setTransform(132.9,4.6);
	this.shape_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(26).to({_off:false},0).wait(45).to({_off:true},1).wait(18));

	// Layer_26
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2CFF00").s().p("Ag7AAQAAgcAUgQQARgOAZAAQAcAAAOAOQAPAPAAAbIAAAOIhVAAQADAUAeABQAUAAAagIIAAAaQgbAIgUAAQhCAAAAg7gAgYgIIAxAAQAAgLgFgHQgGgGgLAAQgZAAgCAYg");
	this.shape_14.setTransform(121.675,5.45);
	this.shape_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(23).to({_off:false},0).wait(48).to({_off:true},1).wait(18));

	// Layer_27
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2CFF00").s().p("Ag1BUIBIinIAjAAIhJCng");
	this.shape_15.setTransform(109.675,4.45);
	this.shape_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(20).to({_off:false},0).wait(51).to({_off:true},1).wait(18));

	// Layer_28
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2CFF00").s().p("Ag3BHIAAiOIBuAAIAAAeIhMAAIAAAbIBEAAIAAAbIhEAAIAAAdIBNAAIAAAdg");
	this.shape_16.setTransform(97.8,3.95);
	this.shape_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(17).to({_off:false},0).wait(54).to({_off:true},1).wait(18));

	// Layer_29
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2CFF00").s().p("AgmA5QgYgUgBglQAAgjAagVQAYgRAhAAQAXAAAUAGIAAAeQgUgGgUgBQgYAAgNAMQgNAMAAAUQAAAWAPALQAMAMAXgBQARAAAXgHIAAAgQgWAFgVAAQgkAAgWgRg");
	this.shape_17.setTransform(83.95,3.95);
	this.shape_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(14).to({_off:false},0).wait(57).to({_off:true},1).wait(18));

	// Layer_30
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2CFF00").s().p("AAYBHQgTgegOgPIgWAAIAAAtIgiAAIAAiOIBBAAQA9ABAAAvQAAAQgKALQgLAMgOADQAWAXATAdgAgfgCIAbAAQAdAAAAgVQgBgSgdAAIgaAAg");
	this.shape_18.setTransform(70.45,3.95);
	this.shape_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(11).to({_off:false},0).wait(60).to({_off:true},1).wait(18));

	// Layer_31
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2CFF00").s().p("Ag0A5QgYgVAAglQAAgiAZgVQAVgRAeAAQAfAAAVARQAZAVAAAiQAAAlgXAVQgVARghAAQggAAgUgRgAgcggQgNAMABAUQgBAWAOAMQALAKAQAAQARAAAMgKQANgMgBgWQABgUgMgMQgMgLgSAAQgQAAgMALg");
	this.shape_19.setTransform(54.2,3.95);
	this.shape_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(9).to({_off:false},0).wait(62).to({_off:true},1).wait(18));

	// Layer_32
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2CFF00").s().p("AANBHIAAgYIhPAAIAAgbQAYgmAzg1IApAAQg4A5gWAgIApAAIAAgeIAhAAIAAAeIAVAAIAAAdIgVAAIAAAYg");
	this.shape_20.setTransform(38.925,3.95);
	this.shape_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(7).to({_off:false},0).wait(64).to({_off:true},1).wait(18));

	// Layer_33
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2CFF00").s().p("AgqAQIAAgfIBVAAIAAAfg");
	this.shape_21.setTransform(26.875,4.6);
	this.shape_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(4).to({_off:false},0).wait(67).to({_off:true},1).wait(18));

	// Layer_34
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2CFF00").s().p("AgoAtQgTgQAAgdQAAgcAUgQQARgOAZAAQAcAAAOAOQAPAPAAAbIAAAOIhUAAQACAUAeABQAUAAAagIIAAAaQgaAIgVAAQgeAAgRgOgAgYgIIAyAAQgBgYgWAAQgYAAgDAYg");
	this.shape_22.setTransform(15.625,5.45);
	this.shape_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(2).to({_off:false},0).wait(69).to({_off:true},1).wait(18));

	// Layer_11
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2CFF00").s().p("AgaBsIAAjYIA1AAIAAAVIgZAAIAACvIAZAAIAAAUg");
	this.shape_23.setTransform(2.8,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(71).to({_off:true},1).wait(18));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-6.7,216.5,46.1);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#111723","rgba(17,21,31,0.365)","rgba(18,20,28,0)"],[0,0.784,1],38.2,0,-38.2,0).s().p("Al9FDIAAqFIL7AAIAAKFg");
	this.shape.setTransform(310.5399,265.8065,1.1111,1.1111);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#111723","rgba(17,21,31,0.365)","rgba(18,20,28,0)"],[0,0.784,1],-63.3,0,63.4,0).s().p("Ap5VuMAAAgrbITzAAMAAAArbg");
	this.shape_1.setTransform(436.6662,265.7965,1.3203,0.2583);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(86));

	// sc3bg
	this.instance = new lib.sc3bg();
	this.instance.setTransform(146,216,0.2064,0.2064);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3).to({_off:false},0).wait(86));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A4SEqIAApUMAwlAAAIAAJUg");
	this.shape_2.setTransform(288.1677,268.5787,1.1111,1.1111);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},1).wait(3).to({_off:false},0).wait(86));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(115.4,216,405,111.30000000000001);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2CFF00").s().p("AgaBsIAAgVIAZAAIAAiuIgZAAIAAgUIA1AAIAADXg");
	this.shape.setTransform(60.85,12.175);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(14).to({_off:false},0).wait(57).to({_off:true},1).wait(18));

	// sc322
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2CFF00").s().p("AhpBTQARgFAPgKIgHgKIgKAIQgEgMgKgLIALgIQgEgHgDgMIATgHIADAJQAHgIAFgMQgMAIgLAEQgHgKgKgIQAagIAQgNIAAgGIgLAMIgHgJQgFALgHAHQgEgKgHgHQAKgNAGgUIASAFIgEAJIALAMIAAgbIgiAAIAAgXIAiAAIAAgQIAaAAIAAAQIAfAAIAAAXIgfAAIAAAcQAGgKAFgSIARAFIgEAKIANANIAAgWIAjAAIABgMIgnAAIAAgYIBpAAIAAAYIglAAIgDAMIAmAAIAAB/IgYAAIAAgGIg2AAIAAAGIgWAAIAAhoIgMANIgIgKIgEAHIgNgIIAAACIAjATIgNAUQgOgMgTgLQgFAFgJAHIAVAFIgDAJIAQAAIAEgBIARAIQgJAbgRAVQAWAJAoAAIBPAAQgJANgDAPIhDAAQg2AAgbgRQgPAMgVAIQgGgNgKgJgAhAApQADAGAHAFQAHgIAFgMIgQAAgABEAoIAHAAIAAhNIgHAAgAAtAoIAGAAIAAgNIgGAAgAAVAoIAHAAIAAhNIgHAAgAAtAIIAGAAIAAgMIgGAAgAAtgYIAGAAIAAgNIgGAAg");
	this.shape_1.setTransform(44.1,11.325);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(10).to({_off:false},0).wait(61).to({_off:true},1).wait(18));

	// sc311
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2CFF00").s().p("AhjBOQANABAEgBQABAAABgBQAAAAABAAQAAgBAAAAQAAgBAAgBIAAgpIgSAFIgHgfIAZgFIAAghIgWAAIAAgeIAWAAIAAgoIAgAAIAAAoIATAAIAAAeIgTAAIAAAbIARgEIADAdIgUAEIAAAxQAAAVgKAFQgJAGgYAAQgCgNgHgPgAghBiIAAgeIBJAAQAMgvAEg0IAhAEQgJA4gLAnIAkAAIAAAegAgKgZIAbgGQALAuAEAoIgfAJQgBglgKg0gAgYgkIAAgdIAwAAQgDgMgHgVIAfgHQAHASAEAPIgWAHIBCAAIAAAdg");
	this.shape_2.setTransform(19.9,11.35);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(6).to({_off:false},0).wait(65).to({_off:true},1).wait(18));

	// Layer_8
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7BFA4C").s().p("AgaBsIAAjXIA1AAIAAAUIgZAAIAACuIAZAAIAAAVg");
	this.shape_3.setTransform(2.725,12.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2CFF00").s().p("AgaBsIAAjXIA1AAIAAAUIgZAAIAACuIAZAAIAAAVg");
	this.shape_4.setTransform(2.725,12.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},4).to({state:[{t:this.shape_4}]},65).to({state:[]},1).wait(18));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.6,23);


(lib.sb_sc2subtt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AA0BFIAAAOIgSAAIAAgiIgFAAIAAAiIgRAAIAAgiIgFAAIAAAmIgTAAIAAhdIBZAAIAABGQAAAOgGAFQgFAEgKAAQgBgIgDgKgAA0BBIADAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAAgPIgFAAgAA0AdIAFAAIAAgPIgFAAgAAdAdIAFAAIAAgPIgFAAgAAHAdIAFAAIAAgPIgFAAgAg+BXIAAgaIgYAAIAAgWIAYAAIAAgJIgUAAIAAhDIAUAAIAAgIIgXAAIAAgWIAXAAIAAgQIAXAAIAAAQIAXAAIAAAWIgXAAIAAAIIAVAAIAAAAQAfgVAPgcIASAJIgDAFQAWAYAWANQgKAJgGAMIgKgIIAAAIIg8AAIAAgHIgIAIQgEgHgHgIIAAA6IgVAAIAAAJIAXAAIAAAWIgXAAIAAAagAgqAMIAFAAIAAgIIgFAAgAhAAMIAFAAIAAgIIgFAAgAgqgMIAFAAIAAgHIgFAAgAhAgMIAFAAIAAgHIgFAAgAAPgjIAhAAIgRgSIgQASg");
	this.shape.setTransform(150.325,16.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOBWIAAgYIhEAAIAAgXIBEAAIAAgHIgyAAIAAhJIAyAAIAAgGIhAAAIAAgYIBAAAIAAgNIAaAAIAAANIBCAAIAAAYIhCAAIAAAGIA0AAIAABJIg0AAIAAAHIBHAAIAAAXIhHAAIAAAYgAAMALIAZAAIAAgGIgZAAgAgoALIAaAAIAAgGIgaAAgAAMgOIAZAAIAAgGIgZAAgAgogOIAaAAIAAgGIgaAAg");
	this.shape_1.setTransform(130.35,17.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgxAzIASgXQAQAOAPAAQASAAAAgLQAAgGgFgDIgNgHIgRgHQgcgKAAgaQAAgRAPgLQANgNAUAAQAaAAASASIgQAVQgOgKgOAAQgOgBgBALQABAGAFADIANAGIARAHQAaAJAAAbQAAARgNAMQgOANgXAAQgcgBgVgSg");
	this.shape_2.setTransform(113.75,17.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNAOQgFgGAAgIQAAgIAFgFQAGgGAHAAQAIAAAGAGQAFAFAAAIQAAAIgFAGQgFAGgJAAQgHAAgGgGg");
	this.shape_3.setTransform(103.05,22.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSBDIgpiFIAiAAIAQA+IAJApIABAAIAKgpIAQg+IAgAAIgoCFg");
	this.shape_4.setTransform(93.9,17.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA0BFIAAAOIgSAAIAAgiIgFAAIAAAiIgRAAIAAgiIgFAAIAAAmIgSAAIAAhdIBYAAIAABGQAAAOgFAFQgFAEgKAAQgDgNgCgFgAA0BBIADAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAAgPIgFAAgAA0AdIAFAAIAAgPIgFAAgAAdAdIAFAAIAAgPIgFAAgAAHAdIAFAAIAAgPIgFAAgAg+BXIAAgaIgYAAIAAgWIAYAAIAAgJIgUAAIAAhDIAUAAIAAgIIgWAAIAAgWIAWAAIAAgQIAXAAIAAAQIAXAAIAAAWIgXAAIAAAIIAVAAIAAAAQAfgVAPgcIASAJIgDAFQAWAYAWANQgLALgFAKIgJgIIAAAIIg9AAIAAgHIgIAIQgEgHgHgIIAAA6IgVAAIAAAJIAXAAIAAAWIgXAAIAAAagAgqAMIAFAAIAAgIIgFAAgAhAAMIAFAAIAAgIIgFAAgAgqgMIAFAAIAAgHIgFAAgAhAgMIAFAAIAAgHIgFAAgAAPgjIAhAAIgRgSQgGAIgKAKg");
	this.shape_5.setTransform(71.575,16.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeBEQAPgKAHgOIgQAGIgKgWIAhgKIABgOIgXAAIAAgWIAXAAIAAgOIgYAAIAAgYIAYAAIAAgdIAXAAIAABNQAAAggFATQgJAbgUAQQgHgJgMgJgAhSA9IAOABQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAgiIgPADIgFgZIAUgDIAAgcIgRAAIAAgYIARAAIAAggIAXAAIAAAgIAPAAIAAAYIgPAAIAAAWIANgDIAEAXIgRAEIAAApQAAARgHAFQgIAFgTAAQgBgMgFgNgAAgBVIAAiqIAZAAIAAAdIAaAAIAAAYIgaAAIAAAOIAYAAIAAAWIgYAAIAAAQIAdAAIAAAXIgdAAIAAAqg");
	this.shape_6.setTransform(51.5,17.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhSBUIAAgYIAWAAIAAhlIArAAIABgHIg+AAIAAgXIA/AAIABgMIAcADIgBAJIBCAAIAAAXIhGAAIgCAHIA2AAIAABlIAWAAIAAAYgAgiA8IBFAAIAAgGIhFAAgAgiAjIBFAAIAAgGIhFAAgAgiAKIBFAAIAAgGIhFAAgAgigOIBFAAIAAgGIhFAAg");
	this.shape_7.setTransform(31.8,16.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},78).to({state:[]},1).wait(11));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2CFF00").s().p("AuNCeIBak8IbAAAIhaE8g");
	this.shape_8.setTransform(90.95,15.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(78).to({_off:true},1).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.9,31.7);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#111723","rgba(17,21,31,0.365)","rgba(18,20,28,0)"],[0,0.784,1],-63.3,0,63.4,0).s().p("Ap5VuMAAAgrbITzAAMAAAArbg");
	this.shape.setTransform(-116.5113,131.025,0.5812,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#111723","rgba(17,21,31,0.365)","rgba(18,20,28,0)"],[0,0.784,1],-63.3,0,63.4,0).s().p("Ap5VuMAAAgrbITzAAMAAAArbg");
	this.shape_1.setTransform(9.3314,131.025,1.4565,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(90));

	// sc2bg
	this.instance = new lib.sc2bg();
	this.instance.setTransform(-83,0,0.4121,0.4136);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EhVlAWcQgxAAAAgwMAAAgrXQAAgwAxAAMCrLAAAQAxAAAAAwMAAAArXQAAAwgxAAg");
	this.shape_2.setTransform(377.175,165.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.5,-7.9,1105.4,316.9);


(lib.an_sc2tt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2CFF00").s().p("AgaBsIAAgVIAZAAIAAiuIgZAAIAAgUIA1AAIAADXg");
	this.shape.setTransform(109.55,12.175);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(22).to({_off:false},0).wait(21));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2CFF00").s().p("AhjBZQANgMALgUIAFADIAAhWIgPAHQgGgNgKgJQAXgJAIgQIgXAAIAAgYIAdAAIABgOIAdAAIgBAOIAuAAIgBAKQgDAigGAIQgDAFgKACIgVAAQgBgOgFgIIALABQAEAAACgDQACgCABgJIgUAAQgHAYgVAOICbAAIAAAUIg7AAIAAAFIAyAAIAAAPIgyAAIAAAGIAyAAIAAAQIgyAAIAAAFIBJAAIgBAKQgCAmgIAJQgGAGgJABQgHACgQgBQgBgLgDgJIgNAGQgEgMgIgLIARgHIhuAAIAUALQgNAVgLAMgAA7BQIgDABIADAAQAEAAACgCQADgEACgPIgXAAQAHAJAFALgAgnAnIAmAAIAAgFIgmAAgAgnASIAmAAIAAgGIgmAAgAgngDIAmAAIAAgFIgmAAgAgtBFIAbgEQAGASABAOIgcAFQgBgPgFgSgAgJBFIAXgGQAJARACANIgZAHQAAgMgJgTgAARgiIAAg9IBUAAIAAA9gAAug6IAYAAIAAgNIgYAAg");
	this.shape_1.setTransform(92.525,10.6);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(18).to({_off:false},0).wait(25));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2CFF00").s().p("AASBoIAAgzIgYAAIAWAIQgQAZgUASQgIgKgOgKQATgOAMgRIgUAAIAAgZIAxAAIAAgMIgvAAIAAg1IA7AAIAAAzIAHAAIAAgzIA+AAIAAA1IgyAAIAAAMIA1AAIAAAZIgbAAQATAQAMAPIgWATQgHgNgagXIAQgOIgSAAIAAAzgAA9gEIAMAAIAAgLIgMAAgAgGgEIALAAIAAgLIgLAAgAhjBJIAOAAQAAAAABAAQABAAAAgBQAAAAABgBQAAAAAAgBIAAgnIgQAFIgHgfIAXgFIAAgiIgUAAIAAgeIAUAAIAAgoIAdAAIAAAoIARAAIAAAeIgRAAIAAAaIAPgFIAEAcIgTAGIAAAxQAAATgJAGQgIAGgVAAQgCgOgGgOgAgKgrIAAg1IBZAAIAAA1gAAQhBIAiAAIAAgJIgiAAg");
	this.shape_2.setTransform(68.825,11.1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(14).to({_off:false},0).wait(29));

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2CFF00").s().p("AA/BUIAAASIgVAAIAAgqIgGAAIAAAqIgWAAIAAgqIgFAAIAAAuIgYAAIAAhxIBsAAIAABVQAAASgFAFQgHAFgMAAQgCgNgEgJgAA/BQIAEAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgSIgGAAgAA/AjIAGAAIAAgSIgGAAgAAkAjIAGAAIAAgSIgGAAgAAJAjIAFAAIAAgSIgFAAgAhMBqIAAgfIgeAAIAAgbIAeAAIAAgMIgYAAIAAhSIAYAAIAAgKIgcAAIAAgaIAcAAIAAgTIAcAAIAAATIAcAAIAAAaIgcAAIAAAKIAaAAIAAABQAmgcATggIAVALIgDAGQAaAdAcAQQgOANgHAMIgLgJIAAAJIhKAAIAAgIIgKAJQgFgHgIgKIAABGIgaAAIAAAMIAbAAIAAAbIgbAAIAAAfgAgzAPIAGAAIAAgJIgGAAgAhOAPIAGAAIAAgKIgGAAgAgzgOIAGAAIAAgJIgGAAgAhOgOIAGAAIAAgJIgGAAgAATgrIAnAAIgVgWQgKANgIAJg");
	this.shape_3.setTransform(45.15,10.95);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(10).to({_off:false},0).wait(33));

	// _11
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2CFF00").s().p("AheBcIAAi3IC8AAIAAC1IgiAAIAAgMIh5AAIAAAOgAg9AwIB5AAIAAgTIgYAAQgRAAgGgJQgGgIAAgUIAAg0IgPAAQgBArgGATQgIAagXANQgFgMgKgKgAg9AOQANgKAGgSQADgNAAghIgWAAgAAlgHQAAAKAEAAIAKAAIAJgBIAAg+IgXAAg");
	this.shape_4.setTransform(20.8,11.875);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(6).to({_off:false},0).wait(37));

	// Layer_8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2CFF00").s().p("AgaBsIAAjXIA1AAIAAAUIgZAAIAACuIAZAAIAAAVg");
	this.shape_5.setTransform(2.725,12.175);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(2).to({_off:false},0).wait(41));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.3,23);


(lib.an_sc2line = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#2CFF00").ss(2).p("AEMwoMgIXAhR");
	this.shape.setTransform(93.225,-95.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2CFF00").ss(2).p("AkLQpMAIXghR");
	this.shape_1.setTransform(80.475,-45.35);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:93.225,y:-95.95}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape,p:{x:41.975,y:107.45}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape,p:{x:41.975,y:107.45}}]},1).to({state:[]},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(1).to({x:70.025,y:-3.95},0).wait(1).to({x:61.675,y:29.2},0).wait(1).to({x:55.175,y:55.05},0).wait(1).to({x:50.275,y:74.45},0).wait(1).to({x:46.775,y:88.35},0).wait(1).to({x:44.425,y:97.65},0).wait(1).to({x:43.025,y:103.3},0).wait(1).to({x:42.275,y:106.25},0).wait(1).to({x:42.025,y:107.3},0).to({_off:true},1).wait(1).to({_off:false,x:41.975,y:107.45},0).wait(66).to({_off:true},1).wait(11));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2CFF00").ss(2).p("AAkiQIhHEh");
	this.shape_2.setTransform(-1.775,279.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2CFF00").ss(2).p("AgjCRIBHkh");
	this.shape_3.setTransform(-0.175,273.825);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{x:-1.775,y:279.725}}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2,p:{x:4.625,y:255.975}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2,p:{x:4.625,y:255.975}}]},1).to({state:[]},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1).to({_off:false},0).wait(1).to({x:1.125,y:268.975},0).wait(1).to({x:2.175,y:265.125},0).wait(1).to({x:2.975,y:262.075},0).wait(1).to({x:3.575,y:259.825},0).wait(1).to({x:4.025,y:258.225},0).wait(1).to({x:4.325,y:257.125},0).wait(1).to({x:4.475,y:256.475},0).wait(1).to({x:4.575,y:256.125},0).wait(1).to({x:4.625,y:255.975},0).to({_off:true},1).wait(1).to({_off:false},0).wait(66).to({_off:true},1).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-203.4,127.4,498.6);


(lib.sn_sc1subjhong = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2CFF00").s().p("AgRBoIAAhDIgqAAIAAAMIggAAIAAhzIBKAAIAAgmIAhAAIAAAmIBMAAIAAByIgiAAIAAgLIgqAAIAABDgAAQAGIAqAAIAAgoIgqAAgAg7AGIAqAAIAAgoIgqAAg");
	this.shape.setTransform(9.225,10.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,20.9);


(lib.sb_sc1tty = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2CFF00").s().p("AhPCMIAyhYQgzhcgfhTIgGgQIA9AAIADAIQAXA9AfA+QAcg6AXhBIADgIIA/AAIgGAQQgrB2hQCLIgEAGg");
	this.shape.setTransform(11.825,14.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.7,28.1);


(lib.sb_sc1ttt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2CFF00").s().p("AgrA+IAAhdIgjAAIAAgzIAkAAIAEgvIAyAAIAAAvIA+AAIAAAzIg+AAIAABdQAAAJADACQAEAEALAAQAPAAASgFIAQgGIAAA2IgIADQgXAHgRAAQhKAAAAhEg");
	this.shape.setTransform(7.925,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.9,26);


(lib.sb_sc1ttr = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2CFF00").s().p("AhCBqIAAjPIAtAAIAEAOQAggRAogBIAMAAIAAA4IgMAAQgnAAgZAQIAACLg");
	this.shape.setTransform(6.675,10.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.4,21.3);


(lib.sb_sc1tto = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2CFF00").s().p("AhMBSQgigdAAg1QAAguAfgfQAfgeAwgBQAxABAfAeQAfAfAAAuQAAA1gjAdQgfAagtAAQgtAAgfgagAglgmQgQAPABAXQAAASAIAOQAOAWAfAAQAaAAAOgRQAMgOAAgXQAAgXgPgPQgOgPgYAAQgXAAgOAPg");
	this.shape.setTransform(11.1,10.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.2,21.7);


(lib.sb_sc1ttn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2CFF00").s().p("AAqCBIhYilIgjClIg6AAIA1kBIA2AAIBRCaIAhiaIA6AAIg2EBg");
	this.shape.setTransform(14,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28,25.8);


(lib.sb_sc1ttline = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2CFF00").s().p("Ai+ASIAAgjIF9AAIAAAjg");
	this.shape.setTransform(19.125,1.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2CFF00").s().p("AiyAGIAAgLIFlAAIAAALg");
	this.shape_1.setTransform(19.125,1.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.3,3.5);


(lib.sb_sc1ttl = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2CFF00").s().p("AgbCIIAAkPIA3AAIAAEPg");
	this.shape.setTransform(2.8,13.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.6,27.3);


(lib.sb_sc1ttb = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2CFF00").s().p("Ag6B+IgDAIIgsAAIAAkQIA5AAIAABHQAXgKAaAAQAvAAAdAdQAdAeAAAuQAAAzgjAgQgfAcgqAAQgdAAgbgNgAgwgKIAABTQATALAWAAQAcAAAOgRQANgPAAgXQAAgagPgNQgNgOgYAAQgaAAgSAOg");
	this.shape.setTransform(10.6,13.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.2,27.7);


(lib.sb_sc1tta = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2CFF00").s().p("AhJBZQgYgVAAghQAAghAZgTQAXgTAqAAQAZAAAWAHQgBgMgKgGQgKgGgYAAQgbAAglAMIgQAFIAAg5IAIgDQAngMAmAAQAyABAYAVQAYAWAAAwIAAB4IguAAIgDgLQgeAQgfgBQglAAgYgTgAgnAjQAAAUAhAAQAXAAAYgNIAAgTQgTgJgZAAQgkAAAAAVg");
	this.shape.setTransform(9.75,10.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.5,21.7);


(lib.sb_sc1subyan = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2CFF00").s().p("AgZAcIAAg3IAzAAIAAA3gAgFAIIAJAAIAAgQIgJAAg");
	this.shape.setTransform(17.6,11.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2CFF00").s().p("AgYBaIgCAGQgFAHgIABQgIACgLgBQAAgNgGgKIALAAQAEABACgDQABgCABgMIgHADQgBgGgGgXIALgDIAEAPIAAgTIg4AAIAAiAIBPAAIAAAaIgUAAIAAALIAQAAIAAACQAkgTASgfIAdAKIgFAHQAZARAWAIQgHANgEAQQgJgEgLgHIAAAQIhBAAIAAgMIgMAIQgHgJgKgJIAAARIgQAAIAAAKIARAAIAAAXIgRAAIAAAJIAXAAIgBAJQgBA2gCAQQAOgRAIghIAZAEIgFARQAOAJAGAFIgQAVQgDgFgKgGQgHAPgJALQgFgHgOgKgAhLAHIAKAAIAAgJIgKAAgAhLgZIAKAAIAAgKIgKAAgAA6g2IgVgQQgHAJgKAHIAmAAIAAAAgAhLg6IAKAAIAAgLIgKAAg");
	this.shape_1.setTransform(11.15,10.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2CFF00").s().p("AgYAcIAAg3IAxAAIAAA3gAgEAIIAHAAIAAgQIgHAAg");
	this.shape_2.setTransform(12.075,11.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2CFF00").s().p("AggATQAPgSAFgkIAbAFQgCANgEANIAYAQIgSAWQgEgEgLgJIgJAPQgKgJgNgIg");
	this.shape_3.setTransform(17.625,17.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2CFF00").s().p("AgLAVQAFgRADgdIAPAFQgEAggEAOg");
	this.shape_4.setTransform(1.2,17.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2CFF00").s().p("AgHgQIALgCQAEAUAAAPIgLACQAAgOgEgVg");
	this.shape_5.setTransform(4.675,16.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2CFF00").s().p("AgGgTIALgBQACAUAAATIgMACQABgVgCgTg");
	this.shape_6.setTransform(3.175,16.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.2,21.3);


(lib.sb_sc1subxi = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2CFF00").s().p("Ag3BhIAAjBIBvAAIAAC/IgeAAIAAgJIg1AAIAAALgAANA4IANAAIAAgsIgNAAgAgbA4IAMAAIAAgsIgMAAgAANgQIANAAIAAgvIgNAAgAgbgQIAMAAIAAgvIgMAAg");
	this.shape.setTransform(15,10.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2CFF00").s().p("AgNgTIAVgGQAEAZACAUIgWAGQAAgOgFgfg");
	this.shape_1.setTransform(4.675,17.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2CFF00").s().p("AgQgQIAUgHQAIAUAEATIgUAIQgDgRgJgXg");
	this.shape_2.setTransform(7.35,16.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2CFF00").s().p("AgpAuQAGgCALgNQAEgEAJgNQgSACgFACIAAAAIgBABQgBgJgHgPQAGgCAGgKQAEgGAHgOQAJgRAEgQIAaALQgLAagQAYIALgBQAIgMAIgSIAYAPQgPAZgOATIAPgGQANAYACARIgWAJIgBgEQgvAIgHAEQgCgKgGgPgAgBAoIAQgCIgFgNIgLAPg");
	this.shape_3.setTransform(4.525,7.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2CFF00").s().p("AgPAVQAGgQACghIAWAEQgBAggHAVQgHgDgPgFg");
	this.shape_4.setTransform(1.55,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.7,20.5);


(lib.sb_sc1subshih = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2CFF00").s().p("AhEAbIACgQIgjAAIAAgVIAmAAIACgQIB9AAIgCAQIAoAAIAAAVIgqAAIgCAQgAAKAMIAUAAIABgFIgVAAgAgmAMIAWAAIABgFIgWAAgAAMgHIAUAAIAAgEIgUAAgAgjgHIAWAAIAAgEIgWAAg");
	this.shape.setTransform(10.175,7.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2CFF00").s().p("ABBAeIAAgQIiCAAIAAAQIgdAAIAAgoIBOAAIgFgLIAbgIQAEAHAFAMIBQAAIAAAog");
	this.shape_1.setTransform(10.125,2.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2CFF00").s().p("AhgAfQAdgDAUgHIgWAAIAAhJICRAAIAABJIgUAAIApAMIgVATQgcgKgogLIAKgKIgiAAIANAKQgeAQgvAGQgGgKgKgMgAgnAGIBSAAIAAgFIhSAAgAgngNIBSAAIAAgEIhSAAgAgnggIBSAAIAAgEIhSAAg");
	this.shape_2.setTransform(9.9,16.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.4,21.3);


(lib.sb_sc1subjie = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2CFF00").s().p("AgyBPQAKgHAAgOIAAhfIgPgTQAVgSAMgdIAeAKIgBAEIAoAAIAAAaIgZAAQAHAGAFAGIgNAMIAcAAIAABRIgVAAQASAaAKAUIgaAOIgHgPQg1ANgGAEQgEgNgKgMgAgLBCIATgEIgGgKIAXgKIgkAAgAgLASIAeAAIAAgFIgeAAgAgLgIIAeAAIAAgIIgeAAgAAEgnIgNgNIAMgLIgKAAQgIANgJALIAcAAg");
	this.shape.setTransform(5.625,10.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2CFF00").s().p("AgkBpIAAiLIgTgRQAUgTAKgiIAfAIIgCAGIA0AAIAAAaIgcAAIAJAKIgQANIAdAAIAABaQAAAVgMAFQgKAGgaAAQgBgPgGgOIAVAAQADAAAAgEIAAg7IgaAAIAAB0gAAKgpIgOgOIAJgJIgLAAQgHAPgGAIIAdAAg");
	this.shape_1.setTransform(15.1,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.7,21);


(lib.sb_dash = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2CFF00").s().p("AhGAKIAAgTICNAAIAAATg");
	this.shape.setTransform(7.075,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.2,2);


(lib.sb_corner = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#7BFA4C").s().p("AglAKIAAgTIBLAAIAAATg");
	this.shape.setTransform(3.775,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7BFA4C").s().p("AgJAmIAAhLIATAAIAABLg");
	this.shape_1.setTransform(8.95,3.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,11.2);


(lib.mo_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// logo_white
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AK1BUIiAh9IAAB9IgmAAIAAinIAxAAICAB8IAAh8IAmAAIAACngAGvBUIgUgeIh9AAIgUAeIguAAIBsinIApAAIBsCngAGIAWIgrhCIgsBCIBXAAgAglBUIAAgjICYAAIAIAAQAOgCAAgOQAAgPgPgCIhqAAIgQgBQgUgDgMgOQgKgOAAgRQAAgTAMgOQAMgNASgDIClgBIAAAjIiTAAIgLAAQgKAEAAALQAAAMAKACIALABIByABQAVACAMAPQALAOAAASQAAATgLAOQgNARgWABIgMABgAlEBUIAAgjICaAAIAIAAQAGgBAEgFQAEgFAAgFQAAgPgPgCIhrAAIgQgBQgVgDgMgOQgKgOAAgRQAAgTAMgOQAMgOAUgCICkgBIAAAjIiTAAIgLAAQgLAEAAALQAAAMALACIALABIBzABQAUACANAPQALAOAAASQAAATgLAOQgNARgXABIgMABgAm6BUIAAinIAnAAIAACngAo+BUIiBh9IAAB9IgmAAIAAinIAxAAICAB8IAAh8IAmAAIAACng");
	this.shape.setTransform(74.175,60.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlMB3QiZhehLicIgEgGQgKgWgKgIQgPgNgdgDIhFgIIAAgUICoAAIAAACQA7CjCRBkQCSBlCzAAQC0AACRhlQCThjA5ikIABgCICpAAIAAAUIhHAIQgdADgPANQgJAIgLAWIgCAGQhNCciZBeQiYBdi0AAQizAAiZhdg");
	this.shape_1.setTransform(74.2,99.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AISDUIgBgCQg5ijiThkQiRhki0AAQizAAiSBkQiRBkg7CjIAAACIioAAIAAgUIBFgHQAdgEAPgNQAKgIAKgWIAEgGQBLicCZheQCZhdCzAAQC0AACYBdQCZBeBNCcIACAGQALAWAJAIQAPANAdAEIBHAHIAAAUg");
	this.shape_2.setTransform(74.2,21.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_logo, new cjs.Rectangle(0,0,148.4,120.3), null);


(lib.an_sc5title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// t_s
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7BFA4C").s().p("AgRARIACgGIAMACQAKAAABgFQABgDgFgCIgJgCQgIgBABgHQACgLAPAAQAHAAAFACIgBAGQgGgCgGAAQgJAAAAAEQgBAEAFAAIAHACQAJACgBAIQgCALgPAAQgHAAgHgCg");
	this.shape.setTransform(85.55,35.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(5).to({_off:false},0).wait(101));

	// t_l
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7BFA4C").s().p("AgGAYIAHgvIAGAAIgHAvg");
	this.shape_1.setTransform(83.025,34.375);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).wait(104));

	// t_i
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7BFA4C").s().p("AgHAYIAHgjIAFAAIgFAjgAAAgRIAAgGIAIAAIgCAGg");
	this.shape_2.setTransform(81.325,34.425);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(5).to({_off:false},0).wait(101));

	// t_a
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7BFA4C").s().p("AgRAHQACgLAPAAQAGAAAFACIABgCQABgIgLAAQgEAAgJACIABgGQAHgCAGAAQARAAgCAQIgEAUIgFAAIAAgDQgHAEgGAAQgPAAACgMgAgKAHQgBAGAJAAQAFAAAGgEIABgGQgEgDgGAAQgJAAgBAHg");
	this.shape_3.setTransform(78.0789,35.025);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(2).to({_off:false},0).wait(104));

	// t_t
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7BFA4C").s().p("AgJAMIAEgTIgHAAIABgGIAHAAIACgJIAFAAIgCAJIAMAAIgBAGIgMAAIgDATQAAAFAEABIAIgCIgBAFIgHACQgMAAACgLg");
	this.shape_4.setTransform(74.725,34.6);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(5).to({_off:false},0).wait(101));

	// t_e
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7BFA4C").s().p("AgNAOQgFgFACgJQACgSATAAQAQAAgEARIAAADIgcAAQAAALALAAQAHAAAIgDIgBAGQgJADgFAAQgIAAgFgFgAgJgCIAUAAQACgKgKAAQgJAAgDAKg");
	this.shape_5.setTransform(71.1391,35.025);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(7).to({_off:false},0).wait(99));

	// t_d
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7BFA4C").s().p("AgRAUQgFgFACgJQACgIAGgFQAGgFAIAAQAHAAADADIADgPIAGAAIgIAwIgFAAIAAgDQgGAEgGAAQgIAAgFgFgAgNAGQgCANANAAQAFAAAFgDIADgTQgDgDgHAAQgMAAgCAMg");
	this.shape_6.setTransform(66.9077,34.425);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(5).to({_off:false},0).wait(101));

	// t_n
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7BFA4C").s().p("AALAXIgVgkIgGAkIgHAAIAIgtIAIAAIASAhIAHghIAGAAIgIAtg");
	this.shape_7.setTransform(62,34.525);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(4).to({_off:false},0).wait(102));

	// t_a
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7BFA4C").s().p("AARAXIgCgMIgYAAIgHAMIgHAAQAOgbANgSIAIAAQAHAOAFAfgAgGAFIATAAIgGgVg");
	this.shape_8.setTransform(56.675,34.525);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(2).to({_off:false},0).wait(104));

	// t_s
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7BFA4C").s().p("AgTAVIABgHQAJAEAHAAQALAAABgHQABgFgGgCIgJgDQgLgCACgJQABgNATAAQAHAAAGADIgBAGQgHgDgGAAQgMAAgBAHQgBAEAHACIAKADQAKADgCAIQgDAOgRAAQgJAAgHgDg");
	this.shape_9.setTransform(52.5,34.525);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(8).to({_off:false},0).wait(98));

	// t_s
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7BFA4C").s().p("AgUAVIABgHQAKAEAGAAQAMAAABgHQABgFgHgCIgJgDQgKgCABgJQACgNASAAQAHAAAIADIgCAGQgIgDgGAAQgLAAgBAHQgBAEAHACIAKADQAKADgCAIQgDAOgSAAQgIAAgIgDg");
	this.shape_10.setTransform(48.225,34.525);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(7).to({_off:false},0).wait(99));

	// t_i
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7BFA4C").s().p("AgGAXIAHgtIAGAAIgHAtg");
	this.shape_11.setTransform(45.25,34.525);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(2).to({_off:false},0).wait(104));

	// t_n
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7BFA4C").s().p("AALAXIgUgkIgHAkIgHAAIAIgtIAIAAIASAhIAHghIAGAAIgIAtg");
	this.shape_12.setTransform(41.75,34.525);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(5).to({_off:false},0).wait(101));

	// t_qqq
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7BFA4C").s().p("AgDAaIAEgPIgIAAIgFAPIgGAAIAGgPIgIAAIABgFIAIAAIAEgKIgHAAIABgFIAIAAIAFgQIAFAAIgFAQIAIAAIAGgQIAFAAIgFAQIAHAAIgBAFIgIAAIgEAKIAHAAIgBAFIgIAAIgFAPgAgFAGIAIAAIADgKIgHAAg");
	this.shape_13.setTransform(37.025,34.25);
	this.shape_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(2).to({_off:false},0).wait(104));

	// kk
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2CFF00").s().p("AkNDiIAngzIAPhqIggAKIAFgnIAggKIANhbIgeAAIAFgkIAeAAIAKhHIgOgRIBwAAIgMBYIAUAAIgFAkIgUAAIgJA9IAPgFIgEAmIgPAFIgWCXQgCAQgNALQgMAKgRAAgAhbCbIAFglIBkAAIARh6IDEAAIgFAjIhZAAIgMBXIBpAAIgGAlgAg8AfIAGgjIBDAAIgEAjgACFgWIgbhIIBiAAIAbBIgAg0gWIAvhIIBhAAIguBIgACnhwIAFgoIh/AAIgGAoIhdAAIAMhJIBkAAIADgSIgVgWICEAAIgFAoIBnAAIgMBJg");
	this.shape_14.setTransform(158.975,59.95);
	this.shape_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(5).to({_off:false},0).wait(101));

	// jj
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2CFF00").s().p("AgkDsIAulHIBSAAIgvFHgAh7CxIgBgbIiCAbIAnkMIBQAAIgUCJIgBAAIgJA/IAngHIAAguIBSAAIACB5gABGCvIAngoIAbi/IgfAAIAEgjIBxAAIggDkQgCAQgNALQgNALgQAAgAiRAqIAHgjIAoAAIADgQIgpAAIAFgdIAnAAIADgSIgoAAIAFgjIB0AAIgVCFgACHhvIgJgyIgXAyIhiAAIAyhqIgMgSIB4AAIgPAkIBrAAIgPAfIgdAAIALA5gAhchvIgJgyIgYAyIhiAAIAzhqIgMgSIB3AAIgPAkIBqAAIgOAfIgdAAIAMA5g");
	this.shape_15.setTransform(110.05,60.975);
	this.shape_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(7).to({_off:false},0).wait(99));

	// ss
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2CFF00").s().p("AkSCxIA0g2IAShuIg/AAIAEgcIBDg+Ig7AAIAFgcIBThHIBqAAIhGBCIA/AAIhaBaIBbAAIgUCPIgxABIAOhvIgOAAIgPB9QgEASgMAJQgMAMgRAAgACVClIAHg1IAAAAIAPhkIgaAAIgQB0IANAAIgEAlIjZAAIAxlVIE6AAIgxFVgAANCBIAaAAIARh1IgaAAgACUghIAcAAIARhsIgcAAgAAhghIAcAAIARhsIgcAAgAkbB7IAOhfIAvAAIgPBfg");
	this.shape_16.setTransform(58.15,58.9);
	this.shape_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(2).to({_off:false},0).wait(104));

	// sb_sc5_title_line
	this.instance = new lib.sb_sc5titleline("synched",0);
	this.instance.setTransform(111,56.8,1,1,0,0,0,111,56.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1,startPosition:11},11,cjs.Ease.cubicOut).to({startPosition:61},50).wait(45));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,222,113.6);


(lib.an_sc2subtt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_subtt
	this.instance = new lib.sb_sc2subtt("synched",0);
	this.instance.setTransform(91,15.8,1,1,0,0,0,91,15.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:31.8,alpha:1,startPosition:4},15,cjs.Ease.cubicOut).to({startPosition:58},54).to({_off:true},1).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.9,47.7);


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

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgsPAfcQhqABAMgxMAPDg9NQAMgxBrAAMBpJAAAQBrAAgMAxMgPEA9NQgMAxhqgBg");
	mask.setTransform(498.2078,201.25);

	// Layer_7
	this.instance = new lib.sb_sc4bg("synched",0);
	this.instance.setTransform(261.15,123.25,2.0647,2.5612,0,0,0,255.8,208.1);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1,startPosition:4},4,cjs.Ease.cubicOut).to({x:269.15,startPosition:48},44).wait(42));

	// sb_sc2_bg
	this.instance_1 = new lib.sb_sc2bg("synched",0);
	this.instance_1.setTransform(293.2,212.9,1,1,0,0,0,200.2,139);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1,startPosition:4},4).to({x:283.2,startPosition:48},44).wait(42));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.5,1,1115.4,401.5);


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

	// sb_sc1_tt_y
	this.instance = new lib.sb_sc1tty("synched",0);
	this.instance.setTransform(240.35,20.4,1,1,0,0,0,11.8,14);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(4).to({alpha:1},0).wait(39));

	// sb_sc1_tt_r_copy
	this.instance_1 = new lib.sb_sc1ttr("synched",0);
	this.instance_1.setTransform(223.3,16.6,1,1,0,0,0,6.7,10.6);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({alpha:1},0).wait(41));

	// sb_sc1_tt_o_copy
	this.instance_2 = new lib.sb_sc1tto("synched",0);
	this.instance_2.setTransform(203.2,16.8,1,1,0,0,0,11.1,10.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).wait(4).to({alpha:1},0).wait(35));

	// sb_sc1_tt_t
	this.instance_3 = new lib.sb_sc1ttt("synched",0);
	this.instance_3.setTransform(183.5,14.7,1,1,0,0,0,7.9,13);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).wait(4).to({alpha:1},0).wait(39));

	// sb_sc1_tt_a_copy
	this.instance_4 = new lib.sb_sc1tta("synched",0);
	this.instance_4.setTransform(165.4,16.8,1,1,0,0,0,9.8,10.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).wait(4).to({alpha:1},0).wait(33));

	// sb_sc1_tt_r
	this.instance_5 = new lib.sb_sc1ttr("synched",0);
	this.instance_5.setTransform(149.25,16.6,1,1,0,0,0,6.7,10.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).wait(4).to({alpha:1},0).wait(35));

	// sb_sc1_tt_o
	this.instance_6 = new lib.sb_sc1tto("synched",0);
	this.instance_6.setTransform(129.2,16.8,1,1,0,0,0,11.1,10.8);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({alpha:1},0).wait(41));

	// sb_sc1_tt_b
	this.instance_7 = new lib.sb_sc1ttb("synched",0);
	this.instance_7.setTransform(106.3,13.8,1,1,0,0,0,10.6,13.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).wait(4).to({alpha:1},0).wait(35));

	// sb_sc1_tt_a
	this.instance_8 = new lib.sb_sc1tta("synched",0);
	this.instance_8.setTransform(82.65,16.8,1,1,0,0,0,9.8,10.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).wait(4).to({alpha:1},0).wait(38));

	// sb_sc1_tt_l
	this.instance_9 = new lib.sb_sc1ttl("synched",0);
	this.instance_9.setTransform(67.45,13.6,1,1,0,0,0,2.8,13.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({_off:false},0).wait(4).to({alpha:1},0).wait(35));

	// sb_sc1_tt_line
	this.instance_10 = new lib.sb_sc1ttline("synched",0);
	this.instance_10.setTransform(44.65,29.8,1,1,0,0,0,19.1,1.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(5).to({_off:false},0).wait(4).to({alpha:1},0).wait(36));

	// sb_sc1_tt_n
	this.instance_11 = new lib.sb_sc1ttn("synched",0);
	this.instance_11.setTransform(14,14.35,1,1,0,0,0,14,12.9);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({alpha:1},0).wait(41));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252.2,34.5);


(lib.an_dash = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_dash
	this.instance = new lib.sb_dash("synched",0);
	this.instance.setTransform(7,1,1,1,0,0,0,7,1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({regX:0,regY:0,x:0,y:0,alpha:1},0).wait(77).to({startPosition:0},0).to({_off:true},1).wait(219));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.2,2);


(lib.an_corner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_corner_copy_copy
	this.instance = new lib.sb_corner("synched",0);
	this.instance.setTransform(531.85,258.05,1,1,180,0,0,5,5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:506.85,y:233.05},14,cjs.Ease.cubicOut).wait(1));

	// sb_corner_copy
	this.instance_1 = new lib.sb_corner("synched",0);
	this.instance_1.setTransform(-20,258.05,1,1,0,180,0,5,5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:5,y:233.05},14,cjs.Ease.cubicOut).wait(1));

	// sb_corner_copy
	this.instance_2 = new lib.sb_corner("synched",0);
	this.instance_2.setTransform(531.85,165.55,1,1,0,0,180,5,5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:506.85,y:185.45},14,cjs.Ease.cubicOut).wait(1));

	// sb_corner
	this.instance_3 = new lib.sb_corner("synched",0);
	this.instance_3.setTransform(-20,165.55,1,1,0,0,0,5,5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:5,y:185.45},14,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,160,561.9,103.69999999999999);


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

	// sb_sc4_bg
	this.instance = new lib.sb_sc4bg("synched",0);
	this.instance.setTransform(199.85,27.5,1,1,0,0,0,262.9,175.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1,startPosition:7},1).to({x:195.05,startPosition:33},26).to({x:189.85,startPosition:58},28).to({startPosition:75},17).wait(18));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.8,0,780.3,175);


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

	// an_corner
	this.instance = new lib.an_corner("synched",0,false);
	this.instance.setTransform(86.25,163.95,0.5718,0.6908,0,0,0,143.8,119.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(96).to({startPosition:14},0).to({_off:true},1).wait(34));

	// an_sc5_subtitle
	this.instance_1 = new lib.an_sc5subtitle("synched",0,false);
	this.instance_1.setTransform(285.05,219.85,0.7519,0.7519,0,0,0,90,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(115).to({startPosition:105},0).to({_off:true},1).wait(34));

	// an_sc5_title
	this.instance_2 = new lib.an_sc5title("synched",0,false);
	this.instance_2.setTransform(94.25,227.15,0.4841,0.4841,0,0,0,111.1,57);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(115).to({regX:111.2,x:94.3,startPosition:105},0).to({_off:true},1).wait(34));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#201616","rgba(32,22,22,0)"],[0,1],0,-37.4,0,37.5).s().p("A4jF2IAArrMAxHAAAIAALrg");
	this.shape.setTransform(225.0258,208.0299,0.3733,0.8694,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#201616","rgba(32,22,22,0)"],[0,1],0,-37.4,0,37.5).s().p("A4jF2IAArrMAxHAAAIAALrg");
	this.shape_1.setTransform(25.2767,208.0299,0.3733,0.5087,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#201616","rgba(32,22,22,0)"],[0,1],0,-37.4,0,37.5).s().p("A4jF2IAArrMAxHAAAIAALrg");
	this.shape_2.setTransform(82.7615,217.5299,0.3733,1.0243,0,-90,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},115).to({state:[]},1).wait(34));

	// sc5bg
	this.instance_3 = new lib.sc5bg();
	this.instance_3.setTransform(46,131,0.2118,0.2118);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(115).to({_off:true},1).wait(34));

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("A4mE3IAAptMAxNAAAIAAJtg");
	this.shape_3.setTransform(150.8,227.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(115).to({_off:true},1).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,131,321.09999999999997,145.2);


(lib.an_sc1subtitle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// an_dash
	this.instance = new lib.an_dash("synched",0);
	this.instance.setTransform(126.35,20,1,1,0,0,0,7,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).wait(49));

	// sn_sc1_sub_jhong
	this.instance_1 = new lib.sn_sc1subjhong("synched",0);
	this.instance_1.setTransform(107.5,10.85,1,1,0,0,0,9.2,10.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).wait(4).to({alpha:1},0).wait(49));

	// sb_sc1_sub_yan
	this.instance_2 = new lib.sb_sc1subyan("synched",0);
	this.instance_2.setTransform(83.3,10.7,1,1,0,0,0,10.6,10.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).wait(4).to({alpha:1},0).wait(53));

	// sb_sc1_sub_shih
	this.instance_3 = new lib.sb_sc1subshih("synched",0);
	this.instance_3.setTransform(59.15,10.85,1,1,0,0,0,10.2,10.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).wait(4).to({alpha:1},0).wait(57));

	// sb_sc1_sub_jie
	this.instance_4 = new lib.sb_sc1subjie("synched",0);
	this.instance_4.setTransform(34.65,10.65,1,1,0,0,0,10.3,10.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(4).to({alpha:1},0).wait(61));

	// sb_sc1_sub_xi
	this.instance_5 = new lib.sb_sc1subxi("synched",0);
	this.instance_5.setTransform(10.3,10.6,1,1,0,0,0,10.3,10.2);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({alpha:1},0).wait(65));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133.5,21.5);


(lib.an_test = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// an_dash
	this.instance = new lib.an_dash("synched",0);
	this.instance.setTransform(45.05,16.55);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(75).to({startPosition:75},0).to({_off:true},1).wait(5));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2CFF00").s().p("AAoA5QgFgegCg6Ig3AAIAAgbIA3AAIAAgjIAdAAIgBANIARgLQAMAOAEAKIgOAJIANAAIAAAbIghAAQADBiAJAAQACAAAAgcQAJAKAMAGQgCAYgHAIQgFAIgOAAQgTAAgIgmgAA8g6IANAAQgEgIgIgLgAhVBdIAAhGIA6AAIAAAeIATgDIAAglIgPAAIAAgZIA2AAIAAAZIgOAAIAAAhIATgEIACAZIg7AOIgGgbIAAAfIgiAAIAAAIgAg9A+IAJAAIAAgQIgJAAgAhWAQIAAgUIA5AAIAAAUgAhWgKIAAgWIA5AAIAAAWgAhegmIAAgWIAbAAIgKgYIAVgKQAJAOAGANIgMAHIAbAAIAAAWg");
	this.shape.setTransform(31.7,9.525);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6).to({_off:false},0).wait(79).to({_off:true},1).wait(5));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2CFF00").s().p("Ag1BRQAPgPAHgUIAaAIQgKAXgQASQgJgHgNgHgAAnBCIAXABQAEAAAAgEIAAieIAaAAIAACeQAAAUgKAGQgJAGgagBQAAgOgIgOgAhYBOQAOgeALgjIAXAPQgKAlgLAbgAgCA4IASgKIgyAAIAAiFIA9AAIAACFIgGAAQAMAPAGAOIgXANQgEgKgOgWgAgLAUIAMAAIAAgMIgMAAgAgLgOIAMAAIAAgMIgMAAgAgLgyIAMAAIAAgMIgMAAgAAhAqIAAh0IAZAAIAAB0gAhbgSIAQgWQAVAIALAJIgRAXQgJgIgWgKgAhUhHIAQgWQAYAKAJAIIgSAXQgKgKgVgJg");
	this.shape_1.setTransform(9.2,9.65);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).wait(83).to({_off:true},1).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.2,19.2);


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

	// an_test
	this.instance = new lib.an_test("synched",0,false);
	this.instance.setTransform(76.75,228.9,0.6616,0.6613,0,0,0,29.6,9.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(81).to({startPosition:81},0).to({_off:true},1).wait(4));

	// an_sc4_tt
	this.instance_1 = new lib.an_sc4tt("synched",0,false);
	this.instance_1.setTransform(206.25,224.05,0.5258,0.5256,0,0,0,56.4,11.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).wait(67).to({startPosition:67},0).to({_off:true},1).wait(4));

	// an_sc4_bg
	this.instance_2 = new lib.an_sc4bg("synched",0,false);
	this.instance_2.setTransform(153.1,230.2,0.5459,0.5459,0,0,0,239.2,87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({startPosition:85},0).to({_off:true},1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.7,182.5,426,95.5);


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

	// an_test
	this.instance = new lib.an_test("synched",0,false);
	this.instance.setTransform(195.85,226.75,0.8697,0.8696,0,0,0,29.6,9.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(86));

	// an_sc3_tt
	this.instance_1 = new lib.an_sc3tt("synched",0,false);
	this.instance_1.setTransform(277.1,226.85,0.8697,0.8696,0,0,0,56.1,11.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).wait(72));

	// sb_sc3_bg
	this.instance_2 = new lib.sb_sc3bg("synched",0);
	this.instance_2.setTransform(138.9,147,1,1,0,0,0,277.8,187.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1,startPosition:4},1).to({x:128.9,startPosition:53},52).to({startPosition:56},3).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,175.7,415,111.30000000000001);


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

	// an_sc2_subtt
	this.instance = new lib.an_sc2subtt("synched",0,false);
	this.instance.setTransform(151.55,85.15,1,1,0,0,0,91,23.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).wait(70));

	// an_sc2_line
	this.instance_1 = new lib.an_sc2line("synched",0,false);
	this.instance_1.setTransform(110.3,211.35,0.5964,0.5964,0,0,0,35,135.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(80));

	// an_test
	this.instance_2 = new lib.an_test("synched",0,false);
	this.instance_2.setTransform(179.85,233.55,0.7409,0.7409,0,0,0,29.7,9.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(86));

	// an_sc2_tt
	this.instance_3 = new lib.an_sc2tt("synched",0,false);
	this.instance_3.setTransform(248.65,233.05,0.7409,0.7409,0,0,0,56.1,11.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).wait(72));

	// an_sc2_bg
	this.instance_4 = new lib.an_sc2bg("synched",0,false);
	this.instance_4.setTransform(130.55,223.75,0.4132,0.4132,0,0,0,310.1,201.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.8,8.6,460.90000000000003,298.2);


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

	// an_sc1_subtitle
	this.instance = new lib.an_sc1subtitle("synched",0,false);
	this.instance.setTransform(217,237.25,0.6915,0.6915,0,0,0,67,10.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(70).to({startPosition:68},0).to({_off:true},1).wait(5));

	// an_sc1_title
	this.instance_1 = new lib.an_sc1title("synched",0,false);
	this.instance_1.setTransform(215.45,218.25,0.5225,0.5225,0,0,0,126.3,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(84).to({startPosition:44},0).to({_off:true},1).wait(5));

	// an_corner
	this.instance_2 = new lib.an_corner("synched",0,false);
	this.instance_2.setTransform(86.25,163.95,0.5718,0.6908,0,0,0,143.8,119.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(65).to({startPosition:14},0).to({_off:true},1).wait(5));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#151719","rgba(21,23,25,0.906)","rgba(21,23,25,0.639)","rgba(21,23,25,0.196)","rgba(21,23,25,0)"],[0,0.275,0.576,0.886,1],0,-63.4,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape.setTransform(49.6364,222.1047,0.203,0.1996,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#151719","rgba(21,23,25,0.906)","rgba(21,23,25,0.639)","rgba(21,23,25,0.196)","rgba(21,23,25,0)"],[0,0.275,0.576,0.886,1],30,0,-29.9,0).s().p("AkqE/IAAp9IJVAAIAAJ9g");
	this.shape_1.setTransform(7.05,222.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#151719","rgba(21,23,25,0.906)","rgba(21,23,25,0.639)","rgba(21,23,25,0.196)","rgba(21,23,25,0)"],[0,0.275,0.576,0.886,1],0,-63.4,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape_2.setTransform(162.0133,222.0953,0.203,0.4729,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#151719","rgba(21,23,25,0.906)","rgba(21,23,25,0.639)","rgba(21,23,25,0.196)","rgba(21,23,25,0)"],[0,0.275,0.576,0.886,1],0,-63.4,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape_3.setTransform(230.2638,225.1047,0.203,0.6042,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},84).to({state:[]},1).wait(5));

	// sc1bg
	this.instance_3 = new lib.sc1bg();
	this.instance_3.setTransform(37,181,0.1549,0.1548);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84).to({_off:true},1).wait(5));

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("A3ukNMAvdAAAIAAIbMgvdAAAg");
	this.shape_4.setTransform(148.3,226.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("A3uEOIAAobMAvdAAAIAAIbg");
	this.shape_5.setTransform(148.3,226.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},84).to({state:[]},1).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.9,181,333.79999999999995,103.30000000000001);


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

	// mo_logo
	this.instance = new lib.mo_logo();
	this.instance.setTransform(181.25,310.5,0.2341,0.2341,0,0,0,74.5,60.2);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.729)",2,2,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(450));

	// sc5
	this.instance_1 = new lib.sc5("synched",0,false);
	this.instance_1.setTransform(304.4,209.45,1,1,0,0,0,150,125);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(334).to({_off:false},0).wait(116));

	// sc4
	this.instance_2 = new lib.sc4("synched",0,false);
	this.instance_2.setTransform(304.4,209.45,1,1,0,0,0,150,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(249).to({_off:false},0).to({_off:true},86).wait(115));

	// sc3
	this.instance_3 = new lib.sc3("synched",0,false);
	this.instance_3.setTransform(304.4,209.55,1,1,0,0,0,150,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(164).to({_off:false},0).to({_off:true},91).wait(195));

	// sc2
	this.instance_4 = new lib.sc2("synched",0,false);
	this.instance_4.setTransform(304.4,209.45,1,1,0,0,0,150,125);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(79).to({_off:false},0).to({_off:true},91).wait(280));

	// sc1
	this.instance_5 = new lib.sc1("synched",0,false);
	this.instance_5.setTransform(304.4,209.45,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},85).wait(365));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(94.6,93.1,484.9,298.20000000000005);


// stage content:
(lib._320x50 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(470.2,252.25,1.068,1.068,0,0,0,594.6,523.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(899).to({x:470.15,mode:"single",startPosition:449},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(96.2,-182.6,357.7,293.4);
// library properties:
lib.properties = {
	id: '98BD5038AE8B4B8D8F62372891313A8C',
	width: 320,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/line.png", id:"line"},
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
an.compositions['98BD5038AE8B4B8D8F62372891313A8C'] = {
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