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



(lib.A1 = function() {
	this.initialize(img.A1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1460,180);


(lib.A2 = function() {
	this.initialize(img.A2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1460,180);


(lib.A3 = function() {
	this.initialize(img.A3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1460,180);


(lib.car1 = function() {
	this.initialize(img.car1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,136);


(lib.car2 = function() {
	this.initialize(img.car2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,110);


(lib.car3 = function() {
	this.initialize(img.car3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,216);


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


(lib.sn_sc3year = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F8ED4F").s().p("AhlCiQA3ghATg/IApAJQgEAOgFAKQAdAUAKAJIgZAgQgIgKgXgSQgXAlgjAXQgRgVgOgJgAApCwQgJgKgHgEQAvgfAMhBIArAGQgEATgFAOQAsAeATASIgdAhQgSgUgigYQgRAfgbATQgFgHgKgJgAi2C+IABlpIBSAAIAGgBIAfARIgSA+QAigSAfgaQAcgbASgbIAuAQIgHAMQAWATAeAQQAfARAeAKQgNAWgGAXQgfgOgZgQIgBAbIh2AAIAAgYQgOAKgaAPQgMgQgRgQIgNAqQAZAlgBAuQAAAogQANQgJAHgMACQgGABgSAAQAAgWgKgUQAIACAIgBQAGAAAEgDQAFgFAAgUQAAgogXggQAJgiALgzIgeAAIAAE+gAAFhgIBWAAQgegUgRgQQgRATgWARgAA4A+IAAhlIBkAAIAABlgABbAeIAcAAIAAglIgcAAgAg7A9IAAhkIBhAAIAABlgAgYAdIAaAAIAAgkIgaAAg");
	this.shape.setTransform(280.15,19.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8ED4F").s().p("AiqCxQgKgIgHgDQANgUAFgfQADgUAAggIAAg+IgTAAIAAg+IAPAAIAAh0ICEABIAABzIARAAIAAA+IgTAAIAACSQAAANgDAHQgDAIgIAFQgMAGgjAAQgCgPgJgUIAbAAQAFAAAAgFIAAglQgVAPgSAKIgKgWQgHAygSAbQgFgFgLgHgAiABlIAxgXIAAgSIgRASQgMgMgTgPgAhPAzIAAghIgwAAIAAAXIAOgOgAiXgNIBdABIAAgRIhdAAgAhdg9IAPAAIAAgmIgPAAgAiFg9IAQAAIAAhBIAnAAIABgQIg4gBgAgZC2IAAgjIAvAAQgEgOgHgQIAagHIgqAAIABhPICtAAIAABPIgvAAIAgAJIgSAcIA0AAIAAAjgAA/CTIAhAAQAKgYADgNIg8AAQALAbADAKgAAkBRIBYAAIAAgVIhYAAgAgUARIAAghIDNAAIAAAigAgOgeIAAiCIAvAAIAAgcIAlAAIAAAcIASAAIAAgcIAmAAIAAAcIA0ABIAACCgAB3g9IAVAAIABgTIgWAAgABGg9IAUAAIAAgTIgUAAgAAVg9IAUAAIAAgTIgUAAgAB3htIAWAAIAAgTIgWAAgABGhtIAUAAIAAgTIgTAAgAAVhtIAUAAIAAgTIgUAAg");
	this.shape_1.setTransform(235.975,19.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8ED4F").s().p("AgaC9IAAg3IidAAIAAgrICdAAIAAgWIh0AAIAAihIB0AAIABgUIiTAAIAAgsICTABIAAghIAwAAIgBAhICXAAIAAAsIiXgBIAAAUIB4AAIAAChIh4AAIAAAWICiAAIAAAsIiigBIAAA3gAAWAfIBHAAIAAgZIhHAAgAhhAfIBHAAIAAgZIhHAAgAAWgdIBHAAIAAgZIhHAAgAhhgdIBHAAIAAgZIhHAAg");
	this.shape_2.setTransform(192.4,19.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8ED4F").s().p("AAwBvQgYhCgJh1IjIgBIAAgvIDGABIgBhDIA0AAQgCAlACAeIBAAAQgOgTgigYIAggaQAkAXASAWIgcAYIAmAAIAAAvIhtAAQAFBaARA7QASA9AWABQAMAAAEhJQAQASAZAKQgFA4gOAUQgNATgeAAQgxAAgbhOgAi5CBIBMgMIAAhiIg8AAIAAguICsABIAAAtIhAAAIAABZIBKgOIAEArIi9Aog");
	this.shape_3.setTransform(149.35,19.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8ED4F").s().p("ABSCnIiXAAQg1AAgbgUQgagSAAgjQAAgeAbghQAnguB3hiIizAAIAAgyID8AAIALgDIAiAaIgIAGQibB3g0AyQgkAjAAAUQAAAaAyAAICiABQAUAAAHgQQAJgRACg1QAUALAdAIQgFBFgVAZQgUAXguAAIgCAAg");
	this.shape_4.setTransform(106,19.8755);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8ED4F").s().p("AgCC+IABhXIi3AAIAAguIBAAAIAAhqIB3ABIAAgxIhXAAQgaAtgdAdQgWgUgUgLQAbgXAXglQAWgjAOgoIAxANIgOAhIDkAAIAAAvIh0gBIAAAxIBqAAIAAAtIhrAAIAAA8ICLAAIAAAvIiLgBIAABXgAhHA5IBGAAIAAg8IhGgBg");
	this.shape_5.setTransform(61.675,19.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8ED4F").s().p("ABZC/IAAgTIi4AAIAAATIgvgBIAAj9IBrAAIAHgZIiaAAIAAgtIBdAAQgKgPgTgWIArgUQAYAYAPAYIgSAJIBcAAQAUgcALgbIA4AMQgUAcgNAQIBbAAIAAAsIiaAAIgMAaIB7AAIgBD9gAheCBIC3ABIAAgcIi3AAgAheBBIC3AAIAAgaIi3AAgAheACIC3ABIAAgYIi3AAg");
	this.shape_6.setTransform(18.275,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(450));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,298.5,38.7);


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

	// Layer_2
	this.instance = new lib.wheel();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:true},1).wait(2).to({_off:false},0).wait(6).to({_off:true},1).wait(3).to({_off:false},0).wait(6).to({_off:true},1).wait(3).to({_off:false},0).wait(6).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(110));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.sb_sc3block = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2C6ACC").s().p("A/wOpIJT9SMA2OAAAIr1dSg");
	this.shape.setTransform(203.3,93.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,406.6,187.5);


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

	// _Image__1
	this.instance = new lib.A3();
	this.instance.setTransform(-483,168,1.1096,1.3559);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(286).to({_off:true},1).wait(163));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-483,168,1620.1,244.10000000000002);


(lib.sb_sc3alt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag+BpIAqABQAHAAAAgFIAAgaIhrAAIAAgWIBrABIAAgPQAWgFAYgIIh/gBIAAgUICgABIAAgBIAGAAIAGgBIARAPQgjASgvANIAAAEIBsAAIAAAVIhsAAIAAAbQAAAJgEAFQgDAFgHACQgLADgpAAQgBgJgIgMgAhUgIIAAg4ICrAAIAAA5gAg7gaIB3AAIAAgUIh3AAgAh1hQIAAgVIBpAAQgEgMgEgIIAagEQAFAMAEAMIBmAAIAAAWg");
	this.shape.setTransform(282,19.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYB2IABjpIBbAAIAACaQABATgKAFQgKAFgeAAQgCgOgFgKQAVABAGgBQAEAAAAgFIABiDIgqAAIAADSgAh0BVQAMgGAAgMIAAi4IBsAAIAACBIhSAAIAAA8IAtgNIgOgZIAVgLQAaAqAKAcIgVANQgGgPgGgLQhIAYgLAHQgCgPgIgLgAhOgJIA6AAIAAghIg6AAgAhOhAIA6AAIAAgfIg6AAg");
	this.shape_1.setTransform(251.65,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABVCVIgRg2IiMAAIgQA1IhKAAQAzikA+iDIBiAAQBBCJAxCfgAg0AiIBkAAQgehRgUgwQgYA4gaBJg");
	this.shape_2.setTransform(220.425,15.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AB7CVQgMiEgPheQgjBkgcBiIhBAAQgchlgihhQgRBlgLB8IhFAAQARirAXh9IBnABQAqCEAGAhQAGgZAsiMIBmAAQAXB3ARCxg");
	this.shape_3.setTransform(181.775,15.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiCUIAAknIBGAAIgBEog");
	this.shape_4.setTransform(152,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjCUIAAjrIhhgBIAAg8IEJABIAAA8IhiAAIAADrg");
	this.shape_5.setTransform(128.775,14.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhpCVIABkoIBHAAIgBDsICMAAIAAA8g");
	this.shape_6.setTransform(106.2,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABVCUIgRg2IiMAAIgQA2IhKAAQAyiiA/iGIBiAAQBBCLAxCegAg0AiIBkABQgahJgYg5QgYA3gaBKg");
	this.shape_7.setTransform(74.575,14.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah4B4IAAgYIBrAAIAAg8IhRAAIAAgaIBRABIAAg2IheAAIAAgZIBxABQgPgSgcgUIAVgOQAdATAVAXIgNAKIBXAAIAAAYIheAAIAAA2IBRAAIAAAZIhRAAIgBA8IBsAAIAAAYg");
	this.shape_8.setTransform(42.675,18.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah+BgQBTgrAZhxIAOACQgCgPgBgRIhCAAIAAgaIBZAAQAACSBvBBQgMAJgJANQhPgwgZhfQgeBihLAtQgIgLgPgKg");
	this.shape_9.setTransform(12.65,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(450));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,294.1,32.2);


(lib.sb_sc3444 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgOBuIAAgrIhcAAIAAgaIBcABIAAgQIAdAAIAAAQIBcAAIAAAaIhcAAIAAAqgAAwADQAGAMADAHIgWAIIgEgLQg/AGgIADQgDgMgFgKIgtAXIgOgWIA7gXIAFAUIgEACQAIgCAMgJQAHgFALgMQgRACgJACIgHgVQAEgCAGgGIAMgRIhQAAIAAgaIBYABIgIgOIAbgGQAIAKAGAKIBUAAIAAAZIhiAAQgHALgJAKIAVgBQAHgIAIgLIAWANQgWAagfAZIAYgBQgFgHgDgFIAUgHIALAQIAQgNQAeAQAQANIgTARQgNgMgZgPgAAsgeQARgNAOgRIAWAOQgKAMgWARgAhkgsIASgPQAYANAMAMIgTARQgJgKgagRg");
	this.shape.setTransform(285.8,11.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAuBtQgBgNgIgQIAjABQAGAAAAgGIABi0IAbAAIAAC0QAAANgDAGQgDAGgHAEQgLAGgbAAIgJgBgAg3BtIAAhUQgTAlgRASQgDgJgLgTQAbgZASgpIgoAAIAAgaIAtAAIAAgdIgnAGQgCgLgGgLQA8gJAigPIATAWQgQAGgXAGIAAAjIAoAAIAAAaIgoAAIAAAMIAoAhIgPAYQgHgJgSgSIAABRgAAXAyIAAiDIAbAAIAACDg");
	this.shape_1.setTransform(261.625,11.8067);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBBJQgXgaAAgvQAAguAWgaQAWgbAsAAQArAAAYAbQAWAaAAAvQAAAugXAaQgZAbgqAAQgqAAgWgbgAgegtQgMARABAdQAAAfAMAQQAKANATAAQARAAAMgNQAOgQAAgfQAAgdgNgRQgMgQgSAAQgTAAgLAQg");
	this.shape_2.setTransform(240.25,11.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA1BcIgMADIgDgMIhcAGIgCgXIArgDIAAgSIg1AAIAABAIgbAAIAAhAIgJAAIAAgWIAJAAIAAgHIAbAAIAAAHIA1ABIAAgKIhBAAIAAhLICeAAIAABLIhDAAIAAAKIBUAAIAAA9QAAAQgKAFQgHAEgWAAQgBgJgEgJgAA+BYIAEAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIAAgnIgXAAQANAWADAUgAANA+IARgBIgFgKIAUgFIgggBgAANgDIAnAAIAAgLIgnAAgAgzgEIAmAAIAAgKIgmAAgAANgfIAnAAIAAgMIgnAAgAgzgfIAmAAIAAgMIgmAAgAAchAIAAgKIgYAAIAAgXIAYAAIAAgMIAbAAIAAAMIAyAAIAAAXIgyAAIAAAKgAg3hAIAAgKIgxAAIAAgXIAyAAIAAgMIAbAAIAAAMIAYAAIAAAXIgYAAIAAAKg");
	this.shape_3.setTransform(218.25,11.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBBjQgpAAgXgaQgXgbAAguQAAguAWgaQAXgbArAAQAsAAAXAbQAWAaAAAvQAAAugXAaQgZAbgpAAIgBgBgAgegtQgLAQAAAeQgBAfANAPQAKAOATAAQASAAALgOQAOgPAAgfQAAgdgNgRQgMgQgSAAQgTAAgLAQg");
	this.shape_4.setTransform(196.2995,11.0005);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhPAmQAAgOAKgMQAIgMANgDQgagQAAgYQAAgbAVgPQAUgNAhgBQAiAAAUAOQAVAPABAbQAAAYgbAQQANADAJAMQAJAMAAAPQAAA9hQAAQhPAAAAg+gAgaAVQgGAHAAAJQAAAMAJAHQAJAHAOAAQAPAAAJgHQAJgHAAgLQABgKgIgHQgIgJgSAAQgQAAgKAJgAgUg5QgIAHAAAJQAAAJAIAHQAIAHAMAAQANAAAJgHQAHgHAAgJQAAgJgHgGQgIgHgOAAIAAAAQgNAAgHAGg");
	this.shape_5.setTransform(176.45,10.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMA+IAAgxIgvAAIAAgYIAvAAIAAgzIAZAAIAAAzIAvAAIAAAYIgvAAIAAAxg");
	this.shape_6.setTransform(156.325,11.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhlBtIAAgaIAuAAQgGgRgNgVIASgIIgiAAIAAgZIBLAAIAAgYIgwAAIAAgLQgLAGgTAHQgFgNgOgNQBPgXAegxIAaAMIgHAKQARAPAbAOQAaANAbAIQgNAOgGAKQgLgDgVgKIAAAOIgwAAIAAAXIBLAAIAAAZIglAAIAYAJIgZAlIAyAAIAAAagAAOBTIAdAAIgPgGQAMgRAJgXIgjAAgAgeBLIgUAIIAjAAIAAguIgkAAQAQAWAFAQgAglglIBOAAQgXgOgSgRQgPAQgWAPg");
	this.shape_7.setTransform(133.775,10.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWBtIAAhPIg+AAIAAgbIA+AAIAAgnIgcAAQgGASgIAMQgHgGgRgHQASgcAKgyIAaAGIgHAcIATAAIAAgsIAdAAIAAAsIAxAAIAAAbIgyAAIAAAnIA9AAIAAAbIg9AAIAABPgAhRBtIAAh1IgOAQQgEgMgLgQQAhgjAUg1IAaAIQgLAbgMAXIAACfg");
	this.shape_8.setTransform(109.975,11.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhpBpIAAijIAaAAIAAgXIgdAAIAAgXIBvAAIAAAXIgcAAIAAAXIAbAAIgBCgIgVAAIAAgMIg/AAIAAAPgAhTBEIA/ABIAAg2IgJAAQgKAAgDgEQgEgEABgLIAAgfIgLAAIAAASQAAAbgPAOQgGgGgGgEgAhTANQAMgLAAgTIAAgSIgMAAgAgegEQAAABAAABQAAAAABABQAAAAAAABQABAAABAAIAEAAIADgBIAAgiIgKAAgAg4g6IAJAAIAAgXIgJAAgAAsBnQgTAAgHgIQgHgIAAgVIAAheIA+AAIAAgvIg/gBIAAgaIBaAAIAABlIg9AAIgBBDQAAAHADACQABACAGAAIAZAAQAGAAACgHQACgGABgYQAJAHAQAEQgDAfgGAKQgHALgSAAgAhNA1IAAgVIAzAAIAAAVg");
	this.shape_9.setTransform(86.75,11.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA1BcIgMADQAAgEgDgIIhcAGIgCgXIArgCIAAgSIg1AAIAABAIgbAAIABhAIgJAAIAAgXIAJAAIAAgGIAaAAIAAAGIA1AAIAAgJIhBgBIAAhKICeABIAABKIhDAAIAAAJIBUABIAAA9QAAARgKAEQgGAEgXAAQgCgKgDgIgAA+BYIAEAAQABAAAAAAQABgBAAAAQABAAAAgBQAAgBAAAAIAAgnIgYAAQANAXAEATgAANA/IARgBIgFgLIATgFIgfAAgAANgEIAnAAIAAgKIgnAAgAgzgEIAmAAIABgKIgnAAgAANgfIAnAAIAAgLIgnAAgAgzgfIAnAAIAAgLIgnAAgAAbhAIAAgKIgXAAIAAgXIAXAAIAAgMIAcAAIAAAMIAyAAIAAAXIgyAAIAAAKgAg3hAIAAgKIgxAAIAAgXIAxAAIAAgMIAcAAIAAAMIAZAAIAAAXIgaAAIAAAKg");
	this.shape_10.setTransform(63,11.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AARBgIAAgiIhqAAIAAgjQAggzBFhHIA4AAQhKBJgfAuIA2AAIAAgpIAtAAIAAApIAcAAIAAAmIgcAAIAAAig");
	this.shape_11.setTransform(35.8,10.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMA+IAAgyIgwAAIAAgXIAwAAIAAgyIAZAAIAAAyIAwAAIAAAYIgxgBIAAAyg");
	this.shape_12.setTransform(15.7,11.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(450));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.7,0,286.90000000000003,22.8);


(lib.sb_car3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// car3
	this.instance = new lib.car3();
	this.instance.setTransform(0,0,1.2841,1.2844);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(435).to({_off:true},1).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,385.2,277.4);


(lib.mo_sc3dragon = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(158.2188,153.3329);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(450));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,316.5,306.7);


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

	// Layer_38
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGBDQgcgYABgrQAAgqAbgYQAbgXArAAQAtABAaAXQAbAXAAAqQAAArgbAYQgbAXgsAAQgsgBgagWgAgggiQgNANAAAVQAAAVANANQANAOAUAAQAUAAAMgOQANgNAAgVQAAgVgNgNQgNgNgUAAQgUAAgMANg");
	this.shape.setTransform(237.5246,14.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2BmIgDALIglAAIAAjlIAyAAIAABDQAZgMAWABQAoAAAZAUQAcAYgBArQAAAqgcAZQgZAXglABQgdAAgegQgAgsgIIAABJQASALAWAAQAUAAANgMQAOgNAAgYQAAgXgNgLQgMgMgUgBQgWAAgUAMg");
	this.shape_1.setTransform(214.1254,11.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag5BYIABirIApAAIAFATQAfgWAlgBIAAAxQgjAAgcAQIgBBug");
	this.shape_2.setTransform(194.4,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYBYQhAAAABhFIAAhqIAyABIAABjQAAAhAeAAQAXAAAVgQIABh0IAyAAIAACqIgpAAIgFgSQghAWgfAAIgCAAg");
	this.shape_3.setTransform(173.8748,14.6256);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZBtIAAitIhIAAIAAgsIDDABIgBArIhHAAIAACtg");
	this.shape_4.setTransform(152.95,12.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhAAYIAAgvICBAAIAAAvg");
	this.shape_5.setTransform(136.425,13.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag6BWQgmgdABg5QAAg2AngfQAjgbA0AAQAjAAAeAKIAAAuQghgKgcAAQgkAAgUARQgUARAAAgQAAAhAWASQATAQAiAAQAZAAAlgKIAAAwQgkAIgeAAQg3AAghgbg");
	this.shape_6.setTransform(117.7747,12.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmBtQgvhkgfh1IA4AAIAUBCQAXBJARAlQAQgnAXhDIAWhFIA5AAQgmB7gsBdg");
	this.shape_7.setTransform(94.15,12.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhMBtIAAjZIA0AAIAACtIBlAAIAAAsg");
	this.shape_8.setTransform(64.525,11.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhKBTQgZgegBg0QAAg1AZgdQAagfAxAAQAxAAAbAfQAZAdAAA1QAAA0gbAeQgcAdgvAAQgvAAgagdgAgigzQgNATAAAhQAAAjAOASQALAPAVAAQAVAAANgPQAPgSAAgjQAAgggOgUQgOgSgUAAQgWAAgMASg");
	this.shape_9.setTransform(41.3,11.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaAaIAAgzIA1AAIAAAzg");
	this.shape_10.setTransform(24.55,20.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhVBuIAAgtQA8ghAbgWQAggZAAgTQAAgggsAAQgfAAgjAKIAAgqQAkgLAuAAQAhAAAWARQAZATAAAlQAAAdgbAaQgWAXguAZIBbAAIAAArg");
	this.shape_11.setTransform(8.625,11.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(149));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,247.4,23.6);


(lib.sb_sc2change = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_37
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpB6QgDgKgFgKIAhABQAGAAAAgFIAAgMIhogBIAAgSIBoAAIAAgNIhYAAIABgSIBXABIAAgNIhNABQAAgIgEgIQBrAAA4gJIAOAPQgfAFgpACIAAAPIBaAAIAAARIhaAAIAAAOIBqAAIAAASIhqAAIAAAMQgBAKgCAEQgDAFgHACQgIADgWAAIgMAAgAA7gWQgWAOgdAIQgEgKgIgJQAbgGAUgMQgIgJgJgOQgHAJgHAGIgPgOQgCAvgGAHQgFAFgKAAQgJABgQgBQgBgHgEgHIgZAAIAAAIIgRAAIAAgmIgLAMQgHgJgHgEQASgQAKgZIATADIgEAJIBOABIgBAMQAagXALglIAVAFQgBAFgGAPIBIAAIAAASIgPAAQgKAZgSASQAWANAZAEQgKALgEAIQgegGgVgRgAhcgzIA2AAIAAAlIACAAQAFAAACgCQAEgFACgnIhAAAgAhRgaIAZAAIAAgNIgZAAgAAmhOQAIAQAOAOQAOgNAHgRIgrAAgAgqhRIAAgoIATAAIAAAMIAiAAIAAARIgiAAIAAALgAhPhUIAAgIIgjAAIAAgRIAjAAIAAgMIAUAAIAAAlg");
	this.shape.setTransform(304.475,12.735);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABOB5IAAjwIAZAAIgBDwgAg+B2QAAgNgJgMIApACQAIAAAEgEQAIgGAFg4IhhAAQAKgrAEgnIBUABIAAglIhcgBIAAgWIBzAAIAABTIhUAAIgHAjIBdAAIgBALQgDAsgEAUQgEAVgHAGQgGAKgQAAIgRABIgZgBg");
	this.shape_1.setTransform(274.65,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah5BnQATgnAAhUIAAhdIDdAAIAAASIjHAAIAABLQAABbgVArQgLgIgJgDgAhUBwIAAgSIBcAAIAAgSIhKAAIAAgSIBKAAIAAgNIAXAAIAAANIBJAAIAAASIhJAAIAAASIBZAAIAAATgAhRAjQAKgMAAgXIAAgeIBYAAIAAA6QAggWAGgmIgiAAIAAgTIAiAAIABglIASAAIAAAlIAqAAIAAATIglAAQANAtAeAOQgIAHgGALQgagPgOglQgJAfggAUQgCgEgJgHQgBAGgHACQgHADgXgBIgFgNIAVAAQAEAAAAgDIAAgLIgwANIgEgJQgCAQgHAJIgSgKgAg0AAIgBAPQAOgDAagHIgkgJIAFgKQAYAFANAFIgEAJIAJgCIAAgTIgygBgAhDgmIAAgwIBPAAIAAAwgAgxgxIAsAAIAAgIIgsAAgAgxhEIAsAAIAAgHIgsAAgABQhPIAOgIQAPAOAGALIgOAJQgJgOgMgMg");
	this.shape_2.setTransform(245.775,12.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABQB7IAAgOIhIAAIAAANIgVAAIAAhnIB1AAIgBBogAAIBbIBIAAIAAgRIhIAAgAAIA4IBIAAIAAgSIhIAAgAhzBAIAegKIABhZIgbAAIAAgXIAbABIAAg9IAWAAIAAA9IAaAAIAAAXIgagBIAABRIAZgKIAEAWQgWAKg0AUgAgaAGIAAhZIAhAAQgHgPgKgOIAVgJQAMAQAHAOIgSAIIAtAAQANgTAIgUIAZAJQgPAYgGAGIAiABIAABYgAA1gKIAqAAIAAg3IgqgBgAgGgKIAoAAIAAg4IgoAAgAA5gWQALgQAHgVIAQAGIgWAkgAgBg2IANgGQANAUAEARIgOAGQgEgRgMgUg");
	this.shape_3.setTransform(216.125,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQB7IAAiDIB9AAIAABsQAAAOgHAFQgGAEgPAAQgBgJgFgMIALAAQABAAABAAQAAAAAAgBQABAAAAAAQAAgBAAgBIAAgjIgRAAIAAA3IgRAAIAAg3IgSAAIAAA3IgRAAIAAg3IgRAAIAAA7gABIAsIASAAIAAggIgRgBgAAlAsIASAAIAAghIgSAAgAADAsIARAAIAAghIgRAAgAhSB7IAAgqIgpAAIAAgVIApAAIAAgTIghAAIAAhfIAhAAIAAgSIgmAAIAAgVIAmAAIAAgbIAWAAIAAAbIAlAAIAAAVIgmAAIAAASIAiAAIAAALQAUgOASgVQAVgWAMgWIASAIIgGAJQAeAjAmAbQgMALgEAIIgTgQIAAAMIhWAAIAAgKIgSAQQgFgJgHgHIAABPIghAAIAAATIAlAAIAAAVIglAAIgBAqgAg+AXIAQAAIAAgWIgQAAgAhhAXIARAAIAAgWIgRAAgAg+gPIAQAAIAAgVIgQAAgAhhgPIARAAIAAgVIgRAAgAANgwIBEAAQgVgUgPgTQgQAWgQARg");
	this.shape_4.setTransform(187.7,12.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA5BjIAgABQAFAAAAgEIABhgIhxAAIAAB5IgYAAIABiNIAXAAIAAhdIBzABIAABcIAVAAIAAB0QAAARgLAFQgJADgiAAQgBgJgGgNgAAsgUIAeAAIAAgfIgeAAgAADgUIAVAAIAAgyIAyAAIAAgVIhHAAgAhuBnQAagrASgqIATAPQgVAwgUAlgAAABcIAAhMIBLAAIAABAIg3AAIAAAMgAAUA+IAjAAIAAgbIgjAAgAh1gfIANgTQAeALARAOIgOAVQgQgOgegNgAhohnIAOgSQAfANAQAOIgPAVQgQgQgegOg");
	this.shape_5.setTransform(157.725,12.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAmB4QgUgBgIgIQgHgJAAgYIAAjFIAaAAIAABRIBEAAIAAAYIhEAAIAABcQgBAMACADQADADAIAAIAkAAQAJAAADgKQACgIABgdQAJAHAPAEQgDAigHAMQgHAOgTAAgAhzBhQAMgIAAgOIAAjCIAaABIAABPIA/AAIAAAZIg/AAIAABhIBBgQQAAALADAMQhXAXgHAFQgFgNgHgIg");
	this.shape_6.setTransform(129.65,12.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKB7IAAhcIgLAPQgHgKgGgGIABgCIgLAFIgBgHQg8AKgGAEQgDgOgEgHQAHgBAMgRQAIgIALgTQgbAEgGADIgHgVQAGgBAIgNQATgbANgnIAUAJQgRAogUAbIAXgBQAKgRAJgUIASALQgaAzgdAiIAkgGIgKgXIAQgGQAMAXAEAUQAVggAKgxIAVAFIgBAHIBjAAIAAAUIgmgBIgHAYIAoAAIAAB+IgWAAIAAgLIgvAAIAAAMIgVAAIABh/IAbAAIAEgYIglAAIAAgSQgEAPgJAVIAACFgAAwBbIAvAAIAAgdIgvAAgAAwArIAwAAIAAgcIgwAAgAh5BuQAJgYACgkIATADQgFAogIAYQgEgCgNgFgAhSA0IARgDQAFAYACAfIgSAFQAAgTgGgmgAg2AvIAQgFQAJAaAGAYIgRAGQgEgWgKgdgAgagyIABguIA/AAIgKgSIAUgIQAKANAFAOIA6AAIAAApIgXAAIAAgUIhlgBIAAAZg");
	this.shape_7.setTransform(99.325,12.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah5BnQATgnAAhUIAAhdIDdAAIAAATIjHgBIAABLQAABbgWArQgHgGgMgFgAhUBxIAAgTIBbAAIAAgSIhJAAIAAgSIBKAAIAAgNIAXAAIAAANIBJAAIAAASIhJAAIAAASIBZAAIAAATgAhRAjQAJgLAAgYIABgeIBXAAIAAA6QAhgWAGgmIgiAAIAAgTIAiAAIAAglIATAAIAAAlIAqAAIAAATIglAAQAMAsAfAPQgKAKgEAIQgagPgOglQgKAfgfAUQgDgFgIgGQgBAGgHADQgGACgYAAQgBgFgEgJIAVABQABAAABgBQAAAAABAAQAAgBABAAQAAgBAAgBIAAgLIgwANIgEgJQgCAQgIAJQgEgDgNgHgAg1APIAogJQgLgFgZgFIAFgJQAUADARAGIgFAJIAKgCIAAgTIgyAAgAhDgmIAAgwIBPAAIAAAwgAgxgxIAsAAIAAgIIgsAAgAgxhDIAsAAIAAgIIgsAAgABPhPIAOgIQAPANAHAMIgPAJQgIgNgNgNg");
	this.shape_8.setTransform(70.075,12.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah5BoQA0gFArgJQgWgLgSgOQgSAOgVAJQgGgLgIgIQAygSAUgfIAVAGIgIALICTABIAAASIgjAAQgRAUgcANQAlAKA2AEQgHAIgFAMQg9gFgvgRQgrAQhFAHQgEgMgHgIgAACBRQAcgLAQgOIhdAAQASANAfAMgAh4AaQAFgPACgYIAQADQgDAZgGATgAAoAWQADgNADgXIAQAEQgDAWgFASgAhZgKIAOgDQAFARABATIgQADQAAgPgEgVgABGgLIAPgDQAFASAAATIgPADQABgRgGgUgABggOIANgDQAIATACASIgOAEQgCgOgHgYgAgiAWIAAgvIBEAAIAAAwgAgTAIIAlAAIAAgSIglAAgAhAgLIANgFQAFAPAEARIgOAFQgCgNgGgTgABngcQgzAGgGAEIgGgSQAGAAAKgKQAFgEAKgNQgXACgDADQgDgMgDgFQAFgCAGgGQAPgRAIgVIASAFQgMAWgOASIASgCQAJgKAFgJIAQAHQgVAfgUAUIAbgDIgGgPIAPgEQAKAXACAQIgPAEgAg4gbQg0AHgEACIgGgRQAGAAAKgKQAHgGAKgMQgXACgFADIgFgRQAFgCAFgGQARgWAHgRIASAGQgMAWgOASIATgCIANgTIARAIQgVAdgXAXIAbgDIgFgPIAOgEQAKAWACAPIgPAEgAgjgkIAAgPIBGABIAAAOgAgjg9IAAgNIBGAAIAAANgAgphUIAAgPIAiAAIgIgSIARgGQAIAOADAKIAcAAIAAAPg");
	this.shape_9.setTransform(41.025,12.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAEBWIAwABQAIAAAAgIIAAimIixAAIAAgZIDrAAIAAAZIggAAIAACoQAAAWgPAFQgNAFgsAAQgCgLgIgQgAhcBDIABh3IBsAAIAABjIhVAAIAAAUgAhEAXIA+AAIAAg0Ig+AAg");
	this.shape_10.setTransform(11.825,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(149));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,316.9,25);


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

	// _Image__1
	this.instance = new lib.A2();
	this.instance.setTransform(-507,223,1.1044,1.1044);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(141).to({_off:true},1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-507,223,1612.5,198.8);


(lib.mo_sc22t239 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AjrEEQBmgOBdgwQBng3AxhNQgUASgvARQgxASgnAAQhxAAg7hEQg4g+AOhhQANhiBPhFQBVhLB3AAQBzAAA7BGQA9BIgRB8QgZCviSB4QiHBvjHAdgAhhjaQgzApgJBDQgKBFAqAoQAnAkBDAAQBFAAAzgnQA0gpAJhCQAJhBgjgoQglgqhLAAQhHAAgyAog");
	this.shape.setTransform(153.6782,35.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkXE1IANhfQCFAnBCAAQDBAAAUiFQALhIhEgaQgugRhyAAIgvAAIAJhBIDqjDIlFAAIANhZIHTAAIgKBHIj0DIQBiACA7ApQBLAzgOBkQgPBthZA7QhUA4iEAAQhQAAh7gkg");
	this.shape_1.setTransform(89.075,35.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkQFZIAMhVQC0h1BThEQCZh8ALhSQAIg4gegfQgigkhSAAQhZAAhyAzIAOhhQBvgsBmAAQBzAAA6A3QA6A3gOBeQgOBph9ByQhbBTiZBdIFUAAIgMBag");
	this.shape_2.setTransform(27.2774,34.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhBBcIAAi0IAQAAIAEAMQAVgPAZAAQAcAAASASQATARAAAgQAAAfgVAUQgTARgbAAQgXABgSgLIAAA6gAgqg3IAABCQAQAMAWAAQAVAAANgOQAMgMAAgVQAAgTgLgNQgNgOgVAAQgWAAgRAPg");
	this.shape_3.setTransform(205.6364,65.2164,0.8053,0.8053);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAoBYIAAhPQAAgRgGgHQgIgIgUAAQgMAAgNAGQgLAEgJAHIAABeIgXAAIAAivIAXAAIAAA6QAYgQAaAAQAaAAANALQANAMAAAbIAABTg");
	this.shape_4.setTransform(192.1685,61.4921,0.8053,0.8053);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhWBQQBCgmAGhLIhBAAIAAgPIBCAAIAAgqIAPAAIAAAqIBVAAIgBAIQgDA+gEAZQgEAbgGAHQgGAHgMABIghAAQAAgJgFgHQAOACASgBQAHAAADgCQAKgKAGhfIhGAAQgCAlgOAbQgTAkgoAYQgEgHgIgEg");
	this.shape_5.setTransform(211.1505,43.2573,0.8197,0.8197);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAoBVQgBgIgEgFQALABANAAQAFAAACgCQAGgFADgrIiLAAIAAhsICOAAIAAANIhCAAIAAATIA7AAIAAAMIg7AAIAAAUIA7AAIAAAMIg7AAIAAATIBPAAIgBAGQgDA4gIAIQgEAFgJABIgJAAIgRgBgAgxAKIAwAAIAAgTIgwAAgAgxgVIAwAAIAAgUIgwAAgAgxg1IAwAAIAAgTIgwAAgAhaBNQARgPAFgfIAOAEQgHAjgRAOgAgmAmIANgCQAGATABAUIgOADQAAgUgGgUgAgDAlIALgDQAJAQAEATIgNADQgCgQgJgTgAAdAiIALgFQANAPAFAMIgMAFQgEgMgNgPg");
	this.shape_6.setTransform(193.63,43.6016,0.8197,0.8197);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc22t239, new cjs.Rectangle(0,0,218.3,72.7), null);


(lib.mo_sc2welcome = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("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QgDADgBAKIAIgGQgJAQgCAIgAHUgpIgTAsIAMgOIANgjgAIDh1IgdA8IAIAAIAFAFIAGgFIACADIANguQACgHgEgLgANuh1QgIAAgDADIAFACIACAGIgQAQIAHAHIATgtgAIXinQgDAEgMAgIAFAAIARgaQAGgKACgLQgOAIgBADgAOAisIgBAHIgMAGIAIAAIgDACIAGAAIALgdgAIJjHIAIAAIgHANIADAAIAHgTIgFABIABgGgAEtj0QACAHgBAMIAJAKIgBglgAnekoIAEAFIAYASIAMgIIgbgfQgDAGgKAKgApWo8QgJAEgMAKIAcgHQAQgGAOgIIAKgLQgQAEgHAEIgRALIAEgIIgLAHgAIXLDIA5gJIgBADIg2ALgAHJK8QgTALgbAAQALgFAjgGgAI/LDIAagDIAAACIAwgIIAVgDIADACIgWAJQgMACguABIAFgDQgJADgPAAgALMK2IASAAIgqALQgKADgSAAgAL9K2IANACIgfAGIg2AGgAj+K2IgCAAIAZgDQgJADgIAAIgGAAgAkwKxIATgDIAkAFIgHADQgbgEgVgBgAD4IfIAIgBQAGgGACgFQACgFACgSQAAgUgDgPQgCgHADgDIAJAQIAFADIgCAIIADACIAEAFIANAAIgSAQQAAACgGAGIADAAIAMgNIAQgDQALAAACACIgOAGIgCgFIgFAAIgKAKIgDAGIAGgDIACADQgJAAgDACIgZATgABtHxIADgSIAAACQAKgSAGgtIgFAAIABgNQAGADALgGIADgFIACACQAAAFgKASQgKATgDALIAGgFIgDAaIgMAbgABdHfIgCgDIAHgIIgCgFIACADIAFgQIALgDQgDANgQAdIAFADIgLAAgAB+HZIAIAAIgBADgABCHEIAFABIgEAIgABlFrIgBAPQgEAXgMAcQAFgeAMgkgApQE4IgBAKIgGAFgAs4CAIgHAIIgHAFIAOgNgAGuBFIALgbIgGAegAsrASQAGgQAFglIACAGIAGgGIAJgFQgBAIgIAIQgHAIgCAIIAGAAQgNANgCAUIgGAFQACgDADgJgAsIgOIAFgVIgMALQAEgYAAgPIABgRQAEAAACAPQADAPgDAHIAHADIADAAIADACQABAEgGAKIAJgMIgKATIAAgFIgJAIgAElgcIACgHIAEAHIgDADgAryhlIgHgCIAJgLIAHAFIAPgiQgEAhgEALIgQAmQgEgPAEgZgAGdtsIgVglIAMALQAMAaAJANgABGu/IABgFIAJAIg");
	this.shape.setTransform(111.825,99.4583);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(149));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223.7,198.9);


(lib.mo_sc2t3369 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ai5DOQBQgLBKgmQBRgrAng+QgQAOglAOQgnAOgfAAQhZAAgug1QgtgxALhMQALhOA+g3QBEg7BdAAQBaAAAvA3QAxA6gOBhQgTCKh0BeQhqBYidAXgAhMisQgoAggIA2QgHA3AhAfQAeAcA1AAQA3AAAogfQApggAHg0QAHg0gbgfQgdgig8AAQg4AAgnAgg");
	this.shape.setTransform(136.338,27.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguAoIAMhPIBRAAIgLBPg");
	this.shape_1.setTransform(100.425,50.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AinDcQgxg5AOhhQATiLB0hdQBqhWCegXIgKBHQhSALhIAlQhRAqgnA9QAQgOAlgNQAmgOAfAAQBaAAAuA1QAsAwgLBNQgLBOg+A3QhDA7hdAAQhbAAgvg4gAhPACQgoAhgHAzQgHA0AbAgQAeAiA7AAQA3AAAoggQAoghAIg2QAHg3ghgeQgegdg1AAQg4AAgoAfg");
	this.shape_2.setTransform(70.9292,27.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjcD0IAKhKQBqAeAzAAQCZAAAQhpQAIg5g1gUQglgOhaAAIglAAIAIgzIC4iaIkBAAIAKhGIFxAAIgHA4IjCCeQBOACAvAgQA7AngLBPQgMBXhGAuQhCAshoAAQhDAAhegcg");
	this.shape_3.setTransform(22.125,28.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABDA2IAAg/QgBgPgFgFQgFgGgOAAQgPAAgTANIABBMIgRAAIAAg/QAAgPgFgFQgFgGgOAAQgRAAgQANIAABMIgTAAIAAhpIANAAIAEAMQATgOAUAAQAaAAAHAQQAVgQAUAAQAUAAAJAJQAKAJAAAXIAABCg");
	this.shape_4.setTransform(198.349,45.9829,0.8504,0.8504);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghAJIAAgRIBDAAIAAARg");
	this.shape_5.setTransform(186.2516,45.2175,0.8504,0.8504);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtBCIAAgSQAaAKATAAQAjAAAAgaIAAgGQgOAIgTAAQgWAAgQgNQgQgPgBgZQABgZAQgQQAQgOAXAAQAUAAAPAKIABgIIAOAAIAABkQABAvg2AAQgXAAgWgJgAgVgwQgMAKAAATQAAASAMAJQAKAJAQAAQAQAAAOgJIAAg4QgOgKgQAAQgPAAgLAKg");
	this.shape_6.setTransform(176.833,47.8113,0.8504,0.8504);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBHQgZgegbgZQAWgbAZgXIAcAAQgjAdgRAUQALAKAWAVQASATAEAGgAgxBHIAAiNIASAAIAACNg");
	this.shape_7.setTransform(167.3932,44.5159,0.8504,0.8504);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhFBAQA1gfAFg7Ig1AAIAAgMIA1AAIAAgjIAMAAIAAAjIBFAAIgBAGQgCAxgDAVQgDAVgGAGQgFAGgJABIgbgBQAAgGgDgGIAaABQAEAAADgCQAIgIAFhMIg4AAQgCAdgLAWQgPAdghAUQgDgGgGgEg");
	this.shape_8.setTransform(183.6395,29.0159,0.8596,0.8596);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhCBJIgDgKIARAAQAAAAABAAQABgBAAAAQAAAAABgBQAAgBAAAAIAAgsIgXAHIgDgMIAagGIAAgiIgYAAIAAgLIAYAAIAAggIAMAAIAAAgIAUAAIAAALIgUAAIAAAeIATgEIAAgEIAXAAIADgrIgUAAIAAgLIBJAAIgBA2IAQAAIAAAKIgQAAIgDA1IATAAIAAALIhhAAIAAgLIAVAAIAEg1IgUAAIAAAEIgVAGIAAAvQAAAJgGACQgFACgNAAIgFAAgAALA4IAiAAIADg1IggAAgAARgHIAgAAIABgrIgeAAg");
	this.shape_9.setTransform(168.9623,28.9766,0.8596,0.8596);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc2t3369, new cjs.Rectangle(0,0,205.6,55.5), null);


(lib.mo_sc2spring = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("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DIAOADIAEgIIAGAAIgDADIAMgDIgBADQAQgGANgIQALgGAKgDQARgMAogLIAggJIgDABIASgDIADgDIAMABIgTAIIAXAAIgHAJIgCgGIgOAAIACADIgiAOIAGADIgHAGIAvgRQARgGADgDIgCgDIAKgFIgJgDIAbgDIgIgDQAMgLAHgDIAAADIAMgDIAGgGIADAAIAHgIIADADIAlgPIgJgDQAEABARgGIADADQAJAEAMABIAYABIgFgDQAFgEAFACQAHABAKgEIAAADIgSACIgCAJQAHgDANAGQAUAKAIACQAQgEAHABIARAGQgDgDACgIIAOADIAJAOIgBgLIARAAIACgJQAigRARAVQAQAIANAyQARBCAEAJIgDAAIAGADIgEAGIAIAGIAEAJIgGAAIAJADIgHAFQAJAAACADQARAnAAALQAAAFgMAdIADAAQgMAMgKAEQgTAHgZAOIgGgCIgQAOIAFgPIgJAAIgFgGIAKgIIAHgJIgDAAIgDAGIgHADIACgJIgggEQgWgCgKAFQgKAEgJABIgaAEIAHgGIAEgJQgGADgOACQgRABgLADIgCgDQgWgBgcAGIAGgDIgXAAIADgDIgugCQgTgCgNAAQgFAAgLADQgNAEgVABQgXACgJgBIgEgBQAEABADgBQAEgBAFgFQAFAGAGgBIAPgBIgOgGIAVgDIgLgDQADgDAMAAIAGgDQggADgUAAIgEADIASgDIgBAGQgNgCgJABQgMABgoANQAMgKArgJIgDgDIgOAAIACADIgDACIgCgFIgXAEQgTAFgfANQgcAJgPAGIgSAIIg6ANIADADIAmgFIADAAIgMAGIgEAFIgJAAIA1ANIBkAPIgSADIAgADIgKAGIAIADIgPAFQAOAFAlACIAPAGQANAFAaABQAdgCAVABIAfACIgBAFIgqAJIAFAFIAvgFQgJAEgIAAIgwAEIADACQAIAAADADQABACAOABIAkADQAiABAZgLQAUgJAIAEICkAbQBMANAYAOQAyAYAOAAIANAJIABgGQARAGAIgDIAOAXIgOARIgLAAIACADIgXgDIgGAGIgYAFIgEAJQgJADgoAIIAGADIAegIIgZALIAJAAQgLAOgOgFIAEgGIgcAFQgFABgDgCIAdgGIAFgEIgXgDIgXAAQgWACg/AIQg/AJgNAEIgFAEQBNgKARAAIAdAAQ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");
	this.shape.setTransform(110.225,118.0375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(149));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220.5,236.1);


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

	// logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA8BXIiBiBIAACBIgmAAIAAitIAxAAICACBIAAiBIAmAAIAACtg");
	this.shape.setTransform(138.825,62.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhpBXIAAgkICiAAQAPgDAAgOQAAgPgQgDIhqAAIgRgBQgUgDgMgPQgLgOAAgRQAAgVANgNQAMgOATgDIAPgBICWAAIAAAkIiTAAQgJAAgCAAQgMAEAAAMQAAAMAMACIALABIBzABQAUACANAQQALAOAAATQAAAVgLAOQgNARgXACg");
	this.shape_1.setTransform(52.625,62.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhpBXIAAgkICiAAQAPgDAAgOQAAgPgQgDIhrAAIgQgBQgUgDgMgPQgLgOAAgRQAAgVANgNQAMgOATgDIAPgBICWAAIAAAkIiUAAQgIAAgDAAQgLAEAAAMQAAAMALACIAMABIByABQAVACAMAQQAMAOAAATQAAAVgMAOQgNARgWACg");
	this.shape_2.setTransform(81.55,62.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABSBXIgTgfIh+AAIgTAfIguAAIBsitIAoAAIBtCtgAAsAXIgshFIgrBFIBXAAg");
	this.shape_3.setTransform(110,62.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA7BXIiAiBIAACBIgmAAIAAitIAxAAICACBIAAiBIAmAAIAACtg");
	this.shape_4.setTransform(10.825,62.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSBXIAAitIAlAAIAACtg");
	this.shape_5.setTransform(32.075,62.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AlPB7QiahihMiiIgEgGQgLgXgJgIQgOgOgegDIhHgIIAAgVICqAAIABACQA6CqCTBoQCUBpC0AAQC1AACThpQCUhoA6iqIABgCICqAAIAAAVIhHAIQgdADgPAOQgJAJgLAWIgEAGQhMCiiaBjQibBhi1AAQi0AAibhig");
	this.shape_6.setTransform(74.85,103.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AIXDdIgBgCQg6iqiUhoQiThpi1AAQi0AAiUBpQiTBog6CqIgBACIiqAAIAAgUIBHgJQAegDAOgOQAKgJAKgWIAEgGQBMijCahhQCbhiC0AAQC1AACbBiQCaBhBMCjIAEAGQALAWAJAJQAPAOAdADIBHAJIAAAUg");
	this.shape_7.setTransform(74.85,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(450));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,149.7,125.3);


(lib.sb_sharp = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.486,1],-71.7,0,71.7,0).s().p("ArMbHMAAAg2NIWZAAMAAAA2Ng");
	this.shape.setTransform(72.3713,173.8019,1,1,-0.2238);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144.8,347.6);


(lib.sb_sc1tt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E7E7E7").s().p("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");
	this.shape.setTransform(165,40.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,330,81.3);


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

	// _Image__1
	this.instance = new lib.A1();
	this.instance.setTransform(-495,218,1.125,1.125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-495,218,1642.6,202.5);


(lib.sb_car1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.car1();
	this.instance.setTransform(0,0,1.4512,1.4512);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,580.5,197.4);


(lib.mo_sc1bless = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("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NNIgGgSIADAAIAGAPIAEAAIgHgPIADAAIAEAMIAKAAIACgSIgLgVIgHAGIADAPIgMAAIgCgGIABgDIgHAAIACASQABAEAHAIIAGADgACoNKQgEgEgJgvIAIgJIgCAMIAGAAIAEAMIgHADIAFAGIAKAAIgCgXQgBgCgEgFIAGgQQAEAGgBADIABAQIADADQgBACAEAMQAEAPABANIAKAAIADgGQgGgOgCgFQgEgRAFgcQAPgzADgSIgKAGIADADIgHADIAEgGIgJAAQABgHABgCIALgKQgKADgOADQgQADgCgCIgEAGIgVAMIAIgJIAEgDIgcAPIADADIgOAJIADAAIgBAVIAMAGIgFAGIAIAKIAAAGIgHgDQgBAHAIAdIAJAhIAZAAIAAAAgADWM4IAJADIALhPIAHgHQAEgIANgxIgKAAIACAGIgLANIgHAGIACAAQgCASgFADIgCgDIAEgDIgJgDIgBAGIgHAGIACADIgDADIACAGIADAAIgDALQgDAHgDAMIAIgJIgBAJIgHADQADAEgCAEIgEAIIADAPIAFgDgAHRMBIgIAJIACAGIgIAGIAKAAIgHADIgMAPIgMADIASAAIAEgJIAOgDIAKgLQAEgGAHgTIACAJIAGgDIANgQIgCgIQAAgFAFgLIgIgDIAKgGIgGAAIAEgDIgBgJQAHgHAMAEIABgJQAEAFgOATIAagJIgHAAIgBgJIAHgDIgCAJIAHgDIgEgMIAKgGIgBAJIAIAGIgKAGQAMAAANgGIgJAAIAKgDIAJgNQADgGACgMIAIgGIgGgGIASADIgGAHIgDALQAUgMAEAAIgLAJIAJAAQAHgFABgDIAZglIgGAAIAIgJIAFADIARgKIAYgbIgVAJIgEAGIgGAAIACAGIgLAJIgCgGIgHAHIgPAHQgKAFgFAAQAIgEACgFIAGgKIAKgGIATgSIAGgDIASgbQgGgCgGgFIgLgIIgDADIACAGIgJgDIACADIgJADIAFAJIgSgGIgEADIAPAGIgBAGIgZgDIAFAJIAAADQgPgEgCgIIgEADIAGAGIAMASIgMgDIgCgGIgPgGIgEgGQgNAAgFgDQADAMAGAGIgSgDIACAGIgHAHIgRAnIAHAAIgIADIAHAAQgGAPgNAZIACADIgKAGIAFgMIAEgEIgGgDIAVhCIgDgDQgEAMgFADQgDgEACgEIALg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");
	this.shape.setTransform(133.15,114.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc1bless, new cjs.Rectangle(0,0,266.3,229), null);


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


(lib.sb_sc3dragon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mo_sc3_dragon
	this.instance = new lib.mo_sc3dragon();
	this.instance.setTransform(158.2,153.3,1,1,0,0,0,158.2,153.3);
	this.instance.compositeOperation = "overlay";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(151).to({_off:true},1).wait(298));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,316.5,306.7);


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
	this.instance.setTransform(70.7,70.7,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90,startPosition:9},7).to({rotation:180,startPosition:19},7).to({rotation:270,startPosition:29},7).to({regY:50.1,rotation:355.2833,y:70.8,startPosition:39},7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.2,141.1,141.10000000000002);


(lib.an_sc3444 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_444
	this.instance = new lib.sb_sc3444("synched",0);
	this.instance.setTransform(505.8,11.3,1,1,0,0,0,148.2,11.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:148.2,alpha:1,startPosition:10},10,cjs.Ease.cubicOut).to({startPosition:282},272).to({_off:true},1).wait(167));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.7,0,644.5,22.8);


(lib.an_sc3year = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sn_sc3_year
	this.instance = new lib.sn_sc3year("synched",0);
	this.instance.setTransform(495.25,19.4,1,1,0,0,0,149.2,19.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:149.2,alpha:1,startPosition:10},10,cjs.Ease.cubicOut).to({startPosition:284},274).to({_off:true},1).wait(165));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,644.5,38.7);


(lib.an_sc3dragon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_dragon
	this.instance = new lib.sb_sc3dragon("synched",0);
	this.instance.setTransform(170.4,175,0.5055,0.5055,22.2112,0,0,158.3,153.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:158.2,scaleX:1,scaleY:1,rotation:0,x:170.35,y:174.95,alpha:1,startPosition:7},7,cjs.Ease.cubicOut).wait(145));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.2,21.7,316.40000000000003,306.6);


(lib.an_sc3block = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_block_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A/wfXIJT9TMA2OAAAIr1dTg");
	var mask_graphics_284 = new cjs.Graphics().p("A/wfXIJT9TMA2OAAAIr1dTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:203.3,y:200.675}).wait(284).to({graphics:mask_graphics_284,x:203.3,y:200.675}).wait(1).to({graphics:null,x:0,y:0}).wait(165));

	// Layer_2
	this.instance = new lib.sb_sharp("synched",0);
	this.instance.setTransform(-107.85,248.2,1.8853,1.7963,17.958,0,0,72.4,173.8);
	this.instance.alpha = 0.6484;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).wait(1).to({rotation:17.9581,x:-41.95,y:253.35,alpha:0.6402,startPosition:1},0).wait(1).to({rotation:17.9583,x:22.8,y:258.45,alpha:0.6321,startPosition:2},0).wait(1).to({rotation:17.9584,x:85.2,y:263.3,alpha:0.6243,startPosition:3},0).wait(1).to({scaleY:1.7962,rotation:17.9585,x:144.25,y:267.9,alpha:0.6169,startPosition:4},0).wait(1).to({rotation:17.9586,x:199.15,y:272.15,alpha:0.61,startPosition:5},0).wait(1).to({rotation:17.9587,x:249.4,y:276.1,alpha:0.6037,startPosition:6},0).wait(1).to({rotation:17.9588,x:294.8,y:279.65,alpha:0.598,startPosition:7},0).wait(1).to({rotation:17.9589,x:335.45,y:282.85,alpha:0.593,startPosition:8},0).wait(1).to({rotation:17.959,x:371.7,y:285.65,alpha:0.5884,startPosition:9},0).wait(1).to({rotation:17.9591,x:403.8,y:288.15,alpha:0.5844,startPosition:10},0).wait(1).to({x:432.25,y:290.4,alpha:0.5808,startPosition:11},0).wait(1).to({rotation:17.9592,x:457.35,y:292.35,alpha:0.5777,startPosition:12},0).wait(1).to({x:479.55,y:294.1,alpha:0.5749,startPosition:13},0).wait(1).to({rotation:17.9593,x:499.1,y:295.6,alpha:0.5725,startPosition:14},0).wait(1).to({scaleX:1.8852,x:516.4,y:296.95,alpha:0.5703,startPosition:15},0).wait(1).to({scaleX:1.8853,rotation:17.9591,x:531.8,y:298.15,alpha:0.5437,startPosition:16},0).wait(1).to({rotation:17.9589,x:545.35,y:299.2,alpha:0.5203,startPosition:17},0).wait(1).to({rotation:17.9588,x:557.25,y:300.1,alpha:0.4997,startPosition:18},0).wait(1).to({rotation:17.9586,x:567.6,y:300.9,alpha:0.4818,startPosition:19},0).wait(1).to({rotation:17.9585,x:576.65,y:301.6,alpha:0.4662,startPosition:20},0).wait(1).to({scaleY:1.7963,rotation:17.9584,x:584.5,y:302.25,alpha:0.4526,startPosition:21},0).wait(1).to({rotation:17.9583,x:591.25,y:302.75,alpha:0.441,startPosition:22},0).wait(1).to({rotation:17.9582,x:597,y:303.2,alpha:0.431,startPosition:23},0).wait(1).to({x:601.85,y:303.55,alpha:0.4227,startPosition:24},0).wait(1).to({rotation:17.9581,x:605.85,y:303.85,alpha:0.4157,startPosition:25},0).wait(1).to({x:609.1,y:304.1,alpha:0.4101,startPosition:26},0).wait(1).to({rotation:17.958,x:611.65,y:304.3,alpha:0.4057,startPosition:27},0).wait(1).to({x:613.55,y:304.45,alpha:0.4024,startPosition:28},0).wait(1).to({x:614.85,y:304.55,alpha:0.4002,startPosition:29},0).wait(1).to({x:615.65,y:304.6,alpha:0.3989,startPosition:0},0).wait(1).to({x:615.9,alpha:0.3984,startPosition:11},0).to({startPosition:8},237).to({_off:true},1).wait(165));

	// sb_sc3_block
	this.instance_1 = new lib.sb_sc3block("synched",0);
	this.instance_1.setTransform(360.95,307.65,0.2245,1,0,0,0,203.3,93.8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,x:203.3,alpha:0.8203},7,cjs.Ease.cubicOut).to({startPosition:0},277).to({_off:true},1).wait(165));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,213.8,406.6,187.59999999999997);


(lib.an_sc3alt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_alt
	this.instance = new lib.sb_sc3alt("synched",0);
	this.instance.setTransform(147.1,16.1,1,1,0,0,0,147.1,16.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:25.85,alpha:1,startPosition:10},10).to({startPosition:284},274).to({_off:true},1).wait(165));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,294.1,42);


(lib.an_car3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_car3
	this.instance = new lib.sb_car3("synched",0);
	this.instance.setTransform(192.6,104.25,0.756,0.756,0,0,0,192.6,104.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,y:104.2,alpha:1},14,cjs.Ease.cubicOut).to({startPosition:272},272).to({_off:true},1).wait(163));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,385.3,277.5);


(lib.sb_sc22t239 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mo_sc22_t_239
	this.instance = new lib.mo_sc22t239();
	this.instance.setTransform(109.1,36.3,1,1,0,0,0,109.1,36.3);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.498)",1,1,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,232,86);


(lib.sb_sc2welcome = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mo_sc2_welcome
	this.instance = new lib.mo_sc2welcome();
	this.instance.setTransform(111.8,99.5,1,1,0,0,0,111.8,99.5);
	this.instance.alpha = 0.6992;
	this.instance.compositeOperation = "overlay";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:true},1).wait(4).to({_off:false},0).wait(136));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223.7,198.9);


(lib.sb_sc2t3369 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mo_sc2_t_3369
	this.instance = new lib.mo_sc2t3369();
	this.instance.setTransform(102.8,27.7,1,1,0,0,0,102.8,27.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.498)",1,1,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,219,69);


(lib.sb_sc2spring = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mo_sc2_spring
	this.instance = new lib.mo_sc2spring();
	this.instance.setTransform(110.2,118,1,1,0,0,0,110.2,118);
	this.instance.alpha = 0.6992;
	this.instance.compositeOperation = "overlay";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(149));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220.5,236.1);


(lib.sb_car2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.an_wheel("synched",14);
	this.instance.setTransform(130.6,148.35,0.9741,0.9741,0,0,0,70.8,70.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({startPosition:28},0).to({_off:true},1).wait(134));

	// an_wheel
	this.instance_1 = new lib.an_wheel("synched",14);
	this.instance_1.setTransform(533.4,148.35,0.9741,0.9741,0,0,0,70.8,70.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({startPosition:28},0).to({_off:true},1).wait(134));

	// _Image_
	this.instance_2 = new lib.car2();
	this.instance_2.setTransform(0,0,1.8087,1.8086);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:true},1).wait(134));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,723.5,217);


(lib.an_sc2welcome = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_welcome
	this.instance = new lib.sb_sc2welcome("synched",0);
	this.instance.setTransform(124.9,118.3,0.6089,0.6089,-14.9982,0,0,111.8,99.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:99.5,scaleX:1,scaleY:1,rotation:0,x:124.85,y:118.25,alpha:1,startPosition:13},9,cjs.Ease.cubicOut).to({startPosition:145},132).to({_off:true},1).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.1,18.7,223.6,199);


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
	this.instance = new lib.sb_sc2vc("synched",0);
	this.instance.setTransform(507.8,11.8,1,1,0,0,0,123.7,11.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:123.7,alpha:1,startPosition:15},15,cjs.Ease.cubicOut).to({startPosition:141},126).to({_off:true},1).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,631.5,23.6);


(lib.an_sc2t3369 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_t_3369
	this.instance = new lib.sb_sc2t3369("synched",0);
	this.instance.setTransform(405.2,28.2,1,1,0,0,0,107,28.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:107,alpha:1},14,cjs.Ease.cubicOut).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,517.2,69);


(lib.an_sc2t239 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc22_t_239
	this.instance = new lib.sb_sc22t239("synched",0);
	this.instance.setTransform(474,41.1,1,1,0,0,0,112.6,35.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:112.6,y:35.2,alpha:1},14,cjs.Ease.cubicOut).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,593.4,92.9);


(lib.an_sc2spring = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_spring
	this.instance = new lib.sb_sc2spring("synched",0);
	this.instance.setTransform(110.45,151.7,0.5489,0.5489,22.9984,0,0,110.4,118.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:110.2,regY:118,scaleX:1,scaleY:1,rotation:0,x:110.35,y:151.6,alpha:1,startPosition:14},8,cjs.Ease.cubicOut).to({startPosition:146},132).to({_off:true},1).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,33.6,220.5,236.1);


(lib.an_sc2change = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sb_sc2change("synched",0);
	this.instance.setTransform(542.5,12.5,1,1,0,0,0,158.4,12.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:158.4,alpha:1,startPosition:15},15,cjs.Ease.cubicOut).to({startPosition:139},124).to({_off:true},1).wait(22));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,701,25);


(lib.an_car2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_car2
	this.instance = new lib.sb_car2("synched",0);
	this.instance.setTransform(361.8,100,1,1,0,0,0,361.8,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:936.75,mode:"single",startPosition:14},14,cjs.Ease.cubicOut).to({startPosition:14},127).to({_off:true},1).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1298.5,217);


(lib.an_car1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_car1
	this.instance = new lib.sb_car1("synched",0);
	this.instance.setTransform(798.5,98.5,1,1,0,0,0,290.2,98.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:883.9,alpha:1},14,cjs.Ease.cubicOut).to({startPosition:0},115).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(508.3,0,665.9000000000001,197.4);


(lib.sb_sc1bless = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mo_sc1_bless
	this.instance = new lib.mo_sc1bless();
	this.instance.setTransform(133.2,114.5,1,1,0,0,0,133.2,114.5);
	this.instance.compositeOperation = "overlay";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,266.3,229);


(lib.mo_sc1tt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc1_tt
	this.instance = new lib.sb_sc1tt("synched",0);
	this.instance.setTransform(165,40.6,1,1,0,0,0,165,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc1tt, new cjs.Rectangle(0,0,330,81.3), null);


(lib.box_sc1tt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mo_sc1_tt
	this.instance = new lib.mo_sc1tt();
	this.instance.setTransform(165,40.6,1,1,0,0,0,165,40.6);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.8)",0,0,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-22,378,129);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},10).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},10).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},55).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[]},1).wait(77));

	// Layer_5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D2088").s().p("A0SEFICDoJMAmiAAAIiDIJg");
	this.shape_4.setTransform(9.95,-1.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(10).to({_off:true},1).wait(10).to({_off:false},0).wait(2).to({_off:true},1).wait(1).to({_off:false},0).wait(2).to({_off:true},1).wait(9).to({_off:false},0).wait(55).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(77));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.9,-27.6,259.8,52.2);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},5).to({startPosition:21},11).to({regX:0.1,regY:0.1,scaleX:0.7876,scaleY:0.7876,x:0.1,y:0.1,startPosition:25},3).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0,startPosition:21},3).to({regX:0.1,regY:0.1,scaleX:0.7876,scaleY:0.7876,x:0.1,y:0.1,startPosition:25},3).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0,startPosition:37},3).to({mode:"single",startPosition:102},56).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.9,-27.6,259.8,52.2);


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

	// an_sc5_btn
	this.instance = new lib.an_sc5btn("synched",0,false);
	this.instance.setTransform(671.5,521.55,1.1217,1.1217);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).wait(86).to({startPosition:86},0).to({_off:true},1).wait(187));

	// an_car3
	this.instance_1 = new lib.an_car3("synched",0,false);
	this.instance_1.setTransform(-278.4,229.7,0.7615,0.7615,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({startPosition:99},0).to({_off:true},1).wait(187));

	// an_sc3_444
	this.instance_2 = new lib.an_sc3444("synched",0,false);
	this.instance_2.setTransform(553,348.8,1.3803,1.3803,0,0,0,148.2,11.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(95).to({startPosition:95},0).to({_off:true},1).wait(187));

	// an_sc3_year
	this.instance_3 = new lib.an_sc3year("synched",0,false);
	this.instance_3.setTransform(751.95,296.15,1.0904,1.0904,0,0,0,322.4,19.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).wait(97).to({startPosition:97},0).to({_off:true},1).wait(187));

	// an_sc3_alt
	this.instance_4 = new lib.an_sc3alt("synched",0,false);
	this.instance_4.setTransform(164.25,311.65,1.0155,1.0155,0,0,0,147.1,21.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).wait(97).to({startPosition:97},0).to({_off:true},1).wait(187));

	// an_sc3_block
	this.instance_5 = new lib.an_sc3block("synched",0,false);
	this.instance_5.setTransform(586.5,312.5,1.4802,0.7082,180,0,0,206.6,317.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).wait(97).to({startPosition:97},0).to({_off:true},1).wait(187));

	// an_sc3_dragon
	this.instance_6 = new lib.an_sc3dragon("synched",0,false);
	this.instance_6.setTransform(65.05,295.35,0.7155,0.7155,0,0,0,160.6,172);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(99).to({startPosition:99},0).to({_off:true},1).wait(187));

	// sb_sc3_bg
	this.instance_7 = new lib.sb_sc3bg("synched",0);
	this.instance_7.setTransform(129.65,85.25,0.8413,3.0209,0,0,180,332.7,293.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(99).to({startPosition:99},0).to({_off:true},1).wait(187));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-547,-294.1,1798.4,843.3000000000001);


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

	// an_sc2_change
	this.instance = new lib.an_sc2change("synched",0,false);
	this.instance.setTransform(886.55,297.7,1.068,1.068,0,0,0,350.5,12.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(119).to({startPosition:119},0).to({_off:true},1).wait(20));

	// an_sc2_vc
	this.instance_1 = new lib.an_sc2vc("synched",0,false);
	this.instance_1.setTransform(826.5,262.45,1.068,1.068,0,0,0,315.8,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(121).to({startPosition:121},0).to({_off:true},1).wait(20));

	// an_sc2_t_239
	this.instance_2 = new lib.an_sc2t239("synched",0,false);
	this.instance_2.setTransform(670.05,365.05,0.901,0.901,0,0,0,293.4,38.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).wait(111).to({startPosition:29},0).to({_off:true},1).wait(20));

	// an_sc2_t_3369
	this.instance_3 = new lib.an_sc2t3369("synched",0,false);
	this.instance_3.setTransform(895.05,361.45,1.0915,1.0915,0,0,0,256.1,28.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).wait(109).to({startPosition:29},0).to({_off:true},1).wait(20));

	// an_car2
	this.instance_4 = new lib.an_car2("synched",0,false);
	this.instance_4.setTransform(-128,334.35,0.844,0.844,0,0,0,649.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(121).to({startPosition:121},0).to({_off:true},1).wait(20));

	// an_sc2_spring
	this.instance_5 = new lib.an_sc2spring("synched",0,false);
	this.instance_5.setTransform(442.3,286.4,0.6918,0.6918,0,0,0,112.4,143.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).wait(120).to({startPosition:120},0).to({_off:true},1).wait(20));

	// an_sc2_welcome
	this.instance_6 = new lib.an_sc2welcome("synched",0,false);
	this.instance_6.setTransform(316.7,263.25,0.6918,0.6918,0,0,0,127.8,111);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(121).to({startPosition:121},0).to({_off:true},1).wait(20));

	// sb_sc2_bg
	this.instance_7 = new lib.sb_sc2bg("synched",0);
	this.instance_7.setTransform(442.3,292.7,1,1,0,0,0,331.3,292.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(121).to({startPosition:121},0).to({_off:true},1).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-675.8,199.3,1936.6,233.7);


(lib.ansc1tt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc1_tt (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(176,76.625);

	// sb_sharp
	this.instance = new lib.sb_sharp("synched",0);
	this.instance.setTransform(-134.1,15.7,1.6949,1.3059,44.9995,0,0,72.4,173.6);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({x:560.95,y:157.1,startPosition:9},9).wait(13));

	// box_sc1_tt
	this.instance_1 = new lib.box_sc1tt("synched",0);
	this.instance_1.setTransform(187,62.6,1,1,0,0,0,165,40.6);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:112.6,alpha:1},8,cjs.Ease.cubicOut).to({startPosition:0},21).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,378,179.9);


(lib.an_sc1bless = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc1_bless
	this.instance = new lib.sb_sc1bless("synched",0);
	this.instance.setTransform(144.25,141.55,0.5618,0.5618,14.998,0,0,133.3,114.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:133.2,scaleX:1,scaleY:1,rotation:0,x:144.2,y:141.45,alpha:1},7,cjs.Ease.cubicOut).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11,27,266.3,228.9);


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

	// an_sc1_tt
	this.instance = new lib.ansc1tt("synched",0,false);
	this.instance.setTransform(593.4,296.85,1,1,0,0,0,189,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(77).to({startPosition:29},0).to({_off:true},1).wait(70));

	// an_car1
	this.instance_1 = new lib.an_car1("synched",0,false);
	this.instance_1.setTransform(-248.6,336.35,0.8555,0.8555,0,0,0,587,98.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(73).to({startPosition:73},0).to({_off:true},1).wait(70));

	// an_sc1_bless
	this.instance_2 = new lib.an_sc1bless("synched",0,false);
	this.instance_2.setTransform(305.5,308.85,0.802,0.802,0,0,0,154.8,136.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(77).to({startPosition:29},0).to({_off:true},1).wait(70));

	// sb_sc1_bg
	this.instance_3 = new lib.sb_sc1bg("synched",0);
	this.instance_3.setTransform(-32.95,300.85,1.171,1.171,0,0,0,337.4,298.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(77).to({startPosition:0},0).to({_off:true},1).wait(70));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1007.6,206.9,1923.4,237.29999999999998);


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
	this.instance.setTransform(148.4,227.05,0.4937,0.4937,0,0,0,74.9,62.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.698)",0,3,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(299));

	// sc3
	this.instance_1 = new lib.sc3("synched",0);
	this.instance_1.setTransform(500.45,221.75,0.5,0.5,0,0,0,339.3,294.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(199).to({_off:false},0).wait(100));

	// sc2
	this.instance_2 = new lib.scc2("synched",0,false);
	this.instance_2.setTransform(480.85,217.1,0.5,0.5,0,0,0,386.8,292.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(77).to({_off:false},0).to({_off:true},122).wait(100));

	// sc1
	this.instance_3 = new lib.sc1("synched",0,false);
	this.instance_3.setTransform(494.95,221,0.5,0.5,0,0,0,344,298.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},78).wait(221));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.9,-72.3,1137.4,421.6);


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
	this.instance.setTransform(202.45,1.2,0.5066,0.5066,0,0,0,494.4,184.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(598).to({mode:"single",startPosition:298},0).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("A6jldMA1HAAAIAAK7Mg1HAAAg");
	this.shape.setTransform(160,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A6jFeIAAq7MA1HAAAIAAK7g");
	this.shape_1.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(599));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(20.3,-104,416.2,188.6);
// library properties:
lib.properties = {
	id: '0B4F4742C5E74B2486FA4C3377358580',
	width: 320,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/A1.jpg", id:"A1"},
		{src:"images/A2.jpg", id:"A2"},
		{src:"images/A3.jpg", id:"A3"},
		{src:"images/car1.png", id:"car1"},
		{src:"images/car2.png", id:"car2"},
		{src:"images/car3.png", id:"car3"},
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
an.compositions['0B4F4742C5E74B2486FA4C3377358580'] = {
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