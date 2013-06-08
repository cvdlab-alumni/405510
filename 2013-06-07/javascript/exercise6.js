/**
 * @author goggio
 */
//exercise6
//vertici del modello
//v = [[][][][]]

//matrice compatta delle facce 2d
//fv = [[][][][][][]]


function lar_to_obj(v,fv) {
	
	var p ="# Vertici : ";
	p+="\n";
	
	for(var i=0;i<v.length;i++){
		if(v[i].length===2){
			p+="v : "+ v[i][0] + " "+v[i][1]+" 0 \n"; 
		}
		else{
			 p+= v[i][0] + " " +v[i][1]+ " "+v[i][2]+"\n"; 
		}
	}
	p+="\n";
	p+=" # 2d matrix faces \n";
	
	for(var i=0;i<fv.length;i++){
		var l = fv[i].length;
		p +="f : "; 
		for(j=0;j<l;j++){
			p +=fv[i][j] + " "; }
			p+="\n";
		}

	return p;
}

