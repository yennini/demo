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



(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.bg3 = function() {
	this.initialize(img.bg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,630,250);


(lib.car1 = function() {
	this.initialize(img.car1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,504,262);


(lib.wheel = function() {
	this.initialize(img.wheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);// helper functions:

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


(lib.sb_sc3tt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhpCHQASgLAAgVIAAgFQgbAJgdAFQgIgQgOgOQArgGAlgNIAZgKIhjAAIAAghICKAAIgIgRIApgLIgYAAIAAgjIA6AAIAAgsIhDAAIAAgjIBDAAIAAgrIAqAAIAAArIBFAAIAAAjIhFAAIAAAsIA+AAIAAAjIiKAAQAIAPAFANICHAAIAAAhIgnAAIAZASQgZARgfAPQAgATAtAHQgPAOgJAVQg6gNglgfQgfgagSgpIgBAAQgTAPgZANIAAAmIBFgNQgCAQAAARQhkAVgKAGQgIgWgIgJgAA+BTQAagNAXgRIhJAAQAKARAOANgAimgJQATgJAHgOQACgFACgHIgXAAIAAggIBYAAIAAgPIhKAAIAAhGIAkAAIAAAkIAmAAIAAgoIAnAAIAACuIgnAAIAAg1IgaAAQgDARgGALQgMAVgaAMQgIgRgOgJg");
	this.shape.setTransform(388.025,238.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiNCeIAAj7IB8AAIgCgbIg7AAIAAglIBfAAQABAjAFAdIB3AAIAADJQAAASgEAJQgEAKgLAFQgQAHg0AAQgCgWgMgUIAyAAQAIAAAAgHIAAg/QgOAOgJAQQgxgdgYg5IgDgJQgHAUgJARQgXAngoAWQgIgPgLgLIAABqgAhiAnQAygcASg/IhEAAgAAmglQAUAxApAXIAAhXIhCAAIAFAPg");
	this.shape_1.setTransform(302.475,239.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AibCKQAcgtAchCIAgAZQgVA2gdA5gAAMCeQgjAAgOgMQgOgMAAggIAAg5IgVAAIAAgjIAuAAIAAhpIgjAAIAAgfIgYAiQgTgNgqgYIAYgfQArAWASALIAAgCIAjAAIAAghIAmAAIAAAhIBKAAIAAghIApAAIAAAhIAkAAIAAAiIgkAAIAABpIAmAAIAAAjIg+AAIAAAPQAAALAFAAIATAAQAMAAAGgCIADAhQgGACgOAAIgTAAQgZAAgIgKQgIgJAAgZIAAgPIgQAAQgCARgFANQgJAVgUANQgNgPgOgJQARgIAGgPQADgHACgKIgeAAIAAA6QAAALAFAEQAEAEAMAAIBlAAQAfAAAQgDIAFAkQgLADgoAAgAAMAKIBKAAIAAgNIhKAAgAAMgjIBKAAIAAgOIhKAAgAAMhRIBKAAIAAgOIhKAAgAikgiIAXggQAzAZAOAJIgYAiQgRgKgvgag");
	this.shape_2.setTransform(216.65,238.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRClIAAirICjAAIAACEQAAAOgDAHQgDAIgKAEQgMAFgmAAQgDgPgIgSIAfAAQAHAAAAgFIAAgPIhVAAIAAA2gAAWBUIBVAAIAAgRIhVAAgAAWAnIBVAAIAAgRIhVAAgAhzCjIAAhkQgQAogPAXQgDgNgQgfQAOgSAPghQAJgVAHgSIgoAAIAAgnIAtAAIAAgQIgdAHQgBglgPgrIAbgGQAOAlAEAlIAAhfIAlAAIAABZQAKgfAGgnIAhAHQgUBDgGAOIgXgHIAAAQIAiAAIAAAnIgiAAIAAAEIABgBQAHAGARAXIAWAfIgaAhQgIgVgNgYIAAB4gAgjgVIAAgeIBOAAIAAgPIg8AAIAAgdIA8AAIAAgOIhEAAIAAgdIBEAAIAAgaIAnAAIAAAaIBLAAIAAAdIhLAAIAAAOIBEAAIAAAdIhEAAIAAAPIBUAAIAAAeg");
	this.shape_3.setTransform(130.8,238.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(114.2,222.2,290.5,33.20000000000002);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-76.4,0,76.5,0).s().p("Ar8NXIAA6tIX5AAIAAatg");
	this.shape.setTransform(594.5267,262.1677,4.409,6.7276,-147.2924);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-76.4,0,76.5,0).s().p("Ar8NXIAA6tIX5AAIAAatg");
	this.shape_1.setTransform(-390.3438,222.4964,4.4091,5.1947,25.2262);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-76.4,0,76.5,0).s().p("Ar8NXIAA6tIX5AAIAAatg");
	this.shape_2.setTransform(596.6685,235.1031,1.9119,3.648,-179.9748);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-76.4,0,76.5,0).s().p("Ar8NXIAA6tIX5AAIAAatg");
	this.shape_3.setTransform(-379.6185,235.0969,1.9119,3.648,0.0252);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg3
	this.instance = new lib.bg3();
	this.instance.setTransform(-522,0,2.008,2.008);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Eim6AyUMAAAhknMFN0AAAMAAABkng");
	this.shape_4.setTransform(320.1492,235.0859,0.2936,3.2736,-90);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-884.6,-404,2259,1332.4);


(lib.sb_sc2subtitle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AiCCCIgGgcIALgCIAAhuIAWACQAGAAAAAEQAAABgFAEIAABfIAVgEIAAh5IgrAAIAAhhIBkAAIAABGQAWgnALgnIAaAHQAFABAAACQAAAEgIADIgFAOIBkAAQAABtgFAbQgDAbgLAKQgNAMgZgBIgOgbQAcAAAFgFQAFgFADgTQAEgUAAhVIhUAAIgMAYIBRAAIAABcIhFAAIAAA8QAAAKAKAAIBAAAQAJgBAEgEQAEgDAEgWIAZAGQgEAdgJAIQgLAKgPAAIhOAAQgbAAAAgVIAAiNIgIAMIgPgIIgaAAIAAAjIAlAAIAAAXIglAAIAAA5IAlgMIAAAXQgeAMhHAUQgDAFgCAAQgDAAgCgEgAARANIAsAAIAAguIgsAAgAhjg0IAxAAIAAgyIgxAAg");
	this.shape.setTransform(364.15,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA/BoIAbgBQAKAAAAgLIAAh5IhYAAIAAhjIByAAIAADkQABATgVAGQgQAEgQAAgAAmgzIA+AAIAAgRIg+AAgAAmhYIA+AAIAAgSIg+AAgAh9CAIAAkAIBvAAIAABkIhWAAIAACcgAhkgyIA8AAIAAgSIg8AAgAhkhYIA8AAIAAgSIg8AAgAAVB6IAAhAIgkAAQgFAWgIAPQgKAPgPAMIgVgVQAPgGAIgNQAHgLAEgNIgtAAIAAgWIAyAAIABgcIgoAAIAAgWICUAAIAAAWIgdAAIAAAcIAmAAIAAAWIgmAAIAABAgAgMAkIAhAAIAAgcIggAAg");
	this.shape_1.setTransform(321.95,1.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABRCHIAAgKIiLAAIAAAKIgbAAIAAhSIDBAAIAABSgAg6BnICLAAIAAgaIiLAAgAhWAvIAAhhIgVAWIgTgTQAUgSAPgWQAPgUANgbIAXAKQADABAAADQAAAEgGADIgHAKIA1AAQALgOAFgOIAZAGQAFABAAADQAAACgIAEIgHAMIBYAAIAAAWIhWAAIAAASIBLAAIAAAWIhLAAIAAASIBLAAIAAAVIhLAAIAAARIBbAAIAAAXIi6AAIAAAJgAg7APIBEAAIAAgRIhEAAgAg7gXIBEAAIAAgSIhEAAgAg7g/IBEAAIAAgSIhEAAg");
	this.shape_2.setTransform(279.35,1.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABNBbIAJgLIhCAAIANAIQABAAAAABQABABAAAAQAAABABAAQAAAAAAABQAAABAAAAQgBABAAAAQAAAAgBABQgBAAAAAAQgQAQgfATIgVgQQAbgNAWgVIgZAAIAAifIAqAAIAIgbIhBAAIAAgXICaAAIAAAXIg+AAIgIAbIA6AAIAACfIgXAAQAPARAdANIgTAUQgZgSgQgVgAAOA5IBNAAIAAgXIhNAAgAAOAMIBNAAIAAgXIhNAAgAAOghIBNAAIAAgXIhNAAgAiBBlIAWAAQAMAAABgIIAAhqIgqAAIAAgXIA4AAQgSgNgWgMIASgNIARAIIAUgiIhCAAIAAgXIBLAAIAGgBQADAAADACIAMAIQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAADgGAEIggAvIAUAOIgIAGIANAAIAGgBQACAAAEACIAMAIQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAADgGAEIgQArIgUgHIAMghIgYAAIAABuQAAAPgJAHQgIAHggAAg");
	this.shape_3.setTransform(237.825,1.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABIA9QgKgbgFgwIgZAHIAABkIAsgJIAAAZIhFANQgFAKgCgBQgCABgBgFIgLgZIAVgEIAAiIIAOAHQATgCAWgHQAXgHAVgOIATAUQADADAAAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgIgCQgFAAgHADIgbAKQADAgAGATQAOgMAOgPIASASQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAACgIAAQgOAMgSANQAMAeAcAeIgTAVQgegjgOglgAiGBxQAWggAHgoQAHgkAAhAIgbAAIAAgYIApAAIAAgxIAXACQAHACAAACQAAACgFADIAAAmIAtAAIAAAVQALgMAEgMQAHgNAIggIAaAEQAEACAAADQAAADgIAEIgIAYIBlAAIAAAYIhwAAQgJASgRASIgTgRIAKgLIg6AAIgBAmIA3AAQAABagFAXQgDAWgJAJQgKAIgZAAIgLgZQAXAAAFgFQAEgEACgPQADgNABhCIggAAQgCAhgDAUQgLAvgXAeg");
	this.shape_4.setTransform(172.65,1.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUCGIAAiBQgJASgGALQgQAdgdAeIgagWQAdgZAXgfQAOgUAQglIhCAAIAAgaIBGAAIAAhBIAYACQAHACAAACQAAACgEAFIAAA0IBNAAIAAAaIhHAAQAMAeAOAUQAVAhAmAaIgZAYQgigdgTgiQgIgOgFgOIAACGgAhgCGIAAiPIgWAdIgTgTQAZggAPgeQAQgfAPgpIAYALQADACAAADQABADgIADQgNAigLAUIAAC/g");
	this.shape_5.setTransform(130.65,1.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AALCDQgdAAAAgXIAAgQIg9AAIAAANIgaAAIAAhpIDHAAIAABcIhWAAIAAADQAAAPAIAAIBHAAQAIgBAEgDQAEgDAEgQIAbAIQgFAWgKAGQgKAIgQAAgAAIBIIA9AAIAAgRIg9AAgAhPBIIA9AAIAAgRIg9AAgAAIAkIA9AAIAAgQIg9AAgAhPAkIA9AAIAAgQIg9AAgAgQgGIAAhDIhbAAIAAArIgaAAIAAg/IB1AAIAAgQIhgAAIAAgUIDZAAIAAAUIhhAAIAAAQIB0AAIAAA9IgaAAIAAgpIhaAAIAABDgAAZgNIAAgSIA8AAIAAASgAhbgNIAAgSIA8AAIAAASgAAZgsIAAgSIA8AAIAAASgAhbgsIAAgSIA8AAIAAASg");
	this.shape_6.setTransform(89.05,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhVCGIAAh1IgjAFQgDAEgDAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBIgFgXIAWgBIAbgnQgggYgPgJIAOgSIAKAFIAdgvIATAKQAFADAAACQAAACgFAEIgeAnIATANIAWgfIATANQACABAAAEQAAACgFABIgyBBQATgCARgDIgIgTIAXgFQAPAfAGAcIgYAEIgFgUIgVAEIAAB5gABQCBQgRAAgJgLQgIgJAAgUIAAghIgbAAIAAAWIgZAAIAAh8IAXACQAHACAAADQAAACgFADIAABDIAbAAIAAhrIg8AAIAAgZIA8AAIAAgiIAdAFQAFABAAADQAAADgFAEQgEADAAAHIAAAIIA7AAIAAAZIg7AAIAABrIAaAAIAAhPIAXACQAHACAAADQAAACgFADIAABaIgzAAIAAAaQAAANAEAFQADAGANAAIADAAQAIgBAEgDQAFgEACgRIAYAKQgFAZgHAHQgGAGgIAAgAiIBwQAFgMAFgSQAGgTADgaIAWAHQABgBABABQAAAAABAAQAAABABAAQAAABAAAAQAAAEgFADQgGAkgLAegAg5AqIAYgFQANAjAGAhIgXAEQgIgmgMgdg");
	this.shape_7.setTransform(46.375,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32.7,-12.3,345.2,27.4);


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

	// bg2
	this.instance = new lib.bg2();
	this.instance.setTransform(-672,0,2.0096,2.0096);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-672,0,1949.3,502.4);


(lib.sb_btnt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAOBgQgaAAgQgEQgSgFgJgKQgFgFgDgFIgTAWQAAABAAABQgBAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBIgLgPQAPgKANgMIAAgqIgPAAIAAgQIAkAAIAAA8QAGANANAEQAQAGAdAAQAwAAAmgDIgGAVgAAuAzIAQAAQAHAAAAgIIAAgkIghAAIAAATIALgCIgEgLIAOgEQAGAQAFASIgPADIgCgIIg0AKQgCADgCAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAgBAAAAIgEgRIAdgDIAAgVIghAAIAAA7IgTAAIAAhKIA0AAIAAgNIgqAAIAAhIIBmAAIAABIIgqAAIAAANIA0AAIAAA5QAAAOgNAEQgLADgKAAgAAkgkIAZAAIAAgNIgZAAgAgHgkIAZAAIAAgNIgZAAgAAkg/IAZAAIAAgPIgZAAgAgHg/IAZAAIAAgPIgZAAgAhigrIAOgNQAUAJAPAKIgMANQgSgLgTgIgAhYhSIAOgNQAVAKAMAKIgNANQgPgLgTgJg");
	this.shape.setTransform(175.175,11.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhBBgIAAh+IgfAAIAAgRIBNAAIAAARIgcAAIAAB+gAgYBcIAAgQIAeAAIgEgNIgOAAIAAguIBjAAIAAAuIgTAAIgEANIAiAAIAAAQgAAYBMIAWAAIAEgNIgeAAgAAFAuIBAAAIAAgNIhAAAgAhhBGIAEgaIADg7IAQABQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBABQAAAggCAXIgDAagAgoADIAAgTIAPAAIABATQAAAcAGAgIgQABQgGggAAgdgAgRAKIAAgPIBwAAIAAAPgAgMgMIAAhDIAdAAIAAgQIAPABQABAAABAAQABABABAAQAAAAAAAAQABABAAAAQAAACgEACIAAAJIANAAIAAgPIAPABQABAAABAAQABABAAAAQABAAAAABQAAAAAAAAIgDAEIAAAIIAeAAIAABDgAA+gcIANAAIAAgLIgNAAgAAhgcIANAAIAAgLIgNAAgAAFgcIAMAAIAAgLIgMAAgAA+g1IANAAIAAgKIgNAAgAAhg1IANAAIAAgKIgNAAgAAFg1IAMAAIAAgKIgMAAgAhahCIAAgRIBBAAIAAARg");
	this.shape_1.setTransform(142.775,11.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBPIAUAAQAKAAABgJIAAgJIhZAAIAAgRIBZAAIAAgQIAKACIASgLIhjAAIAAgRIB7AAIAEgBIAFABIAJAHIACACQAAACgEADIgzAYIAAAEIBPAAIAAARIhPAAIAAAMQAAAMgIAGQgGAGgaABgAhBgGIAAgvICEAAIAAAvgAgtgVIBdAAIAAgRIhdAAgAhcg+IAAgRIBTAAIAAgSIASACQAFABAAACQAAACgEADIAAAIIBTAAIAAARg");
	this.shape_2.setTransform(110.475,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVBcIAAizIBIAAIAAB/QAAAOgNAFQgMADgKAAIgHgTIAQgBQAHgBAAgHIAAhnIgiAAIAAChgAhYBRIgEgWIAOgCIAAiUIBVAAIAABgIhCAAIAAAxQAYgFATgFIgJgRIANgLQAOATAPAgIgRAMIgIgTQgXAHgxANQgDAEgCAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBgAg7gLIAvAAIAAgYIgvAAgAg7g0IAvAAIAAgWIgvAAg");
	this.shape_3.setTransform(77.8,12.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(68.5,1.8,116.69999999999999,19.5);


(lib.sb_btnbg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#6C5742").s().p("AuxDFIAAmJIdjAAIAAGJg");
	this.shape.setTransform(154.5995,21.1145,0.9995,0.9995);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(60.1,1.4,189.1,39.5);


(lib.sb_wheel = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.wheel();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


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

	// bg1
	this.instance = new lib.bg1();
	this.instance.setTransform(-666,0,1.9979,1.9979);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-666,0,1938,499.5);


(lib.mo_sc1subtitle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABIA9QgLgegDgtIgaAHIAABlIAsgKIAAAYIhGAPQgDAJgDAAQgDgBgBgEIgJgZIATgEIAAiIIAQAIQARgDAWgHQAYgHAVgOIATAUQADAEAAACQAAABAAABQAAAAgBAAQAAABAAAAQAAAAgBAAIgIgCQgFAAgHADIgcAKQAEAhAFATQASgRAKgLIASASQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAACgJAAQgJAJgWAQQANAfAbAdIgUAVQgegjgNglgAiGBxQAVgfAIgoQAGgfABhGIgbAAIAAgYIApAAIAAgxIAXACQAGABAAADQAAADgDADIAAAlIAtAAIAAAVQAKgMAFgNQAHgOAGgdIAaADQAFACgBADQAAAEgHACIgIAZIBlAAIAAAYIhvAAQgLATgQARIgUgRIAKgLIg5AAIgBAnIA3AAQgBBZgEAWQgDAYgKAIQgKAJgYAAIgLgaQAXAAAEgFQAFgEACgPQAEgQAAg/IgfAAQgDAjgEASQgJAvgYAeg");
	this.shape.setTransform(196.7043,10.6717,0.8024,0.8024);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATCGIAAiBQgGAPgIAOQgRAdgdAfIgZgYQAdgYAXgfQANgRARgoIhCAAIAAgaIBFAAIAAhBIAZACQAHABAAADQAAADgFAEIAAA0IBOAAIAAAaIhHAAQAOAfAMATQAUAfAnAcIgZAYQgigdgTgjQgIgNgGgOIAACGgAhhCGIAAiQIgVAfIgTgVQAZggAPgdQARgfAOgpIAXAMQAFABAAACQAAAFgIACQgNAigLAVIAAC+g");
	this.shape_1.setTransform(134.8807,10.7519,0.8024,0.8024);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAJBpQgXAAAAgSIAAgNIgxAAIAAAKIgVAAIAAhUICfAAIAABKIhFAAIAAACQAAAMAHAAIA5AAQAGAAAEgDQADgCADgNIAVAHQgDAQgJAGQgIAGgMAAgAAGA6IAxAAIAAgOIgxAAgAg/A6IAxAAIAAgOIgxAAgAAGAdIAxAAIAAgNIgxAAgAg/AdIAxAAIAAgNIgxAAgAgNgFIAAg1IhJAAIAAAiIgUAAIAAgzIBdAAIAAgMIhNAAIAAgRICuAAIAAARIhOAAIAAAMIBeAAIAAAxIgVAAIAAggIhJAAIAAA1gAAUgLIAAgOIAwAAIAAAOgAhJgLIAAgOIAwAAIAAAOgAAUgjIAAgOIAwAAIAAAOgAhJgjIAAgOIAwAAIAAAOg");
	this.shape_2.setTransform(73.375,11.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhVCGIAAh1IgjAFQgDAEgDABQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBIgFgXIAWgBIAbgoQgggWgPgKIAOgSIAKAFIAdgvIATAKQAFADAAACQAAACgFADIgeAoIATANIAWgeIATAMQACACAAADQAAACgFABIgyBBQATgBARgDIgIgUIAXgFQAPAeAGAdIgYAEIgFgTIgVADIAAB5gABQCBQgRAAgJgLQgIgJAAgTIAAgiIgbAAIAAAVIgZAAIAAh6IAXACQAHABAAACQAAACgFAEIAABCIAbAAIAAhqIg8AAIAAgYIA8AAIAAgjIAdAEQAFACAAADQAAADgFAFQgEACAAAHIAAAJIA7AAIAAAYIg7AAIAABqIAaAAIAAhNIAXACQAHABAAACQAAADgFADIAABaIgzAAIAAAbQAAAMAEAFQADAFANABIADAAQAIAAAEgEQAFgEACgQIAYAKQgFAZgHAFQgGAHgIAAgAiIBvQAFgMAFgQQAGgUADgZIAWAGQABAAABAAQAAAAABAAQAAABABAAQAAABAAABQAAACgFAFQgGAjgLAegAg5AqIAYgEQANAiAGAgIgXAFQgIgmgMgdg");
	this.shape_3.setTransform(11.0127,10.7118,0.8024,0.8024);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc1subtitle, new cjs.Rectangle(0,0,207.6,21.5), null);


(lib.mo_ariya = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AR/DWIgvhNIlPAAIgvBNIhfAAIEMmrIBaAAIDcFaIAOASQAPAVAKAFQATANA0gBIAEAZgAQnBCIh8jQIh+DQID6AAgAFtDWIAAiZIkLkSIBwAAIDEDLIDMjLIBtAAIkLESIAACZgAhEDWIAAmrIBTAAIAAGrgAlEDWIiUinIhhAAIgthHIAAAAIC3AAIAxgBQAagCAMgJQANgJAEgUQAGgUgHgTQgIgYgbgHQgQgDgvAAIkGAAIgthLIEbAAQBEAAATABQArAEAZAOQAoAYAMA9QAMA9geAsQgRAagbAMQgXALgpADICWCmgArcDWIguhNIlPAAIgwBNIidAAIAFgaQAcAAAOgCQAVgCAMgIQANgLAVggIDXlaIBdAAIEOGrgAs0BCIh7jQIh9DQID4AAg");
	this.shape.setTransform(131.9,21.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_ariya, new cjs.Rectangle(0,0,263.8,42.9), null);


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


(lib.mo_ccc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_25
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0.365,0.494,0.6],0,0,0,0,0,93).s().p("AqLKMQkOkOAAl+QAAl9EOkOQEOkOF9AAQF+AAEOEOQEOEOAAF9QAAF+kOEOQkOEOl+AAQl9AAkOkOg");
	this.shape.setTransform(92.2,92.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,184.4,184.4);


(lib.an_sc3tt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_tt
	this.instance = new lib.sb_sc3tt("synched",0);
	this.instance.setTransform(269.6,21.8,1,1,0,0,0,261.6,13.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},8).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(122.2,230.2,290.5,33.19999999999999);


(lib.an_sc2subtitle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_subtitle
	this.instance = new lib.sb_sc2subtitle("synched",0);
	this.instance.setTransform(206.9,10.8,1,1,0,0,0,206.9,10.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},13).wait(37));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32.7,-12.3,345.2,27.4);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-76.4,0,76.5,0).s().p("Ar8NXIAA6tIX5AAIAAatg");
	this.shape.setTransform(81.1719,427.7094,4.409,15.3856,-71.6859);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-76.4,0,76.5,0).s().p("Ar8NXIAA6tIX5AAIAAatg");
	this.shape_1.setTransform(-670.2438,118.0455,4.4091,5.1946,25.2263);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(91));

	// sb_sc2_bg
	this.instance = new lib.sb_sc2bg("synched",0);
	this.instance.setTransform(308.35,256.95,1.0278,1.0278,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:299.9,scaleX:1.009,scaleY:1.009,x:308.2},26).wait(65));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1273.6,-427.4,2709.6,1588.6);


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

	// sb_btn_t
	this.instance = new lib.sb_btnt("synched",0);
	this.instance.setTransform(94.65,19.6,1.2098,1.2098,0,0,0,66.3,10);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:66.2,scaleX:1,scaleY:1,x:94.5,y:19.55,alpha:1},6).wait(39));

	// sb_btn_bg
	this.instance_1 = new lib.sb_btnbg("synched",0);
	this.instance_1.setTransform(94.45,19.7,1.3203,1.3203,0,0,0,94.5,19.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:94.6,scaleX:1,scaleY:1,x:94.6,alpha:1},6).wait(39));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(49,-4.4,249.60000000000002,52);


(lib.sb_sc1subtitle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mo_sc1_subtitle
	this.instance = new lib.mo_sc1subtitle();
	this.instance.setTransform(165.6,10.8,1,1,0,0,0,103.8,10.8);
	this.instance.shadow = new cjs.Shadow("rgba(50,50,51,0.749)",0,0,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40.8,-21,254,67);


(lib.sb_ariya = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mo_ariya
	this.instance = new lib.mo_ariya();
	this.instance.setTransform(131.9,21.4,1,1,0,0,0,131.9,21.4);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.31)",1,0,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-13,293,72);


(lib.an_wheel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_wheel
	this.instance = new lib.sb_wheel("synched",0);
	this.instance.setTransform(70.7,70.6,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-90},11).to({rotation:-180},14).to({rotation:-270},12).to({regX:50.1,regY:50.1,rotation:-359.9991,y:70.65},13).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,141.4,141.4);


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

	// sb_sc1_subtitle
	this.instance = new lib.sb_sc1subtitle("synched",0);
	this.instance.setTransform(168.3,10.8,1,1,0,0,0,168.3,10.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},15).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40.8,-21,254,67);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2079D3","rgba(162,182,225,0)"],[0,1],-76.4,0,76.5,0).s().p("Ar8NXIAA6tIX5AAIAAatg");
	this.shape.setTransform(-80.7271,65.4446,2.4212,17.2386,86.7565);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2C3034","rgba(78,97,138,0)"],[0,1],-76.4,0,76.5,0).s().p("Ar8NXIAA6tIX5AAIAAatg");
	this.shape_1.setTransform(298.233,476.5418,1.912,12.2561,-88.0238);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(86));

	// sb_sc1_bg
	this.instance = new lib.sb_sc1bg("synched",0);
	this.instance.setTransform(308.15,256.7,1.0455,1.0455,0,0,0,299.8,249.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:299.9,regY:250,scaleX:1.0042,scaleY:1.0042,y:256.8,startPosition:46},69).wait(17));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1562.7,-202.8,2964,861.5999999999999);


(lib.an_ariya = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_ariya
	this.instance = new lib.sb_ariya("synched",0);
	this.instance.setTransform(131.9,21.4,1,1,0,0,0,131.9,21.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:29.4,alpha:1},23,cjs.Ease.cubicOut).wait(22));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-13,293,81);


