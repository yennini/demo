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
p.nominalBounds = new cjs.Rectangle(0,0,1000,680);


(lib.sc2bg = function() {
	this.initialize(img.sc2bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,1075);


(lib.sc3bg = function() {
	this.initialize(img.sc3bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,667);


(lib.sc4bg = function() {
	this.initialize(img.sc4bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,727);


(lib.sc5bg = function() {
	this.initialize(img.sc5bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,667);// helper functions:

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


(lib.sb_sc5btntt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#7BFA4C").s().p("AAlBZQAPgRAFglIAcAEIgGAbQAQAKAIAHIgSAVQgGgFgKgIQgFAKgEAGQgJgJgOgJgAgSBaQgBAEgCABQgEAIgJABQgEABgOAAQgBgNgGgKIAMAAQADAAACgCIADgPIgIADQAAgGgHgWIALgDIAEAOIABgTIg4AAIAAh/IBOAAIAAAaIgUAAIAAALIARAAIAAACQAjgTATgfIAcAKIgEAHQAWAQAZAIQgJAPgCAPIgVgLIAAAPIhAAAIAAgLIgMAIQgGgIgLgKIAAASIgRAAIAAAJIASAAIAAAXIgSAAIAAAJIAXAAIAAAJQgCA3gCAPQAQgTAFggIAaAFIgEAQQANAJAGAGIgQAUIgMgKQgIAPgJAKQgJgKgJgGgAhGAHIALAAIAAgJIgLAAgAhGgZIALAAIAAgJIgLAAgAAag2IAlAAIgUgQQgJAKgIAGgAhGg6IALAAIAAgLIgLAAgAhpBVQAGgTACgcIAQAGQgDAggEAPgAhQArIAMgBQACAXgBARIgNACQABgWgBgTgAhDAqIAMgCIAFAjIgMADQgBgVgEgPgAAsAgIAAg2IA0AAIAAA2gABBANIAJAAIAAgQIgJAAgAgJAgIAAg2IAwAAIAAA2gAAKANIAIAAIAAgQIgIAAg");
	this.shape.setTransform(83.175,10.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7BFA4C").s().p("AAGBVIAKgKIgjAAIANAKQgfAPgtAGQgIgLgJgKQAYgCAagIIgXAAIAAhKICRAAIAABKIgUAAIAqAMIgXATQgdgMglgJgAgqA7IBTAAIAAgFIhTAAgAgqAoIBTAAIAAgFIhTAAgAgqAVIBTAAIAAgFIhTAAgAhEgCIADgRIgjAAIAAgWIAlAAIACgQIB8AAIgBAQIAnAAIAAAWIgpAAIgCARgAAJgSIAVAAIAAgEIgUAAgAglgSIAVAAIABgEIgWAAgAAMglIAUAAIABgFIgVAAgAgjglIAWAAIAAgFIgWAAgABBguIAAgQIiDAAIAAAQIgdAAIAAgpIBOAAIgEgLIAbgHQAGALADAHIBQAAIAAApg");
	this.shape_1.setTransform(59,10.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7BFA4C").s().p("AgBBbIAAAFIg/AAIAAAIIgWAAIAAhAIgGAIQgFgMgHgLQAQgSAJgVIgRAAIAAgsIAtAAIAAAsIgPAAIAIACIgFAKIAPAAIgDgJIALgEIgFAAIAAgsIAsAAIAAAsIgdAAIAFANIAZAAIAAAUIgZAAIAAAFIAWAAIAAAUIgWAAIAAAGIAXAAIAAATIgXAAIAAAIIAYAAIAAAAQARgNADgfIgNAAIAAiBIBWAAIAACBIgSAAIAAAnQAAAGADAAIADAAQACAAABgEIABgXQAEAFARAFQgBAYgGAKQgEAIgLAAIgKAAQgNAAgFgHQgEgGAAgSIAAgnIgGAAQgCAZgIARQgJATgTALQgEgJgEgEgAhABMIAQAAIAAgIIgQAAgAhAAxIAQAAIAAgGIgQAAgAhAAXIAQAAIAAgFIgQAAgAAhAEIAgAAIAAgHIggAAgAAhgcIAgAAIAAgIIggAAgAhQgeIALAAIAAgNIgLAAgAgcgeIAKAAIAAgNIgKAAgAAhg9IAgAAIAAgHIggAAgAgrg+IAAgpIAZAAIAAAJIAVAAIAAAWIgVAAIAAAKgAhNg+IAAgKIgZAAIAAgWIAZAAIAAgJIAZAAIAAApg");
	this.shape_2.setTransform(34.675,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7BFA4C").s().p("AhOBQQBdgHAhggIAZAMQgnAohjAMQgEgNgJgMgAhDAxQBAgIAbgWIAYAMQggAahDAOQgGgLgKgLgAg3AaQgRAIgSAGQgFgMgLgOQAfgIAWgMQgaACgGACIgKgYQAEgBAEgFQAGgHADgPIAFADIgJgZQAFgBALgFQAUgIARgOIAcANQgMAIgKAFIAvgBIgPgMIAYgKQAfAWAPARIgaANIgGgIIhbADQgVABgHACIAWAJIgJAOIALgBIgEgJIAWgGIAHAOQAGgHAGgLIAcAJIgEAHIAFAFQAEgCACgEQAHgKACgLIAcAKIgJAPIANAAIgGgJIAWgJQAQAVAEAPIgYAJIgCgHIgbADQAZAMAiAIQgKAJgKAPQg2gPgkgiQgMANgUANQAagIALgHIAWALQgbASgpALIgLgOg");
	this.shape_3.setTransform(10.7,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93.8,21.4);


(lib.sb_sc5_btn_bg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#7BFA4C").s().p("ApvCvIAAldITfAAIAAFdg");
	this.shape.setTransform(62.375,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124.8,35);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7BFA4C").s().p("Ag/BDIAAgTIA0AAIAAgPIglAAIAAgSIAlAAIAAgOIgdAAIAAgMIgTAKQgFgLgIgHQAXgJAWgSIgQAAIAAgUIA2AAQAKAOAQAMQARANATAGQgHAHgHANIgTgKIAAAMIgdAAIAAAOIAlAAIAAASIglAAIAAAPIA2AAIAAATgAgggRIA/AAQgRgNgOgQQgNAPgTAOg");
	this.shape.setTransform(185.875,8.375);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(70).to({_off:false},0).wait(80));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7BFA4C").s().p("AALAzQgTAQgtAFQgFgLgJgLQAjgCASgIIgkgNQAHgKAEgIIgbAAIAAgTIAmAAQAGgLADgLIAYAFIgFARIATAAIABgNIAVABIAAgMIhTAAIAAAPIgWAAIAAgjIA0AAIgEgMIAYgFIAIARIAxAAIAAAjIgSAAQAAAFgBAEIAVAAIAAATIgbAAQgDAOgIALQAaAMAMAHIgPATQgOgJgbgMgAgPARIAUAIQAGgGADgKIgYAAg");
	this.shape_1.setTransform(170.5,8.225);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(66).to({_off:false},0).wait(84));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7BFA4C").s().p("AAQBHQABgLgIgKIAXABQAEAAADgDQAFgGAChFIgdAAQgFALgHALIgLgJIAABGIgoAAIAAALIgTAAIAAhxIARAAQADgOAAgKIAYADIgIAVIAXAAIAAAUQAKgSAHgaIAVAFIgHASIAqAAIAAAJIgEBHQgBAWgFAGQgGAIgKABIgNABIgMAAgAguAlIAUAAIAAgaIgUAAgAgugGIAUAAIAAgVIgUAAgAADgBIARgKQAOAUAHAMIgSAMQgFgLgPgXg");
	this.shape_2.setTransform(155.25,8.27);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(62).to({_off:false},0).wait(88));

	// Layer_5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7BFA4C").s().p("AhDBDIAAgVIA5AAIAAgJIgvAAIAAgUIAvAAIAAgLIgrAAIAAhIIBtAAIAABIIgrAAIAAALIAwAAIAAAUIgwAAIAAAJIA3AAIAAAVgAALgMIAWAAIAAgIIgWAAgAgfgMIAXAAIAAgIIgXAAgAALgmIAWAAIAAgIIgWAAgAgfgmIAXAAIAAgIIgXAAg");
	this.shape_3.setTransform(139.775,8.325);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(58).to({_off:false},0).wait(92));

	// Layer_6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7BFA4C").s().p("AAkA3IhDAGQgPACgHACIgJgXQAHgCAJgKQAFgFAMgQQALgQAIgRIAaAKQgQAbgWAZIAugEIgNgTIAWgKQAVAcANAZIgYAMgAhJgNQAagWAOgiIAZAIQgTAogbAaQgGgIgNgKgAATguIgVAAIAAgWIAlAAQAMAiAbARQgLAKgFALQgZgSgOggg");
	this.shape_4.setTransform(124.45,8.475);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(54).to({_off:false},0).wait(96));

	// Layer_7
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7BFA4C").s().p("AAOBHQgOAAgDgEQgEgEgBgMIAAgIQgEAOgGALIgRgIIAAALIgUAAIAAhHIgGAHQgGgNgFgJQAVgVAKghIAVAGIgCAFIAgAAIgCgJIATgDIAGAMIAiAAIAAAPIgUAAIAIACIgCAGIASAAIAAAQIhiAAIAAgQIATAAIgBgGIAIgCIgVAAIAAgPQgFANgIAOIAABZQAIgLADgNIAQAGIAAgFIAQAAIgBgCIAEgEIgcAAIAAgrIBPAAIAAArIgjAAIALALIgNALIgOgNIAAAMIABAEIAFABIALAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBIABgIQAFAEAKADIgGgNIARgHIAOAdIgSAIIgFgOQgCAJgEAEQgEADgKAAgAACARIAmAAIAAgEIgmAAgAACACIAmAAIAAgEIgmAAgAAMgjIAUAAIACgIIgaAAg");
	this.shape_5.setTransform(109.05,8.275);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(50).to({_off:false},0).wait(100));

	// Layer_8
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7BFA4C").s().p("AgoAtQgNgQAAgdQAAgbANgRQAOgQAaAAQAaAAAOAQQAOARABAbQAAAdgPAQQgOAQgaAAQgaAAgOgQgAgSgbQgHAKAAARQAAAmAZAAQALAAAHgJQAIgKAAgTQAAgQgIgLQgHgKgLAAQgLAAgHAKg");
	this.shape_6.setTransform(95.25,8.1);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(46).to({_off:false},0).wait(104));

	// Layer_9
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7BFA4C").s().p("AACA8IAAhZIgfAEIAAgWIA7gMIAAB3g");
	this.shape_7.setTransform(84.325,8);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(42).to({_off:false},0).wait(108));

	// Layer_10
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7BFA4C").s().p("AguA8IAAgZQBBgjgBgSQABgRgYAAQgRAAgTAFIAAgXQAVgGAXAAQASAAAMAKQANAKAAAUQAAAQgOAOQgMAMgYANIAxAAIAAAYg");
	this.shape_8.setTransform(75.4,8.025);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(38).to({_off:false},0).wait(112));

	// tdash
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7BFA4C").s().p("AhGAKIAAgTICNAAIAAATg");
	this.shape_9.setTransform(59.525,13.2);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(34).to({_off:false},0).wait(116));

	// t2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7BFA4C").s().p("AgpA8IAAgZQA6gjgBgSQABgRgVAAQgQAAgRAFIAAgXQASgGAWAAQAQAAALAKQAMAKAAAUQAAAQgNAOQgLAMgWANIAsAAIAAAYg");
	this.shape_10.setTransform(44.2,8.025);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(30).to({_off:false},0).wait(120));

	// t0
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7BFA4C").s().p("AgkAtQgMgQAAgdQAAgbAMgRQAMgQAYAAQAXAAANAQQANARAAAbQAAAdgNAQQgNAQgXAAQgXAAgNgQgAgRgbQgFAKAAARQAAAmAWAAQAXAAABgmQAAgQgIgLQgHgKgJAAQgKAAgHAKg");
	this.shape_11.setTransform(33.55,8.1);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(26).to({_off:false},0).wait(124));

	// Layer_13
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7BFA4C").s().p("AASA7QgSgegXgbQAOgaAYgiIAiAAQggApgLARQAMANAhAugAgyA7IAAh1IAZAAIAAB1g");
	this.shape_12.setTransform(18.925,8.125);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(18).to({_off:false},0).wait(132));

	// Layer_14
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7BFA4C").s().p("AgrA2IAAgZQAYAIAQgBQAXAAAAgKQAAgIgOgDIgagJQgZgGAAgYQAAgkAvAAQAOAAAXAGIAAAZQgXgHgQAAQgTAAAAALQAAAHALADIAbAIQAbAHAAAYQAAAlguAAQgWAAgVgHg");
	this.shape_13.setTransform(7.425,8.1);
	this.shape_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(10).to({_off:false},0).wait(140));

	// Layer_15
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7BFA4C").s().p("AAeA7IgGgWIgxAAIgGAWIgaAAQAShBAWg0IAiAAQAYA6ARA7gAgSAOIAjAAQgJgbgJgYIgRAzg");
	this.shape_14.setTransform(-3.35,8.125);
	this.shape_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(6).to({_off:false},0).wait(144));

	// Layer_16
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7BFA4C").s().p("AgMA7IAAhdIgiAAIAAgYIBdAAIAAAYIgiAAIAABdg");
	this.shape_15.setTransform(-12.725,8.125);
	this.shape_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(2).to({_off:false},0).wait(148));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,0,210.6,15.5);


