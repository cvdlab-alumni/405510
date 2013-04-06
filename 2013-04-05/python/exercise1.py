###Exercise1.py
from pyplasm import *


GRID = COMP([INSR(PROD),AA(QUOTE)])

###pillars0
###cylinder model
cylinder = CYLINDER([0.25,4.5])(32)

pillarsA0 = T([1,2])([0.25,0.25])(STRUCT(NN(5)([cylinder,T([1])([5.2])])))
pillarsB0 = GRID([[0.5,-4.7,0.5,-4.7,0.5,-4.7,0.5],[-10,0.5],[4.5]])

pillars0 = STRUCT([pillarsA0,pillarsB0])


###pillars1
pillars1 = GRID([[0.5,-4.7,0.5,-4.7,0.5,-4.7,0.5,-4.7,0.5],[0.5,-9.5,0.5],[-5.1,4.5]])


###pillars2
pillarsA2 = GRID([[0.5,-4.7,0.5,-15.1,0.5],[0.5],[-10.2,4.5]])
pillarsB2 = GRID([[0.5,-4.7,0.5,-4.7,0.5,-4.7,0.5,-4.7,0.5],[-10,0.5],[-10.2,4.5]])
pillars2 = STRUCT([pillarsA2,pillarsB2])


###pillars3
pillarsA3 = GRID([[-10.4,0.5,-9.9,0.5],[0.5],[-15.3,4.5]])
pillarsB3 = GRID([[0.25,-4.95,0.25],[-10,0.25],[-15.3,4.5]])
pillarsC3 = GRID([[-10.4,0.5,-4.7,0.5,-4.7,0.5],[-10,0.5],[-15.3,4.5]])
pillars3 = STRUCT([pillarsA3,pillarsB3,pillarsC3])


### building
building = STRUCT([pillars0,pillars1,pillars2,pillars3])





