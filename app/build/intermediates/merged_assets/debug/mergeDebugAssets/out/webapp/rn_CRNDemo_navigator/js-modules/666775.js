__d(function(g,r,i,a,m,e,d){var t=r(d[0]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,u,c,v){if(t.forEach(function(t){var n=t.route;v&&v[n.key]&&(t.descriptor=v[n.key])}),c===u)return t;var h=new Map,y=new Map,k=new Map;t.forEach(function(t){var n=t.key;t.isStale&&k.set(n,t),h.set(n,t)});var x=new Set,p=u.routes;p.length>u.index+1&&(p=u.routes.slice(0,u.index+1));if(p.forEach(function(t,n){var u=s+t.key,c={index:n,isActive:!1,isStale:!1,key:u,route:t,descriptor:v&&v[t.key]};(0,o.default)(!x.has(u),"navigation.state.routes["+n+"].key \""+u+"\" conflicts with another route!"),x.add(u),k.has(u)&&k.delete(u),y.set(u,c)}),c){var E=c.routes;E.length>c.index+1&&(E=E.slice(0,c.index+1)),E.forEach(function(n,o){var u=s+n.key;if(!y.has(u)){var c=t.find(function(t){return t.route.key===n.key}),f=c?c.descriptor:v[n.key];f&&k.set(u,{index:o,isActive:!1,isStale:!0,key:u,route:n,descriptor:f})}})}var S=[],w=function(t){var n=t.key,o=h.has(n)?h.get(n):null;o&&l(o,t)?S.push(o):S.push(t)};k.forEach(w),y.forEach(w),S.sort(f);var A=0;if(S.forEach(function(t,o){var s=!t.isStale&&t.index===u.index;s!==t.isActive&&(S[o]=(0,n.default)({},t,{isActive:s})),s&&A++}),(0,o.default)(1===A,'there should always be only one scene active, not %s.',A),S.length!==t.length)return S;if(S.some(function(n,o){return!l(t[o],n)}))return S;return t};var n=t(r(d[1])),o=t(r(d[2])),u=t(r(d[3])),s='scene_';function c(t,n){var o=t.length-n.length;return o>0?1:o<0?-1:t>n?1:-1}function f(t,n){return t.index>n.index?1:t.index<n.index?-1:c(t.key,n.key)}function l(t,n){return t.key===n.key&&t.index===n.index&&t.isStale===n.isStale&&t.isActive===n.isActive&&v(t.route,n.route)}function v(t,n){return t&&n?t.key===n.key&&(0,u.default)(t,n):t===n}},666775,[2,51,666757,666776]);