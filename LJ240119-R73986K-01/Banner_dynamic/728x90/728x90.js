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
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.car1 = function() {
	this.initialize(img.car1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,478,230);


(lib.sc1deco1 = function() {
	this.initialize(img.sc1deco1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,463,231);


(lib.sc1deco2 = function() {
	this.initialize(img.sc1deco2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,142);


(lib.sc1deco3 = function() {
	this.initialize(img.sc1deco3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,491,264);


(lib.sc1deco4 = function() {
	this.initialize(img.sc1deco4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,222);


(lib.sc2bg = function() {
	this.initialize(img.sc2bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,783,293);


(lib.sc3bg = function() {
	this.initialize(img.sc3bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,908,461);


(lib.sc4bg = function() {
	this.initialize(img.sc4bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,877,305);// helper functions:

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


(lib.sb_sc5btnbg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["rgba(244,221,155,0)","#DFB781","#BC9362"],[0.012,0.243,1],98.7,0,-98.6,0).s().p("AvaCxIB6lhIc6AAIABFhg");
	this.shape.setTransform(98.675,17.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(74));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,197.4,35.4);


(lib.mo_sc5btnt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhGBRIAMhCQgNAKgIAGQgDgIgDgIQAegQAZglIgoAAIADgQIAvAAQAEgHAKgTIAPAEIgLAWIBYAAIgCAQIhfAAQgOAVgOAOIgPBUgAgqBNIACgPIAsAAIAIguIglAAIADgPIAlAAIAGgfIAQAAIgGAfIAmAAIgCAPIgmAAIgIAuIAtAAIgEAPg");
	this.shape.setTransform(117.9,8.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBBQAXgGAMgMQAJgJAEgTIgNAAIAQhgIBUAAIgRBgIgXAAIgHAlIAAAFQAAAAABAAQAAAAAAABQABAAAAAAQABAAABAAIAKAAQADAAACgEIAEgRQAEAEAJACQgEARgFAGQgEAGgJAAIgQAAQgKAAgDgEQgDgEACgLIAHgmIgPAAQgGAYgLAMQgNAQgbAHQgCgIgFgFgAAEAFIA1AAIADgNIg1AAgAAJgVIA1AAIACgPIg0AAgAAOgxIA1AAIACgPIg0AAgAhXAjIAcgHIAHgmIgWAAIADgQIAVAAIAGgiIgXAAIADgQIA9AAIgDAQIgWAAIgGAiIAUAAIgCAQIgUAAIgHAiIAYgHIAAAPIhDATg");
	this.shape_1.setTransform(99.425,8.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhdBIQASgYAIgwIAOABIgFAXQADAPAFAIIAKg5IgiAAIADgOIAfAAIADgVIgaAAIADgOIAaAAIADgUIAQAAIgEAUIAWAAIgCAOIgXAAIgDAVIAaAAIgCAOIgYAAIgEAVIAXAAIgDAPIgXAAIgFAfQAMAFAaAAIBLAAQgHAJgCAHIhEAAQgdAAgNgGQgRgGgFgSQgJAWgJAMQgEgHgGgDgAgJAsQAxgLAYgbIANAGQgaAfg2ANQgCgHgEgFgAABAMQAjgLAUgSIAMAGQgWAVglANQgDgFgFgGgAAEgQQAcgKAOgOIAMAFQgTASgbALQgEgHgEgDgAAtg6QgVAUgWAJQgCgIgEgFQAOgFAOgLQAPgKAJgNIAKAHIgDAFQAOAUAYAJIgMAMQgTgIgRgWg");
	this.shape_2.setTransform(81.1,8.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhWBCQANgOAIgEQAKgPAIgTIgXAAQAIgNANgZIgSAAIADgPIAmAAIgUAnIAKAAIACAAIAHABQgKAcgNASIAMAJQAOAIAhAAQAjAAAlgEIgIARQgbACgoAAQgiAAgPgJIgJgHQgFgEgCAAQgFAAgOAXgAAnAtIAQAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAAAIAHgnIgfAAIgEASIANgBIgDgKIALgCQAGAQgBAMIgLADIAAgHIg0AEIABgNIAXgBIADgTIgbAAIgJAyIgPAAIAJgyIgEAAIACgLIAFAAIABgGIAOAAIgBAGIAbAAIACgKIgiAAIAKg7IBXAAIgLA7IgmAAIgBAKIAtAAIgJAyQgBAJgHADQgFACgTAAIgCgMgAAogdIAXAAIACgMIgWAAgAAFgdIAVAAIACgMIgVAAgAAtg0IAWAAIADgMIgXAAgAAJg0IAVAAIACgMIgVAAgAgxhMIAPgFIAGAdIgQAGg");
	this.shape_3.setTransform(62.5,8.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhIBRIAMhDIgVARQgBgLgCgGQAcgQAVgiIglAAIACgPIAbAAQgEgLgGgKIAOgIQAGAJAFANIgMAHIAQAAIADAAIAIAGQgLATgPATIASAXIgNANIgLgTIgMBHgAgmBOIACgNIAfAAIgEgPIANgEIAEATIASAAIALgTIAPAEIgMAPIAdAAIgCANgAgSAuIAGgiIBOAAIgGAigAgCAjIAxAAIADgNIgyAAgAgVAEIACgLIBjAAIgCALgAgMgPIAJgzIAXAAIADgOIANAAIgCAOIAMAAIADgOIANAAIgCAOIAaAAIgKAzgAAzgZIANAAIACgLIgOAAgAAagZIAOAAIACgLIgOAAgAACgZIAOAAIABgLIgNAAgAA2guIAOAAIACgKIgOAAgAAeguIANAAIACgKIgNAAgAAGguIANAAIACgKIgOAAg");
	this.shape_4.setTransform(45.15,8.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGBSIAShvIAlAAQgCgGgKgMIAKgHIgQAAQgKARgNALIgJgMQAQgOANgdIAPAFIgEAIIAzAAIgCAOIgkAAQAHAIAEAHIgOAKIAbAAIgNBJQgBALgJAEQgGACgWAAQAAgHgCgIIAVABQADgBABgDIAKg6IghAAIgRBhgAhZBBQAIgFACgJIAOhQIgCACQgEgKgEgEQAUgQAOgYIAPAFIgFAIIAoAAIgCAOIgfAAQAIAKADAGIgMAJIAaAAIgKA7Ig0AAIgFAcIAegHIgGgMIAOgGQAPAcAEAJIgPAIIgGgOQgyAMgEACQgBgHgEgGgAg6ASIAkAAIACgLIglAAgAg2gEIAkAAIACgNIgkAAgAhAgdIAlAAQgEgIgHgJIALgIIgOAAQgLAPgMAKg");
	this.shape_5.setTransform(27.175,8.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKBSIAHgnIhRAAIADgQIAdAAIAIguIAzAAIAFgZIgoAAQgSAXgOALQgHgHgFgEQAdgVAUgnIAQAFIgKAQIBmAAIgDAQIg1AAIgFAZIAyAAIgDAPIgxAAIgGAfIA+AAIgDAQIg+AAIgHAngAgkAbIAkAAIAFgfIgjAAg");
	this.shape_6.setTransform(8.475,8.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc5btnt, new cjs.Rectangle(0,0,126.5,16.6), null);


(lib.mo_sc5arr = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgiA0IAug0IgcgyIAQgMIAjAzIgEAXIg1Azg");
	this.shape.setTransform(136.175,8.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc5arr, new cjs.Rectangle(132.7,2.4,7,12.5), null);


(lib.free = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FBE64D").s().p("AgcBxQAaACANgCQAHAAAAgFIAIgrIhoAAQAcAaAMAPIgYARQgLgRgbgcIAUgNIhCAAIAEgWICsAAIADgSIAcAAIgDASIA4AAIgEAWIg4AAIgIAsQgCALgEAFQgEAFgIACQgMADgoAAQAAgKgEgMgAhwATIADgUIBaAAIADgWIhoAAIAFgXIBoAAIACgRIASAAIgJgHQAcgXAUgpIAXAGIgIAQIBUAAIgEAXIg7AAQAMAPAHALIgWAQQgEgLgRgVIAOgKIgaAAQgMASgSARIgBgBIgBAJIBoAAIgEAXIhoAAIgEAWIBYAAIgEAUgAhBhQIAMgJIgYAAQgPASgTAQIgPgTQAhgYAVgkIAXAHIgKAPIBGAAIgEAXIgvAAIATAXIgUAQQgIgOgQgQg");
	this.shape.setTransform(165.075,13.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBE64D").s().p("AiPBwQAmgUAWgdQARgXAIgiIhAAAIAFgZIBAAAIAKg7Ig2ANQgBgLgFgLQBVgTAvgaIAQAXQgYALgjAMIgMBDIBRAAIAUhvIAbAAIgTBvIA9AAIgFAZIg9AAIgWB+IgcAAIAXh+IhSAAQgJApgTAcQgZAjgsAXQgEgLgLgKg");
	this.shape_1.setTransform(133.525,13.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBE64D").s().p("AiPByQA2gJAggPIgtAAIARhZIgaAFQgBgIgIgMQAygIAXgQIgwAAQAGgNALgkIA5AAIACgPIhFAAIADgRIBFAAIADgOIAXAAIgDAOIApAAIACgOIAaAAIgDAOIBAAAIgJAxIg/AAIgDAPIBRAAIgCAIQgGAYgGAGQgHAFgJABIgHAAIgSBlIgqAAQAjAMAiAPIgXAQQgggQgugQIAMgLIhMAAIAUAKQgqAVg3ANQgEgJgMgLgAhIBKICHAAIADgPIiHAAgAhCArICHAAIACgPIiHAAgAg9AMICIAAIACgOIiHAAgABXgTIgCgJIARABQAFAAACgCQACgCACgHIg2AAIgDATIAfAAgAgjgTIBBAAIADgTIguAAQgKALgMAIgAgEg3IAoAAIADgPIgnAAQgBAIgDAHgAhBg3IAiAAQAEgFACgKIgiAAgABEhXIAmAAIACgPIgmAAgAAChXIAoAAIACgPIgnAAg");
	this.shape_2.setTransform(103.85,13.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBE64D").s().p("AiGBvQAugMAegUQAagSAQgcIhNAAIANhCIgPALQgJgPgIgFQA7gjAog3IAcAFIgNAQIBCAAIAFgBIARAMQgNARgXAYIBSAAIgRBcIhFAAIgLA+QgBAHACACQACACAJAAIAoAAQAIAAADgHQAEgHAFgZQAKAHAOADQgJAfgIAMQgKAKgUAAIgsAAQgXAAgIgIQgGgGAEgVIAKg+IgJAAQgRAlgdAXQgjAag2AOQgEgMgHgKgAAXAKIBIAAIAIgtIhCAAQgHAbgHASgAg9AKIA4AAIAOgtIg+AAgAgvg7IBEAAQAKgJASgUIhCAAQgMAMgSARg");
	this.shape_3.setTransform(73.1,13.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBE64D").s().p("Ag1BwQAggKASgTQAMgQAJgcIgYAAIAciiIB9AAIgcCiIghAAIgKA5QgBAFABABQAAABAAAAQABAAAAAAQABAAAAAAQABAAABAAIAQAAQAEABACgEQACgEADgOQAEAFAQAEQgGAWgHAHQgHAHgMAAIgXAAQgQAAgEgGQgFgHAEgSIAKg5IgRAAQgLAjgRAVQgUAZglANQgEgNgIgIgAAWAOIBLAAIAEgWIhKAAgAAfgeIBKAAIAEgYIhKAAgAAnhMIBKAAIAEgXIhKAAgAiSBuQAugjAThIIgsAAIAFgYIAtAAIAIgrIgoAAIAEgYIAoAAIAHgsIAaAAIgIAsIAmAAIgDAYIgnAAIgIArIAtAAIgFAYIguAAIgDAMQAHAIAOAWIARAbIgWATQgHgRgTgfQgWA3gnAeQgGgKgKgIg");
	this.shape_4.setTransform(43.875,13.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBE64D").s().p("AgjCGIAHgpIhzAAIAEgZIB0AAIADgUIhVAAIAUhxIBVAAIADgSIhqAAIAEgZIBqAAIAFgZIAcAAIgFAZIBtAAIgEAZIhtAAIgDASIBXAAIgUBxIhYAAIgDAUIB2AAIgEAZIh2AAIgHApgAAMAaIA8AAIAEgZIg9AAgAhLAaIA7AAIAEgZIg6AAgAAUgSIA8AAIAEgZIg9AAgAhDgSIA7AAIAEgZIg7AAg");
	this.shape_5.setTransform(14.4,13.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.free, new cjs.Rectangle(0,0,179.8,27.1), null);


(lib.mo_sc4t = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#87622D").ss(2,1,1).p("AD3BRIjRARIgHBHQgDAhgLASQgKASgWAKQglAShZAGQgCgQgHgXQgIgWgHgQQAmgBA6gEQASgCABgPIAHhFIjSAQIAHhOIDTgQIAEgyIisAOIAIhNICsgNIAFg1QhLAMhWAKQAAgPgEgVQgEgUgFgNQBogMBfgRQBogUBEgWIAyA+QhOAZhXARIgGA8ICwgNIgHBMIiwAOIgFAyIDRgQg");
	this.shape.setTransform(203.9,28.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#87622D").ss(2,1,1).p("AEIjYIgHBMIkfAWQgjA/glAwIgbEJIhPAGIARiyQgUASgXAQQgKgogTgjQBQg1A/hnIhtAJIAHhNICRgLQAPgiANgnIBPANIgWA1gABqCaIB4gKIgIBKIlCAZIAHhKIB8gJIAKhtIhnAIIAHhIIBngIIAJhTIBPgGIgJBTIBkgIIgHBJIhjAHg");
	this.shape_1.setTransform(144.9,33.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#87622D").s().p("Aj+DLQAhgjAigXQAjgWAXgCIABAAQBAgrBCg8QBAg3Axg5Ik8AXIAIhNIDJgPQgMgagYgnIBKgsQAtBCAJARIghAVIBzgJIAQgFIA4AjQg5BRhVBRQhRBQhXA/QAWAJAhACQAZABAsgDQAogEA1gIQA5gIAlgJQgZA4gFAeQhTAMhVAHQgzAEgggFQgigEgbgOIgegTQgOgKgHABQgLAAgUAaQgNAPgYAlg");
	this.shape_2.setTransform(84.325,37.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#87622D").s().p("AkADBIAggBQAIgBABgIIAJhhIgpAQIgJhLIA6gTIAIhVIgwADIAHhIIAwgEIAKhkIBJgGIgKBkIAqgDIgHBJIgqADIgGBBIAkgNIAFBEIgxATIgLB5QgDAagGAOQgGAQgOAJQgNAKgSAFQgQAEgaACQAAgigMgkgAh3DSQAwgjAjgvIgxADIAGg/IB7gKIADgcIh2AKIANiFICTgMIgNCBIAQgBIANiBICYgMIgNCFIh7AKIgCAcICBgKIgGA/IhCAFQAxArAUAeIg5AyQgSghg4gzIArglIgtADIgMCBIhLAFIANiAIg/AFIA3AQQgVAdgbAgQgcAfgZAVQgZgdgXgRgAgGgtIgDAcIAdgCIADgdgACeg6IgCAcIAfgCIADgdgAABj1IDdgRIgNCEIjbARgAA/jEIgDAYIBTgHIADgXg");
	this.shape_3.setTransform(25.725,42.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc4t, new cjs.Rectangle(0,0,230.4,69.1), null);


(lib.mo_sc4key = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BfIAfgCQAFAAAAgEIABgMIhcAIIABgQIBcgIIACgMIhOAGIABgPIBOgHIABgLIhEAGQAAgIgCgGQBagHA2gMIALAMQgcAGglAGIgBANIBQgHIgBAQIhQAGIgBAMIBdgHIgBAQIhdAIIgCALQgBAPgKAFQgJADgeADQAAgGgGgMgAgygIIgXACIgBAGIgPABIAEghIgLALQgGgIgGgDQASgPAKgXIARABIgEAJIBEgGIgBAMQAZgXANgjIASADQgCAHgGAMIBAgFIgCAQIgOABQgJAXgTARQATALAVACQgIAJgFAKQgagFgSgNQgRANgdAKQgDgIgGgHQAWgHAVgNQgIgJgGgLIgNAOQgHgHgFgEQgGArgGAGQgFAFgJABIgWACQAAgGgCgGgAgjgKIACAAQAEAAACgDQAEgEAFgjIg5AFIgFAHIAwgDgAhHgdIgBAMIAXgCIABgMgAAmhJIAAAAQAFANALAMQAOgNAIgPgAgehpIASgCIgBALIAdgCIgCAOIgdADIgBAKIgRABgAhBhNIgeACIABgOIAegDIABgLIASgBIgDAhIgRABg");
	this.shape.setTransform(222.2,11.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhKBaQARABATgCQAHAAAEgDQAIgGAJgzIhWAHQALghAIgpIBKgGIADghIhRAGIACgUIBmgJIgHBLIhLAHIgJAgIBTgHIgCAJQgHApgFARQgEATgHAHQgHAHgOADQgLACgaABQAAgNgGgKgABLhuIAWgCIgUDXIgWACg");
	this.shape_1.setTransform(197.675,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUBgIAEgEIheARIgBgSIAxgIIACgTIgqAEIABgQIArgEIABgMIgqADIAHhHIAqgDIABgMIgxAEIACgRIAxgDIABgOIgrAGQABgGgEgKQA+gIAngMIAJAQQgZAHgTAEIgBAPIAugEIgBAOIAZgDIAEgyIAWgCIgGAzIAxgEIgBAKQgKBMgEAdQgGAfgGAHQgGAJgLADQgMADgSAAQAAgMgEgJIAZgBQAFAAAEgEQAIgLANhtIgcADQgIA0gNAgQgRAogdAZQgHgLgHgEgAAEA8IgrADIgCAQIAsgIQAbgjAKhIIgZABIACgSIguAEIgBANIArgEIgHBHIgrAEIgBALIArgDgAhPAJIgBAPIAZgDIABgOgAgiAGIgCAOIAagCIABgPgAhMgSIgBAOIAYgCIABgOgAgfgWIgCAPIAZgCIABgPg");
	this.shape_2.setTransform(173.4,15.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDBgIgTABIABgKIgnADIgBAPIgUACIAGg7QgJAjgQAZQgHgHgIgEQAYgnAIhPIAGg+QA3gLAagKIAPAOQgdAMgwAJIgCAOIBIgGIgGA3QAXghAPhGIAWABIgMAqIA+gFIgCAVIgLABQgMA2gXAnQAOAaAVAMQgMALgGALQgTgOgMgXQgVAcgaAPQgDgHgHgHgAgCBaQAagPAUgeQgJgagDgbQgIANgHAIQgGgIgIgGIAAAAIhFAFIgDATIBJgGgAg4AoIgCAhIAngEIAEgggAAwgtIgCADQADAhAJAdQAQgbAJgpgAg9glIgDAXIA1gEIACgYg");
	this.shape_3.setTransform(149.4,17.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhsBgQAigNAQgXQAMgRAHggIg6AGIABgVIBcgIIAEgsIgsAEQgMAWgLAPQgLgIgIgBQAZgeAPgxIAWACIgKAbIAjgDIADgjIAXgCIgEAjIBLgGIgBAWIhMAFIgDAsIBbgHIgBAVIg/AEIgHBBQAAAGACABQACACAFgBIAbgCQAFAAADgHQACgGADgXQAGAFANADQgFAcgGAJQgHALgOAAIgfADQgSACgFgHQgFgFACgRIAFhBIgmAEQgIAmgPAWQgUAcgmAQQgDgJgIgJg");
	this.shape_4.setTransform(124.95,19.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhwBcIAZgCQAFgBAAgDIAIhXIgkACIABgTIA4gFQgSgOgZgMIAOgPIAVALQALgMALgOIg7AFIABgUIBJgGIAFgBIAMAIQgRAZgWAYQAJAGAGAGIgGAIIANgBIAEgBIANACQgQApgIANIgPgCQAIgRAFgQIgUACIgIBXQgCARgJAFQgIAEgbACQgBgKgEgKgAgqBdQAigOARgSIATAKQgWATgiASQgGgJgIgGgAAsBGIARgNQAZAOANANIgSAOQgLgNgagPgAAAg/IAigEIAFgUIguAEIABgSIB2gLIgCAUIgvADIgIAUIAugDIgLB7IhmAJgAALAVIgCAUIA9gFIACgUgAAOgOIgCAUIA9gFIACgTgAASgxIgCAUIA9gFIACgUg");
	this.shape_5.setTransform(101.65,21.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiAlIgQgYIgNgWIgKgVQgFgJgEgLIgOgjIAzgEQADAJAMAeQAOAfAIAMQAPgTAmhHIA0gEQgLAWgYAlQgYAngcAmIgGA/IgsAEg");
	this.shape_6.setTransform(73.175,22.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhAhaICTgMIgDAnIhmAIIgEAlIBdgHIgEAkIhcAIIgEApIBogIIgDAnIiWAMg");
	this.shape_7.setTransform(53.25,24.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhQhZIAugEIgSDCIguAEgAgoAHQAeguAwg8IA9gEQg/BHgXAgQAKAIAOASQALAMALAPIAbAkIg8AGQgdgtglgrg");
	this.shape_8.setTransform(33.625,26);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag2gQIBxgKIgEArIhxAJg");
	this.shape_9.setTransform(14.975,28.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMheIAsgEIgSDBIgtAEg");
	this.shape_10.setTransform(3.2,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc4key, new cjs.Rectangle(0,0,233.4,38.4), null);


(lib.mo_sc3t2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#87622D").ss(2,1,1).p("AAMClIC+gMIgHBHInHAeIAIhHIC3gMIAFg0IiCAIIAHhEICDgJIAGgyIhoAGIAFgvQgoAbgeAOQgQgjgYgaQBYglBUhIIg4AEIAIhKIDCgNQAcAxA1AoQA3AqBCAUQgOAPgRAWQgTAXgJARQgggOgegTIgFAuIhoAHIgGAyICEgJIgHBEIiFAJgAAJixQg1A7hIA1IDhgOQg3gpgsg5g");
	this.shape.setTransform(86.275,26.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#87622D").ss(2,1,1).p("ACdD2QgwgghVgjQgrAhg9AWQg5AWhQAPQgDgPgNgYQgLgXgLgQQB7gQBDgiQg6gVhAgRQAVgbAagoIhiAHIAJhKICHgJQAXgoARgoIBYALQgMAagTAkIBJgEIAKgwIBLAAIAEgsIkqAUIgGA3IhPAGIAOiBIC5gNIgKgqIBagaQAFAOAOAwICwgMIgOCBIg/AEQgFAVgEAKIBMgFIgIBKIhfAGQgVA2gfAnQBdAmAlAWgAgpAgIgTAeQAsANAcAKQAXgbAPggg");
	this.shape_1.setTransform(26.625,29.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc3t2, new cjs.Rectangle(0,0,113.4,57.7), null);


(lib.mo_sc3t1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#87622D").s().p("AghDMQgyALi4AkIgChQIBfgQIAGgzIhMAFIAIhHIBMgFIAEgqIBPgFIgEAqIBIgFIgCgDQAPgUAOgYIgFgaIg/AjIgFgQQhdAOgeAFQgeAGgNAGQgIglgKggQAPgGAOgUQANgSAUgkIg0AEIAIhIID6gRIgIBIIhyAIQgRAdgbAmIA6gHIgMgeIA9gfIAWAvQAMAdAGAQQgHglgEguIA7gQQABAOAEAWQAUg5AShNIBHAHQgOA0gKAfIA8gEIANgDIAxAMQglCmhLBuQAjArAvAaQgOAMgRATQgSAUgLAPQgrgbghgrQgwAzg4AiQgKgcgXgdgAgQCwQAtgeAigmQgKgTgJgaIgYAhQgDgNgIgVQgJgWgIgOIgHBEIhKAFIgFAqIBRgPgAB7hfQgPAogTAnQALAfAOAbQAohAAXhNg");
	this.shape.setTransform(86.325,26.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#87622D").s().p("AjSBxQgTAogSAbQgFgigTgtQArg1AkhnIADgcIguADIAIhFIAugDIAKhhIBEgEIgLBgIAlgCIgHBFIglADIgDAYQAYAmARAgIALhrIBBgFQALgYAYg5IheAHIAHhEIFIgWIgIBEIijALIgLAbIAzgDIgOBzIAngfIAWAcIANgrIg7AEIAGg5IBOgFIALgDIAlAJQgTBcgeA/QAVAlAJAdIg2ArQgEgOgKgbQgcAnggAYQgKgQgOgPQgEARgHAJQgPAWgZAGQgRAFgpACQACgOgDgRQgDgSgGgLIAlgBQAJgBAHgJQAFgIAHgtQAFgmANhuIgdACIgVDCIgtADIACgRIgUABIgEAfIgqADIAIhNIgkArQgCgOgKgeIgZDnIhDAFgABrBHQAZgYAVgiQgSgcgNgTQgKBSgFAXgAgkguIgHBHIAUgCIAHhHgAiFC3IF2gZIgIBGIl1AZg");
	this.shape_1.setTransform(27.15,30.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc3t1, new cjs.Rectangle(0,0,113.3,57.1), null);


(lib.mo_sc3pm = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhPhZIBCgFQATBZACAQQAHgUAjhbIBCgFQAHBNABByIgtADQABhWgEg7QgeBFgXA/IgqADQgJgzgShKQgRA/gPBWIgtADQAWh0AWhPg");
	this.shape.setTransform(273.3,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhJhcIBYgHQBTgHgGBGQgCAUgJAOQgJAPgNAIQgOAJgOAEQgOAFgPABIgrAEIgFA1IgtAEgAAGg8IglADIgGA+IAmgEQATgBAMgHQALgHABgTQACgRgKgGQgHgEgPAAIgIAAg");
	this.shape_1.setTransform(250.5451,12.7222);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOhhIA/gFQAhBWAXBlIgyAEIgJgiIhZAIIgOAkIgvAEQAqhtAwhbgAgaAWIA/gFQgLgogOgqQgOAfgYA4g");
	this.shape_2.setTransform(228.45,14.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhBhaICVgMIgFAnIhlAIIgEAlIBdgHIgEAkIhcAIIgEApIBogIIgEAnIiWAMg");
	this.shape_3.setTransform(209.6,15.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAkhzIAugEIh2DrIguAEg");
	this.shape_4.setTransform(191.5,17.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiIhUIAugDQAEBPALBBQAjhPAOgsIAxgEQAGAqATBLQAYhCAThTIAugDQgfBugdBWIg/AFQgPhDgGgoQgKAdghBUIg+AEQgPhigJhcg");
	this.shape_5.setTransform(170.175,18.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhABSQgcgWAEgzQACgYAMgVQALgVARgMQARgOAUgHQAVgIAVgCQAggCAYAGIgDApQgbgHgaADQghACgSARQgTARgDAcQgDAeASAOQARANAdgCQAYgDAfgLIgEArQghAKgaACIgNAAQgoAAgYgTg");
	this.shape_6.setTransform(145.4193,20.8184);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhAhaICUgMIgEAnIhmAIIgFAxIBdgIIgEAmIhdAIIgGBEIguADg");
	this.shape_7.setTransform(126,22.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhKhcIBYgHQBVgHgHBGQgDAUgIAPQgJAOgOAIQgMAJgPAFQgPAEgPACIgqADIgFA2IguADgAAGg8IgmAEIgFA9IAmgDQAUgCAKgGQALgHACgUQACgRgKgGQgIgEgOAAIgIAAg");
	this.shape_8.setTransform(105.9018,24.4934);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhpgCIDVgSIgCAXIjVASg");
	this.shape_9.setTransform(83.225,25.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLgUIgPASQgGgLgEgEIgHBIIgrADIgBATIgUACIAOieIA/gFIgGBAQAggjATg0IAVAEQgIATgKASIAngEQgEgQgIgPIATgKQAKATAEAOIgQAIIAugEIgCAUIgoAEIgCAZIAjgCIgCAUIgjACIgDAaIAjgDIgCAUIgjACIgCAcIAsgDIgCAUIhiAIIgBARIgVACgAADAtIgDAcIAigDIADgcgAhLg7IgJBgIAXgCIAJhggAAHAAIgCAZIAigDIACgZgAALguIgCAaIAigDIACgag");
	this.shape_10.setTransform(59.125,27.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhtBoQAIgTAHgkIARABQgIAngJAUgAghBeIAOgVIgQAHQgCgQgFgWIAPgGQAHAWABAPQAPgbAIgpQAHggAGg2IgVACIACgVIBQgGIAEgBIAPAAQgGAdgLAmIANgBIAEgBIANAEQgNAygbAnQAOATAWAIQgJAHgIANQgUgKgOgSQgTAVgWAOQgFgKgIgGQAXgNATgYQgLgWgGgeQgOBEgbAmQgEgGgOgGgAAqgRQAFAdALAVQAPgXALgegAAmhSQgCAXgEAXIAbgCIANgvgAhEAxIAQgFQACAfgBAQIgRAFQACgSgCgdgAhkAUQAGgCAOgPIATgYQgXAFgIADQgBgJgEgLQAHgCAIgMQAGgGAJgRQAMgUAIgSIATAHQgRAigWAdIAVgEQAJgMAMgVIARALQgbArgfAhIAigHIgGgSIAQgHQAKAZADAUIgSAIIgCgMQg8APgGAEQgBgJgEgLg");
	this.shape_11.setTransform(34.375,29.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhWhfIDBgQIgRC0QgBASgMAGQgLAFgdACQgBgLgEgKQAOAAAQgCQAGgBAAgFIAQifIiXAMIgSC6IgVACgAgtgQIBegIIgHBMIhJAGIgCARIgVACgAgaAAIgDAoIA0gFIAEgmgAg0g4IB1gJIgCATIh1AJg");
	this.shape_12.setTransform(10.7,32.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc3pm, new cjs.Rectangle(0,0,285.7,43.5), null);


(lib.mo_sc339 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhvBhIAYgDQAEABAAgFIAGg5IgbAJIgEgVIAhgLIAEgvIgdACIACgUIAegDIAEgwIAWgBIgFAvIAZgCIgCAVIgZACIgEApIAZgHIABATIgcALIgFA/QgDAQgJAGQgLAFgXACQgBgMgEgIgAgvBcQAlgMAagUQgUgZgJgjIACAAIgJAAIACgUIAwgEIADghIg1AEIACgUIA1gFIAEgkIAVgCIgDAkIA3gEIgCAVIg3AEIgDAhIAigCIADgBIAPAEQgSAwgkAjQAVAQAiAHQgIAIgIAMQgjgHgXgUQgfAXglAOQgEgMgGgHgAAHgBQAJAaASAUQAZgYAPgcg");
	this.shape.setTransform(269.9,11.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhCAUQgQAjgTAXQgCgHgHgNQAYgbAVguIgjADIACgVIAlgDIADggIgeAHQAAgHgEgKQAzgNAagNIALASQgMAFgTAGIgEAlIAhgCIgCAUIghADIgBAEQAQAPANAUIgPASQgCgHgOgXIgJBpIgWACgAA8AxIhMATIgBgVIBPgVIANiMIAWgCIgNCJIAagHIABAVIgdAIIgGA+IgWABgAgCgSIANgNQAcAQAKAOIgQAPQgMgOgXgSgAALhRIAQgNQAXAOAMAQIgRAQQgKgPgYgSg");
	this.shape_1.setTransform(245.2,13.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhtBYIBYgGIADgkIhAAFIACgUIBAgEIADggIg2AEIACgUQgVAQgMAFQgEgIgIgIQAwgZAqgrIgmADIACgVIBLgGQAOAXAZATQAZAUAdAJQgKAKgHAMQgMgFgSgLIgBATIg3AFIgDAfIBBgFIgCAUIhBAFIgDAjIBagGIgCAUIjIAQgAhAgVICAgLQgjgWgYggQgbAhgqAgg");
	this.shape_2.setTransform(221.475,15.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhrBfQA+gNAfgWQgkgMgZgGIAXgiIgwAEIACgUIA9gFQANgWAIgUIAYADQgIASgKASIAygEIAFgXIAbAAIgGAVIApgDIgCAVIgvAEQgLAegSAVQAmANAcAQIgTAVQgXgPgrgRQgkAfhGAQQgCgJgJgMgAgYAGIgOAXQAYAHAUAHQAPgQAMgagAhXhOIBXgHIgIgWIAYgIIALAcIBRgHIgFAzIgXACIACgeIiUAMIgDAeIgWACg");
	this.shape_3.setTransform(196.6,17.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVBhIAFgEIhgASIgBgTIAzgIIACgSIgsADIABgQIAsgEIABgMIgrADIAHhIIArgDIABgNIgxAEIACgQIAxgEIABgOIgqAGQgCgKgDgGQBEgJAjgLIAJAQIgsALIgCAPIAvgEIgBAOIAZgCIAFg0IAVgBIgFAzIAxgEIgBALQgKBOgEAbQgFAfgHAIQgGAJgMADQgMADgRAAQAAgMgFgJQANAAAMgBQAHAAACgFQAFgFAEgbQAFgZAIg/IgdACQgHA1gOAhQgRAogdAZQgFgIgKgHgAADA8IgrAEIgBAQIAsgIQAbgkAKhJIgZACIABgSIguAEIgBAMIAsgDIgHBHIgsAEIgBAMIAsgDgAhPAJIgCAPIAYgCIACgPgAgiAGIgCAOIAZgCIACgPgAhNgSIgBAOIAZgCIABgOgAgggWIgBAPIAZgCIACgPg");
	this.shape_4.setTransform(172,19.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhQAbQgPARgMAKQgBgMgGgJQAlgeAZgwIgzAFIACgVIAngDQgEgOgKgRIASgKQAKAQAFAOIgQALIAUgCIADgBIAKAIQgNAfgSAZIAAABIAFAFQALgLAJgNIAMAMIgYAWIAPATIgNASIgRgcIgJBcIgVACgAg3BiQAfglAHhJIAGhAIAxgEIADgiIAVgBIgDAiIAlgEIADgBIAQADQgJAagLAZIgSgDQAFgMAFgQIgeADIgEAmIAegDIAEgBIANAEQgOAugeAiQAUARAbAGQgKAIgGAMQgdgJgTgRQgWAVgeAOQgCgIgHgKQAbgLAVgUQgRgYgJgjQgJBIgfAlQgGgIgJgFgAAUAAQAHAaAPATQAUgYALgZgAAGg4IgDAmIAdgDIAEgmg");
	this.shape_5.setTransform(147.95,21.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhoBZIBcgIIAGg1IhHAFIACgVIBHgGIAEgvIhTAGIADgWIBjgIQgPgQgTgOIASgPQAcATANAQIgMAJIBLgGIgCAWIhSAHIgEAvIBHgFIgCAVIhHAGIgFA1IBegIIgCAWIjTASg");
	this.shape_6.setTransform(122.75,23.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhxBfIAmgDIADgmIAVgCIgEAmIAmgDIAFgxIhRAHIABgTIC4gPIgCATIhSAGIgBAPIBAgEIgBARIhBAFIgBAQIBhgIIgCATIjWARgAhrAKQAXgKAWgVIgfADIADgrIAngEIABgKIgtAEIACgQIAtgFIABgNIATgBIgBANIArgDIgCAQIgqADIgBALIAlgDIgCASQAYgVAOgpIAUAEIgJAWIA/gGIgCASIgPACQgKAagRAUQARANAXAFQgJAJgGAJQgYgHgPgPQgUAQgbAMQgFgJgGgGQAcgKARgPQgKgPgEgLIgOAPQgHgJgGgFIgCAYIgcACQARAIAJAJIgKAMQgHgHgUgKIgCAbIgUACIADgXQgTASgUALQgFgHgHgGgAgkgXIgBAJIAIgKgAhKgxIgBAQIAVgCIABgPgAghg0IgBAPIAUgCIACgOgAArhFQAGAQAKANQALgNAIgSg");
	this.shape_7.setTransform(98.9,25.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhvBiQAngKAPgRQAMgOAFggIg9AFIACgVIDRgQIgCAUIhCAFIgFA2QgBAGACABQABACAHgBIAdgCQAGgBADgGQACgFACgUQAIAFAMACQgEAagHAJQgHAJgPABIgiADQgRABgGgFQgFgGABgQIAFg2IgkADQgHAngPASQgSAXgsAMQgCgIgIgKgAg2glIB9gLIgCAVIh9AKgAhWhPIBZgGQgDgLgEgLIAWgJQAHAPAEANIBTgGIgFA4IgXABIADgiIiZANIgDAiIgWACg");
	this.shape_8.setTransform(74.075,27.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag2BhQAlgOAWgTIARALQgaAWglAOQgFgIgIgGgAApBKIASgOQAeAPAOALIgTAPQgJgJgigSgAh1A0IAkgOIAJhgIgdACIACgUIBQgHIgCAVIgcACIgJBZIAhgNIACATIhXAmgAgIg9IAmgDIAFgVIg0AFIACgUICEgKIgBATIg4AEIgIAVIA1gEIgMB9IhxAJgAAEAZIgCAUIBHgFIACgVgAAGgKIgBATIBIgFIABgUgAAKgtIgCAUIBHgGIACgUg");
	this.shape_9.setTransform(50.3,29.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhJA+IAigCQAQgBARgIQAPgHAPgQQgOALgXABQgjADgSgSQgSgSADgeQADghAYgWQAYgVAkgDQAlgDAWATQAVASgEAsQgCAVgGAPQgGAQgNARQgNARgSAMQgSAMgZAIQgYAIgiABgAAFhAQgSABgLALQgKALgBAOQgBAPAIAIQAIAJASgCQAQgBALgJQALgKABgQQACgRgJgHQgHgHgNAAIgFAAg");
	this.shape_10.setTransform(27.9856,31.9545);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhSBiIADgnQAlAGAZgCQATgCANgIQAMgIACgPQABgQgNgEQgOgFghADIgDAAIACgRIAzgxIhXAHIAEgmICSgMIgDAfIgxAwQATACANAOQAOANgCAUQgGBDhWAIIgPABQgWAAgcgFg");
	this.shape_11.setTransform(8.325,33.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc339, new cjs.Rectangle(0,0,281.1,43.5), null);


(lib.picbg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#DFB781","#BC9362","#9B7146","#88613A","#77542F"],[0,0.314,0.675,0.863,1],303,0,-302.9,0).s().p("EgvVgRQMBeqgHrMAAAAqZMheqAHeg");
	this.shape.setTransform(302.95,159.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,605.9,319.2);


(lib.mo_sc2t2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#87622D").ss(2,1,1).p("ADsBHIgFAZQgSBhgUAVQgOAQgYAFQgPAEgnACQABgYgIgZIgfAQQgGgZgSgeIArgTIkMATIAuAXQgkA0geAkIg7giQAngnAcgsIAKAFIAWjYQgSAMgUAJQgEgNgKgQQgKgPgKgIQA7gZAYgqIg4ADIAGg6IBHgFQAFgeABgGIBGgFIgGAkIBwgJQgCAPgCAIQgIAvgIAZQgHAZgKALQgNAQgVAEQgQADgjACQACgggMgYQATABAJgBQAIAAAGgGQAFgGAFgYIgxAEQgYA/g1AkIF6gcIgFAyIiRAKIgBAOIB5gJIgEAnIh6AJIgBAOIB6gIIgEAnIh6AJIgCAPgAC5jJIg4AFIgDAhIA4gEgAD7hyIjKAPIAQiWIDJgOgAgKAWIhaAGIgBAOIBagGgAhrBgIBagGIACgOIhbAGgAAQCRQAQAlAEAjIg+AXQgBglgPgmgAByC3IAHgBQAJAAAGgGQAIgKAJglIg5AEQASAaAFAVgAhfgYIgBANIBbgGIABgOgAg/CcQAIAqAAAmIhEARQACgjgHgvg");
	this.shape.setTransform(86.825,27.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#87622D").ss(2,1,1).p("ABNCvIChgLIgGBDImNAdIAGhEICigLIAEgnIiBAJIAHhEICBgJIAFg8IghApQgGgLgbgdQgTAegaAXQgOgQgegTQgZCZgzBUQgKgJgTgNQgUgNgNgEQAhg3AUhWQAMg3AJhTIAPiVIDLgOQgJgUgEgJIBOgdQAOAYAJAcICpgMIgIBJImAAbIgHBMQgCAPgIA6QAygsAThYIBDADQgGAhgKAZQAaAaALAMIALhvIBKgFIgMB1QApgrARhIIBDAEQgIAhgPAhQAtAjAPAPIgvA2QgNgOghgfQgUAdgXAUQgLgLgSgPIgFAsICHgKIgHBDIiHAKg");
	this.shape_1.setTransform(28.45,30.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc2t2, new cjs.Rectangle(0,0,114.5,58.4), null);


(lib.mo_sc2t1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#87622D").s().p("AjuD1QgIgTgIgJQAPgJAKgNQANgRADgSIAQihIDKgOIgRCkIgXACQAiAvALAfIhAAhQgGgRgIgSIh4AhQgcAJgLAGQgCgNgJgRgAiKCeIgDAfIArgLIgJgNIAXgLgAiEBhIgCANIA3gEIACgMgAh+ApIgCANIA3gEIABgNgAA6DYQgFgSgGgNIA4gDQALAAAAgJIALhnIh4AJIAGhAIB4gJIAEgkIBLgFIgFAkIAygCIgHA/IgxADIgLBoQgCAZgIAOQgIAOgRAJQgRAIgWAEQgSAEgfACQgBgOgGgTgAAMBrIA8gZQAbArAEAgIhAAcQgDgigYgsgAi/iBIAwgEQgFgRgFgIIAwgQIhNAHQABgXgJggQBsgJBngOQBvgOBIgPIAlA0IhTAPIAzAMIggAoIBAgFIgMB1ImwAfgAh7hWIgCAUIAtgDIADgVgAgGhfIgCAVIAugEIACgUgABvhnIgCAUIAwgDIABgUgAhXiwQALAUACAMIgYAIIBYgGQgBgRgIgQIA4gOIh8ANgAAui/QAMATABATIgkAJIBUgGQATggAKgWQgwAIgqAFg");
	this.shape.setTransform(84.95,27.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#87622D").s().p("AgXDCIA7gEQAGgBACgBQADgCAAgFIADgYIiEAJQApAWAKAHIg2A5QgQgOhIgqIAZgaIhwAIIAGg+IE2gWIACgUIkDATIAWjSIB1gIIABgNIigALIAGg8IBwgHQgJgRgKgNIBDgeQAWAaAIAUIgVAJIB8gJQAVghAJgUIBRAOQgOAQgSASIBogHIgGA7IiiAMIgBANICBgJIgWDRIg/AFIgCATIBsgHIgHA+IhrAIIgDAbQgDAcgIAOQgIAQgTAIQgRAIgZAFQgQACgjADQgCghgPgjgAh+ArIEAgTIAGhAIg2AEQgoADgMgLQgMgJADggIAAgBIgYACQgNAug1AZICpgMIgEAoIixAMIAEglIgPAHQgGgQgTgWgAhyhMIgCAbQAngJAIgWgABXhbIAAABQgBAKACADQACACAIgBIAegCQAKgBADgEIABgLgAADiPIgBAOIAYgCIABgOg");
	this.shape_1.setTransform(26.125,31.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc2t1, new cjs.Rectangle(0,0,110.5,57.5), null);


(lib.mo_sc21254 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhoBeQALgIABgNIASivIAXgCIgHBIIA5gEIgDAWIg5AEIgJBZIA8gTQgBANABAIQhOAagIAFQgDgMgFgGgAAGBiQgGgHACgXIATiyIAXgBIgIBIIA+gEIgDAWIg9AEIgJBUQgBAKACADQACADAIgBIAggCQAHgBADgJQADgHAEgbQAJAHALACQgFAfgIALQgIANgRABIgkADIgHAAQgNAAgFgGg");
	this.shape.setTransform(243.575,11.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhiAJIDBgNIgJBSQgCAOgKAFQgIAEgaACQgCgKgEgHQARAAAIgBQAEAAABgFIAGhBIiVALIgIBYIgWABgAg5AkIBkgHIgFAzIhPAGIgBALIgVABgAgmAzIgCATIA8gEIACgTgAhCg1ICOgLIgFAzIiOAKgAgtgnIgCATIBhgIIABgSgAhhhRIBfgHIgFgTIAWgHIAHAYIBYgGIgCATIjPAPg");
	this.shape_1.setTransform(219.325,13.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhyBhQAigGAQgIQAPgJAGgOIgiACIAJhUICWgLIgJBUIgrADIgCAZQAAAFABABQADABAGAAIAhgDQAGAAADgGQADgGACgTQAFADAMADQgDAYgHAHQgGAJgPABIglADQgSABgGgEQgGgEACgOIACgYIgaACQgIAVgTANQgUAOgoAIQgCgKgHgIgAg1AkIAAALIBqgIIABgLgAgyAMIgBALIBqgIIABgKgAgvgKIgCAKIBqgHIABgLgAAmA8IARgGQANAKAFAKIgSAGQgDgGgOgOgAgXgqIgpADIABgQIAqgDIABgMIAUgCIgEApIgUABgAAYhJIAVgBIgCALIAngCIgBAQIgnACIgCAMIgVACgAhZhWIBcgHIgFgRIAXgEQAHAKACAJIBVgGIgFArIgVABIADgaIiiAMIgCAaIgUACg");
	this.shape_2.setTransform(194.35,15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQBNIheAHIACgTIBegHIACgSIhGAGIAJheIBHgFIABgPIhYAHIADgVIBWgGIACgWIAXgBIgCAVIBZgHIgDAVIhYAHIgCAOIBIgFIgKBeIhIAFIgBARIBhgHIgCAUIhhAHIgDAjIgXABgAg5AFIgCAVIAwgEIACgUgAAOAAIgCAVIAxgEIACgUgAg1gfIgCAUIAwgDIADgUgAARgkIgCAUIAxgEIADgUg");
	this.shape_3.setTransform(169.9,16.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhwBnQAfglAIhOIAHhMIABAAQBkgNA0gQIAQAQQg6ARhaALIgBALICWgLIgFA3IhGAFQAEAGAFAMIBLgFIgCARIhlAIIgFAQIBQgGIgBAJQgJAsgJAJQgFAFgMADIgfACQAAgLgEgIIAbAAQAGgBADgCQAFgFAFgZIg9AEQgTAlgwASQgDgKgIgHQAggLAQgSQANgPAHgaIgvADQgMA4gbAgQgFgJgKgGgAg0gHIgDATIBEgFIgGgOIAWgGgAgwgsIgCATICBgJIACgUg");
	this.shape_4.setTransform(145.025,18.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUBTIhSAGIABgTIBTgGIABgRIheAHIABgTIBfgHIAGg7IhYAHIABgTIDJgPIgCATIhbAHIgGA6IBhgHIgCAUIhhAHIgCAQIBTgGIgCATIhTAGIgCAfIgVABgAhFALIggACIACgSIAfgCIACgOIAVgCIgCAOIAagBIgCASIgaACIgBAPIgVACgAAuACIgbACIACgTIAbgCIABgNIAVgBIgBANIAfgCIgCATIgfABIgCAQIgVACgAgthFIg1AEIACgUIA1gEIABgQIAWgBIgBAQIAZgCIgCATIgZACIgCARIgWABgAAjhLIgZACIACgUIAZgCIACgQIAWgBIgCAPIA1gDIgCATIg1AEIgBARIgWABg");
	this.shape_5.setTransform(121.425,20.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhwBlQAfgHAcgMQAegOASgQIgFgHQgjAagzANQgDgHgFgEQA5gOAfgVIgGgGQgZAMgrANQgCgIgFgFQAjgIAfgNIgrAEIACgPICLgKIgBAOIhDAFIgEADQALAJAFAMQAggNAZgNIAMAMQgQAJgRAHQAMAdAiAGQgIAIgGAKQgkgKgNgkIgOAFQADANgEAMQgDALgIAGQgJAIgNABIgQABQAAgKgEgHIASgBQAJgBADgDQAJgHgCgRQgnAhg/AQQgFgJgEgEgAhlgKIDLgPIgEAlIgUACIACgWIijALIgDAZIgTABgAhDg+ICSgLIgEAoIiSALgAgugyIgBANIBkgHIABgOgAhghWIBfgIIgFgMIAWgHQAFAJACAJIBagHIgCARIjRAQg");
	this.shape_6.setTransform(97.025,22.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPBBIhpAIIADgkQAog5BKhKIA2gEQhTBRghAvIA1gEIAFgpIAsgEIgEAqIAcgCIgDAmIgcADIgEAiIgtADg");
	this.shape_7.setTransform(67.9,25.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhOBgIAEgnQAnAHAWgCQAqgDADgcQACgXgmACQgcACgjAKIAUhyIB9gJIgEAnIhXAGIgGAjQASgFALgBQAjgCASAPQASAOgDAcQgDAfgYATQgXAUgpADIgRABQgXAAgZgGg");
	this.shape_8.setTransform(48.0209,27.1579);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhOA+QA4ghAcgYQAdgXABgRQADgcgnADQgaACghALIAEgmQAigMAngDQAegCATAPQATAOgDAhQgDAagYAXQgWAWgsAbIBQgGIgEAnIiUALg");
	this.shape_9.setTransform(29.7455,28.5882);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUgVIAugDIgEAuIgvADg");
	this.shape_10.setTransform(15.725,36.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AACgwIg0AMIAEglIBhgaIgUDEIgrADg");
	this.shape_11.setTransform(5.125,30.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc21254, new cjs.Rectangle(0,0,254.1,40.1), null);


(lib.mo_sc2177 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgzheIAugEIgOCaIBZgHIgEAnIiHALg");
	this.shape.setTransform(277.525,0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAkhzIAvgEIh3DrIguAEg");
	this.shape_1.setTransform(260.8,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhPhZIBCgGQASBUADAWQAHgWAjhZIBCgFQAIBMAABzIgtADQAAhagEg3QggBMgUA4IgqAEQgMhCgQg8QgRBAgOBUIgtAEQAXh4AVhLg");
	this.shape_2.setTransform(238.075,3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhQhZIAugDIgSDBIguAEgAgoAHQAcgsAyg+IA9gFQhABKgWAeQAJAIAQASQAPASAGAJIAbAlIg8AFQgcgsgmgsg");
	this.shape_3.setTransform(215.45,5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAFQAggxAMgPIhhAIIAEgmICXgNIgEAfQgiAwgaAqQgcAvgPAhIgyADQAYguAfgzg");
	this.shape_4.setTransform(195.95,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVgUIAvgEIgEAtIgvAEg");
	this.shape_5.setTransform(182.05,15.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAGQAdgvAPgRIhiAIIADgnICXgNIgCAfQgjAvgaArQgbAtgQAjIgxAEQAYgxAfgwg");
	this.shape_6.setTransform(175.3,8.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AACgwIg0AMIADgkIBigcIgTDFIgrAEg");
	this.shape_7.setTransform(158.325,9.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhIAzQgPAegRATQgBgEgHgPQAVgWASgnIgfADIACgUIAjgCIACgWIgfADIACgTIAfgDIACgUIgfAHQgBgJgDgHIAlgJIACgbIAUgBIgCAVQAMgEAJgFIAOAOIgFACQBBgSAjgUIARAQQgdANgbAJIgDAlIA6gOIABATIg9AQIgEAhIBFgQIABATIhIASIgDAlQgBAIACACQABADAHgBIAdgCQAGgBADgGQACgHADgUQAKAGAJACQgEAagHAJQgHAKgPABIgiAEQgRABgGgGQgFgHACgVIADghIgiAJIgBgUIAlgKIADghIgeAIIgCgUIAigIIADgjIgiAKQgBgJgFgIIgeAMIgCAXIAbgCIgCATIgbACIgCAXIAhgCIgCASIghACIAAAJIAfAcIgOARIgTgYIgHBDIgUACg");
	this.shape_8.setTransform(135.275,11.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhrBlQAVgcAYgrIAPANQgVAngVAggAgYg5IA1gFIAFgxIAWgCIgFAxIA5gFIgQCpIgWACIACgNIhaAIIgCAOIgUACgAgMAcIgEAvIAhgDIAEgvgAArAYIgFAuIAkgCIAEgvgAgGgmIgEAtIAhgDIAEgsgAAxgrIgEAtIAjgCIAEgtgAhogQIAOgSQAcALAPAKIgOATQgOgJgdgNgAhVhSIAOgSQAdALAPAKIgPAUQgRgMgagLg");
	this.shape_9.setTransform(111.175,13.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhOgKQgLAOgJAIQgDgLgGgJQAlgnAYg7IAVAFQgNAcgPAZIgPCiIgWACgAg2BTIBDgFIAEgkIg2AFIACgVIA2gFIACgYIAWgBIgCAXIA4gEIgCAVIg4AFIgDAjIBCgGIgCAWIicANgAgkgbIA8gFIADgfIgxAEIACgVIAxgEIACgdIAXgCIgDAeIAzgFIgCAVIgzAFIgDAeIA+gFIgCAVIiQAMg");
	this.shape_10.setTransform(86.825,15.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeBZIhPAQIAAgUIAWgEIAHhNIgUACIACgSIDQgRIgCASIhsAJIgJBdQAWgJAUgPQgNgRgIgWIAGgDIgOACIACgSIBOgGIAEgCIANAFQgMAhgZAZQASANAYADQgHAHgIAMQgbgGgRgOQgTAQgcANQgEgLgFgGIgCASIgVADgAhCA+IgBAQIAngIIABgLgAAgAYQAGAQALAMQAPgOAJgRgAg/AgIgBANIAngDIABgOgAg8ACIgCAOIAogDIABgNgAg+hiICZgMIgHBJIgWACIAFg5IhtAJIgGA5IgVACgAglgvIBagHIgBAOIhaAHgAgihJIBZgHIgBAOIhaAIg");
	this.shape_11.setTransform(62.025,17.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhvBpQAJgUAHgkIARACQgIAngJAUgAghBfQAJgLAFgKIgRAHQgCgTgFgTIAQgHQAGAUACASQAZgwALhsIgVACIACgVIBRgHIAEgBIAPABIgRBEIANgCIAEgBIAOAFQgOA0gcAmQAPASAWAJQgIAGgJANQgUgJgPgSQgSAVgXAPQgFgLgIgGQAXgNAUgYQgLgWgHgfQgOBFgbAmQgDgDgPgJgAAqgRQAGAeALAVQAQgaAKgcgAAmhTIgGAvIAcgCQAFgSAHgegAhFAyIAQgGQADAcgBAUIgSAFQACgSgCgdgAhlAUQAFgBAPgRQAFgEAPgTQgaAFgGADIgFgUQAGgCAJgMQATgXAQgnIAUAHQgUAmgUAaIAWgEQALgQAJgRIASAKQgZAogiAlIAjgHIgHgSIARgHQAKAZADAVIgSAIIgCgNQg8APgHAEQgBgKgEgKg");
	this.shape_12.setTransform(37.475,19.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhXhgIDEgQIgSC2QgBASgMAGQgJAFgfACQgBgLgFgKIAggCQAFgBAAgGIAQigIiZAMIgSC9IgWABgAgtgQIBegIIgHBNIhKAGIgBARIgVACgAgbAAIgDAoIA1gEIAFgngAg1g4IB3gKIgCATIh3AKg");
	this.shape_13.setTransform(13.5,22.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc2177, new cjs.Rectangle(2.7,-10,281.8,43.6), null);


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

	// car1
	this.instance = new lib.car1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,478,230);


(lib.本月入主即享 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ADxBJIAdAAQAFAAAAgEIADgRIhLAAIADgPIBLAAIACgKIAAAAQATgEAPgFIhaAAIADgOIB2AAIAEgBIAKAKQgbANgjAIIgBADIBNAAIgDAPIhMAAIgDASQgCAHgCADQgDAEgGABQgIACgcAAQgBgHgDgHgABlBXIAcihIBBAAIgTBqQgDANgHAEQgHADgVAAQAAgJgCgHIATAAQADgBABgDIAQhaIgeAAIgZCRgAmHBJQA/geAfhPIAKACIACgWIguAAIADgSIA/AAQgSBkBGAuQgKAGgHAIQgyghgGhBQgiBEg5AfQgHgJgHgFgAAGBAQAJgEABgIIAXh/IBMAAIgQBZIg5AAIgIAqIAhgKIgHgRIAQgIQAOAeAEASIgRAJIgFgRQg3ARgHAEQAAgLgEgHgAAsgBIAoAAIAEgWIgoAAgAAzgnIAoAAIAEgVIgoAAgAjABRIADgRIBKAAIAIgqIg5AAIADgRIA5AAIAGgkIhCAAIADgSIBRAAQgLgNgQgNIARgKQAUAQAKAOIgKAGIA9AAIgDASIhCAAIgHAkIA6AAIgDARIg6AAIgHAqIBLAAIgDARgADvgFIAGgnIB5AAIgHAngAEDgRIBUAAIACgPIhUAAgADgg3IADgPIBJAAIgDgNIATgDQADAHABAJIBIAAIgCAPg");
	this.shape.setTransform(90.075,11.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.本月入主即享, new cjs.Rectangle(50.9,2.5,78.4,17.5), null);


(lib.ALLNEWSENTRA = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#60370F").s().p("AAmAzIgKgbIg2AAIgKAbIgQAAQALgfANgdQANgeAIgLIAQAAIAJARIAQAjIATAxgAAXAMQgNgegJgSQgKATgMAdIAsAAIAAAAg");
	this.shape.setTransform(271,7.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#60370F").s().p("AAYAzQgNgTgQgTIgWAAIAAAmIgQAAIAAhlIArAAIALABQAFABAHAEQAGADAEAHQAEAHAAAJQAAANgHAHQgIAHgKADQAPAQARAXgAgbAAIAaAAIAGAAIAIgDQAEgBACgEQADgEAAgGQAAgKgHgEQgHgFgJABIgaAAg");
	this.shape_1.setTransform(250.95,7.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#60370F").s().p("AgGAzIAAhXIgnAAIAAgOIBbAAIAAAOIgmAAIAABXg");
	this.shape_2.setTransform(230.35,7.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#60370F").s().p("AAgAzIg9hSIAABSIgOAAIAAhlIAQAAIA5BLIAAhLIAOAAIAABlg");
	this.shape_3.setTransform(209.7,7.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#60370F").s().p("AgjAzIAAhlIBHAAIAAAOIg4AAIAAAdIA0AAIAAAMIg0AAIAAAhIA4AAIAAANg");
	this.shape_4.setTransform(189.35,7.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#60370F").s().p("AgnAuIAAgPIAFACIAFACIAFABIAFACIAGAAIAGABIAFAAQAMAAAHgEQAIgEAAgIQAAgKgPgEIgXgHQgZgFAAgVQAAgOAMgHQAMgHARAAQARAAAPAFIAAAOQgTgFgNgBQgKAAgIAEQgHADAAAIQgBAKAQAEIAYAHQAXAGAAAUQAAAPgLAHQgMAIgTAAQgTAAgSgHg");
	this.shape_5.setTransform(169.65,7.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#60370F").s().p("AAXAzIgXg7QgLAigLAZIgQAAIgIgYIgKgeIgLgvIAQAAQAIApANAoQALgXAOgpIAKAAIALAdIAOAjQAMgiAKgvIAPAAQgLAygRAzg");
	this.shape_6.setTransform(127,7.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#60370F").s().p("AgjAzIAAhlIBHAAIAAAOIg4AAIAAAdIAzAAIAAAMIgzAAIAAAhIA4AAIAAANg");
	this.shape_7.setTransform(105.5,7.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#60370F").s().p("AAgAzIg9hSIAABSIgOAAIAAhlIARAAIA4BLIAAhLIAPAAIAABlg");
	this.shape_8.setTransform(84.9,7.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#60370F").s().p("AgkAzIAAhlIAPAAIAABYIA6AAIAAANg");
	this.shape_9.setTransform(44.325,7.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#60370F").s().p("AgkAzIAAhlIAPAAIAABYIA6AAIAAANg");
	this.shape_10.setTransform(25.525,7.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#60370F").s().p("AAmAzIgKgbIg3AAIgJAbIgQAAQALgfANgdQAOgeAGgLIARAAIAJARIAQAjIATAxgAAXAMQgMgegLgSQgJATgMAdIAsAAIAAAAg");
	this.shape_11.setTransform(5.3,7.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ALLNEWSENTRA, new cjs.Rectangle(-2,-5.7,283.4,25.4), null);


(lib.Rectangle_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#634313","#BD9554"],[0,0.498],-38.5,0,38.6,0).s().p("AmAAMIAAgXIMCAAIAAAXg");
	this.shape.setTransform(42.05,4.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_1, new cjs.Rectangle(3.5,3.5,77.1,2.3), null);


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
	this.shape.graphics.lf(["#634313","#BD9554"],[0,0.498],38.6,0,-38.5,0).s().p("AmAAMIAAgXIMCAAIAAAXg");
	this.shape.setTransform(42.05,4.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle, new cjs.Rectangle(3.5,3.4,77.1,2.3000000000000003), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#634313").s().p("AgmCUIgEgCQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAJg4QABgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIgBAAIgBAAQgrAjhDAXIgCAAIgMgSIADgBQA5gWAnglIAAgCIgCgCIhUAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIACgJQABgFAEAAIB4AAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIADgXQgqAOgqAFIgCAAIgJgWIAFAAQAlgDAqgPQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgzgIIgIAAIAIgHIAYgVQAAAAABAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAIgWAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBQgCADgDAAIgbAAQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAKg4QABgEAEgBIBwAAQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAFgbIAiABQADABACACQABAAAAABQAAAAAAABQABAAAAABQAAABgBABQAAADgDAFIAAABIgCAIIAAACIACAAIBwAAQABAAABABQAAAAABAAQAAAAABABQAAAAABAAQAAABABABQAAAAAAABQAAAAAAABQAAAAAAABIgKA4QgBAEgEAAIgcAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAgBIgBgCIgBACQAAAFgFAAIgfAAIgCABQgNAQgOAMIgBABIACACQAjAJAWAKIAFACIgdAdIgDgBQgYgTgogMIgCAAIgLAGQAAAAgBAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAIAKABQADAAACACQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgEAIIAAABIgCAKIAAADIACAAIB4AAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQABADAAACIgCAJQgBAEgEAAIhcAAIgCACQAAAAAAABQgBAAAAAAQAAAAABABQAAAAAAAAQAYAkA1AWIAEACIgRASIgCgBQg9gUgggnIgCgBIgCACIgKA8QgBAFgEAAgAgMgwIgPAOQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAAAABIACABIAeAEIABgBQAMgHAJgMIABgCQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBAAAAAAIgjAAgAAVhgQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAABABIABABQAFABgBAFQgBAEgJADIgIAIIgBABIBlAAQABAAABABQAAAAABAAQABAAAAABQABAAAAABIABABIAFgdIAAgCIgCgBIhfAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAABAAAAgAhRhgIgFAdQAAgBABAAQAAgBABAAQAAAAABAAQABgBAAAAIAuAAIACgBQAQgQAFgHIAAgDQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIhAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAABAAAAg");
	this.shape.setTransform(118.6063,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#634313").s().p("AhZCQQgFgZgPgZIgCgDIAFgEIgzAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAgBIABgJQABgEAFAAICvAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBABAAIABgTIAAAAIifAJIgBAAQgEACgDAAQgFAAgCgHIgEgaIAFABQAJABAWAAIBXgCQAAAAAAAAQABgBAAAAQAAAAAAAAQABgBAAAAIABgIIAAgBIgCgBIhGAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgCgFIAQhYQACgFAEAAIBJAAQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBIABgHIgBgCIgBgBIhyAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgBgEIACgKQABgEAEAAIB0AAQABAAAAAAQABgBAAAAQAAAAAAAAQABgBAAAAIAAgCQACgMAAgIIAAgEIAgABQAGAAADAEQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIgFAIIgBACIgBAGIAAACIACABIB5AAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIgCAKQgBAEgEAAIh7AAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABAAAAIgCAIIABABIACABIBKAAQAAAAABAAQAAAAABABQAAAAABAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABIgPBYIgEAEQAOAKAQAQIADADIglAbIAkAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIgCAJQAAAFgFAAIhAAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBABIgEAbQgFAfgfAAIgrAAQgFAAgBgEIgGgUIAFABQATADAPAAQAHAAADgDQACgDACgJIAEgWIgBgCIgBgBIhbAAIgDABIAAADQAaAXACADIACADIgoAdgABWBDIgBgEIgKgTIgCgBIgTABIACAAQAIAAABADQADADgBAEQgBADgEAFIgBACIABACIABABIAXAAgAALAOIgCAGIABACIACABIAsgBQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgFgGIgoAAQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABgAASgbIgCAQIAAACIABABIApAAQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBIACgQIAAgCIgBgBIgpAAQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAgAg9gbIgCAQIAAACIACABIAjAAQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIAEgQIgBgCIgBgBIgkAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAgAAZhBIgCANIAAACIACABIAoAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIADgNIgBgCIgBgBIgpAAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAABgAg2hBIgCANIABACIABABIAjAAQABAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBIADgNIgBgCIgCgBIgkAAQAAAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAABg");
	this.shape_1.setTransform(84.75,14.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#634313").s().p("AgjAWIAFgDQAZgUAUgkIACgDIASAIIgBADQgOAngSAcIgBACg");
	this.shape_2.setTransform(36.6,25.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#634313").s().p("ABKCOQgCgVgIgXQgFgPgFgHIgBgDIASgMIACABIAKAKQgGgPgEgGQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAIhTAHIgCACQAAAAAAAAQAAABAAAAQAAAAAAAAQABABAAAAQARASAJAOIACADIgnAbIAAgGQgBgKgFgQQgEgPgFgJIgBgDIABgBQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQgBAAAAABIgwADIAfADIAFADIABAFIgFAIIAAABIgFAcQgCAKACADQADADAJAAIAoAAQAKAAAFgGQAGgFAHgVIABgEIAEACQAHAEASAGIAFACIgCADQgMAZgMAIQgKAHgSgBIhKAAQgTABgFgHQgGgGADgPIAHgnIABgNIAAgFIgoADIgNAEQgDAAgCgCQgBgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgDgcIAXACIBhgDQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIACgMQABAAAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgCgBIhNAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgCgDAAgDIAQhYQABgEAFAAIBQAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAgBAAAAIACgLIgBgBIgCgBIh2AAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIABgJQABgEAFAAIB5AAQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAAAAAIABgFIABgRIABgFIAjACQACAAADACQABACAAAEQgBADgEAGIAAABIgBAGIAAACIACABIB2AAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAABQAAAAABABQAAAAAAABQAAAAgBABIgBAKQgBAEgFAAIh5AAQAAAAgBAAQAAAAAAABQAAAAgBAAQAAABAAAAIgCAKIABACIACABIBOAAIAEABQACADgBADIgPBXQgBAGgFgBIgBAAQATAQAOASIACADIgkAZQAQARAKAUIADAEIgqAdgAAGASIgCAKIAAADIACABIA1gDIgFgHQgCgCABgEIgtAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAgAANgWIgDAQIABACIABABIAsAAQABAAAAAAQAAAAABgBQAAAAAAAAQABgBAAAAIACgQIAAgDIgCgBIgsAAQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAAAABgAhIgWIgDAQIABACIABABIAsAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIADgQIgBgDIgBgBIgsAAQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAAAABgAAUg9IgCAOIAAABIACABIAsAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIACgOIAAgCIgCgBIgsAAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAAAgAhBg9IgDAOIABABIACABIArAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIACgOIAAgCQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAgBgBAAIgrAAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAAAg");
	this.shape_3.setTransform(50.9667,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#634313").s().p("AgtCVQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIAbiXIgBgCQgBAAAAgBQAAAAgBAAQAAAAgBABQAAAAAAAAIgQAPIgDACIgOgOIACgCQAWgYAZgnQAbgrAJgdIAAgDIAhAKQAGABgBAGQgBADgEAEIAAAAQgNAWgUAdIgBABIglDYQgBAFgFAAg");
	this.shape_4.setTransform(6.1821,14.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#634313").s().p("ABVCNQhBgGgkgSIgCAAQgtATg1AFIgCAAIgLgTIAFgBQAxgHAdgMIABgBIgBgDQgHgHgHgKQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgWAMgRAGIgDABIgMgRIAEgCQAigMAdgbIAAgCIAAgBQgFgFABgNIAEgRIABgLIABgDIAcABQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAIACADIADgDIABgCQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAgBIg4AAQgBAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAIgBAGIATAIIgBACQgOAbgSATIgCACIgZgPIAEgEQAMgJAIgKQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIgCgBIgLAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgDAAgDIAGggQABgEAEAAIAYAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAIAMhGQABgFAEAAIAqAAIACgBIAFgHIABgDIgCgBIg2AAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgCAAgEIABgIQACgFAEAAIC2AAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABIABAFIgBAIQgCAGgEgBIhTAAIgCABIgHAIQAAAAAAAAQgBABAAAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAIA6AAQABAAABABQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIgLBDIAAACIABABIAVAAIAFABQABADAAADIgHAfQgBAGgEAAIgOAAIgCABQAAAAAAAAQgBABAAAAQAAAAABAAQAAABAAAAIAMASIACADIgeAUIgBgFQgEgWgLgRIgBACQgJASgJAFQgFADgOAAIgUAAIgCABIgHAGIgBACIACACIBBAAIAFACQABACAAADIgCAKIgCABQgQAPgXAOIgBADQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAABQAfAMAuAFIAGAAIgMAUgAgaBKQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIAKAJQABAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAIANgJIAAgDQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAIgWAAgAAHAWIADAAQAGgBACgBQACgCAEgHgAgBAWQgFgMgIgMIgBAAIgEAFIAAABIgCAOIAAAEIAUAAIAAAAgAA2AMIgCgFIARgKIACADIACAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIACgIIgBgCIgBgBIg9AAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAIABACIANANIADgFIAEABQAEADAPAHIACABgAghgkIgBACIABACIACABIBNAAQABAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAIAAgCIAAgCIgDgBIhNAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAABAAAAgAgcg+IgBADIABACIABAAIBOAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIAAgCIAAgDIgCAAIhOAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAgAgYhWIgBABIABACIACAAIBNAAQABAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAIAAgBIgBgCIgCAAIhNAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAg");
	this.shape_5.setTransform(18.7,15.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,134.8,29.9), null);


(lib.CompoundPath = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#684200","#C49447","#684200"],[0,0.498,1],-152.4,0,152.4,0).s().p("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GIghC9QgIAsgPAPQgTASgxAAgAO4gJIgRBdQAAAAAAABQAAAAAAABQAAAAABABQAAABAAAAQABABAAAAQABABAAAAQABAAAAAAQABAAAAAAQARAAA3gGIALgBQAEAAABgEIAPhXQABAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIhRAAQgEAAgBAFgASPAAQAQAeAOAsQABADAFAAQAEAAABgEIAOhRQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIhWAAQgEAAgBAFIgEAYIAqgWgARYBHIACAAIANgCIADgCQABgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQgDgUgHgUIAAgBgASGi9IgIArQAAABAAAAQAAABAAABQAAAAABAAQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAzAAQAEAAABgEIAHgrQABAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgyAAQgEAAgBAEgAP4i9IgIArQAAABAAAAQAAABAAABQAAAAABAAQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAxAAQAEAAABgEIAIgrQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgxAAQgEAAgBAEgASXkgIgHAqQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAyAAQAFAAABgFIAHgqQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQgBAAAAAAIgyAAQgFAAgBAFgAQJkgIgHAqQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAxAAQAEAAABgFIAHgqQABAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAIgxAAQgEAAgBAFgABpDGQgGAAgEgEQgEgFAB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");
	this.shape.setTransform(155.815,42.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(3.4,3.4,304.90000000000003,77.6), null);


(lib.車規免費升等 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FBE64D").s().p("Ap7BsIAGghIhdAAIADgUIBdAAIADgQIhGAAIARhaIBFAAIADgOIhXAAIAEgUIBWAAIAEgUIAWAAIgDAUIBXAAIgDAUIhYAAIgCAOIBGAAIgQBaIhHAAIgCAQIBfAAIgDAUIhgAAIgGAhgApVAVIAwAAIAEgTIgxAAgAqcAVIAwAAIAEgTIgwAAgApPgOIAwAAIAEgTIgxAAgAqWgOIAwAAIAEgTIgwAAgAJGBZIAgABQAFgBABgEIAGgiIhUAAQAVAUALANIgTANQgKgOgVgVIAQgLIg1AAIADgRICLAAIACgOIAXAAIgDAOIAuAAIgDARIguAAIgGAjQgCAPgNADQgJADghAAQAAgIgDgKgADrBbQAfgPARgYQAOgTAGgaIgzAAIADgUIA0AAIAJgvIgsALQgBgJgEgJQBFgPAmgUIANARQgUAKgcAJIgKA1IBCAAIAQhYIAWAAIgPBYIAxAAIgDAUIgyAAIgRBkIgXAAIAShkIhDAAQgHAggPAWQgUAcgkASQgDgJgJgHgAgCBcQApgHAbgMIgkAAIANhHIgVAEQgCgIgFgIQAogGATgNIgnAAQAHgQAGgXIAuAAIACgMIg4AAIADgNIA4AAIACgMIATAAIgCAMIAgAAIACgMIAVAAIgCAMIAzAAIgHAmIgzAAIgCAMIBCAAIgCAHQgFATgFAFQgGAEgHAAIgGABIgOBQIghAAQAfAKAYAKIgSAOQgagNgmgNIALgIIg/AAIAQAHQgfAQgvALQgDgHgIgIgAA1A8IBuAAIADgNIhuAAgAA6AjIBuAAIACgMIhuAAgAA+AKIBuAAIACgLIhuAAgACdgOIAZAAIgCgHIAPABQADAAACgCQACgCACgFIgtAAgABUgOIA0AAIADgPIgnAAQgGAJgKAGgABsgrIAhAAIACgMIggAAIgDAMgAA7grIAbAAIAFgMIgcAAgACmhEIAgAAIACgMIggAAgAByhEIAgAAIACgMIggAAgAmdBbQAagIAOgPQALgNAHgWIgUAAIAWiBIBmAAIgXCBIgaAAIgIAtQgBAEABABQAAAAAAAAQAAAAABABQAAAAABAAQABAAABAAIAMAAQADAAACgDIAEgPQAEAFAMADQgFARgFAGQgGAGgKAAIgSAAQgNAAgEgFQgDgGADgOIAIgtIgOAAQgIAcgOAQQgRAUgeAKQgDgKgHgGgAlfANIA8AAIADgSIg8AAgAlZgWIA8AAIADgTIg8AAgAlTg6IA8AAIAEgTIg8AAgAjzBXQBEgQAbgtIg9AAIAJg0IgMAIQgGgLgHgFQAwgcAfgrIAXAEIgKANIA2AAIADgBIAOAJQgNARgQAQIBCAAIgNBJIg4AAIgIAxQgBAFABACQACABAIAAIAfAAQAHAAADgFQADgGAEgUQAHAGALADQgGAZgIAIQgHAJgQAAIgkAAQgTAAgFgGQgFgGADgQIAIgxIgHAAQgPAdgYASQgbAVgsALQgDgKgGgIgAh0AHIA6AAIAHgjIg1AAQgGAWgGANgAi4AHIAtAAQAFgLAHgYIgyAAgAitgvIA4AAQALgKALgNIg2AAIgYAXgAnoBZQAlgbAQg6IgkAAIAEgTIAkAAIAGgiIggAAIAEgTIAgAAIAGgiIAUAAIgGAiIAgAAIgEATIgfAAIgGAiIAkAAIgEATIglAAIgDAKQAOARASAcIgTAQQgFgOgQgZQgRArggAZQgFgJgIgGgAICAPIADgQIBIAAIADgSIhUAAIADgSIBUAAIACgNIAPAAIgHgGQAXgSAPggIAUAEIgHANIBDAAIgDATIgvAAQAKALAEAJIgRAMQgEgKgNgPIALgHIgUAAQgMAPgNAMIAAgBIgBAHIBUAAIgDASIhVAAIgDASIBHAAIgDAQgAInhAIAKgHIgTAAQgOAQgOALQgHgLgFgEQAbgSARgeIASAGIgIAMIA5AAIgDASIgmAAQAKALAFAHIgQANQgFgJgPgPg");
	this.shape.setTransform(80.075,38.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.車規免費升等, new cjs.Rectangle(7.8,27.4,144.6,21.5), null);


(lib.sb_sc4bgpic = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sc4bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(88).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,877,305);


(lib.sb_sc3bgpic = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sc3bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,908,461);


(lib.sb_sc2bgpic = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sc2bg();
	this.instance.setTransform(0,48.1,1,1,-3.5211);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({_off:true},1).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,799.5,340.6);


(lib.sb_bg = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-452,8,1.0648,1.0648);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(450));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-452,8,1550.4,191.7);


(lib.sb_floor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// floor
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#EBE4D9","#BAAC8C"],[0.016,0.055,1],-0.2,-94.4,-0.2,94.5).s().p("Ei1YAOxIAA9hMFqxAAAIAAdhg");
	this.shape.setTransform(314.05,142.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(65));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-846.8,47.8,2321.8,188.89999999999998);


(lib.sb_deco4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sc1deco4();
	this.instance.setTransform(780,28,1.1248,1.1248);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(780,28,248.5999999999999,249.7);


(lib.sb_deco2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sc1_deco2
	this.instance = new lib.sc1deco2();
	this.instance.setTransform(810,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(810,0,173,142);


(lib.sb_deco1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sc1_deco1
	this.instance = new lib.sc1deco1();
	this.instance.setTransform(-1021,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1021,0,463,231);


(lib.sb_dceo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lay
	this.instance = new lib.sc1deco3();
	this.instance.setTransform(210,-50,1.5364,1.5364);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(210,-50,754.4,405.6);


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

	// Layer_11
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#F9F8F7","#E7E7E1","#CBC9BE","#A4A18C","#726D4D","#3A320A","#1C1903","#080701","#000000"],[0,0.02,0.055,0.094,0.141,0.196,0.251,0.545,0.82,1],0,0,0,0,0,67.3).s().p("AgJHcQgDjHACkVQABkVAEjGQAEjFAEAAQAFAAADDFQACDCgBEZQgBEXgFDFQgEDFgEAAQgFAAgCjFg");
	this.shape.setTransform(67.2885,67.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#F9F8F7","#E7E7E1","#CBC9BE","#A4A18C","#726D4D","#3A320A","#1C1903","#080701","#000000"],[0,0.02,0.055,0.094,0.141,0.196,0.251,0.545,0.82,1],0,0,0,0,0,67.3).s().p("AAAAMQkYgCjDgEQjFgEAAgEQAAgFDFgCQDHgDEUABQEWABDGAFQDFAEAAAEQAAAFjFACQiNACi2AAIiZAAg");
	this.shape_1.setTransform(67.3,67.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#FCFAF8","#F3EBE4","#E5D4C4","#D2B397","#BA8A5F","#A96C3A","#996234","#704826","#52351C","#402916","#392514","#000000"],[0,0.031,0.078,0.133,0.2,0.271,0.314,0.322,0.345,0.365,0.38,0.392,1],0,0,0,0,0,5.7).s().p("AgMA4QgXgFgNgTQgMgUAFgWQAFgXAUgNQAUgNAWAEQAXAEANAUQANATgFAWQgFAXgVAOQgPAKgQAAIgLgBg");
	this.shape_2.setTransform(67.3103,67.3158);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_light, new cjs.Rectangle(0,0,134.6,134.6), null);


(lib.sb_sc5btnt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mo_sc5_btn_t
	this.instance = new lib.mo_sc5btnt();
	this.instance.setTransform(73.6,9.2,1,1,0,0,0,72.6,8.2);
	this.instance.shadow = new cjs.Shadow("rgba(69,44,10,0.498)",2,2,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:true},1).wait(2).to({_off:false},0).wait(122).to({_off:true},1).wait(315));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,138,28);


(lib.sb_sc5arr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// arr1
	this.instance = new lib.mo_sc5arr();
	this.instance.setTransform(-57.05,8.85,1,1,0,0,0,72.6,8.2);
	this.instance.shadow = new cjs.Shadow("rgba(69,44,10,0.498)",2,2,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:true},1).wait(9).to({_off:false},0).wait(2).to({_off:true},1).wait(435));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19,24);


(lib.an_sc5arr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc5_arr
	this.instance = new lib.sb_sc5arr("synched",0);
	this.instance.setTransform(9.5,12.5,1,1,0,0,0,9.5,12.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1,startPosition:12},3).to({x:11.5},3).to({alpha:0},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21,24);


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

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgsHgOGMBgDgGmMgH0Ak1MhgDAGmg");
	var mask_graphics_10 = new cjs.Graphics().p("EgsHgOGMBgDgGmMgH0Ak1MhgDAGmg");
	var mask_graphics_12 = new cjs.Graphics().p("EgsHgOGMBgDgGmMgH0Ak1MhgDAGmg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:320.5187,y:145.5}).wait(10).to({graphics:mask_graphics_10,x:320.5187,y:145.5}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_12,x:320.5187,y:145.5}).wait(78));

	// sb_sc4_bg_pic
	this.instance = new lib.sb_sc4bgpic("synched",0);
	this.instance.setTransform(309.45,149.5,0.7642,0.7642,0,0,0,438.4,152.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:10},10).to({_off:true},1).wait(1).to({_off:false,regX:438.3,regY:152.8,x:312.35,startPosition:12},0).to({regX:438.4,regY:152.7,x:331.05,startPosition:0},77).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,32.8,664.9,233.09999999999997);


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
	this.instance.setTransform(302.9,139,1,1,0,0,0,302.9,139);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:12},11,cjs.Ease.cubicOut).to({startPosition:81},69).to({y:51.5,alpha:0,startPosition:85},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-54.7,664.9,320.59999999999997);


(lib.sb_sc3pm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mo_sc3_pm
	this.instance = new lib.mo_sc3pm();
	this.instance.setTransform(171.7,51.95,1,1,0,0,0,142.8,21.7);
	this.instance.shadow = new cjs.Shadow("rgba(69,44,10,0.498)",2,2,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:true},1).wait(360));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(244,221,155,0)","#DFB781","#BC9362","#9B7146","#88613A","#77542F"],[0.012,0.243,0.439,0.675,0.863,1],234.7,-19.1,-234.6,19.2).s().p("EgiJgBkMBGegFdIiLImMhGeAFdg");
	this.shape.setTransform(232.55,44.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(89).to({_off:true},1).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,465.1,90);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgsHgPHMBgDgGmMgH0Ak2MhgDAGlg");
	mask.setTransform(302.9647,139);

	// sb_sc3_bg_pic
	this.instance = new lib.sb_sc3bgpic("synched",34);
	this.instance.setTransform(294.45,104.65,1,1,0,0,0,454,230.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:310.8},89).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.4,0,664.8,278);


(lib.sb_sc339 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _Group_
	this.instance = new lib.mo_sc339();
	this.instance.setTransform(169.45,46.3,1,1,0,0,0,140.6,21.8);
	this.instance.shadow = new cjs.Shadow("rgba(69,44,10,0.498)",2,2,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:true},1).wait(360));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(244,221,155,0)","#DFB781","#BC9362","#9B7146","#88613A","#77542F"],[0.012,0.243,0.439,0.675,0.863,1],200.6,-16.3,-200.6,16.4).s().p("A8zh2MA7zgE4IiLIlMg71AE4g");
	this.shape.setTransform(198.45,43.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(89).to({_off:true},1).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,396.9,86.3);


(lib.an_sc3pm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_pm
	this.instance = new lib.sb_sc3pm("synched",0);
	this.instance.setTransform(635.2,45,1,1,0,0,0,232.6,45);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:232.6,y:81.8,alpha:1,startPosition:14},14,cjs.Ease.cubicOut).to({startPosition:82},68).to({_off:true},1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,867.7,126.8);


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

	// sb_sc3_bg
	this.instance = new lib.sb_sc3bg("synched",0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1,startPosition:14},14).to({startPosition:86},72).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.4,0,664.8,278);


(lib.an_sc339 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_39
	this.instance = new lib.sb_sc339("synched",0);
	this.instance.setTransform(601.1,43.1,1,1,0,0,0,198.5,43.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:198.5,y:79.9,alpha:1,startPosition:14},14,cjs.Ease.cubicOut).to({startPosition:84},70).to({_off:true},1).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,799.5,123.1);


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

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgsHgOGMBgDgGmMgH0Ak1MhgDAGmg");
	var mask_graphics_6 = new cjs.Graphics().p("EgsHgOGMBgDgGmMgH0Ak1MhgDAGmg");
	var mask_graphics_8 = new cjs.Graphics().p("EgsHgOGMBgDgGmMgH0Ak1MhgDAGmg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:320.5187,y:145.5}).wait(6).to({graphics:mask_graphics_6,x:320.5187,y:145.5}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_8,x:320.5187,y:145.5}).wait(78));

	// sb_sc2_bg_pic
	this.instance = new lib.sb_sc2bgpic("synched",0);
	this.instance.setTransform(329.95,149.2,0.876,0.876,0,0,0,399.7,170.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:6},6).to({_off:true},1).wait(1).to({_off:false,regX:399.6,x:328.1,y:149.25,startPosition:8},0).to({regX:399.7,x:310.9,y:149.2,startPosition:0},77).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,13,664.9,278);


(lib.sb_sc21254 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _Group__2
	this.instance = new lib.mo_sc21254();
	this.instance.setTransform(263.3,38.3,1,1,0,0,0,127,20);
	this.instance.shadow = new cjs.Shadow("rgba(69,44,10,0.498)",2,2,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(88).to({_off:true},1).wait(361));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(244,221,155,0)","#DFB781","#BC9362","#9B7146","#88613A","#77542F"],[0.012,0.243,0.439,0.675,0.863,1],-212.7,15.7,212.7,-15.6).s().p("A+qh9MA/mgEqIiRIlMg/mAEpg");
	this.shape.setTransform(210.775,42.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(88).to({_off:true},1).wait(361));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,421.6,84.7);


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
	this.instance.setTransform(302.9,158.55,1,1,0,0,0,302.9,145.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1,startPosition:8},7).to({startPosition:1},79).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,26.1,664.9,278);


(lib.an_sc21254 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_1254
	this.instance = new lib.sb_sc21254("synched",0);
	this.instance.setTransform(210.8,65.9,1,1,0,0,0,210.8,42.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:544.1,y:42.4,alpha:1,startPosition:13},13,cjs.Ease.cubicOut).to({startPosition:81},68).to({_off:true},1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,754.9,108.2);


(lib.an_picbg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pic_bg
	this.instance = new lib.picbg("synched",0);
	this.instance.setTransform(302.9,159.6,1,1,0,0,0,302.9,159.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.6016},6).to({startPosition:0},75).to({y:68.6,alpha:0},5).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-91,605.9,410.2);


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
	this.instance.setTransform(204.35,98.3,0.8548,0.8548,0,0,0,239.1,115);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:239,scaleX:1,scaleY:1,x:362.9,y:140.35,alpha:1},8,cjs.Ease.cubicOut).to({startPosition:0},49).to({x:910.65,y:197.15},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1149.7,312.2);


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
	this.instance.setTransform(67.3,67.3,1,1,0,0,0,67.3,67.3);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134.6,134.6);


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
	this.instance.setTransform(67.3,67.3,1,1,0,0,0,67.3,67.3);
	this.instance.alpha = 0.1016;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},21).to({alpha:0.1016},21).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134.6,134.6);


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

	// Layer_2_copy
	this.instance = new lib.an_light("synched",0);
	this.instance.setTransform(221.95,39.8,1,1,0,0,0,67.3,67.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({startPosition:11},0).to({_off:true},1).wait(3).to({_off:false,startPosition:15},0).wait(257).to({startPosition:14},0).to({_off:true},1).wait(177));

	// Layer_2
	this.instance_1 = new lib.an_light("synched",0);
	this.instance_1.setTransform(13.65,0,1,1,0,0,0,67.3,67.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({startPosition:11},0).to({_off:true},1).wait(3).to({_off:false,startPosition:15},0).wait(257).to({startPosition:14},0).to({_off:true},1).wait(177));

	// free
	this.instance_2 = new lib.free();
	this.instance_2.setTransform(119.7,20.35,1,1,0,0,0,89.9,13.6);
	this.instance_2.shadow = new cjs.Shadow("rgba(69,44,10,0.498)",2,2,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:true},1).wait(3).to({_off:false},0).wait(257).to({_off:true},1).wait(177));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(244,221,155,0)","#DFB781","#BC9362","#9B7146","#88613A","#77542F"],[0.012,0.243,0.439,0.675,0.863,1],149.1,0,-149,0).s().p("A3SDHICJmNMAsbAAAIiIGNg");
	this.shape.setTransform(149.05,19.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(11).to({_off:true},1).wait(3).to({_off:false},0).wait(257).to({_off:true},1).wait(177));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.6,-67.3,351.70000000000005,174.39999999999998);


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
	this.instance = new lib.sb_sc5free("synched",0);
	this.instance.setTransform(441.4,21.4,1,1,0,0,0,149.1,21.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:149.1,alpha:1,startPosition:15},12,cjs.Ease.cubicOut).to({startPosition:178},163).to({_off:true},1).wait(94));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.6,-67.3,644,174.39999999999998);


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

	// an_sc5_arr_copy
	this.instance = new lib.an_sc5arr("synched",0);
	this.instance.setTransform(167,22.1,1,1,0,0,0,10.5,12.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).wait(25).to({mode:"single",startPosition:6},0).wait(90));

	// an_sc5_arr
	this.instance_1 = new lib.an_sc5arr("synched",0);
	this.instance_1.setTransform(160.4,22.1,1,1,0,0,0,10.5,12.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).wait(27).to({mode:"single",startPosition:6},0).wait(90));

	// sb_sc5_btn_t
	this.instance_2 = new lib.sb_sc5btnt("synched",0);
	this.instance_2.setTransform(276.75,21.25,1,1,0,0,0,67,12);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({x:88.25,alpha:1,startPosition:12},10,cjs.Ease.cubicOut).wait(123));

	// sb_sc5_btn_bg
	this.instance_3 = new lib.sb_sc5btnbg("synched",0);
	this.instance_3.setTransform(287.2,17.7,1,1,0,0,0,98.7,17.7);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:98.7,alpha:1,startPosition:12},12,cjs.Ease.cubicOut).wait(123));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,385.9,35.4);


(lib.sb_sc4t = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.an_light("synched",0);
	this.instance.setTransform(225.05,3.15,0.7385,0.7385,0,0,0,67.3,67.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({startPosition:42},0).to({_off:true},1).wait(2).to({_off:false,startPosition:2},0).wait(2).to({startPosition:4},0).to({_off:true},1).wait(359));

	// _Group__2
	this.instance_1 = new lib.mo_sc4t();
	this.instance_1.setTransform(118.2,37.6,1,1,0,0,0,115.2,34.6);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,0.8)",2,2,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({_off:true},1).wait(2).to({_off:false},0).wait(2).to({_off:true},1).wait(359));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-46.5,279.8,134.5);


(lib.sb_sc4key = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.an_light("synched",0);
	this.instance.setTransform(1.3,85.25,0.6054,0.6054,0,0,0,67.2,67.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({startPosition:41},0).to({_off:true},1).wait(3).to({_off:false,startPosition:2},0).wait(3).to({startPosition:5},0).to({_off:true},1).wait(358));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAVQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBIAAgNIgLAGIgDAEQgFACgCgFQgBgEAEgCQAAAAABgBQABAAAAAAQABAAAAABQABAAAAAAIALgFIgLgEQAAAAgBAAQAAABgBAAQAAAAgBAAQgBgBAAAAQgFgCACgFQACgEAFACQACABABADIALAGIAAgNQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgFAEAAQAFAAAAAFQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABIAAANIALgGQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBABAAQAEgCACAEQADAFgFACQgDABgCgBIgKAEIAKAFQACgBADABQAFACgDAEQgBAFgFgCQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBgBAAAAIgLgGIAAANQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(318.0139,32.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAOQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBIAAgIIgHAEQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQgBABAAgBQgBAAAAAAQgBgBAAAAQgBgBAAgBQAAgBAAAAQAAgBABAAQAAAAABgBIADAAIAHgDIgHgCQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAIAHAFIAAgJQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIAAAJIAHgFIACgCQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgHACIAHADQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAABAAABQgBAAAAABQgBAAAAAAQgBABgBgBQAAAAgBAAIgCgCIgHgEIAAAIQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_1.setTransform(305.5279,37.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVBBQAKAAAHgGQAGgIAAgJQAAgJgFgHIgGgFIgEgCIAAhSQAAgIgIAAIAAgNQAJgBAGAHQAGAGAAAJIAABCQAWANAAAaQAAASgNAMQgMAOgSAAg");
	this.shape_2.setTransform(314.275,36.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIBIQgNgMAAgSQAAgaAVgNIAAhCQAAgJAHgGQAGgHAJABIAAANQgHAAAAAIIAABSIgEABQgEACgDAEQgEAHAAAJQgBAJAHAIQAGAGAKAAIAAAVQgSAAgMgOg");
	this.shape_3.setTransform(309.85,36.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#67B2DB").s().p("AgLghIAIAAIAAAWIADACIAHAEQAFAHAAAIQAAAKgHAHQgGAHgKAAg");
	this.shape_4.setTransform(313.25,39.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9FD2F1").s().p("AgEAbQgHgHAAgKQAAgIAGgHQADgDADgCIADgBIAAgWIAIAAIAABDQgKAAgGgHg");
	this.shape_5.setTransform(310.875,39.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A4C4D").s().p("AgDAjIAAhFQAHAAAAAIIAAA9g");
	this.shape_6.setTransform(312.45,32.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6E6F70").s().p("AgDAjIAAg9QAAgIAHAAIAABFg");
	this.shape_7.setTransform(311.675,32.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGACIAAgDIANAAIAAADg");
	this.shape_8.setTransform(308.45,35.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGACIAAgDIANAAIAAADg");
	this.shape_9.setTransform(308.45,33.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGACIAAgDIANAAIAAADg");
	this.shape_10.setTransform(308.45,32.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(0.7).p("AB8AAQAAA0gkAkQglAkgzAAQgzAAgkgkQgkgkAAg0QAAgyAkgkQAkglAzAAQAzAAAlAlQAkAkAAAyg");
	this.shape_11.setTransform(312.075,36.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVBBQAKAAAHgHQAGgHAAgJQAAgJgFgHIgGgFIgFgCIAAhSQAAgHgHAAIAAgPQAJAAAGAHQAGAGAAAJIAABCQAWANAAAaQAAASgNANQgMANgSAAg");
	this.shape_12.setTransform(283.475,38.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIBJQgNgNAAgSQAAgaAVgNIAAhCQAAgJAHgGQAGgHAJAAIAAAPQgDAAgCACQgCACAAADIAABSIgEABQgDACgFAEQgEAIAAAIQAAAJAGAHQAHAHAKAAIAAAVQgSAAgMgNg");
	this.shape_13.setTransform(279.05,38.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AF491E").s().p("AgLg3IAHAAIAABBIAFACIAFAFQAGAHAAAJQAAAJgHAHQgGAHgKAAg");
	this.shape_14.setTransform(282.45,39.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D54A28").s().p("AgEAxQgHgHAAgJQAAgIAFgIQAFgEACgCIAEgBIAAhBIAHAAIAABvQgKAAgGgHg");
	this.shape_15.setTransform(280.05,39.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4A4C4D").s().p("AgDAMIAAgXQAHAAAAAIIAAAPg");
	this.shape_16.setTransform(281.625,32.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6E6F70").s().p("AgDAMIAAgPQAAgEADgBQABgDADAAIAAAXg");
	this.shape_17.setTransform(280.875,32.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgGACIAAgDIANAAIAAADg");
	this.shape_18.setTransform(277.625,37.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGACIAAgDIANAAIAAADg");
	this.shape_19.setTransform(277.625,36.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGACIAAgDIANAAIAAADg");
	this.shape_20.setTransform(277.625,34.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(0.7).p("AB8AAQAAA0gkAkQglAkgzAAQgyAAglgkQgkgkAAg0QAAgyAkglQAlgkAyAAQAzAAAlAkQAkAlAAAyg");
	this.shape_21.setTransform(281.25,38.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},84).to({state:[]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[]},1).wait(358));

	// _Group_
	this.instance_1 = new lib.mo_sc4key();
	this.instance_1.setTransform(145.75,48.9,1,1,0,0,0,116.7,19.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(69,44,10,0.498)",2,2,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(84).to({_off:true},1).wait(3).to({_off:false},0).wait(3).to({_off:true},1).wait(358));

	// Layer_5
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(244,221,155,0)","#DFB781","#BC9362","#9B7146","#88613A","#77542F"],[0.012,0.243,0.439,0.675,0.863,1],200.6,-16.3,-200.6,16.4).s().p("A80h3MA71gE3IiNIlMg70AE5g");
	this.shape_22.setTransform(198.475,43.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(84).to({_off:true},1).wait(3).to({_off:false},0).wait(3).to({_off:true},1).wait(358));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.4,0,436.4,125.9);


(lib.an_sc4t = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sb_sc4t("synched",0);
	this.instance.setTransform(399.2,87.1,1,1,0,0,0,122,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:122,y:106.85,startPosition:11},11,cjs.Ease.cubicOut).to({startPosition:82},71).to({x:403.05,y:79.25,startPosition:88},4).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-8.7,560.8,162.7);


(lib.an_sc4key = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc4_key
	this.instance = new lib.sb_sc4key("synched",0);
	this.instance.setTransform(656.2,40.65,1,1,0.7073,0,0,198.5,43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:252.15,y:68.7,startPosition:11},11,cjs.Ease.cubicOut).to({startPosition:81},70).to({x:622.25,y:37.35,startPosition:88},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.8,-3.3,841.4000000000001,152.4);


(lib.sb_sc3t = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.an_light("synched",0);
	this.instance.setTransform(231.2,54.75,0.7392,0.7392,0,0,0,67.3,67.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({startPosition:3},0).to({_off:true},1).wait(360));

	// _Group__2
	this.instance_1 = new lib.mo_sc3t2();
	this.instance_1.setTransform(181.05,32.9,1,1,0,0,0,56.7,28.9);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,0.8)",2,2,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({_off:true},1).wait(360));

	// _Group__1
	this.instance_2 = new lib.mo_sc3t1();
	this.instance_2.setTransform(60.6,40.95,1,1,0,0,0,56.6,28.6);
	this.instance_2.shadow = new cjs.Shadow("rgba(255,255,255,0.8)",2,2,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:true},1).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-7,288,111.5);


(lib.an_sc3t = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_t
	this.instance = new lib.sb_sc3t("synched",0);
	this.instance.setTransform(410.1,40.6,1,1,0,0,0,125.2,40.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:125.2,y:55.6,alpha:1,startPosition:14},14,cjs.Ease.cubicOut).to({startPosition:88},74).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-7,572.9,126.5);


(lib.sb_sc2tt = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.an_light("synched",0);
	this.instance.setTransform(6.35,23.6,0.7088,0.7088,0,0,0,67.3,67.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(88).to({startPosition:2},0).to({_off:true},1).wait(361));

	// _Group__1
	this.instance_1 = new lib.mo_sc2t2();
	this.instance_1.setTransform(177.75,32.2,1,1,0,0,0,57.2,29.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,0.8)",2,2,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({_off:true},1).wait(361));

	// _Group__3
	this.instance_2 = new lib.mo_sc2t1();
	this.instance_2.setTransform(58.2,39.35,1,1,0,0,0,55.2,28.8);
	this.instance_2.shadow = new cjs.Shadow("rgba(255,255,255,0.8)",2,2,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(88).to({_off:true},1).wait(361));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.3,-24,292.9,108.6);


(lib.sb_sc2177 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.an_light("synched",0);
	this.instance.setTransform(423.3,43.6,0.3576,0.3576,0,0,0,68,68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(88).to({startPosition:2},0).to({_off:true},1).wait(361));

	// _Group_
	this.instance_1 = new lib.mo_sc2177();
	this.instance_1.setTransform(198.5,49.35,1,1,0,0,0,73.2,31.1);
	this.instance_1.shadow = new cjs.Shadow("rgba(69,44,10,0.498)",2,2,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({_off:true},1).wait(361));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(244,221,155,0)","#DFB781","#BC9362","#9B7146","#88613A","#77542F"],[0.012,0.243,0.439,0.675,0.863,1],-224,30,101.7,6).s().p("A/mhnMBBHgE/Ih7INMhBGAFAg");
	this.shape.setTransform(221.1,33.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(88).to({_off:true},1).wait(361));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.6,-9,440.59999999999997,84.6);


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

	// sb_sc2_tt
	this.instance = new lib.sb_sc2tt("synched",0);
	this.instance.setTransform(472.3,63.85,1,1,0,0,0,122.8,39.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:164.15,y:89.8,alpha:1,startPosition:10},10,cjs.Ease.cubicOut).to({startPosition:85},75).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,600,134.6);


(lib.an_sc2177 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_177
	this.instance = new lib.sb_sc2177("synched",0);
	this.instance.setTransform(160,74.7,1,1,0,0,0,160,51.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:493.3,y:51.2,alpha:1,startPosition:13},13,cjs.Ease.cubicOut).to({startPosition:76},63).to({_off:true},1).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.6,-9,773.9,108.1);


(lib.an_sc1tt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// an_light_copy_copy
	this.instance = new lib.an_light("synched",36);
	this.instance.setTransform(368.65,102.05,0.6575,0.6575,0,0,0,67.3,67.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58).to({startPosition:8},0).to({_off:true},1).wait(11).to({_off:false,startPosition:20},0).wait(1));

	// an_light_copy
	this.instance_1 = new lib.an_light("synched",12);
	this.instance_1.setTransform(220.45,44.25,0.6575,0.6575,0,0,0,67.3,67.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(58).to({startPosition:27},0).to({_off:true},1).wait(11).to({_off:false,startPosition:39},0).wait(1));

	// an_light
	this.instance_2 = new lib.an_light("synched",0);
	this.instance_2.setTransform(67.3,93.15,1,1,0,0,0,67.3,67.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(58).to({startPosition:15},0).to({_off:true},1).wait(11).to({_off:false,startPosition:27},0).wait(1));

	// Layer_4
	this.instance_3 = new lib.ALLNEWSENTRA();
	this.instance_3.setTransform(212.25,22.2,1,1,0,0,0,139.7,7);
	this.instance_3.shadow = new cjs.Shadow("rgba(143,143,143,0.2)",2,2,0);

	this.instance_4 = new lib.Rectangle();
	this.instance_4.setTransform(101,135.6,1,1,0,0,0,42.1,4.5);
	this.instance_4.shadow = new cjs.Shadow("rgba(249,221,175,0.749)",5,5,8);

	this.instance_5 = new lib.Rectangle_1();
	this.instance_5.setTransform(327.15,135.6,1,1,0,0,0,42.1,4.6);
	this.instance_5.shadow = new cjs.Shadow("rgba(249,221,175,0.749)",5,5,8);

	this.instance_6 = new lib.Group_1();
	this.instance_6.setTransform(214.8,135.7,1,1,0,0,0,67.4,15);
	this.instance_6.shadow = new cjs.Shadow("rgba(249,221,175,0.749)",3,3,6);

	this.instance_7 = new lib.CompoundPath();
	this.instance_7.setTransform(217.45,78.75,1,1,0,0,0,155.8,42.1);
	this.instance_7.shadow = new cjs.Shadow("rgba(249,221,175,0.749)",5,5,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},58).to({state:[]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},11).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,412.9,164.7);


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

	// an_light_copy_copy_copy
	this.instance = new lib.an_light("synched",0);
	this.instance.setTransform(301,68.65,0.467,0.467,0,0,0,67.5,67.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// an_light_copy_copy
	this.instance_1 = new lib.an_light("synched",0);
	this.instance_1.setTransform(25.9,25.9,0.3839,0.3839,0,0,0,67.3,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// Layer_3
	this.instance_2 = new lib.本月入主即享();
	this.instance_2.setTransform(60.75,68.45,1.0389,1.0389,0,0,0,67.5,31.4);
	this.instance_2.shadow = new cjs.Shadow("rgba(69,44,10,0.498)",2,2,3);

	this.instance_3 = new lib.車規免費升等();
	this.instance_3.setTransform(205.5,61.85,1.0389,1.0389,0,0,0,81.3,52.4);
	this.instance_3.shadow = new cjs.Shadow("rgba(69,44,10,0.498)",2,2,3);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(244,221,155,0)","#DFB781","#BC9362","#9B7146","#88613A","#77542F"],[0.012,0.243,0.439,0.675,0.863,1],160.1,0,-160,0).s().p("A4/DWICSmqMAvuAAAIiTGqg");
	this.shape.setTransform(170.9,47.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_3},{t:this.instance_2}]}).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,332.2,99.80000000000001);


(lib.an_an_sc1tt = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.an_sc1tt("synched",0,false);
	this.instance.setTransform(206.5,80.2,1,1,0,0,0,206.5,80.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:112.7,alpha:1,startPosition:15},15,cjs.Ease.cubicOut).to({startPosition:70},44).to({x:640.05,alpha:0},9,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,846.5,197.2);


(lib.an_an_sc1subtitle = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(515.95,50,1,1,0,0,0,166.1,50);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:166.1,alpha:1,startPosition:15},15,cjs.Ease.cubicOut).to({startPosition:59},44).to({x:517.75,alpha:0},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,683.8,99.80000000000001);


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

	// an_an_sc1_tt
	this.instance = new lib.an_an_sc1tt("synched",0,false);
	this.instance.setTransform(-470,118.5,1.4693,1.4693,0,0,0,206.2,96.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({mode:"single",startPosition:36},0).wait(82).to({startPosition:36},0).to({_off:true},1).wait(52));

	// an_sc5_free
	this.instance_1 = new lib.an_sc5free("synched",0,false);
	this.instance_1.setTransform(1044.1,112.95,1.915,1.915,0,0,0,295.2,21.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(123).to({startPosition:123},0).to({_off:true},1).wait(52));

	// ab_sc5_btn
	this.instance_2 = new lib.an_sc5btn("synched",0,false);
	this.instance_2.setTransform(855.45,243.25,2.2155,2.2155,0,0,0,98.9,17.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(118).to({startPosition:118},0).to({_off:true},1).wait(52));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-772.9,-57.4,2382.3,339.5);


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

	// an_sc4_key
	this.instance = new lib.an_sc4key("synched",0,false);
	this.instance.setTransform(1342.8,290.65,1.7033,1.7033,0,0,0,427.7,81.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).wait(83).to({startPosition:83},0).to({_off:true},1).wait(14));

	// an_sc4_t
	this.instance_1 = new lib.an_sc4t("synched",0,false);
	this.instance_1.setTransform(-13.25,223.65,1.2832,1.2832,0,0,0,276.4,74.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(85).to({startPosition:85},0).to({_off:true},1).wait(14));

	// an_sc4_bg
	this.instance_2 = new lib.an_sc4bg("synched",0,false);
	this.instance_2.setTransform(-26,35.35,1.4801,1.4801,0,0,0,-0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(88).to({startPosition:88},0).to({_off:true},1).wait(14));

	// an_pic_bg
	this.instance_3 = new lib.an_picbg("synched",0,false);
	this.instance_3.setTransform(451.45,239.75,1.5258,1.4262,0,12.4851,0,302.9,159.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89).to({startPosition:89},0).to({_off:true},1).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-372,-109.2,2442.9,571.1);


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
	this.instance = new lib.an_sc3t("synched",0,false);
	this.instance.setTransform(-1.75,314.1,1.477,1.477,0,0,0,282.9,59.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(81).to({startPosition:81},0).to({_off:true},1).wait(7));

	// an_sc3_pm
	this.instance_1 = new lib.an_sc3pm("synched",0,false);
	this.instance_1.setTransform(1374.8,306.5,1.4389,1.4389,0,0,0,433.9,63.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).wait(75).to({startPosition:75},0).to({_off:true},1).wait(7));

	// an_sc3_39
	this.instance_2 = new lib.an_sc339("synched",0,false);
	this.instance_2.setTransform(1301.3,225.5,1.4389,1.4389,0,0,0,399.8,61.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).wait(77).to({startPosition:77},0).to({_off:true},1).wait(7));

	// an_sc3_bg
	this.instance_3 = new lib.an_sc3bg("synched",0,false);
	this.instance_3.setTransform(429.9,300.4,1.4621,1.4621,0,0,0,302.9,139.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).wait(79).to({startPosition:79},0).to({_off:true},1).wait(7));

	// an_pic_bg
	this.instance_4 = new lib.an_picbg("synched",0,false);
	this.instance_4.setTransform(430,296.65,1.5258,1.4262,0,12.4848,0,302.9,159.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(82).to({startPosition:82},0).to({_off:true},1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-424.6,-52.3,2423.5,571.0999999999999);


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
	this.instance.setTransform(1356.05,213.4,1.5418,1.5418,0,0,0,297.6,64.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(79).to({startPosition:79},0).to({_off:true},1).wait(6));

	// an_sc2_177
	this.instance_1 = new lib.an_sc2177("synched",0,false);
	this.instance_1.setTransform(-402.15,352.5,1.5273,1.5273,0,0,0,326.6,63);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(70).to({startPosition:70},0).to({_off:true},1).wait(6));

	// an_sc2_1254
	this.instance_2 = new lib.an_sc21254("synched",0,false);
	this.instance_2.setTransform(-261.85,227.65,1.5942,1.5942,0,0,0,377.4,54.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).wait(75).to({startPosition:75},0).to({_off:true},1).wait(6));

	// an_sc2_bg
	this.instance_3 = new lib.an_sc2bg("synched",0,false);
	this.instance_3.setTransform(427.15,241.25,1.4874,1.4874,0,0,0,302.8,159.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).wait(80).to({startPosition:80},0).to({_off:true},1).wait(6));

	// an_pic_bg
	this.instance_4 = new lib.an_picbg("synched",0,false);
	this.instance_4.setTransform(451.45,239.75,1.5258,1.4262,0,12.4851,0,302.9,159.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(82).to({startPosition:82},0).to({_off:true},1).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-890.8,-109.2,2705.7,571.1);


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

	// an_an_sc1_subtitle
	this.instance = new lib.an_an_sc1subtitle("synched",0,false);
	this.instance.setTransform(1932.8,168.2,1.7655,1.7655,0,0,0,341.1,50.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(65).to({x:1932.85,startPosition:65},0).to({_off:true},1).wait(24));

	// an_an_sc1_tt
	this.instance_1 = new lib.an_an_sc1tt("synched",0,false);
	this.instance_1.setTransform(470.1,99.55,1.4637,1.4637,0,0,0,206.5,96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(65).to({startPosition:65},0).to({_off:true},1).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(167.9,-41.6,2370.2999999999997,297.70000000000005);


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
	this.instance.setTransform(-170.6,350.25,1.3715,1.3719,0,0,0,74.8,62.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.698)",0,3,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(450));

	// sc4
	this.instance_1 = new lib.sc4("synched",0,false);
	this.instance_1.setTransform(773.8,285.85,1,1,0,0,0,326.5,193.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(232).to({_off:false},0).to({_off:true},90).wait(128));

	// sc3
	this.instance_2 = new lib.sc3("synched",0,false);
	this.instance_2.setTransform(820.2,268.4,1,1,0,0,0,373.1,218.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(66).to({_off:false},0).to({_off:true},83).wait(301));

	// sc2
	this.instance_3 = new lib.sc2("synched",0);
	this.instance_3.setTransform(693.2,285.2,1,1,0,0,0,359.9,184.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(149).to({_off:false},0).to({_off:true},83).wait(218));

	// sc5
	this.instance_4 = new lib.sc5("synched",0);
	this.instance_4.setTransform(941.65,345.6,1,1,0,0,0,149.1,143.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(322).to({_off:false},0).wait(128));

	// sc1
	this.instance_5 = new lib.sc1("synched",0,false);
	this.instance_5.setTransform(199.25,476.65,1,1,0,0,0,337.9,253.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},66).wait(384));

	// an_car1_copy
	this.instance_6 = new lib.an_car1("synched",0,false);
	this.instance_6.setTransform(1113.75,364,1,1,0,0,0,553.5,149.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(322).to({_off:false},0).wait(37).to({mode:"single",startPosition:37},0).wait(91));

	// an_car1
	this.instance_7 = new lib.an_car1("synched",0,false);
	this.instance_7.setTransform(1113.75,364,1,1,0,0,0,553.5,149.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},65).wait(385));

	// sb_deco2
	this.instance_8 = new lib.sb_deco2("synched",0);
	this.instance_8.setTransform(976.65,441.75,1,1,0,0,0,86.5,71);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({startPosition:0},56).to({y:670.6},12,cjs.Ease.backOut).to({startPosition:0},248).to({y:441.75},5).wait(129));

	// sb_deco1
	this.instance_9 = new lib.sb_deco1("synched",0);
	this.instance_9.setTransform(502.15,395.25,1,1,0,0,0,114,115.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({startPosition:0},56).to({y:624.1},12,cjs.Ease.backOut).to({startPosition:0},248).to({y:395.25},5).wait(129));

	// sb_deco4
	this.instance_10 = new lib.sb_deco4("synched",0);
	this.instance_10.setTransform(940.75,287.2,1,1,0,0,0,109.8,110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({startPosition:0},56).to({regX:109.9,scaleX:1.7537,scaleY:1.7537,x:340.95,y:306.4},12,cjs.Ease.backOut).to({startPosition:0},163).to({alpha:0},5).to({startPosition:0},80).to({regX:109.8,scaleX:1.0771,scaleY:1.0771,x:869.95,y:293.55,alpha:1},5).wait(129));

	// sb_dceo3
	this.instance_11 = new lib.sb_dceo3("synched",0);
	this.instance_11.setTransform(534.75,269.55,1,1,0,0,0,130.9,131.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({startPosition:0},56).to({scaleX:1.8091,scaleY:1.8091,x:-1117.15,y:255.55},12,cjs.Ease.backOut).to({startPosition:0},81).to({alpha:0},4).to({startPosition:0},78).to({alpha:1},5).to({startPosition:0},80).to({scaleX:1,scaleY:1,x:534.75,y:269.55},5).wait(129));

	// sb_floor
	this.instance_12 = new lib.sb_floor("synched",0);
	this.instance_12.setTransform(755.4,431.35,1,1,0,0,0,314,94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({startPosition:0},57).to({x:752.3,y:622.05,startPosition:60},11,cjs.Ease.backOut).to({startPosition:60},247).to({x:755.4,y:431.35,startPosition:0},6).wait(129));

	// sb_bg
	this.instance_13 = new lib.sb_bg("synched",0);
	this.instance_13.setTransform(744.1,429.3,1.4184,1.4184,0,0,0,310.1,159.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(450));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1132.4,-89.5,3650.6,872.4);


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
	this.instance.setTransform(376.1,51.85,0.3328,0.3328,0,0,0,798.4,370.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(899).to({mode:"single",startPosition:449},0).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("Eg6bgIlMB03AAAIAARLMh03AAAg");
	this.shape.setTransform(364,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg6bAImIAAxLMB03AAAIAARLg");
	this.shape_1.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(900));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(97.6,-56.1,850.8,245.29999999999998);
// library properties:
lib.properties = {
	id: '19794813D10B40F1A131B7BB7A784B87',
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/car1.png", id:"car1"},
		{src:"images/sc1deco1.png", id:"sc1deco1"},
		{src:"images/sc1deco2.png", id:"sc1deco2"},
		{src:"images/sc1deco3.png", id:"sc1deco3"},
		{src:"images/sc1deco4.png", id:"sc1deco4"},
		{src:"images/sc2bg.jpg", id:"sc2bg"},
		{src:"images/sc3bg.jpg", id:"sc3bg"},
		{src:"images/sc4bg.jpg", id:"sc4bg"}
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
an.compositions['19794813D10B40F1A131B7BB7A784B87'] = {
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