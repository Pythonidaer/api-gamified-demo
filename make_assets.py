from PIL import Image, ImageDraw
import json, math, zipfile, os
from pathlib import Path
out=Path(__file__).resolve().parent/'dist'/'assets'; out.mkdir(exist_ok=True)
ink='#203b3b'; orange='#ed773d'; cream='#f6edd6'; teal='#7fb9aa'
def make(name,w,h,draw):
 im=Image.new('RGBA',(w*3,h*3));d=ImageDraw.Draw(im)
 def rect(box,fill,r=5,outline=ink,width=2): d.rounded_rectangle(tuple(int(x*3) for x in box),radius=r*3,fill=fill,outline=outline,width=width*3)
 def ellipse(box,fill):d.ellipse(tuple(int(x*3) for x in box),fill=fill)
 draw(rect,ellipse,d);im.resize((w,h),Image.Resampling.LANCZOS).save(out/(name+'.png'))
make('body',64,70,lambda r,e,d:(r((3,3,61,67),orange,12),r((12,10,52,50),cream,7),r((23,17,41,40),teal,3),r((29,20,35,37),ink,1),r((23,26,41,31),ink,1),r((14,55,50,61),ink,2)))
make('head',72,54,lambda r,e,d:(r((8,3,64,49),cream,13),r((13,12,62,36),ink,9),e((37,19,43,25),'#b7f0cd'),e((51,19,57,25),'#b7f0cd'),r((1,18,10,34),orange,3),r((20,0,51,7),orange,2)))
make('arm',20,44,lambda r,e,d:(r((3,2,17,34),teal,6),r((1,29,19,42),ink,6)))
make('leg',22,44,lambda r,e,d:(r((5,0,17,32),ink,4),r((1,28,21,43),cream,5)))
make('pack',27,50,lambda r,e,d:(r((2,3,25,47),teal,5),r((6,9,20,19),cream,2),r((5,31,22,38),ink,2)))
make('parcel',30,27,lambda r,e,d:(r((1,1,29,26),'#d6b67e',3),r((12,1,18,25),cream,0,outline=None),r((4,8,10,14),ink,1)))
bones=[{'name':'root'},{'name':'body','parent':'root','y':73},{'name':'leg-back','parent':'body','x':-15,'y':-39},{'name':'leg-front','parent':'body','x':14,'y':-39},{'name':'pack','parent':'body','x':-36,'y':4},{'name':'arm-back','parent':'body','x':-25,'y':1},{'name':'head','parent':'body','y':56},{'name':'arm-front','parent':'body','x':25,'y':1},{'name':'parcel','parent':'body','x':37,'y':-17}]
specs=[('leg-back','leg',22,44,0,-18),('leg-front','leg',22,44,0,-18),('pack','pack',27,50,0,0),('arm-back','arm',20,44,0,-17),('body','body',64,70,0,0),('head','head',72,54,0,0),('arm-front','arm',20,44,0,-17),('parcel','parcel',30,27,0,0)]
slots=[{'name':b,'bone':b,'attachment':p} for b,p,w,h,x,y in specs]
attachments={b:{p:{'type':'region','path':p,'width':w,'height':h,'x':x,'y':y}} for b,p,w,h,x,y in specs}
def rot(a):return [{'time':0,'value':-a},{'time':.25,'value':a},{'time':.5,'value':-a}]
rig={'skeleton':{'spine':'4.2.43','images':'./','width':120,'height':160},'bones':bones,'slots':slots,'skins':[{'name':'default','attachments':attachments}],'animations':{'idle':{'bones':{'body':{'translate':[{'time':0,'y':0},{'time':.8,'y':2},{'time':1.6,'y':0}]}}},'walk':{'bones':{'leg-back':{'rotate':rot(27)},'leg-front':{'rotate':rot(-27)},'arm-back':{'rotate':rot(-19)},'arm-front':{'rotate':rot(19)},'body':{'translate':[{'time':0,'y':0},{'time':.125,'y':3},{'time':.25,'y':0},{'time':.375,'y':3},{'time':.5,'y':0}]}}},'celebrate':{'bones':{'arm-front':{'rotate':[{'time':0,'value':0},{'time':.3,'value':-140},{'time':.7,'value':-110},{'time':1,'value':0}]},'body':{'translate':[{'time':0,'y':0},{'time':.3,'y':12},{'time':.6,'y':0},{'time':1,'y':0}]}}},'wait':{'bones':{'head':{'rotate':[{'time':0,'value':-6},{'time':.7,'value':6},{'time':1.4,'value':-6}]}}}}}
(out/'courier.json').write_text(json.dumps(rig,indent=2))
(out/'README.txt').write_text('API Courier — original prototype assets\n\nOriginal robot artwork, separate transparent PNG parts, and an authored Spine 4.2-format JSON rig. Import courier.json using Spine Import Data, with images in the same folder. Animations: idle, walk, wait, celebrate. This JSON has not been verified in the Spine Editor; no native .spine project is supplied.\n\nThe live prototype uses an independent Canvas renderer for these simple region attachments and bone timelines. It does not include the proprietary Spine runtime. Official runtime integration requires an appropriate Spine license.\n\nYou may use and modify this original artwork and rig in your projects.\n')
with zipfile.ZipFile(out.parent/'courier-assets.zip','w',zipfile.ZIP_DEFLATED) as z:
 for p in out.iterdir():z.write(p,p.name)
