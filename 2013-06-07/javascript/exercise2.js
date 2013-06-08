/**
 * @author goggio
 */
//exercise2
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
    
//lago
var normalize = function(rgb){
    return [rgb[0]/255,rgb[1]/255,rgb[2]/255];
    }  
var verdeacqua = normalize([127,255,212]).concat(0.5); 

var lagoNT = T([0,1])([-0.8,-0.8])(COLOR(verdeacqua)(CUBOID([10,10,5]))) 

//traslato
var lago = T([0,1])([10,10])(lagoNT);

//struttura
var model = STRUCT([terreno,lago]);





