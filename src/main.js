import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Modal, Offcanvas, Toast } from 'bootstrap';
import { createWorld, SHELVES } from './3d/world.js';
import { DEPTS } from './data/products.js';
const $=s=>document.querySelector(s),inr=n=>'₹'+n.toLocaleString('en-IN');
const world=createWorld($('#scene')),cart=new Map(),flat=DEPTS.flatMap(d=>d.items);
let cur=null,curMesh=null,orders=0,sales=124850;
// toasts
function toast(msg){const e=document.createElement('div');e.className='toast text-bg-success border-0';e.innerHTML=`<div class="toast-body">${msg}</div>`;$('#toasts').append(e);const t=new Toast(e,{delay:2200});t.show();e.addEventListener('hidden.bs.toast',()=>e.remove())}
// intro
setTimeout(()=>{$('#loader').classList.add('fade');setTimeout(()=>$('#loader').remove(),700)},900);
const enter=(d)=>{$('#intro').classList.add('fade');setTimeout(()=>$('#intro').remove(),900);if(d!=null)world.goDept(d);else world.reset()};
$('#enter').onclick=()=>enter();$('#explore').onclick=()=>enter(0);
// nav
$('#deptMenu').innerHTML=DEPTS.map((d,i)=>`<li><a class="dropdown-item" href="#" data-d="${i}">${d.name}</a></li>`).join('');
$('#deptMenu').onclick=e=>{const a=e.target.closest('[data-d]');if(a){e.preventDefault();world.goDept(+a.dataset.d)}};
$('#nHome').onclick=e=>{e.preventDefault();world.reset()};$('#nStore').onclick=e=>{e.preventDefault();world.preset('overview')};
$('#nOffers').onclick=e=>{e.preventDefault();toast('🔥 Weekend sale 30% off · Fresh fruits 20% off · Electronics up to 40% off')};
$('#nUser').onclick=()=>toast('👤 Signed in as Guest shopper');
document.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>world.preset(b.dataset.p));
$('#zi').onclick=()=>world.zoom(-4);$('#zo').onclick=()=>world.zoom(4);$('#rl').onclick=()=>world.rotate(.4);$('#rr').onclick=()=>world.rotate(-.4);$('#rs').onclick=()=>world.reset();
const helpM=new Modal('#helpModal');$('#hp').onclick=()=>helpM.show();
document.querySelectorAll('[data-m]').forEach(b=>{const [f,s]=b.dataset.m.split(',').map(Number);let iv;const go=()=>world.move(f,s,.4);
 b.onpointerdown=()=>{go();iv=setInterval(go,60)};['pointerup','pointerleave'].forEach(ev=>b['on'+ev]=()=>clearInterval(iv))});
const cartC=new Offcanvas('#cart');$('#cartBtn').onclick=()=>cartC.show();
addEventListener('keydown',e=>{if(e.target.tagName==='INPUT')return;const k=e.key.toLowerCase();if(k==='c')cartC.toggle();if(k==='r')world.reset()});
// product panel
world.onPick=(p,mesh,x,y)=>{cur=p;curMesh=mesh;$('#pName').textContent=p.name;$('#pDesc').textContent=p.desc+' · '+DEPTS.find(d=>d.items.includes(p)).name;$('#pPrice').textContent=`${inr(p.price)} / ${p.unit}`;
 const el=$('#panel');el.classList.remove('d-none');el.style.left=Math.max(8,Math.min(innerWidth-276,x+14))+'px';el.style.top=Math.max(70,Math.min(innerHeight-230,y-60))+'px'};
