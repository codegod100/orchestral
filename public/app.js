var z0,M,d0,P1,p,b0,h0,g0,F0,W0,t,c0,M0,T0,_0,U1,G0={},K0=[],F1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,H0=Array.isArray;function g(Z,Y){for(var O in Y)Z[O]=Y[O];return Z}function D0(Z){Z&&Z.parentNode&&Z.parentNode.removeChild(Z)}function N0(Z,Y,O){var W,G,Q,K={};for(Q in Y)Q=="key"?W=Y[Q]:Q=="ref"?G=Y[Q]:K[Q]=Y[Q];if(arguments.length>2&&(K.children=arguments.length>3?z0.call(arguments,2):O),typeof Z=="function"&&Z.defaultProps!=null)for(Q in Z.defaultProps)K[Q]===void 0&&(K[Q]=Z.defaultProps[Q]);return X0(Z,K,W,G,null)}function X0(Z,Y,O,W,G){var Q={type:Z,props:Y,key:O,ref:W,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:G==null?++d0:G,__i:-1,__u:0};return G==null&&M.vnode!=null&&M.vnode(Q),Q}function $0(Z){return Z.children}function s(Z,Y){this.props=Z,this.context=Y}function o(Z,Y){if(Y==null)return Z.__?o(Z.__,Z.__i+1):null;for(var O;Y<Z.__k.length;Y++)if((O=Z.__k[Y])!=null&&O.__e!=null)return O.__e;return typeof Z.type=="function"?o(Z):null}function T1(Z){if(Z.__P&&Z.__d){var Y=Z.__v,O=Y.__e,W=[],G=[],Q=g({},Y);Q.__v=Y.__v+1,M.vnode&&M.vnode(Q),w0(Z.__P,Q,Y,Z.__n,Z.__P.namespaceURI,32&Y.__u?[O]:null,W,O==null?o(Y):O,!!(32&Y.__u),G),Q.__v=Y.__v,Q.__.__k[Q.__i]=Q,o0(W,Q,G),Y.__e=Y.__=null,Q.__e!=O&&p0(Q)}}function p0(Z){if((Z=Z.__)!=null&&Z.__c!=null)return Z.__e=Z.__c.base=null,Z.__k.some(function(Y){if(Y!=null&&Y.__e!=null)return Z.__e=Z.__c.base=Y.__e}),p0(Z)}function v0(Z){(!Z.__d&&(Z.__d=!0)&&p.push(Z)&&!q0.__r++||b0!=M.debounceRendering)&&((b0=M.debounceRendering)||h0)(q0)}function q0(){try{for(var Z,Y=1;p.length;)p.length>Y&&p.sort(g0),Z=p.shift(),Y=p.length,T1(Z)}finally{p.length=q0.__r=0}}function a0(Z,Y,O,W,G,Q,K,z,N,q,$){var U,X,H,V,P,w,D=W&&W.__k||K0,F=Y.length;for(N=_1(O,Y,D,N,F),U=0;U<F;U++)(H=O.__k[U])!=null&&(X=H.__i!=-1&&D[H.__i]||G0,H.__i=U,w=w0(Z,H,X,G,Q,K,z,N,q,$),V=H.__e,H.ref&&X.ref!=H.ref&&(X.ref&&R0(X.ref,null,H),$.push(H.ref,H.__c||V,H)),P==null&&V!=null&&(P=V),4&H.__u?(N=r0(H,N,Z),X.__e&&(X.__e=null)):typeof H.type=="function"&&w!==void 0?N=w:V&&(N=V.nextSibling),H.__u&=-7);return O.__e=P,N}function _1(Z,Y,O,W,G){var Q,K,z,N,q,$=O.length,U=$,X=0;for(Z.__k=Array(G),Q=0;Q<G;Q++)(K=Y[Q])!=null&&typeof K!="boolean"&&typeof K!="function"?(typeof K=="string"||typeof K=="number"||typeof K=="bigint"||K.constructor==String?K=Z.__k[Q]=X0(null,K,null,null,null):H0(K)?K=Z.__k[Q]=X0($0,{children:K},null,null,null):K.constructor===void 0&&K.__b>0?K=Z.__k[Q]=X0(K.type,K.props,K.key,K.ref?K.ref:null,K.__v):Z.__k[Q]=K,N=Q+X,K.__=Z,K.__b=Z.__b+1,z=null,(q=K.__i=M1(K,O,N,U))!=-1&&(U--,(z=O[q])&&(z.__u|=2)),z==null||z.__v==null?(q==-1&&(G>$?X--:G<$&&X++),typeof K.type!="function"&&(K.__u|=4)):q!=N&&(q==N-1?X--:q==N+1?X++:(q>N?X--:X++,K.__u|=4))):Z.__k[Q]=null;if(U)for(Q=0;Q<$;Q++)(z=O[Q])!=null&&(2&z.__u)==0&&(z.__e==W&&(W=o(z)),l0(z,z));return W}function r0(Z,Y,O){var W,G;if(typeof Z.type=="function"){for(W=Z.__k,G=0;W&&G<W.length;G++)W[G]&&(W[G].__=Z,Y=r0(W[G],Y,O));return Y}Z.__e!=Y&&(Y&&Z.type&&!Y.parentNode&&(Y=o(Z)),Y=O.insertBefore(Z.__e,Y||null));do Y=Y&&Y.nextSibling;while(Y!=null&&Y.nodeType==8);return Y}function M1(Z,Y,O,W){var G,Q,K,z=Z.key,N=Z.type,q=Y[O],$=q!=null&&(2&q.__u)==0;if(q===null&&z==null||$&&z==q.key&&N==q.type)return O;if(W>($?1:0)){for(G=O-1,Q=O+1;G>=0||Q<Y.length;)if((q=Y[K=G>=0?G--:Q++])!=null&&(2&q.__u)==0&&z==q.key&&N==q.type)return K}return-1}function m0(Z,Y,O){Y[0]=="-"?Z.setProperty(Y,O==null?"":O):Z[Y]=O==null?"":typeof O!="number"||F1.test(Y)?O:O+"px"}function Q0(Z,Y,O,W,G){var Q,K;Y:if(Y=="style")if(typeof O=="string")Z.style.cssText=O;else{if(typeof W=="string"&&(Z.style.cssText=W=""),W)for(Y in W)O&&Y in O||m0(Z.style,Y,"");if(O)for(Y in O)W&&O[Y]==W[Y]||m0(Z.style,Y,O[Y])}else if(Y[0]=="o"&&Y[1]=="n")Q=Y!=(Y=Y.replace(c0,"$1")),K=Y.toLowerCase(),Y=K in Z||Y=="onFocusOut"||Y=="onFocusIn"?K.slice(2):Y.slice(2),Z.l||(Z.l={}),Z.l[Y+Q]=O,O?W?O[t]=W[t]:(O[t]=M0,Z.addEventListener(Y,Q?_0:T0,Q)):Z.removeEventListener(Y,Q?_0:T0,Q);else{if(G=="http://www.w3.org/2000/svg")Y=Y.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(Y!="width"&&Y!="height"&&Y!="href"&&Y!="list"&&Y!="form"&&Y!="tabIndex"&&Y!="download"&&Y!="rowSpan"&&Y!="colSpan"&&Y!="role"&&Y!="popover"&&Y in Z)try{Z[Y]=O==null?"":O;break Y}catch(z){}typeof O=="function"||(O==null||O===!1&&Y[4]!="-"?Z.removeAttribute(Y):Z.setAttribute(Y,Y=="popover"&&O==1?"":O))}}function f0(Z){return function(Y){if(this.l){var O=this.l[Y.type+Z];if(Y[W0]==null)Y[W0]=M0++;else if(Y[W0]<O[t])return;return O(M.event?M.event(Y):Y)}}}function w0(Z,Y,O,W,G,Q,K,z,N,q){var $,U,X,H,V,P,w,D,F,x,m,v,R,f,c,B,E=Y.type;if(Y.constructor!==void 0)return null;128&O.__u&&(N=!!(32&O.__u),Q=[z=Y.__e=O.__e]),($=M.__b)&&$(Y);Y:if(typeof E=="function"){U=K.length;try{if(F=Y.props,x=E.prototype&&E.prototype.render,m=($=E.contextType)&&W[$.__c],v=$?m?m.props.value:$.__:W,O.__c?D=(X=Y.__c=O.__c).__=X.__E:(x?Y.__c=X=new E(F,v):(Y.__c=X=new s(F,v),X.constructor=E,X.render=w1),m&&m.sub(X),X.state||(X.state={}),X.__n=W,H=X.__d=!0,X.__h=[],X._sb=[]),x&&X.__s==null&&(X.__s=X.state),x&&E.getDerivedStateFromProps!=null&&(X.__s==X.state&&(X.__s=g({},X.__s)),g(X.__s,E.getDerivedStateFromProps(F,X.__s))),V=X.props,P=X.state,X.__v=Y,H)x&&E.getDerivedStateFromProps==null&&X.componentWillMount!=null&&X.componentWillMount(),x&&X.componentDidMount!=null&&X.__h.push(X.componentDidMount);else{if(x&&E.getDerivedStateFromProps==null&&F!==V&&X.componentWillReceiveProps!=null&&X.componentWillReceiveProps(F,v),Y.__v==O.__v||!X.__e&&X.shouldComponentUpdate!=null&&X.shouldComponentUpdate(F,X.__s,v)===!1){Y.__v!=O.__v&&(X.props=F,X.state=X.__s,X.__d=!1),Y.__e=O.__e,Y.__k=O.__k,Y.__k.some(function(S){S&&(S.__=Y)}),K0.push.apply(X.__h,X._sb),X._sb=[],X.__h.length&&K.push(X),z=o(O);break Y}X.componentWillUpdate!=null&&X.componentWillUpdate(F,X.__s,v),x&&X.componentDidUpdate!=null&&X.__h.push(function(){X.componentDidUpdate(V,P,w)})}if(X.context=v,X.props=F,X.__P=Z,X.__e=!1,R=M.__r,f=0,x)X.state=X.__s,X.__d=!1,R&&R(Y),$=X.render(X.props,X.state,X.context),K0.push.apply(X.__h,X._sb),X._sb=[];else do X.__d=!1,R&&R(Y),$=X.render(X.props,X.state,X.context),X.state=X.__s;while(X.__d&&++f<25);X.state=X.__s,X.getChildContext!=null&&(W=g(g({},W),X.getChildContext())),x&&!H&&X.getSnapshotBeforeUpdate!=null&&(w=X.getSnapshotBeforeUpdate(V,P)),c=$!=null&&$.type===$0&&$.key==null?s0($.props.children):$,z=a0(Z,H0(c)?c:[c],Y,O,W,G,Q,K,z,N,q),X.base=Y.__e,Y.__u&=-161,X.__h.length&&K.push(X),D&&(X.__E=X.__=null)}catch(S){if(K.length=U,Y.__v=null,N||Q!=null){if(S.then){for(Y.__u|=N?160:128;z&&z.nodeType==8&&z.nextSibling;)z=z.nextSibling;Q!=null&&(Q[Q.indexOf(z)]=null),Y.__e=z}else if(Q!=null)for(B=Q.length;B--;)D0(Q[B])}else Y.__e=O.__e;Y.__k==null&&(Y.__k=O.__k||[]),S.then||i0(Y),M.__e(S,Y,O)}}else Q==null&&Y.__v==O.__v?(Y.__k=O.__k,Y.__e=O.__e):z=Y.__e=D1(O.__e,Y,O,W,G,Q,K,N,q);return($=M.diffed)&&$(Y),128&Y.__u?void 0:z}function i0(Z){Z&&(Z.__c&&(Z.__c.__e=!0),Z.__k&&Z.__k.some(i0))}function o0(Z,Y,O){for(var W=0;W<O.length;W++)R0(O[W],O[++W],O[++W]);M.__c&&M.__c(Y,Z),Z.some(function(G){try{Z=G.__h,G.__h=[],Z.some(function(Q){Q.call(G)})}catch(Q){M.__e(Q,G.__v)}})}function s0(Z){return typeof Z!="object"||Z==null||Z.__b>0?Z:H0(Z)?Z.map(s0):Z.constructor!==void 0?null:g({},Z)}function D1(Z,Y,O,W,G,Q,K,z,N){var q,$,U,X,H,V,P,w=O.props||G0,D=Y.props,F=Y.type;if(F=="svg"?G="http://www.w3.org/2000/svg":F=="math"?G="http://www.w3.org/1998/Math/MathML":G||(G="http://www.w3.org/1999/xhtml"),Q!=null){for(q=0;q<Q.length;q++)if((H=Q[q])&&"setAttribute"in H==!!F&&(F?H.localName==F:H.nodeType==3)){Z=H,Q[q]=null;break}}if(Z==null){if(F==null)return document.createTextNode(D);Z=document.createElementNS(G,F,D.is&&D),z&&(M.__m&&M.__m(Y,Q),z=!1),Q=null}if(F==null)w===D||z&&Z.data==D||(Z.data=D);else{if(Q=F=="textarea"&&D.defaultValue!=null?null:Q&&z0.call(Z.childNodes),!z&&Q!=null)for(w={},q=0;q<Z.attributes.length;q++)w[(H=Z.attributes[q]).name]=H.value;for(q in w)H=w[q],q=="dangerouslySetInnerHTML"?U=H:q=="children"||(q in D)||q=="value"&&("defaultValue"in D)||q=="checked"&&("defaultChecked"in D)||Q0(Z,q,null,H,G);for(q in D)H=D[q],q=="children"?X=H:q=="dangerouslySetInnerHTML"?$=H:q=="value"?V=H:q=="checked"?P=H:z&&typeof H!="function"||w[q]===H||Q0(Z,q,H,w[q],G);if($)z||U&&($.__html==U.__html||$.__html==Z.innerHTML)||(Z.innerHTML=$.__html),Y.__k=[];else if(U&&(Z.innerHTML=""),a0(Y.type=="template"?Z.content:Z,H0(X)?X:[X],Y,O,W,F=="foreignObject"?"http://www.w3.org/1999/xhtml":G,Q,K,Q?Q[0]:O.__k&&o(O,0),z,N),Q!=null)for(q=Q.length;q--;)D0(Q[q]);z&&F!="textarea"||(q="value",F=="progress"&&V==null?Z.removeAttribute("value"):V!=null&&(V!==Z[q]||F=="progress"&&!V||F=="option"&&V!=w[q])&&Q0(Z,q,V,w[q],G),q="checked",P!=null&&P!=Z[q]&&Q0(Z,q,P,w[q],G))}return Z}function R0(Z,Y,O){try{if(typeof Z=="function"){var W=typeof Z.__u=="function";W&&Z.__u(),W&&Y==null||(Z.__u=Z(Y))}else Z.current=Y}catch(G){M.__e(G,O)}}function l0(Z,Y,O){var W,G;if(M.unmount&&M.unmount(Z),(W=Z.ref)&&(W.current&&W.current!=Z.__e||R0(W,null,Y)),(W=Z.__c)!=null){if(W.componentWillUnmount)try{W.componentWillUnmount()}catch(Q){M.__e(Q,Y)}W.base=W.__P=W.__n=null}if(W=Z.__k)for(G=0;G<W.length;G++)W[G]&&l0(W[G],Y,O||typeof Z.type!="function");O||D0(Z.__e),Z.__c=Z.__=Z.__e=void 0}function w1(Z,Y,O){return this.constructor(Z,O)}function B0(Z,Y,O){var W,G,Q,K;Y==document&&(Y=document.documentElement),M.__&&M.__(Z,Y),G=(W=typeof O=="function")?null:O&&O.__k||Y.__k,Q=[],K=[],w0(Y,Z=(!W&&O||Y).__k=N0($0,null,[Z]),G||G0,G0,Y.namespaceURI,!W&&O?[O]:G?null:Y.firstChild?z0.call(Y.childNodes):null,Q,!W&&O?O:G?G.__e:Y.firstChild,W,K),o0(Q,Z,K),Z.props.children=null}z0=K0.slice,M={__e:function(Z,Y,O,W){for(var G,Q,K;Y=Y.__;)if((G=Y.__c)&&!G.__)try{if((Q=G.constructor)&&Q.getDerivedStateFromError!=null&&(G.setState(Q.getDerivedStateFromError(Z)),K=G.__d),G.componentDidCatch!=null&&(G.componentDidCatch(Z,W||{}),K=G.__d),K)return G.__E=G}catch(z){Z=z}throw Z}},d0=0,P1=function(Z){return Z!=null&&Z.constructor===void 0},s.prototype.setState=function(Z,Y){var O;O=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=g({},this.state),typeof Z=="function"&&(Z=Z(g({},O),this.props)),Z&&g(O,Z),Z!=null&&this.__v&&(Y&&this._sb.push(Y),v0(this))},s.prototype.forceUpdate=function(Z){this.__v&&(this.__e=!0,Z&&this.__h.push(Z),v0(this))},s.prototype.render=$0,p=[],h0=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g0=function(Z,Y){return Z.__v.__b-Y.__v.__b},q0.__r=0,F0=Math.random().toString(8),W0="__d"+F0,t="__a"+F0,c0=/(PointerCapture)$|Capture$/i,M0=0,T0=f0(!1),_0=f0(!0),U1=0;var n,k,E0,u0,e=0,W1=[],C=M,t0=C.__b,n0=C.__r,e0=C.diffed,Y1=C.__c,Z1=C.unmount,O1=C.__;function C0(Z,Y){C.__h&&C.__h(k,Z,e||Y),e=0;var O=k.__H||(k.__H={__:[],__h:[]});return Z>=O.__.length&&O.__.push({}),O.__[Z]}function T(Z){return e=1,R1(K1,Z)}function R1(Z,Y,O){var W=C0(n++,2);if(W.t=Z,!W.__c&&(W.__=[O?O(Y):K1(void 0,Y),function(z){var N=W.__N?W.__N[0]:W.__[0],q=W.t(N,z);N!==q&&(W.__N=[q,W.__[1]],W.__c.setState({}))}],W.__c=k,!k.__f)){var G=function(z,N,q){if(!W.__c.__H)return!0;var $=!1,U=W.__c.props!==z;if(W.__c.__H.__.some(function(H){if(H.__N){$=!0;var V=H.__[0];H.__=H.__N,H.__N=void 0,V!==H.__[0]&&(U=!0)}}),Q){var X=Q.call(this,z,N,q);return $?X||U:X}return!$||U};k.__f=!0;var{shouldComponentUpdate:Q,componentWillUpdate:K}=k;k.componentWillUpdate=function(z,N,q){if(this.__e){var $=Q;Q=void 0,G(z,N,q),Q=$}K&&K.call(this,z,N,q)},k.shouldComponentUpdate=G}return W.__N||W.__}function a(Z,Y){var O=C0(n++,3);!C.__s&&G1(O.__H,Y)&&(O.__=Z,O.u=Y,k.__H.__h.push(O))}function Y0(Z){return e=5,X1(function(){return{current:Z}},[])}function X1(Z,Y){var O=C0(n++,7);return G1(O.__H,Y)&&(O.__=Z(),O.__H=Y,O.__h=Z),O.__}function Z0(Z,Y){return e=8,X1(function(){return Z},Y)}function E1(){for(var Z;Z=W1.shift();){var Y=Z.__H;if(Z.__P&&Y)try{Y.__h.some(L0),Y.__h.some(k0),Y.__h=[]}catch(O){Y.__h=[],C.__e(O,Z.__v)}}}C.__b=function(Z){k=null,t0&&t0(Z)},C.__=function(Z,Y){Z&&Y.__k&&Y.__k.__m&&(Z.__m=Y.__k.__m),O1&&O1(Z,Y)},C.__r=function(Z){n0&&n0(Z),n=0;var Y=(k=Z.__c).__H;Y&&(E0===k?(Y.__h=[],k.__h=[],Y.__.some(function(O){O.__N&&(O.__=O.__N),O.u=O.__N=void 0})):(Y.__h.some(L0),Y.__h.some(k0),Y.__h=[],n=0)),E0=k},C.diffed=function(Z){e0&&e0(Z);var Y=Z.__c;Y&&Y.__H&&(Y.__H.__h.length&&(W1.push(Y)!==1&&u0===C.requestAnimationFrame||((u0=C.requestAnimationFrame)||k1)(E1)),Y.__H.__.some(function(O){O.u&&(O.__H=O.u,O.u=void 0)})),E0=k=null},C.__c=function(Z,Y){Y.some(function(O){try{O.__h.some(L0),O.__h=O.__h.filter(function(W){return!W.__||k0(W)})}catch(W){Y.some(function(G){G.__h&&(G.__h=[])}),Y=[],C.__e(W,O.__v)}}),Y1&&Y1(Z,Y)},C.unmount=function(Z){Z1&&Z1(Z);var Y,O=Z.__c;O&&O.__H&&(O.__H.__.some(function(W){try{L0(W)}catch(G){Y=G}}),O.__H=void 0,Y&&C.__e(Y,O.__v))};var Q1=typeof requestAnimationFrame=="function";function k1(Z){var Y,O=function(){clearTimeout(W),Q1&&cancelAnimationFrame(Y),setTimeout(Z)},W=setTimeout(O,35);Q1&&(Y=requestAnimationFrame(O))}function L0(Z){var Y=k,O=Z.__c;typeof O=="function"&&(Z.__c=void 0,O()),k=Y}function k0(Z){var Y=k;Z.__c=Z.__(),k=Y}function G1(Z,Y){return!Z||Z.length!==Y.length||Y.some(function(O,W){return O!==Z[W]})}function K1(Z,Y){return typeof Y=="function"?Y(Z):Y}var z1=function(Z,Y,O,W){var G;Y[0]=0;for(var Q=1;Q<Y.length;Q++){var K=Y[Q++],z=Y[Q]?(Y[0]|=K?1:2,O[Y[Q++]]):Y[++Q];K===3?W[0]=z:K===4?W[1]=Object.assign(W[1]||{},z):K===5?(W[1]=W[1]||{})[Y[++Q]]=z:K===6?W[1][Y[++Q]]+=z+"":K?(G=Z.apply(z,z1(Z,z,O,["",null])),W.push(G),z[0]?Y[0]|=2:(Y[Q-2]=0,Y[Q]=G)):W.push(z)}return W},q1=new Map;function y0(Z){var Y=q1.get(this);return Y||(Y=new Map,q1.set(this,Y)),(Y=z1(this,Y.get(Z)||(Y.set(Z,Y=function(O){for(var W,G,Q=1,K="",z="",N=[0],q=function(X){Q===1&&(X||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?N.push(0,X,K):Q===3&&(X||K)?(N.push(3,X,K),Q=2):Q===2&&K==="..."&&X?N.push(4,X,0):Q===2&&K&&!X?N.push(5,0,!0,K):Q>=5&&((K||!X&&Q===5)&&(N.push(Q,0,K,G),Q=6),X&&(N.push(Q,X,0,G),Q=6)),K=""},$=0;$<O.length;$++){$&&(Q===1&&q(),q($));for(var U=0;U<O[$].length;U++)W=O[$][U],Q===1?W==="<"?(q(),N=[N],Q=3):K+=W:Q===4?K==="--"&&W===">"?(Q=1,K=""):K=W+K[0]:z?W===z?z="":K+=W:W==='"'||W==="'"?z=W:W===">"?(q(),Q=1):Q&&(W==="="?(Q=5,G=K,K=""):W==="/"&&(Q<5||O[$][U+1]===">")?(q(),Q===3&&(N=N[0]),Q=N,(N=N[0]).push(2,0,Q),Q=0):W===" "||W==="\t"||W===`
`||W==="\r"?(q(),Q=2):K+=W),Q===3&&K==="!--"&&(Q=4,N=N[0])}return q(),N}(Z)),Y),arguments,[])).length>1?Y:Y[0]}var J=y0.bind(N0);async function y(Z,Y){let O=await fetch(`/api${Z}`,{credentials:"same-origin",headers:{"Content-Type":"application/json",...Y?.headers??{}},...Y});if(!O.ok){let W=await O.json().catch(()=>({error:O.statusText}));throw Error(W.error||`HTTP ${O.status}`)}return O.json()}function C1(){let[Z,Y]=T([]),[O,W]=T(null),[G,Q]=T("list"),[K,z]=T(null),[N,q]=T(!0),$=Z0(async()=>{try{let H=await y("/agents");Y(H.agents||[])}catch(H){console.error("Failed to load agents:",H)}},[]),U=Z0(async(H)=>{if(!confirm(`Remove "${H.name}"? This deletes its conversation history too.`))return;try{await y(`/agents/${H.id}`,{method:"DELETE"}),W((V)=>{if(V?.id===H.id)return Q("list"),null;return V}),await $()}catch(V){alert(`Failed to remove agent: ${V.message}`)}},[$]);a(()=>{(async()=>{try{let H=await y("/auth/me");z(H.user)}catch{}await $(),q(!1)})()},[]);let X=(H)=>({style:{...H?Object.fromEntries(H.split(";").filter(Boolean).map((V)=>{let[P,w]=V.trim().split(":");return[P.replace(/-([a-z])/g,(D,F)=>F.toUpperCase()),w.trim()]})):{}}});if(N)return J`<div style=${{padding:"2rem",color:"var(--text-dim)"}}>Loading…</div>`;return J`
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
                onClick=${(V)=>{V.stopPropagation(),U(H)}}
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
        ${G==="add"&&J`<${A1} onAdded=${(H)=>{$(),W(H),Q("chat")}} />`}
        ${G==="chat"&&O&&J`<${I1} agent=${O} onRefresh=${$} onDelete=${()=>U(O)} />`}
        ${G==="jobs"&&J`<${j1} agents=${Z} />`}
        ${G==="list"&&J`<${y1} />`}
      </main>
    </div>
  `}function y1(){return J`
    <div style=${{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"var(--text-dim)"}}>
      <div style=${{fontSize:"3rem",marginBottom:"1rem"}}>🎵</div>
      <p style=${{fontSize:"1rem"}}>Select an agent or add a new one to get started</p>
      <p style=${{fontSize:"0.8rem",marginTop:"0.5rem",color:"var(--text-dimmer)"}}>
        Orchestral connects to A2A agents via OIDC and lets you message them
      </p>
    </div>
  `}var x1={queued:"Queued",provisioning:"Provisioning container…",cloning:"Cloning repo…",running:"Bot is working…",patching:"Applying patch…",opening_pr:"Opening PR…",done:"Done",failed:"Failed"};function j1({agents:Z}){let[Y,O]=T(null),[W,G]=T([]),[Q,K]=T([]),[z,N]=T(""),[q,$]=T(""),[U,X]=T(""),[H,V]=T(""),[P,w]=T(!1),[D,F]=T(""),[x,m]=T(null),v=(Z||[]).filter((B)=>B.auth_state==="connected"),R=W.filter((B)=>B.full_name.toLowerCase().includes(U.trim().toLowerCase())),f=Z0(async()=>{try{let B=await y("/jobs");K(B.jobs||[])}catch(B){console.error("Failed to load jobs:",B)}},[]);a(()=>{(async()=>{try{let B=await y("/github/status");if(O(B),B.connected){let E=await y("/github/repos");G(E.repos||[])}}catch(B){F(B.message)}await f()})()},[]),a(()=>{if(!Q.some((S)=>!["done","failed"].includes(S.status)))return;let E=setInterval(f,3000);return()=>clearInterval(E)},[Q,f]);async function c(B){if(B?.preventDefault(),!z||!q||!H.trim()||P)return;w(!0),F("");try{let E=await y("/jobs",{method:"POST",body:JSON.stringify({agent_id:z,repo:q,instruction:H.trim()})});K((S)=>[E.job,...S]),V("")}catch(E){F(E.message)}finally{w(!1)}}return J`
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

        <form onSubmit=${c} style=${{display:"flex",flexDirection:"column",gap:"1rem",marginBottom:"2rem"}}>
          <div>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>Repository</label>
            <input
              type="search"
              value=${U}
              onInput=${(B)=>X(B.target.value)}
              placeholder="Search repositories…"
              aria-label="Search repositories"
              style=${{...r,marginBottom:"0.5rem"}}
            />
            <select value=${q} onChange=${(B)=>$(B.target.value)} style=${{...r}}>
              <option value="">${R.length?"Select a repo…":"No matching repos"}</option>
              ${R.map((B)=>J`<option key=${B.full_name} value=${B.full_name}>${B.full_name}${B.private?" \uD83D\uDD12":""}</option>`)}
            </select>
          </div>

          <div>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>Bot</label>
            <select value=${z} onChange=${(B)=>N(B.target.value)} style=${{...r}}>
              <option value="">Select a bot…</option>
              ${v.map((B)=>J`<option key=${B.id} value=${B.id}>${B.name}</option>`)}
            </select>
            ${v.length===0&&J`<p style=${{fontSize:"0.7rem",color:"var(--text-dimmer)",marginTop:"0.3rem"}}>No connected bots yet — add one first.</p>`}
          </div>

          <div>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>Command</label>
            <textarea
              value=${H}
              onInput=${(B)=>V(B.target.value)}
              placeholder="e.g. Fix the off-by-one error in the pagination helper"
              rows="3"
              style=${{...r,resize:"vertical",fontFamily:"inherit"}}
            />
          </div>

          ${D&&J`<div style=${{color:"var(--danger)",fontSize:"0.8rem"}}>${D}</div>`}

          <button type="submit" disabled=${!z||!q||!H.trim()||P} style=${{alignSelf:"flex-start",padding:"0.6rem 1.5rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",opacity:!z||!q||!H.trim()||P?0.5:1}}>
            ${P?"Starting…":"▶ Run Job"}
          </button>
        </form>
      `}

      <h3 style=${{fontSize:"0.95rem",fontWeight:700,marginBottom:"0.75rem"}}>Recent jobs</h3>
      ${Q.length===0&&J`<p style=${{fontSize:"0.8rem",color:"var(--text-dimmer)"}}>No jobs yet.</p>`}
      <div style=${{display:"flex",flexDirection:"column",gap:"0.5rem"}}>
        ${Q.map((B)=>J`
          <div key=${B.id} style=${{border:"1px solid var(--border)",borderRadius:"var(--radius)",padding:"0.75rem 1rem",background:"var(--bg-card)"}}>
            <div style=${{display:"flex",alignItems:"center",gap:"0.6rem",cursor:"pointer"}}
                 onClick=${()=>m(x===B.id?null:B.id)}>
              <span style=${{fontSize:"0.7rem",fontWeight:700,padding:"0.15rem 0.5rem",borderRadius:"999px",background:B.status==="done"?"rgba(34,197,94,0.15)":B.status==="failed"?"rgba(239,68,68,0.15)":"rgba(99,102,241,0.15)",color:B.status==="done"?"var(--success)":B.status==="failed"?"var(--danger)":"var(--accent)"}}>
                ${x1[B.status]||B.status}
              </span>
              <span style=${{fontSize:"0.85rem",fontWeight:600,flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                ${B.repo}: ${B.instruction}
              </span>
              ${B.pr_url&&J`
                <a href=${B.pr_url} target="_blank" onClick=${(E)=>E.stopPropagation()} style=${{fontSize:"0.75rem",color:"var(--accent)"}}>
                  View PR →
                </a>
              `}
            </div>
            ${x===B.id&&J`
              <pre style=${{marginTop:"0.75rem",padding:"0.75rem",background:"var(--bg)",borderRadius:"8px",fontSize:"0.7rem",color:"var(--text-dim)",whiteSpace:"pre-wrap",maxHeight:"300px",overflowY:"auto"}}>${B.log||"(no log yet)"}${B.error?`

Error: ${B.error}`:""}</pre>
            `}
          </div>
        `)}
      </div>
    </div>
  `}function A1({onAdded:Z}){let[Y,O]=T(""),[W,G]=T(""),[Q,K]=T(""),[z,N]=T(""),[q,$]=T(!1),[U,X]=T(null);async function H(){N(""),X(null),$(!0);try{let V=await y("/agents",{method:"POST",body:JSON.stringify({card_url:Y,oidc_client_id:W,oidc_client_secret:Q})});Z(V.agent)}catch(V){N(V.message)}finally{$(!1)}}return J`
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
          style=${r}
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
          <input type="text" value=${W} onInput=${(V)=>G(V.target.value)} style=${r} />
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
  `}function I1({agent:Z,onRefresh:Y,onDelete:O}){let[W,G]=T([]),[Q,K]=T(""),[z,N]=T(!1),[q,$]=T(null),[U,X]=T([]),[H,V]=T(""),[P,w]=T(Z),[D,F]=T(!1),x=Y0(null),m=Y0(null),v=Y0(null),R=Y0(0);a(()=>{y(`/agents/${Z.id}`).then((L)=>w(L)).catch(()=>{})},[Z.id]);let f=Z0(async(L)=>{let _=++R.current;$(L);let j=await y(`/conversations/${L}/messages`);if(_!==R.current)return;G(j.messages||[])},[]);a(()=>{(async()=>{try{let _=(await y(`/agents/${Z.id}/conversations`)).conversations||[];if(X(_),_.length>0)await f(_[0].id);else{let j=++R.current,A=await y(`/agents/${Z.id}/conversations`,{method:"POST"});if(j!==R.current)return;X([A.conversation]),$(A.conversation.id),G([])}}catch(L){V(L.message)}})()},[Z.id]);async function c(){V("");let L=++R.current;try{let _=await y(`/agents/${Z.id}/conversations`,{method:"POST"});if(L!==R.current)return;X((j)=>[_.conversation,...j]),$(_.conversation.id),G([]),K("")}catch(_){if(L===R.current)V(_.message)}}async function B(L){if(L===q)return;V("");try{await f(L)}catch(_){V(_.message)}}a(()=>{x.current?.scrollIntoView({behavior:"smooth"})},[W]),a(()=>{if(!z&&!b)m.current?.focus()},[z]);async function E(L){if(L?.preventDefault(),!Q.trim()||!q||z)return;let _=Q.trim(),j=q;K(""),N(!0),V("");let A=++R.current;G((d)=>[...d,{role:"user",text:_,created_at:Date.now()/1000,id:"temp-"+Date.now()}]),G((d)=>[...d,{role:"agent",text:"",created_at:Date.now()/1000,id:"temp-agent-"+Date.now(),streaming:!0}]);try{if(P?.agent_card?.capabilities?.streaming??!0)await S(_,j,A);else await H1(_,j,A)}catch(d){if(A===R.current){if(V(d.message),d.message.includes("Authentication"))Y();G((J0)=>J0.filter((l)=>!l.streaming))}}finally{N(!1)}}async function S(L,_,j){let A=await fetch(`/api/conversations/${_}/stream`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:L}),credentials:"same-origin"});if(!A.ok){let u=await A.json().catch(()=>({error:A.statusText}));throw Error(u.error||`HTTP ${A.status}`)}let d=A.body.getReader(),J0=new TextDecoder,l="",P0="";while(!0){let{done:u,value:V1}=await d.read();if(u)break;l+=J0.decode(V1,{stream:!0});let A0=l.split(`

`);l=A0.pop()||"";for(let J1 of A0)for(let I0 of J1.split(`
`))if(I0.startsWith("data: "))try{let I=JSON.parse(I0.slice(6));if(I.error)throw Error(I.error);let i="",S0=!1;if(I.task?.status?.message?.parts)i=I.task.status.message.parts.map((h)=>h.text||"").join("");else if(I.message?.parts)i=I.message.parts.map((h)=>h.text||"").join("");else if(I.artifactUpdate?.artifact?.parts)i=I.artifactUpdate.artifact.parts.map((h)=>h.text||"").join(""),S0=!!I.artifactUpdate.append;else if(I.statusUpdate?.status?.message?.parts)i=I.statusUpdate.status.message.parts.map((h)=>h.text||"").join("");if(i){if(P0=S0?P0+i:i,j===R.current)G((h)=>h.map((U0)=>U0.streaming?{...U0,text:P0}:U0))}}catch(I){if(I.message)throw I}}if(j===R.current){let u=await y(`/conversations/${_}/messages`);if(j===R.current)G(u.messages||[])}}async function H1(L,_,j){if(await y(`/conversations/${_}/send`,{method:"POST",body:JSON.stringify({text:L})}),j!==R.current)return;let A=await y(`/conversations/${_}/messages`);if(j===R.current)G(A.messages||[])}let[V0,x0]=T(!1),[O0,N1]=T(""),[j0,$1]=T("");async function B1(){x0(!0),V("");try{await y(`/agents/${Z.id}/credentials`,{method:"POST",body:JSON.stringify({client_id:O0,client_secret:j0})}),window.location.href=`/api/agents/${Z.id}/connect`}catch(L){V(L.message)}finally{x0(!1)}}let b=P?.auth_state!=="connected",L1=typeof window<"u"?`${window.location.origin}/api/agent/oidc/callback`:"";return J`
    <div style=${{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
      ${""}
      <header style=${{padding:"1rem 1.5rem",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",gap:"0.75rem"}}>
        ${P?.icon_url?J`<img src=${P.icon_url} style=${{width:"2rem",height:"2rem",borderRadius:"50%"}} />`:J`<span style=${{fontSize:"1.5rem"}}>🤖</span>`}
        <div style=${{flex:1}}>
          <h2 style=${{fontSize:"1rem",fontWeight:600}}>${P?.name||Z.name}</h2>
          ${P?.description&&J`<p style=${{fontSize:"0.75rem",color:"var(--text-dim)"}}>${P.description}</p>`}
        </div>
        ${U.length>1&&J`
          <select
            value=${q}
            onChange=${(L)=>B(L.target.value)}
            style=${{padding:"0.4rem 0.6rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:"0.75rem",outline:"none"}}
          >
            ${U.map((L,_)=>J`
              <option key=${L.id} value=${L.id}>
                ${new Date(L.created_at*1000).toLocaleString()} ${_===0?"(latest)":""}
              </option>
            `)}
          </select>
        `}
        <button
          onClick=${c}
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
          style=${{padding:"0.4rem 0.6rem",borderRadius:"var(--radius)",background:D?"var(--bg-hover)":"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text-dim)",cursor:"pointer",fontWeight:600,fontSize:"0.75rem"}}
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

      ${D&&J`
        <div style=${{padding:"0.9rem 1.5rem",borderBottom:"1px solid var(--border)",fontSize:"0.78rem",color:"var(--text-dim)",display:"flex",flexDirection:"column",gap:"0.35rem"}}>
          ${[["Card URL",P?.card_url],["Endpoint URL",P?.agent_card?.url],["Protocol version",P?.agent_card?.protocolVersion],["Transport",P?.agent_card?.preferredTransport],["Agent version",P?.agent_card?.version],["Security",P?.security_type],["Streaming",P?.agent_card?.capabilities?.streaming?"yes":"no"],["Skills",(P?.agent_card?.skills||[]).map((L)=>L.name||L.id).filter(Boolean).join(", ")||"—"],["Added",P?.created_at?new Date(P.created_at*1000).toLocaleString():void 0]].filter(([,L])=>L!==void 0&&L!==null&&L!=="").map(([L,_])=>J`
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
              style=${{...r,width:"100%"}}
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
              style=${{...r,width:"100%"}}
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
          <div ref=${x} />
        </div>
      </div>

      ${H&&J`
        <div style=${{padding:"0.5rem 1.5rem",color:"var(--danger)",fontSize:"0.8rem"}}>
          ${H}
        </div>
      `}

      ${""}
      <footer style=${{borderTop:"1px solid var(--border)",padding:"1rem 1.5rem"}}>
        <form onSubmit=${E} style=${{maxWidth:"720px",margin:"0 auto",display:"flex",gap:"0.5rem"}}>
          <input
            ref=${m}
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
  `}var r={width:"100%",padding:"0.6rem 0.9rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:"0.875rem",outline:"none"};B0(J`<${C1} />`,document.getElementById("root"));
