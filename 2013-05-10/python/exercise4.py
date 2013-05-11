#exercise4
from pyplasm import *

domain1 = INTERVALS ( 1) ( 36 )

#volante
def razze (r) :
n = PI/2
raggio = R([1,2])(n)(R([1,3])(PI/2)(CYLINDER([r,2.8])(32)))
return STRUCT(NN(3)([raggio,R([1,2])(-n)]))

def volante(G, g) :
domain = INSR ( PROD ) ( [ INTERVALS ( 2*PI ) ( 36 ), INTERVALS ( 2*PI ) ( 72 ) ] )
def torus (R, r) :
def torusb (v) :
a = v[0]
b = v[1]
u = (r * COS(a) + R) * COS(b)
v = (r * COS(a) + R) * SIN(b)
w = (r * SIN(a))
return [u,v,w]
return torusb
mapping = torus(G, g)
model = MAP(mapping)(domain)
return model

center = COLOR([1,0,0])(T(3)(-0.25)(CYLINDER([0.7,0.5])(32)))

#volante singolo
vol = R([1,2])(PI/7)(R([2,3])(-PI/2)(R([1,3])(PI/2)(STRUCT([center,razze(0.25),COLOR([0,0,0])(volante(3,0.3))]))))

#volante posizionato
volCompleto =T([1,2,3])([5.5,3.2,5.1])(S([1,2,3])([0.25,0.25,0.25])(vol)) 

#struttura
structure = STRUCT([lato1,lato2,retro,fronte,sopra,ruote,volCompleto])

VIEW(structure)