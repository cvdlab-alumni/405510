//exercise4.js

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



//###Exercise4.py

//###Windows North vertical enclosures
var wN1 = STRUCT([eNtmp,T([2])([2.05])(eNtmp),T([2])([4.1])(eNtmp)])
var wN2 = GRID([[1],[-11.2,1],[-7.35,0.2]])
var wN1black = COLOR(0,0,0)(wN1)
var wN2black = COLOR(0,0,0)(wN2)
var fascia = STRUCT([eBN,eCN,eDN,eEN,eFN,eGN,eHN,wN1black,wN2black])
var fascia2 = T([3])([5.1])(fascia)
var fascia3 = T([3])([10.2])(fascia)
var vertical_enclosure_Northtmp = STRUCT([eAN,fascia,fascia2,fascia3]) 

var vertical_enclosure_North = T([1])([21.3])(vertical_enclosure_Northtmp)

//###Windows South vertical enclosures

var wABCDS = STRUCT([wAS,wBS,wCS,wDS])
var wABCDSblack = COLOR(0,0,0)(wABCDS)
var wABCDStmp1  = STRUCT([wABCDSblack,T([2])([2.4])(wABCDSblack),T([2])([4.8])(wABCDSblack),T([2])([7])(wABCDSblack)])
var wABCDStmp2  = STRUCT([wABCDStmp1,T([3])([5.1])(wABCDStmp1)])

var vertical_enclosure_South = STRUCT([eAS,eBS,eCS,eDS,wABCDStmp2])


//###Windows Est vertical enclosures
var wAE = GRID([[-10.9,-2.25,0.2],[1],[-4.5,-2.85,2.25,-2.85,2.25,-2.85,2.25,-2]])
var wAEblack = COLOR(0,0,0)(wAE)

var vertical_enclosure_Est = STRUCT([eAE,eBE,eCE,wAEblack])


//###Windows West vertical enclosures
var wAW = GRID([[-11.6,-2.25,0.2,-5],[1],[-7.35,2.25]])
var wAWblack = COLOR(0,0,0)(wAW)

var vertical_enclosure_West = T([2])([11.7])(STRUCT([eAW,eBW,eCW,eDW,eEW,eFW,wAWblack]))


//###building
var building = STRUCT([pillars0,pillars1,pillars2,pillars3,floor0,floor1,floor2,floor3,floor4,vertical_enclosure_West,vertical_enclosure_Est,vertical_enclosure_South,vertical_enclosure_North])
