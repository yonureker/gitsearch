(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{201:function(e,t,r){"use strict";r.d(t,"a",(function(){return he}));var n=r(13),a=r.n(n),o=r(0),c=r.n(o),i=r(200),l=r(204),s=r(28),u=r(72),d=r(54),m=r(159);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b={value:"repositories"},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_OPTION":return p(p({},e),{},{value:t.payload});default:return e}};function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E={text:""},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_QUERY":return h(h({},e),{},{text:t.payload});case"RESET_QUERY":return h(h({},e),{},{text:""});default:return e}};function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w={theme:!1},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_THEME":return v(v({},e),{},{theme:!e.theme});default:return e}},C=Object(u.b)({query:O,searchOption:g,darkMode:k}),P=r(21),x=r(5),T=r(4),D=r(202),R=r(25),M=r(128),S=r(127),I=r(26),L=r(263),F=r(164),B=r.n(F),U=I.a.statusBarHeight;function z(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.darkMode.theme}));return c.a.createElement(T.a,{style:_.container},c.a.createElement(T.a,{style:_.item},c.a.createElement(R.a,null,"Onur Eker")),c.a.createElement(T.a,{style:{flexDirection:"row"}},c.a.createElement(T.a,{style:_.item},c.a.createElement(B.a,{onChange:function(){e({type:"TOGGLE_THEME"})},checked:t,height:26,offColor:"#3D3F47",onColor:"#134484",uncheckedIcon:c.a.createElement(T.a,{style:{flex:1,justifyContent:"center",alignItems:"center",height:"100%"}},c.a.createElement(T.a,null,c.a.createElement(L.a,{color:"yellow",name:"md-sunny",size:18}))," "),checkedIcon:c.a.createElement(T.a,{style:{flex:1,justifyContent:"center",alignItems:"center",height:"100%"}},c.a.createElement(T.a,null,c.a.createElement(L.a,{color:"yellow",name:"md-moon",size:18}))," ")})),c.a.createElement(T.a,{style:_.item},c.a.createElement(S.a,{onPress:function(){return M.a.openURL("https://www.linkedin.com/in/onureker/")}},c.a.createElement(R.a,null,c.a.createElement(L.a,{name:"logo-linkedin",size:14})," LinkedIn"))),c.a.createElement(T.a,{style:_.item},c.a.createElement(S.a,{onPress:function(){return M.a.openURL("https://github.com/yonureker/")}},c.a.createElement(R.a,null,c.a.createElement(L.a,{name:"logo-github",size:14})," Github")))))}var _=x.a.create({container:{width:"100%",alignItems:"center",justifyContent:"space-between",position:"absolute",top:"android"===P.a.OS?U:0,flexDirection:"row",paddingRight:10,paddingLeft:10,backgroundColor:"#F2F2F2"},item:{padding:10,justifyContent:"center",alignItems:"center"}}),Q=r(61);function N(){return c.a.createElement(T.a,{style:W.container},c.a.createElement(Q.a,{source:r(235),style:W.image}))}var W=x.a.create({container:{alignItems:"center",justifyContent:"center"},image:{aspectRatio:5.5,resizeMode:"contain",width:276,height:50}}),q=r(203);function G(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.query.text})),r=Object(s.c)((function(e){return e.darkMode.theme})),n=r?A.darkModeContainer:null,a=r?A.darkModeText:null;return c.a.createElement(q.a,{placeholder:"Search",placeholderTextColor:a,onChangeText:function(t){return e({type:"UPDATE_QUERY",payload:t})},value:t,style:[A.container,n],inputStyle:a,iconColor:r?"white":"black"})}var A=x.a.create({container:{marginTop:20,borderWidth:1,borderColor:"#DFE1E5"},darkModeContainer:{backgroundColor:"black"},darkModeText:{color:"white"}}),H=r(116);function V(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.searchOption.value})),r=Object(s.c)((function(e){return e.darkMode.theme}))?Y.darkModeText:null;return c.a.createElement(H.a.Group,{onValueChange:function(t){e({type:"TOGGLE_OPTION",payload:t}),e({type:"RESET_QUERY"})},value:t},c.a.createElement(T.a,{style:{flexDirection:"row",justifyContent:"space-evenly"}},c.a.createElement(T.a,{style:Y.container},c.a.createElement(H.a,{value:"users",uncheckedColor:"gray",status:"users"===t?"checked":"unchecked"}),c.a.createElement(R.a,{style:r},"Search Users")),c.a.createElement(T.a,{style:Y.container},c.a.createElement(H.a,{value:"repositories",uncheckedColor:"gray",status:"repositories"===t?"checked":"unchecked"}),c.a.createElement(R.a,{style:r},"Search Repositories"))))}var Y=x.a.create({container:{flexDirection:"row",justifyContent:"center",alignItems:"center"},darkModeText:{color:"white"}}),$=r(50),J=r.n($),K=r(132),X=r.n(K),Z=r(197),ee=r(112),te=r(206),re=r(205),ne=r(265);function ae(){var e=X()(["\n  query SearchRepositories($userQuery: String!) {\n    search(query: $userQuery, type: REPOSITORY, first: 20) {\n      edges {\n        node {\n          ... on Repository {\n            id\n            url\n            description\n            stargazerCount\n            nameWithOwner\n            owner {\n              avatarUrl\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return ae=function(){return e},e}function oe(){var e=X()(["\n  query SearchUsers($userQuery: String!) {\n    search(query: $userQuery, type: USER, first: 20) {\n      edges {\n        node {\n          ... on User {\n            avatarUrl\n            id\n            login\n            url\n          }\n        }\n      }\n    }\n  }\n"]);return oe=function(){return e},e}var ce=Object(d.gql)(oe()),ie=Object(d.gql)(ae());function le(){var e=Object(s.c)((function(e){return e.query.text})),t=Object(s.c)((function(e){return e.searchOption.value})),r=Object(s.c)((function(e){return e.darkMode.theme})),n=r?se.darkModeText:null,a=r?se.darkModeBackground:null,i=Object(d.useLazyQuery)(ce,{variables:{userQuery:e}}),l=J()(i,2),u=l[0],m=l[1],f=m.loading,p=m.data,b=Object(d.useLazyQuery)(ie,{variables:{userQuery:e}}),g=J()(b,2),y=g[0],h=g[1],E=h.loading,O=h.data,j=p||O;Object(o.useEffect)((function(){if(e.length>=3){var t=setTimeout((function(){return v()}),1e3);return function(){return clearTimeout(t)}}}),[e]);var v=function(){"users"===t?u():y()};return""===e?null:c.a.createElement(T.a,{style:se.screenContainer},(f||E)&&c.a.createElement(te.a,{style:{padding:10},size:"large",animating:!0}),j&&c.a.createElement(ee.a,{style:{maxHeight:280},keyExtractor:function(e){return e.node.id},data:j.search.edges,indicatorStyle:"black",initialNumToRender:10,renderItem:function(e){var r=e.item;return c.a.createElement(Z.a,{onPress:function(){return re.a(""+r.node.url)}},"users"===t&&c.a.createElement(T.a,{style:se.itemContainer},c.a.createElement(T.a,null,c.a.createElement(Q.a,{source:{uri:""+r.node.avatarUrl},style:se.image})),c.a.createElement(T.a,null,c.a.createElement(R.a,{numberOfLines:1,ellipsizeMode:"tail",style:n},r.node.login))),"repositories"===t&&c.a.createElement(T.a,{style:se.itemContainer},c.a.createElement(T.a,null,c.a.createElement(Q.a,{source:{uri:""+r.node.owner.avatarUrl},style:se.image})),c.a.createElement(T.a,{style:{flex:1}},c.a.createElement(T.a,{style:{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}},c.a.createElement(T.a,{style:{flex:10}},c.a.createElement(R.a,{style:[n,se.boldText],numberOfLines:1,ellipsizeMode:"tail"},r.node.nameWithOwner)),c.a.createElement(T.a,{style:se.starSnippetContainer},c.a.createElement(T.a,{style:[se.starIconBox,a]},c.a.createElement(T.a,null,c.a.createElement(ne.a,{name:"star-border",size:16,color:"gray"}))),c.a.createElement(T.a,{style:{flex:1}},c.a.createElement(R.a,{style:[{alignSelf:"center"},n]},r.node.stargazerCount)))),c.a.createElement(T.a,{style:{marginTop:2}},c.a.createElement(R.a,{numberOfLines:1,ellipsizeMode:"tail",style:n},r.node.description)))))}}))}var se=x.a.create({screenContainer:{maxHeight:300,marginTop:10,borderWidth:1,borderColor:"#E8E8E8",borderTopLeftRadius:10,borderBottomLeftRadius:10,borderRadius:10,overflow:"hidden"},itemContainer:{flexDirection:"row",padding:5,paddingLeft:10,borderBottomWidth:1,borderColor:"#F2F2F2",alignItems:"center"},starSnippetContainer:{borderWidth:1,borderColor:"#D9DBDB",borderRadius:10,height:25,width:110,minWidth:90,flexDirection:"row",alignItems:"center",justifyContent:"center",flex:1},starIconBox:{height:"100%",flexDirection:"row",borderRightWidth:1,borderTopLeftRadius:10,borderBottomLeftRadius:10,borderRightColor:"#D9DBDB",backgroundColor:"#FAFBFC",alignItems:"center",paddingLeft:5,paddingRight:5},image:{height:40,width:40,marginRight:10},darkModeText:{color:"white"},boldText:{fontWeight:"bold"},darkModeBackground:{backgroundColor:"black"}});function ue(){return c.a.createElement(T.a,{style:de.container},c.a.createElement(V,null),c.a.createElement(G,null),c.a.createElement(le,null))}var de=x.a.create({container:{height:150,width:"100%",maxWidth:600,padding:10,marginBottom:150}});function me(){return c.a.createElement(T.a,{style:fe.container},c.a.createElement(T.a,{style:fe.item},c.a.createElement(R.a,null,"Built with React Native Web ",c.a.createElement(L.a,{name:"heart",size:14,color:"red"}))))}var fe=x.a.create({container:{position:"absolute",bottom:0,zIndex:99,elevation:99,backgroundColor:"#F2F2F2",width:"100%"},item:{padding:10,justifyContent:"center",alignItems:"center"}});function pe(){var e=Object(s.c)((function(e){return e.darkMode.theme}))?be.darkModeContainer:null;return c.a.createElement(T.a,{style:[be.container,e]},c.a.createElement(z,null),c.a.createElement(N,null),c.a.createElement(ue,null),"web"===P.a.OS&&c.a.createElement(me,null),c.a.createElement(D.a,{backgroundColor:"#F2F2F2"}))}var be=x.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},darkModeContainer:{backgroundColor:"black"}});function ge(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ge(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function he(){var e=Object(u.c)(C),t=new d.HttpLink({uri:"https://api.github.com/graphql"}),r=Object({NODE_ENV:"production",PUBLIC_URL:"",APP_MANIFEST:{name:"gitsearch",slug:"gitsearch",version:"1.0.0",orientation:"portrait",icon:"./assets/icon.png",splash:{image:"./assets/splash.png",resizeMode:"contain",backgroundColor:"#ffffff"},updates:{fallbackToCacheTimeout:0},assetBundlePatterns:["**/*"],web:{},sdkVersion:"40.0.0",platforms:["ios","android","web"]}}).TOKEN;console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",APP_MANIFEST:{name:"gitsearch",slug:"gitsearch",version:"1.0.0",orientation:"portrait",icon:"./assets/icon.png",splash:{image:"./assets/splash.png",resizeMode:"contain",backgroundColor:"#ffffff"},updates:{fallbackToCacheTimeout:0},assetBundlePatterns:["**/*"],web:{},sdkVersion:"40.0.0",platforms:["ios","android","web"]}}));var n=Object(m.a)((function(e,t){var n=t.headers,a="Bearer "+r;return{headers:ye(ye({},n),{},{authorization:a||null})}})),a=new d.ApolloClient({link:n.concat(t),cache:new d.InMemoryCache});return c.a.createElement(s.a,{store:e},c.a.createElement(l.a,null,c.a.createElement(i.a,{style:{flex:1,backgroundColor:"#F2F2F2"}},c.a.createElement(d.ApolloProvider,{client:a},c.a.createElement(pe,null)))))}r(255).config()},208:function(e,t,r){e.exports=r(258)},235:function(e,t,r){e.exports=r.p+"static/media/logo.f1c5195b.png"}},[[208,1,2]]]);
//# sourceMappingURL=app.3853ff76.chunk.js.map