(lib.sb_ccc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mo_ccc
	this.instance = new lib.mo_ccc();
	this.instance.setTransform(92.2,92.2,1,1,0,0,0,92.2,92.2);
	this.instance.compositeOperation = "overlay";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,184.4,184.4);


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

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhiYAraIgPhpQhnAFiagHIkBgNQiugGk/APQlWAQiYgDQhzgBhLgOQhngVhFgyQhahBgihzQghhyAnhpQAdhNBBg/QA7g7BRgoQBEgjBbgYQBBgRBmgSQgpgagggkIgLACIgcADIgXAFIgcADIgbAFIgZADIgbAFIgYADIgXAEIgUAEIgYAEIgTAEIgYAEIgcAEIgXAEIgcAEIgcADIgXAEIgbAFIgZADIgbAFIgsADIguAFIgsAEIgsADIg6AEIhMAEIhuAEIg7AAIg7gEIgbgEIgYgEIgUgDIgbgJIgkgLIgcgMIgXgMIgYgMIgQgLIgQgNIgPgLIgQgMIgMgMIgMgMIgLgLIgNgNIgHgLIgMgMIgIgMIgIgMIgHgLIgIgNIgIgMIgFgLIgHgMIgEgMIgEgLIgIAAIgMALIgHAMIgNAMIgLALIgQAMIgQANIgPALIgRAMIgTAMIgUAMIgYALIgfANIgXAHIgMAEIgQAEIgUAEIgYAEIg7AEIg7gEIgYgEIgUgEIgbgIIgkgMIgbgLIgYgNIgXgLIgQgMIgQgMIgQgMIgPgLIgMgMIgMgMIgMgMIgMgLIgHgNIgIgMIgMgLIgIgMIgIgMIgIgMIgEgMIgIgMIgEgLIgIgMIgDgMIgFgMIgDgMIgFgMIgDgLIAAgMIgEgMIgEgMIAAgLIgEgMIAAgMIAAgMIAAgLIAAgNIgEgMIAAgLIAAgMIAAgMIAAgLIAAgNIAAgMIAEgLIAAgMIAAgMIAAgLIAAgNIAEgMIAAgLIAEgMIAAgMIAAgLIAEgMIAAgMIADgMIAAgMIAFgMIAAgMIADgLIAAgMIAFgMIAAgMIAAgMIAAgMIAAgLIAAgMIAAgMIAAgMIAAgMIAAgMIAAgLIAAgMIAAgMIAAgMIAAgLIAAgNIAAgLIAAgMIAAgMIAAgMIAAgLIAAgNIAAgLIAAgMIAAgMIAAgMIAAgLIAAgNIAAgLIAAgMIAAgMIAAgMIAAgLIAAgMIADgMIAAgMIAAgMIAAgMIAAgMIAAgLIAFgMIAAgMIAAgLIADgMIAAgNIAAgLIAAgMIAEgMIAAgMIAAgLIAAgNIAAgLIAAgMIAAgMIAAgMIAAgLIAAgNIAAgLIgEgMIgIgMIgIgMIgLgLIgIgMIgIgMIgIgMIgIgLIgHgNIgFgMIgIgLIgDgMIgFgMIgDgLIgFgNIgDgMIgEgLIgEgMIgEgMIAAgLIgEgNIAAgMIgEgLIAAgMIAAgMIAAgLIAAgMIgEgNIAAgLIAEgMIAAgLIAAgMIAAgLIAAgMIAEgMIAAgMIAEgMIAAgMIAEgLIAEgMIAEgMIADgMIAFgMIADgMIAFgMIADgLIAIgMIAFgMIAHgLIAIgNIAIgMIAIgLIAIgMIALgMIAIgMIAAgMIAAgLIAAgMIAAgMIgDgMIAAgMIAAgMIAAgLIAAgMIAAgMIAAgMIAAgMIAAgLIAAgMIAAgMIAAgMIAAgLIAAgNIAAgMIAAgLIAAgMIAAgMIAAgLIAAgNIAAgLIAAgMIAAgMIAAgMIAAgLIAAgNIAAgLIAAgMIAAgMIAAgMIAAgLIAAgMIAAgMIAAgMIAAgMIAAgMIAAgMIAAgLIAAgMIAAgMIAAgMIAAgMIAAgMIAAgLIAAgMIAAgMIAAgLIAAgNIAAgMIAAgLIAAgMIADgMIAAgLIAAgMIAAgNIAAgLIAFgMIAAgMIADgMIAAgLIAEgNIAEgLIAEgMIAAgMIAEgHIAEgFIgQAAIg7AFIg7gFIgXgDIgVgFIgbgIIgkgLIgbgMIgXgMIgUgMIgQgLIgUgNIgPgLIgMgMIgQgMIgMgMIgMgMIgIgLIgMgMIgIgMIgIgMIgHgMIgIgMIgIgLIgEgMIgIgMIgEgMIgIgMIgDgMIgFgLIgDgMIgFgMIgDgMIgFgMIgDgMIAAgLIgEgMIAAgMIgEgMIAAgLIAAgNIAAgLIAAgMIgEgMIAEgMIAAgMIAAgMIAAgLIAAgMIAEgLIAAgNIAEgMIADgLIAAgMIAFgMIADgLIAFgNIADgMIAFgLIAHgMIAEgMIAIgLIAEgMIAIgNIAIgLIAIgMIAIgMIAIgMIAHgLIAMgNIAIgLIAMgMIALgMIARgMIAQgLIAPgMIAQgMIATgMIAUgMIAYgMIAggLIAXgIIAMgEIAPgEIAVgEIAXgEIAggEIATgIIAMgLIAMgNIAMgMIALgLIAQgMIAMgMIAQgLIATgNIAUgMIAYgLIAYgMIAjgMIAYgIIAQgDIATgFIAYgEIAfgEIAkgEIAYgDIAXgEIAYgEIAbgEIAcgEIAYgEIA7gEIAzgEIAQgEIAQgEIAUgEIAXgDIAXgFIAZgDIAvgFIAvgEIAYgDIAXgFIA7gDICagEIAsgEIAfgEIAfgEIAcgEIAcgEIAggDIAjgFIAngDIAngFIAkgEIAjgDIAggFIAfgDIAkgFIAjgDIAogFIAjgDIAUgEIAYgEIAjgEIAUgEIAQgEIATgEIAYgEIAcgEIAYgEIArgDIArgFIAYgDIAYgFIAXgDIAYgFIAXgDIAYgEIA7gEIBygEIAsgEIAggEIAfgEIAbgEIAcgEIAggEIA7gEIAbgEIANgDIAPgFIAQgDIAPgFIAUgDIAYgFIAfgDIAkgFIAggEIAbgDIAQgEIAPgEIAVgEIAXgEIA7gEIAngEIAcgIIAbgIIAcgIIAcgHIAUgEIAXgEIA8gEIAXgEIAUgEIAXgEIAsgEIAQgEIATgDIAYgFIA7gDIBPgFIATgDIAZgFIA6gEICWgDIAUgFIAYgDIA6gEIA4gEIAUgEIAXgEIA8AAIAAgEIFqAAIA7AEIAYAEIAUAEIAbAIIAAAAIFvgSQBggFAxAAQBQABA/ALIAzAIQAdAFAWgCQAXgCAggNIA3gUQB3gpB8AxQBXAhA5A+QgcAdgRAgQgRAdgLAjQgtBAgRAxQgSAwgGBCQgDAoAABQQABBlADAyQAGBVARBCQAjCKB0CmQAqA9AjAcQAkAdAtAMQAtAcA1AVQB4AyChALQAnAHAnADQA5AGA6gCQBpAOBTgDQB+gEBfgqQCKgaB8g/QBqg1A4hEIAXgIQAUgUAdgbIAUgTQBIhwAmg7QBFhyAyhfQAhhBARgXQAegvAkgZQAvgfA+AAQAfACAbAHIAMgCQBMgNB5AFQCDAGCuARIEvAfQGnAtHrAiIR4gOIgCgNIgPg2QhVlYhmk5IgOgvQArADBJACIYwA2QGEAODCAQIApADIBpAAIB+AAMAvnAAAIBPADIBIAFIB5ADIHiAFIBWADIBTAFIA7ADIAoAEIAnAEIAnAEIA/AEIA8AEIAvAEIBWADIC6AEIEfAEIBXAEIBfAEIC5AEIEoAFIA7ADIA3AFIBTADIHlAEIA7AEIAzAEIAvAEIAoAEIAkAEIAbAEIAXAEIAcADIAYAEIATAFIAcAIIAkALIAgAMIAXAMIATAMIAVALIAPANIAQALIAPAMIARAMIALAMIAMALIAIANIAMALIAHAMIAIAMIAIAMIAIALIAJAMIAHAMIAEAMIAIAMIAEAMIAIAMIAEALIADAMIAFAMIADAMIAEALIAAANIAEALIAEAMIAAAMIAEALIAAAMIAAANIAAALIAAAMIAAAMIAAALIAAAMIAAANIAAALIgEAMIAAAMIgEAMIAAALIgEAMIgEAMIgDAMIgFAMIgDAMIgEALIgEAMIgIAMIgEAMIgIALIgEANIgIALIgHAMIgIAMIgJAMIgHALIgMANIgIAMIgMALIgEAIIAnAEIAcAEICiAEIA7AEIAYAEIAUAEIAbAHIAkANIAbALIAYAMIAUAMIAPALIAUAMIAPANIANALIAQAMIALAMIAMALIAIAMIALANIAIALIAIAMIAJAMIAHALIAIAMIAEAMIAIAMIAEAMIAHAMIAFAMIADALIAEAMIAEAMIAEAMIAEALIAEANIAAALIAFAMIAAAMIADAMIAAALIAAANIAAALIAAAMIAEAMIgEAMIAAALIAAAMIAAANIAAALIgDAMIAAAMIgFAMIgEALIAAANIgEALIgEAMIgEALIgEANIgDALIgIAMIgEAMIgIAMIgEALIgIANIgIALIgIAMIgHAMIgIAMIgJALIgLANIgIAMIgMALIgMAMIgQAMIgLALIgQAMIgUANIgQALIgTAMIgYAMIgcALIgjAMIgcAIIgTAEIgYAEIgrAIIADAMIAFAMIADALIAFAMIADAMIAEAMIAEAMIAEAMIAEAMIAEALIAAAMIAEAMIAEAMIAAALIAEANIAAALIAAAMIAAAMIAAAMIAEALIgEANIAAALIAAAMIAAAMIAAALIgEAMIAAANIgEALIgEAMIAAAMIgEAMIgEALIgEAMIgEAMIgEAMIgDAMIgFALIgDAMIgFAMIgDAMIAQAMIALAMIAQALIAMAMIAMAMIAMAMIAHAMIAIALIAMAMIAIANIAIALIAIAMIAEAMIAHALIAFAMIAIAMIADAMIAFAMIADAMIAFAMIADALIAEAMIAEAMIAEAMIAAAMIAEAMIAAALIAEAMIAAALIAAAMIAAALIAAANIAAAMIAAALIAAAMIAAAMIAAALIgEAMIAAANIgEALIAAAMIgEAMIgEALIgEAMIgDANIgFALIgDAMIgFAMIgIALIgDAMIgJANIgDALIgIAMIgIAMIgIAMIgIALIgIAMIgMAMIgIAMIgLALIgMANIgQALIgMAMIAQAMIAQAMIAMALIAPANIAMALIAMAMIAIAMIAMAMIAIALIAHANIAIAMIAIALIAIAMIAFAMIAHALIAEAMIAIAMIAEAMIAEAMIAEAMIAEAMIADALIAEAMIAFAMIAAAMIADALIAAANIAFALIAAAMIAAAMIAAAMIAAALIADANIgDALIAAAMIAAAMIAAAMIAAALIgFANIAAALIgDAMIAAAMIgFAMIgEALIgDAMIgEAMIgEAMIgEAMIgEAMIgIALIgEAMIgHAMIgFAMIgIAMIgIAMIgIALIgHAMIgIAMIgMAMIgIAMIgMAMIgMAMIgPALIgMAMIgQAMIgUALIgLAMIgUANIgQALIgUAMIgPAMIgUALIgYAMIgYANIgXALIgUAMIgUAMIgPALIgUAMIgUANIgXALIgUAMIgXAMIgZAMIgbALIggAMIgfAMIgkAMIgjALIgkAMIgXAIIgcAIIgbAIIgMAEIgQAEIgQAEIgPAEIgQAEIgQAEIgPAEIgRAEIgPADIgQAFIgPADIgNAEIgQAEIgLAEIgQAEIgPAEIgNAEIgQAEIgLAEIgQAEIgPAEIgUAEIgQAEIgUAEIgTAEIgNAEIgPADIgMAFIgQADIgPAEIgUAFIgYADIgYAFIgTADIgQAEIgUAEIgQAEIgTAEIgYAEIgYAEIgXAEIgYAEIgcADIgXAFIgbAEIgcADIggAFIgcADIgfAFIggADIgfAEIgwAEIgyAEIgkAEIggAEIgjAEIgwAEIgzAEIg6AEIhnAEIhfAEIiCADIjRAFIheADIhrAEIjZADQhwABhxgBIjogDIh2gEIh2gDImrgFIjkgEIh+gEIh7gDIkPgCQASAVAQAXQBHBngEBuQgDBphJBjQg+BVhnBFQiVBkjUA8QiTApj1AmQtJB/xdAnQknAL6JAXQiMAChGgHQhzgKhWgjIhFggQgpgVgegHQgvgOg8ABQgmAAhJAHQt2BeuGAVQknAGqxABgEhwxAEMIAjgMIAYgIIAMgEIAbgIIAYgIIAcgHIAkgMIAjgMIAjgMIAcgMIAfgMIAggLIAcgMIAfgMIAbgMIAggMIAcgLIAQgMIADgMIAAgLIAAgMIAAgNIAAgLIAAgMIAAgLIAAgMIAAgLIAAgNIAAgLIAAgMIAAgMIAAgMIAFgLIAAgNIAAgLIAAgMIAAgMIADgMIAAgLIAEgMIgEgEIgIAEIAIgEIAEAEIgEAMIAAALIgDAMIAAAMIAAAMIAAALIAAANIgFALIAAAMIAAAMIAAAMIAAALIAAANIAAALIAAAMIAAALIAAAMIAAALIAAANIAAAMIAAALIgDAMIgQAMIgcALIggAMIgbAMIgfAMIgcAMIggALIgfAMIgcAMIgjAMIgjAMIgkAMIgcAHIgYAIIgbAIIgMAEIgYAIIgjAMIgUAAIAAgMIAEgMIAIgMIAIgLIAIgMIAEgMIAHgMIAIgMIANgMIAPgLIAMgMIAQgMIAPgMIARgMIALgLIAQgMIALgMIAQgLIAMgMIAQgNIAQgLIALgMIAUgLIAQgMIAUgLIAPgNIARgLIATgMIAQgMIAUgMIAQgLIATgNIAUgLIATgMIAQgMIAUgMIAQgLIATgMIgTAMIgQALIgUAMIgQAMIgTAMIgUALIgTANIgQALIgUAMIgQAMIgTAMIgRALIgPANIgUALIgQAMIgUALIgLAMIgQALIgQANIgMAMIgQALIgLAMIgQAMIgLALIgRAMIgPAMIgQAMIgMAMIgPALIgNAMIgIAMIgHAMIgEAMIgIAMIgIALIgIAMIgEAMIAAAMIAUAAIAAAAgEAtxgp/QArgFAjgOQAZAIAXALIh+AAg");
	mask.setTransform(1422.6,2306);

	// sb_ccc_copy
	this.instance = new lib.sb_ccc("synched",19);
	this.instance.setTransform(1463.25,2250.4,3.4511,5.1963,16.9606,0,0,92.2,92);
	this.instance.alpha = 0;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).wait(1).to({regY:92.2,scaleX:3.5475,scaleY:5.3413,rotation:16.9608,x:1508,y:2255.45,alpha:0.0699,startPosition:20},0).wait(1).to({scaleX:3.6378,scaleY:5.4773,rotation:16.9609,x:1550.2,y:2259.35,alpha:0.1355,startPosition:21},0).wait(1).to({scaleX:3.7224,scaleY:5.6047,rotation:16.9611,x:1589.75,y:2262.85,alpha:0.1969,startPosition:22},0).wait(1).to({scaleX:3.8017,scaleY:5.724,rotation:16.9613,x:1626.9,y:2266.25,alpha:0.2545,startPosition:23},0).wait(1).to({scaleX:3.876,scaleY:5.836,rotation:16.9614,x:1661.65,y:2269.4,alpha:0.3084,startPosition:24},0).wait(1).to({scaleX:3.9456,scaleY:5.9407,rotation:16.9615,x:1694.15,y:2272.35,alpha:0.359,startPosition:25},0).wait(1).to({scaleX:4.0108,scaleY:6.0388,rotation:16.9617,x:1724.65,y:2275.1,alpha:0.4063,startPosition:26},0).wait(1).to({scaleX:4.0718,scaleY:6.1307,rotation:16.9618,x:1753.25,y:2277.7,alpha:0.4506,startPosition:27},0).wait(1).to({scaleX:4.1289,scaleY:6.2167,rotation:16.9619,x:1779.95,y:2280.15,alpha:0.492,startPosition:28},0).wait(1).to({scaleX:4.1824,scaleY:6.2971,rotation:16.962,x:1804.95,y:2282.45,alpha:0.5309,startPosition:29},0).wait(1).to({scaleX:4.2324,scaleY:6.3724,rotation:16.9621,x:1828.35,y:2284.5,alpha:0.5672,startPosition:30},0).wait(1).to({scaleX:4.2791,scaleY:6.4428,rotation:16.9622,x:1850.15,y:2286.5,alpha:0.6011,startPosition:31},0).wait(1).to({regY:92,scaleX:4.3228,scaleY:6.5084,rotation:16.9623,x:1871,y:2287.1,alpha:0.6328,startPosition:32},0).wait(1).to({regY:92.2,scaleX:4.3636,scaleY:6.57,rotation:16.9622,x:1889.7,y:2290.05,alpha:0.6289,startPosition:33},0).wait(1).to({scaleX:4.4017,scaleY:6.6274,rotation:16.9621,x:1907.55,y:2291.65,alpha:0.6253,startPosition:34},0).wait(1).to({scaleX:4.4372,scaleY:6.6809,x:1924.15,y:2293.1,alpha:0.6219,startPosition:35},0).wait(1).to({scaleX:4.4703,scaleY:6.7307,rotation:16.962,x:1939.65,y:2294.5,alpha:0.6188,startPosition:36},0).wait(1).to({scaleX:4.5011,scaleY:6.7771,x:1954,y:2295.75,alpha:0.6158,startPosition:37},0).wait(1).to({scaleX:4.5297,scaleY:6.8201,rotation:16.9619,x:1967.4,y:2297,alpha:0.6131,startPosition:38},0).wait(1).to({scaleX:4.5562,scaleY:6.8601,x:1979.8,y:2298.05,alpha:0.6106,startPosition:39},0).wait(1).to({scaleX:4.5808,scaleY:6.8971,rotation:16.9618,x:1991.3,y:2299.1,alpha:0.6083,startPosition:40},0).wait(1).to({scaleX:4.6034,scaleY:6.9312,x:2001.85,y:2300,alpha:0.6061,startPosition:41},0).wait(1).to({scaleX:4.6244,scaleY:6.9627,rotation:16.9617,x:2011.65,y:2300.9,alpha:0.6041,startPosition:42},0).wait(1).to({scaleX:4.6436,scaleY:6.9917,x:2020.7,y:2301.75,alpha:0.6023,startPosition:43},0).wait(1).to({scaleX:4.6612,scaleY:7.0182,x:2028.95,y:2302.4,alpha:0.6006,startPosition:44},0).wait(1).to({scaleX:4.6773,scaleY:7.0425,rotation:16.9616,x:2036.5,y:2303.1,alpha:0.5991,startPosition:45},0).wait(1).to({scaleX:4.6919,scaleY:7.0645,x:2043.3,y:2303.7,alpha:0.5977,startPosition:46},0).wait(1).to({scaleX:4.7051,scaleY:7.0844,x:2049.5,y:2304.25,alpha:0.5964,startPosition:47},0).wait(1).to({scaleX:4.717,scaleY:7.1023,x:2055.05,y:2304.75,alpha:0.5953,startPosition:48},0).wait(1).to({scaleX:4.7277,scaleY:7.1183,rotation:16.9615,x:2060,y:2305.2,alpha:0.5943,startPosition:49},0).wait(1).to({scaleX:4.7371,scaleY:7.1325,x:2064.4,y:2305.6,alpha:0.5934,startPosition:0},0).wait(1).to({scaleX:4.7453,scaleY:7.1449,x:2068.3,y:2305.95,alpha:0.5926,startPosition:1},0).wait(1).to({scaleX:4.7525,scaleY:7.1556,x:2071.6,y:2306.25,alpha:0.5919,startPosition:2},0).wait(1).to({scaleX:4.7585,scaleY:7.1647,x:2074.4,y:2306.5,alpha:0.5914,startPosition:3},0).wait(1).to({scaleX:4.7635,scaleY:7.1722,x:2076.75,y:2306.7,alpha:0.5909,startPosition:4},0).wait(1).to({scaleX:4.7675,scaleY:7.1782,x:2078.65,y:2306.9,alpha:0.5905,startPosition:5},0).wait(1).to({scaleX:4.7705,scaleY:7.1828,x:2080.05,y:2307,alpha:0.5902,startPosition:6},0).wait(1).to({scaleX:4.7727,scaleY:7.1861,x:2081.05,y:2307.05,alpha:0.59,startPosition:7},0).wait(1).to({scaleX:4.774,scaleY:7.188,x:2081.6,y:2307.15,alpha:0.5899,startPosition:8},0).wait(1).to({regX:92.1,regY:92,scaleX:4.7742,scaleY:7.1884,x:2081.95,y:2306.05,alpha:0.5898,startPosition:12},0).wait(29));

	// sb_ccc
	this.instance_1 = new lib.sb_ccc("synched",13);
	this.instance_1.setTransform(1129.75,2249.55,3.5958,5.414,16.9616,0,0,92.1,92);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).wait(1).to({regX:92.2,regY:92.2,scaleX:3.7523,scaleY:5.6497,rotation:16.9617,x:1076.3,y:2247,alpha:0.0699,startPosition:14},0).wait(1).to({scaleX:3.899,scaleY:5.8706,x:1026.15,y:2243.55,alpha:0.1355,startPosition:15},0).wait(1).to({scaleX:4.0364,scaleY:6.0776,x:979.15,y:2240.35,alpha:0.1969,startPosition:16},0).wait(1).to({scaleX:4.1653,scaleY:6.2715,x:935.1,y:2237.3,alpha:0.2545,startPosition:17},0).wait(1).to({scaleX:4.286,scaleY:6.4532,x:893.9,y:2234.5,alpha:0.3084,startPosition:18},0).wait(1).to({scaleX:4.399,scaleY:6.6234,x:855.25,y:2231.9,alpha:0.359,startPosition:19},0).wait(1).to({scaleX:4.5049,scaleY:6.7828,rotation:16.9618,x:819.05,y:2229.4,alpha:0.4063,startPosition:20},0).wait(1).to({scaleX:4.604,scaleY:6.9321,x:785.15,y:2227.05,alpha:0.4506,startPosition:21},0).wait(1).to({scaleX:4.6968,scaleY:7.0718,x:753.5,y:2224.9,alpha:0.492,startPosition:22},0).wait(1).to({scaleX:4.7836,scaleY:7.2025,x:723.75,y:2222.8,alpha:0.5309,startPosition:23},0).wait(1).to({scaleX:4.8648,scaleY:7.3248,x:696.05,y:2220.95,alpha:0.5672,startPosition:24},0).wait(1).to({scaleX:4.9408,scaleY:7.4391,x:670.05,y:2219.2,alpha:0.6011,startPosition:25},0).wait(1).to({regX:92.1,regY:92,scaleX:5.0116,scaleY:7.5458,x:645.85,y:2215.95,alpha:0.6328,startPosition:26},0).wait(1).to({regX:92.2,regY:92.2,scaleX:5.078,scaleY:7.6458,x:623.15,alpha:0.6289,startPosition:27},0).wait(1).to({scaleX:5.1399,scaleY:7.739,rotation:16.9617,x:602,y:2214.45,alpha:0.6253,startPosition:28},0).wait(1).to({scaleX:5.1976,scaleY:7.8258,x:582.3,y:2213.05,alpha:0.6219,startPosition:29},0).wait(1).to({scaleX:5.2513,scaleY:7.9067,x:563.95,y:2211.75,alpha:0.6188,startPosition:30},0).wait(1).to({scaleX:5.3013,scaleY:7.982,rotation:16.9616,x:546.85,y:2210.55,alpha:0.6158,startPosition:31},0).wait(1).to({scaleX:5.3477,scaleY:8.0519,x:531,y:2209.45,alpha:0.6131,startPosition:32},0).wait(1).to({scaleX:5.3908,scaleY:8.1168,x:516.25,y:2208.45,alpha:0.6106,startPosition:33},0).wait(1).to({scaleX:5.4307,scaleY:8.1768,x:502.6,y:2207.45,alpha:0.6083,startPosition:34},0).wait(1).to({scaleX:5.4676,scaleY:8.2323,rotation:16.9615,x:490.05,y:2206.6,alpha:0.6061,startPosition:35},0).wait(1).to({scaleX:5.5015,scaleY:8.2835,x:478.4,y:2205.75,alpha:0.6041,startPosition:36},0).wait(1).to({scaleX:5.5328,scaleY:8.3305,x:467.75,y:2205,alpha:0.6023,startPosition:37},0).wait(1).to({scaleX:5.5614,scaleY:8.3736,x:458,y:2204.35,alpha:0.6006,startPosition:38},0).wait(1).to({scaleX:5.5875,scaleY:8.4129,x:449,y:2203.7,alpha:0.5991,startPosition:39},0).wait(1).to({scaleX:5.6113,scaleY:8.4487,rotation:16.9614,x:440.9,y:2203.15,alpha:0.5977,startPosition:40},0).wait(1).to({scaleX:5.6328,scaleY:8.481,x:433.6,y:2202.6,alpha:0.5964,startPosition:41},0).wait(1).to({scaleX:5.6521,scaleY:8.5101,x:426.95,y:2202.15,alpha:0.5953,startPosition:42},0).wait(1).to({scaleX:5.6693,scaleY:8.5361,x:421.05,y:2201.7,alpha:0.5943,startPosition:43},0).wait(1).to({scaleX:5.6846,scaleY:8.5591,x:415.85,y:2201.35,alpha:0.5934,startPosition:44},0).wait(1).to({scaleX:5.6979,scaleY:8.5792,x:411.3,y:2201.05,alpha:0.5926,startPosition:45},0).wait(1).to({scaleX:5.7095,scaleY:8.5966,x:407.35,y:2200.75,alpha:0.5919,startPosition:46},0).wait(1).to({scaleX:5.7193,scaleY:8.6113,x:404,y:2200.55,alpha:0.5914,startPosition:47},0).wait(1).to({scaleX:5.7274,scaleY:8.6236,x:401.25,y:2200.35,alpha:0.5909,startPosition:48},0).wait(1).to({scaleX:5.7339,scaleY:8.6334,x:399,y:2200.15,alpha:0.5905,startPosition:49},0).wait(1).to({scaleX:5.7389,scaleY:8.6408,x:397.3,y:2200.05,alpha:0.5902,startPosition:0},0).wait(1).to({scaleX:5.7424,scaleY:8.6461,x:396.1,y:2199.95,alpha:0.59,startPosition:1},0).wait(1).to({scaleX:5.7444,scaleY:8.6492,x:395.4,alpha:0.5899,startPosition:2},0).wait(1).to({regY:92,scaleX:5.7449,scaleY:8.65,x:395.05,y:2198.5,alpha:0.5898,startPosition:12},0).wait(29));

	// sb_ccc_copy_copy
	this.instance_2 = new lib.sb_ccc("synched",12);
	this.instance_2.setTransform(1414.4,2295.25,0.8382,1.7659,16.9613,0,0,92.2,91.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({regX:92,regY:91.8,scaleX:13.9865,scaleY:24.5528,rotation:16.9614,x:1403.25,y:2190.75,alpha:0.3398},32).wait(23));

	// sb_sc3_bg
	this.instance_3 = new lib.sb_sc3bg("synched",0);
	this.instance_3.setTransform(1399.95,2181.4,1,1,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2806.1,4402);


