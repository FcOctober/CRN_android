__d(function(g,r,i,a,m,e,d){var t=r(d[0]),n=r(d[1]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r(d[2])),s=n(r(d[3])),l=n(r(d[4])),p=n(r(d[5])),h=n(r(d[6])),u=n(r(d[7])),f=n(r(d[8])),v=t(r(d[9])),c=r(d[10]),w=r(d[11]),S=.05;Math.sign||(Math.sign=function(t){return Number(t>0)-Number(t<0)||+t});var _=(function(t){function n(t){var o;(0,l.default)(this,n),(o=(0,h.default)(this,(0,u.default)(n).call(this,t)))._updateAnimatedEvent=function(t,n){var s=t.friction,l=t.overshootFriction,p=(t.useNativeAnimations,n.dragX),h=n.rowTranslation,u=n.leftWidth,f=void 0===u?0:u,v=n.rowWidth,w=void 0===v?0:v,S=n.rightOffset,_=void 0===S?w:S,A=Math.max(0,w-_),R=t.overshootLeft,O=void 0===R?f>0:R,b=t.overshootRight,E=void 0===b?A>0:b,W=c.Animated.add(h,p.interpolate({inputRange:[0,s],outputRange:[0,1]})).interpolate({inputRange:[-A-(E?1:l),-A,f,f+(O?1:l)],outputRange:[-A-(E||l>1?1:0),-A,f,f+(O||l>1?1:0)]});o._transX=W,o._showLeftAction=f>0?W.interpolate({inputRange:[-1,0,f],outputRange:[0,0,1]}):new c.Animated.Value(0),o._leftActionTranslate=o._showLeftAction.interpolate({inputRange:[0,Number.MIN_VALUE],outputRange:[-1e4,0],extrapolate:'clamp'}),o._showRightAction=A>0?W.interpolate({inputRange:[-A,0,1],outputRange:[1,0,0]}):new c.Animated.Value(0),o._rightActionTranslate=o._showRightAction.interpolate({inputRange:[0,Number.MIN_VALUE],outputRange:[-1e4,0],extrapolate:'clamp'})},o._onTapHandlerStateChange=function(t){t.nativeEvent.oldState===w.State.ACTIVE&&o.close()},o._onHandlerStateChange=function(t){var n=t.nativeEvent;n.oldState===w.State.ACTIVE&&o._handleRelease(n)},o._handleRelease=function(t){var n=t.velocityX,s=t.translationX,l=o.state,p=l.leftWidth,h=void 0===p?0:p,u=l.rowWidth,f=void 0===u?0:u,v=l.rowState,c=o.state.rightOffset,w=f-(void 0===c?f:c),_=o.props,A=_.friction,R=_.leftThreshold,O=void 0===R?h/2:R,b=_.rightThreshold,E=void 0===b?w/2:b,W=o._currentOffset()+s/A,y=(s+S*n)/A,L=0;0===v?y>O?L=h:y<-E&&(L=-w):1===v?y>-O&&(L=h):y<E&&(L=-w),o._animateRow(W,L,n/A)},o._animateRow=function(t,n,l){var p=o.state,h=p.dragX,u=p.rowTranslation;h.setValue(0),u.setValue(t),o.setState({rowState:Math.sign(n)}),c.Animated.spring(u,(0,s.default)({restSpeedThreshold:1.7,restDisplacementThreshold:.4,velocity:l,bounciness:0,toValue:n,useNativeDriver:o.props.useNativeAnimations},o.props.animationOptions)).start(function(t){t.finished&&(n>0&&o.props.onSwipeableLeftOpen?o.props.onSwipeableLeftOpen():n<0&&o.props.onSwipeableRightOpen&&o.props.onSwipeableRightOpen(),0===n?o.props.onSwipeableClose&&o.props.onSwipeableClose():o.props.onSwipeableOpen&&o.props.onSwipeableOpen())}),n>0&&o.props.onSwipeableLeftWillOpen?o.props.onSwipeableLeftWillOpen():n<0&&o.props.onSwipeableRightWillOpen&&o.props.onSwipeableRightWillOpen(),0===n?o.props.onSwipeableWillClose&&o.props.onSwipeableWillClose():o.props.onSwipeableWillOpen&&o.props.onSwipeableWillOpen()},o._onRowLayout=function(t){var n=t.nativeEvent;o.setState({rowWidth:n.layout.width})},o._currentOffset=function(){var t=o.state,n=t.leftWidth,s=void 0===n?0:n,l=t.rowWidth,p=void 0===l?0:l,h=t.rowState,u=o.state.rightOffset;return 1===h?s:-1===h?-(p-(void 0===u?p:u)):0},o.close=function(){o._animateRow(o._currentOffset(),0)},o.openLeft=function(){var t=o.state.leftWidth,n=void 0===t?0:t;o._animateRow(o._currentOffset(),n)},o.openRight=function(){var t=o.state.rowWidth,n=void 0===t?0:t,s=o.state.rightOffset,l=n-(void 0===s?n:s);o._animateRow(o._currentOffset(),-l)};var p=new c.Animated.Value(0);return o.state={dragX:p,rowTranslation:new c.Animated.Value(0),rowState:0,leftWidth:void 0,rightOffset:void 0,rowWidth:void 0},o._updateAnimatedEvent(t,o.state),o._onGestureEvent=c.Animated.event([{nativeEvent:{translationX:p}}],{useNativeDriver:t.useNativeAnimations}),o}return(0,f.default)(n,t),(0,p.default)(n,[{key:"componentWillUpdate",value:function(t,n){this.props.friction===t.friction&&this.props.overshootLeft===t.overshootLeft&&this.props.overshootRight===t.overshootRight&&this.props.overshootFriction===t.overshootFriction&&this.state.leftWidth===n.leftWidth&&this.state.rightOffset===n.rightOffset&&this.state.rowWidth===n.rowWidth||this._updateAnimatedEvent(t,n)}},{key:"render",value:function(){var t=this,n=this.state.rowState,s=this.props,l=s.children,p=s.renderLeftActions,h=s.renderRightActions,u=p&&v.default.createElement(c.Animated.View,{style:[A.leftActions,{transform:[{translateX:this._leftActionTranslate}]}]},p(this._showLeftAction,this._transX),v.default.createElement(c.View,{onLayout:function(n){var o=n.nativeEvent;return t.setState({leftWidth:o.layout.x})}})),f=h&&v.default.createElement(c.Animated.View,{style:[A.rightActions,{transform:[{translateX:this._rightActionTranslate}]}]},h(this._showRightAction,this._transX),v.default.createElement(c.View,{onLayout:function(n){var o=n.nativeEvent;return t.setState({rightOffset:o.layout.x})}}));return v.default.createElement(w.PanGestureHandler,(0,o.default)({},this.props,{minDeltaX:10,onGestureEvent:this._onGestureEvent,onHandlerStateChange:this._onHandlerStateChange}),v.default.createElement(c.Animated.View,{onLayout:this._onRowLayout,style:[A.container,this.props.containerStyle]},u,f,v.default.createElement(w.TapGestureHandler,{enabled:0!==n,onHandlerStateChange:this._onTapHandlerStateChange},v.default.createElement(c.Animated.View,{pointerEvents:0===n?'auto':'box-only',style:[{transform:[{translateX:this._transX}]},this.props.childrenContainerStyle]},l))))}}]),n})(v.Component);e.default=_,_.defaultProps={friction:1,overshootFriction:1,useNativeAnimations:!0};var A=c.StyleSheet.create({container:{overflow:'hidden'},leftActions:(0,s.default)({},c.StyleSheet.absoluteFillObject,{flexDirection:'row'}),rightActions:(0,s.default)({},c.StyleSheet.absoluteFillObject,{flexDirection:'row-reverse'})})},666733,[1,2,14,51,3,4,5,8,9,11,15,666734]);