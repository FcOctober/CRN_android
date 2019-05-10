__d(function(g,r,i,a,m,e,d){var t=r(d[0]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(r(d[1])),s=t(r(d[2])),o=t(r(d[3])),l=t(r(d[4])),u=t(r(d[5])),p=t(r(d[6])),h=t(r(d[7])),c=t(r(d[8])),f=t(r(d[9])),v=r(d[10]),_=r(d[11]),y=r(d[12]),P=r(d[13]),k=r(d[14]),V=t(r(d[15])),S=t(r(d[16])),G=t(r(d[17])),E=t(r(d[18])),H=t(r(d[19])),w=t(r(d[20])),A=r(d[21]),I=v.Dimensions.get('window'),C=I.width,M=I.height,x=!('ios'!==v.Platform.OS||v.Platform.isPad||v.Platform.isTVOS||812!==M&&812!==C&&896!==M&&896!==C),b=v.Easing.inOut(v.Easing.ease),T=['center','left'],R=['fade-in-place','uikit'],O=['toggle','fade','translate'],B=!0,D=function(t){return'ios'===v.Platform.OS?t&&!v.Platform.isPad?32:x?88:64:'android'===v.Platform.OS?56:64},L=(function(t){function y(t){var n;return(0,l.default)(this,y),(n=(0,p.default)(this,(0,h.default)(y).call(this,t)))._immediateIndex=null,n._onFloatingHeaderLayout=function(t){var s=t.nativeEvent.layout.height;s!==n.state.floatingHeaderHeight&&n.setState({floatingHeaderHeight:s})},n._handlePanGestureStateChange=function(t){var s=t.nativeEvent;if(s.oldState===k.State.ACTIVE){if(1===n.positionSwitch.__getValue())return;n._isMotionVertical()?n._handleReleaseVertical(s):n._handleReleaseHorizontal(s)}else s.state===k.State.ACTIVE&&(n.props.onGestureBegin&&n.props.onGestureBegin(),n.positionSwitch.setValue(0))},n._renderCard=function(t){var l,u=n.props,p=u.transitionProps,h=u.shadowEnabled,c=u.cardOverlayEnabled,v=u.transparentCard,_=u.cardStyle,y=n._transitionConfig.screenInterpolator,P=y&&y((0,o.default)({},p,{shadowEnabled:h,cardOverlayEnabled:c,position:n.position,scene:t})),k=t.descriptor.options,S=null!==k.header,G=n._getHeaderMode();return S&&'float'===G&&!k.headerTransparent&&(l={paddingTop:n.state.floatingHeaderHeight}),f.default.createElement(V.default,(0,s.default)({},p,{key:"card_"+t.key,position:n.position,realPosition:p.position,animatedStyle:P,transparent:v,style:[l,_],scene:t}),n._renderInnerScene(t))},n.panGestureRef=f.default.createRef(),n.gestureX=new v.Animated.Value(0),n.gestureY=new v.Animated.Value(0),n.positionSwitch=new v.Animated.Value(1),v.Animated.subtract?n.gestureSwitch=v.Animated.subtract(1,n.positionSwitch):n.gestureSwitch=v.Animated.add(1,v.Animated.multiply(-1,n.positionSwitch)),n.gestureEvent=v.Animated.event([{nativeEvent:{translationX:n.gestureX,translationY:n.gestureY}}],{useNativeDriver:B}),n.state={floatingHeaderHeight:D(t.isLandscape)},n}return(0,c.default)(y,t),(0,u.default)(y,[{key:"_renderHeader",value:function(t,s){var l=t.descriptor.options.header;if(null===l&&'screen'===s)return null;if(f.default.isValidElement(l))return l;var u=l||function(t){return f.default.createElement(S.default,t)},p=this._transitionConfig,h=p.headerLeftInterpolator,c=p.headerTitleInterpolator,v=p.headerRightInterpolator,y=p.headerBackgroundInterpolator,P=this._getHeaderBackgroundTransitionPreset();P&&(y=P);var k=this.props,V=k.transitionProps,G=(0,n.default)(k,["transitionProps"]);return f.default.createElement(_.NavigationProvider,{value:t.descriptor.navigation},u((0,o.default)({},G,V,{position:this.position,scene:t,mode:s,transitionPreset:this._getHeaderTransitionPreset(),layoutPreset:this._getHeaderLayoutPreset(),backTitleVisible:this._getHeaderBackTitleVisible(),leftInterpolator:h,titleInterpolator:c,rightInterpolator:v,backgroundInterpolator:y})))}},{key:"_reset",value:function(t,n){'ios'===v.Platform.OS&&(0,A.supportsImprovedSpringAnimation)()?v.Animated.spring(this.props.transitionProps.position,{toValue:t,stiffness:6e3,damping:100,mass:3,overshootClamping:!0,restDisplacementThreshold:.01,restSpeedThreshold:.01,useNativeDriver:B}).start():v.Animated.timing(this.props.transitionProps.position,{toValue:t,duration:n,easing:b,useNativeDriver:B}).start()}},{key:"_goBack",value:function(t,n){var s=this,o=this.props.transitionProps,l=o.navigation,u=o.position,p=o.scenes,h=Math.max(t-1,0);this._immediateIndex=h;var c=function(){s._immediateIndex=null;var t=p.find(function(t){return t.index===h+1});t&&(l.dispatch(_.NavigationActions.back({key:t.route.key,immediate:!0})),l.dispatch(_.StackActions.completeTransition()))};'ios'===v.Platform.OS&&(0,A.supportsImprovedSpringAnimation)()?v.Animated.spring(u,{toValue:h,stiffness:7e3,damping:300,mass:3,overshootClamping:!0,restDisplacementThreshold:.01,restSpeedThreshold:.01,useNativeDriver:B}).start(c):v.Animated.timing(u,{toValue:h,duration:n,easing:b,useNativeDriver:B}).start(c)}},{key:"_prepareAnimated",value:function(){this.props!==this._prevProps&&(this._prevProps=this.props,this._prepareGesture(),this._preparePosition(),this._prepareTransitionConfig())}},{key:"render",value:function(){this._prepareAnimated();var t=this.props.transitionProps,n=t.navigation.state.index,o=t.scenes,l=this._getHeaderMode(),u=null;if('float'===l){var p=t.scene;u=f.default.createElement(v.View,{style:X.floatingHeader,pointerEvents:"box-none",onLayout:this._onFloatingHeaderLayout},this._renderHeader(p,l))}return f.default.createElement(k.PanGestureHandler,(0,s.default)({},this._gestureActivationCriteria(),{ref:this.panGestureRef,onGestureEvent:this.gestureEvent,onHandlerStateChange:this._handlePanGestureStateChange,enabled:n>0&&this._isGestureEnabled()}),f.default.createElement(v.Animated.View,{style:[X.container,this._transitionConfig.containerStyle]},f.default.createElement(H.default.Provider,{value:this.panGestureRef},f.default.createElement(P.ScreenContainer,{style:X.scenes},o.map(this._renderCard)),u)))}},{key:"componentDidUpdate",value:function(t){var n=t.transitionProps.navigation.state,s=this.props.transitionProps.navigation.state;n.index!==s.index&&this._maybeCancelGesture()}},{key:"_getGestureResponseDistance",value:function(){var t=this.props.transitionProps.scene.descriptor.options.gestureResponseDistance,n=void 0===t?{}:t;return this._isModal()?n.vertical||135:n.horizontal||50}},{key:"_gestureActivationCriteria",value:function(){var t=this.props.transitionProps.layout,n=this._getGestureResponseDistance(),s=this._isMotionInverted();if(this._isMotionVertical()){var o=t.height.__getValue();return{maxDeltaX:15,minOffsetY:s?-5:5,hitSlop:s?{top:-o+n}:{bottom:-o+n}}}var l=-t.width.__getValue()+n;return{minOffsetX:s?-5:5,maxDeltaY:20,hitSlop:s?{left:l}:{right:l}}}},{key:"_isGestureEnabled",value:function(){var t=this.props.transitionProps.scene.descriptor.options.gesturesEnabled;return'boolean'==typeof t?t:'ios'===v.Platform.OS}},{key:"_isMotionVertical",value:function(){return this._isModal()}},{key:"_isModal",value:function(){return'modal'===this.props.mode}},{key:"_isMotionInverted",value:function(){var t=this.props.transitionProps.scene.descriptor.options.gestureDirection;return this._isModal()?'inverted'===t:'string'==typeof t?'inverted'===t:v.I18nManager.isRTL}},{key:"_computeHorizontalGestureValue",value:function(t){var n=t.translationX,s=this.props.transitionProps,o=s.navigation,l=s.layout,u=o.state.index,p=l.width.__getValue(),h=u-(this._isMotionInverted()?-1*n:n)/p;return(0,w.default)(u-1,h,u)}},{key:"_computeVerticalGestureValue",value:function(t){var n=t.translationY,s=this.props.transitionProps,o=s.navigation,l=s.layout,u=o.state.index,p=l.height.__getValue(),h=u-(this._isMotionInverted()?-1*n:n)/p;return(0,w.default)(u-1,h,u)}},{key:"_maybeCancelGesture",value:function(){this.positionSwitch.setValue(1)}},{key:"_prepareGesture",value:function(){if(!this._isGestureEnabled())return 1!==this.positionSwitch.__getValue()&&this.positionSwitch.setValue(1),void(this.gesturePosition=void 0);0!==this.props.transitionProps.layout.width.__getValue()&&0!==this.props.transitionProps.layout.height.__getValue()&&(this._isMotionVertical()?this._prepareGestureVertical():this._prepareGestureHorizontal())}},{key:"_prepareGestureHorizontal",value:function(){var t=this.props.transitionProps.navigation.state.index;this._isMotionInverted()?this.gesturePosition=v.Animated.add(t,v.Animated.divide(this.gestureX,this.props.transitionProps.layout.width)).interpolate({inputRange:[t-1,t],outputRange:[t-1,t],extrapolate:'clamp'}):this.gesturePosition=v.Animated.add(t,v.Animated.multiply(-1,v.Animated.divide(this.gestureX,this.props.transitionProps.layout.width))).interpolate({inputRange:[t-1,t],outputRange:[t-1,t],extrapolate:'clamp'})}},{key:"_prepareGestureVertical",value:function(){var t=this.props.transitionProps.navigation.state.index;this._isMotionInverted()?this.gesturePosition=v.Animated.add(t,v.Animated.divide(this.gestureY,this.props.transitionProps.layout.height)).interpolate({inputRange:[t-1,t],outputRange:[t-1,t],extrapolate:'clamp'}):this.gesturePosition=v.Animated.add(t,v.Animated.multiply(-1,v.Animated.divide(this.gestureY,this.props.transitionProps.layout.height))).interpolate({inputRange:[t-1,t],outputRange:[t-1,t],extrapolate:'clamp'})}},{key:"_handleReleaseHorizontal",value:function(t){var n=this.props.transitionProps,s=n.navigation,o=n.position,l=n.layout,u=s.state.index,p=null==this._immediateIndex?u:this._immediateIndex,h=l.width.__getValue(),c=this._isMotionInverted()?-1:1,f=c*t.translationX,v=c*t.velocityX,_=h/500,y=Math.max(Math.abs(v),_),P=this._isMotionInverted()?(h-f)/y:f/y,k=this._isMotionInverted()?f/y:(h-f)/y,V=this._computeHorizontalGestureValue(t);return o.setValue(V),this.positionSwitch.setValue(1),v<-50?(this.props.onGestureCanceled&&this.props.onGestureCanceled(),void this._reset(p,P)):v>50?(this.props.onGestureEnd&&this.props.onGestureEnd(),void this._goBack(p,k)):void(V<=u-.5?(this.props.onGestureEnd&&this.props.onGestureEnd(),this._goBack(p,k)):(this.props.onGestureCanceled&&this.props.onGestureCanceled(),this._reset(p,P)))}},{key:"_handleReleaseVertical",value:function(t){var n=this.props.transitionProps,s=n.navigation,o=n.position,l=n.layout,u=s.state.index,p=null==this._immediateIndex?u:this._immediateIndex,h=l.height.__getValue(),c=this._isMotionInverted(),f=c?-1:1,v=f*t.translationY,_=f*t.velocityY,y=h/500,P=Math.max(Math.abs(_),y),k=c?(h-v)/P:v/P,V=c?v/P:(h-v)/P,S=this._computeVerticalGestureValue(t);return o.setValue(S),this.positionSwitch.setValue(1),_<-50?(this.props.onGestureCanceled&&this.props.onGestureCanceled(),void this._reset(p,k)):_>50?(this.props.onGestureEnd&&this.props.onGestureEnd(),void this._goBack(p,V)):void(S<=u-.5?(this.props.onGestureEnd&&this.props.onGestureEnd(),this._goBack(p,V)):(this.props.onGestureCanceled&&this.props.onGestureCanceled(),this._reset(p,k)))}},{key:"_getHeaderMode",value:function(){return this.props.headerMode?this.props.headerMode:'ios'!==v.Platform.OS||'modal'===this.props.mode?'screen':'float'}},{key:"_getHeaderBackgroundTransitionPreset",value:function(){var t=this.props.headerBackgroundTransitionPreset;if(t&&O.includes(t)){if('fade'===t)return E.default.forBackgroundWithFade;if('translate'===t)return E.default.forBackgroundWithTranslation;if('toggle'===t)return E.default.forBackgroundWithInactiveHidden}return null}},{key:"_getHeaderLayoutPreset",value:function(){var t=this.props.headerLayoutPreset;return t&&T.includes(t)?t:'ios'!==v.Platform.OS?'left':'center'}},{key:"_getHeaderTransitionPreset",value:function(){if('ios'!==v.Platform.OS||'screen'===this._getHeaderMode())return'fade-in-place';var t=this.props.headerTransitionPreset;return t&&R.includes(t)?t:'fade-in-place'}},{key:"_getHeaderBackTitleVisible",value:function(){var t=this.props.headerBackTitleVisible,n=!('left'===this._getHeaderLayoutPreset()||'ios'!==v.Platform.OS);return'boolean'==typeof t?t:n}},{key:"_renderInnerScene",value:function(t){var n=t.descriptor,s=n.navigation,o=(0,n.getComponent)(),l=this.props.screenProps,u=this._getHeaderMode();return'screen'===u?f.default.createElement(v.View,{style:X.container},f.default.createElement(v.View,{style:X.scenes},f.default.createElement(_.SceneView,{screenProps:l,navigation:s,component:o})),this._renderHeader(t,u)):f.default.createElement(_.SceneView,{screenProps:l,navigation:s,component:o})}},{key:"_prepareTransitionConfig",value:function(){this._transitionConfig=G.default.getTransitionConfig(this.props.transitionConfig,(0,o.default)({},this.props.transitionProps,{position:this.position}),this.props.lastTransitionProps,this._isModal())}},{key:"_preparePosition",value:function(){this.gesturePosition?this.position=v.Animated.add(v.Animated.multiply(this.props.transitionProps.position,this.positionSwitch),v.Animated.multiply(this.gesturePosition,this.gestureSwitch)):this.position=this.props.transitionProps.position}}]),y})(f.default.Component),X=v.StyleSheet.create({container:{flex:1,flexDirection:'column-reverse',overflow:'hidden'},scenes:{flex:1},floatingHeader:{position:'absolute',left:0,top:0,right:0}}),Y=(0,y.withOrientation)(L);e.default=Y},666753,[2,22,14,51,3,4,5,8,9,11,15,666682,666680,666754,666732,666755,666758,666769,666766,666772,666773,666771]);