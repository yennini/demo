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


(lib.sb_ttset2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(398.4867,80.1146,1.9522,1.9522);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAkBXIhjAEQgVACgGACIAAgBIgDgSQAGAAAJgHQAHgEARgNIgzAAIADgRIApAAIALg9QgRALgVAKQgDgKgHgFQAogQAcgaIg2AAIADgRIBEAAQAIgJAFgLIAUAEIgLAQIBhAAIgDARIg2AAQAWAaAgANQgKAJgGAGQgRgIgPgNIAAACIhUAAIgCAMIBUAAIgCANIhVAAIgCALIBVAAIgDAPIhUAAIgCALIB+AAIgDARIgxAAQAXAZAHAMIgTAKIgJgMgAg7BLIBUgEIgLgMIAOgHIg4AAQgSAQgNAHgAgbgqIBFAAIgPgUIghAAQgHAIgOAMg");
	this.shape_1.setTransform(348.1693,80.1146,1.9522,1.9522);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhrBTQAkgLASgWQAMgQAJghIg3AAIADgTIBUAAIAOhQIAVAAIgOBQIBXAAIgEATIg7AAIgNBHQAAAFABABQABACAGAAIAYAAQAGAAADgGQADgGAFgXQAGAFALAEQgHAbgHAJQgHAJgOAAIgdAAQgQAAgEgGQgFgGADgPIAMhHIgiAAQgLAogPATQgVAbgoANQgCgLgIgGgAg4hRIAUgHQAOAgACAUIgVAHQgCgVgNgfgAAxgkQAWgbAOgbIAUAHQgWAhgSAVg");
	this.shape_2.setTransform(295.4605,80.017,1.9522,1.9522);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcBkIADgSIiKAAIACgOIAfAAIAKg3IgYAAIACgNIgJgGQAPgMAEgVIACgNIBOAAIgFAjIhCAAQgGALgGAGICqAAIgCANIgaAAIgJA3IAeAAIgDAOIgeAAIgDASgAg2BEIBYAAIABgKIhXAAgAgyAuIBXAAIACgLIhXAAgAguAXIBXAAIACgKIhXAAgAgggcIARAAIADgNIgSAAgAg8gnIgDALIAQAAIADgNIgQAAgAAAgPQATgCAQgFQgKgIgGgMIACgBIgHAAIACgKQgDgGgEgDQAUgHACgNIACgLIA4AAIgEATQAAAGADAAIAKAAIAKgBIgBAMIgLABIgPAAQgJAAgCgEQgCgEABgKIABgFIgYAAQgEAPgPAKIA3AAIAEgBIAJAEQgKARgSAMQAMAFAVACQgJAIgEAGQgVgDgRgJQgRAIgbAEQgCgJgDgFgAAzgdQAMgFAIgJIgjAAQAGAJAJAFgAhLg7IACgLIAfAAIACgIIgnAAIACgLIAnAAIABgKIATAAIgCAKIAlAAIgCALIglAAIgBAIIAeAAIgBALg");
	this.shape_3.setTransform(245.9727,80.0658,1.9522,1.9522);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhyBbQATgYALg1IgMACIAAgRIAOgBIANhGIASAAIAKgbIARAEIgLAXIAZAAIgLA+IALgBIgCAPIgMABIgNBKQgCALgIAFQgGACgUAAQAAgGgDgKIATABQADAAABgEIANhGIgcADQgLA9gWAcQgEgFgJgEgAhBgDIAbgEIAJgwIgbAAgAgHBkIAHgmQgKAWgOAPQgGgHgHgEQAZgbALg3IAFgkIBbAAIgMA/IhKAAIgCAKIBQAAIgKA4IgSAAIABgFIgyAAIgBAGgAAOBOIAwAAIAFgUIgyAAgAAOASIA2AAIACgLIg2AAgAARgFIA3AAIACgLIg3AAgAhFAWIANgEQAFATABANIgNAEQAAgKgGgWgAg4grIAMgEQAFARABAMIgNAGQAAgKgFgVgAgKgwQAsgVAYgfIAQAHIgFAGQARAVAdAOQgHAIgFAKQgQgKgIgIIgCALIgyAAIACgKQgTANgMAHIgIgRgAAjg3IAoAAQgJgIgJgLg");
	this.shape_4.setTransform(194.7768,79.9194,1.9522,1.9522);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeBSQAJgEACgLIABgHIgXAJQgCgHgFgFIg7AQIgBgSIAZgGIAKg5IgTAAIADgRIATAAIAIgtIgVAAIADgSIA6AAIgDASIgUAAIgHAtIARAAIgDARIgSAAIgJAzIAUgFIgBAQQAcgHAYgPIgdAAIAIgtIBoAAIgIAtIgmAAQACAJAGAJQAQgIALgIIALANIgeAOQAMANATAEQgKAIgFAIQgogPgKgtQgNALgMAGIgEAXIAhgHIgCAPQgtAKgHADQgBgIgEgFgAgCASIBCAAIADgRIhDAAgAgagXIADgQICBAAIgDAQgAgNgwIAIgvIByAAIgIAvgABEg9IASAAIADgTIgSAAgAAkg9IASAAIADgTIgSAAgAAFg9IARAAIADgTIgRAAg");
	this.shape_5.setTransform(144.069,80.7003,1.9522,1.9522);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(122.9,60.4,294.9,39.300000000000004);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgCBUQAVgKATgUQgJgWgDgcQgSA+gbAhQgGgHgJgHQAGgFAIgMIgQAFQAAgPgDgUIAOgFQAEATABAQQAQgXAKgmQAJgbAJgxIgUAAIADgTIBLAAIADgBIAOACQgKAhgKAbIAMAAIADgCIAMAFQgQAugcAhQANASASAJQgJAGgHALQgSgLgMgRQgRAQgXANQgDgJgGgHgAA1AlQARgWALgYIgnAAQADAaAIAUgAAigbIAaAAIAOgqIgfAAIgJAqgAhpBaQAIgQAKgiIAQADQgKAhgKATQgIgEgGgBgAhAAqIAPgDQABAVgDAWIgPADQACgSAAgZgAhbANQAGgBAOgMQAIgHAMgOQgXACgGADIgDgSQAFgCAJgKQAFgFALgPQAMgSAJgPIARAHQgQAbgZAcIAUgCIAVgdIAPALQgeAogdAaIAggFIgEgRIAPgEQAHAWABAUIgRAGIAAgLQg5AJgFADQAAgJgEgKg");
	this.shape.setTransform(308.4816,30.3137,1.9766,1.9766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhqBTQAcgOAQgWQANgRAGgZIgvAAIAEgTIAvAAIAIgsIgpAKQAAgHgEgKQBBgOAhgTIALARQgSAJgZAIIgJAyIA8AAIAPhSIAUAAIgPBSIAuAAIgDATIguAAIgRBdIgUAAIARhdIg8AAQgIAdgOAWQgSAZggARQgFgIgHgHg");
	this.shape_1.setTransform(257.1392,30.6102,1.9766,1.9766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhpBVQAkgGAbgMIghAAIAMhCIgSAEQgCgFgFgKQAkgGASgMIgkAAQAIgTAEgSIArAAIABgKIgzAAIADgNIAyAAIADgLIARAAIgDALIAeAAIACgLIATAAIgCALIAvAAIgGAkIgvAAIgCAMIA9AAIgCAFQgFASgFAFQgEAEgHAAIgGAAIgMBLIggAAQAfAKAUAKIgRAMQgXgMgjgMIAKgIIg5AAIAOAHQgZAOguAMQgDgHgIgIgAg1A3IBkAAIACgMIhkAAgAgxAgIBkAAIACgMIhkAAgAgtAJIBkAAIACgKIhkAAgABAgOIgBgHIANABQADAAACgBIADgHIgoAAIgDAOIAXAAgAgZgOIAvAAIACgOIghAAQgIAJgIAFgAgDgoIAeAAIACgMIgdAAgAgwgoIAZAAQAEgHABgFIgaAAgAAyhBIAcAAIADgKIgdAAgAAChBIAdAAIACgKIgeAAg");
	this.shape_2.setTransform(206.1427,30.3632,1.9766,1.9766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhkBSQA/gPAZgqIg4AAIAJgxIgMAIQgFgLgHgEQAtgaAdgpIAUAEIgJAMIAxAAIADgBIAMAJQgLAPgPAQIA9AAIgNBEIgzAAIgIAtQgBAGACABQABABAHAAIAdAAQAGAAADgEQADgFAEgUQAHAGAKADQgGAXgHAHQgHAIgPAAIghAAQgRABgFgGQgFgFADgPIAIguIgHAAQgNAagWASQgZATgoALQgDgKgGgHgAARAHIA1AAIAGggIgxAAQgFASgFAOgAgtAHIAqAAIAJggIgtAAgAgjgrIAzAAIAUgWIgwAAg");
	this.shape_3.setTransform(153.6143,30.1161,1.9766,1.9766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AADBjIANhKIg7AAIADgTIA8AAIAIgqIgfAAQgLAUgIALQgFgFgLgGQAWgYAQgwIATAFIgNAbIAZAAIAHgoIAUAAIgHAoIAwAAIgEAUIgvAAIgIAqIA5AAIgDATIg5AAIgOBKgAhaBiIAVhxIgWAUQgCgMgEgHQAkghAcgzIASAGQgLATgTAbIgaCQg");
	this.shape_4.setTransform(402.8045,87.1377,1.9348,1.9348);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAkBXIhjAEQgVACgGACIAAgBIgDgSQAGAAAJgHQAHgEARgNIgzAAIADgRIApAAIALg9QgRALgVAKQgDgKgHgFQAogQAcgaIg2AAIADgRIBEAAQAIgJAFgLIAUAEIgLAQIBhAAIgDARIg2AAQAWAaAgANQgKAJgGAGQgRgIgPgNIAAACIhUAAIgCAMIBUAAIgCANIhVAAIgCALIBVAAIgDAPIhUAAIgCALIB+AAIgDARIgxAAQAXAZAHAMIgTAKIgJgMgAg7BLIBUgEIgLgMIAOgHIg4AAQgSAQgNAHgAgbgqIBFAAIgPgUIghAAQgHAIgOAMg");
	this.shape_5.setTransform(352.9363,87.1377,1.9348,1.9348);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhrBTQAkgLASgWQAMgQAJghIg3AAIADgTIBUAAIAOhQIAVAAIgOBQIBXAAIgEATIg7AAIgNBHQAAAFABABQABACAGAAIAYAAQAGAAADgGQADgGAFgXQAGAFALAEQgHAbgHAJQgHAJgOAAIgdAAQgQAAgEgGQgFgGADgPIAMhHIgiAAQgLAogPATQgVAbgoANQgCgLgIgGgAg4hRIAUgHQAOAgACAUIgVAHQgCgVgNgfgAAxgkQAWgbAOgbIAUAHQgWAhgSAVg");
	this.shape_6.setTransform(300.6979,87.041,1.9348,1.9348);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAcBkIADgSIiKAAIACgOIAfAAIAKg3IgYAAIACgNIgJgGQAPgMAEgVIACgNIBOAAIgFAjIhCAAQgGALgGAGICqAAIgCANIgaAAIgJA3IAeAAIgDAOIgeAAIgDASgAg2BEIBYAAIABgKIhXAAgAgyAuIBXAAIACgLIhXAAgAguAXIBXAAIACgKIhXAAgAgggcIARAAIADgNIgSAAgAg8gnIgDALIAQAAIADgNIgQAAgAAAgPQATgCAQgFQgKgIgGgMIACgBIgHAAIACgKQgDgGgEgDQAUgHACgNIACgLIA4AAIgEATQAAAGADAAIAKAAIAKgBIgBAMIgLABIgPAAQgJAAgCgEQgCgEABgKIABgFIgYAAQgEAPgPAKIA3AAIAEgBIAJAEQgKARgSAMQAMAFAVACQgJAIgEAGQgVgDgRgJQgRAIgbAEQgCgJgDgFgAAzgdQAMgFAIgJIgjAAQAGAJAJAFgAhLg7IACgLIAfAAIACgIIgnAAIACgLIAnAAIABgKIATAAIgCAKIAlAAIgCALIglAAIgBAIIAeAAIgBALg");
	this.shape_7.setTransform(251.6519,87.0894,1.9348,1.9348);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhyBbQATgYALg1IgMACIAAgRIAOgBIANhGIASAAIAKgbIARAEIgLAXIAZAAIgLA+IALgBIgCAPIgMABIgNBKQgCALgIAFQgGACgUAAQAAgGgDgKIATABQADAAABgEIANhGIgcADQgLA9gWAcQgEgFgJgEgAhBgDIAbgEIAJgwIgbAAgAgHBkIAHgmQgKAWgOAPQgGgHgHgEQAZgbALg3IAFgkIBbAAIgMA/IhKAAIgCAKIBQAAIgKA4IgSAAIABgFIgyAAIgBAGgAAOBOIAwAAIAFgUIgyAAgAAOASIA2AAIACgLIg2AAgAARgFIA3AAIACgLIg3AAgAhFAWIANgEQAFATABANIgNAEQAAgKgGgWgAg4grIAMgEQAFARABAMIgNAGQAAgKgFgVgAgKgwQAsgVAYgfIAQAHIgFAGQARAVAdAOQgHAIgFAKQgQgKgIgIIgCALIgyAAIACgKQgTANgMAHIgIgRgAAjg3IAoAAQgJgIgJgLg");
	this.shape_8.setTransform(200.913,86.9443,1.9348,1.9348);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeBSQAJgEACgLIABgHIgXAJQgCgHgFgFIg7AQIgBgSIAZgGIAKg5IgTAAIADgRIATAAIAIgtIgVAAIADgSIA6AAIgDASIgUAAIgHAtIARAAIgDARIgSAAIgJAzIAUgFIgBAQQAcgHAYgPIgdAAIAIgtIBoAAIgIAtIgmAAQACAJAGAJQAQgIALgIIALANIgeAOQAMANATAEQgKAIgFAIQgogPgKgtQgNALgMAGIgEAXIAhgHIgCAPQgtAKgHADQgBgIgEgFgAgCASIBCAAIADgRIhDAAgAgagXIADgQICBAAIgDAQgAgNgwIAIgvIByAAIgIAvgABEg9IASAAIADgTIgSAAgAAkg9IASAAIADgTIgSAAgAAFg9IARAAIADgTIgRAAg");
	this.shape_9.setTransform(150.6578,87.7182,1.9348,1.9348);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(129.6,10.6,292.20000000000005,96);


(lib.sb_bgset2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#571D3A").s().p("Aq8hlIW8gBIgCDMI39AAg");
	this.shape.setTransform(215.4378,86.7955,3.4579,3.4579,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,51.4,531.1,70.9);


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
	this.shape.graphics.f("#571D3A").s().p("Am3hkIOygCIgDDLIvyACg");
	this.shape.setTransform(157.5742,64.3815,6.7161,6.7161,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.6,-4.9,680.4,138.70000000000002);


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
	this.shape.setTransform(246.6682,14.4749,0.9206,0.9206);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABHCWQgmg3gzg3IhCAAIAABuIgsAAIAAksIB/AAQAnABAeARQApAZAAAzQAAAngXAYQgTAWggAHQAuAxAwBBgAhUABIBNAAQAcgBASgIQAZgPAAgfQABgegXgNQgSgNgdAAIhPAAg");
	this.shape_1.setTransform(199.0497,14.4749,0.9206,0.9206);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVCWIAAkEIhyAAIAAgoIEPAAIAAAoIhyAAIAAEEg");
	this.shape_2.setTransform(149.8432,14.4749,0.9206,0.9206);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABfCWIi2jxIAADxIgrAAIAAksIAyAAICoDgIAAjgIArAAIAAEsg");
	this.shape_3.setTransform(100.4295,14.4749,0.9206,0.9206);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhqCWIAAksIDUAAIAAAoIioAAIAABXICbAAIAAAmIibAAIAABfICoAAIAAAog");
	this.shape_4.setTransform(51.9825,14.4749,0.9206,0.9206);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah1CIIAAgsIA0AQQAeAIAaAAQAlAAAXgNQAWgMAAgVQAAgggtgMIhGgUQhHgSAAg8QAAgrAkgVQAhgTA1AAQAxAAAvAQIAAAqQg6gTgmABQghgBgUAKQgZALAAAXQAAAdAsAMIBMAWQBDARAAA8QAAAqghAYQgiAWg8AAQg2AAg2gUg");
	this.shape_5.setTransform(5.1926,14.4749,0.9206,0.9206);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_ttsentra, new cjs.Rectangle(-5.6,0.1,266.8,28.7), null);


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
	this.shape.graphics.f("#C3356C").s().p("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");
	this.shape.setTransform(110.1,20.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.9,217,38.9);


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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkB1IAIgtIhiAAIAFgcIBiAAIADgRIAfAAIgEARIBjAAIgFAcIhiAAIgIAtgAAcAUQhEAHgIADQgCgQgCgIQgdAPgYAKIgKgYIBDgYIABAVIgFACQAHgBARgKIAXgSQgYACgGACIgDgXQAEgBAJgIIAQgRIhVAAIAEgbIBdAAIgFgOIAegHQAGAIAEANIBZAAIgFAbIhnAAIgUAWIAWgBIATgUIAVANQgfAfgjAYIAZgBIgGgMIAXgIIAJAQIATgNQAeARAOAOIgZASQgLgNgYgQQAFAMACAIIgZAJgAhigvIAWgQQAVANANAOIgZASQgJgNgWgQgAA0ggQAXgQAPgQIAWAPQgRAPgXAPg");
	this.shape.setTransform(167.575,15.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASBVIAmABQAHAAAAgHIAji/IAdAAIgiDAQgCANgEAHQgEAHgJADQgNAGgmAAQABgQgGgPgAhUB0IAQhYQgbAngWASQAAgHgKgWQAjgdAagpIgrAAIAGgcIAvAAIAGgfIgrAHQAAgKgFgNQBDgKAlgQIASAXQgPAFgdAIIgGAlIAsAAIgFAcIgsAAIgBAIQAXAWAMAPIgVAaQgGgLgOgUIgRBagAAPA1IAZiLIAeAAIgZCLg");
	this.shape_1.setTransform(141.1,15.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhEBOIAPgRIApAOQAQgHARgKIh3AAIAEgWICOAAIAEgBIAQAMQgSAUgiATIASAIIgRAUQgdgQg4gUgAh5ANQBLgOAqgYIgIAAIAHgoIhEAAIgFAcIgaAAIAIguIBeAAIACgJIhOAAIAEgVIC4AAIgEAVIhNAAIgDAJIBhAAIgJAuIgcAAIAGgcIgOAAIAIAPQgSAGgXAEIAsAOIgKARQgUgIglgLIAJgQIACABIgEgJQAPgDAggKIg1AAIgHAoIgIAAIAQAJIgEADQAlAQA6AGQgMAJgKAOQgZgEgVgIIgCAJIhpAAIABgJIgrANQgLgNgIgHgAgjAMIA6AAQgPgHgKgGQgMAFgVAIgAhWgcIA2gKIgogLIALgPQAcAEASAHIgIANIAGgBIgBAQIhAARg");
	this.shape_2.setTransform(115.1,16.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggBgQAggNAUgQIgaAAIAWiDIAgAAIAGgSIgpAAIAFgZIBwAAIgFAZIgsAAIgIASIAqAAIgXCDIggAAQAWAOAOAPIgVAUQgIgLgbgWIARgQIgkAAIAOASQgYAQgiAQQgFgNgEgIgAAXAsIAtAAIACgPIgtAAgAAeAIIAsAAIADgOIgtAAgAAkgbIAtAAIADgOIgtAAgAh6B0IANhIIgKADQgCgMgIgLQAbgIAUgLIgMgHIAUgRIAPAJQALgJAGgIIgfAAQgNAQgTALQgDgLgIgHQAdgRAQgeIAVAFIgGALIAgAAIAEgBIAAABIAEgUIhEAAIgDAWIgXAAIAJgtIAsAAIgDgQIAagIIAEAYIAoAAIgIAtIgTAAIAKAIQgNAWgUASIAgAWIgRAQIABAAIgPBNIgaAAIABgGIggAAIgBAGgAhcBXIAhAAIAEgZIggAAgAhhAnIA/AAQgIgIgTgMQgPALgVAJg");
	this.shape_3.setTransform(89.2,15.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah9B2IAUhwIDPAAIgPBUQgCAKgDAFQgEAFgIACQgJAEgfAAQAAgJgFgNIhGAAIgCALIgcAAIAMhCIBsAAIgKA3IgEAAQAQABAEgBQAGAAAAgEIALg8IiUAAIgQBYgAgqBKIA2AAIADgOIg2AAgAhNgEIAKg1ICdAAIgKA1gAgrgXIBfAAIADgOIhgAAgAhjhDIAFgZIBfAAIgCgRIAfgIIAGAZIBaAAIgFAZg");
	this.shape_4.setTransform(62.475,15.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F1E655").s().p("AAiBhIgNAEIgBgNIhjAGIADgZIAugCIADgTIg4AAIgMBEIgdAAIAMhEIgJAAIAEgXIAJAAIACgHIAcAAIgBAHIA4AAIACgLIhFAAIAOhOICnAAIgOBOIhHAAIgBALIBYAAIgLBBQgEARgKAFQgJAFgXAAQAAgJgCgLgAAtBdIAEAAQADAAABgDIAHgqIgZAAQAKAYAAAVgAgCBCIARgBIgDgLIAWgGIgiAAgAAKgEIApAAIACgLIgpAAgAg6gEIAoAAIACgLIgoAAgAAPgiIApAAIACgLIgpAAgAg1giIApAAIACgLIgpAAgAAkhEIACgLIgZAAIAFgYIAYAAIADgNIAdAAIgCANIA1AAIgEAYIg2AAIgCALgAgzhEIACgLIg0AAIAEgYIA0AAIACgNIAeAAIgDANIAaAAIgFAYIgZAAIgCALg");
	this.shape_5.setTransform(36.275,15.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1E655").s().p("AhwBoQgZglALhCQAMhDAmgkQAngnA8AAQA/AAAbAnQAZAkgMBDQgLBBgpAlQgoAmg9AAQg7ABgagmgAggg/QgUAWgIArQgIAsAOAVQAMAUAaAAQAaAAAUgUQAXgWAHgrQAIgqgOgXQgNgXgbAAQgbAAgTAXg");
	this.shape_6.setTransform(7.4633,11.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F1E655").s().p("Ah6CJQAohCA2hHQAsg8AVgUIiLAAIAKg3IDXAAIgIArQgxA4gwBCQgvBBgXAqg");
	this.shape_7.setTransform(-20.1,11.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc42888, new cjs.Rectangle(-32.4,-2.5,212.70000000000002,30.3), null);


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
	this.shape_10.setTransform(280.7,10.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABBCaIizAJQglADgLADIAAAAIAAgBIgFggQAKgCAQgLQAJgEAigZIhaAAIAFgfIBJAAIAThtQghAVgiAOQgIgRgKgJQBEgbA1gvIhgAAIAGgeIB4AAQAOgQAMgUIAkAHQgNASgJALICuAAIgFAeIhgAAQATAVAaATQAZASAaALQgTAQgJAMQgdgPgcgYIgBAFIiXAAIgEAVICYAAIgEAYIiYAAIgEAUICYAAIgEAZIiYAAIgEAVIDjAAIgGAfIhXAAQAnAqAPAYIgjASQgFgKgKgOgAhrCGICXgGIgTgXIAZgLIhkAAQgeAYgbAQgAgyhMIB+AAQgOgPgOgUIg7AAQgPAQgYATg");
	this.shape_11.setTransform(230.525,10.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ai1ChQgFgJgFgFQBAgTAfgnQAWgcARg9IhjAAIAFghICXAAIAaiQIAkAAIgZCQICcAAIgGAhIhrAAIgWB/QgCAKADADQACADAKAAIAsAAQALAAAFgLQAFgLAIgpQAMAKATAFQgMAxgMAQQgMARgaAAIg0AAQgdAAgHgLQgJgKAGgdIAWh/Ig/AAQgTBHgcAlQgkAvhIAXQgCgHgFgKgAhThhQgHgbgKgXIAjgMQAZA3ADAnIglANQgBgSgIgbgABYhBQAmgvAagzIAjAOQgoA9geAjg");
	this.shape_12.setTransform(178.15,10.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAyCyIAGggIj5AAIAFgaIA4AAIARhhIgsAAIAFgYIgQgLQAbgWAGgmIAEgWICNAAIgKA+Ih3AAQgJATgMAMIEyAAIgFAYIguAAIgRBhIA2AAIgEAaIg3AAIgFAggAhhB4ICdAAIADgQIidAAgAhaBRICdAAIADgSIidAAgAhTAoICdAAIADgRIidAAgAg6gzIAfAAIAEgYIgfAAgAhxgzIAdAAIAEgYIgcAAgAAAgbQAmgGAYgIQgRgOgKgWIADAAIgNAAIADgUQgGgLgGgEQAVgHAJgKQAIgHACgMIADgTIBkAAIgGAiIAAAIQABACAEAAIARAAQAOAAAFgCIgCAWQgFACgQAAIgZAAQgRAAgEgIQgEgHADgRIACgJIgrAAQgHAbgcARIBjAAIAGgBIASAHQgRAegjAWQAYAIAjAEQgMALgKAOQgogGgcgPQghAPgtAGQgEgPgGgJgABcg1QAVgMAOgMIg+AAQALAPAQAJgAiHhqIADgTIA5AAIADgPIhFAAIADgTIBFAAIADgSIAhAAIgDASIBCAAIgDATIhDAAIgCAPIA3AAIgDATg");
	this.shape_13.setTransform(128.725,10.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjMCjQAVgaANgpQALgcAHgrIgVADIAAgeIAagCIAWh9IAgAAQALgaAHgVIAhAGIgWApIAsAAIgTBvIATgDIgCAbIgWADIgXCDQgEAWgOAHQgKAFglABQABgOgGgPIAiABQAHgBAAgGIAWh+IgwAHQgVBtgnAxQgJgKgNgGgAh2gHIAygGIAOhXIgvAAgAgNCyIAMhCQgSAmgXAaQgPgOgLgEQAvgxARhkIAKg/ICjAAIgUBxIiEAAIgFASICPAAIgSBlIggAAIACgLIhYAAIgCALgAAXCMIBZAAIAHglIhZAAgAAXAgIBjAAIADgTIhiAAIgEATgAAggKIBhAAIADgSIhhAAgAh7AnIAVgHQAKAfACAaIgXAIQgBgXgJgjgAhlhOIAVgHQAIAdADAYIgYAJQAAgWgIghgAgShXQAkgRAfgXQAigZAVgbIAdAMIgKALQAOASAXASQAWARAXAKQgLAMgKATQgWgNgWgTIgDAUIhYAAIADgSQggAXgZAMQgDgPgKgPgAA+hkIBIAAQgRgOgPgUQgWAVgSANg");
	this.shape_14.setTransform(78.75,10.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag2CRQAPgGADgSIADgNQgWAKgTAFQgEgKgIgMQg8ARguAMIgBghIAsgLIAShlIgiAAIAGggIAhAAIAOhPIgkAAIAFggIBnAAIgFAgIgkAAIgNBPIAeAAIgFAgIgfAAIgRBdIAjgKIgBAcQA0gNAqgZIg0AAIAOhRIC6AAIgOBRIhFAAQAGARAJAPQAXgMAagRIAUAWQgcAOgbAMQAVAVAjAKQgPAMgMAQQhHgZgRhRQgWARgaANIgHAoIA9gNQgDAQgBAKQhRAUgNAGQgCgQgGgKgAgEAgIB3AAIAFgeIh4AAgAgwgpIAGgcIDoAAIgGAcgAgYhWIAOhUIDMAAIgOBUgAB5hvIAhAAIAFghIggAAgABBhvIAfAAIAGghIggAAgAAJhvIAfAAIAGghIggAAg");
	this.shape_15.setTransform(28.2,10.8125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.8,-7.8,289.59999999999997,35.9);


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
	this.shape.graphics.f("#C3356C").s().p("AhZFMIB8qXIA3AAIiHKXg");
	this.shape.setTransform(14.8513,11.0015,0.8796,0.8796);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-18.2,15.8,58.5);


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
	this.shape.setTransform(171.6823,3.5621,0.693,0.693);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(14).to({_off:true},1).wait(14).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.9,-39.4,313.6,86);


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
	this.shape.graphics.lf(["#512678","#8D295A","#C02F75"],[0.004,0.545,1],-170,37.9,155.8,37.9).s().p("A4WE4IBhpvMAvMAAAIh0Jvg");
	this.shape.setTransform(215.2113,35.3125,1.266,1.266);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.9,-4.2,394.6,79.10000000000001);


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
	mask.graphics.p("Egz2ATxMAHSgoHMBgbAAmMgHRAoHg");
	mask.setTransform(363.075,246.175);

	// Layer_3
	this.instance = new lib.sc2_pic2();
	this.instance.setTransform(-22,86,0.7367,0.7367);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.2,115.9,663.8,260.4);


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
	mask.graphics.p("Az4ohMAqxAAAIjBRCMgqwAAAg");
	mask.setTransform(335.375,171.55);

	// Layer_3
	this.instance = new lib.sc2_pic1();
	this.instance.setTransform(126,30,0.7487,0.7487);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(188.9,117,293,109.1);


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

	// mo_tt_sentra
	this.instance = new lib.mo_ttsentra();
	this.instance.setTransform(131.45,13,1,1,0,0,0,144.8,15.6);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",1,1,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-5.5,275,38);


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

	// mo_tt_happy
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

	// mo_tt_all
	this.instance = new lib.mo_ttall();
	this.instance.setTransform(110.7,11.1,0.9259,0.9259,0,0,0,141.6,3.4);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",1,1,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.4,5,271,17);


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
	this.instance.setTransform(293.6,20.75,1.1329,1,0,0,0,223.7,23.4);
	this.instance.compositeOperation = "lighten";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40.2,-2.6,507.2,46.9);


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
	this.instance.setTransform(-843.05,125.55,0.6303,0.6303,0,0,0,415.1,265.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:415,scaleX:1,scaleY:1,x:748.55,y:265.55,alpha:1},15,cjs.Ease.cubicOut).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1104.7,-41.8,2268.3,573.0999999999999);


(lib.titlesub2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_tt_set2
	this.instance = new lib.sb_ttset2("synched",0);
	this.instance.setTransform(553.15,89.9,1,1,0,0,0,270.3,80);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:310.95,y:89.25,alpha:1,startPosition:1},23,cjs.Ease.cubicOut).wait(67));

	// sb_bg_set2
	this.instance_1 = new lib.sb_bgset2("synched",0);
	this.instance_1.setTransform(-31.95,91.55,0.0087,1,0,0,0,213.5,86.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:215.4,scaleX:1,x:231.35},23,cjs.Ease.cubicOut).wait(67));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.2,56.1,734.8000000000001,70.9);


(lib.titlesub = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(515,20.7,1,1,0,0,0,137.2,10.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:11,scaleX:0.9661,scaleY:0.9661,x:180.8,alpha:1},23,cjs.Ease.cubicOut).to({startPosition:1},59).to({_off:true},1).wait(7));

	// sb_bg_set
	this.instance_1 = new lib.sb_bgset("synched",0);
	this.instance_1.setTransform(-41,19.95,0.0681,1,0,0,0,174.8,16.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:174.4,scaleX:1,x:190.6,alpha:0.8984},23,cjs.Ease.cubicOut).to({startPosition:0},59).to({_off:true},1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.8,-1.5,966.4000000000001,138.7);


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
p.nominalBounds = new cjs.Rectangle(-79.3,-19.9,234,51);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:146,y:26.35,alpha:1},10,cjs.Ease.cubicOut).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.3,-19.9,542.9,52.8);


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

	// sb_sc4_72_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_20 = new cjs.Graphics().p("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");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_graphics_20,x:110.1,y:20.35}).wait(27));

	// Layer_9
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(244,152,188,0)","#F498BC","rgba(244,152,188,0)"],[0,0.478,1],-89.9,0,89.9,0).s().p("AuCYuMAAAgxbIcFAAMAAAAxbg");
	this.shape.setTransform(-183.8016,-44.0884,1,1.2913,44.9995);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(244,152,188,0)","#F498BC","rgba(244,152,188,0)"],[0,0.478,1],-63.5,-63.5,63.6,63.6).s().p("EggfAMpMAtIgtIIT3T3MgtIAtIg");
	this.shape_1.setTransform(-161.825,-41.575);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(244,152,188,0)","#F498BC","rgba(244,152,188,0)"],[0,0.478,1],-63.5,-63.6,63.6,63.5).s().p("EggfAMpMAtIgtIIT3T3MgtIAtIg");
	this.shape_2.setTransform(-117.875,-36.525);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{x:-183.8016,y:-44.0884}}]},20).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape,p:{x:387.8984,y:21.1616}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(21).to({_off:false},0).wait(1).to({x:-139.875,y:-39.075},0).to({_off:true},1).wait(1).to({_off:false,x:-95.875,y:-34.025},0).wait(1).to({x:-73.875,y:-31.525},0).wait(1).to({x:-51.875,y:-29.025},0).wait(1).to({x:-29.925,y:-26.525},0).to({_off:true},1).wait(2).to({_off:false,x:36.075,y:-18.975},0).wait(1).to({x:58.075,y:-16.475},0).wait(1).to({x:80.025,y:-13.975},0).to({_off:true},1).wait(4).to({_off:false,x:189.975,y:-1.425},0).wait(1).to({x:211.975,y:1.075},0).to({_off:true},1).wait(4).to({_off:false,x:321.925,y:13.625},0).to({_off:true},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(23).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,x:-7.925,y:-23.975},0).wait(1).to({x:14.075,y:-21.475},0).to({_off:true},1).wait(3).to({_off:false,x:102.025,y:-11.425},0).wait(1).to({x:124.025,y:-8.925},0).wait(1).to({x:145.975,y:-6.425},0).wait(1).to({x:167.975,y:-3.925},0).to({_off:true},1).wait(2).to({_off:false,x:233.975,y:3.625},0).wait(1).to({x:255.925,y:6.125},0).wait(1).to({x:277.925,y:8.625},0).wait(1).to({x:299.925,y:11.125},0).to({_off:true},1).wait(1).to({_off:false,x:343.925,y:16.175},0).wait(1).to({x:365.875,y:18.675},0).to({_off:true},1).wait(1));

	// sb_sc4_72
	this.instance = new lib.sb_sc472("synched",0);
	this.instance.setTransform(115.5,26,1,1,0,0,0,115.5,26);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},18).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.9,217,38.9);


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

	// sb_sc2_bg1
	this.instance_2 = new lib.sb_sc2bg1("synched",0);
	this.instance_2.setTransform(552.85,69,1,1,0,0,0,162.9,69);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:162.9,alpha:1},17,cjs.Ease.cubicOut).to({startPosition:0},56).to({_off:true},1).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.9,-4.2,784.6,79.10000000000001);


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
	this.instance.setTransform(1379.6,62.1,1,1,0,0,0,226.3,62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:757.25,mode:"single",startPosition:29},15,cjs.Ease.cubicOut).to({startPosition:29},54).to({_off:true},1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(545.8,-39.4,936,86);


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
	this.instance.setTransform(-395.6,141.9,1,1,0,0,0,433.2,261.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:273.05,y:142.25},13,cjs.Ease.cubicOut).to({startPosition:0},54).to({_off:true},1).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-797.6,-4.1,1332.5,260.70000000000005);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:487.55,mode:"single"},13,cjs.Ease.cubicOut).to({startPosition:0},52).to({_off:true},1).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,709.9,109.1);


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

	// sb_tt_happy
	this.instance = new lib.sb_tthappy("synched",0);
	this.instance.setTransform(13.05,105.65,1,1,0,0,0,153,65.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:278.5,y:108.05,alpha:1},23,cjs.Ease.backOut).to({startPosition:0},65).to({_off:true},1).wait(1));

	// sb_bg_happy
	this.instance_1 = new lib.sb_bghappy("synched",0);
	this.instance_1.setTransform(268.8,100.6,1,1,0,0,0,268.8,38);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},31).to({startPosition:0},57).to({_off:true},1).wait(1));

	// sb_tt_sentra
	this.instance_2 = new lib.sb_ttsentra("synched",0);
	this.instance_2.setTransform(360.4,29.9,1,1,0,0,0,144.8,15.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({y:39.65,alpha:1},23,cjs.Ease.cubicOut).to({startPosition:0},57).to({_off:true},1).wait(1));

	// sb_bg_sentra
	this.instance_3 = new lib.sb_bgsentra("synched",0);
	this.instance_3.setTransform(561.35,39.1,0.0836,1,0,0,0,223.6,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:223.8,scaleX:1,x:313.65,y:39.15},31,cjs.Ease.cubicOut).to({startPosition:0},57).to({_off:true},1).wait(1));

	// sb_tt_all
	this.instance_4 = new lib.sb_ttall("synched",0);
	this.instance_4.setTransform(360.5,-16.1,1,1,0,0,0,141.6,3.4);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-3.1,alpha:1},31,cjs.Ease.cubicOut).to({startPosition:0},57).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.1,-14.5,714.6,150.3);


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
	this.instance.setTransform(483.15,54.95,0.7062,0.7062,0,0,0,115.9,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89));

	// an_sc4_2888
	this.instance_1 = new lib.an_sc42888("synched",0,false);
	this.instance_1.setTransform(157.55,58.5,0.6911,0.6911,0,0,0,34.8,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(76.5,36.9,479.20000000000005,46.800000000000004);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.478)").ss(1,1,1).p("AUWAAMgorAAA");
	this.shape.setTransform(250.1484,283.6371,0.9662,0.9662);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(35));

	// an_sc3_tech
	this.instance = new lib.an_sc3tech("synched",0,false);
	this.instance.setTransform(281.95,302.4,0.9482,0.9482,0,0,0,119.2,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

	// an_sc3_39
	this.instance_1 = new lib.an_sc3_39("synched",0,false);
	this.instance_1.setTransform(145.6,302.65,0.5436,0.5436,0,0,0,35.1,18.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

	// an_sc3_177
	this.instance_2 = new lib.an_sc3177("synched",0,false);
	this.instance_2.setTransform(312.25,265.95,0.5994,0.5994,0,0,0,99.7,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35));

	// an_sc3_same
	this.instance_3 = new lib.an_sc3same("synched",0,false);
	this.instance_3.setTransform(160.85,264.8,0.9482,0.9482,0,0,0,90.2,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35));

	// an_sc3_rect
	this.instance_4 = new lib.an_sc3rect("synched",0,false);
	this.instance_4.setTransform(131.65,275.05,1.8786,1.8786,180,0,0,173.1,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311.2,162.6,768.0999999999999,225.20000000000002);


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
	this.instance.setTransform(152.55,218.45,0.5098,0.5098,0,0,0,183.2,75.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({startPosition:0},0).wait(68));

	// an_tt_JBL
	this.instance_1 = new lib.an_ttJBL("synched",0,false);
	this.instance_1.setTransform(177.8,231.2,0.9281,0.9281,0,0,0,0,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({_off:true},70).wait(68));

	// an_tt_light
	this.instance_2 = new lib.an_ttlight("synched",0,false);
	this.instance_2.setTransform(340.4,230.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(74).to({_off:false},0).wait(68));

	// an_sc2_pic1
	this.instance_3 = new lib.an_sc2_pic1("synched",0,false);
	this.instance_3.setTransform(39.25,245.55,1.4455,1.4455,0,0,0,354.9,74.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({_off:true},70).wait(68));

	// an_sc2_bg2
	this.instance_4 = new lib.an_sc2bg2("synched",0,false);
	this.instance_4.setTransform(65.2,317.6,0.8837,0.8837,0,0,0,491.8,62.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({_off:true},70).wait(68));

	// an_sc2_pic2
	this.instance_5 = new lib.an_sc2_pic2("synched",0,false);
	this.instance_5.setTransform(567.5,188.85,0.6279,0.6279,0,0,0,568.6,81.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(74).to({_off:false},0).wait(68));

	// an_sc2_bg3
	this.instance_6 = new lib.an_sc2bg3("synched",0,false);
	this.instance_6.setTransform(466.7,263.15,0.5983,0.5983,0,0,0,582.7,69);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(74).to({_off:false},0).wait(68));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-463.4,135.3,1403.4,169.2);


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
	this.instance.setTransform(386,204,0.2087,0.2087);

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

	// an_car1
	this.instance_3 = new lib.an_car1("synched",0,false);
	this.instance_3.setTransform(570.05,232.4,0.1397,0.1397,0,0,0,750.1,266.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:49},77).to({alpha:0},8).to({_off:true},1).wait(145).to({_off:false,regX:750,regY:266,scaleX:0.153,scaleY:0.153,x:628.85,y:234.2,startPosition:0},0).to({alpha:1,startPosition:6},6).to({startPosition:49},79).to({regX:749.2,regY:266.1,scaleX:0.118,scaleY:0.118,x:556.5,y:231.15},8).to({startPosition:49},89).wait(1));

	// title_sub_copy
	this.instance_4 = new lib.titlesub2("synched",0);
	this.instance_4.setTransform(660.5,213.25,0.2175,0.2175,0,0,0,442.3,68.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(324).to({_off:false},0).wait(90));

	// title-sub
	this.instance_5 = new lib.titlesub("synched",0);
	this.instance_5.setTransform(632.85,217.8,0.2055,0.2055,0,0,0,264,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},83).wait(331));

	// title
	this.instance_6 = new lib.title("synched",0,false);
	this.instance_6.setTransform(464.35,231.3,0.2533,0.2533,0,0,0,269.7,87.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:false},0).to({_off:true},76).wait(242).to({_off:false,regX:269.2,regY:86.8,scaleX:0.1908,scaleY:0.1908,x:463.15,y:222.7},0).wait(89));

	// scc3
	this.instance_7 = new lib.scc3("synched",0,false);
	this.instance_7.setTransform(531.55,209.85,0.5,0.5,0,0,0,308.4,251.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(235).to({_off:false},0).to({startPosition:34},83).to({alpha:0},6).to({_off:true},1).wait(89));

	// sb_bg_normal
	this.instance_8 = new lib.sb_bg_normal("synched",0);
	this.instance_8.setTransform(526.05,172.55,0.3306,0.2273,0,0,0,698.4,490.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({startPosition:0},77).to({alpha:0},8).to({_off:true},1).wait(230).to({_off:false,regX:699.4,regY:490.9,scaleX:0.3607,scaleY:0.3444,rotation:15.9151,x:490.9,y:223.6},0).to({alpha:1},9).wait(89));

	// sb_bg_blur
	this.instance_9 = new lib.sb_bg_blur("synched",0);
	this.instance_9.setTransform(527.75,227.6,0.2669,0.2243,0,0,0,697.1,490.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(77).to({_off:false},0).to({startPosition:0},151).to({regX:697.2,scaleX:0.2364,scaleY:0.2364,x:531.6,y:198.95},13).to({startPosition:0},75).to({regX:696.8,regY:489.8,scaleX:0.3732,scaleY:0.3732,x:460.85,y:214.9,alpha:0},9).wait(89));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(170.4,8,701.8000000000001,430.1);


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
	this.instance.setTransform(113.25,24.75,1.07,1.07,0,0,0,492.2,226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(828).to({mode:"single",startPosition:413},0).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("A6jldMA1HAAAIAAK7Mg1HAAAg");
	this.shape.setTransform(160,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A6jFeIAAq7MA1HAAAIAAK7g");
	this.shape_1.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(829));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-70.9,-183.4,590.8,435.1);
// library properties:
lib.properties = {
	id: '66A39164CE1D42F78FD0EAEEBAA0ECC2',
	width: 320,
	height: 50,
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