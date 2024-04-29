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


(lib.sc1bg = function() {
	this.initialize(img.sc1bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,269);


(lib.sc2bg = function() {
	this.initialize(img.sc2bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,928,600);


(lib.sc3bg = function() {
	this.initialize(img.sc3bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,533);


(lib.sc4bg = function() {
	this.initialize(img.sc4bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,141);// helper functions:

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
	this.instance.setTransform(-457,-8,1.2925,1.2925);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-457,-8,904.8,182.3);


(lib.mo_sc4title = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("A15C7IAAl1MArzAAAIAAF1g");
	mask.setTransform(140.225,18.675);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiRB6QAggtADhTIgYAGQgEgggMg1IAZgGQAKAmAFAdIAAh2IAeAAIAAB8QAJgqACggIAbAJIALgOIAWAOIAJgUIgmAAIAAggIAxAAIAHgBIAVAHQgHAigOAfIA3AAQgPgegMgsIAfgHIAHAZIASgRIAYAZIgfATIAHANQAMgIALgLIAYAaIgeAQQAMAOAUAMQgPALgIASIgNgJIAABGIgkAAIAeAIIgTApIA1AAIAAAfIjDAAIAAgfIAwAAQgCgUgKgUIAggJQALAWADAUIgUAHIArAAQAMgcAFgVIg2AAIgpAAIAAhEIgQALQgJgPgIgHIgDANIgTgHQAAATgCAYIACgCIAmA6IgaAaQgJgUgMgWQgKAtgYAgQgIgNgOgLgAAIAdIBIAAIAAgUIhIAAgABpgUQgNgNgKgPIAAAPIhLAAIAAgNQgKAQgKAKIB2AAIAAAAgAg3gcQAQgMANgQIgTgPg");
	this.shape.setTransform(265.35,22.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiSB6QASggAGg0QAFgiAAgyIAAheID2AAIAABVIg2AAIAYATQgZAIgoAJIAAARIBRgLIAGAdIhXANIAAASIBmgQIAGAeIhsARIAAAJQAAAKADACQADADAMAAIAuAAQAIAAADgFQADgGACgSQAMAKAVAEQgDAcgKAKQgKALgXAAIg2AAQgdAAgLgLQgJgKAAgcIAAgDIhFAKIgGgfIBLgLIAAgSIg+AJIgGgeIBEgKIAAgQQgRADgoAFQgCgJgHgSQBKgJAugOIiDAAIAAAJQAAB+ghA9QgPgMgTgHgAhPhXICqAAIAAgVIiqAAg");
	this.shape_1.setTransform(231.7,22.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AivC7IAAl1ICVAAQBYAAAzAmQA/AuAABkQAABig/AxQg2AqhaAAgAhWBwIA1AAQBzAAAAhxQAAg0gegdQgdgdg0AAIg5AAg");
	this.shape_2.setTransform(193.2,18.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiSC7IAAl1IEhAAIAABLIjIAAIAABIIC1AAIAABHIi1AAIAABQIDMAAIAABLg");
	this.shape_3.setTransform(151.375,18.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiDC7IAAl1IBZAAIAAEqICuAAIAABLg");
	this.shape_4.setTransform(116.2,18.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAlBXQgUg0gGhcIibAAIAAgkICZAAIAAg0IApAAIAAA0IAxAAQgJgMgcgVIAagVQAdAUAMAPIgWATIAeAAIAAAkIhVAAQAEBHAOAuQANAwARAAQAKAAADg4QAPAOARAHQgEAsgKAQQgLAPgXAAQgmAAgWg9gAiQBlIA7gJIAAhNIgwAAIAAgjICHAAIAAAjIgxAAIAABGIA5gMIADAjIiTAfg");
	this.shape_5.setTransform(81.95,22.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqBxQAPgLAAgRIAAjiICWAAIAACQIg4AAQAFAUAHAPQAVgOARgRIAYAaQggAYgOAJQAUAbAdAOQgPAOgKATQg+gkgXhlIgaAAIAABZIAtgKQAAARABASQhCARgOAIQgHgUgJgJgAAIgcIBOAAIAAgaIhOAAgAAIhUIBOAAIAAgZIhOAAgAiQB1IAAj8IBfAAIAADjIg/AAIAAAZgAhwA7IAgAAIAAgiIggAAgAhwgGIAgAAIAAggIggAAgAhwhGIAgAAIAAggIggAAg");
	this.shape_6.setTransform(48.95,23.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhoCIQAQgLAKgWIAKAEIAAhmIBCAAIAGgJIgTAAIAAgjIgJAIIgPgPIAAArIgaAAIAAgiIgIAGQgFgMgIgMIAAAYQAAB5gfA6QgQgMgPgGQAcgzAAhuIAAheIB2AAIgHgPIAggJQAJAMAEAMIBtAAIAAAdIhBAAIAHANIAvAAIAAAOIgxAAIAAAIIApAAIAAAMIgpAAIAAAHIApAAIAAANIgpAAIAAAGIAzAAIAAAPIh8AAIAAACIAdAEIgKAHIBXAAIAAA4IiZAAIAAAIIC4AAIAAAPIi4AAIAAAIICuAAIgBAKQgDAfgIAIQgHAGgMABQgLABgTgBQgBgJgDgFIgQAHQgFgMgMgOIATgHIiAAAIARAHQgLAYgPALgABQCBIAJAAQAEAAADgCQADgFACgOIglAAQALALAFAKgAgjAvIB3AAIAAgIIh3AAgAgjAbIB3AAIAAgIIh3AAgAAMgXIAqAAIAAgGIgqAAgAAMgqIAqAAIAAgHIgqAAgAgVhaQgIAOgKALIAAAKQAVgQAPgZIglAAgAhWg7QAXgQAOgVIglAAgAAMg9IAqAAIAAgIIgqAAgAAXhbIgFAIIAlAAIgFgJIAPgEIg9AAgAgtB1IAagGQAJANADAQIgcAHQgCgNgIgRgAgBB1IAYgHQAMARACALIgZAIQgEgOgJgPg");
	this.shape_7.setTransform(14.875,22.275);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc4title, new cjs.Rectangle(0,0,280.5,37.4), null);


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
	this.shape.setTransform(445.6823,291.7752,1.3137,4.8476,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape_1.setTransform(-525.0416,-17.501,1.1702,4.8477);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.instance = new lib.sc3bg();
	this.instance.setTransform(-696,-381,2.2227,2.2226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CA0000").ss(1,1,1).p("EkI1gtPMIRrAAAMAAABafMoRrAAAg");
	this.shape_2.setTransform(351.4,240.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("EkI1AtPMAAAhaeMIRrAAAMAAABaeg");
	this.shape_3.setTransform(351.4,240.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1344.6,-1293.6,3392,2861.5);


(lib.mo_sc3title = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAIC+IAAkfIhlAQIAAhHIC7gmIAAF8g");
	this.shape.setTransform(9.425,19.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABjCPIAAgLIjGAAIAAALIgjAAIAAkdIENAAIAAEdgAhjBlIDGAAIAAjTIjGAAIAAB+gAgLBdQgZAAgIgGQgKgHABgTIAAglQgLAHgQAKQgIgNgLgMQAXgKAQgPIgeAAIAAgXIAyAAIAHgNIgvAAIAAgWIAVAAQgDgNgJgMIAWgIQANARACAKIgRAGIAcAAQAHgSACgUIAeAEQgDAQgFASIAVAAIANghIAdAHIgPAaIAZAAIAAAWIhRAAIgGANIBgAAIAAAXIghAAQAYAQAKANIgUARQgKgLgUgRIAAAEQgCAhgFAFQgGAGgKABQgJABgPgBQgBgMgEgHIARABQAEAAACgCQACgDABgJIgoAAIAAAiQAAAHADABQAEACAKAAIArAAQAIAAACgEQADgDABgOQALAHANACQgCAVgHAHQgHAHgTAAgAggAFIBEAAIgTgOIglAAIgMAOgAhjAQIAAAAg");
	this.shape_1.setTransform(278.5,26.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgICVIAAiJIAyAAIADggIgtAAIAAhxICKAAIAABxIg2AAIgHAgIBFAAIAACHIgmAAIAAgLIhSAAIAAANgAAaBmIBSAAIAAg5IhSAAgAAig1IBCAAIAAguIhCAAgAiKBqIAugIIAAhPIgpAAIAAgfIApAAIAAgXIgYAAIAAgOIgPANQgFgUgJgSQApgeAWgsIAcANIgGALQAfASASASIgPAeIgIgHIAAAeIgbAAIAAAXIAmAAIAAAfIgmAAIAABKIAogIIACAeIhwAYgAhkhDIBAAAQgSgPgXgPQgLARgMANgAiEAlIAXgGQAIAaAEAcIgZAHQgBgWgJghgAg7BRQAJghACgVIAbAIIgQA1g");
	this.shape_2.setTransform(244.725,25.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiKCBQAPgcAAhBIAAhhIA5AAIAAhWIAkAAIAABWIA1AAIAACqQAAANgEAGQgDAIgJADQgLAHgmAAQgDgQgKgRIAmABQAHAAAAgGIAAgrIhHATIgJgaQgDA+gRAcQgPgOgNgFgAhaA0IBQgSIAAhBIhQAAgAA9CSQgCgTgHgTIArABQAIAAAAgIIAAj0IAlAAIAAD0QgBARgDAIQgDAIgKAFQgNAHgmAAIgLAAgAAwBCIAAixIAiAAIAACxgAhYAFIAPgVQAiAGAWANIgRAZQgSgMgkgLgAgShPQASgdAGgYIAdAMQgOAfgOAWgAiBh5IAcgJQAQAiAGASIgfALQgFgUgOgig");
	this.shape_3.setTransform(211.3,26.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3BvQAwgcAQg5QAKgmAChSIgsAAIAAglICqAAIgBATQgDB5gEAuQgEAxgIANQgLAPgSAEQgMACgigBQgCgWgKgQIAnABQAIAAAFgHQAGgHAEgqQADgrAChfIgxAAQgBBbgOAtQgUBCg0AiQgKgTgQgMgAh8BDQAQgLABgQIAAhFIghAGIgGgjIAngHIAAhMIAkAAIAABFIAzgJIAGAhIg5AMIAABMIA0gVQABAOAEATQhUAngJAJQgFgRgMgQg");
	this.shape_4.setTransform(178.3,26.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggCSQgsAAgQgLQgQgMgBgiIAAhyIgTAOQgIgWgMgOQAdgSAagZQAbgbAQgcIAiANIgIANIBIAAIAHgBIAXASQgSAagVAVIBOAAIAAB2IglAAIAAgLIiZAAIAAAlQABAPAGAEQAIAEAaAAIBqAAQAWAAAHgIQAGgIAEgeQATAKAQADQgFAogOANQgOAOgnAAgAAWAQIA6AAIAAglIg6AAgAhJAQIA8AAIAAglIg8AAgAhLg3IBHAAQALgLAOgTIhGAAQgOATgMALg");
	this.shape_5.setTransform(145.45,25.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiMByQA1gEAugLQgZgOgWgXIAOgGIgwAAIAAgfIDNAAIAHgCIAaAQQgVAigoAYQApAJAyAEQgMAOgLAWQhEgHgygSQg4AThKAIQgGgVgJgNgAAHBTQAdgMARgPIhhAAQAUAPAfAMgAATAMIAAhGIgMANIgMgSIAAAGIgaAAIAAAMIAaAAIAAAXIgaAAIAAALIAjAAIAAAXIh4AAIAAhGQgEAFgHAGQgHgPgLgMQAegcAPgtIAdAIIgKAZIAYAAIgJgYIAfgIIAOAgIAWAAIAAAXIggAAIAAANIAaAAIAAAAQAZgcAOgpIAdAIIgJAZIAYAAQgEgNgGgKIAfgIQAJAQAFAPIAdAAIAAAXIgnAAIAAANIAfAAIAAAVIgfAAIAAAMIAfAAIAAAXIgfAAIAAALIArAAIAAAXgAAygLIAXAAIAAgLIgXAAgAhUgLIAXAAIAAgLIgXAAgAAygtIAXAAIAAgMIgXAAgAhUgtIAXAAIAAgMIgXAAgAAyhOIAXAAIAAgNIgXAAgAhUhOIAXAAIAAgNIgXAAg");
	this.shape_6.setTransform(111.975,26.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAFBtIAvABQAJAAAAgJIAAiSIhgAAIAAgmIBgAAIAAg/IAnAAIAAA/IArAAIAAAmIgrAAIAACTQAAAPgEAJQgEAIgKAFQgPAHguABQgEgTgMgTgAiOBhIAAjVIBkAAIAAC2IhBAAIAAAfgAhrAgIAdAAIAAhyIgdAAgAgcgLIAegMQAdApAIAhIgiAPQgFghgcgsg");
	this.shape_7.setTransform(79.75,26.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah6C7QAnhZA5hiQAuhTAYgcIi/AAIAAhLIEnAAIAAA7Qg1BMgyBaQgwBagWA6g");
	this.shape_8.setTransform(44.075,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc3title, new cjs.Rectangle(0,0.7,292.1,40.3), null);


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
	this.shape.setTransform(1021.5203,716.5248,3.8184,5.6607,44.9997);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-313.7,0,313.7,0).s().p("EgxAAxBMAAAhiBMBiBAAAMAAABiBg");
	this.shape_1.setTransform(1021.5203,716.5248,3.8184,5.6607,44.9997);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("ElIMBANMGIYmIZMEIBEIBMmIYGIYg");
	this.shape_2.setTransform(1093.05,741.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-844.8,-844.8,844.8,844.8).s().p("ElIMBAMMGIYmIXMEIBEH/MmIYGIYg");
	this.shape_3.setTransform(1093.05,741.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("ElH2BAiMGIYmIYMEHVEHVMmIYGIYg");
	this.shape_4.setTransform(1164.575,766.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-842.6,-842.6,842.7,842.6).s().p("ElH2BAiMGIYmIYMEHVEHVMmIYGIYg");
	this.shape_5.setTransform(1164.575,766.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("ElHgBA4MGIYmIYMEGpEGpMmIYGIYg");
	this.shape_6.setTransform(1236.1,792.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-840.4,-840.4,840.5,840.4).s().p("ElHgBA4MGIYmIYMEGpEGpMmIYGIYg");
	this.shape_7.setTransform(1236.1,792.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("ElHKBBOMGIYmIYMEF9EF9MmIYGIYg");
	this.shape_8.setTransform(1307.625,817.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-838.2,-838.2,838.3,838.3).s().p("ElHKBBOMGIYmIYMEF9EF9MmIYGIYg");
	this.shape_9.setTransform(1307.625,817.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("ElG0BBkMGIYmIYMEFREFRMmIYGIYg");
	this.shape_10.setTransform(1379.125,842.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-836,-836,836.1,836.1).s().p("ElG0BBkMGIYmIYMEFREFRMmIYGIYg");
	this.shape_11.setTransform(1379.125,842.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("ElGeBB6MGIYmIYMEElEElMmIYGIYg");
	this.shape_12.setTransform(1450.675,867.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-833.8,-833.8,833.9,833.9).s().p("ElGeBB6MGIYmIYMEElEElMmIYGIYg");
	this.shape_13.setTransform(1450.675,867.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("ElGJBCQMGIYmIYMED7ED5MmIZGIYg");
	this.shape_14.setTransform(1522.2,892.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-831.6,-831.6,831.7,831.7).s().p("ElGJBCQMGIZmIYMED6ED5MmIYGIYg");
	this.shape_15.setTransform(1522.2,892.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("ElFzBCmMGIYmIZMEDPEDPMmIYGIYg");
	this.shape_16.setTransform(1593.725,918.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-829.5,-829.5,829.5,829.5).s().p("ElFzBClMGIYmIXMEDPEDNMmIYGIZg");
	this.shape_17.setTransform(1593.725,918.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("ElFdBC7MGIYmIYMECjECjMmIYGIYg");
	this.shape_18.setTransform(1665.225,943.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-827.3,-827.3,827.3,827.3).s().p("ElFdBC7MGIYmIYMECjECjMmIYGIYg");
	this.shape_19.setTransform(1665.225,943.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("ElFHBDRMGIYmIYMEB3EB3MmIYGIYg");
	this.shape_20.setTransform(1736.775,968.575);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-825.1,-825.1,825.2,825.1).s().p("ElFHBDRMGIYmIYMEB3EB3MmIYGIYg");
	this.shape_21.setTransform(1736.775,968.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("ElExBDnMGIYmIYMEBLEBLMmIYGIYg");
	this.shape_22.setTransform(1808.3,993.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-822.9,-822.9,823,822.9).s().p("ElExBDnMGIYmIYMEBLEBLMmIYGIYg");
	this.shape_23.setTransform(1808.3,993.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("ElEbBD9MGIYmIYMEAfEAfMmIYGIYg");
	this.shape_24.setTransform(1879.8,1019);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-820.7,-820.7,820.8,820.8).s().p("ElEbBD9MGIYmIYMEAfEAfMmIYGIYg");
	this.shape_25.setTransform(1879.8,1019);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("ElEFBETMGIYmIYMD/zD/zMmIYGIYg");
	this.shape_26.setTransform(1951.325,1044.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-818.5,-818.5,818.6,818.6).s().p("ElEFBETMGIYmIYMD/zD/zMmIYGIYg");
	this.shape_27.setTransform(1951.325,1044.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("ElDvBEpMGIYmIYMD/HD/HMmIYGIYg");
	this.shape_28.setTransform(2022.875,1069.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-816.3,-816.3,816.4,816.4).s().p("ElDvBEpMGIYmIYMD/HD/HMmIYGIYg");
	this.shape_29.setTransform(2022.875,1069.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("ElDZBE/MGIYmIZMD+bD+dMmIYGIYg");
	this.shape_30.setTransform(2094.375,1094.65);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-814.2,-814.2,814.2,814.2).s().p("ElDZBE+MGIYmIXMD+bD+cMmIYGIXg");
	this.shape_31.setTransform(2094.375,1094.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("ElDEBFUMGIYmIYMD9xD9wMmIZGIZg");
	this.shape_32.setTransform(2282.45,1155.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-812,-812,812,812).s().p("ElDDBFVMGIXmIYMD9xD9vMmIYGIZg");
	this.shape_33.setTransform(2282.45,1155.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("ElDEBFUMGIYmIYMD9xD9wMmIZGIYg");
	this.shape_34.setTransform(2398.95,1190.45);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-812,-812,812,812).s().p("ElDDBFUMGIXmIXMD9xD9vMmIZGIZg");
	this.shape_35.setTransform(2398.95,1190.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("ElDEBFUMGIZmIYMD9vD9wMmIYGIYg");
	this.shape_36.setTransform(2515.5,1225.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-812,-812,812,812).s().p("ElDDBFVMGIXmIZMD9xD9xMmIZGIXg");
	this.shape_37.setTransform(2515.5,1225.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-812,-812,812,812).s().p("ElDDBFVMGIYmIYMD9vD9vMmIXGIYg");
	this.shape_38.setTransform(2632,1261);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("ElDEBFVMGIYmIZMD9wD9wMmIYGIYg");
	this.shape_39.setTransform(2748.55,1296.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-812,-812,812,812).s().p("ElDEBFUMGIYmIXMD9xD9vMmIZGIYg");
	this.shape_40.setTransform(2748.55,1296.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("ElDEBFUMGIYmIYMD9wD9wMmIYGIYg");
	this.shape_41.setTransform(2865.05,1331.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-812,-812,812,812).s().p("ElDEBFVMGIYmIYMD9xD9vMmIZGIYg");
	this.shape_42.setTransform(2865.05,1331.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("ElDEBFUMGIYmIYMD9wD9wMmIYGIZg");
	this.shape_43.setTransform(2981.6,1366.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("ElDEBFUMGIZmIYMD9wD9wMmIZGIZg");
	this.shape_44.setTransform(3098.15,1402.15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-812,-812,812,812).s().p("ElDDBFUMGIYmIYMD9wD9wMmIYGIYg");
	this.shape_45.setTransform(3098.15,1402.15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("ElDEBFUMGIZmIYMD9wD9wMmIZGIYg");
	this.shape_46.setTransform(3214.65,1437.45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-812,-812,812,812).s().p("ElDEBFVMGIZmIZMD9vD9wMmIYGIZg");
	this.shape_47.setTransform(3214.65,1437.45);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-812,-812,812,812).s().p("ElDEBFUMGIZmIXMD9wD9wMmIZGIXg");
	this.shape_48.setTransform(3331.2,1472.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("ElDEBFVMGIYmIZMD9xD9xMmIZGIXg");
	this.shape_49.setTransform(3447.7,1508.05);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-812,-812,812,812).s().p("ElDDBFVMGIXmIYMD9xD9vMmIZGIYg");
	this.shape_50.setTransform(3447.7,1508.05);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("ElDEBFVMGIZmIZMD9vD9xMmIYGIXg");
	this.shape_51.setTransform(3564.25,1543.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-812,-812,812,812).s().p("ElDEBFVMGIYmIYMD9wD9wMmIXGIYg");
	this.shape_52.setTransform(3564.25,1543.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-812,-812,812,812).s().p("ElDEBFUMGIYmIXMD9wD9vMmIYGIZg");
	this.shape_53.setTransform(3680.75,1578.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:3.8184,rotation:44.9997,x:1021.5203,y:716.5248}},{t:this.shape,p:{scaleX:3.8184,rotation:44.9997,x:1021.5203,y:716.5248}}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:2165.897,y:1119.8452}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:2165.897,y:1119.8452}}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34,p:{x:2398.95,y:1190.45}}]},1).to({state:[{t:this.shape_37,p:{x:2515.5,y:1225.7}},{t:this.shape_36,p:{x:2515.5,y:1225.7}}]},1).to({state:[{t:this.shape_38},{t:this.shape_36,p:{x:2632,y:1261}}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41,p:{x:2865.05,y:1331.6}}]},1).to({state:[{t:this.shape_37,p:{x:2981.6,y:1366.9}},{t:this.shape_43}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_48},{t:this.shape_34,p:{x:3331.2,y:1472.75}}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_53},{t:this.shape_41,p:{x:3680.75,y:1578.6}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).to({state:[{t:this.shape_1,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}},{t:this.shape,p:{scaleX:3.6606,rotation:44.9996,x:3797.297,y:1613.8952}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1082.1,-1387.1,6948.1,5069.7);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.035,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape.setTransform(725.2263,436.5733,1.0319,1.5094,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape_1.setTransform(139.648,332.9577,0.9556,1.5094);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.instance = new lib.sc2bg();
	this.instance.setTransform(0,0,0.9431,0.9431);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CA0000").ss(1,1,1).p("ECfIAtQMk+PAAAEifHgtPME+PAAA");
	this.shape_2.setTransform(823.175,253.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ECfIAtPMk+QAAAMhnzAAAMAAAhadMBnzAAAME+QAAAMBn0AAAMAAABadg");
	this.shape_3.setTransform(823.225,253.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-859.6,-64.4,3365.7,898.3);


(lib.mo_sc2title = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AA5B/IAAiQQAAgZgJgLQgLgNgXAAQglAAghAYIAACpIhJAAIAAj4IA7AAIAIAaQAxgeAzAAQAsgBAYAXQAYAWAAA3IAACZg");
	this.shape.setTransform(210.6,21.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhnBgQgmghAAg/QAAg9AmgiQAnghBAAAQBBAAAmAhQAnAiAAA9QAAA+gnAiQgmAhhBAAQhAAAgnghgAgvgxQgTASABAfQgBAeAUAUQASATAdAAQAeAAARgTQASgUAAgeQAAgggTgSQgSgSgdAAQgdAAgSATg");
	this.shape_1.setTransform(178.6,21.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjCtIAAj3IBIAAIAAD3gAgohtIAAg/IBRAAIAAA/g");
	this.shape_2.setTransform(155.9,16.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcCKQgZgTAAgvIAAhsIgqAAIAAg6IAtAAIAIg/IA9AAIAAA/IBNAAIAAA6IhNAAIAABfQAAAVAIAIQAHAKAWAAQATAAAVgHIAAA6QgaAJgdAAQgrAAgagUg");
	this.shape_3.setTransform(138.3,18.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhmBgQgnghAAg/QAAg9AngiQAnghBAAAQBBAAAlAhQAnAiAAA9QAAA+gnAiQglAhhBAAQhAAAgnghgAgvgxQgSASAAAfQAAAfATATQATATAdAAQAdAAARgTQATgUgBgeQAAgfgSgTQgTgSgdAAQgdAAgSATg");
	this.shape_4.setTransform(113.25,21.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACCCdQgMiCgRhsQgnBvgbBhIhGAAQgahegnhyQgRBigMCMIhJAAQASi8AYh9IBsAAQAuCRAGAeQAHgiAtiNIBtAAQAYB9ASC8g");
	this.shape_5.setTransform(75.4,18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhdAjIAAhFIC7AAIAABFg");
	this.shape_6.setTransform(42.3,19.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag3CdQhHiXgriiIBRAAQAyCsAmBSQAnhbAxijIBSAAQg2C0hACFg");
	this.shape_7.setTransform(16.975,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTCOIAAgbIh7AAIAAgcIB7AAIAAgNIhdAAIAAhfIBZAAIAAgvIhlAAIAAhJID6AAIAABJIhwAAIAAALIBvAAIAAAZIhvAAIAAALIBiAAIAABfIhdAAIAAANIB7AAIABAcIh8AAIAAAbgAhMAyICWAAIAAgMIiWAAgAhMAPICWAAIAAgMIiWAAgAAzhfIAlAAIAAgUIglAAgAgShfIAjAAIAAgUIgjAAgAhYhfIAjAAIAAgUIgjAAg");
	this.shape_8.setTransform(249.15,61.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgpB4QAigFAegJQgQgMgIgOIAKgDIghAAIAAgZICDAAIAFgBIAWAKQgOAbgdAUQAaAHAhADQgNANgIARQgqgFgggQQgjAPgtAHQgGgSgKgLgAA4BeQANgGANgLIgxAAQAKAKANAHgAiHCQIAAhtIBeAAIAABVIAAALIhAAAIAAANgAhpBkIAiAAIAAgjIgiAAgAgMAvIAAhAIgMANQgGgMgMgPIAAAKIhdAAIAAgdIBdAAIAAAQQAagXANglIAPAEIAAgNIgqAAIAAgbIAqAAIAAgQIAhAAIAAA6IgbAAIAIADIgHANIAcAAIgEgOIAagGIAAg2IAhAAIAAAPIAqAAIAAAcIgqAAIAAAPIgXAAIAFAQIA0AAIAAAXIg2AAIAAALIAtAAIAAATIgtAAIAAAKIAtAAIAAASIgtAAIAAAMIA9AAIAAAVIh9AAIAAAFgAASAVIAhAAIAAgMIghAAgAASgJIAhAAIAAgKIghAAgAASgmIAhAAIAAgLIghAAgAiHAUIAAgcIBdAAIAAAcgAiVhAIAAgeIA1AAQgHgUgNgUIAdgNQAOAVAJAUIgUAMIA1AAIAAAeg");
	this.shape_9.setTransform(216.05,61);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhUCVIAAhVQgUAggUAUQgMgUgLgKQAhgbAXgxIgsAAIAAghIAzAAIAAgfIAgAAQgJgLgPgOIAOgNIgYAAQgPAXgRARQgPgSgMgIQAfgbARgrIAkAKIgHAPIBFAAIAAAfIguAAQARAOAIALIgYAXIgEgFIAAAaIArAAIAAAhIgrAAIAAAGQAYATAYAZIgXAdQgJgPgQgSIAABdgAACCUIAAi/ICHAAIAAC9IgmAAIAAgKIg9AAIAAAMgAAmBpIA9AAIAAgVIg9AAgAAmA5IA9AAIAAgUIg9AAgAAmAJIA9AAIAAgTIg9AAgAA+hRIAMgLIgaAAQgPAYgOAOQgTgPgMgGQAdgaAQgvIAlAJIgHAQIBVAAIAAAfIg0AAQATAQAGAIIgXAXQgMgRgYgTg");
	this.shape_10.setTransform(182.325,60.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhCBqIAoABQAHAAAAgIIAAj2IAoAAIAABNQAHAWAKATQAhgfAXggIAjAZQgvAugbAVQAoA7A4AYQgRAQgLATQg+ghgohMIAABbQgBAQgDAJQgEAJgKAFQgNAJgqAAQgDgTgLgXgAiWBbQA3gmAWhVIhCAAIAAgmIBQAAIAHgBIAYAJQgKA/gYAvQgYAvgiAZQgOgUgQgJg");
	this.shape_11.setTransform(149.5,61.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABWByIAMAAQABAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAhgIgQAAIAACAIgZAAIAAiAIgPAAIAACAIgZAAIAAiAIgOAAIAACEIggAAIAAiEIgNAAIAGAKIgTAaIgSgmIAACGIgiAAIAAh2QgPAqgOAUQgFgPgMgSQANgSAMgeQAMgcAGgdIgjAAIAAgjIAmAAIAAhBIAiAAIAABBIAfAAIAAAjIgfAAIAAAPIAaAnIAAgZIASAAIAAhyIChAAIAAByIAQAAIAAAhIgQAAIAABhQAAAWgKAHQgJAHgTAAQgCgQgJgSgABVgSIAQAAIAAhSIgQAAgAAtgSIAPAAIAAhSIgPAAgAAGgSIAOAAIAAhSIgOAAg");
	this.shape_12.setTransform(116.225,61.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNCUIAAhmIgQAIQgGgMgLgNIgCADIgSgeIAACRIgjAAIAAh3QgQArgQAVQgEgMgOgWQAPgRAMgfQANgcAHgdIgnAAIAAgjIAqAAIAAhBIAjAAIAABBIAkAAIAAASQAigjASgwIAkAKIgKAXIAyAAIAHAAIAYAKQgRAwggAlQAfAXAoAKQgNAOgJASIgGgCIAABnIgkAAIAAgKIhCAAIAAALgAAVBoIBCAAIAAgqIhCAAgAATAeIBKAAQgTgKgTgQQgSAQgSAKgAhCgoQAeAiAHAKIgKAPQAogQAdgWQgOgQgKgQQgJANgOAMQgHgJgPgMIgbAAgAAahPQAOAWAOAOQAPgRAMgVIg0AAg");
	this.shape_13.setTransform(83.05,61.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABdCUIAAgJIg9AAIAAAJIggAAIAAhmIgEACQgIgSgMgLQAigOAfgbQgMgPgKgRQgIALgNAMQgMgOgNgMQApggAUg6IAgALIgKAWIAzAAIAFgCIAXAMQgRAvgeAjQAeAXAgALQgMAMgKAVIgCgBIAABogAAgBqIA9AAIAAgpIg9AAgAAYAgIBPAAQgVgNgSgRQgUASgUAMgAAmhQQALASAPASQAOgRAMgWIgyAAgAiPBqIAugIIAAhPIgqAAIAAgfIAqAAIAAgXIgYAAIAAgOIgPAOQgDgRgKgWQApgeAVgsIAbANIgGAMQAfASARARIgPAeIgHgHIAAAeIgbAAIAAAXIAlAAIAAAfIglAAIAABKIAlgHIACAeIhsAYgAhphCIA/AAQgSgQgXgOQgJAOgNAQgAiIAlIAWgGQAIAYAEAeIgZAHQAAgUgJgjgAhBBRQAIgdADgYIAaAHIgQA1g");
	this.shape_14.setTransform(49.675,60.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABKB7QgbARghAJQgGgOgIgLIgJAXQgMgKgRgGIAEgIIhhATIgIggIAugIIAAhTIgoAAIAAgfIAoAAIAAgXIgbAAIAAgNIgCACQgMgMgQgKQASgOAQgWQAQgVAJgWIAhAJIgDAIIAvAsIAAgkIBFAAIgFgTIAggIQAGANADAOIA5AAIAAAgIiCAAIAAAZIASAAIAAgTIAeAAIAAATIAfAAIAAgTIAgAAIAAATIARAAIAAAfIgRAAIAAAsIhdAAIAAgsIgSAAIAAAMQAABVgQA3QAXgHAVgLQgQgQgNgXIAbgIIgaAAIAAgfIBiAAIAGAAIAXAIQgOAsgeAcQAWANAcAGQgMAKgLATQgegKgYgRgAgbBnQANgqAAhTIAAg/IgbATIANAAIAAAfIghAAIAAAXIAjAAIAAAfIgjAAIAABNIAhgFgABIBSQAQgOAJgPIgxAAQAIAOAQAPgABCgPIAfAAIAAgTIgfAAgAhnhCIA9AAQgKgOgZgWQgOAXgMANgAiEAlIAXgGQAKAfABAXIgYAIQgBgbgJgdgAg6BQQAIgaACgZIAaAFIgOAzg");
	this.shape_15.setTransform(16.525,60.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc2title, new cjs.Rectangle(0,-0.5,263.4,76.4), null);


(lib.an_line = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(255,255,255,0)").p("AVMAAMgqXAAA");
	this.shape.setTransform(7.2088,1,0.0458,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.212)").p("AlRAAIKjAA");
	this.shape_1.setTransform(34.875,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0.396)").p("Ao7AAIR3AA");
	this.shape_2.setTransform(58.3,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(255,255,255,0.545)").p("Ar+AAIX9AA");
	this.shape_3.setTransform(77.825,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0.667)").p("AueAAIc9AA");
	this.shape_4.setTransform(93.825,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,255,255,0.769)").p("AweAAMAg9AAA");
	this.shape_5.setTransform(106.625,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,255,255,0.843)").p("AyBAAMAkDAAA");
	this.shape_6.setTransform(116.575,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(255,255,255,0.902)").p("AzMAAMAmZAAA");
	this.shape_7.setTransform(124.1,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,255,255,0.941)").p("A0CAAMAoFAAA");
	this.shape_8.setTransform(129.45,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(255,255,255,0.973)").p("A0mAAMApNAAA");
	this.shape_9.setTransform(133.05,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,255,255,0.988)").p("A07AAMAp3AAA");
	this.shape_10.setTransform(135.225,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(255,255,255,0.996)").p("A1HAAMAqPAAA");
	this.shape_11.setTransform(136.35,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").p("A1LAAMAqXAAA");
	this.shape_12.setTransform(136.775,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").p("AVMAAMgqXAAA");
	this.shape_13.setTransform(136.825,1);
	this.shape_13._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(13).to({_off:false},0).wait(250));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,273.5,2);


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

	// MergedLayer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhkBZQAMgZABhCIAXABIgBAaQAFAQAIAIIAAhAIgqAAIAAgVIAlAAIAAgUIgfAAIAAgWIAfAAIAAgUIAXAAIAAAUIAfAAIAAAWIgfAAIAAAUIAkAAIAAAVIgfAAIAAAWIAdAAIAAAVIgdAAIAAAjQAOAEAZAAQBIAAATgBQgHAMgDANIhRAAQgeAAgRgFQgUgHgMgRQgDAWgHAPQgJgGgMgEgAAmA2QgSAAgGgGQgGgHAAgUIAAhtIBQAAIAABPIg4AAIAAAeQAAAHABACQACACAGAAIAaAAQAFAAACgEQACgFAAgOQAKAHAMACQgCAVgGAIQgGAHgPAAgAAgggIAfAAIAAgiIgfAAg");
	this.shape.setTransform(258.925,10.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#808080").s().p("AhhBGQAegLAMgWQAIgPACgfIgvAAIAAgYIC6AAIAAAYIg4AAIAAA/QAAAHACABQABACAGAAIASAAQAGAAABgGQACgHABgXQAJAHAOAEQgCAcgGAKQgGAKgQAAIgZAAQgSAAgGgHQgGgHAAgTIAAg/IgfAAQgDAmgLAUQgPAbgiAOQgFgKgLgKgAhJhBIAAgZICUAAIAAAZg");
	this.shape_1.setTransform(229.55,10.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#808080").s().p("AAvBSIgLADIgCgLIhRAFIgCgVIAmgBIAAgQIgvAAIAAA5IgZAAIAAg5IgIAAIAAgUIAIAAIAAgGIAZAAIAAAGIAvAAIAAgJIg6AAIAAhCICMAAIAABCIg7AAIAAAJIBKAAIAAA3QAAAPgIADQgHAEgTAAIgFgQgAA4BOIADAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAgBIAAgiIgVAAQALATAEASgAAMA4IAPgBIgFgKIASgEIgcAAgAAMgDIAiAAIAAgKIgiAAgAgtgDIAiAAIAAgKIgiAAgAAMgcIAiAAIAAgKIgiAAgAgtgcIAiAAIAAgKIgiAAgAAYg5IAAgJIgUAAIAAgUIAUAAIAAgLIAZAAIAAALIAtAAIAAAUIgtAAIAAAJgAgwg5IAAgJIgsAAIAAgUIAsAAIAAgLIAYAAIAAALIAWAAIAAAUIgWAAIAAAJg");
	this.shape_2.setTransform(200.15,9.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#808080").s().p("AgEBUQAFgJADgMIgNAKQgHgQgKgQIARgJQAJARAFALQAHgWAAgnIAAhLQApgHAWgLIAUASQgVAJgnAHIAAAhIA/AAIAAAXIgTAAIAABmIgZAAIAAhmIgTAAIAAADQAABFgVAfQgJgKgJgFgAg2BiIAAhGIgnAAIAAgVIAnAAIAAgPIgpAAIAAgVIAVAAQgCgKgEgMIARgEIgdAAIAAgUIAkAAIgGgRIAZgGIAKAXIAdAAIAAAUIgaAAIARADIgJAXIAVAAIAAAVIgjAAIAAAPIAfAAIAAAVIgfAAIAABGgAg2ghIgPAEIAfAAIAJgaIgfAAQAEAKACAMgAhhBIQALgQAHgVIATAFQgIAYgNATQgHgGgJgFg");
	this.shape_3.setTransform(68.175,9.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#808080").s().p("AAnA9IAMgLIgOAAQgFASgPALQgQAMgdAHQgEgMgJgIQApgHAMgVIguAAIAAgUIAPAAIAAg4IgBABQgFgIgHgHIAAAFIgTAAIAAAeIASgFIAEAVIgWAHIAAAyQAAARgHAGQgJAFgUAAQgCgPgEgKIAPAAQABAAABAAQABAAAAgBQABAAAAgBQAAAAAAgBIAAgrIgTAGIgGgYIAZgGIAAgkIgWAAIAAgXIAWAAIAAgoIAXAAIAAAoIATAAIAAAOQAZgUAMghIAWADIgFANIAbAAIADgBIAPAKQgIAOgIALIAjAAIAABNIAMAAIAAAUIgoAAQAgAYAKAJIgQAQQgJgKgkgcgAAsAOIgBAQIAVAAIAAgZIgGAJQgJgJgRgJQgJAKgKAJIgNgKIAAAZIASAAIACgQgAAAABQAOgKALgSIgZAAgAApgRQAOAHAJAIIAAgZIgTAAgAAAgvIAbAAQAFgFAEgKIgZAAg");
	this.shape_4.setTransform(38.85,10.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#808080").s().p("AhNBiIAAg9QAjgDAYgHIgdAAIAAACIgXAAIAAgoIgIAHQgFgJgKgHQAXgRAMgaIAXAFIgFAJIAjAAIgDgJIAWgFIAGAOIA9AAIAAAQIg8AAIAAAHIAyAAIAAAMIgyAAIAAAHIAyAAIAAALIgyAAIAAAHIBFAAIAAAQIhnAAIANAMQgTAGghAEIAAAHIAxAAIAAANIgxAAIAAAIIBrAAIAAgIIgxAAIAAgNIAxAAIAAgIIgyAAIAAgOIBLAAIAABAIgZAAIAAgFIhrAAIAAAFgAgvALIAuAAIAAgHIguAAgAgvgHIAuAAIAAgHIguAAgAgvgaIAuAAIAAgHIguAAgAAQg7IAAgmIAZAAIAAAJIA1AAIAAATIg1AAIAAAKgAgng9IAAgIIg1AAIAAgTIA1AAIAAgJIAYAAIAAAkg");
	this.shape_5.setTransform(9.375,9.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,269,20.1);


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
	this.shape.setTransform(249.9431,12.4206,0.9821,0.9821);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AAtCHQgig3gcgfIgrAAIAABWIhAAAIAAkNIB+AAQAvAAAcASQAlAWAAAyQAAAegTAWQgSAVgdAHQAqAsAkA3gAg7gEIAzAAQA3AAAAgoQAAgjg5AAIgxAAg");
	this.shape_1.setTransform(202.6289,12.4206,0.9821,0.9821);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A1A1A").s().p("AgfCHIAAjWIhZAAIAAg3IDxAAIAAA3IhZAAIAADWg");
	this.shape_2.setTransform(154.4062,12.4206,0.9821,0.9821);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A1A1A").s().p("AA+CHIh9i1IAAC1Ig/AAIAAkMIBLAAIBzCoIAAioIA/AAIAAEMg");
	this.shape_3.setTransform(106.0853,12.4451,0.9821,0.9821);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A1A1A").s().p("AhpCHIAAkNIDQAAIAAA3IiQAAIAAAzICDAAIAAAzIiDAAIAAA6ICTAAIAAA2g");
	this.shape_4.setTransform(58.1819,12.4206,0.9821,0.9821);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1A1A1A").s().p("AhwB9IAAg7QBEASAjAAQAfAAAOgFQAPgGAAgMQAAgTglgKIhDgRQgegIgRgSQgQgTAAgcQAAhRB4AAQAjAAA7AOIAAA4IgvgKQgZgEgaAAQgyAAAAAYQAAAPAcAIIBGASQBFASAAA2QAAApgeAWQgfAXg6AAQg2AAg4gPg");
	this.shape_5.setTransform(11.4324,12.4206,0.9821,0.9821);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.3,264.5,27.5);


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
	this.instance.setTransform(-1317,-279,3.3917,3.3917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1317,-279,3289.9,912.4);


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
	this.shape.setTransform(245.3527,11.6226,0.9832,0.9832);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AhcB2IAAjrIC3AAIAAAvIh/AAIAAAuIByAAIAAAsIhyAAIAAAzICBAAIAAAvg");
	this.shape_1.setTransform(199.9028,11.6226,0.9832,0.9832);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A1A1A").s().p("AA3B2IhuieIAACeIg3AAIAAjrIBBAAIBkCTIAAiTIA4AAIAADrg");
	this.shape_2.setTransform(156.9603,11.6472,0.9832,0.9832);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A1A1A").s().p("AhTB2IAAjrIA5AAIAAC8IBuAAIAAAvg");
	this.shape_3.setTransform(90.6905,11.6226,0.9832,0.9832);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A1A1A").s().p("AhTB2IAAjrIA5AAIAAC8IBuAAIAAAvg");
	this.shape_4.setTransform(53.6227,11.6226,0.9832,0.9832);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1A1A1A").s().p("ABDB2IgOgrIhuAAIgNArIg7AAQAoiCAyhpIBNAAQAzBrApCAgAgqAcIBPAAQgTg3gUgwQgWAzgSA0g");
	this.shape_5.setTransform(12.7695,11.6226,0.9832,0.9832);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,262,23.3);


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
	this.shape.graphics.f("#FFFFFF").s().p("AiDB0IAKgnIBcAAIAyjAIApAAIgTBIIBZAAIgKAmIhZAAIgXBSIBsAAIgKAng");
	this.shape.setTransform(204.525,12.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBVIAZABQAFAAABgFIAhh8IgYAAQgUAYgOANQgKgOgOgLQAnghAdg6IAjAIQgLAVgKAPIBRAAIAGgBIAaAEQgMAegRAiIgegFIAKgbIgbAAIgiB9QgHAagPAIQgOAHgcAAQACgVgFgRgAiIB7IAih+IgRAOQgCgVgHgSQAugkAkg6IAhALQgWAhgQATIgxC2gAhOBFQAbgZAWgwIAhAHQgYA1ggAhQgKgKgQgKgAA0AEIAlgLQAJAqgFApIgoANQAHgngIgug");
	this.shape_1.setTransform(175.825,13.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA7BmIgWgXIASgNIgOAAQgNAVgWANQgXAPgoAIQgBgQgKgOQAzgIASgTIg0AAIAIgeIAQAAIAThGQgDgJgGgIIgCAKIgVAAIgIAfIAWgGIgEAhIgcAHIgPA3QgGAZgOAJQgNAHgaAAQACgSgCgTIATAAQADABACgFIAMgsIgXAGIACglIAegFIALgoIgYAAIAJgiIAYAAIANgxIAkAAIgNAxIAVAAIgEAOQAkgYAYgmIAgAGQgEAIgGAHIAdAAIAGgCIASAOQgNARgOAOIAnAAIgZBfIAPAAIgIAeIgrAAQAfAcAFAHIgeAYQgFgIgOgPgAA+ARIgGATIAUAAIAIgcIgLAKQgIgJgQgKQgPAMgMAJQgEgFgIgHIgIAcIARAAQAEgHADgMgAANgCQAQgLAOgQIgXAAgABEgUQALAGAJAHIAGgWIgTAAgAAdg7IAdAAQAHgGAGgIIgbAAg");
	this.shape_2.setTransform(142.975,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFE54").s().p("AgXBhQgQAPgTAJQgFgNgIgLQAXgKAPgSIgXAAIAHgYIAmAAIAFgBIARAHIADgMIgmAAIAGgZIA2AAIgbgKIAJgHIgzAAIAHgcIA7AAIABgGIgqAAIAGgZIArAAIACgGIgzAAIAHgaIAXAAIgFgTIAegJQAFAKADAQIgHACIAnAAIgFgCQAOgRAFgKIAfAKIgUATIAdAAIgHAaIg3AAIgCAGIAyAAIgHAZIgyAAIgBAGIA8AAIgHAcIg2AAIAUAJIgZAWIgJgFIgDAJIAEAMQAUgNANgLIAWAUIgsAYQAOASAUAIQgOAKgQASQgUgMgMgZIgDAKQgDAMgEAGQgEAGgIAEQgLAFgbAAQABgLgCgQgAgTBdIAQABQADAAABgEIAJgjQgMAXgRAPgAh9B8IAWhVQgQAagOAOQAAgNgHgVQAegeAZgyIgaAAIAJgjIAdAAIAOg0IAiAAIgOA0IAYAAIgKAjIgYAAIgCAJIASArIgaAbIgEgZIgcBpg");
	this.shape_3.setTransform(109.175,12.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFE54").s().p("AhGBgQAbgJAPgQQANgOAIgYIggAAIAIgeIA3AAIABgQIAlgGQACANgCAJIAzAAIgJAeIhMAAIgFAOIBIAAIgEAMQgOAsgMAKQgJAHgNACQgNACgSgBQADgSgEgNIAVABQAGAAADgDQADgCAEgLIgpAAQgVAggrAQQgDgRgKgMgAh/B8IAXhXQgQAdgOAOQAAgQgFgWQAcgdAag1IgbAAIAJgjIAdAAIANgvIAfAAIgMAvIAXAAIgKAjIgXAAIgCAHQAHARAJAdIgbAZIgCgWIgdBsgAgigCIANgxIAbAAQABgJgBgIIATgDIgkAAIAIgeIA2AAIABgTIAkgEIAAAXIA0AAIgIAeIgjAAIATADIgMARIAcAAIgNAwIgjAAIAFgTIhVAAIgEAUgAAqgzIAbAAIAKgUIgmAAIABAUg");
	this.shape_4.setTransform(77.875,12.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFE54").s().p("AAWBZQASACAIgBQAGAAAEgDQAIgFANglIgZAAQAGAUAAAMIgfAKQABgOgEgVIAUgHIhyAAIgLAHIAUAHQgVAtgXATIgXgVQASgQAOgZIgUAKQgFgUgGgNQBAgaAyg7IhPAAIAJgiIAuAAQgDgNgIgQIAmgNQAJARAGARIgWAIIAbAAQANgTAMgXIAkAJIgTAhIBAAAIgWAwIAZAAIgWAuIAcAAIgEAOQgZBIgPAMQgLAJgPADQgHABgaAAQAEgUgGgPgAgZANIBZAAIAIgOIhRAAIgQAOgAATghIAqAAIAIgOIgnAAgAg3A7IAfgDQABAcgIAaIghAEQAIgbABgcgAgPA5IAegGQADAXgCAXIggAIQADgTgCgdg");
	this.shape_5.setTransform(45.2,12.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFE54").s().p("AiGByQgIgJgGgDQAeghAVhNIAUhOIBpAAIAJgkIAnAAIgJAkIAdAAQgLgLgKgHIAdgXQAWAOALANIgRAOIAcAAIgKAlIhPAAQgGAggCAbQATgXAOgaIAkAJQgdAxgoApQADAXAKAAQAHAAAOgsQAKAOAQAHQgOAlgNANQgNAMgVAAQgYAAgLgeQgTARgaAOQgHgQgMgPQAfgPAcgZQgBgpALg8IhDAAIgGAZIA/AAIgFANQgKAqgHAQQgHAUgFAGQgKAJgNADQgKACgVAAQAFgSgFgRQgTAxgaAbQgDgGgIgIgAhOAzIATABQAFAAAEgDQAEgFAKgjIgbAAQgJAbgGAPg");
	this.shape_6.setTransform(14.85,12.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,217.8,25.8);


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
	this.shape.graphics.f("#00023C").s().p("A38EJIDDoRMAs2AAAIAAIRg");
	this.shape.setTransform(161.875,34.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.6,8,306.59999999999997,53);


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

	// Layer_1
	this.instance = new lib.mo_sc4title();
	this.instance.setTransform(140.8,31.9,1,1,0,0,0,140.2,18.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.357)",3,3,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(270));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,11.2,292,49);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1,startPosition:21},21,cjs.Ease.cubicOut).to({startPosition:261},240).to({_off:true},1).wait(8));

	// an_line_copy
	this.instance_1 = new lib.an_line("synched",0,false);
	this.instance_1.setTransform(141.15,64.6,1.0402,1,180,0,0,136.7,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(261).to({startPosition:261},0).to({_off:true},1).wait(8));

	// an_line
	this.instance_2 = new lib.an_line("synched",0,false);
	this.instance_2.setTransform(141.2,-1.4,1.0402,1,0,0,0,136.7,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(261).to({startPosition:261},0).to({_off:true},1).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-2.4,292.70000000000005,68);


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
	this.shape.graphics.lf(["#3B5267","rgba(59,82,103,0)"],[0.075,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape.setTransform(841.2991,319.4844,3.1251,1.1438,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3B5267","rgba(59,82,103,0)"],[0,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape_1.setTransform(-321.7447,279.0883,1.414,1.042);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(270));

	// sb_sc4_bg
	this.instance = new lib.sb_sc4bg("synched",0);
	this.instance.setTransform(1003.3,703.55,2.0185,2.0185,0,0,0,301.8,257.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:301.9,scaleX:2.4193,scaleY:2.4193,x:1262.45,y:728.4},21,cjs.Ease.cubicOut).wait(249));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-573.5,4.8,2188.9,615.8000000000001);


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

	// mo_sc3_title
	this.instance = new lib.mo_sc3title();
	this.instance.setTransform(146,20.5,1,1,0,0,0,146,20.5);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.357)",3,3,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(88).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-1.3,304,52);


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

	// an_line_copy
	this.instance = new lib.an_line("synched",0,false);
	this.instance.setTransform(147.65,69.6,1.0834,1,180,0,0,136.7,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(78).to({startPosition:78},0).to({_off:true},1).wait(10));

	// an_line
	this.instance_1 = new lib.an_line("synched",0,false);
	this.instance_1.setTransform(147.75,0.4,1.0834,1,0,0,0,136.7,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(78).to({startPosition:78},0).to({_off:true},1).wait(10));

	// sb_sc3_title
	this.instance_2 = new lib.sb_sc3title("synched",0);
	this.instance_2.setTransform(136.35,49.55,1,1,0,0,0,135.1,35.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1,startPosition:23},23,cjs.Ease.cubicOut).to({startPosition:78},55).to({_off:true},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.6,303,71.19999999999999);


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

	// mo_sc2_title
	this.instance = new lib.mo_sc2title();
	this.instance.setTransform(95.45,21.15,1,1,0,0,0,115,37.9);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.357)",3,3,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(87).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-19.3,274,88);


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

	// an_line_copy
	this.instance = new lib.an_line("synched",0,false);
	this.instance.setTransform(113.55,91.7,0.9809,1,180,0,0,136.4,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(77).to({startPosition:77},0).to({_off:true},1).wait(10));

	// an_line
	this.instance_1 = new lib.an_line("synched",0,false);
	this.instance_1.setTransform(113.55,-17.2,0.9809,1,0,0,0,136.6,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(77).to({startPosition:77},0).to({_off:true},1).wait(10));

	// sb_sc2_title
	this.instance_2 = new lib.sb_sc2title("synched",0);
	this.instance_2.setTransform(144.25,36.45,1,1,0,0,0,142.7,20.4);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1,startPosition:16},16,cjs.Ease.cubicOut).to({startPosition:77},61).to({_off:true},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.9,-18.2,275.9,110.9);


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

	// sc2_bg
	this.instance = new lib.sb_sc2bg("synched",0);
	this.instance.setTransform(50.4,992.6,1.8884,1.8884,0,0,0,329.9,283.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:330.1,regY:283.1,scaleX:2.4133,scaleY:2.4133,x:162.35,y:973.9},21,cjs.Ease.cubicOut).wait(69));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2708.7,135.2,8122.5,2168);


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

	// sb_sc1_sentra
	this.instance = new lib.sb_sc1sentra("synched",0);
	this.instance.setTransform(140.1,35.65,1,1,0,0,0,134.7,14);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({y:48.15,alpha:1},14).wait(44));

	// sb_sc1_allnew
	this.instance_1 = new lib.sb_sc1allnew("synched",0);
	this.instance_1.setTransform(140.55,-0.7,1,1,0,0,0,133.2,11.8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:11.8,alpha:1},15).wait(45));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.4,-12.5,264.5,72.8);


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
p.nominalBounds = new cjs.Rectangle(0,-0.3,269,32);


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
p.nominalBounds = new cjs.Rectangle(-1317,-279,3326.6,912.4);


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
	this.instance_1.setTransform(270.75,28,1,1,0,0,0,9.7,12.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(38));

	// an_btn_arrow
	this.instance_2 = new lib.an_btnarrow("synched",0);
	this.instance_2.setTransform(262.95,28,1,1,0,0,0,9.7,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39));

	// sb_btn_bg
	this.instance_3 = new lib.sb_btnbg();
	this.instance_3.setTransform(464.8,26.5,1,1,0,0,0,161.8,34.5);
	this.instance_3.alpha = 0;
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,0.098)",7,7,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:154.25,y:27.5,alpha:1},12,cjs.Ease.cubicOut).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-18,689.6,126);


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
	this.instance.setTransform(1243.6,380.95,3.9433,3.9433,0,0,0,138.1,56.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(81).to({startPosition:81},0).to({_off:true},1).wait(180));

	// an_sc4_bg
	this.instance_1 = new lib.an_sc4bg("synched",0,false);
	this.instance_1.setTransform(208.55,109.45,1.7805,1.7805,0,0,0,329,262.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({startPosition:89},0).to({_off:true},1).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1398.4,-349.2,3897.4,1096.4);


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

	// an_sc3_title
	this.instance = new lib.an_sc3title("synched",0,false);
	this.instance.setTransform(1086.8,312.9,3.8328,3.8328,0,0,0,136.8,48.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).wait(79));

	// an_shadow
	this.instance_1 = new lib.an_shadow("synched",0,false);
	this.instance_1.setTransform(347.8,378.7,1,1,0,0,0,1066.7,1063.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// sb_sc3_bg
	this.instance_2 = new lib.sb_sc3bg("synched",0);
	this.instance_2.setTransform(298.3,261.95,1,1,0,0,0,309.4,265.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1801,-2072.1,6948.1,5069.7);


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
	this.instance.setTransform(1316.9,249.2,3.4462,3.4462,0,0,0,144,35.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(78));

	// an_sc2_bg
	this.instance_1 = new lib.an_sc2bg("synched",0,false);
	this.instance_1.setTransform(397.15,359.8,1,1,0,0,0,1066.7,1063.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3378.2,-568.7,8122.4,2168);


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

	// an_sc1_sub
	this.instance = new lib.an_sc1sub("synched",0,false);
	this.instance.setTransform(372.2,761.45,4.39,4.39);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(52));

	// an_sc1_title
	this.instance_1 = new lib.an_sc1title("synched",0,false);
	this.instance_1.setTransform(1089.95,356.8,4.3604,4.3604,0,0,0,137.7,52.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// an_btn
	this.instance_2 = new lib.an_btn("synched",0,false);
	this.instance_2.setTransform(1467.9,760.45,3.1034,3.1034,0,0,0,163.8,36.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(41));

	// an_car1
	this.instance_3 = new lib.an_car1("synched",0,false);
	this.instance_3.setTransform(-677.05,334.95,2.0076,2.0076,0,0,0,515.9,181.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

	// an_sc1_bg
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#789DCD","rgba(224,228,229,0)"],[0,1],-356.1,0,356,0).s().p("Eg3oAx3MAAAhjtMBvRAAAMAAABjtg");
	this.shape.setTransform(-760.948,164.6636,1.9007,2.9978,-25.6965);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#789DCD","rgba(224,228,229,0)"],[0,1],-356.1,0,356,0).s().p("Eg3oAx3MAAAhjtMBvRAAAMAAABjtg");
	this.shape_1.setTransform(1353.3633,106.2011,1.4645,2.2958,139.304);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FCF3E3","rgba(224,228,229,0)"],[0,1],-356.1,0,356,0).s().p("Eg3oAx3MAAAhjtMBvRAAAMAAABjtg");
	this.shape_2.setTransform(664.7499,261.0822,3.5091,0.8688,180);

	this.instance_4 = new lib.an_sc1bg("synched",0,false);
	this.instance_4.setTransform(297.9,244.4,1,1,0,0,0,345.6,280.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1785.5,-990.6,4690.9,2310.6);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1A1A").s().p("AA7BUIh/h9IAAB9IgmAAIAAinIAxAAIB+B8IAAh8IAmAAIAACng");
	this.shape.setTransform(-5.0564,1051.5663,2.6948,2.6944);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AhoBUIAAgjICZAAIAIAAQAGgBAEgFQAEgFAAgFQAAgPgPgCIhqAAIgQgBQgVgDgMgOQgKgOAAgRQAAgTAMgOQAMgOAUgCICjgBIAAAjIiSAAIgLAAQgLAEAAALQAAAMALACIALABIByABQAUACANAPQALAOAAASQAAATgLAOQgNARgXABIgMABg");
	this.shape_1.setTransform(-235.3292,1051.5663,2.6948,2.6944);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A1A1A").s().p("AhoBUIAAgjICZAAIAIAAQAOgCAAgOQAAgPgPgCIhqAAIgQgBQgUgDgMgOQgLgOAAgRQAAgTAMgOQANgNATgDICjgBIAAAjIiSAAIgLAAQgLAEAAALQAAAMALACIALABIByABQAUACANAPQALAOAAASQAAATgLAOQgNARgWABIgNABg");
	this.shape_2.setTransform(-158.1224,1051.5663,2.6948,2.6944);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A1A1A").s().p("ABSBUIgTgeIh9AAIgTAeIguAAIBrinIApAAIBrCngAArAWIgrhCIgqBCIBVAAg");
	this.shape_3.setTransform(-82.1284,1051.5663,2.6948,2.6944);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A1A1A").s().p("AA7BUIh/h9IAAB9IgmAAIAAinIAxAAIB+B8IAAh8IAmAAIAACng");
	this.shape_4.setTransform(-347.0296,1051.5663,2.6948,2.6944);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1A1A1A").s().p("AgSBUIAAinIAlAAIAACng");
	this.shape_5.setTransform(-290.1688,1051.5663,2.6948,2.6944);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1A1A1A").s().p("AlMB3QiZhehLicIgDgGQgLgWgKgIQgOgNgegDIhFgIIAAgUICoAAIAAACQA7CjCRBkQCSBlCzAAQC0AACRhlQCThjA5ikIABgCICpAAIAAAUIhHAIQgdADgPANQgIAIgMAWIgCAGQhMCciaBeQiYBdi0AAQizAAiZhdg");
	this.shape_6.setTransform(-175.926,1156.4213,2.6956,2.695);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1A1A1A").s().p("AISDUIgBgCQg5ijiThkQiRhki0AAQizAAiSBkQiRBkg7CjIAAACIioAAIAAgUIBFgHQAegEAOgNQAKgIALgWIADgGQBLicCZheQCZhdCzAAQC0AACYBdQCaBeBMCcIACAGQAMAWAIAIQAPANAdAEIBHAHIAAAUg");
	this.shape_7.setTransform(-175.926,946.7509,2.6956,2.695);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AK1BUIiAh9IAAB9IgmAAIAAinIAxAAICAB8IAAh8IAmAAIAACngAGvBUIgUgeIh9AAIgUAeIguAAIBsinIApAAIBsCngAGIAWIgrhCIgsBCIBXAAgAglBUIAAgjICYAAIAIAAQAOgCAAgOQAAgPgPgCIhqAAIgQgBQgUgDgMgOQgKgOAAgRQAAgTAMgOQAMgNASgDIClgBIAAAjIiTAAIgLAAQgKAEAAALQAAAMAKACIALABIByABQAVACAMAPQALAOAAASQAAATgLAOQgNARgWABIgMABgAlEBUIAAgjICaAAIAIAAQAGgBAEgFQAEgFAAgFQAAgPgPgCIhrAAIgQgBQgVgDgMgOQgKgOAAgRQAAgTAMgOQAMgOAUgCICkgBIAAAjIiTAAIgLAAQgLAEAAALQAAAMALACIALABIBzABQAUACANAPQALAOAAASQAAATgLAOQgNARgXABIgMABgAm6BUIAAinIAnAAIAACngAo+BUIiBh9IAAB9IgmAAIAAinIAxAAICAB8IAAh8IAmAAIAACng");
	this.shape_8.setTransform(-176.0518,1051.552,2.6953,2.6958);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AlMB3QiZhehLicIgEgGQgKgWgKgIQgPgNgdgDIhFgIIAAgUICoAAIAAACQA7CjCRBkQCSBlCzAAQC0AACRhlQCThjA5ikIABgCICpAAIAAAUIhHAIQgdADgPANQgJAIgLAWIgCAGQhNCciZBeQiYBdi0AAQizAAiZhdg");
	this.shape_9.setTransform(-175.9844,1156.418,2.6953,2.6958);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AISDUIgBgCQg5ijiThkQiRhki0AAQizAAiSBkQiRBkg7CjIAAACIioAAIAAgUIBFgHQAdgEAPgNQAKgIAKgWIAEgGQBLicCZheQCZhdCzAAQC0AACYBdQCZBeBNCcIACAGQALAWAJAIQAPANAdAEIBHAHIAAAUg");
	this.shape_10.setTransform(-175.9844,946.6859,2.6953,2.6958);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},90).wait(270));

	// sc4
	this.instance = new lib.sc4("synched",0);
	this.instance.setTransform(1129.95,1045.65,1,1,0,0,0,300,249.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(270).to({_off:false},0).wait(90));

	// sc3
	this.instance_1 = new lib.sc3("synched",0);
	this.instance_1.setTransform(1129.95,1046.05,1,1,0,0,0,300,250);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({_off:false},0).to({_off:true},90).wait(90));

	// sc2
	this.instance_2 = new lib.sc2("synched",0,false);
	this.instance_2.setTransform(1129.95,1046.05,1,1,0,0,0,300,250);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90).to({_off:false},0).to({_off:true},90).wait(180));

	// sc1
	this.instance_3 = new lib.sc1("synched",0,false);
	this.instance_3.setTransform(1140.75,1068.05,1,1,0,0,0,310.8,272);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},90).wait(270));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2548.3,-1276.1,8525.3,5069.7);


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
	this.instance.setTransform(166.8,32.95,0.1,0.1,0,0,0,1197.6,1125.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(719).to({mode:"single",startPosition:359},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-47.7,-183,693.3000000000001,483.7);
// library properties:
lib.properties = {
	id: 'FF22514E8FBB4760B18695513798AD24',
	width: 320,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/car1.png", id:"car1"},
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