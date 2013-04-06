//exercise1.js


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






//###pillars0
//###cylinder model
var cylinder = CYL_SURFACE([0.25,4.5])(32);

var pillarsA0 = T([1,2])([0.25,0.25])(STRUCT(NN(5)([cylinder,T([1])([5.2])])))
var pillarsB0 = GRID([[0.5,-4.7,0.5,-4.7,0.5,-4.7,0.5],[-10,0.5],[4.5]])

var pillars0 = STRUCT([pillarsA0,pillarsB0])


//###pillars1
var pillars1 = GRID([[0.5,-4.7,0.5,-4.7,0.5,-4.7,0.5,-4.7,0.5],[0.5,-9.5,0.5],[-5.1,4.5]])


//###pillars2
var pillarsA2 = GRID([[0.5,-4.7,0.5,-15.1,0.5],[0.5],[-10.2,4.5]])
var pillarsB2 = GRID([[0.5,-4.7,0.5,-4.7,0.5,-4.7,0.5,-4.7,0.5],[-10,0.5],[-10.2,4.5]])
var pillars2 = STRUCT([pillarsA2,pillarsB2])


//###pillars3
var pillarsA3 = GRID([[-10.4,0.5,-9.9,0.5],[0.5],[-15.3,4.5]])
var pillarsB3 = GRID([[0.25,-4.95,0.25],[-10,0.25],[-15.3,4.5]])
var pillarsC3 = GRID([[-10.4,0.5,-4.7,0.5,-4.7,0.5],[-10,0.5],[-15.3,4.5]])
var pillars3 = STRUCT([pillarsA3,pillarsB3,pillarsC3])


//### building
var building = STRUCT([pillars0,pillars1,pillars2,pillars3])