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
p.nominalBounds = new cjs.Rectangle(0,0,820,180);


(lib.sc2bg = function() {
	this.initialize(img.sc2bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,250);


(lib.sc2car = function() {
	this.initialize(img.sc2car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,159);


(lib.sc3bg = function() {
	this.initialize(img.sc3bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,250);


(lib.sc3car = function() {
	this.initialize(img.sc3car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,299,218);


(lib.sc4bg = function() {
	this.initialize(img.sc4bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,250);


(lib.sc5bg = function() {
	this.initialize(img.sc5bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,180);// helper functions:

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


(lib.sb_sc5_free = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#211816").s().p("AgFByIAuAAQAJAAABgHIALgqIimAAIgVBOIgeAAIAVhOIgnAAIAIgdIAmAAIAhh6IBgAAIAHgcIh6AAIAIgcIEXAAIgIAcIh+AAIgHAcIBkAAIghB6IAnAAIgHAdIgnAAIgMAqQgDANgFAHQgGAHgKAEQgOAFgtAAQABgPgEgOgAAAAkIBGAAIAJgjIhGAAgAhgAkIBDAAIAJgjIhDAAgAAQgYIBGAAIAJgiIhGAAgAhQgYIBDAAIAJgiIhDAAg");
	this.shape.setTransform(23.925,24.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF100").s().p("AipCqQhGhHAAhjQAAhiBGhGQBGhHBjAAQBjAABGBHQBHBGAABiQAABjhHBHQhGBGhjAAQhjAAhGhGg");
	this.shape_1.setTransform(23.975,24.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#211816").s().p("AiqCYQACgPgEgNIAgAAQAGAAACgGIAVhQIgrALIAAgeIAzgMIAShBIgrAAIAHgdIArAAIARhAIAeAAIgRBAIAiAAIgHAdIgjAAIgPA6IAlgKIgEAbIgpAMIgXBZQgHAWgOAGQgLAGgbAAIgJAAgAhDCXIA9jkIBIAAIAUhKIAdAAIgTBKIBNAAIg8DiIgfAAIAFgVIh2AAIgHAXgAAxBiIAuAAIAQg8IguAAgAgYBiIAsAAIAQg8IgsAAgABJAJIAuAAIAPg4IguAAgAAAAJIArAAIAQg4IgtAAg");
	this.shape_2.setTransform(66.625,24.0067);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF100").s().p("AipCpQhGhGAAhjQAAhiBGhGQBGhGBjgBQBkABBGBGQBGBGAABiQAABjhGBGQhGBHhkgBQhjABhGhHg");
	this.shape_3.setTransform(66.65,23.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90.6,48.4);


(lib.sb_sc5_bluebg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#1251AD","#0E4587"],[0,1],-151,0,151,0).s().p("A2DDSIBSmjMAq1AAAIhTGjg");
	this.shape.setTransform(151.975,31.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sb_sc5_bluebg, new cjs.Rectangle(10.8,10.8,282.4,42), null);


(lib.sb_sc5_bg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["rgba(0,0,0,0)","#091522"],[0,0.902],-55.9,0,56,0).s().p("AovP0IAA/nIRfAAIAAfng");
	this.shape.setTransform(621.6582,159.9128,2.2264,2.7466,0,156.5518,-23.448);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","#091522"],[0,0.902],-55.9,0,56,0).s().p("AovP0IAA/nIRfAAIAAfng");
	this.shape_1.setTransform(648.1891,261.225,1.7548,1,0,180,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#091522").s().p("Ao4UiMAAAgpCIRxAAMAAAApCg");
	this.shape_2.setTransform(879.6495,292.8,2.341,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#091522").s().p("Ao4UiMAAAgpCIRxAAMAAAApCg");
	this.shape_3.setTransform(-246.626,292.8,4.3423,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0)","#091522"],[0,1],-55.9,0,56,0).s().p("AovP0IAA/nIRfAAIAAfng");
	this.shape_4.setTransform(103.745,261.225,1.8406,1,0,0,180);

	this.instance = new lib.sc5bg();
	this.instance.setTransform(0,143,1.1664,1.1663);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-493.7,-144.7,1506.6,609.3);


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


(lib.mo_sc5_try = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAVCCQAjgZAYg2IAZAEQgHAPgMAUQAVASAKAOIgXAUQgFgJgTgTQgOASgSAOQgGgHgLgJgAg5CCQAkgaAXg0IAYAFIgOAZQASANAIAMIgUATQgEgHgPgPQgVAbgUAPQgHgJgIgHgAhrCRQACgOgCgIIATABQAGAAADgEQAEgEALgeIgNAFQgBgRgEgYIAMgEQAGAWAAARIAOgwIhTAAIAsimIBpAAIgHAYIgjAAIgGAaIAeAAIgDAMQAdgPAbgVQAcgVARgVIAZAIQgEAGgFAEQAYAgAkATQgJAKgJAQQgPgJgJgJIgFASIhdAAIAEgPQgOAJgQAIQgDgIgIgKIgDAJIgeAAIgGAYIAfAAIgGAWIgfAAIgHAYIAlAAIgCAKQgRA7gJAXQgIAYgHAHQgHAHgMACIgNABIgMgBgAhoANIAYAAIAHgYIgYAAgAhbghIAYAAIAGgYIgYAAgAAwhIIBNAAQgTgRgNgTQgTASgaASgAhPhPIAYAAIAGgaIgXAAgAirB3QANgWASguIAOAFQgTAzgLASgAh5A5IAOgBQgGAhgGAYIgOABQAHgbAFgegAhmA2IAOgCQAAAcgDAXIgOADQADgWAAgegAA7AsIAUhJIBCAAIgTBJgABUAZIAaAAIAJgiIgZAAgAgRAsIAThJIBAAAIgUBJgAAHAZIAYAAIAJgiIgYAAg");
	this.shape.setTransform(206.625,14.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiiCJIgJgGQAZgbAOg2IANgyIgPAAIAMguIANAAIAXhYIBfAAIgWBYIANAAIgNAuIgNAAIgfB0QgEARgMAGQgJADgbAAQABgKgDgLIAYAAQAEgBABgEIAKgkIgsAYIgEgSQgPAngUAUIgHgIgAhsAyQgEAPgHASQAMgEAogSIANgyIgsAAIgGAVIAPgLQASALAIAMIgRAPQgLgPgNgKgAhvgJIBPAAIAEgRIhOAAgAg2guIARAAIAIggIgRAAgAhWguIAQAAIANgxIAhAAIAEgRIgxAAgAgxCLIAGgXIApAAIgCgaIAVgGIgiAAIAPg8ICBAAIgPA8IglAAIAWAGIgWAaIAtAAIgGAXgAAXB0IAcAAQAJgMAMgUIg2AAQADAKACAWgAAMBBIBNAAIAGgWIhNAAgAgMALIAGgVICdAAIgGAVgAACgXIAahhIAmAAIAGgYIAYAAIgHAYIATAAIAGgYIAYAAIgGAYIAoAAIgZBhgABsgsIAVAAIAFgTIgVAAgABFgsIAUAAIAFgTIgUAAgAAegsIAVAAIAFgTIgVAAgAB2hSIAVAAIAFgTIgVAAgABPhSIAUAAIAFgTIgUAAgAAohSIAVAAIAFgTIgVAAg");
	this.shape_1.setTransform(168.775,14.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AitB2QAbgYAOgJQAUgaARgjIgoAAIArhDIggAAIAHgbIBEAAIgqBGIARAAIAFgBIAMAEQgXAxgYAgIATAPQANAJAWAEQARACAfAAQBDAAA9gHQgNASgEAMQg6AEg9AAQghAAgSgEQgWgEgOgJIgOgMQgIgGgEAAQgIAAgdAngAgyBYIAniUIAwAAIALgVIhPAAIAHgYIAuAAQgCgNgIgQIAagKQAKASACAPIgOAGIA1AAQAVgWAMgRIAaAIIgeAfIA4AAIgHAYIhXAAIgPAVIBHAAIgnCUgAgRBCIBbAAIAGgWIhbAAgAgGAYIBbAAIAGgWIhbAAgAAEgRIBcAAIAGgVIhcAAgAhUiIIAcgIIAEAzIgdAKIgDg1g");
	this.shape_2.setTransform(130.975,14.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AipB/QA1gIAkgOIghAAIAThJQgUALgaAIQgEgMgIgJQAtgLAogYIhDAAIAGgVIBOAAIADgMIgpAAIAEgPIApAAIAEgNIguAAIAEgRIAuAAIADgMIAbAAIgDAMIBAAAIAEgMIAbAAIgDAMIAtAAIgFARIgtAAIgDANIAqAAIgEAPIgrAAIgCAMIBOAAIgGAVIg9AAQAXAUAmAKQgNALgLAMQgQgGgTgMIgUBLIgiAAQAkALAjANIgcAQQgpgRgpgMIAPgLIg/AAIAMAJQgrAWhCAKQgJgQgEgDgAhTBaIB6AAIADgNIh5AAgAhLA+IB4AAIAEgNIh5AAgAhEAiIB5AAIADgMIh5AAgAg0AHIBtAAIgKgMIhSAAIgRAMgAgXgaIBAAAIADgMIhAAAgAgQg1IBBAAIACgNIg/AAgACBhKIAHgaIjXAAIgHAaIgaAAIAMgxIB6AAIgEgPIAggHQAEAMABAKIByAAIgMAxg");
	this.shape_3.setTransform(93.65,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJBzIAQgLIhBAAIAMALQgvAUg/AKIgNgTQA0gIAmgOIgrAAIAbhlIDJAAIgaBlIgvAAQAyAPAXAKIgeARQgggPg1gQgAhaBYICQAAIAEgNIiQAAgAhSA8ICQAAIADgNIiQAAgAhLAfICQAAIADgMIiPAAgAh2gXIA3gDIADgOIgkAAIAEgPIAkAAIAEgNIgoAAIADgJIgUAAIAMguIB2AAIgDgQIAfgGIAFAWIB0AAIgMAtIgYAAIgDAKIgmAAIgDAMIA3AAIgEAQIg3AAIgFASIAYAAIAEgOIAWAAIgIAeIhzAAIAJgeIAVAAIgEAOIAXAAIAEgSIg1AAIAFgQIAKAAQgEgFgGgDQAWgQANgSIAUADIgIALIBIAAIAEgQIjUAAIgEAOIBeAAIgEASIgmAAIgDANIAiAAIgEAPIgjAAIgDAMIAogCIgEATQhSAGgkACgAAfg4IAjAAIADgMIgYAAg");
	this.shape_4.setTransform(55.625,14.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AinCCQgFgGgEgCQAmglAShLIAPg0IBsAAIgCgJIgUAAIALgnIg9AAIgLAoIgZAAIAQg5IBuAAIgMAwIATgFQADAGABAGIAOg3IBzAAIgPA4IgbAAIAKgnIg+AAIgKAoIgYAAIACAIIB0AAIgGAUIhSAAIgFAPIBLAAIgPA4IhMAAIgFARIBJAAIgGAVIhIAAIgEAQQgCAHACABQACACAJAAIAqAAQAHAAADgEQAEgEAEgNQAHAFAOADQgHAVgJAGQgJAIgQAAIgxAAQgWgBgHgGQgEgGAEgTIAOg2IhKAAIgEARIA/AAIgFAVIhAAAIgGAVIBDgGIgGAWQhZAIgKAFQACgNgDgJQAMgEADgLIANgzIgTAAQgWA7ggAgQgCgEgGgGgAAwAdIAwAAIAFgSIgvAAgAgYAdIAuAAIAGgSIgvAAgAhhAdIAuAAIAFgSIgvAAgAgPgHIAvAAIAEgPIguAAgAhYgHIAvAAIAEgPIgvAAgABJhMIASgNQAPAOAFAMIgTANQgEgMgPgOgAg/hMIARgMQAOAMAFANIgTANQgFgNgMgNgAAsh3IAFgUIB/AAIgEAUgAhgh3IAGgUIB9AAIgGAUg");
	this.shape_5.setTransform(17.65,15.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc5_try, new cjs.Rectangle(0,0,223.9,29.4), null);


(lib.mo_sc5_alt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABOBqQgGgZgJgdIhzAAQgPAggJAWIghAAQAbhBAmhEQAeg5AOgVIAkAAQALAUASAxQAbBFASBJgAgmAYIBcAAQgSg+gTgoQgaArgdA7g");
	this.shape.setTransform(188,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABkBqQgFhqgKg/QgpBPgfBDIgVAAQgniFgHgMQgWBDgXBlIgfAAQAShTASg5IAZhHIAfAAQAVA4AXBSQAmhMAhg+IAfAAIANBHQAHA4ADBUg");
	this.shape_1.setTransform(156.525,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYBqIATjTIAeAAIgTDTg");
	this.shape_2.setTransform(132.65,10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggBqIARi3IhRAAIACgcIC/AAIgDAcIhQAAIgPC3g");
	this.shape_3.setTransform(112.55,10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhNBqIATjTIAfAAIgQC3IB5AAIgDAcg");
	this.shape_4.setTransform(89.625,10.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABOBqIgPg2IhzAAQgQAggIAWIghAAQAbhBAmhEQAeg3APgXIAkAAQAKATATAyQAaBFASBJgAgmAYIBdAAQgUg+gSgoQgaArgdA7g");
	this.shape_5.setTransform(61.9,10.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhGBbIAGhLQgJAKgMAJQgCgNgEgGQAfgUAUgkIgqAAIACgRIAdAAQgEgLgJgNIAOgIQAKAMAFAMIgNAIIASAAIAEAAIAJAGQgKAWgPAVIAWAaIgNAPIgNgWIgHBQgAggBYIABgOIAhAAIgEgSIANgEQAEAIADAOIAUAAIALgWIg+AAIADgmIBYAAIgEAmIgZAAIAQAEIgMASIAiAAIgCAOgAACAoIA6AAIABgPIg5AAgAgVAFIABgNIBwAAIgCANgAgNgQIAFg6IAbAAIABgQIAPAAIgBAQIAOAAIACgQIAOAAIgBAQIAdAAIgGA6gAA4gcIAQAAIABgMIgQAAgAAegcIAOAAIABgMIgOAAgAACgcIAPAAIABgMIgPAAgAA6gzIAQAAIABgMIgQAAgAAggzIAOAAIABgMIgOAAgAAEgzIAPAAIABgMIgPAAg");
	this.shape_6.setTransform(338.175,11.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbBcQABgHgFgIIAQAAQAHAAADgCQAHgFgCgPQgfAZg1AKQgEgIgEgDQA8gKAdgYIgEgGQgcASgsAIIgGgKQAugGAagRIgFgEQgaAJgeAGIgGgLQAegEAZgIIgkAAIABgMIB0AAIgBAMIg3AAIgEABQAJAIAFALQAggLAPgIIALALQgPAHgNAEQALAZAcAIQgIAIgDAFQgegKgMgfIgMAEQADALgDAJQgCAJgHAFQgGAGgMAAgAhXATIADgfICpAAIgDAeIgRAAIACgSIiIAAIgCATgAg7gVIADggIB5AAIgDAggAgogfIBUAAIABgMIhUAAgAhSg+IABgOIBPAAIgEgKIASgFIAHAPIBKAAIgBAOg");
	this.shape_7.setTransform(314.675,11.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMBIQAagPATgcQgOghgEg9IgIAAIABgRIBIAAIADgBIANADQgOBFgbApQAMAaAWAQQgJAGgHAJQgSgOgNgYQgTAWgXARQgFgLgHgFgAAuAJQASghAKgpIgqAAQADArALAfgAg0BWQAAgJgDgFIAQAAQAEAAACgCQAEgFADgQIgHADQgBgKgGgQIAHgDQAGAKACAKIAEgZIg7AAIAJhpIBHAAIAAAPIgZAAIgBAQIAVAAIgCAOIgUAAIgBAQIAUAAIgBAOIgUAAIgCAPIAcAAIgBAHQgJA+gHAIQgFAGgIAAIgIAAIgLAAgAhAADIASAAIABgPIgRAAgAg9gaIARAAIACgQIgSAAgAg6g4IASAAIABgQIgSAAgAheBHQAFgNAHgfIAKADQgHAhgFAMgAhDAeIAIgBQACAQgCAUIgKACQADgNgBgYgAg2AcIAJgBQADANACASIgKADQAAgMgEgVg");
	this.shape_8.setTransform(290.35,12.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABBBPIhcAHIgBgSIAugDIACgaIgmAAIAFg1IAmAAIABgSIASAAIgCASIApAAIgFA1IgoAAIgDAZIAXgBIgIgQIAPgGQAQAZAFASIgRAHQgBgFgDgHgAAnAYIAXAAIACgYIgXAAgAAAAYIAWAAIACgYIgXAAgAhPBZQAAgHgEgKIAUABQAFAAACgDQAGgFAGgqIgvAAQAGgUAHgnIAnAAIADgcIgtAAIACgRIA9AAIgFA+IgqAAIgFAaIAvAAIgBAHQgJA7gIAJQgFAFgKABIgMABIgLAAgABHglIhAAGQgNABgEACIgFgQQAGgBAFgIQAPgPAMgWIASAEQgOAWgRARIA0gEIgMgQIANgIQAWAZAHARIgPAJg");
	this.shape_9.setTransform(266.775,12.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgzBNIAfABQAEgBAAgDIACgTIhNAAIABgQIBNAAIACgKQASgFAPgGIhcAAIABgOIB6AAIAEgBIALALQgYANglAJIgBADIBPAAIgBAQIhQAAIgBATQgBAOgKACQgIACgdAAQgCgKgEgFgAg8gFIAEgqIB7AAIgDAqgAgpgTIBWAAIACgOIhXAAgAhQg5IABgRIBNAAIgFgNIATgEIAGARIBKAAIgBARg");
	this.shape_10.setTransform(242.9,11.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAJBWIAPiqIBDAAIgKBxQgBAOgIADQgGADgXAAQAAgIgDgJQAPABAEgBQAEAAAAgEIAJhfIgfAAIgNCZgAhaA+QAJgFAAgIIAMiGIBOAAIgIBeIg7AAIgEAsIAhgKIgIgTIAQgHQAQAdAGAWIgRAJIgGgTQg5ATgGAEQgBgKgEgJgAg5gHIAqAAIACgXIgqAAgAg1gvIApAAIACgWIgpAAg");
	this.shape_11.setTransform(218.875,12.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhYBYIACgSIBNAAIAEgsIg7AAIABgSIA7AAIAEgnIhFAAIACgSIBSAAQgKgNgSgPIAPgKQAWAPAMAQIgKAHIA/AAIgBASIhFAAIgDAnIA7AAIgBASIg8AAIgEAsIBPAAIgCASg");
	this.shape_12.setTransform(33.125,11.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhbBGQA/gfAZhTIAJACQgBgLABgNIgvAAIACgSIBAAAQgJBqBMAvQgGAFgKALQg3gjgMhEQgbBHg6AgQgHgJgIgGg");
	this.shape_13.setTransform(9.225,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,347.4,21.2);


(lib.sb_sc4_zero = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAjBZIAgAAQAFAAAAgEIAAhZIhkAAIAAgSIAPAAQgEgIgHgHQAXgEAMgIQALgIAFgOIgtAAIAAgSIAxAAIACgTIAVAAIgCATIAyAAIAAASIg1AAIgBAGQAfAOAZAPIgNAOIATAAIAAASIgRAAIAABZQAAARgKADQgKAEgeAAQgDgLgFgJgAgHgWIBfAAQgWgOgbgNQgOASggAJgAhKBtIAAhoQgLAngNATQgDgLgIgLQAKgOAJgYQAJgWAFgYIgcAAIAAgUIAeAAIAAgtIAUAAIAAAtIAZAAIAAAUIgZAAIAAAKQAJAMASAdIgOAQQgEgMgJgQIAABxgAgNBQIAAhFIBBAAIAAA4IgwAAIAAANgAAEAzIAdAAIAAgYIgdAAg");
	this.shape.setTransform(181.675,11.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhsBhQATglAAhOIAAhBIBfAAIgKgTIAUgHQAJAMAGAOIBNAAIAAAVIiwAAIAAAsQAABWgWAqQgGgHgMgGgAhEBoIAAgTIBNAAIAAgdIg+AAIAAgTIA+AAIAAhbIAVAAIAABAQAagTAGgpIAUACQgDARgFAMQAVASAOANIgMAPQgJgLgWgSQgKAQgMALIgOgLIAAAXIBCAAIAAATIhCAAIAAAdIBPAAIAAATgAhDAPQAbgUAHgtIAUACQgDARgDALQAQAPALAMIgMAPQgIgLgOgOQgJARgPAOQgIgIgJgFg");
	this.shape_1.setTransform(153.1,10.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhsBcQARgjAAhLIAAhTIDEAAIAAARIixAAIAABCQAABSgSAmQgKgIgIgCgAhKBkIAAgQIBRAAIAAgQIhBAAIAAgQIBBAAIAAgMIAVAAIAAAMIBBAAIAAAQIhBAAIAAAQIBPAAIAAAQgAhIAfQAIgKAAgVIAAgbIBPAAIAAA0QAdgUAFghIgeAAIAAgRIAfAAIAAgiIAQAAIAAAiIAmAAIAAARIgiAAQAMAnAbANQgIAIgFAHQgXgNgMggQgJAcgcARIgJgKQgCAFgGADQgFACgVAAIgFgMIATAAQABAAABAAQAAAAABgBQAAAAAAgBQAAAAABgBIAAgJIgsALIgCgIQgDANgGAKQgGgFgKgFgAgvAOIAkgJQgLgEgWgEIAFgJQAUADANAGIgEAIIAJgDIAAgRIgtAAgAg7giIAAgrIBGAAIAAArgAgsgsIAoAAIAAgHIgoAAgAgsg8IAoAAIAAgHIgoAAgABGhHIAOgHQALALAIAMIgOAIQgIgNgLgLg");
	this.shape_2.setTransform(124.6,11.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAFBZIAaAAQAFAAAAgEIAAhWIgyAAIAAgVIBOAAQgXgPgigPIALgPIAcANIAWgYIhLAAIAAgUIBbAAIAEgBIAOALQgRAYgWATIATALIgJAMIARAAIAEgBIAPAFQgNAngMAUIgSgHQAIgOAHgVIgYAAIAABXQAAAQgKAEQgIADgbAAQgCgKgFgKgAhsBiQAIgSADgkIATADQgEAkgHAWQgGgDgNgEgAhEAuIASgDQAGAfABAWIgTAEQAAgRgGglgAgpApIARgGQAKAaAFAWIgSAGQgEgSgKgegAhqAPQAGgBAMgOQAJgIALgPQgbADgGADIgHgUQAFgBAJgLQAUgbANggIATAIQgOAegXAeIAYgCQAKgNAJgSIASAMQgYApgeAeIAhgFIgIgSIARgGQAMAYAFAWIgRAHIgDgMQg9ALgGACQgDgMgDgIg");
	this.shape_3.setTransform(96.225,11.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhkBcQBKgrAHhVIhKAAIAAgWIBLAAIAAgzIAWAAIAAAzIBhAAIAAAKQgEBIgEAfQgEAfgIAJQgJAKgNABQgOABgYgBQgBgNgHgKQAQABAUABQAHgBAEgDQAMgKAFhrIhKAAQgGBihQAwQgHgLgKgHg");
	this.shape_4.setTransform(67.375,11.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhpBpIAAgSIBdAAIAAgQIhLAAIAAgSIBLAAIAAgOIhEAAIAAhJIBEAAIAAgLIhcAAIAAgSIBcAAIAAgOIhGADQAAgGgEgLQBkgEA5gJIAMARQgcAFgtADIAAAQIBeAAIAAASIheAAIAAALIBIAAIAABJIhIAAIAAAOIBRAAIAAASIhRAAIAAAQIBgAAIAAASgAAKAYIAxAAIAAgPIgxAAgAg7AYIAvAAIAAgPIgvAAgAAKgEIAxAAIAAgOIgxAAgAg7gEIAvAAIAAgOIgvAAg");
	this.shape_5.setTransform(39.4,10.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguBGIAJgNIApAPQARgJAQgMIh0AAIAAgRICEAAIAEgBIAOAJQgNASghAVIATAJIgKAPQgogUgogPgAhtAPQBHgPAjgZIgIAAIAAglIhGAAIAAAbIgUAAIAAgqIBaAAIAAgLIhLAAIAAgQICsAAIAAAQIhMAAIAAALIBbAAIAAAqIgVAAIAAgbIhGAAIAAAlIgHAAIAPAHIgEAEQAlASA7AHQgIAKgGAIQgSgDgegJIAAAIIhhAAIAAgJIgrAOQgLgLgGgEgAglALIBHAAQgVgIgOgIQgSAKgSAGgAhSgaIA1gLQgRgGgbgGIAGgMQAbAFASAHIgFALIAGgBIACANIg4AQgAARgdIAGgMIACABIgFgJQATgDAagJIAJAMQgPAFgcAFQAhAIARAGIgFAOQgbgLgggHg");
	this.shape_6.setTransform(10.95,11.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192.7,22.2);


(lib.sb_sc4_inoutline = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(255,255,255,0.42)").ss(2,1,1).p("AAtCBQgGATgDAKIEXAAIglDRIhRAAIAEgVIiUAAIgEAWIhNAAIAShlQgbA0gpAsQgLgNgSgOQgVgPgNgGQgLAUgUAKQgQAIgaADQgTACgoAAQABgPgDgUQgDgWgGgPQAOACAzAAQANAAACgNIARhhIg0AUQgCgtgOg5QgoC3hFBaQgIgJgRgMQgSgOgMgFQAmgyAbhOQAUg6AQhSIgoAHIADhMQAPgCAjgEIAsj7IBCAAQAZhCAIgcIBRAOQgGAMgjBEIBXAAIgnDdIAmgFIgGBEIgtAHIgsD6QgEAYgFALQA4g6AihbQAXg9APhYIAWh+IFOAAIgrDygAh5jBIhRAAIgHAmIAxgQQALAoAHA5gAEYlTIgSAWQAdAjAqAgQAsAgArATQgNAOgPAaQgOAWgJATQgsgbgtgnIgHAmIipAAIAFggQg+Asg5AdQgRg5gNgYQBHggBAguQBGgyArg3gAD9jRQgRgRgdghIg5AygABTgxIgFAdICnAAIAFgdgABLDgIgKA3ICUAAIAJg3gADmBBIAGgfIioAAIgGAfgAjogWIBTgLIAGgiIg2AUQAAgZgOhJgAjNBCQARBDADAkIAXiDIhTANIgHAgg");
	this.shape.setTransform(320.125,37.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.42)").ss(2,1,1).p("ABMESID4AAIgOBQIpIAAIAOhQID3AAIANhNIjFAAIAOhQIDFAAIARhfIg3A5QgOgZgngwQgkA0gvAiQgSgVgmgcQgzDThQBwQgKgLgXgRQgWgRgPgHQA2hJAkh4QAYhOAUh0IAmjUIExAAQgHgXgMgdIBegcQAUAoAMAoID7AAIgPBWIo8AAIgXB+QgLBAgLAuQBag8AsiMIBRAJQgOAwgUAmQAlAmAdAnIAgi2IBaAAIgiC+QBOg+Anh2IBRAKQgSA1gXApQBGBBAUAaIg+A8QgWgegyg1QgmAwgrAeQgNgRgYgUIgMBDIDNAAIgOBQIjNAAg");
	this.shape_1.setTransform(226.5,37.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0.42)").ss(2,1,1).p("ADyiwIlMAAIALhBIFMAAIAHglIkeAAIAMhBIF1AAIgSBmIA0AAIgMBBIgzAAIgSBmIl1AAIALhBIEdAAgAjRlnQBWAvAfAfIg9BMQgcgehWg4gAmIEcQBZhuBWiHIAxA/QhQB/hVB1gAjnAAQgRgQgjgYQghgXgfgSIA4hGQBVAqAkAhgAEUBXQgyBahTA+QBEAiBbAPQgQAMgUAWQgUAVgLARQhmgVhJgxQhdAuiAAWQgDgQgHgWQgIgWgJgOQBpgOBTghQgigkgXg0IA+gUIhSAAIAHgpIhDAAIAYiFIHVAAIgXCEgAgtASIgIAqIEMAAIAPgCIAXAKIAJgygAAXCBQAQAiAmAhQAvgfAfgkg");
	this.shape_2.setTransform(133.25,38.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(255,255,255,0.42)").ss(2,1,1).p("AkkiXQAjAQAiAUQAlAWASAUIhEBJQgQgUgjgZQghgXgjgRgAjKllQAgASAgAXQAiAZARAUIhJBGQgOgVghgaQgegZghgUgAGPk+IgeCsIhcAAIAOhUIkjAAIgPBUIhXAAIAeisgAEBiRIhDF5QgEAWABAHQABAFAJAAIAWAAQAKAAAHgZQAIgYAPhPQAMALAXAMQAVAKATAFQgXBkgZAmQgaAmguAAIgzAAQgxAAgNgaQgOgZAMhFIBDl5gABXiRIgTBrQgUBwgvBbQg9B6hoBHQgHgOgRgVQgRgXgMgJQBeg/AyhlQAjhFARhiIAShpgAmOEjQBbhpBniSIA6A9QhTB9hkB+g");
	this.shape_3.setTransform(40.875,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,363.1,76);


(lib.sb_sc4_in = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("APiFXQgNgLgLgFQAqg0AbhRQAUg6AQhWIgrAGIABg8IA0gFIAtj6IA/AAQAXg1AOgrIA/AMIgqBUIBZAAIgnDfIAmgFIgFA1IgrAHIguEHQgEAYgIAMQgIAOgQAIQgPAHgYACQgSACgmAAQABgMgDgRQgDgQgFgNIBEABQAHAAADgDQADgCACgIIAsj9IhiANQgpDchOBkQgGgIgOgKgAR3gPIBigOIAfitIhgAAgAmgEdQheAyiDAZQgBgNgGgRQgGgSgHgLQBvgQBWgoQgrgugYg9IA1gRIhNAAIAKg3IEfAAIANgCIAbALIALg5IlLAAIgNBLIg+AAIAWh+IHKAAIgWB9Ig4AAQg2BchWA+QBHAqBdAOQgaAVgcAmQhngYhIg0gAmRDSQA9goAlgxIikAAQAUAyAuAngAVJFmIAYiFQglBPgvAyQgIgJgPgLQgRgNgLgEQA4g7AihaQAYg/APhVIAXiBIFGAAIgoDjIkJAAIgLAkIEgAAIgkDLIhAAAIAEgVIixAAIgEAWgAWUEZICxAAIANhKIixAAgAWUBBIDFAAIAHgoIjEAAIgIAogAWkgUIDEAAIAHglIjEAAgA42FJQgNgRgKgIQBehAAzhlQAkhIAShiIAThtIBHAAIgUBuQgTBtgtBZQg8B3hnBHQgFgMgOgRgABEFOQgRgMgMgHQA1hKAjhzQAYhOAUhxIAljTIE7AAQgKgggPgeIBJgWQAUAkAPAwID7AAIgLBCIpDAAIgZCRQgzEchiCJQgIgJgRgNgA7/EtQBihzBfiKIAuAvQhWB/hkB/gAzXFbQgqAAgLgTQgNgVAKg5IBFmGIBHAAIhFGGQgDAUACAFQABAGAKAAIAmAAQALAAAIgZQAHgWARhUQAJAJASAKQAQAIAPAFQgVBfgVAjQgXAjgoAAgAtgEpQBMhbBjiYIAnAwQhKB2hdB+gACpFUIALg+IEAAAIAShjIjOAAIALg/IDOAAIA0kqIBFAAIglDUQBdhCAtiFIBAAJQgTAzgYAqQBNBNAVAbIgyAvQgYgig7g9QgpA2gyAkQgLgQgYgUIgNBJIDUAAIgLA/IjUAAIgSBjIECAAIgLA+gARsBOIAqgOQATBCAFAxIgtAQQgEgwgRhFgAD6BCQgPgNgKgHQBkhDAwiUIBBAHQgSA0gUAnQA0A3AYAlIgyAvQgUgigogvQgoA7g2AoQgHgHgPgNgArxgqQghgXgfgRIAtg2QAhAQAfATQAlAWARASIgvA8QgSgRgigYgA6MgxQgkgXgigPIAwg1QAkAPAkAUQAmAWATARIg0A7QgTgTgkgXgASYieIAqgOQAQA3AFAzIguASQgBgqgQhEgAoXhGIAJg1IEkAAIAIgxIlTAAIAKg1IFTAAIAIgwIkjAAIAJg1IFoAAIgSBlIA0AAIgJA1Ig1AAIgRBmgAVOiSQgIgUgGgKQBIgiA/gtQBFgyAqg2IA6AWIgTAXQAcAjAtAjQAtAjAtAWQgKALgNATQgMATgHAOQgtgbgsgmIgHAoIivAAIAHgkQhBAsg0AaQgCgLgJgUgAXhjIICQAAQghgfgfglQglAkgrAggAxViQIAQhdIlBAAIgQBdIhFAAIAdihIHNAAIgdChgAqij4QgfgYgggSIAtg2QAfAQAhAWQAkAYASAQIgxA+QgRgUgigYgA4/j8QgggYgigTIA1gyQAhARAiAXQAjAZARAUIg4A4QgQgWgigag");
	this.shape.setTransform(179.175,36.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,358.4,72.2);


(lib.sb_sc4_bose = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgiBdQAYgLAJgWQAGgRABgmQgPACgEADIgIgVQAGgCALgPQAEgHAMgYIgfAAIAAgUIApAAIAMgdIAYAGIgKAXIA6AAIAAAUIhFAAQgNAZgNATIA8gGIgOgXIASgIQAZAnAIASIgUAJIgHgRIgPACIAABPQAAAFABABQABAAAAAAQAAABABAAQAAAAABAAQABAAABAAIANAAQAEAAABgFIABgaQAHAFAMADQgBAZgFAJQgFAJgMAAIgTAAQgNAAgFgGQgFgFAAgQIAAhOIgSACQgBAtgJAWQgLAbgbAOQgDgJgKgIgAhtBiQAGgRAEglIASADQgFAogGARQgIgEgJgCgAhJAuIAQgDQAFAVACAbIgSAFQAAgTgFgfgAgvApIAPgFQAHASAGAXIgQAFIgMgpgAhrAPQAGgCALgNQAHgHAKgQQgXADgGACQgCgJgFgLQAFgBAIgMQASgZAMghIAUAIQgPAigVAcIAVgCQALgRAIgRIASALQgXAqgcAgIAfgEIgHgUIAPgFQANAZAEAVIgRAGIgDgLQg3AJgHAEQgBgIgFgMg");
	this.shape.setTransform(330.975,11.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrBXQAWABAJAAQAEgBAAgDIAAgzQhCAFgKAEIgHgVQAMgBAUgLQAYgKAWgNQgzAEgJADQgCgMgEgIQAFgBAOgIQAWgJAZgVQglAIgoAGQgCgKgFgIQBlgRAvgVIAQARQgeANglAIIANAJQgXATgWAMIAygDIAagTIARAPQgtAggsAUIBUgGIgTgTIASgJQAeAaASAZIgTALIgNgRIg5AFIAAA1QAAARgLAEQgJAEgdAAQgDgMgFgKgAhmBWQAegSAUgZIAWAIQgXAcgeAVQgJgJgKgFgAAfA0IASgMQAkAaASATIgTANQgSgUgjgag");
	this.shape_1.setTransform(302.475,11.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA2BuIAAgFIhqAAIAAAFIgUAAIAAg5ICTAAIAAA5gAg0BcIBqAAIAAgJIhqAAgAg0BJIBqAAIAAgJIhqAAgAhpAsIAAgPIA/AAIgJgMIAIgCIgmAAIAAgPIBIAAIgEgIIATgFQAFAHACAGIBIAAIAAAPIghAAIADABIgMANIA/AAIAAAPgAgWAcIgEABIAwAAIAKgOIg+AAIAIANgAhqgKQAdgJAQgTQggADgGACIAAAAIgEgOQAFAAAJgHIANgKQgTABgDABIgFgOQAEgBAFgEQAKgIAMgTIAOAIQgMAPgLAJIARgBIANgNIAMAIQgRASgVAPIAZgCIAEgKIAPADIAAgkIAXAAIgFgLIARgEQAFAJACAGIAZAAIAAA3IgKAAQAMALAHALIAAhSIAxAAIACgBIANAGIgSAiQASAOAAANQAAAMgJAGQgFAEgFAAIgSAAQgBgJgEgGIAPAAIAGgBQAEgCAAgGQAAgJgTgOQAJgQADgKIgWAAIAABSIgSAAIAAgOIgNAIQgDgGgEgFQg0ALgGADQgCgIgFgHQAJgEAAgKIAAgXQgOAogzAUQgDgHgFgGgAgPgaIAbgGIgHgGIACgBIgWAAgAgPgzIAgAAIAAgKIggAAgAgPhIIAgAAIAAgKIggAAg");
	this.shape_2.setTransform(274.125,11.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhJBuIAAhpICVAAIAABpIgWAAIAAgIIhpAAIAAAIgAgzBTIBpAAIAAgWIhpAAgAgzArIBpAAIAAgUIhpAAgAhogNIAAgTIA3AAQgDgRgJgNIAWgFQALAQADASIgCABIA1AAQAGgNAIgWIiDAAIAAgUIBTAAQgEgKgEgIIAVgEQAFAIAGAOIBOAAIAAAUIg0AAIAWAFIgPAeIA4AAIAAATg");
	this.shape_3.setTransform(245.6,11.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABGA+IAAhGQAAgXgVAAQgSAAgNALIAAAHIAABLIgjAAIAAhGQAAgXgVAAQgRAAgOALIAABSIgkAAIAAh5IAdAAIAEANQATgPAbAAQAbAAAKASQAXgSAbAAQAtAAAAAwIAABLg");
	this.shape_4.setTransform(215.325,13.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag+ANIAAhKIAkAAIAABGQAAAYAVgBQAQAAAQgLIAAhSIAkAAIAAB4IgdAAIgEgMQgYAPgXAAQgtABAAgyg");
	this.shape_5.setTransform(190.625,14.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRBVIAAh5IAjAAIAAB5gAgTg1IAAgfIAnAAIAAAfg");
	this.shape_6.setTransform(174.7,11.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABGA+IAAhGQAAgXgVAAQgSAAgNALIAABSIgjAAIAAhGQAAgXgVAAQgSAAgOALIAABSIgjAAIAAh5IAdAAIADANQAVgPAZAAQAbAAALASQAXgSAbAAQAtAAAAAwIAABLg");
	this.shape_7.setTransform(154.475,13.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgsAwQgTgQAAggQAAgeAUgRQATgQAbAAQA9AAAAA8IAAAQIhaAAQACAWAhAAQAVAAAcgIIAAAcQgdAJgVAAQghAAgTgQgAgagIIA2AAQgBgbgXAAQgbAAgDAbg");
	this.shape_8.setTransform(130.275,14.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoA+IAAh5IAdAAIAEAOQAWgQAaAAIAAAiQgZAAgUAMIAABNg");
	this.shape_9.setTransform(114.325,13.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhEBNIAAiZIBGAAQBDAAAAA4QABAcgXAPQgSAMgbAAIgiAAIAAAqgAggAEIAgAAQAPAAAHgEQAJgGAAgPQAAgYggAAIgfAAg");
	this.shape_10.setTransform(96.25,12.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgsAwQgTgQAAggQAAgeAVgRQASgQAbAAQA9AAAAA8IAAAQIhaAAQACAWAhAAQAVAAAcgIIAAAcQgdAJgVAAQghAAgTgQgAgagIIA2AAQgBgbgXAAQgbAAgDAbg");
	this.shape_11.setTransform(65.125,14.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag1A4IAAgeQAYAJAYAAQAaAAAAgKQAAgHgSgEIgagFQghgHAAgcQAAglA7AAQAcAAASAIIAAAdQgWgIgVAAQgbAAAAAIQAAAEAEACIAOADIAYAGQAkAIAAAaQAAApg+AAQgZAAgXgIg");
	this.shape_12.setTransform(46.625,14.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgxAwQgUgRAAgfQAAgeAUgRQASgQAfAAQAgAAASARQAUARAAAdQAAAfgUARQgSAQggAAQgfAAgSgQgAgWgYQgJAJAAAPQAAAPAJAJQAJAKAOAAQAOAAAJgKQAJgJAAgPQAAgPgKgJQgJgJgOAAQgOAAgIAJg");
	this.shape_13.setTransform(27.575,14.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhFBNIAAiZIBAAAQBEAAAAAnQAAAagbAJIAAABQANABAKAIQALAKAAAOQAAAthDAAgAggAwIAjAAQAcAAAAgSQAAgLgJgEQgHgDgPAAIggAAgAgggNIAcAAQAcAAAAgRQAAgQgbAAIgdAAg");
	this.shape_14.setTransform(6.975,12.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,342,22.2);


(lib.an_sc4_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000","#010406","#000000","rgba(0,0,0,0)"],[0,0.145,0.486,0.851,1],-119.3,0,119.4,0).s().p("EgSpAxIMAAAhiPMAlTAAAMAAABiPg");
	this.shape.setTransform(465.3168,293.2657,1.0354,1.4228,55.2156);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.965)","rgba(1,4,6,0.965)","rgba(0,0,0,0.965)","rgba(0,0,0,0)"],[0,0.153,0.486,0.839,1],-70.4,-101.4,70.4,101.3).s().p("EhEbAYEMBy3hPyIWAfrMhy3BPzg");
	this.shape_1.setTransform(465.85,293.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.929)","rgba(1,4,6,0.929)","rgba(0,0,0,0.929)","rgba(0,0,0,0)"],[0,0.161,0.486,0.831,1],-70.3,-101.3,70.3,101.1).s().p("EhEdAYHMBy8hP1IV/fnMhy8BP2g");
	this.shape_2.setTransform(466.375,293.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.898)","rgba(1,4,6,0.898)","rgba(0,0,0,0.898)","rgba(0,0,0,0)"],[0,0.173,0.486,0.82,1],-70.2,-101.1,70.2,101.1).s().p("EhEeAYKMBzBhP5IV8flMhzBBP6g");
	this.shape_3.setTransform(466.925,294.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.863)","rgba(1,4,6,0.863)","rgba(0,0,0,0.863)","rgba(0,0,0,0)"],[0,0.18,0.486,0.812,1],-70.1,-100.9,70.1,100.9).s().p("EhEgAYOMBzGhP9IV7fjMhzGBP8g");
	this.shape_4.setTransform(467.425,294.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.827)","rgba(1,4,6,0.827)","rgba(0,0,0,0.827)","rgba(0,0,0,0)"],[0,0.188,0.486,0.8,1],-70,-100.8,70,100.8).s().p("EhEhAYRMBzLhQAIV4fgMhzLBP/g");
	this.shape_5.setTransform(467.95,294.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.792)","rgba(1,4,6,0.792)","rgba(0,0,0,0.792)","rgba(0,0,0,0)"],[0,0.196,0.486,0.792,1],-69.9,-100.7,69.9,100.6).s().p("EhEiAYTMBzPhQDIV2feMhzPBQCg");
	this.shape_6.setTransform(468.475,294.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.757)","rgba(1,4,6,0.757)","rgba(0,0,0,0.757)","rgba(0,0,0,0)"],[0,0.204,0.486,0.78,1],-69.8,-100.5,69.8,100.5).s().p("EhEkAYXMBzUhQGIV1fZMhzUBQHg");
	this.shape_7.setTransform(469.025,295.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.725)","rgba(1,4,6,0.725)","rgba(0,0,0,0.725)","rgba(0,0,0,0)"],[0,0.216,0.486,0.773,1],-69.7,-100.4,69.7,100.3).s().p("EhElAYaMBzZhQKIVyfXMhzYBQKg");
	this.shape_8.setTransform(469.55,295.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.69)","rgba(1,4,6,0.69)","rgba(0,0,0,0.69)","rgba(0,0,0,0)"],[0,0.224,0.486,0.761,1],-69.6,-100.3,69.6,100.1).s().p("EhEmAYcMBzdhQMIVwfUMhzdBQNg");
	this.shape_9.setTransform(470.075,295.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.655)","rgba(1,4,6,0.655)","rgba(0,0,0,0.655)","rgba(0,0,0,0)"],[0,0.231,0.486,0.753,1],-69.5,-100.1,69.5,100).s().p("EhEoAYfMBzihQPIVufRMhzhBQQg");
	this.shape_10.setTransform(470.6,295.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.62)","rgba(1,4,6,0.62)","rgba(0,0,0,0.62)","rgba(0,0,0,0)"],[0,0.239,0.486,0.741,1],-69.4,-99.9,69.4,99.9).s().p("EhEpAYjMBznhQUIVsfQMhznBQTg");
	this.shape_11.setTransform(471.125,296.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.584)","rgba(1,4,6,0.584)","rgba(0,0,0,0.584)","rgba(0,0,0,0)"],[0,0.247,0.486,0.733,1],-69.3,-99.8,69.3,99.8).s().p("EhEqAYmMBzrhQXIVqfNMhzrBQVg");
	this.shape_12.setTransform(471.65,296.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.553)","rgba(1,4,6,0.553)","rgba(0,0,0,0.553)","rgba(0,0,0,0)"],[0,0.259,0.486,0.722,1],-69.2,-99.7,69.2,99.6).s().p("EhEsAYpMBzwhQaIVpfJMhzwBQag");
	this.shape_13.setTransform(472.175,296.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.518)","rgba(1,4,6,0.518)","rgba(0,0,0,0.518)","rgba(0,0,0,0)"],[0,0.267,0.486,0.714,1],-69.1,-99.6,69.1,99.4).s().p("EhEtAYsMBz1hQdIVmfGMhz0BQdg");
	this.shape_14.setTransform(472.7,296.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.482)","rgba(1,4,6,0.482)","rgba(0,0,0,0.482)","rgba(0,0,0,0)"],[0,0.275,0.486,0.702,1],-69,-99.4,69,99.3).s().p("EhEvAYvMBz6hQgIVlfDMhz6BQgg");
	this.shape_15.setTransform(473.25,297.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.447)","rgba(1,4,6,0.447)","rgba(0,0,0,0.447)","rgba(0,0,0,0)"],[0,0.282,0.486,0.694,1],-68.9,-99.2,68.9,99.2).s().p("EhEwAYyMBz+hQjIVjfAMhz+BQjg");
	this.shape_16.setTransform(473.775,297.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.416)","rgba(1,4,6,0.416)","rgba(0,0,0,0.416)","rgba(0,0,0,0)"],[0,0.294,0.486,0.682,1],-68.8,-99.1,68.8,99).s().p("EhExAY1MB0DhQnIVge9Mh0DBQog");
	this.shape_17.setTransform(474.3,297.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.38)","rgba(1,4,6,0.38)","rgba(0,0,0,0.38)","rgba(0,0,0,0)"],[0,0.302,0.486,0.675,1],-68.7,-99,68.7,98.9).s().p("EhEyAY4MB0HhQpIVee6Mh0HBQpg");
	this.shape_18.setTransform(474.825,298);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.345)","rgba(1,4,6,0.345)","rgba(0,0,0,0.345)","rgba(0,0,0,0)"],[0,0.31,0.486,0.663,1],-68.6,-98.8,68.6,98.7).s().p("EhE0AY8MB0MhQuIVde4Mh0NBQtg");
	this.shape_19.setTransform(475.35,298.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.31)","rgba(1,4,6,0.31)","rgba(0,0,0,0.31)","rgba(0,0,0,0)"],[0,0.318,0.486,0.655,1],-68.5,-98.6,68.5,98.6).s().p("EhE1AY/MB0RhQxIVae1Mh0RBQwg");
	this.shape_20.setTransform(475.875,298.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.275)","rgba(1,4,6,0.275)","rgba(0,0,0,0.275)","rgba(0,0,0,0)"],[0,0.325,0.486,0.643,1],-68.4,-98.5,68.4,98.5).s().p("EhE3AZBMB0WhQzIVZeyMh0WBQzg");
	this.shape_21.setTransform(476.4,298.775);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.243)","rgba(1,4,6,0.243)","rgba(0,0,0,0.243)","rgba(0,0,0,0)"],[0,0.337,0.486,0.635,1],-68.3,-98.4,68.3,98.3).s().p("EhE4AZFMB0ahQ4IVXevMh0aBQ3g");
	this.shape_22.setTransform(476.925,299.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.208)","rgba(1,4,6,0.208)","rgba(0,0,0,0.208)","rgba(0,0,0,0)"],[0,0.345,0.486,0.624,1],-68.2,-98.2,68.2,98.2).s().p("EhE5AZIMB0fhQ7IVUesMh0fBQ7g");
	this.shape_23.setTransform(477.475,299.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.173)","rgba(1,4,6,0.173)","rgba(0,0,0,0.173)","rgba(0,0,0,0)"],[0,0.353,0.486,0.616,1],-68.1,-98.1,68.1,98).s().p("EhE7AZKMB0khQ9IVTepMh0kBQ+g");
	this.shape_24.setTransform(478,299.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.137)","rgba(1,4,6,0.137)","rgba(0,0,0,0.137)","rgba(0,0,0,0)"],[0,0.361,0.486,0.604,1],-68,-98,68,97.8).s().p("EhE8AZNMB0ohRAIVRemMh0oBRBg");
	this.shape_25.setTransform(478.525,299.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.102)","rgba(1,4,6,0.102)","rgba(0,0,0,0.102)","rgba(0,0,0,0)"],[0,0.369,0.486,0.596,1],-67.9,-97.8,67.9,97.8).s().p("EhE9AZRMB0thREIVOekMh0tBRDg");
	this.shape_26.setTransform(479.025,300.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.071)","rgba(1,4,6,0.071)","rgba(0,0,0,0.071)","rgba(0,0,0,0)"],[0,0.38,0.486,0.584,1],-67.8,-97.6,67.8,97.6).s().p("EhE/AZUMB0yhRHIVNehMh0yBRHg");
	this.shape_27.setTransform(479.575,300.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.035)","rgba(1,4,6,0.035)","rgba(0,0,0,0.035)","rgba(0,0,0,0)"],[0,0.388,0.486,0.576,1],-67.7,-97.5,67.7,97.5).s().p("EhFAAZXMB02hRKIVLedMh02BRKg");
	this.shape_28.setTransform(480.1,300.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(1,4,6,0)","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.396,0.486,0.565,1],-119.3,0,119.4,0).s().p("EgSpAxIMAAAhiPMAlTAAAMAAABiPg");
	this.shape_29.setTransform(480.6175,300.8762,0.9929,1.449,55.2155);
	this.shape_29._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(29).to({_off:false},0).wait(15));

	// Layer_5
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(0,0,0,0)","#000000","#010406","#000000","rgba(0,0,0,0)"],[0,0.145,0.486,0.851,1],-119.3,0,119.4,0).s().p("EgSpAxIMAAAhiPMAlTAAAMAAABiPg");
	this.shape_30.setTransform(169.8705,217.4278,0.9597,1.4128,52.9994);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(0,0,0,0)","rgba(1,1,1,0.996)","#010406","rgba(1,1,1,0.996)","rgba(0,0,0,0)"],[0,0.149,0.49,0.851,1],-69.3,-92.1,69.4,92).s().p("EhCcAbhMBvOhTzIVrcxMhvNBT0g");
	this.shape_31.setTransform(168.1,217.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(0,0,0,0)","rgba(2,2,2,0.992)","#010406","rgba(1,1,1,0.988)","rgba(0,0,0,0)"],[0,0.157,0.494,0.851,1],-69.8,-92.7,69.9,92.6).s().p("EhCsAbkMBvkhUEIV1c9MhvlBUFg");
	this.shape_32.setTransform(166.375,217.65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(0,0,0,0)","rgba(3,3,3,0.988)","#020507","rgba(2,2,2,0.984)","rgba(0,0,0,0)"],[0,0.161,0.494,0.851,1],-70.2,-93.3,70.3,93.2).s().p("EhC9AbnMBv9hUWIV+dJMhv9BUWg");
	this.shape_33.setTransform(164.6,217.775);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(0,0,0,0)","rgba(4,4,4,0.98)","#020507","rgba(3,3,3,0.976)","rgba(0,0,0,0)"],[0,0.169,0.498,0.851,1],-70.7,-93.9,70.7,93.8).s().p("EhDNAbqMBwUhUoIWHdVMhwUBUog");
	this.shape_34.setTransform(162.875,217.875);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(0,0,0,0)","rgba(5,5,5,0.976)","#020507","rgba(3,3,3,0.969)","rgba(0,0,0,0)"],[0,0.176,0.502,0.851,1],-71.1,-94.4,71.2,94.4).s().p("EhDdAbtMBwshU6IWPdhMhwsBU6g");
	this.shape_35.setTransform(161.125,217.975);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(0,0,0,0)","rgba(6,6,6,0.973)","#020507","rgba(4,4,4,0.965)","rgba(0,0,0,0)"],[0,0.18,0.506,0.851,1],-71.6,-95,71.6,95).s().p("EhDtAbwMBxChVMIWZdtMhxDBVLg");
	this.shape_36.setTransform(159.4,218.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(0,0,0,0)","rgba(8,8,8,0.969)","#030608","rgba(5,5,5,0.961)","rgba(0,0,0,0)"],[0,0.188,0.51,0.855,1],-72,-95.6,72.1,95.6).s().p("EhD9AbzMBxahVdIWhd4MhxaBVdg");
	this.shape_37.setTransform(157.65,218.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(0,0,0,0)","rgba(9,9,9,0.965)","#030608","rgba(5,5,5,0.953)","rgba(0,0,0,0)"],[0,0.192,0.51,0.855,1],-72.4,-96.2,72.5,96.1).s().p("EhENAb2MBxyhVvIWpeEMhxxBVvg");
	this.shape_38.setTransform(155.875,218.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(0,0,0,0)","rgba(10,10,10,0.961)","#030608","rgba(6,6,6,0.949)","rgba(0,0,0,0)"],[0,0.196,0.514,0.855,1],-72.9,-96.8,72.9,96.7).s().p("EhEeAb5MByJhWBIWzeQMhyJBWAg");
	this.shape_39.setTransform(154.15,218.45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(0,0,0,0)","rgba(11,11,11,0.957)","#030608","rgba(6,6,6,0.941)","rgba(0,0,0,0)"],[0,0.204,0.518,0.855,1],-73.3,-97.4,73.4,97.3).s().p("EhEuAb8MByhhWSIW8ebMhyhBWSg");
	this.shape_40.setTransform(152.4,218.55);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(0,0,0,0)","rgba(12,12,12,0.949)","#030608","rgba(7,7,7,0.933)","rgba(0,0,0,0)"],[0,0.212,0.522,0.855,1],-73.8,-97.9,73.8,97.9).s().p("EhE+Ab/MBy4hWkIXFenMhy5BWkg");
	this.shape_41.setTransform(150.675,218.65);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(0,0,0,0)","rgba(13,13,13,0.945)","#040709","rgba(8,8,8,0.929)","rgba(0,0,0,0)"],[0,0.216,0.522,0.855,1],-74.2,-98.5,74.3,98.5).s().p("EhFOAcCMBzQhW2IXNezMhzPBW2g");
	this.shape_42.setTransform(148.9,218.775);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(0,0,0,0)","rgba(14,14,14,0.941)","#040709","rgba(8,8,8,0.922)","rgba(0,0,0,0)"],[0,0.224,0.525,0.855,1],-74.7,-99.1,74.7,99.1).s().p("EhFeAcFMBznhXHIXWe+MhznBXHg");
	this.shape_43.setTransform(147.175,218.875);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(0,0,0,0)","rgba(15,15,15,0.937)","#040709","rgba(9,9,9,0.918)","rgba(0,0,0,0)"],[0,0.227,0.529,0.855,1],-119.3,0,119.4,0).s().p("EgSpAxIMAAAhiPMAlTAAAMAAABiPg");
	this.shape_44.setTransform(145.4008,219.0026,1.0459,1.4781,52.9999);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(0,0,0,0)","rgba(14,14,14,0.906)","rgba(4,7,9,0.965)","rgba(9,9,9,0.886)","rgba(0,0,0,0)"],[0,0.235,0.529,0.859,1],-75.5,-100.1,75.5,100.2).s().p("EhF2AcGMB0GhXfIXnfUMh0HBXfg");
	this.shape_45.setTransform(144.6,218.725);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(0,0,0,0)","rgba(14,14,14,0.875)","rgba(4,7,8,0.929)","rgba(8,8,8,0.855)","rgba(0,0,0,0)"],[0,0.239,0.529,0.867,1],-75.8,-100.7,75.9,100.7).s().p("EhF+AcEMB0PhXlIXtfeMh0NBXkg");
	this.shape_46.setTransform(143.75,218.45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["rgba(0,0,0,0)","rgba(13,13,13,0.839)","rgba(4,6,8,0.898)","rgba(8,8,8,0.824)","rgba(0,0,0,0)"],[0,0.247,0.529,0.871,1],-76.2,-101.2,76.2,101.1).s().p("EhGFAcCMB0WhXqIX1fnMh0WBXqg");
	this.shape_47.setTransform(142.95,218.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(0,0,0,0)","rgba(13,13,13,0.808)","rgba(3,6,8,0.863)","rgba(8,8,8,0.792)","rgba(0,0,0,0)"],[0,0.255,0.533,0.875,1],-76.6,-101.6,76.6,101.6).s().p("EhGNAcAMB0ehXwIX9fwMh0fBXxg");
	this.shape_48.setTransform(142.125,217.925);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(0,0,0,0)","rgba(12,12,12,0.776)","rgba(3,6,7,0.827)","rgba(7,7,7,0.761)","rgba(0,0,0,0)"],[0,0.259,0.533,0.878,1],-76.9,-102.1,77,102.2).s().p("EhGUAb/MB0mhX3IYDf7Mh0mBX2g");
	this.shape_49.setTransform(141.275,217.625);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(0,0,0,0)","rgba(12,12,12,0.745)","rgba(3,6,7,0.792)","rgba(7,7,7,0.729)","rgba(0,0,0,0)"],[0,0.267,0.533,0.886,1],-77.3,-102.6,77.3,102.6).s().p("EhGcAb9MB0uhX9MAYLAgFMh0uBX8g");
	this.shape_50.setTransform(140.45,217.35);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["rgba(0,0,0,0)","rgba(11,11,11,0.71)","rgba(3,5,7,0.757)","rgba(7,7,7,0.698)","rgba(0,0,0,0)"],[0,0.275,0.533,0.89,1],-77.7,-103.1,77.7,103.1).s().p("EhGkAb7MB02hYDMAYTAgOMh02BYDg");
	this.shape_51.setTransform(139.625,217.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(0,0,0,0)","rgba(11,11,11,0.678)","rgba(3,5,7,0.725)","rgba(7,7,7,0.663)","rgba(0,0,0,0)"],[0,0.282,0.533,0.894,1],-78,-103.6,78.1,103.6).s().p("EhGrAb5MB0+hYJMAYZAgYMh0+BYJg");
	this.shape_52.setTransform(138.825,216.825);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["rgba(0,0,0,0)","rgba(10,10,10,0.647)","rgba(3,5,6,0.69)","rgba(6,6,6,0.631)","rgba(0,0,0,0)"],[0,0.286,0.533,0.898,1],-78.4,-104.1,78.5,104).s().p("EhGzAb3MB1GhYPMAYhAgiMh1GBYPg");
	this.shape_53.setTransform(137.975,216.55);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["rgba(0,0,0,0)","rgba(10,10,10,0.616)","rgba(3,5,6,0.655)","rgba(6,6,6,0.6)","rgba(0,0,0,0)"],[0,0.294,0.533,0.906,1],-78.8,-104.5,78.8,104.6).s().p("EhG7Ab1MB1PhYUMAYoAgrMh1PBYUg");
	this.shape_54.setTransform(137.15,216.275);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["rgba(0,0,0,0)","rgba(9,9,9,0.58)","rgba(2,4,6,0.62)","rgba(6,6,6,0.569)","rgba(0,0,0,0)"],[0,0.302,0.537,0.91,1],-79.1,-105,79.2,105).s().p("EhHCAbzMB1WhYaMAYvAg0Mh1WBYbg");
	this.shape_55.setTransform(136.325,216.025);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(0,0,0,0)","rgba(9,9,9,0.549)","rgba(2,4,5,0.584)","rgba(5,5,5,0.537)","rgba(0,0,0,0)"],[0,0.306,0.537,0.914,1],-79.5,-105.5,79.5,105.5).s().p("EhHKAbxMB1ehYgMAY3Ag+Mh1eBYhg");
	this.shape_56.setTransform(135.475,215.75);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["rgba(0,0,0,0)","rgba(8,8,8,0.518)","rgba(2,4,5,0.553)","rgba(5,5,5,0.506)","rgba(0,0,0,0)"],[0,0.314,0.537,0.922,1],-79.9,-106,79.9,106).s().p("EhHRAbwMB1lhYnMAY+AhIMh1lBYng");
	this.shape_57.setTransform(134.675,215.475);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(0,0,0,0)","rgba(8,8,8,0.486)","rgba(2,4,5,0.518)","rgba(5,5,5,0.475)","rgba(0,0,0,0)"],[0,0.322,0.537,0.925,1],-80.3,-106.5,80.2,106.5).s().p("EhHZAbuMB1thYsMAZGAhRMh1uBYsg");
	this.shape_58.setTransform(133.85,215.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["rgba(0,0,0,0)","rgba(7,7,7,0.451)","rgba(2,3,4,0.482)","rgba(4,4,4,0.443)","rgba(0,0,0,0)"],[0,0.325,0.537,0.929,1],-80.6,-107,80.6,107).s().p("EhHgAbsMB11hYzMAZNAhcMh12BYzg");
	this.shape_59.setTransform(133,214.925);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["rgba(0,0,0,0)","rgba(7,7,7,0.42)","rgba(2,3,4,0.447)","rgba(4,4,4,0.412)","rgba(0,0,0,0)"],[0,0.333,0.537,0.933,1],-80.9,-107.5,81,107.4).s().p("EhHoAbqMB19hY5MAZUAhmMh19BY4g");
	this.shape_60.setTransform(132.175,214.65);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["rgba(0,0,0,0)","rgba(6,6,6,0.388)","rgba(2,3,4,0.416)","rgba(4,4,4,0.38)","rgba(0,0,0,0)"],[0,0.341,0.537,0.941,1],-81.3,-108,81.4,107.9).s().p("EhHwAboMB2FhY+MAZcAhvMh2GBY+g");
	this.shape_61.setTransform(131.375,214.375);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["rgba(0,0,0,0)","rgba(6,6,6,0.357)","rgba(2,3,3,0.38)","rgba(3,3,3,0.349)","rgba(0,0,0,0)"],[0,0.345,0.537,0.945,1],-81.7,-108.5,81.7,108.4).s().p("EhH3AbnMB2NhZFMAZiAh5Mh2NBZEg");
	this.shape_62.setTransform(130.525,214.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["rgba(0,0,0,0)","rgba(5,5,5,0.322)","rgba(1,2,3,0.345)","rgba(3,3,3,0.318)","rgba(0,0,0,0)"],[0,0.353,0.541,0.949,1],-82.1,-109,82.1,108.9).s().p("EhH/AblMB2VhZLMAZqAiDMh2VBZKg");
	this.shape_63.setTransform(129.7,213.85);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["rgba(0,0,0,0)","rgba(5,5,5,0.29)","rgba(1,2,3,0.31)","rgba(3,3,3,0.286)","rgba(0,0,0,0)"],[0,0.361,0.541,0.957,1],-82.4,-109.4,82.5,109.4).s().p("EhIHAbjMB2dhZRMAZyAiMMh2dBZRg");
	this.shape_64.setTransform(128.875,213.575);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["rgba(0,0,0,0)","rgba(4,4,4,0.259)","rgba(1,2,2,0.275)","rgba(2,2,2,0.255)","rgba(0,0,0,0)"],[0,0.365,0.541,0.961,1],-82.8,-109.9,82.8,109.9).s().p("EhIOAbgMB2lhZVMAZ4AiWMh2lBZVg");
	this.shape_65.setTransform(128.025,213.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["rgba(0,0,0,0)","rgba(4,4,4,0.227)","rgba(1,2,2,0.243)","rgba(2,2,2,0.22)","rgba(0,0,0,0)"],[0,0.373,0.541,0.965,1],-83.1,-110.4,83.2,110.4).s().p("EhIWAbfMB2thZcMAaAAifMh2tBZcg");
	this.shape_66.setTransform(127.225,213.025);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["rgba(0,0,0,0)","rgba(3,3,3,0.192)","rgba(1,1,2,0.208)","rgba(2,2,2,0.188)","rgba(0,0,0,0)"],[0,0.38,0.541,0.969,1],-83.6,-110.9,83.5,110.8).s().p("EhIdAbdMB21hZiMAaGAipMh21BZig");
	this.shape_67.setTransform(126.4,212.775);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["rgba(0,0,0,0)","rgba(3,3,3,0.161)","rgba(1,1,2,0.173)","rgba(2,2,2,0.157)","rgba(0,0,0,0)"],[0,0.388,0.541,0.976,1],-83.9,-111.4,83.9,111.3).s().p("EhIlAbbMB29hZoMAaOAizMh29BZog");
	this.shape_68.setTransform(125.575,212.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["rgba(0,0,0,0)","rgba(2,2,2,0.129)","rgba(1,1,1,0.137)","rgba(1,1,1,0.125)","rgba(0,0,0,0)"],[0,0.392,0.541,0.98,1],-84.2,-111.9,84.3,111.8).s().p("EhItAbZMB3FhZuMAaWAi9Mh3FBZug");
	this.shape_69.setTransform(124.725,212.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["rgba(0,0,0,0)","rgba(2,2,2,0.098)","rgba(0,1,1,0.102)","rgba(1,1,1,0.094)","rgba(0,0,0,0)"],[0,0.4,0.545,0.984,1],-84.6,-112.3,84.7,112.3).s().p("EhI1AbYMB3OhZ1MAacAjHMh3MBZ0g");
	this.shape_70.setTransform(123.9,211.925);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["rgba(0,0,0,0)","rgba(1,1,1,0.063)","rgba(0,0,1,0.071)","rgba(1,1,1,0.063)","rgba(0,0,0,0)"],[0,0.408,0.545,0.988,1],-85,-112.8,85,112.8).s().p("EhI8AbVMB3UhZ6MAalAjQMh3VBZ7g");
	this.shape_71.setTransform(123.1,211.675);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["rgba(0,0,0,0)","rgba(1,1,1,0.031)","rgba(0,0,0,0.035)","rgba(0,0,0,0.031)","rgba(0,0,0,0)"],[0,0.412,0.545,0.996,1],-85.3,-113.4,85.4,113.2).s().p("EhJEAbUMB3dhaBMAarAjaMh3cBaAg");
	this.shape_72.setTransform(122.25,211.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.42,0.545,1],-119.3,0,119.4,0).s().p("EgSpAxIMAAAhiPMAlTAAAMAAABiPg");
	this.shape_73.setTransform(121.4276,211.125,1.1934,1.5239,52.9994);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30}]}).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).wait(1));

	// Layer_3
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-43.5,0,43.5,0).s().p("AmySPMAAAgkdINlAAMAAAAkdg");
	this.shape_74.setTransform(546.0936,253.375,1.1574,1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("Aq1VeMAAAgq6IVrAAMAAAAq6g");
	this.shape_75.setTransform(803.0655,277,2.9758,1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("Aq1VeMAAAgq6IVrAAMAAAAq6g");
	this.shape_76.setTransform(-261.0114,277,3.7821,1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-43.5,0,43.5,0).s().p("AmySPMAAAgkdINlAAMAAAAkdg");
	this.shape_77.setTransform(49.5497,253.375,1.1384,1,0,0,180);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.8)"],[0,0.682],-53.3,0,53.3,0).s().p("AoUU/MAAAgp9IQpAAMAAAAp9g");
	this.shape_78.setTransform(146.1303,363.1955,1.3342,2.4015,102.4702);

	this.instance = new lib.sc4bg();
	this.instance.setTransform(0,169,0.7536,0.7536);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]}).wait(44));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-523.6,-191,1533.3000000000002,849.2);


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

	// Layer_2
	this.instance = new lib.sc3car();
	this.instance.setTransform(0,0,1.6262,1.6262);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,486.2,354.5);


(lib.sb_sc3_TJP = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgWBRQAZgQAMgfQAKgYADgoIgeAAIAAgTIAeAAIABgtIATAAIgBAtIAuAAIAAAKQgCBBgCAZQgCAbgFAGQgFAIgLABQgJABgTAAQAAgKgGgJIAaABQAFAAACgEQAHgIACheIgcAAQgDAsgKAcQgOAigbAUQgFgIgJgHgAhcA3IAPgDIAAiJIBFAAIAAB7IAJgDIACASIhbAWgAg8AxIAigHIAAgYIgiAAgAg8ABIAiAAIAAgaIgiAAgAg8gpIAiAAIAAgaIgiAAg");
	this.shape.setTransform(188.675,9.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA5BOIAOAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAgBIAAgZIgWAAIAAAsIgRAAIAAgsIgVAAIAAAtIgRAAIAAiAIAmAAIAAgRIgpAAIAAgRIApAAIAAgbIARAAIAAAbIAdAAQgJgJgOgKIALgJQAQALAIAJIgJAIIAMAAIAAARIgsAAIAAARIAoAAIAABsQAAAOgHADQgGADgQAAQgBgKgEgHgAAzAhIAWAAIAAgSIgWAAgAANAhIAVAAIAAgSIgVAAgAAzAAIAWAAIAAgRIgWAAgAANAAIAVAAIAAgRIgVAAgAg7BfIAAgiIgjAAIAAgRIAjAAIAAgPIgcAAIAAhHIAcAAIAAgOIghAAIAAgRIAhAAIAAgVIARAAIAAAVIAfAAIAAARIgfAAIAAAOIAdAAIAABHIgdAAIAAAPIAiAAIAAARIgiAAIAAAigAgsAPIARAAIAAgPIgRAAgAhJAPIAQAAIAAgPIgQAAgAgsgNIARAAIAAgQIgRAAgAhJgNIAQAAIAAgQIgQAAg");
	this.shape_1.setTransform(164.1,9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCBfIAAhJIgWANIgNgQQAegNAbgVIgwAAIAAgSIAoAAIAAgXIggAAIAAgQIAgAAIAAgWIATAAIAAAWIAaAAIAAAQIgaAAIAAAXIAIAAQAYgYAPgeIARAGQgNAagTAWIAhAAIAAASIgxAAIgVARIA7AAIAABcIgTAAIAAgIIgzAAIAAAJgAAPBHIAzAAIAAgUIgzAAgAAPAkIAzAAIAAgSIgzAAgAhfAxIAYgIIAAhEIgWAAIAAgSIAWAAIAAgvIATAAIAAAvIASAAIAAASIgSAAIAAA+IAUgIIADASIg7AXg");
	this.shape_2.setTransform(139.15,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgtBTQAcgPANgdQgcAIgDADIgFgPQAEgBAHgLQAHgKAIgOQgTABgDACQgDgIgCgGQADgBADgHQAKgPAEgUIAQAHQgGARgJAPIANgBIAFgNIANAHQgLAagNAXIANgEIACgJIAOADQgLA4gnAXQgEgIgHgEgAhcBNQAOABAEgBQAAAAABAAQABAAAAAAQABgBAAAAQAAgBAAgBIAAgxIgSAGIgEgSIAWgIIAAgoIgUAAIAAgSIAUAAIAAgpIAQAAIAAApIAQAAIAAASIgQAAIAAAjIAPgFIACARIgRAGIAAA4QABANgIAEQgFADgTAAQgCgHgEgKgAASBdIAAhXIgDAEIgLgKQAQgTAKghIAOADQgBAIgFALIAVAAQgDgIgFgIIANgFQAIAOACAHIATAAIAAAPIgYAAIAAARIAUAAIAAAOIgUAAIAAASIATAAIAAANIgTAAIAAAVIAaAAIAAAPIg9AAIAAAKgAAiBEIAUAAIAAgVIgUAAgAAiAiIAUAAIAAgSIgUAAgAAiACIAUAAIAAgRIgUAAgAgkg4IAAgQIA3AAQgDgIgFgHIAOgGQAFAIAGANIA7AAIAAAQg");
	this.shape_3.setTransform(114.2,9.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhhBOQALgPALgHQAIgRAFgXIgbAAQAKgWAGgWIgUAAIAAgSIAtAAIgQAuIALAAIAEAAIAJACQgHAfgKAWIAOAKQARAKApAAQApAAApgEQgFAOAAAFQgaADg0gBQgoABgUgLIgLgJQgGgDgDAAQgGAAgLAZgAAtAvIATAAQABAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBIAAgPIgfAAIAAAgIgSAAIAAggIgdAAIAAAhIgSAAIAAhpIA0AAIghgQIAMgKIAbALQALgGALgIIhPAAIAAgQIBhAAIAEAAIAMAJQgUASgUAKIAOAIIAaAAIAABXQAAAMgHADQgGAEgWAAQgBgJgFgHgAAlAOIAfAAIAAgOIgfAAgAgKAOIAdAAIAAgOIgdAAgAAlgOIAfAAIAAgPIgfAAgAgKgOIAdAAIAAgPIgdAAgAhThZIASgGIALAiIgSAHg");
	this.shape_4.setTransform(89.45,9.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhdBPQAygKAegWQgTgTgNgdIARgGQAKAYASASQATgRAKgaIAUAGQgNAegVAUQAgAWAvAIQgIAHgEAKQgxgJghgZQgfAXgyANQgDgKgJgIgAAWghIAPgLQAlAaAQASIgQAMQgRgTgjgagAhZgCQAegQAUgZIATAHQgWAcggATQgFgGgKgHgAhZgvIAAgTIBUAAQgEgJgJgPIASgGQAKARAFALIgGACIBQAAIAAATg");
	this.shape_5.setTransform(64.525,9.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhFBNIAAiZIBHAAQBEAAAAA4QAAAcgXAOQgSAMgbABIgiAAIAAAqgAggADIAgAAQAPABAHgEQAJgGAAgQQAAgXggAAIgfAAg");
	this.shape_6.setTransform(41.625,9.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgyBJIAAggQATAFASAAQAQAAAGgHQAFgGAAgPIAAhfIAlAAIAABmQAAAZgPAOQgPAOgcAAQgSAAgZgFg");
	this.shape_7.setTransform(21.65,10.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSBNIAAh6IgyAAIAAgfICJAAIAAAfIgzAAIAAB6g");
	this.shape_8.setTransform(6.925,9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198,19.4);


(lib.sb_sc3_safe = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("AhDCEQAlgPASggQANgZALg1QgTADgJAEQgBgPgFgPQAKgCARgXQAJgJAXgiIgsAAIAFgdIA7AAQAQgZAIgRIAhAJIgVAhIBTAAIgFAdIhiAAQgaAkgXAbIBYgIIgOgiIAbgLQAaA0AGAdIgeAOQgBgJgFgQIgVACIgUBxQgBAHABACQABACAFAAIATAAQAFAAADgIQADgIAGgdQAIAHAQAEQgIAlgJAMQgJANgRAAIgbAAQgTAAgGgJQgFgIAEgWIAUhvIgbAEQgOBAgRAeQgVAngsAUQgCgOgMgLgAivCMQAPgcANgyIAYAFQgQA4gOAaIgWgJgAhvBCIAYgGQABApgEAeIgZAFQADgaABgsgAhIA7IAWgIQAHAfABAbIgYAIQAAgOgGgsgAiYAVQAKgCATgUQAJgHAWgaQglAFgHADQgCgPgDgNQAHgCAPgRQAJgJAQgWQAUgcANgYIAaAMQghA0giAkIAegCQAVgaAPgYIAXARQgsA8gwAuIAugHQgBgKgFgSIAYgIQALAkABAeIgaAJIgBgQQhSAOgJAFQgBgQgEgNg");
	this.shape.setTransform(217.825,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AhFB9QAgABAMgBQAHgBABgFIAMhIIhTAIQgTACgJADQAAgHgEgXQASgCAfgOQAbgMAsgWQhNAGgKAEQAAgRgEgNQANgCARgJQAhgOAogeQg/AOgyAHQABgKgFgQQCPgXBNgfIATAYQgtASg6ANIASAMQgjAYglAUIBIgEQAbgQAPgLIAUAVQhEArhIAfIB6gIIgWgcIAcgNQAlApARAgIgeARQgDgIgKgQIhTAGIgNBMQgFAYgPAGQgNAFgrAAQAAgQgHgOgAiYB6QAugYAkglIAdALQgmApgyAeQgLgOgMgHgAAvBKIAcgRQAsAjAVAdIgeATQgRgagugog");
	this.shape_1.setTransform(176.25,15.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AilCSIAFgcIB8AAIAJgyIhbAAIAFgcIBbAAIAIgtIhMAAIAFgbQgeATgSAIQgFgNgLgNQAggMAlgYQAkgXAegZIg2AAIAFgeIBrAAQARAiAhAeQAhAfAnAQQgRAOgJAOQgVgLgTgOIgEAaIhOAAIgIAtIBcAAIgFAcIhcAAIgHAyIB/AAIgFAcgAhUggIC3AAQgvgkgegvQgvAug7Alg");
	this.shape_2.setTransform(137.125,15.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AiiB9QBYgJAwgcQgkgQgxgRQATgUASgZIhFAAIAFgdIBXAAQAVgfAOgZIAhAHQgPAbgPAWIBHAAQAHgSAEgOIAmADIgLAdIA6AAIgFAdIhCAAQgVArgbAaQA5AbAgAWIgcAdQgggag6gbQg0AlhmAQQgDgQgLgQgAg6ApQAoAPAWAJQAYgVASgiIhQAAgAB1gtIAHgpIjSAAIgIApIggAAIANhHIB5AAIgIgfIAkgJIANAoIByAAIgNBHg");
	this.shape_3.setTransform(96.4,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AiGCcIAZiOQgTARgUAOQgHgQgKgLQAegSAegbQAfgbAVgcIAcALQgUAagaAaIgfCvgAgJB7QAmABALgBQAIAAACgGIAXiBIhqAAIAFgeIC7AAIgGAeIgwAAIgXCBQgDANgFAIQgFAHgKAEQgPAFgxAAQABgPgFgQgAiPhSQAYgOAZgUQAZgVAQgSIAbANQgtAwg7AlQgFgNgIgMgAgDhpIAFgeICkAAIgGAeg");
	this.shape_4.setTransform(56.375,15.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AiECcIAZiMIDSAAIgYCLIggAAIACgLIiUAAIgCAMgAhfB3ICVAAIAEgcIiUAAgAhWBEICUAAIAFgbIiUAAgAicAEQA1gSAWgjIg+AAIAEgZIAYAAIgWgOQAdgZAUgqIAbAGIgMAWIBXAAIgEAZIguAAIgGAcIA3AAIgEAZIg8AAIgBADQAJAFATANIAZARIgZAUQgLgKgfgYQgYAdgyAVQgGgOgKgHgAhyhKIArAAIAFgcIgXAAQgMAQgNAMgAAOgGIAVh5IB6AAIgVB5gAAwgiIA+AAIALhBIg+AAg");
	this.shape_5.setTransform(15.7,15.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,235.5,31.5);


(lib.sb_sc3_pro = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("Ah7DfIA/ljIiTAAIAQhaIGPAAIgQBaIiTAAIg+Fjg");
	this.shape.setTransform(320.95,23.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AjFCxQg/g+AVh2QAUhuBYg+QBNg3BfAAQBfAAA6A3QBCA/gTBtQgVB2hVA+QhKA2hlAAQhnAAg2g2gAhJhlQgsAkgLA/QgNBGAjAmQAeAgA1AAQA0AAAoggQAwgmANhGQALg/gggkQgegjg4AAQg2AAgqAjg");
	this.shape_1.setTransform(268.7333,23.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AilDfIBOm9IBqAAIg+FjIDRAAIgQBag");
	this.shape_2.setTransform(221.2,23.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AhcDfIBPm9IBpAAIhOG9g");
	this.shape_3.setTransform(190.15,23.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AjjDfIBOm9IDOAAQDEAAgdChQgOBUhIArQg7AihOAAIhkAAIgWB7gAhUAKIBbAAQAtAAAYgMQAegRAIgsQAHgngZgRQgUgNgtAAIhZAAg");
	this.shape_4.setTransform(153.0563,23.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AioCJQgwgwAPhZQAQhXBBgxQA+gvBbAAQBbAAAuAvQAvAygPBWQgQBYhAAxQg+AvhbAAQhcAAgtgvgAg3hHQgeAbgIAsQgHArAVAcQAWAbArAAQAoAAAfgcQAegbAHgrQAIgtgWgaQgVgagsAAQgoAAgeAag");
	this.shape_5.setTransform(102.5265,27.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AiUC0IA+lfIBTAAIAEAmQBIgsBMgCIgRBjQhGAAhDAjIgoDhg");
	this.shape_6.setTransform(65.275,27.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AjjDfIBOm9IDOAAQDEAAgdChQgOBUhIArQg7AihOAAIhkAAIgWB7gAhUAKIBbAAQAuAAAXgMQAegRAIgsQAHgngZgRQgUgNgtAAIhZAAg");
	this.shape_7.setTransform(22.8063,23.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,341.8,46.3);


(lib.sb_sc3_LKA = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgWBRQAZgQAMgfQAKgYACgoIgdAAIAAgTIAeAAIAAgtIATAAIAAAtIAtAAIAAAKQgBBBgCAZQgCAbgFAGQgFAIgLABQgJABgTAAQgBgLgEgIIAYABQAGAAACgEQAHgHAChfIgcAAQgDAsgKAcQgNAigcAUQgFgIgJgHgAhbA3IAOgDIAAiJIBFAAIAAB7IAJgDIACASIhbAWgAg8AxIAigHIAAgYIgiAAgAg8ABIAiAAIAAgaIgiAAgAg8gpIAiAAIAAgaIgiAAg");
	this.shape.setTransform(192.6,9.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA5BOIANAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAgBIAAgZIgWAAIAAAsIgRAAIAAgsIgVAAIAAAtIgRAAIAAiAIAmAAIAAgRIgpAAIAAgRIApAAIAAgbIARAAIAAAbIAdAAQgHgIgQgLIALgJQAPAKAJAKIgJAIIAMAAIAAARIgsAAIAAARIAoAAIAABsQAAANgHAEQgGADgQAAQgBgJgEgIgAAzAhIAWAAIAAgSIgWAAgAANAhIAVAAIAAgSIgVAAgAAzAAIAWAAIAAgRIgWAAgAANAAIAVAAIAAgRIgVAAgAg7BfIAAgiIgjAAIAAgRIAjAAIAAgPIgcAAIAAhHIAcAAIAAgOIggAAIAAgRIAgAAIAAgVIARAAIAAAVIAfAAIAAARIgfAAIAAAOIAdAAIAABHIgdAAIAAAPIAiAAIAAARIgiAAIAAAigAgsAPIAQAAIAAgPIgQAAgAhJAPIAQAAIAAgPIgQAAgAgsgNIAQAAIAAgQIgQAAgAhJgNIAQAAIAAgQIgQAAg");
	this.shape_1.setTransform(168.025,9.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYBNQATABAGgBQAEAAAAgEIAAgwIhNAAIAAgSIBNAAIAAgPIASAAIAAAPIAYAAIAAASIgYAAIAAAwQAAAQgJADQgIADgYABQgBgKgFgJgAhYBMIASAAQABAAABgBQAAAAABAAQAAgBABAAQAAgBAAgBIAAgxIgZAIIgEgTIAdgIIAAgoIgaAAIAAgTIAaAAIAAgnIARAAIAAAnIAUAAIAAATIgUAAIAAAjIASgFIADARIgVAGIAAA3QAAAOgHADQgHAEgUAAQgBgKgEgHgAgLAlIAPgHIAXAjIgQAJQgKgSgMgTgAgQgMIAAgSIAqAAIAAgWIg0AAIAAgRIA0AAIAAgYIASAAIAAAYIA0AAIAAARIg0AAIAAAWIArAAIAAASg");
	this.shape_2.setTransform(143.025,9.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDBgIAAhyIgLAPIgJgRQAXgdAMgsIASAFQgFAQgHAPIAdAAQgEgNgIgQIAQgHQALATACAJIgQAIIAsAAIAAARIgiAAIAAAWIAeAAIAAASIgeAAIAAAWIAfAAIAAARIgfAAIAAAYIAlAAIAAASIhSAAIAAAPgAANA/IAcAAIAAgYIgcAAgAANAWIAcAAIAAgWIgcAAgAANgSIAcAAIAAgWIgcAAgAheBWQAGgQADggIAPADQgDAcgGAVgAg+AoIANgDQAFAZABASIgPAEQABgMgFgggAgoAjIAOgDQAGARAFAWIgNAFQgDgRgJgYgAhcAPQAFgCAKgNQAHgFAJgPQgWACgFACIgFgPQAEgBAHgLQAQgVAKgeIAQAGQgNAfgRAWIATgBQAJgOAHgPIAOAJQgTAlgaAdIAggEQgEgKgEgIIANgFQALAWAEASIgOAFIgDgJQgyAIgFAEg");
	this.shape_3.setTransform(118.15,9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhhBOQALgPALgHQAIgRAFgXIgbAAIARgsIgVAAIAAgSIAtAAIgQAuIAMAAIADAAIAJACQgIAigJAUIAOAJQARAKApAAQApAAApgEQgFAOAAAFQgaADg0AAQgoAAgUgLIgLgIQgGgEgDAAQgFAAgMAagAgVA6IAAhhIAfAAIAEgOIg0AAIAAgQIAfAAQgEgIgHgLIAPgGQAJALAEALIgJADIAkAAQAKgOAEgMIATAGIgOAUIAkAAIAAAQIg6AAIgGAOIAwAAIAABhgAgDAsIA8AAIAAgPIg8AAgAgDAQIA8AAIAAgPIg8AAgAgDgKIA8AAIAAgPIg8AAgAhShZIARgFIALAhIgSAHg");
	this.shape_4.setTransform(93.35,9.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKBgIAAgeIhSAAIAAgRIBSAAIAAgPIg9AAIAAhQIA9AAIAAgNIhMAAIAAgRIBMAAIAAgSIATAAIAAASIBNAAIAAARIhNAAIAAANIA/AAIAABQIg/AAIAAAPIBUAAIAAARIhUAAIAAAegAAJASIArAAIAAgRIgrAAgAg0ASIAqAAIAAgRIgqAAgAAJgNIArAAIAAgRIgrAAgAg0gNIAqAAIAAgRIgqAAg");
	this.shape_5.setTransform(68.45,9.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAsBNIgJgcIhIAAIgIAcIgnAAQAbhWAghDIAyAAQAiBGAaBTgAgbASIA0AAIgahDQgMAcgOAng");
	this.shape_6.setTransform(45.175,9.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaBNQgdgpgfghQATgiAkgtIAxAAQgsAygSAaQASARAYAdIAZAfgAhKBNIAAiZIAlAAIAACZg");
	this.shape_7.setTransform(24.975,9.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag2BNIAAiZIAlAAIAAB6IBIAAIAAAfg");
	this.shape_8.setTransform(5.475,9.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,201.9,19.2);


(lib.sb_sc3_ICC = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgeBRQAVgJAIgTQAFgPABgiQgNADgDACIgHgSQAGgCAIgOQAGgIAIgSIgaAAIAAgSIAjAAIAKgaIAWAGIgJAUIAyAAIAAASIg8AAQgKASgNAUIA1gFIgMgUIAPgHQAVAeAIATIgRAIIgHgPIgMACIAABFQAAAEABABQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAIALAAQADAAABgFIACgXQAFAFALADQgBAWgEAHQgFAIgKAAIgQAAQgMAAgEgFQgEgFAAgOIAAhEIgQACQgCAogHASQgJAYgYANQgEgJgIgHgAhfBWQAFgPADghIAQADQgEAfgGATgAhAAoIAOgDQAFAXABAUIgPADQgBgRgEgagAgpAkIANgFQAHASAEASIgOAFQgDgPgHgVgAheANQAFgBALgMIAOgUQgWACgDACIgGgRQAEgBAHgKQAPgVALgfIASAIQgNAdgTAZIATgBIAQgfIAQALQgVAlgYAbIAcgEIgHgRIANgFQAKAUAFAUIgPAGIgCgKQgvAIgHADQgCgJgEgIg");
	this.shape.setTransform(284.875,9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmBMIAbABQAFgBAAgDIAAgsQg6AEgKAEQgBgGgEgMQAMgDAQgIQARgHAXgNQguAEgGACIgGgSQAFgBAMgGQAYgNARgOQghAIgjAFQgCgJgDgHQBWgOAqgTIAPAPQgaAKghAJIALAHQgPAOgXAMIArgCQAOgJAIgHIAPANQgmAbgnASIBJgFIgQgRIAPgIQAcAZAOAUIgRAKIgKgPIgzAEIAAAvQAAAOgKAEQgIADgYAAQgCgJgGgKgAhZBLQAZgOASgYIAUAHQgTAZgbATQgIgIgJgFgAAbAtIAQgKQAjAZAMAOIgRAMQgPgSgfgXg");
	this.shape_1.setTransform(259.925,9.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhhBNQAJgLAKgIIgBAAQANgPAIgbIgeAAQAJgSAKgaIgYAAIAAgRIAxAAIgSAtIAKAAIADAAIALAEQgFAegNAWIAOAJQARAKAnAAQAtAAAngFQgFAKgBAKQgfACgwAAQgoAAgTgKQgQgMgEAAQgGAAgMAagAAQBCIAAgsQgSAagaANQgFgIgHgHQAfgNARgZIglAAIAAg0IAtAAIAAgOIg0AAIAAgQIA0AAIAAgUIATAAIAAAUIA4AAIAAAQIg4AAIAAAOIAwAAIAAA0IgqAAQAeATASASIgMANQgOgQgcgTIAAArgAAjgGIAdAAIAAgXIgdAAgAgMgGIAcAAIAAgXIgcAAgAhThZIAQgGIARAiIgRAHg");
	this.shape_2.setTransform(235.125,9.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhfBUQAfgXAHg9IAUADIgGAaQALAaAXALIAAhOIgwAAIAAgSIB0AAIAAASIgxAAIAAAdIA8AAIAAASIg8AAIAAAkQAMACASAAIA4AAQgHALAAAJIgzAAQghAAgTgIQgWgJgOgXQgJAagVARQgCgEgNgIgABEgXIAAgeIiGAAIAAAeIgUAAIAAgwIBPAAQgDgJgGgKIATgFQAIAPAEAJIBIAAIAAAwg");
	this.shape_3.setTransform(210.15,9.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAvA/QgNAQgTAOQgJgIgFgEQAWgOATgaQgHgfgCg5IhEAAIAAgSIBDAAIAAgdIASAAIAAAdIAcAAQgHgIgOgMIALgJQARAMAHAJIgJAIIAKAAIAAASIgqAAQABAfAEAgQAKgVAGgZIARADQgJAogTAfQAGAhAKAAQAFAAABgcQAGAHAHADQgCAVgEAIQgFAHgLAAQgQAAgLgggAgpA2QAigHAlgKIACAQIhEAUgAhfAxIAWgKIAAhBIgVAAIAAgTIAVAAIAAgvIASAAIAAAvIARAAIAAATIgRAAIAAA5IARgJIAFARIg3AegAgcAeIAAg8IAzAAIAAA8gAgOAPIAVAAIAAgeIgVAAg");
	this.shape_4.setTransform(185.275,9.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhhBNQAJgLAJgIIAAAAQANgPAIgbIgeAAIATgsIgYAAIAAgRIAwAAQgIAZgKAUIALAAIADAAIALAEQgFAcgNAYIANAJQASAKAnAAQAtAAAngFQgGAMAAAIQggACgvAAQgoAAgTgKQgQgMgEAAQgFAAgNAagAAQBCIAAgsQgUAbgYAMQgGgJgGgGQAegNARgZIgkAAIAAg0IAtAAIAAgOIg1AAIAAgQIA1AAIAAgUIASAAIAAAUIA5AAIAAAQIg5AAIAAAOIAxAAIAAA0IgqAAQAeATASASIgMANQgOgQgdgTIAAArgAAigGIAeAAIAAgXIgeAAgAgLgGIAbAAIAAgXIgbAAgAhThZIARgGIAQAiIgRAHg");
	this.shape_5.setTransform(160.4,9.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhWBaIAAgSIBMAAIAAgeIg4AAIAAgRIA4AAIAAgbIgvAAIAAgRQgNAKgOAGQgEgIgIgHQAngRAjgkIghAAIAAgSIBBAAQAOAVAYATQAXASAaAKQgJAKgEAIQgSgJgJgHIAAARIgwAAIAAAbIA5AAIAAARIg5AAIAAAeIBPAAIAAASgAg4gTIBwAAQghgWgXgeQgXAcghAYg");
	this.shape_6.setTransform(135.475,9.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhcBbIAAgSIBUAAIAAgWIg/AAIAAgSIA/AAIAAgQIgQAAIAAgpIgXAAQgGAfgaAPQgEgGgJgIQAVgLAGgVIgYAAIAAgSIAZAAIAAgYIgSAAIAAgRIBcAAIAAARIgQAAIAAAYIAVAAIAAASIgVAAIAAAmIARAAIAAATIA9AAIAAASIg9AAIAAAWIBSAAIAAASgAgugqIAWAAIAAgYIgWAAgAAkACIAYAAQAEABAAgDIAAhaIASAAIAABaQAAANgJAEQgGACgZAAQgDgKgDgHgAAagKIAAhGIARAAIAABGg");
	this.shape_7.setTransform(110.525,9.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNBeQgSABgHgFQgGgFAAgNIAAgZIATAAIAAAZQAAADADABQACABAIAAIAjAAQAGAAACgDQACgCABgMQAGAEALACQgCARgFAGQgGAGgOgBgAhdBSQAPgNAJgWIARAIQgNAagMALgAAsA3IAQgJQAXAUALAQIgRAJQgIgOgZgWgAgQAvIAKgIIhFAAIAAgMIB+AAIAAgLIiPAAIAAgMICPAAIAAgJIh9AAIAAgMICQAAIAAAVIAWAAIAAAMIgWAAIAAAXIhGAAQAQALAHAIIgNALQgGgGgUgQgAAggVIAAgJIghAAIAAgMIAhAAIAAgJIgcAAIAAgMIAcAAIAAgIIggAAIAAgNIAgAAIAAgKIASAAIAAAKIAiAAIAAANIgiAAIAAAIIAfAAIAAAMIgfAAIAAAJIAmAAIAAAMIgmAAIAAAJgAg3gVIAAgKIgjAAIAAgLIAjAAIAAgJIgbAAIAAgMIAbAAIAAgIIggAAIAAgNIAgAAIAAgKIASAAIAAAKIAeAAIAAANIgeAAIAAAIIAbAAIAAAMIgbAAIAAAJIAgAAIAAALIggAAIAAAKg");
	this.shape_8.setTransform(85.725,9.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA0BgIAAgIIhbAAIAAAIIgTAAIAAhWICCAAIAABWgAgnBJIBbAAIAAgRIhbAAgAgnAqIBbAAIAAgRIhbAAgAhYADQAfgMAIgUIglAAIAAgQIAOAAIgPgJQAQgPAHgZIARADIgFAOIA1AAIAAAPIgbAAIAAARIAhAAIAAAQIglAAIAAABQATAKARAMIgNAMIgdgVQgNASgbAMQgFgIgHgEgAhHgtIAaAAIABgRIgPAAQgGAKgGAHgAAOgDIAAhKIBMAAIAABKgAAggUIAmAAIAAgpIgmAAg");
	this.shape_9.setTransform(60.1,9.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgpA9QgbgVABgoQAAgmAbgWQAagTAkAAQAZAAAVAHIAAAgQgWgHgVAAQgaAAgNAMQgPAMAAAXQAAAXAQANQAOALAXAAQATABAZgIIAAAiQgaAGgUAAQgnAAgYgTg");
	this.shape_10.setTransform(37.75,9.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpA9QgbgVAAgoQAAgmAcgWQAZgTAlAAQAZAAAWAHIAAAgQgWgHgWAAQg2AAAAAvQAAAXAQANQAOALAYAAQASABAagIIAAAiQgbAGgVAAQgmAAgYgTg");
	this.shape_11.setTransform(17.9,9.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRBNIAAiZIAkAAIAACZg");
	this.shape_12.setTransform(1.85,9.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,294.5,19.4);


(lib.an_sc3_mask = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// MergedLayer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AUZGzQAmgPASggQAOgZALg1QgUACgKAFQgBgQgEgPQAJgCATgXQAIgJAYgiIgtAAIAFgdIA7AAQAQgZAIgQIAhAIIgUAhIBTAAIgFAdIhjAAQgZAkgXAbIBXgIIgNgiIAbgLQAaA0AGAeIgeAOQgBgJgGgRIgUACIgUByQgCAHABACQABACAFAAIATAAQAGAAADgIQADgIAFgdQAJAHAQAEQgIAlgJAMQgJANgSAAIgaAAQgUAAgFgJQgFgIAEgWIAThvIgaAEQgOBAgRAeQgWAngsAUQgDgOgMgLgAgDGrQBXgKAwgbQgjgQgygRQATgUATgZIhGAAIAFgeIBXAAQAVgfAOgZIAjAHQgQAbgPAWIBIAAQAHgSADgOIAmADIgKAdIA5AAIgFAeIhCAAQgVAqgbAbQA5AbAhAWIgdAdQgggag6gbQg1AlhmAQQgDgQgKgQgABkFXQAoAPAXAJQAYgVASgiIhRAAgAl3HLIAZiNQgTAQgUAOQgHgQgKgLQAegSAegcQAfgbAVgcIAcALQgUAbgaAZIgfCwgAsMHKIAZiMIDUAAIgZCLIggAAIACgLIiVAAIgCAMgArmGlICVAAIAEgcIiVAAgArdFyICUAAIAFgaIiVAAgAN4GrQAfACANgCQAHAAABgFIAMhJIhTAIQgTACgJAEQAAgIgEgWQARgDAggNQAagMAtgXQhNAFgKAFQAAgSgEgMQAMgCARgKQAigOApgdQhAAOgyAHQAAgLgEgPQCQgYBNgeIASAYQgsARg6ANIASANQgjAYgmATIBJgDQAagQAQgLIAUAUQhEArhJAhIB7gIIgWgeIAcgNQAlAqARAgIgeARQgDgHgKgRIhTAGIgNBNQgFAXgRAHQgNAEgrAAQAAgQgGgOgAj6GqQAnABALgBQAIAAACgGIAXiCIhrAAIAFgeIC8AAIgGAeIgwAAIgXCCQgDAOgFAHQgFAIgKADQgPAGgygBQABgPgFgQgAStG7QAQgcAMgyIAZAFQgQA4gPAaIgWgJgAGRHCIAFgdIB8AAIAJgxIhbAAIAFgcIBbAAIAIguIhMAAIAFgbQgfASgSAJQgFgNgKgNQAggNAlgXQAkgXAdgaIg1AAIAFgeIBsAAQAQAiAiAeQAhAfAmAQQgQAPgKAOQgVgLgSgOIgFAaIhNAAIgIAuIBcAAIgFAcIhcAAIgJAxICAAAIgFAdgAHhEPIC4AAQgvgkgdgwQgwAug8AmgAMlGpQAugYAjgmIAeALQgnApgxAeQgLgOgMgGgAPtF4IAcgQQAsAjAVAdIgfATQgQgagugpgATuFxIAXgGQABApgEAeIgZAFQAEgaABgsgAUUFqIAXgIQAGAfABAbIgXAIQgBgOgGgsgATFFEQAKgCATgVQAIgHAWgaQgkAFgIADQgBgPgDgNQAHgBAPgSQAIgJAQgWQAUgcANgYIAbAMQgiA0ghAkIAegCQAUgaAPgYIAYARQgsA8gxAvIAvgHQgBgLgFgSIAXgIQALAlABAeIgZAJIgBgQQhTAOgJAFQgBgQgDgNgAskEyQA2gTAVgiIg+AAIAFgZIAXAAIgWgPQAegZATgpIAbAGIgMAWIBYAAIgEAZIgvAAIgFAcIA3AAIgEAZIg8AAIgCACQAJAFAUANIAZASIgaAUQgLgLgegYQgZAegxAVQgHgNgKgIgAr6DkIArAAIAFgcIgXAAQgMAPgNANgAp5EnIAVh4IB6AAIgVB4gApXELIA+AAIAMhBIg+AAgAEUEAIAIgpIjUAAIgIApIgfAAIAMhHIB7AAIgJgfIAkgJIANAoIByAAIgMBHgAmADcQAYgOAZgUQAZgVAQgRIAbAMQgtAwg7AmQgFgOgIgMgAj0DGIAGgfICkAAIgGAfgAMMgyQg+g/AVh3QAThtBYg/QBNg3BgAAQBgAAA6A3QBCA/gUBtQgVB3hVA/QhJA1hnAAQhmAAg3g1gAOJlKQgsAlgLA+QgNBHAjAmQAdAgA1AAQA1AAApggQAwgmAMhHQALg+ggglQgdgig4gBQg3ABgqAigAtUgrQgwgxAQhZQAQhXBBgyQA+guBcgBQBbABAtAuQAwAygQBXQgPBZhBAxQg+AthbABQhcAAgugugArij9QgeAbgIAtQgIAsAWAbQAVAbArAAQApAAAfgcQAegbAIgrQAIgugWgaQgWgZgrAAQgpAAgeAZgAVhgFIA/lkIiTAAIAQhaIGQAAIgQBaIiTAAIg/FkgAFRgFIBPm+IBqAAIg/FlIDSAAIgQBZgABkgFIBPm+IBqAAIhOG+gAmVgFIBOm+IDPAAQDDAAgdChQgOBWhHAqQg7AjhOgBIhlAAIgWB7gAkGjaIBcAAQAtAAAYgNQAegRAIgsQAHgngZgQQgUgOgtAAIhaAAgAy0gFIA+lfIBTAAIAFAlQBIgrBMgDIgRBkQhGgBhEAkIgoDhgA6sgFIBPm+IDPAAQDDAAgcChQgPBWhIAqQg6AjhOgBIhmAAIgWB7gA4cjaIBcAAQAtAAAYgNQAegRAHgsQAHgngYgQQgUgOguAAIhaAAg");
	mask.setTransform(170.875,46);

	// Layer_9
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.478,1],-89.9,0,89.9,0).s().p("AuCYuMAAAgxbIcFAAMAAAAxbg");
	this.shape.setTransform(-102.4016,-26.9384,1,1.2913,44.9995);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.478,1],-63.5,-63.5,63.6,63.6).s().p("EggfAMpMAtIgtIIT3T3MgtIAtIg");
	this.shape_1.setTransform(-67.725,-19.825);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.478,1],-63.5,-63.6,63.6,63.5).s().p("EggfAMpMAtIgtIIT3T3MgtIAtIg");
	this.shape_2.setTransform(140.375,22.725);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{x:-102.4016,y:-26.9384}}]},16).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape,p:{x:487.2484,y:93.6116}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(17).to({_off:false},0).wait(1).to({x:-33.075,y:-12.725},0).wait(1).to({x:1.625,y:-5.675},0).wait(1).to({x:36.325,y:1.425},0).wait(1).to({x:70.975,y:8.525},0).wait(1).to({x:105.675,y:15.625},0).to({_off:true},1).wait(2).to({_off:false,x:209.725,y:36.875},0).wait(1).to({x:244.425,y:43.975},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(23).to({_off:false},0).wait(1).to({x:175.075,y:29.825},0).to({_off:true},1).wait(2).to({_off:false,x:279.125,y:51.075},0).wait(1).to({x:313.825,y:58.175},0).wait(1).to({x:348.475,y:65.275},0).wait(1).to({x:383.175,y:72.375},0).wait(1).to({x:417.875,y:79.425},0).wait(1).to({x:452.525,y:86.525},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,341.8,92);


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

	// Layer_2
	this.instance = new lib.sc2car();
	this.instance.setTransform(0,0,1.7721,1.7721);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,531.7,281.8);


(lib.sb_sc2_vc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AiRB3QgqgqAOhNQANhLA5grQA1goBPAAQBPAAAnAoQApArgNBLQgOBMg4ArQg1AohOAAQhQAAgngogAgvg+QgaAXgHAnQgHAlATAYQATAYAlAAQAjAAAagZQAagYAGgkQAIgngUgXQgSgWgmAAQgiAAgaAWg");
	this.shape.setTransform(271.2908,25.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhrC0IgLAWIhBAAIBImaIBZAAIgVB3QAvgUApAAQBGAAAmAmQAqAqgOBMQgNBLg5AtQg1AqhBAAQg4AAgsgdgAg3gQIgYCCQAcAVApAAQAjAAAbgWQAdgXAHgrQAIgpgTgUQgSgVgmAAQgoAAgkATg");
	this.shape_1.setTransform(228.6485,20.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiACcIA2kwIBIAAIADAhQBAgnBAgBIgPBWQg+gBg4AfIgiDDg");
	this.shape_2.setTransform(194.85,25.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AicCCQgageAMhDIAhi8IBaAAIggCxQgFAeAJAOQAKAQAdAAQAoAAAtgeIAljPIBZAAIg1EwIhJAAIgDggQhDAng5AAQg2AAgYgag");
	this.shape_3.setTransform(159.0987,26.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhqDBIA2kzIh/AAIAOhOIFZAAIgOBOIh/AAIg1Ezg");
	this.shape_4.setTransform(124.525,21.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah6ArIAPhVIDmAAIgPBVg");
	this.shape_5.setTransform(92.225,23.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiRCZQg5g0AShlQARhhBPg2QBHgwBdAAQA9AAA0ARIgOBSQg1gSg0AAQhDAAgoAfQgpAfgKA4QgKA7AiAgQAfAdA7gBQAvgBBDgSIgQBXQg/ANg4AAQhjAAgzgvg");
	this.shape_6.setTransform(60.784,21.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiIDBQgZhWgThlQgThmgIhgIBjAAQAFA0AKBBQATCCATBBQAqhEA8h4QAlhKAYgyIBkAAQhpDdhpCkg");
	this.shape_7.setTransform(20.85,21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,289.1,41.7);


(lib.sb_sc2_kg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ACRCDIAhicQAEgRAAgKQAAgmgxAAQgaAAgbALQgWAJgPAMQgBANgDAOIghCiIgsAAIAgicQAEgSAAgJQAAgmgwAAQgaAAgcAMQgXAJgPAMIgoC8IgtAAIA2kAIAeAAIAFAaQARgMAZgJQAegKAeAAQA3AAASAhQASgNAbgJQAigLAfAAQAnAAAUAOQAWAQAAAlQAAALgEAVIgiCig");
	this.shape.setTransform(334.675,34.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhWAVIAJgpICkAAIgJApg");
	this.shape_1.setTransform(297.475,32.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhwCxQgYgHgRgJIAKgsQASAKAZAHQAeAKAYgBQAjAAAagPQAigSAIglIACgKQggAVgrAAQgwAAgegYQgkgdAAg0QAAhLA0gvQAugpA7AAQAZAAAZAIQAVAHAMAJIANgSIAfAAIg2EEQgLA0gqAbQgnAXg8AAQgdAAgfgHgAgxhvQgkAhAAA5QAAAhAXASQATAPAgAAQAVAAAVgHQAWgIAPgNIAdiKQgIgIgRgGQgVgHgYAAQgsAAggAfg");
	this.shape_2.setTransform(267.1,39.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AArCtQgshMg3g8QBVhXAughIBAAAQhCAyhJBGQAsA1A3BTgAiKCtIBHlZIAuAAIhIFZg");
	this.shape_3.setTransform(237.575,30.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhrBhQBPgtAHhaIhOAAIAAgYIBPAAIAAg1IAYAAIAAA1IBnAAIAAALQgFBOgEAfQgFAhgHAKQgKAKgOABQgJABgfgBQgBgNgHgLQARABAVAAQAIAAADgDQAHgGAFgdQAEgcADg9IhPAAQgGBohWAyQgFgJgNgKg");
	this.shape_4.setTransform(11.3,41.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhsBeQATABAGgBQAEAAAAgEIAAg+IgfAJIgGgXIAlgJIAAgwIghAAIAAgXIAhAAIAAgwIAXAAIAAAwIAdAAIAAAXIgdAAIAAArIAcgHIAAgGIAiAAIAEg/IgcAAIAAgWIBxAAIgCBVIAYAAIAAAVIgZAAIgEBNIAdAAIAAAVIiVAAIAAgVIAeAAIAHhNIgeAAIABAEIggAKIAABEQAAARgKAFQgIADgbAAQgCgJgFgMgAAUBVIAuAAIAEhNIgrAAIgHBNgAAdgNIAqAAIABg/IgnAAg");
	this.shape_5.setTransform(11.725,11.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,357.5,58.3);


(lib.sb_sc2_hp = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AiSCuIBIlVIAcAAIAEAUQANgKAWgHQAXgJAaAAQAuAAAcAbQAfAdAAAzQAABGgvAqQgsAmg9AAQgVAAgXgIQgSgGgNgIIgXBwgAgNh8QgUAIgNALIgaB8QAIAKARAGQAUAJAZAAQAsAAAeggQAegeAAgvQAAgfgTgTQgUgSgeAAQgXAAgXAJg");
	this.shape.setTransform(246.25,42.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA1CmIAfiXQAEgQAAgJQAAgkguAAQgaAAgbALQgYAIgPAMIgmC1IgrAAIBFlLIArAAIgWBrQAQgKAYgIQAcgJAZAAQBQAAAABAQAAAIgDAWIghCdg");
	this.shape_1.setTransform(214.1,33.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhqBhQAsgaAWgnQAQgeADgoIhOAAIAAgYIBQAAIAAg1IAXAAIAAA1IBnAAIAAAMQgEBMgFAgQgEAigIAIQgJALgPACQgJABgfgBQgBgOgHgLQARABAVAAQAIABAEgEQAMgLAGhxIhPAAQgDAugRAiQgXAtgwAdQgGgJgMgKg");
	this.shape_2.setTransform(11.225,40.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAyBuQgBgMgFgKIAaABQAGAAADgDQAGgFAEgzIioAAIAAiLICvAAIAAAVIhNAAIAAAUIBFAAIAAATIhFAAIAAAUIBFAAIAAAUIhFAAIAAATIBeAAIAAAKQgDApgDAQQgDATgFAFQgGAHgLACIgOAAIgSAAgAg4AKIA0AAIAAgTIg0AAgAg4gdIA0AAIAAgUIg0AAgAg4hEIA0AAIAAgUIg0AAgAhwBgQAVgSAHgnIAUAGQgJAugUARgAgxAxIAUgDQAIAaABAYIgVAEQAAgVgIgegAgGAvIASgDQAKAUAFAYIgUAFQgCgSgLgcgAAhAsIARgHQAPATAGAQIgSAHQgGgRgOgSg");
	this.shape_3.setTransform(11.325,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,261,59.8);


(lib.sb_sc2_change = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag1BNQAVABAEgBQAFAAAAgDIACgJIhPAAIACgOIBPAAIACgKIhCAAIACgNIBDAAIABgKIg6AAQABgEgCgIQBSAAAqgGIAIALQgRADgmADIgCALIBEAAIgCANIhEAAIgBAKIBPAAIgDAOIhPAAIgBAJQgCAMgKAEQgHACgbAAQAAgIgDgHgAAtgRQgPAKgbAHQgBgGgFgIQATgEATgKQgFgHgFgKIgMALQgHgIgDgCQgHAigGAGQgFAEgHAAIgTAAQABgEgCgGIgTAAIgCAGIgNAAIAFgdIgJAJQgFgIgEgCQAQgMAKgTIAPADIgFAHIA6AAIgCAJQAXgRANgcIAQADIgIAPIA2AAIgDAOIgLAAQgKATgRANQAPAKATAEQgHAFgHAJQgWgGgNgMgAhBgnIApAAIgFAdIACAAQADAAACgCQADgDAHgeIgwAAgAg8gTIATAAIACgKIgTAAgAAxgkQAMgKAIgNIggAAQADAMAJALgAgYg9IAGgeIAPAAIgCAJIAZAAIgCAMIgZAAIgCAJgAgzg/IABgHIgaAAIACgMIAaAAIACgJIAPAAIgFAcg");
	this.shape.setTransform(249.475,9.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAlBbIAgi1IASAAIgfC1gAhEBZQABgLgEgIQAMABASAAQAGAAADgCQAIgFALgqIhJAAQAOgjAHgaIA/AAIAEgcIhEAAIADgRIBWAAIgLA+Ig/AAIgKAbIBHAAIgDAIQgPA8gJAJQgIAHgMAAIgNABIgSgBg");
	this.shape_1.setTransform(225.25,9.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhoBOQATgdALhAIANhGICmAAIgCAOIiWAAIgKA4QgMBEgWAhQgHgGgGgCgAhOBVIADgOIBGAAIACgNIg4AAIACgOIA5AAIAAgKIASAAIgCAKIA3AAIgCAOIg3AAIgCANIBDAAIgDAOgAhBAbQAJgJADgSIAEgWIBCAAIgIAqIAAABQAcgQAJgdIgZAAIACgOIAaAAIAFgcIAOAAIgFAcIAgAAIgDAOIgcAAQAEAiAVALQgHAFgGAIQgRgLgGgcQgMAYgaAOIgHgIQgBAEgGACQgEACgSAAIgDgKIAQAAQABAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAIABgJIgmAKIgCgHQgDALgHAIIgMgHgAgpALIAfgHQgJgDgRgDIAGgIQARADAJAEIgFAHIAIgCIACgOIglAAgAgtgcIAHglIA7AAIgGAlgAgegkIAgAAIACgHIghAAgAgbgzIAgAAIABgGIggAAgABHg7IAMgHQAIAKAFAJIgNAHQgDgIgJgLg");
	this.shape_2.setTransform(200.775,9.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AArBcIACgJIg2AAIgBAJIgRAAIANhNIBYAAIgNBNgAgGBFIA1AAIACgNIg1AAgAgCArIA2AAIACgOIg2AAgAhgAwIAYgHIAMhDIgUAAIADgRIAUAAIAIguIARAAIgIAuIATAAIgDARIgTAAIgLA9IAUgHIABAQIg9AXgAgWAFIAMhDIAZAAQgDgKgGgMIARgHQAGAJAEANIgOAHIAiAAQAOgRAHgMIASAGIgUAXIAZAAIgMBDgAAogIIAgAAIAHgpIgfAAgAgEgIIAeAAIAHgpIgfAAgAAtgRQAMgOAGgOIAMAFIgWAcgAAFgpIALgEQAHAQABAMIgMAFQAAgMgHgRg");
	this.shape_3.setTransform(176.575,9.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZBdIARhjIBeAAIgOBRQgDALgFAEQgFADgMAAQABgIgDgIQAIABABgBQABAAAAAAQABgBAAAAQAAAAAAAAQABgBAAAAIAEgbIgMAAIgIAqIgNAAIAHgqIgNAAIgHAqIgNAAIAHgqIgMAAIgIAtgAAzAhIANAAIAEgYIgMAAgAAZAhIANAAIAEgYIgNAAgAAAAhIAMAAIAEgYIgNAAgAhMBdIAGggIgfAAIADgQIAfAAIACgOIgZAAIANhHIAZAAIACgOIgcAAIACgQIAdAAIADgUIARAAIgDAUIAcAAIgDAQIgcAAIgDAOIAZAAIgBAIQAmgYAagkIAMAGIgFAHQASAbAZAUQgKAHgFAHIgMgMIgCAJIhBAAIACgHIgPALIgIgMIgKA8IgZAAIgDAOIAcAAIgDAQIgcAAIgFAggAgwARIANAAIADgQIgNAAgAhJARIAMAAIADgQIgNAAgAgqgLIAMAAIADgQIgNAAgAhEgLIANAAIACgQIgNAAgAATgkIAzAAQgNgPgJgPQgNAPgQAPg");
	this.shape_4.setTransform(152.725,9.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhBLIAYABQAEgBABgDIAMhIIhUAAIgRBbIgRAAIAShqIASAAIALhFIBYAAIgMBFIAQAAIgPBXQgDANgJAEQgHACgaAAQABgGgDgKgAAngPIAXAAIAEgXIgXAAgAAIgPIAQAAIAGgmIAmAAIADgQIg2AAgAheBOQAUgYAZgoIANALQgPAagcAmgAgIBGIAJg6IA4AAIgIAwIgpAAIgCAKgAAKAuIAaAAIAEgUIgaAAgAhRgXIAMgOQAWAIALAKIgOARQgLgMgUgJgAg+hNIANgOQAVAJALALIgNAQQgKgLgWgLg");
	this.shape_5.setTransform(128,9.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAYBaQgQAAgFgGQgDgGACgTIAaiUIAUAAIgLA8IA0AAIgDATIg0AAIgNBFQgBAJABACQABACAHAAIAbAAQAGAAAEgHQADgGAFgWQAGAGAKACQgHAagHAJQgHAKgOAAgAhZBKQAKgGACgLIAaiSIATAAIgKA8IAvAAIgEATIgvAAIgNBJIA0gMQgCAJAAAJQhBAQgJAEQgBgIgFgHg");
	this.shape_6.setTransform(104.075,9.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAGBdIARhgIAUAAIAHgRIgcAAIACgQIBLAAIgCAQIgdAAIgIARIAeAAIgRBfIgQAAIACgIIgkAAIgBAJgAAZBFIAkAAIAEgWIgjAAgAAgAgIAkAAIADgVIgjAAgAgWBdIAMhGIgLAMQgDgHgEgFIABgCIgKAEIAAgFQgsAHgHADQAAgFgDgKQAFgBANgNIARgUQgUADgGACIgBgQQAFgBAGgKQASgTAQgeIANAGQgTAegSAWIASgCIAUgcIAMAJQgaAlgbAbIAbgEIgDgSIAMgEQAGATAAAMQAVgXANglIAPADQgFAOgMAUIgQBkgAhoBUQAHgOAJggIAOACQgJAegJATIgMgFgAhDAoIAMgDQABARgCAZIgPADQAEgRAAgZgAguAjIANgEQAEAXABAPIgNAFQgBgOgEgZgAgLglIAGgjIAvAAQgBgIgEgGIAQgGQAGAJACALIAtAAIgGAgIgSAAIAEgQIhOAAIgDATg");
	this.shape_7.setTransform(80.05,9.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhoBOQATgdAMhAIAMhGICmAAIgCAOIiWAAIgKA4QgNBFgVAgQgGgGgHgCgAhNBVIACgOIBGAAIACgNIg4AAIADgOIA4AAIABgKIARAAIgBAKIA2AAIgCAOIg3AAIgCANIBDAAIgCAOgAhBAbQAJgKADgRIAEgWIBCAAIgHAqIgBABQAdgQAIgdIgZAAIADgOIAaAAIAEgcIAOAAIgFAcIAgAAIgCAOIgcAAQADAhAWAMQgIAFgFAIQgSgMgGgbQgLAXgaAPIgHgIQgCAEgGACQgDACgTAAIgDgKIARAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIABgJIgmAKIgBgHQgFANgGAGQgDgDgJgEgAgpALIAggHIgagGIAFgIQAPADAMAEIgFAHIAHgCIACgOIglAAgAgsgcIAGglIA8AAIgHAlgAgdgkIAgAAIABgHIggAAgAgbgzIAgAAIABgGIggAAgABHg7IAMgHQAJAKAEAJIgMAHQgFgKgIgJg");
	this.shape_8.setTransform(55.925,9.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhlBOQAmgCAkgIQgQgJgLgKQgPALgRAGQgEgJgEgEQAngNATgZIAQAFIgIAJIBvAAIgDANIgZAAQgQAPgXAKQAgAJAkABQgHAGgGAKQgtgEgggNQggALg5AGQgBgGgFgJgAgDA9QAVgJANgKIhGAAQAMALAYAIgAhaAUQAGgKAGgUIALADQgIAWgGAKgAAfARQAGgMAEgQIAMAEQgFAOgHAPgAg9gHIALgDIAAAcIgNACQADgMgBgPgAA7gIIALgDQABASgCAKIgLACQACgMgBgPgABOgLIALgCQADAOAAAOIgMADIgCgdgAgYARIAGgkIAzAAIgGAkgAgLAGIAbAAIAEgNIgcAAgAgqgIIALgEIABAYIgKAEIgCgYgABWgWQgmAGgHACIgBgMQAEgBAJgHIAOgNIgVADIgCgNQAEgBAFgFQALgJAMgUIAMAFQgKAPgOAOIANAAIAOgPIALAFQgVAYgRAPIAVgDIgCgLIALgDQAFARgBAMIgMAEgAgigUQgnAFgFACIgBgMQADgBAJgHIAQgOQgTABgDACIgCgNQAEgBAFgFQAOgOAKgPIAMAFQgKAPgPAOIAPgBIAMgOIANAGQgSATgXAUIAVgDIgDgKIAMgDQAEAPAAANIgLADgAgRgbIACgLIA1AAIgCALgAgOguIACgKIA1AAIgCAKgAgPhAIACgLIAYAAIgEgNIAPgFQAFALABAHIAUAAIgCALg");
	this.shape_9.setTransform(31.65,9.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUBBIAjABQAGAAABgGIAWh+IiGAAIAEgSICyAAIgEASIgYAAIgWB/QgEARgMAEQgIADgiAAQAAgJgEgLgAhbAzIAQhaIBSAAIgMBKIhAAAIgEAQgAhDASIAvAAIAHgnIguAAg");
	this.shape_10.setTransform(9.15,10.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,259.6,18.8);


(lib.sb_sc2_369 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ai9DJQBSgLBJgkQBTgqAog8QgMAKgVALQgrAWgwAAQhSgBguguQgsgsAAhIQAAhRA9g7QBDhBBnAAQBWAAAxAuQAxAuAABOQAACYh5BoQhvBgiwAZgAhUinQgtAoAAA7QAAAvAhAaQAfAZAwAAQA+AAAqgkQAsgmAAg5QAAgugbgcQgegfg0AAQg/AAgrAng");
	this.shape.setTransform(149.075,27.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwAoIAQhOIBRAAIgQBOg");
	this.shape_1.setTransform(107.575,50);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AifDkQgxguAAhPQAAiXB6hoQBvhgCvgZIgKBHQhRAKhPApQhWAsgnA9IAlgYQAvgYAwAAQBRAAAvAvQAsAsAABHQAABSg+A7QhCBBhoAAQhWAAgygugAhXAHQgrAmAAA6QAAAsAbAdQAeAfA0AAQA/AAAtgnQAtgpAAg7QAAgugigaQgfgZgxAAQg+AAgrAkg");
	this.shape_2.setTransform(73.675,27.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiiEEQgogJgfgLIAPhJQAeAMAnAIQAtALAmAAQBQAAAtgeQAugfAAg3QAAgxgxgRQgigMhOAAIgcAAIAQg7ICxiQIj5AAIAOhGIFoAAIgNA4IjGCcQBCAEAoAaQA1AhAABFQgBBbhIA1QhHAzhyAAQgmAAgwgKg");
	this.shape_3.setTransform(23.4,27.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169.9,55);


(lib.sb_sc2_239 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ai+DJQBTgKBJglQBTgpAng9QgLALgWALQgqAVgxAAQhRAAgugvQgsgsAAhHQAAhSA+g8QBChABnAAQBWAAAxAuQAxAtAABQQAACXh5BoQhvBgiwAZgAhUimQgtAnAAA8QAAAuAhAaQAfAZAvAAQA/AAArgkQArgmAAg6QAAgsgbgdQgegfg0AAQg/AAgrAog");
	this.shape.setTransform(127.5,27.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiiEEQgmgIghgLIAPhKQAfAMAmAJQAuAKAlAAQBQAAAtgeQAugfAAg2QAAgxgwgSQgjgMhOAAIgcAAIAQg7ICyiPIj6AAIAPhHIFnAAIgMA4IjHCcQBBAEApAaQA1AiAABEQAABbhIA1QhHAzhzAAQgmAAgwgKg");
	this.shape_1.setTransform(74.15,27.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjiEOIANhCQC1h3AsgkQCFhnAAhIQgBglgXgRQgZgTg4AAQhEAAhdAoIAQhMQBbgiBOAAQBOAAAqAjQArAiAAA8QAABchsBiQhLBDiOBTIEJAAIgOBGg");
	this.shape_2.setTransform(22.7,26.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148.3,54.9);


(lib.sb_sc1_ttheart = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AghA/QASgDAHgHQAHgGABgMIgNAAIAAgxIBOAAIAAAxIgRAAIAAAUIABAFIADABIAEAAIAEgBQAAAAAAAAQABgBAAAAQAAgBAAAAQABgBAAgBIAAgMQAEAEAMAEIgDAQQgCAFgFABQgDABgHAAIgLAAQgJAAgDgEQgFgDAAgNIAAgUIgMAAQgCASgJAJQgIALgWAGQgDgJgHgHgAAEAXIAqAAIAAgHIgqAAgAAEAEIAqAAIAAgGIgqAAgAhNAmIATgGIAAgyIgQAAIAAgTIAQAAIAAglIAUAAIAAAlIAOAAIAAATIgOAAIAAAsIAPgGIAEASIgzAVgAgUgTIAAgRIAUAAIgDgLIAPgDQADAGACAIIATAAIAEgOIASADIgFALIAUAAIAAARgAgPgzIAAgPIAgAAIgDgIIATgEIAEAMIAgAAIAAAPg");
	this.shape.setTransform(291.775,7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhLBJIAAgTIAVAAIAAhcIAVAAIAABcIAeAAIAAh+IAUAAIAAAzIAyAAIAAAUIgyAAIAAA3IA7AAIAAATg");
	this.shape_1.setTransform(255.325,7.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAoAtIASgIQAOATAFAOIgTAJQgFgOgNgUgAhJBHQALgPAIgRIATAFQgJAUgKAPgAgaAtIASgCQAEAUAAALIgUADQAAgQgCgQgAAHAtIASgDQAHARADAOIgUAEQgCgLgGgVgAhHAjIAAgRIAWAAIAAgUIgSAAIAAgSIASAAIAAgPIARAAIAAAPIAMAAIAAgPIAQAAIAAAPIANAAIAAgPIAQAAIAAAPIAMAAIAAgPIATAAIAAAPIAQAAIAAASIgQAAIAAAUIATAAIAAARgAAZASIAMAAIAAgUIgMAAgAgEASIANAAIAAgUIgNAAgAggASIAMAAIAAgUIgMAAgAhNgnQAXgOAMgZIARAGIgIANIBoAAIAAASIh0AAQgMAMgIAGQgEgIgIgIg");
	this.shape_2.setTransform(218.65,7.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjA5QAQABAGgBQAEAAAAgDIAAhOIgpAAIAAgTIA8AAQgUgJgcgIIAKgQQAiAHAaANIgKASIgLgEIAAANQAGAQAGANQAVgQAKgOIATAOQgbAVgOAJQASAaAcAKQgFAGgIALQgigPgUgjIAAAmQAAAPgJAEQgGADgYAAQgCgKgFgKgAhNA0QAXgOANgfIghAAIAAgRIApAAIAEgBIANAFQgLAygjAXQgHgIgIgHg");
	this.shape_3.setTransform(182.25,7.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgEAGAAQAHAAAFAEQAFAFAAAGQAAAHgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape_4.setTransform(149.825,7.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGBLQgRAAgGgGQgFgGAAgQIAAhMIAVAAIAABMQAAAGABACQACABAGAAIAXAAQAGAAACgGQACgFABgUQAGAFAMADQgCAYgFAJQgGAJgPAAgAhNAsQAKgcADgjIATADQgEApgIAbgAAmgRIATgIQAPAjAGAaIgUAJQgEgcgQgigAgdg8IAOgOQAgAVANAOIgPAPQgMgOgggWg");
	this.shape_5.setTransform(117.55,7.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAMA5IAZABQAFAAACgDQAGgGADhRIgjAAQgHAPgIALIgMgJIAABMIgsAAIAAAMIgSAAIAAh6IATAAIAFgbIAVADIgIAYIAZAAIAAAbQANgVAJghIATAFIgHAVIAvAAIAAAJQgCA4gCAWQgCAYgFAGQgGAIgKABIgaABQAAgKgHgKgAg1AsIAaAAIAAghIgaAAgAg1gFIAaAAIAAgbIgaAAgAAEgDIAQgIQAQAUAIAPIgQALQgJgSgPgUg");
	this.shape_6.setTransform(81.025,7.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAAHQgPAwguAWQgGgKgJgGQAxgWALgyIg5AAIAAgVIA9AAQABgQAAgcIAVAAQAAAdgCAPIBBAAIAAAVIg6AAQASA0AsASQgIAGgHAMQgqgTgUgzg");
	this.shape_7.setTransform(44.375,7.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA6BEIhKAFIgDgTIAlgCIAAgTIgfAAIAAguIAfAAIAAgNIASAAIAAANIAhAAIAAAuIgJAAQAPAZADAMIgRAIgAAkAzIANgBIgGgKIAQgHIgXAAgAAkASIAPAAIAAgQIgPAAgAADASIAPAAIAAgQIgPAAgAg9BMQAAgJgGgJIARAAQADAAADgCQADgEACgeIgmAAQADgTAEgiIAfAAIAAgUIgjAAIAAgSIA1AAIAAA4IgiAAIgCASIAmAAIAAAHQgCAxgIAIQgEAGgIAAIgKABIgKAAgAA3geQg8AFgGACQgDgKgDgGQAFgCAEgFQALgOAGgRIAVAFQgHANgOARIAjgDIgKgLIAOgIQAUATAIAQIgPAJg");
	this.shape_8.setTransform(7.85,8.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,299.6,15.8);


(lib.sb_sc1_ttalt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(0.9).p("A4ADLMAwBAAAA4AjKMAwBAAA");
	this.shape.setTransform(159.925,90.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AEJHaQAigdAAg5IAAgJIAVAAIAAAbQAKAwAeAQQgJAHgGAMQgVgOgMgeQgJAZgVAUQgIgLgJgFgAjZHVQAZgLAQgTQgJgTgHgXIgKAOIgMgNIAAACIguAAIAAAwIAugPQAAALACAKQg9AYgIAFQgCgNgHgKQAHgDAAgJIAAhGIAuAAIAAggIgwAAIAAgWIBHAAIAABBQASgbAKgyIAWAEIgHAeIA3AAIAAAUIgJAAQgHAtgQAdQAPATAVAJQgKAJgFALQgVgLgOgSQgSAUgXALQgGgNgIgIgAizFvQAHAeAKAVQAKgYAEgcIgeAAgADaHpIAAg9IglAAIAAgSIBdAAIAAASIgjAAIAAA9gAqpHbQAFgJADgJIgNAIQgGgOgJgOIAPgJQAHALAHAPQAGgWAAgiIAAhEQAlgHAUgJIASAQQgYAJgeAGIAAAeIA5AAIAAAUIgSAAIAABdIgWAAIAAhdIgRAAIAAADQAAA/gTAcQgHgJgKgFgAS0HoIAAhVIgjAAIAABDIgXAAIAAhZIA6AAIAAgWIhKAAIAAgVIBMAAIgKgVIAXgHIAOAcIBGAAIAAAVIhMAAIAAAWIA9AAIAABAQAAAQgKAEQgJAEgYABQgCgLgGgMIAYAAQABAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAIAAgqIgmAAIAABVgArXHoIAAg/IgjAAIAAgTIAjAAIAAgOIgkAAIAAgTIASAAQAAgJgFgLIAQgEIgaAAIAAgSIAgAAIgFgPIAWgFIAJAUIAbAAIAAASIgYAAIAPADQgEAMgEAJIAUAAIAAATIghAAIAAAOIAeAAIAAATIgeAAIAAA/gArWFxIgNAEIAbAAQAFgMADgMIgcAAQAEAKACAKgAzNHkIAAgUIBDAAIAAgXIgxAAIAAgUIAxAAIAAgVIgnAAIAAgQIgYAOQgHgLgHgHQAggNAegcIgZAAIAAgVIBBAAQAMASAVARQAVAQAYAIQgKALgFAKQgIgDgQgLIAAAQIgoAAIAAAVIAyAAIAAAUIgyAAIAAAXIBGAAIAAAUgAysF9IBcAAQgbgUgSgWQgSAUgdAWgAKRHgIAAgXIBEAAIAAiPIAYAAIAAA2IBDAAIAAAYIhDAAIAABBIBQAAIAAAXgACzHUQAIgOAGgXIASAFQgGAYgJAQQgGgEgLgEgAr9HRQALgQAFgSIASAFQgJAYgKAOIgPgJgAD0G1IARgGQAKAUACAJIgSAIQgDgLgIgUgAEKGJIAAAIIhNAAIAAgSIBNAAIABAAQANgXAFgwIAWADIgFAfIAlAAIAEAAIAPADQgFAfgJAXIgSgFIAHggIgkAAQgHAWgJAQQgHgHgIgEgAC8F2IAAgSIAdAAIAAgKIghAAIAAgSIAhAAIAAgPIAVAAIAAAPIAiAAIAAASIgiAAIAAAKIAeAAIAAASgAX5hwQgSg0gXg6IjYAAIgoBuIglAAQAsiHA5h6QAqhaAWgeIArAAQAWAhApBXQA5B7AtCGgAUGkAIC8AAQgdhIgcg7QgYg1gMgSQgoBAg3CKgAOOhwQgjkBgZhNQg4CDg9CkIgcAAQg3iSg/iUQgaBegiDvIgjAAQAVicAThgQAMg8AShBIAsAAQAeBEAlBeIAuByQA/imAyhuIAsAAQATBFALA4QAUBiAUCagACdhwIAAl5IAkAAIAAF5gAk+hwIAAlXIiVAAIAAgiIFPAAIAAAiIiVAAIAAFXgAuRhwIAAl5IAkAAIAAFXIDjAAIAAAigAzRhwQgYhDgRgrIjXAAQgeBOgLAgIglAAQAsiHA6h6QAqhaAWgeIArAAQAWAhApBXQA5B7AsCGgA3EkAIC9AAQgdhHgcg8QgZg1gMgSQgoA/g3CLg");
	this.shape_1.setTransform(156.775,48.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,314.7,111.5);


(lib.sb_sc1_car = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#091321").s().p("AtsTJMAAAgmRIbZAAMAAAAmRg");
	this.shape.setTransform(-568.6492,280.975,1.7466,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(9,19,33,0)","#091321"],[0,0.561],-90.4,0,90.4,0).s().p("AuHVtMAAAgrZIcPAAMAAAArZg");
	this.shape_1.setTransform(-265.1783,287.2079,1.7198,1.2852,179.7524);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(9,21,34,0)","#091522"],[0,0.839],-90.4,0,90.4,0).s().p("AuHVtMAAAgrZIcPAAMAAAArZg");
	this.shape_2.setTransform(496.4729,278.2723,1.7924,1.2852);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#091522","#000000"],[0,1],-87.7,0,87.7,0).s().p("AtsTJMAAAgmRIbZAAMAAAAmRg");
	this.shape_3.setTransform(1007.992,280.975,4.0517,1);

	this.instance = new lib.sc1bg();
	this.instance.setTransform(-415,168,1.3095,1.3093);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-721.8,99.7,2085.2,366.7);


(lib.sb_sc5_try = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mo_sc5_try
	this.instance = new lib.mo_sc5_try();
	this.instance.setTransform(111.9,14.7,1,1,0,0,0,111.9,14.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.847)",2,0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-6,239,45);


(lib.sb_sc5_alt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mo_sc5_alt
	this.instance = new lib.mo_sc5_alt();
	this.instance.setTransform(173.7,10.6,1,1,0,0,0,173.7,10.6);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",2,0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-6,363,37);


(lib.sb_sc5_100w = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFF100").s().p("AgiCTQgeAAgKgGQgKgIACgUIAEgrIAeAAIgEAqQAAAGAEACQADACAPAAIBAAAQALAAAEgFQAEgFADgVQAKAIAQACQgFAcgKAJQgJAJgYAAgAiZB/QAUgUAQgmIAZAKQgSAsgSAUgABOBOIAbgIQAZAhAGAdIgcAJQgHgbgXgkgAgfBEIAUgPIh9ABIABgaIB4AAIACgWIhkAAIAIhdIBkAAIACgSIh5AAIADgYIB4AAIABgRIAfAAIgCARIB9AAIgCAYIh9AAIgBASIBmAAIgJBdIgqAAQAqAVAVAXIgWAQQgGgHgLgIIhtACQAfARAQASIgWASQgRgTgfgTgAAQAcIA0gBQgJgFgMgFIAQgLIgtAAgAATgMIBIAAIACgTIhIAAgAhSgMIBHAAIABgTIhHAAgAAWgyIBIAAIACgSIhIAAgAhPgyIBHAAIACgSIhIAAg");
	this.shape.setTransform(262.325,32.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF100").s().p("AhVB/QAvgEAhgKQgQgJgJgIQgNAJgTAIQgGgKgKgIQAOgFASgJIgLgOIAXgJIAIAKQARgLAJgKQgKgFACgRIAAgFQgSAXgQAKIgQgOQATgKAQgWIAQAIIAAgHIAYAAIgCARQAAAFACABQACABAHAAIAjAAQAGAAACgCQACgCABgJQAFADAOAEIgKgKIASgKQAYAXAIAOIgSALQgGgKgPgSQgDANgGAFQgGAFgOAAIgjAAQgFAHgHAFIBLAAIAFgBIATALQgTAZgkARQAhAKArADQgJAJgIAOQg2gGgogPQgnAOg7AIQgDgKgJgNgAgJBTQANAKAXAKQAbgLARgMIhNAAgAiACVIAPisQgTAZgIAJQgFgRgIgOQAugyAdhPIAcAIQgNAggQAdIgUDlgAAVAFIALgFIhJAAIgDAaIgaAAIAEgsIAfAAIAHhSIA3AAIAEgOIhQAAIACgWIDJAAIgCAWIhZAAIgHAOIBIAAIgIBSIAdAAIgDArIgcAAIADgZIhOAAQAPAKAHAIIgSAKQgJgLgRgMgAgIgSIBkAAIABgNIhkAAgAgFgtIBjAAIABgMIhjAAgAgDhHIBkAAIABgMIhkAAg");
	this.shape_1.setTransform(220.475,33.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF100").s().p("AgJCEQASgdALgtQAHgfAEgtIAKh2IB0AAIgWD4QgCAXgOAGQgNAHglgBQgBgSgGgLIAkAAQAHAAABgHIAGhIIg8AAQgOBKgaAkQgIgKgNgHgAA4ALIA6AAIAFguIg6AAgABAg+IA5AAIAEguIg5AAgAicCCQAggYARggIAcAIQgWAnggAbQgKgKgNgIgAg9BWIAYgMQAWAbAJAUIgaAPQgIgUgVgegAiWBFIADgaIAeAAIALh/IgaAAIACgaIAbAAIADgmIAbAAIgDAmIAzAAIADgmIAbAAIgDAmIAYAAIgDAaIgXAAIgKB/IAVAAIgDAagAhZArIAyAAIADgcIgzAAgAhVgIIAzAAIACgbIgzAAgAhQg7IAyAAIADgZIgzAAg");
	this.shape_2.setTransform(177.275,33.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF100").s().p("AiXB5QA1gRAbgjQAVgbAKgsIg+AAIACgXQgNANgQAMQgJgLgOgLQA9gpAghPIAfAIQgZA7goArIC7AAQghgngPgwIg2AAIADgcIBMAAQAJAmAVAfQAWAhAeARQgOAMgKAQQgRgMgLgMIAAAGQgKBLgHAfQgHAigJAJQgKALgSACQgOACgkgCQABgOgIgRQAXADAWAAQAJAAAFgFQAMgLANhmIhKAAQgMA2gYAhQgfAqg8AVQgGgRgLgKg");
	this.shape_3.setTransform(135.625,33.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF100").s().p("AA2B+IgHACQAAgGgDgMIiJAIIAAgaIBDgCIADgfIhUAAIgIBbIgdAAIAHhbIgMAAIACgZIANAAIABgLIAdAAIgBALIBTAAIACgRIhcAAIAJhkIDWAAIgJBkIheAAIgCARIB1AAIgHBXQgCALgCAFQgDAFgHADQgJAFghAAQgCgNgEgLgABJB5IgQAEQASABAGgBQAFAAAAgEIAGg+IhYAAIgCAdIAhgCIgKgSIAXgGQAWAhADAagAAKgDIBAAAIABgUIg/AAgAhRgDIA/AAIACgUIg/AAgAANgqIBAAAIABgUIhAAAgAhNgqIA+AAIACgUIg/AAgAAthYIABgRIgkAAIACgZIAkAAIACgTIAdAAIgCATIBJAAIgDAZIhIAAIgBARgAhEhYIABgRIhHAAIADgZIBGAAIACgTIAeAAIgCATIAkAAIgBAZIgmAAIgBARg");
	this.shape_4.setTransform(93.35,33.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF100").s().p("AA3COIACgVIiaAAIgBAVIgfAAIASjSIBPAAQAGgTAFgXIh5AAIADgfIEaAAIgDAfIh+AAIgPAqIBrAAIgTDSgAheBdICZAAIAFg1IiZAAgAhXAMICZAAIAFgzIiaAAg");
	this.shape_5.setTransform(51.475,33.95);

	this.instance = new lib.sb_sc5_bluebg();
	this.instance.setTransform(153.25,33,1,1,0,0,0,152,31.8);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",0,0,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,310,69);


(lib.sb_sc5_4w = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFF100").s().p("AiaCTIACgcIB7AAIAHhIIhsAAIACgcIBsAAIAEgmIhFAAIABgRQgXALgZAKQgHgQgLgNQAwgOAqgaQAsgbAYgjIAbANIgJAMQAWAYAkAWQAjAVAkALQgNAMgKAOQgXgJgYgNIgBAUIhGAAIgDAmIBuAAIgDAcIhtAAIgGBIIB9AAIgDAcgAg/gvICGAAQgmgZgbgcQgbAcgqAZgAAcBsQAXgcAOgeIAdALQgcAngQASgAhqA8IAZgKQATAfAGAZIgbAMQgFgZgSghg");
	this.shape.setTransform(249.75,26.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF100").s().p("AAUCVIAKhvIhaAAIADgeIBZAAIAGg/IguAAQgNAegNAQQgMgIgMgHQAegmAShHIAcAGIgOArIAkAAIAGg9IAeAAIgFA9IBIAAIgDAdIhIAAIgGA/IBXAAIgDAeIhWAAIgKBvgAh5CVIAPitQgLAPgRAQQgGgPgIgOQAygwAjhOIAcAJQgQAigWAkIgUDag");
	this.shape_1.setTransform(206.825,27.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF100").s().p("AiYCPIATjeIAnAAIADglIgrAAIACgaICZAAIgDAaIgqAAIgEAlIAnAAIgTDZIgYAAIABgSIhgAAIgCAXgAh8BhIBfAAIAHhQIgRAAQgLAAgFgFQgDgFABgOIAFguIgUAAIgCAYQgEAogbATQgHgHgGgEgAh2ASQAXgRACgfIACgXIgUAAgAgngHIAAAEIAEACIAKAAIAFgBIAEgzIgSAAgAhGhPIASAAIADglIgTAAgAAxCMQgXAAgIgJQgIgIACgZIALiGIBbAAIAHhMIhcAAIACgdIB6AAIgMCGIhaAAIgJBoQAAAKACACQACADALAAIAqAAQAJAAAEgKQAEgJAEgjQAKAJARAEQgHApgJAOQgKAOgWAAgAhuBFIACgYIBIAAIgDAYg");
	this.shape_2.setTransform(164.35,27.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF100").s().p("AiYBxQAwgRAWglQARgbAIgyIhOAAIACgdIEeAAIgCAdIhZAAIgKBsQAAAIACADQACACAJAAIAlAAQAJAAADgKQAEgKAEgkQAIAHATAGQgGArgJAOQgKAQgWAAIgsAAQgYgBgIgIQgHgJACgZIAKhsIg3AAQgLA8gTAfQgbArg2AVQgFgNgMgLgAhjhrIADgdIDlAAIgDAdg");
	this.shape_3.setTransform(121.425,28.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF100").s().p("AA2B+IgGACQgBgGgDgMIiJAJIAAgbIBDgCIACgfIhTAAIgIBbIgdAAIAIhbIgNAAIACgZIANAAIABgLIAdAAIgBALIBUAAIABgRIhcAAIAJhkIDWAAIgJBkIheAAIgCARIB1AAIgIBXQgBALgCAFQgDAFgHADQgJAFghAAQgBgJgFgPgABIB5IgPAEQATABAFgBQAFAAAAgEIAFg+IhXAAIgCAdIAhgBIgKgTIAXgGQAVAiADAZgAAKgDIBAAAIABgUIhAAAgAhRgDIA/AAIACgUIg/AAgAANgqIBAAAIACgUIhAAAgAhNgqIA+AAIACgUIg/AAgAAshYIACgRIgkAAIACgZIAkAAIACgTIAdAAIgBATIBIAAIgCAZIhJAAIgBARgAhEhYIABgRIhHAAIADgZIBGAAIACgTIAdAAIgBATIAkAAIgBAZIglAAIgCARg");
	this.shape_4.setTransform(80.025,27.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF100").s().p("AAdB9IAEg5IiKAAIABgYQBKhhBOhHIAtAAQhdBUg5BNIBdAAIAFg7IAiAAIgFA7IAkAAIgCAfIglAAIgFA5g");
	this.shape_5.setTransform(39.7,27.025);

	this.instance = new lib.sb_sc5_bluebg();
	this.instance.setTransform(147.25,27,1,1,0,0,0,152,31.8);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",0,0,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6,310,69);


(lib.an_sc5_free = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc5_try
	this.instance = new lib.sb_sc5_try("synched",0);
	this.instance.setTransform(706.1,24.55,1,1,0,0,0,111.9,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:232.05,y:27.7},29,cjs.Ease.cubicOut).to({regX:112,regY:14.8,scaleX:1.1323,scaleY:1.1323,x:238.65,y:27.85},10).to({regX:111.9,regY:14.7,scaleX:1,scaleY:1,x:232.05,y:27.7},8).wait(1));

	// sb_sc5_free
	this.instance_1 = new lib.sb_sc5_free("synched",0);
	this.instance_1.setTransform(540.65,24.2,1,1,0,0,0,45.3,24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:66.6,y:27.35},29,cjs.Ease.cubicOut).to({scaleX:1.1323,scaleY:1.1323,x:51.25},10).to({scaleX:1,scaleY:1,x:66.6},8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,830.2,54.8);


(lib.an_sc5_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc5_bg
	this.instance = new lib.sb_sc5_bg("synched",0);
	this.instance.setTransform(303.1,264.95,1.0458,1.0458,0,0,0,299.9,264.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:289.5},69).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540.4,-163.5,1589.1,637.3);


(lib.an_sc5_alt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc5_alt
	this.instance = new lib.sb_sc5_alt("synched",0);
	this.instance.setTransform(-402.8,10.6,1,1,0,0,0,173.7,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:173.7},14,cjs.Ease.cubicOut).wait(26));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-580.5,-6,939.5,37);


(lib.an_sc5_100w = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc5_100w
	this.instance = new lib.sb_sc5_100w("synched",0);
	this.instance.setTransform(-600.4,40.2,1,1,0,0,0,155.5,35);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({x:188.1},16,cjs.Ease.cubicOut).to({regY:35.1,scaleX:1.2271,scaleY:1.2271,y:40.35},13).to({regY:35,scaleX:1,scaleY:1,y:40.2},12).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-755.9,0,1130,79.6);


(lib.an_sc5_4w = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc5_4w
	this.instance = new lib.sb_sc5_4w("synched",0);
	this.instance.setTransform(-508.8,33.4,1,1,0,0,0,149.5,29);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({x:176.85},16,cjs.Ease.cubicOut).to({regX:149.6,regY:29.1,scaleX:1.1904,scaleY:1.1904,x:176.95,y:33.55},11).to({regX:149.5,regY:29,scaleX:1,scaleY:1,x:176.85,y:33.4},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-664.3,-5.9,1022.4,78);


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


(lib.an_sc4_zero = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc4_zero
	this.instance = new lib.sb_sc4_zero("synched",0);
	this.instance.setTransform(96.3,11.1,1,1,0,0,0,96.3,11.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({x:346.2,alpha:1},22,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,442.6,22.2);


(lib.an_sc4_inoutline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc4_in_outline
	this.instance = new lib.sb_sc4_inoutline("synched",0);
	this.instance.setTransform(181.6,38,1,1,0,0,0,181.6,38);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.6719},14).to({alpha:0.4609},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,363.1,76);


(lib.an_sc4_in = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc4_in_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("APiG7QgNgKgLgGQAqg0AbhRQAUg6AQhWIgrAGIABg9IA0gFIAtj5IA/AAQAXg1AOgrIA/ANIgqBTIBZAAIgnDeIAmgGIgFA3IgrAHIguEGQgEAYgIANQgIAOgQAIQgPAHgYADQgSABgmAAQABgMgDgRQgDgRgFgMIBEABQAHAAADgDQADgDACgHIAsj9IhiANQgpDchOBkQgGgIgOgKgAR3BUIBigNIAfitIhgAAgAmgGCQheAxiDAZQgBgNgGgRQgGgRgHgMQBvgQBWgpQgrgtgYg9IA1gRIhNAAIAKg3IEfAAIANgCIAbALIALg5IlLAAIgNBLIg+AAIAWh/IHKAAIgWB+Ig4AAQg2BbhWA/QBHApBdAPQgaAVgcAmQhngYhIgzgAmRE2QA9goAlgxIikAAQAUAyAuAngAVJHLIAYiGQglBQgvAxQgIgJgPgLQgRgNgLgEQA4g7AihaQAYg/APhWIAXiAIFGAAIgoDjIkJAAIgLAkIEgAAIgkDLIhAAAIAEgWIixAAIgEAYgAWUF9ICxAAIANhKIixAAgAWUClIDFAAIAHgoIjEAAIgIAogAWkBQIDEAAIAHgmIjEAAgA42GtQgNgRgKgIQBehAAzhmQAkhGAShkIAThsIBHAAIgUBtQgTBugtBZQg8B3hnBHQgFgLgOgSgABEGyQgRgMgMgHQA1hKAjhzQAYhOAUhyIAljSIE7AAQgKghgPgdIBJgWQAUAkAPAwID7AAIgLBCIpDAAIgZCQQgzEdhiCJQgIgJgRgNgA7/GRQBihzBfiLIAuAwQhWB/hkCAgAzXG/QgqAAgLgTQgNgVAKg5IBFmGIBHAAIhFGGQgDAUACAFQABAGAKAAIAmAAQALAAAIgZQAHgWARhTQAJAIASAKQAQAIAPAFQgVBfgVAjQgXAkgogBgAtgGNQBMhaBjiZIAnAvQhKB3hdB+gACpG4IALg+IEAAAIAShjIjOAAIALg/IDOAAIA0kpIBFAAIglDTQBdhDAtiEIBAAJQgTAzgYApQBNBNAVAcIgyAvQgYgig7g+QgpA3gyAkQgLgQgYgUIgNBJIDUAAIgLA/IjUAAIgSBjIECAAIgLA+gARsCyIAqgOQATBDAFAwIgtARQgEgxgRhFgAD6ClQgPgMgKgHQBkhEAwiTIBBAHQgSAzgUAnQA0A3AYAlIgyAwQgUgigogwQgoA8g2AoQgHgHgPgOgArxA5QghgXgfgRIAtg0QAhAPAfAUQAlAVARARIgvA8QgSgSgigXgA6MAyQgkgXgigQIAwgzQAkAPAkAUQAmAUATASIg0A7QgTgSgkgYgASYg6IAqgOQAQA4AFAxIguASQgBgqgQhDgAoXAdIAJg0IEkAAIAIgwIlTAAIAKg2IFTAAIAIgwIkjAAIAJg1IFoAAIgSBlIA0AAIgJA2Ig1AAIgRBkgAVOguQgIgUgGgLQBIggA/guQBFgyAqg2IA6AWIgTAXQAcAjAtAkQAtAiAtAWQgKALgNATQgMATgHAOQgtgbgsgmIgHAnIivAAIAHgkQhBAtg0AaQgCgLgJgUgAXhhkICQAAQghgfgfglQglAkgrAggAxVgsIAQhdIlBAAIgQBdIhFAAIAdihIHNAAIgdChgAqiiVQgfgXgggSIAtg2QAfARAhAVQAkAYASAQIgxA9QgRgSgigagA4/iYQgggZgigSIA1gyQAhARAiAXQAjAZARAUIg4A3QgQgVgigag");
	mask.setTransform(179.175,46.1);

	// Layer_9
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.478,1],-89.9,0,89.9,0).s().p("AuCYuMAAAgxbIcFAAMAAAAxbg");
	this.shape.setTransform(-71.1016,-34.8384,1,1.2913,44.9995);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.478,1],-63.5,-63.5,63.6,63.6).s().p("EggfAMpMAtIgtIIT3T3MgtIAtIg");
	this.shape_1.setTransform(-38.675,-27.075);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.478,1],-63.5,-63.6,63.6,63.5).s().p("EggfAMpMAtIgtIIT3T3MgtIAtIg");
	this.shape_2.setTransform(221.125,34.925);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{x:-71.1016,y:-34.8384}}]},20).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape,p:{x:480.9484,y:96.9116}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(21).to({_off:false},0).wait(1).to({x:-6.175,y:-19.325},0).wait(1).to({x:26.275,y:-11.575},0).wait(1).to({x:58.775,y:-3.825},0).wait(1).to({x:91.225,y:3.925},0).wait(1).to({x:123.725,y:11.675},0).wait(1).to({x:156.175,y:19.425},0).wait(1).to({x:188.675,y:27.175},0).to({_off:true},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(29).to({_off:false},0).wait(1).to({x:253.625,y:42.675},0).wait(1).to({x:286.075,y:50.425},0).wait(1).to({x:318.575,y:58.175},0).wait(1).to({x:351.025,y:65.925},0).wait(1).to({x:383.525,y:73.675},0).wait(1).to({x:415.975,y:81.425},0).wait(1).to({x:448.475,y:89.175},0).to({_off:true},1).wait(1));

	// sb_sc4_in
	this.instance = new lib.sb_sc4_in("synched",0);
	this.instance.setTransform(179.2,36.1,1,1,0,0,0,179.2,36.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:56.1,alpha:1},23).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,358.4,92.2);


(lib.an_sc4_bose = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc4_bose
	this.instance = new lib.sb_sc4_bose("synched",0);
	this.instance.setTransform(180.5,11.1,1,1,0,0,0,180.5,11.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:594.9,alpha:1},29,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,756.4,22.2);


(lib.an_sc3_tt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// an_sc3_mask
	this.instance = new lib.an_sc3_mask("synched",0);
	this.instance.setTransform(408.8,98.7,1,1,0,0,0,170.8,46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// sb_sc3_pro
	this.instance_1 = new lib.sb_sc3_pro("synched",0);
	this.instance_1.setTransform(-288.8,75.8,1,1,0,0,0,170.8,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:408.8},17,cjs.Ease.cubicOut).wait(23));

	// sb_sc3_safe
	this.instance_2 = new lib.sb_sc3_safe("synched",0);
	this.instance_2.setTransform(39.9,129,1,1,0,0,0,117.7,15.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({x:446.1,startPosition:1},10,cjs.Ease.cubicOut).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-459.6,52.7,1039.4,91.99999999999999);


(lib.an_sc3_TJP = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_TJP
	this.instance = new lib.sb_sc3_TJP("synched",0);
	this.instance.setTransform(824.35,9.7,1,1,0,0,0,99,9.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({x:591.8,startPosition:1},14,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,923.3,19.4);


(lib.an_sc3_LKA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_LKA
	this.instance = new lib.sb_sc3_LKA("synched",0);
	this.instance.setTransform(677.3,9.6,1,1,0,0,0,100.9,9.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:432.1,startPosition:1},15,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,778.3,19.2);


(lib.an_sc3_ICC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_ICC
	this.instance = new lib.sb_sc3_ICC("synched",0);
	this.instance.setTransform(862.15,9.7,1,1,0,0,0,147.2,9.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:478.4,alpha:1,startPosition:1},12,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(331.2,0,678.3,19.4);


(lib.an_sc3_car = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(243.1,154.8,0.766,0.766,0,0,0,243.1,177.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,y:177.2,startPosition:44},44,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,486.3,354.6);


(lib.an_sc2_vc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sb_sc2_vc("synched",0);
	this.instance.setTransform(144.5,20.9,1,1,0,0,0,144.5,20.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({x:530.8},10,cjs.Ease.cubicOut).to({regX:144.6,regY:20.8,scaleX:1.119,scaleY:1.119,x:530.95,y:20.8},6).to({regX:144.5,regY:20.9,scaleX:1,scaleY:1,x:530.8,y:20.9},4).to({startPosition:0},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.4,692.6,46.6);


(lib.an_sc2_change = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_change
	this.instance = new lib.sb_sc2_change("synched",0);
	this.instance.setTransform(129.8,9.9,1,1,0,0,0,129.8,9.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({x:728.3,y:9.4},18,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,858.1,19.3);


(lib.an_sc2_car = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(265.8,140.8,1,1,0,0,0,265.8,140.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:791.6,y:253.45,alpha:1},35,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1057.5,394.4);


(lib.an_sc2_369 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_369
	this.instance = new lib.sb_sc2_369("synched",0);
	this.instance.setTransform(122.45,27.45,0.7622,0.7622,0,0,0,85,27.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({alpha:1},7,cjs.Ease.backOut).to({scaleX:1,scaleY:1,x:122.4,y:27.4},15,cjs.Ease.backOut).wait(1));

	// sb_sc2_kg
	this.instance_1 = new lib.sb_sc2_kg("synched",0);
	this.instance_1.setTransform(178.7,29.8,1,1,0,0,0,178.7,29.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({alpha:1},22).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.5,357.5,59.4);


(lib.an_sc2_239 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sb_sc2_239("synched",0);
	this.instance.setTransform(116.1,27.5,0.7413,0.7413,0,0,0,74.1,27.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},7,cjs.Ease.backOut).to({regX:74.2,regY:27.4,scaleX:1,scaleY:1,x:116.15,y:27.4},15,cjs.Ease.backOut).wait(1));

	// sb_sc2_hp
	this.instance_1 = new lib.sb_sc2_hp("synched",0);
	this.instance_1.setTransform(0,4.45);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},22).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.8,261,65);


(lib.sc1_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc1_car
	this.instance = new lib.sb_sc1_car("synched",0);
	this.instance.setTransform(284.9,264.8,1.0668,1.0668,0,0,0,299.9,264.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:292.4},90).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-805.1,88.7,2232.2,391.3);


(lib.an_sc1ttalt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc1_tt_alt (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_10 = new cjs.Graphics().p("A3hIpMAwBAAAgAEIGbQAigdAAg5IAAAAIAAgJIAWAAIgBAbQALAwAdAQIAAAAQgIAHgHAMIAAAAQgVgOgMgeIAAAAQgJAZgVAUIAAAAQgHgLgKgFgAjZGWQAYgLARgTIAAAAQgKgTgHgXIAAAAIgJAOIAAAAIgNgNIAAACIgtAAIAAAwIAtgPQAAALACAKIAAAAQg9AYgIAFIAAAAQgCgNgGgKIAAAAQAHgDAAgJIAAAAIAAhGIAuAAIAAggIgwAAIAAgWIBGAAIAABBQATgbAJgyIAAAAIAWAEIgHAeIAAAAIA3AAIAAAUIgIAAQgHAtgRAdIAAAAQAPATAVAJIAAAAQgJAJgGALIAAAAQgVgLgOgSIAAAAQgRAUgYALIAAAAQgGgNgHgIgAizEwQAGAeAKAVIAAAAQALgYADgcIAAAAIgeAAgADZGqIAAg9IgkAAIAAgSIBdAAIAAASIgkAAIAAA9gAqqGcQAGgJADgJIAAAAIgOAIQgFgOgJgPIAAAAIAOgIQAIALAHAPIAAAAQAGgWAAgiIAAAAIAAhEQAlgHAUgJIAAAAIARAQQgXAJgfAGIAAAAIAAAdIA6AAIAAAVIgSAAIAABdIgWAAIAAhdIgSAAIAAADQAAA/gSAcIAAAAQgIgJgKgFgASzGpIAAhVIgjAAIAABDIgXAAIAAhZIA6AAIAAgWIhJAAIAAgWIBMAAIgKgUIAAAAIAWgHIAOAbIAAAAIBGAAIAAAWIhLAAIAAAWIA9AAIAABAQAAAQgLAEIAAAAQgIAEgZABIAAAAQgBgLgGgMIAAAAIAXAAQABAAABAAQABAAAAAAQABgBAAAAQAAgBAAAAIAAAAIAAgqIglAAIAABVgArXGpIAAg/IgjAAIAAgTIAjAAIAAgPIgkAAIAAgSIASAAQgBgJgFgLIAAAAIAQgEIgaAAIAAgSIAhAAIgGgPIAXgFIAIAUIAbAAIAAASIgXAAIAPADQgEAMgFAJIAAAAIAUAAIAAASIggAAIAAAPIAdAAIAAATIgdAAIAAA/gArWEyIgOAEIAbAAQAGgMACgMIAAAAIgcAAQAFAKACAKgAzOGlIAAgUIBEAAIAAgXIgxAAIAAgUIAxAAIAAgVIgoAAIAAgQIgYAOIAAAAQgHgLgHgHIAAAAQAggNAfgcIAAAAIgaAAIAAgVIBBAAQAMASAWARIAAAAQAVAQAYAIIAAAAQgKALgFAKIAAAAQgIgDgQgLIAAAAIAAAQIgpAAIAAAVIAyAAIAAAUIgyAAIAAAXIBGAAIAAAUgAytE+IBdAAQgcgUgSgWIAAAAQgSAUgdAWgAKQGhIAAgXIBEAAIAAiPIAYAAIAAA2IBDAAIAAAXIhDAAIAABCIBQAAIAAAXgACzGVQAIgOAGgXIAAAAIASAFQgGAYgJAQIAAAAQgHgEgKgEgAr+GRQALgPAGgSIAAAAIARAFQgIAXgLAPIAAAAIgPgKgADzF2IARgGQAKAUACAJIAAAAIgRAIQgDgLgJgUgAEKFKIAAAIIhNAAIAAgTIBNAAIAAABQANgXAGgwIAAAAIAWADIgGAfIAmAAIADAAIAQADQgGAfgIAXIAAAAIgSgFIAHggIAAAAIglAAQgGAWgKAQIAAAAQgHgHgHgEgAC8E2IAAgRIAdAAIAAgKIgiAAIAAgSIAiAAIAAgPIAVAAIAAAPIAhAAIAAASIghAAIAAAKIAdAAIAAARgA3hCSMAwBAAAgAX4ivQgRg1gYg5IAAAAIjXAAIgpBuIglAAQAsiHA6h6IAAAAQAqhaAWgeIAAAAIArAAQAWAhApBXIAAAAQA5B7AsCGIAAAAgAUFk/IC9AAQgehIgbg7IAAAAQgZg1gMgSIAAAAQgoBAg3CKgAONivQgikBgahNIAAAAQg3CDg+CkIAAAAIgcAAQg2iThAiTIAAAAQgaBegiDvIAAAAIgjAAQAWicAThgIAAAAQAMg8ARhBIAAAAIAtAAQAeBEAlBeIAAAAIAtByIAAAAQBAimAxhuIAAAAIAtAAQATBFALA4IAAAAQATBiAUCaIAAAAgACcivIAAl5IAlAAIAAF5gAk+ivIAAlXIiWAAIAAgiIFQAAIAAAiIiWAAIAAFXgAuSivIAAl5IAlAAIAAFXIDiAAIAAAigAzRivQgYhDgRgrIAAAAIjYAAQgeBOgKAgIAAAAIglAAQAsiHA5h6IAAAAQAqhaAWgeIAAAAIArAAQAWAhApBXIAAAAQA5B7AtCGIAAAAgA3Fk/IC9AAQgdhHgcg8IAAAAQgZg1gMgSIAAAAQgnA/g4CLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_graphics_10,x:156.825,y:55.2501}).wait(18));

	// Layer_9
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.478,1],-89.9,0,89.9,0).s().p("AuCYuMAAAgxbIcFAAMAAAAxbg");
	this.shape.setTransform(-102.4016,-26.9384,1,1.2913,44.9995);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.478,1],-63.5,-63.5,63.6,63.6).s().p("EggfAMpMAtIgtIIT3T3MgtIAtIg");
	this.shape_1.setTransform(-67.725,-19.825);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.478,1],-63.5,-63.6,63.6,63.5).s().p("EggfAMpMAtIgtIIT3T3MgtIAtIg");
	this.shape_2.setTransform(140.375,22.725);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{x:-102.4016,y:-26.9384}}]},10).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape,p:{x:487.2484,y:93.6116}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(11).to({_off:false},0).wait(1).to({x:-33.075,y:-12.725},0).wait(1).to({x:1.625,y:-5.675},0).wait(1).to({x:36.325,y:1.425},0).wait(1).to({x:70.975,y:8.525},0).wait(1).to({x:105.675,y:15.625},0).to({_off:true},1).wait(2).to({_off:false,x:209.725,y:36.875},0).wait(1).to({x:244.425,y:43.975},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(17).to({_off:false},0).wait(1).to({x:175.075,y:29.825},0).to({_off:true},1).wait(2).to({_off:false,x:279.125,y:51.075},0).wait(1).to({x:313.825,y:58.175},0).wait(1).to({x:348.475,y:65.275},0).wait(1).to({x:383.175,y:72.375},0).wait(1).to({x:417.875,y:79.425},0).wait(1).to({x:452.525,y:86.525},0).to({_off:true},1).wait(1));

	// sb_sc1_tt_alt_copy
	this.instance = new lib.sb_sc1_ttalt("synched",0);
	this.instance.setTransform(157.3,68.3,1,1,0,0,0,157.3,55.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({y:55.8,alpha:1},6).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,314.7,124);


(lib.an_sc1_ttheart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc1_tt_heart
	this.instance = new lib.sb_sc1_ttheart("synched",0);
	this.instance.setTransform(149.8,7.9,1,1,0,0,0,149.8,7.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:32.9,alpha:1},22,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,299.6,40.8);


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
	this.instance.setTransform(57.2,-2.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).wait(55).to({startPosition:36},0).to({_off:true},1).wait(9).to({_off:false},0).wait(1));

	// an_arr
	this.instance_1 = new lib.an_arr("synched",3,false);
	this.instance_1.setTransform(44,-2.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37).to({_off:false},0).wait(55).to({startPosition:36},0).to({_off:true},1).wait(9).to({_off:false},0).wait(1));

	// MergedLayer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA+B8QgBgKgEgGIAYABQAGAAACgCQAGgGAEggIimAAIAAgBIgNAAIAAhjIC1AAIAAAOIhMAAIAAAQIBBAAIAAALIhBAAIAAAPIBCAAIAAANIhCAAIAAAQIBeAAIgBAHQgEAxgJAIQgFAGgKAAIgKABIgSgBgAg8A2IBCAAIAAgQIhCAAgAg8AZIBCAAIAAgPIhCAAgAg8gBIBCAAIAAgQIhCAAgAh1BxQAPgNARgbIARAJQgYAhgIAJgAgyBRIARgDQAHATACATIgSADQgBgQgHgWgAgFBRIAOgFQANAWAEAMIgQAGQgGgRgJgSgAAlBPIAOgHQAOANAHANIgPAHQgGgLgOgPgAh2grQAjgNALghIgnAAIAAgQIArAAIADgTIATAAIgCATIA3AAIgBAIQgCAqgHAIQgEAEgKABQgIABgRgBQgBgKgEgFIAWABQAFAAACgDQAEgEACgaIgoAAQgMArgrARQgGgKgFgEgAAWgtIAAhBIBgAAIAABBgAApg9IA5AAIAAghIg5AAg");
	this.shape.setTransform(18.175,-2.43);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA0gzIhQAAIAAgTIBPAAIgCg0IAVAAIAAA0IA1AAIAAATIg0AAQACBEAJAsQAJAsALAAQAGAAABgsQAHAHAJAEQgDAegFAMQgFALgNAAQgoAAgHiwgAhxB5IAAhcIBKAAIAABPIg4AAIAAANgAhfBbIAmAAIAAgtIgmAAgAgiBVIAhgIIAAhIIgdAAIAAgRIBLAAIAAARIgdAAIAABDIAmgKIACARIhVAZgAhwAJIAAgPIBIAAIAAAPgAhwgZIAAgQIBIAAIAAAQgAh8g8IAAgRIBaAAIAAARgABMhtIAPgIQAQARAIAQIgPAKQgIgRgQgSgAhih0IAQgIQAPAVAFAOIgQAJQgGgPgOgVg");
	this.shape_1.setTransform(-13.8,-2.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AApB7QgBgKgFgKQARACAWgBQAHAAAEgDQAGgHADgjQAEgiAChOIhOAAQgLAYgLAPIgRgLQAagiAQg/IATADQgGAYgJAXIBbAAIAAALQgDBcgDAjQgDAlgIAJQgHAKgPABIgOABIgagBgAh3BxQALgVAHgqIASAFQgIAngKAaQgJgEgJgDgAhEA1IAQgEQAIAtABAPIgRAEQgCgagGgigAgjAwIAPgFQAMAcAGAYIgQAGQgGgagLgbgAANgGIAOgLQAhAfAPAbIgPALQgNgZgighgAh1AUQAGgBAQgQQAJgIATgYQgnAFgGADQgCgLgEgIQAGgCALgNQAZgeARgmIATAIQgWApgbAfIAkgEIAVggIASALQgjAyghAgIA0gIIgJgYIAQgEQANAeAGAYIgSAGIgDgPQhPAMgGAEg");
	this.shape_2.setTransform(-47.175,-2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA/BTIAPgKQAdAQAUASIgQAMQgRgQgfgUgAgjBpQAkgNAUgUIASAKQgZAXgkAOgAh0BiQAYABAGgBQAFAAAAgEIAAhrIgtAAIAAgSIBGAAQgZgWgfgRIALgNIAbAQQAPgPAMgQIhJAAIAAgSIBWAAIAEgCIANAJQgTAegYAWQAMAJAKAJIgHAIIAUAAIADAAIAMADQgOApgJARIgPgEQAIgQAHgXIgdAAIAABrQAAAQgKAEQgIAEgeAAQgBgIgFgMgAgFBDIAAiNIAoAAIAFgZIg3AAIAAgSICIAAIAAASIg6AAIgIAZIA5AAIAACNgAANAzIBPAAIAAgbIhPAAgAANAJIBPAAIAAgaIhPAAgAANgfIBPAAIAAgbIhPAAg");
	this.shape_3.setTransform(-79.225,-1.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},16).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},55).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).wait(1));

	// Layer_5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0080FF").s().p("Az+EBICBoBMAl8AAAIiBIBg");
	this.shape_4.setTransform(-12.275,-1.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(16).to({_off:true},1).wait(4).to({_off:false},0).wait(2).to({_off:true},1).wait(1).to({_off:false},0).wait(2).to({_off:true},1).wait(9).to({_off:false},0).wait(55).to({_off:true},1).wait(9).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.2,-26.9,255.89999999999998,51.5);


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
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).to({alpha:1},7).to({startPosition:21},17).to({regX:0.1,regY:0.1,scaleX:0.7876,scaleY:0.7876,x:0.1,y:0.1,startPosition:25},3).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0,startPosition:21},3).to({regX:0.1,regY:0.1,scaleX:0.7876,scaleY:0.7876,x:0.1,y:0.1,startPosition:25},3).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0,startPosition:37},3).to({startPosition:82},45).to({_off:true},1).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.2,-26.9,255.89999999999998,51.5);


(lib.scc4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// an_sc4_bose
	this.instance = new lib.an_sc4_bose("synched",0,false);
	this.instance.setTransform(549.5,289.2,1.0883,1.0883,0,0,0,387.7,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// an_sc4_zero
	this.instance_1 = new lib.an_sc4_zero("synched",0,false);
	this.instance_1.setTransform(708.2,250.65,1.0883,1.0883,0,0,0,221.3,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// an_sc4_in_outline
	this.instance_2 = new lib.an_sc4_inoutline("synched",0,false);
	this.instance_2.setTransform(-154.95,268.75,0.7528,0.7528,0,0,0,181.7,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

	// an_sc4_in
	this.instance_3 = new lib.an_sc4_in("synched",0,false);
	this.instance_3.setTransform(-140.45,234,0.7528,0.7528,0,0,0,179.3,46.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

	// sc4_bg
	this.instance_4 = new lib.an_sc4_bg("synched",0,false);
	this.instance_4.setTransform(299.75,252.25,1,1,0,0,0,300.2,264.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-524,-203.6,1533.2,849.1);


(lib.sc3_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// an_sc3_car
	this.instance = new lib.an_sc3_car("synched",0,false);
	this.instance.setTransform(241.85,275.4,0.4976,0.4976,0,0,0,243.2,177.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#091522").s().p("AyhSiMAAAglDMAlDAAAMAAAAlDg");
	this.shape.setTransform(890.15,234.45,1,1,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","#091522"],[0,0.902],-66.6,0,66.6,0).s().p("AqZdhMAAAg7BIUzAAMAAAA7Bg");
	this.shape_1.setTransform(575.8721,318.2,2.9794,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#091522").s().p("AyhSiMAAAglDMAlDAAAMAAAAlDg");
	this.shape_2.setTransform(-410.05,272.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0)","#091522"],[0,0.902],-66.6,0,66.6,0).s().p("AqZdhMAAAg7BIUzAAMAAAA7Bg");
	this.shape_3.setTransform(-95.7721,188.9,2.9794,1,180);

	this.instance_1 = new lib.sc3bg();
	this.instance_1.setTransform(-294,145,1.326,0.9305);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(45));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-528.7,0,1537.5,507.1);


(lib.sc2_bg = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.an_sc2_car("synched",0,false);
	this.instance.setTransform(-352.15,240.9,0.709,0.709,0,0,0,528.5,197.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(205,4,4,0)","rgba(172,17,17,0.51)","rgba(205,4,4,0)"],[0,0.486,1],-91.4,0,91.4,0).s().p("AuRYWMAAAgwrIcjAAMAAAAwrg");
	this.shape.setTransform(48.7957,324.036,0.3034,3.9099,95.6316);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(149,9,9,0)","#2B0202"],[0,0.561],-91.4,0,91.4,0).s().p("AuRYWMAAAgwrIcjAAMAAAAwrg");
	this.shape_1.setTransform(233.197,348.3053,0.8563,5.1002,94.4061);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,0.561],-91.4,0,91.4,0).s().p("AuRYWMAAAgwrIcjAAMAAAAwrg");
	this.shape_2.setTransform(-5.887,288.1059,5.3194,2.7142,148.8578);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,0.561],-91.4,0,91.4,0).s().p("AuRYWMAAAgwrIcjAAMAAAAwrg");
	this.shape_3.setTransform(479.6555,320.6632,6.4726,2.2171,-19.4421);

	this.instance_1 = new lib.sc2bg();
	this.instance_1.setTransform(-130,163,0.9211,0.8567);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-726.8,-325.3,1879.3,1226.9);


(lib.scc1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// an_sc1_tt_alt
	this.instance = new lib.an_sc1ttalt("synched",0,false);
	this.instance.setTransform(359.2,253.25,0.9445,0.9445,0,0,0,157.5,55.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({startPosition:27},0).to({_off:true},1).wait(3));

	// an_sc1_tt_heart
	this.instance_1 = new lib.an_sc1_ttheart("synched",0,false);
	this.instance_1.setTransform(753.15,243.6,1.1782,1.1782,0,0,0,150.1,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({startPosition:22},0).to({_off:true},1).wait(3));

	// sc1_bg
	this.instance_2 = new lib.sc1_bg("synched",0,false);
	this.instance_2.setTransform(136.15,236.8,0.7883,0.7883,0,0,0,300.3,264.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({startPosition:89},0).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-735.2,97.8,1759.6000000000001,308.4);


(lib.scc5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// an_sc5_free
	this.instance = new lib.an_sc5_free("synched",0,false);
	this.instance.setTransform(1004.25,233.1,1.0188,1.0188,0,0,0,372.4,27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90).to({startPosition:47},0).to({_off:true},1).wait(16));

	// an_sc5_100w
	this.instance_1 = new lib.an_sc5_100w("synched",0,false);
	this.instance_1.setTransform(280.75,279.4,1.0012,1.0012,0,0,0,352.2,40.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90).to({startPosition:46},0).to({_off:true},1).wait(16));

	// an_sc5_4w
	this.instance_2 = new lib.an_sc5_4w("synched",0,false);
	this.instance_2.setTransform(38.25,279.45,1.0012,1.0012,0,0,0,369.4,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90).to({startPosition:40},0).to({_off:true},1).wait(16));

	// an_sc5_alt
	this.instance_3 = new lib.an_sc5_alt("synched",0,false);
	this.instance_3.setTransform(256.7,222.5,1.3161,1.3161,0,0,0,379.8,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90).to({startPosition:39},0).to({_off:true},1).wait(16));

	// an_sc5_btn
	this.instance_4 = new lib.an_sc5btn("synched",0,false);
	this.instance_4.setTransform(936.25,322.9,0.9134,0.9134);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90).to({startPosition:90},0).to({_off:true},1).wait(16));

	// sc5_bg
	this.instance_5 = new lib.an_sc5_bg("synched",0,false);
	this.instance_5.setTransform(337.45,252.3,1,1,0,0,0,300.2,264.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90).to({startPosition:69},0).to({_off:true},1).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1005.9,-176.1,2476.1,637.3);


(lib.scc3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.an_sc3_tt("synched",0,false);
	this.instance.setTransform(-35,235.05,0.8373,0.8373,0,0,0,506.7,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// an_sc3_TJP
	this.instance_1 = new lib.an_sc3_TJP("synched",0,false);
	this.instance_1.setTransform(519.2,253,1.1531,1.1531,0,0,0,345.4,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// an_sc3_LKA
	this.instance_2 = new lib.an_sc3_LKA("synched",0,false);
	this.instance_2.setTransform(610.05,222.25,1.1531,1.1531,0,0,0,266.5,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

	// an_sc3_ICC
	this.instance_3 = new lib.an_sc3_ICC("synched",0,false);
	this.instance_3.setTransform(556.7,284.7,1.1531,1.1531,0,0,0,312.9,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

	// sc3_bg
	this.instance_4 = new lib.sc3_bg("synched",0,false);
	this.instance_4.setTransform(300,257.85,1,1,0,0,0,300,264.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-844,-7,2203.9,507.1);


(lib.scc2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// an_sc2_369
	this.instance = new lib.an_sc2_369("synched",0,false);
	this.instance.setTransform(764.2,286.15,0.7709,0.7709,0,0,0,178.8,29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

	// an_sc2_239
	this.instance_1 = new lib.an_sc2_239("synched",0,false);
	this.instance_1.setTransform(626.6,193.25,0.7709,0.7709,0,0,0,0.3,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

	// an_sc2_vc
	this.instance_2 = new lib.an_sc2_vc("synched",0,false);
	this.instance_2.setTransform(34.7,247.1,0.797,0.797,0,0,0,337.6,21.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45));

	// an_sc2_change
	this.instance_3 = new lib.an_sc2_change("synched",0,false);
	this.instance_3.setTransform(149.55,253.6,1.0135,1.0135,0,0,0,428.9,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45));

	// sc2_bg
	this.instance_4 = new lib.sc2_bg("synched",0,false);
	this.instance_4.setTransform(299.75,255.25,1,1,0,0,0,300.2,264.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-727.3,-335,1879.3999999999999,1226.9);


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
	this.instance.setTransform(20,174,0.3708,0.3708);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(450));

	// scc5
	this.instance_1 = new lib.scc5("synched",0,false);
	this.instance_1.setTransform(422.75,227.15,0.5,0.5,0,0,0,317.2,250.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(359).to({_off:false},0).wait(91));

	// scc4
	this.instance_2 = new lib.scc4("synched",0,false);
	this.instance_2.setTransform(431.7,226.85,0.5,0.5,0,0,0,299.8,250);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(270).to({_off:false},0).to({_off:true},89).wait(91));

	// scc3
	this.instance_3 = new lib.scc3("synched",0,false);
	this.instance_3.setTransform(431.6,226.85,0.5,0.5,0,0,0,300,250);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(181).to({_off:false},0).to({_off:true},89).wait(180));

	// scc2
	this.instance_4 = new lib.scc2("synched",0,false);
	this.instance_4.setTransform(431.5,226.85,0.5,0.5,0,0,0,299.8,250);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90).to({_off:false},0).to({_off:true},92).wait(268));

	// scc1
	this.instance_5 = new lib.scc1("synched",0,false);
	this.instance_5.setTransform(427.6,226.35,0.5,0.5,0,0,0,308,251);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},90).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240.8,-65.6,1246,613.4);


// stage content:
(lib._728x90 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(358.4,36.7,0.9612,0.9612,0,0,0,394.1,218.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(899).to({mode:"single",startPosition:449},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(112,-191,834.6,544.6);
// library properties:
lib.properties = {
	id: '52216716D59F4C23A0D78676329F31EA',
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/logo.png", id:"logo"},
		{src:"images/sc1bg.jpg", id:"sc1bg"},
		{src:"images/sc2bg.jpg", id:"sc2bg"},
		{src:"images/sc2car.png", id:"sc2car"},
		{src:"images/sc3bg.jpg", id:"sc3bg"},
		{src:"images/sc3car.png", id:"sc3car"},
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
an.compositions['52216716D59F4C23A0D78676329F31EA'] = {
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