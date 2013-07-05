/**
 * @author Gianmarco De Blasio
 */
// tavolo95

//domains
var domain1D = DOMAIN([[0,1]])([20]);
var domain = DOMAIN([[0,1],[0,1]])([20,20]);
var domain1 = DOMAIN([[0,1],[0,2*PI]])([70,70]);
var domainSemi = DOMAIN([[0,1],[0,PI]])([20,20]);


//auxiliary functions
var surface = function (controlpoints, domainSurface) {
	var curve = BEZIER(S0)(controlpoints);
	var mapping = ROTATIONAL_SURFACE(curve);
	return MAP(mapping)(domainSurface);
}

var normalize = function(rgb){
    return [rgb[0]/255,rgb[1]/255,rgb[2]/255];
    }
    
function curves_union( curves ){
	function isin( u, a, b ){
	return (u >= a && u < b) ;}
	function aux0( domains ){
		function aux1(u){
			n = curves.length;
				i = 0;
				j = 0;
				k = 0;
				while ( i < n ){
					k += domains[i][1] - domains[i][0]
					i += 1}
				i = 0;
				while ( i < n && !(isin(u[0] * k, j, j + domains[i][1] - domains[i][0])) ){
					j += domains[i][1] - domains[i][0]
					i += 1}

				if ( i < n ){
					return curves[i]([ domains[i][0] + u[0] * k - j ])}
				else{
					return curves[n-1]([ domains[n-1][1] ])}}
			return aux1;}
		return aux0;
}


  
//board   
function angle(){
	var a11 = BEZIER(S0)([[0.5,0,0],[0.5,0.5,0],[0,0.5,0]]);
	var a12 =  BEZIER(S0)([[0,0,0],[0,0,0]]);
	var sa11 = BEZIER(S1)([a11,a12]);
	var sa1 = MAP(sa11)(domain);
	var a21 = BEZIER(S0)([[0.5,0,0.3],[0.5,0.5,0.3],[0,0.5,0.3]]);
	var a22 =  BEZIER(S0)([[0,0,0.3],[0,0,0.3]]);
	var sa22 = BEZIER(S1)([a21,a22]);
	var sa2 = MAP(sa22)(domain);
	var pa1 = BEZIER(S1)([a11,a21]);
	var pa11 = MAP(pa1)(domain);
	var angle = STRUCT([sa1,sa2,pa11]);
	return angle;
}

function edge(){
	var s1 = BEZIER(S0)([[0,0.5,0],[5,0.5,0],[13,0.5,0]]);
	var s2 = BEZIER(S0)([[0,0,0],[5,0,0],[13,0,0]]);
	var s3 = BEZIER(S0)([[0,0,0.3],[5,0,0.3],[13,0,0.3]]);
	var s4 = BEZIER(S0)([[0,0.5,0.3],[5,0.5,0.3],[13,0.5,0.3]]);
	var s1s2 = BEZIER(S1)([s1,s2]);
	var s2s3 = BEZIER(S1)([s2,s3]);
	var s3s4 = BEZIER(S1)([s3,s4]);
	var ms1s2 = MAP(s1s2)(domain);
	var ms2s3 = MAP(s2s3)(domain);
	var ms3s4 = MAP(s3s4)(domain);
	var edge = STRUCT([ms1s2,ms2s3,ms3s4]);
	return edge;
}

var cube = T([0,1])([0.5,0.5])(CUBOID([13,13,0.3]));
var edge1 = T([0,1,2])([0.5,14,0.3])(R([1,2])([PI])(edge()));
var edge2 = T([0])([0.5])(edge());
var edge3 = T([0,1])([14,0.5])(R([0,1])([PI/2])(edge()));
var edge4 = T([1])([13.5])(R([0,1])([-PI/2])(edge()));
var angle1 = T([0,1])([13.5,13.5])(angle());
var angle2 = T([0,1])([13.5,0.5])(R([0,1])([-PI/2])(angle()));
var angle3 = T([0,1])([0.5,0.5])(R([0,1])([-PI])(angle()));
var rotation = -(3*(PI/2));
var angle4 = T([0,1])([0.5,13.5])(R([0,1])([rotation])(angle()));

var board = COLOR([2,2,2])(T([2])([7.4])(STRUCT([cube,edge1,edge2,edge3,edge4,angle1,angle2,angle3,angle4])));