(lib.an_sc2carsharp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_car_sharp (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0dUWQgqgNgygwQhlhhgoiyQgPgqgShPQgjidgJi1IgFAjQgJAlgSAJQgWAKgfAIQg+AQgvgMQgNgDgMgSQgagkgFhIQgJg/gJhZQgUiwgDiAQgQgZgIhFQgRiMApjcQACgXAQggQAdhABAgrQgdAEghgEQhEgJgagrQgJgRgEgXQgKgtAXgaQAQgVAmgXQBMgvBwgKQAJg5AghHQBAiOB0hJQCRglEHggQIOg9JUAfIBJACQBPAHAaATICyBQQDMBiCFBZIAWgEQAdgDAdADQBbAKA7BGIBKgNQBigKB3AQICAApQCNA1BsBEIACACIADAEIACADIACADIADADIACAEIADADIACADIACADIACADIADAEIACADIACADIADADIACAEIACADIADADIACADIACAEIABADIACADIACADIADADIACAEIACADIABADIACADIACAEIABADIACADIACADIACADIACAEIABADIACADIACADIACAEIABADIACADIADADIACAEIABADIACADIABADIACADIABAEIACADIACADIACADIACAEIABADIABADIACADIABAEIABADIACADIACADIABADIABAEIABADIABADIABADIABAEIABADIACADIABADIABADIABAEIACADIABADIAAADIABAEIABADIABADIAAADIABAEIABADIABADIABADIABADIABAEIAAADIABADIABADIACAEIABADIABADIABADIABADIABAEIACADIABADIABADIABAEIABADIACADIACADIABAEIABADIABADIACADIABADIABAEIABADIABADIACADIABAEIACADIABADIABADIABAEIACADIABADIABADIACADIABAEIABADIADADIABADIABAEIACADIABADIABADIACADIABAEIACADIABADIACADIABAEIABADIABADIABADIACAEIABADIABADIABADIABADIACAEIACADIABADIABADIABAEIABADIABADIABADIABAEIABADIABADIABADIACADIACAEIABADIACADIABADIABAEIACADIABADIABADIABADIABAEIABADIABADIACADIAAACIAAAAIAAAEIAAAEIAAACIABACIABACIAAACIABADIABACIABACIAAACIAAACIABACIAAACIABACIAAACIAAACIAAACIABACIAAACIAAACIAAACIAAADIAAACIABACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIABACIAAACIAAACIAAACIAAACIAAADIABACIAAACIAAACIAAACIAAACIAAACIACACIAAACIABACIABACIABACIAAACIABACIABACIAAADIAAACIABACIAAACIABACIAAACIAAACIAAACIABACIABACIAAACIABACIABACIAAACIABACIAAADIAAACIABACIAAACIAAACIABACIAAACIAAACIAAACIABACIABACIAAACIAAACIABACIAAACIABADIAAACIAAACIAAACIABACIAAACIAAACIAAACIAAACIABACIAAACIAAACIABACIAAACIABACIAAADIAAACIABACIAAACIAAACIAAACIAAACIAAACIAAACIABACIABACIAAACIAAACIABACIABACIAAADIAAACIAAACIAAACIABACIAAABIABACIAAACIAAACIABACIABACIAAACIAAACIABACIAAACIABADIAAACIABACIAAACIAAACIABACIAAACIAAACIABACIAAACIAAACIAAACIAAACIAAACIABACIAAACIABADIAAACIABACIABACIAAACIAAACIACACIABACIAAACIABACIABACIABACIABACIAAACIABACIABADIABACIABACIAAACIABACIABACIABACIAAACIABACIABACIAAACIAAACIAAACIABACIABACIAAADIACACIAAACIABACIABACIAAACIAAACIABACIABACIABACIAAACIAAACIAAACIABACIABACIABADIABACIAAACIABACIABACIAAACIABACIABACIAAACIABACIACACIAAACIABACIABACIAAACIAAADIABACIABACIAAACIABACIABACIAAACIAAACIABACIABACIAAACIABACIAAACIAAACIABACIAAADIABACIAAACIAAACIAAACIABACIAAACIABACIAAACIAAACIABACIAAACIABACIAAACIAAACIAAADIAAACIAAACIAAACIAAACIABACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIgBADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIgBACIAAACIgBACIAAACIAAACIgBACIgBACIAAACIAAADIgBACIgBACIAAACIgBACIgBACIgBACIAAACIAAACIgBACIgBACIAAACIAAACIAAACIgBACIgBADIAAACIgBACIgBACIAAACIgBACIgBACIgBACIAAACIgBACIgBACIAAACIgBACIgBACIgBACIgBADIAAACIgBACIgBACIAAACIgBACIgBACIgBACIAAACIgBACIgBACIAAACIgBACIgBACIAAACIAAADIgBACIgBACIAAACIgBACIgBACIAAACIgBACIgBACIgBACIAAACIAAACIgBACIgBACIAAACIgCADIAAACIgBACIgBACIgBACIgBACIAAACIgBACIgBACIgBACIgBACIgBACIAAACIgBACIgBACIgBADIgBACIgBACIgCACIAAACIgCACIAAACIgCACIAAACIgCACIAAACIgCACIgBACIgCACIgBACIgBADIgCACIgBACIgBACIgCACIgCACIgBACIgCACIgCACIgCACIgBACIgCACIgCACIgCACIgCACIgCADIgDACIgCACIgDACIgDACIgDACIgDACIgDACIgEACIgDACIgEACIgEACIgDACIgEACIgFACIgCABIgDAEIgBACIgBABIgEACIgEACIgDADIgDACIgDACIgCACIgDACIgDACIgBABIgFACIgFADIgHADIgEADIgGAEIgIADIgHADIgHACIgGACIgJAEIgHADIgKADIgKADIgKAEIgIADIgHADIgHADIgJAEIgGADIgHADIgHADIgIACIgGADIgJADIgGADIgJADIgKADIgJAEIgHADIgGADIgHADIgIAEIgJACIgFABIgFABIgGACIgJADIgHADIgJADIgFABIgEABIgHACIgIADIgIADIgJADIgFABIgFABIgFABIgDABIgGACIgIACIgFABIgFABIgGACIgJAEIgIACIgFABIgDABIgGACIgHACIgGABIgGABIgEACIgDABIgEABIgFABIgDABIgEABIgHABIgFABIgEABIgGABIgEABIgEABIgEABIgGACIgHABIgFABIgFABIgFABIgGACIgJACIgGABIgGABIgEABIgDABIgEACIgGABIgGABIgGABIgFABIgEABIgDABIgHABIgGABIgGABIgEABIgMABIgGABIgGACIgEABIgIABIgGABIgFABIgFABIgHABIgHABIgFABIgFABIgFABIgEABIgFABIgFACIgDABIgEABIgGABIgEABIgJABIgGABIgHABIgGABIgFABIgFABIgDABIgGACIgIAEIgGACIgGABIgEABIgDABIgGABIgFABIgEABIgEABIgGADIgSACIgHABIgFABIgEABIgEABIgGABIgGABIgEABIgGABIgHABIgFABIgEACIgEABIgGACIgLACIgGABIgNABIgHABIgGABIgGABIgEABIgHADIgJACIgLABIgPABIgGABIgGABIgEABIgGABIgHABIgFABIgFABIgFABIgIACIgGABIgGABIgNABIgHABIgJABIgKABIgOABIgHABIgFABIgIABIgPABIgGABIgFACIgHABIgFABIgGABIgEABIgEABIgEABIgJABIgHABIgGABIgHABIgGABIgFABIgWACIgPABIgGABIgGABIgEABIgHACIgHACIgPABIgHABIgFABIgEABIgHADIgHACIgGABIgFABIgFABIgLABIgPABIgHABIgGABIgHABIgIABIgHACIgFABIgGABIgGABIgFABIgFABIgEABIgEABIgDABIgFABIgFABIgPABIgHABIgFABIgMACIgPABIgGABIgGABIgEABIgEABIgEABIgFABIgFABIgFABIgFABIgEABIgdABIgQACIgGABIgFABIgGABIgFABIgEABIgFABIgGACIgIACIgLABIgPABIgGACIgFABIgGABIgEABIgHACIgIACIgHABIgFABIgYABIgPABIgGABIgGACIgEABIgFABIgFABIgEABIgIABIgGABIgJABIgGABIgFABIgGABIgHACIgIADIgFABIgFABIgDABIgEABIgEABIgHABIgGABIgHABIgFABIgGABIgKABIgPACIgHABIgFABIgFABIgEABIgDABIgEABIgEABIgGACIgGACIgMABIgHACIgFABIgEABIgFABQkEAej+AXIgiBAQgwBEhJAeQghARhGAOQhVARhkAAQhBAAhHgHg");
	mask.setTransform(197.2362,130.8627);

	// sb_ccc_copy
	this.instance = new lib.sb_ccc("synched",0);
	this.instance.setTransform(280.4,148.05,2.3594,3.5524,16.9618,0,0,92.2,92);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:92.1,scaleX:3.4189,scaleY:5.1477,rotation:16.9615,x:602.5,y:206.15,alpha:0.5898,startPosition:12},31,cjs.Ease.cubicOut).wait(35));

	// sb_ccc
	this.instance_1 = new lib.sb_ccc("synched",0);
	this.instance_1.setTransform(74,111.8,2.3594,3.5524,16.9618,0,0,92.2,92);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:92.1,scaleX:3.4189,scaleY:5.1477,rotation:16.9615,x:-187.95,y:-55.25,alpha:0.5898,startPosition:12},31,cjs.Ease.cubicOut).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,394.5,261.7);


