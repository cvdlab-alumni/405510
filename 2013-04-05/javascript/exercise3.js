//exercise3.js

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


//###Exercise3.py


//###north
var eAN = GRID([[1],[12.7],[-4.5,0.6,-4.5,0.6,-4.5,0.6,-4.5,2]])
var eBN = GRID([[1],[0.5],[-5.1,4.5]])
var eCN = GRID([[1],[-0.5,8],[-5.1,2]])
var eDN = GRID([[1],[-0.5,8],[-9.1,0.5]])
var eEN = GRID([[1],[-8.5,2.7],[-5.1,4.5]])
var eFN = GRID([[1],[-11.2,1],[-5.1,0.3]])
var eGN = GRID([[1],[-11.2,1],[-9.3,0.3]])
var eHN = GRID([[1],[-12.2,0.5],[-5.1,4.5]])
var eNtmp = GRID([[1],[-2.35,0.2],[-7.1,2]])
var wN1 = STRUCT([eNtmp,T([2])([2.05])(eNtmp),T([2])([4.1])(eNtmp)])
var wN2 = GRID([[1],[-11.2,1],[-7.35,0.2]])
var fascia = STRUCT([eBN,eCN,eDN,eEN,eFN,eGN,eHN,wN1,wN2])
var fascia2 = T([3])([5.1])(fascia)
var fascia3 = T([3])([10.2])(fascia)
var vertical_enclosure_Northtmp = STRUCT([eAN,fascia,fascia2,fascia3]) 


var vertical_enclosure_North = T([1])([21.3])(vertical_enclosure_Northtmp)


//###south
var eAS = GRID([[1],[12.7],[-4.5,0.6,-4.5,0.6,-4.5,2.1,-3,2]])
var eBS = GRID([[1],[0.5,-9.4,0.5,-1.6,0.7],[-5.1,4.5]])
var wAS = GRID([[0.2],[-0.5,2.2],[-5.1,0.2]])
var wBS = GRID([[0.2],[-0.5,2.2],[-7.25,0.2]])
var wCS = GRID([[0.2],[-0.5,2.2],[-9.4,0.2]])
var wDS = GRID([[0.2],[-2.7,0.2],[-5.1,4.5]])
var wABCDS = STRUCT([wAS,wBS,wCS,wDS])
var wABCDStmp1  = STRUCT([wABCDS,T([2])([2.4])(wABCDS),T([2])([4.8])(wABCDS),T([2])([7])(wABCDS)])
var wABCDStmp2  = STRUCT([wABCDStmp1,T([3])([5.1])(wABCDStmp1)])
var eCS = GRID([[1],[0.5,-9.4,2.8],[-10.2,4.5]])
var eDS = GRID([[1],[0.5,-9.4,0.25,-2.3,0.25],[-15.3,4.5]])


var vertical_enclosure_South = STRUCT([eAS,eBS,eCS,eDS,wABCDStmp2])


//###est
var eAE = GRID([[10.4],[1],[-4.5,12.3,-3,2]])
var eBE = GRID([[-10.4,0.5,-4.7,5.7],[1],[-4.5,17.3]])
var eCE = GRID([[-10.9,4.7],[1],[-4.5,2.85,-2.25,2.85,-2.25,2.85,-2.25,2]])
var wAE = GRID([[-10.9,-2.25,0.2],[1],[-4.5,-2.85,2.25,-2.85,2.25,-2.85,2.25,-2]])


var vertical_enclosure_Est = STRUCT([eAE,eBE,eCE,wAE])


//###west
var eAW = GRID([[21.3],[1],[-4.5,2.85,-2.25,2.85,-2.25,7.1]])
var eBW = GRID([[14.3,-1,3,-3],[1],[4.5]])
var eCW = GRID([[-14.3,1,-6],[1],[3]])
var eDW = GRID([[-14.3,1,-6],[1],[-4,0.5]])
var eEW = GRID([[11.6,-4.7,5],[1],[-7.35,2.25]])
var eFW = GRID([[17.3,-0.25,1,-0.25,2.5],[1],[-12.45,2.25]])
var wAW = GRID([[-11.6,-2.25,0.2,-5],[1],[-7.35,2.25]])


var vertical_enclosure_West = T([2])([11.7])(STRUCT([eAW,eBW,eCW,eDW,eEW,eFW,wAW]))

//###building
var building = STRUCT([pillars0,pillars1,pillars2,pillars3,floor0,floor1,floor2,floor3,floor4,vertical_enclosure_West,vertical_enclosure_Est,vertical_enclosure_South,vertical_enclosure_North])

