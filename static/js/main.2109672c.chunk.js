(this.webpackJsonprickandmorty=this.webpackJsonprickandmorty||[]).push([[0],{109:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(30),r=n.n(i),s=n(53),o=n.n(s),d=n(69),j=n(13),l="https://rickandmortyapi.com/api/",u=n(44),b=n.n(u),h=n(153),p=n(154),O=n(155),x=n(150),m=n(156),g=n(148),f=(n(109),n(1)),v=Object(g.a)((function(){return{paper:{padding:"20px",textAlign:"center",marginTop:"30px",marginLeft:"50px",marginRight:"10px"},backBtn:{marginLeft:"50px"}}})),y=c.a.memo((function(e){var t=e.episodes,n=e.setEpisodesShowData,i=v(),r=Object(a.useState)(void 0),s=Object(j.a)(r,2),o=s[0],d=s[1],u=Object(a.useState)(!0),g=Object(j.a)(u,2),y=g[0],k=g[1],S="".concat(l,"episode/").concat(t.toString()),C=Object(a.useCallback)((function(){b.a.get(S).then((function(e){if(200===e.status){var t=[];e.data.length?e.data.forEach((function(e){t.push(e.name)})):t.push(e.data.name),k(!1),d(t)}})).catch((function(e){"Network Error"!==e.message?e&&e.response&&503===e.response.status&&alert("Service Unavailable, Please Try Again"):alert("Something Went Wrong")}))}),[S]);return Object(a.useEffect)((function(){C()}),[C]),Object(f.jsxs)("div",{children:[Object(f.jsx)(O.a,{variant:"h6",className:"title",children:"Name of the episodes character is featured on."}),Object(f.jsx)(x.a,{variant:"contained",style:{marginLeft:"50px"},onClick:function(){return n(!1)},children:"Back"}),Object(f.jsxs)("div",{children:[o&&Object(f.jsx)(h.a,{container:!0,spacing:3,children:Object(f.jsx)(h.a,{container:!0,item:!0,xs:12,spacing:3,children:o&&o.map((function(e){return t=e,Object(f.jsx)(c.a.Fragment,{children:Object(f.jsx)(h.a,{item:!0,xs:6,sm:6,md:6,lg:3,children:Object(f.jsx)(p.a,{className:i.paper,children:t})})},t);var t}))})}),Object(f.jsx)("div",{className:"loader",children:y&&!o&&Object(f.jsx)(m.a,{})})]})]})})),k=n(157),S=n(158),C=n(159),w=n(160),N=n(149),E=n(161),B=n(162),R=n(163),L=n(164),T=n(165),A=Object(g.a)({rickContainer:{paddingTop:"20px",paddingLeft:"50px",paddingRight:"50px"},cardMedia:{margin:"auto"},carContent:{textAlign:"center"},rickName:{display:"inline",margin:"10px",padding:"20px"},residents:{margin:"auto"},header:{display:"flex",justifyContent:"center",margin:"20px"}}),M=function(){var e=A(),t=Object(a.useState)(0),n=Object(j.a)(t,2),i=n[0],r=n[1],s=Object(a.useState)([]),u=Object(j.a)(s,2),p=u[0],m=u[1],g=Object(a.useState)(!1),v=Object(j.a)(g,2),M=v[0],W=v[1],D=Object(a.useState)(""),F=Object(j.a)(D,2),z=F[0],I=F[1],J=Object(a.useState)([]),P=Object(j.a)(J,2),U=P[0],q=P[1],G=Object(a.useState)(!1),H=Object(j.a)(G,2),K=H[0],Q=H[1],V=c.a.useState(!1),X=Object(j.a)(V,2),Y=X[0],Z=X[1];Object(a.useEffect)((function(){b.a.get("".concat(l,"character")).then((function(e){200===e.status&&(q(e.data.results),W(!1))})).catch((function(e){W(!0),"Network Error"!==e.message?503===e.response.status&&alert("Service Unavailable, Please Try Again"):alert("Something Went Wrong")}))}),[]);var $=function(e){!function(e){var t=[];e.forEach((function(e){t.push(e.substring(e.lastIndexOf("/")+1))})),t&&t.length&&m(t)}(e),Q(!0)},_=function(){var e=Object(d.a)(o.a.mark((function e(t){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:(c=e.sent)&&(null===(n=c.residents)||void 0===n?void 0:n.length)&&(r(c.residents.length),I(c.dimension)),Z(!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){Z(!1)};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(T.a,{position:"static",children:Object(f.jsx)(O.a,{variant:"h4",className:e.header,children:"The Rick and Morty"})}),!M&&!K&&U&&Object(f.jsx)(h.a,{container:!0,spacing:2,className:e.rickContainer,children:U&&U.map((function(t){return function(t){var n=U[t-1],a=n.image,c=n.species,r=n.name,s=n.location,o=n.origin,d=n.episode;return Object(f.jsx)(h.a,{item:!0,xs:12,sm:6,md:6,lg:3,children:Object(f.jsxs)(k.a,{children:[Object(f.jsx)(S.a,{className:e.cardMedia,image:a,style:{width:"200px",height:"200px"}}),Object(f.jsxs)(C.a,{className:e.carContent,children:[Object(f.jsx)(O.a,{gutterBottom:!0,variant:"h5",component:"h2",children:r}),Object(f.jsxs)(O.a,{variant:"subtitle1",gutterBottom:!0,children:["species: ",c]}),Object(f.jsxs)(O.a,{variant:"subtitle1",gutterBottom:!0,children:["Origin: ",o.name]}),Object(f.jsxs)(O.a,{variant:"subtitle1",gutterBottom:!0,children:["Location: ",s.name]})]}),Object(f.jsxs)(w.a,{children:[Object(f.jsx)(x.a,{size:"small",color:"primary",onClick:function(){return $(d)},children:"Episodes"}),Object(f.jsx)(x.a,{size:"small",color:"primary",onClick:function(){return _(s.url)},children:"Residents"}),Object(f.jsxs)(N.a,{open:Y,onClose:ee,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(f.jsx)(E.a,{id:"alert-dialog-title",children:"Residents"}),Object(f.jsx)(B.a,{children:Object(f.jsx)(R.a,{id:"alert-dialog-description",children:Object(f.jsxs)(O.a,{component:"span",variant:"body2",children:["Residents : ",i," ",Object(f.jsx)("br",{}),"Dimension : ",z]})})}),Object(f.jsx)(L.a,{children:Object(f.jsx)(x.a,{onClick:ee,color:"primary",autoFocus:!0,children:"Ok"})})]})]})]})},t)}(t.id)}))}),!M&&K&&Object(f.jsx)(y,{episodes:p,setEpisodesShowData:function(e){Q(e)}}),M&&Object(f.jsx)(O.a,{variant:"h3",style:{display:"flex",justifyContent:"center"},children:"Oops! Something went wrong !!!!!"})]})},W=function(){return Object(f.jsx)("div",{children:Object(f.jsx)(M,{})})},D=n(151),F=n(74),z=Object(F.a)();r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(D.a,{history:z,children:Object(f.jsx)(W,{})})}),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.2109672c.chunk.js.map