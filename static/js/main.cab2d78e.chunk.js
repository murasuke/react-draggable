(this["webpackJsonpreact-draggable"]=this["webpackJsonpreact-draggable"]||[]).push([[0],{27:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(7),r=n.n(a),o=(n(27),n(3)),l=n(8),s=n(5),u=n(1),d={},j=function(e,t){switch(t.type){case"CHANGE_VALUE":return Object(o.a)(Object(o.a)({},e),{},Object(s.a)({},t.id,t.value));case"CLEAR_VALUE":return Object(o.a)(Object(o.a)({},e),{},Object(s.a)({},t.id,""));default:return e}},b=i.a.createContext({}),h=function(e){var t=e.children,n=Object(c.useReducer)(j,d),i=Object(l.a)(n,2),a=i[0],r=i[1];return Object(u.jsx)(b.Provider,{value:{state:a,dispatch:r},children:t})},O=n(22),x=n.n(O),p=function(e){var t=Object(c.useContext)(b).dispatch;return Object(u.jsx)("textarea",{id:e.componentName,style:{width:"calc(100% - 6px)",height:"calc(100% - 6px)"},onChange:function(e){t({type:"CHANGE_VALUE",id:e.target.id,value:e.target.value})}})},y=function(e){return Object(u.jsx)("span",{style:{verticalAlign:"middle"},children:e.componentName})},g={border:"solid",backgroundColor:"#EEEEEE",textAlign:"center"},w=function(e){var t=Object(c.useContext)(b).state,n=Object(c.useState)(),i=Object(l.a)(n,2),a=i[0],r=i[1],o=e.childsLayouts,s=e.cols,d=e.rowHeight,j=e.width;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(x.a,{className:"layout",layout:o,cols:s,rowHeight:d,width:j,onLayoutChange:function(e){console.log(JSON.stringify(e,null,"\t")),console.log(JSON.stringify(t,null,"\t")),r(JSON.stringify(t,null,"\t")+"\n"+JSON.stringify(e,null,"\t"))},children:o.map((function(e){return"label"===(null===e||void 0===e?void 0:e.type)?Object(u.jsx)("div",{style:g,children:Object(u.jsx)(y,{componentName:e.i.toUpperCase()})},e.i):Object(u.jsx)("div",{style:g,children:Object(u.jsx)(p,{componentName:e.i.toUpperCase()})},e.i)}))}),Object(u.jsx)("pre",{children:a})]})},f=(n(44),[{i:"\u30bf\u30a4\u30c8\u30eb1",x:0,y:0,w:2,h:1,type:"label"},{i:"b",x:2,y:0,w:6,h:1},{i:"c",x:2,y:0,w:6,h:2},{i:"\u30bf\u30a4\u30c8\u30eb2",x:0,y:2,w:2,h:2,type:"label"},{i:"e",x:0,y:9,w:5,h:5},{i:"f",x:5,y:11,w:3,h:3}]),v=function(){var e={cols:20,rowHeight:30,width:window.parent.screen.width,childsLayouts:f};return Object(u.jsx)(h,{children:Object(u.jsx)(w,Object(o.a)({},e))})};n(45);r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.cab2d78e.chunk.js.map