(lib.an_sc5btnarrow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(123,250,76,0)").s().p("AhIhUICRBUIiRBUg");
	this.shape.setTransform(7.325,8.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7BFA4C").s().p("AhIhUICRBUIiRBUg");
	this.shape_1.setTransform(7.325,8.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},6).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.7,16.9);


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
	this.shape.graphics.lf(["#08204F","rgba(8,32,79,0.906)","rgba(8,32,79,0.639)","rgba(8,32,79,0.196)","rgba(8,32,79,0)"],[0,0.275,0.576,0.886,1],0,-63.3,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape.setTransform(274.3897,327.7688,1.3256,0.7003,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#08204F","rgba(8,32,79,0.906)","rgba(8,32,79,0.639)","rgba(8,32,79,0.196)","rgba(8,32,79,0)"],[0,0.275,0.576,0.886,1],0,-63.3,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape_1.setTransform(274.3897,459.9476,1.3256,1.4775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#08204F","rgba(8,32,79,0.906)","rgba(8,32,79,0.639)","rgba(8,32,79,0.196)","rgba(8,32,79,0)"],[0,0.275,0.576,0.886,1],0,-63.3,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape_2.setTransform(274.3897,-23.2371,1.3256,1.5784,0,180,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#08204F","rgba(8,32,79,0.906)","rgba(8,32,79,0.639)","rgba(8,32,79,0.196)","rgba(8,32,79,0)"],[0,0.275,0.576,0.886,1],0,-63.3,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape_3.setTransform(274.3897,118.2819,1.3256,0.7467);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(83));

	// Layer_3
	this.instance = new lib.sc4bg();
	this.instance.setTransform(66,71,0.4063,0.4062);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:true},1).wait(4).to({_off:false},0).wait(83));

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("EgdUAzeMAAAhm7MA6pAAAMAAABm7g");
	this.shape_4.setTransform(306.1056,157.1401,1.1194,1.1194);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2).to({_off:true},1).wait(4).to({_off:false},0).wait(83));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(66,-211.6,450.29999999999995,765.2);


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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7BFA4C").s().p("AgaBsIAAgUIAZAAIAAivIgZAAIAAgUIA1AAIAADXg");
	this.shape.setTransform(206.95,7.325);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(34).to({_off:false},0).wait(37).to({_off:true},1).wait(18));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7BFA4C").s().p("Ag7BZQAQgPAJgXIAdAIQgLAbgSATQgIgIgRgIgAAsBKIAYAAQAEAAAAgFIAAitIAdAAIAACtQAAAWgLAHQgKAGgbAAQgCgPgHgPgAhhBWQAQghAMgnIAaARQgIAbgRAsgAgCA9IAUgKIg4AAIAAiSIBDAAIAACSIgGAAQAOARAGAOIgZAPQgFgMgPgYgAgMAXIANAAIAAgOIgNAAgAgMgPIANAAIAAgOIgNAAgAgMg3IANAAIAAgNIgNAAgAAlAvIAAiBIAbAAIAACBgAhkgUIARgYQAXAJAMAKIgTAZQgLgKgWgKgAhchPIASgXQAYAJALAKIgTAaQgLgLgXgLg");
	this.shape_1.setTransform(189.425,6);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(30).to({_off:false},0).wait(41).to({_off:true},1).wait(18));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7BFA4C").s().p("AhjBVQAagCAXgJIgWAAIAAhIICRAAIAABIIgUAAIApANIgWATQgmgNgcgJIAJgKIgiAAIANAKQgeAQgvAHQgFgKgLgMgAgqA7IBSAAIAAgEIhSAAgAgqAoIBSAAIAAgEIhSAAgAgqAVIBSAAIAAgEIhSAAgAhEgDIACgPIgiAAIAAgXIAlAAIACgQIB9AAIgCAQIAnAAIAAAXIgpAAIgCAPgAAKgRIAUAAIAAgFIgUAAgAgmgRIAWAAIABgFIgWAAgAAMglIAUAAIAAgFIgUAAgAgjglIAVAAIABgFIgVAAgABAgtIAAgRIiCAAIAAARIgdAAIAAgqIBOAAIgFgLIAcgIQADAHAGAMIBPAAIAAAqg");
	this.shape_2.setTransform(165.7,5.95);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(26).to({_off:false},0).wait(45).to({_off:true},1).wait(18));

	// Layer_6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7BFA4C").s().p("AgCBoIAAhHIgBAAIgLgQIAAANIgVAAIAAAXIAXgFIAEAcIhdAWIgFgfIAJgBIAAhJIAaAAIAABEIAHgCIAAhOIgeAAIAAhMIBPAAIAAA0QAXgZAKgjIAfAHIgFANIAYAAIAGgBIAUAIQgKAigTAaQAUAOAWAFQgIAHgIAPIAABPIgfAAIAAgHIgiAAIAAAHgAAaBGIAiAAIAAgWIgiAAgAAUAWIAwAAQgKgGgOgLIgYARgAgjACIAVAAIAAAFQASgHATgQIgKgOQgDAGgGAFQgEgHgPgMIAAATIgUAAgAAeg2QAFAJAHAJIANgUIgYAAgAhDguIAWAAIAAgWIgWAAg");
	this.shape_3.setTransform(141.55,5.925);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(22).to({_off:false},0).wait(49).to({_off:true},1).wait(18));

	// Layer_7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7BFA4C").s().p("AhlBiIAAggIBOAAIAAijIAhAAIAAA9IBMAAIAAAgIhMAAIAABGIBcAAIAAAgg");
	this.shape_4.setTransform(117.25,5.525);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(18).to({_off:false},0).wait(53).to({_off:true},1).wait(18));

	// Layer_8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7BFA4C").s().p("AgCBpIAAgtIhjAAIAAgfIAiAAIAAgwIgHAIQgPgMgNgJQAegZAPgvIAgAIQgCAJgEAHIB5AAIAAAfIg8AAIAAAWIA2AAIAAAdIg2AAIAAAbIBJAAIAAAfIhJAAIAAAtgAgiAdIAgAAIAAgbIggAAgAg9gbIA7AAIAAgWIgsAAIgPAWg");
	this.shape_5.setTransform(92.975,5.925);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(14).to({_off:false},0).wait(57).to({_off:true},1).wait(18));

	// Layer_9
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7BFA4C").s().p("Ag5A6IASgYQAQAPARAAQAZABAAgXQAAgMgGgGQgHgGgKAAQgKAAgNAIIgRgLIAEhQIBbAAIAAAhIg5AAIgDAbQAJgDAHgBQAWABAOAMQAPAMAAAYQAAAZgRAQQgRAPgYABQgigBgXgXg");
	this.shape_6.setTransform(72.775,6.5);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(10).to({_off:false},0).wait(61).to({_off:true},1).wait(18));

	// Layer_10
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7BFA4C").s().p("AgzBQIAAggIAjAAIAAhYIgeAAIAAgYQAXgFARgKIAcAAIAAB/IAeAAIAAAgg");
	this.shape_7.setTransform(57.725,6.35);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(6).to({_off:false},0).wait(65).to({_off:true},1).wait(18));

	// Layer_11
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7BFA4C").s().p("AgaBsIAAjXIA1AAIAAAUIgZAAIAACvIAZAAIAAAUg");
	this.shape_8.setTransform(44.7,7.325);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(2).to({_off:false},0).wait(69).to({_off:true},1).wait(18));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4.7,209.7,22.9);


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
	this.shape.graphics.lf(["#2D2C4F","rgba(45,44,79,0.906)","rgba(45,44,79,0.639)","rgba(45,44,79,0.196)","rgba(45,44,79,0)"],[0,0.275,0.576,0.886,1],0,-63.3,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape.setTransform(293.9931,275.0031,1.3256,0.9176,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2D2C4F","rgba(45,44,79,0.906)","rgba(45,44,79,0.639)","rgba(45,44,79,0.196)","rgba(45,44,79,0)"],[0,0.275,0.576,0.886,1],0,-63.3,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape_1.setTransform(316.7431,418.0065,1.3256,1.3841);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#2D2C4F","rgba(45,44,79,0.906)","rgba(45,44,79,0.639)","rgba(45,44,79,0.196)","rgba(45,44,79,0)"],[0,0.275,0.576,0.886,1],0,-63.3,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape_2.setTransform(283.2931,-103.4727,1.3256,1.3297,0,180,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#2D2C4F","rgba(45,44,79,0.906)","rgba(45,44,79,0.639)","rgba(45,44,79,0.196)","rgba(45,44,79,0)"],[0,0.275,0.576,0.886,1],0,-63.3,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape_3.setTransform(304.3931,48.829,1.3256,1.1194);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(90));

	// Layer_3
	this.instance = new lib.sc3bg();
	this.instance.setTransform(108,-22,0.5327,0.5326);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("EgdUAzeMAAAhm7MA6pAAAMAAABm7g");
	this.shape_4.setTransform(306.1056,157.1401,1.1194,1.1194);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(74.9,-211.6,565.8000000000001,737.5);


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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7BFA4C").s().p("AhfBMQAUgbACgyIgSADQgBgfgEgbIAQgCQAGAXABAZIAAhSIAZAAIAAAqIAEgVIAVAHIgMAbQARgXAFgiIAVADIgDAPIAMAAIAEAAIANADIgCAUIAJAAIABgpIAZAAIgBALIALgHQANAQAFAMIgQAJIAOAAIAAAZIgUAAQAQAhAGAaIgZAIQgCgRgKgZQgJAdgYASQgFgLgLgJQAYgRAGgjIgLAAIAAgJQgOA4giAZQgGgMgIgHQAPgJALgRIgWAMIgFgVIAagHIADAOIAGgPIgOgLQgFAJgHAGQgEgJgIgGIgGAKIgEgCIAAAEQgBATgBATIAUAdIgSASIgIgQQgHAZgOASQgIgNgKgGgAgEgvIALAJIAEgRIgMAAgABBg1IAMAAQgEgKgHgKgAAAAzIAVgEQAFAVAAAUIgWAEQABgTgFgWgAA4AxIAWgIQAQAcADANIgXAJQgFgPgNgbgAgoBSQAKgPAGgZIAVAJQgHAegHAKgAAbAyIAWgGQAIAWAEASIgXAHQgCgSgJgXg");
	this.shape.setTransform(202.7,-17.35);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30).to({_off:false},0).wait(60));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7BFA4C").s().p("AAsBfIAAgKIhYAAIAAAKIgeAAIAAikIA0AAQADgMABgNIAjAEIgJAVIBDAAIAACkgAgsA7IBYAAIAAgQIhYAAgAgsAQIBYAAIAAgQIhYAAgAgsgZIBYAAIAAgQIhYAAg");
	this.shape_1.setTransform(180.825,-17.375);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(26).to({_off:false},0).wait(64));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7BFA4C").s().p("AAaBeQgUAAgGgHQgIgIAAgUIAAhFQgHgLgIgIQAWgKAJgVIgXAAIAAgYIBnAAIgBAJQgDAigGAHIgGAEIARAAIAABHIgaAAIAAgGIguAAIAAAYQAAAHACACQACABAJAAIAdAAQAHAAADgEQACgEABgOQAKAHAOADQgDAVgHAIQgHAIgRAAgAA0AKIALAAIAAgPIgLAAgAARAKIALAAIAAgPIgLAAgAApgeQgBgKgFgKIAPABQADAAACgCQACgCACgHIgWAAQgGARgMANIAWAAIAAAAgAheBVQAGgNADghIASADQgCAdgHATQgGgDgMgCgAhAAqIARgEIAFApIgSAFQAAgQgEgagAgrAnIARgGQAIAVADARIgRAGQgCgMgJgagAhdANQAFgBAKgMQAFgDAIgNQgRABgFADQgCgHgGgPQAFgBAGgKQAEgEAHgOQAIgPAEgPIAXAKQgKAXgPAWIAMAAIAMgZIAUALQgNAbgZAeIARgDIgDgLIAQgEQAIAZACANIgRAGIgCgKQgpAJgJAEg");
	this.shape_2.setTransform(158.675,-17.375);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(22).to({_off:false},0).wait(68));

	// Layer_6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7BFA4C").s().p("Ag/BfIAAhJQgJAXgKAOQgDgLgKgRQASgWAKgnIgXAAIAAgbIAbAAIAAglIAcAAIAAAlIATAAIAAAbIgTAAIAAAIIAVAfIgSAVIgDgJIAABKgAgWBXIAAgcIArAAIAAhEIghAAIAAgcIAhAAIAAg3IAfAAIAAA3IAmAAIAAAcIgmAAIAABEIAsAAIAAAcg");
	this.shape_3.setTransform(136.575,-17.35);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(18).to({_off:false},0).wait(72));

	// Layer_7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7BFA4C").s().p("AgYBLIAAAKIgnAAIAAAIIgYAAIAAhHIA/AAIAAAzQAOgBAVgFQgHgGgEgIIAHgCIgVAAIAAgTIBRAAIAEgBIARAIQgJAQgQAMQANAEAUABQgJAJgHAOQgcgEgRgIQgTAIgeAFQgCgKgIgLgAg/A+IAPAAIAAgRIgPAAgAAkA5IALgGIgUAAgAgIAdIAAgjIgGAFQgCgHgJgLIAAAIIg9AAIAAgVIA9AAIAAAHQAPgPAGgUIAJADIAAgHIgXAAIAAgVIAXAAIAAgJIAZAAIAAAmIgUAAIAIADIgDAGIAOAAIgDgHIAQgEIAAgkIAaAAIAAAIIAYAAIAAAVIgYAAIAAAJIgOAAIACAJIAfAAIAAARIgfAAIAAAFIAaAAIAAANIgaAAIAAAFIAaAAIAAANIgaAAIAAAFIAjAAIAAAQIhNAAIAAACgAAOALIARAAIAAgFIgRAAgAAOgHIARAAIAAgFIgRAAgAAOgZIARAAIAAgFIgRAAgAhWAQIAAgVIA9AAIAAAVgAhfgmIAAgXIAfAAQgCgHgJgQIAWgLQAJAQAFAMIgLAGIAgAAIAAAXg");
	this.shape_4.setTransform(114.8,-17.375);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(14).to({_off:false},0).wait(76));

	// Layer_8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7BFA4C").s().p("AhZBgIAAi0IAvAAIAEgBIAUALIgEAMIAsAAQgDgOgFgMIAbgHIAJAcIgSAFIA6AAIAAAbIg/AAIgBAUIA1AAIAAAMIgDA9QgCAVgFAFQgGAIgLADQgIACgRgBQgBgPgHgOIASABQAEAAADgDQAEgGACgxIgbAAQgDAfgMATQgMAVgZAPQgGgPgMgIQAdgPAJgdQAHgTABgtIgWAAIAAgXIgMAoQANARAAAWQAAAVgKAHQgDADgJACIgNAAQgBgNgEgJIAABAgAg+AdIAFAAQAEAAACgCQADgCAAgIQAAgRgMgPIAKgrIgMAAg");
	this.shape_5.setTransform(93,-17.45);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(10).to({_off:false},0).wait(80));

	// Layer_9
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7BFA4C").s().p("AhbBcIAAgWIBMAAIAAgGIg9AAIAAgWIA9AAIAAgGIg2AAIAAhAIA2AAIAAgFIhKAAIAAgWIBKAAIAAgGIg2ABQAAgJgGgNQBWgCAxgHIANAWQgiAFgaABIAAAIIBOAAIAAAWIhOAAIAAAFIA7AAIAABAIg7AAIAAAGIBCAAIAAAWIhCAAIAAAGIBPAAIAAAWgAANARIAcAAIAAgFIgcAAgAgpARIAaAAIAAgFIgaAAgAANgEIAcAAIAAgFIgcAAgAgpgEIAaAAIAAgFIgaAAg");
	this.shape_6.setTransform(70.7,-17.65);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(6).to({_off:false},0).wait(84));

	// Layer_10
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7BFA4C").s().p("AhhBGQAcgOANgYQALgUAEgeIgtAAIAAgdIAvAAIAAgtIAgAAIgBAtIA6AAIAABjQAAAHABACQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAIAJAAQAEAAABgHIACgZQAJAIASAFQgCAagHAKQgGALgPgBIgTAAQgQABgHgJQgGgHAAgXIAAhGIgeAAQgEAmgNAZQgQAeghASQgIgOgNgJg");
	this.shape_7.setTransform(48.775,-17.2);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(2).to({_off:false},0).wait(88));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-27,212.5,27);


