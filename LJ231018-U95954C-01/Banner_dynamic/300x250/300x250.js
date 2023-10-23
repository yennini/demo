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

	// feef
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADBjIANhKIg7AAIADgTIA8AAIAIgqIgfAAQgLAUgIALQgFgFgLgGQAWgYAQgwIATAFIgNAbIAZAAIAHgoIAUAAIgHAoIAwAAIgEAUIgvAAIgIAqIA5AAIgDATIg5AAIgOBKgAhaBiIAVhxIgWAUQgCgMgEgHQAkghAcgzIASAGQgLATgTAbIgaCQg");
	this.shape.setTransform(285,7.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAkBXIhjAEQgVACgGACIAAgBIgDgSQAGAAAJgHQAHgEARgNIgzAAIADgRIApAAIALg9QgRALgVAKQgDgKgHgFQAogQAcgaIg2AAIADgRIBEAAQAIgJAFgLIAUAEIgLAQIBhAAIgDARIg2AAQAWAaAgANQgKAJgGAGQgRgIgPgNIAAACIhUAAIgCAMIBUAAIgCANIhVAAIgCALIBVAAIgDAPIhUAAIgCALIB+AAIgDARIgxAAQAXAZAHAMIgTAKIgJgMgAg7BLIBUgEIgLgMIAOgHIg4AAQgSAQgNAHgAgbgqIBFAAIgPgUIghAAQgHAIgOAMg");
	this.shape_1.setTransform(259.225,7.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhrBTQAkgLASgWQAMgQAJghIg3AAIADgTIBUAAIAOhQIAVAAIgOBQIBXAAIgEATIg7AAIgNBHQAAAFABABQABACAGAAIAYAAQAGAAADgGQADgGAFgXQAGAFALAEQgHAbgHAJQgHAJgOAAIgdAAQgQAAgEgGQgFgGADgPIAMhHIgiAAQgLAogPATQgVAbgoANQgCgLgIgGgAg4hRIAUgHQAOAgACAUIgVAHQgCgVgNgfgAAxgkQAWgbAOgbIAUAHQgWAhgSAVg");
	this.shape_2.setTransform(232.225,7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcBkIADgSIiKAAIACgOIAfAAIAKg3IgYAAIACgNIgJgGQAPgMAEgVIACgNIBOAAIgFAjIhCAAQgGALgGAGICqAAIgCANIgaAAIgJA3IAeAAIgDAOIgeAAIgDASgAg2BEIBYAAIABgKIhXAAgAgyAuIBXAAIACgLIhXAAgAguAXIBXAAIACgKIhXAAgAgggcIARAAIADgNIgSAAgAg8gnIgDALIAQAAIADgNIgQAAgAAAgPQATgCAQgFQgKgIgGgMIACgBIgHAAIACgKQgDgGgEgDQAUgHACgNIACgLIA4AAIgEATQAAAGADAAIAKAAIAKgBIgBAMIgLABIgPAAQgJAAgCgEQgCgEABgKIABgFIgYAAQgEAPgPAKIA3AAIAEgBIAJAEQgKARgSAMQAMAFAVACQgJAIgEAGQgVgDgRgJQgRAIgbAEQgCgJgDgFgAAzgdQAMgFAIgJIgjAAQAGAJAJAFgAhLg7IACgLIAfAAIACgIIgnAAIACgLIAnAAIABgKIATAAIgCAKIAlAAIgCALIglAAIgBAIIAeAAIgBALg");
	this.shape_3.setTransform(206.875,7.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhyBbQATgYALg1IgMACIAAgRIAOgBIANhGIASAAIAKgbIARAEIgLAXIAZAAIgLA+IALgBIgCAPIgMABIgNBKQgCALgIAFQgGACgUAAQAAgGgDgKIATABQADAAABgEIANhGIgcADQgLA9gWAcQgEgFgJgEgAhBgDIAbgEIAJgwIgbAAgAgHBkIAHgmQgKAWgOAPQgGgHgHgEQAZgbALg3IAFgkIBbAAIgMA/IhKAAIgCAKIBQAAIgKA4IgSAAIABgFIgyAAIgBAGgAAOBOIAwAAIAFgUIgyAAgAAOASIA2AAIACgLIg2AAgAARgFIA3AAIACgLIg3AAgAhFAWIANgEQAFATABANIgNAEQAAgKgGgWgAg4grIAMgEQAFARABAMIgNAGQAAgKgFgVgAgKgwQAsgVAYgfIAQAHIgFAGQARAVAdAOQgHAIgFAKQgQgKgIgIIgCALIgyAAIACgKQgTANgMAHIgIgRgAAjg3IAoAAQgJgIgJgLg");
	this.shape_4.setTransform(180.65,7.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeBSQAJgEACgLIABgHIgXAJQgCgHgFgFIg7AQIgBgSIAZgGIAKg5IgTAAIADgRIATAAIAIgtIgVAAIADgSIA6AAIgDASIgUAAIgHAtIARAAIgDARIgSAAIgJAzIAUgFIgBAQQAcgHAYgPIgdAAIAIgtIBoAAIgIAtIgmAAQACAJAGAJQAQgIALgIIALANIgeAOQAMANATAEQgKAIgFAIQgogPgKgtQgNALgMAGIgEAXIAhgHIgCAPQgtAKgHADQgBgIgEgFgAgCASIBCAAIADgRIhDAAgAgagXIADgQICBAAIgDAQgAgNgwIAIgvIByAAIgIAvgABEg9IASAAIADgTIgSAAgAAkg9IASAAIADgTIgSAAgAAFg9IARAAIADgTIgRAAg");
	this.shape_5.setTransform(154.675,7.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCBUQAVgKATgUQgJgWgDgcQgSA+gbAhQgGgHgJgHQAGgFAIgMIgQAFQAAgPgDgUIAOgFQAEATABAQQAQgXAKgmQAJgbAJgxIgUAAIADgTIBLAAIADgBIAOACQgKAhgKAbIAMAAIADgCIAMAFQgQAugcAhQANASASAJQgJAGgHALQgSgLgMgRQgRAQgXANQgDgJgGgHgAA1AlQARgWALgYIgnAAQADAaAIAUgAAigbIAaAAIAOgqIgfAAIgJAqgAhpBaQAIgQAKgiIAQADQgKAhgKATQgIgEgGgBgAhAAqIAPgDQABAVgDAWIgPADQACgSAAgZgAhbANQAGgBAOgMQAIgHAMgOQgXACgGADIgDgSQAFgCAJgKQAFgFALgPQAMgSAJgPIARAHQgQAbgZAcIAUgCIAVgdIAPALQgeAogdAaIAggFIgEgRIAPgEQAHAWABAUIgRAGIAAgLQg5AJgFADQAAgJgEgKg");
	this.shape_6.setTransform(119.075,7.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhqBTQAcgOAQgWQANgRAGgZIgvAAIAEgTIAvAAIAIgsIgpAKQAAgHgEgKQBBgOAhgTIALARQgSAJgZAIIgJAyIA8AAIAPhSIAUAAIgPBSIAuAAIgDATIguAAIgRBdIgUAAIARhdIg8AAQgIAdgOAWQgSAZggARQgFgIgHgHg");
	this.shape_7.setTransform(93.1,7.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhpBVQAkgGAbgMIghAAIAMhCIgSAEQgCgFgFgKQAkgGASgMIgkAAQAIgTAEgSIArAAIABgKIgzAAIADgNIAyAAIADgLIARAAIgDALIAeAAIACgLIATAAIgCALIAvAAIgGAkIgvAAIgCAMIA9AAIgCAFQgFASgFAFQgEAEgHAAIgGAAIgMBLIggAAQAfAKAUAKIgRAMQgXgMgjgMIAKgIIg5AAIAOAHQgZAOguAMQgDgHgIgIgAg1A3IBkAAIACgMIhkAAgAgxAgIBkAAIACgMIhkAAgAgtAJIBkAAIACgKIhkAAgABAgOIgBgHIANABQADAAACgBIADgHIgoAAIgDAOIAXAAgAgZgOIAvAAIACgOIghAAQgIAJgIAFgAgDgoIAeAAIACgMIgdAAgAgwgoIAZAAQAEgHABgFIgaAAgAAyhBIAcAAIADgKIgdAAgAAChBIAdAAIACgKIgeAAg");
	this.shape_8.setTransform(67.3,7.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhkBSQA/gPAZgqIg4AAIAJgxIgMAIQgFgLgHgEQAtgaAdgpIAUAEIgJAMIAxAAIADgBIAMAJQgLAPgPAQIA9AAIgNBEIgzAAIgIAtQgBAGACABQABABAHAAIAdAAQAGAAADgEQADgFAEgUQAHAGAKADQgGAXgHAHQgHAIgPAAIghAAQgRABgFgGQgFgFADgPIAIguIgHAAQgNAagWASQgZATgoALQgDgKgGgHgAARAHIA1AAIAGggIgxAAQgFASgFAOgAgtAHIAqAAIAJggIgtAAgAgjgrIAzAAIAUgWIgwAAg");
	this.shape_9.setTransform(40.725,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.7,-2.6,264.2,20.1);


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
	this.shape.setTransform(201.9198,14.0482,1.0014,1.0014);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.3,-2.5,349.3,33.1);


(lib.mo_ttsentra = function(mode,startPosition,loop,reversed) {
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_ttsentra, new cjs.Rectangle(0,0,289.8,31.2), null);


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
	this.shape.setTransform(270.9,96.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjxEIQAegpAchJIAZAGQgcBNgdAqgACjCdIAagJQAmA/AWAzIgcALQgVg0glhAgAAnChIAagGQANAaAMAfQALAeAEAVIgbAIQgOg6gZg0gAhUCjIAbgCQAMA9ABAsIgbAFQgCg7gLgxgAkDB1IAAgbIBiAAIAAh2IhMAAIAAgbIBMAAIAAhMIAaAAIAABMIBLAAIAAhMIAaAAIAABMIBSAAIAAhMIAaAAIAABMIBPAAIAAhMIAbAAIAABMIBKAAIAAAbIhKAAIAAB2IBVAAIAAAbgABKBaIBPAAIAAh2IhPAAgAgiBaIBSAAIAAh2IhSAAgAiHBaIBLAAIAAh2IhLAAgAkIhzQAngdAhgqQAjgqAWguIAaAHQgTAngUAdIGJAAIAAAbImdAAQgnAwglAgQgIgLgMgMg");
	this.shape_1.setTransform(211.125,96.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbEYIAAiqIiuAAIg6g6IDoAAIAAgdIBFAAIAAAdIDjAAIAAA6IjjAAIAACqgACcDZQgpgcgrgYIApgsQApAVAsAbQAvAdAZAUIgsAyQgXgUgvgfgAkTDOQAygKAugVQAvgWAagZIA5AWQgfAmgwAfQgwAfg1AOQgVgjgZgXgADhANQg+AHgYAEQgUADgJAEQgHgcgLgZQAQgEAXgbQAKgKAagjQgxAGgLAHQgHgcgMgZQALgDAOgVQAgg1AQg1IA4AQQgUAzgkA3IAngEQAQgaAJgVIAzAdQgxBQg4A9IAtgEIgIglIAqgLQAPAwAKA2IgvANgAiAAFQhhAOgRAHQgKgggIgSQAOgDAYgdQANgOAVgeQgqAGgKAGQgFgWgNgeQALgCANgVQAJgNANgbQARgiAIgeIA2ATQgWA2ghAwIAfgDQATghAIgSIAxAcQgoBGg+BGIAvgFQgDgQgFgXIAsgKQAOAyAHA3IgvALgAhMAKIAAjpIAvAAQAJggABgYIA/ALIgTAtIA/AAIAABVIAACUgAgsgpIBHAAIAAgpIgrAAgAgQiDIArAAIAYgoIhDAAgABYiKIAAAAg");
	this.shape_2.setTransform(150.525,94.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiODfIBZABQAJgBAEgCQADgCAAgHIAAgnIjiAAIAAg9IDiAAIAAgZIAAAAIAAAAQAlgJAkgNIjyAAIAAg4IFiAAIAPgDIAsAoQhLAohZAaIDdAAIg7A9IipAAIAAAqQAAAagIANQgJANgUAGQgSAGggABIhDABQgJgfgPgbgAi7gOIAAiCIF7AAIAACCgAh1g+IDrAAIAAgiIjrAAgAi1isIhKg7IDYAAQgGgVgGgPIBHgNQAJASAKAfIDYAAIAAA7g");
	this.shape_3.setTransform(93.425,95.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_tthappy, new cjs.Rectangle(67,67,231.89999999999998,56.900000000000006), null);


(lib.mo_ttall = function(mode,startPosition,loop,reversed) {
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_ttall, new cjs.Rectangle(0,0,283.2,6.8), null);


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


(lib.sb_sc47060bg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#571D3A").s().p("ApcCSIAAkjIS5AAIhdEjg");
	this.shape.setTransform(60.475,14.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sb_sc47060bg, new cjs.Rectangle(0,0,121,29.2), null);


(lib.sb_sc472line2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#C3356C").s().p("Aw8AHIAAgNMAh5AAAIAAANg");
	this.shape.setTransform(108.5,0.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sb_sc472line2, new cjs.Rectangle(0,0,217,1.4), null);


(lib.sb_sc472line1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#C3356C").s().p("Aw8AGIAAgMMAh5AAAIAAAMg");
	this.shape.setTransform(108.5,0.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sb_sc472line1, new cjs.Rectangle(0,0,217,1.3), null);


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

	// wewe
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1F1F1").s().p("AghB1IAKg4IgqAAIAcAKQgaAYgqARQgLgMgKgHQAngMAVgUIg2AAIAEgZIBiAAIACgRIAeAAIgEARIBjAAIgDAZIg7AAQAiARARARIgbAVQgQgSgogXIAUgOIgdAAIgJA4gAANAJQgnAPhOAEQAAgNgGgMQArAAAggEIgqgIIAYgVIgxAAIAEgXIBGAAQAMgMAHgKIg2AAIgCAOIgbAAIAGgmIBYAAIgCgKIAggHIAGARIBZAAIgHAmIgcAAIACgOIhcAAIARAGIgPAQIAwAAIAJgPIAcAGIgGAJIAoAAIgEAXIgzAAQgJAMgOAKQAmAJAcAKIgfATQgZgKgqgLgAgcgYIAmAIQAMgFAKgJIg1AAg");
	this.shape.setTransform(271.85,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F1F1").s().p("AiABeQAsgVAXgqQAOgaALgzIg/AAIAGgdIBoAAIgJggIAfgLQAGAOAGAVIgTAIIBnAAIgFAdIh+AAIgIAfIBqAAIgDAMQgNAygIAYQgJAYgJAIQgLAKgSABQgNACgdgBQACgQgHgOQAWACASAAQAJAAAFgDQAKgIARhAIhOAAQgcBKg/AhQgFgOgNgLg");
	this.shape_1.setTransform(245.5,15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1F1F1").s().p("AgFBqQgGgFgFgCIADgEIgXALQgFgQgPgVIAZgNQAOATAGAPQAWgjAMhGIARhcIBcAAIgiC9QgDAVgNAGQgLAGgeAAQABgPgEgOIAaABQAFAAAAgFIAJgyIglAAQgPA2gXAeQgCgEgGgGgAAvAGIAkAAIAFgeIgkAAgAA5gyIAkAAIAFgeIgkAAgAiDBiQAZgQAPgZIAaAJQgTAegbAUQgIgKgMgIgAh5A4IAEgaIAXAAIAQhcIgTAAIAEgaIATAAIAGgbIAaAAIgFAbIAgAAIAEgbIAaAAIgEAbIARAAIgFAaIgRAAIgQBcIAPAAIgEAagAhDAeIAeAAIAEgRIggAAgAg8gJIAeAAIADgQIgfAAgAg2gwIAfAAIACgOIgeAAg");
	this.shape_2.setTransform(219.15,15.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1F1F1").s().p("Ah7BYQApgMAWgZQARgSAKggIgqAAIACgQIgVARQgJgMgNgJQAxgfAeg8IAdAHQgUApggAjICBAAQgUgagHgiIgpAAIAFgcIA/AAQADAdAPAXQAOAZAXANQgQANgKAOQgHgFgJgJQgMA4gIAXQgHAagHAHQgKAKgPACQgMACgZgBQACgPgHgPIAgABQAHAAAEgDQAIgIAQhIIgxAAQgMApgVAZQgbAggvARQgDgOgMgOg");
	this.shape_3.setTransform(193.3,16.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F1F1F1").s().p("AgkB1IAIgtIhiAAIAFgcIBiAAIADgRIAeAAIgCARIBiAAIgFAcIhiAAIgHAtgAAxADQAEAKACAKIgYAJIgDgMQhDAGgJAEQgCgRgCgHIg1AZIgKgYIBCgYIACAVIgFACQAIgBAQgLIAXgRQgWABgIADQgBgPgDgIQAGgCAHgHQAHgFAKgMIhVAAIAEgbIBcAAIgFgOIAfgHQAFAIAFANIBZAAIgFAbIhnAAIgUAWIAVgBQAMgLAIgJIAUANQgfAfgiAYIAZgBIgGgNIAXgHQAGAJADAHIATgNQAfARANAOIgZASQgLgMgYgRgAA0ghQAUgMARgTIAXAPQgOAMgaASgAhigvIAWgQQAWAOAMANIgYARQgLgNgVgPg");
	this.shape_4.setTransform(167.175,15.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F1F1F1").s().p("AAXB0QACgPgGgPIAlAAQAGAAACgGIAii/IAdAAIgiC/QgCANgEAHQgEAHgJAEQgMAFgdAAIgKAAgAhUB0IAQhaQgaAngWAUQgDgMgHgRQAhgcAagrIgpAAIAEgbIAwAAIAFgfQgNADgeAEQABgMgFgMQBBgJAngQIARAXQgPAGgdAHIgGAlIAqAAIgFAbIgqAAIgCAOQALAIAZAaIgUAaQgIgNgOgQIgPBWgAAKA1IAZiLIAdAAIgZCLg");
	this.shape_5.setTransform(140.7,15.8317);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1F1F1").s().p("AhEBOIAQgRIApAOQAQgHAQgKIh2AAIADgWICOAAIAEgBIARALQgTAVgiATIASAIIgQAUQgegQg4gUgAh5ANQBIgNAtgZIgIAAIAHgoIhEAAIgFAcIgaAAIAIguIBeAAIACgJIhOAAIAEgVIC4AAIgEAVIhOAAIgCAJIBgAAIgIAuIgcAAIAGgcIgPAAIAIAPQgQAFgXAFIArAOIgKARQgVgKgkgJIAJgQIACAAIgEgIQALgCAkgLIg1AAIgHAoIgIAAIAQAJIgEADQAkAPA6AGQgNAMgIAMQgVgDgZgJIgBAIIhqAAIABgIQgXAIgUAFQgJgNgKgHgAgiALIA5AAQgQgHgJgFIggAMgAhVgcIA1gKQgTgHgVgEIAMgPQAcAFARAGIgIANIAGgBIgBAQIhAARg");
	this.shape_6.setTransform(114.75,16.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F1F1F1").s().p("AggBgQAggNAUgRIgaAAIAXiCIAfAAIAGgSIgpAAIAFgZIBvAAIgEAZIgsAAIgIASIArAAIgXCCIgfAAQAWAPANAPIgVAUQgLgOgZgTIASgRIglAAIAPATQgbASggAOQgDgMgGgJgAAXAsIAtAAIADgQIgtAAgAAeAIIAsAAIADgOIgtAAgAAkgbIAtAAIACgPIgsAAgAh5B0IANhIIgKADQgEgPgGgIQAbgIAUgMIgMgGIAUgSIAOAJQAJgGAIgKIgeAAQgPARgRAKQgFgMgGgHQAdgRAPgdIAVAEIgGALIAgAAIAEAAIAAAAIAEgTIhEAAIgDAWIgVAAIAHgtIAsAAIgDgQIAagIIAFAYIAnAAIgIAtIgSAAIAJAHQgNAWgTASIAgAWIgRAQIAAAAIgOBOIgZAAIABgHIghAAIgBAHgAhbBXIAgAAIAFgZIghAAgAhgAmIA/AAIgbgUQgSANgSAHg");
	this.shape_7.setTransform(88.85,15.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F1F1F1").s().p("Ah8B2IAUhxIDOAAIgPBWQgCAKgDAEQgDAFgJACQgLAFgcgBQgBgJgFgNIhGAAIgCALIgcAAIAMhCIBsAAIgKA3IgEAAQAQABAEgBQAGAAAAgDIALg+IiUAAIgPBZgAgpBKIA1AAIADgPIg2AAgAhNgEIAKg1ICdAAIgKA1gAgrgXIBfAAIADgOIhgAAgAhihDIADgZIBgAAIgCgRIAfgHIAGAYIBaAAIgFAZg");
	this.shape_8.setTransform(62.2,15.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F3E727").s().p("AAhBiIgMADIgBgMIhjAFIACgYIAvgDIADgTIg4AAIgMBFIgdAAIAMhFIgJAAIAEgXIAJAAIACgHIAcAAIgBAHIA4AAIACgLIhFAAIAOhOICnAAIgOBOIhHAAIgBALIBYAAIgMBCQgDAQgKAFQgJAFgXAAQAAgKgDgJgAAtBdIAEAAQADAAABgDIAHgqIgZAAQAJAYABAVgAgCBCIARgBIgDgLIAWgGIgiAAgAAKgEIApAAIACgMIgpAAgAg6gEIAoAAIACgMIgoAAgAAPgiIApAAIACgLIgpAAgAg1giIApAAIACgLIgpAAgAAkhEIACgLIgZAAIAEgYIAZAAIACgNIAeAAIgDANIA2AAIgFAYIg1AAIgCALgAgzhEIACgLIg0AAIAEgYIA0AAIACgNIAeAAIgDANIAZAAIgEAYIgZAAIgCALg");
	this.shape_9.setTransform(36.325,15.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F3E727").s().p("AhvBoQgaglAMhCQAMhDAlglQAngmA8AAQBAAAAaAmQAZAlgMBDQgLBBgoAlQgpAmg8AAQg7ABgagmgAgghAQgUAYgIAqQgHAsANAVQAMAUAaAAQAaAAAUgUQAXgWAHgrQAIgpgOgZQgNgXgbAAQgaAAgUAXg");
	this.shape_10.setTransform(7.4883,11.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F3E727").s().p("Ah6CIQAohBA2hHQAtg8AUgVIiLAAIAKg2IDXAAIgIArQgwA3gxBCQguBBgYAqg");
	this.shape_11.setTransform(-20.1,11.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc42888, new cjs.Rectangle(-32.4,-2.5,317,30.2), null);


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
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAGCxIAXiDIhrAAIAHgkIBrAAIANhLIg2AAQgTAjgRATQgKgIgSgJQAogtAdhUIAhAHQgJAXgNAaIAsAAIAMhIIAlAAIgNBIIBVAAIgGAkIhVAAIgNBLIBmAAIgGAkIhnAAIgXCDgAihCwIAkjMQgQASgVATQgEgTgKgRQAfgbAfgoQAfgnAWgrIAgAKQgVAogfAsIgvECg");
	this.shape_10.setTransform(188.15,60.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABBCaIizAJQglADgLADIAAAAIAAgBIgFggQAKgCAQgLQAJgEAigZIhaAAIAFgfIBJAAIAThtQghAVgiAOQgIgRgKgJQBEgbA1gvIhgAAIAGgeIB4AAQAOgQAMgUIAkAHQgNASgJALICuAAIgFAeIhgAAQATAVAaATQAZASAaALQgTAQgJAMQgdgPgcgYIgBAFIiXAAIgEAVICYAAIgEAYIiYAAIgEAUICYAAIgEAZIiYAAIgEAVIDjAAIgGAfIhXAAQAnAqAPAYIgjASQgFgKgKgOgAhrCGICXgGIgTgXIAZgLIhkAAQgeAYgbAQgAgyhMIB+AAQgOgPgOgUIg7AAQgPAQgYATg");
	this.shape_11.setTransform(132.375,60.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ai1ChQgFgJgGgFQBBgTAfgnQAWgcAQg9IhjAAIAGghICYAAIAZiQIAlAAIgaCQICbAAIgFAhIhrAAIgWB/QgCAKACADQADADALAAIArAAQAKAAAGgLQAFgLAJgpQALAKATAFQgMAxgMAQQgNARgaAAIgzAAQgdAAgHgLQgJgKAFgdIAXh/Ig/AAQgTBHgcAlQgkAvhJAXQgBgHgFgKgAhThhQgIgbgJgXIAigMQAaA3ADAnIglANQgBgSgIgbgABYhBQAmgvAagzIAjAOQgoA9geAjg");
	this.shape_12.setTransform(74.4,60.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAyCyIAGggIj5AAIAFgaIA4AAIARhhIgsAAIAFgYIgQgLQAbgWAGgmIAEgWICNAAIgKA+Ih3AAQgJATgMAMIEyAAIgFAYIguAAIgRBhIA2AAIgEAaIg3AAIgFAggAhhB4ICdAAIADgQIidAAgAhaBRICdAAIADgSIidAAgAhTAoICdAAIADgRIidAAgAg6gzIAfAAIAEgYIgfAAgAhxgzIAdAAIAEgYIgcAAgAAAgbQAmgGAYgIQgRgOgKgWIADAAIgNAAIADgUQgGgLgGgEQAVgHAJgKQAIgHACgMIADgTIBkAAIgGAiIAAAIQABACAEAAIARAAQAOAAAFgCIgCAWQgFACgQAAIgZAAQgRAAgEgIQgEgHADgRIACgJIgrAAQgHAbgcARIBjAAIAGgBIASAHQgRAegjAWQAYAIAjAEQgMALgKAOQgogGgcgPQghAPgtAGQgEgPgGgJgABcg1QAVgMAOgMIg+AAQALAPAQAJgAiHhqIADgTIA5AAIADgPIhFAAIADgTIBFAAIADgSIAhAAIgDASIBCAAIgDATIhDAAIgCAPIA3AAIgDATg");
	this.shape_13.setTransform(19.375,60.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjMCjQAVgaANgpQALgcAHgrIgVADIAAgeIAagCIAWh9IAgAAQALgaAHgVIAhAGIgWApIAsAAIgTBvIATgDIgCAbIgWADIgXCDQgEAWgOAHQgKAFglABQABgOgGgPIAiABQAHgBAAgGIAWh+IgwAHQgVBtgnAxQgJgKgNgGgAh2gHIAygGIAOhXIgvAAgAgNCyIAMhCQgSAmgXAaQgPgOgLgEQAvgxARhkIAKg/ICjAAIgUBxIiEAAIgFASICPAAIgSBlIggAAIACgLIhYAAIgCALgAAXCMIBZAAIAHglIhZAAgAAXAgIBjAAIADgTIhiAAIgEATgAAggKIBhAAIADgSIhhAAgAh7AnIAVgHQAKAfACAaIgXAIQgBgXgJgjgAhlhOIAVgHQAIAdADAYIgYAJQAAgWgIghgAgShXQAkgRAfgXQAigZAVgbIAdAMIgKALQAOASAXASQAWARAXAKQgLAMgKATQgWgNgWgTIgDAUIhYAAIADgSQggAXgZAMQgDgPgKgPgAA+hkIBIAAQgRgOgPgUQgWAVgSANg");
	this.shape_14.setTransform(82.55,17.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag2CRQAPgGADgSIADgNQgWAKgTAFQgEgKgIgMQg8ARguAMIgBghIAsgLIAShlIgiAAIAGggIAhAAIAOhPIgkAAIAFggIBnAAIgFAgIgkAAIgNBPIAeAAIgFAgIgfAAIgRBdIAjgKIgBAcQA0gNAqgZIg0AAIAOhRIC6AAIgOBRIhFAAQAGARAJAPQAXgMAagRIAUAWQgcAOgbAMQAVAVAjAKQgPAMgMAQQhHgZgRhRQgWARgaANIgHAoIA9gNQgDAQgBAKQhRAUgNAGQgCgQgGgKgAgEAgIB3AAIAFgeIh4AAgAgwgpIAGgcIDoAAIgGAcgAgYhWIAOhUIDMAAIgOBUgAB5hvIAhAAIAFghIggAAgABBhvIAfAAIAGghIggAAgAAJhvIAfAAIAGghIggAAg");
	this.shape_15.setTransform(26.4,18.6625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

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

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDAwQAVgIALgPQAIgLAGgVIgiAAIACgMIB5AAIgCAMIgmAAIgIAtQAAABAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABAAQAAAAABABQAAAAABAAQABAAABAAIAPAAQAEAAACgFQACgEADgPQAEADAHACQgEATgFAGQgFAGgJAAIgSAAQgKAAgDgEQgDgEACgKIAIgtIgXAAQgGAZgKANQgNASgYAJQAAgFgGgFgAgkgtIACgMIBgAAIgCAMg");
	this.shape.setTransform(91.525,5.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARA1IgCABIgBgHIg6ADIABgLIAcgBIADgNIgjAAIgHAmIgNAAIAHgmIgFAAIACgLIAFAAIABgEIAMAAIgBAEIAkAAIABgHIgnAAIAIgpIBZAAIgHApIgoAAIgBAHIAxAAIgHAlQgBAJgFABQgEACgOAAQAAgFgCgFgAAZAzIgGACQAHABADgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAFgaIgkAAIgCAMIANgBIgEgHIAKgDQAIAPAAAKgAAEgBIAbAAIABgIIgbAAgAgigBIAaAAIACgIIgbAAgAAGgRIAcAAIABgJIgbAAgAgfgRIAaAAIACgJIgbAAgAAVgkIACgIIgPAAIABgLIAQAAIABgHIAMAAIgBAHIAfAAIgCALIgfAAIgBAIgAgagkIACgIIgeAAIACgLIAeAAIABgHIAMAAIgBAHIAPAAIgCALIgPAAIgBAIg");
	this.shape_1.setTransform(77.725,5.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzA3IACgRQAZAIALAAQAigBAFgYQACgNgMgEQgJgDgTAAIgJAAIADgLIAqgjIg5AAIACgQIBUAAIgDAMIgtAkQARABALAHQANAJgDARQgDAUgRALQgPAKgXAAQgPAAgVgHg");
	this.shape_2.setTransform(63.95,5.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8A/IAMhHIgLALIgGgMQAYgVARggIALAEQgHAOgMAQIgRBbgAgpA8IACgLIANAAIANhLIAXAAIAEgMIgfAAIACgLIAhAAIAEgNIAMABIgEAMIAkAAIgCALIgmAAIgFAMIAhAAIgOBLIALAAIgBALgAgPAxIAsAAIABgKIgsAAgAgMAeIAsAAIABgKIgrAAgAgIALIAsAAIABgKIgrAAgAgFgHIAsAAIABgKIgrAAg");
	this.shape_3.setTransform(51.25,5.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AALAyIAJgHIgcAAIAHAGQgPAKgVAEIgGgJQAWgEAMgHIgVAAIAJgyIBLAAIgJAyIgZAAQAWAIAJAFIgMAHQgMgHgQgGgAgRAjIAzAAIABgHIgzAAgAgPAVIAzAAIABgHIgyAAgAgMAHIAzAAIABgHIgzAAgAg/A/IAOhIIgPAOQgBgHgCgGQAVgVARghIALADIgQAbIgRBfgAgXgMIAFgbIAWAAIABgIIgZAAIACgJIBXAAIgCAJIgdAAIgBAIIAYAAIgFAbgAAigUIAMAAIACgMIgNAAgAAKgUIAOAAIACgMIgNAAgAgKgUIAKAAIACgMIgLAAgAAOgnIAMAAIACgIIgMAAg");
	this.shape_4.setTransform(36.9,5.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAKA+QgKAAgBgCQgCgDABgIIADgXIALAAIgEAXQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAIADAAIAQAAQADAAABgCIAEgMQACADAHABQgDALgDAEQgFAEgGAAgAhFA7QAGgJAHgXIAJACQgGAVgHAMgAgXA3QAHgLAIgSIAIADQgIAVgGAJgAgrAdIAJgCQABAOgCAPIgJACQABgMAAgRgAAqAdIAKgEIAHAcIgKAEQgEgTgDgJgAgeAaIAJgCQACALAAAMIgKACQACgJgDgOgAASAWIAJgEQAFAKAEALIgJAFIgJgWgAg8AMQAEgBAIgIIANgOQgOABgEACIgCgLQACAAAGgHQALgNAMgWIAKAFQgNAVgNAPIANgBIANgTIAJAGQgTAbgRAPIASgDIgBgJIAJgDQAEAOgBAMIgKADIAAgIIgkAIgAgHARIAKhAIAUAAIAHgOIANACIgIAMIAiAAIgLBAgAAFAGIArAAIAIgrIgrAAgAALAAQANgGAGgGIgDgFIgNAJIgEgGIAMgIIgHgIIAIgEIAGAGIAGgIIAIACIgKALIAEAFIAJgKIAIACIgNAOIAHALIgIAEIgFgJQgJAGgKAFIgFgFg");
	this.shape_5.setTransform(21.65,5.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.7,-1.2,83.6,12.899999999999999);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},8).to({state:[]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},20).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},60).to({state:[]},1).wait(154));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},19).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},60).to({state:[]},1).wait(154));

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

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(19).to({_off:true},1).wait(9).to({_off:false},0).wait(1));

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
	mask.graphics.p("EgrLAUEMAHSgoHMBPFAAAMgHRAoHg");
	mask.setTransform(418.575,248.075);

	// Layer_3
	this.instance = new lib.sc2_pic2();
	this.instance.setTransform(-22,120,0.7367,0.7367);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(142.2,120,552.8,256.5);


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
	this.instance.setTransform(8,0);

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

	// mo_tt-sentra
	this.instance = new lib.mo_ttsentra();
	this.instance.setTransform(143.45,13,1,1,0,0,0,144.8,15.6);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",1,1,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-5.6,299,40);


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

	// mo_tt-happy
	this.instance = new lib.mo_tthappy();
	this.instance.setTransform(188.85,63.2,1,1,0,0,0,190,102.5);
	this.instance.shadow = new cjs.Shadow("rgba(64,64,64,0.498)",1,1,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(62.9,24.7,241.99999999999997,67);


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

	// mo_tt-all
	this.instance = new lib.mo_ttall();
	this.instance.setTransform(140.2,7.4,1,1,0,0,0,141.6,3.4);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",1,1,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,1,292,16);


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

	// efefef
	this.instance = new lib.mo_bgsentra();
	this.instance.setTransform(223.1,20.75,1,1,0,0,0,223.8,23.4);
	this.instance.compositeOperation = "lighten";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-2.6,447.7,46.9);


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

	// ere
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D41E6D").s().p("AioF6ID0rzIBdAAIj/Lzg");
	this.shape.setTransform(534.25,35.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D41E6D").s().p("AjLF6ID0rzICjAAIj/Lzg");
	this.shape_1.setTransform(515.75,35.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D41E6D").s().p("Aj3F6ID1rzID6AAIj+Lzg");
	this.shape_2.setTransform(489.15,35.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D41E6D").s().p("A6VF6ID1rzMAw2AAAIj/Lzg");
	this.shape_3.setTransform(313.525,35.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg1
	this.instance = new lib.mo_bghappy();
	this.instance.setTransform(268.8,35.2,1,1,0,0,0,268.8,38);
	this.instance.compositeOperation = "lighten";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.8,551.2,76);


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

	// eefq
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdBXIADgSIBNAAIAIgsIg7AAIADgRIA7AAIAGgmIhEAAIADgSIBTAAQgOgQgMgLIAPgLQAVAQAKAPIgKAHIA/AAIgEASIhDAAIgIAmIA8AAIgEARIg6AAIgIAsIBOAAIgEASg");
	this.shape.setTransform(81.55,-5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARgSQghBHg8AfQgKgLgFgDQBCgfAfhSIAKABQAAgMABgLIgtAAIADgTIBAAAQgTBqBHAuQgMAKgFAGQgzgigGhEg");
	this.shape_1.setTransform(60.3,-4.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhbBIQAYgRANgdQAIgUAGgcIAKg+IB6AAIgaCQQgDASgLADQgLAEggAAQAAgJgFgKIAkAAQAGAAABgGIAGgiIhYAAQgQAngcAVQgHgKgFgEgAgdAIIBVAAIAFgcIhTAAQgCANgFAPgAgTgmIBUAAIAFgcIhUAAg");
	this.shape_2.setTransform(39.525,-4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWBbIAGgjIgsAAIADgSQgOANgOAJQgFgJgGgFQAqgZAgg0Ig2AAIADgTIBLAAIAGgnIAUAAIgHAnIBMAAIgDATIg4AAQAGAYANATQANAUAQAMQgKAGgHAKQgKgIgKgOIgEASIgrAAIgFAjgAAGAlIAqAAQgUgcgIgoIgDAAgAg4AlIArAAIAMhEIgCAAQgWAmgfAeg");
	this.shape_3.setTransform(20,-5);

	this.instance = new lib.sb_sc47060bg();
	this.instance.setTransform(46.85,-5,1,1,0,0,0,60.5,14.6);
	this.instance.alpha = 0.8984;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-19.6,120.89999999999999,29.200000000000003);


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
	this.instance.setTransform(99.2,7.85,1,1,0,0,0,139.1,18.3);
	this.instance.shadow = new cjs.Shadow("rgba(33,24,22,0.749)",3,3,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.3,-19.9,338,51);


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

	// ffefefege
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C3356C").s().p("AgPBlIgIAHQgMgJgPgFQgbAOgtAGQgBgHgGgMQAigFATgHQgPgGgRgEQAHgHAKgMIgaAAIADgUIAnAAIAHgLIghAAIAHgrIArAAIACgGIgoAAIAGgbIgRAAIADgVIARAAIAFgaIAnAAIACgOIAXAAIgDAOIApAAIgEAaIAMAAIgDAVIgNAAIgEAbIgqAAIgBAGIAtAAIgCAKQAbgoAVhAIAYAEQgGATgKAXIA8AAIgFAZIgRAAQgPA2gXAkQAKAeAYAPQgLAHgMAPQgUgQgLgaQgYAbgkAQgAgbBOIAUAKQAfgQAUgaQgFgUgBgeIgNAUIgMgOIgEAVIgzAAIgIALIAXAAIABgHIAXAAIgCAHIAUAAIgEAUIgUAAQgHAOgLAKgAhIA/IAWAGQAJgFAHgKIgeAAgAA/APQAKgTALgnIgYAAQgCAdAFAdgAghAHIAUAAIACgKIgUAAgAhKAHIATAAIACgKIgTAAgAgYgtIATAAIADgKIgUAAgAg/gtIARAAIACgKIgSAAgAgShJIASAAIABgJIgSAAgAg7hJIASAAIACgJIgSAAg");
	this.shape.setTransform(203.25,20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C3356C").s().p("Ah3BzIAVh2IgOAPQgBgOgHgRQAjglAZg6IAZAIIgDAHIBXAAIgEAZIgqAAQgNAWgKAMIAegEIgHgPIAXgJQAOAcADAVIANhJIAZAAIgaCRIgZAAIANhGIgXAKIgEgQQg7AKgIAEIgEgYQAFgCAHgIIATgfIgSAAIAEgZQgKAVgOAXIgeCqgAAYBXIAfAAQAFAAABgFIAhi9IAbAAIgiC8QgDAVgNAFQgLAFgfAAQgBgPgEgKgAhPBJIAmgGIAFgeIgeAAIAEgYIAfAAIAEgWIAbAAIgEAWIAhAAIgFAYIghAAIgEAZIAlgGIgDAYIhkASg");
	this.shape_1.setTransform(178.275,20.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C3356C").s().p("AhFBaQAfgEAcgMQgIgGgGgIQgKAIgIAFQgHgMgIgJIATgNQgGgOgDgIIAagIIAEAMQAMgLAJgLQgfABgJADQgBgRgCgIQAKgDATgKQAKgEAOgJQgdACgHACQgBgOgEgNQAJgCAJgHQAYgNAVgWIAbAOQgTAPgaAQIAhgBIAegWIAZAOQguAhgpAUIA0gCIgIgPIAYgLQAVAhAHAUIgaANIgIgTIguADIgLAPIAuAAIAGgBIAQAIQgTAiggAWQAZALAeAEQgKAJgLARQgmgHgZgRQghARgmAIQgEgQgGgKgAgDAqQAIAKAMAJQATgLAOgQIguAAgAhnBzIAShmIgSAOQgIgUgDgHQAmgaAZgkIAYAJQgLARgOAQIgYCHgAhlhBQAigXAVgbIAYAKQgdAjgmAZQgEgLgIgJg");
	this.shape_2.setTransform(151.8,20.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C3356C").s().p("AAqBZQgVANgXAJQgEgMgGgIIgEAUIgcAAIAEgUIhQAIIACgZIAWgCIANhKIgTAAIAEgXIDbAAIgEAXIhyAAIgPBZQASgFAUgMQgLgQgGgVIARgEIgXAAIAEgXIBPAAIAFgBIARAHQgQAhgaAZQAQAMAXAGQgLAJgKAOQgagIgQgOgAhFBGIAhgCIABgLIggAAgAAwA2QAMgMAKgNIgjAAQADANAKAMgAg/AlIAgAAIACgKIggAAgAg6AHIAgAAIACgJIggAAgABFgfIAKg7IhxAAIgKA7IgcAAIANhPICrAAIgOBPgAgkgjIAEgSIBgAAIgDASgAgfg/IADgRIBhAAIgDARg");
	this.shape_3.setTransform(125.325,21.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C3356C").s().p("AAABeQAWgMASgUQgHgTgFgXQgSA8gcAiQgFgIgQgKQAGgHAHgKIgSAGQAAgRgEgXIAUgGQAEAQABATQAcguAShoIgVAAIAGgbIBTAAIAFgBIAUACQgHAZgRArIAKAAIAFgBIARAGQgTA3geAlQANARAUAKQgNAKgLAOQgSgLgNgRQgQAQgYAOQgGgPgHgHgAA9AmQAPgVAMgZIgmAAQADAaAIAUgAArgiIAWAAIAPgqIgcAAgAh7BnQAKgRAKgnIAWAEQgJAlgMAXQgIgFgNgDgAhLAyIAVgFQgBAhgCAQIgWAGQAEgXAAgbgAhqANQAKgCAOgNQAGgFANgPQgXADgGADQgBgOgEgMQAGgCAKgLQAXgaARgiIAZALQgUAggXAaIARgBQAPgSAJgPIAUAQQgYAjgnAkIAbgEIgEgQIAVgHQAJAcAAAUIgXAJQABgGgBgGQg/AKgGAEQgCgQgEgKg");
	this.shape_4.setTransform(92.55,20.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C3356C").s().p("Ah6BcQA2gaAOg5IgzAAIAEgbIA1AAIAJgsQgYAHgUADQgBgNgFgKQBDgOAsgZIARAZQgUAJgcAJIgJA1IA9AAIARhdIAeAAIgQBdIAxAAIgEAbIgzAAIgSBpIgeAAIAThpIg/AAQgHAigRAYQgVAdgkATQgGgNgLgKg");
	this.shape_5.setTransform(66.75,20.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C3356C").s().p("AAJBXIALgKIg7AAIARAJQgjASgwALQgIgMgJgJQArgHAYgKIggAAIANhJIgTAEQgDgLgHgLQApgFATgMIgoAAQAJgVAHgYIAuAAIACgKIg3AAIACgRIA4AAIACgLIAaAAIgCALIAbAAIACgLIAcAAIgCALIA0AAIgHAsIg1AAIgBALIBDAAIgBAHQgFAXgHAGQgFAFgKABIgFAAIgOBTIgbAAQAhANAQAIIgYARQgegQgjgMgAg4A9IBpAAIACgKIhpAAgAgzAjIBoAAIADgKIhpAAgAgvAKIBpAAIACgKIhpAAgABHgQIgCgIIAOABQAEAAABgCIAEgGIgoAAIgCAPIAVAAIAAAAgAgWgQIAsAAIACgPIggAAQgEAGgKAJgAAAgwIAbAAIADgLIgcAAIgCALgAgzgwIAXAAIAEgLIgXAAgAA8hMIAaAAIABgKIgZAAgAAFhMIAcAAIABgKIgbAAg");
	this.shape_6.setTransform(41.1,20.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C3356C").s().p("AhzBaQBGgRAagqIg+AAIAKg1IgJAGQgHgPgKgHQA1gfAegtIAdAGQgEAHgFAFIAxAAIAGgCIASAOQgMAQgRARIBCAAIgOBSIg3AAIgIAtQgBAHABABQACACAHAAIAaAAQAHAAADgGQADgGAEgUQAHAHARAFQgHAbgJAJQgJAKgSAAIghAAQgWAAgGgIQgHgHAEgUIAIguIgEAAQgPAegZATQgdAWguANQgDgOgJgLgAAYAFIAzAAIAGgeIgvAAgAgvAFIApAAQAEgKAFgUIgsAAgAgjgzIAyAAIAUgVIgwAAg");
	this.shape_7.setTransform(14.575,20.625);

	this.instance = new lib.sb_sc472line2();
	this.instance.setTransform(110.1,39.15,1,1,0,0,0,108.5,0.7);
	this.instance.shadow = new cjs.Shadow("rgba(3,0,0,0.749)",3,3,9);

	this.instance_1 = new lib.sb_sc472line1();
	this.instance_1.setTransform(110.1,1.6,1,1,0,0,0,108.5,0.7);
	this.instance_1.shadow = new cjs.Shadow("rgba(3,0,0,0.749)",3,3,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-6.1,238,60.6);


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
p.nominalBounds = new cjs.Rectangle(-13.6,-19.6,371.40000000000003,29.200000000000003);


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

	// mo (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_29 = new cjs.Graphics().p("Ai2B0IARgSIAoAOQASgHAPgKIAAAAIh3AAIADgWICPAAIAEgBIARALQgTAVghAUIAAAAIASAHIgQAUQgggQg4gTgAIkB7QApgNAWgYIAAAAQARgSAKggIAAAAIgqAAIADgRIgWASIAAAAQgKgNgMgJIAAAAQAygeAdg9IAAAAIAdAIQgUApggAiIAAAAICCAAQgUgagHgiIAAAAIgpAAIAGgbIA+AAQAEAcAOAYIAAAAQAOAZAXAMIAAAAQgPANgLAOIAAAAQgIgGgIgIIAAAAQgNA5gHAXIAAAAQgHAagIAHIAAAAQgIAJgRADIAAAAQgLABgagBIAAAAQABgPgGgPIAAAAIAhACIAAAAQAHAAAEgDIAAAAQAIgJAQhHIAAAAIgyAAQgMApgVAZIAAAAQgaAggwARIAAAAQgDgOgMgOgAmUCAQAggNAUgQIAAAAIgaAAIAXiDIAfAAIAGgRIgpAAIAFgZIBvAAIgEAZIgsAAIgIARIArAAIgXCDIgfAAQAXAQANAOIAAAAIgWAUQgKgOgZgSIAAAAIASgSIgmAAIAPATQgbATghAOIAAAAQgDgNgFgKgAlcBMIAtAAIACgOIgtAAgAlWAoIAtAAIACgOIgsAAgAlQAEIAtAAIADgNIgtAAgAQqB+QArgXAXgoIAAAAQAOgcALgyIAAAAIg/AAIAFgdIBqAAIgJggIAAAAIAfgLQAHAOAFAVIAAAAIgTAIIBmAAIgEAdIh/AAIgIAdIBrAAIgDANQgNA0gIAXIAAAAQgIAYgKAIIAAAAQgLAKgSABIAAAAQgNACgegBIAAAAQACgQgHgNIAAAAQAWABATAAIAAAAQAJAAAEgDIAAAAQALgHAQhBIAAAAIhOAAQgbBKhAAhIAAAAQgFgOgMgKgAOcCMQgGgGgFgBIAAAAIADgFIgWAMQgGgQgPgWIAAAAIAZgMQAOATAHAPIAAAAQAWgjAMhHIAAAAIARhbIBcAAIghC9QgDAVgOAGIAAAAQgKAGgfgBIAAAAQABgPgEgNIAAAAIAaAAIAAAAQAFAAABgEIAAAAIAJgyIgmAAQgOA2gYAdIAAAAQgCgEgHgFgAPRAnIAkAAIAGgeIgkAAgAPbgRIAkAAIAGgdIgkAAgAMeCEQAZgRAPgYIAAAAIAbAIQgUAegaAUIAAAAQgJgJgMgIgAWQCVIAKg4IgrAAIAcAJQgZAZgrARIAAAAQgLgMgKgHIAAAAQAngMAVgUIAAAAIg2AAIAEgZIBiAAIADgRIAeAAIgDARIBjAAIgEAZIg6AAQAhARARARIAAAAIgbAUQgQgRgogXIAAAAIAUgOIgdAAIgJA4gAnuCVIANhJIgJAEQgEgPgGgJIAAAAQAagHAUgMIAAAAIgMgIIAVgRIAOAJQAIgHAJgKIAAAAIgeAAQgQASgRAKIAAAAQgEgNgHgGIAAAAQAegQAOgdIAAAAIAWAEIgGALIAfAAIAFAAIAAAAIADgTIhDAAIgEAVIgVAAIAIgtIArAAIgCgPIAZgJIAGAYIAnAAIgIAtIgTAAIAJAIQgMAVgUAUIAAAAIAgAVIgRARIAAAAIgNBMIgaAAIABgFIghAAIgBAGgAnPB3IAgAAIAEgZIggAAgAnVBIIA/AAIgbgVIAAAAQgSAMgSAJgAtgCBIgMAEIgBgNIAAAAIhjAGIAAAAIABgZIAvgCIADgSIg4AAIgMBDIgcAAIALhDIgJAAIAEgZIAJAAIACgHIAdAAIgCAHIA4AAIACgKIhFAAIAOhPICpAAIgPBPIhHAAIgBAKIBYAAIgLBCQgEASgKAEIAAAAQgJAFgWAAIAAAAQgBgKgDgKgAtUB9IAEAAQAEAAAAgDIAAAAIAHgpIgZAAQAJAXABAVgAuEBiIASAAIgDgNIAWgEIghAAgAt3AbIApAAIACgLIgpAAgAu8AbIAoAAIADgLIgpAAgAtygBIApAAIACgMIgpAAgAu2gBIAoAAIACgMIgoAAgACpCUQACgOgGgQIAAAAIAlAAQAHABABgHIAAAAIAii/IAeAAIgjC/QgCANgEAIIAAAAQgEAGgJAEIAAAAQgMAGgdAAIAAAAIgKgBgAF2CUIAIgtIhiAAIAFgcIBhAAIAEgRIAfAAIgCARIBiAAIgGAcIhiAAIgIAtgAA9CUIAQhaQgaAngXAUIAAAAQgCgMgIgQIAAAAQAigdAagrIAAAAIgpAAIAEgbIAwAAIAGgfQgOADgeAEIAAAAQAAgMgEgMIAAAAQBCgIAngRIAAAAIARAXQgQAGgdAHIAAAAIgGAlIArAAIgFAbIgrAAIgCANQAKAJAbAaIAAAAIgWAaQgHgMgOgRIAAAAIgPBWgAr8CUIAVhwIDQAAIgQBVQgCAKgDAFIAAAAQgDAFgJADIAAAAQgMADgbgBIAAAAQgBgHgFgNIAAAAIhHAAIgCAKIgcAAIAMhCIBtAAIgKA4IgEAAQAQAAAEAAIAAAAQAGAAABgFIAAAAIAKg8IiVAAIgPBXgAqoBpIA3AAIACgPIg3AAgA0SBeQgZgkALhCIAAAAQAMhDAmglIAAAAQAmgmA+AAIAAAAQA/AAAaAmIAAAAQAaAlgMBDIAAAAQgMBBgoAlIAAAAQgoAmg+AAIAAAAQg7AAgagmgAzChJQgUAXgIArIAAAAQgHArANAWIAAAAQAMATAaAAIAAAAQAaAAAUgTIAAAAQAXgWAIgrIAAAAQAHgqgNgYIAAAAQgNgYgcAAIAAAAQgaAAgUAYgA4wB/QAohBA2hHIAAAAQAtg9AVgUIAAAAIiMAAIAKg3IDYAAIgHArQgxA4gxBBIAAAAQgvBBgYArIAAAAgAMoBaIAFgbIAWAAIAQhbIgTAAIAEgaIAUAAIAFgbIAaAAIgEAbIAfAAIAEgbIAbAAIgEAbIARAAIgFAaIgRAAIgQBbIAPAAIgEAbgANeA/IAfAAIADgRIgfAAgANlAXIAfAAIADgPIggAAgANsgOIAeAAIADgOIgfAAgACcBVIAYiKIAeAAIgZCKgAjrAyQBJgOAsgZIAAAAIgIAAIAHgmIhEAAIgFAbIgaAAIAIguIBfAAIACgIIhPAAIAEgWIC5AAIgEAWIhNAAIgCAIIBfAAIgJAuIgaAAIAFgbIgPAAIAIAOQgPAFgYAFIAAAAIAsANIAAAAIgKARQgWgKgkgJIAAAAIAJgPIACAAIgEgIQAMgCAjgKIAAAAIg0AAIgHAmIgIAAIAQAJIgFADQAlAQA5AGIAAAAQgMANgJAMIAAAAQgVgEgZgJIAAAAIgBAIIhrAAIABgIQgXAIgTAFIAAAAQgKgNgKgHgAiUAwIA7AAQgQgHgKgGIAAAAIghANgAHMAiQAEAKACAKIAAAAIgZAJIgCgMQhFAGgJAEIAAAAQgCgQgCgIIAAAAIg1AZIgKgYIBDgZIAAAAIACAWIgFACQAHgBARgLIAAAAIAWgSQgVABgIADIAAAAQgCgNgCgJIAAAAQAGgCAHgGIAAAAQAGgGAKgMIAAAAIhVAAIAFgbIBdAAIgGgOIAfgHQAGAIAEANIAAAAIBZAAIgFAbIhnAAIgUAWIAAAAIAWgBQAMgLAIgJIAAAAIAUANQgfAegkAZIAAAAIAbgCIgHgMIAYgIQAFAJADAIIAAAAIATgOQAfASANAOIAAAAIgYASQgLgMgYgRgAW/AoQgpAQhNAEIAAAAQgBgNgGgLIAAAAQArgBAggGIAAAAIgpgHIAAAAIAYgVIgyAAIAEgWIBGAAQAMgMAIgKIAAAAIg2AAIgDAOIgbAAIAHgmIBYAAIgDgLIAhgGIAGARIBaAAIgHAmIgdAAIADgOIhcAAIARAGIgPAQIAvAAIAJgPIAcAFIgFAKIAnAAIgEAWIgzAAQgJALgOALIAAAAQAnAJAcALIAAAAIggATQgZgLgpgLgAWUAIIAoAIQAMgHAJgIIAAAAIg2AAgAjHAIIA1gJQgSgHgVgEIAAAAIALgPQAcAFARAGIAAAAIgIANIAHgBIgBAPIhAARgArLAbIAJg1ICdAAIgJA1gAqrAHIBhAAIADgNIhhAAgAHPgBQATgNASgTIAAAAIAWAPQgOAMgaARIAAAAgAE3gQIAXgQQAWAOALANIAAAAIgYAQQgKgMgWgPgArigjIAFgaIBgAAIgDgRIAggIIAFAZIBaAAIgEAagAtcgkIABgLIgZAAIAEgYIAZAAIACgNIAeAAIgDANIA2AAIgFAYIg1AAIgBALgAu1gkIACgLIg0AAIAFgYIAzAAIADgNIAdAAIgCANIAaAAIgFAYIgaAAIgCALg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_graphics_29,x:86.2002,y:3.0001}).wait(18));

	// Layer_9
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.478,1],-89.9,0,89.9,0).s().p("AuCYuMAAAgxbIcFAAMAAAAxbg");
	this.shape.setTransform(-183.8016,-44.0884,1,1.2913,44.9995);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.478,1],-63.5,-63.5,63.6,63.6).s().p("EggfAMpMAtIgtIIT3T3MgtIAtIg");
	this.shape_1.setTransform(-150.175,-40.225);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.478,1],-63.5,-63.6,63.6,63.5).s().p("EggfAMpMAtIgtIIT3T3MgtIAtIg");
	this.shape_2.setTransform(-116.575,-36.375);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{x:-183.8016,y:-44.0884}}]},29).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape,p:{x:387.8984,y:21.1616}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(30).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:-82.925,y:-32.575},0).wait(1).to({x:-49.325,y:-28.725},0).wait(1).to({x:-15.675,y:-24.875},0).to({_off:true},1).wait(1).to({_off:false,x:51.575,y:-17.225},0).wait(1).to({x:85.225,y:-13.375},0).to({_off:true},1).wait(2).to({_off:false,x:186.125,y:-1.875},0).to({_off:true},1).wait(3).to({_off:false,x:320.625,y:13.475},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(31).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:17.925,y:-21.025},0).to({_off:true},1).wait(2).to({_off:false,x:118.825,y:-9.525},0).wait(1).to({x:152.475,y:-5.675},0).to({_off:true},1).wait(1).to({_off:false,x:219.725,y:1.975},0).wait(1).to({x:253.375,y:5.825},0).wait(1).to({x:286.975,y:9.675},0).to({_off:true},1).wait(1).to({_off:false,x:354.225,y:17.325},0).to({_off:true},1).wait(1));

	// sb_sc4_2888
	this.instance = new lib.sb_sc42888("synched",0);
	this.instance.setTransform(453.85,25.5,1,1,0,0,0,146,25.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:146,y:26.35,alpha:1},15,cjs.Ease.cubicOut).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.3,-19.9,646.9,52.8);


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
p.nominalBounds = new cjs.Rectangle(-5.4,-6.1,238,60.6);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({alpha:1,startPosition:29},9).to({startPosition:81},52).to({_off:true},1).wait(8));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({alpha:1,startPosition:29},10).to({startPosition:83},54).to({_off:true},1).wait(6));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({alpha:1},17).to({startPosition:0},44).to({_off:true},1).wait(16));

	// sb_tt_set
	this.instance_1 = new lib.sb_ttset_1("synched",0);
	this.instance_1.setTransform(488.35,64.7,1,1,0,0,0,102.9,39.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({x:173.25,y:64.95,alpha:1},17,cjs.Ease.cubicOut).to({startPosition:0},8).to({startPosition:0},44).to({_off:true},1).wait(16));

	// sb_tt_price
	this.instance_2 = new lib.sb_ttprice("synched",0);
	this.instance_2.setTransform(470.5,124.95,1,1,0,0,0,54.8,6.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({x:226.4,alpha:1},17,cjs.Ease.cubicOut).to({startPosition:0},8).to({startPosition:0},44).to({_off:true},1).wait(16));

	// sb_sc2_bg1
	this.instance_3 = new lib.sb_sc2bg1("synched",0);
	this.instance_3.setTransform(552.85,69,1,1,0,0,0,162.9,69);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:162.9,alpha:1},17,cjs.Ease.cubicOut).to({startPosition:0},56).to({_off:true},1).wait(16));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:278.9,startPosition:29},16,cjs.Ease.cubicOut).to({startPosition:20},51).to({_off:true},1).wait(10));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:757.25,mode:"single",startPosition:29},20,cjs.Ease.cubicOut).to({startPosition:29},49).to({_off:true},1).wait(12));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:273.05},13,cjs.Ease.cubicOut).to({startPosition:0},54).to({_off:true},1).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,0.4,1154.8,256.5);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:487.55,mode:"single"},16,cjs.Ease.cubicOut).to({startPosition:0},49).to({_off:true},1).wait(11));

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

	// sb_tt_set
	this.instance = new lib.sb_ttset("synched",0);
	this.instance.setTransform(687.3,155.7,1,1,0,0,0,137.2,10.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:349.95,alpha:1},23,cjs.Ease.cubicOut).wait(67));

	// sb_bg_set
	this.instance_1 = new lib.sb_bgset("synched",0);
	this.instance_1.setTransform(721.8,154.9,1,1,0,0,0,174.4,16.5);
	this.instance_1.alpha = 0.8984;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:362.9,y:154.95},23,cjs.Ease.quartOut).wait(67));

	// sb_tt_happy
	this.instance_2 = new lib.sb_tthappy("synched",0);
	this.instance_2.setTransform(13.05,105.65,1,1,0,0,0,153,65.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:278.5,y:108.05,alpha:1},23,cjs.Ease.backOut).wait(67));

	// sb_bg_happy
	this.instance_3 = new lib.sb_bghappy("synched",0);
	this.instance_3.setTransform(268.8,100.6,1,1,0,0,0,268.8,38);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},31).wait(59));

	// sb_tt_sentra
	this.instance_4 = new lib.sb_ttsentra("synched",0);
	this.instance_4.setTransform(360.4,29.9,1,1,0,0,0,144.8,15.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({y:39.65,alpha:1},23,cjs.Ease.cubicOut).wait(59));

	// sb_bg_sentra
	this.instance_5 = new lib.sb_bgsentra("synched",0);
	this.instance_5.setTransform(561.35,39.1,0.0836,1,0,0,0,223.6,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:223.8,scaleX:1,x:313.65,y:39.15},31,cjs.Ease.cubicOut).wait(59));

	// sb_tt_all
	this.instance_6 = new lib.sb_ttall("synched",0);
	this.instance_6.setTransform(360.5,-16.1,1,1,0,0,0,141.6,3.4);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:-3.1,alpha:1},31,cjs.Ease.cubicOut).wait(59));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.1,-18.5,1001.1,187.6);


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
	this.instance_3.setTransform(572.05,263.05,1,1,0,0,0,201.5,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.1,-6.1,1046.7,315.70000000000005);


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
	this.instance.setTransform(561.9,104.4,1,1,0,0,0,357.9,69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({startPosition:0},0).wait(68));

	// an_tt_JBL
	this.instance_1 = new lib.an_ttJBL("synched",0,false);
	this.instance_1.setTransform(66.7,369.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({_off:true},70).wait(68));

	// an_tt_light
	this.instance_2 = new lib.an_ttlight("synched",0,false);
	this.instance_2.setTransform(299.25,350.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(74).to({_off:false},0).wait(68));

	// an_sc2_pic1
	this.instance_3 = new lib.an_sc2_pic1("synched",0,false);
	this.instance_3.setTransform(-45.45,276.75,1.6358,1.6358,0,0,0,354.9,74.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({_off:true},70).wait(68));

	// an_sc2_bg2
	this.instance_4 = new lib.an_sc2bg2("synched",0,false);
	this.instance_4.setTransform(-41.05,370.15,1,1,0,0,0,491.8,62.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({_off:true},70).wait(68));

	// an_sc2_pic2
	this.instance_5 = new lib.an_sc2_pic2("synched",0,false);
	this.instance_5.setTransform(548.5,224.8,0.8876,0.8876,0,0,0,568.5,81);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(74).to({_off:false},0).wait(68));

	// an_sc2_bg3
	this.instance_6 = new lib.an_sc2bg3("synched",0,false);
	this.instance_6.setTransform(565.75,341.6,1,1,0,0,0,582.6,69);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(74).to({_off:false},0).wait(68));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-625.9,35.4,1774.4,396.8);


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
	this.instance.setTransform(377,99,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(414));

	// scc4
	this.instance_1 = new lib.scc4("synched",0);
	this.instance_1.setTransform(586.7,286.1,0.5,0.5,0,0,0,387.6,152);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(325).to({_off:false},0).wait(89));

	// scc2
	this.instance_2 = new lib.scc2("synched",0,false);
	this.instance_2.setTransform(402.25,118.8,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(81).to({_off:false},0).to({mode:"single",startPosition:118},142).to({regX:0,regY:0,scaleX:0.0392,scaleY:0.0392,x:523.8,y:218.6,alpha:0,startPosition:141},11).wait(180));

	// title
	this.instance_3 = new lib.title("synched",0,false);
	this.instance_3.setTransform(552.05,163.2,0.5,0.5,0,0,0,268.8,86.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({_off:true},76).wait(241).to({_off:false},0).wait(90));

	// an_car1
	this.instance_4 = new lib.an_car1("synched",0,false);
	this.instance_4.setTransform(378.1,259.75,0.3549,0.3549,0,0,0,261.4,171.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:49},82).to({_off:true},3).wait(150).to({_off:false,regX:581.8,regY:265.5,scaleX:0.4601,scaleY:0.4601,x:446.35,y:286.4,alpha:0,startPosition:0},0).to({alpha:1,startPosition:6},6).to({startPosition:49},79).to({regY:265.7,scaleX:0.325,scaleY:0.325,x:472,y:274.9},8).wait(86));

	// scc3
	this.instance_5 = new lib.scc3("synched",0,false);
	this.instance_5.setTransform(531.55,209.85,0.5,0.5,0,0,0,308.4,251.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(235).to({_off:false},0).to({startPosition:34},83).to({alpha:0},6).to({_off:true},1).wait(89));

	// sb_bg_normal
	this.instance_6 = new lib.sb_bg_normal("synched",0);
	this.instance_6.setTransform(498.3,217.3,0.2971,0.2971,0,0,0,697.6,490.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({startPosition:0},77).to({alpha:0},8).to({_off:true},1).wait(239).to({_off:false},0).to({alpha:1},9).wait(80));

	// sb_bg_blur
	this.instance_7 = new lib.sb_bg_blur("synched",0);
	this.instance_7.setTransform(572.75,207.65,0.3206,0.3206,0,0,0,696.8,489.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(77).to({_off:false},0).to({startPosition:0},151).to({regX:697.1,regY:490,scaleX:0.3977,scaleY:0.3977,x:531.55,y:206.95},13).to({startPosition:0},75).to({regX:696.5,regY:489.4,scaleX:0.2861,scaleY:0.2861,x:536.35,y:227.25},9).to({startPosition:0},9).wait(80));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.1,27.2,942.3,381.5);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(828).to({mode:"single",startPosition:413},0).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("A4/1FMAx/AAAMAAAAqLMgx/AAAg");
	this.shape.setTransform(150,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A4/VGMAAAgqLMAx/AAAMAAAAqLg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(829));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-202.3,51,792.2,256.4);
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