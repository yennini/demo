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
p.nominalBounds = new cjs.Rectangle(0,0,403,76);


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
p.nominalBounds = new cjs.Rectangle(0,0,212,45);


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
p.nominalBounds = new cjs.Rectangle(0,0,292,50);


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
p.nominalBounds = new cjs.Rectangle(0,0,231,52);


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

	// an_sc4-btn
	this.instance = new lib.sb_sc4btn("synched",0,false);
	this.instance.setTransform(201.5,38.5,1,1,0,0,0,201.5,38.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},22).to({alpha:1},8).wait(59));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,403,76);


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

	// sb_sc4-7060
	this.instance = new lib.sb_sc47060("synched",0);
	this.instance.setTransform(106,23,1,1,0,0,0,106,23);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:356.45,alpha:1},19,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,463.5,45);


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

	// sb_sc4-2888
	this.instance = new lib.sb_sc42888("synched",0);
	this.instance.setTransform(453.85,25.5,1,1,0,0,0,146,25.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:146,y:26.35,alpha:1},19,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600.9,51.9);


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

	// sb_sc4-72
	this.instance = new lib.sb_sc472("synched",0);
	this.instance.setTransform(115.5,26,1,1,0,0,0,115.5,26);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},18).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,231,52);


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

	// sb_sc3-tech
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

	// sb_sc3-same
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

	// sb_sc3-177
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

	// sb_sc3-39
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

	// sb_tt-set
	this.instance = new lib.sb_ttset("synched",0);
	this.instance.setTransform(687.3,155.7,1,1,0,0,0,137.2,10.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:349.95,alpha:1,startPosition:23},23,cjs.Ease.cubicOut).wait(67));

	// sb_bg_set
	this.instance_1 = new lib.sb_bgset("synched",0);
	this.instance_1.setTransform(721.8,154.9,1,1,0,0,0,174.4,16.5);
	this.instance_1.alpha = 0.8984;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:362.9,y:154.95},23,cjs.Ease.quartOut).wait(67));

	// sb_bg-free
	this.instance_2 = new lib.sb_bgfree("synched",0);
	this.instance_2.setTransform(461.6,140.7,1,0.0602,0,180,0,66.6,38.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:37.8,scaleY:1,skewX:0,y:100.55,alpha:1,startPosition:23},23,cjs.Ease.cubicOut).wait(67));

	// sb_tt-happy
	this.instance_3 = new lib.sb_tthappy("synched",0);
	this.instance_3.setTransform(13.05,105.65,1,1,0,0,0,153,65.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:278.5,y:108.05,alpha:1},23,cjs.Ease.backOut).wait(67));

	// sb_bg-happy
	this.instance_4 = new lib.sb_bghappy("synched",0);
	this.instance_4.setTransform(268.8,100.6,1,1,0,0,0,268.8,38);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1,startPosition:37},37).wait(53));

	// sb_tt-sentra
	this.instance_5 = new lib.sb_ttsentra("synched",0);
	this.instance_5.setTransform(360.4,29.9,1,1,0,0,0,144.8,15.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({y:39.65,alpha:1,startPosition:37},29,cjs.Ease.cubicOut).wait(53));

	// sb_bg_sentra
	this.instance_6 = new lib.sb_bgsentra("synched",0);
	this.instance_6.setTransform(561.35,39.1,0.0836,1,0,0,0,223.6,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:223.8,scaleX:1,x:313.65,y:39.15,startPosition:37},37,cjs.Ease.cubicOut).wait(53));

	// sb_tt-all
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

	// an_sc4-72
	this.instance = new lib.an_sc472("synched",0,false);
	this.instance.setTransform(453.95,26,1,1,0,0,0,115.5,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89));

	// an_sc4-2888
	this.instance_1 = new lib.an_sc42888("synched",0,false);
	this.instance_1.setTransform(381.3,258.95,1,1,0,0,0,299.9,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89));

	// an_sc4-7060
	this.instance_2 = new lib.an_sc47060("synched",0,false);
	this.instance_2.setTransform(-18.75,224.35,1,1,0,0,0,231.7,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89));

	// an_sc4-btn
	this.instance_3 = new lib.an_sc4btn("synched",0,false);
	this.instance_3.setTransform(573.65,265.45,1,1,0,0,0,201.5,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250.4,0,1025.6000000000001,304);


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

	// an_sc3-tech
	this.instance = new lib.an_sc3tech("synched",0,false);
	this.instance.setTransform(528.2,174.35,1,1,0,0,0,119.1,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

	// an_sc3_39
	this.instance_1 = new lib.an_sc3_39("synched",0,false);
	this.instance_1.setTransform(369.95,167.1,1,1,0,0,0,34.8,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

	// an_sc3-177
	this.instance_2 = new lib.an_sc3177("synched",0,false);
	this.instance_2.setTransform(498.6,120.35,1,1,0,0,0,99.4,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35));

	// an_sc3-same
	this.instance_3 = new lib.an_sc3same("synched",0,false);
	this.instance_3.setTransform(301.75,122.3,1,1,0,0,0,90,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35));

	// an_sc3-rect
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(344));

	// scc4
	this.instance_1 = new lib.scc4("synched",0);
	this.instance_1.setTransform(586.7,286.1,0.5,0.5,0,0,0,387.6,152);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(255).to({_off:false},0).wait(89));

	// scc2
	this.instance_2 = new lib.scc2("synched",0,false);
	this.instance_2.setTransform(402.25,118.8,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(76).to({_off:false},0).to({mode:"single",startPosition:79},78).to({regX:0,regY:0,scaleX:0.0392,scaleY:0.0392,x:523.8,y:218.6,alpha:0},5).to({_off:true},6).wait(179));

	// title
	this.instance_3 = new lib.title("synched",0,false);
	this.instance_3.setTransform(552.05,163.2,0.5,0.5,0,0,0,268.8,86.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},76).wait(178).to({_off:false},0).wait(90));

	// an_car1
	this.instance_4 = new lib.an_car1("synched",0,false);
	this.instance_4.setTransform(366.9,251.8,0.3876,0.3876,0,0,0,261.2,171.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:49},76).to({_off:true},1).wait(88).to({_off:false,regX:581.8,regY:265.5,scaleX:0.5,scaleY:0.5,x:447.95,y:291.2,startPosition:0},0).to({startPosition:49},85).to({regY:265.7,scaleX:0.325,scaleY:0.325,x:472,y:274.9},8).wait(86));

	// scc3
	this.instance_5 = new lib.scc3("synched",0,false);
	this.instance_5.setTransform(532.25,225.95,0.5,0.5,0,0,0,308.4,251.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(165).to({_off:false},0).to({startPosition:0},83).to({alpha:0,startPosition:34},6).to({_off:true},1).wait(89));

	// sb_bg_normal
	this.instance_6 = new lib.sb_bg_normal("synched",0);
	this.instance_6.setTransform(536.55,227.4,0.2861,0.2861,0,0,0,697.2,489.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({startPosition:0},76).to({alpha:0},8).to({_off:true},1).wait(170).to({_off:false},0).to({alpha:1},9).wait(80));

	// sb_bg_blur
	this.instance_7 = new lib.sb_bg_blur("synched",0);
	this.instance_7.setTransform(536.35,227.25,0.2861,0.2861,0,0,0,696.5,489.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(76).to({_off:false},0).to({startPosition:0},82).to({regX:697,regY:490,scaleX:0.5,scaleY:0.5,x:450.35,y:226},13).to({startPosition:0},75).to({regX:696.5,regY:489.4,scaleX:0.2861,scaleY:0.2861,x:536.35,y:227.25},9).to({startPosition:0},9).to({_off:true},1).wait(79));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,984.8,452);


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
	this.instance.setTransform(105.95,124.7,1,1,0,0,0,492.4,226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(687).to({mode:"single",startPosition:343},0).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("A4/1FMAx/AAAMAAAAqLMgx/AAAg");
	this.shape.setTransform(150,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A4/VGMAAAgqLMAx/AAAMAAAAqLg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(688));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-236.4,23.7,834.8,327);
// library properties:
lib.properties = {
	id: '66A39164CE1D42F78FD0EAEEBAA0ECC2',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BG1.jpg", id:"BG1"},
		{src:"images/bg_blur.jpg", id:"bg_blur"},
		{src:"images/car.png", id:"car"},
		{src:"images/logo.png", id:"logo"},
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