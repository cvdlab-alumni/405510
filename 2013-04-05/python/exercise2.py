###Exercise2.py
from pyplasm import *
GRID = COMP([INSR(PROD),AA(QUOTE)])


###floor0
floorA0 = GRID([[21.3],[12.7]])
floorB0 = T([1,2])([2.9,4.5])(GRID([[13.2],[8.2],[0.6]]))

floorC0 = T([1,2])([4,3.7])(CYLINDER([1.1,0.6])(32))
floorD0 = T([1,2])([2.9,3.7])(CUBOID([2.2,0.8,0.6]))
floorCD0 = STRUCT([floorC0,floorD0])

floorE0 = T([1,2])([17.8,10.25])(CYLINDER([2.46,0.6])(32))
floorF0 = T([1,2])([18,7.8])(R([1,2])(PI/2)(CUBOID([4.9,2.1,0.6])))
floorEF0 = STRUCT([floorE0,floorF0])

floorG0 = T([2])([10])(CUBOID([2.9,2.7,0.6]))
floorH0 = T([1,2])([16,6.3])(CUBOID([0.6,1.5,0.6]))

floor0=STRUCT([floorA0,floorB0,floorCD0,floorEF0,floorG0,floorH0])


###floor1
floorA1 = CUBOID([21.3,0.5,0.6])
floorB1 = CUBOID([9,12.2,0.6])
floorC1 = CUBOID([2.5,10.5,0.6])
floorD1 = CUBOID([9.8,12.2,0.6])
floorABCD1 = STRUCT([floorB1,T(2)(12.2)(floorA1),T(1)(9)(floorC1),T(1)(11.5)(floorD1)])

balconyA = CUBOID([2,2,0.6])
balconyB = CUBOID([2,0.2,2])
balconyC = CUBOID([0.2,2,2])
balconyD = T(2)(1.8)(balconyB)
balconyABCD = STRUCT([balconyA,balconyB,balconyC,balconyD])
floor1t = STRUCT([floorABCD1,T([1,2])([-2,10.3])(balconyABCD)])

floor1 = T(3)(4.5)(floor1t)


###floor2
floorA2 = CUBOID([21.3,0.5,0.6])
floorB2 = CUBOID([10.3,12.2,0.6])
floorC2 = CUBOID([3.5,10.5,0.6])
floorD2 = CUBOID([7.5,12.2,0.6])
floorABCD2 = STRUCT([floorB2,T(2)(12.2)(floorA2),T(1)(10.3)(floorC2),T(1)(13.8)(floorD2)])

floor2 = T(3)(9.6)(floorABCD2)


###floor3
floorA3 = CUBOID([21.3,0.5,0.6])
floorB3 = CUBOID([11.3,12.2,0.6])
floorC3 = CUBOID([3.5,10.5,0.6])
floorD3 = CUBOID([6.5,12.2,0.6])
floorABCD3 = STRUCT([floorB3,T(2)(12.2)(floorA3),T(1)(11.3)(floorC3),T(1)(14.8)(floorD3)])

floor3 = T(3)(14.7)(floorABCD3)


###floor4
floorA4 = T(2)(9.7)(CUBOID([21.3,3,0.6]))
floorB4 = T(1)(10.4)(CUBOID([10.9,12.7,0.6]))
floorAB4 = STRUCT([floorA4,floorB4])

floor4 = T(3)(19.8)(floorAB4)


###building
building = STRUCT([pillars0,pillars1,pillars2,pillars3,floor0,floor1,floor2,floor3,floor4])






