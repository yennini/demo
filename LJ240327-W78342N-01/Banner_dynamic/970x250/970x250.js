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
p.nominalBounds = new cjs.Rectangle(0,0,1800,500);


(lib.sc2bg = function() {
	this.initialize(img.sc2bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,600);


(lib.sc3bg = function() {
	this.initialize(img.sc3bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,525,450);


(lib.sc4bg = function() {
	this.initialize(img.sc4bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1260,500);// helper functions:

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
	this.instance.setTransform(-457,-8,1.034,1.034);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-457,-8,1302.8,517);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").p("AgTBiQAZgIANgRQgQgUgJgeIAZgFQAGAQAIAMQAEgOABgXIgtAAIAAhdIAtAAIAAgmIAdAAIAAAmIAxAAIAABdIgxAAQgBAkgLAXQAbAUAqAHQgNAMgGAPQgqgKgXgTQgQASgYALQgJgQgKgIQgCAIgDAFQgGAHgLACQgLACgOgCQgBgOgGgKIATABQAFAAADgDQADgFACgRIgHACQgDgOgJgUIAMgEQADAFAGAOIABgZIhLAAIAAiRIBiAAIAAAaIgeAAIAAAPIAZAAIAAAYIgZAAIAAAQIAZAAIAAAYIgZAAIAAAPIAiAAIAAALQgDBAgFASgAhXhZIAAAPIARAAIAAgPgAATgQIATAAIAAgqIgTAAgAhGgyIgRAAIAAAQIARAAgAhXAFIARAAIAAgPIgRAAgAhFBXQgBgTgHgYIAOgDQAHAXABAUgAhRAsQAEAYgBAYIgOACQABgbgDgWgAh/BjQAHgTAFgoIARAGQgEAkgHAXgABDg6IAAAqIAUAAIAAgqg");
	this.shape.setTransform(259.9459,83.1681);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAqBeQgQASgYAKQgJgPgKgIQAZgJANgQQgQgUgJgfIAZgEQAGAQAIAMQAEgOABgXIgtAAIAAhdIAtAAIAAgnIAdAAIAAAnIAxAAIAABdIgxAAQgBAkgLAXQAbAUAqAGQgNAMgGAPQgqgJgXgTgABFgQIAUAAIAAgpIgUAAgAAVgQIATAAIAAgpIgTAAgAhAB5QgBgOgGgKIATABQAFAAADgEQADgEACgRIgHACQgDgPgJgTIAMgEIAJATIABgaIhLAAIAAiQIBiAAIAAAaIgeAAIAAAPIAZAAIAAAXIgZAAIAAARIAZAAIAAAYIgZAAIAAAPIAiAAIAAALQgDA/gFATQgCAIgDAEQgGAIgLABIgOACIgLgBgAhVAGIARAAIAAgPIgRAAgAhVghIARAAIAAgRIgRAAgAhVhJIARAAIAAgPIgRAAgAh9BkQAHgUAFgnIARAGQgEAkgHAXgAgRBjIAAAAgAhcAuIANgBQAEAYgBAYIgOACQABgbgDgWgAhLAtIAOgDQAHAXABATIgOAEQgBgTgHgYg");
	this.shape_1.setTransform(259.725,83.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").p("AB6A7QgFAvgJAIQgGAHgKABQgIABgTgBQgBgLgFgKIgJAEQgFgNgLgOIAVgIQAMANAGAMIgKAEIAOABQAEAAADgDQAEgFADgXIiqAAIAAhmIC5AAIAAAUIhJAAIAAAKIA9AAIAAAPIg9AAIAAAKIA+AAIAAARIg+AAIAAAKIBZAAgAB5grIhhAAIAAhEIBhAAgAguhSQgLAogrAQQgGgNgKgIQAfgLAJgYIgfAAIAAgYIAlAAIACgRIAdAAIgCARIA2AAIAAAKQgDApgIAJQgEAGgKABQgIABgRgBQgBgOgGgJQAIACAJAAQAEAAACgDQADgDACgQgABahYIgmAAIAAAWIAmAAgAhyBrQAQgOAOgYIAZANQgRAagMAPgAADAMIgzAAIAAAKIAzAAgAgwgNIAAAKIAzAAIAAgKgAgwAxIAzAAIAAgKIgzAAgAARBKQAJAQAFATIgZAHQgDgQgJgTgAgXBMQAHATACATIgcAGQAAgNgHgbg");
	this.shape_2.setTransform(231.5809,83.0779);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah0BsQAQgOAOgZIAZAOQgRAZgNAPgAA+B7QgBgLgEgKIgJADQgGgNgLgOIAVgHQANANAFALIgJAFIANABQAFgBACgCQAFgFACgXIiqAAIAAhmIC5AAIAAATIhIAAIAAAKIA9AAIAAAQIg9AAIAAAJIA9AAIAAARIg9AAIAAAKIBZAAIgBAKQgFAwgIAHQgGAIgLAAIgNABIgOAAgAgzAxIAzAAIAAgKIgzAAgAgzAWIAzAAIAAgJIgzAAgAgzgDIAzAAIAAgKIgzAAgAgzBRIAZgEQAHATACATIgbAFQgBgMgGgbgAgIBSIAWgHQAJAQAFATIgYAHQgDgQgJgTgAh3gvQAfgKAKgYIggAAIAAgYIAmAAIACgRIAcAAIgCARIA3AAIgBAJQgDAqgHAJQgEAFgLABQgHACgSgBQgBgOgFgJQAHABAJAAQAEAAADgCQADgDACgQIgeAAQgLAogsAQQgGgOgKgIgAAVgqIAAhFIBhAAIAABFgAAyhBIAmAAIAAgWIgmAAg");
	this.shape_3.setTransform(231.825,83);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").p("AhIhUIAAAaIAjAAIAAgagAhIA3IAjgHIAAgYIgjAAgAglgeIgjAAIAAAbIAjAAgAB4g1QgCBTgCAgQgDAjgGAJQgIALgOACQgJACgbgBQgBgSgIgMIAeABQAHAAADgEQAIgKAChyIgcAAQgEA5gNAjQgRArgjAYQgHgMgOgLQAUgPAKgPIhzAbIgFggIASgDIAAitIBcAAIAACaIAKgCIADAYQAWghAEhEIggAAIAAgeIAhAAIABg4IAeAAIAAA4IA5AAg");
	this.shape_4.setTransform(204.4906,83.0806);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdBkQAVgPAJgPIhzAbIgFggIATgDIAAitIBbAAIAACaIAKgCIADAYQAXghAEhEIghAAIAAgeIAiAAIAAg4IAfAAIgBA4IA6AAIAAAOQgCBTgDAgQgDAjgGAJQgHALgPACQgIACgcgBQgBgSgIgMIAfABQAGAAADgEQAIgKAChyIgcAAQgDA5gOAjQgQArgjAYQgIgMgOgLgAhJA4IAjgHIAAgYIgjAAgAhJgCIAjAAIAAgbIgjAAgAhJg5IAjAAIAAgaIgjAAg");
	this.shape_5.setTransform(204.525,82.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").p("ABEg9IAAAQIAyAAIAACKQAAATgJAGQgIAGgVAAQgCgQgGgMIAOAAQADAAAAgDIAAgbIgVAAIAAA4IgbAAIAAg4IgUAAIAAA6IgbAAIAAipIAvAAIAAgQIgyAAIAAgbIAyAAIAAghIAbAAIAAAhIAdAAQgLgMgMgIIARgOQASALALANIgMAKIAPAAIAAAbgAgzA3IAoAAIAAAcIgoAAIAAApIgcAAIAAgpIgrAAIAAgcIArAAIAAgQIgiAAIAAheIAiAAIAAgOIgnAAIAAgbIAnAAIAAgZIAcAAIAAAZIAlAAIAAAbIglAAIAAAOIAjAAIAABeIgjAAgAgnACIgQAAIAAAQIAQAAgAAVgSIAAARIAUAAIAAgRgAApAoIAAgRIgUAAIAAARgAgnghIgQAAIAAAPIAQAAgAhagSIAPAAIAAgPIgPAAgAhaASIAPAAIAAgQIgPAAgABEgSIAAARIAVAAIAAgRgABZAoIAAgRIgVAAIAAARg");
	this.shape_6.setTransform(177.575,82.8689);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGB8IAAipIAvAAIAAgRIgyAAIAAgbIAyAAIAAghIAbAAIAAAhIAdAAQgLgLgMgJIARgOQASALALANIgMAKIAPAAIAAAbIg3AAIAAARIAyAAIAACKQAAATgJAGQgIAFgVAAQgCgPgGgMIAOAAQAAAAABAAQABgBAAAAQAAgBABAAQAAgBAAgBIAAgaIgVAAIAAA4IgbAAIAAg4IgUAAIAAA6gABEAoIAVAAIAAgSIgVAAgAAVAoIAUAAIAAgSIgUAAgABEgCIAVAAIAAgRIgVAAgAAVgCIAUAAIAAgRIgUAAgAhPB8IAAgqIgrAAIAAgbIArAAIAAgQIgiAAIAAhfIAiAAIAAgNIgnAAIAAgbIAnAAIAAgaIAcAAIAAAaIAlAAIAAAbIglAAIAAANIAjAAIAABfIgjAAIAAAQIAoAAIAAAbIgoAAIAAAqgAg3ARIAQAAIAAgPIgQAAgAhaARIAPAAIAAgPIgPAAgAg3gSIAQAAIAAgQIgQAAgAhagSIAPAAIAAgQIgPAAg");
	this.shape_7.setTransform(177.575,82.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").p("AB5hBIgBAOQgBBSgDAgQgDAigGAJQgHAKgNADQgKACgXgBQgBgQgIgOQALABAPAAQAGAAADgEQAIgKAChyIgYAAQgDA6gLAjQgOAqggAZQgGgLgLgKIhpAKIgDgaIA1gEIAAgQIguAAIAAgWIAuAAIAAgKIgtAAIAAhRIAtAAIAAgKIg0AAIAAgXIA0AAIAAgKIgsACQgCgLgFgMQBHgDArgJIAMAXIguAHIAAANIAxAAIAAAPIAZAAIABg4IAeAAIgBA4gAhWgQIAUAAIAAgLIgUAAgAhCAOIAAgMIgUAAIAAAMgAglBQIAtgEQAOgUAHgeQAGgZABgmIgYAAIAAgUIgxAAIAAAKIAtAAIAABRIgtAAIAAAKIAvAAIAAAWIgvAAgAglACIAAAMIAUAAIAAgMgAgRgQIAAgLIgUAAIAAALg");
	this.shape_8.setTransform(150.0713,83.2395);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgLBnIhpAKIgDgbIA1gDIAAgQIguAAIAAgXIAuAAIAAgKIgtAAIAAhQIAtAAIAAgKIg0AAIAAgXIA0AAIAAgLIgsADQgCgMgGgLQBIgEArgIIAMAXIgvAHIAAANIAyAAIAAAOIAZAAIAAg3IAfAAIgBA3IA2AAIgBAPQgBBSgDAfQgDAjgGAIQgHALgNADQgLACgXgBQAAgRgJgNIAbABQAGAAADgFQAHgJADhyIgYAAQgDA6gMAjQgNAqggAYQgGgKgLgKgAgmBQIAtgDQAPgVAHgdQAGgZABgmIgYAAIAAgUIgyAAIAAAKIAuAAIAABQIguAAIAAAKIAvAAIAAAXIgvAAgAgmAPIAVAAIAAgMIgVAAgAhWAPIAUAAIAAgMIgUAAgAgmgPIAVAAIAAgMIgVAAgAhWgPIAUAAIAAgMIgUAAg");
	this.shape_9.setTransform(150.1,83.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").p("ABfhYIAADTIghAAIAAgNIh9AAIAAAOIgfAAIAAjUIBDAAQAGgcABgGIAlAEQgIAVgEAJgAg/g6IAAAcIB9AAIAAgcgAg/gBIAAAaIB9AAIAAgagAA+BRIAAgbIh9AAIAAAbg");
	this.shape_10.setTransform(123.225,82.9264);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AheB8IAAjUIBDAAIAHgjIAlAFIgMAeIBaAAIAADTIghAAIAAgNIh9AAIAAAOgAg/BRIB9AAIAAgcIh9AAgAg/AZIB9AAIAAgaIh9AAgAg/geIB9AAIAAgcIh9AAg");
	this.shape_11.setTransform(123.225,82.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").p("ABkhrQgTAmgNAUIgegKQASgdAJgegAB3A2IhoAAIAABFIggAAIAAhFIhlAAIAAggIBlAAIAAgfIhVAAIAAgfIBVAAIAAhSIAgAAIAABSIBaAAIAAAfIhaAAIAAAfIBoAAgAhGgvQgFgWgWgkIAegMQAVAhAHAZg");
	this.shape_12.setTransform(95.75,82.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgRB7IAAhFIhlAAIAAggIBlAAIAAgfIhVAAIAAgfIBVAAIAAhSIAgAAIAABSIBaAAIAAAfIhaAAIAAAfIBoAAIAAAgIhoAAIAABFgAhghpIAdgMQAVAhAHAZIgfAMQgFgWgVgkgAAng7QARgdAKgeIAhALQgSAmgNAUg");
	this.shape_13.setTransform(95.75,82.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").p("AB7gzQAAApgmAlQggAghCAkICCAAIAAA+IjvAAIAAhAQBWgwAmgfQAugkAAgbQAAgtg/AAQgqAAg0AOIAAg8QAzgQBCAAQAwAAAfAZQAkAcAAA0g");
	this.shape_14.setTransform(68.225,78.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ah6CdIAAhAQBWgwAmgfQAugkAAgbQAAgtg/AAQgqAAg0AOIAAg8QAzgQBCAAQAwAAAfAZQAkAcAAA0QAAApgmAlQggAghCAkICCAAIAAA+g");
	this.shape_15.setTransform(68.225,78.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").p("ACniaQg0CvhACFIhqAAQhFiUgqigIBPAAIAdBeQAiBoAYA0QAXg3AghgQAWhCAJghg");
	this.shape_16.setTransform(37.56,79.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag2CaQhGiTgqigIBPAAIAdBdQAiBoAYA1QAYg4AghfQAVhDAJggIBRAAQg0CuhACFg");
	this.shape_17.setTransform(37.55,79.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").p("ABuBdIAAA9IjbAAIAAk0IBKAAIAAD3g");
	this.shape_18.setTransform(13.7,79.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhsCaIAAkzIBJAAIAAD1ICRAAIAAA+g");
	this.shape_19.setTransform(13.7,79.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").p("AAuhyIAAEyIhbAAIAAkyIh/AAIAAhNIFZAAIAABNg");
	this.shape_20.setTransform(254.85,33.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgtDAIAAkyIh/AAIAAhNIFYAAIAABNIh+AAIAAEyg");
	this.shape_21.setTransform(254.85,33.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").p("AhvgCQAAA9AlAgQAeAcAtAAQAtAAAegcQAkggAAg9QAAg1ghggQgfgegwAAQgvAAgeAeQgiAgAAA1gADQgDQAABnhBA1Qg3AvhYAAQhXAAg3gvQhBg1AAhnQAAheBDg2QA6gwBTAAQBSAAA6AwQBDA2AABeg");
	this.shape_22.setTransform(214.85,33.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AiOCZQhAg1AAhnQAAheBCg2QA7gwBSAAQBSAAA6AwQBDA2AABeQgBBng/A1Qg3AuhZABQhXgBg3gugAhNhXQghAfgBA2QABA9AjAhQAfAbAtAAQAtAAAegbQAjghAAg9QAAg2gggfQgfgegwAAQgvAAgeAeg");
	this.shape_23.setTransform(214.85,33.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").p("ACJBzIAABNIkQAAIAAl/IBbAAIAAEyg");
	this.shape_24.setTransform(178.95,33.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AiHDAIAAl/IBbAAIAAEyIC0AAIAABNg");
	this.shape_25.setTransform(178.95,33.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").p("AgtDAIAAl/IBbAAIAAF/g");
	this.shape_26.setTransform(151.825,33.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgtDAIAAl/IBbAAIAAF/g");
	this.shape_27.setTransform(151.825,33.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").p("AAFi/QCoAAAACLQAABIg3AlQgtAdhEAAIhWAAIAABqIhbAAIAAl/gAhRAJIBPAAQAnAAARgLQAYgPAAgmQAAghgYgOQgTgMgnAAIhNAAg");
	this.shape_28.setTransform(123.25,33.675);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AisDAIAAl/ICxAAQCoAAAACLQABBIg4AlQgtAdhDAAIhXAAIAABqgAhRAJIBQAAQAmAAARgLQAYgPAAgmQAAghgYgOQgSgMgoAAIhNAAg");
	this.shape_29.setTransform(123.25,33.675);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").p("ACuAAQAABMgwAqQgvAphOAAQhPAAgugoQgxgrAAhMQAAhLAxgqQAugpBPAAQBOAAAvApQAwAqAABLgAhQAAQAAAlAXAXQAXAZAkAAQAjAAAXgZQAVgYAAgkQAAgngXgXQgWgWglAAQgjAAgWAXQgWAXAAAmg");
	this.shape_30.setTransform(81.675,37.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ah8B2QgxgqAAhMQAAhLAxgqQAugpBPAAQBOAAAvApQAwAqAABLQAABMgwAqQgvAphOAAQhPAAgugpgAg6g9QgWAXAAAmQAAAlAXAYQAXAXAkAAQAjAAAXgXQAVgYAAglQAAgngXgXQgWgWglABQgjAAgWAWg");
	this.shape_31.setTransform(81.675,37.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").p("AgShyQA3gnBBgBIAABVQg+AAgzAfIAADBIhZAAIAAkuIBIAAg");
	this.shape_32.setTransform(51.8,37.3961);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhkCbIAAkuIBIAAIAKAgQA3gmBAgBIAABVQg9gBgzAgIAADBg");
	this.shape_33.setTransform(51.8,37.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").p("AAFi/QCpAAAACLQAABIg4AlQgtAdhDAAIhXAAIAABqIhcAAIAAl/gAhRAJIBPAAQAmAAASgLQAYgPAAgmQAAghgYgOQgTgMgmAAIhOAAg");
	this.shape_34.setTransform(17.975,33.675);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AitDAIAAl/ICyAAQCpAAAACLQAABIg4AlQgtAdhDAAIhXAAIAABqgAhRAJIBPAAQAmAAASgLQAYgPAAgmQAAghgYgOQgTgMgmAAIhOAAg");
	this.shape_35.setTransform(17.975,33.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(-0.4,12.7,273.79999999999995,85.3), null);


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

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjCIIAcgyQARgpAAgtQAAgsgRgpIgbgyIAdAAQAUAmAKAcQALAiAAAjQAAAkgLAiQgKAdgUAlg");
	this.shape.setTransform(266.275,56.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMBrIAAhMIBAAAQgYgSgegNIgtAAQgPAQgXAPIA0AAIAABKIgRAAIAAgGIgqAAIAAAIIgQAAIAAhAIgTAIQgEgJgFgEQApgQAYgWIg8AAIAAgPIBLAAQAJgKAIgNIhKAAIAAhEIBNAAIAAA/IAQADQgFAMgJANIBFAAQgMgJgRgGIAIgIIgXAAIAAhEIBOAAIAABEIg0AAQAXAIALAJIgHAGIAsAAIAAAPIg6AAQApAWASARIgMAKIgLgJIAABBIgRAAIAAgGIgsAAIAAAIgAAdBUIAsAAIAAgmIgsAAgAhEBUIAqAAIAAgmIgqAAgAAfg1IAtAAIAAgmIgtAAgAhJg1IAsAAIAAgmIgsAAg");
	this.shape_1.setTransform(243.75,56.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA3BxIAAgWIihAAIAAgNIAlAAIAAhAIgdAAIAAgNIgLgGQAPgPAAgZIAAgOIBZAAIAAAnIhOAAQgEANgHAHIDGAAIAAAOIgfAAIAABAIAkAAIAAANIgkAAIAAAWgAgzBOIBqAAIAAgNIhqAAgAgzA1IBqAAIAAgOIhqAAgAgzAbIBqAAIAAgNIhqAAgAgsgeIAYAAIAAgSIgYAAgAhRgeIAXAAIAAgSIgWAAgAA1gQQgUALgdAEQgDgHgDgGQAWgDATgHQgQgLgJgPIgHAAIAAgJQgFgHgDgDQAUgIAAgPIAAgMIA+AAIAAAXQAAAGAEAAIANAAIALgBIABALQgDABgJAAIgRAAQgJAAgDgEQgDgEAAgKIAAgJIggAAQAAATgTALIBEAAIADAAIAKAEQgJAUgTANQARAHAYADQgFAEgEAJQgcgFgTgKgAA1gfQANgHAJgMIgtAAQAJAMAOAHgAhihDIAAgLIAmAAIAAgLIguAAIAAgLIAuAAIAAgMIARAAIAAAMIAsAAIAAALIgsAAIAAALIAmAAIAAALg");
	this.shape_2.setTransform(218.925,56.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAJBnQAfgYAPgqIgVAAQgWApgmAbQgJgIgDgCQAjgXATgjIgTAAQgQARgLAIIgNgLQAbgRARgdIgfAAIAAgPICQAAIAAAPIhgAAIgLARIBiAAIAAAIQgCAlgDARQgCARgFAFQgGAFgJABQgKABgQgBQAAgJgEgHIAXABQAGAAACgCQAGgHADgzIgRAAQgPAughAegAhjBwQgCgMgDgFIAYAAQAEAAAAgFIAAhBIghAKIgEgSIAlgKIAAg1IghAAIAAgQIAhAAIAAgxIASAAIAAAxIAZAAIAAAQIgZAAIAAAwIAXgFIADAPIgaAIIAABGQgBAPgHAEQgHADgRAAIgJAAgAgNgaIAAhOIBtAAIAABOgAADgmIBMAAIAAgUIhMAAgAADhHIBMAAIAAgUIhMAAg");
	this.shape_3.setTransform(194.05,56.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhwBfQA3gIApgVQgjgZgUgpIAGgBIgaAAIAAgSIBSAAIAAglIhdAAIAAgSIBdAAIAAglIASAAIAAAlIBeAAIAAASIheAAIAAAlIA5AAIAEAAIANAIQgUAugtAfQAqAVA1AHQgHAHgEALQg+gKgogYQgpAXg9AMQgFgLgFgHgAABA4QAkgXATgiIhrAAQARAiAjAXg");
	this.shape_4.setTransform(169.325,56.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6BbQgWgRAAgeQAAgSAOgPQAMgLAQgFQgjgSAAgbQAAgbAWgPQAUgOAfAAQAfAAAVANQAWAPAAAcQAAAPgMANQgJAKgOAHQAQAFALALQAPAPABATQAAAegYAQQgWAQgkAAQgkAAgWgQgAgnAUQgNAKABAPQAAASARAKQAOAIAUAAQAUAAAPgIQARgKAAgSQAAgPgNgKQgOgMgZAAQgXAAgQAMgAgghIQgMAJAAAPQAAANAMAKQANAKATAAQATAAANgKQANgKAAgMQAAgQgNgJQgMgJgUAAQgTAAgNAJg");
	this.shape_5.setTransform(146.75,55.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAGCIQgUglgJgdQgMgiAAgkQAAgjAMgiQAJgcAUgmIAdAAIgbAyQgRApAAAsQAAAtASApIAbAyg");
	this.shape_6.setTransform(126.675,56.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},88).to({state:[]},1).wait(1));

	// Layer_5
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmCbQgIgKgHgFQAigSAMggQAJgZACg0QgQACgIAEQgFgTgKgWQALgDAOgXQAJgMANgbIgrAAIAAgoIA9AAQAMgdAFgPIAvAMIgNAgIBWAAIAAAoIhrAAQgOAagVAhIBOgIIgRgcIAjgQQAmA6AMAfIgnASIgLgbIgOAAIAABzQAAAIABACQABACAFAAIAPAAQAFAAABgJQACgIABghQAMALAYAFQgCArgJAPQgJAOgVAAIgaAAQgZAAgIgLQgIgKAAgdIAAhuIgVADQgCBCgNAiQgQArgpAXQgDgIgIgLgAitCaQAKgaAFg5IAhAFQgEA3gMAiQgMgGgUgFgAh1BLIAfgHQAHAnADAkIghAIQgBgegHgugAhNBCIAegKQAMAhAGAbIgfALQgEgYgNglgAiqAUQAMgDARgUQAJgLANgTQgiAFgGADIgOgmQAKgDALgRQAHgJAMgZQAPgdAJgbIAnARQgXAzgcApIAYgCQAUgkAIgUIAkAXQgWAqgcAlIAdgLQAVApAFAgIgfAMIgDgQQhOAOgRAHQgDgTgKgUgAhtAMIAlgFQgHgSgEgIQgNARgNAOg");
	this.shape_7.setTransform(252.775,17.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhICCIAwAAIAGgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAgBIAAhDQhfAHgRAGQgIgagGgNQATgCAggQQAVgIAlgWQhDAEgMAGQgFgVgIgUQAMgBATgLQAZgMAhgZQguAJg6AIQgDgSgJgTQCagVBOgiIAhAjQgtARg9AOIAUAMQgeAYggASIA/gEQAYgRAPgMIAgAdQg4ArhDAgIBngHQgKgMgOgNIAkgSQAyAwAWAhIglAXQgFgJgOgRIhQAGIAABJQAAARgDAIQgFAJgMAGQgQAGguABQgDgUgOgXgAikCCQAUgLAVgRQAUgSANgRIAtAQQgiAsgvAfQgcgXgKgFgAAvBVIAkgXQA3AlAbAeIgnAaQgZgfg2gng");
	this.shape_8.setTransform(215.45,17.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABQCuIAAgIIiaAAIAAAIIgoAAIAAhaIDsAAIAABagAhKCQICaAAIAAgKIiaAAgAhKB0ICaAAIAAgLIiaAAgAilBJIAAgcIBeAAIgKgRIALgCIg4AAIAAgaIBqAAIgFgMIApgJQAFAJAEAMIBsAAIAAAaIgsAAIgRATIBeAAIAAAcgAggAsIgHABIBJAAIgCAAQAIgLAEgIIhVAAQAHAKACAIgAiogWQAqgOAXgYQgsAFgIADIAAAAQgDgNgGgNQAJgBAOgKIASgNQgYABgHADIgJgaQAHgBAIgIQATgPAPgYIAZAPQgPATgTAPIAWgBIAUgVIAXAPQgbAdgfAWIAdgCIAIgPIAZAFIAAg8IAhAAIgFgOIAhgIQAGAKAEANIAlAAIAABVIgOAAQAMALAMARIAAh6IBLAAIAFgBIAZAMQgJAXgQAeQAZAWAAAUQABAVgPAJQgIAFgKABQgMABgOgBQgBgRgJgMIAVABQAFAAADgCQAGgDAAgIQAAgMgagTIAPgoIgaAAIAAB7IgjAAIAAgTIgUAKQgDgGgHgJIhEAPQgQAEgFADQgDgPgKgNQAOgHAAgQIAAgXQgbA7hIAbQgFgOgKgMgAgSgwIAhgGIgIgIIAHgDIggAAgAgShWIAmAAIAAgLIgmAAgAgSh1IAmAAIAAgNIgmAAg");
	this.shape_9.setTransform(178.7758,17.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah2CuIAAipIDxAAIAACoIguAAIAAgMIiXAAIAAANgAhKB9ICXAAIAAgaIiXAAgAhKBBICXAAIAAgXIiXAAgAikgRIAAgmIBRAAQgFgUgKgTIAkgGIhRAAIAAgnIB8AAQgEgMgIgPIAtgHQAJAOAGAUIB3AAIAAAnIhMAAIAhAHIgSAmIBOAAIAAAmgAgjg3IBKAAQALgZAGgUIhuAAQAPAWAEAXg");
	this.shape_10.setTransform(141.625,17.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhzCTIAAklIDkAAIAAA7IieAAIAAA4ICPAAIAAA4IiPAAIAAA/IChAAIAAA7g");
	this.shape_11.setTransform(109.175,16.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhGCTQgVgDgfgIIAAhAQBGATApAAQAjAAAPgGQAQgFAAgOQAAgVgogKIhKgTQgggIgSgVQgRgUAAgeQAAhZCDABQAmAABAAOIAAA+QghgJgSgDQgagDgeAAQg2AAAAAaQAAAQAeAIIBMAVQBLATAAA7QAAAtggAYQgiAYg/ABQglAAgfgGg");
	this.shape_12.setTransform(79.425,16.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhtB1QgxgpAAhOQAAhIA0gpQAsglA+ABQA/AAAtAkQAyApAABIQABBOgxApQgqAkhEAAQhDAAgqgkgAg8hDQgZAZAAApQABAtAbAaQAXAVAiAAQAjAAAXgVQAbgZAAguQAAgpgZgZQgXgWglAAQgjAAgZAWg");
	this.shape_13.setTransform(46.75,16.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiECTIAAklIB5AAQCDAAAABLQAAAVgNARQgNATgaAJIAAACQAaADASAQQAVASAAAbQAABWh/AAgAg+BbIBDAAQAcAAANgIQAOgHAAgSQAAgVgRgIQgNgGgeAAIg+AAgAg+gbIA2AAQAYAAANgGQARgHAAgTQAAgTgRgHQgMgEgYAAIg3AAg");
	this.shape_14.setTransform(13.3,16.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},88).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,270.2,70.4);


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
	this.shape.setTransform(120.2869,281.3451,0.9315,2.4326,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape_1.setTransform(-460.4368,126.1515,0.9315,2.4327);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.instance = new lib.sc3bg();
	this.instance.setTransform(-597,-26,1.6246,1.6245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CA0000").ss(1,1,1).p("EifHgtPME+PAAAMAAABafMk+PAAAg");
	this.shape_2.setTransform(351.375,240.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("EifHAtPMAAAhaeME+PAAAMAAABaeg");
	this.shape_3.setTransform(351.375,240.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-668,-514.2,2038.8,1436);


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
	this.shape.setTransform(924.8576,924.8602,2.3269,2.3385,44.9997);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-313.7,0,313.7,0).s().p("EgxAAxBMAAAhiBMBiBAAAMAAABiBg");
	this.shape_1.setTransform(924.8576,924.8602,2.3269,2.3385,44.9997);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EigVABxMCiGiiGMCelCelMiiGCiGg");
	this.shape_2.setTransform(944.375,943.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.204,0.776,1],-507.4,-507.4,507.5,507.4).s().p("EigVABxMCiGiiGMCelCelMiiGCiGg");
	this.shape_3.setTransform(944.375,943.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eie+ADIMCiGiiGMCb3Cb3MiiGCiGg");
	this.shape_4.setTransform(963.85,963.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.216,0.765,1],-498.7,-498.7,498.7,498.7).s().p("Eie+ADIMCiGiiGMCb2Cb3MiiFCiFg");
	this.shape_5.setTransform(963.85,963.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EidmAEfMCiFiiFMCZICZIMiiFCiGg");
	this.shape_6.setTransform(983.375,982.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.227,0.749,1],-490,-489.9,490,490).s().p("EidmAEfMCiFiiGMCZICZJMiiFCiGg");
	this.shape_7.setTransform(983.375,982.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EicPAF2MCiFiiFMCWaCWaMiiFCiFg");
	this.shape_8.setTransform(1002.875,1001.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.239,0.733,1],-481.2,-481.2,481.3,481.3).s().p("EicPAF2MCiFiiFMCWaCWaMiiFCiFg");
	this.shape_9.setTransform(1002.875,1001.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eia4AHNMCiGiiFMCTrCTsMiiGCiFg");
	this.shape_10.setTransform(1022.375,1020.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.251,0.722,1],-472.5,-472.5,472.6,472.6).s().p("Eia4AHNMCiGiiFMCTrCTsMiiGCiFg");
	this.shape_11.setTransform(1022.375,1020.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiZhAIlMCiGiiGMCQ9CQ9MiiGCiGg");
	this.shape_12.setTransform(1041.875,1039.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.263,0.706,1],-463.8,-463.8,463.9,463.9).s().p("EiZhAIlMCiGiiGMCQ9CQ9MiiGCiGg");
	this.shape_13.setTransform(1041.875,1039.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiYKAJ8MCiGiiGMCOPCOPMiiGCiGg");
	this.shape_14.setTransform(1061.4,1058.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.275,0.69,1],-455.1,-455.1,455.1,455.1).s().p("EiYJAJ8MCiFiiFMCOPCOOMiiGCiGg");
	this.shape_15.setTransform(1061.4,1058.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiWzALTMCiGiiFMCLgCLgMiiFCiFg");
	this.shape_16.setTransform(1080.9,1077.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.29,0.678,1],-446.4,-446.4,446.4,446.4).s().p("EiWzALTMCiGiiFMCLhCLgMiiGCiFg");
	this.shape_17.setTransform(1080.9,1077.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiVbAMqMCiFiiFMCIyCIyMiiGCiFg");
	this.shape_18.setTransform(1100.4,1096.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.302,0.663,1],-437.7,-437.6,437.7,437.7).s().p("EiVbAMqMCiFiiFMCIyCIyMiiGCiFg");
	this.shape_19.setTransform(1100.4,1096.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiUEAOCMCiGiiGMCGDCGDMiiGCiGg");
	this.shape_20.setTransform(1119.9,1116.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.314,0.647,1],-428.9,-428.9,429,429).s().p("EiUEAOCMCiGiiGMCGDCGDMiiGCiGg");
	this.shape_21.setTransform(1119.9,1116.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiStAPZMCiGiiGMCDVCDVMiiGCiGg");
	this.shape_22.setTransform(1139.425,1135.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.325,0.631,1],-420.2,-420.2,420.3,420.3).s().p("EiStAPZMCiGiiGMCDVCDVMiiGCiGg");
	this.shape_23.setTransform(1139.425,1135.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiRWAQwMCiGiiGMCAnCAnMiiGCiGg");
	this.shape_24.setTransform(1158.9,1154.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.337,0.62,1],-411.5,-411.5,411.5,411.5).s().p("EiRVAQwMCiFiiGMCAnCAnMiiGCiGg");
	this.shape_25.setTransform(1158.9,1154.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiP+ASHMCiFiiFMB94B94MiiFCiFg");
	this.shape_26.setTransform(1178.425,1173.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.349,0.604,1],-402.8,-402.8,402.8,402.8).s().p("EiP+ASHMCiFiiFMB94B94MiiFCiFg");
	this.shape_27.setTransform(1178.425,1173.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiOnATeMCiFiiFMB7KB7KMiiFCiFg");
	this.shape_28.setTransform(1197.925,1192.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.361,0.588,1],-394,-394,394.1,394.1).s().p("EiOnATeMCiFiiFMB7KB7KMiiFCiFg");
	this.shape_29.setTransform(1197.925,1192.525);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiNQAU2MCiGiiGMB4bB4cMiiGCiFg");
	this.shape_30.setTransform(1217.425,1211.65);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.373,0.576,1],-385.3,-385.3,385.4,385.4).s().p("EiNQAU1MCiGiiFMB4bB4bMiiGCiGg");
	this.shape_31.setTransform(1217.425,1211.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.384,0.561,1],-313.7,0,313.7,0).s().p("EgxAAxBMAAAhiBMBiBAAAMAAABiBg");
	this.shape_32.setTransform(1236.9406,1230.7932,1.698,2.3385,44.9997);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiKCAYEMCiGiiGMBx/Bx/MiiGCiGg");
	this.shape_33.setTransform(1248.85,1242.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.373,0.576,1],-364.7,-364.7,364.8,364.7).s().p("EiKCAYEMCiGiiFMBx+Bx+MiiFCiGg");
	this.shape_34.setTransform(1248.85,1242.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiIKAZ7MCiFiiFMBuQBuQMiiFCiFg");
	this.shape_35.setTransform(1260.775,1254.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.357,0.592,1],-352.8,-352.7,352.8,352.8).s().p("EiIKAZ7MCiFiiFMBuQBuQMiiFCiFg");
	this.shape_36.setTransform(1260.775,1254.625);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiGTAbyMCiFiiFMBqiBqiMiiFCiFg");
	this.shape_37.setTransform(1272.725,1266.575);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.345,0.612,1],-340.8,-340.8,340.9,340.9).s().p("EiGTAbyMCiFiiFMBqiBqiMiiFCiFg");
	this.shape_38.setTransform(1272.725,1266.575);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiEcAdqMCiGiiGMBmzBmzMiiGCiGg");
	this.shape_39.setTransform(1284.675,1278.525);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.329,0.627,1],-328.9,-328.9,329,329).s().p("EiEcAdqMCiGiiGMBmzBmzMiiGCiGg");
	this.shape_40.setTransform(1284.675,1278.525);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiCkAfhMCiFiiGMBjFBjFMiiGCiFg");
	this.shape_41.setTransform(1296.6,1290.45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.314,0.643,1],-317,-317,317,317).s().p("EiCkAfhMCiFiiGMBjFBjFMiiGCiFg");
	this.shape_42.setTransform(1296.6,1290.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiAtAhYMCiFiiFMBfWBfWMiiFCiFg");
	this.shape_43.setTransform(1308.525,1302.375);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.302,0.659,1],-305.1,-305,305.1,305.1).s().p("EiAtAhYMCiFiiFMBfWBfWMiiFCiFg");
	this.shape_44.setTransform(1308.525,1302.375);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eh+2AjPMCiFiiFMBboBboMiiFCiFg");
	this.shape_45.setTransform(1320.475,1314.325);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.29,0.678,1],-293.1,-293.1,293.2,293.2).s().p("Eh+2AjPMCiFiiFMBboBboMiiFCiFg");
	this.shape_46.setTransform(1320.475,1314.325);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eh8/AlHMCiFiiGMBX6BX5MiiGCiGg");
	this.shape_47.setTransform(1332.4,1326.25);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.275,0.694,1],-281.3,-281.3,281.2,281.2).s().p("Eh8/AlGMCiGiiFMBX5BX6MiiGCiFg");
	this.shape_48.setTransform(1332.4,1326.25);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eh7IAm+MCiGiiGMBULBULMiiGCiGg");
	this.shape_49.setTransform(1344.325,1338.175);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.263,0.71,1],-269.3,-269.3,269.4,269.4).s().p("Eh7IAm+MCiGiiGMBULBULMiiGCiGg");
	this.shape_50.setTransform(1344.325,1338.175);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eh5RAo1MCiGiiGMBQcBQdMiiFCiFg");
	this.shape_51.setTransform(1356.25,1350.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.247,0.725,1],-257.4,-257.4,257.4,257.4).s().p("Eh5QAo1MCiFiiGMBQcBQdMiiFCiGg");
	this.shape_52.setTransform(1356.25,1350.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eh3ZAqsMCiFiiFMBMuBMtMiiGCiGg");
	this.shape_53.setTransform(1368.2,1362.05);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.231,0.741,1],-245.5,-245.5,245.5,245.5).s().p("Eh3ZAqsMCiFiiFMBMuBMuMiiGCiFg");
	this.shape_54.setTransform(1368.2,1362.05);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eh1iAsjMCiFiiFMBJABI/MiiGCiGg");
	this.shape_55.setTransform(1380.15,1374);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.22,0.761,1],-233.6,-233.6,233.5,233.5).s().p("Eh1iAskMCiFiiGMBJABI/MiiFCiGg");
	this.shape_56.setTransform(1380.15,1374);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EhzrAubMCiGiiGMBFRBFRMiiGCiGg");
	this.shape_57.setTransform(1392.075,1385.925);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.204,0.776,1],-221.6,-221.6,221.6,221.6).s().p("EhzrAubMCiGiiGMBFRBFRMiiGCiGg");
	this.shape_58.setTransform(1392.075,1385.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:2.3269,x:924.8576,y:924.8602}},{t:this.shape,p:{scaleX:2.3269,x:924.8576,y:924.8602}}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_32},{t:this.shape,p:{scaleX:1.698,x:1236.9406,y:1230.7932}}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,x:1403.993,y:1397.8479}},{t:this.shape,p:{scaleX:0.9454,x:1403.993,y:1397.8479}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,-111,2244.5,2238.3);


(lib.an_sc33Dcircle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(103,205,250,0)").ss(2).p("ACQAAQAAA7grAqQgqAqg7AAQg6AAgqgqQgrgqAAg7QAAg7ArgqQAqgqA6AAQA7AAAqAqQArArAAA6g");
	this.shape.setTransform(15.3594,15.3721,0.6189,0.6189);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(103,205,250,0.322)").ss(2).p("AiPAAQAAg7AqgqQAqgqA7AAQA8AAAqAqQAqAqAAA7QAAA8gqAqQgqAqg8AAQg7AAgqgqQgqgqAAg8g");
	this.shape_1.setTransform(15.4,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(103,205,250,0.569)").ss(2).p("Ai5AAQAAhNA2g2QA2g2BNAAQBNAAA2A2QA3A3AABMQAABNg3A2Qg2A3hNAAQhNAAg2g3Qg2g2AAhNg");
	this.shape_2.setTransform(15.425,15.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(103,205,250,0.737)").ss(2).p("AjWAAQAAhZA+g/QA/g+BZAAQBZAAA/A+QA/BBAABXQAABZg/A/Qg/A/hZAAQhZAAg/g/Qg+g/AAhZg");
	this.shape_3.setTransform(15.425,15.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(103,205,250,0.847)").ss(2).p("AjqAAQAAhhBEhFQBFhEBhAAQBhAABFBEQBFBHAABfQAABhhFBFQhFBFhhAAQhhAAhFhFQhEhFAAhhg");
	this.shape_4.setTransform(15.45,15.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(103,205,250,0.922)").ss(2).p("Aj2AAQAAhnBHhIQBIhHBnAAQBmAABJBHQBIBLAABkQAABmhIBJQhJBIhmAAQhnAAhIhIQhHhJAAhmg");
	this.shape_5.setTransform(15.45,15.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(103,205,250,0.965)").ss(2).p("Aj+AAQAAhpBKhLQBLhKBpAAQBpAABLBKQBLBMAABoQAABphLBLQhLBLhpAAQhpAAhLhLQhKhLAAhpg");
	this.shape_6.setTransform(15.45,15.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(103,205,250,0.988)").ss(2).p("AkCAAQAAhsBMhKQBKhMBsAAQBrAABMBMQBMBNAABpQAABrhMBMQhMBMhrAAQhsAAhKhMQhMhMAAhrg");
	this.shape_7.setTransform(15.45,15.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#67CDFA").ss(2).p("AjAAAQAAhPA4g5QA5g4BPAAQBQAAA4A4QA5A6AABOQAABQg5A4Qg4A5hQAAQhPAAg5g5Qg4g4AAhQg");
	this.shape_8.setTransform(15.4399,15.4399,1.3532,1.3532);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#67CDFA").ss(2).p("AkFAAQAAhtBMhMQBMhMBtAAQBsAABMBMQBOBOAABrQAABshOBMQhMBOhsAAQhtAAhMhOQhMhMAAhsg");
	this.shape_9.setTransform(15.45,15.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#67CDFA").ss(2).p("Aj+AAQAAhpBKhLQBLhKBpAAQBpAABLBKQBLBMAABoQAABphLBLQhLBLhpAAQhpAAhLhLQhKhLAAhpg");
	this.shape_10.setTransform(15.45,15.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#67CDFA").ss(2).p("AjwAAQAAhkBGhGQBGhGBkAAQBkAABHBGQBGBIAABiQAABkhGBHQhHBGhkAAQhkAAhGhGQhGhHAAhkg");
	this.shape_11.setTransform(15.425,15.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#67CDFA").ss(2).p("AjeAAQAAhcBBhBQBBhBBcAAQBcAABCBBQBBBCAABbQAABchBBCQhCBBhcAAQhcAAhBhBQhBhCAAhcg");
	this.shape_12.setTransform(15.4,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#67CDFA").ss(2).p("AjHAAQAAhSA6g7QA7g6BSAAQBTAAA7A6QA6A8AABRQAABTg6A7Qg7A6hTAAQhSAAg7g6Qg6g7AAhTg");
	this.shape_13.setTransform(15.4,15.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#67CDFA").ss(2).p("AitAAQAAhHAzgzQAzgzBHAAQBIAAAzAzQAzA0AABGQAABIgzAzQgzAzhIAAQhHAAgzgzQgzgzAAhIg");
	this.shape_14.setTransform(15.375,15.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#67CDFA").ss(2).p("ACQAAQAAA7grAqQgqAqg7AAQg6AAgqgqQgrgqAAg7QAAg7ArgqQAqgqA6AAQA7AAAqAqQArArAAA6g");
	this.shape_15.setTransform(15.35,15.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},6).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

	// Layer_3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(103,205,250,0)").ss(3).p("ABYAAQAAAkgaAaQgZAaglAAQgjAAgagaQgagaAAgkQAAgjAagaQAagaAjAAQAlAAAZAaQAaAaAAAjg");
	this.shape_16.setTransform(15.3184,15.3656,0.5415,0.5415);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(103,205,250,0.227)").ss(3).p("AhIAAQAAgdAWgVQAVgWAdAAQAfAAAVAWQAVAVAAAdQAAAegVAVQgVAWgfAAQgdAAgVgWQgWgVAAgeg");
	this.shape_17.setTransform(15.325,15.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(103,205,250,0.424)").ss(3).p("AheAAQAAgmAdgcQAbgcAnAAQAnAAAcAcQAbAcAAAmQAAAngbAcQgcAcgnAAQgnAAgbgcQgdgcAAgng");
	this.shape_18.setTransform(15.3,15.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(103,205,250,0.576)").ss(3).p("AhvAAQAAgtAhggQAhgiAuAAQAuAAAgAiQAhAgAAAtQAAAughAgQggAiguAAQguAAghgiQghggAAgug");
	this.shape_19.setTransform(15.325,15.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(103,205,250,0.698)").ss(3).p("Ah8AAQAAgzAlgkQAkglA0AAQA0AAAkAlQAkAkAAAzQAAA0gkAkQgkAlg0AAQg0AAgkglQglgkAAg0g");
	this.shape_20.setTransform(15.325,15.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(103,205,250,0.792)").ss(3).p("AiHAAQAAg3ApgnQAngpA4AAQA4AAAnApQAoAnAAA3QAAA4goAnQgnApg4AAQg4AAgngpQgpgnAAg4g");
	this.shape_21.setTransform(15.3,15.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(103,205,250,0.859)").ss(3).p("AiOAAQAAg6ArgpQApgrA7AAQA8AAApArQApApAAA6QAAA7gpAqQgpAqg8AAQg7AAgpgqQgrgqAAg7g");
	this.shape_22.setTransform(15.325,15.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(103,205,250,0.91)").ss(3).p("AiUAAQAAg9AtgqQAqgtA+AAQA+AAArAtQArAqAAA9QAAA9grArQgrAtg+AAQg+AAgqgtQgtgrAAg9g");
	this.shape_23.setTransform(15.325,15.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(103,205,250,0.945)").ss(3).p("AiYAAQAAg+AugsQAsguA/AAQBAAAAsAuQAsAsAAA+QAAA/gsAsQgsAuhAAAQg/AAgsguQgugsAAg/g");
	this.shape_24.setTransform(15.325,15.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(103,205,250,0.973)").ss(3).p("AibAAQAAhAAvgsQAsgvBBAAQBBAAAtAvQAtAsAABAQAABAgtAtQgtAvhBAAQhBAAgsgvQgvgtAAhAg");
	this.shape_25.setTransform(15.325,15.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(103,205,250,0.988)").ss(3).p("AidAAQAAhAAwgtQAtgwBBAAQBCAAAtAwQAuAtAABAQAABBguAtQgtAwhCAAQhBAAgtgwQgwgtAAhBg");
	this.shape_26.setTransform(15.325,15.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#67CDFA").ss(3).p("AieAAQAAhBAwgtQAtgwBCAAQBCAAAuAwQAuAtAABBQAABCguAtQguAwhCAAQhCAAgtgwQgwgtAAhCg");
	this.shape_27.setTransform(15.325,15.475);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#67CDFA").ss(3).p("AieAAQAAhBAvguQAugvBCAAQBCAAAuAvQAuAuAABBQAABCguAuQguAvhCAAQhCAAgugvQgvguAAhCg");
	this.shape_28.setTransform(15.325,15.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#67CDFA").ss(3).p("Ah0AAQAAgwAjghQAhgjAxAAQAxAAAhAjQAiAhAAAwQAAAxgiAhQghAjgxAAQgxAAghgjQgjghAAgxg");
	this.shape_29.setTransform(15.3384,15.4737,1.3532,1.3532);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#67CDFA").ss(3).p("AiYAAQAAg+AugsQAsguA/AAQBAAAAsAuQAsAsAAA+QAAA/gsAsQgsAuhAAAQg/AAgsguQgugsAAg/g");
	this.shape_30.setTransform(15.325,15.475);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#67CDFA").ss(3).p("AiRAAQAAg8AsgpQAqgsA8AAQA9AAApAsQArApAAA8QAAA8grAqQgpAsg9AAQg8AAgqgsQgsgqAAg8g");
	this.shape_31.setTransform(15.325,15.475);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#67CDFA").ss(3).p("AiIAAQAAg3ApgoQAngpA5AAQA5AAAnApQAoAoAAA3QAAA5goAnQgnApg5AAQg5AAgngpQgpgnAAg5g");
	this.shape_32.setTransform(15.325,15.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#67CDFA").ss(3).p("Ah9AAQAAgzAlglQAlglA0AAQA0AAAlAlQAkAlAAAzQAAA0gkAlQglAlg0AAQg0AAglglQglglAAg0g");
	this.shape_33.setTransform(15.325,15.425);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#67CDFA").ss(3).p("AhyAAQAAgvAjghQAhgiAvAAQAvAAAhAiQAiAhAAAvQAAAvgiAhQghAjgvAAQgvAAghgjQgjghAAgvg");
	this.shape_34.setTransform(15.325,15.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#67CDFA").ss(3).p("AhlAAQAAgpAfgeQAdgeApAAQArAAAdAeQAeAeAAApQAAAqgeAeQgdAegrAAQgpAAgdgeQgfgeAAgqg");
	this.shape_35.setTransform(15.325,15.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#67CDFA").ss(3).p("ABYAAQAAAkgaAaQgZAaglAAQgjAAgagaQgagaAAgkQAAgjAagaQAagaAjAAQAlAAAZAaQAaAaAAAjg");
	this.shape_36.setTransform(15.325,15.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-11.7,54.3,54.3);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#C8C9CA").s().p("AFVIyQgIgFAGgSQAFgQATgjIkSAGQgJAKgcABQgjACgTgCQgJgBgPgEIgOgEQnJALhxgCQjNADgggGQhCgOhzgbIiVgjQgfgwgPgaQgagtgKgpQgLgtgChLQgCgjAAh0QAAiHAFgrQAHgpAFgrQAGg3Ahg9QAOgaAggvQBIgMCPghQBzgaAbgBIBWAAIB0ABIBmAFIBvAHQC9AHC7ACIAPgEQATgFAXAAQAmAAAeAMIESAJQgLgSgIgSQgPgkATAAQAeAAAZAWQAWASAWAlQBxgGBwgCQB2gCBJAEQBDADAzAMQAcAGAyASQAXAIARAEQAJADAOAPQAPAQAoA4QAlAzALASQAIANADAPQABAJAAARQAAAKADAPIAGAgQARBdAABMQAAA5gGBAQgHBEgIAWQgMAgAEAHQAAAogcAmQgZAhg4BEQgRAUgQAKQgPAJgYAHIguAOQgeAJgnAHQgnAIg/AAIh+gCQg5AAhVgFIiIgIQgjA4ghAOQgKAEgJAAQgJAAgHgFg");
	this.shape.setTransform(127.475,56.7189);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,255,113.5), null);


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
	this.shape.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("ApiH5QBxACHJgLIAOAEQAPAEAJABQATACAjgCQAcgBAJgKIESgGQgTAjgFAQQgGASAIAFQANAKAWgJQAhgOAjg4QArACBdAGQBVAFA5AAQAwAABOACQA/AAAngIQAngHAegJQARgFAdgJQAYgHAPgJQAQgKARgUQA4hEAZghQAcgmAAgoQgEgHAMggQAIgWAHhEQAGhAAAg5QAAhMgRhdQgEgXgCgJQgDgPAAgKQAAgRgBgJQgDgPgIgNQgLgSglgzQgog4gPgQQgOgPgJgDQgRgEgXgIQgygSgcgGQgzgMhDgDQhJgEh2ACQhwAChxAGQgWglgWgSQgZgWgeAAQgTAAAPAkQAIASALASIkSgJQgegMgmAAQgXAAgTAFIgPAEQi7gCi9gHQgjgChMgFQhGgEgggBQgngBhNAAQhKAAgMAAQgbABhzAaQiPAhhIAMQggAvgOAaQghA9gGA3QgFArgHApQgFArAACHQAAB0ACAjQACBLALAtQAKApAaAtQAPAaAfAwQAgAHB1AcQBzAbBCAOQAgAGDNgDg");
	this.shape.setTransform(128.425,57.6689);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,256.9,115.4), null);


(lib.Group = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgLAaQgEgCABgFIATgpQACgFAFACQAFADgCAEIgSApQgDAFgFgCg");
	this.shape.setTransform(153.7479,39.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAMAaQgFADgDgFIgRgqQgDgEAFgDQAGgCACAFIASApQACAGgFABg");
	this.shape_1.setTransform(154.1869,22.2381);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("Agbg5QARAFAEgOIAbAYIAEAEQADAGAAAJIAAA2QgCALgMAIIgXARQgCgQgQABQAHgVACgZQADgigMgdg");
	this.shape_2.setTransform(157.05,31.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AALAcQgHgFgGgNQgJgQgBgVIAFAAQAHABAFAEQALAJgFApg");
	this.shape_3.setTransform(146.2508,36.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAMgbQgIAFgGAOQgJAQgBAUIAGAAQAGAAAFgFQAMgJgFgpg");
	this.shape_4.setTransform(146.234,25.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgUhWQAUAJAJAPQANAWgBApQgCAsgLATQgIAPgUAI");
	this.shape_5.setTransform(150.8825,30.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AA2AAQAAAtgOAeQgPAegZAAQgWAAgPgeQgQgfAAgsQAAgqAQgfQAPgfAWAAQAZAAAPAfQAOAdAAAsg");
	this.shape_6.setTransform(148.825,31.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAHA7IgOAAQgGAAgFgFQgFgFAAgHIABhUQAAgHAFgEQAFgFAGAAIAOAAQAHAAAEAFQAFAFAAAHIgBBUQAAAHgFAEQgEAFgHAAg");
	this.shape_7.setTransform(102.925,73.2977);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgOBsIAbABQAKAAAIgIQAHgHABgLIABilQABgKgIgIQgHgIgLAAIgbAAQgLAAgHAHQgIAIAAAKIgCClQAAALAIAIQAHAHALAAg");
	this.shape_8.setTransform(103.0016,73.3734);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("ABFCTIiMgBQgdgBgUgUQgVgVAAgdIACiYQABgdAVgUQAUgVAdABICMABQAdABAVAVQAUAUAAAdIgCCYQAAAdgVAUQgVAVgdgBg");
	this.shape_9.setTransform(113.1256,73.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAJA7IgRAAQgGAAgFgFQgFgEAAgHIAAhVQAAgGAFgFQAFgFAGAAIARAAQAHAAAEAFQAFAFAAAGIAABVQAAAHgFAEQgEAFgHAAg");
	this.shape_10.setTransform(103.525,31.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgNBqIAbAAQAKAAAIgHQAHgIAAgKIAAihQAAgLgHgHQgIgHgKAAIgbAAQgKAAgIAHQgHAHAAALIAAChQAAAKAHAIQAIAHAKAAg");
	this.shape_11.setTransform(103.375,31.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("ABNCQIiaAAQgaAAgTgTQgSgTAAgaIAAifQAAgaASgTQATgSAaAAICaAAQAaAAATASQATATAAAaIAACfQAAAagTATQgSATgbAAg");
	this.shape_12.setTransform(113.55,31.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAJA8IgQAAQgIAAgFgFQgFgGAAgGIAAhVQAAgHAFgFQAFgGAIAAIAQAAQAHAAAGAGQAFAFAAAHIAABVQAAAGgFAGQgGAFgHAAg");
	this.shape_13.setTransform(60.8,74.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgLBsIATABQAMAAAKgJQAJgJAAgMIADibQAAgMgJgKQgIgJgNAAIgTAAQgMgBgJAJQgKAJAAANIgDCaQAAANAJAJQAJAJAMAAg");
	this.shape_14.setTransform(60.6987,74.4487);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AA/CbIiDgCQgggBgWgXQgWgXABgfIADibQAAgfAXgWQAXgWAgAAICDADQAfABAWAWQAXAXgBAgIgDCaQgBAggXAWQgXAWgfgBg");
	this.shape_15.setTransform(70.9016,74.4516);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAIA8IgPAAQgHAAgGgFQgFgGAAgIIAAhRQAAgIAFgFQAGgFAHAAIAPAAQAIAAAFAFQAFAFAAAIIAABRQAAAIgFAGQgFAFgIAAg");
	this.shape_16.setTransform(61.325,29.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AARC5IglAAQgIAAgGgGQgGgGAAgIIAElJQAAgIAGgGQAGgGAJAAIAkAAQAJAAAFAGQAHAGAAAIIgFFJQAAAJgGAFQgGAGgIAAg");
	this.shape_17.setTransform(61.3,36.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("ABHDiIiSgCQgdgBgUgVQgUgVABgdIAGk0QAAgdAVgUQAVgVAdABICNAFQAdABAUAVQAVAVgBAdIgCEyQAAAdgVAUQgVAUgdgBg");
	this.shape_18.setTransform(71.275,36.4767);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAWkyQgRAjgLBCQgQBbABB0QABB9AKBJQAIA/ARAt");
	this.shape_19.setTransform(70.4721,52.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgLhLQAAARABAIQABAIAGAbQAEASAEATQADAMAAAGQAAAJADAc");
	this.shape_20.setTransform(119.05,94.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAMhKQgCAcgDAUIgPBDQgCAKgBAY");
	this.shape_21.setTransform(119.9,9.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("Agpg6IBjADIADARQADATABAQQADAugGAtQgEAagEALIhfgBIgYgoIAAhkgAgph8IAABC");
	this.shape_22.setTransform(162.2618,49.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AjGBXIAAEkQBlAYAyAIQA/AKAUABQAlACALgNQAegjAhhZQA0iHAAiSQABiRglh4QgOgugjhKQgOgcgSgIQgWgKgyAGQgrAFhTAPIhLAOIgDB7");
	this.shape_23.setTransform(177.9753,52.7908);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("Al4BhQAfAAA2gDQBbgFAmgCQDggKBVgbQBggfAbgNQBKglAhhB");
	this.shape_24.setTransform(213,86.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("Ah7hAQAfAEATAFQAVAFAYALQAaAMALAHQAPAJASANQAZATA5A6QgPgegRgWQgegjgzgnQhEgzhCAig");
	this.shape_25.setTransform(233.975,14.783);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("Ah8A8QArACAxgVQAxgXAngfQAugkAXgaQgfAsgRAUQgZAbggAVQgkAZgNAGQgPAHgTAAQg4ACgFgRg");
	this.shape_26.setTransform(233.425,91.3605);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgWlPQALA5AUA+QAIAYAHA7QAIBDgBA8QgBA9gIBEQgHBBgIAZQgCAIgNAqQgMAkgKAl");
	this.shape_27.setTransform(245.5809,53.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AkJAuQCagIBjgQQCcgXBEgYIA2gU");
	this.shape_28.setTransform(225.075,77.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AkIgzQBuAJBhAOQA5AIBJAQQBOAPA6ASQAXAGAhAQ");
	this.shape_29.setTransform(225.6,28.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("Al4hpQApAACzANQBcAHAxAFQBLAJAuANQCFAjA7AnQAhAYAPASQAKAMAVAk");
	this.shape_30.setTransform(213.8,19.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAaABQgBAHgZgBQgZgBABgGQAAgGAYAAQALABAHACQAIACAAACg");
	this.shape_31.setTransform(73.8981,99.5813);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgYgIIgngCIAAADQACAFAJAEQALAFAlADQAjACAOgDQAQgEADgIIgmgB");
	this.shape_32.setTransform(73.925,100.2521);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAbAAQAAAEgbACQgJAAgIgBQgIgCAAgCQgBgBAIgCQAIgCAKgBQAKAAAJABQAHABABADg");
	this.shape_33.setTransform(75.0985,3.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgYAKIgnAAQADgHAJgEQAKgFAOgBQAogEAXAEQAQACAMALIgnAA");
	this.shape_34.setTransform(74.925,2.5125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAaAAQAAADgIACQgHACgLAAQgZgBAAgGQAAgCAHgCQAIgCAKAAQALAAAHACQAIACAAACg");
	this.shape_35.setTransform(130.275,2.82);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgTADIAmAAIABgF");
	this.shape_36.setTransform(134.575,2.475);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgTgCIAAAFIAnAA");
	this.shape_37.setTransform(125.65,2.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAcABQAAAGgcAAQgbgBAAgGQAAgCAIgCQAJgCAKAAQAMAAAIADQAIACAAACg");
	this.shape_38.setTransform(129.075,101.245);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgSgCIAlAAIABAF");
	this.shape_39.setTransform(133.45,101.65);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgSAEIAAgHIAkAA");
	this.shape_40.setTransform(124.4,101.45);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAFAZQAQgVAogCQgigJgSgFQgggJglgD");
	this.shape_41.setTransform(170.925,96.375);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAJgYQAFALAJAEQAIADAfAGQgrAJgVAEQglAIgWAD");
	this.shape_42.setTransform(171.975,8.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AKGgxIAFAHIgMAWQhAAShTARQg9ANg4AHQg1AGhEADQg3ABhRgCQhZgDgngBQhSgCh/gKQhEgFglgDQhCgFgjACQhLACg6AEQgoABgNAFQgJADgeAT");
	this.shape_43.setTransform(102.6,12.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAoALQAGgNgBgFQgCgEgLAAIgzAAQgJAAgGAIQgCACgIAN");
	this.shape_44.setTransform(167.3641,100.125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgrgNQAMATABABQAEAFAMABQANACAegCQAOAAABgGQABgEgFgQ");
	this.shape_45.setTransform(168.4773,4.9125);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AqIg1QAaARAJADQARAHAdABQAsABApgBQAngBB8gIQAVgBCBgIQBYgFAngBQCQgDBsADQBTADBPAMQB0ARCMAoQAKAMALAKIgFAJ");
	this.shape_46.setTransform(102.05,91.625);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AoQglQBLAdAFABQAiAKA1ADQAqACA+AAQA+ABAhABQCFAGBQACQApABCTAAQCfgBAeAAQAlABAUABQAHAAAKgBQAdgCgCAKQgBAGgHAF");
	this.shape_47.setTransform(114.6598,95.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AC2mKQgJACgxAHQgbAEgVACQg6AHgwAFQgpAEgUAKQgZAOgOAkQgWA5gLA2QgSBYAABuQAADQAqBmQAPAiAbARQAUALAiAFQAhAEA+AEQBIAEAugB");
	this.shape_48.setTransform(44.925,51.3028);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AIKgYQAGAKgBADQgBAEgMAAQgigCiLgDQiqgFh6ABQkbADhJABQhHACgjAFQgvAHhCAX");
	this.shape_49.setTransform(115.7271,8.75);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAMhGQgCADgMAMQgGAGgBAHQgCAHgEAFQgDAEgNAMQgLALABAQQABAQAJAIQAIAHAcANQAdAOAIAA");
	this.shape_50.setTransform(62.7958,95.625);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAihEQgjAPgLAIQgTAKgBANQgCAPACAGQABAFAHAJQAEAHALAKQAJAIAAAEQACAJABACQAEAIAMAI");
	this.shape_51.setTransform(62.9875,7.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAnldQgbAPgVBIQgfBkACClQACCnAXBdQAPBDAYAU");
	this.shape_52.setTransform(10.1939,51.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("Ah8hKQAVBPAcAlQAGAIAIADQABAAAXACQAiAFAhAEQAPABAlACQAeADAHAFQAJAAgDgFQgDgGgSgEQgtgFgrgIQgogIgOgFQgYgJgKgSQgKgQgWgjg");
	this.shape_53.setTransform(19.3391,88.55);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AB5hIQgEAJgiACQguAAgYADQgxADgeAFQgJAKgMAUQgZAogNA1QAaggAXgpQAIgOAFgEQAJgKASgFQAngKBJgJQAkgEAIgCQAMgFgLgJg");
	this.shape_54.setTransform(20.188,14.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AA7AdIAgABQC2AGA5gBQB9gCAvgEQBzgJBUgaQgWAFgoAFQhRAMhZADQhZAEitAEgAq8gLIAagJQAOgFAogGQA3gHAkAIIA9AOIGHAoICBAFIAHAA");
	this.shape_55.setTransform(80.525,19.1069);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAmgYIAkgBQCkgDA5ABQCcACAfACQCFAKBWAfQgXgGgogGQhRgNhZgEQhagDizgFgAq8AAIAaAMQBiAZA5gNQAggHARgDIGJgjIBzgD");
	this.shape_56.setTransform(79.75,85.2863);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAolCQgMAIgVATQgOAOgKAYQgJAVgCAYQgDAegIC6QAGC/ADAQQALBRA1Af");
	this.shape_57.setTransform(4.225,51.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(-0.7,-0.7,253.79999999999998,104.4), null);


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

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB1CUQgbgCgUgZQgWAQgcAKQgIgNgLgLQAfgLAXgSQgJgUgHgeIgqAAIAAAHQAeAZAJAJIgXAWIgXgXQgMAogfAYQgNgQgMgGQApgeACg0IgSAAIAAgdIBXAAQgIgvgDg/QgUAlgWAdIASgCIgEgOIAVgGQAIAYAEAWIgXAGIgCgKQgnAGgKADQgFgSgDgHQAHgCAIgMQAGgHAJgQQgUADgFADIgJgaQAHgDAFgIQANgVAHgeIAbAIQgLAcgQAYIAPgBIAJgUIAZAJIgCgwIAfAAQACBkALA7IAdAAIgQgOIAOgKQgRADgFACIgJgaQAGgCAKgMQAGgIAIgPQgTADgGADIgIgZQAEgBAGgKQAOgZAFgXIAbAHQgKAagOAXIAOgBIAIgUIAbAJQgSAmgYAdIASgCIgFgNIAWgGQAKAcAEASIgWAIIgDgNIgUADQANAJALAJIgIAIIAZAAIAAAdIglAAIAZAJQgMAZgWAWQAJAKALABQAIABAEgiQAHALAQAJQgKAygWAAIgCAAgABQBHQALgMAHgPIgbAAQADANAGAOgAhyCUIAAh6QgLAlgKATQgGgSgJgTQAVggANhCIgaAAIAAgjIAcAAIAAg7IAgAAIAAA7IAWAAIAAAjIgWAAIAAAOQAJALAVAiIgRAZQgDgLgKgTIAACTg");
	this.shape.setTransform(270.225,26.0287);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiMCPIAAglIB3AAIAAg9IhaAAIAAgkIBaAAIAAg2IhrAAIAAglIB/AAQgPgQgggXIAfgVQAqAcARATIgQANIBkAAIAAAlIhqAAIAAA2IBbAAIAAAkIhbAAIAAA9IB5AAIAAAlg");
	this.shape_1.setTransform(237.2,25.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhmCWIAAiSIDQAAIAACRIgnAAIAAgKIiDAAIAAALgAhABsICDAAIAAgXIiDAAgAhAA4ICDAAIAAgUIiDAAgAiNgOIAAgiIBFAAQgEgRgIgPIAegHIhFAAIAAghIBqAAQgEgMgFgKIAmgHQAGAJAHAUIBmAAIAAAhIhCAAIAeAHIgQAgIBDAAIAAAigAgegwIBAAAQAJgWAFgRIhfAAQAOAVADASg");
	this.shape_2.setTransform(203.9,25.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhkBzIAWAAQAEAAAAgEIAAgoIgzAAIAAhBICNAAIAABBIg1AAIAAApQAAAMgCAGQgEAHgHADQgKAFgeAAQgDgPgHgPgAhaAuIBHAAIAAgQIhHAAgAASByIADAHIgbANQgIgXgSgcIAbgLQARAeAFALQAegOAYgVQAagXAOgaIAiANQgiA/hEAmQgJgQgQgNgAiRB0QARgQAMgcIAgAKQgOAdgUAZQgNgMgOgIgAAYAKQAXgMAWgRQAYgUAMgTIAjAOQgjAug3AiQgLgQgPgKgAiQgEIAAgdIBHAAIgFgJIAZgFIhNAAIAAhbICXAAIAABbIg9AAQAGAKABAEIBBAAIAAAdgAhehGIBOAAIAAgMIhOAAgAhehoIBOAAIAAgLIhOAAgAAXhPQAVgLAUgRQAVgTANgSIAjAPQggAtgzAfQgMgOgPgMg");
	this.shape_3.setTransform(170.85,26.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAGBtQAhABAOgBQAJAAAAgIIAAiSIhhAAIAAglIBhAAIAAhAIAmAAIAABAIArAAIAAAlIgrAAIAACTQAAAQgEAIQgEAJgKAEQgQAIgtAAQgFgUgKgSgAiOBiIAAjWIBkAAIAAC3IhBAAIAAAfgAhrAgIAeAAIAAhyIgeAAgAgcgKIAfgNQAcApAJAhIgiAPQgHghgbgrg");
	this.shape_4.setTransform(138.1,26.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiUCsIAAhLQBKATAvAAQAmAAAXgOQAZgPAAgbQAAgggegMQgagKhBgBIgFAAIAAghIBchXIirAAIAAhKIEgAAIAAA8IhZBWQAlAHAcAbQAfAeAAAnQAACCipAAQg6AAhGgSg");
	this.shape_5.setTransform(101.075,19.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtAsIAAhYIBbAAIAABYg");
	this.shape_6.setTransform(72.45,33.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiUC+IAAhNQBng5AwgnQA3grAAghQAAg3hMAAQg1AAg+ARIAAhJQBBgTBNAAQA7AAAlAeQArAhAABAQABAygvAtQgmAmhQAsICeAAIAABLg");
	this.shape_7.setTransform(45,19.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAIC+IAAkeIhmAPIAAhGIC8gmIAAF7g");
	this.shape_8.setTransform(9.45,19.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},87).to({state:[]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285.4,40.9);


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
	this.instance = new lib.sc2bg();
	this.instance.setTransform(0,0,0.9431,0.9431);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,660.2,565.9);


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
	this.shape.graphics.f("#808080").s().p("AgYBdQAXgqAAgzQAAgygXgpIAVgJQAcAwAAA0QAAA2gcAvg");
	this.shape.setTransform(362.275,11.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#808080").s().p("AgDBNQADgHADgKIgMAIQgJgUgGgIIASgLIAMAVQAEgUAAgfIAAhGQAigHAYgLIAVAVQgWAJgfAGIAAAbIA5AAIAAAaIgRAAIAABcIgbAAIAAhcIgNAAQAABAgTAdQgIgKgMgGgAg0BbIAAg+IgjAAIAAgXIAjAAIAAgMIgkAAIAAgWIAQAAIgEgRIAPgDIgYAAIAAgXIAeAAIgEgOIAcgHIAIAVIAZAAIAAAXIgVAAIAPACIgIASIARAAIAAAWIgeAAIAAAMIAaAAIAAAXIgaAAIAAA+gAgwggIgOAEIAZAAIAHgUIgXAAgAhcBDQAKgPAHgTIAVAGQgJAXgLASQgIgIgKgFg");
	this.shape_1.setTransform(344.975,10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#808080").s().p("AAkA7IALgKIgKAAQgGAQgNAKQgPAKgcAGQgEgNgJgJQAjgFAKgPIgmAAIAAgWIAMAAIAAg0QgFgHgFgGIAAAHIgQAAIAAAXIAQgEIADAYIgTAGIAAApQAAATgIAFQgJAGgTAAQgCgPgGgMIAPAAQAAAAABAAQAAgBABAAQAAAAAAgBQAAgBAAAAIAAgiIgPAFIgGgbIAVgEIAAgeIgSAAIAAgZIASAAIAAgkIAbAAIAAAkIAQAAIAAALQAXgUAJgbIAZAFIgFALIAWAAIAEgBIAQALIgOAWIAdAAIAABHIALAAIAAAWIgfAAIAiAaIgSASQgLgMgdgWgAArANIgBAOIAPAAIAAgVIgGAHQgHgGgPgIQgHAIgIAIIgMgJIAAAVIANAAIABgOgAACgBQALgJAGgMIgRAAgAAngPIASAKIAAgRIgOAAgAADgsIAVAAIAHgLIgUAAg");
	this.shape_2.setTransform(321.9,10.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#808080").s().p("AAvBcIAAgEIhcAAIAAAEIgcAAIAAg6QAbgDAVgFIgQAAIAAACIgZAAIAAgiIgEADQgGgLgLgGQAUgOAMgYIAZAFIgEAHIAaAAIgCgHIAXgFIAAghIAcAAIAAAHIAvAAIAAAWIgvAAIAAAIIgYAAIACAIIA4AAIAAAQIg1AAIAAAFIAsAAIAAANIgsAAIAAAFIAsAAIAAAMIgsAAIAAAEIA9AAIAAARIheAAIAMALQgRAGgdADIAAAFIAsAAIAAAOIgsAAIAAAGIBcAAIAAgGIgqAAIAAgOIAqAAIAAgFIgsAAIAAgQIBIAAIAAA+gAgpAJIAlAAIAAgEIglAAgAgpgHIAlAAIAAgFIglAAgAgpgZIAlAAIAAgFIglAAgAgpg5IAAgFIgtAAIAAgWIAtAAIAAgHIAcAAIAAAig");
	this.shape_3.setTransform(298.575,10.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#808080").s().p("AgYAAQAAg0AcgwIAVAJQgXApAAAyQAAAzAXAqIgVAIQgcgvAAg2g");
	this.shape_4.setTransform(281.425,11.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#808080").s().p("AhvBiQAOgcABhJIAZACIgBAdQAGARAIAKIAAhIIguAAIAAgYIApAAIAAgVIgjAAIAAgYIAjAAIAAgXIAZAAIAAAXIAjAAIAAAYIgjAAIAAAVIAoAAIAAAYIgiAAIAAAYIAgAAIAAAYIggAAIAAAnQAPAEAcAAQBQAAAVgBQgIALgDARIhaAAQgiAAgSgGQgXgHgNgTQgDAYgIARQgGgFgRgHgAAqA8QgUAAgHgHQgHgIAAgVIAAh5IBZAAIAABWIg+AAIAAAjQAAAHACACQACACAHAAIAcAAQAGAAACgFQACgEAAgQQAIAGARAEQgDAXgGAJQgHAIgRAAgAAjgjIAjAAIAAgmIgjAAg");
	this.shape_5.setTransform(259.025,11.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#808080").s().p("AhrBOQAggNAOgYQAJgRACghIg0AAIAAgbIDOAAIAAAbIg9AAIAABGQAAAGACACQABACAGAAIAVAAQAGAAACgHQABgIABgZQAJAIARAEQgCAggHALQgHALgSAAIgcAAQgTAAgHgIQgHgIAAgUIAAhGIgiAAQgDApgMAXQgRAegmAPQgHgNgKgJgAhRhIIAAgbICkAAIAAAbg");
	this.shape_6.setTransform(229.45,11.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#808080").s().p("AA0BaIgMADIgDgLIhaAGIgCgYIAqgBIAAgSIgzAAIAAA/IgbAAIAAg/IgJAAIAAgWIAJAAIAAgGIAbAAIAAAGIAzAAIAAgKIhAAAIAAhJICcAAIAABJIhCAAIAAAKIBSAAIAAA9QAAAQgJAFQgHADgWAAQgBgIgEgKgAA+BXIADAAQABAAABgBQAAAAABAAQAAgBAAAAQAAgBAAgBIAAgmIgXAAQANAXAEATgAANA+IARgBIgFgLIATgFIgfAAgAANgDIAmAAIAAgLIgmAAgAgygDIAlAAIAAgLIglAAgAANgfIAmAAIAAgLIgmAAgAgygfIAlAAIAAgLIglAAgAAbg/IAAgKIgXAAIAAgXIAXAAIAAgMIAbAAIAAAMIAxAAIAAAXIgxAAIAAAKgAg2g/IAAgKIgxAAIAAgXIAxAAIAAgMIAbAAIAAAMIAYAAIAAAXIgYAAIAAAKg");
	this.shape_7.setTransform(199.85,10.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(189.5,0,175.3,22);


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
	this.instance = new lib.sc1bg();
	this.instance.setTransform(-676,20,1.1096,1.1096);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-676,20,1997.4,554.8);


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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAqBeQgQASgYAKQgJgPgKgIQAZgJANgQQgQgUgJgfIAZgEQAGAQAIALQAEgNABgXIgtAAIAAhdIAtAAIAAgnIAdAAIAAAnIAxAAIAABdIgxAAQgBAkgLAXQAbAUAqAGQgNAMgGAPQgqgJgXgTgABFgQIAUAAIAAgpIgUAAgAAVgQIATAAIAAgpIgTAAgAhAB5QgBgOgGgKIATABQAFAAADgEQADgEACgRIgHACQgDgPgJgTIAMgEIAJATIABgaIhLAAIAAiQIBiAAIAAAaIgeAAIAAAPIAZAAIAAAXIgZAAIAAARIAZAAIAAAYIgZAAIAAAPIAiAAIAAALQgDA/gFATQgCAIgDAEQgGAIgLABIgOACIgLgBgAhVAGIARAAIAAgPIgRAAgAhVghIARAAIAAgRIgRAAgAhVhJIARAAIAAgPIgRAAgAh9BkQAHgUAFgnIARAFQgEAlgHAXgAhcAuIANgBQAEAYgBAYIgOACQABgbgDgWgAhLAtIAOgDQAHAXABATIgOAEQgBgTgHgYg");
	this.shape.setTransform(259.725,82.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah0BsQAQgOAOgZIAZAOQgRAZgNAPgAA+B7QgBgLgEgKIgJADQgGgNgLgOIAVgHQANANAFALIgJAFIANABQAFgBACgCQAFgFACgXIiqAAIAAhmIC5AAIAAATIhIAAIAAAKIA9AAIAAAQIg9AAIAAAJIA9AAIAAARIg9AAIAAAKIBZAAIgBAKQgFAwgIAHQgGAIgLAAIgNABIgOAAgAgzAxIAzAAIAAgKIgzAAgAgzAWIAzAAIAAgJIgzAAgAgzgDIAzAAIAAgKIgzAAgAgzBRIAZgEQAHATACATIgbAFQgBgMgGgbgAgIBSIAWgHQAJAQAFATIgYAHQgDgQgJgTgAh3gvQAfgKAKgYIggAAIAAgYIAmAAIACgRIAcAAIgCARIA3AAIgBAJQgDAqgHAJQgEAFgLABQgHACgSgBQgBgOgFgJQAHABAJAAQAEAAADgCQADgDACgQIgeAAQgLAogsAQQgGgOgKgIgAAVgqIAAhFIBhAAIAABFgAAyhBIAmAAIAAgWIgmAAg");
	this.shape_1.setTransform(231.825,82.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdBkQAVgPAJgPIhzAbIgFggIATgDIAAitIBbAAIAACaIAKgCIADAYQAXghAEhEIghAAIAAgeIAiAAIAAg4IAfAAIgBA4IA6AAIAAAOQgCBTgDAgQgDAjgGAJQgHALgPACQgIACgcgBQgBgSgIgMIAfABQAGAAADgEQAIgKAChyIgcAAQgDA5gOAjQgQArgjAYQgIgMgOgLgAhJA4IAjgHIAAgYIgjAAgAhJgCIAjAAIAAgbIgjAAgAhJg5IAjAAIAAgaIgjAAg");
	this.shape_2.setTransform(204.525,82.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGB8IAAipIAvAAIAAgRIgyAAIAAgbIAyAAIAAghIAbAAIAAAhIAdAAQgLgLgMgJIARgOQASALALANIgMAKIAPAAIAAAbIg3AAIAAARIAyAAIAACKQAAATgJAGQgIAFgVAAQgCgPgGgMIAOAAQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAgBIAAgaIgVAAIAAA4IgbAAIAAg4IgUAAIAAA6gABEAoIAVAAIAAgSIgVAAgAAVAoIAUAAIAAgSIgUAAgABEgCIAVAAIAAgRIgVAAgAAVgCIAUAAIAAgRIgUAAgAhPB8IAAgqIgrAAIAAgbIArAAIAAgQIgiAAIAAhfIAiAAIAAgNIgnAAIAAgbIAnAAIAAgaIAcAAIAAAaIAlAAIAAAbIglAAIAAANIAjAAIAABfIgjAAIAAAQIAoAAIAAAbIgoAAIAAAqgAg3ARIAQAAIAAgPIgQAAgAhaARIAPAAIAAgPIgPAAgAg3gSIAQAAIAAgQIgQAAgAhagSIAPAAIAAgQIgPAAg");
	this.shape_3.setTransform(177.575,82.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMBnIhoAKIgEgbIA2gDIAAgQIguAAIAAgXIAuAAIAAgKIgtAAIAAhQIAtAAIAAgKIg0AAIAAgXIA0AAIAAgLIgtADQgBgMgGgLQBIgEAqgIIANAXIgvAHIAAANIAyAAIAAAOIAZAAIABg3IAeAAIgBA3IA2AAIgBAPQgCBSgCAfQgDAjgGAIQgHALgOADQgKACgXgBQgBgRgIgNIAbABQAGAAADgFQAHgJADhyIgYAAQgDA6gMAjQgOAqgfAYQgGgKgMgKgAgmBQIAtgDQAPgVAHgdQAGgZABgmIgYAAIAAgUIgyAAIAAAKIAuAAIAABQIguAAIAAAKIAwAAIAAAXIgwAAgAgmAPIAVAAIAAgMIgVAAgAhWAPIAUAAIAAgMIgUAAgAgmgPIAVAAIAAgMIgVAAgAhWgPIAUAAIAAgMIgUAAg");
	this.shape_4.setTransform(150.1,82.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AheB8IAAjUIBDAAIAHgjIAlAFIgMAeIBaAAIAADTIghAAIAAgNIh9AAIAAAOgAg/BRIB9AAIAAgcIh9AAgAg/AZIB9AAIAAgaIh9AAgAg/geIB9AAIAAgcIh9AAg");
	this.shape_5.setTransform(123.225,82.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQB7IAAhFIhmAAIAAggIBmAAIAAgfIhWAAIAAgfIBWAAIAAhSIAfAAIAABSIBaAAIAAAfIhaAAIAAAfIBoAAIAAAgIhoAAIAABFgAhghpIAcgMQAWAhAHAZIgfAMQgFgWgVgkgAAng7QARgdAKgeIAiALQgTAmgOAUg");
	this.shape_6.setTransform(95.75,82.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah6CdIAAhAQBWgwAmgfQAugkAAgbQAAgtg/AAQgqAAg0AOIAAg8QAzgQBCAAQAwAAAfAZQAkAcAAA0QAAApgmAlQggAghCAkICCAAIAAA+g");
	this.shape_7.setTransform(68.225,78.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag2CaQhFiTgrigIBPAAIAdBdQAjBoAXA1QAYg4AfhfQAWhDAJggIBRAAQg0Cug/CFg");
	this.shape_8.setTransform(37.55,78.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhsCaIAAkzIBJAAIAAD1ICQAAIAAA+g");
	this.shape_9.setTransform(13.7,78.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(270));

	// Layer_4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgtDAIAAkyIh/AAIAAhNIFZAAIAABNIh/AAIAAEyg");
	this.shape_10.setTransform(254.85,33.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiPCZQhAg1ABhnQAAheBCg2QA6gwBSAAQBTAAA6AwQBCA2AABeQABBnhAA1Qg3AuhZABQhXgBg4gugAhOhXQggAfAAA2QAAA9AkAhQAeAbAsAAQAuAAAegbQAjghAAg9QABg2ghgfQgfgegwAAQgvAAgfAeg");
	this.shape_11.setTransform(214.85,33.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiHDAIAAl/IBbAAIAAEyIC0AAIAABNg");
	this.shape_12.setTransform(178.95,33.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgtDAIAAl/IBbAAIAAF/g");
	this.shape_13.setTransform(151.825,33.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AisDAIAAl/ICxAAQCpAAgBCLQAABIg3AlQgtAdhDAAIhXAAIAABqgAhRAJIBQAAQAmAAARgLQAYgPAAgmQAAghgYgOQgSgMgnAAIhOAAg");
	this.shape_14.setTransform(123.25,33.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ah8B2QgxgqAAhMQAAhLAxgqQAugpBPAAQBOAAAvApQAwAqAABLQAABMgwAqQgvAphOAAQhPAAgugpgAg6g9QgWAXAAAmQAAAlAXAYQAXAXAkAAQAjAAAXgXQAVgZAAgkQAAgngXgXQgWgWglABQgjAAgWAWg");
	this.shape_15.setTransform(81.675,37.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhlCbIAAkuIBJAAIAKAgQA3gmBBgBIAABVQg+gBgzAgIAADBg");
	this.shape_16.setTransform(51.8,36.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AitDAIAAl/ICyAAQCpAAAACLQAABIg4AlQgtAdhDAAIhXAAIAABqgAhRAJIBPAAQAmAAASgLQAYgPAAgmQAAghgYgOQgTgMgmAAIhOAAg");
	this.shape_17.setTransform(17.975,33.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(270));

	// _Group__2
	this.instance = new lib.Group_2();
	this.instance.setTransform(137.4,55.5,1,1,0,0,0,136.4,55);
	this.instance.alpha = 0.4492;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(270));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,13.2,273.79999999999995,85.3);


(lib.sb_sc4bgmask = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AzVY3IgjgZIAAAAQgVgPgRgGIAAAAQgVgIgfACIAAAAIg2AGIAAAAQhoANg/gkIAAAAQgLgGgigYIAAAAQgbgTgTgIIAAAAQgVgIgcgCIAAAAQgTgBggACIAAAAItqAlQhSADgngBIAAAAQhEgEgzgQIAAAAQg9gVgsgpIAAAAQgvgugLg5IAAAAQgCgPgGgFIAAAAQgHgHgTADIAAAAInzBRQhaAPg0AAIAAAAQhPABg5gaIAAAAQgugVgjgnIAAAAQgigngPgwIAAAAQgQgwAGg0IAAAAQAGgzAZgsIAAAAQAphGBagxIAAAAQA0gcB4grIAAAAQBqgmC1hKIAAAAQDOhUBQgeIAAAAQEAhhGGhwIAAAAQG2h6DYhBIAAAAQEXhVFIh0IAAAAQDzhWFkiHIAAAAQBSggAsgLIAAAAIAIgBIAAAAIAEgBIAAAAIgEABIAAAAQAIhSAFheIAAAAQACguADgXIAAAAQAFgmAMgcIAAAAIAFgKIAAAAIEFkWIAAAAQIkkiGplVIAAAAIAPgMIAAAAQBnglBygcIAAAAQAzgMAigBIAAAAQAVgMAYgKIAAAAQARAAATgEIAAAAIA1gMIAAAAQFRgHEqgDIAAAAQD1gCCCAMIAAAAIA3AFIAAAAQAmABAzgBIAAAAQBlgBAtACIAAAAQAtACBaAJIAAAAIAIAJIAAAAQBMgBAuAJIAAAAQAlAIA+AZIAAAAQDrA9DwCVIAAAAQAjAVASAPIAAAAIABABIAAAAIAFACIAAAAIA4ASIAAAAQAhAKAVALIAAAAQAMAFAJAHIAAAAIAYgDIAAAAIBNA3IAAAAIA1AlIAAAAQAdAXASAWIAAAAQAJANAJAQIAAAAQAvApAaApIAAAAQARAcAOAnIAAAAQAKAaAMAuIAAAAQAXBXAXBrIAAAAQAQBMgBApIAAAAQgCBNgqApIAAAAQgXAWgfAJIAAAAQgRAEgRAAIAAAAIgUA1IhdA+IAAAAQg4AlgyAcIAAAAIg0AtIAAAAQhWBLhwBXIAAAAQhDA0iIBnIAAAAInRFfQiQBthOAxIAAAAIgiAUIAAAAQh6BshQBDIAAAAQiSB4iHBgIAAAAIgZAXIAAAAQjQC3mKEEIAAAAIhcA9IAAAAQgGgNgHgNIAAAAQggg5g6giIAAAAQgygdhFgPIAAAAQgvgKhQgHIAAAAQi4gQm5gGIAAAAQmQgGjfgZIAAAAQhVgKiTgVIAAAAQAyhUAohuIAAAAQAWg+AehkIAAAAIAxijIAAAAQANgoARgPIAAAAQAMgKASgFIAAAAIAigGIAAAAQBbgQA5gxIAAAAQA0gqAXhCIAAAAQAPgqAAgrIAAAAQAAgXgEgYIAAAAQgNhBgug0IAAAAQgvg0hAgUIAAAAQAuhlATgzIAAAAQAXhCAAg2IAAAAQAAgTgCgRIAAAAQgNhMg/g4IAAAAQg9g3hPgJIAAAAQBPAJA9A3IAAAAQA/A4ANBMIAAAAQACARAAATIAAAAQAAA2gXBCIAAAAQgTAzguBlIAAAAQBAAUAvA0IAAAAQAuA0ANBBIAAAAQAEAYAAAXIAAAAQAAArgPAqIAAAAQgXBCg0AqIAAAAQg5AxhbAQIAAAAIgiAGIAAAAQgSAFgMAKIAAAAQgRAPgNAoIAAAAIgxCjIAAAAQgeBkgWA+IAAAAQgoBugyBUIAAAAQghA2glArIAAAAQhMBYhqA3IAAAAQhpA4h0AMIAAAAQgdADgaAAIAAAAQhfAAg/gpgAnCkJIABAAIAAAAIgBAAgAm/kJQAqgJAlAAIAAAAQglAAgqAJgAlvkSIAAAAIAAAAIAAAAg");
	var mask_graphics_9 = new cjs.Graphics().p("AzVY3IgjgZIAAAAQgVgPgRgGIAAAAQgVgIgfACIAAAAIg2AGIAAAAQhoANg/gkIAAAAQgLgGgigYIAAAAQgbgTgTgIIAAAAQgVgIgcgCIAAAAQgTgBggACIAAAAItqAlQhSADgngBIAAAAQhEgEgzgQIAAAAQg9gVgsgpIAAAAQgvgugLg5IAAAAQgCgPgGgFIAAAAQgHgHgTADIAAAAInzBRQhaAPg0AAIAAAAQhPABg5gaIAAAAQgugVgjgnIAAAAQgigngPgwIAAAAQgQgwAGg0IAAAAQAGgzAZgsIAAAAQAphGBagxIAAAAQA0gcB4grIAAAAQBqgmC1hKIAAAAQDOhUBQgeIAAAAQEAhhGGhwIAAAAQG2h6DYhBIAAAAQEXhVFIh0IAAAAQDzhWFkiHIAAAAQBSggAsgLIAAAAIAIgBIAAAAIAEgBIAAAAIgEABIAAAAQAIhSAFheIAAAAQACguADgXIAAAAQAFgmAMgcIAAAAIAFgKIAAAAIEFkWIAAAAQIkkiGplVIAAAAIAPgMIAAAAQBnglBygcIAAAAQAzgMAigBIAAAAQAVgMAYgKIAAAAQARAAATgEIAAAAIA1gMIAAAAQFRgHEqgDIAAAAQD1gCCCAMIAAAAIA3AFIAAAAQAmABAzgBIAAAAQBlgBAtACIAAAAQAtACBaAJIAAAAIAIAJIAAAAQBMgBAuAJIAAAAQAlAIA+AZIAAAAQDrA9DwCVIAAAAQAjAVASAPIAAAAIABABIAAAAIAFACIAAAAIA4ASIAAAAQAhAKAVALIAAAAQAMAFAJAHIAAAAIAYgDIAAAAIBNA3IAAAAIA1AlIAAAAQAdAXASAWIAAAAQAJANAJAQIAAAAQAvApAaApIAAAAQARAcAOAnIAAAAQAKAaAMAuIAAAAQAXBXAXBrIAAAAQAQBMgBApIAAAAQgCBNgqApIAAAAQgXAWgfAJIAAAAQgRAEgRAAIAAAAIgUA1IhdA+IAAAAQg4AlgyAcIAAAAIg0AtIAAAAQhWBLhwBXIAAAAQhDA0iIBnIAAAAInRFfQiQBthOAxIAAAAIgiAUIAAAAQh6BshQBDIAAAAQiSB4iHBgIAAAAIgZAXIAAAAQjQC3mKEEIAAAAIhcA9IAAAAQgGgNgHgNIAAAAQggg5g6giIAAAAQgygdhFgPIAAAAQgvgKhQgHIAAAAQi4gQm5gGIAAAAQmQgGjfgZIAAAAQhVgKiTgVIAAAAQAyhUAohuIAAAAQAWg+AehkIAAAAIAxijIAAAAQANgoARgPIAAAAQAMgKASgFIAAAAIAigGIAAAAQBbgQA5gxIAAAAQA0gqAXhCIAAAAQAPgqAAgrIAAAAQAAgXgEgYIAAAAQgNhBgug0IAAAAQgvg0hAgUIAAAAQAuhlATgzIAAAAQAXhCAAg2IAAAAQAAgTgCgRIAAAAQgNhMg/g4IAAAAQg9g3hPgJIAAAAQBPAJA9A3IAAAAQA/A4ANBMIAAAAQACARAAATIAAAAQAAA2gXBCIAAAAQgTAzguBlIAAAAQBAAUAvA0IAAAAQAuA0ANBBIAAAAQAEAYAAAXIAAAAQAAArgPAqIAAAAQgXBCg0AqIAAAAQg5AxhbAQIAAAAIgiAGIAAAAQgSAFgMAKIAAAAQgRAPgNAoIAAAAIgxCjIAAAAQgeBkgWA+IAAAAQgoBugyBUIAAAAQghA2glArIAAAAQhMBYhqA3IAAAAQhpA4h0AMIAAAAQgdADgaAAIAAAAQhfAAg/gpgAnCkJIABAAIAAAAIgBAAgAm/kJQAqgJAlAAIAAAAQglAAgqAJgAlvkSIAAAAIAAAAIAAAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AzVY3IgjgZIAAAAQgVgPgRgGIAAAAQgVgIgfACIAAAAIg2AGIAAAAQhoANg/gkIAAAAQgLgGgigYIAAAAQgbgTgTgIIAAAAQgVgIgcgCIAAAAQgTgBggACIAAAAItqAlQhSADgngBIAAAAQhEgEgzgQIAAAAQg9gVgsgpIAAAAQgvgugLg5IAAAAQgCgPgGgFIAAAAQgHgHgTADIAAAAInzBRQhaAPg0AAIAAAAQhPABg5gaIAAAAQgugVgjgnIAAAAQgigngPgwIAAAAQgQgwAGg0IAAAAQAGgzAZgsIAAAAQAphGBagxIAAAAQA0gcB4grIAAAAQBqgmC1hKIAAAAQDOhUBQgeIAAAAQEAhhGGhwIAAAAQG2h6DYhBIAAAAQEXhVFIh0IAAAAQDzhWFkiHIAAAAQBSggAsgLIAAAAIAIgBIAAAAIAEgBIAAAAIgEABIAAAAQAIhSAFheIAAAAQACguADgXIAAAAQAFgmAMgcIAAAAIAFgKIAAAAIEFkWIAAAAQIkkiGplVIAAAAIAPgMIAAAAQBnglBygcIAAAAQAzgMAigBIAAAAQAVgMAYgKIAAAAQARAAATgEIAAAAIA1gMIAAAAQFRgHEqgDIAAAAQD1gCCCAMIAAAAIA3AFIAAAAQAmABAzgBIAAAAQBlgBAtACIAAAAQAtACBaAJIAAAAIAIAJIAAAAQBMgBAuAJIAAAAQAlAIA+AZIAAAAQDrA9DwCVIAAAAQAjAVASAPIAAAAIABABIAAAAIAFACIAAAAIA4ASIAAAAQAhAKAVALIAAAAQAMAFAJAHIAAAAIAYgDIAAAAIBNA3IAAAAIA1AlIAAAAQAdAXASAWIAAAAQAJANAJAQIAAAAQAvApAaApIAAAAQARAcAOAnIAAAAQAKAaAMAuIAAAAQAXBXAXBrIAAAAQAQBMgBApIAAAAQgCBNgqApIAAAAQgXAWgfAJIAAAAQgRAEgRAAIAAAAIgUA1IhdA+IAAAAQg4AlgyAcIAAAAIg0AtIAAAAQhWBLhwBXIAAAAQhDA0iIBnIAAAAInRFfQiQBthOAxIAAAAIgiAUIAAAAQh6BshQBDIAAAAQiSB4iHBgIAAAAIgZAXIAAAAQjQC3mKEEIAAAAIhcA9IAAAAQgGgNgHgNIAAAAQggg5g6giIAAAAQgygdhFgPIAAAAQgvgKhQgHIAAAAQi4gQm5gGIAAAAQmQgGjfgZIAAAAQhVgKiTgVIAAAAQAyhUAohuIAAAAQAWg+AehkIAAAAIAxijIAAAAQANgoARgPIAAAAQAMgKASgFIAAAAIAigGIAAAAQBbgQA5gxIAAAAQA0gqAXhCIAAAAQAPgqAAgrIAAAAQAAgXgEgYIAAAAQgNhBgug0IAAAAQgvg0hAgUIAAAAQAuhlATgzIAAAAQAXhCAAg2IAAAAQAAgTgCgRIAAAAQgNhMg/g4IAAAAQg9g3hPgJIAAAAQBPAJA9A3IAAAAQA/A4ANBMIAAAAQACARAAATIAAAAQAAA2gXBCIAAAAQgTAzguBlIAAAAQBAAUAvA0IAAAAQAuA0ANBBIAAAAQAEAYAAAXIAAAAQAAArgPAqIAAAAQgXBCg0AqIAAAAQg5AxhbAQIAAAAIgiAGIAAAAQgSAFgMAKIAAAAQgRAPgNAoIAAAAIgxCjIAAAAQgeBkgWA+IAAAAQgoBugyBUIAAAAQghA2glArIAAAAQhMBYhqA3IAAAAQhpA4h0AMIAAAAQgdADgaAAIAAAAQhfAAg/gpgAnCkJIABAAIAAAAIgBAAgAm/kJQAqgJAlAAIAAAAQglAAgqAJgAlvkSIAAAAIAAAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-13.7556,y:230.8679}).wait(9).to({graphics:mask_graphics_9,x:-13.7556,y:230.8679}).wait(1).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_graphics_16,x:-13.7556,y:230.8679}).wait(254));

	// sb_sc4_bg_copy
	this.instance = new lib.sb_sc4bg("synched",0);
	this.instance.setTransform(344.9,103.8,1,1,0,0,0,301.7,257.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({startPosition:0},0).to({_off:true},1).wait(6).to({_off:false},0).wait(254));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-413.8,67.6,800.5,287.9);


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
	this.instance_1.setTransform(136.5,111.4,1,1,180,0,0,136.7,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(261).to({startPosition:261},0).to({_off:true},1).wait(8));

	// an_line
	this.instance_2 = new lib.an_line("synched",0,false);
	this.instance_2.setTransform(136.5,1,1,1,0,0,0,136.7,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(261).to({startPosition:261},0).to({_off:true},1).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0,275.59999999999997,112.4);


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
	this.shape.graphics.lf(["#25435F","rgba(59,82,103,0)"],[0.498,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape.setTransform(1048.4236,360.6305,3.5935,2.1374,-146.2686);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#1A2229","rgba(59,82,103,0)"],[0,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape_1.setTransform(-259.7228,57.8579,3.0901,2.1374,29.999);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape_2.setTransform(-1001.9228,111.0579,3.0901,2.1374,29.999);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#3B5267","rgba(59,82,103,0)"],[0.075,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape_3.setTransform(682.1799,338.8422,1.5648,4.3829,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#3B5267","rgba(59,82,103,0)"],[0,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape_4.setTransform(-236.2177,183.8212,1.1371,3.993);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(270));

	// sb_sc4_bg_mask
	this.instance = new lib.sb_sc4bgmask("synched",0);
	this.instance.setTransform(272.8,311.2,1.1079,1.1079,0,0,0,284.9,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:285,regY:149.9,scaleX:1,scaleY:1,x:296.4,y:302.55,startPosition:16},10,cjs.Ease.cubicOut).wait(260));

	// sb_sc4_bg
	this.instance_1 = new lib.sb_sc4bg("synched",0);
	this.instance_1.setTransform(356.3,256.45,1,1,0,0,0,301.7,257.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(270));

	// Layer_2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3B5267").s().p("EifvAsOMAAAhYaME/fAAAMAAABYag");
	this.shape_5.setTransform(369,261.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(270));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1674.2,-867.3,3471.7,2360);


(lib.sb_sc3_3D_car = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sb_sc3_3D_car
	this.instance = new lib.Group();
	this.instance.setTransform(128.15,56.7,1,1,0,0,0,126.2,51.5);
	this.instance.alpha = 0.7617;

	this.instance_1 = new lib.Path();
	this.instance_1.setTransform(128.45,57.65,1,1,0,0,0,128.4,57.6);
	this.instance_1.alpha = 0.7617;

	this.instance_2 = new lib.Path_1();
	this.instance_2.setTransform(128.5,57.7,1,1,0,0,0,127.5,56.7);
	this.instance_2.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,256.79999999999995,115.30000000000001);


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
	this.instance.setTransform(136.5,96.3,1,1,180,0,0,136.7,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(78).to({startPosition:78},0).to({_off:true},1).wait(10));

	// an_line
	this.instance_1 = new lib.an_line("synched",0,false);
	this.instance_1.setTransform(136.5,1,1,1,0,0,0,136.7,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(78).to({startPosition:78},0).to({_off:true},1).wait(10));

	// sb_sc3_title
	this.instance_2 = new lib.sb_sc3title("synched",0);
	this.instance_2.setTransform(136.35,49.55,1,1,0,0,0,135.1,35.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1,startPosition:23},23,cjs.Ease.cubicOut).to({startPosition:78},55).to({_off:true},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0,273.5,97.3);


(lib.an_sc33D = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// an_sc3_3D_circle_copy_copy_copy_copy_copy_copy_copy
	this.instance = new lib.an_sc33Dcircle("synched",0,false);
	this.instance.setTransform(48.35,40.75,1,1,0,0,0,16.6,15.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).wait(66).to({startPosition:21},0).to({_off:true},1).wait(7));

	// an_sc3_3D_circle_copy_copy_copy_copy_copy_copy
	this.instance_1 = new lib.an_sc33Dcircle("synched",0,false);
	this.instance_1.setTransform(47.25,79.1,1,1,0,0,0,16.6,15.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).wait(61).to({startPosition:21},0).to({_off:true},1).wait(7));

	// an_sc3_3D_circle_copy_copy_copy_copy_copy
	this.instance_2 = new lib.an_sc33Dcircle("synched",0,false);
	this.instance_2.setTransform(99.2,105.55,1,1,0,0,0,16.6,15.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({_off:false},0).wait(49).to({startPosition:21},0).to({_off:true},1).wait(7));

	// an_sc3_3D_circle_copy_copy_copy_copy
	this.instance_3 = new lib.an_sc33Dcircle("synched",0,false);
	this.instance_3.setTransform(100.3,15.3,1,1,0,0,0,16.6,15.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).wait(56).to({startPosition:21},0).to({_off:true},1).wait(7));

	// an_sc3_3D_circle_copy_copy_copy
	this.instance_4 = new lib.an_sc33Dcircle("synched",0,false);
	this.instance_4.setTransform(152.6,15.3,1,1,0,0,0,16.6,15.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).wait(64).to({startPosition:21},0).to({_off:true},1).wait(7));

	// an_sc3_3D_circle_copy_copy
	this.instance_5 = new lib.an_sc33Dcircle("synched",0,false);
	this.instance_5.setTransform(152.05,106.1,1,1,0,0,0,16.6,15.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},0).wait(53).to({startPosition:21},0).to({_off:true},1).wait(7));

	// an_sc3_3D_circle_copy
	this.instance_6 = new lib.an_sc33Dcircle("synched",0,false);
	this.instance_6.setTransform(183.35,89.85,1,1,0,0,0,16.6,15.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23).to({_off:false},0).wait(59).to({startPosition:21},0).to({_off:true},1).wait(7));

	// an_sc3_3D_circle
	this.instance_7 = new lib.an_sc33Dcircle("synched",0,false);
	this.instance_7.setTransform(183.9,31.55,1,1,0,0,0,16.6,15.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16).to({_off:false},0).wait(66).to({startPosition:21},0).to({_off:true},1).wait(7));

	// sb_sc3_3D_car
	this.instance_8 = new lib.sb_sc3_3D_car("synched",0);
	this.instance_8.setTransform(18.4,60.95,1,1,0,0,0,128.4,57.7);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:128.4,alpha:1,startPosition:19},19,cjs.Ease.backOut).to({startPosition:82},63).to({_off:true},1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-11.7,378,145.1);


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
	this.instance.setTransform(144.4,70.3,1.0582,1,180,0,0,136.7,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(77).to({startPosition:77},0).to({_off:true},1).wait(10));

	// an_line
	this.instance_1 = new lib.an_line("synched",0,false);
	this.instance_1.setTransform(144.45,1,1.0582,1,0,0,0,136.7,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(77).to({startPosition:77},0).to({_off:true},1).wait(10));

	// sb_sc2_title
	this.instance_2 = new lib.sb_sc2title("synched",0);
	this.instance_2.setTransform(144.25,36.45,1,1,0,0,0,142.7,20.4);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1,startPosition:16},16,cjs.Ease.cubicOut).to({startPosition:77},61).to({_off:true},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,0,289.5,71.3);


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

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EgxAgxAMBiBAAAMAAABiBMhiBAAAg");
	this.shape.setTransform(896.2733,896.4646,1.698,3.5708,44.9997);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.192,0.792,1],-313.7,0,313.7,0).s().p("EgxAAxBMAAAhiBMBiBAAAMAAABiBg");
	this.shape_1.setTransform(896.2733,896.4646,1.698,3.5708,44.9997);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Ei1LA/gMD0rj0sMB1tB1tMj0rD0sg");
	this.shape_2.setTransform(917.55,917.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.204,0.776,1],-376.6,-376.6,376.7,376.7).s().p("Ei1MA/gMD0sj0sMB1sB1tMj0qD0sg");
	this.shape_3.setTransform(917.55,917.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EizxA+FMDx2jx2MB1tB1tMjx2Dx2g");
	this.shape_4.setTransform(938.875,938.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.216,0.765,1],-376.6,-376.6,376.7,376.7).s().p("EizxA+FMDx2jx2MB1tB1tMjx2Dx2g");
	this.shape_5.setTransform(938.875,938.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiyWA8qMDvAjvAMB1tB1tMjvADvAg");
	this.shape_6.setTransform(960.15,959.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.227,0.749,1],-376.7,-376.6,376.6,376.7).s().p("EiyWA8qMDvAjvAMB1tB1tMjvADvAg");
	this.shape_7.setTransform(960.15,959.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eiw7A7QMDsKjsMMB1tB1tMjsKDsMg");
	this.shape_8.setTransform(981.425,980.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.239,0.733,1],-376.6,-376.6,376.7,376.7).s().p("Eiw7A7PMDsKjsKMB1tB1tMjsKDsKg");
	this.shape_9.setTransform(981.425,980.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EivhA51MDpVjpWMB1uB1tMjpWDpWg");
	this.shape_10.setTransform(1002.7,1000.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.251,0.722,1],-376.6,-376.6,376.7,376.7).s().p("EivhA51MDpWjpWMB1tB1tMjpWDpWg");
	this.shape_11.setTransform(1002.7,1000.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiuGA4aMDmgjmgMB1tB1tMjmgDmgg");
	this.shape_12.setTransform(1024.025,1021.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.263,0.706,1],-376.6,-376.6,376.7,376.7).s().p("EiuGA4aMDmgjmgMB1tB1tMjmgDmgg");
	this.shape_13.setTransform(1024.025,1021.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EisrA2/MDjqjjqMB1tB1tMjjqDjqg");
	this.shape_14.setTransform(1045.3,1042.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.275,0.69,1],-376.6,-376.6,376.7,376.7).s().p("EisrA2/MDjqjjqMB1tB1tMjjqDjqg");
	this.shape_15.setTransform(1045.3,1042.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EirQA1kMDg0jg0MB1tB1tMjg0Dg0g");
	this.shape_16.setTransform(1066.575,1063.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.29,0.678,1],-376.6,-376.6,376.7,376.7).s().p("EirQA1kMDg0jg0MB1tB1tMjg0Dg0g");
	this.shape_17.setTransform(1066.575,1063.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eip2A0JMDd/jd/MB1uB1tMjeADeAg");
	this.shape_18.setTransform(1087.85,1084.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.302,0.663,1],-376.6,-376.6,376.7,376.7).s().p("Eip1A0JMDd+jd+MB1tB1tMjd+Dd+g");
	this.shape_19.setTransform(1087.85,1084.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiobAyvMDbKjbKMB1tB1tMjbKDbKg");
	this.shape_20.setTransform(1109.175,1105.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.314,0.647,1],-376.6,-376.6,376.7,376.7).s().p("EiobAyvMDbKjbKMB1tB1tMjbKDbKg");
	this.shape_21.setTransform(1109.175,1105.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EinAAxUMDYUjYUMB1tB1tMjYUDYUg");
	this.shape_22.setTransform(1130.45,1126.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.325,0.631,1],-376.6,-376.6,376.7,376.7).s().p("EinAAxUMDYUjYUMB1tB1tMjYUDYUg");
	this.shape_23.setTransform(1130.45,1126.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EillAv5MDVejVfMB1tB1tMjVeDVgg");
	this.shape_24.setTransform(1151.725,1147.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.337,0.62,1],-376.6,-376.6,376.7,376.7).s().p("EillAv6MDVejVfMB1tB1tMjVeDVfg");
	this.shape_25.setTransform(1151.725,1147.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EikLAufMDSqjSqMB1tB1uMjSqDSpg");
	this.shape_26.setTransform(1173,1168.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.349,0.604,1],-376.6,-376.6,376.7,376.6).s().p("EikLAufMDSpjSpMB1tB1tMjSpDSpg");
	this.shape_27.setTransform(1173,1168.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EiiwAtEMDP0jP0MB1tB1tMjP0DP0g");
	this.shape_28.setTransform(1194.325,1188.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.361,0.588,1],-376.6,-376.6,376.7,376.7).s().p("EiiwAtEMDP0jP0MB1tB1tMjP0DP0g");
	this.shape_29.setTransform(1194.325,1188.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EihVArpMDM+jM+MB1tB1tMjM+DM+g");
	this.shape_30.setTransform(1215.6,1209.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.373,0.576,1],-376.6,-376.6,376.7,376.6).s().p("EihVArpMDM+jM+MB1tB1tMjM+DM+g");
	this.shape_31.setTransform(1215.6,1209.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.384,0.561,1],-313.7,0,313.7,0).s().p("EgxAAxBMAAAhiBMBiBAAAMAAABiBg");
	this.shape_32.setTransform(1236.9019,1230.782,1.698,2.9162,44.9998);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EigBAuEMDOFjOFMBx+Bx+MjOFDOFg");
	this.shape_33.setTransform(1248.8,1242.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.373,0.576,1],-364.6,-364.7,364.8,364.7).s().p("EigBAuEMDOFjOFMBx+Bx/MjOEDOEg");
	this.shape_34.setTransform(1248.8,1242.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EigIAx5MDSAjSBMBuRBuQMjSBDSBg");
	this.shape_35.setTransform(1260.75,1254.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.357,0.592,1],-352.8,-352.7,352.8,352.8).s().p("EigIAx5MDSBjSBMBuQBuQMjSBDSBg");
	this.shape_36.setTransform(1260.75,1254.625);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EigPA1uMDV9jV9MBqiBqiMjV9DV9g");
	this.shape_37.setTransform(1272.675,1266.575);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.345,0.612,1],-340.8,-340.8,340.9,340.9).s().p("EigPA1uMDV9jV9MBqiBqiMjV9DV9g");
	this.shape_38.setTransform(1272.675,1266.575);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EigVA5kMDZ4jZ5MBmzBmzMjZ4DZ5g");
	this.shape_39.setTransform(1284.625,1278.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.329,0.627,1],-328.9,-328.9,329,329).s().p("EigVA5jMDZ4jZ4MBmzBmzMjZ4DZ4g");
	this.shape_40.setTransform(1284.625,1278.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EigcA9ZMDd1jd1MBjEBjFMjd0Dd0g");
	this.shape_41.setTransform(1296.55,1290.425);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.314,0.643,1],-317,-317,317.1,317).s().p("EigcA9ZMDd0jd1MBjFBjFMjd1Dd0g");
	this.shape_42.setTransform(1296.55,1290.425);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EigjBBOMDhwjhxMBfXBfXMjhxDhwg");
	this.shape_43.setTransform(1308.5,1302.35);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.302,0.659,1],-305.1,-305,305.1,305.1).s().p("EigjBBOMDhwjhxMBfXBfWMjhxDhxg");
	this.shape_44.setTransform(1308.5,1302.35);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EigqBFDMDltjltMBboBboMjltDltg");
	this.shape_45.setTransform(1320.425,1314.325);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.29,0.678,1],-293.1,-293.1,293.2,293.2).s().p("EigqBFDMDltjltMBboBboMjltDltg");
	this.shape_46.setTransform(1320.425,1314.325);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EigwBI4MDppjppMBX5BX5MjppDppg");
	this.shape_47.setTransform(1332.35,1326.25);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.275,0.694,1],-281.2,-281.3,281.3,281.2).s().p("EigxBI4MDpqjppMBX5BX5MjppDppg");
	this.shape_48.setTransform(1332.35,1326.25);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eig4BMtMDtljtkMBULBUKMjtlDtlg");
	this.shape_49.setTransform(1344.3,1338.175);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.263,0.71,1],-269.3,-269.3,269.4,269.4).s().p("Eig4BMtMDtmjtkMBUKBUKMjtkDtlg");
	this.shape_50.setTransform(1344.3,1338.175);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("Eig+BQiMDxhjxgMBQcBQcMjxhDxhg");
	this.shape_51.setTransform(1356.225,1350.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.247,0.725,1],-257.4,-257.4,257.4,257.4).s().p("Eig+BQiMDxhjxgMBQcBQcMjxhDxhg");
	this.shape_52.setTransform(1356.225,1350.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EihFBUYMD1dj1dMBMuBMuMj1dD1dg");
	this.shape_53.setTransform(1368.175,1362.025);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.231,0.741,1],-245.4,-245.4,245.5,245.5).s().p("EihFBUYMD1dj1dMBMuBMuMj1dD1dg");
	this.shape_54.setTransform(1368.175,1362.025);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EihLBYNMD5Zj5ZMBI/BJAMj5ZD5Zg");
	this.shape_55.setTransform(1380.1,1373.975);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.22,0.761,1],-233.5,-233.5,233.6,233.6).s().p("EihLBYNMD5Yj5ZMBI/BJAMj5YD5Zg");
	this.shape_56.setTransform(1380.1,1373.975);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(255,255,255,0)").ss(0.5).p("EihTBcDMD9Vj9WMBFSBFRMj9WD9Wg");
	this.shape_57.setTransform(1392.05,1385.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.204,0.776,1],-221.6,-221.6,221.6,221.6).s().p("EihSBcDMD9Uj9WMBFSBFSMj9WD9Ug");
	this.shape_58.setTransform(1392.05,1385.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1.698,scaleY:3.5708,x:896.2733,y:896.4646}},{t:this.shape,p:{scaleY:3.5708,rotation:44.9997,x:896.2733,y:896.4646,scaleX:1.698}}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_32},{t:this.shape,p:{scaleY:2.9162,rotation:44.9998,x:1236.9019,y:1230.782,scaleX:1.698}}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.9454,scaleY:3.7116,x:1403.9707,y:1397.8241}},{t:this.shape,p:{scaleY:3.7116,rotation:44.9997,x:1403.9707,y:1397.8241,scaleX:0.9454}}]},1).wait(1));

	// Layer_3
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape_59.setTransform(981.6133,908.6779,0.6759,1.7652,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape_60.setTransform(343.6367,770.0876,0.6759,1.7652);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59}]}).wait(90));

	// sc2_bg
	this.instance = new lib.sb_sc2bg("synched",0);
	this.instance.setTransform(662.65,919.05,1.2657,1.2657,0,0,0,330.1,282.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// Layer_2
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#CA0000").ss(1,1,1).p("EifHgtPME+PAAAMAAABafMk+PAAAg");
	this.shape_61.setTransform(897.475,927.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("EifHAtPMAAAhadME+PAAAMAAABadg");
	this.shape_62.setTransform(897.475,927.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61}]}).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-273.4,-273.3,2711.4,2705.2000000000003);


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
p.nominalBounds = new cjs.Rectangle(85.7,-0.3,279.1,32);


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
p.nominalBounds = new cjs.Rectangle(-676,20,2034.1,554.8);


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
	this.instance.setTransform(830.15,280.1,1.418,1.418,0,0,0,137.7,56.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(81).to({startPosition:81},0).to({_off:true},1).wait(180));

	// an_sc4_bg
	this.instance_1 = new lib.an_sc4bg("synched",0,false);
	this.instance_1.setTransform(274.3,262.4,1,1,0,0,0,329.1,262.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({startPosition:89},0).to({_off:true},1).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1729,-867.3,3471.7,2360);


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

	// an_sc3_3D
	this.instance = new lib.an_sc33D("synched",0,false);
	this.instance.setTransform(823.2,255.65,1.503,1.503,0,0,0,128.5,60.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(83));

	// an_sc3_title
	this.instance_1 = new lib.an_sc3title("synched",0,false);
	this.instance_1.setTransform(376.4,252.05,1.503,1.503,0,0,0,136.8,48.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).wait(79));

	// an_shadow
	this.instance_2 = new lib.an_shadow("synched",0,false);
	this.instance_2.setTransform(347.8,378.7,1,1,0,0,0,1066.7,1063.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	// sb_sc3_bg
	this.instance_3 = new lib.sb_sc3bg("synched",0);
	this.instance_3.setTransform(298.3,261.95,1,1,0,0,0,309.4,265.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-829.9,-796,2244.5,2238.3);


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
	this.instance.setTransform(780.25,310.55,1.6601,1.6601,0,0,0,143.9,35.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(78));

	// an_sc2_bg
	this.instance_1 = new lib.an_sc2bg("synched",0,false);
	this.instance_1.setTransform(499.65,391.75,1,1,0,0,0,1066.7,1063.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-840.5,-945.2,2711.5,2705.1000000000004);


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
	this.instance.setTransform(1094.9,483.7,1.2306,1.2306,0,0,0,163.8,36.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(41));

	// an_sc1_sub
	this.instance_1 = new lib.an_sc1sub("synched",0,false);
	this.instance_1.setTransform(628.15,357.15,1.9926,1.9926,0,0,0,134.7,15.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).wait(35));

	// an_sc1_title
	this.instance_2 = new lib.an_sc1title("synched",0,false);
	this.instance_2.setTransform(808.05,187.15,2.0393,2.0393,0,0,0,137.5,52.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

	// an_car1
	this.instance_3 = new lib.an_car1("synched",0,false);
	this.instance_3.setTransform(-246,375.35,1.2823,1.2823,0,0,0,516,181.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

	// an_sc1_bg
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0.114,1],-356.1,0,356,0).s().p("Eg3oAx3MAAAhjtMBvRAAAMAAABjtg");
	this.shape.setTransform(232.0216,402.4092,0.6981,4.3926,-97.1312);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#789DCD","rgba(224,228,229,0)"],[0,1],-356.1,0,356,0).s().p("Eg3oAx3MAAAhjtMBvRAAAMAAABjtg");
	this.shape_1.setTransform(889.4932,152.8422,1.6654,2.2958,139.304);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FCF3E3","rgba(224,228,229,0)"],[0,1],-356.1,0,356,0).s().p("Eg3oAx3MAAAhjtMBvRAAAMAAABjtg");
	this.shape_2.setTransform(456.697,261.0822,2.4621,0.8688,180);

	this.instance_4 = new lib.an_sc1bg("synched",0,false);
	this.instance_4.setTransform(297.9,244.4,1,1,0,0,0,345.6,280.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1189.4,-789.1,3006.1000000000004,1884);


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
	this.shape.setTransform(347.225,892.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AhoBUIAAgjICZAAIAIAAQAGgBAEgFQAEgFAAgFQAAgPgPgCIhqAAIgQgBQgVgDgMgOQgKgOAAgRQAAgTAMgOQAMgOAUgCICjgBIAAAjIiSAAIgLAAQgLAEAAALQAAAMALACIALABIByABQAUACANAPQALAOAAASQAAATgLAOQgNARgXABIgMABg");
	this.shape_1.setTransform(261.775,892.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A1A1A").s().p("AhoBUIAAgjICZAAIAIAAQAOgCAAgOQAAgPgPgCIhqAAIgQgBQgUgDgMgOQgLgOAAgRQAAgTAMgOQANgNATgDICjgBIAAAjIiSAAIgLAAQgLAEAAALQAAAMALACIALABIByABQAUACANAPQALAOAAASQAAATgLAOQgNARgWABIgNABg");
	this.shape_2.setTransform(290.425,892.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A1A1A").s().p("ABSBUIgTgeIh9AAIgTAeIguAAIBrinIApAAIBrCngAArAWIgrhCIgqBCIBVAAg");
	this.shape_3.setTransform(318.625,892.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A1A1A").s().p("AA7BUIh/h9IAAB9IgmAAIAAinIAxAAIB+B8IAAh8IAmAAIAACng");
	this.shape_4.setTransform(220.325,892.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1A1A1A").s().p("AgSBUIAAinIAlAAIAACng");
	this.shape_5.setTransform(241.425,892.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1A1A1A").s().p("AlMB3QiZhehLicIgDgGQgLgWgKgIQgOgNgegDIhFgIIAAgUICoAAIAAACQA7CjCRBkQCSBlCzAAQC0AACRhlQCThjA5ikIABgCICpAAIAAAUIhHAIQgdADgPANQgIAIgMAWIgCAGQhMCciaBeQiYBdi0AAQizAAiZhdg");
	this.shape_6.setTransform(283.8,931.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1A1A1A").s().p("AISDUIgBgCQg5ijiThkQiRhki0AAQizAAiSBkQiRBkg7CjIAAACIioAAIAAgUIBFgHQAegEAOgNQAKgIALgWIADgGQBLicCZheQCZhdCzAAQC0AACYBdQCaBeBMCcIACAGQAMAWAIAIQAPANAdAEIBHAHIAAAUg");
	this.shape_7.setTransform(283.8,853.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AK1BUIiAh9IAAB9IgmAAIAAinIAxAAICAB8IAAh8IAmAAIAACngAGvBUIgUgeIh9AAIgUAeIguAAIBsinIApAAIBsCngAGIAWIgrhCIgsBCIBXAAgAglBUIAAgjICYAAIAIAAQAOgCAAgOQAAgPgPgCIhqAAIgQgBQgUgDgMgOQgKgOAAgRQAAgTAMgOQAMgNASgDIClgBIAAAjIiTAAIgLAAQgKAEAAALQAAAMAKACIALABIByABQAVACAMAPQALAOAAASQAAATgLAOQgNARgWABIgMABgAlEBUIAAgjICaAAIAIAAQAGgBAEgFQAEgFAAgFQAAgPgPgCIhrAAIgQgBQgVgDgMgOQgKgOAAgRQAAgTAMgOQAMgOAUgCICkgBIAAAjIiTAAIgLAAQgLAEAAALQAAAMALACIALABIBzABQAUACANAPQALAOAAASQAAATgLAOQgNARgXABIgMABgAm6BUIAAinIAnAAIAACngAo+BUIiBh9IAAB9IgmAAIAAinIAxAAICAB8IAAh8IAmAAIAACng");
	this.shape_8.setTransform(283.775,892.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AlMB3QiZhehLicIgEgGQgKgWgKgIQgPgNgdgDIhFgIIAAgUICoAAIAAACQA7CjCRBkQCSBlCzAAQC0AACRhlQCThjA5ikIABgCICpAAIAAAUIhHAIQgdADgPANQgJAIgLAWIgCAGQhNCciZBeQiYBdi0AAQizAAiZhdg");
	this.shape_9.setTransform(283.8,931.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AISDUIgBgCQg5ijiThkQiRhki0AAQizAAiSBkQiRBkg7CjIAAACIioAAIAAgUIBFgHQAdgEAPgNQAKgIAKgWIAEgGQBLicCZheQCZhdCzAAQC0AACYBdQCZBeBNCcIACAGQALAWAJAIQAPANAdAEIBHAHIAAAUg");
	this.shape_10.setTransform(283.8,853.375);

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
p.nominalBounds = new cjs.Rectangle(-899,-149.2,3599.9,2705.2);


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
	this.instance.setTransform(519.1,164.85,0.5,0.5,0,0,0,1198.1,1125.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(719).to({mode:"single",startPosition:359},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-44.5,-348,1315.5,1228.5);
// library properties:
lib.properties = {
	id: 'FF22514E8FBB4760B18695513798AD24',
	width: 970,
	height: 250,
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