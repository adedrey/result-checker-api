(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{aBKi:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class i{}var s=u("pMnS"),e=u("SVse"),b=u("oBZk"),c=u("ZZ/e"),o=u("mrSG"),r=u("VSgI");class a{constructor(l){this.resultService=l,this.resultData=[],this.totalUnits=0,this.emptySpace="  "}ngOnInit(){this.resultService.getResults().subscribe(l=>{this.resultData=this.getCummulative(l.results),console.log(this.resultData),this.userData=l.userData})}printResult(){return o.b(this,void 0,void 0,(function*(){window.print()}))}calculateCreditPoint(l,n){return l*n}getCummulative(l){let n=0,u=0,t=0;return l.map(l=>({session:l.session,semester:l.semester,totalCreditPoints:l.totalCreditPoints,totalUnits:l.totalUnits,data:l.data,ctnu:n+=l.ctnu,ctcp:u+=l.ctcp,ctnup:t+=l.ctnup}))}getUnit(){}}var p=t.qb({encapsulation:0,styles:[[".info[_ngcontent-%COMP%]{text-align:center;font-weight:700;padding:0,;margin:0}.result[_ngcontent-%COMP%]{padding-right:7em}tr.noBorder[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:0}ul[_ngcontent-%COMP%]{display:-webkit-box;display:flex;list-style:none}"]],data:{}});function m(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"th",[["scope","row"]],null,null,null,null,null)),(l()(),t.Lb(2,null,["",""])),(l()(),t.sb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(4,null,["",""])),(l()(),t.sb(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(6,null,["",""])),(l()(),t.sb(7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(8,null,["",""])),(l()(),t.sb(9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(10,null,["",""]))],null,(function(l,n){l(n,2,0,null==n.context.$implicit?null:n.context.$implicit.course_code),l(n,4,0,null==n.context.$implicit?null:n.context.$implicit.title),l(n,6,0,null==n.context.$implicit?null:n.context.$implicit.unit),l(n,8,0,null==n.context.$implicit?null:n.context.$implicit.result.grade),l(n,10,0,(null==n.context.$implicit?null:n.context.$implicit.result.point)*(null==n.context.$implicit?null:n.context.$implicit.unit))}))}function d(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,48,"div",[["class","table-responsive-sm"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,45,"table",[["class","table table-sm table-striped table-sm"]],null,null,null,null,null)),(l()(),t.sb(2,0,null,null,20,"thead",[],null,null,null,null,null)),(l()(),t.sb(3,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.sb(4,0,null,null,2,"th",[["colspan","2"]],null,null,null,null,null)),(l()(),t.Lb(5,null,["PROGRAM: ",""])),t.Hb(6,1),(l()(),t.sb(7,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(8,null,["ACADEMIC YEAR: ",""])),(l()(),t.sb(9,0,null,null,2,"th",[["colspan","2"]],null,null,null,null,null)),(l()(),t.Lb(10,null,["SEMESTER: ",""])),t.Hb(11,1),(l()(),t.sb(12,0,null,null,10,"tr",[["class","thead-light"]],null,null,null,null,null)),(l()(),t.sb(13,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["COURSE CODE"])),(l()(),t.sb(15,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["COURSE NAME"])),(l()(),t.sb(17,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["UNIT"])),(l()(),t.sb(19,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["GRADE"])),(l()(),t.sb(21,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["CREDIT POINT"])),(l()(),t.hb(16777216,null,null,1,null,m)),t.rb(24,278528,null,0,e.l,[t.N,t.K,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.sb(25,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),t.sb(26,0,null,null,7,"td",[["colspan","4"]],null,null,null,null,null)),(l()(),t.sb(27,0,null,null,2,"span",[["class","result"]],null,null,null,null,null)),(l()(),t.Lb(28,null,["\xa0 GPA\xa0\xa0:\xa0\xa0\xa0\xa0",""])),t.Hb(29,2),(l()(),t.sb(30,0,null,null,1,"span",[["class","result"]],null,null,null,null,null)),(l()(),t.Lb(31,null,["SEM. CH. \xa0\xa0:\xa0\xa0\xa0\xa0",""])),(l()(),t.sb(32,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Lb(33,null,["SEM. CR. \xa0\xa0:\xa0\xa0\xa0\xa0",""])),(l()(),t.sb(34,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),t.sb(35,0,null,null,11,"tr",[["class","noBorder"]],null,null,null,null,null)),(l()(),t.sb(36,0,null,null,9,"td",[["colspan","4"]],null,null,null,null,null)),(l()(),t.sb(37,0,null,null,2,"span",[["class","result"]],null,null,null,null,null)),(l()(),t.Lb(38,null,["CGPA :\xa0\xa0\xa0\xa0",""])),t.Hb(39,2),(l()(),t.sb(40,0,null,null,1,"span",[["class","result"]],null,null,null,null,null)),(l()(),t.Lb(41,null,["CUM. CH \xa0\xa0:\xa0\xa0\xa0\xa0",""])),(l()(),t.sb(42,0,null,null,1,"span",[["class","result"]],null,null,null,null,null)),(l()(),t.Lb(43,null,["CUM. CR. \xa0\xa0:\xa0\xa0\xa0\xa0",""])),(l()(),t.sb(44,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Lb(45,null,["CUM. CH. PAS. \xa0\xa0:\xa0\xa0\xa0\xa0",""])),(l()(),t.sb(46,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),t.sb(47,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.sb(48,0,null,null,0,"br",[],null,null,null,null,null))],(function(l,n){l(n,24,0,n.context.$implicit.data)}),(function(l,n){var u=n.component,i=t.Mb(n,5,0,l(n,6,0,t.Eb(n.parent,0),null==u.userData?null:u.userData.department));l(n,5,0,i),l(n,8,0,null==n.context.$implicit?null:n.context.$implicit.session);var s=t.Mb(n,10,0,l(n,11,0,t.Eb(n.parent,0),null==n.context.$implicit?null:n.context.$implicit.semester));l(n,10,0,s);var e=t.Mb(n,28,0,l(n,29,0,t.Eb(n.parent,1),(null==n.context.$implicit?null:n.context.$implicit.totalCreditPoints)/(null==n.context.$implicit?null:n.context.$implicit.totalUnits),"1.2-2"));l(n,28,0,e),l(n,31,0,null==n.context.$implicit?null:n.context.$implicit.totalUnits),l(n,33,0,null==n.context.$implicit?null:n.context.$implicit.totalCreditPoints);var b=t.Mb(n,38,0,l(n,39,0,t.Eb(n.parent,1),(null==n.context.$implicit?null:n.context.$implicit.ctcp)/(null==n.context.$implicit?null:n.context.$implicit.ctnu),"1.2-2"));l(n,38,0,b),l(n,41,0,null==n.context.$implicit?null:n.context.$implicit.ctnu),l(n,43,0,null==n.context.$implicit?null:n.context.$implicit.ctcp),l(n,45,0,null==n.context.$implicit?null:n.context.$implicit.ctnup)}))}function x(l){return t.Nb(0,[t.Gb(0,e.u,[]),t.Gb(0,e.f,[t.s]),(l()(),t.sb(2,0,null,null,17,"ion-header",[],null,null,null,b.bb,b.o)),t.rb(3,49152,null,0,c.A,[t.h,t.k,t.x],null,null),(l()(),t.sb(4,0,null,0,15,"ion-toolbar",[],null,null,null,b.zb,b.M)),t.rb(5,49152,null,0,c.Bb,[t.h,t.k,t.x],null,null),(l()(),t.sb(6,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.Q,b.d)),t.rb(7,49152,null,0,c.k,[t.h,t.k,t.x],null,null),(l()(),t.sb(8,0,null,0,2,"ion-back-button",[["defaultHref","/undergraduate/home"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Eb(l,10).onClick(u)&&i),i}),b.O,b.b)),t.rb(9,49152,null,0,c.f,[t.h,t.k,t.x],{defaultHref:[0,"defaultHref"]},null),t.rb(10,16384,null,0,c.g,[[2,c.hb],c.Hb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.sb(11,0,null,0,5,"ion-buttons",[["slot","primary"]],null,null,null,b.Q,b.d)),t.rb(12,49152,null,0,c.k,[t.h,t.k,t.x],null,null),(l()(),t.sb(13,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.printResult()&&t),t}),b.P,b.c)),t.rb(14,49152,null,0,c.j,[t.h,t.k,t.x],null,null),(l()(),t.sb(15,0,null,0,1,"ion-icon",[["name","print"]],null,null,null,b.cb,b.p)),t.rb(16,49152,null,0,c.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.sb(17,0,null,0,2,"ion-title",[],null,null,null,b.yb,b.L)),t.rb(18,49152,null,0,c.zb,[t.h,t.k,t.x],null,null),(l()(),t.Lb(-1,0,["Integrated Data Centre"])),(l()(),t.sb(20,0,null,null,22,"ion-content",[],null,null,null,b.X,b.k)),t.rb(21,49152,null,0,c.t,[t.h,t.k,t.x],null,null),(l()(),t.sb(22,0,null,0,20,"ion-grid",[],null,null,null,b.ab,b.n)),t.rb(23,49152,null,0,c.z,[t.h,t.k,t.x],null,null),(l()(),t.sb(24,0,null,0,18,"ion-row",[],null,null,null,b.ob,b.B)),t.rb(25,49152,null,0,c.ib,[t.h,t.k,t.x],null,null),(l()(),t.sb(26,0,null,0,16,"ion-col",[["offset-sm","2"],["size","12"],["size-sm","8"]],null,null,null,b.W,b.j)),t.rb(27,49152,null,0,c.s,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.sb(28,0,null,0,14,"div",[],null,null,null,null,null)),(l()(),t.sb(29,0,null,null,11,"div",[],null,null,null,null,null)),(l()(),t.sb(30,0,null,null,1,"h2",[["class","info"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["AIR FORCE INSTITUTE OF TECHNOLOGY"])),(l()(),t.sb(32,0,null,null,2,"h2",[["class","info"]],null,null,null,null,null)),(l()(),t.Lb(33,null,["DEPARTMENT OF ",""])),t.Hb(34,1),(l()(),t.sb(35,0,null,null,2,"h2",[["class","info"]],null,null,null,null,null)),(l()(),t.Lb(36,null,["",""])),t.Hb(37,1),(l()(),t.sb(38,0,null,null,2,"h2",[["class","info"]],null,null,null,null,null)),(l()(),t.Lb(39,null,["",""])),t.Hb(40,1),(l()(),t.hb(16777216,null,null,1,null,d)),t.rb(42,278528,null,0,e.l,[t.N,t.K,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,9,0,"/undergraduate/home"),l(n,10,0,"/undergraduate/home"),l(n,16,0,"print"),l(n,27,0,"12"),l(n,42,0,u.resultData)}),(function(l,n){var u=n.component,i=t.Mb(n,33,0,l(n,34,0,t.Eb(n,0),null==u.userData?null:u.userData.department));l(n,33,0,i);var s=t.Mb(n,36,0,l(n,37,0,t.Eb(n,0),null==u.userData?null:u.userData.name));l(n,36,0,s);var e=t.Mb(n,39,0,l(n,40,0,t.Eb(n,0),null==u.userData?null:u.userData.matric_no));l(n,39,0,e)}))}function h(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,1,"app-result",[],null,null,null,x,p)),t.rb(1,114688,null,0,a,[r.a],null,null)],(function(l,n){l(n,1,0)}),null)}var C=t.ob("app-result",a,h,{},{},[]),f=u("s7LF"),g=u("iInd");class ${}u.d(n,"ResultPageModuleNgFactory",(function(){return L}));var L=t.pb(i,[],(function(l){return t.Bb([t.Cb(512,t.j,t.ab,[[8,[s.a,C]],[3,t.j],t.v]),t.Cb(4608,e.o,e.n,[t.s,[2,e.B]]),t.Cb(4608,f.p,f.p,[]),t.Cb(4608,c.b,c.b,[t.x,t.g]),t.Cb(4608,c.Gb,c.Gb,[c.b,t.j,t.p]),t.Cb(4608,c.Jb,c.Jb,[c.b,t.j,t.p]),t.Cb(1073742336,e.c,e.c,[]),t.Cb(1073742336,f.o,f.o,[]),t.Cb(1073742336,f.g,f.g,[]),t.Cb(1073742336,c.Db,c.Db,[]),t.Cb(1073742336,g.p,g.p,[[2,g.u],[2,g.m]]),t.Cb(1073742336,$,$,[]),t.Cb(1073742336,i,i,[]),t.Cb(1024,g.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);