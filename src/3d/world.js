import * as THREE from 'three';
import { DEPTS } from '../data/products.js';
const M=(c,o={})=>new THREE.MeshStandardMaterial({color:c,roughness:.7,...o});
const G={box:new THREE.BoxGeometry(.7,.9,.5),cyl:new THREE.CylinderGeometry(.3,.3,.8,12),sphere:new THREE.SphereGeometry(.38,12,10)};
const HALF={box:.45,cyl:.4,sphere:.38};
export const SHELVES=[[-12,-8],[0,-8],[12,-8],[-12,0],[0,0],[12,0]];
const COUNTERS=[6,12,18];
function tex(text,fg,bg,w=512,h=128){const c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d');
 x.fillStyle=bg;x.fillRect(0,0,w,h);x.fillStyle=fg;x.font='bold '+Math.round(h*(text.includes('\n')?.3:.42))+'px sans-serif';x.textAlign='center';x.textBaseline='middle';
 const L=text.split('\n');L.forEach((t,i)=>x.fillText(t,w/2,h/2+(i-(L.length-1)/2)*h*.38));return new THREE.CanvasTexture(c)}
const sign=(t,fg,bg,w,h)=>new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:tex(t,fg,bg,512,Math.round(512*h/w))}));
function person(shirt,pants,hair,h=1){const g=new THREE.Group(),skin=M(0xf1c27d);
 const part=(geo,mat,x,y,z,p=g)=>{const m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);p.add(m);return m};
 const leg=x=>{const p=new THREE.Group();p.position.set(x,.8,0);g.add(p);part(new THREE.BoxGeometry(.28,.8,.3),M(pants),0,-.4,0,p);return p};
 g.legL=leg(-.17);g.legR=leg(.17);part(new THREE.BoxGeometry(.7,.8,.4),M(shirt),0,1.2,0);
 const arm=x=>{const p=new THREE.Group();p.position.set(x,1.55,0);g.add(p);part(new THREE.BoxGeometry(.2,.7,.22),M(shirt),0,-.3,0,p);return p};
 g.armL=arm(-.46);g.armR=arm(.46);part(new THREE.SphereGeometry(.26,12,10),skin,0,1.85,0);
 part(new THREE.SphereGeometry(.28,12,8,0,6.28,0,1.6),M(hair),0,1.9,-.02);g.scale.setScalar(h);return g}
function cartMesh(){const g=new THREE.Group(),m=M(0x9aa5b1,{metalness:.6});
 const b=new THREE.Mesh(new THREE.BoxGeometry(.8,.45,1),new THREE.MeshStandardMaterial({color:0x74c0fc,transparent:true,opacity:.55}));b.position.y=.65;g.add(b);
 const h=new THREE.Mesh(new THREE.BoxGeometry(.8,.05,.05),m);h.position.set(0,1,-.5);g.add(h);
 const base=new THREE.Mesh(new THREE.BoxGeometry(.7,.08,.9),m);base.position.y=.3;g.add(base);
 g.load=new THREE.Group();g.add(g.load);return g}

