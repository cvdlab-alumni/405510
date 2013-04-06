###Exercise4.py

###Windows North vertical enclosures
wN1 = STRUCT([eNtmp,T(2)(2.05)(eNtmp),T(2)(4.1)(eNtmp)])
wN2 = GRID([[1],[-11.2,1],[-7.35,0.2]])
wN1black = COLOR(BLACK)(wN1)
wN2black = COLOR(BLACK)(wN2)
fascia = STRUCT([eBN,eCN,eDN,eEN,eFN,eGN,eHN,wN1black,wN2black])
fascia2 = T([3])([5.1])(fascia)
fascia3 = T([3])([10.2])(fascia)
vertical_enclosure_Northtmp = STRUCT([eAN,fascia,fascia2,fascia3]) 

vertical_enclosure_North = T([1])([21.3])(vertical_enclosure_Northtmp)

###Windows South vertical enclosures

wABCDS = STRUCT([wAS,wBS,wCS,wDS])
wABCDSblack = COLOR(BLACK)(wABCDS)
wABCDStmp1  = STRUCT([wABCDSblack,T(2)(2.4)(wABCDSblack),T(2)(4.8)(wABCDSblack),T(2)(7)(wABCDSblack)])
wABCDStmp2  = STRUCT([wABCDStmp1,T(3)(5.1)(wABCDStmp1)])

vertical_enclosure_South = STRUCT([eAS,eBS,eCS,eDS,wABCDStmp2])


###Windows Est vertical enclosures
wAE = GRID([[-10.9,-2.25,0.2],[1],[-4.5,-2.85,2.25,-2.85,2.25,-2.85,2.25,-2]])
wAEblack = COLOR(BLACK)(wAE)

vertical_enclosure_Est = STRUCT([eAE,eBE,eCE,wAEblack])


###Windows West vertical enclosures
wAW = GRID([[-11.6,-2.25,0.2,-5],[1],[-7.35,2.25]])
wAWblack = COLOR(BLACK)(wAW)

vertical_enclosure_West = T(2)(11.7)(STRUCT([eAW,eBW,eCW,eDW,eEW,eFW,wAWblack]))


###building
building = STRUCT([pillars0,pillars1,pillars2,pillars3,floor0,floor1,floor2,floor3,floor4,vertical_enclosure_West,vertical_enclosure_Est,vertical_enclosure_South,vertical_enclosure_North])
