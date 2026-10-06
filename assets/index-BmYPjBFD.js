(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();var Ae="top",Be="bottom",He="right",we="left",Ls="auto",Qi=[Ae,Be,He,we],ci="start",Gi="end",$c="clippingParents",io="viewport",Ni="popper",Xc="reference",za=Qi.reduce(function(n,t){return n.concat([t+"-"+ci,t+"-"+Gi])},[]),ro=[].concat(Qi,[Ls]).reduce(function(n,t){return n.concat([t,t+"-"+ci,t+"-"+Gi])},[]),Yc="beforeRead",qc="read",jc="afterRead",Kc="beforeMain",Zc="main",Jc="afterMain",Qc="beforeWrite",tu="write",eu="afterWrite",nu=[Yc,qc,jc,Kc,Zc,Jc,Qc,tu,eu];function un(n){return n?(n.nodeName||"").toLowerCase():null}function ze(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var t=n.ownerDocument;return t&&t.defaultView||window}return n}function ui(n){var t=ze(n).Element;return n instanceof t||n instanceof Element}function Xe(n){var t=ze(n).HTMLElement;return n instanceof t||n instanceof HTMLElement}function so(n){if(typeof ShadowRoot>"u")return!1;var t=ze(n).ShadowRoot;return n instanceof t||n instanceof ShadowRoot}function Hh(n){var t=n.state;Object.keys(t.elements).forEach(function(e){var i=t.styles[e]||{},r=t.attributes[e]||{},s=t.elements[e];!Xe(s)||!un(s)||(Object.assign(s.style,i),Object.keys(r).forEach(function(o){var a=r[o];a===!1?s.removeAttribute(o):s.setAttribute(o,a===!0?"":a)}))})}function zh(n){var t=n.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(i){var r=t.elements[i],s=t.attributes[i]||{},o=Object.keys(t.styles.hasOwnProperty(i)?t.styles[i]:e[i]),a=o.reduce(function(l,c){return l[c]="",l},{});!Xe(r)||!un(r)||(Object.assign(r.style,a),Object.keys(s).forEach(function(l){r.removeAttribute(l)}))})}}const iu={name:"applyStyles",enabled:!0,phase:"write",fn:Hh,effect:zh,requires:["computeStyles"]};function on(n){return n.split("-")[0]}var si=Math.max,Es=Math.min,Wi=Math.round;function Va(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ru(){return!/^((?!chrome|android).)*safari/i.test(Va())}function $i(n,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var i=n.getBoundingClientRect(),r=1,s=1;t&&Xe(n)&&(r=n.offsetWidth>0&&Wi(i.width)/n.offsetWidth||1,s=n.offsetHeight>0&&Wi(i.height)/n.offsetHeight||1);var o=ui(n)?ze(n):window,a=o.visualViewport,l=!ru()&&e,c=(i.left+(l&&a?a.offsetLeft:0))/r,u=(i.top+(l&&a?a.offsetTop:0))/s,f=i.width/r,p=i.height/s;return{width:f,height:p,top:u,right:c+f,bottom:u+p,left:c,x:c,y:u}}function ao(n){var t=$i(n),e=n.offsetWidth,i=n.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:n.offsetLeft,y:n.offsetTop,width:e,height:i}}function su(n,t){var e=t.getRootNode&&t.getRootNode();if(n.contains(t))return!0;if(e&&so(e)){var i=t;do{if(i&&n.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function Tn(n){return ze(n).getComputedStyle(n)}function Vh(n){return["table","td","th"].indexOf(un(n))>=0}function Wn(n){return((ui(n)?n.ownerDocument:n.document)||window.document).documentElement}function Ps(n){return un(n)==="html"?n:n.assignedSlot||n.parentNode||(so(n)?n.host:null)||Wn(n)}function Oo(n){return!Xe(n)||Tn(n).position==="fixed"?null:n.offsetParent}function kh(n){var t=/firefox/i.test(Va()),e=/Trident/i.test(Va());if(e&&Xe(n)){var i=Tn(n);if(i.position==="fixed")return null}var r=Ps(n);for(so(r)&&(r=r.host);Xe(r)&&["html","body"].indexOf(un(r))<0;){var s=Tn(r);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return r;r=r.parentNode}return null}function yr(n){for(var t=ze(n),e=Oo(n);e&&Vh(e)&&Tn(e).position==="static";)e=Oo(e);return e&&(un(e)==="html"||un(e)==="body"&&Tn(e).position==="static")?t:e||kh(n)||t}function oo(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function _r(n,t,e){return si(n,Es(t,e))}function Gh(n,t,e){var i=_r(n,t,e);return i>e?e:i}function au(){return{top:0,right:0,bottom:0,left:0}}function ou(n){return Object.assign({},au(),n)}function lu(n,t){return t.reduce(function(e,i){return e[i]=n,e},{})}var Wh=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,ou(typeof t!="number"?t:lu(t,Qi))};function $h(n){var t,e=n.state,i=n.name,r=n.options,s=e.elements.arrow,o=e.modifiersData.popperOffsets,a=on(e.placement),l=oo(a),c=[we,He].indexOf(a)>=0,u=c?"height":"width";if(!(!s||!o)){var f=Wh(r.padding,e),p=ao(s),m=l==="y"?Ae:we,g=l==="y"?Be:He,_=e.rects.reference[u]+e.rects.reference[l]-o[l]-e.rects.popper[u],d=o[l]-e.rects.reference[l],h=yr(s),b=h?l==="y"?h.clientHeight||0:h.clientWidth||0:0,S=_/2-d/2,T=f[m],L=b-p[u]-f[g],A=b/2-p[u]/2+S,w=_r(T,A,L),X=l;e.modifiersData[i]=(t={},t[X]=w,t.centerOffset=w-A,t)}}function Xh(n){var t=n.state,e=n.options,i=e.element,r=i===void 0?"[data-popper-arrow]":i;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||su(t.elements.popper,r)&&(t.elements.arrow=r))}const cu={name:"arrow",enabled:!0,phase:"main",fn:$h,effect:Xh,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Xi(n){return n.split("-")[1]}var Yh={top:"auto",right:"auto",bottom:"auto",left:"auto"};function qh(n,t){var e=n.x,i=n.y,r=t.devicePixelRatio||1;return{x:Wi(e*r)/r||0,y:Wi(i*r)/r||0}}function Fo(n){var t,e=n.popper,i=n.popperRect,r=n.placement,s=n.variation,o=n.offsets,a=n.position,l=n.gpuAcceleration,c=n.adaptive,u=n.roundOffsets,f=n.isFixed,p=o.x,m=p===void 0?0:p,g=o.y,_=g===void 0?0:g,d=typeof u=="function"?u({x:m,y:_}):{x:m,y:_};m=d.x,_=d.y;var h=o.hasOwnProperty("x"),b=o.hasOwnProperty("y"),S=we,T=Ae,L=window;if(c){var A=yr(e),w="clientHeight",X="clientWidth";if(A===ze(e)&&(A=Wn(e),Tn(A).position!=="static"&&a==="absolute"&&(w="scrollHeight",X="scrollWidth")),A=A,r===Ae||(r===we||r===He)&&s===Gi){T=Be;var E=f&&A===L&&L.visualViewport?L.visualViewport.height:A[w];_-=E-i.height,_*=l?1:-1}if(r===we||(r===Ae||r===Be)&&s===Gi){S=He;var M=f&&A===L&&L.visualViewport?L.visualViewport.width:A[X];m-=M-i.width,m*=l?1:-1}}var H=Object.assign({position:a},c&&Yh),U=u===!0?qh({x:m,y:_},ze(e)):{x:m,y:_};if(m=U.x,_=U.y,l){var W;return Object.assign({},H,(W={},W[T]=b?"0":"",W[S]=h?"0":"",W.transform=(L.devicePixelRatio||1)<=1?"translate("+m+"px, "+_+"px)":"translate3d("+m+"px, "+_+"px, 0)",W))}return Object.assign({},H,(t={},t[T]=b?_+"px":"",t[S]=h?m+"px":"",t.transform="",t))}function jh(n){var t=n.state,e=n.options,i=e.gpuAcceleration,r=i===void 0?!0:i,s=e.adaptive,o=s===void 0?!0:s,a=e.roundOffsets,l=a===void 0?!0:a,c={placement:on(t.placement),variation:Xi(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Fo(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Fo(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const uu={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:jh,data:{}};var Br={passive:!0};function Kh(n){var t=n.state,e=n.instance,i=n.options,r=i.scroll,s=r===void 0?!0:r,o=i.resize,a=o===void 0?!0:o,l=ze(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&c.forEach(function(u){u.addEventListener("scroll",e.update,Br)}),a&&l.addEventListener("resize",e.update,Br),function(){s&&c.forEach(function(u){u.removeEventListener("scroll",e.update,Br)}),a&&l.removeEventListener("resize",e.update,Br)}}const hu={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Kh,data:{}};var Zh={left:"right",right:"left",bottom:"top",top:"bottom"};function ps(n){return n.replace(/left|right|bottom|top/g,function(t){return Zh[t]})}var Jh={start:"end",end:"start"};function Bo(n){return n.replace(/start|end/g,function(t){return Jh[t]})}function lo(n){var t=ze(n),e=t.pageXOffset,i=t.pageYOffset;return{scrollLeft:e,scrollTop:i}}function co(n){return $i(Wn(n)).left+lo(n).scrollLeft}function Qh(n,t){var e=ze(n),i=Wn(n),r=e.visualViewport,s=i.clientWidth,o=i.clientHeight,a=0,l=0;if(r){s=r.width,o=r.height;var c=ru();(c||!c&&t==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:s,height:o,x:a+co(n),y:l}}function tf(n){var t,e=Wn(n),i=lo(n),r=(t=n.ownerDocument)==null?void 0:t.body,s=si(e.scrollWidth,e.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=si(e.scrollHeight,e.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-i.scrollLeft+co(n),l=-i.scrollTop;return Tn(r||e).direction==="rtl"&&(a+=si(e.clientWidth,r?r.clientWidth:0)-s),{width:s,height:o,x:a,y:l}}function uo(n){var t=Tn(n),e=t.overflow,i=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+r+i)}function fu(n){return["html","body","#document"].indexOf(un(n))>=0?n.ownerDocument.body:Xe(n)&&uo(n)?n:fu(Ps(n))}function gr(n,t){var e;t===void 0&&(t=[]);var i=fu(n),r=i===((e=n.ownerDocument)==null?void 0:e.body),s=ze(i),o=r?[s].concat(s.visualViewport||[],uo(i)?i:[]):i,a=t.concat(o);return r?a:a.concat(gr(Ps(o)))}function ka(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function ef(n,t){var e=$i(n,!1,t==="fixed");return e.top=e.top+n.clientTop,e.left=e.left+n.clientLeft,e.bottom=e.top+n.clientHeight,e.right=e.left+n.clientWidth,e.width=n.clientWidth,e.height=n.clientHeight,e.x=e.left,e.y=e.top,e}function Ho(n,t,e){return t===io?ka(Qh(n,e)):ui(t)?ef(t,e):ka(tf(Wn(n)))}function nf(n){var t=gr(Ps(n)),e=["absolute","fixed"].indexOf(Tn(n).position)>=0,i=e&&Xe(n)?yr(n):n;return ui(i)?t.filter(function(r){return ui(r)&&su(r,i)&&un(r)!=="body"}):[]}function rf(n,t,e,i){var r=t==="clippingParents"?nf(n):[].concat(t),s=[].concat(r,[e]),o=s[0],a=s.reduce(function(l,c){var u=Ho(n,c,i);return l.top=si(u.top,l.top),l.right=Es(u.right,l.right),l.bottom=Es(u.bottom,l.bottom),l.left=si(u.left,l.left),l},Ho(n,o,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function du(n){var t=n.reference,e=n.element,i=n.placement,r=i?on(i):null,s=i?Xi(i):null,o=t.x+t.width/2-e.width/2,a=t.y+t.height/2-e.height/2,l;switch(r){case Ae:l={x:o,y:t.y-e.height};break;case Be:l={x:o,y:t.y+t.height};break;case He:l={x:t.x+t.width,y:a};break;case we:l={x:t.x-e.width,y:a};break;default:l={x:t.x,y:t.y}}var c=r?oo(r):null;if(c!=null){var u=c==="y"?"height":"width";switch(s){case ci:l[c]=l[c]-(t[u]/2-e[u]/2);break;case Gi:l[c]=l[c]+(t[u]/2-e[u]/2);break}}return l}function Yi(n,t){t===void 0&&(t={});var e=t,i=e.placement,r=i===void 0?n.placement:i,s=e.strategy,o=s===void 0?n.strategy:s,a=e.boundary,l=a===void 0?$c:a,c=e.rootBoundary,u=c===void 0?io:c,f=e.elementContext,p=f===void 0?Ni:f,m=e.altBoundary,g=m===void 0?!1:m,_=e.padding,d=_===void 0?0:_,h=ou(typeof d!="number"?d:lu(d,Qi)),b=p===Ni?Xc:Ni,S=n.rects.popper,T=n.elements[g?b:p],L=rf(ui(T)?T:T.contextElement||Wn(n.elements.popper),l,u,o),A=$i(n.elements.reference),w=du({reference:A,element:S,placement:r}),X=ka(Object.assign({},S,w)),E=p===Ni?X:A,M={top:L.top-E.top+h.top,bottom:E.bottom-L.bottom+h.bottom,left:L.left-E.left+h.left,right:E.right-L.right+h.right},H=n.modifiersData.offset;if(p===Ni&&H){var U=H[r];Object.keys(M).forEach(function(W){var R=[He,Be].indexOf(W)>=0?1:-1,O=[Ae,Be].indexOf(W)>=0?"y":"x";M[W]+=U[O]*R})}return M}function sf(n,t){t===void 0&&(t={});var e=t,i=e.placement,r=e.boundary,s=e.rootBoundary,o=e.padding,a=e.flipVariations,l=e.allowedAutoPlacements,c=l===void 0?ro:l,u=Xi(i),f=u?a?za:za.filter(function(g){return Xi(g)===u}):Qi,p=f.filter(function(g){return c.indexOf(g)>=0});p.length===0&&(p=f);var m=p.reduce(function(g,_){return g[_]=Yi(n,{placement:_,boundary:r,rootBoundary:s,padding:o})[on(_)],g},{});return Object.keys(m).sort(function(g,_){return m[g]-m[_]})}function af(n){if(on(n)===Ls)return[];var t=ps(n);return[Bo(n),t,Bo(t)]}function of(n){var t=n.state,e=n.options,i=n.name;if(!t.modifiersData[i]._skip){for(var r=e.mainAxis,s=r===void 0?!0:r,o=e.altAxis,a=o===void 0?!0:o,l=e.fallbackPlacements,c=e.padding,u=e.boundary,f=e.rootBoundary,p=e.altBoundary,m=e.flipVariations,g=m===void 0?!0:m,_=e.allowedAutoPlacements,d=t.options.placement,h=on(d),b=h===d,S=l||(b||!g?[ps(d)]:af(d)),T=[d].concat(S).reduce(function(D,Y){return D.concat(on(Y)===Ls?sf(t,{placement:Y,boundary:u,rootBoundary:f,padding:c,flipVariations:g,allowedAutoPlacements:_}):Y)},[]),L=t.rects.reference,A=t.rects.popper,w=new Map,X=!0,E=T[0],M=0;M<T.length;M++){var H=T[M],U=on(H),W=Xi(H)===ci,R=[Ae,Be].indexOf(U)>=0,O=R?"width":"height",V=Yi(t,{placement:H,boundary:u,rootBoundary:f,altBoundary:p,padding:c}),q=R?W?He:we:W?Be:Ae;L[O]>A[O]&&(q=ps(q));var $=ps(q),j=[];if(s&&j.push(V[U]<=0),a&&j.push(V[q]<=0,V[$]<=0),j.every(function(D){return D})){E=H,X=!1;break}w.set(H,j)}if(X)for(var K=g?3:1,rt=function(Y){var it=T.find(function(tt){var ht=w.get(tt);if(ht)return ht.slice(0,Y).every(function(gt){return gt})});if(it)return E=it,"break"},st=K;st>0;st--){var C=rt(st);if(C==="break")break}t.placement!==E&&(t.modifiersData[i]._skip=!0,t.placement=E,t.reset=!0)}}const pu={name:"flip",enabled:!0,phase:"main",fn:of,requiresIfExists:["offset"],data:{_skip:!1}};function zo(n,t,e){return e===void 0&&(e={x:0,y:0}),{top:n.top-t.height-e.y,right:n.right-t.width+e.x,bottom:n.bottom-t.height+e.y,left:n.left-t.width-e.x}}function Vo(n){return[Ae,He,Be,we].some(function(t){return n[t]>=0})}function lf(n){var t=n.state,e=n.name,i=t.rects.reference,r=t.rects.popper,s=t.modifiersData.preventOverflow,o=Yi(t,{elementContext:"reference"}),a=Yi(t,{altBoundary:!0}),l=zo(o,i),c=zo(a,r,s),u=Vo(l),f=Vo(c);t.modifiersData[e]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}const mu={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:lf};function cf(n,t,e){var i=on(n),r=[we,Ae].indexOf(i)>=0?-1:1,s=typeof e=="function"?e(Object.assign({},t,{placement:n})):e,o=s[0],a=s[1];return o=o||0,a=(a||0)*r,[we,He].indexOf(i)>=0?{x:a,y:o}:{x:o,y:a}}function uf(n){var t=n.state,e=n.options,i=n.name,r=e.offset,s=r===void 0?[0,0]:r,o=ro.reduce(function(u,f){return u[f]=cf(f,t.rects,s),u},{}),a=o[t.placement],l=a.x,c=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[i]=o}const _u={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:uf};function hf(n){var t=n.state,e=n.name;t.modifiersData[e]=du({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}const gu={name:"popperOffsets",enabled:!0,phase:"read",fn:hf,data:{}};function ff(n){return n==="x"?"y":"x"}function df(n){var t=n.state,e=n.options,i=n.name,r=e.mainAxis,s=r===void 0?!0:r,o=e.altAxis,a=o===void 0?!1:o,l=e.boundary,c=e.rootBoundary,u=e.altBoundary,f=e.padding,p=e.tether,m=p===void 0?!0:p,g=e.tetherOffset,_=g===void 0?0:g,d=Yi(t,{boundary:l,rootBoundary:c,padding:f,altBoundary:u}),h=on(t.placement),b=Xi(t.placement),S=!b,T=oo(h),L=ff(T),A=t.modifiersData.popperOffsets,w=t.rects.reference,X=t.rects.popper,E=typeof _=="function"?_(Object.assign({},t.rects,{placement:t.placement})):_,M=typeof E=="number"?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),H=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,U={x:0,y:0};if(A){if(s){var W,R=T==="y"?Ae:we,O=T==="y"?Be:He,V=T==="y"?"height":"width",q=A[T],$=q+d[R],j=q-d[O],K=m?-X[V]/2:0,rt=b===ci?w[V]:X[V],st=b===ci?-X[V]:-w[V],C=t.elements.arrow,D=m&&C?ao(C):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:au(),it=Y[R],tt=Y[O],ht=_r(0,w[V],D[V]),gt=S?w[V]/2-K-ht-it-M.mainAxis:rt-ht-it-M.mainAxis,pt=S?-w[V]/2+K+ht+tt+M.mainAxis:st+ht+tt+M.mainAxis,dt=t.elements.arrow&&yr(t.elements.arrow),I=dt?T==="y"?dt.clientTop||0:dt.clientLeft||0:0,jt=(W=H==null?void 0:H[T])!=null?W:0,Mt=q+gt-jt-I,Rt=q+pt-jt,vt=_r(m?Es($,Mt):$,q,m?si(j,Rt):j);A[T]=vt,U[T]=vt-q}if(a){var Kt,Nt=T==="x"?Ae:we,y=T==="x"?Be:He,v=A[L],B=L==="y"?"height":"width",et=v+d[Nt],J=v-d[y],nt=[Ae,we].indexOf(h)!==-1,Et=(Kt=H==null?void 0:H[L])!=null?Kt:0,lt=nt?et:v-w[B]-X[B]-Et+M.altAxis,mt=nt?v+w[B]+X[B]-Et-M.altAxis:J,Tt=m&&nt?Gh(lt,v,mt):_r(m?lt:et,v,m?mt:J);A[L]=Tt,U[L]=Tt-v}t.modifiersData[i]=U}}const vu={name:"preventOverflow",enabled:!0,phase:"main",fn:df,requiresIfExists:["offset"]};function pf(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function mf(n){return n===ze(n)||!Xe(n)?lo(n):pf(n)}function _f(n){var t=n.getBoundingClientRect(),e=Wi(t.width)/n.offsetWidth||1,i=Wi(t.height)/n.offsetHeight||1;return e!==1||i!==1}function gf(n,t,e){e===void 0&&(e=!1);var i=Xe(t),r=Xe(t)&&_f(t),s=Wn(t),o=$i(n,r,e),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!e)&&((un(t)!=="body"||uo(s))&&(a=mf(t)),Xe(t)?(l=$i(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):s&&(l.x=co(s))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function vf(n){var t=new Map,e=new Set,i=[];n.forEach(function(s){t.set(s.name,s)});function r(s){e.add(s.name);var o=[].concat(s.requires||[],s.requiresIfExists||[]);o.forEach(function(a){if(!e.has(a)){var l=t.get(a);l&&r(l)}}),i.push(s)}return n.forEach(function(s){e.has(s.name)||r(s)}),i}function Ef(n){var t=vf(n);return nu.reduce(function(e,i){return e.concat(t.filter(function(r){return r.phase===i}))},[])}function xf(n){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(n())})})),t}}function Sf(n){var t=n.reduce(function(e,i){var r=e[i.name];return e[i.name]=r?Object.assign({},r,i,{options:Object.assign({},r.options,i.options),data:Object.assign({},r.data,i.data)}):i,e},{});return Object.keys(t).map(function(e){return t[e]})}var ko={placement:"bottom",modifiers:[],strategy:"absolute"};function Go(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return!t.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function Eu(n){n===void 0&&(n={});var t=n,e=t.defaultModifiers,i=e===void 0?[]:e,r=t.defaultOptions,s=r===void 0?ko:r;return function(a,l,c){c===void 0&&(c=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},ko,s),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},f=[],p=!1,m={state:u,setOptions:function(h){var b=typeof h=="function"?h(u.options):h;_(),u.options=Object.assign({},s,u.options,b),u.scrollParents={reference:ui(a)?gr(a):a.contextElement?gr(a.contextElement):[],popper:gr(l)};var S=Ef(Sf([].concat(i,u.options.modifiers)));return u.orderedModifiers=S.filter(function(T){return T.enabled}),g(),m.update()},forceUpdate:function(){if(!p){var h=u.elements,b=h.reference,S=h.popper;if(Go(b,S)){u.rects={reference:gf(b,yr(S),u.options.strategy==="fixed"),popper:ao(S)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(M){return u.modifiersData[M.name]=Object.assign({},M.data)});for(var T=0;T<u.orderedModifiers.length;T++){if(u.reset===!0){u.reset=!1,T=-1;continue}var L=u.orderedModifiers[T],A=L.fn,w=L.options,X=w===void 0?{}:w,E=L.name;typeof A=="function"&&(u=A({state:u,options:X,name:E,instance:m})||u)}}}},update:xf(function(){return new Promise(function(d){m.forceUpdate(),d(u)})}),destroy:function(){_(),p=!0}};if(!Go(a,l))return m;m.setOptions(c).then(function(d){!p&&c.onFirstUpdate&&c.onFirstUpdate(d)});function g(){u.orderedModifiers.forEach(function(d){var h=d.name,b=d.options,S=b===void 0?{}:b,T=d.effect;if(typeof T=="function"){var L=T({state:u,name:h,instance:m,options:S}),A=function(){};f.push(L||A)}})}function _(){f.forEach(function(d){return d()}),f=[]}return m}}var Mf=[hu,gu,uu,iu,_u,pu,vu,cu,mu],ho=Eu({defaultModifiers:Mf});const xu=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Jc,afterRead:jc,afterWrite:eu,applyStyles:iu,arrow:cu,auto:Ls,basePlacements:Qi,beforeMain:Kc,beforeRead:Yc,beforeWrite:Qc,bottom:Be,clippingParents:$c,computeStyles:uu,createPopper:ho,detectOverflow:Yi,end:Gi,eventListeners:hu,flip:pu,hide:mu,left:we,main:Zc,modifierPhases:nu,offset:_u,placements:ro,popper:Ni,popperGenerator:Eu,popperOffsets:gu,preventOverflow:vu,read:qc,reference:Xc,right:He,start:ci,top:Ae,variationPlacements:za,viewport:io,write:tu},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const Rn=new Map,$s={set(n,t,e){Rn.has(n)||Rn.set(n,new Map);const i=Rn.get(n);if(!i.has(t)&&i.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);return}i.set(t,e)},get(n,t){return Rn.has(n)&&Rn.get(n).get(t)||null},remove(n,t){if(!Rn.has(n))return;const e=Rn.get(n);e.delete(t),e.size===0&&Rn.delete(n)}},yf=1e6,Tf=1e3,Ga="transitionend",Su=n=>(n&&window.CSS&&window.CSS.escape&&(n=n.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),n),bf=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),Af=n=>{do n+=Math.floor(Math.random()*yf);while(document.getElementById(n));return n},wf=n=>{if(!n)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(n);const i=Number.parseFloat(t),r=Number.parseFloat(e);return!i&&!r?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*Tf)},Mu=n=>{n.dispatchEvent(new Event(Ga))},Mn=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),zn=n=>Mn(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(Su(n)):null,tr=n=>{if(!Mn(n)||n.getClientRects().length===0)return!1;const t=getComputedStyle(n).getPropertyValue("visibility")==="visible",e=n.closest("details:not([open])");if(!e)return t;if(e!==n){const i=n.closest("summary");if(i&&i.parentNode!==e||i===null)return!1}return t},Vn=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",yu=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const t=n.getRootNode();return t instanceof ShadowRoot?t:null}return n instanceof ShadowRoot?n:n.parentNode?yu(n.parentNode):null},xs=()=>{},Tr=n=>{n.offsetHeight},Tu=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Xs=[],Cf=n=>{document.readyState==="loading"?(Xs.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of Xs)t()}),Xs.push(n)):n()},Ye=()=>document.documentElement.dir==="rtl",je=n=>{Cf(()=>{const t=Tu();if(t){const e=n.NAME,i=t.fn[e];t.fn[e]=n.jQueryInterface,t.fn[e].Constructor=n,t.fn[e].noConflict=()=>(t.fn[e]=i,n.jQueryInterface)}})},Le=(n,t=[],e=n)=>typeof n=="function"?n.call(...t):e,bu=(n,t,e=!0)=>{if(!e){Le(n);return}const r=wf(t)+5;let s=!1;const o=({target:a})=>{a===t&&(s=!0,t.removeEventListener(Ga,o),Le(n))};t.addEventListener(Ga,o),setTimeout(()=>{s||Mu(t)},r)},fo=(n,t,e,i)=>{const r=n.length;let s=n.indexOf(t);return s===-1?!e&&i?n[r-1]:n[0]:(s+=e?1:-1,i&&(s=(s+r)%r),n[Math.max(0,Math.min(s,r-1))])},Rf=/[^.]*(?=\..*)\.|.*/,Lf=/\..*/,Pf=/::\d+$/,Ys={};let Wo=1;const Au={mouseenter:"mouseover",mouseleave:"mouseout"},Df=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function wu(n,t){return t&&`${t}::${Wo++}`||n.uidEvent||Wo++}function Cu(n){const t=wu(n);return n.uidEvent=t,Ys[t]=Ys[t]||{},Ys[t]}function Nf(n,t){return function e(i){return po(i,{delegateTarget:n}),e.oneOff&&Z.off(n,i.type,t),t.apply(n,[i])}}function If(n,t,e){return function i(r){const s=n.querySelectorAll(t);for(let{target:o}=r;o&&o!==this;o=o.parentNode)for(const a of s)if(a===o)return po(r,{delegateTarget:o}),i.oneOff&&Z.off(n,r.type,t,e),e.apply(o,[r])}}function Ru(n,t,e=null){return Object.values(n).find(i=>i.callable===t&&i.delegationSelector===e)}function Lu(n,t,e){const i=typeof t=="string",r=i?e:t||e;let s=Pu(n);return Df.has(s)||(s=n),[i,r,s]}function $o(n,t,e,i,r){if(typeof t!="string"||!n)return;let[s,o,a]=Lu(t,e,i);t in Au&&(o=(g=>function(_){if(!_.relatedTarget||_.relatedTarget!==_.delegateTarget&&!_.delegateTarget.contains(_.relatedTarget))return g.call(this,_)})(o));const l=Cu(n),c=l[a]||(l[a]={}),u=Ru(c,o,s?e:null);if(u){u.oneOff=u.oneOff&&r;return}const f=wu(o,t.replace(Rf,"")),p=s?If(n,e,o):Nf(n,o);p.delegationSelector=s?e:null,p.callable=o,p.oneOff=r,p.uidEvent=f,c[f]=p,n.addEventListener(a,p,s)}function Wa(n,t,e,i,r){const s=Ru(t[e],i,r);s&&(n.removeEventListener(e,s,!!r),delete t[e][s.uidEvent])}function Uf(n,t,e,i){const r=t[e]||{};for(const[s,o]of Object.entries(r))s.includes(i)&&Wa(n,t,e,o.callable,o.delegationSelector)}function Pu(n){return n=n.replace(Lf,""),Au[n]||n}const Z={on(n,t,e,i){$o(n,t,e,i,!1)},one(n,t,e,i){$o(n,t,e,i,!0)},off(n,t,e,i){if(typeof t!="string"||!n)return;const[r,s,o]=Lu(t,e,i),a=o!==t,l=Cu(n),c=l[o]||{},u=t.startsWith(".");if(typeof s<"u"){if(!Object.keys(c).length)return;Wa(n,l,o,s,r?e:null);return}if(u)for(const f of Object.keys(l))Uf(n,l,f,t.slice(1));for(const[f,p]of Object.entries(c)){const m=f.replace(Pf,"");(!a||t.includes(m))&&Wa(n,l,o,p.callable,p.delegationSelector)}},trigger(n,t,e){if(typeof t!="string"||!n)return null;const i=Tu(),r=Pu(t),s=t!==r;let o=null,a=!0,l=!0,c=!1;s&&i&&(o=i.Event(t,e),i(n).trigger(o),a=!o.isPropagationStopped(),l=!o.isImmediatePropagationStopped(),c=o.isDefaultPrevented());const u=po(new Event(t,{bubbles:a,cancelable:!0}),e);return c&&u.preventDefault(),l&&n.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function po(n,t={}){for(const[e,i]of Object.entries(t))try{n[e]=i}catch{Object.defineProperty(n,e,{configurable:!0,get(){return i}})}return n}function Xo(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function qs(n){return n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const yn={setDataAttribute(n,t,e){n.setAttribute(`data-bs-${qs(t)}`,e)},removeDataAttribute(n,t){n.removeAttribute(`data-bs-${qs(t)}`)},getDataAttributes(n){if(!n)return{};const t={},e=Object.keys(n.dataset).filter(i=>i.startsWith("bs")&&!i.startsWith("bsConfig"));for(const i of e){let r=i.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1),t[r]=Xo(n.dataset[i])}return t},getDataAttribute(n,t){return Xo(n.getAttribute(`data-bs-${qs(t)}`))}};class br{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=Mn(e)?yn.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof i=="object"?i:{},...Mn(e)?yn.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[i,r]of Object.entries(e)){const s=t[i],o=Mn(s)?"element":bf(s);if(!new RegExp(r).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${r}".`)}}}const Of="5.3.8";class rn extends br{constructor(t,e){super(),t=zn(t),t&&(this._element=t,this._config=this._getConfig(e),$s.set(this._element,this.constructor.DATA_KEY,this))}dispose(){$s.remove(this._element,this.constructor.DATA_KEY),Z.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){bu(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return $s.get(zn(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return Of}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const js=n=>{let t=n.getAttribute("data-bs-target");if(!t||t==="#"){let e=n.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?e.trim():null}return t?t.split(",").map(e=>Su(e)).join(","):null},St={find(n,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,n))},findOne(n,t=document.documentElement){return Element.prototype.querySelector.call(t,n)},children(n,t){return[].concat(...n.children).filter(e=>e.matches(t))},parents(n,t){const e=[];let i=n.parentNode.closest(t);for(;i;)e.push(i),i=i.parentNode.closest(t);return e},prev(n,t){let e=n.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(n,t){let e=n.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(n){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,n).filter(e=>!Vn(e)&&tr(e))},getSelectorFromElement(n){const t=js(n);return t&&St.findOne(t)?t:null},getElementFromSelector(n){const t=js(n);return t?St.findOne(t):null},getMultipleElementsFromSelector(n){const t=js(n);return t?St.find(t):[]}},Ds=(n,t="hide")=>{const e=`click.dismiss${n.EVENT_KEY}`,i=n.NAME;Z.on(document,e,`[data-bs-dismiss="${i}"]`,function(r){if(["A","AREA"].includes(this.tagName)&&r.preventDefault(),Vn(this))return;const s=St.getElementFromSelector(this)||this.closest(`.${i}`);n.getOrCreateInstance(s)[t]()})},Ff="alert",Bf="bs.alert",Du=`.${Bf}`,Hf=`close${Du}`,zf=`closed${Du}`,Vf="fade",kf="show";class Ns extends rn{static get NAME(){return Ff}close(){if(Z.trigger(this._element,Hf).defaultPrevented)return;this._element.classList.remove(kf);const e=this._element.classList.contains(Vf);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),Z.trigger(this._element,zf),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=Ns.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Ds(Ns,"close");je(Ns);const Gf="button",Wf="bs.button",$f=`.${Wf}`,Xf=".data-api",Yf="active",Yo='[data-bs-toggle="button"]',qf=`click${$f}${Xf}`;class Is extends rn{static get NAME(){return Gf}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Yf))}static jQueryInterface(t){return this.each(function(){const e=Is.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}Z.on(document,qf,Yo,n=>{n.preventDefault();const t=n.target.closest(Yo);Is.getOrCreateInstance(t).toggle()});je(Is);const jf="swipe",er=".bs.swipe",Kf=`touchstart${er}`,Zf=`touchmove${er}`,Jf=`touchend${er}`,Qf=`pointerdown${er}`,td=`pointerup${er}`,ed="touch",nd="pen",id="pointer-event",rd=40,sd={endCallback:null,leftCallback:null,rightCallback:null},ad={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Ss extends br{constructor(t,e){super(),this._element=t,!(!t||!Ss.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return sd}static get DefaultType(){return ad}static get NAME(){return jf}dispose(){Z.off(this._element,er)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),Le(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=rd)return;const e=t/this._deltaX;this._deltaX=0,e&&Le(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(Z.on(this._element,Qf,t=>this._start(t)),Z.on(this._element,td,t=>this._end(t)),this._element.classList.add(id)):(Z.on(this._element,Kf,t=>this._start(t)),Z.on(this._element,Zf,t=>this._move(t)),Z.on(this._element,Jf,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===nd||t.pointerType===ed)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const od="carousel",ld="bs.carousel",$n=`.${ld}`,Nu=".data-api",cd="ArrowLeft",ud="ArrowRight",hd=500,ar="next",mi="prev",Ii="left",ms="right",fd=`slide${$n}`,Ks=`slid${$n}`,dd=`keydown${$n}`,pd=`mouseenter${$n}`,md=`mouseleave${$n}`,_d=`dragstart${$n}`,gd=`load${$n}${Nu}`,vd=`click${$n}${Nu}`,Iu="carousel",Hr="active",Ed="slide",xd="carousel-item-end",Sd="carousel-item-start",Md="carousel-item-next",yd="carousel-item-prev",Uu=".active",Ou=".carousel-item",Td=Uu+Ou,bd=".carousel-item img",Ad=".carousel-indicators",wd="[data-bs-slide], [data-bs-slide-to]",Cd='[data-bs-ride="carousel"]',Rd={[cd]:ms,[ud]:Ii},Ld={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Pd={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Ar extends rn{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=St.findOne(Ad,this._element),this._addEventListeners(),this._config.ride===Iu&&this.cycle()}static get Default(){return Ld}static get DefaultType(){return Pd}static get NAME(){return od}next(){this._slide(ar)}nextWhenVisible(){!document.hidden&&tr(this._element)&&this.next()}prev(){this._slide(mi)}pause(){this._isSliding&&Mu(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){Z.one(this._element,Ks,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){Z.one(this._element,Ks,()=>this.to(t));return}const i=this._getItemIndex(this._getActive());if(i===t)return;const r=t>i?ar:mi;this._slide(r,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&Z.on(this._element,dd,t=>this._keydown(t)),this._config.pause==="hover"&&(Z.on(this._element,pd,()=>this.pause()),Z.on(this._element,md,()=>this._maybeEnableCycle())),this._config.touch&&Ss.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const i of St.find(bd,this._element))Z.on(i,_d,r=>r.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(Ii)),rightCallback:()=>this._slide(this._directionToOrder(ms)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),hd+this._config.interval))}};this._swipeHelper=new Ss(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=Rd[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=St.findOne(Uu,this._indicatorsElement);e.classList.remove(Hr),e.removeAttribute("aria-current");const i=St.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(Hr),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),r=t===ar,s=e||fo(this._getItems(),i,r,this._config.wrap);if(s===i)return;const o=this._getItemIndex(s),a=m=>Z.trigger(this._element,m,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(a(fd).defaultPrevented||!i||!s)return;const c=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=s;const u=r?Sd:xd,f=r?Md:yd;s.classList.add(f),Tr(s),i.classList.add(u),s.classList.add(u);const p=()=>{s.classList.remove(u,f),s.classList.add(Hr),i.classList.remove(Hr,f,u),this._isSliding=!1,a(Ks)};this._queueCallback(p,i,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(Ed)}_getActive(){return St.findOne(Td,this._element)}_getItems(){return St.find(Ou,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return Ye()?t===Ii?mi:ar:t===Ii?ar:mi}_orderToDirection(t){return Ye()?t===mi?Ii:ms:t===mi?ms:Ii}static jQueryInterface(t){return this.each(function(){const e=Ar.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}Z.on(document,vd,wd,function(n){const t=St.getElementFromSelector(this);if(!t||!t.classList.contains(Iu))return;n.preventDefault();const e=Ar.getOrCreateInstance(t),i=this.getAttribute("data-bs-slide-to");if(i){e.to(i),e._maybeEnableCycle();return}if(yn.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});Z.on(window,gd,()=>{const n=St.find(Cd);for(const t of n)Ar.getOrCreateInstance(t)});je(Ar);const Dd="collapse",Nd="bs.collapse",wr=`.${Nd}`,Id=".data-api",Ud=`show${wr}`,Od=`shown${wr}`,Fd=`hide${wr}`,Bd=`hidden${wr}`,Hd=`click${wr}${Id}`,Zs="show",Fi="collapse",zr="collapsing",zd="collapsed",Vd=`:scope .${Fi} .${Fi}`,kd="collapse-horizontal",Gd="width",Wd="height",$d=".collapse.show, .collapse.collapsing",$a='[data-bs-toggle="collapse"]',Xd={parent:null,toggle:!0},Yd={parent:"(null|element)",toggle:"boolean"};class Er extends rn{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const i=St.find($a);for(const r of i){const s=St.getSelectorFromElement(r),o=St.find(s).filter(a=>a===this._element);s!==null&&o.length&&this._triggerArray.push(r)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Xd}static get DefaultType(){return Yd}static get NAME(){return Dd}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren($d).filter(a=>a!==this._element).map(a=>Er.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||Z.trigger(this._element,Ud).defaultPrevented)return;for(const a of t)a.hide();const i=this._getDimension();this._element.classList.remove(Fi),this._element.classList.add(zr),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(zr),this._element.classList.add(Fi,Zs),this._element.style[i]="",Z.trigger(this._element,Od)},o=`scroll${i[0].toUpperCase()+i.slice(1)}`;this._queueCallback(r,this._element,!0),this._element.style[i]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||Z.trigger(this._element,Fd).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,Tr(this._element),this._element.classList.add(zr),this._element.classList.remove(Fi,Zs);for(const r of this._triggerArray){const s=St.getElementFromSelector(r);s&&!this._isShown(s)&&this._addAriaAndCollapsedClass([r],!1)}this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(zr),this._element.classList.add(Fi),Z.trigger(this._element,Bd)};this._element.style[e]="",this._queueCallback(i,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Zs)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=zn(t.parent),t}_getDimension(){return this._element.classList.contains(kd)?Gd:Wd}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren($a);for(const e of t){const i=St.getElementFromSelector(e);i&&this._addAriaAndCollapsedClass([e],this._isShown(i))}}_getFirstLevelChildren(t){const e=St.find(Vd,this._config.parent);return St.find(t,this._config.parent).filter(i=>!e.includes(i))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle(zd,!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const i=Er.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof i[t]>"u")throw new TypeError(`No method named "${t}"`);i[t]()}})}}Z.on(document,Hd,$a,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();for(const t of St.getMultipleElementsFromSelector(this))Er.getOrCreateInstance(t,{toggle:!1}).toggle()});je(Er);const qo="dropdown",qd="bs.dropdown",di=`.${qd}`,mo=".data-api",jd="Escape",jo="Tab",Kd="ArrowUp",Ko="ArrowDown",Zd=2,Jd=`hide${di}`,Qd=`hidden${di}`,tp=`show${di}`,ep=`shown${di}`,Fu=`click${di}${mo}`,Bu=`keydown${di}${mo}`,np=`keyup${di}${mo}`,Ui="show",ip="dropup",rp="dropend",sp="dropstart",ap="dropup-center",op="dropdown-center",ii='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',lp=`${ii}.${Ui}`,_s=".dropdown-menu",cp=".navbar",up=".navbar-nav",hp=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",fp=Ye()?"top-end":"top-start",dp=Ye()?"top-start":"top-end",pp=Ye()?"bottom-end":"bottom-start",mp=Ye()?"bottom-start":"bottom-end",_p=Ye()?"left-start":"right-start",gp=Ye()?"right-start":"left-start",vp="top",Ep="bottom",xp={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Sp={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class ln extends rn{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=St.next(this._element,_s)[0]||St.prev(this._element,_s)[0]||St.findOne(_s,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return xp}static get DefaultType(){return Sp}static get NAME(){return qo}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Vn(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!Z.trigger(this._element,tp,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(up))for(const i of[].concat(...document.body.children))Z.on(i,"mouseover",xs);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ui),this._element.classList.add(Ui),Z.trigger(this._element,ep,t)}}hide(){if(Vn(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!Z.trigger(this._element,Jd,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))Z.off(i,"mouseover",xs);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ui),this._element.classList.remove(Ui),this._element.setAttribute("aria-expanded","false"),yn.removeDataAttribute(this._menu,"popper"),Z.trigger(this._element,Qd,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!Mn(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${qo.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof xu>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let t=this._element;this._config.reference==="parent"?t=this._parent:Mn(this._config.reference)?t=zn(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=ho(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Ui)}_getPlacement(){const t=this._parent;if(t.classList.contains(rp))return _p;if(t.classList.contains(sp))return gp;if(t.classList.contains(ap))return vp;if(t.classList.contains(op))return Ep;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(ip)?e?dp:fp:e?mp:pp}_detectNavbar(){return this._element.closest(cp)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(yn.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...Le(this._config.popperConfig,[void 0,t])}}_selectMenuItem({key:t,target:e}){const i=St.find(hp,this._menu).filter(r=>tr(r));i.length&&fo(i,e,t===Ko,!i.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=ln.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===Zd||t.type==="keyup"&&t.key!==jo)return;const e=St.find(lp);for(const i of e){const r=ln.getInstance(i);if(!r||r._config.autoClose===!1)continue;const s=t.composedPath(),o=s.includes(r._menu);if(s.includes(r._element)||r._config.autoClose==="inside"&&!o||r._config.autoClose==="outside"&&o||r._menu.contains(t.target)&&(t.type==="keyup"&&t.key===jo||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:r._element};t.type==="click"&&(a.clickEvent=t),r._completeHide(a)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i=t.key===jd,r=[Kd,Ko].includes(t.key);if(!r&&!i||e&&!i)return;t.preventDefault();const s=this.matches(ii)?this:St.prev(this,ii)[0]||St.next(this,ii)[0]||St.findOne(ii,t.delegateTarget.parentNode),o=ln.getOrCreateInstance(s);if(r){t.stopPropagation(),o.show(),o._selectMenuItem(t);return}o._isShown()&&(t.stopPropagation(),o.hide(),s.focus())}}Z.on(document,Bu,ii,ln.dataApiKeydownHandler);Z.on(document,Bu,_s,ln.dataApiKeydownHandler);Z.on(document,Fu,ln.clearMenus);Z.on(document,np,ln.clearMenus);Z.on(document,Fu,ii,function(n){n.preventDefault(),ln.getOrCreateInstance(this).toggle()});je(ln);const Hu="backdrop",Mp="fade",Zo="show",Jo=`mousedown.bs.${Hu}`,yp={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Tp={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class zu extends br{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return yp}static get DefaultType(){return Tp}static get NAME(){return Hu}show(t){if(!this._config.isVisible){Le(t);return}this._append();const e=this._getElement();this._config.isAnimated&&Tr(e),e.classList.add(Zo),this._emulateAnimation(()=>{Le(t)})}hide(t){if(!this._config.isVisible){Le(t);return}this._getElement().classList.remove(Zo),this._emulateAnimation(()=>{this.dispose(),Le(t)})}dispose(){this._isAppended&&(Z.off(this._element,Jo),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Mp),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=zn(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),Z.on(t,Jo,()=>{Le(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){bu(t,this._getElement(),this._config.isAnimated)}}const bp="focustrap",Ap="bs.focustrap",Ms=`.${Ap}`,wp=`focusin${Ms}`,Cp=`keydown.tab${Ms}`,Rp="Tab",Lp="forward",Qo="backward",Pp={autofocus:!0,trapElement:null},Dp={autofocus:"boolean",trapElement:"element"};class Vu extends br{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Pp}static get DefaultType(){return Dp}static get NAME(){return bp}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),Z.off(document,Ms),Z.on(document,wp,t=>this._handleFocusin(t)),Z.on(document,Cp,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,Z.off(document,Ms))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=St.focusableChildren(e);i.length===0?e.focus():this._lastTabNavDirection===Qo?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){t.key===Rp&&(this._lastTabNavDirection=t.shiftKey?Qo:Lp)}}const tl=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",el=".sticky-top",Vr="padding-right",nl="margin-right";class Xa{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Vr,e=>e+t),this._setElementAttributes(tl,Vr,e=>e+t),this._setElementAttributes(el,nl,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Vr),this._resetElementAttributes(tl,Vr),this._resetElementAttributes(el,nl)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const r=this.getWidth(),s=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+r)return;this._saveInitialAttribute(o,e);const a=window.getComputedStyle(o).getPropertyValue(e);o.style.setProperty(e,`${i(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,s)}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&yn.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){const i=r=>{const s=yn.getDataAttribute(r,e);if(s===null){r.style.removeProperty(e);return}yn.removeDataAttribute(r,e),r.style.setProperty(e,s)};this._applyManipulationCallback(t,i)}_applyManipulationCallback(t,e){if(Mn(t)){e(t);return}for(const i of St.find(t,this._element))e(i)}}const Np="modal",Ip="bs.modal",qe=`.${Ip}`,Up=".data-api",Op="Escape",Fp=`hide${qe}`,Bp=`hidePrevented${qe}`,ku=`hidden${qe}`,Gu=`show${qe}`,Hp=`shown${qe}`,zp=`resize${qe}`,Vp=`click.dismiss${qe}`,kp=`mousedown.dismiss${qe}`,Gp=`keydown.dismiss${qe}`,Wp=`click${qe}${Up}`,il="modal-open",$p="fade",rl="show",Js="modal-static",Xp=".modal.show",Yp=".modal-dialog",qp=".modal-body",jp='[data-bs-toggle="modal"]',Kp={backdrop:!0,focus:!0,keyboard:!0},Zp={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class kn extends rn{constructor(t,e){super(t,e),this._dialog=St.findOne(Yp,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Xa,this._addEventListeners()}static get Default(){return Kp}static get DefaultType(){return Zp}static get NAME(){return Np}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||Z.trigger(this._element,Gu,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(il),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||Z.trigger(this._element,Fp).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(rl),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){Z.off(window,qe),Z.off(this._dialog,qe),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new zu({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Vu({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=St.findOne(qp,this._dialog);e&&(e.scrollTop=0),Tr(this._element),this._element.classList.add(rl);const i=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,Z.trigger(this._element,Hp,{relatedTarget:t})};this._queueCallback(i,this._dialog,this._isAnimated())}_addEventListeners(){Z.on(this._element,Gp,t=>{if(t.key===Op){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),Z.on(window,zp,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),Z.on(this._element,kp,t=>{Z.one(this._element,Vp,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(il),this._resetAdjustments(),this._scrollBar.reset(),Z.trigger(this._element,ku)})}_isAnimated(){return this._element.classList.contains($p)}_triggerBackdropTransition(){if(Z.trigger(this._element,Bp).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,i=this._element.style.overflowY;i==="hidden"||this._element.classList.contains(Js)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(Js),this._queueCallback(()=>{this._element.classList.remove(Js),this._queueCallback(()=>{this._element.style.overflowY=i},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const r=Ye()?"paddingLeft":"paddingRight";this._element.style[r]=`${e}px`}if(!i&&t){const r=Ye()?"paddingRight":"paddingLeft";this._element.style[r]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const i=kn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof i[t]>"u")throw new TypeError(`No method named "${t}"`);i[t](e)}})}}Z.on(document,Wp,jp,function(n){const t=St.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),Z.one(t,Gu,r=>{r.defaultPrevented||Z.one(t,ku,()=>{tr(this)&&this.focus()})});const e=St.findOne(Xp);e&&kn.getInstance(e).hide(),kn.getOrCreateInstance(t).toggle(this)});Ds(kn);je(kn);const Jp="offcanvas",Qp="bs.offcanvas",wn=`.${Qp}`,Wu=".data-api",tm=`load${wn}${Wu}`,em="Escape",sl="show",al="showing",ol="hiding",nm="offcanvas-backdrop",$u=".offcanvas.show",im=`show${wn}`,rm=`shown${wn}`,sm=`hide${wn}`,ll=`hidePrevented${wn}`,Xu=`hidden${wn}`,am=`resize${wn}`,om=`click${wn}${Wu}`,lm=`keydown.dismiss${wn}`,cm='[data-bs-toggle="offcanvas"]',um={backdrop:!0,keyboard:!0,scroll:!1},hm={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class bn extends rn{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return um}static get DefaultType(){return hm}static get NAME(){return Jp}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||Z.trigger(this._element,im,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Xa().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(al);const i=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(sl),this._element.classList.remove(al),Z.trigger(this._element,rm,{relatedTarget:t})};this._queueCallback(i,this._element,!0)}hide(){if(!this._isShown||Z.trigger(this._element,sm).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(ol),this._backdrop.hide();const e=()=>{this._element.classList.remove(sl,ol),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Xa().reset(),Z.trigger(this._element,Xu)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){Z.trigger(this._element,ll);return}this.hide()},e=!!this._config.backdrop;return new zu({className:nm,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new Vu({trapElement:this._element})}_addEventListeners(){Z.on(this._element,lm,t=>{if(t.key===em){if(this._config.keyboard){this.hide();return}Z.trigger(this._element,ll)}})}static jQueryInterface(t){return this.each(function(){const e=bn.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Z.on(document,om,cm,function(n){const t=St.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),Vn(this))return;Z.one(t,Xu,()=>{tr(this)&&this.focus()});const e=St.findOne($u);e&&e!==t&&bn.getInstance(e).hide(),bn.getOrCreateInstance(t).toggle(this)});Z.on(window,tm,()=>{for(const n of St.find($u))bn.getOrCreateInstance(n).show()});Z.on(window,am,()=>{for(const n of St.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&bn.getOrCreateInstance(n).hide()});Ds(bn);je(bn);const fm=/^aria-[\w-]*$/i,Yu={"*":["class","dir","id","lang","role",fm],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},dm=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),pm=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,mm=(n,t)=>{const e=n.nodeName.toLowerCase();return t.includes(e)?dm.has(e)?!!pm.test(n.nodeValue):!0:t.filter(i=>i instanceof RegExp).some(i=>i.test(e))};function _m(n,t,e){if(!n.length)return n;if(e&&typeof e=="function")return e(n);const r=new window.DOMParser().parseFromString(n,"text/html"),s=[].concat(...r.body.querySelectorAll("*"));for(const o of s){const a=o.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){o.remove();continue}const l=[].concat(...o.attributes),c=[].concat(t["*"]||[],t[a]||[]);for(const u of l)mm(u,c)||o.removeAttribute(u.nodeName)}return r.body.innerHTML}const gm="TemplateFactory",vm={allowList:Yu,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Em={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},xm={entry:"(string|element|function|null)",selector:"(string|element)"};class Sm extends br{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return vm}static get DefaultType(){return Em}static get NAME(){return gm}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[r,s]of Object.entries(this._config.content))this._setContent(t,s,r);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},xm)}_setContent(t,e,i){const r=St.findOne(i,t);if(r){if(e=this._resolvePossibleFunction(e),!e){r.remove();return}if(Mn(e)){this._putElementInTemplate(zn(e),r);return}if(this._config.html){r.innerHTML=this._maybeSanitize(e);return}r.textContent=e}}_maybeSanitize(t){return this._config.sanitize?_m(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return Le(t,[void 0,this])}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const Mm="tooltip",ym=new Set(["sanitize","allowList","sanitizeFn"]),Qs="fade",Tm="modal",kr="show",bm=".tooltip-inner",cl=`.${Tm}`,ul="hide.bs.modal",or="hover",ta="focus",ea="click",Am="manual",wm="hide",Cm="hidden",Rm="show",Lm="shown",Pm="inserted",Dm="click",Nm="focusin",Im="focusout",Um="mouseenter",Om="mouseleave",Fm={AUTO:"auto",TOP:"top",RIGHT:Ye()?"left":"right",BOTTOM:"bottom",LEFT:Ye()?"right":"left"},Bm={allowList:Yu,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Hm={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class nr extends rn{constructor(t,e){if(typeof xu>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Bm}static get DefaultType(){return Hm}static get NAME(){return Mm}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),Z.off(this._element.closest(cl),ul,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=Z.trigger(this._element,this.constructor.eventName(Rm)),i=(yu(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!i)return;this._disposePopper();const r=this._getTipElement();this._element.setAttribute("aria-describedby",r.getAttribute("id"));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(r),Z.trigger(this._element,this.constructor.eventName(Pm))),this._popper=this._createPopper(r),r.classList.add(kr),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))Z.on(a,"mouseover",xs);const o=()=>{Z.trigger(this._element,this.constructor.eventName(Lm)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||Z.trigger(this._element,this.constructor.eventName(wm)).defaultPrevented)return;if(this._getTipElement().classList.remove(kr),"ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))Z.off(r,"mouseover",xs);this._activeTrigger[ea]=!1,this._activeTrigger[ta]=!1,this._activeTrigger[or]=!1,this._isHovered=null;const i=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),Z.trigger(this._element,this.constructor.eventName(Cm)))};this._queueCallback(i,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Qs,kr),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=Af(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(Qs),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Sm({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[bm]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Qs)}_isShown(){return this.tip&&this.tip.classList.contains(kr)}_createPopper(t){const e=Le(this._config.placement,[this,t,this._element]),i=Fm[e.toUpperCase()];return ho(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return Le(t,[this._element,this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:i=>{this._getTipElement().setAttribute("data-popper-placement",i.state.placement)}}]};return{...e,...Le(this._config.popperConfig,[void 0,e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")Z.on(this._element,this.constructor.eventName(Dm),this._config.selector,i=>{const r=this._initializeOnDelegatedTarget(i);r._activeTrigger[ea]=!(r._isShown()&&r._activeTrigger[ea]),r.toggle()});else if(e!==Am){const i=e===or?this.constructor.eventName(Um):this.constructor.eventName(Nm),r=e===or?this.constructor.eventName(Om):this.constructor.eventName(Im);Z.on(this._element,i,this._config.selector,s=>{const o=this._initializeOnDelegatedTarget(s);o._activeTrigger[s.type==="focusin"?ta:or]=!0,o._enter()}),Z.on(this._element,r,this._config.selector,s=>{const o=this._initializeOnDelegatedTarget(s);o._activeTrigger[s.type==="focusout"?ta:or]=o._element.contains(s.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},Z.on(this._element.closest(cl),ul,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=yn.getDataAttributes(this._element);for(const i of Object.keys(e))ym.has(i)&&delete e[i];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:zn(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,i]of Object.entries(this._config))this.constructor.Default[e]!==i&&(t[e]=i);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=nr.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}je(nr);const zm="popover",Vm=".popover-header",km=".popover-body",Gm={...nr.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Wm={...nr.DefaultType,content:"(null|string|element|function)"};class _o extends nr{static get Default(){return Gm}static get DefaultType(){return Wm}static get NAME(){return zm}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Vm]:this._getTitle(),[km]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=_o.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}je(_o);const $m="scrollspy",Xm="bs.scrollspy",go=`.${Xm}`,Ym=".data-api",qm=`activate${go}`,hl=`click${go}`,jm=`load${go}${Ym}`,Km="dropdown-item",_i="active",Zm='[data-bs-spy="scroll"]',na="[href]",Jm=".nav, .list-group",fl=".nav-link",Qm=".nav-item",t_=".list-group-item",e_=`${fl}, ${Qm} > ${fl}, ${t_}`,n_=".dropdown",i_=".dropdown-toggle",r_={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},s_={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Us extends rn{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return r_}static get DefaultType(){return s_}static get NAME(){return $m}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=zn(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(Z.off(this._config.target,hl),Z.on(this._config.target,hl,na,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,r=e.offsetTop-this._element.offsetTop;if(i.scrollTo){i.scrollTo({top:r,behavior:"smooth"});return}i.scrollTop=r}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=o=>this._targetLinks.get(`#${o.target.id}`),i=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(e(o))},r=(this._rootElement||document.documentElement).scrollTop,s=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&a){if(i(o),!r)return;continue}!s&&!a&&i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=St.find(na,this._config.target);for(const e of t){if(!e.hash||Vn(e))continue;const i=St.findOne(decodeURI(e.hash),this._element);tr(i)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,i))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(_i),this._activateParents(t),Z.trigger(this._element,qm,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(Km)){St.findOne(i_,t.closest(n_)).classList.add(_i);return}for(const e of St.parents(t,Jm))for(const i of St.prev(e,e_))i.classList.add(_i)}_clearActiveClass(t){t.classList.remove(_i);const e=St.find(`${na}.${_i}`,t);for(const i of e)i.classList.remove(_i)}static jQueryInterface(t){return this.each(function(){const e=Us.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}Z.on(window,jm,()=>{for(const n of St.find(Zm))Us.getOrCreateInstance(n)});je(Us);const a_="tab",o_="bs.tab",pi=`.${o_}`,l_=`hide${pi}`,c_=`hidden${pi}`,u_=`show${pi}`,h_=`shown${pi}`,f_=`click${pi}`,d_=`keydown${pi}`,p_=`load${pi}`,m_="ArrowLeft",dl="ArrowRight",__="ArrowUp",pl="ArrowDown",ia="Home",ml="End",ri="active",_l="fade",ra="show",g_="dropdown",qu=".dropdown-toggle",v_=".dropdown-menu",sa=`:not(${qu})`,E_='.list-group, .nav, [role="tablist"]',x_=".nav-item, .list-group-item",S_=`.nav-link${sa}, .list-group-item${sa}, [role="tab"]${sa}`,ju='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',aa=`${S_}, ${ju}`,M_=`.${ri}[data-bs-toggle="tab"], .${ri}[data-bs-toggle="pill"], .${ri}[data-bs-toggle="list"]`;class qi extends rn{constructor(t){super(t),this._parent=this._element.closest(E_),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),Z.on(this._element,d_,e=>this._keydown(e)))}static get NAME(){return a_}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?Z.trigger(e,l_,{relatedTarget:t}):null;Z.trigger(t,u_,{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(ri),this._activate(St.getElementFromSelector(t));const i=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(ra);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),Z.trigger(t,h_,{relatedTarget:e})};this._queueCallback(i,t,t.classList.contains(_l))}_deactivate(t,e){if(!t)return;t.classList.remove(ri),t.blur(),this._deactivate(St.getElementFromSelector(t));const i=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(ra);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),Z.trigger(t,c_,{relatedTarget:e})};this._queueCallback(i,t,t.classList.contains(_l))}_keydown(t){if(![m_,dl,__,pl,ia,ml].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter(r=>!Vn(r));let i;if([ia,ml].includes(t.key))i=e[t.key===ia?0:e.length-1];else{const r=[dl,pl].includes(t.key);i=fo(e,t.target,r,!0)}i&&(i.focus({preventScroll:!0}),qi.getOrCreateInstance(i).show())}_getChildren(){return St.find(aa,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const i of e)this._setInitialAttributesOnChild(i)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=St.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains(g_))return;const r=(s,o)=>{const a=St.findOne(s,i);a&&a.classList.toggle(o,e)};r(qu,ri),r(v_,ra),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(ri)}_getInnerElement(t){return t.matches(aa)?t:St.findOne(aa,t)}_getOuterElement(t){return t.closest(x_)||t}static jQueryInterface(t){return this.each(function(){const e=qi.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}Z.on(document,f_,ju,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!Vn(this)&&qi.getOrCreateInstance(this).show()});Z.on(window,p_,()=>{for(const n of St.find(M_))qi.getOrCreateInstance(n)});je(qi);const y_="toast",T_="bs.toast",Xn=`.${T_}`,b_=`mouseover${Xn}`,A_=`mouseout${Xn}`,w_=`focusin${Xn}`,C_=`focusout${Xn}`,R_=`hide${Xn}`,L_=`hidden${Xn}`,P_=`show${Xn}`,D_=`shown${Xn}`,N_="fade",gl="hide",Gr="show",Wr="showing",I_={animation:"boolean",autohide:"boolean",delay:"number"},U_={animation:!0,autohide:!0,delay:5e3};class Cr extends rn{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return U_}static get DefaultType(){return I_}static get NAME(){return y_}show(){if(Z.trigger(this._element,P_).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(N_);const e=()=>{this._element.classList.remove(Wr),Z.trigger(this._element,D_),this._maybeScheduleHide()};this._element.classList.remove(gl),Tr(this._element),this._element.classList.add(Gr,Wr),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||Z.trigger(this._element,R_).defaultPrevented)return;const e=()=>{this._element.classList.add(gl),this._element.classList.remove(Wr,Gr),Z.trigger(this._element,L_)};this._element.classList.add(Wr),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Gr),super.dispose()}isShown(){return this._element.classList.contains(Gr)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){Z.on(this._element,b_,t=>this._onInteraction(t,!0)),Z.on(this._element,A_,t=>this._onInteraction(t,!1)),Z.on(this._element,w_,t=>this._onInteraction(t,!0)),Z.on(this._element,C_,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=Cr.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Ds(Cr);je(Cr);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vo="160",O_=0,vl=1,F_=2,Ku=1,B_=2,gn=3,Gn=0,Pe=1,vn=2,Fn=0,zi=1,El=2,xl=3,Sl=4,H_=5,ei=100,z_=101,V_=102,Ml=103,yl=104,k_=200,G_=201,W_=202,$_=203,Ya=204,qa=205,X_=206,Y_=207,q_=208,j_=209,K_=210,Z_=211,J_=212,Q_=213,tg=214,eg=0,ng=1,ig=2,ys=3,rg=4,sg=5,ag=6,og=7,Zu=0,lg=1,cg=2,Bn=0,ug=1,hg=2,fg=3,dg=4,pg=5,mg=6,Ju=300,ji=301,Ki=302,ja=303,Ka=304,Os=306,Ts=1e3,tn=1001,Za=1002,be=1003,Tl=1004,oa=1005,Ge=1006,_g=1007,xr=1008,Hn=1009,gg=1010,vg=1011,Eo=1012,Qu=1013,Un=1014,On=1015,Sr=1016,th=1017,eh=1018,ai=1020,Eg=1021,en=1023,xg=1024,Sg=1025,oi=1026,Zi=1027,Mg=1028,nh=1029,yg=1030,ih=1031,rh=1033,la=33776,ca=33777,ua=33778,ha=33779,bl=35840,Al=35841,wl=35842,Cl=35843,sh=36196,Rl=37492,Ll=37496,Pl=37808,Dl=37809,Nl=37810,Il=37811,Ul=37812,Ol=37813,Fl=37814,Bl=37815,Hl=37816,zl=37817,Vl=37818,kl=37819,Gl=37820,Wl=37821,fa=36492,$l=36494,Xl=36495,Tg=36283,Yl=36284,ql=36285,jl=36286,ah=3e3,li=3001,bg=3200,Ag=3201,oh=0,wg=1,$e="",me="srgb",An="srgb-linear",xo="display-p3",Fs="display-p3-linear",bs="linear",te="srgb",As="rec709",ws="p3",gi=7680,Kl=519,Cg=512,Rg=513,Lg=514,lh=515,Pg=516,Dg=517,Ng=518,Ig=519,Zl=35044,Jl="300 es",Ja=1035,xn=2e3,Cs=2001;class ir{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],da=Math.PI/180,Qa=180/Math.PI;function Rr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ve[n&255]+ve[n>>8&255]+ve[n>>16&255]+ve[n>>24&255]+"-"+ve[t&255]+ve[t>>8&255]+"-"+ve[t>>16&15|64]+ve[t>>24&255]+"-"+ve[e&63|128]+ve[e>>8&255]+"-"+ve[e>>16&255]+ve[e>>24&255]+ve[i&255]+ve[i>>8&255]+ve[i>>16&255]+ve[i>>24&255]).toLowerCase()}function Re(n,t,e){return Math.max(t,Math.min(e,n))}function Ug(n,t){return(n%t+t)%t}function pa(n,t,e){return(1-e)*n+e*t}function Ql(n){return(n&n-1)===0&&n!==0}function to(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function lr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ce(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $t{constructor(t=0,e=0){$t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,i,r,s,o,a,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],p=i[2],m=i[5],g=i[8],_=r[0],d=r[3],h=r[6],b=r[1],S=r[4],T=r[7],L=r[2],A=r[5],w=r[8];return s[0]=o*_+a*b+l*L,s[3]=o*d+a*S+l*A,s[6]=o*h+a*T+l*w,s[1]=c*_+u*b+f*L,s[4]=c*d+u*S+f*A,s[7]=c*h+u*T+f*w,s[2]=p*_+m*b+g*L,s[5]=p*d+m*S+g*A,s[8]=p*h+m*T+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,p=a*l-u*s,m=c*s-o*l,g=e*f+i*p+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*c-u*i)*_,t[2]=(a*i-r*o)*_,t[3]=p*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ma.makeScale(t,e)),this}rotate(t){return this.premultiply(ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new Vt;function ch(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Rs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Og(){const n=Rs("canvas");return n.style.display="block",n}const tc={};function vr(n){n in tc||(tc[n]=!0,console.warn(n))}const ec=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nc=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$r={[An]:{transfer:bs,primaries:As,toReference:n=>n,fromReference:n=>n},[me]:{transfer:te,primaries:As,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Fs]:{transfer:bs,primaries:ws,toReference:n=>n.applyMatrix3(nc),fromReference:n=>n.applyMatrix3(ec)},[xo]:{transfer:te,primaries:ws,toReference:n=>n.convertSRGBToLinear().applyMatrix3(nc),fromReference:n=>n.applyMatrix3(ec).convertLinearToSRGB()}},Fg=new Set([An,Fs]),qt={enabled:!0,_workingColorSpace:An,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Fg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=$r[t].toReference,r=$r[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return $r[n].primaries},getTransfer:function(n){return n===$e?bs:$r[n].transfer}};function Vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _a(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let vi;class uh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vi===void 0&&(vi=Rs("canvas")),vi.width=t.width,vi.height=t.height;const i=vi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Rs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vi(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Vi(e[i]/255)*255):e[i]=Vi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Bg=0;class hh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=Rr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ga(r[o].image)):s.push(ga(r[o]))}else s=ga(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function ga(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?uh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hg=0;class De extends ir{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,i=tn,r=tn,s=Ge,o=xr,a=en,l=Hn,c=De.DEFAULT_ANISOTROPY,u=$e){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Rr(),this.name="",this.source=new hh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===li?me:$e),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ju)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ts:t.x=t.x-Math.floor(t.x);break;case tn:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ts:t.y=t.y-Math.floor(t.y);break;case tn:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===me?li:ah}set encoding(t){vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===li?me:$e}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=Ju;De.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,i=0,r=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],p=l[1],m=l[5],g=l[9],_=l[2],d=l[6],h=l[10];if(Math.abs(u-p)<.01&&Math.abs(f-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+_)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,T=(m+1)/2,L=(h+1)/2,A=(u+p)/4,w=(f+_)/4,X=(g+d)/4;return S>T&&S>L?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=A/i,s=w/i):T>L?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=A/r,s=X/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=w/s,r=X/s),this.set(i,r,s,e),this}let b=Math.sqrt((d-g)*(d-g)+(f-_)*(f-_)+(p-u)*(p-u));return Math.abs(b)<.001&&(b=1),this.x=(d-g)/b,this.y=(f-_)/b,this.z=(p-u)/b,this.w=Math.acos((c+m+h-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zg extends ir{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const r={width:t,height:e,depth:1};i.encoding!==void 0&&(vr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===li?me:$e),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new De(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new hh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends zg{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class fh extends De{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=be,this.minFilter=be,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vg extends De{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=be,this.minFilter=be,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lr{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const p=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=p,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==p||c!==m||u!==g){let d=1-a;const h=l*p+c*m+u*g+f*_,b=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const L=Math.sqrt(S),A=Math.atan2(L,h*b);d=Math.sin(d*A)/L,a=Math.sin(a*A)/L}const T=a*b;if(l=l*d+p*T,c=c*d+m*T,u=u*d+g*T,f=f*d+_*T,d===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],p=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+u*f+l*m-c*p,t[e+1]=l*g+u*p+c*f-a*m,t[e+2]=c*g+u*m+a*p-l*f,t[e+3]=u*g-a*f-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),p=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=p*u*f+c*m*g,this._y=c*m*f-p*u*g,this._z=c*u*g+p*m*f,this._w=c*u*f-p*m*g;break;case"YXZ":this._x=p*u*f+c*m*g,this._y=c*m*f-p*u*g,this._z=c*u*g-p*m*f,this._w=c*u*f+p*m*g;break;case"ZXY":this._x=p*u*f-c*m*g,this._y=c*m*f+p*u*g,this._z=c*u*g+p*m*f,this._w=c*u*f-p*m*g;break;case"ZYX":this._x=p*u*f-c*m*g,this._y=c*m*f+p*u*g,this._z=c*u*g-p*m*f,this._w=c*u*f+p*m*g;break;case"YZX":this._x=p*u*f+c*m*g,this._y=c*m*f+p*u*g,this._z=c*u*g-p*m*f,this._w=c*u*f-p*m*g;break;case"XZY":this._x=p*u*f-c*m*g,this._y=c*m*f-p*u*g,this._z=c*u*g+p*m*f,this._w=c*u*f+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],p=i+a+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,p=Math.sin(e*u)/c;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),i*Math.sin(s),i*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,i=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ic.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ic.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),u=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return va.copy(this).projectOnVector(t),this.sub(va)}reflect(t){return this.sub(va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const va=new F,ic=new Lr;class Pr{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ke):Ke.fromBufferAttribute(s,o),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xr.copy(i.boundingBox)),Xr.applyMatrix4(t.matrixWorld),this.union(Xr)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cr),Yr.subVectors(this.max,cr),Ei.subVectors(t.a,cr),xi.subVectors(t.b,cr),Si.subVectors(t.c,cr),Ln.subVectors(xi,Ei),Pn.subVectors(Si,xi),jn.subVectors(Ei,Si);let e=[0,-Ln.z,Ln.y,0,-Pn.z,Pn.y,0,-jn.z,jn.y,Ln.z,0,-Ln.x,Pn.z,0,-Pn.x,jn.z,0,-jn.x,-Ln.y,Ln.x,0,-Pn.y,Pn.x,0,-jn.y,jn.x,0];return!Ea(e,Ei,xi,Si,Yr)||(e=[1,0,0,0,1,0,0,0,1],!Ea(e,Ei,xi,Si,Yr))?!1:(qr.crossVectors(Ln,Pn),e=[qr.x,qr.y,qr.z],Ea(e,Ei,xi,Si,Yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fn=[new F,new F,new F,new F,new F,new F,new F,new F],Ke=new F,Xr=new Pr,Ei=new F,xi=new F,Si=new F,Ln=new F,Pn=new F,jn=new F,cr=new F,Yr=new F,qr=new F,Kn=new F;function Ea(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Kn.fromArray(n,s);const a=r.x*Math.abs(Kn.x)+r.y*Math.abs(Kn.y)+r.z*Math.abs(Kn.z),l=t.dot(Kn),c=e.dot(Kn),u=i.dot(Kn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const kg=new Pr,ur=new F,xa=new F;class So{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):kg.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ur.subVectors(t,this.center);const e=ur.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(ur,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ur.copy(t.center).add(xa)),this.expandByPoint(ur.copy(t.center).sub(xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new F,Sa=new F,jr=new F,Dn=new F,Ma=new F,Kr=new F,ya=new F;class dh{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Sa.copy(t).add(e).multiplyScalar(.5),jr.copy(e).sub(t).normalize(),Dn.copy(this.origin).sub(Sa);const s=t.distanceTo(e)*.5,o=-this.direction.dot(jr),a=Dn.dot(this.direction),l=-Dn.dot(jr),c=Dn.lengthSq(),u=Math.abs(1-o*o);let f,p,m,g;if(u>0)if(f=o*l-a,p=o*a-l,g=s*u,f>=0)if(p>=-g)if(p<=g){const _=1/u;f*=_,p*=_,m=f*(f+o*p+2*a)+p*(o*f+p+2*l)+c}else p=s,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;else p=-s,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;else p<=-g?(f=Math.max(0,-(-o*s+a)),p=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+p*(p+2*l)+c):p<=g?(f=0,p=Math.min(Math.max(-s,-l),s),m=p*(p+2*l)+c):(f=Math.max(0,-(o*s+a)),p=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+p*(p+2*l)+c);else p=o>0?-s:s,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Sa).addScaledVector(jr,p),m}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const i=dn.dot(this.direction),r=dn.dot(dn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(t.min.x-p.x)*c,r=(t.max.x-p.x)*c):(i=(t.max.x-p.x)*c,r=(t.min.x-p.x)*c),u>=0?(s=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(s=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-p.z)*f,l=(t.max.z-p.z)*f):(a=(t.max.z-p.z)*f,l=(t.min.z-p.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,i,r,s){Ma.subVectors(e,t),Kr.subVectors(i,t),ya.crossVectors(Ma,Kr);let o=this.direction.dot(ya),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,t);const l=a*this.direction.dot(Kr.crossVectors(Dn,Kr));if(l<0)return null;const c=a*this.direction.dot(Ma.cross(Dn));if(c<0||l+c>o)return null;const u=-a*Dn.dot(ya);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,i,r,s,o,a,l,c,u,f,p,m,g,_,d){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,u,f,p,m,g,_,d)}set(t,e,i,r,s,o,a,l,c,u,f,p,m,g,_,d){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=p,h[3]=m,h[7]=g,h[11]=_,h[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Mi.setFromMatrixColumn(t,0).length(),s=1/Mi.setFromMatrixColumn(t,1).length(),o=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const p=o*u,m=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=m+g*c,e[5]=p-_*c,e[9]=-a*l,e[2]=_-p*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const p=l*u,m=l*f,g=c*u,_=c*f;e[0]=p+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=_+p*a,e[10]=o*l}else if(t.order==="ZXY"){const p=l*u,m=l*f,g=c*u,_=c*f;e[0]=p-_*a,e[4]=-o*f,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=_-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const p=o*u,m=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=g*c-m,e[8]=p*c+_,e[1]=l*f,e[5]=_*c+p,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const p=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-p*f,e[8]=g*f+m,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*f+g,e[10]=p-_*f}else if(t.order==="XZY"){const p=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=p*f+_,e[5]=o*u,e[9]=m*f-g,e[2]=g*f-m,e[6]=a*u,e[10]=_*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gg,t,Wg)}lookAt(t,e,i){const r=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),Nn.crossVectors(i,Ie),Nn.lengthSq()===0&&(Math.abs(i.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),Nn.crossVectors(i,Ie)),Nn.normalize(),Zr.crossVectors(Ie,Nn),r[0]=Nn.x,r[4]=Zr.x,r[8]=Ie.x,r[1]=Nn.y,r[5]=Zr.y,r[9]=Ie.y,r[2]=Nn.z,r[6]=Zr.z,r[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],p=i[9],m=i[13],g=i[2],_=i[6],d=i[10],h=i[14],b=i[3],S=i[7],T=i[11],L=i[15],A=r[0],w=r[4],X=r[8],E=r[12],M=r[1],H=r[5],U=r[9],W=r[13],R=r[2],O=r[6],V=r[10],q=r[14],$=r[3],j=r[7],K=r[11],rt=r[15];return s[0]=o*A+a*M+l*R+c*$,s[4]=o*w+a*H+l*O+c*j,s[8]=o*X+a*U+l*V+c*K,s[12]=o*E+a*W+l*q+c*rt,s[1]=u*A+f*M+p*R+m*$,s[5]=u*w+f*H+p*O+m*j,s[9]=u*X+f*U+p*V+m*K,s[13]=u*E+f*W+p*q+m*rt,s[2]=g*A+_*M+d*R+h*$,s[6]=g*w+_*H+d*O+h*j,s[10]=g*X+_*U+d*V+h*K,s[14]=g*E+_*W+d*q+h*rt,s[3]=b*A+S*M+T*R+L*$,s[7]=b*w+S*H+T*O+L*j,s[11]=b*X+S*U+T*V+L*K,s[15]=b*E+S*W+T*q+L*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],p=t[10],m=t[14],g=t[3],_=t[7],d=t[11],h=t[15];return g*(+s*l*f-r*c*f-s*a*p+i*c*p+r*a*m-i*l*m)+_*(+e*l*m-e*c*p+s*o*p-r*o*m+r*c*u-s*l*u)+d*(+e*c*f-e*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+h*(-r*a*u-e*l*f+e*a*p+r*o*f-i*o*p+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],p=t[10],m=t[11],g=t[12],_=t[13],d=t[14],h=t[15],b=f*d*c-_*p*c+_*l*m-a*d*m-f*l*h+a*p*h,S=g*p*c-u*d*c-g*l*m+o*d*m+u*l*h-o*p*h,T=u*_*c-g*f*c+g*a*m-o*_*m-u*a*h+o*f*h,L=g*f*l-u*_*l-g*a*p+o*_*p+u*a*d-o*f*d,A=e*b+i*S+r*T+s*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=b*w,t[1]=(_*p*s-f*d*s-_*r*m+i*d*m+f*r*h-i*p*h)*w,t[2]=(a*d*s-_*l*s+_*r*c-i*d*c-a*r*h+i*l*h)*w,t[3]=(f*l*s-a*p*s-f*r*c+i*p*c+a*r*m-i*l*m)*w,t[4]=S*w,t[5]=(u*d*s-g*p*s+g*r*m-e*d*m-u*r*h+e*p*h)*w,t[6]=(g*l*s-o*d*s-g*r*c+e*d*c+o*r*h-e*l*h)*w,t[7]=(o*p*s-u*l*s+u*r*c-e*p*c-o*r*m+e*l*m)*w,t[8]=T*w,t[9]=(g*f*s-u*_*s-g*i*m+e*_*m+u*i*h-e*f*h)*w,t[10]=(o*_*s-g*a*s+g*i*c-e*_*c-o*i*h+e*a*h)*w,t[11]=(u*a*s-o*f*s-u*i*c+e*f*c+o*i*m-e*a*m)*w,t[12]=L*w,t[13]=(u*_*r-g*f*r+g*i*p-e*_*p-u*i*d+e*f*d)*w,t[14]=(g*a*r-o*_*r-g*i*l+e*_*l+o*i*d-e*a*d)*w,t[15]=(o*f*r-u*a*r+u*i*l-e*f*l-o*i*p+e*a*p)*w,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,p=s*c,m=s*u,g=s*f,_=o*u,d=o*f,h=a*f,b=l*c,S=l*u,T=l*f,L=i.x,A=i.y,w=i.z;return r[0]=(1-(_+h))*L,r[1]=(m+T)*L,r[2]=(g-S)*L,r[3]=0,r[4]=(m-T)*A,r[5]=(1-(p+h))*A,r[6]=(d+b)*A,r[7]=0,r[8]=(g+S)*w,r[9]=(d-b)*w,r[10]=(1-(p+_))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Mi.set(r[0],r[1],r[2]).length();const o=Mi.set(r[4],r[5],r[6]).length(),a=Mi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ze.copy(this);const c=1/s,u=1/o,f=1/a;return Ze.elements[0]*=c,Ze.elements[1]*=c,Ze.elements[2]*=c,Ze.elements[4]*=u,Ze.elements[5]*=u,Ze.elements[6]*=u,Ze.elements[8]*=f,Ze.elements[9]*=f,Ze.elements[10]*=f,e.setFromRotationMatrix(Ze),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=xn){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),f=(e+t)/(e-t),p=(i+r)/(i-r);let m,g;if(a===xn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Cs)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=xn){const l=this.elements,c=1/(e-t),u=1/(i-r),f=1/(o-s),p=(e+t)*c,m=(i+r)*u;let g,_;if(a===xn)g=(o+s)*f,_=-2*f;else if(a===Cs)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Mi=new F,Ze=new oe,Gg=new F(0,0,0),Wg=new F(1,1,1),Nn=new F,Zr=new F,Ie=new F,rc=new oe,sc=new Lr;class Bs{constructor(t=0,e=0,i=0,r=Bs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],p=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Re(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return rc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sc.setFromEuler(this),this.setFromQuaternion(sc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bs.DEFAULT_ORDER="XYZ";class Mo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $g=0;const ac=new F,yi=new Lr,pn=new oe,Jr=new F,hr=new F,Xg=new F,Yg=new Lr,oc=new F(1,0,0),lc=new F(0,1,0),cc=new F(0,0,1),qg={type:"added"},jg={type:"removed"};class _e extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=Rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new F,e=new Bs,i=new Lr,r=new F(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new oe},normalMatrix:{value:new Vt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.multiply(yi),this}rotateOnWorldAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.premultiply(yi),this}rotateX(t){return this.rotateOnAxis(oc,t)}rotateY(t){return this.rotateOnAxis(lc,t)}rotateZ(t){return this.rotateOnAxis(cc,t)}translateOnAxis(t,e){return ac.copy(t).applyQuaternion(this.quaternion),this.position.add(ac.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oc,t)}translateY(t){return this.translateOnAxis(lc,t)}translateZ(t){return this.translateOnAxis(cc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Jr.copy(t):Jr.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(hr,Jr,this.up):pn.lookAt(Jr,hr,this.up),this.quaternion.setFromRotationMatrix(pn),r&&(pn.extractRotation(r.matrixWorld),yi.setFromRotationMatrix(pn),this.quaternion.premultiply(yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(qg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jg)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,Xg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Yg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),p=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}_e.DEFAULT_UP=new F(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Je=new F,mn=new F,Ta=new F,_n=new F,Ti=new F,bi=new F,uc=new F,ba=new F,Aa=new F,wa=new F;let Qr=!1;class Qe{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Je.subVectors(t,e),r.cross(Je);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Je.subVectors(r,e),mn.subVectors(i,e),Ta.subVectors(t,e);const o=Je.dot(Je),a=Je.dot(mn),l=Je.dot(Ta),c=mn.dot(mn),u=mn.dot(Ta),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const p=1/f,m=(c*l-a*u)*p,g=(o*u-a*l)*p;return s.set(1-m-g,g,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getUV(t,e,i,r,s,o,a,l){return Qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qr=!0),this.getInterpolation(t,e,i,r,s,o,a,l)}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_n.x),l.addScaledVector(o,_n.y),l.addScaledVector(a,_n.z),l)}static isFrontFacing(t,e,i,r){return Je.subVectors(i,e),mn.subVectors(t,e),Je.cross(mn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Je.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,r,s){return Qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qr=!0),Qe.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}getInterpolation(t,e,i,r,s){return Qe.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Ti.subVectors(r,i),bi.subVectors(s,i),ba.subVectors(t,i);const l=Ti.dot(ba),c=bi.dot(ba);if(l<=0&&c<=0)return e.copy(i);Aa.subVectors(t,r);const u=Ti.dot(Aa),f=bi.dot(Aa);if(u>=0&&f<=u)return e.copy(r);const p=l*f-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Ti,o);wa.subVectors(t,s);const m=Ti.dot(wa),g=bi.dot(wa);if(g>=0&&m<=g)return e.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(bi,a);const d=u*g-m*f;if(d<=0&&f-u>=0&&m-g>=0)return uc.subVectors(s,r),a=(f-u)/(f-u+(m-g)),e.copy(r).addScaledVector(uc,a);const h=1/(d+_+p);return o=_*h,a=p*h,e.copy(i).addScaledVector(Ti,o).addScaledVector(bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},ts={h:0,s:0,l:0};function Ca(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Wt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,qt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=qt.workingColorSpace){if(t=Ug(t,1),e=Re(e,0,1),i=Re(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Ca(o,s,t+1/3),this.g=Ca(o,s,t),this.b=Ca(o,s,t-1/3)}return qt.toWorkingColorSpace(this,r),this}setStyle(t,e=me){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){const i=ph[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}copyLinearToSRGB(t){return this.r=_a(t.r),this.g=_a(t.g),this.b=_a(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return qt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(Re(Ee.r*255,0,255))*65536+Math.round(Re(Ee.g*255,0,255))*256+Math.round(Re(Ee.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Ee.copy(this),e);const i=Ee.r,r=Ee.g,s=Ee.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=me){qt.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,i=Ee.g,r=Ee.b;return t!==me?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(ts);const i=pa(In.h,ts.h,e),r=pa(In.s,ts.s,e),s=pa(In.l,ts.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new Wt;Wt.NAMES=ph;let Kg=0;class Dr extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=Rr(),this.name="",this.type="Material",this.blending=zi,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ya,this.blendDst=qa,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(i.blending=this.blending),this.side!==Gn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ya&&(i.blendSrc=this.blendSrc),this.blendDst!==qa&&(i.blendDst=this.blendDst),this.blendEquation!==ei&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ki extends Dr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const se=new F,es=new $t;class cn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Zl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)es.fromBufferAttribute(this,e),es.applyMatrix3(t),this.setXY(e,es.x,es.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)se.fromBufferAttribute(this,e),se.applyMatrix3(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)se.fromBufferAttribute(this,e),se.applyMatrix4(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)se.fromBufferAttribute(this,e),se.applyNormalMatrix(t),this.setXYZ(e,se.x,se.y,se.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)se.fromBufferAttribute(this,e),se.transformDirection(t),this.setXYZ(e,se.x,se.y,se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=lr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ce(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=lr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=lr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=lr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=lr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),r=Ce(r,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zl&&(t.usage=this.usage),t}}class mh extends cn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class _h extends cn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Oe extends cn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Zg=0;const ke=new oe,Ra=new _e,Ai=new F,Ue=new Pr,fr=new Pr,fe=new F;class Cn extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=Rr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ch(t)?_h:mh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Vt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,i){return ke.makeTranslation(t,e,i),this.applyMatrix4(ke),this}scale(t,e,i){return ke.makeScale(t,e,i),this.applyMatrix4(ke),this}lookAt(t){return Ra.lookAt(t),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Oe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Ue.setFromBufferAttribute(s),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new So);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(t){const i=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];fr.setFromBufferAttribute(a),this.morphTargetsRelative?(fe.addVectors(Ue.min,fr.min),Ue.expandByPoint(fe),fe.addVectors(Ue.max,fr.max),Ue.expandByPoint(fe)):(Ue.expandByPoint(fr.min),Ue.expandByPoint(fr.max))}Ue.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)fe.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(fe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)fe.fromBufferAttribute(a,c),l&&(Ai.fromBufferAttribute(t,c),fe.add(Ai)),r=Math.max(r,i.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let M=0;M<a;M++)c[M]=new F,u[M]=new F;const f=new F,p=new F,m=new F,g=new $t,_=new $t,d=new $t,h=new F,b=new F;function S(M,H,U){f.fromArray(r,M*3),p.fromArray(r,H*3),m.fromArray(r,U*3),g.fromArray(o,M*2),_.fromArray(o,H*2),d.fromArray(o,U*2),p.sub(f),m.sub(f),_.sub(g),d.sub(g);const W=1/(_.x*d.y-d.x*_.y);isFinite(W)&&(h.copy(p).multiplyScalar(d.y).addScaledVector(m,-_.y).multiplyScalar(W),b.copy(m).multiplyScalar(_.x).addScaledVector(p,-d.x).multiplyScalar(W),c[M].add(h),c[H].add(h),c[U].add(h),u[M].add(b),u[H].add(b),u[U].add(b))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let M=0,H=T.length;M<H;++M){const U=T[M],W=U.start,R=U.count;for(let O=W,V=W+R;O<V;O+=3)S(i[O+0],i[O+1],i[O+2])}const L=new F,A=new F,w=new F,X=new F;function E(M){w.fromArray(s,M*3),X.copy(w);const H=c[M];L.copy(H),L.sub(w.multiplyScalar(w.dot(H))).normalize(),A.crossVectors(X,H);const W=A.dot(u[M])<0?-1:1;l[M*4]=L.x,l[M*4+1]=L.y,l[M*4+2]=L.z,l[M*4+3]=W}for(let M=0,H=T.length;M<H;++M){const U=T[M],W=U.start,R=U.count;for(let O=W,V=W+R;O<V;O+=3)E(i[O+0]),E(i[O+1]),E(i[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,f=new F;if(t)for(let p=0,m=t.count;p<m;p+=3){const g=t.getX(p+0),_=t.getX(p+1),d=t.getX(p+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,d),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,d),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)fe.fromBufferAttribute(t,e),fe.normalize(),t.setXYZ(e,fe.x,fe.y,fe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,p=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,d=l.length;_<d;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let h=0;h<u;h++)p[g++]=c[m++]}return new cn(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Cn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const p=c[u],m=t(p,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,p=c.length;f<p;f++){const m=c[f];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let p=0,m=f.length;p<m;p++)u.push(f[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hc=new oe,Zn=new dh,ns=new So,fc=new F,wi=new F,Ci=new F,Ri=new F,La=new F,is=new F,rs=new $t,ss=new $t,as=new $t,dc=new F,pc=new F,mc=new F,os=new F,ls=new F;class de extends _e{constructor(t=new Cn,e=new ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){is.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(La.fromBufferAttribute(f,t),o?is.addScaledVector(La,u):is.addScaledVector(La.sub(e),u))}e.add(is)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ns.copy(i.boundingSphere),ns.applyMatrix4(s),Zn.copy(t.ray).recast(t.near),!(ns.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(ns,fc)===null||Zn.origin.distanceToSquared(fc)>(t.far-t.near)**2))&&(hc.copy(s).invert(),Zn.copy(t.ray).applyMatrix4(hc),!(i.boundingBox!==null&&Zn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Zn)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,p=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const d=p[g],h=o[d.materialIndex],b=Math.max(d.start,m.start),S=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let T=b,L=S;T<L;T+=3){const A=a.getX(T),w=a.getX(T+1),X=a.getX(T+2);r=cs(this,h,t,i,c,u,f,A,w,X),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let d=g,h=_;d<h;d+=3){const b=a.getX(d),S=a.getX(d+1),T=a.getX(d+2);r=cs(this,o,t,i,c,u,f,b,S,T),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const d=p[g],h=o[d.materialIndex],b=Math.max(d.start,m.start),S=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let T=b,L=S;T<L;T+=3){const A=T,w=T+1,X=T+2;r=cs(this,h,t,i,c,u,f,A,w,X),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let d=g,h=_;d<h;d+=3){const b=d,S=d+1,T=d+2;r=cs(this,o,t,i,c,u,f,b,S,T),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}}}function Jg(n,t,e,i,r,s,o,a){let l;if(t.side===Pe?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===Gn,a),l===null)return null;ls.copy(a),ls.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ls);return c<e.near||c>e.far?null:{distance:c,point:ls.clone(),object:n}}function cs(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,wi),n.getVertexPosition(l,Ci),n.getVertexPosition(c,Ri);const u=Jg(n,t,e,i,wi,Ci,Ri,os);if(u){r&&(rs.fromBufferAttribute(r,a),ss.fromBufferAttribute(r,l),as.fromBufferAttribute(r,c),u.uv=Qe.getInterpolation(os,wi,Ci,Ri,rs,ss,as,new $t)),s&&(rs.fromBufferAttribute(s,a),ss.fromBufferAttribute(s,l),as.fromBufferAttribute(s,c),u.uv1=Qe.getInterpolation(os,wi,Ci,Ri,rs,ss,as,new $t),u.uv2=u.uv1),o&&(dc.fromBufferAttribute(o,a),pc.fromBufferAttribute(o,l),mc.fromBufferAttribute(o,c),u.normal=Qe.getInterpolation(os,wi,Ci,Ri,dc,pc,mc,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new F,materialIndex:0};Qe.getNormal(wi,Ci,Ri,f.normal),u.face=f}return u}class Fe extends Cn{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let p=0,m=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(f,2));function g(_,d,h,b,S,T,L,A,w,X,E){const M=T/w,H=L/X,U=T/2,W=L/2,R=A/2,O=w+1,V=X+1;let q=0,$=0;const j=new F;for(let K=0;K<V;K++){const rt=K*H-W;for(let st=0;st<O;st++){const C=st*M-U;j[_]=C*b,j[d]=rt*S,j[h]=R,c.push(j.x,j.y,j.z),j[_]=0,j[d]=0,j[h]=A>0?1:-1,u.push(j.x,j.y,j.z),f.push(st/w),f.push(1-K/X),q+=1}}for(let K=0;K<X;K++)for(let rt=0;rt<w;rt++){const st=p+rt+O*K,C=p+rt+O*(K+1),D=p+(rt+1)+O*(K+1),Y=p+(rt+1)+O*K;l.push(st,C,Y),l.push(C,D,Y),$+=6}a.addGroup(m,$,E),m+=$,p+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ji(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function ye(n){const t={};for(let e=0;e<n.length;e++){const i=Ji(n[e]);for(const r in i)t[r]=i[r]}return t}function Qg(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function gh(n){return n.getRenderTarget()===null?n.outputColorSpace:qt.workingColorSpace}const tv={clone:Ji,merge:ye};var ev=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends Dr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ev,this.fragmentShader=nv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=Qg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class vh extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class We extends vh{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(da*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qa*2*Math.atan(Math.tan(da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(da*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Li=-90,Pi=1;class iv extends _e{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new We(Li,Pi,t,e);r.layers=this.layers,this.add(r);const s=new We(Li,Pi,t,e);s.layers=this.layers,this.add(s);const o=new We(Li,Pi,t,e);o.layers=this.layers,this.add(o);const a=new We(Li,Pi,t,e);a.layers=this.layers,this.add(a);const l=new We(Li,Pi,t,e);l.layers=this.layers,this.add(l);const c=new We(Li,Pi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===xn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Cs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(f,p,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Eh extends De{constructor(t,e,i,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ji,super(t,e,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rv extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];e.encoding!==void 0&&(vr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===li?me:$e),this.texture=new Eh(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ge}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fe(5,5,5),s=new fi({name:"CubemapFromEquirect",uniforms:Ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pe,blending:Fn});s.uniforms.tEquirect.value=e;const o=new de(r,s),a=e.minFilter;return e.minFilter===xr&&(e.minFilter=Ge),new iv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const Pa=new F,sv=new F,av=new Vt;class Qn{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Pa.subVectors(i,e).cross(sv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Pa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||av.getNormalMatrix(t),r=this.coplanarPoint(Pa).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new So,us=new F;class yo{constructor(t=new Qn,e=new Qn,i=new Qn,r=new Qn,s=new Qn,o=new Qn){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=xn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],p=r[7],m=r[8],g=r[9],_=r[10],d=r[11],h=r[12],b=r[13],S=r[14],T=r[15];if(i[0].setComponents(l-s,p-c,d-m,T-h).normalize(),i[1].setComponents(l+s,p+c,d+m,T+h).normalize(),i[2].setComponents(l+o,p+u,d+g,T+b).normalize(),i[3].setComponents(l-o,p-u,d-g,T-b).normalize(),i[4].setComponents(l-a,p-f,d-_,T-S).normalize(),e===xn)i[5].setComponents(l+a,p+f,d+_,T+S).normalize();else if(e===Cs)i[5].setComponents(a,f,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(t){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(us.x=r.normal.x>0?t.max.x:t.min.x,us.y=r.normal.y>0?t.max.y:t.min.y,us.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(us)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xh(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function ov(n,t){const e=t.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,p=c.usage,m=f.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,f,p),c.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,f){const p=u.array,m=u._updateRange,g=u.updateRanges;if(n.bindBuffer(f,c),m.count===-1&&g.length===0&&n.bufferSubData(f,0,p),g.length!==0){for(let _=0,d=g.length;_<d;_++){const h=g[_];e?n.bufferSubData(f,h.start*p.BYTES_PER_ELEMENT,p,h.start,h.count):n.bufferSubData(f,h.start*p.BYTES_PER_ELEMENT,p.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}m.count!==-1&&(e?n.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):n.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class Nr extends Cn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=t/a,p=e/l,m=[],g=[],_=[],d=[];for(let h=0;h<u;h++){const b=h*p-o;for(let S=0;S<c;S++){const T=S*f-s;g.push(T,-b,0),_.push(0,0,1),d.push(S/a),d.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<a;b++){const S=b+c*h,T=b+c*(h+1),L=b+1+c*(h+1),A=b+1+c*h;m.push(S,T,A),m.push(T,L,A)}this.setIndex(m),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(_,3)),this.setAttribute("uv",new Oe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nr(t.width,t.height,t.widthSegments,t.heightSegments)}}var lv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_v=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ev=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Av=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Lv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Pv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Iv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ov=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,zv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$v=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,e0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,n0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,o0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,l0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,c0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,p0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,m0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,v0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,y0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,T0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,b0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,A0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,L0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,P0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,F0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,X0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Y0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,j0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,aE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,mE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_E=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ME=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,CE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,RE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,DE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,OE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,HE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:lv,alphahash_pars_fragment:cv,alphamap_fragment:uv,alphamap_pars_fragment:hv,alphatest_fragment:fv,alphatest_pars_fragment:dv,aomap_fragment:pv,aomap_pars_fragment:mv,batching_pars_vertex:_v,batching_vertex:gv,begin_vertex:vv,beginnormal_vertex:Ev,bsdfs:xv,iridescence_fragment:Sv,bumpmap_pars_fragment:Mv,clipping_planes_fragment:yv,clipping_planes_pars_fragment:Tv,clipping_planes_pars_vertex:bv,clipping_planes_vertex:Av,color_fragment:wv,color_pars_fragment:Cv,color_pars_vertex:Rv,color_vertex:Lv,common:Pv,cube_uv_reflection_fragment:Dv,defaultnormal_vertex:Nv,displacementmap_pars_vertex:Iv,displacementmap_vertex:Uv,emissivemap_fragment:Ov,emissivemap_pars_fragment:Fv,colorspace_fragment:Bv,colorspace_pars_fragment:Hv,envmap_fragment:zv,envmap_common_pars_fragment:Vv,envmap_pars_fragment:kv,envmap_pars_vertex:Gv,envmap_physical_pars_fragment:e0,envmap_vertex:Wv,fog_vertex:$v,fog_pars_vertex:Xv,fog_fragment:Yv,fog_pars_fragment:qv,gradientmap_pars_fragment:jv,lightmap_fragment:Kv,lightmap_pars_fragment:Zv,lights_lambert_fragment:Jv,lights_lambert_pars_fragment:Qv,lights_pars_begin:t0,lights_toon_fragment:n0,lights_toon_pars_fragment:i0,lights_phong_fragment:r0,lights_phong_pars_fragment:s0,lights_physical_fragment:a0,lights_physical_pars_fragment:o0,lights_fragment_begin:l0,lights_fragment_maps:c0,lights_fragment_end:u0,logdepthbuf_fragment:h0,logdepthbuf_pars_fragment:f0,logdepthbuf_pars_vertex:d0,logdepthbuf_vertex:p0,map_fragment:m0,map_pars_fragment:_0,map_particle_fragment:g0,map_particle_pars_fragment:v0,metalnessmap_fragment:E0,metalnessmap_pars_fragment:x0,morphcolor_vertex:S0,morphnormal_vertex:M0,morphtarget_pars_vertex:y0,morphtarget_vertex:T0,normal_fragment_begin:b0,normal_fragment_maps:A0,normal_pars_fragment:w0,normal_pars_vertex:C0,normal_vertex:R0,normalmap_pars_fragment:L0,clearcoat_normal_fragment_begin:P0,clearcoat_normal_fragment_maps:D0,clearcoat_pars_fragment:N0,iridescence_pars_fragment:I0,opaque_fragment:U0,packing:O0,premultiplied_alpha_fragment:F0,project_vertex:B0,dithering_fragment:H0,dithering_pars_fragment:z0,roughnessmap_fragment:V0,roughnessmap_pars_fragment:k0,shadowmap_pars_fragment:G0,shadowmap_pars_vertex:W0,shadowmap_vertex:$0,shadowmask_pars_fragment:X0,skinbase_vertex:Y0,skinning_pars_vertex:q0,skinning_vertex:j0,skinnormal_vertex:K0,specularmap_fragment:Z0,specularmap_pars_fragment:J0,tonemapping_fragment:Q0,tonemapping_pars_fragment:tE,transmission_fragment:eE,transmission_pars_fragment:nE,uv_pars_fragment:iE,uv_pars_vertex:rE,uv_vertex:sE,worldpos_vertex:aE,background_vert:oE,background_frag:lE,backgroundCube_vert:cE,backgroundCube_frag:uE,cube_vert:hE,cube_frag:fE,depth_vert:dE,depth_frag:pE,distanceRGBA_vert:mE,distanceRGBA_frag:_E,equirect_vert:gE,equirect_frag:vE,linedashed_vert:EE,linedashed_frag:xE,meshbasic_vert:SE,meshbasic_frag:ME,meshlambert_vert:yE,meshlambert_frag:TE,meshmatcap_vert:bE,meshmatcap_frag:AE,meshnormal_vert:wE,meshnormal_frag:CE,meshphong_vert:RE,meshphong_frag:LE,meshphysical_vert:PE,meshphysical_frag:DE,meshtoon_vert:NE,meshtoon_frag:IE,points_vert:UE,points_frag:OE,shadow_vert:FE,shadow_frag:BE,sprite_vert:HE,sprite_frag:zE},ot={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},an={basic:{uniforms:ye([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:ye([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:ye([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:ye([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:ye([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:ye([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:ye([ot.points,ot.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:ye([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:ye([ot.common,ot.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:ye([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:ye([ot.sprite,ot.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:ye([ot.common,ot.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:ye([ot.lights,ot.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};an.physical={uniforms:ye([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const hs={r:0,b:0,g:0};function VE(n,t,e,i,r,s,o){const a=new Wt(0);let l=s===!0?0:1,c,u,f=null,p=0,m=null;function g(d,h){let b=!1,S=h.isScene===!0?h.background:null;S&&S.isTexture&&(S=(h.backgroundBlurriness>0?e:t).get(S)),S===null?_(a,l):S&&S.isColor&&(_(S,1),b=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Os)?(u===void 0&&(u=new de(new Fe(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:Ji(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=qt.getTransfer(S.colorSpace)!==te,(f!==S||p!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,p=S.version,m=n.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new de(new Nr(2,2),new fi({name:"BackgroundMaterial",uniforms:Ji(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=qt.getTransfer(S.colorSpace)!==te,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||p!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,p=S.version,m=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function _(d,h){d.getRGB(hs,gh(n)),i.buffers.color.setClear(hs.r,hs.g,hs.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(d,h=1){a.set(d),l=h,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,_(a,l)},render:g}}function kE(n,t,e,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=d(null);let c=l,u=!1;function f(R,O,V,q,$){let j=!1;if(o){const K=_(q,V,O);c!==K&&(c=K,m(c.object)),j=h(R,q,V,$),j&&b(R,q,V,$)}else{const K=O.wireframe===!0;(c.geometry!==q.id||c.program!==V.id||c.wireframe!==K)&&(c.geometry=q.id,c.program=V.id,c.wireframe=K,j=!0)}$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,X(R,O,V,q),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function p(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(R){return i.isWebGL2?n.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return i.isWebGL2?n.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function _(R,O,V){const q=V.wireframe===!0;let $=a[R.id];$===void 0&&($={},a[R.id]=$);let j=$[O.id];j===void 0&&(j={},$[O.id]=j);let K=j[q];return K===void 0&&(K=d(p()),j[q]=K),K}function d(R){const O=[],V=[],q=[];for(let $=0;$<r;$++)O[$]=0,V[$]=0,q[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:q,object:R,attributes:{},index:null}}function h(R,O,V,q){const $=c.attributes,j=O.attributes;let K=0;const rt=V.getAttributes();for(const st in rt)if(rt[st].location>=0){const D=$[st];let Y=j[st];if(Y===void 0&&(st==="instanceMatrix"&&R.instanceMatrix&&(Y=R.instanceMatrix),st==="instanceColor"&&R.instanceColor&&(Y=R.instanceColor)),D===void 0||D.attribute!==Y||Y&&D.data!==Y.data)return!0;K++}return c.attributesNum!==K||c.index!==q}function b(R,O,V,q){const $={},j=O.attributes;let K=0;const rt=V.getAttributes();for(const st in rt)if(rt[st].location>=0){let D=j[st];D===void 0&&(st==="instanceMatrix"&&R.instanceMatrix&&(D=R.instanceMatrix),st==="instanceColor"&&R.instanceColor&&(D=R.instanceColor));const Y={};Y.attribute=D,D&&D.data&&(Y.data=D.data),$[st]=Y,K++}c.attributes=$,c.attributesNum=K,c.index=q}function S(){const R=c.newAttributes;for(let O=0,V=R.length;O<V;O++)R[O]=0}function T(R){L(R,0)}function L(R,O){const V=c.newAttributes,q=c.enabledAttributes,$=c.attributeDivisors;V[R]=1,q[R]===0&&(n.enableVertexAttribArray(R),q[R]=1),$[R]!==O&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,O),$[R]=O)}function A(){const R=c.newAttributes,O=c.enabledAttributes;for(let V=0,q=O.length;V<q;V++)O[V]!==R[V]&&(n.disableVertexAttribArray(V),O[V]=0)}function w(R,O,V,q,$,j,K){K===!0?n.vertexAttribIPointer(R,O,V,$,j):n.vertexAttribPointer(R,O,V,q,$,j)}function X(R,O,V,q){if(i.isWebGL2===!1&&(R.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;S();const $=q.attributes,j=V.getAttributes(),K=O.defaultAttributeValues;for(const rt in j){const st=j[rt];if(st.location>=0){let C=$[rt];if(C===void 0&&(rt==="instanceMatrix"&&R.instanceMatrix&&(C=R.instanceMatrix),rt==="instanceColor"&&R.instanceColor&&(C=R.instanceColor)),C!==void 0){const D=C.normalized,Y=C.itemSize,it=e.get(C);if(it===void 0)continue;const tt=it.buffer,ht=it.type,gt=it.bytesPerElement,pt=i.isWebGL2===!0&&(ht===n.INT||ht===n.UNSIGNED_INT||C.gpuType===Qu);if(C.isInterleavedBufferAttribute){const dt=C.data,I=dt.stride,jt=C.offset;if(dt.isInstancedInterleavedBuffer){for(let Mt=0;Mt<st.locationSize;Mt++)L(st.location+Mt,dt.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Mt=0;Mt<st.locationSize;Mt++)T(st.location+Mt);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let Mt=0;Mt<st.locationSize;Mt++)w(st.location+Mt,Y/st.locationSize,ht,D,I*gt,(jt+Y/st.locationSize*Mt)*gt,pt)}else{if(C.isInstancedBufferAttribute){for(let dt=0;dt<st.locationSize;dt++)L(st.location+dt,C.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let dt=0;dt<st.locationSize;dt++)T(st.location+dt);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let dt=0;dt<st.locationSize;dt++)w(st.location+dt,Y/st.locationSize,ht,D,Y*gt,Y/st.locationSize*dt*gt,pt)}}else if(K!==void 0){const D=K[rt];if(D!==void 0)switch(D.length){case 2:n.vertexAttrib2fv(st.location,D);break;case 3:n.vertexAttrib3fv(st.location,D);break;case 4:n.vertexAttrib4fv(st.location,D);break;default:n.vertexAttrib1fv(st.location,D)}}}}A()}function E(){U();for(const R in a){const O=a[R];for(const V in O){const q=O[V];for(const $ in q)g(q[$].object),delete q[$];delete O[V]}delete a[R]}}function M(R){if(a[R.id]===void 0)return;const O=a[R.id];for(const V in O){const q=O[V];for(const $ in q)g(q[$].object),delete q[$];delete O[V]}delete a[R.id]}function H(R){for(const O in a){const V=a[O];if(V[R.id]===void 0)continue;const q=V[R.id];for(const $ in q)g(q[$].object),delete q[$];delete V[R.id]}}function U(){W(),u=!0,c!==l&&(c=l,m(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:U,resetDefaultState:W,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfProgram:H,initAttributes:S,enableAttribute:T,disableUnusedAttributes:A}}function GE(n,t,e,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){n.drawArrays(s,u,f),e.update(f,s,1)}function l(u,f,p){if(p===0)return;let m,g;if(r)m=n,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,u,f,p),e.update(f,s,p)}function c(u,f,p){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<p;g++)this.render(u[g],f[g]);else{m.multiDrawArraysWEBGL(s,u,0,f,0,p);let g=0;for(let _=0;_<p;_++)g+=f[_];e.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function WE(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,T=o||t.has("OES_texture_float"),L=S&&T,A=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:d,maxVaryings:h,maxFragmentUniforms:b,vertexTextures:S,floatFragmentTextures:T,floatVertexTextures:L,maxSamples:A}}function $E(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Qn,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||i!==0||r;return r=p,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){e=u(f,p,0)},this.setState=function(f,p,m){const g=f.clippingPlanes,_=f.clipIntersection,d=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const b=s?0:i,S=b*4;let T=h.clippingState||null;l.value=T,T=u(g,p,S,m);for(let L=0;L!==S;++L)T[L]=e[L];h.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,p,m,g){const _=f!==null?f.length:0;let d=null;if(_!==0){if(d=l.value,g!==!0||d===null){const h=m+_*4,b=p.matrixWorldInverse;a.getNormalMatrix(b),(d===null||d.length<h)&&(d=new Float32Array(h));for(let S=0,T=m;S!==_;++S,T+=4)o.copy(f[S]).applyMatrix4(b,a),o.normal.toArray(d,T),d[T+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function XE(n){let t=new WeakMap;function e(o,a){return a===ja?o.mapping=ji:a===Ka&&(o.mapping=Ki),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ja||a===Ka)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new rv(l.height/2);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Sh extends vh{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Bi=4,_c=[.125,.215,.35,.446,.526,.582],ni=20,Da=new Sh,gc=new Wt;let Na=null,Ia=0,Ua=0;const ti=(1+Math.sqrt(5))/2,Di=1/ti,vc=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,ti,Di),new F(0,ti,-Di),new F(Di,0,ti),new F(-Di,0,ti),new F(ti,Di,0),new F(-ti,Di,0)];class Ec{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Na=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Na,Ia,Ua),t.scissorTest=!1,fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ji||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Na=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:Sr,format:en,colorSpace:An,depthBuffer:!1},r=xc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xc(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YE(s)),this._blurMaterial=qE(s,t,e)}return r}_compileMaterial(t){const e=new de(this._lodPlanes[0],t);this._renderer.compile(e,Da)}_sceneToCubeUV(t,e,i,r){const a=new We(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(gc),u.toneMapping=Bn,u.autoClear=!1;const m=new ki({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),g=new de(new Fe,m);let _=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,_=!0):(m.color.copy(gc),_=!0);for(let h=0;h<6;h++){const b=h%3;b===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):b===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const S=this._cubeSize;fs(r,b*S,h>2?S:0,S,S),u.setRenderTarget(r),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===ji||t.mapping===Ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;fs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Da)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vc[(r-1)%vc.length];this._blur(t,r-1,r,s,o)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new de(this._lodPlanes[r],c),p=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ni-1),_=s/g,d=isFinite(s)?1+Math.floor(u*_):ni;d>ni&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ni}`);const h=[];let b=0;for(let w=0;w<ni;++w){const X=w/_,E=Math.exp(-X*X/2);h.push(E),w===0?b+=E:w<d&&(b+=2*E)}for(let w=0;w<h.length;w++)h[w]=h[w]/b;p.envMap.value=t.texture,p.samples.value=d,p.weights.value=h,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:S}=this;p.dTheta.value=g,p.mipInt.value=S-i;const T=this._sizeLods[r],L=3*T*(r>S-Bi?r-S+Bi:0),A=4*(this._cubeSize-T);fs(e,L,A,3*T,2*T),l.setRenderTarget(e),l.render(f,Da)}}function YE(n){const t=[],e=[],i=[];let r=n;const s=n-Bi+1+_c.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Bi?l=_c[o-n+Bi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,p=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,_=3,d=2,h=1,b=new Float32Array(_*g*m),S=new Float32Array(d*g*m),T=new Float32Array(h*g*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,X=A>2?0:-1,E=[w,X,0,w+2/3,X,0,w+2/3,X+1,0,w,X,0,w+2/3,X+1,0,w,X+1,0];b.set(E,_*g*A),S.set(p,d*g*A);const M=[A,A,A,A,A,A];T.set(M,h*g*A)}const L=new Cn;L.setAttribute("position",new cn(b,_)),L.setAttribute("uv",new cn(S,d)),L.setAttribute("faceIndex",new cn(T,h)),t.push(L),r>Bi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function xc(n,t,e){const i=new hi(n,t,e);return i.texture.mapping=Os,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function qE(n,t,e){const i=new Float32Array(ni),r=new F(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Sc(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Mc(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function To(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jE(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ja||l===Ka,u=l===ji||l===Ki;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=t.get(a);return e===null&&(e=new Ec(n)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),t.set(a,f),f.texture}else{if(t.has(a))return t.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){e===null&&(e=new Ec(n));const p=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function KE(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ZE(n,t,e,i){const r={},s=new WeakMap;function o(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let d=0,h=_.length;d<h;d++)t.remove(_[d])}p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(t.remove(m),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function l(f){const p=f.attributes;for(const g in p)t.update(p[g],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const _=m[g];for(let d=0,h=_.length;d<h;d++)t.update(_[d],n.ARRAY_BUFFER)}}function c(f){const p=[],m=f.index,g=f.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let S=0,T=b.length;S<T;S+=3){const L=b[S+0],A=b[S+1],w=b[S+2];p.push(L,A,A,w,w,L)}}else if(g!==void 0){const b=g.array;_=g.version;for(let S=0,T=b.length/3-1;S<T;S+=3){const L=S+0,A=S+1,w=S+2;p.push(L,A,A,w,w,L)}}else return;const d=new(ch(p)?_h:mh)(p,1);d.version=_;const h=s.get(f);h&&t.remove(h),s.set(f,d)}function u(f){const p=s.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function JE(n,t,e,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,g){n.drawElements(s,g,a,m*l),e.update(g,s,1)}function f(m,g,_){if(_===0)return;let d,h;if(r)d=n,h="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[h](s,g,a,m*l,_),e.update(g,s,_)}function p(m,g,_){if(_===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<_;h++)this.render(m[h]/l,g[h]);else{d.multiDrawElementsWEBGL(s,g,0,a,m,0,_);let h=0;for(let b=0;b<_;b++)h+=g[b];e.update(h,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=p}function QE(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function tx(n,t){return n[0]-t[0]}function ex(n,t){return Math.abs(t[1])-Math.abs(n[1])}function nx(n,t,e){const i={},r=new Float32Array(8),s=new WeakMap,o=new pe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const p=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let d=s.get(u);if(d===void 0||d.count!==_){let O=function(){W.dispose(),s.delete(u),u.removeEventListener("dispose",O)};var m=O;d!==void 0&&d.texture.dispose();const S=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],X=u.morphAttributes.color||[];let E=0;S===!0&&(E=1),T===!0&&(E=2),L===!0&&(E=3);let M=u.attributes.position.count*E,H=1;M>t.maxTextureSize&&(H=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const U=new Float32Array(M*H*4*_),W=new fh(U,M,H,_);W.type=On,W.needsUpdate=!0;const R=E*4;for(let V=0;V<_;V++){const q=A[V],$=w[V],j=X[V],K=M*H*4*V;for(let rt=0;rt<q.count;rt++){const st=rt*R;S===!0&&(o.fromBufferAttribute(q,rt),U[K+st+0]=o.x,U[K+st+1]=o.y,U[K+st+2]=o.z,U[K+st+3]=0),T===!0&&(o.fromBufferAttribute($,rt),U[K+st+4]=o.x,U[K+st+5]=o.y,U[K+st+6]=o.z,U[K+st+7]=0),L===!0&&(o.fromBufferAttribute(j,rt),U[K+st+8]=o.x,U[K+st+9]=o.y,U[K+st+10]=o.z,U[K+st+11]=j.itemSize===4?o.w:1)}}d={count:_,texture:W,size:new $t(M,H)},s.set(u,d),u.addEventListener("dispose",O)}let h=0;for(let S=0;S<p.length;S++)h+=p[S];const b=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",p),f.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}else{const g=p===void 0?0:p.length;let _=i[u.id];if(_===void 0||_.length!==g){_=[];for(let T=0;T<g;T++)_[T]=[T,0];i[u.id]=_}for(let T=0;T<g;T++){const L=_[T];L[0]=T,L[1]=p[T]}_.sort(ex);for(let T=0;T<8;T++)T<g&&_[T][1]?(a[T][0]=_[T][0],a[T][1]=_[T][1]):(a[T][0]=Number.MAX_SAFE_INTEGER,a[T][1]=0);a.sort(tx);const d=u.morphAttributes.position,h=u.morphAttributes.normal;let b=0;for(let T=0;T<8;T++){const L=a[T],A=L[0],w=L[1];A!==Number.MAX_SAFE_INTEGER&&w?(d&&u.getAttribute("morphTarget"+T)!==d[A]&&u.setAttribute("morphTarget"+T,d[A]),h&&u.getAttribute("morphNormal"+T)!==h[A]&&u.setAttribute("morphNormal"+T,h[A]),r[T]=w,b+=w):(d&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),h&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),r[T]=0)}const S=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(n,"morphTargetBaseInfluence",S),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function ix(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Mh extends De{constructor(t,e,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:oi,u!==oi&&u!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===oi&&(i=Un),i===void 0&&u===Zi&&(i=ai),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:be,this.minFilter=l!==void 0?l:be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const yh=new De,Th=new Mh(1,1);Th.compareFunction=lh;const bh=new fh,Ah=new Vg,wh=new Eh,yc=[],Tc=[],bc=new Float32Array(16),Ac=new Float32Array(9),wc=new Float32Array(4);function rr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=yc[r];if(s===void 0&&(s=new Float32Array(r),yc[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function le(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ce(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Hs(n,t){let e=Tc[t];e===void 0&&(e=new Int32Array(t),Tc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function rx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function sx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;n.uniform2fv(this.addr,t),ce(e,t)}}function ax(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(le(e,t))return;n.uniform3fv(this.addr,t),ce(e,t)}}function ox(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;n.uniform4fv(this.addr,t),ce(e,t)}}function lx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(le(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ce(e,t)}else{if(le(e,i))return;wc.set(i),n.uniformMatrix2fv(this.addr,!1,wc),ce(e,i)}}function cx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(le(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ce(e,t)}else{if(le(e,i))return;Ac.set(i),n.uniformMatrix3fv(this.addr,!1,Ac),ce(e,i)}}function ux(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(le(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ce(e,t)}else{if(le(e,i))return;bc.set(i),n.uniformMatrix4fv(this.addr,!1,bc),ce(e,i)}}function hx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function fx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;n.uniform2iv(this.addr,t),ce(e,t)}}function dx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;n.uniform3iv(this.addr,t),ce(e,t)}}function px(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;n.uniform4iv(this.addr,t),ce(e,t)}}function mx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function _x(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;n.uniform2uiv(this.addr,t),ce(e,t)}}function gx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;n.uniform3uiv(this.addr,t),ce(e,t)}}function vx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;n.uniform4uiv(this.addr,t),ce(e,t)}}function Ex(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Th:yh;e.setTexture2D(t||s,r)}function xx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Ah,r)}function Sx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||wh,r)}function Mx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||bh,r)}function yx(n){switch(n){case 5126:return rx;case 35664:return sx;case 35665:return ax;case 35666:return ox;case 35674:return lx;case 35675:return cx;case 35676:return ux;case 5124:case 35670:return hx;case 35667:case 35671:return fx;case 35668:case 35672:return dx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return _x;case 36295:return gx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return Mx}}function Tx(n,t){n.uniform1fv(this.addr,t)}function bx(n,t){const e=rr(t,this.size,2);n.uniform2fv(this.addr,e)}function Ax(n,t){const e=rr(t,this.size,3);n.uniform3fv(this.addr,e)}function wx(n,t){const e=rr(t,this.size,4);n.uniform4fv(this.addr,e)}function Cx(n,t){const e=rr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Rx(n,t){const e=rr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Lx(n,t){const e=rr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Px(n,t){n.uniform1iv(this.addr,t)}function Dx(n,t){n.uniform2iv(this.addr,t)}function Nx(n,t){n.uniform3iv(this.addr,t)}function Ix(n,t){n.uniform4iv(this.addr,t)}function Ux(n,t){n.uniform1uiv(this.addr,t)}function Ox(n,t){n.uniform2uiv(this.addr,t)}function Fx(n,t){n.uniform3uiv(this.addr,t)}function Bx(n,t){n.uniform4uiv(this.addr,t)}function Hx(n,t,e){const i=this.cache,r=t.length,s=Hs(e,r);le(i,s)||(n.uniform1iv(this.addr,s),ce(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||yh,s[o])}function zx(n,t,e){const i=this.cache,r=t.length,s=Hs(e,r);le(i,s)||(n.uniform1iv(this.addr,s),ce(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Ah,s[o])}function Vx(n,t,e){const i=this.cache,r=t.length,s=Hs(e,r);le(i,s)||(n.uniform1iv(this.addr,s),ce(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||wh,s[o])}function kx(n,t,e){const i=this.cache,r=t.length,s=Hs(e,r);le(i,s)||(n.uniform1iv(this.addr,s),ce(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||bh,s[o])}function Gx(n){switch(n){case 5126:return Tx;case 35664:return bx;case 35665:return Ax;case 35666:return wx;case 35674:return Cx;case 35675:return Rx;case 35676:return Lx;case 5124:case 35670:return Px;case 35667:case 35671:return Dx;case 35668:case 35672:return Nx;case 35669:case 35673:return Ix;case 5125:return Ux;case 36294:return Ox;case 36295:return Fx;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return zx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return kx}}class Wx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=yx(e.type)}}class $x{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gx(e.type)}}class Xx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function Cc(n,t){n.seq.push(t),n.map[t.id]=t}function Yx(n,t,e){const i=n.name,r=i.length;for(Oa.lastIndex=0;;){const s=Oa.exec(i),o=Oa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Cc(e,c===void 0?new Wx(a,n,t):new $x(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new Xx(a),Cc(e,f)),e=f}}}class gs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Yx(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Rc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const qx=37297;let jx=0;function Kx(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Zx(n){const t=qt.getPrimaries(qt.workingColorSpace),e=qt.getPrimaries(n);let i;switch(t===e?i="":t===ws&&e===As?i="LinearDisplayP3ToLinearSRGB":t===As&&e===ws&&(i="LinearSRGBToLinearDisplayP3"),n){case An:case Fs:return[i,"LinearTransferOETF"];case me:case xo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Lc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Kx(n.getShaderSource(t),o)}else return r}function Jx(n,t){const e=Zx(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Qx(n,t){let e;switch(t){case ug:e="Linear";break;case hg:e="Reinhard";break;case fg:e="OptimizedCineon";break;case dg:e="ACESFilmic";break;case mg:e="AgX";break;case pg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function tS(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hi).join(`
`)}function eS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Hi).join(`
`)}function nS(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function iS(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Hi(n){return n!==""}function Pc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rS=/^[ \t]*#include +<([\w\d./]+)>/gm;function eo(n){return n.replace(rS,aS)}const sS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function aS(n,t){let e=Ot[t];if(e===void 0){const i=sS.get(t);if(i!==void 0)e=Ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return eo(e)}const oS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nc(n){return n.replace(oS,lS)}function lS(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ic(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function cS(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ku?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===B_?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gn&&(t="SHADOWMAP_TYPE_VSM"),t}function uS(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ji:case Ki:t="ENVMAP_TYPE_CUBE";break;case Os:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hS(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ki:t="ENVMAP_MODE_REFRACTION";break}return t}function fS(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zu:t="ENVMAP_BLENDING_MULTIPLY";break;case lg:t="ENVMAP_BLENDING_MIX";break;case cg:t="ENVMAP_BLENDING_ADD";break}return t}function dS(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function pS(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=cS(e),c=uS(e),u=hS(e),f=fS(e),p=dS(e),m=e.isWebGL2?"":tS(e),g=eS(e),_=nS(s),d=r.createProgram();let h,b,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Hi).join(`
`),h.length>0&&(h+=`
`),b=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Hi).join(`
`),b.length>0&&(b+=`
`)):(h=[Ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),b=[m,Ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Bn?Qx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,Jx("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hi).join(`
`)),o=eo(o),o=Pc(o,e),o=Dc(o,e),a=eo(a),a=Pc(a,e),a=Dc(a,e),o=Nc(o),a=Nc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,h=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,b=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const T=S+h+o,L=S+b+a,A=Rc(r,r.VERTEX_SHADER,T),w=Rc(r,r.FRAGMENT_SHADER,L);r.attachShader(d,A),r.attachShader(d,w),e.index0AttributeName!==void 0?r.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d);function X(U){if(n.debug.checkShaderErrors){const W=r.getProgramInfoLog(d).trim(),R=r.getShaderInfoLog(A).trim(),O=r.getShaderInfoLog(w).trim();let V=!0,q=!0;if(r.getProgramParameter(d,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,d,A,w);else{const $=Lc(r,A,"vertex"),j=Lc(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,r.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+$+`
`+j)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(R===""||O==="")&&(q=!1);q&&(U.diagnostics={runnable:V,programLog:W,vertexShader:{log:R,prefix:h},fragmentShader:{log:O,prefix:b}})}r.deleteShader(A),r.deleteShader(w),E=new gs(r,d),M=iS(r,d)}let E;this.getUniforms=function(){return E===void 0&&X(this),E};let M;this.getAttributes=function(){return M===void 0&&X(this),M};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(d,qx)),H},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jx++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=A,this.fragmentShader=w,this}let mS=0;class _S{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new gS(t),e.set(t,i)),i}}class gS{constructor(t){this.id=mS++,this.code=t,this.usedTimes=0}}function vS(n,t,e,i,r,s,o){const a=new Mo,l=new _S,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return E===0?"uv":`uv${E}`}function d(E,M,H,U,W){const R=U.fog,O=W.geometry,V=E.isMeshStandardMaterial?U.environment:null,q=(E.isMeshStandardMaterial?e:t).get(E.envMap||V),$=q&&q.mapping===Os?q.image.height:null,j=g[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const K=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,rt=K!==void 0?K.length:0;let st=0;O.morphAttributes.position!==void 0&&(st=1),O.morphAttributes.normal!==void 0&&(st=2),O.morphAttributes.color!==void 0&&(st=3);let C,D,Y,it;if(j){const xe=an[j];C=xe.vertexShader,D=xe.fragmentShader}else C=E.vertexShader,D=E.fragmentShader,l.update(E),Y=l.getVertexShaderID(E),it=l.getFragmentShaderID(E);const tt=n.getRenderTarget(),ht=W.isInstancedMesh===!0,gt=W.isBatchedMesh===!0,pt=!!E.map,dt=!!E.matcap,I=!!q,jt=!!E.aoMap,Mt=!!E.lightMap,Rt=!!E.bumpMap,vt=!!E.normalMap,Kt=!!E.displacementMap,Nt=!!E.emissiveMap,y=!!E.metalnessMap,v=!!E.roughnessMap,B=E.anisotropy>0,et=E.clearcoat>0,J=E.iridescence>0,nt=E.sheen>0,Et=E.transmission>0,lt=B&&!!E.anisotropyMap,mt=et&&!!E.clearcoatMap,Tt=et&&!!E.clearcoatNormalMap,Ft=et&&!!E.clearcoatRoughnessMap,Q=J&&!!E.iridescenceMap,Yt=J&&!!E.iridescenceThicknessMap,kt=nt&&!!E.sheenColorMap,Lt=nt&&!!E.sheenRoughnessMap,yt=!!E.specularMap,_t=!!E.specularColorMap,Ut=!!E.specularIntensityMap,Xt=Et&&!!E.transmissionMap,ne=Et&&!!E.thicknessMap,Ht=!!E.gradientMap,at=!!E.alphaMap,P=E.alphaTest>0,ct=!!E.alphaHash,ut=!!E.extensions,wt=!!O.attributes.uv1,bt=!!O.attributes.uv2,Zt=!!O.attributes.uv3;let Jt=Bn;return E.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Jt=n.toneMapping),{isWebGL2:u,shaderID:j,shaderType:E.type,shaderName:E.name,vertexShader:C,fragmentShader:D,defines:E.defines,customVertexShaderID:Y,customFragmentShaderID:it,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:gt,instancing:ht,instancingColor:ht&&W.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:tt===null?n.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:An,map:pt,matcap:dt,envMap:I,envMapMode:I&&q.mapping,envMapCubeUVHeight:$,aoMap:jt,lightMap:Mt,bumpMap:Rt,normalMap:vt,displacementMap:p&&Kt,emissiveMap:Nt,normalMapObjectSpace:vt&&E.normalMapType===wg,normalMapTangentSpace:vt&&E.normalMapType===oh,metalnessMap:y,roughnessMap:v,anisotropy:B,anisotropyMap:lt,clearcoat:et,clearcoatMap:mt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:Ft,iridescence:J,iridescenceMap:Q,iridescenceThicknessMap:Yt,sheen:nt,sheenColorMap:kt,sheenRoughnessMap:Lt,specularMap:yt,specularColorMap:_t,specularIntensityMap:Ut,transmission:Et,transmissionMap:Xt,thicknessMap:ne,gradientMap:Ht,opaque:E.transparent===!1&&E.blending===zi,alphaMap:at,alphaTest:P,alphaHash:ct,combine:E.combine,mapUv:pt&&_(E.map.channel),aoMapUv:jt&&_(E.aoMap.channel),lightMapUv:Mt&&_(E.lightMap.channel),bumpMapUv:Rt&&_(E.bumpMap.channel),normalMapUv:vt&&_(E.normalMap.channel),displacementMapUv:Kt&&_(E.displacementMap.channel),emissiveMapUv:Nt&&_(E.emissiveMap.channel),metalnessMapUv:y&&_(E.metalnessMap.channel),roughnessMapUv:v&&_(E.roughnessMap.channel),anisotropyMapUv:lt&&_(E.anisotropyMap.channel),clearcoatMapUv:mt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&_(E.sheenRoughnessMap.channel),specularMapUv:yt&&_(E.specularMap.channel),specularColorMapUv:_t&&_(E.specularColorMap.channel),specularIntensityMapUv:Ut&&_(E.specularIntensityMap.channel),transmissionMapUv:Xt&&_(E.transmissionMap.channel),thicknessMapUv:ne&&_(E.thicknessMap.channel),alphaMapUv:at&&_(E.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(vt||B),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:wt,vertexUv2s:bt,vertexUv3s:Zt,pointsUvs:W.isPoints===!0&&!!O.attributes.uv&&(pt||at),fog:!!R,useFog:E.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:W.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:st,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:Jt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:pt&&E.map.isVideoTexture===!0&&qt.getTransfer(E.map.colorSpace)===te,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===vn,flipSided:E.side===Pe,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:ut&&E.extensions.derivatives===!0,extensionFragDepth:ut&&E.extensions.fragDepth===!0,extensionDrawBuffers:ut&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:ut&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ut&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function h(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const H in E.defines)M.push(H),M.push(E.defines[H]);return E.isRawShaderMaterial===!1&&(b(M,E),S(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function b(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function S(E,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function T(E){const M=g[E.type];let H;if(M){const U=an[M];H=tv.clone(U.uniforms)}else H=E.uniforms;return H}function L(E,M){let H;for(let U=0,W=c.length;U<W;U++){const R=c[U];if(R.cacheKey===M){H=R,++H.usedTimes;break}}return H===void 0&&(H=new pS(n,M,E,s),c.push(H)),H}function A(E){if(--E.usedTimes===0){const M=c.indexOf(E);c[M]=c[c.length-1],c.pop(),E.destroy()}}function w(E){l.remove(E)}function X(){l.dispose()}return{getParameters:d,getProgramCacheKey:h,getUniforms:T,acquireProgram:L,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:X}}function ES(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function xS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Uc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Oc(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,p,m,g,_,d){let h=n[t];return h===void 0?(h={id:f.id,object:f,geometry:p,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:d},n[t]=h):(h.id=f.id,h.object=f,h.geometry=p,h.material=m,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=d),t++,h}function a(f,p,m,g,_,d){const h=o(f,p,m,g,_,d);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):e.push(h)}function l(f,p,m,g,_,d){const h=o(f,p,m,g,_,d);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):e.unshift(h)}function c(f,p){e.length>1&&e.sort(f||xS),i.length>1&&i.sort(p||Uc),r.length>1&&r.sort(p||Uc)}function u(){for(let f=t,p=n.length;f<p;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function SS(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Oc,n.set(i,[o])):r>=s.length?(o=new Oc,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function MS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Wt};break;case"SpotLight":e={position:new F,direction:new F,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function yS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let TS=0;function bS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function AS(n,t){const e=new MS,i=yS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new F);const s=new F,o=new oe,a=new oe;function l(u,f){let p=0,m=0,g=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let _=0,d=0,h=0,b=0,S=0,T=0,L=0,A=0,w=0,X=0,E=0;u.sort(bS);const M=f===!0?Math.PI:1;for(let U=0,W=u.length;U<W;U++){const R=u[U],O=R.color,V=R.intensity,q=R.distance,$=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)p+=O.r*V*M,m+=O.g*V*M,g+=O.b*V*M;else if(R.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(R.sh.coefficients[j],V);E++}else if(R.isDirectionalLight){const j=e.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity*M),R.castShadow){const K=R.shadow,rt=i.get(R);rt.shadowBias=K.bias,rt.shadowNormalBias=K.normalBias,rt.shadowRadius=K.radius,rt.shadowMapSize=K.mapSize,r.directionalShadow[_]=rt,r.directionalShadowMap[_]=$,r.directionalShadowMatrix[_]=R.shadow.matrix,T++}r.directional[_]=j,_++}else if(R.isSpotLight){const j=e.get(R);j.position.setFromMatrixPosition(R.matrixWorld),j.color.copy(O).multiplyScalar(V*M),j.distance=q,j.coneCos=Math.cos(R.angle),j.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),j.decay=R.decay,r.spot[h]=j;const K=R.shadow;if(R.map&&(r.spotLightMap[w]=R.map,w++,K.updateMatrices(R),R.castShadow&&X++),r.spotLightMatrix[h]=K.matrix,R.castShadow){const rt=i.get(R);rt.shadowBias=K.bias,rt.shadowNormalBias=K.normalBias,rt.shadowRadius=K.radius,rt.shadowMapSize=K.mapSize,r.spotShadow[h]=rt,r.spotShadowMap[h]=$,A++}h++}else if(R.isRectAreaLight){const j=e.get(R);j.color.copy(O).multiplyScalar(V),j.halfWidth.set(R.width*.5,0,0),j.halfHeight.set(0,R.height*.5,0),r.rectArea[b]=j,b++}else if(R.isPointLight){const j=e.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity*M),j.distance=R.distance,j.decay=R.decay,R.castShadow){const K=R.shadow,rt=i.get(R);rt.shadowBias=K.bias,rt.shadowNormalBias=K.normalBias,rt.shadowRadius=K.radius,rt.shadowMapSize=K.mapSize,rt.shadowCameraNear=K.camera.near,rt.shadowCameraFar=K.camera.far,r.pointShadow[d]=rt,r.pointShadowMap[d]=$,r.pointShadowMatrix[d]=R.shadow.matrix,L++}r.point[d]=j,d++}else if(R.isHemisphereLight){const j=e.get(R);j.skyColor.copy(R.color).multiplyScalar(V*M),j.groundColor.copy(R.groundColor).multiplyScalar(V*M),r.hemi[S]=j,S++}}b>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ot.LTC_FLOAT_1,r.rectAreaLTC2=ot.LTC_FLOAT_2):(r.rectAreaLTC1=ot.LTC_HALF_1,r.rectAreaLTC2=ot.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ot.LTC_FLOAT_1,r.rectAreaLTC2=ot.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ot.LTC_HALF_1,r.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=m,r.ambient[2]=g;const H=r.hash;(H.directionalLength!==_||H.pointLength!==d||H.spotLength!==h||H.rectAreaLength!==b||H.hemiLength!==S||H.numDirectionalShadows!==T||H.numPointShadows!==L||H.numSpotShadows!==A||H.numSpotMaps!==w||H.numLightProbes!==E)&&(r.directional.length=_,r.spot.length=h,r.rectArea.length=b,r.point.length=d,r.hemi.length=S,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=A+w-X,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=X,r.numLightProbes=E,H.directionalLength=_,H.pointLength=d,H.spotLength=h,H.rectAreaLength=b,H.hemiLength=S,H.numDirectionalShadows=T,H.numPointShadows=L,H.numSpotShadows=A,H.numSpotMaps=w,H.numLightProbes=E,r.version=TS++)}function c(u,f){let p=0,m=0,g=0,_=0,d=0;const h=f.matrixWorldInverse;for(let b=0,S=u.length;b<S;b++){const T=u[b];if(T.isDirectionalLight){const L=r.directional[p];L.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(h),p++}else if(T.isSpotLight){const L=r.spot[g];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(h),L.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(h),g++}else if(T.isRectAreaLight){const L=r.rectArea[_];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(h),a.identity(),o.copy(T.matrixWorld),o.premultiply(h),a.extractRotation(o),L.halfWidth.set(T.width*.5,0,0),L.halfHeight.set(0,T.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const L=r.point[m];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(h),m++}else if(T.isHemisphereLight){const L=r.hemi[d];L.direction.setFromMatrixPosition(T.matrixWorld),L.direction.transformDirection(h),d++}}}return{setup:l,setupView:c,state:r}}function Fc(n,t){const e=new AS(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){e.setup(i,f)}function c(f){e.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function wS(n,t){let e=new WeakMap;function i(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new Fc(n,t),e.set(s,[l])):o>=a.length?(l=new Fc(n,t),a.push(l)):l=a[o],l}function r(){e=new WeakMap}return{get:i,dispose:r}}class CS extends Dr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class RS extends Dr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const LS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DS(n,t,e){let i=new yo;const r=new $t,s=new $t,o=new pe,a=new CS({depthPacking:Ag}),l=new RS,c={},u=e.maxTextureSize,f={[Gn]:Pe,[Pe]:Gn,[vn]:vn},p=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:LS,fragmentShader:PS}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new Cn;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new de(g,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ku;let h=this.type;this.render=function(A,w,X){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Fn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const W=h!==gn&&this.type===gn,R=h===gn&&this.type!==gn;for(let O=0,V=A.length;O<V;O++){const q=A[O],$=q.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const j=$.getFrameExtents();if(r.multiply(j),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,$.mapSize.y=s.y)),$.map===null||W===!0||R===!0){const rt=this.type!==gn?{minFilter:be,magFilter:be}:{};$.map!==null&&$.map.dispose(),$.map=new hi(r.x,r.y,rt),$.map.texture.name=q.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const K=$.getViewportCount();for(let rt=0;rt<K;rt++){const st=$.getViewport(rt);o.set(s.x*st.x,s.y*st.y,s.x*st.z,s.y*st.w),U.viewport(o),$.updateMatrices(q,rt),i=$.getFrustum(),T(w,X,$.camera,q,this.type)}$.isPointLightShadow!==!0&&this.type===gn&&b($,X),$.needsUpdate=!1}h=this.type,d.needsUpdate=!1,n.setRenderTarget(E,M,H)};function b(A,w){const X=t.update(_);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new hi(r.x,r.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,X,p,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,X,m,_,null)}function S(A,w,X,E){let M=null;const H=X.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(H!==void 0)M=H;else if(M=X.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const U=M.uuid,W=w.uuid;let R=c[U];R===void 0&&(R={},c[U]=R);let O=R[W];O===void 0&&(O=M.clone(),R[W]=O,w.addEventListener("dispose",L)),M=O}if(M.visible=w.visible,M.wireframe=w.wireframe,E===gn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,X.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=n.properties.get(M);U.light=X}return M}function T(A,w,X,E,M){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===gn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld);const W=t.update(A),R=A.material;if(Array.isArray(R)){const O=W.groups;for(let V=0,q=O.length;V<q;V++){const $=O[V],j=R[$.materialIndex];if(j&&j.visible){const K=S(A,j,E,M);A.onBeforeShadow(n,A,w,X,W,K,$),n.renderBufferDirect(X,null,W,K,A,$),A.onAfterShadow(n,A,w,X,W,K,$)}}}else if(R.visible){const O=S(A,R,E,M);A.onBeforeShadow(n,A,w,X,W,O,null),n.renderBufferDirect(X,null,W,O,A,null),A.onAfterShadow(n,A,w,X,W,O,null)}}const U=A.children;for(let W=0,R=U.length;W<R;W++)T(U[W],w,X,E,M)}function L(A){A.target.removeEventListener("dispose",L);for(const X in c){const E=c[X],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function NS(n,t,e){const i=e.isWebGL2;function r(){let P=!1;const ct=new pe;let ut=null;const wt=new pe(0,0,0,0);return{setMask:function(bt){ut!==bt&&!P&&(n.colorMask(bt,bt,bt,bt),ut=bt)},setLocked:function(bt){P=bt},setClear:function(bt,Zt,Jt,ue,xe){xe===!0&&(bt*=ue,Zt*=ue,Jt*=ue),ct.set(bt,Zt,Jt,ue),wt.equals(ct)===!1&&(n.clearColor(bt,Zt,Jt,ue),wt.copy(ct))},reset:function(){P=!1,ut=null,wt.set(-1,0,0,0)}}}function s(){let P=!1,ct=null,ut=null,wt=null;return{setTest:function(bt){bt?gt(n.DEPTH_TEST):pt(n.DEPTH_TEST)},setMask:function(bt){ct!==bt&&!P&&(n.depthMask(bt),ct=bt)},setFunc:function(bt){if(ut!==bt){switch(bt){case eg:n.depthFunc(n.NEVER);break;case ng:n.depthFunc(n.ALWAYS);break;case ig:n.depthFunc(n.LESS);break;case ys:n.depthFunc(n.LEQUAL);break;case rg:n.depthFunc(n.EQUAL);break;case sg:n.depthFunc(n.GEQUAL);break;case ag:n.depthFunc(n.GREATER);break;case og:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ut=bt}},setLocked:function(bt){P=bt},setClear:function(bt){wt!==bt&&(n.clearDepth(bt),wt=bt)},reset:function(){P=!1,ct=null,ut=null,wt=null}}}function o(){let P=!1,ct=null,ut=null,wt=null,bt=null,Zt=null,Jt=null,ue=null,xe=null;return{setTest:function(Qt){P||(Qt?gt(n.STENCIL_TEST):pt(n.STENCIL_TEST))},setMask:function(Qt){ct!==Qt&&!P&&(n.stencilMask(Qt),ct=Qt)},setFunc:function(Qt,Se,sn){(ut!==Qt||wt!==Se||bt!==sn)&&(n.stencilFunc(Qt,Se,sn),ut=Qt,wt=Se,bt=sn)},setOp:function(Qt,Se,sn){(Zt!==Qt||Jt!==Se||ue!==sn)&&(n.stencilOp(Qt,Se,sn),Zt=Qt,Jt=Se,ue=sn)},setLocked:function(Qt){P=Qt},setClear:function(Qt){xe!==Qt&&(n.clearStencil(Qt),xe=Qt)},reset:function(){P=!1,ct=null,ut=null,wt=null,bt=null,Zt=null,Jt=null,ue=null,xe=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let p={},m={},g=new WeakMap,_=[],d=null,h=!1,b=null,S=null,T=null,L=null,A=null,w=null,X=null,E=new Wt(0,0,0),M=0,H=!1,U=null,W=null,R=null,O=null,V=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,j=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(K)[1]),$=j>=1):K.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),$=j>=2);let rt=null,st={};const C=n.getParameter(n.SCISSOR_BOX),D=n.getParameter(n.VIEWPORT),Y=new pe().fromArray(C),it=new pe().fromArray(D);function tt(P,ct,ut,wt){const bt=new Uint8Array(4),Zt=n.createTexture();n.bindTexture(P,Zt),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Jt=0;Jt<ut;Jt++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(ct,0,n.RGBA,1,1,wt,0,n.RGBA,n.UNSIGNED_BYTE,bt):n.texImage2D(ct+Jt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,bt);return Zt}const ht={};ht[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),ht[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ht[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ht[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),gt(n.DEPTH_TEST),l.setFunc(ys),Nt(!1),y(vl),gt(n.CULL_FACE),vt(Fn);function gt(P){p[P]!==!0&&(n.enable(P),p[P]=!0)}function pt(P){p[P]!==!1&&(n.disable(P),p[P]=!1)}function dt(P,ct){return m[P]!==ct?(n.bindFramebuffer(P,ct),m[P]=ct,i&&(P===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ct),P===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ct)),!0):!1}function I(P,ct){let ut=_,wt=!1;if(P)if(ut=g.get(ct),ut===void 0&&(ut=[],g.set(ct,ut)),P.isWebGLMultipleRenderTargets){const bt=P.texture;if(ut.length!==bt.length||ut[0]!==n.COLOR_ATTACHMENT0){for(let Zt=0,Jt=bt.length;Zt<Jt;Zt++)ut[Zt]=n.COLOR_ATTACHMENT0+Zt;ut.length=bt.length,wt=!0}}else ut[0]!==n.COLOR_ATTACHMENT0&&(ut[0]=n.COLOR_ATTACHMENT0,wt=!0);else ut[0]!==n.BACK&&(ut[0]=n.BACK,wt=!0);wt&&(e.isWebGL2?n.drawBuffers(ut):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ut))}function jt(P){return d!==P?(n.useProgram(P),d=P,!0):!1}const Mt={[ei]:n.FUNC_ADD,[z_]:n.FUNC_SUBTRACT,[V_]:n.FUNC_REVERSE_SUBTRACT};if(i)Mt[Ml]=n.MIN,Mt[yl]=n.MAX;else{const P=t.get("EXT_blend_minmax");P!==null&&(Mt[Ml]=P.MIN_EXT,Mt[yl]=P.MAX_EXT)}const Rt={[k_]:n.ZERO,[G_]:n.ONE,[W_]:n.SRC_COLOR,[Ya]:n.SRC_ALPHA,[K_]:n.SRC_ALPHA_SATURATE,[q_]:n.DST_COLOR,[X_]:n.DST_ALPHA,[$_]:n.ONE_MINUS_SRC_COLOR,[qa]:n.ONE_MINUS_SRC_ALPHA,[j_]:n.ONE_MINUS_DST_COLOR,[Y_]:n.ONE_MINUS_DST_ALPHA,[Z_]:n.CONSTANT_COLOR,[J_]:n.ONE_MINUS_CONSTANT_COLOR,[Q_]:n.CONSTANT_ALPHA,[tg]:n.ONE_MINUS_CONSTANT_ALPHA};function vt(P,ct,ut,wt,bt,Zt,Jt,ue,xe,Qt){if(P===Fn){h===!0&&(pt(n.BLEND),h=!1);return}if(h===!1&&(gt(n.BLEND),h=!0),P!==H_){if(P!==b||Qt!==H){if((S!==ei||A!==ei)&&(n.blendEquation(n.FUNC_ADD),S=ei,A=ei),Qt)switch(P){case zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case El:n.blendFunc(n.ONE,n.ONE);break;case xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case El:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,L=null,w=null,X=null,E.set(0,0,0),M=0,b=P,H=Qt}return}bt=bt||ct,Zt=Zt||ut,Jt=Jt||wt,(ct!==S||bt!==A)&&(n.blendEquationSeparate(Mt[ct],Mt[bt]),S=ct,A=bt),(ut!==T||wt!==L||Zt!==w||Jt!==X)&&(n.blendFuncSeparate(Rt[ut],Rt[wt],Rt[Zt],Rt[Jt]),T=ut,L=wt,w=Zt,X=Jt),(ue.equals(E)===!1||xe!==M)&&(n.blendColor(ue.r,ue.g,ue.b,xe),E.copy(ue),M=xe),b=P,H=!1}function Kt(P,ct){P.side===vn?pt(n.CULL_FACE):gt(n.CULL_FACE);let ut=P.side===Pe;ct&&(ut=!ut),Nt(ut),P.blending===zi&&P.transparent===!1?vt(Fn):vt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const wt=P.stencilWrite;c.setTest(wt),wt&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),B(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?gt(n.SAMPLE_ALPHA_TO_COVERAGE):pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(P){U!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),U=P)}function y(P){P!==O_?(gt(n.CULL_FACE),P!==W&&(P===vl?n.cullFace(n.BACK):P===F_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pt(n.CULL_FACE),W=P}function v(P){P!==R&&($&&n.lineWidth(P),R=P)}function B(P,ct,ut){P?(gt(n.POLYGON_OFFSET_FILL),(O!==ct||V!==ut)&&(n.polygonOffset(ct,ut),O=ct,V=ut)):pt(n.POLYGON_OFFSET_FILL)}function et(P){P?gt(n.SCISSOR_TEST):pt(n.SCISSOR_TEST)}function J(P){P===void 0&&(P=n.TEXTURE0+q-1),rt!==P&&(n.activeTexture(P),rt=P)}function nt(P,ct,ut){ut===void 0&&(rt===null?ut=n.TEXTURE0+q-1:ut=rt);let wt=st[ut];wt===void 0&&(wt={type:void 0,texture:void 0},st[ut]=wt),(wt.type!==P||wt.texture!==ct)&&(rt!==ut&&(n.activeTexture(ut),rt=ut),n.bindTexture(P,ct||ht[P]),wt.type=P,wt.texture=ct)}function Et(){const P=st[rt];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function lt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function mt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ft(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Yt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function kt(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Lt(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function yt(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _t(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ut(P){Y.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Y.copy(P))}function Xt(P){it.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),it.copy(P))}function ne(P,ct){let ut=f.get(ct);ut===void 0&&(ut=new WeakMap,f.set(ct,ut));let wt=ut.get(P);wt===void 0&&(wt=n.getUniformBlockIndex(ct,P.name),ut.set(P,wt))}function Ht(P,ct){const wt=f.get(ct).get(P);u.get(ct)!==wt&&(n.uniformBlockBinding(ct,wt,P.__bindingPointIndex),u.set(ct,wt))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},rt=null,st={},m={},g=new WeakMap,_=[],d=null,h=!1,b=null,S=null,T=null,L=null,A=null,w=null,X=null,E=new Wt(0,0,0),M=0,H=!1,U=null,W=null,R=null,O=null,V=null,Y.set(0,0,n.canvas.width,n.canvas.height),it.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:gt,disable:pt,bindFramebuffer:dt,drawBuffers:I,useProgram:jt,setBlending:vt,setMaterial:Kt,setFlipSided:Nt,setCullFace:y,setLineWidth:v,setPolygonOffset:B,setScissorTest:et,activeTexture:J,bindTexture:nt,unbindTexture:Et,compressedTexImage2D:lt,compressedTexImage3D:mt,texImage2D:yt,texImage3D:_t,updateUBOMapping:ne,uniformBlockBinding:Ht,texStorage2D:kt,texStorage3D:Lt,texSubImage2D:Tt,texSubImage3D:Ft,compressedTexSubImage2D:Q,compressedTexSubImage3D:Yt,scissor:Ut,viewport:Xt,reset:at}}function IS(n,t,e,i,r,s,o){const a=r.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,v){return m?new OffscreenCanvas(y,v):Rs("canvas")}function _(y,v,B,et){let J=1;if((y.width>et||y.height>et)&&(J=et/Math.max(y.width,y.height)),J<1||v===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const nt=v?to:Math.floor,Et=nt(J*y.width),lt=nt(J*y.height);f===void 0&&(f=g(Et,lt));const mt=B?g(Et,lt):f;return mt.width=Et,mt.height=lt,mt.getContext("2d").drawImage(y,0,0,Et,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+Et+"x"+lt+")."),mt}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function d(y){return Ql(y.width)&&Ql(y.height)}function h(y){return a?!1:y.wrapS!==tn||y.wrapT!==tn||y.minFilter!==be&&y.minFilter!==Ge}function b(y,v){return y.generateMipmaps&&v&&y.minFilter!==be&&y.minFilter!==Ge}function S(y){n.generateMipmap(y)}function T(y,v,B,et,J=!1){if(a===!1)return v;if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let nt=v;if(v===n.RED&&(B===n.FLOAT&&(nt=n.R32F),B===n.HALF_FLOAT&&(nt=n.R16F),B===n.UNSIGNED_BYTE&&(nt=n.R8)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(nt=n.R8UI),B===n.UNSIGNED_SHORT&&(nt=n.R16UI),B===n.UNSIGNED_INT&&(nt=n.R32UI),B===n.BYTE&&(nt=n.R8I),B===n.SHORT&&(nt=n.R16I),B===n.INT&&(nt=n.R32I)),v===n.RG&&(B===n.FLOAT&&(nt=n.RG32F),B===n.HALF_FLOAT&&(nt=n.RG16F),B===n.UNSIGNED_BYTE&&(nt=n.RG8)),v===n.RGBA){const Et=J?bs:qt.getTransfer(et);B===n.FLOAT&&(nt=n.RGBA32F),B===n.HALF_FLOAT&&(nt=n.RGBA16F),B===n.UNSIGNED_BYTE&&(nt=Et===te?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(nt=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(nt=n.RGB5_A1)}return(nt===n.R16F||nt===n.R32F||nt===n.RG16F||nt===n.RG32F||nt===n.RGBA16F||nt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function L(y,v,B){return b(y,B)===!0||y.isFramebufferTexture&&y.minFilter!==be&&y.minFilter!==Ge?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function A(y){return y===be||y===Tl||y===oa?n.NEAREST:n.LINEAR}function w(y){const v=y.target;v.removeEventListener("dispose",w),E(v),v.isVideoTexture&&u.delete(v)}function X(y){const v=y.target;v.removeEventListener("dispose",X),H(v)}function E(y){const v=i.get(y);if(v.__webglInit===void 0)return;const B=y.source,et=p.get(B);if(et){const J=et[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(y),Object.keys(et).length===0&&p.delete(B)}i.remove(y)}function M(y){const v=i.get(y);n.deleteTexture(v.__webglTexture);const B=y.source,et=p.get(B);delete et[v.__cacheKey],o.memory.textures--}function H(y){const v=y.texture,B=i.get(y),et=i.get(v);if(et.__webglTexture!==void 0&&(n.deleteTexture(et.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(B.__webglFramebuffer[J]))for(let nt=0;nt<B.__webglFramebuffer[J].length;nt++)n.deleteFramebuffer(B.__webglFramebuffer[J][nt]);else n.deleteFramebuffer(B.__webglFramebuffer[J]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[J])}else{if(Array.isArray(B.__webglFramebuffer))for(let J=0;J<B.__webglFramebuffer.length;J++)n.deleteFramebuffer(B.__webglFramebuffer[J]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let J=0;J<B.__webglColorRenderbuffer.length;J++)B.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[J]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let J=0,nt=v.length;J<nt;J++){const Et=i.get(v[J]);Et.__webglTexture&&(n.deleteTexture(Et.__webglTexture),o.memory.textures--),i.remove(v[J])}i.remove(v),i.remove(y)}let U=0;function W(){U=0}function R(){const y=U;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),U+=1,y}function O(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function V(y,v){const B=i.get(y);if(y.isVideoTexture&&Kt(y),y.isRenderTargetTexture===!1&&y.version>0&&B.__version!==y.version){const et=y.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,y,v);return}}e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function q(y,v){const B=i.get(y);if(y.version>0&&B.__version!==y.version){Y(B,y,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function $(y,v){const B=i.get(y);if(y.version>0&&B.__version!==y.version){Y(B,y,v);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function j(y,v){const B=i.get(y);if(y.version>0&&B.__version!==y.version){it(B,y,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}const K={[Ts]:n.REPEAT,[tn]:n.CLAMP_TO_EDGE,[Za]:n.MIRRORED_REPEAT},rt={[be]:n.NEAREST,[Tl]:n.NEAREST_MIPMAP_NEAREST,[oa]:n.NEAREST_MIPMAP_LINEAR,[Ge]:n.LINEAR,[_g]:n.LINEAR_MIPMAP_NEAREST,[xr]:n.LINEAR_MIPMAP_LINEAR},st={[Cg]:n.NEVER,[Ig]:n.ALWAYS,[Rg]:n.LESS,[lh]:n.LEQUAL,[Lg]:n.EQUAL,[Ng]:n.GEQUAL,[Pg]:n.GREATER,[Dg]:n.NOTEQUAL};function C(y,v,B){if(B?(n.texParameteri(y,n.TEXTURE_WRAP_S,K[v.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,K[v.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,K[v.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,rt[v.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,rt[v.minFilter])):(n.texParameteri(y,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(y,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==tn||v.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(y,n.TEXTURE_MAG_FILTER,A(v.magFilter)),n.texParameteri(y,n.TEXTURE_MIN_FILTER,A(v.minFilter)),v.minFilter!==be&&v.minFilter!==Ge&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,st[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===be||v.minFilter!==oa&&v.minFilter!==xr||v.type===On&&t.has("OES_texture_float_linear")===!1||a===!1&&v.type===Sr&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(y,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function D(y,v){let B=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",w));const et=v.source;let J=p.get(et);J===void 0&&(J={},p.set(et,J));const nt=O(v);if(nt!==y.__cacheKey){J[nt]===void 0&&(J[nt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[nt].usedTimes++;const Et=J[y.__cacheKey];Et!==void 0&&(J[y.__cacheKey].usedTimes--,Et.usedTimes===0&&M(v)),y.__cacheKey=nt,y.__webglTexture=J[nt].texture}return B}function Y(y,v,B){let et=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(et=n.TEXTURE_3D);const J=D(y,v),nt=v.source;e.bindTexture(et,y.__webglTexture,n.TEXTURE0+B);const Et=i.get(nt);if(nt.version!==Et.__version||J===!0){e.activeTexture(n.TEXTURE0+B);const lt=qt.getPrimaries(qt.workingColorSpace),mt=v.colorSpace===$e?null:qt.getPrimaries(v.colorSpace),Tt=v.colorSpace===$e||lt===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Ft=h(v)&&d(v.image)===!1;let Q=_(v.image,Ft,!1,r.maxTextureSize);Q=Nt(v,Q);const Yt=d(Q)||a,kt=s.convert(v.format,v.colorSpace);let Lt=s.convert(v.type),yt=T(v.internalFormat,kt,Lt,v.colorSpace,v.isVideoTexture);C(et,v,Yt);let _t;const Ut=v.mipmaps,Xt=a&&v.isVideoTexture!==!0&&yt!==sh,ne=Et.__version===void 0||J===!0,Ht=L(v,Q,Yt);if(v.isDepthTexture)yt=n.DEPTH_COMPONENT,a?v.type===On?yt=n.DEPTH_COMPONENT32F:v.type===Un?yt=n.DEPTH_COMPONENT24:v.type===ai?yt=n.DEPTH24_STENCIL8:yt=n.DEPTH_COMPONENT16:v.type===On&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===oi&&yt===n.DEPTH_COMPONENT&&v.type!==Eo&&v.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Un,Lt=s.convert(v.type)),v.format===Zi&&yt===n.DEPTH_COMPONENT&&(yt=n.DEPTH_STENCIL,v.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=ai,Lt=s.convert(v.type))),ne&&(Xt?e.texStorage2D(n.TEXTURE_2D,1,yt,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,yt,Q.width,Q.height,0,kt,Lt,null));else if(v.isDataTexture)if(Ut.length>0&&Yt){Xt&&ne&&e.texStorage2D(n.TEXTURE_2D,Ht,yt,Ut[0].width,Ut[0].height);for(let at=0,P=Ut.length;at<P;at++)_t=Ut[at],Xt?e.texSubImage2D(n.TEXTURE_2D,at,0,0,_t.width,_t.height,kt,Lt,_t.data):e.texImage2D(n.TEXTURE_2D,at,yt,_t.width,_t.height,0,kt,Lt,_t.data);v.generateMipmaps=!1}else Xt?(ne&&e.texStorage2D(n.TEXTURE_2D,Ht,yt,Q.width,Q.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,kt,Lt,Q.data)):e.texImage2D(n.TEXTURE_2D,0,yt,Q.width,Q.height,0,kt,Lt,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Xt&&ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ht,yt,Ut[0].width,Ut[0].height,Q.depth);for(let at=0,P=Ut.length;at<P;at++)_t=Ut[at],v.format!==en?kt!==null?Xt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,_t.width,_t.height,Q.depth,kt,_t.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,at,yt,_t.width,_t.height,Q.depth,0,_t.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,_t.width,_t.height,Q.depth,kt,Lt,_t.data):e.texImage3D(n.TEXTURE_2D_ARRAY,at,yt,_t.width,_t.height,Q.depth,0,kt,Lt,_t.data)}else{Xt&&ne&&e.texStorage2D(n.TEXTURE_2D,Ht,yt,Ut[0].width,Ut[0].height);for(let at=0,P=Ut.length;at<P;at++)_t=Ut[at],v.format!==en?kt!==null?Xt?e.compressedTexSubImage2D(n.TEXTURE_2D,at,0,0,_t.width,_t.height,kt,_t.data):e.compressedTexImage2D(n.TEXTURE_2D,at,yt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?e.texSubImage2D(n.TEXTURE_2D,at,0,0,_t.width,_t.height,kt,Lt,_t.data):e.texImage2D(n.TEXTURE_2D,at,yt,_t.width,_t.height,0,kt,Lt,_t.data)}else if(v.isDataArrayTexture)Xt?(ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ht,yt,Q.width,Q.height,Q.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,kt,Lt,Q.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,yt,Q.width,Q.height,Q.depth,0,kt,Lt,Q.data);else if(v.isData3DTexture)Xt?(ne&&e.texStorage3D(n.TEXTURE_3D,Ht,yt,Q.width,Q.height,Q.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,kt,Lt,Q.data)):e.texImage3D(n.TEXTURE_3D,0,yt,Q.width,Q.height,Q.depth,0,kt,Lt,Q.data);else if(v.isFramebufferTexture){if(ne)if(Xt)e.texStorage2D(n.TEXTURE_2D,Ht,yt,Q.width,Q.height);else{let at=Q.width,P=Q.height;for(let ct=0;ct<Ht;ct++)e.texImage2D(n.TEXTURE_2D,ct,yt,at,P,0,kt,Lt,null),at>>=1,P>>=1}}else if(Ut.length>0&&Yt){Xt&&ne&&e.texStorage2D(n.TEXTURE_2D,Ht,yt,Ut[0].width,Ut[0].height);for(let at=0,P=Ut.length;at<P;at++)_t=Ut[at],Xt?e.texSubImage2D(n.TEXTURE_2D,at,0,0,kt,Lt,_t):e.texImage2D(n.TEXTURE_2D,at,yt,kt,Lt,_t);v.generateMipmaps=!1}else Xt?(ne&&e.texStorage2D(n.TEXTURE_2D,Ht,yt,Q.width,Q.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,kt,Lt,Q)):e.texImage2D(n.TEXTURE_2D,0,yt,kt,Lt,Q);b(v,Yt)&&S(et),Et.__version=nt.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function it(y,v,B){if(v.image.length!==6)return;const et=D(y,v),J=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+B);const nt=i.get(J);if(J.version!==nt.__version||et===!0){e.activeTexture(n.TEXTURE0+B);const Et=qt.getPrimaries(qt.workingColorSpace),lt=v.colorSpace===$e?null:qt.getPrimaries(v.colorSpace),mt=v.colorSpace===$e||Et===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Tt=v.isCompressedTexture||v.image[0].isCompressedTexture,Ft=v.image[0]&&v.image[0].isDataTexture,Q=[];for(let at=0;at<6;at++)!Tt&&!Ft?Q[at]=_(v.image[at],!1,!0,r.maxCubemapSize):Q[at]=Ft?v.image[at].image:v.image[at],Q[at]=Nt(v,Q[at]);const Yt=Q[0],kt=d(Yt)||a,Lt=s.convert(v.format,v.colorSpace),yt=s.convert(v.type),_t=T(v.internalFormat,Lt,yt,v.colorSpace),Ut=a&&v.isVideoTexture!==!0,Xt=nt.__version===void 0||et===!0;let ne=L(v,Yt,kt);C(n.TEXTURE_CUBE_MAP,v,kt);let Ht;if(Tt){Ut&&Xt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ne,_t,Yt.width,Yt.height);for(let at=0;at<6;at++){Ht=Q[at].mipmaps;for(let P=0;P<Ht.length;P++){const ct=Ht[P];v.format!==en?Lt!==null?Ut?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,P,0,0,ct.width,ct.height,Lt,ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,P,_t,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,P,0,0,ct.width,ct.height,Lt,yt,ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,P,_t,ct.width,ct.height,0,Lt,yt,ct.data)}}}else{Ht=v.mipmaps,Ut&&Xt&&(Ht.length>0&&ne++,e.texStorage2D(n.TEXTURE_CUBE_MAP,ne,_t,Q[0].width,Q[0].height));for(let at=0;at<6;at++)if(Ft){Ut?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Q[at].width,Q[at].height,Lt,yt,Q[at].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,_t,Q[at].width,Q[at].height,0,Lt,yt,Q[at].data);for(let P=0;P<Ht.length;P++){const ut=Ht[P].image[at].image;Ut?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,P+1,0,0,ut.width,ut.height,Lt,yt,ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,P+1,_t,ut.width,ut.height,0,Lt,yt,ut.data)}}else{Ut?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Lt,yt,Q[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,_t,Lt,yt,Q[at]);for(let P=0;P<Ht.length;P++){const ct=Ht[P];Ut?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,P+1,0,0,Lt,yt,ct.image[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,P+1,_t,Lt,yt,ct.image[at])}}}b(v,kt)&&S(n.TEXTURE_CUBE_MAP),nt.__version=J.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function tt(y,v,B,et,J,nt){const Et=s.convert(B.format,B.colorSpace),lt=s.convert(B.type),mt=T(B.internalFormat,Et,lt,B.colorSpace);if(!i.get(v).__hasExternalTextures){const Ft=Math.max(1,v.width>>nt),Q=Math.max(1,v.height>>nt);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,nt,mt,Ft,Q,v.depth,0,Et,lt,null):e.texImage2D(J,nt,mt,Ft,Q,0,Et,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,y),vt(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,J,i.get(B).__webglTexture,0,Rt(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,J,i.get(B).__webglTexture,nt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(y,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,y),v.depthBuffer&&!v.stencilBuffer){let et=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||vt(v)){const J=v.depthTexture;J&&J.isDepthTexture&&(J.type===On?et=n.DEPTH_COMPONENT32F:J.type===Un&&(et=n.DEPTH_COMPONENT24));const nt=Rt(v);vt(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nt,et,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,et,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,et,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,y)}else if(v.depthBuffer&&v.stencilBuffer){const et=Rt(v);B&&vt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,et,n.DEPTH24_STENCIL8,v.width,v.height):vt(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,y)}else{const et=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let J=0;J<et.length;J++){const nt=et[J],Et=s.convert(nt.format,nt.colorSpace),lt=s.convert(nt.type),mt=T(nt.internalFormat,Et,lt,nt.colorSpace),Tt=Rt(v);B&&vt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,mt,v.width,v.height):vt(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt,mt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,mt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function gt(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const et=i.get(v.depthTexture).__webglTexture,J=Rt(v);if(v.depthTexture.format===oi)vt(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(v.depthTexture.format===Zi)vt(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function pt(y){const v=i.get(y),B=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");gt(v.__webglFramebuffer,y)}else if(B){v.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[et]),v.__webglDepthbuffer[et]=n.createRenderbuffer(),ht(v.__webglDepthbuffer[et],y,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),ht(v.__webglDepthbuffer,y,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(y,v,B){const et=i.get(y);v!==void 0&&tt(et.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&pt(y)}function I(y){const v=y.texture,B=i.get(y),et=i.get(v);y.addEventListener("dispose",X),y.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=v.version,o.memory.textures++);const J=y.isWebGLCubeRenderTarget===!0,nt=y.isWebGLMultipleRenderTargets===!0,Et=d(y)||a;if(J){B.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(a&&v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[lt]=[];for(let mt=0;mt<v.mipmaps.length;mt++)B.__webglFramebuffer[lt][mt]=n.createFramebuffer()}else B.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let lt=0;lt<v.mipmaps.length;lt++)B.__webglFramebuffer[lt]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(nt)if(r.drawBuffers){const lt=y.texture;for(let mt=0,Tt=lt.length;mt<Tt;mt++){const Ft=i.get(lt[mt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&vt(y)===!1){const lt=nt?v:[v];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let mt=0;mt<lt.length;mt++){const Tt=lt[mt];B.__webglColorRenderbuffer[mt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[mt]);const Ft=s.convert(Tt.format,Tt.colorSpace),Q=s.convert(Tt.type),Yt=T(Tt.internalFormat,Ft,Q,Tt.colorSpace,y.isXRRenderTarget===!0),kt=Rt(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,kt,Yt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,B.__webglColorRenderbuffer[mt])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ht(B.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),C(n.TEXTURE_CUBE_MAP,v,Et);for(let lt=0;lt<6;lt++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let mt=0;mt<v.mipmaps.length;mt++)tt(B.__webglFramebuffer[lt][mt],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,mt);else tt(B.__webglFramebuffer[lt],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);b(v,Et)&&S(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){const lt=y.texture;for(let mt=0,Tt=lt.length;mt<Tt;mt++){const Ft=lt[mt],Q=i.get(Ft);e.bindTexture(n.TEXTURE_2D,Q.__webglTexture),C(n.TEXTURE_2D,Ft,Et),tt(B.__webglFramebuffer,y,Ft,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,0),b(Ft,Et)&&S(n.TEXTURE_2D)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?lt=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(lt,et.__webglTexture),C(lt,v,Et),a&&v.mipmaps&&v.mipmaps.length>0)for(let mt=0;mt<v.mipmaps.length;mt++)tt(B.__webglFramebuffer[mt],y,v,n.COLOR_ATTACHMENT0,lt,mt);else tt(B.__webglFramebuffer,y,v,n.COLOR_ATTACHMENT0,lt,0);b(v,Et)&&S(lt),e.unbindTexture()}y.depthBuffer&&pt(y)}function jt(y){const v=d(y)||a,B=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let et=0,J=B.length;et<J;et++){const nt=B[et];if(b(nt,v)){const Et=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,lt=i.get(nt).__webglTexture;e.bindTexture(Et,lt),S(Et),e.unbindTexture()}}}function Mt(y){if(a&&y.samples>0&&vt(y)===!1){const v=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],B=y.width,et=y.height;let J=n.COLOR_BUFFER_BIT;const nt=[],Et=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=i.get(y),mt=y.isWebGLMultipleRenderTargets===!0;if(mt)for(let Tt=0;Tt<v.length;Tt++)e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let Tt=0;Tt<v.length;Tt++){nt.push(n.COLOR_ATTACHMENT0+Tt),y.depthBuffer&&nt.push(Et);const Ft=lt.__ignoreDepthValues!==void 0?lt.__ignoreDepthValues:!1;if(Ft===!1&&(y.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),mt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,lt.__webglColorRenderbuffer[Tt]),Ft===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Et]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Et])),mt){const Q=i.get(v[Tt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,B,et,0,0,B,et,J,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),mt)for(let Tt=0;Tt<v.length;Tt++){e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,lt.__webglColorRenderbuffer[Tt]);const Ft=i.get(v[Tt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,Ft,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}}function Rt(y){return Math.min(r.maxSamples,y.samples)}function vt(y){const v=i.get(y);return a&&y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Kt(y){const v=o.render.frame;u.get(y)!==v&&(u.set(y,v),y.update())}function Nt(y,v){const B=y.colorSpace,et=y.format,J=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Ja||B!==An&&B!==$e&&(qt.getTransfer(B)===te?a===!1?t.has("EXT_sRGB")===!0&&et===en?(y.format=Ja,y.minFilter=Ge,y.generateMipmaps=!1):v=uh.sRGBToLinear(v):(et!==en||J!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}this.allocateTextureUnit=R,this.resetTextureUnits=W,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=$,this.setTextureCube=j,this.rebindTextures=dt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=vt}function US(n,t,e){const i=e.isWebGL2;function r(s,o=$e){let a;const l=qt.getTransfer(o);if(s===Hn)return n.UNSIGNED_BYTE;if(s===th)return n.UNSIGNED_SHORT_4_4_4_4;if(s===eh)return n.UNSIGNED_SHORT_5_5_5_1;if(s===gg)return n.BYTE;if(s===vg)return n.SHORT;if(s===Eo)return n.UNSIGNED_SHORT;if(s===Qu)return n.INT;if(s===Un)return n.UNSIGNED_INT;if(s===On)return n.FLOAT;if(s===Sr)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Eg)return n.ALPHA;if(s===en)return n.RGBA;if(s===xg)return n.LUMINANCE;if(s===Sg)return n.LUMINANCE_ALPHA;if(s===oi)return n.DEPTH_COMPONENT;if(s===Zi)return n.DEPTH_STENCIL;if(s===Ja)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Mg)return n.RED;if(s===nh)return n.RED_INTEGER;if(s===yg)return n.RG;if(s===ih)return n.RG_INTEGER;if(s===rh)return n.RGBA_INTEGER;if(s===la||s===ca||s===ua||s===ha)if(l===te)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===la)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===la)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ca)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ua)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ha)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===bl||s===Al||s===wl||s===Cl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===bl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Al)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Cl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Rl||s===Ll)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Rl)return l===te?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ll)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Pl||s===Dl||s===Nl||s===Il||s===Ul||s===Ol||s===Fl||s===Bl||s===Hl||s===zl||s===Vl||s===kl||s===Gl||s===Wl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Pl)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Dl)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Nl)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Il)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ul)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ol)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fl)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Bl)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hl)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===zl)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vl)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===kl)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Gl)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wl)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===fa||s===$l||s===Xl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===fa)return l===te?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===$l)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Xl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Tg||s===Yl||s===ql||s===jl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===fa)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Yl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ql)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ai?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class OS extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Sn extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FS={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const d=e.getJointPose(_,i),h=this._getHandJoint(c,_);d!==null&&(h.matrix.fromArray(d.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=d.radius),h.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(FS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Sn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class BS extends ir{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,p=null,m=null,g=null;const _=e.getContextAttributes();let d=null,h=null;const b=[],S=[],T=new $t;let L=null;const A=new We;A.layers.enable(1),A.viewport=new pe;const w=new We;w.layers.enable(2),w.viewport=new pe;const X=[A,w],E=new OS;E.layers.enable(1),E.layers.enable(2);let M=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let D=b[C];return D===void 0&&(D=new Fa,b[C]=D),D.getTargetRaySpace()},this.getControllerGrip=function(C){let D=b[C];return D===void 0&&(D=new Fa,b[C]=D),D.getGripSpace()},this.getHand=function(C){let D=b[C];return D===void 0&&(D=new Fa,b[C]=D),D.getHandSpace()};function U(C){const D=S.indexOf(C.inputSource);if(D===-1)return;const Y=b[D];Y!==void 0&&(Y.update(C.inputSource,C.frame,c||o),Y.dispatchEvent({type:C.type,data:C.inputSource}))}function W(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",R);for(let C=0;C<b.length;C++){const D=S[C];D!==null&&(S[C]=null,b[C].disconnect(D))}M=null,H=null,t.setRenderTarget(d),m=null,p=null,f=null,r=null,h=null,st.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){s=C,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){a=C,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(C){c=C},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(C){if(r=C,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",W),r.addEventListener("inputsourceschange",R),_.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(T),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const D={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,D),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),h=new hi(m.framebufferWidth,m.framebufferHeight,{format:en,type:Hn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let D=null,Y=null,it=null;_.depth&&(it=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,D=_.stencil?Zi:oi,Y=_.stencil?ai:Un);const tt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:s};f=new XRWebGLBinding(r,e),p=f.createProjectionLayer(tt),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),h=new hi(p.textureWidth,p.textureHeight,{format:en,type:Hn,depthTexture:new Mh(p.textureWidth,p.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const ht=t.properties.get(h);ht.__ignoreDepthValues=p.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),st.setContext(r),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function R(C){for(let D=0;D<C.removed.length;D++){const Y=C.removed[D],it=S.indexOf(Y);it>=0&&(S[it]=null,b[it].disconnect(Y))}for(let D=0;D<C.added.length;D++){const Y=C.added[D];let it=S.indexOf(Y);if(it===-1){for(let ht=0;ht<b.length;ht++)if(ht>=S.length){S.push(Y),it=ht;break}else if(S[ht]===null){S[ht]=Y,it=ht;break}if(it===-1)break}const tt=b[it];tt&&tt.connect(Y)}}const O=new F,V=new F;function q(C,D,Y){O.setFromMatrixPosition(D.matrixWorld),V.setFromMatrixPosition(Y.matrixWorld);const it=O.distanceTo(V),tt=D.projectionMatrix.elements,ht=Y.projectionMatrix.elements,gt=tt[14]/(tt[10]-1),pt=tt[14]/(tt[10]+1),dt=(tt[9]+1)/tt[5],I=(tt[9]-1)/tt[5],jt=(tt[8]-1)/tt[0],Mt=(ht[8]+1)/ht[0],Rt=gt*jt,vt=gt*Mt,Kt=it/(-jt+Mt),Nt=Kt*-jt;D.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(Nt),C.translateZ(Kt),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert();const y=gt+Kt,v=pt+Kt,B=Rt-Nt,et=vt+(it-Nt),J=dt*pt/v*y,nt=I*pt/v*y;C.projectionMatrix.makePerspective(B,et,J,nt,y,v),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}function $(C,D){D===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(D.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(r===null)return;E.near=w.near=A.near=C.near,E.far=w.far=A.far=C.far,(M!==E.near||H!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),M=E.near,H=E.far);const D=C.parent,Y=E.cameras;$(E,D);for(let it=0;it<Y.length;it++)$(Y[it],D);Y.length===2?q(E,A,w):E.projectionMatrix.copy(A.projectionMatrix),j(C,E,D)};function j(C,D,Y){Y===null?C.matrix.copy(D.matrixWorld):(C.matrix.copy(Y.matrixWorld),C.matrix.invert(),C.matrix.multiply(D.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(D.projectionMatrix),C.projectionMatrixInverse.copy(D.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=Qa*2*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(C){l=C,p!==null&&(p.fixedFoveation=C),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=C)};let K=null;function rt(C,D){if(u=D.getViewerPose(c||o),g=D,u!==null){const Y=u.views;m!==null&&(t.setRenderTargetFramebuffer(h,m.framebuffer),t.setRenderTarget(h));let it=!1;Y.length!==E.cameras.length&&(E.cameras.length=0,it=!0);for(let tt=0;tt<Y.length;tt++){const ht=Y[tt];let gt=null;if(m!==null)gt=m.getViewport(ht);else{const dt=f.getViewSubImage(p,ht);gt=dt.viewport,tt===0&&(t.setRenderTargetTextures(h,dt.colorTexture,p.ignoreDepthValues?void 0:dt.depthStencilTexture),t.setRenderTarget(h))}let pt=X[tt];pt===void 0&&(pt=new We,pt.layers.enable(tt),pt.viewport=new pe,X[tt]=pt),pt.matrix.fromArray(ht.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(ht.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(gt.x,gt.y,gt.width,gt.height),tt===0&&(E.matrix.copy(pt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),it===!0&&E.cameras.push(pt)}}for(let Y=0;Y<b.length;Y++){const it=S[Y],tt=b[Y];it!==null&&tt!==void 0&&tt.update(it,D,c||o)}K&&K(C,D),D.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:D}),g=null}const st=new xh;st.setAnimationLoop(rt),this.setAnimationLoop=function(C){K=C},this.dispose=function(){}}}function HS(n,t){function e(d,h){d.matrixAutoUpdate===!0&&d.updateMatrix(),h.value.copy(d.matrix)}function i(d,h){h.color.getRGB(d.fogColor.value,gh(n)),h.isFog?(d.fogNear.value=h.near,d.fogFar.value=h.far):h.isFogExp2&&(d.fogDensity.value=h.density)}function r(d,h,b,S,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(d,h):h.isMeshToonMaterial?(s(d,h),f(d,h)):h.isMeshPhongMaterial?(s(d,h),u(d,h)):h.isMeshStandardMaterial?(s(d,h),p(d,h),h.isMeshPhysicalMaterial&&m(d,h,T)):h.isMeshMatcapMaterial?(s(d,h),g(d,h)):h.isMeshDepthMaterial?s(d,h):h.isMeshDistanceMaterial?(s(d,h),_(d,h)):h.isMeshNormalMaterial?s(d,h):h.isLineBasicMaterial?(o(d,h),h.isLineDashedMaterial&&a(d,h)):h.isPointsMaterial?l(d,h,b,S):h.isSpriteMaterial?c(d,h):h.isShadowMaterial?(d.color.value.copy(h.color),d.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(d,h){d.opacity.value=h.opacity,h.color&&d.diffuse.value.copy(h.color),h.emissive&&d.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(d.map.value=h.map,e(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.bumpMap&&(d.bumpMap.value=h.bumpMap,e(h.bumpMap,d.bumpMapTransform),d.bumpScale.value=h.bumpScale,h.side===Pe&&(d.bumpScale.value*=-1)),h.normalMap&&(d.normalMap.value=h.normalMap,e(h.normalMap,d.normalMapTransform),d.normalScale.value.copy(h.normalScale),h.side===Pe&&d.normalScale.value.negate()),h.displacementMap&&(d.displacementMap.value=h.displacementMap,e(h.displacementMap,d.displacementMapTransform),d.displacementScale.value=h.displacementScale,d.displacementBias.value=h.displacementBias),h.emissiveMap&&(d.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,d.emissiveMapTransform)),h.specularMap&&(d.specularMap.value=h.specularMap,e(h.specularMap,d.specularMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest);const b=t.get(h).envMap;if(b&&(d.envMap.value=b,d.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=h.reflectivity,d.ior.value=h.ior,d.refractionRatio.value=h.refractionRatio),h.lightMap){d.lightMap.value=h.lightMap;const S=n._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=h.lightMapIntensity*S,e(h.lightMap,d.lightMapTransform)}h.aoMap&&(d.aoMap.value=h.aoMap,d.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,d.aoMapTransform))}function o(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,h.map&&(d.map.value=h.map,e(h.map,d.mapTransform))}function a(d,h){d.dashSize.value=h.dashSize,d.totalSize.value=h.dashSize+h.gapSize,d.scale.value=h.scale}function l(d,h,b,S){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.size.value=h.size*b,d.scale.value=S*.5,h.map&&(d.map.value=h.map,e(h.map,d.uvTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function c(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.rotation.value=h.rotation,h.map&&(d.map.value=h.map,e(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function u(d,h){d.specular.value.copy(h.specular),d.shininess.value=Math.max(h.shininess,1e-4)}function f(d,h){h.gradientMap&&(d.gradientMap.value=h.gradientMap)}function p(d,h){d.metalness.value=h.metalness,h.metalnessMap&&(d.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,d.metalnessMapTransform)),d.roughness.value=h.roughness,h.roughnessMap&&(d.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,d.roughnessMapTransform)),t.get(h).envMap&&(d.envMapIntensity.value=h.envMapIntensity)}function m(d,h,b){d.ior.value=h.ior,h.sheen>0&&(d.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),d.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(d.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,d.sheenColorMapTransform)),h.sheenRoughnessMap&&(d.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,d.sheenRoughnessMapTransform))),h.clearcoat>0&&(d.clearcoat.value=h.clearcoat,d.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(d.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,d.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(d.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Pe&&d.clearcoatNormalScale.value.negate())),h.iridescence>0&&(d.iridescence.value=h.iridescence,d.iridescenceIOR.value=h.iridescenceIOR,d.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(d.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,d.iridescenceMapTransform)),h.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),h.transmission>0&&(d.transmission.value=h.transmission,d.transmissionSamplerMap.value=b.texture,d.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(d.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,d.transmissionMapTransform)),d.thickness.value=h.thickness,h.thicknessMap&&(d.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=h.attenuationDistance,d.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(d.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(d.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=h.specularIntensity,d.specularColor.value.copy(h.specularColor),h.specularColorMap&&(d.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,d.specularColorMapTransform)),h.specularIntensityMap&&(d.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,h){h.matcap&&(d.matcap.value=h.matcap)}function _(d,h){const b=t.get(h).light;d.referencePosition.value.setFromMatrixPosition(b.matrixWorld),d.nearDistance.value=b.shadow.camera.near,d.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function zS(n,t,e,i){let r={},s={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,S){const T=S.program;i.uniformBlockBinding(b,T)}function c(b,S){let T=r[b.id];T===void 0&&(g(b),T=u(b),r[b.id]=T,b.addEventListener("dispose",d));const L=S.program;i.updateUBOMapping(b,L);const A=t.render.frame;s[b.id]!==A&&(p(b),s[b.id]=A)}function u(b){const S=f();b.__bindingPointIndex=S;const T=n.createBuffer(),L=b.__size,A=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,L,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,T),T}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const S=r[b.id],T=b.uniforms,L=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let A=0,w=T.length;A<w;A++){const X=Array.isArray(T[A])?T[A]:[T[A]];for(let E=0,M=X.length;E<M;E++){const H=X[E];if(m(H,A,E,L)===!0){const U=H.__offset,W=Array.isArray(H.value)?H.value:[H.value];let R=0;for(let O=0;O<W.length;O++){const V=W[O],q=_(V);typeof V=="number"||typeof V=="boolean"?(H.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,U+R,H.__data)):V.isMatrix3?(H.__data[0]=V.elements[0],H.__data[1]=V.elements[1],H.__data[2]=V.elements[2],H.__data[3]=0,H.__data[4]=V.elements[3],H.__data[5]=V.elements[4],H.__data[6]=V.elements[5],H.__data[7]=0,H.__data[8]=V.elements[6],H.__data[9]=V.elements[7],H.__data[10]=V.elements[8],H.__data[11]=0):(V.toArray(H.__data,R),R+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,S,T,L){const A=b.value,w=S+"_"+T;if(L[w]===void 0)return typeof A=="number"||typeof A=="boolean"?L[w]=A:L[w]=A.clone(),!0;{const X=L[w];if(typeof A=="number"||typeof A=="boolean"){if(X!==A)return L[w]=A,!0}else if(X.equals(A)===!1)return X.copy(A),!0}return!1}function g(b){const S=b.uniforms;let T=0;const L=16;for(let w=0,X=S.length;w<X;w++){const E=Array.isArray(S[w])?S[w]:[S[w]];for(let M=0,H=E.length;M<H;M++){const U=E[M],W=Array.isArray(U.value)?U.value:[U.value];for(let R=0,O=W.length;R<O;R++){const V=W[R],q=_(V),$=T%L;$!==0&&L-$<q.boundary&&(T+=L-$),U.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=T,T+=q.storage}}}const A=T%L;return A>0&&(T+=L-A),b.__size=T,b.__cache={},this}function _(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function d(b){const S=b.target;S.removeEventListener("dispose",d);const T=o.indexOf(S.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function h(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Ch{constructor(t={}){const{canvas:e=Og(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,d=null;const h=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=me,this._useLegacyLights=!1,this.toneMapping=Bn,this.toneMappingExposure=1;const S=this;let T=!1,L=0,A=0,w=null,X=-1,E=null;const M=new pe,H=new pe;let U=null;const W=new Wt(0);let R=0,O=e.width,V=e.height,q=1,$=null,j=null;const K=new pe(0,0,O,V),rt=new pe(0,0,O,V);let st=!1;const C=new yo;let D=!1,Y=!1,it=null;const tt=new oe,ht=new $t,gt=new F,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function dt(){return w===null?q:1}let I=i;function jt(x,N){for(let k=0;k<x.length;k++){const G=x[k],z=e.getContext(G,N);if(z!==null)return z}return null}try{const x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vo}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",ct,!1),I===null){const N=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&N.shift(),I=jt(N,x),I===null)throw jt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Mt,Rt,vt,Kt,Nt,y,v,B,et,J,nt,Et,lt,mt,Tt,Ft,Q,Yt,kt,Lt,yt,_t,Ut,Xt;function ne(){Mt=new KE(I),Rt=new WE(I,Mt,t),Mt.init(Rt),_t=new US(I,Mt,Rt),vt=new NS(I,Mt,Rt),Kt=new QE(I),Nt=new ES,y=new IS(I,Mt,vt,Nt,Rt,_t,Kt),v=new XE(S),B=new jE(S),et=new ov(I,Rt),Ut=new kE(I,Mt,et,Rt),J=new ZE(I,et,Kt,Ut),nt=new ix(I,J,et,Kt),kt=new nx(I,Rt,y),Ft=new $E(Nt),Et=new vS(S,v,B,Mt,Rt,Ut,Ft),lt=new HS(S,Nt),mt=new SS,Tt=new wS(Mt,Rt),Yt=new VE(S,v,B,vt,nt,p,l),Q=new DS(S,nt,Rt),Xt=new zS(I,Kt,Rt,vt),Lt=new GE(I,Mt,Kt,Rt),yt=new JE(I,Mt,Kt,Rt),Kt.programs=Et.programs,S.capabilities=Rt,S.extensions=Mt,S.properties=Nt,S.renderLists=mt,S.shadowMap=Q,S.state=vt,S.info=Kt}ne();const Ht=new BS(S,I);this.xr=Ht,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const x=Mt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Mt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(x){x!==void 0&&(q=x,this.setSize(O,V,!1))},this.getSize=function(x){return x.set(O,V)},this.setSize=function(x,N,k=!0){if(Ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=x,V=N,e.width=Math.floor(x*q),e.height=Math.floor(N*q),k===!0&&(e.style.width=x+"px",e.style.height=N+"px"),this.setViewport(0,0,x,N)},this.getDrawingBufferSize=function(x){return x.set(O*q,V*q).floor()},this.setDrawingBufferSize=function(x,N,k){O=x,V=N,q=k,e.width=Math.floor(x*k),e.height=Math.floor(N*k),this.setViewport(0,0,x,N)},this.getCurrentViewport=function(x){return x.copy(M)},this.getViewport=function(x){return x.copy(K)},this.setViewport=function(x,N,k,G){x.isVector4?K.set(x.x,x.y,x.z,x.w):K.set(x,N,k,G),vt.viewport(M.copy(K).multiplyScalar(q).floor())},this.getScissor=function(x){return x.copy(rt)},this.setScissor=function(x,N,k,G){x.isVector4?rt.set(x.x,x.y,x.z,x.w):rt.set(x,N,k,G),vt.scissor(H.copy(rt).multiplyScalar(q).floor())},this.getScissorTest=function(){return st},this.setScissorTest=function(x){vt.setScissorTest(st=x)},this.setOpaqueSort=function(x){$=x},this.setTransparentSort=function(x){j=x},this.getClearColor=function(x){return x.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(x=!0,N=!0,k=!0){let G=0;if(x){let z=!1;if(w!==null){const ft=w.texture.format;z=ft===rh||ft===ih||ft===nh}if(z){const ft=w.texture.type,xt=ft===Hn||ft===Un||ft===Eo||ft===ai||ft===th||ft===eh,At=Yt.getClearColor(),Ct=Yt.getClearAlpha(),Bt=At.r,Dt=At.g,It=At.b;xt?(m[0]=Bt,m[1]=Dt,m[2]=It,m[3]=Ct,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=Bt,g[1]=Dt,g[2]=It,g[3]=Ct,I.clearBufferiv(I.COLOR,0,g))}else G|=I.COLOR_BUFFER_BIT}N&&(G|=I.DEPTH_BUFFER_BIT),k&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),mt.dispose(),Tt.dispose(),Nt.dispose(),v.dispose(),B.dispose(),nt.dispose(),Ut.dispose(),Xt.dispose(),Et.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",xe),Ht.removeEventListener("sessionend",Qt),it&&(it.dispose(),it=null),Se.stop()};function at(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const x=Kt.autoReset,N=Q.enabled,k=Q.autoUpdate,G=Q.needsUpdate,z=Q.type;ne(),Kt.autoReset=x,Q.enabled=N,Q.autoUpdate=k,Q.needsUpdate=G,Q.type=z}function ct(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ut(x){const N=x.target;N.removeEventListener("dispose",ut),wt(N)}function wt(x){bt(x),Nt.remove(x)}function bt(x){const N=Nt.get(x).programs;N!==void 0&&(N.forEach(function(k){Et.releaseProgram(k)}),x.isShaderMaterial&&Et.releaseShaderCache(x))}this.renderBufferDirect=function(x,N,k,G,z,ft){N===null&&(N=pt);const xt=z.isMesh&&z.matrixWorld.determinant()<0,At=Uh(x,N,k,G,z);vt.setMaterial(G,xt);let Ct=k.index,Bt=1;if(G.wireframe===!0){if(Ct=J.getWireframeAttribute(k),Ct===void 0)return;Bt=2}const Dt=k.drawRange,It=k.attributes.position;let re=Dt.start*Bt,Ne=(Dt.start+Dt.count)*Bt;ft!==null&&(re=Math.max(re,ft.start*Bt),Ne=Math.min(Ne,(ft.start+ft.count)*Bt)),Ct!==null?(re=Math.max(re,0),Ne=Math.min(Ne,Ct.count)):It!=null&&(re=Math.max(re,0),Ne=Math.min(Ne,It.count));const he=Ne-re;if(he<0||he===1/0)return;Ut.setup(z,G,At,k,Ct);let hn,ee=Lt;if(Ct!==null&&(hn=et.get(Ct),ee=yt,ee.setIndex(hn)),z.isMesh)G.wireframe===!0?(vt.setLineWidth(G.wireframeLinewidth*dt()),ee.setMode(I.LINES)):ee.setMode(I.TRIANGLES);else if(z.isLine){let zt=G.linewidth;zt===void 0&&(zt=1),vt.setLineWidth(zt*dt()),z.isLineSegments?ee.setMode(I.LINES):z.isLineLoop?ee.setMode(I.LINE_LOOP):ee.setMode(I.LINE_STRIP)}else z.isPoints?ee.setMode(I.POINTS):z.isSprite&&ee.setMode(I.TRIANGLES);if(z.isBatchedMesh)ee.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)ee.renderInstances(re,he,z.count);else if(k.isInstancedBufferGeometry){const zt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Vs=Math.min(k.instanceCount,zt);ee.renderInstances(re,he,Vs)}else ee.render(re,he)};function Zt(x,N,k){x.transparent===!0&&x.side===vn&&x.forceSinglePass===!1?(x.side=Pe,x.needsUpdate=!0,Fr(x,N,k),x.side=Gn,x.needsUpdate=!0,Fr(x,N,k),x.side=vn):Fr(x,N,k)}this.compile=function(x,N,k=null){k===null&&(k=x),d=Tt.get(k),d.init(),b.push(d),k.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),x!==k&&x.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights(S._useLegacyLights);const G=new Set;return x.traverse(function(z){const ft=z.material;if(ft)if(Array.isArray(ft))for(let xt=0;xt<ft.length;xt++){const At=ft[xt];Zt(At,k,z),G.add(At)}else Zt(ft,k,z),G.add(ft)}),b.pop(),d=null,G},this.compileAsync=function(x,N,k=null){const G=this.compile(x,N,k);return new Promise(z=>{function ft(){if(G.forEach(function(xt){Nt.get(xt).currentProgram.isReady()&&G.delete(xt)}),G.size===0){z(x);return}setTimeout(ft,10)}Mt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Jt=null;function ue(x){Jt&&Jt(x)}function xe(){Se.stop()}function Qt(){Se.start()}const Se=new xh;Se.setAnimationLoop(ue),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(x){Jt=x,Ht.setAnimationLoop(x),x===null?Se.stop():Se.start()},Ht.addEventListener("sessionstart",xe),Ht.addEventListener("sessionend",Qt),this.render=function(x,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(N),N=Ht.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,N,w),d=Tt.get(x,b.length),d.init(),b.push(d),tt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),C.setFromProjectionMatrix(tt),Y=this.localClippingEnabled,D=Ft.init(this.clippingPlanes,Y),_=mt.get(x,h.length),_.init(),h.push(_),sn(x,N,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort($,j),this.info.render.frame++,D===!0&&Ft.beginShadows();const k=d.state.shadowsArray;if(Q.render(k,x,N),D===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),Yt.render(_,x),d.setupLights(S._useLegacyLights),N.isArrayCamera){const G=N.cameras;for(let z=0,ft=G.length;z<ft;z++){const xt=G[z];Lo(_,x,xt,xt.viewport)}}else Lo(_,x,N);w!==null&&(y.updateMultisampleRenderTarget(w),y.updateRenderTargetMipmap(w)),x.isScene===!0&&x.onAfterRender(S,x,N),Ut.resetDefaultState(),X=-1,E=null,b.pop(),b.length>0?d=b[b.length-1]:d=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function sn(x,N,k,G){if(x.visible===!1)return;if(x.layers.test(N.layers)){if(x.isGroup)k=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(N);else if(x.isLight)d.pushLight(x),x.castShadow&&d.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||C.intersectsSprite(x)){G&&gt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(tt);const xt=nt.update(x),At=x.material;At.visible&&_.push(x,xt,At,k,gt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||C.intersectsObject(x))){const xt=nt.update(x),At=x.material;if(G&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),gt.copy(x.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),gt.copy(xt.boundingSphere.center)),gt.applyMatrix4(x.matrixWorld).applyMatrix4(tt)),Array.isArray(At)){const Ct=xt.groups;for(let Bt=0,Dt=Ct.length;Bt<Dt;Bt++){const It=Ct[Bt],re=At[It.materialIndex];re&&re.visible&&_.push(x,xt,re,k,gt.z,It)}}else At.visible&&_.push(x,xt,At,k,gt.z,null)}}const ft=x.children;for(let xt=0,At=ft.length;xt<At;xt++)sn(ft[xt],N,k,G)}function Lo(x,N,k,G){const z=x.opaque,ft=x.transmissive,xt=x.transparent;d.setupLightsView(k),D===!0&&Ft.setGlobalState(S.clippingPlanes,k),ft.length>0&&Ih(z,ft,N,k),G&&vt.viewport(M.copy(G)),z.length>0&&Or(z,N,k),ft.length>0&&Or(ft,N,k),xt.length>0&&Or(xt,N,k),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Ih(x,N,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const ft=Rt.isWebGL2;it===null&&(it=new hi(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")?Sr:Hn,minFilter:xr,samples:ft?4:0})),S.getDrawingBufferSize(ht),ft?it.setSize(ht.x,ht.y):it.setSize(to(ht.x),to(ht.y));const xt=S.getRenderTarget();S.setRenderTarget(it),S.getClearColor(W),R=S.getClearAlpha(),R<1&&S.setClearColor(16777215,.5),S.clear();const At=S.toneMapping;S.toneMapping=Bn,Or(x,k,G),y.updateMultisampleRenderTarget(it),y.updateRenderTargetMipmap(it);let Ct=!1;for(let Bt=0,Dt=N.length;Bt<Dt;Bt++){const It=N[Bt],re=It.object,Ne=It.geometry,he=It.material,hn=It.group;if(he.side===vn&&re.layers.test(G.layers)){const ee=he.side;he.side=Pe,he.needsUpdate=!0,Po(re,k,G,Ne,he,hn),he.side=ee,he.needsUpdate=!0,Ct=!0}}Ct===!0&&(y.updateMultisampleRenderTarget(it),y.updateRenderTargetMipmap(it)),S.setRenderTarget(xt),S.setClearColor(W,R),S.toneMapping=At}function Or(x,N,k){const G=N.isScene===!0?N.overrideMaterial:null;for(let z=0,ft=x.length;z<ft;z++){const xt=x[z],At=xt.object,Ct=xt.geometry,Bt=G===null?xt.material:G,Dt=xt.group;At.layers.test(k.layers)&&Po(At,N,k,Ct,Bt,Dt)}}function Po(x,N,k,G,z,ft){x.onBeforeRender(S,N,k,G,z,ft),x.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(S,N,k,G,x,ft),z.transparent===!0&&z.side===vn&&z.forceSinglePass===!1?(z.side=Pe,z.needsUpdate=!0,S.renderBufferDirect(k,N,G,z,x,ft),z.side=Gn,z.needsUpdate=!0,S.renderBufferDirect(k,N,G,z,x,ft),z.side=vn):S.renderBufferDirect(k,N,G,z,x,ft),x.onAfterRender(S,N,k,G,z,ft)}function Fr(x,N,k){N.isScene!==!0&&(N=pt);const G=Nt.get(x),z=d.state.lights,ft=d.state.shadowsArray,xt=z.state.version,At=Et.getParameters(x,z.state,ft,N,k),Ct=Et.getProgramCacheKey(At);let Bt=G.programs;G.environment=x.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(x.isMeshStandardMaterial?B:v).get(x.envMap||G.environment),Bt===void 0&&(x.addEventListener("dispose",ut),Bt=new Map,G.programs=Bt);let Dt=Bt.get(Ct);if(Dt!==void 0){if(G.currentProgram===Dt&&G.lightsStateVersion===xt)return No(x,At),Dt}else At.uniforms=Et.getUniforms(x),x.onBuild(k,At,S),x.onBeforeCompile(At,S),Dt=Et.acquireProgram(At,Ct),Bt.set(Ct,Dt),G.uniforms=At.uniforms;const It=G.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(It.clippingPlanes=Ft.uniform),No(x,At),G.needsLights=Fh(x),G.lightsStateVersion=xt,G.needsLights&&(It.ambientLightColor.value=z.state.ambient,It.lightProbe.value=z.state.probe,It.directionalLights.value=z.state.directional,It.directionalLightShadows.value=z.state.directionalShadow,It.spotLights.value=z.state.spot,It.spotLightShadows.value=z.state.spotShadow,It.rectAreaLights.value=z.state.rectArea,It.ltc_1.value=z.state.rectAreaLTC1,It.ltc_2.value=z.state.rectAreaLTC2,It.pointLights.value=z.state.point,It.pointLightShadows.value=z.state.pointShadow,It.hemisphereLights.value=z.state.hemi,It.directionalShadowMap.value=z.state.directionalShadowMap,It.directionalShadowMatrix.value=z.state.directionalShadowMatrix,It.spotShadowMap.value=z.state.spotShadowMap,It.spotLightMatrix.value=z.state.spotLightMatrix,It.spotLightMap.value=z.state.spotLightMap,It.pointShadowMap.value=z.state.pointShadowMap,It.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=Dt,G.uniformsList=null,Dt}function Do(x){if(x.uniformsList===null){const N=x.currentProgram.getUniforms();x.uniformsList=gs.seqWithValue(N.seq,x.uniforms)}return x.uniformsList}function No(x,N){const k=Nt.get(x);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function Uh(x,N,k,G,z){N.isScene!==!0&&(N=pt),y.resetTextureUnits();const ft=N.fog,xt=G.isMeshStandardMaterial?N.environment:null,At=w===null?S.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:An,Ct=(G.isMeshStandardMaterial?B:v).get(G.envMap||xt),Bt=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Dt=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),It=!!k.morphAttributes.position,re=!!k.morphAttributes.normal,Ne=!!k.morphAttributes.color;let he=Bn;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(he=S.toneMapping);const hn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ee=hn!==void 0?hn.length:0,zt=Nt.get(G),Vs=d.state.lights;if(D===!0&&(Y===!0||x!==E)){const Ve=x===E&&G.id===X;Ft.setState(G,x,Ve)}let ie=!1;G.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Vs.state.version||zt.outputColorSpace!==At||z.isBatchedMesh&&zt.batching===!1||!z.isBatchedMesh&&zt.batching===!0||z.isInstancedMesh&&zt.instancing===!1||!z.isInstancedMesh&&zt.instancing===!0||z.isSkinnedMesh&&zt.skinning===!1||!z.isSkinnedMesh&&zt.skinning===!0||z.isInstancedMesh&&zt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&zt.instancingColor===!1&&z.instanceColor!==null||zt.envMap!==Ct||G.fog===!0&&zt.fog!==ft||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==Ft.numPlanes||zt.numIntersection!==Ft.numIntersection)||zt.vertexAlphas!==Bt||zt.vertexTangents!==Dt||zt.morphTargets!==It||zt.morphNormals!==re||zt.morphColors!==Ne||zt.toneMapping!==he||Rt.isWebGL2===!0&&zt.morphTargetsCount!==ee)&&(ie=!0):(ie=!0,zt.__version=G.version);let Yn=zt.currentProgram;ie===!0&&(Yn=Fr(G,N,z));let Io=!1,sr=!1,ks=!1;const ge=Yn.getUniforms(),qn=zt.uniforms;if(vt.useProgram(Yn.program)&&(Io=!0,sr=!0,ks=!0),G.id!==X&&(X=G.id,sr=!0),Io||E!==x){ge.setValue(I,"projectionMatrix",x.projectionMatrix),ge.setValue(I,"viewMatrix",x.matrixWorldInverse);const Ve=ge.map.cameraPosition;Ve!==void 0&&Ve.setValue(I,gt.setFromMatrixPosition(x.matrixWorld)),Rt.logarithmicDepthBuffer&&ge.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ge.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),E!==x&&(E=x,sr=!0,ks=!0)}if(z.isSkinnedMesh){ge.setOptional(I,z,"bindMatrix"),ge.setOptional(I,z,"bindMatrixInverse");const Ve=z.skeleton;Ve&&(Rt.floatVertexTextures?(Ve.boneTexture===null&&Ve.computeBoneTexture(),ge.setValue(I,"boneTexture",Ve.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(ge.setOptional(I,z,"batchingTexture"),ge.setValue(I,"batchingTexture",z._matricesTexture,y));const Gs=k.morphAttributes;if((Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0&&Rt.isWebGL2===!0)&&kt.update(z,k,Yn),(sr||zt.receiveShadow!==z.receiveShadow)&&(zt.receiveShadow=z.receiveShadow,ge.setValue(I,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(qn.envMap.value=Ct,qn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),sr&&(ge.setValue(I,"toneMappingExposure",S.toneMappingExposure),zt.needsLights&&Oh(qn,ks),ft&&G.fog===!0&&lt.refreshFogUniforms(qn,ft),lt.refreshMaterialUniforms(qn,G,q,V,it),gs.upload(I,Do(zt),qn,y)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(gs.upload(I,Do(zt),qn,y),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ge.setValue(I,"center",z.center),ge.setValue(I,"modelViewMatrix",z.modelViewMatrix),ge.setValue(I,"normalMatrix",z.normalMatrix),ge.setValue(I,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ve=G.uniformsGroups;for(let Ws=0,Bh=Ve.length;Ws<Bh;Ws++)if(Rt.isWebGL2){const Uo=Ve[Ws];Xt.update(Uo,Yn),Xt.bind(Uo,Yn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yn}function Oh(x,N){x.ambientLightColor.needsUpdate=N,x.lightProbe.needsUpdate=N,x.directionalLights.needsUpdate=N,x.directionalLightShadows.needsUpdate=N,x.pointLights.needsUpdate=N,x.pointLightShadows.needsUpdate=N,x.spotLights.needsUpdate=N,x.spotLightShadows.needsUpdate=N,x.rectAreaLights.needsUpdate=N,x.hemisphereLights.needsUpdate=N}function Fh(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(x,N,k){Nt.get(x.texture).__webglTexture=N,Nt.get(x.depthTexture).__webglTexture=k;const G=Nt.get(x);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=k===void 0,G.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,N){const k=Nt.get(x);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(x,N=0,k=0){w=x,L=N,A=k;let G=!0,z=null,ft=!1,xt=!1;if(x){const Ct=Nt.get(x);Ct.__useDefaultFramebuffer!==void 0?(vt.bindFramebuffer(I.FRAMEBUFFER,null),G=!1):Ct.__webglFramebuffer===void 0?y.setupRenderTarget(x):Ct.__hasExternalTextures&&y.rebindTextures(x,Nt.get(x.texture).__webglTexture,Nt.get(x.depthTexture).__webglTexture);const Bt=x.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(xt=!0);const Dt=Nt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Dt[N])?z=Dt[N][k]:z=Dt[N],ft=!0):Rt.isWebGL2&&x.samples>0&&y.useMultisampledRTT(x)===!1?z=Nt.get(x).__webglMultisampledFramebuffer:Array.isArray(Dt)?z=Dt[k]:z=Dt,M.copy(x.viewport),H.copy(x.scissor),U=x.scissorTest}else M.copy(K).multiplyScalar(q).floor(),H.copy(rt).multiplyScalar(q).floor(),U=st;if(vt.bindFramebuffer(I.FRAMEBUFFER,z)&&Rt.drawBuffers&&G&&vt.drawBuffers(x,z),vt.viewport(M),vt.scissor(H),vt.setScissorTest(U),ft){const Ct=Nt.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ct.__webglTexture,k)}else if(xt){const Ct=Nt.get(x.texture),Bt=N||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ct.__webglTexture,k||0,Bt)}X=-1},this.readRenderTargetPixels=function(x,N,k,G,z,ft,xt){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Nt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&xt!==void 0&&(At=At[xt]),At){vt.bindFramebuffer(I.FRAMEBUFFER,At);try{const Ct=x.texture,Bt=Ct.format,Dt=Ct.type;if(Bt!==en&&_t.convert(Bt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const It=Dt===Sr&&(Mt.has("EXT_color_buffer_half_float")||Rt.isWebGL2&&Mt.has("EXT_color_buffer_float"));if(Dt!==Hn&&_t.convert(Dt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Dt===On&&(Rt.isWebGL2||Mt.has("OES_texture_float")||Mt.has("WEBGL_color_buffer_float")))&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=x.width-G&&k>=0&&k<=x.height-z&&I.readPixels(N,k,G,z,_t.convert(Bt),_t.convert(Dt),ft)}finally{const Ct=w!==null?Nt.get(w).__webglFramebuffer:null;vt.bindFramebuffer(I.FRAMEBUFFER,Ct)}}},this.copyFramebufferToTexture=function(x,N,k=0){const G=Math.pow(2,-k),z=Math.floor(N.image.width*G),ft=Math.floor(N.image.height*G);y.setTexture2D(N,0),I.copyTexSubImage2D(I.TEXTURE_2D,k,0,0,x.x,x.y,z,ft),vt.unbindTexture()},this.copyTextureToTexture=function(x,N,k,G=0){const z=N.image.width,ft=N.image.height,xt=_t.convert(k.format),At=_t.convert(k.type);y.setTexture2D(k,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment),N.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,G,x.x,x.y,z,ft,xt,At,N.image.data):N.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,G,x.x,x.y,N.mipmaps[0].width,N.mipmaps[0].height,xt,N.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,G,x.x,x.y,xt,At,N.image),G===0&&k.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),vt.unbindTexture()},this.copyTextureToTexture3D=function(x,N,k,G,z=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ft=x.max.x-x.min.x+1,xt=x.max.y-x.min.y+1,At=x.max.z-x.min.z+1,Ct=_t.convert(G.format),Bt=_t.convert(G.type);let Dt;if(G.isData3DTexture)y.setTexture3D(G,0),Dt=I.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)y.setTexture2DArray(G,0),Dt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);const It=I.getParameter(I.UNPACK_ROW_LENGTH),re=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ne=I.getParameter(I.UNPACK_SKIP_PIXELS),he=I.getParameter(I.UNPACK_SKIP_ROWS),hn=I.getParameter(I.UNPACK_SKIP_IMAGES),ee=k.isCompressedTexture?k.mipmaps[z]:k.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ee.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ee.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,x.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,x.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,x.min.z),k.isDataTexture||k.isData3DTexture?I.texSubImage3D(Dt,z,N.x,N.y,N.z,ft,xt,At,Ct,Bt,ee.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Dt,z,N.x,N.y,N.z,ft,xt,At,Ct,ee.data)):I.texSubImage3D(Dt,z,N.x,N.y,N.z,ft,xt,At,Ct,Bt,ee),I.pixelStorei(I.UNPACK_ROW_LENGTH,It),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,re),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ne),I.pixelStorei(I.UNPACK_SKIP_ROWS,he),I.pixelStorei(I.UNPACK_SKIP_IMAGES,hn),z===0&&G.generateMipmaps&&I.generateMipmap(Dt),vt.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?y.setTextureCube(x,0):x.isData3DTexture?y.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?y.setTexture2DArray(x,0):y.setTexture2D(x,0),vt.unbindTexture()},this.resetState=function(){L=0,A=0,w=null,vt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===xo?"display-p3":"srgb",e.unpackColorSpace=qt.workingColorSpace===Fs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===me?li:ah}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===li?me:An}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class VS extends Ch{}VS.prototype.isWebGL1Renderer=!0;class bo{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=i}clone(){return new bo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class kS extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Rh extends De{constructor(t,e,i,r,s,o,a,l,c){super(t,e,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ao extends Cn{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],p=[],m=[];let g=0;const _=[],d=i/2;let h=0;b(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Oe(f,3)),this.setAttribute("normal",new Oe(p,3)),this.setAttribute("uv",new Oe(m,2));function b(){const T=new F,L=new F;let A=0;const w=(e-t)/i;for(let X=0;X<=s;X++){const E=[],M=X/s,H=M*(e-t)+t;for(let U=0;U<=r;U++){const W=U/r,R=W*l+a,O=Math.sin(R),V=Math.cos(R);L.x=H*O,L.y=-M*i+d,L.z=H*V,f.push(L.x,L.y,L.z),T.set(O,w,V).normalize(),p.push(T.x,T.y,T.z),m.push(W,1-M),E.push(g++)}_.push(E)}for(let X=0;X<r;X++)for(let E=0;E<s;E++){const M=_[E][X],H=_[E+1][X],U=_[E+1][X+1],W=_[E][X+1];u.push(M,H,W),u.push(H,U,W),A+=6}c.addGroup(h,A,0),h+=A}function S(T){const L=g,A=new $t,w=new F;let X=0;const E=T===!0?t:e,M=T===!0?1:-1;for(let U=1;U<=r;U++)f.push(0,d*M,0),p.push(0,M,0),m.push(.5,.5),g++;const H=g;for(let U=0;U<=r;U++){const R=U/r*l+a,O=Math.cos(R),V=Math.sin(R);w.x=E*V,w.y=d*M,w.z=E*O,f.push(w.x,w.y,w.z),p.push(0,M,0),A.x=O*.5+.5,A.y=V*.5*M+.5,m.push(A.x,A.y),g++}for(let U=0;U<r;U++){const W=L+U,R=H+U;T===!0?u.push(R,R+1,W):u.push(R+1,R,W),X+=3}c.addGroup(h,X,T===!0?1:2),h+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mr extends Cn{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new F,p=new F,m=[],g=[],_=[],d=[];for(let h=0;h<=i;h++){const b=[],S=h/i;let T=0;h===0&&o===0?T=.5/e:h===i&&l===Math.PI&&(T=-.5/e);for(let L=0;L<=e;L++){const A=L/e;f.x=-t*Math.cos(r+A*s)*Math.sin(o+S*a),f.y=t*Math.cos(o+S*a),f.z=t*Math.sin(r+A*s)*Math.sin(o+S*a),g.push(f.x,f.y,f.z),p.copy(f).normalize(),_.push(p.x,p.y,p.z),d.push(A+T,1-S),b.push(c++)}u.push(b)}for(let h=0;h<i;h++)for(let b=0;b<e;b++){const S=u[h][b+1],T=u[h][b],L=u[h+1][b],A=u[h+1][b+1];(h!==0||o>0)&&m.push(S,T,A),(h!==i-1||l<Math.PI)&&m.push(T,L,A)}this.setIndex(m),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(_,3)),this.setAttribute("uv",new Oe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class wo extends Dr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oh,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Lh extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class GS extends Lh{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ba=new oe,Bc=new F,Hc=new F;class WS{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yo,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Bc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bc),Hc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hc),e.updateMatrixWorld(),Ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ba),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class $S extends WS{constructor(){super(new Sh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class XS extends Lh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new $S}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class YS{constructor(t,e,i=0,r=1/0){this.ray=new dh(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return no(t,this,i,e),i.sort(zc),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)no(t[r],this,i,e);return i.sort(zc),i}}function zc(n,t){return n.distance-t.distance}function no(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)no(r[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vo);const Gt=(n,t,e,i,r,s)=>({name:n,price:t,unit:e,color:i,shape:r,desc:s}),Ir=[{id:"fruits",name:"FRUITS & VEGETABLES",color:"#2f9e44",items:[Gt("Apple",120,"kg",14692657,"sphere","Fresh red apples"),Gt("Banana",60,"dozen",16110399,"cyl","Ripe sweet bananas"),Gt("Orange",80,"kg",16749099,"sphere","Juicy Nagpur oranges"),Gt("Tomato",40,"kg",13183530,"sphere","Farm tomatoes"),Gt("Potato",30,"kg",11569512,"sphere","Everyday potatoes"),Gt("Carrot",50,"kg",16213767,"cyl","Crunchy carrots")]},{id:"grocery",name:"GROCERY",color:"#e8590c",items:[Gt("Rice",90,"kg",15856629,"box","Premium basmati rice"),Gt("Wheat",45,"kg",15320170,"box","Whole wheat atta"),Gt("Pasta",70,"pack",16766011,"box","Durum wheat pasta"),Gt("Cooking Oil",180,"litre",16429061,"cyl","Refined sunflower oil"),Gt("Sugar",48,"kg",16777215,"box","Fine white sugar"),Gt("Biscuits",30,"pack",9262372,"box","Crunchy butter biscuits")]},{id:"beverages",name:"BEVERAGES",color:"#1c7ed6",items:[Gt("Water",20,"bottle",7651580,"cyl","Mineral water 1L"),Gt("Cola",45,"can",13183530,"cyl","Chilled cola"),Gt("Juice",99,"carton",16749099,"box","Mixed fruit juice"),Gt("Energy Drink",125,"can",4243543,"cyl","Boost your day"),Gt("Coffee",320,"jar",6044974,"cyl","Instant coffee"),Gt("Tea",210,"pack",2853438,"box","Assam tea leaves")]},{id:"bakery",name:"BAKERY",color:"#d9480f",items:[Gt("Bread",50,"loaf",14262374,"box","Fresh sandwich bread"),Gt("Croissant",65,"piece",15246141,"cyl","Buttery croissant"),Gt("Cake",450,"each",16221100,"cyl","Chocolate cake"),Gt("Donut",55,"piece",16746375,"cyl","Glazed donut"),Gt("Muffin",60,"piece",9262372,"cyl","Blueberry muffin"),Gt("Cupcake",45,"piece",16564951,"cyl","Vanilla cupcake")]},{id:"electronics",name:"ELECTRONICS",color:"#7048e8",items:[Gt("Headphones",2499,"pair",2172201,"box","Wireless over-ear"),Gt("Smartwatch",3999,"piece",3559367,"box","Fitness tracking watch"),Gt("Bluetooth Speaker",1799,"piece",1867478,"cyl","Portable bass speaker"),Gt("Keyboard",999,"piece",4804695,"box","Slim keyboard"),Gt("Mouse",499,"piece",8818326,"box","Wireless mouse"),Gt("Power Bank",1299,"piece",1226886,"box","20000 mAh power bank")]},{id:"household",name:"HOUSEHOLD",color:"#0c8599",items:[Gt("Detergent",250,"pack",2264038,"box","Powerful stain remover"),Gt("Soap",35,"bar",16564951,"box","Moisturising soap"),Gt("Shampoo",185,"bottle",7950578,"cyl","Silky smooth shampoo"),Gt("Cleaning Spray",140,"bottle",2148759,"cyl","Multi-surface cleaner"),Gt("Tissues",60,"box",15201791,"box","Soft facial tissues"),Gt("Sponge",25,"pack",16429061,"box","Scrub sponge")]}],Te=(n,t={})=>new wo({color:n,roughness:.7,...t}),qS={box:new Fe(.7,.9,.5),cyl:new Ao(.3,.3,.8,12),sphere:new Mr(.38,12,10)},jS={box:.45,cyl:.4,sphere:.38},Oi=[[-12,-8],[0,-8],[12,-8],[-12,0],[0,0],[12,0]],Ha=[6,12,18];function KS(n,t,e,i=512,r=128){const s=document.createElement("canvas");s.width=i,s.height=r;const o=s.getContext("2d");o.fillStyle=e,o.fillRect(0,0,i,r),o.fillStyle=t,o.font="bold "+Math.round(r*(n.includes(`
`)?.3:.42))+"px sans-serif",o.textAlign="center",o.textBaseline="middle";const a=n.split(`
`);return a.forEach((l,c)=>o.fillText(l,i/2,r/2+(c-(a.length-1)/2)*r*.38)),new Rh(s)}const dr=(n,t,e,i,r)=>new de(new Nr(i,r),new ki({map:KS(n,t,e,512,Math.round(512*r/i))}));function Vc(n,t,e,i=1){const r=new Sn,s=Te(15843965),o=(c,u,f,p,m,g=r)=>{const _=new de(c,u);return _.position.set(f,p,m),g.add(_),_},a=c=>{const u=new Sn;return u.position.set(c,.8,0),r.add(u),o(new Fe(.28,.8,.3),Te(t),0,-.4,0,u),u};r.legL=a(-.17),r.legR=a(.17),o(new Fe(.7,.8,.4),Te(n),0,1.2,0);const l=c=>{const u=new Sn;return u.position.set(c,1.55,0),r.add(u),o(new Fe(.2,.7,.22),Te(n),0,-.3,0,u),u};return r.armL=l(-.46),r.armR=l(.46),o(new Mr(.26,12,10),s,0,1.85,0),o(new Mr(.28,12,8,0,6.28,0,1.6),Te(e),0,1.9,-.02),r.scale.setScalar(i),r}function kc(){const n=new Sn,t=Te(10134961,{metalness:.6}),e=new de(new Fe(.8,.45,1),new wo({color:7651580,transparent:!0,opacity:.55}));e.position.y=.65,n.add(e);const i=new de(new Fe(.8,.05,.05),t);i.position.set(0,1,-.5),n.add(i);const r=new de(new Fe(.7,.08,.9),t);return r.position.y=.3,n.add(r),n.load=new Sn,n.add(n.load),n}function ZS(n){const t=new Ch({canvas:n,antialias:!0});t.setPixelRatio(Math.min(devicePixelRatio,1.75));const e=new kS;e.background=new Wt(726320),e.fog=new bo(726320,35,80);const i=new We(55,1,.1,200);e.add(new GS(14674687,3359846,1.6));const r=new XS(16777215,1.1);r.position.set(10,25,15),e.add(r);const s=(C,D,Y,it)=>(C.position.set(D,Y,it),e.add(C),C),o=(C,D,Y,it,tt,ht,gt)=>s(new de(new Fe(C,D,Y),it),tt,ht,gt),a=document.createElement("canvas");a.width=a.height=64;const l=a.getContext("2d");l.fillStyle="#e3e9f0",l.fillRect(0,0,64,64),l.fillStyle="#c4cfdc",l.fillRect(0,0,32,32),l.fillRect(32,32,32,32);const c=new Rh(a);c.wrapS=c.wrapT=Ts,c.repeat.set(20,16);const u=s(new de(new Nr(40,32),Te(16777215,{map:c,roughness:.3})),0,0,0);u.rotation.x=-Math.PI/2;const f=Te(16054267);o(40,9,.4,f,0,4.5,-16),o(.4,9,32,f,-20,4.5,0),o(.4,9,32,f,20,4.5,0),o(40,.3,32,Te(1780298),0,9,0);const p=new ki({color:16776166});for(let C=-3;C<=3;C++)for(let D=-2;D<=2;D++)o(4,.1,.6,p,C*5.5,8.8,D*6);const m=new wo({color:8177663,transparent:!0,opacity:.25,metalness:.3});o(16,6,.1,m,-12,3,16),o(16,6,.1,m,12,3,16),o(8,2.5,.1,m,0,4.75,16);const g=o(2,3.5,.1,m,-1,1.75,16),_=o(2,3.5,.1,m,1,1.75,16);s(dr("MARTVERSE 3D","#fff","#1c7ed6",8,1.6),0,6.8,16.2),[[`WEEKEND SALE
30% OFF`,"#e8590c",-14],[`FRESH FRUITS
20% OFF`,"#2f9e44",0],[`ELECTRONICS
UP TO 40% OFF`,"#7048e8",14]].forEach(([C,D,Y])=>s(dr(C,"#fff",D,5,2.2),Y,6.5,-15.7));const d=[],h=[],b=Te(2832988),S=Te(13554906);Oi.forEach(([C,D],Y)=>{const it=Ir[Y];o(9,.2,1.4,b,C,.1,D),o(9,3.4,.2,b,C,1.7,D-.6),o(.2,3.4,1.4,b,C-4.5,1.7,D),o(.2,3.4,1.4,b,C+4.5,1.7,D),[.9,2.1].forEach(ht=>o(9,.1,1.3,S,C,ht,D)),s(dr(it.name,"#fff",it.color,8,1.3),C,5.4,D+.3),o(.1,5,.1,b,C-3.9,2.5,D+.3),o(.1,5,.1,b,C+3.9,2.5,D+.3);const tt=[];[.95,2.15].forEach(ht=>it.items.forEach((gt,pt)=>{const dt=new de(qS[gt.shape],Te(gt.color,{roughness:.4}));dt.position.set(C-3.4+pt*(6.8/(it.items.length-1)),ht+jS[gt.shape]+0,D+.1),dt.userData.product=gt,e.add(dt),d.push(dt),tt.push(dt)})),h.push(tt)});const T=[];Ha.forEach(C=>{o(2.4,1,1.4,Te(1867478),C,.5,11),o(2.2,.05,.8,Te(2172201),C,1.03,10.4),o(.3,.3,.3,new ki({color:16726832}),C+.8,1.2,11.3),o(.5,.4,.1,new ki({color:4243543}),C-.8,1.3,11.4);const D=Vc(14692657,2172201,2826520);s(D,C,0,12.4),D.rotation.y=Math.PI,T.push(D),s(dr("CHECKOUT","#fff","#2f9e44",2.2,.6),C,3.2,11)}),o(1.4,2.4,1,Te(2172201),-17,1.2,12),s(dr(`ATM
UPI • CARD`,"#fff","#1864ab",1.8,1),-17,3.1,11.6);for(let C=0;C<4;C++)s(kc(),-6+C*.9,0,13.5);const L=[],A=(C,D,Y,it,tt)=>{const ht=new de(it,Y);ht.position.copy(C),e.add(ht),L.push({m:ht,from:C.clone(),to:D,t:0,done:tt})},w=[[1867478,1118481],[16565273,3890066],[3120708,2829099],[14692657,3890066],[16316922,1118481],[7358696,3890066],[16749099,2829099],[1419967,3890066],[15754645,1118481],[8818326,2829099]],X=[2826520,13214247,1118481,8014369,10066329],E=Ha.map(()=>0),M=[];class H{constructor(D){const[Y,it]=w[D];this.mesh=Vc(Y,it,X[D%5],.9+D*37%20/100),this.cart=D%3==0?null:kc(),e.add(this.mesh),this.cart&&e.add(this.cart),this.delay=D*2.2,this.reset(),this.delay=D*2.2}reset(){this.cart&&this.cart.load.clear(),this.n=0;const D=2+Math.floor(Math.random()*3),Y=[0,1,2,3,4,5].sort(()=>Math.random()-.5).slice(0,D);this.tasks=[{x:(Math.random()-.5)*4,z:14.5,a:"in"}],Y.forEach(it=>this.tasks.push({x:Oi[it][0]+(Math.random()-.5)*5,z:Oi[it][1]+2.4,a:"pick",d:it})),this.ci=Math.floor(Math.random()*3),this.tasks.push({x:Ha[this.ci],z:7.6-E[this.ci]*1.2,a:"pay"},{x:0,z:18,a:"exit"}),E[this.ci]++,this.mesh.position.set(-3+Math.random()*6,0,19),this.mesh.rotation.y=Math.PI,this.wait=0,this.state="away",this.delay=2+Math.random()*4,this.vis(!1)}vis(D){this.mesh.visible=D,this.cart&&(this.cart.visible=D)}sync(){const D=this.mesh,Y=D.rotation.y;this.cart&&(this.cart.position.set(D.position.x+Math.sin(Y)*1.1,0,D.position.z+Math.cos(Y)*1.1),this.cart.rotation.y=Y)}get inside(){return this.state!=="away"}update(D,Y){if(this.state==="away"){if(this.delay-=D,this.delay>0)return;this.state="walk",this.vis(!0),this.sync()}const it=this.tasks[0],tt=this.mesh;if(this.wait>0){this.wait-=D,this.wait<=0&&(it.a==="pay"&&(E[this.ci]=Math.max(0,E[this.ci]-1)),this.tasks.shift(),this.state="walk",this.tasks.length||this.reset());return}const ht=it.x-tt.position.x,gt=it.z-tt.position.z,pt=Math.hypot(ht,gt);if(pt>.12){const dt=1.8*D;tt.position.x+=ht/pt*dt,tt.position.z+=gt/pt*dt;const I=Math.atan2(Math.sin(Math.atan2(ht,gt)-tt.rotation.y),Math.cos(Math.atan2(ht,gt)-tt.rotation.y));tt.rotation.y+=I*Math.min(1,D*8);const jt=Math.sin(Y*8)*.6;tt.legL.rotation.x=jt,tt.legR.rotation.x=-jt,tt.armL.rotation.x=-jt*.6,tt.armR.rotation.x=this.cart?-1:jt*.6,this.sync();return}if(tt.legL.rotation.x=tt.legR.rotation.x=0,tt.armL.rotation.x=0,it.a==="pick"){this.state="pick",this.wait=1.6,tt.rotation.y=Math.PI,tt.armR.rotation.x=-1.6;const dt=h[it.d][Math.floor(Math.random()*h[it.d].length)],I=this;A(dt.position,{get:()=>I.cart?I.cart.position.clone().setY(.8):tt.position.clone().setY(.6)},dt.material,dt.geometry,()=>{if(I.cart){const jt=new de(dt.geometry,dt.material);jt.scale.setScalar(.5),jt.position.set((I.n%3-1)*.22,.75+Math.floor(I.n/3)*.2,(I.n*7%3-1)*.2),I.cart.load.add(jt),I.n++}})}else if(it.a==="pay"){this.state="pay",this.wait=3.2,tt.rotation.y=Math.PI;const dt=T[this.ci];dt.armR.rotation.x=-1.2,setTimeout(()=>dt.armR.rotation.x=0,2500)}else this.wait=.05}}for(let C=0;C<10;C++)M.push(new H(C));const U={yaw:0,pitch:.5,dist:28,target:new F(0,0,2)},W={yaw:0,pitch:.5,dist:28,target:new F(0,0,2)},R={};addEventListener("keydown",C=>R[C.key.toLowerCase()]=!0),addEventListener("keyup",C=>R[C.key.toLowerCase()]=!1);let O=null,V=0;const q=new YS,$={};n.addEventListener("pointerdown",C=>{O={x:C.clientX,y:C.clientY},V=0,n.setPointerCapture(C.pointerId)}),n.addEventListener("pointermove",C=>{if(!O)return;const D=C.clientX-O.x,Y=C.clientY-O.y;V+=Math.abs(D)+Math.abs(Y),O={x:C.clientX,y:C.clientY},W.yaw-=D*.005,W.pitch=Math.max(.1,Math.min(1.4,W.pitch+Y*.004))}),n.addEventListener("pointerup",C=>{if(O=null,V>6)return;const D=n.getBoundingClientRect();q.setFromCamera(new $t((C.clientX-D.left)/D.width*2-1,-((C.clientY-D.top)/D.height)*2+1),i);const Y=q.intersectObjects(d)[0];Y&&$.onPick&&$.onPick(Y.object.userData.product,Y.object,C.clientX,C.clientY)}),n.addEventListener("wheel",C=>{C.preventDefault(),$.zoom(C.deltaY*.02)},{passive:!1});const j={overview:[0,2,0,28,.5],fruits:[-12,-4,0,12,.35],electronics:[0,-4,0,12,.35],checkout:[12,9,.3,13,.4]};$.preset=C=>{const D=j[C];W.target.set(D[0],0,D[1]),W.yaw=D[2],W.dist=D[3],W.pitch=D[4]},$.reset=()=>$.preset("overview"),$.goDept=C=>{W.target.set(Oi[C][0],0,Oi[C][1]+1),W.dist=11,W.pitch=.35,W.yaw=0},$.zoom=C=>W.dist=Math.max(6,Math.min(45,W.dist+C)),$.rotate=C=>W.yaw+=C,$.move=(C,D,Y=.5)=>{const it=Math.sin(W.yaw),tt=Math.cos(W.yaw);W.target.x+=(-it*C+tt*D)*Y,W.target.z+=(-tt*C-it*D)*Y,W.target.x=Math.max(-18,Math.min(18,W.target.x)),W.target.z=Math.max(-13,Math.min(15,W.target.z))},$.fly=(C,D,Y)=>A(C,{get:()=>i.position.clone().lerp(U.target,.3)},D,Y,()=>{}),$.customers=M,$.cam=U,$.state=()=>({inside:M.filter(C=>C.inside).length});const K=()=>{const C=n.clientWidth,D=n.clientHeight;t.setSize(C,D,!1),i.aspect=C/D,i.updateProjectionMatrix()};addEventListener("resize",K),K();let rt=performance.now(),st=0;return function C(D){requestAnimationFrame(C);const Y=Math.min(.05,(D-rt)/1e3);rt=D,st+=Y;const it=Y*9;(R.w||R.arrowup)&&$.move(1,0,it),(R.s||R.arrowdown)&&$.move(-1,0,it),(R.a||R.arrowleft)&&$.move(0,-1,it),(R.d||R.arrowright)&&$.move(0,1,it);const tt=Math.min(1,Y*4);U.yaw+=(W.yaw-U.yaw)*tt,U.pitch+=(W.pitch-U.pitch)*tt,U.dist+=(W.dist-U.dist)*tt,U.target.lerp(W.target,tt),i.position.set(U.target.x+Math.sin(U.yaw)*Math.cos(U.pitch)*U.dist,Math.sin(U.pitch)*U.dist+1,U.target.z+Math.cos(U.yaw)*Math.cos(U.pitch)*U.dist),i.lookAt(U.target.x,1.5,U.target.z);let ht=!1;M.forEach(pt=>{pt.update(Y,st),pt.inside&&Math.abs(pt.mesh.position.x)<4&&pt.mesh.position.z>11&&(ht=!0)});const gt=ht?1.7:0;g.position.x+=(-1-gt-g.position.x)*Y*5,_.position.x+=(1+gt-_.position.x)*Y*5;for(let pt=L.length-1;pt>=0;pt--){const dt=L[pt];dt.t+=Y/.8;const I=Math.min(dt.t,1);dt.m.position.lerpVectors(dt.from,dt.to.get(),I),dt.m.position.y+=Math.sin(I*Math.PI)*1.2,dt.m.scale.setScalar(1-I*.5),dt.t>=1&&(e.remove(dt.m),dt.done(),L.splice(pt,1))}t.render(e,i)}(performance.now()),$}const Pt=n=>document.querySelector(n),En=n=>"₹"+n.toLocaleString("en-IN"),ae=ZS(Pt("#scene")),nn=new Map,Ph=Ir.flatMap(n=>n.items);let Dh=null,mr=null,Gc=0,Wc=124850;function zs(n){const t=document.createElement("div");t.className="toast text-bg-success border-0",t.innerHTML=`<div class="toast-body">${n}</div>`,Pt("#toasts").append(t),new Cr(t,{delay:2200}).show(),t.addEventListener("hidden.bs.toast",()=>t.remove())}setTimeout(()=>{Pt("#loader").classList.add("fade"),setTimeout(()=>Pt("#loader").remove(),700)},900);const Nh=n=>{Pt("#intro").classList.add("fade"),setTimeout(()=>Pt("#intro").remove(),900),n!=null?ae.goDept(n):ae.reset()};Pt("#enter").onclick=()=>Nh();Pt("#explore").onclick=()=>Nh(0);Pt("#deptMenu").innerHTML=Ir.map((n,t)=>`<li><a class="dropdown-item" href="#" data-d="${t}">${n.name}</a></li>`).join("");Pt("#deptMenu").onclick=n=>{const t=n.target.closest("[data-d]");t&&(n.preventDefault(),ae.goDept(+t.dataset.d))};Pt("#nHome").onclick=n=>{n.preventDefault(),ae.reset()};Pt("#nStore").onclick=n=>{n.preventDefault(),ae.preset("overview")};Pt("#nOffers").onclick=n=>{n.preventDefault(),zs("🔥 Weekend sale 30% off · Fresh fruits 20% off · Electronics up to 40% off")};Pt("#nUser").onclick=()=>zs("👤 Signed in as Guest shopper");document.querySelectorAll("[data-p]").forEach(n=>n.onclick=()=>ae.preset(n.dataset.p));Pt("#zi").onclick=()=>ae.zoom(-4);Pt("#zo").onclick=()=>ae.zoom(4);Pt("#rl").onclick=()=>ae.rotate(.4);Pt("#rr").onclick=()=>ae.rotate(-.4);Pt("#rs").onclick=()=>ae.reset();const JS=new kn("#helpModal");Pt("#hp").onclick=()=>JS.show();document.querySelectorAll("[data-m]").forEach(n=>{const[t,e]=n.dataset.m.split(",").map(Number);let i;const r=()=>ae.move(t,e,.4);n.onpointerdown=()=>{r(),i=setInterval(r,60)},["pointerup","pointerleave"].forEach(s=>n["on"+s]=()=>clearInterval(i))});const Co=new bn("#cart");Pt("#cartBtn").onclick=()=>Co.show();addEventListener("keydown",n=>{if(n.target.tagName==="INPUT")return;const t=n.key.toLowerCase();t==="c"&&Co.toggle(),t==="r"&&ae.reset()});ae.onPick=(n,t,e,i)=>{Dh=n,mr=t,Pt("#pName").textContent=n.name,Pt("#pDesc").textContent=n.desc+" · "+Ir.find(s=>s.items.includes(n)).name,Pt("#pPrice").textContent=`${En(n.price)} / ${n.unit}`;const r=Pt("#panel");r.classList.remove("d-none"),r.style.left=Math.max(8,Math.min(innerWidth-276,e+14))+"px",r.style.top=Math.max(70,Math.min(innerHeight-230,i-60))+"px"};Pt("#pClose").onclick=()=>Pt("#panel").classList.add("d-none");Pt("#pAdd").onclick=()=>{ae.fly(mr.getWorldPosition(mr.position.clone()),mr.material,mr.geometry),QS(Dh),Pt("#panel").classList.add("d-none")};function QS(n){nn.set(n.name,(nn.get(n.name)||0)+1),zs(`✔ ${n.name} added to cart`),Ur()}function Ro(){let n=0,t=0;nn.forEach((i,r)=>{n+=Ph.find(s=>s.name===r).price*i,t+=i});const e=Math.round(n*.05);return{s:n,n:t,tax:e,total:n+e}}function Ur(){const n=Ro();Pt("#cartCount").textContent=n.n,Pt("#cartItems").innerHTML=nn.size?[...nn].map(([t,e])=>{const i=Ph.find(r=>r.name===t);return`<div class="d-flex align-items-center justify-content-between border-bottom border-secondary py-2"><div><b>${t}</b><div class="small text-secondary">${En(i.price)} each</div></div>
 <div class="btn-group btn-group-sm"><button class="btn btn-outline-light" data-q="${t}" data-d="-1">−</button><span class="btn btn-dark disabled">× ${e}</span><button class="btn btn-outline-light" data-q="${t}" data-d="1">+</button></div><b>${En(i.price*e)}</b></div>`}).join(""):'<p class="text-secondary">Your cart is empty. Click a product on the shelves to add it.</p>',Pt("#cartTot").innerHTML=`<div class="d-flex justify-content-between"><span>Subtotal</span>${En(n.s)}</div><div class="d-flex justify-content-between"><span>Tax (5%)</span>${En(n.tax)}</div><div class="d-flex justify-content-between fs-5"><b>Total</b><b>${En(n.total)}</b></div>`}Pt("#cartItems").onclick=n=>{const t=n.target.closest("[data-q]");if(!t)return;const e=t.dataset.q,i=nn.get(e)+ +t.dataset.d;i<=0?nn.delete(e):nn.set(e,i),Ur()};Pt("#clearCart").onclick=()=>{nn.clear(),Ur()};Ur();const vs=new kn("#payModal");Pt("#toCheckout").onclick=()=>{if(!nn.size)return zs("🛒 Add something first");Co.hide(),ae.preset("checkout"),Pt("#payBody").innerHTML=`<p class="mb-2">Total payable: <b>${En(Ro().total)}</b></p>${["UPI","Credit Card","Debit Card","Cash"].map((n,t)=>`<div class="form-check"><input class="form-check-input" type="radio" name="pm" id="pm${t}" ${t?"":"checked"}><label class="form-check-label" for="pm${t}">${n}</label></div>`).join("")}<button class="btn btn-success w-100 mt-3" id="payNow">Pay Now</button>`,Pt("#payNow").onclick=tM,vs.show()};function tM(){const n=Ro();vs.hide();const t=Pt("#anim");t.classList.remove("d-none");const e=["🛒 Shopping cart","📦 Checkout counter","🔍 Barcode scanner","💳 Payment","🛍️ Shopping bag"];t.innerHTML=`<div>${e.map(i=>`<div class="step">${i}</div>`).join("")}</div>`,e.forEach((i,r)=>setTimeout(()=>t.querySelectorAll(".step")[r].classList.add("on"),r*600)),setTimeout(()=>{t.classList.add("d-none"),Gc++,Wc+=n.total,Pt("#sSales").textContent=En(Wc);const i=new Date,r=`MV3D-${i.getFullYear()}${String(i.getMonth()+1).padStart(2,"0")}${String(i.getDate()).padStart(2,"0")}-${String(Gc).padStart(3,"0")}`;Pt("#payBody").innerHTML=`<div class="text-center"><div class="display-3">✅</div><h4>Purchase Successful!</h4><p class="mb-1">Order ID: <b>${r}</b></p><p class="mb-1">Items: <b>${n.n}</b></p><p>Total: <b>${En(n.total)}</b></p><button class="btn btn-primary" id="cont">Continue Shopping</button></div>`,nn.clear(),Ur(),vs.show(),Pt("#cont").onclick=()=>{vs.hide(),ae.reset()}},3300)}const eM=Pt("#mini"),Me=eM.getContext("2d"),ds=n=>(n+20)/40*160,pr=n=>(n+16)/34*128;setInterval(()=>{Pt("#sIn").textContent=ae.state().inside,Me.clearRect(0,0,160,128),Oi.forEach(([t,e],i)=>{Me.fillStyle=Ir[i].color,Me.fillRect(ds(t-4.5),pr(e-.6),36,6)}),Me.fillStyle="#2f9e44",[6,12,18].forEach(t=>Me.fillRect(ds(t)-5,pr(11),10,4)),Me.fillStyle="#fff",Me.font="9px sans-serif",Me.fillText("ENTRANCE",58,125),Me.fillText("CHECKOUT",100,pr(8)),ae.customers.forEach(t=>{t.inside&&(Me.fillStyle="#ffd43b",Me.fillRect(ds(t.mesh.position.x)-1.5,pr(t.mesh.position.z)-1.5,3,3))});const n=ae.cam.target;Me.fillStyle="#ff6b6b",Me.beginPath(),Me.arc(ds(n.x),pr(n.z),4,0,7),Me.fill()},200);