export function createWorld(canvas){
 const R=new THREE.WebGLRenderer({canvas,antialias:true});R.setPixelRatio(Math.min(devicePixelRatio,1.75));
 const scene=new THREE.Scene();scene.background=new THREE.Color(0x0b1530);scene.fog=new THREE.Fog(0x0b1530,35,80);
 const cam=new THREE.PerspectiveCamera(55,1,.1,200);
 scene.add(new THREE.HemisphereLight(0xdfeaff,0x334466,1.6));
 const sun=new THREE.DirectionalLight(0xffffff,1.1);sun.position.set(10,25,15);scene.add(sun);
 const add=(m,x,y,z)=>{m.position.set(x,y,z);scene.add(m);return m};
 const box=(w,h,d,mat,x,y,z)=>add(new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat),x,y,z);
 const c=document.createElement('canvas');c.width=c.height=64;const x=c.getContext('2d');
 x.fillStyle='#e3e9f0';x.fillRect(0,0,64,64);x.fillStyle='#c4cfdc';x.fillRect(0,0,32,32);x.fillRect(32,32,32,32);
 const ft=new THREE.CanvasTexture(c);ft.wrapS=ft.wrapT=THREE.RepeatWrapping;ft.repeat.set(20,16);
 const floor=add(new THREE.Mesh(new THREE.PlaneGeometry(40,32),M(0xffffff,{map:ft,roughness:.3})),0,0,0);floor.rotation.x=-Math.PI/2;
 const wallM=M(0xf4f7fb);box(40,9,.4,wallM,0,4.5,-16);box(.4,9,32,wallM,-20,4.5,0);box(.4,9,32,wallM,20,4.5,0);box(40,.3,32,M(0x1b2a4a),0,9,0);
 const lightM=new THREE.MeshBasicMaterial({color:0xfffbe6});
 for(let i=-3;i<=3;i++)for(let j=-2;j<=2;j++)box(4,.1,.6,lightM,i*5.5,8.8,j*6);
 const glass=new THREE.MeshStandardMaterial({color:0x7cc7ff,transparent:true,opacity:.25,metalness:.3});
 box(16,6,.1,glass,-12,3,16);box(16,6,.1,glass,12,3,16);box(8,2.5,.1,glass,0,4.75,16);
 const dL=box(2,3.5,.1,glass,-1,1.75,16),dR=box(2,3.5,.1,glass,1,1.75,16);
 add(sign('MARTVERSE 3D','#fff','#1c7ed6',8,1.6),0,6.8,16.2);
 [['WEEKEND SALE\n30% OFF','#e8590c',-14],['FRESH FRUITS\n20% OFF','#2f9e44',0],['ELECTRONICS\nUP TO 40% OFF','#7048e8',14]].forEach(([t,bg,px])=>add(sign(t,'#fff',bg,5,2.2),px,6.5,-15.7));
 const pickables=[],shelfItems=[],body=M(0x2b3a5c),plank=M(0xced4da);
 SHELVES.forEach(([sx,sz],d)=>{const D=DEPTS[d];
  box(9,.2,1.4,body,sx,.1,sz);box(9,3.4,.2,body,sx,1.7,sz-.6);box(.2,3.4,1.4,body,sx-4.5,1.7,sz);box(.2,3.4,1.4,body,sx+4.5,1.7,sz);
  [.9,2.1].forEach(y=>box(9,.1,1.3,plank,sx,y,sz));
  add(sign(D.name,'#fff',D.color,8,1.3),sx,5.4,sz+.3);box(.1,5,.1,body,sx-3.9,2.5,sz+.3);box(.1,5,.1,body,sx+3.9,2.5,sz+.3);
  const list=[];
  [.95,2.15].forEach(y=>D.items.forEach((p,i)=>{const m=new THREE.Mesh(G[p.shape],M(p.color,{roughness:.4}));
   m.position.set(sx-3.4+i*(6.8/(D.items.length-1)),y+HALF[p.shape]+.0,sz+.1);m.userData.product=p;scene.add(m);pickables.push(m);list.push(m)}));
  shelfItems.push(list)});
 const cashiers=[];
 COUNTERS.forEach(cx=>{box(2.4,1,1.4,M(0x1c7ed6),cx,.5,11);box(2.2,.05,.8,M(0x212529),cx,1.03,10.4);
  box(.3,.3,.3,new THREE.MeshBasicMaterial({color:0xff3b30}),cx+.8,1.2,11.3);box(.5,.4,.1,new THREE.MeshBasicMaterial({color:0x40c057}),cx-.8,1.3,11.4);
  const ca=person(0xe03131,0x212529,0x2b2118);add(ca,cx,0,12.4);ca.rotation.y=Math.PI;cashiers.push(ca);add(sign('CHECKOUT','#fff','#2f9e44',2.2,.6),cx,3.2,11)});
 box(1.4,2.4,1,M(0x212529),-17,1.2,12);add(sign('ATM\nUPI • CARD','#fff','#1864ab',1.8,1),-17,3.1,11.6);
 for(let i=0;i<4;i++)add(cartMesh(),-6+i*.9,0,13.5);
 const flyers=[];
 const fly=(from,to,mat,geo,done)=>{const m=new THREE.Mesh(geo,mat);m.position.copy(from);scene.add(m);flyers.push({m,from:from.clone(),to,t:0,done})};
 const cols=[[0x1c7ed6,0x111111],[0xfcc419,0x3b5b92],[0x2f9e44,0x2b2b2b],[0xe03131,0x3b5b92],[0xf8f9fa,0x111111],[0x7048e8,0x3b5b92],[0xff922b,0x2b2b2b],[0x15aabf,0x3b5b92],[0xf06595,0x111111],[0x868e96,0x2b2b2b]];
 const hairs=[0x2b2118,0xc9a227,0x111111,0x7a4a21,0x999999],queueN=COUNTERS.map(()=>0),customers=[];
 class Customer{
  constructor(i){const [s,p]=cols[i];this.mesh=person(s,p,hairs[i%5],.9+((i*37)%20)/100);this.cart=i%3==0?null:cartMesh();
   scene.add(this.mesh);if(this.cart)scene.add(this.cart);this.delay=i*2.2;this.reset();this.delay=i*2.2}
  reset(){if(this.cart)this.cart.load.clear();this.n=0;
   const k=2+Math.floor(Math.random()*3),route=[0,1,2,3,4,5].sort(()=>Math.random()-.5).slice(0,k);
   this.tasks=[{x:(Math.random()-.5)*4,z:14.5,a:'in'}];
   route.forEach(d=>this.tasks.push({x:SHELVES[d][0]+(Math.random()-.5)*5,z:SHELVES[d][1]+2.4,a:'pick',d}));
   this.ci=Math.floor(Math.random()*3);this.tasks.push({x:COUNTERS[this.ci],z:7.6-queueN[this.ci]*1.2,a:'pay'},{x:0,z:18,a:'exit'});queueN[this.ci]++;
   this.mesh.position.set(-3+Math.random()*6,0,19);this.mesh.rotation.y=Math.PI;this.wait=0;this.state='away';this.delay=2+Math.random()*4;this.vis(false)}
  vis(v){this.mesh.visible=v;if(this.cart)this.cart.visible=v}
  sync(){const m=this.mesh,r=m.rotation.y;if(this.cart){this.cart.position.set(m.position.x+Math.sin(r)*1.1,0,m.position.z+Math.cos(r)*1.1);this.cart.rotation.y=r}}
  get inside(){return this.state!=='away'}
  update(dt,t){
   if(this.state==='away'){this.delay-=dt;if(this.delay>0)return;this.state='walk';this.vis(true);this.sync()}
   const T=this.tasks[0],m=this.mesh;
   if(this.wait>0){this.wait-=dt;if(this.wait<=0){if(T.a==='pay')queueN[this.ci]=Math.max(0,queueN[this.ci]-1);this.tasks.shift();this.state='walk';if(!this.tasks.length)this.reset()}return}
   const dx=T.x-m.position.x,dz=T.z-m.position.z,d=Math.hypot(dx,dz);
   if(d>.12){const sp=1.8*dt;m.position.x+=dx/d*sp;m.position.z+=dz/d*sp;
    const da=Math.atan2(Math.sin(Math.atan2(dx,dz)-m.rotation.y),Math.cos(Math.atan2(dx,dz)-m.rotation.y));m.rotation.y+=da*Math.min(1,dt*8);
    const sw=Math.sin(t*8)*.6;m.legL.rotation.x=sw;m.legR.rotation.x=-sw;m.armL.rotation.x=-sw*.6;m.armR.rotation.x=this.cart?-1:sw*.6;this.sync();return}
   m.legL.rotation.x=m.legR.rotation.x=0;m.armL.rotation.x=0;
   if(T.a==='pick'){this.state='pick';this.wait=1.6;m.rotation.y=Math.PI;m.armR.rotation.x=-1.6;
    const it=shelfItems[T.d][Math.floor(Math.random()*shelfItems[T.d].length)],self=this;
    fly(it.position,{get:()=>self.cart?self.cart.position.clone().setY(.8):m.position.clone().setY(.6)},it.material,it.geometry,()=>{
     if(self.cart){const b=new THREE.Mesh(it.geometry,it.material);b.scale.setScalar(.5);b.position.set((self.n%3-1)*.22,.75+Math.floor(self.n/3)*.2,((self.n*7)%3-1)*.2);self.cart.load.add(b);self.n++}})}
   else if(T.a==='pay'){this.state='pay';this.wait=3.2;m.rotation.y=Math.PI;const cs=cashiers[this.ci];cs.armR.rotation.x=-1.2;setTimeout(()=>cs.armR.rotation.x=0,2500)}
   else this.wait=.05}}
 for(let i=0;i<10;i++)customers.push(new Customer(i));
 const C={yaw:0,pitch:.5,dist:28,target:new THREE.Vector3(0,0,2)},goal={yaw:0,pitch:.5,dist:28,target:new THREE.Vector3(0,0,2)};
 const keys={};addEventListener('keydown',e=>keys[e.key.toLowerCase()]=true);addEventListener('keyup',e=>keys[e.key.toLowerCase()]=false);
 let drag=null,moved=0;const ray=new THREE.Raycaster(),api={};
 canvas.addEventListener('pointerdown',e=>{drag={x:e.clientX,y:e.clientY};moved=0;canvas.setPointerCapture(e.pointerId)});
 canvas.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;moved+=Math.abs(dx)+Math.abs(dy);drag={x:e.clientX,y:e.clientY};goal.yaw-=dx*.005;goal.pitch=Math.max(.1,Math.min(1.4,goal.pitch+dy*.004))});
 canvas.addEventListener('pointerup',e=>{drag=null;if(moved>6)return;const r=canvas.getBoundingClientRect();
  ray.setFromCamera(new THREE.Vector2((e.clientX-r.left)/r.width*2-1,-((e.clientY-r.top)/r.height)*2+1),cam);
  const h=ray.intersectObjects(pickables)[0];if(h&&api.onPick)api.onPick(h.object.userData.product,h.object,e.clientX,e.clientY)});
 canvas.addEventListener('wheel',e=>{e.preventDefault();api.zoom(e.deltaY*.02)},{passive:false});
 const PRE={overview:[0,2,0,28,.5],fruits:[-12,-4,0,12,.35],electronics:[0,-4,0,12,.35],checkout:[12,9,.3,13,.4]};
 api.preset=n=>{const p=PRE[n];goal.target.set(p[0],0,p[1]);goal.yaw=p[2];goal.dist=p[3];goal.pitch=p[4]};
 api.reset=()=>api.preset('overview');api.goDept=i=>{goal.target.set(SHELVES[i][0],0,SHELVES[i][1]+1);goal.dist=11;goal.pitch=.35;goal.yaw=0};
 api.zoom=d=>goal.dist=Math.max(6,Math.min(45,goal.dist+d));api.rotate=d=>goal.yaw+=d;
 api.move=(f,s,k=.5)=>{const sn=Math.sin(goal.yaw),cs=Math.cos(goal.yaw);goal.target.x+=(-sn*f+cs*s)*k;goal.target.z+=(-cs*f-sn*s)*k;
  goal.target.x=Math.max(-18,Math.min(18,goal.target.x));goal.target.z=Math.max(-13,Math.min(15,goal.target.z))};
 api.fly=(from,mat,geo)=>fly(from,{get:()=>cam.position.clone().lerp(C.target,.3)},mat,geo,()=>{});
 api.customers=customers;api.cam=C;api.state=()=>({inside:customers.filter(c=>c.inside).length});
 const resize=()=>{const w=canvas.clientWidth,h=canvas.clientHeight;R.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix()};
 addEventListener('resize',resize);resize();
 let last=performance.now(),t=0;
 (function loop(now){requestAnimationFrame(loop);const dt=Math.min(.05,(now-last)/1000);last=now;t+=dt;
  const k=dt*9;if(keys.w||keys.arrowup)api.move(1,0,k);if(keys.s||keys.arrowdown)api.move(-1,0,k);if(keys.a||keys.arrowleft)api.move(0,-1,k);if(keys.d||keys.arrowright)api.move(0,1,k);
  const e=Math.min(1,dt*4);C.yaw+=(goal.yaw-C.yaw)*e;C.pitch+=(goal.pitch-C.pitch)*e;C.dist+=(goal.dist-C.dist)*e;C.target.lerp(goal.target,e);
  cam.position.set(C.target.x+Math.sin(C.yaw)*Math.cos(C.pitch)*C.dist,Math.sin(C.pitch)*C.dist+1,C.target.z+Math.cos(C.yaw)*Math.cos(C.pitch)*C.dist);cam.lookAt(C.target.x,1.5,C.target.z);
  let near=false;customers.forEach(c=>{c.update(dt,t);if(c.inside&&Math.abs(c.mesh.position.x)<4&&c.mesh.position.z>11)near=true});
  const o=near?1.7:0;dL.position.x+=(-1-o-dL.position.x)*dt*5;dR.position.x+=(1+o-dR.position.x)*dt*5;
  for(let i=flyers.length-1;i>=0;i--){const f=flyers[i];f.t+=dt/.8;const s=Math.min(f.t,1);f.m.position.lerpVectors(f.from,f.to.get(),s);f.m.position.y+=Math.sin(s*Math.PI)*1.2;f.m.scale.setScalar(1-s*.5);
   if(f.t>=1){scene.remove(f.m);f.done();flyers.splice(i,1)}}
  R.render(scene,cam)})(performance.now());
 return api}
