(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{R6Mn:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),b=u("pMnS"),a=u("oBZk"),o=u("ZZ/e"),i=u("ZYCi"),r=u("Ip0R"),c=u("BHnd"),d=u("y4qS"),s=u("bujt"),m=u("UodH"),f=u("lLAP"),p=u("wFw1"),h=u("pIm3"),v=u("dJrM"),k=u("seP3"),g=u("Wf4p"),_=u("Fzqc"),F=u("dWZg"),H=u("b716"),M=u("gIcY"),L=u("/VYK"),A=u("b1+6"),C=u("4epT"),w=u("ys2I"),O=function(){function l(l,n,u){this.adminService=l,this.router=n,this.loadingCtrl=u,this.assignments=[],this.displayedColumns=["department","course_code","staff_no","users","submission_date","posted","action"]}return l.prototype.ngOnInit=function(){var l=this;this.adminService.getAssignments(),this.adminService.getAssignmentChanged().subscribe((function(n){l.assignments=n,l.dataSource=new c.l(l.assignments),l.dataSource.paginator=l.paginator}))},l.prototype.applyFilter=function(l){this.dataSource.filter=l.trim().toLowerCase()},l.prototype.onView=function(l){this.router.navigateByUrl("/admin/assignments/"+l)},l.prototype.onDelete=function(l){var n=this;this.loadingCtrl.create({spinner:"dots"}).then((function(u){u.present(),n.adminService.deleteAssignment(l),u.dismiss()}))},l}(),y=e.tb({encapsulation:0,styles:[["table[_ngcontent-%COMP%]{width:100%}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}"]],data:{}});function S(l){return e.Qb(0,[(l()(),e.vb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),e.ub(1,16384,null,0,c.e,[d.d,e.k],null,null),(l()(),e.Ob(-1,null,["Department"]))],null,null)}function N(l){return e.Qb(0,[(l()(),e.vb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.ub(1,16384,null,0,c.a,[d.d,e.k],null,null),(l()(),e.Ob(2,null,["",""]))],null,(function(l,n){l(n,2,0,null==n.context.$implicit?null:n.context.$implicit.department)}))}function D(l){return e.Qb(0,[(l()(),e.vb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),e.ub(1,16384,null,0,c.e,[d.d,e.k],null,null),(l()(),e.Ob(-1,null,["Course"]))],null,null)}function E(l){return e.Qb(0,[(l()(),e.vb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.ub(1,16384,null,0,c.a,[d.d,e.k],null,null),(l()(),e.Ob(2,null,["",""]))],null,(function(l,n){l(n,2,0,null==n.context.$implicit?null:n.context.$implicit.course_code)}))}function j(l){return e.Qb(0,[(l()(),e.vb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),e.ub(1,16384,null,0,c.e,[d.d,e.k],null,null),(l()(),e.Ob(-1,null,["Staff Number"]))],null,null)}function x(l){return e.Qb(0,[(l()(),e.vb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.ub(1,16384,null,0,c.a,[d.d,e.k],null,null),(l()(),e.Ob(2,null,["",""]))],null,(function(l,n){l(n,2,0,null==n.context.$implicit?null:n.context.$implicit.staff_no)}))}function Q(l){return e.Qb(0,[(l()(),e.vb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),e.ub(1,16384,null,0,c.e,[d.d,e.k],null,null),(l()(),e.Ob(-1,null,["Users"]))],null,null)}function R(l){return e.Qb(0,[(l()(),e.vb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.ub(1,16384,null,0,c.a,[d.d,e.k],null,null),(l()(),e.Ob(2,null,["",""]))],null,(function(l,n){l(n,2,0,null==n.context.$implicit?null:n.context.$implicit.assignments.users.length)}))}function P(l){return e.Qb(0,[(l()(),e.vb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),e.ub(1,16384,null,0,c.e,[d.d,e.k],null,null),(l()(),e.Ob(-1,null,["Posted on"]))],null,null)}function T(l){return e.Qb(0,[(l()(),e.vb(0,0,null,null,3,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.ub(1,16384,null,0,c.a,[d.d,e.k],null,null),(l()(),e.Ob(2,null,["",""])),e.Kb(3,1)],null,(function(l,n){var u=e.Pb(n,2,0,l(n,3,0,e.Hb(n.parent,0),null==n.context.$implicit?null:n.context.$implicit.updatedAt));l(n,2,0,u)}))}function $(l){return e.Qb(0,[(l()(),e.vb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),e.ub(1,16384,null,0,c.e,[d.d,e.k],null,null),(l()(),e.Ob(-1,null,["Deadline"]))],null,null)}function I(l){return e.Qb(0,[(l()(),e.vb(0,0,null,null,3,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.ub(1,16384,null,0,c.a,[d.d,e.k],null,null),(l()(),e.Ob(2,null,["",""])),e.Kb(3,1)],null,(function(l,n){var u=e.Pb(n,2,0,l(n,3,0,e.Hb(n.parent,0),null==n.context.$implicit?null:n.context.$implicit.submission_date));l(n,2,0,u)}))}function z(l){return e.Qb(0,[(l()(),e.vb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),e.ub(1,16384,null,0,c.e,[d.d,e.k],null,null),(l()(),e.Ob(-1,null,["Action"]))],null,null)}function U(l){return e.Qb(0,[(l()(),e.vb(0,0,null,null,7,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.ub(1,16384,null,0,c.a,[d.d,e.k],null,null),(l()(),e.vb(2,0,null,null,2,"a",[["color","primary"],["mat-button",""]],[[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,u){var t=!0,b=l.component;return"click"===n&&(t=!1!==e.Hb(l,3)._haltDisabledEvents(u)&&t),"click"===n&&(t=!1!==b.onView(l.context.$implicit._id)&&t),t}),s.c,s.a)),e.ub(3,180224,null,0,m.a,[f.d,e.k,[2,p.a]],{color:[0,"color"]},null),(l()(),e.Ob(-1,0,["View"])),(l()(),e.vb(5,0,null,null,2,"button",[["color","warn"],["mat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onDelete(l.context.$implicit._id)&&e),e}),s.d,s.b)),e.ub(6,180224,null,0,m.b,[e.k,f.d,[2,p.a]],{color:[0,"color"]},null),(l()(),e.Ob(-1,0,["DELETE"]))],(function(l,n){l(n,3,0,"primary"),l(n,6,0,"warn")}),(function(l,n){l(n,2,0,e.Hb(n,3).disabled?-1:e.Hb(n,3).tabIndex||0,e.Hb(n,3).disabled||null,e.Hb(n,3).disabled.toString(),"NoopAnimations"===e.Hb(n,3)._animationMode),l(n,5,0,e.Hb(n,6).disabled||null,"NoopAnimations"===e.Hb(n,6)._animationMode)}))}function B(l){return e.Qb(0,[(l()(),e.vb(0,0,null,null,2,"tr",[["class","mat-header-row"],["mat-header-row",""],["role","row"]],null,null,null,h.d,h.a)),e.Lb(6144,null,d.k,null,[c.g]),e.ub(2,49152,null,0,c.g,[],null,null)],null,null)}function q(l){return e.Qb(0,[(l()(),e.vb(0,0,null,null,2,"tr",[["class","mat-row"],["mat-row",""],["role","row"]],null,null,null,h.e,h.b)),e.Lb(6144,null,d.m,null,[c.i]),e.ub(2,49152,null,0,c.i,[],null,null)],null,null)}function J(l){return e.Qb(0,[e.Jb(0,r.e,[e.v]),e.Mb(402653184,1,{paginator:0}),(l()(),e.vb(2,0,null,null,13,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,v.b,v.a)),e.ub(3,7520256,null,9,k.b,[e.k,e.h,[2,g.j],[2,_.b],[2,k.a],F.a,e.A,[2,p.a]],null,null),e.Mb(603979776,2,{_controlNonStatic:0}),e.Mb(335544320,3,{_controlStatic:0}),e.Mb(603979776,4,{_labelChildNonStatic:0}),e.Mb(335544320,5,{_labelChildStatic:0}),e.Mb(603979776,6,{_placeholderChild:0}),e.Mb(603979776,7,{_errorChildren:1}),e.Mb(603979776,8,{_hintChildren:1}),e.Mb(603979776,9,{_prefixChildren:1}),e.Mb(603979776,10,{_suffixChildren:1}),(l()(),e.vb(13,0,null,1,2,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["placeholder","Filter"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"keyup"],[null,"blur"],[null,"focus"],[null,"input"]],(function(l,n,u){var t=!0,b=l.component;return"blur"===n&&(t=!1!==e.Hb(l,14)._focusChanged(!1)&&t),"focus"===n&&(t=!1!==e.Hb(l,14)._focusChanged(!0)&&t),"input"===n&&(t=!1!==e.Hb(l,14)._onInput()&&t),"keyup"===n&&(t=!1!==b.applyFilter(u.target.value)&&t),t}),null,null)),e.ub(14,999424,null,0,H.a,[e.k,F.a,[8,null],[2,M.l],[2,M.f],g.d,[8,null],L.a,e.A],{placeholder:[0,"placeholder"]},null),e.Lb(2048,[[2,4],[3,4]],k.c,null,[H.a]),(l()(),e.vb(16,0,null,null,103,"table",[["class","mat-elevation-z8 mat-table"],["mat-table",""]],null,null,null,h.f,h.c)),e.Lb(6144,null,d.o,null,[c.k]),e.ub(18,2342912,null,4,c.k,[e.t,e.h,e.k,[8,null],[2,_.b],r.d,F.a],{dataSource:[0,"dataSource"]},null),e.Mb(603979776,11,{_contentColumnDefs:1}),e.Mb(603979776,12,{_contentRowDefs:1}),e.Mb(603979776,13,{_contentHeaderRowDefs:1}),e.Mb(603979776,14,{_contentFooterRowDefs:1}),(l()(),e.vb(23,0,null,null,12,null,null,null,null,null,null,null)),e.Lb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.ub(25,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Mb(603979776,15,{cell:0}),e.Mb(603979776,16,{headerCell:0}),e.Mb(603979776,17,{footerCell:0}),e.Lb(2048,[[11,4]],d.d,null,[c.c]),(l()(),e.kb(0,null,null,2,null,S)),e.ub(31,16384,null,0,c.f,[e.N],null,null),e.Lb(2048,[[16,4]],d.j,null,[c.f]),(l()(),e.kb(0,null,null,2,null,N)),e.ub(34,16384,null,0,c.b,[e.N],null,null),e.Lb(2048,[[15,4]],d.b,null,[c.b]),(l()(),e.vb(36,0,null,null,12,null,null,null,null,null,null,null)),e.Lb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.ub(38,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Mb(603979776,18,{cell:0}),e.Mb(603979776,19,{headerCell:0}),e.Mb(603979776,20,{footerCell:0}),e.Lb(2048,[[11,4]],d.d,null,[c.c]),(l()(),e.kb(0,null,null,2,null,D)),e.ub(44,16384,null,0,c.f,[e.N],null,null),e.Lb(2048,[[19,4]],d.j,null,[c.f]),(l()(),e.kb(0,null,null,2,null,E)),e.ub(47,16384,null,0,c.b,[e.N],null,null),e.Lb(2048,[[18,4]],d.b,null,[c.b]),(l()(),e.vb(49,0,null,null,12,null,null,null,null,null,null,null)),e.Lb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.ub(51,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Mb(603979776,21,{cell:0}),e.Mb(603979776,22,{headerCell:0}),e.Mb(603979776,23,{footerCell:0}),e.Lb(2048,[[11,4]],d.d,null,[c.c]),(l()(),e.kb(0,null,null,2,null,j)),e.ub(57,16384,null,0,c.f,[e.N],null,null),e.Lb(2048,[[22,4]],d.j,null,[c.f]),(l()(),e.kb(0,null,null,2,null,x)),e.ub(60,16384,null,0,c.b,[e.N],null,null),e.Lb(2048,[[21,4]],d.b,null,[c.b]),(l()(),e.vb(62,0,null,null,12,null,null,null,null,null,null,null)),e.Lb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.ub(64,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Mb(603979776,24,{cell:0}),e.Mb(603979776,25,{headerCell:0}),e.Mb(603979776,26,{footerCell:0}),e.Lb(2048,[[11,4]],d.d,null,[c.c]),(l()(),e.kb(0,null,null,2,null,Q)),e.ub(70,16384,null,0,c.f,[e.N],null,null),e.Lb(2048,[[25,4]],d.j,null,[c.f]),(l()(),e.kb(0,null,null,2,null,R)),e.ub(73,16384,null,0,c.b,[e.N],null,null),e.Lb(2048,[[24,4]],d.b,null,[c.b]),(l()(),e.vb(75,0,null,null,12,null,null,null,null,null,null,null)),e.Lb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.ub(77,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Mb(603979776,27,{cell:0}),e.Mb(603979776,28,{headerCell:0}),e.Mb(603979776,29,{footerCell:0}),e.Lb(2048,[[11,4]],d.d,null,[c.c]),(l()(),e.kb(0,null,null,2,null,P)),e.ub(83,16384,null,0,c.f,[e.N],null,null),e.Lb(2048,[[28,4]],d.j,null,[c.f]),(l()(),e.kb(0,null,null,2,null,T)),e.ub(86,16384,null,0,c.b,[e.N],null,null),e.Lb(2048,[[27,4]],d.b,null,[c.b]),(l()(),e.vb(88,0,null,null,12,null,null,null,null,null,null,null)),e.Lb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.ub(90,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Mb(603979776,30,{cell:0}),e.Mb(603979776,31,{headerCell:0}),e.Mb(603979776,32,{footerCell:0}),e.Lb(2048,[[11,4]],d.d,null,[c.c]),(l()(),e.kb(0,null,null,2,null,$)),e.ub(96,16384,null,0,c.f,[e.N],null,null),e.Lb(2048,[[31,4]],d.j,null,[c.f]),(l()(),e.kb(0,null,null,2,null,I)),e.ub(99,16384,null,0,c.b,[e.N],null,null),e.Lb(2048,[[30,4]],d.b,null,[c.b]),(l()(),e.vb(101,0,null,null,12,null,null,null,null,null,null,null)),e.Lb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.ub(103,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Mb(603979776,33,{cell:0}),e.Mb(603979776,34,{headerCell:0}),e.Mb(603979776,35,{footerCell:0}),e.Lb(2048,[[11,4]],d.d,null,[c.c]),(l()(),e.kb(0,null,null,2,null,z)),e.ub(109,16384,null,0,c.f,[e.N],null,null),e.Lb(2048,[[34,4]],d.j,null,[c.f]),(l()(),e.kb(0,null,null,2,null,U)),e.ub(112,16384,null,0,c.b,[e.N],null,null),e.Lb(2048,[[33,4]],d.b,null,[c.b]),(l()(),e.kb(0,null,null,2,null,B)),e.ub(115,540672,null,0,c.h,[e.N,e.t],{columns:[0,"columns"]},null),e.Lb(2048,[[13,4]],d.l,null,[c.h]),(l()(),e.kb(0,null,null,2,null,q)),e.ub(118,540672,null,0,c.j,[e.N,e.t],{columns:[0,"columns"]},null),e.Lb(2048,[[12,4]],d.n,null,[c.j]),(l()(),e.vb(120,0,null,null,2,"mat-paginator",[["class","mat-paginator"],["showFirstLastButton",""]],null,null,null,A.b,A.a)),e.ub(121,245760,[[1,4]],0,C.b,[C.c,e.h],{pageSizeOptions:[0,"pageSizeOptions"]},null),e.Ib(122,3)],(function(l,n){var u=n.component;l(n,14,0,"Filter"),l(n,18,0,u.dataSource),l(n,25,0,"department"),l(n,38,0,"course_code"),l(n,51,0,"staff_no"),l(n,64,0,"users"),l(n,77,0,"posted"),l(n,90,0,"submission_date"),l(n,103,0,"action"),l(n,115,0,u.displayedColumns),l(n,118,0,u.displayedColumns);var e=l(n,122,0,5,10,20);l(n,121,0,e)}),(function(l,n){l(n,2,1,["standard"==e.Hb(n,3).appearance,"fill"==e.Hb(n,3).appearance,"outline"==e.Hb(n,3).appearance,"legacy"==e.Hb(n,3).appearance,e.Hb(n,3)._control.errorState,e.Hb(n,3)._canLabelFloat,e.Hb(n,3)._shouldLabelFloat(),e.Hb(n,3)._hasFloatingLabel(),e.Hb(n,3)._hideControlPlaceholder(),e.Hb(n,3)._control.disabled,e.Hb(n,3)._control.autofilled,e.Hb(n,3)._control.focused,"accent"==e.Hb(n,3).color,"warn"==e.Hb(n,3).color,e.Hb(n,3)._shouldForward("untouched"),e.Hb(n,3)._shouldForward("touched"),e.Hb(n,3)._shouldForward("pristine"),e.Hb(n,3)._shouldForward("dirty"),e.Hb(n,3)._shouldForward("valid"),e.Hb(n,3)._shouldForward("invalid"),e.Hb(n,3)._shouldForward("pending"),!e.Hb(n,3)._animationsEnabled]),l(n,13,0,e.Hb(n,14)._isServer,e.Hb(n,14).id,e.Hb(n,14).placeholder,e.Hb(n,14).disabled,e.Hb(n,14).required,e.Hb(n,14).readonly&&!e.Hb(n,14)._isNativeSelect||null,e.Hb(n,14)._ariaDescribedby||null,e.Hb(n,14).errorState,e.Hb(n,14).required.toString())}))}var K=function(){function l(l,n){this.adminService=l,this.loadingCtrl=n}return l.prototype.ngOnInit=function(){},l.prototype.refresh=function(){var l=this;this.loadingCtrl.create({spinner:"dots"}).then((function(n){n.present(),l.adminService.getAssignments(),n.dismiss()}))},l}(),Z=e.tb({encapsulation:0,styles:[[""]],data:{}});function G(l){return e.Qb(0,[(l()(),e.vb(0,0,null,null,23,"ion-header",[],null,null,null,a.bb,a.o)),e.ub(1,49152,null,0,o.A,[e.h,e.k,e.A],null,null),(l()(),e.vb(2,0,null,0,21,"ion-toolbar",[],null,null,null,a.zb,a.M)),e.ub(3,49152,null,0,o.Bb,[e.h,e.k,e.A],null,null),(l()(),e.vb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,a.Q,a.d)),e.ub(5,49152,null,0,o.k,[e.h,e.k,e.A],null,null),(l()(),e.vb(6,0,null,0,2,"ion-back-button",[["defaultHref","/admin"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Hb(l,8).onClick(u)&&t),t}),a.O,a.b)),e.ub(7,49152,null,0,o.f,[e.h,e.k,e.A],{defaultHref:[0,"defaultHref"]},null),e.ub(8,16384,null,0,o.g,[[2,o.hb],o.Hb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.vb(9,0,null,0,11,"ion-buttons",[["slot","primary"]],null,null,null,a.Q,a.d)),e.ub(10,49152,null,0,o.k,[e.h,e.k,e.A],null,null),(l()(),e.vb(11,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.refresh()&&e),e}),a.P,a.c)),e.ub(12,49152,null,0,o.j,[e.h,e.k,e.A],null,null),(l()(),e.vb(13,0,null,0,1,"ion-icon",[["name","refresh"],["slot","icon-only"]],null,null,null,a.cb,a.p)),e.ub(14,49152,null,0,o.B,[e.h,e.k,e.A],{name:[0,"name"]},null),(l()(),e.vb(15,0,null,0,5,"ion-button",[["routerLink","/admin/assignments/create"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Hb(l,17).onClick()&&t),"click"===n&&(t=!1!==e.Hb(l,18).onClick(u)&&t),t}),a.P,a.c)),e.ub(16,49152,null,0,o.j,[e.h,e.k,e.A],null,null),e.ub(17,16384,null,0,i.n,[i.m,i.a,[8,null],e.F,e.k],{routerLink:[0,"routerLink"]},null),e.ub(18,737280,null,0,o.Kb,[r.j,o.Hb,e.k,i.m,[2,i.n]],null,null),(l()(),e.vb(19,0,null,0,1,"ion-icon",[["name","add"],["slot","icon-only"]],null,null,null,a.cb,a.p)),e.ub(20,49152,null,0,o.B,[e.h,e.k,e.A],{name:[0,"name"]},null),(l()(),e.vb(21,0,null,0,2,"ion-title",[],null,null,null,a.yb,a.L)),e.ub(22,49152,null,0,o.zb,[e.h,e.k,e.A],null,null),(l()(),e.Ob(-1,0,["Admin Assigments"])),(l()(),e.vb(24,0,null,null,9,"ion-content",[],null,null,null,a.X,a.k)),e.ub(25,49152,null,0,o.t,[e.h,e.k,e.A],null,null),(l()(),e.vb(26,0,null,0,7,"ion-grid",[],null,null,null,a.ab,a.n)),e.ub(27,49152,null,0,o.z,[e.h,e.k,e.A],null,null),(l()(),e.vb(28,0,null,0,5,"ion-row",[],null,null,null,a.ob,a.B)),e.ub(29,49152,null,0,o.ib,[e.h,e.k,e.A],null,null),(l()(),e.vb(30,0,null,0,3,"ion-col",[["offset-sm","1"],["size-sm","10"]],null,null,null,a.W,a.j)),e.ub(31,49152,null,0,o.s,[e.h,e.k,e.A],null,null),(l()(),e.vb(32,0,null,0,1,"app-admin-assignments-item",[],null,null,null,J,y)),e.ub(33,114688,null,0,O,[w.a,i.m,o.Fb],null,null)],(function(l,n){l(n,7,0,"/admin"),l(n,8,0,"/admin"),l(n,14,0,"refresh"),l(n,17,0,"/admin/assignments/create"),l(n,18,0),l(n,20,0,"add"),l(n,33,0)}),null)}function V(l){return e.Qb(0,[(l()(),e.vb(0,0,null,null,1,"app-admin-assigments",[],null,null,null,G,Z)),e.ub(1,114688,null,0,K,[w.a,o.Fb],null,null)],(function(l,n){l(n,1,0)}),null)}var Y=e.rb("app-admin-assigments",K,V,{},{},[]),W=u("NcP4"),X=u("M2Lx"),ll=u("eDkP"),nl=u("uGex"),ul=u("v9Dh"),el=u("ZYjt"),tl=u("OkvK"),bl=function(){return u.e(18).then(u.bind(null,"1zeP")).then((function(l){return l.AdminAddAssignmentPageModuleNgFactory}))},al=function(){return u.e(20).then(u.bind(null,"gnK3")).then((function(l){return l.AdminAssignmentDetailPageModuleNgFactory}))},ol=function(){return function(){}}(),il=u("4c35"),rl=u("qAlS"),cl=u("SMsm"),dl=u("cryg");u.d(n,"AdminAssigmentsPageModuleNgFactory",(function(){return sl}));var sl=e.sb(t,[],(function(l){return e.Eb([e.Fb(512,e.j,e.db,[[8,[b.a,Y,W.a]],[3,e.j],e.y]),e.Fb(4608,r.o,r.n,[e.v,[2,r.B]]),e.Fb(4608,M.p,M.p,[]),e.Fb(4608,o.b,o.b,[e.A,e.g]),e.Fb(4608,o.Gb,o.Gb,[o.b,e.j,e.r]),e.Fb(4608,o.Jb,o.Jb,[o.b,e.j,e.r]),e.Fb(4608,X.c,X.c,[]),e.Fb(4608,g.d,g.d,[]),e.Fb(4608,ll.c,ll.c,[ll.h,ll.d,e.j,ll.g,ll.e,e.r,e.A,r.d,_.b,[2,r.i]]),e.Fb(5120,ll.i,ll.j,[ll.c]),e.Fb(5120,nl.a,nl.b,[ll.c]),e.Fb(5120,ul.b,ul.c,[ll.c]),e.Fb(4608,el.e,g.e,[[2,g.i],[2,g.n]]),e.Fb(5120,C.c,C.a,[[3,C.c]]),e.Fb(5120,tl.d,tl.a,[[3,tl.d]]),e.Fb(1073742336,r.c,r.c,[]),e.Fb(1073742336,M.o,M.o,[]),e.Fb(1073742336,M.g,M.g,[]),e.Fb(1073742336,o.Db,o.Db,[]),e.Fb(1073742336,i.p,i.p,[[2,i.u],[2,i.m]]),e.Fb(1073742336,ol,ol,[]),e.Fb(1073742336,d.p,d.p,[]),e.Fb(1073742336,_.a,_.a,[]),e.Fb(1073742336,g.n,g.n,[[2,g.f],[2,el.f]]),e.Fb(1073742336,c.m,c.m,[]),e.Fb(1073742336,X.d,X.d,[]),e.Fb(1073742336,k.d,k.d,[]),e.Fb(1073742336,F.b,F.b,[]),e.Fb(1073742336,L.c,L.c,[]),e.Fb(1073742336,H.b,H.b,[]),e.Fb(1073742336,g.w,g.w,[]),e.Fb(1073742336,m.c,m.c,[]),e.Fb(1073742336,il.c,il.c,[]),e.Fb(1073742336,rl.b,rl.b,[]),e.Fb(1073742336,ll.f,ll.f,[]),e.Fb(1073742336,g.u,g.u,[]),e.Fb(1073742336,g.s,g.s,[]),e.Fb(1073742336,nl.d,nl.d,[]),e.Fb(1073742336,f.a,f.a,[]),e.Fb(1073742336,ul.e,ul.e,[]),e.Fb(1073742336,C.d,C.d,[]),e.Fb(1073742336,cl.a,cl.a,[]),e.Fb(1073742336,tl.e,tl.e,[]),e.Fb(1073742336,dl.a,dl.a,[]),e.Fb(1073742336,t,t,[]),e.Fb(1024,i.k,(function(){return[[{path:"",component:K},{path:"create",loadChildren:bl},{path:":assignmentId",loadChildren:al}]]}),[])])}))}}]);