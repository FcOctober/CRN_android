__d(function(g,r,i,a,m,e,d){var t=r(d[0]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(r(d[1])),o=t(r(d[2])),u=t(r(d[3])),f=t(r(d[4]));function l(t,o,u){return'function'==typeof t?(0,n.default)({},o,t((0,n.default)({},u,{navigationOptions:o}))):'object'==typeof t?(0,n.default)({},o,t):o}e.default=function(t,n){return function(v,c){var s=v.state;(0,o.default)(s.routeName&&'string'==typeof s.routeName,'Cannot get config because the route does not have a routeName.');var p=(0,u.default)(t,s.routeName),N=t[s.routeName],y=N===p?null:N.navigationOptions,O=p.navigationOptions,_={navigation:v,screenProps:c||{}},b=l(n,{},_);return b=l(y,b=l(O,b,_),_),(0,f.default)(b,s),b}}},666699,[2,51,666684,666696,666700]);