__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),o=r(d[2]),l=r(d[3]),c=r(d[4]),s=r(d[5]),p=r(d[6]),f=p.StyleSheet,h=p.Text,u=p.View,b=(function(p){function f(){var n,c;t(this,f);for(var s=arguments.length,p=new Array(s),h=0;h<s;h++)p[h]=arguments[h];return(c=o(this,(n=l(f)).call.apply(n,[this].concat(p)))).state={description:null},c}return c(f,p),n(f,[{key:"render",value:function(){var t=this.props.description?s.createElement(h,{style:y.descriptionText},this.props.description):null;return s.createElement(u,{style:y.container},s.createElement(u,{style:y.titleContainer},s.createElement(h,{style:y.titleText},this.props.title),t),s.createElement(u,{style:y.children},this.props.children))}}]),f})(s.Component),y=f.create({container:{borderRadius:3,borderWidth:.5,borderColor:'#d6d7da',backgroundColor:'#ffffff',margin:10,marginVertical:5,overflow:'hidden'},titleContainer:{borderBottomWidth:.5,borderTopLeftRadius:3,borderTopRightRadius:2.5,borderBottomColor:'#d6d7da',backgroundColor:'#f6f7f8',paddingHorizontal:10,paddingVertical:5},titleText:{fontSize:14,fontWeight:'500'},descriptionText:{fontSize:14},children:{margin:10}});m.exports=b},666679,[3,4,5,8,9,11,15]);