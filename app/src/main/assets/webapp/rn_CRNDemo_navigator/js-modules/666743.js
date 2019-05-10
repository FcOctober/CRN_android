__d(function(g,r,i,a,m,e,d){var t=r(d[0]),n=r(d[1]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r(d[2])),l=n(r(d[3])),s=n(r(d[4])),u=n(r(d[5])),p=n(r(d[6])),c=n(r(d[7])),w=t(r(d[8])),h=n(r(d[9])),f=r(d[10]),v=r(d[11]),_=.05,S='Idle',y='Dragging',V='Settling',A=(function(t){function n(t,o){var s;(0,l.default)(this,n),(s=(0,u.default)(this,(0,p.default)(n).call(this,t,o)))._accessibilityIsModalView=w.default.createRef(),s._pointerEventsView=w.default.createRef(),s._panGestureHandler=w.default.createRef(),s._drawerShown=!1,s._updateAnimatedEvent=function(t,n){var o=t.drawerPosition,l=t.drawerWidth,u=t.drawerType,p=n.dragX,c=n.touchX,w=n.drawerTranslation,h=n.containerWidth,v=p,_=c;'left'!==o?(v=f.Animated.multiply(new f.Animated.Value(-1),p),_=f.Animated.add(new f.Animated.Value(h),f.Animated.multiply(new f.Animated.Value(-1),c)),c.setValue(h)):c.setValue(0);var S=v;if('front'===u){var y=f.Animated.add(_,f.Animated.multiply(new f.Animated.Value(-1),v)).interpolate({inputRange:[l-1,l,l+1],outputRange:[0,0,1]});S=f.Animated.add(v,y)}s._openValue=f.Animated.add(S,w).interpolate({inputRange:[0,l],outputRange:[0,1],extrapolate:'clamp'}),s._onGestureEvent=f.Animated.event([{nativeEvent:{translationX:p,x:c}}],{useNativeDriver:t.useNativeAnimations})},s._handleContainerLayout=function(t){var n=t.nativeEvent;s.setState({containerWidth:n.layout.width})},s._emitStateChanged=function(t,n){s.props.onDrawerStateChanged&&s.props.onDrawerStateChanged(t,n)},s._openingHandlerStateChange=function(t){var n=t.nativeEvent;n.oldState===v.State.ACTIVE?s._handleRelease(n):n.state===v.State.ACTIVE&&(s._emitStateChanged(y,!1),'on-drag'===s.props.keyboardDismissMode&&f.Keyboard.dismiss(),s.props.hideStatusBar&&f.StatusBar.setHidden(!0,s.props.statusBarAnimation||'slide'))},s._onTapHandlerStateChange=function(t){var n=t.nativeEvent;s._drawerShown&&n.oldState===v.State.ACTIVE&&'locked-open'!==s.props.drawerLockMode&&s.closeDrawer()},s._handleRelease=function(t){var n=s.props,o=n.drawerWidth,l=n.drawerPosition,u=n.drawerType,p=s.state.containerWidth,c=t.translationX,w=t.velocityX,h=t.x;'left'!==l&&(c=-c,h=p-h,w=-w);var f=h-c,v=0;'front'===u&&(v=f>o?f-o:0);var S=c+v+(s._drawerShown?o:0);S+_*w>o/2?s._animateDrawer(S,o,w):s._animateDrawer(S,0,w)},s._updateShowing=function(t){s._drawerShown=t,s._accessibilityIsModalView.current&&s._accessibilityIsModalView.current.setNativeProps({accessibilityViewIsModal:t}),s._pointerEventsView.current&&s._pointerEventsView.current.setNativeProps({pointerEvents:t?'auto':'none'});var n=s.props,o=n.drawerPosition,l=n.minSwipeDistance,u=n.edgeWidth,p='left'===o,c=(p?1:-1)*(s._drawerShown?-1:1),w=p?{left:0,width:t?void 0:u}:{right:0,width:t?void 0:u};s._panGestureHandler.current&&s._panGestureHandler.current.setNativeProps({hitSlop:w,activeOffsetX:c*l})},s._animateDrawer=function(t,n,o){if(s.state.dragX.setValue(0),s.state.touchX.setValue('left'===s.props.drawerPosition?0:s.state.containerWidth),void 0!==t){var l=t;s.props.useNativeAnimations&&(t<n&&o>0?l=Math.min(t+o/60,n):t>n&&o<0&&(l=Math.max(t+o/60,n))),s.state.drawerTranslation.setValue(l)}var u=0!==n;s._updateShowing(u),s._emitStateChanged(V,u),s.props.hideStatusBar&&f.StatusBar.setHidden(u,s.props.statusBarAnimation||'slide'),f.Animated.spring(s.state.drawerTranslation,{velocity:o,bounciness:0,toValue:n,useNativeDriver:s.props.useNativeAnimations}).start(function(t){t.finished&&(s._emitStateChanged(S,u),u?s.props.onDrawerOpen&&s.props.onDrawerOpen():s.props.onDrawerClose&&s.props.onDrawerClose())})},s.openDrawer=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s._animateDrawer(void 0,s.props.drawerWidth,t.velocity?t.velocity:0),s.forceUpdate()},s.closeDrawer=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s._animateDrawer(void 0,0,t.velocity?t.velocity:0),s.forceUpdate()},s._renderOverlay=function(){(0,h.default)(s._openValue,'should be set');var t={opacity:s._openValue.interpolate({inputRange:[0,1],outputRange:[0,.7],extrapolate:'clamp'}),backgroundColor:s.props.overlayColor};return w.default.createElement(v.TapGestureHandler,{onHandlerStateChange:s._onTapHandlerStateChange},w.default.createElement(f.Animated.View,{pointerEvents:s._drawerShown?'auto':'none',ref:s._pointerEventsView,style:[C.overlay,t]}))},s._renderDrawer=function(){var t,n=s.props,o=n.drawerBackgroundColor,l=n.drawerWidth,u=n.drawerPosition,p=n.drawerType,c=n.drawerContainerStyle,v=n.contentContainerStyle,_='left'===u,S='back'!==p,y='front'!==p,V=f.I18nManager.isRTL?_:!_,A={backgroundColor:o,width:l},E=s._openValue;((0,h.default)(E,'should be set'),y)&&(t={transform:[{translateX:E.interpolate({inputRange:[0,1],outputRange:_?[0,l]:[0,-l],extrapolate:'clamp'})}]});var b=0;if(S){var D=_?-l:l;b=E.interpolate({inputRange:[0,1],outputRange:[D,0],extrapolate:'clamp'})}var R={transform:[{translateX:b}],flexDirection:V?'row-reverse':'row'};return w.default.createElement(f.Animated.View,{style:C.main,onLayout:s._handleContainerLayout},w.default.createElement(f.Animated.View,{style:['front'===p?C.containerOnBack:C.containerInFront,t,v]},'function'==typeof s.props.children?s.props.children(s._openValue):s.props.children,s._renderOverlay()),w.default.createElement(f.Animated.View,{pointerEvents:"box-none",ref:s._accessibilityIsModalView,accessibilityViewIsModal:s._drawerShown,style:[C.drawerContainer,R,c]},w.default.createElement(f.View,{style:A},s.props.renderNavigationView(s._openValue))))},s._setPanGestureRef=function(t){s._panGestureHandler.current=t,s.props.onGestureRef&&s.props.onGestureRef(t)};var c=new f.Animated.Value(0),A=new f.Animated.Value(0),E=new f.Animated.Value(0);return s.state={dragX:c,touchX:A,drawerTranslation:E,containerWidth:0},s._updateAnimatedEvent(t,s.state),s}return(0,c.default)(n,t),(0,s.default)(n,[{key:"componentWillUpdate",value:function(t,n){this.props.drawerPosition===t.drawerPosition&&this.props.drawerWidth===t.drawerWidth&&this.props.drawerType===t.drawerType&&this.state.containerWidth===n.containerWidth||this._updateAnimatedEvent(t,n)}},{key:"render",value:function(){var t=this.props,n=t.drawerPosition,o=t.drawerLockMode,l=t.edgeWidth,s=t.minSwipeDistance,u='left'===n,p=(u?1:-1)*(this._drawerShown?-1:1),c=u?{left:0,width:this._drawerShown?void 0:l}:{right:0,width:this._drawerShown?void 0:l};return w.default.createElement(v.PanGestureHandler,{ref:this._setPanGestureRef,hitSlop:c,activeOffsetX:p*s,failOffsetY:[-15,15],onGestureEvent:this._onGestureEvent,onHandlerStateChange:this._openingHandlerStateChange,enabled:'locked-closed'!==o&&'locked-open'!==o},this._renderDrawer())}}]),n})(w.Component);e.default=A,A.defaultProps={drawerWidth:200,drawerPosition:'left',useNativeAnimations:!0,drawerType:'front',edgeWidth:20,minSwipeDistance:3,overlayColor:'black',drawerLockMode:'unlocked'},A.positions={Left:'left',Right:'right'};var C=f.StyleSheet.create({drawerContainer:(0,o.default)({},f.StyleSheet.absoluteFillObject,{zIndex:1001,flexDirection:'row'}),containerInFront:(0,o.default)({},f.StyleSheet.absoluteFillObject,{zIndex:1002}),containerOnBack:(0,o.default)({},f.StyleSheet.absoluteFillObject),main:{flex:1,zIndex:0,overflow:'hidden'},overlay:(0,o.default)({},f.StyleSheet.absoluteFillObject,{zIndex:1e3})})},666743,[1,2,51,3,4,5,8,9,11,16,15,666734]);