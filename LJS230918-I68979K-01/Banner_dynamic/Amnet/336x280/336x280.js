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
p.nominalBounds = new cjs.Rectangle(0,0,754,516);


(lib.bg_blur = function() {
	this.initialize(img.bg_blur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,754,516);


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
	this.shape.setTransform(172.9,10.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAlBZQh5AFgIADIgBAAIABgBIgEgSQAGgBAKgGQAGgDASgOIg0AAIAEgRIApAAIALg/QgSALgUAKQgFgLgGgFQApgQAdgaIg3AAIADgRIBFAAQAHgIAIgNIAUAEIgMARIBkAAIgDARIg3AAQAXAbAgANQgKAHgGAJQgRgJgQgOIAAADIhXAAIgCAMIBXAAIgCAOIhYAAIgCALIBXAAIgCAOIhXAAIgCANICCAAIgEARIgyAAQAUAVALARIgUAKgAg9BNIBXgDIgLgOIAOgGIg5AAQgRANgQAKgAgcgrIBIAAIgQgUIgiAAQgLAMgLAIg");
	this.shape_1.setTransform(140.825,10.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhuBUQAlgKASgXQANgQAJgjIg5AAIAEgSIBWAAIAPhTIAVAAIgPBTIBaAAIgEASIg9AAIgNBJQgBAGACACQABABAGAAIAZAAQAGAAADgGQADgGAFgYQAFAFANAEQgHAcgHAJQgHAKgPAAIgeAAQgQAAgFgGQgFgGADgRIANhJIgkAAQgLApgPAVQgVAcgqAMQgDgLgHgHgAg5hUIAUgHQAPAfABAXIgVAIQgCgZgNgegAAzglQAWgbAOgdIAVAIQgZAmgQARg");
	this.shape_2.setTransform(107.525,10.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdBmIADgSIiOAAIACgPIAgAAIAKg4IgZAAIADgNIgKgGQAPgMAFgWIACgNIBQAAIgFAjIhEAAQgGAMgGAGICvAAIgDANIgaAAIgKA4IAfAAIgCAPIggAAIgDASgAg3BFIBZAAIACgKIhaAAgAgzAvIBZAAIACgLIhaAAgAgvAXIBaAAIABgKIhaAAgAghgdIASAAIACgNIgSAAgAhBgdIARAAIACgNIgQAAgAAzgNQgSAIgcAEQgBgIgEgGQATgCARgGQgKgIgGgMIABgBIgHAAIACgLIgHgJQAVgHACgOIACgKIA5AAIgDATQgBAGADAAIAVgBIgBANQgEABgIAAIgOAAQgKAAgCgFQgDgEACgKIABgFIgZAAQgDAQgRAJIA6AAIADgBIAKAFQgKARgUAMQAQAGASACQgIAGgEAIQgWgDgRgJgAA1geQALgFAJgJIgkAAQAFAIALAGgAhOg8IACgLIAhAAIACgJIgoAAIACgLIAoAAIABgLIATAAIgCALIAmAAIgCALIgmAAIgBAJIAgAAIgCALg");
	this.shape_3.setTransform(75.925,10.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah1BeQAUgZAKg3IgMACIAAgQIAPgCIANhIIASAAIALgbIASAEIgMAXIAZAAIgLBAIALgBIgCAPIgMABIgNBMQgCAMgIAEQgGADgWAAQABgGgDgKIATAAQAEAAAAgEIANhIIgcAEQgLA+gXAdQgGgHgHgCgAhDgEIAcgEIAJgxIgcAAgAgHBnIAHgnQgKAWgOAPQgJgIgGgCQAbgcAKg5IAGglIBdAAIgLBBIhMAAIgDAKIBSAAIgKA6IgTAAIACgGIgzAAIgBAHgAANBQIAzAAIAEgVIgzAAgAANASIA5AAIACgLIg4AAgAASgFIA4AAIACgLIg4AAgAhGAWIAMgEQAFATACAOIgOAFQAAgOgFgUgAg6gsIAMgFQAEANACASIgNAFQAAgKgFgVgAgKgyQAsgUAaggIAQAGIgFAHQATAXAcANQgIAKgEAIQgQgJgKgKIgCAMIgyAAIACgKQgRALgPAJIgIgSgAAkg5IApAAIgTgTQgKAKgMAJg");
	this.shape_4.setTransform(43.425,10.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfBUQAJgEACgLIABgHIgXAIQgDgGgFgGIg8ARIgBgTIAZgHIALg6IgUAAIADgSIAUAAIAIguIgVAAIADgSIA7AAIgDASIgUAAIgIAuIASAAIgEASIgRAAIgKA1IAUgFIgBAQQAegHAYgPIgdAAIAIguIBqAAIgIAuIgoAAQADAKAGAIQASgIAKgIIAMANIggAOQAMAMAUAGQgJAHgGAJQgpgOgKgvQgPAMgMAGIgEAXIAjgIIgDAQQgxALgEADQgBgKgEgEgAgCASIBEAAIADgRIhFAAgAgbgXIADgRICFAAIgDARgAgOgxIAJgwIB1AAIgJAwgABFhAIATAAIADgTIgTAAgAAlhAIASAAIADgTIgSAAgAAFhAIARAAIAEgTIgSAAg");
	this.shape_5.setTransform(11.175,10.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgvAjQAPgFAIgMQAGgIAEgQIgZAAIABgHIBWAAIgBAHIgcAAIgGAjQgBAEAFAAIANAAQACAAACgDQACgEACgLQACACAEABQgDANgDAEQgDAFgGAAIgOAAQgHAAgCgDQgCgCABgGIAHgjIgSAAQgFASgHAKQgJANgRAGQgBgDgCgDgAgZghIABgHIBFAAIgCAHg");
	this.shape_6.setTransform(269.525,16.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAcQgEgKADgSQAHglAVAAQAXAAgHAlQgHAmgVAAQgKAAgFgKgAgNAAQgFAeANAAQANAAAGgeQAFgdgOAAQgNAAgFAdg");
	this.shape_7.setTransform(257.9051,16.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAcQgEgKADgSQAHglAVAAQAXAAgHAlQgHAmgVAAQgKAAgFgKgAgNAAQgFAeANAAQANAAAGgeQAFgdgOAAQgNAAgFAdg");
	this.shape_8.setTransform(251.4051,16.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAcQgEgKADgSQAHglAWAAQAKAAAFAKQAEAKgDARQgHAmgWAAQgKAAgFgKgAgNAAQgFAeAOAAQANAAAFgeQAFgdgOAAQgNAAgFAdg");
	this.shape_9.setTransform(244.925,16.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJAKQAKgEACgIIgBAAQgGAAABgGQABgHAGAAQAHAAgBALQgDANgOAHg");
	this.shape_10.setTransform(239.0382,20.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVAcQgEgKADgSQAGglAWAAQAXAAgHAlQgHAmgVAAQgKAAgFgKgAgNAAQgFAeANAAQANAAAFgeQAGgdgOAAQgNAAgFAdg");
	this.shape_11.setTransform(234.7051,16.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZAcIAFgGQAHAIAKAAQAOAAACgOQADgOgWAAIABgGQATAAADgOQACgLgMAAQgHAAgJAHIgEgGQAMgJAJAAQAJAAAGAFQAFAFgCAJQgCAMgOAFQAPADgDAPQgCAJgHAGQgIAGgJAAQgNAAgIgKg");
	this.shape_12.setTransform(227.8923,16.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgqAtIAJg2IgKALIgCgHQASgQALgXIAHACQgHALgIALIgMBBgAgdAqIABgGIAKAAIAJg3IAQAAIADgJIgWAAIABgGIAYAAIADgKIAIABIgEAJIAaAAIgBAGIgcAAIgDAJIAYAAIgKA3IAJAAIgBAGgAgMAkIAhAAIACgIIghAAgAgJAWIAhAAIABgIIghAAgAgHAIIAhAAIABgIIghAAgAgFgEIAhAAIACgJIghAAg");
	this.shape_13.setTransform(216.5,16.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAJAjIAFgEQARAGAFAEIgHAEQgIgFgMgFgAgeAnQANgCALgGIAFAEQgMAGgOADgAgsAsIAKg2IgLAMIgDgGQAQgQAMgYIAHABIgLAUIgMBDgAgVAeIAGgjIA2AAIgHAjgAgOAaIAoAAIABgHIgnAAgAgMAPIAoAAIABgGIgoAAgAgKAFIAoAAIABgFIgoAAgAgQgJIADgTIAQAAIABgGIgSAAIABgGIA+AAIgBAGIgVAAIgBAGIASAAIgEATgAAYgOIALAAIABgKIgLAAgAAHgOIALAAIABgKIgLAAgAgJgOIAKAAIABgKIgJAAgAAJgcIALAAIABgGIgLAAg");
	this.shape_14.setTransform(205.675,16.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAHAsQgHAAAAgBQgCgCABgFIACgRIAGAAIgDARQAAABAAAAQABABAAAAQAAAAABABQABAAABAAIANAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBIACgIIAFACQgCAIgCADQgCACgFAAgAgxAqQAFgHAFgPIAFABQgEANgFAKgAgQAnQAGgHAFgNIAFACQgHAPgDAGgAgeAVIAFgCIAAAVIgGACgAAfAUIAGgCIAFATIgGADQgBgFgEgPgAgVATIAFgCIACARIgFACgAANAQIAFgDQAFAJACAGIgGADgAgrAJQADAAAGgGIAKgLIgOACIgBgGQACgBAEgFQAJgLAHgOIAHADQgKAQgKALIALgBIAKgOIAFADQgMASgPAOIAPgDIgBgHIAFgBQAEALAAAHIgHABIAAgFQgYAEgCACgAgEAMIAHgtIAOAAIAFgKIAHABIgGAJIAaAAIgIAtgAACAGIAiAAIAFghIggAAgAAJABQAGgCAIgHIgEgFIgJAIIgDgEIAKgHIgGgFIAFgDIAEAEIAGgGIAEABIgHAJIAEAEIAHgIIAFABQgEAGgGAEIAGAJIgFACIgEgHQgFAEgKAFg");
	this.shape_15.setTransform(194.25,15.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,274.4,21.8);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},28).to({state:[]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},8).wait(53));

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
	this.shape.graphics.f("#571D3A").s().p("A7PClIBqlJMA01AAAIAAFJg");
	this.shape.setTransform(174.375,16.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,348.8,33.1);


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
	this.shape.graphics.lf(["rgba(32,42,111,0)","rgba(123,36,118,0.698)","#CC5D2E"],[0,0.255,1],-223.8,0,223.9,0).s().p("Egi+ADqICxnUMBDLAAAIAAHUg");
	this.shape.setTransform(223.85,23.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_bgsentra, new cjs.Rectangle(0,0,447.7,46.9), null);


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
	this.shape.graphics.lf(["rgba(32,42,111,0)","rgba(123,36,118,0.8)","#512678"],[0,0.255,1],-268.7,0,268.8,0).s().p("EgjPAF8IABgDImxAAIEsr0MBPTAAAIAAL3g");
	this.shape.setTransform(268.775,37.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_bghappy, new cjs.Rectangle(0,0,537.6,76), null);


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
	this.shape_1.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-295.6,-0.9,50.7,-0.9).s().p("Ah/pBIJ5gTIAASWIvzATg");
	this.shape_1.setTransform(347.775,59.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-274,-0.8,72.2,-0.8).s().p("AlXpCIQpgRIAASXI2jAPg");
	this.shape_2.setTransform(317.05,59.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-255.1,-0.6,91.1,-0.6).s().p("AoUpEIWjgNIAASWI8dANg");
	this.shape_3.setTransform(290.125,59.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-238.8,-0.5,107.5,-0.5).s().p("Aq3pFIbpgLIAASWMghjAALg");
	this.shape_4.setTransform(266.825,59.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-224.7,-0.4,121.5,-0.4).s().p("AtEpGMAgDgAJIAASWMgl9AAJg");
	this.shape_5.setTransform(246.825,59.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-212.9,-0.3,133.4,-0.3).s().p("Au6pHMAjvgAHIAASWMgppAAHg");
	this.shape_6.setTransform(229.9,59.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-203,-0.2,143.3,-0.2).s().p("AwdpIMAm1gAFIAASWMgsvAAFg");
	this.shape_7.setTransform(215.775,59);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-194.9,-0.1,151.4,-0.1).s().p("AxupJMApXgADIAASWMgvRAADg");
	this.shape_8.setTransform(204.225,58.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-188.4,-0.1,157.9,-0.1).s().p("AyvpJMArZgADIAASWMgxTAADg");
	this.shape_9.setTransform(194.975,58.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-183.3,0,162.9,0).s().p("AzipKMAs/gABIAASWMgy5AABg");
	this.shape_10.setTransform(187.775,58.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-179.5,0,166.7,0).s().p("A0IpKMAuLgABIAASWMg0FAABg");
	this.shape_11.setTransform(182.35,58.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-176.8,0,169.5,0).s().p("A0jpKMAvBgABIAASWMg07AABg");
	this.shape_12.setTransform(178.475,58.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-175,0,171.3,0).s().p("A01pKMAvlgABIAASWMg1fAABg");
	this.shape_13.setTransform(175.875,58.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-173.9,0,172.4,0).s().p("A66JMIF6yXMAv8AAAIAASXg");
	this.shape_14.setTransform(174.3,58.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-173.3,0,172.9,0).s().p("A7AJMIF6yXMAwHAAAIAASXg");
	this.shape_15.setTransform(173.5,58.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-173.1,0,173.1,0).s().p("A7CJMIF6yXMAwLAAAIAASXg");
	this.shape_16.setTransform(173.2,58.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-173.1,0,173.2,0).s().p("A7CJMIF6yXMAwMAAAIAASXg");
	this.shape_17.setTransform(173.15,58.75);
	this.shape_17._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(17).to({_off:false},0).wait(18));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},14).to({state:[]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},14).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},60).to({state:[]},1).wait(154));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},14).to({state:[]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},14).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},60).to({state:[]},1).wait(154));

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

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

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
	this.shape.setTransform(283.7,18.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiKiXIBTgIIAGgCIAcAPIgxBsQAWAigGAoQgGAmgSANQgJAGgPAEIgYADQADgWgHgQIARgBQAFgBAFgEQAHgFADgRQAFgjgVgdIAihXIgdADIguEuIgoAEgAgWCDQAJABAXgCQANgBAIgLQANgNAGgmQgvAlg3AaQgJgSgNgMQAigMAjgVQAkgWAWgVIgCgUQgoAggoAWQgJgUgKgKQAWgJAagQQAagPARgOQgFgMgFgIQgeAWgjAUQgMgUgKgKQAygWAigcIhCAGIAGgnIA8gGQgKgQgUgUIAjgXQAaATANAXIgVAPIAjgDQAfgpAMgWIAqAJQgQAWgXAcIA5gFIgHAoIhkAJIgTARQAMAOAIAXQAlgWAggbIAXAcQgVAQgbAQQAFAcALAcQALAcANARQgRAMgPATQgOgTgLgfQgMgegGgfIgBABQAGAqgLAsQgKAqgTATQgTAUgcADIgeACQACgZgGgPg");
	this.shape_1.setTransform(247.3,21.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai8CoQAjg8AfhEIAgAUQgaA+gjBBgAAOCPIA5gDQAMgBAFgDQAHgFAHgQIjAARQAOgeANglICigPIACgMIitAPIAEgZIDWgTIgJA/IioAPIgFANIC9gRIgEAQQgQAvgQALQgMAKgZAEIg7AEQACgRgJgPgAhjAQQALgQAIgbIAVADQgLAggNAVQgIgJgIgEgAg3gZIAUgHQAEAUgCAWIgWAJQADgVgDgXgABPAAQAKgOAKgfIAUAEQgKAggNAUQgGgGgLgFgAANguIBIgGIgIA4IhJAHgAAkgcIgDARIATgCIADgRgAingZIAdgjQAjAPAQAQIggAlQgPgRghgQgAB6goIAVgHQADAZgCAVIgVAHQACgagDgUgAgZghIATgIQAGASAAAUIgUAJQABgQgGgXgACZgxIATgJQAHAaAAAUIgUALQABgWgHgagAhTg5QAGgBAOgNQAIgHAPgTQgYAEgHADIgGgRQAGgCAIgKQASgWAMgdIAXAGQgMAXgSAWIARgDIAMgSIAVAJQgTAdgdAgIAWgFIgEgKIAUgIQAIAWACARIgUALIgBgNQg6AOgIAEQgBgFgFgOgABfhHQAJgCALgOQAGgFARgVQgXAEgIAEQgCgKgEgIQAFgBAJgKQAFgGAJgOQAKgRAHgPIAXAHQgNAXgSAWIASgDIALgSIAWAIQgZAkgYAYIAWgEIgDgKIATgHQAKAYABAPIgUAKIgCgMQg7ANgHAFQAAgJgGgJgAAShNIBIgHIgDAWIhIAFgAAWhrIBJgGIgEAUIhIAGgAiQiBIAeghQAkATAOAPIghAlQgOgSghgUgAAQiNIAkgCQgCgNgFgOIAegIQAHANADAPIgQAFIAmgEIgDAZIhbAIg");
	this.shape_2.setTransform(208.625,24.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiJASIEAgXIgaCpIgwAEIACgTIigAOIgDATIguAFgAhhA5IgJA+ICggOIAJg+gAiZgxQANgEAVgVQAPgNAbgdQAhgmAWggIAqAQQgnAzg6A3ICbgTQgQgVgVgXIAngbQBABAATAoIgqAgQgEgJgMgTIjBAbQgrAHgOAGQgDgagFgRg");
	this.shape_3.setTransform(171.925,28.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ai1CuQgIgJgGgEQA2gmAchRIgaADQgSACgHAGIgIgkQAMgEAJgKQANgKAegpIgwAFIAGglIBKgGIAHgDIAZAKQgsA5gZAeIAZgDIAGgBIASAGQgNAsgSAlQAMAaAgAHQAYAGA0gFQBXgIA8gLQgLAMgLAfQg7AJhJAHQg4AFgcgGQgigIgQgaQgYAlgeAWQgDgGgIgJgAATBaIhZAIIAFghIBZgIIADgRIhKAHIARhwIBKgHIACgOIg+AFIACgPIgfADIAMhKIDkgVIgLBLIgdACIgBAPIhAAGIgCAOIBNgHIgRBxIhNAGIgDARIBggJIgFAiIhfAIIgFAZIgsAEgAgDAAIgCAQIAkgDIACgPgABNgGIgCAPIAngEIADgOgAACgoIgCAPIAlgDIACgQgABUgwIgCAQIAmgEIACgPgAACiJIgDAYIAzgFIADgOIAsgEIgDAOIAygEIADgYgAiDiWIAlgXQAYAbAOAaIgnAcQgJgWgbgkg");
	this.shape_4.setTransform(132.3,32.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai6CIIBrgKIAIg2IhRAGIAViKIBRgHIAHgvIhkAJIAGgqIFKgdIgGAqIhoAJIgHAvIBUgIIgVCLIhUAHIgJA2IBvgJIgGApIlXAfgAgkB6IAngDIAOheIBTgHIAJg9IhTAIIANhXIgnAEIgMBWIhRAHIgJA9IBRgHg");
	this.shape_5.setTransform(94.775,35.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfCSIAtgFQAHAAACgGIADgWIh0AKQAYAOALAMIgjAfQgNgQgdgRIAbgXIhWAHIAFgiIDZgUIADgSIh2ALIgBAKIgnAEIAMhQQgcAWgXAOQgJgWgHgJQA4geAngsQgnAXgqAQQgBgSgIgRQAzgRAsgaIhIAGIAGgkIB4gLQAVgVAJgOIAfAJIgRAXICngPIgGAjIhKAIQAiATA0AGQgTARgLASQgTgDgVgJIgCAMIhVAIIgCANIBYgIIgDAXIhZAHIgCAOIBYgIIgDAWIhYAIIgCAPIBogJIgEAbIgtAEIgCASIBRgHIgGAjIhRAHIgDAXQgDAQgFAIQgFAIgMAGQgRAGguAFQgBgRgIgSgAhNAcIgDAPIA+gFIACgQgAhIgHIgCAMIA+gFIACgNgAg9gsIgGAHIgCAHIA+gFIACgOgAgUhuQgMALgKAGIAQAFIgNARIApgEQgDgNgHgLIAbgOgAAahxQALAPACANIgQAJIBMgHQgZgOgRgUg");
	this.shape_6.setTransform(57.425,38.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AisCVQBcgTAggfIhjAIIAGgkIB2gLIAGgRIAsgEIgFARICGgMIgEASQgTBFgRAQQgNALgUAEQgXADgcACQACgWgJgQQAegBAMgBQAKgBAFgEQAJgHAJgeIhgAJQgTAggkAVQgnAWhEAQQgCgTgMgRgAhohSICGgMQgtgGgigCIAYgaQAZAAAnAEIAqgTIi5AQIAFghIDvgVIAKgDIAXAXQgmAXgsAVIAVAEIgLANIBFgGIgRBsQgCAOgFAHQgFAHgLAEQgNAFgxAEQgCgMgGgOIArgEQAHgBABgGIABgGIhOAHIgDAYIgpAEIAEgYIhIAGIgFAmIgqAEgAhIgUIgCAOIBIgGIACgPgAAogeIgCAOIBOgHIACgOgAhCg6IgCAOIBGgGIACgOgAAuhEIgCAOIBNgHIACgOg");
	this.shape_7.setTransform(17.325,42.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,302.1,61);


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
	this.shape.setTransform(256.725,28.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCEE21").s().p("Aj3D6QgIgTgJgMQB3gYAygjIiEAMIAKhDICsgPIAJgaIBSgHIgIAZIDLgSIgIAfQgcBmgcAbQgVATgiAHQgcAFgwACQABgQgDgUQgDgTgHgNQAkAAAXgEQAPgBAIgGQAKgKAKgdIiAAMQgdAtg3AfQg7AhhlAYQgDgOgIgUgAihh8ICqgPQgygHgngBIAsgvQAjABA2AEIAtgVIkDAXIAJg7IFmgfIASgGIApAqQg9Alg4AaIAZAGIgSAUIBqgJIgZCgQgDAXgJAMQgJALgSAIQgQAGgcAEIg5AGQgCgXgMgaQArAAAVgEQAMgBACgLIhnAJIgEAiIhNAHIAGgiIhaAIIgJA4IhNAHgAhkgaIgCANIBagIIACgNgABBgpIgBANIBmgJIACgNgAhchRIgCAMIBagIIACgMgABKhgIgCANIBmgKIACgMg");
	this.shape_1.setTransform(197.85,34.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCEE21").s().p("AjKBhQgcA4geAnQgEgdgVgtQAcgjAdg1QAbgwATg0Ig9AFIAMhNIBCgGIASh2IBNgHIgRB1IA6gEIgMBNIg7AGIgDAVQAUAeAbAzIAJg/IFNgdIgKBDIjRASIgOATIDUgSIgHAcQgRBRgNAoQgOApgNAOQgSATgYAHQgTAFgjACQADgegHgbQgdAmgdAcQgTgbgbgQQA1gpAyhUIgQABQgdArgnAqQgmAqglAcQgRgbgagUQA7gjA2hDIgQACQgeAfgeAWQgYgegTgPQA0giAsg3IgqAEIADAFIg1BDQgFgTgKggIgiDmIhNAGgACmBbQgYAxghAvIATgBQAKgBAHgHQAMgNAShLgAAWkHIEFgWIgeDMIkGAYgABQiMIgDATIBmgJIAEgTgABbjUIgDATIBngJIACgTg");
	this.shape_2.setTransform(142.1,39.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCEE21").s().p("AkhDlQBVgVBDgiIhHAHIAkjvIGHgjIgkDvIhTAHQBOAYA7AZIhhAwQg9ghhNgYIA2gkIiTANIAwAUQglAag4AbQgzAYgyASQgdglgXgTgAh2BsIgCARIDigUIADgRgAhsAuIgDAQIDigUIADgRgAhjgPIgCAPIDigUIACgQgAjkhFQgKgRgLgKQBEgeAbgvIhCAGIAKhCIBQgHIAHghIBOgHIgHAhIBvgKIgFAZQgKA2gIAbQgJAcgLAMQgRASgaAGQgWAFgpACQACgfgIgXQgnA8hQAkQgDgNgKgSgAhJi1QgHAVgLARQAZAAAKgCQALgBAHgFQAFgHAGgbgABOkJIDUgTIgZCqIjVATgACQjSIgHAuIA5gFIAHgug");
	this.shape_3.setTransform(84.525,44.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCEE21").s().p("AkUC/QApAAAZgFQAMgCAIgKQAQgTAPhZQgrAwgyAlQgFgQgKgTQgKgUgKgMQAlgVAmgkQAmgjAagmQABgZgEgYQgwApgiAZQgPgugVgaQAsgZAugmQgRgbgbgXIBDg0QAcAXAPAUQAXgXAPgUIA3AkQgeAkgeAfQAPApABA1QABAqgKA7QgWCUgqAyQgSAUgZAJQgfALg2ADQAGgwgRgigAhkCoICEgMIAUiFIhjAJIANhPIBjgJIARh3IhpAKIAMhQIErgbIgMBQIhrAJIgSB3IBogJIgMBPIhoAJIgUCFIB1gKIgNBQIlPAdg");
	this.shape_4.setTransform(28.8,49.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,287,77);


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
	this.shape.graphics.lf(["#58207C","#9A1B5B","#D11277"],[0.004,0.545,1],241,-17.8,-241,18.1).s().p("EglpgHEMBLTgFnIowUdMhCjAE6g");
	this.shape.setTransform(241,81.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,482,162.5);


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
	this.shape.graphics.lf(["rgba(32,42,111,0)","rgba(123,36,118,0.698)","#CC5D2E"],[0,0.255,1],295.5,-20.8,-104.5,7.4).s().p("A/PkzMA+fgEiIlyOpMg4tAECg");
	this.shape.setTransform(200,59.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc0_bgt2, new cjs.Rectangle(0,0,400,119.6), null);


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
	this.shape_1.graphics.f("rgba(81,114,144,0.149)").s().p("AgzAzQgTgvgMg0QAlgVArgEQArgEAqANQgnBCggBJQgYgbgnADg");
	this.shape_1.setTransform(136.775,208.8188);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(103,106,142,0.286)").s().p("AgzAzQgTgvgMg0QAlgVArgEQArgEAqANQgnBCggBJQgYgbgnADg");
	this.shape_2.setTransform(130.275,226.6188);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(123,99,139,0.408)").s().p("AgzAzQgTgvgMg0QAlgVArgEQArgEAqANQgnBCggBJQgYgbgnADg");
	this.shape_3.setTransform(124.375,242.7188);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(141,93,137,0.518)").s().p("AgzAzQgTgvgMg0QAlgVArgEQArgEAqANQgnBCggBJQgYgbgnADg");
	this.shape_4.setTransform(119.075,257.1688);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(157,87,135,0.62)").s().p("AgzAzQgTgvgMg0QAlgVArgEQArgEAqANQgnBCggBJQgYgbgnADg");
	this.shape_5.setTransform(114.325,270.1188);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(171,82,134,0.706)").s().p("AgzAzQgTgvgMg0QAlgVArgEQArgEAqANQgnBCggBJQgYgbgnADg");
	this.shape_6.setTransform(110.125,281.5688);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(183,78,132,0.784)").s().p("AgzAzQgTgvgMg0QAlgVArgEQArgEAqANQgnBCggBJQgYgbgnADg");
	this.shape_7.setTransform(106.475,291.6188);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(194,74,131,0.851)").s().p("AgzAzQgTgvgMg0QAlgVArgEQArgEAqANQgnBCggBJQgYgbgnADg");
	this.shape_8.setTransform(103.225,300.3688);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(203,71,130,0.906)").s().p("AgzAzQgTgvgMg0QAlgVArgEQArgEAqANQgnBCggBJQgYgbgnADg");
	this.shape_9.setTransform(100.475,307.8688);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(211,68,129,0.957)").s().p("AgzAzQgTgvgMg0QAlgVArgEQArgEAqANQgnBCggBJQgYgbgnADg");
	this.shape_10.setTransform(98.175,314.2688);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(217,66,128,0.996)").s().p("AgzAzQgTgvgMg0QAlgVArgEQArgEAqANQgnBCggBJQgYgbgnADg");
	this.shape_11.setTransform(96.225,319.5688);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DA4280").s().p("AgzAzQgTgvgMg0QAlgVArgEQArgEAqANQgnBCggBJQgYgbgnADg");
	this.shape_12.setTransform(94.625,323.8188);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},14).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(26).to({_off:false},0).wait(1).to({x:93.425,y:327.2188},0).wait(1).to({x:92.475,y:329.7188},0).wait(1).to({x:91.825,y:331.5188},0).wait(1).to({x:91.425,y:332.6188},0).wait(1).to({x:91.275,y:333.0688},0).wait(2).to({x:91.425,y:332.5688},0).wait(1).to({x:91.775,y:331.7188},0).wait(1).to({x:92.175,y:330.5688},0).wait(1).to({x:92.675,y:329.1688},0).wait(1).to({x:93.225,y:327.6688},0).wait(1).to({x:93.825,y:326.1188},0).wait(1).to({x:94.375,y:324.6188},0).wait(1).to({x:94.875,y:323.1688},0).wait(1).to({x:95.325,y:321.9188},0).wait(1).to({x:95.725,y:320.9688},0).wait(1).to({x:95.925,y:320.3188},0).wait(1).to({x:96.025,y:320.0688},0).wait(1));

	// Layer_5
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(57,122,147,0)").s().p("AhkA3QAWhEA+g+QBBAHA0AlQhVAqgnBBQgigXgrACg");
	this.shape_13.setTransform(155.675,259.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(81,114,144,0.149)").s().p("AhkA3QAWhEA+g+QBBAHA0AlQhVAqgnBBQgigXgrACg");
	this.shape_14.setTransform(153.925,270.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(103,106,142,0.286)").s().p("AhkA3QAWhEA+g+QBBAHA0AlQhVAqgnBBQgigXgrACg");
	this.shape_15.setTransform(152.275,281.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(123,99,139,0.408)").s().p("AhkA3QAWhEA+g+QBBAHA0AlQhVAqgnBBQgigXgrACg");
	this.shape_16.setTransform(150.825,290.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(141,93,137,0.518)").s().p("AhkA3QAWhEA+g+QBBAHA0AlQhVAqgnBBQgigXgrACg");
	this.shape_17.setTransform(149.525,298.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(157,87,135,0.62)").s().p("AhkA3QAWhEA+g+QBBAHA0AlQhVAqgnBBQgigXgrACg");
	this.shape_18.setTransform(148.375,306.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(171,82,134,0.706)").s().p("AhkA3QAWhEA+g+QBBAHA0AlQhVAqgnBBQgigXgrACg");
	this.shape_19.setTransform(147.325,313.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(183,78,132,0.784)").s().p("AhkA3QAWhEA+g+QBBAHA0AlQhVAqgnBBQgigXgrACg");
	this.shape_20.setTransform(146.425,318.975);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(194,74,131,0.851)").s().p("AhkA3QAWhEA+g+QBBAHA0AlQhVAqgnBBQgigXgrACg");
	this.shape_21.setTransform(145.625,324.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(203,71,130,0.906)").s().p("AhkA3QAWhEA+g+QBBAHA0AlQhVAqgnBBQgigXgrACg");
	this.shape_22.setTransform(144.925,328.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(211,68,129,0.957)").s().p("AhkA3QAWhEA+g+QBBAHA0AlQhVAqgnBBQgigXgrACg");
	this.shape_23.setTransform(144.375,332.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(217,66,128,0.996)").s().p("AhkA3QAWhEA+g+QBBAHA0AlQhVAqgnBBQgigXgrACg");
	this.shape_24.setTransform(143.875,335.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DA4280").s().p("AhkA3QAWhEA+g+QBBAHA0AlQhVAqgnBBQgigXgrACg");
	this.shape_25.setTransform(143.475,337.725);
	this.shape_25._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13}]},14).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(26).to({_off:false},0).wait(1).to({x:143.175,y:339.675},0).wait(1).to({x:142.925,y:341.175},0).wait(1).to({x:142.775,y:342.175},0).wait(1).to({x:142.675,y:342.825},0).wait(1).to({x:142.625,y:343.125},0).wait(1).to({y:343.075},0).wait(1).to({x:142.675,y:342.775},0).wait(1).to({x:142.775,y:342.275},0).wait(1).to({x:142.875,y:341.625},0).wait(1).to({x:142.975,y:340.825},0).wait(1).to({x:143.125,y:339.975},0).wait(1).to({x:143.275,y:339.075},0).wait(1).to({x:143.425,y:338.175},0).wait(1).to({x:143.525,y:337.325},0).wait(1).to({x:143.675,y:336.625},0).wait(1).to({x:143.725,y:336.025},0).wait(1).to({x:143.825,y:335.675},0).wait(1).to({y:335.525},0).wait(1));

	// Layer_6
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(57,122,147,0)").s().p("AAQBPQgOgkgbgaQgbgYgkgJQA3gtBEgTQAdAfANAqQAOAqgDAuQglgHgjAFg");
	this.shape_26.setTransform(268.36,184.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(59,124,159,0.149)").s().p("AAQBQQgOglgbgZQgbgZgkgJQA3gtBEgTQAdAgANApQAOApgDAvQglgHgjAGg");
	this.shape_27.setTransform(272.31,184.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(62,125,171,0.286)").s().p("AAQBQQgOglgbgZQgbgZgkgJQA3gtBEgTQAdAgANApQAOApgDAvQglgHgjAGg");
	this.shape_28.setTransform(275.86,184.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(64,127,181,0.408)").s().p("AAQBQQgOglgbgZQgbgZgkgJQA3gtBEgTQAdAgANApQAOApgDAvQglgHgjAGg");
	this.shape_29.setTransform(279.11,184.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(65,128,190,0.518)").s().p("AAQBQQgOglgbgZQgbgZgkgJQA3gtBEgTQAdAgANApQAOApgDAvQglgHgjAGg");
	this.shape_30.setTransform(282.01,184.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(67,129,198,0.62)").s().p("AAQBQQgOglgbgZQgbgZgkgJQA3gtBEgTQAdAgANApQAOApgDAvQglgHgjAGg");
	this.shape_31.setTransform(284.56,184.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(68,130,206,0.706)").s().p("AAQBQQgOglgbgZQgbgZgkgJQA3gtBEgTQAdAgANApQAOApgDAvQglgHgjAGg");
	this.shape_32.setTransform(286.86,184.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(70,131,212,0.784)").s().p("AAQBQQgOglgbgZQgbgZgkgJQA3gtBEgTQAdAgANApQAOApgDAvQglgHgjAGg");
	this.shape_33.setTransform(288.91,184.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(71,132,218,0.851)").s().p("AAQBQQgOglgbgZQgbgZgkgJQA3gtBEgTQAdAgANApQAOApgDAvQglgHgjAGg");
	this.shape_34.setTransform(290.66,184.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(72,133,222,0.906)").s().p("AAQBQQgOglgbgZQgbgZgkgJQA3gtBEgTQAdAgANApQAOApgDAvQglgHgjAGg");
	this.shape_35.setTransform(292.16,184.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(72,133,226,0.957)").s().p("AAQBQQgOglgbgZQgbgZgkgJQA3gtBEgTQAdAgANApQAOApgDAvQglgHgjAGg");
	this.shape_36.setTransform(293.46,184.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(73,134,230,0.996)").s().p("AAQBQQgOglgbgZQgbgZgkgJQA3gtBEgTQAdAgANApQAOApgDAvQglgHgjAGg");
	this.shape_37.setTransform(294.51,184.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4986E6").s().p("AAQBQQgOglgbgZQgbgZgkgJQA3gtBEgTQAdAgANApQAOApgDAvQglgHgjAGg");
	this.shape_38.setTransform(295.36,184.7);
	this.shape_38._off = true;

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#4986E6").s().p("AAQBPQgOgkgbgaQgbgYgkgJQA3gtBEgTQAdAfANAqQAOAqgDAuQglgHgjAFg");
	this.shape_39.setTransform(294.61,184.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26}]},14).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(26).to({_off:false},0).wait(1).to({x:296.06},0).wait(1).to({x:296.56},0).wait(1).to({x:296.91},0).wait(1).to({x:297.11},0).wait(1).to({x:297.21},0).wait(2).to({x:297.11},0).wait(1).to({x:296.96},0).wait(1).to({x:296.71},0).wait(1).to({x:296.46},0).wait(1).to({x:296.16},0).wait(1).to({x:295.81},0).wait(1).to({x:295.51},0).wait(1).to({x:295.26},0).wait(1).to({x:295.01},0).wait(1).to({x:294.81},0).wait(1).to({x:294.66},0).to({_off:true},1).wait(1));

	// Layer_7
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(57,122,147,0)").s().p("AgzAnQgKglADguQA6gWA7AWQgnAwgUA0QgVgTgeACg");
	this.shape_40.setTransform(139.664,226.6562);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(66,134,152,0.149)").s().p("AgzAnQgKglADguQA6gWA7AWQgnAwgUA0QgVgTgeACg");
	this.shape_41.setTransform(139.214,235.9562);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(74,145,157,0.286)").s().p("AgzAnQgKglADguQA6gWA7AWQgnAwgUA0QgVgTgeACg");
	this.shape_42.setTransform(138.764,244.4562);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(82,154,161,0.408)").s().p("AgzAnQgKglADguQA6gWA7AWQgnAwgUA0QgVgTgeACg");
	this.shape_43.setTransform(138.414,252.1062);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(89,163,165,0.518)").s().p("AgzAnQgKglADguQA6gWA7AWQgnAwgUA0QgVgTgeACg");
	this.shape_44.setTransform(138.064,259.0062);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(95,171,168,0.62)").s().p("AgzAnQgKglADguQA6gWA7AWQgnAwgUA0QgVgTgeACg");
	this.shape_45.setTransform(137.764,265.1062);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(100,178,171,0.706)").s().p("AgzAnQgKglADguQA6gWA7AWQgnAwgUA0QgVgTgeACg");
	this.shape_46.setTransform(137.464,270.5562);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(105,184,174,0.784)").s().p("AgzAnQgKglADguQA6gWA7AWQgnAwgUA0QgVgTgeACg");
	this.shape_47.setTransform(137.214,275.3562);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(109,189,176,0.851)").s().p("AgzAnQgKglADguQA6gWA7AWQgnAwgUA0QgVgTgeACg");
	this.shape_48.setTransform(137.014,279.5562);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(112,194,178,0.906)").s().p("AgzAnQgKglADguQA6gWA7AWQgnAwgUA0QgVgTgeACg");
	this.shape_49.setTransform(136.864,283.1062);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(115,197,179,0.957)").s().p("AgzAnQgKglADguQA6gWA7AWQgnAwgUA0QgVgTgeACg");
	this.shape_50.setTransform(136.714,286.1562);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(118,201,181,0.996)").s().p("AgzAnQgKglADguQA6gWA7AWQgnAwgUA0QgVgTgeACg");
	this.shape_51.setTransform(136.564,288.6562);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#76C9B5").s().p("AgzAnQgKglADguQA6gWA7AWQgnAwgUA0QgVgTgeACg");
	this.shape_52.setTransform(136.464,290.7062);
	this.shape_52._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_40}]},14).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_52).wait(26).to({_off:false},0).wait(1).to({x:136.414,y:292.3062},0).wait(1).to({x:136.314,y:293.5062},0).wait(1).to({y:294.3562},0).wait(1).to({x:136.264,y:294.8562},0).wait(1).to({y:295.1062},0).wait(2).to({y:294.8562},0).wait(1).to({y:294.4562},0).wait(1).to({x:136.314,y:293.9062},0).wait(1).to({x:136.364,y:293.2562},0).wait(1).to({y:292.5562},0).wait(1).to({x:136.414,y:291.8062},0).wait(1).to({x:136.464,y:291.0562},0).wait(1).to({x:136.514,y:290.4062},0).wait(1).to({y:289.8062},0).wait(1).to({x:136.564,y:289.3062},0).wait(1).to({y:289.0062},0).wait(1).to({y:288.9062},0).wait(1));

	// Layer_8
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(57,122,147,0)").s().p("Ai/CUQgagogUgnQCIAaB1hCQBwg9Auh1QAfAUAhAPQguB9h1BKQhlBBh5AAQgWAAgWgCg");
	this.shape_53.setTransform(235.7,130.5827);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(85,133,139,0.149)").s().p("Ai/CUQgagogUgnQCJAaBzhCQBxg9Auh1QAgAUAgAPQguB9h1BKQhlBBh5AAQgWAAgWgCg");
	this.shape_54.setTransform(235.7,113.2827);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(111,143,132,0.286)").s().p("Ai/CUQgagogUgnQCJAaBzhCQBxg9Auh1QAgAUAgAPQguB9h1BKQhlBBh5AAQgWAAgWgCg");
	this.shape_55.setTransform(235.7,97.5827);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(134,152,125,0.408)").s().p("Ai/CUQgagogUgnQCJAaBzhCQBxg9Auh1QAgAUAgAPQguB9h1BKQhlBBh5AAQgWAAgWgCg");
	this.shape_56.setTransform(235.7,83.3827);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(155,160,119,0.518)").s().p("Ai/CUQgagogUgnQCJAaBzhCQBxg9Auh1QAgAUAgAPQguB9h1BKQhlBBh5AAQgWAAgWgCg");
	this.shape_57.setTransform(235.7,70.5827);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(174,167,114,0.62)").s().p("Ai/CUQgagogUgnQCJAaBzhCQBxg9Auh1QAgAUAgAPQguB9h1BKQhlBBh5AAQgWAAgWgCg");
	this.shape_58.setTransform(235.7,59.1827);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(190,174,109,0.706)").s().p("Ai/CUQgagogUgnQCJAaBzhCQBxg9Auh1QAgAUAgAPQguB9h1BKQhlBBh5AAQgWAAgWgCg");
	this.shape_59.setTransform(235.7,49.0327);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(205,179,105,0.784)").s().p("Ai/CUQgagogUgnQCJAaBzhCQBxg9Auh1QAgAUAgAPQguB9h1BKQhlBBh5AAQgWAAgWgCg");
	this.shape_60.setTransform(235.7,40.1827);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(218,184,101,0.851)").s().p("Ai/CUQgagogUgnQCJAaBzhCQBxg9Auh1QAgAUAgAPQguB9h1BKQhlBBh5AAQgWAAgWgCg");
	this.shape_61.setTransform(235.7,32.4327);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(228,188,98,0.906)").s().p("Ai/CUQgagogUgnQCJAaBzhCQBxg9Auh1QAgAUAgAPQguB9h1BKQhlBBh5AAQgWAAgWgCg");
	this.shape_62.setTransform(235.7,25.7827);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(238,192,95,0.957)").s().p("Ai/CUQgagogUgnQCJAaBzhCQBxg9Auh1QAgAUAgAPQguB9h1BKQhlBBh5AAQgWAAgWgCg");
	this.shape_63.setTransform(235.7,20.1827);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(245,195,93,0.996)").s().p("Ai/CUQgagogUgnQCJAaBzhCQBxg9Auh1QAgAUAgAPQguB9h1BKQhlBBh5AAQgWAAgWgCg");
	this.shape_64.setTransform(235.7,15.4827);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F6C35D").s().p("Ai/CUQgagogUgnQCJAaBzhCQBxg9Auh1QAgAUAgAPQguB9h1BKQhlBBh5AAQgWAAgWgCg");
	this.shape_65.setTransform(235.7,11.6827);
	this.shape_65._off = true;

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F6C35D").s().p("Ai/CUQgagogUgnQCIAaB1hCQBwg9Auh1QAfAUAhAPQguB9h1BKQhlBBh5AAQgWAAgWgCg");
	this.shape_66.setTransform(235.7,15.0327);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_53}]},14).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_65).wait(26).to({_off:false},0).wait(1).to({y:8.7327},0).wait(1).to({y:6.4827},0).wait(1).to({y:4.9327},0).wait(1).to({y:3.9827},0).wait(1).to({y:3.5327},0).wait(1).to({y:3.5827},0).wait(1).to({y:3.9827},0).wait(1).to({y:4.7827},0).wait(1).to({y:5.7827},0).wait(1).to({y:6.9827},0).wait(1).to({y:8.2827},0).wait(1).to({y:9.6827},0).wait(1).to({y:11.0327},0).wait(1).to({y:12.2827},0).wait(1).to({y:13.3827},0).wait(1).to({y:14.2327},0).wait(1).to({y:14.8327},0).to({_off:true},1).wait(1));

	// Layer_9
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(57,122,147,0)").s().p("AhcAMQAvgDAjggQAiggANgxQAZAFAZgDQAKA3gHA1QgHA2gWAtQhZgYhAhFg");
	this.shape_67.setTransform(57.5735,207.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(62,134,158,0.149)").s().p("AhcAMQAvgEAjgfQAiggANgyQAZAHAZgEQAKA4gHA1QgHA0gWAvQhZgZhAhFg");
	this.shape_68.setTransform(50.3235,207.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(67,145,168,0.286)").s().p("AhcAMQAvgEAjgfQAiggANgyQAZAHAZgEQAKA4gHA1QgHA0gWAvQhZgZhAhFg");
	this.shape_69.setTransform(43.7735,207.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(71,154,176,0.408)").s().p("AhcAMQAvgEAjgfQAiggANgyQAZAHAZgEQAKA4gHA1QgHA0gWAvQhZgZhAhFg");
	this.shape_70.setTransform(37.8235,207.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(75,163,184,0.518)").s().p("AhcAMQAvgEAjgfQAiggANgyQAZAHAZgEQAKA4gHA1QgHA0gWAvQhZgZhAhFg");
	this.shape_71.setTransform(32.4735,207.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(79,171,191,0.62)").s().p("AhcAMQAvgEAjgfQAiggANgyQAZAHAZgEQAKA4gHA1QgHA0gWAvQhZgZhAhFg");
	this.shape_72.setTransform(27.7235,207.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(82,178,198,0.706)").s().p("AhcAMQAvgEAjgfQAiggANgyQAZAHAZgEQAKA4gHA1QgHA0gWAvQhZgZhAhFg");
	this.shape_73.setTransform(23.4735,207.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(84,184,203,0.784)").s().p("AhcAMQAvgEAjgfQAiggANgyQAZAHAZgEQAKA4gHA1QgHA0gWAvQhZgZhAhFg");
	this.shape_74.setTransform(19.7735,207.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(87,189,208,0.851)").s().p("AhcAMQAvgEAjgfQAiggANgyQAZAHAZgEQAKA4gHA1QgHA0gWAvQhZgZhAhFg");
	this.shape_75.setTransform(16.5235,207.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(89,194,212,0.906)").s().p("AhcAMQAvgEAjgfQAiggANgyQAZAHAZgEQAKA4gHA1QgHA0gWAvQhZgZhAhFg");
	this.shape_76.setTransform(13.7735,207.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(90,197,216,0.957)").s().p("AhcAMQAvgEAjgfQAiggANgyQAZAHAZgEQAKA4gHA1QgHA0gWAvQhZgZhAhFg");
	this.shape_77.setTransform(11.4235,207.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(92,201,219,0.996)").s().p("AhcAMQAvgEAjgfQAiggANgyQAZAHAZgEQAKA4gHA1QgHA0gWAvQhZgZhAhFg");
	this.shape_78.setTransform(9.4735,207.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#5CC9DB").s().p("AhcAMQAvgEAjgfQAiggANgyQAZAHAZgEQAKA4gHA1QgHA0gWAvQhZgZhAhFg");
	this.shape_79.setTransform(7.8735,207.3);
	this.shape_79._off = true;

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#5CC9DB").s().p("AhcAMQAvgDAjggQAiggANgxQAZAFAZgDQAKA3gHA1QgHA2gWAtQhZgYhAhFg");
	this.shape_80.setTransform(9.2735,207.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_67}]},14).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_79).wait(26).to({_off:false},0).wait(1).to({x:6.6235},0).wait(1).to({x:5.7235},0).wait(1).to({x:5.0235},0).wait(1).to({x:4.6235},0).wait(1).to({x:4.4735},0).wait(2).to({x:4.6735},0).wait(1).to({x:4.9735},0).wait(1).to({x:5.4235},0).wait(1).to({x:5.9235},0).wait(1).to({x:6.4735},0).wait(1).to({x:7.0235},0).wait(1).to({x:7.5735},0).wait(1).to({x:8.1235},0).wait(1).to({x:8.5735},0).wait(1).to({x:8.9235},0).wait(1).to({x:9.1735},0).to({_off:true},1).wait(1));

	// Layer_10
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(57,122,147,0)").s().p("AiTBGQBfACBFg8QBFg6ANhYQAYACAZgCQACBfg8BLQg8BNhfAWQgsgbgmgmg");
	this.shape_81.setTransform(225.7768,258.05);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(59,124,159,0.149)").s().p("AiTBGQBfABBFg7QBFg6ANhYQAYADAZgDQACBfg8BLQg8BMhfAXQgsgbgmgmg");
	this.shape_82.setTransform(225.7768,267);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(62,125,171,0.286)").s().p("AiTBGQBfABBFg7QBFg6ANhYQAYADAZgDQACBfg8BLQg8BMhfAXQgsgbgmgmg");
	this.shape_83.setTransform(225.7768,275.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(64,127,181,0.408)").s().p("AiTBHQBfAABFg7QBFg6ANhYQAYADAZgDQACBgg8BKQg8BNhfAWQgsgcgmgkg");
	this.shape_84.setTransform(225.7768,282.45);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(65,128,190,0.518)").s().p("AiTBHQBfABBFg8QBFg6ANhYQAYACAZgCQACBgg8BKQg8BNhfAWQgsgcgmgkg");
	this.shape_85.setTransform(225.7768,289.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(67,129,198,0.62)").s().p("AiTBGQBfABBFg7QBFg6ANhYQAYACAZgCQACBfg8BLQg8BMhfAXQgsgbgmgmg");
	this.shape_86.setTransform(225.7768,295);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(68,130,206,0.706)").s().p("AiTBHQBfAABFg7QBFg5ANhZQAYADAZgDQACBgg8BKQg8BMhfAXQgsgbgmglg");
	this.shape_87.setTransform(225.7768,300.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(70,131,212,0.784)").s().p("AiTBHQBfAABFg7QBFg6ANhYQAYADAZgDQACBfg8BLQg8BMhfAXQgsgbgmglg");
	this.shape_88.setTransform(225.7768,304.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(71,132,218,0.851)").s().p("AiTBGQBfABBFg7QBFg5ANhZQAYACAZgCQACBgg8BKQg8BMhfAXQgsgcgmglg");
	this.shape_89.setTransform(225.7768,308.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(72,133,222,0.906)").s().p("AiTBHQBfAABFg7QBFg6ANhYQAYADAZgDQACBgg8BKQg8BNhfAWQgsgbgmglg");
	this.shape_90.setTransform(225.7768,312.25);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(72,133,226,0.957)").s().p("AiTBGQBfABBFg7QBFg6ANhYQAYADAZgDQACBfg8BLQg8BMhfAXQgsgbgmgmg");
	this.shape_91.setTransform(225.7768,315.15);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(73,134,230,0.996)").s().p("AiTBHQBfAABFg7QBFg6ANhYQAYADAZgDQACBgg8BKQg8BNhfAWQgsgcgmgkg");
	this.shape_92.setTransform(225.7768,317.55);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#4986E6").s().p("AiTBGQBfACBFg8QBFg5ANhZQAYACAZgCQACBfg8BLQg8BMhfAXQgsgbgmgmg");
	this.shape_93.setTransform(225.7768,319.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#4986E6").s().p("AiTBHQBfABBFg8QBFg6ANhYQAYACAZgCQACBgg8BKQg8BNhfAWQgsgcgmgkg");
	this.shape_94.setTransform(225.7768,321.05);
	this.shape_94._off = true;

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#4986E6").s().p("AiTBGQBfACBFg8QBFg5ANhZQAYACAZgCQACBfg8BLQg8BNhfAWQgsgbgmgmg");
	this.shape_95.setTransform(225.7768,322.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#4986E6").s().p("AiTBHQBfAABFg7QBFg6ANhYQAYADAZgDQACBfg8BLQg8BNhfAWQgsgbgmglg");
	this.shape_96.setTransform(225.7768,323.05);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#4986E6").s().p("AiTBHQBfAABFg7QBFg6ANhYQAYADAZgDQACBgg8BKQg8BNhfAWQgsgbgmglg");
	this.shape_97.setTransform(225.7768,323.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#4986E6").s().p("AiTBHQBfAABFg7QBFg6ANhYQAYADAZgDQACBfg8BLQg8BMhfAXQgsgbgmglg");
	this.shape_98.setTransform(225.7768,320.55);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#4986E6").s().p("AiTBGQBfACBFg8QBFg6ANhYQAYACAZgCQACBfg8BLQg8BNhfAWQgsgbgmgmg");
	this.shape_99.setTransform(225.7768,319.85);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#4986E6").s().p("AiTBHQBfAABFg7QBFg5ANhZQAYADAZgDQACBfg8BLQg8BMhfAXQgsgbgmglg");
	this.shape_100.setTransform(225.7768,319.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#4986E6").s().p("AiTBHQBfAABFg7QBFg5ANhZQAYADAZgDQACBgg8BKQg8BMhfAXQgsgcgmgkg");
	this.shape_101.setTransform(225.7768,318.65);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#4986E6").s().p("AiTBHQBfAABFg7QBFg5ANhZQAYADAZgDQACBgg8BKQg8BMhfAXQgsgbgmglg");
	this.shape_102.setTransform(225.7768,318.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_81}]},14).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93,p:{y:319.5}}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97,p:{y:323.5}}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_97,p:{y:323.5}}]},1).to({state:[{t:this.shape_93,p:{y:323.1}}]},1).to({state:[{t:this.shape_97,p:{y:322.6}}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_93,p:{y:321.3}}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99,p:{y:319.85}}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_99,p:{y:317.8}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_94).wait(27).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,y:323.75},0).wait(1).to({_off:true},1).wait(3).to({_off:false,y:321.95},0).to({_off:true},1).wait(6).to({_off:false,y:317.9},0).to({_off:true},1).wait(1));

	// Layer_11
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(57,122,147,0)").s().p("AhkASQAdglAogZQApgaAxgHQAdAuANAwQggAFgbARQgaAPgQAYQgsgkg4gYg");
	this.shape_103.setTransform(247.1,225.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(85,133,139,0.149)").s().p("AhkASQAcglApgZQAqgaAwgHQAdAuANAwQggAFgbARQgZAPgRAYQgsgkg4gYg");
	this.shape_104.setTransform(247,234.25);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(111,143,132,0.286)").s().p("AhkASQAdglApgZQApgZAwgIQAdAuANAwQggAFgbARQgZAPgRAYQgsgkg4gYg");
	this.shape_105.setTransform(246.95,242);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(134,152,125,0.408)").s().p("AhkASQAcglApgZQApgaAxgIQAdAvANAwQggAFgbARQgZAPgRAZQgsgmg4gXg");
	this.shape_106.setTransform(246.9,249);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(155,160,119,0.518)").s().p("AhkASQAcglApgZQApgaAxgIQAdAvANAwQggAFgbARQgaAPgQAZQgsgmg4gXg");
	this.shape_107.setTransform(246.8,255.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(174,167,114,0.62)").s().p("AhkASQAdglApgYQApgaAwgJQAdAvANAwQggAFgbARQgaAQgQAYQgsgmg4gXg");
	this.shape_108.setTransform(246.75,260.95);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(190,174,109,0.706)").s().p("AhkASQAcglApgZQApgZAxgJQAdAvANAwQggAFgbARQgaAPgQAZQgsgmg4gXg");
	this.shape_109.setTransform(246.7,265.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(205,179,105,0.784)").s().p("AhkASQAdglApgYQApgaAwgJQAdAvANAwQggAFgbARQgaAQgQAYQgsglg4gYg");
	this.shape_110.setTransform(246.65,270.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(218,184,101,0.851)").s().p("AhkASQAdglApgZQApgZAwgJQAdAvANAwQggAFgbARQgaAPgQAZQgsgmg4gXg");
	this.shape_111.setTransform(246.65,274.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(228,188,98,0.906)").s().p("AhkASQAdglAogYQApgaAxgJQAdAvANAwQggAFgbARQgaAQgQAXQgsgkg4gYg");
	this.shape_112.setTransform(246.6,277.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(238,192,95,0.957)").s().p("AhkASQAcglApgZQAqgaAwgHQAdAuANAwQggAFgbARQgZAPgRAZQgsglg4gYg");
	this.shape_113.setTransform(246.55,280.15);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(245,195,93,0.996)").s().p("AhkASQAcglApgYQAqgaAwgJQAdAvANAwQggAFgbARQgZAQgRAYQgsglg4gYg");
	this.shape_114.setTransform(246.55,282.45);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F6C35D").s().p("AhkASQAcglApgZQAqgZAwgJQAdAvANAwQggAFgbARQgZAPgRAZQgsgmg4gXg");
	this.shape_115.setTransform(246.55,284.35);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F6C35D").s().p("AhkASQAdglApgZQApgZAwgJQAdAvANAwQggAFgbARQgZAPgRAZQgsgmg4gXg");
	this.shape_116.setTransform(246.5,285.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F6C35D").s().p("AhkASQAdglApgZQApgaAwgHQAdAuANAwQggAFgbARQgZAPgRAZQgsglg4gYg");
	this.shape_117.setTransform(246.5,286.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F6C35D").s().p("AhkASQAdglApgZQApgaAwgIQAdAvANAwQggAFgbARQgZAPgRAZQgsgmg4gXg");
	this.shape_118.setTransform(246.5,287.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F6C35D").s().p("AhkASQAdglApgZQApgaAwgHQAdAuANAwQggAFgbARQgZAPgRAYQgsglg4gXg");
	this.shape_119.setTransform(246.5,288.35);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F6C35D").s().p("AhkASQAdglApgYQApgaAwgJQAdAvANAwQggAFgbARQgZAQgRAXQgsgkg4gYg");
	this.shape_120.setTransform(246.5,287.75);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#F6C35D").s().p("AhkASQAdglApgYQApgbAwgHQAdAuANAwQggAFgbARQgZAPgRAYQgsglg4gXg");
	this.shape_121.setTransform(246.5,286.65);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#F6C35D").s().p("AhkASQAcglApgYQAqgaAwgJQAdAvANAwQggAFgbARQgZAQgRAYQgsglg4gYg");
	this.shape_122.setTransform(246.55,284.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F6C35D").s().p("AhkASQAcglApgYQAqgbAwgHQAdAuANAwQggAFgbARQgZAQgRAXQgsgkg4gYg");
	this.shape_123.setTransform(246.55,284.05);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F6C35D").s().p("AhkASQAcglApgYQAqgbAwgHQAdAuANAwQggAFgbARQgZAPgRAYQgsglg4gXg");
	this.shape_124.setTransform(246.55,283.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F6C35D").s().p("AhkASQAcglApgYQAqgaAwgJQAdAvANAwQggAFgbARQgZAQgRAXQgsgkg4gYg");
	this.shape_125.setTransform(246.55,282.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F6C35D").s().p("AhkASQAdglAogZQApgaAxgHQAdAuANAwQggAFgbARQgaAPgQAYQgsgkg4gYg");
	this.shape_126.setTransform(246.55,282.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_103}]},14).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115,p:{y:284.35}}]},1).to({state:[{t:this.shape_116,p:{y:285.8}}]},1).to({state:[{t:this.shape_117,p:{y:286.9}}]},1).to({state:[{t:this.shape_118,p:{y:287.7}}]},1).to({state:[{t:this.shape_118,p:{y:288.15}}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_118,p:{y:288.15}}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_118,p:{y:287.25}}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_117,p:{y:286}}]},1).to({state:[{t:this.shape_116,p:{y:285.35}}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_115,p:{y:283.1}}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).wait(1));

	// Layer_12
	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(57,122,147,0)").s().p("AgaAYQgtgWgyAFQAkgzA0gqQA2AOAqAlQApAkASA1QgpAKgmAXQgagqgrgVg");
	this.shape_127.setTransform(100.525,218.525);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(66,120,153,0.149)").s().p("AgaAYQgtgWgyAFQAkgzA0gqQA2AOAqAlQApAkASA1QgpAKgmAXQgagqgrgVg");
	this.shape_128.setTransform(92.825,230.425);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(74,118,158,0.286)").s().p("AgaAYQgtgWgyAFQAkgzA0gqQA2AOAqAlQApAkASA1QgpAKgmAXQgagqgrgVg");
	this.shape_129.setTransform(85.825,241.225);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(81,116,162,0.408)").s().p("AgaAYQgtgWgyAFQAkgzA0gqQA2AOAqAlQApAkASA1QgpAKgmAXQgagqgrgVg");
	this.shape_130.setTransform(79.525,250.975);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(87,115,166,0.518)").s().p("AgaAYQgtgWgyAFQAkgzA0gqQA2AOAqAlQApAkASA1QgpAKgmAXQgagqgrgVg");
	this.shape_131.setTransform(73.825,259.775);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(93,113,170,0.62)").s().p("AgaAYQgtgWgyAFQAkgzA0gqQA2AOAqAlQApAkASA1QgpAKgmAXQgagqgrgVg");
	this.shape_132.setTransform(68.775,267.625);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(98,112,173,0.706)").s().p("AgaAYQgtgWgyAFQAkgzA0gqQA2AOAqAlQApAkASA1QgpAKgmAXQgagqgrgVg");
	this.shape_133.setTransform(64.275,274.575);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(102,111,176,0.784)").s().p("AgaAYQgtgWgyAFQAkgzA0gqQA2AOAqAlQApAkASA1QgpAKgmAXQgagqgrgVg");
	this.shape_134.setTransform(60.325,280.675);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(106,110,178,0.851)").s().p("AgaAYQgtgWgyAFQAkgzA0gqQA2AOAqAlQApAkASA1QgpAKgmAXQgagqgrgVg");
	this.shape_135.setTransform(56.875,286.025);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(110,109,181,0.906)").s().p("AgaAYQgtgWgyAFQAkgzA0gqQA2AOAqAlQApAkASA1QgpAKgmAXQgagqgrgVg");
	this.shape_136.setTransform(53.925,290.575);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(112,109,182,0.957)").s().p("AgaAYQgtgWgyAFQAkgzA0gqQA2AOAqAlQApAkASA1QgpAKgmAXQgagqgrgVg");
	this.shape_137.setTransform(51.425,294.425);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(115,108,184,0.996)").s().p("AgaAYQgtgWgyAFQAkgzA0gqQA2AOAqAlQApAkASA1QgpAKgmAXQgagqgrgVg");
	this.shape_138.setTransform(49.325,297.675);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#736CB8").s().p("AgaAYQgtgWgyAFQAkgzA0gqQA2AOAqAlQApAkASA1QgpAKgmAXQgagqgrgVg");
	this.shape_139.setTransform(47.625,300.275);
	this.shape_139._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_127}]},14).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_139}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_139).wait(26).to({_off:false},0).wait(1).to({x:46.325,y:302.325},0).wait(1).to({x:45.325,y:303.825},0).wait(1).to({x:44.625,y:304.925},0).wait(1).to({x:44.225,y:305.575},0).wait(1).to({x:44.025,y:305.875},0).wait(2).to({x:44.225,y:305.575},0).wait(1).to({x:44.575,y:305.025},0).wait(1).to({x:45.025,y:304.325},0).wait(1).to({x:45.525,y:303.525},0).wait(1).to({x:46.125,y:302.625},0).wait(1).to({x:46.725,y:301.675},0).wait(1).to({x:47.325,y:300.725},0).wait(1).to({x:47.925,y:299.875},0).wait(1).to({x:48.375,y:299.125},0).wait(1).to({x:48.775,y:298.525},0).wait(1).to({x:49.025,y:298.125},0).wait(1).to({x:49.125,y:297.975},0).wait(1));

	// Layer_13
	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(57,122,147,0)").s().p("Ah1AiQAOhBAqhEQA0AGAtAXQAvAYAjAnQhgAqhLBAQgQgtgwgUg");
	this.shape_140.setTransform(271.325,243.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(66,134,152,0.149)").s().p("Ah1AiQAOhBAqhEQA0AGAtAYQAvAXAjAoQhgAphLBAQgQgtgwgUg");
	this.shape_141.setTransform(275.525,249.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(74,145,157,0.286)").s().p("Ah1AiQAOhBAqhDQA0AFAtAYQAvAYAjAnQhgAphLBBQgQgugwgUg");
	this.shape_142.setTransform(279.275,254.35);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(82,154,161,0.408)").s().p("Ah1AiQAOhBAqhDQA0AFAtAXQAvAZAjAmQhgAqhLBBQgQgugwgUg");
	this.shape_143.setTransform(282.725,259.05);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(89,163,165,0.518)").s().p("Ah1AiQAOhBAqhEQA0AGAtAYQAvAXAjAoQhgAphLBBQgQgugwgUg");
	this.shape_144.setTransform(285.825,263.25);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(95,171,168,0.62)").s().p("Ah1AiQAOhBAqhEQA0AGAtAXQAvAYAjAnQhgAqhLBAQgQgtgwgUg");
	this.shape_145.setTransform(288.575,267);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(100,178,171,0.706)").s().p("Ah1AiQAOhBAqhDQA0AFAtAXQAvAZAjAmQhgAqhLBBQgQgugwgUg");
	this.shape_146.setTransform(291.025,270.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(105,184,174,0.784)").s().p("Ah1AiQAOhBAqhDQA0AFAtAYQAvAYAjAnQhgAphLBBQgQgugwgUg");
	this.shape_147.setTransform(293.175,273.25);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(109,189,176,0.851)").s().p("Ah1AiQAOhBAqhDQA0AFAtAXQAvAYAjAnQhgAqhLBAQgQgtgwgUg");
	this.shape_148.setTransform(295.025,275.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(112,194,178,0.906)").s().p("Ah1AiQAOhBAqhDQA0AFAtAXQAvAZAjAmQhgAqhLBBQgQgugwgUg");
	this.shape_149.setTransform(296.625,277.95);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(115,197,179,0.957)").s().p("Ah1AiQAOhBAqhEQA0AGAtAYQAvAXAjAoQhgAphLBAQgQgtgwgUg");
	this.shape_150.setTransform(297.975,279.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(118,201,181,0.996)").s().p("Ah1AiQAOhBAqhDQA0AFAtAYQAvAYAjAnQhgAphLBBQgQgugwgUg");
	this.shape_151.setTransform(299.125,281.35);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#76C9B5").s().p("Ah1AiQAOhBAqhEQA0AGAtAYQAvAXAjAoQhgAphLBBQgQgugwgUg");
	this.shape_152.setTransform(300.025,282.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#76C9B5").s().p("Ah1AiQAOhBAqhDQA0AFAtAXQAvAYAjAnQhgAqhLBAQgQgtgwgUg");
	this.shape_153.setTransform(300.725,283.55);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#76C9B5").s().p("Ah1AiQAOhBAqhEQA0AGAtAYQAvAXAjAoQhgAphLBAQgQgtgwgUg");
	this.shape_154.setTransform(301.275,284.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#76C9B5").s().p("Ah1AiQAOhBAqhDQA0AFAtAYQAvAYAjAmQhgAqhLBBQgQgugwgUg");
	this.shape_155.setTransform(301.875,285.15);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#76C9B5").s().p("Ah1AiQAOhBAqhEQA0AGAtAXQAvAYAjAnQhgAqhLBAQgQgtgwgUg");
	this.shape_156.setTransform(301.725,284.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#76C9B5").s().p("Ah1AiQAOhBAqhDQA0AFAtAYQAvAYAjAnQhgAphLBBQgQgugwgUg");
	this.shape_157.setTransform(301.175,284.15);
	this.shape_157._off = true;

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#76C9B5").s().p("Ah1AiQAOhBAqhEQA0AGAtAXQAvAZAjAmQhgAqhLBAQgQgtgwgUg");
	this.shape_158.setTransform(299.875,282.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#76C9B5").s().p("Ah1AiQAOhBAqhDQA0AFAtAXQAvAZAjAmQhgAqhLBBQgQgugwgUg");
	this.shape_159.setTransform(299.275,281.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_140}]},14).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152,p:{x:300.025,y:282.6}}]},1).to({state:[{t:this.shape_153,p:{x:300.725,y:283.55}}]},1).to({state:[{t:this.shape_154,p:{x:301.275,y:284.3}}]},1).to({state:[{t:this.shape_153,p:{x:301.675,y:284.8}}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_152,p:{x:302.025,y:285.3}}]},1).to({state:[{t:this.shape_153,p:{x:301.975,y:285.25}}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156,p:{x:301.725,y:284.9}}]},1).to({state:[{t:this.shape_156,p:{x:301.475,y:284.55}}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_154,p:{x:299.625,y:282.05}}]},1).to({state:[{t:this.shape_156,p:{x:299.425,y:281.75}}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_156,p:{x:299.225,y:281.5}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_157).wait(36).to({_off:false},0).wait(1).to({x:300.825,y:283.7},0).wait(1).to({x:300.525,y:283.25},0).wait(1).to({x:300.175,y:282.8},0).to({_off:true},1).wait(5));

	// Layer_14
	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(57,122,147,0)").s().p("AgxBAQiFgrhphSQAhgTAXgWQBkBDB5AfQCPAjCbgWQgDAqgLAxQgjADgjAAQiEAAh5gng");
	this.shape_160.setTransform(83.95,155.8852);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(81,114,141,0.149)").s().p("AgxBAQiFgrhphSQAggTAYgWQBlBDB4AfQCPAjCbgWQgDAqgKAxQgkADgjAAQiEAAh5gng");
	this.shape_161.setTransform(77.1,140.2852);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(103,106,136,0.286)").s().p("AgxBAQiFgrhphSQAhgTAXgWQBlBDB4AfQCPAjCbgWQgCAqgMAxQgjADgjAAQiEAAh5gng");
	this.shape_162.setTransform(70.85,126.0852);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(123,99,131,0.408)").s().p("AgxBAQiFgrhphSQAhgTAXgWQBkBDB5AfQCPAjCbgWQgDAqgLAxQgjADgjAAQiEAAh5gng");
	this.shape_163.setTransform(65.2,113.2352);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(141,93,126,0.518)").s().p("AgxBAQiFgrhphSQAggTAYgWQBkBDB5AfQCPAjCbgWQgCAqgLAxQgkADgjAAQiEAAh5gng");
	this.shape_164.setTransform(60.1,101.7352);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(157,87,122,0.62)").s().p("AgxBAQiFgrhphSQAggTAYgWQBkBDB5AfQCPAjCbgWQgCAqgLAxQgkADgjAAQiEAAh5gng");
	this.shape_165.setTransform(55.6,91.4352);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(171,82,119,0.706)").s().p("AgxBAQiFgrhphSQAggTAYgWQBkBDB5AfQCPAjCbgWQgCAqgLAxQgkADgjAAQiEAAh5gng");
	this.shape_166.setTransform(51.55,82.2852);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(183,78,116,0.784)").s().p("AgxBAQiFgrhphSQAggTAYgWQBlBDB4AfQCPAjCbgWQgCAqgLAxQgkADgjAAQiEAAh5gng");
	this.shape_167.setTransform(48.05,74.2852);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(194,74,113,0.851)").s().p("AgxBAQiFgrhphSQAhgTAXgWQBkBDB5AfQCPAjCbgWQgDAqgLAxQgjADgjAAQiEAAh5gng");
	this.shape_168.setTransform(44.95,67.2852);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(203,71,111,0.906)").s().p("AgxBAQiFgrhphSQAggTAYgWQBlBDB4AfQCPAjCbgWQgCAqgLAxQgkADgjAAQiEAAh5gng");
	this.shape_169.setTransform(42.3,61.2852);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(211,68,109,0.957)").s().p("AgxBAQiFgrhphSQAggTAYgWQBkBDB5AfQCPAjCbgWQgDAqgKAxQgkADgjAAQiEAAh5gng");
	this.shape_170.setTransform(40.1,56.2352);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(217,66,107,0.996)").s().p("AgxBAQiFgrhphSQAggTAYgWQBlBDB4AfQCPAjCbgWQgCAqgMAxQgjADgjAAQiEAAh5gng");
	this.shape_171.setTransform(38.25,51.9852);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#DA426B").s().p("AgxBAQiFgrhphSQAhgTAXgWQBkBDB5AfQCPAjCbgWQgDAqgLAxQgjADgjAAQiEAAh5gng");
	this.shape_172.setTransform(36.75,48.5852);
	this.shape_172._off = true;

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#DA426B").s().p("AgxBAQiFgrhphSQAggTAYgWQBlBDB4AfQCPAjCbgWQgCAqgLAxQgkADgjAAQiEAAh5gng");
	this.shape_173.setTransform(35.55,45.8852);
	this.shape_173._off = true;

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#DA426B").s().p("AgxBAQiFgrhphSQAggTAYgWQBlBDB4AfQCPAjCbgWQgCAqgMAxQgjADgjAAQiEAAh5gng");
	this.shape_174.setTransform(34.65,43.8852);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#DA426B").s().p("AgxBAQiFgrhphSQAhgTAXgWQBlBDB4AfQCPAjCbgWQgCAqgMAxQgjADgjAAQiEAAh5gng");
	this.shape_175.setTransform(33.5,41.1852);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#DA426B").s().p("AgxBAQiFgrhphSQAggTAYgWQBlBDB4AfQCPAjCbgWQgDAqgKAxQgkADgjAAQiEAAh5gng");
	this.shape_176.setTransform(34.35,43.2352);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#DA426B").s().p("AgxBAQiFgrhphSQAggTAYgWQBkBDB5AfQCPAjCbgWQgDAqgKAxQgkADgjAAQiEAAh5gng");
	this.shape_177.setTransform(36.95,49.0852);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_160}]},14).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_175,p:{y:41.1852,x:33.5}}]},1).to({state:[{t:this.shape_175,p:{y:41.2352,x:33.5}}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_175,p:{y:42.3352,x:33.95}}]},1).to({state:[{t:this.shape_176,p:{x:34.35,y:43.2352}}]},1).to({state:[{t:this.shape_175,p:{y:44.3352,x:34.85}}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_177,p:{x:36.95,y:49.0852}}]},1).to({state:[{t:this.shape_177,p:{x:37.4,y:50.0852}}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_176,p:{x:37.95,y:51.3852}}]},1).to({state:[{t:this.shape_172}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_172).wait(26).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:34.05,y:42.4352},0).to({_off:true},1).wait(7).to({_off:false,x:35.4,y:45.5352},0).to({_off:true},1).wait(4).to({_off:false,x:37.75,y:50.8852},0).to({_off:true},1).wait(1).to({_off:false,x:38.05,y:51.5852},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_173).wait(27).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:33.65,y:41.5852},0).to({_off:true},1).wait(2).to({_off:false,y:41.6352},0).to({_off:true},1).wait(4).to({_off:false,x:35.9,y:46.7352},0).wait(1).to({x:36.45,y:47.9852},0).to({_off:true},1).wait(5));

	// Layer_15
	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(57,122,147,0)").s().p("AhagLQAjgcAqgNQAqgOAuAEQAPAwAAAuQgdgDgcAJQgbAIgSASQgfgqgvghg");
	this.shape_178.setTransform(136.55,159.74);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(85,133,139,0.149)").s().p("AhagLQAjgcAqgNQAqgOAuAEQAPAwAAAuQgdgDgcAJQgbAIgSASQgfgqgvghg");
	this.shape_179.setTransform(131.65,146.14);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(111,143,132,0.286)").s().p("AhagLQAjgcAqgNQAqgOAuAEQAPAwAAAuQgdgDgcAJQgbAIgSASQgfgqgvghg");
	this.shape_180.setTransform(127.15,133.79);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(134,152,125,0.408)").s().p("AhagLQAjgcAqgNQAqgOAuAEQAPAwAAAuQgdgDgcAJQgbAIgSASQgfgqgvghg");
	this.shape_181.setTransform(123.1,122.59);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("rgba(155,160,119,0.518)").s().p("AhagLQAjgcAqgNQAqgOAuAEQAPAwAAAuQgdgDgcAJQgbAIgSASQgfgqgvghg");
	this.shape_182.setTransform(119.5,112.54);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(174,167,114,0.62)").s().p("AhagLQAjgcAqgNQAqgOAtAEQAQAwAAAuQgdgDgcAJQgbAIgSASQgfgqgvghg");
	this.shape_183.setTransform(116.25,103.54);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("rgba(190,174,109,0.706)").s().p("AhZgLQAigcAqgNQAqgOAtAEQAPAwACAuQgegDgcAJQgaAIgUASQgegqgughg");
	this.shape_184.setTransform(113.35,95.59);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(205,179,105,0.784)").s().p("AhagLQAjgcAqgNQAqgOAtAEQAQAwAAAuQgdgDgcAJQgbAIgSASQgfgqgvghg");
	this.shape_185.setTransform(110.85,88.59);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(218,184,101,0.851)").s().p("AhZgLQAigcAqgNQAqgOAtAEQAQAwABAuQgegDgcAJQgaAIgUASQgegqgughg");
	this.shape_186.setTransform(108.65,82.54);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(228,188,98,0.906)").s().p("AhZgLQAigcAqgNQAqgOAuAEQAPAwABAuQgegDgcAJQgaAIgUASQgegqgughg");
	this.shape_187.setTransform(106.75,77.29);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(238,192,95,0.957)").s().p("AhZgLQAigcAqgNQAqgOAtAEQAPAwACAuQgegDgcAJQgaAIgUASQgegqgughg");
	this.shape_188.setTransform(105.15,72.89);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(245,195,93,0.996)").s().p("AhagLQAjgcAqgNQAqgOAuAEQAOAwABAuQgdgDgcAJQgbAIgSASQgfgqgvghg");
	this.shape_189.setTransform(103.85,69.19);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#F6C35D").s().p("AhagLQAjgcAqgNQAqgOAtAEQAQAwAAAuQgdgDgcAJQgbAIgSASQgfgqgvghg");
	this.shape_190.setTransform(102.75,66.24);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#F6C35D").s().p("AhZgLQAigcAqgNQAqgOAtAEQAQAwABAuQgegDgcAJQgaAIgUASQgegqgughg");
	this.shape_191.setTransform(101.9,63.89);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#F6C35D").s().p("AhagLQAjgcAqgNQAqgOAuAEQAOAwACAuQgegDgcAJQgbAIgSASQgfgqgvghg");
	this.shape_192.setTransform(101.25,62.14);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#F6C35D").s().p("AhagLQAjgcAqgNQAqgOAtAEQAPAwABAuQgdgDgcAJQgbAIgSASQgfgqgvghg");
	this.shape_193.setTransform(100.85,60.89);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#F6C35D").s().p("AhZgLQAigcAqgNQAqgOAuAEQAPAwABAuQgegDgcAJQgaAIgUASQgegqgughg");
	this.shape_194.setTransform(100.55,60.14);
	this.shape_194._off = true;

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#F6C35D").s().p("AhagLQAjgcAqgNQAqgOAuAEQAOAwACAuQgegDgcAJQgbAIgTASQgegqgvghg");
	this.shape_195.setTransform(100.8,60.74);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#F6C35D").s().p("AhagLQAjgcAqgNQAqgOAuAEQAPAwAAAuQgdgDgcAJQgbAIgSASQgfgqgvghg");
	this.shape_196.setTransform(101.05,61.54);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#F6C35D").s().p("AhZgLQAigcAqgNQAqgOAtAEQAPAwABAuQgdgDgcAJQgbAIgSASQgfgqgughg");
	this.shape_197.setTransform(102.2,64.64);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#F6C35D").s().p("AhZgLQAigcAqgNQAqgOAtAEQAPAwABAuQgdgDgcAJQgaAIgUASQgegqgughg");
	this.shape_198.setTransform(102.55,65.69);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#F6C35D").s().p("AhZgLQAigcAqgNQAqgOAtAEQAPAwACAuQgegDgcAJQgaAIgUASQgegqgughg");
	this.shape_199.setTransform(102.9,66.69);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_178}]},14).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190,p:{x:102.75,y:66.24}}]},1).to({state:[{t:this.shape_191,p:{x:101.9,y:63.89}}]},1).to({state:[{t:this.shape_192,p:{x:101.25,y:62.14}}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196,p:{x:101.05,y:61.54}}]},1).to({state:[{t:this.shape_190,p:{x:101.4,y:62.49}}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_191,p:{x:103.25,y:67.54}}]},1).to({state:[{t:this.shape_192,p:{x:103.5,y:68.24}}]},1).to({state:[{t:this.shape_190,p:{x:103.65,y:68.69}}]},1).to({state:[{t:this.shape_196,p:{x:103.7,y:68.84}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_194).wait(30).to({_off:false},0).wait(1).to({x:100.45,y:59.79},0).wait(1).to({y:59.84},0).wait(1).to({x:100.55,y:60.14},0).to({_off:true},1).wait(3).to({_off:false,x:101.8,y:63.54},0).to({_off:true},1).wait(7));

	// Layer_16
	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("rgba(57,122,147,0)").s().p("AAKAKQgogvg9gfQAvgcA2gIQAtAvAVA3QAUAygFAwQgRABgNAIQgNgzgmgsg");
	this.shape_200.setTransform(161.5172,142.875);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("rgba(62,134,158,0.149)").s().p("AAKAKQgogvg9gfQAvgcA2gIQAtAvAVA3QAUAygFAwQgRABgNAIQgNgzgmgsg");
	this.shape_201.setTransform(159.0172,128.025);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(67,145,168,0.286)").s().p("AAKAKQgogvg9gfQAvgcA2gIQAtAvAVA3QAUAygFAwQgRABgNAIQgNgzgmgsg");
	this.shape_202.setTransform(156.7672,114.525);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("rgba(71,154,176,0.408)").s().p("AAKAKQgogvg9gfQAvgcA2gIQAtAvAVA3QAUAygFAwQgRABgNAIQgNgzgmgsg");
	this.shape_203.setTransform(154.7172,102.275);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("rgba(75,163,184,0.518)").s().p("AAKAKQgogvg9gfQAvgcA2gIQAtAvAVA3QAUAygFAwQgRABgNAIQgNgzgmgsg");
	this.shape_204.setTransform(152.8672,91.325);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("rgba(79,171,191,0.62)").s().p("AAKAKQgogvg9gfQAvgcA2gIQAtAvAVA3QAUAygFAwQgRABgNAIQgNgzgmgsg");
	this.shape_205.setTransform(151.2172,81.525);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("rgba(82,178,198,0.706)").s().p("AAKAKQgogvg9gfQAvgcA2gIQAtAvAVA3QAUAygFAwQgRABgNAIQgNgzgmgsg");
	this.shape_206.setTransform(149.7672,72.825);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("rgba(84,184,203,0.784)").s().p("AAKAKQgogvg9gfQAvgcA2gIQAtAvAVA3QAUAygFAwQgRABgNAIQgNgzgmgsg");
	this.shape_207.setTransform(148.4672,65.175);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("rgba(87,189,208,0.851)").s().p("AAKAKQgogvg9gfQAvgcA2gIQAtAvAVA3QAUAygFAwQgRABgNAIQgNgzgmgsg");
	this.shape_208.setTransform(147.3672,58.525);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("rgba(89,194,212,0.906)").s().p("AAKAKQgogvg9gfQAvgcA2gIQAtAvAVA3QAUAygFAwQgRABgNAIQgNgzgmgsg");
	this.shape_209.setTransform(146.4172,52.825);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("rgba(90,197,216,0.957)").s().p("AAKAKQgogvg9gfQAvgcA2gIQAtAvAVA3QAUAygFAwQgRABgNAIQgNgzgmgsg");
	this.shape_210.setTransform(145.6172,47.975);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("rgba(92,201,219,0.996)").s().p("AAKAKQgogvg9gfQAvgcA2gIQAtAvAVA3QAUAygFAwQgRABgNAIQgNgzgmgsg");
	this.shape_211.setTransform(144.9172,43.975);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#5CC9DB").s().p("AAKAKQgogvg9gfQAvgcA2gIQAtAvAVA3QAUAygFAwQgRABgNAIQgNgzgmgsg");
	this.shape_212.setTransform(144.3672,40.725);
	this.shape_212._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_200}]},14).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_212).wait(26).to({_off:false},0).wait(1).to({x:143.9672,y:38.175},0).wait(1).to({x:143.6172,y:36.225},0).wait(1).to({x:143.4172,y:34.875},0).wait(1).to({x:143.2672,y:34.075},0).wait(1).to({x:143.2172,y:33.675},0).wait(1).to({y:33.725},0).wait(1).to({x:143.2672,y:34.075},0).wait(1).to({x:143.3672,y:34.725},0).wait(1).to({x:143.5172,y:35.625},0).wait(1).to({x:143.7172,y:36.675},0).wait(1).to({x:143.9172,y:37.775},0).wait(1).to({x:144.1172,y:38.975},0).wait(1).to({x:144.2672,y:40.125},0).wait(1).to({x:144.4672,y:41.225},0).wait(1).to({x:144.6172,y:42.175},0).wait(1).to({x:144.7672,y:42.925},0).wait(1).to({x:144.8172,y:43.375},0).wait(1).to({x:144.8672,y:43.575},0).wait(1));

	// Layer_17
	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("rgba(57,122,147,0)").s().p("AhXgTQAqgmA1gcQA+A9ASBjQgiADghAIQgmhPhGgag");
	this.shape_213.setTransform(219.75,168);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("rgba(81,114,144,0.149)").s().p("AhXgTQAqgmA1gcQA+A9ASBjQghADgiAIQgmhPhGgag");
	this.shape_214.setTransform(215.75,149.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("rgba(103,106,142,0.286)").s().p("AhXgTQAqgmA0gcQA/A9ASBjQgiADghAIQgnhPhFgag");
	this.shape_215.setTransform(212.1,131.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("rgba(123,99,139,0.408)").s().p("AhXgUQApglA1gcQA/A9ASBjQgiADghAIQgnhPhFgbg");
	this.shape_216.setTransform(208.8,116.35);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(141,93,137,0.518)").s().p("AhXgUQAqglA1gcQA+A9ASBjQghADgiAIQgmhPhGgbg");
	this.shape_217.setTransform(205.85,102.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("rgba(157,87,135,0.62)").s().p("AhXgUQApglA1gcQA/A9ASBjQghADgiAIQgnhPhFgbg");
	this.shape_218.setTransform(203.2,89.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("rgba(171,82,134,0.706)").s().p("AhXgUQAqgkA0gdQA/A9ASBjQgiADghAIQgnhPhFgbg");
	this.shape_219.setTransform(200.85,78.85);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("rgba(183,78,132,0.784)").s().p("AhXgTQApglA1gdQA/A9ASBjQghADgiAIQgnhPhFgag");
	this.shape_220.setTransform(198.8,69.15);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("rgba(194,74,131,0.851)").s().p("AhXgTQApgmA1gcQA/A9ASBjQghADgiAIQgnhPhFgag");
	this.shape_221.setTransform(197,60.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("rgba(203,71,130,0.906)").s().p("AhXgTQApglA1gdQA/A9ASBjQgiADghAIQgnhPhFgag");
	this.shape_222.setTransform(195.45,53.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("rgba(211,68,129,0.957)").s().p("AhXgUQAqgkA1gdQA+A9ASBjQghADgiAIQgmhPhGgbg");
	this.shape_223.setTransform(194.15,47.25);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("rgba(217,66,128,0.996)").s().p("AhXgTQApglA1gdQA/A9ASBjQgiADghAIQgnhPhFgag");
	this.shape_224.setTransform(193.05,42.15);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#DA4280").s().p("AhXgUQAqgkA1gdQA+A9ASBjQgiADghAIQgmhPhGgbg");
	this.shape_225.setTransform(192.2,38);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#DA4280").s().p("AhXgUQApgkA1gdQA/A9ASBjQghADgiAIQgnhPhFgbg");
	this.shape_226.setTransform(191.5,34.75);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#DA4280").s().p("AhXgUQApglA1gcQA/A9ASBjQgiADghAIQgnhPhFgbg");
	this.shape_227.setTransform(190.95,32.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#DA4280").s().p("AhXgTQAqglA1gdQA+A9ASBjQgiADghAIQgmhPhGgag");
	this.shape_228.setTransform(190.4,29.55);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#DA4280").s().p("AhXgTQAqglA1gdQA+A9ASBjQghADgiAIQgmhPhGgag");
	this.shape_229.setTransform(190.3,29.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#DA4280").s().p("AhXgUQAqglA1gcQA+A9ASBjQgiADghAIQgmhPhGgbg");
	this.shape_230.setTransform(190.4,29.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#DA4280").s().p("AhXgTQAqgmA1gcQA+A9ASBjQghADgiAIQgmhPhGgag");
	this.shape_231.setTransform(190.55,30.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#DA4280").s().p("AhXgTQApgmA1gcQA/A9ASBjQgiADghAIQgnhPhFgag");
	this.shape_232.setTransform(190.8,31.55);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#DA4280").s().p("AhXgUQAqgkA1gdQA+A9ASBjQghADgiAIQgmhPhGgbg");
	this.shape_233.setTransform(191.1,32.85);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#DA4280").s().p("AhXgUQAqgkA0gdQA/A9ASBjQgiADghAIQgnhPhFgbg");
	this.shape_234.setTransform(191.4,34.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#DA4280").s().p("AhXgUQAqglA1gcQA+A9ASBjQghADgiAIQgmhPhGgbg");
	this.shape_235.setTransform(192,37.25);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#DA4280").s().p("AhXgTQApgmA2gcQA+A9ASBjQgiADghAIQgnhPhFgag");
	this.shape_236.setTransform(192.3,38.65);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#DA4280").s().p("AhXgTQApglA2gdQA+A9ASBjQgiADghAIQgnhPhFgag");
	this.shape_237.setTransform(192.75,40.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#DA4280").s().p("AhXgTQAqgmA1gcQA+A9ASBjQgiADghAIQgmhPhGgag");
	this.shape_238.setTransform(192.95,41.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_213}]},14).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226,p:{x:191.5,y:34.75}}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_226,p:{x:190.6,y:30.6}}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232,p:{x:190.8,y:31.55}}]},1).to({state:[{t:this.shape_233,p:{x:191.1,y:32.85}}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_232,p:{x:191.7,y:35.8}}]},1).to({state:[{t:this.shape_235,p:{x:192,y:37.25}}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_235,p:{x:192.55,y:39.85}}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_233,p:{x:192.9,y:41.4}}]},1).to({state:[{t:this.shape_238}]},1).wait(1));

	// Layer_18
	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("rgba(57,122,147,0)").s().p("AiPBfQAjhxBhhiQBWALBGAzQhAAlgvAvQgoAqgaAtQgygdg9AHg");
	this.shape_239.setTransform(196.5,229.575);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("rgba(85,133,139,0.149)").s().p("AiQBfQAlhxBghiQBXALBEAzQg/AlgwAvQgnAqgaAtQgygdg+AHg");
	this.shape_240.setTransform(195.1,238.975);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("rgba(111,143,132,0.286)").s().p("AiPBfQAjhxBhhiQBWALBGAzQhAAlgvAvQgoAqgaAtQgygdg9AHg");
	this.shape_241.setTransform(193.8,247.525);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("rgba(134,152,125,0.408)").s().p("AiQBfQAlhxBghiQBWALBGAzQhAAlgwAvQgoAqgZAtQgygdg+AHg");
	this.shape_242.setTransform(192.6,255.275);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("rgba(155,160,119,0.518)").s().p("AiPBfQAjhxBhhiQBWALBGAzQhAAlgvAvQgoAqgaAtQgygdg9AHg");
	this.shape_243.setTransform(191.55,262.225);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("rgba(174,167,114,0.62)").s().p("AiPBfQAjhxBhhiQBWALBGAzQhAAlgvAvQgoAqgaAtQgygdg9AHg");
	this.shape_244.setTransform(190.65,268.425);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("rgba(190,174,109,0.706)").s().p("AiQBfQAkhxBhhiQBWALBFAzQg/AlgwAvQgoAqgZAtQgygdg+AHg");
	this.shape_245.setTransform(189.8,273.925);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("rgba(205,179,105,0.784)").s().p("AiQBfQAlhxBghiQBXALBEAzQg/AlgvAvQgoAqgaAtQgygdg+AHg");
	this.shape_246.setTransform(189.05,278.775);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("rgba(218,184,101,0.851)").s().p("AiQBfQAkhxBhhiQBWALBFAzQg/AlgwAvQgoAqgZAtQgygdg+AHg");
	this.shape_247.setTransform(188.45,282.975);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("rgba(228,188,98,0.906)").s().p("AiQBfQAlhxBghiQBXALBEAzQg/AlgvAvQgoAqgaAtQgygdg+AHg");
	this.shape_248.setTransform(187.9,286.575);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("rgba(238,192,95,0.957)").s().p("AiPBfQAjhxBhhiQBWALBGAzQhAAlgwAvQgoAqgZAtQgygdg9AHg");
	this.shape_249.setTransform(187.4,289.625);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("rgba(245,195,93,0.996)").s().p("AiPBfQAjhxBhhiQBWALBGAzQhAAlgvAvQgoAqgaAtQgygdg9AHg");
	this.shape_250.setTransform(187.05,292.175);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#F6C35D").s().p("AiQBfQAlhxBghiQBWALBGAzQhAAlgwAvQgoAqgZAtQgygdg+AHg");
	this.shape_251.setTransform(186.75,294.225);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#F6C35D").s().p("AiPBfQAjhxBhhiQBWALBGAzQhAAlgwAvQgoAqgZAtQgygdg9AHg");
	this.shape_252.setTransform(186.5,295.875);
	this.shape_252._off = true;

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#F6C35D").s().p("AiPBfQAjhxBhhiQBWALBGAzQhAAlgvAvQgoAqgaAtQgygdg9AHg");
	this.shape_253.setTransform(186.15,297.925);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#F6C35D").s().p("AiQBfQAlhxBghiQBXALBEAzQg/AlgwAvQgnAqgaAtQgygdg+AHg");
	this.shape_254.setTransform(186.1,298.425);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#F6C35D").s().p("AiPBfQAkhxBghiQBXALBEAzQg/AlgvAvQgoAqgaAtQgygdg9AHg");
	this.shape_255.setTransform(186.25,297.475);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#F6C35D").s().p("AiQBfQAlhxBghiQBXALBEAzQg/AlgvAvQgoAqgaAtQgygdg+AHg");
	this.shape_256.setTransform(186.35,296.825);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#F6C35D").s().p("AiQBfQAkhxBhhiQBWALBFAzQg/AlgwAvQgoAqgZAtQgygdg+AHg");
	this.shape_257.setTransform(186.65,294.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_239}]},14).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251,p:{x:186.75,y:294.225}}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_251,p:{x:186.3,y:297.075}}]},1).to({state:[{t:this.shape_253,p:{y:297.925,x:186.15}}]},1).to({state:[{t:this.shape_254,p:{x:186.1,y:298.425}}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_254,p:{x:186.1,y:298.425}}]},1).to({state:[{t:this.shape_253,p:{y:298.025,x:186.15}}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256,p:{x:186.35,y:296.825}}]},1).to({state:[{t:this.shape_256,p:{x:186.45,y:296.075}}]},1).to({state:[{t:this.shape_254,p:{x:186.55,y:295.325}}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_251,p:{x:186.75,y:293.925}}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_254,p:{x:187,y:292.525}}]},1).to({state:[{t:this.shape_253,p:{y:292.425,x:187}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_252).wait(27).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:186.05,y:298.675},0).wait(1).to({_off:true},1).wait(8).to({_off:false,x:186.85,y:293.325},0).wait(1).to({x:186.95,y:292.825},0).to({_off:true},1).wait(2));

	// Layer_19
	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("rgba(57,122,147,0)").s().p("AhuBDQAphYBShAQA4ARAqAoQhcAqgxBIQgkgVgsACg");
	this.shape_258.setTransform(294.225,150.8);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("rgba(59,124,159,0.149)").s().p("AhuBDQAphXBShBQA4AQAqApQhcAqgxBIQgkgVgsACg");
	this.shape_259.setTransform(290.325,133.6);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("rgba(62,125,171,0.286)").s().p("AhuBDQAphXBShBQA4ARAqAoQhcAqgxBIQgkgVgsACg");
	this.shape_260.setTransform(286.825,118);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("rgba(64,127,181,0.408)").s().p("AhuBEQAphZBShAQA4ARAqAoQhcAqgxBIQgkgVgsADg");
	this.shape_261.setTransform(283.625,103.85);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("rgba(65,128,190,0.518)").s().p("AhuBEQAphZBShAQA4AQAqApQhcAqgxBIQgkgVgsADg");
	this.shape_262.setTransform(280.725,91.15);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("rgba(67,129,198,0.62)").s().p("AhuBEQAphZBShAQA4AQAqApQhcAqgxBIQgkgVgsADg");
	this.shape_263.setTransform(278.175,79.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("rgba(68,130,206,0.706)").s().p("AhuBEQAphZBShAQA4ARAqAoQhcAqgxBIQgkgVgsADg");
	this.shape_264.setTransform(275.925,69.75);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("rgba(70,131,212,0.784)").s().p("AhuBDQAphYBShAQA4AQAqApQhcAqgxBIQgkgVgsACg");
	this.shape_265.setTransform(273.925,60.95);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("rgba(71,132,218,0.851)").s().p("AhuBEQAphZBShAQA4AQAqApQhcAqgxBIQgkgVgsADg");
	this.shape_266.setTransform(272.175,53.25);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("rgba(72,133,222,0.906)").s().p("AhuBDQAphXBShBQA4AQAqApQhcAqgxBIQgkgVgsACg");
	this.shape_267.setTransform(270.675,46.65);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("rgba(72,133,226,0.957)").s().p("AhuBDQAphXBShBQA4ARAqAoQhcAqgxBIQgkgVgsACg");
	this.shape_268.setTransform(269.425,41.05);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("rgba(73,134,230,0.996)").s().p("AhuBDQAphXBShBQA4AQAqApQhcAqgxBIQgkgVgsACg");
	this.shape_269.setTransform(268.375,36.4);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#4986E6").s().p("AhuBEQAphZBShAQA4AQAqApQhcAqgxBIQgkgVgsADg");
	this.shape_270.setTransform(267.525,32.65);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#4986E6").s().p("AhuBEQAphZBShAQA4ARAqAoQhcAqgxBIQgkgVgsADg");
	this.shape_271.setTransform(266.875,29.7);
	this.shape_271._off = true;

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#4986E6").s().p("AhuBDQAphYBShAQA4ARAqAoQhcAqgxBIQgkgVgsACg");
	this.shape_272.setTransform(265.775,24.95);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#4986E6").s().p("AhuBDQAphYBShAQA4AQAqApQhcAqgxBIQgkgVgsACg");
	this.shape_273.setTransform(265.675,24.5);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#4986E6").s().p("AhuBDQAphXBShBQA4ARAqAoQhcAqgxBIQgkgVgsACg");
	this.shape_274.setTransform(265.975,25.75);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#4986E6").s().p("AhuBEQAphYBShBQA4AQAqApQhcAqgxBIQgkgVgsADg");
	this.shape_275.setTransform(266.475,27.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_258}]},14).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270,p:{x:267.525,y:32.65}}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_270,p:{x:266.025,y:25.9}}]},1).to({state:[{t:this.shape_272,p:{x:265.775,y:24.95}}]},1).to({state:[{t:this.shape_273,p:{x:265.675,y:24.5}}]},1).to({state:[{t:this.shape_270,p:{x:265.725,y:24.55}}]},1).to({state:[{t:this.shape_270,p:{x:265.775,y:25}}]},1).to({state:[{t:this.shape_274,p:{x:265.975,y:25.75}}]},1).to({state:[{t:this.shape_273,p:{x:266.175,y:26.75}}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272,p:{x:267.075,y:30.6}}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_274,p:{x:267.925,y:34.3}}]},1).to({state:[{t:this.shape_274,p:{x:268.075,y:35.2}}]},1).to({state:[{t:this.shape_273,p:{x:268.225,y:35.75}}]},1).to({state:[{t:this.shape_272,p:{x:268.275,y:35.95}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_271).wait(27).to({_off:false},0).wait(1).to({x:266.375,y:27.45},0).to({_off:true},1).wait(8).to({_off:false,x:266.775,y:29.25},0).to({_off:true},1).wait(1).to({_off:false,x:267.375,y:31.95},0).wait(1).to({x:267.675,y:33.2},0).to({_off:true},1).wait(4));

	// Layer_20
	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("rgba(57,122,147,0)").s().p("Ag0A6QgSgugDg6QAigSAmgEQAlgFAmAJQgqBCgTBFQgcgVglAIg");
	this.shape_276.setTransform(284.575,122.6607);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("rgba(57,122,147,0.149)").s().p("Ag0A6QgSgugDg6QAigSAmgEQAlgFAmAJQgqBCgTBFQgcgVglAIg");
	this.shape_277.setTransform(288.375,106.3107);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("rgba(57,122,147,0.286)").s().p("Ag0A6QgSgugDg6QAigSAmgEQAlgFAmAJQgqBCgTBFQgcgVglAIg");
	this.shape_278.setTransform(291.875,91.4107);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("rgba(57,122,147,0.408)").s().p("Ag0A6QgSgugDg6QAigSAmgEQAlgFAmAJQgqBCgTBFQgcgVglAIg");
	this.shape_279.setTransform(294.975,77.9607);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("rgba(57,122,147,0.518)").s().p("Ag0A6QgSgugDg6QAigSAmgEQAlgFAmAJQgqBCgTBFQgcgVglAIg");
	this.shape_280.setTransform(297.825,65.8607);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("rgba(57,122,147,0.62)").s().p("Ag0A6QgSgugDg6QAigSAmgEQAlgFAmAJQgqBCgTBFQgcgVglAIg");
	this.shape_281.setTransform(300.325,55.0607);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("rgba(57,122,147,0.706)").s().p("Ag0A6QgSgugDg6QAigSAmgEQAlgFAmAJQgqBCgTBFQgcgVglAIg");
	this.shape_282.setTransform(302.575,45.5107);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("rgba(57,122,147,0.784)").s().p("Ag0A6QgSgugDg6QAigSAmgEQAlgFAmAJQgqBCgTBFQgcgVglAIg");
	this.shape_283.setTransform(304.525,37.1107);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("rgba(57,122,147,0.851)").s().p("Ag0A6QgSgugDg6QAigSAmgEQAlgFAmAJQgqBCgTBFQgcgVglAIg");
	this.shape_284.setTransform(306.225,29.7607);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("rgba(57,122,147,0.906)").s().p("Ag0A6QgSgugDg6QAigSAmgEQAlgFAmAJQgqBCgTBFQgcgVglAIg");
	this.shape_285.setTransform(307.725,23.5107);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("rgba(57,122,147,0.957)").s().p("Ag0A6QgSgugDg6QAigSAmgEQAlgFAmAJQgqBCgTBFQgcgVglAIg");
	this.shape_286.setTransform(308.925,18.1607);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("rgba(57,122,147,0.996)").s().p("Ag0A6QgSgugDg6QAigSAmgEQAlgFAmAJQgqBCgTBFQgcgVglAIg");
	this.shape_287.setTransform(309.975,13.7607);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#397A93").s().p("Ag0A6QgSgugDg6QAigSAmgEQAlgFAmAJQgqBCgTBFQgcgVglAIg");
	this.shape_288.setTransform(310.825,10.1607);
	this.shape_288._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_276}]},14).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_288).wait(26).to({_off:false},0).wait(1).to({x:311.475,y:7.3607},0).wait(1).to({x:311.975,y:5.2107},0).wait(1).to({x:312.325,y:3.7607},0).wait(1).to({x:312.525,y:2.8107},0).wait(1).to({x:312.625,y:2.4107},0).wait(1).to({y:2.4607},0).wait(1).to({x:312.525,y:2.8607},0).wait(1).to({x:312.325,y:3.6107},0).wait(1).to({x:312.125,y:4.5607},0).wait(1).to({x:311.875,y:5.7107},0).wait(1).to({x:311.575,y:6.9607},0).wait(1).to({x:311.275,y:8.2607},0).wait(1).to({x:310.975,y:9.5107},0).wait(1).to({x:310.675,y:10.7107},0).wait(1).to({x:310.425,y:11.7607},0).wait(1).to({x:310.225,y:12.5607},0).wait(1).to({x:310.125,y:13.1107},0).wait(1).to({x:310.075,y:13.3107},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,-11.5,324.8,362.3);


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
	this.instance.setTransform(37,38,1.7519,1.7519);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(37,38,1321,904);


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
	this.instance.setTransform(36.5,38,1.7519,1.7519);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36.5,38,1321,904);


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
p.nominalBounds = new cjs.Rectangle(0,0,447.7,46.9);


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
p.nominalBounds = new cjs.Rectangle(0,0,537.6,76);


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
	this.instance.setTransform(-52.5,159.75,0.6303,0.6303,0,0,0,415,265.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:748.55,y:265.55},15,cjs.Ease.cubicOut).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-314.1,-7.6,1477.6999999999998,538.9);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({mode:"synched",loop:false},0).wait(44).to({startPosition:44},0).to({_off:true},1).wait(16));

	// sb_arr
	this.instance_1 = new lib.sb_arr("single",0);
	this.instance_1.setTransform(160.85,27.15,1,1,0,0,0,10.6,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({mode:"synched",loop:false},0).wait(47).to({startPosition:44},0).to({_off:true},1).wait(16));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},58).to({state:[]},1).wait(16));

	// mo_sc4_btn
	this.instance_2 = new lib.mo_sc4btn();
	this.instance_2.setTransform(192.8,29.4,1,1,0,0,0,200.5,37.1);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,0.098)",7,7,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(58).to({_off:true},1).wait(16));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},22).to({alpha:1},8).wait(59));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:356.45,alpha:1},19,cjs.Ease.cubicOut).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:146,y:26.35,alpha:1},19,cjs.Ease.cubicOut).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},18).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:85.9,alpha:1},34,cjs.Ease.cubicOut).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:117.7,alpha:1},34,cjs.Ease.cubicOut).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,y:17.15,alpha:1},34,cjs.Ease.backOut).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,y:18.25,alpha:1},34,cjs.Ease.backOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.6,36.4);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({alpha:1,startPosition:29},15).to({startPosition:79},50).to({_off:true},1).wait(10));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({alpha:1,startPosition:29},15).to({startPosition:79},50).to({_off:true},1).wait(10));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({alpha:1},17).to({startPosition:0},50).to({_off:true},1).wait(10));

	// sb_tt_set
	this.instance_1 = new lib.sb_ttset_1("synched",0);
	this.instance_1.setTransform(488.35,64.7,1,1,0,0,0,102.9,39.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({x:173.25,y:64.95,alpha:1},17,cjs.Ease.cubicOut).to({startPosition:0},8).to({startPosition:0},50).to({_off:true},1).wait(10));

	// sb_tt_price
	this.instance_2 = new lib.sb_ttprice("synched",0);
	this.instance_2.setTransform(470.5,120.95,1,1,0,0,0,54.8,6.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({x:226.4,alpha:1},17,cjs.Ease.cubicOut).to({startPosition:0},8).to({startPosition:0},50).to({_off:true},1).wait(10));

	// sb_sc2_bg1
	this.instance_3 = new lib.sb_sc2bg1("synched",0);
	this.instance_3.setTransform(552.85,69,1,1,0,0,0,162.9,69);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:162.9,alpha:1},17,cjs.Ease.cubicOut).to({startPosition:0},62).to({_off:true},1).wait(10));

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
	this.instance.setTransform(886.35,69,1,1,0,0,0,278.9,69);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:278.9,startPosition:29},29,cjs.Ease.cubicOut).to({startPosition:19},50).to({_off:true},1).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1165.3,138.2);


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
	this.instance.setTransform(226.3,62.1,1,1,0,0,0,226.3,62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:757.25,mode:"single",startPosition:29},29,cjs.Ease.cubicOut).to({startPosition:29},50).to({_off:true},1).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,983.6,124.1);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({x:273.05},22,cjs.Ease.cubicOut).to({startPosition:0},50).to({_off:true},1).wait(10));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:487.55,mode:"single"},20,cjs.Ease.cubicOut).to({startPosition:0},50).to({_off:true},1).wait(10));

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
p.nominalBounds = new cjs.Rectangle(0,0,400,119.6);


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

	// sb_sc0-100
	this.instance = new lib.sb_sc0100("synched",0);
	this.instance.setTransform(192.45,67.2,1.6406,1.6406,0,0,0,93.9,41);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,y:67.15,alpha:1},29,cjs.Ease.cubicOut).wait(1));

	// sb_sc0-no
	this.instance_1 = new lib.sb_sc0no("synched",0);
	this.instance_1.setTransform(190.7,71.65,1,1,0,0,0,168.3,42);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},29,cjs.Ease.cubicOut).wait(1));

	// sb_sc0-bg-t2
	this.instance_2 = new lib.sb_sc0bgt2("synched",0);
	this.instance_2.setTransform(200,68,1,1,0,0,0,200,59.8);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},29,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,134.3);


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

	// sb_sc0-taiwan
	this.instance = new lib.sb_sc0taiwan("synched",0);
	this.instance.setTransform(151,143.9,1,1,0,0,0,151,30.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({x:480.3,y:118.3},24,cjs.Ease.cubicOut).wait(1));

	// sb_sc0-name
	this.instance_1 = new lib.sb_sc0name("synched",0);
	this.instance_1.setTransform(143.5,94.5,1,1,0,0,0,143.5,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:476.3,y:64.55},25,cjs.Ease.cubicOut).wait(5));

	// sb_sc0-bg-t1
	this.instance_2 = new lib.sb_sc0bgt1("synched",0);
	this.instance_2.setTransform(552.6,81.2,1,1,0,0,0,241,81.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},14,cjs.Ease.cubicOut).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,793.6,174.5);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({x:-17.65,y:512.15,alpha:1},16,cjs.Ease.cubicOut).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:349.95,alpha:1,startPosition:23},23,cjs.Ease.cubicOut).wait(67));

	// sb_bg_set
	this.instance_1 = new lib.sb_bgset("synched",0);
	this.instance_1.setTransform(721.8,154.9,1,1,0,0,0,174.4,16.5);
	this.instance_1.alpha = 0.8984;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:362.9,y:154.95},23,cjs.Ease.quartOut).wait(67));

	// sb_bg_free
	this.instance_2 = new lib.sb_bgfree("synched",0);
	this.instance_2.setTransform(461.6,140.7,1,0.0602,0,180,0,66.6,38.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:37.8,scaleY:1,skewX:0,y:100.55,alpha:1,startPosition:23},23,cjs.Ease.cubicOut).wait(67));

	// sb_tt_happy
	this.instance_3 = new lib.sb_tthappy("synched",0);
	this.instance_3.setTransform(13.05,105.65,1,1,0,0,0,153,65.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:278.5,y:108.05,alpha:1},23,cjs.Ease.backOut).wait(67));

	// sb_bg_happy
	this.instance_4 = new lib.sb_bghappy("synched",0);
	this.instance_4.setTransform(268.8,100.6,1,1,0,0,0,268.8,38);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1,startPosition:37},37).wait(53));

	// sb_tt_sentra
	this.instance_5 = new lib.sb_ttsentra("synched",0);
	this.instance_5.setTransform(360.4,29.9,1,1,0,0,0,144.8,15.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({y:39.65,alpha:1,startPosition:37},29,cjs.Ease.cubicOut).wait(53));

	// sb_bg_sentra
	this.instance_6 = new lib.sb_bgsentra("synched",0);
	this.instance_6.setTransform(561.35,39.1,0.0836,1,0,0,0,223.6,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:223.8,scaleX:1,x:313.65,y:39.15,startPosition:37},37,cjs.Ease.cubicOut).wait(53));

	// sb_tt_all
	this.instance_7 = new lib.sb_ttall("synched",0);
	this.instance_7.setTransform(360.5,-16.1,1,1,0,0,0,141.6,3.4);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:-3.1,alpha:1,startPosition:37},37,cjs.Ease.cubicOut).wait(53));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.9,-19.5,1073.1000000000001,230.3);


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
	this.instance.setTransform(453.95,26,1,1,0,0,0,115.5,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89));

	// an_sc4_2888
	this.instance_1 = new lib.an_sc42888("synched",0,false);
	this.instance_1.setTransform(381.3,258.95,1,1,0,0,0,299.9,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89));

	// an_sc4_7060
	this.instance_2 = new lib.an_sc47060("synched",0,false);
	this.instance_2.setTransform(-18.75,224.35,1,1,0,0,0,231.7,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89));

	// an_sc4_btn
	this.instance_3 = new lib.an_sc4btn("synched",0,false);
	this.instance_3.setTransform(573.65,265.45,1,1,0,0,0,201.5,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254.4,-4,1037.6000000000001,316);


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
	this.instance_4.setTransform(443.7,143.7,1,1,0,0,0,173.2,59.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(211.8,83.8,467.49999999999994,119.89999999999999);


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
	this.instance.setTransform(561.9,69,1,1,0,0,0,357.9,69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(77).to({startPosition:77},0).to({_off:true},1).wait(1).to({_off:false,startPosition:79},0).wait(1));

	// an_tt_JBL
	this.instance_1 = new lib.an_ttJBL("synched",0,false);
	this.instance_1.setTransform(66.7,257.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(77).to({startPosition:77},0).to({_off:true},1).wait(1).to({_off:false,startPosition:79},0).wait(1));

	// an_tt_light
	this.instance_2 = new lib.an_ttlight("synched",0,false);
	this.instance_2.setTransform(420.2,414.15,1,1,0,0,0,82,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(77).to({startPosition:77},0).to({_off:true},1).wait(1).to({_off:false,startPosition:79},0).wait(1));

	// an_sc2_pic1
	this.instance_3 = new lib.an_sc2_pic1("synched",0,false);
	this.instance_3.setTransform(-2.15,212.7,1,1,0,0,0,354.9,74.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(77).to({startPosition:77},0).to({_off:true},1).wait(1).to({_off:false,startPosition:79},0).wait(1));

	// an_sc2_bg2
	this.instance_4 = new lib.an_sc2bg2("synched",0,false);
	this.instance_4.setTransform(-37.25,235.5,1,1,0,0,0,491.8,62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(77).to({startPosition:77},0).to({_off:true},1).wait(1).to({_off:false,startPosition:79},0).wait(1));

	// an_sc2_pic2
	this.instance_5 = new lib.an_sc2_pic2("synched",0,false);
	this.instance_5.setTransform(574.35,357.95,1,1,0,0,0,568.4,81);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(77).to({startPosition:77},0).to({_off:true},1).wait(1).to({_off:false,startPosition:79},0).wait(1));

	// an_sc2_bg3
	this.instance_6 = new lib.an_sc2bg3("synched",0,false);
	this.instance_6.setTransform(582.6,321,1,1,0,0,0,582.6,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(77).to({startPosition:77},0).to({_off:true},1).wait(1).to({_off:false,startPosition:79},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-529,0,1694.3,438.9);


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
	this.instance.setTransform(172.2,308.75,1,1,0,0,0,158.7,171.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(82).to({startPosition:44},0).to({_off:true},1).wait(7));

	// an_sc0_man
	this.instance_1 = new lib.an_sc0_man("synched",0,false);
	this.instance_1.setTransform(454.85,272.1,1,1,0,0,0,138.3,296.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(82).to({startPosition:29},0).to({_off:true},1).wait(7));

	// an_sc0_t2
	this.instance_2 = new lib.an_sc0t2("synched",0,false);
	this.instance_2.setTransform(200,373,1,1,0,0,0,200,67.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(82).to({startPosition:29},0).to({_off:true},1).wait(7));

	// an_sc0_t1
	this.instance_3 = new lib.an_sc0t1("synched",0,false);
	this.instance_3.setTransform(85.2,268.2,1,1,0,0,0,396.8,87.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(82).to({startPosition:29},0).to({_off:true},1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311.6,-24,904.7,592.5);


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
	this.instance.setTransform(377.45,100.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(434));

	// scc4
	this.instance_1 = new lib.scc4("synched",0);
	this.instance_1.setTransform(586.7,286.1,0.5,0.5,0,0,0,387.6,152);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(345).to({_off:false},0).wait(89));

	// scc2
	this.instance_2 = new lib.scc2("synched",0,false);
	this.instance_2.setTransform(402.25,118.8,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(166).to({_off:false},0).to({mode:"single",startPosition:79},78).to({regX:0,regY:0,scaleX:0.0392,scaleY:0.0392,x:523.8,y:218.6,alpha:0},5).wait(185));

	// title
	this.instance_3 = new lib.title("synched",0,false);
	this.instance_3.setTransform(552.05,163.2,0.5,0.5,0,0,0,268.8,86.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90).to({_off:false},0).to({_off:true},76).wait(178).to({_off:false},0).wait(90));

	// scc0
	this.instance_4 = new lib.scc0("synched",0,false);
	this.instance_4.setTransform(536,226,0.5,0.5,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:29},83).to({x:232.45,alpha:0},12,cjs.Ease.cubicOut).to({_off:true},1).wait(338));

	// an_car1
	this.instance_5 = new lib.an_car1("synched",0,false);
	this.instance_5.setTransform(366.9,251.8,0.3876,0.3876,0,0,0,261.2,171.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(83).to({_off:false},0).to({startPosition:49},83).to({_off:true},1).wait(88).to({_off:false,regX:581.8,regY:265.5,scaleX:0.5,scaleY:0.5,x:447.95,y:291.2,startPosition:0},0).to({startPosition:49},85).to({regY:265.7,scaleX:0.325,scaleY:0.325,x:472,y:274.9},8).wait(86));

	// scc3
	this.instance_6 = new lib.scc3("synched",0,false);
	this.instance_6.setTransform(532.25,225.95,0.5,0.5,0,0,0,308.4,251.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(255).to({_off:false},0).to({startPosition:0},83).to({alpha:0,startPosition:34},6).wait(90));

	// sb_bg_normal
	this.instance_7 = new lib.sb_bg_normal("synched",0);
	this.instance_7.setTransform(536.55,227.4,0.2861,0.2861,0,0,0,697.2,489.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(89).to({_off:false},0).to({alpha:1},9).to({startPosition:0},68).to({alpha:0},8).to({_off:true},1).wait(170).to({_off:false},0).to({alpha:1},9).wait(80));

	// sb_bg_blur
	this.instance_8 = new lib.sb_bg_blur("synched",0);
	this.instance_8.setTransform(568.85,227.25,0.2861,0.2861,0,0,0,696.6,489.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({startPosition:0},81).to({x:536.35},8).to({regX:696.5},159).to({regX:697,regY:490,scaleX:0.5,scaleY:0.5,x:450.35,y:226},13).to({startPosition:0},75).to({regX:696.5,regY:489.4,scaleX:0.2861,scaleY:0.2861,x:536.35,y:227.25},9).to({startPosition:0},9).wait(80));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,984.8,452);


// stage content:
(lib._336x280 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(118.7,139.65,1.12,1.12,0,0,0,492.4,226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(868).to({mode:"single",startPosition:433},0).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("A7z3bMA3nAAAMAAAAu3Mg3nAAAg");
	this.shape.setTransform(168,140);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A7zXcMAAAgu3MA3nAAAMAAAAu3g");
	this.shape_1.setTransform(168,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(869));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-264.7,26.6,934.9000000000001,366.29999999999995);
// library properties:
lib.properties = {
	id: '66A39164CE1D42F78FD0EAEEBAA0ECC2',
	width: 336,
	height: 280,
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