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



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,465,307);


(lib.Image_1 = function() {
	this.initialize(img.Image_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,81);


(lib.Image_0 = function() {
	this.initialize(img.Image_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,462,304);


(lib.Image_0_1 = function() {
	this.initialize(img.Image_0_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,76);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1122,934);


(lib.car1 = function() {
	this.initialize(img.car1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,359,198);


(lib.car2 = function() {
	this.initialize(img.car2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,351,243);


(lib.car3 = function() {
	this.initialize(img.car3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,347,190);


(lib.icondark = function() {
	this.initialize(img.icondark);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,41);


(lib.iconlive = function() {
	this.initialize(img.iconlive);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,90);


(lib.iconmusic = function() {
	this.initialize(img.iconmusic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,70);


(lib.iconplay = function() {
	this.initialize(img.iconplay);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,55);


(lib.iconTV = function() {
	this.initialize(img.iconTV);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,67);


(lib.iconvideo = function() {
	this.initialize(img.iconvideo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,94);


(lib.iconweb = function() {
	this.initialize(img.iconweb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,27);


(lib.sc5frame = function() {
	this.initialize(img.sc5frame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,645,332);


(lib.sc5total = function() {
	this.initialize(img.sc5total);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,378,137);


(lib.t_4w = function() {
	this.initialize(img.t_4w);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,537,156);


(lib.t_smart = function() {
	this.initialize(img.t_smart);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,630,155);// helper functions:

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


(lib.sb_sc5ttvideo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#75FBFD").s().p("AhYDrQgLgTgLgLQAygaAagvQAUgjAOhGQgRADgLAFQgEgogJglQALgCALgKQAJgJAOgSQAKgKAYgjIg5AAIADgOQgmA3gxAzIArgPQAUA/gCAxIg9AZIAAgZQhMAOgfAHQgZAHgNAGQAAgLgEgXQgDgXgEgOQAMgDAMgKQAKgHASgRQAIgHAYgbQgoAFgNAGQgCgXgJgwQAPgDAVgaQAMgOAZgmQAcgrATgnIBCAeQgoBFg3A/IAYgBQAmg0AUgiIA0AmIAJgvIBZAAQAWglAMgbIBWAWIgaAqIB9AAIgOBMIiiAAQgbAlgdAkIBdgJIgOgiIBHgdQAqBXAHA2IhNAhQgBgRgHgdIgJABIgdCgQgCAPAAADQABAEAGAAIAOAAQAHAAAEgOQAFgNAKgzQAJAIAUAJQASAJAPADQgRBFgUAaQgUAZgkgBIgkAAQgqABgLgVQgKgSAJg1IAciYIgUADQgWBigbAzQgkBEhDAlQgEgQgLgTgAiTAMIAmgFIgGgbIggAggAkuDtQAXgpAThWIA8AKQgTBSgcA4QgOgJgpgMgAjEB3IA6gOQAAA+gGAzIg/AQQAJg3ACg8gAiFBpIA4gSQAKA1ABAgIg8AVQABgigIg2g");
	this.shape.setTransform(318.325,27.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#75FBFD").s().p("Ah7C9QAaACAuAAQANgBABgIIAQhYIhvALIBGAbQgdAfgpAgQgnAfgiAVQgLgMgSgQQgTgRgOgJQAhgPAhgYQAhgXAYgYQgYAEgSAFQgBgfgJgqQASgCATgHQAPgFAfgOQAagKAygZQhXAGgSAIQgFgzgFgXQASgDAigRQAlgRAmgXQhDAKhHAHQABgPgDgUQgDgUgFgOQBrgLBdgSQBogVBFgZIAwBAQhJAZheATIAXARQgqAbgyAbIBJgDQArgcAXgSIAyA2QhQA3hoAyIBzgIIgVgeIBJgjQA4BKAcA1IhNArQgHgSgOgWIhsAIIgSBiQgFAegKAPQgLARgVAIQgUAIgcADQgUACglAAQABgjgQgsgACAC9QgbgcgegYIBLgrQAeAVAdAbQAgAdAPAVIhRAwQgNgVgegeg");
	this.shape_1.setTransform(257.325,26.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#75FBFD").s().p("AAxENIADgSIjVAAIgEASIhRAAIAwkJIF9AAIgwEJgAiVC5IDWAAIAEgcIjWAAgAiFBgIDWAAIAEgZIjWAAgAkCgVIANhIIBxAAQgDgagGgTIA0gKIhzAAIAMhHIC2AAQgDgUgGgRIBXgMQAJAWAEAbICwAAIgMBHIhuAAIAwAKIgeAtIBqAAIgNBIgAgrhdIBsAAQAQgdAKgaIiTAAQAKAaADAdg");
	this.shape_2.setTransform(203.35,26.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#75FBFD").s().p("AjQDPQgRAWgSASQgVgXgZgUQAgggAbgqIgMAAIAXh4IEBAAIgWB4IgjAAQAWA7AEAdIhAAcQgEgjgUg5IgHAnQgFAZgHAMQgIAOgQAHQgPAGgUACQgOACgbAAQAAgbgIgbgAilCTQgQAagTAZIAZAAQAHgBACgGIALg9Ig9AAgAhQCVIAvgTIgrAAgAidBPIBpAAIAEgTIhqAAgAAbDeQgMgSgNgMQA1gYAvgmQAygoAggtIBGAcQhQBxiABFQgHgOgMgTgAAsALQAsgVAqgfQAugiAbggIBFAeQhJBRhuBAQgPgggegZgAj8gDIALg9IB7AAIgCgLIAsgIIiKAAIAeimIEXAAIgSBjQAngUAmgdQAogfAZgeIBHAfQhGBRhnA5QgQgcgZgXIgMA7IhlAAIAGATIBvAAIgLA9gAiBiDIB7AAIADgNIh8AAgAh2i8IB6AAIACgOIh6AAg");
	this.shape_3.setTransform(143.1,27.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#75FBFD").s().p("AjrEJIAkjJIgpAgQgHgPgMgVQgOgYgJgLQAwgdAygtQAzguAiguIBIAdQghArgoAqIg2EkgAgNDeQgDgYgFgSQAaACAvAAQAIAAACgCQAEgCABgGIAfitIiXAAIAOhNIE0AAIgOBNIhJAAIggCvQgGAhgKAQQgLASgWAJQgUAJgeADQgXACgoAAQABgSgCgYgAj0iSQAmgVAqgiQApgiAagdIBIAgQgnAqgzApQgyAqgvAcQgQgsgQgXgAgBicIAMhNIEQAAIgOBNg");
	this.shape_4.setTransform(85.5,27.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#75FBFD").s().p("AA0ELIADgRIjWAAIgDARIhQAAIArjqQgOAHgRAHQgGgMgMgQQgMgQgLgIQBFgZAhgoIhTAAIALg/IAmAAQgXgQgSgJQAzgmAdhGIBFAPIgPAdICCAAIgLA+IhCAAIgFAbIBPAAIgLA/IhIAAQAyAdATAOIhCAxQgVgWgigbQgcAegqAYIFvAAIgsDwgAiUC6IDWAAIAEgUIjWAAgAiGBtIDXAAIADgTIjWAAgAiwiFIAlAAIAFgbIgRAAQgMAQgNALgAAJAAIAojfIDfAAIgoDfgABhhHIBDAAIAQhRIhEAAg");
	this.shape_5.setTransform(27.25,26.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},106).to({state:[]},1).wait(43));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,348.7,54.1);


(lib.sb_sc5ttmore = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AluAKIAAgTILdAAIAAATg");
	this.shape.setTransform(36.75,38.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(130).to({_off:true},1).wait(19));

	// Layer_9
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhpB2IAyAAQAJAAABgGIACgNIh6AAIAHgoIB6AAIACgLIAAAAIAAAAIAdgIIh1AAIAGgkICzAAIAAgBIANAAIALgBIAYAaQgnATgnAMIBpAAIgHAoIh8AAIgDAQQgDAQgGAIQgHAIgPAFQgSAEgzAAQgCgSgHgUgAhpgFIAOhLIDYAAIgOBLgAg0gkIB2AAIACgNIh2AAgAh9hbIAHgoIBzAAIgCgRIAygIIAEAZIB2AAIgHAog");
	this.shape_1.setTransform(58.5,15.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AACBnIArABQAIAAABgHIAEgXIiOAAIgNBJIgvAAIANhJIgkAAIAIgsIAkAAIAWh1IBdAAIADgQIh0AAIAIgrIEZAAIgHArIh3AAIgDAQIBgAAIgVB1IAkAAIgIAsIgkAAIgFAXQgDASgGAJQgGAKgMAFQgLAFgRACIgkABQAAgXgIgVgAARAeIAxAAIAEgSIgxAAgAhMAeIAvAAIADgSIguAAgAAcgbIAxAAIADgSIgxAAgAhBgbIAuAAIADgSIguAAg");
	this.shape_2.setTransform(24.025,16.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},130).to({state:[]},1).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75.2,39.8);


(lib.sb_sc5ttfree = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AqqALIAAgVIVVAAIAAAVg");
	this.shape.setTransform(68.325,38.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(130).to({_off:true},1).wait(19));

	// Layer_10
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAED56").s().p("AACB8QgJARgLAOQgEgGgMgJQgMgKgHgFQAGgHAIgLIgaAJQABgRgGgkIAhgKQAEARACAXQAUghAOg0QALgnAMhBIgYAAIAIgtIBsAAIAIgBIAgAEQgLAjgUA2IAGAAIAIgCIAcAKQgYBKgoAzQAQATAYAMQgUAOgSAZQgWgMgPgTQgXAUgYANQgIgRgNgPgAAFB2QAVgLAWgWQgHgPgFgZQgOAqgRAfgABRAsQARgXAMgdIgpAAQADAcAJAYgAA+gxIAVAAIARgvIgcAAgAioCKQAMgUANg2IAjAHQgLAwgQAgIghgNgAhpBGIAhgIQAAAigDAfIgkAJQAFgbABgngAiPAOQAHgCAIgEIARgOIAVgVQgaADgJAFQgBgSgGgYQAKgDANgOQAIgJAOgUQARgaALgWIAoARQgUAighAnIAQgBQAVgaAKgRIAiAZQgcAmgeAdIAdgKQAMAigBAdIgkAOIAAgOQhOAOgNAGQgDgbgEgPgAhIAFIAWgEIgDgOg");
	this.shape_1.setTransform(120.575,15.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAED56").s().p("AiVCHQgJgLgHgGQBDgfAVhFIhDAAIAIgsIBGAAIAJgyQgVAGghAGQgBgUgIgTQBVgTA+ggIAaAnQgfAOgdAKIgMBBIBIAAIAXh8IAwAAIgWB8IBBAAIgJAsIhAAAIgZCIIgwAAIAYiIIhKAAQgLAsgXAgQgbAmgwAXQgEgIgHgMg");
	this.shape_2.setTransform(86.35,15.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAIB1IAPgNIhJAAIAXAMQguAYhAAQQgRgYgMgKQAtgHAjgLIgiAAIARheIgWADQgBgIgFgKQgFgLgFgHQA1gEAZgOIgyAAQALgcALglIA9AAIABgJIhHAAIAFgbIBHAAIACgNIAqAAIgCANIAdAAIACgNIAtAAIgDANIBEAAIgLA/IhEAAIgCALIBZAAIgDALQgHAhgJAJQgJAIgOABIgDAAIgUBuIgaAAQAmAPASAJIgnAcQgngWgugRgAhFBOIB/AAIACgKIh/AAgAg/AtIB/AAIACgJIh/AAgAg5ALIB/AAIACgJIh/AAgABdgXIgDgKQALABAFgBQAEAAADgBIADgHIgrAAIgDASIAXAAgAgVgXIAuAAIADgSIgiAAQgGAKgJAIgAAEhEIAdAAIACgLIgcAAgAg+hEIAXAAIAEgLIgXAAgABVhqIAZAAIABgJIgYAAgAALhqIAdAAIACgJIgdAAg");
	this.shape_3.setTransform(52.325,15.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AidBzQBXgVAkgxIhOAAIANhFIgGAFQgMgYgPgMQBCgnArg8IAwAKIgJALIA5AAIAIgBIAdAUQgQAVgVAWIBVAAIgWB0IhDAAIgKA0QgBAIACADQABABAIAAIAaAAQAIABAEgIQAEgHAFgZQAMALAcAHQgLAkgNAOQgNANgbAAIgmAAQggAAgJgMQgJgLAFgfIAKg0QgUAmgjAZQgnAeg+ARQgFgVgPgTgAAmADIA3AAIAHggIg0AAIgKAggAg5ADIAuAAIAKggIgyAAgAgohHIA5AAIAWgYIg3AAg");
	this.shape_4.setTransform(17.125,15.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},130).to({state:[]},1).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.5,40);


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

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAED56").s().p("AASDpIAOhSIkBAAIAQhXQBmh9DGirICGAAQjYC0hdBuICFAAIAThlIBsAAIgTBlIBFAAIgRBdIhFAAIgOBSg");
	this.shape.setTransform(22.6,24.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100).to({_off:true},1).wait(49));

	// Layer_7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAED56").s().p("AkJDwIAMhDIBcAAQgJgngQghIAhgMIg7AAIAMhDICcAAIAIgrIhkAAIAEgXQgZAKgkAMQgKgjgbghQCzguBThoIBBAgIgSAVQAfAeAzAaQAyAaA3APQgeAZghAoQghgMgYgOIgGAeIhhAAIgIArICbAAIgNBDIg+AAIAmANQghApgbAeIBiAAIgMBDgAAHCtIAxAAIgagLQAcgiAXgnIg6AAgAhaCdIgoAQIA6AAIAQhUIg7AAQAUAoAFAcgAgrhYIB/AAQghgZgYgZQgdAZgpAZg");
	this.shape_1.setTransform(239.325,24.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAED56").s().p("AgFDxIAeipIiFAAIANhIICFAAIAOhKIg0AAQgUAjgTAZQgKgHgSgLQgRgLgOgGQAZgcAYguQAYgrARguIBDAOQgKAagMAaIAbAAIARhZIBKAAIgQBZIBmAAIgOBIIhlAAIgOBKICAAAIgOBIIh+AAIgfCpgAjpDxIAsjzIgaAYQgDgOgHgYQgJgagGgNQAnghAngyQAngxAbg1IBCAWQgcAygpA6IhAFfg");
	this.shape_2.setTransform(185.8,24.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAED56").s().p("AkKDpIBClqIA2AAIAIgqIg8AAIALg9ID0AAIgLA9Ig6AAIgHAqIA6AAIhAFiIg6AAIAEgYIh9AAIgGAggAjCCQIB9AAIAThpIgQAAQgWAAgFgKQgGgKAFgcIALg8IgQAAIgGAlQgMA7ggAcQgMgQgMgJgAitAaQAWgUAHgnIAGgkIgRAAgAg2gKIgBAIQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAIAEAAQAFAAABgBIAMhDIgOAAgAhaiBIAOAAIAIgqIgOAAgABDDiQgtAAgNgTQgNgUAIg1IAljKIB+AAIAQhXIh/AAIAMhHIDHAAIgpDjIh8AAIgYCFQgDAPACAFQADAEAMAAIAnAAQAMAAAGgPQAHgOAKgwQAJAIATAJQASAJAPADQgSBDgVAYQgWAZgoAAgAizB7IAKg3IBoAAIgKA3g");
	this.shape_3.setTransform(131.575,25.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FAED56").s().p("ABIDJIgtAKQACgMgBgLIi9ANIAGg+IBVgDIAFgeIhjAAIgYCGIhHAAIAYiGIgSAAIAKg7IATAAIACgLIBHAAIgCALIBjAAIADgPIiKAAIAeinIFeAAIgeCnIiPAAIgDAPIC0AAIgYCDQgEAWgGAMQgIANgNAHQgNAHgRACQgMABgWAAQAAgRgEgYgABYC4IAEAAQAGAAABgHIANhHIgiAAQALAsgBAigAAACFIAYgCIgEgSIAfgHIguAAgAAbgOIBEAAIADgPIhFAAgAhugOIBDAAIADgPIhDAAgAAlhJIBFAAIACgPIhEAAgAhjhJIBDAAIADgPIhDAAgABFiPIADgPIgtAAIALg9IAtAAIAEgWIBJAAIgFAWIBpAAIgKA9IhpAAIgDAPgAhviPIADgPIhnAAIALg9IBnAAIAEgWIBIAAIgEAWIAvAAIgLA9IgvAAIgDAPg");
	this.shape_4.setTransform(79.575,24.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},100).to({state:[]},1).wait(49));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,266,49.1);


(lib.sb_sc5totalbg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("A3SEcIBbo3MAtKAAAIhbI3gA3GESMAs1AAAIBYojMgs1AAAg");
	this.shape.setTransform(188.675,68.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A3MEXIBaotMAs/AAAIhaItg");
	this.shape_1.setTransform(188.675,68.675);

	this.instance = new lib.sc5total();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]},130).to({state:[]},1).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,378,137);


(lib.sb_sc5total = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AieCAQgHgMgHgHQAygSAYggQARgXAMguIhIAAIAJgwIExAAIgIAwIhXAAIgRBdQgCAKACADQABADAIgBIAXAAQAHABAFgLQAEgJAIgkQAOAMAbAIQgMAvgOARQgPARgcAAIgkAAQggAAgJgNQgIgNAGgjIARhdIgrAAQgQA9gYAfQggAsg9AXQgCgJgHgMgAhdhlIAJgvIDxAAIgIAvg");
	this.shape.setTransform(290.925,70.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA335F").s().p("AiVCoQgrguAQhaQAUhrBShAQBehKCiAFIgQBWQhEgFgmAHQg8AKgrApQAGgFAQgFQAagJAgAAQBKAAAjAqQAiAogMBAQgMBFg1ApQg2AphOAAQhRAAgngpgAg0AGQgZATgGAiQgGAhAQATQAQASAkAAQAoAAAZgWQAVgUAGgdQAFgegOgTQgRgVgnAAQgjAAgXASg");
	this.shape_1.setTransform(204.0962,69.3593);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA335F").s().p("ABAC0IgoAJIABgUIipALIAFg3IBMgDIAFgaIhZAAIgWB3IhAAAIAWh3IgQAAIAJg2IARAAIACgKIA/AAIgCAKIBZAAIADgNIh8AAIAbiWIE6AAIgbCWIiAAAIgCANICgAAIgVB2QgDAUgGAKQgGAMgNAGQgRAKgogBQAAgPgEgWgABPClIADAAQAGAAABgGIALg/IgeAAQAJAlAAAggAAAB3IAVgCIgDgQIAbgFIgpAAgAAYgMIA9AAIACgOIg9AAgAhjgMIA9AAIACgOIg8AAgAAhhBIA+AAIACgOIg9AAgAhZhBIA8AAIADgOIg9AAgAA+iAIADgOIgpAAIAKg2IAoAAIAEgVIBBAAIgEAVIBfAAIgKA2IheAAIgDAOgAhkiAIADgOIhcAAIAKg2IBcAAIADgVIBBAAIgDAVIAqAAIgKA2IgqAAIgDAOg");
	this.shape_2.setTransform(250.375,68.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AilCgIAdigIgPAPIgHgZQgFgRgEgJQA2gxAmhJIArAOIgIANIBOAAIAIgcIAzABIgKAbIBRAAIgIApIhZAAIgHATIBLAAIgiC6IAYAAIgIApIjlAAIAIgpIAbAAIAii6IA6AAIAGgTIhJAAIAIgoQgPAbgWAfIgrDogAgeBzIBaAAIADgOIhaAAgAgVBEIBaAAIACgNIhaAAgAgNAWIBaAAIADgMIhaAAgAgEgXIBaAAIACgNIhaAAg");
	this.shape_3.setTransform(164.45,69.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AASCCIAbgVIg8AAIATARQgmAYg3ALQgIgVgLgNQAogHAbgLIgpAAIAXh/IDDAAIgYB/IgoAAQAgAMAaANIgvAbQgZgRgogOgAggBTIBmAAIABgJIhlAAgAgZAxIBkAAIACgJIhlAAgAgTAQIBlAAIABgJIhlAAgAipCgIAcieIgSASQgDgdgJgYQAygyAkhNIArANIAAABIDXAAIgHAiIhDAAIgCAMIA5AAIgOBIIjJAAIANhIIA2AAIACgMIg7AAIAFgbQgMAZgVAhIgsDxgABZg3IAMAAIADgSIgNAAgAAkg3IANAAIAEgSIgOAAgAgOg3IANAAIACgSIgLAAgAAshkIANAAIACgMIgNAAg");
	this.shape_4.setTransform(127.4,69.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAbCgQgaAAgGgKQgHgIAFgZIAGgjQgVA0gPAXIgfgRQAHgKAKgRIgdAIQACgQgCglIAggJQACAbAAARQALgYAFgPIAeALIABgKIAoAAIgJAzQgBAHABACQACACAGAAIAVAAQAGAAACgFQADgFAEgQIgSAIQgEgRgPgkIAXgJIhZAAIAeisIA4AAQAJgTAFgPIAwAHIgSAbIBLAAIgfCsIhIAAIATAuIgPAHQAJAGARAEIgHglIAjgNQAKA1ADAXIgkAPIgEgfQgIAWgKAJQgKAJgSAAgABaAHIAUAAIACgNgAAoAHIAuAAQgEgLgGgIQgTAMgRAHgAAZgMIgEATIAQAAQgEgKgIgJQAUgHAUgNIgEgGIgZAOQgBgHgGgHIgEAagABnggQAHAMADAHIAHgkgAAfgxIAQgJIgLgMIAagQIAJAKIAKgKIAbAFQgJAMgNALIAEAGIAMgMIAUAEIAFgaIhZAAgAixCTQAPgZANg0IAhAGQgOA0gRAeQgIgEgWgHgAhzBLIAhgIQAAAhgEAmIgjAIQAEgVACgygAibAXQAKgDAVgUQAGgEARgUQgbADgJAFQgDgagEgPQAKgCANgQQAJgJAOgWQATgcALgXIAnASQgYAogiAnIAQgBQASgXANgYIAjAWQgnA2gtArIAYgFIgBgRIAhgJQAHAqgCAYIgjALIAAgRQhJAPgMAHQgDgagEgNg");
	this.shape_5.setTransform(88.175,69.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},94).to({state:[]},1).wait(55));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(70.4,46.9,237.9,43.50000000000001);


(lib.sb_sc5frame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sc5_frame
	this.instance = new lib.sc5frame();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130).to({_off:true},1).wait(19));

	// _Path_
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.6)").s().p("EgsEATqMAFfgnTMBSqAAAMgFfAnTg");
	this.shape.setTransform(322.65,166.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(130).to({_off:true},1).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,645,332);


(lib.mo_sc5subtitle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag1BTIAgABQAFAAABgEIAGgnIgxAFIAfAMQgeAfggAUQgNgOgOgKQAdgNAYgZIgSAEQgCgRgEgPQALgBAagLIAhgPQgnADgHADIgGghQAHgBAQgHIAhgSIg9AHQAAgQgFgOQBkgKA/gXIAWAcQghAMgoAIIAKAHIgoAYIAggBIAcgVIAXAYQgmAbgqASIAzgDIgKgNIAggPQAaAgAMAYIghASIgKgRIgvADIgHArQgCANgEAHQgFAHgJAEQgNAGggAAQgBgTgHgQgAAfA8IAhgTQAgAXAQAVIgkAVQgMgUghgag");
	this.shape.setTransform(255.1049,11.9202,1.1429,1.1429);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjB1IAFgfIheAAIAGghIBdAAIABgJIhFAAIAQhkIBFAAIABgIIhYAAIAFghIBZAAIABgTIAlAAIgCATIBaAAIgGAhIhaAAIgBAIIBHAAIgQBkIhHAAIgBAJIBgAAIgFAhIhgAAIgFAfgAARAQIAjAAIABgKIgjAAgAg2AQIAjAAIABgKIgjAAgAAXgTIAiAAIACgJIgjAAgAgwgTIAiAAIACgJIgjAAg");
	this.shape_1.setTransform(217.6122,12.0345,1.1429,1.1429);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah7BuIAFggIBVAAIADgXIg8AAIAFgfIA8AAIAEgXIgwAAIADgVQgRALgQAGQgGgQgLgNQApgOAogeIgZAAIAFghIBZAAQAMAXAXAUQAZAUAeALQgQAOgNATQgRgIgLgJIgDAUIgwAAIgEAXIA9AAIgFAfIg9AAIgEAXIBYAAIgFAggAgygdIBnAAQgXgTgVgcQgYAYgjAXg");
	this.shape_2.setTransform(180.7052,12.2059,1.1429,1.1429);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhyBrQgIgHgGgDQAbgcAJg8IAGgnIAjAAIgNgMIA0gJIgmgIIASgLIgsAAIAEgcIBSAAIgGgJIAagMQAIANADAIIBYAAIgFAcIgkAAIANAIIgbAKIAfAJIgRANIAkAAIgEAcIiwAAIgIAoQAVgRALgWIAcAIIgDAHIATAAIACgMIAjAAIgBAMIA5AAIgEAbIg6AAIgBAIIAyAAIgFAaIgxAAIgBAIIBKAAIgFAdIi0AAIAFgdIBGAAIACgIIgxAAIADgMIgPAMQAAgIgIgVQgNAwgYAaIgLgNgAgfAxIAlAAIACgIIghAAgAgNgeIBOAAIgigKIgsAKgAAlg9IAcgJIhBAAg");
	this.shape_3.setTransform(141.5625,12.0345,1.1429,1.1429);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA1BwIACgKIiQAAIgBAKIghAAIAjjfIDUAAIgjDfgAhTBGICPAAIAYiVIgTAAQAJAFADAGIgKAJIAJAAIgFAZIgnAAIgBAZIALgVIAaAFQgOAegVAYQACAFAEACQADACAFgYQAKAMAJAFQgGAYgMAIQgMAIgNgHQgHgDgFgJQgNALgLAGQgEgHgKgMIgwAGIABgaIBFgGIgCAKIAKgJQgCgYADgjIhAAAIADgZIA/AAIABgSIAdAAIgCASIASAAQgHgGgEgDIAMgLIhwAAgAhAATIAHgtIA4AAIgIAtgAgnABIAKAAIABgKIgJAAg");
	this.shape_4.setTransform(103.8556,12.663,1.1429,1.1429);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah2ByIAFgkIBcAAIAFgoIhCAAIAFgiIBDAAIAGgjIhRAAIAFgjIBbAAQgQgRgMgIIAggVQAeATANARIgQAKIBOAAIgGAjIhQAAIgGAjIBEAAIgGAiIhDAAIgGAoIBbAAIgFAkg");
	this.shape_5.setTransform(64.6058,11.5487,1.1429,1.1429);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAPgDQgoBOhAAjQgNgSgPgLQBNgjAjhiIAQADIABgXIg1AAIAFglIBYAAQgUCFBWA3QgRALgRAUQg4glgNhMg");
	this.shape_6.setTransform(25.9488,12.7487,1.1429,1.1429);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc5subtitle, new cjs.Rectangle(12.5,-1.6,256,27.3), null);


(lib.sb_sc4more = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FAED56").s().p("AijCoQAXABAwAAQAMAAACgJIAFgSIivAAIAPg5ICuAAIAEgQIABAAIgBAAIAqgMIinAAIANgzID/AAIAAgBIATAAIAPgCIAhAlQg3AZg9AUICWAAIgOA5IiwAAIgFAVQgGAXgLAMQgLAMgVAGQgSAEgaACIg3ABQAAgbgJgcgAiXgHIAbhsIE0AAIgbBsgAhIg0ICoAAIAEgRIioAAgAiriCIAOg5ICjAAIgBgXIBJgMQADATAAAQICoAAIgPA5g");
	this.shape.setTransform(136.275,21.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgECyQgCgTgEgMQANABAvAAQAMAAACgKIAIghIjLAAIgaBpIhDAAIAbhpIg1AAIAQg+IA0AAIAqinICFAAIAGgXIimAAIAQg+IGSAAIgQA+IipAAIgGAXICKAAIgrCnIA0AAIgQA+Ig0AAIgIAiQgGAYgJAOQgLAOgRAIQgQAHgZACQgQACgiAAQABgOgCgSgAASArIBGAAIAGgaIhFAAgAhzArIBCAAIAGgaIhBAAgAAmgnIBHAAIAGgZIhGAAgAhegnIBCAAIAGgZIhCAAg");
	this.shape_1.setTransform(80.3,23.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(55.3,-0.3,105.89999999999999,44.599999999999994);


(lib.sb_sc3tttvideo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABCEqIAGgVIjIAAIgGAVIhXAAIAxjBQgzAng3AbQgGgQgLgVQgMgWgKgNQBkguBShbIh9AAIAShGICiAAIALgQIh/AAIARhEICWAAIAJgQQhDABhNgBQAHgegHglQB6ABBzgGQB+gGBRgLIAjBAQhqAPiCAGIgLAUIDtAAIgRBEIkDAAIgLAQIEsAAIgSBGIlLAAIgNARIEaAAIhQE/gAhvDRIDIAAIAEgTIjIAAgAhdCHIDIAAIAFgSIjIAAgAhLA+IDIAAIAFgRIjIAAg");
	this.shape.setTransform(199.725,105.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3EhQhCABgSgaQgRgZARhEIBHkYIBeAAIhGEYQgFAWAEAGQAEAGAUAAIBHAAQAVAAAMgVQALgTAVhHQAMALAYAMQAVAKATAGQgeBagfAgQghAjg8gBgAkvCqQA9hwAtiJIBVASQg9CvguBegADKA3QgEhBgKg4IBegjQAMA2AGBCQAGA/gDAxIhmAoQAFgwgEhEgAA3ifQglgjgoggIBNg+QBsBMAlAxIhWBIQgRgbgqgpg");
	this.shape_1.setTransform(122.5141,105.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai/EPQgNgSgIgIQBXg0A6iAIgCAAQgKAAgLADQgMADgFAEIAAgEIgBAEQAAgNgDgXIgEAOQgPA/ggAVQgRALgTADQgOACgWAAQAHgigEgWIgyDHIhHAAICPo3IB7AAIAMgDIArAcQg2BsghA9QAQAsgGAqQAMgHAIgLQAJgJAjg7IgwAAIAThMIBMAAIANgFIAnAKQAegUAagfIg6AAIAPg5IBSAAQAMgVAJgXIBAAKQgGAPgKATICFAAIgNA5IiaAAIgOASICRAAIgMAwIg8AAIgFAaIBIAAIgNAvIjiAAIAIgfIgaARQgCgGgOgaIg6BiIALAAIAMgCIAZAMQgeBWgkA8QAMAoAmAPQAcAMA7AAQBTAABDgIQgKANgNAYQgMAWgHASQg3AEhLAAQhCAAgigOQgrgQgSgqQgrA3gxAeQgEgMgLgSgAjkBXIAOAAQAJAAAGgFQALgIAIgeQAPg+gSgzQAYgxAfhJIgeAAgABmhrIA7AAIAHgaIgmAAgAByCZIAqAAQAIAAACgHIAFgWIhiAbIgBgeQgWAxgeAfQgGgIgPgMQgOgMgLgGQAZgaAQgmQALgZAKgpIAUhOIDgAAIgwC/QgFAWgIALQgIAMgQAGQgMAGgWACIgrABQACgXgGgegABWBVIA2gHQgYgVgTgLIgLAngADAAlIgjAnIAcgEIARhFIhBAAQArAYAMAKgABlAfIAdgcIgWAAgAgikJIBIgTQANA7ACAnIhKAXQgBgggMhGg");
	this.shape_2.setTransform(50.65,105.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAED56").s().p("AAeEuIAGgUIjxAAIgEAUIhcAAIBLkpIGrAAIhLEpgAi6DPIDwAAIAIgfIjwAAgAihBsIDwAAIAIgdIjwAAgAkjgXIAUhRIB+AAQgCgfgFgUIA8gLIiCAAIAVhQIDKAAQgCgagEgPIBigOQAKAYABAfIDGAAIgUBQIh7AAIA1AMIglAyIB3AAIgUBRgAgthoIB6AAQASgeAPggIikAAQAJAeAAAgg");
	this.shape_3.setTransform(258.8,30.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FAED56").s().p("Aj6DnQgcAggPANQgRgVgggaQAqglAfguIgNAAIAiiIIEhAAIgiCIIgnAAQAUBBADAiIhLAfQgDgqgQg+IgMAsQgGAcgJAOQgLAPgTAIQgRAIgXACQgPACgfAAQACgcgGgigAjFCkQgSAbgaAeIAcAAQAIAAACgHIARhEIhDAAgAhmCnIA3gVIgyAAgAi4BZIB2AAIAGgVIh3AAgAAMD5QgMgUgNgOQA9gbA3gqQA8gsAng0IBMAfQhjCAiUBNQgGgRgNgUgABLArQgNgSgOgNQAygXAygiQA3gnAgglIBLAjQhZBbh/BHQgGgPgNgSgAkbgDIARhEICKAAIgCgNIAygJIiaAAIAui7IE5AAIgcBvQAugXAsgfQAxgjAdgiIBOAjQhXBah2BBQgQgfgbgbIgRBDIhzAAIAGAWIB9AAIgRBEgAiHiSICIAAIAEgPIiJAAgAh3jUICJAAIADgPIiIAAg");
	this.shape_4.setTransform(181.475,31.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAED56").s().p("AimELQgOgSgNgKQA3giAfgzQAWgjAMgyIAOg4IBRAAIgPA7QgQBEgcAwQgnBDhEAsQgHgOgPgSgAlXDpQBShUBWhvIA0A8QhRBqhNBagAChEfQgyAAgMgYQgKgUAOg3IAsiuIBOAAQgGgQgHgQQiuAMgtAFQgyADgVAIQAAgNgDgZQgCgcgDgQQANgDAOgKQAMgIAUgSQAKgHAUgWIhEAAIAVhRIB4AAQAngwAUgdIBQAiIgkArIClAAIgUBRIhIAAQAwBTAMAeIhTAsIgrCsQgEARAAAFQAAAGAFAAIARAAQATAAAOgEQgJAugCAXQgMAFgbAAgAArhSICIgHIgOgcIAsgXIhpAAIg9A6gAgVESIA/j+IBPAAIhAD+gAjhgNQgcgSgdgOIBAhFQAdALAeARQAgASAQAPIhGBLQgNgQgfgTgAiei6QgcgTgcgOIBChDQAeAMAcARQAfASAPAQIhIBKQgNgQgdgVg");
	this.shape_5.setTransform(106.725,30.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FAED56").s().p("AhyEpIAXhdIhyAAIgGAYIhfAAIA6jmIDRAAIAHgeIi2AAIAxjEIC2AAIARhFIBjAAIgRBFIC/AAIgyDEIi/AAIgHAeIDaAAIg6DmIhkAAIAGgYIh2AAIgXBdgAAbB7IB2AAIALgsIh2AAgAi5B7IByAAIALgsIhyAAgABWhuIBbAAIAKgpIhbAAgAhlhuIBZAAIAKgpIhZAAg");
	this.shape_6.setTransform(30.675,30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},14).to({state:[]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},13).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},105).to({state:[]},1).wait(32));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,289,135.7);


(lib.sb_sc3iconweb = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _Image__3
	this.instance = new lib.iconweb();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).wait(19).to({_off:true},1).wait(4).to({_off:false},0).wait(20).to({_off:true},1).wait(352));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,27);


(lib.sb_sc3iconvideo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.iconvideo();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).wait(19).to({_off:true},1).wait(4).to({_off:false},0).wait(20).to({_off:true},1).wait(352));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112,94);


(lib.sb_sc3iconTV = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.iconTV();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).wait(19).to({_off:true},1).wait(4).to({_off:false},0).wait(20).to({_off:true},1).wait(352));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89,67);


(lib.sb_sc3iconplay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _Image__6
	this.instance = new lib.iconplay();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).wait(19).to({_off:true},1).wait(4).to({_off:false},0).wait(20).to({_off:true},1).wait(352));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74,55);


(lib.sb_sc3iconmusic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _Image__5
	this.instance = new lib.iconmusic();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).wait(19).to({_off:true},1).wait(4).to({_off:false},0).wait(20).to({_off:true},1).wait(352));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93,70);


(lib.sb_sc3iconlive = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _Image__4
	this.instance = new lib.iconlive();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).wait(19).to({_off:true},1).wait(4).to({_off:false},0).wait(20).to({_off:true},1).wait(352));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127,90);


(lib.sb_sc3icondark = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _Image__2
	this.instance = new lib.icondark();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).wait(19).to({_off:true},1).wait(4).to({_off:false},0).wait(20).to({_off:true},1).wait(352));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,41);


(lib.sb_sc2free = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FAED56").s().p("AgECwQgQAZgRAUQgGgIgPgOQgQgOgKgHQAKgLALgPIglAMQADgagEgwIAwgPQADAZABAgQAfgvAZhJQAWg7AWhaIgjAAIAQhAICbAAIALgCIAtAGQgVA5gfBGIAIAAIAMgDIAnAPQgrBpg9BJQAXAcAfAQQgdAUgeAkQgdgSgUgcQgiAdglAUQgJgZgQgWgAAACoQAggRAhgeQgJgWgFgiQgXA5gcAugAB0A/QAcgmASgkIg6AAQABAoALAigABihGIAeAAIAchDIgoAAgAj5DGQAWghAVhJIAxAIQgUBEgbAvQgNgIgggJgAiZBjIAwgLQgEA6gHAjIgzANQAKgvAEgwgAjJAUQAKgCALgHIAagUIAggdQglAEgMAGIgBAAQAAgegGgdQAPgDATgVQAMgNAWgeQAbgkATggIA3AZQgkA1gwAyIAYgBQAggmARgXIAtAjQgqA1guArIApgPQAOAzgEAoIg1AUIABgUQhxAUgSAJQAAgfgGgdgAhjAGIAggEIgDgVg");
	this.shape.setTransform(191.475,22.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAED56").s().p("AjfDBQgLgPgJgJQA3gaAjgoQAdggARgtIhgAAIAQg/IBjAAIAShIQgjAJgrAJQABgagKgeQB7gaBcgwIAhA6QgpASgwAPIgWBdIBnAAIAsixIBGAAIgsCxIBbAAIgQA/IhcAAIgwDCIhGAAIAxjCIhqAAQgUA/gjAsQgrA3hGAiQgFgMgLgRg");
	this.shape_1.setTransform(135.725,22.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AADCmIAWgSIhpAAIAgAQQg/AhhiAZQgSgegTgTQA+gIA2gRIgxAAIAiiGIggAEQgBgLgGgPQgGgPgGgKQBMgHAkgTIhIAAQAVgqARgyIBXAAIADgOIhlAAIAKgnIBlAAIAFgRIA8AAIgFARIApAAIAEgRIBAAAIgEARIBgAAIgWBbIhhAAIgDAPIB+AAIgFARQgHAagGAMQgGAPgJAGQgMALgUACIgGABIgnCcIglAAQArARAiARIg6AoQg2ggg+gYgAhoBvIC1AAIAEgNIi2AAgAhcA/IC1AAIAEgNIi2AAgAhQAQIC2AAIADgOIi1AAgACJghQgBgLgCgEQAOACAJAAQAGgBAEgDQABgCADgHIg8AAIgHAaIAhAAIAAAAgAgaghIBDAAIAGgaIgyAAQgLAQgMAKgAAPhiIAqAAIADgPIgoAAgAhQhiIAiAAIAGgPIgiAAgACGiXIAjAAIAEgOIgjAAgAAdiXIApAAIAEgOIgqAAg");
	this.shape_2.setTransform(80.45,22.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjaDAQgHgRgIgKQBEgRAugbQApgXAbghIhvAAIAYhiIgIAFQgFgMgKgPQgLgQgJgHQBjg5BChVIBEAPIgOAQIBRAAIAMgDIAnAfQgYAcggAgIB4AAIgqCmIhhAAIgSBJQgDAMACADQADADALAAIAlAAQALAAAGgKQAGgKALglQAQAQAnAKQgTA1gUASQgVAUglAAIg3AAQguAAgMgRQgKgQAKgsIAThKQghA2g0AkQg7AqhaAYQgCgNgHgQgAA3AFIBQAAIAMguIhJAAIgTAugAhQAFIBBAAQAJgSAIgcIhGAAgAgwhlIBSAAQATgSAOgPIhPAAg");
	this.shape_3.setTransform(23.375,22.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,216.5,44.8);


(lib.mo_subtitle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag1BTIAgABQAFAAABgEIAGgnIgxAFIAfAMQgeAfggAUQgNgOgOgKQAdgNAYgZIgSAEQgCgRgEgPQALgBAagLIAhgPQgnADgHADIgGghQAHgBAQgHIAhgSIg9AHQAAgQgFgOQBkgKA/gXIAWAcQghAMgoAIIAKAHIgoAYIAggBIAcgVIAXAYQgmAbgqASIAzgDIgKgNIAggPQAaAgAMAYIghASIgKgRIgvADIgHArQgCANgEAHQgFAHgJAEQgNAGggAAQgBgTgHgQgAAfA8IAhgTQAgAXAQAVIgkAVQgMgUghgag");
	this.shape.setTransform(269.625,11.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjB1IAFgfIheAAIAGghIBdAAIABgJIhFAAIAQhkIBFAAIABgIIhYAAIAFghIBZAAIABgTIAlAAIgCATIBaAAIgGAhIhaAAIgBAIIBHAAIgQBkIhHAAIgBAJIBgAAIgFAhIhgAAIgFAfgAARAQIAjAAIABgKIgjAAgAg2AQIAjAAIABgKIgjAAgAAXgTIAiAAIACgJIgjAAgAgwgTIAiAAIACgJIgjAAg");
	this.shape_1.setTransform(227.85,11.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah7BuIAFggIBVAAIADgXIg8AAIAFgfIA8AAIAEgXIgwAAIADgVQgRALgQAGQgGgQgLgNQApgOAogeIgZAAIAFghIBZAAQAMAXAXAUQAZAUAeALQgQAOgNATQgRgIgLgJIgDAUIgwAAIgEAXIA9AAIgFAfIg9AAIgEAXIBYAAIgFAggAgygdIBnAAQgXgTgVgcQgYAYgjAXg");
	this.shape_2.setTransform(185.275,12.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhyBrQgIgHgGgDQAbgcAJg8IAGgnIAjAAIgNgMIA0gJIgmgIIASgLIgsAAIAEgcIBSAAIgGgJIAagMQAIANADAIIBYAAIgFAcIgkAAIANAIIgbAKIAfAJIgRANIAkAAIgEAcIiwAAIgIAoQAVgRALgWIAcAIIgDAHIATAAIACgMIAjAAIgBAMIA5AAIgEAbIg6AAIgBAIIAyAAIgFAaIgxAAIgBAIIBKAAIgFAdIi0AAIAFgdIBGAAIACgIIgxAAIADgMIgPAMQAAgIgIgVQgNAwgYAaIgLgNgAgfAxIAlAAIACgIIghAAgAgNgeIBOAAIgigKIgsAKgAAlg9IAcgJIhBAAg");
	this.shape_3.setTransform(141.4,11.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA1BwIACgKIiQAAIgBAKIghAAIAjjfIDUAAIgjDfgAhTBGICPAAIAYiVIgTAAQAJAFADAGIgKAJIAJAAIgFAZIgnAAIgBAZIALgVIAaAFQgOAegVAYQACAFAEACQADACAFgYQAKAMAJAFQgGAYgMAIQgMAIgNgHQgHgDgFgJQgNALgLAGQgEgHgKgMIgwAGIABgaIBFgGIgCAKIAKgJQgCgYADgjIhAAAIADgZIA/AAIABgSIAdAAIgCASIASAAQgHgGgEgDIAMgLIhwAAgAhAATIAHgtIA4AAIgIAtgAgnABIAKAAIABgKIgJAAg");
	this.shape_4.setTransform(99,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah2ByIAFgkIBcAAIAFgoIhCAAIAFgiIBDAAIAGgjIhRAAIAFgjIBbAAQgQgRgMgIIAggVQAeATANARIgQAKIBOAAIgGAjIhQAAIgGAjIBEAAIgGAiIhDAAIgGAoIBbAAIgFAkg");
	this.shape_5.setTransform(55.25,11.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAPgDQgoBOhAAjQgNgSgPgLQBNgjAjhiIAQADIABgXIg1AAIAFglIBYAAQgUCFBWA3QgRALgRAUQg4glgNhMg");
	this.shape_6.setTransform(11.8,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_subtitle, new cjs.Rectangle(0,0,281.4,24), null);


(lib.sb_logo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AA7BXIh/iCIAACCIgnAAIAAitIAyAAIB+CBIAAiBIAnAAIAACtg");
	this.shape.setTransform(138.6,62.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhpBXIAAgkICiAAQAPgDAAgOQAAgPgQgCIhqAAIgQgBQgVgEgMgOQgLgPAAgRQAAgUANgOQAMgOATgDIClgBIAAAjIiTAAQgJAAgCABQgLAEAAAMQAAAMALADIALABIByAAQAVACANAQQALAOAAAUQAAATgLAPQgNARgXACg");
	this.shape_1.setTransform(52.525,62.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhpBXIAAgkICiAAQAOgDAAgOQAAgPgPgCIhqAAIgRgBQgUgEgMgOQgLgPAAgRQAAgUAMgOQANgOATgDIAPgBICWAAIAAAjIiUAAQgIAAgCABQgMAEAAAMQAAAMALADIAMABIByAAQAVACAMAQQAMAOAAAUQAAATgMAPQgNARgWACg");
	this.shape_2.setTransform(81.425,62.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABTBXIgTgfIh/AAIgTAfIgvAAIBtitIApAAIBtCtgAArAXIgrhEIgqBEIBVAAg");
	this.shape_3.setTransform(109.8,62.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA7BXIh/iCIAACCIgnAAIAAitIAxAAIB/CBIAAiBIAnAAIAACtg");
	this.shape_4.setTransform(10.8,62.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSBXIAAitIAlAAIAACtg");
	this.shape_5.setTransform(32.025,62.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AlOB7QiahihNiiIgDgFQgKgXgKgJQgPgNgdgEIhHgIIAAgUICqAAIABABQA6CrCTBnQCTBpC0gBQC1ABCThpQCThnA6irIABgBICqAAIAAAUIhHAIQgeAEgOANQgJAJgMAXIgDAGQhMCiiaBhQiaBii1AAQi0AAiahig");
	this.shape_6.setTransform(74.725,102.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AIWDcIgBgBQg6iqiThoQiThoi1AAQi0AAiTBoQiTBog6CqIgBABIiqAAIAAgTIBHgJQAdgEAPgNQAKgIAKgYIADgFQBNiiCahiQCahiC0AAQC1AACaBiQCaBiBMCiIADAFQAMAYAJAIQAOANAeAEIBHAJIAAATg");
	this.shape_7.setTransform(74.725,22.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_5
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,80.1).s().p("AosItQjmjnAAlGQAAlFDmjmQDnjnFFAAQFGAADmDnQDnDmAAFFQAAFGjnDnQjmDmlGAAQlFAAjnjmg");
	this.shape_8.setTransform(69.2961,60.6308,1.7997,1.7997);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.3,-81,283.3,283.3);


(lib.sb_linear = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.698)","rgba(255,255,255,0)"],[0,0.529,1],-28.1,0,28.2,0).s().p("AkZKVIAA0pIIzAAIAAUpg");
	this.shape.setTransform(95.9364,114.1794,1.8446,1.5405,29.9991);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191.9,228.4);


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

	// Layer_53
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#5EE4FF","rgba(255,255,255,0)"],[0,0.945],0,0,0,0,0,19.9).s().p("AiJCKQg6g5AAhRQAAhQA6g5QA5g6BQAAQBRAAA6A6QA5A5AABQQAABRg5A5Qg6A6hRAAQhQAAg5g6g");
	this.shape.setTransform(50.0255,5.8407,2.5524,0.2991);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sb_light, new cjs.Rectangle(0,0,100.1,11.7), null);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	mask.setTransform(561,467);

	// Layer_3
	this.instance = new lib.bg();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sb_bg, new cjs.Rectangle(261,217,600,500), null);


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
	mask.graphics.p("EgkUAX/MAAAgv9MBIpAAAMAAAAv9g");
	mask.setTransform(232.5,153.5);

	// Layer_3
	this.instance = new lib.Image();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,465,307), null);


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
	mask.graphics.p("EgkUAX/MAAAgv9MBIpAAAMAAAAv9g");
	mask.setTransform(232.5,153.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#50B3E8").s().p("Ai6DQQgtAAgVgbQgXgaAJgxIAljcQAGgkAegaQAfgfAoAAIEvAAQAtAAAZAgQAZAggIArIgkDWQgHAogkAbQgjAbgsAAgAgvhSQgIAEAAAKIAACPQAAAKAIAEQAIAFAJgFIB7hIQAJgFAAgJQAAgIgJgFIh7hIQgFgDgEAAQgEAAgEADg");
	this.shape.setTransform(139.6969,216.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABjCRIjWjYIAADYIhAAAIAAkhIBTAAIDUDXIAAjXIBAAAIAAEhg");
	this.shape_1.setTransform(353.825,121.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AivBVIEBAAIANgBQAMgBAGgJQAGgIAAgKQAAgKgGgIQgHgJgMgCIiyAAQgVAAgGgBQgigFgVgaQgRgXAAgeQAAghAUgXQAUgYAhgEQAKgCAPAAID6AAIAAA7Ij2AAQgLAAgHACQgKADgEAHQgFAHAAAIQAAAUASAFIAUACICqAAIAVABQAiADAVAbQASAYAAAgQAAAhgSAYQgWAcgmADIkZABg");
	this.shape_2.setTransform(210.7,121.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AivBVIEBAAIANgBQAMgBAGgJQAGgIAAgKQAAgKgGgIQgGgJgOgCIixAAQgVAAgGgBQgjgFgUgaQgRgXAAgeQAAghAVgXQATgYAhgEQALgCAOAAID6AAIAAA7Ij2AAQgLAAgHACQgJADgGAHQgDAHAAAIQgBAUATAFIATACICqAAIAUABQAjADAUAbQATAYAAAgQAAAhgTAYQgVAcglADIkaABg");
	this.shape_3.setTransform(258.7,121.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ACJCRIggg0IjSAAIgfA0IhOAAIC0khIBFAAIC0EhgABIAmIhIhzIhHBzICPAAg");
	this.shape_4.setTransform(305.95,121.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABjCRIjWjYIAADYIhAAAIAAkhIBTAAIDUDXIAAjXIBAAAIAAEhg");
	this.shape_5.setTransform(141.275,121.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgfCRIAAkhIA/AAIAAEhg");
	this.shape_6.setTransform(176.65,121.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ACTICIgWhTIB6AAQAOAAALgJQALgIACgMICauPIDLAAIhtBFIiSNdQgGAjgfAbQgRAOgWAJQgVAIgRAAgAj8ICIgRhMIAyAAQAMAAAJgHQAJgHACgMIAljeQABgIgFgGQgGgHgKAAIhFAAQgQAQgUAMIiYAAQBuhCA+hOIiZAAIgMBMQgQBcgaBiQgdBrgkBYIhyAAQAzhpAkiPQAXhcAdioIAskHQAHgjAigdQAjgbAiAAICRAAIAcilIBsAAIgJA2ID5AAIgMBIIj5AAIgHAnIEUAAIggCkIhmAAIAShZIi0AAIgHArICHAAIgLBBIiHAAIgDASQgCAKAGAHQAGAGALAAIDQAAIgmBFIjuAAQgVAAgTgUQgUgVAFgdIAHgoIhnAAIALhBIBnAAIAHgrIhvAAQgLAAgKAHQgKAIgCAMIgmDhIIHAAIhFBKIizAAQgPAWgYAWIAjAAQAnAAATARQAVARACAqQA1g2ARgTIB1AAQgqAvgrArQgMCYAtCSIhuAAQgShVACiBQgQAPgOAHIgWCBQgDARgMASQgMASgRALQgfAZgjAAgAntHoQAsgZAqgkQArglAegmICEAAQgqAwgXAYQgmAnglAZgAm+FKQBAgnBEhNICFAAQg0BChDAygAB9EpIB/rwIBkAAIiALwg");
	this.shape_7.setTransform(345.675,200.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ADCIAQgwAAgVgZQgWgZAHgvIArj9IhOAAQgrDninB3IieAAQBug9BEhVQBOhfAMhtIgSAAQgpAAgYgdQgVgcAFgoIBOnHQAHguAigaQAggaAqAAIIZAAIh7BRIhRHdQgHAmghAbQgfAbgrAAIggAAIgpDyQgBAIAFAHQAFAHAHAAICeAAIg7BWgAgOAQIgEAeQgDAPAIAMQAHALALAAIEBAAQAQAAAKgJQAKgJACgQIAYiMgAASiuIgSBwIFShqIAThxgABCmQQgLAIgCAKIgWCDIFShrIAKgyIkiAAQgMAAgLAIgAnvIAIBKm4QgWAWgYASIiKAAQB1heBThTQBdheBFhnQAFgHgDgHQgCgHgJAAIkEAAIAPhUICMAAQgLg0gHhcIBnAAQAEBIAQBIIAqAAQA0AAASAkQAKATgDAYQgEAZgQAbQgvBLheBoIhfI5gAj5CjQgThQgJiLIBjAAQAIBOAFAiQAKA/ASAsg");
	this.shape_8.setTransform(237.2,200.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhkH+Qg7AAhBgTQhHgWg7grQg8gsglg4QgeBegkBaIhwAAQBpjQAqkmIBhAAQgQB6gXBUQASAmAfAnIA9llIjaAAIAOhTIDaAAIAXiMIiuAAIANhOICvAAIAXiOIBqAAIgYCOICPAAIgNBOIiPAAIgYCMICtAAIgGAlQBZg3A6hMQA/hSAPhZIiJAAIANhOIItAAIhhBQIgoDdQgGAdgeAdQggAbgiAAIh6AAIgXhPIBvAAQAKAAALgHQALgIABgNIArjJIiDAAQgbBdgqBJQgwBRhHA9IiPAAIgHAoIitAAIgZCWICgAAIgOBPIigAAIgkDTQAiAVAgALQAoANA1AHQAoAFBOAAIGoAAIg+BPg");
	this.shape_9.setTransform(118.75,200.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AiIg1IElglIgUCQIklAlg");
	this.shape_10.setTransform(351.9,61.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AiIg1IElglIgUCQIklAlg");
	this.shape_11.setTransform(303,67.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AiIg1IElglIgUCQIklAlg");
	this.shape_12.setTransform(252.025,73.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AiIg1IElglIgUCQIklAlg");
	this.shape_13.setTransform(199.625,80.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AiIg1IElglIgUCQIklAlg");
	this.shape_14.setTransform(148,86.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA3QmQgdAagcAUQgnAcgyAAIlkAAQgxAAgkgXQgfgTgTgfQgSgdgEgkIg8BMQgVAcggAPQggAQgkAAInIAAQhRAAhWgZIgDgBQg5gSg6gfQgUAigjAVQgkAUgpAAIhvAAQgyAAgpgeQgpgegPgxQgSg6Acg6QBRilAqjqIgHgIQgWgagJggQgJghAFgiIAPhTQAFgfARgbQARgaAagSQgCgUAEgSIANhPQAJg3ArgjQArglA5AAIAsAAIACgNQAKg4ArgkQArglA4AAICEAAIAAi2QAAg/gIg9IgVioQgHg0AhgqQAggpA0gHMAoAgFDQA0gGAqAgQApAgAHA0IAPB6QAHA0ggAqQghAqg0AGI0jCmIUMAAQA0AAAmAlQAlAlAAA1IAAENIDeAAQAwAAAoAZQAoAaASAsQAWA0gRA1QgRA1gvAeIgzAgIiHMbQgHAsgXAnQgXAogkAfIgDACQglAfguARQguARgsAAIyNADQhzAAhDhKg");
	this.shape_15.setTransform(232.8269,153.6951);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(40.4,40.1,384.90000000000003,227.20000000000002), null);


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
	mask.graphics.p("EgkFAXwMAAAgvfMBILAAAMAAAAvfg");
	mask.setTransform(231,152);

	// Layer_3
	this.instance = new lib.Image_0();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,462,304), null);


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
	mask.graphics.p("EgkUAX/MAAAgv9MBIpAAAMAAAAv9g");
	mask.setTransform(232.5,153.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA2Q0QgVATgeAVQgqAeg0AAIlkAAQgzAAgogYQgbgRgTgaQgTgagHgfIguA6QgXAegiARQgiAQgmAAInIAAQhUAAhVgZIgEgBQg7gTgxgbQgXAhgkAUQgkATgpAAIhvAAQg2AAgrggQgsgggQg0QgTg+Aeg9QBQijApjlIgEgEQgXgcgKgjQgJgiAGgkIAOhTQAFggARgbQARgbAagTQgBgUADgQIANhOQAKg8AuglQAtgnA9AAIAjAAIABgFQAKg7AugnQAugnA8AAIB6AAIAAisQAAg+gIg9IgVioQgHg4AjgtQAjgtA4gHMAoAgFDQA4gHAtAjQAtAiAHA5IAPB6QAHA4gjAtQgjAtg4AHIyFCSIRtAAQA4AAApAoQAoAoAAA5IAAEDIDTAAQA0AAArAbQArAcATAuQAXA3gSA4QgSA5gzAgIgvAeIiGMXQgHAtgYApQgYApglAgIgDADQgnAfgwASQgwASgtAAIyNADQhwAAhHhGgAA+QfQBCBHBtAAISNgDQAqAAAsgRQAtgQAkgeIADgCQAigdAWgnQAXgmAHgqICGsaQAAgEAEgDIAzghQAtgcAPgxQAQgxgUgxQgQgogmgZQgmgYguAAIjdAAQgEAAgDgDQgDgDAAgEIAAkNQAAgxgjgiQgigigwAAI0MAAQgEAAgDgDQgDgDAAgEQAAgDACgEQADgDAEAAIUjimQAvgGAfgmQAdgngGgwIgPh5QgGgwgmgeQgngegwAGMgoAAFDQgwAGgdAmQgeAnAGAwIAVCoQAIA9AABAIAAC2QAAAKgKAAIiEAAQg1AAgoAiQgoAigJA0IgCAOQgCAIgIAAIgsAAQg1AAgoAiQgpAhgIA0IgOBOQgDASACATQABAGgFADQgZAQgQAZQgQAZgFAdIgOBTQgFAfAIAfQAJAfAUAYIAHAHQAEAEgCAFQgpDshSCmQgbA1ARA3QAPAuAlAcQAmAcAwAAIBvAAQAmAAAhgTQAigTATggQACgEAEgBQAEgBADACQA3AeA6ATIADAAQBUAZBQAAIHIAAQAiAAAdgPQAegOAUgaIA8hMQAEgFAHACQAGACABAGQADAiASAcQARAcAdASQAjAVAtAAIFkAAQAvAAAkgaQAegWAagYQAEgCADAAQAEAAADADg");
	this.shape.setTransform(232.8423,153.6917);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(39.4,39.1,386.90000000000003,229.20000000000002), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop,reversed) {
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
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AsLGVIAAspIYXAAIAAMpg");
	mask_1.setTransform(78,40.5);

	// Layer_3
	this.instance_1 = new lib.Image_1();

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(0,0,156,81), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop,reversed) {
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
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ArtF8IAAr3IXbAAIAAL3g");
	mask_1.setTransform(75,38);

	// Layer_3
	this.instance = new lib.Image_0_1();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(0,0,150,76), null);


(lib.sb_sc5group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc5_tt_free
	this.instance = new lib.sb_sc5ttfree("synched",0);
	this.instance.setTransform(147.1,151.1,1,1,0,0,0,68.8,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:24},24).to({startPosition:124},100).to({_off:true},1).wait(6));

	// sb_sc5_tt_more
	this.instance_1 = new lib.sb_sc5ttmore("synched",0);
	this.instance_1.setTransform(195.65,213.9,1,1,0,0,0,37.6,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:24},24).to({startPosition:124},100).to({_off:true},1).wait(6));

	// sb_sc5_tt_video
	this.instance_2 = new lib.sb_sc5ttvideo("single",0);
	this.instance_2.setTransform(398.6,144.85,1,1,0,0,0,174.3,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({mode:"synched"},4,cjs.Ease.cubicOut).to({regY:27.1,scaleX:1.1552,scaleY:1.1552,x:398.65,y:145,startPosition:24},10,cjs.Ease.cubicOut).to({regY:27,scaleX:1,scaleY:1,x:398.6,y:144.85,startPosition:0},10,cjs.Ease.cubicOut).to({startPosition:100},100).to({_off:true},1).wait(6));

	// sb_sc5_tt_4w
	this.instance_3 = new lib.sb_sc5tt4w("single",0);
	this.instance_3.setTransform(374.15,211.35,1,1,0,0,0,132.9,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({mode:"synched"},10,cjs.Ease.cubicOut).to({regX:133.2,regY:24.7,scaleX:1.1549,scaleY:1.1549,x:374.3,y:211.5,startPosition:24},10,cjs.Ease.cubicOut).to({scaleX:1,scaleY:1,x:374.25,y:211.35,startPosition:0},10,cjs.Ease.cubicOut).to({startPosition:94},94).to({_off:true},1).wait(6));

	// sb_sc5_total
	this.instance_4 = new lib.sb_sc5total("single",0);
	this.instance_4.setTransform(327.2,285.6,1,1,0,0,0,189.2,68.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({mode:"synched"},16,cjs.Ease.cubicOut).to({regX:189.5,regY:68.8,scaleX:1.1549,scaleY:1.1549,x:327.35,y:285.7,startPosition:24},10,cjs.Ease.cubicOut).to({scaleX:1,scaleY:1,x:327.25,y:285.6,startPosition:0},10,cjs.Ease.cubicOut).to({startPosition:88},88).to({_off:true},1).wait(6));

	// sb_sc5_total_bg
	this.instance_5 = new lib.sb_sc5totalbg("synched",0);
	this.instance_5.setTransform(327.85,285.35,1,1,0,0,0,189,68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({startPosition:24},24).to({startPosition:124},100).to({_off:true},1).wait(6));

	// sb_sc5_frame
	this.instance_6 = new lib.sb_sc5frame("synched",0);
	this.instance_6.setTransform(322.5,166,1,1,0,0,0,322.5,166);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({startPosition:24},24).to({startPosition:124},100).to({_off:true},1).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,645,353.9);


(lib.sb_sc4tt = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sb_light();
	this.instance.setTransform(513.7,111.85,0.6853,0.5128);
	this.instance.compositeOperation = "screen";

	this.instance_1 = new lib.sb_light();
	this.instance_1.setTransform(475.15,34.4,0.6853,0.5128);
	this.instance_1.compositeOperation = "screen";

	this.instance_2 = new lib.sb_light();
	this.instance_2.setTransform(426.45,59.7,0.6853,0.5128);
	this.instance_2.compositeOperation = "screen";

	this.instance_3 = new lib.sb_light();
	this.instance_3.setTransform(386.7,86.8,0.6853,0.5128);
	this.instance_3.compositeOperation = "screen";

	this.instance_4 = new lib.sb_light();
	this.instance_4.setTransform(328,111.85,0.6853,0.5128);
	this.instance_4.compositeOperation = "screen";

	this.instance_5 = new lib.sb_light();
	this.instance_5.setTransform(273.65,34.4,0.6853,0.5128);
	this.instance_5.compositeOperation = "screen";

	this.instance_6 = new lib.sb_light();
	this.instance_6.setTransform(171,78.85,0.6853,0.5128);
	this.instance_6.compositeOperation = "screen";

	this.instance_7 = new lib.sb_light();
	this.instance_7.setTransform(108.85,78.85,0.6853,0.5128);
	this.instance_7.compositeOperation = "screen";

	this.instance_8 = new lib.sb_light();
	this.instance_8.setTransform(75.3,94.7,0.6853,0.5128);
	this.instance_8.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// t_line
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXF4QAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIgBgEIAXiCIm6AAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgBgEIAdinIACgDIINm2IADgBIDXAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIhOG5IBpAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIABAEIgcCeQgBAEgEAAIhrAAIgXCEQgBAEgEAAgAluBHIgdCfIG6AAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAAAABIgXCCIDNAAIAXiEQABgEAEAAIBrAAIAaiUIhpAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIBOm5IjPAAgAihBSQgEAAgBgDQgBgDADgDIEUjkQADgCADABQADACAAAEIgpDkQgBAEgEAAgAiTBIIDaAAIAljTg");
	this.shape.setTransform(145.025,74.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmtGFQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAPhVQAAgEAEAAIEoAAIAojiIkOAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgFIAPhRQAAgFAEAAIEQAAIAQhaIhrAAIgfAxQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIivAAQgDABgCgDQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBIDEk8QAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIIDAAQAEAAABAEIBUE7QAAABAAAAQABABgBAAQAAABAAAAQAAABgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIi4AAQgDAAgCgDIgMgwIhjAAIgQBaIEOAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABIABAEIgOBSQgBAFgEAAIkRAAIgoDiIEnAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAAAQABABgBAAQAAAAAAABIgPBUQAAAEgEAAgAmnF7IL0AAIANhKIknAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAAAgBAAIgBgFIAqjtQABgDAEAAIEQAAIANhJIkOAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgBgDIARhkQABgFAEAAIBsAAQADAAACAEIAMAvICuAAIhRkxIn9AAIi9ExICjAAIAfgwQACgDADAAIBzAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAIABAEIgSBkQgBAEgEAAIkPAAIgNBJIENAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABAAAAQABABgBAAQAAABAAAAIgpDtQgBAEgEAAIknAAgABSEMQgDAAgBgCQgBgEABgCIBjiiQAAgBAAgBQABAAAAAAQABgBAAAAQABAAABAAICsAAQADAAABADQABABgBAEIhjCjQgCACgDAAgABbECICgAAIBdiZIigAAgAkuEMQgEAAgBgEIgrijIABgEQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAICpAAQAEAAABADIAsCjQAAABAAABQABAAAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAgAkrECIChAAIgqiZIifAAgAhmjIQgDAAgBgCQgCgDACgCIA6hcQABgDADAAIDkAAQAEAAABAEIAZBcQAAABAAAAQABABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAgAhdjSIEoAAIgXhSIjdAAg");
	this.shape_1.setTransform(521.6354,76.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWGLQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgBgEIApjsIjHAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAIAPhXQABgEAEAAIDJAAIAgi2IhAAAIgrBkQgCADgDAAIh/AAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBIhJGgQgBAEgEAAIidAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAgBAAAAIBKmoIgnAAQgDAAgBgCQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBICgldQABgDADAAICnAAQABAAAAAAQABAAABABQAAAAABAAQAAABAAAAQACACgBADIiKEqIAQAAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAgBABIgIAsICFkwQABgDAEAAIB8AAQADAAACACQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAABIgxByIAoAAIAdilQABgEAEAAICfAAQABAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAgBABIgcCjICjAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAIgQBZQgBAEgEAAIilAAIggC2IC3AAQABAAABAAQAAAAABABQAAAAABAAQAAAAAAABIABAEIgPBXQgBAEgEAAIi5AAIgqDuQgBAEgEAAgAizCPIDHAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIgpDsICVAAIAqjuQABgEAEAAIC5AAIANhNIi3AAIgEgCQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIAijAQAAgEAFAAIClAAIAOhPIijAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBIAcijIiVAAIgdClQgBAEgEAAIg0AAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQgBgCABgDIAxhyIhyAAIiEEvIB0AAIAshkQABgDADAAIBJAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABIABAEIgiDAQgBAEgEAAIjJAAgAl3gtIAlAAQABAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAABAAAAQABABAAAAQAAAAgBABIhLGoICSAAIBSnQIgSAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgCgCABgDICKkqIibAAg");
	this.shape_2.setTransform(428.6104,75.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("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");
	this.shape_3.setTransform(334.9417,75.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABrGLQgDAAgBgEIgGgSIgzAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIABgiIkZAXQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBIAOhSQABgEAEgBIBagHIAJg2IhqAAIghC6QgBAFgEAAIigAAIgEgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAhi5IgVAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAIANhOQABgDAEAAIAWAAIAEgWQABgEAEgBICfAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAAAABIgDAUIBrAAIAGgjIj9AAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBIAzkhQABgDAEAAIBdAAIAGggIiHAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAPhWQABgFAEABICIAAIAIgtQABgEAEAAICjAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAAAQAAABABABQAAAAAAABQAAAAAAABQAAAAAAABIgHArICQAAIAIguQABgEAEAAICigBQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABIgIAtICFAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgPBXQgBADgEAAIiHAAIgGAgIBgAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAIgzEhQgBAEgEAAIj/AAIgGAjIEVAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIABAFIgvELQgBAFgEAAgAAzFGQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIgBAhIAyAAQADAAABAEIAGASICuAAIAtkCIkVAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAIgsQABgEAEAAID/AAIAykWIhhAAIgDgCQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAIgoQABgEAEgBICHAAIANhLIiFAAQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAIgBgEIAIgtIiYABIgIAtQgBAFgEAAIiaAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAIgrIiZAAIgHAsQgBAFgEAAIiJAAIgNBLICHAAIADACQABABAAABQAAAAAAABQAAAAAAABQAAAAAAABIgHAoQgBAFgEAAIhdAAIgyEWID+AAQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAIABAEIgIAtQgBADgEABIh1AAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAEgUIiWAAIgEAXQgBADgEABIgWAAIgMBCIAVAAQAAAAABABQABAAAAAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAIghC6ICVAAIAhi7QABgEAEgBIB1AAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABIABADIgLBAQAAAEgFABIhaAHIgMBIIEYgWQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAgAB+E2IgEgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAHhSIhCAAIgDAbQAAAEgEAAIgYABQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgBgEIAJgzQABgEAEgBIB4AAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABIABADIgTBrQAAAEgEAAgACFDVQABAAAAAAQABAAAAAAQAAABABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIgHBSIAGAAIARhgIhuAAIgHAoIANAAIACgbQABgEAEAAgABLAEQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAAAAAAAIAHgmQABgEAEAAIBgAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABABQAAAAAAABQAAAAAAABQAAAAAAABIgGAkQgBAEgEAAgABRgFIBXAAIAEgbIhWAAgAi3AEQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgBgCIAGgmQABgEAEAAIBjAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAABQAAAAABABQAAAAAAABQAAAAAAABIgHAkQgBAEgEAAgAixgFIBYAAIAFgbIhYAAgABdhfQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBIAGgjQABgFAEAAIBhAAQAAAAABABQAAAAABAAQAAAAABABQAAAAABAAIABAFIgHAjQgBAEgEAAgABjhpIBWAAIAFgaIhXAAgAimhfQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBIAGgjQABgFAEAAIBiAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABABAAABQAAAAAAABQAAAAAAABQAAAAAAABIgGAjQAAAEgFAAgAighpIBZAAIAEgaIhYAAgAgujOQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABgBIAHgoQABgEAEgBICaAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIgHAoQgBAFgEAAgAgojYICQAAIAFggIiQAAg");
	this.shape_4.setTransform(241.5417,75.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// t_glow
	this.instance_9 = new lib.t_4w();
	this.instance_9.setTransform(67,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// t_black
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAXFzIAZiIInBAAIAeinIIOm2IDWAAIhPG/IBvAAIgcCeIhuAAIgZCIgAihBNIDsAAIApjkg");
	this.shape_5.setTransform(145,74.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AmtGAIAOhUIEsAAIApjtIkTAAIAOhSIEUAAIAShkIhzAAIghA0IivAAIDDk8IIDAAIBUE8Ii4AAIgNg0IhsAAIgRBkIEUAAIgOBSIkVAAIgqDtIEtAAIgOBUgADRjNIgZhcIjkAAIg6BcIE3AAgABSEHIBjijICsAAIhkCjgAkuEHIgrijICpAAIAtCjg");
	this.shape_6.setTransform(521.625,76.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVGGIApjyIjNAAIAQhXIDNAAIAijAIhJAAIguBnIh+AAICIk5IB9AAIg0B5IAzAAIAeipICgAAIgeCpICpAAIgPBZIiqAAIgiDAIC+AAIgQBXIi9AAIgrDygAmdGGIBMmuIgtAAICfldICmAAIiNExIAZAAIhUHag");
	this.shape_7.setTransform(428.575,75.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYGBIBNm9ICwAAIArjuIizAAIAPhWIFOAAIhIGZIiyAAIgxESIDOAAIg5BWgAm5GBIBrpfIA4AAIAOhMIhCAAIAPhWIGTAAIgPBWIhIAAIgNBMIBBAAIhqJfgAknEtIB+AAIAKg5Ih+AAgAkOCeIB+AAIAIgvIg4AAIAsj3IgUAAIggC2IgmBBIgXAAgAkYBYIAcgwIAgiwIgUAAgAh6AaIAUAAIAdiiIgUAAgAiZjeIAUAAIAOhMIgUAAg");
	this.shape_8.setTransform(334.925,75.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABrGGIgGgVIg3AAIABgnIkeAWIAOhSIBegIIALhAIh1AAIghDAIigAAIAijAIgbAAIAOhNIAaAAIAFgZICfAAIgEAZIB1AAIAIgsIkDAAIAzkhIBhAAIAIgoIiNAAIAPhXICNAAIAIgwICjAAIgJAwICaAAIAJgxICigBIgJAyICLAAIgPBXIiLAAIgIAoIBmAAIgzEhIkDAAIgIAsIEbAAIgvENgACFDaIgHBXIAQAAIAShrIh4AAIgJA0IAXgBIADgfgABLAAIBhAAIAGglIhgAAgAi3AAIBiAAIAHglIhjAAgABdhkIBgAAIAHgjIhhAAgAimhkIBjAAIAGgjIhiAAgAgujUICaAAIAHgoIiaAAg");
	this.shape_9.setTransform(241.525,75.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(67,-2,537,156);


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

	// MergedLayer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_15 = new cjs.Graphics().p("AWeGMQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAIAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAAAIAPhUQAAgFAFAAIAAAAIEnAAIAojiIkOAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIAAAAIgBgEIAAAAIAPhSQAAgFAFABIAAAAIEPAAIAQhaIhqAAIgfAwQgBABAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIAAAAIiwAAQgDAAgBgDIAAAAQgCgCACgDIAAAAIDDk7QAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAIAAAAIIFAAQAEAAABAFIAAAAIBUE7QAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABIAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIAAAAIi4AAQgDAAgCgEIAAAAIgNgvIhjAAIgQBaIEPAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAIAAAAIABAEIAAAAIgPBTQgBAEgEAAIAAAAIkQAAIgoDiIEnAAQAAAAABABQAAAAABAAQAAAAABABQAAAAABAAIAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAIAAAAIgPBUQAAAEgFABIAAAAgAWkGCIL2AAIANhLIknAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAIAAAAIgBgEIAqjtQABgEAEAAIAAAAIEQAAIANhJIkPAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIAAAAIgBgEIAAAAIAShkQABgFAEAAIAAAAIBrAAQAEAAABAEIAAAAIANAwICtAAIhRkyIn+AAIi9EyICkAAIAfgxQABgDADAAIAAAAIBzAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAIAAAAIABAEIAAAAIgRBkQgBAFgEgBIAAAAIkQAAIgNBJIEOAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABIAAAAIABADIAAAAIAAABIAAAAIgqDsQgBAEgEAAIAAAAIknAAIgNBLgAs4GLQgEAAgBgEIAAAAIgGgSIgzAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAAAIACgiIkbAWQAAABgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAAAIAPhSQABgFADAAIAAAAIBagIIAKg2IhrAAIghC7QgBAFgEAAIAAAAIigAAIgDgCIAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAAAIAhi6IgUAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAAAIAOhOQABgDAEAAIAAAAIAWAAIADgWQABgFAEAAIAAAAICgAAQAAAAABABQAAAAABAAQAAAAABABQAAAAABAAIAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAIAAAAIgEAVIBrAAIAGgjIj9AAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIAAAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAAAIAzkhQABgEAEAAIAAAAIBeAAIAFgfIiGAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAIAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAIAAAAIAPhWQABgFAEAAIAAAAICIAAIAIgsQABgEAEAAIAAAAICiAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAABAAIAAAAQAAABAAABQAAAAABABQAAAAAAABQAAAAAAABIAAAAIgIAqICSAAIAIgtQABgEAEAAIAAAAIChgBQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAAIgIAsICGAAQAAAAABABQAAAAABAAQAAAAABABQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIAAAAIgPBXQgBADgEAAIAAAAIiIAAIgFAfIBgAAQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAIAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAIAAAAIgzEhQgBAEgEAAIAAAAIj/AAIgGAjIEVAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABAAAAIAAAAIACAEIAAAAIgwEMQgBAFgEAAIAAAAgAtxFrIA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AAAIABADIAAAAIAAACIAAAAIgHAjQAAAEgEAAIAAAAgAxEhpIBYAAIAFgaIhZAAgAbmjCQgDAAgCgCIAAAAIgBgDIAAAAIABgCIAAAAIA6hcQACgDADAAIAAAAIDkAAQAEAAABAEIAAAAIAaBcIAAACIAAAAIgBACIAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIAAAAgAbvjMIEoAAIgWhSIjfAAgAvTjOQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBgBIAAAAIgBgCIAAAAIAAgCIAAAAIAHgoQABgFAEAAIAAAAICcAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAIAAAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAABIAAAAIgIAoQgBAEgEABIAAAAgAvNjZICRAAIAGgfIiRAAgAiXjVQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIAAAAIgCgCIAAAAIABgCIAAAAIANhNQABgEAEAAIAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIAAAAIABAEIAAAAIgNBNQgBAEgEAAIAAAAgAiRjfIAJAAIAMhDIgKAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_graphics_15,x:319.7416,y:76.6003}).wait(25));

	// sb_linear
	this.instance = new lib.sb_linear("synched",0);
	this.instance.setTransform(-95.25,55.05,1.5781,1.5781,0,0,0,96,114);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({x:725.75,y:90.25},24,cjs.Ease.cubicOut).wait(1));

	// sb_sc4_tt
	this.instance_1 = new lib.sb_sc4tt("synched",0);
	this.instance_1.setTransform(308.1,79.15,0.357,0.357,0,0,0,323.1,78.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:323.2,scaleX:1,scaleY:1,x:308.15,y:79.2,alpha:1},11,cjs.Ease.cubicOut).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52,-1,537,156);


(lib.an_sc4more = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_free
	this.instance = new lib.sb_sc4more("synched",0);
	this.instance.setTransform(108.2,22.4,1,1,0,0,0,108.2,22.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},15,cjs.Ease.cubicOut).to({startPosition:0},51).to({_off:true},1).wait(83));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(55.3,-0.3,105.89999999999999,44.599999999999994);


(lib.anflow_sc3icon_web = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3-icon-web
	this.instance = new lib.sb_sc3iconweb("synched",52);
	this.instance.setTransform(17.5,13.5,1,1,0,0,0,17.5,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:23.5,startPosition:76},20).to({y:13.5,startPosition:52},21).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,37);


(lib.anflow_sc3icon_video = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3-icon-video
	this.instance = new lib.sb_sc3iconvideo("synched",52);
	this.instance.setTransform(56,47,1,1,0,0,0,56,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:71,startPosition:76},20).to({y:47,startPosition:52},21).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112,118);


(lib.anflow_sc3icon_TV = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3-icon-TV
	this.instance = new lib.sb_sc3iconTV("synched",52);
	this.instance.setTransform(44.5,51.55,1,1,0,0,0,44.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:33.5,startPosition:76},20).to({y:51.55,startPosition:52},21).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89,85.1);


(lib.anflow_sc3icon_play = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3-icon-play
	this.instance = new lib.sb_sc3iconplay("synched",52);
	this.instance.setTransform(37,38.55,1,1,0,0,0,37,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:27.5,startPosition:76},20).to({y:38.55,startPosition:52},21).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74,66.1);


(lib.anflow_sc3icon_music = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_icon_music
	this.instance = new lib.sb_sc3iconmusic("synched",52);
	this.instance.setTransform(46.5,54,1,1,0,0,0,46.5,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:35,startPosition:76},20).to({y:54,startPosition:52},21).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93,89);


(lib.anflow_sc3icon_live = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3-icon-live
	this.instance = new lib.sb_sc3iconlive("synched",52);
	this.instance.setTransform(63.5,45,1,1,0,0,0,63.5,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:69,startPosition:76},20).to({y:45,startPosition:52},21).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127,114);


(lib.anflow_sc3icon_dark = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3-icon-dark
	this.instance = new lib.sb_sc3icondark("synched",52);
	this.instance.setTransform(28.5,20.5,1,1,0,0,0,28.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:36.5,startPosition:76},20).to({y:20.5,startPosition:52},21).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,57);


(lib.an_sc3tttvideo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_ttt_video
	this.instance = new lib.sb_sc3tttvideo("synched",0);
	this.instance.setTransform(144.55,67.9,0.1782,0.1782,0,0,0,144.5,67.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:144.7,regY:68,scaleX:1.0001,scaleY:1.0001,x:144.7,y:68,alpha:1,startPosition:28},15,cjs.Ease.cubicOut).to({startPosition:79},51).to({_off:true},1).wait(54));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,289.1,135.8);


(lib.an_sc3icons = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// an_flow_sc3_icon_video
	this.instance = new lib.anflow_sc3icon_video("synched",0);
	this.instance.setTransform(230.25,194.05,0.517,0.517,0,0,0,56,59.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:59,scaleX:1,scaleY:1,x:56,y:183,alpha:1,startPosition:19},19,cjs.Ease.cubicOut).to({startPosition:24},47).to({_off:true},1).wait(63));

	// an_flow_sc3_icon_TV
	this.instance_1 = new lib.anflow_sc3icon_TV("synched",0);
	this.instance_1.setTransform(238.7,231.8,0.3231,0.3231,0,0,0,44.6,42.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({regX:44.5,regY:42.5,scaleX:1,scaleY:1,x:165.5,y:253.45,alpha:1,startPosition:19},19,cjs.Ease.cubicOut).to({startPosition:16},39).to({_off:true},1).wait(63));

	// an_flow_sc3_icon_dark
	this.instance_2 = new lib.anflow_sc3icon_dark("synched",0);
	this.instance_2.setTransform(347.55,170.5,0.6842,0.6842,0,0,0,28.5,28.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,x:360.5,y:73.5,alpha:1,startPosition:19},19,cjs.Ease.cubicOut).to({startPosition:24},47).to({_off:true},1).wait(63));

	// an_flow_sc3_icon_web
	this.instance_3 = new lib.anflow_sc3icon_web("synched",0);
	this.instance_3.setTransform(379.45,194.5,0.6572,0.6572,0,0,0,17.6,18.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({regX:17.5,scaleX:1,scaleY:1,x:444.5,y:108.5,alpha:1,startPosition:19},19,cjs.Ease.cubicOut).to({startPosition:20},43).to({_off:true},1).wait(63));

	// an_flow_sc3_icon_live
	this.instance_4 = new lib.anflow_sc3icon_live("synched",0);
	this.instance_4.setTransform(475.35,163.15,0.4157,0.4157,0,0,0,63.5,57);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,x:622.5,y:94,alpha:1,startPosition:19},19,cjs.Ease.cubicOut).to({startPosition:24},47).to({_off:true},1).wait(63));

	// an_flow_sc3_icon_music
	this.instance_5 = new lib.anflow_sc3icon_music("synched",0);
	this.instance_5.setTransform(427.95,225.45,0.451,0.451,0,0,0,46.5,44.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({scaleX:1,scaleY:1,x:557.5,y:247.5,alpha:1,startPosition:19},19,cjs.Ease.cubicOut).to({startPosition:18},41).to({_off:true},1).wait(63));

	// an_flow_sc3_icon_play
	this.instance_6 = new lib.anflow_sc3icon_play("synched",0);
	this.instance_6.setTransform(431.95,168.55,0.6487,0.6487,0,0,0,37.1,33);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:37,scaleX:1,scaleY:1,x:494,y:21.95,alpha:1,startPosition:19},19,cjs.Ease.cubicOut).to({startPosition:24},47).to({_off:true},1).wait(63));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-11,686,307);


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

	// sb_light
	this.instance = new lib.sb_light();
	this.instance.setTransform(227.15,38.55,0.475,0.5128,0,0,0,50.1,6);
	this.instance.compositeOperation = "screen";

	this.instance_1 = new lib.sb_light();
	this.instance_1.setTransform(527.45,88.85,0.5601,0.5128,0,0,0,50.1,6);
	this.instance_1.compositeOperation = "screen";

	this.instance_2 = new lib.sb_light();
	this.instance_2.setTransform(344.05,54,0.4295,0.5128,0,0,0,50.2,6);
	this.instance_2.compositeOperation = "screen";

	this.instance_3 = new lib.sb_light();
	this.instance_3.setTransform(593.7,116.55,0.5195,0.5128,0,0,0,50.1,6);
	this.instance_3.compositeOperation = "screen";

	this.instance_4 = new lib.sb_light();
	this.instance_4.setTransform(549.45,38.55,0.5195,0.5128,0,0,0,50.1,6);
	this.instance_4.compositeOperation = "screen";

	this.instance_5 = new lib.sb_light();
	this.instance_5.setTransform(438.15,41.5,0.5601,0.5128,0,0,0,50.1,6);
	this.instance_5.compositeOperation = "screen";

	this.instance_6 = new lib.sb_light();
	this.instance_6.setTransform(365.1,116.55,1.1749,0.5128,0,0,0,50.1,6);
	this.instance_6.compositeOperation = "screen";

	this.instance_7 = new lib.sb_light();
	this.instance_7.setTransform(263.25,116.55,0.9954,0.5128,0,0,0,50.1,6);
	this.instance_7.compositeOperation = "screen";

	this.instance_8 = new lib.sb_light();
	this.instance_8.setTransform(30.2,113.45,0.6853,0.5128);
	this.instance_8.compositeOperation = "screen";

	this.instance_9 = new lib.sb_light();
	this.instance_9.setTransform(136.4,38.55,0.6209,0.5128,0,0,0,50.1,6);
	this.instance_9.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// t_line
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABzGLQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAIA+lgQABgEAEAAICUAAQABAAAAAAQABAAAAABQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAIguEDIBGAAQADAAABADQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABIgsBWQAAADgEAAgAB5GBIC6AAIAnhNIhEAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAgBAAAAIAukEIiKAAgAhxGLIgDgBIgCABIhYAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAIArjyQABgEAEAAIBXAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABgBAAIgnDhIA6hxIAnjfQABgEAEAAICUAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABgBAAIgrD1IAAACIg6BqQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAgAgqEGIg/B7ICNAAIA4hoIAqjuIiKAAgAjIGBIBNAAIApjoIhNAAgAlBGLQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgBgEIArjyQAAgEAEAAIBbAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAIgrDzQgBAEgEAAgAk7GBIBQAAIApjoIhQAAgAm2GLQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAIAqjyQABgEAEAAIBeAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAIgrDzQgBAEgEAAgAmwGBIBTAAIApjoIhTAAgAmGB7QAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAgBgBAAQAAgBAAAAIARheIABgCICSiKIh3AAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAPhTIABgCICzi5QABgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAICtAAQAEAAABADQABADgCADIipCvIB5AAQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAIgOBRIgCACIhYBSIBNAAIADACQABABAAAAQAAAAAAABQABABAAAAQAAABAAAAIgcCZQgBAEgEAAgAlLjJIgNBLIB9AAQADAAACADQABAEgCACIiaCRIgPBVIEvAAIAaiPIhUAAQgDAAgBgDQgCgDADgCIBghaIANhIIh/AAQgDAAgBgEQgCgCADgDICoivIifAAgAjVAoQgDAAgBgDQgCgDADgDIBAg8QADgCADACQAEABgBAEIgLA8QAAAEgFAAgAjIAeIAlAAIAHgpgAD9AMQgEAAgBgFIgHgoIgaAqQAAABAAAAQgBABAAAAQgBAAgBABQAAAAgBAAIkAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgBgEIAPhQIAAgCIBWiQIhBAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIAPhSQAAgFAEAAICKAAIgIhLIABgEQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAIChAAQAEAAABAFIAHBMICDAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAIABAEIgOBTQgBAEgEAAIjVAAIhTCMIBqAAIgRhqIABgEQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAICSAAQAEAAABAEIAdDCIgBAEQAAAAgBABQAAAAAAAAQgBAAgBABQAAAAgBAAgAD1g1QADABABADIAIAzICIAAIgci4IiIAAIAQBqQABABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAIh3AAQgDAAgCgDQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBIBZiVQACgDADAAIDSAAIANhJIiCAAQgFAAAAgEIgHhNIiWAAIAHBMQABAAAAABQAAABAAAAQgBAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIiLAAIgMBJIBEAAQADAAACADQAAAAAAABQABABAAAAQAAABgBAAQAAABAAABIhbCWIgNBKID3AAIAgg0QAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAIABAAg");
	this.shape.setTransform(562.2688,77.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjMGIQgEAAgBgEIgWhRIgrBAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIiwAAQgDAAgCgCQgBgDACgCICVjfQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAICwAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAIhkCVIBVAAIAfitIkiAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBgBIgBgEIAPhRQABgEAEgBICOAAICHhYIjjAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBIgBgEIAOhOQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAICvhzIi3AAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIgBgFIAPhUQABgEAEAAII4AAIASgjQACgDADAAIC0AAQABAAABAAQAAAAABABQAAAAABAAQAAABAAABQACACgBACIhAB7QAAACgEAAIklAAIimBtIBjAAIB2hOIADgBIDiAAQAEAAABAEQABAEgDABIjeCWIB+AAQAEAAAAADIBTC3QABACgCACQAAABgBAAQAAABgBAAQAAAAgBAAQgBABAAAAIivAAQgEgBgBgDIgWgyIgpA0QgBABAAAAQAAABgBAAQAAAAgBAAQgBABAAAAIg3AAIgvEIQgBAEgEAAgAjIF+IDSAAIAvkJQABgDAEAAIA4AAIAug6QAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIAEADIAYA3ICkAAIhNisIiLAAQgEABgBgEQgBgEADgCIDeiWIjRAAIh2BOIgCABIh1AAQgEAAgBgDQgBgDADgDIC0h3IADgBIEkAAIA6hwIipAAIgSAjQgCADgDAAIo3AAIgNBKIDBAAQAEABABADQABADgDACIi6B7IgNBGIDuAAQAEAAABAEQABAEgDABIiXBjIgCABIiMAAIgNBIIEiAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAIghC5QAAADgEAAIhVAAgAm9FrICkAAICOjUIijAAgACYF1QgEAAgBgDIhHjfQgBAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAICvAAQAEAAAAADIBKDfQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAgACcFrIClAAIhGjUIikAAgAgGAoQgDAAgCgDQAAgEACgDIB9hTIAEAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAAAIAlBUQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBABQAAAAgBAAQAAABgBAAQAAAAgBAAgAAKAeICLAAIgghHg");
	this.shape_1.setTransform(469.375,77.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmXGJQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBgBIgBgEIBBlvQABgEAEAAIKdAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAgBABQAAAAAAABIhAFvQgBAEgEAAgAmRF/IKUAAIA/llIqUAAgAjjE2QgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAIAKg8QABgEAEAAIFRAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAIABAFIgLA7QgBAFgEAAgAjdEsIFGAAIAJgyIlGAAgAjKCpQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAIgBgEIAKg6QAAgEAFAAIFQAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQgBABAAAAIgKA7QAAAEgFAAgAjECfIFGAAIAIgwIlGAAgAl5gPQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAIAPhSQAAgEAEAAICNAAIgghhIABgEQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAICnAAQAEAAABADIAfBkIByAAIBGhlQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAICqAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAQACADgCADIhABfICLAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIgPBSQgBAEgEAAgAlzgZILnAAIANhIIiOAAQgDAAgCgDQgBgCACgDIBAhfIieAAIhGBlQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIh4AAQgEAAgBgEIgfhjIidAAIAgBgQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIiPAAgAlDjiQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBIAOhQQABgEAEAAIETAAIgGhHIABgEQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAICsAAQAEAAABAEIAHBIIECAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQABABAAAAQAAABAAAAQAAABAAAAIgOBQQgBAEgEAAgAk9jsILDAAIAMhGIkAAAQgEAAgBgEIgIhIIihAAIAGBHIgCAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIkVAAg");
	this.shape_2.setTransform(376.3813,77.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("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");
	this.shape_3.setTransform(281.8121,77.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah2GKQgDAAgBgDIgkhYQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAABAAQAAAAABAAIDEAAIA5lFIjsAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgEIAQhZQAAgFAFAAIIDAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAIgQBZQgBAEgEAAIhmAAIhKGjQgBAEgEAAgAhyGAIE0AAIBKmiQABgFAEAAIBmAAIAOhPIn5AAIgOBPIDsAAIAEACQAAABAAAAQABAAAAABQAAABAAAAQAAABAAAAIg7FPQgBAEgEAAIjBAAgAmeGKQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBIgBgEIA+lgIg9AAQgDAAgBgCQgCgDACgDICUjJIhmAAQgDAAgBgDQgBgDABgCICcjSQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAICnAAQAEAAABADQABADgBACIiBCuIBoAAQADAAABADQACACgCADIiNDBIAeAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEIhGGLQAAAEgEAAgAlui3IBmAAQADAAACADQABACgCADIiUDJIA5AAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAIABAEIg+FgICaAAIBEmAIgiAAQgDAAgBgDQgBgDABgCICNjBIhoAAQgDAAgBgDQgCgCACgDICBiuIibAAgAg0kYQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgCgEIAQhaQABgEAEAAIHHAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABQAAAAAAAAQAAABAAAAIgPBaQgBAEgEAAgAgukiIG9AAIAOhPIm9AAg");
	this.shape_4.setTransform(189.2313,77.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AmsGLQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIA9laQABgEAEAAIKyAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABgBAAIg9FaQgBAEgEAAgAmmGBIKnAAIA8lQIqoAAgAj2E7QgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAKg5QABgEAEAAIFiAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAABQAAAAAAABQAAAAgBABIgKA5QgBAEgEAAgAjwExIFYAAIAIgwIlYAAgAjfC0QAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIAJgyQABgEAEAAIFjAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAIABAFIgJAxQAAAEgFAAgAjZCqIFZAAIAHgnIlZAAgAiMAVQgDAAgBgDIgZg5Ig1A6QAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAIi9AAQgDAAgBgDQgCgDADgCICFiGIhcAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIAOhPQABgEAEAAICQAAIAIguIgCAAIgSAiQgBACgDAAIiBAAQgDAAgCgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIBQikQACgDADAAICDAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAABQAAAAAAAAQABABAAAAQAAABAAABQAAAAgBABIgVArIDkAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIgOBPQgBADgEAAIhgAAIgIAuIBmAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABAFIgOBPQgBAEgEAAIh5AAIgPARIBSAAQAEAAABACIAqBrIBCl3QAAgEAFAAIFQAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABgBAAIhCF4QgBAEgEAAIlRAAIgCAAIABACQABABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAgAijgxIAaA8ICVAAIgphpIhaAAQgEAAgBgDQgCgDADgDIAYgaQAAAAABgBQAAAAABgBQAAAAABAAQAAAAAAAAIB4AAIAMhFIhmAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAKg4QABgDAEAAIBgAAIAMhFIjnAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQgBAAABgBQAAAAAAgBIAWgrIh4AAIhLCbIB2AAIASgiQABgDADABIALAAQABAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABgBABIgJA3QgBAEgEAAIiQAAIgNBFIBiAAQACAAACADQABAEgCACIiFCFICvAAIA5g+QAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAIAEADgAAfACIFHAAIBAluIlGAAgAC6hJQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIgBgEIAljNQAAgEAEgBIAuAAQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABgBAAIgkDOQgBADgEAAgADAhTIAjAAIAjjCIgjAAg");
	this.shape_5.setTransform(96.1104,77.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// t_smart
	this.instance_10 = new lib.t_smart();
	this.instance_10.setTransform(15,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// t_black
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABzGGIA+lgICUAAIgvEJIBMAAIgsBXgAhxGGIBCiBIAnjfICUAAIgsD1Ig5BrgAjOGGIArjyIBXAAIgqDygAlBGGIAqjyIBbAAIgrDygAm2GGIAqjyIBeAAIgrDygAmGB2IARhdICaiSIiDAAIAPhTICzi5ICtAAIixC4ICFAAIgOBQIhiBaIBaAAIgcCZgAjVAjIA2AAIALg8gAD9AHIgJg3IghA3IkAAAIAPhQIBaiYIhKAAIAOhTICPAAIgIhRIChAAIAHBRICIAAIgOBTIjXAAIhZCWIB3AAIgRhwICSAAIAdDCg");
	this.shape_6.setTransform(562.275,77.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AjMGDIgXhUIBcAAIAgi5IkoAAIAPhSICQAAICWhiIj0AAIAOhOIC8h7IjHAAIAPhVII7AAIAUgmIC0AAIg/B7IknAAIi0B2IB1AAIB3hPIDiAAIjrCfICOAAIBSC2IivAAIgag5IguA6Ig7AAIgwENgAgGAjICiAAIglhTgACYFwIhIjeICvAAIBJDegAnGFwICVjeICwAAIiVDeg");
	this.shape_7.setTransform(469.375,77.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AmXGEIBBlvIKdAAIhAFvgAjjExIFQAAIALg8IlRAAgAjKCkIFQAAIAKg6IlQAAgAl5gUIAOhSICUAAIgihnICnAAIAhBnIB4AAIBHhnICqAAIhFBnICUAAIgPBSgAlDjnIAPhQIEZAAIgHhMICsAAIAIBMIEGAAIgOBQg");
	this.shape_8.setTransform(376.375,77.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfGDIARgUIhUAAIADiMIB6AAIgEBeICmjGIC1AAIjcEIgAknGDIgLg5IgUA5Ih9AAIA2iiIB8AAIgZBOIAdAAIAShkIiJAAIAfizIGeAAIgKA7IC1jWICyAAIjFDsIimAAIgRBiIiFAAIghC4gAjpCDICBAAIAGgiIiBAAgAmBABIAPhQICaAAIgBgjIiBAAIAvkJIG0AAIgjDJICnjQIC3AAIjCDsIihAAIgHAkIiUAAIABAjICfAAIgOBQgAi1i/ICIAAIADgYIiHAAgAimkWICHAAIAFgXIiHAAg");
	this.shape_9.setTransform(281.8,77.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ah2GFIgkhYIDIAAIA8lPIjyAAIAQhZIICAAIgPBZIhqAAIhMGngAmfGFIA/lmIhCAAICajRIhwAAICcjSICnAAIiGC2IByAAIiTDJIAoAAIhGGKgAg0kdIAQhZIHHAAIgQBZg");
	this.shape_10.setTransform(189.25,77.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AmsGGIA+laIKxAAIg9FagAj2E2IFjAAIAKg5IljAAgAjeCvIFiAAIAJgxIliAAgAiMAQIgbhAIg7BAIi9AAICOiOIhnAAIANhPICVAAIAKg3IgLAAIgUAkIiBAAIBQilICDAAIgZAyIDsAAIgNBPIhlAAIgKA3IBsAAIgNBPIh8AAIgYAbIBeAAIAtBzgAAZAHIBDl4IFQAAIhBF4gAC6hOIAtAAIAljNIguAAg");
	this.shape_11.setTransform(96.1,77.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,-1,630,155);


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

	// MergedLayer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_15 = new cjs.Graphics().p("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ABAAAAABQABAAAAAAQABAAAAAAIAAAAIAtAAQAEAAABgEIAAAAIAkjNIAAgBIAAAAIgBgEIAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIAAAAIguAAQgEAAAAAEIAAAAIglDNgABZgNQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAAAIAOhSQAAgEAFAAIAAAAICMAAIgfhgIAAgFIAAAAQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAIAAAAICnAAQAEAAABADIAAAAIAfBkIBzAAIBFhlQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAIAAAAICqAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIAAAAQABADgBADIAAAAIhABfICKAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIAAAAQABAAAAABQAAAAABABQAAAAAAABQAAABgBAAIAAAAIgPBSQgBAEgEAAIAAAAgABegXILoAAIANhIIiOAAQgDAAgBgDIAAAAIgBgBIAAAAIABgDIAAAAIBAhgIieAAIhFBlQgBABAAAAQAAAAgBABQgBAAAAAAQgBAAgBAAIAAAAIh5AAQgEAAgBgDIAAAAIgfhkIidAAIAgBhIAAABIAAAAIgBADIAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAgBAAIAAAAIiPAAIgNBIgABegXIANhIICPAAQABAAABAAQABAAAAAAQABgBAAAAQAAAAAAgBIAAAAIABgDIAAAAIAAgBIAAAAIgghhICdAAIAfBkQABADAEAAIAAAAIB5AAQABAAABAAQAAAAABAAQABgBAAAAQAAAAABgBIAAAAIBFhlICeAAIhABgIgBADIAAAAIABABIAAAAQABADADAAIAAAAICOAAIgNBIgEghlgBJQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIAAAAIgBgFIAAAAIAljNQAAgEAEAAIAAAAIAuAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIAAAAIABAEIAAAAIAAABIAAAAIgkDNQgBAEgEAAIAAAAgEghfgBTIAjAAIAjjDIgjAAgAqUi8QgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIAAAAIgBgEIAAAAIAEgYQABgEAEAAIAAAAICHAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABIAAAAIABAEIgEAYQAAADgFAAIAAAAgAqOjFIB9AAIACgOIh9AAgACPjgQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAIAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAAAIAOhQQABgFAEAAIAAAAIEUAAIgGhHIABgDQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAAAAICsAAQAEAAABAEIAAAAIAIBIIEBAAQABAAABABQAAAAABAAQAAAAABAAQAAABAAAAIAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAABIAAAAIgOBQQgBADgEAAIAAAAgACVjpILDAAIAMhHIkAAAQgEABgBgFIAAAAIgHhIIijAAIAGBHIgBAEIAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAAAIkVAAIgMBHgACVjpIAMhHIEVAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAIAAAAIABgEIAAAAIgGhHICjAAIAHBIQABAFAEgBIAAAAIEAAAIgMBHgAqFkRQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBgBIAAAAIgBgCIAAAAIAAgBIAAAAIAEgZQABgDAEAAIAAAAICHAAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABIAAAAIACACIAAAAIgBACIAAAAIgEAXQgBAFgEAAIAAAAgAp/kbIB9AAIACgOIh9AAgA2xkYQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIAAAAIgCgFIAAAAIAQhaQABgDAEAAIAAAAIHIAAQABAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIAAAAIgPBaQgBAEgEAAIAAAAgA2rkiIG+AAIAOhPIm+AAIgOBPgA2rkiIAOhPIG+AAIgOBPg");
	var mask_graphics_39 = new cjs.Graphics().p("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ABAAAAABQABAAAAAAQABAAAAAAIAAAAIAtAAQAEAAABgEIAAAAIAkjNIAAgBIAAAAIgBgEIAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIAAAAIguAAQgEAAAAAEIAAAAIglDNgABZgNQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAAAIAOhSQAAgEAFAAIAAAAICMAAIgfhgIAAgFIAAAAQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAIAAAAICnAAQAEAAABADIAAAAIAfBkIBzAAIBFhlQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAIAAAAICqAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIAAAAQABADgBADIAAAAIhABfICKAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIAAAAQABAAAAABQAAAAABABQAAAAAAABQAAABgBAAIAAAAIgPBSQgBAEgEAAIAAAAgABegXILoAAIANhIIiOAAQgDAAgBgDIAAAAIgBgBIAAAAIABgDIAAAAIBAhgIieAAIhFBlQgBABAAAAQAAAAgBABQgBAAAAAAQgBAAgBAAIAAAAIh5AAQgEAAgBgDIAAAAIgfhkIidAAIAgBhIAAABIAAAAIgBADIAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAgBAAIAAAAIiPAAIgNBIgABegXIANhIICPAAQABAAABAAQABAAAAAAQABgBAAAAQAAAAAAgBIAAAAIABgDIAAAAIAAgBIAAAAIgghhICdAAIAfBkQABADAEAAIAAAAIB5AAQABAAABAAQAAAAABAAQABgBAAAAQAAAAABgBIAAAAIBFhlICeAAIhABgIgBADIAAAAIABABIAAAAQABADADAAIAAAAICOAAIgNBIgEghlgBJQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIAAAAIgBgFIAAAAIAljNQAAgEAEAAIAAAAIAuAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIAAAAIABAEIAAAAIAAABIAAAAIgkDNQgBAEgEAAIAAAAgEghfgBTIAjAAIAjjDIgjAAgAqUi8QgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIAAAAIgBgEIAAAAIAEgYQABgEAEAAIAAAAICHAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABIAAAAIABAEIgEAYQAAADgFAAIAAAAgAqOjFIB9AAIACgOIh9AAgACPjgQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAIAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAAAIAOhQQABgFAEAAIAAAAIEUAAIgGhHIABgDQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAAAAICsAAQAEAAABAEIAAAAIAIBIIEBAAQABAAABABQAAAAABAAQAAAAABAAQAAABAAAAIAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAABIAAAAIgOBQQgBADgEAAIAAAAgACVjpILDAAIAMhHIkAAAQgEABgBgFIAAAAIgHhIIijAAIAGBHIgBAEIAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAAAIkVAAIgMBHgACVjpIAMhHIEVAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAIAAAAIABgEIAAAAIgGhHICjAAIAHBIQABAFAEgBIAAAAIEAAAIgMBHgAqFkRQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBgBIAAAAIgBgCIAAAAIAAgBIAAAAIAEgZQABgDAEAAIAAAAICHAAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABIAAAAIACACIAAAAIgBACIAAAAIgEAXQgBAFgEAAIAAAAgAp/kbIB9AAIACgOIh9AAgA2xkYQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIAAAAIgCgFIAAAAIAQhaQABgDAEAAIAAAAIHIAAQABAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIAAAAIgPBaQgBAEgEAAIAAAAgA2rkiIG+AAIAOhPIm+AAIgOBPgA2rkiIAOhPIG+AAIgOBPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_graphics_15,x:314.7184,y:78.4499}).wait(24).to({graphics:mask_graphics_39,x:314.7184,y:78.4499}).wait(1));

	// sb_linear
	this.instance = new lib.sb_linear("synched",0);
	this.instance.setTransform(-95.25,55.05,1.5781,1.5781,0,0,0,96,114);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({x:725.75,y:90.25},24,cjs.Ease.cubicOut).wait(1));

	// sb_sc2_tt
	this.instance_1 = new lib.sb_sc2tt();
	this.instance_1.setTransform(307.45,78.55,0.3573,0.3573,0,0,0,322.4,77.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:307.4,y:78.5,alpha:1},11,cjs.Ease.cubicOut).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,630,155);


(lib.an_sc2free = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_free
	this.instance = new lib.sb_sc2free("synched",0);
	this.instance.setTransform(108.2,22.4,1,1,0,0,0,108.2,22.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},15,cjs.Ease.cubicOut).to({startPosition:0},49).to({_off:true},1).wait(85));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,216.5,44.8);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACQH7QgMAAghgDQhZgJhHAGQgYADgLgBQgUgBgMgKQgRgNgHgoIgUh1QgJgzgIgeQgIgggMgZQgBgKgEgLQgNgigXgUQgbgYghABQgVAAgMALIgOAQIgQAUQgIAOACAQIAAAAQgFAPgCAQQgOAygDA2QgBAbAGAQIADAEQAAAXACARQACANAHAaIgEAFIgCACQgjgHgrgLIgfgIQgQgJgUgHQgTgHgqgLIjFg0QgMgIgSgGIgrgSQgMgLgGgNIgKgBIgBgCIgHgiQgJgygZhUQgNgqgHgSIgBgDIgBgEQgEgUgHgIQgHgJgLgEQgMgEgLADQgSAFgLATQgIAQgCAVIgDAsQgBAyAFAjIAFAeQgOgOgOgWIgOgXQgFgIgFgFIgBgJQAAgNADgJIAFgLIAAgKQABgJAFgNIABgDQADg8AKhjQAFgxALgYQASgnApgSIAegMQASgHALgHQAIgGAJgLIAQgTQAlgtBCgnQAcgRBcguQAwgXASgIQAmgPAggFQAMgBALAAIAMgCQAWgDApgBQCwgFBeABQCVABB3AKQBTAIAuASQASAHATALQAaALAgAUQBxBHBeBeIAtAtIAfAdIAHABQAZADAhAJIA5AQIA4APQAfAKAWALQAmAUAcAiQAKANAHANIAGADIAmAWIAOAIQAJADAFAEQALAJAEAOIADALQgaAYggAZIgFAFIgCAAIAAABQgNAKgLAEQgMAFgeACInLAaIgUgCIgogGIhLgMQhbgOgugLIhkgZQg4gPgngGIhygdQgIgBgDABQgHADABAJQABAFAFAIIAJANQAFAEACADIADAHQADAGAIAFQAPALANANQAJAOAVAMQAYAPA0AQQBJAWBYANQAGAJAKALQAfAeA4AsQBEA1AVASIAMALIADAEQAKAQgGAUIgCAGIgPAGIgeALQgbALgMANQgQAFgWANQgfASgQAEQgRAFgXAAIgEAAgAQBG/QgHgDgPgPQgagZghgPQgLgGgCgFQgCgFAFgHIAJgMQAFgHAEgRQAGgXANgdIAXgzQAJgVgHgJQgHgGgCgDQgGgKAIgKQAFgGANgHQAMgHAFgGIAFgJQADgFAFgBQADgBAFADQAIADAEADQAGAGAFALQAFARAAAfQABBdgCA+QgBAUABALIABABIAJAQQADAGABAFIAHAIQAFAHgDAFQgBAEgJADQgNAFgPACQgJACgHAAQgJAAgHgDg");
	mask.setTransform(109.7063,51.0246);

	// sb_linear
	this.instance = new lib.sb_linear("synched",0);
	this.instance.setTransform(-59.85,-12.4,1,1,0,0,0,96,114.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:295.9,y:118.15,startPosition:15},15).wait(1));

	// _Image__0
	this.instance_1 = new lib.car3();
	this.instance_1.setTransform(0,0,0.6355,0.6355);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220.5,120.8);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ABOI2IjvheQgvgSgXgGQgjgKg9gDQhKgGiTgDQiVgEhIgFIgpgCQgYAAgRAEQgmAJg4AtQgpAhgbAQIgBgGIgQhpQgIg8gBgtQgCg1AFhDIAJhPIAXgrQAVgmAMgPQASgUAmgbIBMg5QAUgOAMgNIAOgGQASgJAKgDIAagHQAPgFAIgHQAKgJAFgOQAEgNgCgOIgCgLQgBgGACgEQACgHALgGQASgKAZgJIAbgJIABAAIAEADQAPAKAQAAQAQAAAOgKQAOgJAGgPIAGgRIADgEIAjgUQBih1B8hYIAOgCQAQgLAbgIQBIgTBhgCQAYgCAngBIBTAAQAjABAgAEQBugEC5gCQCagBBFAGQAbADAdAEIAWAMQAXALApAMIATAGQAOASANAaIAnBSQAeA7AxAtIATASQAKALAFAKQAHARAAAhIACClQgGgIgGgGQgSgPgYADQgZADgNATIgBADQgMAJgIARQgIAQgGAeQgHAkgNBjIgQCAIgBALIgIAEQgfARg3AjQg6AlgbAQQhjA5hSADQAEgnABg2IAAhJQgBgwgHgrQgGgjgHgPQgKgZgUgNQgNgPgSgIQgUgJgXAHQgUAGgMAPIgHAFQgOAMgOAZQgqBIgYBkQgQBCgQB2IgEAgIhFAUQgZAJgUAEQgOgIgWgJg");
	var mask_graphics_23 = new cjs.Graphics().p("ABOI2IjvheQgvgSgXgGQgjgKg9gDQhKgGiTgDQiVgEhIgFIgpgCQgYAAgRAEQgmAJg4AtQgpAhgbAQIgBgGIgQhpQgIg8gBgtQgCg1AFhDIAJhPIAXgrQAVgmAMgPQASgUAmgbIBMg5QAUgOAMgNIAOgGQASgJAKgDIAagHQAPgFAIgHQAKgJAFgOQAEgNgCgOIgCgLQgBgGACgEQACgHALgGQASgKAZgJIAbgJIABAAIAEADQAPAKAQAAQAQAAAOgKQAOgJAGgPIAGgRIADgEIAjgUQBih1B8hYIAOgCQAQgLAbgIQBIgTBhgCQAYgCAngBIBTAAQAjABAgAEQBugEC5gCQCagBBFAGQAbADAdAEIAWAMQAXALApAMIATAGQAOASANAaIAnBSQAeA7AxAtIATASQAKALAFAKQAHARAAAhIACClQgGgIgGgGQgSgPgYADQgZADgNATIgBADQgMAJgIARQgIAQgGAeQgHAkgNBjIgQCAIgBALIgIAEQgfARg3AjQg6AlgbAQQhjA5hSADQAEgnABg2IAAhJQgBgwgHgrQgGgjgHgPQgKgZgUgNQgNgPgSgIQgUgJgXAHQgUAGgMAPIgHAFQgOAMgOAZQgqBIgYBkQgQBCgQB2IgEAgIhFAUQgZAJgUAEQgOgIgWgJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:117.3608,y:61.1058}).wait(23).to({graphics:mask_graphics_23,x:117.3608,y:61.1058}).wait(1));

	// sb_linear
	this.instance = new lib.sb_linear("synched",0);
	this.instance.setTransform(-59.85,-12.4,1,1,0,0,0,96,114.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:295.9,y:118.15,startPosition:15},23,cjs.Ease.cubicOut).wait(1));

	// _Image__2
	this.instance_1 = new lib.car2();
	this.instance_1.setTransform(0,0,0.6355,0.6355);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223.1,154.5);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjbH7QgZgBgUgFQgWgFgdgPIgwgZQgrgVgygOQAEgLAGgVQAOgwAVg/QAOgtANgVIASgfQAHgTgEgOIgGgOIgIgNIgGgTQgEgMgEgHQgNgWgcgIQgQgGgkgCIifgJQhagFhFgBQhEgBgkAMQgbAIgUAQQgXARgJAXQgLAaADAoQADAxAaA/QAPAkAhBGQgOABgSAMIgdATQgKAFgRAGIgcAKIgFADIgJgCIgLgDIADgVQAHgsABgTQABgUgDgeIgGgzQgGhKAThNIAFgZIABgBIAUgbIAVgiQANgSANgLQAKgKATgJIAggQQAkgSA6gkIAigVQAcgMATgDIAogFQAXgEAMgKQAMgKAEgPQAFgPgDgPQgBgHgDgKQAcgJAigPQAQgGAHAAQAGgBAKADQAKADAFAAQAQABAQgLQALgHAQgRQA/hAAwgmQA/gzBAgaIAsgQQAcgKAQgIIAFgCQBCAABoAEIDvAIQBLACAegDIA0gHQAjgFASgCQBBgFBQAMQBMANAzAUQAVAIAmASIACAHQAKAnAcArQARAaAoAuQAgAmAVAOIALAHIAhAuIADAEQAABPAkBHQAKAUACAJQABAJgBAOIgHBTQgLg7gKghQgIgcgNgNQgRgSgXABQgZAAgQASQgLAMgFAUIgHAmIgOA+IgGAjIgGAUIgKAjIgBAGIgNABIg4ACQghABgWAEQgrAGg6AXQhBAcgiANQggAMhQAXQhHAUgnAQQgGgEgEgHQAEhlgRhGQgIgngQgXQgPgYgZgOQgagOgaADQgNACgMAGIgDADIgSATIgVAUQgMAMgHAJQgMAPgPAfQgfBGgNBJIAAABIAAADQgJBDgOBGQgSABgdAFIiQAfIgHABIgNAAIgLAAgADEi3QABAGgBAHIATgOIgTABg");
	mask.setTransform(121.4,51.5733);

	// sb_linear
	this.instance = new lib.sb_linear("synched",0);
	this.instance.setTransform(-59.85,-12.4,1,1,0,0,0,96,114.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:295.9,y:118.15,startPosition:15},15).wait(1));

	// _Image__1
	this.instance_1 = new lib.car1();
	this.instance_1.setTransform(0,0,0.6355,0.6355);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,228.2,125.9);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(232.5,153.5,1,1,0,0,0,232.5,153.5);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(233,154,1,1,0,0,0,231,152);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.setTransform(232.5,153.5,1,1,0,0,0,232.5,153.5);

	this.instance_3 = new lib.ClipGroup_3();
	this.instance_3.setTransform(232.5,153.5,1,1,0,0,0,232.5,153.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,465,307), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AlzAFIAAgJILnAAIAAAJg");
	this.shape.setTransform(78.025,40.5);

	this.instance_4 = new lib.ClipGroup_0_1();
	this.instance_4.setTransform(78,40,1,1,0,0,0,75,38);

	this.instance_5 = new lib.ClipGroup_1_1();
	this.instance_5.setTransform(78,40.5,1,1,0,0,0,78,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,156,81), null);


(lib.sb_title = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(224.05,145.25,1,1,0,0,0,232.5,153.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-8.2,465,307);


(lib.an_title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_title
	this.instance = new lib.sb_title("synched",0);
	this.instance.setTransform(199.05,169.6,0.274,0.274,0,0,0,227.6,148.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:224.1,regY:145.2,scaleX:0.4248,scaleY:0.4248,x:197.55,y:157.9,alpha:0.2077},0).wait(1).to({scaleX:0.5617,scaleY:0.5617,x:197.1,y:148.05,alpha:0.3963},0).wait(1).to({scaleX:0.6752,scaleY:0.6752,x:196.65,y:139.95,alpha:0.5526},0).wait(1).to({scaleX:0.7637,scaleY:0.7637,x:196.35,y:133.6,alpha:0.6745},0).wait(1).to({scaleX:0.8308,scaleY:0.8308,x:196.1,y:128.75,alpha:0.7669},0).wait(1).to({scaleX:0.8812,scaleY:0.8812,x:196,y:125.25,alpha:0.8363},0).wait(1).to({scaleX:0.9189,scaleY:0.9189,x:195.85,y:122.5,alpha:0.8882},0).wait(1).to({scaleX:0.9469,scaleY:0.9469,x:195.75,y:120.55,alpha:0.9268},0).wait(1).to({scaleX:0.9673,scaleY:0.9673,x:195.7,y:119.05,alpha:0.955},0).wait(1).to({scaleX:0.9818,scaleY:0.9818,x:195.65,y:118,alpha:0.975},0).wait(1).to({scaleX:0.9916,scaleY:0.9916,x:195.6,y:117.3,alpha:0.9884},0).wait(1).to({scaleX:0.9974,scaleY:0.9974,x:195.55,y:116.9,alpha:0.9964},0).wait(1).to({regX:227.5,regY:148.5,scaleX:1,scaleY:1,x:199,y:120,alpha:1},0).wait(1).to({regX:224.1,regY:145.2,x:195.6,y:116.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:227.5,regY:148.5,x:199,y:120},0).to({scaleX:0.3146,scaleY:0.3146,x:198.8,y:119.65,alpha:0},8,cjs.Ease.cubicOut).wait(1).to({regX:224.1,regY:145.2,x:197.75,y:118.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:227.5,regY:148.5,x:198.8,y:119.65},0).to({_off:true},1).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-36.7,465,307);


(lib.sb_line = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(56.15,19.5,1,1,0,0,0,78,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-21,156,81);


(lib.sb_sc5subtitle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_line_copy
	this.instance = new lib.sb_line("synched",0);
	this.instance.setTransform(461.8,30.2,1.4658,1,0,0,0,58.7,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// sb_line
	this.instance_1 = new lib.sb_line("synched",0);
	this.instance_1.setTransform(42,31.2,1.4576,1,0,0,0,58.4,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// mo_sc5_subtitle
	this.instance_2 = new lib.mo_sc5subtitle();
	this.instance_2.setTransform(251.15,28,1,1,0,0,0,140.7,12);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.9,-12.3,647.3,82);


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

	// sb_sc5_subtitle
	this.instance = new lib.sb_sc5subtitle("synched",0);
	this.instance.setTransform(345.45,15,1,1,0,0,0,253.7,30);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:345.4,y:30,alpha:1},13,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.8,-27.3,647.3000000000001,97);


(lib.sb_subtitle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_line_copy
	this.instance = new lib.sb_line("synched",0);
	this.instance.setTransform(449.9,30.2,1,1,0,0,0,58.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// sb_line
	this.instance_1 = new lib.sb_line("synched",0);
	this.instance_1.setTransform(58.5,31.2,1,1,0,0,0,58.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// mo_subtitle
	this.instance_2 = new lib.mo_subtitle();
	this.instance_2.setTransform(251.15,28,1,1,0,0,0,140.7,12);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-12.3,547.4,82);


(lib.an_subtitle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_subtitle
	this.instance = new lib.sb_subtitle("synched",0);
	this.instance.setTransform(797.95,30,1,1,0,0,0,253.7,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:253.7},11,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-12.3,1091.6,82);


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

	// an_title_forsc5
	this.instance = new lib.an_title("synched",0,false);
	this.instance.setTransform(332.8,116.7,0.7582,0.7582,0,0,0,195.9,117.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(43).to({mode:"single",startPosition:43},0).wait(55).to({startPosition:43},0).to({_off:true},1).wait(52));

	// an_sc5_subtitle
	this.instance_1 = new lib.an_sc5subtitle("synched",0,false);
	this.instance_1.setTransform(615.1,232.1,1,1,0,0,0,621.4,28.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).wait(95).to({startPosition:13},0).to({_off:true},1).wait(52));

	// sb_sc5_group
	this.instance_2 = new lib.sb_sc5group("single",0);
	this.instance_2.setTransform(322.55,317.25,0.593,0.593,0,0,0,322.5,176.9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,x:322.5,alpha:1},18,cjs.Ease.cubicOut).to({mode:"synched",loop:false},12).to({startPosition:72},72).to({_off:true},1).wait(52));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,657.8,494.2);


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

	// an_sc3_icons
	this.instance = new lib.an_sc3icons("synched",0,false);
	this.instance.setTransform(343,176.05,1,1,0,0,0,343,148);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(122).to({_off:false},0).to({_off:true},67).wait(170));

	// an_sc3_ttt_video
	this.instance_1 = new lib.an_sc3tttvideo("synched",0,false);
	this.instance_1.setTransform(367.95,233.25,1,1,0,0,0,144.5,67.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(122).to({_off:false},0).to({_off:true},67).wait(170));

	// an_sc4_tt
	this.instance_2 = new lib.an_sc4tt("synched",0,false);
	this.instance_2.setTransform(351.95,259.7,1,1,0,0,0,315,77.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(189).to({_off:false},0).to({_off:true},67).wait(103));

	// an_sc4_more
	this.instance_3 = new lib.an_sc4more("synched",0,false);
	this.instance_3.setTransform(350.2,180.7,1,1,0,0,0,108.2,22.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(189).to({_off:false},0).to({_off:true},67).wait(103));

	// sc5
	this.instance_4 = new lib.sc5("synched",0,false);
	this.instance_4.setTransform(358,247.2,1,1,0,0,0,328.9,247.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(256).to({_off:false},0).wait(103));

	// an_title
	this.instance_5 = new lib.an_title("synched",0,false);
	this.instance_5.setTransform(361.95,156.75,1,1,0,0,0,196,117.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},85).wait(274));

	// an_subtitle
	this.instance_6 = new lib.an_subtitle("synched",0,false);
	this.instance_6.setTransform(626.7,303.3,1,1,0,0,0,525.8,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},63).wait(296));

	// an_sc2_tt
	this.instance_7 = new lib.an_sc2tt("synched",0,false);
	this.instance_7.setTransform(355.25,261.25,1,1,0,0,0,315,77.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(63).to({_off:false},0).to({_off:true},59).wait(237));

	// an_sc2_free
	this.instance_8 = new lib.an_sc2free("synched",0,false);
	this.instance_8.setTransform(356.5,181.65,1,1,0,0,0,108.2,22.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(57).to({_off:false},0).to({_off:true},65).wait(237));

	// sb_car2
	this.instance_9 = new lib.sb_car2("single",0);
	this.instance_9.setTransform(348.15,377.8,0.6182,0.6182,0,0,0,111.5,77.2);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1,scaleY:1,x:305.5,y:407.25,alpha:1},13,cjs.Ease.cubicOut).to({mode:"synched",loop:false},17).to({startPosition:0},108).to({mode:"single",startPosition:15},117).to({alpha:0,mode:"synched",startPosition:11,loop:false},11).to({_off:true},1).wait(92));

	// sb_car1
	this.instance_10 = new lib.sb_car1("single",0);
	this.instance_10.setTransform(217.3,368.35,0.6961,0.6961,0,0,0,114,62.9);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(3).to({_off:false},0).to({scaleX:1,scaleY:1,x:165,y:402.95,alpha:1},11,cjs.Ease.cubicOut).to({mode:"synched",loop:false},16).to({startPosition:0},108).to({mode:"single",startPosition:15},117).to({alpha:0,mode:"synched",startPosition:11,loop:false},11).to({_off:true},1).wait(92));

	// sb_car3
	this.instance_11 = new lib.sb_car3("single",0);
	this.instance_11.setTransform(437.5,342.95,0.6576,0.6576,0,0,0,62.6,39.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(3).to({_off:false},0).to({regX:62.4,regY:38.9,scaleX:1,scaleY:1,x:484.4,y:371.95,alpha:1},11,cjs.Ease.cubicOut).to({mode:"synched",loop:false},16).to({startPosition:0},108).to({mode:"single",startPosition:15},117).to({alpha:0,mode:"synched",startPosition:11,loop:false},11).to({_off:true},1).wait(92));

	// sb_logo
	this.instance_12 = new lib.sb_logo();
	this.instance_12.setTransform(167.3,102.6,1,1,0,0,0,74.7,62.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(63).to({_off:false},0).to({_off:true},193).wait(103));

	// bg
	this.instance_13 = new lib.sb_bg();
	this.instance_13.setTransform(351,250.05,1,1,0,0,0,561,467);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(359));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210,-216.9,1380.7,934);


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
	this.instance = new lib.wrap("synched",0);
	this.instance.setTransform(267.2,125,0.5,0.5,0,0,0,585.4,250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(718).to({mode:"single",startPosition:358},0).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("A4/1FMAx/AAAMAAAAqLMgx/AAAg");
	this.shape.setTransform(150,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A4/VGMAAAgqLMAx/AAAMAAAAqLg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(719));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(124.5,104.6,435.29999999999995,145.5);
// library properties:
lib.properties = {
	id: 'A3381F4342074B399993ED85806ADA88',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png", id:"Image"},
		{src:"images/Image_1.png", id:"Image_1"},
		{src:"images/Image_0.png", id:"Image_0"},
		{src:"images/Image_0_1.png", id:"Image_0_1"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/car1.png", id:"car1"},
		{src:"images/car2.png", id:"car2"},
		{src:"images/car3.png", id:"car3"},
		{src:"images/icondark.png", id:"icondark"},
		{src:"images/iconlive.png", id:"iconlive"},
		{src:"images/iconmusic.png", id:"iconmusic"},
		{src:"images/iconplay.png", id:"iconplay"},
		{src:"images/iconTV.png", id:"iconTV"},
		{src:"images/iconvideo.png", id:"iconvideo"},
		{src:"images/iconweb.png", id:"iconweb"},
		{src:"images/sc5frame.png", id:"sc5frame"},
		{src:"images/sc5total.png", id:"sc5total"},
		{src:"images/t_4w.png", id:"t_4w"},
		{src:"images/t_smart.png", id:"t_smart"}
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
an.compositions['A3381F4342074B399993ED85806ADA88'] = {
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