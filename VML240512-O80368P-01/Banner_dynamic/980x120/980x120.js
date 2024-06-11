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
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.doctor = function() {
	this.initialize(img.doctor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,570);


(lib.mark1 = function() {
	this.initialize(img.mark1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,109);


(lib.mark2 = function() {
	this.initialize(img.mark2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,108);


(lib.mark3 = function() {
	this.initialize(img.mark3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,109);


(lib.pd = function() {
	this.initialize(img.pd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,233,350);// helper functions:

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


(lib.sb_ttlimit = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#153184").ss(0.4).p("AAKgJQAPAAAIgIQAJgHAAgNIAAgKQAAgLgIgIQgKgHgOAAIgUAAQgOAAgJAHQgIAHAAAMIAAAKQAAANAIAHQAJAIAOAAgAgzBOQgOgMAAgWIAAgHQAAgNAGgKQAGgKAOgGQgKgGgFgJQgGgJAAgLIAAgKQAAgTAOgMQAOgLAWAAIAUAAQAXAAANALQAOAMAAATIAAAKQAAALgFAJQgFAJgKAGQAaANAAAaIAAAHQAAAVgPANQgNAMgZAAIgaAAQgYAAgOgMgAANBJQARAAAIgIQAKgHAAgOIAAgHQAAgOgKgJQgMgIgQAAIgUAAQgQAAgLAIQgKAJAAAOIAAAHQAAAOAJAHQAJAIAQAAg");
	this.shape.setTransform(198.35,10.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#153184").s().p("AgMBaQgZAAgOgMQgOgMgBgVIAAgIQABgNAGgJQAHgLANgFQgKgHgGgIQgFgKAAgKIAAgKQAAgUAOgMQAOgLAWAAIAVAAQAVAAAPALQAOAMgBAUIAAAKQAAAKgFAKQgFAIgKAHQAaAMABAaIAAAIQgBAUgPANQgOAMgYAAgAglAPQgKAIAAAOIAAAIQAAANAJAHQAJAJARgBIAZAAQARABAIgJQAKgHAAgNIAAgIQgBgOgJgIQgLgJgQAAIgVAAQgQAAgLAJgAgghBQgJAGAAANIAAAKQAAAMAJAIQAIAHAOAAIAVAAQAOAAAIgHQAJgIAAgMIAAgKQAAgMgJgHQgJgIgNABIgVAAQgOgBgIAIg");
	this.shape_1.setTransform(198.35,10.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#153184").ss(0.4).p("Ag5BJQAAgPAFgJQAEgKAMgJIA9gvQANgKAAgNIAAgIQAAgKgHgHQgHgHgNAAIgWAAQgNAAgIAJQgIAKAAAPIgSAAQAAgXAMgOQAOgNAVAAIAWAAQAWAAALALQANALAAASIAAAIQAAAVgUAPIg8AsQgJAIgDAGQgEAGAAANIBiAAIAAAQIh0AAg");
	this.shape_2.setTransform(181.425,10.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#153184").s().p("Ag5BZIAAgQQAAgPAFgKQAEgKAMgIIA9guQANgLAAgNIAAgIQAAgKgHgHQgHgHgNABIgWAAQgNgBgIAKQgIAJAAAPIgSAAQAAgXAMgOQAOgNAVAAIAWAAQAWAAALALQANALAAASIAAAIQAAAWgUAOIg8AsQgJAIgDAGQgEAHAAAMIBiAAIAAAQg");
	this.shape_3.setTransform(181.425,10.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#153184").ss(0.4).p("AAWhZIALAAIg3CzIgKAAg");
	this.shape_4.setTransform(165.8759,10.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#153184").s().p("AggBaIA2izIALAAIg3Czg");
	this.shape_5.setTransform(165.875,10.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#153184").ss(0.4).p("AgkBTQgNgIgGgNQgHgNAAgSIAAg+QAAgbAPgQQAOgPAYAAIAVAAQAVAAAMANQANANAAAVIgTAAQAAgOgHgIQgHgJgNAAIgVAAQgQAAgJALQgJALAAAUIAAAfQAGgKAMgHQALgGAMAAIAQAAQAWAAANAOQAOANAAAWIAAAKQAAAPgHANQgHANgMAGQgLAHgRAAIgRAAQgQAAgMgHgAAJBJQAQAAAJgKQAKgKAAgRIAAgKQAAgQgIgIQgIgIgPAAIgPAAQgPAAgLAJQgLAKgDAQIAAAJQAAAQAKAKQAJAJAPAAg");
	this.shape_6.setTransform(151.075,10.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#153184").s().p("AgIBaQgQAAgMgHQgNgIgGgNQgHgNAAgSIAAg+QAAgbAPgPQAOgQAYAAIAVAAQAVAAAMANQANANAAAVIgTAAQAAgNgHgJQgHgIgNAAIgVAAQgQgBgJAMQgJALAAATIAAAfQAGgJAMgHQALgGAMgBIAQAAQAWAAANAOQAOANAAAXIAAAJQAAAQgHAMQgHANgMAGQgLAHgRAAgAgcADQgLAKgDAQIAAAJQAAAQAKAKQAJAJAPAAIARAAQAQABAJgLQAKgJAAgSIAAgKQAAgQgIgIQgIgIgPAAIgPAAQgPAAgLAJg");
	this.shape_7.setTransform(151.075,10.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#153184").ss(0.4,1,1).p("ABfBLIAAAQIi9AAIAAgQIAeAAIAAh4IAQAAIAAB4IAwAAIAAilIAQAAIAABGIBFAAIAAAPIhFAAIAABQg");
	this.shape_8.setTransform(224.325,10.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#153184").s().p("AheBbIAAgPIAeAAIAAh5IAQAAIAAB5IAwAAIAAinIAQAAIAABHIBFAAIAAAPIhFAAIAABRIBPAAIAAAPg");
	this.shape_9.setTransform(224.325,10.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#153184").ss(0.4,1,1).p("ABJgDIgOgQQh9AGgIADQgBgIgEgIQAFAAAKgKQAPgMARgYIg4AAIAAgOICwAAIAAAOIhkAAQgUAbgUARIBigEIgagWIAMgIQAmAcAQAVgABfBIIAAAPIi8AAIAAgPIBWAAIAAgnIhDAAIAAgPIBDAAIAAgbIAPAAIAAAbIBFAAIAAAPIhFAAIAAAng");
	this.shape_10.setTransform(123.9,10.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#153184").s().p("AhdBXIAAgPIBVAAIAAgnIhCAAIAAgPIBCAAIAAgbIAPAAIAAAbIBGAAIAAAPIhGAAIAAAnIBYAAIAAAPgAA7gTQh9AGgIADQgBgIgEgIQAFAAAKgKQAPgMAQgYIg4AAIAAgOICxAAIAAAOIhkAAQgUAbgUARIBigDIgbgXIANgIQAmAcAQAWIgNAJg");
	this.shape_11.setTransform(123.9,10.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#153184").ss(0.4,1,1).p("AhYAUIBRAAIAAgRIhCAAIAAg6IBCAAIAAgOIhRAAIAAgNIBRAAIAAgMIAPAAIAAAMIBSAAIAAANIhSAAIAAAOIBEAAIAAA6IghAAQAcAMAWATIgMAJQgBgCgMgKIibADgAhdBVQAKgMAKgcIAOAGQgLAegJALgAA8gUIg0AAIAAAOIA0AAgAAIgsIAAANIA0AAIAAgNgAgHgGIAAgOIgzAAIAAAOgAg6gfIAzAAIAAgNIgzAAgAAQBEQgMgMgWgMIAKgJQAVAKAPANgAAdBSQAHAAADgDQACgEABgOQAGAEAIACQgCASgFAFQgFAGgPAAIgvAAQgRAAgHgEQgGgEAAgMIAAgeIAPAAIAAAeQAAAEADABQADABAKAAgABEAtQAUAYAGAQIgPAFQgGgRgTgXgAAIAUIApgBQgFgCgNgGIAJgIIggAAg");
	this.shape_12.setTransform(95.2,10.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#153184").s().p("AgSBgQgRgBgGgEQgHgDAAgMIAAgeIAQAAIAAAdQAAAEADACQADABAJAAIAtAAQAJAAACgDQACgFABgNQAGADAIACQgCATgFAFQgFAGgOAAgAhcBUQAKgLAJgcIAOAGQgLAdgJAMgAA2AyIAOgFQAUAXAGARIgPAFQgGgRgTgXgAgSAsIAKgJQAVAKAOANIgLAKQgMgMgWgMgABEAfIibADIgBgOIBRgBIAAgQIhCAAIAAg6IBCAAIAAgOIhRAAIAAgNIBRAAIAAgNIAPAAIAAANIBSAAIAAANIhSAAIAAAOIBEAAIAAA6IgiAAQAdAMAWATIgMAJIgNgMgAAIATIApAAIgSgJIAKgHIghAAgAAIgHIA0AAIAAgNIg0AAgAg6gHIAzAAIAAgNIgzAAgAAIgfIA0AAIAAgOIg0AAgAg6gfIAzAAIAAgOIgzAAg");
	this.shape_13.setTransform(95.2,10.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#153184").ss(0.4,1,1).p("ABigLIAAAcIgOAAIAAgSIg7AAQANAHAGAGIgJAGQgIgIgMgHIAHgEIgyAAIAAASIgOAAIAAgcIAVAAIAAg1IAkAAIADgLIg2AAIAAgMICDAAIAAAMIg8AAIgFALIAwAAIAAA1gABSAjQgIgLgQgOIAJgGQAPANAJALgAgGgLIBGAAIAAgJIhGAAgABAglIhGAAIAAAJIBGAAgAgGg3IAAAJIBGAAIAAgJgAgCA2QALAJAQAGQATgHAMgLIg4AAgABPAuQgMAQgYANQAaAHAcACQgEAFgEAIQgjgEgdgLQgZAKgnAFQgCgGgGgGQAhgEAWgGQgLgGgKgIIgWAMQgDgFgGgEQAPgHAHgEIgIgKIAMgEIAGAHQANgLAEgFQgHgCAAgLIAAgMIAMAAIAAAMQAAADACABQABABAGAAIAaAAQAEAAABgCQABgBABgGQAEACAGABQAAAJgEAEQgDADgIAAIgaAAIgJAJIA2AAIADgBgAgohcQgIAXgHASIAACUIgQAAIAAh2QgIAPgKAMIgIgPQAbghAPg2gAgDAKQgLARgLAHIgJgIQAMgGAJgPg");
	this.shape_14.setTransform(66.625,10.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#153184").s().p("AgvBVQAhgEAWgGQgLgGgKgIIgWAMQgDgGgGgEIAWgLIgIgJIAMgEIAGAHQANgLAEgFQgHgCAAgLIAAgMIAMAAIAAAMQAAABAAAAQAAABABABQAAAAAAAAQAAABABAAIAHABIAaAAQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgCABgFQAEACAGABQAAAJgEADQgDAEgIAAIgaAAIgJAJIA2AAIADgBIAKAFQgMARgYANQAaAHAcACQgEAEgEAJQgjgEgdgLQgZAKgnAFQgCgGgGgGgAgCA1QALAJAQAHQATgIAMgKIg4AAgAhHBhIAAh2QgIAPgKAMIgIgQQAbggAPg2IAPAEQgIAXgHASIAACUgAA6AJIAJgFQAPAMAJAMIgJAGQgIgLgQgOgAgiAaQAMgHAJgOIAKAFQgLAQgLAHgAAPADIAHgEIgyAAIAAARIgOAAIAAgbIAVAAIAAg1IAkAAIADgLIg2AAIAAgNICDAAIAAANIg8AAIgFALIAwAAIAAA1IAUAAIAAAbIgOAAIAAgRIg7AAQANAGAGAHIgJAGQgIgIgMgHgAgGgLIBGAAIAAgJIhGAAgAgGgdIBGAAIAAgIIhGAAgAgGguIBGAAIAAgJIhGAAg");
	this.shape_15.setTransform(66.625,10.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#153184").ss(0.4,1,1).p("AAog5IAAAcIAuAAIAAAOIgSAAIAAAXIAYAAIAAANIgYAAIAAA5QAAANgJADQgHADgcAAQAAgGgFgIIAdAAQAEAAAAgFIAAg5IhPAAIAAgNIBPAAIAAgXIhGAAIAAgOIAqAAIAAgcIg0AAIAAgOIA0AAIAAgZIAQAAIAAAZIA1AAIAAAOgAgvApIAAgwIgeAAIAAAwgAhNhEIAAAvIAeAAIAAgvgAggA4IgtAAIAAARIgPAAIAAibIA8AAgAgBAdQAPAQALAUIgNAIQgIgQgSgVg");
	this.shape_16.setTransform(38.5,10.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#153184").s().p("AATBSIAdAAQAEABAAgFIAAg4IhPAAIAAgOIBPAAIAAgXIhGAAIAAgOIAqAAIAAgbIg0AAIAAgPIA0AAIAAgZIAQAAIAAAZIA1AAIAAAPIg1AAIAAAbIAvAAIAAAOIgTAAIAAAXIAZAAIAAAOIgZAAIAAA5QAAAMgJAEQgGACgdAAQAAgGgFgJgAgOAkIANgHQAPAQALAUIgNAIQgIgQgSgVgAhcBJIAAibIA9AAIAACKIguAAIAAARgAhNAqIAeAAIAAgxIgeAAgAhNgUIAeAAIAAgvIgeAAg");
	this.shape_17.setTransform(38.5,10.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#153184").ss(0.4,1,1).p("AgbhWQgRAsgEALQATAWAAAXQAAATgJAGQgDADgIABIgOAAQgBgIgDgGQAHABAFgBQAFAAACgCQAEgCAAgMQAAgVgTgVIARgwIgfAAIAACqIgOAAIAAi5IAzAAIACAAgAgBhNIAAAaIA9AAIAAgagAgBgMIA9AAIAAgaIg9AAgABYATQgQANgVAMQARAYAYAKQgGAHgEAGQgugVgShFIgTAAIAABGIAkgJIABAOQgxAOgFADQgCgHgFgGQAIgEAAgLIAAicIBcAAIAABcIgrAAQAFATAHANQAUgNAOgMg");
	this.shape_18.setTransform(10.2,11.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#153184").s().p("AgZBQQAIgEAAgLIAAicIBcAAIAABcIgsAAQAGATAHANQAUgNANgMIALALQgQANgVAMQARAYAYAKQgHAHgDAGQgvgVgRhFIgTAAIAABGIAkgJIABAOQgxAOgFADQgCgHgFgGgAgBgMIA8AAIAAgaIg8AAgAgBgzIA8AAIAAgaIg8AAgAhbBdIAAi5IAzAAIACAAIALAGIgWA3QAUAWgBAXQABATgJAGQgEADgHABIgOAAQgBgIgDgGQAHABAFgBQAEAAACgCQAFgCAAgMQAAgVgTgVIARgwIgfAAIAACqg");
	this.shape_19.setTransform(10.2,11.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,234.8,21.5);


(lib.sb_subtthalf = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#C7A25B","#F5E8C6","#BBA272","#F2D687","#E4C677","#B28946"],[0,0.243,0.4,0.612,0.812,0.988],0,-60.1,0,58.4).s().p("Al3HYQgQgRAAgdIAAmiQgNAKgOAFQgXADgUgNQgWgPgDgWQgEgYAQgZQBoikATjCQAFgcASgQQARgPAbADQAZAFAOAQQAOAVgDAcQgVB2gXBPIAAKGQAAAcgRARQgPAQgZABQgZgBgPgPgAGWHjQhmgihDgGQgdgFgOgSQgOgPACgaQADgXARgPQAMgJASgBIjZAAQAVAGAJAaQALAVgLAWQgKAUgbALQhCAch7AVQgcAFgTgOQgTgMgEgbQgDgXANgTQANgSAfgEQBmgRBCgaIhyAAQgcAAgQgTQgSgUAAgdIAAkPQgCgbAUgSQATgTAZAAIIJAAQAfAAASAVQARAQAAAbIAAEPQAAAagWAWQgTAUgZAAIiAAAQBPAHBxAnQAaAHALAWQAKASgGAZQgKAXgRAKQgMAGgNAAQgMAAgNgFgAhYDkIADAKIAIADIGIAAIAJgDIADgKIAAgQImfAAgAhYCLIGfAAIAAgYImfAAgAhWAUIgCAJIAAANIGfAAIAAgNIgDgJIgJgDImIAAIgCgBQgEAAgDAEgAishkQgcAAgPgSQgRgSAAgdIAAhhQAAgYARgSQAQgSAbAAICPAAIAAggIiVAAQgYAAgPgQQgOgMAAgaQAAgUAOgRQAPgPAYAAIJmAAQAWAAAQAOQAOAOAAAYQAAAWgOAPQgPARgXAAIilAAIAAAgICNAAQAcAAAUAUQAPAPAAAZIAABhQAAAbgUASQgTATgYABgAEPi9IBTAAIAJgDIAEgJIAAgUIgDgJIgKgDIhTAAgABQi9IBTAAIAAgsIhTAAgAh6jmIgBAJIAAAUIACAJIAIADIBUAAIAAgsIhUAAgABQlCIBTAAIAAggIhTAAg");
	this.shape.setTransform(-78.29,175.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C7A25B","#F5E8C6","#BBA272","#F2D687","#E4C677","#B28946"],[0,0.243,0.4,0.612,0.812,0.988],0,-59.9,0,58.6).s().p("AgnHSQgRgTAAgeIAAiaIlkAAQgaAAgSgPQgPgRAAgZQAAgZAPgRQARgRAbAAIFkAAIAAiGIlMAAQgZAAgSgPQgQgQgBgbQABgYAQgRQARgQAaAAIFMAAIAAk/QAAgdAQgPQAQgRAbAAQAYAAASAQQATAPAAAeIAAE/IFDAAQAbAAAOAPQARAPgBAbQABAZgRARQgPAQgaAAIlDAAIAACGIFfAAQAZAAARAQQAPAPgBAcQABAXgPARQgSASgYgBIlfAAIAACaQAAAegTASQgPAQgbACQgagCgQgPgAjXhvQgagJgOgaQhGh8g4g+QgUgXAAgZQACgYAUgSQARgRAbABQAWACAXAWQBGBSBIB/QAPAcgHAXQgHAYgWANQgPAJgOAAQgJAAgIgDgAClh7QgWgQgBgYQgCgZAUgZQBThuAnhSQAOgbAWgKQAWgIAZALQAXALAJAXQAIAXgOAdQgvBkhZB0QgUAXgYAEIgIAAQgUAAgSgNg");
	this.shape_1.setTransform(-178.75,175.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#153184").ss(8.2,1,1).p("AGclCQAcAAAUAUQAPAPAAAZIAABhQAAAbgUASQgTATgYABIpIAAQgcAAgPgSQgRgSAAgdIAAhhQAAgYARgSQAQgSAbAAICPAAIAAggIiVAAQgYAAgPgQQgOgMAAgaQAAgUAOgRQAPgPAYAAIJmAAQAWAAAQAOQAOAOAAAYQAAAWgOAPQgPARgXAAIilAAIAAAggAmiAXQgXADgUgNQgWgPgDgWQgEgYAQgZQBoikATjCQAFgcASgQQARgPAbADQAZAFAOAQQAOAVgDAcQgVB2gXBPIAAKGQAAAcgRARQgPAQgZABQgZgBgPgPQgQgRAAgdIAAmiQgNAKgOAFgACjliIhTAAIAAAgIBTAAgAgdjpIhUAAIgJADIgBAJIAAAUIACAJIAIADIBUAAgAiPFLQgcAAgQgTQgSgUAAgdIAAkPQgCgbAUgSQATgTAZAAIIJAAQAfAAASAVQARAQAAAbIAAEPQAAAagWAWQgTAUgZAAIiAAAQBPAHBxAnQAaAHALAWQAKASgGAZQgKAXgRAKQgWALgcgKQhmgihDgGQgdgFgOgSQgOgPACgaQADgXARgPQAMgJASgBIjZAAQAVAGAJAaQALAVgLAWQgKAUgbALQhCAch7AVQgcAFgTgOQgTgMgEgbQgDgXANgTQANgSAfgEQBmgRBCgagACjjpIhTAAIAAAsIBTAAgAEPi9IBTAAIAJgDIAEgJIAAgUIgDgJIgKgDIhTAAgAFHAqIAAgNIgDgJIgJgDImIAAQgGgCgDAFIgCAJIAAANgAFHCLIAAgYImfAAIAAAYgAhYDUIAAAQIADAKIAIADIGIAAIAJgDIADgKIAAgQg");
	this.shape_2.setTransform(-78.29,175.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#153184").s().p("Al3HYQgQgRAAgdIAAmiQgNAKgOAFQgXADgUgNQgWgPgDgWQgEgYAQgZQBoikATjCQAFgcASgQQARgPAbADQAZAFAOAQQAOAVgDAcQgVB2gXBPIAAKGQAAAcgRARQgPAQgZABQgZgBgPgPgAGWHjQhmgihDgGQgdgFgOgSQgOgPACgaQADgXARgPQAMgJASgBIjZAAQAVAGAJAaQALAVgLAWQgKAUgbALQhCAch7AVQgcAFgTgOQgTgMgEgbQgDgXANgTQANgSAfgEQBmgRBCgaIhyAAQgcAAgQgTQgSgUAAgdIAAkPQgCgbAUgSQATgTAZAAIIJAAQAfAAASAVQARAQAAAbIAAEPQAAAagWAWQgTAUgZAAIiAAAQBPAHBxAnQAaAHALAWQAKASgGAZQgKAXgRAKQgMAGgNAAQgMAAgNgFgAhYDkIADAKIAIADIGIAAIAJgDIADgKIAAgQImfAAgAhYCLIGfAAIAAgYImfAAgAhWAUIgCAJIAAANIGfAAIAAgNIgDgJIgJgDImIAAIgCgBQgEAAgDAEgAishkQgcAAgPgSQgRgSAAgdIAAhhQAAgYARgSQAQgSAbAAICPAAIAAggIiVAAQgYAAgPgQQgOgMAAgaQAAgUAOgRQAPgPAYAAIJmAAQAWAAAQAOQAOAOAAAYQAAAWgOAPQgPARgXAAIilAAIAAAgICNAAQAcAAAUAUQAPAPAAAZIAABhQAAAbgUASQgTATgYABgAEPi9IBTAAIAJgDIAEgJIAAgUIgDgJIgKgDIhTAAgABQi9IBTAAIAAgsIhTAAgAh6jmIgBAJIAAAUIACAJIAIADIBUAAIAAgsIhUAAgABQlCIBTAAIAAggIhTAAg");
	this.shape_3.setTransform(-78.29,175.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#153184").ss(8.2,1,1).p("AmcEIQgaAAgRgQQgPgRAAgZQAAgZAPgRQARgQAaAAIFkAAIAAiHIlMAAQgZAAgTgPQgPgQAAgbQAAgZAPgPQATgSAZAAIFMAAIAAk9QAAgeAQgPQAQgRAbAAQAZAAARARQATAPAAAeIAAE9IFDAAQAbAAAPAQQAQAPAAAbQAAAZgQARQgQAQgaAAIlDAAIAACHIFfAAQAaAAAQAQQAPAPAAAbQAAAXgPARQgRASgZAAIlfAAIAACZQAAAegTARQgPARgbACQgagCgQgPQgRgTAAgeIAAiZgAmRl8QACgYAUgSQARgRAbABQAXACAWAXQBHBRBIB/QAOAcgGAWQgIAZgWANQgYAOgWgJQgZgIgOgbQhHh7g4g+QgUgXAAgZgAE+m7QAXgHAYAMQAYAKAIAXQAIAWgNAeQgwBkhZBzQgTAZgYADQgZACgVgPQgXgQgBgYQgCgZAUgZQBThuAnhSQAOgcAWgKg");
	this.shape_4.setTransform(-178.75,175.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#153184").s().p("AgnHSQgRgTAAgeIAAiaIlkAAQgaAAgSgPQgPgRAAgZQAAgZAPgRQARgRAbAAIFkAAIAAiGIlMAAQgZAAgSgPQgQgQgBgbQABgYAQgRQARgQAaAAIFMAAIAAk/QAAgdAQgPQAQgRAbAAQAYAAASAQQATAPAAAeIAAE/IFDAAQAbAAAOAPQARAPgBAbQABAZgRARQgPAQgaAAIlDAAIAACGIFfAAQAZAAARAQQAPAPgBAcQABAXgPARQgSASgYgBIlfAAIAACaQAAAegTASQgPAQgbACQgagCgQgPgAjXhvQgagJgOgaQhGh8g4g+QgUgXAAgZQACgYAUgSQARgRAbABQAWACAXAWQBGBSBIB/QAPAcgHAXQgHAYgWANQgPAJgOAAQgJAAgIgDgAClh7QgWgQgBgYQgCgZAUgZQBThuAnhSQAOgbAWgKQAWgIAZALQAXALAJAXQAIAXgOAdQgvBkhZB0QgUAXgYAEIgIAAQgUAAgSgNg");
	this.shape_5.setTransform(-178.75,175.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229.9,122.5,204.5,105.69999999999999);


(lib.sb_subttblue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_30
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#153184").s().p("ABKFUQgMgMAAgYIAAi5IivAAQgTAAgNgMQgMgNAAgTQAAgQAMgPQALgMAVAAICvAAIAAiqIhtAAQgcBCgpAsQgPARgQgCQgagBgNgVIAAFVQAAAVgNAMQgMANgSAAQgSgBgMgKQgLgMAAgXIAAkrQgOASgSADQgSACgOgKQgPgNgCgPQgCgRAMgTQBVh7AUiQQAEgVAPgLQANgKAUADQARADALAOQATAhgxCRIAABPIAEgHQBOhiAMh0QADgXANgJQAMgLATABQASACANANQAMAPgDAWIgNA/IBQAAIAAhRQAAgWAMgMQAMgMAUAAQASAAANAMQAPAMAAAWIAABRICKAAQAUAAALALQAMALAAAVQAAARgMANQgLANgUAAIiKAAIAACqICdAAQAWAAAKALQAMANAAATQAAAQgMAOQgLAOgVAAIidAAIAAC5QAAAWgOANQgLANgVAAQgTAAgNgMg");
	this.shape.setTransform(202.3362,35.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#153184").s().p("AgWFVQgLgPAAgVIAAh4QiKBph1AdQgWAGgPgKQgPgKgFgQQgEgUAJgOQAJgOAWgGQBdgaBhg5IiKAAQgYgBgNgRQgQgRADgTIANhkQACgRARgPQANgOAZAAIDMAAIAAgiIjZAAQgTAAgPgMQgOgPAEgXIgNACQgPgCgNgMQgLgOABgQQABgQAQgPQA0gxAYhEQAIgTAQgHQANgHASAHQAPAHAIAOQACAIgBAKICNAAQAQAAAMAKQAKANgBAQIAAAEQAVgdALgcQAHgTAQgGQANgHATAHQANAHAIAOIACASIDCAAQAQAAAMAKQAKAMAAARQAAAPgKANQgLAMgRAAIhqAAIALAZQAGAWgPAUIArAAQAWAAARAQQASARABAYIAABUQgBAVgRAQQgOAQgZABIjEAAIAAAmIDUAAQAhABASATQAOARgBAXQgFBdgLAkQgIAXgUANQgSAMgkAGQgnAFg3gKQgXgEgLgOQgIgNACgUQAJgpAuAHQBAAKAPgJQAHgJAFgkQABgQgHgGQgIgFgLAAIilAAIAACZQAAAWgOANQgKAMgVABQgRgBgNgLgAjaAzQAAAOAHADIARACIChAAIAAgmIiiAAIgDAAQgQAAgEATgAA1gwICbAAIAKgEIADgJIAAgJIgDgJIgIgDIidAAgAAWijIB/AAQgHgIgDgLIgUgwIgpAAQgWAigiAhgAhTjFQABAVgJANIA1AAQgMgRACgPQAAgQARgOIAGgFIhDAAgAkAijIBnAAQgIgagIgfIgEgKIghAAQgYAngaAcg");
	this.shape_1.setTransform(34.7027,35.331);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237.6,70.6);


(lib.sb_subtt2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_29
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C7A25B","#F5E8C6","#BBA272","#F2D687","#E4C677","#B28946"],[0,0.243,0.4,0.612,0.812,0.988],0,-70.1,0,68.6).s().p("AmvItIAAidQAAhfAkhFQAjhEBYg0IGXjoQAegQARgcQARgbAAgdIAAgzQAAgrgigbQghgbg3AAIiWAAQhAAAgkAtQgWAagIApQgGAagUARQgUARgaAAIhTAAQgiAAgVgaQgWgaAFghQAThxBGhGQBghhCpAAICZAAQBnAABQAlQBQAkAqBDQAsBCAABUIAAAzQAABVglA8QglA+hPAqImLDcQgpAYgTAaQgVAaAAAnIIzAAQAeAAAVAWQAWAVAAAeIAAAsQAAAegWAWQgVAUgeAAg");
	this.shape.setTransform(47.3,59.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#153184").ss(8.1,1,1).p("AmwGQQAAhfAlhEQAjhFBYgzIGXjoQAegRARgcQARgbAAgdIAAgzQAAgrghgbQgigbg2AAIiXAAQhAAAgkAsQgWAbgIApQgGAagUAQQgUASgaAAIhTAAQgiAAgVgaQgWgZAFgiQAThxBGhGQBghhCpAAICaAAQBmAABQAlQBPAlAsBCQArBBAABVIAAAzQAABUglA+QglA9hPAqImLDdQgoAXgUAaQgUAaAAAoIIyAAQAeAAAWAVQAVAVAAAfIAAArQAAAegVAWQgWAVgeAAIsYAAg");
	this.shape_1.setTransform(47.3,59.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#153184").s().p("AmvItIAAidQAAhfAkhFQAjhEBYg0IGXjoQAegQARgcQARgbAAgdIAAgzQAAgrgigbQghgbg3AAIiWAAQhAAAgkAtQgWAagIApQgGAagUARQgUARgaAAIhTAAQgiAAgVgaQgWgaAFghQAThxBGhGQBghhCpAAICZAAQBnAABQAlQBQAkAqBDQAsBCAABUIAAAzQAABVglA8QglA+hPAqImLDcQgpAYgTAaQgVAaAAAnIIzAAQAeAAAVAWQAWAVAAAeIAAAsQAAAegWAWQgVAUgeAAg");
	this.shape_2.setTransform(47.3,59.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.6,119.6);


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

	// bg
	this.instance = new lib.bg();
	this.instance.setTransform(0,119,1.5836,1.5836);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,119,1536.1,395.9);


(lib.sb_pd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pd
	this.instance = new lib.pd();
	this.instance.setTransform(0,0,1.0372,1.037);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,241.7,363);


(lib.sb_mark3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mark3
	this.instance = new lib.mark3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145,109);


(lib.sb_mark2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#19347B").s().p("AgEAAQAAgCAEgBQAEAAABADQAAADgEACQgEAAgBgFg");
	this.shape.setTransform(41.375,133.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#19347B").s().p("AAHAOQgDAAgEgEIgJgKIgDADIgDgDIADgDIgFgHIAEgEIAGAGIAFgFIADAEIgEAFIAIAJIAEACQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIACgCIAAAAIAEADIAAAAIgDAEQgFAEgCAAg");
	this.shape_1.setTransform(64.575,127.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#19347B").s().p("AgSgFIAFgEIACADIABAAQABgHAFgDIABAAQAFgEAGAJIALAPIgGAEIgKgOQgDgFgDACIAAAAQgDACgBAFIALAQIgGAEg");
	this.shape_2.setTransform(62.4,129.6157);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#19347B").s().p("AgMAGQgDgGACgFQABgFAFgDQAKgFAHAMIABADIAAAAIgQAIIAAAAQAFAGAGgDIAFgEIAAgBIAEADIAAABQgDAFgFACIgHABQgIAAgEgJgAgEgIQgGADADAFIAAABIALgFIgBAAQgBgFgDAAIgDABg");
	this.shape_3.setTransform(59.685,131.116);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#19347B").s().p("AACARQgDgCgBgFIgGgLIgEABIgCgEIAEgDIgCgIIAFgCIAEAHIAGgCIACAFIgGADIAEALIADAEIAEAAIACgCIADAFIAAAAIgFADIgFABg");
	this.shape_4.setTransform(57.225,131.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#19347B").s().p("AgFAPQgDgBgBgEQgEgIAPgHIABAAIgBAAQgBgFgDABIgCAAIgGAFIgBABIgEgEIABAAQAEgGAGgBQAEgCADABQAFADACAGIAGAQIgGACIgCgDIAAAAQgDAFgEACIgDAAgAgDAHQAAABABABQAAAAAAAAQABABAAAAQABAAAAAAIABAAQACgBADgEIAAgBIgCgFQgIAEABAEg");
	this.shape_5.setTransform(54.875,133.2179);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#19347B").s().p("AgOgQIASgEQAJgBACAKQACAFgDAFQgDADgHACIgFACIAEANIgHADgAABgOIgDABIgEABIAEAMIAEAAQAJgDgDgHQgBgEgFAAIgBAAg");
	this.shape_6.setTransform(51.5,133.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#19347B").s().p("AgPgLIAGgCIACAEIAAAAQAEgGAEAAQAHgCADAIIABADIAEASIgHABIgEgQQAAgEgCgBIgDgBIgBAAIAAAAIAAABIgBAAIgBABIgCADIgBAAIAFATIgIACg");
	this.shape_7.setTransform(47.375,135.2382);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#19347B").s().p("AAAAQQgLAAgCgOQgBgGAEgFQADgFAGgBIACAAIADABIAAAAIACABIABABIABAAIABAAIABABIAAABIABAAIAAABIAAABIABABIACAGQABAGgEAFQgDAEgGABIAAABgAgFgFIgBAGQACAJAFAAIABAAIAAgBIABAAIABAAIABgBIAAAAIABgBIAAgBIABgDIAAgDQgBgFgCgCQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIAAAAQgEABgBADg");
	this.shape_8.setTransform(44.075,135.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#19347B").s().p("AgEgNIAGgBIADAdIgGAAg");
	this.shape_9.setTransform(41.675,136.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#19347B").s().p("AADATIgDgBIgCgCIAAAAIgBgBIAAAAIAAgBIAAAAIgBgBIAAgBIAAgBIAAgCIgCgNIgEABIAAgGIAEAAIAAgJIAGAAIAAAIIAIgBIAAAGIgHABIABAMIABAEQABABAAAAQAAAAABAAQAAAAABAAQAAAAABAAIACAAIABAAIABAFIAAAAIgGABg");
	this.shape_10.setTransform(39.825,135.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#19347B").s().p("AgDAQQgIAAgBgJQAAgIAQgCIAAgBQAAgFgEAAQgEAAgEADIgBAAIgCgEIAAgBQAGgEAFAAQAFAAADADQADADABAHIABAQIgGAAIgBgDIgBAAQgDAEgEABgAgFAGQAAAFAFgBQACAAADgEIAAgGIgBAAQgJACAAAEg");
	this.shape_11.setTransform(37.275,136.4714);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#19347B").s().p("AgDATQgBgBAAgFIgBgiIAHAAIAAAiIABACIABABIABAAIABAFIgBAAIgDABQgDAAgCgDg");
	this.shape_12.setTransform(35.05,135.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#19347B").s().p("AgDAPQgEAAgDgDQgCgCAAgHIABgRIAGAAIAAAQQAAAHAFAAQACAAAEgEIAAgTIAHAAIAAAdIgGAAIAAgFIgBAAIAAABIgCABQgDADgCAAg");
	this.shape_13.setTransform(32.4,136.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#19347B").s().p("AAOAQIABgRQABgHgFAAQgDAAgCACIgBABIgBAAIgBAUIgGAAIABgRIgBgFIgDgCIgEABIgDACIgBAUIgHgBIACgcIAGAAIAAAEIABAAQAEgEAFAAQAFABACAFIAAAAIAAAAQAFgEAEgBIABAAQAJABgBAMIgBARg");
	this.shape_14.setTransform(28.13,136.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#19347B").s().p("AgKAOIADgcIAHAAIAAAGIAAAAQADgFAEAAIABAAIADAAIAAABIgCAGIAAAAIgCAAIgBgBQgFABgBAEIgDARg");
	this.shape_15.setTransform(24.65,135.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#19347B").s().p("AgCAPQgFgBgEgEQgDgFABgHQABgEADgEQAFgGAHACQAFABAEAEQADAFgBAGQgCAOgMAAgAgGAAQgBAEACACQABADADABIACAAIAAgBIABAAIABgBIAAAAIABgBIABgBIAAAAIAAgBIABAAIAAgBIAAgBIABgCQABgIgGgCIgCAAQgEAAgCAJg");
	this.shape_16.setTransform(21.675,135.5839);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#19347B").s().p("AgPASIAJglIAWAGIgBAFIgPgEIgDALIANADIgBAFIgNgCIgEAPg");
	this.shape_17.setTransform(18.875,134.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#19347B").s().p("AAJAUIAAgLIgLgFIgHAKIgHgCIAZgiIAIADIAAAqgAABAAIAIACIABgQg");
	this.shape_18.setTransform(13.5,133.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#19347B").s().p("AgBAFQgEgCACgEIAAgBIACgBIACgBIABAAIACACIABABIAAABIgBACQAAABAAAAQAAABgBAAQAAAAgBABQgBAAgBAAg");
	this.shape_19.setTransform(10.8692,133.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#19347B").s().p("AgBAUQgDAAgEgCQgGgDgEgIIAAAAIAGgDIAAABQACAFAFADIAEABIABAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQACgDgEgEIgDgEQgHgHAEgGQACgEAEgCIAEAAQADAAADABQAGAEADAGIAAAAIgFADIgBAAQgBgEgFgDIgBAAIAAAAIgDAAIgDABQAAADADAFIAEAEQAGAGgDAHQgDAGgHAAg");
	this.shape_20.setTransform(9.175,131.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#19347B").s().p("AABAEIAAABIAAAAIgBgBIAAABIAAAAIAAgBIAAABIgBAAIgBgBIgCgDIABgCIABgBIAAgBIACgBIAAABIAAgBIABAAIABABQAFACgDADIgBABIgBABIAAAAIAAABg");
	this.shape_21.setTransform(6.2267,131.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#19347B").s().p("AgFAXQgEgBgFgEQgGgEgBgGQAAgGAGgHIAOgQIAFAEIgOARQgDAEAAAEQgBADADADQADACACAAIACAAQACgBAEgFIAOgRIAGAFIgOAQQgGAHgFACg");
	this.shape_22.setTransform(5.075,128.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#19347B").s().p("AgRAXQAKgHAJgPQAKgMAEgNIACABQgEAMgKANQgIANgMAKg");
	this.shape_23.setTransform(62.975,118.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#19347B").s().p("AgCACQgKgMgFgNIACgBQAEANAKAMQAKAPAJAHIgBACQgLgJgIgOg");
	this.shape_24.setTransform(4.6,118.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#19347B").s().p("AgHAeIAEgDIABgCQABgBgFgHIgJAGIgCgIIgEACIgEgGIASgLIAEAFIgJAGIABACIAIgFIACADQAGAMgBADQAAABAAAAQAAAAAAABQAAAAgBABQAAAAgBABIgDADQgEgDgCAAgAAFAYQAAgIgJgOIgIgMIAJgFIgGgJIAGgFIACACIAIgFIADAFIgJAFIABACIAGgDIABgBIAEgDIAGAMIgGACIgDgFIgEAEIABABIADgCIADADIgDADIABABIADgCIAEgDIADAEIgDAEIgFACQgEADgFgEIgCACIgCgEIABgDIAAgCIgEADIAEAHQAJALABAIQACgFgGgKIAFgDQAJANgDAIIgGgCIAAAFgAAaANQgCAAgDgFIgHgJIAGgEIAGAJIABABIABAAIAAgBIAAgBIgDgEIAGAAIAEAFIAAADIgDADIgDACIgCABIgBAAgAgigFIAQgKIAJANIgPAKgAgZgEIACAEIAGgDIgEgEg");
	this.shape_25.setTransform(58.3,122.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#19347B").s().p("AgIAVQAJgagCgGQgDgGgGADQgDABgCAGIgIgDQACgJAJgFQAHgDAFACQAFACAEAHQADAIgHATIAHgEIAJgDIADAJIgeAOg");
	this.shape_26.setTransform(54.05,124.985);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#19347B").s().p("AgXgTIARgFQAQgGAEAMQADAIgGAEIAAAAQAJgBADAJQAFAOgTAFIgQAGgAACACIgEABIACAMIAGgCQAIgDgCgGQgCgDgDAAIgFABgAgEgPIgEABIADAKIAFgBQAGgCgCgGQgBgDgDAAIgEABg");
	this.shape_27.setTransform(49.794,126.436);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#19347B").s().p("AgRAFQgCgLAEgJQAEgHAIgCQAHgCAHAFIgEAIQgEgDgDABQgJADADANQACgFAFgBQAOgEADAOQACAIgEAFQgEAFgGACIgFAAQgNAAgFgUgAAAACQgDABgCAFQAEAJAEgBQAGgBgCgIQgBgFgEAAIgCAAg");
	this.shape_28.setTransform(45.7224,127.4228);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#19347B").s().p("AgOAUIAEgIQAFAFAFgBQAIgBgBgGQgBgGgMACIgBgIQAKgBgBgGQgBgFgEABQgEAAgEAFIgHgGQAHgHAHgCQAQgCACANQABAIgHAEIAAAAQAJABACAJQABANgRADIgDAAQgJAAgFgFg");
	this.shape_29.setTransform(41.5059,128.1945);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#19347B").s().p("AgKAWQgGgDAAgGQgBgIAJgEIAAgBQgIgDAAgHQAAgGAEgEQAEgDAHgBQANgBABANQABAHgGAEQAJAEAAAIQAAAFgEAEQgFAFgHAAIgBAAQgGAAgEgDgAgGALQABAHAGgBQAFAAABgGQgBgEgJgEQgDADAAAFgAgGgKQABAEAHADQADgEgBgDQAAgGgEAAQgGAAAAAGg");
	this.shape_30.setTransform(37.6,128.5747);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#19347B").s().p("AgRASIAGgIQAEAFAGAAQAHAAAAgHQAAgHgHAAQgDAAgEACIgFgDIACgYIAbABIgBAKIgQgBIgBAJIAEgBQAQAAgBAOQAAAIgFAEQgFAFgHAAQgKAAgHgHg");
	this.shape_31.setTransform(33.3529,128.725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#19347B").s().p("AAAAZQgHAAgFgFQgEgEAAgFQAAgHAJgEQgGgEAAgIQABgGAFgDQAEgDAGAAQAHAAAEAEQAEAEgBAGQAAAGgHAEIAAAAQAIAFgBAIQAAAGgFADQgFADgHAAIAAAAgAgGAKQgBAHAHAAQAGABAAgGQABgFgJgEQgEADAAAEgAgCgLQAAAEAGAEQADgDAAgDQABgGgGgBQgEAAAAAFg");
	this.shape_32.setTransform(29.299,128.5496);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#19347B").s().p("AAAAYIABgMIgTgDIABgIIAUgZIAPADIgEAaIAFABIgBAJIgGgBIgBALgAgGACIAJABIADgRg");
	this.shape_33.setTransform(25.175,128.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#19347B").s().p("AgFAZQgRgFAGgXQADgMAGgFQAGgFAHACQARAEgGAXQgFAVgMAAIgFAAgAgFAAQgDAOAGACQAFABADgPQAEgPgGgBIgCgBQgEAAgDAPg");
	this.shape_34.setTransform(21.2983,127.2995);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#19347B").s().p("AgRAQIADgJIAKADIAHgYIgHgDIACgHQAHABAFgCIAIADIgMAkIAIADIgDAJg");
	this.shape_35.setTransform(16.975,126.425);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#19347B").s().p("AgKAXQgKgFgDgJIAJgFQAEAIAFACQAFADACgEQABgDgEgFIgFgFQgHgHAEgJQACgFAHgCQAFgDAHAEQAJAEADAJIgIAEQgDgGgFgCQgGgCgBADQgBACAFAHIAFAEQAHAHgEAJQgCAGgHABIgEABQgFAAgFgCg");
	this.shape_36.setTransform(13.425,124.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#19347B").s().p("AgRAYQgRgLAOgTIAPgWIAJAHIgPAWQgHAKAHAFQAHAEAGgKIAQgWIAJAHIgPAUQgIAOgJAAQgGAAgGgFg");
	this.shape_37.setTransform(9.7339,122.0066);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#19347B").s().p("AACAkQAHgOgLgVIgNgWIAcgQIAbAtQAEAHgCAEQgDAEgIAEQgCgDgGgEIAIgEQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgFgKIgNAHQAFARgGAKQgEgCgGAAgAAGgDIAEAFIALgFIgEgHgAgBgSIACAHIAMgHIgEgGgAgpgFIAXgNIAVAmIgNAIIADAGIgJAEgAgTANIAEAHIAGgEIgEgHgAgcgBIAEAGIAGgEIgEgGg");
	this.shape_38.setTransform(52.4364,114.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#19347B").s().p("AgRAfIAIgCIACgCIAAgHIgOAEIgDgSIAMgEIgBgCIgKACIAAgCIgEAEIgIgEQAGgEADgEIgHgCIAEgGIgDABIgCgIIASgFIABgBIAIABQgCAMgGAIIAIgCIAFALQACgDgBgGIgBgEIALgEQgKgFgHgJIAHgFIADAFIAEgHIAJADIgGAIIAEACIAFgJIAJADIgGAIIAJAAQgCAEgBAGIgIgBIABAEQABABAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIADAAIADgCIADAHIgEACIgDAAQgGABgCgBQgCgBgCgFIAAgDIgFACQACAIgFAGIAVgHIAFAAQAAAJgDAGIAJACIgDAIIgLgDQgFAGgIAFQgDgEgEgCIAKgHIgKgCIACgEIgBAAIgCgGIACgBIgEgDIAAADIgNAEIAAADIAOgEIAAAEQACAIAAAFIgBAEQgBADgDABIgJADQgCgEgDgDgAALAMIAHABIACgEgAgbgRIAGACIACgEg");
	this.shape_39.setTransform(45.35,117.925);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#19347B").s().p("AgdAdQALgIADgLQACgHgBgOIgSACIgBgLIAegDIgEgIIAJgFIAGAKIgFADIAegDIABAKIgkAEIAAAHIAegDIAAAEQABAagEAFQgCADgGACIgNABQAAgFgEgFIAMgBIAEgBQACgCAAgRIgVACQgBAVgQAMQgDgEgGgEg");
	this.shape_40.setTransform(37.675,119.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#19347B").s().p("AAVAjIgIgBQgHgBgCgDQgCgDABgHIACgcIARACIACgNIgTgBIABgKIAdACIgDAfIgSgBIgBATQAAABAAABQAAAAAAABQAAAAABAAQAAAAABAAIAGABQACAAABgLQADADAGACQgBAKgCADQgDADgFAAIgBAAgAgIAgIAAgEIgRgBIgBAEIgIAAIAEgzIAIABIABgGIgJgBIABgIIAiADIgBAIIgHAAIAAAFIAHABIgEAygAgZATIASABIACgPIgDAAQgFAAABgGIAAgJIgCAAIAAAFQgBAIgFAEIgDgEgAgXACQACgCABgFIAAgFIgCgBgAgHgBIABABIABAAIABgJIgCAAgAgNgTIABABIABgGIgCAAgAgXAQIABgIIAPABIgCAIg");
	this.shape_41.setTransform(30.1,119.4031);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#19347B").s().p("AALAmIABgDIgpgMIAAACIgKgCIATg+IA8ARIgTA/gAgZAOIAnAMIANgqIgGgCIADAFIgDABIACABIgCAIIgLgEIgBAHIAEgFIAHAEQgGAHgGAFIACADIACgGQADAFADABQgHAOgHgHQgDgCAAgDIgGAEIgEgHIgOgCIABgIIAUADIgBADIADgCIACgRIgRgEIACgHIARAEIABgEIAIACIgBAFIAFACIgDgEIAEgDIgggJgAgSAAIAEgMIAPAEIgEANgAgLgCIAEABIAAgDIgDgBg");
	this.shape_42.setTransform(22.55,118.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#19347B").s().p("AgJARIAHgDIgDgBQgKAIgZgIQACgGgCgFQAQAHAIgDIgRgIIAEgIIAVALIABgBIgWgNIAEgIIAZANIAAgCIgSgKIAEgIIASAKIABgCIgVgMIAFgIIALAGIAAgGIAJABIAAAKIgCAAIAMAHIAIgGIAJAIIgHADIAMAHIgFAIIgVgMIgBACIATAKIgFAHIgTgKIgBADIAZAMIgFAIIgagOIgCACIAZANIgFAIIgRgJIAQASIgJAFQgFgIgOgQg");
	this.shape_43.setTransform(15.3,115.325);

	this.instance = new lib.mark2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,138.1);


(lib.sb_mark1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#153189").s().p("AgBALIgIgLIgEACIgDgEIAEgDIgEgHIAFgEIAFAHIAGgFIADAGIgGAEIAHAKQADAEAEgCIACgDIAFAEQgCAEgDABQgDADgDAAQgFAAgDgGg");
	this.shape.setTransform(58.2,129.2043);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#153189").s().p("AgSgHIAFgDIADADIABAAQACgHADgCQAHgFAHALIAJAPIgHAEIgJgOQgDgGgCACQgDABgCAFIAKASIgGADg");
	this.shape_1.setTransform(55.7,131.3075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#153189").s().p("AgDAPQgGgCgDgHQgDgGACgGQACgFAFgDQALgEAGANIABADIgQAHQAEAGAGgDQADgCACgCIAEADQgCAEgGADIgGACIgEgBgAgDgIQgFACABAGIALgEQgCgEgCAAIgDAAg");
	this.shape_2.setTransform(52.7432,132.6616);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#153189").s().p("AgDAKIgFgMIgEACIgCgGIAFgCIgCgIIAGgCIADAIIAGgDIACAGIgGADIADAMQACAEAEgBIADgCIADAFIgGAEIgEABQgFAAgDgJg");
	this.shape_3.setTransform(50.125,133.3172);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#153189").s().p("AgKAKQgDgIAPgHQgCgFgDACQgDAAgEAFIgFgEQAFgGAGgCQALgDADANIAGAQIgHACIgBgDQgEAFgEABIgDABQgGAAgBgHgAgEAHQACAEADgBIAFgFIgDgFQgHADAAAEg");
	this.shape_4.setTransform(47.6,134.5913);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#153189").s().p("AgPgRIANgDQAPgDACAMQADANgPACIgFACIACAOIgGABgAgBgOIgFABIADANIAEgBQAIgBgBgHQgBgFgGAAIgCAAg");
	this.shape_5.setTransform(44.1243,134.9535);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#153189").s().p("AgDAOIgFgiIAIgBIAEAiQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAIABAAIABAGIgDABIgCAAQgFAAgBgIg");
	this.shape_6.setTransform(40.5,135.3602);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#153189").s().p("AgHANQgEgEgBgIQgBgGAEgFQAEgEAFgBQAMgBACAOIAAADIgSACQABAIAHgBQADAAAEgDIADAFQgGAEgFAAIgDAAQgDAAgEgDgAAAgJQgFABAAAGIAMgBQgBgGgFAAIgBAAg");
	this.shape_7.setTransform(37.9472,136.278);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#153189").s().p("AgKATQgDgFAAgIQgBgGAEgFQAEgDAFgBQADAAAEAEIgBgQIAIgBIABArIgGAAIgBgDIAAAAQgDADgEABQgGAAgEgDgAAAgCQgFAAAAAIQABAJAFAAQACAAADgDIAAgMIgFgCIgBAAg");
	this.shape_8.setTransform(34.4722,135.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#153189").s().p("AAAAQQgGAAgEgEQgEgFAAgHQABgHAEgEQAFgEAFAAQAGAAAEAFQAEAFAAAFQgBAIgEAEQgEAEgGAAIAAAAgAgGAAQAAAKAGgBQAGABAAgKQABgJgHAAQgFABgBAIg");
	this.shape_9.setTransform(31.025,136.4497);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#153189").s().p("AAIAWIAFgdIgBAAIgMAYIgDgBIgHgaIgCAdIgHgBIAEgnIAJABIAGAbIAAAAIALgZIAJABIgEAng");
	this.shape_10.setTransform(27,135.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#153189").s().p("AgNAWIgEgCIACgGIACABQAFABACgEIABgCIgFgfIAIACIACAXIAAAAIALgUIAHACIgRAbQgFAJgGAAIgDAAg");
	this.shape_11.setTransform(21.75,135.641);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#153189").s().p("AgCAUQgKgDADgLIAEgMIgEgBIABgGIAFABIADgIIAFACIgCAIIAHACIgBAGIgIgCIgCAMQgCAFADABIADABIAAAGIgFgBg");
	this.shape_12.setTransform(19.3546,134.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#153189").s().p("AgKATIAKgcIAGADIgIAcgAAEgMQgEgCABgEQABgEAFABQAFACgCAEQAAABAAABQgBAAAAABQgBAAAAAAQgBAAAAAAIgDAAg");
	this.shape_13.setTransform(17.3536,133.415);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#153189").s().p("AgFAVQgHgCADgJIAMggIAHADIgMAgQAAABAAABQAAAAAAAAQAAABABAAQAAAAAAAAIABABIgBAFg");
	this.shape_14.setTransform(15.8526,132.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#153189").s().p("AgLASIALgbIAHADIgLAbgAAFgMQgEgCACgEQACgEAEACQAEACgCAEQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAIgDgBg");
	this.shape_15.setTransform(14.1558,132.2054);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#153189").s().p("AgGATQgJgFAGgKIAGgLIgEgCIACgFIAFABIADgHIAGADIgDAIIAGADIgCAGIgHgEIgFAMQgCAEADACIACABIgBAGg");
	this.shape_16.setTransform(12.3707,131.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#153189").s().p("AgNAUQgNgIAKgPIAMgTIAGAEIgMATQgGAJAHAEQAGAEAFgJIANgSIAGAEIgMASQgHAKgGAAQgFAAgEgDg");
	this.shape_17.setTransform(9.7699,129.6475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#153189").s().p("AgXAQIAtghIACACIgtAhg");
	this.shape_18.setTransform(55.025,122.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#153189").s().p("AgMAbIAEgCIACgBIgCgJIgKAFIgCgJIgEACIgDgHIAUgIIADAFIgKAFIABADIAJgEIABADQAEANgBADQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABIgFACIgFgFgAABAYQABgJgGgOIgGgNIAKgEIgEgKIAGgEIABADIAJgEIADAGIgKAEIABABIAGgDIABAAIAFgBQACAEABAHIgGABIgCgEIgFACIABACIAEgCIACAEIgEADIACABIAHgEIADAFIgJAEQgGACgDgFIgCACIgDgFIADgBIgBgDIgDACIADAIQAFALABAKQADgGgFgLIAGgCQAGAQgEAGQgCgCgEAAQAAAAABABQAAAAAAABQAAABAAAAQgBABAAAAQgFgBgCAAgAAXAQIgEgEIgFgMIAGgCIAGALIAAAAIABgBIgCgFIAGAAIACAHIAAADIgDACIgDABIgCABIgCgBgAgggMIAQgHIAHAPIgQAHgAgZgIIADAEIAFgCIgCgFg");
	this.shape_19.setTransform(49.475,125.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#153189").s().p("AgLAYIADgJQAGADAEgBQAHgDgCgGQgBgHgHACIgGAEIgGgCIgFgXIAagHIACAJIgQAFIACAIIAEgCQAOgEAFANQACAHgEAHQgEAFgHACIgHABQgFAAgFgCg");
	this.shape_20.setTransform(44.4864,127.2971);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#153189").s().p("AAFgNIgUAEIgBgKIAggGIACAHQgHALgBAIQgBAIACAPIgLACQgCgWAHgRg");
	this.shape_21.setTransform(39.85,128.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#153189").s().p("AgQATIAFgHQAFAEAFAAQAHgBAAgHQgBgHgGAAQgEABgDACIgFgDIgBgXIAbgCIABAKIgRABIAAAIIAEgBQAQgBAAAOQABAIgFAFQgFAFgIAAIAAAAQgJAAgHgGg");
	this.shape_22.setTransform(35.7273,128.8768);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#153189").s().p("AAAAZQgKAAgHgIIAGgHQAFAFAFAAQAGAAABgHQAAgHgGAAQgDAAgEACIgFgDIACgYIAbABIgBAKIgQgBIgBAJIAEgBQAPABAAAOQgBAHgFAFQgFAEgHAAIAAAAg");
	this.shape_23.setTransform(31.1508,128.9275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#153189").s().p("AgDAZQgHgBgEgHQgFgHACgLQACgNAHgGQAGgFAHABQAJABAFAHIgIAGQgCgDgEgBQgJgCgCAOQAFgEAEABQAOACgCAOQgBAHgFAEQgFADgEAAIgDAAgAgHAFQAAAKAGABQAFABAAgIQACgGgGgBIgBAAQgDAAgDADg");
	this.shape_24.setTransform(26.9813,128.5023);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#153189").s().p("AgGAZQgKgCgEgJIAGgGQAEAGAFABQAHADABgHQACgHgFgCIgIAAIgEgDIAHgYIAaAIIgCAJIgRgEIgCAIIAEAAQAPAEgEANQgCAIgGADQgEACgDAAIgGgBg");
	this.shape_25.setTransform(22.4,127.44);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#153189").s().p("AACAcIAOgeIAAAAIgUAWIgHgCIACgfIgMAfIgKgFIAUgsIALAFIgCAfIABAAIAVgXIAMAGIgUAsg");
	this.shape_26.setTransform(17.5,125.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#153189").s().p("AgXgOIACgDIAtAgIgBACg");
	this.shape_27.setTransform(11.7,122.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#153189").s().p("AgKAWQABAMgCAGIgJgHQACgKgBgNIgJAGIgFgJIALgGIgDgFIgJAGIgHgFQAPgMAGgJIALAEIgIAJIAEAIIAKgGIAEAJIgJAEIACADIAOADIgBAKIgIgDIALAUIgJAFgAAUATIAKgGQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIgcgvIAJgFIAcAvQAEAHgDAEQgCADgKAGQgFgFgEgCgAgHgVIAIgFIAVAjIgJAFg");
	this.shape_28.setTransform(51.8481,114.775);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#153189").s().p("AgNAdIACgDIgOAFIgCgIIAmgMIAAgCIgjALIgCgGIAXgHIAAgCIgUAFIgGgTIAUgGIgBgCIgZAIIgCgIIAZgHIgBgEIAKgDIABAEIAYgIIACAHIgYAJIAAABIAUgHIAGAWIgDABIAJACIgEAGIgEgBIgEABIABACIAHgCIAIgCIACAHIgPAFIACAFQACAGgEADIgMAFQgBgEgEgEIAIgCQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAIgBgFIgPAFIAGADIgFAJQgGgEgHgDgAAGABIAAADIAHgDIgCAAIABgBgAgPAAIAAACIAKgCIAAgCgAAEgFIAAACIALgEIgBgBgAgSgGIABACIAKgEIgBgBgAABgMIABACIAKgDIAAgDg");
	this.shape_29.setTransform(44.775,117.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#153189").s().p("AgeAaIAbgCIAAgEIgUACIgBgKIAUgCIgBgDIgFAAIgBgMIgFABQgCAKgJAFIgHgHQAFgDACgEIgGAAIgBgJIAIgBIgBgGIgFABIgBgKIAhgDIAAAJIgDABIABAGIAFgBIABAKIgFAAIABALIAFAAIAAAEIAVgCIABAKIgVACIABAEIAbgDIABAKIhAAGgAgRgUIAAAGIAFAAIgBgGgAALgCIAHAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgDgeIAKgBIADAfQABAFgEACQgCACgJABQgBgDgDgFgAAEgdIAJgBIADAYIgKABg");
	this.shape_30.setTransform(37.325,119.475);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#153189").s().p("AAQAkIADgkIgFAAQgCAagIAJIgGgHIACgGIgEACIgFgKIAHgEIADAIQADgIABgKIABgaQARgCAGgDIAHAIQgKAEgKAAIgBAKIAVACIgBAJIgFgBIgEAjgAgVAgIACgYIgNgBIABgIIAMABIABgEIgNgBIAAgJIAGABIgBgGIAGgBIgJgBIABgIIALABIgBgGIAKgBIADAIIAJAAIgBAJIgHgBIAEACIgCAGIAGABIgBAIIgLgBIgBADIAKABIgBAJIgJgBIgCAYgAgQgOIgFABIAKABIACgHIgIgBgAgkAVQADgDAFgJIAIADQgDAHgGAIg");
	this.shape_31.setTransform(29.45,119.575);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#153189").s().p("AAIANIgBAAQgCAOgGAEQgFADgFgCIgGgCQABgGgBgDIgSABIgDgKQAWACAOgHIAAgBQgNADgQABIgDgJQAQABANgDIgBgBIgUABQgCgHgBgCQAQABAGgCIgJgCIACgJIAmALIgDAJIgOgEIgFACIAEAHIAPgFIAGAIIgJAEQAAAOAJAHQgEACgFAFQgJgKgBgPgAgQAUIAFACQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBIADgDgAAYgEIACgJIgpgLIgCAIIgJgEIAEgRIAYAIIAAgDIALAAIACAHIAYAGIgFARg");
	this.shape_32.setTransform(21.95,118.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#153189").s().p("AAFAqIgFgDIABgFIgCAAIABgDIgXgJIADgIIAMAGIACgEIgKgFIAIgMIgCgEIgDAFQgIAQgHADQgDACgDgBIgIgEQADgGgBgEIAGADIACAAQAEgBAEgJQgEACgFAAQAAgEgCgFQAJAAAJgGIACgFIgGABQAAgEgDgFQAEAAAGgDQAAgFgCgGIAJgBIADAIIAEgDIAFAIIACgDIAkAVIgJAPIgYgMIgCACIAaAOIgCADQgRAdgDACIgEABIgDgBgAAGAhIABgBQACgBAMgVIgVgLIgFABIAFADIACgDIAGAEIgBADIAKAFIgIAOIgBgBgAgBAXIACABIAAgCIADABIgEgDgAADAPIACABIACgCIgDgCgAgGAKIADABIABgDIgCgBgAAbgHIACABIACgDIgCgCgAgEgXQgBAHgDAHQAFAAAEgEIgDgCIAHgNgAASgMIACABIACgDIgCgCgAAJgRIACABIACgDIgCgCg");
	this.shape_33.setTransform(14.825,115.1821);

	this.instance = new lib.mark1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,138.1);


(lib.sb_doctorname = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#211816").s().p("AAYAuIgCgFIAIABIAEgBQABgCABgOIg8AAIAFgWIgKAAQAAAcgLAPIgFgDQAKgPAAgcIAAgXIAjAAIgEgGIAEgCQAEAEACAEIAmAAIAAAFIgcAAIAAAHIAWAAIAAAOIg0AAIgBAGIA4AAIAAAFIg5AAIgBAGIA8AAIAAADQgCATgDACQgCACgDAAgAAQAAIAPAAIAAgHIgPAAgAgHAAIAQAAIAAgHIgQAAgAgdAAIAQAAIAAgHIgQAAgAgHgLIAQAAIAAgHIgQAAgAgdgLIAQAAIAAgHIgQAAgAgeArQAEgGADgJIAGADQgFAKgDAFgAgMAeIAFgBQACAGABAJIgGABIgCgPgAAAAdIAFgBQAEAGACAHIgFACQgBgEgFgKgAAOAcIAFgCQADADAFAHIgFACQgCgDgGgHgAATgbIAAgHIgPAAIAAgFIAPAAIAAgGIAHAAIAAAGIAUAAIAAAFIgUAAIAAAHgAgVgbIAAgHIgWAAIAAgFIAWAAIAAgGIAGAAIAAAGIAOAAIAAAFIgOAAIAAAHg");
	this.shape.setTransform(8.85,98.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#211816").s().p("AgFAuIAAg7IgJAMIABAFIgMAEIAAAeQAAAFgDACQgCABgLAAIgCgGIAKAAQAAAAABAAQAAAAAAgBQAAAAAAAAQABgBAAAAIAAgcIgMAFIgDgHIAPgEIAAgXIgOAAIAAgGIAOAAIAAgUIAGAAIAAAUIAMAAIAAAGIgMAAIAAAVIALgDIgFgFQAOgOAGgZIAGACIgGAQIAVAAQgCgJgFgGIAGgDIAIAPIgGADIAVAAIAAAGIgUAAIAAAOIATAAIAAAGIgTAAIAAANIATAAIAAAGIgTAAIAAAPIAXAAIAAAGIguAAIAAAHgAABAhIARAAIAAgPIgRAAgAABAMIARAAIAAgNIgRAAgAABgHIARAAIAAgOIgRAAg");
	this.shape_1.setTransform(8.9,86.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#211816").s().p("AANBXIgDAAIgPgIQgFgDgGgGIgKgLIgFgHIgGgJQgBgEABgBQAFgBADACIACACQAAAFAHAJIABAAQABADAKAKIABAAQABAEAKAEQAFADABgCIgBgCQABgEgDgIIgCgEIAAgBIADAAQAGACAEAIIAAAGIACAKIgBADIgDABgAg6BCQgHgCACgFIADgFIABgDIADgIQACgDAAgGIABgJIACgBQAHAAAAAIIgFAUIgCAEIgCAHQgBADgDAAIgBAAgAA7A1IgBgCIgBgBIgCgFQgMgJgCgEQgBgEAEgBQAEAAANANIAGAFIABAEIgBAEQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgFgCgAACAtIgJgHQgEgCgBgEIABgDIACgBQADAAADADIAEAFIAGADQAEACABACIABACQgCACgDAAQgDAAgDgCgAgoAHQgGgCADgFQANgDACgDIABgDIAAAAIACgaIgJAEQgIADgMAEIgGABIgEgCIgDgDQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIACAAIAGAAQALgDANgGIAHgDIABgIIAAgQIgBgGIAAgGQgBgEABgBIABgBQAEgCADAHIAAAHQACAFgBAFIAAAGIAAALIASgHQAGgBABgBIADgDQALgEACAKQgCACgEABIgHABIgTAIIgJADIgBAGIgBALIAAAAQACAEgCABIAAALIAEAAQAIgCAEAFQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAgBAAQgDABgDgBIgDgBIgXAHIgDgBg");
	this.shape_2.setTransform(10.2688,68.0618);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#211816").s().p("Ag+AbQgBgFAEgBIAEAAIAFgBIARgCQALgBASgEIAIgBIARgCIASgCQALgBAGgDQAFABABAFQACAEgEABIgEAAIgGgBIgiAFIgEAAIgtAHIgPACIgHACIgCABQgEAAgBgEgAgjAJIgDgCIgBgFIgFgJIgHgJQgCgDADgDIACgBQADABACACIADAEIACAEIAIANQADAIgFACIgDgCgAgTAJQAFgFABgDQgDgBACgHQABgIADgCQADABABACIABACIgBAFQAAABAAAAQgBABAAABQAAAAAAABQAAAAAAAAIABAAIAEgEIAGgHIACgBQAEABgBAEIgOANIgFAFIgFACIgCABIgCgCgAAFAHIAAgBQAAgDADgBIAEgCQAGgFAHgIQAHgHgDgBQAAgCgFAAIgNABIgPADIgRAFIgHADQgFACgEgCIAAgEQAAgBAQgFIAJgDQAQgFAKgBIAKAAIAEABQAJADABACQACAEgGAJQgJAMgIAEQgFACgEAAIgDAAg");
	this.shape_3.setTransform(8.9708,50.1591);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#211816").s().p("AglAwQgBAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAIADgCIANgKIAEgDQgJgFAAgDIgBAAIgGAGQgHAGgEACIgDAAIgEgBIAAgDIADgCIAIgHIAIgJIAFgFQAHgIAIgNIAFgOIACgFIADgDQAHACgIATIgCAEQgDAFAAACIAEgCQANgEAFAEQAIAEgGAIQgGAIgMANIAAACQALAEgCAGIgCABQgEABgHgGIgDgCIgKAIIgLAFIgGACQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBAAAAgAgLAFIgHAJIgDADIAAABIAIAEQAEADABgBIAFgEQAIgJACgEIADgDQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIgDgBIgGABIgIAEIgDAAIgCAAgAAbAoQgGgBgCgEIgBgEIAAgBQACAAAEACQADABADgBQAHgEAEgOQADgMgBgLQAAgHgCgEIgDgEIgDAAQgEABgEgDQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAIAEgCQAFgCAFgFIAAAAQgagFgbAKIgCAAQgHADgEgDIgCgCQAAgFAPgCIAQgEIARgBIAMAAIAFABQAIACACACIABADQABAEgBABIgHAGQAAACAEAEIACADQACAEAAARIgBALIgCAJQgHAPgFAEQgCABgEAAIgDAAg");
	this.shape_4.setTransform(7.8917,41.4568);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#211816").s().p("Ag9BgQgCgBABgHIACgLIADgaIAAgFIABgQIAAgOIABgOQAAgKgBgGIgBgHIACgDQAGABABAJIAAAOQABAKgCAWIgBAMIAAANIgCAVIgBALIgBAGIgCACQgEAAgBgBgAASBeQgEgCgFgPIACAAIAFAGIACACIACAAQABgCAAgNIAAgPIAAgSIAAgKIABgKIgCAAIgFADQgDACgDgCIgCgBQgBgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBIADgBQAJgBACgEIAAgFIAAgDIgKAFQgHAFgDgFIABgEIAIgEIAGgEIAFgCQABgCAAgOIgGACIgNAGQgEACgCgDQAAgDAEgDIAMgFIADgBIAGgCIACgKIAAgKIgBAAIgOAFQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAIgCgDQAAgEAGgBIAQgEIABgOIAAgDIAAgLQgBgIAEAAQADAAACAFQABACgCAGQABAJgCAMIAJgCIAKgCQAHgBAAAIQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAABIgFAAIgJABIgIACIgBASIAHgBQAcgHAEAKQADAHgFAJIgLASIgIAIQgEAEgCABIgDABIgDAAIgBAAQABgDAIgIIAOgWIADgHQACgGgDgBQgCgCgIACIgKACIgKADQgCAKABAEIABAAIAEgBQAFgCAFABIADAFQgCACgEABIgDgBQgIACgCADIAAAIIABAAIADgCIAEAAQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQgBACgEACQgDACgBABIAAAGIAAAHIAEABIANAMIAPAMIAAAAIAAAAQACAAAEAEIAMAGIAFACQAFABgCAEQgDAFgPgIIgHgFIgFgDIgCgCIgDgCIgLgIQgJgKgDAAIAAAwIgBAEIgBAHQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgGgBgAgWBFQgCgCACgDIADgBIAGgFQAIgHAIgPIADgHQACgEADgBQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQgBAAAAABIgCAEIgCAEQgDAHgIAMIgJAIQgEAFgEAAIgFgBgAgFAPIAAgEIAAgCIgHgbIgEgIQAAgDAEgBQAHACABAIIAAADIAEARIABADIABAIQABAFgDACQgEAAgBgDgAghAPQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAABAAIABgCIABgFIABgIQABgKgCgLQAAgFgEgCIgFAAIgDgCQgBgEAGgDIALgIIAFgEIgLADQgRAFgPAIIgJAFQgFADgFgCIgBgDIABgCIAGgBIAWgLIADgBIASgHIAOgEIAIgCIAEACQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIgFAFIgCACIgMAJQgEACgBACIAEAEIADAIIABAWIAAAEIAAAEQgBAKgEABIgEgCg");
	this.shape_5.setTransform(8.7308,20.7477);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// MergedLayer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAVBSIAAhlIgNAAIAABKIgSAAIAAhdIAfAAIAAgQIglAAIAAgTIBeAAIAAATIgmAAIAAAQIAiAAIAABKQAAANgHAEQgFADgPAAQgBgIgEgKIAKAAQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBIAAg3IgOAAIAABlgAhNBMIAAiDIAPAAQAEgPABgLIAXACIgJAYIAWAAIAAA1IglAAIAAAKIAnAAIAAA5IgnAAIAAALgAg6AvIAUAAIAAgVIgUAAgAg6gTIASAAIAAgSIgSAAg");
	this.shape_6.setTransform(34.975,87.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAtBQIAAgFIhaAAIAAAFIgSAAIAAg9IAsAAIAAgFIg+AAIAAgOIBaAAIgIgLIABAHQgDABgOAAIgjAAQgNAAgEgFQgFgFAAgLIAAgqIgGAAIAAgMIBPAAIAAAMIgpAAIAJACIgCAEIAeAAIAAAKIgRAAIAAAFIATAAIAAAKIgQAAIAQALIgJAIQgGgGgJgFQgGAHgMAFIAbAAQAMAAAFgCIAAAGQAMgCAKgEIgRgGIAHgLIAZAJIAKgJIgqAAIAAgLQgEgGgEgDQAPgFAAgLIAAgJIAvAAIAAANQAAAFACgBIAGAAIAJgBIABAOIgSABQgKAAgDgEQgDgDAAgKIgQAAQgBAMgLAHIApAAIADAAIAKADQgFAOgMAKIAUAJIgGAKIAPAAIAAAOIg6AAIAAAFIAoAAIAAA9gAgtBAIBaAAIAAgTIgTAAQgLAAgEgCQgDgDAAgIIAAgCIgLAAQgDAPgfAEQgEgGgEgEgAgtAlQAVgBAFgGIgaAAgAAYAgQAAADAFAAIAQAAIAAgFIgVAAgAgDATIALAAIAAgFIgLAAgAAOAAIAyAAIgXgKQgMAHgPADgAgtgPQgDgFgFgEQANgDAFgIIgSAAIAAgKIAJAAIALAAIAAgFIgGAAIgFAFIgLgGQAIgHAEgIIgNAAIAAArQAAAIAHAAIAEAAIAAAAgAghA7IAAgKIBFAAIAAAKg");
	this.shape_7.setTransform(34.675,68.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAqBSIAAgpIg0AKIgDgUIA3gKIAAhmIAVAAIAABiIASgDIADAUIgVAEIAAAsgAg1BSIAAg/QgLAXgJAMQgCgHgIgNQAOgPAMgfIgXAAIAAgUIAbAAIAAgUIgVADQgBgHgEgJQAigFAWgKIAMARQgIAEgOADIAAAYIAXAAIAAAUIgXAAIAAABQAKAKAMAPIgMAQQgEgIgGgLIAABHgAgIgNIAMgMQATAOAKALIgOANQgHgLgUgPgAgCg7IANgMQAVARAGAJIgPANQgIgNgRgOg");
	this.shape_8.setTransform(34.65,49.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDBAIAUAAQABAAABAAQAAAAABgBQAAAAAAAAQAAgBAAgBIAAgQIgwAAQAKAHAIAJIgPAOQgIgMgSgMIAHgGIgjAAIAAgRIBjAAIAAgGIhbACIgBgQIA+AAIAAgGIgzAAIAAgxIAzAAIAAgHIhAAAIAAgQIBAAAIAAgLIAUAAIAAALIBAAAIAAAQIhAAAIAAAHIA1AAIAAAxIgMAAIAXAOIgNALIgIgGIgMABIAAAGIAnAAIAAARIgnAAIAAARQAAAOgJADQgHADgYAAQgBgJgDgJgAAKAIIAWAAIgHgDIADgDIgSAAgAAKgKIAhAAIAAgHIghAAgAgpgKIAfAAIAAgHIgfAAgAAKgdIAhAAIAAgGIghAAgAgpgdIAfAAIAAgGIgfAAg");
	this.shape_9.setTransform(34.7,30.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// Layer_12
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#469DCC").s().p("AhbHPQgmgmAAg2IAArlQAAg2AmgmQAmgmA1AAQA1AAAnAmQAmAmAAA2IAALlQAAA2gmAmQgnAmg1AAQg1AAgmgmg");
	this.shape_10.setTransform(34.7,57.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,7.8,47.7,100.2);


(lib.sb_doctor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// doctor
	this.instance = new lib.doctor();
	this.instance.setTransform(54,132,1.3855,1.3855);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54,132,415.7,789.8);


(lib.mo_sc1title = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AD8HkQg7hMhCg/IgCgBQgiAbgtAWQgtAWgsAMQgNADgMgFQgLgEgHgLQgPgYgVgdIg5APQgRAEgOgJQgPgKgDgQIgGgeQhaANgiAHQgfAGgLAGQgUAKgSgMQgTgLAAgWQgBgPgEgYQgFgYgFgMQgIgRAJgSQAJgRASgDQAHgBACgCQACgCABgHIBCl5QgHgIgCgMQgCgNgHgeQgIgegFgQQgGgQAIgOQAIgQAPgEQA2gSAwgeQAwgeAegjQAJgLAOgDQAOgCANAHIBKAtQAQAJADARQACAJgDAKIArAgQAFgOAJgHQAPgKAQAEIByAYIAAgGQAEgRANgJQAOgKAQAEIBdATQAPAEAJANQAJAMgCAQIgCAJIB2AZQAPADAJANQAJANgDAPIgVCNQAPAEAIAMQAIANgCAPIgLBGQgCAQgOAKQgPAKgQgEIAAAAIguEzQgDARgOAJIgBABQAgAhAMAPQANAQgFATQgFATgTAIIhWAiQgFADgJAAQgUAAgLgPg");
	this.shape.setTransform(419.1442,57.4938);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjCC0QgQgCgKgMQgKgNABgQIAdlAQACgRANgKQANgLAQACIFfAmQAQACAKAMQAKANgBAQIgZFBQgCARgMALQgNAJgNAAgAgqAdIBKAIIAGhDIhKgIg");
	this.shape_1.setTransform(324.325,45.209);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AFYHOIhygMQgQgCgKgMQgKgNABgQIAAgIInBgyIAAAGQgCARgNAKQgMAKgRgBIhtgMQgQgCgKgNQgKgMABgQIBKr5QABgRANgKQANgKAQABILdBQQAQACAKAMQAKAMgBAQIg3L9QgCARgMAKQgLAJgPAAgAjuCvIG+AxIAim6Im3gwg");
	this.shape_2.setTransform(324.1198,47.3902);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Aj0G7QgMAAgKgHQgKgHgFgLIgJgVIgLAVQgKARgUACQgTADgOgPQgKgLgWgQQgXgRgNgGQgPgIgFgQQgFgQAIgPQAshNATh8QANhYABh/IADj5QAAgQAMgMQALgLAQAAIEQAAQgBgNAHgKQAKgPARgDIBkgRQANgCAMAGQANAHAFANQAGAOAHAUIEDgBQAQAAAMAMQALALABAQIABBKQAAARgMAMQgHAHgLADIACCQIAVAEQASAEAIAQQAJAPgGARQgbBNgdA0QgGAKgLAGQgKAFgMgCQgEAOgMAIIgeAVIAPAJQAPAKADARQADASgLAOQgTAXgXATQA2AGA7ADQAYACAKAXQAJAXgQASQgLAMgNAVQgLAUgHAQQgFAMgLAGQgLAHgMgBQingOh/gjQiAAnisARg");
	this.shape_3.setTransform(229.4437,40.5015);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeG5QgPAAgLgJQgNgLgBgRIgOjlIh3ALIABAJQABAQgLAMQgKAMgQACIhpAKQgRABgMgLQgNgLgBgQIgXmrQgBgQAKgMQALgMAPgCIEEgYIgHhpQAAgQAKgMQAKgNAQgBIBrgKQARgBAMAKQANALABARIAHBnIEGgYQARgBAMAKQANAKABARIAhGlQABAQgLAMQgKANgQABIhtAKQgQACgNgLQgNgLgBgQIAAgDIh3ALIAQDoQABAPgLANQgKAMgQABIhuALgAjbhfIAGBmIB1gKIgHhngABUh7IAHBnIB2gLIgIhng");
	this.shape_4.setTransform(135.8532,44.5156);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVGfQgOgKgCgRIgUiPIlhBGQgRADgNgKQgPgKgBgRIgNhhQgCgQAJgMQAJgNAPgDIBmgUIgMhdQgSAJgTgKQgTgLgagNQgegOgQgGQgTgGgGgVQgFgUANgQQAvg1AkhOQAkhNARhWQADgOALgJQAMgJAOABIBsAFQASABALAOQAKANgDATIgDAPIGmhSQAQgDAOAKQAOAJACARIAPBfQADAPgKANQgJANgPADIjSApIADAVIC7gkQARgDANAJQAOAKADARIAOBcQACAQgJANQgJANgPADIjAAlIAHAyIEBgxQARgEANAKQAOAJACAQIAPBhQADAPgJANQgJANgQADIkFA0IAWCTQACAPgJANQgJANgQADIhzAWQgNAAgKgHgAh4AiIAHAyIBJgOIgHgzgAjGiUIgLAYICKgbIgDgVg");
	this.shape_5.setTransform(42.1846,58.564);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc1title, new cjs.Rectangle(-4,-3.8,470.9,111.2), null);


(lib.mo_light = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.063,1],0,0,0,0,0,22).s().p("AiaCaQg/g/AAhbQAAhaA/g/QBAhABaAAQBaAABABAQBAA/AABaQAABbhAA/QhABAhaAAQhaAAhAhAg");
	this.shape.setTransform(35.0622,35.0323,1.6078,1.6078);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(59));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.1,70.1);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#163F97","#00A0E9"],[0,1],-187.7,46,-187.7,-57.3).s().p("ACaE9IAvgbIipgkIBTAuQggAdgvAZQgtAXgsAMQgdgvgcgiIABAEIhQAVIgOhCQh3ARgrAIQglAHgQAIQAAgTgGgbQgFgdgIgQQAmgHAGglIBFmLIEJA4IgyEsIi0gnIgSBpIBSgJIgOgvIBLgPQAtCJAJApQBcgTArgiIhXgTIA0lAIGIBTIgwFCIhWgTQBWBTAjAqIhWAiQg7hMhGhCgAAmDDIDPAtIAFgiIjOgtgAA0BsIDPAsIAFghIjOgsgABCAVIDOArIAFggIjOgqgAkUAXIBZATIAHgtIhZgTgAkBhbIBZATIAHgrIhZgSgAgrh4IALhGIC8AoIAEgcIibggIAZiVICaAgIAHguIBdAUIgIAuICaAgIgWCWIibghIgEAcIC9AoIgLBGgAEGjWIBDAOIAFgmIhCgOgABij5IBHAPIAGglIhHgPgAj2juIAIgwQgzAggvASQgCgQgIgfQgIgggGgSQA4gSA0ggQA3giAigpIBLAsIgRAUQBNA4AbAXIg1BEQgkgihLg4Ig1AmICGAcIgLBBg");
	this.shape.setTransform(423.275,61.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#163F97","#00A0E9"],[0,1],-92.7,56,-92.7,-47.3).s().p("ADqGaIAEguIoPg7IgFAuIhtgMIBKr5ILdBQIg3L9gAkYDSIIMA6IAooJIoEg4gAi8B3IAdlBIFgAnIgZFCgAhSAqICYARIAMiSIiYgRg");
	this.shape_1.setTransform(328.25,50.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#163F97","#00A0E9"],[0,1],2,62.9,2,-40.4).s().p("AkbFPQB8gKBlgXQglgRghgTQggASg2AWQgIgOgQgSQgQgRgNgKQAigLAngRQghgbgSgXIBNgfQAVAXAbAUQAlgYAWgTQgYgGgKgSQgJgPAAggIABgnIBOAAIAWgZIjwAAQgBAjgFA1QAcgYAog8IBDAlQglA6gfAkIhDgtQgXDEg/BtQgNgNgZgTQgagTgQgHQAwhVAUiFQANhYABiCIADj5IFCAAIgLgpIBkgRQANAfAIAbIEgAAIABBKIjpAAIABAjIDKgBIACCZIpaAAIAAAbII9AAIAPgDIBDAOQgcBMgaAvIhSgSQAMgWAMgiIjrAAQAoATAPAKIgoA1IATAAQAPAAAFgGQAFgHADgXQAUANAnAIIgZgaIA7glQBLBHAVAbIg+AqQgPgTgugzQgGAmgSAOQgSAOgpAAIhKAAIgaAZIDaAAIAQgDIA6AkQgrA1hKAnQBlASB0AGQgNAOgPAYQgNAWgJAUQimgOiCgkQiFAoirARQgNgjgagigABGELQA2gVAlgWIjOAAQA1AZA+ASgAgXBBQAAANAHAEQAGADAUAAIBGAAQg2ghgxgXgACfiOIBsAAIAAglIhsAAgAgmiOIBqAAIAAgkIhqAAgAjviOIBwAAIAAgkIhvAAgAgmjsIBqAAIAAgjIhqAAgAjujsIBvAAIAAgjIhvAAg");
	this.shape_2.setTransform(233.575,44.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#163F97","#00A0E9"],[0,1],95.6,58.9,95.6,-44.4).s().p("AgvCEIjFATIADAvIhpAKIgYmrIEqgcIgJiQIBrgKIAKCQIEugcIAhGlIhtAKIgDgqIjFASIASENIhuALgAkEiDIAKC2IDEgTIgMi1gAAqifIANC1IDEgSIgNi1g");
	this.shape_3.setTransform(139.975,48.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#163F97","#00A0E9"],[0,1],189.2,44.9,189.2,-58.4).s().p("AARDHImJBNIgMhhICKgbIgejeID9gxIgOhjIi5AjQgpBkg4BMQg9gjglgMQAzg6AnhVQAlhSARhYIBsAGQgGAigNAnIHjheIAPBfIj3AwIAPBjIDkgsIAOBdIjkAsIASCAIEpg7IAPBhIkpA7IAbC4IhsAVgAikACIASCBICVgdIgRiAg");
	this.shape_4.setTransform(46.325,62.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// mo_sc1_title
	this.instance = new lib.mo_sc1title();
	this.instance.setTransform(235.3,55.65,1,1,0,0,0,231.4,51.8);
	this.instance.shadow = new cjs.Shadow("rgba(21,49,129,0.749)",1,1,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-3,480,121);


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

	// mo_light
	this.instance = new lib.mo_light();
	this.instance.setTransform(35.1,35.1,1,1,0,0,0,35.1,35.1);
	this.instance.compositeOperation = "lighten";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.1,70.1);


(lib.an_ttlimit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_tt_limit
	this.instance = new lib.sb_ttlimit("synched",0);
	this.instance.setTransform(186.5,16.6,1.5924,1.5924,0,0,0,117.5,10.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:117.4,scaleX:1,scaleY:1,x:186.3,y:16.55,alpha:1},17,cjs.Ease.cubicOut).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,372.7,33.1);


(lib.an_subttinner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_subtt_half
	this.instance = new lib.sb_subtthalf("synched",0);
	this.instance.setTransform(120.45,231.95,1.2515,1.2515,0,0,0,-127,175.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({regX:-127.7,scaleX:1,scaleY:1,x:114.95,y:226.1,alpha:1},11,cjs.Ease.cubicOut).wait(23));

	// sb_subtt_2
	this.instance_1 = new lib.sb_subtt2("synched",0);
	this.instance_1.setTransform(121.15,96.1,1.6045,1.6045,0,0,0,47.4,59.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({regX:47.3,regY:59.8,scaleX:1,scaleY:1,x:120.95,y:95.9,alpha:1},12,cjs.Ease.cubicOut).wait(23));

	// sb_subtt_blue
	this.instance_2 = new lib.sb_subttblue("synched",0);
	this.instance_2.setTransform(118.8,121,1,1,0,0,0,118.8,35.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},10,cjs.Ease.cubicOut).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,0,256,298.2);


(lib.an_subtt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// an_subtt_inner
	this.instance = new lib.an_subttinner("synched",0,false);
	this.instance.setTransform(236.5,96,1,1,0,0,0,236.5,96);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:31},45).to({regX:236.3,regY:95.9,scaleX:1.1024,scaleY:1.1024,x:248.95,y:95.95,startPosition:37},6).to({regX:236.5,scaleX:0.9726,scaleY:0.9726,x:236.5,y:95.85,startPosition:39},7).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,0,261.9,298.2);


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

	// sb_sc1_bg
	this.instance = new lib.sb_sc1bg("synched",0);
	this.instance.setTransform(870.95,509.5,1,1,0,0,0,764,509.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(107,119,1536.1,395.9);


(lib.an_pdinner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_mark3
	this.instance = new lib.sb_mark3("synched",0);
	this.instance.setTransform(398.35,73.2,1.3431,1.3431,0,0,0,72.5,54.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:398.3,alpha:1},14,cjs.Ease.cubicOut).to({startPosition:0},64).to({_off:true},1).wait(22));

	// sb_pd
	this.instance_1 = new lib.sb_pd("synched",0);
	this.instance_1.setTransform(120.8,219.35,1,1,0,0,0,120.8,182);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:311.6,y:232.7,alpha:1},14,cjs.Ease.cubicOut).to({startPosition:0},64).to({_off:true},1).wait(22));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,495.7,413.7);


(lib.an_pd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// an_pd_inner
	this.instance = new lib.an_pdinner("synched",0);
	this.instance.setTransform(247.8,206.8,1,1,0,0,0,247.8,206.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:45},79).to({scaleX:1.1081,scaleY:1.1081,x:247.85,startPosition:50},7,cjs.Ease.cubicOut).to({scaleX:1,scaleY:1,x:247.8,startPosition:45},7,cjs.Ease.cubicOut).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.6,495.7,437.6);


(lib.an_mark2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_mark2
	this.instance = new lib.sb_mark2("synched",0);
	this.instance.setTransform(33.5,69,1,1,0,0,0,33.5,69);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:103.5,alpha:1},14,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,138.1);


(lib.an_mark1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_mark1
	this.instance = new lib.sb_mark1("synched",0);
	this.instance.setTransform(33.5,69,1,1,0,0,0,33.5,69);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:103.5,alpha:1},14,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,138.1);


(lib.an_light = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_light
	this.instance = new lib.sb_light("synched",0);
	this.instance.setTransform(35.1,35.1,1,1,0,0,0,35.1,35.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.7618,scaleY:0.7618,x:35.15,y:35.15,alpha:1},9).to({scaleX:1,scaleY:1,x:35.1,y:35.1},10).to({alpha:0},8).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.1,70.1);


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

	// an_light_copy_copy_copy_copy_copy_copy_copy_copy_copy_copy_copy
	this.instance = new lib.an_light("synched",0);
	this.instance.setTransform(538.15,132.45,0.5162,0.5162,0,0,0,35.4,35.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).to({_off:true},162).wait(141));

	// an_light_copy_copy_copy_copy_copy_copy_copy_copy_copy_copy
	this.instance_1 = new lib.an_light("synched",0);
	this.instance_1.setTransform(573,51,0.9587,0.9587,0,0,0,35.4,35.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({_off:false},0).to({_off:true},148).wait(141));

	// an_light_copy_copy_copy_copy_copy_copy_copy_copy_copy
	this.instance_2 = new lib.an_light("synched",0);
	this.instance_2.setTransform(357.7,27.5,0.6088,0.6088,0,0,0,35.2,35.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({_off:false},0).to({_off:true},153).wait(141));

	// an_light_copy_copy_copy_copy_copy_copy_copy_copy
	this.instance_3 = new lib.an_light("synched",0);
	this.instance_3.setTransform(104.5,49.8,0.6088,0.6088,0,0,0,35.2,35.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({_off:true},162).wait(141));

	// an_light_copy_copy_copy_copy_copy_copy_copy
	this.instance_4 = new lib.an_light("synched",0);
	this.instance_4.setTransform(263.05,43.5,0.4046,0.4046,0,0,0,35.1,35.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40).to({_off:false},0).wait(259).to({startPosition:28},0).to({_off:true},1).wait(21));

	// an_light_copy_copy_copy_copy_copy_copy
	this.instance_5 = new lib.an_light("synched",0);
	this.instance_5.setTransform(242.55,108.8,0.4046,0.4046,0,0,0,35.1,35.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(63).to({_off:false},0).wait(236).to({startPosition:5},0).to({_off:true},1).wait(21));

	// an_light_copy_copy_copy_copy_copy
	this.instance_6 = new lib.an_light("synched",0);
	this.instance_6.setTransform(378.1,109.45,0.4046,0.4046,0,0,0,35.1,35.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).wait(280).to({startPosition:16},0).to({_off:true},1).wait(21));

	// an_light_copy_copy_copy_copy
	this.instance_7 = new lib.an_light("synched",0);
	this.instance_7.setTransform(137.5,130,0.6652,0.6652,0,0,0,35.1,35.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(48).to({_off:false},0).wait(251).to({startPosition:20},0).to({_off:true},1).wait(21));

	// an_light_copy_copy_copy
	this.instance_8 = new lib.an_light("synched",0);
	this.instance_8.setTransform(456,102.8,0.6652,0.6652,0,0,0,35.1,35.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(31).to({_off:false},0).wait(268).to({startPosition:4},0).to({_off:true},1).wait(21));

	// an_light
	this.instance_9 = new lib.an_light("synched",0);
	this.instance_9.setTransform(357.75,27.55,1,1,0,0,0,35.1,35.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20).to({_off:false},0).wait(279).to({startPosition:15},0).to({_off:true},1).wait(21));

	// sb_sc1_title
	this.instance_10 = new lib.sb_sc1title("synched",0);
	this.instance_10.setTransform(329,81.9,1.373,1.373,0,0,0,239.6,59.6);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:239.5,regY:59.5,scaleX:1,scaleY:1,x:328.85,y:81.7,alpha:1},32,cjs.Ease.backOut).to({startPosition:0},18).to({regY:59.6,scaleX:1.1429,scaleY:1.1429,x:328.9,y:81.8},9,cjs.Ease.cubicOut).to({regY:59.5,scaleX:1,scaleY:1,x:328.85,y:81.7},8,cjs.Ease.cubicOut).wait(1).to({regX:235.7,regY:56,x:325.05,y:78.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:239.5,regY:59.5,x:328.85,y:81.7},0).to({_off:true},1).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-7.5,656,166.5);


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
	this.shape.graphics.f("#163F8D").s().p("AglAlIgBgCIABgEQAFgUAAgPIAAgeQAAgEAEAAQAEAAAAAEIAAASIAHAAIAAgSIABgDIADgBIADABIABADIAAASIABAAIADABIABAEIgBACQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgQAAIAAAJIALAAQAFAAAAAFIAAAWIABgCQAFgPAAgMIABgbQAAgHAGAAIAeAAQAEAAAAAEQAAAFgEAAIgbAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAIAAAKIAbAAQAFAAAAAFQAAALgIAOIgDADIAKAMQAAAAABAAQAAABAAAAQAAABABAAQAAAAAAABQAAAAAAABQgBABAAAAQAAABAAAAQgBAAAAAAIgEABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgIgKIgJAKIgFACQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgDQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIANgNIgCgCIgIgUIAAgBIgBAAQgBAWgFAPIAAADIgEABIgDgBIgBAAQAAABAAAAQAAABgBAAQAAAAgBABQgBAAgBAAQgBAAAAAAQgBgBgBAAQAAAAAAgBQgBAAAAgBIAAgYIgBgBIgIAAQgBAPgEALQAAAAAAABQAAAAgBABQAAAAgBAAQgBABgBAAIgDgCgAAWALIAAAAIABgBQAGgJAAgFIgBgBIgNAAg");
	this.shape.setTransform(-63.2479,220.4541,0.7128,0.7128);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#163F8D").s().p("AAfAmQgEgDgEgFIgGAGIgHADQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgDIABgDQAHgEAFgFIgBAAIgIgRQgDAVgFAJIgDACIgDgBIgBgDIABgEQAGgTAAgQIAAgVIgBAAQgEAAAAgEQAAgEAEAAIAeAAQAFAAAAAEQAAAFgEAPIABAAIAFABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAKgEAJQgCAEgEAGIAIAHQABAAAAABQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABIgDABQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAgAAOgBQACAFAFAJIACAEIABgBQAFgJABgJIgBAAIgQAAgAAJgKIANAAIADgQIAAAAIgQAAgAgWAmIgBgDIAAgcIgLABIgDgBIgBgEIABgCQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIACAAIAIgJIgLgJQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgCIADgBIACAAQAFgGACgFQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIADAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAIgCAEQgDAGgEAEIAGAGIAHgNQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAEABIABADQAAADgCAEQgGAJgKAKIAMgCIgBgFIAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQACAIAAAGQAAADgEAAQAAAAgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAgBIgFABIAAAeQAAAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAIgDABIgDgBgAgkAiIgBgDIADgRQABgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAIADAAIABADIAAACQgCAMgCAFQAAAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAIgEgBgAgLAaIgCgMIAAgBQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAIACAOQAAADgEAAQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAgBAAAAg");
	this.shape_1.setTransform(-63.2479,213.4332,0.7128,0.7128);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#163F8D").s().p("AAOAlIgBgDIAAggIgVAAIgBAIQgCAHgDAFQgFAIgIAGQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgDgBIgBgDIAAgDQAAAAAAgBQABAAAAAAQAAAAABgBQABAAAAgBQAJgGADgIQACgEABgHIgQAAIgEgBIgBgCIABgDIAEgBIAQAAIAAgPQgIADgGAAQgFAAAAgDQAAgBAAgBQABAAAAgBQAAAAABAAQABgBAAAAQATgFAMgHIADgBIADAAIABAEQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABQgEADgIAEIAAASIAVAAIAAgbIABgEIAEgBIADABIABAEIAAAbIAMAAIAEABIABADIgBACQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgMAAIAAAgIgBADQAAAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_2.setTransform(-63.2479,206.3944,0.7128,0.7128);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1.2,1,1).p("AgcgmQAEAAAAAEIAAASIAHAAIAAgSIABgDQACgBABAAQACAAABABQABABAAACIAAASIABAAQACAAABABQABABAAADIgBACQgBACgCAAIgQAAIAAAJIALAAQAFAAAAAFIAAAWIABgCQAFgPAAgMIABgbQAAgHAGAAIAeAAQAEAAAAAEQAAAFgEAAIgbAAQgCAAAAABIAAAKIAbAAQAFAAAAAFQAAALgIAOIgDADQACACAIAKQACABAAACQAAADgCAAIgEABQgCAAgCgCQgEgEgEgGIgJAKQgCABgDABQgCAAgBgBIgBgDQAAgCABgBIANgNIgCgCQgEgIgEgMIAAgBIgBAAQgBAWgFAPIAAADIgEABQgCAAgBgBIgBAAQAAADgEAAQgEAAAAgDIAAgYIgBgBIgIAAQgBAPgEALQAAACgEABQgBAAgCgCIgBgCIABgEQAFgUAAgPIAAgeQAAgEAEAAgAAPgFIAHAQIAAAAIABgBQAGgJAAgFQAAgBgBAAg");
	this.shape_3.setTransform(-63.2479,220.4541,0.7128,0.7128);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglAlIgBgCIABgEQAFgUAAgPIAAgeQAAgEAEAAQAEAAAAAEIAAASIAHAAIAAgSIABgDIADgBIADABIABADIAAASIABAAIADABIABAEIgBACQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgQAAIAAAJIALAAQAFAAAAAFIAAAWIABgCQAFgPAAgMIABgbQAAgHAGAAIAeAAQAEAAAAAEQAAAFgEAAIgbAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAIAAAKIAbAAQAFAAAAAFQAAALgIAOIgDADIAKAMQAAAAABAAQAAABAAAAQAAABABAAQAAAAAAABQAAAAAAABQgBABAAAAQAAABAAAAQgBAAAAAAIgEABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgIgKIgJAKIgFACQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgDQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIANgNIgCgCIgIgUIAAgBIgBAAQgBAWgFAPIAAADIgEABIgDgBIgBAAQAAABAAAAQAAABgBAAQAAAAgBABQgBAAgBAAQgBAAAAAAQgBgBgBAAQAAAAAAgBQgBAAAAgBIAAgYIgBgBIgIAAQgBAPgEALQAAAAAAABQAAAAgBABQAAAAgBAAQgBABgBAAIgDgCgAAWALIAAAAIABgBQAGgJAAgFIgBgBIgNAAg");
	this.shape_4.setTransform(-63.2479,220.4541,0.7128,0.7128);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1.2,1,1).p("AABgaIgBAAQgEAAAAgEQAAgEAEAAIAeAAQAFAAAAAEQAAAFgEAPIABAAQADAAACABQACABAAADQAAAKgEAJQgCAEgEAGIAIAHQACABAAACQAAACgBACIgDABQgCAAgCgBQgEgDgEgFIgGAGIgHADQgCAAgCgBQgBgCAAgBIABgDQAHgEAFgFIgBAAIgIgRQgDAVgFAJQgBABgCABIgDgBIgBgDIABgEQAGgTAAgQgAgWgmIADAAQACABAAACIgCAEQgDAGgEAEIAGAGIAHgNQACgCABAAIAEABIABADQAAADgCAEQgGAJgKAKIAMgCIgBgFIAAgBQAAgDADAAQADAAABACQACAIAAAGQAAADgEAAQgDAAAAgDIAAgBIgFABIAAAeQAAACgBABQgBABgCAAQgCAAgBgBQgBgBAAgCIAAgcIgLABIgDgBIgBgEIABgCQABgBABAAIACAAIAIgJIgLgJQgCgCAAgCIABgCQABgBACAAIACAAQAFgGACgFQABgCACAAgAAJgKIANAAIADgQIAAAAIgQAAgAgeALIADAAIABADIAAACQgCAMgCAFQAAACgCAAQgDAAgBgBIgBgDIADgRQACgDACAAgAAXARIABgBQAFgJABgJQAAAAgBAAIgQAAIABABQACAFAFAJgAgKAKQADAAABACIACAOQAAADgEAAQgDAAAAgDIgCgMIAAgBQAAgDADAAg");
	this.shape_5.setTransform(-63.2479,213.4332,0.7128,0.7128);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfAmQgEgDgEgFIgGAGIgHADQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgDIABgDQAHgEAFgFIgBAAIgIgRQgDAVgFAJIgDACIgDgBIgBgDIABgEQAGgTAAgQIAAgVIgBAAQgEAAAAgEQAAgEAEAAIAeAAQAFAAAAAEQAAAFgEAPIABAAIAFABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAKgEAJQgCAEgEAGIAIAHQABAAAAABQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABIgDABQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAgAAOgBQACAFAFAJIACAEIABgBQAFgJABgJIgBAAIgQAAgAAJgKIANAAIADgQIAAAAIgQAAgAgWAmIgBgDIAAgcIgLABIgDgBIgBgEIABgCQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIACAAIAIgJIgLgJQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgCIADgBIACAAQAFgGACgFQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIADAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAIgCAEQgDAGgEAEIAGAGIAHgNQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAEABIABADQAAADgCAEQgGAJgKAKIAMgCIgBgFIAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQACAIAAAGQAAADgEAAQAAAAgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAgBIgFABIAAAeQAAAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAIgDABIgDgBgAgkAiIgBgDIADgRQABgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAIADAAIABADIAAACQgCAMgCAFQAAAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAIgEgBgAgLAaIgCgMIAAgBQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAIACAOQAAADgEAAQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAgBAAAAg");
	this.shape_6.setTransform(-63.2479,213.4332,0.7128,0.7128);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1.2,1,1).p("AABglIADAAIABAEQAAACgBAAQgEAEgIAEIAAARIAVAAIAAgaIABgEIAEgBIADABIABAEIAAAaIAMAAIAEABQABABAAADQAAABgBABQgBABgDAAIgMAAIAAAgIgBADQAAABgDAAQgCAAgCgBIgBgDIAAggIgVAAIgBAIQgCAIgDAEQgFAIgIAGQgBACgDAAIgDgCIgBgDIAAgDQAAgBADgBQAJgHADgIQACgEABgHIgQAAQgDAAgBgBIgBgCIABgEIAEgBIAQAAIAAgOQgIADgGAAQgFAAAAgEQAAgCADgBQATgFAMgHQACgBABAAg");
	this.shape_7.setTransform(-63.2479,206.3944,0.7128,0.7128);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAOAlIgBgDIAAggIgVAAIgBAIQgCAHgDAFQgFAIgIAGQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgDgBIgBgDIAAgDQAAAAAAgBQABAAAAAAQAAAAABgBQABAAAAgBQAJgGADgIQACgEABgHIgQAAIgEgBIgBgCIABgDIAEgBIAQAAIAAgPQgIADgGAAQgFAAAAgDQAAgBAAgBQABAAAAgBQAAAAABAAQABgBAAAAQATgFAMgHIADgBIADAAIABAEQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABQgEADgIAEIAAASIAVAAIAAgbIABgEIAEgBIADABIABAEIAAAbIAMAAIAEABIABADIgBACQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgMAAIAAAgIgBADQAAAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_8.setTransform(-63.2479,206.3944,0.7128,0.7128);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#163F8D").s().p("AAIAPIgDgHIgDgEIgCgBIgBgBIgHAAIAAANIgEAAIAAgdIASABQABAAAAAAQABAAAAAAQABABAAAAQAAABABAAIABAFQAAADgCACQgCACgEAAIACACIADADIAFAJgAgIgBIAIAAIAEgBIACgBIABgDQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQgBgBgEAAIgIAAg");
	this.shape_9.setTransform(-69.9129,205.2265,0.7126,0.7126);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#163F8D").s().p("AgQASQgIgIAAgKQAAgJAIgHQAHgIAJAAQAKAAAIAIQAHAHAAAJQAAAKgHAIQgIAHgKAAQgJAAgHgHgAgPgPQgGAHAAAIQAAAJAGAHQAHAGAIAAQAJAAAHgGQAGgHAAgJQAAgIgGgHQgHgGgJAAQgIAAgHAGg");
	this.shape_10.setTransform(-70.0198,205.2087,0.7126,0.7126);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#163F8D").s().p("AgoCFQgLgBgFgHQgEgFAAgOIAAhsQAAgPAQAAQARAAAAAPIAABkQAAAEAEAAIA6AAQAGgBACgLQACgIAAgXQACgKAMAAQAIAAAEADQAGAEAAAIQAAAXgGAXQgGAVgXACgAiEBvQgFgDAAgHQAAgEADgMQANggANgyIADgEQADgBADAAQAIAAAEACQAFADAAAHQAAAIgEAQQgNA1gJATQgGAIgIAAQgFAAgFgDgABxBsQgSgvgUgmQgHgNAAgHQAAgGAGgDQAEgDAFAAQAFABACACQAJAIANAXQAaA0AAAYQAAAFgDAEQgEAEgIAAQgFgBgFgFgAAPAxQgOgigSgfQgDgFAAgFQAAgGAFgDQAEgCAFAAQAEAAAEADQAKAMANAXQAOAZABANQAAAGgEAEQgFAEgHAAQgGAAgDgEgAAngaQgDgDAAgIIAAgbIhIAAIAAAbQAAAHgEAEQgEAEgJAAQgJAAgDgEQgEgDAAgIIAAgbIgxAAQgGAAgFgEQgEgDAAgIQAAgIAEgEQAEgDAHAAIAxAAIAAgWQAAgHADgEQAEgEAJAAQAKAAACADQAFAEAAAIIAAAWIBIAAIAAgXQAAgHADgEQACgEALAAQAKAAABADQAFADAAAJIAAAXIAzAAQAIAAAEADQADAEAAAIQAAAHgDADQgDAFgJAAIgzAAIAAAbQAAAHgEAEQgDAEgJAAQgJAAgEgEg");
	this.shape_11.setTransform(-83.2031,213.19,0.7126,0.7126);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#163F8D").s().p("AiBCAQgEgDAAgIQAAgFAfhCIAIgSQAEgLAIAAQAGAAAEACQAIADAAAKIgGARQgFAOgPAkIgLAXQgHALgKAAQgHgBgEgEgAgWCCQgVAAAAgVIAAhEQAAgUAVAAIAuAAIAAglIhBAAQgGAAgEgEQgDgDAAgJQAAgHADgDQAEgEAGAAIBBAAIAAgqQgeAEgbAAQgOgBABgQQABgKALgCQBIgCA+gRIAIAAQAGAAAEAEQAEAEAAAHQAAAJgLAFQgOAFgrAGIAAAuIBEAAQAIAAADAEQADACAAAIQAAAHgCAEQgEAFgIAAIhEAAIAAAlIAwAAQAVAAABAUIAABEQgBAVgVAAgAgLA4IAAAnQAAAHAGAAIBaAAQAGAAAAgHIAAgnQAAgIgGAAIhaAAQgGAAAAAIgAhXAAQgXgUgQgKQgJgGAAgGQAAgJAEgDQADgEAJAAQAFAAAGADQAeATAIAKQAHAEABAIQAAAHgEAEQgDAEgJABQgDAAgGgCgAhKhGQgVgSgUgOQgHgFgCgHQAAgIAFgEQADgEAIAAQAFAAAGAEQAfAVAIAKQAGAEABAHQAAAHgDAEQgEAGgIABQgEAAgEgEg");
	this.shape_12.setTransform(-105.5258,213.4394,0.7126,0.7126);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgqCWQgRgCgKgMQgHgJAAgVIAAgpQgLAjgGAOIgCACQgIAMgNADQgNACgMgHIgCgBQgLgJAAgPQAAgIAFgNQANgiALguIABgDQADgFAGgGQAIgFAIAAQALAAAIAFIAFACIAAAAIgCgBQgJgKAAgOIAAgKIggAAQgOAAgIgIQgJgIAAgQQgBgNAIgKIACgBQAJgIANABIAgAAIAAgGQAAgNAIgJQAHgKASAAQAQAAAHAIQAKAKAAAOIAAAGIAmAAIAAgHQABgNAGgIQAJgLARAAQARAAAHAIQAKAJAAAPIAAAHIAiAAQAPAAAHAHQAKAIgBAQQAAAOgGAHQgJALgQAAIgiAAIAAAKQAAAHgCAFIACAAQAGABAHAEIAEACQAJAKAPAZQAcA3ABAdQAAAMgHAJQgKAJgPAAQgPgBgIgLIgDgFIgHgRIgEASQgJAggiADgAgsBqIACAJIADACIAHAAQgJgFgDgIgAgLBVIAlAAIACgPIgEAAQgOAAgJgLIgCgEIgKgXgAA8AgIgBAAQgHgPgBgNQAAgFACgEQgJAAgFgCIAAABQAOAYADAOIADAAgAAOgtIAEAGIAAgIIgGAAgAg/hPQAJAEABAIQACgIAHgEQgHgDgCgJQgBAJgJADgAAqhPQAIAEABAIQADgIAHgEQgHgDgDgIQgBAHgIAEg");
	this.shape_13.setTransform(-83.2273,213.1348,0.7124,0.7124);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoCFQgLgBgFgHQgEgFAAgOIAAhsQAAgPAQAAQARAAAAAPIAABkQAAAEAEAAIA6AAQAGgBACgLQACgIAAgXQACgKAMAAQAIAAAEADQAGAEAAAIQAAAXgGAXQgGAVgXACgAiEBvQgFgDAAgHQAAgEADgMQANggANgyIADgEQADgBADAAQAIAAAEACQAFADAAAHQAAAIgEAQQgNA1gJATQgGAIgIAAQgFAAgFgDgABxBsQgSgvgUgmQgHgNAAgHQAAgGAGgDQAEgDAFAAQAFABACACQAJAIANAXQAaA0AAAYQAAAFgDAEQgEAEgIAAQgFgBgFgFgAAPAxQgOgigSgfQgDgFAAgFQAAgGAFgDQAEgCAFAAQAEAAAEADQAKAMANAXQAOAZABANQAAAGgEAEQgFAEgHAAQgGAAgDgEgAAngaQgDgDAAgIIAAgbIhIAAIAAAbQAAAHgEAEQgEAEgJAAQgJAAgDgEQgEgDAAgIIAAgbIgxAAQgGAAgFgEQgEgDAAgIQAAgIAEgEQAEgDAHAAIAxAAIAAgWQAAgHADgEQAEgEAJAAQAKAAACADQAFAEAAAIIAAAWIBIAAIAAgXQAAgHADgEQACgEALAAQAKAAABADQAFADAAAJIAAAXIAzAAQAIAAAEADQADAEAAAIQAAAHgDADQgDAFgJAAIgzAAIAAAbQAAAHgEAEQgDAEgJAAQgJAAgEgEg");
	this.shape_14.setTransform(-83.2451,213.1526,0.7124,0.7124);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ah5CWQgLgCgIgHQgKgJAAgPQABgKAghEIAIgRQADgIAFgGQgPgMgTgMQgPgKgCgOIAAgBQAAgQAJgIQAJgKAPAAQAJAAAKAGIAEADIgcgWQgPgKgBgOIAAgBQAAgQAJgIQAIgKAQABQAIgBALAHIABABQAWAPAIAGQAIgJANgCIACAAQBIgDA7gPIABgBIAKgBQAOAAAJALQAIAIAAANQAAAUgUAJIgCABQgMAEgjAGIAAAPIA0AAQAOAAAIAHQAJAHAAARQAAAMgGAIQgJALgQAAIg0AAIAAAFIAgAAQASgBAKALQAKAKAAARIAABDQAAASgKAJQgKALgSAAIh8AAQgRAAgKgLQgKgJAAgSIAAgnIgQAkIgMAYQgJATgVABgABlByIABAAQABAAABgBQABAAAAAAQABAAAAAAQABAAAAAAIAAgIQgCAFgEAEgAgaBtIABAEIADABIACAAQgFgFgBgEgAAFBVIBGAAIAAgTIhGAAgABrAtIAAgDIgBgEIgFAAQAEADACAEgAgaAnIAAAGQACgEAEgDIgCAAIgEABgAAkAgIAFAAIgCgEgAg1AGIgDAEIAFAGQAKgMATABIAdAAIAAgFIg3AAgAAggeQAEACADAFQACgFAFgCQgFgDgCgFQgCAFgFADgAhEgvIABgCIgFgBgAgpg+IAwAAIAAgHIgnACIgCAAIgDAAgAAhhlIACABIADADIADgFg");
	this.shape_15.setTransform(-105.5789,213.3841,0.7124,0.7124);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiBCAQgEgDAAgIQAAgFAfhCIAIgSQAEgLAIAAQAGAAAEACQAIADAAAKIgGARQgFAOgPAkIgLAXQgHALgKAAQgHgBgEgEgAgWCCQgVAAAAgVIAAhEQAAgUAVAAIAuAAIAAglIhBAAQgGAAgEgEQgDgDAAgJQAAgHADgDQAEgEAGAAIBBAAIAAgqQgeAEgbAAQgOgBABgQQABgKALgCQBIgCA+gRIAIAAQAGAAAEAEQAEAEAAAHQAAAJgLAFQgOAFgrAGIAAAuIBEAAQAIAAADAEQADACAAAIQAAAHgCAEQgEAFgIAAIhEAAIAAAlIAwAAQAVAAABAUIAABEQgBAVgVAAgAgLA4IAAAnQAAAHAGAAIBaAAQAGAAAAgHIAAgnQAAgIgGAAIhaAAQgGAAAAAIgAhXAAQgXgUgQgKQgJgGAAgGQAAgJAEgDQADgEAJAAQAFAAAGADQAeATAIAKQAHAEABAIQAAAHgEAEQgDAEgJABQgDAAgGgCgAhKhGQgVgSgUgOQgHgFgCgHQAAgIAFgEQADgEAIAAQAFAAAGAEQAfAVAIAKQAGAEABAHQAAAHgDAEQgEAGgIABQgEAAgEgEg");
	this.shape_16.setTransform(-105.5611,213.4019,0.7124,0.7124);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHgAgOgNQgGAGAAAHQAAAJAGAGQAHAGAHAAQAIAAAHgGQAGgGAAgJQAAgHgGgGQgHgGgIAAQgIAAgGAGg");
	this.shape_17.setTransform(-136.3627,205.2587,0.7129,0.7129);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAHAOIgDgGIgDgEIgBgBIgBgBIgHAAIAAAMIgDAAIAAgbIALAAIAGABIADACIABAFQAAADgCACQgCAAgEABIACACIADAEIAGAHgAgIgBIAIAAIADAAIADgCIAAgCQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgIAAg");
	this.shape_18.setTransform(-136.2191,205.2718,0.7128,0.7128);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AArCSIAAgnIhGAAIAAgZIBGAAIAAgRIg8AAQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAgBAAgBIAAhuQAAgBAAgBQABAAAAgBQABAAAAAAQABgBABAAIA8AAIAAgUIgtAAIAAgZIAtAAIAAgQIgzAAQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABAAABIAAAkIgZAAIAAg7QAAgFAFAAICdAAIAXAMQgCAYgKAdIgYgHQAHgWAAgIQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAgBAAIgwAAIAAAQIAsAAIAAAZIgsAAIAAAUIBAAAQABAAABABQAAAAABAAQAAABABAAQAAABAAABIAABuQAAABAAABQgBABAAAAQgBABAAAAQgBAAgBAAIhAAAIAAARIBMAAIAAAZIhMAAIAAAngABFApIApAAIABgCIAAgWIgqAAgAAEAnIABACIAmAAIAAgYIgnAAgABFgHIAqAAIAAgUIgBgBIgpAAgAAEgbIAAAUIAnAAIAAgVIgmAAgAiVCJQAdgvgBg4IAAgfIgYAAIAAgZIAmAAIAAh7IAaAAIAAB7IArAAIAAAZIgVAAIAABgQAAAFABACIAUgMIAMAWQgiAVgNAAQgGAAgDgGQgCgFAAgFIAAh2IgMAAIAAAfQgBASgDATQgDAVgHAWQgHAVgGAJgAiUh2IAZgDQAIA3ACAeIgZABQAAgngKgsgAhKgqQAHgfADgyIAYADQgDAugHAlg");
	this.shape_19.setTransform(-150.5499,213.4038,0.7129,0.7129);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABWCUIAAgOIipAAIAAAOIgbAAIAAh+QgBgEAFAAIDVAAQAGAAAAAGIAAB8gAhTAxIAAA5ICpAAIAAg5QAAgEgEAAIihAAQgFAAABAEgAANhEIAABKIgaAAIAAhGQg8A3g5ATIgQgYQBEgZA2gyIh0AAIAAgbIB/AAIAAgfIAaAAIAAAfIB/AAIAAAbIhwAAQAwAwBHAdIgTAWQhDgggwgug");
	this.shape_20.setTransform(-177.8191,213.386,0.7129,0.7129);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AodDzIAAnmIOOAAQBHABAzAyQAzAzAABIIAACMQAABIgzAyQgzAyhHAAg");
	this.shape_21.setTransform(-87.6085,213.2496,0.7131,0.7131);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#153188").s().p("AxiEBIAAoBMAgLAAAQBNAAA2A3QA3A2AABNIAACNQAABNg3A2Qg2A3hNAAgAAaDzIOPAAQBHAAAzgyQAzgzAAhHIAAiNQAAhHgzgzQgzgzhHAAIuPAAg");
	this.shape_22.setTransform(-128.1102,213.2674,0.7131,0.7131);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(300));

	// an_sc1_title
	this.instance = new lib.an_sc1title("synched",0,false);
	this.instance.setTransform(113.3,224.05,0.5125,0.5125,0,0,0,327.1,80.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));

	// an_subtt
	this.instance_1 = new lib.an_subtt("synched",0,false);
	this.instance_1.setTransform(368.25,207.45,0.4417,0.4417,0,0,0,236.8,96.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).wait(279));

	// an_tt_limit
	this.instance_2 = new lib.an_ttlimit("synched",0,false);
	this.instance_2.setTransform(111.9,268.7,0.7596,0.7596,0,0,0,186.6,16.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36).to({_off:false},0).wait(264));

	// an_mark2
	this.instance_3 = new lib.an_mark2("synched",0,false);
	this.instance_3.setTransform(476.2,245.1,0.5137,0.5137,0,0,0,68.5,69.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).wait(293));

	// an_mark1
	this.instance_4 = new lib.an_mark1("synched",0,false);
	this.instance_4.setTransform(518.55,245.1,0.5137,0.5137,0,0,0,68.5,69.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(291));

	// an_pd
	this.instance_5 = new lib.an_pd("synched",0,false);
	this.instance_5.setTransform(413.25,228.1,0.2726,0.2726,0,0,0,248,207.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({_off:false},0).wait(293));

	// sb_doctor_name
	this.instance_6 = new lib.sb_doctorname("synched",0);
	this.instance_6.setTransform(703.25,244.55,0.7231,0.7231,0,0,0,23.9,68.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(300));

	// sb_doctor
	this.instance_7 = new lib.sb_doctor("synched",0);
	this.instance_7.setTransform(618.7,255.35,0.2528,0.2528,0,0,0,240,455.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(300));

	// sb_bg_light_copy
	this.instance_8 = new lib.sb_light("synched",0);
	this.instance_8.setTransform(929.75,154.1,3.9769,3.495,0,0,0,35.1,35.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5).to({_off:false},0).to({regY:35,scaleX:5.2508,scaleY:4.6145,x:-397.35,y:-31.1,alpha:1},94).to({regY:35.1,scaleX:4.9966,scaleY:4.3911,x:948.65,y:4.95,alpha:0},102).to({regY:35,scaleX:6.4415,scaleY:5.6609,x:-94.55,y:-199.5,alpha:1},92).to({_off:true},1).wait(6));

	// sb_bg_light
	this.instance_9 = new lib.sb_light("synched",0);
	this.instance_9.setTransform(570.45,499.55,5.7949,5.0927,0,0,0,35.1,35.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5).to({_off:false},0).to({regY:35.2,scaleX:4.8089,scaleY:4.7312,x:-397.2,y:226.5,alpha:1},94).to({regY:35.1,scaleX:5.3007,scaleY:4.6583,x:752.3,y:479.95,alpha:0},102).to({regX:35,regY:35.2,scaleX:5.6786,scaleY:5.5868,x:-412.85,y:293.25,alpha:1},92).to({_off:true},1).wait(6));

	// an_sc1_bg
	this.instance_10 = new lib.an_sc1bg("synched",0,false);
	this.instance_10.setTransform(242.75,383.25,0.6424,0.6424,0,0,0,817.2,509.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(300));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-611.5,-397.7,1735.1,1075.4);


// stage content:
(lib._980x120 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(509.45,-1.35,1.012,1.012,0,0,0,298.4,172.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(450));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EhOHgK7MCcPAAAIAAV3MicPAAAg");
	this.shape.setTransform(490,60);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhOHAK8IAA13MCcPAAAIAAV3g");
	this.shape_1.setTransform(490,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(450));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(78.6,-518.5,1266,1028.3);
// library properties:
lib.properties = {
	id: '448AC631FF9344DB86C4757AD3F15EAF',
	width: 980,
	height: 120,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/doctor.png", id:"doctor"},
		{src:"images/mark1.png", id:"mark1"},
		{src:"images/mark2.png", id:"mark2"},
		{src:"images/mark3.png", id:"mark3"},
		{src:"images/pd.png", id:"pd"}
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
an.compositions['448AC631FF9344DB86C4757AD3F15EAF'] = {
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