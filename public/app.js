var X0,U,A0,H1,d,y0,S0,b0,B0,Y0,s,v0,J0,L0,V0,N1,O0={},Q0=[],$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,G0=Array.isArray;function h(Z,Y){for(var O in Y)Z[O]=Y[O];return Z}function R0(Z){Z&&Z.parentNode&&Z.parentNode.removeChild(Z)}function K0(Z,Y,O){var W,G,Q,K={};for(Q in Y)Q=="key"?W=Y[Q]:Q=="ref"?G=Y[Q]:K[Q]=Y[Q];if(arguments.length>2&&(K.children=arguments.length>3?X0.call(arguments,2):O),typeof Z=="function"&&Z.defaultProps!=null)for(Q in Z.defaultProps)K[Q]===void 0&&(K[Q]=Z.defaultProps[Q]);return Z0(Z,K,W,G,null)}function Z0(Z,Y,O,W,G){var Q={type:Z,props:Y,key:O,ref:W,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:G==null?++A0:G,__i:-1,__u:0};return G==null&&U.vnode!=null&&U.vnode(Q),Q}function q0(Z){return Z.children}function o(Z,Y){this.props=Z,this.context=Y}function c(Z,Y){if(Y==null)return Z.__?c(Z.__,Z.__i+1):null;for(var O;Y<Z.__k.length;Y++)if((O=Z.__k[Y])!=null&&O.__e!=null)return O.__e;return typeof Z.type=="function"?c(Z):null}function B1(Z){if(Z.__P&&Z.__d){var Y=Z.__v,O=Y.__e,W=[],G=[],Q=h({},Y);Q.__v=Y.__v+1,U.vnode&&U.vnode(Q),P0(Z.__P,Q,Y,Z.__n,Z.__P.namespaceURI,32&Y.__u?[O]:null,W,O==null?c(Y):O,!!(32&Y.__u),G),Q.__v=Y.__v,Q.__.__k[Q.__i]=Q,g0(W,Q,G),Y.__e=Y.__=null,Q.__e!=O&&f0(Q)}}function f0(Z){if((Z=Z.__)!=null&&Z.__c!=null)return Z.__e=Z.__c.base=null,Z.__k.some(function(Y){if(Y!=null&&Y.__e!=null)return Z.__e=Z.__c.base=Y.__e}),f0(Z)}function x0(Z){(!Z.__d&&(Z.__d=!0)&&d.push(Z)&&!W0.__r++||y0!=U.debounceRendering)&&((y0=U.debounceRendering)||S0)(W0)}function W0(){try{for(var Z,Y=1;d.length;)d.length>Y&&d.sort(b0),Z=d.shift(),Y=d.length,B1(Z)}finally{d.length=W0.__r=0}}function m0(Z,Y,O,W,G,Q,K,z,N,q,$){var J,X,H,L,F,_,D=W&&W.__k||Q0,P=Y.length;for(N=L1(O,Y,D,N,P),J=0;J<P;J++)(H=O.__k[J])!=null&&(X=H.__i!=-1&&D[H.__i]||O0,H.__i=J,_=P0(Z,H,X,G,Q,K,z,N,q,$),L=H.__e,H.ref&&X.ref!=H.ref&&(X.ref&&T0(X.ref,null,H),$.push(H.ref,H.__c||L,H)),F==null&&L!=null&&(F=L),4&H.__u?(N=h0(H,N,Z),X.__e&&(X.__e=null)):typeof H.type=="function"&&_!==void 0?N=_:L&&(N=L.nextSibling),H.__u&=-7);return O.__e=F,N}function L1(Z,Y,O,W,G){var Q,K,z,N,q,$=O.length,J=$,X=0;for(Z.__k=Array(G),Q=0;Q<G;Q++)(K=Y[Q])!=null&&typeof K!="boolean"&&typeof K!="function"?(typeof K=="string"||typeof K=="number"||typeof K=="bigint"||K.constructor==String?K=Z.__k[Q]=Z0(null,K,null,null,null):G0(K)?K=Z.__k[Q]=Z0(q0,{children:K},null,null,null):K.constructor===void 0&&K.__b>0?K=Z.__k[Q]=Z0(K.type,K.props,K.key,K.ref?K.ref:null,K.__v):Z.__k[Q]=K,N=Q+X,K.__=Z,K.__b=Z.__b+1,z=null,(q=K.__i=V1(K,O,N,J))!=-1&&(J--,(z=O[q])&&(z.__u|=2)),z==null||z.__v==null?(q==-1&&(G>$?X--:G<$&&X++),typeof K.type!="function"&&(K.__u|=4)):q!=N&&(q==N-1?X--:q==N+1?X++:(q>N?X--:X++,K.__u|=4))):Z.__k[Q]=null;if(J)for(Q=0;Q<$;Q++)(z=O[Q])!=null&&(2&z.__u)==0&&(z.__e==W&&(W=c(z)),p0(z,z));return W}function h0(Z,Y,O){var W,G;if(typeof Z.type=="function"){for(W=Z.__k,G=0;W&&G<W.length;G++)W[G]&&(W[G].__=Z,Y=h0(W[G],Y,O));return Y}Z.__e!=Y&&(Y&&Z.type&&!Y.parentNode&&(Y=c(Z)),Y=O.insertBefore(Z.__e,Y||null));do Y=Y&&Y.nextSibling;while(Y!=null&&Y.nodeType==8);return Y}function V1(Z,Y,O,W){var G,Q,K,z=Z.key,N=Z.type,q=Y[O],$=q!=null&&(2&q.__u)==0;if(q===null&&z==null||$&&z==q.key&&N==q.type)return O;if(W>($?1:0)){for(G=O-1,Q=O+1;G>=0||Q<Y.length;)if((q=Y[K=G>=0?G--:Q++])!=null&&(2&q.__u)==0&&z==q.key&&N==q.type)return K}return-1}function I0(Z,Y,O){Y[0]=="-"?Z.setProperty(Y,O==null?"":O):Z[Y]=O==null?"":typeof O!="number"||$1.test(Y)?O:O+"px"}function n(Z,Y,O,W,G){var Q,K;Y:if(Y=="style")if(typeof O=="string")Z.style.cssText=O;else{if(typeof W=="string"&&(Z.style.cssText=W=""),W)for(Y in W)O&&Y in O||I0(Z.style,Y,"");if(O)for(Y in O)W&&O[Y]==W[Y]||I0(Z.style,Y,O[Y])}else if(Y[0]=="o"&&Y[1]=="n")Q=Y!=(Y=Y.replace(v0,"$1")),K=Y.toLowerCase(),Y=K in Z||Y=="onFocusOut"||Y=="onFocusIn"?K.slice(2):Y.slice(2),Z.l||(Z.l={}),Z.l[Y+Q]=O,O?W?O[s]=W[s]:(O[s]=J0,Z.addEventListener(Y,Q?V0:L0,Q)):Z.removeEventListener(Y,Q?V0:L0,Q);else{if(G=="http://www.w3.org/2000/svg")Y=Y.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(Y!="width"&&Y!="height"&&Y!="href"&&Y!="list"&&Y!="form"&&Y!="tabIndex"&&Y!="download"&&Y!="rowSpan"&&Y!="colSpan"&&Y!="role"&&Y!="popover"&&Y in Z)try{Z[Y]=O==null?"":O;break Y}catch(z){}typeof O=="function"||(O==null||O===!1&&Y[4]!="-"?Z.removeAttribute(Y):Z.setAttribute(Y,Y=="popover"&&O==1?"":O))}}function j0(Z){return function(Y){if(this.l){var O=this.l[Y.type+Z];if(Y[Y0]==null)Y[Y0]=J0++;else if(Y[Y0]<O[s])return;return O(U.event?U.event(Y):Y)}}}function P0(Z,Y,O,W,G,Q,K,z,N,q){var $,J,X,H,L,F,_,D,P,k,A,S,B,y,f,g,I=Y.type;if(Y.constructor!==void 0)return null;128&O.__u&&(N=!!(32&O.__u),Q=[z=Y.__e=O.__e]),($=U.__b)&&$(Y);Y:if(typeof I=="function"){J=K.length;try{if(P=Y.props,k=I.prototype&&I.prototype.render,A=($=I.contextType)&&W[$.__c],S=$?A?A.props.value:$.__:W,O.__c?D=(X=Y.__c=O.__c).__=X.__E:(k?Y.__c=X=new I(P,S):(Y.__c=X=new o(P,S),X.constructor=I,X.render=R1),A&&A.sub(X),X.state||(X.state={}),X.__n=W,H=X.__d=!0,X.__h=[],X._sb=[]),k&&X.__s==null&&(X.__s=X.state),k&&I.getDerivedStateFromProps!=null&&(X.__s==X.state&&(X.__s=h({},X.__s)),h(X.__s,I.getDerivedStateFromProps(P,X.__s))),L=X.props,F=X.state,X.__v=Y,H)k&&I.getDerivedStateFromProps==null&&X.componentWillMount!=null&&X.componentWillMount(),k&&X.componentDidMount!=null&&X.__h.push(X.componentDidMount);else{if(k&&I.getDerivedStateFromProps==null&&P!==L&&X.componentWillReceiveProps!=null&&X.componentWillReceiveProps(P,S),Y.__v==O.__v||!X.__e&&X.shouldComponentUpdate!=null&&X.shouldComponentUpdate(P,X.__s,S)===!1){Y.__v!=O.__v&&(X.props=P,X.state=X.__s,X.__d=!1),Y.__e=O.__e,Y.__k=O.__k,Y.__k.some(function(b){b&&(b.__=Y)}),Q0.push.apply(X.__h,X._sb),X._sb=[],X.__h.length&&K.push(X),z=c(O);break Y}X.componentWillUpdate!=null&&X.componentWillUpdate(P,X.__s,S),k&&X.componentDidUpdate!=null&&X.__h.push(function(){X.componentDidUpdate(L,F,_)})}if(X.context=S,X.props=P,X.__P=Z,X.__e=!1,B=U.__r,y=0,k)X.state=X.__s,X.__d=!1,B&&B(Y),$=X.render(X.props,X.state,X.context),Q0.push.apply(X.__h,X._sb),X._sb=[];else do X.__d=!1,B&&B(Y),$=X.render(X.props,X.state,X.context),X.state=X.__s;while(X.__d&&++y<25);X.state=X.__s,X.getChildContext!=null&&(W=h(h({},W),X.getChildContext())),k&&!H&&X.getSnapshotBeforeUpdate!=null&&(_=X.getSnapshotBeforeUpdate(L,F)),f=$!=null&&$.type===q0&&$.key==null?c0($.props.children):$,z=m0(Z,G0(f)?f:[f],Y,O,W,G,Q,K,z,N,q),X.base=Y.__e,Y.__u&=-161,X.__h.length&&K.push(X),D&&(X.__E=X.__=null)}catch(b){if(K.length=J,Y.__v=null,N||Q!=null){if(b.then){for(Y.__u|=N?160:128;z&&z.nodeType==8&&z.nextSibling;)z=z.nextSibling;Q!=null&&(Q[Q.indexOf(z)]=null),Y.__e=z}else if(Q!=null)for(g=Q.length;g--;)R0(Q[g])}else Y.__e=O.__e;Y.__k==null&&(Y.__k=O.__k||[]),b.then||d0(Y),U.__e(b,Y,O)}}else Q==null&&Y.__v==O.__v?(Y.__k=O.__k,Y.__e=O.__e):z=Y.__e=J1(O.__e,Y,O,W,G,Q,K,N,q);return($=U.diffed)&&$(Y),128&Y.__u?void 0:z}function d0(Z){Z&&(Z.__c&&(Z.__c.__e=!0),Z.__k&&Z.__k.some(d0))}function g0(Z,Y,O){for(var W=0;W<O.length;W++)T0(O[W],O[++W],O[++W]);U.__c&&U.__c(Y,Z),Z.some(function(G){try{Z=G.__h,G.__h=[],Z.some(function(Q){Q.call(G)})}catch(Q){U.__e(Q,G.__v)}})}function c0(Z){return typeof Z!="object"||Z==null||Z.__b>0?Z:G0(Z)?Z.map(c0):Z.constructor!==void 0?null:h({},Z)}function J1(Z,Y,O,W,G,Q,K,z,N){var q,$,J,X,H,L,F,_=O.props||O0,D=Y.props,P=Y.type;if(P=="svg"?G="http://www.w3.org/2000/svg":P=="math"?G="http://www.w3.org/1998/Math/MathML":G||(G="http://www.w3.org/1999/xhtml"),Q!=null){for(q=0;q<Q.length;q++)if((H=Q[q])&&"setAttribute"in H==!!P&&(P?H.localName==P:H.nodeType==3)){Z=H,Q[q]=null;break}}if(Z==null){if(P==null)return document.createTextNode(D);Z=document.createElementNS(G,P,D.is&&D),z&&(U.__m&&U.__m(Y,Q),z=!1),Q=null}if(P==null)_===D||z&&Z.data==D||(Z.data=D);else{if(Q=P=="textarea"&&D.defaultValue!=null?null:Q&&X0.call(Z.childNodes),!z&&Q!=null)for(_={},q=0;q<Z.attributes.length;q++)_[(H=Z.attributes[q]).name]=H.value;for(q in _)H=_[q],q=="dangerouslySetInnerHTML"?J=H:q=="children"||(q in D)||q=="value"&&("defaultValue"in D)||q=="checked"&&("defaultChecked"in D)||n(Z,q,null,H,G);for(q in D)H=D[q],q=="children"?X=H:q=="dangerouslySetInnerHTML"?$=H:q=="value"?L=H:q=="checked"?F=H:z&&typeof H!="function"||_[q]===H||n(Z,q,H,_[q],G);if($)z||J&&($.__html==J.__html||$.__html==Z.innerHTML)||(Z.innerHTML=$.__html),Y.__k=[];else if(J&&(Z.innerHTML=""),m0(Y.type=="template"?Z.content:Z,G0(X)?X:[X],Y,O,W,P=="foreignObject"?"http://www.w3.org/1999/xhtml":G,Q,K,Q?Q[0]:O.__k&&c(O,0),z,N),Q!=null)for(q=Q.length;q--;)R0(Q[q]);z&&P!="textarea"||(q="value",P=="progress"&&L==null?Z.removeAttribute("value"):L!=null&&(L!==Z[q]||P=="progress"&&!L||P=="option"&&L!=_[q])&&n(Z,q,L,_[q],G),q="checked",F!=null&&F!=Z[q]&&n(Z,q,F,_[q],G))}return Z}function T0(Z,Y,O){try{if(typeof Z=="function"){var W=typeof Z.__u=="function";W&&Z.__u(),W&&Y==null||(Z.__u=Z(Y))}else Z.current=Y}catch(G){U.__e(G,O)}}function p0(Z,Y,O){var W,G;if(U.unmount&&U.unmount(Z),(W=Z.ref)&&(W.current&&W.current!=Z.__e||T0(W,null,Y)),(W=Z.__c)!=null){if(W.componentWillUnmount)try{W.componentWillUnmount()}catch(Q){U.__e(Q,Y)}W.base=W.__P=W.__n=null}if(W=Z.__k)for(G=0;G<W.length;G++)W[G]&&p0(W[G],Y,O||typeof Z.type!="function");O||R0(Z.__e),Z.__c=Z.__=Z.__e=void 0}function R1(Z,Y,O){return this.constructor(Z,O)}function z0(Z,Y,O){var W,G,Q,K;Y==document&&(Y=document.documentElement),U.__&&U.__(Z,Y),G=(W=typeof O=="function")?null:O&&O.__k||Y.__k,Q=[],K=[],P0(Y,Z=(!W&&O||Y).__k=K0(q0,null,[Z]),G||O0,O0,Y.namespaceURI,!W&&O?[O]:G?null:Y.firstChild?X0.call(Y.childNodes):null,Q,!W&&O?O:G?G.__e:Y.firstChild,W,K),g0(Q,Z,K),Z.props.children=null}X0=Q0.slice,U={__e:function(Z,Y,O,W){for(var G,Q,K;Y=Y.__;)if((G=Y.__c)&&!G.__)try{if((Q=G.constructor)&&Q.getDerivedStateFromError!=null&&(G.setState(Q.getDerivedStateFromError(Z)),K=G.__d),G.componentDidCatch!=null&&(G.componentDidCatch(Z,W||{}),K=G.__d),K)return G.__E=G}catch(z){Z=z}throw Z}},A0=0,H1=function(Z){return Z!=null&&Z.constructor===void 0},o.prototype.setState=function(Z,Y){var O;O=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=h({},this.state),typeof Z=="function"&&(Z=Z(h({},O),this.props)),Z&&h(O,Z),Z!=null&&this.__v&&(Y&&this._sb.push(Y),x0(this))},o.prototype.forceUpdate=function(Z){this.__v&&(this.__e=!0,Z&&this.__h.push(Z),x0(this))},o.prototype.render=q0,d=[],S0=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b0=function(Z,Y){return Z.__v.__b-Y.__v.__b},W0.__r=0,B0=Math.random().toString(8),Y0="__d"+B0,s="__a"+B0,v0=/(PointerCapture)$|Capture$/i,J0=0,L0=j0(!1),V0=j0(!0),N1=0;var u,w,U0,a0,e=0,t0=[],C=U,i0=C.__b,o0=C.__r,r0=C.diffed,l0=C.__c,s0=C.unmount,u0=C.__;function _0(Z,Y){C.__h&&C.__h(w,Z,e||Y),e=0;var O=w.__H||(w.__H={__:[],__h:[]});return Z>=O.__.length&&O.__.push({}),O.__[Z]}function T(Z){return e=1,P1(Z1,Z)}function P1(Z,Y,O){var W=_0(u++,2);if(W.t=Z,!W.__c&&(W.__=[O?O(Y):Z1(void 0,Y),function(z){var N=W.__N?W.__N[0]:W.__[0],q=W.t(N,z);N!==q&&(W.__N=[q,W.__[1]],W.__c.setState({}))}],W.__c=w,!w.__f)){var G=function(z,N,q){if(!W.__c.__H)return!0;var $=!1,J=W.__c.props!==z;if(W.__c.__H.__.some(function(H){if(H.__N){$=!0;var L=H.__[0];H.__=H.__N,H.__N=void 0,L!==H.__[0]&&(J=!0)}}),Q){var X=Q.call(this,z,N,q);return $?X||J:X}return!$||J};w.__f=!0;var{shouldComponentUpdate:Q,componentWillUpdate:K}=w;w.componentWillUpdate=function(z,N,q){if(this.__e){var $=Q;Q=void 0,G(z,N,q),Q=$}K&&K.call(this,z,N,q)},w.shouldComponentUpdate=G}return W.__N||W.__}function p(Z,Y){var O=_0(u++,3);!C.__s&&Y1(O.__H,Y)&&(O.__=Z,O.u=Y,w.__H.__h.push(O))}function D0(Z){return e=5,n0(function(){return{current:Z}},[])}function n0(Z,Y){var O=_0(u++,7);return Y1(O.__H,Y)&&(O.__=Z(),O.__H=Y,O.__h=Z),O.__}function t(Z,Y){return e=8,n0(function(){return Z},Y)}function T1(){for(var Z;Z=t0.shift();){var Y=Z.__H;if(Z.__P&&Y)try{Y.__h.some(H0),Y.__h.some(F0),Y.__h=[]}catch(O){Y.__h=[],C.__e(O,Z.__v)}}}C.__b=function(Z){w=null,i0&&i0(Z)},C.__=function(Z,Y){Z&&Y.__k&&Y.__k.__m&&(Z.__m=Y.__k.__m),u0&&u0(Z,Y)},C.__r=function(Z){o0&&o0(Z),u=0;var Y=(w=Z.__c).__H;Y&&(U0===w?(Y.__h=[],w.__h=[],Y.__.some(function(O){O.__N&&(O.__=O.__N),O.u=O.__N=void 0})):(Y.__h.some(H0),Y.__h.some(F0),Y.__h=[],u=0)),U0=w},C.diffed=function(Z){r0&&r0(Z);var Y=Z.__c;Y&&Y.__H&&(Y.__H.__h.length&&(t0.push(Y)!==1&&a0===C.requestAnimationFrame||((a0=C.requestAnimationFrame)||U1)(T1)),Y.__H.__.some(function(O){O.u&&(O.__H=O.u,O.u=void 0)})),U0=w=null},C.__c=function(Z,Y){Y.some(function(O){try{O.__h.some(H0),O.__h=O.__h.filter(function(W){return!W.__||F0(W)})}catch(W){Y.some(function(G){G.__h&&(G.__h=[])}),Y=[],C.__e(W,O.__v)}}),l0&&l0(Z,Y)},C.unmount=function(Z){s0&&s0(Z);var Y,O=Z.__c;O&&O.__H&&(O.__H.__.some(function(W){try{H0(W)}catch(G){Y=G}}),O.__H=void 0,Y&&C.__e(Y,O.__v))};var e0=typeof requestAnimationFrame=="function";function U1(Z){var Y,O=function(){clearTimeout(W),e0&&cancelAnimationFrame(Y),setTimeout(Z)},W=setTimeout(O,35);e0&&(Y=requestAnimationFrame(O))}function H0(Z){var Y=w,O=Z.__c;typeof O=="function"&&(Z.__c=void 0,O()),w=Y}function F0(Z){var Y=w;Z.__c=Z.__(),w=Y}function Y1(Z,Y){return!Z||Z.length!==Y.length||Y.some(function(O,W){return O!==Z[W]})}function Z1(Z,Y){return typeof Y=="function"?Y(Z):Y}var Q1=function(Z,Y,O,W){var G;Y[0]=0;for(var Q=1;Q<Y.length;Q++){var K=Y[Q++],z=Y[Q]?(Y[0]|=K?1:2,O[Y[Q++]]):Y[++Q];K===3?W[0]=z:K===4?W[1]=Object.assign(W[1]||{},z):K===5?(W[1]=W[1]||{})[Y[++Q]]=z:K===6?W[1][Y[++Q]]+=z+"":K?(G=Z.apply(z,Q1(Z,z,O,["",null])),W.push(G),z[0]?Y[0]|=2:(Y[Q-2]=0,Y[Q]=G)):W.push(z)}return W},O1=new Map;function M0(Z){var Y=O1.get(this);return Y||(Y=new Map,O1.set(this,Y)),(Y=Q1(this,Y.get(Z)||(Y.set(Z,Y=function(O){for(var W,G,Q=1,K="",z="",N=[0],q=function(X){Q===1&&(X||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?N.push(0,X,K):Q===3&&(X||K)?(N.push(3,X,K),Q=2):Q===2&&K==="..."&&X?N.push(4,X,0):Q===2&&K&&!X?N.push(5,0,!0,K):Q>=5&&((K||!X&&Q===5)&&(N.push(Q,0,K,G),Q=6),X&&(N.push(Q,X,0,G),Q=6)),K=""},$=0;$<O.length;$++){$&&(Q===1&&q(),q($));for(var J=0;J<O[$].length;J++)W=O[$][J],Q===1?W==="<"?(q(),N=[N],Q=3):K+=W:Q===4?K==="--"&&W===">"?(Q=1,K=""):K=W+K[0]:z?W===z?z="":K+=W:W==='"'||W==="'"?z=W:W===">"?(q(),Q=1):Q&&(W==="="?(Q=5,G=K,K=""):W==="/"&&(Q<5||O[$][J+1]===">")?(q(),Q===3&&(N=N[0]),Q=N,(N=N[0]).push(2,0,Q),Q=0):W===" "||W==="\t"||W===`
`||W==="\r"?(q(),Q=2):K+=W),Q===3&&K==="!--"&&(Q=4,N=N[0])}return q(),N}(Z)),Y),arguments,[])).length>1?Y:Y[0]}var R=M0.bind(K0);async function E(Z,Y){let O=await fetch(`/api${Z}`,{credentials:"same-origin",headers:{"Content-Type":"application/json",...Y?.headers??{}},...Y});if(!O.ok){let W=await O.json().catch(()=>({error:O.statusText}));throw Error(W.error||`HTTP ${O.status}`)}return O.json()}function F1(){let[Z,Y]=T([]),[O,W]=T(null),[G,Q]=T("list"),[K,z]=T(null),[N,q]=T(!0),$=t(async()=>{try{let H=await E("/agents");Y(H.agents||[])}catch(H){console.error("Failed to load agents:",H)}},[]),J=t(async(H)=>{if(!confirm(`Remove "${H.name}"? This deletes its conversation history too.`))return;try{await E(`/agents/${H.id}`,{method:"DELETE"}),W((L)=>{if(L?.id===H.id)return Q("list"),null;return L}),await $()}catch(L){alert(`Failed to remove agent: ${L.message}`)}},[$]);p(()=>{(async()=>{try{let H=await E("/auth/me");z(H.user)}catch{}await $(),q(!1)})()},[]);let X=(H)=>({style:{...H?Object.fromEntries(H.split(";").filter(Boolean).map((L)=>{let[F,_]=L.trim().split(":");return[F.replace(/-([a-z])/g,(D,P)=>P.toUpperCase()),_.trim()]})):{}}});if(N)return R`<div style=${{padding:"2rem",color:"var(--text-dim)"}}>Loading…</div>`;return R`
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
          ${Z.map((H)=>R`
            <div
              key=${H.id}
              onClick=${()=>{W(H),Q("chat")}}
              style=${{width:"100%",textAlign:"left",padding:"0.75rem",marginBottom:"0.25rem",borderRadius:"var(--radius)",border:"1px solid transparent",background:O?.id===H.id?"var(--bg-hover)":"transparent",color:"var(--text)",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.5rem"}}
            >
              ${H.icon_url?R`<img src=${H.icon_url} style=${{width:"1.5rem",height:"1.5rem",borderRadius:"50%"}} />`:R`<span style=${{fontSize:"1.25rem"}}>🤖</span>`}
              <div style=${{flex:1,minWidth:0}}>
                <div style=${{fontSize:"0.85rem",fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                  ${H.name}
                </div>
                <div style=${{fontSize:"0.7rem",marginTop:"0.15rem",color:H.auth_state==="connected"?"var(--success)":"var(--warning)"}}>
                  ${H.auth_state==="connected"?"● Connected":"○ Needs auth"}
                </div>
              </div>
              <button
                onClick=${(L)=>{L.stopPropagation(),J(H)}}
                title="Remove agent"
                style=${{background:"transparent",border:"none",color:"var(--text-dim)",cursor:"pointer",fontSize:"0.9rem",padding:"0.25rem",lineHeight:1,flexShrink:0,borderRadius:"var(--radius)"}}
              >
                🗑
              </button>
            </div>
          `)}
        </div>

        <div style=${{padding:"0.75rem",borderTop:"1px solid var(--border)"}}>
          ${K?R`<div style=${{fontSize:"0.75rem",color:"var(--text-dim)"}}>
              Signed in as ${K.name||K.email||K.sub}
              <br/><a href="/api/auth/logout" style=${{color:"var(--accent)"}}>Log out</a>
            </div>`:R`<div style=${{fontSize:"0.75rem",color:"var(--text-dim)"}}>
              <a href="/api/auth/login" style=${{color:"var(--accent)"}}>Sign in with Pocket ID</a>
            </div>`}
        </div>
      </aside>

      ${""}
      <main style=${{flex:1,overflow:"hidden",display:"flex",flexDirection:"column"}}>
        ${G==="add"&&R`<${w1} onAdded=${(H)=>{$(),W(H),Q("chat")}} />`}
        ${G==="chat"&&O&&R`<${C1} agent=${O} onRefresh=${$} onDelete=${()=>J(O)} />`}
        ${G==="jobs"&&R`<${M1} agents=${Z} />`}
        ${G==="list"&&R`<${_1} />`}
      </main>
    </div>
  `}function _1(){return R`
    <div style=${{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"var(--text-dim)"}}>
      <div style=${{fontSize:"3rem",marginBottom:"1rem"}}>🎵</div>
      <p style=${{fontSize:"1rem"}}>Select an agent or add a new one to get started</p>
      <p style=${{fontSize:"0.8rem",marginTop:"0.5rem",color:"var(--text-dimmer)"}}>
        Orchestral connects to A2A agents via OIDC and lets you message them
      </p>
    </div>
  `}var D1={queued:"Queued",provisioning:"Provisioning container…",cloning:"Cloning repo…",running:"Bot is working…",patching:"Applying patch…",opening_pr:"Opening PR…",done:"Done",failed:"Failed"};function M1({agents:Z}){let[Y,O]=T(null),[W,G]=T([]),[Q,K]=T([]),[z,N]=T(""),[q,$]=T(""),[J,X]=T(""),[H,L]=T(!1),[F,_]=T(""),[D,P]=T(null),k=(Z||[]).filter((B)=>B.auth_state==="connected"),A=t(async()=>{try{let B=await E("/jobs");K(B.jobs||[])}catch(B){console.error("Failed to load jobs:",B)}},[]);p(()=>{(async()=>{try{let B=await E("/github/status");if(O(B),B.connected){let y=await E("/github/repos");G(y.repos||[])}}catch(B){_(B.message)}await A()})()},[]),p(()=>{if(!Q.some((f)=>!["done","failed"].includes(f.status)))return;let y=setInterval(A,3000);return()=>clearInterval(y)},[Q,A]);async function S(B){if(B?.preventDefault(),!z||!q||!J.trim()||H)return;L(!0),_("");try{let y=await E("/jobs",{method:"POST",body:JSON.stringify({agent_id:z,repo:q,instruction:J.trim()})});K((f)=>[y.job,...f]),X("")}catch(y){_(y.message)}finally{L(!1)}}return R`
    <div style=${{maxWidth:"760px",margin:"0 auto",padding:"2rem",overflowY:"auto",flex:1}}>
      <h2 style=${{fontSize:"1.25rem",fontWeight:700,marginBottom:"0.25rem"}}>🚀 Jobs</h2>
      <p style=${{fontSize:"0.8rem",color:"var(--text-dim)",marginBottom:"1.5rem"}}>
        Pick a repo and a bot, describe what to do, and orchestral spins up a fresh container,
        asks the bot for a patch, and opens a pull request.
      </p>

      ${!Y?.configured&&R`
        <div style=${{padding:"0.9rem",background:"rgba(245,158,11,0.1)",border:"1px solid var(--warning)",borderRadius:"var(--radius)",fontSize:"0.85rem",marginBottom:"1.5rem"}}>
          GitHub isn't configured on the server yet. Set <code>GITHUB_CLIENT_ID</code> / <code>GITHUB_CLIENT_SECRET</code>
          from a GitHub OAuth App (callback: <code>/api/github/callback</code>) to enable jobs.
        </div>
      `}

      ${Y?.configured&&!Y?.connected&&R`
        <div style=${{padding:"0.9rem",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:"var(--radius)",marginBottom:"1.5rem"}}>
          <p style=${{fontSize:"0.85rem",marginBottom:"0.75rem"}}>Connect GitHub to pick a repo and open PRs.</p>
          <a href="/api/github/login" style=${{display:"inline-block",padding:"0.5rem 1rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",textDecoration:"none",fontWeight:600,fontSize:"0.85rem"}}>
            🔗 Connect GitHub
          </a>
        </div>
      `}

      ${Y?.connected&&R`
        <div style=${{fontSize:"0.8rem",color:"var(--success)",marginBottom:"1rem"}}>
          ● Connected to GitHub as ${Y.login}
        </div>

        <form onSubmit=${S} style=${{display:"flex",flexDirection:"column",gap:"1rem",marginBottom:"2rem"}}>
          <div>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>Repository</label>
            <select value=${q} onChange=${(B)=>$(B.target.value)} style=${{...a}}>
              <option value="">Select a repo…</option>
              ${W.map((B)=>R`<option key=${B.full_name} value=${B.full_name}>${B.full_name}${B.private?" \uD83D\uDD12":""}</option>`)}
            </select>
          </div>

          <div>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>Bot</label>
            <select value=${z} onChange=${(B)=>N(B.target.value)} style=${{...a}}>
              <option value="">Select a bot…</option>
              ${k.map((B)=>R`<option key=${B.id} value=${B.id}>${B.name}</option>`)}
            </select>
            ${k.length===0&&R`<p style=${{fontSize:"0.7rem",color:"var(--text-dimmer)",marginTop:"0.3rem"}}>No connected bots yet — add one first.</p>`}
          </div>

          <div>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>Command</label>
            <textarea
              value=${J}
              onInput=${(B)=>X(B.target.value)}
              placeholder="e.g. Fix the off-by-one error in the pagination helper"
              rows="3"
              style=${{...a,resize:"vertical",fontFamily:"inherit"}}
            />
          </div>

          ${F&&R`<div style=${{color:"var(--danger)",fontSize:"0.8rem"}}>${F}</div>`}

          <button type="submit" disabled=${!z||!q||!J.trim()||H} style=${{alignSelf:"flex-start",padding:"0.6rem 1.5rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",opacity:!z||!q||!J.trim()||H?0.5:1}}>
            ${H?"Starting…":"▶ Run Job"}
          </button>
        </form>
      `}

      <h3 style=${{fontSize:"0.95rem",fontWeight:700,marginBottom:"0.75rem"}}>Recent jobs</h3>
      ${Q.length===0&&R`<p style=${{fontSize:"0.8rem",color:"var(--text-dimmer)"}}>No jobs yet.</p>`}
      <div style=${{display:"flex",flexDirection:"column",gap:"0.5rem"}}>
        ${Q.map((B)=>R`
          <div key=${B.id} style=${{border:"1px solid var(--border)",borderRadius:"var(--radius)",padding:"0.75rem 1rem",background:"var(--bg-card)"}}>
            <div style=${{display:"flex",alignItems:"center",gap:"0.6rem",cursor:"pointer"}}
                 onClick=${()=>P(D===B.id?null:B.id)}>
              <span style=${{fontSize:"0.7rem",fontWeight:700,padding:"0.15rem 0.5rem",borderRadius:"999px",background:B.status==="done"?"rgba(34,197,94,0.15)":B.status==="failed"?"rgba(239,68,68,0.15)":"rgba(99,102,241,0.15)",color:B.status==="done"?"var(--success)":B.status==="failed"?"var(--danger)":"var(--accent)"}}>
                ${D1[B.status]||B.status}
              </span>
              <span style=${{fontSize:"0.85rem",fontWeight:600,flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                ${B.repo}: ${B.instruction}
              </span>
              ${B.pr_url&&R`
                <a href=${B.pr_url} target="_blank" onClick=${(y)=>y.stopPropagation()} style=${{fontSize:"0.75rem",color:"var(--accent)"}}>
                  View PR →
                </a>
              `}
            </div>
            ${D===B.id&&R`
              <pre style=${{marginTop:"0.75rem",padding:"0.75rem",background:"var(--bg)",borderRadius:"8px",fontSize:"0.7rem",color:"var(--text-dim)",whiteSpace:"pre-wrap",maxHeight:"300px",overflowY:"auto"}}>${B.log||"(no log yet)"}${B.error?`

Error: ${B.error}`:""}</pre>
            `}
          </div>
        `)}
      </div>
    </div>
  `}function w1({onAdded:Z}){let[Y,O]=T(""),[W,G]=T(""),[Q,K]=T(""),[z,N]=T(""),[q,$]=T(!1),[J,X]=T(null);async function H(){N(""),X(null),$(!0);try{let L=await E("/agents",{method:"POST",body:JSON.stringify({card_url:Y,oidc_client_id:W,oidc_client_secret:Q})});Z(L.agent)}catch(L){N(L.message)}finally{$(!1)}}return R`
    <div style=${{maxWidth:"640px",margin:"0 auto",padding:"2rem",overflowY:"auto",flex:1}}>
      <h2 style=${{fontSize:"1.25rem",fontWeight:700,marginBottom:"1.5rem"}}>Add A2A Agent</h2>

      <div style=${{marginBottom:"1.5rem"}}>
        <label style=${{display:"block",fontSize:"0.85rem",color:"var(--text-dim)",marginBottom:"0.4rem"}}>
          Agent Card URL
        </label>
        <input
          type="text"
          value=${Y}
          onInput=${(L)=>O(L.target.value)}
          placeholder="https://agent.example.com"
          style=${a}
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
          <input type="text" value=${W} onInput=${(L)=>G(L.target.value)} style=${a} />
        </div>
      </details>

      ${z&&R`<div style=${{padding:"0.75rem",background:"rgba(239,68,68,0.1)",border:"1px solid var(--danger)",borderRadius:"var(--radius)",color:"var(--danger)",fontSize:"0.85rem",marginBottom:"1rem"}}>
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
  `}function C1({agent:Z,onRefresh:Y,onDelete:O}){let[W,G]=T([]),[Q,K]=T(""),[z,N]=T(!1),[q,$]=T(null),[J,X]=T([]),[H,L]=T(""),[F,_]=T(Z),D=D0(null),P=D0(null);p(()=>{E(`/agents/${Z.id}`).then((V)=>_(V)).catch(()=>{})},[Z.id]);let k=t(async(V)=>{$(V);let M=await E(`/conversations/${V}/messages`);G(M.messages||[])},[]);p(()=>{(async()=>{try{let M=(await E(`/agents/${Z.id}/conversations`)).conversations||[];if(X(M),M.length>0)await k(M[0].id);else{let x=await E(`/agents/${Z.id}/conversations`,{method:"POST"});X([x.conversation]),$(x.conversation.id),G([])}}catch(V){L(V.message)}})()},[Z.id]);async function A(){L("");try{let V=await E(`/agents/${Z.id}/conversations`,{method:"POST"});X((M)=>[V.conversation,...M]),$(V.conversation.id),G([]),K("")}catch(V){L(V.message)}}async function S(V){if(V===q)return;L("");try{await k(V)}catch(M){L(M.message)}}p(()=>{D.current?.scrollIntoView({behavior:"smooth"})},[W]);async function B(V){if(V?.preventDefault(),!Q.trim()||!q||z)return;let M=Q.trim();K(""),N(!0),L(""),G((x)=>[...x,{role:"user",text:M,created_at:Date.now()/1000,id:"temp-"+Date.now()}]),G((x)=>[...x,{role:"agent",text:"",created_at:Date.now()/1000,id:"temp-agent-"+Date.now(),streaming:!0}]);try{if(F?.agent_card?.capabilities?.streaming??!0)await y(M);else await f(M)}catch(x){if(L(x.message),x.message.includes("Authentication"))Y();G((N0)=>N0.filter((r)=>!r.streaming))}finally{N(!1)}}async function y(V){let M=await fetch(`/api/conversations/${q}/stream`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:V}),credentials:"same-origin"});if(!M.ok){let l=await M.json().catch(()=>({error:M.statusText}));throw Error(l.error||`HTTP ${M.status}`)}let x=M.body.getReader(),N0=new TextDecoder,r="",C0="";while(!0){let{done:l,value:q1}=await x.read();if(l)break;r+=N0.decode(q1,{stream:!0});let E0=r.split(`

`);r=E0.pop()||"";for(let z1 of E0)for(let k0 of z1.split(`
`))if(k0.startsWith("data: "))try{let j=JSON.parse(k0.slice(6));if(j.error)throw Error(j.error);let i="";if(j.task?.status?.message?.parts)i=j.task.status.message.parts.map((m)=>m.text||"").join("");else if(j.message?.parts)i=j.message.parts.map((m)=>m.text||"").join("");else if(j.artifactUpdate?.artifact?.parts)i=j.artifactUpdate.artifact.parts.map((m)=>m.text||"").join("");else if(j.statusUpdate?.status?.message?.parts)i=j.statusUpdate.status.message.parts.map((m)=>m.text||"").join("");if(i)C0+=i,G((m)=>m.map(($0)=>$0.streaming?{...$0,text:C0}:$0))}catch(j){if(j.message)throw j}}if(q){let l=await E(`/conversations/${q}/messages`);G(l.messages||[])}}async function f(V){let M=await E(`/conversations/${q}/send`,{method:"POST",body:JSON.stringify({text:V})}),x=await E(`/conversations/${q}/messages`);G(x.messages||[])}let[g,I]=T(!1),[b,W1]=T(""),[w0,X1]=T("");async function G1(){I(!0),L("");try{await E(`/agents/${Z.id}/credentials`,{method:"POST",body:JSON.stringify({client_id:b,client_secret:w0})}),window.location.href=`/api/agents/${Z.id}/connect`}catch(V){L(V.message)}finally{I(!1)}}let v=F?.auth_state!=="connected",K1=typeof window<"u"?`${window.location.origin}/api/agent/oidc/callback`:"";return R`
    <div style=${{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
      ${""}
      <header style=${{padding:"1rem 1.5rem",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",gap:"0.75rem"}}>
        ${F?.icon_url?R`<img src=${F.icon_url} style=${{width:"2rem",height:"2rem",borderRadius:"50%"}} />`:R`<span style=${{fontSize:"1.5rem"}}>🤖</span>`}
        <div style=${{flex:1}}>
          <h2 style=${{fontSize:"1rem",fontWeight:600}}>${F?.name||Z.name}</h2>
          ${F?.description&&R`<p style=${{fontSize:"0.75rem",color:"var(--text-dim)"}}>${F.description}</p>`}
        </div>
        ${J.length>1&&R`
          <select
            value=${q}
            onChange=${(V)=>S(V.target.value)}
            style=${{padding:"0.4rem 0.6rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:"0.75rem",outline:"none"}}
          >
            ${J.map((V,M)=>R`
              <option key=${V.id} value=${V.id}>
                ${new Date(V.created_at*1000).toLocaleString()} ${M===0?"(latest)":""}
              </option>
            `)}
          </select>
        `}
        <button
          onClick=${A}
          title="Start a new conversation with this agent"
          style=${{padding:"0.4rem 0.75rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",cursor:"pointer",fontWeight:600,fontSize:"0.75rem"}}
        >
          + New Conversation
        </button>
        <div style=${{padding:"0.25rem 0.6rem",borderRadius:"999px",fontSize:"0.75rem",fontWeight:600,background:v?"rgba(245,158,11,0.1)":"rgba(34,197,94,0.1)",color:v?"var(--warning)":"var(--success)",border:`1px solid ${v?"var(--warning)":"var(--success)"}`}}>
          ${v?"Needs Auth":"Connected"}
        </div>
        <button
          onClick=${O}
          title="Remove this agent"
          style=${{padding:"0.4rem 0.75rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text-dim)",cursor:"pointer",fontWeight:600,fontSize:"0.75rem"}}
        >
          🗑 Remove
        </button>
      </header>

      ${v&&R`
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
              value=${b}
              onInput=${(V)=>W1(V.target.value)}
              placeholder="Pocket ID client ID"
              style=${{...a,width:"100%"}}
            />
          </div>
          <div style=${{marginBottom:"0.75rem"}}>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>
              Client Secret
            </label>
            <input
              type="password"
              value=${w0}
              onInput=${(V)=>X1(V.target.value)}
              placeholder="Pocket ID client secret"
              style=${{...a,width:"100%"}}
            />
          </div>
          <div style=${{padding:"0.6rem",background:"var(--bg)",borderRadius:"8px",marginBottom:"1rem",fontSize:"0.75rem",color:"var(--text-dim)"}}>
            <strong style=${{color:"var(--warning)"}}>One-time setup:</strong> Add this redirect URI to this client in Pocket ID:
            <br/>
            <code style=${{color:"var(--accent)",fontSize:"0.7rem",wordBreak:"break-all"}}>${K1}</code>
            <br/>
            <a href="https://id.openbao.boxd.sh/settings/admin/oidc-clients" target="_blank" style=${{color:"var(--accent)",fontSize:"0.7rem"}}>
              → Pocket ID admin
            </a>
          </div>
          <button onClick=${G1} disabled=${!b||g} style=${{padding:"0.6rem 1.5rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",opacity:!b||g?0.5:1}}>
            ${g?"Redirecting…":"\uD83D\uDD11 Connect"}
          </button>
        </div>
      `}

      ${""}
      <div style=${{flex:1,overflowY:"auto",padding:"1.5rem"}}>
        <div style=${{maxWidth:"720px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"0.75rem"}}>
          ${W.length===0&&!v&&R`
            <div style=${{textAlign:"center",padding:"3rem",color:"var(--text-dimmer)"}}>
              <p style=${{fontSize:"0.9rem"}}>Send a message to start talking to this agent via A2A</p>
            </div>
          `}
          ${W.map((V)=>R`
            <div key=${V.id} style=${{maxWidth:"85%",alignSelf:V.role==="user"?"flex-end":"flex-start",padding:"0.6rem 0.9rem",borderRadius:"var(--radius)",fontSize:"0.875rem",lineHeight:1.5,background:V.role==="user"?"var(--accent)":"var(--bg-card)",color:V.role==="user"?"white":"var(--text)",whiteSpace:"pre-wrap"}}>
              ${V.text||(V.streaming?"…":"")}
            </div>
          `)}
          <div ref=${D} />
        </div>
      </div>

      ${H&&R`
        <div style=${{padding:"0.5rem 1.5rem",color:"var(--danger)",fontSize:"0.8rem"}}>
          ${H}
        </div>
      `}

      ${""}
      <footer style=${{borderTop:"1px solid var(--border)",padding:"1rem 1.5rem"}}>
        <form onSubmit=${B} style=${{maxWidth:"720px",margin:"0 auto",display:"flex",gap:"0.5rem"}}>
          <input
            type="text"
            value=${Q}
            onInput=${(V)=>K(V.target.value)}
            placeholder=${v?"Connect to start messaging…":"Send a message…"}
            disabled=${v||z}
            style=${{flex:1,padding:"0.6rem 0.9rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:"0.875rem",outline:"none",opacity:v||z?0.5:1}}
          />
          <button type="submit" disabled=${v||z||!Q.trim()} style=${{padding:"0.6rem 1.2rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.85rem",opacity:v||z||!Q.trim()?0.5:1}}>
            ${z?"…":"Send"}
          </button>
        </form>
      </footer>
    </div>
  `}var a={width:"100%",padding:"0.6rem 0.9rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:"0.875rem",outline:"none"};z0(R`<${F1} />`,document.getElementById("root"));
