/**
 * @author Gianmarco De Blasio
 */
//taccia

//domains
var domain = DOMAIN([[0,1],[0,2*PI]])([40,40]);
var domain1 = DOMAIN([[0,1],[0,2*PI]])([70,70]);
var domain2 = DOMAIN([[0,1],[0,2*PI]])([20,20]);
var halfDomain = DOMAIN([[0,1],[0,PI]])([10,10]);

//auxiliary functions
var surface = function (controlpoints, domainSurface) {
	var curve = BEZIER(S0)(controlpoints);
	var mapping = ROTATIONAL_SURFACE(curve);
	return MAP(mapping)(domainSurface);
}

var normalize = function(rgb){
    return [rgb[0]/255,rgb[1]/255,rgb[2]/255];
    }


//glass
var glass = [[0,0,0],[2.7,0,0.1],[6,0,2.5],[7,0,4],[8,0,10]];
var sGlass = COLOR([255,255,255,0.7])(surface(glass,domain));

//frame
var frameAbove1 = [[8,0,10],[8.15,0,10.25],[8.3,0,10.5]];
var sframeAbove1 = surface(frameAbove1,domain1);
var frameAbove2 = [[8.2,0,10],[8.35,0,10.25],[8.5,0,10.5]];
var sframeAbove2 = surface(frameAbove2,domain1);
var frameAbove3 = [[8,0,10],[8.1,0,10],[8.2,0,10]];
var sframeAbove3 = surface(frameAbove3,domain1);
var frameAbove4 = [[8.3,0,10.5],[8.45,0,10.5],[8.5,0,10.5]];
var sframeAbove4 = surface(frameAbove4,domain1);
var frameAbove5 = [[0,0,0],[6,0,0.3],[8.05,0,3.05]];
var sframeAbove5 = T([2])([7])(surface(frameAbove5,domain));
var gray = normalize([239,239,239]);
var frameAbove = COLOR(gray)(STRUCT([sframeAbove1,sframeAbove2,sframeAbove3,sframeAbove4,sframeAbove5]));

//bell
var bell = T([0,2])([-2.5,8.5])(R([0,2])([PI/8])(STRUCT([sGlass,frameAbove])));

//stem
var halfCircumference = [[0.5,0,0],[0.5,0,3],[0.5,0,6.6]];
var shalfCircumference = T([0])([0.5])(surface(halfCircumference,halfDomain));

function createStem(halfCirc){
	var temp;
	var d = 2.2+(2*Math.abs(SIN(PI/8)));
	var d2 = 2*Math.abs(COS(PI/8));
	temp = STRUCT(REPLICA(18)([T([1])([-d])(R([0,1])([PI/9])(halfCirc)),R([0,1])([PI/9])]));
	return temp;
}

var stem1 = COLOR([0,0,0])(T([2])([1.1])(createStem(shalfCircumference)));
var black = normalize([192,192,192]);
var stem2 = [[2.3,0,0],[2.3,0,4],[2.3,0,8]];
var sstem2 = COLOR(black)(T([2])([0.3])(surface(stem2,domain)));
var stem3 = [[0,0,0],[1.5,0,0],[3.1,0,0]];
var sstem3 = COLOR(black)(surface(stem3,domain));
var sstem4 = T([2])([0.3])(sstem3);
var stem5 = [[3.1,0,0],[3.1,0,0.2],[3.1,0,0.3]];
var sstem5 = COLOR(black)(surface(stem5,domain));
var stem6 = [[2.3,0,0,],[3,0,0.3],[3.3,0,0.6]];
var sstem6 = COLOR(black)(T([2])([8.3])(surface(stem6,domain)));

var stem= STRUCT([stem1,sstem2,sstem3,sstem4,sstem5,sstem6]);

//complete lamp
var model = STRUCT([bell,stem]); 
DRAW(model);