(lib.sb_sc1car1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// an_wheel_copy
	this.instance = new lib.an_wheel("synched",0);
	this.instance.setTransform(412.15,140.75,0.4726,0.7548,0,0,0,71.2,71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({startPosition:13},0).to({_off:true},1).wait(106));

	// an_wheel
	this.instance_1 = new lib.an_wheel("synched",0);
	this.instance_1.setTransform(195.25,150.7,0.6814,0.9307,0,0,0,70.8,70.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({startPosition:13},0).to({_off:true},1).wait(106));

	// car
	this.instance_2 = new lib.car1();
	this.instance_2.setTransform(0,0,0.9385,0.9386);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:true},1).wait(106));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,473,245.9);


(lib.an_sc1carsharp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_car1_sharp (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("At6OCQhBgBiTgOIjbgXIk3ghQhPgJgqADQhCADgsAcIhUAEIhwAFQg+ADglAAQg9gKg9gNQgYgGgNgEQgUgHgMgLQgfgYgKg6IgGguQgEgegEgRIgQgwQgLgdgBgUQgBgfASgwIAfhPQAVgzAKgcQAhhfgHhJIgDgUQADhOAPgzQAchdA/gwQAbgUApgQQAYgKAxgRQAZgKBkgtQAvgVAmgNQAhgDA0gLQCIgcBZgEIBdgCQA1gDAkgOQAdgLAkgYIA8gsQBEgvCHhBQDVhmDWhXQA9gZAlgLQAegJAbgGIBAgEIB0gIQCZgUB2gNQF4grDqgGQFRgIEPA2QBZARCuAuQDPA2BiAjQA3ATAfAWQAUANANAPQAcAXAdAdQCQCOALAIQAsAlBeBCQBNA7AkA6QgDAmAEAoQAGA0AWBFIAnB0QAPAugEAaQgCANgIAWQgJAYgCALQgIAkATA9IANAuQgDAHgCAHIgFAVQgDANgEAIQgCAGgJAOQgHAMgDAHQgGAQABAmQABAkgIAQQgKAWglAVIg4AfQAmjDgUikQgMhvgqhCQgbgsgsghQgqgggzgSQhMgbg8APQg4AOgvA1QgMAHgKAJQgXAWgSAkQgNAZgNAqQgTA+gPA/IgNA7IgIAmQgKAzgCAeIAAAKQgGAvgDAvIAAAOQgZgEgmgDQhzgJg7gDQhggEhNACQg2ABgiAIQgcAHgVALQhqAFh2AJIp0AsIhaAFIAAgFQgFhfgGg2QgJhSgPhBQgmijhahnQhHhShagcQg9gShaAEQgzADgsALQguAEgsAPQhvAohOBiQg+BOgnB1QgZBPgbCLQgRBYgEA0QgGA+ALAmQAMAtAfAYIgRADIgEAAIhCACIgPAAg");
	mask.setTransform(243.2942,89.778);

	// sb_ccc_copy
	this.instance = new lib.sb_ccc("synched",0);
	this.instance.setTransform(400.35,102.65,2.3594,3.5524,16.9618,0,0,92.2,92);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:92.2,scaleX:2.4794,scaleY:3.7332,rotation:16.9619,x:443.45,y:109.95,alpha:0.1492,startPosition:1},0).wait(1).to({scaleX:2.5959,scaleY:3.9085,rotation:16.962,x:485.45,y:116.35,alpha:0.2941,startPosition:2},0).wait(1).to({scaleX:2.7055,scaleY:4.0735,x:525.05,y:122.35,alpha:0.4303,startPosition:3},0).wait(1).to({scaleX:2.8054,scaleY:4.224,rotation:16.9621,x:561.1,y:127.8,alpha:0.5546,startPosition:4},0).wait(1).to({scaleX:2.8943,scaleY:4.3579,x:593.15,y:132.7,alpha:0.6652,startPosition:5},0).wait(1).to({regY:92,scaleX:2.9719,scaleY:4.4746,rotation:16.9622,x:621.45,y:136.1,alpha:0.7617,startPosition:6},0).wait(1).to({regY:92.2,scaleX:3.0013,scaleY:4.519,rotation:16.9621,x:631.8,y:138.55,alpha:0.7504,startPosition:7},0).wait(1).to({scaleX:3.0291,scaleY:4.5608,x:641.8,y:140.05,alpha:0.7397,startPosition:8},0).wait(1).to({scaleX:3.0553,scaleY:4.6002,rotation:16.962,x:651.2,y:141.55,alpha:0.7297,startPosition:9},0).wait(1).to({scaleX:3.0799,scaleY:4.6374,x:660.1,y:142.85,alpha:0.7202,startPosition:10},0).wait(1).to({scaleX:3.1031,scaleY:4.6723,x:668.5,y:144.1,alpha:0.7113,startPosition:11},0).wait(1).to({scaleX:3.125,scaleY:4.7052,rotation:16.9619,x:676.4,y:145.3,alpha:0.7029,startPosition:12},0).wait(1).to({scaleX:3.1455,scaleY:4.7362,x:683.75,y:146.4,alpha:0.695,startPosition:13},0).wait(1).to({scaleX:3.1649,scaleY:4.7653,x:690.8,y:147.45,alpha:0.6875,startPosition:14},0).wait(1).to({scaleX:3.1831,scaleY:4.7926,rotation:16.9618,x:697.3,y:148.45,alpha:0.6805,startPosition:15},0).wait(1).to({scaleX:3.2001,scaleY:4.8184,x:703.45,y:149.35,alpha:0.674,startPosition:16},0).wait(1).to({scaleX:3.2163,scaleY:4.8426,x:709.3,y:150.25,alpha:0.6678,startPosition:17},0).wait(1).to({scaleX:3.2314,scaleY:4.8653,x:714.7,y:151.05,alpha:0.662,startPosition:18},0).wait(1).to({scaleX:3.2455,scaleY:4.8867,rotation:16.9617,x:719.8,y:151.9,alpha:0.6565,startPosition:19},0).wait(1).to({scaleX:3.2589,scaleY:4.9067,x:724.65,y:152.55,alpha:0.6514,startPosition:20},0).wait(1).to({scaleX:3.2714,scaleY:4.9256,x:729.15,y:153.25,alpha:0.6466,startPosition:21},0).wait(1).to({scaleX:3.2831,scaleY:4.9433,x:733.45,y:153.9,alpha:0.6421,startPosition:22},0).wait(1).to({scaleX:3.2942,scaleY:4.9599,x:737.4,y:154.5,alpha:0.6378,startPosition:23},0).wait(1).to({scaleX:3.3045,scaleY:4.9755,x:741.1,y:155.05,alpha:0.6339,startPosition:24},0).wait(1).to({scaleX:3.3142,scaleY:4.9901,rotation:16.9616,x:744.6,y:155.6,alpha:0.6301,startPosition:25},0).wait(1).to({scaleX:3.3233,scaleY:5.0038,x:747.85,y:156.1,alpha:0.6266,startPosition:26},0).wait(1).to({scaleX:3.3318,scaleY:5.0166,x:750.9,y:156.55,alpha:0.6234,startPosition:27},0).wait(1).to({scaleX:3.3398,scaleY:5.0286,x:753.85,y:157,alpha:0.6203,startPosition:28},0).wait(1).to({scaleX:3.3472,scaleY:5.0398,x:756.55,y:157.4,alpha:0.6174,startPosition:29},0).wait(1).to({scaleX:3.3542,scaleY:5.0503,x:759,y:157.75,alpha:0.6148,startPosition:30},0).wait(1).to({scaleX:3.3607,scaleY:5.06,x:761.35,y:158.15,alpha:0.6123,startPosition:31},0).wait(1).to({scaleX:3.3667,scaleY:5.0691,x:763.55,y:158.45,alpha:0.6099,startPosition:32},0).wait(1).to({scaleX:3.3723,scaleY:5.0776,x:765.6,y:158.8,alpha:0.6078,startPosition:33},0).wait(1).to({scaleX:3.3775,scaleY:5.0854,rotation:16.9615,x:767.45,y:159.05,alpha:0.6058,startPosition:34},0).wait(1).to({scaleX:3.3823,scaleY:5.0927,x:769.2,y:159.3,alpha:0.6039,startPosition:35},0).wait(1).to({scaleX:3.3868,scaleY:5.0994,x:770.8,y:159.55,alpha:0.6022,startPosition:36},0).wait(1).to({scaleX:3.3909,scaleY:5.1055,x:772.3,y:159.8,alpha:0.6006,startPosition:37},0).wait(1).to({scaleX:3.3947,scaleY:5.1112,x:773.65,y:160,alpha:0.5992,startPosition:38},0).wait(1).to({scaleX:3.3981,scaleY:5.1164,x:774.85,y:160.15,alpha:0.5979,startPosition:39},0).wait(1).to({scaleX:3.4012,scaleY:5.1211,x:776,y:160.35,alpha:0.5967,startPosition:40},0).wait(1).to({scaleX:3.4041,scaleY:5.1254,x:777.05,y:160.5,alpha:0.5956,startPosition:41},0).wait(1).to({scaleX:3.4066,scaleY:5.1292,x:777.95,y:160.65,alpha:0.5946,startPosition:42},0).wait(1).to({scaleX:3.4089,scaleY:5.1327,x:778.75,y:160.8,alpha:0.5937,startPosition:43},0).wait(1).to({scaleX:3.4109,scaleY:5.1357,x:779.5,y:160.85,alpha:0.5929,startPosition:44},0).wait(1).to({scaleX:3.4127,scaleY:5.1384,x:780.15,y:161,alpha:0.5923,startPosition:45},0).wait(1).to({scaleX:3.4143,scaleY:5.1407,x:780.7,y:161.05,alpha:0.5917,startPosition:46},0).wait(1).to({scaleX:3.4156,scaleY:5.1427,x:781.2,y:161.1,alpha:0.5912,startPosition:47},0).wait(1).to({scaleX:3.4166,scaleY:5.1443,x:781.55,y:161.15,alpha:0.5908,startPosition:48},0).wait(1).to({scaleX:3.4175,scaleY:5.1456,x:781.9,y:161.25,alpha:0.5904,startPosition:49},0).wait(1).to({scaleX:3.4182,scaleY:5.1466,x:782.1,alpha:0.5902,startPosition:0},0).wait(1).to({scaleX:3.4186,scaleY:5.1473,x:782.3,y:161.3,alpha:0.59,startPosition:1},0).wait(1).to({scaleX:3.4189,scaleY:5.1477,x:782.4,alpha:0.5899,startPosition:2},0).wait(1).to({regX:92.1,regY:92,x:782.45,y:160.75,alpha:0.5898,startPosition:12},0).wait(17));

	// sb_ccc
	this.instance_1 = new lib.sb_ccc("synched",0);
	this.instance_1.setTransform(193.95,66.4,2.3594,3.5524,16.9618,0,0,92.2,92);
	this.instance_1.alpha = 0;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:92.2,scaleX:2.4794,scaleY:3.7332,rotation:16.9619,x:170.9,y:48.2,alpha:0.1133,startPosition:1},0).wait(1).to({scaleX:2.5959,scaleY:3.9085,rotation:16.962,x:148.7,y:29.85,alpha:0.2232,startPosition:2},0).wait(1).to({scaleX:2.7055,scaleY:4.0735,x:127.95,y:12.55,alpha:0.3266,startPosition:3},0).wait(1).to({scaleX:2.8054,scaleY:4.224,rotation:16.9621,x:108.85,y:-3.2,alpha:0.421,startPosition:4},0).wait(1).to({scaleX:2.8943,scaleY:4.3579,x:91.95,y:-17.2,alpha:0.5049,startPosition:5},0).wait(1).to({regY:92,scaleX:2.9719,scaleY:4.4746,rotation:16.9622,x:77.4,y:-30.3,alpha:0.5781,startPosition:6},0).wait(1).to({regY:92.2,scaleX:3.0013,scaleY:4.519,rotation:16.9621,x:60.1,y:-36,alpha:0.5789,startPosition:7},0).wait(1).to({scaleX:3.0291,scaleY:4.5608,x:44,y:-42.2,alpha:0.5796,startPosition:8},0).wait(1).to({scaleX:3.0553,scaleY:4.6002,rotation:16.962,x:28.85,y:-48,alpha:0.5803,startPosition:9},0).wait(1).to({scaleX:3.0799,scaleY:4.6374,x:14.5,y:-53.5,alpha:0.581,startPosition:10},0).wait(1).to({scaleX:3.1031,scaleY:4.6723,x:1.1,y:-58.7,alpha:0.5816,startPosition:11},0).wait(1).to({scaleX:3.125,scaleY:4.7052,rotation:16.9619,x:-11.55,y:-63.55,alpha:0.5821,startPosition:12},0).wait(1).to({scaleX:3.1455,scaleY:4.7362,x:-23.5,y:-68.15,alpha:0.5827,startPosition:13},0).wait(1).to({scaleX:3.1649,scaleY:4.7653,x:-34.7,y:-72.45,alpha:0.5832,startPosition:14},0).wait(1).to({scaleX:3.1831,scaleY:4.7926,rotation:16.9618,x:-45.25,y:-76.5,alpha:0.5837,startPosition:15},0).wait(1).to({scaleX:3.2001,scaleY:4.8184,x:-55.15,y:-80.35,alpha:0.5841,startPosition:16},0).wait(1).to({scaleX:3.2163,scaleY:4.8426,x:-64.45,y:-83.9,alpha:0.5845,startPosition:17},0).wait(1).to({scaleX:3.2314,scaleY:4.8653,x:-73.2,y:-87.3,alpha:0.5849,startPosition:18},0).wait(1).to({scaleX:3.2455,scaleY:4.8867,rotation:16.9617,x:-81.45,y:-90.4,alpha:0.5853,startPosition:19},0).wait(1).to({scaleX:3.2589,scaleY:4.9067,x:-89.15,y:-93.4,alpha:0.5856,startPosition:20},0).wait(1).to({scaleX:3.2714,scaleY:4.9256,x:-96.45,y:-96.2,alpha:0.586,startPosition:21},0).wait(1).to({scaleX:3.2831,scaleY:4.9433,x:-103.2,y:-98.8,alpha:0.5863,startPosition:22},0).wait(1).to({scaleX:3.2942,scaleY:4.9599,x:-109.6,y:-101.25,alpha:0.5866,startPosition:23},0).wait(1).to({scaleX:3.3045,scaleY:4.9755,x:-115.6,y:-103.6,alpha:0.5868,startPosition:24},0).wait(1).to({scaleX:3.3142,scaleY:4.9901,rotation:16.9616,x:-121.25,y:-105.75,alpha:0.5871,startPosition:25},0).wait(1).to({scaleX:3.3233,scaleY:5.0038,x:-126.55,y:-107.75,alpha:0.5873,startPosition:26},0).wait(1).to({scaleX:3.3318,scaleY:5.0166,x:-131.5,y:-109.7,alpha:0.5876,startPosition:27},0).wait(1).to({scaleX:3.3398,scaleY:5.0286,x:-136.05,y:-111.4,alpha:0.5878,startPosition:28},0).wait(1).to({scaleX:3.3472,scaleY:5.0398,x:-140.35,y:-113.05,alpha:0.588,startPosition:29},0).wait(1).to({scaleX:3.3542,scaleY:5.0503,x:-144.45,y:-114.7,alpha:0.5881,startPosition:30},0).wait(1).to({scaleX:3.3607,scaleY:5.06,x:-148.2,y:-116.05,alpha:0.5883,startPosition:31},0).wait(1).to({scaleX:3.3667,scaleY:5.0691,x:-151.7,y:-117.4,alpha:0.5885,startPosition:32},0).wait(1).to({scaleX:3.3723,scaleY:5.0776,x:-154.9,y:-118.65,alpha:0.5886,startPosition:33},0).wait(1).to({scaleX:3.3775,scaleY:5.0854,rotation:16.9615,x:-157.95,y:-119.85,alpha:0.5888,startPosition:34},0).wait(1).to({scaleX:3.3823,scaleY:5.0927,x:-160.75,y:-120.95,alpha:0.5889,startPosition:35},0).wait(1).to({scaleX:3.3868,scaleY:5.0994,x:-163.35,y:-121.9,alpha:0.589,startPosition:36},0).wait(1).to({scaleX:3.3909,scaleY:5.1055,x:-165.65,y:-122.85,alpha:0.5891,startPosition:37},0).wait(1).to({scaleX:3.3947,scaleY:5.1112,x:-167.85,y:-123.65,alpha:0.5892,startPosition:38},0).wait(1).to({scaleX:3.3981,scaleY:5.1164,x:-169.9,y:-124.45,alpha:0.5893,startPosition:39},0).wait(1).to({scaleX:3.4012,scaleY:5.1211,x:-171.7,y:-125.15,alpha:0.5894,startPosition:40},0).wait(1).to({scaleX:3.4041,scaleY:5.1254,x:-173.3,y:-125.75,alpha:0.5895,startPosition:41},0).wait(1).to({scaleX:3.4066,scaleY:5.1292,x:-174.85,y:-126.3,startPosition:42},0).wait(1).to({scaleX:3.4089,scaleY:5.1327,x:-176.15,y:-126.8,alpha:0.5896,startPosition:43},0).wait(1).to({scaleX:3.4109,scaleY:5.1357,x:-177.35,y:-127.3,startPosition:44},0).wait(1).to({scaleX:3.4127,scaleY:5.1384,x:-178.35,y:-127.65,alpha:0.5897,startPosition:45},0).wait(1).to({scaleX:3.4143,scaleY:5.1407,x:-179.2,y:-128,startPosition:46},0).wait(1).to({scaleX:3.4156,scaleY:5.1427,x:-180,y:-128.35,alpha:0.5898,startPosition:47},0).wait(1).to({scaleX:3.4166,scaleY:5.1443,x:-180.6,y:-128.6,startPosition:48},0).wait(1).to({scaleX:3.4175,scaleY:5.1456,x:-181.1,y:-128.75,startPosition:49},0).wait(1).to({scaleX:3.4182,scaleY:5.1466,x:-181.5,y:-128.9,startPosition:0},0).wait(1).to({scaleX:3.4186,scaleY:5.1473,x:-181.75,y:-129,startPosition:1},0).wait(1).to({scaleX:3.4189,scaleY:5.1477,x:-181.95,y:-129.1,startPosition:2},0).wait(1).to({regX:92.1,regY:92,x:-182,y:-129.65,startPosition:12},0).wait(17));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,486.6,179.6);


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

	// an_sc3_tt
	this.instance = new lib.an_sc3tt("synched",0,false);
	this.instance.setTransform(797.2,372,1.7859,1.7859,0,0,0,267.4,246.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).wait(62));

	// an_sc3_bg
	this.instance_1 = new lib.an_sc3bg("synched",0);
	this.instance_1.setTransform(303.1,269.5,1.0255,1.0255,0,0,0,1403,2200.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:2201,scaleX:1,scaleY:1,x:303.05,y:269.6,startPosition:43,loop:false},43).wait(32));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1099.9,-1931.4,2806.1000000000004,4402);


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

	// an_btn
	this.instance = new lib.an_btn("synched",0,false);
	this.instance.setTransform(-32.25,366.8,1.8147,1.8147,0,0,0,94.7,19.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).wait(80));

	// an_ariya
	this.instance_1 = new lib.an_ariya("synched",0,false);
	this.instance_1.setTransform(80.25,123.65,2.1531,2.1531,0,0,0,131.9,25.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(79));

	// an_sc2_subtitle
	this.instance_2 = new lib.an_sc2subtitle("synched",0,false);
	this.instance_2.setTransform(84.55,269,2.1531,2.1531,0,0,0,206.9,10.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(87));

	// an_sc2_car_sharp
	this.instance_3 = new lib.an_sc2carsharp("synched",0,false);
	this.instance_3.setTransform(887.9,230.55,1.5261,1.5261,0,0,0,189.6,131.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).wait(66));

	// an_sc2_bg
	this.instance_4 = new lib.an_sc2bg("synched",0,false);
	this.instance_4.setTransform(300.1,249.95,1,1,0,0,0,308.4,256.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(91));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1281.9,-434.3,2709.6000000000004,1588.5);


