from pyplasm import *

#exercise2

domain1 = INTERVALS ( 1) ( 36 )

#lato xy sinistro
slato1 = BEZIER(S1)([[0,0.8,0],[0,2.8,0]])
curve1 = MAP(slato1)(domain1)
slato2 = BEZIER(S1)([[0,2.8,0],[0.3,3.5,0],[1,3,0],[4.3,3.6,0]])
curve2 = MAP(slato2)(domain1)
slato3 = BEZIER(S1)([[4.3,3.6,0],[5.5,4.8,0],[8.3,5.3,0],[10.7,4.7,0],[15.2,2.8,0]])
curve3 = MAP(slato3)(domain1)
slato4 = BEZIER(S1)([[15.2,2.8,0],[15.5,1.5,0],[15.5,0.8,0.5]])
curve4 = MAP(slato4)(domain1)
win1lat1 = BEZIER(S1)([[4.7,3.5,0],[7.9,5.5,0],[11.6,3.5,0]])
curve5 = MAP(win1lat1)(domain1)
win2lat1 = BEZIER(S1)([[11.6,3.5,0],[4.7,3.5,0]])
curve6 = MAP(win2lat1)(domain1)
slato5 = BEZIER(S1)([[0,0.8,0],[2,0.8,0]])
curve7 = MAP(slato5)(domain1)
slato6 = BEZIER(S1)([[2,0.8,0],[2,2,0],[3.4,3.6,0],[4.8,2,0],[4.8,0.8,0]])
curve8 = MAP(slato6)(domain1)
slato7 = BEZIER(S1)([[4.8,0.8,0],[11.2,0.8,0]])
curve9 = MAP(slato7)(domain1)
slato8 = BEZIER(S1)([[11.2,0.8,0],[11.2,2,0],[12.6,3.6,0],[14,2,0],[14,0.8,0]])
curve10 = MAP(slato8)(domain1)
slato9 = BEZIER(S1)([[14,0.8,0],[15.5,0.8,0.5]])
curve11 = MAP(slato9)(domain1)

lato1 = STRUCT([curve1,curve2,curve3,curve4,curve5,curve6,curve7,curve8,curve9,curve10,curve11])


#lato xy destro
s1lato2 = BEZIER(S1)([[0,0.8,6.8],[0,2.8,6.8]])
curve12 = MAP(s1lato2)(domain1)
s2lato2 = BEZIER(S1)([[0,2.8,6.8],[0.3,3.5,6.8],[1,3,6.8],[4.3,3.6,6.8]])
curve22 = MAP(s2lato2)(domain1)
s3lato2 = BEZIER(S1)([[4.3,3.6,6.8],[5.5,4.8,6.8],[8.3,5.3,6.8],[10.7,4.7,6.8],[15.2,2.8,6.8]])
curve32 = MAP(s3lato2)(domain1)
s4lato2 = BEZIER(S1)([[15.2,2.8,6.8],[15.5,1.5,6.8],[15.5,0.8,6.3]])
curve42 = MAP(s4lato2)(domain1)
win1lat2 = BEZIER(S1)([[4.7,3.5,6.8],[7.9,5.5,6.8],[11.6,3.5,6.8]])
curve52 = MAP(win1lat2)(domain1)
win2lat2 = BEZIER(S1)([[11.6,3.5,6.8],[4.7,3.5,6.8]])
curve62 = MAP(win2lat2)(domain1)
s5lato2 = BEZIER(S1)([[0,0.8,6.8],[2,0.8,6.8]])
curve72 = MAP(s5lato2)(domain1)
s6lato2 = BEZIER(S1)([[2,0.8,6.8],[2,2,6.8],[3.4,3.6,6.8],[4.8,2,6.8],[4.8,0.8,6.8]])
curve82 = MAP(s6lato2)(domain1)
s7lato2 = BEZIER(S1)([[4.8,0.8,6.8],[11.2,0.8,6.8]])
curve92 = MAP(s7lato2)(domain1)
s8lato2 = BEZIER(S1)([[11.2,0.8,6.8],[11.2,2,6.8],[12.6,3.6,6.8],[14,2,6.8],[14,0.8,6.8]])
curve102 = MAP(s8lato2)(domain1)
s9lato2 = BEZIER(S1)([[14,0.8,6.8],[15.5,0.8,6.3]])
curve112 = MAP(s9lato2)(domain1)

lato2 = STRUCT([curve12,curve22,curve32,curve42,curve52,curve62,curve72,curve82,curve92,curve102,curve112])



