// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('c');
//rectangleFun();
$(function(){
	imageFun();
	setInterval(function(){
		circleFun();
	},1000);
});
//triangleFun();

function imageFun(){
	fabric.Image.fromURL('cartoon.jpg', function(img) {
	  	// add filter
	  	// img.filters.push(new fabric.Image.filters.Grayscale());
	  	// // apply filters and re-render canvas when done
	  	// img.applyFilters(canvas.renderAll.bind(canvas));
	  	img.filters.push(new fabric.Image.filters.Sepia());
  		img.applyFilters(canvas.renderAll.bind(canvas));
	  	// add image onto canvas
	  	canvas.add(img);
	});
}

function triangleFun(){
	var tri1 =  new fabric.Triangle({
		height: 150,
		width: 50,
		fill: 'red',
		let: 100,
		top: 70,
		opacity: 0.2
	});
	canvas.add(tri1);
	tri1.center();
	//tri1.set({opacity: 0.5});
	//tri1.animate('left', '+=100', { onChange: canvas.renderAll.bind(canvas) });
	var i = 45;
	setInterval(function(){
		tri1.animate('angle', i, {
		  onChange: canvas.renderAll.bind(canvas)
		});
		i = i+45;
	}, 1000);
							
}//END triangleFun();


function circleFun(){
	var cirl1 = new fabric.Circle({
		radius: 5,
		fill: 'red',
		left: 40
	});

	var cirl2 = new fabric.Circle({
		radius: 5,
		fill: 'green',
		left: 100,
		top: 90
	});

	var cirl3 = new fabric.Circle({
		radius: 5,
		fill: 'yellow',
		left: 160,
		top: 60
	});

	var cirl4 = new fabric.Circle({
		radius: 5,
		fill: 'black',
		left: 240,
		top: 190
	});

	var cirl5 = new fabric.Circle({
		radius: 5,
		fill: 'purple',
		left: 350,
		top: 40
	});

	canvas.add(cirl1);
	canvas.add(cirl2);
	canvas.add(cirl3);
	canvas.add(cirl4);
	canvas.add(cirl5);

	var j1 = 380;
	setInterval(function(){
		cirl1.set('top', j1);
		j1++;
		if(j1==390){
			j1=0;
		}
	}, 15);

	var j2 = 10;
	setInterval(function(){
		cirl2.set('top', j2);
		j2++;
		if(j2==390){
			j2=0;
		}
	}, 5);

	var j3 = 50;
	setInterval(function(){
		cirl3.set('top', j3);
		j3++;
		if(j3==390){
			j3=0;
		}
	}, 20);

	var j4 = 50;
	setInterval(function(){
		cirl4.set('top', j4);
		j4++;
		if(j4 == 390){
			j4=0;
		}
	}, 3);

	var j5 = 50;
	setInterval(function(){
		cirl5.set('top', j5);
		j5++;
		if(j5 == 390){
			j5=0;
		}
	}, 8);

}//END circleFun();



//Function for rectangle
function rectangleFun() {
// create a rectangle object
	var rect = new fabric.Rect({
	  fill: 'yellow',
	  width: 50,
	  height: 50,
	  angle: 75
	});

	var rect1 = new fabric.Rect({
		fill: 'red',
		width: 60,
		height: 60,
		angle: 70
	});

	var rect2 = new fabric.Rect({
		fill: 'green',
		width: 70,
		height: 70,
		angle: 65
	});

	var rect3 = new fabric.Rect({
		fill: 'gray',
		width: 80,
		height: 80,
		angle: 60
	});

	var rect4 = new fabric.Rect({
		fill: 'black',
		width: 90,
		height: 90,
		angle: 55
	});

	var rect5 = new fabric.Rect({
		fill: 'white',
		width: 100,
		height: 100,
		angle: 50
	});

	var rect6 = new fabric.Rect({
		fill: 'red',
		width: 110,
		height: 110,
		angle: 45
	});

	var rect7 = new fabric.Rect({
		fill: 'blue',
		width: 120,
		height: 120,
		angle: 40
	});

//Gray rectangle
canvas.add(rect7);
rect7.center();
//Gray rectangle
canvas.add(rect6);
rect6.center();
//Gray rectangle
canvas.add(rect5);
rect5.center();
//Gray rectangle
canvas.add(rect4);
rect4.center();
//Gray rectangle
canvas.add(rect3);
rect3.center();
//Green rectangle
canvas.add(rect2);
rect2.center();
//Red rectangle
canvas.add(rect1);
rect1.center();
var j = 45;
	setInterval(function(){
		rect1.animate('angle', j, {
		  onChange: canvas.renderAll.bind(canvas)
		});
		j = j+45;
	}, 1000);
// "add" rectangle onto canvas
canvas.add(rect);
rect.center();
var i = 45;
	setInterval(function(){
		rect.animate('angle', i, {
		  onChange: canvas.renderAll.bind(canvas)
		});
		i = i+45;
	}, 1000);
}//END rectangleFun();