"use strict";(self.webpackChunkaplusaudio=self.webpackChunkaplusaudio||[]).push([[760],{7620:function(){},9780:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7795),r=a(9920),i=a(390),s=a(2559),c=function(e){for(var t=e.totalPosts,a=e.postsPerPage,i=e.setCurrentPage,c=e.currentPage,o=[],d=1;d<=Math.ceil(t/a);d++)o.push(d);return(0,s.jsx)(n.xu,{className:"pagination",children:o.map((function(e,t){return(0,s.jsx)(r.z,{onClick:function(){return i(e)},className:e==c?"active":"",children:e},t)}))})},o=i.memo(c)},6351:function(e,t,a){a.d(t,{B:function(){return h},U:function(){return p}});var n=a(390),r=(a(7620),a(7795)),i=a(6248),s=a(7990),c=a(6011),o=a(2361),d=a(4744),u=a(1539),l=a(5400),x=a(2559),p=n.memo((function(e){var t=e.heading,a=(e.description,e.icon),n=e.href,o=e.referLink,d=void 0!==o&&o;e.onClick;return(0,x.jsx)(x.Fragment,{children:d?(0,x.jsx)("a",{href:n,target:"_blank",children:(0,x.jsxs)(r.xu,{maxW:"200px",className:"featueProductsCard1",borderRadius:"6px",h:285,w:"219px",overflow:"hidden",children:[(0,x.jsx)(i.K,{align:"center",p:4,background:"#F8FBFD",rowGap:5,children:(0,x.jsx)(s.E,{loading:"lazy",src:a,w:"179px",height:"196px",objectFit:"contain",alt:t,borderRadius:0})}),(0,x.jsx)(r.xu,{mt:2,children:(0,x.jsx)(c.X,{fontSize:20,fontWeight:600,size:"md",children:t})})]})}):(0,x.jsx)(l.rU,{to:n,children:(0,x.jsxs)(r.xu,{maxW:"200px",className:"featueProductsCard1",borderRadius:"6px",h:285,w:"219px",overflow:"hidden",children:[(0,x.jsx)(i.K,{className:"featueProductsCard1FirstBox",p:4,background:"#F8FBFD",rowGap:5,position:"relative",zIndex:3,children:(0,x.jsx)(s.E,{loading:"lazy",src:a,position:"relative",zIndex:3,w:"179px",height:"196px",objectFit:"contain",alt:t,borderRadius:0})}),(0,x.jsx)(r.xu,{className:"featueProductsCard1SecondBox",w:"full",mt:2,position:"relative",zIndex:5,children:(0,x.jsx)(c.X,{overflow:"visible",height:"fit-content",w:"full",fontSize:18,fontWeight:600,size:"md",position:"relative",zIndex:5,children:t})})]})})})})),h=n.memo((function(e){var t=e.icon;return(0,x.jsxs)(r.xu,{maxW:"219px",className:"featueProductsCard2",borderRadius:"16px",w:"219px",overflow:"hidden",children:[(0,x.jsx)(c.X,{className:"headerfeatureprod",children:"All Categories"}),(0,x.jsxs)(o.x,{className:"textfeatureprod",children:["View All"," ",d.Z.device?(0,x.jsx)(u.mGl,{}):(0,x.jsx)(u.Duv,{})]}),(0,x.jsx)(s.E,{loading:"lazy",src:t,w:"219px",height:"284px",objectFit:"contain",borderRadius:0})]})}))},6760:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var n=a(9439),r=a(6351),i=a(5545),s=a(5400),c=a(4744),o=a(390),d=a(7795),u=a(9920),l=a(6011),x=a(9998),p=a(9780),h=a(1215),m=a(5970),f=a(2559),g=function(){var e,t=(0,i.UO)(),a=t.id,g=t.name,j=(0,o.useState)(1),v=(0,n.Z)(j,2),w=v[0],k=v[1];(0,o.useEffect)((function(){window.scrollTo(0,0)}),[w,g]);var P=h.a.filter((function(e){return e.catid==a}));if(void 0!=a){var b=m.a.filter((function(e){return e.catid==a}));0!=b.length&&void 0!=b[0].catname&&(e=b[0].catname)}return console.log(P,"all products"),(0,f.jsxs)(d.xu,{className:"mainProductsMain",as:"section",p:"20px",flexDirection:"column",maxW:"1220px",m:"auto",mt:"100px",children:[(0,f.jsx)(s.rU,{className:"goBackMain",to:"/",children:(0,f.jsx)(u.z,{loadingText:"Loading",isLoading:!P,children:"Go Back"})}),(0,f.jsx)(l.X,{textAlign:"center",children:0!=P.length&&e?e:"Loading ".concat(e)}),P&&0!==P.length?(0,f.jsx)(d.xu,{display:"flex",gap:"10px",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",children:function(){var e=12*w,t=e-12;return P.slice(t,e)}().map((function(e){return(0,f.jsx)(r.U,{heading:e.pro_name?e.pro_name:"LoudSpeaker",icon:"".concat(c.Z.imageLink,"/").concat(e.pro_image),href:"/productDetails/".concat(e.catid,"/").concat(e.showcaseid,"/").concat(e.pro_name)},e.showcaseid)}))}):(0,f.jsx)(x.O,{height:650,width:"100%"}),P&&0!==P.length?(0,f.jsx)(p.Z,{totalPosts:P.length,postsPerPage:12,setCurrentPage:k,currentPage:w}):(0,f.jsx)(x.O,{height:50,width:"100%"})]})},j=o.memo(g)},5970:function(e){e.exports=JSON.parse('{"a":[{"catid":1,"catname":"Loudspeakers","status":"1","reg_date":"2019-05-20T19:08:46.000Z"},{"catid":2,"catname":"Loudspeaker System","status":"1","reg_date":"2019-05-20T19:08:50.000Z"},{"catid":11,"catname":"Active Speakers","status":"1","reg_date":"2021-02-09T22:51:35.000Z"},{"catid":3,"catname":"Microphones","status":"1","reg_date":"2019-05-23T22:50:02.000Z"},{"catid":4,"catname":"Mixers","status":"1","reg_date":"2019-05-23T22:49:59.000Z"},{"catid":5,"catname":"Amplifiers","status":"1","reg_date":"2019-05-23T22:50:00.000Z"},{"catid":6,"catname":"Compression Drivers","status":"1","reg_date":"2019-05-20T21:41:16.000Z"},{"catid":7,"catname":"Crossover Networks","status":"1","reg_date":"2019-06-04T17:09:15.000Z"},{"catid":8,"catname":"Wallmount Speakers","status":"1","reg_date":"2019-05-20T21:41:17.000Z"},{"catid":7,"catname":"Active Crossover","status":"1","reg_date":"2019-06-04T17:08:27.000Z"},{"catid":10,"catname":"P.A Amplifiers","status":"1","reg_date":"2021-02-09T22:51:35.000Z"}]}')}}]);
//# sourceMappingURL=760.8538888e.chunk.js.map