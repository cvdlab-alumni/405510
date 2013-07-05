#exercise3
from pyplasm import *

domain1 = INTERVALS ( 1) ( 36 )

def ruota(G, g) :
domain = INSR ( PROD ) ( [ INTERVALS ( 2*PI ) ( 36 ), INTERVALS ( 2*PI ) ( 72 ) ] )
def torus (R, r) :
def torusb (v) :
a = v[0]
b = v[1]
u = (r * COS(a) + R) * COS(b)
v = (r * COS(a) + R) * SIN(b)
w = (r * SIN(a)*2)
return [u,v,w]
return torusb
mapping = torus(G, g)
model = MAP(mapping)(domain)
return model

def cerchione(G, g) :
domainCirc = INSR ( PROD ) ( [ INTERVALS ( 2*PI ) ( 36 ) ,INTERVALS ( 2*PI ) ( 72 ) ] )
def torus (R, r) :
def f (v) :
a=v[0]
b=v[1]
return [(r * COS(a) + R) * COS(b),(r * COS(a) + R) * SIN(b)]
return f
mapping = torus(G, g)
modello = MAP(mapping)(domainCirc)
model = T([3])([-0.75])(PROD([modello,Q(1.5)]))
return model

def raggi (r) :
n = 2*PI/5
raggio = R([1,2])(n)(R([1,3])(PI/2)(CYLINDER([r,2.5])(32)))
return STRUCT(NN(5)([raggio,R([1,2])(n)]))

cilindro = T(3)(-0.75)(CYLINDER([0.7,1.5])(32))


#ruota singola
ruotaSingola = STRUCT([raggi(0.1),cerchione(2.5,0.01),COLOR([0,0,0])(ruota(3,0.5)),cilindro])


#ruote montate
ruotaBackLeftCompl = T([1,2,3])([12.6,1.2,0])(S([1,2,3])([0.33,0.33,0.33])(STRUCT([raggi(0.4),cerchione(2.5,0.01),COLOR([0,0,0])(ruota(3,0.5)),cilindro])))
ruotaBackRightCompl = T([1,2,3])([12.6,1.2,6.8])(S([1,2,3])([0.33,0.33,0.33])(STRUCT([raggi(0.4),cerchione(2.5,0.01),COLOR([0,0,0])(ruota(3,0.5)),cilindro])))
ruotaFrontLeftCompl = T([1,2,3])([3.4,1.2,0])(S([1,2,3])([0.33,0.33,0.33])(STRUCT([raggi(0.4),cerchione(2.5,0.01),COLOR([0,0,0])(ruota(3,0.5)),cilindro])))
ruotaFrontRightCompl = T([1,2,3])([3.4,1.2,6.8])(S([1,2,3])([0.33,0.33,0.33])(STRUCT([raggi(0.4),cerchione(2.5,0.01),COLOR([0,0,0])(ruota(3,0.5)),cilindro])))
ruote = STRUCT([ruotaFrontRightCompl,ruotaFrontLeftCompl,ruotaBackRightCompl,ruotaBackLeftCompl])


#struttura
structure = STRUCT([lato1,lato2,retro,fronte,sopra,ruote])

VIEW(structure)



