!function(){var e,t;window.flexibility={},Array.prototype.forEach||(Array.prototype.forEach=function(e){if(void 0===this||null===this)throw new TypeError(this+"is not an object");if(!(e instanceof Function))throw new TypeError(e+" is not a function");for(var t=Object(this),n=arguments[1],i=t instanceof String?t.split(""):t,r=Math.max(Math.min(i.length,9007199254740991),0)||0,l=-1;++l<r;)l in i&&e.call(n,i[l],l,t)}),e=flexibility,t=function(){var e=function(){function e(e){return void 0===e}function t(e){return e===N||e===T}function n(e,n){if(void 0!==e.style.marginStart&&t(n))return e.style.marginStart;var i=null;switch(n){case"row":i=e.style.marginLeft;break;case"row-reverse":i=e.style.marginRight;break;case"column":i=e.style.marginTop;break;case"column-reverse":i=e.style.marginBottom}return void 0!==i?i:void 0!==e.style.margin?e.style.margin:0}function i(e,n){if(void 0!==e.style.marginEnd&&t(n))return e.style.marginEnd;var i=null;switch(n){case"row":i=e.style.marginRight;break;case"row-reverse":i=e.style.marginLeft;break;case"column":i=e.style.marginBottom;break;case"column-reverse":i=e.style.marginTop}return null!=i?i:void 0!==e.style.margin?e.style.margin:0}function r(e,n){if(void 0!==e.style.borderStartWidth&&e.style.borderStartWidth>=0&&t(n))return e.style.borderStartWidth;var i=null;switch(n){case"row":i=e.style.borderLeftWidth;break;case"row-reverse":i=e.style.borderRightWidth;break;case"column":i=e.style.borderTopWidth;break;case"column-reverse":i=e.style.borderBottomWidth}return null!=i&&i>=0?i:void 0!==e.style.borderWidth&&e.style.borderWidth>=0?e.style.borderWidth:0}function l(e,n){if(void 0!==e.style.borderEndWidth&&e.style.borderEndWidth>=0&&t(n))return e.style.borderEndWidth;var i=null;switch(n){case"row":i=e.style.borderRightWidth;break;case"row-reverse":i=e.style.borderLeftWidth;break;case"column":i=e.style.borderBottomWidth;break;case"column-reverse":i=e.style.borderTopWidth}return null!=i&&i>=0?i:void 0!==e.style.borderWidth&&e.style.borderWidth>=0?e.style.borderWidth:0}function o(e,n){return function(e,n){if(void 0!==e.style.paddingStart&&e.style.paddingStart>=0&&t(n))return e.style.paddingStart;var i=null;switch(n){case"row":i=e.style.paddingLeft;break;case"row-reverse":i=e.style.paddingRight;break;case"column":i=e.style.paddingTop;break;case"column-reverse":i=e.style.paddingBottom}return null!=i&&i>=0?i:void 0!==e.style.padding&&e.style.padding>=0?e.style.padding:0}(e,n)+r(e,n)}function a(e,n){return function(e,n){if(void 0!==e.style.paddingEnd&&e.style.paddingEnd>=0&&t(n))return e.style.paddingEnd;var i=null;switch(n){case"row":i=e.style.paddingRight;break;case"row-reverse":i=e.style.paddingLeft;break;case"column":i=e.style.paddingBottom;break;case"column-reverse":i=e.style.paddingTop}return null!=i&&i>=0?i:void 0!==e.style.padding&&e.style.padding>=0?e.style.padding:0}(e,n)+l(e,n)}function s(e,t){return n(e,t)+i(e,t)}function d(e,t){return o(e,t)+a(e,t)}function u(e,t){return t.style.alignSelf?t.style.alignSelf:e.style.alignItems?e.style.alignItems:"stretch"}function c(e,t){if(t===A){if(e===N)return T;if(e===T)return N}return e}function y(e){return e.style.position?e.style.position:"relative"}function h(e){return y(e)===F&&e.style.flex>0}function f(e,t){return e.layout[Z[t]]+s(e,t)}function m(e,t){return void 0!==e.style[Z[t]]&&e.style[Z[t]]>=0}function g(e,t){return void 0!==e.style[t]}function p(e,t){return void 0!==e.style[t]?e.style[t]:0}function v(e,t,n){var i={row:e.style.minWidth,"row-reverse":e.style.minWidth,column:e.style.minHeight,"column-reverse":e.style.minHeight}[t],r={row:e.style.maxWidth,"row-reverse":e.style.maxWidth,column:e.style.maxHeight,"column-reverse":e.style.maxHeight}[t],l=n;return void 0!==r&&r>=0&&l>r&&(l=r),void 0!==i&&i>=0&&i>l&&(l=i),l}function b(e,t){return e>t?e:t}function x(e,t){void 0===e.layout[Z[t]]&&m(e,t)&&(e.layout[Z[t]]=b(v(e,t,e.style[Z[t]]),d(e,t)))}function w(e,t,n){t.layout[P[n]]=e.layout[Z[n]]-t.layout[Z[n]]-t.layout[U[n]]}function L(e,t){return void 0!==e.style[G[t]]?p(e,G[t]):-p(e,P[t])}function E(E,A,V,J){var K,Q,X,Y,ee,te=(X=J,(Y=(Q=E).style.direction?Q.style.direction:C)===C&&(Y=void 0===X?k:X),Y),ne=c((K=E).style.flexDirection?K.style.flexDirection:B,te),ie=(ee=ne)===B||ee===I?c(N,te):B,re=c(N,te);x(E,ne),x(E,ie),E.layout.direction=te,E.layout[G[ne]]+=n(E,ne)+L(E,ne),E.layout[P[ne]]+=i(E,ne)+L(E,ne),E.layout[G[ie]]+=n(E,ie)+L(E,ie),E.layout[P[ie]]+=i(E,ie)+L(E,ie);var le=E.children.length,oe=d(E,re),ae=d(E,B);if(void 0!==E.style.measure){var se=!e(E.layout[Z[re]]),de=W;de=m(E,re)?E.style.width:se?E.layout[Z[re]]:A-s(E,re),de-=oe;var ue=W;ue=m(E,B)?E.style.height:e(E.layout[Z[B]])?V-s(E,re):E.layout[Z[B]],ue-=d(E,B);var ce=!m(E,re)&&!se,ye=!m(E,B)&&e(E.layout[Z[B]]);if(ce||ye){var he=E.style.measure(de,ue);ce&&(E.layout.width=he.width+oe),ye&&(E.layout.height=he.height+ae)}if(0===le)return}var fe,me,ge,pe,ve,be,xe="wrap"===E.style.flexWrap,we=(ve=E).style.justifyContent?ve.style.justifyContent:"flex-start",Le=o(E,ne),Ee=o(E,ie),Se=d(E,ne),We=d(E,ie),Ce=!e(E.layout[Z[ne]]),ke=!e(E.layout[Z[ie]]),Ae=t(ne),Ne=null,Te=null,Be=W;Ce&&(Be=E.layout[Z[ne]]-Se);for(var Ie=0,qe=0,Me=0,$e=0,_e=0,He=0;le>qe;){var ze,De,Re=0,je=0,Fe=0,Oe=0,Ge=Ce&&we===q||!Ce&&we!==M,Pe=Ge?le:Ie,Ue=!0,Ze=le,Ve=null,Je=null,Ke=Le,Qe=0;for(fe=Ie;le>fe;++fe){if((ge=E.children[fe]).lineIndex=He,ge.nextAbsoluteChild=null,ge.nextFlexChild=null,(ot=u(E,ge))===j&&y(ge)===F&&ke&&!m(ge,ie))ge.layout[Z[ie]]=b(v(ge,ie,E.layout[Z[ie]]-We-s(ge,ie)),d(ge,ie));else if(y(ge)===O)for(null===Ne&&(Ne=ge),null!==Te&&(Te.nextAbsoluteChild=ge),Te=ge,me=0;2>me;me++)pe=0!==me?N:B,!e(E.layout[Z[pe]])&&!m(ge,pe)&&g(ge,G[pe])&&g(ge,P[pe])&&(ge.layout[Z[pe]]=b(v(ge,pe,E.layout[Z[pe]]-d(E,pe)-s(ge,pe)-p(ge,G[pe])-p(ge,P[pe])),d(ge,pe)));var Xe=0;if(Ce&&h(ge)?(je++,Fe+=ge.style.flex,null===Ve&&(Ve=ge),null!==Je&&(Je.nextFlexChild=ge),Je=ge,Xe=d(ge,ne)+s(ge,ne)):(ze=W,De=W,Ae?De=m(E,B)?E.layout[Z[B]]-ae:V-s(E,B)-ae:ze=m(E,re)?E.layout[Z[re]]-oe:A-s(E,re)-oe,0===Me&&S(ge,ze,De,te),y(ge)===F&&(Oe++,Xe=f(ge,ne))),xe&&Ce&&Re+Xe>Be&&fe!==Ie){Oe--,Me=1;break}Ge&&(y(ge)!==F||h(ge))&&(Ge=!1,Pe=fe),Ue&&(y(ge)!==F||ot!==j&&ot!==z||e(ge.layout[Z[ie]]))&&(Ue=!1,Ze=fe),Ge&&(ge.layout[U[ne]]+=Ke,Ce&&w(E,ge,ne),Ke+=f(ge,ne),Qe=b(Qe,v(ge,ie,f(ge,ie)))),Ue&&(ge.layout[U[ie]]+=$e+Ee,ke&&w(E,ge,ie)),Me=0,Re+=Xe,qe=fe+1}var Ye=0,et=0,tt=0;if(tt=Ce?Be-Re:b(Re,0)-Re,0!==je){var nt,it,rt=tt/Fe;for(Je=Ve;null!==Je;)nt=rt*Je.style.flex+d(Je,ne),it=v(Je,ne,nt),nt!==it&&(tt-=it,Fe-=Je.style.flex),Je=Je.nextFlexChild;for(0>(rt=tt/Fe)&&(rt=0),Je=Ve;null!==Je;)Je.layout[Z[ne]]=v(Je,ne,rt*Je.style.flex+d(Je,ne)),ze=W,m(E,re)?ze=E.layout[Z[re]]-oe:Ae||(ze=A-s(E,re)-oe),De=W,m(E,B)?De=E.layout[Z[B]]-ae:Ae&&(De=V-s(E,B)-ae),S(Je,ze,De,te),ge=Je,Je=Je.nextFlexChild,ge.nextFlexChild=null}else we!==q&&(we===M?Ye=tt/2:we===$?Ye=tt:we===_?(tt=b(tt,0),et=je+Oe-1!=0?tt/(je+Oe-1):0):we===H&&(et=tt/(je+Oe),Ye=et/2));for(Ke+=Ye,fe=Pe;qe>fe;++fe)ge=E.children[fe],y(ge)===O&&g(ge,G[ne])?ge.layout[U[ne]]=p(ge,G[ne])+r(E,ne)+n(ge,ne):(ge.layout[U[ne]]+=Ke,Ce&&w(E,ge,ne),y(ge)===F&&(Ke+=et+f(ge,ne),Qe=b(Qe,v(ge,ie,f(ge,ie)))));var lt=E.layout[Z[ie]];for(ke||(lt=b(v(E,ie,Qe+We),We)),fe=Ze;qe>fe;++fe)if(ge=E.children[fe],y(ge)===O&&g(ge,G[ie]))ge.layout[U[ie]]=p(ge,G[ie])+r(E,ie)+n(ge,ie);else{var ot,at=Ee;if(y(ge)===F)if((ot=u(E,ge))===j)e(ge.layout[Z[ie]])&&(ge.layout[Z[ie]]=b(v(ge,ie,lt-We-s(ge,ie)),d(ge,ie)));else if(ot!==z){var st=lt-We-f(ge,ie);at+=ot===D?st/2:st}ge.layout[U[ie]]+=$e+at,ke&&w(E,ge,ie)}$e+=Qe,_e=b(_e,Ke),He+=1,Ie=qe}if(He>1&&ke){var dt=E.layout[Z[ie]]-We,ut=dt-$e,ct=0,yt=Ee,ht=(be=E).style.alignContent?be.style.alignContent:"flex-start";ht===R?yt+=ut:ht===D?yt+=ut/2:ht===j&&dt>$e&&(ct=ut/He);var ft=0;for(fe=0;He>fe;++fe){var mt=ft,gt=0;for(me=mt;le>me;++me)if(ge=E.children[me],y(ge)===F){if(ge.lineIndex!==fe)break;e(ge.layout[Z[ie]])||(gt=b(gt,ge.layout[Z[ie]]+s(ge,ie)))}for(ft=me,gt+=ct,me=mt;ft>me;++me)if(ge=E.children[me],y(ge)===F){var pt=u(E,ge);if(pt===z)ge.layout[U[ie]]=yt+n(ge,ie);else if(pt===R)ge.layout[U[ie]]=yt+gt-i(ge,ie)-ge.layout[Z[ie]];else if(pt===D){var vt=ge.layout[Z[ie]];ge.layout[U[ie]]=yt+(gt-vt)/2}else pt===j&&(ge.layout[U[ie]]=yt+n(ge,ie))}yt+=gt}}var bt,xt,wt=!1,Lt=!1;if(Ce||(E.layout[Z[ne]]=b(v(E,ne,_e+a(E,ne)),Se),(ne===T||ne===I)&&(wt=!0)),ke||(E.layout[Z[ie]]=b(v(E,ie,$e+We),We),(ie===T||ie===I)&&(Lt=!0)),wt||Lt)for(fe=0;le>fe;++fe)ge=E.children[fe],wt&&w(E,ge,ne),Lt&&w(E,ge,ie);for(Te=Ne;null!==Te;){for(me=0;2>me;me++)pe=0!==me?N:B,!e(E.layout[Z[pe]])&&!m(Te,pe)&&g(Te,G[pe])&&g(Te,P[pe])&&(Te.layout[Z[pe]]=b(v(Te,pe,E.layout[Z[pe]]-(bt=E,xt=pe,r(bt,xt)+l(bt,xt))-s(Te,pe)-p(Te,G[pe])-p(Te,P[pe])),d(Te,pe))),g(Te,P[pe])&&!g(Te,G[pe])&&(Te.layout[G[pe]]=E.layout[Z[pe]]-Te.layout[Z[pe]]-p(Te,P[pe]));ge=Te,Te=Te.nextAbsoluteChild,ge.nextAbsoluteChild=null}}function S(e,t,n,i){e.shouldUpdate=!0;var r=e.style.direction||k;!e.isDirty&&e.lastLayout&&e.lastLayout.requestedHeight===e.layout.height&&e.lastLayout.requestedWidth===e.layout.width&&e.lastLayout.parentMaxWidth===t&&e.lastLayout.parentMaxHeight===n&&e.lastLayout.direction===r?(e.layout.width=e.lastLayout.width,e.layout.height=e.lastLayout.height,e.layout.top=e.lastLayout.top,e.layout.left=e.lastLayout.left):(e.lastLayout||(e.lastLayout={}),e.lastLayout.requestedWidth=e.layout.width,e.lastLayout.requestedHeight=e.layout.height,e.lastLayout.parentMaxWidth=t,e.lastLayout.parentMaxHeight=n,e.lastLayout.direction=r,e.children.forEach(function(e){e.layout.width=void 0,e.layout.height=void 0,e.layout.top=0,e.layout.left=0}),E(e,t,n,i),e.lastLayout.width=e.layout.width,e.lastLayout.height=e.layout.height,e.lastLayout.top=e.layout.top,e.lastLayout.left=e.layout.left)}var W,C="inherit",k="ltr",A="rtl",N="row",T="row-reverse",B="column",I="column-reverse",q="flex-start",M="center",$="flex-end",_="space-between",H="space-around",z="flex-start",D="center",R="flex-end",j="stretch",F="relative",O="absolute",G={row:"left","row-reverse":"right",column:"top","column-reverse":"bottom"},P={row:"right","row-reverse":"left",column:"bottom","column-reverse":"top"},U={row:"left","row-reverse":"right",column:"top","column-reverse":"bottom"},Z={row:"width","row-reverse":"width",column:"height","column-reverse":"height"};return{layoutNodeImpl:E,computeLayout:S,fillNodes:function e(t){if((!t.layout||t.isDirty)&&(t.layout={width:void 0,height:void 0,top:0,left:0,right:0,bottom:0}),t.style||(t.style={}),t.children||(t.children=[]),t.style.measure&&t.children&&t.children.length)throw new Error("Using custom measure function is supported only for leaf nodes.");return t.children.forEach(e),t}}}();return"object"==typeof exports&&(module.exports=e),function(t){e.fillNodes(t),e.computeLayout(t)}},"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.computeLayout=t(),!window.addEventListener&&window.attachEvent&&(Window.prototype.addEventListener=HTMLDocument.prototype.addEventListener=Element.prototype.addEventListener=function(e,t){this.attachEvent("on"+e,t)},Window.prototype.removeEventListener=HTMLDocument.prototype.removeEventListener=Element.prototype.removeEventListener=function(e,t){this.detachEvent("on"+e,t)}),flexibility.detect=function(){var e=document.createElement("p");try{return e.style.display="flex","flex"===e.style.display}catch(e){return!1}},!flexibility.detect()&&document.attachEvent&&document.documentElement.currentStyle&&document.attachEvent("onreadystatechange",function(){flexibility.onresize({target:document.documentElement})}),flexibility.init=function(e){var t=e.onlayoutcomplete;return t||(t=e.onlayoutcomplete={node:e,style:{},children:[]}),t.style.display=e.currentStyle["-js-display"]||e.currentStyle.display,t};var n,i=document.documentElement,r=0,l=0;flexibility.onresize=function(e){if(i.clientWidth!==r||i.clientHeight!==l){r=i.clientWidth,l=i.clientHeight,clearTimeout(n),window.removeEventListener("resize",flexibility.onresize);var t=e.target&&1===e.target.nodeType?e.target:document.documentElement;flexibility.walk(t),n=setTimeout(function(){window.addEventListener("resize",flexibility.onresize)},1e3/15)}};var o={alignContent:{initial:"stretch",valid:/^(flex-start|flex-end|center|space-between|space-around|stretch)/},alignItems:{initial:"stretch",valid:/^(flex-start|flex-end|center|baseline|stretch)$/},boxSizing:{initial:"content-box",valid:/^(border-box|content-box)$/},flexDirection:{initial:"row",valid:/^(row|row-reverse|column|column-reverse)$/},flexWrap:{initial:"nowrap",valid:/^(nowrap|wrap|wrap-reverse)$/},justifyContent:{initial:"flex-start",valid:/^(flex-start|flex-end|center|space-between|space-around)$/}};flexibility.updateFlexContainerCache=function(e){var t=e.style,n=e.node.currentStyle,i=e.node.style,r={};(n["flex-flow"]||i["flex-flow"]||"").replace(/^(row|row-reverse|column|column-reverse)\s+(nowrap|wrap|wrap-reverse)$/i,function(e,t,n){r.flexDirection=t,r.flexWrap=n});for(var l in o){var a=l.replace(/[A-Z]/g,"-$&").toLowerCase(),s=o[l],d=n[a]||i[a];t[l]=s.valid.test(d)?d:r[l]||s.initial}};var a={alignSelf:{initial:"auto",valid:/^(auto|flex-start|flex-end|center|baseline|stretch)$/},boxSizing:{initial:"content-box",valid:/^(border-box|content-box)$/},flexBasis:{initial:"auto",valid:/^((?:[-+]?0|[-+]?[0-9]*\.?[0-9]+(?:%|ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmax|vmin|vw))|auto|fill|max-content|min-content|fit-content|content)$/},flexGrow:{initial:0,valid:/^\+?(0|[1-9][0-9]*)$/},flexShrink:{initial:0,valid:/^\+?(0|[1-9][0-9]*)$/},order:{initial:0,valid:/^([-+]?[0-9]+)$/}};flexibility.updateFlexItemCache=function(e){var t=e.style,n=e.node.currentStyle,i=e.node.style,r={};(n.flex||i.flex||"").replace(/^\+?(0|[1-9][0-9]*)/,function(e){r.flexGrow=e});for(var l in a){var o=l.replace(/[A-Z]/g,"-$&").toLowerCase(),s=a[l],d=n[o]||i[o];t[l]=s.valid.test(d)?d:r[l]||s.initial,"number"==typeof s.initial&&(t[l]=parseFloat(t[l]))}};var s={medium:4,none:0,thick:6,thin:2},d={borderBottomWidth:0,borderLeftWidth:0,borderRightWidth:0,borderTopWidth:0,height:0,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,marginBottom:0,marginLeft:0,marginRight:0,marginTop:0,maxHeight:0,maxWidth:0,minHeight:0,minWidth:0,width:0},u=/^([-+]?0|[-+]?[0-9]*\.?[0-9]+)/;flexibility.updateLengthCache=function(e){var t,n,i,r=e.node,l=e.style,o=r.parentNode,a=document.createElement("_"),c=a.runtimeStyle,y=r.currentStyle;c.cssText="border:0 solid;clip:rect(0 0 0 0);display:inline-block;font:0/0 serif;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;overflow:hidden;padding:0;position:absolute;width:1em;font-size:"+y.fontSize,o.insertBefore(a,r.nextSibling),l.fontSize=a.offsetWidth,c.fontSize=l.fontSize+"px";for(var h in d){var f=y[h];u.test(f)||"auto"===f&&!/(width|height)/i.test(h)?/%$/.test(f)?(/^(bottom|height|top)$/.test(h)?(n||(n=o.offsetHeight),i=n):(t||(t=o.offsetWidth),i=t),l[h]=parseFloat(f)*i/100):(c.width=f,l[h]=a.offsetWidth):/^border/.test(h)&&f in s?l[h]=s[f]:delete l[h]}o.removeChild(a),"none"===y.borderTopStyle&&(l.borderTopWidth=0),"none"===y.borderRightStyle&&(l.borderRightWidth=0),"none"===y.borderBottomStyle&&(l.borderBottomWidth=0),"none"===y.borderLeftStyle&&(l.borderLeftWidth=0),l.width||l.minWidth||(/flex/.test(l.display)?l.width=r.offsetWidth:l.minWidth=r.offsetWidth),l.height||l.minHeight||/flex/.test(l.display)||(l.minHeight=r.offsetHeight)},flexibility.walk=function(e){var t=flexibility.init(e),n=t.style,i=n.display;if("none"===i)return{};var r=i.match(/^(inline)?flex$/);if(r&&(flexibility.updateFlexContainerCache(t),e.runtimeStyle.cssText="display:"+(r[1]?"inline-block":"block"),t.children=[]),Array.prototype.forEach.call(e.childNodes,function(e,i){if(1===e.nodeType){var l=flexibility.walk(e),o=l.style;l.index=i,r&&(flexibility.updateFlexItemCache(l),"auto"===o.alignSelf&&(o.alignSelf=n.alignItems),o.flex=o.flexGrow,e.runtimeStyle.cssText="display:inline-block",t.children.push(l))}}),r){t.children.forEach(function(e){flexibility.updateLengthCache(e)}),t.children.sort(function(e,t){return e.style.order-t.style.order||e.index-t.index}),/-reverse$/.test(n.flexDirection)&&(t.children.reverse(),n.flexDirection=n.flexDirection.replace(/-reverse$/,""),"flex-start"===n.justifyContent?n.justifyContent="flex-end":"flex-end"===n.justifyContent&&(n.justifyContent="flex-start")),flexibility.updateLengthCache(t),delete t.lastLayout,delete t.layout;var l=n.borderTopWidth,o=n.borderBottomWidth;n.borderTopWidth=0,n.borderBottomWidth=0,n.borderLeftWidth=0,"column"===n.flexDirection&&(n.width-=n.borderRightWidth),flexibility.computeLayout(t),e.runtimeStyle.cssText="box-sizing:border-box;display:block;position:relative;width:"+(t.layout.width+n.borderRightWidth)+"px;height:"+(t.layout.height+l+o)+"px";var a=[],s=1,d="column"===n.flexDirection?"width":"height";t.children.forEach(function(e){a[e.lineIndex]=Math.max(a[e.lineIndex]||0,e.layout[d]),s=Math.max(s,e.lineIndex+1)}),t.children.forEach(function(e){var t=e.layout;"stretch"===e.style.alignSelf&&(t[d]=a[e.lineIndex]),e.node.runtimeStyle.cssText="box-sizing:border-box;display:block;position:absolute;margin:0;width:"+t.width+"px;height:"+t.height+"px;top:"+t.top+"px;left:"+t.left+"px"})}return t}}();var isIE=!1,isEdge=!1,getParents=function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1});for(var n=[];e&&e!==document;e=e.parentNode)t?e.matches(t)&&n.push(e):n.push(e);return n},toggleClass=function(e,t){e.classList.contains(t)?e.classList.remove(t):e.classList.add(t)};!function(){if(isIE=!!document.documentMode,isEdge=!isIE&&!!window.StyleMedia,"function"==typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}(),function(){AstraNavigationMenu=function(e){for(var t=0;t<e.length;t++)if(null!=e[t].querySelector(".sub-menu, .children")){var n=document.createElement("BUTTON");n.setAttribute("role","button"),n.setAttribute("class","ast-menu-toggle"),n.setAttribute("aria-expanded","false"),n.innerHTML="<span class='screen-reader-text'>Menu Toggle</span>",e[t].insertBefore(n,e[t].childNodes[1]);var i=e[t].getBoundingClientRect().left,r=window.innerWidth,l=parseInt(r)-parseInt(i),o=!1;if(l<500&&(o=!0),o){e[t].classList.add("ast-left-align-sub-menu");for(var a=e[t].querySelectorAll(".menu-item-has-children, .page_item_has_children"),s=0;s<a.length;s++)a[s].classList.add("ast-left-align-sub-menu")}l<240&&e[t].classList.add("ast-sub-menu-goes-outside")}},AstraToggleMenu=function(e){for(var t=0;t<e.length;t++)e[t].addEventListener("click",function(e){e.preventDefault();for(var t=this.parentNode,n=t.querySelectorAll(".menu-item-has-children, .page_item_has_children"),i=0;i<n.length;i++)n[i].classList.remove("ast-submenu-expanded"),n[i].querySelector(".sub-menu, .children").style.display="none";var r=t.parentNode.querySelectorAll(".menu-item-has-children, .page_item_has_children");for(i=0;i<r.length;i++)if(r[i]!=t){r[i].classList.remove("ast-submenu-expanded");for(var l=r[i].querySelectorAll(".sub-menu, .children"),o=0;o<l.length;o++)l[o].style.display="none"}(t.classList.contains("menu-item-has-children")||t.classList.contains("page_item_has_children"))&&(toggleClass(t,"ast-submenu-expanded"),t.classList.contains("ast-submenu-expanded")?t.querySelector(".sub-menu, .children").style.display="block":t.querySelector(".sub-menu, .children").style.display="none")},!1)};var e=document.querySelectorAll(".main-header-bar-navigation"),t=document.querySelectorAll(".main-header-menu-toggle");if(t.length>0)for(var n=0;n<t.length;n++)if(t[n].setAttribute("data-index",n),t[n].addEventListener("click",function(n){n.preventDefault();var i=this.getAttribute("data-index");if(void 0===e[i])return!1;for(var r=e[i].querySelectorAll(".menu-item-has-children, .page_item_has_children"),l=0;l<r.length;l++){r[l].classList.remove("ast-submenu-expanded");for(var o=r[l].querySelectorAll(".sub-menu, .children"),a=0;a<o.length;a++)o[a].style.display="none"}switch(this.getAttribute("rel")||""){case"main-menu":toggleClass(e[i],"toggle-on"),toggleClass(t[i],"toggled"),e[i].classList.contains("toggle-on")?e[i].style.display="block":e[i].style.display=""}},!1),void 0!==e[n]){var i=e[n].querySelectorAll("ul.main-header-menu li");AstraNavigationMenu(i);var r=e[n].querySelectorAll("ul.main-header-menu .ast-menu-toggle");AstraToggleMenu(r)}document.body.addEventListener("astra-header-responsive-enabled",function(){if(e.length>0)for(var t=0;t<e.length;t++){null!=e[t]&&(e[t].classList.remove("toggle-on"),e[t].style.display="");for(var n=e[t].getElementsByClassName("sub-menu"),i=0;i<n.length;i++)n[i].style.display="";for(var r=e[t].getElementsByClassName("children"),l=0;l<r.length;l++)r[l].style.display="";for(var o=e[t].getElementsByClassName("ast-search-menu-icon"),a=0;a<o.length;a++)o[a].classList.remove("ast-dropdown-active"),o[a].style.display=""}},!1);var l=function(){var e=astra.break_point,n=document.querySelectorAll(".main-header-bar-wrap");if(n.length>0)for(var i=0;i<n.length;i++)if("DIV"==n[i].tagName&&n[i].classList.contains("main-header-bar-wrap")){var r=window.getComputedStyle(n[i]).content;if((isEdge||isIE||"normal"===r)&&window.innerWidth<=e&&(r=e),r=r.replace(/[^0-9]/g,""),(r=parseInt(r))!=e){null!=t[i]&&t[i].classList.remove("toggled"),document.body.classList.remove("ast-header-break-point");var l=new CustomEvent("astra-header-responsive-enabled");document.body.dispatchEvent(l)}else{document.body.classList.add("ast-header-break-point");var o=new CustomEvent("astra-header-responsive-disabled");document.body.dispatchEvent(o)}}};window.addEventListener("resize",function(){l()}),l();var o,a,s,d,u,c,y=document.getElementsByClassName("astra-search-icon");for(n=0;n<y.length;n++)y[n].onclick=function(){if(this.classList.contains("slide-search")){var e=this.parentNode.parentNode.querySelector(".ast-search-menu-icon");e.classList.contains("ast-dropdown-active")?e.classList.remove("ast-dropdown-active"):(e.classList.add("ast-dropdown-active"),e.querySelector(".search-field").setAttribute("autocomplete","off"),setTimeout(function(){e.querySelector(".search-field").focus()},200))}};if(document.body.onclick=function(e){if(!this.classList.contains("ast-header-break-point")&&!e.target.classList.contains("ast-search-menu-icon")&&0===getParents(e.target,".ast-search-menu-icon").length&&0===getParents(e.target,".ast-search-icon").length)for(var t=document.getElementsByClassName("ast-search-menu-icon"),n=0;n<t.length;n++)t[n].classList.remove("ast-dropdown-active")},(o=document.getElementById("site-navigation"))&&void 0!==(a=o.getElementsByTagName("button")[0]))if(void 0!==(s=o.getElementsByTagName("ul")[0])){for(s.setAttribute("aria-expanded","false"),-1===s.className.indexOf("nav-menu")&&(s.className+=" nav-menu"),a.onclick=function(){-1!==o.className.indexOf("toggled")?(o.className=o.className.replace(" toggled",""),a.setAttribute("aria-expanded","false"),s.setAttribute("aria-expanded","false")):(o.className+=" toggled",a.setAttribute("aria-expanded","true"),s.setAttribute("aria-expanded","true"))},d=s.getElementsByTagName("a"),n=0,c=(u=s.getElementsByTagName("ul")).length;n<c;n++)u[n].parentNode.setAttribute("aria-haspopup","true");for(n=0,c=d.length;n<c;n++)d[n].addEventListener("focus",h,!0),d[n].addEventListener("blur",h,!0);!function(e){var t,n,i=o.querySelectorAll(".menu-item-has-children > a, .page_item_has_children > a");if("ontouchstart"in window)for(t=function(e){var t,n=this.parentNode;if(n.classList.contains("focus"))n.classList.remove("focus");else{for(e.preventDefault(),t=0;t<n.parentNode.children.length;++t)n!==n.parentNode.children[t]&&n.parentNode.children[t].classList.remove("focus");n.classList.add("focus")}},n=0;n<i.length;++n)i[n].addEventListener("touchstart",t,!1)}()}else a.style.display="none";function h(){for(var e=this;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}}(),function(){var e=navigator.userAgent.toLowerCase().indexOf("webkit")>-1,t=navigator.userAgent.toLowerCase().indexOf("opera")>-1,n=navigator.userAgent.toLowerCase().indexOf("msie")>-1;(e||t||n)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var e,t=location.hash.substring(1);/^[A-z0-9_-]+$/.test(t)&&(e=document.getElementById(t))&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus())},!1)}();