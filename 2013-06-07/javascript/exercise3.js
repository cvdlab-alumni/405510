/**
 * @author goggio
 */
//exercise3
//******DA ESEGUIRE DOPO AVER ESEGUITO I PRECEDENTI********

//funzioni ausiliarie
var domain = PROD1x1([INTERVALS(1)(25),INTERVALS(1)(25)]);
var normalize = function(rgb){
    return [rgb[0]/255,rgb[1]/255,rgb[2]/255];
    }
    
function zeta(x,y){
	var filterResult = punti.filter(function(item, index, array){

 		return ((item[0]===x)&&(item[1]===y));
		});
	return filterResult[0][2];
	};   

function mediaz(x,y){
	var z1 = zeta(x,y);
	var z2 = zeta(x-1,y-1);
	var z3 = zeta(x+1,y+1);
	var z4 = zeta(x+1,y-1);
	var z5 = zeta(x-1,y+1);
	var z6 = zeta(x,y+1);
	var z7 = zeta(x,y-1);
	var z8 = zeta(x-1,y);
	var z9 = zeta(x+1,y);
	var z10 = zeta(x+2,y);
	var z11 = zeta(x-2,y);
	var z12 = zeta(x,y+2);
	var z13 = zeta(x,y-2);
	var media = (z1+z2+z3+z4+z5+z6+z7+z8+z9+z10+z11+z12+z13)/13;
	return media+0.5;
	
}	 	
	
//albero 
function alb(altezza,raggio){
	var domain1 = DOMAIN([[0,1],[0,2*PI]])([20,20]);
	var c1 = [[raggio,0,0],[raggio/2,0,altezza/9],[0,0,2*altezza/9]];
	var c2 = [[raggio,0,0],[raggio/2,0,0],[0,0,0]];
	var superficie = function (controlpoints, dominio) {
		var curve = BEZIER(S0)(controlpoints);
		var mapping = ROTATIONAL_SURFACE(curve);
		return MAP(mapping)(dominio);
		}
	var cono = superficie(c1,domain1);
	var disco = superficie(c2,domain1);
	var chioma = COLOR([0,1,0])(T([2])([7*altezza/9])(STRUCT([cono,disco])))
	var tronco = CYL_SURFACE([raggio/5,7*altezza/9])([20]);
	var albero = STRUCT([chioma,tronco]);
	return albero;
	}

//foresta
var primaFila = STRUCT([T([0])([-0.3])(alb(Math.random(),0.2*Math.random())),alb(Math.random(),0.2*Math.random()),T([0])([0.3])(alb(Math.random(),0.2*Math.random()))]);
var secondaFila = STRUCT([T([0,1])([-0.3,-0.3])(alb(Math.random(),0.2*Math.random())),T([1])([-0.3])(alb(Math.random(),0.2*Math.random())),T([0,1])([0.3,-0.3])(alb(Math.random(),0.2*Math.random()))]);
var terzaFila = STRUCT([T([0,1])([-0.3,0.3])(alb(Math.random(),0.2*Math.random())),T([1])([0.3])(alb(Math.random(),0.2*Math.random())),T([0,1])([0.3,0.3])(alb(Math.random(),0.2*Math.random()))]);
var forestaNT = STRUCT([primaFila,secondaFila,terzaFila]);

//traslata
var foresta = T([0,1,2])([17,5,mediaz(17,5)])(forestaNT);

//struttura
var model = STRUCT([terreno,lago,foresta]);