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
p.nominalBounds = new cjs.Rectangle(0,0,400,642);


(lib.sc2bg = function() {
	this.initialize(img.sc2bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,1200);


(lib.sc3bg = function() {
	this.initialize(img.sc3bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,533);


(lib.sc4bg = function() {
	this.initialize(img.sc4bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,616,1198);// helper functions:

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
	this.instance.setTransform(0,-349,1.0005,1.0005);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-349,616.3,1198.6);


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
	this.shape.setTransform(286.8446,-7.8356,1.2203,1.6807,80.5156);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#404A51","rgba(64,74,81,0)"],[0,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape_1.setTransform(367.1479,483.7793,0.4474,1.3947,-90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape_2.setTransform(367.1366,-1.9724,0.5341,1.3947,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.instance = new lib.sc3bg();
	this.instance.setTransform(0,-80,1.1789,1.1788);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CA0000").ss(1,1,1).p("Eg3sgm8MBvZAAAMAAABN4MhvZAAAg");
	this.shape_3.setTransform(312.75,-141.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#404A51").s().p("Eg3sAm9MAAAhN4MBvZAAAMAAABN4g");
	this.shape_4.setTransform(312.75,691.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Eg3sAm9MAAAhN4MBvZAAAMAAABN4g");
	this.shape_5.setTransform(312.75,-141.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.9,-392.1,931.6,1332.4);


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
	this.shape.setTransform(924.7868,924.7894,3.3066,2.3385,44.9997);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-313.7,0,313.7,0).s().p("EgxAAxBMAAAhiBMBiBAAAMAAABiBg");
	this.shape_1.setTransform(924.7868,924.7894,3.3066,2.3385,44.9997);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EjD6ghzMCiHiiHMDluDluMiiHCiHg");
	this.shape_2.setTransform(944.325,943.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.204,0.776,1],-735.1,-735.1,735.1,735.2).s().p("EjD6ghzMCiHiiHMDluDluMiiHCiHg");
	this.shape_3.setTransform(944.325,943.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EjELgiEMCiHiiHMDmQDmQMiiHCiHg");
	this.shape_4.setTransform(963.825,963.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.216,0.765,1],-736.8,-736.8,736.8,736.8).s().p("EjELgiEMCiHiiHMDmQDmQMiiHCiGg");
	this.shape_5.setTransform(963.825,963.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EjEbgiVMCiGiiGMDmxDmxMiiGCiGg");
	this.shape_6.setTransform(983.325,982.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.227,0.749,1],-738.5,-738.5,738.5,738.5).s().p("EjEbgiVMCiGiiGMDmxDmxMiiGCiGg");
	this.shape_7.setTransform(983.325,982.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EjEsgilMCiGiiHMDnTDnTMiiHCiGg");
	this.shape_8.setTransform(1002.85,1001.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.239,0.733,1],-740.2,-740.2,740.2,740.2).s().p("EjEsgimMCiGiiGMDnTDnSMiiHCiHg");
	this.shape_9.setTransform(1002.85,1001.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EjE9gi2MCiHiiHMDn0Dn0MiiGCiHg");
	this.shape_10.setTransform(1022.35,1020.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.251,0.722,1],-741.9,-741.8,741.8,741.9).s().p("EjE9gi2MCiHiiHMDn0Dn0MiiGCiHg");
	this.shape_11.setTransform(1022.35,1020.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EjFOgjHMCiHiiHMDoWDoWMiiHCiHg");
	this.shape_12.setTransform(1041.875,1039.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.263,0.706,1],-743.6,-743.6,743.5,743.5).s().p("EjFOgjHMCiHiiGMDoWDoVMiiHCiHg");
	this.shape_13.setTransform(1041.875,1039.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EjFfgjYMCiHiiGMDo4Do3MiiHCiGg");
	this.shape_14.setTransform(1061.35,1058.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.275,0.69,1],-745.2,-745.2,745.2,745.2).s().p("EjFegjYMCiGiiGMDo4Do3MiiHCiGg");
	this.shape_15.setTransform(1061.35,1058.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EjFvgjpMCiGiiGMDpZDpYMiiGCiHg");
	this.shape_16.setTransform(1080.875,1077.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.29,0.678,1],-746.9,-746.9,746.9,746.9).s().p("EjFvgjoMCiGiiHMDpZDpYMiiGCiHg");
	this.shape_17.setTransform(1080.875,1077.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EjGAgj5MCiHiiHMDp6Dp7MiiGCiGg");
	this.shape_18.setTransform(1100.4,1096.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.302,0.663,1],-748.6,-748.5,748.5,748.6).s().p("EjGAgj5MCiHiiHMDp6Dp7MiiGCiGg");
	this.shape_19.setTransform(1100.4,1096.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EjGRgkKMCiGiiHMDqdDqcMiiHCiHg");
	this.shape_20.setTransform(1119.9,1116.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.314,0.647,1],-750.3,-750.2,750.2,750.3).s().p("EjGRgkKMCiHiiHMDqcDqcMiiHCiHg");
	this.shape_21.setTransform(1119.9,1116.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EjGigkbMCiHiiHMDq+Dq+MiiHCiHg");
	this.shape_22.setTransform(1139.4,1135.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.325,0.631,1],-751.9,-751.9,751.9,752).s().p("EjGhgkbMCiGiiHMDq9Dq+MiiGCiGg");
	this.shape_23.setTransform(1139.4,1135.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EjGygksMCiGiiGMDrfDrfMiiGCiGg");
	this.shape_24.setTransform(1158.925,1154.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.337,0.62,1],-753.6,-753.6,753.6,753.6).s().p("EjGygksMCiGiiGMDrfDrfMiiGCiGg");
	this.shape_25.setTransform(1158.925,1154.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EjHDgk9MCiGiiGMDsBDsAMiiGCiHg");
	this.shape_26.setTransform(1178.425,1173.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.349,0.604,1],-755.3,-755.2,755.2,755.3).s().p("EjHDgk9MCiGiiGMDsBDsAMiiGCiHg");
	this.shape_27.setTransform(1178.425,1173.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EjHUglNMCiGiiHMDsjDsiMiiGCiHg");
	this.shape_28.setTransform(1197.95,1192.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.361,0.588,1],-757,-756.9,756.9,757).s().p("EjHUglNMCiGiiHMDsjDsiMiiGCiHg");
	this.shape_29.setTransform(1197.95,1192.525);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EjHlgleMCiHiiHMDtEDtEMiiHCiHg");
	this.shape_30.setTransform(1217.425,1211.65);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.373,0.576,1],-758.6,-758.6,758.7,758.7).s().p("EjHlgleMCiHiiHMDtEDtEMiiHCiGg");
	this.shape_31.setTransform(1217.425,1211.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.384,0.561,1],-313.7,0,313.7,0).s().p("EgxAAxBMAAAhiBMBiBAAAMAAABiBg");
	this.shape_32.setTransform(1236.9308,1230.781,3.4276,2.3385,44.9997);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EjBsgfmMCiGiiGMDhTDhTMiiGCiGg");
	this.shape_33.setTransform(1260.375,1254.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.373,0.576,1],-721,-721,721,721).s().p("EjBsgfmMCiGiiGMDhTDhTMiiGCiGg");
	this.shape_34.setTransform(1260.375,1254.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Ei7jgZcMCiGiiHMDVBDVAMiiHCiHg");
	this.shape_35.setTransform(1283.75,1277.575);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.357,0.592,1],-681.7,-681.6,681.6,681.7).s().p("Ei7jgZcMCiGiiHMDVBDVAMiiHCiHg");
	this.shape_36.setTransform(1283.75,1277.575);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Ei1agTTMCiHiiHMDIuDIuMiiHCiHg");
	this.shape_37.setTransform(1307.175,1301);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.345,0.612,1],-642.3,-642.3,642.3,642.3).s().p("Ei1agTTMCiHiiHMDIuDIuMiiHCiGg");
	this.shape_38.setTransform(1307.175,1301);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EivRgNKMCiHiiGMC8cC8bMiiHCiGg");
	this.shape_39.setTransform(1330.6,1324.425);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.329,0.627,1],-603,-603,603,603).s().p("EivQgNKMCiGiiGMC8bC8bMiiGCiGg");
	this.shape_40.setTransform(1330.6,1324.425);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EipHgHBMCiGiiGMCwJCwIMiiGCiHg");
	this.shape_41.setTransform(1354,1347.85);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.314,0.643,1],-563.7,-563.7,563.6,563.6).s().p("EipHgHAMCiGiiHMCwJCwJMiiGCiGg");
	this.shape_42.setTransform(1354,1347.85);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eii+gA3MCiHiiHMCj2Cj2MiiHCiHg");
	this.shape_43.setTransform(1377.425,1371.25);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.302,0.659,1],-524.3,-524.3,524.3,524.3).s().p("Eii+gA3MCiHiiGMCj2Cj1MiiHCiHg");
	this.shape_44.setTransform(1377.425,1371.25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eic0AFRMCiFiiFMCXlCXkMiiGCiFg");
	this.shape_45.setTransform(1400.85,1394.675);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.29,0.678,1],-485,-485,485,485).s().p("Eic1AFRMCiGiiFMCXlCXkMiiGCiFg");
	this.shape_46.setTransform(1400.85,1394.675);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiWrALaMCiFiiFMCLSCLSMiiFCiFg");
	this.shape_47.setTransform(1424.225,1418.075);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.275,0.694,1],-445.6,-445.6,445.7,445.7).s().p("EiWrALaMCiFiiFMCLSCLSMiiFCiFg");
	this.shape_48.setTransform(1424.225,1418.075);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiQiARkMCiFiiGMB/AB+/MiiGCiGg");
	this.shape_49.setTransform(1447.65,1441.475);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.263,0.71,1],-406.4,-406.3,406.3,406.4).s().p("EiQiARkMCiFiiGMB/AB+/MiiFCiGg");
	this.shape_50.setTransform(1447.65,1441.475);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiKZAXtMCiGiiGMBytBytMiiGCiGg");
	this.shape_51.setTransform(1471.05,1464.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.247,0.725,1],-367,-367,367,367).s().p("EiKZAXtMCiGiiGMBytBytMiiGCiFg");
	this.shape_52.setTransform(1471.05,1464.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiEPAd2MCiFiiFMBmaBmaMiiFCiFg");
	this.shape_53.setTransform(1494.475,1488.325);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.231,0.741,1],-327.7,-327.7,327.7,327.7).s().p("EiEPAd2MCiFiiFMBmaBmaMiiFCiFg");
	this.shape_54.setTransform(1494.475,1488.325);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eh+GAj/MCiFiiFMBaIBaIMiiGCiFg");
	this.shape_55.setTransform(1517.9,1511.75);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.22,0.761,1],-288.4,-288.4,288.3,288.3).s().p("Eh+GAkAMCiFiiGMBaIBaIMiiGCiFg");
	this.shape_56.setTransform(1517.9,1511.75);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eh39AqJMCiGiiGMBN1BN1MiiGCiGg");
	this.shape_57.setTransform(1541.275,1535.125);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.204,0.776,1],-249,-249,249.1,249.1).s().p("Eh39AqJMCiGiiGMBN1BN1MiiGCiGg");
	this.shape_58.setTransform(1541.275,1535.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:3.3066,x:924.7868,y:924.7894}},{t:this.shape,p:{scaleX:3.3066,x:924.7868,y:924.7894}}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_32},{t:this.shape,p:{scaleX:3.4276,x:1236.9308,y:1230.781}}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1564.693,y:1558.5479}},{t:this.shape,p:{scaleX:0.9454,x:1564.693,y:1558.5479}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328.4,-328.4,2845.4,2839.2000000000003);


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
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.035,1],-227.9,0,227.8,0).s().p("EgjmAjnMAAAhHNMBHMAAAMAAABHNg");
	this.shape.setTransform(443.6675,245.6756,1.0783,1.8985,90);

	this.instance = new lib.sc2bg();
	this.instance.setTransform(24,0,0.8445,0.8445);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.1,0,865.1999999999999,1013.5);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgTCOIAAgbIh7AAIAAgcIB7AAIAAgNIhdAAIAAhfIBZAAIAAgvIhlAAIAAhJID6AAIAABJIhwAAIAAALIBvAAIAAAZIhvAAIAAALIBiAAIAABfIhdAAIAAANIB7AAIABAcIh8AAIAAAbgAhMAyICWAAIAAgMIiWAAgAhMAPICWAAIAAgMIiWAAgAAzhfIAlAAIAAgUIglAAgAgShfIAjAAIAAgUIgjAAgAhYhfIAjAAIAAgUIgjAAg");
	this.shape.setTransform(249.15,61.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpB4QAigFAegJQgQgMgIgOIAKgDIghAAIAAgZICDAAIAFgBIAWAKQgOAbgdAUQAaAHAhADQgNANgIARQgqgFgggQQgjAPgtAHQgGgSgKgLgAA4BeQANgGANgLIgxAAQAKAKANAHgAiHCQIAAhtIBeAAIAABVIAAALIhAAAIAAANgAhpBkIAiAAIAAgjIgiAAgAgMAvIAAhAIgMANQgGgMgMgPIAAAKIhdAAIAAgdIBdAAIAAAQQAagXANglIAPAEIAAgNIgqAAIAAgbIAqAAIAAgQIAhAAIAAA6IgbAAIAIADIgHANIAcAAIgEgOIAagGIAAg2IAhAAIAAAPIAqAAIAAAcIgqAAIAAAPIgXAAIAFAQIA0AAIAAAXIg2AAIAAALIAtAAIAAATIgtAAIAAAKIAtAAIAAASIgtAAIAAAMIA9AAIAAAVIh9AAIAAAFgAASAVIAhAAIAAgMIghAAgAASgJIAhAAIAAgKIghAAgAASgmIAhAAIAAgLIghAAgAiHAUIAAgcIBdAAIAAAcgAiVhAIAAgeIA1AAQgHgUgNgUIAdgNQAOAVAJAUIgUAMIA1AAIAAAeg");
	this.shape_1.setTransform(216.05,61);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhUCVIAAhVQgUAggUAUQgMgUgLgKQAhgbAXgxIgsAAIAAghIAzAAIAAgfIAgAAQgJgLgPgOIAOgNIgYAAQgPAXgRARQgPgSgMgIQAfgbARgrIAkAKIgHAPIBFAAIAAAfIguAAQARAOAIALIgYAXIgEgFIAAAaIArAAIAAAhIgrAAIAAAGQAYATAYAZIgXAdQgJgPgQgSIAABdgAACCUIAAi/ICHAAIAAC9IgmAAIAAgKIg9AAIAAAMgAAmBpIA9AAIAAgVIg9AAgAAmA5IA9AAIAAgUIg9AAgAAmAJIA9AAIAAgTIg9AAgAA+hRIAMgLIgaAAQgPAYgOAOQgTgPgMgGQAdgaAQgvIAlAJIgHAQIBVAAIAAAfIg0AAQATAQAGAIIgXAXQgMgRgYgTg");
	this.shape_2.setTransform(182.325,60.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhCBqIAoABQAHAAAAgIIAAj2IAoAAIAABNQAHAWAKATQAhgfAXggIAjAZQgvAugbAVQAoA7A4AYQgRAQgLATQg+ghgohMIAABbQgBAQgDAJQgEAJgKAFQgNAJgqAAQgDgTgLgXgAiWBbQA3gmAWhVIhCAAIAAgmIBQAAIAHgBIAYAJQgKA/gYAvQgYAvgiAZQgOgUgQgJg");
	this.shape_3.setTransform(149.5,61.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABWByIAMAAQABAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAhgIgQAAIAACAIgZAAIAAiAIgPAAIAACAIgZAAIAAiAIgOAAIAACEIggAAIAAiEIgNAAIAGAKIgTAaIgSgmIAACGIgiAAIAAh2QgPAqgOAUQgFgPgMgSQANgSAMgeQAMgcAGgdIgjAAIAAgjIAmAAIAAhBIAiAAIAABBIAfAAIAAAjIgfAAIAAAPIAaAnIAAgZIASAAIAAhyIChAAIAAByIAQAAIAAAhIgQAAIAABhQAAAWgKAHQgJAHgTAAQgCgQgJgSgABVgSIAQAAIAAhSIgQAAgAAtgSIAPAAIAAhSIgPAAgAAGgSIAOAAIAAhSIgOAAg");
	this.shape_4.setTransform(116.225,61.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNCUIAAhmIgQAIQgGgMgLgNIgCADIgSgeIAACRIgjAAIAAh3QgQArgQAVQgEgMgOgWQAPgRAMgfQANgcAHgdIgnAAIAAgjIAqAAIAAhBIAjAAIAABBIAkAAIAAASQAigjASgwIAkAKIgKAXIAyAAIAHAAIAYAKQgRAwggAlQAfAXAoAKQgNAOgJASIgGgCIAABnIgkAAIAAgKIhCAAIAAALgAAVBoIBCAAIAAgqIhCAAgAATAeIBKAAQgTgKgTgQQgSAQgSAKgAhCgoQAeAiAHAKIgKAPQAogQAdgWQgOgQgKgQQgJANgOAMQgHgJgPgMIgbAAgAAahPQAOAWAOAOQAPgRAMgVIg0AAg");
	this.shape_5.setTransform(83.05,61.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABdCUIAAgJIg9AAIAAAJIggAAIAAhmIgEACQgIgSgMgLQAigOAfgbQgMgPgKgRQgIALgNAMQgMgOgNgMQApggAUg6IAgALIgKAWIAzAAIAFgCIAXAMQgRAvgeAjQAeAXAgALQgMAMgKAVIgCgBIAABogAAgBqIA9AAIAAgpIg9AAgAAYAgIBPAAQgVgNgSgRQgUASgUAMgAAmhQQALASAPASQAOgRAMgWIgyAAgAiPBqIAugIIAAhPIgqAAIAAgfIAqAAIAAgXIgYAAIAAgOIgPAOQgDgRgKgWQApgeAVgsIAbANIgGAMQAfASARARIgPAeIgHgHIAAAeIgbAAIAAAXIAlAAIAAAfIglAAIAABKIAlgHIACAeIhsAYgAhphCIA/AAQgSgQgXgOQgJAOgNAQgAiIAlIAWgGQAIAYAEAeIgZAHQAAgUgJgjgAhBBRQAIgdADgYIAaAHIgQA1g");
	this.shape_6.setTransform(49.675,60.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABKB7QgbARghAJQgGgOgIgLIgJAXQgMgKgRgGIAEgIIhhATIgIggIAugIIAAhTIgoAAIAAgfIAoAAIAAgXIgbAAIAAgNIgCACQgMgMgQgKQASgOAQgWQAQgVAJgWIAhAJIgDAIIAvAsIAAgkIBFAAIgFgTIAggIQAGANADAOIA5AAIAAAgIiCAAIAAAZIASAAIAAgTIAeAAIAAATIAfAAIAAgTIAgAAIAAATIARAAIAAAfIgRAAIAAAsIhdAAIAAgsIgSAAIAAAMQAABVgQA3QAXgHAVgLQgQgQgNgXIAbgIIgaAAIAAgfIBiAAIAGAAIAXAIQgOAsgeAcQAWANAcAGQgMAKgLATQgegKgYgRgAgbBnQANgqAAhTIAAg/IgbATIANAAIAAAfIghAAIAAAXIAjAAIAAAfIgjAAIAABNIAhgFgABIBSQAQgOAJgPIgxAAQAIAOAQAPgABCgPIAfAAIAAgTIgfAAgAhnhCIA9AAQgKgOgZgWQgOAXgMANgAiEAlIAXgGQAKAfABAXIgYAIQgBgbgJgdgAg6BQQAIgaACgZIAaAFIgOAzg");
	this.shape_7.setTransform(16.525,60.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA4B8IAAiNQAAgYgJgKQgKgNgXAAQglAAggAXIAAClIhIAAIAAjyIA6AAIAIAZQAwgeAyAAQArgBAXAWQAZAXAAA1IAACWg");
	this.shape_8.setTransform(215.875,21.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhjBfQgogiAAg9QAAg8AogiQAlghA/ABQA/AAAlAgQAmAjAAA7QAAA9gmAiQglAgg/ABQg/gBglgggAgugxQgSATAAAeQAAAeASATQASATAeAAQAcAAARgUQASgSAAgeQAAgfgSgTQgSgRgdAAQgdAAgRASg");
	this.shape_9.setTransform(183.9,21.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjCqIAAjzIBHAAIAADzgAgnhrIAAg+IBPAAIAAA+g");
	this.shape_10.setTransform(161.125,16.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZCKQgcgWAAgsIAAhrIgoAAIAAg5IAsAAIAIg/IA7AAIAAA/IBNAAIAAA5IhNAAIAABeQABASAGAJQAJALAVAAQASgBAWgGIAAA5QgaAJgdAAQgpAAgYgSg");
	this.shape_11.setTransform(143.35,18.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhkBfQgngiABg9QgBg8AngiQAmghA+ABQA/AAAmAgQAnAjAAA7QAAA9gnAiQgmAgg/ABQg+gBgmgggAgvgxQgRATAAAeQAAAeASATQASATAeAAQAcAAASgUQARgSAAgeQAAgfgSgTQgTgRgdAAQgcAAgSASg");
	this.shape_12.setTransform(118.25,21.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ACNB8IAAiNQAAgYgJgKQgKgNgXAAQgUAAgTAJQgPAGgJAJIAACkIhHAAIAAiNQAAgYgJgKQgKgNgXAAQgTAAgTAIQgQAHgJAIIAAClIhIAAIAAjyIA7AAIAHAZQAQgMAVgHQAbgLAcAAQA4gBAUAmQAvgmA1ABQArgBAXAWQAZAXAAA1IAACWg");
	this.shape_13.setTransform(77.8,21.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhcAiIAAhDIC4AAIAABDg");
	this.shape_14.setTransform(42.05,19.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag2CaQhEiQgsijIBPAAQAxClAmBUQAlhXAxiiIBRAAQg0Ctg/CGg");
	this.shape_15.setTransform(16.675,18.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc2title, new cjs.Rectangle(0,0,263.4,75.9), null);


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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgRCEIAAg/IgvAAIAhALQgYAbgsAUQgKgKgSgMQAqgOAUgWIg+AAIAAgcIBuAAIAAgUIAhAAIAAAUIBwAAIAAAcIhBAAQApATAXATIgbAYQgYgWgvgYIATgQIggAAIAAA/gAANAKQgpAShXAEQgFgSgHgJQAxgCAigFIgwgIQASgQAGgIIg5AAIAAgaIBQAAQAKgNAHgLIg9AAIAAAPIgfAAIAAgrIBkAAIgGgMIAjgHIALATIBlAAIAAArIghAAIAAgPIhmAAIATAGIgNASIA1AAIAHgRIAhAGIgEALIAsAAIAAAaIg5AAQgKAPgMAKQAtAKAiALIggAWQgagKg2gOgAgogaIAtAIQANgGAJgKIg8AAg");
	this.shape.setTransform(208.438,39.6411,0.8001,0.8001);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ah/BrQAtgYARgvQALgeADg6IhIAAIAAghIB4AAIgRgkIAggNQAMAVAIAUIgTAIIBzAAIAAAhIiOAAIgDAjIB5AAIgCAOQgDA4gGAbQgFAbgIAJQgKALgUACQgLABgmgBQgBgRgKgQQAXACAXABQAKgBAEgDQALgJAGhJIhYAAQgJAogRAcQgUAhgkAVQgIgPgQgNg");
	this.shape_1.setTransform(183.8356,39.5611,0.8001,0.8001);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("ABVB+IAAgMIiqAAIAAAMIgiAAIAAj7IDvAAIAAD7gAhVBTICqAAIAAixIiqAAgAg8BAIAAhJIAsAAIAAgXIg5AAIAAgbIA5AAIAAgbIAfAAIAAAbIA7AAIAAAbIg7AAIAAAXIAvAAIAABJgAgeAnIA9AAIAAgZIg9AAg");
	this.shape_2.setTransform(159.6332,40.1811,0.8001,0.8001);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAYCEIAAhjIhJAAIAAgfIBJAAIAAgYIg2AAIAAhhICUAAIAABhIg8AAIAAAYIBJAAIAAAfIhJAAIAABjgAABgzIBTAAIAAgmIhTAAgAhfCDIAAiQIgUAWQgJgVgJgNQAqgpAYhBIAgALQgMAegRAcIAADBgAg4BlQAXgYARgkIAdAJQgUArgXAaQgPgMgLgGgABEA3IAZgOQAcAgAOAcIgbAQQgMgagcgkg");
	this.shape_3.setTransform(135.0907,39.6611,0.8001,0.8001);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhnBeQAPgHAAgOIAAguIgqAAIAAgdIAvAAIAAh9ICxAAIAAAcIiOAAIAAAPICHAAIAAAaIiHAAIAAAPICHAAIAAAaIiHAAIAAAPICtAAIAAAdIgfAAIAWAPQgXARgbAOQAZAQAnAHQgLAKgKAUQgugKgfgZQgdgYgSgoIgoAAIAAA8IA8gNQgCAPAAAPQhOASgMAEIgBACQgGgVgJgNgAAqA4QAagQAQgNIhAAAQAJAQANANg");
	this.shape_4.setTransform(111.0483,40.0611,0.8001,0.8001);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AiFBmQATgKAOgVQgTgWgNghIAagMQAGAVAPASQAKgYAEgfIg0AAQAUgjAUgtIguAAIAAgeIBaAAIgnBTIAPAAIAGgBIATAEQgGBAgQAlQAVAOAgAGQAXAEAlAAIBRAAQgIAMgEAVIhFAAQgqAAgbgGQgjgGgYgRQgSAZgVANQgJgSgKgLgAgiBIIAAgfIAOAAIAAhrIAfAAIAABrIAZAAIAAh/QgaADggACQgCgNgHgPQBWgGAxgPIATAcQgTAGgiAGIAAAvIAwAAIAAAfIgwAAIAAA1IA2AAIAAAfg");
	this.shape_5.setTransform(86.4059,39.9411,0.8001,0.8001);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AhEBqIArAAQAIAAgBgGIAAgSIhsAAIAAgcIBsAAIAAgMIABAAIgBgBQASgEARgHIh0AAIAAgaICqAAIAHgBIAVASQghATgtAOIBqAAIAAAcIhtAAIAAAUQgBANgDAFQgFAHgJACQgNAEgrAAQgEgNgIgOgAhagGIAAg+IC2AAIAAA+gAg4gdIBxAAIAAgQIhxAAgAh6hQIAAgdIBoAAQgDgKgDgHIAigGQAFAJAEAOIBoAAIAAAdg");
	this.shape_6.setTransform(61.9635,39.5611,0.8001,0.8001);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAVBdIAnAAQAGAAABgGIAAgbIiEAAIAABAIgiAAIAAhAIggAAIAAgfIAgAAIAAhnIBSAAIAAgTIhmAAIAAgeIDwAAIAAAeIhpAAIAAATIBUAAIAABnIAgAAIAAAfIggAAIAAAcQAAANgDAHQgEAHgIAEQgMAFgoAAQgEgRgIgOgAAQAdIAzAAIAAgXIgzAAgAhBAdIAwAAIAAgXIgwAAgAAQgWIAzAAIAAgWIgzAAgAhBgWIAwAAIAAgWIgwAAg");
	this.shape_7.setTransform(37.561,40.2611,0.8001,0.8001);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgPB5IAAg6IgsAAIAfAKQgVAZgqATQgMgMgOgIQAogOARgUIg5AAIAAgaIBmAAIAAgRIAeAAIAAARIBnAAIAAAaIg8AAQAnATATAQIgYAWQgVgTgsgXIARgPIgdAAIAAA6gAANAJQgmAQhRAEQgEgQgGgJQAugCAegDIgsgIQAJgIAMgNIg0AAIAAgYIBJAAQAKgMAHgLIg5AAIAAAOIgcAAIAAgnIBcAAIgGgMIAggGIAKASIBdAAIAAAnIgeAAIAAgOIheAAIASAFIgNASIAyAAIAGgRIAeAHIgEAKIApAAIAAAYIg1AAQgHAMgMAKQAlAIAjALIgdAVQgZgKgwgNgAglgYIAqAIQAMgHAIgHIg3AAg");
	this.shape_8.setTransform(197.589,-26.5687,0.6367,0.6367);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgGBeIAfABQAFgBAAgEIAAgYIhIAAQAUAOAHAKIgWAUQgLgQgcgTIALgJIg0AAIAAgYICTAAIAAgKIiHACIgBgWIBbAAIAAgJIhKAAIAAhKIBKAAIAAgJIhfAAIAAgYIBfAAIAAgQIAdAAIAAAQIBfAAIAAAYIhfAAIAAAJIBOAAIAABKIgRAAQATAJAPALIgTAQIgLgIIgTAAIAAALIA6AAIAAAYIg6AAIAAAZQAAALgDAGQgCAGgIADQgLAEgiAAQgCgLgGgQgAAOAMIAhAAIgKgFIAEgEIgbAAgAAOgPIAxAAIAAgKIgxAAgAg8gPIAtAAIAAgKIgtAAgAAOgrIAxAAIAAgJIgxAAgAg8grIAtAAIAAgJIgtAAg");
	this.shape_9.setTransform(167.5884,-26.5528,0.6367,0.6367);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgLB5IAAgqIgOAAIAAgWIAOAAIAAhAIAuAAIAAgKIg6AAIAAgWIAfAAIAAgKIgVAAIAAgUIAVAAIAAgJIgbAAIAAgXIAbAAIAAgTIAbAAIAAATIAaAAIAAgTIAcAAIAAATIAcAAIAAAXIgcAAIAAAJIAYAAIAAAUIgYAAIAAAKIAhAAIAAAWIg8AAIAAAKIAwAAIAABAIAMAAIAAAWIgMAAIAAAOQAAARgLAHQgJADgdAAQAAgIgIgQIAZAAQAEAAAAgDIAAgOIhDAAIAAAqgAA+A5IAUAAIAAgMIgUAAgAAPA5IAUAAIAAgMIgUAAgAA+AaIAUAAIAAgNIgUAAgAAPAaIAUAAIAAgNIgUAAgAAjgnIAaAAIAAgKIgaAAgAAjhFIAaAAIAAgJIgaAAgAh5BqQATgTAIgeIAbAGQgLAigUAYIgXgPgAhABCIAXgJQAQAXAGATIgYALQgGgVgPgXgAhrA4IAAinIBPAAIAACngAhRAeIAaAAIAAgYIgaAAgAhRgPIAaAAIAAgZIgaAAgAhRg+IAaAAIAAgZIgaAAg");
	this.shape_10.setTransform(137.5104,-26.5369,0.6367,0.6367);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AA6B6IAAgMIh2AAIAAAMIgfAAIAAiiIBFAAIAEgQIhiAAIAAgdIA8AAQgKgNgJgLIAbgMQARARAIANIgLAGIA6AAQAOgUAGgPIAjAIQgHALgNAQIA6AAIAAAdIhjAAIgHAQIBOAAIAACigAg8BTIB2AAIAAgSIh2AAgAg8AqIB2AAIAAgRIh2AAgAg8ACIB2AAIAAgPIh2AAg");
	this.shape_11.setTransform(107.6371,-26.6165,0.6367,0.6367);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("Ah7BcQAIgKAKgJQAPgTAHggIgfAAIASg3IgWAAIAAgcIA8AAIgSA6IADAAIAEgBIASAGQgHAogMAXIASAMQAVAMAzAAQA6AAAugHQgIAWAAAKQgrADg3AAQgaAAgQgCQgSgEgOgHIgOgKQgIgFgDAAQgHAAgPAggAgwBDQAbgJARgMIgvAAIAAgWIApAAIAAgQIggAAIAAgVIAgAAIAAgOIAbAAIAAAOIAdAAIAAgOIAdAAIAAAOIAgAAIAAAVIggAAIAAAQIAqAAIAAAWIgyAAQAgARALAIIgcANQgUgRgWgKIAQgLIgzAAIAUAHQgTASgfAOQgMgMgLgGgAARAYIAdAAIAAgQIgdAAgAg0guQAIgEAAgNIAAgxIBIAAIAAAxIgwAAIAAANIAvgHQgEAJgBAMQg7AKgFADQgDgMgHgLgAgUhSIAXAAIAAgLIgXAAgABCgfQgRAAgGgHQgGgGAAgSIAAgyIBKAAIAAAxIgyAAIAAABIABAIQACACAEAAIAaAAQAOAAAEgCIACAWQgGABgNAAgAA9hSIAYAAIAAgLIgYAAgAhphwIAcgIIAQAsIgdAJg");
	this.shape_12.setTransform(77.6705,-26.5051,0.6367,0.6367);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AA9B6IAAgJIhrAAIAAAJIgeAAIAAhtICoAAIAABtgAguBZIBrAAIAAgQIhrAAgAguAzIBrAAIAAgOIhrAAgAhxAAQAigNAMgWIgrAAIAAgYIARAAIgUgLQAVgUAIgfIAbAGIgFAPIA/AAIAAAYIghAAIAAARIAnAAIAAAYIgqAAQAUAKAXAPIgVATIghgZQgQAWggAPQgIgMgLgJgAhWg7IAZAAIAAgRIgNAAQgFAJgHAIgAAQgCIAAhiIBiAAIAABigAAsgdIAoAAIAAgsIgoAAg");
	this.shape_13.setTransform(47.2242,-26.6165,0.6367,0.6367);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Layer_3
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AhJBAQAJgRABgxIAQACIAAASQACAKAGAGIAAgsIgeAAIAAgRIAaAAIAAgOIgVAAIAAgQIAVAAIAAgPIARAAIAAAPIAVAAIAAAQIgVAAIAAAOIAZAAIAAARIgVAAIAAAPIATAAIAAAQIgTAAIAAAYQAKAEAUAAIBCAAQgFAHgCALIg7AAQgWgBgNgEQgPgEgIgNQgCAQgFALgAAbAqQgNAAgFgFQgFgFAAgPIAAhTIA7AAIAAA6IgpAAIAAAZQAAAFABACQABABAFABIAUAAQAEgBACgDQABgEABgMQAHAFAJACQgCAQgEAGQgFAHgLAAgAAWgYIAYAAIAAgaIgYAAg");
	this.shape_14.setTransform(218.725,10.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AhpBMQAggMANgYQAJgRACggIgzAAIAAgaIDKAAIAAAaIg8AAIAABEQAAAHABABQACACAGABIAUAAQAGgBACgGQACgIAAgZQAJAIAQAEQgCAfgGAKQgHALgRAAIgcAAQgTABgHgIQgGgIAAgUIAAhEIghAAQgEAogMAXQgQAdglAPQgGgNgLgJgAhQhHIAAgaIChAAIAAAag");
	this.shape_15.setTransform(196.325,8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AADBPIArABQAIAAAAgIIAAhmIhWAAIAAgbIBWAAIAAgvIAcAAIAAAvIAZAAIAAAbIgZAAIAABmQAAANgDAHQgEAGgIADQgNAFgpAAQgCgNgIgOgAhKBpIAAhxQgGAIgKAJQgIgRgIgKQAkgiATg1IAaAIQgKAagLAUIAACcgAgWgCIAXgMQAXAkAIAQIgZAOQgIgVgVghg");
	this.shape_16.setTransform(77.65,7.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AhcBRQAXgTAJghQAGgVAAghIAAhLICTAAIAACmQAAANgEAHQgDAGgIADQgMAGgmgBQgDgMgIgQIAoAAQAHAAAAgGIAAghIhhAAQgJAtgdAXQgHgJgOgLgAgcAHIBcAAIAAgbIhaAAgAgaguIBaAAIAAgbIhaAAg");
	this.shape_17.setTransform(53.125,7.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AhPBrIAAhzIgPAQQgGgPgJgMQAjgjARgyIAZAIQgIAWgNAaIAACbgAApAEIgrAAIAAAvIAjgIQgBAOACAJQg3AOgIAGQgCgLgHgKQAKgGAAgKIAAiCQBCgKApgPIAUAVQgVAGgSAEIADA3IApAAIAAAYIgmAAQAIBGALAAQAFABACgdQAGAIAMAFQgGAtgTAAQggAAgMhkgAgCg/IAAArIApAAIgDgxQgMADgaADgAgGBmIAAgXIA8AAIAAAXg");
	this.shape_18.setTransform(29.025,7.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18.1,-34.4,208,84.8);


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
	this.shape.setTransform(249.9509,12.4212,0.9821,0.9821);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AAtCHQgig3gcgfIgrAAIAABWIhAAAIAAkNIB+AAQAvAAAcASQAlAWAAAyQAAAegTAWQgSAVgdAHQAqAsAkA3gAg7gEIAzAAQA3AAAAgoQAAgjg5AAIgxAAg");
	this.shape_1.setTransform(202.6359,12.4212,0.9821,0.9821);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A1A1A").s().p("AgfCHIAAjWIhZAAIAAg3IDxAAIAAA3IhZAAIAADWg");
	this.shape_2.setTransform(154.4125,12.4212,0.9821,0.9821);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A1A1A").s().p("AA+CHIh9i1IAAC1Ig/AAIAAkMIBLAAIBzCoIAAioIA/AAIAAEMg");
	this.shape_3.setTransform(106.0909,12.4457,0.9821,0.9821);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A1A1A").s().p("AhpCHIAAkNIDQAAIAAA3IiQAAIAAAzICDAAIAAAzIiDAAIAAA6ICTAAIAAA2g");
	this.shape_4.setTransform(58.1866,12.4212,0.9821,0.9821);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1A1A1A").s().p("AhwB9IAAg7QBEASAjAAQAfAAAOgFQAPgGAAgMQAAgTglgKIhDgRQgegIgRgSQgQgTAAgcQAAhRB4AAQAjAAA7AOIAAA4IgvgKQgZgEgaAAQgyAAAAAYQAAAPAcAIIBGASQBFASAAA2QAAApgeAWQgfAXg6AAQg2AAg4gPg");
	this.shape_5.setTransform(11.4364,12.4212,0.9821,0.9821);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.3,264.5,27.5);


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
	this.shape.setTransform(256.125,10.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhjBgIAAgaIBPAAIAAilIAbAAIAAA/IBOAAIAAAbIhOAAIAABLIBdAAIAAAag");
	this.shape_1.setTransform(207.15,10.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgEBVQAmgiAAhBIAAgKIAZAAIgBAeQANA3AiATQgLAJgGANQgZgQgOgjQgLAegYAWQgIgMgKgGgAg7BmIAAhHIgrAAIAAgVIBrAAIAAAVIgnAAIAABHgAhoBOQAJgOAHgdIAWAGQgIAbgKATgAgdAqIAUgHQAJASAEAQIgTAIQgFgQgJgTgAgCgJIAAAJIhaAAIAAgVIBaAAIAAACQAPgfAFg0IAaAEIgGAjIArAAIAEgBIASAFQgIApgIAUIgVgFQAEgNAEgXIgqAAQgHAYgMASIgPgMgAhdgfIAAgVIAiAAIAAgLIgoAAIAAgWIAoAAIAAgQIAYAAIAAAQIAmAAIAAAWIgmAAIAAALIAiAAIAAAVg");
	this.shape_2.setTransform(158.125,11.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgRBPQAcgMASgXQgLgTgIgcQgGAJgEAGIgOgPIAAADIg1AAIAAA3IA0gSQAAANADAMQhHAbgJAHQgCgQgIgLQAIgEAAgKIAAhRIA2AAIAAglIg4AAIAAgaIBSAAIAABMQAUgfALg6IAaAEIgJAjIBBAAIAAAYIgKAAQgJA0gTAgQASAWAYALQgLALgGAMQgWgMgTgVQgUAWgbANQgEgLgLgNgAAagmQAHAhAMAYQALgXAGgjIgjAAg");
	this.shape_3.setTransform(109.375,11.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgFBYQAGgKADgLIgOAJQgGgOgLgTIARgJQAIALAIASQAGgXAAgqIAAhNQAsgJAXgKIAUATQgVAIgqAIIAAAjIBDAAIAAAYIgVAAIAABrIgZAAIAAhrIgVAAIAAACQABBJgWAgQgMgLgIgEgAg6BmIAAhIIgoAAIAAgXIAoAAIAAgPIgpAAIAAgWIAVAAQgDgOgEgJIASgFIgdAAIAAgVIAlAAIgGgRIAagHQAGANAEALIAeAAIAAAVIgaAAIARAEIgJAYIAVAAIAAAWIgkAAIAAAPIAhAAIAAAXIghAAIAABIgAg4giIgQAEIAfAAIAKgcIggAAQAFANACALgAhmBLQAMgPAHgXIAUAFQgJAZgNAUg");
	this.shape_4.setTransform(60.15,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhcBhIAAgYIBOAAIAAgaIg5AAIAAgXIA5AAIAAgYIguAAIAAgTQgLAIgRAJQgHgNgJgJQAogQAggfIgdAAIAAgZIBKAAQAPAVAYATQAZATAcALQgKAKgIAOQgMgGgPgKIAAASIgvAAIAAAYIA5AAIAAAXIg5AAIAAAaIBRAAIAAAYgAg2gXIBqAAQgdgUgXgcQgVAZghAXg");
	this.shape_5.setTransform(11.275,11.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,0.6,265.4,20.9);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#74B8EA","rgba(255,255,255,0)"],[0.035,1],-227.9,0,227.8,0).s().p("EgjmAjnMAAAhHNMBHMAAAMAAABHNg");
	this.shape.setTransform(376.6785,154.6756,1.0783,1.0821,90);

	this.instance = new lib.sc1bg();
	this.instance.setTransform(150,-91,1.3358,1.3358);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(130.2,-91,554.0999999999999,857.6);


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
	this.shape.setTransform(245.3604,11.6226,0.9832,0.9832);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AhcB2IAAjrIC3AAIAAAvIh/AAIAAAuIByAAIAAAsIhyAAIAAAzICBAAIAAAvg");
	this.shape_1.setTransform(199.9098,11.6226,0.9832,0.9832);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A1A1A").s().p("AA3B2IhuieIAACeIg3AAIAAjrIBBAAIBkCTIAAiTIA4AAIAADrg");
	this.shape_2.setTransform(156.9666,11.6472,0.9832,0.9832);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A1A1A").s().p("AhTB2IAAjrIA5AAIAAC8IBuAAIAAAvg");
	this.shape_3.setTransform(90.6958,11.6226,0.9832,0.9832);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A1A1A").s().p("AhTB2IAAjrIA5AAIAAC8IBuAAIAAAvg");
	this.shape_4.setTransform(53.6274,11.6226,0.9832,0.9832);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1A1A1A").s().p("ABDB2IgOgrIhuAAIgNArIg7AAQAoiCAyhpIBNAAQAzBrApCAgAgqAcIBPAAQgTg3gUgwQgWAzgSA0g");
	this.shape_5.setTransform(12.7736,11.6226,0.9832,0.9832);

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
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXBhQgQAPgTAJQgFgNgIgLQAXgKAPgSIgXAAIAHgYIAmAAIAFgBIARAHIADgMIgmAAIAGgZIA2AAIgbgKIAJgHIgzAAIAHgcIA7AAIABgGIgqAAIAGgZIArAAIACgGIgzAAIAHgaIAXAAIgFgTIAegJQAFAKADAQIgHACIAnAAIgFgCQAOgRAFgKIAfAKIgUATIAdAAIgHAaIg3AAIgCAGIAyAAIgHAZIgyAAIgBAGIA8AAIgHAcIg2AAIAUAJIgZAWIgJgFIgDAJIAEAMQAUgNANgLIAWAUIgsAYQAOASAUAIQgOAKgQASQgUgMgMgZIgDAKQgDAMgEAGQgEAGgIAEQgLAFgbAAQABgLgCgQgAgTBdIAQABQADAAABgEIAJgjQgMAXgRAPgAh9B8IAWhVQgQAagOAOQAAgNgHgVQAegeAZgyIgaAAIAJgjIAdAAIAOg0IAiAAIgOA0IAYAAIgKAjIgYAAIgCAJIASArIgaAbIgEgZIgcBpg");
	this.shape_3.setTransform(109.175,12.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhGBgQAbgJAPgQQANgOAIgYIggAAIAIgeIA3AAIABgQIAlgGQACANgCAJIAzAAIgJAeIhMAAIgFAOIBIAAIgEAMQgOAsgMAKQgJAHgNACQgNACgSgBQADgSgEgNIAVABQAGAAADgDQADgCAEgLIgpAAQgVAggrAQQgDgRgKgMgAh/B8IAXhXQgQAdgOAOQAAgQgFgWQAcgdAag1IgbAAIAJgjIAdAAIANgvIAfAAIgMAvIAXAAIgKAjIgXAAIgCAHQAHARAJAdIgbAZIgCgWIgdBsgAgigCIANgxIAbAAQABgJgBgIIATgDIgkAAIAIgeIA2AAIABgTIAkgEIAAAXIA0AAIgIAeIgjAAIATADIgMARIAcAAIgNAwIgjAAIAFgTIhVAAIgEAUgAAqgzIAbAAIAKgUIgmAAIABAUg");
	this.shape_4.setTransform(77.875,12.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWBZQASACAIgBQAGAAAEgDQAIgFANglIgZAAQAGAUAAAMIgfAKQABgOgEgVIAUgHIhyAAIgLAHIAUAHQgVAtgXATIgXgVQASgQAOgZIgUAKQgFgUgGgNQBAgaAyg7IhPAAIAJgiIAuAAQgDgNgIgQIAmgNQAJARAGARIgWAIIAbAAQANgTAMgXIAkAJIgTAhIBAAAIgWAwIAZAAIgWAuIAcAAIgEAOQgZBIgPAMQgLAJgPADQgHABgaAAQAEgUgGgPgAgZANIBZAAIAIgOIhRAAIgQAOgAATghIAqAAIAIgOIgnAAgAg3A7IAfgDQABAcgIAaIghAEQAIgbABgcgAgPA5IAegGQADAXgCAXIggAIQADgTgCgdg");
	this.shape_5.setTransform(45.2,12.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiGByQgIgJgGgDQAeghAVhNIAUhOIBpAAIAJgkIAnAAIgJAkIAdAAQgLgLgKgHIAdgXQAWAOALANIgRAOIAcAAIgKAlIhPAAQgGAggCAbQATgXAOgaIAkAJQgdAxgoApQADAXAKAAQAHAAAOgsQAKAOAQAHQgOAlgNANQgNAMgVAAQgYAAgLgeQgTARgaAOQgHgQgMgPQAfgPAcgZQgBgpALg8IhDAAIgGAZIA/AAIgFANQgKAqgHAQQgHAUgFAGQgKAJgNADQgKACgVAAQAFgSgFgRQgTAxgaAbQgDgGgIgIgAhOAzIATABQAFAAAEgDQAEgFAKgjIgbAAQgJAbgGAPg");
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


(lib.mo_sc1subnumber = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFDE00").s().p("AhVBfQgeghAAg9QAAg9AdgjQAdgiA4AAQA5AAAeAiQAeAjAAA9QAAA7gfAjQgeAjg4AAQg3AAgdgjgAgog6QgPAVAAAmQABAoAPAUQAOATAYAAQAYAAARgUQAPgTAAgoQAAglgPgWQgRgWgYAAQgZAAgOAWg");
	this.shape.setTransform(93.4,12.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDE00").s().p("AhVCCIAAg1IAsABQATAAAWgJQAVgJARgRQgQAMggAAQgtAAgbgaQgZgZAAgoQAAgqAdgZQAcgaAwAAQAyAAAeAbQAeAbAAA4QAAAXgGAXQgHAWgOATQgPAUgWAOQgWAOggAHQgdAHglAAIgJAAgAgjhDQgMAMAAAUQAAATAMAMQAMALAXAAQAVAAAOgKQANgLAAgWQgBgVgMgLQgMgMgWAAQgYAAgMANg");
	this.shape_1.setTransform(67.5,12.9809);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFDE00").s().p("AhWCCIAAg1IAsABQAUAAAWgJQAVgIARgSQgQAMggAAQguAAgZgaQgagZAAgoQAAgqAcgZQAdgaAxAAQAxAAAeAbQAeAbAAA4QAAAYgGAWQgGAWgPATQgOAUgXAOQgVAOghAHQgcAHgmAAIgKAAgAgjhDQgMANAAATQAAASAMANQALALAYAAQAWAAANgKQANgMAAgVQAAgVgMgLQgNgMgWAAQgXAAgNANg");
	this.shape_2.setTransform(42.475,12.9809);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFDE00").s().p("AgpA3IAWhtIA9AAIgiBtg");
	this.shape_3.setTransform(25.9,25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFDE00").s().p("AhVCCIAAg1IArABQAUAAAWgJQAVgJARgRQgQAMggAAQguAAgagaQgZgZAAgoQAAgqAcgZQAdgaAwAAQAxAAAfAbQAeAbAAA4QAAAXgGAXQgHAWgOATQgPAVgWANQgVAOghAHQgdAHglAAIgJAAgAgjhDQgMANAAATQAAASAMANQAMALAXAAQAVAAAOgKQANgLAAgWQgBgVgMgLQgMgMgWAAQgYAAgMANg");
	this.shape_4.setTransform(10.8,12.9809);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_sc1subnumber, new cjs.Rectangle(0,0,105,30.5), null);


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

	// logo_white
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AK1BUIiAh9IAAB9IgmAAIAAinIAxAAICAB8IAAh8IAmAAIAACngAGvBUIgUgeIh9AAIgUAeIguAAIBsinIApAAIBsCngAGIAWIgrhCIgsBCIBXAAgAglBUIAAgjICYAAIAIAAQAOgCAAgOQAAgPgPgCIhqAAIgQgBQgUgDgMgOQgKgOAAgRQAAgTAMgOQAMgNASgDIClgBIAAAjIiTAAIgLAAQgKAEAAALQAAAMAKACIALABIByABQAVACAMAPQALAOAAASQAAATgLAOQgNARgWABIgMABgAlEBUIAAgjICaAAIAIAAQAGgBAEgFQAEgFAAgFQAAgPgPgCIhrAAIgQgBQgVgDgMgOQgKgOAAgRQAAgTAMgOQAMgOAUgCICkgBIAAAjIiTAAIgLAAQgLAEAAALQAAAMALACIALABIBzABQAUACANAPQALAOAAASQAAATgLAOQgNARgXABIgMABgAm6BUIAAinIAnAAIAACngAo+BUIiBh9IAAB9IgmAAIAAinIAxAAICAB8IAAh8IAmAAIAACng");
	this.shape.setTransform(74.175,60.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlMB3QiZhehLicIgEgGQgKgWgKgIQgPgNgdgDIhFgIIAAgUICoAAIAAACQA7CjCRBkQCSBlCzAAQC0AACRhlQCThjA5ikIABgCICpAAIAAAUIhHAIQgdADgPANQgJAIgLAWIgCAGQhNCciZBeQiYBdi0AAQizAAiZhdg");
	this.shape_1.setTransform(74.2,99.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AISDUIgBgCQg5ijiThkQiRhki0AAQizAAiSBkQiRBkg7CjIAAACIioAAIAAgUIBFgHQAdgEAPgNQAKgIAKgWIAEgGQBLicCZheQCZhdCzAAQC0AACYBdQCZBeBNCcIACAGQALAWAJAIQAPANAdAEIBHAHIAAAUg");
	this.shape_2.setTransform(74.2,21.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mo_logo, new cjs.Rectangle(0,0,148.4,120.3), null);


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

	// sb_sc4_bg
	this.instance = new lib.sb_sc4bg("synched",0);
	this.instance.setTransform(359.6,263,1.0107,1.0107,0,0,0,301.8,257.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:301.7,regY:257.2,scaleX:1.263,scaleY:1.263,x:353.6,y:242.1},20,cjs.Ease.cubicOut).wait(250));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.4,-523.5,778.4,1513.8);


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
p.nominalBounds = new cjs.Rectangle(-21.5,-18.7,274,87);


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
	this.instance.setTransform(812.75,952.35,1,1,0,0,0,330.1,282.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.0911,scaleY:1.0911,x:864.75,y:932.2},21,cjs.Ease.cubicOut).wait(69));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(493.8,623.5,966.9000000000001,1105.8);


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

	// mo_sc1-sub-number
	this.instance = new lib.mo_sc1subnumber();
	this.instance.setTransform(52.6,16.7,0.7967,0.7967,0,0,0,52.6,15.3);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.788)",1,1,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.7,-1.5,100,40);


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

	// MergedLayer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_27 = new cjs.Graphics().p("ADxBXQAogjAAhBIAAgKIAZAAIgBAeQAMA4AjATQgLAJgHAMQgZgPgNgjQgLAegYAVQgJgLgLgGgAkCBRQAdgNASgWQgLgTgIgdQgGAKgFAFIgOgPIAAADIg1AAIAAA4IA0gSQAAANADAMQhHAbgJAGQgCgPgIgMQAIgDAAgKIAAhRIA2AAIAAglIg4AAIAAgaIBSAAIAABLQAVgfALg6IAaAFIgJAjIBBAAIAAAXIgKAAQgJA1gTAgQASAWAYALQgLALgGALQgWgLgTgWQgUAWgcANQgEgLgLgMgAjWgkQAHAhAMAYQALgXAGgkIgjAAgAC6BoIAAhHIgqAAIAAgVIBsAAIAAAVIgpAAIAABHgAriBYQAGgKAEgMIgPAKQgGgOgMgTIASgJQAHALAJASQAHgXAAgqIAAhNQAsgJAXgKIAUATQgVAIgqAIIAAAjIBDAAIAAAYIgVAAIAABrIgZAAIAAhrIgVAAIAAACQAABJgVAgQgMgLgJgEgAS8BnIAAhjIgpAAIAABNIgaAAIAAhmIBDAAIAAgZIhWAAIAAgZIBYAAIgLgYIAagJIARAhIBRAAIAAAZIhYAAIAAAZIBHAAIAABJQAAAUgMAEQgJAFgeAAQgBgLgHgPQATACAIgBQAFgBAAgDIAAgwIgsAAIAABjgAsXBmIAAhIIgoAAIAAgXIAoAAIAAgPIgqAAIAAgWIAWAAQgDgOgEgJIASgFIgdAAIAAgVIAlAAIgGgRIAagHQAGANAEALIAfAAIAAAVIgbAAIARAEIgJAYIAWAAIAAAWIglAAIAAAPIAiAAIAAAXIgiAAIAABIgAsWgiIgPAEIAfAAIAKgcIghAAQAGANABALgA0iBjIAAgYIBOAAIAAgaIg5AAIAAgXIA5AAIAAgZIguAAIAAgSQgLAIgRAIQgHgMgJgJQAogRAggeIgdAAIAAgZIBLAAQAPAVAYATQAZATAcALQgKAKgIANQgMgFgPgKIAAARIgvAAIAAAZIA5AAIAAAXIg5AAIAAAaIBRAAIAAAYgAz8gWIBrAAQgdgTgYgcQgVAZghAWgAJ9BdIAAgbIBOAAIAAikIAcAAIAAA/IBOAAIAAAbIhOAAIAABKIBeAAIAAAbgACNBQQAJgPAIgcIAVAFQgHAbgKATgAtDBLQALgPAIgXIAUAFQgJAZgNAUgADZAsIATgHQAJASAGAPIgVAJQgEgQgJgTgADzgHIAAAIIhZAAIAAgUIBZAAIAAACQARgfAFg0IAZAEIgGAjIAsAAIAEgBIASAFQgJApgHAUIgWgFQAEgNAFgYIgrAAQgHAYgLATIgRgMgACYgeIAAgUIAiAAIAAgLIgnAAIAAgWIAnAAIAAgQIAZAAIAAAQIAmAAIAAAWIgmAAIAAALIAhAAIAAAUg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_graphics_27,x:136.925,y:88.3}).wait(33));

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
	this.shape_4.setTransform(270.0848,106.5,0.0184,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(26,26,26,0.298)").ss(0.5).p("AmkAAINJAA");
	this.shape_5.setTransform(230.375,106.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(26,26,26,0.529)").ss(0.5).p("ArZAAIWzAA");
	this.shape_6.setTransform(199.45,106.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(26,26,26,0.702)").ss(0.5).p("AvBAAIeDAA");
	this.shape_7.setTransform(176.2,106.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(26,26,26,0.827)").ss(0.5).p("AxnAAMAjPAAA");
	this.shape_8.setTransform(159.525,106.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(26,26,26,0.914)").ss(0.5).p("AzXAAMAmvAAA");
	this.shape_9.setTransform(148.375,106.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(26,26,26,0.965)").ss(0.5).p("A0aAAMAo1AAA");
	this.shape_10.setTransform(141.6,106.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(26,26,26,0.988)").ss(0.5).p("A09AAMAp7AAA");
	this.shape_11.setTransform(138.125,106.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#1A1A1A").ss(0.5).p("A1KAAMAqVAAA");
	this.shape_12.setTransform(136.825,106.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#1A1A1A").ss(0.5).p("AVMAAMgqYAAA");
	this.shape_13.setTransform(136.65,106.5);
	this.shape_13._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},14).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(23).to({_off:false},0).wait(37));

	// line
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(26,26,26,0)").ss(0.5).p("AVMAAMgqYAAA");
	this.shape_14.setTransform(3.2848,70.7,0.0184,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(26,26,26,0.298)").ss(0.5).p("AmkAAINJAA");
	this.shape_15.setTransform(42.975,70.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(26,26,26,0.529)").ss(0.5).p("ArZAAIWzAA");
	this.shape_16.setTransform(73.9,70.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(26,26,26,0.702)").ss(0.5).p("AvBAAIeDAA");
	this.shape_17.setTransform(97.15,70.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(26,26,26,0.827)").ss(0.5).p("AxnAAMAjPAAA");
	this.shape_18.setTransform(113.775,70.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(26,26,26,0.914)").ss(0.5).p("AzXAAMAmvAAA");
	this.shape_19.setTransform(124.95,70.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(26,26,26,0.965)").ss(0.5).p("A0aAAMAo1AAA");
	this.shape_20.setTransform(131.725,70.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(26,26,26,0.988)").ss(0.5).p("A09AAMAp7AAA");
	this.shape_21.setTransform(135.175,70.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#1A1A1A").ss(0.5).p("A1KAAMAqVAAA");
	this.shape_22.setTransform(136.475,70.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#1A1A1A").ss(0.5).p("AVMAAMgqYAAA");
	this.shape_23.setTransform(136.65,70.7);
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
p.nominalBounds = new cjs.Rectangle(-0.2,-12.5,273.8,120);


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

	// line_l_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A1A1A").ss(0.5).p("AVMAAMgqYAAA");
	this.shape.setTransform(261.2,24.5065,0.3384,1,-90);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(14));

	// line_l
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1A1A1A").ss(0.5).p("AVMAAMgqYAAA");
	this.shape_1.setTransform(-10.7,24.3565,0.3384,1,-90);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(3).to({_off:false},0).wait(14));

	// line_b
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A1A1A").ss(0.5).p("AVMAAMgqYAAA");
	this.shape_2.setTransform(125.246,70.45,1.0022,1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3).to({_off:false},0).wait(14));

	// line_copy
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1A1A1A").ss(0.5).p("AVMAAMgqYAAA");
	this.shape_3.setTransform(239.6514,-21.5,0.16,1);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(3).to({_off:false},0).wait(14));

	// line
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A1A1A").ss(0.5).p("AVMAAMgqYAAA");
	this.shape_4.setTransform(10.5433,-21.5,0.1586,1);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(3).to({_off:false},0).wait(14));

	// sb_sc1_sub_number
	this.instance = new lib.sb_sc1subnumber("synched",0);
	this.instance.setTransform(137.7,12,0.754,0.754,0,0,0,46.7,15.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regY:15.6,scaleX:1,scaleY:1,x:133.8,y:12.05,alpha:1},15,cjs.Ease.backOut).wait(1));

	// sb_sc1_sub_tt
	this.instance_1 = new lib.sb_sc1subtt("synched",0);
	this.instance_1.setTransform(136.75,13.95,1,1,0,0,0,134.5,10);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},16,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-30.4,274.29999999999995,101.9);


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
p.nominalBounds = new cjs.Rectangle(130.2,-91,590.8,857.6);


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
	this.instance.setTransform(235,166.5,1,1,0,0,0,235,166.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:797,y:196.55},19,cjs.Ease.cubicOut).wait(41));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1032,363.1);


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


(lib.an_logo = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(82.2,63.1,1,1,0,0,0,74.2,60.1);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.729)",2,2,7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90).to({_off:false},0).to({_off:true},180).wait(90));

	// logo_dark_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1A1A").s().p("AA7BUIh/h9IAAB9IgmAAIAAinIAxAAIB+B8IAAh8IAmAAIAACng");
	this.shape.setTransform(145.625,63.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AhoBUIAAgjICZAAIAIAAQAGgBAEgFQAEgFAAgFQAAgPgPgCIhqAAIgQgBQgVgDgMgOQgKgOAAgRQAAgTAMgOQAMgOAUgCICjgBIAAAjIiSAAIgLAAQgLAEAAALQAAAMALACIALABIByABQAUACANAPQALAOAAASQAAATgLAOQgNARgXABIgMABg");
	this.shape_1.setTransform(60.175,63.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A1A1A").s().p("AhoBUIAAgjICZAAIAIAAQAOgCAAgOQAAgPgPgCIhqAAIgQgBQgUgDgMgOQgLgOAAgRQAAgTAMgOQANgNATgDICjgBIAAAjIiSAAIgLAAQgLAEAAALQAAAMALACIALABIByABQAUACANAPQALAOAAASQAAATgLAOQgNARgWABIgNABg");
	this.shape_2.setTransform(88.825,63.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A1A1A").s().p("ABSBUIgTgeIh9AAIgTAeIguAAIBrinIApAAIBrCngAArAWIgrhCIgqBCIBVAAg");
	this.shape_3.setTransform(117.025,63.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A1A1A").s().p("AA7BUIh/h9IAAB9IgmAAIAAinIAxAAIB+B8IAAh8IAmAAIAACng");
	this.shape_4.setTransform(18.725,63.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1A1A1A").s().p("AgSBUIAAinIAlAAIAACng");
	this.shape_5.setTransform(39.825,63.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1A1A1A").s().p("AlMB3QiZhehLicIgDgGQgLgWgKgIQgOgNgegDIhFgIIAAgUICoAAIAAACQA7CjCRBkQCSBlCzAAQC0AACRhlQCThjA5ikIABgCICpAAIAAAUIhHAIQgdADgPANQgIAIgMAWIgCAGQhMCciaBeQiYBdi0AAQizAAiZhdg");
	this.shape_6.setTransform(82.2,102.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1A1A1A").s().p("AISDUIgBgCQg5ijiThkQiRhki0AAQizAAiSBkQiRBkg7CjIAAACIioAAIAAgUIBFgHQAegEAOgNQAKgIALgWIADgGQBLicCZheQCZhdCzAAQC0AACYBdQCaBeBMCcIACAGQAMAWAIAIQAPANAdAEIBHAHIAAAUg");
	this.shape_7.setTransform(82.2,24.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},270).wait(90));

	// logo_dark
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1A1A1A").s().p("AA7BUIh/h9IAAB9IgmAAIAAinIAxAAIB+B8IAAh8IAmAAIAACng");
	this.shape_8.setTransform(145.625,63.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1A1A1A").s().p("AhoBUIAAgjICZAAIAIAAQAGgBAEgFQAEgFAAgFQAAgPgPgCIhqAAIgQgBQgVgDgMgOQgKgOAAgRQAAgTAMgOQAMgOAUgCICjgBIAAAjIiSAAIgLAAQgLAEAAALQAAAMALACIALABIByABQAUACANAPQALAOAAASQAAATgLAOQgNARgXABIgMABg");
	this.shape_9.setTransform(60.175,63.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1A1A1A").s().p("AhoBUIAAgjICZAAIAIAAQAOgCAAgOQAAgPgPgCIhqAAIgQgBQgUgDgMgOQgLgOAAgRQAAgTAMgOQANgNATgDICjgBIAAAjIiSAAIgLAAQgLAEAAALQAAAMALACIALABIByABQAUACANAPQALAOAAASQAAATgLAOQgNARgWABIgNABg");
	this.shape_10.setTransform(88.825,63.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1A1A1A").s().p("ABSBUIgTgeIh9AAIgTAeIguAAIBrinIApAAIBrCngAArAWIgrhCIgqBCIBVAAg");
	this.shape_11.setTransform(117.025,63.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1A1A1A").s().p("AA7BUIh/h9IAAB9IgmAAIAAinIAxAAIB+B8IAAh8IAmAAIAACng");
	this.shape_12.setTransform(18.725,63.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1A1A1A").s().p("AgSBUIAAinIAlAAIAACng");
	this.shape_13.setTransform(39.825,63.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1A1A1A").s().p("AlMB3QiZhehLicIgDgGQgLgWgKgIQgOgNgegDIhFgIIAAgUICoAAIAAACQA7CjCRBkQCSBlCzAAQC0AACRhlQCThjA5ikIABgCICpAAIAAAUIhHAIQgdADgPANQgIAIgMAWIgCAGQhMCciaBeQiYBdi0AAQizAAiZhdg");
	this.shape_14.setTransform(82.2,102.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1A1A1A").s().p("AISDUIgBgCQg5ijiThkQiRhki0AAQizAAiSBkQiRBkg7CjIAAACIioAAIAAgUIBFgHQAegEAOgNQAKgIALgWIADgGQBLicCZheQCZhdCzAAQC0AACYBdQCaBeBMCcIACAGQAMAWAIAIQAPANAdAEIBHAHIAAAUg");
	this.shape_15.setTransform(82.2,24.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).to({state:[]},90).wait(270));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172,134);


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
	this.instance.setTransform(237.05,749.4,1.4373,1.4373,0,0,0,137.7,56);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(81).to({startPosition:81},0).to({_off:true},1).wait(180));

	// an_sc4_bg
	this.instance_1 = new lib.an_sc4bg("synched",0,false);
	this.instance_1.setTransform(-55.55,0.05,1.0012,1.0012);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({startPosition:89},0).to({_off:true},1).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-524.1,779.3,1515.6);


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
	this.instance.setTransform(287.55,612.2,1.4254,1.4256,0,0,0,136.8,48.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).wait(79));

	// an_shadow
	this.instance_1 = new lib.an_shadow("synched",0,false);
	this.instance_1.setTransform(418.3,448.8,1.0664,1.0664,0,0,0,1066.6,1063.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// sb_sc3_bg
	this.instance_2 = new lib.sb_sc3bg("synched",0);
	this.instance_2.setTransform(298.3,261.95,1,1,0,0,0,309.4,265.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1069.2,-1035.4,3034.1000000000004,3027.6000000000004);


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
	this.instance.setTransform(304.7,639.85,1.4428,1.443,0,0,0,143.8,35.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(78));

	// an_sc2_bg
	this.instance_1 = new lib.an_sc2bg("synched",0,false);
	this.instance_1.setTransform(559.4,119.7,1.1826,1.1826,0,0,0,1066.7,1063.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.3,-400.9,1143.6,1307.8);


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
	this.instance.setTransform(458.1,737.8,1.0016,1.0016,0,0,0,163.8,36.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(41));

	// an_sc1_sub
	this.instance_1 = new lib.an_sc1sub("synched",0,false);
	this.instance_1.setTransform(316.25,184.25,1.686,1.686,0,0,0,134.6,15.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).wait(35));

	// an_sc1_title
	this.instance_2 = new lib.an_sc1title("synched",0,false);
	this.instance_2.setTransform(302.1,-35.8,1.5574,1.5574,0,0,0,137.5,52.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

	// an_car1
	this.instance_3 = new lib.an_car1("synched",0,false);
	this.instance_3.setTransform(-14.6,523.65,1.1366,1.1366,0,0,0,516,181.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

	// an_sc1_bg
	this.instance_4 = new lib.an_sc1bg("synched",0,false);
	this.instance_4.setTransform(241.85,219.5,1.5403,1.5403,0,0,0,345.6,280.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-601.1,-352.6,1541.2,1321);


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

	// an_logo
	this.instance = new lib.an_logo("synched",0);
	this.instance.setTransform(948.25,556.45,1,1,0,0,0,86.5,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	// sc4
	this.instance_1 = new lib.sc4("synched",0);
	this.instance_1.setTransform(1129.95,1045.65,1,1,0,0,0,300,249.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(270).to({_off:false},0).wait(90));

	// sc3
	this.instance_2 = new lib.sc3("synched",0);
	this.instance_2.setTransform(1129.95,1046.05,1,1,0,0,0,300,250);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(180).to({_off:false},0).to({_off:true},90).wait(90));

	// sc2
	this.instance_3 = new lib.sc2("synched",0,false);
	this.instance_3.setTransform(1129.95,1046.05,1,1,0,0,0,300,250);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90).to({_off:false},0).to({_off:true},90).wait(180));

	// sc1
	this.instance_4 = new lib.sc1("synched",0,false);
	this.instance_4.setTransform(1140.75,1068.05,1,1,0,0,0,310.8,272);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},90).wait(270));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-239.3,-239.4,3034.1000000000004,3027.6);


// stage content:
(lib._300x600 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(184.1,339.85,0.5,0.5,0,0,0,1198.1,1125.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(719).to({mode:"single",startPosition:359},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-385.1,-43.1,1368,1214.6999999999998);
// library properties:
lib.properties = {
	id: 'FF22514E8FBB4760B18695513798AD24',
	width: 300,
	height: 600,
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