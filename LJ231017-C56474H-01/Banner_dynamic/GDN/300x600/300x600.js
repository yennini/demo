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



(lib.sc1bg = function() {
	this.initialize(img.sc1bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.sc2bg = function() {
	this.initialize(img.sc2bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.sc2car = function() {
	this.initialize(img.sc2car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,154);


(lib.sc3bg = function() {
	this.initialize(img.sc3bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.sc3car = function() {
	this.initialize(img.sc3car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,187);


(lib.sc4bg = function() {
	this.initialize(img.sc4bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.sc5car = function() {
	this.initialize(img.sc5car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,102);


(lib.wheel = function() {
	this.initialize(img.wheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);// helper functions:

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


(lib.sb_sc5ttin = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhvByIAAgeIBfAAIAAgxIhHAAIAAgcIBHAAIAAgrIhVAAIAAgcIBlAAQgOgOgYgRIAZgRQAgAVAPARIgNAKIBPAAIAAAcIhUAAIAAArIBIAAIAAAcIhIAAIAAAxIBgAAIAAAeg");
	this.shape.setTransform(41.925,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AACgNQgcBVhAAmQgMgOgPgKQBKgmAWhmIAPADIgEgbIg5AAIAAgfIBWAAQAACGBjA7QgOALgKAPQhDgpgZhSg");
	this.shape_1.setTransform(11.825,18.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgyB2QgEgOgGgKIAmABQAHgBAAgFIAAgQIhhAAIAAgZIBhAAIAAgLQAKgDAUgGIhmAAIAAgYICWAAIAGgBIATARQggAQgmAMIBfAAIAAAZIhiAAIAAASQAAAKgDAGQgEAGgIACQgIACgNABIgdAAgAhPgFIAAg3IChAAIAAA3gAgygZIBkAAIAAgOIhkAAgAhshIIAAgYIBcAAIgFgQIAdgFIAJAVIBcAAIAAAYg");
	this.shape_2.setTransform(299.475,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVBvIAAjbIBZAAIAACPQABAUgLAGQgJAGgbAAQgCgOgGgPIAVABQAEAAAAgFIAAhzIgeAAIAADAgAhtBLQALgGAAgMIAAinIBpAAIAAB7IhKAAIAAAxIAhgJIgMgVIAagNQAZAqAJAYIgbAPQgEgLgFgLQhCAVgKAGQgDgSgIgMgAhDgMIAtAAIAAgXIgtAAgAhDg+IAtAAIAAgVIgtAAg");
	this.shape_3.setTransform(269.05,18.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABrCSIgbhLIidAAQgPAkgMAnIguAAQAdhZAsheQAihMATgfIAxAAQARAaAfBEQAtBfAhBlgAg+AgIB/AAQgjhXgdgzQgfA8ggBOg");
	this.shape_4.setTransform(231.225,14.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACJCSQgSiRgXhYQgsBnglBiIgcAAQhGi2gLgSQgXBfgTCJIgrAAQAQhzARhNQAFgXAVhLIAqAAQAoBXAmBmQArhrAmhSIArAAQAUBMAFAVQARBOAOBzg");
	this.shape_5.setTransform(192.55,14.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUCSIAAkiIApAAIAAEig");
	this.shape_6.setTransform(163.05,14.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUCSIAAj8IhuAAIAAgmIEFAAIAAAmIhuAAIAAD8g");
	this.shape_7.setTransform(138.825,14.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhnCSIAAkiIAqAAIAAD7IClAAIAAAng");
	this.shape_8.setTransform(114.1,14.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABrCSQgNgpgOgiIieAAQgRAtgKAeIgtAAQAehaAqhdQAjhNATgeIAxAAQARAbAfBDQAtBfAhBlgAg+AgIB/AAQgkhZgcgxQgcA2gjBUg");
	this.shape_9.setTransform(80.725,14.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,310.8,29.3);


(lib.sb_sc5tt100w = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FAED56").s().p("AhyCAQgoguAAhRQAAhSAngtQAmguBMAAQBMAAAoAuQAoAuAABRQAABQgqAuQgpAuhKAAQhJAAgngtgAg2hOQgTAcAAA0QAAA2AUAZQAUAaAgAAQAgAAAVgaQAWgZAAg2QAAgzgWgcQgVgdggAAQgiAAgTAcg");
	this.shape.setTransform(48.375,17.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAED56").s().p("AiKBDQAAgaAPgUQARgVAXgFQgvgbAAgrQAAgvAkgZQAlgYA5gBQA6AAAkAYQAkAZAAAwQABArgvAbQAYAGAPAUQAQAVAAAZQAABqiLAAQiKAAAAhqgAgsAjQgOANAAASQABATAQAMQAQAMAZAAQAZAAARgMQAQgMAAgTQAAgSgNgNQgOgNgfAAQgeAAgOANgAgkhjQgOALAAAQQAAAQAOAMQANAMAXAAQAXAAANgMQAOgMAAgQQAAgQgNgLQgOgMgXAAQgXAAgNAMg");
	this.shape_1.setTransform(13.9,17.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAED56").s().p("ABQCOIgRAEIgEgSIiOAJIgEgkIBDgDIAAgbIhSAAIAABiIgqAAIAAhiIgNAAIAAgjIANAAIAAgKIAqAAIAAAKIBSAAIAAgQIhkAAIAAhxIDzAAIAABxIhnAAIAAAQICBAAIAABfQAAANgEAIQgDAHgIAEQgMAGghABQgBgNgIgPgABgCHIAGAAQAEAAAAgFIAAg7IgkAAQAUAhAGAfgAAUBgIAagBIgJgRIAfgHIgwAAgAAUgHIA7AAIAAgQIg7AAgAhPgHIA7AAIAAgQIg7AAgAAUgxIA7AAIAAgRIg7AAgAhPgxIA7AAIAAgRIg7AAgAAqhjIAAgQIgkAAIAAgjIAkAAIAAgTIAqAAIAAATIBNAAIAAAjIhNAAIAAAQgAhVhjIAAgQIhMAAIAAgjIBMAAIAAgTIAqAAIAAATIAmAAIAAAjIgmAAIAAAQg");
	this.shape_2.setTransform(89.35,16.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVCqIAAhCIiOAAIAAgoICOAAIAAgYIAtAAIAAAYICOAAIAAAoIiOAAIAABCgAAvAdQhgAJgNAGQgGgXgFgMQAKgCAVgPQARgOAMgLQgfACgKADIgMghQAIgCAJgLIATgZIh8AAIAAgnICHAAIgMgUIAqgLQAOATAHAMICAAAIAAAnIiWAAQgLARgMAPIAfgBQAQgRAIgNIAhAVQgmArgsAkIAmgCQgJgNgEgFIAggMIARAYIAXgTQAwAZAYAVIgeAaQgSgRgpgZQAKAQAFANIgiANIgHgSgAikALQAVgIBFgcIAIAfIgHADIhHAkgAhJAJIAAAAgAiahEIAcgXQAnAWAQAQIgdAaQgRgSglgXgABEgwQAZgSAWgaIAkAUQgYAZgbATg");
	this.shape_3.setTransform(306.15,16.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA4B7IA2ABQAKAAAAgJIAAkWIArAAIAAEWQAAAUgEAJQgFAKgKAGQgSAIg3AAQgDgWgMgXgAhWCoIAAiAQgbA4gbAcQgEgNgSgeQAUgSASgdQATgcAMgbIg9AAIAAgoIBEAAIAAgtQgYAFgjAFQgEgQgJgSQBfgOAzgXIAeAhQgXAJglAKIAAA2IBAAAIAAAoIhAAAIAAAMQARAMAtAqIgYAlQgQgUgWgYIAACCgAArBNIAAjKIAsAAIAADKg");
	this.shape_4.setTransform(261.85,16.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhNBxIATgZIA+AUQAZgLASgNIisAAIAAggIDOAAIAGgCIAcASQgWAdgtAcIAcAKIgSAeQgugVhZgfgAiqATQBngVA4gjIgLAAIAAg5IhjAAIAAAoIgmAAIAAhDICJAAIAAgNIhwAAIAAgeIELAAIAAAeIhyAAIAAANICLAAIAABDIgnAAIAAgoIgVAAIAPAVQgXAJggAFQAtAMAWAIIgJAaQgkgOg1gOIAKgXIACAAIgIgMQAXgFApgNIhMAAIAAA5IgLAAIAaANIgGAEQAaAMAnAIQAoAJAnAEQgPAOgLAUQgjgGgjgLIAAALIiaAAIAAgMQgZAKghAJQgQgRgSgMgAgsAQIBTAAQgbgLgMgHIgsASgAiCgpIBMgPQgcgJgggHIALgVQAqAGAcALIgJASIAJgCIACAXIhXAZg");
	this.shape_5.setTransform(219.45,17.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AikCOQAfgYARgjIApAMQgVAqghAfQgQgPgTgLgAATCaQgKgIgIgDIAFgGIgeARQgLgWgcghIAhgSQAcAgAKASQAXgyAAhnIAAiFICGAAIAAESQAAAQgEAJQgEAJgIAFQgPAJgsgBQgCgWgKgTIAmABQAHAAABgIIAAhHIg3AAQgIBPgaApQgEgFgMgIgABHAIIA1AAIAAgsIg1AAgABHhKIA1AAIAAgqIg1AAgAihBRIAAgmIAhAAIAAiGIgcAAIAAglIAcAAIAAgnIAmAAIAAAnIAtAAIAAgnIAoAAIAAAnIAXAAIAAAlIgXAAIAACGIAVAAIAAAmgAhaArIAtAAIAAgZIgtAAgAhagOIAtAAIAAgXIgtAAgAhahGIAtAAIAAgVIgtAAg");
	this.shape_6.setTransform(175.2,17.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AicCAQA4gSAagjQAUgbAGgvIg9AAIAAgXQgMANgPAMQgQgRgVgOQAfgVAXgkQAYgiAMgpIAuALQgUA9glAwIC7AAQgiglgVgyIg5AAIAAgoIBZAAQANAqAaAhQAcAlAlASQgUAVgLATQgJgFgSgQQgDBSgFAiQgEAkgJALQgLAOgWAEQgQACgngBQgBgWgMgWQAZACAWAAQAJAAAFgGQAKgKAFhpIhHAAQgIA9gXAjQgeAvhBAYQgKgWgTgSg");
	this.shape_7.setTransform(132.525,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.3,322.7,35);


(lib.sb_sc5tt4w = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AieCqIAAgpIBIAAQgJgbgVggIAdgMIg2AAIAAgoIB1AAIAAgkIhKAAIAAgSQgUAJgcALQgKgWgTgTQA3gQArgbQAvgdAZgoIApATIgLAPQAbAYApAVQApAWAqALQgRARgNAVQgWgHgcgOIAAAWIhKAAIAAAkIB1AAIAAAoIg6AAIAlANQgUAhgTAZIBPAAIAAApgAAWCBIAuAAIgZgKQAUgdANggIg2AAgAgvB1IgeAMIA1AAIAAhHIg3AAQAXAgAJAbgAg6g7IB6AAQgkgWgcgZQgYAZgiAWg");
	this.shape.setTransform(238.225,17.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAjCqIAAh7IhiAAIAAgqIBiAAIAAg+IgsAAQgKAagNAVQgKgIgcgNQAdgoAPhQIApAJIgLAqIAfAAIAAhCIAsAAIAABCIBMAAIAAArIhMAAIAAA+IBeAAIAAAqIheAAIAAB7gAh+CqIAAi3IgWAZQgJgXgPgWQAZgYAVglQAWglAOgnIApAOQgQAqgUAkIAAD4g");
	this.shape_1.setTransform(193.825,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AikCkIAAj/IApAAIAAgjIguAAIAAglICuAAIAAAlIgtAAIAAAjIArAAIAAD6IgiAAIAAgTIhjAAIAAAYgAiCBrIBjAAIAAhUIgQAAQgOAAgFgGQgFgGAAgRIAAgxIgRAAIAAAbQAAArgYAWQgGgIgMgHgAiCAUQASgRAAgfIAAgbIgSAAgAgvgHQAAAEABABQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIAHAAQAEAAABgBIAAg1IgQAAgAhZhbIAPAAIAAgjIgPAAgABFCgQgdAAgMgMQgLgMAAghIAAiTIBhAAIAAhKIhiAAIAAgqICMAAIAACdIhfAAIAABqQAAALACADQADADAKAAIAmAAQAJAAAEgLQADgKABglQAPAMAYAFQgEAvgKARQgLARgbAAgAh3BTIAAghIBNAAIAAAhg");
	this.shape_2.setTransform(150.325,18.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAED56").s().p("AiqB6QA0gTAUgmQAPgbAEg2IhTAAIAAgqIFGAAIAAAqIhhAAIAABwQAAAKADADQADADAJAAIAhAAQAJAAADgMQADgLABgoQAOAMAaAHQgDAxgLASQgLASgcAAIgsAAQgeAAgLgNQgLgLAAghIAAhwIg2AAQgFBCgUAkQgZAvg9AZQgLgWgQgOgAiBhzIAAgqIEDAAIAAAqg");
	this.shape_3.setTransform(104.125,18.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FAED56").s().p("ABRCPIgSAFQAAgHgDgMIiQAKIgEglIBEgDIAAgcIhTAAIAABkIgqAAIAAhkIgNAAIAAgjIANAAIAAgKIAqAAIAAAKIBTAAIAAgPIhlAAIAAh0ID1AAIAAB0IhnAAIAAAPICCAAIAABgQgBAOgCAHQgEAIgIAEQgLAGgjAAQgBgMgIgQgABhCIIAGAAQAFAAgBgEIAAg9IgkAAQAUAhAGAggAAVBhIAagBIgIgRIAegIIgwAAgAAVgGIA7AAIAAgRIg7AAgAhQgGIA8AAIAAgRIg8AAgAAVgyIA7AAIAAgRIg7AAgAhQgyIA8AAIAAgRIg8AAgAAqhkIAAgQIgkAAIAAgkIAkAAIAAgSIAsAAIAAASIBNAAIAAAkIhNAAIAAAQgAhWhkIAAgQIhNAAIAAgkIBNAAIAAgSIArAAIAAASIAnAAIAAAkIgnAAIAAAQg");
	this.shape_4.setTransform(60.1,17.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAED56").s().p("AAdCmIAAg7Ii3AAIAAg9QA6haB1h4IBgAAQiCB+g1BQIBfAAIAAhIIBNAAIAABIIAxAAIAABBIgxAAIAAA7g");
	this.shape_5.setTransform(15.5,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,255.8,34.9);


(lib.sb_sc5car = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sc5car();
	this.instance.setTransform(0,0,1.8712,1.871);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,561.4,190.9);


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


(lib.mo_sc5circle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2F70B6").s().p("AhhBiQgogoAAg6QAAg4AogpQAogoA5AAQA6AAAoAoQApApAAA4QAAA6gpAoQgoAog6AAQg5AAgogog");
	this.shape.setTransform(18.15,17.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc5circle, new cjs.Rectangle(4.3,4.1,27.7,27.700000000000003), null);


(lib.sb_sc4ttzero = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAeBJIAZAAQAFAAgBgDIAAhHIhTAAIAAgUIAOAAQgEgIgHgHQAigHAIgQIglAAIAAgTIAqAAIABgPIAWAAIgBAPIAqAAIAAATIgsAAIgBACQAlARAKAFIgOAOIARAAIAAAUIgMAAIAABHQAAAQgKAFQgKAEgZAAQgBgKgHgMgAABgVIBHAAIglgTQgLAMgXAHgAhCBeIAAhNQgIAagKAPQgCgIgJgQQARgZAJgrIgWAAIAAgWIAZAAIAAgmIAWAAIAAAmIATAAIAAAWIgTAAIAAAJQAPAUAIAOIgOARIgJgUIAABYgAgNBFIAAg8IA7AAIAAAxIgoAAIAAALgAAGApIAUAAIAAgQIgUAAg");
	this.shape.setTransform(155.25,9.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhfBSQARgfAAhFIAAg3IBPAAQgCgHgEgHIAWgHQAFAIAHANIBBAAIAAAWIiUAAIgBA9QAVgPAFglIAWADIgFAWQALAKAIAJIAAguIAYAAIAAAwQARgOAFggIAVADQgCAPgEAJQAVAQAHAHIgOAQQgFgGgSgQQgGAMgLAJIgLgKIAAARIA1AAIAAAVIg1AAIAAAUIBAAAIAAAVIiXAAIAAgVIA/AAIAAgUIgyAAIAAgVIAyAAIAAgYIgLAOQgEgGgMgMQgIANgKAJQgFgFgMgIQgDA3gQAdQgKgIgLgFg");
	this.shape_1.setTransform(130.925,9.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhdBOQANgeAAhBIAAhHICrAAIAAARIiWAAIAAA2QAAAWgCATQAHgIAAgRIAAgWIBFAAIAAApQAXgQACgZIgWAAIAAgSIAXAAIAAgaIASAAIAAAaIARAAQgGgKgJgIIANgJQALALAEAHIgNAJIANAAIAAASIgaAAQAJAdAWALQgJAIgEAIQgRgIgLgZQgIAVgVANIAEAAIAAAIIA1AAIAAARIg1AAIAAALIBBAAIAAARIicAAIAAgRIBDAAIAAgLIg1AAIAAgRIA1AAIAAgIIAUAAQgEgGgGgEQAAAFgGADQgGABgRAAIgGgMIAPABQABAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIAAgGIgfAKIgDgIQgBAMgGAHQgIgFgJgDQgEAqgJAVQgGgFgNgGgAgkAKIAXgGIgVgGIAFgJQAQAEAIADIgEAHIAGgCIAAgNIghAAgAgygdIAAglIA9AAIAAAlgAghgmIAcAAIAAgEIgcAAgAghgzIAcAAIAAgGIgcAAg");
	this.shape_2.setTransform(106.575,9.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AACBJIAWAAQAEAAAAgDIAAhDIgpAAIAAgWIA9AAQgRgKgagLIALgQIAXAJQAJgJAFgIIg7AAIAAgVIBMAAIAFgBIAPAMQgOATgSARIAOAIIgIALIALAAIAEgBIARAFQgJAfgLAXIgUgHQAGgPAEgOIgPAAIAABDQAAAQgKAFQgHAEgZAAQgCgMgFgKgAheBWQAHgQACgeIAUADQgCAfgHATQgIgEgMgDgAg7AqIATgEQAEAXACAYIgUADQgBgNgEghgAgjAkIASgFQAIAVAFAUIgUAHQgBgJgKgigAhdAMQAGgBALgLIAOgRQgVADgEACQgCgKgGgLQAFgBAIgKQAEgGAIgNQAJgRAFgOIAWAKQgPAbgPAVIAQgBIAQgbIAUAMQgSAfgbAcIAVgDIgGgOIASgGQALAYAEAQIgTAIIgCgKQgvAIgJADg");
	this.shape_3.setTransform(82.375,9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhXBLQA8ggAHhHIg9AAIAAgYIA+AAIAAgqIAZAAIAAAqIBSAAIgBAMQgDA7gEAbQgDAagHAIQgHAKgNABQgLABgWAAQAAgNgIgMIAeAAQAGAAAEgCQAIgKAFhTIg5AAQgFBUhEAnQgGgKgNgKg");
	this.shape_4.setTransform(57.75,9.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhbBcIAAgTIBOAAIAAgLIg/AAIAAgSIA/AAIAAgJIg5AAIAAg/IA5AAIAAgIIhMAAIAAgTIBMAAIAAgJIg5ACQAAgHgFgMQBVgCAzgIIALATQgdAFggACIAAAKIBQAAIAAATIhQAAIAAAIIA8AAIAAA/Ig8AAIAAAJIBEAAIAAASIhEAAIAAALIBRAAIAAATgAALATIAkAAIAAgJIgkAAgAguATIAhAAIAAgJIghAAgAALgDIAkAAIAAgJIgkAAgAgugDIAhAAIAAgJIghAAg");
	this.shape_5.setTransform(33.85,9.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqA/IAKgOIAiAMQAQgIAIgGIhfAAIAAgSIByAAIAEgBIAPAKQgMAPgZARIAQAGIgLAQQgagLgwgSgAhfALQA5gLAggUIgGAAIAAggIg3AAIAAAXIgVAAIAAgmIBMAAIAAgHIg/AAIAAgRICVAAIAAARIg/AAIAAAHIBNAAIAAAmIgWAAIAAgXIgMAAIAJAMQgJAEgWAEQAYAGAOAFIgGAOQgTgHgegJIAFgMIACAAIgFgHQAMgCAYgIIgqAAIAAAgIgHAAIAPAHIgEADQAhAMAwAFQgIAIgHALQgSgDgVgGIAAAGIhVAAIAAgHIghALQgMgMgHgEgAgZAKIAvAAIgWgLgAhIgWIAqgJIgigJIAHgMQAUADATAHIgFAKIAFgBIABANIgxAOg");
	this.shape_6.setTransform(9.575,10.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164.8,19.4);


(lib.sb_sc4ttseat = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AixC1QgKgGgHgDQAagtAChfIgUADIgGgnIAagDIAAiDIAiAAQAHgdACgUIArAHIgOAqIAuAAIAAB0IAUgDIACAjIgWAEIAACCQAAALgCAIQAYgfAKgvQAGggAAguIAAhCICtAAIAAB+IiGAAIgCAPICSAAIAABuIgqAAIAAgLIhNAAIAAALIgpAAIAAg1QgJAcgRAWQgSgRgTgIQgEAMgJAEQgIAFgNABIgfABQgDgUgJgRIAiAAQAHAAAAgGIAAgzIgaALQgEgWgOggQgEBfgbAwIgQgMgAA2CSIBNAAIAAgdIhNAAgAhWBYIAAhEIgrAGIAAARIAXgJQAQApAEANgAAgAiIBYAAIAAgQIhXAAgAAhgKIBXAAIAAgPIhXAAgAiBgLIArgGIAAgRIgbAKQgCgMgOgngAhWgmIAAg+IgrAAIAAAUIAYgJQAJATAKAggAgshhQAjgQAcgYQAggaARgdIApAQIgIALQAoAoA2AWQgMAQgHAaQgbgOgagUIAAATIhYAAIAAgQQgfAYgZAOQgLgbgMgQgAA1hsIA2AAIgdgag");
	this.shape.setTransform(165.675,19.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiqCwQgNgJgIgDQAVgnAIg+QAFgpAAg8IAAhuICfAAQgGgRgIgLIAugOQANATALAXICDAAIAAAsIkqAAIgCB7QAqgfAKhJIArAFQgEAbgGASQAXATASAVIAAhfIAvAAIAABjQAjggAJg+IAsAFQgFAbgIAWQApAhAOAOIgbAgQgMgOghgdQgPAYgUAQQgIgIgPgLIAAAjIBrAAIAAAqIhrAAIAAAoICCAAIAAAqIkxAAIAAgqICAAAIAAgoIhmAAIAAgqIBmAAIAAgyIgXAeQgMgQgWgWQgOAbgWASQgKgLgXgPQgHBtggA8QgHgGgNgJg");
	this.shape_1.setTransform(116.475,19.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiyCwQgKgLgHgEQA5giAVhUIgjAAQgTAAgGAGQgDgNgMgaQAMgEAJgIQAHgHAggtIg0AAIAAgmIBSAAIAFgCIAeANQgiAzgdAkIAeAAIAIgCIAWAJQgHAzgQAlQARAaAjAKQAbAHA2AAQBZAABDgHQgKAOgGAfQgxADhcABQg7AAgggJQgmgLgWgcQgTAhggAWIgPgRgABfBbIg6AAIAAAOIggAAIAAhYIAlAAIAAgXIgvAAIAAgdIAvAAIAAgVIg1AAIAAC0IgrAAIAAjYIAqAAQgFgSgGgJIAHgCIgzAAIAAgmIBfAAIgMgTIAmgOQANAQAJARIBsAAIAAAmIgvAAIgPAdIA2AAIAACsQAAARgDAHQgEAJgJAEQgJAGgOABIgfABQgDgNgIgVgABNARIAmAAIAABGIALAAQAGgBAAgGIAAiIIg3AAIAAAVIAxAAIAAAdIgxAAgAAlBAIAsAAIAAgVIgsAAgAAfhcIAvAAIALgdIhEAAQAHANADAQgAiuikIAkgXQAjAjATAaIglAbQgQgZglgog");
	this.shape_2.setTransform(67.925,19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVCTIAlABQAHAAAAgGIAAiMIhBAAIAAgrIBSAAQgegdgmgYIAggaQAVANAPAMQASgUALgOIhlAAIAAgqICFAAIAJgDIAeAVQggAwgmAiQAMAJAIALIgLAKIAeAAIAHgBIAgAHQgLAzgOApIgngJIALguIgaAAIAACNQgBARgDAJQgDAKgLAFQgJAGgQABIgjABQgBgTgLgagAilC6IAAiIIA4AAIAAgeIhBAAIAAgmIBBAAIAAgdIgiAAIAAgeIgYATQgGgSgQgcQAbgQAYgWQAZgYAOgZIApAQIgHAKQAuAfAZAfIgaAmIgNgQIAAAiIgfAAIAAAdIA7AAIAAAmIg7AAIAAAeIA4AAIAACBIguAAIAAgMIhDAAIAAATgAh5CAIBDAAIAAgmIhDAAgAiEhWIBeAAQgRgTghgbQgTAZgZAVg");
	this.shape_3.setTransform(18.95,19.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185.2,38.6);


(lib.sb_sc4ttbose = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgdBNQATgJAHgSQAEgOABgdQgIABgFACIgHgWQAFgBAIgOQAGgIAFgMIgWAAIAAgXIAhAAIAJgYIAaAGIgHASIAvAAIAAAXIg7AAQgKARgJAOIAqgDIgIgRIATgIQAVAhAGAQIgVAKIgGgPIgIAAIAAA/IAAAGIAEABIAIAAQADAAABgFIABgXQAHAGANADQgCAXgEAJQgFAJgLgBIgPAAQgOAAgEgFQgFgHABgQIAAg8IgMABQgBAlgHATQgJAXgWANQgHgNgIgGgAhfBVQAGgPACgfIATADQgDAdgGAUQgHgEgLgCgAhAAqIARgFQAFAaAAAQIgRAFQgCgTgDgXgAgqAkIARgFQAGAQAEARIgSAGQgCgPgHgTgAhdALQAGgCAJgLIANgQQgSADgEACQgDgJgFgNQAFgBAGgKQAFgEAHgOQAIgQAFgPIAVAJQgNAcgQAWIAOgBQAJgPAGgOIAVALQgMAXgQAWIgOARIAUgDIgGgOIAQgHQAMAXACARIgRAHIgCgJQgsAIgIAEg");
	this.shape.setTransform(282.3,9.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBIIAaAAQAFAAAAgDIAAgmQg1AEgJAEQgEgNgEgJQAJgBATgJQAMgFAVgLQgnADgFACIgHgWQAGgBALgGQAPgGARgOQgYAFgiAEQgCgLgFgJQBVgMArgSIASATQgXAJgjAIIAKAHQgOALgTAMIAigCIAWgQIASAQQggAXgkARIA4gDIgNgOIAUgKQAcAcAMARIgVAMIgKgOIgsADIAAAoQAAAKgDAEQgCAFgGADQgJAEgaAAQgBgLgHgMgAhaBIQAZgPAQgUIAZAIQgUAZgZARIgVgPgAAaAvIAUgNQAcATARASIgWAOQgMgPgfgXg");
	this.shape_1.setTransform(257.9,9.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAsBgIAAgFIhVAAIAAAFIgVAAIAAgyICBAAIAAAygAgpBQIBVAAIAAgGIhVAAgAgpBAIBVAAIAAgGIhVAAgAhaAoIAAgPIAzAAIgFgJIAGgCIgfAAIAAgOIA7AAIgEgGIAXgFQADAGABAFIA8AAIAAAOIgYAAIgKALIA0AAIAAAPgAgRAYIgEABIAoAAIgBAAQAEgFACgGIgvAAQAFAFABAFgAhdgLQAYgJAMgNQgXADgFACIgFgOQAGgCAGgFIAKgHQgMABgFACIgEgPQADAAAFgFQAOgOAFgHIANAIQgJALgKAIIANgBIALgLIAMAIQgPARgQALIAPgBQADgDACgGIANADIAAghIATAAIgDgHIASgFQADAGACAHIAUAAIAAAvIgHAAQAJAJAFAGIAAhDIAoAAIAEgBIANAHIgNAdQAOAMgBALQABALgJAGQgEACgGABQgGABgIgBQAAgJgFgHIALABIAFgBQADgCAAgEQAAgHgOgLIAIgWIgOAAIAABEIgTAAIAAgKIgMAFIgFgIQgtAJgEADQgCgIgFgHQAIgDgBgKIAAgNQgOAhgoAOQgCgHgHgGgAgJgaIARgDIgEgFIAEgBIgRAAgAgJgvIAUAAIAAgGIgUAAgAgJhAIAUAAIAAgHIgUAAg");
	this.shape_2.setTransform(233.8,9.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhBBgIAAhdICFAAIAABcIgaAAIAAgGIhTAAIAAAHgAgpBFIBTAAIAAgOIhTAAgAgpAkIBTAAIAAgNIhTAAgAhagIIAAgWIAsAAQgCgLgGgKIAUgEIgtAAIAAgWIBFAAIgHgOIAZgEIAIASIBBAAIAAAWIgqAAIATAEIgKAVIArAAIAAAWgAgTgeIAoAAQAFgLAFgOIg9AAQAIAMADANg");
	this.shape_3.setTransform(209.475,9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABLBDIAAhMQAAgYgWAAQgUAAgOAMIAABYIglAAIAAhMQAAgYgXAAQgJgBgLAFQgJAEgEAEIAABYIgnAAIAAiCIAgAAIADAOQAYgRAaAAQAdABALATQAZgTAcgBQAwAAABA1IAABQg");
	this.shape_4.setTransform(181.25,12.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhCAOIAAhQIAmAAIAABMQABAZAWAAQASAAAQgNIAAhYIAmAAIAACCIgfAAIgEgOQgaAQgYAAQgwAAAAg0g");
	this.shape_5.setTransform(159.25,12.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSBbIAAiBIAlAAIAACBgAgUg5IAAghIApAAIAAAhg");
	this.shape_6.setTransform(146.725,9.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABLBDIAAhMQAAgYgWAAQgUAAgOAMIAABYIglAAIAAhMQAAgYgXAAQgSAAgPAMIAABYIgnAAIAAiCIAfAAIAFAOQAVgRAcAAQAdABALATQAZgTAcgBQAxAAAAA1IAABQg");
	this.shape_7.setTransform(129.525,12.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvA0QgVgSAAgiQAAggAWgTQAUgQAeAAQAgAAAQAQQARARAAAgIAAAQIhhAAQADAXAiAAQAXABAegJIAAAeQgdAJgZAAQgjAAgUgQgAgcgJIA5AAQAAgcgZAAQgdAAgDAcg");
	this.shape_8.setTransform(108.125,12.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqBDIAAiCIAeAAIAFAOQAWgQAdgBIAAAlQgaAAgXANIAABTg");
	this.shape_9.setTransform(95.55,12.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhJBTIAAikIBLAAQBIAAAAA7QABAfgYAPQgTANgeAAIgkAAIAAAugAgiAEIAiAAQAPAAAJgEQAKgGAAgRQAAgOgKgGQgJgFgQAAIghAAg");
	this.shape_10.setTransform(80.65,10.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgvA0QgVgSAAgiQAAggAWgTQAUgQAeAAQAgAAAQAQQARARAAAgIAAAQIhhAAQADAXAiAAQAXABAegJIAAAeQgdAJgZAAQgjAAgUgQgAgcgJIA5AAQAAgcgZAAQgdAAgDAcg");
	this.shape_11.setTransform(56.275,12.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag5A8IAAggQAaAJAZAAQAQAAAHgDQAFgCABgGQAAgHgVgEIgbgGQgUgEgIgJQgHgJAAgPQAAgUASgJQARgKAcAAQAcAAAVAJIAAAeQgZgIgVgBQgdAAAAAJQAAAFAEACIAQADIAZAGQAnAJAAAcQAAArhCAAQgcAAgYgIg");
	this.shape_12.setTransform(40.95,12.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag1AzQgVgSAAghQAAggAVgRQAUgSAhAAQAiAAAUASQAVARAAAgQAAAggVATQgUARgiAAQghAAgUgRgAgYgaQgKAKAAAQQAAAQAKAKQAKAKAPAAQAPAAAJgKQAKgKAAgQQAAgQgKgKQgKgJgPAAQgPAAgJAJg");
	this.shape_13.setTransform(25.025,12.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhJBTIAAikIBDAAQBJAAAAAqQAAALgHAKQgIAKgOAGIAAAAQAPACAKAJQALAKAAAQQAAAvhHABgAgiAzIAkAAQAQAAAIgEQAHgEABgLQAAgLgKgEQgHgEgRAAIgiAAgAgigPIAeAAQANAAAIgCQAJgFAAgLQAAgKgJgEQgHgCgNgBIgfAAg");
	this.shape_14.setTransform(7.45,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,291.9,19.3);


(lib.sb_sc4sharp = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(13,2,53,0.478)").s().p("EggyAeRUAAqgAOAgigeQQQRvIQJvGMAAAA8sQwqAGwiADIv/ACQw5AAAegLg");
	this.shape.setTransform(497.5368,461.3523,2.369,2.369);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,995.1,922.7);


(lib.an_lineyellow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(250,237,86,0)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape.setTransform(5.7,154.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(250,237,86,0.11)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_1.setTransform(5.7,145.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(250,237,86,0.212)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_2.setTransform(5.7,137.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(250,237,86,0.306)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_3.setTransform(5.7,130.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(250,237,86,0.396)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_4.setTransform(5.7,123.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(250,237,86,0.475)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_5.setTransform(5.7,117.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(250,237,86,0.545)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_6.setTransform(5.7,111.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(250,237,86,0.608)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_7.setTransform(5.7,106.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(250,237,86,0.667)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_8.setTransform(5.7,102.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(250,237,86,0.722)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_9.setTransform(5.7,98.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(250,237,86,0.769)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_10.setTransform(5.7,94.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(250,237,86,0.808)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_11.setTransform(5.7,91.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(250,237,86,0.843)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_12.setTransform(5.7,88.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(250,237,86,0.875)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_13.setTransform(5.7,86.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(250,237,86,0.902)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_14.setTransform(5.7,83.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(250,237,86,0.925)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_15.setTransform(5.7,82.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(250,237,86,0.941)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_16.setTransform(5.7,80.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(250,237,86,0.957)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_17.setTransform(5.7,79.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(250,237,86,0.973)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_18.setTransform(5.7,78.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(250,237,86,0.98)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_19.setTransform(5.7,77.775);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(250,237,86,0.988)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_20.setTransform(5.7,77.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(250,237,86,0.992)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_21.setTransform(5.7,76.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(250,237,86,0.996)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_22.setTransform(5.7,76.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FAED56").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_23.setTransform(5.7,76.375);
	this.shape_23._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(23).to({_off:false},0).wait(1).to({y:76.325},0).wait(1).to({y:76.275},0).wait(65));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.4,230.6);


(lib.sb_sc3ttTJP = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgUBKQAXgQALgcQAJgWACgkIgaAAIAAgQIAbAAIAAgqIASAAIgBAqIAqAAIAAAHQgCA8gCAXQgCAZgEAFQgFAHgKACQgKABgPgBQgBgKgFgHIAYABQAEAAADgDQAFgIAChWIgZAAQgCApgKAZQgMAfgaASQgEgIgIgFgAhUAyIAOgCIAAh+IA/ABIAABvIAIgCIACAQIhTAUgAg2AtIAfgHIAAgWIgfAAgAg2ABIAfAAIAAgYIgfAAgAg2gmIAfAAIAAgYIgfAAg");
	this.shape.setTransform(176.825,9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA0BHIAMAAQABAAAAAAQABAAAAAAQAAAAAAgBQABAAAAgBIAAgXIgUAAIAAAoIgQAAIAAgoIgTAAIAAApIgPAAIAAh2IAiAAIAAgOIglAAIAAgQIAlABIABgZIAPAAIAAAZIAaAAQgJgKgMgIIAKgIQAQAKAHAIIgJAIIALAAIAAAPIgoAAIAAAOIAkAAIAABkQAAAMgGADQgGADgOAAQgBgIgEgIgAAvAfIAUAAIAAgRIgUAAgAAMAfIATAAIAAgRIgTAAgAAvAAIAUAAIAAgPIgUAAgAAMAAIATAAIAAgPIgTAAgAg2BXIAAgfIggAAIAAgQIAgAAIAAgOIgZAAIAAhBIAZAAIAAgMIgdAAIAAgQIAdAAIAAgTIAQAAIAAATIAcAAIAAAQIgcAAIAAAMIAaAAIAABBIgaAAIAAAOIAeAAIAAAQIgeAAIgBAfgAgoANIAPABIAAgOIgPAAgAhCANIAOAAIAAgNIgOAAgAgogMIAPAAIAAgOIgPAAgAhCgMIAOAAIAAgOIgOAAg");
	this.shape_1.setTransform(154.15,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA7BWIAAgFIguAAIAAAGIgQAAIAAhFIgTAKIgEgFIADAPIg5AYIgHgRIAZgKIAAg5IgVAAIAAgRIAVAAIABgrIAQAAIAAArIASAAIAAALIAiAAIAAgVIgcAAIAAgQIAcAAIAAgVIARAAIAAAVIAbAAIAAANQAJgLAHgOIAQAFQgKAWgSAWIAhAAIAAAQIgxAAQgLAKgJAFIA5ABIAABTgAANBCIAuAAIAAgRIguAAgAANAjIAuAAIAAgQIguAAgAgtAdIASgIIgHgIQAYgJAWgQIgnAAIAAgKIgSAAgAAYgcIAHAAQAMgMAHgJIgaAAg");
	this.shape_2.setTransform(131.125,8.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpBMQAagOALgaQgYAHgEACIgEgNQAEgBAGgKQAFgHAIgPQgRABgCACIgGgNQAEgBADgGQAIgOAEgSIAOAHQgGAPgHANIAMgBIAEgMIANAIQgLAZgNATIANgDIACgJIAMADQgJAygkAVQgEgGgGgEgAhUBGIAQABQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAgtIgQAGIgFgRIAVgHIAAglIgSAAIAAgQIASAAIAAglIAPAAIAAAlIAPAAIAAAQIgPAAIAAAgIANgEIADAPIgQAGIAAAyQAAAMgGAEQgGADgRAAQgBgIgEgIgAARBVIAAhPIgDADIgLgJQAQgQAIgfIAOADIgGARIATAAIgHgPIALgEQAHAKACAJIARAAIAAAOIgVAAIAAAPIATABIAAAMIgTAAIAAAQIASAAIAAANIgSAAIAAATIAXAAIAAANIg3AAIAAAJgAAfA+IASAAIAAgSIgSAAgAAfAfIASAAIAAgQIgSAAgAAfACIASAAIAAgPIgSAAgAgggyIAAgQIAyAAIgHgNIAMgFQAEAGAGAMIA1ABIAAAPg");
	this.shape_3.setTransform(108.1,8.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhYBMQAbgRAKgrIgTAAQgIAAgDAEQgDgKgDgFQAGgCAEgEQAFgFAQgWIgcgBIAAgNIAnAAIACgCIAMAGQgTAagNAPIASAAIADAAIAJADQgFAbgHAPQAIANASAEQAOAEAaAAQAmAAAegDQgDAFgCAMQgcABgkAAQgcAAgPgEQgTgGgKgNQgJAQgPAKQgJgKgDgBgAAqAsIASAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBAAAAIAAgPIgeAAIAAAeIgPAAIAAgeIgbAAIAAAeIgQAAIAAhgIAwAAIgegOIAKgJQALAEAOAGQANgHAIgHIhIAAIAAgNIBYAAIAEgBIAKAJQgPAOgVALIANAHIAXAAIAABRQAAAKgHADQgFACgUABQgBgHgEgHgAAhAOIAeAAIAAgOIgeAAgAgJAOIAbAAIAAgOIgbAAgAAhgMIAeAAIAAgOIgeAAgAgJgMIAbAAIAAgOIgbAAgAhOhOIAOgIQAQARAIAMIgOAKQgGgKgSgVg");
	this.shape_4.setTransform(85.2,8.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhUBIQAsgJAcgTQgRgTgMgaIAQgFQAJAWAQARQASgSAIgWIASAGQgKAZgUAUQAcAUAsAHQgHAFgEALQgugIgdgYQgbAWguALQgFgIgGgIgAAUgdIAOgKQAfAVARASIgOALQgRgTgfgVgAhRgBQAdgQARgWIARAHQgTAZgeARIgOgLgAhRgrIAAgRIBNAAQgHgOgFgHIAQgGQAJAOAFALIgGACIBJAAIAAARg");
	this.shape_5.setTransform(62.25,8.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhFBNIAAiZIBHAAQBEAAAAA4QAAAdgXAOQgSAMgbAAIgiAAIAAAqgAggAEIAgAAQAOAAAIgEQAJgGAAgPQAAgYggAAIgfAAg");
	this.shape_6.setTransform(39.275,8.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgyBJIAAghQASAGATABQAQgBAGgHQAFgGAAgPIAAhgIAlAAIgBBnQAAAagPANQgPAPgbAAQgWAAgVgGg");
	this.shape_7.setTransform(20.975,8.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRBOIAAh7IgzAAIAAgfICJAAIAAAfIgyAAIgBB7g");
	this.shape_8.setTransform(6.925,8.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185.3,17.8);


(lib.sb_sc3ttsafe = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgsB5QAfgPALgcQAJgWABgxQgTACgGAEQgDgMgHgPQAIgCAOgVQAFgJAQgeIgoAAIAAgbIA1AAIAQgmIAfAJIgNAdIBLAAIAAAbIhaAAQgPAdgTAcIBPgIIgSgeIAXgKQAfAvALAbIgZAMIgKgWIgTACIAABmQAAAHABACQACACAEAAIASAAQAEAAACgIQABgHABgbQAKAIAOADQgCAhgGALQgGAMgQAAIgYAAQgRAAgHgIQgGgHAAgUIAAhlIgXACQgDA6gLAdQgOAjgkASQgFgNgLgJgAiOCAQAJgaAEgtIAXAEQgFAugKAdQgGgEgPgEgAhfA8IAUgFQAHAiACAeIgWAGQgBgegGgjgAg9A2IAUgHQAMAkAEARIgVAHQgCgPgNgmgAiMATQAHgCARgRQAGgIAQgWQggAEgHADIgIgaQAGgCALgPQAGgJALgUQANgZAIgWIAbALQgWAtgZAjIAbgCQAPgYAJgVIAYAPQgdA2gmArIApgGQgEgNgGgNIAUgHQAQAgAGAcIgWAIIgDgPQhIANgJAEQgCgMgHgOg");
	this.shape.setTransform(215.8,14.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5BxQAdACAMgBQAGAAAAgFIAAhCIhMAGQgRACgHAEQgCgLgHgQQARgCAZgOQAegMAegRQhDAEgKAEQgEgQgFgLQAJgCAQgIQAcgNAigbQgtAJg5AKQgBgIgGgQQCCgXA+gbIAUAXQgjAPg0ANIARAMQgaAVggARIBAgDIAigYIAWASQg2Aog+AcIBugHQgNgPgMgLIAYgLQAoAkAVAeIgYAPIgQgVIhLAFIAABGQAAAVgPAGQgMAFglAAQgDgRgIgMgAiEBvQAmgVAagiIAcAJQgcAmgoAbQgJgJgPgKgAAoBDIAYgPQAuAhAXAZIgYASQgYgcgtghg");
	this.shape_1.setTransform(175.3,14.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiBCFIAAgaIBxAAIAAgtIhTgBIABgZIBTABIAAgpIhGAAIABgaQgXAQgSAKQgHgOgLgKQAcgMAegVQAdgVAXgYIgyAAIABgaIBhAAQAUAfAkAbQAjAcAmAPQgLALgJAPQgUgJgTgOIgBAYIhGAAIAAApIBUAAIAAAZIhUAAIAAAtIB1AAIAAAagAhUgeICnAAQgwgfgjgsQghAngzAkg");
	this.shape_2.setTransform(134.775,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiDByQBOgJAogZQgigOgxgQQANgRAOgYIhAgBIAAgaIBPAAQAOgZAKgZIAfAFQgHAXgMAWIBBABIAEgdIAjACIgFAbIA1AAIAAAaIg8AAQgMAmgVAZQA4AYAiAVIgWAZQgkgYg3gXQgqAihZAOQgFgNgNgQgAgyAlIA8AXQAUgVAJgeIhIAAQgKASgHAKgABggoIAAgnIjAAAIAAAmIgdAAIAAhBIBwAAIgNgdIAegHQAJAQAJAUIBpAAIAABCg");
	this.shape_3.setTransform(94.275,14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhcCOIAAiBQgPAPgPAMQgHgLgNgMQA0gkAhg4IAbAKQgOAYgTAXIgBCggAAPBwIAuAAQAIAAAAgFIAAh2IhhAAIAAgcICrAAIAAAcIgsAAIgBB2QAAANgDAGQgEAHgIADQgMAFgvgBQgDgOgGgOgAiLhLQATgMAUgTQAUgTAMgQIAbALQghAsgwAiQgHgMgKgLgAgOhfIAAgcICVABIAAAbg");
	this.shape_4.setTransform(53.8,14.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABNCOIAAgKIiHgBIAAALIgcAAIAAh/IDBAAIgBB/gAg6BsICHAAIAAgZIiGAAgAg5A+ICGAAIAAgYIiGgBgAiEADQAugRANgfIg4AAIAAgXIAVAAQgRgLgEgCQAXgWALgmIAZAFIgHAUIBPAAIAAAYIgqAAIAAAYIAyAAIAAAXIg2AAIgBADQAiASAUAPIgTARQgYgRgUgOQgTAbgpATQgHgMgLgIgAhqhEIAnAAIAAgYIgVgBQgIAPgKAKgAAVgGIAAhuIBwAAIAABugAAwgfIA4AAIAAg7Ig4AAg");
	this.shape_5.setTransform(13.275,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230.1,28.9);


(lib.sb_sc3ttporp = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgfCDIABjQIhWAAIAAg1IDpABIAAA1IhWgBIAADQg");
	this.shape.setTransform(183.975,13.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhhBoQgrgkAAhGQAAg/AtgmQAogfA3AAQA5AAAnAgQAtAlAABAQAABEgsAlQglAgg8AAQg7AAgmgggAg0g7QgXAVAAAlQAAAoAZAXQAUATAeAAQAfAAAVgTQAYgWAAgpQAAgkgWgVQgVgVghAAQgfAAgVAUg");
	this.shape_1.setTransform(155.1753,13.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhcCCIABkEIA+AAIAADQIB6AAIgBA1g");
	this.shape_2.setTransform(129.175,13.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeCDIAAkFIA9ABIAAEEg");
	this.shape_3.setTransform(109.175,13.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah1CDIAAkFIB5ABQByAAAABeQAAAxgmAZQgfAUgtAAIg7AAIAABIgAg3AGIA2AAQAZAAANgHQAQgKAAgZQAAgXgQgKQgNgIgaAAIg1AAg");
	this.shape_4.setTransform(88.15,13.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhUBQQghgcAAg0QAAgzAhgcQAfgcA2AAQA1AAAfAcQAhAdAAAyQAAA0ghAcQgfAcg1AAQg2AAgfgcgAgngpQgPAPAAAaQAAAZAPAQQAQAQAYAAQAYAAAPgQQAPgQAAgZQAAgagQgPQgPgPgYAAIgBAAQgXAAgPAPg");
	this.shape_5.setTransform(58.3004,16.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhEBpIAAjNIAxAAIAHAXQAlgaAsgBIAAA5QgoAAgkAVIAACDg");
	this.shape_6.setTransform(36.425,15.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah1CCIAAkEIB5AAQByAAAABgQAAAwgmAZQgeAUguAAIg7AAIAABHgAg3AGIA2ABQAagBAMgGQAQgKAAgaQAAgXgQgKQgNgHgagBIg0AAg");
	this.shape_7.setTransform(11.825,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,195.7,27.1);


(lib.sb_sc3ttLKA = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgUBJQAXgOALgcQAJgWACgkIgagBIAAgQIAaAAIABgqIARAAIAAAqIAqAAIAAAIQgCA7gCAXQgCAZgFAGQgEAGgKACIgZAAQgBgJgFgHIAXAAQAFABADgEQAFgHADhWIgaAAQgDAogKAZQgLAfgaASQgDgGgJgIgAhTAyIANgCIAAh+IA/AAIgBBxIAJgCIABAPIhTAVgAg2AtIAegHIAAgWIgeAAgAg2AAIAeAAIAAgXIgeAAgAg2glIAeAAIAAgZIgeAAg");
	this.shape.setTransform(177,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA0BHIAMAAQABAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAIAAgXIgUAAIAAAoIgPAAIAAgoIgTAAIAAApIgPAAIAAh2IAiAAIAAgOIglAAIAAgQIAlAAIAAgZIAQAAIAAAZIAaAAQgIgIgMgJIAKgIQAOAJAHAJIgIAHIALAAIAAAQIgoAAIAAAOIAkABIgBBjQAAAMgFADQgGADgPAAQgBgIgDgIgAAuAfIAUAAIAAgRIgTAAgAAMAfIATAAIAAgRIgTAAgAAvAAIATAAIAAgPIgTAAgAAMAAIATAAIAAgPIgTAAgAg2BXIAAgfIggAAIAAgQIAgAAIAAgNIgZAAIAAhCIAaAAIAAgMIgeAAIAAgQIAeAAIAAgTIAPAAIAAAUIAdAAIAAAPIgdAAIAAAMIAbAAIAABCIgbAAIAAANIAfAAIAAAQIgfAAIAAAfgAgoAOIAPAAIAAgOIgPAAgAhDAOIAPAAIAAgOIgPAAgAgogMIAPAAIAAgOIgPAAgAhDgMIAPAAIAAgOIgPAAg");
	this.shape_1.setTransform(154.3,8.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWBHIAWAAQAEAAAAgEIAAgsIhGAAIAAgQIBGABIAAgPIARAAIAAAPIAWAAIAAAPIgWAAIgBAsQAAAOgIADQgGADgXAAQgBgHgEgJgAhRBFIARAAQABAAAAAAQABAAAAgBQABAAAAgBQAAgBAAgBIAAgsIgWAHIgEgSIAagHIAAgkIgXAAIAAgRIAXABIAAglIAQAAIAAAlIASAAIAAAQIgSAAIAAAhIARgFIACAPIgTAGIAAAxQAAANgGAEQgHADgSAAQgBgIgEgIgAgKAjIANgIQAQAVAFALIgPAJQgFgMgOgVgAgPgLIAAgQIAmAAIAAgTIgvAAIAAgQIAvAAIAAgXIARAAIAAAXIAwAAIAAAQIgwAAIAAATIAnAAIAAAQg");
	this.shape_2.setTransform(131.275,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDBXIAAhmIgKAMQgCgEgGgMQAVgaALgpIARAGQgGAQgFAMIAbAAQgFgMgIgPIAPgGQAKAQADAKIgOAHIAnAAIAAAQIgfAAIAAAUIAcAAIAAAQIgcAAIAAAUIAcAAIAAAQIgcAAIAAAVIAhAAIAAARIhKAAIAAANgAAMA5IAZAAIAAgVIgZAAgAAMAUIAZAAIAAgUIgZAAgAAMgQIAZAAIAAgUIgZAAgAhWBOQAGgPACgcIAPACQgEAbgFASQgJgDgFgBgAg5AlIANgDQADAQACAXIgNADQgBgMgEgbgAgkAgIALgDQAIASADASIgLAEQgDgNgIgYgAhUANQAEgBAKgMIAPgSQgTACgGABIgFgOQAEgBAGgJQAQgWAIgZIAPAGQgOAegNASIARgBIAOgaIAOAIQgTAhgXAbIAcgEIgHgRIANgDQALAXACANIgMAFIgCgIQgvAHgFADIgFgPg");
	this.shape_3.setTransform(108.3,8.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhYBLQAbgRAKgqIgTAAQgJABgCACQgCgIgEgHQAFgBAEgEIAWgcIgcAAIAAgOIAnAAIACgBIALAGIgfApIASAAIADgBIAJAEQgFAXgHASQAIANARAEQAOAFAaAAQAjgBAigCQgDAEgDAMQgbACgkAAQgcAAgPgFQgTgEgKgPQgKARgPAKQgFgIgGgEgAgTA1IAAhZIAcAAIAEgMIgvAAIAAgPIAdABQgEgJgHgJIAOgFQAIAKADAKIgHADIAgAAQAIgLAFgNIARAFIgNATIAhAAIAAAPIg0gBIgGAMIArABIAABYgAgDAoIA3AAIAAgNIg3gBgAgDAPIA3AAIAAgOIg3AAgAgDgJIA3AAIAAgNIg3AAgAhOhOIANgIQARASAHALIgNAJQgJgNgPgRg");
	this.shape_4.setTransform(85.375,8.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJBXIAAgbIhLAAIAAgQIBLAAIAAgNIg4AAIABhJIA3AAIAAgMIhFAAIAAgQIBFAAIAAgQIARAAIAAAQIBHAAIAAAQIhHAAIAAAMIA5AAIAABJIg5AAIAAANIBNAAIAAAQIhNAAIAAAbgAAIARIAnAAIAAgQIgnAAgAgvARIAmAAIAAgQIgmAAgAAIgMIAnAAIAAgPIgnAAgAgvgMIAmAAIAAgQIgmAAg");
	this.shape_5.setTransform(62.425,8.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAsBNIgJgcIhIAAIgIAcIgnAAQAbhVAghEIAzAAQAjBLAYBOgAgaASIAzAAQgOgmgLgdQgLAZgPAqg");
	this.shape_6.setTransform(38.075,8.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaBOQgagmgiglQARgdAmgyIAyAAQgrAxgUAbQAVAUAuA6gAhKBNIAAiaIAlAAIAACag");
	this.shape_7.setTransform(21.425,8.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag2BNIABiZIAkAAIAAB6IBIAAIAAAfg");
	this.shape_8.setTransform(5.475,8.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185.5,17.6);


(lib.sb_sc3ttICC = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AglBWIAAhCIgVAAIAAA0IgQAAIAAhDIAlAAIAAgQIgtAAIAAgQIANAAIgOgGQAMgTAGgfIAQAEIgFATIARAAIAAgaIARABIAAAZIAjAAIAAAQIgjAAIgBARIArAAIAAAQIgrAAIAAAQIAlAAIAAAyQAAALgGADQgFADgQAAQgBgIgEgHIAPAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgiIgVAAIAABBgAhEgbIAfAAIAAgRIgWAAQgFAMgEAFgAAnBEIAYAAQAEAAAAgDIAAiVIARAAIAACUQAAAPgJAEQgHADgYAAQgBgJgEgJgAAiAiIAAhnIAQAAIAABng");
	this.shape.setTransform(270.325,9.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhTBHQANABAEgBQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBIAAgpIgUAHIgDgRIAXgHIAAgqIgVAAIAAgQIAWAAIAAglIAQAAIAAAlIARAAIAAAQIgRAAIAAAmIASgGIADAQIgWAHIAAAtQAAANgGADQgHADgSABQAAgIgFgJgAgfBSIABgQIAxAAIAAgkIgmAAIAAgPIBhAAIAAAQIgpgBIAAAkIAyAAIAAAQgAgZgIQATgEAHgKQAGgIABgTIgSAAIAAATIgQAAIAAgiIAuAAIgIgRIAQgGQAIAPADAIIAvAAIAAAgIgQAAIAAgRIgSAAIAAAdQAAAHAEgBIASAAQAIAAADgBIABAPQgCAAgKAAIgSAAQgMAAgEgEQgDgEAAgMIAAgdIgNAAQgCAYgHALQgJANgWAGQgCgFgHgIg");
	this.shape_1.setTransform(246.575,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhYBLQAagRAIgqIgQAAQgJAAgCADIgGgPQAEgBAFgEQAEgEAQgYIgbAAIAAgNIAmAAIADgCIAKAFQgPAYgOASIAQAAIADgBIAIADQgEAWgGASQAHAOASAGQAOADAbAAQAkABAhgDQgDAEgDAMQgYACgnAAQgdAAgPgFQgTgFgKgPQgJATgOAJQgFgHgHgFgAAQA8IAAgoQgRAYgYAMQgEgHgHgHQAbgLASgYIghAAIAAgvIAoAAIAAgNIgvAAIAAgPIAvAAIAAgRIARAAIAAARIAyAAIAAAPIgyAAIAAANIArAAIAAAvIglAAQAdASAQAPIgLANQgMgNgcgSIAAAmgAAhgFIAaAAIAAgVIgaAAgAgIgFIAYAAIAAgVIgYAAgAhPhOIAOgIQAOAQAJANIgOAJQgHgMgQgSg");
	this.shape_2.setTransform(222.65,9.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhWBMQAdgVAFg2IASACIgFAXQAKAYAVAKIAAhHIgrAAIAAgRIBpAAIAAARIgsAAIAAAaIA2AAIAAARIg2AAIAAAhQAKACARAAIAyAAQgFAHgBALIgtAAQggAAgQgIQgVgIgMgVQgKAZgRAPQgGgHgIgFgAA9gWIABgaIh6gBIAAAbIgRAAIAAgrIBHAAIgIgRIARgFQAHALADALIBDAAIgBArg");
	this.shape_3.setTransform(198.6,8.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AArA5QgNAQgRAMQgEgFgIgGQAVgOAQgWQgGgbgCg2Ig+AAIABgQIA8AAIAAgbIARAAIAAAbIAZAAQgIgKgLgIIAKgJQAQAMAGAHIgJAIIAKAAIAAAQIgnAAQACAiADAYQAIgPAHgbIAPADQgJAjgRAdQAGAeAJAAQAFAAAAgZQAEAEAJAFQgCATgFAHQgEAHgKAAQgPAAgJgegAgmAyIBBgQIACAPIg+ARgAhXAtIAUgJIAAg8IgTAAIABgRIASAAIAAgrIARAAIAAArIAQAAIAAARIgQAAIgBA0IAQgIIAFAQIgzAbgAgaAbIAAg3IAvAAIgBA3gAgMANIATAAIAAgbIgTAAg");
	this.shape_4.setTransform(174.675,8.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhYBLQAagSAHgpIgPAAQgJAAgDADQgBgGgEgJQAGgDADgCIAUgcIgbAAIABgOIAkAAIADgBIAMAFQgSAZgNARIAQAAIADgBIAIADQgEAYgGAQQAIAOASAGQAOADAbAAQAnAAAegCQgDAEgDAMQgcABgjABQgdgBgPgEQgTgGgLgOQgIARgOALQgFgHgHgFgAAPA8IAAgoQgQAXgYANIgMgOQAcgLARgYIggAAIAAgvIAoAAIAAgNIgvAAIAAgPIAvAAIAAgSIARAAIAAASIAyAAIAAAPIgyAAIAAANIArABIAAAuIglAAQAeATAPAOIgMANQgLgMgdgTIAAAmgAAhgFIAaAAIAAgVIgaAAgAgJgFIAYAAIABgVIgYAAgAhOhOIAMgIQAOAOAKAOIgPAKQgHgNgOgRg");
	this.shape_5.setTransform(150.7,8.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhPBRIAAgQIBGABIAAgcIgzAAIAAgQIAzAAIAAgYIgqAAIAAgPQgLAHgOAIQgFgIgGgHQAkgPAfggIgfAAIAAgRIA8AAQAMATAXARQAVARAXAJQgIAIgEAIQgLgFgNgIIAAAOIgrAAIAAAYIAzABIAAAPIgzAAIAAAcIBHAAIAAAQgAgzgRIBlAAQgdgUgVgbQgUAZgfAWg");
	this.shape_6.setTransform(126.7,8.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhUBSIAAgQIBMAAIAAgUIg4AAIAAgQIA4AAIAAgPIgOAAIAAglIgVAAQgFAcgYAOQgFgIgHgEQAUgLAEgTIgVAAIAAgQIAXAAIAAgXIgQAAIAAgQIBTABIAAAPIgOAAIAAAXIASAAIAAAQIgSAAIAAAiIAPAAIAAASIA3AAIAAAQIg3AAIAAAUIBLAAIAAARgAgqgmIAUAAIAAgXIgUAAgAAhACIAVAAQABAAABAAQABAAAAAAQABgBAAAAQAAgBAAAAIAAhSIARAAIAABSQAAAMgIADQgGADgXAAQgCgLgDgFgAAXgKIABg/IAQAAIAAA/g");
	this.shape_7.setTransform(102.675,8.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLBWQgQAAgFgEQgGgFAAgMIABgXIARAAIAAAXQAAABAAABQAAAAAAABQAAAAABABQAAAAABAAQACABAHABIAeAAQAGAAABgDQACgCAAgLQAIAFAIAAQgCAQgEAFQgFAFgMAAgAhWBKQAQgKAIgVIAQAFQgKAZgQALgAApAxIAOgIQAWAQAKASIgPAJQgKgTgVgQgAgSAoIAFgEIg2AAIAAgMIBzAAIAAgKIiBAAIAAgLICBAAIAAgIIhyAAIAAgLICDAAIAAAUIASAAIAAALIgSgBIAAAWIg/AAQANAHAFAGIgMALQgIgLgSgJgAAegTIAAgIIgeAAIAAgMIAeAAIAAgIIgZAAIAAgLIAZAAIAAgHIgdAAIAAgLIAdAAIAAgJIARAAIAAAJIAgAAIAAALIggAAIAAAHIAcAAIAAALIgcAAIAAAIIAiAAIAAAMIgiAAIAAAIgAgygTIABgIIgfAAIAAgMIAfAAIAAgIIgZAAIAAgLIAZAAIAAgHIgdAAIAAgLIAdAAIAAgJIAQAAIAAAJIAcAAIAAALIgcAAIAAAHIAZAAIAAALIgZAAIAAAIIAeAAIAAAMIgeAAIAAAIg");
	this.shape_8.setTransform(78.675,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAvBXIABgGIhTgBIAAAHIgRAAIAAhOIB2AAIgBBOgAgjBCIBTAAIAAgPIhTAAgAgjAmIBTAAIAAgPIhTAAgAhQACQAcgKAIgTIgiAAIAAgOIAMAAIgNgIQAOgOAGgXIARADIgFAMIAwAAIAAAOIgZAAIAAAQIAeAAIAAAOIghAAIgBACQARAIAQALIgLALIgbgTQgLAQgZAMQgEgHgHgFgAhBgpIAYAAIABgQIgOAAQgEAHgHAJgAANgDIAAhEIBFAAIAABEgAAegTIAiAAIAAgkIgiAAg");
	this.shape_9.setTransform(54.15,8.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgpA9QgbgVAAgoQAAgmAdgWQAYgTAlAAQAZAAAWAGIAAAiQgWgIgWAAQgaAAgOAMQgOAMAAAXQAAAXAQANQANAMAZAAQAVAAAXgIIAAAjQgZAFgXAAQgnAAgXgTg");
	this.shape_10.setTransform(30.7,8.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpA9QgbgVAAgoQABgmAcgWQAYgTAlAAQAYAAAWAHIAAAgQgWgHgVAAQg1AAgBAvQAAAXAQANQANAMAYAAQARAAAcgIIgBAjQgaAFgVAAQgnAAgXgTg");
	this.shape_11.setTransform(14.375,8.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSBNIABiZIAkAAIgBCZg");
	this.shape_12.setTransform(1.875,8.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,278.8,17.8);


(lib.sb_sc3tthear = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AigCCQAwgDAVgGQAUgGAHgOIgjAAIAAhzIDGAAIAABzIgsAAIAAAQQAAAGADACQACABALAAIAqAAQAIAAADgFQADgEABgSQAMAIAVAEQgDAbgJAKQgJAJgXAAIgzAAQgfAAgKgJQgKgHAAgYIAAgQIglAAQgIAbgZANQgbAOg9AHQgGgSgLgOgAg9BRIB3AAIAAgMIh3AAgAg9AwIB3AAIAAgKIh3AAgAg9ASIB3AAIAAgMIh3AAgABxABIAAgZIjiAAIAAAZIgkAAIAAgzIAmAAIgGhSIAAgBQAegJAhgSIAVARQgQAJgfALIAAAIIAkAAIAAAVIgiAAIABALIAiAAIAAAWIghAAIABALIAwAAIgNgMQARgJAJgHIgRgKIAPgOQAIAEAKAHQAJgGAFgJIABABIgPgNQgMAKgNAGQgKgLgHgEQANgGALgIIgPgJIAPgNIARAKIANgPIAWAHQgIAKgJAJIAOALIgPAQIAUAGQgHAKgKAKIARAOIgQAPIA6AAIAAgLIgiAAIAAgWIAkAAIABgLIgkAAIAAgVIAlAAIAAgKIgqAAIAAgZIBPAAQgCBEgDAgIAjAAIAAAzgAgQgyIAkAAIgQgPIgUAPg");
	this.shape.setTransform(156.225,16.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhICgIAAiPIhbAAIAAgfIAVAAIAAhlIgRAAIAAghICLAAIAAAhIgOAAIAADvQAPgXAIggIAZALIAAgLIAeAAIgKgKIAVgLIhOAAIAAgjIC2AAIAAAjIhgAAQAYAXAMAXIgcAQQgHgPgQgUIAAApQAAAGABACQACABAHAAIAaAAQAGAAACgFQACgEABgTQAIAHASAFQgHgQgOgSIAbgMQANAOAKATQAKASAEAPIgeANQgDgNgHgOQgDAYgIAIQgHAJgSAAIgjAAQgYAAgIgJQgHgIAAgXIAAgeQgNAqgLASIgYgQIAAAegAhpgOIAhAAIAAgRIghAAgAhpg4IAhAAIAAgRIghAAgAhphiIAhAAIAAgRIghAAgAihBzIAdgCIAAgSIgTAAIAAgZIATAAIAAgQIgUAAQgBgLgGgMQAtgDAagFIANAYIgbAEIAAATIASAAIAAAZIgSAAIAAAPIAYgCIAAAbIhQAJgAgOAAIAAhXIA5AAIACgQIg/AAIAAghIBEAAIACgXIAkACIgDAVIBFAAIAAAhIhJAAIgDAQIBHAAIAABXgABigdIAUAAIAAgdIgUAAgAA4gdIATAAIAAgdIgTAAgAAPgdIATAAIAAgdIgTAAg");
	this.shape_1.setTransform(109.775,16.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AArCCQgmAUg4ALQgGgSgNgQQAtgGAigPQgRgRgNgWIAagIIgnAAIAAgOIgdAAIAAhBIDbAAIAABAIgfAAQgQAlgfAZQAkAPAxAEQgLALgNAZQg6gJgmgWgAArBXQARgMAMgQIg5AAQAKAQASAMgAB1AhIAAgWIiOAAIAAARIB3AAIAHgCgAiaCFQAegyAag9IAgAZQgXA5gcA1gAiigkIAWgfQAoAPAUARIgYAiQgTgSgngRgAgngfIAAgdIB/AAIAAgPIiVAAIAAgdICVAAIAAgOIh9AAIAAgdICkAAIAAArIAfAAIAAAdIgfAAIAAAsgAiQiBIAXgfQApASATAQIgYAiQgVgUgmgRg");
	this.shape_2.setTransform(62.975,16.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag5CPQgJgKgGgEQAlgcAOgtQAKgeAAgrIAAgvIAnAAIAAAwQAAB3hHA3QgFgGgJgJgABlCcQgWAAgIgLQgIgLAAggIAAimIApAAIAACmQAAALABADQABACADAAIAKAAQAEAAACgLQABgLABgjQANALAXAGQgCAtgJAQQgIARgUAAgAiYCAQAggsAihCIAfAbQgdA7ghA0gAiiglIAWgeQAqASATARIgYAgQgSgSgpgTgABwhAIAAgmIiAAAIAAAmIgnAAIAAhNIDQAAIAABNgAiNiCIAZgcQAnAUASASIgaAfQgRgTgngWg");
	this.shape_3.setTransform(16.325,16.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172.4,32.3);


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

	// sc3_car
	this.instance = new lib.sc3car();
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,44.9);


(lib.an_lineblue = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(47,112,182,0)").s().p("Ag4L7IAA32IBxAAIAAX2g");
	this.shape.setTransform(5.7,76.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(47,112,182,0.188)").s().p("Ag4L7IAA32IBxAAIAAX2g");
	this.shape_1.setTransform(5.7,87.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(47,112,182,0.349)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_2.setTransform(5.7,97.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(47,112,182,0.486)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_3.setTransform(5.7,105.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(47,112,182,0.604)").s().p("Ag4L8IAA32IBxAAIAAX2g");
	this.shape_4.setTransform(5.7,112.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(47,112,182,0.702)").s().p("Ag4L8IAA32IBxAAIAAX2g");
	this.shape_5.setTransform(5.7,118.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(47,112,182,0.784)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_6.setTransform(5.7,123.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(47,112,182,0.847)").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_7.setTransform(5.7,127.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(47,112,182,0.898)").s().p("Ag4L8IAA32IBxAAIAAX2g");
	this.shape_8.setTransform(5.7,130.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(47,112,182,0.937)").s().p("Ag4L8IAA32IBxAAIAAX2g");
	this.shape_9.setTransform(5.7,132.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(47,112,182,0.965)").s().p("Ag4L8IAA33IBxAAIAAX3g");
	this.shape_10.setTransform(5.7,134.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(47,112,182,0.98)").s().p("Ag4L8IAA32IBxAAIAAX2g");
	this.shape_11.setTransform(5.7,135.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(47,112,182,0.992)").s().p("Ag4L8IAA33IBxAAIAAX3g");
	this.shape_12.setTransform(5.7,135.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(47,112,182,0.996)").s().p("Ag4L8IAA33IBxAAIAAX3g");
	this.shape_13.setTransform(5.7,136.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2F70B6").s().p("Ag4L7IAA31IBxAAIAAX1g");
	this.shape_14.setTransform(5.7,136.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2F70B6").s().p("Ag4L7IAA32IBxAAIAAX2g");
	this.shape_15.setTransform(5.7,136.35);
	this.shape_15._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(15).to({_off:false},0).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.4,212.7);


(lib.sb_wheel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_18
	this.instance = new lib.wheel();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.sb_sc2ttvc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhMBIQgdgaAAguQAAgtAegaQAdgZAuAAQAwABAdAZQAeAZgBAtQAAAugeAaQgcAZgwAAQgvAAgdgZgAgjglQgNAOAAAXQgBAXAOAOQAOAPAWAAQAWAAANgPQANgPAAgWQAAgXgOgOQgNgNgWAAQgWAAgNANg");
	this.shape.setTransform(167.4504,15.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6BtIgEANIgoAAIAAj4IA3AAIAABJQAZgMAZAAQArAAAbAXQAeAZAAAuQAAAtgeAcQgcAZgoAAQgiAAgdgSgAgvgJIAABPQASAMAZAAQAVAAAOgNQAPgOAAgaQABgZgOgMQgOgNgVAAQgaAAgTAMg");
	this.shape_1.setTransform(142.225,12.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag9BeIABi3IAsAAIAFAUQAigYAngBIAAA1QgmgBgeATIAAB1g");
	this.shape_2.setTransform(120.95,15.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhfAUIABhyIA3AAIgBBrQAAAlAgAAQAXAAAagSIAAh+IA3AAIgBC5IgsgBIgGgTQgkAYgjAAQhFAAAAhLg");
	this.shape_3.setTransform(98.75,15.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbB1IAAi6IhNAAIAAgwIDRABIAAAvIhNAAIgBC7g");
	this.shape_4.setTransform(76.175,13.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhGAaIAAgzICMAAIAAAzg");
	this.shape_5.setTransform(58.35,14.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag/BdQgoggAAg9QAAg7AqggQAmgeA5AAQAmAAAgALIAAAxQgfgLgjABQgnAAgWASQgVATgBAiQAAAkAYATQAWASAjgBQAbAAApgLIAAA1QgmAHghAAQg9AAgjgcg");
	this.shape_6.setTransform(38.1997,13.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqB1Qgzhvghh7IA9AAQAkB+AdBAQAghJAhh0IA+AAQgpCHgvBig");
	this.shape_7.setTransform(12.7,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178.1,25.4);


(lib.sb_sc2ttchange = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgsBbIAfAAQAEAAAAgEIAAgLIhcAAIAAgQIBcAAIAAgMIhNAAIAAgQIBNAAIAAgLIhDABQgBgHgEgHQBhAAAvgIIAOANQgYAEgpADIAAAMIBQABIAAAPIhQAAIAAAMIBeAAIAAAQIheAAIAAALQAAAPgLAEQgEACgKAAIgYABQAAgHgHgLgAA0gTQgSALgbAIQgEgJgGgHQAXgFATgLQgLgMgEgJIgNANIgNgMQgDApgFAGQgEAFgJAAQgHABgQgBQAAgEgDgIIgXAAIAAAHIgPAAIAAgiIgKALQgGgIgGgEQAQgOAJgWIARADIgEAIIBFAAIAAALQAVgTALgjIATAFIgGARIA/ABIAAAQIgNAAQgJAXgQAPQAVAMAVADQgGAHgHAKQgagGgTgOgAhSguIAwAAIAAAiIADAAQAEAAABgDQAEgDACgjIg5AAgAhIgXIAXAAIAAgMIgXAAgAA1grQANgMAFgOIglAAQAGANANANgAgmhIIAAgjIASAAIAAALIAdAAIAAAOIgdAAIAAAKgAhGhLIAAgHIgfAAIAAgOIAfAAIAAgLIARAAIAAAgg");
	this.shape.setTransform(270.35,11.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABFBqIAAjUIAWAAIAADVgAg3BoQgBgMgHgLQAVADAQAAQAHAAADgDQAIgHAEgxIhWAAQAIgjAEglIBKAAIABghIhSAAIAAgUIBmAAIAABKIhLAAIgGAfIBTAAIgBAKQgDAngDARQgEATgGAGQgGAHgOABIgPABIgWgBg");
	this.shape_1.setTransform(243.875,11.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhsBcQARgjAAhLIAAhTIDEABIAAAQIiwAAIAABCQAABQgTAoQgKgJgIgBgAhKBjIAAgPIBQAAIAAgQIhAAAIAAgRIBAAAIAAgLIAVAAIAAALIBBAAIAAARIhBAAIAAAQIBPAAIAAAQgAhIAfQAJgKgBgVIAAgbIBPAAIAAA0QAdgUAFghIgeAAIAAgSIAeAAIAAggIARAAIAAAgIAlAAIAAASIghAAQALAoAbAMQgHAIgFAIQgXgOgNggQgIAbgcASQgDgEgGgGQgCAGgGABQgGADgVAAIgEgMIATAAQABAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgKIgrAMIgDgIQgCAPgHAHIgPgJgAgvANIAjgIQgKgEgWgEIAFgJQAVAEAMAFIgEAIIAIgCIAAgRIgtAAgAg7giIAAgqIBGAAIAAArgAgsgrIAoAAIAAgHIgoAAgAgsg8IAoAAIAAgHIgoAAgABGhGIANgHQAOALAFALIgNAIQgGgLgNgMg");
	this.shape_2.setTransform(218.25,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABHBtIAAgLIhAgBIAAAMIgTAAIAAhbIBoAAIAABbgAAHBRIBAAAIAAgPIhAAAgAAHAyIBAABIAAgRIhAAAgAhmA5IAbgJIAAhOIgXAAIAAgUIAXAAIAAg2IAUAAIAAA2IAXAAIAAAUIgXAAIAABHIAWgIIAEATIhCAbgAgXAFIAAhOIAdAAQgEgLgKgPIASgIQAKAOAHANIgQAHIAoAAQAMgTAGgQIAXAIIgTAbIAeAAIgBBOgAAwgJIAkAAIAAgxIgkAAgAgFgJIAkAAIAAgxIgkAAgAAygTQALgSAGgPIAOAFIgUAhgAgBgwIAMgEQAMATADANIgNAFQgDgOgLgTg");
	this.shape_3.setTransform(191.9,11.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOBuIAAh1IBvABIAABeQAAANgGAEQgFAEgOAAQgCgKgEgJIALABQAAAAABgBQAAAAABAAQAAgBAAAAQAAAAAAgBIAAgfIgPAAIAAAwIgQAAIAAgwIgPAAIAAAwIgPAAIAAgwIgPAAIAAA1gABAAnIAPAAIAAgcIgPgBgAAhAnIAPAAIAAgdIgPAAgAADAnIAPAAIAAgdIgPAAgAhJBuIAAgnIgkAAIAAgSIAkAAIAAgRIgdAAIAAhUIAdAAIAAgQIgiAAIAAgTIAiAAIAAgXIAUAAIAAAXIAhAAIAAATIghAAIAAAQIAdAAIAAAJQASgMARgSQARgTALgVIAPAIIgEAIQAZAeAjAZQgKAIgEAJQgIgGgJgJIAAAMIhMgBIAAgIIgQANQgDgGgIgIIAABGIgdAAIAAARIAhAAIgBATIgggBIAAAngAg3AVIAOAAIAAgTIgOAAgAhWAVIAPAAIAAgTIgPAAgAg3gNIAOAAIAAgSIgOAAgAhWgNIAPAAIAAgTIgPAAgAAMgqIA7AAQgTgUgMgPQgMASgQARg");
	this.shape_4.setTransform(166.675,11.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAyBYIAdABQAFgBAAgEIAAhUIhkAAIAABsIgVAAIAAh+IAVAAIAAhSIBmAAIAABSIATAAIAABmQgBAQgJAFQgFACgKAAIgXABQgCgJgFgLgAAogSIAaAAIAAgbIgaAAgAADgSIATAAIAAgsIAsAAIAAgTIg/AAgAhiBbQAUgfAUgtIARAOQgQAmgVAmgAABBSIAAhEIBCAAIAAA5IgxAAIAAALgAASA3IAfAAIAAgZIgfAAgAhogcIAMgQQAaAKAQAMIgNATQgNgMgcgNgAhchbIANgQQAbALAOANIgNASQgOgOgbgMg");
	this.shape_5.setTransform(140.05,11.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiBqQgSAAgHgHQgGgIgBgWIAAiuIAYAAIgBBHIA9AAIAAAWIg9AAIAABRQAAAKACADQACADAIAAIAfAAQAIAAADgIQABgIACgZQAIAGAMADQgCAfgGAKQgHAMgQAAgAhmBWQALgHAAgMIAAisIAWAAIAABHIA5AAIAAAVIg5AAIAABXIA7gOQAAALACAJQhMAUgHAFQgEgLgHgIg");
	this.shape_6.setTransform(115.15,10.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJBtIAAhSIgKAOQgGgKgFgEIABgCIgKAEIgBgGQgxAIgKAEQgDgNgCgFQAFgBALgPQAGgGALgSQgYADgFADIgGgSQAFgCAHgLQASgZALghIARAHQgPAjgSAZIAVgBQAKgRAHgQIAQALQgWAqgbAgIAfgEIgIgWIAOgEQAKATAEASQAVgeAHgpIATAEIgCAGIBYAAIAAASIghgBIgHAVIAkAAIAABwIgTAAIAAgJIgqAAIAAAKIgTAAIAAhxIAZAAIADgVIggAAIAAgRQgEAPgIATIAAB1gAArBRIAqAAIAAgaIgqAAgAArAlIAqAAIAAgYIgqAAgAhrBiQAGgRAEglIAQADQgEAigHAXgAhJAuIAQgDQAFAhABAQIgQAFQAAgVgGgegAgwApIAOgEQAJAXAEAWIgOAFQgDgTgKgbgAgWgsIAAgpIA4AAQgDgHgGgJIASgHQAHAKAGANIA0AAIgBAlIgUAAIAAgTIhaAAIAAAXg");
	this.shape_7.setTransform(88.2,11);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhsBcQARgjAAhLIABhTIDDABIAAAQIiwAAIgBBCQABBRgTAnQgIgIgKgCgAhKBkIAAgQIBRAAIAAgRIhCAAIAAgQIBCAAIAAgLIAUAAIAAALIBBAAIAAAQIhBAAIAAARIBQAAIAAAQgAhIAfQAJgKAAgVIAAgaIBOAAIAAAzQAdgUAEghIgeAAIABgSIAeAAIAAggIAQAAIAAAgIAmAAIAAASIghAAQALAoAbAMQgGAGgGAJQgYgNgLggQgJAbgcASIgKgKQAAAGgHACQgGACgUAAIgGgMIAUAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBIAAgKIgqAMIgDgIQgDAOgGAIgAgvANIAkgIIghgJIAFgIQAUAEANAEIgEAIIAIgBIAAgRIgsAAgAg8giIAAgrIBHAAIgBAsgAgsgrIAnAAIAAgHIgngBgAgsg8IAnAAIAAgHIgnAAgABHhGIAMgHQALAKAIALIgNAJQgJgNgJgKg");
	this.shape_8.setTransform(62.25,11.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhsBcQAvgDAmgJQgSgIgRgOQgRANgSAHQgFgKgHgGQAsgQARgcIAUAGIgHAKICBAAIAAAQIgeAAQgPARgZAMQAlAKArACQgHAJgEAJQgzgEgsgPQgnAOg9AGQgCgIgIgKgAACBIQAZgJAOgNIhTAAQARANAbAJgAhqAXQAEgLACgXIAOACQgCAXgGAQgAAjATQACgIAEgXIAOADQgCAUgFAQgAhPgJIANgDQAFATgBANIgNAEQAAgNgEgUgAA+gKIAOgCQAEATAAANIgNADQAAgRgFgQgABVgMIAMgDQAGAQADARIgNADQgCgMgGgVgAgeAUIAAgqIA8AAIAAAqgAgRAIIAgAAIABgRIghAAgAg5gKIAMgEIAIAdIgNAEQgBgNgGgQgABcgZQguAGgFADIgFgPQAFgBAJgIIANgPQgVACgCABQgBgHgFgIQADAAAHgHQAMgOAJgUIAPAGQgIARgOARIAQAAIAMgSIAPAHQgTAZgSAUIAYgDIgFgOIAMgDQAKATACAPIgNAFgAgxgYQgvAHgEACQAAgFgEgKQAGgCAHgIIAPgPQgVACgDABIgFgPQAFgBAFgGQAMgPAIgTIARAFQgMAVgMAOIARgBQAGgHAGgKIAPAHQgTAagUAUIAYgDIgFgMIAMgEQAKATABAOIgNAEgAgfggIAAgMIA+AAIAAAMgAgfg2IAAgMIA+AAIAAAMgAgkhLIAAgNIAeAAIgHgPIAPgGQAIANACAIIAYAAIAAANg");
	this.shape_9.setTransform(36.45,10.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AADBNIAsABQAGgBABgGIAAiUIieAAIAAgWIDRAAIAAAWIgcAAIAACUQAAAVgOAEQgKAEgpAAQgBgKgIgNgAhRA8IAAhqIBhAAIAABYIhMAAIAAASgAg8AVIA2AAIABguIg3AAg");
	this.shape_10.setTransform(10.5,11.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,281.4,22.2);


(lib.sb_sc2tt369 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ai4DMQBQgLBJgmQBRgrAmg9QgQAPgkANQgnAOgfAAQhYAAgug1QgsgwALhMQALhNA+g2QBCg7BdAAQBZAAAvA3QAwA5gOBgQgTCKhyBdQhqBXibAXgAhMiqQgnAggIA0QgHA3AhAfQAeAcA0AAQA3AAAogfQAoggAHgzQAHgzgbggQgdghg7AAQg3AAgoAgg");
	this.shape.setTransform(135.0232,27.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtAoIALhOIBQAAIgLBOg");
	this.shape_1.setTransform(99.475,50);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AimDaQgwg4AOhhQATiJBzhcQBphWCcgXIgKBHQhRAKhHAlQhRAqgmA9QAQgPAkgMQAmgPAfAAQBZAAAuA1QArAwgLBMQgKBNg+A3QhCA7hdAAQhaAAgvg4gAhOACQgoAggHAzQgHA0AbAfQAdAiA7AAQA3AAAnggQAoggAIg2QAHg2ghgeQgegdg0AAQg3AAgoAfg");
	this.shape_2.setTransform(70.2299,27.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjaDyIAKhKQBoAeAzAAQCYAAAPhoQAJg5g1gUQgkgNhaAAIgkAAIAHgyIC3iaIj+AAIAJhFIFuAAIgHA3IjACdQBNACAuAgQA7AngLBOQgMBWhFAuQhCAshnAAQhCAAhdgcg");
	this.shape_3.setTransform(21.9,27.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABCA1IAAg9QAAgPgFgGQgFgGgOAAQgQAAgSANIABBLIgRAAIAAg9QAAgPgFgGQgFgGgOAAQgRAAgPANIAABLIgTAAIAAhnIANAAIAEAMQATgOATAAQAZAAAIAQQAUgQAVAAQATAAAJAIQAKAKAAAWIAABBg");
	this.shape_4.setTransform(206.55,41.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggAJIAAgRIBBAAIAAARg");
	this.shape_5.setTransform(192.45,40.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgsBBIAAgSQAZALATAAQAjAAAAgaIAAgGQgQAIgQAAQgYAAgOgNQgRgPAAgYQAAgaARgPQAPgPAXAAQAUAAAPALIABgIIAOAAIAABjQAAAvg1AAQgVAAgXgKgAgVgvQgMAKAAATQAAARALAJQALAJAPAAQAQAAAPgJIAAg3QgNgKgRAAQgPAAgLAKg");
	this.shape_6.setTransform(181.5,43.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBGQgagfgagXQAUgZAbgYIAcAAQglAdgPATQALAJAVAVIAXAZgAgxBGIAAiLIASAAIAACLg");
	this.shape_7.setTransform(170.5,39.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhEA/QA0gdAFg8Ig0AAIAAgMIA1AAIAAgiIALAAIAAAiIBEAAIAAAHQgDAvgDAWQgDAVgFAGQgGAFgIABQgMABgOgCQgBgGgEgFIAaABQAFAAADgCQAIgIAEhMIg4AAQgDBBg4AiQgEgGgFgEg");
	this.shape_8.setTransform(188.325,19.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhFA+IARAAQAAAAABAAQABgBAAAAQAAAAABgBQAAAAAAgBIAAgrIgWAGIgEgLIAagHIAAghIgXAAIAAgLIAXAAIAAggIAMAAIAAAgIAUAAIAAALIgUAAIAAAeIATgEIAAgEIAXAAIADgrIgUAAIAAgLIBJAAIgCA2IARAAIAAAKIgRAAQgBAfgCAVIAUAAIAAAMIhhAAIAAgMIAVAAIAEg0IgUAAIAAADIgVAHIAAAuQAAAJgGADQgGACgQAAQgBgGgDgFgAALA3IAiAAIACg0IgfAAgAARgHIAfAAIABgrIgdAAg");
	this.shape_9.setTransform(171.425,19.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,215,55);


(lib.sb_sc2tt239 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AjXDuQBdgMBVgsQBfgzAshHQgSARgrAQQgtAQgkAAQhnAAg2g9Qgzg5AMhZQANhaBIhAQBOhEBtAAQBoAAA3BAQA4BCgQBxQgWChiGBtQh8Bli2AbgAhZjIQguAmgJA+QgJBAAnAkQAjAhA9gBQBAAAAvgkQAvgmAIg7QAIg8gggkQghgohFAAQhBABguAkg");
	this.shape.setTransform(140.7045,32.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aj/EbIAMhWQB7AjA7AAQCxAAASh6QAKhCg+gXQgqgQhpAAIgrAAIAJg7IDVi0IkpAAIALhRIGtAAIgJBBIjgC3QBZADA3AlQBFAugOBcQgNBkhRA2QhOAzh4AAQhNAAhtghg");
	this.shape_1.setTransform(81.55,32.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aj5E8IALhNQClhsBMg/QCLhxALhLQAHgzgbgcQgfgihLAAQhRAAhpAvIAMhYQBngpBdAAQBoAAA2AzQA1AygMBWQgOBghyBoQhTBNiNBVIE4AAIgLBSg");
	this.shape_2.setTransform(24.9858,31.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8BUIAAilIAQAAIADALQATgNAXAAQAaAAAQAQQASAQAAAdQAAAdgUARQgRAQgZAAQgUAAgSgJIAAA1gAgngzIAAA9QAQALATAAQAUAAAMgNQALgLAAgTQAAgSgLgMQgLgMgTAAQgUAAgRANg");
	this.shape_3.setTransform(193.725,47.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAlBQIAAhIQAAgPgGgGQgHgIgSABQgWgBgUAQIAABVIgVAAIAAigIAVAAIAAA2QAXgOAYAAQAXAAAMAJQALALABAZIAABLg");
	this.shape_4.setTransform(178.4,43.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhOBJQA7gjAGhEIg8AAIAAgNIA9AAIAAgoIANAAIAAAoIBOAAIAAAHQgDA3gEAYQgDAYgGAHQgGAHgKAAQgNABgRgBQAAgHgFgHQANABAQAAQAGAAADgCQAJgJAGhXIhAAAQgCAigNAZQgRAhglAWQgCgFgIgGg");
	this.shape_5.setTransform(198.325,22.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAlBPQgBgIgDgFIAVABQAFAAACgCQAFgGADgmIh/AAIAAhjICCAAIAAAMIg8AAIAAASIA1AAIAAALIg1AAIAAASIA1AAIAAALIg1AAIAAARIBHAAIAAAGQgEA0gHAGQgEAFgIABIgKAAIgNAAgAgtAJIAsAAIAAgRIgsAAgAgtgTIAsAAIAAgSIgsAAgAgtgwIAsAAIAAgSIgsAAgAhSBHQAPgOAGgdIAMAEQgHAigPALgAgjAjIAMgCQAGASABATIgNACQAAgRgGgUgAgCAiIAJgDQAKASACAOIgLADQgDgQgHgQgAAbAfIAKgEQALANAFAMIgKAEQgEgJgMgQg");
	this.shape_6.setTransform(178.725,22.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,206.3,64.3);


(lib.sb_sc2sharp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sc2_sharp
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(13,2,53,0.478)").s().p("EgvmgtaMBewAAAMAAdBQ3MhewAJ/g");
	this.shape.setTransform(301.775,40.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-249.9,609.4,581.5);


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

	// sc2_car
	this.instance = new lib.sc2car();
	this.instance.setTransform(0,0,1.5351,1.5358);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,460.6,236.5);


(lib.an_linetop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// line_top
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AgQGBIAAsBIAhAAIAAMBg");
	this.shape.setTransform(1.7,38.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.055)").s().p("AgQGBIAAsBIAhAAIAAMBg");
	this.shape_1.setTransform(1.7,41.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.11)").s().p("AgQGBIAAsBIAhAAIAAMBg");
	this.shape_2.setTransform(1.7,44.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.169)").s().p("AgQGBIAAsBIAhAAIAAMBg");
	this.shape_3.setTransform(1.7,46.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.224)").s().p("AgQGBIAAsBIAhAAIAAMBg");
	this.shape_4.setTransform(1.7,49.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.278)").s().p("AgQGBIAAsBIAhAAIAAMBg");
	this.shape_5.setTransform(1.7,52.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.333)").s().p("AgQGBIAAsBIAhAAIAAMBg");
	this.shape_6.setTransform(1.7,55.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.388)").s().p("AgQGBIAAsBIAhAAIAAMBg");
	this.shape_7.setTransform(1.7,57.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.443)").s().p("AgQGBIAAsBIAhAAIAAMBg");
	this.shape_8.setTransform(1.7,60.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.502)").s().p("AgQGBIAAsBIAhAAIAAMBg");
	this.shape_9.setTransform(1.7,63.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.557)").s().p("AgQGBIAAsBIAhAAIAAMBg");
	this.shape_10.setTransform(1.7,66.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.612)").s().p("AgQGBIAAsBIAhAAIAAMBg");
	this.shape_11.setTransform(1.7,69.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.667)").s().p("AgQGBIAAsBIAhAAIAAMBg");
	this.shape_12.setTransform(1.7,71.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.722)").s().p("AgQGBIAAsBIAhAAIAAMBg");
	this.shape_13.setTransform(1.7,74.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.776)").s().p("AgQGBIAAsBIAhAAIAAMBg");
	this.shape_14.setTransform(1.7,77.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.831)").s().p("AgQGBIAAsBIAhAAIAAMBg");
	this.shape_15.setTransform(1.7,80.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.89)").s().p("AgQGBIAAsBIAhAAIAAMBg");
	this.shape_16.setTransform(1.7,82.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.945)").s().p("AgQGBIAAsBIAhAAIAAMBg");
	this.shape_17.setTransform(1.7,85.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQGBIAAsBIAhAAIAAMBg");
	this.shape_18.setTransform(1.7,88.5);
	this.shape_18._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(18).to({_off:false},0).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.4,127);


(lib.an_linered = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// line_red
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(234,51,35,0)").s().p("Ag4LWIAA2rIBxAAIAAWrg");
	this.shape.setTransform(5.7,72.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(234,51,35,0.055)").s().p("Ag4LWIAA2rIBxAAIAAWrg");
	this.shape_1.setTransform(5.7,77.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(234,51,35,0.11)").s().p("Ag4LWIAA2rIBxAAIAAWrg");
	this.shape_2.setTransform(5.7,82.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(234,51,35,0.169)").s().p("Ag4LWIAA2rIBxAAIAAWrg");
	this.shape_3.setTransform(5.7,87.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(234,51,35,0.224)").s().p("Ag4LWIAA2rIBxAAIAAWrg");
	this.shape_4.setTransform(5.7,92.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(234,51,35,0.278)").s().p("Ag4LWIAA2rIBxAAIAAWrg");
	this.shape_5.setTransform(5.7,96.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(234,51,35,0.333)").s().p("Ag4LWIAA2rIBxAAIAAWrg");
	this.shape_6.setTransform(5.7,101.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(234,51,35,0.388)").s().p("Ag4LWIAA2rIBxAAIAAWrg");
	this.shape_7.setTransform(5.7,106.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(234,51,35,0.443)").s().p("Ag4LWIAA2rIBxAAIAAWrg");
	this.shape_8.setTransform(5.7,111.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(234,51,35,0.502)").s().p("Ag4LWIAA2rIBxAAIAAWrg");
	this.shape_9.setTransform(5.7,116.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(234,51,35,0.557)").s().p("Ag4LWIAA2rIBxAAIAAWrg");
	this.shape_10.setTransform(5.7,121.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(234,51,35,0.612)").s().p("Ag4LWIAA2rIBxAAIAAWrg");
	this.shape_11.setTransform(5.7,126.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(234,51,35,0.667)").s().p("Ag4LWIAA2rIBxAAIAAWrg");
	this.shape_12.setTransform(5.7,130.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(234,51,35,0.722)").s().p("Ag4LWIAA2rIBxAAIAAWrg");
	this.shape_13.setTransform(5.7,135.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(234,51,35,0.776)").s().p("Ag4LWIAA2rIBxAAIAAWrg");
	this.shape_14.setTransform(5.7,140.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(234,51,35,0.831)").s().p("Ag4LWIAA2rIBxAAIAAWrg");
	this.shape_15.setTransform(5.7,145.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(234,51,35,0.89)").s().p("Ag4LWIAA2rIBxAAIAAWrg");
	this.shape_16.setTransform(5.7,150.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(234,51,35,0.945)").s().p("Ag4LWIAA2rIBxAAIAAWrg");
	this.shape_17.setTransform(5.7,155.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EA3323").s().p("Ag4LWIAA2rIBxAAIAAWrg");
	this.shape_18.setTransform(5.7,160.125);
	this.shape_18._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(18).to({_off:false},0).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.4,232.8);


(lib.an_linebottom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// line_bottom
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AgQQuMAAAghbIAhAAMAAAAhbg");
	this.shape.setTransform(1.7,179.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.055)").s().p("AgQQuMAAAghbIAhAAMAAAAhbg");
	this.shape_1.setTransform(1.7,175.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.11)").s().p("AgQQuMAAAghbIAhAAMAAAAhbg");
	this.shape_2.setTransform(1.7,171.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.169)").s().p("AgQQuMAAAghbIAhAAMAAAAhbg");
	this.shape_3.setTransform(1.7,167.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.224)").s().p("AgQQuMAAAghbIAhAAMAAAAhbg");
	this.shape_4.setTransform(1.7,163.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.278)").s().p("AgQQuMAAAghbIAhAAMAAAAhbg");
	this.shape_5.setTransform(1.7,159.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.333)").s().p("AgQQuMAAAghbIAhAAMAAAAhbg");
	this.shape_6.setTransform(1.7,155.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.388)").s().p("AgQQuMAAAghbIAhAAMAAAAhbg");
	this.shape_7.setTransform(1.7,151.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.443)").s().p("AgQQuMAAAghbIAhAAMAAAAhbg");
	this.shape_8.setTransform(1.7,147.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.502)").s().p("AgQQuMAAAghbIAhAAMAAAAhbg");
	this.shape_9.setTransform(1.7,143.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.557)").s().p("AgQQuMAAAghbIAhAAMAAAAhbg");
	this.shape_10.setTransform(1.7,139.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.612)").s().p("AgQQuMAAAghbIAhAAMAAAAhbg");
	this.shape_11.setTransform(1.7,135.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.667)").s().p("AgQQuMAAAghbIAhAAMAAAAhbg");
	this.shape_12.setTransform(1.7,131.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.722)").s().p("AgQQuMAAAghbIAhAAMAAAAhbg");
	this.shape_13.setTransform(1.7,127.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.776)").s().p("AgQQuMAAAghbIAhAAMAAAAhbg");
	this.shape_14.setTransform(1.7,123.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.831)").s().p("AgQQuMAAAghbIAhAAMAAAAhbg");
	this.shape_15.setTransform(1.7,119.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.89)").s().p("AgQQuMAAAghbIAhAAMAAAAhbg");
	this.shape_16.setTransform(1.7,115.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.945)").s().p("AgQQuMAAAghbIAhAAMAAAAhbg");
	this.shape_17.setTransform(1.7,111.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQQuMAAAghbIAhAAMAAAAhbg");
	this.shape_18.setTransform(1.7,107.025);
	this.shape_18._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(18).to({_off:false},0).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.4,286.8);


(lib.sb_star = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2_copy_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,28.1).s().p("AjCATQhRgIAAgLQAAgLBRgHQBRgJBxABQBzgBBQAJQBRAHgBALQABALhRAIQhQAJhzgBQhxABhRgJg");
	this.shape.setTransform(11.35,11.3166,0.8385,1,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2_copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,28.1).s().p("AjCATQhRgIAAgLQAAgLBRgHQBRgJBxABQBzgBBQAJQBRAHgBALQABALhRAIQhQAJhzgBQhxABhRgJg");
	this.shape_1.setTransform(11.35,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,11.5).s().p("AhPBQQghghAAgvQAAguAhghQAhghAuAAQAvAAAhAhQAhAhAAAuQAAAvghAhQghAhgvAAQguAAghghg");
	this.shape_2.setTransform(11.3,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-11.8,55.099999999999994,46.2);


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

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfA/QATgEAHgHQAGgGABgOIgOAAIAAgtIBJAAIAAAtIgSAAIAAAXQAAABAAABQAAAAABABQAAAAAAABQAAAAABAAIADABIALAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAgBIABgNQADADAJAEQAAAKgCAFQgCAEgEABQgEACgGAAIgLAAQgHAAgEgDQgEgEAAgLIAAgWIgNAAQgDASgIAJQgIAKgVAGQgCgHgGgFgAABAXIAuAAIAAgJIguAAgAABAEIAuAAIAAgHIguAAgAhJAnIAUgHIAAg0IgRAAIAAgOIARAAIAAglIAOAAIAAAlIAPAAIAAAOIgPAAIAAAvIAQgGIADAOIgwATgAgTgUIAAgNIAUAAIgDgNIALgDIAGAQIgEAAIAXAAIAGgPIAOACIgHANIAXAAIAAANgAgOgxIAAgNIAgAAIgEgJIAOgDQAEAGABAGIAhAAIAAANg");
	this.shape.setTransform(380.525,7.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhHBGIAAgPIAVAAIAAhaIAPAAIAABaIAjAAIAAh8IAPAAIAAA0IAxAAIAAAPIgxAAIAAA5IA5AAIAAAPg");
	this.shape_1.setTransform(332.4,7.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AApArIAOgGQANAVAEAKIgOAHQgFgMgMgUgAhDBFQAKgOAHgRIAOAEQgHASgKAPgAAIArIAOgCQAIATACAKIgPADQgDgPgGgPgAgXAsIAOgCQADAWAAAHIgOACQAAgKgDgTgAhEAhIAAgNIAXAAIAAgXIgSAAIAAgOIASAAIAAgQIAOAAIAAAQIAOAAIAAgQIANAAIAAAQIAOAAIAAgQIANAAIAAAQIAPAAIAAgQIAOAAIAAAQIARAAIAAAOIgRAAIAAAXIAVAAIAAANgAAXAUIAPAAIAAgXIgPAAgAgEAUIAOAAIAAgXIgOAAgAgfAUIAOAAIAAgXIgOAAgAhIgiQAXgQALgYIANAFIgJAPIBmAAIAAANIhvAAQgKAMgKAHQgEgIgFgEg");
	this.shape_2.setTransform(284.025,7.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggA7IAWAAQADAAAAgEIAAhRIgqAAIAAgOIA6AAIAAAMQAFASAHAMQAVgPANgPIAOAJQgWAUgTANQASAbAdAKQgGAFgFAIQgkgPgTgpIAAAvQAAAMgIAEQgFACgWAAQgBgHgFgHgAhKA0QAbgPAMghIgjAAIAAgNIApAAIADgBIAKAEQgMAwgiAWQgEgGgIgGgAgjg8IAHgNQAlAJAVALIgIAPQgWgNgjgJg");
	this.shape_3.setTransform(235.975,7.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJBGQgOAAgFgFQgFgEAAgOIAAhMIAQAAIAABMQAAAGACACQABABAHAAIAaAAQAHAAACgGQADgGAAgUQAHAFAHACQgBAXgFAIQgFAIgOAAgAhJAqQAKgYADgjIAPACQgEAkgJAbgAAngRIAOgGQAPAhAGAbIgPAGQgFgbgPghgAgag7IAKgKQAfAWAMANIgLALQgQgTgagRg");
	this.shape_4.setTransform(152.05,7.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AATBIQgBgIgEgGIAYABQAEAAADgDQAFgGAEhTIgmAAQgIARgHAKQgCgEgJgEIAABIIgrAAIAAANIgOAAIAAh1IASAAQAFgRABgJIAQADIgIAXIAZAAIAAAeQAPgTAIglIAPADIgHAWIAvAAIAAAHQgCA4gCAUQgCAXgFAGQgFAHgJAAIgJABIgPgBgAg1AtIAeAAIAAgjIgeAAgAg1gCIAeAAIAAgfIgeAAgAAGgDIAMgHQATAZAFAKIgMAIQgHgOgRgWg");
	this.shape_5.setTransform(103.85,7.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAAQgOAzgvAWQgEgHgHgFQAwgVAMg1Ig5AAIAAgPIA8AAIACgtIAPAAQAAAdgCAQIBAAAIAAAPIg6AAQASA2ArATQgGAFgFAIQgqgTgUg2g");
	this.shape_6.setTransform(55.525,7.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA5BAIhKAFIgBgOIAkgCIAAgWIgfAAIAAgqIAfAAIAAgPIAOAAIAAAPIAgAAIAAAqIggAAIAAAVIASgBIgHgNIALgFQAPAUAFAPIgNAGgAAgATIATAAIAAgTIgTAAgAAAATIASAAIAAgTIgSAAgAg7BIQAAgIgEgGIARABQAEAAABgCQAEgDACgjIgmAAIAGgwIAgAAIAAgXIgkAAIAAgNIAyAAIAAAyIgiAAIgDAUIAnAAIAAAGQgEAxgFAGQgFAFgHABIgIAAIgLAAgAA2geQg9AFgEACIgFgNQAEAAAEgGQALgNAHgSIAQAEQgLASgMANIAqgDIgLgNIALgGQATAUAHANIgLAIg");
	this.shape_7.setTransform(7.4,7.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387.9,15);


(lib.sb_sc1altima = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("AeoG0QgYhGgdhHIkUAAQgdBMgXBBIgvAAQA4itBKicQA2hwAcgoIA3AAQAcApA1BvQBJCcA5CtgAZwD8IDyAAQgmhcgjhLQgghFgPgWQgyBPhICzgASOG0QgtlPgghdQhQDAhGC6IgjAAQhIjAhQi5QghB2grE1IguAAQAcjIAZh6QAPhQAWhPIA5AAQAnBWAvB3IA6CTQBLjFBGibIA5AAQAZBYAOBHQAZB9AaDFgADJG0IAAnhIAvAAIAAHhgAmXG0IAAm2IjAAAIAAgrIGuAAIAAArIi/AAIAAG2gAySG0IAAnhIAuAAIAAG2IEjAAIAAArgA4sG0QgWg/gfhOIkUAAIg0CNIgwAAQA5itBKicQA1hwAdgoIA3AAQAcArA0BtQBKCdA5CsgA9kD8IDyAAQgmhcgjhLQgghFgPgWQgzBQhHCygAkCj3QAigPAUgdQgPgcgJgmQgIARgJALIgLgKQAZggANg+IAOACQgGAZgEANIBIAAIAAANIgPAAQgJA4gVAiQAUAeAcAMQgFADgFAJQgbgNgUgdQgUAcgiAQQgEgJgEgEgAjbl5QAHAoAQAgQARgeAHgtIgvAAgADLj0QAagXAKgiQAGgWAAgfIAAgKIAOAAIgBAeQAOBEAjATIgKAMQgcgSgQgxQgKAogdAbQgFgGgGgDgARDjrIAAhsIg1AAIAABSIgOAAIAAhgIBDAAIAAgeIhZAAIAAgOIBeAAIgPgeIAOgEQAMAUAFAMIgEACIBZAAIAAAOIhbAAIAAAeIBHAAIAABNQAAANgJADQgJADgdAAQgCgIgDgHQAZABAHgBQAFAAAAgEIAAg/Ig4AAIAABsgACYjrIAAhIIgtAAIAAgNIBoAAIAAANIgtAAIAABIgApyjsIAAhvIggAAIAAAJQAABFgXAhQgGgGgFgDQAVgdAAhAIAAhKQAwgJAUgIIAMAKQgVAIguAIIAAArIBGAAIAAANIgYAAIAABvgArjjsIAAhMIgtAAIAAgNIAtAAIAAgXIgtAAIAAgNIA8AAQAJgUADgQIAOADIgNAhIAdAAIAAANIgrAAIAAAXIAoAAIAAANIgoAAIAABMgAzJjxIAAgNIBUAAIAAgnIg+AAIAAgMIA+AAIAAgjIg1AAIAAgNIB6AAIAAANIg2AAIAAAjIA+AAIAAAMIg+AAIAAAnIBWAAIAAANgAIsj1IAAgPIBSAAIAAiqIAPAAIAABDIBSAAIAAAPIhSAAIAABYIBhAAIAAAPgAlPkFQAHgCAAgKIAAhTIA7AAIAAgwIg+AAIAAgOIBMAAIAABMIg7AAIAABHIA7gVIACAOQhGAbgGAFQgCgJgEgGgABpj/QALgQAJgcIANADQgJAZgMAVgAsQkEQANgRAHgXIAMAEQgHAWgPAVgAC0knIAKgEQAMATAGAPIgMAFQgFgNgLgWgArKkoIAKgFQANAVAFAOIgKAGQgFgOgNgWgAUelJIAAgKIIhAAIAAAKgA9ulJIAAgKIIhAAIAAAKgADKlYQASgdAIg8IAOABIgHAmIA4AAIACgBIAKADQgJAogHAQIgMgEQAHgRAFgYIg3AAQgIAdgKAQgAB1lSIAAgMIBVAAIAAAGIAAAGgAzRleQAVgKAXgSQAXgRAQgTIgoAAIAAgOIBBAAQAPAXAaAVQAZAUAaALQgHAIgDAFQgYgMgZgUQgYgUgRgWQgRAVgZAVQgZAVgXAMQgEgGgGgFgADKlYIAAAAgAr+mKIALgCQAHANADASIgNADQgBgPgHgRgABylvIAAgNIAmAAIAAgUIgrAAIAAgMIArAAIAAgVIAOAAIAAAVIArAAIAAAMIgrAAIAAAUIAmAAIAAANgAsNmOIAAgNIAsAAIgKgUIAOgDQAHALAFAMIAjAAIAAANg");
	this.shape.setTransform(200.975,43.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,402,87.3);


(lib.logo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AyYUbQo2imnzk8Qnzk8mHm3QmOnAj+ocIgUgpQhLiag9g4QhkhcjEgXInYg3IAAiJIRvAAIAEAMQDAIyFkHaQFdHPHbFSQHaFSIrCzQI3C2JXAAQJWAAI3i2QIqizHblRQHalSFdnNQFlnaDAozIAEgMIRzAAIAACJInYA4QjEAWhkBbQg9A5hLCbIgUAnQj+IdmOG/QmHG2nzE8Qn0E8o1CmQpBCqpYAAQpXAApBiqg");
	this.shape.setTransform(37.4655,51.5888,0.0749,0.0749);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhJjAXFIAAiJIHYg3QDEgXBkhbQA9g5BLibIAUgnQD+odGOm/QGGm4H0k8QHzk8I1inQJBipJYAAQJXAAJCCpQI1CnH0E8QHzE7GHG3QGOG/D+IbIAUAnQBLCbA9A5QBkBbDEAXIHYA3IAACJIxxAAIgEgMQjAoylknaQldnPnblSQnalRorizQo3i3pXAAQpWAAo3C3QoqCznbFRQnaFSldHPQllHajAIyIgGAQg");
	this.shape_1.setTransform(37.4505,11.0609,0.0749,0.0749);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AIqJGIiCjQItOAAIiADQIk6AAILWyLIEVAAILWSLgAEjCaIkhnUIkiHUIJDAAg");
	this.shape_2.setTransform(55.0255,31.3108,0.0749,0.0749);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AGOJGItetoIAANoIkCAAIAAyLIFLAAINaNkIAAtkIEAAAIAASLg");
	this.shape_3.setTransform(69.4596,31.3108,0.0749,0.0749);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AGPJGIthtoIAANoIkBAAIAAyLIFLAAINaNkIAAtkIECAAIAASLg");
	this.shape_4.setTransform(5.4209,31.3108,0.0749,0.0749);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiAJGIAAyLIEBAAIAASLg");
	this.shape_5.setTransform(16.0719,31.3108,0.0749,0.0749);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Aq7I/IAAjuIQAAAQAsAAAIgCQAvgIAagiQAWgdAAgoQAAgqgWgeQgbgkg0gHQgGgCgqAAIqVAAQhIAAgkgEQiJgThPhpQhFhdAAh3QAAiDBRhdQBQheCAgRQAngGA9AAIPlAAIAADqIvVAAQgwAAgYAGQgmALgUAfQgRAaAAAfQAAAiAQAaQAUAgAlAJQARAGA7AAIKnAAQAuAAAlAEQCJANBSBsQBLBhAACAQAACBhLBhQhWBwiUANQgMAChGAAg");
	this.shape_6.setTransform(26.2792,31.3183,0.0749,0.0749);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Aq7I/IAAjuIP+AAQAuAAAIgCQAugIAagiQAXgeAAgnQAAgqgWgeQgbgkg0gHQgGgCgqAAIqVAAQhIAAgkgEQiJgThPhpQhFhdAAh3QAAiDBRhdQBQheCAgRQAngGA9AAIPlAAIAADqIvVAAQgwAAgYAGQgmALgUAfQgRAaAAAfQAAAiAQAaQAUAgAlAJQARAGA7AAIKnAAQAuAAAlAEQCJANBSBsQBLBhAACAQAACBhLBhQhWBwiUANQgMAChGAAg");
	this.shape_7.setTransform(40.8087,31.3183,0.0749,0.0749);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(450));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.9,62.7);


(lib.sb_sc5plus = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgKBLIAAhBIhAAAIAAgUIBAAAIAAhBIAUAAIAABBIBCAAIAAAUIhCAAIAABBg");
	this.shape.setTransform(16.25,15.6);

	this.instance = new lib.mo_sc5circle();
	this.instance.setTransform(15.9,15.8,1,1,0,0,0,18.2,17.9);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.388)",2,2,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,45,45);


(lib.an_sc5ttin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc5_tt_in
	this.instance = new lib.sb_sc5ttin("synched",0);
	this.instance.setTransform(556.85,14.7,1,1,0,0,0,155.3,14.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:155.3,alpha:1},19,cjs.Ease.cubicOut).wait(71));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,712.3,29.3);


(lib.an_sc5tt100w = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc5_tt_100w
	this.instance = new lib.sb_sc5tt100w("synched",0);
	this.instance.setTransform(526.65,17.3,1,1,0,0,0,125.1,17.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:125.1,alpha:1},19,cjs.Ease.cubicOut).wait(62));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.3,724.3,35);


(lib.an_sc5tt4w = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc5_tt_4w
	this.instance = new lib.sb_sc5tt4w("synched",0);
	this.instance.setTransform(529.45,17.4,1,1,0,0,0,127.9,17.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({x:127.9,alpha:1},19,cjs.Ease.cubicOut).wait(66));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,657.4,34.9);


(lib.an_sc5plus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc5_plus
	this.instance = new lib.sb_sc5plus("synched",0);
	this.instance.setTransform(421.05,20,1,1,0,0,0,19.5,20);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:19.5,alpha:1},19,cjs.Ease.cubicOut).wait(62));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,447.6,45);


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


(lib.an_sc4ttzero = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc4_tt_zero
	this.instance = new lib.sb_sc4ttzero("synched",0);
	this.instance.setTransform(194.8,9.7,1,1,0,0,0,82.4,9.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({x:82.4,alpha:1},17,cjs.Ease.cubicOut).wait(66));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,277.2,19.4);


(lib.an_sc4ttseat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc4_tt_seat
	this.instance = new lib.sb_sc4ttseat("synched",0);
	this.instance.setTransform(181.25,19.3,1,1,0,0,0,92.5,19.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:92.5,alpha:1},21,cjs.Ease.cubicOut).wait(65));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,273.9,38.6);


(lib.an_sc4ttbose = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc4_tt_bose
	this.instance = new lib.sb_sc4ttbose("synched",0);
	this.instance.setTransform(146,9.6,1,1,0,0,0,146,9.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({x:229.55,y:10,alpha:1},17,cjs.Ease.cubicOut).wait(66));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,375.5,19.7);


(lib.an_sc4sharp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc4_sharp
	this.instance = new lib.sb_sc4sharp("synched",0,false);
	this.instance.setTransform(640.35,696,1,1,8.4967,0,0,497.6,461.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:497.5,rotation:0,x:497.5,y:461.4},22,cjs.Ease.cubicOut).wait(68));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1200.5,1223.5);


(lib.an_sc3ttTJP = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_tt_TJP
	this.instance = new lib.sb_sc3ttTJP("synched",0);
	this.instance.setTransform(451.5,8.9,1,1,0,0,0,92.7,8.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({x:92.7,alpha:1},15,cjs.Ease.cubicOut).wait(63));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,544.1,17.8);


(lib.an_sc3ttsafe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_tt_safe
	this.instance = new lib.sb_sc3ttsafe("synched",0);
	this.instance.setTransform(473.8,14.4,1,1,0,0,0,115,14.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:115},15,cjs.Ease.cubicOut).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,588.9,28.9);


(lib.an_sc3ttporp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_tt_porp
	this.instance = new lib.sb_sc3ttporp("synched",0);
	this.instance.setTransform(456.7,13.6,1,1,0,0,0,97.9,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:97.9},15,cjs.Ease.cubicOut).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,554.5,27.1);


(lib.an_sc3ttLKA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_tt_LKA
	this.instance = new lib.sb_sc3ttLKA("synched",0);
	this.instance.setTransform(451.5,8.8,1,1,0,0,0,92.7,8.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({x:92.7,alpha:1},15,cjs.Ease.cubicOut).wait(65));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,544.3,17.6);


(lib.an_sc3ttICC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_tt_ICC
	this.instance = new lib.sb_sc3ttICC("synched",0);
	this.instance.setTransform(498.1,8.9,1,1,0,0,0,139.3,8.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({x:139.3,alpha:1},15,cjs.Ease.cubicOut).wait(67));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,637.6,17.8);


(lib.an_sc3tthear = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_tt_hear
	this.instance = new lib.sb_sc3tthear("synched",0);
	this.instance.setTransform(86.2,16.1,1,1,0,0,0,86.2,16.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:192.1,alpha:1},21,cjs.Ease.cubicOut).wait(69));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,278.3,32.3);


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

	// Layer_22 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A2sUoMAAAgpPINXAAIAFAEQASAPAjAKQAyAOAigFQANgBALgEIARgBIDFgUQAvgCBVgBQERgCCTALICwAOIAQAEQAgAHAZgCIARgBQAaACAOgBQAXAAARgIQAWgIAOgUIAFgFILbAAMAAAApPg");
	var mask_graphics_1 = new cjs.Graphics().p("A2sUoMAAAgpPINXAAIAFAEQASAPAjAKQAyAOAigFQANgBALgEIARgBIDFgUQAvgCBVgBQERgCCTALICwAOIAQAEQAgAHAZgCIARgBQAaACAOgBQAXAAARgIQAWgIAOgUIAFgFILbAAMAAAApPg");
	var mask_graphics_2 = new cjs.Graphics().p("A2sUoMAAAgpPINXAAIAFAEQASAPAjAKQAyAOAigFQANgBALgEIARgBIDFgUQAvgCBVgBQERgCCTALICwAOIAQAEQAgAHAZgCIARgBQAaACAOgBQAXAAARgIQAWgIAOgUIAFgFILbAAMAAAApPg");
	var mask_graphics_3 = new cjs.Graphics().p("A2sUoMAAAgpPINXAAIAFAEQASAPAjAKQAyAOAigFQANgBALgEIARgBIDFgUQAvgCBVgBQERgCCTALICwAOIAQAEQAgAHAZgCIARgBQAaACAOgBQAXAAARgIQAWgIAOgUIAFgFILbAAMAAAApPg");
	var mask_graphics_4 = new cjs.Graphics().p("A2sUoMAAAgpPINXAAIAFAEQASAPAjAKQAyAOAigFQANgBALgEIARgBIDFgUQAvgCBVgBQERgCCTALICwAOIAQAEQAgAHAZgCIARgBQAaACAOgBQAXAAARgIQAWgIAOgUIAFgFILbAAMAAAApPg");
	var mask_graphics_5 = new cjs.Graphics().p("A2sUoMAAAgpPINXAAIAFAEQASAPAjAKQAyAOAigFQANgBALgEIARgBIDFgUQAvgCBVgBQERgCCTALICwAOIAQAEQAgAHAZgCIARgBQAaACAOgBQAXAAARgIQAWgIAOgUIAFgFILbAAMAAAApPg");
	var mask_graphics_6 = new cjs.Graphics().p("A2sUoMAAAgpPINXAAIAFAEQASAPAjAKQAyAOAigFQANgBALgEIARgBIDFgUQAvgCBVgBQERgCCTALICwAOIAQAEQAgAHAZgCIARgBQAaACAOgBQAXAAARgIQAWgIAOgUIAFgFILbAAMAAAApPg");
	var mask_graphics_7 = new cjs.Graphics().p("A2sUoMAAAgpPINXAAIAFAEQASAPAjAKQAyAOAigFQANgBALgEIARgBIDFgUQAvgCBVgBQERgCCTALICwAOIAQAEQAgAHAZgCIARgBQAaACAOgBQAXAAARgIQAWgIAOgUIAFgFILbAAMAAAApPg");
	var mask_graphics_8 = new cjs.Graphics().p("A2sUoMAAAgpPINXAAIAFAEQASAPAjAKQAyAOAigFQANgBALgEIARgBIDFgUQAvgCBVgBQERgCCTALICwAOIAQAEQAgAHAZgCIARgBQAaACAOgBQAXAAARgIQAWgIAOgUIAFgFILbAAMAAAApPg");
	var mask_graphics_9 = new cjs.Graphics().p("A2sUoMAAAgpPINXAAIAFAEQASAPAjAKQAyAOAigFQANgBALgEIARgBIDFgUQAvgCBVgBQERgCCTALICwAOIAQAEQAgAHAZgCIARgBQAaACAOgBQAXAAARgIQAWgIAOgUIAFgFILbAAMAAAApPg");
	var mask_graphics_10 = new cjs.Graphics().p("A2sUoMAAAgpPINXAAIAFAEQASAPAjAKQAyAOAigFQANgBALgEIARgBIDFgUQAvgCBVgBQERgCCTALICwAOIAQAEQAgAHAZgCIARgBQAaACAOgBQAXAAARgIQAWgIAOgUIAFgFILbAAMAAAApPg");
	var mask_graphics_11 = new cjs.Graphics().p("A2sUoMAAAgpPINXAAIAFAEQASAPAjAKQAyAOAigFQANgBALgEIARgBIDFgUQAvgCBVgBQERgCCTALICwAOIAQAEQAgAHAZgCIARgBQAaACAOgBQAXAAARgIQAWgIAOgUIAFgFILbAAMAAAApPg");
	var mask_graphics_12 = new cjs.Graphics().p("A2sUoMAAAgpPINXAAIAFAEQASAPAjAKQAyAOAigFQANgBALgEIARgBIDFgUQAvgCBVgBQERgCCTALICwAOIAQAEQAgAHAZgCIARgBQAaACAOgBQAXAAARgIQAWgIAOgUIAFgFILbAAMAAAApPg");
	var mask_graphics_13 = new cjs.Graphics().p("A2sUoMAAAgpPINXAAIAFAEQASAPAjAKQAyAOAigFQANgBALgEIARgBIDFgUQAvgCBVgBQERgCCTALICwAOIAQAEQAgAHAZgCIARgBQAaACAOgBQAXAAARgIQAWgIAOgUIAFgFILbAAMAAAApPg");
	var mask_graphics_14 = new cjs.Graphics().p("A2sUoMAAAgpPINXAAIAFAEQASAPAjAKQAyAOAigFQANgBALgEIARgBIDFgUQAvgCBVgBQERgCCTALICwAOIAQAEQAgAHAZgCIARgBQAaACAOgBQAXAAARgIQAWgIAOgUIAFgFILbAAMAAAApPg");
	var mask_graphics_15 = new cjs.Graphics().p("A2sUoMAAAgpPINXAAIAFAEQASAPAjAKQAyAOAigFQANgBALgEIARgBIDFgUQAvgCBVgBQERgCCTALICwAOIAQAEQAgAHAZgCIARgBQAaACAOgBQAXAAARgIQAWgIAOgUIAFgFILbAAMAAAApPg");
	var mask_graphics_16 = new cjs.Graphics().p("A2sUoMAAAgpPINXAAIAFAEQASAPAjAKQAyAOAigFQANgBALgEIARgBIDFgUQAvgCBVgBQERgCCTALICwAOIAQAEQAgAHAZgCIARgBQAaACAOgBQAXAAARgIQAWgIAOgUIAFgFILbAAMAAAApPg");
	var mask_graphics_17 = new cjs.Graphics().p("A2sUoMAAAgpPINXAAIAFAEQASAPAjAKQAyAOAigFQANgBALgEIARgBIDFgUQAvgCBVgBQERgCCTALICwAOIAQAEQAgAHAZgCIARgBQAaACAOgBQAXAAARgIQAWgIAOgUIAFgFILbAAMAAAApPg");
	var mask_graphics_18 = new cjs.Graphics().p("A2aVCIgSjNMAAAgmDIJMAAID4gXIAFAEQAQALAhAHQAtAJAfgIQAMgCAKgEIAPgDIB1gWIA5gLIAGgBQAWgEAdgBIAugDIAiAAIANAAQBvABBaACQB9ADBUAHIAvAFICBANIARADQAfAHAaAAIARgBIAoADQAXAAARgGQAWgHAPgSIAFgFID5AKQDvALDsAPIAIB6IAvINIAAepImwAog");
	var mask_graphics_19 = new cjs.Graphics().p("A2HVgIgli8MAAAgmUIJQAAQBxgYBxgVIAEADQAOAHAeAEQApAFAcgLIAUgIIAOgEIBpggQAZgJAbgHIAGgCQAUgFAdgDQAUgDAaAAIAhgBIAOABQBvACBbADQB/AEBUAIIAvAEICCAQIAQADQAgAIAaAAIAQAAQAaADAPABQAWAAASgFQAWgFAQgPIAFgEQB9AJB7AMQDsAVDqAeIAOB4IBfHgIAAe4ImMBPg");
	var mask_graphics_20 = new cjs.Graphics().p("A10V+Ig4irMAAAgmlIJUAAQBmgjBlggIAEACQANAEAaAAQAlAAAZgOIASgKIAMgFIBegpQAXgMAYgIIAGgDQASgIAcgEQAVgEAagBIAhAAIAOABQBvADBeAEQB/AGBUAIIAvAGQBCAHBAAKIARADQAfAIAbACIAQAAIApAFQAWABATgDQAWgEAQgNIAFgEQB8AOB7ARQDqAgDmAuIAVB2ICPG1IAAfFIloB2g");
	var mask_graphics_21 = new cjs.Graphics().p("A1hWcIhLiZMAAAgm3IJZAAQBagvBagrIADACQALAAAYgEQAggEAWgRQAJgFAHgHIALgGIBTgzQATgOAWgKIAGgDQARgLAbgFQAUgFAagBQAQgBASABIAOABQBvAEBfAGQCBAGBUAJIAvAGQBCAJBBAKIAQAEQAgAIAbADIAQABIAoAGQAXACATgCQAWgDARgKIAGgDQB7ARB7AYQDnArDiA8IAcB0IC/GJIAAfUIlECdg");
	var mask_graphics_22 = new cjs.Graphics().p("A1PW6IhdiIMAAAgnIIJdAAQBPg7BOg1IADABQAJgEAVgHQAdgJASgUQAIgGAGgIIAJgHIBIg8QAQgSAVgLIAEgEQAQgNAbgGQATgGAbgBIAiAAIAOABQBvAFBhAHQCBAIBVAKIAvAGQBCAJBCAMIAQAEQAfAIAbAEIARABIAoAHQAXADATgBQAWgBASgIIAGgCQB7AWB6AeQDlA1DeBLIAkBzIDuFdIAAfhIkgDFg");
	var mask_graphics_23 = new cjs.Graphics().p("A08XZIhwh4MAAAgnYIJhAAQBEhHBDhAIACAAQAIgIARgJQAZgOAPgYQAHgHAFgIIAIgIIA8hGQAOgVASgNIAEgEQAOgPAagIQAUgHAagBIAjAAIAOABQBvAHBiAHQCEAKBUALIAvAGQBDAKBBANIAQAFQAgAIAbAEIARACIAoAJQAXADATABQAWAAATgGIAGgBQB7AaB5AkQDjBADaBaIArBxIEeExIAAfvIj8Dtg");
	var mask_graphics_24 = new cjs.Graphics().p("A0pX3IiDhnMAAAgnpIJlAAQA5hTA3hLIACAAQAGgLAPgOQAUgSANgaIAJgSIAGgJIAxhPQALgYAQgPIAEgEQANgSAZgJQATgIAbgBQAPgBATABIAPABQBuAIBlAJQCFALBUALIAvAHQBDALBCAOIAQAEQAfAJAcAGIAQACIApAKQAWAEAUACQAXABATgDIAGgBQB6AfB5ApQDhBLDWBqQAaA2AYA4IFOEGIAAf9IjYEUg");
	var mask_graphics_25 = new cjs.Graphics().p("A0XYVIiVhWMAAAgn6IJpAAQAuhfArhWIACgBQAFgOALgRQAQgXAKgdIAHgTIAFgLIAmhZQAIgaANgRIADgFQAMgUAYgKQAUgJAbgCQAOgBAUACIAPABQBuAJBnAKQCGAMBUAMIAwAIQBCAMBCAPIARAEQAeAJAdAHIAQADIApALQAWAFAUADQAXACAUAAIAGAAQB6AjB4AvQDfBWDSB4QAdA1AcA3IF+DbMAAAAgLIi0E7g");
	var mask_graphics_26 = new cjs.Graphics().p("A0EYzIiohEMAAAgoMIJtAAIBDjLIABgCQADgSAIgTQAMgcAHghIAFgVIADgLIAbhiQAFgeALgTIADgFQAKgWAYgMQATgKAbgCQAPAAAUABIAPABIDWAVQCHAOBVANIAwAIQBDANBCAQIAQAFIA8AQIAQAEIApAMIAqAKQAXAEAVACIAGABQB6AnB3A1QDcBhDQCHQAgA0AgA2IGtCvMAAAAgZIiQFig");
	var mask_graphics_27 = new cjs.Graphics().p("AzxZRIi7gzMAAAgodIJyAAIArjhIABgDQABgWAGgXQAHggAEgkIACgWIADgNIAPhsQACggAJgVIADgFQAJgZAXgNQASgLAcgCQAOgBAVACIAPABIDYAYQCIAPBVANIAwAJQBEANBCASIAQAFIA8ARIAQAFIApANIAqAMIAsAJIAIACQB5AsB2A7QDaBrDMCWQAkAzAjA2IHdCDMAAAAgmIhsGKg");
	var mask_graphics_28 = new cjs.Graphics().p("AzfZvIjNgiMAAAgouIJ2AAQAMiCAJh2IAAgDQAAgaACgaQADglABgnIAAgYIABgOIAEh1QAAgkAGgWIACgGQAIgbAWgOQATgMAcgCQAOgBAVACIAPABIDZAaQCKAQBVAPIAwAJQBEAOBDATIAQAEIA8AUIAQAEIApAPIArAOIAsANIAIACQB4AxB2BAQDYB2DICmQAoAyAmA0IINBYMAAAAg0IhIGxg");
	var mask_graphics_29 = new cjs.Graphics().p("AzMaNIjggRMAAAgo/IJ6AAQABiNgDiBIAAgEQgCgegBgdQAAgqgDgqIgCgaIAAgPIgHh+QgEgnAFgYIABgGQAGgeAWgPQASgOAcgBQAOgBAVABIAQACIDbAcQCLASBVAPIAwAJQBEAPBEAUIAQAFIA8AVIAPAFIAqAPIArAQIAtASIAIADQB4A0B1BHQDWCBDEC0QArAxAqA0II9ArMAAAAhDIgkHYg");
	var mask_graphics_30 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_31 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_32 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_33 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_34 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_35 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_36 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_37 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_38 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_39 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_40 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_41 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_42 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_43 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_44 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_45 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_46 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_47 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_48 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_49 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_50 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_51 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_52 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_53 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_54 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_55 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_56 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_57 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_58 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_59 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_60 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_61 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_62 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_63 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_64 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_65 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_66 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_67 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_68 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_69 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_70 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_71 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_72 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_73 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_74 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_75 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_76 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_77 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_78 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_79 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_80 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_81 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_82 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_83 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_84 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_85 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_86 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_87 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_88 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");
	var mask_graphics_89 = new cjs.Graphics().p("A2sasMAAAgpQIJ+AAQgYlkgrkXQgHgqADgZQAEglAWgTQASgOAdgCQATgCAgAFIDcAeQC4AZBaAUQE1BFEmDBQEHCuDqEEIJsAAMAAAApQg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:145.325,y:209.5}).wait(1).to({graphics:mask_graphics_1,x:145.325,y:209.5}).wait(1).to({graphics:mask_graphics_2,x:145.325,y:209.5}).wait(1).to({graphics:mask_graphics_3,x:145.325,y:209.5}).wait(1).to({graphics:mask_graphics_4,x:145.325,y:209.5}).wait(1).to({graphics:mask_graphics_5,x:145.325,y:209.5}).wait(1).to({graphics:mask_graphics_6,x:145.325,y:209.5}).wait(1).to({graphics:mask_graphics_7,x:145.325,y:209.5}).wait(1).to({graphics:mask_graphics_8,x:145.325,y:209.5}).wait(1).to({graphics:mask_graphics_9,x:145.325,y:209.5}).wait(1).to({graphics:mask_graphics_10,x:145.325,y:209.5}).wait(1).to({graphics:mask_graphics_11,x:145.325,y:209.5}).wait(1).to({graphics:mask_graphics_12,x:145.325,y:209.5}).wait(1).to({graphics:mask_graphics_13,x:145.325,y:209.5}).wait(1).to({graphics:mask_graphics_14,x:145.325,y:209.5}).wait(1).to({graphics:mask_graphics_15,x:145.325,y:209.5}).wait(1).to({graphics:mask_graphics_16,x:145.325,y:209.5}).wait(1).to({graphics:mask_graphics_17,x:145.325,y:209.5}).wait(1).to({graphics:mask_graphics_18,x:145.325,y:206.9625}).wait(1).to({graphics:mask_graphics_19,x:145.325,y:203.95}).wait(1).to({graphics:mask_graphics_20,x:145.325,y:200.9375}).wait(1).to({graphics:mask_graphics_21,x:145.325,y:197.9167}).wait(1).to({graphics:mask_graphics_22,x:145.325,y:194.9125}).wait(1).to({graphics:mask_graphics_23,x:145.325,y:191.8917}).wait(1).to({graphics:mask_graphics_24,x:145.325,y:188.875}).wait(1).to({graphics:mask_graphics_25,x:145.325,y:185.855}).wait(1).to({graphics:mask_graphics_26,x:145.325,y:182.8438}).wait(1).to({graphics:mask_graphics_27,x:145.325,y:179.83}).wait(1).to({graphics:mask_graphics_28,x:145.325,y:176.8083}).wait(1).to({graphics:mask_graphics_29,x:145.325,y:173.805}).wait(1).to({graphics:mask_graphics_30,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_31,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_32,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_33,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_34,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_35,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_36,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_37,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_38,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_39,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_40,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_41,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_42,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_43,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_44,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_45,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_46,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_47,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_48,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_49,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_50,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_51,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_52,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_53,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_54,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_55,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_56,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_57,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_58,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_59,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_60,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_61,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_62,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_63,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_64,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_65,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_66,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_67,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_68,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_69,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_70,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_71,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_72,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_73,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_74,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_75,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_76,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_77,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_78,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_79,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_80,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_81,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_82,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_83,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_84,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_85,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_86,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_87,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_88,x:145.325,y:170.7813}).wait(1).to({graphics:mask_graphics_89,x:145.325,y:170.7813}).wait(1));

	// sb_sc3_car_copy
	this.instance = new lib.sb_sc3car("synched",0);
	this.instance.setTransform(742.85,899.45,6.3006,6.2992,0,0,0,113.4,141.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.4,9.4,226.79999999999998,282.70000000000005);


(lib.an_wheel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_wheel
	this.instance = new lib.sb_wheel("synched",0);
	this.instance.setTransform(70.7,70.7,1,1,1.999,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:50.1,regY:49.9,scaleX:0.9999,scaleY:0.9999,rotation:180,x:70.75},54,cjs.Ease.cubicOut).wait(1).to({regX:50,regY:50,rotation:188.7678,x:70.85,y:70.6},0).wait(1).to({rotation:197.4902,y:70.55},0).wait(1).to({rotation:206.1249,y:70.6},0).wait(1).to({rotation:214.6281,y:70.65},0).wait(1).to({rotation:222.9563},0).wait(1).to({rotation:231.0683,x:70.9,y:70.7},0).wait(1).to({rotation:238.9271,x:70.85},0).wait(1).to({rotation:246.5011},0).wait(1).to({rotation:253.7656,x:70.8},0).wait(1).to({rotation:260.7025},0).wait(1).to({rotation:267.3008,y:70.75},0).wait(1).to({rotation:273.5559},0).wait(1).to({rotation:279.4686,x:70.75},0).wait(1).to({rotation:285.0444,x:70.8},0).wait(1).to({rotation:290.2922},0).wait(1).to({rotation:295.2239,x:70.75},0).wait(1).to({rotation:299.8527,y:70.8},0).wait(1).to({rotation:304.1933,x:70.7,y:70.75},0).wait(1).to({rotation:308.2606},0).wait(1).to({rotation:312.07,y:70.8},0).wait(1).to({rotation:315.6362},0).wait(1).to({rotation:318.9739,x:70.65,y:70.75},0).wait(1).to({rotation:322.0969},0).wait(1).to({rotation:325.0184},0).wait(1).to({rotation:327.7509,x:70.7},0).wait(1).to({rotation:330.306,x:70.65,y:70.8},0).wait(1).to({rotation:332.6948,y:70.7},0).wait(1).to({rotation:334.9275,y:70.75},0).wait(1).to({rotation:337.0134,x:70.6},0).wait(1).to({rotation:338.9616,y:70.7},0).wait(1).to({rotation:340.78,y:70.75},0).wait(1).to({rotation:342.4765,y:70.7},0).wait(1).to({rotation:344.058},0).wait(1).to({rotation:345.531},0).wait(1).to({regX:50.1,rotation:346.9018,x:70.7},0).to({_off:true},1).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0.1,141.6,141.4);


(lib.an_sc2ttvc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_tt_vc
	this.instance = new lib.sb_sc2ttvc("synched",0);
	this.instance.setTransform(349.85,12.7,1,1,0,0,0,89,12.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({x:89,alpha:1},13,cjs.Ease.cubicOut).wait(74));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,438.9,25.4);


(lib.an_sc2ttchange = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_tt_change
	this.instance = new lib.sb_sc2ttchange("synched",0);
	this.instance.setTransform(511.9,11.1,1,1,0,0,0,140.7,11.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({x:140.7,alpha:1},12,cjs.Ease.cubicOut).wait(71));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,652.6,22.2);


(lib.an_sc2tt369 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_tt_369
	this.instance = new lib.sb_sc2tt369("synched",0);
	this.instance.setTransform(107.5,27.4,1,1,0,0,0,107.5,27.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({y:52.4,alpha:1},15,cjs.Ease.cubicOut).wait(54));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,215,80);


(lib.an_sc2tt239 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_tt_239
	this.instance = new lib.sb_sc2tt239("synched",0);
	this.instance.setTransform(103.1,32.1,1,1,0,0,0,103.1,32.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({y:57.1,alpha:1},15,cjs.Ease.cubicOut).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,206.3,89.3);


(lib.an_sc2sharp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_sharp
	this.instance = new lib.sb_sc2sharp("synched",0);
	this.instance.setTransform(455.25,292.65,1.4037,1.4037,-8.4823,0,0,303.2,165.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:165.8,scaleX:1,scaleY:1,rotation:0,x:548.45,y:724.65},18,cjs.Ease.cubicOut).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.8,-346.4,953.1999999999999,1236.9);


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

	// an_wheel_copy
	this.instance = new lib.an_wheel("synched",0);
	this.instance.setTransform(141.85,147.75,0.3595,1.0461,0,0,0,71.8,71.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({startPosition:27},0).to({_off:true},1).wait(1).to({_off:false,startPosition:29},0).to({_off:true},1).wait(60));

	// an_wheel
	this.instance_1 = new lib.an_wheel("synched",0);
	this.instance_1.setTransform(30.6,135.95,0.1954,0.7588,0,0,0,71.2,71);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({startPosition:27},0).to({_off:true},1).wait(1).to({_off:false,startPosition:29},0).to({_off:true},1).wait(60));

	// sb_sc2_car
	this.instance_2 = new lib.sb_sc2car("synched",0);
	this.instance_2.setTransform(230.2,118.3,1,1,0,0,0,230.2,118.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({startPosition:0},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,460.6,236.5);


(lib.sb_sc1tnew = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EghIADcIAAm4MBCRAAAIAAG4g");
	mask.setTransform(212.075,22.05);

	// sb_sc1_altima_copy
	this.instance = new lib.sb_sc1altima("synched",0);
	this.instance.setTransform(210.55,57.95,1,1,0,0,0,201,43.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.6,14.4,401.9,29.700000000000003);


(lib.sb_sc1taa = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EghcAFaIAAqzMBC5AAAIAAKzg");
	var mask_graphics_84 = new cjs.Graphics().p("EghcAFaIAAqzMBC5AAAIAAKzg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:214.075,y:34.6}).wait(84).to({graphics:mask_graphics_84,x:214.075,y:34.6}).wait(1).to({graphics:null,x:0,y:0}).wait(5));

	// sb_sc1_altima
	this.instance = new lib.sb_sc1altima("synched",0);
	this.instance.setTransform(214.55,13.85,1,1,0,0,0,201,43.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({startPosition:0},0).to({_off:true},1).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.6,0,401.9,57.5);


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

	// sb_star
	this.instance = new lib.sb_star("synched",0);
	this.instance.setTransform(497.65,132.3,0.1613,0.1613,0,0,0,11.8,11.8);

	this.instance_1 = new lib.sb_star("synched",0);
	this.instance_1.setTransform(407.35,198.6,0.1613,0.1613,0,0,0,11.8,11.8);

	this.instance_2 = new lib.sb_star("synched",0);
	this.instance_2.setTransform(399.95,219.45,0.1613,0.1613,0,0,0,11.8,11.8);

	this.instance_3 = new lib.sb_star("synched",0);
	this.instance_3.setTransform(323,198.6,0.1613,0.1613,0,0,0,11.8,11.8);

	this.instance_4 = new lib.sb_star("synched",0);
	this.instance_4.setTransform(334.4,176.1,0.1613,0.1613,0,0,0,11.8,11.8);

	this.instance_5 = new lib.sb_star("synched",0);
	this.instance_5.setTransform(330.05,179.9,0.1613,0.1613,0,0,0,11.8,11.8);

	this.instance_6 = new lib.sb_star("synched",0);
	this.instance_6.setTransform(383.2,79.35,0.1613,0.1613,0,0,0,11.8,11.8);

	this.instance_7 = new lib.sb_star("synched",0);
	this.instance_7.setTransform(372.45,95.1,0.1613,0.1613,0,0,0,11.8,11.8);

	this.instance_8 = new lib.sb_star("synched",0);
	this.instance_8.setTransform(278.35,80.35,0.1159,0.1159,0,0,0,11.7,11.7);

	this.instance_9 = new lib.sb_star("synched",0);
	this.instance_9.setTransform(318.15,131.2,0.1159,0.1159,0,0,0,11.7,11.7);

	this.instance_10 = new lib.sb_star("synched",0);
	this.instance_10.setTransform(274.5,137.75,0.1159,0.1159,0,0,0,11.7,11.7);

	this.instance_11 = new lib.sb_star("synched",0);
	this.instance_11.setTransform(79.4,237.55,0.1159,0.1159,0,0,0,11.7,11.7);

	this.instance_12 = new lib.sb_star("synched",0);
	this.instance_12.setTransform(298.8,286.55,0.1159,0.1159,0,0,0,11.7,11.7);

	this.instance_13 = new lib.sb_star("synched",0);
	this.instance_13.setTransform(523.15,83.15,0.1159,0.1159,0,0,0,11.7,11.7);

	this.instance_14 = new lib.sb_star("synched",0);
	this.instance_14.setTransform(20.05,191.15,0.1159,0.1159,0,0,0,11.7,11.7);

	this.instance_15 = new lib.sb_star("synched",0);
	this.instance_15.setTransform(278.9,210.1,0.1613,0.1613,0,0,0,11.8,11.8);

	this.instance_16 = new lib.sb_star("synched",0);
	this.instance_16.setTransform(214.75,76.8,0.1613,0.1613,0,0,0,11.8,11.8);

	this.instance_17 = new lib.sb_star("synched",0);
	this.instance_17.setTransform(435.3,184.8,0.1613,0.1613,0,0,0,11.8,11.8);

	this.instance_18 = new lib.sb_star("synched",0);
	this.instance_18.setTransform(338.9,153.3,0.1613,0.1613,0,0,0,11.8,11.8);

	this.instance_19 = new lib.sb_star("synched",0);
	this.instance_19.setTransform(559.25,238,0.4424,0.4424,24.5398,0,0,12.5,12.1);

	this.instance_20 = new lib.sb_star("synched",0);
	this.instance_20.setTransform(542.85,180.95,0.4424,0.4424,24.5398,0,0,12.5,12.1);

	this.instance_21 = new lib.sb_star("synched",0);
	this.instance_21.setTransform(429.2,133.75,0.4424,0.4424,24.5398,0,0,12.5,12.1);

	this.instance_22 = new lib.sb_star("synched",0);
	this.instance_22.setTransform(228,264.5,0.1159,0.1159,0,0,0,11.7,11.7);

	this.instance_23 = new lib.sb_star("synched",0);
	this.instance_23.setTransform(138.8,261.1,0.1159,0.1159,0,0,0,11.7,11.7);

	this.instance_24 = new lib.sb_star("synched",0);
	this.instance_24.setTransform(216.75,203.65,0.1159,0.1159,0,0,0,11.7,11.7);

	this.instance_25 = new lib.sb_star("synched",0);
	this.instance_25.setTransform(263.25,216.6,0.1613,0.1613,0,0,0,11.8,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// sc1_bg
	this.instance_26 = new lib.sc1bg();
	this.instance_26.setTransform(17,-305,2.0376,2.0374);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.8,-305,611.5,1222.5);


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

	// sb_sc1_heart
	this.instance = new lib.sb_sc1heart("synched",0);
	this.instance.setTransform(194,7.5,1,1,0,0,0,194,7.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:17.5,alpha:1},25,cjs.Ease.cubicOut).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387.9,25);


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

	// sb_sc5_car
	this.instance = new lib.sb_sc5car("synched",0);
	this.instance.setTransform(237.6,80.75,0.8462,0.8462,0,0,0,280.8,95.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:249.85},89).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,487.3,161.6);


(lib.an_sc1altima = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask_alt (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_25 = new cjs.Graphics().p("AeoG0QgYhGgdhHIkUAAQgdBMgXBBIgvAAQA4itBKicQA2hwAcgoIA3AAQAcApA1BvQBJCcA5CtgAZwD8IDyAAQgmhcgjhLQgghFgPgWQgyBPhICzgASOG0QgtlPgghdQhQDAhGC6IgjAAQhIjAhQi5QghB2grE1IguAAQAcjIAZh6QAPhQAWhPIA5AAQAnBWAvB3IA6CTQBLjFBGibIA5AAQAZBYAOBHQAZB9AaDFgADJG0IAAnhIAvAAIAAHhgAmXG0IAAm2IjAAAIAAgrIGuAAIAAArIi/AAIAAG2gAySG0IAAnhIAuAAIAAG2IEjAAIAAArgA4sG0QgWg/gfhOIkUAAIg0CNIgwAAQA5itBKicQA1hwAdgoIA3AAQAcArA0BtQBKCdA5CsgA9kD8IDyAAQgmhcgjhLQgghFgPgWQgzBQhHCygAkCj3QAigPAUgdQgPgcgJgmQgIARgJALIgLgKQAZggANg+IAOACQgGAZgEANIBIAAIAAANIgPAAQgJA4gVAiQAUAeAcAMQgFADgFAJQgbgNgUgdQgUAcgiAQQgEgJgEgEgAjbl5QAHAoAQAgQARgeAHgtIgvAAgADLj0QAagXAKgiQAGgWAAgfIAAgKIAOAAIgBAeQAOBEAjATIgKAMQgcgSgQgxQgKAogdAbQgFgGgGgDgARDjrIAAhsIg1AAIAABSIgOAAIAAhgIBDAAIAAgeIhZAAIAAgOIBeAAIgPgeIAOgEQAMAUAFAMIgEACIBZAAIAAAOIhbAAIAAAeIBHAAIAABNQAAANgJADQgJADgdAAQgCgIgDgHQAZABAHgBQAFAAAAgEIAAg/Ig4AAIAABsgACYjrIAAhIIgtAAIAAgNIBoAAIAAANIgtAAIAABIgApyjsIAAhvIggAAIAAAJQAABFgXAhQgGgGgFgDQAVgdAAhAIAAhKQAwgJAUgIIAMAKQgVAIguAIIAAArIBGAAIAAANIgYAAIAABvgArjjsIAAhMIgtAAIAAgNIAtAAIAAgXIgtAAIAAgNIA8AAQAJgUADgQIAOADIgNAhIAdAAIAAANIgrAAIAAAXIAoAAIAAANIgoAAIAABMgAzJjxIAAgNIBUAAIAAgnIg+AAIAAgMIA+AAIAAgjIg1AAIAAgNIB6AAIAAANIg2AAIAAAjIA+AAIAAAMIg+AAIAAAnIBWAAIAAANgAIsj1IAAgPIBSAAIAAiqIAPAAIAABDIBSAAIAAAPIhSAAIAABYIBhAAIAAAPgAlPkFQAHgCAAgKIAAhTIA7AAIAAgwIg+AAIAAgOIBMAAIAABMIg7AAIAABHIA7gVIACAOQhGAbgGAFQgCgJgEgGgABpj/QALgQAJgcIANADQgJAZgMAVgAsQkEQANgRAHgXIAMAEQgHAWgPAVgAC0knIAKgEQAMATAGAPIgMAFQgFgNgLgWgArKkoIAKgFQANAVAFAOIgKAGQgFgOgNgWgAUelJIAAgKIIhAAIAAAKgA9ulJIAAgKIIhAAIAAAKgADKlYQASgdAIg8IAOABIgHAmIA4AAIACgBIAKADQgJAogHAQIgMgEQAHgRAFgYIg3AAQgIAdgKAQgAB1lSIAAgMIBVAAIAAAGIAAAGgAzRleQAVgKAXgSQAXgRAQgTIgoAAIAAgOIBBAAQAPAXAaAVQAZAUAaALQgHAIgDAFQgYgMgZgUQgYgUgRgWQgRAVgZAVQgZAVgXAMQgEgGgGgFgADKlYIAAAAgAr+mKIALgCQAHANADASIgNADQgBgPgHgRgABylvIAAgNIAmAAIAAgUIgrAAIAAgMIArAAIAAgVIAOAAIAAAVIArAAIAAAMIgrAAIAAAUIAmAAIAAANgAsNmOIAAgNIAsAAIgKgUIAOgDQAHALAFAMIAjAAIAAANg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_graphics_25,x:200.975,y:43.625}).wait(72));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.478,1],-89.9,0,89.9,0).s().p("AuCYuMAAAgxbIcFAAMAAAAxbg");
	this.shape.setTransform(-105.9016,-31.3384,1,1.2913,44.9995);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.478,1],-63.5,-63.5,63.6,63.6).s().p("EggfAMpMAtIgtIIT3T3MgtIAtIg");
	this.shape_1.setTransform(-72.475,-25.575);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.478,1],-63.5,-63.6,63.6,63.5).s().p("EggfAMpMAtIgtIIT3T3MgtIAtIg");
	this.shape_2.setTransform(128.375,8.875);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(25).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false,x:563.5484,y:83.4616},0).to({_off:true},1).wait(11).to({_off:false},0).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(26).to({_off:false},0).wait(1).to({x:-38.975,y:-19.825},0).wait(1).to({x:-5.525,y:-14.125},0).wait(1).to({x:27.975,y:-8.375},0).wait(1).to({x:61.425,y:-2.625},0).wait(1).to({x:94.925,y:3.125},0).to({_off:true},1).wait(1).to({_off:false,x:161.875,y:14.575},0).wait(1).to({x:195.325,y:20.325},0).wait(1).to({x:228.825,y:26.075},0).to({_off:true},1).wait(2).to({_off:false,x:329.225,y:43.275},0).to({_off:true},1).wait(58));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(32).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:262.275,y:31.825},0).wait(1).to({x:295.725,y:37.575},0).to({_off:true},1).wait(1).to({_off:false,x:362.675,y:49.025},0).wait(1).to({x:396.175,y:54.775},0).wait(1).to({x:429.625,y:60.525},0).wait(1).to({x:463.125,y:66.275},0).wait(1).to({x:496.575,y:71.975},0).wait(1).to({x:530.075,y:77.725},0).to({_off:true},1).wait(1).to({_off:false,x:563.525,y:83.475},0).wait(10).to({_off:true},1).wait(40));

	// sb_sc1_t_new
	this.instance = new lib.sb_sc1tnew("synched",0);
	this.instance.setTransform(202.55,7.75,1,1,0,0,0,212.1,22.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1,startPosition:11},18,cjs.Ease.cubicOut).wait(79));

	// sb_sc1_t_aa
	this.instance_1 = new lib.sb_sc1taa("synched",0);
	this.instance_1.setTransform(200.55,64.35,1,1,0,0,0,214.1,34.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({alpha:1,startPosition:11},18,cjs.Ease.cubicOut).wait(74));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,402,87.3);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).wait(55).to({startPosition:36},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(77));

	// an_arr
	this.instance_1 = new lib.an_arr("synched",3,false);
	this.instance_1.setTransform(57.65,-2.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37).to({_off:false},0).wait(55).to({startPosition:36},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(77));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},16).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},55).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[]},1).wait(77));

	// Layer_5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009CEA").s().p("A1Cj/MAoEgADICBICMgoEAADg");
	this.shape_4.setTransform(-19.025,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(16).to({_off:true},1).wait(4).to({_off:false},0).wait(2).to({_off:true},1).wait(1).to({_off:false},0).wait(2).to({_off:true},1).wait(9).to({_off:false},0).wait(55).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(77));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.7,-26.9,269.4,51.8);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).to({alpha:1},7).to({startPosition:21},17).to({regX:0.1,regY:0.1,scaleX:0.7876,scaleY:0.7876,x:0.1,y:0.1,startPosition:25},3).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0,startPosition:21},3).to({regX:0.1,regY:0.1,scaleX:0.7876,scaleY:0.7876,x:0.1,y:0.1,startPosition:25},3).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0,startPosition:37},3).to({startPosition:65},28).to({_off:true},1).wait(99));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.7,-26.9,269.4,51.8);


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

	// an_sc4_tt_bose
	this.instance = new lib.an_sc4ttbose("synched",0,false);
	this.instance.setTransform(290.6,169.75,1.244,1.244,0,0,0,187.8,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// an_sc4_tt_zero
	this.instance_1 = new lib.an_sc4ttzero("synched",0,false);
	this.instance_1.setTransform(491.5,133.35,1.244,1.244,0,0,0,138.7,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// an_sc4_tt_seat
	this.instance_2 = new lib.an_sc4ttseat("synched",0,false);
	this.instance_2.setTransform(509.6,58.05,1.244,1.244,0,0,0,137,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	// an_sc3_tt_hear
	this.instance_3 = new lib.an_sc3tthear("synched",0,false);
	this.instance_3.setTransform(341.8,0.3,1.244,1.244,0,0,0,139.1,16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90));

	// an_line_bottom
	this.instance_4 = new lib.an_linebottom("synched",0,false);
	this.instance_4.setTransform(525.7,-233.4,1,1.3108,180,0,0,1.7,143.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90));

	// an_line_top
	this.instance_5 = new lib.an_linetop("synched",0,false);
	this.instance_5.setTransform(525.7,810.25,1,7.9482,180,0,0,1.7,63.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90));

	// an_line_yellow
	this.instance_6 = new lib.an_lineyellow("synched",0,false);
	this.instance_6.setTransform(569,730.95,1,4.4683,0,0,0,5.7,115.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90));

	// an_sc4_sharp
	this.instance_7 = new lib.an_sc4sharp("synched",0,false);
	this.instance_7.setTransform(511.25,811.15,0.8736,0.8736,0,0,0,600.2,611.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(90));

	// sb_star
	this.instance_8 = new lib.sb_star("synched",0);
	this.instance_8.setTransform(23.3,60.25,0.1159,0.1159,0,0,0,11.7,11.7);
	this.instance_8.alpha = 0.4492;

	this.instance_9 = new lib.sb_star("synched",0);
	this.instance_9.setTransform(13.95,54.1,0.1159,0.1159,0,0,0,11.7,11.7);
	this.instance_9.alpha = 0.4492;

	this.instance_10 = new lib.sb_star("synched",0);
	this.instance_10.setTransform(101.3,348.4,0.1159,0.1159,0,0,0,11.7,11.7);

	this.instance_11 = new lib.sb_star("synched",0);
	this.instance_11.setTransform(21.55,307.95,0.1159,0.1159,0,0,0,11.7,11.7);

	this.instance_12 = new lib.sb_star("synched",0);
	this.instance_12.setTransform(338.9,153.3,0.1613,0.1613,0,0,0,11.8,11.8);

	this.instance_13 = new lib.sb_star("synched",0);
	this.instance_13.setTransform(481.35,481.65,0.4424,0.4424,24.5398,0,0,12.5,12.1);

	this.instance_14 = new lib.sb_star("synched",0);
	this.instance_14.setTransform(590.35,528.45,0.4424,0.4424,24.5398,0,0,12.5,12.1);

	this.instance_15 = new lib.sb_star("synched",0);
	this.instance_15.setTransform(15.5,255.75,0.1159,0.1159,0,0,0,11.7,11.7);
	this.instance_15.alpha = 0.4492;

	this.instance_16 = new lib.sb_star("synched",0);
	this.instance_16.setTransform(77.05,240.3,0.1159,0.1159,0,0,0,11.7,11.7);

	this.instance_17 = new lib.sb_star("synched",0);
	this.instance_17.setTransform(51.5,320.45,0.1159,0.1159,0,0,0,11.7,11.7);

	this.instance_18 = new lib.sb_star("synched",0);
	this.instance_18.setTransform(29.2,273.1,0.1613,0.1613,0,0,0,11.8,11.8);
	this.instance_18.alpha = 0.4492;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(90));

	// sc4_bg
	this.instance_19 = new lib.sc4bg();
	this.instance_19.setTransform(0,-345,2.0761,2.0757);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.1,-421.3,1048.8,1766.8);


(lib.an_sc3carrun = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.an_sc3car("synched",0);
	this.instance.setTransform(135.1,263.5,1.156,1.156,0,0,0,145.3,170.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,y:161.55,startPosition:46},46,cjs.Ease.cubicOut).wait(44));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,262.2,403.7);


(lib.an_sc2carrun = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(141.5,82,0.6147,0.6147,0,0,0,230.2,118.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:118.4,scaleX:1,scaleY:1,x:591.5,y:118.6,mode:"single",startPosition:29},28,cjs.Ease.cubicOut).wait(62));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,821.9,236.7);


(lib.sb_sc1bgfront = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_16 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EAfCAouQjggIi8gYIAAAAIjkgiIAAAAQiKgVhbgHIAAAAQiYgLjXANIAAAAQj0ATh7AHIAAAAQg/ADglgCIAAAAQg3gEgogSIAAAAQgwgVgegpIAAAAQgfgtAGgvIAAAAQgsARg9gPIAAAAIhsgiIAAAAQhCgThWgDIAAAAQgzgChnAFIAAAAIqqAgIAAAAQg+ADghgCIAAAAQg0gCgogOIAAAAQgvgQgighIAAAAQgkgkgGgtIAAAAQgIg/Azg4IAAAAQAvgyBGgUIAAAAQAvgMBXgGIAAAAQBfgGAngIIAAAAQAQhpBehxIAAAAQAegkA4g6IAAAAQBDhEAVgYIAAAAQDJjhBnliIAAAAQBKkAAomWIAAAAQAOiKAKg7IAAAAQAShtAghQIAAAAQAQgnAagvIAAAAQlKAIluAMIAAAAQnBAOuBAiIAAAAQiEAFhBAFIAAAAQhtAIhWAQIAAAAQgsAJhHASIAAAAIhzAbIAAAAQh7AbibARIAAAAQhgAKi4ANIAAAAIyEBTQhzAIg8gCIAAAAQhggDhJgZIAAAAIhCgaIAAAAQgogQgcgGIAAAAQgogIhOAGIAAAAIv6BDQg8ADgcgBIAAAAQgxgBgkgNIAAAAQgsgPgdggIAAAAQghgkgCgqIAAAAQgCgnAbglIAAAAQAZgjAogUIAAAAQAhgRAvgIIAAAAQAcgFA4gFIAAAAMBWUgHCMhg7ADsQg+ACgegCIAAAAQgzgDgmgPIAAAAQgtgRgegkIAAAAQgggmABgsIAAAAQAAgnAagjIAAAAQAYggAlgUIAAAAQAfgQArgKIAAAAQAcgHAzgHIAAAAQNZh1Q0htIAAAAQKFhCUNhzIAAAAQg9gTgFhMIAAAAQgEgvASgjIAAAAQALgWASgRIAAAAQAqgpBHgSIAAAAQAugMBVgHIAAAAIIAgpQQ4hRWwg7IAAAAQNPgiadg5IAAAAQA2gCAcgEIAAAAQAtgGAhgRIAAAAQASgJAXgRIAAAAIAogeIAAAAQA8gsBJgXIAAAAQBEgVBFAAIAAAAQhFAAhEAVIAAAAQhJAXg8AsIAAAAIgoAeIAAAAQgXARgSAJIAAAAQghARgtAGIAAAAQgcAEg2ACIAAAAQ6dA5tPAiIAAAAQ2wA7w4BRIAAAAIoAApQhVAHguAMIAAAAQhHASgqApIAAAAQgSARgLAWIAAAAQgugQgOgjIAAAAQgOghATglIAAAAQARgiAigTIAAAAQAdgPAogFIAAAAQAbgDAvAAIAAAAQD9ADBDgDIAAAAQC1gGCHggIAAAAQgPgTAEgbIAAAAQAEgbASgSIAAAAQAcgcA+gMIAAAAQAtgHBrgDIAAAAQBhgCA1gNIAAAAQgWgYACglIAAAAQADgjAWgcIAAAAQASgXAggUIAAAAQAVgMAogSIAAAAQApgSAUgMIAAAAQAggTAUgWIAAAAI1zAlQg0ABgcgDIAAAAQgsgFgfgSIAAAAQgkgUgOgpIAAAAQgPgqAWgfIAAAAQAPgWAggLIAAAAQAXgIAmgEIAAAAIFzgsQAXgVATg6IAAAAQAUg9AVgVIAAAAQAYgYAqgIIAAAAQAbgFAyABIAAAAQCZABDAgPIAAAAQB0gIDlgYIAAAAIDwgYQEUgcCKgQIAAAAIH0g6IAAAAQJlhEJfggIAAAAQEWgOC9ACIAAAAQDFACEjAXIAAAAIHnAmIAAAAQEJASF3AJIAAAAQDWAFGrAIIAAAAQIuAOGcAtIAAAAIlPgFIgQAAIAAAAIAQAAIAAAAIFPAFIV3AWQBQABAxAOIAAAAQBFAUAbAyIAAAAQAIAPAEARIAAAAQADAOAAAPIAAAAQAAAigQAmIAAAAQgXA3g6BGIAAAAICiAGIANAAIAAAAQBIADAnAFIAAAAQBFAKAyAXIAAAAQAPAHAsAbIAAAAQAlAVAYAJIAAAAQAjANAsAEIAAAAQAeACA0gBIAAAAQDwgDD3gUIAAAAQBLgGAoAEIAAAAQA/AHAnAgIAAAAQAtAlAEBAIAAAAQAFBAgnArIAAAAQgfAig3ARIAAAAQgkALhCAIIAAAAIl1AtQA6AQAWBCIAAAAQAWBBgcA5IAAAAQguBiiUAsIAAAAQgfAJhZATIAAAAQhNAQgrAQIAAAAQDQAiDQgTIAAAAIBwgKIAAAAQA/gBAuAOIAAAAQA4ASAkAuIAAAAQAlAygLA0IAAAAQBTgEBDA0IAAAAQBHA3gHBLIAAAAQgGBDhCAyIAAAAQg0AmhUAbIAAAAQizA4jmAiIAAAAIhaALIAAAAQAsAXASA6IAAAAQAUBEgbA9IAAAAQgZA2g3AuIAAAAQgpAihFAmIAAAAQhZAwgZAQIAAAAQg+ApgiAtIAAAAQghApgPA0IAAAAQgPA1AGA1IAAAAIIngmQA7gEAeABIAAAAQAyACAmAMIAAAAQAsAPAfAhIAAAAQAhAkADAqIAAAAQADArgcAtIAAAAQgVAhgqAoIAAAAQjIC9j0B9IAAAAQBMgDA+A3IAAAAQA+A2AIBMIAAAAQAGA9gfBEIAAAAQgYA1gyA+IAAAAQhsCIiMBpIAAAAQiMBpigBCIAAAAIM3gSQBagCA5AQIAAAAQBOAXAbA6IAAAAQAWAvgTA3IAAAAQgRA0grAkIAAAAQglAfg4AVIAAAAQgmAOhBAQIAAAAQAuA6gXBUIAAAAQgVBPhCAwIAAAAQg4AohUATIAAAAQg0AMhmAJIAAAAQlxAip0BBIAAAAQrdBNkHAZIAAAAQyXBys1AOIAAAAQhlAChaAAIAAAAQh7AAhjgDgA76tsQBBACA5gGIAAAAQgEgEgKAAIAAAAQgpABhDAHgEAzNgcaIAAgCIAAAAQAAhNBGg8IAAAAQA+g1BagVIAAAAQAIgCCegXIAAAAQBkgOA7geIAAAAQg6gJgugYIAAAAQg0gagegqIAAAAQghgsAAg5IAAAAIAAgBIAAAAQAAg8AlglIAAAAQAgghA5gLIAAAAQATgEAagBIAAAAQgaABgTAEIAAAAQg5ALggAhIAAAAQglAlAAA8IAAAAIAAABIAAAAQAAA5AhAsIAAAAQAeAqA0AaIAAAAQAuAYA6AJIAAAAQg7AehkAOIAAAAQieAXgIACIAAAAQhaAVg+A1IAAAAQhGA8AABNIAAAAIAAACgEAzEgcaIAAAAIAAAAIAAAAgEBbyggaIiigGQA6hGAXg3IAAAAQAQgmAAgiIAAAAQAAgPgDgOIAAAAQBCAMAaAiIAAAAQAbAhgNAuIAAAAQgMAtgoAQIAAAAQAYAPADAfIAAAAIgNAAg");
	var mask_graphics_88 = new cjs.Graphics().p("EAfCAouQjggIi8gYIAAAAIjkgiIAAAAQiKgVhbgHIAAAAQiYgLjXANIAAAAQj0ATh7AHIAAAAQg/ADglgCIAAAAQg3gEgogSIAAAAQgwgVgegpIAAAAQgfgtAGgvIAAAAQgsARg9gPIAAAAIhsgiIAAAAQhCgThWgDIAAAAQgzgChnAFIAAAAIqqAgIAAAAQg+ADghgCIAAAAQg0gCgogOIAAAAQgvgQgighIAAAAQgkgkgGgtIAAAAQgIg/Azg4IAAAAQAvgyBGgUIAAAAQAvgMBXgGIAAAAQBfgGAngIIAAAAQAQhpBehxIAAAAQAegkA4g6IAAAAQBDhEAVgYIAAAAQDJjhBnliIAAAAQBKkAAomWIAAAAQAOiKAKg7IAAAAQAShtAghQIAAAAQAQgnAagvIAAAAQlKAIluAMIAAAAQnBAOuBAiIAAAAQiEAFhBAFIAAAAQhtAIhWAQIAAAAQgsAJhHASIAAAAIhzAbIAAAAQh7AbibARIAAAAQhgAKi4ANIAAAAIyEBTQhzAIg8gCIAAAAQhggDhJgZIAAAAIhCgaIAAAAQgogQgcgGIAAAAQgogIhOAGIAAAAIv6BDQg8ADgcgBIAAAAQgxgBgkgNIAAAAQgsgPgdggIAAAAQghgkgCgqIAAAAQgCgnAbglIAAAAQAZgjAogUIAAAAQAhgRAvgIIAAAAQAcgFA4gFIAAAAMBWUgHCMhg7ADsQg+ACgegCIAAAAQgzgDgmgPIAAAAQgtgRgegkIAAAAQgggmABgsIAAAAQAAgnAagjIAAAAQAYggAlgUIAAAAQAfgQArgKIAAAAQAcgHAzgHIAAAAQNZh1Q0htIAAAAQKFhCUNhzIAAAAQg9gTgFhMIAAAAQgEgvASgjIAAAAQgugQgOgjIAAAAQgOghATglIAAAAQARgiAigTIAAAAQAdgPAogFIAAAAQAbgDAvAAIAAAAQD9ADBDgDIAAAAQC1gGCHggIAAAAQgPgTAEgbIAAAAQAEgbASgSIAAAAQAcgcA+gMIAAAAQAtgHBrgDIAAAAQBhgCA1gNIAAAAQgWgYACglIAAAAQADgjAWgcIAAAAQASgXAggUIAAAAQAVgMAogSIAAAAQApgSAUgMIAAAAQAggTAUgWIAAAAI1zAlQg0ABgcgDIAAAAQgsgFgfgSIAAAAQgkgUgOgpIAAAAQgPgqAWgfIAAAAQAPgWAggLIAAAAQAXgIAmgEIAAAAIFzgsQAXgVATg6IAAAAQAUg9AVgVIAAAAQAYgYAqgIIAAAAQAbgFAyABIAAAAQCZABDAgPIAAAAQB0gIDlgYIAAAAIDwgYQEUgcCKgQIAAAAIH0g6IAAAAQJlhEJfggIAAAAQEWgOC9ACIAAAAQDFACEjAXIAAAAIHnAmIAAAAQEJASF3AJIAAAAQDWAFGrAIIAAAAQIuAOGcAtIAAAAIV3AWQBQABAxAOIAAAAQBFAUAbAyIAAAAQAIAPAEARIAAAAQBCAMAaAiIAAAAQAbAhgNAuIAAAAQgMAtgoAQIAAAAQAYAPADAfIAAAAQBIADAnAFIAAAAQBFAKAyAXIAAAAQAPAHAsAbIAAAAQAlAVAYAJIAAAAQAjANAsAEIAAAAQAeACA0gBIAAAAQDwgDD3gUIAAAAQBLgGAoAEIAAAAQA/AHAnAgIAAAAQAtAlAEBAIAAAAQAFBAgnArIAAAAQgfAig3ARIAAAAQgkALhCAIIAAAAIl1AtQA6AQAWBCIAAAAQAWBBgcA5IAAAAQguBiiUAsIAAAAQgfAJhZATIAAAAQhNAQgrAQIAAAAQDQAiDQgTIAAAAIBwgKIAAAAQA/gBAuAOIAAAAQA4ASAkAuIAAAAQAlAygLA0IAAAAQBTgEBDA0IAAAAQBHA3gHBLIAAAAQgGBDhCAyIAAAAQg0AmhUAbIAAAAQizA4jmAiIAAAAIhaALIAAAAQAsAXASA6IAAAAQAUBEgbA9IAAAAQgZA2g3AuIAAAAQgpAihFAmIAAAAQhZAwgZAQIAAAAQg+ApgiAtIAAAAQghApgPA0IAAAAQgPA1AGA1IAAAAIIngmQA7gEAeABIAAAAQAyACAmAMIAAAAQAsAPAfAhIAAAAQAhAkADAqIAAAAQADArgcAtIAAAAQgVAhgqAoIAAAAQjIC9j0B9IAAAAQBMgDA+A3IAAAAQA+A2AIBMIAAAAQAGA9gfBEIAAAAQgYA1gyA+IAAAAQhsCIiMBpIAAAAQiMBpigBCIAAAAIM3gSQBagCA5AQIAAAAQBOAXAbA6IAAAAQAWAvgTA3IAAAAQgRA0grAkIAAAAQglAfg4AVIAAAAQgmAOhBAQIAAAAQAuA6gXBUIAAAAQgVBPhCAwIAAAAQg4AohUATIAAAAQg0AMhmAJIAAAAQlxAip0BBIAAAAQrdBNkHAZIAAAAQyXBys1AOIAAAAQhlAChaAAIAAAAQh7AAhjgDgA76tsQBBACA5gGIAAAAQgEgEgKAAIAAAAQgpABhDAHgEAw5gcFQBEgVBFAAIAAAAQhFAAhEAVgEAzNgcaIAAgCIAAAAIAAACIAAAAIAAAAgEAzEgcaIAAAAIAAAAIAAAAgEBahgidQgXA3g6BGIAAAAQA6hGAXg3IAAAAQAQgmAAgiIAAAAQAAAigQAmgEA42giZQAeAqA0AaIAAAAQAuAYA6AJIAAAAQg6gJgugYIAAAAQg0gagegqIAAAAQghgsAAg5IAAAAQAAA5AhAsgEA73gmSIgMAAIAAAAIAMAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:221.156,y:160.2973}).wait(88).to({graphics:mask_graphics_88,x:221.156,y:160.2973}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// sb_sc1_bg_copy
	this.instance = new lib.sb_sc1bg("synched",0);
	this.instance.setTransform(485.35,-170.55,1,1,0,0,0,315.8,278.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(88).to({startPosition:0},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(186.4,-100.5,611.4,521.7);


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

	// sb_sc1_bg_front
	this.instance = new lib.sb_sc1bgfront("synched",0);
	this.instance.setTransform(291.65,534.45,1,1,0,0,0,461.2,85);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:303.9,startPosition:23},89).wait(31));

	// sb_sc1_bg
	this.instance_1 = new lib.sb_sc1bg("synched",0);
	this.instance_1.setTransform(339.05,278.9,1,1,0,0,0,315.8,278.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:328.05},89).to({startPosition:0},30).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.8,-305,634.7,1222.5);


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

	// sb_sc5_car
	this.instance = new lib.sb_sc5car("synched",0,false);
	this.instance.setTransform(362.45,513.25,1.0016,1.0016,0,0,0,280.9,95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// an_line_red
	this.instance_1 = new lib.an_linered("synched",0,false);
	this.instance_1.setTransform(601.5,-143.05,1,3.3824,0,0,0,5.8,116.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgBOAy5IgcgMIgTgMIgQgMIgMgMIgIgMIgMgMIgEgMIgIgMIgEgMIgEgMIAAgMIAAgMIgEgMIAAgLIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgLIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgLIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgLIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgLIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgLIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgLIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgLIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgLIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAEgMIAAgMIAAgLIAEgMIAEgMIAAgBQgDgnAAhCIAAoCQAAhnAIgyQAGgvAPglQAXABA/gCQBigEBTACIAjAAQAKAZAFAbQAFAjgDAzIgIBWQgFA9AABpQAAD9AGB+QACBEgBAdQgCA3gOAnIgBAEIAAADIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAALIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAALIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAALIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAALIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAALIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAALIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAALIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAALIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIAAAMIgEALIAAAMIAAAMIgEAMIgEAMIgEAMIgIAMIgEAMIgIAMIgIAMIgMAMIgQAMIgUAMIgcAMIgvAIIgwgIgEgBxggKQgugjgUg6QgOgngDg2QgBggADhCIAGiEQACgtAEgeIgFgKQgNgggFgtQgCgbAAg1IACj6QAAhBAFgiQAHg2AUgnQAgg7BCgdQBCgdBAAQQBBARAsA4QAsA5AABDQAAAOgGA2QgDAcAABJIABC8QAAAqgBAWQgDAjgIAbQgMAjgWAcIgBAdIgMDdQgDA8gHAcQgOA9gqAqQgqArgxAEIgNABQgsAAgogfg");
	mask.setTransform(567.9458,684.6008);

	// an_line_bottom
	this.instance_2 = new lib.an_linebottom("synched",0,false);
	this.instance_2.setTransform(567.25,780.85,1,2.748,0,0,0,1.7,143.5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	// an_line_top
	this.instance_3 = new lib.an_linetop("synched",0,false);
	this.instance_3.setTransform(567.2,-180.8,0.924,5.0347,0,0,0,1.8,63.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90));

	// an_sc5_plus
	this.instance_4 = new lib.an_sc5plus("synched",0,false);
	this.instance_4.setTransform(408.25,326.75,1.1437,1.1437,0,0,0,220.8,20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90));

	// an_sc5_tt_100w
	this.instance_5 = new lib.an_sc5tt100w("synched",0,false);
	this.instance_5.setTransform(577.9,320.45,1.1437,1.1437,0,0,0,325.9,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90));

	// an_sc5_tt_4w
	this.instance_6 = new lib.an_sc5tt4w("synched",0,false);
	this.instance_6.setTransform(606.55,265.25,1.1437,1.1437,0,0,0,328.7,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90));

	// an_sc5_tt_in
	this.instance_7 = new lib.an_sc5ttin("synched",0,false);
	this.instance_7.setTransform(639.5,187.05,1.3698,1.3698,0,0,0,356.2,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(90));

	// an_sc5_btn
	this.instance_8 = new lib.an_sc5btn("synched",0,false);
	this.instance_8.setTransform(162.55,939.35,1.1217,1.1217);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(90));

	// an_sc2_sharp
	this.instance_9 = new lib.an_sc2sharp("synched",0);
	this.instance_9.setTransform(248.3,-72.45,1,1.2143,0,0,0,448.7,445.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(90));

	// sb_sc1_bg
	this.instance_10 = new lib.sb_sc1bg("synched",0);
	this.instance_10.setTransform(342.65,423.25,1.2224,1.2224,0,0,0,315.6,278.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-256.2,-1033.6,1383.5,2237.3999999999996);


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

	// an_sc3_car_run
	this.instance = new lib.an_sc3carrun("synched",0,false);
	this.instance.setTransform(456.85,951.65,1,1,0,0,0,131.1,201.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// an_line_bottom
	this.instance_1 = new lib.an_linebottom("synched",0,false);
	this.instance_1.setTransform(673.9,900,1,2.622,0,0,0,1.7,143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// an_line_top
	this.instance_2 = new lib.an_linetop("synched",0,false);
	this.instance_2.setTransform(673.9,-72.9,1,5.123,0,0,0,1.7,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	// an_line_blue
	this.instance_3 = new lib.an_lineblue("synched",0,false);
	this.instance_3.setTransform(716.45,5,1,3.1825,0,0,0,5.7,106.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90));

	// an_sc3_tt_TJP
	this.instance_4 = new lib.an_sc3ttTJP("synched",0,false);
	this.instance_4.setTransform(808.25,477.9,1.347,1.347,0,0,0,272.1,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90));

	// an_sc3_tt_LKA
	this.instance_5 = new lib.an_sc3ttLKA("synched",0,false);
	this.instance_5.setTransform(808.7,438.3,1.347,1.347,0,0,0,272.1,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90));

	// an_sc3_tt_ICC
	this.instance_6 = new lib.an_sc3ttICC("synched",0,false);
	this.instance_6.setTransform(746.05,401,1.347,1.347,0,0,0,318.8,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90));

	// an_sc3_tt_safe
	this.instance_7 = new lib.an_sc3ttsafe("synched",0,false);
	this.instance_7.setTransform(776.7,340.2,1.347,1.347,0,0,0,294.4,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(90));

	// an_sc3_tt_porp
	this.instance_8 = new lib.an_sc3ttporp("synched",0,false);
	this.instance_8.setTransform(799.5,295.05,1.347,1.347,0,0,0,277.2,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(90));

	// an_sc2_sharp
	this.instance_9 = new lib.an_sc2sharp("synched",0,false);
	this.instance_9.setTransform(357.55,13.25,1,1.3509,0,0,0,448.7,445.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(90));

	// sc3_bg
	this.instance_10 = new lib.sc3bg();
	this.instance_10.setTransform(139,-173,2.078,2.0779);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147,-1055.9,1322.4,2331.6000000000004);


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

	// an_sc2_car_run
	this.instance = new lib.an_sc2carrun("synched",0,false);
	this.instance.setTransform(92.6,476.2,1,1,0,0,0,410.9,118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// an_line_bottom
	this.instance_1 = new lib.an_linebottom("synched",0,false);
	this.instance_1.setTransform(536.75,727.15,1,2.6083,0,0,0,1.7,143.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// an_line_red
	this.instance_2 = new lib.an_linered("synched",0,false);
	this.instance_2.setTransform(571.2,-231.45,1,2.7321,0,0,0,5.7,116.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	// an_line_top
	this.instance_3 = new lib.an_linetop("synched",0,false);
	this.instance_3.setTransform(536.75,-254.25,1,4.2982,0,0,0,1.7,63.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90));

	// an_sc2_tt_369
	this.instance_4 = new lib.an_sc2tt369("synched",0,false);
	this.instance_4.setTransform(452.15,257.7,1.252,1.252,0,0,0,107.5,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90));

	// an_sc2_tt_239
	this.instance_5 = new lib.an_sc2tt239("synched",0,false);
	this.instance_5.setTransform(399.05,170.35,1.252,1.252,0,0,0,103.2,44.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90));

	// an_sc2_tt_vc
	this.instance_6 = new lib.an_sc2ttvc("synched",0,false);
	this.instance_6.setTransform(588.15,69.4,1.252,1.252,0,0,0,219.5,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90));

	// an_sc2_tt_change
	this.instance_7 = new lib.an_sc2ttchange("synched",0,false);
	this.instance_7.setTransform(592.75,108.65,1.252,1.252,0,0,0,326.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(90));

	// an_sc2_sharp
	this.instance_8 = new lib.an_sc2sharp("synched",0,false);
	this.instance_8.setTransform(217.85,-147.25,1,1.2962,0,0,0,448.7,445.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(90));

	// sb_star
	this.instance_9 = new lib.sb_star("synched",0);
	this.instance_9.setTransform(403.25,198.6,0.1613,0.1613,0,0,0,11.8,11.8);

	this.instance_10 = new lib.sb_star("synched",0);
	this.instance_10.setTransform(395.85,219.45,0.1613,0.1613,0,0,0,11.8,11.8);

	this.instance_11 = new lib.sb_star("synched",0);
	this.instance_11.setTransform(318.9,198.6,0.1613,0.1613,0,0,0,11.8,11.8);

	this.instance_12 = new lib.sb_star("synched",0);
	this.instance_12.setTransform(330.3,176.1,0.1613,0.1613,0,0,0,11.8,11.8);

	this.instance_13 = new lib.sb_star("synched",0);
	this.instance_13.setTransform(325.95,179.9,0.1613,0.1613,0,0,0,11.8,11.8);

	this.instance_14 = new lib.sb_star("synched",0);
	this.instance_14.setTransform(379.1,79.35,0.1613,0.1613,0,0,0,11.8,11.8);

	this.instance_15 = new lib.sb_star("synched",0);
	this.instance_15.setTransform(368.35,95.1,0.1613,0.1613,0,0,0,11.8,11.8);

	this.instance_16 = new lib.sb_star("synched",0);
	this.instance_16.setTransform(274.25,80.35,0.1159,0.1159,0,0,0,11.7,11.7);

	this.instance_17 = new lib.sb_star("synched",0);
	this.instance_17.setTransform(314.05,131.2,0.1159,0.1159,0,0,0,11.7,11.7);

	this.instance_18 = new lib.sb_star("synched",0);
	this.instance_18.setTransform(270.4,137.75,0.1159,0.1159,0,0,0,11.7,11.7);

	this.instance_19 = new lib.sb_star("synched",0);
	this.instance_19.setTransform(145.75,137.75,0.1159,0.1159,0,0,0,11.7,11.7);

	this.instance_20 = new lib.sb_star("synched",0);
	this.instance_20.setTransform(155.3,165.55,0.1159,0.1159,0,0,0,11.7,11.7);

	this.instance_21 = new lib.sb_star("synched",0);
	this.instance_21.setTransform(294.7,286.55,0.1159,0.1159,0,0,0,11.7,11.7);

	this.instance_22 = new lib.sb_star("synched",0);
	this.instance_22.setTransform(114.1,163.4,0.1159,0.1159,0,0,0,11.7,11.7);

	this.instance_23 = new lib.sb_star("synched",0);
	this.instance_23.setTransform(109.95,189.55,0.1159,0.1159,0,0,0,11.7,11.7);

	this.instance_24 = new lib.sb_star("synched",0);
	this.instance_24.setTransform(274.8,210.1,0.1613,0.1613,0,0,0,11.8,11.8);

	this.instance_25 = new lib.sb_star("synched",0);
	this.instance_25.setTransform(134.65,109.75,0.1613,0.1613,0,0,0,11.8,11.8);

	this.instance_26 = new lib.sb_star("synched",0);
	this.instance_26.setTransform(210.65,76.8,0.1613,0.1613,0,0,0,11.8,11.8);

	this.instance_27 = new lib.sb_star("synched",0);
	this.instance_27.setTransform(431.2,184.8,0.1613,0.1613,0,0,0,11.8,11.8);

	this.instance_28 = new lib.sb_star("synched",0);
	this.instance_28.setTransform(334.8,153.3,0.1613,0.1613,0,0,0,11.8,11.8);

	this.instance_29 = new lib.sb_star("synched",0);
	this.instance_29.setTransform(137.1,252.7,0.4424,0.4424,24.5398,0,0,12.5,12.1);

	this.instance_30 = new lib.sb_star("synched",0);
	this.instance_30.setTransform(310.85,72.8,0.4424,0.4424,24.5398,0,0,12.5,12.1);

	this.instance_31 = new lib.sb_star("synched",0);
	this.instance_31.setTransform(221.8,87.9,0.4424,0.4424,24.5398,0,0,12.5,12.1);

	this.instance_32 = new lib.sb_star("synched",0);
	this.instance_32.setTransform(223.9,264.5,0.1159,0.1159,0,0,0,11.7,11.7);

	this.instance_33 = new lib.sb_star("synched",0);
	this.instance_33.setTransform(134.7,261.1,0.1159,0.1159,0,0,0,11.7,11.7);

	this.instance_34 = new lib.sb_star("synched",0);
	this.instance_34.setTransform(212.65,203.65,0.1159,0.1159,0,0,0,11.7,11.7);

	this.instance_35 = new lib.sb_star("synched",0);
	this.instance_35.setTransform(259.15,216.6,0.1613,0.1613,0,0,0,11.8,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(90));

	// sc2_bg
	this.instance_36 = new lib.sc2bg();
	this.instance_36.setTransform(-29,-325,2.2659,2.2662);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-318.3,-1173.3,1319.6,2274);


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

	// an_sc1_car
	this.instance = new lib.an_sc1car("synched",0,false);
	this.instance.setTransform(327.75,392.85,1.1248,1.1248,0,0,0,243.6,80.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({startPosition:99},0).to({_off:true},1).wait(20));

	// an_sc1_altima
	this.instance_1 = new lib.an_sc1altima("synched",0,false);
	this.instance_1.setTransform(313.2,121.15,1,1,0,0,0,201,43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({startPosition:96},0).to({_off:true},1).wait(20));

	// an_sc1_heart
	this.instance_2 = new lib.an_sc1heart("synched",0,false);
	this.instance_2.setTransform(320.25,566.5,1,1,0,0,0,194,12.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).wait(92).to({startPosition:92},0).to({_off:true},1).wait(20));

	// an_sc1_bg
	this.instance_3 = new lib.an_sc1bg("synched",0,false);
	this.instance_3.setTransform(317.5,300.95,1.0791,1.0791,0,0,0,327.4,278.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({startPosition:99},0).to({_off:true},1).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.6,-329.1,684.8000000000001,1319.1);


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
	this.instance.setTransform(223.65,163.25,1,1,0,0,0,37.4,31.3);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.8)",0,2,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(450));

	// scc5
	this.instance_1 = new lib.scc5("synched",0,false);
	this.instance_1.setTransform(318.85,381.85,0.5,0.5,0,0,0,349.4,313.9);
	this.instance_1.alpha = 0.4492;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(360).to({_off:false},0).to({alpha:1,startPosition:6},6).wait(84));

	// sc4
	this.instance_2 = new lib.sc4("synched",0,false);
	this.instance_2.setTransform(318.8,403.85,0.5,0.5,0,0,0,309.3,273.9);
	this.instance_2.alpha = 0.4492;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(270).to({_off:false},0).to({alpha:1,startPosition:7},7).to({_off:true},90).wait(83));

	// sc3
	this.instance_3 = new lib.sc3("synched",0,false);
	this.instance_3.setTransform(301.55,360.1,0.5,0.5,0,0,0,421.8,372.4);
	this.instance_3.alpha = 0.4492;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(180).to({_off:false},0).to({alpha:1,startPosition:7},7).to({_off:true},91).wait(172));

	// sc2
	this.instance_4 = new lib.sc2("synched",0,false);
	this.instance_4.setTransform(315.2,398.9,0.5,0.5,0,0,0,312.1,279);
	this.instance_4.alpha = 0.4492;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90).to({_off:false},0).to({alpha:1,startPosition:9},9).to({_off:true},89).wait(262));

	// sc1
	this.instance_5 = new lib.sc1("synched",0,false);
	this.instance_5.setTransform(318.55,397.85,0.5,0.5,0,0,0,315.8,278.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},100).wait(350));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-354,707.8,1293.6);


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
	this.instance.setTransform(192.4,302.55,1.0032,1.0032,0,0,0,359.9,410.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(900).to({mode:"single",startPosition:449},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-18.6,-164.7,560,997.5999999999999);
// library properties:
lib.properties = {
	id: 'DC4E12B2F79C484B9C0F026D0799EEA0',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/sc1bg.jpg", id:"sc1bg"},
		{src:"images/sc2bg.jpg", id:"sc2bg"},
		{src:"images/sc2car.png", id:"sc2car"},
		{src:"images/sc3bg.jpg", id:"sc3bg"},
		{src:"images/sc3car.png", id:"sc3car"},
		{src:"images/sc4bg.jpg", id:"sc4bg"},
		{src:"images/sc5car.png", id:"sc5car"},
		{src:"images/wheel.png", id:"wheel"}
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
an.compositions['DC4E12B2F79C484B9C0F026D0799EEA0'] = {
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