//legs
function leg(){
	var g1 = BEZIER(S0)([[0,3.1/4,7],[1/4,2.98/4,7],[1.8/4,0.75/4,7],[1.55/4,1.2/4,7],[1.5/4,0.1/4,7]]);
	var mg1 = MAP(g1)(domain1D);
	var g2 = BEZIER(S0)([[-1.5/4,0.1/4,7],[-1.55/4,1.2/4,7],[-1.8/4,0.75/4,7],[-1/4,2.98/4,7],[0,3.1/4,7]]);
	var mg2 = MAP(g2)(domain1D);
	var g3 = BEZIER(S0)([[1.5/4,0.1/4,7],[0,-0.2/4,7],[-1.5/4,0.1/4,7]]);
	var mg3 = MAP(g3)(domain1D);
	var g2g1 = curves_union([ g2, g1 ])([ [ 0, 1 ], [ 0, 1 ] ]);
	var sg = BEZIER(S1)([g2g1,g3]);
	var msg = MAP(sg)(domain);
	
	var p1 = BEZIER(S0)([[0,3.1/8,0],[1/8,2.98/8,0],[1.8/8,0.75/8,0],[1.55/8,1.2/8,0],[1.5/8,0.1/8,0]]);
	var mp1 = MAP(p1)(domain1D);
	var p2 = BEZIER(S0)([[-1.5/8,0.1/8,0],[-1.55/8,1.2/8,0],[-1.8/8,0.75/8,0],[-1/8,2.98/8,0],[0,3.1/8,0]]);
	var mg2 = MAP(p2)(domain1D);
	var p3 = BEZIER(S0)([[1.5/8,0.1/8,0],[0,-0.2/8,0],[-1.5/8,0.1/8,0]]);
	var mg3 = MAP(p3)(domain1D);
	var p2p1 = curves_union([ p2, p1 ])([ [ 0, 1 ], [ 0, 1 ] ]);
	var sp = BEZIER(S1)([p2p1,p3]);
	var msp = MAP(sp)(domain);
	
	var l1 = BEZIER(S1)([g1,p1]);
	var ml1 = MAP(l1)(domain);
	var l2 = BEZIER(S1)([g2,p2]);
	var ml2 = MAP(l2)(domain);
	var l3 = BEZIER(S1)([g3,p3]);
	var ml3 = MAP(l3)(domain);
	var brown = normalize([150,75,0]);
	return COLOR(brown)(STRUCT([msg,msp,ml1,ml2,ml3]));
}

function hinge(){
	var c1 = BEZIER(S0)([[0.06,-0.5,1.35],[0.06,-0.25,0.675],[0.06,0,0]]);
	var c2 = BEZIER(S0)([[0.06,0,0],[0.06,0,0.5],[0.06,0,1]]);
	var c3 = BEZIER(S0)([[0.06,0,1],[0.06,-0.05,1],[0.06,-0.1,1]]);
	var c4 = BEZIER(S0)([[0.06,-0.1,1],[0.06,-0.1,1.20],[0.06,-0.1,1.35]]);
	var c5 = BEZIER(S0)([[0.06,-0.1,1.35],[0.06,-0.25,1.35],[0.06,-0.5,1.35]]);
	var c2c3c4c5 = curves_union([c2,c3,c4,c5])([ [ 0, 1 ], [ 0, 1 ], [ 0, 1 ], [ 0, 1 ] ]);
	var sc = BEZIER(S1)([c2c3c4c5,c1]);
	var msc = MAP(sc)(domain);
	
	var d1 = BEZIER(S0)([[-0.06,-0.5,1.35],[-0.06,-0.25,0.675],[-0.06,0,0]]);
	var d2 = BEZIER(S0)([[-0.06,0,0],[-0.06,0,0.5],[-0.06,0,1]]);
	var d3 = BEZIER(S0)([[-0.06,0,1],[-0.06,-0.05,1],[-0.06,-0.1,1]]);
	var d4 = BEZIER(S0)([[-0.06,-0.1,1],[-0.06,-0.1,1.20],[-0.06,-0.1,1.35]]);
	var d5 = BEZIER(S0)([[-0.06,-0.1,1.35],[-0.06,-0.25,1.35],[-0.06,-0.5,1.35]]);
	var d2d3d4d5 = curves_union([d2,d3,d4,d5])([ [ 0, 1 ], [ 0, 1 ], [ 0, 1 ], [ 0, 1 ] ]);
	var sd = BEZIER(S1)([d2d3d4d5,d1]);
	var msd = MAP(sd)(domain);
	
	var e1 = BEZIER(S0)([[-0.06,0,0],[0,0,0],[0.06,0,0]]);
	var e2 = BEZIER(S0)([[-0.06,0,1],[0,0,1],[0.06,0,1]]);
	var e3 = BEZIER(S0)([[-0.06,-0.1,1],[0,-0.1,1],[0.06,-0.1,1]]);
	var e4 = BEZIER(S0)([[-0.06,-0.1,1.35],[0,-0.1,1.35],[0.06,-0.1,1.35]]);
	var e5 = BEZIER(S0)([[-0.06,-0.5,1.35],[0,-0.5,1.35],[0.06,-0.5,1.35]]);
	var e2e3 = BEZIER(S1)([e2,e3]);
	var me2e3 = MAP(e2e3)(domain);
	var e3e4 = BEZIER(S1)([e3,e4]);
	var me3e4 = MAP(e3e4)(domain);
	var e4e5 = BEZIER(S1)([e4,e5]);
	var me4e5 = MAP(e4e5)(domain);
	var e5e1 = BEZIER(S1)([e5,e1]);
	var me5e1 = MAP(e5e1)(domain);
	var cub = T([0,1,2])([-0.185,-1.5,1.35])(CUBOID([0.37,1.4,0.05]));
	return T([2])([6])(STRUCT([msc,msd,me2e3,me3e4,me4e5,me5e1,cub]));
}

var leg1 = T([0,1])([0.6,0.6])(R([0,1])([3*PI/4])(STRUCT([leg(),hinge()])));
var leg2 = T([0,1])([0.6,13.37])(R([0,1])([PI/4])(STRUCT([leg(),hinge()])));
var leg3 = T([0,1])([13.37,13.37])(R([0,1])([-PI/4])(STRUCT([leg(),hinge()])));
var leg4 = T([0,1])([13.37,0.6])(R([0,1])([-3*PI/4])(STRUCT([leg(),hinge()])));


//complete table
var model = STRUCT([leg1,leg2,leg3,leg4,board]);
DRAW(model);
