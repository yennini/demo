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



(lib.car1 = function() {
	this.initialize(img.car1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,333);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,179);


(lib.sc1bg = function() {
	this.initialize(img.sc1bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1800,500);


(lib.sc2bg = function() {
	this.initialize(img.sc2bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,600);


(lib.sc3bg = function() {
	this.initialize(img.sc3bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,525,450);


(lib.sc4bg = function() {
	this.initialize(img.sc4bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1260,500);// helper functions:

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


(lib.sb_sc4title = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAZA/QgLAMgQAHQgGgMgFgEQAQgGAKgLQgJgNgFgUIARgEQACAIAGALQADgJACgPIgeAAIAFg+IAfAAIACgaIATAAIgCAaIAgAAIgFA+IggAAQgEAYgIAPQAQANAcAEQgJAKgFAJQgbgGgPgNgAAygKIANAAIADgcIgNAAgAASgKIANAAIACgcIgNAAgAguBRQAAgKgEgGIANAAQAEAAACgCQACgDADgMIgGACQgBgKgEgMIAIgDQADAFABAHIADgRIgyAAIAIhfIBBgBIgBARIgUAAIgBALIARAAIgCAPIgQAAIgBALIAQAAIgBAQIgQAAIgBAKIAWAAIgBAHQgFAogEAPQgDAGgCACQgEAFgHACIgIAAIgJAAgAg2AEIAMAAIABgKIgMAAgAgzgWIALAAIABgLIgLAAgAgxgwIAMAAIAAgLIgLAAgAhVBDQAFgNAGgaIALADQgFAagGAOgAg9AfIAKgBQABARgCAPIgKABQACgQgBgQgAgxAeIAJgCQADAOAAAOIgJACQABgNgEgPg");
	this.shape.setTransform(313.6904,84.2688,1.2537,1.2537);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAgBEIgHACQgCgJgHgIIAPgGQAIAKACAHIgHADIAJAAQAEAAABgCQAEgDACgPIhxAAIAGhEIB7AAIgBANIgwAAIgBAHIApAAIgBAKIgpAAIAAAGIApAAIgBALIgpAAIgBAHIA8AAIgBAHQgGAfgGAFQgEAFgIABIgSAAQAAgHgCgHgAglAhIAjAAIAAgHIgiAAgAgjAPIAiAAIABgGIgjAAgAgigBIAiAAIAAgHIghAAgAhUBIQAKgIANgRIAPAIQgLARgKAKgAgnA2IASgCQADANAAAMIgSADQAAgMgDgOgAgKA2IAPgEQAFAMACALIgQAFQAAgJgGgPgAhMgeQAVgIAIgQIgVAAIABgQIAZAAIACgLIATAAIgCALIAkAAIgBAHQgEAcgGAFQgDAFgHAAIgQAAQAAgIgDgHIALABQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBQACgBACgMIgTAAQgLAbgdALQgDgJgGgFgAAUhJIBBAAIgEAtIhBABgAAlgrIAZAAIABgPIgZAAg");
	this.shape_1.setTransform(290.8096,84.2062,1.2537,1.2537);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZBDQAPgKAIgKIhPASIgBgVIALgCIAKh0IA9AAIgIBnIAIgCIAAARQAQgXAGgsIgWAAIACgUIAXAAIADgmIAVAAIgDAmIAlAAIgBAJQgFA3gEAVQgEAXgFAGQgFAIgKABQgHACgQgBQgBgMgEgIIAUABQAEAAACgDQAHgHAIhLIgTAAQgGAmgLAXQgOAcgXAQQgFgJgJgGgAg0AmIAYgFIACgQIgYAAgAgwgBIAXAAIABgSIgWAAgAgtglIAXAAIACgSIgXAAg");
	this.shape_2.setTransform(267.9603,84.2062,1.2537,1.2537);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLBTIAKhxIAeAAIABgLIghAAIACgSIAhAAIACgWIASAAIgCAWIATAAQgGgHgIgGIAMgJQALAHAHAIIgIAHIAKAAIgCASIgkAAIgBALIAhAAIgIBcQgCANgGADQgGAEgOAAQAAgLgDgHQAHABACgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAAAIACgSIgOAAIgDAlIgSAAIADglIgNAAIgDAngAArAbIANAAIABgMIgNAAgAALAbIANAAIABgMIgNAAgAAtgBIAOAAIABgMIgOAAgAAOgBIANAAIABgMIgNAAgAg8BTIACgcIgcAAIACgSIAcAAIABgLIgXAAIAGg+IAWAAIABgKIgaABIACgTIAaAAIABgQIATAAIgCAQIAZAAIgBASIgZAAIgBAKIAXAAIgFA+IgYAAIgBALIAcAAIgCASIgbAAIgDAcgAgmALIALAAIABgKIgLAAgAg9ALIAKAAIAAgKIgKAAgAgkgMIALAAIABgKIgLAAgAg7gMIAKAAIABgKIgKAAg");
	this.shape_3.setTransform(245.487,84.2375,1.2537,1.2537);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMBEIhHAHIgBgRIAkgDIABgKIgfAAIACgPIAeAAIABgHIgeAAIAEg1IAfAAIAAgHIgiAAIABgPIAjAAIAAgHIgeABQAAgHgDgIQAwgCAcgGIAHAPIgfAFIAAAJIAgAAIAAAJIAQAAIADglIAUAAIgDAlIAkAAIgBAJIgKBMQgDAYgFAFQgFAHgKACQgDABgSAAQAAgMgFgIIASAAQAEAAACgDQAGgGAIhMIgQAAQgGAngJAXQgMAcgVAQQgFgIgGgGgAgdA2IAegDQAUgYAGgzIgQAAIABgNIghAAIAAAHIAeAAIgFA1IgeAAIgBAHIAfAAIgBAPIgfAAgAgZAKIAOAAIABgIIgOAAgAg6AKIAOAAIABgIIgOAAgAgXgJIAOAAIAAgIIgNAAgAg4gJIAOAAIABgIIgOAAg");
	this.shape_4.setTransform(222.3555,84.4569,1.2537,1.2537);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhFBSIANiMIAtAAIAGgXIAYACIgKAVIA9AAIgMCMIgXAAIABgJIhTABIAAAIgAgtA2IBTAAIABgSIhSAAgAgqAQIBTAAIABgRIhSAAgAgmgUIBSAAIACgSIhTAAg");
	this.shape_5.setTransform(199.8509,84.3315,1.2537,1.2537);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQBSIAEguIhDAAIABgWIBEAAIACgUIg5AAIACgUIA5AAIAEg3IAVAAIgEA3IA8AAIgCAUIg8AAIgCAUIBFAAIgCAWIhFAAIgEAugAg4hGIAUgIQANAWADAQIgWAJQgCgOgMgZgAAfgnQANgUAIgUIAWAIQgPAbgJALg");
	this.shape_6.setTransform(176.7821,84.3629,1.2537,1.2537);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhTA+QA+ghAbgWQAegWACgSQACgegqAAQgbAAgkAKIADgoQAkgLArAAQAgAAAVASQAUARgDAjQgCAcgZAWQgbAYgsAXIBXAAIgEApIifABg");
	this.shape_7.setTransform(153.9568,81.0718,1.2537,1.2537);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag2BnQglhjgThqIA0AAQAYBvAUA4QAghBAnhmIA2AAQgsB1gyBYg");
	this.shape_8.setTransform(129.767,81.2912,1.2537,1.2537);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag4hmIAxAAIgOCkIBggBIgEAqIiRAAg");
	this.shape_9.setTransform(107.8265,81.3539,1.2537,1.2537);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFD650").s().p("AhECvIAXkVIh1AAIAGhHIE/gBIgGBHIh2AAIgYEWg");
	this.shape_10.setTransform(70.375,77.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFD650").s().p("AhWCrQgggLgagVQgagVgMgkQgNglAEgvQAEgrAUgkQAUgjAegVQAfgWAhgKQAkgLAhAAQAhAAAiALQAhAMAaAUQAaAWAOAiQAOAjgEAsQgEAwgTAjQgTAlgeAVQgdAVgiAKQgjALglAAQgoAAgfgKgAhChOQggAcgEAxQgFA3AcAbQAeAcApgBQApAAAhgbQAhgcAEg3QAFgwgcgcQgbgcgsAAQgsABgfAbg");
	this.shape_11.setTransform(32.7271,77.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFD650").s().p("AhiitIBVAAIgYEVICmAAIgGBGIj7AAg");
	this.shape_12.setTransform(-1.175,77.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFD650").s().p("AgbiuIBVAAIgfFcIhTAAg");
	this.shape_13.setTransform(-24.5,77.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFD650").s().p("AiqCvIAelcICkAAQCcAAgKB+QgDAigRAZQgRAagYANQgbAPgYAFQgaAHgdAAIhQABIgIBggAhHAIIBJAAQAkAAAUgLQAUgNADghQADgfgTgMQgSgLglAAIhHAAg");
	this.shape_14.setTransform(-50.8919,77.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFD650").s().p("Ah9BrQgpglAGhFQAGhEAvgmQAwglBIAAQBIgBApAmQApAlgGBEQgGBFgvAlQgvAmhIAAQhKAAgoglgAgxg3QgWAWgDAhQgDAiATAWQAUAVAigBQAgAAAWgVQAXgWACghQAEgjgUgUQgTgVgjAAQgfABgXAUg");
	this.shape_15.setTransform(-88.6496,81.6497);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFD650").s().p("AhpCNIAYkSIBCgBIAIAeQA1giA8gCIgGBOQg4gBgzAcIgPCwg");
	this.shape_16.setTransform(-115.7,81.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EFD650").s().p("AipCuIAdlbIClAAQCcgBgLB/QgDAjgQAYQgQAagaAOQgZAOgaAGQgcAHgaAAIhQAAIgJBfgAhGAIIBIAAQAkAAAUgLQAUgMADgjQADgegTgLQgSgMglAAIhHAAg");
	this.shape_17.setTransform(-146.6606,78.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.7,59.7,488.2,36.3);


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

	// sc4bg
	this.instance = new lib.sc4bg();
	this.instance.setTransform(-457,-8,1.034,1.034);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-457,-8,1302.8,517);


(lib.sb_sc4_titlebg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#008BD5","#3C8ACF","#2F2F7F"],[0,0,1],-291.9,0,84,0).s().p("EguXAFsIGQrXMBWfAAAIAALXg");
	this.shape.setTransform(296.8,36.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,593.6,72.8);


(lib.sb_sc3title = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgLBEIAJgSQAFgLADgMQAEgNAAgOQACgNgCgNQgBgNgEgLIgFgRIgIgQIgFgKIATAAQAOAbAFAUQAFAUgBAaQgDAZgIAVQgKAYgPAYIgVAAg");
	this.shape.setTransform(467.8661,68.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhABLIAEgsIgNAFQgEgHgDgCQAdgKAUgRIgrAAIABgKIA1AAQAJgKAEgGIg0AAIADgvIA3AAIgDAsIAKACIgKARIAwgBQgJgFgLgEIAGgHIgQAAIAEguIA3AAIgDAuIglAAQAQAHAGAFIgEAEIAeAAIgBALIgoAAQAbAOANAMIgKAHIgHgGIgEAtIgMAAIABgEIgfABIgBAFIgLAAIAEg1IAtAAQgSgMgTgJIggAAQgNANgPAJIAlAAIgEAzIgMAAIAAgEIgeAAIAAAGgAgzA7IAeAAIACgbIgeAAgAARA6IAfAAIACgaIgfAAgAgtg+IgCAaIAfgBIACgagAAcg/IgCAaIAhAAIACgag");
	this.shape_1.setTransform(452.125,68.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgBOIACgPIhyABIABgKIAaAAIADgsIgUAAIABgJIgIgDQALgLACgRIABgJIA/gBIgDAaIg3ABQgCAJgHAEICMAAIAAAJIgXAAIgDAtIAagBIgBAJIgaABIgBAPgAgoAtIgBAJIBMAAIAAgJgAgnAbIgBAKIBMgBIABgKgAglAKIgBAJIBLgBIABgJgAg2geIgBAKIAPAAIABgNIgPAAgAgdghIgBANIARAAIABgNgAgBgJQAPgDAOgFQgJgGgHgLIgEAAIAAgHQgCgEgEgCQAQgHAAgKIABgIIAsAAIgBAQQgBABAAAAQABABAAABQAAAAAAABQABAAABAAIAJgBIAIAAIAAAIIgIAAIgMABQgHAAgCgDQgCgDAAgGIABgHIgXAAQgBANgOAIIAzgBIAHADQgHANgPAKQAMAEARADQgEADgDAGQgUgDgNgGQgNAGgXAEQgBgFgCgEgAAXgiQAFAGAKAHQALgGAHgIgAhBg1IAbAAIABgIIghAAIABgHIAggBIABgIIAMAAIgBAIIAeAAIAAAHIgeABIgBAHIAaAAIAAAIIhCABg");
	this.shape_2.setTransform(434.75,68.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhOBCIARAAQAAAAABAAQAAgBABAAQAAAAAAgBQAAgBAAAAIAEgtIgXAHIgCgMIAagIIADgkIgYAAIABgLIAYgBIACgiIANAAIgDAiIASAAIgBAMIgSAAIgCAgIARgDIABAKIgTAGIgDAwQgCALgFACQgGADgSAAQAAgGgCgGgAABBHQAXgRANgdIgPAAQgRAcgdAUQgDgFgFgDQAagPAQgZIgOAAQgMAMgIAGIgJgHQAWgPAMgSIgWAAIABgKIBmgBIgBAKIhFABIgIAMIBGgBIgBAFQgHAvgGAGQgDAEgIABIgSAAQAAgIgCgDIARABQADAAACgCQAFgFAFgjIgMAAQgOAggZAUIgJgGgAgEhIIBOgBIgFA3IhMAAgAAFgpIgBAOIA2AAIABgOgAAGg/IgBAOIA3gBIABgNg");
	this.shape_3.setTransform(417.1,68.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhQBCQApgHAdgOQgXgRgMgcIAEAAIgSAAIABgMIA5gBIABgaIhBABIABgNIBBAAIADgaIAMAAIgBAaIBCgBIgBANIhCAAIgCAaIAoAAIADgBIAIAGQgQAgghAVQAaAOAnAFQgFAFgEAHQgrgGgbgRQgeARgsAIQgCgGgEgGgAgfAAQALAYAWAOQAcgQAOgXg");
	this.shape_4.setTransform(399.15,68.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrA/QgPgLABgVQABgMALgKQAJgIAMgEQgYgMACgTQABgSAQgLQAQgKAVAAQAXAAAOAJQAOALgBASQgBAKgIAJQgJAJgKAEQAMADAIAJQAJAJgBANQgCAVgRALQgRALgYAAIgCAAQgYAAgPgLgAgZANQgKAIgBAKQgBANALAGQAKAGAPAAQAOAAALgGQAMgGABgNQABgKgJgIQgJgIgSAAQgQAAgLAIgAgQgxQgJAHgBAKQAAAIAIAHQAIAHANAAQANAAAKgHQAKgHABgJQABgKgJgGQgIgGgOAAQgOAAgJAGg");
	this.shape_5.setTransform(383.4252,68.326);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAvQgFgUABgbQADgZAIgVQAIgSARgdIAVAAIgaArIgIAYQgEAPAAALQgBAKABARQABALAEANIAGARQACAGAFAKIAGAKIgUAAQgOgbgFgUg");
	this.shape_6.setTransform(369.7089,69.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvCaQgGgKgHgGQAkgRAPggQAKgZAHg0QgPACgKAEQgEgQgIgYQAMgEAPgWQAIgKARgcIgsAAIAEgoIA+gBIAUgsIAvAMIgRAgIBYgBIgDAoIhsABQgSAdgWAdIBPgIIgPgcIAlgQQAhA2AKAjIgoARQgDgMgGgPIgPACIgJBwQAAAIABADQABACAFgBIAPAAQAFAAACgJQACgIADggQAGAFAMAEQAKAFAJABQgGAqgLAPQgKAPgUAAIgbABQgZAAgIgLQgHgLADgdIAIhsIgWACQgHBCgPAiQgUArgrAXQgDgIgIgKgAi2CZQAMgZAJg5IAhAFQgHA0gPAlQgGgEgagIgAh4BLIAggIQAFAxgBAaIghAIQABgggEgrgAhOBCIAegKQAJAcAFAfIggALQgCgXgKglgAipAVQAMgDATgVQALgKANgSQgjAEgGAEQgDgQgHgXQAJgCANgRQAIgKAOgYQASgeAKgaIAnARQgaAvghAsIAZgCQAWghAKgWIAiAWQgYApgfAmIAdgMQASAoADAgIggANIgCgQQhQAOgRAHQgEgVgHgRgAhrANIAmgGQgEgPgFgLIgdAgg");
	this.shape_7.setTransform(342.85,60.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhKCBIAwABQAIgBAAgFIAFhDQhiAIgQAGQgGgagEgMQATgDAhgQQAagLAjgTQhFAFgMAFQgEgTgGgVQALgBAWgLQAbgMAjgZQg4ALgzAGQgBgRgJgTQCcgWBTgiIAeAiQgrAQhCAPIATANQggAWghATIA/gEQAXgPATgOIAeAcQg7ArhHAgIBpgIIgXgYIAngTQAtAvAVAhIgoAXQgGgNgLgMIhRAHIgFBIQgBAQgFAJQgGAJgMAFQgQAHgvAAQgDgUgKgWgAioCCQAwgZAggmIAsAPQglAsgzAgQgVgTgPgJgAAxBUIAmgXQA2AkAXAeIgoAZQgWgcg1gog");
	this.shape_8.setTransform(304.8,60.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah+BTIDugCIgHBZIgqAAIABgIIicACIgBAIIgoABgAhZCEIgCAKICcgBIABgKgAhXBoIgBAKICbgBIABgKgAivAtIBfAAQgEgKgFgHIAMgDIg5AAIACgZIBsgBIgFgLIAqgKQAEAJAEAMIBtgBIgCAZIgsABIgTATIBfAAIgCAbIlPADgAgwAZQAHAMABAFIgHACIBKAAIgDgBQAIgIAGgLgAitgVQAtgPAYgXQgsAFgJAEIAAgBQgDgNgEgMQAJgCAPgJIATgOQgYACgHADIgHgaQAGgCAJgGQAXgUAPgUIAXAPQgQASgVAQIAYgBIAUgVIAXAOQgeAdghAXIAegDIAJgPIAZAEIAEg6IAiAAIgFgOIAjgJQAGANACAKIAlAAIgGBTIgOABQANAMAKAPIAJh4IBLgBIAGgCIAYAMQgJAUgVAiQAZAUgCAUQgBAVgQAJQgIAEgKACQgLACgQgBQAAgSgHgLIAUAAQAFABAEgCQAGgDABgIQABgLgagUIASgnIgaAAIgJB6IgjAAIACgTIgWALQgCgGgHgJQhUARgHAFQgCgPgJgNQAOgGABgQIADgXQggA5hLAdQgEgOgKgMgAgShBIgBARIAhgGIgHgIIAHgDgAgPhgIgBALIAngBIAAgLgAgNiBIgBAMIAnAAIABgMg");
	this.shape_9.setTransform(268.95,60.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah7AGID0gCIgNCmIguABIABgNIiZACIgBAMIgsABgAhWBiIgBAaICYgBIACgagAhRApIgCAYICZgBIACgYgAikg2IBRAAQgDgTgJgTIAlgHIhSAAIADgmIB9gBQgEgOgFgMIAtgIQAIAOAGAUIB3gBIgDAmIhNABIAiAGIgVAmIBOgBIgDAnIlMADgAgyhjQANAVADAXIBLgBQANgZAHgTg");
	this.shape_10.setTransform(231.25,61.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFD650").s().p("AiDi3IEkgCIgFBKIjLACIgGBHIC4gCIgGBHIi3ABIgGBPIDOgCIgFBLIkpACg");
	this.shape_11.setTransform(191.8,60.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFD650").s().p("AikCtIAHhRQBaAXAzAAQAsAAAVgIQAUgHACgSQABgagygMIhdgXQgpgLgUgZQgVgZADgnQAJhvCogBQAzgBBPASIgGBOIgtgKQgRgEgXgCQgVgCgeAAQhGABgCAgQgCAVAmAKIBgAZQBfAXgGBLQgEA4gtAfQgtAfhRABIgHAAQhHAAhLgTg");
	this.shape_12.setTransform(151.4178,61.2017);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFD650").s().p("AhaC2QgigLgcgWQgagVgPgnQgNgoADgxQAEgwAVglQAVglAfgWQAggXAkgMQAlgLAkgBQAnAAAhAMQAjALAbAVQAdAXAOAlQAPAlgDAuQgEAygUAnQgUAngfAXQggAXgjALQgmALgmAAQgrAAghgKgAAIhwQgtAAgiAeQghAdgFA1QgEA5AeAdQAfAeAsgCQAsAAAjgdQAigdAFg7QAEgzgegeQgcgcguAAIgCAAg");
	this.shape_13.setTransform(108.3721,61.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFD650").s().p("AiRi3ICagCQCpgBgHBeQgDAbgSAWQgSAXgjAMIAAACQAiAFAXAUQAXAWgCAiQgJBsikABIiwACgAhIAcIgGBWIBVgBQAlgBARgJQASgKACgWQACgagTgJQgSgIgnAAgAg9hxIgGBPIBEAAQAhgBATgIQAUgJACgYQABgYgSgHQgSgHgfAAg");
	this.shape_14.setTransform(62.687,62.0238);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45.2,42,425.6,38.8);


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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape.setTransform(120.2869,281.3451,0.9315,2.4326,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape_1.setTransform(-460.4368,126.1515,0.9315,2.4327);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.instance = new lib.sc3bg();
	this.instance.setTransform(-597,-26,1.6246,1.6245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CA0000").ss(1,1,1).p("EifHgtPME+PAAAMAAABafMk+PAAAg");
	this.shape_2.setTransform(351.375,240.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("EifHAtPMAAAhaeME+PAAAMAAABaeg");
	this.shape_3.setTransform(351.375,240.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-668,-514.2,2038.8,1436);


(lib.sb_sc3_titlebg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#008BD5","#3C8ACF","#2F2F7F"],[0,0,1],-345.9,0,30,0).s().p("Eg2zAFsIGQrXMBnXAAAIAALXg");
	this.shape.setTransform(350.8,36.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,701.6,72.8);


(lib.an_shadow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EgxAgxAMBiBAAAMAAABiBMhiBAAAg");
	this.shape.setTransform(924.8576,924.8602,2.3269,2.3385,44.9997);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-313.7,0,313.7,0).s().p("EgxAAxBMAAAhiBMBiBAAAMAAABiBg");
	this.shape_1.setTransform(924.8576,924.8602,2.3269,2.3385,44.9997);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EigVABxMCiGiiGMCelCelMiiGCiGg");
	this.shape_2.setTransform(944.375,943.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.204,0.776,1],-507.4,-507.4,507.5,507.4).s().p("EigVABxMCiGiiGMCelCelMiiGCiGg");
	this.shape_3.setTransform(944.375,943.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eie+ADIMCiGiiGMCb3Cb3MiiGCiGg");
	this.shape_4.setTransform(963.85,963.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.216,0.765,1],-498.7,-498.7,498.7,498.7).s().p("Eie+ADIMCiGiiGMCb2Cb3MiiFCiFg");
	this.shape_5.setTransform(963.85,963.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EidmAEfMCiFiiFMCZICZIMiiFCiGg");
	this.shape_6.setTransform(983.375,982.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.227,0.749,1],-490,-489.9,490,490).s().p("EidmAEfMCiFiiGMCZICZJMiiFCiGg");
	this.shape_7.setTransform(983.375,982.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EicPAF2MCiFiiFMCWaCWaMiiFCiFg");
	this.shape_8.setTransform(1002.875,1001.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.239,0.733,1],-481.2,-481.2,481.3,481.3).s().p("EicPAF2MCiFiiFMCWaCWaMiiFCiFg");
	this.shape_9.setTransform(1002.875,1001.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eia4AHNMCiGiiFMCTrCTsMiiGCiFg");
	this.shape_10.setTransform(1022.375,1020.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.251,0.722,1],-472.5,-472.5,472.6,472.6).s().p("Eia4AHNMCiGiiFMCTrCTsMiiGCiFg");
	this.shape_11.setTransform(1022.375,1020.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiZhAIlMCiGiiGMCQ9CQ9MiiGCiGg");
	this.shape_12.setTransform(1041.875,1039.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.263,0.706,1],-463.8,-463.8,463.9,463.9).s().p("EiZhAIlMCiGiiGMCQ9CQ9MiiGCiGg");
	this.shape_13.setTransform(1041.875,1039.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiYKAJ8MCiGiiGMCOPCOPMiiGCiGg");
	this.shape_14.setTransform(1061.4,1058.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.275,0.69,1],-455.1,-455.1,455.1,455.1).s().p("EiYJAJ8MCiFiiFMCOPCOOMiiGCiGg");
	this.shape_15.setTransform(1061.4,1058.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiWzALTMCiGiiFMCLgCLgMiiFCiFg");
	this.shape_16.setTransform(1080.9,1077.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.29,0.678,1],-446.4,-446.4,446.4,446.4).s().p("EiWzALTMCiGiiFMCLhCLgMiiGCiFg");
	this.shape_17.setTransform(1080.9,1077.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiVbAMqMCiFiiFMCIyCIyMiiGCiFg");
	this.shape_18.setTransform(1100.4,1096.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.302,0.663,1],-437.7,-437.6,437.7,437.7).s().p("EiVbAMqMCiFiiFMCIyCIyMiiGCiFg");
	this.shape_19.setTransform(1100.4,1096.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiUEAOCMCiGiiGMCGDCGDMiiGCiGg");
	this.shape_20.setTransform(1119.9,1116.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.314,0.647,1],-428.9,-428.9,429,429).s().p("EiUEAOCMCiGiiGMCGDCGDMiiGCiGg");
	this.shape_21.setTransform(1119.9,1116.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiStAPZMCiGiiGMCDVCDVMiiGCiGg");
	this.shape_22.setTransform(1139.425,1135.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.325,0.631,1],-420.2,-420.2,420.3,420.3).s().p("EiStAPZMCiGiiGMCDVCDVMiiGCiGg");
	this.shape_23.setTransform(1139.425,1135.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiRWAQwMCiGiiGMCAnCAnMiiGCiGg");
	this.shape_24.setTransform(1158.9,1154.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.337,0.62,1],-411.5,-411.5,411.5,411.5).s().p("EiRVAQwMCiFiiGMCAnCAnMiiGCiGg");
	this.shape_25.setTransform(1158.9,1154.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiP+ASHMCiFiiFMB94B94MiiFCiFg");
	this.shape_26.setTransform(1178.425,1173.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.349,0.604,1],-402.8,-402.8,402.8,402.8).s().p("EiP+ASHMCiFiiFMB94B94MiiFCiFg");
	this.shape_27.setTransform(1178.425,1173.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiOnATeMCiFiiFMB7KB7KMiiFCiFg");
	this.shape_28.setTransform(1197.925,1192.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.361,0.588,1],-394,-394,394.1,394.1).s().p("EiOnATeMCiFiiFMB7KB7KMiiFCiFg");
	this.shape_29.setTransform(1197.925,1192.525);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiNQAU2MCiGiiGMB4bB4cMiiGCiFg");
	this.shape_30.setTransform(1217.425,1211.65);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.373,0.576,1],-385.3,-385.3,385.4,385.4).s().p("EiNQAU1MCiGiiFMB4bB4bMiiGCiGg");
	this.shape_31.setTransform(1217.425,1211.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.384,0.561,1],-313.7,0,313.7,0).s().p("EgxAAxBMAAAhiBMBiBAAAMAAABiBg");
	this.shape_32.setTransform(1236.9406,1230.7932,1.698,2.3385,44.9997);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiKCAYEMCiGiiGMBx/Bx/MiiGCiGg");
	this.shape_33.setTransform(1248.85,1242.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.373,0.576,1],-364.7,-364.7,364.8,364.7).s().p("EiKCAYEMCiGiiFMBx+Bx+MiiFCiGg");
	this.shape_34.setTransform(1248.85,1242.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiIKAZ7MCiFiiFMBuQBuQMiiFCiFg");
	this.shape_35.setTransform(1260.775,1254.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.357,0.592,1],-352.8,-352.7,352.8,352.8).s().p("EiIKAZ7MCiFiiFMBuQBuQMiiFCiFg");
	this.shape_36.setTransform(1260.775,1254.625);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiGTAbyMCiFiiFMBqiBqiMiiFCiFg");
	this.shape_37.setTransform(1272.725,1266.575);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.345,0.612,1],-340.8,-340.8,340.9,340.9).s().p("EiGTAbyMCiFiiFMBqiBqiMiiFCiFg");
	this.shape_38.setTransform(1272.725,1266.575);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiEcAdqMCiGiiGMBmzBmzMiiGCiGg");
	this.shape_39.setTransform(1284.675,1278.525);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.329,0.627,1],-328.9,-328.9,329,329).s().p("EiEcAdqMCiGiiGMBmzBmzMiiGCiGg");
	this.shape_40.setTransform(1284.675,1278.525);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiCkAfhMCiFiiGMBjFBjFMiiGCiFg");
	this.shape_41.setTransform(1296.6,1290.45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.314,0.643,1],-317,-317,317,317).s().p("EiCkAfhMCiFiiGMBjFBjFMiiGCiFg");
	this.shape_42.setTransform(1296.6,1290.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiAtAhYMCiFiiFMBfWBfWMiiFCiFg");
	this.shape_43.setTransform(1308.525,1302.375);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.302,0.659,1],-305.1,-305,305.1,305.1).s().p("EiAtAhYMCiFiiFMBfWBfWMiiFCiFg");
	this.shape_44.setTransform(1308.525,1302.375);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eh+2AjPMCiFiiFMBboBboMiiFCiFg");
	this.shape_45.setTransform(1320.475,1314.325);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.29,0.678,1],-293.1,-293.1,293.2,293.2).s().p("Eh+2AjPMCiFiiFMBboBboMiiFCiFg");
	this.shape_46.setTransform(1320.475,1314.325);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eh8/AlHMCiFiiGMBX6BX5MiiGCiGg");
	this.shape_47.setTransform(1332.4,1326.25);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.275,0.694,1],-281.3,-281.3,281.2,281.2).s().p("Eh8/AlGMCiGiiFMBX5BX6MiiGCiFg");
	this.shape_48.setTransform(1332.4,1326.25);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eh7IAm+MCiGiiGMBULBULMiiGCiGg");
	this.shape_49.setTransform(1344.325,1338.175);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.263,0.71,1],-269.3,-269.3,269.4,269.4).s().p("Eh7IAm+MCiGiiGMBULBULMiiGCiGg");
	this.shape_50.setTransform(1344.325,1338.175);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eh5RAo1MCiGiiGMBQcBQdMiiFCiFg");
	this.shape_51.setTransform(1356.25,1350.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.247,0.725,1],-257.4,-257.4,257.4,257.4).s().p("Eh5QAo1MCiFiiGMBQcBQdMiiFCiGg");
	this.shape_52.setTransform(1356.25,1350.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eh3ZAqsMCiFiiFMBMuBMtMiiGCiGg");
	this.shape_53.setTransform(1368.2,1362.05);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.231,0.741,1],-245.5,-245.5,245.5,245.5).s().p("Eh3ZAqsMCiFiiFMBMuBMuMiiGCiFg");
	this.shape_54.setTransform(1368.2,1362.05);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eh1iAsjMCiFiiFMBJABI/MiiGCiGg");
	this.shape_55.setTransform(1380.15,1374);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.22,0.761,1],-233.6,-233.6,233.5,233.5).s().p("Eh1iAskMCiFiiGMBJABI/MiiFCiGg");
	this.shape_56.setTransform(1380.15,1374);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EhzrAubMCiGiiGMBFRBFRMiiGCiGg");
	this.shape_57.setTransform(1392.075,1385.925);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.204,0.776,1],-221.6,-221.6,221.6,221.6).s().p("EhzrAubMCiGiiGMBFRBFRMiiGCiGg");
	this.shape_58.setTransform(1392.075,1385.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:2.3269,x:924.8576,y:924.8602}},{t:this.shape,p:{scaleX:2.3269,x:924.8576,y:924.8602}}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_32},{t:this.shape,p:{scaleX:1.698,x:1236.9406,y:1230.7932}}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,-111,2244.5,2238.3);


(lib.an_sc33Dcircle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(103,205,250,0)").ss(2).p("ACQAAQAAA7grAqQgqAqg7AAQg6AAgqgqQgrgqAAg7QAAg7ArgqQAqgqA6AAQA7AAAqAqQArArAAA6g");
	this.shape.setTransform(15.3594,15.3721,0.6189,0.6189);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(103,205,250,0.322)").ss(2).p("AiPAAQAAg7AqgqQAqgqA7AAQA8AAAqAqQAqAqAAA7QAAA8gqAqQgqAqg8AAQg7AAgqgqQgqgqAAg8g");
	this.shape_1.setTransform(15.4,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(103,205,250,0.569)").ss(2).p("Ai5AAQAAhNA2g2QA2g2BNAAQBNAAA2A2QA3A3AABMQAABNg3A2Qg2A3hNAAQhNAAg2g3Qg2g2AAhNg");
	this.shape_2.setTransform(15.425,15.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(103,205,250,0.737)").ss(2).p("AjWAAQAAhZA+g/QA/g+BZAAQBZAAA/A+QA/BBAABXQAABZg/A/Qg/A/hZAAQhZAAg/g/Qg+g/AAhZg");
	this.shape_3.setTransform(15.425,15.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(103,205,250,0.847)").ss(2).p("AjqAAQAAhhBEhFQBFhEBhAAQBhAABFBEQBFBHAABfQAABhhFBFQhFBFhhAAQhhAAhFhFQhEhFAAhhg");
	this.shape_4.setTransform(15.45,15.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(103,205,250,0.922)").ss(2).p("Aj2AAQAAhnBHhIQBIhHBnAAQBmAABJBHQBIBLAABkQAABmhIBJQhJBIhmAAQhnAAhIhIQhHhJAAhmg");
	this.shape_5.setTransform(15.45,15.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(103,205,250,0.965)").ss(2).p("Aj+AAQAAhpBKhLQBLhKBpAAQBpAABLBKQBLBMAABoQAABphLBLQhLBLhpAAQhpAAhLhLQhKhLAAhpg");
	this.shape_6.setTransform(15.45,15.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(103,205,250,0.988)").ss(2).p("AkCAAQAAhsBMhKQBKhMBsAAQBrAABMBMQBMBNAABpQAABrhMBMQhMBMhrAAQhsAAhKhMQhMhMAAhrg");
	this.shape_7.setTransform(15.45,15.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#67CDFA").ss(2).p("AjAAAQAAhPA4g5QA5g4BPAAQBQAAA4A4QA5A6AABOQAABQg5A4Qg4A5hQAAQhPAAg5g5Qg4g4AAhQg");
	this.shape_8.setTransform(15.4399,15.4399,1.3532,1.3532);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#67CDFA").ss(2).p("AkFAAQAAhtBMhMQBMhMBtAAQBsAABMBMQBOBOAABrQAABshOBMQhMBOhsAAQhtAAhMhOQhMhMAAhsg");
	this.shape_9.setTransform(15.45,15.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#67CDFA").ss(2).p("Aj+AAQAAhpBKhLQBLhKBpAAQBpAABLBKQBLBMAABoQAABphLBLQhLBLhpAAQhpAAhLhLQhKhLAAhpg");
	this.shape_10.setTransform(15.45,15.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#67CDFA").ss(2).p("AjwAAQAAhkBGhGQBGhGBkAAQBkAABHBGQBGBIAABiQAABkhGBHQhHBGhkAAQhkAAhGhGQhGhHAAhkg");
	this.shape_11.setTransform(15.425,15.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#67CDFA").ss(2).p("AjeAAQAAhcBBhBQBBhBBcAAQBcAABCBBQBBBCAABbQAABchBBCQhCBBhcAAQhcAAhBhBQhBhCAAhcg");
	this.shape_12.setTransform(15.4,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#67CDFA").ss(2).p("AjHAAQAAhSA6g7QA7g6BSAAQBTAAA7A6QA6A8AABRQAABTg6A7Qg7A6hTAAQhSAAg7g6Qg6g7AAhTg");
	this.shape_13.setTransform(15.4,15.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#67CDFA").ss(2).p("AitAAQAAhHAzgzQAzgzBHAAQBIAAAzAzQAzA0AABGQAABIgzAzQgzAzhIAAQhHAAgzgzQgzgzAAhIg");
	this.shape_14.setTransform(15.375,15.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#67CDFA").ss(2).p("ACQAAQAAA7grAqQgqAqg7AAQg6AAgqgqQgrgqAAg7QAAg7ArgqQAqgqA6AAQA7AAAqAqQArArAAA6g");
	this.shape_15.setTransform(15.35,15.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},6).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

	// Layer_3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(103,205,250,0)").ss(3).p("ABYAAQAAAkgaAaQgZAaglAAQgjAAgagaQgagaAAgkQAAgjAagaQAagaAjAAQAlAAAZAaQAaAaAAAjg");
	this.shape_16.setTransform(15.3184,15.3656,0.5415,0.5415);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(103,205,250,0.227)").ss(3).p("AhIAAQAAgdAWgVQAVgWAdAAQAfAAAVAWQAVAVAAAdQAAAegVAVQgVAWgfAAQgdAAgVgWQgWgVAAgeg");
	this.shape_17.setTransform(15.325,15.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(103,205,250,0.424)").ss(3).p("AheAAQAAgmAdgcQAbgcAnAAQAnAAAcAcQAbAcAAAmQAAAngbAcQgcAcgnAAQgnAAgbgcQgdgcAAgng");
	this.shape_18.setTransform(15.3,15.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(103,205,250,0.576)").ss(3).p("AhvAAQAAgtAhggQAhgiAuAAQAuAAAgAiQAhAgAAAtQAAAughAgQggAiguAAQguAAghgiQghggAAgug");
	this.shape_19.setTransform(15.325,15.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(103,205,250,0.698)").ss(3).p("Ah8AAQAAgzAlgkQAkglA0AAQA0AAAkAlQAkAkAAAzQAAA0gkAkQgkAlg0AAQg0AAgkglQglgkAAg0g");
	this.shape_20.setTransform(15.325,15.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(103,205,250,0.792)").ss(3).p("AiHAAQAAg3ApgnQAngpA4AAQA4AAAnApQAoAnAAA3QAAA4goAnQgnApg4AAQg4AAgngpQgpgnAAg4g");
	this.shape_21.setTransform(15.3,15.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(103,205,250,0.859)").ss(3).p("AiOAAQAAg6ArgpQApgrA7AAQA8AAApArQApApAAA6QAAA7gpAqQgpAqg8AAQg7AAgpgqQgrgqAAg7g");
	this.shape_22.setTransform(15.325,15.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(103,205,250,0.91)").ss(3).p("AiUAAQAAg9AtgqQAqgtA+AAQA+AAArAtQArAqAAA9QAAA9grArQgrAtg+AAQg+AAgqgtQgtgrAAg9g");
	this.shape_23.setTransform(15.325,15.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(103,205,250,0.945)").ss(3).p("AiYAAQAAg+AugsQAsguA/AAQBAAAAsAuQAsAsAAA+QAAA/gsAsQgsAuhAAAQg/AAgsguQgugsAAg/g");
	this.shape_24.setTransform(15.325,15.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(103,205,250,0.973)").ss(3).p("AibAAQAAhAAvgsQAsgvBBAAQBBAAAtAvQAtAsAABAQAABAgtAtQgtAvhBAAQhBAAgsgvQgvgtAAhAg");
	this.shape_25.setTransform(15.325,15.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(103,205,250,0.988)").ss(3).p("AidAAQAAhAAwgtQAtgwBBAAQBCAAAtAwQAuAtAABAQAABBguAtQgtAwhCAAQhBAAgtgwQgwgtAAhBg");
	this.shape_26.setTransform(15.325,15.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#67CDFA").ss(3).p("AieAAQAAhBAwgtQAtgwBCAAQBCAAAuAwQAuAtAABBQAABCguAtQguAwhCAAQhCAAgtgwQgwgtAAhCg");
	this.shape_27.setTransform(15.325,15.475);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#67CDFA").ss(3).p("AieAAQAAhBAvguQAugvBCAAQBCAAAuAvQAuAuAABBQAABCguAuQguAvhCAAQhCAAgugvQgvguAAhCg");
	this.shape_28.setTransform(15.325,15.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#67CDFA").ss(3).p("Ah0AAQAAgwAjghQAhgjAxAAQAxAAAhAjQAiAhAAAwQAAAxgiAhQghAjgxAAQgxAAghgjQgjghAAgxg");
	this.shape_29.setTransform(15.3384,15.4737,1.3532,1.3532);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#67CDFA").ss(3).p("AiYAAQAAg+AugsQAsguA/AAQBAAAAsAuQAsAsAAA+QAAA/gsAsQgsAuhAAAQg/AAgsguQgugsAAg/g");
	this.shape_30.setTransform(15.325,15.475);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#67CDFA").ss(3).p("AiRAAQAAg8AsgpQAqgsA8AAQA9AAApAsQArApAAA8QAAA8grAqQgpAsg9AAQg8AAgqgsQgsgqAAg8g");
	this.shape_31.setTransform(15.325,15.475);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#67CDFA").ss(3).p("AiIAAQAAg3ApgoQAngpA5AAQA5AAAnApQAoAoAAA3QAAA5goAnQgnApg5AAQg5AAgngpQgpgnAAg5g");
	this.shape_32.setTransform(15.325,15.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#67CDFA").ss(3).p("Ah9AAQAAgzAlglQAlglA0AAQA0AAAlAlQAkAlAAAzQAAA0gkAlQglAlg0AAQg0AAglglQglglAAg0g");
	this.shape_33.setTransform(15.325,15.425);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#67CDFA").ss(3).p("AhyAAQAAgvAjghQAhgiAvAAQAvAAAhAiQAiAhAAAvQAAAvgiAhQghAjgvAAQgvAAghgjQgjghAAgvg");
	this.shape_34.setTransform(15.325,15.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#67CDFA").ss(3).p("AhlAAQAAgpAfgeQAdgeApAAQArAAAdAeQAeAeAAApQAAAqgeAeQgdAegrAAQgpAAgdgeQgfgeAAgqg");
	this.shape_35.setTransform(15.325,15.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#67CDFA").ss(3).p("ABYAAQAAAkgaAaQgZAaglAAQgjAAgagaQgagaAAgkQAAgjAagaQAagaAjAAQAlAAAZAaQAaAaAAAjg");
	this.shape_36.setTransform(15.325,15.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-11.7,54.3,54.3);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AkaK1IAA1pII1AAIAAVpg");
	mask.setTransform(28.325,69.275);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAOAHQgBACgDgBIgWgKQgDgBACgDQABgCADABIAWAJQACACgBADg");
	this.shape.setTransform(22.0029,54.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAOgFQACADgDABIgWAJQgDACgBgEQgCgCADgCIAWgJQADgCABAEg");
	this.shape_1.setTransform(12.3364,53.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgfAQQACgKgHgCIANgOQABgBACgBQADgCAFAAIAdAAIAEABQADADADAEIAJAMQgIAAAAAKQgggLgbALg");
	this.shape_2.setTransform(17.3,52.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAQgFQgKAKgUACQgBgFAEgEQAEgGAXADg");
	this.shape_3.setTransform(20.19,58.2776);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgOgFQAJALAUABQABgFgDgEQgGgGgVADg");
	this.shape_4.setTransform(14.2861,58.2776);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgvALQAFgKAIgEQANgIAWABQAYABALAGQAHADAFAL");
	this.shape_5.setTransform(17.05,55.7234);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAAgdQAZAAAQAIQARAIAAANQAAAMgRAJQgRAJgYAAQgXAAgRgJQgRgJAAgMQAAgNARgIQAQgIAYAAg");
	this.shape_6.setTransform(17.125,56.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAgAAQAAAGgDADQgEAEgGAAIglAAQgFAAgEgEQgEgEAAgFQAAgEAEgEQAEgEAFAAIAmAAQAFAAAEAEQAEAEgBAEg");
	this.shape_7.setTransform(40.2778,82.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AA8ABQAAgIgGgHQgHgGgJAAIhKgBQgJAAgHAGQgGAGAAAJQgBAIAHAHQAGAGAJAAIBLABQAJAAAGgGQAHgGAAgJg");
	this.shape_8.setTransform(40.3482,81.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("ABRgFIgBANQAAAdgVAUQgVAVgdgBIgTAAQgdAAgUgVQgVgVABgdIAAgNQAAgdAVgUQAVgVAdABIATAAQAdAAAVAVQAUAVAAAdg");
	this.shape_9.setTransform(40.4,76.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAhAAQAAAGgEAEQgFAEgFAAIglAAQgFAAgEgEQgEgEAAgGQAAgEAEgFQAEgEAFAAIAlAAQAFAAAFAEQAEAFAAAEg");
	this.shape_10.setTransform(17.4,81.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AA6AAQAAgIgGgGQgGgGgJAAIhJAAQgIAAgHAGQgGAGAAAIQAAAJAGAGQAHAGAIAAIBJAAQAJAAAGgGQAGgGAAgJg");
	this.shape_11.setTransform(17.325,81.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("ABPgNIAAAbQAAAagTASQgSATgbAAIgeAAQgaAAgSgTQgTgSAAgaIAAgbQAAgaATgTQASgSAaAAIAeAAQAaAAATASQATATAAAag");
	this.shape_12.setTransform(17.475,76.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAhAAQAAAGgEAEQgFAFgGAAIgkAAQgGAAgEgFQgEgEAAgGQAAgFAEgEQAEgFAGAAIAkAAQAGAAAFAFQAEAEAAAFg");
	this.shape_13.setTransform(40.9,105.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AA7ABQABgIgHgGQgGgHgJAAIhKgCQgJAAgGAGQgHAHAAAJQgBAIAHAHQAGAGAJABIBKABQAJAAAHgGQAGgHAAgJg");
	this.shape_14.setTransform(40.925,105.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("ABUAAIAAADQAAAggXAWQgXAWgggBIgPAAQggAAgWgXQgVgXAAggIAAgCQABggAXgWQAXgWAfABIAPAAQAgABAWAWQAWAXgBAfg");
	this.shape_15.setTransform(40.9516,99.5766);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAhAAQAAAGgFAEQgEAEgGAAIgjAAQgGAAgEgEQgFgEAAgGQAAgFAFgEQAEgEAGAAIAjAAQAGAAAEAEQAFAEAAAFg");
	this.shape_16.setTransform(16.3,104.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("ABlgIIAAAUQAAAEgDAEQgDADgFAAIi0gDQgEAAgDgDQgDgDAAgFIAAgTQAAgFADgDQADgEAEAAIC0ADQAFAAADADQADADAAAFg");
	this.shape_17.setTransform(20.025,104.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AB8gmIgBBPQgBAQgLALQgMALgQAAIiogEQgQAAgLgMQgLgLAAgQIADhNQAAgQAMgLQALgLAQABICnABQAQAAALALQALAMAAAQg");
	this.shape_18.setTransform(20.1489,99.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AingLQATAJAkAGQAyAIA/AAQBFgBAogFQAigEAZgJ");
	this.shape_19.setTransform(28.8,99.8014);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgpAGQALAAADAAQAFgBAOgDQAcgGABAAIAVgB");
	this.shape_20.setTransform(51.75,73.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgogFIAaADIAlAHIASAC");
	this.shape_21.setTransform(5.475,72.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgfAXIACg1IAcgFQAXgBAaADQAOACAHADIgBAzIgWANIg2AAgAhDAXIAkAA");
	this.shape_22.setTransform(27.05,49.4875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAwBtICfAAQANg0AFgfQAGghAAgLQABgVgHgGQgUgQgwgSQhKgdhQAAQhPgBhCAVQgaAIgnATQgQAHgEAKQgGAMADAcQAFAlAOBIIBDAC");
	this.shape_23.setTransform(29.0533,40.8744);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AA1DPQAAgFgFhwQgFh6gQgvQgQg1gIgPQgTgogkgT");
	this.shape_24.setTransform(47.475,21.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgjBEQADgdALgXQAMgYAKgOQALgNAfggQgQAIgMAKQgTAQgVAcQgcAlASAkg");
	this.shape_25.setTransform(8.232,10.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAhBFQABgXgMgcQgMgZgRgXQgPgTgTgTQAYARALAKQAOAOAMARQAOATADAIQAEAIAAAKQABAfgJADg");
	this.shape_26.setTransform(50.2048,10.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("Ai3ANQAbgGAmgLQANgEAhgEQAkgEAhAAQAhABAmAEQAjAEAOAEQAJADASAFQATAGAVAG");
	this.shape_27.setTransform(29.275,3.8222);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAZCSQgFhUgIg3QgOhZgMghIgKge");
	this.shape_28.setTransform(42.45,15.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgbCRQADgvAJhCQAMhRAThAQADgNAJgS");
	this.shape_29.setTransform(15.8,14.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("Ag5DPQAAgTAHhmQAIhoAKgnQAVhMAUgdQANgTAKgIQAGgGAUgL");
	this.shape_30.setTransform(10.975,21.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAAgNQAEAAAAANQgBAOgDAAQgEAAABgOQAAgNADAAg");
	this.shape_31.setTransform(54.715,97.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgEAOIgBAVQADACADgIQADgGACgUQABgSgCgJQgBgFgDgDIgCgCIgBAV");
	this.shape_32.setTransform(55.095,97.9368);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAAgOQACAAABAOQAAAPgDAAQgBAAgBgPQgBgOADAAg");
	this.shape_33.setTransform(1.9639,97.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAFAOIAAAVQgHgEgCgQQgCgSACgQQABgJAHgGIAAAW");
	this.shape_34.setTransform(1.5,97.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAAgOQAEAAAAAOQAAAPgEAAQgDAAAAgPQAAgOADAAg");
	this.shape_35.setTransform(1.675,67.05);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AACALIAAgVIgDAA");
	this.shape_36.setTransform(1.475,64.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAAALIABAAIAAgV");
	this.shape_37.setTransform(1.5,69.575);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAAgOQAEAAAAAOQAAAPgEAAQgDAAAAgPQAAgOADAAg");
	this.shape_38.setTransform(55.625,67.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAAAKIAAgTIABAA");
	this.shape_39.setTransform(55.85,65.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AACAKIgDAAIAAgT");
	this.shape_40.setTransform(55.75,70.25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AANgCQgLgJgBgVQgBAJgHATQgEARgCAU");
	this.shape_41.setTransform(52.95,44.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgNgFQAGgCACgFQACgFADgQQANA6AAAJ");
	this.shape_42.setTransform(4.95,44.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgalhIAEgCIAMAGIAGAXQAHAdAGAdQAMA4ADBKQABAegBAtQgBAYgCAtQAAAagGBZQgHBfABARIADBJQABAWADAIQABAFAKAQ");
	this.shape_43.setTransform(7.175,82.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAGgVQgHgDgCAAQgDABAAAHIAAAbQABAFAEAEQABABAHAE");
	this.shape_44.setTransform(55.025,46.6719);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgHAYQAKgGABgBQADgCAAgHQABgHgBgQQAAgHgDgBQgCAAgJAC");
	this.shape_45.setTransform(2.825,46.0958);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgcFkQAJgOACgFQADgKABgPQAAgZAAgWQgCgkgDg2QgHhzgBgkQgBhVABg1QADhoAkh9QAGgGAGgGIAFAD");
	this.shape_46.setTransform(50.35,82.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgUEiQAQgqABgCQAEgTACgcQABhIABgmQADg4ACg8QgBimABgoIAAgpQgBgQAGABQADABADAE");
	this.shape_47.setTransform(52.275,75.5971);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AjXhjQAIA4AAACQACAUAEAmQACAXAGAKQAIAOAUAIQBIAcBhAAQBxAAA4gXQATgIAJgPQAHgLACgTQAIg9gCg3");
	this.shape_48.setTransform(28.2375,113.825);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgNkeQAGgCACAAQACAAgBAHQgFCfABBgQABCoABAbQABAnADATQADAaANAk");
	this.shape_49.setTransform(4.925,75.025);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgmgFQACABAGAGQAEADAEAAQAEABACADQACABAHAIQAGAFAJAAQAIAAAEgFQAEgFAHgPQAIgQAAgE");
	this.shape_50.setTransform(52.525,104.05);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AglgSQAJATADAGQAHALAGAAQAIABAEgBQADgBAFgDQACgDAHgFQAEgFACgBQACAAAEgBQAFgCAEgG");
	this.shape_51.setTransform(4,103.925);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("Ai/gVQAIAPAoALQA3ARBZgBQBcgBAzgNQAkgHAMgN");
	this.shape_52.setTransform(28.45,132.8528);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgoBFQAsgMATgPQAEgEACgEQAAAAABgNQADgOACgWQABgTABgJQABgRADgEQAAgFgDACQgDACgCAJQgDAOgFAjQgDAVgEAIQgEANgKAFQgOAJgeAUg");
	this.shape_53.setTransform(48.675,127.8313);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgnhBQAFACABATQAAALABAbQACAaADARIARALQAVAOAdAHQgUgRgUgKQgHgEgDgDQgFgFgCgKQgHgWgEgmQgCgUgCgEQgCgHgFAGg");
	this.shape_54.setTransform(8.075,127.381);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgGGBQgDgLgCgEQgDgJgDgUQgEgeAFgUIAIgiIAVjWQACgnABgfQAEhygBgnQgBhFgCgZQgFg/gOguIAFAiQAGAsACAxQAEBOACCX");
	this.shape_55.setTransform(10.6076,94.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgNgTQgChmAAgoQAChXABgPQAFhJARgvIgHAjQgGAsgCAxQgEBOgECegAAAGAQAFgKACgEQANg2gHgfIgFgbIgTjXQgBgigBgc");
	this.shape_56.setTransform(46.8668,94.725);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AiwgVIAPASQAPAQAfADQAQACBmAEQBngEAKgBQAsgGARgd");
	this.shape_57.setTransform(28.35,136.125);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,56.7,138.6), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("Ak/LEIAA2HIJ/AAIAAWHg");
	mask.setTransform(32.025,70.825);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AEVFPQAAgngCiNIgDiFQAEgMABgIQABgIgBgVQgBgKgCgGIgDgEIgDiXQATALAIADQAKADADgFQAFgHgFgMQgHgSgfgTQADgxACgaQADguAAggQABgwgBgVQAAgigEgWQgEgVgFgRQgFgQgCgIQgEgOgFgIQgGgJgLgJQglgfgSgNQgUgQgXAAQgEADgRgHQgMgFgmgDQgjgEgeAAQgrAAgyAJQgcAFgDAAQgTAAgLAHQgOAJgYARQgfAXgIAIQgJAIgBAEQgBAEgGASQgJAbgEAQQgHAcgBAkQgEBcAHCIQgqAbAAAcQAAAKAUgIQAKgEAKgHIgFCXIgDALQgEANAAANQAAAUAFALIgFDOQgCAogFBMIAABvQAAAQAPA/QASBQAGAlQAYARAQAIQAiASAeAEQAXADAXAEQAXACBLAAQBAAAASgBQApgBAZgGQAWgGAZgOQADgCAlgXQAchzAOhCQACgLAAg9g");
	this.shape.setTransform(32.019,70.825);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,64.1,141.7), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("Ak2K7IAA11IJsAAIAAV1g");
	mask.setTransform(31.05,69.875);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhkK5IgugHQgegEgigSQgQgIgYgRQgGglgShQQgPg/AAgQIAAhvQAFhMACgoIAFjOQgFgLAAgUQAAgNAEgNIADgLIAFiXQgKAHgKAEQgUAIAAgKQAAgcAqgbQgHiIAEhcQABgkAHgcQAEgQAJgbIAHgWQABgEAJgIQAIgIAfgXIAmgaQALgHATAAIAfgFQAygJArAAQAeAAAjAEQAmADAMAFQARAHAEgDQAXAAAUAQIA3AsQALAJAGAJQAFAIAEAOIAHAYQAFARAEAVQAEAWAAAiIAABFQAAAggDAuIgFBLQAfATAHASQAFAMgFAHQgDAFgKgDQgIgDgTgLIADCXIADAEQACAGABAKQABAVgBAIQgBAIgEAMIADCFQACCNAAAnIAAA6QAAA9gCALQgOBCgcBzIgoAZQgZAOgWAGQgZAGgpABIhSABQhLAAgXgCg");
	this.shape.setTransform(31.069,69.875);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,62.1,139.8), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABuCUQgbgCgSgZQgYAQgdAKQgJgPgIgJQAdgKAcgSQgIgWgEgdIgrAAIgBAHQAbAYAKAKIgZAWQgFgGgRgRQgQAoghAYQgDgFgIgHQgIgHgFgDQAtgeAGg0IgTAAIADgdIBZAAQgEgqADhEQgXAlgaAdIARgCIgDgOIAXgGQAHAZACAVIgYAGIgBgKQgpAFgKAEQgBgJgGgQQAHgCALgMIARgXQgSACgIAEQgDgPgEgLQAGgBAHgKQAPgWAKgdIAaAIQgMAZgTAbIAPgBIAJgTIAbAIIACgwIAfAAQgGBjAGA8IAeAAIgQgNIAQgLQgRADgHADQgDgQgDgKQAGgCALgNQAGgGALgQQgVACgFADIgHgZQAGgCAGgJQAOgTAKgdIAbAIQgMAYgSAYIAPgBIAKgTIAbAJQgWAkgbAfIASgDIgDgNIAWgGQAIAbADATIgYAIIgBgNIgVADQARAMAGAHIgJAHIAaAAIgDAdIglAAIAYAKQgPAZgYAVQAIAKALACQAIAAAHghQAJAMAOAIQgPAxgYAAIgBAAgABPBIQALgLAKgRIgbAAQACAOAEAOgAh9CUIAKh6QgOAlgNATQgEgUgIgRQAaggAShCIgaAAIADgjIAcAAIAFg7IAhAAIgFA7IAWAAIgDAjIgWAAIgBAOIAOAYIAMAWIgTAZQgCgIgJgXIgMCTg");
	this.shape.setTransform(272.175,26.126);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiSCPIAEglIB6AAIAGg9IhcgBIADgkIBcAAIAFg2IhtAAIADgkICAAAQgOgPgegXIAggWQApAaARAWIgSAMIBnAAIgEAlIhsAAIgFA1IBdAAIgDAlIhdAAIgFA9IB8AAIgDAlg");
	this.shape_1.setTransform(237.825,25.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA0CVIABgKIiFgBIgBAMIgnAAIANiSIDUAAIgNCSgAhNBsICFAAIACgXIiFAAgAhJA5ICFAAIACgVIiFAAgAiRgOIADgiIBGAAQgDgRgHgPIAggGIhHAAIADgiIBtAAQgCgJgGgNIAngHQAHANAFAQIBoAAIgDAiIhDAAIAdAGIgTAgIBEAAIgCAigAgegwIBCAAQALgTAHgTIhhAAQAMATABATg");
	this.shape_2.setTransform(205.125,25.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhrBzIAXAAQAEAAABgEIADgoIg0AAIAGhCICQABIgFBBIg3AAIgEApQgBAMgDAGQgDAHgJADQgMAFgdAAQgBgOgHgQgAhaAuIBIAAIACgQIhJAAgAAOByIADAHIgdANQgIgZgOgaIAcgLQANAYAHARQAfgNAbgWQAcgWARgaIAiANQgrBAhHAkQgIgQgPgNgAiYB0QAVgUAMgYIAgAJQgSAhgWAWQgIgJgRgLgAAdAKQA8gdAdgnIAiAPQgoAug6AhQgJgOgQgMgAiNgEIADgdIBIAAIgDgJIAZgFIhPAAIAIhbICaAAIgHBbIg/AAIAGAOIBDAAIgDAdgAhUhGIBQAAIABgMIhQAAgAhRhoIBQAAIABgLIhQAAgAAkhPQAWgLAXgRQAXgSAOgTIAjAPQgjArg5AiQgKgPgPgMg");
	this.shape_3.setTransform(170.475,26.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCBtIAvAAQAKAAAAgIIANiSIhjAAIADglIBjAAIAGg/IAnAAIgFA/IArAAIgDAlIgsAAIgNCSQgCARgEAIQgFAIgLAFQgPAHgwAAQgCgRgJgUgAiZBiIATjXIBmAAIgQC3IhCAAIgDAggAhvAfIAdAAIAKhxIgeAAgAgbgKIAhgOQAZAqAGAhIglAPQgCghgZgrg");
	this.shape_4.setTransform(137.55,26.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFD650").s().p("AgiC+Qg6AAhIgSIAHhLQBNATAuAAQAmAAAagPQAagOACgbQADgfgcgMQgbgLhCgBIgGAAIADghIBnhXIivAAIAGhLIEmABIgGA8IhiBWQAlAGAcAeQAbAcgDAoQgLCBiqABIgDgBg");
	this.shape_5.setTransform(98.85,21.8004);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFD650").s().p("AgyAtIAHhZIBeABIgHBYg");
	this.shape_6.setTransform(68.725,35.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFD650").s().p("AiiC9IAHhNQBtg4A5gqQA4goADghQAEg3hOAAQg1AAhBARIAHhJQBDgTBPAAQA7AAAnAgQAnAfgGBAQgEAygvApQguAqhWAsIChAAIgGBLg");
	this.shape_7.setTransform(41.4594,21.1244);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFD650").s().p("AgTC+IAYkeIhpAPIAGhGIDDgmIghF7g");
	this.shape_8.setTransform(6.9,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},82).to({state:[]},1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,2,290.9,38.9);


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

	// Layer_3
	this.instance = new lib.sc2bg();
	this.instance.setTransform(0,0,0.9431,0.9431);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,660.2,565.9);


(lib.sb_sc2_titlebg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#008BD5","#3C8ACF","#2F2F7F"],[0,0,1],-187.9,0,188,0).s().p("A+HFsIGQrXMA1/AAAIAALXg");
	this.shape.setTransform(192.8,36.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,385.6,72.8);


(lib.sb_sc1subtt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#808080").s().p("AgDBNQADgHADgKIgMAIQgJgUgGgIIASgLIAMAVQAEgUAAgfIAAhGQAigHAYgLIAVAVQgWAJgfAGIAAAbIA5AAIAAAaIgRAAIAABcIgbAAIAAhcIgNAAQAABAgTAdQgIgKgMgGgAg0BbIAAg+IgjAAIAAgXIAjAAIAAgMIgkAAIAAgWIAQAAIgEgRIAPgDIgYAAIAAgXIAeAAIgEgOIAcgHIAIAVIAZAAIAAAXIgVAAIAPACIgIASIARAAIAAAWIgeAAIAAAMIAaAAIAAAXIgaAAIAAA+gAgwggIgOAEIAZAAIAHgUIgXAAgAhcBDQAKgPAHgTIAVAGQgJAXgLASQgIgIgKgFg");
	this.shape.setTransform(60.4279,9.787,1.05,1.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#808080").s().p("AAkA7IALgKIgKAAQgGAQgNAKQgPAKgcAGQgEgNgJgJQAjgFAKgPIgmAAIAAgWIAMAAIAAg0QgFgHgFgGIAAAHIgQAAIAAAXIAQgEIADAYIgTAGIAAApQAAATgIAFQgJAGgTAAQgCgPgGgMIAPAAQAAAAABAAQAAgBABAAQAAAAAAgBQAAgBAAAAIAAgiIgPAFIgGgbIAVgEIAAgeIgSAAIAAgZIASAAIAAgkIAbAAIAAAkIAQAAIAAALQAXgUAJgbIAZAFIgFALIAWAAIAEgBIAQALIgOAWIAdAAIAABHIALAAIAAAWIgfAAIAiAaIgSASQgLgMgdgWgAArANIgBAOIAPAAIAAgVIgGAHQgHgGgPgIQgHAIgIAIIgMgJIAAAVIANAAIABgOgAACgBQALgJAGgMIgRAAgAAngPIASAKIAAgRIgOAAgAADgsIAVAAIAHgLIgUAAg");
	this.shape_1.setTransform(8.1995,10.0233,1.05,1.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#808080").s().p("AAvBcIAAgEIhcAAIAAAEIgcAAIAAg6QAbgDAVgFIgQAAIAAACIgZAAIAAgiIgEADQgGgLgLgGQAUgOAMgYIAZAFIgEAHIAaAAIgCgHIAXgFIAAghIAcAAIAAAHIAvAAIAAAWIgvAAIAAAIIgYAAIACAIIA4AAIAAAQIg1AAIAAAFIAsAAIAAANIgsAAIAAAFIAsAAIAAAMIgsAAIAAAEIA9AAIAAARIheAAIAMALQgRAGgdADIAAAFIAsAAIAAAOIgsAAIAAAGIBcAAIAAgGIgqAAIAAgOIAqAAIAAgFIgsAAIAAgQIBIAAIAAA+gAgpAJIAlAAIAAgEIglAAgAgpgHIAlAAIAAgFIglAAgAgpgZIAlAAIAAgFIglAAgAgpg5IAAgFIgtAAIAAgWIAtAAIAAgHIAcAAIAAAig");
	this.shape_2.setTransform(-45.3915,9.9445,1.05,1.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#808080").s().p("AhvBiQAOgcABhJIAZACIgBAdQAGARAIAKIAAhIIguAAIAAgYIApAAIAAgVIgjAAIAAgYIAjAAIAAgXIAZAAIAAAXIAjAAIAAAYIgjAAIAAAVIAoAAIAAAYIgiAAIAAAYIAgAAIAAAYIggAAIAAAnQAPAEAcAAQBQAAAVgBQgIALgDARIhaAAQgiAAgSgGQgXgHgNgTQgDAYgIARQgGgFgRgHgAAqA8QgUAAgHgHQgHgIAAgVIAAh5IBZAAIAABWIg+AAIAAAjQAAAHACACQACACAHAAIAcAAQAGAAACgFQACgEAAgQQAIAGARAEQgDAXgGAJQgHAIgRAAgAAjgjIAjAAIAAgmIgjAAg");
	this.shape_3.setTransform(313.7331,10.0837,0.8829,0.8829);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#808080").s().p("AhrBOQAggNAOgYQAJgRACghIg0AAIAAgbIDOAAIAAAbIg9AAIAABGQAAAGACACQABACAGAAIAVAAQAGAAACgHQABgIABgZQAJAIARAEQgCAggHALQgHALgSAAIgcAAQgTAAgHgIQgHgIAAgUIAAhGIgiAAQgDApgMAXQgRAegmAPQgHgNgKgJgAhRhIIAAgbICkAAIAAAbg");
	this.shape_4.setTransform(260.9221,10.6634,0.8829,0.8829);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#808080").s().p("AA0BaIgMADIgDgLIhaAGIgCgYIAqgBIAAgSIgzAAIAAA/IgbAAIAAg/IgJAAIAAgWIAJAAIAAgGIAbAAIAAAGIAzAAIAAgKIhAAAIAAhJICcAAIAABJIhCAAIAAAKIBSAAIAAA9QAAAQgJAFQgHADgWAAQgBgIgEgKgAA+BXIADAAQABAAABgBQAAAAABAAQAAgBAAAAQAAgBAAgBIAAgmIgXAAQANAXAEATgAANA+IARgBIgFgLIATgFIgfAAgAANgDIAmAAIAAgLIgmAAgAgygDIAlAAIAAgLIglAAgAANgfIAmAAIAAgLIgmAAgAgygfIAlAAIAAgLIglAAgAAbg/IAAgKIgXAAIAAgXIAXAAIAAgMIAbAAIAAAMIAxAAIAAAXIgxAAIAAAKgAg2g/IAAgKIgxAAIAAgXIAxAAIAAgMIAbAAIAAAMIAYAAIAAAXIgYAAIAAAKg");
	this.shape_5.setTransform(208.7391,9.9292,0.8829,0.8829);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.6,0,378.20000000000005,19.8);


(lib.sb_sc1subnumber = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#B23634").s().p("Ah4CNIAAg+QA+APAlAAQBEAAAAgsQAAglg+AAQgxAAgzALIAOizIDJAAIAAA9IiNAAIgDA2QAZgFAVAAQA3AAAhAbQAfAaAAAqQAAAxgjAcQgjAdhBAAQgzAAg3gPg");
	this.shape.setTransform(81.35,15.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B23634").s().p("AglAlIAAhIIBLAAIAABIg");
	this.shape_1.setTransform(61.05,26.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B23634").s().p("Ah5CNIAAg9QA8APAoAAQAeAAAUgMQATgLAAgXQAAgagXgJQgWgJg2gBIgEAAIAAgbIBMhHIiMAAIAAg9IDrAAIAAAyIhIBGQAeAGAYAXQAYAXAAAhQAABqiKAAQgxAAg4gPg");
	this.shape_2.setTransform(40.625,15.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B23634").s().p("AhkCZQAfhHAshMQAohGAVgbIicAAIAAg9IDxAAIAAAxQgrA+gpBJQgnBHgTAyg");
	this.shape_3.setTransform(12.125,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93.5,31.2);


(lib.sb_sc1sentra = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1A1A1A").s().p("ABNCHIgQgxIh+AAIgPAxIhDAAQAviXA3h2IBZAAQA7B+AtCPgAgvAgIBaAAQgWg+gXg4QgYA4gVA+g");
	this.shape.setTransform(249.1879,-31.9921,0.8271,0.8271);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AAtCHQgig3gcgfIgrAAIAABWIhAAAIAAkNIB+AAQAvAAAcASQAlAWAAAyQAAAegTAWQgSAVgdAHQAqAsAkA3gAg7gEIAzAAQA3AAAAgoQAAgjg5AAIgxAAg");
	this.shape_1.setTransform(222.6429,-31.9921,0.8271,0.8271);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A1A1A").s().p("AgfCHIAAjWIhZAAIAAg3IDxAAIAAA3IhZAAIAADWg");
	this.shape_2.setTransform(195.1329,-31.9921,0.8271,0.8271);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A1A1A").s().p("AA+CHIh9i1IAAC1Ig/AAIAAkMIBLAAIBzCoIAAioIA/AAIAAEMg");
	this.shape_3.setTransform(167.9402,-31.9714,0.8271,0.8271);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A1A1A").s().p("AhpCHIAAkNIDQAAIAAA3IiQAAIAAAzICDAAIAAAzIiDAAIAAA6ICTAAIAAA2g");
	this.shape_4.setTransform(140.499,-31.9921,0.8271,0.8271);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1A1A1A").s().p("AhwB9IAAg7QBEASAjAAQAfAAAOgFQAPgGAAgMQAAgTglgKIhDgRQgegIgRgSQgQgTAAgcQAAhRB4AAQAjAAA7AOIAAA4IgvgKQgZgEgaAAQgyAAAAAYQAAAPAcAIIBGASQBFASAAA2QAAApgeAWQgfAXg6AAQg2AAg4gPg");
	this.shape_5.setTransform(114.4797,-31.5921,0.8271,0.8271);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(104.8,-43.1,156.59999999999997,23.1);


(lib.sb_sc1change = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333333").s().p("AgOBoIAAhjIgoAAIAABNIgbAAIAAhmIBDAAIAAgZIhVAAIAAgZIBYAAIgLgYIAZgJIAQAhIBRAAIAAAZIhXAAIAAAZIBGAAIAABJQAAATgLAFQgJAFgeAAQgCgLgHgPQAUACAHgCQAFAAAAgDIAAgwIgrAAIAABjg");
	this.shape.setTransform(253.8906,-37.1181,0.8657,0.8657);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhVBTIAAgXIBDAAIAAiOIAXAAIAAA3IBEAAIAAAWIhEAAIAABBIBRAAIAAAXg");
	this.shape_1.setTransform(188.7,-37.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgEBVQAmgiAAhBIAAgKIAZAAIgBAeQANA3AiATQgLAJgGANQgZgQgOgjQgLAegYAWQgIgMgKgGgAg7BmIAAhHIgrAAIAAgVIBrAAIAAAVIgnAAIAABHgAhoBOQAJgOAHgdIAWAGQgIAbgKATgAgdAqIAUgHQAJASAEAQIgTAIQgFgQgJgTgAgCgJIAAAJIhaAAIAAgVIBaAAIAAACQAPgfAFg0IAaAEIgGAjIArAAIAEgBIASAFQgIApgIAUIgVgFQAEgNAEgXIgqAAQgHAYgMASIgPgMgAhdgfIAAgVIAiAAIAAgLIgoAAIAAgWIAoAAIAAgQIAYAAIAAAQIAmAAIAAAWIgmAAIAAALIAiAAIAAAVg");
	this.shape_2.setTransform(123.8498,-36.9017,0.8657,0.8657);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgRBPQAcgMASgXQgLgTgIgcQgGAJgEAGIgOgPIAAADIg1AAIAAA3IA0gSQAAANADAMQhHAbgJAHQgCgQgIgLQAIgEAAgKIAAhRIA2AAIAAglIg4AAIAAgaIBSAAIAABMQAUgfALg6IAaAEIgJAjIBBAAIAAAYIgKAAQgJA0gTAgQASAWAYALQgLALgGAMQgWgMgTgVQgUAWgbANQgEgLgLgNgAAagmQAHAhAMAYQALgXAGgjIgjAAg");
	this.shape_3.setTransform(59.3458,-36.9233,0.8657,0.8657);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgFBYQAGgKADgLIgOAJQgGgOgLgTIARgJQAIALAIASQAGgXAAgqIAAhNQAsgJAXgKIAUATQgVAIgqAIIAAAjIBDAAIAAAYIgVAAIAABrIgZAAIAAhrIgVAAIAAACQABBJgWAgQgMgLgIgEgAg6BmIAAhIIgoAAIAAgXIAoAAIAAgPIgpAAIAAgWIAVAAQgDgOgEgJIASgFIgdAAIAAgVIAlAAIgGgRIAagHQAGANAEALIAeAAIAAAVIgaAAIARAEIgJAYIAVAAIAAAWIgkAAIAAAPIAhAAIAAAXIghAAIAABIgAg4giIgQAEIAfAAIAKgcIggAAQAFANACALgAhmBLQAMgPAHgXIAUAFQgJAZgNAUg");
	this.shape_4.setTransform(-5.7694,-37.1032,0.8657,0.8657);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhcBhIAAgYIBOAAIAAgaIg5AAIAAgXIA5AAIAAgYIguAAIAAgTQgLAIgRAJQgHgNgJgJQAogQAggfIgdAAIAAgZIBKAAQAPAVAYATQAZATAcALQgKAKgIAOQgMgGgPgKIAAASIgvAAIAAAYIA5AAIAAAXIg5AAIAAAaIBRAAIAAAYgAg2gXIBqAAQgdgUgXgcQgVAZghAXg");
	this.shape_5.setTransform(-70.5816,-36.5017,0.8657,0.8657);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.6,-46.1,342.20000000000005,18.1);


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

	// Layer_3
	this.instance = new lib.sc1bg();
	this.instance.setTransform(-676,20,1.1096,1.1096);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-676,20,1997.4,554.8);


(lib.sb_sc1allnew = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1A1A1A").s().p("AAnB2QgchagLgsQgHAfghBnIhMAAQgfh5gVhyIA5AAQANBfAXBTQAhhdAMg1IA9AAQANAzAhBfQAWhTAOhfIA4AAQgUBugfB9g");
	this.shape.setTransform(70.3092,2.1884,0.9403,0.9403);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AhcB2IAAjrIC3AAIAAAvIh/AAIAAAuIByAAIAAAsIhyAAIAAAzICBAAIAAAvg");
	this.shape_1.setTransform(40.3442,2.1884,0.9403,0.9403);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A1A1A").s().p("AA3B2IhuieIAACeIg3AAIAAjrIBBAAIBkCTIAAiTIA4AAIAADrg");
	this.shape_2.setTransform(12.2269,2.2119,0.9403,0.9403);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A1A1A").s().p("AhTB2IAAjrIA5AAIAAC8IBuAAIAAAvg");
	this.shape_3.setTransform(-24.4988,2.1884,0.9403,0.9403);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A1A1A").s().p("AhTB2IAAjrIA5AAIAAC8IBuAAIAAAvg");
	this.shape_4.setTransform(-46.1978,2.1884,0.9403,0.9403);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1A1A1A").s().p("ABDB2IgOgrIhuAAIgNArIg7AAQAoiCAyhpIBNAAQAzBrApCAgAgqAcIBPAAQgTg3gUgwQgWAzgSA0g");
	this.shape_5.setTransform(-72.917,2.1884,0.9403,0.9403);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.1,-8.9,171.3,22.200000000000003);


(lib.sb_footttpana = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EFD650").s().p("AguA+QgbgVAAgpQAAgnAagVQAZgWAlAAQAhAAAaAJIAAAoQgYgKgbAAQgVAAgMALQgOALAAAVQAAAWAPALQAOALATAAQAbAAAXgHIAAAnQghAHgTAAQgqAAgagVg");
	this.shape.setTransform(165.825,14.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFD650").s().p("AgWBuIAAidIAtAAIAACdgAgZhFIAAgoIAzAAIAAAog");
	this.shape_1.setTransform(151.5,11.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFD650").s().p("AAkBRIAAhcQABgQgHgHQgGgHgPAAQgXAAgWAPIAABrIguAAIAAidIAlAAIAGAQQAegUAhAAQAdAAAPAPQAPAOAAAiIAABig");
	this.shape_2.setTransform(135.3,13.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFD650").s().p("AhBA9QgZgVAAgoQAAgnAZgVQAYgWApAAQApAAAZAWQAZAWAAAmQAAAogZAVQgZAWgpAAQgoAAgZgWgAgegfQgMAMAAATQAAATAMANQANAMASAAQASAAAMgMQALgNAAgTQAAgUgMgMQgMgLgSAAQgSAAgMAMg");
	this.shape_3.setTransform(113.325,14.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFD650").s().p("AgoBPQgRgDgNgEIAAgmQAhALAdAAQAUAAAIgDQAHgDAAgHQAAgFgEgDQgFgDgPgDIghgHQgZgFgJgLQgJgLAAgSQAAgYAVgMQAWgMAiAAQAjAAAYAKIAAAlQgegKgaAAQgjAAAAALQAAAFAEACIAzAMQAYAFALALQAMALAAASQAAAZgUAOQgUAOgoAAQgQAAgSgEg");
	this.shape_4.setTransform(93.175,14.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFD650").s().p("Ag/BEQgRgPAAgXQAAgSAKgLQALgLAOgEQAPgEARAAQAYAAAXAIIAAgGQAAgdgwAAQgUAAghAJIAAgmQAagIAoAAQBSAAAABCIAABfIglAAIgEgOQgaASgfAAQgcAAgSgPgAggAfQAAAIAIAFQAHAEAPAAQAOAAAWgKIAAgUQgOgGgXAAQgdAAAAATg");
	this.shape_5.setTransform(73.1,14.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFD650").s().p("AAlBRIAAhcQgBgPgGgIQgGgHgPAAQgXAAgVAPIAABrIgvAAIAAidIAmAAIAFAQQAegUAhAAQAcAAAQAPQAPAOAAAiIAABig");
	this.shape_6.setTransform(51.9,13.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFD650").s().p("Ag/BEQgRgPAAgXQAAgSALgLQAKgKAPgFQAPgEAQAAQAYAAAXAIIAAgGQAAgdgwAAQgUAAghAJIAAgmQAagIApAAQBRAAAABCIAABfIglAAIgEgOQgaASgfAAQgdAAgRgPgAggAfQAAAIAIAFQAHAEAPAAQAOAAAWgKIAAgUQgNgGgYAAQgdAAAAATg");
	this.shape_7.setTransform(29.975,14.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFD650").s().p("AhaBkIAAjHIBdAAQBYAAAABIQAAATgIAPQgJAPgNAIQgMAHgQAEQgPAEgPAAIgtAAIAAA3gAgqAFIAqAAQATAAALgGQALgHAAgUQAAgRgMgHQgKgHgUAAIgpAAg");
	this.shape_8.setTransform(9.075,12.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173.2,22.5);


(lib.sb_footttlow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhhBWQAMgYABhAIAWABIgBAaQAEANAIAKIAAg+IgoAAIAAgVIAjAAIAAgTIgeAAIAAgVIAeAAIAAgUIAXAAIAAAUIAeAAIAAAVIgeAAIAAATIAiAAIAAAVIgdAAIAAAVIAcAAIAAAVIgcAAIAAAhQAOAEAYAAIBYAAQgHAIgDAPIhOAAQgeAAgQgFQgUgGgLgQQgDAVgHAOIgUgKgAAkA1QgRAAgGgHQgGgGAAgTIAAhqIBOAAIAABMIg2AAIAAAeQAAAHABABQACACAGAAIAZAAQAFAAABgEQACgEABgOQAKAGALADQgCAUgGAHQgGAIgOAAgAAfgfIAeAAIAAghIgeAAg");
	this.shape.setTransform(238.325,14.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah3BWQAlgOAOgaQAKgUADglIg6AAIAAgdIDkAAIAAAdIhEAAIAABOQAAAHACACQABACAHAAIAXAAQAHAAACgIQACgIAAgcQALAJASAFQgDAigHAMQgIAMgTAAIgfAAQgWABgHgJQgIgIAAgXIAAhOIglAAQgEAugOAZQgSAigqARQgIgQgLgJgAhahQIAAgeIC1AAIAAAeg");
	this.shape_1.setTransform(213.325,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AADBZQAiACAPgBQAIAAAAgIIAAhzIhgAAIAAggIBgAAIAAg0IAgAAIAAA0IAcAAIAAAgIgcAAIAABzQAAAPgEAGQgDAIgKADQgNAFgvABQgEgSgIgNgAhTB3IAAiAIgSAUQgKgUgIgMQAngkAWg+IAeAKQgMAegMAWIAACwgAgZgDIAagMQAeAvAGALIgdAPQgIgUgZgpg");
	this.shape_2.setTransform(67.775,12.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhoBcQAagWAKgkQAHgZAAglIAAhVICmAAIAAC8QAAAOgEAHQgEAHgJAEQgNAGgrAAQgEgRgJgPIAtABQAIAAAAgIIAAglIhtAAQgLAyggAbQgJgNgPgJgAgfAIIBnAAIAAgfIhmAAgAgeg0IBmAAIAAgfIhmAAg");
	this.shape_3.setTransform(38.425,12.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhZB4IAAiBIgRASQgIgSgJgMQAmgnAVg5IAcAJQgIAYgQAdIAACvgAAvAEIgyAAIAAA2IApgKQgCANACANQg9ARgKAGQgDgOgHgKQAMgGAAgNIAAiSQBKgLAugQIAXAWQgaAJgSADQABAlADAZIAtAAIAAAbIgrAAQAEAkAGAVQAGAWAGAAQAFAAADgfQAIAKAMAFQgIAzgUAAQgkgBgNhxgAgDhHIAAAwIAvAAQgDgiAAgWgAgHBzIAAgZIBEAAIAAAZg");
	this.shape_4.setTransform(12.375,12.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248.1,24.2);


(lib.sb_footttfree = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABWBtQgUgCgOgSQgQAMgVAHQgHgLgHgGQAXgJARgMQgGgNgGgZIgeAAIgBAFIAcAZIgRARIgQgRQgIAcgXATQgIgJgLgHQAegWACgnIgOAAIAAgVIBAAAQgGgggCgwQgOAagQAWIAMgBIgCgLIAPgEQAFAQAEARIgRAFIgCgHQgdAEgHACIgFgSQAFgBAFgJIAMgRQgOABgFADIgGgTQAEgBAEgHQAMgVADgRIATAGQgGATgNATIALAAIAHgPIASAHIgCgkIAYAAQAABDAJAyIAVAAIgLgKIAKgIQgOADgDACIgGgUQAFgBAHgJQAGgIAEgJQgLACgHACIgGgSQAEgBAEgHQAKgUADgQIAUAGQgHATgLARIALgBIAFgOIAVAGQgMAZgUAYIAOgBIgEgKIAQgEQAJAYABAKIgQAFIgCgJIgOACIARANIgGAGIATAAIAAAVIgbAAIASAHQgJATgRAPQAIAIAHABQAHABACgZQAGAIAMAGQgIAlgRAAIgBAAgAA7A1QAKgMADgJIgUAAgAhTBtIAAhaQgIAbgJAOQgEgOgGgNQAQgYAJgwIgTAAIAAgZIAVAAIAAgsIAYAAIAAAsIAPAAIAAAZIgPAAIAAALIAVAhIgMASIgJgWIAABsg");
	this.shape.setTransform(380.2,10.9763);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggBcQAXgOALgeIgQgQIgIAMIgKgPIAAA0IgkAAIAAARIgXAAIAAhIIgJAMQgCgTgHgOQAUgaAJgzIgaAAIAAgZIBNAAIAAAZIgZAAQgFAagHAVIAiAAIAAAsQAOgXAGgnIgLAAIAAgsIA0AAIgFgPIAbgHIAJAWIAwAAIAAAsIgYAAIAAgUIhUAAIAAANIAKACIgDAPIAOAAIAEAAIAOACQgHBtgvAgQgGgLgLgHgAhEA4IAQAAIAAg5IgQAAgAgFALIAPALQADgLACgVIgNAAQgCAMgFAJgABDBoQgLAAgGgEQgHgGAAgUIAAhuIA8AAIAABBQAAAPgHAFQgGAEgTAAQgCgMgEgJIAAAqQAAAJACAAQABACAEAAIAJAAIAFgBQADgBAAgEIACgWQAIAHALADQgBAUgCAGQgDAHgHACQgFACgJAAgABBAgIAOAAQAAAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgrIgQAAg");
	this.shape_1.setTransform(353.375,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag4BWQAcgKAKgTQAIgPACgeIgjAAIAAgZIATAAIArAAIAAghIgaAAQgHAUgKANQgIgIgPgIQATgXAJg1IAbAFQgDAPgEANIASAAIAAgkIAbAAIAAAkIAzAAIAAAaIgzAAIAAAhIA9AAIAAAZIgpAAIAAA9QAAAGABABQAAABAAAAQABAAAAAAQABABAAAAQABAAABAAIAKAAQADAAACgGIABgbQAJAGAPAFQgBAbgGAKQgGAJgOAAIgSAAQgQAAgGgHQgFgHAAgTIAAg9IgUAAQgDAmgKAUQgNAZggAOQgHgOgKgJgAhoBaQATgfATgrIAUAQQgSArgQAggAhugYIAPgUQAbALAPAOIgQAVQgPgNgagNgAhjhWIAQgUQAaANAOAOIgRAVQgOgPgZgNg");
	this.shape_2.setTransform(326.9,10.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKBbIhcAJIgDgYIAvgDIAAgOIgpAAIAAgTIApAAIAAgJIgoAAIAAhHIAoAAIAAgKIguAAIAAgUIAuAAIAAgJIgnACQgCgLgEgJQBDgEAhgHIALAVQgRADgYADIAAALIAsAAIAAANIAWAAIAAgwIAbAAIgBAwIAvAAIAAANQgBBJgCAbQgDAfgFAHQgGAJgNADQgJACgTgBQgBgPgIgMIAYACQAFAAADgEQAHgKABhjIgVAAQgCAygKAfQgNAlgbAWQgGgJgKgJgAghBHIAogDQAXggAChDIgVAAIAAgTIgsAAIAAAKIAoAAIAABHIgoAAIAAAJIApAAIAAATIgpAAgAghANIASAAIAAgKIgSAAgAhMANIASAAIAAgKIgSAAgAghgNIASAAIAAgKIgSAAgAhMgNIASAAIAAgKIgSAAg");
	this.shape_3.setTransform(299.675,11.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhTBtIAAi7IA8AAQAFgTABgLIAgAEIgLAaIBQAAIAAC6IgdAAIAAgLIhuAAIAAAMgAg3BHIBuAAIAAgYIhuAAgAg3AWIBuAAIAAgXIhuAAgAg3gbIBuAAIAAgYIhuAAg");
	this.shape_4.setTransform(273.275,10.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEBtIAAheIBiAAIAABeIgYAAIAAgJIg0AAIAAAJgAASBPIA0AAIAAgMIg0AAgAASAxIA0AAIAAgMIg0AAgAhnBfQALgPAKgZIAVAGQgNAcgLATQgGgGgMgHgAg4BAIARgJQALAOALAWIgSALQgGgPgPgXgAhcAzIAAiTIBCAAIAACTgAhHAdIAXAAIAAgWIgXAAgAhHgMIAXAAIAAgVIgXAAgAhHg1IAXAAIAAgWIgXAAgAgPAHIAAhTIAbAAQgFgMgHgLIAVgIQAKAOAGANIgLAEIAeAAQALgRAGgPIAZAIIgRAYIAXAAIAABTgAA1gMIAdAAIAAgkIAAgIIgdAAgAAGgMIAdAAIAAgsIgdAAgAA3gUQAHgRADgPIARAEIgNAhgAAHgwIAPgEQAIAWADAJIgQAFQgCgNgIgTgABSgwg");
	this.shape_5.setTransform(63.825,10.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhoBXQATgVAIgiQAGgcABgsIgbAAIAAgcIAcAAIAAgmIAbAAIAAAmIAxAAIAAANQgCBOgCAbQgCAggEAHQgGAJgMAEQgHABgVAAQgBgRgHgLIAWABQAFAAADgFQAGgHAChoIgYAAQgCAygIAhQgJAogVAYQgIgNgNgHgAAUBnIAAi6IBVAAIAAC4IgcAAIAAgPIgeAAIAAARgAAvA7IAeAAIAAhzIgeAAg");
	this.shape_6.setTransform(37.025,11.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AARBNIAgAAQAFAAAAgFIAAgXIhsAAIAAA2IgbAAIAAg2IgbAAIAAgZIAbAAIAAhVIBDAAIAAgPIhUAAIAAgaIDFAAIAAAaIhWAAIAAAPIBFAAIAABVIAbAAIAAAZIgbAAIAAAXQABAVgNAFQgLAFggAAQgCgMgIgOgAANAYIApAAIAAgTIgpAAgAg2AYIAoAAIAAgTIgoAAgAANgSIApAAIAAgSIgpAAgAg2gSIAoAAIAAgSIgoAAg");
	this.shape_7.setTransform(10.9,11.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,391.4,22.1);


(lib.sb_footttexp = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EFD650").s().p("ABNBzIAAgMIiaAAIAAAMIgfAAIAAjlIDZAAIAADlgAhNBLICaAAIAAihIiaAAgAg2A6IAAhCIAoAAIAAgVIg0AAIAAgYIA0AAIAAgZIAcAAIAAAZIA1AAIAAAYIg1AAIAAAVIAqAAIAABCgAgbAjIA4AAIAAgWIg4AAg");
	this.shape.setTransform(122.3,12.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFD650").s().p("AAWB3IAAhaIhCAAIAAgcIBCAAIAAgVIgxAAIAAhYICGAAIAABYIg2AAIAAAVIBDAAIAAAcIhDAAIAABagAABgvIBLAAIAAgiIhLAAgAhXB2IAAiCIgSAUQgGgRgKgOQAogmAVg5IAcAJQgLAcgPAZIAACugAgyBcQAWgZANgeIAbAIQgRAngWAYQgKgKgNgGgAA+AyIAWgNQAbAgALAWIgYAPQgKgWgagig");
	this.shape_1.setTransform(94.475,12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFD650").s().p("AhdBWQANgJAAgLIAAgpIgmAAIAAgaIArAAIAAhyIChAAIAAAZIiBAAIAAAOIB6AAIAAAXIh6AAIAAAOIB6AAIAAAXIh6AAIAAAPICcAAIAAAaIgcAAIAUANQgVAPgYANQAYAPAjAHQgJAIgLATQgqgKgcgXQgagWgQgjIglAAIAAA2IA3gLQgCAQAAALQhMARgFADIgCABQgFgTgIgLgAAnAzQAVgNAQgNIg6AAQAIANANANg");
	this.shape_2.setTransform(67.2,12.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFD650").s().p("Ah5BdQASgKANgUQgPgSgNggIAYgKQAGASALAQQAIgUAEgbIgdAAQgKAGAAAEQgHgQgFgHQAIgDAKgOQAKgOANgdIgrAAIAAgcIA3AAIAJgDIASAMQgRAmgTAeIAPAAIAFgBIARADQgEA4gPAjQAiAXBCAAIBMgBQgJAOgCAQIhCAAQhKAAgngbQgPAWgVANQgGgOgLgMgAggA+IAAgcIAOAAIAAhaIAcAAIAABaIAVAAIAAhwIg0AFQgCgPgFgLQBRgGAqgNIARAaQgUAFgeAFIAAArIAtAAIAAAdIgtAAIAAAsIAzAAIAAAcg");
	this.shape_3.setTransform(39.275,12.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFD650").s().p("AgzB5QgGgQgFgJIAoAAQAGAAAAgFIAAgRIhjAAIAAgaIBjAAIAAgKIAAAAIAAgBQAPgCARgHIhqAAIAAgYICaAAIAHgCIATASQghARgmALIBgAAIAAAaIhjAAIAAATQAAALgEAFQgEAGgIADQgIACgNABIgeAAgAhRgFIAAg4IClAAIAAA4gAgzgaIBnAAIAAgPIhnAAgAhuhJIAAgaIBdAAIgEgPIAdgGQAGAKADALIBfAAIAAAag");
	this.shape_4.setTransform(11.55,12.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133.2,24.4);


(lib.sb_foottt23400 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgKA1QANgXAAgeQAAgcgNgZIAGgDQAPAbAAAdQAAAegPAbg");
	this.shape.setTransform(93.025,5.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxAoQAQgGAHgNQAFgKABgRIgcAAIAAgIIBhAAIAAAIIggAAIAAAmQAAAFAFAAIAPAAQADAAABgEIACgQQACACAFACQgBAOgCAFQgCAFgIAAIgQAAQgHAAgDgDQgCgCAAgIIAAgmIgUAAQgCAUgGAKQgHAPgSAIQgCgFgDgCgAgmgmIAAgIIBNAAIAAAIg");
	this.shape_1.setTransform(82.275,5.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAgQgKgMAAgUQAAgTAKgMQAKgMAQAAQASAAAJAMQAKANAAASQAAAUgKAMQgLAMgQAAQgPAAgLgMgAgRgYQgHAJAAAPQAAAQAIAIQAGAJAKgBQAKABAHgJQAIgIAAgQQAAgPgHgJQgHgHgLgBQgJABgIAHg");
	this.shape_2.setTransform(71.6,5.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAgQgKgMAAgUQAAgSAKgNQAKgMAQAAQARAAAKAMQAKAMAAATQAAAVgKALQgLAMgQAAQgQAAgKgMgAgRgYQgHAJAAAPQAAAQAHAIQAIAJAJgBQAKABAHgJQAIgIAAgQQAAgQgHgIQgIgHgKgBQgJABgIAHg");
	this.shape_3.setTransform(62.1,5.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMArIAAgUIgvAAIAAgIQAIgNAOgQQALgNANgPIAPAAQgcAcgRAaIAfAAIAAgTIALAAIAAATIANAAIAAALIgNAAIAAAUg");
	this.shape_4.setTransform(53.125,5.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKAPIAIgdIANAAIgLAdg");
	this.shape_5.setTransform(47.475,10.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeAnIAAgMQASAFAIAAQAWAAABgRQAAgEgDgEQgCgDgEgBIgJgCIgLAAIgGAAIAAgHIAZgZIgnAAIAAgLIA5AAIAAAJIgbAZIALABIAKAEQAEADADAEQADAGAAAFQAAAOgJAHQgJAHgRAAQgKAAgQgEg");
	this.shape_6.setTransform(41.95,5.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeArIAAgKIAegYIAIgIIAGgIIACgIQABgHgFgFQgGgEgIAAQgMAAgNAHIAAgNQAOgFAMAAQAOAAAIAHQAIAGAAANQAAAVgoAbIAqAAIAAALg");
	this.shape_7.setTransform(33.6,5.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkAzIAAg8IgKALQAAgCgEgFQAQgRAKgcIAHADIgLAZIAABJgAgWAwIAAgHIALAAIAAg+IASAAIACgKIgaAAIAAgHIAbAAIACgMIAIABIgCALIAeAAIAAAHIgfAAIgDAKIAbAAIAAA+IAKAAIAAAHgAgEApIAmAAIAAgKIgmAAgAgEAZIAmAAIAAgJIgmAAgAgEAKIAmAAIAAgKIgmAAgAgEgFIAmAAIAAgJIgmAAg");
	this.shape_8.setTransform(23.575,5.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAUAoIAGgFQAPAFAMAGIgHAFQgHgEgTgHgAgXAtQARgEAIgGIAHAEQgLAHgQAFgAgkAyIAAg9IgLAOIgFgHQAQgTAJgbIAHACIgIAWIAABMgAgPAiIAAgnIA9AAIAAAngAgHAdIAtAAIAAgHIgtAAgAgHARIAtAAIAAgGIgtAAgAgHAGIAtAAIAAgGIgtAAgAgQgKIAAgWIARAAIAAgGIgUAAIAAgHIBFAAIAAAHIgWAAIAAAGIATAAIAAAWgAAcgQIAMAAIAAgKIgMAAgAAJgQIALAAIAAgKIgLAAgAgJgQIAKAAIAAgKIgKAAgAAJggIALAAIAAgGIgLAAg");
	this.shape_9.setTransform(11.85,5.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKAAQAAgdAPgbIAGADQgNAYAAAdQAAAfANAWIgGAEQgPgbAAgeg");
	this.shape_10.setTransform(1.15,5.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.2,11.8);


(lib.sb_foottt9990 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EFD650").s().p("AhZBjQgegkAAg+QAAg/AegkQAegjA6AAQA7AAAfAjQAfAkAAA/QAAA+ggAkQghAjg5AAQg3AAgggjgAgpg8QgQAWABAnQAAAqAPAUQAQATAYAAQAZAAARgTQARgUAAgqQAAgngRgWQgRgWgZAAQgaAAgOAWg");
	this.shape.setTransform(96.75,13.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFD650").s().p("AhYCGIAAg3IAtABQAVAAAWgIQAWgJARgTQgQANghAAQgvAAgbgbQgbgaAAgpQAAgsAegaQAdgaAzAAQAzAAAfAcQAfAbAAA6QAAAagGAVQgGAWgQAWQgPAUgXAPQgXAOghAIQgfAGgjAAIgMAAgAgkhFQgMANAAATQAAAUAMAMQAMANAYAAQAXAAAOgLQAMgMAAgWQAAgWgMgMQgNgLgXAAQgYAAgNANg");
	this.shape_1.setTransform(69.9,13.4368);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFD650").s().p("AhZCGIAAg3IAuABQAVAAAWgIQAWgJARgTQgQANghAAQgvAAgbgbQgbgaAAgpQAAgsAdgaQAegaAzAAQAzAAAfAcQAfAcAAA5QAAAagGAVQgIAYgOAUQgRAVgVAOQgXAOghAIQgfAGgjAAIgNAAgAgkhFQgMAOAAASQAAAUAMAMQAMANAYAAQAXAAANgLQAOgMAAgWQAAgWgNgMQgNgLgXAAQgYAAgNANg");
	this.shape_2.setTransform(44,13.4368);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFD650").s().p("AgqA5IAVhxIBAAAIgiBxg");
	this.shape_3.setTransform(26.85,25.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFD650").s().p("AhYCGIAAg3IAtABQAVAAAWgIQAWgJARgTQgRANggAAQgvAAgcgbQgagaAAgpQAAgsAegaQAdgaAyAAQA0AAAfAcQAfAcAAA5QAAAagHAVQgGAYgPAUQgRAVgVAOQgYAOghAIQgeAGgjAAIgMAAgAgkhFQgNANAAATQAAAUANAMQAMANAYAAQAXAAANgLQANgMAAgWQAAgWgMgMQgNgLgXAAQgZAAgMANg");
	this.shape_4.setTransform(11.2,13.4368);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108.8,31.6);


(lib.sb_footbgred = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#B23634").s().p("AuwHPIAAq7Ia8jiIClOdg");
	this.shape.setTransform(103.425,54.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.9,8.2,189.1,92.5);


(lib.sb_footbgblue = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("A+xLfIimueMBCvgIfIAAW9g");
	mask.setTransform(213.575,73.475);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3C8ACF","#3C8ACF","#2F317A"],[0,0,1],-123.8,98.4,141.7,-112.5).s().p("EgsjgClMA0GgpZMAlAAukMg0FApZg");
	this.shape.setTransform(213.55,73.45);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,427.2,147);


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
p.nominalBounds = new cjs.Rectangle(0,0,470,333);


(lib.sb_btntt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAZBbQANACAFgBQAFAAADgCQAFgFAJgZIiXAAIAYhYICeAAIgEAPIhAAAIgDALIA2AAIgDAMIg3AAIgDAMIA4AAIgEAMIg3AAIgDAMIBQAAIgDAHQgQAqgJAHQgGAFgJABIgYAAQACgLgCgGgAg9AuIA1AAIADgMIg1AAgAg2AWIA0AAIACgMIgzAAgAgwgCIAzAAIADgLIgzAAgAh/BgQAOgKAXgXIAPAJIglAkgAg/BGIATgDQABASgCAQIgUADQACgLAAgXgAgZBHIASgFQAGARAAANIgTAGQABgOgGgRgAALBEIARgFQAJAMACAKIgOAGIgEABQgCgLgIgNgAhcgnQAggKAQgZIggAAIAFgRIAjAAIAHgQIAUAAIgGAQIAvAAIgCAIQgNAkgIAHQgGAFgHABQgIABgOgBQACgJgCgIIAQABQAFAAACgCQADgDAGgTIgdAAQgVAkgpAPQgBgJgGgHgAAdglIAQg6IBTAAIgPA6gAA2g2IAqAAIAHgZIgqAAg");
	this.shape.setTransform(206.825,14.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA4gqIhDAAIAFgUIBCAAIALgsIAWAAIgMAsIArAAIgFAUIgrAAQgNA4gDAkQgEAlAIAAQAFAAAKgkQAHAIAHADQgKAbgIAJQgIALgMgBQgiABAjiXgAh7BpIAVhPIA/AAIgSBFIgtAAIgDAKgAhiBNIAbAAIAJghIgbAAgAgvBGIAbgGIAQg5IgWAAIAFgSIBAAAIgFASIgXAAIgOA0IAfgHIgDATQgkAKgoAJgAhiALIAEgQIA/AAIgEAQgAhagTIAFgRIA/AAIgFARgAhcgyIAFgRIAmAAQgBgLgIgVIATgJQAIARACAOIgUAKIAnAAIgFARgABdhdIARgJQAKAPADAOIgSAKQgDgOgJgQg");
	this.shape_1.setTransform(179.175,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAJBrQACgMgDgJIAiAAQAGAAAEgDQALgKAjhzIg+AAQgOASgNAOIgPgMQAfgdAbg2IAUADIgWAmIBMAAIgDAMQgXBNgMAfQgLAggJAHQgIAKgPACIgNABIgXgBgAh9BhQAOgSAPgjIASAEQgMAegSAaQgFgDgMgEgAhDAvIASgFQgDAigDASIgUAFQAFgYADgcgAgmAqIARgFQAEAdgBAPIgSAGQABgPgDgegAAOgDIASgLQAWAaAGAWIgUANQgGgagUgYgAhlAPQAGgBARgNIAbgYQgfAEgFADIgCgVQAFAAANgMQAdgaAWgfIARAJQgaAggcAaIAagCIAZgdIAPAMQgmApgiAbIAlgGIgCgSIATgFQAEAdgBATIgUAFIAAgMQhCAKgIADQAAgLgBgJg");
	this.shape_2.setTransform(150.2,14.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdBIIAUgLQATAOANAQIgUAMQgKgOgWgRgAg6BZQAigLAXgSIAOAMQgYATglAMQgEgHgGgHgAh/BRQATABAGgBQAEAAABgDIAXhVIgkAAIAFgUIA3AAQgPgRgWgMIAQgPIATANQARgPAJgJIg7AAIAFgTIBJAAIAEgBIAKAJQgUAZgaAUIANANIgIAIIAOAAIADgBIANAEQgVAjgMAQIgPgEIATgeIgUAAIgXBVQgEARgLAEQgKADgZAAQABgKgCgLgAgXA6IAfh6IAjAAIAJgTIgvAAIAFgTIB2AAIgFATIgvAAIgMATIAuAAIggB6gAAAApIA9AAIAFgUIg9AAgAAJAGIA9AAIAGgTIg9AAgAATgcIA9AAIAFgTIg9AAg");
	this.shape_3.setTransform(123.225,15.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(110.5,3.9,109.19999999999999,21.700000000000003);


(lib.sb_btnarrow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag/ByIBwhyIhwhxIAIgHIB3B4Ih3B5g");
	this.shape.setTransform(6.45,12.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.9,24.3);


(lib.sb_sc4bgmask = function(mode,startPosition,loop,reversed) {
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
	var mask_graphics_0 = new cjs.Graphics().p("AzVY3IgjgZIAAAAQgVgPgRgGIAAAAQgVgIgfACIAAAAIg2AGIAAAAQhoANg/gkIAAAAQgLgGgigYIAAAAQgbgTgTgIIAAAAQgVgIgcgCIAAAAQgTgBggACIAAAAItqAlQhSADgngBIAAAAQhEgEgzgQIAAAAQg9gVgsgpIAAAAQgvgugLg5IAAAAQgCgPgGgFIAAAAQgHgHgTADIAAAAInzBRQhaAPg0AAIAAAAQhPABg5gaIAAAAQgugVgjgnIAAAAQgigngPgwIAAAAQgQgwAGg0IAAAAQAGgzAZgsIAAAAQAphGBagxIAAAAQA0gcB4grIAAAAQBqgmC1hKIAAAAQDOhUBQgeIAAAAQEAhhGGhwIAAAAQG2h6DYhBIAAAAQEXhVFIh0IAAAAQDzhWFkiHIAAAAQBSggAsgLIAAAAIAIgBIAAAAIAEgBIAAAAIgEABIAAAAQAIhSAFheIAAAAQACguADgXIAAAAQAFgmAMgcIAAAAIAFgKIAAAAIEFkWIAAAAQIkkiGplVIAAAAIAPgMIAAAAQBnglBygcIAAAAQAzgMAigBIAAAAQAVgMAYgKIAAAAQARAAATgEIAAAAIA1gMIAAAAQFRgHEqgDIAAAAQD1gCCCAMIAAAAIA3AFIAAAAQAmABAzgBIAAAAQBlgBAtACIAAAAQAtACBaAJIAAAAIAIAJIAAAAQBMgBAuAJIAAAAQAlAIA+AZIAAAAQDrA9DwCVIAAAAQAjAVASAPIAAAAIABABIAAAAIAFACIAAAAIA4ASIAAAAQAhAKAVALIAAAAQAMAFAJAHIAAAAIAYgDIAAAAIBNA3IAAAAIA1AlIAAAAQAdAXASAWIAAAAQAJANAJAQIAAAAQAvApAaApIAAAAQARAcAOAnIAAAAQAKAaAMAuIAAAAQAXBXAXBrIAAAAQAQBMgBApIAAAAQgCBNgqApIAAAAQgXAWgfAJIAAAAQgRAEgRAAIAAAAIgUA1IhdA+IAAAAQg4AlgyAcIAAAAIg0AtIAAAAQhWBLhwBXIAAAAQhDA0iIBnIAAAAInRFfQiQBthOAxIAAAAIgiAUIAAAAQh6BshQBDIAAAAQiSB4iHBgIAAAAIgZAXIAAAAQjQC3mKEEIAAAAIhcA9IAAAAQgGgNgHgNIAAAAQggg5g6giIAAAAQgygdhFgPIAAAAQgvgKhQgHIAAAAQi4gQm5gGIAAAAQmQgGjfgZIAAAAQhVgKiTgVIAAAAQAyhUAohuIAAAAQAWg+AehkIAAAAIAxijIAAAAQANgoARgPIAAAAQAMgKASgFIAAAAIAigGIAAAAQBbgQA5gxIAAAAQA0gqAXhCIAAAAQAPgqAAgrIAAAAQAAgXgEgYIAAAAQgNhBgug0IAAAAQgvg0hAgUIAAAAQAuhlATgzIAAAAQAXhCAAg2IAAAAQAAgTgCgRIAAAAQgNhMg/g4IAAAAQg9g3hPgJIAAAAQBPAJA9A3IAAAAQA/A4ANBMIAAAAQACARAAATIAAAAQAAA2gXBCIAAAAQgTAzguBlIAAAAQBAAUAvA0IAAAAQAuA0ANBBIAAAAQAEAYAAAXIAAAAQAAArgPAqIAAAAQgXBCg0AqIAAAAQg5AxhbAQIAAAAIgiAGIAAAAQgSAFgMAKIAAAAQgRAPgNAoIAAAAIgxCjIAAAAQgeBkgWA+IAAAAQgoBugyBUIAAAAQghA2glArIAAAAQhMBYhqA3IAAAAQhpA4h0AMIAAAAQgdADgaAAIAAAAQhfAAg/gpgAnCkJIABAAIAAAAIgBAAgAm/kJQAqgJAlAAIAAAAQglAAgqAJgAlvkSIAAAAIAAAAIAAAAg");
	var mask_graphics_9 = new cjs.Graphics().p("AzVY3IgjgZIAAAAQgVgPgRgGIAAAAQgVgIgfACIAAAAIg2AGIAAAAQhoANg/gkIAAAAQgLgGgigYIAAAAQgbgTgTgIIAAAAQgVgIgcgCIAAAAQgTgBggACIAAAAItqAlQhSADgngBIAAAAQhEgEgzgQIAAAAQg9gVgsgpIAAAAQgvgugLg5IAAAAQgCgPgGgFIAAAAQgHgHgTADIAAAAInzBRQhaAPg0AAIAAAAQhPABg5gaIAAAAQgugVgjgnIAAAAQgigngPgwIAAAAQgQgwAGg0IAAAAQAGgzAZgsIAAAAQAphGBagxIAAAAQA0gcB4grIAAAAQBqgmC1hKIAAAAQDOhUBQgeIAAAAQEAhhGGhwIAAAAQG2h6DYhBIAAAAQEXhVFIh0IAAAAQDzhWFkiHIAAAAQBSggAsgLIAAAAIAIgBIAAAAIAEgBIAAAAIgEABIAAAAQAIhSAFheIAAAAQACguADgXIAAAAQAFgmAMgcIAAAAIAFgKIAAAAIEFkWIAAAAQIkkiGplVIAAAAIAPgMIAAAAQBnglBygcIAAAAQAzgMAigBIAAAAQAVgMAYgKIAAAAQARAAATgEIAAAAIA1gMIAAAAQFRgHEqgDIAAAAQD1gCCCAMIAAAAIA3AFIAAAAQAmABAzgBIAAAAQBlgBAtACIAAAAQAtACBaAJIAAAAIAIAJIAAAAQBMgBAuAJIAAAAQAlAIA+AZIAAAAQDrA9DwCVIAAAAQAjAVASAPIAAAAIABABIAAAAIAFACIAAAAIA4ASIAAAAQAhAKAVALIAAAAQAMAFAJAHIAAAAIAYgDIAAAAIBNA3IAAAAIA1AlIAAAAQAdAXASAWIAAAAQAJANAJAQIAAAAQAvApAaApIAAAAQARAcAOAnIAAAAQAKAaAMAuIAAAAQAXBXAXBrIAAAAQAQBMgBApIAAAAQgCBNgqApIAAAAQgXAWgfAJIAAAAQgRAEgRAAIAAAAIgUA1IhdA+IAAAAQg4AlgyAcIAAAAIg0AtIAAAAQhWBLhwBXIAAAAQhDA0iIBnIAAAAInRFfQiQBthOAxIAAAAIgiAUIAAAAQh6BshQBDIAAAAQiSB4iHBgIAAAAIgZAXIAAAAQjQC3mKEEIAAAAIhcA9IAAAAQgGgNgHgNIAAAAQggg5g6giIAAAAQgygdhFgPIAAAAQgvgKhQgHIAAAAQi4gQm5gGIAAAAQmQgGjfgZIAAAAQhVgKiTgVIAAAAQAyhUAohuIAAAAQAWg+AehkIAAAAIAxijIAAAAQANgoARgPIAAAAQAMgKASgFIAAAAIAigGIAAAAQBbgQA5gxIAAAAQA0gqAXhCIAAAAQAPgqAAgrIAAAAQAAgXgEgYIAAAAQgNhBgug0IAAAAQgvg0hAgUIAAAAQAuhlATgzIAAAAQAXhCAAg2IAAAAQAAgTgCgRIAAAAQgNhMg/g4IAAAAQg9g3hPgJIAAAAQBPAJA9A3IAAAAQA/A4ANBMIAAAAQACARAAATIAAAAQAAA2gXBCIAAAAQgTAzguBlIAAAAQBAAUAvA0IAAAAQAuA0ANBBIAAAAQAEAYAAAXIAAAAQAAArgPAqIAAAAQgXBCg0AqIAAAAQg5AxhbAQIAAAAIgiAGIAAAAQgSAFgMAKIAAAAQgRAPgNAoIAAAAIgxCjIAAAAQgeBkgWA+IAAAAQgoBugyBUIAAAAQghA2glArIAAAAQhMBYhqA3IAAAAQhpA4h0AMIAAAAQgdADgaAAIAAAAQhfAAg/gpgAnCkJIABAAIAAAAIgBAAgAm/kJQAqgJAlAAIAAAAQglAAgqAJgAlvkSIAAAAIAAAAIAAAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AzVY3IgjgZIAAAAQgVgPgRgGIAAAAQgVgIgfACIAAAAIg2AGIAAAAQhoANg/gkIAAAAQgLgGgigYIAAAAQgbgTgTgIIAAAAQgVgIgcgCIAAAAQgTgBggACIAAAAItqAlQhSADgngBIAAAAQhEgEgzgQIAAAAQg9gVgsgpIAAAAQgvgugLg5IAAAAQgCgPgGgFIAAAAQgHgHgTADIAAAAInzBRQhaAPg0AAIAAAAQhPABg5gaIAAAAQgugVgjgnIAAAAQgigngPgwIAAAAQgQgwAGg0IAAAAQAGgzAZgsIAAAAQAphGBagxIAAAAQA0gcB4grIAAAAQBqgmC1hKIAAAAQDOhUBQgeIAAAAQEAhhGGhwIAAAAQG2h6DYhBIAAAAQEXhVFIh0IAAAAQDzhWFkiHIAAAAQBSggAsgLIAAAAIAIgBIAAAAIAEgBIAAAAIgEABIAAAAQAIhSAFheIAAAAQACguADgXIAAAAQAFgmAMgcIAAAAIAFgKIAAAAIEFkWIAAAAQIkkiGplVIAAAAIAPgMIAAAAQBnglBygcIAAAAQAzgMAigBIAAAAQAVgMAYgKIAAAAQARAAATgEIAAAAIA1gMIAAAAQFRgHEqgDIAAAAQD1gCCCAMIAAAAIA3AFIAAAAQAmABAzgBIAAAAQBlgBAtACIAAAAQAtACBaAJIAAAAIAIAJIAAAAQBMgBAuAJIAAAAQAlAIA+AZIAAAAQDrA9DwCVIAAAAQAjAVASAPIAAAAIABABIAAAAIAFACIAAAAIA4ASIAAAAQAhAKAVALIAAAAQAMAFAJAHIAAAAIAYgDIAAAAIBNA3IAAAAIA1AlIAAAAQAdAXASAWIAAAAQAJANAJAQIAAAAQAvApAaApIAAAAQARAcAOAnIAAAAQAKAaAMAuIAAAAQAXBXAXBrIAAAAQAQBMgBApIAAAAQgCBNgqApIAAAAQgXAWgfAJIAAAAQgRAEgRAAIAAAAIgUA1IhdA+IAAAAQg4AlgyAcIAAAAIg0AtIAAAAQhWBLhwBXIAAAAQhDA0iIBnIAAAAInRFfQiQBthOAxIAAAAIgiAUIAAAAQh6BshQBDIAAAAQiSB4iHBgIAAAAIgZAXIAAAAQjQC3mKEEIAAAAIhcA9IAAAAQgGgNgHgNIAAAAQggg5g6giIAAAAQgygdhFgPIAAAAQgvgKhQgHIAAAAQi4gQm5gGIAAAAQmQgGjfgZIAAAAQhVgKiTgVIAAAAQAyhUAohuIAAAAQAWg+AehkIAAAAIAxijIAAAAQANgoARgPIAAAAQAMgKASgFIAAAAIAigGIAAAAQBbgQA5gxIAAAAQA0gqAXhCIAAAAQAPgqAAgrIAAAAQAAgXgEgYIAAAAQgNhBgug0IAAAAQgvg0hAgUIAAAAQAuhlATgzIAAAAQAXhCAAg2IAAAAQAAgTgCgRIAAAAQgNhMg/g4IAAAAQg9g3hPgJIAAAAQBPAJA9A3IAAAAQA/A4ANBMIAAAAQACARAAATIAAAAQAAA2gXBCIAAAAQgTAzguBlIAAAAQBAAUAvA0IAAAAQAuA0ANBBIAAAAQAEAYAAAXIAAAAQAAArgPAqIAAAAQgXBCg0AqIAAAAQg5AxhbAQIAAAAIgiAGIAAAAQgSAFgMAKIAAAAQgRAPgNAoIAAAAIgxCjIAAAAQgeBkgWA+IAAAAQgoBugyBUIAAAAQghA2glArIAAAAQhMBYhqA3IAAAAQhpA4h0AMIAAAAQgdADgaAAIAAAAQhfAAg/gpgAnCkJIABAAIAAAAIgBAAgAm/kJQAqgJAlAAIAAAAQglAAgqAJgAlvkSIAAAAIAAAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-13.7556,y:230.8679}).wait(9).to({graphics:mask_graphics_9,x:-13.7556,y:230.8679}).wait(1).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_graphics_16,x:-13.7556,y:230.8679}).wait(254));

	// sb_sc4_bg_copy
	this.instance = new lib.sb_sc4bg("synched",0);
	this.instance.setTransform(344.9,103.8,1,1,0,0,0,301.7,257.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({startPosition:0},0).to({_off:true},1).wait(6).to({_off:false},0).wait(254));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-413.8,67.6,800.5,287.9);


(lib.an_sc4title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc4_title
	this.instance = new lib.sb_sc4title("synched",0);
	this.instance.setTransform(138.2,56.5,1,1,0,0,0,137.2,55.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},21,cjs.Ease.cubicOut).wait(29));

	// sb_sc4_title_bg
	this.instance_1 = new lib.sb_sc4_titlebg("synched",0);
	this.instance_1.setTransform(607.8,80.4,1,1,0,0,0,296.8,36.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:80.75,alpha:1},13,cjs.Ease.cubicOut).wait(37));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216,44,1120.6,72.8);


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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape.setTransform(-612.2638,183.8212,1.4366,3.993,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.498,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape_1.setTransform(1048.4236,360.6305,3.5935,2.1374,-146.2686);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape_2.setTransform(-259.7228,57.8579,3.0901,2.1374,29.999);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape_3.setTransform(-1001.9228,111.0579,3.0901,2.1374,29.999);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.075,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape_4.setTransform(682.1799,338.8422,1.5648,4.3829,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape_5.setTransform(-236.2177,183.8212,1.1371,3.993);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(270));

	// sb_sc4_bg_mask
	this.instance = new lib.sb_sc4bgmask("synched",0);
	this.instance.setTransform(272.8,311.2,1.1079,1.1079,0,0,0,284.9,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:285,regY:149.9,scaleX:1,scaleY:1,x:296.4,y:302.55,startPosition:16},10,cjs.Ease.cubicOut).wait(260));

	// sb_sc4_bg
	this.instance_1 = new lib.sb_sc4bg("synched",0);
	this.instance_1.setTransform(356.3,256.45,1,1,0,0,0,301.7,257.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(270));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("EifvAsOMAAAhYaME/fAAAMAAABYag");
	this.shape_6.setTransform(369,261.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(270));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1674.2,-867.3,3471.7,2360);


(lib.an_sc3title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_title
	this.instance = new lib.sb_sc3title("synched",0);
	this.instance.setTransform(136.35,52.15,1,1,0,0,0,135.1,35.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},23,cjs.Ease.cubicOut).to({startPosition:0},55).to({_off:true},1).wait(10));

	// sb_sc3_title_bg
	this.instance_1 = new lib.sb_sc3_titlebg("synched",0);
	this.instance_1.setTransform(879.6,77.4,1,1,0,0,0,296.8,36.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:285.1,alpha:1},10,cjs.Ease.cubicOut).to({startPosition:0},68).to({_off:true},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,41,1296.1000000000001,72.8);


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
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(31.1,69.9,1,1,0,0,0,31.1,69.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,62.2,139.8), null);


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
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(32,70.8,1,1,0,0,0,32,70.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,64.1,141.7), null);


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
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(28.3,69.2,1,1,0,0,0,28.3,69.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,56.7,138.6), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("Ak/LEIAA2HIJ/AAIAAWHg");
	mask.setTransform(32.025,70.825);

	// Layer_3
	this.instance = new lib.Group();
	this.instance.setTransform(31.4,70.95,1,1,0,0,0,28.3,69.2);
	this.instance.alpha = 0.7617;

	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(32,70.8,1,1,0,0,0,32,70.8);
	this.instance_1.alpha = 0.7617;

	this.instance_2 = new lib.Group_2();
	this.instance_2.setTransform(32.05,70.85,1,1,0,0,0,31.1,69.9);
	this.instance_2.alpha = 0.4414;

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,64.1,141.7), null);


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
	this.instance.setTransform(144.25,36.45,1,1,0,0,0,142.7,20.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({alpha:1,startPosition:16},16,cjs.Ease.cubicOut).to({startPosition:72},56).to({_off:true},1).wait(10));

	// sb_sc2_title_bg
	this.instance_1 = new lib.sb_sc2_titlebg("synched",0);
	this.instance_1.setTransform(532.3,36.4,1,1,0,0,0,192.8,36.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:135.2,y:37.2,alpha:1},10).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.6,0,782.7,73.6);


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

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EgxAgxAMBiBAAAMAAABiBMhiBAAAg");
	this.shape.setTransform(896.2733,896.4646,1.698,3.5708,44.9997);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-313.7,0,313.7,0).s().p("EgxAAxBMAAAhiBMBiBAAAMAAABiBg");
	this.shape_1.setTransform(896.2733,896.4646,1.698,3.5708,44.9997);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Ei1LA/gMD0rj0sMB1tB1tMj0rD0sg");
	this.shape_2.setTransform(917.55,917.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.204,0.776,1],-376.6,-376.6,376.7,376.7).s().p("Ei1MA/gMD0sj0sMB1sB1tMj0qD0sg");
	this.shape_3.setTransform(917.55,917.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EizxA+FMDx2jx2MB1tB1tMjx2Dx2g");
	this.shape_4.setTransform(938.875,938.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.216,0.765,1],-376.6,-376.6,376.7,376.7).s().p("EizxA+FMDx2jx2MB1tB1tMjx2Dx2g");
	this.shape_5.setTransform(938.875,938.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiyWA8qMDvAjvAMB1tB1tMjvADvAg");
	this.shape_6.setTransform(960.15,959.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.227,0.749,1],-376.7,-376.6,376.6,376.7).s().p("EiyWA8qMDvAjvAMB1tB1tMjvADvAg");
	this.shape_7.setTransform(960.15,959.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eiw7A7QMDsKjsMMB1tB1tMjsKDsMg");
	this.shape_8.setTransform(981.425,980.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.239,0.733,1],-376.6,-376.6,376.7,376.7).s().p("Eiw7A7PMDsKjsKMB1tB1tMjsKDsKg");
	this.shape_9.setTransform(981.425,980.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EivhA51MDpVjpWMB1uB1tMjpWDpWg");
	this.shape_10.setTransform(1002.7,1000.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.251,0.722,1],-376.6,-376.6,376.7,376.7).s().p("EivhA51MDpWjpWMB1tB1tMjpWDpWg");
	this.shape_11.setTransform(1002.7,1000.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiuGA4aMDmgjmgMB1tB1tMjmgDmgg");
	this.shape_12.setTransform(1024.025,1021.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.263,0.706,1],-376.6,-376.6,376.7,376.7).s().p("EiuGA4aMDmgjmgMB1tB1tMjmgDmgg");
	this.shape_13.setTransform(1024.025,1021.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EisrA2/MDjqjjqMB1tB1tMjjqDjqg");
	this.shape_14.setTransform(1045.3,1042.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.275,0.69,1],-376.6,-376.6,376.7,376.7).s().p("EisrA2/MDjqjjqMB1tB1tMjjqDjqg");
	this.shape_15.setTransform(1045.3,1042.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EirQA1kMDg0jg0MB1tB1tMjg0Dg0g");
	this.shape_16.setTransform(1066.575,1063.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.29,0.678,1],-376.6,-376.6,376.7,376.7).s().p("EirQA1kMDg0jg0MB1tB1tMjg0Dg0g");
	this.shape_17.setTransform(1066.575,1063.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eip2A0JMDd/jd/MB1uB1tMjeADeAg");
	this.shape_18.setTransform(1087.85,1084.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.302,0.663,1],-376.6,-376.6,376.7,376.7).s().p("Eip1A0JMDd+jd+MB1tB1tMjd+Dd+g");
	this.shape_19.setTransform(1087.85,1084.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiobAyvMDbKjbKMB1tB1tMjbKDbKg");
	this.shape_20.setTransform(1109.175,1105.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.314,0.647,1],-376.6,-376.6,376.7,376.7).s().p("EiobAyvMDbKjbKMB1tB1tMjbKDbKg");
	this.shape_21.setTransform(1109.175,1105.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EinAAxUMDYUjYUMB1tB1tMjYUDYUg");
	this.shape_22.setTransform(1130.45,1126.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.325,0.631,1],-376.6,-376.6,376.7,376.7).s().p("EinAAxUMDYUjYUMB1tB1tMjYUDYUg");
	this.shape_23.setTransform(1130.45,1126.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EillAv5MDVejVfMB1tB1tMjVeDVgg");
	this.shape_24.setTransform(1151.725,1147.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.337,0.62,1],-376.6,-376.6,376.7,376.7).s().p("EillAv6MDVejVfMB1tB1tMjVeDVfg");
	this.shape_25.setTransform(1151.725,1147.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EikLAufMDSqjSqMB1tB1uMjSqDSpg");
	this.shape_26.setTransform(1173,1168.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.349,0.604,1],-376.6,-376.6,376.7,376.6).s().p("EikLAufMDSpjSpMB1tB1tMjSpDSpg");
	this.shape_27.setTransform(1173,1168.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiiwAtEMDP0jP0MB1tB1tMjP0DP0g");
	this.shape_28.setTransform(1194.325,1188.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.361,0.588,1],-376.6,-376.6,376.7,376.7).s().p("EiiwAtEMDP0jP0MB1tB1tMjP0DP0g");
	this.shape_29.setTransform(1194.325,1188.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EihVArpMDM+jM+MB1tB1tMjM+DM+g");
	this.shape_30.setTransform(1215.6,1209.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.373,0.576,1],-376.6,-376.6,376.7,376.6).s().p("EihVArpMDM+jM+MB1tB1tMjM+DM+g");
	this.shape_31.setTransform(1215.6,1209.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.384,0.561,1],-313.7,0,313.7,0).s().p("EgxAAxBMAAAhiBMBiBAAAMAAABiBg");
	this.shape_32.setTransform(1236.9019,1230.782,1.698,2.9162,44.9998);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EigBAuEMDOFjOFMBx+Bx+MjOFDOFg");
	this.shape_33.setTransform(1248.8,1242.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.373,0.576,1],-364.6,-364.7,364.8,364.7).s().p("EigBAuEMDOFjOFMBx+Bx/MjOEDOEg");
	this.shape_34.setTransform(1248.8,1242.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EigIAx5MDSAjSBMBuRBuQMjSBDSBg");
	this.shape_35.setTransform(1260.75,1254.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.357,0.592,1],-352.8,-352.7,352.8,352.8).s().p("EigIAx5MDSBjSBMBuQBuQMjSBDSBg");
	this.shape_36.setTransform(1260.75,1254.625);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EigPA1uMDV9jV9MBqiBqiMjV9DV9g");
	this.shape_37.setTransform(1272.675,1266.575);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.345,0.612,1],-340.8,-340.8,340.9,340.9).s().p("EigPA1uMDV9jV9MBqiBqiMjV9DV9g");
	this.shape_38.setTransform(1272.675,1266.575);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EigVA5kMDZ4jZ5MBmzBmzMjZ4DZ5g");
	this.shape_39.setTransform(1284.625,1278.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.329,0.627,1],-328.9,-328.9,329,329).s().p("EigVA5jMDZ4jZ4MBmzBmzMjZ4DZ4g");
	this.shape_40.setTransform(1284.625,1278.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EigcA9ZMDd1jd1MBjEBjFMjd0Dd0g");
	this.shape_41.setTransform(1296.55,1290.425);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.314,0.643,1],-317,-317,317.1,317).s().p("EigcA9ZMDd0jd1MBjFBjFMjd1Dd0g");
	this.shape_42.setTransform(1296.55,1290.425);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EigjBBOMDhwjhxMBfXBfXMjhxDhwg");
	this.shape_43.setTransform(1308.5,1302.35);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.302,0.659,1],-305.1,-305,305.1,305.1).s().p("EigjBBOMDhwjhxMBfXBfWMjhxDhxg");
	this.shape_44.setTransform(1308.5,1302.35);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EigqBFDMDltjltMBboBboMjltDltg");
	this.shape_45.setTransform(1320.425,1314.325);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.29,0.678,1],-293.1,-293.1,293.2,293.2).s().p("EigqBFDMDltjltMBboBboMjltDltg");
	this.shape_46.setTransform(1320.425,1314.325);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EigwBI4MDppjppMBX5BX5MjppDppg");
	this.shape_47.setTransform(1332.35,1326.25);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.275,0.694,1],-281.2,-281.3,281.3,281.2).s().p("EigxBI4MDpqjppMBX5BX5MjppDppg");
	this.shape_48.setTransform(1332.35,1326.25);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eig4BMtMDtljtkMBULBUKMjtlDtlg");
	this.shape_49.setTransform(1344.3,1338.175);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.263,0.71,1],-269.3,-269.3,269.4,269.4).s().p("Eig4BMtMDtmjtkMBUKBUKMjtkDtlg");
	this.shape_50.setTransform(1344.3,1338.175);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eig+BQiMDxhjxgMBQcBQcMjxhDxhg");
	this.shape_51.setTransform(1356.225,1350.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.247,0.725,1],-257.4,-257.4,257.4,257.4).s().p("Eig+BQiMDxhjxgMBQcBQcMjxhDxhg");
	this.shape_52.setTransform(1356.225,1350.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EihFBUYMD1dj1dMBMuBMuMj1dD1dg");
	this.shape_53.setTransform(1368.175,1362.025);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.231,0.741,1],-245.4,-245.4,245.5,245.5).s().p("EihFBUYMD1dj1dMBMuBMuMj1dD1dg");
	this.shape_54.setTransform(1368.175,1362.025);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EihLBYNMD5Zj5ZMBI/BJAMj5ZD5Zg");
	this.shape_55.setTransform(1380.1,1373.975);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.22,0.761,1],-233.5,-233.5,233.6,233.6).s().p("EihLBYNMD5Yj5ZMBI/BJAMj5YD5Zg");
	this.shape_56.setTransform(1380.1,1373.975);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EihTBcDMD9Vj9WMBFSBFRMj9WD9Wg");
	this.shape_57.setTransform(1392.05,1385.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.204,0.776,1],-221.6,-221.6,221.6,221.6).s().p("EihSBcDMD9Uj9WMBFSBFSMj9WD9Ug");
	this.shape_58.setTransform(1392.05,1385.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1.698,scaleY:3.5708,x:896.2733,y:896.4646}},{t:this.shape,p:{scaleY:3.5708,rotation:44.9997,x:896.2733,y:896.4646,scaleX:1.698}}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_32},{t:this.shape,p:{scaleY:2.9162,rotation:44.9998,x:1236.9019,y:1230.782,scaleX:1.698}}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).wait(1));

	// Layer_3
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape_59.setTransform(979.0614,850.8908,0.6112,1.5961,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape_60.setTransform(402.1387,827.7402,0.6112,1.5961);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59}]}).wait(90));

	// sc2_bg
	this.instance = new lib.sb_sc2bg("synched",0);
	this.instance.setTransform(690.6,860.4,1.1444,1.1444,0,0,0,330.1,283);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// Layer_2
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#CA0000").ss(1,1,1).p("EifHgtPME+PAAAMAAABafMk+PAAAg");
	this.shape_61.setTransform(897.475,927.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("EifHAtPMAAAhadME+PAAAMAAABadg");
	this.shape_62.setTransform(897.475,927.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61}]}).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-273.4,-273.3,2711.4,2705.2000000000003);


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

	// MergedLayer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_27 = new cjs.Graphics().p("AFDEUQAigdAAg6IAAAAIAAgJIAWAAIgBAbQALAwAeARIAAAAQgKAHgFAMIAAAAQgWgOgMgeIAAAAQgJAagVATIAAAAQgHgLgKgFgAlMEOQAZgKAQgTIAAAAQgJgRgHgaIAAAAIgKAOIAAAAIgMgNIAAADIguAAIAAAwIAtgQQAAAMADAKIAAAAQg+AYgIAFIAAAAQgCgNgHgKIAAAAQAIgEAAgIIAAAAIAAhHIAuAAIAAggIgwAAIAAgWIBHAAIAABBQASgbAJgyIAAAAIAXAEIgIAeIAAAAIA4AAIAAAUIgIAAQgIAvgQAbIAAAAQAPAUAVAJIAAAAQgKAKgFAKIAAAAQgTgKgRgUIAAAAQgQAUgZAMIAAAAQgEgKgJgMgAkmCpQAGAcAKAWIAAAAQAKgVAFgfIAAAAIgeAAgAEUEjIAAg+IglAAIAAgSIBdAAIAAASIgjAAIAAA+gAZPEiIAAhWIgjAAIAABDIgXAAIAAhZIA6AAIAAgWIhKAAIAAgVIBNAAIgKgVIAAAAIAXgHIAOAcIAAAAIBGAAIAAAVIhMAAIAAAWIA9AAIAABBQAAAQgKAEIAAAAQgIAEgZAAIAAAAQgCgKgGgNIAAAAQARACAHgBIAAAAQAEAAAAgDIAAAAIAAgqIgmAAIAABWgAvMEUQAFgIADgKIAAAAIgNAIQgFgMgKgQIAAAAIAPgIQAHAKAHAPIAAAAQAGgUAAglIAAAAIAAhDQAmgHAUgKIAAAAIARARQgSAIgkAGIAAAAIAAAfIA6AAIAAAUIgSAAIAABeIgWAAIAAheIgSAAIAAACQAABAgSAcIAAAAQgKgKgIgEgA6gEiIAAgUIBEAAIAAgXIgyAAIAAgTIAyAAIAAgXIgpAAIAAgQIgXAOIAAAAQgHgKgHgIIAAAAQAigOAcgbIAAAAIgZAAIAAgWIBBAAQAMATAWARIAAAAQAVAQAYAJIAAAAQgJAIgGAMIAAAAQgKgEgOgJIAAAAIAAAPIgpAAIAAAXIAyAAIAAATIgyAAIAAAXIBHAAIAAAUgA5/C5IBdAAQgZgQgVgZIAAAAQgTAWgcATgAv6EhIAAg/IgjAAIAAgTIAjAAIAAgPIgkAAIAAgSIASAAQgCgMgDgJIAAAAIAPgDIgZAAIAAgTIAgAAIgGgPIAXgFQAGALADAJIAAAAIAbAAIAAATIgYAAIAPADIgIAVIATAAIAAASIggAAIAAAPIAdAAIAAATIgdAAIAAA/gAv5CpIgOAFIAcAAIAIgYIAAAAIgcAAQAEAKACAJgAN6EXIAAgWIBEAAIAAiQIAYAAIAAA3IBDAAIAAAXIhDAAIAABCIBRAAIAAAWgADtEOQAHgMAHgZIAAAAIATAFQgHAXgJAQIAAAAgAwhEKQAKgOAHgUIAAAAIARAFQgIAWgLARIAAAAgAEuDvIARgGQAIAPAEAOIAAAAIgRAHQgEgNgIgRgAFFDCIAAAIIhOAAIAAgSIBOAAIAAABQAOgbAFgtIAAAAIAWADIgGAgIAAAAIAmAAIAEgBIAPAEQgHAjgHASIAAAAIgSgFIAHggIAAAAIglAAQgGAWgKAQIAAAAIgOgLgAD2CvIAAgSIAeAAIAAgKIgjAAIAAgTIAjAAIAAgOIAVAAIAAAOIAhAAIAAATIghAAIAAAKIAdAAIAAASgACghIIAAgwQA4APAdAAIAAAAQAbAAAMgFIAAAAQAMgFAAgKIAAAAQAAgQgfgHIAAAAIg4gPQgZgGgOgQIAAAAQgNgQAAgXIAAAAQAAhDBkAAIAAAAQAdAAAxALIAAAAIAAAvIgngIIAAAAQgVgDgWAAIAAAAQgpAAAAATIAAAAQAAANAXAGIAAAAIA6APQA5APAAAuIAAAAQAAAigYASIAAAAQgaASgxABIAAAAQgtgBgugMgAaAhDIgNgpIhpAAIgNApIg3AAQAnh+AuhiIAAAAIBKAAQAxBpAlB3IAAAAgAYZiZIBLAAQgSg0gUguIAAAAQgUAugRA0gAVchDQgbgugZgZIAAAAIgjAAIAABHIg2AAIAAjgIBpAAQAoAAAXAPIAAAAQAeASAAAqIAAAAQAAAZgPASIAAAAQgPASgYAGIAAAAQAjAkAdAuIAAAAgAUGi3IApAAQAvgBAAggIAAAAQAAgdgwgBIAAAAIgoAAgAQKhDIAAizIhKAAIAAgtIDIAAIAAAtIhJAAIAACzgANIhDIhoiXIAACXIg0AAIAAjfIA9AAIBgCMIAAiMIA0AAIAADfgAGqhDIAAjgICtAAIAAAtIh4AAIAAAsIBtAAIAAArIhtAAIAAAvIB7AAIAAAtgAiDhDQgbhVgJgqIAAAAQgIAegfBhIAAAAIhIAAQgdh0gThrIAAAAIA1AAQAMBZAWBQIAAAAQAfhZALgxIAAAAIA7AAQALAwAgBaIAAAAQAVhQAMhZIAAAAIA1AAQgTBngdB4IAAAAgAorhDIAAjfICtAAIAAAtIh4AAIAAArIBtAAIAAArIhtAAIAAAvIB6AAIAAAtgAq5hDIhoiXIAACXIg0AAIAAjfIA+AAIBeCMIAAiMIA1AAIAADfgAyqhDIAAjfIA1AAIAACyIBoAAIAAAtgA2DhDIAAjfIA1AAIAACyIBoAAIAAAtgA4BhDIgNgpIhpAAIgMApIg3AAQAmh7AuhkIAAAAIBKAAQAwBlAmB6IAAAAgA5oiZIBLAAQgSg0gUguIAAAAQgUAxgRAxg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_graphics_27,x:94.5247,y:20.1501}).wait(33));

	// Layer_11
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-70.7,0,70.8,0).s().p("ArDZpMAAAgzRIWHAAMAAAAzRg");
	this.shape.setTransform(-108.3466,41.4119,1,1,29.9992);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-61.3,-35.4,61.3,35.3).s().p("A2YQrMAZngsZITKLEMgZoAsZg");
	this.shape_1.setTransform(-52.6,46.975);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-61.3,-35.4,61.3,35.3).s().p("A2YQrMAZogsZITJLEMgZnAsZg");
	this.shape_2.setTransform(89.65,61.175);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-61.3,-35.4,61.3,35.3).s().p("A2YQrMAZngsZITKLEMgZnAsZg");
	this.shape_3.setTransform(227.3,74.925);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(27).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false,x:393.9534,y:91.5619},0).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(28).to({_off:false},0).wait(1).to({x:-1.1,y:52.125},0).wait(1).to({x:46.25,y:56.875},0).to({_off:true},1).wait(1).to({_off:false,x:129.3,y:65.175},0).wait(1).to({x:165.3,y:68.725},0).wait(1).to({x:197.9,y:72.025},0).to({_off:true},1).wait(2).to({_off:false,x:276.9,y:79.875},0).wait(1).to({x:297.5,y:81.925},0).to({_off:true},1).wait(10).to({_off:false,x:392.1,y:91.375},0).wait(1).to({x:393.2,y:91.475},0).to({_off:true},1).wait(1).to({_off:false,x:393.9,y:91.575},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(31).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,x:253.55,y:77.575},0).to({_off:true},1).wait(2).to({_off:false,x:315.55,y:83.725},0).to({_off:true},1).wait(1).to({_off:false,x:344.55,y:86.625},0).to({_off:true},1).wait(1).to({_off:false,x:365.35,y:88.725},0).to({_off:true},1).wait(2).to({_off:false,x:384.15,y:90.575},0).wait(1).to({x:387.75,y:90.975},0).wait(1).to({x:390.35,y:91.225},0).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(35).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,x:331.15,y:85.325},0).to({_off:true},1).wait(1).to({_off:false,x:355.9,y:87.775},0).to({_off:true},1).wait(1).to({_off:false,x:373.1,y:89.475},0).wait(1).to({x:379.3,y:90.125},0).to({_off:true},1).wait(5).to({_off:false,x:393.7,y:91.575},0).to({_off:true},1).wait(8));

	// line
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(26,26,26,0)").ss(0.5).p("AVMAAMgqYAAA");
	this.shape_4.setTransform(270.0848,56.5,0.0184,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(26,26,26,0.298)").ss(0.5).p("AoUAAIQpAA");
	this.shape_5.setTransform(219.225,56.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(26,26,26,0.529)").ss(0.5).p("AufAAIc/AA");
	this.shape_6.setTransform(179.6,56.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(26,26,26,0.702)").ss(0.5).p("AzIAAMAmRAAA");
	this.shape_7.setTransform(149.825,56.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(26,26,26,0.827)").ss(0.5).p("A2dAAMAs7AAA");
	this.shape_8.setTransform(128.475,56.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(26,26,26,0.914)").ss(0.5).p("A4sAAMAxZAAA");
	this.shape_9.setTransform(114.2,56.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(26,26,26,0.965)").ss(0.5).p("A6DAAMA0HAAA");
	this.shape_10.setTransform(105.5,56.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(26,26,26,0.988)").ss(0.5).p("A6vAAMA1fAAA");
	this.shape_11.setTransform(101.05,56.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#1A1A1A").ss(0.5).p("A7AAAMA2BAAA");
	this.shape_12.setTransform(99.4,56.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#1A1A1A").ss(0.5).p("AVMAAMgqYAAA");
	this.shape_13.setTransform(99.1869,56.5,1.2759,1);
	this.shape_13._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},14).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(23).to({_off:false},0).wait(37));

	// line
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(26,26,26,0)").ss(0.5).p("AVMAAMgqYAAA");
	this.shape_14.setTransform(-73.7152,23.7,0.0184,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(26,26,26,0.298)").ss(0.5).p("AoXAAIQvAA");
	this.shape_15.setTransform(-22.525,23.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(26,26,26,0.529)").ss(0.5).p("AukAAIdJAA");
	this.shape_16.setTransform(17.325,23.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(26,26,26,0.702)").ss(0.5).p("AzPAAMAmfAAA");
	this.shape_17.setTransform(47.275,23.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(26,26,26,0.827)").ss(0.5).p("A2lAAMAtLAAA");
	this.shape_18.setTransform(68.725,23.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(26,26,26,0.914)").ss(0.5).p("A41AAMAxrAAA");
	this.shape_19.setTransform(83.1,23.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(26,26,26,0.965)").ss(0.5).p("A6MAAMA0ZAAA");
	this.shape_20.setTransform(91.85,23.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(26,26,26,0.988)").ss(0.5).p("A65AAMA1zAAA");
	this.shape_21.setTransform(96.325,23.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#1A1A1A").ss(0.5).p("A7JAAMA2TAAA");
	this.shape_22.setTransform(97.975,23.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#1A1A1A").ss(0.5).p("AVMAAMgqYAAA");
	this.shape_23.setTransform(98.1921,23.7,1.2831,1);
	this.shape_23._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14}]},14).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(23).to({_off:false},0).wait(37));

	// sb_sc1_change
	this.instance = new lib.sb_sc1change("synched",0);
	this.instance.setTransform(137.95,86.6,1,1,0,0,0,134.5,9.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({alpha:1},12).wait(37));

	// sb_sc1_sentra
	this.instance_1 = new lib.sb_sc1sentra("synched",0);
	this.instance_1.setTransform(140.1,35.65,1,1,0,0,0,134.7,14);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({y:48.15,alpha:1},14).wait(44));

	// sb_sc1_allnew
	this.instance_2 = new lib.sb_sc1allnew("synched",0);
	this.instance_2.setTransform(140.55,-0.7,1,1,0,0,0,133.2,11.8);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:11.8,alpha:1},15).wait(45));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.7,-21.5,351.3,79);


(lib.an_sc1sub = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc1_sub_number
	this.instance = new lib.sb_sc1subnumber("synched",0);
	this.instance.setTransform(133.5,15.55,0.754,0.754,0,0,0,46.7,15.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regY:15.6,scaleX:1,scaleY:1,y:15.6,alpha:1},15,cjs.Ease.backOut).wait(1));

	// sb_sc1_sub_tt
	this.instance_1 = new lib.sb_sc1subtt("synched",0);
	this.instance_1.setTransform(134.5,16.2,1,1,0,0,0,134.5,10);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},16,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.6,-0.3,378.20000000000005,32);


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
	this.instance = new lib.sb_sc1bg();
	this.instance.setTransform(363.9,280.5,1,1,0,0,0,327.2,280.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:327.2},19,cjs.Ease.cubicOut).wait(41));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-676,20,2034.1,554.8);


(lib.an_footbgred = function(mode,startPosition,loop,reversed) {
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
	var mask_graphics_0 = new cjs.Graphics().p("APFwqICGgWMAFdAhrIiGAWg");
	var mask_graphics_1 = new cjs.Graphics().p("AnqwCIJ3hmMAFdAhrIp2Bmg");
	var mask_graphics_2 = new cjs.Graphics().p("Aq5vgIQViqMAFeAhrIwWCqg");
	var mask_graphics_3 = new cjs.Graphics().p("AtjvFIVqjgMAFdAhrI1qDgg");
	var mask_graphics_4 = new cjs.Graphics().p("AvruvIZ5kMMAFeAhrI55EMg");
	var mask_graphics_5 = new cjs.Graphics().p("AxVueIdOkuMAFdAhrI9NEug");
	var mask_graphics_6 = new cjs.Graphics().p("AyluRIftlIMAFeAhqI/tFKg");
	var mask_graphics_7 = new cjs.Graphics().p("AzeuHMAhfgFcMAFeAhrMghfAFcg");
	var mask_graphics_8 = new cjs.Graphics().p("A0EuBMAirgFoMAFeAhrMgirAFog");
	var mask_graphics_9 = new cjs.Graphics().p("A0bt9MAjagFvMAFdAhqMgjaAFvg");
	var mask_graphics_10 = new cjs.Graphics().p("A0nt8MAjxgFyMAFeAhrMgjxAFyg");
	var mask_graphics_11 = new cjs.Graphics().p("A0rt7MAj6gF0MAFdAhrMgj6AF0g");
	var mask_graphics_12 = new cjs.Graphics().p("A0stnMAj8gF1MAFdAhrMgj7AF1g");
	var mask_graphics_13 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_14 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_15 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_16 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_17 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_18 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_19 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_20 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_21 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_22 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_23 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_24 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_25 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_26 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_27 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_28 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_29 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_30 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_31 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_32 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_33 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_34 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_35 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_36 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_37 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_38 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_39 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_40 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_41 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_42 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_43 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_44 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_45 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_46 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_47 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_48 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_49 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_50 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_51 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_52 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_53 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_54 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_55 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_56 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_57 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_58 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_59 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_60 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_61 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_62 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_63 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_64 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_65 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_66 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_67 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_68 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_69 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_70 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_71 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_72 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_73 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_74 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_75 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_76 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_77 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_78 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_79 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_80 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_81 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_82 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_83 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_84 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_85 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_86 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_87 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_88 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_89 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_90 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_91 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_92 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_93 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_94 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_95 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_96 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_97 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_98 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_99 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_100 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_101 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_102 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_103 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_104 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_105 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_106 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_107 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_108 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_109 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_110 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_111 = new cjs.Graphics().p("A0st7MAj7gF0MAFeAhrMgj8AF0g");
	var mask_graphics_112 = new cjs.Graphics().p("A0stnMAj8gF1MAFdAhrMgj7AF1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:144.7976,y:108.8548}).wait(1).to({graphics:mask_graphics_1,x:234.9,y:113.8}).wait(1).to({graphics:mask_graphics_2,x:209.45,y:117.925}).wait(1).to({graphics:mask_graphics_3,x:188.6,y:121.275}).wait(1).to({graphics:mask_graphics_4,x:171.9,y:123.975}).wait(1).to({graphics:mask_graphics_5,x:158.9,y:126.075}).wait(1).to({graphics:mask_graphics_6,x:149.125,y:127.65}).wait(1).to({graphics:mask_graphics_7,x:142.125,y:128.775}).wait(1).to({graphics:mask_graphics_8,x:137.425,y:129.525}).wait(1).to({graphics:mask_graphics_9,x:134.575,y:130}).wait(1).to({graphics:mask_graphics_10,x:133.1,y:130.225}).wait(1).to({graphics:mask_graphics_11,x:132.575,y:130.325}).wait(1).to({graphics:mask_graphics_12,x:132.4806,y:128.3558}).wait(1).to({graphics:mask_graphics_13,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_14,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_15,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_16,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_17,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_18,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_19,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_20,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_21,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_22,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_23,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_24,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_25,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_26,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_27,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_28,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_29,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_30,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_31,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_32,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_33,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_34,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_35,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_36,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_37,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_38,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_39,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_40,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_41,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_42,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_43,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_44,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_45,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_46,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_47,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_48,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_49,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_50,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_51,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_52,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_53,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_54,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_55,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_56,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_57,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_58,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_59,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_60,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_61,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_62,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_63,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_64,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_65,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_66,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_67,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_68,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_69,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_70,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_71,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_72,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_73,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_74,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_75,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_76,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_77,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_78,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_79,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_80,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_81,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_82,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_83,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_84,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_85,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_86,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_87,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_88,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_89,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_90,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_91,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_92,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_93,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_94,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_95,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_96,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_97,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_98,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_99,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_100,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_101,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_102,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_103,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_104,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_105,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_106,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_107,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_108,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_109,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_110,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_111,x:132.5,y:130.325}).wait(1).to({graphics:mask_graphics_112,x:132.4806,y:128.3558}).wait(1).to({graphics:null,x:0,y:0}).wait(11));

	// sb_foot_bg_red
	this.instance = new lib.sb_footbgred("synched",0);
	this.instance.setTransform(161.45,100.85,1,1,0,0,0,110,61.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(112).to({startPosition:0},0).to({_off:true},1).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(60.4,47.6,189,92.5);


(lib.an_footbgblue = function(mode,startPosition,loop,reversed) {
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
	var mask_graphics_0 = new cjs.Graphics().p("AjpqvIBhgQMAFzAh8IhhARg");
	var mask_graphics_1 = new cjs.Graphics().p("ArqveIRhjAMAF0Ah9IxhDAg");
	var mask_graphics_2 = new cjs.Graphics().p("AyVuVIe3lSMAF0Ah9I+3FSg");
	var mask_graphics_3 = new cjs.Graphics().p("A3ztYMApzgHLMAF0Ah8MgpzAHLg");
	var mask_graphics_4 = new cjs.Graphics().p("A8LspMAyjgIqMAF0Ah9MgyjAIqg");
	var mask_graphics_5 = new cjs.Graphics().p("A/lsDMA5XgJ1MAF0Ah8Mg5XAJ1g");
	var mask_graphics_6 = new cjs.Graphics().p("EgiJgLnMA+fgKtMAF0Ah8Mg+fAKtg");
	var mask_graphics_7 = new cjs.Graphics().p("Egj/gLTMBCKgLVMAF1Ah8MhCKALWg");
	var mask_graphics_8 = new cjs.Graphics().p("EglNgLGMBEngLwMAF0Ah9MhEnALwg");
	var mask_graphics_9 = new cjs.Graphics().p("Egl9gK9MBGGgMBMAF1Ah8MhGGAMBg");
	var mask_graphics_10 = new cjs.Graphics().p("EgmWgK5MBG4gMJMAF1Ah8MhG4AMJg");
	var mask_graphics_11 = new cjs.Graphics().p("EgmfgK4MBHKgMMMAF1Ah9MhHKAMMg");
	var mask_graphics_12 = new cjs.Graphics().p("EglugK3MBHNgMNMAF0Ah9MhHNAMMg");
	var mask_graphics_13 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_14 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_15 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_16 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_17 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_18 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_19 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_20 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_21 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_22 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_23 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_24 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_25 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_26 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_27 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_28 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_29 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_30 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_31 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_32 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_33 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_34 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_35 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_36 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_37 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_38 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_39 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_40 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_41 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_42 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_43 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_44 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_45 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_46 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_47 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_48 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_49 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_50 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_51 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_52 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_53 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_54 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_55 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_56 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_57 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_58 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_59 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_60 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_61 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_62 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_63 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_64 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_65 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_66 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_67 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_68 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_69 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_70 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_71 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_72 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_73 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_74 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_75 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_76 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_77 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_78 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_79 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_80 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_81 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_82 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_83 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_84 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_85 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_86 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_87 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_88 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_89 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_90 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_91 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_92 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_93 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_94 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_95 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_96 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_97 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_98 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_99 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_100 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_101 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_102 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_103 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_104 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_105 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_106 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_107 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_108 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_109 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_110 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_111 = new cjs.Graphics().p("EgmggK4MBHNgMMMAF0Ah8MhHMAMNg");
	var mask_graphics_112 = new cjs.Graphics().p("EglugK3MBHNgMNMAF0Ah9MhHNAMMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:23.4648,y:148.5769}).wait(1).to({graphics:mask_graphics_1,x:77.025,y:178.475}).wait(1).to({graphics:mask_graphics_2,x:121.675,y:170.825}).wait(1).to({graphics:mask_graphics_3,x:158.225,y:164.55}).wait(1).to({graphics:mask_graphics_4,x:187.475,y:159.525}).wait(1).to({graphics:mask_graphics_5,x:210.275,y:155.625}).wait(1).to({graphics:mask_graphics_6,x:227.425,y:152.675}).wait(1).to({graphics:mask_graphics_7,x:239.675,y:150.6}).wait(1).to({graphics:mask_graphics_8,x:247.925,y:149.175}).wait(1).to({graphics:mask_graphics_9,x:252.9,y:148.325}).wait(1).to({graphics:mask_graphics_10,x:255.475,y:147.875}).wait(1).to({graphics:mask_graphics_11,x:256.425,y:147.725}).wait(1).to({graphics:mask_graphics_12,x:251.5144,y:147.6892}).wait(1).to({graphics:mask_graphics_13,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_14,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_15,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_16,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_17,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_18,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_19,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_20,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_21,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_22,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_23,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_24,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_25,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_26,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_27,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_28,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_29,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_30,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_31,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_32,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_33,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_34,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_35,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_36,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_37,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_38,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_39,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_40,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_41,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_42,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_43,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_44,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_45,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_46,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_47,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_48,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_49,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_50,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_51,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_52,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_53,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_54,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_55,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_56,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_57,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_58,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_59,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_60,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_61,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_62,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_63,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_64,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_65,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_66,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_67,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_68,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_69,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_70,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_71,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_72,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_73,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_74,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_75,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_76,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_77,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_78,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_79,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_80,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_81,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_82,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_83,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_84,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_85,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_86,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_87,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_88,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_89,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_90,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_91,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_92,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_93,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_94,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_95,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_96,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_97,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_98,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_99,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_100,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_101,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_102,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_103,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_104,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_105,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_106,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_107,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_108,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_109,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_110,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_111,x:256.55,y:147.7}).wait(1).to({graphics:mask_graphics_112,x:251.5144,y:147.6892}).wait(1).to({graphics:null,x:0,y:0}).wait(26));

	// sb_foot_bg_blue
	this.instance = new lib.sb_footbgblue("synched",0);
	this.instance.setTransform(237.35,128.95,1,1,0,0,0,213.6,73.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(112).to({startPosition:0},0).to({_off:true},1).wait(26));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(23.8,55.5,427.09999999999997,146.9);


(lib.an_foot_tt_pana = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_foot_tt_pana
	this.instance = new lib.sb_footttpana("synched",0);
	this.instance.setTransform(99.7,12.85,1.1513,1.1513,0,0,0,86.6,11.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,y:12.8,alpha:1},10,cjs.Ease.backOut).wait(26));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199.4,25.9);


(lib.an_foot_tt_low = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_foot_tt_low
	this.instance = new lib.sb_footttlow("synched",0);
	this.instance.setTransform(124,12.1,1,1,0,0,0,124,12.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10,cjs.Ease.cubicOut).wait(26));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248.1,24.2);


(lib.an_foot_tt_free = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_foot_tt_free
	this.instance = new lib.sb_footttfree("synched",0);
	this.instance.setTransform(195.7,11,1,1,0,0,0,195.7,11);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10,cjs.Ease.cubicOut).wait(26));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,391.4,22.1);


(lib.an_foot_tt_exp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_foot_tt_exp
	this.instance = new lib.sb_footttexp("synched",0);
	this.instance.setTransform(79.2,14.5,1.1884,1.1884,0,0,0,66.7,12.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:66.6,scaleX:1,scaleY:1,x:79.1,y:14.45,alpha:1},10,cjs.Ease.backOut).wait(26));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158.3,29);


(lib.an_foot_tt_23400 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_foot_tt_23400
	this.instance = new lib.sb_foottt23400("synched",0);
	this.instance.setTransform(47.1,5.9,1,1,0,0,0,47.1,5.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10,cjs.Ease.cubicOut).wait(26));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.2,11.8);


(lib.an_foot_tt_9990 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_foot_tt_9990
	this.instance = new lib.sb_foottt9990("synched",0);
	this.instance.setTransform(69.85,20.25,1.2849,1.2849,0,0,0,54.4,15.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:69.8,alpha:1},10,cjs.Ease.backOut).wait(26));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.7,40.6);


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
	this.instance.setTransform(531.3,199.25,1,1,0,0,0,235,166.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:797,y:196.55,alpha:1},19,cjs.Ease.cubicOut).wait(41));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(296.3,30.1,735.7,335.7);


(lib.an_btnarrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_btn_arrow
	this.instance = new lib.sb_btnarrow("synched",0);
	this.instance.setTransform(6.5,12.1,1,1,0,0,0,6.5,12.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:13,alpha:1},8).to({alpha:0},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.4,24.3);


(lib.an_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_btn_tt
	this.instance = new lib.sb_btntt("synched",0);
	this.instance.setTransform(138.9,26.3,1,1,0,0,0,108.9,12.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14,cjs.Ease.cubicOut).wait(25));

	// an_btn_arrow_copy
	this.instance_1 = new lib.an_btnarrow("synched",0);
	this.instance_1.setTransform(274.65,29.9,0.8874,0.8874,0,0,0,9.8,12.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(38));

	// an_btn_arrow
	this.instance_2 = new lib.an_btnarrow("synched",0);
	this.instance_2.setTransform(264.1,29.9,0.8874,0.8874,0,0,0,9.8,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(140.5,17.4,142.7,23.200000000000003);


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

	// an_sc4_title
	this.instance = new lib.an_sc4title("synched",0,false);
	this.instance.setTransform(907.35,327.8,1.5226,1.5226,0,0,0,137.8,56.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(81).to({startPosition:49},0).to({_off:true},1).wait(180));

	// an_sc4_bg
	this.instance_1 = new lib.an_sc4bg("synched",0,false);
	this.instance_1.setTransform(274.3,262.4,1,1,0,0,0,329.1,262.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({startPosition:89},0).to({_off:true},1).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1729,-867.3,3803.9,2360);


(lib.sb_sc3_3D_car = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(128.05,57.65,1.8315,1.8315,90,0,0,31.9,70.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-0.7,259.4,117.3);


(lib.an_sc33D = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// an_sc3_3D_circle_copy_copy_copy_copy_copy_copy_copy
	this.instance = new lib.an_sc33Dcircle("synched",0,false);
	this.instance.setTransform(48.35,40.75,1,1,0,0,0,16.6,15.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).wait(66).to({startPosition:21},0).to({_off:true},1).wait(7));

	// an_sc3_3D_circle_copy_copy_copy_copy_copy_copy
	this.instance_1 = new lib.an_sc33Dcircle("synched",0,false);
	this.instance_1.setTransform(47.25,79.1,1,1,0,0,0,16.6,15.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).wait(61).to({startPosition:21},0).to({_off:true},1).wait(7));

	// an_sc3_3D_circle_copy_copy_copy_copy_copy
	this.instance_2 = new lib.an_sc33Dcircle("synched",0,false);
	this.instance_2.setTransform(99.2,105.55,1,1,0,0,0,16.6,15.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({_off:false},0).wait(49).to({startPosition:21},0).to({_off:true},1).wait(7));

	// an_sc3_3D_circle_copy_copy_copy_copy
	this.instance_3 = new lib.an_sc33Dcircle("synched",0,false);
	this.instance_3.setTransform(100.3,15.3,1,1,0,0,0,16.6,15.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).wait(56).to({startPosition:21},0).to({_off:true},1).wait(7));

	// an_sc3_3D_circle_copy_copy_copy
	this.instance_4 = new lib.an_sc33Dcircle("synched",0,false);
	this.instance_4.setTransform(152.6,15.3,1,1,0,0,0,16.6,15.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).wait(64).to({startPosition:21},0).to({_off:true},1).wait(7));

	// an_sc3_3D_circle_copy_copy
	this.instance_5 = new lib.an_sc33Dcircle("synched",0,false);
	this.instance_5.setTransform(152.05,106.1,1,1,0,0,0,16.6,15.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},0).wait(53).to({startPosition:21},0).to({_off:true},1).wait(7));

	// an_sc3_3D_circle_copy
	this.instance_6 = new lib.an_sc33Dcircle("synched",0,false);
	this.instance_6.setTransform(183.35,89.85,1,1,0,0,0,16.6,15.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23).to({_off:false},0).wait(59).to({startPosition:21},0).to({_off:true},1).wait(7));

	// an_sc3_3D_circle
	this.instance_7 = new lib.an_sc33Dcircle("synched",0,false);
	this.instance_7.setTransform(183.9,31.55,1,1,0,0,0,16.6,15.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16).to({_off:false},0).wait(66).to({startPosition:21},0).to({_off:true},1).wait(7));

	// sb_sc3_3D_car
	this.instance_8 = new lib.sb_sc3_3D_car("synched",0);
	this.instance_8.setTransform(18.4,60.95,1,1,0,0,0,128.4,57.7);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:128.4,alpha:1},19,cjs.Ease.backOut).to({startPosition:0},63).to({_off:true},1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.7,-11.7,380.4,145.1);


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

	// an_sc2_title
	this.instance = new lib.an_sc2title("synched",0,false);
	this.instance.setTransform(966.4,340.55,1.6601,1.6601,0,0,0,143.9,35.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(78));

	// an_sc2_bg
	this.instance_1 = new lib.an_sc2bg("synched",0,false);
	this.instance_1.setTransform(499.65,391.75,1,1,0,0,0,1066.7,1063.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-840.5,-945.2,2771.8,2705.1000000000004);


(lib.an_foottt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// an_foot_tt_23400
	this.instance = new lib.an_foot_tt_23400("synched",0,false);
	this.instance.setTransform(344.4,67.85,1,1,0,0,0,47.1,5.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(102).to({startPosition:35},0).to({_off:true},1).wait(2));

	// an_foot_tt_pana
	this.instance_1 = new lib.an_foot_tt_pana("synched",0,false);
	this.instance_1.setTransform(169.95,44.75,1,1,0,0,0,99.7,12.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).wait(102).to({startPosition:35},0).to({_off:true},1).wait(2));

	// an_foot_tt_free
	this.instance_2 = new lib.an_foot_tt_free("synched",0,false);
	this.instance_2.setTransform(195.7,46.05,1,1,0,0,0,195.7,11);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).wait(102).to({startPosition:35},0).to({_off:true},1).wait(2));

	// an_foot_tt_exp
	this.instance_3 = new lib.an_foot_tt_exp("synched",0,false);
	this.instance_3.setTransform(325,15.35,1,1,0,0,0,79.2,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(107).to({startPosition:35},0).to({_off:true},1).wait(2));

	// an_foot_tt_9990
	this.instance_4 = new lib.an_foot_tt_9990("synched",0,false);
	this.instance_4.setTransform(141.3,15.85,1,1,0,0,0,69.9,20.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(107).to({startPosition:35},0).to({_off:true},1).wait(2));

	// an_foot_tt_low
	this.instance_5 = new lib.an_foot_tt_low("synched",0,false);
	this.instance_5.setTransform(124.65,15.25,1,1,0,0,0,124,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(107).to({startPosition:35},0).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4.4,404.1,78.10000000000001);


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

	// an_sc3_3D
	this.instance = new lib.an_sc33D("synched",0,false);
	this.instance.setTransform(1033.4,221.6,1.503,1.503,0,0,0,128.5,60.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(83));

	// an_sc3_title
	this.instance_1 = new lib.an_sc3title("synched",0,false);
	this.instance_1.setTransform(470.5,300.1,1.503,1.503,0,0,0,136.8,48.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).wait(79));

	// an_shadow
	this.instance_2 = new lib.an_shadow("synched",0,false);
	this.instance_2.setTransform(347.8,378.7,1,1,0,0,0,1066.7,1063.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	// sb_sc3_bg
	this.instance_3 = new lib.sb_sc3bg("synched",0);
	this.instance_3.setTransform(298.3,261.95,1,1,0,0,0,309.4,265.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-829.9,-796,3025.2000000000003,2238.3);


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

	// an_btn
	this.instance = new lib.an_btn("synched",0,false);
	this.instance.setTransform(1069.7,453.35,1.7283,1.7283,0,0,0,211.2,31.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36).to({_off:false},0).wait(93).to({startPosition:38},0).to({_off:true},1).wait(10));

	// an_foot_tt
	this.instance_1 = new lib.an_foottt("synched",0,false);
	this.instance_1.setTransform(-324.95,410.75,1.3873,1.3873,0,0,0,195.8,36.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({_off:false},0).wait(97).to({startPosition:97},0).to({_off:true},1).wait(10));

	// an_sc1_sub
	this.instance_2 = new lib.an_sc1sub("synched",0,false);
	this.instance_2.setTransform(913.3,266.2,1.5715,1.5715,0,0,0,134.7,15.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).wait(116).to({startPosition:16},0).to({_off:true},1).wait(10));

	// an_sc1_title
	this.instance_3 = new lib.an_sc1title("synched",0,false);
	this.instance_3.setTransform(984.85,217.9,1.7411,1.7411,0,0,0,137.4,52.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(129).to({startPosition:59},0).to({_off:true},1).wait(10));

	// an_car1
	this.instance_4 = new lib.an_car1("synched",0,false);
	this.instance_4.setTransform(-54.35,367.65,1.2823,1.2823,0,0,0,516,181.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(129).to({startPosition:59},0).to({_off:true},1).wait(10));

	// an_foot_bg_red
	this.instance_5 = new lib.an_footbgred("synched",0,false);
	this.instance_5.setTransform(1274.4,507.2,3.8004,1.5143,0,0,180,144.8,128.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(27).to({_off:false},0).wait(102).to({startPosition:102},0).to({_off:true},1).wait(10));

	// an_foot_bg_blue
	this.instance_6 = new lib.an_footbgblue("synched",0,false);
	this.instance_6.setTransform(76.55,443.75,3.8004,1.5143,0,0,180,251.5,148.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(27).to({_off:false},0).wait(102).to({startPosition:102},0).to({_off:true},1).wait(10));

	// an_sc1_bg
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0.114,1],-356.1,0,356,0).s().p("Eg3oAx3MAAAhjtMBvRAAAMAAABjtg");
	this.shape.setTransform(232.0216,402.4092,0.6981,4.3926,-97.1312);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#789DCD","rgba(224,228,229,0)"],[0,1],-356.1,0,356,0).s().p("Eg3oAx3MAAAhjtMBvRAAAMAAABjtg");
	this.shape_1.setTransform(889.4932,152.8422,1.6654,2.2958,139.304);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FCF3E3","rgba(224,228,229,0)"],[0,1],-356.1,0,356,0).s().p("Eg3oAx3MAAAhjtMBvRAAAMAAABjtg");
	this.shape_2.setTransform(456.697,261.0822,2.4621,0.8688,180);

	this.instance_7 = new lib.an_sc1bg("synched",0,false);
	this.instance_7.setTransform(297.9,244.4,1,1,0,0,0,345.6,280.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7,p:{startPosition:0}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_7,p:{startPosition:59}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},129).to({state:[]},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1189.4,-789.1,3006.1000000000004,1884);


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
	this.instance.setTransform(179,814,1.0219,1.024);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(400));

	// sc4
	this.instance_1 = new lib.sc4("synched",0);
	this.instance_1.setTransform(1129.95,1045.65,1,1,0,0,0,300,249.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(310).to({_off:false},0).wait(90));

	// sc3
	this.instance_2 = new lib.sc3("synched",0);
	this.instance_2.setTransform(1129.95,1046.05,1,1,0,0,0,300,250);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(220).to({_off:false},0).to({_off:true},90).wait(90));

	// sc2
	this.instance_3 = new lib.sc2("synched",0,false);
	this.instance_3.setTransform(1129.95,1046.05,1,1,0,0,0,300,250);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(130).to({_off:false},0).to({_off:true},90).wait(180));

	// sc1
	this.instance_4 = new lib.sc1("synched",0,false);
	this.instance_4.setTransform(1140.75,1068.05,1,1,0,0,0,310.8,272);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},130).wait(270));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-899,-149.2,3924.3,2705.2);


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
	this.instance.setTransform(519.1,164.85,0.5,0.5,0,0,0,1198.1,1125.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(799).to({mode:"single",startPosition:359},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-44.5,-348,1477.2,1228.5);
// library properties:
lib.properties = {
	id: 'FF22514E8FBB4760B18695513798AD24',
	width: 970,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/car1.png", id:"car1"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/sc1bg.jpg", id:"sc1bg"},
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
an.compositions['FF22514E8FBB4760B18695513798AD24'] = {
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