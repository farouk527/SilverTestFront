import{S as w,N as re,O as ne,P,Q as ie,z as g,R as I,U as v,j as h,K as U,V as se,W as te,G as ae,b as fe,h as F,a as ue,E as le,X as ce,Y as de,M as oe,Z as M,_ as Y,c as B,p as $,d as _e,$ as ve,a0 as be,g as q,a1 as pe,a2 as J,n as G,a3 as he,a4 as ge,a5 as ye,a6 as Pe,a7 as k,a8 as we,a9 as Z,aa as Re,ab as Ee,ac as z,ad as Oe,F as Se,ae as Ie,af as xe,ag as ee,l as H,ah as Ne,ai as Te,aj as Ae,ak as A}from"./BuROYT70.js";import{s as De,g as me}from"./B6XXqun_.js";function S(e,r=null,t){if(typeof e!="object"||e===null||w in e)return e;const n=te(e);if(n!==re&&n!==ne)return e;var s=new Map,l=ae(e),b=P(0);l&&s.set("length",P(e.length));var y;return new Proxy(e,{defineProperty(c,i,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&ie();var u=s.get(i);return u===void 0?(u=P(a.value),s.set(i,u)):g(u,S(a.value,y)),!0},deleteProperty(c,i){var a=s.get(i);if(a===void 0)i in c&&s.set(i,P(v));else{if(l&&typeof i=="string"){var u=s.get("length"),f=Number(i);Number.isInteger(f)&&f<u.v&&g(u,f)}g(a,v),V(b)}return!0},get(c,i,a){var _;if(i===w)return e;var u=s.get(i),f=i in c;if(u===void 0&&(!f||(_=I(c,i))!=null&&_.writable)&&(u=P(S(f?c[i]:v,y)),s.set(i,u)),u!==void 0){var d=h(u);return d===v?void 0:d}return Reflect.get(c,i,a)},getOwnPropertyDescriptor(c,i){var a=Reflect.getOwnPropertyDescriptor(c,i);if(a&&"value"in a){var u=s.get(i);u&&(a.value=h(u))}else if(a===void 0){var f=s.get(i),d=f==null?void 0:f.v;if(f!==void 0&&d!==v)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return a},has(c,i){var d;if(i===w)return!0;var a=s.get(i),u=a!==void 0&&a.v!==v||Reflect.has(c,i);if(a!==void 0||U!==null&&(!u||(d=I(c,i))!=null&&d.writable)){a===void 0&&(a=P(u?S(c[i],y):v),s.set(i,a));var f=h(a);if(f===v)return!1}return u},set(c,i,a,u){var E;var f=s.get(i),d=i in c;if(l&&i==="length")for(var _=a;_<f.v;_+=1){var R=s.get(_+"");R!==void 0?g(R,v):_ in c&&(R=P(v),s.set(_+"",R))}f===void 0?(!d||(E=I(c,i))!=null&&E.writable)&&(f=P(void 0),g(f,S(a,y)),s.set(i,f)):(d=f.v!==v,g(f,S(a,y)));var p=Reflect.getOwnPropertyDescriptor(c,i);if(p!=null&&p.set&&p.set.call(u,a),!d){if(l&&typeof i=="string"){var x=s.get("length"),N=Number(i);Number.isInteger(N)&&N>=x.v&&g(x,N+1)}V(b)}return!0},ownKeys(c){h(b);var i=Reflect.ownKeys(c).filter(f=>{var d=s.get(f);return d===void 0||d.v!==v});for(var[a,u]of s)u.v!==v&&!(a in c)&&i.push(a);return i},setPrototypeOf(){se()}})}function V(e,r=1){g(e,e.v+r)}function Q(e){return e!==null&&typeof e=="object"&&w in e?e[w]:e}function Ke(e,r){return Object.is(Q(e),Q(r))}function Me(e,r,t=!1){F&&ue();var n=e,s=null,l=null,b=v,y=t?le:0,c=!1;const i=(u,f=!0)=>{c=!0,a(f,u)},a=(u,f)=>{if(b===(b=u))return;let d=!1;if(F){const _=n.data===ce;!!b===_&&(n=de(),oe(n),M(!1),d=!0)}b?(s?Y(s):f&&(s=B(()=>f(n))),l&&$(l,()=>{l=null})):(l?Y(l):f&&(l=B(()=>f(n))),s&&$(s,()=>{s=null})),d&&M(!0)};fe(()=>{c=!1,r(i),c||a(null,null)},y),F&&(n=_e)}function W(e,r){return e===r||(e==null?void 0:e[w])===r}function Ye(e={},r,t,n){return ve(()=>{var s,l;return be(()=>{s=l,l=[],q(()=>{e!==t(...l)&&(r(e,...l),s&&W(t(...s),e)&&r(null,...s))})}),()=>{pe(()=>{l&&W(t(...l),e)&&r(null,...l)})}}),e}let m=!1,C=Symbol();function Be(e,r,t){const n=t[r]??(t[r]={store:null,source:J(void 0),unsubscribe:G});if(n.store!==e&&!(C in t))if(n.unsubscribe(),n.store=e,e==null)n.source.v=void 0,n.unsubscribe=G;else{var s=!0;n.unsubscribe=De(e,l=>{s?n.source.v=l:g(n.source,l)}),s=!1}return C in t?me(e):h(n.source)}function $e(){const e={};function r(){he(()=>{for(var t in e)e[t].unsubscribe();ge(e,C,{enumerable:!1,value:!0})})}return[e,r]}function Le(e){var r=m;try{return m=!1,[e(),m]}finally{m=r}}const je={get(e,r){if(!e.exclude.includes(r))return h(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,t){return r in e.special||(e.special[r]=Ue({get[r](){return e.props[r]}},r,k)),e.special[r](t),Z(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),Z(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Ge(e,r){return new Proxy({props:e,exclude:r,special:{},version:P(0)},je)}const Fe={get(e,r){let t=e.props.length;for(;t--;){let n=e.props[t];if(A(n)&&(n=n()),typeof n=="object"&&n!==null&&r in n)return n[r]}},set(e,r,t){let n=e.props.length;for(;n--;){let s=e.props[n];A(s)&&(s=s());const l=I(s,r);if(l&&l.set)return l.set(t),!0}return!1},getOwnPropertyDescriptor(e,r){let t=e.props.length;for(;t--;){let n=e.props[t];if(A(n)&&(n=n()),typeof n=="object"&&n!==null&&r in n){const s=I(n,r);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,r){if(r===w||r===ee)return!1;for(let t of e.props)if(A(t)&&(t=t()),t!=null&&r in t)return!0;return!1},ownKeys(e){const r=[];for(let t of e.props){A(t)&&(t=t());for(const n in t)r.includes(n)||r.push(n)}return r}};function Ze(...e){return new Proxy({props:e},Fe)}function X(e){for(var r=U,t=U;r!==null&&!(r.f&(Re|Ee));)r=r.parent;try{return z(r),e()}finally{z(t)}}function Ue(e,r,t,n){var K;var s=(t&Oe)!==0,l=!Se||(t&Ie)!==0,b=(t&xe)!==0,y=(t&Te)!==0,c=!1,i;b?[i,c]=Le(()=>e[r]):i=e[r];var a=w in e||ee in e,u=b&&(((K=I(e,r))==null?void 0:K.set)??(a&&r in e&&(o=>e[r]=o)))||void 0,f=n,d=!0,_=!1,R=()=>(_=!0,d&&(d=!1,y?f=q(n):f=n),f);i===void 0&&n!==void 0&&(u&&l&&ye(),i=R(),u&&u(i));var p;if(l)p=()=>{var o=e[r];return o===void 0?R():(d=!0,_=!1,o)};else{var x=X(()=>(s?H:Ne)(()=>e[r]));x.f|=Pe,p=()=>{var o=h(x);return o!==void 0&&(f=void 0),o===void 0?f:o}}if(!(t&k))return p;if(u){var N=e.$$legacy;return function(o,O){return arguments.length>0?((!l||!O||N||c)&&u(O?p():o),o):p()}}var E=!1,L=!1,D=J(i),T=X(()=>H(()=>{var o=p(),O=h(D);return E?(E=!1,L=!0,O):(L=!1,D.v=o)}));return s||(T.equals=we),function(o,O){if(Ae!==null&&(E=L,p(),h(D)),arguments.length>0){const j=O?h(T):l&&b?S(o):o;return T.equals(j)||(E=!0,g(D,j),_&&f!==void 0&&(f=j),q(()=>h(T))),o}return h(T)}}export{S as a,Ye as b,Be as c,Ke as d,Ze as e,Me as i,Ge as l,Ue as p,$e as s};
