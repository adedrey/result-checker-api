(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{nrle:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),i=function(){return function(){}}(),o=u("pMnS"),e=u("oBZk"),b=u("ZZ/e"),r=u("ZYCi"),a=u("Ip0R"),s=u("gIcY"),c=u("qXBG"),g=u("2WpN"),d=function(){function l(l,n,u,t){this.authService=l,this.loadingController=n,this.router=u,this._location=t,this.authService.getAuthStatus()&&this.router.navigateByUrl("/forum")}return l.prototype.ngOnInit=function(){this.init()},l.prototype.init=function(){this.loginForm=new s.e({matric_no:new s.c(null,[s.n.required]),password:new s.c(null,[s.n.required])})},l.prototype.onSubmit=function(){var l=this;this.loginForm.valid&&this.loadingController.create({spinner:"dots",message:"Logging in..."}).then((function(n){n.present(),l.authService.login(l.loginForm.value).pipe(Object(g.a)((function(){n.dismiss()}))).subscribe((function(n){l.loginForm.reset(),l.router.navigateByUrl("/undergraduate/home")}))}))},l}(),h=t.tb({encapsulation:0,styles:[[".info-detail[_ngcontent-%COMP%]{-webkit-box-align:center;align-items:center;align-content:center;text-align:center}.form-content[_ngcontent-%COMP%]{margin:50px}a[_ngcontent-%COMP%]:link{text-decoration:none}ion-img.afitlogo[_ngcontent-%COMP%]{height:120px;max-height:-webkit-fit-content;max-height:-moz-fit-content;max-height:fit-content}"]],data:{}});function p(l){return t.Qb(0,[(l()(),t.vb(0,0,null,null,14,"ion-header",[],null,null,null,e.bb,e.o)),t.ub(1,49152,null,0,b.A,[t.h,t.k,t.A],null,null),(l()(),t.vb(2,0,null,0,12,"ion-toolbar",[],null,null,null,e.zb,e.M)),t.ub(3,49152,null,0,b.Bb,[t.h,t.k,t.A],null,null),(l()(),t.vb(4,0,null,0,7,"ion-buttons",[["slot","primary"]],null,null,null,e.Q,e.d)),t.ub(5,49152,null,0,b.k,[t.h,t.k,t.A],null,null),(l()(),t.vb(6,0,null,0,5,"ion-button",[["routerLink","/open-ticket"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Hb(l,8).onClick()&&i),"click"===n&&(i=!1!==t.Hb(l,9).onClick(u)&&i),i}),e.P,e.c)),t.ub(7,49152,null,0,b.j,[t.h,t.k,t.A],null,null),t.ub(8,16384,null,0,r.n,[r.m,r.a,[8,null],t.F,t.k],{routerLink:[0,"routerLink"]},null),t.ub(9,737280,null,0,b.Kb,[a.j,b.Hb,t.k,r.m,[2,r.n]],null,null),(l()(),t.vb(10,0,null,0,1,"ion-icon",[["name","help"],["slot","icon-only"]],null,null,null,e.cb,e.p)),t.ub(11,49152,null,0,b.B,[t.h,t.k,t.A],{name:[0,"name"]},null),(l()(),t.vb(12,0,null,0,2,"ion-title",[],null,null,null,e.yb,e.L)),t.ub(13,49152,null,0,b.zb,[t.h,t.k,t.A],null,null),(l()(),t.Ob(-1,0,["AFIT-IDC"])),(l()(),t.vb(15,0,null,null,78,"ion-content",[],null,null,null,e.X,e.k)),t.ub(16,49152,null,0,b.t,[t.h,t.k,t.A],null,null),(l()(),t.vb(17,0,null,0,76,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var i=!0;return"submit"===n&&(i=!1!==t.Hb(l,19).onSubmit(u)&&i),"reset"===n&&(i=!1!==t.Hb(l,19).onReset()&&i),i}),null,null)),t.ub(18,16384,null,0,s.r,[],null,null),t.ub(19,540672,null,0,s.f,[[8,null],[8,null]],{form:[0,"form"]},null),t.Lb(2048,null,s.a,null,[s.f]),t.ub(21,16384,null,0,s.k,[[4,s.a]],null,null),(l()(),t.vb(22,0,null,null,71,"ion-grid",[["class","form-content"]],null,null,null,e.ab,e.n)),t.ub(23,49152,null,0,b.z,[t.h,t.k,t.A],null,null),(l()(),t.vb(24,0,null,0,69,"ion-row",[],null,null,null,e.ob,e.B)),t.ub(25,49152,null,0,b.ib,[t.h,t.k,t.A],null,null),(l()(),t.vb(26,0,null,0,67,"ion-col",[["class","ion-text-center"],["offset-sm","2"],["size","12"],["size-sm","8"]],null,null,null,e.W,e.j)),t.ub(27,49152,null,0,b.s,[t.h,t.k,t.A],{size:[0,"size"]},null),(l()(),t.vb(28,0,null,0,65,"ion-card",[],null,null,null,e.V,e.e)),t.ub(29,49152,null,0,b.l,[t.h,t.k,t.A],null,null),(l()(),t.vb(30,0,null,0,7,"ion-card-header",[],null,null,null,e.S,e.g)),t.ub(31,49152,null,0,b.n,[t.h,t.k,t.A],null,null),(l()(),t.vb(32,0,null,0,2,"ion-card-title",[],null,null,null,e.U,e.i)),t.ub(33,49152,null,0,b.p,[t.h,t.k,t.A],null,null),(l()(),t.Ob(-1,0,[" Student Portal "])),(l()(),t.vb(35,0,null,0,2,"ion-card-subtitle",[],null,null,null,e.T,e.h)),t.ub(36,49152,null,0,b.o,[t.h,t.k,t.A],null,null),(l()(),t.Ob(-1,0,[" Air Force Institute of Technology "])),(l()(),t.vb(38,0,null,0,2,"ion-img",[["class","afitlogo"]],null,null,null,e.db,e.q)),t.ub(39,49152,null,0,b.C,[t.h,t.k,t.A],{src:[0,"src"]},null),t.Ib(40,1),(l()(),t.vb(41,0,null,0,52,"ion-card-content",[],null,null,null,e.R,e.f)),t.ub(42,49152,null,0,b.m,[t.h,t.k,t.A],null,null),(l()(),t.vb(43,0,null,0,15,"ion-row",[],null,null,null,e.ob,e.B)),t.ub(44,49152,null,0,b.ib,[t.h,t.k,t.A],null,null),(l()(),t.vb(45,0,null,0,13,"ion-col",[["offset-sm","3"],["size-sm","6"]],null,null,null,e.W,e.j)),t.ub(46,49152,null,0,b.s,[t.h,t.k,t.A],null,null),(l()(),t.vb(47,0,null,0,11,"ion-item",[["class","roundedInput"]],null,null,null,e.ib,e.s)),t.ub(48,49152,null,0,b.G,[t.h,t.k,t.A],null,null),(l()(),t.vb(49,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,e.jb,e.w)),t.ub(50,49152,null,0,b.M,[t.h,t.k,t.A],{position:[0,"position"]},null),(l()(),t.Ob(-1,0,["Matriculation Number"])),(l()(),t.vb(52,0,null,0,6,"ion-input",[["formControlName","matric_no"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==t.Hb(l,53)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==t.Hb(l,53)._handleInputEvent(u.target)&&i),i}),e.eb,e.r)),t.ub(53,16384,null,0,b.Mb,[t.k],null,null),t.Lb(1024,null,s.h,(function(l){return[l]}),[b.Mb]),t.ub(55,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.q]],{name:[0,"name"]},null),t.Lb(2048,null,s.i,null,[s.d]),t.ub(57,16384,null,0,s.j,[[4,s.i]],null,null),t.ub(58,49152,null,0,b.F,[t.h,t.k,t.A],{type:[0,"type"]},null),(l()(),t.vb(59,0,null,0,15,"ion-row",[],null,null,null,e.ob,e.B)),t.ub(60,49152,null,0,b.ib,[t.h,t.k,t.A],null,null),(l()(),t.vb(61,0,null,0,13,"ion-col",[["offset-sm","3"],["size-sm","6"]],null,null,null,e.W,e.j)),t.ub(62,49152,null,0,b.s,[t.h,t.k,t.A],null,null),(l()(),t.vb(63,0,null,0,11,"ion-item",[["class","roundedInput"]],null,null,null,e.ib,e.s)),t.ub(64,49152,null,0,b.G,[t.h,t.k,t.A],null,null),(l()(),t.vb(65,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,e.jb,e.w)),t.ub(66,49152,null,0,b.M,[t.h,t.k,t.A],{position:[0,"position"]},null),(l()(),t.Ob(-1,0,["Password"])),(l()(),t.vb(68,0,null,0,6,"ion-input",[["formControlName","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==t.Hb(l,69)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==t.Hb(l,69)._handleInputEvent(u.target)&&i),i}),e.eb,e.r)),t.ub(69,16384,null,0,b.Mb,[t.k],null,null),t.Lb(1024,null,s.h,(function(l){return[l]}),[b.Mb]),t.ub(71,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.q]],{name:[0,"name"]},null),t.Lb(2048,null,s.i,null,[s.d]),t.ub(73,16384,null,0,s.j,[[4,s.i]],null,null),t.ub(74,49152,null,0,b.F,[t.h,t.k,t.A],{type:[0,"type"]},null),(l()(),t.vb(75,0,null,0,6,"ion-row",[],null,null,null,e.ob,e.B)),t.ub(76,49152,null,0,b.ib,[t.h,t.k,t.A],null,null),(l()(),t.vb(77,0,null,0,4,"ion-col",[["offset-sm","3"],["size-sm","6"]],null,null,null,e.W,e.j)),t.ub(78,49152,null,0,b.s,[t.h,t.k,t.A],null,null),(l()(),t.vb(79,0,null,0,2,"ion-button",[["color","primary"],["expand","block"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onSubmit()&&t),t}),e.P,e.c)),t.ub(80,49152,null,0,b.j,[t.h,t.k,t.A],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(l()(),t.Ob(-1,0,["NEXT"])),(l()(),t.vb(82,0,null,0,11,"ion-row",[],null,null,null,e.ob,e.B)),t.ub(83,49152,null,0,b.ib,[t.h,t.k,t.A],null,null),(l()(),t.vb(84,0,null,0,9,"ion-col",[["offset-sm","3"],["size-sm","6"]],null,null,null,e.W,e.j)),t.ub(85,49152,null,0,b.s,[t.h,t.k,t.A],null,null),(l()(),t.vb(86,0,null,0,7,"div",[["class","info-detail"]],null,null,null,null,null)),(l()(),t.vb(87,0,null,null,6,"ion-label",[["class","info-detail"]],null,null,null,e.jb,e.w)),t.ub(88,49152,null,0,b.M,[t.h,t.k,t.A],null,null),(l()(),t.Ob(-1,0,[" Forgotten Password? "])),(l()(),t.vb(90,0,null,0,3,"a",[["routerLink","/forgot-password"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Hb(l,91).onClick(u)&&i),"click"===n&&(i=!1!==t.Hb(l,92).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&i),i}),null,null)),t.ub(91,737280,null,0,b.Kb,[a.j,b.Hb,t.k,r.m,[2,r.n]],null,null),t.ub(92,671744,null,0,r.o,[r.m,r.a,a.j],{routerLink:[0,"routerLink"]},null),(l()(),t.Ob(-1,null,["Reset."]))],(function(l,n){var u=n.component;l(n,8,0,"/open-ticket"),l(n,9,0),l(n,11,0,"help"),l(n,19,0,u.loginForm),l(n,27,0,"12");var t=l(n,40,0,"../assets/icon/AFITlogo.gif");l(n,39,0,t),l(n,50,0,"floating"),l(n,55,0,"matric_no"),l(n,58,0,"text"),l(n,66,0,"floating"),l(n,71,0,"password"),l(n,74,0,"password"),l(n,80,0,"primary",!u.loginForm.valid,"block"),l(n,91,0),l(n,92,0,"/forgot-password")}),(function(l,n){l(n,17,0,t.Hb(n,21).ngClassUntouched,t.Hb(n,21).ngClassTouched,t.Hb(n,21).ngClassPristine,t.Hb(n,21).ngClassDirty,t.Hb(n,21).ngClassValid,t.Hb(n,21).ngClassInvalid,t.Hb(n,21).ngClassPending),l(n,52,0,t.Hb(n,57).ngClassUntouched,t.Hb(n,57).ngClassTouched,t.Hb(n,57).ngClassPristine,t.Hb(n,57).ngClassDirty,t.Hb(n,57).ngClassValid,t.Hb(n,57).ngClassInvalid,t.Hb(n,57).ngClassPending),l(n,68,0,t.Hb(n,73).ngClassUntouched,t.Hb(n,73).ngClassTouched,t.Hb(n,73).ngClassPristine,t.Hb(n,73).ngClassDirty,t.Hb(n,73).ngClassValid,t.Hb(n,73).ngClassInvalid,t.Hb(n,73).ngClassPending),l(n,90,0,t.Hb(n,92).target,t.Hb(n,92).href)}))}function v(l){return t.Qb(0,[(l()(),t.vb(0,0,null,null,1,"app-login",[],null,null,null,p,h)),t.ub(1,114688,null,0,d,[c.a,b.Fb,r.m,a.i],null,null)],(function(l,n){l(n,1,0)}),null)}var m=t.rb("app-login",d,v,{},{},[]),f=function(){return function(){}}();u.d(n,"LoginPageModuleNgFactory",(function(){return k}));var k=t.sb(i,[],(function(l){return t.Eb([t.Fb(512,t.j,t.db,[[8,[o.a,m]],[3,t.j],t.y]),t.Fb(4608,a.o,a.n,[t.v,[2,a.B]]),t.Fb(4608,s.p,s.p,[]),t.Fb(4608,b.b,b.b,[t.A,t.g]),t.Fb(4608,b.Gb,b.Gb,[b.b,t.j,t.r]),t.Fb(4608,b.Jb,b.Jb,[b.b,t.j,t.r]),t.Fb(4608,s.b,s.b,[]),t.Fb(1073742336,a.c,a.c,[]),t.Fb(1073742336,s.o,s.o,[]),t.Fb(1073742336,s.g,s.g,[]),t.Fb(1073742336,b.Db,b.Db,[]),t.Fb(1073742336,r.p,r.p,[[2,r.u],[2,r.m]]),t.Fb(1073742336,f,f,[]),t.Fb(1073742336,s.m,s.m,[]),t.Fb(1073742336,i,i,[]),t.Fb(1024,r.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);