#lato yz retro
sretro1 = BEZIER(S1)([[15.2,2.8,0],[15.2,3.2,3.4],[15.2,2.8,6.8]])
cretro1 = MAP(sretro1)(domain1)
sretro2 = BEZIER(S1)([[15.2,2.8,6.8],[15.5,1.5,6.8],[15.5,0.8,6.3]])
cretro2 = MAP(sretro2)(domain1)
sretro3 = BEZIER(S1)([[15.5,0.8,6.3],[15.5,0.8,0.5]])
cretro3 = MAP(sretro3)(domain1)
sretro4 = BEZIER(S1)([[15.2,2.8,0],[15.5,1.5,0],[15.5,0.8,0.5]])
cretro4 = MAP(sretro4)(domain1)
fandestro1 = BEZIER(S1)([[15.2,2.9,1.4],[15.2,2.3,1.6]])
cfandestro1 = MAP(fandestro1)(domain1)
fandestro2 = BEZIER(S1)([[15.2,2.3,1.6],[15.2,2.3,0]])
cfandestro2 = MAP(fandestro2)(domain1)
fandestro = STRUCT([cfandestro1,cfandestro2])
fadestroruotato = R([1,3])(PI)(fandestro)
fansinistro = T([3,1])([6.8,30.4])(fadestroruotato)
ellissi = ELLIPSE([0.4,0.2])(8)
rellissi = R([1,3])(PI/2)(ellissi)
tdellissi = T([2,3])([1.2,1.3])(rellissi)
tsellissi = T([2,3])([1.2,5.6])(rellissi)
ellissi2 = STRUCT([tdellissi,tsellissi])
tellissi2 = T(1)(15.4)(ellissi2)

retro = STRUCT([cretro1,cretro2,cretro3,cretro4,fandestro,fansinistro,tellissi2])


#lato yz fronte
sfronte1 = BEZIER(S1)([[0,0.8,0],[0,2.8,0]])
cfronte1 = MAP(sfronte1)(domain1)
sfronte2 = BEZIER(S1)([[0,2.8,0],[0,2.8,2],[0,0.8,2.4]])
cfronte2 = MAP(sfronte2)(domain1)
sfronte3 = BEZIER(S1)([[0,0.8,0],[0,0.8,6.8]])
cfronte3 = MAP(sfronte3)(domain1)
sfronte4 = BEZIER(S1)([[0,0.8,4.4],[0,2.8,4.8],[0,2.8,6.8]])
cfronte4 = MAP(sfronte4)(domain1)
faros = BEZIER(S1)([[0,2,0],[0,2,1.9]])
cfaros = MAP(faros)(domain1)
farod = BEZIER(S1)([[0,2,6.8],[0,2,4.9]])
cfarod = MAP(farod)(domain1)
sfronte5 = BEZIER(S1)([[0,2,2.4],[0,2.2,2.3],[0,2.2,2.5]])
cfronte5 = MAP(sfronte5)(domain1)
sfronte6 = BEZIER(S1)([[0,2,4.4],[0,2.2,4.5],[0,2.2,4.3]])
cfronte6 = MAP(sfronte6)(domain1)
sfronte7 = BEZIER(S1)([[0,2,2.4],[0,1,2.8]])
cfronte7 = MAP(sfronte7)(domain1)
sfronte8 = BEZIER(S1)([[0,1,2.8],[0,1,4]])
cfronte8 = MAP(sfronte8)(domain1)
sfronte9 = BEZIER(S1)([[0,1,4],[0,2,4.4]])
cfronte9 = MAP(sfronte9)(domain1)
sfronte10 = BEZIER(S1)([[0,2.2,2.5],[0,2.2,4.3]])
cfronte10 = MAP(sfronte10)(domain1)

fronte = STRUCT([cfronte1,cfronte2,cfronte3,cfronte4,cfaros,cfarod,cfronte5,cfronte6,cfronte7,cfronte8,cfronte9,cfronte10])


#lato xz sopra
ssopra1 = BEZIER(S1)([[4.3,3.6,0],[3.8,3.6,3.4],[4.3,3.6,6.8]])
csopra1 = MAP(ssopra1)(domain1)
ssopra2 = BEZIER(S1)([[6.8,4.7,0],[6.3,4.7,3.4],[6.8,4.7,6.8]])
csopra2 = MAP(ssopra2)(domain1)
ssopra3 = BEZIER(S1)([[10.3,4.5,0],[10.8,4.4,3.4],[10.3,4.5,6.8]])
csopra3 = MAP(ssopra3)(domain1)
ssopra4 = BEZIER(S1)([[11,4.3,0.3],[11.3,4.3,3.4],[11,4.3,6.5]])
csopra4 = MAP(ssopra4)(domain1)
ssopra5 = BEZIER(S1)([[11,4.3,0.3],[13.5,3.5,0.3]])
csopra5 = MAP(ssopra5)(domain1)
ssopra6 = BEZIER(S1)([[11,4.3,6.5],[13.5,3.5,6.5]])
csopra6 = MAP(ssopra6)(domain1)
ssopra7 = BEZIER(S1)([[13.5,3.5,0.3],[14.4,3.2,2.3],[14.4,3.2,4.3],[13.5,3.5,6.5]])
csopra7 = MAP(ssopra7)(domain1)

sopra = STRUCT([csopra1,csopra2,csopra3,csopra4,csopra5,csopra6,csopra7])


#struttura
structure = STRUCT([lato1,lato2,retro,fronte,sopra])

VIEW(structure)

