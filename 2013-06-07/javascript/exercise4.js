/**
 * @author goggio
 */
//exercise4
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

//casa
function casa(){
	var dx = 0.3*Math.random();
	var dy = 0.3*Math.random();
	var dz = 0.3*Math.random();
	var marrone = normalize([150,75,0]);
	var cubo = COLOR(marrone)(CUBOID([dx,dy,dz]));
	var win = T([1])([-dy/100])(COLOR([1,0,0])(SIMPLEX_GRID([[-dx/9,3*dx/9,-dx/9,3*dx/9,-dx/9],[dy/100],[-4*dz/7,2*dz/7,-dz/7]])));
	var door = T([1])([-dy/100])(COLOR([0,0,0])(SIMPLEX_GRID([[-2*dx/5,dx/5,-2*dx/5],[dy/100],[3*dz/7]])))
	var casaf = STRUCT([cubo,win,door]);
	return casaf;
	}

//villaggio	
function villaggio(){	
	var villaggio02 = T([1])([0.2])(STRUCT([casa(),T([0])([0.5])(casa()),T([0])([1])(casa())]));
	var villaggio12 = T([0,1])([1.3,-0.2])(STRUCT([R([0,1])([PI])(casa()),R([0,1])([PI])(T([0])([0.5])(casa())),R([0,1])([PI])(T([0])([1])(casa()))]));
	var villaggio22 = STRUCT([villaggio02,villaggio12]);
	return villaggio22;
	}

//villaggi	
var villaggio1NT = villaggio();
var villaggio2NT = villaggio();

var villaggio1 = T([0,1,2])([5,5,mediaz(5,5)])(villaggio1NT);
var villaggio2 = T([0,1,2])([5,17,mediaz(5,17)])(villaggio2NT);

var villaggi = STRUCT([villaggio1,villaggio2]);

//struttura
var model = STRUCT([terreno,lago,foresta,villaggi]);




