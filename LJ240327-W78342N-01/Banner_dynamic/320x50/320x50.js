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
p.nominalBounds = new cjs.Rectangle(0,0,700,600);


(lib.sc3bg = function() {
	this.initialize(img.sc3bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,525,450);


(lib.sc4bg = function() {
	this.initialize(img.sc4bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1008,400);// helper functions:

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
	this.shape_2.graphics.f().s("#000000").p("AB5grIhhAAIAAhEIBhAAgAB6A7QgFAvgJAIQgGAHgKABQgIABgTgBQgBgLgFgKIgJAEQgFgNgLgOIAVgIQAMANAGAMIgKAEIAOABQAEAAADgDQAEgFADgXIiqAAIAAhmIC5AAIAAAUIhJAAIAAAKIA9AAIAAAPIg9AAIAAAKIA+AAIAAARIg+AAIAAAKIBZAAgABahYIgmAAIAAAWIAmAAgAguhSQgLAogrAQQgGgNgKgIQAfgLAJgYIgfAAIAAgYIAlAAIACgRIAdAAIgCARIA2AAIAAAKQgDApgIAJQgEAGgKABQgIABgRgBQgBgOgGgJQAIACAJAAQAEAAACgDQADgDACgQgAhyBrQAQgOAOgYIAZANQgRAagMAPgAgwgNIAAAKIAzAAIAAgKgAADAMIgzAAIAAAKIAzAAgAgwAxIAzAAIAAgKIgzAAgAgXBMQAHATACATIgcAGQAAgNgHgbgAARBKQAJAQAFATIgZAHQgDgQgJgTg");
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
	this.shape_6.graphics.f().s("#000000").p("ABEg9IAAAQIAyAAIAACKQAAATgJAGQgIAGgVAAQgCgQgGgMIAOAAQADAAAAgDIAAgbIgVAAIAAA4IgbAAIAAg4IgUAAIAAA6IgbAAIAAipIAvAAIAAgQIgyAAIAAgbIAyAAIAAghIAbAAIAAAhIAdAAQgLgMgMgIIARgOQASALALANIgMAKIAPAAIAAAbgAgzA3IAoAAIAAAcIgoAAIAAApIgcAAIAAgpIgrAAIAAgcIArAAIAAgQIgiAAIAAheIAiAAIAAgOIgnAAIAAgbIAnAAIAAgZIAcAAIAAAZIAlAAIAAAbIglAAIAAAOIAjAAIAABeIgjAAgAgnACIgQAAIAAAQIAQAAgAApAoIAAgRIgUAAIAAARgAAVgSIAAARIAUAAIAAgRgAgnghIgQAAIAAAPIAQAAgAhagSIAPAAIAAgPIgPAAgAhaASIAPAAIAAgQIgPAAgABZAoIAAgRIgVAAIAAARgABEgSIAAARIAVAAIAAgRg");
	this.shape_6.setTransform(177.575,82.8689);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGB8IAAipIAvAAIAAgRIgyAAIAAgbIAyAAIAAghIAbAAIAAAhIAdAAQgLgLgMgJIARgOQASALALANIgMAKIAPAAIAAAbIg3AAIAAARIAyAAIAACKQAAATgJAGQgIAFgVAAQgCgPgGgMIAOAAQAAAAABAAQABgBAAAAQAAgBABAAQAAgBAAgBIAAgaIgVAAIAAA4IgbAAIAAg4IgUAAIAAA6gABEAoIAVAAIAAgSIgVAAgAAVAoIAUAAIAAgSIgUAAgABEgCIAVAAIAAgRIgVAAgAAVgCIAUAAIAAgRIgUAAgAhPB8IAAgqIgrAAIAAgbIArAAIAAgQIgiAAIAAhfIAiAAIAAgNIgnAAIAAgbIAnAAIAAgaIAcAAIAAAaIAlAAIAAAbIglAAIAAANIAjAAIAABfIgjAAIAAAQIAoAAIAAAbIgoAAIAAAqgAg3ARIAQAAIAAgPIgQAAgAhaARIAPAAIAAgPIgPAAgAg3gSIAQAAIAAgQIgQAAgAhagSIAPAAIAAgQIgPAAg");
	this.shape_7.setTransform(177.575,82.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").p("AB5hBIgBAOQgBBSgDAgQgDAigGAJQgHAKgNADQgKACgXgBQgBgQgIgOQALABAPAAQAGAAADgEQAIgKAChyIgYAAQgDA6gLAjQgOAqggAZQgGgLgLgKIhpAKIgDgaIA1gEIAAgQIguAAIAAgWIAuAAIAAgKIgtAAIAAhRIAtAAIAAgKIg0AAIAAgXIA0AAIAAgKIgsACQgCgLgFgMQBHgDArgJIAMAXIguAHIAAANIAxAAIAAAPIAZAAIABg4IAeAAIgBA4gAhCAOIAAgMIgUAAIAAAMgAhWgQIAUAAIAAgLIgUAAgAglBQIAtgEQAOgUAHgeQAGgZABgmIgYAAIAAgUIgxAAIAAAKIAtAAIAABRIgtAAIAAAKIAvAAIAAAWIgvAAgAglACIAAAMIAUAAIAAgMgAgRgQIAAgLIgUAAIAAALg");
	this.shape_8.setTransform(150.0713,83.2395);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgLBnIhpAKIgDgbIA1gDIAAgQIguAAIAAgXIAuAAIAAgKIgtAAIAAhQIAtAAIAAgKIg0AAIAAgXIA0AAIAAgLIgsADQgCgMgGgLQBIgEArgIIAMAXIgvAHIAAANIAyAAIAAAOIAZAAIAAg3IAfAAIgBA3IA2AAIgBAPQgBBSgDAfQgDAjgGAIQgHALgNADQgLACgXgBQAAgRgJgNIAbABQAGAAADgFQAHgJADhyIgYAAQgDA6gMAjQgNAqggAYQgGgKgLgKgAgmBQIAtgDQAPgVAHgdQAGgZABgmIgYAAIAAgUIgyAAIAAAKIAuAAIAABQIguAAIAAAKIAvAAIAAAXIgvAAgAgmAPIAVAAIAAgMIgVAAgAhWAPIAUAAIAAgMIgUAAgAgmgPIAVAAIAAgMIgVAAgAhWgPIAUAAIAAgMIgUAAg");
	this.shape_9.setTransform(150.1,83.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").p("AA+BRIAAgbIh9AAIAAAbgAg/gBIAAAaIB9AAIAAgagAg/g6IAAAcIB9AAIAAgcgABfhYIAADTIghAAIAAgNIh9AAIAAAOIgfAAIAAjUIBDAAQAGgcABgGIAlAEQgIAVgEAJg");
	this.shape_10.setTransform(123.225,82.9264);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AheB8IAAjUIBDAAIAHgjIAlAFIgMAeIBaAAIAADTIghAAIAAgNIh9AAIAAAOgAg/BRIB9AAIAAgcIh9AAgAg/AZIB9AAIAAgaIh9AAgAg/geIB9AAIAAgcIh9AAg");
	this.shape_11.setTransform(123.225,82.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").p("ABkhrQgTAmgNAUIgegKQASgdAJgegAhGgvQgFgWgWgkIAegMQAVAhAHAZgAB3A2IhoAAIAABFIggAAIAAhFIhlAAIAAggIBlAAIAAgfIhVAAIAAgfIBVAAIAAhSIAgAAIAABSIBaAAIAAAfIhaAAIAAAfIBoAAg");
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
	this.shape_28.graphics.f().s("#000000").p("AhRAJIBPAAQAnAAARgLQAYgPAAgmQAAghgYgOQgTgMgnAAIhNAAgAAFi/QCoAAAACLQAABIg3AlQgtAdhEAAIhWAAIAABqIhbAAIAAl/g");
	this.shape_28.setTransform(123.25,33.675);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AisDAIAAl/ICxAAQCoAAAACLQABBIg4AlQgtAdhDAAIhXAAIAABqgAhRAJIBQAAQAmAAARgLQAYgPAAgmQAAghgYgOQgSgMgoAAIhNAAg");
	this.shape_29.setTransform(123.25,33.675);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").p("AhQAAQAAAlAXAXQAXAZAkAAQAjAAAXgZQAVgYAAgkQAAgngXgXQgWgWglAAQgjAAgWAXQgWAXAAAmgACuAAQAABMgwAqQgvAphOAAQhPAAgugoQgxgrAAhMQAAhLAxgqQAugpBPAAQBOAAAvApQAwAqAABLg");
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
	this.shape_34.graphics.f().s("#000000").p("AhRAJIBPAAQAmAAASgLQAYgPAAgmQAAghgYgOQgTgMgmAAIhOAAgAAFi/QCpAAAACLQAABIg4AlQgtAdhDAAIhXAAIAABqIhcAAIAAl/g");
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
	this.shape.setTransform(456.5466,18.4686,1.2081,1.2081);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMBrIAAhMIBAAAQgYgSgegNIgtAAQgPAQgXAPIA0AAIAABKIgRAAIAAgGIgqAAIAAAIIgQAAIAAhAIgTAIQgEgJgFgEQApgQAYgWIg8AAIAAgPIBLAAQAJgKAIgNIhKAAIAAhEIBNAAIAAA/IAQADQgFAMgJANIBFAAQgMgJgRgGIAIgIIgXAAIAAhEIBOAAIAABEIg0AAQAXAIALAJIgHAGIAsAAIAAAPIg6AAQApAWASARIgMAKIgLgJIAABBIgRAAIAAgGIgsAAIAAAIgAAdBUIAsAAIAAgmIgsAAgAhEBUIAqAAIAAgmIgqAAgAAfg1IAtAAIAAgmIgtAAgAhJg1IAsAAIAAgmIgsAAg");
	this.shape_1.setTransform(429.3339,18.5894,1.2081,1.2081);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA3BxIAAgWIihAAIAAgNIAlAAIAAhAIgdAAIAAgNIgLgGQAPgPAAgZIAAgOIBZAAIAAAnIhOAAQgEANgHAHIDGAAIAAAOIgfAAIAABAIAkAAIAAANIgkAAIAAAWgAgzBOIBqAAIAAgNIhqAAgAgzA1IBqAAIAAgOIhqAAgAgzAbIBqAAIAAgNIhqAAgAgsgeIAYAAIAAgSIgYAAgAhRgeIAXAAIAAgSIgWAAgAA1gQQgUALgdAEQgDgHgDgGQAWgDATgHQgQgLgJgPIgHAAIAAgJQgFgHgDgDQAUgIAAgPIAAgMIA+AAIAAAXQAAAGAEAAIANAAIALgBIABALQgDABgJAAIgRAAQgJAAgDgEQgDgEAAgKIAAgJIggAAQAAATgTALIBEAAIADAAIAKAEQgJAUgTANQARAHAYADQgFAEgEAJQgcgFgTgKgAA1gfQANgHAJgMIgtAAQAJAMAOAHgAhihDIAAgLIAmAAIAAgLIguAAIAAgLIAuAAIAAgMIARAAIAAAMIAsAAIAAALIgsAAIAAALIAmAAIAAALg");
	this.shape_2.setTransform(399.3424,17.9854,1.2081,1.2081);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAJBnQAfgYAPgqIgVAAQgWApgmAbQgJgIgDgCQAjgXATgjIgTAAQgQARgLAIIgNgLQAbgRARgdIgfAAIAAgPICQAAIAAAPIhgAAIgLARIBiAAIAAAIQgCAlgDARQgCARgFAFQgGAFgJABQgKABgQgBQAAgJgEgHIAXABQAGAAACgCQAGgHADgzIgRAAQgPAughAegAhjBwQgCgMgDgFIAYAAQAEAAAAgFIAAhBIghAKIgEgSIAlgKIAAg1IghAAIAAgQIAhAAIAAgxIASAAIAAAxIAZAAIAAAQIgZAAIAAAwIAXgFIADAPIgaAIIAABGQgBAPgHAEQgHADgRAAIgJAAgAgNgaIAAhOIBtAAIAABOgAADgmIBMAAIAAgUIhMAAgAADhHIBMAAIAAgUIhMAAg");
	this.shape_3.setTransform(369.2906,17.9552,1.2081,1.2081);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhwBfQA3gIApgVQgjgZgUgpIAGgBIgaAAIAAgSIBSAAIAAglIhdAAIAAgSIBdAAIAAglIASAAIAAAlIBeAAIAAASIheAAIAAAlIA5AAIAEAAIANAIQgUAugtAfQAqAVA1AHQgHAHgEALQg+gKgogYQgpAXg9AMQgFgLgFgHgAABA4QAkgXATgiIhrAAQARAiAjAXg");
	this.shape_4.setTransform(339.4199,17.9552,1.2081,1.2081);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6BbQgWgRAAgeQAAgSAOgPQAMgLAQgFQgjgSAAgbQAAgbAWgPQAUgOAfAAQAfAAAVANQAWAPAAAcQAAAPgMANQgJAKgOAHQAQAFALALQAPAPABATQAAAegYAQQgWAQgkAAQgkAAgWgQgAgnAUQgNAKABAPQAAASARAKQAOAIAUAAQAUAAAPgIQARgKAAgSQAAgPgNgKQgOgMgZAAQgXAAgQAMgAgghIQgMAJAAAPQAAANAMAKQANAKATAAQATAAANgKQANgKAAgMQAAgQgNgJQgMgJgUAAQgTAAgNAJg");
	this.shape_5.setTransform(312.1467,16.7773,1.2081,1.2081);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAGCIQgUglgJgdQgMgiAAgkQAAgjAMgiQAJgcAUgmIAdAAIgbAyQgRApAAAsQAAAtASApIAbAyg");
	this.shape_6.setTransform(287.8938,18.4686,1.2081,1.2081);

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
p.nominalBounds = new cjs.Rectangle(0,0,460.9,34.9);


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
	this.shape.setTransform(106.8891,291.7752,1.8563,4.8476,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape_1.setTransform(-1050.3391,-17.501,1.8563,4.8477);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.instance = new lib.sc3bg();
	this.instance.setTransform(-1323,-321,3.2375,3.2373);

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
	this.instance.setTransform(231.2,61.6,1.6978,1,180,0,0,136.7,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(78).to({startPosition:78},0).to({_off:true},1).wait(10));

	// an_line
	this.instance_1 = new lib.an_line("synched",0,false);
	this.instance_1.setTransform(231.3,1,1.6978,1,0,0,0,136.7,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(78).to({startPosition:78},0).to({_off:true},1).wait(10));

	// sb_sc3_title
	this.instance_2 = new lib.sb_sc3title("synched",0);
	this.instance_2.setTransform(136.35,49.55,1,1,0,0,0,135.1,35.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1,startPosition:23},23,cjs.Ease.cubicOut).to({startPosition:78},55).to({_off:true},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0,463,62.6);


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
	this.shape_59.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.035,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape_59.setTransform(1000.1946,1004.5338,1.2106,3.1615,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-146.1,0,146.1,0).s().p("EgW0ApIMAAAhSQMAtpAAAMAAABSQg");
	this.shape_60.setTransform(-145.0946,756.3284,1.2106,3.1615);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59}]}).wait(90));

	// sc2_bg
	this.instance = new lib.sb_sc2bg("synched",0);
	this.instance.setTransform(426.25,1023.1,2.2669,2.2669,0,0,0,330.1,282.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// Layer_2
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#CA0000").ss(1,1,1).p("ECfIAtQMk+PAAAEifHgtPME+PAAA");
	this.shape_61.setTransform(897.475,927.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("ECfIAtPMk+QAAAMhnzAAAMAAAhadMBnzAAAME+QAAAMBn0AAAMAAABadg");
	this.shape_62.setTransform(897.525,927.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61}]}).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-785.3,-273.3,3365.7,2705.2000000000003);


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
	this.instance.setTransform(1107.45,255.75,3.4438,3.4438,0,0,0,138,56.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(81).to({startPosition:81},0).to({_off:true},1).wait(180));

	// an_sc4_bg
	this.instance_1 = new lib.an_sc4bg("synched",0,false);
	this.instance_1.setTransform(208.55,109.45,1.7805,1.7805,0,0,0,329,262.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({startPosition:89},0).to({_off:true},1).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3358.2,-1902,6181.4,4201.9);


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
	this.instance.setTransform(542.8,315.85,3.68,3.68,0,0,0,136.8,48.8);
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
p.nominalBounds = new cjs.Rectangle(-1355.7,-1296.9,3392,2861.6000000000004);


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
	this.instance.setTransform(1200.35,249.2,3.4462,3.4462,0,0,0,144,35.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(78));

	// an_sc2_bg
	this.instance_1 = new lib.an_sc2bg("synched",0,false);
	this.instance_1.setTransform(499.65,391.75,1,1,0,0,0,1066.7,1063.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1352.3,-945.2,3365.6,2705.1000000000004);


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
	this.shape.setTransform(1353.3633,106.2011,1.4645,2.2958,139.304);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FCF3E3","rgba(224,228,229,0)"],[0,1],-356.1,0,356,0).s().p("Eg3oAx3MAAAhjtMBvRAAAMAAABjtg");
	this.shape_1.setTransform(664.7499,261.0822,3.5091,0.8688,180);

	this.instance_4 = new lib.an_sc1bg("synched",0,false);
	this.instance_4.setTransform(297.9,244.4,1,1,0,0,0,345.6,280.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.shape_1},{t:this.shape}]}).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1364.7,-789.2,4270.1,1790.8000000000002);


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
	this.shape.setTransform(-4.9924,1051.5861,2.6953,2.695);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AhoBUIAAgjICZAAIAIAAQAGgBAEgFQAEgFAAgFQAAgPgPgCIhqAAIgQgBQgVgDgMgOQgKgOAAgRQAAgTAMgOQAMgOAUgCICjgBIAAAjIiSAAIgLAAQgLAEAAALQAAAMALACIALABIByABQAUACANAPQALAOAAASQAAATgLAOQgNARgXABIgMABg");
	this.shape_1.setTransform(-235.3068,1051.5861,2.6953,2.695);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A1A1A").s().p("AhoBUIAAgjICZAAIAIAAQAOgCAAgOQAAgPgPgCIhqAAIgQgBQgUgDgMgOQgLgOAAgRQAAgTAMgOQANgNATgDICjgBIAAAjIiSAAIgLAAQgLAEAAALQAAAMALACIALABIByABQAUACANAPQALAOAAASQAAATgLAOQgNARgWABIgNABg");
	this.shape_2.setTransform(-158.0861,1051.5861,2.6953,2.695);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A1A1A").s().p("ABSBUIgTgeIh9AAIgTAeIguAAIBrinIApAAIBrCngAArAWIgrhCIgqBCIBVAAg");
	this.shape_3.setTransform(-82.0783,1051.5861,2.6953,2.695);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A1A1A").s().p("AA7BUIh/h9IAAB9IgmAAIAAinIAxAAIB+B8IAAh8IAmAAIAACng");
	this.shape_4.setTransform(-347.0275,1051.5861,2.6953,2.695);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1A1A1A").s().p("AgSBUIAAinIAlAAIAACng");
	this.shape_5.setTransform(-290.1564,1051.5861,2.6953,2.695);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1A1A1A").s().p("AlMB3QiZhehLicIgDgGQgLgWgKgIQgOgNgegDIhFgIIAAgUICoAAIAAACQA7CjCRBkQCSBlCzAAQC0AACRhlQCThjA5ikIABgCICpAAIAAAUIhHAIQgdADgPANQgIAIgMAWIgCAGQhMCciaBeQiYBdi0AAQizAAiZhdg");
	this.shape_6.setTransform(-175.9085,1156.4481,2.6958,2.6954);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1A1A1A").s().p("AISDUIgBgCQg5ijiThkQiRhki0AAQizAAiSBkQiRBkg7CjIAAACIioAAIAAgUIBFgHQAegEAOgNQAKgIALgWIADgGQBLicCZheQCZhdCzAAQC0AACYBdQCaBeBMCcIACAGQAMAWAIAIQAPANAdAEIBHAHIAAAUg");
	this.shape_7.setTransform(-175.9085,946.7492,2.6958,2.6954);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AK1BUIiAh9IAAB9IgmAAIAAinIAxAAICAB8IAAh8IAmAAIAACngAGvBUIgUgeIh9AAIgUAeIguAAIBsinIApAAIBsCngAGIAWIgrhCIgsBCIBXAAgAglBUIAAgjICYAAIAIAAQAOgCAAgOQAAgPgPgCIhqAAIgQgBQgUgDgMgOQgKgOAAgRQAAgTAMgOQAMgNASgDIClgBIAAAjIiTAAIgLAAQgKAEAAALQAAAMAKACIALABIByABQAVACAMAPQALAOAAASQAAATgLAOQgNARgWABIgMABgAlEBUIAAgjICaAAIAIAAQAGgBAEgFQAEgFAAgFQAAgPgPgCIhrAAIgQgBQgVgDgMgOQgKgOAAgRQAAgTAMgOQAMgOAUgCICkgBIAAAjIiTAAIgLAAQgLAEAAALQAAAMALACIALABIBzABQAUACANAPQALAOAAASQAAATgLAOQgNARgXABIgMABgAm6BUIAAinIAnAAIAACngAo+BUIiBh9IAAB9IgmAAIAAinIAxAAICAB8IAAh8IAmAAIAACng");
	this.shape_8.setTransform(-176.01,1051.5769,2.6957,2.696);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AlMB3QiZhehLicIgEgGQgKgWgKgIQgPgNgdgDIhFgIIAAgUICoAAIAAACQA7CjCRBkQCSBlCzAAQC0AACRhlQCThjA5ikIABgCICpAAIAAAUIhHAIQgdADgPANQgJAIgLAWIgCAGQhNCciZBeQiYBdi0AAQizAAiZhdg");
	this.shape_9.setTransform(-175.9426,1156.4531,2.6957,2.696);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AISDUIgBgCQg5ijiThkQiRhki0AAQizAAiSBkQiRBkg7CjIAAACIioAAIAAgUIBFgHQAdgEAPgNQAKgIAKgWIAEgGQBLicCZheQCZhdCzAAQC0AACYBdQCZBeBNCcIACAGQALAWAJAIQAPANAdAEIBHAHIAAAUg");
	this.shape_10.setTransform(-175.9426,946.7008,2.6957,2.696);

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
p.nominalBounds = new cjs.Rectangle(-2528.2,-1105.9,6263.6,4201.8);


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
p.nominalBounds = new cjs.Rectangle(-45.8,-165.1,490.40000000000003,395.1);
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