(lib.an_sc1car1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// an_sc1_car_sharp
	this.instance = new lib.an_sc1carsharp("synched",0,false);
	this.instance.setTransform(226.35,106.25,0.9344,0.9344,0,0,0,243.2,89.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).wait(117).to({startPosition:69},0).to({_off:true},1).wait(40));

	// sb_sc1_car1
	this.instance_1 = new lib.sb_sc1car1("synched",0);
	this.instance_1.setTransform(447,143.5,1,1,0,0,0,236.5,129.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:236.5,y:151.05,alpha:1,mode:"single",startPosition:13},13,cjs.Ease.cubicOut).to({startPosition:13},117).to({_off:true},1).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,13.8,684.4,253.5);


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

	// an_ariya
	this.instance = new lib.an_ariya("synched",0,false);
	this.instance.setTransform(-34.6,196.6,2.5167,2.5167,0,0,0,131.9,25.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(107).to({startPosition:44},0).to({_off:true},1).wait(19));

	// an_sc1_subtitle
	this.instance_1 = new lib.an_sc1subtitle("synched",0,false);
	this.instance_1.setTransform(-31.1,337,3.1365,3.1365,0,0,0,168.5,11.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(115).to({startPosition:44},0).to({_off:true},1).wait(19));

	// an_sc1_car1
	this.instance_2 = new lib.an_sc1car1("synched",0,false);
	this.instance_2.setTransform(766.15,287.8,1.6043,1.6043,0,0,0,244,140.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).wait(111).to({startPosition:111},0).to({_off:true},1).wait(19));

	// an_sc1_bg
	this.instance_3 = new lib.an_sc1bg("synched",0,false);
	this.instance_3.setTransform(300,250.15,1,1,0,0,0,308.2,256.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(119).to({startPosition:85},0).to({_off:true},1).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1570.9,-209.5,3042.2,861.6);


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
	this.instance.setTransform(561.9,2045,1.1195,1.1199,0,0,0,74.8,62.6);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.698)",0,3,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	// sc2
	this.instance_1 = new lib.sc2("synched",0,false);
	this.instance_1.setTransform(1399.95,2182.15,1,1,0,0,0,300,250);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(240).to({_off:false},0).wait(120));

	// sc3
	this.instance_2 = new lib.sc3("synched",0,false);
	this.instance_2.setTransform(1399.95,2182.2,1,1,0,0,0,300,250.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120).to({_off:false},0).to({_off:true},120).wait(120));

	// sc1
	this.instance_3 = new lib.sc1("synched",0,false);
	this.instance_3.setTransform(1401.9,2183.15,1,1,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},120).wait(240));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-469,0,3275.1,4402);


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
	this.instance.setTransform(485.6,134.2,0.5,0.5,0,0,0,1403.1,2201);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(719).to({mode:"single",startPosition:359},0).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EhNVgVFMCarAAAMAAAAqLMiarAAAg");
	this.shape.setTransform(485,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhNVAVGMAAAgqLMCarAAAMAAAAqLg");
	this.shape_1.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(720));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,-841.3,1152.6,2076.1);
// library properties:
lib.properties = {
	id: '8E6E2E7554C041E6B394D1A9E196CBFB',
	width: 970,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg1.jpg", id:"bg1"},
		{src:"images/bg2.jpg", id:"bg2"},
		{src:"images/bg3.jpg", id:"bg3"},
		{src:"images/car1.png", id:"car1"},
		{src:"images/wheel.png", id:"wheel"}
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
an.compositions['8E6E2E7554C041E6B394D1A9E196CBFB'] = {
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