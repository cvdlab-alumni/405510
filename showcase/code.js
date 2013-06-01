/**
 * @author goggio
 */

//showcase
//coppa


//domini
var domain = DOMAIN([[0,1],[0,2*PI]])([20,20]);
var domain1 = DOMAIN([[0,1],[0,2*PI]])([40,40]);
var domain2 = DOMAIN([[0,1],[0,PI/6]])([40,40]);

//controlpoints
var c1 = [[2.5,0,0],[3,0,2],[0,0,3],[2,0,4]];
var c2 = [[2,0,0],[0,0,3],[0.8,0,4]];
var c3 = [[0.8,0,0],[1.5,0,0.5],[0.8,0,1]];
var c4 = [[0.8,0,0],[7,0,3],[6,0,6]];
var c5 = [[0.8,-0.5,0],[7,-0.5,3],[6,-0.5,6]];
var c6 = [[0.8,0,0],[0.4,0,0.18],[0,0,0.2]];


var superficie = function (controlpoints, dominio) {
	var curve = BEZIER(S0)(controlpoints);
	var mapping = ROTATIONAL_SURFACE(curve);
	return MAP(mapping)(dominio);
}

//prima parte gambo
var gambo1 = COLOR([1.2,1.01,0])(superficie(c1,domain));

//seconda parte gambo
var gambo2 = COLOR([0,0,1])(superficie(c2,domain1));

//terza parte gambo
var gambo3 = COLOR([1.2,1.01,0])(superficie(c3,domain1));

//coppa
var coppa = COLOR([1.2,1.01,0])(superficie(c4,domain));

//spicchi blu
var spicchioBlu = superficie(c5,domain2);
var spicchiBlu = COLOR([0,0,1])(STRUCT(REPLICA(6)([spicchioBlu,R([0,1])([PI/3])])));

//dischetto
var dischetto = COLOR([1.2,1.01,0])(superficie(c6,domain));

//struttura parte superiore
var coppaSopra = T([2])([3])(STRUCT([gambo1,T([2])([4])(gambo2),T([2])([8])(gambo3),T([2])([9])(coppa),T([2])([9])(spicchiBlu),T([2])([9])(dischetto)]));

//base
var base = COLOR([1,0,0])(T([0,1])([-3,-3])(CUBOID([6, 6, 3])));
var etichetta = T([0,1,2])([3,-2.8,0.2])(CUBOID([0.1,5.6,2.6]));

//struttura finale
var model = R([1,2])([-PI/2])(STRUCT([coppaSopra,base,etichetta]));
