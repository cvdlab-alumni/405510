###exercise5.py

step2D = MKPOL([[[0,0],[0,1.1],[0.6,0.5],[0.6,1.1]],
[[1,2,3,4]],None])
step3D = MAP([S1,S3,S2])(PROD([step2D,Q(2)]))
ramp = STRUCT(NN(9)([step3D,T([1,3])([0.6,0.5])]))
ramp1floor = T([1,2])([5.9,10.7])(ramp)
ramp2floor = T([1,2,3])([8,10.3,4.5])(ramp)
ramp3floor = T([1,2,3])([9.7,10.5,9.6])(ramp)


###building
building = STRUCT([pillars0,pillars1,pillars2,pillars3,floor0,floor1,floor2,floor3,floor4,vertical_enclosure_West,vertical_enclosure_Est,vertical_enclosure_South,vertical_enclosure_North,ramp1floor,ramp2floor,ramp3floor])
