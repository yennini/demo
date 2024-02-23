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
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.bg3 = function() {
	this.initialize(img.bg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.car1 = function() {
	this.initialize(img.car1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,504,262);// helper functions:

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

	// bg3
	this.instance = new lib.bg3();
	this.instance.setTransform(2,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,1,600,500);


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
	this.shape.setTransform(147.025,11.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhBBgIAAh+IgfAAIAAgRIBNAAIAAARIgcAAIAAB+gAgYBcIAAgQIAeAAIgEgNIgOAAIAAguIBjAAIAAAuIgTAAIgEANIAiAAIAAAQgAAYBMIAWAAIAEgNIgeAAgAAFAuIBAAAIAAgNIhAAAgAhhBGIAEgaIADg7IAQABQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBABQAAAggCAXIgDAagAgoADIAAgTIAPAAIABATQAAAcAGAgIgQABQgGggAAgdgAgRAKIAAgPIBwAAIAAAPgAgMgMIAAhDIAdAAIAAgQIAPABQABAAABAAQABABABAAQAAAAAAAAQABABAAAAQAAACgEACIAAAJIANAAIAAgPIAPABQABAAABAAQABABAAAAQABAAAAABQAAAAAAAAIgDAEIAAAIIAeAAIAABDgAA+gcIANAAIAAgLIgNAAgAAhgcIANAAIAAgLIgNAAgAAFgcIAMAAIAAgLIgMAAgAA+g1IANAAIAAgKIgNAAgAAhg1IANAAIAAgKIgNAAgAAFg1IAMAAIAAgKIgMAAgAhahCIAAgRIBBAAIAAARg");
	this.shape_1.setTransform(118.475,11.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBPIAUAAQAKAAABgJIAAgJIhZAAIAAgRIBZAAIAAgQIAKACIASgLIhjAAIAAgRIB7AAIAEgBIAFABIAJAHIACACQAAACgEADIgzAYIAAAEIBPAAIAAARIhPAAIAAAMQAAAMgIAGQgGAGgaABgAhBgGIAAgvICEAAIAAAvgAgtgVIBdAAIAAgRIhdAAgAhcg+IAAgRIBTAAIAAgSIASACQAFABAAACQAAACgEADIAAAIIBTAAIAAARg");
	this.shape_2.setTransform(90.025,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVBcIAAizIBIAAIAAB/QAAAOgNAFQgMADgKAAIgHgTIAQgBQAHgBAAgHIAAhnIgiAAIAAChgAhYBRIgEgWIAOgCIAAiUIBVAAIAABgIhCAAIAAAxQAYgFATgFIgJgRIANgLQAOATAPAgIgRAMIgIgTQgXAHgxANQgDAEgCAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBgAg7gLIAvAAIAAgYIgvAAgAg7g0IAvAAIAAgWIgvAAg");
	this.shape_3.setTransform(61.2,12.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(51.9,1.8,105.19999999999999,19.5);


(lib.Path = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(60.1,1.4,189.1,39.5), null);


(lib.sb_sc2if = function(mode,startPosition,loop,reversed) {
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
	this.shape_6.setTransform(89.05,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhVCGIAAh1IgjAFQgDAEgDAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBIgFgXIAWgBIAbgnQgggYgPgJIAOgSIAKAFIAdgvIATAKQAFADAAACQAAACgFAEIgeAnIATANIAWgfIATANQACABAAAEQAAACgFABIgyBBQATgCARgDIgIgTIAXgFQAPAfAGAcIgYAEIgFgUIgVAEIAAB5gABQCBQgRAAgJgLQgIgJAAgUIAAghIgbAAIAAAWIgZAAIAAh8IAXACQAHACAAADQAAACgFADIAABDIAbAAIAAhrIg8AAIAAgZIA8AAIAAgiIAdAFQAFABAAADQAAADgFAEQgEADAAAHIAAAIIA7AAIAAAZIg7AAIAABrIAaAAIAAhPIAXACQAHACAAADQAAACgFADIAABaIgzAAIAAAaQAAANAEAFQADAGANAAIADAAQAIgBAEgDQAFgEACgRIAYAKQgFAZgHAHQgGAGgIAAgAiIBwQAFgMAFgSQAGgTADgaIAWAHQABgBABABQAAAAABAAQAAABABAAQAAABAAAAQAAAEgFADQgGAkgLAegAg5AqIAYgFQANAjAGAhIgXAEQgIgmgMgdg");
	this.shape_7.setTransform(46.375,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32.7,-12.3,345.2,27.1);


(lib.sb_bg2 = function(mode,startPosition,loop,reversed) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


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


(lib.sb_start = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(258.5043,10.6717,0.8024,0.8024);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATCGIAAiBQgGAPgIAOQgRAdgdAfIgZgYQAdgYAXgfQANgRARgoIhCAAIAAgaIBFAAIAAhBIAZACQAHABAAADQAAADgFAEIAAA0IBOAAIAAAaIhHAAQAOAfAMATQAUAfAnAcIgZAYQgigdgTgjQgIgNgGgOIAACGgAhhCGIAAiQIgVAfIgTgVQAZggAPgdQARgfAOgpIAXAMQAFABAAACQAAAFgIACQgNAigLAVIAAC+g");
	this.shape_1.setTransform(196.6807,10.7519,0.8024,0.8024);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMCDQgdAAAAgXIAAgQIg+AAIAAANIgZAAIAAhpIDGAAIAABcIhWAAIAAADQAAAPAIgBIBHAAQAIAAAFgCQADgDAEgQIAaAIQgEAUgKAIQgLAGgPABgAAIBIIA8AAIAAgRIg8AAgAhPBIIA+AAIAAgRIg+AAgAAIAkIA8AAIAAgQIg8AAgAhPAkIA+AAIAAgQIg+AAgAgQgHIAAhCIhbAAIAAArIgZAAIAAg/IB0AAIAAgQIhhAAIAAgUIDZAAIAAAUIhgAAIAAAQIB0AAIAAA8IgZAAIAAgoIhbAAIAABCgAAYgOIAAgRIA9AAIAAARgAhcgOIAAgRIA8AAIAAARgAAYgsIAAgSIA9AAIAAASgAhcgsIAAgSIA8AAIAAASg");
	this.shape_2.setTransform(135.178,10.8723,0.8024,0.8024);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhVCGIAAh1IgjAFQgDAEgDABQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBIgFgXIAWgBIAbgoQgggWgPgKIAOgSIAKAFIAdgvIATAKQAFADAAACQAAACgFADIgeAoIATANIAWgeIATAMQACACAAADQAAACgFABIgyBBQATgBARgDIgIgUIAXgFQAPAeAGAdIgYAEIgFgTIgVADIAAB5gABQCBQgRAAgJgLQgIgJAAgTIAAgiIgbAAIAAAVIgZAAIAAh6IAXACQAHABAAACQAAACgFAEIAABCIAbAAIAAhqIg8AAIAAgYIA8AAIAAgjIAdAEQAFACAAADQAAADgFAFQgEACAAAHIAAAJIA7AAIAAAYIg7AAIAABqIAaAAIAAhNIAXACQAHABAAACQAAADgFADIAABaIgzAAIAAAbQAAAMAEAFQADAFANABIADAAQAIAAAEgEQAFgEACgQIAYAKQgFAZgHAFQgGAHgIAAgAiIBvQAFgMAFgQQAGgUADgZIAWAGQABAAABAAQAAAAABAAQAAABABAAQAAABAAABQAAACgFAFQgGAjgLAegAg5AqIAYgEQANAiAGAgIgXAFQgIgmgMgdg");
	this.shape_3.setTransform(72.8127,10.7118,0.8024,0.8024);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61.8,0,207.59999999999997,21.5);


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

	// car
	this.instance = new lib.car1();
	this.instance.setTransform(0,0,0.9385,0.9386);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,473,245.9);


(lib.sb_bg1 = function(mode,startPosition,loop,reversed) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AR/DWIgvhNIlPAAIgvBNIhfAAIEMmrIBaAAIDcFaIAOASQAPAVAKAFQATANA0gBIAEAZgAQnBCIh8jQIh+DQID6AAgAFtDWIAAiZIkLkSIBwAAIDEDLIDMjLIBtAAIkLESIAACZgAhEDWIAAmrIBTAAIAAGrgAlEDWIiUinIhhAAIgthHIAAAAIC3AAIAxgBQAagCAMgJQANgJAEgUQAGgUgHgTQgIgYgbgHQgQgDgvAAIkGAAIgthLIEbAAQBEAAATABQArAEAZAOQAoAYAMA9QAMA9geAsQgRAagbAMQgXALgpADICWCmgArcDWIguhNIlPAAIgwBNIidAAIAFgaQAcAAAOgCQAVgCAMgIQANgLAVggIDXlaIBdAAIEOGrgAs0BCIh7jQIh9DQID4AAg");
	this.shape.setTransform(131.9,21.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,263.8,42.9);


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

	// _Path_
	this.instance = new lib.Path();
	this.instance.setTransform(94.6,19.7,1,1,0,0,0,94.6,19.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:true},1).wait(2).to({_off:false},0).wait(39));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(60.1,1.4,189.1,39.5);


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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:94.6,scaleX:1,scaleY:1,x:94.6,alpha:1,startPosition:8},6).wait(39));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(49,-4.4,249.60000000000002,52);


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


(lib.an_sc2if = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc2_if
	this.instance = new lib.sb_sc2if("synched",0);
	this.instance.setTransform(206.9,10.8,1,1,0,0,0,206.9,10.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},13).wait(37));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32.7,-12.3,345.2,27.1);


(lib.an_bg2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_bg2
	this.instance = new lib.sb_bg2("synched",0);
	this.instance.setTransform(308.35,256.95,1.0278,1.0278,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:299.9,scaleX:1.009,scaleY:1.009,x:308.2},26).wait(65));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,616.7,513.9);


(lib.an_start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_start
	this.instance = new lib.sb_start("synched",0);
	this.instance.setTransform(168.3,10.8,1,1,0,0,0,168.3,10.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},15).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61.8,0,207.59999999999997,21.5);


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
	this.instance.setTransform(447,143.5,1,1,0,0,0,236.5,129.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:236.5,y:151.05,alpha:1},13,cjs.Ease.cubicOut).wait(32));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,13.8,683.5,253.5);


