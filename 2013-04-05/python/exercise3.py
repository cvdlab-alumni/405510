###Exercise3.py
from pyplasm import *
GRID = COMP([INSR(PROD),AA(QUOTE)])

###north
eAN = GRID([[1],[12.7],[-4.5,0.6,-4.5,0.6,-4.5,0.6,-4.5,2]])
eBN = GRID([[1],[0.5],[-5.1,4.5]])
eCN = GRID([[1],[-0.5,8],[-5.1,2]])
eDN = GRID([[1],[-0.5,8],[-9.1,0.5]])
eEN = GRID([[1],[-8.5,2.7],[-5.1,4.5]])
eFN = GRID([[1],[-11.2,1],[-5.1,0.3]])
eGN = GRID([[1],[-11.2,1],[-9.3,0.3]])
eHN = GRID([[1],[-12.2,0.5],[-5.1,4.5]])
eNtmp = GRID([[1],[-2.35,0.2],[-7.1,2]])
wN1 = STRUCT([eNtmp,T(2)(2.05)(eNtmp),T(2)(4.1)(eNtmp)])
wN2 = GRID([[1],[-11.2,1],[-7.35,0.2]])
fascia = STRUCT([eBN,eCN,eDN,eEN,eFN,eGN,eHN,wN1,wN2])
fascia2 = T([3])([5.1])(fascia)
fascia3 = T([3])([10.2])(fascia)
vertical_enclosure_Northtmp = STRUCT([eAN,fascia,fascia2,fascia3]) 


vertical_enclosure_North = T([1])([21.3])(vertical_enclosure_Northtmp)


###south
eAS = GRID([[1],[12.7],[-4.5,0.6,-4.5,0.6,-4.5,2.1,-3,2]])
eBS = GRID([[1],[0.5,-9.4,0.5,-1.6,0.7],[-5.1,4.5]])
wAS = GRID([[0.2],[-0.5,2.2],[-5.1,0.2]])
wBS = GRID([[0.2],[-0.5,2.2],[-7.25,0.2]])
wCS = GRID([[0.2],[-0.5,2.2],[-9.4,0.2]])
wDS = GRID([[0.2],[-2.7,0.2],[-5.1,4.5]])
wABCDS = STRUCT([wAS,wBS,wCS,wDS])
wABCDStmp1  = STRUCT([wABCDS,T(2)(2.4)(wABCDS),T(2)(4.8)(wABCDS),T(2)(7)(wABCDS)])
wABCDStmp2  = STRUCT([wABCDStmp1,T(3)(5.1)(wABCDStmp1)])
eCS = GRID([[1],[0.5,-9.4,2.8],[-10.2,4.5]])
eDS = GRID([[1],[0.5,-9.4,0.25,-2.3,0.25],[-15.3,4.5]])


vertical_enclosure_South = STRUCT([eAS,eBS,eCS,eDS,wABCDStmp2])


###est
eAE = GRID([[10.4],[1],[-4.5,12.3,-3,2]])
eBE = GRID([[-10.4,0.5,-4.7,5.7],[1],[-4.5,17.3]])
eCE = GRID([[-10.9,4.7],[1],[-4.5,2.85,-2.25,2.85,-2.25,2.85,-2.25,2]])
wAE = GRID([[-10.9,-2.25,0.2],[1],[-4.5,-2.85,2.25,-2.85,2.25,-2.85,2.25,-2]])


vertical_enclosure_Est = STRUCT([eAE,eBE,eCE,wAE])


###west
eAW = GRID([[21.3],[1],[-4.5,2.85,-2.25,2.85,-2.25,7.1]])
eBW = GRID([[14.3,-1,3,-3],[1],[4.5]])
eCW = GRID([[-14.3,1,-6],[1],[3]])
eDW = GRID([[-14.3,1,-6],[1],[-4,0.5]])
eEW = GRID([[11.6,-4.7,5],[1],[-7.35,2.25]])
eFW = GRID([[17.3,-0.25,1,-0.25,2.5],[1],[-12.45,2.25]])
wAW = GRID([[-11.6,-2.25,0.2,-5],[1],[-7.35,2.25]])


vertical_enclosure_West = T(2)(11.7)(STRUCT([eAW,eBW,eCW,eDW,eEW,eFW,wAW]))

###building
building = STRUCT([pillars0,pillars1,pillars2,pillars3,floor0,floor1,floor2,floor3,floor4,vertical_enclosure_West,vertical_enclosure_Est,vertical_enclosure_South,vertical_enclosure_North])

