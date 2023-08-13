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



(lib.circle = function() {
	this.initialize(img.circle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,337,231);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,219);


(lib.sc1bg = function() {
	this.initialize(img.sc1bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,335,304);


(lib.sc1car1 = function() {
	this.initialize(img.sc1car1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,134);


(lib.sc2bg = function() {
	this.initialize(img.sc2bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,251);


(lib.sc2car = function() {
	this.initialize(img.sc2car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,124);


(lib.sc3bg = function() {
	this.initialize(img.sc3bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,251);


(lib.sc3car1 = function() {
	this.initialize(img.sc3car1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,179);


(lib.sc4bg = function() {
	this.initialize(img.sc4bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.sc4car = function() {
	this.initialize(img.sc4car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,151);// helper functions:

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


(lib.sh_framewhite = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// wh
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9E9E9").s().p("A790TMAq/gK0MAM8AzbMgrAAK0gA5FxiMAKMAojMAnYgJ6MgKMgoig");
	this.shape.setTransform(72.2167,86.2765,0.5079,0.5079,14.1928);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144.4,172.6);


(lib.Rectangle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#00F3E8","#2EA6DF","#036EB7"],[0,0.337,1],0,97.4,0,-12.3).s().p("A72GSQgfAAgXgWQgWgWAAggIAAqLQAAggAWgWQAXgWAfAAMA3tAAAQAfAAAXAWQAWAWAAAgIAAKLQAAAggWAWQgXAWgfAAg");
	this.shape.setTransform(185.9,40.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle, new cjs.Rectangle(0,0,371.8,80.5), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#FFF11F","#FCED55","#FBCC00","#F0932E","#E4352B"],[0,0.012,0.365,0.698,1],248.3,0,-135.2,0).s().p("A99EcIDRo3MA4qAAAIjSI3g");
	this.shape.setTransform(200.5,37.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(8.7,8.9,383.6,56.9), null);


(lib.sb_sc4_t = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#6E6E6E").s().p("AhtCMIAAkXIDYAAIAAA4IiVAAIAAA2ICHAAIAAA1IiHAAIAAA7ICYAAIAAA5g");
	this.shape.setTransform(118.725,-16.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6E6E6E").s().p("ABACMIiAi8IAAC8IhCAAIAAkXIBNAAIB2CvIAAivIBCAAIAAEXg");
	this.shape_1.setTransform(88.6,-16.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E6E6E").s().p("AhoBwQgugnAAhLQAAhEAxgoQAqgiA7AAQA8AAArAiQAwAoAABEQAABLgvAnQgoAhhAAAQhAAAgoghgAg4g/QgYAXAAAnQAAArAaAZQAWATAgABQAhgBAWgTQAagYAAgsQAAgngYgXQgWgWgjABQgigBgWAWg");
	this.shape_2.setTransform(55.675,-16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6E6E6E").s().p("AggCMIAAjfIhcAAIAAg4ID5AAIAAA4IhcAAIAADfg");
	this.shape_3.setTransform(27.025,-16.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6E6E6E").s().p("AhoBwQgugnAAhLQAAhEAxgoQAqgiA7AAQA8AAArAiQAwAoAABEQAABLgvAnQgoAhhAAAQhAAAgoghgAg4g/QgYAXAAAnQAAArAaAZQAWATAgABQAhgBAWgTQAagYAAgsQAAgngYgXQgWgWgjABQgigBgWAWg");
	this.shape_4.setTransform(-13.075,-16.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6E6E6E").s().p("AAuCMQgehfgQhAQgJAlgmB6IhaAAQgkiOgaiJIBDAAQAQBvAaBkQAnhrAQhCIBIAAQAPA+AnBvQAahkAQhvIBCAAQgXCFglCSg");
	this.shape_5.setTransform(-49.75,-16.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6E6E6E").s().p("AggCMIAAjfIhcAAIAAg4ID5AAIAAA4IhcAAIAADfg");
	this.shape_6.setTransform(-83.325,-16.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(30));

	// Layer_7
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6E6E6E").s().p("AAnB4IAAh+IgvAAIAAgYIAvAAIAAhSIAZAAIAABSIAzAAIAAAYIgzAAIAAB+gAhmB0IAAhXIBUAAIAABMIg/AAIAAALgAhRBVIAqAAIAAglIgqAAgAhnAMIAAgRIBUAAIAAARgAhngVIAAgSIBVAAIAAASgAhyg3IAAgTIAwAAQgIgTgLgQIATgKQANAVAGANIgSALIA6AAIAAATg");
	this.shape_7.setTransform(119.725,18.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6E6E6E").s().p("AgdBlIAAAEIg5AAIAAALIgVAAIAAhXIBOAAIAABFQAdgIAXgPQgXgYgNgdIANgFIgWAAIAAgWIBsAAIAEgBIAPAGQgMAsggAfQAZAPAhAHQgIAIgHAOQghgIgdgUQgbATgiAKQgGgNgEgGgAhWBVIAkAAIAAglIgkAAgAAqA9QAUgTANgZIhDAAQALAYAXAUgAhrANIAAgSIBOAAIAAASgAgegbIAAAGIhNAAIAAgSIBNAAIAAALQAfgRAAgjIAAgcIBSAAIAAA6IAAAIQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAIAOAAQAHAAAEgCIACAVQgEABgJAAIgQAAQgOAAgFgHQgFgGAAgSIAAgjIglAAIAAAGQAAAwgmAWQgHgKgIgHgAh2g3IAAgTIAuAAQgGgPgNgUIATgKQAPAXAFALIgTALIA0AAIAAATg");
	this.shape_8.setTransform(89.775,18.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6E6E6E").s().p("AA0BQIASgNQAhARASAPIgTAPQgQgPgigTgAgwBgQAngNAVgRIATANQgYAUgoAOQgFgIgKgJgAh2BSQAYABAHgBQAGAAgBgFIAAiiIgnAAIAAgXIBdAAIAAAXIgeAAIAACiQAAATgLAFQgJAEghAAQgBgLgGgMgAgPA/IAAiFIAoAAQAEgOABgIIg2AAIAAgVICMAAIAAAVIg7AAIgIAWIA7AAIAACFgAAGAtIBOAAIAAgVIhOAAgAAGAHIBOAAIAAgVIhOAAgAAGgfIBOAAIAAgVIhOAAg");
	this.shape_9.setTransform(60,19.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6E6E6E").s().p("AgNB3IAAglIhmAAIAAgVIBmAAIAAgSIhMAAIAAhlIBMAAIAAgQIhfAAIAAgWIBfAAIAAgWIAYAAIAAAWIBgAAIAAAWIhgAAIAAAQIBOAAIAABlIhOAAIAAASIBpAAIAAAVIhpAAIAAAlgAALAXIA2AAIAAgWIg2AAgAhCAXIA1AAIAAgWIg1AAgAALgQIA2AAIAAgWIg2AAgAhCgQIA1AAIAAgWIg1AAg");
	this.shape_10.setTransform(30.025,18.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6E6E6E").s().p("Ah4BoQAegTAQglIgUAAQgLAAgEADQgDgJgFgLQAHgCAFgFQAGgFAPgTIgfAAIAAgSIAwAAIAFgDIAPAIQgWAagPAQIAWAAIADgBIAMAGQgFAQgJASQALARAYAHQATAEAkAAQAxAAArgDQgFAHgCANQgiACgzAAQgoABgVgGQgZgHgNgTQgPAWgTAPQgFgJgLgIgAAYBcIAAgOIg9AAIAAgNIA9AAIAAgLIgvAAIAAgNIAvAAIAAgKIgyAAIAAgOIAyAAIAAgOIAWAAIAAAOIAyAAIAAAOIgyAAIAAAKIAuAAIAAANIguAAIAAALIA9AAIAAANIg9AAIAAAOgAgzAAQAlgDAigLIgggKQgMAHgJAEQgFgIgJgGQAggMARgUIgOgMQAYgUALgdIAWAGIgFALIBMAAIAAATIgyAAQAIAHAJALIgRANQgHgKgOgOIALgHIgbAAIgOASIAOADIgJAMIA9AAIADgBIANAHQgMAQgTANIAvAQIgJAPQgQgHgrgOQgjAOg0AIQgCgJgHgHgAADgjIAoAMQAQgJAHgGIg8AAgAhogzIAUgIQALAKANARIgVAJQgGgLgRgRgAhChNIAKgIIgVAAQgLAPgPANQgHgKgJgGQAagTANgcIAVAHIgFAKIA9AAIAAASIgsAAQAOAOAFAHIgQAOQgHgLgPgQg");
	this.shape_11.setTransform(0.25,18.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6E6E6E").s().p("AAABmQgBAHgFADQgGADgYAAQgBgJgFgLIAUAAQAAAAABAAQABAAAAgBQABAAAAgBQAAgBAAgBIAAhxIhJAAIAACMIgUAAIAAigIAtAAIAAhMIAWAAIAABMIAvAAIAAAaQAVgjAJhDIAYADQgFAagFATIBFAAIAAAXIgPAAQgJA9gTAmQATAhAdAPQgLAHgFAMQgbgQgSgdQgTAbgcASQgDgFgJgMgAACBbIgBAGQAbgQATgdQgNgbgJgjQgGAMgIAKIgJgLgAAoguQAHApAMAfQANggAFgpIglAAgAhQBQIAAhVIAxAAIAABIIgiAAIAAANgAhBAzIATAAIAAgpIgTAAgAgjg2QAOgcAGgcIAXAIQgLAdgMAagAh3hkIAUgIQAQAdAFAYIgVAIQgEgYgQgdg");
	this.shape_12.setTransform(-29.3,18.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6E6E6E").s().p("AgMBnQAcgNAPgTIAVANQgUAWgdANQgIgLgHgFgAA9BUIASgMQAdATAOAOIgTANQgOgPgcgTgAh4BjQAogRAIggIgsAAIAAgUIAtAAIAAgXIAUAAIAAAXIAZAAIgPgSIANgJQAMALAHAKIgJAGIAPAAIAAAUIgxAAQAAAFgBAEQAfATAOAMIgOARQgNgMgZgRQgOAYghAOQgFgIgIgJgAAGBEIAAiGIAfAAIAEgVIgrAAIAAgVIB3AAIAAAVIgyAAIgIAVIAxAAIAACGgAAcAxIA5AAIAAgVIg5AAgAAcALIA5AAIAAgUIg5AAgAAcgbIA5AAIAAgUIg5AAgAh5gCQAUgMAMgYIAPAGQgNAfgTANQgJgKgGgEgAgvgbIAMgJIASAMIAQAOIgOAOQgLgNgVgSgAhGACIAAguIgtAAIAAgUIAtAAIAAg2IAVAAIAAA2IAsAAIAAAUIgsAAIAAAugAgphNQAHgLAHgVIAUAGIgRAggAhvhnIAQgHQANASADANIgSAHQgDgOgLgRg");
	this.shape_13.setTransform(-59.5,19.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6E6E6E").s().p("AgdB1QghAAgMgIQgMgIAAgZIAAhmIgTAPIgNgXQAYgOAUgVQAXgXAMgYIAWAIIgJAOIBAAAIAFgBIAQALQgTAagOAOIBEAAIAABdIgYAAIAAgKIiFAAIAAAlQAAAMAGAEQAHADAVAAIBdAAQATAAAGgHQAFgHACgZQAIAFAPADQgEAggKAKQgLALgdAAgAAOAQIA4AAIAAgmIg4AAgAg/AQIA3AAIAAgmIg3AAgAhCgsIBAAAQANgNAKgPIg+AAQgKAOgPAOg");
	this.shape_14.setTransform(-89.375,18.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6E6E6E").s().p("AhyBhQA0gEAngMQgbgNgUgXIAHgCIgkAAIAAgUICqAAIAEgBIARAKQgUAdgjATQAlAKAsAEQgIAIgHAPQg5gHgpgPQguASg/AGQgEgNgGgJgAAGBHQAdgMARgQIheAAQAUAQAcAMgAAQAJIAAg9IgMAPIgJgNIAAAEIgYAAIAAAMIAYAAIAAAQIgYAAIAAAMIAfAAIABAPIhgAAIAAg9IgMANQgDgIgJgJQAYgWAOgoIATAGIgKAWIAaAAQgEgMgGgJIAUgGQAIAPAEAMIAWAAIAAAQIgdAAIAAAMIAYAAIAAAFQAXgaALgjIAUAGIgKAWIAaAAQgFgNgFgHIAUgGQAIAPAEALIAaAAIAAARIghAAIAAAMIAcAAIAAAPIgcAAIAAANIAcAAIAAAPIgcAAIAAAMIAlAAIAAAPgAAlgGIAXAAIAAgMIgXAAgAhIgGIAYAAIAAgMIgYAAgAAlghIAXAAIAAgNIgXAAgAhIgiIAYAAIAAgMIgYAAgAAlg9IAXAAIAAgMIgXAAgAhIg+IAYAAIAAgMIgYAAg");
	this.shape_15.setTransform(-119.45,18.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.2,-31,262.5,62);


(lib.sb_sc4_car = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sc4_car
	this.instance = new lib.sc4car();
	this.instance.setTransform(-346,-146,1.9202,1.9201);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-346,-146,691.3,290);


(lib.sb_sc3_tech = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#6E6E6E").s().p("AAmBUQgfAXgnALQgGgNgHgIQAlgJAdgUQgZgdgOgnIADAAIgKAAIAAgVIA0AAIAAgkIg5AAIAAgXIA5AAIAAgmIAYAAIAAAmIA8AAIAAAXIg8AAIAAAkIAlAAIAEgBIAQAFQgQA0gjAiQAbAUAkAJQgIAJgHAMQgmgKgdgZgAAnA0QAagXAMgdIhJAAQANAeAWAWgAhzBgQATABAHgBQAEAAAAgFIAAg+IgcAIIgGgWIAigJIAAgzIgfAAIAAgWIAfAAIAAgzIAYAAIAAAzIAbAAIAAAWIgbAAIAAAtIAbgHIACAWIgdAIIAABEQAAASgKAFQgJAEgcAAQgCgMgFgKg");
	this.shape.setTransform(89.25,0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6E6E6E").s().p("ABBB3IAAg+IhRANIgDgXIBUgOIAAiXIAYAAIAACTIAcgFIAEAXIggAFIAABDgAhLB3IAAhpQgQAngRAVQgDgIgJgOQAYgcARgvIgmAAIAAgXIAqAAIAAgiIghAFQgCgKgFgJQA3gJAbgMIAPAUQgMAEgWAGIAAAnIAkAAIAAAXIgkAAIAAAEQAPAPAUAZIgOATQgIgQgNgSIAABxgAgKgUIAPgOQAfAVANAPIgQAPQgOgRgdgUgAAAhXIAPgOQAaARAOATIgQAPQgMgQgbgVg");
	this.shape_1.setTransform(59.3,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E6E6E").s().p("AhsBwIAAgWIBfAAIAAgmIhGAAIAAgVIBGAAIAAgiIg6AAIAAgVQgRAMgQAJQgHgMgJgIQAygWAqgsIgpAAIAAgWIBRAAQARAaAeAXQAeAXAgANQgKAKgHAMQgRgIgQgMIAAAVIg7AAIAAAiIBGAAIAAAVIhGAAIAAAmIBiAAIAAAWgAhGgZICLAAQgmgZgfgnQgcAjgqAdg");
	this.shape_2.setTransform(29.55,0.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6E6E6E").s().p("AhuBhQBCgIAhgVQghgOgkgLQAMgTAKgQIg2AAIAAgXIBDAAQALgUAIgWIAbAFQgGASgKATIA2AAIAEgYIAdADIgDAVIArAAIAAAXIgyAAQgJAegSAXQAuATAdASIgSAWQgdgTgvgVQglAdhKALQgFgKgKgNgAgqAgIAzASQAQgQAIgaIg8AAgABRgiIAAggIiiAAIAAAgIgZAAIAAg3IBfAAIgLgYIAZgGIAPAeIBZAAIAAA3g");
	this.shape_3.setTransform(-0.3,-0.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6E6E6E").s().p("AgOBlIAEgEIhmALIgDgUIA2gFIAAgUIgvAAIAAgRIAvAAIAAgNIguAAIAAhOIAuAAIAAgNIg1AAIAAgSIA1AAIAAgOIguACQgBgJgFgIQBJgEAmgJIALASQgSAEgeAEIAAAQIA0AAIAAAPIAbAAIAAg3IAXAAIAAA3IA1AAIAAALQgCBSgDAfQgCAhgGAIQgGAJgNADQgNABgTgBQgBgOgGgJIAcABQAFAAAEgEQAIgKACh3IgeAAQgDA5gMAiQgOArgfAYQgFgKgLgIgAgnBRIAwgFQAPgVAHgeQAGgZACgnIgcAAIAAgTIgyAAIAAANIAvAAIAABOIgvAAIAAANIAwAAIAAARIgwAAgAgnARIAcAAIAAgQIgcAAgAhYARIAbAAIAAgQIgbAAgAgngNIAcAAIAAgQIgcAAgAhYgNIAbAAIAAgQIgbAAg");
	this.shape_4.setTransform(-30.425,0.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6E6E6E").s().p("AhUB3IAAhgQgMAOgOANQgFgQgFgHQAlgdAWgyIg3AAIAAgVIArAAQgGgNgNgWIASgKQAPAWAGANIgSAKIAWAAIAEgBIALAJQgHAYgVAhIAAACIAHAGQALgMAIgMIANANQgOAOgJAIIATAWIgNATIgWghIAABkgAgPBjQAegKAVgTQgWgcgMgmQgDBMgfAlQgGgIgMgHQAfglAAhOIAAhFIA2AAIAAgkIAWAAIAAAkIApAAIADAAIARADQgKAngHAPIgUgEQAFgMAEgTIghAAIAAAqIAhAAIAEgBIAOAGQgLAwgdAjQAXASAfAJQgIAIgHANQgggLgXgVQgXAUgfAMQgEgKgJgJgAA0A1QATgXAKgcIg6AAQAJAcAUAXgAACgSIAhAAIAAgqIghAAg");
	this.shape_5.setTransform(-60.05,0.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6E6E6E").s().p("AhyBzIAAgYIBlAAIAAg5IhNAAIAAgYIBNAAIAAgyIhZAAIAAgYIBsAAQgRgTgYgRIAUgOQAeAVARAUIgNAJIBTAAIAAAYIhZAAIAAAyIBOAAIAAAYIhOAAIAAA5IBmAAIAAAYg");
	this.shape_6.setTransform(-89.775,-0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},21).to({state:[]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.2,-12.1,202.5,24.2);


(lib.sb_sc3_NIM39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// MergedLayer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E6E6E").s().p("AhgCRIAAg8QAvAEAagFQAngIAagdQgSAOgjAAQgzAAgegdQgcgcAAgsQAAgwAggcQAggcA2AAQA3AAAgAcQAkAgAAA+QAABKgxAsQg1AxhlAAIgOAAgAgohJQgMANAAAUQAAAUAMAOQAOAOAaAAQAZAAAOgMQAOgNAAgYQAAgXgNgMQgOgNgZAAQgaAAgPAQg");
	this.shape.setTransform(43.475,-0.589);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6E6E6E").s().p("AhvCBIAAg4QA3AOAlAAQAcAAARgLQASgLAAgUQAAgYgWgJQgTgIgxAAIgEAAIAAgZIBFhBIh/AAIAAg4IDWAAIAAAuIhCBAQAbAGAVATQAYAWAAAeQAABih/AAQgoAAg4gOg");
	this.shape_1.setTransform(16.375,-0.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E6E6E").s().p("AB0CMQgMiAgOhVQglBqgWBRIg+AAQgWhRgkhqQgPBYgLB9IhBAAQAQilAWhyIBgAAQApCBAFAbQAHggAoh8IBgAAQAWByAQClg");
	this.shape_2.setTransform(-27.375,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6E6E6E").s().p("AggCMIAAkXIBBAAIAAEXg");
	this.shape_3.setTransform(-53.325,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6E6E6E").s().p("ABBCMIiCi8IAAC8IhBAAIAAkXIBNAAIB3CuIAAiuIBBAAIAAEXg");
	this.shape_4.setTransform(-75.75,-0.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6E6E6E").s().p("AA1BQIASgNQAgARAUAPIgTAPQgSgPghgTgAgwBhQAngNAVgSIAUANQgbAWgmAMQgIgKgHgGgAh6ArIAmgMIAAhoIggAAIAAgWIBYAAIAAAWIggAAIAABgIAjgMIAEAWQgrAQgwAQgAgOBAIAAiGIAoAAIAFgWIg5AAIAAgUICQAAIAAAUIg8AAIgHAWIA5AAIAACGgAAHAtIBOAAIAAgVIhOAAgAAHAHIBOAAIAAgUIhOAAgAAHgeIBOAAIAAgWIhOAAg");
	this.shape_5.setTransform(76.625,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},21).to({state:[]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.8,-15.1,177.7,30.299999999999997);


(lib.sb_sc3_car = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sc3car1();
	this.instance.setTransform(-284.95,-108.2,1.8646,1.8642,-7.4204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284.9,-176.8,570,399.5);


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

	// circle
	this.instance = new lib.circle();
	this.instance.setTransform(-168.5,-115.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(133).to({_off:true},1).wait(196));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.5,-115.5,337,231);


(lib.sc2t = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#6E6E6E").s().p("AhrCZIAAkxIBJAAIAADzICOAAIAAA+g");
	this.shape.setTransform(255.375,59.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6E6E6E").s().p("AhyC0ICalmIBLAAIicFmg");
	this.shape_1.setTransform(228.825,60.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E6E6E").s().p("AB+CZQgLiEgRhlQglBsgbBgIhDAAQgahggmhsQgRBjgMCGIhHAAQATi2AXh7IBpAAQArCEAHAnQAKgrAqiAIBpAAQAYB/AQCyg");
	this.shape_2.setTransform(195,59.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6E6E6E").s().p("AAzCZQgzhIhEhMQAUghAigxQAdgqAbghIBhAAQhXBkgjA0QAjAiAwA6IAwA9gAiTCZIAAkxIBIAAIAAExg");
	this.shape_3.setTransform(159.05,59.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6E6E6E").s().p("AhkCZQAghJAvhQQAlhDAUgYIicAAIAAg9IDxAAIAAAwQgsBAgpBIQgnBKgRAvg");
	this.shape_4.setTransform(127.6,59.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6E6E6E").s().p("AglAlIAAhIIBLAAIAABIg");
	this.shape_5.setTransform(108.725,71.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6E6E6E").s().p("AhkCZQAghJAvhQQAlhEAUgXIicAAIAAg9IDxAAIAAAwQgsA/gpBJQgnBJgRAwg");
	this.shape_6.setTransform(97,59.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6E6E6E").s().p("AAGCcIAAjqIhSAMIAAg6ICZgfIAAE3g");
	this.shape_7.setTransform(71,59.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6E6E6E").s().p("AhOB3IAAhHQgPAigQARQgCgIgJgOQAVgXAPgnIggAAIAAgUIAmAAIAAgYIgiAAIAAgUIAiAAIAAgVIghAEQgEgKgDgHIAogHIAAgcIAVAAIAAAXQAPgFAHgEIARARIgGACQBJgPAhgRIAUASQgXAKgjAJIAAAnIA/gKIACAVIhBAMIAAAkIBJgNIADAWIhMAMIAAApQAAAJACADQACACAHAAIAgAAQAGAAACgHQADgHABgWQAIAHANADQgCAcgGAKQgHALgQAAIglAAQgTAAgHgIQgGgHgBgWIAAgkIgkAGIgDgVIAngIIAAgjIggAGIgDgWIAjgGIAAgmIgkAIQgEgLgEgHIggAJIAAAaIAeAAIAAAUIgeAAIAAAYIAjAAIAAAUIgjAAIAAAIIAlAjIgNAQIgYgbIAABIg");
	this.shape_8.setTransform(174,25.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6E6E6E").s().p("AgeB2IAAi2IA6AAIAAg1IAYAAIAAA1IA+AAIAAC1IgYAAIAAgOIhiAAIAAAPgAA0BQIAmAAIAAgyIgmAAgAgIBQIAkAAIAAgyIgkAAgAA0AHIAmAAIAAgwIgmAAgAgIAHIAkAAIAAgwIgkAAgAhoBkQAUgdAWgsIASAPQgRAlgWAlgAhxgaIANgSQAhAOARAMIgOATQgRgMgggPgAhkhhIAOgSQAjAQAPAMIgOAUQgSgOgggQg");
	this.shape_9.setTransform(143.775,25.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6E6E6E").s().p("AhWB3IAAiHIgTAWQgFgKgJgNQAlgmAWg+IAWAHQgJAagQAcIAACvgAgyBuIAAgXIBJAAIAAgmIg7AAIAAgXIA7AAIAAgaIAYAAIAAAaIA8AAIAAAXIg8AAIAAAmIBJAAIAAAXgAgqgIIAAgXIBBAAIAAggIg1AAIAAgYIA1AAIAAgfIAYAAIAAAfIA4AAIAAAYIg4AAIAAAgIBDAAIAAAXg");
	this.shape_10.setTransform(114.3,25.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6E6E6E").s().p("AA1BZQgVAPgbAKQgFgMgHgGIAAASIgWAAIAAgYIhVAKIgDgVIAZgCIAAhSIgWAAIAAgTIDkAAIAAATIh5AAIAABkQAYgHAUgPQgRgSgKgZIAOgEIgYAAIAAgSIBXAAIAEgBIAPAFQgLAkgZAaQAVAPAbAHQgJAIgFAKQgegIgVgRgAhGBLIApgEIAAgOIgpAAgAA1A7QAPgPAIgSIguAAQAIAUAPANgAhGAnIApAAIAAgOIgpAAgAhGAIIApAAIAAgNIgpAAgAA/ghIAAg/Ih+AAIAAA/IgYAAIAAhRICvAAIAABRgAg1gnIAAgPIBqAAIAAAPgAg1hEIAAgPIBrAAIAAAPg");
	this.shape_11.setTransform(84.55,25.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6E6E6E").s().p("AAEBlQAZgNASgXQgPgZgLgjQgHBKgbAnQgGgGgPgKQAHgHAHgNIgSAFQgDgQgJgZIARgGQAJAXAEATQAOgdAFgsQAEgiAAg7IgWAAIAAgWIBYAAIAEgBIARACQgFAjgHAlIAOAAIAFgBIAOAFQgJA3gbAoQATAVAYALQgJAIgHAMQgXgMgSgWQgTAXgXAMQgGgKgJgIgAA9AtQAOgZAJggIguAAQAIAgAPAZgAAZghIAeAAIAJgzIglAAIgCAzgAh1BrQAGgSAEgpIAUADQgFAngHAYQgGgDgMgEgAhOAyIARgDQAHAgAAATIgSAEQAAgUgGgggAh0AQQAHgCANgOQAKgLAJgOQgbADgGACIgHgVQAFgCAJgMQASgaAPgmIAWAJQgQAkgWAeIAYgDQALgSAIgQIAUANQgaAtgeAiIAlgGIgJgUIARgGQAPAcAEAXIgTAHIgCgOQhCAMgGADQgCgIgGgOg");
	this.shape_12.setTransform(54.85,25.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6E6E6E").s().p("AArBZIAjABQAGgBAAgGIAAisIinAAIAADKIgXAAIAAjhIDVAAIAADDQAAAUgMAFQgJAFgiAAQgCgMgHgMgAgzBPIAAhkIBnAAIAABSIhRAAIAAASgAgdApIA7AAIAAgqIg7AAgAhAgtIAAgVICBAAIAAAVg");
	this.shape_13.setTransform(24.875,26.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sc2t, new cjs.Rectangle(14.2,13.5,252,65.3), null);


(lib.sb_sc2_car = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-255,-122,1.9629,1.9626);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255,-122,510.4,243.4);


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

	// sc1_car
	this.instance = new lib.sc1car1();
	this.instance.setTransform(-238.6,-123.4,1.9778,1.9773,-0.6146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-238.6,-128.5,477.5,270.1);


(lib.Group = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#6E6E6E").s().p("AAkBOQgPghgVg6QgSAzgRAoIgYAAQgehRgPhKIAYAAQAOA/ATA+QAUgqATg5IARAAIAOAoQAOAlAKAWQASgyAQhLIAXAAQgPBKgdBRg");
	this.shape.setTransform(313.85,7.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6E6E6E").s().p("Ag3BOIAAibIBvAAIAAAVIhYAAIAAAtIBRAAIAAATIhRAAIAAAxIBYAAIAAAVg");
	this.shape_1.setTransform(260.5,7.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E6E6E").s().p("AAyBOIhfh8IAAB8IgXAAIAAibIAaAAIBYBzIAAhzIAXAAIAACbg");
	this.shape_2.setTransform(208.825,7.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6E6E6E").s().p("Ag4BOIAAibIAXAAIAACGIBaAAIAAAVg");
	this.shape_3.setTransform(115.5,7.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6E6E6E").s().p("Ag4BOIAAibIAXAAIAACGIBaAAIAAAVg");
	this.shape_4.setTransform(66.275,7.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6E6E6E").s().p("AA6BOIgPgpIhVAAIgPApIgYAAQAQgvAXgyQATgoAKgSIAaAAQALAQAPAjQAZAyASA2gAghARIBFAAQgVgxgOgYQgRAfgRAqg");
	this.shape_5.setTransform(14.05,7.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6E6E6E").s().p("AB0DHIgYhIIi/AAIgWBIIhlAAQAhhpAphpQAphpAnhSICGAAQBbC8BCDRgAhIAvICJAAQgjhigihMQghBLgjBjg");
	this.shape_6.setTransform(307.375,48.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6E6E6E").s().p("ABEDHQgzhTgrgsIhBAAIAAB/IhhAAIAAmNIC+AAQBIAAArAaQA3AhAABKQAAAtgdAgQgbAggrAJQA6A8A6BWgAhZgHIBLAAQAqAAAVgNQAVgOAAgfQAAg1hWAAIhJAAg");
	this.shape_7.setTransform(249.425,48.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6E6E6E").s().p("AgwDHIAAk9IiFAAIAAhQIFrAAIAABQIiGAAIAAE9g");
	this.shape_8.setTransform(191.875,48.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6E6E6E").s().p("ABeDGIi8kKIAAEKIhfAAIAAmMIBwAAICsD5IAAj5IBfAAIAAGMg");
	this.shape_9.setTransform(133.075,48.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6E6E6E").s().p("AifDHIAAmNIE7AAIAABQIjaAAIAABMIDFAAIAABMIjFAAIAABVIDeAAIAABQg");
	this.shape_10.setTransform(75.05,48.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6E6E6E").s().p("AhiDHQgegEgpgLIAAhWQBkAZA2ABQAwAAAVgIQAWgIAAgTQAAgcg3gOIhmgZQgugLgYgcQgYgdAAgoQAAh3C2AAQAlAAApAHQAXAEAoAJIAABTQgygMgVgDQglgFgogBQhMAAABAkQAAAWApALIBqAbQBoAbAABQQAAA8gtAhQguAhhYAAQgzAAgsgHg");
	this.shape_11.setTransform(17.6,48.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,329.7,69.3), null);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6E6E6E").s().p("AAgBFIgghQQgQAugPAiIgVAAQgbhGgNhDIAVAAQALAzATA8QASgqAQguIAOAAQARAvASApQARgzANg8IAVAAQgOBCgaBHg");
	this.shape_12.setTransform(278.825,6.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6E6E6E").s().p("AgxBFIAAiJIBjAAIAAATIhOAAIAAAnIBIAAIAAARIhIAAIAAAsIBOAAIAAASg");
	this.shape_13.setTransform(231.425,6.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6E6E6E").s().p("AAsBFIhUhuIAABuIgUAAIAAiJIAXAAIBOBmIAAhmIAUAAIAACJg");
	this.shape_14.setTransform(185.525,6.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6E6E6E").s().p("AgyBFIAAiJIAVAAIAAB3IBQAAIAAASg");
	this.shape_15.setTransform(102.625,6.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6E6E6E").s().p("AgyBFIAAiJIAVAAIAAB3IBQAAIAAASg");
	this.shape_16.setTransform(58.875,6.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6E6E6E").s().p("AA0BFIgNgjIhMAAIgNAjIgWAAQAOgqAVgsQAQgjAKgQIAXAAQAhA5AcBQgAgeAQIA+AAQgSgqgOgYQgKAWgUAsg");
	this.shape_17.setTransform(12.475,6.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6E6E6E").s().p("ABnCwIgVg/IipAAIgVA/IhZAAQA/jHBKiYIB3AAQBQCmA7C5gAhAApIB6AAQgdhQgghKQgeBFgfBVg");
	this.shape_18.setTransform(273.05,43.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6E6E6E").s().p("AA8CwQgvhKglgmIg5AAIAABwIhWAAIAAlfICpAAQBAAAAlAWQAyAeAABBQAAAngaAeQgYAbgmAKQA0A1AzBLgAhPgGIBDAAQAlAAASgMQATgNABgbQgBguhMAAIhBAAg");
	this.shape_19.setTransform(221.6,43.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6E6E6E").s().p("AgqCwIAAkYIh3AAIAAhHIFDAAIAABHIh3AAIAAEYg");
	this.shape_20.setTransform(170.45,43.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6E6E6E").s().p("ABUCwIiojtIAADtIhUAAIAAlfIBjAAICaDcIAAjcIBUAAIAAFfg");
	this.shape_21.setTransform(118.225,43.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6E6E6E").s().p("AiNCwIAAlfIEXAAIAABHIjBAAIAABDICvAAIAABEIivAAIAABKIDFAAIAABHg");
	this.shape_22.setTransform(66.675,43.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6E6E6E").s().p("AhXCxQgbgEgkgJIAAhNQBZAXAwAAQAqAAATgHQAUgHAAgRQAAgZgxgMIhbgWQgogLgWgYQgVgaAAgjQAAhqChAAQAwAABNASIAABKQgrgKgUgDQgggFgkgBQhDAAAAAgQAAAUAlAJIBeAZQBcAXAABHQAAA2goAdQgpAdhOAAQgtAAgngGg");
	this.shape_23.setTransform(15.625,43.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,292.9,61.5), null);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6E6E6E").s().p("A3bAFIAAgKMAu3AAAIAAAKg");
	this.shape_24.setTransform(150,30.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6E6E6E").s().p("A3bAFIAAgKMAu3AAAIAAAKg");
	this.shape_25.setTransform(150,0.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6E6E6E").s().p("AAxBeIAAgFIhMAAIAAAFIgXAAIAAgtIgbAIQgHgOgFgGQAmgIAYgIIg3AAIAAgSIA9gBIAAgHIgvAAIAAgSIAvAAIAAgGIAWAAIAAAGIAsAAIAAAIQALgIAIgJIiAAAIAAg9ICGAAIAAA7IAPAKQgOAPgSALIAlAAIAAATIhEAAIgRAIIBEAAIAABBgAgcBKIBNAAIAAgJIhNAAgAgcA0IBNgBIAAgHIhNAAgAABACIANAAIAQgHIgdAAgAgqgvIBYAAIAAgIIhYAAgAgqhGIBYAAIAAgHIhYAAg");
	this.shape_26.setTransform(112.175,15.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6E6E6E").s().p("AgEBcIAAg6IhNAAIAAgNIBNAAIAAgMIANAAIAAAMIBNAAIAAANIhNAAIAAA6gAAVAxIAJgKQAjATAVASIgJAMQgUgUgkgTgAhVBJQARgDAQgJQARgKAJgKIAMAEQgWAcgoANQgDgGgGgHgABKACQgjAFgEACQgBgHgDgEQAEgBAIgKIAPgVQgVADgEACIgDgNQADAAAEgIQAKgMAHgbIAMAEQgLAbgJAOIASgBIAKgTIAKAGQgQAfgTAXIAXgDIgEgMIAJgDIAJAdIgKAEgAglAAQgiAEgEADIgEgLQADAAAJgLQAFgGAJgPQgUADgCACIgEgNQAEAAAEgIQAJgPAHgWIALAFQgJAWgKARIAQgBIAKgUIAKAGQgQAegTAYIAXgEIgDgOIAKgCQAFATACAOIgKACgAgWAEIAAhMIAQAAQADgKABgJIAMACIgGARIAXAAIAABMgAgJgHIAXAAIAAgVIgXAAgAgJgnIAXAAIAAgVIgXAAg");
	this.shape_27.setTransform(264.675,15.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6E6E6E").s().p("AgoBQIAdABQAEgBAAgDIAAgXIhMAAIAAgNIBMAAIAAgMQAXgGAPgGIhgAAIAAgMIB2AAIADgBIAKAIQgXAOgkAJIAAAGIBNAAIAAANIhNAAIAAAYQAAAKgIADQgHACgcAAQAAgGgEgHgAg5gHIAAgoIB0AAIAAAogAgsgSIBYAAIAAgSIhYAAgAhSg8IAAgNIBNAAIgHgQIANgDIAIATIBIAAIAAANg");
	this.shape_28.setTransform(188.8,15.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6E6E6E").s().p("AgBBPIAYAAQAEAAAAgEIAAgcIhHAAQATALAMAOIgKAKQgKgMgVgPIAJgIIgnAAIAAgMIBvAAIAAgNIhnADIgBgMIBHgBIAAgLIg6AAIAAg1IA6AAIAAgMIhJAAIAAgMIBJAAIAAgPIAMAAIAAAPIBIAAIAAAMIhIAAIAAAMIA8AAIAAA1IgWAAQAVAJANALIgIAIIgLgIIgTABIAAANIAtAAIAAAMIgtAAIAAAdQAAALgHADQgGACgZAAQgBgHgCgGgAAGAMIAkAAIgOgGIAEgFIgaAAgAAGgIIAuAAIAAgMIguAAgAgzgIIAtAAIAAgMIgtAAgAAGgeIAuAAIAAgMIguAAgAgzgeIAtAAIAAgMIgtAAg");
	this.shape_29.setTransform(35.625,15.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,300,31.5), null);


(lib.an_line = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#4C4C4C").s().p("AgCAKIAAgTIAFAAIAAATg");
	this.shape.setTransform(139.9125,43.5523,1.5,1.5366);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#515151").s().p("AjVAPIAAgdIGrAAIAAAdg");
	this.shape_1.setTransform(118.975,43.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#565656").s().p("AmQAOIAAgbIMhAAIAAAbg");
	this.shape_2.setTransform(100.225,43.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5A5A5A").s().p("Ao2AOIAAgbIRtAAIAAAbg");
	this.shape_3.setTransform(83.55,43.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5D5D5D").s().p("ArJANIAAgZIWTAAIAAAZg");
	this.shape_4.setTransform(68.85,43.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#606060").s().p("AtJAMIAAgXIaTAAIAAAXg");
	this.shape_5.setTransform(55.975,43.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#636363").s().p("Au4AMIAAgXIdxAAIAAAXg");
	this.shape_6.setTransform(44.825,43.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#656565").s().p("AwYAMIAAgXMAgxAAAIAAAXg");
	this.shape_7.setTransform(35.25,43.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#676767").s().p("AxoALIAAgVMAjSAAAIAAAVg");
	this.shape_8.setTransform(27.15,43.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#696969").s().p("AysALIAAgVMAlZAAAIAAAVg");
	this.shape_9.setTransform(20.4,43.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6A6A6A").s().p("AzjALIAAgVMAnHAAAIAAAVg");
	this.shape_10.setTransform(14.875,43.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6B6B6B").s().p("A0PALIAAgVMAogAAAIAAAVg");
	this.shape_11.setTransform(10.45,43.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6C6C6C").s().p("A0yALIAAgVMApkAAAIAAAVg");
	this.shape_12.setTransform(7,43.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6D6D6D").s().p("A1LALIAAgVMAqXAAAIAAAVg");
	this.shape_13.setTransform(4.4,43.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6D6D6D").s().p("A1eAKIAAgTMAq9AAAIAAATg");
	this.shape_14.setTransform(2.55,43.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6E6E6E").s().p("A1qAKIAAgTMArVAAAIAAATg");
	this.shape_15.setTransform(1.3,43.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6E6E6E").s().p("A1yAKIAAgTMArlAAAIAAATg");
	this.shape_16.setTransform(0.55,43.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6E6E6E").s().p("A12AKIAAgTMArtAAAIAAATg");
	this.shape_17.setTransform(0.175,43.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6E6E6E").s().p("A13AKIAAgTMArvAAAIAAATg");
	this.shape_18.setTransform(0.025,43.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18,p:{x:0.025}}]},1).to({state:[{t:this.shape_18,p:{x:0}}]},1).wait(1));

	// Layer_3
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4C4C4C").s().p("AgCAKIAAgTIAFAAIAAATg");
	this.shape_19.setTransform(-139.5625,-42.525,1.5,1.5366);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#515151").s().p("AjVAPIAAgdIGrAAIAAAdg");
	this.shape_20.setTransform(-118.65,-42.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#565656").s().p("AmQAOIAAgbIMhAAIAAAbg");
	this.shape_21.setTransform(-99.95,-42.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5A5A5A").s().p("Ao2ANIAAgaIRtAAIAAAag");
	this.shape_22.setTransform(-83.325,-42.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5D5D5D").s().p("ArJANIAAgZIWTAAIAAAZg");
	this.shape_23.setTransform(-68.675,-42.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#606060").s().p("AtJANIAAgZIaTAAIAAAZg");
	this.shape_24.setTransform(-55.825,-42.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#636363").s().p("Au4AMIAAgXIdyAAIAAAXg");
	this.shape_25.setTransform(-44.7,-42.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#656565").s().p("AwYAMIAAgXMAgxAAAIAAAXg");
	this.shape_26.setTransform(-35.15,-42.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#676767").s().p("AxpALIAAgVMAjTAAAIAAAVg");
	this.shape_27.setTransform(-27.075,-42.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#696969").s().p("AysALIAAgVMAlZAAAIAAAVg");
	this.shape_28.setTransform(-20.35,-43);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6A6A6A").s().p("AzjALIAAgVMAnHAAAIAAAVg");
	this.shape_29.setTransform(-14.825,-43.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6B6B6B").s().p("A0PALIAAgVMAofAAAIAAAVg");
	this.shape_30.setTransform(-10.425,-43.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6C6C6C").s().p("A0yAKIAAgUMAplAAAIAAAUg");
	this.shape_31.setTransform(-6.975,-43.05);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6D6D6D").s().p("A1LAKIAAgUMAqXAAAIAAAUg");
	this.shape_32.setTransform(-4.4,-43.05);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6D6D6D").s().p("A1eAKIAAgTMAq9AAAIAAATg");
	this.shape_33.setTransform(-2.55,-43.075);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6E6E6E").s().p("A1qAKIAAgTMArVAAAIAAATg");
	this.shape_34.setTransform(-1.3,-43.075);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6E6E6E").s().p("A1yAKIAAgTMArlAAAIAAATg");
	this.shape_35.setTransform(-0.55,-43.075);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6E6E6E").s().p("A12AKIAAgTMArtAAAIAAATg");
	this.shape_36.setTransform(-0.175,-43.075);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6E6E6E").s().p("A13AKIAAgTMArvAAAIAAATg");
	this.shape_37.setTransform(-0.025,-43.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19}]}).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37,p:{x:-0.025}}]},1).to({state:[{t:this.shape_37,p:{x:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-44.1,280.4,89.30000000000001);


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

	// sc5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDB4IB3h4Ih3h3IAIgIIB/B/Ih/CAg");
	this.shape.setTransform(176.375,27.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhDB4IB2h4Ih2h3IAJgIIB+B/Ih+CAg");
	this.shape_1.setTransform(164.55,27.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhaBbQA8gGAmgSQgPgOgVgNIgkAQQgIgPgLgJQBFgUAhglQgwAfhEANQgFgOgJgLQAxgHAkgSQgSgNgQgIQgLAFgSAHQgKgOgKgHQA/gVAegkIAgAHIgMANIAzAAIAFgBIATALQgRAggjAaIAeAHQgIAKgIAGIAuAAIAFAAIAUAJQgVA1g1AdQgsAZhHAKQgDgMgKgQgAgCAbQAYANANAMQAWgOANgUIg7AAgAgihDQAWAMAMALQAVgOAOgPIg8AAg");
	this.shape_2.setTransform(136.475,27.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah2BWQAjgGAWgJQgOgLgMgSIAXgJIgbAAIAAhnIBLAAIAAgPIhgAAIAAgbIDcAAIAAAbIhdAAIAAAPIBOAAIAABnIhRAAQgGAUgMAPQAkANBZgBQgLAMgCASQhfgCgqgTQgcAPgpAJQgKgTgIgIgAgjA3QAJgJAGgNIgnAAQAJANAPAJgAAPAIIAwAAIAAgPIgwAAgAg+AIIAuAAIAAgPIguAAgAAPgeIAwAAIAAgQIgwAAgAg+geIAuAAIAAgQIguAAg");
	this.shape_3.setTransform(106.4,28.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah1BpQASgdAAg/IAAgkQgHgIgNgJQAagcAMgyIAbAGIgGASIAXAAIAEgBIARALQgGAPgIAQIAdAAIAAAQQAZgNAFgeIgcAAIAAgYIBxAAIAAAJQgCA4gHAJQgHAGgJACQgFABgVAAQAAgPgHgKIATABQAEAAACgCQADgEACgdIgdAAQgEAVgIAOQgJARgTAJIAWAFIgDAQIAMAAIAAgXIAdAAIAAAXIAmAAIAAAYIgmAAIAAAYIArAAIAAAaIgrAAIAAApIgdAAIAAgpIgvAAIAAgaIAvAAIAAgYIgVAAQgEAKgGAKQgFgEgNgHIAAA2QAAASgKAGQgKAFgYAAQgBgNgIgMIAYAAQAEAAAAgFIAAgkIgzAAQgEAqgQAZQgHgIgNgGgAgBAfQALgTAFgdIgGADQgDgJgHgJgAgpAeIAPAAIAAgWIgPAAgAhLAeIAOAAIAAgWIgNAAgAgpgLIAPAAIAAgTIgPAAgAhKgLIANAAIAAgTIgNAAgAhNg1IAWAAIAHgSIgVAAg");
	this.shape_4.setTransform(75.6,27.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhDBQIAtAAQAIAAAAgFIAAhwQAbgOAegbIiSAAIAAgeICwAAIAGgCIAZASQgqAsguAbIAABhQAAANgDAGQgEAHgJADQgOAFgpABQgCgQgKgPg");
	this.shape_5.setTransform(45.4,28.35);

	this.instance = new lib.Path_2();
	this.instance.setTransform(192.8,29.5,1,1,0,0,0,200.5,37.4);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.098)",7,7,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[]},1).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},18).to({state:[]},1).wait(95));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8,419,92);


(lib.sb_sc560 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F4E935").s().p("AiVClQgzg7AAhpQAAhqAxg6QAzg9BiAAQBkAAA0A9QAzA6AABqQAABpg1A7Qg3A8hgAAQheAAg0g8gAhGhmQgZAlAABDQAABGAcAjQAYAfApABQAqgBAagfQAegkAAhFQAAhCgcgmQgbgkgrAAQgrAAgZAkg");
	this.shape.setTransform(97.675,28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4E935").s().p("AiEC0Qg3gxAAhgQAAhzBMhFQBYhQCtAGIAABcQhJgGgoAIQg9ALgoAsQAHgGAPgFQAbgKAiAAQBPAAAuAtQAsAsAABFQAABJgxAsQgyAshVAAQhWAAgygsgAg7AGQgXAUAAAlQAAAkAVAUQAVAUAnAAQAqAAAXgYQATgVAAggQAAgfgTgVQgWgWgqAAQglAAgWASg");
	this.shape_1.setTransform(52.975,28.5573);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},11).to({state:[]},1).wait(110));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4E935").s().p("AgUCfIAAhMIg5AAIAoANQgcAhg2AYQgQgPgTgMQA0gRAXgaIhKAAIAAgiICFAAIAAgXIAnAAIAAAXICIAAIAAAiIhPAAQAxAYAcAWIggAcQgbgZg7geIAXgTIgnAAIAABMgAAQAMQgwAVhrAFQgFgUgJgNQA5gBAsgGQgggHgbgEQAPgMAOgPIhEAAIAAggIBfAAQALgNALgRIhKAAIAAATIglAAIAAg0IB4AAIgHgOIAqgJIANAXIB6AAIAAA0IgnAAIAAgTIh8AAIAXAIIgQAWIBBAAQAFgMADgJIAnAIIgEANIA1AAIAAAgIhFAAQgLAQgPANQA1AMAqAOIgmAaQgjgOg+gPgAgwggIA3ALQAPgJALgKIhJAAg");
	this.shape_2.setTransform(355.775,34.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4E935").s().p("AiaCAQA3gdAVg4QANgkADhFIhWAAIAAgoICQAAQgJgVgMgXIAngPQASAeAHATIgYAKICMAAIAAAoIisAAIgDApICRAAIgCARQgEBFgGAgQgGAggLALQgMAOgYACQgVACgmgCQgBgWgMgRQAWACAiAAQALAAAGgEQANgNAGhVIhqAAQgUBkhOAtQgLgTgTgPg");
	this.shape_3.setTransform(319.775,34.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4E935").s().p("AASCQQgKgHgHgDIAEgFIgbAQQgLgVgagfIAfgRQAbAfAJAQQAVgvAAhhIAAh8IB+AAIAAEBQAAAPgDAIQgEAJgJAFQgOAIgogBQgDgVgJgSIAkABQAHAAAAgHIAAhDIg0AAQgHBKgYAnQgFgFgKgIgABCAIIAyAAIAAgpIgxAAgABDhFIAxAAIAAgoIgxAAgAiaCFQAegWAPghIAmALQgSAnggAdQgNgMgUgMgAiXBMIAAgkIAfAAIAAh9IgbAAIAAgjIAbAAIAAgkIAkAAIAAAkIAqAAIAAgkIAlAAIAAAkIAWAAIAAAjIgWAAIAAB9IAUAAIAAAkgAhUAoIAqAAIAAgXIgqAAgAhUgNIAqAAIAAgVIgqAAgAhUhBIAqAAIAAgUIgqAAg");
	this.shape_4.setTransform(283.625,34.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4E935").s().p("AiTB4QA1gRAZghQASgaAGgrIg6AAIAAgVQgIAKgRANQgMgNgWgQQA7gqAZhSIArAKQgUA5ghAuICuAAQggglgSgtIg2AAIAAgmIBTAAQAMAnAZAgQAbAiAiASQgTATgJARQgRgKgJgJQgDBOgFAeQgEAjgIAKQgLAOgVADQgOABglgBQgBgVgLgUQAYADAUAAQAJgBAEgFQAKgKAEhiIhCAAQgIA5gWAhQgcAsg9AWQgIgTgTgSg");
	this.shape_5.setTransform(248.6,35.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F4E935").s().p("AhyCfIAAjyQgEA3gMAiIgegKQANgkAEg1IAdAFIAAhGIAoAAIAABAIAUgIQALAVAIAWQAMgkAGgvIAmAGIgIAvIAbAAIAAhDIAoAAIAABDIBGAAIAAAmIhGAAIAAA3IA/AAIAAAmIg/AAIAABEIBRAAIAAAmIjTAAIAAgmIBaAAIAAhEIhBAAIAAgmIBBAAIAAg3IgmAAQgFAYgNAXQgOgJgWgJIAKgUIgTAJQgEgRgJgWIAADng");
	this.shape_6.setTransform(212.525,34.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F4E935").s().p("AAgCYIAAgtIhSAAIAAghIBSAAIAAgPIhDAAIAAh5ICtAAIAAB5IhGAAIAAAPIBXAAIAAAhIhXAAIAAAtgABEAcIAiAAIAAgQIgiAAgAAAAcIAgAAIAAgQIggAAgABEgPIAiAAIAAgRIgiAAgAAAgPIAgAAIAAgRIggAAgAiUBsIAiACQAHAAAFgFQAGgJAEg+Ig+AAQAFgqAAhEIA5AAIAAgmIg+AAIAAgkIBjAAIAABuIg9AAIgBAoIA+AAIAAAPQgDA5gEAaQgEAbgHAIQgIALgQADQgJABgfAAQgBgWgKgSgAA4hKIAAhOIBWAAIAABOgABXhlIAWAAIAAgXIgWAAgAgphKIAAhOIBUAAIAABOgAgKhlIAUAAIAAgXIgUAAg");
	this.shape_7.setTransform(177.475,35.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F4E935").s().p("ABLCFIgQAEIgEgRIiFAJIgEgiIA/gDIAAgaIhMAAIAABcIgnAAIAAhcIgOAAIAAggIAOAAIAAgKIAnAAIAAAKIBMAAIAAgPIheAAIAAhrIDkAAIAABrIhgAAIAAAPIB4AAIAABZQAAANgCAGQgDAHgIAEQgKAGggAAQgCgMgHgOgABaB/IAFAAQAFAAAAgFIAAg4IgiAAQASAfAGAegAATBaIAYgBQgCgGgFgKIAcgHIgtAAgAATgGIA4AAIAAgPIg4AAgAhKgGIA3AAIAAgPIg3AAgAATguIA4AAIAAgQIg4AAgAhKguIA3AAIAAgQIg3AAgAAnhdIAAgPIgiAAIAAghIAiAAIAAgRIAoAAIAAARIBIAAIAAAhIhIAAIAAAPgAhQhdIAAgPIhGAAIAAghIBGAAIAAgRIAoAAIAAARIAjAAIAAAhIgjAAIAAAPg");
	this.shape_8.setTransform(141.4,34.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},11).to({state:[]},1).wait(110));

	// MergedLayer_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmBrIA8jWIARAAIg8DWg");
	this.shape_9.setTransform(368.975,76.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhVBuIAAgtQA9giAagVQAggZAAgTQAAgggsAAQgeAAgkAKIAAgqQAkgLAtAAQAiAAAWARQAZAUAAAkQAAAdgbAaQgWAWguAZIBbAAIAAAsg");
	this.shape_10.setTransform(43.675,75.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhqBxIAAgbIAxAAQgIgVgNgSIAUgIIgkAAIAAgbIBOAAIAAgYIgyAAIAAgMQgOAHgRAGQgHgPgMgMQBRgXAggzIAbAMIgHAKQASAQAcAOQAbAOAcAIQgMAMgIAOQgRgGgRgJIAAAPIgxAAIAAAYIBOAAIAAAbIgmAAIAYAIQgLASgPAVIA1AAIAAAbgAAPBWIAfAAIgRgGQAMgSAJgXIgjAAgAgfBOIgUAIIAjAAIAAgvIgkAAQAQAXAFAQgAgngnIBSAAQgXgOgUgSQgNAQgaAQg");
	this.shape_11.setTransform(173.55,74.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAYByIAAhTIhCAAIAAgcIBCAAIAAgpIgeAAQgGASgJANIgZgOQATgbAKg0IAbAFIgHAcIAVAAIAAgsIAdAAIAAAsIAzAAIAAAdIgzAAIAAApIA/AAIAAAcIg/AAIAABTgAhUByIAAh6IgOAQQgJgRgIgNQAjgiAUg5IAcAJQgJAWgPAeIAACmg");
	this.shape_12.setTransform(147.55,74.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhtBtIAAiqIAbAAIAAgXIgfAAIABgZIBzAAIAAAZIgdAAIAAAXIAcAAIAACnIgXAAIAAgMIhCAAIAAAPgAhXBHIBCAAIAAg4IgKAAQgJAAgEgDQgDgFAAgLIAAghIgLAAIAAASQAAAdgRAPQgEgGgIgEgAhXANQAMgLAAgVIAAgSIgMAAgAgfgEQAAABAAAAQAAABAAAAQABABAAAAQABAAAAAAIAFAAIADAAIAAgkIgKAAgAg7g9IAKAAIAAgXIgKAAgAAuBrQgUAAgHgIQgHgIAAgWIAAhiIBAAAIAAgyIhBAAIAAgcIBdAAIAABpIhAAAIAABHQAAAGACADQACACAHAAIAZAAQAGAAADgHQACgHABgYQAKAHAQAEQgCAfgIAMQgHALgSAAgAhPA3IAAgWIA0AAIAAAWg");
	this.shape_13.setTransform(122.175,74.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhyBSQAkgNANgZQAKgTADgjIg4AAIAAgcIDZAAIAAAcIhAAAIAABKQAAAHACACQACACAFAAIAWAAQAHAAABgIQACgHACgbQAKAJARADQgCAhgIAMQgHAMgTAAIgeAAQgUAAgHgIQgHgIAAgWIAAhKIgkAAQgEAsgNAYQgRAggpAQQgEgNgOgLgAhWhMIAAgdICtAAIAAAdg");
	this.shape_14.setTransform(96.25,75.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA3BgIgMADIgEgMIhfAGIgCgZIAsgBIAAgTIg3AAIAABCIgcAAIAAhCIgJAAIAAgYIAJAAIAAgHIAcAAIAAAHIA3AAIAAgKIhDAAIAAhNICkAAIAABNIhGAAIAAAKIBXAAIAABAQABARgKAGQgIADgWAAQgCgJgEgJgABBBbIAEAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAgBIAAgoIgZAAQANAVAFAWgAANBBIASgBIgFgLIAUgFIghAAgAANgEIApAAIAAgLIgpAAgAg1gEIAnAAIAAgLIgnAAgAANghIApAAIAAgLIgpAAgAg1ghIAnAAIAAgLIgnAAgAAchCIAAgLIgYAAIAAgYIAYAAIAAgMIAdAAIAAAMIA0AAIAAAYIg0AAIAAALgAg5hCIAAgLIgzAAIAAgYIAzAAIAAgMIAdAAIAAAMIAZAAIAAAYIgZAAIAAALg");
	this.shape_15.setTransform(70.5,74.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgnBrIA9jWIARAAIg8DWg");
	this.shape_16.setTransform(196.4,76.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAVByIAAhWIg/AAIAAgaIA/AAIAAgVIgvAAIAAhUICAAAIAABUIgzAAIAAAVIA/AAIAAAaIg/AAIAABWgAABgtIBIAAIAAghIhIAAgAhTBxIAAh9IgRATQgIgSgIgLQAmgkAUg3IAbAIQgKAcgOAXIAACngAgwBYQAVgYANgcIAZAIQgPAigVAZQgKgIgNgHgAA7AvIAWgMQAZAeALAWIgXAOQgMgYgXgeg");
	this.shape_17.setTransform(347.725,78.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ah0BYQASgJAMgTQgPgRgLgeIAWgKQAGAQALAQQAHgSAEgbIgcAAQgKAHAAACQgGgPgFgGQAIgCAKgPQAPgaAHgPIgpAAIAAgaIA0AAIAIgEIARANQgQAlgRAbIAOAAIAEgBIARAEQgEA1gPAhQAgAWBAAAIBJgBQgIALgDASIg+AAQhIAAglgaQgOAWgUAMQgGgOgLgMgAgeA7IAAgbIANAAIAAhWIAaAAIAABWIAVAAIAAhqIgyAEQAAgLgHgOQBQgFAmgNIAQAZQgWAFgZAFIAAApIArAAIAAAbIgrAAIAAAqIAwAAIAAAbg");
	this.shape_18.setTransform(322.125,78.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgfBYQALgIAAgNIAAivIBuAAIAABvIgrAAQAFAQAFALQATgOAJgKIATAVQgUAPgOAJQARAXAWAKQgMALgHAOQgxgbgThPIgOAAIAABFIAigHQAAARABAJQg0AOgKAGQgEgNgIgKgAAIgVIA2AAIAAgTIg2AAgAAIhAIA2AAIAAgTIg2AAgAhsBuIAAjaIA6AAIAEgCIATALIgVBBQASAXAAAbQAAAXgMAJQgEAEgJABIgQABQAAgOgHgLIALAAQAEAAADgCQAEgDAAgLQAAgXgRgVIAOgzIgYAAIAADAg");
	this.shape_19.setTransform(296.975,78.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhtBpQASgWAKgaIAcAHQgNAggOAUgAA7BCIAbgLQAVAfAHASIgcAMQgIgVgTgdgAgoBDIAcgDQAGAdAAAQIgdAFQAAgWgFgZgAAJBCIAcgEQAKAXAEAXIgdAFQgDgTgKgcgAhqA0IAAgaIAhAAIAAgeIgaAAIAAgaIAaAAIAAgWIAaAAIAAAWIARAAIAAgWIAYAAIAAAWIASAAIAAgWIAZAAIAAAWIASAAIAAgWIAbAAIAAAWIAYAAIAAAaIgYAAIAAAeIAdAAIAAAagAAlAaIASAAIAAgeIgSAAgAgGAaIASAAIAAgeIgSAAgAgvAaIARAAIAAgeIgRAAgAhxg5QAggWATglIAZAJIgMAUICaAAIAAAaIitAAQgRASgLAJQgKgQgHgHg");
	this.shape_20.setTransform(270.425,77.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhZArQAAgQALgOQAJgNAPgDQgegSAAgbQAAgfAZgRQAVgPAmAAQAmAAAWAPQAZAQAAAgQAAAbgfASQAQADAJANQALAOAAAQQAABFhaAAQhZAAAAhFgAgdAXQgIAIAAALQAAANALAIQALAHAPAAQAQAAALgHQALgIAAgNQAAgLgIgIQgKgJgUAAQgTAAgKAJgAgXhAQgJAHABALQgBAKAJAHQAJAJAOAAQAPAAAJgJQAIgHAAgKQABgKgJgIQgJgIgPAAQgPAAgIAIg");
	this.shape_21.setTransform(243.35,77.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhBBaQgbgZAAgvQAAg5AlgjQAsgoBWADIAAAuQglgCgUADQgeAGgUAWQADgDAJgDQANgEAQAAQAnAAAYAWQAWAWgBAiQAAAkgYAWQgZAWgqAAQgqAAgZgWgAgdADQgMAKAAATQAAASALAKQALAJATAAQAUAAAMgMQAKgKAAgQQAAgPgKgKQgLgLgVAAQgSAAgLAIg");
	this.shape_22.setTransform(220.1,77.6895);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},11).to({state:[]},1).wait(110));

	// Layer_9
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#036EB7").s().p("ABpEJQgxgVgjgnQgPgSgLgUQgQAggcAZQhDA9htAAQh0AAhFhDQhDhDAAh0QAAhCAXg5QAXg5ArgqQBlhgC6AAIAYABQAZAAAQASQARARAAAYIAABWQAQgoAbgfQBFhMB5AAQB8AABGBMQBGBMAACFQAACChJBNQhHBNh5AAQg8AAgwgUgAj5A0QgDADAAAJQAAAJACADQAEADAPABQAQAAAGgGQADgDAAgIQAAgIgDgCQgFgFgPgBQgPAAgFAFgAC6grQgGAUAAAZQABAyAPASQAFAJANAAQAnAAAAhNQAAghgKgWQgKgagTAAQgUAAgIAkgAgjhTIABgIIgEAEIAAAAIADAEgAlbiQQgMAMgLAOQANgQAQgOQBUhNCkACIgIAAQijAAhTBPg");
	this.shape_23.setTransform(76,28.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(11).to({_off:true},1).wait(110));

	// Layer_10
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#036EB7").s().p("AiaDVQgIgGgGgHQgOAJgTAAIjIAAQgRALgSAAIgpAAQgZAAgRgSQgNgNgDgRQgKADgMAAIgcAAQgGAUgPANQgRAMgUAAIglAAQgUAAgQgMQgQgMgGgTIgBABQgXAfgoAFQgTACgSAAIgMgBQgYAAgRgQIgGgHQgIAJgNAGQgXANgvAAQgPAAgOgIQgNgHgIgNIgIgEIgGgEIgwADIgPABQgIAOgOAIQgOAJgRAAIgnAAQgYAAgTgRQgRgSAAgZIAAg3QgNgQAAgVIAAggQAAgRAJgOQAIgNAOgIIAEgDIAAgfQgRgHgKgPQgLgPAAgTIAAghQAAgZASgRQARgSAZAAIAcAAQASgRAYAAIApAAQAXAAARAQQAQgQAXAAIApAAQAYAAASARIAeAAQANAAAMAFQANgHAQAAIBlAAQAGgCAHAAIBVAAIAGABIAGgBIBWAAQAZAAARAQQADgGAGgFQARgSAZAAIApAAQAZAAASASIANgCIAIABIAKABQARgQAYAAIAoAAQAZAAASASQARASAAAYIAAAHIAKAAQAZAAARARQAHAIAFAIQAMgVAIgbQAGgTARgMQAPgLATAAIAPABIALADQAQgLASAAIBTAAQAVAAAPAMQAQALAGATQAHAYAOATQABgKAGgJQAHgOANgIQAFgTARgNQAPgNAWAAIAkAAQALAAAKAEQAKgEALAAIAlAAQATAAAPALIB+AAQAZAAASASQAKAKAEAMIACAAIBBAAIACgGQAJgZAZgJIApgPQAJgEAMAAQAPAAAOAHQAOAIAIAOQAIAMAIASIBJAAIAGAAQAFgIAGgHQATgRAYAAIBKAAQANgKAPgDIArgJIAMgBQAcAAATAXIBXAAQAZAAARARQASASAAAZIAAAnQAFAMABAMIAAAgQgBAPgHAMQAFAJACALQABALgBAIQAEAMAAALIAAAiQAAANgFAMQADALAAAJQABAbgVATIggAcQgRAPgWAAQgYAAgRgPIgMgKQgRAbghAAIgoAAQgeAAgSgYQgQAJgLAEQgMAFgMAAQgYAAgSgRQgKgJgQgLQgLgHgGgKQgGAMgIAIQgcAfgvAEQgNACgVAAIgigBQgQgBgNgJQgOgJgHgOQgTAQgYAOQgNAIgRAAQgJAAgGgCQgYgGgMgUQgIAGgJAGQgbAOgxAAIgIAAQgMAAgLgFQgMAGgKAAIgGABQgWAAgSgPQgIACgIAAQgIAAgKgCQgPgFgKgLIgRAPQgRAQgWAAQgYAAgSgRQgIgIgNgIQgPgIgHgMIgIAKQgZAhgsAGQgNACgZAAIgYgBQgdAAgTgbQgaARgdALQgKADgLAAQgSAAgPgJgAAbCfIAQgBIgWABgAijBAIACACIAIgDIgIgEIgCAFgAI0AsIAAAAQAMgSAFgdIgRAAgAicgbIAAAAIAMgKIgMAKg");
	this.shape_24.setTransform(248.75,34.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(11).to({_off:true},1).wait(110));

	// _Rectangle_
	this.instance = new lib.Rectangle();
	this.instance.setTransform(203.9,61.4,1,1,0,0,0,185.9,40.2);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.267)",3,3,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:true},1).wait(110));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14,0,387,113.2);


(lib.sb_sc5_all = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ll
	this.instance = new lib.Group_1();
	this.instance.setTransform(-0.05,-0.15,1,1,0,0,0,146.4,30.8);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,0.749)",0,0,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.4,-46.9,328,96);


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

	// sb_sc5-btn
	this.instance = new lib.sb_sc5btn("synched",0,false);
	this.instance.setTransform(201.5,38.5,1,1,0,0,0,201.5,38.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1,startPosition:8},4).to({startPosition:8},7).to({regY:38.6,scaleX:0.8773,scaleY:0.8773,x:201.55,y:38.6,startPosition:12},3).to({regY:38.5,scaleX:1,scaleY:1,x:201.5,y:38.5,startPosition:8},3).to({regY:38.6,scaleX:0.8773,scaleY:0.8773,x:201.55,y:38.6,startPosition:12},3).to({regY:38.5,scaleX:1,scaleY:1,x:201.5,y:38.5,startPosition:8},3).to({startPosition:18},19).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8,419,92.6);


(lib.an_sc560 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc5-60
	this.instance = new lib.sb_sc560("synched",0);
	this.instance.setTransform(213.5,69.6,1,1,0,0,0,210.5,66.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},12,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17,3,387,113.2);


(lib.an_sc5_t = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc5_all
	this.instance = new lib.sb_sc5_all("synched",0);
	this.instance.setTransform(-1.55,-15.35);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-1.55,alpha:1},29,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-62.3,328,110.8);


(lib.an_sc4_t = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc4_t
	this.instance = new lib.sb_sc4_t("synched",0);
	this.instance.setTransform(-1.45,-33.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1.3,y:0,alpha:1,startPosition:29},29,cjs.Ease.cubicOut).wait(1));

	// an_line
	this.instance_1 = new lib.an_line("synched",0,false);
	this.instance_1.setTransform(-1.45,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.5,-64.4,280.5,107.2);


(lib.an_sc4_car = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc4_car
	this.instance = new lib.sb_sc4_car("synched",0);
	this.instance.setTransform(534.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0},19,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-346,-146,1226.2,290);


(lib.an_circle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_circle_mask1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_16 = new cjs.Graphics().p("ADGl8QhZgIg8gkQg7gkAEgrQADgrBBgZQBCgYBZAIQBZAIA8AkQA8AkgEArQgEArhCAZQgxASg/AAQgUAAgWgCg");
	var mask_graphics_17 = new cjs.Graphics().p("ABJjUQi3gRh9hLQh8hKAIhZQAIhZCIg0QCIgyC3AQQC4ARB8BLQB9BLgIBZQgIBZiIAzQhnAmiBAAQgrAAgtgEg");
	var mask_graphics_18 = new cjs.Graphics().p("AgbhGQkJgYizhsQiyhrALiAQAMiADDhKQDEhJEHAYQEJAZCzBrQCyBsgLCAQgMB/jDBKQiTA3i6AAQg+AAhAgGg");
	var mask_graphics_19 = new cjs.Graphics().p("AgiAvQlMgejgiGQjgiHAOigQAPihD1hcQD1hbFKAeQFMAeDgCHQDgCHgOCgQgPChj1BbQi4BFjpAAQhNAAhRgIg");
	var mask_graphics_20 = new cjs.Graphics().p("AgoCQQmDgjkFidQkGidASi7QARi7EdhrQEehrGBAjQGDAkEFCdQEGCdgSC7QgRC7kdBqQjXBRkQAAQhaAAhegJg");
	var mask_graphics_21 = new cjs.Graphics().p("AgtDeQmugokkivQkjiuATjQQATjQE+h4QE/h3GtAnQGuAoEkCvQEjCvgTDQQgTDPk+B3QjwBakvAAQhjAAhqgJg");
	var mask_graphics_22 = new cjs.Graphics().p("AgxEaQnQgrk7i9Qk6i8AVjgQAUjhFYiBQFXiBHQArQHQAqE7C9QE6C9gVDhQgUDglYCAQkCBilHAAQhsAAhygLg");
	var mask_graphics_23 = new cjs.Graphics().p("AgzFHQnrgtlMjHQlLjHAVjtQAWjtFriIQFqiIHpAtQHrAtFMDHQFLDIgVDtQgWDslrCIQkQBnlZAAQhyAAh4gMg");
	var mask_graphics_24 = new cjs.Graphics().p("Ag1FoQn9gvlYjPQlZjOAXj2QAWj2F4iNQF4iNH8AuQH9AvFZDPQFYDPgXD2QgWD1l4CNQkbBqlmAAQh2AAh9gLg");
	var mask_graphics_25 = new cjs.Graphics().p("Ag3F+QoJgwlhjUQlgjTAXj8QAXj8GBiRQGBiQIJAvQIJAwFhDUQFgDUgXD8QgXD7mBCRQkiBtlvAAQh5AAiAgMg");
	var mask_graphics_26 = new cjs.Graphics().p("Ag4GLQoQgwlmjYQlmjWAYj/QAXkAGHiTQGHiSIQAwQIQAwFmDXQFmDYgYD/QgXD/mHCSQkmBvl0AAQh6AAiDgMg");
	var mask_graphics_27 = new cjs.Graphics().p("Ag4GSQoVgxlojZQlojYAYkBQAXkCGKiUQGJiTIUAxQIVAwFoDZQFoDZgYEBQgXEBmKCTQkoBwl3AAQh7AAiDgMg");
	var mask_graphics_28 = new cjs.Graphics().p("Ag4GUQoWgxlpjZQlpjYAXkDQAYkCGKiUQGLiUIVAxQIWAxFpDZQFpDZgXEDQgYEBmKCUQkpBvl4AAQh8AAiDgMg");
	var mask_graphics_29 = new cjs.Graphics().p("Ag4GVQoWgxlqjaQlpjYAYkCQAXkDGLiUQGLiUIVAxQIWAxFqDZQFpDagYECQgXEBmLCUQkpBwl4AAQh8AAiDgMg");
	var mask_graphics_30 = new cjs.Graphics().p("Ag4GVQoWgxlqjaQlpjYAYkCQAXkDGLiUQGLiUIVAxQIWAxFqDZQFpDagYECQgXEBmLCUQkpBwl4AAQh8AAiDgMg");
	var mask_graphics_31 = new cjs.Graphics().p("Ag4GVQoWgxlqjaQlpjYAYkCQAXkDGLiUQGLiUIVAxQIWAxFqDZQFpDagYECQgXEBmLCUQkpBwl4AAQh8AAiDgMg");
	var mask_graphics_32 = new cjs.Graphics().p("Ag4GVQoWgxlqjaQlpjYAYkCQAXkDGLiUQGLiUIVAxQIWAxFqDZQFpDagYECQgXEBmLCUQkpBwl4AAQh8AAiDgMg");
	var mask_graphics_33 = new cjs.Graphics().p("Ag4GVQoWgxlqjaQlpjYAYkCQAXkDGLiUQGLiUIVAxQIWAxFqDZQFpDagYECQgXEBmLCUQkpBwl4AAQh8AAiDgMg");
	var mask_graphics_34 = new cjs.Graphics().p("Ag4GVQoWgxlqjaQlpjYAYkCQAXkDGLiUQGLiUIVAxQIWAxFqDZQFpDagYECQgXEBmLCUQkpBwl4AAQh8AAiDgMg");
	var mask_graphics_35 = new cjs.Graphics().p("Ag4GVQoWgxlqjaQlpjYAYkCQAXkDGLiUQGLiUIVAxQIWAxFqDZQFpDagYECQgXEBmLCUQkpBwl4AAQh8AAiDgMg");
	var mask_graphics_36 = new cjs.Graphics().p("Ag4GVQoWgxlqjaQlpjYAYkCQAXkDGLiUQGLiUIVAxQIWAxFqDZQFpDagYECQgXEBmLCUQkpBwl4AAQh8AAiDgMg");
	var mask_graphics_37 = new cjs.Graphics().p("Ag4GVQoWgxlqjaQlpjYAYkCQAXkDGLiUQGLiUIVAxQIWAxFqDZQFpDagYECQgXEBmLCUQkpBwl4AAQh8AAiDgMg");
	var mask_graphics_38 = new cjs.Graphics().p("Ag4GVQoWgxlqjaQlpjYAYkCQAXkDGLiUQGLiUIVAxQIWAxFqDZQFpDagYECQgXEBmLCUQkpBwl4AAQh8AAiDgMg");
	var mask_graphics_39 = new cjs.Graphics().p("Ag4GVQoWgxlqjaQlpjYAYkCQAXkDGLiUQGLiUIVAxQIWAxFqDZQFpDagYECQgXEBmLCUQkpBwl4AAQh8AAiDgMg");
	var mask_graphics_40 = new cjs.Graphics().p("Ag4GVQoWgxlqjaQlpjYAYkCQAXkDGLiUQGLiUIVAxQIWAxFqDZQFpDagYECQgXEBmLCUQkpBwl4AAQh8AAiDgMg");
	var mask_graphics_41 = new cjs.Graphics().p("Ag4GVQoWgxlqjaQlpjYAYkCQAXkDGLiUQGLiUIVAxQIWAxFqDZQFpDagYECQgXEBmLCUQkpBwl4AAQh8AAiDgMg");
	var mask_graphics_42 = new cjs.Graphics().p("Ag4GVQoWgxlqjaQlpjYAYkCQAXkDGLiUQGLiUIVAxQIWAxFqDZQFpDagYECQgXEBmLCUQkpBwl4AAQh8AAiDgMg");
	var mask_graphics_43 = new cjs.Graphics().p("Ag4GVQoWgxlqjaQlpjYAYkCQAXkDGLiUQGLiUIVAxQIWAxFqDZQFpDagYECQgXEBmLCUQkpBwl4AAQh8AAiDgMg");
	var mask_graphics_44 = new cjs.Graphics().p("Ag4GVQoWgxlqjaQlpjYAYkCQAXkDGLiUQGLiUIVAxQIWAxFqDZQFpDagYECQgXEBmLCUQkpBwl4AAQh8AAiDgMg");
	var mask_graphics_45 = new cjs.Graphics().p("Ag4GVQoWgxlqjaQlpjYAYkCQAXkDGLiUQGLiUIVAxQIWAxFqDZQFpDagYECQgXEBmLCUQkpBwl4AAQh8AAiDgMg");
	var mask_graphics_46 = new cjs.Graphics().p("Ag4GVQoWgxlqjaQlpjYAYkCQAXkDGLiUQGLiUIVAxQIWAxFqDZQFpDagYECQgXEBmLCUQkpBwl4AAQh8AAiDgMg");
	var mask_graphics_47 = new cjs.Graphics().p("Ag4GVQoWgxlqjaQlpjYAYkCQAXkDGLiUQGLiUIVAxQIWAxFqDZQFpDagYECQgXEBmLCUQkpBwl4AAQh8AAiDgMg");
	var mask_graphics_48 = new cjs.Graphics().p("Ag4GVQoWgxlqjaQlpjYAYkCQAXkDGLiUQGLiUIVAxQIWAxFqDZQFpDagYECQgXEBmLCUQkpBwl4AAQh8AAiDgMg");
	var mask_graphics_49 = new cjs.Graphics().p("Ag4GVQoWgxlqjaQlpjYAYkCQAXkDGLiUQGLiUIVAxQIWAxFqDZQFpDagYECQgXEBmLCUQkpBwl4AAQh8AAiDgMg");
	var mask_graphics_50 = new cjs.Graphics().p("Ag4GVQoWgxlqjaQlpjYAYkCQAXkDGLiUQGLiUIVAxQIWAxFqDZQFpDagYECQgXEBmLCUQkpBwl4AAQh8AAiDgMg");
	var mask_graphics_51 = new cjs.Graphics().p("Ag4GVQoWgxlqjaQlpjYAYkCQAXkDGLiUQGLiUIVAxQIWAxFqDZQFpDagYECQgXEBmLCUQkpBwl4AAQh8AAiDgMg");
	var mask_graphics_52 = new cjs.Graphics().p("Ag4GVQoWgxlqjaQlpjYAYkCQAXkDGLiUQGLiUIVAxQIWAxFqDZQFpDagYECQgXEBmLCUQkpBwl4AAQh8AAiDgMg");
	var mask_graphics_53 = new cjs.Graphics().p("Ag4GVQoWgxlqjaQlpjYAYkCQAXkDGLiUQGLiUIVAxQIWAxFqDZQFpDagYECQgXEBmLCUQkpBwl4AAQh8AAiDgMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_graphics_16,x:42.2239,y:-59.0185}).wait(1).to({graphics:mask_graphics_17,x:53.7179,y:-64.679}).wait(1).to({graphics:mask_graphics_18,x:62.9523,y:-69.4705}).wait(1).to({graphics:mask_graphics_19,x:62.9529,y:-73.4654}).wait(1).to({graphics:mask_graphics_20,x:62.9534,y:-76.7362}).wait(1).to({graphics:mask_graphics_21,x:62.9538,y:-79.3552}).wait(1).to({graphics:mask_graphics_22,x:62.9541,y:-81.3949}).wait(1).to({graphics:mask_graphics_23,x:62.9543,y:-82.9277}).wait(1).to({graphics:mask_graphics_24,x:62.9544,y:-84.026}).wait(1).to({graphics:mask_graphics_25,x:62.9546,y:-84.7622}).wait(1).to({graphics:mask_graphics_26,x:62.9546,y:-85.2088}).wait(1).to({graphics:mask_graphics_27,x:62.9547,y:-85.4381}).wait(1).to({graphics:mask_graphics_28,x:62.9547,y:-85.5226}).wait(1).to({graphics:mask_graphics_29,x:62.9547,y:-85.5347}).wait(1).to({graphics:mask_graphics_30,x:62.9547,y:-85.5347}).wait(1).to({graphics:mask_graphics_31,x:62.9547,y:-85.5347}).wait(1).to({graphics:mask_graphics_32,x:62.9547,y:-85.5347}).wait(1).to({graphics:mask_graphics_33,x:62.9547,y:-85.5347}).wait(1).to({graphics:mask_graphics_34,x:62.9547,y:-85.5347}).wait(1).to({graphics:mask_graphics_35,x:62.9547,y:-85.5347}).wait(1).to({graphics:mask_graphics_36,x:62.9547,y:-85.5347}).wait(1).to({graphics:mask_graphics_37,x:62.9547,y:-85.5347}).wait(1).to({graphics:mask_graphics_38,x:62.9547,y:-85.5347}).wait(1).to({graphics:mask_graphics_39,x:62.9547,y:-85.5347}).wait(1).to({graphics:mask_graphics_40,x:62.9547,y:-85.5347}).wait(1).to({graphics:mask_graphics_41,x:62.9547,y:-85.5347}).wait(1).to({graphics:mask_graphics_42,x:62.9547,y:-85.5347}).wait(1).to({graphics:mask_graphics_43,x:62.9547,y:-85.5347}).wait(1).to({graphics:mask_graphics_44,x:62.9547,y:-85.5347}).wait(1).to({graphics:mask_graphics_45,x:62.9547,y:-85.5347}).wait(1).to({graphics:mask_graphics_46,x:62.9547,y:-85.5347}).wait(1).to({graphics:mask_graphics_47,x:62.9547,y:-85.5347}).wait(1).to({graphics:mask_graphics_48,x:62.9547,y:-85.5347}).wait(1).to({graphics:mask_graphics_49,x:62.9547,y:-85.5347}).wait(1).to({graphics:mask_graphics_50,x:62.9547,y:-85.5347}).wait(1).to({graphics:mask_graphics_51,x:62.9547,y:-85.5347}).wait(1).to({graphics:mask_graphics_52,x:62.9547,y:-85.5347}).wait(1).to({graphics:mask_graphics_53,x:62.9547,y:-85.5347}).wait(1).to({graphics:null,x:0,y:0}).wait(96));

	// sb_circle
	this.instance = new lib.sb_circle("synched",0);
	this.instance.setTransform(127.5,-53.5,1,0.9998);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).wait(37).to({startPosition:37},0).to({_off:true},1).wait(96));

	// sb_circle_mask2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_16 = new cjs.Graphics().p("AKdl7QhCgJgrgeQgsgeAFghQAFghAxgRQAygRBCAJQBCAJArAeQAsAegFAhQgFAhgxARQghALgnAAQgVAAgXgDg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AJeknQhvgQhJgyQhKgzAIg4QAIg4BUgdQBVgcBvAPQBvAQBJAzQBKAygIA4QgIA4hUAdQg3AShCAAQgkAAgngFg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AIpjgQiWgVhihEQhjhEALhMQAKhLBygnQBxgmCWAVQCWAVBiBEQBjBEgLBMQgLBLhxAmQhJAZhZAAQgwAAg1gHg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AH9ilQi2gZh4hTQh3hTANhbQAMhcCKgvQCKguC1AZQC2AaB4BSQB3BTgMBcQgNBbiKAvQhZAehsAAQg6AAhAgJg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AHYh0QjQgdiIhfQiIhfANhoQAPhpCeg2QCdg1DQAdQDQAdCJBfQCJBfgPBoQgOBpieA1QhmAjh8AAQhCAAhKgKg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AG7hNQjlggiWhpQiWhoAQhzQAQhzCtg8QCtg6DlAgQDlAgCXBoQCXBogRB0QgQBzitA6QhxAniHAAQhKAAhRgLg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AGlgvQj2gjihhvQihhwASh7QARh8C5g/QC6g/D1AiQD2AjChBvQChBwgRB7QgRB8i6A/Qh4ApiSAAQhPAAhWgMg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AGUgYQkCgkiph2Qiph1ASiCQASiBDChDQDEhCEBAkQECAkCqB1QCpB2gSCBQgSCCjDBCQh/AriZAAQhTAAhagMg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AGIgIQkLgliuh6Qiwh5ATiGQATiGDJhFQDKhEEKAlQELAlCvB5QCvB6gSCGQgTCGjKBEQiDAsieAAQhWAAhdgMg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AF/ACQkQgliyh9Qizh7ATiJQATiJDOhHQDNhGERAmQERAnCzB7QCzB9gTCJQgTCJjPBGQiFAsiiAAQhYAAhggNg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AF6AIQkUgli0h+Qi2h+AUiKQATiLDRhHQDQhHEUAmQEUAnC2B9QC1B+gTCLQgTCLjRBHQiIAtikAAQhYAAhigOg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AF4AMQkWgmi2h/Qi2h+ATiMQAUiMDShHQDRhIEWAnQEWAnC3B+QC3B/gUCMQgTCMjTBHQiIAtilAAQhZAAhigNg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h/AUiMQATiMDThIQDShHEXAnQEWAnC4B+QC3B/gUCNQgUCMjSBHQiJAuilAAQhaAAhigOg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h+ATiNQAUiMDThIQDShHEXAnQEWAnC4B+QC3CAgUCMQgTCMjTBHQiJAuimAAQhZAAhigOg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h+ATiNQAUiMDThIQDShHEXAnQEWAnC4B+QC3CAgUCMQgTCMjTBHQiJAuimAAQhZAAhigOg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h+ATiNQAUiMDThIQDShHEXAnQEWAnC4B+QC3CAgUCMQgTCMjTBHQiJAuimAAQhZAAhigOg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h+ATiNQAUiMDThIQDShHEXAnQEWAnC4B+QC3CAgUCMQgTCMjTBHQiJAuimAAQhZAAhigOg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h+ATiNQAUiMDThIQDShHEXAnQEWAnC4B+QC3CAgUCMQgTCMjTBHQiJAuimAAQhZAAhigOg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h+ATiNQAUiMDThIQDShHEXAnQEWAnC4B+QC3CAgUCMQgTCMjTBHQiJAuimAAQhZAAhigOg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h+ATiNQAUiMDThIQDShHEXAnQEWAnC4B+QC3CAgUCMQgTCMjTBHQiJAuimAAQhZAAhigOg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h+ATiNQAUiMDThIQDShHEXAnQEWAnC4B+QC3CAgUCMQgTCMjTBHQiJAuimAAQhZAAhigOg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h+ATiNQAUiMDThIQDShHEXAnQEWAnC4B+QC3CAgUCMQgTCMjTBHQiJAuimAAQhZAAhigOg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h+ATiNQAUiMDThIQDShHEXAnQEWAnC4B+QC3CAgUCMQgTCMjTBHQiJAuimAAQhZAAhigOg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h+ATiNQAUiMDThIQDShHEXAnQEWAnC4B+QC3CAgUCMQgTCMjTBHQiJAuimAAQhZAAhigOg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h+ATiNQAUiMDThIQDShHEXAnQEWAnC4B+QC3CAgUCMQgTCMjTBHQiJAuimAAQhZAAhigOg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h+ATiNQAUiMDThIQDShHEXAnQEWAnC4B+QC3CAgUCMQgTCMjTBHQiJAuimAAQhZAAhigOg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h+ATiNQAUiMDThIQDShHEXAnQEWAnC4B+QC3CAgUCMQgTCMjTBHQiJAuimAAQhZAAhigOg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h+ATiNQAUiMDThIQDShHEXAnQEWAnC4B+QC3CAgUCMQgTCMjTBHQiJAuimAAQhZAAhigOg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h+ATiNQAUiMDThIQDShHEXAnQEWAnC4B+QC3CAgUCMQgTCMjTBHQiJAuimAAQhZAAhigOg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h+ATiNQAUiMDThIQDShHEXAnQEWAnC4B+QC3CAgUCMQgTCMjTBHQiJAuimAAQhZAAhigOg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h+ATiNQAUiMDThIQDShHEXAnQEWAnC4B+QC3CAgUCMQgTCMjTBHQiJAuimAAQhZAAhigOg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h+ATiNQAUiMDThIQDShHEXAnQEWAnC4B+QC3CAgUCMQgTCMjTBHQiJAuimAAQhZAAhigOg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h+ATiNQAUiMDThIQDShHEXAnQEWAnC4B+QC3CAgUCMQgTCMjTBHQiJAuimAAQhZAAhigOg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h+ATiNQAUiMDThIQDShHEXAnQEWAnC4B+QC3CAgUCMQgTCMjTBHQiJAuimAAQhZAAhigOg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h+ATiNQAUiMDThIQDShHEXAnQEWAnC4B+QC3CAgUCMQgTCMjTBHQiJAuimAAQhZAAhigOg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h+ATiNQAUiMDThIQDShHEXAnQEWAnC4B+QC3CAgUCMQgTCMjTBHQiJAuimAAQhZAAhigOg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h+ATiNQAUiMDThIQDShHEXAnQEWAnC4B+QC3CAgUCMQgTCMjTBHQiJAuimAAQhZAAhigOg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AF3ANQkXgmi2h/Qi3h+ATiNQAUiMDThIQDShHEXAnQEWAnC4B+QC3CAgUCMQgTCMjTBHQiJAuimAAQhZAAhigOg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_1_graphics_16,x:83.9458,y:-54.3381}).wait(1).to({graphics:mask_1_graphics_17,x:89.4452,y:-57.2104}).wait(1).to({graphics:mask_1_graphics_18,x:94.1003,y:-59.6417}).wait(1).to({graphics:mask_1_graphics_19,x:97.9815,y:-61.6689}).wait(1).to({graphics:mask_1_graphics_20,x:101.1592,y:-63.3285}).wait(1).to({graphics:mask_1_graphics_21,x:103.7036,y:-64.6575}).wait(1).to({graphics:mask_1_graphics_22,x:105.6853,y:-65.6925}).wait(1).to({graphics:mask_1_graphics_23,x:107.1745,y:-66.4703}).wait(1).to({graphics:mask_1_graphics_24,x:108.2415,y:-67.0276}).wait(1).to({graphics:mask_1_graphics_25,x:108.9568,y:-67.4012}).wait(1).to({graphics:mask_1_graphics_26,x:109.3906,y:-67.6278}).wait(1).to({graphics:mask_1_graphics_27,x:109.6134,y:-67.7441}).wait(1).to({graphics:mask_1_graphics_28,x:109.6955,y:-67.787}).wait(1).to({graphics:mask_1_graphics_29,x:109.7072,y:-67.7931}).wait(1).to({graphics:mask_1_graphics_30,x:109.7072,y:-67.7931}).wait(1).to({graphics:mask_1_graphics_31,x:109.7072,y:-67.7931}).wait(1).to({graphics:mask_1_graphics_32,x:109.7072,y:-67.7931}).wait(1).to({graphics:mask_1_graphics_33,x:109.7072,y:-67.7931}).wait(1).to({graphics:mask_1_graphics_34,x:109.7072,y:-67.7931}).wait(1).to({graphics:mask_1_graphics_35,x:109.7072,y:-67.7931}).wait(1).to({graphics:mask_1_graphics_36,x:109.7072,y:-67.7931}).wait(1).to({graphics:mask_1_graphics_37,x:109.7072,y:-67.7931}).wait(1).to({graphics:mask_1_graphics_38,x:109.7072,y:-67.7931}).wait(1).to({graphics:mask_1_graphics_39,x:109.7072,y:-67.7931}).wait(1).to({graphics:mask_1_graphics_40,x:109.7072,y:-67.7931}).wait(1).to({graphics:mask_1_graphics_41,x:109.7072,y:-67.7931}).wait(1).to({graphics:mask_1_graphics_42,x:109.7072,y:-67.7931}).wait(1).to({graphics:mask_1_graphics_43,x:109.7072,y:-67.7931}).wait(1).to({graphics:mask_1_graphics_44,x:109.7072,y:-67.7931}).wait(1).to({graphics:mask_1_graphics_45,x:109.7072,y:-67.7931}).wait(1).to({graphics:mask_1_graphics_46,x:109.7072,y:-67.7931}).wait(1).to({graphics:mask_1_graphics_47,x:109.7072,y:-67.7931}).wait(1).to({graphics:mask_1_graphics_48,x:109.7072,y:-67.7931}).wait(1).to({graphics:mask_1_graphics_49,x:109.7072,y:-67.7931}).wait(1).to({graphics:mask_1_graphics_50,x:109.7072,y:-67.7931}).wait(1).to({graphics:mask_1_graphics_51,x:109.7072,y:-67.7931}).wait(1).to({graphics:mask_1_graphics_52,x:109.7072,y:-67.7931}).wait(1).to({graphics:mask_1_graphics_53,x:109.7072,y:-67.7931}).wait(1).to({graphics:null,x:0,y:0}).wait(96));

	// sb_circle_copy_copy
	this.instance_1 = new lib.sb_circle("synched",0);
	this.instance_1.setTransform(127.5,-53.5,1,0.9998);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).wait(37).to({startPosition:37},0).to({_off:true},1).wait(96));

	// sb_circle_mask3 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_16 = new cjs.Graphics().p("ALgjQQhRgHg2gbQg3gbADggQADgfA6gRQA7gRBQAHQBRAIA2AbQA3AbgDAfQgDAgg6ARQgpALg0AAQgWAAgYgCg");
	var mask_2_graphics_17 = new cjs.Graphics().p("AJ0hnQidgPhrg1Qhrg1AGg8QAGg9ByghQBzghCdAOQCdAOBrA1QBrA1gGA9QgFA9hzAhQhQAXhlAAQgsAAgvgEg");
	var mask_2_graphics_18 = new cjs.Graphics().p("AIZgPQjegUiXhLQiXhLAIhWQAIhWCiguQCigvDeAVQDeAUCXBKQCXBLgIBWQgIBWiiAuQhxAhiPAAQg9AAhDgGg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AHNA6QkTgZi7hcQi8hdAJhrQAKhrDJg6QDKg6EUAZQETAZC8BdQC8BdgKBrQgJBrjKA5QiNAoixAAQhNAAhTgHg");
	var mask_2_graphics_20 = new cjs.Graphics().p("AGPB2QlAgdjZhrQjahsALh8QAMh8DqhDQDphDFAAdQFAAdDaBsQDaBsgLB8QgLB7jrBDQijAvjOAAQhYAAhhgJg");
	var mask_2_graphics_21 = new cjs.Graphics().p("AFeCmQljggjyh4Qjyh2AMiKQANiKEEhKQEDhLFjAgQFkAhDyB3QDyB4gMCKQgNCJkEBKQi2A0jkAAQhiAAhrgKg");
	var mask_2_graphics_22 = new cjs.Graphics().p("AE3DMQl+gjkGiBQkEiAANiUQAOiUEYhRQEYhQF+AjQF/AiEFCBQEGCCgOCUQgOCTkYBQQjEA4j2AAQhqAAhzgKg");
	var mask_2_graphics_23 = new cjs.Graphics().p("AEaDoQmTgkkTiJQkUiGAPidQAOicEnhVQEohUGTAkQGUAlETCIQETCIgOCcQgPCcknBUQjPA7kDAAQhwAAh5gLg");
	var mask_2_graphics_24 = new cjs.Graphics().p("AEFD9QmigmkdiOQkdiLAOijQAPiiEyhYQEzhXGhAmQGjAmEdCMQEeCOgPCiQgPChkyBXQjWA+kNAAQh0AAh+gLg");
	var mask_2_graphics_25 = new cjs.Graphics().p("AD3EKQmsgnkkiQQkkiQAPilQAPimE6haQE5haGsAnQGtAnEkCQQEkCQgPCmQgPClk6BaQjbA/kUAAQh2AAiBgMg");
	var mask_2_graphics_26 = new cjs.Graphics().p("ADvESQmygnkpiTQkoiRAQioQAPioE+hcQE+haGyAnQGyAnEoCSQEpCTgPCoQgQCok+BaQjeBAkYAAQh4AAiCgMg");
	var mask_2_graphics_27 = new cjs.Graphics().p("ADqEXQm1gokqiUQkqiSAPipQAQiqFAhcQFAhbG1AnQG2AoEqCTQEqCUgPCpQgQCplABbQjgBAkZAAQh5AAiEgLg");
	var mask_2_graphics_28 = new cjs.Graphics().p("ADpEYQm2gnksiVQkriSAQiqQAPiqFBhcQFChcG1AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBAkaAAQh5AAiEgMg");
	var mask_2_graphics_29 = new cjs.Graphics().p("ADoEZQm2gokriUQkriTAPiqQAQiqFBhcQFBhcG2AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBBkaAAQh6AAiEgMg");
	var mask_2_graphics_30 = new cjs.Graphics().p("ADoEZQm2gokriUQkriTAPiqQAQiqFBhcQFBhcG2AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBBkaAAQh6AAiEgMg");
	var mask_2_graphics_31 = new cjs.Graphics().p("ADoEZQm2gokriUQkriTAPiqQAQiqFBhcQFBhcG2AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBBkaAAQh6AAiEgMg");
	var mask_2_graphics_32 = new cjs.Graphics().p("ADoEZQm2gokriUQkriTAPiqQAQiqFBhcQFBhcG2AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBBkaAAQh6AAiEgMg");
	var mask_2_graphics_33 = new cjs.Graphics().p("ADoEZQm2gokriUQkriTAPiqQAQiqFBhcQFBhcG2AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBBkaAAQh6AAiEgMg");
	var mask_2_graphics_34 = new cjs.Graphics().p("ADoEZQm2gokriUQkriTAPiqQAQiqFBhcQFBhcG2AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBBkaAAQh6AAiEgMg");
	var mask_2_graphics_35 = new cjs.Graphics().p("ADoEZQm2gokriUQkriTAPiqQAQiqFBhcQFBhcG2AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBBkaAAQh6AAiEgMg");
	var mask_2_graphics_36 = new cjs.Graphics().p("ADoEZQm2gokriUQkriTAPiqQAQiqFBhcQFBhcG2AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBBkaAAQh6AAiEgMg");
	var mask_2_graphics_37 = new cjs.Graphics().p("ADoEZQm2gokriUQkriTAPiqQAQiqFBhcQFBhcG2AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBBkaAAQh6AAiEgMg");
	var mask_2_graphics_38 = new cjs.Graphics().p("ADoEZQm2gokriUQkriTAPiqQAQiqFBhcQFBhcG2AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBBkaAAQh6AAiEgMg");
	var mask_2_graphics_39 = new cjs.Graphics().p("ADoEZQm2gokriUQkriTAPiqQAQiqFBhcQFBhcG2AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBBkaAAQh6AAiEgMg");
	var mask_2_graphics_40 = new cjs.Graphics().p("ADoEZQm2gokriUQkriTAPiqQAQiqFBhcQFBhcG2AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBBkaAAQh6AAiEgMg");
	var mask_2_graphics_41 = new cjs.Graphics().p("ADoEZQm2gokriUQkriTAPiqQAQiqFBhcQFBhcG2AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBBkaAAQh6AAiEgMg");
	var mask_2_graphics_42 = new cjs.Graphics().p("ADoEZQm2gokriUQkriTAPiqQAQiqFBhcQFBhcG2AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBBkaAAQh6AAiEgMg");
	var mask_2_graphics_43 = new cjs.Graphics().p("ADoEZQm2gokriUQkriTAPiqQAQiqFBhcQFBhcG2AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBBkaAAQh6AAiEgMg");
	var mask_2_graphics_44 = new cjs.Graphics().p("ADoEZQm2gokriUQkriTAPiqQAQiqFBhcQFBhcG2AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBBkaAAQh6AAiEgMg");
	var mask_2_graphics_45 = new cjs.Graphics().p("ADoEZQm2gokriUQkriTAPiqQAQiqFBhcQFBhcG2AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBBkaAAQh6AAiEgMg");
	var mask_2_graphics_46 = new cjs.Graphics().p("ADoEZQm2gokriUQkriTAPiqQAQiqFBhcQFBhcG2AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBBkaAAQh6AAiEgMg");
	var mask_2_graphics_47 = new cjs.Graphics().p("ADoEZQm2gokriUQkriTAPiqQAQiqFBhcQFBhcG2AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBBkaAAQh6AAiEgMg");
	var mask_2_graphics_48 = new cjs.Graphics().p("ADoEZQm2gokriUQkriTAPiqQAQiqFBhcQFBhcG2AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBBkaAAQh6AAiEgMg");
	var mask_2_graphics_49 = new cjs.Graphics().p("ADoEZQm2gokriUQkriTAPiqQAQiqFBhcQFBhcG2AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBBkaAAQh6AAiEgMg");
	var mask_2_graphics_50 = new cjs.Graphics().p("ADoEZQm2gokriUQkriTAPiqQAQiqFBhcQFBhcG2AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBBkaAAQh6AAiEgMg");
	var mask_2_graphics_51 = new cjs.Graphics().p("ADoEZQm2gokriUQkriTAPiqQAQiqFBhcQFBhcG2AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBBkaAAQh6AAiEgMg");
	var mask_2_graphics_52 = new cjs.Graphics().p("ADoEZQm2gokriUQkriTAPiqQAQiqFBhcQFBhcG2AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBBkaAAQh6AAiEgMg");
	var mask_2_graphics_53 = new cjs.Graphics().p("ADoEZQm2gokriUQkriTAPiqQAQiqFBhcQFBhcG2AoQG3AnErCUQEsCUgQCqQgPCplCBcQjgBBkaAAQh6AAiEgMg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_2_graphics_16,x:93.6468,y:-36.1823}).wait(1).to({graphics:mask_2_graphics_17,x:102.0513,y:-40.229}).wait(1).to({graphics:mask_2_graphics_18,x:109.1655,y:-43.6545}).wait(1).to({graphics:mask_2_graphics_19,x:115.097,y:-46.5105}).wait(1).to({graphics:mask_2_graphics_20,x:119.9533,y:-48.8488}).wait(1).to({graphics:mask_2_graphics_21,x:123.8419,y:-50.7211}).wait(1).to({graphics:mask_2_graphics_22,x:126.8704,y:-52.1793}).wait(1).to({graphics:mask_2_graphics_23,x:129.1462,y:-53.2751}).wait(1).to({graphics:mask_2_graphics_24,x:130.7769,y:-54.0603}).wait(1).to({graphics:mask_2_graphics_25,x:131.8701,y:-54.5867}).wait(1).to({graphics:mask_2_graphics_26,x:132.5331,y:-54.9059}).wait(1).to({graphics:mask_2_graphics_27,x:132.8736,y:-55.0699}).wait(1).to({graphics:mask_2_graphics_28,x:132.999,y:-55.1302}).wait(1).to({graphics:mask_2_graphics_29,x:133.0169,y:-55.1158}).wait(1).to({graphics:mask_2_graphics_30,x:133.0169,y:-55.1158}).wait(1).to({graphics:mask_2_graphics_31,x:133.0169,y:-55.1158}).wait(1).to({graphics:mask_2_graphics_32,x:133.0169,y:-55.1158}).wait(1).to({graphics:mask_2_graphics_33,x:133.0169,y:-55.1158}).wait(1).to({graphics:mask_2_graphics_34,x:133.0169,y:-55.1158}).wait(1).to({graphics:mask_2_graphics_35,x:133.0169,y:-55.1158}).wait(1).to({graphics:mask_2_graphics_36,x:133.0169,y:-55.1158}).wait(1).to({graphics:mask_2_graphics_37,x:133.0169,y:-55.1158}).wait(1).to({graphics:mask_2_graphics_38,x:133.0169,y:-55.1158}).wait(1).to({graphics:mask_2_graphics_39,x:133.0169,y:-55.1158}).wait(1).to({graphics:mask_2_graphics_40,x:133.0169,y:-55.1158}).wait(1).to({graphics:mask_2_graphics_41,x:133.0169,y:-55.1158}).wait(1).to({graphics:mask_2_graphics_42,x:133.0169,y:-55.1158}).wait(1).to({graphics:mask_2_graphics_43,x:133.0169,y:-55.1158}).wait(1).to({graphics:mask_2_graphics_44,x:133.0169,y:-55.1158}).wait(1).to({graphics:mask_2_graphics_45,x:133.0169,y:-55.1158}).wait(1).to({graphics:mask_2_graphics_46,x:133.0169,y:-55.1158}).wait(1).to({graphics:mask_2_graphics_47,x:133.0169,y:-55.1158}).wait(1).to({graphics:mask_2_graphics_48,x:133.0169,y:-55.1158}).wait(1).to({graphics:mask_2_graphics_49,x:133.0169,y:-55.1158}).wait(1).to({graphics:mask_2_graphics_50,x:133.0169,y:-55.1158}).wait(1).to({graphics:mask_2_graphics_51,x:133.0169,y:-55.1158}).wait(1).to({graphics:mask_2_graphics_52,x:133.0169,y:-55.1158}).wait(1).to({graphics:mask_2_graphics_53,x:133.0169,y:-55.1158}).wait(1).to({graphics:null,x:0,y:0}).wait(96));

	// sb_circle_copy
	this.instance_2 = new lib.sb_circle("synched",0);
	this.instance_2.setTransform(127.5,-53.5,1,0.9998);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).wait(37).to({startPosition:37},0).to({_off:true},1).wait(96));

	// sb_circle_mask4 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_16 = new cjs.Graphics().p("AIiAVQg4geAAgrQAAgrA4gfQA5gfBRAAQBRAAA5AfQA4AfABArQgBArg4AeQg5AfhRAAQhRAAg5gfg");
	var mask_3_graphics_17 = new cjs.Graphics().p("AChDDQiXhRAAhyQAAhxCXhRQCWhRDVAAQDVAACXBRQCWBRAABxQAAByiWBRQiXBRjVAAQjVAAiWhRg");
	var mask_3_graphics_18 = new cjs.Graphics().p("AikEqQjmh7AAivQAAiuDmh7QDkh8FFAAQFFAADmB8QDlB7AACuQAACvjlB7QjmB8lFAAQlFAAjkh8g");
	var mask_3_graphics_19 = new cjs.Graphics().p("Am0GAQkoifAAjhQAAjgEoifQEnifGhAAQGjAAEnCfQEoCfAADgQAADhkoCfQknCfmjAAQmhAAknifg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AqTHGQlei8AAkKQAAkJFei8QFdi8HuAAQHvAAFeC8QFdC8AAEJQAAEKldC8QleC8nvAAQnuAAldi8g");
	var mask_3_graphics_21 = new cjs.Graphics().p("AtGH+QmJjTAAkrQAAkqGJjTQGJjUIrAAQIsAAGJDUQGJDTAAEqQAAErmJDTQmJDUosAAQorAAmJjUg");
	var mask_3_graphics_22 = new cjs.Graphics().p("AvRIqQmqjmAAlEQAAlDGqjmQGrjlJbAAQJbAAGrDlQGrDmAAFDQAAFEmrDmQmrDlpbAAQpbAAmrjlg");
	var mask_3_graphics_23 = new cjs.Graphics().p("Aw5JLQnEjzAAlYQAAlXHEjzQHEjzJ/AAQJ/AAHEDzQHEDzAAFXQAAFYnEDzQnEDzp/AAQp/AAnEjzg");
	var mask_3_graphics_24 = new cjs.Graphics().p("AxuJiQnWj8AAlmQAAllHWj9QHWj8KYAAQKZAAHWD8QHWD9AAFlQAAFmnWD8QnWD9qZAAQqYAAnWj9g");
	var mask_3_graphics_25 = new cjs.Graphics().p("AyMJyQnikDAAlvQAAluHikDQHjkEKpAAQKqAAHjEEQHiEDAAFuQAAFvniEDQnjEEqqAAQqpAAnjkEg");
	var mask_3_graphics_26 = new cjs.Graphics().p("AyeJ8QnpkIAAl0QAAlzHpkIQHqkHK0AAQK1AAHpEHQHqEIAAFzQAAF0nqEIQnpEHq1AAQq0AAnqkHg");
	var mask_3_graphics_27 = new cjs.Graphics().p("AynKAQntkJAAl3QAAl2HtkKQHukJK5AAQK6AAHuEJQHtEKAAF2QAAF3ntEJQnuEKq6AAQq5AAnukKg");
	var mask_3_graphics_28 = new cjs.Graphics().p("AyqKCQnvkKAAl4QAAl3HvkLQHvkKK7AAQK8AAHvEKQHvELAAF3QAAF4nvEKQnvELq8AAQq7AAnvkLg");
	var mask_3_graphics_29 = new cjs.Graphics().p("AyqKDQnwkLABl4QgBl4HwkKQHukKK8AAQK9AAHuEKQHvEKAAF4QAAF4nvELQnuEKq9AAQq8AAnukKg");
	var mask_3_graphics_30 = new cjs.Graphics().p("AyqKDQnwkLABl4QgBl4HwkKQHukKK8AAQK9AAHuEKQHvEKAAF4QAAF4nvELQnuEKq9AAQq8AAnukKg");
	var mask_3_graphics_31 = new cjs.Graphics().p("AyqKDQnwkLABl4QgBl4HwkKQHukKK8AAQK9AAHuEKQHvEKAAF4QAAF4nvELQnuEKq9AAQq8AAnukKg");
	var mask_3_graphics_32 = new cjs.Graphics().p("AyqKDQnwkLABl4QgBl4HwkKQHukKK8AAQK9AAHuEKQHvEKAAF4QAAF4nvELQnuEKq9AAQq8AAnukKg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AyqKDQnwkLABl4QgBl4HwkKQHukKK8AAQK9AAHuEKQHvEKAAF4QAAF4nvELQnuEKq9AAQq8AAnukKg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AyqKDQnwkLABl4QgBl4HwkKQHukKK8AAQK9AAHuEKQHvEKAAF4QAAF4nvELQnuEKq9AAQq8AAnukKg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AyqKDQnwkLABl4QgBl4HwkKQHukKK8AAQK9AAHuEKQHvEKAAF4QAAF4nvELQnuEKq9AAQq8AAnukKg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AyqKDQnwkLABl4QgBl4HwkKQHukKK8AAQK9AAHuEKQHvEKAAF4QAAF4nvELQnuEKq9AAQq8AAnukKg");
	var mask_3_graphics_37 = new cjs.Graphics().p("AyqKDQnwkLABl4QgBl4HwkKQHukKK8AAQK9AAHuEKQHvEKAAF4QAAF4nvELQnuEKq9AAQq8AAnukKg");
	var mask_3_graphics_38 = new cjs.Graphics().p("AyqKDQnwkLABl4QgBl4HwkKQHukKK8AAQK9AAHuEKQHvEKAAF4QAAF4nvELQnuEKq9AAQq8AAnukKg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AyqKDQnwkLABl4QgBl4HwkKQHukKK8AAQK9AAHuEKQHvEKAAF4QAAF4nvELQnuEKq9AAQq8AAnukKg");
	var mask_3_graphics_40 = new cjs.Graphics().p("AyqKDQnwkLABl4QgBl4HwkKQHukKK8AAQK9AAHuEKQHvEKAAF4QAAF4nvELQnuEKq9AAQq8AAnukKg");
	var mask_3_graphics_41 = new cjs.Graphics().p("AyqKDQnwkLABl4QgBl4HwkKQHukKK8AAQK9AAHuEKQHvEKAAF4QAAF4nvELQnuEKq9AAQq8AAnukKg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AyqKDQnwkLABl4QgBl4HwkKQHukKK8AAQK9AAHuEKQHvEKAAF4QAAF4nvELQnuEKq9AAQq8AAnukKg");
	var mask_3_graphics_43 = new cjs.Graphics().p("AyqKDQnwkLABl4QgBl4HwkKQHukKK8AAQK9AAHuEKQHvEKAAF4QAAF4nvELQnuEKq9AAQq8AAnukKg");
	var mask_3_graphics_44 = new cjs.Graphics().p("AyqKDQnwkLABl4QgBl4HwkKQHukKK8AAQK9AAHuEKQHvEKAAF4QAAF4nvELQnuEKq9AAQq8AAnukKg");
	var mask_3_graphics_45 = new cjs.Graphics().p("AyqKDQnwkLABl4QgBl4HwkKQHukKK8AAQK9AAHuEKQHvEKAAF4QAAF4nvELQnuEKq9AAQq8AAnukKg");
	var mask_3_graphics_46 = new cjs.Graphics().p("AyqKDQnwkLABl4QgBl4HwkKQHukKK8AAQK9AAHuEKQHvEKAAF4QAAF4nvELQnuEKq9AAQq8AAnukKg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AyqKDQnwkLABl4QgBl4HwkKQHukKK8AAQK9AAHuEKQHvEKAAF4QAAF4nvELQnuEKq9AAQq8AAnukKg");
	var mask_3_graphics_48 = new cjs.Graphics().p("AyqKDQnwkLABl4QgBl4HwkKQHukKK8AAQK9AAHuEKQHvEKAAF4QAAF4nvELQnuEKq9AAQq8AAnukKg");
	var mask_3_graphics_49 = new cjs.Graphics().p("AyqKDQnwkLABl4QgBl4HwkKQHukKK8AAQK9AAHuEKQHvEKAAF4QAAF4nvELQnuEKq9AAQq8AAnukKg");
	var mask_3_graphics_50 = new cjs.Graphics().p("AyqKDQnwkLABl4QgBl4HwkKQHukKK8AAQK9AAHuEKQHvEKAAF4QAAF4nvELQnuEKq9AAQq8AAnukKg");
	var mask_3_graphics_51 = new cjs.Graphics().p("AyqKDQnwkLABl4QgBl4HwkKQHukKK8AAQK9AAHuEKQHvEKAAF4QAAF4nvELQnuEKq9AAQq8AAnukKg");
	var mask_3_graphics_52 = new cjs.Graphics().p("AyqKDQnwkLABl4QgBl4HwkKQHukKK8AAQK9AAHuEKQHvEKAAF4QAAF4nvELQnuEKq9AAQq8AAnukKg");
	var mask_3_graphics_53 = new cjs.Graphics().p("AyqKDQnwkLABl4QgBl4HwkKQHukKK8AAQK9AAHuEKQHvEKAAF4QAAF4nvELQnuEKq9AAQq8AAnukKg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_3_graphics_16,x:87.8497,y:-15.7541}).wait(1).to({graphics:mask_3_graphics_17,x:103.8176,y:-21.05}).wait(1).to({graphics:mask_3_graphics_18,x:117.334,y:-21.05}).wait(1).to({graphics:mask_3_graphics_19,x:128.6034,y:-21.05}).wait(1).to({graphics:mask_3_graphics_20,x:137.8301,y:-21.05}).wait(1).to({graphics:mask_3_graphics_21,x:145.2182,y:-21.05}).wait(1).to({graphics:mask_3_graphics_22,x:150.972,y:-21.05}).wait(1).to({graphics:mask_3_graphics_23,x:155.2959,y:-21.05}).wait(1).to({graphics:mask_3_graphics_24,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_25,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_26,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_27,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_28,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_29,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_30,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_31,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_32,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_33,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_34,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_35,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_36,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_37,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_38,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_39,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_40,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_41,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_42,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_43,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_44,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_45,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_46,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_47,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_48,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_49,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_50,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_51,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_52,x:156.25,y:-21.05}).wait(1).to({graphics:mask_3_graphics_53,x:156.25,y:-21.05}).wait(1).to({graphics:null,x:0,y:0}).wait(96));

	// sb_circle_copy_copy
	this.instance_3 = new lib.sb_circle("synched",0);
	this.instance_3.setTransform(127.5,-53.5,1,0.9998);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16).to({_off:false},0).wait(37).to({startPosition:37},0).to({_off:true},1).wait(96));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-168.9,337,230.9);


(lib.an_sc3_t = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_NIM39
	this.instance = new lib.sb_sc3_NIM39("synched",0);
	this.instance.setTransform(-39.45,-49.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-37.4,y:-16.4,alpha:1,startPosition:29},22,cjs.Ease.cubicOut).wait(1));

	// sb_sc3_tech
	this.instance_1 = new lib.sb_sc3_tech("synched",0);
	this.instance_1.setTransform(24.1,-14.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:26.15,y:18.4,alpha:1,startPosition:29},22,cjs.Ease.cubicOut).wait(1));

	// an_line
	this.instance_2 = new lib.an_line("synched",0,false);
	this.instance_2.setTransform(-1.45,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.5,-64.4,280.5,107.2);


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
	this.instance = new lib.sb_sc3_car("synched",0);
	this.instance.setTransform(-501.4,174.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-65.85,y:0.85},31,cjs.Ease.quintOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-786.3,-175.9,1005.5999999999999,573.5);


(lib.sb_sc2_t = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sc2_t
	this.instance = new lib.sc2t();
	this.instance.setTransform(-1.3,-1.9,1,1,0,0,0,140.7,44.1);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,0.749)",0,0,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.8,-48.5,287,100);


(lib.an_sc2_t = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_t
	this.instance = new lib.sb_sc2_t("synched",0);
	this.instance.setTransform(-162.55,-37.85);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0,alpha:1},22,cjs.Ease.cubicOut).wait(1));

	// an_line
	this.instance_1 = new lib.an_line("synched",0,false);
	this.instance_1.setTransform(-163.1,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-306.4,-86.4,288,138.4);


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
	this.instance = new lib.sb_sc2_car("synched",0);
	this.instance.setTransform(-253.35,-57.8,0.6043,0.6043,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,scaleX:1,scaleY:1,x:152.35,y:9.4},13,cjs.Ease.circInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-407.4,-131.5,815.0999999999999,262.3);


(lib.sb_sc1_t1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ll
	this.instance = new lib.Group_2();
	this.instance.setTransform(-8.3,-8.65,1,1,0,0,0,150,15.7);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,0.749)",0,0,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:true},1).wait(8).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.3,-40.3,335,67);


(lib.sb_sc1_t = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ll
	this.instance = new lib.Group();
	this.instance.setTransform(-2.45,-27.85,1,1,0,0,0,164.8,34.6);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,0.749)",0,0,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.2,-78.4,365,104);


(lib.an_sc1_t = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc1_t1
	this.instance = new lib.sb_sc1_t1("synched",0);
	this.instance.setTransform(425.85,144.6,1,1.8152,0,56.5715,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({scaleY:1,skewX:0,x:5.5,startPosition:15},7,cjs.Ease.cubicOut).wait(1));

	// sb_sc1_t
	this.instance_1 = new lib.sb_sc1_t("synched",0);
	this.instance_1.setTransform(0,-95);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:95,alpha:1,startPosition:15},23,cjs.Ease.backInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.2,-192,808,365.7);


(lib.an_sc1_car = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(547,-100.2,0.4265,0.4265,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,scaleX:1,scaleY:1,x:-126.9,y:0},15,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-365.5,-154.9,1014.3,296.5);


(lib.sb_frame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sh
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(253,252,252,0.004)","rgba(244,244,244,0.031)","rgba(231,230,229,0.075)","rgba(211,210,209,0.137)","rgba(186,183,182,0.216)","rgba(155,151,150,0.314)","rgba(118,113,111,0.431)","rgba(76,69,67,0.561)","rgba(33,24,22,0.698)"],[0.373,0.482,0.549,0.604,0.655,0.702,0.745,0.784,0.824,0.855],-104.3,-30.8,137.2,40.5).s().p("ArRNcIAD66IWgACIgCa7gAqMJeIUoACIAB1OI0ngCg");
	this.shape.setTransform(-0.925,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	// li
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.996],-189.8,-147.4,60.9,47.4).s().p("A790TMAq/gK0MAM8AzbMgrAAK0gA5FxiMAKMAojMAnYgJ6MgKMgoig");
	this.shape_1.setTransform(-0.9833,0.9765,0.5079,0.5079,14.1928);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(20));

	// innsh_up
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#909090").s().p("AOf0AMgnNAJ2IgEgPMAnYgJ5MAKNAoiIgLADg");
	this.shape_2.setTransform(3.7505,-21.7807,0.5079,0.5079,14.1928);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(20));

	// innsh_down
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D5D5D5").s().p("AslnxIUAlCIFLUlI0AFCgAsfnuIFJUbIT2k+IlJ0cg");
	this.shape_3.setTransform(-0.1017,-6.2137,1,1,14.1963);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(20));

	// sh_frame-white
	this.instance = new lib.sh_framewhite();
	this.instance.setTransform(-1,0.9,1,1,0,0,0,72.2,86.2);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.227)",3,2,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.2,-88.3,158,186);


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

	// an_sc5_t
	this.instance = new lib.an_sc5_t("synched",0,false);
	this.instance.setTransform(97.5,-191.15);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).wait(100).to({startPosition:29},0).to({_off:true},1).wait(14).to({_off:false},0).wait(1));

	// an_sc5_btn
	this.instance_1 = new lib.an_sc5btn("synched",0,false);
	this.instance_1.setTransform(282.55,214.7,1,1,0,0,0,201.5,38.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).wait(85).to({startPosition:42},0).to({_off:true},1).wait(14).to({_off:false},0).wait(1));

	// an_sc1_car
	this.instance_2 = new lib.an_sc1_car("synched",0,false);
	this.instance_2.setTransform(94.45,89.7,0.9369,0.9369,0,0,0,0.3,0.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).wait(96).to({startPosition:15},0).to({_off:true},1).wait(14).to({_off:false},0).wait(1));

	// an_sc5_60
	this.instance_3 = new lib.an_sc560("synched",0,false);
	this.instance_3.setTransform(105.75,-72.7,1,1,0,0,0,217,73);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).wait(95).to({startPosition:12},0).to({_off:true},1).wait(14).to({_off:false},0).wait(1));

	// sc5_bg
	this.instance_4 = new lib.sc1bg();
	this.instance_4.setTransform(-365,-298,1.997,1.9969);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(106).to({_off:true},1).wait(14).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-365,-298,1067,607.1);


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

	// an_sc4_t
	this.instance = new lib.an_sc4_t("synched",0,false);
	this.instance.setTransform(98.8,-184.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).wait(42));

	// an_sc4_car
	this.instance_1 = new lib.an_sc4_car("synched",0,false);
	this.instance_1.setTransform(81.5,80.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).wait(42));

	// sb_frame
	this.instance_2 = new lib.sb_frame("synched",0);
	this.instance_2.setTransform(-168.85,82,2.3086,2.0209,-18.5671,0,0,-0.4,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48));

	// sc4_bg
	this.instance_3 = new lib.sc4bg();
	this.instance_3.setTransform(-333,-273,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-384.5,-273,1346.2,585);


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

	// an_sc3_t
	this.instance = new lib.an_sc3_t("synched",0,false);
	this.instance.setTransform(124.65,-158.65);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).wait(46).to({startPosition:22},0).to({_off:true},1).wait(7));

	// an_sc3_car
	this.instance_1 = new lib.an_sc3_car("synched",0,false);
	this.instance_1.setTransform(-82.1,187.55);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).wait(46).to({startPosition:31},0).to({_off:true},1).wait(7));

	// an_carO2
	this.instance_2 = new lib.an_circle("synched",0,false);
	this.instance_2.setTransform(-100.9,192,1.178,1.1778,-9.1687,0,0,-0.3,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).wait(46).to({startPosition:46},0).to({_off:true},1).wait(7));

	// sb_frame
	this.instance_3 = new lib.sb_frame("synched",0);
	this.instance_3.setTransform(123.7,-75.75,2.879,2.5124,23.9421,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(52).to({startPosition:12},0).to({_off:true},1).wait(7));

	// sc3_bg
	this.instance_4 = new lib.sc3bg();
	this.instance_4.setTransform(-304,-247,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(52).to({_off:true},1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-868.4,-359.8,1276.5,944.9000000000001);


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

	// an_sc2_t
	this.instance = new lib.an_sc2_t("synched",0,false);
	this.instance.setTransform(299.95,-177.45);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).wait(30));

	// an_sc2_car
	this.instance_1 = new lib.an_sc2_car("synched",0,false);
	this.instance_1.setTransform(-245.2,57.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).wait(30));

	// sb_frame
	this.instance_2 = new lib.sb_frame("synched",0,false);
	this.instance_2.setTransform(112.25,77.9,2.3301,2.0525,0,-4.1913,175.809,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36));

	// sc2_bg
	this.instance_3 = new lib.sc2bg();
	this.instance_3.setTransform(-290,-266,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-652.6,-266,962.6,544.8);


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

	// an_sc1_t
	this.instance = new lib.an_sc1_t("synched",0,false);
	this.instance.setTransform(121.7,-262.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28));

	// an_sc1_car
	this.instance_1 = new lib.an_sc1_car("synched",0,false);
	this.instance_1.setTransform(217.3,61.05);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).wait(21));

	// sb_frame
	this.instance_2 = new lib.sb_frame("synched",0,false);
	this.instance_2.setTransform(-117.8,79.75,1.974,1.974,-13.9983,0,0,-2.5,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28));

	// sc1_bg
	this.instance_3 = new lib.sc1bg();
	this.instance_3.setTransform(-339,-313,1.997,1.9972);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-339,-454.5,1205.1,748.7);


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
	this.instance.setTransform(-382,-321);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));

	// sc5
	this.instance_1 = new lib.sc5("synched",0,false);
	this.instance_1.setTransform(-62.75,-48.45);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(187).to({_off:false},0).to({alpha:1},4).to({startPosition:121},107).to({mode:"single"},1).wait(1));

	// sc4
	this.instance_2 = new lib.sc4("synched",0,false);
	this.instance_2.setTransform(-32.35,-46.45);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(134).to({_off:false},0).to({alpha:1},4).to({startPosition:29},53).to({alpha:0},3).to({_off:true},1).wait(105));

	// sc3
	this.instance_3 = new lib.sc3("synched",0,false);
	this.instance_3.setTransform(-61.05,-73.05);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(81).to({_off:false},0).to({alpha:1},4).to({startPosition:39},53).to({alpha:0},3).to({_off:true},1).wait(158));

	// sc2
	this.instance_4 = new lib.sc2("synched",0,false);
	this.instance_4.setTransform(-75.5,-54.95);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(38).to({_off:false},0).to({alpha:1},4).to({startPosition:23},43).to({alpha:0},3).to({_off:true},1).wait(211));

	// sc1
	this.instance_5 = new lib.sc1("synched",0,false);
	this.instance_5.setTransform(-84.5,-37.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({startPosition:15},42).to({alpha:0},3).to({_off:true},1).wait(254));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-929.5,-492,1858.9,1004.1);


// stage content:
(lib._300x250 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(204.7,178.9,0.56,0.56,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300).to({startPosition:0},0).wait(300));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-147.9,36.3,872.8,429.2);
// library properties:
lib.properties = {
	id: '1083CF56E7D24CABB1F7156E242D0C2E',
	width: 336,
	height: 280,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/circle.png", id:"circle"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/sc1bg.jpg", id:"sc1bg"},
		{src:"images/sc1car1.png", id:"sc1car1"},
		{src:"images/sc2bg.jpg", id:"sc2bg"},
		{src:"images/sc2car.png", id:"sc2car"},
		{src:"images/sc3bg.jpg", id:"sc3bg"},
		{src:"images/sc3car1.png", id:"sc3car1"},
		{src:"images/sc4bg.jpg", id:"sc4bg"},
		{src:"images/sc4car.png", id:"sc4car"}
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
an.compositions['1083CF56E7D24CABB1F7156E242D0C2E'] = {
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