(lib.an_bg1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_bg1
	this.instance = new lib.sb_bg1("synched",0);
	this.instance.setTransform(308.15,256.8,1.0275,1.0275,0,0,0,299.9,249.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:250,scaleX:1.0042,scaleY:1.0042,startPosition:46},69).wait(17));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,616.5,513.8);


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
p.nominalBounds = new cjs.Rectangle(0,0,263.8,50.9);


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
	this.instance.setTransform(302.6,239.3,1,1,0,0,0,271.5,24);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).wait(62));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgwaApkIgJhEQhCAEhigFIikgIQhwgEjLAKQjbAKhggCQhKgBgwgJQhBgNgsggQg6gqgVhIQgWhKAZhDQATgwApgpQAmglAzgaQAsgWA6gQQAqgLBBgLQhHgtgZhYQgYhZAmhLQAhhBBJgrQA+gmBUgTQAsgJBugNQBjgNA2gOIAjizQADgMAAgKIgEgIQgHgQgFgQIgCgCIgXgSQgMgKgvgxQgjgkgdgNQgUgJgagCQgRgCgfABIknACQhJABglgFQg+gHgrgWQg1gbghg0QgigzgDg7QgEg7Adg2QAcg4AygfQA7glBrgIIBagDQA1gEAjgGIBIiBQAYgrAPgXQAXgkAYgYQAcgdAhgRQAkgTAlAAQAJg+Agg3QAhg4AxgnQgjhPgfhZIgmh1IhOkAQgQgzgFgcQgIgsAGgkQAJgwAhgpQAfgnAtgaQBEgmB7gUQBtgRCLgLQBPgGCrgJIH/gZQA+gDAfAAQAzAAAoAIIAhAFQASADAOgBQAPgCAUgHIAjgOQBMgaBQAfQA3AVAkAoQgRATgMAUQgKATgIAWQgcApgLAeQgMAggDAqQgCAaAAAyQAABBACAgQAEA2ALAqQAWBYBKBqQAbAnAXASQAXASAcAHQAdASAiAOQBNAfBmAHQAZAFAZACQAkAEAlgBQBEAIA0gBQBQgDA+gbQBXgRBQgoQBDghAkgrIAPgGIAfgdIANgNIBGhtQAshJAgg8QAVgpAKgPQAUgfAXgPQAegUAnABQAUAAARAFIAIgCQAxgHBNADQBUADBuALIDBAUQEOAcE5AWILbgJIgCgIIgJgjQg2jbhBjIIgJgeIBKAEIPyAiQD4AJB8AKQA5AFAdgDQAggCAZgKQAyAQAkAeQA4AtATBLQASBKgcBDIgUArQgMAYgDATQgCAQADAXIAEAnQAEArgOApIF9AOQBWAEAsAHQBHANAvAhQAsAeAaAwQAbAwACA1QACA0gXAzQgXAxgpAiQg+Ayh4ARIhmAMQg9AHgnALQAqA4gPBQQgOBLg2A1QgwAvhKAfQg3AXhVATQgZAGgLAEQgTAGgMALIgCACQAhAgATAwQAjBXgfBQQGZASGXAmQBaAIAzAOQBMAUAuArQAjAgATAtQATAugBAwQgBAvgVAtQgVAsgjAfQgxArhNAVQgzAOhcAKQkMAclMARQACAegHAgQgKAzgBANQgCAlAUASQAMAKAUAFQAMADAYAAQCoAHDkAlQCEAWEGAxQBkARAtALQBQAUA5AhQBEAmApA8QAuBCgDBGQgCBDguA/QgoA3hCArQhfBBiHAmQheAaicAYQoZBRrJAZQi8AHwsAOQhZACgtgFQhJgGg3gWIgsgVQgbgNgTgFQgegJgnABQgYAAguAFQo2A7o+ANQi8AFm4AAg");
	mask.setTransform(340.9624,266.1);

	// sb_ccc_copy
	this.instance_1 = new lib.sb_ccc("synched",0);
	this.instance_1.setTransform(479.55,316.8,3.5243,5.3064,16.962,0,0,92.2,92);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).wait(1).to({regY:92.2,scaleX:3.5171,scaleY:5.2955,rotation:16.9618,x:499,y:321.75,alpha:0.0707,startPosition:1},0).wait(1).to({scaleX:3.5099,scaleY:5.2847,rotation:16.9617,x:518.65,y:325.7,alpha:0.1407,startPosition:2},0).wait(1).to({scaleX:3.5028,scaleY:5.2741,rotation:16.9616,x:537.85,y:329.45,alpha:0.2092,startPosition:3},0).wait(1).to({scaleX:3.496,scaleY:5.2639,rotation:16.9614,x:556.4,y:333.2,alpha:0.2755,startPosition:4},0).wait(1).to({scaleX:3.4895,scaleY:5.254,rotation:16.9613,x:574.2,y:336.75,alpha:0.3388,startPosition:5},0).wait(1).to({scaleX:3.4833,scaleY:5.2447,rotation:16.9612,x:591,y:340.05,alpha:0.3988,startPosition:6},0).wait(1).to({scaleX:3.4775,scaleY:5.236,rotation:16.9611,x:606.7,y:343.25,alpha:0.455,startPosition:7},0).wait(1).to({scaleX:3.4721,scaleY:5.2279,rotation:16.961,x:621.4,y:346.15,alpha:0.5073,startPosition:8},0).wait(1).to({scaleX:3.4672,scaleY:5.2204,rotation:16.9609,x:634.9,y:348.85,alpha:0.5555,startPosition:9},0).wait(1).to({scaleX:3.4626,scaleY:5.2136,rotation:16.9608,x:647.35,y:351.35,alpha:0.5998,startPosition:10},0).wait(1).to({scaleX:3.4584,scaleY:5.2073,rotation:16.9607,x:658.7,y:353.5,alpha:0.6403,startPosition:11},0).wait(1).to({scaleX:3.4546,scaleY:5.2016,rotation:16.9606,x:669,y:355.6,alpha:0.6773,startPosition:12},0).wait(1).to({regY:92,scaleX:3.4511,scaleY:5.1963,x:678.8,y:356.45,alpha:0.7109,startPosition:13},0).wait(1).to({regY:92.2,scaleX:3.4477,scaleY:5.1912,rotation:16.9607,x:687.9,y:359.4,alpha:0.6981,startPosition:14},0).wait(1).to({scaleX:3.4446,scaleY:5.1865,rotation:16.9608,x:696.45,y:361.1,alpha:0.6864,startPosition:15},0).wait(1).to({scaleX:3.4418,scaleY:5.1823,x:704.2,y:362.6,alpha:0.6758,startPosition:16},0).wait(1).to({scaleX:3.4392,scaleY:5.1784,rotation:16.9609,x:711.25,y:364.05,alpha:0.6661,startPosition:17},0).wait(1).to({scaleX:3.4369,scaleY:5.1749,rotation:16.961,x:717.65,y:365.3,alpha:0.6574,startPosition:18},0).wait(1).to({scaleX:3.4348,scaleY:5.1717,x:723.45,y:366.5,alpha:0.6495,startPosition:19},0).wait(1).to({scaleX:3.4329,scaleY:5.1688,rotation:16.9611,x:728.75,y:367.55,alpha:0.6423,startPosition:20},0).wait(1).to({scaleX:3.4312,scaleY:5.1662,x:733.5,y:368.45,alpha:0.6358,startPosition:21},0).wait(1).to({scaleX:3.4296,scaleY:5.1638,rotation:16.9612,x:737.8,y:369.35,alpha:0.6299,startPosition:22},0).wait(1).to({scaleX:3.4282,scaleY:5.1617,x:741.7,y:370.1,alpha:0.6246,startPosition:23},0).wait(1).to({scaleX:3.4269,scaleY:5.1598,rotation:16.9613,x:745.15,y:370.8,alpha:0.6198,startPosition:24},0).wait(1).to({scaleX:3.4258,scaleY:5.1581,x:748.35,y:371.45,alpha:0.6155,startPosition:25},0).wait(1).to({scaleX:3.4247,scaleY:5.1565,x:751.15,y:372,alpha:0.6116,startPosition:26},0).wait(1).to({scaleX:3.4239,scaleY:5.1552,x:753.75,y:372.5,alpha:0.6081,startPosition:27},0).wait(1).to({scaleX:3.423,scaleY:5.154,rotation:16.9614,x:756,y:372.9,alpha:0.605,startPosition:28},0).wait(1).to({scaleX:3.4223,scaleY:5.1529,x:757.95,y:373.3,alpha:0.6023,startPosition:29},0).wait(1).to({scaleX:3.4217,scaleY:5.1519,x:759.75,y:373.7,alpha:0.5999,startPosition:30},0).wait(1).to({scaleX:3.4211,scaleY:5.1511,x:761.25,y:373.95,alpha:0.5978,startPosition:31},0).wait(1).to({scaleX:3.4206,scaleY:5.1503,x:762.55,y:374.25,alpha:0.596,startPosition:32},0).wait(1).to({scaleX:3.4202,scaleY:5.1497,x:763.7,y:374.5,alpha:0.5945,startPosition:33},0).wait(1).to({scaleX:3.4199,scaleY:5.1492,rotation:16.9615,x:764.7,y:374.7,alpha:0.5932,startPosition:34},0).wait(1).to({scaleX:3.4196,scaleY:5.1488,x:765.45,y:374.8,alpha:0.5921,startPosition:35},0).wait(1).to({scaleX:3.4194,scaleY:5.1484,x:766.05,y:374.95,alpha:0.5913,startPosition:36},0).wait(1).to({scaleX:3.4192,scaleY:5.1482,x:766.6,y:375,alpha:0.5906,startPosition:37},0).wait(1).to({scaleX:3.4191,scaleY:5.148,x:766.85,y:375.1,alpha:0.5902,startPosition:38},0).wait(1).to({scaleX:3.419,scaleY:5.1479,x:767.05,y:375.15,alpha:0.5899,startPosition:39},0).wait(1).to({regX:92.1,regY:92,scaleX:3.4189,scaleY:5.1477,x:767.15,y:374.6,alpha:0.5898,startPosition:12},0).wait(29));

	// sb_ccc
	this.instance_2 = new lib.sb_ccc("synched",0);
	this.instance_2.setTransform(149.35,280.45,3.9946,6.0146,16.9617,0,0,92.1,92);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).wait(1).to({regX:92.2,regY:92.2,scaleX:3.955,scaleY:5.955,x:137.5,y:270.2,alpha:0.0707,startPosition:1},0).wait(1).to({scaleX:3.9158,scaleY:5.8959,x:125.7,y:258.8,alpha:0.1407,startPosition:2},0).wait(1).to({scaleX:3.8774,scaleY:5.838,x:114.2,y:247.6,alpha:0.2092,startPosition:3},0).wait(1).to({scaleX:3.8402,scaleY:5.782,x:103.1,y:236.8,alpha:0.2755,startPosition:4},0).wait(1).to({scaleX:3.8046,scaleY:5.7285,x:92.35,y:226.45,alpha:0.3388,startPosition:5},0).wait(1).to({scaleX:3.771,scaleY:5.6778,x:82.35,y:216.65,alpha:0.3988,startPosition:6},0).wait(1).to({scaleX:3.7394,scaleY:5.6303,x:72.85,y:207.45,alpha:0.455,startPosition:7},0).wait(1).to({scaleX:3.7101,scaleY:5.5862,x:64.1,y:198.95,alpha:0.5073,startPosition:8},0).wait(1).to({scaleX:3.683,scaleY:5.5455,x:56,y:191.1,alpha:0.5555,startPosition:9},0).wait(1).to({scaleX:3.6582,scaleY:5.508,x:48.55,y:183.85,alpha:0.5998,startPosition:10},0).wait(1).to({scaleX:3.6355,scaleY:5.4738,rotation:16.9616,x:41.7,y:177.2,alpha:0.6403,startPosition:11},0).wait(1).to({scaleX:3.6147,scaleY:5.4426,x:35.5,y:171.2,alpha:0.6773,startPosition:12},0).wait(1).to({regX:92.1,regY:92,scaleX:3.5958,scaleY:5.414,x:29.8,y:164.55,alpha:0.7109,startPosition:13},0).wait(1).to({regX:92.2,regY:92.2,scaleX:3.5771,scaleY:5.3859,x:24.25,y:160.25,alpha:0.6981,startPosition:14},0).wait(1).to({scaleX:3.56,scaleY:5.3602,x:19.1,y:155.2,alpha:0.6864,startPosition:15},0).wait(1).to({scaleX:3.5445,scaleY:5.3368,x:14.45,y:150.7,alpha:0.6758,startPosition:16},0).wait(1).to({scaleX:3.5304,scaleY:5.3156,x:10.25,y:146.55,alpha:0.6661,startPosition:17},0).wait(1).to({scaleX:3.5177,scaleY:5.2964,x:6.4,y:142.85,alpha:0.6574,startPosition:18},0).wait(1).to({scaleX:3.5061,scaleY:5.279,x:2.9,y:139.5,alpha:0.6495,startPosition:19},0).wait(1).to({scaleX:3.4956,scaleY:5.2632,rotation:16.9615,x:-0.25,y:136.45,alpha:0.6423,startPosition:20},0).wait(1).to({scaleX:3.4861,scaleY:5.2489,x:-3.1,y:133.65,alpha:0.6358,startPosition:21},0).wait(1).to({scaleX:3.4775,scaleY:5.2359,x:-5.7,y:131.15,alpha:0.6299,startPosition:22},0).wait(1).to({scaleX:3.4697,scaleY:5.2242,x:-7.95,y:128.85,alpha:0.6246,startPosition:23},0).wait(1).to({scaleX:3.4627,scaleY:5.2137,x:-10.15,y:126.85,alpha:0.6198,startPosition:24},0).wait(1).to({scaleX:3.4564,scaleY:5.2042,x:-12,y:124.95,alpha:0.6155,startPosition:25},0).wait(1).to({scaleX:3.4507,scaleY:5.1957,x:-13.7,y:123.3,alpha:0.6116,startPosition:26},0).wait(1).to({scaleX:3.4457,scaleY:5.1881,x:-15.2,y:121.85,alpha:0.6081,startPosition:27},0).wait(1).to({scaleX:3.4412,scaleY:5.1813,x:-16.55,y:120.5,alpha:0.605,startPosition:28},0).wait(1).to({scaleX:3.4372,scaleY:5.1753,x:-17.75,y:119.35,alpha:0.6023,startPosition:29},0).wait(1).to({scaleX:3.4337,scaleY:5.17,x:-18.8,y:118.35,alpha:0.5999,startPosition:30},0).wait(1).to({scaleX:3.4306,scaleY:5.1654,x:-19.7,y:117.4,alpha:0.5978,startPosition:31},0).wait(1).to({scaleX:3.428,scaleY:5.1614,x:-20.5,y:116.65,alpha:0.596,startPosition:32},0).wait(1).to({scaleX:3.4257,scaleY:5.158,x:-21.2,y:116,alpha:0.5945,startPosition:33},0).wait(1).to({scaleX:3.4239,scaleY:5.1552,x:-21.75,y:115.45,alpha:0.5932,startPosition:34},0).wait(1).to({scaleX:3.4223,scaleY:5.1528,x:-22.2,y:115,alpha:0.5921,startPosition:35},0).wait(1).to({scaleX:3.4211,scaleY:5.151,x:-22.6,y:114.65,alpha:0.5913,startPosition:36},0).wait(1).to({scaleX:3.4201,scaleY:5.1496,x:-22.85,y:114.4,alpha:0.5906,startPosition:37},0).wait(1).to({scaleX:3.4195,scaleY:5.1486,x:-23.1,y:114.2,alpha:0.5902,startPosition:38},0).wait(1).to({scaleX:3.4191,scaleY:5.148,x:-23.15,y:114.1,alpha:0.5899,startPosition:39},0).wait(1).to({regX:92.1,regY:92,scaleX:3.4189,scaleY:5.1477,x:-23.3,y:113.2,alpha:0.5898,startPosition:12},0).wait(29));

	// sb_ccc_copy_copy
	this.instance_3 = new lib.sb_ccc("synched",12);
	this.instance_3.setTransform(314.45,363.85,0.8382,1.7659,16.9613,0,0,92.2,91.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({_off:false},0).to({regX:92,regY:91.8,scaleX:13.9865,scaleY:24.5528,rotation:16.9614,x:303.3,y:259.35,alpha:0.3398},32).wait(23));

	// sb_sc3_bg
	this.instance_4 = new lib.sb_sc3bg("synched",0);
	this.instance_4.setTransform(300,250,1,1,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(75));

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
	this.instance.setTransform(490.35,63.05,1,1,0,0,0,94.6,19.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).wait(80));

	// an_ariya
	this.instance_1 = new lib.an_ariya("synched",0,false);
	this.instance_1.setTransform(305.45,407.6,1,1,0,0,0,131.9,25.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(79));

	// an_sc2_if
	this.instance_2 = new lib.an_sc2if("synched",0,false);
	this.instance_2.setTransform(307.45,475.2,1,1,0,0,0,206.9,10.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(87));

	// sb_car1_sharp (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_25 = new cjs.Graphics().p("AhScbQgqgNgzgwQhlhggoizQgPgqgRhOQgjidgJi1IgGAjQgJAlgSAIQgWAKgfAIQg+AQgvgMQgMgDgNgSQgagjgEhJQgJg/gKhYQgTixgDh/QgRgagIhGQgQiMApjcQACgXAPggQAdg+BAgsQgcAFgigEQhEgJgZgsQgJgRgFgXQgKgtAYgZQAPgWAmgXQBMgvBwgKQAJg4AghIQBAiNB1hKQCQglEGgfQIOg+JVAfIBJADQBPAGAaAUICyBQQDMBhCFBaIAXgEQAcgDAdADQBbAKA8BGIBJgOQBigKB3ARICAApQCYA4BxBKIArAyQAqA5gBAmIAdAfQAjAnAYAsIAAQxQgIAugTAgQgfArgrAwQhWBfg5AXIj/A2QgcAHgogCQhOgFg8gzQjOAklNAwQqbBgp9A7IgiA/QgwBFhIAeQgiARhGANQhUARhlAAQg/AAhHgHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_graphics_25,x:304.2552,y:182.5804}).wait(66));

	// sb_ccc_copy
	this.instance_3 = new lib.sb_ccc("synched",0);
	this.instance_3.setTransform(510.05,251.5,2.3594,3.5524,16.9618,0,0,92.2,92);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({regX:92.1,scaleX:3.4189,scaleY:5.1477,rotation:16.9615,x:832.15,y:309.6,alpha:0.5898,startPosition:12},24,cjs.Ease.cubicOut).wait(42));

	// sb_ccc
	this.instance_4 = new lib.sb_ccc("synched",0);
	this.instance_4.setTransform(303.65,215.25,2.3594,3.5524,16.9618,0,0,92.2,92);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).to({regX:92.1,scaleX:3.4189,scaleY:5.1477,rotation:16.9615,x:41.7,y:48.2,alpha:0.5898,startPosition:12},24,cjs.Ease.cubicOut).wait(42));

	// an_bg2
	this.instance_5 = new lib.an_bg2("synched",0,false);
	this.instance_5.setTransform(300.1,249.95,1,1,0,0,0,308.4,256.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(91));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-6.9,702.6999999999999,513.9);


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
	this.instance.setTransform(301.05,407.6,1,1,0,0,0,131.9,25.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(83));

	// an_start
	this.instance_1 = new lib.an_start("synched",0,false);
	this.instance_1.setTransform(302.4,463.4,1.2463,1.2463,0,0,0,168.5,11.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(91));

	// sb_car1_sharp (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_25 = new cjs.Graphics().p("At6OCQhBgBiTgOIjbgXIk3ghQhPgJgqADQhCADgtAcIhTAEIhwAFQg+ADglAAQg9gKg9gNQgYgGgNgEQgUgHgMgLQgfgYgKg6IgGguQgEgegEgRIgQgwQgLgdgBgUQgBgfASgwIAfhPQAVgzAKgcQAhhfgHhJIgDgVQADhNAPgzQAchdA/gwQAbgUApgQQAYgKAxgRQAZgKBkgtQAvgVAmgOQAhgCA0gLQCIgcBZgEIBdgCQA1gDAkgOQAdgLAkgYIA8gsQBEgvCHhBQDVhmDWhXQA9gZAlgLQAegJAbgGIBAgEIB0gIQCZgUB2gNQF4grDqgGQFRgIEPA2QBZARCuAuQDPA2BiAjQA3ATAfAWQAUANANAPQAcAXAdAdQCQCOALAIQAsAlBeBCQBNA7AkA5QgDAnAEAoQAGA0AWBFIAnB0QAPAugEAaQgCANgIAWQgJAYgCALQgIAkATA9IANAuIgFAOIgFAVQgDANgEAIQgCAGgJAOQgHAMgDAHQgGAQABAmQABAkgIAQQgKAWglAVIg4AfQAmjDgUikQgMhvgqhCQgbgsgsghQgqgggzgSQhMgbg8APQg4AOgwA0QgLAIgKAJQgXAWgSAkQgNAZgNAqQgTA+gPA/IgNA6IgIAnQgKAzgCAeIAAAJQgGAwgDAvIgBANQgYgDgmgDQhzgJg7gDQhggEhNACQg2ABgiAIQgcAHgVALQhqAFh2AJIp0AsIhaAFIAAgFQgFhfgGg2QgJhSgPhBQgmijhahnQhHhShagcQg9gShaAEQg0ADgrALQguAEgsAPQhvAohOBiQg+BOgnB1QgZBPgbCLQgRBYgEA0QgGA+ALAmQAMAtAfAYIgRADIgEAAIhFACIgMAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_graphics_25,x:292.9817,y:238.6258}).wait(70));

	// sb_ccc_copy
	this.instance_2 = new lib.sb_ccc("synched",0);
	this.instance_2.setTransform(450.05,251.5,2.3594,3.5524,16.9618,0,0,92.2,92);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).wait(1).to({regY:92.2,scaleX:2.4794,scaleY:3.7332,rotation:16.9619,x:493.15,y:258.8,alpha:0.1492,startPosition:1},0).wait(1).to({scaleX:2.5959,scaleY:3.9085,rotation:16.962,x:535.15,y:265.2,alpha:0.2941,startPosition:2},0).wait(1).to({scaleX:2.7055,scaleY:4.0735,x:574.75,y:271.2,alpha:0.4303,startPosition:3},0).wait(1).to({scaleX:2.8054,scaleY:4.224,rotation:16.9621,x:610.8,y:276.65,alpha:0.5546,startPosition:4},0).wait(1).to({scaleX:2.8943,scaleY:4.3579,x:642.85,y:281.55,alpha:0.6652,startPosition:5},0).wait(1).to({regY:92,scaleX:2.9719,scaleY:4.4746,rotation:16.9622,x:671.15,y:284.95,alpha:0.7617,startPosition:6},0).wait(1).to({regY:92.2,scaleX:3.0013,scaleY:4.519,rotation:16.9621,x:681.5,y:287.4,alpha:0.7504,startPosition:7},0).wait(1).to({scaleX:3.0291,scaleY:4.5608,x:691.5,y:288.9,alpha:0.7397,startPosition:8},0).wait(1).to({scaleX:3.0553,scaleY:4.6002,rotation:16.962,x:700.9,y:290.4,alpha:0.7297,startPosition:9},0).wait(1).to({scaleX:3.0799,scaleY:4.6374,x:709.8,y:291.7,alpha:0.7202,startPosition:10},0).wait(1).to({scaleX:3.1031,scaleY:4.6723,x:718.2,y:292.95,alpha:0.7113,startPosition:11},0).wait(1).to({scaleX:3.125,scaleY:4.7052,rotation:16.9619,x:726.1,y:294.15,alpha:0.7029,startPosition:12},0).wait(1).to({scaleX:3.1455,scaleY:4.7362,x:733.45,y:295.25,alpha:0.695,startPosition:13},0).wait(1).to({scaleX:3.1649,scaleY:4.7653,x:740.5,y:296.3,alpha:0.6875,startPosition:14},0).wait(1).to({scaleX:3.1831,scaleY:4.7926,rotation:16.9618,x:747,y:297.3,alpha:0.6805,startPosition:15},0).wait(1).to({scaleX:3.2001,scaleY:4.8184,x:753.15,y:298.2,alpha:0.674,startPosition:16},0).wait(1).to({scaleX:3.2163,scaleY:4.8426,x:759,y:299.1,alpha:0.6678,startPosition:17},0).wait(1).to({scaleX:3.2314,scaleY:4.8653,x:764.4,y:299.9,alpha:0.662,startPosition:18},0).wait(1).to({scaleX:3.2455,scaleY:4.8867,rotation:16.9617,x:769.5,y:300.75,alpha:0.6565,startPosition:19},0).wait(1).to({scaleX:3.2589,scaleY:4.9067,x:774.35,y:301.4,alpha:0.6514,startPosition:20},0).wait(1).to({scaleX:3.2714,scaleY:4.9256,x:778.85,y:302.1,alpha:0.6466,startPosition:21},0).wait(1).to({scaleX:3.2831,scaleY:4.9433,x:783.15,y:302.75,alpha:0.6421,startPosition:22},0).wait(1).to({scaleX:3.2942,scaleY:4.9599,x:787.1,y:303.35,alpha:0.6378,startPosition:23},0).wait(1).to({scaleX:3.3045,scaleY:4.9755,x:790.8,y:303.9,alpha:0.6339,startPosition:24},0).wait(1).to({scaleX:3.3142,scaleY:4.9901,rotation:16.9616,x:794.3,y:304.45,alpha:0.6301,startPosition:25},0).wait(1).to({scaleX:3.3233,scaleY:5.0038,x:797.55,y:304.95,alpha:0.6266,startPosition:26},0).wait(1).to({scaleX:3.3318,scaleY:5.0166,x:800.6,y:305.4,alpha:0.6234,startPosition:27},0).wait(1).to({scaleX:3.3398,scaleY:5.0286,x:803.55,y:305.85,alpha:0.6203,startPosition:28},0).wait(1).to({scaleX:3.3472,scaleY:5.0398,x:806.25,y:306.25,alpha:0.6174,startPosition:29},0).wait(1).to({scaleX:3.3542,scaleY:5.0503,x:808.7,y:306.6,alpha:0.6148,startPosition:30},0).wait(1).to({scaleX:3.3607,scaleY:5.06,x:811.05,y:307,alpha:0.6123,startPosition:31},0).wait(1).to({scaleX:3.3667,scaleY:5.0691,x:813.25,y:307.3,alpha:0.6099,startPosition:32},0).wait(1).to({scaleX:3.3723,scaleY:5.0776,x:815.3,y:307.65,alpha:0.6078,startPosition:33},0).wait(1).to({scaleX:3.3775,scaleY:5.0854,rotation:16.9615,x:817.15,y:307.9,alpha:0.6058,startPosition:34},0).wait(1).to({scaleX:3.3823,scaleY:5.0927,x:818.9,y:308.15,alpha:0.6039,startPosition:35},0).wait(1).to({scaleX:3.3868,scaleY:5.0994,x:820.5,y:308.4,alpha:0.6022,startPosition:36},0).wait(1).to({scaleX:3.3909,scaleY:5.1055,x:822,y:308.65,alpha:0.6006,startPosition:37},0).wait(1).to({scaleX:3.3947,scaleY:5.1112,x:823.35,y:308.85,alpha:0.5992,startPosition:38},0).wait(1).to({scaleX:3.3981,scaleY:5.1164,x:824.55,y:309,alpha:0.5979,startPosition:39},0).wait(1).to({scaleX:3.4012,scaleY:5.1211,x:825.7,y:309.2,alpha:0.5967,startPosition:40},0).wait(1).to({scaleX:3.4041,scaleY:5.1254,x:826.75,y:309.35,alpha:0.5956,startPosition:41},0).wait(1).to({scaleX:3.4066,scaleY:5.1292,x:827.65,y:309.5,alpha:0.5946,startPosition:42},0).wait(1).to({scaleX:3.4089,scaleY:5.1327,x:828.45,y:309.65,alpha:0.5937,startPosition:43},0).wait(1).to({scaleX:3.4109,scaleY:5.1357,x:829.2,y:309.7,alpha:0.5929,startPosition:44},0).wait(1).to({scaleX:3.4127,scaleY:5.1384,x:829.85,y:309.85,alpha:0.5923,startPosition:45},0).wait(1).to({scaleX:3.4143,scaleY:5.1407,x:830.4,y:309.9,alpha:0.5917,startPosition:46},0).wait(1).to({scaleX:3.4156,scaleY:5.1427,x:830.9,y:309.95,alpha:0.5912,startPosition:47},0).wait(1).to({scaleX:3.4166,scaleY:5.1443,x:831.25,y:310,alpha:0.5908,startPosition:48},0).wait(1).to({scaleX:3.4175,scaleY:5.1456,x:831.6,y:310.1,alpha:0.5904,startPosition:49},0).wait(1).to({scaleX:3.4182,scaleY:5.1466,x:831.8,alpha:0.5902,startPosition:0},0).wait(1).to({scaleX:3.4186,scaleY:5.1473,x:832,y:310.15,alpha:0.59,startPosition:1},0).wait(1).to({scaleX:3.4189,scaleY:5.1477,x:832.1,alpha:0.5899,startPosition:2},0).wait(1).to({regX:92.1,regY:92,x:832.15,y:309.6,alpha:0.5898,startPosition:12},0).wait(17));

	// sb_ccc
	this.instance_3 = new lib.sb_ccc("synched",0);
	this.instance_3.setTransform(243.65,215.25,2.3594,3.5524,16.9618,0,0,92.2,92);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).wait(1).to({regY:92.2,scaleX:2.4794,scaleY:3.7332,rotation:16.9619,x:220.6,y:197.05,alpha:0.1133,startPosition:1},0).wait(1).to({scaleX:2.5959,scaleY:3.9085,rotation:16.962,x:198.4,y:178.7,alpha:0.2232,startPosition:2},0).wait(1).to({scaleX:2.7055,scaleY:4.0735,x:177.6,y:161.4,alpha:0.3266,startPosition:3},0).wait(1).to({scaleX:2.8054,scaleY:4.224,rotation:16.9621,x:158.5,y:145.65,alpha:0.421,startPosition:4},0).wait(1).to({scaleX:2.8943,scaleY:4.3579,x:141.6,y:131.65,alpha:0.5049,startPosition:5},0).wait(1).to({regY:92,scaleX:2.9719,scaleY:4.4746,rotation:16.9622,x:127.1,y:118.55,alpha:0.5781,startPosition:6},0).wait(1).to({regY:92.2,scaleX:3.0013,scaleY:4.519,rotation:16.9621,x:109.8,y:112.85,alpha:0.5789,startPosition:7},0).wait(1).to({scaleX:3.0291,scaleY:4.5608,x:93.7,y:106.65,alpha:0.5796,startPosition:8},0).wait(1).to({scaleX:3.0553,scaleY:4.6002,rotation:16.962,x:78.55,y:100.85,alpha:0.5803,startPosition:9},0).wait(1).to({scaleX:3.0799,scaleY:4.6374,x:64.2,y:95.35,alpha:0.581,startPosition:10},0).wait(1).to({scaleX:3.1031,scaleY:4.6723,x:50.8,y:90.15,alpha:0.5816,startPosition:11},0).wait(1).to({scaleX:3.125,scaleY:4.7052,rotation:16.9619,x:38.15,y:85.3,alpha:0.5821,startPosition:12},0).wait(1).to({scaleX:3.1455,scaleY:4.7362,x:26.2,y:80.7,alpha:0.5827,startPosition:13},0).wait(1).to({scaleX:3.1649,scaleY:4.7653,x:15,y:76.4,alpha:0.5832,startPosition:14},0).wait(1).to({scaleX:3.1831,scaleY:4.7926,rotation:16.9618,x:4.45,y:72.35,alpha:0.5837,startPosition:15},0).wait(1).to({scaleX:3.2001,scaleY:4.8184,x:-5.45,y:68.5,alpha:0.5841,startPosition:16},0).wait(1).to({scaleX:3.2163,scaleY:4.8426,x:-14.75,y:64.95,alpha:0.5845,startPosition:17},0).wait(1).to({scaleX:3.2314,scaleY:4.8653,x:-23.5,y:61.55,alpha:0.5849,startPosition:18},0).wait(1).to({scaleX:3.2455,scaleY:4.8867,rotation:16.9617,x:-31.75,y:58.45,alpha:0.5853,startPosition:19},0).wait(1).to({scaleX:3.2589,scaleY:4.9067,x:-39.45,y:55.45,alpha:0.5856,startPosition:20},0).wait(1).to({scaleX:3.2714,scaleY:4.9256,x:-46.75,y:52.65,alpha:0.586,startPosition:21},0).wait(1).to({scaleX:3.2831,scaleY:4.9433,x:-53.5,y:50.05,alpha:0.5863,startPosition:22},0).wait(1).to({scaleX:3.2942,scaleY:4.9599,x:-59.9,y:47.6,alpha:0.5866,startPosition:23},0).wait(1).to({scaleX:3.3045,scaleY:4.9755,x:-65.9,y:45.25,alpha:0.5868,startPosition:24},0).wait(1).to({scaleX:3.3142,scaleY:4.9901,rotation:16.9616,x:-71.55,y:43.1,alpha:0.5871,startPosition:25},0).wait(1).to({scaleX:3.3233,scaleY:5.0038,x:-76.85,y:41.1,alpha:0.5873,startPosition:26},0).wait(1).to({scaleX:3.3318,scaleY:5.0166,x:-81.8,y:39.15,alpha:0.5876,startPosition:27},0).wait(1).to({scaleX:3.3398,scaleY:5.0286,x:-86.35,y:37.45,alpha:0.5878,startPosition:28},0).wait(1).to({scaleX:3.3472,scaleY:5.0398,x:-90.65,y:35.8,alpha:0.588,startPosition:29},0).wait(1).to({scaleX:3.3542,scaleY:5.0503,x:-94.75,y:34.15,alpha:0.5881,startPosition:30},0).wait(1).to({scaleX:3.3607,scaleY:5.06,x:-98.5,y:32.8,alpha:0.5883,startPosition:31},0).wait(1).to({scaleX:3.3667,scaleY:5.0691,x:-102,y:31.45,alpha:0.5885,startPosition:32},0).wait(1).to({scaleX:3.3723,scaleY:5.0776,x:-105.2,y:30.2,alpha:0.5886,startPosition:33},0).wait(1).to({scaleX:3.3775,scaleY:5.0854,rotation:16.9615,x:-108.25,y:29,alpha:0.5888,startPosition:34},0).wait(1).to({scaleX:3.3823,scaleY:5.0927,x:-111.05,y:27.9,alpha:0.5889,startPosition:35},0).wait(1).to({scaleX:3.3868,scaleY:5.0994,x:-113.65,y:26.95,alpha:0.589,startPosition:36},0).wait(1).to({scaleX:3.3909,scaleY:5.1055,x:-115.95,y:26,alpha:0.5891,startPosition:37},0).wait(1).to({scaleX:3.3947,scaleY:5.1112,x:-118.15,y:25.2,alpha:0.5892,startPosition:38},0).wait(1).to({scaleX:3.3981,scaleY:5.1164,x:-120.2,y:24.4,alpha:0.5893,startPosition:39},0).wait(1).to({scaleX:3.4012,scaleY:5.1211,x:-122,y:23.7,alpha:0.5894,startPosition:40},0).wait(1).to({scaleX:3.4041,scaleY:5.1254,x:-123.6,y:23.1,alpha:0.5895,startPosition:41},0).wait(1).to({scaleX:3.4066,scaleY:5.1292,x:-125.15,y:22.55,startPosition:42},0).wait(1).to({scaleX:3.4089,scaleY:5.1327,x:-126.45,y:22.05,alpha:0.5896,startPosition:43},0).wait(1).to({scaleX:3.4109,scaleY:5.1357,x:-127.65,y:21.55,startPosition:44},0).wait(1).to({scaleX:3.4127,scaleY:5.1384,x:-128.65,y:21.2,alpha:0.5897,startPosition:45},0).wait(1).to({scaleX:3.4143,scaleY:5.1407,x:-129.5,y:20.85,startPosition:46},0).wait(1).to({scaleX:3.4156,scaleY:5.1427,x:-130.3,y:20.5,alpha:0.5898,startPosition:47},0).wait(1).to({scaleX:3.4166,scaleY:5.1443,x:-130.9,y:20.25,startPosition:48},0).wait(1).to({scaleX:3.4175,scaleY:5.1456,x:-131.4,y:20.1,startPosition:49},0).wait(1).to({scaleX:3.4182,scaleY:5.1466,x:-131.8,y:19.95,startPosition:0},0).wait(1).to({scaleX:3.4186,scaleY:5.1473,x:-132.05,y:19.85,startPosition:1},0).wait(1).to({scaleX:3.4189,scaleY:5.1477,x:-132.25,y:19.75,startPosition:2},0).wait(1).to({regX:92.1,regY:92,x:-132.3,y:19.2,startPosition:12},0).wait(17));

	// an_car1
	this.instance_4 = new lib.an_car1("synched",0,false);
	this.instance_4.setTransform(311.6,275.7,1.0672,1.0672,0,0,0,244.1,140.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).wait(87));

	// an_bg1
	this.instance_5 = new lib.an_bg1("synched",0,false);
	this.instance_5.setTransform(300,250.15,1,1,0,0,0,308.2,256.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(95));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-6.7,788.8000000000001,513.7);


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
	this.instance.setTransform(1211.1,2032.85,0.9893,0.9896,0,0,0,74.8,62.6);
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
p.nominalBounds = new cjs.Rectangle(0,0,2806.1,4402);


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
	this.instance.setTransform(150.6,134.2,0.5,0.5,0,0,0,1403.1,2201);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(719).to({mode:"single",startPosition:359},0).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("A4/1FMAx/AAAMAAAAqLMgx/AAAg");
	this.shape.setTransform(150,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A4/VGMAAAgqLMAx/AAAMAAAAqLg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(720));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-400.8,-841.3,1253,2076.1);
// library properties:
lib.properties = {
	id: '8E6E2E7554C041E6B394D1A9E196CBFB',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg1.jpg", id:"bg1"},
		{src:"images/bg2.jpg", id:"bg2"},
		{src:"images/bg3.jpg", id:"bg3"},
		{src:"images/car1.png", id:"car1"}
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