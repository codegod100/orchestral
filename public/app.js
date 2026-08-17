var z0,M,d0,P1,c,b0,h0,g0,F0,W0,t,c0,M0,T0,_0,U1,G0={},K0=[],F1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,H0=Array.isArray;function h(Z,Y){for(var O in Y)Z[O]=Y[O];return Z}function D0(Z){Z&&Z.parentNode&&Z.parentNode.removeChild(Z)}function N0(Z,Y,O){var W,G,Q,K={};for(Q in Y)Q=="key"?W=Y[Q]:Q=="ref"?G=Y[Q]:K[Q]=Y[Q];if(arguments.length>2&&(K.children=arguments.length>3?z0.call(arguments,2):O),typeof Z=="function"&&Z.defaultProps!=null)for(Q in Z.defaultProps)K[Q]===void 0&&(K[Q]=Z.defaultProps[Q]);return X0(Z,K,W,G,null)}function X0(Z,Y,O,W,G){var Q={type:Z,props:Y,key:O,ref:W,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:G==null?++d0:G,__i:-1,__u:0};return G==null&&M.vnode!=null&&M.vnode(Q),Q}function $0(Z){return Z.children}function o(Z,Y){this.props=Z,this.context=Y}function r(Z,Y){if(Y==null)return Z.__?r(Z.__,Z.__i+1):null;for(var O;Y<Z.__k.length;Y++)if((O=Z.__k[Y])!=null&&O.__e!=null)return O.__e;return typeof Z.type=="function"?r(Z):null}function T1(Z){if(Z.__P&&Z.__d){var Y=Z.__v,O=Y.__e,W=[],G=[],Q=h({},Y);Q.__v=Y.__v+1,M.vnode&&M.vnode(Q),R0(Z.__P,Q,Y,Z.__n,Z.__P.namespaceURI,32&Y.__u?[O]:null,W,O==null?r(Y):O,!!(32&Y.__u),G),Q.__v=Y.__v,Q.__.__k[Q.__i]=Q,o0(W,Q,G),Y.__e=Y.__=null,Q.__e!=O&&p0(Q)}}function p0(Z){if((Z=Z.__)!=null&&Z.__c!=null)return Z.__e=Z.__c.base=null,Z.__k.some(function(Y){if(Y!=null&&Y.__e!=null)return Z.__e=Z.__c.base=Y.__e}),p0(Z)}function v0(Z){(!Z.__d&&(Z.__d=!0)&&c.push(Z)&&!q0.__r++||b0!=M.debounceRendering)&&((b0=M.debounceRendering)||h0)(q0)}function q0(){try{for(var Z,Y=1;c.length;)c.length>Y&&c.sort(g0),Z=c.shift(),Y=c.length,T1(Z)}finally{c.length=q0.__r=0}}function a0(Z,Y,O,W,G,Q,K,z,$,q,B){var P,X,H,V,U,D,R=W&&W.__k||K0,F=Y.length;for($=_1(O,Y,R,$,F),P=0;P<F;P++)(H=O.__k[P])!=null&&(X=H.__i!=-1&&R[H.__i]||G0,H.__i=P,D=R0(Z,H,X,G,Q,K,z,$,q,B),V=H.__e,H.ref&&X.ref!=H.ref&&(X.ref&&w0(X.ref,null,H),B.push(H.ref,H.__c||V,H)),U==null&&V!=null&&(U=V),4&H.__u?($=r0(H,$,Z),X.__e&&(X.__e=null)):typeof H.type=="function"&&D!==void 0?$=D:V&&($=V.nextSibling),H.__u&=-7);return O.__e=U,$}function _1(Z,Y,O,W,G){var Q,K,z,$,q,B=O.length,P=B,X=0;for(Z.__k=Array(G),Q=0;Q<G;Q++)(K=Y[Q])!=null&&typeof K!="boolean"&&typeof K!="function"?(typeof K=="string"||typeof K=="number"||typeof K=="bigint"||K.constructor==String?K=Z.__k[Q]=X0(null,K,null,null,null):H0(K)?K=Z.__k[Q]=X0($0,{children:K},null,null,null):K.constructor===void 0&&K.__b>0?K=Z.__k[Q]=X0(K.type,K.props,K.key,K.ref?K.ref:null,K.__v):Z.__k[Q]=K,$=Q+X,K.__=Z,K.__b=Z.__b+1,z=null,(q=K.__i=M1(K,O,$,P))!=-1&&(P--,(z=O[q])&&(z.__u|=2)),z==null||z.__v==null?(q==-1&&(G>B?X--:G<B&&X++),typeof K.type!="function"&&(K.__u|=4)):q!=$&&(q==$-1?X--:q==$+1?X++:(q>$?X--:X++,K.__u|=4))):Z.__k[Q]=null;if(P)for(Q=0;Q<B;Q++)(z=O[Q])!=null&&(2&z.__u)==0&&(z.__e==W&&(W=r(z)),l0(z,z));return W}function r0(Z,Y,O){var W,G;if(typeof Z.type=="function"){for(W=Z.__k,G=0;W&&G<W.length;G++)W[G]&&(W[G].__=Z,Y=r0(W[G],Y,O));return Y}Z.__e!=Y&&(Y&&Z.type&&!Y.parentNode&&(Y=r(Z)),Y=O.insertBefore(Z.__e,Y||null));do Y=Y&&Y.nextSibling;while(Y!=null&&Y.nodeType==8);return Y}function M1(Z,Y,O,W){var G,Q,K,z=Z.key,$=Z.type,q=Y[O],B=q!=null&&(2&q.__u)==0;if(q===null&&z==null||B&&z==q.key&&$==q.type)return O;if(W>(B?1:0)){for(G=O-1,Q=O+1;G>=0||Q<Y.length;)if((q=Y[K=G>=0?G--:Q++])!=null&&(2&q.__u)==0&&z==q.key&&$==q.type)return K}return-1}function m0(Z,Y,O){Y[0]=="-"?Z.setProperty(Y,O==null?"":O):Z[Y]=O==null?"":typeof O!="number"||F1.test(Y)?O:O+"px"}function Q0(Z,Y,O,W,G){var Q,K;Y:if(Y=="style")if(typeof O=="string")Z.style.cssText=O;else{if(typeof W=="string"&&(Z.style.cssText=W=""),W)for(Y in W)O&&Y in O||m0(Z.style,Y,"");if(O)for(Y in O)W&&O[Y]==W[Y]||m0(Z.style,Y,O[Y])}else if(Y[0]=="o"&&Y[1]=="n")Q=Y!=(Y=Y.replace(c0,"$1")),K=Y.toLowerCase(),Y=K in Z||Y=="onFocusOut"||Y=="onFocusIn"?K.slice(2):Y.slice(2),Z.l||(Z.l={}),Z.l[Y+Q]=O,O?W?O[t]=W[t]:(O[t]=M0,Z.addEventListener(Y,Q?_0:T0,Q)):Z.removeEventListener(Y,Q?_0:T0,Q);else{if(G=="http://www.w3.org/2000/svg")Y=Y.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(Y!="width"&&Y!="height"&&Y!="href"&&Y!="list"&&Y!="form"&&Y!="tabIndex"&&Y!="download"&&Y!="rowSpan"&&Y!="colSpan"&&Y!="role"&&Y!="popover"&&Y in Z)try{Z[Y]=O==null?"":O;break Y}catch(z){}typeof O=="function"||(O==null||O===!1&&Y[4]!="-"?Z.removeAttribute(Y):Z.setAttribute(Y,Y=="popover"&&O==1?"":O))}}function f0(Z){return function(Y){if(this.l){var O=this.l[Y.type+Z];if(Y[W0]==null)Y[W0]=M0++;else if(Y[W0]<O[t])return;return O(M.event?M.event(Y):Y)}}}function R0(Z,Y,O,W,G,Q,K,z,$,q){var B,P,X,H,V,U,D,R,F,y,I,v,N,C,m,s,S=Y.type;if(Y.constructor!==void 0)return null;128&O.__u&&($=!!(32&O.__u),Q=[z=Y.__e=O.__e]),(B=M.__b)&&B(Y);Y:if(typeof S=="function"){P=K.length;try{if(F=Y.props,y=S.prototype&&S.prototype.render,I=(B=S.contextType)&&W[B.__c],v=B?I?I.props.value:B.__:W,O.__c?R=(X=Y.__c=O.__c).__=X.__E:(y?Y.__c=X=new S(F,v):(Y.__c=X=new o(F,v),X.constructor=S,X.render=R1),I&&I.sub(X),X.state||(X.state={}),X.__n=W,H=X.__d=!0,X.__h=[],X._sb=[]),y&&X.__s==null&&(X.__s=X.state),y&&S.getDerivedStateFromProps!=null&&(X.__s==X.state&&(X.__s=h({},X.__s)),h(X.__s,S.getDerivedStateFromProps(F,X.__s))),V=X.props,U=X.state,X.__v=Y,H)y&&S.getDerivedStateFromProps==null&&X.componentWillMount!=null&&X.componentWillMount(),y&&X.componentDidMount!=null&&X.__h.push(X.componentDidMount);else{if(y&&S.getDerivedStateFromProps==null&&F!==V&&X.componentWillReceiveProps!=null&&X.componentWillReceiveProps(F,v),Y.__v==O.__v||!X.__e&&X.shouldComponentUpdate!=null&&X.shouldComponentUpdate(F,X.__s,v)===!1){Y.__v!=O.__v&&(X.props=F,X.state=X.__s,X.__d=!1),Y.__e=O.__e,Y.__k=O.__k,Y.__k.some(function(g){g&&(g.__=Y)}),K0.push.apply(X.__h,X._sb),X._sb=[],X.__h.length&&K.push(X),z=r(O);break Y}X.componentWillUpdate!=null&&X.componentWillUpdate(F,X.__s,v),y&&X.componentDidUpdate!=null&&X.__h.push(function(){X.componentDidUpdate(V,U,D)})}if(X.context=v,X.props=F,X.__P=Z,X.__e=!1,N=M.__r,C=0,y)X.state=X.__s,X.__d=!1,N&&N(Y),B=X.render(X.props,X.state,X.context),K0.push.apply(X.__h,X._sb),X._sb=[];else do X.__d=!1,N&&N(Y),B=X.render(X.props,X.state,X.context),X.state=X.__s;while(X.__d&&++C<25);X.state=X.__s,X.getChildContext!=null&&(W=h(h({},W),X.getChildContext())),y&&!H&&X.getSnapshotBeforeUpdate!=null&&(D=X.getSnapshotBeforeUpdate(V,U)),m=B!=null&&B.type===$0&&B.key==null?s0(B.props.children):B,z=a0(Z,H0(m)?m:[m],Y,O,W,G,Q,K,z,$,q),X.base=Y.__e,Y.__u&=-161,X.__h.length&&K.push(X),R&&(X.__E=X.__=null)}catch(g){if(K.length=P,Y.__v=null,$||Q!=null){if(g.then){for(Y.__u|=$?160:128;z&&z.nodeType==8&&z.nextSibling;)z=z.nextSibling;Q!=null&&(Q[Q.indexOf(z)]=null),Y.__e=z}else if(Q!=null)for(s=Q.length;s--;)D0(Q[s])}else Y.__e=O.__e;Y.__k==null&&(Y.__k=O.__k||[]),g.then||i0(Y),M.__e(g,Y,O)}}else Q==null&&Y.__v==O.__v?(Y.__k=O.__k,Y.__e=O.__e):z=Y.__e=D1(O.__e,Y,O,W,G,Q,K,$,q);return(B=M.diffed)&&B(Y),128&Y.__u?void 0:z}function i0(Z){Z&&(Z.__c&&(Z.__c.__e=!0),Z.__k&&Z.__k.some(i0))}function o0(Z,Y,O){for(var W=0;W<O.length;W++)w0(O[W],O[++W],O[++W]);M.__c&&M.__c(Y,Z),Z.some(function(G){try{Z=G.__h,G.__h=[],Z.some(function(Q){Q.call(G)})}catch(Q){M.__e(Q,G.__v)}})}function s0(Z){return typeof Z!="object"||Z==null||Z.__b>0?Z:H0(Z)?Z.map(s0):Z.constructor!==void 0?null:h({},Z)}function D1(Z,Y,O,W,G,Q,K,z,$){var q,B,P,X,H,V,U,D=O.props||G0,R=Y.props,F=Y.type;if(F=="svg"?G="http://www.w3.org/2000/svg":F=="math"?G="http://www.w3.org/1998/Math/MathML":G||(G="http://www.w3.org/1999/xhtml"),Q!=null){for(q=0;q<Q.length;q++)if((H=Q[q])&&"setAttribute"in H==!!F&&(F?H.localName==F:H.nodeType==3)){Z=H,Q[q]=null;break}}if(Z==null){if(F==null)return document.createTextNode(R);Z=document.createElementNS(G,F,R.is&&R),z&&(M.__m&&M.__m(Y,Q),z=!1),Q=null}if(F==null)D===R||z&&Z.data==R||(Z.data=R);else{if(Q=F=="textarea"&&R.defaultValue!=null?null:Q&&z0.call(Z.childNodes),!z&&Q!=null)for(D={},q=0;q<Z.attributes.length;q++)D[(H=Z.attributes[q]).name]=H.value;for(q in D)H=D[q],q=="dangerouslySetInnerHTML"?P=H:q=="children"||(q in R)||q=="value"&&("defaultValue"in R)||q=="checked"&&("defaultChecked"in R)||Q0(Z,q,null,H,G);for(q in R)H=R[q],q=="children"?X=H:q=="dangerouslySetInnerHTML"?B=H:q=="value"?V=H:q=="checked"?U=H:z&&typeof H!="function"||D[q]===H||Q0(Z,q,H,D[q],G);if(B)z||P&&(B.__html==P.__html||B.__html==Z.innerHTML)||(Z.innerHTML=B.__html),Y.__k=[];else if(P&&(Z.innerHTML=""),a0(Y.type=="template"?Z.content:Z,H0(X)?X:[X],Y,O,W,F=="foreignObject"?"http://www.w3.org/1999/xhtml":G,Q,K,Q?Q[0]:O.__k&&r(O,0),z,$),Q!=null)for(q=Q.length;q--;)D0(Q[q]);z&&F!="textarea"||(q="value",F=="progress"&&V==null?Z.removeAttribute("value"):V!=null&&(V!==Z[q]||F=="progress"&&!V||F=="option"&&V!=D[q])&&Q0(Z,q,V,D[q],G),q="checked",U!=null&&U!=Z[q]&&Q0(Z,q,U,D[q],G))}return Z}function w0(Z,Y,O){try{if(typeof Z=="function"){var W=typeof Z.__u=="function";W&&Z.__u(),W&&Y==null||(Z.__u=Z(Y))}else Z.current=Y}catch(G){M.__e(G,O)}}function l0(Z,Y,O){var W,G;if(M.unmount&&M.unmount(Z),(W=Z.ref)&&(W.current&&W.current!=Z.__e||w0(W,null,Y)),(W=Z.__c)!=null){if(W.componentWillUnmount)try{W.componentWillUnmount()}catch(Q){M.__e(Q,Y)}W.base=W.__P=W.__n=null}if(W=Z.__k)for(G=0;G<W.length;G++)W[G]&&l0(W[G],Y,O||typeof Z.type!="function");O||D0(Z.__e),Z.__c=Z.__=Z.__e=void 0}function R1(Z,Y,O){return this.constructor(Z,O)}function B0(Z,Y,O){var W,G,Q,K;Y==document&&(Y=document.documentElement),M.__&&M.__(Z,Y),G=(W=typeof O=="function")?null:O&&O.__k||Y.__k,Q=[],K=[],R0(Y,Z=(!W&&O||Y).__k=N0($0,null,[Z]),G||G0,G0,Y.namespaceURI,!W&&O?[O]:G?null:Y.firstChild?z0.call(Y.childNodes):null,Q,!W&&O?O:G?G.__e:Y.firstChild,W,K),o0(Q,Z,K),Z.props.children=null}z0=K0.slice,M={__e:function(Z,Y,O,W){for(var G,Q,K;Y=Y.__;)if((G=Y.__c)&&!G.__)try{if((Q=G.constructor)&&Q.getDerivedStateFromError!=null&&(G.setState(Q.getDerivedStateFromError(Z)),K=G.__d),G.componentDidCatch!=null&&(G.componentDidCatch(Z,W||{}),K=G.__d),K)return G.__E=G}catch(z){Z=z}throw Z}},d0=0,P1=function(Z){return Z!=null&&Z.constructor===void 0},o.prototype.setState=function(Z,Y){var O;O=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=h({},this.state),typeof Z=="function"&&(Z=Z(h({},O),this.props)),Z&&h(O,Z),Z!=null&&this.__v&&(Y&&this._sb.push(Y),v0(this))},o.prototype.forceUpdate=function(Z){this.__v&&(this.__e=!0,Z&&this.__h.push(Z),v0(this))},o.prototype.render=$0,c=[],h0=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g0=function(Z,Y){return Z.__v.__b-Y.__v.__b},q0.__r=0,F0=Math.random().toString(8),W0="__d"+F0,t="__a"+F0,c0=/(PointerCapture)$|Capture$/i,M0=0,T0=f0(!1),_0=f0(!0),U1=0;var e,w,E0,u0,n=0,W1=[],E=M,t0=E.__b,e0=E.__r,n0=E.diffed,Y1=E.__c,Z1=E.unmount,O1=E.__;function y0(Z,Y){E.__h&&E.__h(w,Z,n||Y),n=0;var O=w.__H||(w.__H={__:[],__h:[]});return Z>=O.__.length&&O.__.push({}),O.__[Z]}function T(Z){return n=1,w1(K1,Z)}function w1(Z,Y,O){var W=y0(e++,2);if(W.t=Z,!W.__c&&(W.__=[O?O(Y):K1(void 0,Y),function(z){var $=W.__N?W.__N[0]:W.__[0],q=W.t($,z);$!==q&&(W.__N=[q,W.__[1]],W.__c.setState({}))}],W.__c=w,!w.__f)){var G=function(z,$,q){if(!W.__c.__H)return!0;var B=!1,P=W.__c.props!==z;if(W.__c.__H.__.some(function(H){if(H.__N){B=!0;var V=H.__[0];H.__=H.__N,H.__N=void 0,V!==H.__[0]&&(P=!0)}}),Q){var X=Q.call(this,z,$,q);return B?X||P:X}return!B||P};w.__f=!0;var{shouldComponentUpdate:Q,componentWillUpdate:K}=w;w.componentWillUpdate=function(z,$,q){if(this.__e){var B=Q;Q=void 0,G(z,$,q),Q=B}K&&K.call(this,z,$,q)},w.shouldComponentUpdate=G}return W.__N||W.__}function p(Z,Y){var O=y0(e++,3);!E.__s&&G1(O.__H,Y)&&(O.__=Z,O.u=Y,w.__H.__h.push(O))}function Y0(Z){return n=5,X1(function(){return{current:Z}},[])}function X1(Z,Y){var O=y0(e++,7);return G1(O.__H,Y)&&(O.__=Z(),O.__H=Y,O.__h=Z),O.__}function Z0(Z,Y){return n=8,X1(function(){return Z},Y)}function E1(){for(var Z;Z=W1.shift();){var Y=Z.__H;if(Z.__P&&Y)try{Y.__h.some(L0),Y.__h.some(k0),Y.__h=[]}catch(O){Y.__h=[],E.__e(O,Z.__v)}}}E.__b=function(Z){w=null,t0&&t0(Z)},E.__=function(Z,Y){Z&&Y.__k&&Y.__k.__m&&(Z.__m=Y.__k.__m),O1&&O1(Z,Y)},E.__r=function(Z){e0&&e0(Z),e=0;var Y=(w=Z.__c).__H;Y&&(E0===w?(Y.__h=[],w.__h=[],Y.__.some(function(O){O.__N&&(O.__=O.__N),O.u=O.__N=void 0})):(Y.__h.some(L0),Y.__h.some(k0),Y.__h=[],e=0)),E0=w},E.diffed=function(Z){n0&&n0(Z);var Y=Z.__c;Y&&Y.__H&&(Y.__H.__h.length&&(W1.push(Y)!==1&&u0===E.requestAnimationFrame||((u0=E.requestAnimationFrame)||k1)(E1)),Y.__H.__.some(function(O){O.u&&(O.__H=O.u,O.u=void 0)})),E0=w=null},E.__c=function(Z,Y){Y.some(function(O){try{O.__h.some(L0),O.__h=O.__h.filter(function(W){return!W.__||k0(W)})}catch(W){Y.some(function(G){G.__h&&(G.__h=[])}),Y=[],E.__e(W,O.__v)}}),Y1&&Y1(Z,Y)},E.unmount=function(Z){Z1&&Z1(Z);var Y,O=Z.__c;O&&O.__H&&(O.__H.__.some(function(W){try{L0(W)}catch(G){Y=G}}),O.__H=void 0,Y&&E.__e(Y,O.__v))};var Q1=typeof requestAnimationFrame=="function";function k1(Z){var Y,O=function(){clearTimeout(W),Q1&&cancelAnimationFrame(Y),setTimeout(Z)},W=setTimeout(O,35);Q1&&(Y=requestAnimationFrame(O))}function L0(Z){var Y=w,O=Z.__c;typeof O=="function"&&(Z.__c=void 0,O()),w=Y}function k0(Z){var Y=w;Z.__c=Z.__(),w=Y}function G1(Z,Y){return!Z||Z.length!==Y.length||Y.some(function(O,W){return O!==Z[W]})}function K1(Z,Y){return typeof Y=="function"?Y(Z):Y}var z1=function(Z,Y,O,W){var G;Y[0]=0;for(var Q=1;Q<Y.length;Q++){var K=Y[Q++],z=Y[Q]?(Y[0]|=K?1:2,O[Y[Q++]]):Y[++Q];K===3?W[0]=z:K===4?W[1]=Object.assign(W[1]||{},z):K===5?(W[1]=W[1]||{})[Y[++Q]]=z:K===6?W[1][Y[++Q]]+=z+"":K?(G=Z.apply(z,z1(Z,z,O,["",null])),W.push(G),z[0]?Y[0]|=2:(Y[Q-2]=0,Y[Q]=G)):W.push(z)}return W},q1=new Map;function C0(Z){var Y=q1.get(this);return Y||(Y=new Map,q1.set(this,Y)),(Y=z1(this,Y.get(Z)||(Y.set(Z,Y=function(O){for(var W,G,Q=1,K="",z="",$=[0],q=function(X){Q===1&&(X||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?$.push(0,X,K):Q===3&&(X||K)?($.push(3,X,K),Q=2):Q===2&&K==="..."&&X?$.push(4,X,0):Q===2&&K&&!X?$.push(5,0,!0,K):Q>=5&&((K||!X&&Q===5)&&($.push(Q,0,K,G),Q=6),X&&($.push(Q,X,0,G),Q=6)),K=""},B=0;B<O.length;B++){B&&(Q===1&&q(),q(B));for(var P=0;P<O[B].length;P++)W=O[B][P],Q===1?W==="<"?(q(),$=[$],Q=3):K+=W:Q===4?K==="--"&&W===">"?(Q=1,K=""):K=W+K[0]:z?W===z?z="":K+=W:W==='"'||W==="'"?z=W:W===">"?(q(),Q=1):Q&&(W==="="?(Q=5,G=K,K=""):W==="/"&&(Q<5||O[B][P+1]===">")?(q(),Q===3&&($=$[0]),Q=$,($=$[0]).push(2,0,Q),Q=0):W===" "||W==="\t"||W===`
`||W==="\r"?(q(),Q=2):K+=W),Q===3&&K==="!--"&&(Q=4,$=$[0])}return q(),$}(Z)),Y),arguments,[])).length>1?Y:Y[0]}var J=C0.bind(N0);async function k(Z,Y){let O=await fetch(`/api${Z}`,{credentials:"same-origin",headers:{"Content-Type":"application/json",...Y?.headers??{}},...Y});if(!O.ok){let W=await O.json().catch(()=>({error:O.statusText}));throw Error(W.error||`HTTP ${O.status}`)}return O.json()}function y1(){let[Z,Y]=T([]),[O,W]=T(null),[G,Q]=T("list"),[K,z]=T(null),[$,q]=T(!0),B=Z0(async()=>{try{let H=await k("/agents");Y(H.agents||[])}catch(H){console.error("Failed to load agents:",H)}},[]),P=Z0(async(H)=>{if(!confirm(`Remove "${H.name}"? This deletes its conversation history too.`))return;try{await k(`/agents/${H.id}`,{method:"DELETE"}),W((V)=>{if(V?.id===H.id)return Q("list"),null;return V}),await B()}catch(V){alert(`Failed to remove agent: ${V.message}`)}},[B]);p(()=>{(async()=>{try{let H=await k("/auth/me");z(H.user)}catch{}await B(),q(!1)})()},[]);let X=(H)=>({style:{...H?Object.fromEntries(H.split(";").filter(Boolean).map((V)=>{let[U,D]=V.trim().split(":");return[U.replace(/-([a-z])/g,(R,F)=>F.toUpperCase()),D.trim()]})):{}}});if($)return J`<div style=${{padding:"2rem",color:"var(--text-dim)"}}>Loading…</div>`;return J`
    <div style=${{display:"flex",height:"100vh",overflow:"hidden"}}>
      ${""}
      <aside style=${{width:"280px",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column",background:"var(--bg-card)",flexShrink:0}}>
        <div style=${{padding:"1.25rem",borderBottom:"1px solid var(--border)"}}>
          <h1 style=${{fontSize:"1.1rem",fontWeight:700,display:"flex",alignItems:"center",gap:"0.5rem"}}>
            🎵 Orchestral
          </h1>
          <p style=${{fontSize:"0.75rem",color:"var(--text-dim)",marginTop:"0.25rem"}}>
            A2A Agent Console
          </p>
        </div>

        <div style=${{padding:"0.75rem",display:"flex",flexDirection:"column",gap:"0.5rem"}}>
          <button
            onClick=${()=>{Q("add"),W(null)}}
            style=${{width:"100%",padding:"0.6rem 0.75rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.85rem"}}
          >
            + Add Agent
          </button>
          <button
            onClick=${()=>{Q("jobs"),W(null)}}
            style=${{width:"100%",padding:"0.6rem 0.75rem",borderRadius:"var(--radius)",background:G==="jobs"?"var(--bg-hover)":"transparent",border:"1px solid var(--border)",color:"var(--text)",cursor:"pointer",fontWeight:600,fontSize:"0.85rem"}}
          >
            🚀 Jobs
          </button>
        </div>

        <div style=${{flex:1,overflowY:"auto",padding:"0 0.75rem"}}>
          ${Z.map((H)=>J`
            <div
              key=${H.id}
              onClick=${()=>{W(H),Q("chat")}}
              style=${{width:"100%",textAlign:"left",padding:"0.75rem",marginBottom:"0.25rem",borderRadius:"var(--radius)",border:"1px solid transparent",background:O?.id===H.id?"var(--bg-hover)":"transparent",color:"var(--text)",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.5rem"}}
            >
              ${H.icon_url?J`<img src=${H.icon_url} style=${{width:"1.5rem",height:"1.5rem",borderRadius:"50%"}} />`:J`<span style=${{fontSize:"1.25rem"}}>🤖</span>`}
              <div style=${{flex:1,minWidth:0}}>
                <div style=${{fontSize:"0.85rem",fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                  ${H.name}
                </div>
                <div style=${{fontSize:"0.7rem",marginTop:"0.15rem",color:H.auth_state==="connected"?"var(--success)":"var(--warning)"}}>
                  ${H.auth_state==="connected"?"● Connected":"○ Needs auth"}
                </div>
              </div>
              <button
                onClick=${(V)=>{V.stopPropagation(),P(H)}}
                title="Remove agent"
                style=${{background:"transparent",border:"none",color:"var(--text-dim)",cursor:"pointer",fontSize:"0.9rem",padding:"0.25rem",lineHeight:1,flexShrink:0,borderRadius:"var(--radius)"}}
              >
                🗑
              </button>
            </div>
          `)}
        </div>

        <div style=${{padding:"0.75rem",borderTop:"1px solid var(--border)"}}>
          ${K?J`<div style=${{fontSize:"0.75rem",color:"var(--text-dim)"}}>
              Signed in as ${K.name||K.email||K.sub}
              <br/><a href="/api/auth/logout" style=${{color:"var(--accent)"}}>Log out</a>
            </div>`:J`<div style=${{fontSize:"0.75rem",color:"var(--text-dim)"}}>
              <a href="/api/auth/login" style=${{color:"var(--accent)"}}>Sign in with Pocket ID</a>
            </div>`}
        </div>
      </aside>

      ${""}
      <main style=${{flex:1,overflow:"hidden",display:"flex",flexDirection:"column"}}>
        ${G==="add"&&J`<${A1} onAdded=${(H)=>{B(),W(H),Q("chat")}} />`}
        ${G==="chat"&&O&&J`<${I1} agent=${O} onRefresh=${B} onDelete=${()=>P(O)} />`}
        ${G==="jobs"&&J`<${j1} agents=${Z} />`}
        ${G==="list"&&J`<${C1} />`}
      </main>
    </div>
  `}function C1(){return J`
    <div style=${{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"var(--text-dim)"}}>
      <div style=${{fontSize:"3rem",marginBottom:"1rem"}}>🎵</div>
      <p style=${{fontSize:"1rem"}}>Select an agent or add a new one to get started</p>
      <p style=${{fontSize:"0.8rem",marginTop:"0.5rem",color:"var(--text-dimmer)"}}>
        Orchestral connects to A2A agents via OIDC and lets you message them
      </p>
    </div>
  `}var x1={queued:"Queued",provisioning:"Provisioning container…",cloning:"Cloning repo…",running:"Bot is working…",patching:"Applying patch…",opening_pr:"Opening PR…",done:"Done",failed:"Failed"};function j1({agents:Z}){let[Y,O]=T(null),[W,G]=T([]),[Q,K]=T([]),[z,$]=T(""),[q,B]=T(""),[P,X]=T(""),[H,V]=T(!1),[U,D]=T(""),[R,F]=T(null),y=(Z||[]).filter((N)=>N.auth_state==="connected"),I=Z0(async()=>{try{let N=await k("/jobs");K(N.jobs||[])}catch(N){console.error("Failed to load jobs:",N)}},[]);p(()=>{(async()=>{try{let N=await k("/github/status");if(O(N),N.connected){let C=await k("/github/repos");G(C.repos||[])}}catch(N){D(N.message)}await I()})()},[]),p(()=>{if(!Q.some((m)=>!["done","failed"].includes(m.status)))return;let C=setInterval(I,3000);return()=>clearInterval(C)},[Q,I]);async function v(N){if(N?.preventDefault(),!z||!q||!P.trim()||H)return;V(!0),D("");try{let C=await k("/jobs",{method:"POST",body:JSON.stringify({agent_id:z,repo:q,instruction:P.trim()})});K((m)=>[C.job,...m]),X("")}catch(C){D(C.message)}finally{V(!1)}}return J`
    <div style=${{maxWidth:"760px",margin:"0 auto",padding:"2rem",overflowY:"auto",flex:1}}>
      <h2 style=${{fontSize:"1.25rem",fontWeight:700,marginBottom:"0.25rem"}}>🚀 Jobs</h2>
      <p style=${{fontSize:"0.8rem",color:"var(--text-dim)",marginBottom:"1.5rem"}}>
        Pick a repo and a bot, describe what to do, and orchestral spins up a fresh container,
        asks the bot for a patch, and opens a pull request.
      </p>

      ${!Y?.configured&&J`
        <div style=${{padding:"0.9rem",background:"rgba(245,158,11,0.1)",border:"1px solid var(--warning)",borderRadius:"var(--radius)",fontSize:"0.85rem",marginBottom:"1.5rem"}}>
          GitHub isn't configured on the server yet. Set <code>GITHUB_CLIENT_ID</code> / <code>GITHUB_CLIENT_SECRET</code>
          from a GitHub OAuth App (callback: <code>/api/github/callback</code>) to enable jobs.
        </div>
      `}

      ${Y?.configured&&!Y?.connected&&J`
        <div style=${{padding:"0.9rem",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:"var(--radius)",marginBottom:"1.5rem"}}>
          <p style=${{fontSize:"0.85rem",marginBottom:"0.75rem"}}>Connect GitHub to pick a repo and open PRs.</p>
          <a href="/api/github/login" style=${{display:"inline-block",padding:"0.5rem 1rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",textDecoration:"none",fontWeight:600,fontSize:"0.85rem"}}>
            🔗 Connect GitHub
          </a>
        </div>
      `}

      ${Y?.connected&&J`
        <div style=${{fontSize:"0.8rem",color:"var(--success)",marginBottom:"1rem"}}>
          ● Connected to GitHub as ${Y.login}
        </div>

        <form onSubmit=${v} style=${{display:"flex",flexDirection:"column",gap:"1rem",marginBottom:"2rem"}}>
          <div>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>Repository</label>
            <select value=${q} onChange=${(N)=>B(N.target.value)} style=${{...i}}>
              <option value="">Select a repo…</option>
              ${W.map((N)=>J`<option key=${N.full_name} value=${N.full_name}>${N.full_name}${N.private?" \uD83D\uDD12":""}</option>`)}
            </select>
          </div>

          <div>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>Bot</label>
            <select value=${z} onChange=${(N)=>$(N.target.value)} style=${{...i}}>
              <option value="">Select a bot…</option>
              ${y.map((N)=>J`<option key=${N.id} value=${N.id}>${N.name}</option>`)}
            </select>
            ${y.length===0&&J`<p style=${{fontSize:"0.7rem",color:"var(--text-dimmer)",marginTop:"0.3rem"}}>No connected bots yet — add one first.</p>`}
          </div>

          <div>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>Command</label>
            <textarea
              value=${P}
              onInput=${(N)=>X(N.target.value)}
              placeholder="e.g. Fix the off-by-one error in the pagination helper"
              rows="3"
              style=${{...i,resize:"vertical",fontFamily:"inherit"}}
            />
          </div>

          ${U&&J`<div style=${{color:"var(--danger)",fontSize:"0.8rem"}}>${U}</div>`}

          <button type="submit" disabled=${!z||!q||!P.trim()||H} style=${{alignSelf:"flex-start",padding:"0.6rem 1.5rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",opacity:!z||!q||!P.trim()||H?0.5:1}}>
            ${H?"Starting…":"▶ Run Job"}
          </button>
        </form>
      `}

      <h3 style=${{fontSize:"0.95rem",fontWeight:700,marginBottom:"0.75rem"}}>Recent jobs</h3>
      ${Q.length===0&&J`<p style=${{fontSize:"0.8rem",color:"var(--text-dimmer)"}}>No jobs yet.</p>`}
      <div style=${{display:"flex",flexDirection:"column",gap:"0.5rem"}}>
        ${Q.map((N)=>J`
          <div key=${N.id} style=${{border:"1px solid var(--border)",borderRadius:"var(--radius)",padding:"0.75rem 1rem",background:"var(--bg-card)"}}>
            <div style=${{display:"flex",alignItems:"center",gap:"0.6rem",cursor:"pointer"}}
                 onClick=${()=>F(R===N.id?null:N.id)}>
              <span style=${{fontSize:"0.7rem",fontWeight:700,padding:"0.15rem 0.5rem",borderRadius:"999px",background:N.status==="done"?"rgba(34,197,94,0.15)":N.status==="failed"?"rgba(239,68,68,0.15)":"rgba(99,102,241,0.15)",color:N.status==="done"?"var(--success)":N.status==="failed"?"var(--danger)":"var(--accent)"}}>
                ${x1[N.status]||N.status}
              </span>
              <span style=${{fontSize:"0.85rem",fontWeight:600,flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                ${N.repo}: ${N.instruction}
              </span>
              ${N.pr_url&&J`
                <a href=${N.pr_url} target="_blank" onClick=${(C)=>C.stopPropagation()} style=${{fontSize:"0.75rem",color:"var(--accent)"}}>
                  View PR →
                </a>
              `}
            </div>
            ${R===N.id&&J`
              <pre style=${{marginTop:"0.75rem",padding:"0.75rem",background:"var(--bg)",borderRadius:"8px",fontSize:"0.7rem",color:"var(--text-dim)",whiteSpace:"pre-wrap",maxHeight:"300px",overflowY:"auto"}}>${N.log||"(no log yet)"}${N.error?`

Error: ${N.error}`:""}</pre>
            `}
          </div>
        `)}
      </div>
    </div>
  `}function A1({onAdded:Z}){let[Y,O]=T(""),[W,G]=T(""),[Q,K]=T(""),[z,$]=T(""),[q,B]=T(!1),[P,X]=T(null);async function H(){$(""),X(null),B(!0);try{let V=await k("/agents",{method:"POST",body:JSON.stringify({card_url:Y,oidc_client_id:W,oidc_client_secret:Q})});Z(V.agent)}catch(V){$(V.message)}finally{B(!1)}}return J`
    <div style=${{maxWidth:"640px",margin:"0 auto",padding:"2rem",overflowY:"auto",flex:1}}>
      <h2 style=${{fontSize:"1.25rem",fontWeight:700,marginBottom:"1.5rem"}}>Add A2A Agent</h2>

      <div style=${{marginBottom:"1.5rem"}}>
        <label style=${{display:"block",fontSize:"0.85rem",color:"var(--text-dim)",marginBottom:"0.4rem"}}>
          Agent Card URL
        </label>
        <input
          type="text"
          value=${Y}
          onInput=${(V)=>O(V.target.value)}
          placeholder="https://agent.example.com"
          style=${i}
        />
        <p style=${{fontSize:"0.75rem",color:"var(--text-dimmer)",marginTop:"0.4rem"}}>
          The URL where the agent publishes its Agent Card. Orchestral will fetch /.well-known/agent-card.json
        </p>
      </div>

      <details style=${{marginBottom:"1.5rem"}}>
        <summary style=${{cursor:"pointer",fontSize:"0.85rem",color:"var(--text-dim)"}}>
          OIDC client ID (optional — only needed for authorization code flow)
        </summary>
        <div style=${{marginTop:"0.75rem"}}>
          <p style=${{fontSize:"0.75rem",color:"var(--text-dimmer)",marginBottom:"0.5rem"}}>
            If the agent requires OIDC, you can connect via device code flow (no configuration needed),
            or provide a client ID for the authorization code flow (requires a registered redirect URI).
          </p>
          <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>
            Client ID (optional)
          </label>
          <input type="text" value=${W} onInput=${(V)=>G(V.target.value)} style=${i} />
        </div>
      </details>

      ${z&&J`<div style=${{padding:"0.75rem",background:"rgba(239,68,68,0.1)",border:"1px solid var(--danger)",borderRadius:"var(--radius)",color:"var(--danger)",fontSize:"0.85rem",marginBottom:"1rem"}}>
        ${z}
      </div>`}

      <button
        onClick=${H}
        disabled=${!Y||q}
        style=${{padding:"0.6rem 1.5rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",opacity:!Y||q?0.5:1}}
      >
        ${q?"Connecting…":"Add Agent"}
      </button>
    </div>
  `}function I1({agent:Z,onRefresh:Y,onDelete:O}){let[W,G]=T([]),[Q,K]=T(""),[z,$]=T(!1),[q,B]=T(null),[P,X]=T([]),[H,V]=T(""),[U,D]=T(Z),[R,F]=T(!1),y=Y0(null),I=Y0(null),v=Y0(null),N=Y0(0);p(()=>{k(`/agents/${Z.id}`).then((L)=>D(L)).catch(()=>{})},[Z.id]);let C=Z0(async(L)=>{let _=++N.current;B(L);let x=await k(`/conversations/${L}/messages`);if(_!==N.current)return;G(x.messages||[])},[]);p(()=>{(async()=>{try{let _=(await k(`/agents/${Z.id}/conversations`)).conversations||[];if(X(_),_.length>0)await C(_[0].id);else{let x=++N.current,j=await k(`/agents/${Z.id}/conversations`,{method:"POST"});if(x!==N.current)return;X([j.conversation]),B(j.conversation.id),G([])}}catch(L){V(L.message)}})()},[Z.id]);async function m(){V("");let L=++N.current;try{let _=await k(`/agents/${Z.id}/conversations`,{method:"POST"});if(L!==N.current)return;X((x)=>[_.conversation,...x]),B(_.conversation.id),G([]),K("")}catch(_){if(L===N.current)V(_.message)}}async function s(L){if(L===q)return;V("");try{await C(L)}catch(_){V(_.message)}}p(()=>{y.current?.scrollIntoView({behavior:"smooth"})},[W]),p(()=>{if(!z&&!b)I.current?.focus()},[z]);async function S(L){if(L?.preventDefault(),!Q.trim()||!q||z)return;let _=Q.trim(),x=q;K(""),$(!0),V("");let j=++N.current;G((f)=>[...f,{role:"user",text:_,created_at:Date.now()/1000,id:"temp-"+Date.now()}]),G((f)=>[...f,{role:"agent",text:"",created_at:Date.now()/1000,id:"temp-agent-"+Date.now(),streaming:!0}]);try{if(U?.agent_card?.capabilities?.streaming??!0)await g(_,x,j);else await H1(_,x,j)}catch(f){if(j===N.current){if(V(f.message),f.message.includes("Authentication"))Y();G((J0)=>J0.filter((l)=>!l.streaming))}}finally{$(!1)}}async function g(L,_,x){let j=await fetch(`/api/conversations/${_}/stream`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:L}),credentials:"same-origin"});if(!j.ok){let u=await j.json().catch(()=>({error:j.statusText}));throw Error(u.error||`HTTP ${j.status}`)}let f=j.body.getReader(),J0=new TextDecoder,l="",P0="";while(!0){let{done:u,value:V1}=await f.read();if(u)break;l+=J0.decode(V1,{stream:!0});let A0=l.split(`

`);l=A0.pop()||"";for(let J1 of A0)for(let I0 of J1.split(`
`))if(I0.startsWith("data: "))try{let A=JSON.parse(I0.slice(6));if(A.error)throw Error(A.error);let a="",S0=!1;if(A.task?.status?.message?.parts)a=A.task.status.message.parts.map((d)=>d.text||"").join("");else if(A.message?.parts)a=A.message.parts.map((d)=>d.text||"").join("");else if(A.artifactUpdate?.artifact?.parts)a=A.artifactUpdate.artifact.parts.map((d)=>d.text||"").join(""),S0=!!A.artifactUpdate.append;else if(A.statusUpdate?.status?.message?.parts)a=A.statusUpdate.status.message.parts.map((d)=>d.text||"").join("");if(a){if(P0=S0?P0+a:a,x===N.current)G((d)=>d.map((U0)=>U0.streaming?{...U0,text:P0}:U0))}}catch(A){if(A.message)throw A}}if(x===N.current){let u=await k(`/conversations/${_}/messages`);if(x===N.current)G(u.messages||[])}}async function H1(L,_,x){if(await k(`/conversations/${_}/send`,{method:"POST",body:JSON.stringify({text:L})}),x!==N.current)return;let j=await k(`/conversations/${_}/messages`);if(x===N.current)G(j.messages||[])}let[V0,x0]=T(!1),[O0,N1]=T(""),[j0,$1]=T("");async function B1(){x0(!0),V("");try{await k(`/agents/${Z.id}/credentials`,{method:"POST",body:JSON.stringify({client_id:O0,client_secret:j0})}),window.location.href=`/api/agents/${Z.id}/connect`}catch(L){V(L.message)}finally{x0(!1)}}let b=U?.auth_state!=="connected",L1=typeof window<"u"?`${window.location.origin}/api/agent/oidc/callback`:"";return J`
    <div style=${{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
      ${""}
      <header style=${{padding:"1rem 1.5rem",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",gap:"0.75rem"}}>
        ${U?.icon_url?J`<img src=${U.icon_url} style=${{width:"2rem",height:"2rem",borderRadius:"50%"}} />`:J`<span style=${{fontSize:"1.5rem"}}>🤖</span>`}
        <div style=${{flex:1}}>
          <h2 style=${{fontSize:"1rem",fontWeight:600}}>${U?.name||Z.name}</h2>
          ${U?.description&&J`<p style=${{fontSize:"0.75rem",color:"var(--text-dim)"}}>${U.description}</p>`}
        </div>
        ${P.length>1&&J`
          <select
            value=${q}
            onChange=${(L)=>s(L.target.value)}
            style=${{padding:"0.4rem 0.6rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:"0.75rem",outline:"none"}}
          >
            ${P.map((L,_)=>J`
              <option key=${L.id} value=${L.id}>
                ${new Date(L.created_at*1000).toLocaleString()} ${_===0?"(latest)":""}
              </option>
            `)}
          </select>
        `}
        <button
          onClick=${m}
          title="Start a new conversation with this agent"
          style=${{padding:"0.4rem 0.75rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",cursor:"pointer",fontWeight:600,fontSize:"0.75rem"}}
        >
          + New Conversation
        </button>
        <div style=${{padding:"0.25rem 0.6rem",borderRadius:"999px",fontSize:"0.75rem",fontWeight:600,background:b?"rgba(245,158,11,0.1)":"rgba(34,197,94,0.1)",color:b?"var(--warning)":"var(--success)",border:`1px solid ${b?"var(--warning)":"var(--success)"}`}}>
          ${b?"Needs Auth":"Connected"}
        </div>
        <button
          onClick=${()=>F((L)=>!L)}
          title="Agent info"
          style=${{padding:"0.4rem 0.6rem",borderRadius:"var(--radius)",background:R?"var(--bg-hover)":"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text-dim)",cursor:"pointer",fontWeight:600,fontSize:"0.75rem"}}
        >
          ℹ️
        </button>
        <button
          onClick=${O}
          title="Remove this agent"
          style=${{padding:"0.4rem 0.75rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text-dim)",cursor:"pointer",fontWeight:600,fontSize:"0.75rem"}}
        >
          🗑 Remove
        </button>
      </header>

      ${R&&J`
        <div style=${{padding:"0.9rem 1.5rem",borderBottom:"1px solid var(--border)",fontSize:"0.78rem",color:"var(--text-dim)",display:"flex",flexDirection:"column",gap:"0.35rem"}}>
          ${[["Card URL",U?.card_url],["Endpoint URL",U?.agent_card?.url],["Protocol version",U?.agent_card?.protocolVersion],["Transport",U?.agent_card?.preferredTransport],["Agent version",U?.agent_card?.version],["Security",U?.security_type],["Streaming",U?.agent_card?.capabilities?.streaming?"yes":"no"],["Skills",(U?.agent_card?.skills||[]).map((L)=>L.name||L.id).filter(Boolean).join(", ")||"—"],["Added",U?.created_at?new Date(U.created_at*1000).toLocaleString():void 0]].filter(([,L])=>L!==void 0&&L!==null&&L!=="").map(([L,_])=>J`
            <div key=${L} style=${{display:"flex",gap:"0.6rem"}}>
              <span style=${{minWidth:"110px",flexShrink:0,color:"var(--text-dimmer)"}}>${L}</span>
              <span style=${{color:"var(--text)",wordBreak:"break-all"}}>${_}</span>
            </div>
          `)}
        </div>
      `}

      ${b&&J`
        <div style=${{padding:"1.5rem",borderBottom:"1px solid var(--border)",maxWidth:"600px"}}>
          <p style=${{color:"var(--text)",marginBottom:"0.5rem",fontSize:"0.9rem"}}>
            This agent requires OIDC via Pocket ID.
          </p>
          <p style=${{color:"var(--text-dim)",marginBottom:"1rem",fontSize:"0.8rem"}}>
            Enter think's Pocket ID client ID. If the client is set to <strong>public</strong> in
            <a href="https://id.openbao.boxd.sh/settings/admin/oidc-clients" target="_blank" style=${{color:"var(--accent)"}}>Pocket ID admin</a>,
            no secret is needed — PKCE handles it. Otherwise include the secret too.
          </p>
          <div style=${{marginBottom:"0.75rem"}}>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>
              Client ID
            </label>
            <input
              type="text"
              value=${O0}
              onInput=${(L)=>N1(L.target.value)}
              placeholder="Pocket ID client ID"
              style=${{...i,width:"100%"}}
            />
          </div>
          <div style=${{marginBottom:"0.75rem"}}>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>
              Client Secret
            </label>
            <input
              type="password"
              value=${j0}
              onInput=${(L)=>$1(L.target.value)}
              placeholder="Pocket ID client secret"
              style=${{...i,width:"100%"}}
            />
          </div>
          <div style=${{padding:"0.6rem",background:"var(--bg)",borderRadius:"8px",marginBottom:"1rem",fontSize:"0.75rem",color:"var(--text-dim)"}}>
            <strong style=${{color:"var(--warning)"}}>One-time setup:</strong> Add this redirect URI to this client in Pocket ID:
            <br/>
            <code style=${{color:"var(--accent)",fontSize:"0.7rem",wordBreak:"break-all"}}>${L1}</code>
            <br/>
            <a href="https://id.openbao.boxd.sh/settings/admin/oidc-clients" target="_blank" style=${{color:"var(--accent)",fontSize:"0.7rem"}}>
              → Pocket ID admin
            </a>
          </div>
          <button onClick=${B1} disabled=${!O0||V0} style=${{padding:"0.6rem 1.5rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",opacity:!O0||V0?0.5:1}}>
            ${V0?"Redirecting…":"\uD83D\uDD11 Connect"}
          </button>
        </div>
      `}

      ${""}
      <div style=${{flex:1,overflowY:"auto",padding:"1.5rem"}}>
        <div style=${{maxWidth:"720px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"0.75rem"}}>
          ${W.length===0&&!b&&J`
            <div style=${{textAlign:"center",padding:"3rem",color:"var(--text-dimmer)"}}>
              <p style=${{fontSize:"0.9rem"}}>Send a message to start talking to this agent via A2A</p>
            </div>
          `}
          ${W.map((L)=>J`
            <div key=${L.id} style=${{maxWidth:"85%",alignSelf:L.role==="user"?"flex-end":"flex-start",padding:"0.6rem 0.9rem",borderRadius:"var(--radius)",fontSize:"0.875rem",lineHeight:1.5,background:L.role==="user"?"var(--accent)":"var(--bg-card)",color:L.role==="user"?"white":"var(--text)",whiteSpace:"pre-wrap"}}>
              ${L.text||(L.streaming?"…":"")}
            </div>
          `)}
          <div ref=${y} />
        </div>
      </div>

      ${H&&J`
        <div style=${{padding:"0.5rem 1.5rem",color:"var(--danger)",fontSize:"0.8rem"}}>
          ${H}
        </div>
      `}

      ${""}
      <footer style=${{borderTop:"1px solid var(--border)",padding:"1rem 1.5rem"}}>
        <form onSubmit=${S} style=${{maxWidth:"720px",margin:"0 auto",display:"flex",gap:"0.5rem"}}>
          <input
            ref=${I}
            type="text"
            value=${Q}
            onInput=${(L)=>K(L.target.value)}
            placeholder=${b?"Connect to start messaging…":"Send a message…"}
            disabled=${b||z}
            style=${{flex:1,padding:"0.6rem 0.9rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:"0.875rem",outline:"none",opacity:b||z?0.5:1}}
          />
          <button type="submit" disabled=${b||z||!Q.trim()} style=${{padding:"0.6rem 1.2rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.85rem",opacity:b||z||!Q.trim()?0.5:1}}>
            ${z?"…":"Send"}
          </button>
        </form>
      </footer>
    </div>
  `}var i={width:"100%",padding:"0.6rem 0.9rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:"0.875rem",outline:"none"};B0(J`<${y1} />`,document.getElementById("root"));
