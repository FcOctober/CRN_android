__d(function(g,r,i,a,m,e,d){var n=r(d[0]),t=r(d[1]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n){var t=p.Dimensions.get('window'),y=t.width,L=t.height,O=(function(t){function v(){var n,t;(0,s.default)(this,v);for(var o=arguments.length,h=new Array(o),c=0;c<o;c++)h[c]=arguments[c];return(t=(0,u.default)(this,(n=(0,l.default)(v)).call.apply(n,[this].concat(h)))).state={dimensions:{width:y,height:L},isLandscape:w({width:y,height:L})},t.handleOrientationChange=function(n){var o=n.window,s=w(o);t.setState({isLandscape:s})},t}return(0,c.default)(v,t),(0,h.default)(v,[{key:"componentDidMount",value:function(){p.Dimensions.addEventListener('change',this.handleOrientationChange)}},{key:"componentWillUnmount",value:function(){p.Dimensions.removeEventListener('change',this.handleOrientationChange)}},{key:"render",value:function(){return f.createElement(n,(0,o.default)({},this.props,this.state))}}]),v})(f.Component);return O.displayName="withDimensions("+n.displayName+")",(0,v.default)(O,n)},e.isOrientationLandscape=void 0;var o=t(r(d[2])),s=t(r(d[3])),h=t(r(d[4])),u=t(r(d[5])),l=t(r(d[6])),c=t(r(d[7])),f=n(r(d[8])),p=r(d[9]),v=t(r(d[10])),w=function(n){return n.width>n.height};e.isOrientationLandscape=w},666783,[1,2,14,3,4,5,8,9,11,15,666784]);