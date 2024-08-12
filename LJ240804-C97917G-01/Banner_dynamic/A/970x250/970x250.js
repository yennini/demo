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
p.nominalBounds = new cjs.Rectangle(0,0,1000,674);


(lib.sc4bg = function() {
	this.initialize(img.sc4bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,667);


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

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7BFA4C").s().p("AhIA7QAUgMAHgdIgLAAQgGAAgDACQgCgIgEgJQAEgCAEgBIAMgRIgRAAIAAgRIAeAAIACgBIANAHIgVAdIAHAAIADAAIALAEQgEATgFAMQAHAKALADQAJACASABQAhAAAcgEQgFAIgDANQgYABgeAAQgUAAgKgDQgOgDgIgLQgIANgLAGQgHgKgGgDgAAlAjIgUAAIAAAEIgPAAIAAghIANAAIAAgGIgPAAIAAgMIAPAAIAAgHIgPAAIAABAIgUAAIAAhQIAOAAIgCgIIgPAAIAAgRIAgAAIgEgFIARgHIAHAMIAnAAIAAARIgPAAIgFAIIATAAIAAA+QAAANgHAEQgGACgPAAgAAeAGIANAAIAAAXIACAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAguIgRAAIAAAHIAQAAIAAAMIgQAAgAARAYIAMAAIAAgGIgMAAgAANgjIAQAAIACgIIgUAAgAhBg7IAQgKQAPAOAFAJIgQALQgIgMgMgMg");
	this.shape.setTransform(84.65,28.15);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(54).to({_off:false},0).wait(52));

	// Layer_8
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7BFA4C").s().p("AAGA0IAOAAQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAAAgBIAAgvIgWAAIAAgSIAZAAQgJgJgNgIIAPgMIAMAJQAFgGACgEIgjAAIAAgTIAxAAIAFgBIANAJQgMATgOAMIAGAGIgEAEIAIAAIADgBIAPADQgEAXgEAMIgRgCIACgRIgGAAIAAAvQAAAPgHAEQgGADgRAAQgBgJgFgLgAg+BGIAAgzIAUAAIAAgIIgXAAIAAgRIAXAAIAAgIIgKAAIAAgMIgJAGQgEgMgFgIQAVgMAMgTIARAHIgBAEQAQALAIALIgLAQIgEgEIAAAMIgKAAIAAAIIAVAAIAAARIgVAAIAAAIIAVAAIAAAwIgVAAIAAgDIgUAAIAAAGgAgqAuIAUAAIAAgKIgUAAgAguggIAdAAIgPgOQgIAKgGAEg");
	this.shape_1.setTransform(69.275,28.2);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(50).to({_off:false},0).wait(56));

	// Layer_9
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7BFA4C").s().p("AARBHQgCgLgFgKIAWABQAEAAACgDQAGgGAChFIgcAAQgGALgIALIgKgJIAABGIgoAAIAAALIgUAAIAAhxIARAAQADgOABgKIAXADIgHAVIAXAAIAAAUQALgTAFgZIAVAFIgFASIAoAAIAAAJQgBA0gCATQgCAWgEAGQgGAIgKABIgNABIgLAAgAguAlIAUAAIAAgaIgUAAgAgugGIAUAAIAAgVIgUAAgAACgBIASgKQAOAUAGAMIgSAMQgEgLgQgXg");
	this.shape_2.setTransform(54.05,28.27);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(46).to({_off:false},0).wait(60));

	// Layer_10
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7BFA4C").s().p("AAXA3IggAAIAAAHIgUAAIAAhCIA6AAIAAAzIAKAAQAEAAAAgEIAAg2IgoAAIAAg4IA+AAIAABvQAAAPgJAGQgHADgWAAQgBgIgDgFgAgJAnIASAAIAAgHIgSAAgAgJARIASAAIAAgFIgSAAgAAYgaIATAAIAAgGIgTAAgAAYgvIATAAIAAgFIgTAAgAhABEIAAiHIA8AAIAAA3IgmAAIAABQgAgqgbIASAAIAAgFIgSAAgAgqgvIASAAIAAgFIgSAAg");
	this.shape_3.setTransform(38.575,28.55);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(42).to({_off:false},0).wait(64));

	// Layer_11
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7BFA4C").s().p("AhHAzQAVgWAAgzIAAgsIBpAAIAAA/IhGAAQAYAlA/AJQgIAIgHANQg5gLgdgnQgHAjgQASQgIgKgLgGgAgbgYIA7AAIAAgUIg7AAg");
	this.shape_4.setTransform(23.175,28.825);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(38).to({_off:false},0).wait(68));

	// Layer_12
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7BFA4C").s().p("AhIA4QANgXAAg0IAAgxIA8AAIAABEIgbAAQAJAYASALQAQAIAYABIAgAAQgEAHgDANIgaAAQgdAAgRgKQgVgLgNgaQgDAigLASQgIgIgKgFgAglgTIARAAIAAgcIgRAAgAAlADIARgGQAPAWADANIgTAIQgFgRgLgUgAgEAbQAKgLAHgRIATADQgGAVgOAQQgHgGgJgGgAAIgFIAAg/IA4AAIAAA/gAAbgXIARAAIAAgaIgRAAg");
	this.shape_5.setTransform(7.8,28.6);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(34).to({_off:false},0).wait(72));

	// tdash
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7BFA4C").s().p("AhGAKIAAgTICNAAIAAATg");
	this.shape_6.setTransform(73.325,13.2);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(30).to({_off:false},0).wait(76));

	// t1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7BFA4C").s().p("AACA8IAAhaIgcAFIAAgWIA1gMIAAB3g");
	this.shape_7.setTransform(60.725,8.1);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(26).to({_off:false},0).wait(80));

	// t0
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7BFA4C").s().p("AgkAtQgMgQAAgcQAAgdAMgPQAMgRAYAAQAXAAANARQANAPAAAdQAAAcgNAQQgNAQgXAAQgXAAgNgQgAgRgbQgFAKAAASQAAAkAWABQAXgBABgkQAAgSgIgKQgHgKgJAAQgKAAgHAKg");
	this.shape_8.setTransform(52,8.2);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(22).to({_off:false},0).wait(84));

	// tk
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7BFA4C").s().p("AASA7QgSgegXgbQAOgaAYgiIAiAAQggApgLARQAMANAhAugAgyA7IAAh1IAZAAIAAB1g");
	this.shape_9.setTransform(37.375,8.225);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(14).to({_off:false},0).wait(92));

	// ts
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7BFA4C").s().p("AgrA3IAAgaQAYAIAQAAQAXAAAAgLQAAgIgOgEIgagIQgZgGAAgYQAAgkAvAAQAOAAAXAGIAAAZQgXgHgQAAQgTAAAAALQAAAHALADIAbAIQAbAHAAAYQAAAlguAAQgWAAgVgGg");
	this.shape_10.setTransform(25.875,8.2);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(10).to({_off:false},0).wait(96));

	// ta
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7BFA4C").s().p("AAeA7IgGgWIgxAAIgGAWIgaAAQAShBAWg0IAiAAQAYA6ARA7gAgSAOIAjAAQgJgbgJgYIgRAzg");
	this.shape_11.setTransform(15.1,8.225);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(6).to({_off:false},0).wait(100));

	// tt
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7BFA4C").s().p("AgMA7IAAhdIgiAAIAAgYIBdAAIAAAYIgiAAIAABdg");
	this.shape_12.setTransform(5.725,8.225);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(2).to({_off:false},0).wait(104));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92,35.5);


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
	this.shape.setTransform(262.7549,308.429,0.3266,0.9092,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#08204F","rgba(9,33,77,0)"],[0,1],0,-37.4,0,37.5).s().p("A4jF2IAArrMAxHAAAIAALrg");
	this.shape_1.setTransform(347.046,308.429,0.3266,1.3511,0,-90,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.shape}]},4).wait(83));

	// Layer_3
	this.instance = new lib.sc4bg();
	this.instance.setTransform(95,230,0.2018,0.2018);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:true},1).wait(4).to({_off:false},0).wait(83));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A7CFmIAArLMA2FAAAIAALLg");
	this.shape_2.setTransform(268.075,316.3282,1,1.4924);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2).to({_off:true},1).wait(4).to({_off:false},0).wait(83));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(95,230,346.2,139.7);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7BFA4C").s().p("AgaBsIAAgVIAZAAIAAiuIgZAAIAAgUIA1AAIAADXg");
	this.shape.setTransform(109.55,12.125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(22).to({_off:false},0).wait(49).to({_off:true},1).wait(18));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7BFA4C").s().p("AABBWQAXgOAQggIgIAAQgTAigeATQgIgLgNgHQAXgLASgYIgHAAQgKALgNAJQgIgJgIgGIgyAYIgMggQAKgDAQgHIAAg5IgUAAIAAgeIAUAAIAAgrIAdAAIAAArIATAAIAAAeIgTAAIAAAtIAQgGIAEATQANgLAFgJIgVAAIAAgaICKAAIAAAaIhWAAIgFAIIBXAAIAAAKQgEA5gIAJQgGAHgKACQgFABgSAAQAAgLgFgKQgKAOgMAIQgKgLgMgGgAAvBNIAKAAQAEAAADgCQAEgEADgfIgEAAQgHATgNASgAgPgYIAAhMIBqAAIAABMgAAMgtIAyAAIAAgHIgyAAgAAMhIIAyAAIAAgHIgyAAg");
	this.shape_1.setTransform(92.35,10.95);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(18).to({_off:false},0).wait(53).to({_off:true},1).wait(18));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7BFA4C").s().p("AArBqIAAgHIhUAAIAAAHIggAAIAAhoICVAAIAABogAgpBJIBUAAIAAgLIhUAAgAgpAmIBUAAIAAgKIhUAAgAhigIIAAgcIAsAAIgHgRIAUgFIguAAIAAgcIBIAAQgDgJgDgFIAhgFQAFAJADAKIBGAAIAAAcIgsAAIAUAFIgIARIApAAIAAAcgAgTgkIAqAAQAEgLACgLIg4AAQAEAKAEAMg");
	this.shape_2.setTransform(68.25,10.6);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(14).to({_off:false},0).wait(57).to({_off:true},1).wait(18));

	// Layer_6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7BFA4C").s().p("AgkBRQAUgEAJgHQAHgGACgMIgbAAIAAgaICBAAIAAAaIghAAIAAATIABAFIACABIAEAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAgBIABgNQAJAGAPAEQgCARgFAIQgGAGgMAAIgNAAQgPAAgGgGQgFgHAAgRIAAgTIgMAAQgDAVgKAMQgMANgZAHQgFgNgLgLgAhoBcQAIgTABgeIAUADQgDAkgGARQgFgCgPgFgAhJAtIATgEQAEAXABAWIgTAFQgBgSgEgcgAgzAqIASgHQAHAWADAPIgTAIQgBgJgIgdgAhnANQAGgCAKgMIAMgRQgSACgEACIgIgZQAFgBAHgLQAEgGAGgOQAIgRAEgPIAZAKQgKAZgQAaIALgBQAHgOAGgPIAWAOQgMAYgQAYIgMAPIAPgEIgDgLIARgGQAJAbACAPIgSAIIgCgLQgrAKgGAEIgIgYgAgZADIAUgCIAAgIIgQAAIAAgUIAQAAIAAgHIAXAAIAAAHIAOAAIAAAUIgOAAIAAAHIAPgBIAAASIg3AJgAAkAVIAAgVIAVAAIAAgHIgQAAIAAgUIAQAAIAAgHIAYAAIAAAHIARAAIAAAUIgRAAIAAAHIAUAAIAAAVgAgWgkIAAgWIAtAAIAAgJIgkAAIAAgXIAkAAIAAgNIAeAAIAAANIAnAAIAAAXIgnAAIAAAJIAwAAIAAAWg");
	this.shape_3.setTransform(44.075,10.8);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(10).to({_off:false},0).wait(61).to({_off:true},1).wait(18));

	// Layer_7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7BFA4C").s().p("AgXBQQAIgEACgJIgPAGIgNgQIABAGIg8APIgFgdIATgEIAAgxIgPAAIAAgbIAPAAIAAgkIgQAAIAAgcIA8AAIAAAcIgQAAIAAAkIAPAAIAAAbIgPAAIAAArIAPgEIABAOQAWgEASgJIgUAAIAAgxIBwAAIAAAxIgHAAIATARIgWAKQALAHAPAEQgKAKgIAOQgpgOgSgrIgSAOIAAAOIAcgEQgCANABAKQguAJgFAEQgDgNgHgIgAA/AwQAJgGAIgGIgZAAIAIAMgAAFAOIA3AAIAAgHIg3AAgAgigTIAAgYICIAAIAAAYgAgbgxIAAgzIB6AAIAAAzgAA6hFIAKAAIAAgKIgKAAgAAchFIAJAAIAAgKIgJAAgAgBhFIAJAAIAAgKIgJAAg");
	this.shape_4.setTransform(19.775,11.1);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(6).to({_off:false},0).wait(65).to({_off:true},1).wait(18));

	// Layer_8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7BFA4C").s().p("AgaBsIAAjXIA1AAIAAAUIgZAAIAACuIAZAAIAAAVg");
	this.shape_5.setTransform(2.725,12.125);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(2).to({_off:false},0).wait(69).to({_off:true},1).wait(18));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.3,23);


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
	this.shape.graphics.lf(["#111723","rgba(17,21,31,0.365)","rgba(18,20,28,0)"],[0,0.784,1],-63.3,0,63.4,0).s().p("Ap5VuMAAAgrbITzAAMAAAArbg");
	this.shape.setTransform(283.9726,266.4562,0.603,0.3965,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#111723","rgba(17,21,31,0.365)","rgba(18,20,28,0)"],[0,0.784,1],-63.3,0,63.4,0).s().p("Ap5VuMAAAgrbITzAAMAAAArbg");
	this.shape_1.setTransform(397.509,266.4562,1.1883,0.3965);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(86));

	// sc3bg
	this.instance = new lib.sc3bg();
	this.instance.setTransform(136,222,0.1858,0.1858);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3).to({_off:false},0).wait(86));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A4SEqIAApUMAwlAAAIAAJUg");
	this.shape_2.setTransform(297.375,270.713,1,1.7059);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},1).wait(3).to({_off:false},0).wait(86));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(136,211.4,336.8,135.79999999999998);


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
	this.shape.graphics.f("#7BFA4C").s().p("AgaBsIAAgVIAZAAIAAiuIgZAAIAAgUIA1AAIAADXg");
	this.shape.setTransform(109.55,12.175);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(22).to({_off:false},0).wait(49).to({_off:true},1).wait(18));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7BFA4C").s().p("AAfBMIAbAAQAEAAAAgDIAAhJIhaAAIAAgaIASAAQgGgLgHgHQAhgFAKgPIgnAAIAAgZIAtAAIABgPIAeAAIAAAPIArAAIAAAZIgwAAIAAABQAoAPALAGIgRAQIATAAIAAAaIgMAAIAABKQAAALgCAFQgDAGgHAEQgLAEgcAAQgDgNgIgPgAAKgaIA+AAIgigPQgKAKgSAFgAhMBoIAAhIQgHAXgIAMQgDgMgKgUQARgZAJgsIgXAAIAAgeIAZAAIAAgoIAdAAIAAAoIASAAIAAAeIgSAAIAAAJQAOATAMATIgTAVIgHgQIAABWgAgRBLIAAhCIBEAAIAAA4IgqAAIAAAKgAAJAqIAPAAIAAgLIgPAAg");
	this.shape_1.setTransform(92.3,10.8);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(18).to({_off:false},0).wait(53).to({_off:true},1).wait(18));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7BFA4C").s().p("AhaBfQgJgGgGgCQATghAAhNIAAg8IBUAAIgGgMIAegJIALAVIBGAAIAAAeIieAAIgBA7QATgPAEgkIAdADQgCANgDAKIAQARIAAgtIAfAAIAAAvQAPgQAEgdIAdAEQgCAMgFAOQAUAPAHAGIgSAVQgEgFgQgOQgIALgJAHQgCgDgLgIIAAARIA4AAIAAAbIg4AAIAAAQIBDAAIAAAbIijAAIAAgbIBBAAIAAgQIg0AAIAAgbIA0AAIAAgYIgLAQQgDgFgNgNQgGAMgKAIQgMgKgIgFQgEA+gSAgIgMgKg");
	this.shape_2.setTransform(68.075,10.525);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(14).to({_off:false},0).wait(57).to({_off:true},1).wait(18));

	// Layer_6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7BFA4C").s().p("AhnBVQANgfAAhKIAAhOIC/AAIAAAWIijAAIAAA3IgBArQAFgIAAgRIAAgXIBMAAIAAApQAUgOAFgXIgWAAIAAgZIAXAAIAAgaIAXAAIAAAaIAOAAQgDgGgKgLIARgLQAKALAEAIIgOAJIAMAAIAAAZIgZAAQAMAaAUALQgMAJgFAMQgQgJgLgXQgKAVgUAMIAEAAIAAAHIA4AAIAAAXIg4AAIAAAIIBFAAIAAAWIiqAAIAAgWIBHAAIAAgIIg5AAIAAgXIA5AAIAAgHIAaAAIgMgMQgBAHgHADQgHACgTAAQgEgLgCgEIgKAEIgEgJQgCAOgGAHIgUgLQgDAvgLAZQgLgJgOgFgAgVAWIANAAQABAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBIAAgDgAgjAJIASgFIgQgFIAGgKIgHAAgAgFgGIgFAHIAGgBIAAgLIgSAAgAg2geIAAgpIBFAAIAAApgAgggpIAZAAIAAgFIgZAAgAggg4IAZAAIAAgEIgZAAg");
	this.shape_3.setTransform(43.85,10.975);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(10).to({_off:false},0).wait(61).to({_off:true},1).wait(18));

	// Layer_7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7BFA4C").s().p("AACBPIAYABQAEAAAAgEIAAhJIgsAAIAAgYIBCAAQgNgIgigPIANgRIAYAKIAPgSIhAAAIAAgXIBTAAIAFgCIARANQgRAXgSARIAPAIIgIAMIALAAIAEgBIATAGQgLAkgLAWIgVgHQADgGAIgaIgQAAIAABJQAAASgLAFQgIAEgcAAQgBgLgGgNgAhmBdQAHgSACggIAWAEQgCAigIAUIgVgIgAhBAtIAVgEQAGAfABATIgWAFQgBgUgFgfgAgmAoIAUgHQAIAYAFAVIgVAIQgDgSgJgcgAhlANQAGgCAMgLIAPgTQgWADgFACIgIgWQAGgCAHgKQAQgVANghIAYAKQgPAdgSAYIASgBIARgeIAVAOQgUAjgcAcIAWgDIgFgOIATgHQALAaAFARIgUAIIgDgKQg1AIgHAEQgCgHgGgQg");
	this.shape_4.setTransform(19.775,10.675);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(6).to({_off:false},0).wait(65).to({_off:true},1).wait(18));

	// Layer_8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7BFA4C").s().p("AgaBsIAAjXIA1AAIAAAUIgZAAIAACuIAZAAIAAAVg");
	this.shape_5.setTransform(2.725,12.175);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(2).to({_off:false},0).wait(69).to({_off:true},1).wait(18));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.3,23);


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
	this.shape.graphics.lf(["#231D17","rgba(35,29,23,0.906)","rgba(35,29,23,0.639)","rgba(69,66,113,0.196)","rgba(75,72,122,0)"],[0,0.275,0.576,0.886,1],0,-63.3,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape.setTransform(68.2613,70.4046,0.4268,0.4156,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#231D17","rgba(35,29,23,0)"],[0,1],0,-63.3,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape_1.setTransform(11.9644,70.4454,0.4268,0.4736,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#231D17","rgba(35,29,23,0.906)","rgba(35,29,23,0.639)","rgba(35,29,23,0)"],[0,0.275,0.576,1],0,-63.3,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape_2.setTransform(227.3307,70.4454,0.4268,0.4733,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#231D17","rgba(35,29,23,0.906)","rgba(35,29,23,0.639)","rgba(35,29,23,0)"],[0,0.275,0.576,1],0,-63.3,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape_3.setTransform(316.3866,76.7546,0.4268,0.9324,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(86));

	// sc2bg
	this.instance = new lib.sc2bg();
	this.instance.setTransform(43,21,0.2154,0.2153);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3).to({_off:false},0).wait(86));

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("A3ukNMAvdAAAIAAIbMgvdAAAg");
	this.shape_4.setTransform(200.2646,80.7838,1.3224,2.1021);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("A3uEOIAAobMAvdAAAIAAIbg");
	this.shape_5.setTransform(200.2646,80.7838,1.3224,2.1021);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},3).wait(86));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,3.3,420.2,161.39999999999998);


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
	this.shape.graphics.f("#7BFA4C").s().p("AgaBsIAAgVIAZAAIAAiuIgZAAIAAgUIA1AAIAADXg");
	this.shape.setTransform(109.55,12.175);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(22).to({_off:false},0).wait(21));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7BFA4C").s().p("AhnBVQALgOAAgiIAAgrIBPAAIAABSQAAARgJAFQgIAEgWAAQgBgLgHgNIARABQAEAAAAgDIAAgGIgdAAQgEAWgLANQgJgMgLgIgAhCAxIAbAAIAAgGIgaAAgAhBAXIAaAAIAAgHIgaAAgAABBMIAWABQADAAAAgEIAAgRIgaAAIAAgZIAaAAIAAgIIgiAAIAAgaIAiAAIAAgIIgZAAIAAgZIAFAAQgDgHgHgNIAVgJQAJALAFAOIgJAEIANAAQgBgKgFgSIAXgFQAEAKAEARQAFgKAHgVIAaAGIgOAfIAJAAIAAAhIALAAIAAAaIgLAAIAAAhIglAAIAAASQAAAKgCAGQgDAGgGADQgKAEgZAAQgDgOgGgNgAA4AfIALAAIAAgIIgLAAgAA4gDIALAAIAAgIIgLAAgAA8goIgTAEIAnAAIgUgEgAhlgLIAAgWIAkAAIAAgGIgbAAIAAgVIAbAAIAAgFIghAAIAAgWIAhAAIAAgRIAdAAIAAARIAeAAIAAAAQA3gFAfgKIAVAUQgmANg/AEQAAgJgGgMIAAAVIgeAAIAAAFIAYAAIAAAVIgYAAIAAAGIAgAAIAAAWg");
	this.shape_1.setTransform(92.375,10.825);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(18).to({_off:false},0).wait(25));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7BFA4C").s().p("AgxBPIAdAAQAFAAAAgDIAAgIIhDAAIAAgWIClAAIAAAWIhDAAIAAAJQAAALgDAFQgDAHgJACQgIAEggAAQgDgNgHgOgAhhAoIAAgVIAWAAIAAgZICYAAIAAAZIAUAAIAAAVgAAfATIATAAIAAgIIgTAAgAgJATIASAAIAAgIIgSAAgAgxATIATAAIAAgIIgTAAgAhTgZQAIgHAGgHIgZAAIAAgtIBLAAIgFgLIAhgKQAFAJAFAMIBNAAIAAAtIgZAAIALAPIgWAPQgEgJgMgNQgCAMgFAEQgGAEgNABIgZAAQgTgBgHgEQgFgFAAgOIAAgBQgMARgMAKgAgLgiQAAADABABQACACAFAAIATAAQADAAACgDQABgCABgIQAHAFAMACIgLgKIAVgNIANANIAAgPIg7AAQALAGAJAGIgQARQgKgIgLgFgAhCgqIAJgMIATAKIAAgDIAUAAIgEgCIAKgKIg2AAg");
	this.shape_2.setTransform(68.25,10.65);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(14).to({_off:false},0).wait(29));

	// Layer_6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7BFA4C").s().p("AhqBdQANgXABgyIgKACIgDgZIANgCIAAhHIATAAQADgQABgKIAcAFIgHAVIAYAAIAAAWQAogUAUgfIAbAJIgEAHQAUATAcALQgIALgEARQgPgIgOgLIAAAKIguAAIAAgIIgUAPIBZAAIAABIIhFAAIgBAHIBMAAIAAA8IgcAAIAAgGIghAAIAAAGIgbAAIAAgVQgFALgFAIQgIgIgPgHQgBAFgGAFQgIAEgWAAQgCgOgGgKIASAAQABAAABAAQAAAAABgBQAAAAABgBQAAgBAAgBIAAgYIgOAFQgCgJgEgLQgCAugOAZQgIgJgNgFgAgMAHIgMACIAABDIgBAGQATgaAAg3IAAgdIgEACQgGgPgIgMIAAAmIAKgBgAAiBNIAhAAIAAgJIghAAgAgxAmIAAgZIgTADIAAAHIAMgEgAAWASIAnAAIAAgGIgnAAgAAWgFIAnAAIAAgFIgnAAgAhEgIIATgCIAAgHIgOAEIgFgRgAgxggIAAgUIgTAAIAAAJIANgFgAAjg8IASAAIgJgKg");
	this.shape_3.setTransform(44.075,10.65);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(10).to({_off:false},0).wait(33));

	// Layer_7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7BFA4C").s().p("AhaBfQgJgGgGgCQATghAAhNIAAg8IBUAAIgGgMIAegJIALAVIBGAAIAAAeIieAAIgBA7QATgPAEgkIAdADQgCANgDAKIAQARIAAgtIAfAAIAAAvQAPgQAEgdIAdAEQgCAMgFAOQAUAPAHAGIgSAVQgEgFgQgOQgIALgJAHQgCgDgLgIIAAARIA4AAIAAAbIg4AAIAAAQIBDAAIAAAbIijAAIAAgbIBBAAIAAgQIg0AAIAAgbIA0AAIAAgYIgLAQQgCgEgNgOQgIAMgJAIQgMgKgIgFQgEA+gSAgIgMgKg");
	this.shape_4.setTransform(19.675,10.525);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(6).to({_off:false},0).wait(37));

	// Layer_8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7BFA4C").s().p("AgaBsIAAjXIA1AAIAAAUIgZAAIAACuIAZAAIAAAVg");
	this.shape_5.setTransform(2.725,12.175);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(2).to({_off:false},0).wait(41));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.3,23);


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

	// sb_sc2_bg
	this.instance = new lib.sb_sc2bg("synched",0);
	this.instance.setTransform(210.2,146.95,1,1,0,0,0,200.2,139);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1,startPosition:4},1).to({x:200.2,startPosition:48},47).wait(42));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,11.3,430.2,161.29999999999998);


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
	this.instance.setTransform(802.45,258.05,1,1,180,0,0,5,5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:776.8,y:233.05},14,cjs.Ease.cubicOut).wait(1));

	// sb_corner_copy
	this.instance_1 = new lib.sb_corner("synched",0);
	this.instance_1.setTransform(-20,258.05,1,1,0,180,0,5,5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:5,y:233.05},14,cjs.Ease.cubicOut).wait(1));

	// sb_corner_copy
	this.instance_2 = new lib.sb_corner("synched",0);
	this.instance_2.setTransform(802.45,62,1,1,0,0,180,5,5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:776.8,y:91.15},14,cjs.Ease.cubicOut).wait(1));

	// sb_corner
	this.instance_3 = new lib.sb_corner("synched",0);
	this.instance_3.setTransform(-20,62,1,1,0,0,0,5,5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:5,y:91.15},14,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,56.4,832.5,207.29999999999998);


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
	this.instance.setTransform(98.9,248.35,0.3728,0.4503,0,0,0,254.6,211);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(96).to({startPosition:14},0).to({_off:true},1).wait(34));

	// an_sc5_subtitle
	this.instance_1 = new lib.an_sc5subtitle("synched",0,false);
	this.instance_1.setTransform(286.7,222.95,0.6775,0.6775,0,0,0,90,10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(115).to({startPosition:105},0).to({_off:true},1).wait(34));

	// an_sc5_title
	this.instance_2 = new lib.an_sc5title("synched",0,false);
	this.instance_2.setTransform(86.95,227.15,0.4841,0.4841,0,0,0,111.2,57);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(115).to({startPosition:105},0).to({_off:true},1).wait(34));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#08204F","rgba(9,33,77,0)"],[0,1],0,-37.4,0,37.5).s().p("A4jF2IAArrMAxHAAAIAALrg");
	this.shape.setTransform(288.6134,226.9388,0.3283,0.3877,0,-90,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#08204F","rgba(9,33,77,0)"],[0,1],0,-37.4,0,37.5).s().p("A4jF2IAArrMAxHAAAIAALrg");
	this.shape_1.setTransform(246.2008,226.9582,0.2596,0.7533,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#08204F","rgba(9,33,77,0)"],[0,1],0,-37.4,0,37.5).s().p("A4jF2IAArrMAxHAAAIAALrg");
	this.shape_2.setTransform(45.9254,226.9582,0.2596,1.1104,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#08204F","rgba(9,33,77,0)"],[0,1],0,-37.4,0,37.5).s().p("A4jF2IAArrMAxHAAAIAALrg");
	this.shape_3.setTransform(120.4309,224.3582,0.2596,0.8876,0,-90,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},115).to({state:[]},1).wait(34));

	// sc5bg
	this.instance_3 = new lib.sc5bg();
	this.instance_3.setTransform(87,163,0.1874,0.1874);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(115).to({_off:true},1).wait(34));

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("A4mE3IAAptMAxNAAAIAAJtg");
	this.shape_4.setTransform(150.8,231.4587,1,1.8056);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(115).to({_off:true},1).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.7,163,315,125);


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
	this.instance.setTransform(52.05,17.55,1,1,0,0,0,7,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(75).to({startPosition:3},0).to({_off:true},1).wait(5));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7BFA4C").s().p("AApA5QgHgeAAg6Ig3AAIAAgbIA2AAIAAgjIAcAAIAAANIASgLQALAOAFAKIgPAJIAOAAIAAAbIghAAQABBiAJAAQADAAAAgcQAJAKAMAGQgDAYgFAIQgHAIgNAAQgTAAgHgmgAA9g6IALAAQgDgIgIgLgAhVBdIAAhGIA5AAIAAAeIATgDIAAglIgNAAIAAgZIA2AAIAAAZIgPAAIAAAhIASgEIADAZIg7AOIgHgbIAAAfIghAAIAAAIgAg9A+IAJAAIAAgQIgJAAgAhVAQIAAgUIA5AAIAAAUgAhVgKIAAgWIA5AAIAAAWgAhegmIAAgWIAcAAIgMgYIAXgKQAJAOAFANIgMAHIAbAAIAAAWg");
	this.shape.setTransform(31.7,9.525);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6).to({_off:false},0).wait(79).to({_off:true},1).wait(5));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7BFA4C").s().p("Ag2BQQAQgOAHgUIAbAIQgKAXgQATQgKgIgOgIgAAoBCIAWABQADAAAAgEIAAieIAbAAIAACeQAAAUgKAGQgJAGgaAAQgBgPgGgOgAhYBOQAOgeALgjIAYAPQgLAkgMAcgAgBA4IARgLIgzAAIAAiEIA9AAIAACEIgGAAQANAQAHANIgYAOQgEgKgNgWgAgKAUIALAAIAAgMIgLAAgAgKgOIALAAIAAgNIgLAAgAgKgyIALAAIAAgMIgLAAgAAiAqIAAh0IAZAAIAAB0gAhbgSIAQgWQAVAIAKAJIgRAXQgIgIgWgKgAhUhIIARgVQAXAKAIAIIgRAXQgKgKgVgKg");
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
	this.instance.setTransform(215.85,222.9,0.7457,0.7456,0,0,0,29.7,9.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(81).to({startPosition:81},0).to({_off:true},1).wait(4));

	// an_sc4_tt
	this.instance_1 = new lib.an_sc4tt("synched",0,false);
	this.instance_1.setTransform(234.15,243.9,0.7475,0.7473,0,0,0,56.2,11.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).wait(67).to({startPosition:67},0).to({_off:true},1).wait(4));

	// sb_sc4_bg
	this.instance_2 = new lib.sb_sc4bg("synched",0);
	this.instance_2.setTransform(164.5,90.85,1,1,0,0,0,262.9,175.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1,startPosition:7},1).to({x:154.5,startPosition:58},54).to({startPosition:88},30).to({_off:true},1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,145.6,356.2,139.70000000000002);


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
	this.instance.setTransform(215.85,222.9,0.7457,0.7456,0,0,0,29.7,9.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(86));

	// an_sc3_tt
	this.instance_1 = new lib.an_sc3tt("synched",0,false);
	this.instance_1.setTransform(235.5,243.95,0.7455,0.7457,0,0,0,56.1,11.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).wait(72));

	// sb_sc3_bg
	this.instance_2 = new lib.sb_sc3bg("synched",0);
	this.instance_2.setTransform(138.9,147,1,1,0,0,0,277.8,187.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1,startPosition:4},1).to({x:128.9,startPosition:53},52).to({startPosition:56},3).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.9,171.1,346.79999999999995,135.79999999999998);


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

	// an_test
	this.instance = new lib.an_test("synched",0,false);
	this.instance.setTransform(215.85,222.9,0.7457,0.7456,0,0,0,29.7,9.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(86));

	// an_sc2_tt
	this.instance_1 = new lib.an_sc2tt("synched",0,false);
	this.instance_1.setTransform(235.55,243.95,0.7457,0.7456,0,0,0,56.1,11.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).wait(72));

	// an_sc2_bg
	this.instance_2 = new lib.an_sc2bg("synched",0,false);
	this.instance_2.setTransform(149.25,271.3,0.7802,0.7802,0,0,0,205.2,141.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.9,169.6,335.79999999999995,125.9);


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
	this.instance.setTransform(225.25,236.9,0.5411,0.5411,0,0,0,67.1,11);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(70).to({startPosition:68},0).to({_off:true},1).wait(5));

	// an_sc1_title
	this.instance_1 = new lib.an_sc1title("synched",0,false);
	this.instance_1.setTransform(223.85,219.55,0.4761,0.4761,0,0,0,126.4,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(84).to({startPosition:44},0).to({_off:true},1).wait(5));

	// an_corner
	this.instance_2 = new lib.an_corner("synched",0,false);
	this.instance_2.setTransform(98.9,248.35,0.3728,0.4503,0,0,0,254.6,211);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(65).to({startPosition:14},0).to({_off:true},1).wait(5));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2A294B","rgba(45,44,79,0.906)","rgba(54,52,92,0.639)","rgba(69,66,113,0.196)","rgba(75,72,122,0)"],[0,0.275,0.576,0.886,1],0,-63.4,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape.setTransform(47.2864,221.1007,0.3407,0.1996,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2A294B","rgba(45,44,79,0.906)","rgba(54,52,92,0.639)","rgba(69,66,113,0.196)","rgba(75,72,122,0)"],[0,0.275,0.576,0.886,1],0,-63.4,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape_1.setTransform(4.7133,221.0993,0.3407,0.4729,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#2A294B","rgba(45,44,79,0.906)","rgba(54,52,92,0.639)","rgba(69,66,113,0.196)","rgba(75,72,122,0)"],[0,0.275,0.576,0.886,1],0,-63.4,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape_2.setTransform(170.7942,221.0993,0.3407,0.2957,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#2A294B","rgba(45,44,79,0.906)","rgba(54,52,92,0.639)","rgba(69,66,113,0.196)","rgba(75,72,122,0)"],[0,0.275,0.576,0.886,1],0,-63.4,0,63.4).s().p("A4jJ5IAAzyMAxHAAAIAATyg");
	this.shape_3.setTransform(242.5325,226.1507,0.3407,0.8351,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},84).to({state:[]},1).wait(5));

	// sc1bg
	this.instance_3 = new lib.sc1bg();
	this.instance_3.setTransform(35,165,0.1549,0.1548);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84).to({_off:true},1).wait(5));

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("A3uEOIAAobMAvdAAAIAAIbg");
	this.shape_4.setTransform(148.3,227.0351,1,1.7182);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(84).to({_off:true},1).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,165,330.2,114.69999999999999);


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
	this.instance.setTransform(163.8,281.8,0.17,0.17);
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
p.nominalBounds = new cjs.Rectangle(129.2,230,368,161.5);


// stage content:
(lib._970x250 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(1429.35,815.9,3.2467,3.2467,0,0,0,594.6,523.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(899).to({mode:"single",startPosition:449},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(403.2,-12.9,710,399.29999999999995);
// library properties:
lib.properties = {
	id: '98BD5038AE8B4B8D8F62372891313A8C',
	width: 970,
	height: 250,
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