$('#pClose').onclick=()=>$('#panel').classList.add('d-none');
$('#pAdd').onclick=()=>{world.fly(curMesh.getWorldPosition(curMesh.position.clone()),curMesh.material,curMesh.geometry);add(cur);$('#panel').classList.add('d-none')};
function add(p){cart.set(p.name,(cart.get(p.name)||0)+1);toast(`✔ ${p.name} added to cart`);render()}
// cart
function totals(){let s=0,n=0;cart.forEach((q,k)=>{s+=flat.find(p=>p.name===k).price*q;n+=q});const tax=Math.round(s*.05);return{s,n,tax,total:s+tax}}
function render(){const t=totals();$('#cartCount').textContent=t.n;
 $('#cartItems').innerHTML=cart.size?[...cart].map(([k,q])=>{const p=flat.find(x=>x.name===k);return `<div class="d-flex align-items-center justify-content-between border-bottom border-secondary py-2"><div><b>${k}</b><div class="small text-secondary">${inr(p.price)} each</div></div>
 <div class="btn-group btn-group-sm"><button class="btn btn-outline-light" data-q="${k}" data-d="-1">−</button><span class="btn btn-dark disabled">× ${q}</span><button class="btn btn-outline-light" data-q="${k}" data-d="1">+</button></div><b>${inr(p.price*q)}</b></div>`}).join(''):'<p class="text-secondary">Your cart is empty. Click a product on the shelves to add it.</p>';
 $('#cartTot').innerHTML=`<div class="d-flex justify-content-between"><span>Subtotal</span>${inr(t.s)}</div><div class="d-flex justify-content-between"><span>Tax (5%)</span>${inr(t.tax)}</div><div class="d-flex justify-content-between fs-5"><b>Total</b><b>${inr(t.total)}</b></div>`}
$('#cartItems').onclick=e=>{const b=e.target.closest('[data-q]');if(!b)return;const k=b.dataset.q,q=cart.get(k)+ +b.dataset.d;q<=0?cart.delete(k):cart.set(k,q);render()};
$('#clearCart').onclick=()=>{cart.clear();render()};render();
// checkout
const payM=new Modal('#payModal');
$('#toCheckout').onclick=()=>{if(!cart.size)return toast('🛒 Add something first');cartC.hide();world.preset('checkout');
 $('#payBody').innerHTML=`<p class="mb-2">Total payable: <b>${inr(totals().total)}</b></p>${['UPI','Credit Card','Debit Card','Cash'].map((m,i)=>`<div class="form-check"><input class="form-check-input" type="radio" name="pm" id="pm${i}" ${i?'':'checked'}><label class="form-check-label" for="pm${i}">${m}</label></div>`).join('')}<button class="btn btn-success w-100 mt-3" id="payNow">Pay Now</button>`;
 $('#payNow').onclick=pay;payM.show()};
function pay(){const t=totals();payM.hide();const a=$('#anim');a.classList.remove('d-none');
 const S=['🛒 Shopping cart','📦 Checkout counter','🔍 Barcode scanner','💳 Payment','🛍️ Shopping bag'];a.innerHTML=`<div>${S.map(s=>`<div class="step">${s}</div>`).join('')}</div>`;
 S.forEach((_,i)=>setTimeout(()=>a.querySelectorAll('.step')[i].classList.add('on'),i*600));
 setTimeout(()=>{a.classList.add('d-none');orders++;sales+=t.total;$('#sSales').textContent=inr(sales);
  const d=new Date(),id=`MV3D-${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}-${String(orders).padStart(3,'0')}`;
  $('#payBody').innerHTML=`<div class="text-center"><div class="display-3">✅</div><h4>Purchase Successful!</h4><p class="mb-1">Order ID: <b>${id}</b></p><p class="mb-1">Items: <b>${t.n}</b></p><p>Total: <b>${inr(t.total)}</b></p><button class="btn btn-primary" id="cont">Continue Shopping</button></div>`;
  cart.clear();render();payM.show();$('#cont').onclick=()=>{payM.hide();world.reset()}},3300)}
// stats + minimap
const mini=$('#mini'),mx=mini.getContext('2d'),sx=x=>(x+20)/40*160,sz=z=>(z+16)/34*128;
setInterval(()=>{$('#sIn').textContent=world.state().inside;mx.clearRect(0,0,160,128);
 SHELVES.forEach(([x,z],i)=>{mx.fillStyle=DEPTS[i].color;mx.fillRect(sx(x-4.5),sz(z-.6),36,6)});
 mx.fillStyle='#2f9e44';[6,12,18].forEach(x=>mx.fillRect(sx(x)-5,sz(11),10,4));mx.fillStyle='#fff';mx.font='9px sans-serif';mx.fillText('ENTRANCE',58,125);mx.fillText('CHECKOUT',100,sz(8));
 world.customers.forEach(c=>{if(!c.inside)return;mx.fillStyle='#ffd43b';mx.fillRect(sx(c.mesh.position.x)-1.5,sz(c.mesh.position.z)-1.5,3,3)});
 const t=world.cam.target;mx.fillStyle='#ff6b6b';mx.beginPath();mx.arc(sx(t.x),sz(t.z),4,0,7);mx.fill()},200);
