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



(lib.BG1 = function() {
	this.initialize(img.BG1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.bg_blur = function() {
	this.initialize(img.bg_blur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,320);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,219);


(lib.sc0_man = function() {
	this.initialize(img.sc0_man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,370);


(lib.sc2_pic1 = function() {
	this.initialize(img.sc2_pic1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,519,347);


(lib.sc2_pic2 = function() {
	this.initialize(img.sc2_pic2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,999,394);// helper functions:

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


(lib.sb_ttset = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AADBmIANhMIg8AAIADgUIA+AAIAHgrIgfAAQgKATgKAMQgHgGgJgEQAWgZARgxIATAEIgNAdIAZAAIAIgqIAUAAIgHAqIAyAAIgFAUIgxAAIgHArIA7AAIgEAUIg6AAIgOBMgAhdBlIAWh1QgLANgLAIQgDgLgFgJQAmggAdg2IASAGQgMAXgTAZIgaCUg");
	this.shape.setTransform(169.9104,10.5726,0.979,0.979);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAlBZQh5AFgIADIgBAAIABgBIgEgSQAGgBAKgGQAGgDASgOIg0AAIAEgRIApAAIALg/QgSALgUAKQgFgLgGgFQApgQAdgaIg3AAIADgRIBFAAQAHgIAIgNIAUAEIgMARIBkAAIgDARIg3AAQAXAbAgANQgKAHgGAJQgRgJgQgOIAAADIhXAAIgCAMIBXAAIgCAOIhYAAIgCALIBXAAIgCAOIhXAAIgCANICCAAIgEARIgyAAQAUAVALARIgUAKgAg9BNIBXgDIgLgOIAOgGIg5AAQgRANgQAKgAgcgrIBIAAIgQgUIgiAAQgLAMgLAIg");
	this.shape_1.setTransform(138.5099,10.5482,0.979,0.979);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhuBUQAlgKASgXQANgQAJgjIg5AAIAEgSIBWAAIAPhTIAVAAIgPBTIBaAAIgEASIg9AAIgNBJQgBAGACACQABABAGAAIAZAAQAGAAADgGQADgGAFgYQAFAFANAEQgHAcgHAJQgHAKgPAAIgeAAQgQAAgFgGQgFgGADgRIANhJIgkAAQgLApgPAVQgVAcgqAMQgDgLgHgHgAg5hUIAUgHQAPAfABAXIgVAIQgCgZgNgegAAzglQAWgbAOgdIAVAIQgZAmgQARg");
	this.shape_2.setTransform(105.9101,10.5237,0.979,0.979);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdBmIADgSIiOAAIACgPIAgAAIAKg4IgZAAIADgNIgKgGQAPgMAFgWIACgNIBQAAIgFAjIhEAAQgGAMgGAGICvAAIgDANIgaAAIgKA4IAfAAIgCAPIggAAIgDASgAg3BFIBZAAIACgKIhaAAgAgzAvIBZAAIACgLIhaAAgAgvAXIBaAAIABgKIhaAAgAghgdIASAAIACgNIgSAAgAhBgdIARAAIACgNIgQAAgAAzgNQgSAIgcAEQgBgIgEgGQATgCARgGQgKgIgGgMIABgBIgHAAIACgLIgHgJQAVgHACgOIACgKIA5AAIgDATQgBAGADAAIAVgBIgBANQgEABgIAAIgOAAQgKAAgCgFQgDgEACgKIABgFIgZAAQgDAQgRAJIA6AAIADgBIAKAFQgKARgUAMQAQAGASACQgIAGgEAIQgWgDgRgJgAA1geQALgFAJgJIgkAAQAFAIALAGgAhOg8IACgLIAhAAIACgJIgoAAIACgLIAoAAIABgLIATAAIgCALIAmAAIgCALIgmAAIgBAJIAgAAIgCALg");
	this.shape_3.setTransform(74.9745,10.5482,0.979,0.979);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah1BeQAUgZAKg3IgMACIAAgQIAPgCIANhIIASAAIALgbIASAEIgMAXIAZAAIgLBAIALgBIgCAPIgMABIgNBMQgCAMgIAEQgGADgWAAQABgGgDgKIATAAQAEAAAAgEIANhIIgcAEQgLA+gXAdQgGgHgHgCgAhDgEIAcgEIAJgxIgcAAgAgHBnIAHgnQgKAWgOAPQgJgIgGgCQAbgcAKg5IAGglIBdAAIgLBBIhMAAIgDAKIBSAAIgKA6IgTAAIACgGIgzAAIgBAHgAANBQIAzAAIAEgVIgzAAgAANASIA5AAIACgLIg4AAgAASgFIA4AAIACgLIg4AAgAhGAWIAMgEQAFATACAOIgOAFQAAgOgFgUgAg6gsIAMgFQAEANACASIgNAFQAAgKgFgVgAgKgyQAsgUAaggIAQAGIgFAHQATAXAcANQgIAKgEAIQgQgJgKgKIgCAMIgyAAIACgKQgRALgPAJIgIgSgAAkg5IApAAIgTgTQgKAKgMAJg");
	this.shape_4.setTransform(43.1579,10.4747,0.979,0.979);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfBUQAJgEACgLIABgHIgXAIQgDgGgFgGIg8ARIgBgTIAZgHIALg6IgUAAIADgSIAUAAIAIguIgVAAIADgSIA7AAIgDASIgUAAIgIAuIASAAIgEASIgRAAIgKA1IAUgFIgBAQQAegHAYgPIgdAAIAIguIBqAAIgIAuIgoAAQADAKAGAIQASgIAKgIIAMANIggAOQAMAMAUAGQgJAHgGAJQgpgOgKgvQgPAMgMAGIgEAXIAjgIIgDAQQgxALgEADQgBgKgEgEgAgCASIBEAAIADgRIhFAAgAgbgXIADgRICFAAIgDARgAgOgxIAJgwIB1AAIgJAwgABFhAIATAAIADgTIgTAAgAAlhAIASAAIADgTIgSAAgAAFhAIARAAIAEgTIgSAAg");
	this.shape_5.setTransform(11.586,10.8908,0.979,0.979);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgvAjQAPgFAIgMQAGgIAEgQIgZAAIABgHIBWAAIgBAHIgcAAIgGAjQgBAEAFAAIANAAQACAAACgDQACgEACgLQACACAEABQgDANgDAEQgDAFgGAAIgOAAQgHAAgCgDQgCgCABgGIAHgjIgSAAQgFASgHAKQgJANgRAGQgBgDgCgDgAgZghIABgHIBFAAIgCAHg");
	this.shape_6.setTransform(291.5608,14.2719,1.308,1.308);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAcQgEgKADgSQAHglAVAAQAXAAgHAlQgHAmgVAAQgKAAgFgKgAgNAAQgFAeANAAQANAAAGgeQAFgdgOAAQgNAAgFAdg");
	this.shape_7.setTransform(276.3615,13.9449,1.308,1.308);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAcQgEgKADgSQAHglAVAAQAXAAgHAlQgHAmgVAAQgKAAgFgKgAgNAAQgFAeANAAQANAAAGgeQAFgdgOAAQgNAAgFAdg");
	this.shape_8.setTransform(267.8592,13.9449,1.308,1.308);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAcQgEgKADgSQAHglAWAAQAKAAAFAKQAEAKgDARQgHAmgWAAQgKAAgFgKgAgNAAQgFAeAOAAQANAAAFgeQAFgdgOAAQgNAAgFAdg");
	this.shape_9.setTransform(259.3829,13.9449,1.308,1.308);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJAKQAKgEACgIIgBAAQgGAAABgGQABgHAGAAQAHAAgBALQgDANgOAHg");
	this.shape_10.setTransform(251.6827,19.1117,1.308,1.308);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVAcQgEgKADgSQAGglAWAAQAXAAgHAlQgHAmgVAAQgKAAgFgKgAgNAAQgFAeANAAQANAAAFgeQAGgdgOAAQgNAAgFAdg");
	this.shape_11.setTransform(246.0148,13.9449,1.308,1.308);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZAcIAFgGQAHAIAKAAQAOAAACgOQADgOgWAAIABgGQATAAADgOQACgLgMAAQgHAAgJAHIgEgGQAMgJAJAAQAJAAAGAFQAFAFgCAJQgCAMgOAFQAPADgDAPQgCAJgHAGQgIAGgJAAQgNAAgIgKg");
	this.shape_12.setTransform(237.1034,13.9449,1.308,1.308);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgqAtIAJg2IgKALIgCgHQASgQALgXIAHACQgHALgIALIgMBBgAgdAqIABgGIAKAAIAJg3IAQAAIADgJIgWAAIABgGIAYAAIADgKIAIABIgEAJIAaAAIgBAGIgcAAIgDAJIAYAAIgKA3IAJAAIgBAGgAgMAkIAhAAIACgIIghAAgAgJAWIAhAAIABgIIghAAgAgHAIIAhAAIABgIIghAAgAgFgEIAhAAIACgJIghAAg");
	this.shape_13.setTransform(222.2017,13.7814,1.308,1.308);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAJAjIAFgEQARAGAFAEIgHAEQgIgFgMgFgAgeAnQANgCALgGIAFAEQgMAGgOADgAgsAsIAKg2IgLAMIgDgGQAQgQAMgYIAHABIgLAUIgMBDgAgVAeIAGgjIA2AAIgHAjgAgOAaIAoAAIABgHIgnAAgAgMAPIAoAAIABgGIgoAAgAgKAFIAoAAIABgFIgoAAgAgQgJIADgTIAQAAIABgGIgSAAIABgGIA+AAIgBAGIgVAAIgBAGIASAAIgEATgAAYgOIALAAIABgKIgLAAgAAHgOIALAAIABgKIgLAAgAgJgOIAKAAIABgKIgJAAgAAJgcIALAAIABgGIgLAAg");
	this.shape_14.setTransform(208.0422,13.8468,1.308,1.308);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAHAsQgHAAAAgBQgCgCABgFIACgRIAGAAIgDARQAAABAAAAQABABAAAAQAAAAABABQABAAABAAIANAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBIACgIIAFACQgCAIgCADQgCACgFAAgAgxAqQAFgHAFgPIAFABQgEANgFAKgAgQAnQAGgHAFgNIAFACQgHAPgDAGgAgeAVIAFgCIAAAVIgGACgAAfAUIAGgCIAFATIgGADQgBgFgEgPgAgVATIAFgCIACARIgFACgAANAQIAFgDQAFAJACAGIgGADgAgrAJQADAAAGgGIAKgLIgOACIgBgGQACgBAEgFQAJgLAHgOIAHADQgKAQgKALIALgBIAKgOIAFADQgMASgPAOIAPgDIgBgHIAFgBQAEALAAAHIgHABIAAgFQgYAEgCACgAgEAMIAHgtIAOAAIAFgKIAHABIgGAJIAaAAIgIAtgAACAGIAiAAIAFghIggAAgAAJABQAGgCAIgHIgEgFIgJAIIgDgEIAKgHIgGgFIAFgDIAEAEIAGgGIAEABIgHAJIAEAEIAHgIIAFABQgEAGgGAEIAGAJIgFACIgEgHQgFAEgKAFg");
	this.shape_15.setTransform(193.0977,13.5525,1.308,1.308);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.7,0.4,297.2,20.8);


(lib.sb_ttsentra = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABvCWQgRgxgLgcIijAAQgUAwgIAdIgvAAQAehbAthiQAjhNAUgiIAzAAQASAdAgBGQAuBiAiBngAhBAhICFAAQgmhbgdg0QgcA3gmBYg");
	this.shape.setTransform(274.125,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABHCWQgmg3gzg3IhCAAIAABuIgsAAIAAksIB/AAQAnABAeARQApAZAAAzQAAAngXAYQgTAWggAHQAuAxAwBBgAhUABIBNAAQAcgBASgIQAZgPAAgfQABgegXgNQgSgNgdAAIhPAAg");
	this.shape_1.setTransform(222.4,15.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVCWIAAkEIhyAAIAAgoIEPAAIAAAoIhyAAIAAEEg");
	this.shape_2.setTransform(168.95,15.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABfCWIi2jxIAADxIgrAAIAAksIAyAAICoDgIAAjgIArAAIAAEsg");
	this.shape_3.setTransform(115.275,15.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhqCWIAAksIDUAAIAAAoIioAAIAABXICbAAIAAAmIibAAIAABfICoAAIAAAog");
	this.shape_4.setTransform(62.65,15.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah1CIIAAgsIA0AQQAeAIAaAAQAlAAAXgNQAWgMAAgVQAAgggtgMIhGgUQhHgSAAg8QAAgrAkgVQAhgTA1AAQAxAAAvAQIAAAqQg6gTgmABQghgBgUAKQgZALAAAXQAAAdAsAMIBMAWQBDARAAA8QAAAqghAYQgiAWg8AAQg2AAg2gUg");
	this.shape_5.setTransform(11.825,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,289.8,31.2);


(lib.sb_ttfree = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgBBlQAYgMAUgWQgIgVgFgYQgTA/geAmIgLgKQgHgHgGgDQAIgHAHgLIgUAHQAAgTgEgYIAWgHQAEASABAUQAegyAUhwIgWAAIAFgdIBaAAIAFgCIAVADQgHAYgRAxIAJAAIAGgBIATAHQgWA8gfAnQANASAWALQgOALgLAPQgUgMgOgSQgTASgYAOQgIgQgHgIgABCApQAQgXAMgbIgoAAQACAbAKAXgAAuglIAYAAIAQgtIgfAAgAiFBvQALgSALgqIAXAEQgKAogNAZIgWgJgAhRA2IAWgFQABAbgDAaIgYAGQADgXABgfgAhyAOQAKgCAPgOQAHgGAOgQQgaADgGADQgBgMgEgPQAIgDAKgMQAHgHAMgRQAOgVAKgTIAbAMQgWAjgZAcIATgCQAPgTAKgQIAWARQgfArgkAhIAcgEIgEgRIAWgIQAKAcAAAYIgYAKIgBgNQhEALgGAEIgGgcg");
	this.shape.setTransform(55.775,49.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiEBkQAhgRATgZQAPgTAIgdIg5AAIAGgdIA5AAIAIgwIgvAMQAAgMgGgOQBJgQAvgZIASAaQgUAJgfALIgLA5IBDAAIAShlIAgAAIgSBlIA2AAIgFAdIg2AAIgUBxIggAAIAUhxIhEAAQgIAkgSAaQgWAggoATQgGgOgMgJg");
	this.shape_1.setTransform(15.825,49.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiEBlQAsgHAcgLIgjAAIAOhPIgTAEQgDgLgIgNQAsgFAVgNIgrAAQAIgWAIgaIAzAAIACgLIg9AAIADgTIA9AAIACgLIAbAAIgCALIAeAAIACgLIAeAAIgCALIA4AAIgIAwIg4AAIgCAMIBJAAIgCAIQgGAZgHAFQgFAGgLABIgEAAIgRBaIgcAAQAhAMAUAKIgaATQgegRgpgOIAMgKIhAAAIASAJQghATg3ANQgIgNgLgKgAg9BBIByAAIABgLIhxAAgAg3AmIBwAAIADgLIhyAAgAgzAKIBxAAIACgKIhxAAgABNgRIgCgJIAOABQAFAAACgCQACgCAAgFIgqAAIgDARIAYAAgAgYgRIAwAAIACgRIgjAAQgHAKgIAHgAAAg0IAdAAIADgMIgeAAgAg3g0IAaAAIADgMIgZAAgABBhSIAbAAIADgLIgdAAgAAGhSIAdAAIABgLIgcAAg");
	this.shape_2.setTransform(62.55,12.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah8BhQBLgSAcgtIhCAAIALg7IgKAHQgHgPgLgJQA3ggAigxIAfAHIgJAMIA1AAIAFgCIAUAPQgPATgQARIBHAAIgQBZIg7AAIgIAxQgBAGABACQACACAIgBIAcAAQAHABADgHQADgFAFgXQAJAIARAFQgHAdgKAKQgKAKgTAAIgkAAQgXABgHgJQgHgHAEgWIAIgxIgEAAQgQAfgbAVQggAZgxANQgDgNgKgOgAAaAFIA3AAIAGggIgzAAQgEAQgGAQgAgyAFIArAAQAFgLAFgVIgvAAgAgmg3IA3AAQAJgKALgOIgzAAIgYAYg");
	this.shape_3.setTransform(21.825,12.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AmMAGIAAgKIMZAAIAAAKg");
	this.shape_4.setTransform(39.7,31.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},37).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},37).to({state:[]},1).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79.4,61.9);


(lib.sb_ttall = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAPAiIgPgnIgPAnIgKAAQgMgfgHgkIAKAAQAGAaAJAcIAQgrIAHAAQAGAVAKAWQAJgbAGgbIAKAAQgIAigLAhg");
	this.shape.setTransform(278.675,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAiIAAhDIAvAAIAAAJIgmAAIAAATIAjAAIAAAIIgjAAIAAAWIAmAAIAAAJg");
	this.shape_1.setTransform(230.3,3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVAiIgng1IAAA1IgKAAIAAhDIALAAIAlAyIAAgyIAJAAIAABDg");
	this.shape_2.setTransform(182.45,3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAiIAAhDIAJAAIAAA6IAmAAIAAAJg");
	this.shape_3.setTransform(97.7,3.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAiIAAhDIAJAAIAAA6IAmAAIAAAJg");
	this.shape_4.setTransform(51.075,3.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZAiIgGgRIgkAAIgHARIgKAAQAOgqAPgZIALAAIALAWQAKAVAIAYgAgOAIIAdAAQgFgOgKgSQgEAKgKAWg");
	this.shape_5.setTransform(3.525,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,283.2,6.8);


(lib.sb_bgset = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#571D3A").s().p("A7PClIBvlJMA0wAAAIhyFJg");
	this.shape.setTransform(174.4309,16.5303,1.0003,1.0003);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,348.9,33.1);


(lib.mo_tthappy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AB1DUIATgRQBZAeA2AeIgZASQgvgdhagggAh+D9QAogLAngPQAogRAVgQIAVAPQgYATgoARQgnARgpALQgLgOgGgGgAjBEQIAAlsQgjA+ghAnQgHgNgLgOQApguAjhEQAjhDAYhJIAbAGQgTA6gdA/IAAGhgAhQC4IAAjWIFEAAIAADWgAg1CiIENAAIAAgrIkNAAgAg1BhIENAAIAAgqIkNAAgAg1AgIENAAIAAgoIkNAAgAhfhAIAAhxIBpAAIAAgqIh4AAIAAgZIF8AAIAAAZIh/AAIAAAqIBtAAIAABxgACPhXIBSAAIAAhEIhSAAgAAkhXIBRAAIAAhEIhRAAgAhEhXIBOAAIAAhEIhOAAgAAkixIBRAAIAAgqIhRAAg");
	this.shape.setTransform(203.9,29.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjxEIQAegpAchJIAZAGQgcBNgdAqgACjCdIAagJQAmA/AWAzIgcALQgVg0glhAgAAnChIAagGQANAaAMAfQALAeAEAVIgbAIQgOg6gZg0gAhUCjIAbgCQAMA9ABAsIgbAFQgCg7gLgxgAkDB1IAAgbIBiAAIAAh2IhMAAIAAgbIBMAAIAAhMIAaAAIAABMIBLAAIAAhMIAaAAIAABMIBSAAIAAhMIAaAAIAABMIBPAAIAAhMIAbAAIAABMIBKAAIAAAbIhKAAIAAB2IBVAAIAAAbgABKBaIBPAAIAAh2IhPAAgAgiBaIBSAAIAAh2IhSAAgAiHBaIBLAAIAAh2IhLAAgAkIhzQAngdAhgqQAjgqAWguIAaAHQgTAngUAdIGJAAIAAAbImdAAQgnAwglAgQgIgLgMgMg");
	this.shape_1.setTransform(144.125,29.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbEYIAAiqIiuAAIg6g6IDoAAIAAgdIBFAAIAAAdIDjAAIAAA6IjjAAIAACqgACcDZQgpgcgrgYIApgsQApAVAsAbQAvAdAZAUIgsAyQgXgUgvgfgAkTDOQAygKAugVQAvgWAagZIA5AWQgfAmgwAfQgwAfg1AOQgVgjgZgXgADhANQg+AHgYAEQgUADgJAEQgHgcgLgZQAQgEAXgbQAKgKAagjQgxAGgLAHQgHgcgMgZQALgDAOgVQAgg1AQg1IA4AQQgUAzgkA3IAngEQAQgaAJgVIAzAdQgxBQg4A9IAtgEIgIglIAqgLQAPAwAKA2IgvANgAiAAFQhhAOgRAHQgKgggIgSQAOgDAYgdQANgOAVgeQgqAGgKAGQgFgWgNgeQALgCANgVQAJgNANgbQARgiAIgeIA2ATQgWA2ghAwIAfgDQATghAIgSIAxAcQgoBGg+BGIAvgFQgDgQgFgXIAsgKQAOAyAHA3IgvALgAhMAKIAAjpIAvAAQAJggABgYIA/ALIgTAtIA/AAIAABVIAACUgAgsgpIBHAAIAAgpIgrAAgAgQiDIArAAIAYgoIhDAAgABYiKIAAAAg");
	this.shape_2.setTransform(83.525,27.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiODfIBZABQAJgBAEgCQADgCAAgHIAAgnIjiAAIAAg9IDiAAIAAgZIAAAAIAAAAQAlgJAkgNIjyAAIAAg4IFiAAIAPgDIAsAoQhLAohZAaIDdAAIg7A9IipAAIAAAqQAAAagIANQgJANgUAGQgSAGggABIhDABQgJgfgPgbgAi7gOIAAiCIF7AAIAACCgAh1g+IDrAAIAAgiIjrAAgAi1isIhKg7IDYAAQgGgVgGgPIBHgNQAJASAKAfIDYAAIAAA7g");
	this.shape_3.setTransform(26.425,28.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_tthappy, new cjs.Rectangle(0,0,231.9,56.9), null);


(lib.mo_bgsentra = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["rgba(32,42,111,0)","rgba(123,36,118,0.698)","#CC5D2E"],[0,0.255,1],-232.5,0,215.2,0).s().p("EgkVADqICwnUMBF7AAAIivHUg");
	this.shape.setTransform(232.575,23.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_bgsentra, new cjs.Rectangle(0,0,465.2,46.9), null);


(lib.mo_bghappy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["rgba(32,42,111,0)","rgba(123,36,118,0.8)","#512678"],[0,0.255,1],-228.4,0,309.1,0).s().p("A87F8IABgDImxAAIEsr0MBCrAAAIAAL3g");
	this.shape.setTransform(228.375,37.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_bghappy, new cjs.Rectangle(0,0,456.8,76), null);


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

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDB3IB2h3Ih2h3IAJgIIB+B/Ih+CAg");
	this.shape.setTransform(6.8,12.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhDB3IB3h3Ih3h3IAJgIIB+B/Ih+CAg");
	this.shape_1.setTransform(7.8,12.775);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhDB3IB2h3Ih2h3IAIgIIB/B/Ih/CAg");
	this.shape_2.setTransform(8.3,12.775);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhDB3IB3h3Ih3h3IAIgIIB/B/Ih/CAg");
	this.shape_3.setTransform(9.3,12.775);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.831)").s().p("AhDB3IB2h3Ih2h3IAJgIIB+B/Ih+CAg");
	this.shape_4.setTransform(14.3,12.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.667)").s().p("AhDB3IB2h3Ih2h3IAJgIIB+B/Ih+CAg");
	this.shape_5.setTransform(14.3,12.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.502)").s().p("AhDB3IB2h3Ih2h3IAJgIIB+B/Ih+CAg");
	this.shape_6.setTransform(14.3,12.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.333)").s().p("AhDB3IB2h3Ih2h3IAJgIIB+B/Ih+CAg");
	this.shape_7.setTransform(14.3,12.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.169)").s().p("AhDB3IB2h3Ih2h3IAJgIIB+B/Ih+CAg");
	this.shape_8.setTransform(14.3,12.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0)").s().p("AhDB3IB2h3Ih2h3IAJgIIB+B/Ih+CAg");
	this.shape_9.setTransform(14.3,12.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0)").s().p("AhDB3IB2h3Ih2h3IAIgIIB/B/Ih/CAg");
	this.shape_10.setTransform(10.55,12.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.2)").s().p("AhDB3IB3h3Ih3h3IAIgIIB/B/Ih/CAg");
	this.shape_11.setTransform(6.8,12.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.4)").s().p("AhDB3IB3h3Ih3h3IAIgIIB/B/Ih/CAg");
	this.shape_12.setTransform(6.8,12.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.6)").s().p("AhDB3IB3h3Ih3h3IAIgIIB/B/Ih/CAg");
	this.shape_13.setTransform(6.8,12.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.8)").s().p("AhDB3IB3h3Ih3h3IAIgIIB/B/Ih/CAg");
	this.shape_14.setTransform(6.8,12.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9,p:{x:14.3}}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9,p:{x:6.8}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({x:7.3},0).to({_off:true},1).wait(2).to({_off:false,x:8.8},0).to({_off:true},1).wait(1).to({_off:false,x:9.8},0).to({_off:true},1).wait(1).to({_off:false,x:10.8},0).to({_off:true},1).wait(4).to({_off:false,x:13.3},0).to({_off:true},1).wait(1).to({_off:false,x:14.3},0).to({_off:true},1).wait(12).to({_off:false,x:6.8},0).to({_off:true},1).wait(2).to({_off:false,x:8.2},0).to({_off:true},1).wait(6).to({_off:false,x:11.5},0).to({_off:true},1).wait(4).to({_off:false,x:13.85},0).wait(1).to({x:14.3},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false,x:12.3},0).to({_off:true},1).wait(20).to({_off:false,x:8.7},0).wait(1).to({x:9.15},0).wait(1).to({x:9.6},0).to({_off:true},1).wait(4).to({_off:false,x:11.95},0).to({_off:true},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false,x:11.8},0).to({_off:true},1).wait(1).to({_off:false,x:12.8},0).to({_off:true},1).wait(17).to({_off:false,x:7.75},0).to({_off:true},1).wait(4).to({_off:false,x:10.1},0).wait(1).to({x:10.55},0).wait(1).to({x:11},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(5).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:10.3},0).to({_off:true},1).wait(1).to({_off:false,x:11.3},0).to({_off:true},1).wait(4).to({_off:false,x:13.8},0).to({_off:true},1).wait(14).to({_off:false,x:7.25},0).to({_off:true},1).wait(10).to({_off:false,x:12.45},0).wait(1).to({x:12.9},0).wait(1).to({x:13.35},0).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.1,25.6);


(lib.mo_sc4btn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],248.3,0,-135.2,0).s().p("A99EdIDRo4MA4qAAAIjSI4g");
	this.shape.setTransform(200.5,37.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc4btn, new cjs.Rectangle(8.7,8.7,383.6,56.89999999999999), null);


(lib.mo_sc47060 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ah7BzQgcgpANhJQANhJApgpQArgqBDAAQBFAAAdAqQAcApgNBJQgNBJgsApQgtAphCAAQhBAAgdgpgAgjhGQgXAagIAuQgJAwAPAYQAOAWAcAAQAdAAAWgWQAZgYAIgwQAJgugPgaQgPgageAAQgdAAgVAag");
	this.shape.setTransform(147.8275,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhuB9QgggiAMhDQAOhPA9gwQBGg3B4AEIgMBAQgygEgdAFQgsAIggAeIARgHQATgHAYAAQA3AAAaAfQAZAegJAwQgIAzgoAeQgoAfg6AAQg8AAgdgfgAgmAFQgSAOgFAZQgEAZAMAOQAMAOAbAAQAdAAASgRQAQgPAEgWQAEgWgLgNQgMgQgdAAQgaAAgRANg");
	this.shape_1.setTransform(114.2382,15.6366);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah7BzQgcgpANhJQANhJApgpQArgqBDAAQBFAAAdAqQAcApgNBJQgNBIgsAqQgtAphCAAQhBAAgdgpgAgjhGQgXAagIAuQgJAwAPAYQAOAWAcAAQAdAAAWgWQAZgYAIgwQAJgugPgaQgPgageAAQgdAAgVAag");
	this.shape_2.setTransform(43.9275,15.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiHCXQAshIA8hPQAxhBAXgYIiaAAIALg9IDtAAIgIAwQg1A+g2BIQgzBHgaAwg");
	this.shape_3.setTransform(13.55,15.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFBrQgHgGgFgCIAEgEIgXAMQgGgRgOgVIAZgNQAPAWAFANQAWgkAMhGIARhcIBcAAIghC9QgEAVgNAHQgKAFgeAAQgBgPgDgNIAaAAQAFAAABgFIAJgyIgmAAQgPA3gXAdQgDgEgFgFgAAvAGIAlAAIAFgeIglAAgAA6gzIAkAAIAFgdIglAAgAiDBiQAYgQAPgYIAbAIQgUAegaAUQgIgJgMgJgAh6A4IAEgaIAXAAIAQhcIgTAAIAFgaIATAAIAFgbIAaAAIgEAbIAfAAIAFgbIAaAAIgFAbIARAAIgEAaIgRAAIgQBcIAPAAIgFAagAhEAeIAfAAIADgRIgfAAgAg9gJIAfAAIADgQIgfAAgAg2gwIAfAAIADgOIggAAg");
	this.shape_4.setTransform(185.65,20.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAiBiIgNADIgBgNIhjAHIACgZIAugCIAEgTIg5AAIgMBEIgcAAIAMhEIgKAAIAEgYIAKAAIABgHIAdAAIgCAHIA5AAIACgLIhGAAIAPhPICoAAIgOBPIhIAAIgBALIBZAAIgMBCQgDARgLAFQgJAFgXAAQAAgKgCgKgAAtBeIAEAAQABgBABAAQAAAAABAAQAAgBAAAAQABgBAAgBIAHgpIgZAAQAJAXABAWgAgCBCIASAAIgEgMIAWgFIgiAAgAAKgEIApAAIACgLIgpAAgAg6gEIAoAAIACgLIgoAAgAAPghIApAAIACgNIgpAAgAg1ghIAoAAIADgNIgpAAgAAkhEIACgLIgZAAIAFgZIAZAAIACgMIAdAAIgCAMIA1AAIgEAZIg1AAIgCALgAgzhEIACgLIg1AAIAFgZIA0AAIACgMIAdAAIgCAMIAaAAIgFAZIgZAAIgCALg");
	this.shape_5.setTransform(81.975,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc47060, new cjs.Rectangle(0,0,198.9,31.7), null);


(lib.mo_sc42888 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F1E655").s().p("AiDA8QAEgWASgUQARgSAWgFQgmgYAHgmQAHgsAmgWQAjgVA0gBQA1ABAbAUQAeAXgIAsQgHAmguAYQAUAFALASQALAUgEAWQgRBgh8AAQh9AAARhggAgrAhQgNAKgCAQQgEARANALQANALAXAAQAVAAARgLQARgLAEgRQACgQgJgKQgLgOgcAAQgbAAgQAOgAgOhZQgMAKgDAOQgDAOAKALQALALATAAQAVAAAPgLQAOgLACgOQADgNgKgLQgKgKgWgBQgVABgOAKg");
	this.shape.setTransform(237.9493,15.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1E655").s().p("AiDA8QAEgWASgUQARgSAVgFQglgZAHglQAHgsAmgWQAigVA0gBQA1ABAcAUQAdAXgHAsQgHAmguAYQAUAFAKASQALAUgDAWQgSBgh7AAQh9AAARhggAgrAhQgNAKgDAQQgDARANALQANALAXAAQAWAAAQgLQARgLADgRQADgQgJgKQgLgOgcAAQgbAAgQAOgAgOhZQgNALgCANQgDAOAKALQALALATAAQAVAAAPgLQANgLADgOQACgOgJgKQgLgKgVgBQgVABgOAKg");
	this.shape_1.setTransform(207.4743,15.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1E655").s().p("AiDA8QAEgWASgUQARgSAWgFQgmgYAHgmQAHgsAmgWQAjgVA0gBQA1ABAbAUQAeAXgIAsQgHAmguAYQAUAFALASQALAUgEAWQgRBgh8AAQh9AAARhggAgrAhQgNAKgCAQQgEARANALQANALAXAAQAWAAAQgLQARgLADgRQADgQgJgKQgLgOgcAAQgbAAgQAOgAgOhZQgMAKgDAOQgDAOAKALQALALATAAQAVAAAPgLQANgLADgOQADgNgKgLQgKgKgWgBQgVABgOAKg");
	this.shape_2.setTransform(176.9836,15.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1E655").s().p("Ag9BCIAxiDIBKAAIg+CDg");
	this.shape_3.setTransform(153.35,30);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F1E655").s().p("AiJCYIALg+QBbguArgfQAygiAFgbQAHgrg+AAQgoAAg1ANIALg6QA1gPA/AAQAvAAAaAXQAeAbgJAzQgHAogsAkQgkAfhGAjIB+AAIgKA8g");
	this.shape_4.setTransform(136.0039,15.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhwBMQAigNARgWQAMgRAIghIgzAAIAFgbIDIAAIgEAbIg9AAIgLBEQgBAHABABQABACAFAAIAVAAQAFAAAEgHQACgGAGgZQAHAGAPAFQgHAfgJAKQgIALgSAAIgbAAQgTAAgEgHQgGgIAEgUIAMhEIghAAQgLAogQAWQgUAegpAOQgEgNgIgIgAg9hHIAEgaICgAAIgEAag");
	this.shape_5.setTransform(266.95,20.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRBOIAqABQAHAAACgHIAShmIhVAAIAEgbIBVAAIAJguIAcAAIgJAuIAZAAIgEAbIgZAAIgSBmQgCANgFAHQgEAFgJAEQgMAEgpAAQgBgPgFgMgAhiBoIAUhwIgTARQgFgOgGgNQAoghAdg1IAZAJQgNAWgRAXIgbCagAgcgCIAagLQAQAkAFAPIgbANQgGgVgOggg");
	this.shape_6.setTransform(107.525,19.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhrBRQAagUAOggQAKgWAGggIANhKICSAAIgeClQgEAWgPAGQgNAFglAAQgBgOgGgOIAnABQAJAAAAgHIAGggIhgAAQgRArghAYQgGgLgLgIgAgfAHIBbAAIAFgbIhZAAgAgUguIBaAAIAFgbIhaAAg");
	this.shape_7.setTransform(81.2,20.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhlBqIAUhyQgKAKgIAHQgDgQgGgLQAngiAbgzIAYAIQgPAagPAVIgbCagAAlADIgsAAIgIAwIAlgIQgDAMgBAKQg5APgIAFQgBgOgFgHQAMgEACgMIAWiAQBGgKAogPIAQAUQgPAGgYAFQgEAZgDAdIAoAAIgFAXIglAAQgCAgACATQACAUAFAAQAFAAAGgcQAGAJAKAEQgPAtgSAAQggAAAHhlgAAEg+IgGAqIAoAAIAGgxIgoAHgAgcBlIAEgWIA7AAIgDAWg");
	this.shape_8.setTransform(58.65,19.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPBqIAIgwIhlAAIAEgaIAkAAIAKg7IBBAAIAFgbIgvAAQgTAZgTARQgNgOgHgEQAjgaAZgxIAaAHQgEAJgGAJIB+AAIgEAaIhBAAIgFAbIA8AAIgFAZIg7AAIgGAiIBNAAIgFAaIhNAAIgIAwgAgpAgIAnAAIAFgiIgmAAg");
	this.shape_9.setTransform(33.675,19.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAXBrIACgLIhmAAIgCALIgbAAIAZiNIA8AAIAGgPIhVAAIAEgYIA0AAIgNgWIAagKQALAMAGAOIgLAGIAzAAQAOgRAJgPIAeAIIgXAYIAzAAIgFAYIhVAAIgJAPIBEAAIgZCNgAhJBJIBmAAIADgQIhmAAgAhDAlIBmAAIADgPIhmAAgAg8ABIBlAAIADgNIhmAAg");
	this.shape_10.setTransform(10.675,19.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc42888, new cjs.Rectangle(0,0,278.3,36.6), null);


(lib.mo_sc472 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Aw8AHIAAgNMAh5AAAIAAANg");
	this.shape.setTransform(108.5,38.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aw8AHIAAgNMAh5AAAIAAANg");
	this.shape_1.setTransform(108.5,0.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhtB5IAJgxQBJglAhgYQApgcADgVQAHgjgyAAQgfAAgrALIAIguQArgMAyAAQAlAAAVASQAYAWgIAoQgFAhgjAcQgdAZg3AbIBkAAIgIAwg");
	this.shape_2.setTransform(137.8393,18.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhrB3QAjg4Avg/QAng0ATgTIh6AAIAIgvIC8AAIgGAmQgqAwgrA6QgoA4gVAlg");
	this.shape_3.setTransform(106.45,18.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhlBSQAPgXAMg9IAUABIgEAYQABAOAHAJIAKg7IgnAAIAEgUIAiAAIADgTIgdAAIADgUIAdAAIAEgTIAVAAIgCATIAbAAIgDAUIgcAAIgEATIAiAAIgFAUIgcAAIgDATIAbAAIgFAUIgaAAIgFAhQAMADAYAAQBCAAARgBQgIALgEANIhMAAQgcAAgPgGQgRgGgIgPQgJAWgGAMgAAgAyQgRABgEgHQgFgGADgSIAShmIBLAAIgNBJIg0AAIgFAdQgBAHABABQABACAGAAIAXAAQAGAAABgEQADgFADgNQAHAGAMADQgFAUgIAGQgGAIgOgBgAApgdIAdAAIAGggIgeAAg");
	this.shape_4.setTransform(206.8,18.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAaBMIgKACIgBgJIhMAFIACgTIAjgCIADgPIgsAAIgJA1IgWAAIAJg1IgHAAIADgSIAHAAIABgGIAXAAIgBAGIArAAIACgJIg2AAIALg9ICCAAIgLA9Ig3AAIgBAJIBFAAIgJAzQgDANgIAEQgGADgTAAIgCgPgAAjBJIADAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBIAGggIgUAAQAIASAAARgAgBAzIANAAIgDgJIARgEIgaAAgAAIgDIAgAAIABgJIggAAgAgtgDIAfAAIACgJIggAAgAAMgaIAgAAIABgJIggAAgAgpgaIAgAAIABgJIgfAAgAAcg0IACgJIgUAAIAEgTIATAAIACgKIAXAAIgCAKIApAAIgDATIgqAAIgBAJgAgog0IACgJIgpAAIAEgTIAoAAIACgKIAXAAIgCAKIATAAIgDATIgTAAIgCAJg");
	this.shape_5.setTransform(177.625,18.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAkBcIAQhgIgSAAIAAADQgMBBgXAcQgHgLgIgDQAJgMADgHIgPAIIgKgcIAQgJQAHAMADAOQAKgWAFgjIANhFQAogIAWgJIAPARQgWAIglAGIgEAfIA6AAIgEAVIgSAAIgRBggAhBBbIAMhBIglAAIAEgUIAkAAIACgNIglAAIADgTIAUAAQgBgJgCgMIARgDIgbAAIAEgTIAhAAIgDgQIAZgGIAEAWIAbAAIgDATIgYAAIAPACIgLAWIATAAIgEATIggAAIgDANIAeAAIgDAUIgeAAIgLBBgAgqgfIgQAFIAcAAIAOgYIgeAAQAEAJAAAKgAhlBDQAOgRAKgSIARAGQgOAYgNAPQgFgFgJgFg");
	this.shape_6.setTransform(71.2,18.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAgA5IANgKIgMAAQgJARgPAJQgQAMgdAFQgCgKgHgIQApgGANgTIgqAAIADgTIANAAIAKgzIgBAAQgFgJgEgFIgBAFIgRAAIgFAcIASgFIgBATIgUAHIgJAuQgDARgIAEQgIAFgTAAQABgKgDgMIAPAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAgBIAHgnIgSAFIgCgWIAYgGIAGghIgUAAIAEgWIAUAAIAHglIAWAAIgHAlIARAAIgCAOQAagVARgdIAUAEIgHALIAZAAIADgBIAMAJQgIALgLANIAgAAIgNBHIAMAAIgDATIgmAAQAaAWAIAIIgRAOQgLgNgZgVgAAtANIgFAPIAVAAIAEgXIgIAIQgIgJgNgHQgJAJgMAIQgDgEgHgFIgEAXIARAAIAFgPgAAGABQAQgKAMgQIgXAAgAAvgQQAOAJAFAFIAEgXIgRAAgAAOgrIAZAAIALgOIgXAAIgNAOg");
	this.shape_7.setTransform(40.575,18.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdBbIABgFIhlAAIAAAFIgXAAIAKg4QAlgFATgFIgbAAIAAADIgVAAIAHgmIgJAGQgEgKgIgEQAZgQAQgYIAUAEIgHAJIAhAAIgBgJIAUgEQACAFACAIIA5AAIgDAOIg4AAIgBAHIAvAAIgCALIgvAAIgBAHIAvAAIgCAKIgvAAIgBAHIBAAAIgDAOIhfAAIALALQgUAGgfAEIgBAFIAtAAIgCANIgtAAIgCAIIBkAAIABgIIgtAAIADgMIAsAAIACgHIguAAIACgOIBFAAIgKA8gAg1ALIArAAIABgHIgqAAgAgxgGIArAAIABgHIgrAAgAgugYIArAAIAAgHIgqAAgAASg2IAGgkIAXAAIgCAJIAyAAIgDASIgyAAIgBAJgAghg5IABgGIgxAAIAEgSIAwAAIACgJIAXAAIgGAhg");
	this.shape_8.setTransform(11.6,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc472, new cjs.Rectangle(0,0,217,39), null);


(lib.sb_sc3tech = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAfBCQgYATgjAMQgGgLgDgEQAggIAZgTQgVgXgNgiIgHAAIAAgPIAtAAIAAgfIgxAAIAAgPIAxAAIAAghIAPAAIAAAhIAzAAIAAAPIgzAAIAAAfIAiAAIADAAIAKAEQgMApgfAcQAXATAgAIQgGAGgFAIQghgKgXgVgAAfAuQAXgVAMgbIhCAAQAKAZAVAXgAhYBgQAAgEgFgLQARABAFgBQAEAAAAgDIAAg3IgZAGIgFgPQANgCARgFIAAgtIgbAAIAAgQIAbAAIAAgqIAQAAIAAAqIAXAAIAAAQIgXAAIAAAoIAXgFIACANIgZAHIAAA9QAAAMgIAEQgFACgPAAIgJAAg");
	this.shape.setTransform(162.025,9.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA4BhIAAg1IhEALIgDgPIBHgLIAAh9IAPAAIAAB6IAZgEIACAPIgbAEIAAA4gAg6BhIAAheQgQAkgQATQAAgDgIgLQAYgaANgoIghAAIAAgPIAkAAIAAggIgeAFQAAgEgEgIQAugHAVgKIAJANQgNAFgOADIAAAjIAfAAIAAAPIgfAAIAAAEIAdAkIgKAMIgTgfIAABigAgGgRIAJgJQAZAPANAOIgKAKQgOgQgXgOgAABhIIAKgJQAYAPALAOIgLAKQgKgNgYgRg");
	this.shape_1.setTransform(140.2,9.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhYBbIAAgOIBQAAIAAgkIg7AAIAAgOIA7AAIAAgfIgyAAIAAgOIB1AAIAAAOIg0AAIAAAfIA8AAIAAAOIg8AAIAAAkIBTAAIAAAOgAhhgQQAUgJAWgQQAWgRAPgRIgmAAIAAgPIBAAAQAPAWAZAUQAYATAaALQgGAFgFAJQg1gagigtQgQAUgYAUQgYAUgXAMQgCgFgIgIg");
	this.shape_2.setTransform(118.575,9.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhZBSQA4gHAcgUQgXgKgkgLQALgQAJgOIguAAIAAgOIA2AAQALgVAHgQIARADQgGAQgKASIAzAAIAEgVIASABIgEAUIAnAAIAAAOIgrAAQgJAdgPARQApASAYAPIgMAOQgYgQgqgSQgdAZg9AKQgCgHgIgJgAgnAaQAVAHAZALQAPgRAIgXIg3AAIgOAWgABFgcIAAgcIiKAAIAAAcIgQAAIAAgrIBPAAIgKgVIAQgFQAFAJAIARIBIAAIAAArg");
	this.shape_3.setTransform(96.825,9.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLBVIAJgHIhZAKIgCgOIAugEIAAgTIgpAAIAAgMIApAAIAAgNIgoAAIAAg+IAoAAIAAgNIguAAIAAgMIAuAAIAAgOIgoACIgEgMQA6gCAhgIIAHAMIgoAGIAAAQIAsAAIAAAMIgsAAIAAANIAoAAIAAA+IgoAAIAAANIApAAIAAAMIgpAAIAAARIAqgEIAAAAQAXggAChBIgZAAIAAgPIAaAAIAAgvIAPAAIAAAvIAtAAIgBAIQgCBEgCAZQgCAbgGAGQgEAHgJABQgLABgPgBQgBgJgEgGIAYABQAFAAADgDQAGgIADhmIgeAAQgCAugKAdQgMAjgZATQgEgGgHgFgAghAPIAbAAIAAgPIgbAAgAhKAPIAbAAIAAgPIgbAAgAghgKIAbAAIAAgPIgbAAgAhKgKIAbAAIAAgPIgbAAg");
	this.shape_4.setTransform(74.85,9.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOBUQAagJATgSQgVgYgJghIgCAAQgBA+gaAhQgDgFgIgFQAYgeAAhBIAAg3IAtAAIAAgfIAOAAIAAAfIAmAAIACAAIALADQgHAdgGANIgNgDQADgJAFgSIghAAIAAAlIAfAAIACgBIAJAEQgJAngZAcQATARAcAJQgHAGgDAHQgbgJgVgTQgSARgcAMQgEgKgFgDgAApAvQATgUAIgbIg2AAQAKAaARAVgAAAgNIAeAAIAAglIgeAAgAhDBhIAAhTQgMAPgMALQgEgMgCgCQAhgbASgrIgxAAIAAgOIA4AAIADgBIAHAGQgHAXgPAYIAAABIAFAHQAMgNAFgHIAJAJIgTASIAPATIgJANQgGgLgMgSIAABVgAhLhZIANgGQANATADAJIgNAIQgEgMgMgSg");
	this.shape_5.setTransform(53.3,9.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhdBdIAAgPIBVAAIAAg1IhBAAIAAgPIBBAAIAAgtIhLAAIAAgPIBcAAQgNgRgWgQIANgJQAZAUANAPIgKAHIBEAAIAAAPIhLAAIAAAtIBDAAIAAAPIhDAAIAAA1IBWAAIAAAPg");
	this.shape_6.setTransform(31.625,9.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAtBBIAMgJQAaAOARANIgNAJQgOgMgcgPgAgnBRQAhgLAQgOIAOAIQgXASgeAKgAgLA0IAAhtIAhAAIAFgVIgxAAIAAgNIB2AAIAAANIgzAAIgHAVIAyAAIAABtgAACAnIBHAAIAAgUIhHAAgAACAIIBHAAIAAgVIhHAAgAACgYIBHAAIAAgUIhHAAgAhjAlIAggKIAAhZIgbAAIAAgPIBHAAIAAAPIgcAAIAABTIAfgKIACANIhKAbg");
	this.shape_7.setTransform(9.975,10.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171.8,19.6);


(lib.sb_sc3same = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag9BhIAAhBQgOAfgOAQQgDgIgFgGQAUgVAMghIgeAAIAAgNIAiAAIAAgXIgeAAIAAgOIAeAAIAAgVIgfAGIgEgMIAjgGIAAgYIANAAIAAATQAOgCAHgFIAMAMQgNAFgUAFIAAAXIAaAAIAAAOIgaAAIAAAXIAfAAIAAANIgfAAIAAAIIAgAcIgJALQgIgKgPgNIAAA+gAApBeQgNABgGgGQgEgFAAgQIAAgjIggAGIgCgOIAigGIAAghIgcAGIgDgOIAfgFIAAgjIggAHIgEgMQA5gNAegPIANAMQgRAIggAJIAAAjIA2gJIACAPIg4AJIAAAhIA+gLIADAOIhBALIAAAlQAAAIACACQACACAHAAIAeAAQAFAAACgGQACgGABgSQAGAFAIACQgBAWgFAHQgFAIgMAAg");
	this.shape.setTransform(114.7,9.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXBgIAAiTIAxAAIAAgtIAPAAIAAAtIAzAAIAACSIgPAAIAAgLIhVAAIAAAMgAApBFIAkAAIAAgvIgkAAgAgIBFIAiAAIAAgvIgiAAgAApAIIAkAAIAAgsIgkAAgAgIAIIAiAAIAAgsIgiAAgAhVBTQAUgdAPgfIAMAKQgUAogMAUgAhcgYIAJgLQAcANAMAIIgJAOQgPgMgZgMgAhQhRIAIgMQAaALAPAMIgJAMQgPgMgZgLg");
	this.shape_1.setTransform(93.1,9.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFBhIAAhzQgKAPgIAGQgEgIgFgGQAgghAQgzIAPAFQgHAVgNAZIAACNgAgqBZIAAgPIA+AAIAAgkIgxAAIAAgPIAxAAIAAgXIAQAAIAAAXIAzAAIAAAPIgzAAIAAAkIA9AAIAAAPgAgjgIIAAgPIA3AAIAAgeIgtAAIAAgPIAtAAIAAgcIAQAAIAAAcIAvAAIAAAPIgvAAIAAAeIA5AAIAAAPg");
	this.shape_2.setTransform(72.275,9.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWBdIAAgWIhIAIIgBgOIAUgBIAAhGIgSAAIAAgNIC5AAIAAANIhjAAIAABjgAg8A+IAmgEIAAgNIgmAAgAg8AhIAmAAIAAgOIgmAAgAg8AHIAmAAIAAgNIgmAAgAArBGQgTAOgXAIIgIgMQAUgGAUgOQgQgRgIgVIAJgDIgTAAIAAgMIBKAAIADgBIAJAEQgJAdgWAVQATAOAXAGQgFAFgEAHQgZgGgTgQgAArAzQAQgQAHgQIgsAAQAIATANANgAA3gbIAAg1IhtAAIAAA1IgPAAIAAhBICLAAIAABBgAgtghIAAgLIBaAAIAAALgAgtg5IAAgKIBaAAIAAAKg");
	this.shape_3.setTransform(51.125,10.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AACBVQAUgKATgWQgQgagJghQgGBDgYAjQgHgHgHgDQAUgYAHgqQAFgfAAg8IgUAAIAAgOIBKAAIADgBIAKABQgFAngFAVIAQAAIACgBIAKAEQgIAsgWAfQAQAVAWAJQgGAEgFAJQgVgKgPgUQgRATgVAMQgEgIgGgEgAAyAoQAOgXAHgcIgqAAQAHAcAOAXgAASgZIAdAAIAIguIgkAAgAhgBYQAIgSADgfIAMACQgDAfgHAUQgDgCgKgCgAg/AoIAMgCQAEAYACASIgMADQgCgUgEgXgAgnAkIALgDQAIAVACANIgLAEQgDgNgHgWgAgdASQg3AJgFADIgFgPQAGgBAKgNQAHgHAKgQQgZADgEACIgGgOQAFgBAIgLQAQgXAMgeIAOAGQgOAegSAaIAWgCIAQgcIAOAIQgWAmgaAdIAkgFIgHgTIALgEQAMAZAEARIgNAFg");
	this.shape_4.setTransform(30.05,9.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAlBMIAdAAQAGAAAAgFIAAiSIiOAAIAACnIgQAAIAAi3ICtAAIAACiQAAAOgJAEQgIADgbAAQgCgJgEgHgAgqBAIAAhSIBVAAIAABCIhGAAIAAAQgAgbAjIA2AAIAAgnIg2AAgAg0goIAAgNIBqAAIAAANg");
	this.shape_5.setTransform(8.7,10.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124.5,19.5);


(lib.sb_sc3177 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhpCOIAykbIBDAAIgnDiICFAAIgKA5g");
	this.shape.setTransform(183.7,15.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiICnIDLlNIBGAAIjMFNg");
	this.shape_1.setTransform(160.75,16.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABwCOQALh+ABhaQg2BlgnBZIg/AAQgJhZgRhlQgfBZgiB/IhCAAQAuioAqhzIBiAAQASCDABAbQARgpA7h1IBiAAQACBtgOCug");
	this.shape_2.setTransform(127.5325,15.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbCOQglhFgyhEQAtg8BThWIBbAAQhiBdgqAwQAcAgAiA2IAkA4gAieCOIAykbIBEAAIgyEbg");
	this.shape_3.setTransform(95.525,15.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah/COQAphDA4hLQAvg+AWgWIiSAAIAKg5IDhAAIgIAtQgyA6gzBFQgwBEgZArg");
	this.shape_4.setTransform(67.575,15.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpAiIANhDIBFAAIgMBDg");
	this.shape_5.setTransform(46.3,26.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah/COQAphDA5hLQAtg9AXgXIiRAAIAKg5IDgAAIgIAtQgyA6gzBFQgwBEgZArg");
	this.shape_6.setTransform(31.225,15.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglCRIAmjaIhPAMIAJg2ICUgdIgzEhg");
	this.shape_7.setTransform(7.925,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,194.3,33.5);


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

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiXCwIAMhIQA5AEAhgGQAxgJAlgjQgZAQgqAAQg+AAgegjQgcgiAJg2QAKg6AtgiQAtgjBBAAQBEAAAhAjQAlAngOBLQgQBahEA2QhKA8h9AAIgQgBgAglhaQgRARgFAYQgEAZAMAQQAOASAhAAQAdAAAUgPQAUgQAFgdQAFgcgNgPQgOgQgfAAQggAAgWATg");
	this.shape.setTransform(52.3073,17.6619);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AihCdIANhFQA+ARAuAAQAjAAAWgNQAZgNAEgZQAFgdgZgKQgWgKg7AAIgFAAIAFgfIBjhOIibAAIALhEIEFAAIgJA3IheBNQAgAHAVAZQAYAbgHAkQgUB2ibAAQgyAAhAgQg");
	this.shape_1.setTransform(16.15,17.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.5,35.3);


(lib.an_sc3rect = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// rect
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-320,-1.1,26.2,-1.1).s().p("AB0o/ICSgXIAASWIoLAXg");
	this.shape.setTransform(382.6,59.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-280.2,-0.8,66.1,-0.8).s().p("AkZpCIOtgRIAASWI0nARg");
	this.shape_1.setTransform(325.825,59.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-248.3,-0.6,97.9,-0.6).s().p("ApYpFIYrgMIAASXI+lAMg");
	this.shape_2.setTransform(280.4,59.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-223.5,-0.4,122.8,-0.4).s().p("AtRpGMAgcgAJIAASXMgmWAAHg");
	this.shape_3.setTransform(245,59.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-204.8,-0.2,141.4,-0.2).s().p("AwLpIMAmRgAFIAASWMgsLAAFg");
	this.shape_4.setTransform(218.4,59);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-191.4,-0.1,154.8,-0.1).s().p("AyRpJMAqdgADIAASWMgwXAADg");
	this.shape_5.setTransform(199.325,58.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-182.5,0,163.8,0).s().p("AzrpKMAtQgABIAASWMgzKAABg");
	this.shape_6.setTransform(186.55,58.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-177,0,169.2,0).s().p("A0hpKMAu9gABIAASWMg03AABg");
	this.shape_7.setTransform(178.825,58.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-174.2,0,172,0).s().p("A63JMIF6yXMAv1AAAIAASXg");
	this.shape_8.setTransform(174.825,58.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-173.2,0,173,0).s().p("A7BJMIF6yXMAwJAAAIAASXg");
	this.shape_9.setTransform(173.35,58.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-173.1,0,173.2,0).s().p("A7CJMIF6yXMAwMAAAIAASXg");
	this.shape_10.setTransform(173.15,58.75);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(10).to({_off:false},0).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,408.8,119.9);


(lib.sb_ttset_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAGCxIAXiDIhrAAIAHgkIBrAAIANhLIg2AAQgTAjgRATQgKgIgSgJQAogtAdhUIAhAHQgJAXgNAaIAsAAIAMhIIAlAAIgNBIIBVAAIgGAkIhVAAIgNBLIBmAAIgGAkIhnAAIgXCDgAihCwIAkjMQgQASgVATQgEgTgKgRQAfgbAfgoQAfgnAWgrIAgAKQgVAogfAsIgvECg");
	this.shape_16.setTransform(188.15,60.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABBCaIizAJQglADgLADIAAAAIAAgBIgFggQAKgCAQgLQAJgEAigZIhaAAIAFgfIBJAAIAThtQghAVgiAOQgIgRgKgJQBEgbA1gvIhgAAIAGgeIB4AAQAOgQAMgUIAkAHQgNASgJALICuAAIgFAeIhgAAQATAVAaATQAZASAaALQgTAQgJAMQgdgPgcgYIgBAFIiXAAIgEAVICYAAIgEAYIiYAAIgEAUICYAAIgEAZIiYAAIgEAVIDjAAIgGAfIhXAAQAnAqAPAYIgjASQgFgKgKgOgAhrCGICXgGIgTgXIAZgLIhkAAQgeAYgbAQgAgyhMIB+AAQgOgPgOgUIg7AAQgPAQgYATg");
	this.shape_17.setTransform(132.375,60.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ai1ChQgFgJgGgFQBBgTAfgnQAWgcAQg9IhjAAIAGghICYAAIAZiQIAlAAIgaCQICbAAIgFAhIhrAAIgWB/QgCAKACADQADADALAAIArAAQAKAAAGgLQAFgLAJgpQALAKATAFQgMAxgMAQQgNARgaAAIgzAAQgdAAgHgLQgJgKAFgdIAXh/Ig/AAQgTBHgcAlQgkAvhJAXQgBgHgFgKgAhThhQgIgbgJgXIAigMQAaA3ADAnIglANQgBgSgIgbgABYhBQAmgvAagzIAjAOQgoA9geAjg");
	this.shape_18.setTransform(74.4,60.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAyCyIAGggIj5AAIAFgaIA4AAIARhhIgsAAIAFgYIgQgLQAbgWAGgmIAEgWICNAAIgKA+Ih3AAQgJATgMAMIEyAAIgFAYIguAAIgRBhIA2AAIgEAaIg3AAIgFAggAhhB4ICdAAIADgQIidAAgAhaBRICdAAIADgSIidAAgAhTAoICdAAIADgRIidAAgAg6gzIAfAAIAEgYIgfAAgAhxgzIAdAAIAEgYIgcAAgAAAgbQAmgGAYgIQgRgOgKgWIADAAIgNAAIADgUQgGgLgGgEQAVgHAJgKQAIgHACgMIADgTIBkAAIgGAiIAAAIQABACAEAAIARAAQAOAAAFgCIgCAWQgFACgQAAIgZAAQgRAAgEgIQgEgHADgRIACgJIgrAAQgHAbgcARIBjAAIAGgBIASAHQgRAegjAWQAYAIAjAEQgMALgKAOQgogGgcgPQghAPgtAGQgEgPgGgJgABcg1QAVgMAOgMIg+AAQALAPAQAJgAiHhqIADgTIA5AAIADgPIhFAAIADgTIBFAAIADgSIAhAAIgDASIBCAAIgDATIhDAAIgCAPIA3AAIgDATg");
	this.shape_19.setTransform(19.375,60.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AjMCjQAVgaANgpQALgcAHgrIgVADIAAgeIAagCIAWh9IAgAAQALgaAHgVIAhAGIgWApIAsAAIgTBvIATgDIgCAbIgWADIgXCDQgEAWgOAHQgKAFglABQABgOgGgPIAiABQAHgBAAgGIAWh+IgwAHQgVBtgnAxQgJgKgNgGgAh2gHIAygGIAOhXIgvAAgAgNCyIAMhCQgSAmgXAaQgPgOgLgEQAvgxARhkIAKg/ICjAAIgUBxIiEAAIgFASICPAAIgSBlIggAAIACgLIhYAAIgCALgAAXCMIBZAAIAHglIhZAAgAAXAgIBjAAIADgTIhiAAIgEATgAAggKIBhAAIADgSIhhAAgAh7AnIAVgHQAKAfACAaIgXAIQgBgXgJgjgAhlhOIAVgHQAIAdADAYIgYAJQAAgWgIghgAgShXQAkgRAfgXQAigZAVgbIAdAMIgKALQAOASAXASQAWARAXAKQgLAMgKATQgWgNgWgTIgDAUIhYAAIADgSQggAXgZAMQgDgPgKgPgAA+hkIBIAAQgRgOgPgUQgWAVgSANg");
	this.shape_20.setTransform(82.55,17.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag2CRQAPgGADgSIADgNQgWAKgTAFQgEgKgIgMQg8ARguAMIgBghIAsgLIAShlIgiAAIAGggIAhAAIAOhPIgkAAIAFggIBnAAIgFAgIgkAAIgNBPIAeAAIgFAgIgfAAIgRBdIAjgKIgBAcQA0gNAqgZIg0AAIAOhRIC6AAIgOBRIhFAAQAGARAJAPQAXgMAagRIAUAWQgcAOgbAMQAVAVAjAKQgPAMgMAQQhHgZgRhRQgWARgaANIgHAoIA9gNQgDAQgBAKQhRAUgNAGQgCgQgGgKgAgEAgIB3AAIAFgeIh4AAgAgwgpIAGgcIDoAAIgGAcgAgYhWIAOhUIDMAAIgOBUgAB5hvIAhAAIAFghIggAAgABBhvIAfAAIAGghIggAAgAAJhvIAfAAIAGghIggAAg");
	this.shape_21.setTransform(26.4,18.6625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205.8,78.8);


(lib.sb_ttprice = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag9AuQAUgHAKgPQAHgLAGgVIggAAIABgJIBvAAIgBAJIgkAAIgIAtQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQABAAABABIAQAAQAEgBACgDQACgFADgPQAEAEAEABQgEAQgEAGQgEAFgIAAIgSAAQgIAAgDgCQgCgEABgIIAIgtIgXAAQgGAXgJANQgMARgWAIQgBgFgDgCgAghgrIACgJIBZAAIgCAJg");
	this.shape.setTransform(103.425,6.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAAQAIgwAdABQAOAAAFAMQAGAMgFAXQgEAYgKAMQgKAMgMAAQgeABAJgxgAgRAAQgGAnARAAQARAAAHgnQAHgmgSAAQgRAAgHAmg");
	this.shape_1.setTransform(88.4461,6.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcAAQAJgwAcABQANAAAGAMQAFAMgEAXQgJAxgbgBQgdABAIgxgAgRAAQgHAnASAAQARAAAHgnQAHgmgSAAQgRAAgHAmg");
	this.shape_2.setTransform(80.0727,6.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcAAQAJgwAcABQANAAAGAMQAFAMgEAXQgJAxgcgBQgcABAIgxgAgRAAQgHAnASAAQARAAAHgnQAHgmgSAAQgRAAgHAmg");
	this.shape_3.setTransform(71.7215,6.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMANQANgGACgKIgBAAQgIAAABgIQACgIAIAAQAKAAgDAOQgEARgSAIg");
	this.shape_4.setTransform(64.175,11.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAAQAJgwAcABQANAAAGAMQAFAMgEAXQgJAxgbgBQgdABAIgxgAgRAAQgHAnASAAQARAAAHgnQAHgmgSAAQgRAAgHAmg");
	this.shape_5.setTransform(58.5227,6.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghAkIAIgIQAIALANAAQAHAAAHgFQAGgEABgJQADgSgcgBIACgIQAZAAADgRQABgHgEgEQgDgEgHAAQgJAAgLAJIgFgHQANgLAOAAQAMAAAGAFQAHAHgCALQgDAQgSAHIAAAAQAJABAEAGQAFAHgCAJQgCAMgKAIQgKAGgMAAQgSAAgKgMg");
	this.shape_6.setTransform(49.7485,6.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag3A6IANhFQgGAHgIAGQgBgGgCgCQAWgUAQgfIAIADQgGANgMAQIgPBTgAgmA3IACgJIAMAAIAMhGIAVAAIAFgMIgeAAIABgIIAgAAIAEgNIAKABIgFAMIAiAAIgBAIIgkAAIgFAMIAfAAIgNBGIAMAAIgCAJgAgQAuIAsAAIABgKIgrAAgAgNAdIAsAAIACgLIgsAAgAgKALIAsAAIACgLIgsAAgAgGgGIArAAIACgLIgrAAg");
	this.shape_7.setTransform(35.075,5.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AALAtIAHgFQASAGALAHIgJAFQgJgGgSgHgAgoAzQASgDAPgIIAGAFQgOAIgUAEgAg4A5IAMhGIgPAQIgDgJQAVgTAPggIAJACIgPAZIgPBXgAgcAnIAIgtIBGAAIgIAtgAgSAhIAzAAIACgHIgzAAgAgPAUIAzAAIABgIIgzAAgAgNAHIAzAAIABgHIgzAAgAgVgMIAEgYIAVAAIABgIIgXAAIABgIIBQAAIgBAIIgbAAIgBAIIAWAAIgEAYgAAfgSIAOAAIACgNIgOAAgAAJgSIAOAAIACgNIgOAAgAgMgSIANAAIACgNIgNAAgAAMgkIAOAAIABgIIgOAAg");
	this.shape_8.setTransform(21.125,5.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAIA5QgHAAgCgCQgCgCABgHIADgWIAIAAIgDAWQgBABAAABQAAAAAAABQAAAAABAAQAAAAAAABIAEAAIARAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBIACgMIAIADQgDALgDADQgDAEgHAAgAg/A2QAHgLAGgSIAGABQgGASgGANIgHgDgAgUAyQAHgKAGgQIAGACQgHATgGAIgAgnAaIAHgBIgBAbIgHABQABgLAAgQgAAoAaIAIgDIAGAZIgIAEQAAgJgGgRgAgbAYIAHgCQACAPgBAHIgHACQAAgLgBgLgAAQATIAIgCIAIATIgHAEQgDgLgGgKgAg3ALQAEAAAGgIIAOgOIgSADIgBgJQADAAAEgHQAJgJAMgWIAIADQgLASgNAQIANgBIANgRIAHADQgRAYgSARIAUgCIgCgLIAHgCQADAOABAKIgIACIgBgHQgfAGgDACgAgFAPIAJg7IASAAIAGgMIAJACIgHAKIAiAAIgLA7gAAEAHIAqAAIAHgrIgqAAgAALABQAJgEAKgIIgFgGIgMAJIgFgEIAOgJIgHgHIAGgEIAFAGIAHgIIAHABIgKAMIAFAFIAJgLIAGABQgDAGgJAJIAHALIgGACIgGgJQgIAHgKAGQgCgEgCgBg");
	this.shape_9.setTransform(6.4,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109.7,13.2);


(lib.sb_ttlight = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhtBWQAUgWAMgeQAIgXAHgiIAMhIIAOAAIgNBIQgEAagHATIAYAlIgOAMQgDgJgMgXQgMAggYAZQgEgHgEgDgAgvBaIACgOIAnAAQAAgQgFgPIAMgEQAHAPAAAQIgOAEIAhAAQANgQAJgUIAQAFIgVAfIApAAIgDAOgAgSAmIAJgvIBaAAIgIAvgAgBAaIA9AAIAEgXIg+AAgAhVg5IAMgDQACAbAAAcIgMADQABgZgDgegAgigNQARgJARgSIgRgQIAJgKIARAPQAJgNAEgKIgeAAIACgNIAkAAIAEgBIAIADQgLAbgSAWIA1AAQgLgVgDgjIAOgDQAAAKAEANQAMgJAIgHIAJAKQgRALgKAGIAGANIAYgRIAIALIgbAPQAJAOAOAKQgHAEgGAHQgRgOgKgRIgCALIg3AAIACgJQgSAVgTAKQgDgGgFgFgAgvgKQANgeAFgTIALAFIgUAwg");
	this.shape.setTransform(152.85,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AApBBQgCgZAIg2Ih5AAIACgMICJAAQgRBrATAAQAEAAAHgfQADAGAGADQgFAVgFAIQgFAJgJgBQgUABgCgggAhnBUQAVgFAMgLQALgJAGgQIgVAAIACgNIgTALQgDgFgHgEQAlgQASgZIANAEQgOATgZAQIBTAAIgCAGQgJAugGAGQgFAFgIAAQgHABgQgBQACgHgDgGIAUABQAEAAACgCQAEgEAHggIggAAQgIAVgMALQgOAOgZAHQgCgGgEgGgAgSgBIALgIQAeAVAMAUIgLAJQgNgTgdgXgAhbgnQAhgVAXgkIAQAEIgJAOICFAAIgCAMIiOAAQgRAUgYAQgAgvgpIABgMICDAAIgDAMg");
	this.shape_1.setTransform(129.65,9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AArBEQgCgWAKg6Ih6AAIADgMICJAAQgKA3gBAWQgBAcAMAAQAFAAAHgeQAEAFAFAEQgFAVgFAIQgFAIgJAAQgVAAgCgdgAguBhIAKg3Ig6AAIACgNIA6AAIAGgkIAQAAIgHAkIA3AAIgCANIg3AAIgKA3gAhpBVQAegNAUgYIALAFQgXAcgeAPQgBgDgHgIgAgPA5IALgJQAWATALAPIgMAKQgMgSgUgRgAgGAXQAMgNALgPIAOAFQgRASgMAKgAhIAAIANgFQALAOABAMIgNAFQgCgNgKgNgAhZgiQAlgYAWgmIAPAFIgKAPICDAAIgCAMIiLAAQgUAYgYASgAgsgmIACgMIB/AAIgCAMg");
	this.shape_2.setTransform(105.575,9.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBBSQA4gUAegnIAOAGQgiAqg6AZQgBgHgHgHgAg5BfIALg/QgbAfgcARQgCgIgFgFQAhgSAcgkIgtAAIACgNIAzAAIADgXIAQAAIgEAXIArAAIgDANIgnAAQAXAVAHAQIgLALQgKgSgPgPIgMBDgAAXAJQAsgTAXgaIAOAHQgdAdgqAUQgEgGgGgFgAgLgXQAPgVAKgUIAQAEQgWAfgIALgAhLg0IAMgFQAMATACAOIgOAGQgBgPgLgTgAgkg8IANgDQAHAQACARIgOAEQgBgPgHgTgAAggyQAngSAYgZIAOAGQgbAcgoAUQgFgIgFgDgAhNhPQBJgGAegKIAHAOQgqALhCAEQAAgEgCgJg");
	this.shape_3.setTransform(81.7,9.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhuBWQAZgVANgeQAJgWAHgjIANhJIAPAAIgNBJQgEAagHAUIAZAlIgOAMQgEgKgOgWQgOAigcAXQgCgFgHgHgABCBOIhIAHQgPACgFACQAAgGgDgJQAGgBATgRQAMgKAegfQgrADgHACQAAgHgCgHQAGgBAIgJQARgRASgaIgpAAIAAgFQgNAXgLAQIgJgEQAQgcAHgQIALAEIABgEIBzAAIgCAOIg5AAQgVAdgWAVIApgCIAbgfIANAHQgtA1gvApIBBgGQgGgPgIgPIAOgFQASAiAEAXIgPAGQgBgIgDgHgAhVg5IAMgCQADAdAAAcIgOAEQABgbgCgggAAmhaIAOgGQAKAQADALIgQAHQgCgMgJgQg");
	this.shape_4.setTransform(58.15,9.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhwBaQAUgZAKg2IgNADIAAgOIAPgBIAMhEIARAAQAIgQADgLIAPAEIgNAXIAaAAIgLA9IALgBIgBALIgMACIgNBLQgCAKgHADQgFADgUAAQAAgHgDgGIAUAAQADABABgEIANhJIgfAEQgLA9gWAaQgDgDgHgEgAhDgCIAfgEIAJgyIgeAAgAgHBhIAHguQgLAcgPARIgLgIQAagbAJg2IAFgjIBbAAIgLA6IhMAAIgEAMIBTAAIgKA3IgOAAIABgHIg4AAIgBAHgAAJBOIA4AAIAEgZIg3AAgAAKASIA9AAIACgMIg9AAgAAOgEIA9AAIACgNIg9AAgAhDAUIAKgDQAFAQACARIgKADQgCgNgFgUgAg3grIAKgDQAFAQABANIgLAFQAAgNgFgSgAgJguQAsgVAXgeIANAGIgFAGQARAXAeAOQgEADgGAKQgKgFgPgNQgLgJgLgNQgKAKgRAMIAxAAIgCAMIgyAAIACgLQgTANgMAGg");
	this.shape_5.setTransform(34.425,9.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbBRQAHgEACgKIABgKQgOAHgKADQgDgIgEgDQAhgJAZgQIgfAAIAIgrIBkAAIgHArIgoAAQAEAMAFAIQARgJANgJIAKAJQgNAIgUAJQANAPAUAFQgFAEgHAIQgqgOgIguQgQALgMAIIgFAZIAkgIIgCALQguAMgGADQgBgIgCgEgAgEATIBGAAIAEgTIhGAAgAhrA4IAagHIALg7IgUAAIACgNIAUAAIAIgvIgVAAIACgPIA6AAIgDAPIgVAAIgJAvIATAAIgCANIgTAAIgKA3IAVgGIAAANQgmAMgXAGgAgagXIADgOICAAAIgCAOgAgMgvIAHgtIBwAAIgIAtgABCg6IAWAAIADgWIgVAAgAAig6IAVAAIAEgWIgWAAgAACg6IAVAAIADgWIgUAAg");
	this.shape_6.setTransform(10.75,10.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).to({state:[]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},22).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},86).to({state:[]},1).wait(128));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163.9,19.6);


(lib.sb_ttJBL = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgCBcIALhCIA4AAQgSgOgZgMIgoAAQgPAOgWAMIAtAAIgLBAIgPAAIABgFIglAAIgBAHIgOAAIAKg3IgSAHQgCgIgFgDQAngOAZgTIg1AAIACgNIBDAAQAKgKAHgKIhAAAIAKg6IBCAAIgIA2IANADQgHALgJAKIA9AAQgLgIgNgFIAIgHIgUAAIALg6IBEAAIgKA6IgtAAQARAGAJAJIgGAFIAmAAIgDANIgyAAQAfARAPAQIgNAJIgIgIIgKA4IgPAAIABgFIgmAAIgBAHgAAPBIIAmAAIAGghIgmAAgAhFBIIAkAAIAGghIglAAgAAmguIAoAAIAFggIgoAAgAg1guIAnAAIAFggIgmAAg");
	this.shape.setTransform(156.025,10.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfBhIAEgSIiNAAIACgMIAgAAIAKg3IgZAAIABgLIgIgFQAPgNAEgVIACgMIBNAAIgFAhIhEAAQgFALgHAGICsAAIgCAMIgbAAIgKA3IAgAAIgDAMIgfAAIgDASgAg4BDIBdAAIACgLIhdAAgAg0AtIBcAAIADgMIhdAAgAgwAXIBcAAIACgLIhdAAgAghgaIAUAAIADgPIgVAAgAhBgaIAUAAIACgPIgTAAgAAxgNQgRAIgcAEQgBgFgDgGQAVgCARgHQgMgJgFgMIgGAAIABgIQgDgGgEgDQAUgHACgNIACgLIA2AAIgDAUQgCAGAEAAIAVgBIgBAKIgZABQgIAAgCgEQgCgDABgJIACgIIgcAAQgDARgSAJIA8AAIACgBIAIAEQgLARgTAMQARAGASACQgGAFgEAGQgXgEgQgIgAAzgaQANgHAJgJIgnAAQAHAJAKAHgAhLg5IACgKIAhAAIACgJIgoAAIACgKIAoAAIABgKIAPAAIgCAKIAnAAIgCAKIgmAAIgCAJIAgAAIgBAKg");
	this.shape_1.setTransform(132.675,9.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEBYQAegUATgkIgSAAQgaAjglAXQgEgGgFgDQAigTAWgeIgRAAQgOANgOAIIgJgJQAbgPASgZIgaAAIACgMIB+AAIgDAMIhTAAIgNAPIBWAAIgBAGQgOA6gJAIQgFAFgIAAIgXAAQABgHgDgGIAVABQAEAAADgDQAGgFALgsIgPAAQgVAnghAaQgDgEgGgFgAhnBRQARABAEgBQAEAAAAgEIAKg3IgeAIIgBgPIAigJIAIgtIgdAAIADgOIAdAAIAHgrIAPAAIgHArIAWAAIgDAOIgWAAIgHApIAWgFIAAANIgZAHIgKA8QgCAMgIAFQgGACgXAAQAAgHgCgIgAgFgWIALhDIBgAAIgLBDgAAKghIBEAAIADgRIhEAAgAAQg9IBCAAIADgRIhCAAg");
	this.shape_2.setTransform(108.8,9.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYBVIAKgIIhcAKIAAgNIAwgFIADgSIgpAAIADgMIAoAAIACgNIgoAAIALg+IApAAIACgNIgvAAIADgMIAuAAIADgOIgpACQAAgIgCgEQA6gCAjgIIAGAMQgNADgdADIgCAQIAsAAIgCAMIgtAAIgCANIApAAIgLA+IgpAAIgCANIApAAIgCAMIgpAAIgDARQAWgCAVgDIAAABQAbgeAQhDIgZAAIACgPIAaAAIAJgvIAPAAIgJAvIAuAAIgCAIQgOBEgHAYQgHAbgGAHQgGAHgKABQgGABgUgBQAAgKgCgFIAYABQAFAAADgDQAIgJAWhlIgfAAQgLAugPAdQgSAjgdATQgCgFgHgGgAgiAPIAcAAIADgPIgcAAgAhMAPIAbAAIADgPIgbAAgAgegKIAdAAIABgPIgbAAgAhHgKIAbAAIADgPIgbAAg");
	this.shape_3.setTransform(85.025,9.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfBhIADgSIiMAAIACgMIAgAAIAKg3IgaAAIACgLIgIgFQAQgNADgVIACgMIBNAAIgFAhIhEAAQgFALgHAGICsAAIgCAMIgbAAIgKA3IAfAAIgCAMIgfAAIgDASgAg4BDIBdAAIABgLIhcAAgAg1AtIBdAAIACgMIhcAAgAgxAXIBdAAIACgLIhdAAgAgigaIAVAAIADgPIgVAAgAhBgaIATAAIADgPIgTAAgAAxgNQgRAIgcAEQgBgFgDgGQAUgCASgHQgMgJgGgMIgGAAIACgIQgDgGgEgDQATgHADgNIACgLIA2AAIgDAUQgCAGAEAAIAVgBIgBAKIgZABQgIAAgCgEQgCgDABgJIACgIIgcAAQgDARgSAJIA8AAIACgBIAIAEQgLARgTAMQARAGASACQgGAFgEAGQgXgDgQgJgAAzgaQANgHAJgJIgnAAQAHAJAKAHgAhLg5IACgKIAhAAIACgJIgoAAIABgKIAoAAIACgKIAPAAIgCAKIAmAAIgBAKIgnAAIgBAJIAgAAIgBAKg");
	this.shape_4.setTransform(61.675,9.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtBOIAbibIATAAIgXCKIBEAAIgDARg");
	this.shape_5.setTransform(35.575,9.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag8BOIAbibIAuAAQA2AAgGAmQgDAMgHAJQgIAKgLADIgBABQAOADAHAIQAIAKgDAPQgEAWgTAMQgSAMgaAAgAgmA+IAcAAQAqAAAFgeQAFgdgqAAIgbAAgAgZgKIAYAAQAlAAAEgaQADgNgIgGQgIgGgTAAIgYAAg");
	this.shape_6.setTransform(20.8349,9.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag2A3IAQgKQAHARARAAQAYAAAHghIAShrIAUAAIgTBtQgEAWgMAMQgOAOgVAAQgdAAgKgYg");
	this.shape_7.setTransform(5.5,10.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},7).to({state:[]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},21).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},75).to({state:[]},1).wait(139));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,166.3,19.5);


(lib.sb_sc2line = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C3356C").s().p("AhoGXICbstIA2AAIimMtg");
	this.shape.setTransform(10.55,40.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.1,81.4);


(lib.sb_sc2bg3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bg3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-278.9,0,278.9,0).s().p("EgrkAKzIDu1lMBTbAAAIkBVlg");
	this.shape.setTransform(278.925,69.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,557.9,138.2);


(lib.sb_sc2bg2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bg2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],226.3,0,-226.3,0).s().p("EgjWAJsIDnzYMBDGAAAIjSTYg");
	this.shape.setTransform(226.325,62.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(13).to({_off:true},1).wait(15).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,452.7,124.1);


(lib.sb_sc2bg1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bg1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-162.9,0,162.9,0).s().p("A5cKzIDu1lMAvLAAAIkBVlg");
	this.shape.setTransform(162.925,69.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,325.9,138.2);


(lib.sb_sc2_pic2 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EgpxAMqIEe5TMBPFAAAIkdZTg");
	mask.setTransform(427.575,200.625);

	// Layer_3
	this.instance = new lib.sc2_pic2();
	this.instance.setTransform(88,53,0.6523,0.6523);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160.2,119.7,534.8,161.90000000000003);


(lib.sb_sc2_pic1 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AzUrpMAqwAAAIkHXSMgqwAABg");
	mask.setTransform(331.825,191.6);

	// Layer_3
	this.instance = new lib.sc2_pic1();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(181.8,117,300.09999999999997,149.2);


(lib.sb_sc0taiwan = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ai2CVQBAgRAmgYQgcgagOgoIAsgTQAMAfAZAWQAWgZAJgmIh8ALIAViOIB7gLIAJg1IAvgFIgJA2IB+gLIgVCOIh+ALQgNAzgcAkQAfALAvACQAoACBBgFQgTAUgKAdQhCADgsgEQgxgFgigQQgvAhhGAWQgIgXgNgQgAhMhOIgHA3IBQgHIAHg3gAAzhZIgIA2IBPgGIAIg3g");
	this.shape.setTransform(309.05,16.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiKiXIBTgIIAGgCIAcAPIgxBsQAWAigGAoQgGAmgSANQgJAGgPAEIgYADQADgWgHgQIARgBQAFgBAFgEQAHgFADgRQAFgjgVgdIAihXIgdADIguEuIgoAEgAgWCDQAJABAXgCQANgBAIgLQANgNAGgmQgvAlg3AaQgJgSgNgMQAigMAjgVQAkgWAWgVIgCgUQgoAggoAWQgJgUgKgKQAWgJAagQQAagPARgOQgFgMgFgIQgeAWgjAUQgMgUgKgKQAygWAigcIhCAGIAGgnIA8gGQgKgQgUgUIAjgXQAaATANAXIgVAPIAjgDQAfgpAMgWIAqAJQgQAWgXAcIA5gFIgHAoIhkAJIgTARQAMAOAIAXQAlgWAggbIAXAcQgVAQgbAQQAFAcALAcQALAcANARQgRAMgPATQgOgTgLgfQgMgegGgfIgBABQAGAqgLAsQgKAqgTATQgTAUgcADIgeACQACgZgGgPg");
	this.shape_1.setTransform(272.65,19.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai8CoQAjg8AfhEIAgAUQgaA+gjBBgAAOCPIA5gDQAMgBAFgDQAHgFAHgQIjAARQAOgeANglICigPIACgMIitAPIAEgZIDWgTIgJA/IioAPIgFANIC9gRIgEAQQgQAvgQALQgMAKgZAEIg7AEQACgRgJgPgAhjAQQALgQAIgbIAVADQgLAggNAVQgIgJgIgEgAg3gZIAUgHQAEAUgCAWIgWAJQADgVgDgXgABPAAQAKgOAKgfIAUAEQgKAggNAUQgGgGgLgFgAANguIBIgGIgIA4IhJAHgAAkgcIgDARIATgCIADgRgAingZIAdgjQAjAPAQAQIggAlQgPgRghgQgAB6goIAVgHQADAZgCAVIgVAHQACgagDgUgAgZghIATgIQAGASAAAUIgUAJQABgQgGgXgACZgxIATgJQAHAaAAAUIgUALQABgWgHgagAhTg5QAGgBAOgNQAIgHAPgTQgYAEgHADIgGgRQAGgCAIgKQASgWAMgdIAXAGQgMAXgSAWIARgDIAMgSIAVAJQgTAdgdAgIAWgFIgEgKIAUgIQAIAWACARIgUALIgBgNQg6AOgIAEQgBgFgFgOgABfhHQAJgCALgOQAGgFARgVQgXAEgIAEQgCgKgEgIQAFgBAJgKQAFgGAJgOQAKgRAHgPIAXAHQgNAXgSAWIASgDIALgSIAWAIQgZAkgYAYIAWgEIgDgKIATgHQAKAYABAPIgUAKIgCgMQg7ANgHAFQAAgJgGgJgAAShNIBIgHIgDAWIhIAFgAAWhrIBJgGIgEAUIhIAGgAiQiBIAeghQAkATAOAPIghAlQgOgSghgUgAAQiNIAkgCQgCgNgFgOIAegIQAHANADAPIgQAFIAmgEIgDAZIhbAIg");
	this.shape_2.setTransform(233.975,22.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiJASIEAgXIgaCpIgwAEIACgTIigAOIgDATIguAFgAhhA5IgJA+ICggOIAJg+gAiZgxQANgEAVgVQAPgNAbgdQAhgmAWggIAqAQQgnAzg6A3ICbgTQgQgVgVgXIAngbQBABAATAoIgqAgQgEgJgMgTIjBAbQgrAHgOAGQgDgagFgRg");
	this.shape_3.setTransform(197.275,26.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ai1CuQgIgJgGgEQA2gmAchRIgaADQgSACgHAGIgIgkQAMgEAJgKQANgKAegpIgwAFIAGglIBKgGIAHgDIAZAKQgsA5gZAeIAZgDIAGgBIASAGQgNAsgSAlQAMAaAgAHQAYAGA0gFQBXgIA8gLQgLAMgLAfQg7AJhJAHQg4AFgcgGQgigIgQgaQgYAlgeAWQgDgGgIgJgAATBaIhZAIIAFghIBZgIIADgRIhKAHIARhwIBKgHIACgOIg+AFIACgPIgfADIAMhKIDkgVIgLBLIgdACIgBAPIhAAGIgCAOIBNgHIgRBxIhNAGIgDARIBggJIgFAiIhfAIIgFAZIgsAEgAgDAAIgCAQIAkgDIACgPgABNgGIgCAPIAngEIADgOgAACgoIgCAPIAlgDIACgQgABUgwIgCAQIAmgEIACgPgAACiJIgDAYIAzgFIADgOIAsgEIgDAOIAygEIADgYgAiDiWIAlgXQAYAbAOAaIgnAcQgJgWgbgkg");
	this.shape_4.setTransform(157.65,30.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai6CIIBrgKIAIg2IhRAGIAViKIBRgHIAHgvIhkAJIAGgqIFKgdIgGAqIhoAJIgHAvIBUgIIgVCLIhUAHIgJA2IBvgJIgGApIlXAfgAgkB6IAngDIAOheIBTgHIAJg9IhTAIIANhXIgnAEIgMBWIhRAHIgJA9IBRgHg");
	this.shape_5.setTransform(120.125,33.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfCSIAtgFQAHAAACgGIADgWIh0AKQAYAOALAMIgjAfQgNgQgdgRIAbgXIhWAHIAFgiIDZgUIADgSIh2ALIgBAKIgnAEIAMhQQgcAWgXAOQgJgWgHgJQA4geAngsQgnAXgqAQQgBgSgIgRQAzgRAsgaIhIAGIAGgkIB4gLQAVgVAJgOIAfAJIgRAXICngPIgGAjIhKAIQAiATA0AGQgTARgLASQgTgDgVgJIgCAMIhVAIIgCANIBYgIIgDAXIhZAHIgCAOIBYgIIgDAWIhYAIIgCAPIBogJIgEAbIgtAEIgCASIBRgHIgGAjIhRAHIgDAXQgDAQgFAIQgFAIgMAGQgRAGguAFQgBgRgIgSgAhNAcIgDAPIA+gFIACgQgAhIgHIgCAMIA+gFIACgNgAg9gsIgGAHIgCAHIA+gFIACgOgAgUhuQgMALgKAGIAQAFIgNARIApgEQgDgNgHgLIAbgOgAAahxQALAPACANIgQAJIBMgHQgZgOgRgUg");
	this.shape_6.setTransform(82.775,36.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AisCVQBcgTAggfIhjAIIAGgkIB2gLIAGgRIAsgEIgFARICGgMIgEASQgTBFgRAQQgNALgUAEQgXADgcACQACgWgJgQQAegBAMgBQAKgBAFgEQAJgHAJgeIhgAJQgTAggkAVQgnAWhEAQQgCgTgMgRgAhohSICGgMQgtgGgigCIAYgaQAZAAAnAEIAqgTIi5AQIAFghIDvgVIAKgDIAXAXQgmAXgsAVIAVAEIgLANIBFgGIgRBsQgCAOgFAHQgFAHgLAEQgNAFgxAEQgCgMgGgOIArgEQAHgBABgGIABgGIhOAHIgDAYIgpAEIAEgYIhIAGIgFAmIgqAEgAhIgUIgCAOIBIgGIACgPgAAogeIgCAOIBOgHIACgOgAhCg6IgCAOIBGgGIACgOgAAuhEIgCAOIBNgHIACgOg");
	this.shape_7.setTransform(42.675,40.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.4,-1.9,302,60.9);


(lib.sb_sc0no = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FCEE21").s().p("Ak9DnIB0gJQgKgtgXgsIApgTIhKAGIAPhVIDDgOIAJg3Ih+AJIAGgdQgoATglAOQgHgUgNgWQgNgYgPgQQDghLBoiJIBSAhIgXAcQApAjBAAcQBAAcBFANQgSAQgXAbQgWAYgPAVQgogMghgOIgGAlIh7AJIgKA3IDDgNIgNBTIhOAGIAvAOQgtA9gdAiIB8gJIgPBVIovAqgAiRBvQAaAvAHAlIgyAYIBKgFIARhtgAAdBiIgSBsIA9gFIghgLQAggpAfg5gAg6h3IChgMQgmgYgkggQgoAmgvAeg");
	this.shape.setTransform(303.55,31.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCEE21").s().p("Ak4EbQgOgUgMgNQBiggBTg5IhzAIQAghYAVhdICmgMIADgZIi8AOIALhCQgbgmgWgVQAfgaAfgmQAeglAUgnIBOATIgKASIB+gJIgLBCQAzgwAghBIBRAPIgLAVICngNIgLBHIhhAHQATAPALANIg5AuIAwgDIgeCxIjGAOIgEAaIDrgRIgHAgQgOBCgNAhQgMAkgOAOQgXAXgjAHQgcAGg2ADQACgVgDgXQgEgYgIgQQAnABAWgDQAPgBAIgGQAJgJAJghIiJAKIgYCcIhcAHIAThzQhcBPhuAtQgHgQgNgVgAiUA5IgIAbIBWgHIAEgagAAog4IgDAZIBqgIIAEgZgAiSi9QgiAsghAhIBugJQgUgagXgUIAegYgAg3jEQAQAMAOAUIgvApID9gTQgTgYgdgVIAggaIgqADQgfAqgfAbQgJgKgTgQQgSgPgNgJIAMgKg");
	this.shape_1.setTransform(33.9,51.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336.8,83.9);


(lib.sb_sc0name = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FCEE21").s().p("AkuEQQAYgvAThfIA9AFQgTBegbA7QgQgIgqgIgAjDCIIA4gPQAABFgJBEIg7AQQAJg7ADhPgAAwDSIh+AMQARgmAVg3IgfAEIAIg3Ig6AWIABgVQhGAPgcAJQgYAGgLAIQgEgigKgiQALgDANgLQAKgJARgUQAKgKAYggQgqAKgNAGQgEgdgJgkQANgEAVgdQAMgRAVgnQAagwAPgpIBBAWQggBBgxBHIAagEQAdgtAXgrIA5AiIgDAEIBIgGIAKgaIg6AFIAIg9IBIgGIAMgiIBKABIgJAaIB8gLIgNBWIAlgDIgKA/IlKAdIAJg8QgoBDgzBAIAygSQALBGgBAuICBgLIADgRIhyAKIAViIIEhgaIgVCIIhiAJIgDARIBugKIgIA7IhvAKIgEAbIB5gLIgKA/Ih4ALIgIA3IhNAGgAAfB8IgKAbIAlgEIAEgbgAieAWIAjgGIgDgfgAAsgfIgEAXICMgMIADgYgACEjGIgJAaIBEgGIAEgagAiHB2IA2gTQAHA3gBA7Ig5AVQADgtgGhHg");
	this.shape.setTransform(188.725,36.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCEE21").s().p("Aj3D6QgIgTgJgMQB3gYAygjIiEAMIAKhDICsgPIAJgaIBSgHIgIAZIDLgSIgIAfQgcBmgcAbQgVATgiAHQgcAFgwACQABgQgDgUQgDgTgHgNQAkAAAXgEQAPgBAIgGQAKgKAKgdIiAAMQgdAtg3AfQg7AhhlAYQgDgOgIgUgAihh8ICqgPQgygHgngBIAsgvQAjABA2AEIAtgVIkDAXIAJg7IFmgfIASgGIApAqQg9Alg4AaIAZAGIgSAUIBqgJIgZCgQgDAXgJAMQgJALgSAIQgQAGgcAEIg5AGQgCgXgMgaQArAAAVgEQAMgBACgLIhnAJIgEAiIhNAHIAGgiIhaAIIgJA4IhNAHgAhkgaIgCANIBagIIACgNgABBgpIgBANIBmgJIACgNgAhchRIgCAMIBagIIACgMgABKhgIgCANIBmgKIACgMg");
	this.shape_1.setTransform(129.85,42);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCEE21").s().p("AjKBhQgcA4geAnQgEgdgVgtQAcgjAdg1QAbgwATg0Ig9AFIAMhNIBCgGIASh2IBNgHIgRB1IA6gEIgMBNIg7AGIgDAVQAUAeAbAzIAJg/IFNgdIgKBDIjRASIgOATIDUgSIgHAcQgRBRgNAoQgOApgNAOQgSATgYAHQgTAFgjACQADgegHgbQgdAmgdAcQgTgbgbgQQA1gpAyhUIgQABQgdArgnAqQgmAqglAcQgRgbgagUQA7gjA2hDIgQACQgeAfgeAWQgYgegTgPQA0giAsg3IgqAEIADAFIg1BDQgFgTgKggIgiDmIhNAGgACmBbQgYAxghAvIATgBQAKgBAHgHQAMgNAShLgAAWkHIEFgWIgeDMIkGAYgABQiMIgDATIBmgJIAEgTgABbjUIgDATIBngJIACgTg");
	this.shape_2.setTransform(74.1,46.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCEE21").s().p("AkhDlQBVgVBDgiIhHAHIAkjvIGHgjIgkDvIhTAHQBOAYA7AZIhhAwQg9ghhNgYIA2gkIiTANIAwAUQglAag4AbQgzAYgyASQgdglgXgTgAh2BsIgCARIDigUIADgRgAhsAuIgDAQIDigUIADgRgAhjgPIgCAPIDigUIACgQgAjkhFQgKgRgLgKQBEgeAbgvIhCAGIAKhCIBQgHIAHghIBOgHIgHAhIBvgKIgFAZQgKA2gIAbQgJAcgLAMQgRASgaAGQgWAFgpACQACgfgIgXQgnA8hQAkQgDgNgKgSgAhJi1QgHAVgLARQAZAAAKgCQALgBAHgFQAFgHAGgbgABOkJIDUgTIgZCqIjVATgACQjSIgHAuIA5gFIAHgug");
	this.shape_3.setTransform(16.525,52.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCEE21").s().p("AkUC/QApAAAZgFQAMgCAIgKQAQgTAPhZQgrAwgyAlQgFgQgKgTQgKgUgKgMQAlgVAmgkQAmgjAagmQABgZgEgYQgwApgiAZQgPgugVgaQAsgZAugmQgRgbgbgXIBDg0QAcAXAPAUQAXgXAPgUIA3AkQgeAkgeAfQAPApABA1QABAqgKA7QgWCUgqAyQgSAUgZAJQgfALg2ADQAGgwgRgigAhkCoICEgMIAUiFIhjAJIANhPIBjgJIARh3IhpAKIAMhQIErgbIgMBQIhrAJIgSB3IBogJIgMBPIhoAJIgUCFIB1gKIgNBQIlPAdg");
	this.shape_4.setTransform(-39.2,57.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,7.5,287,77);


(lib.sb_sc0bgt1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#58207C","#9A1B5B","#D11277"],[0.004,0.545,1],291.3,-21.8,-190.7,14.1).s().p("EgpYgGyMBbXgG4IowUdMhbNAG4g");
	this.shape.setTransform(190.75,85.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.1,-2.2,639.8,174.89999999999998);


(lib.sb_sc0100 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FCEE21").s().p("AkiEeQhBhbAfirQAgiuBhhlQBkhpCdgLQCigLBDBdQBBBaggCwQgfCphoBnQhqBoicALIgeABQiAAAg7hTgAAljjQhFAFgzA+Qg0A/gUBvQgVBzAiA2QAeAwBDgFQBEgFA0g1QA7g+AUhxQAUhtgjg8Qgeg0g+AAIgKABg");
	this.shape.setTransform(154.3023,36.9405);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCEE21").s().p("AkiEfQhBhbAfirQAgivBhhlQBlhpCdgLQCigLBDBdQBABaggCwQgfCphoBnQhpBoicALIgeABQiAAAg8hSgAAljjQhFAFgyA+Qg0BAgVBuQgVBzAjA2QAeAwBDgFQBDgEA0g2QA7g+AVhwQAUhugjg8Qgegzg9AAIgMAAg");
	this.shape_1.setTransform(79.8665,42.0456);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCEE21").s().p("AACiyIjFApIAZiEIFthhIiCLSIihALg");
	this.shape_2.setTransform(19.55,45.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187.8,81.9);


(lib.sb_sc0_man = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sc0_man();
	this.instance.setTransform(316,7,1.3889,1.3889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(316,7,250,513.9);


(lib.mo_sc0_bgt2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["rgba(32,42,111,0)","rgba(123,36,118,0.698)","#CC5D2E"],[0,0.255,1],290.1,-20.8,-109.9,7.4).s().p("EggEgEzMBF2gFGIlzOoMhFwAFMg");
	this.shape.setTransform(205.325,59.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc0_bgt2, new cjs.Rectangle(-36.4,-3.7,483.5,126.9), null);


(lib.an_sc0ribb = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(57,122,147,0)").s().p("AgzAzQgTgvgMg0QAlgVArgEQArgEAqANQgnBCggBJQgYgbgnADg");
	this.shape.setTransform(143.975,189.2688);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(123,99,139,0.408)").s().p("AgzAzQgTgvgMg0QAlgVArgEQArgEAqANQgnBCggBJQgYgbgnADg");
	this.shape_1.setTransform(124.375,242.7188);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(171,82,134,0.706)").s().p("AgzAzQgTgvgMg0QAlgVArgEQArgEAqANQgnBCggBJQgYgbgnADg");
	this.shape_2.setTransform(110.125,281.5688);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(203,71,130,0.906)").s().p("AgzAzQgTgvgMg0QAlgVArgEQArgEAqANQgnBCggBJQgYgbgnADg");
	this.shape_3.setTransform(100.475,307.8688);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DA4280").s().p("AgzAzQgTgvgMg0QAlgVArgEQArgEAqANQgnBCggBJQgYgbgnADg");
	this.shape_4.setTransform(94.625,323.8188);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(8).to({_off:false},0).wait(1).to({x:91.825,y:331.5188},0).wait(1).to({x:91.275,y:333.0688},0).wait(1).to({x:92.175,y:330.5688},0).wait(1).to({x:93.825,y:326.1188},0).wait(1).to({x:95.325,y:321.9188},0).wait(1).to({x:96.025,y:320.0688},0).wait(1));

	// Layer_5
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(57,122,147,0)").s().p("AhkA3QAWhEA+g+QBBAHA0AlQhVAqgnBBQgigXgrACg");
	this.shape_5.setTransform(155.675,259.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(123,99,139,0.408)").s().p("AhkA3QAWhEA+g+QBBAHA0AlQhVAqgnBBQgigXgrACg");
	this.shape_6.setTransform(150.825,290.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(171,82,134,0.706)").s().p("AhkA3QAWhEA+g+QBBAHA0AlQhVAqgnBBQgigXgrACg");
	this.shape_7.setTransform(147.325,313.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(203,71,130,0.906)").s().p("AhkA3QAWhEA+g+QBBAHA0AlQhVAqgnBBQgigXgrACg");
	this.shape_8.setTransform(144.925,328.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DA4280").s().p("AhkA3QAWhEA+g+QBBAHA0AlQhVAqgnBBQgigXgrACg");
	this.shape_9.setTransform(143.475,337.725);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},4).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(8).to({_off:false},0).wait(1).to({x:142.775,y:342.175},0).wait(1).to({x:142.625,y:343.075},0).wait(1).to({x:142.875,y:341.625},0).wait(1).to({x:143.275,y:339.075},0).wait(1).to({x:143.675,y:336.625},0).wait(1).to({x:143.825,y:335.525},0).wait(1));

	// Layer_6
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(57,122,147,0)").s().p("AAQBPQgOgkgbgaQgbgYgkgJQA3gtBEgTQAdAfANAqQAOAqgDAuQglgHgjAFg");
	this.shape_10.setTransform(268.36,184.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(64,127,181,0.408)").s().p("AAQBQQgOglgbgZQgbgZgkgJQA3gtBEgTQAdAgANApQAOApgDAvQglgHgjAGg");
	this.shape_11.setTransform(279.11,184.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(68,130,206,0.706)").s().p("AAQBQQgOglgbgZQgbgZgkgJQA3gtBEgTQAdAgANApQAOApgDAvQglgHgjAGg");
	this.shape_12.setTransform(286.86,184.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(72,133,222,0.906)").s().p("AAQBQQgOglgbgZQgbgZgkgJQA3gtBEgTQAdAgANApQAOApgDAvQglgHgjAGg");
	this.shape_13.setTransform(292.16,184.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4986E6").s().p("AAQBQQgOglgbgZQgbgZgkgJQA3gtBEgTQAdAgANApQAOApgDAvQglgHgjAGg");
	this.shape_14.setTransform(295.36,184.7);
	this.shape_14._off = true;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4986E6").s().p("AAQBPQgOgkgbgaQgbgYgkgJQA3gtBEgTQAdAfANAqQAOAqgDAuQglgHgjAFg");
	this.shape_15.setTransform(294.61,184.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10}]},4).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(8).to({_off:false},0).wait(1).to({x:296.91},0).wait(1).to({x:297.21},0).wait(1).to({x:296.71},0).wait(1).to({x:295.81},0).wait(1).to({x:295.01},0).to({_off:true},1).wait(1));

	// Layer_7
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(57,122,147,0)").s().p("AgzAnQgKglADguQA6gWA7AWQgnAwgUA0QgVgTgeACg");
	this.shape_16.setTransform(139.664,226.6562);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(82,154,161,0.408)").s().p("AgzAnQgKglADguQA6gWA7AWQgnAwgUA0QgVgTgeACg");
	this.shape_17.setTransform(138.414,252.1062);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(100,178,171,0.706)").s().p("AgzAnQgKglADguQA6gWA7AWQgnAwgUA0QgVgTgeACg");
	this.shape_18.setTransform(137.464,270.5562);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(112,194,178,0.906)").s().p("AgzAnQgKglADguQA6gWA7AWQgnAwgUA0QgVgTgeACg");
	this.shape_19.setTransform(136.864,283.1062);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#76C9B5").s().p("AgzAnQgKglADguQA6gWA7AWQgnAwgUA0QgVgTgeACg");
	this.shape_20.setTransform(136.464,290.7062);
	this.shape_20._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16}]},4).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(8).to({_off:false},0).wait(1).to({x:136.314,y:294.3562},0).wait(1).to({x:136.264,y:295.1062},0).wait(1).to({x:136.314,y:293.9062},0).wait(1).to({x:136.414,y:291.8062},0).wait(1).to({x:136.514,y:289.8062},0).wait(1).to({x:136.564,y:288.9062},0).wait(1));

	// Layer_8
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(57,122,147,0)").s().p("Ai/CUQgagogUgnQCIAaB1hCQBwg9Auh1QAfAUAhAPQguB9h1BKQhlBBh5AAQgWAAgWgCg");
	this.shape_21.setTransform(235.7,130.5827);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(134,152,125,0.408)").s().p("Ai/CUQgagogUgnQCJAaBzhCQBxg9Auh1QAgAUAgAPQguB9h1BKQhlBBh5AAQgWAAgWgCg");
	this.shape_22.setTransform(235.7,83.3827);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(190,174,109,0.706)").s().p("Ai/CUQgagogUgnQCJAaBzhCQBxg9Auh1QAgAUAgAPQguB9h1BKQhlBBh5AAQgWAAgWgCg");
	this.shape_23.setTransform(235.7,49.0327);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(228,188,98,0.906)").s().p("Ai/CUQgagogUgnQCJAaBzhCQBxg9Auh1QAgAUAgAPQguB9h1BKQhlBBh5AAQgWAAgWgCg");
	this.shape_24.setTransform(235.7,25.7827);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F6C35D").s().p("Ai/CUQgagogUgnQCJAaBzhCQBxg9Auh1QAgAUAgAPQguB9h1BKQhlBBh5AAQgWAAgWgCg");
	this.shape_25.setTransform(235.7,11.6827);
	this.shape_25._off = true;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F6C35D").s().p("Ai/CUQgagogUgnQCIAaB1hCQBwg9Auh1QAfAUAhAPQguB9h1BKQhlBBh5AAQgWAAgWgCg");
	this.shape_26.setTransform(235.7,15.0327);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21}]},4).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(8).to({_off:false},0).wait(1).to({y:4.9327},0).wait(1).to({y:3.5827},0).wait(1).to({y:5.7827},0).wait(1).to({y:9.6827},0).wait(1).to({y:13.3827},0).to({_off:true},1).wait(1));

	// Layer_9
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(57,122,147,0)").s().p("AhcAMQAvgDAjggQAiggANgxQAZAFAZgDQAKA3gHA1QgHA2gWAtQhZgYhAhFg");
	this.shape_27.setTransform(57.5735,207.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(71,154,176,0.408)").s().p("AhcAMQAvgEAjgfQAiggANgyQAZAHAZgEQAKA4gHA1QgHA0gWAvQhZgZhAhFg");
	this.shape_28.setTransform(37.8235,207.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(82,178,198,0.706)").s().p("AhcAMQAvgEAjgfQAiggANgyQAZAHAZgEQAKA4gHA1QgHA0gWAvQhZgZhAhFg");
	this.shape_29.setTransform(23.4735,207.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(89,194,212,0.906)").s().p("AhcAMQAvgEAjgfQAiggANgyQAZAHAZgEQAKA4gHA1QgHA0gWAvQhZgZhAhFg");
	this.shape_30.setTransform(13.7735,207.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5CC9DB").s().p("AhcAMQAvgEAjgfQAiggANgyQAZAHAZgEQAKA4gHA1QgHA0gWAvQhZgZhAhFg");
	this.shape_31.setTransform(7.8735,207.3);
	this.shape_31._off = true;

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5CC9DB").s().p("AhcAMQAvgDAjggQAiggANgxQAZAFAZgDQAKA3gHA1QgHA2gWAtQhZgYhAhFg");
	this.shape_32.setTransform(9.2735,207.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27}]},4).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(8).to({_off:false},0).wait(1).to({x:5.0235},0).wait(1).to({x:4.4735},0).wait(1).to({x:5.4235},0).wait(1).to({x:7.0235},0).wait(1).to({x:8.5735},0).to({_off:true},1).wait(1));

	// Layer_10
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(57,122,147,0)").s().p("AiTBGQBfACBFg8QBFg6ANhYQAYACAZgCQACBfg8BLQg8BNhfAWQgsgbgmgmg");
	this.shape_33.setTransform(225.7768,258.05);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(64,127,181,0.408)").s().p("AiTBHQBfAABFg7QBFg6ANhYQAYADAZgDQACBgg8BKQg8BNhfAWQgsgcgmgkg");
	this.shape_34.setTransform(225.7768,282.45);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(68,130,206,0.706)").s().p("AiTBHQBfAABFg7QBFg5ANhZQAYADAZgDQACBgg8BKQg8BMhfAXQgsgbgmglg");
	this.shape_35.setTransform(225.7768,300.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(72,133,222,0.906)").s().p("AiTBHQBfAABFg7QBFg6ANhYQAYADAZgDQACBgg8BKQg8BNhfAWQgsgbgmglg");
	this.shape_36.setTransform(225.7768,312.25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4986E6").s().p("AiTBGQBfACBFg8QBFg5ANhZQAYACAZgCQACBfg8BLQg8BMhfAXQgsgbgmgmg");
	this.shape_37.setTransform(225.7768,319.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4986E6").s().p("AiTBHQBfAABFg7QBFg6ANhYQAYADAZgDQACBfg8BLQg8BNhfAWQgsgbgmglg");
	this.shape_38.setTransform(225.7768,323.05);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#4986E6").s().p("AiTBHQBfABBFg8QBFg6ANhYQAYACAZgCQACBgg8BKQg8BNhfAWQgsgcgmgkg");
	this.shape_39.setTransform(225.7768,323.75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4986E6").s().p("AiTBHQBfAABFg7QBFg6ANhYQAYADAZgDQACBgg8BKQg8BNhfAWQgsgbgmglg");
	this.shape_40.setTransform(225.7768,322.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4986E6").s().p("AiTBHQBfAABFg7QBFg6ANhYQAYADAZgDQACBfg8BLQg8BMhfAXQgsgbgmglg");
	this.shape_41.setTransform(225.7768,320.55);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#4986E6").s().p("AiTBHQBfAABFg7QBFg5ANhZQAYADAZgDQACBgg8BKQg8BMhfAXQgsgcgmgkg");
	this.shape_42.setTransform(225.7768,318.65);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4986E6").s().p("AiTBGQBfACBFg8QBFg6ANhYQAYACAZgCQACBfg8BLQg8BNhfAWQgsgbgmgmg");
	this.shape_43.setTransform(225.7768,317.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_33}]},4).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).wait(1));

	// Layer_11
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(57,122,147,0)").s().p("AhkASQAdglAogZQApgaAxgHQAdAuANAwQggAFgbARQgaAPgQAYQgsgkg4gYg");
	this.shape_44.setTransform(247.1,225.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(134,152,125,0.408)").s().p("AhkASQAcglApgZQApgaAxgIQAdAvANAwQggAFgbARQgZAPgRAZQgsgmg4gXg");
	this.shape_45.setTransform(246.9,249);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(190,174,109,0.706)").s().p("AhkASQAcglApgZQApgZAxgJQAdAvANAwQggAFgbARQgaAPgQAZQgsgmg4gXg");
	this.shape_46.setTransform(246.7,265.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(228,188,98,0.906)").s().p("AhkASQAdglAogYQApgaAxgJQAdAvANAwQggAFgbARQgaAQgQAXQgsgkg4gYg");
	this.shape_47.setTransform(246.6,277.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F6C35D").s().p("AhkASQAcglApgZQAqgZAwgJQAdAvANAwQggAFgbARQgZAPgRAZQgsgmg4gXg");
	this.shape_48.setTransform(246.55,284.35);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F6C35D").s().p("AhkASQAdglApgZQApgaAwgIQAdAvANAwQggAFgbARQgZAPgRAZQgsgmg4gXg");
	this.shape_49.setTransform(246.5,287.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F6C35D").s().p("AhkASQAdglApgZQApgaAwgHQAdAuANAwQggAFgbARQgZAPgRAYQgsglg4gXg");
	this.shape_50.setTransform(246.5,288.35);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F6C35D").s().p("AhkASQAdglApgZQApgZAwgJQAdAvANAwQggAFgbARQgZAPgRAZQgsgmg4gXg");
	this.shape_51.setTransform(246.5,285.35);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F6C35D").s().p("AhkASQAcglApgYQAqgbAwgHQAdAuANAwQggAFgbARQgZAPgRAYQgsglg4gXg");
	this.shape_52.setTransform(246.55,283.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F6C35D").s().p("AhkASQAdglAogZQApgaAxgHQAdAuANAwQggAFgbARQgaAPgQAYQgsgkg4gYg");
	this.shape_53.setTransform(246.55,282.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_44}]},4).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49,p:{y:287.7}}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_49,p:{y:287.25}}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).wait(1));

	// Layer_12
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(57,122,147,0)").s().p("AgaAYQgtgWgyAFQAkgzA0gqQA2AOAqAlQApAkASA1QgpAKgmAXQgagqgrgVg");
	this.shape_54.setTransform(100.525,218.525);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(81,116,162,0.408)").s().p("AgaAYQgtgWgyAFQAkgzA0gqQA2AOAqAlQApAkASA1QgpAKgmAXQgagqgrgVg");
	this.shape_55.setTransform(79.525,250.975);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(98,112,173,0.706)").s().p("AgaAYQgtgWgyAFQAkgzA0gqQA2AOAqAlQApAkASA1QgpAKgmAXQgagqgrgVg");
	this.shape_56.setTransform(64.275,274.575);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(110,109,181,0.906)").s().p("AgaAYQgtgWgyAFQAkgzA0gqQA2AOAqAlQApAkASA1QgpAKgmAXQgagqgrgVg");
	this.shape_57.setTransform(53.925,290.575);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#736CB8").s().p("AgaAYQgtgWgyAFQAkgzA0gqQA2AOAqAlQApAkASA1QgpAKgmAXQgagqgrgVg");
	this.shape_58.setTransform(47.625,300.275);
	this.shape_58._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_54}]},4).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_58}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_58).wait(8).to({_off:false},0).wait(1).to({x:44.625,y:304.925},0).wait(1).to({x:44.025,y:305.875},0).wait(1).to({x:45.025,y:304.325},0).wait(1).to({x:46.725,y:301.675},0).wait(1).to({x:48.375,y:299.125},0).wait(1).to({x:49.125,y:297.975},0).wait(1));

	// Layer_13
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(57,122,147,0)").s().p("Ah1AiQAOhBAqhEQA0AGAtAXQAvAYAjAnQhgAqhLBAQgQgtgwgUg");
	this.shape_59.setTransform(271.325,243.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(82,154,161,0.408)").s().p("Ah1AiQAOhBAqhDQA0AFAtAXQAvAZAjAmQhgAqhLBBQgQgugwgUg");
	this.shape_60.setTransform(282.725,259.05);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(100,178,171,0.706)").s().p("Ah1AiQAOhBAqhDQA0AFAtAXQAvAZAjAmQhgAqhLBBQgQgugwgUg");
	this.shape_61.setTransform(291.025,270.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(112,194,178,0.906)").s().p("Ah1AiQAOhBAqhDQA0AFAtAXQAvAZAjAmQhgAqhLBBQgQgugwgUg");
	this.shape_62.setTransform(296.625,277.95);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#76C9B5").s().p("Ah1AiQAOhBAqhEQA0AGAtAYQAvAXAjAoQhgAphLBBQgQgugwgUg");
	this.shape_63.setTransform(300.025,282.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#76C9B5").s().p("Ah1AiQAOhBAqhDQA0AFAtAXQAvAYAjAnQhgAqhLBAQgQgtgwgUg");
	this.shape_64.setTransform(301.675,284.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#76C9B5").s().p("Ah1AiQAOhBAqhEQA0AGAtAXQAvAYAjAnQhgAqhLBAQgQgtgwgUg");
	this.shape_65.setTransform(301.475,284.55);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#76C9B5").s().p("Ah1AiQAOhBAqhDQA0AFAtAYQAvAYAjAnQhgAphLBBQgQgugwgUg");
	this.shape_66.setTransform(300.525,283.25);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#76C9B5").s().p("Ah1AiQAOhBAqhEQA0AGAtAYQAvAXAjAoQhgAphLBAQgQgtgwgUg");
	this.shape_67.setTransform(299.625,282.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_59}]},4).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64,p:{x:301.675,y:284.8}}]},1).to({state:[{t:this.shape_64,p:{x:301.975,y:285.25}}]},1).to({state:[{t:this.shape_65,p:{x:301.475,y:284.55}}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_65,p:{x:299.225,y:281.5}}]},1).wait(1));

	// Layer_14
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(57,122,147,0)").s().p("AgxBAQiFgrhphSQAhgTAXgWQBkBDB5AfQCPAjCbgWQgDAqgLAxQgjADgjAAQiEAAh5gng");
	this.shape_68.setTransform(83.95,155.8852);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(123,99,131,0.408)").s().p("AgxBAQiFgrhphSQAhgTAXgWQBkBDB5AfQCPAjCbgWQgDAqgLAxQgjADgjAAQiEAAh5gng");
	this.shape_69.setTransform(65.2,113.2352);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(171,82,119,0.706)").s().p("AgxBAQiFgrhphSQAggTAYgWQBkBDB5AfQCPAjCbgWQgCAqgLAxQgkADgjAAQiEAAh5gng");
	this.shape_70.setTransform(51.55,82.2852);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(203,71,111,0.906)").s().p("AgxBAQiFgrhphSQAggTAYgWQBlBDB4AfQCPAjCbgWQgCAqgLAxQgkADgjAAQiEAAh5gng");
	this.shape_71.setTransform(42.3,61.2852);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#DA426B").s().p("AgxBAQiFgrhphSQAhgTAXgWQBkBDB5AfQCPAjCbgWQgDAqgLAxQgjADgjAAQiEAAh5gng");
	this.shape_72.setTransform(36.75,48.5852);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#DA426B").s().p("AgxBAQiFgrhphSQAhgTAXgWQBlBDB4AfQCPAjCbgWQgCAqgMAxQgjADgjAAQiEAAh5gng");
	this.shape_73.setTransform(33.5,41.2352);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#DA426B").s().p("AgxBAQiFgrhphSQAggTAYgWQBlBDB4AfQCPAjCbgWQgDAqgKAxQgkADgjAAQiEAAh5gng");
	this.shape_74.setTransform(34.35,43.2352);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#DA426B").s().p("AgxBAQiFgrhphSQAggTAYgWQBlBDB4AfQCPAjCbgWQgCAqgLAxQgkADgjAAQiEAAh5gng");
	this.shape_75.setTransform(35.9,46.7352);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#DA426B").s().p("AgxBAQiFgrhphSQAggTAYgWQBkBDB5AfQCPAjCbgWQgDAqgKAxQgkADgjAAQiEAAh5gng");
	this.shape_76.setTransform(37.4,50.0852);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_68}]},4).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72,p:{x:36.75,y:48.5852}}]},1).to({state:[{t:this.shape_72,p:{x:34.05,y:42.4352}}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_72,p:{x:38.05,y:51.5852}}]},1).wait(1));

	// Layer_15
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(57,122,147,0)").s().p("AhagLQAjgcAqgNQAqgOAuAEQAPAwAAAuQgdgDgcAJQgbAIgSASQgfgqgvghg");
	this.shape_77.setTransform(136.55,159.74);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(134,152,125,0.408)").s().p("AhagLQAjgcAqgNQAqgOAuAEQAPAwAAAuQgdgDgcAJQgbAIgSASQgfgqgvghg");
	this.shape_78.setTransform(123.1,122.59);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(190,174,109,0.706)").s().p("AhZgLQAigcAqgNQAqgOAtAEQAPAwACAuQgegDgcAJQgaAIgUASQgegqgughg");
	this.shape_79.setTransform(113.35,95.59);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(228,188,98,0.906)").s().p("AhZgLQAigcAqgNQAqgOAuAEQAPAwABAuQgegDgcAJQgaAIgUASQgegqgughg");
	this.shape_80.setTransform(106.75,77.29);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F6C35D").s().p("AhagLQAjgcAqgNQAqgOAtAEQAQAwAAAuQgdgDgcAJQgbAIgSASQgfgqgvghg");
	this.shape_81.setTransform(102.75,66.24);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F6C35D").s().p("AhagLQAjgcAqgNQAqgOAtAEQAPAwABAuQgdgDgcAJQgbAIgSASQgfgqgvghg");
	this.shape_82.setTransform(100.85,60.89);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F6C35D").s().p("AhZgLQAigcAqgNQAqgOAuAEQAPAwABAuQgegDgcAJQgaAIgUASQgegqgughg");
	this.shape_83.setTransform(100.45,59.84);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F6C35D").s().p("AhagLQAjgcAqgNQAqgOAuAEQAPAwAAAuQgdgDgcAJQgbAIgSASQgfgqgvghg");
	this.shape_84.setTransform(101.05,61.54);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F6C35D").s().p("AhZgLQAigcAqgNQAqgOAtAEQAPAwABAuQgdgDgcAJQgbAIgSASQgfgqgughg");
	this.shape_85.setTransform(102.2,64.64);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F6C35D").s().p("AhZgLQAigcAqgNQAqgOAtAEQAQAwABAuQgegDgcAJQgaAIgUASQgegqgughg");
	this.shape_86.setTransform(103.25,67.54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_77}]},4).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84,p:{x:101.05,y:61.54}}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_84,p:{x:103.7,y:68.84}}]},1).wait(1));

	// Layer_16
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(57,122,147,0)").s().p("AAKAKQgogvg9gfQAvgcA2gIQAtAvAVA3QAUAygFAwQgRABgNAIQgNgzgmgsg");
	this.shape_87.setTransform(161.5172,142.875);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(71,154,176,0.408)").s().p("AAKAKQgogvg9gfQAvgcA2gIQAtAvAVA3QAUAygFAwQgRABgNAIQgNgzgmgsg");
	this.shape_88.setTransform(154.7172,102.275);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(82,178,198,0.706)").s().p("AAKAKQgogvg9gfQAvgcA2gIQAtAvAVA3QAUAygFAwQgRABgNAIQgNgzgmgsg");
	this.shape_89.setTransform(149.7672,72.825);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(89,194,212,0.906)").s().p("AAKAKQgogvg9gfQAvgcA2gIQAtAvAVA3QAUAygFAwQgRABgNAIQgNgzgmgsg");
	this.shape_90.setTransform(146.4172,52.825);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#5CC9DB").s().p("AAKAKQgogvg9gfQAvgcA2gIQAtAvAVA3QAUAygFAwQgRABgNAIQgNgzgmgsg");
	this.shape_91.setTransform(144.3672,40.725);
	this.shape_91._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_87}]},4).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_91}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_91).wait(8).to({_off:false},0).wait(1).to({x:143.4172,y:34.875},0).wait(1).to({x:143.2172,y:33.725},0).wait(1).to({x:143.5172,y:35.625},0).wait(1).to({x:144.1172,y:38.975},0).wait(1).to({x:144.6172,y:42.175},0).wait(1).to({x:144.8672,y:43.575},0).wait(1));

	// Layer_17
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(57,122,147,0)").s().p("AhXgTQAqgmA1gcQA+A9ASBjQgiADghAIQgmhPhGgag");
	this.shape_92.setTransform(219.75,168);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(123,99,139,0.408)").s().p("AhXgUQApglA1gcQA/A9ASBjQgiADghAIQgnhPhFgbg");
	this.shape_93.setTransform(208.8,116.35);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(171,82,134,0.706)").s().p("AhXgUQAqgkA0gdQA/A9ASBjQgiADghAIQgnhPhFgbg");
	this.shape_94.setTransform(200.85,78.85);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(203,71,130,0.906)").s().p("AhXgTQApglA1gdQA/A9ASBjQgiADghAIQgnhPhFgag");
	this.shape_95.setTransform(195.45,53.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#DA4280").s().p("AhXgUQAqgkA1gdQA+A9ASBjQgiADghAIQgmhPhGgbg");
	this.shape_96.setTransform(192.2,38);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#DA4280").s().p("AhXgUQApgkA1gdQA/A9ASBjQghADgiAIQgnhPhFgbg");
	this.shape_97.setTransform(190.6,30.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#DA4280").s().p("AhXgTQAqglA1gdQA+A9ASBjQghADgiAIQgmhPhGgag");
	this.shape_98.setTransform(190.3,29.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#DA4280").s().p("AhXgTQApgmA1gcQA/A9ASBjQgiADghAIQgnhPhFgag");
	this.shape_99.setTransform(190.8,31.55);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#DA4280").s().p("AhXgUQAqglA1gcQA+A9ASBjQghADgiAIQgmhPhGgbg");
	this.shape_100.setTransform(192.55,39.85);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#DA4280").s().p("AhXgTQAqgmA1gcQA+A9ASBjQgiADghAIQgmhPhGgag");
	this.shape_101.setTransform(192.95,41.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_92}]},4).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99,p:{x:190.8,y:31.55}}]},1).to({state:[{t:this.shape_99,p:{x:191.7,y:35.8}}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).wait(1));

	// Layer_18
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(57,122,147,0)").s().p("AiPBfQAjhxBhhiQBWALBGAzQhAAlgvAvQgoAqgaAtQgygdg9AHg");
	this.shape_102.setTransform(196.5,229.575);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(134,152,125,0.408)").s().p("AiQBfQAlhxBghiQBWALBGAzQhAAlgwAvQgoAqgZAtQgygdg+AHg");
	this.shape_103.setTransform(192.6,255.275);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(190,174,109,0.706)").s().p("AiQBfQAkhxBhhiQBWALBFAzQg/AlgwAvQgoAqgZAtQgygdg+AHg");
	this.shape_104.setTransform(189.8,273.925);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(228,188,98,0.906)").s().p("AiQBfQAlhxBghiQBXALBEAzQg/AlgvAvQgoAqgaAtQgygdg+AHg");
	this.shape_105.setTransform(187.9,286.575);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F6C35D").s().p("AiQBfQAlhxBghiQBWALBGAzQhAAlgwAvQgoAqgZAtQgygdg+AHg");
	this.shape_106.setTransform(186.75,294.225);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F6C35D").s().p("AiPBfQAjhxBhhiQBWALBGAzQhAAlgvAvQgoAqgaAtQgygdg9AHg");
	this.shape_107.setTransform(186.15,297.925);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#F6C35D").s().p("AiPBfQAjhxBhhiQBWALBGAzQhAAlgwAvQgoAqgZAtQgygdg9AHg");
	this.shape_108.setTransform(186.05,298.675);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F6C35D").s().p("AiPBfQAkhxBghiQBXALBEAzQg/AlgvAvQgoAqgaAtQgygdg9AHg");
	this.shape_109.setTransform(186.25,297.475);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F6C35D").s().p("AiQBfQAlhxBghiQBXALBEAzQg/AlgwAvQgnAqgaAtQgygdg+AHg");
	this.shape_110.setTransform(186.55,295.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_102}]},4).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107,p:{x:186.15,y:297.925}}]},1).to({state:[{t:this.shape_108,p:{x:186.05,y:298.675}}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_108,p:{x:186.85,y:293.325}}]},1).to({state:[{t:this.shape_107,p:{x:187,y:292.425}}]},1).wait(1));

	// Layer_19
	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(57,122,147,0)").s().p("AhuBDQAphYBShAQA4ARAqAoQhcAqgxBIQgkgVgsACg");
	this.shape_111.setTransform(294.225,150.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(64,127,181,0.408)").s().p("AhuBEQAphZBShAQA4ARAqAoQhcAqgxBIQgkgVgsADg");
	this.shape_112.setTransform(283.625,103.85);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(68,130,206,0.706)").s().p("AhuBEQAphZBShAQA4ARAqAoQhcAqgxBIQgkgVgsADg");
	this.shape_113.setTransform(275.925,69.75);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(72,133,222,0.906)").s().p("AhuBDQAphXBShBQA4AQAqApQhcAqgxBIQgkgVgsACg");
	this.shape_114.setTransform(270.675,46.65);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#4986E6").s().p("AhuBEQAphZBShAQA4AQAqApQhcAqgxBIQgkgVgsADg");
	this.shape_115.setTransform(267.525,32.65);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#4986E6").s().p("AhuBDQAphYBShAQA4AQAqApQhcAqgxBIQgkgVgsACg");
	this.shape_116.setTransform(266.175,26.75);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#4986E6").s().p("AhuBDQAphYBShAQA4ARAqAoQhcAqgxBIQgkgVgsACg");
	this.shape_117.setTransform(267.075,30.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#4986E6").s().p("AhuBDQAphXBShBQA4ARAqAoQhcAqgxBIQgkgVgsACg");
	this.shape_118.setTransform(267.925,34.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_111}]},4).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115,p:{x:267.525,y:32.65}}]},1).to({state:[{t:this.shape_115,p:{x:266.025,y:25.9}}]},1).to({state:[{t:this.shape_115,p:{x:265.725,y:24.55}}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117,p:{x:267.075,y:30.6}}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_117,p:{x:268.275,y:35.95}}]},1).wait(1));

	// Layer_20
	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(57,122,147,0)").s().p("Ag0A6QgSgugDg6QAigSAmgEQAlgFAmAJQgqBCgTBFQgcgVglAIg");
	this.shape_119.setTransform(284.575,122.6607);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(57,122,147,0.408)").s().p("Ag0A6QgSgugDg6QAigSAmgEQAlgFAmAJQgqBCgTBFQgcgVglAIg");
	this.shape_120.setTransform(294.975,77.9607);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(57,122,147,0.706)").s().p("Ag0A6QgSgugDg6QAigSAmgEQAlgFAmAJQgqBCgTBFQgcgVglAIg");
	this.shape_121.setTransform(302.575,45.5107);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(57,122,147,0.906)").s().p("Ag0A6QgSgugDg6QAigSAmgEQAlgFAmAJQgqBCgTBFQgcgVglAIg");
	this.shape_122.setTransform(307.725,23.5107);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#397A93").s().p("Ag0A6QgSgugDg6QAigSAmgEQAlgFAmAJQgqBCgTBFQgcgVglAIg");
	this.shape_123.setTransform(310.825,10.1607);
	this.shape_123._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_119}]},4).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_123}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_123).wait(8).to({_off:false},0).wait(1).to({x:312.325,y:3.7607},0).wait(1).to({x:312.625,y:2.4607},0).wait(1).to({x:312.125,y:4.5607},0).wait(1).to({x:311.275,y:8.2607},0).wait(1).to({x:310.425,y:11.7607},0).wait(1).to({x:310.075,y:13.3107},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,-11.4,324.8,362.09999999999997);


(lib.sb_car = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.car();
	this.instance.setTransform(0,0,1.66,1.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,830,531.2);


(lib.sb_bg_normal = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BG1();
	this.instance.setTransform(-1000,42,3.5567,3.557);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1000,42,3450,889.3);


(lib.sb_bg_blur = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bg_blur();
	this.instance.setTransform(-1070,47,3.5567,3.5568);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1070,47,3450,889.2);


(lib.sb_tthappy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// happy
	this.instance = new lib.mo_tthappy();
	this.instance.setTransform(146,58.4,1,1,0,0,0,116,28.4);
	this.instance.shadow = new cjs.Shadow("rgba(3,0,0,0.576)",6,6,68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-37,379,204);


(lib.sb_bgsentra = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mo_bgsentra();
	this.instance.setTransform(223.8,23.4,1,1,0,0,0,223.8,23.4);
	this.instance.compositeOperation = "lighten";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,465.2,46.9);


(lib.sb_bghappy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bg1
	this.instance = new lib.mo_bghappy();
	this.instance.setTransform(268.8,38,1,1,0,0,0,268.8,38);
	this.instance.compositeOperation = "lighten";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,456.8,76);


(lib.sb_bgfree = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_tt_free
	this.instance = new lib.sb_ttfree("synched",37);
	this.instance.setTransform(65.2,38.2,1,1,0,0,0,39.7,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38));

	// bg_free
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C3356C").s().p("AqZF6ID2rzIQ9AAIkALzg");
	this.shape.setTransform(66.6,37.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(38));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133.2,75.7);


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
	this.instance = new lib.sb_car("synched",0);
	this.instance.setTransform(-267.55,126.5,0.6303,0.6303,0,0,0,415.1,265.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:415,scaleX:1,scaleY:1,x:748.55,y:265.55},10,cjs.Ease.cubicOut).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-529.2,-40.8,1692.8,572.0999999999999);


(lib.sb_sc4btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_arr_copy
	this.instance = new lib.sb_arr("single",0);
	this.instance.setTransform(170.35,27.15,1,1,0,0,0,10.6,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({mode:"synched",loop:false},0).wait(61));

	// sb_arr
	this.instance_1 = new lib.sb_arr("single",0);
	this.instance_1.setTransform(160.85,27.15,1,1,0,0,0,10.6,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({mode:"synched",loop:false},0).wait(64));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhaBbQA7gGAngRQgKgLgagQQgSAIgSAHQgJgQgKgHQBFgVAhglQguAehGAOQgFgPgJgKQAxgHAkgRQgSgOgQgJIgdAOQgJgOgLgJQA+gTAfglIAgAHIgMANIAzAAIAFgCIATAMQgRAggjAaIAeAHQgIAKgIAHIAuAAIAFgCIAUAKQgVA1g1AdQgsAZhHAKQgDgNgKgPgAgCAaQAZAOAMAMQAWgPANgTIg7AAgAgihCQAWALAMAKQAVgNAOgPIg8AAg");
	this.shape.setTransform(136.475,27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah2BWQAhgFAYgKQgNgKgNgSIAXgKIgbAAIAAhnIBLAAIAAgPIhgAAIAAgbIDcAAIAAAbIhdAAIAAAPIBNAAIAABnIhQAAQgGAUgMAPQAWAIAhACQAYACAuAAQgKALgDATQhegCgrgTQgaAPgrAJQgKgTgIgIgAgjA3QAJgJAGgNIgnAAQAJANAPAJgAAPAJIAwAAIAAgQIgwAAgAg+AJIAuAAIAAgQIguAAgAAPgdIAwAAIAAgRIgwAAgAg+gdIAuAAIAAgRIguAAg");
	this.shape_1.setTransform(106.4,28.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah1BpQASgdAAg/IAAglQgJgIgLgIQAagcAMgxIAbAFIgGASIAXAAIAEgBIARAKQgGARgIAQIAdAAIAAAPQAZgNAFgeIgcAAIAAgZIBxAAIAAAKQgCA5gHAHQgGAIgKABQgMABgOgBQAAgOgHgKIATABQAEAAACgDQADgDACgdIgdAAQgEAWgIAOQgJAQgTAKIAWAEIgDAQIAMAAIAAgXIAdAAIAAAXIAmAAIAAAZIgmAAIAAAWIArAAIAAAaIgrAAIAAAqIgdAAIAAgqIgvAAIAAgaIAvAAIAAgWIgVAAQgEAJgGAKQgFgEgNgGIAAA1QAAASgKAGQgKAFgYAAQgBgNgIgMIAYAAQAEAAAAgEIAAglIgzAAQgEAqgQAZQgIgJgMgFgAgBAfQALgUAFgcIgGACQgDgJgHgIgAgpAeIAPAAIAAgVIgPAAgAhLAeIAOAAIAAgVIgNAAgAgpgMIAPAAIAAgTIgPAAgAhKgMIANAAIAAgTIgNAAgAhNg0IAWAAIAHgTIgVAAg");
	this.shape_2.setTransform(75.6,27.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhDBQIAtABQAIgBAAgFIAAhwQAbgPAegaIiRAAIAAgeICuAAIAHgCIAYASQgpArguAbIAABiQAAAMgDAHQgEAHgJADQgOAGgpAAQgCgQgKgPg");
	this.shape_3.setTransform(45.4,28.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(75));

	// mo_sc4_btn
	this.instance_2 = new lib.mo_sc4btn();
	this.instance_2.setTransform(192.8,29.4,1,1,0,0,0,200.5,37.1);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,0.098)",7,7,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8,419,92);


(lib.sb_sc47060 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _060
	this.instance = new lib.mo_sc47060();
	this.instance.setTransform(102.5,18.8,1,1,0,0,0,99.5,15.8);
	this.instance.shadow = new cjs.Shadow("rgba(33,24,22,0.749)",3,3,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,220,53);


(lib.sb_sc42888 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _888
	this.instance = new lib.mo_sc42888();
	this.instance.setTransform(142.1,21.3,1,1,0,0,0,139.1,18.3);
	this.instance.shadow = new cjs.Shadow("rgba(33,24,22,0.749)",3,3,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,300,58);


(lib.sb_sc472 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mo_sc472();
	this.instance.setTransform(111.5,22.4,1,1,0,0,0,108.5,19.4);
	this.instance.shadow = new cjs.Shadow("rgba(33,24,22,0.749)",3,3,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,239,60);


(lib.an_sc4btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// an_sc4_btn
	this.instance = new lib.sb_sc4btn("synched",0,false);
	this.instance.setTransform(201.5,38.5,1,1,0,0,0,201.5,38.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},15).to({alpha:1},6).to({startPosition:67},67).to({_off:true},1).wait(49));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8,419,92);


(lib.an_sc47060 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc4_7060
	this.instance = new lib.sb_sc47060("synched",0);
	this.instance.setTransform(106,23,1,1,0,0,0,106,23);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:356.45,alpha:1},10,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,471.5,53);


(lib.an_sc42888 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc4_2888
	this.instance = new lib.sb_sc42888("synched",0);
	this.instance.setTransform(453.85,25.5,1,1,0,0,0,146,25.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({x:146,y:26.35,alpha:1},11,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,608.9,59.9);


(lib.an_sc472 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc4_72
	this.instance = new lib.sb_sc472("synched",0);
	this.instance.setTransform(115.5,26,1,1,0,0,0,115.5,26);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,239,60);


(lib.an_sc3tech = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_tech
	this.instance = new lib.sb_sc3tech("synched",0);
	this.instance.setTransform(152.3,9.8,1,1,0,0,0,85.9,9.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:85.9,alpha:1},18,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,238.2,19.6);


(lib.an_sc3same = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_same
	this.instance = new lib.sb_sc3same("synched",0);
	this.instance.setTransform(62.2,9.8,1,1,0,0,0,62.2,9.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:117.7,alpha:1},18,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,19.5);


(lib.an_sc3177 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_177
	this.instance = new lib.sb_sc3177("synched",0);
	this.instance.setTransform(99.45,17.2,0.7725,0.7725,0,0,0,97.2,16.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,y:17.15,alpha:1},19,cjs.Ease.backOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,198.70000000000002,34.3);


(lib.an_sc3_39 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(34.9,18.3,0.7022,0.7022,0,0,0,33.8,17.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,y:18.25,alpha:1},19,cjs.Ease.backOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,69.60000000000001,36.4);


(lib.an_ttlight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_tt_light
	this.instance = new lib.sb_ttlight("synched",0);
	this.instance.setTransform(82,9.8,1,1,0,0,0,82,9.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({alpha:1,startPosition:29},7).to({startPosition:94},65).to({_off:true},1).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163.9,19.6);


(lib.an_ttJBL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_tt_JBL
	this.instance = new lib.sb_ttJBL("synched",0);
	this.instance.setTransform(83.2,9.8,1,1,0,0,0,83.2,9.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({alpha:1,startPosition:29},8).to({startPosition:93},64).to({_off:true},1).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,166.3,19.5);


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

	// sb_sc2_line
	this.instance = new lib.sb_sc2line("synched",0);
	this.instance.setTransform(52.35,66,1,1,0,0,0,10.6,40.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({alpha:1},9).wait(31));

	// sb_tt_set
	this.instance_1 = new lib.sb_ttset_1("synched",0);
	this.instance_1.setTransform(488.35,64.7,1,1,0,0,0,102.9,39.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({x:173.25,y:64.95,alpha:1},9,cjs.Ease.cubicOut).to({startPosition:0},4).wait(31));

	// sb_tt_price
	this.instance_2 = new lib.sb_ttprice("synched",0);
	this.instance_2.setTransform(470.5,120.95,1,1,0,0,0,54.8,6.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({x:226.4,alpha:1},9,cjs.Ease.cubicOut).to({startPosition:0},4).wait(31));

	// sb_sc2_bg1
	this.instance_3 = new lib.sb_sc2bg1("synched",0);
	this.instance_3.setTransform(552.85,69,1,1,0,0,0,162.9,69);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:162.9,alpha:1},9,cjs.Ease.cubicOut).wait(37));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,715.8,138.2);


(lib.an_sc2bg3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_bg3
	this.instance = new lib.sb_sc2bg3("synched",0);
	this.instance.setTransform(1388.15,69,1,1,0,0,0,278.9,69);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:278.9,startPosition:29},13,cjs.Ease.cubicOut).to({startPosition:5},66).to({_off:true},1).wait(22));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1667.1,138.2);


(lib.an_sc2bg2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_bg2
	this.instance = new lib.sb_sc2bg2("synched",0);
	this.instance.setTransform(48.05,62.1,1,1,0,0,0,226.3,62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:757.25,mode:"single",startPosition:29},14,cjs.Ease.cubicOut).to({startPosition:29},65).to({_off:true},1).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.2,0,1161.8,124.1);


(lib.an_sc2_pic2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_pic2
	this.instance = new lib.sb_sc2_pic2("synched",0);
	this.instance.setTransform(875,142.25,1,1,0,0,0,433.2,261.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({x:273.05},11,cjs.Ease.cubicOut).to({startPosition:0},65).to({_off:true},1).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1136.8,162);


(lib.an_sc2_pic1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_pic1
	this.instance = new lib.sb_sc2_pic1("synched",0);
	this.instance.setTransform(77.7,56.5,1,1,0,0,0,259.5,173.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({x:487.55,mode:"single"},10,cjs.Ease.cubicOut).to({startPosition:0},64).to({_off:true},1).wait(18));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,709.9,149.2);


(lib.sb_sc0bgt2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sc0_bg_t2
	this.instance = new lib.mo_sc0_bgt2();
	this.instance.setTransform(200,59.8,1,1,0,0,0,200,59.8);
	this.instance.compositeOperation = "lighten";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,-3.7,483.5,126.9);


(lib.an_sc0t2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc0_100
	this.instance = new lib.sb_sc0100("synched",0);
	this.instance.setTransform(192.45,67.2,1.6406,1.6406,0,0,0,93.9,41);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,y:67.15,alpha:1},10,cjs.Ease.cubicOut).wait(1));

	// sb_sc0_no
	this.instance_1 = new lib.sb_sc0no("synched",0);
	this.instance_1.setTransform(190.7,71.65,1,1,0,0,0,168.3,42);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},10,cjs.Ease.cubicOut).wait(1));

	// sb_sc0_bg_t2
	this.instance_2 = new lib.sb_sc0bgt2("synched",0);
	this.instance_2.setTransform(200,68,1,1,0,0,0,200,59.8);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},10,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,0,483.5,134.3);


(lib.an_sc0t1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc0_taiwan
	this.instance = new lib.sb_sc0taiwan("synched",0);
	this.instance.setTransform(151,143.9,1,1,0,0,0,151,30.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:480.3,y:118.3},9,cjs.Ease.cubicOut).wait(1));

	// sb_sc0_name
	this.instance_1 = new lib.sb_sc0name("synched",0);
	this.instance_1.setTransform(143.5,94.5,1,1,0,0,0,143.5,38.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:476.3,y:64.55,alpha:1},10,cjs.Ease.cubicOut).wait(1));

	// sb_sc0_bg_t1
	this.instance_2 = new lib.sb_sc0bgt1("synched",0);
	this.instance_2.setTransform(552.6,81.2,1,1,0,0,0,241,81.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},5,cjs.Ease.cubicOut).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-2.2,890.3,174.89999999999998);


(lib.an_sc0_man = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc0_man
	this.instance = new lib.sb_sc0_man("synched",0);
	this.instance.setTransform(-14.45,481.65,1.0935,1.0935,0,0,0,299.9,447.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:-17.65,y:512.15,alpha:1},12,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276.5,592.6);


(lib.title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_tt_set
	this.instance = new lib.sb_ttset("synched",0);
	this.instance.setTransform(687.3,155.7,1,1,0,0,0,137.2,10.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:349.95,alpha:1},9,cjs.Ease.cubicOut).to({startPosition:0},65).to({_off:true},1).wait(75));

	// sb_bg_set
	this.instance_1 = new lib.sb_bgset("synched",0);
	this.instance_1.setTransform(721.8,154.9,1,1,0,0,0,174.4,16.5);
	this.instance_1.alpha = 0.8984;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:362.9,y:154.95},9,cjs.Ease.quartOut).to({startPosition:0},65).to({_off:true},1).wait(75));

	// sb_bg_free
	this.instance_2 = new lib.sb_bgfree("synched",0);
	this.instance_2.setTransform(461.6,140.7,1,0.0602,0,180,0,66.6,38.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:37.8,scaleY:1,skewX:0,y:100.55,alpha:1,startPosition:23},9,cjs.Ease.cubicOut).to({startPosition:12},65).to({_off:true},1).wait(75));

	// sb_tt_happy
	this.instance_3 = new lib.sb_tthappy("synched",0);
	this.instance_3.setTransform(13.05,105.65,1,1,0,0,0,153,65.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:278.5,y:108.05,alpha:1},9,cjs.Ease.backOut).to({startPosition:0},65).to({_off:true},1).wait(75));

	// sb_bg_happy
	this.instance_4 = new lib.sb_bghappy("synched",0);
	this.instance_4.setTransform(268.8,100.6,1,1,0,0,0,268.8,38);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1,startPosition:37},14).to({startPosition:7},60).to({_off:true},1).wait(75));

	// sb_tt_sentra
	this.instance_5 = new lib.sb_ttsentra("synched",0);
	this.instance_5.setTransform(360.4,29.9,1,1,0,0,0,144.8,15.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({y:39.65,alpha:1,startPosition:37},11,cjs.Ease.cubicOut).to({startPosition:7},60).to({_off:true},1).wait(75));

	// sb_bg_sentra
	this.instance_6 = new lib.sb_bgsentra("synched",0);
	this.instance_6.setTransform(561.35,39.1,0.0836,1,0,0,0,223.6,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:223.8,scaleX:1,x:313.65,y:39.15,startPosition:37},14,cjs.Ease.cubicOut).to({startPosition:7},60).to({_off:true},1).wait(75));

	// sb_tt_all
	this.instance_7 = new lib.sb_ttall("synched",0);
	this.instance_7.setTransform(360.5,-16.1,1,1,0,0,0,141.6,3.4);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:-3.1,alpha:1,startPosition:37},14,cjs.Ease.cubicOut).to({startPosition:7},60).to({_off:true},1).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.9,-19.5,1073.2,230.3);


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

	// an_sc4_72
	this.instance = new lib.an_sc472("synched",0,false);
	this.instance.setTransform(314.4,136.45,1.4292,1.4292,0,0,0,115.5,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(73).to({startPosition:9},0).to({_off:true},1).wait(15));

	// an_sc4_2888
	this.instance_1 = new lib.an_sc42888("synched",0,false);
	this.instance_1.setTransform(584.7,210.35,1,1,0,0,0,299.9,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(73).to({startPosition:16},0).to({_off:true},1).wait(15));

	// an_sc4_7060
	this.instance_2 = new lib.an_sc47060("synched",0,false);
	this.instance_2.setTransform(32.5,208.3,1,1,0,0,0,231.7,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(73).to({startPosition:14},0).to({_off:true},1).wait(15));

	// an_sc4_btn
	this.instance_3 = new lib.an_sc4btn("synched",0,false);
	this.instance_3.setTransform(871,268.65,1,1,0,0,0,201.5,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(73).to({startPosition:73},0).to({_off:true},1).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.2,96.6,1284.7,218.6);


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

	// an_sc3_tech
	this.instance = new lib.an_sc3tech("synched",0,false);
	this.instance.setTransform(528.2,174.35,1,1,0,0,0,119.1,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

	// an_sc3_39
	this.instance_1 = new lib.an_sc3_39("synched",0,false);
	this.instance_1.setTransform(369.95,167.1,1,1,0,0,0,34.8,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

	// an_sc3_177
	this.instance_2 = new lib.an_sc3177("synched",0,false);
	this.instance_2.setTransform(498.6,120.35,1,1,0,0,0,99.4,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35));

	// an_sc3_same
	this.instance_3 = new lib.an_sc3same("synched",0,false);
	this.instance_3.setTransform(301.75,122.3,1,1,0,0,0,90,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35));

	// an_sc3_rect
	this.instance_4 = new lib.an_sc3rect("synched",0,false);
	this.instance_4.setTransform(457.25,143.7,1.0781,1,0,0,0,173.2,59.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(211.8,83.8,499.40000000000003,119.89999999999999);


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

	// an_sc2_tt
	this.instance = new lib.an_sc2tt("synched",0,false);
	this.instance.setTransform(1188.05,125.9,1.5425,1.5425,0,0,0,357.9,69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(51).to({startPosition:45},0).to({_off:true},1).wait(27).to({_off:false},0).wait(1));

	// an_tt_JBL
	this.instance_1 = new lib.an_ttJBL("synched",0,false);
	this.instance_1.setTransform(-286.6,174.85,1.4591,1.4591);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(51).to({startPosition:51},0).to({_off:true},1).wait(27).to({_off:false,startPosition:79},0).wait(1));

	// an_tt_light
	this.instance_2 = new lib.an_ttlight("synched",0,false);
	this.instance_2.setTransform(285.45,385.45,1.4591,1.4591);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(51).to({startPosition:51},0).to({_off:true},1).wait(27).to({_off:false,startPosition:79},0).wait(1));

	// an_sc2_pic1
	this.instance_3 = new lib.an_sc2_pic1("synched",0,false);
	this.instance_3.setTransform(-387.05,108.85,1.4591,1.4591,0,0,0,354.9,74.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(51).to({startPosition:51},0).to({_off:true},1).wait(27).to({_off:false,startPosition:79},0).wait(1));

	// an_sc2_bg2
	this.instance_4 = new lib.an_sc2bg2("synched",0,false);
	this.instance_4.setTransform(-438.3,142.05,1.4591,1.4591,0,0,0,491.8,62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(51).to({startPosition:51},0).to({_off:true},1).wait(27).to({_off:false,startPosition:79},0).wait(1));

	// an_sc2_pic2
	this.instance_5 = new lib.an_sc2_pic2("synched",0,false);
	this.instance_5.setTransform(630.1,317.75,1.4591,1.4591,0,0,0,568.4,81);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(51).to({startPosition:51},0).to({_off:true},1).wait(27).to({_off:false,startPosition:79},0).wait(1));

	// an_sc2_bg3
	this.instance_6 = new lib.an_sc2bg3("synched",0,false);
	this.instance_6.setTransform(642.15,263.95,1.4591,1.4591,0,0,0,582.6,69.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(51).to({startPosition:51},0).to({_off:true},1).wait(27).to({_off:false,startPosition:79},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1415.9,0,3640.4,435.9);


(lib.scc0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// an_sc0_ribb
	this.instance = new lib.an_sc0ribb("synched",0,false);
	this.instance.setTransform(175.45,248.3,1.2565,1.2565,0,0,0,158.7,171.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({startPosition:14},0).to({_off:true},1).wait(51));

	// an_sc0_man
	this.instance_1 = new lib.an_sc0_man("synched",0,false);
	this.instance_1.setTransform(609.25,327.75,1.2025,1.2025,0,0,0,138.3,296.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({startPosition:21},0).to({_off:true},1).wait(51));

	// an_sc0_t2
	this.instance_2 = new lib.an_sc0t2("synched",0,false);
	this.instance_2.setTransform(210.35,329.05,1.2565,1.2565,0,0,0,200,67.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38).to({startPosition:10},0).to({_off:true},1).wait(51));

	// an_sc0_t1
	this.instance_3 = new lib.an_sc0t1("synched",0,false);
	this.instance_3.setTransform(66.1,197.35,1.2565,1.2565,0,0,0,396.8,87.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(38).to({startPosition:10},0).to({_off:true},1).wait(51));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-517.9,-28.3,1293.4,712.4);


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
	this.instance.setTransform(485.15,95.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(299));

	// scc4
	this.instance_1 = new lib.scc4("synched",0);
	this.instance_1.setTransform(1209.6,279.5,0.5,0.5,0,0,0,387.6,152);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(225).to({_off:false},0).wait(74));

	// scc2
	this.instance_2 = new lib.scc2("synched",0,false);
	this.instance_2.setTransform(835.4,114.3,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(97).to({_off:false},0).to({mode:"single",startPosition:79},52).to({regX:0,regY:0,scaleX:0.0392,scaleY:0.0392,x:956.95,y:214.1,alpha:0},5).to({_off:true},1).wait(144));

	// title
	this.instance_3 = new lib.title("synched",0,false);
	this.instance_3.setTransform(1126.2,219.75,0.8309,0.8309,0,0,0,268.9,86.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(46).to({_off:false},0).to({_off:true},51).wait(127).to({_off:false,regY:86.2,scaleX:0.6735,scaleY:0.6735,x:1106.95,y:181.85},0).wait(75));

	// scc0
	this.instance_4 = new lib.scc0("synched",0,false);
	this.instance_4.setTransform(969.15,221.5,0.5,0.5,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:29},39).to({x:665.6,alpha:0},7,cjs.Ease.cubicOut).to({_off:true},6).wait(247));

	// an_car1
	this.instance_5 = new lib.an_car1("synched",0,false);
	this.instance_5.setTransform(610.1,212.35,0.5117,0.5117,0,0,0,261.4,171.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:false},0).to({startPosition:33},58).to({_off:true},1).wait(62).to({_off:false,regX:581.7,regY:265.5,scaleX:0.5825,scaleY:0.5825,x:767.05,y:250.1,startPosition:0},0).to({startPosition:33},60).to({regX:581.8,regY:265.9,scaleX:0.5249,scaleY:0.5249,x:744.2,y:260.85},8).wait(71));

	// scc3
	this.instance_6 = new lib.scc3("synched",0,false);
	this.instance_6.setTransform(1120.6,322.65,0.999,0.999,0,0,0,308.6,251.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(160).to({_off:false},0).to({mode:"single",startPosition:34},58).to({regX:308.4,regY:251.6,scaleX:0.5,scaleY:0.5,x:965.4,y:221.45,alpha:0,mode:"synched",loop:false},6).to({_off:true},1).wait(74));

	// sb_bg_normal
	this.instance_7 = new lib.sb_bg_normal("synched",0);
	this.instance_7.setTransform(969.7,222.9,0.2861,0.2861,0,0,0,697.2,490);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(45).to({_off:false},0).to({alpha:1},9).to({startPosition:0},43).to({alpha:0},8).to({_off:true},1).wait(119).to({_off:false},0).to({alpha:1},9).wait(65));

	// sb_bg_blur
	this.instance_8 = new lib.sb_bg_blur("synched",0);
	this.instance_8.setTransform(976,222.75,0.2861,0.2861,0,0,0,696.6,489.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:988},37).to({startPosition:0},8).to({x:974.5},108).to({regX:697,regY:490,scaleX:0.5,scaleY:0.5,x:883.5,y:221.5},13).to({startPosition:0},50).to({regX:697.1,scaleX:0.4525,scaleY:0.4525,x:902.65,y:221.8},2).to({regX:696.6,regY:489.4,scaleX:0.2861,scaleY:0.2861,x:975.5,y:222.75},7).to({x:974.5},9).wait(65));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1947.6,444.6);


// stage content:
(lib._970x250_yahoo = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(489.2,125.5,1,1,0,0,0,973.8,222.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(298).to({mode:"single",startPosition:298},0).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EhNVgVFMCarAAAMAAAAqLMiarAAAg");
	this.shape.setTransform(485,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhNVAVGMAAAgqLMCarAAAMAAAAqLg");
	this.shape_1.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(299));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,28.2,1462.6,319.6);
// library properties:
lib.properties = {
	id: '66A39164CE1D42F78FD0EAEEBAA0ECC2',
	width: 970,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BG1.jpg", id:"BG1"},
		{src:"images/bg_blur.jpg", id:"bg_blur"},
		{src:"images/car.png", id:"car"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/sc0_man.png", id:"sc0_man"},
		{src:"images/sc2_pic1.jpg", id:"sc2_pic1"},
		{src:"images/sc2_pic2.jpg", id:"sc2_pic2"}
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
an.compositions['66A39164CE1D42F78FD0EAEEBAA0ECC2'] = {
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