(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{cGKp:function(l,n,u){"use strict";u.r(n);var s=u("8Y7J");class t{}var e=u("pMnS"),i=u("oBZk"),r=u("ZZ/e"),o=u("s7LF"),b=u("SVse"),a=u("iInd"),c=u("qXBG");class d{constructor(l,n,u,s,t){this.route=l,this.authService=n,this.router=u,this.alertCtrl=s,this.loadingCtrl=t}ngOnInit(){this.init(),this.route.params.subscribe(l=>{l.token&&(this.token=l.token,this.loadingCtrl.create().then(l=>{l.present(),this.authService.getResetPassword(this.token).subscribe(n=>{l.dismiss(),this.userId=n.userId},n=>{l.dismiss(),this.router.navigateByUrl("/")})}))})}init(){this.credentialsForm=new o.e({password:new o.c(null,[o.n.required,o.n.minLength(8)]),confirmpassword:new o.c(null,[o.n.required])})}onSubmit(){if(!this.credentialsForm.valid)return;if(this.credentialsForm.value.password!==this.credentialsForm.value.confirmpassword)return this.alertCtrl.create({header:"Success",message:"Fields does not match!",buttons:["OK"]}).then(l=>{l.present()});const l=this.credentialsForm.value.password,n=this.credentialsForm.value.confirmpassword;this.loadingCtrl.create({spinner:"dots"}).then(u=>{u.present(),this.authService.postResetPassword(l,n,this.token,this.userId).subscribe(l=>{u.dismiss(),this.credentialsForm.reset(),this.alertCtrl.create({header:"Success",message:l.message,buttons:["OK"]}).then(l=>{l.present(),this.router.navigateByUrl("/login")})},l=>{u.dismiss()})})}}var h=s.qb({encapsulation:0,styles:[["ion-img.afitlogo[_ngcontent-%COMP%]{height:120px;max-height:-webkit-fit-content;max-height:-moz-fit-content;max-height:fit-content}"]],data:{}});function g(l){return s.Nb(0,[(l()(),s.sb(0,0,null,null,11,"ion-header",[],null,null,null,i.bb,i.o)),s.rb(1,49152,null,0,r.A,[s.h,s.k,s.x],null,null),(l()(),s.sb(2,0,null,0,9,"ion-toolbar",[],null,null,null,i.zb,i.M)),s.rb(3,49152,null,0,r.Bb,[s.h,s.k,s.x],null,null),(l()(),s.sb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.Q,i.d)),s.rb(5,49152,null,0,r.k,[s.h,s.k,s.x],null,null),(l()(),s.sb(6,0,null,0,2,"ion-back-button",[["defaultHref","/login"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==s.Eb(l,8).onClick(u)&&t),t}),i.O,i.b)),s.rb(7,49152,null,0,r.f,[s.h,s.k,s.x],{defaultHref:[0,"defaultHref"]},null),s.rb(8,16384,null,0,r.g,[[2,r.hb],r.Hb],{defaultHref:[0,"defaultHref"]},null),(l()(),s.sb(9,0,null,0,2,"ion-title",[],null,null,null,i.yb,i.L)),s.rb(10,49152,null,0,r.zb,[s.h,s.k,s.x],null,null),(l()(),s.Lb(-1,0,["AFIT-IDC"])),(l()(),s.sb(12,0,null,null,78,"ion-content",[],null,null,null,i.X,i.k)),s.rb(13,49152,null,0,r.t,[s.h,s.k,s.x],null,null),(l()(),s.sb(14,0,null,0,76,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==s.Eb(l,16).onSubmit(u)&&t),"reset"===n&&(t=!1!==s.Eb(l,16).onReset()&&t),t}),null,null)),s.rb(15,16384,null,0,o.r,[],null,null),s.rb(16,540672,null,0,o.f,[[8,null],[8,null]],{form:[0,"form"]},null),s.Ib(2048,null,o.a,null,[o.f]),s.rb(18,16384,null,0,o.k,[[4,o.a]],null,null),(l()(),s.sb(19,0,null,null,71,"ion-grid",[["class","form-content"]],null,null,null,i.ab,i.n)),s.rb(20,49152,null,0,r.z,[s.h,s.k,s.x],null,null),(l()(),s.sb(21,0,null,0,69,"ion-row",[],null,null,null,i.ob,i.B)),s.rb(22,49152,null,0,r.ib,[s.h,s.k,s.x],null,null),(l()(),s.sb(23,0,null,0,67,"ion-col",[["class","ion-text-center"],["offset-sm","2"],["size","12"],["size-sm","8"]],null,null,null,i.W,i.j)),s.rb(24,49152,null,0,r.s,[s.h,s.k,s.x],{size:[0,"size"]},null),(l()(),s.sb(25,0,null,0,65,"ion-card",[],null,null,null,i.V,i.e)),s.rb(26,49152,null,0,r.l,[s.h,s.k,s.x],null,null),(l()(),s.sb(27,0,null,0,7,"ion-card-header",[],null,null,null,i.S,i.g)),s.rb(28,49152,null,0,r.n,[s.h,s.k,s.x],null,null),(l()(),s.sb(29,0,null,0,2,"ion-card-title",[],null,null,null,i.U,i.i)),s.rb(30,49152,null,0,r.p,[s.h,s.k,s.x],null,null),(l()(),s.Lb(-1,0,[" Set a new Password "])),(l()(),s.sb(32,0,null,0,2,"ion-card-subtitle",[],null,null,null,i.T,i.h)),s.rb(33,49152,null,0,r.o,[s.h,s.k,s.x],null,null),(l()(),s.Lb(-1,0,[" Air Force Institute of Technology "])),(l()(),s.sb(35,0,null,0,2,"ion-img",[["class","afitlogo"]],null,null,null,i.db,i.q)),s.rb(36,49152,null,0,r.C,[s.h,s.k,s.x],{src:[0,"src"]},null),s.Fb(37,1),(l()(),s.sb(38,0,null,0,52,"ion-card-content",[],null,null,null,i.R,i.f)),s.rb(39,49152,null,0,r.m,[s.h,s.k,s.x],null,null),(l()(),s.sb(40,0,null,0,15,"ion-row",[],null,null,null,i.ob,i.B)),s.rb(41,49152,null,0,r.ib,[s.h,s.k,s.x],null,null),(l()(),s.sb(42,0,null,0,13,"ion-col",[["offset-sm","3"],["size-sm","6"]],null,null,null,i.W,i.j)),s.rb(43,49152,null,0,r.s,[s.h,s.k,s.x],null,null),(l()(),s.sb(44,0,null,0,11,"ion-item",[["class","roundedInput"]],null,null,null,i.ib,i.s)),s.rb(45,49152,null,0,r.G,[s.h,s.k,s.x],null,null),(l()(),s.sb(46,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.jb,i.w)),s.rb(47,49152,null,0,r.M,[s.h,s.k,s.x],{position:[0,"position"]},null),(l()(),s.Lb(-1,0,["New Password"])),(l()(),s.sb(49,0,null,0,6,"ion-input",[["formControlName","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==s.Eb(l,50)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==s.Eb(l,50)._handleInputEvent(u.target)&&t),t}),i.eb,i.r)),s.rb(50,16384,null,0,r.Mb,[s.k],null,null),s.Ib(1024,null,o.h,(function(l){return[l]}),[r.Mb]),s.rb(52,671744,null,0,o.d,[[3,o.a],[8,null],[8,null],[6,o.h],[2,o.q]],{name:[0,"name"]},null),s.Ib(2048,null,o.i,null,[o.d]),s.rb(54,16384,null,0,o.j,[[4,o.i]],null,null),s.rb(55,49152,null,0,r.F,[s.h,s.k,s.x],{type:[0,"type"]},null),(l()(),s.sb(56,0,null,0,15,"ion-row",[],null,null,null,i.ob,i.B)),s.rb(57,49152,null,0,r.ib,[s.h,s.k,s.x],null,null),(l()(),s.sb(58,0,null,0,13,"ion-col",[["offset-sm","3"],["size-sm","6"]],null,null,null,i.W,i.j)),s.rb(59,49152,null,0,r.s,[s.h,s.k,s.x],null,null),(l()(),s.sb(60,0,null,0,11,"ion-item",[["class","roundedInput"]],null,null,null,i.ib,i.s)),s.rb(61,49152,null,0,r.G,[s.h,s.k,s.x],null,null),(l()(),s.sb(62,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.jb,i.w)),s.rb(63,49152,null,0,r.M,[s.h,s.k,s.x],{position:[0,"position"]},null),(l()(),s.Lb(-1,0,["Confirm Password"])),(l()(),s.sb(65,0,null,0,6,"ion-input",[["formControlName","confirmpassword"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==s.Eb(l,66)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==s.Eb(l,66)._handleInputEvent(u.target)&&t),t}),i.eb,i.r)),s.rb(66,16384,null,0,r.Mb,[s.k],null,null),s.Ib(1024,null,o.h,(function(l){return[l]}),[r.Mb]),s.rb(68,671744,null,0,o.d,[[3,o.a],[8,null],[8,null],[6,o.h],[2,o.q]],{name:[0,"name"]},null),s.Ib(2048,null,o.i,null,[o.d]),s.rb(70,16384,null,0,o.j,[[4,o.i]],null,null),s.rb(71,49152,null,0,r.F,[s.h,s.k,s.x],{type:[0,"type"]},null),(l()(),s.sb(72,0,null,0,6,"ion-row",[],null,null,null,i.ob,i.B)),s.rb(73,49152,null,0,r.ib,[s.h,s.k,s.x],null,null),(l()(),s.sb(74,0,null,0,4,"ion-col",[["offset-sm","3"],["size-sm","6"]],null,null,null,i.W,i.j)),s.rb(75,49152,null,0,r.s,[s.h,s.k,s.x],null,null),(l()(),s.sb(76,0,null,0,2,"ion-button",[["color","primary"],["expand","block"]],null,[[null,"click"]],(function(l,n,u){var s=!0;return"click"===n&&(s=!1!==l.component.onSubmit()&&s),s}),i.P,i.c)),s.rb(77,49152,null,0,r.j,[s.h,s.k,s.x],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(l()(),s.Lb(-1,0,[" Change Password "])),(l()(),s.sb(79,0,null,0,11,"ion-row",[],null,null,null,i.ob,i.B)),s.rb(80,49152,null,0,r.ib,[s.h,s.k,s.x],null,null),(l()(),s.sb(81,0,null,0,9,"ion-col",[["offset-sm","3"],["size-sm","6"]],null,null,null,i.W,i.j)),s.rb(82,49152,null,0,r.s,[s.h,s.k,s.x],null,null),(l()(),s.sb(83,0,null,0,7,"div",[["class","info-detail"]],null,null,null,null,null)),(l()(),s.sb(84,0,null,null,6,"ion-label",[["class","info-detail"]],null,null,null,i.jb,i.w)),s.rb(85,49152,null,0,r.M,[s.h,s.k,s.x],null,null),(l()(),s.Lb(-1,0,[" Leave page? "])),(l()(),s.sb(87,0,null,0,3,"a",[["routerLink","/login"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==s.Eb(l,88).onClick(u)&&t),"click"===n&&(t=!1!==s.Eb(l,89).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),s.rb(88,737280,null,0,r.Kb,[b.j,r.Hb,s.k,a.m,[2,a.n]],null,null),s.rb(89,671744,null,0,a.o,[a.m,a.a,b.j],{routerLink:[0,"routerLink"]},null),(l()(),s.Lb(-1,null,["Sign in"]))],(function(l,n){var u=n.component;l(n,7,0,"/login"),l(n,8,0,"/login"),l(n,16,0,u.credentialsForm),l(n,24,0,"12");var s=l(n,37,0,"../../../assets/icon/AFITlogo.gif");l(n,36,0,s),l(n,47,0,"floating"),l(n,52,0,"password"),l(n,55,0,"password"),l(n,63,0,"floating"),l(n,68,0,"confirmpassword"),l(n,71,0,"password"),l(n,77,0,"primary",!u.credentialsForm.valid,"block"),l(n,88,0),l(n,89,0,"/login")}),(function(l,n){l(n,14,0,s.Eb(n,18).ngClassUntouched,s.Eb(n,18).ngClassTouched,s.Eb(n,18).ngClassPristine,s.Eb(n,18).ngClassDirty,s.Eb(n,18).ngClassValid,s.Eb(n,18).ngClassInvalid,s.Eb(n,18).ngClassPending),l(n,49,0,s.Eb(n,54).ngClassUntouched,s.Eb(n,54).ngClassTouched,s.Eb(n,54).ngClassPristine,s.Eb(n,54).ngClassDirty,s.Eb(n,54).ngClassValid,s.Eb(n,54).ngClassInvalid,s.Eb(n,54).ngClassPending),l(n,65,0,s.Eb(n,70).ngClassUntouched,s.Eb(n,70).ngClassTouched,s.Eb(n,70).ngClassPristine,s.Eb(n,70).ngClassDirty,s.Eb(n,70).ngClassValid,s.Eb(n,70).ngClassInvalid,s.Eb(n,70).ngClassPending),l(n,87,0,s.Eb(n,89).target,s.Eb(n,89).href)}))}function p(l){return s.Nb(0,[(l()(),s.sb(0,0,null,null,1,"app-reset-password",[],null,null,null,g,h)),s.rb(1,114688,null,0,d,[a.a,c.a,a.m,r.a,r.Fb],null,null)],(function(l,n){l(n,1,0)}),null)}var m=s.ob("app-reset-password",d,p,{},{},[]);class f{}u.d(n,"ResetPasswordPageModuleNgFactory",(function(){return k}));var k=s.pb(t,[],(function(l){return s.Bb([s.Cb(512,s.j,s.ab,[[8,[e.a,m]],[3,s.j],s.v]),s.Cb(4608,b.o,b.n,[s.s,[2,b.B]]),s.Cb(4608,o.p,o.p,[]),s.Cb(4608,r.b,r.b,[s.x,s.g]),s.Cb(4608,r.Gb,r.Gb,[r.b,s.j,s.p]),s.Cb(4608,r.Jb,r.Jb,[r.b,s.j,s.p]),s.Cb(4608,o.b,o.b,[]),s.Cb(1073742336,b.c,b.c,[]),s.Cb(1073742336,o.o,o.o,[]),s.Cb(1073742336,o.g,o.g,[]),s.Cb(1073742336,r.Db,r.Db,[]),s.Cb(1073742336,a.p,a.p,[[2,a.u],[2,a.m]]),s.Cb(1073742336,f,f,[]),s.Cb(1073742336,o.m,o.m,[]),s.Cb(1073742336,t,t,[]),s.Cb(1024,a.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);