(lib.an_sc3_tt2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#7BFA4C").s().p("AAnBCQgQARgXAMQgEgKgIgJIgxAAIAAAKIgbAAIAAhaIAaAAIAAgcIgiAAIAAgbIAiAAIAAgjIAdAAIAAAjIAgAAIAAAWQAJgXAFgiIAeAFIgHAeIA5AAIAAAbIgLAAQgHAsgRAdQAPATAYAKQgMAJgJAQQgVgLgQgSgAgHBBQARgJANgPQgIgSgGgUIgHAIQgCgFgHgFgAg9AxIAaAAIAAgbIgaAAgAApANQAJgTADgaIgZAAQAEAaAJATgAghgEIATAAIgHgEQAKgKAGgOIgcAAg");
	this.shape.setTransform(203.25,9.55);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(42).to({_off:false},0).wait(48));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7BFA4C").s().p("AgrBJIAXAAQAFAAAAgEIAAgDIg6AAIAAgVIA6AAIAAgFIhOAAIAAgXIBOAAIAAgEIg5AAIAAgTIA5AAIAAgGIg1AAIAAgrIA1AAIAAgGIhJAAIAAgWIBJAAIAAgLIAdAAIAAALIBLAAIAAAWIhLAAIAAAGIA3AAIAAArIg3AAIAAAGIA7AAIAAAXIAVAAIAAAXIgVAAIAAAiIgeAAIAAgIIgdAAIAAADQAAARgMAFQgIAFgcAAQgDgOgGgJgAAOAtIAdAAIAAgFIgdAAgAAOARIAdAAIAAgEIgdAAgAAOgdIAZAAIAAgIIgZAAgAgogdIAZAAIAAgIIgZAAg");
	this.shape_1.setTransform(181.125,9.6);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(38).to({_off:false},0).wait(52));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7BFA4C").s().p("AAAAQQgTA1g0AaQgIgPgOgKQA4gZAOg5IhCAAIAAgeIBHAAQABgRAAgjIAfAAQAAAdgCAXIBNAAIAAAeIhEAAQAWA7AzAUQgLAJgLATQgwgXgYg4g");
	this.shape_2.setTransform(159.175,9.525);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(34).to({_off:false},0).wait(56));

	// Layer_5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7BFA4C").s().p("AhbBdIAAgXIBMAAIAAgHIg9AAIAAgVIA9AAIAAgGIg2AAIAAhAIA2AAIAAgFIhLAAIAAgXIBLAAIAAgFIg2ABQAAgKgGgMQBPgBA4gJIANAXQgiAEgaACIAAAHIBNAAIAAAXIhNAAIAAAFIA6AAIAABAIg6AAIAAAGIBCAAIAAAVIhCAAIAAAHIBPAAIAAAXgAANARIAdAAIAAgFIgdAAgAgpARIAaAAIAAgFIgaAAgAANgEIAdAAIAAgGIgdAAgAgpgEIAaAAIAAgGIgaAAg");
	this.shape_3.setTransform(137.125,9.275);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(30).to({_off:false},0).wait(60));

	// Layer_6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7BFA4C").s().p("AgsBCIALgQIglAAIAAgVIByAAIAEgBIASALQgLAQgWAOIAPAFIgNATQgUgIg7gTgAACA7IASgJIgyAAgAArATIAAAGIhXAAIAAgGIgcAIQgOgNgJgGQA1gIAhgTIgFAAIAAgfIglAAQASADAPAFIgFAKIAFgBIACAQIgxAOIgIgTIAmgIIgcgHIAHgNIgIAAIAAAVIgZAAIAAgnIBLAAIAAgEIg8AAIAAgUICUAAIAAAUIg9AAIAAAEIBNAAIAAAnIgbAAIAAgJIAAgMIgJAAIAJAMQgOAFgMACQAXAGAKAEIgGARQgYgJgagIIAHgPIABABIgFgHQAMgCASgGIgiAAIAAAfIgIAAIARAIIgDACQAgAKAtADQgKAKgGANQgQgCgVgGgAgQAJIAeAAIgOgHg");
	this.shape_4.setTransform(115.125,9.975);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(26).to({_off:false},0).wait(64));

	// Layer_7
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7BFA4C").s().p("AhaBZIAAgbIBNAAIAAgNIg/AAIAAgbIA/AAIAAgOIg5AAIAAhgICRAAIAABgIg6AAIAAAOIBAAAIAAAbIhAAAIAAANIBKAAIAAAbgAAPgQIAdAAIAAgLIgdAAgAgpgQIAdAAIAAgLIgdAAgAAPgzIAdAAIAAgLIgdAAgAgpgzIAdAAIAAgLIgdAAg");
	this.shape_5.setTransform(93.15,9.6);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(22).to({_off:false},0).wait(68));

	// Layer_8
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7BFA4C").s().p("AAwBKIhZAHQgWADgHADQgIgWgEgJQAJgCALgNQAIgIAOgUQARgXAKgXIAiAOQgWAmgdAfIA+gEIgQgZIAdgOQAcAoAPAeIgeARQgEgLgGgJgAhhgSQAhgcAVgvIAgALQgZA3gjAhQgNgNgNgLgAAZg+IgcAAIAAgeIAzAAQAOAvAlAWQgMAMgLAQQgfgXgUgsg");
	this.shape_6.setTransform(71.2,9.8);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(18).to({_off:false},0).wait(72));

	// Layer_9
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7BFA4C").s().p("AASBfQgSAAgEgGQgGgFAAgQIAAgLQgIAXgHALIgVgLIAAAPIgcAAIAAhfQgEAGgEADQgGgQgJgNQAbgcAPgtIAcAJIgCAGIArAAIgFgMIAcgEQAEAIACAIIAuAAIAAAVIgbAAIAMADIgEAHIAZAAIAAAWIiEAAIAAgWIAbAAIgDgIIALgCIgcAAIAAgUQgHAUgJAQIAAB3QAKgRAEgQIAWAJIAAgHIAVAAIgCgDIAHgFIgnAAIAAg6IBpAAIAAA6IguAAIAPAOIgSAPIgSgSIAAARQAAAEABABQACABAEAAIAPAAQAEAAABgCQACgCAAgIQAIAFAMADIgIgRIAXgJQAQAfADAHIgYALIgIgTQgCANgGAFQgGAEgMAAgAADAXIAyAAIAAgGIgyAAgAADACIAyAAIAAgEIgyAAgAAQgvIAaAAIACgKIghAAIAFAKg");
	this.shape_7.setTransform(49.2,9.525);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(14).to({_off:false},0).wait(76));

	// Layer_10
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7BFA4C").s().p("AgzA5QgRgUAAglQAAgjARgVQARgVAiABQAhgBATAVQARAVAAAjQAAAlgSAUQgTAVggAAQghAAgSgVgAgYgjQgIANAAAWQAAAwAgAAQAOAAAJgLQAKgMAAgZQAAgVgKgOQgJgMgOAAQgPAAgJAMg");
	this.shape_8.setTransform(31.175,9.7);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(10).to({_off:false},0).wait(80));

	// Layer_11
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7BFA4C").s().p("AADBMIAAhyIgoAGIAAgcIBLgPIAACXg");
	this.shape_9.setTransform(17.275,9.55);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(6).to({_off:false},0).wait(84));

	// Layer_12
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7BFA4C").s().p("Ag7BMIAAgfQAqgXATgPQAVgRAAgNQABgWgfAAQgUAAgZAHIAAgdQAZgIAeAAQAYAAAPAMQARANAAAaQAAAUgSARQgPAPgfASIA+AAIAAAeg");
	this.shape_10.setTransform(5.95,9.575);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2).to({_off:false},0).wait(88));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212.9,19.3);


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
	this.shape.graphics.lf(["#231D17","rgba(35,29,23,0.906)","rgba(35,29,23,0.639)","rgba(35,29,23,0.196)","rgba(35,29,23,0)"],[0,0.275,0.576,0.886,1],0,-63.3,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape.setTransform(182.7728,489.1982,1.584,2.0935);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#231D17","rgba(35,29,23,0.906)","rgba(35,29,23,0.639)","rgba(35,29,23,0.196)","rgba(35,29,23,0)"],[0,0.275,0.576,0.886,1],0,-63.3,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape_1.setTransform(168.7476,292.3027,1.1488,1.1197,0,180,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#231D17","rgba(35,29,23,0.906)","rgba(35,29,23,0.639)","rgba(35,29,23,0.196)","rgba(35,29,23,0)"],[0,0.275,0.576,0.886,1],0,-63.3,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape_2.setTransform(168.7773,-182.5956,1.4203,1.6706,0,180,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#231D17","rgba(35,29,23,0.906)","rgba(35,29,23,0.639)","rgba(35,29,23,0.196)","rgba(35,29,23,0)"],[0,0.275,0.576,0.886,1],0,-63.3,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape_3.setTransform(168.7773,7.4409,1.4203,1.4153);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(86));

	// Layer_3
	this.instance = new lib.sc2bg();
	this.instance.setTransform(-44,-82,0.4077,0.4078);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3).to({_off:false},0).wait(86));

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("EgdUAzeMAAAhm7MA6pAAAMAAABm7g");
	this.shape_4.setTransform(149.3674,120.1409,1.1488,1.1488);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},1).wait(3).to({_off:false},0).wait(86));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.2,-288.4,498,910.1999999999999);


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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7BFA4C").s().p("AgaBsIAAgUIAZAAIAAivIgZAAIAAgUIA1AAIAADXg");
	this.shape.setTransform(203.25,7.425);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30).to({_off:false},0).wait(41).to({_off:true},1).wait(18));

	// Layer_9
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7BFA4C").s().p("AASBnQgYAAgJgJQgJgJAAgaIAAg3IgOAFIgNgbIAbgKIAAgxIAdAAIAAAlIAQgHIAAg3IAcAAIAAAsIAbgKIABgBIAYAIIgCAFQgCA6gIApIgagHQADgWACgvIgTAIIAABMIgcAAIAAhBIgQAHIAABCQAAALACACQADADAKAAIAoAAQAJAAAEgGQADgFABgTQAMAIAQAEQgDAagIAKQgJAKgWAAgAhgBRQAWgjAPgiIAZAUQgSAngQAegAhogQIARgYQAPAGAVAMIgRAZQgOgIgWgLgAhahNIASgXQAaAMALAHIgTAaQgHgGgdgQg");
	this.shape_1.setTransform(186.175,6.025);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(26).to({_off:false},0).wait(45).to({_off:true},1).wait(18));

	// Layer_10
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7BFA4C").s().p("AAVBjQgXAAgKgGQgIgGgBgSIgdAAIAAAJIgfAAIAAhSIAMAAIgGgRIgbAAIAAgzIBTAAIAAgGIhJAAIAAgVICxAAIAAAVIhKAAIAAAGIBVAAIAAAzIgcAAIgFAPQgTgGgggGIAGgRIAGAAIgIgLIATgGIgYAAIAAArIgeAAIAAgrIgYAAQAOAEAFACIgIAPIAJgCIABARIgvAMICPAAIAABJIhBAAQABAEADABIALACIAmAAQAIgBADgEQADgDABgNQAJAIARACQgDAVgIAGQgIAIgTgBgAAJAvIAhAAIAAgGIghAAgAgyAvIAdAAIAAgGIgdAAgAAJAXIAhAAIAAgHIghAAgAgyAXIAdAAIAAgHIgdAAgAA/gqQgOAGgQADQATADAMAEIAAgaIgJAAgAhIgaIAkgFIgggJIAGgMIgKAAg");
	this.shape_2.setTransform(162.3,6.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(22).to({_off:false},0).wait(49).to({_off:true},1).wait(18));

	// Layer_11
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7BFA4C").s().p("AAVBjQgXAAgKgGQgIgGgBgSIgdAAIAAAJIgfAAIAAhSIAMAAIgGgRIgbAAIAAgzIBTAAIAAgGIhJAAIAAgVICxAAIAAAVIhKAAIAAAGIBVAAIAAAzIgdAAIgEAPQgTgGgggGIAGgRIAGAAIgIgLIATgGIgYAAIAAArIgeAAIAAgrIgYAAQAOAEAFACIgIAPIAJgCIAAARIguAMICPAAIAABJIhBAAQABAEACABIAMACIAmAAQAIgBADgEQADgDAAgNQAKAIARACQgDAVgIAGQgIAIgTgBgAAJAvIAhAAIAAgGIghAAgAgyAvIAdAAIAAgGIgdAAgAAJAXIAhAAIAAgHIghAAgAgyAXIAdAAIAAgHIgdAAgAA/gqQgOAGgQADQATADAMAEIAAgaIgJAAgAhHgaIAkgFIghgJIAGgMIgJAAg");
	this.shape_3.setTransform(138.1,6.3);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(18).to({_off:false},0).wait(53).to({_off:true},1).wait(18));

	// Layer_12
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7BFA4C").s().p("AhoBfQAGgPACgjIAbAEQgCAhgIAWQgEgCgVgHgAA3BlQgOABgGgHQgFgDgCgGQgCgHAAgOIAAgPIgmAAIAAgXIgXAJIgCgJQgxAJgJAEQgDgPgGgNQAHgCALgLQAFgEAGgLQgQACgGADIgJgbQAGgCAHgJQAQgWAKggIAcAMQgLAagSAXIALAAQAKgRAEgJIAaAQQgNAXgPATIAUgHQAKAWADARIAAg5IAbAAIAAA3IALAAIAAhDIgqAAIAAgdIAqAAIAAgZIAdAAIAAAZIAwAAIAAAdIgwAAIAABDIALAAIAAg3IAcAAIAABaIgNAAIgPAAIAAgFIgLAAIAAAPQAAAHABABIAGABIAKAAIAEAAQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQABgDABgMQAMAJAOAEQgCAOgEAHQgCAHgJADQgHACgJAAgAg7AGIAPgCIgEgLgAhEAxIAZgFQAEAZACAaIgaAFQAAgTgFgggAgqArIAXgIQAIAWAEAVIgYAIQgCgRgJgag");
	this.shape_4.setTransform(113.55,5.85);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(14).to({_off:false},0).wait(57).to({_off:true},1).wait(18));

	// Layer_13
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7BFA4C").s().p("AhcBgQgIgHgFgCQATgZAAg2IAAgjIAfAAIgMgLQAggFANgDIgkgHIAPgKIgoAAIAAgZIBKAAIgGgIIAUgKIAOASIBOAAIAAAZIggAAIAMAIIgXAIIAeAJIgOALIAhAAIAAAZIieAAIAAAKIgBAaQAQgQAGgTIAbAIIgCAFIARAAIAAgLIAgAAIAAALIA0AAIAAAZIg0AAIAAAGIAsAAIAAAYIgsAAIAAAHIBCAAIAAAaIigAAIAAgaIA+AAIAAgHIgrAAIAAgLIgLALQgDgMgIgOQgFArgSAXIgMgLgAgZArIAhAAIAAgGIgdAAgAgVgbIBGAAIgfgJQgSAFgVAEgAATg3IAZgIIg6AAg");
	this.shape_5.setTransform(89.175,6.075);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(10).to({_off:false},0).wait(61).to({_off:true},1).wait(18));

	// Layer_14
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7BFA4C").s().p("AAtBhIAAgPIhaAAIAAAPIghAAIAAjBICdAAIAADBgAgtAyIBaAAIAAgqIhaAAgAgtgYIBaAAIAAgnIhaAAg");
	this.shape_6.setTransform(65.175,6.55);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(6).to({_off:false},0).wait(65).to({_off:true},1).wait(18));

	// Layer_15
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7BFA4C").s().p("AgaBsIAAjXIA1AAIAAAUIgZAAIAACvIAZAAIAAAUg");
	this.shape_7.setTransform(48,7.425);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(2).to({_off:false},0).wait(69).to({_off:true},1).wait(18));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4.6,206,22.9);


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
	this.shape.graphics.f("#7DFA4C").s().p("AgRBoIAAhDIgqAAIAAALIggAAIAAhyIBKAAIAAgmIAhAAIAAAmIBMAAIAAByIgiAAIAAgLIgqAAIAABDgAAQAGIAqAAIAAgoIgqAAgAg7AGIAqAAIAAgoIgqAAg");
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
	this.shape.graphics.f("#7BFA4C").s().p("AhPCMIAyhYQgzhcgfhTIgGgQIA9AAIADAIQAXA9AfA+QAcg6AXhBIADgIIA/AAIgGAQQgrB2hQCLIgEAGg");
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
	this.shape.graphics.f("#7BFA4C").s().p("AgrA+IAAhdIgjAAIAAgzIAkAAIAEgvIAyAAIAAAvIA+AAIAAAzIg+AAIAABdQAAAJADADQAEADALAAQAPAAASgFIAQgGIAAA2IgIADQgXAHgRAAQhKAAAAhEg");
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
	this.shape.graphics.f("#7BFA4C").s().p("AhCBqIAAjPIAtAAIAEAOQAggRAogBIAMAAIAAA4IgMAAQgnAAgZAQIAACLg");
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
	this.shape.graphics.f("#7BFA4C").s().p("AhMBTQgigeAAg0QAAgwAfgeQAfgfAwABQAxgBAfAfQAfAeAAAwQAAA0gjAeQgfAagtAAQgtAAgfgagAglgmQgQAPABAYQAAARAIAOQAOAWAfAAQAaAAAOgRQAMgPAAgVQAAgYgPgPQgOgPgYAAQgXAAgOAPg");
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
	this.shape.graphics.f("#7BFA4C").s().p("AAqCBIhYilIgjClIg6AAIA1kBIA2AAIBRCaIAhiaIA6AAIg2EBg");
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
	this.shape.graphics.f("#7BFA4C").s().p("Ai+ASIAAgjIF9AAIAAAjg");
	this.shape.setTransform(19.125,1.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7BFA4C").s().p("AiyAGIAAgLIFlAAIAAALg");
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
	this.shape.graphics.f("#7BFA4C").s().p("AgbCIIAAkPIA3AAIAAEPg");
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
	this.shape.graphics.f("#7BFA4C").s().p("Ag6B+IgCAIIgtAAIAAkQIA5AAIAABHQAXgKAaAAQAvAAAdAdQAdAeAAAuQAAAzgjAgQgfAcgrAAQgcAAgbgNgAgwgKIAABTQASALAYAAQAbAAAOgRQANgPAAgXQAAgagPgNQgNgOgYAAQgaAAgSAOg");
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
	this.shape.graphics.f("#7BFA4C").s().p("AhJBZQgXgVgBghQAAghAZgSQAYgUApAAQAZAAAXAHQgCgNgKgFQgKgGgYAAQgbAAgmAMIgPAFIAAg6IAIgCQAngLAmAAQAygBAXAWQAZAXAAAvIAAB4IguAAIgDgLQgeAPgeABQgmgBgYgTgAgmAjQgBAUAhAAQAXAAAYgOIAAgTQgTgIgZAAQgkAAABAVg");
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
	this.shape.graphics.f("#7DFA4C").s().p("AgZAcIAAg3IAzAAIAAA3gAgFAIIAJAAIAAgQIgJAAg");
	this.shape.setTransform(17.6,11.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7DFA4C").s().p("AgYBaIgCAGQgFAHgIABQgIACgLgBQAAgNgGgKIALAAQAEABACgDQABgCABgMIgHADQgBgGgGgXIALgDIAEAPIAAgTIg4AAIAAiAIBPAAIAAAaIgUAAIAAALIAQAAIAAACQAkgTASgfIAdAKIgFAHQAZARAWAIQgHANgEAQQgJgEgLgHIAAAQIhBAAIAAgMIgMAIQgHgJgKgJIAAARIgQAAIAAAKIARAAIAAAXIgRAAIAAAJIAXAAIgBAJQgBA2gCAQQAOgRAIghIAZAEIgFARQAOAJAGAFIgQAVQgDgFgKgGQgHAPgJALQgFgHgOgKgAhLAHIAKAAIAAgJIgKAAgAhLgZIAKAAIAAgKIgKAAgAA6g2IgVgQQgHAJgKAHIAmAAIAAAAgAhLg6IAKAAIAAgLIgKAAg");
	this.shape_1.setTransform(11.15,10.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7DFA4C").s().p("AgYAcIAAg3IAxAAIAAA3gAgEAIIAHAAIAAgQIgHAAg");
	this.shape_2.setTransform(12.075,11.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7DFA4C").s().p("AggATQAPgSAFgkIAbAFQgCANgEANIAYAQIgSAWQgEgEgLgJIgJAPQgKgJgNgIg");
	this.shape_3.setTransform(17.625,17.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7DFA4C").s().p("AgLAVQAFgRADgdIAPAFQgEAggEAOg");
	this.shape_4.setTransform(1.2,17.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7DFA4C").s().p("AgHgQIALgCQAEAUAAAPIgLACQAAgOgEgVg");
	this.shape_5.setTransform(4.675,16.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7DFA4C").s().p("AgGgTIALgBQACAUAAATIgMACQABgVgCgTg");
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
	this.shape.graphics.f("#7DFA4C").s().p("Ag3BhIAAjBIBvAAIAAC/IgeAAIAAgJIg1AAIAAALgAANA5IANAAIAAgsIgNAAgAgbA5IAMAAIAAgsIgMAAgAANgQIANAAIAAgwIgNAAgAgbgQIAMAAIAAgwIgMAAg");
	this.shape.setTransform(15,10.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7DFA4C").s().p("AgNgTIAVgGQAEAZACAUIgWAGQAAgOgFgfg");
	this.shape_1.setTransform(4.675,17.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7DFA4C").s().p("AgQgQIAUgHQAIAUAEATIgUAIQgDgRgJgXg");
	this.shape_2.setTransform(7.35,16.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7DFA4C").s().p("AgpAuQAGgCALgNQAEgEAJgNQgSACgFACIAAAAIgBABQgBgJgHgPQAGgCAGgKQAEgGAHgOQAJgRAEgQIAaALQgLAagQAYIALgBQAIgMAIgSIAYAPQgPAZgOATIAPgGQANAYACARIgWAJIgBgEQgvAIgHAEQgCgKgGgPgAgBAoIAQgCIgFgNIgLAPg");
	this.shape_3.setTransform(4.525,7.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7DFA4C").s().p("AgPAVQAGgQACghIAWAEQgBAggHAVQgHgDgPgFg");
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
	this.shape.graphics.f("#7DFA4C").s().p("AhEAbIACgQIgjAAIAAgVIAmAAIACgQIB9AAIgCAQIAoAAIAAAVIgqAAIgCAQgAAKAMIAUAAIABgFIgVAAgAgmAMIAWAAIABgFIgWAAgAAMgHIAUAAIAAgEIgUAAgAgjgHIAWAAIAAgEIgWAAg");
	this.shape.setTransform(10.175,7.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7DFA4C").s().p("ABBAeIAAgQIiCAAIAAAQIgdAAIAAgoIBOAAIgFgLIAbgIQAEAHAFAMIBQAAIAAAog");
	this.shape_1.setTransform(10.125,2.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7DFA4C").s().p("AhgAfQAdgDAUgHIgWAAIAAhJICRAAIAABJIgUAAIApAMIgVATQgcgKgogLIAKgKIgjAAIAOAKQgeAQgvAGQgGgKgKgMgAgmAGIBRAAIAAgFIhRAAgAgmgNIBRAAIAAgEIhRAAgAgmggIBRAAIAAgEIhRAAg");
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
	this.shape.graphics.f("#7DFA4C").s().p("AgyBPQAKgHAAgOIAAhfIgPgTQAVgSAMgdIAeAKIgBAEIAoAAIAAAaIgZAAQAHAGAFAGIgNAMIAcAAIAABRIgVAAQASAaAKAUIgaAOIgHgPQg1ANgGAEQgEgNgKgMgAgLBCIATgEIgGgKIAXgKIgkAAgAgLASIAeAAIAAgFIgeAAgAgLgIIAeAAIAAgIIgeAAgAAEgnIgNgNIAMgLIgKAAQgIANgJALIAcAAg");
	this.shape.setTransform(5.625,10.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7DFA4C").s().p("AgkBpIAAiLIgTgRQAUgTAKgiIAfAIIgCAGIA0AAIAAAaIgcAAIAJAKIgQANIAdAAIAABaQAAAVgMAFQgKAGgaAAQgBgPgGgOIAVAAQADAAAAgEIAAg7IgaAAIAAB0gAAKgpIgOgOIAJgJIgLAAQgHAPgGAIIAdAAg");
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
	this.shape.graphics.f("#7BFA4C").s().p("AhGAKIAAgTICNAAIAAATg");
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
	this.shape_14.graphics.f("#7BFA4C").s().p("AkNDiIAngzIAPhqIggAKIAFgnIAggJIANhcIgeAAIAFgkIAeAAIAKhHIgOgRIBwAAIgMBYIAUAAIgFAkIgUAAIgJA9IAPgEIgEAlIgPAFIgWCWQgCARgNAKQgMALgRAAgAhbCbIAFglIBkAAIARh6IDEAAIgFAjIhZAAIgMBXIBpAAIgGAlgAg8AfIAGgjIBDAAIgEAjgACFgVIgbhJIBiAAIAbBJgAg0gVIAvhJIBhAAIguBJgACnhwIAFgpIh/AAIgGApIhdAAIAMhJIBkAAIADgSIgVgWICEAAIgFAoIBnAAIgMBJg");
	this.shape_14.setTransform(158.975,59.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(123,250,76,0.498)").s().p("AkNDiIAngzIAPhqIggAKIAFgnIAggJIANhcIgeAAIAFgkIAeAAIAKhHIgOgRIBwAAIgMBYIAUAAIgFAkIgUAAIgJA9IAPgEIgEAlIgPAFIgWCWQgCARgNAKQgMALgRAAgAhbCbIAFglIBkAAIARh6IDEAAIgFAjIhZAAIgMBXIBpAAIgGAlgAg8AfIAGgjIBDAAIgEAjgACFgVIgbhJIBiAAIAbBJgAg0gVIAvhJIBhAAIguBJgACnhwIAFgpIh/AAIgGApIhdAAIAMhJIBkAAIADgSIgVgWICEAAIgFAoIBnAAIgMBJg");
	this.shape_15.setTransform(158.975,59.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14}]},5).to({state:[{t:this.shape_14}]},4).to({state:[{t:this.shape_15}]},4).to({state:[{t:this.shape_14}]},4).wait(89));

	// jj
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7BFA4C").s().p("AgkDsIAulHIBSAAIgvFHgAh7CxIgBgbIiCAbIAnkMIBQAAIgUCJIgBAAIgJA/IAngHIAAguIBSAAIACB5gABGCvIAngoIAbi/IgfAAIAEgjIBxAAIggDkQgCAQgNALQgNALgQAAgAiRAqIAHgjIAoAAIADgQIgpAAIAFgdIAnAAIADgSIgoAAIAFgjIB0AAIgVCFgACHhvIgJgyIgXAyIhiAAIAyhqIgMgSIB4AAIgPAkIBrAAIgPAfIgdAAIALA5gAhchvIgJgyIgYAyIhiAAIAzhqIgMgSIB3AAIgPAkIBqAAIgOAfIgdAAIAMA5g");
	this.shape_16.setTransform(110.05,60.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(123,250,76,0.498)").s().p("AgkDsIAulHIBSAAIgvFHgAh7CxIgBgbIiCAbIAnkMIBQAAIgUCJIgBAAIgJA/IAngHIAAguIBSAAIACB5gABGCvIAngoIAbi/IgfAAIAEgjIBxAAIggDkQgCAQgNALQgNALgQAAgAiRAqIAHgjIAoAAIADgQIgpAAIAFgdIAnAAIADgSIgoAAIAFgjIB0AAIgVCFgACHhvIgJgyIgXAyIhiAAIAyhqIgMgSIB4AAIgPAkIBrAAIgPAfIgdAAIALA5gAhchvIgJgyIgYAyIhiAAIAzhqIgMgSIB3AAIgPAkIBqAAIgOAfIgdAAIAMA5g");
	this.shape_17.setTransform(110.05,60.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16}]},9).to({state:[{t:this.shape_16}]},4).to({state:[{t:this.shape_17}]},6).to({state:[{t:this.shape_16}]},4).wait(83));

	// ss
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7BFA4C").s().p("AkSCxIA0g2IAShuIg/AAIAEgcIBDg+Ig7AAIAFgcIBThHIBqAAIhGBCIA/AAIhaBaIBbAAIgUCPIgxABIAOhvIgOAAIgPB9QgEASgMAJQgMAMgRAAgACVClIAHg1IAAAAIAPhkIgaAAIgQB0IANAAIgEAlIjZAAIAxlVIE6AAIgxFVgAANCBIAaAAIARh1IgaAAgACUghIAcAAIARhsIgcAAgAAhghIAcAAIARhsIgcAAgAkbB7IAOhfIAvAAIgPBfg");
	this.shape_18.setTransform(58.15,58.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(123,250,76,0.498)").s().p("AkSCxIA0g2IAShuIg/AAIAEgcIBDg+Ig7AAIAFgcIBThHIBqAAIhGBCIA/AAIhaBaIBbAAIgUCPIgxABIAOhvIgOAAIgPB9QgEASgMAJQgMAMgRAAgACVClIAHg1IAAAAIAPhkIgaAAIgQB0IANAAIgEAlIjZAAIAxlVIE6AAIgxFVgAANCBIAaAAIARh1IgaAAgACUghIAcAAIARhsIgcAAgAAhghIAcAAIARhsIgcAAgAkbB7IAOhfIAvAAIgPBfg");
	this.shape_19.setTransform(58.15,58.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_18}]},4).to({state:[{t:this.shape_19}]},4).to({state:[{t:this.shape_18}]},3).to({state:[{t:this.shape_18}]},2).wait(91));

	// sb_sc5_title_line
	this.instance = new lib.sb_sc5titleline("synched",0);
	this.instance.setTransform(111,56.8,1,1,0,0,0,111,56.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1,startPosition:11},11,cjs.Ease.cubicOut).wait(95));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,222,113.6);


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

	// an_sc5_btn_arrow
	this.instance = new lib.an_sc5btnarrow("synched",0);
	this.instance.setTransform(112.4,19.15,1,1,0,0,0,7.3,8.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(42).to({regX:0,regY:0,x:105.1,y:10.75,mode:"single",startPosition:11},0).wait(53).to({startPosition:11},0).to({_off:true},1).wait(27));

	// sb_sc5_btn_tt
	this.instance_1 = new lib.sb_sc5btntt("synched",0);
	this.instance_1.setTransform(63.15,18.6,1,1,0,0,0,56.6,10.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({alpha:1},19,cjs.Ease.cubicOut).to({startPosition:0},79).to({_off:true},1).wait(27));

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7BFA4C").ss(2).p("AJwCvIzfAAIAAldITfAAg");
	this.shape.setTransform(63.375,18.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(102).to({_off:true},1).wait(27));

	// sb_sc5_btn_bg
	this.instance_2 = new lib.sb_sc5_btn_bg();
	this.instance_2.setTransform(63.4,18.5,1,1,0,0,0,62.4,17.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0.1797},19,cjs.Ease.cubicOut).wait(83).to({_off:true},1).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126.8,37);


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
	this.instance.setTransform(70.55,295.2,1.1378,1.1379,0,0,0,56.1,11.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).wait(62).to({startPosition:62},0).to({_off:true},1).wait(9));

	// sb_sc4_bg
	this.instance_1 = new lib.sb_sc4bg("synched",0);
	this.instance_1.setTransform(164.5,90.85,1,1,0,0,0,262.9,175.3);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1,startPosition:7},1).to({x:154.5,startPosition:58},54).to({startPosition:83},25).to({_off:true},1).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.4,-296.1,460.29999999999995,765.2);


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

	// an_sc3_tt2
	this.instance = new lib.an_sc3_tt2("synched",0,false);
	this.instance.setTransform(153,289.4,1,1,0,0,0,109,12.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({_off:false},0).wait(67).to({startPosition:67},0).to({_off:true},1).wait(26));

	// an_sc3_tt
	this.instance_1 = new lib.an_sc3tt("synched",0,false);
	this.instance_1.setTransform(80.4,289.1,1,1,0,0,0,56.1,11.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).wait(87).to({startPosition:87},0).to({_off:true},1).wait(26));

	// sb_sc3_bg
	this.instance_2 = new lib.sb_sc3bg("synched",0);
	this.instance_2.setTransform(138.9,147,1,1,0,0,0,277.8,187.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1,startPosition:4},1).to({x:128.9,startPosition:53},52).to({startPosition:15},52).to({_off:true},1).wait(26));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-251.9,575.8,737.5);


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

	// an_sc2_tt
	this.instance = new lib.an_sc2tt("synched",0,false);
	this.instance.setTransform(70.45,279.2,1.1351,1.1354,0,0,0,56.1,11.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).wait(62).to({startPosition:62},0).to({_off:true},1).wait(9));

	// sb_sc2_bg
	this.instance_1 = new lib.sb_sc2bg("synched",0);
	this.instance_1.setTransform(190.95,130.85,1,1,0,0,0,200.2,139);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1,startPosition:4},1).to({x:180.95,startPosition:48},47).to({startPosition:80},32).to({_off:true},1).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.5,-296.6,508,910.3000000000001);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({alpha:1},0).wait(6));

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
	this.instance.setTransform(209.75,258.05,1,1,180,0,0,5,5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:186.85,y:233.05},14,cjs.Ease.cubicOut).wait(1));

	// sb_corner_copy
	this.instance_1 = new lib.sb_corner("synched",0);
	this.instance_1.setTransform(-20,258.05,1,1,0,180,0,5,5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:5,y:233.05},14,cjs.Ease.cubicOut).wait(1));

	// sb_corner_copy
	this.instance_2 = new lib.sb_corner("synched",0);
	this.instance_2.setTransform(209.75,-173.4,1,1,0,0,180,5,5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:186.85,y:-147.7},14,cjs.Ease.cubicOut).wait(1));

	// sb_corner
	this.instance_3 = new lib.sb_corner("synched",0);
	this.instance_3.setTransform(-20,-173.4,1,1,0,0,0,5,5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:5,y:-147.7},14,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-179,239.8,442.7);


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
	this.instance.setTransform(151.15,124.55,1.4627,1.4627,0,0,0,96,42.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(96).to({startPosition:14},0).to({_off:true},1).wait(34));

	// an_sc5_btn
	this.instance_1 = new lib.an_sc5btn("synched",0,false);
	this.instance_1.setTransform(150.7,291.8,1.2877,1.2877,0,0,0,63.4,18.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).wait(68).to({startPosition:68},0).to({_off:true},1).wait(34));

	// an_sc5_subtitle
	this.instance_2 = new lib.an_sc5subtitle("synched",0,false);
	this.instance_2.setTransform(155.45,54.95,1.2965,1.2966,0,0,0,90,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(115).to({startPosition:115},0).to({_off:true},1).wait(34));

	// an_sc5_title
	this.instance_3 = new lib.an_sc5title("synched",0,false);
	this.instance_3.setTransform(157.15,1.5,1.2877,1.2877,0,0,0,111,56.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(115).to({startPosition:105},0).to({_off:true},1).wait(34));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#5D485B","rgba(83,72,93,0.906)","rgba(32,32,53,0.639)","rgba(38,32,37,0)"],[0,0.275,0.647,1],0,-63.4,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape.setTransform(150,427.6793,1,1.4757);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#5D485B","rgba(83,72,93,0.906)","rgba(32,32,53,0.639)","rgba(38,32,37,0)"],[0,0.275,0.647,1],0,-63.4,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape_1.setTransform(150,306.2383,1,0.48,0,180,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#5D485B","rgba(83,72,93,0.906)","rgba(32,32,53,0.639)","rgba(38,32,37,0)"],[0,0.275,0.647,1],0,-63.4,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape_2.setTransform(150,-131.3426,1,1.8779,0,180,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#5D485B","rgba(83,72,93,0.906)","rgba(32,32,53,0.639)","rgba(38,32,37,0)"],[0,0.275,0.647,1],0,-63.4,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape_3.setTransform(150,49.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},115).to({state:[]},1).wait(34));

	// Layer_3
	this.instance_4 = new lib.sc5bg();
	this.instance_4.setTransform(-82,-14,0.5257,0.5257);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(115).to({_off:true},1).wait(34));

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("EgdUAzeMAAAhm7MA6pAAAMAAABm7g");
	this.shape_4.setTransform(148.65,126.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(115).to({_off:true},1).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,-250.3,525.7,771.5);


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
	this.instance.setTransform(153.3,308.4,1.2397,1.2397,0,0,0,66.8,10.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(70).to({startPosition:68},0).to({_off:true},1).wait(5));

	// an_sc1_title
	this.instance_1 = new lib.an_sc1title("synched",0,false);
	this.instance_1.setTransform(150.7,267.9,1,1,0,0,0,126.1,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(84).to({startPosition:44},0).to({_off:true},1).wait(5));

	// an_corner
	this.instance_2 = new lib.an_corner("synched",0,false);
	this.instance_2.setTransform(151.15,124.55,1.4627,1.4627,0,0,0,96,42.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(65).to({startPosition:14},0).to({_off:true},1).wait(5));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#38384A","rgba(56,56,74,0.906)","rgba(56,56,74,0.639)","rgba(56,56,74,0.196)","rgba(56,56,74,0)"],[0,0.275,0.576,0.886,1],0,-63.4,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape.setTransform(147.723,431.3239,1.094,1.9936);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#38384A","rgba(56,56,74,0.906)","rgba(56,56,74,0.639)","rgba(56,56,74,0.196)","rgba(56,56,74,0)"],[0,0.275,0.576,0.886,1],0,-63.4,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape_1.setTransform(147.723,251.3046,1.094,0.8824,0,180,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#38384A","rgba(56,56,74,0.906)","rgba(56,56,74,0.639)","rgba(56,56,74,0.196)","rgba(56,56,74,0)"],[0,0.275,0.576,0.886,1],0,-63.4,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape_2.setTransform(147.723,-142.1776,1.094,1.2354,0,180,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#38384A","rgba(56,56,74,0.906)","rgba(56,56,74,0.639)","rgba(56,56,74,0.196)","rgba(56,56,74,0)"],[0,0.275,0.576,0.886,1],0,-63.4,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape_3.setTransform(147.723,-34.4594,1.094,0.5163);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},84).to({state:[]},1).wait(5));

	// sc1bg
	this.instance_3 = new lib.sc1bg();
	this.instance_3.setTransform(-101,-67,0.5507,0.5507);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84).to({_off:true},1).wait(5));

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("EgdUAzeMAAAhm7MA6pAAAMAAABm7g");
	this.shape_4.setTransform(148.65,126.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(84).to({_off:true},1).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-220.4,550.7,778);


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
	this.instance.setTransform(205.25,-22.45,0.4593,0.4593,0,0,0,74.5,60.2);
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

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(254).to({_off:false},0).to({_off:true},81).wait(115));

	// sc3
	this.instance_3 = new lib.sc3("synched",0,false);
	this.instance_3.setTransform(304.4,209.55,1,1,0,0,0,150,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(154).to({_off:false},0).to({_off:true},106).wait(190));

	// sc2
	this.instance_4 = new lib.sc2("synched",0,false);
	this.instance_4.setTransform(304.4,209.45,1,1,0,0,0,150,125);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(79).to({_off:false},0).to({_off:true},81).wait(290));

	// sc1
	this.instance_5 = new lib.sc1("synched",0,false);
	this.instance_5.setTransform(154.4,84.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},85).wait(365));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53.4,-212.1,602.8000000000001,910.2);


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
	this.instance.setTransform(440.2,614.35,1,1,0,0,0,594.6,523.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(899).to({mode:"single",startPosition:449},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(49,178.4,452.8,610.3000000000001);
// library properties:
lib.properties = {
	id: '98BD5038AE8B4B8D8F62372891313A8C',
	width: 300,
	height: 600,
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