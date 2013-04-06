//exercise5.js

//adaptive
T = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });

  return function (values) {
    return function (object) {
     return object.clone().translate(dims, values);
    };
  };
};
  
R = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });
   
  return function (angle) {
    return function (object) {
      return object.clone().rotate(dims, angle);
    };
  };
};
  
S = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });

  return function (values) {
    return function (object) {
      return object.clone().scale(dims, values);
    };
  };
};

S3 = S2;
S2 = S1;
S1 = S0;

GRID = SIMPLEX_GRID;

NN = REPLICA;

VIEW = DRAW;


//###exercise5.py



// stairs ramp 

var depth = 0.6;
var raiser = 0.5;
var step2D = SIMPLICIAL_COMPLEX([[0,0],[0,1.1],[depth,raiser],[depth,1.1]])([[0,2,1],[1,2,3]]);
var step3D = MAP([S0,S2,S1])(EXTRUDE([2])(step2D));
var ramp = STRUCT(REPLICA(9)([step3D,T([1,3])([depth,raiser])]));


//stair1 floor1
var ramp1floor = T([1,2])([5.9,10.7])(ramp);

//stair2 floor2
var ramp2floor = T([1,2,3])([8,10.3,4.5])(ramp);

//stair3 floor3
var ramp3floor = T([1,2,3])([9.7,10.5,9.6])(ramp);


//###building
var building = STRUCT([pillars0,pillars1,pillars2,pillars3,floor0,floor1,floor2,floor3,floor4,vertical_enclosure_West,vertical_enclosure_Est,vertical_enclosure_South,vertical_enclosure_North,ramp1floor,ramp2floor,ramp3floor]);
