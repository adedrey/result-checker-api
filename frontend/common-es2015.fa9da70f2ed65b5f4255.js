(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+veT":function(t,n,e){"use strict";e.d(n,"a",(function(){return w})),e.d(n,"b",(function(){return E})),e.d(n,"c",(function(){return b})),e.d(n,"d",(function(){return v})),e.d(n,"e",(function(){return a}));var s=e("dSyh"),i=e("kBU6");const a=t=>new Promise((n,e)=>{Object(s.m)(()=>{o(t),r(t).then(e=>{e.animation&&e.animation.destroy(),c(t),n(e)},n=>{c(t),e(n)})})}),o=t=>{const n=t.enteringEl,e=t.leavingEl;C(n,e,t.direction),t.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),v(n,!1),e&&v(e,!1)},r=async t=>{const n=await l(t);return n?u(n,t):d(t)},c=t=>{const n=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")},l=async t=>{if(t.leavingEl&&t.animated&&0!==t.duration)return t.animationBuilder?t.animationBuilder:"ios"===t.mode?(await(()=>e.e(131).then(e.bind(null,"Lu00")))()).iosTransitionAnimation:(await(()=>e.e(132).then(e.bind(null,"wxTh")))()).mdTransitionAnimation},u=async(t,n)=>{let s;await h(n,!0);try{const i=await e.e(9).then(e.bind(null,"gHMO"));s=await i.create(t,n.baseEl,n)}catch(a){s=t(n.baseEl,n)}g(n.enteringEl,n.leavingEl);const i=await m(s,n);return n.progressCallback&&n.progressCallback(void 0),i&&f(n.enteringEl,n.leavingEl),{hasCompleted:i,animation:s}},d=async t=>{const n=t.enteringEl,e=t.leavingEl;return await h(t,!1),g(n,e),f(n,e),{hasCompleted:!0}},h=async(t,n)=>{const e=(void 0!==t.deepWait?t.deepWait:n)?[w(t.enteringEl),w(t.leavingEl)]:[y(t.enteringEl),y(t.leavingEl)];await Promise.all(e),await p(t.viewIsReady,t.enteringEl)},p=async(t,n)=>{t&&await t(n)},m=(t,n)=>{const e=n.progressCallback,s=new Promise(n=>{t.onFinish(e=>{"number"==typeof e?n(1===e):void 0!==t.hasCompleted&&n(t.hasCompleted)})});return e?(t.progressStart(!0),e(t)):t.play(),s},g=(t,n)=>{b(n,i.c),b(t,i.a)},f=(t,n)=>{b(t,i.b),b(n,i.d)},b=(t,n)=>{if(t){const e=new CustomEvent(n,{bubbles:!1,cancelable:!1});t.dispatchEvent(e)}},y=t=>t&&t.componentOnReady?t.componentOnReady():Promise.resolve(),w=async t=>{const n=t;if(n){if(null!=n.componentOnReady&&null!=await n.componentOnReady())return;await Promise.all(Array.from(n.children).map(w))}},v=(t,n)=>{n?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))},C=(t,n,e)=>{void 0!==t&&(t.style.zIndex="back"===e?"99":"101"),void 0!==n&&(n.style.zIndex="100")},E=t=>t.classList.contains("ion-page")?t:t.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||t},Dl6n:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"d",(function(){return r}));const s=(t,n)=>null!==n.closest(t),i=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,[`ion-color-${t}`]:!0}:void 0,a=t=>{const n={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>n[t]=!0),n},o=/^[a-z][a-z0-9+\-.]*:/,r=async(t,n,e)=>{if(null!=t&&"#"!==t[0]&&!o.test(t)){const s=document.querySelector("ion-router");if(s)return null!=n&&n.preventDefault(),s.push(t,e)}return!1}},VSgI:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var s=e("AytR"),i=e("8Y7J"),a=e("IheW");const o=s.a.apiUrl;let r=(()=>{class t{constructor(t){this.http=t}getResults(){return this.http.get(o+"user/results")}getTestResults(){return this.http.get(o+"user/test/results")}}return t.ngInjectableDef=i.Qb({factory:function(){return new t(i.Rb(a.c))},token:t,providedIn:"root"}),t})()},YtD4:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));const s=t=>{try{if("string"!=typeof t||""===t)return t;const n=document.createDocumentFragment(),e=document.createElement("div");n.appendChild(e),e.innerHTML=t,r.forEach(t=>{const e=n.querySelectorAll(t);for(let s=e.length-1;s>=0;s--){const t=e[s];t.parentNode?t.parentNode.removeChild(t):n.removeChild(t);const o=a(t);for(let n=0;n<o.length;n++)i(o[n])}});const s=a(n);for(let t=0;t<s.length;t++)i(s[t]);const o=document.createElement("div");o.appendChild(n);const c=o.querySelector("div");return null!==c?c.innerHTML:o.innerHTML}catch(n){return console.error(n),""}},i=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let e=t.attributes.length-1;e>=0;e--){const n=t.attributes.item(e),s=n.name;if(!o.includes(s.toLowerCase())){t.removeAttribute(s);continue}const i=n.value;null!=i&&i.toLowerCase().includes("javascript:")&&t.removeAttribute(s)}const n=a(t);for(let e=0;e<n.length;e++)i(n[e])},a=t=>null!=t.children?t.children:t.childNodes,o=["class","id","href","src","name","slot"],r=["script","style","iframe","meta","link","object","embed"]},"go/B":function(t,n,e){"use strict";e.d(n,"a",(function(){return p}));var s=e("2Vo4"),i=e("ZZ/e"),a=e("AytR"),o=e("gFX4"),r=e.n(o),c=e("8Y7J"),l=e("IheW"),u=e("iInd");const d=a.a.apiSocketUrl,h=a.a.apiUrl;let p=(()=>{class t{constructor(t,n,e){this.http=t,this.router=n,this.alertCtrl=e,this.assignments=[],this.assignmentChanged=new s.a([])}createAssignment(t){this.http.post(h+"staff/assignment",t).subscribe(t=>{const n=[...this.assignments];n.unshift(t.assignment),this.assignments=[...n],this.assignmentChanged.next(this.assignments),this.router.navigateByUrl("/staff/assignments")})}getAssignments(){this.http.get(h+"staff/assignments").subscribe(t=>{this.assignments=t.assignments,this.assignmentChanged.next(this.assignments)}),r()(d).on("assignments",t=>{"update"===t.action?this.updateAssignments(t.assignment):"admin_delete"===t.action&&this.deleteAssignments(t.assignmentId)})}deleteAssignments(t){const n=[...this.assignments].filter(n=>n._id!==t);this.assignments=n,this.assignmentChanged.next(this.assignments)}updateAssignments(t){const n=this.assignments.findIndex(n=>n._id===t._id);this.assignments[n]=t,this.assignmentChanged.next(this.assignments)}uploadResult(t,n,e,s){const i=new FormData;return i.append("attachment",t),i.append("course_code",n),i.append("session",e),i.append("semester",s),console.log(t),this.http.post(h+"staff/result/upload",i)}uploadTestResult(t,n,e,s,i){const a=new FormData;return a.append("attachment",t),a.append("course_code",n),a.append("result_type",e),a.append("session",s),a.append("semester",i),console.log(t),this.http.post(h+"staff/result/test/upload",a)}getAssignmentChanged(){return this.assignmentChanged.asObservable()}getAssignmentById(t){return this.http.get(h+"staff/assignment/"+t)}deleteAssignment(t){this.http.delete(h+"staff/assignment/"+t).subscribe(n=>{const e=[...this.assignments].filter(n=>n._id!==t);this.assignments=e,this.assignmentChanged.next(this.assignments),this.router.navigateByUrl("/staff/assignments")})}}return t.ngInjectableDef=c.Qb({factory:function(){return new t(c.Rb(l.c),c.Rb(u.m),c.Rb(i.a))},token:t,providedIn:"root"}),t})()},m9yc:function(t,n,e){"use strict";e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return i}));const s=async(t,n,e,s,i)=>{if(t)return t.attachViewToDom(n,e,i,s);if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");const a="string"==typeof e?n.ownerDocument&&n.ownerDocument.createElement(e):e;return s&&s.forEach(t=>a.classList.add(t)),i&&Object.assign(a,i),n.appendChild(a),a.componentOnReady&&await a.componentOnReady(),a},i=(t,n)=>{if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},"nN+u":function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return s}));const s=(t,n,e)=>{const s=new MutationObserver(t=>{e(i(t,n))});return s.observe(t,{childList:!0,subtree:!0}),s},i=(t,n)=>{let e;return t.forEach(t=>{for(let s=0;s<t.addedNodes.length;s++)e=a(t.addedNodes[s],n)||e}),e},a=(t,n)=>{if(1===t.nodeType)return(t.tagName===n.toUpperCase()?[t]:Array.from(t.querySelectorAll(n))).find(t=>!0===t.checked)}},opz7:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return s}));const s=()=>{const t=window.TapticEngine;t&&t.selection()},i=()=>{const t=window.TapticEngine;t&&t.gestureSelectionStart()},a=()=>{const t=window.TapticEngine;t&&t.gestureSelectionChanged()},o=()=>{const t=window.TapticEngine;t&&t.gestureSelectionEnd()}},qaSm:function(t,n,e){"use strict";e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return i}));class s{constructor(t,n){this.x=t,this.y=n}}const i=(t,n,e,s,i)=>{const r=o(t.y,n.y,e.y,s.y,i);return a(t.x,n.x,e.x,s.x,r[0])},a=(t,n,e,s,i)=>i*(3*n*Math.pow(i-1,2)+i*(-3*e*i+3*e+s*i))-t*Math.pow(i-1,3),o=(t,n,e,s,i)=>r((s-=i)-3*(e-=i)+3*(n-=i)-(t-=i),3*e-6*n+3*t,3*n-3*t,t).filter(t=>t>=0&&t<=1),r=(t,n,e,s)=>{if(0===t)return((t,n,e)=>{const s=n*n-4*t*e;return s<0?[]:[(-n+Math.sqrt(s))/(2*t),(-n-Math.sqrt(s))/(2*t)]})(n,e,s);const i=(3*(e/=t)-(n/=t)*n)/3,a=(2*n*n*n-9*n*e+27*(s/=t))/27;if(0===i)return[Math.pow(-a,1/3)];if(0===a)return[Math.sqrt(-i),-Math.sqrt(-i)];const o=Math.pow(a/2,2)+Math.pow(i/3,3);if(0===o)return[Math.pow(a/2,.5)-n/3];if(o>0)return[Math.pow(-a/2+Math.sqrt(o),1/3)-Math.pow(a/2+Math.sqrt(o),1/3)-n/3];const r=Math.sqrt(Math.pow(-i/3,3)),c=Math.acos(-a/(2*Math.sqrt(Math.pow(-i/3,3)))),l=2*Math.pow(r,1/3);return[l*Math.cos(c/3)-n/3,l*Math.cos((c+2*Math.PI)/3)-n/3,l*Math.cos((c+4*Math.PI)/3)-n/3]}},xAX9:function(t,n,e){"use strict";e.d(n,"a",(function(){return h}));var s=e("2Vo4"),i=e("AytR"),a=e("gFX4"),o=e.n(a),r=e("8Y7J"),c=e("IheW"),l=e("iInd");const u=i.a.apiUrl,d=i.a.apiSocketUrl;let h=(()=>{class t{constructor(t,n){this.http=t,this.router=n,this.complaints=[],this.complaintChanged=new s.a([])}getComplaints(){this.http.get(u+"user/complaints").subscribe(t=>{this.complaints=t.complaints,this.complaintChanged.next(this.complaints)}),o()(d).on("complaints",t=>{"delete"===t.action?this.deleteComplaints(t.complaintId):"update"===t.action&&this.updateComplaints(t.complaint)})}updateComplaints(t){const n=[...this.complaints],e=n.findIndex(n=>n._id===t._id);n[e]=t,this.complaints=n,this.complaintChanged.next(this.complaints)}deleteComplaints(t){const n=[...this.complaints].filter(n=>n._id!==t);this.complaints=n,this.complaintChanged.next(this.complaints)}getComplaintStatusListener(){return this.complaintChanged.asObservable()}createComplaint(t,n,e){this.http.post(u+"user/complaints/create",{case_type:t,title:n,body:e}).subscribe(t=>{this.complaints.unshift(t.complaint),this.complaintChanged.next(this.complaints)})}openTicket(t,n,e){return this.http.post(u+"auth/open-ticket",{case_type:t,title:n,body:e})}updateComplaint(t,n,e,s){this.http.post(u+"user/complaints/update/"+s,{case_type:t,title:n,body:e}).subscribe(t=>{const n=this.complaints.findIndex(t=>t._id===s);this.complaints[n]=t.complaint,this.complaintChanged.next(this.complaints)})}getComplaint(t){return this.http.get(u+"user/complaints/"+t)}updateComplaintStatus(t){const n=this.complaints.find(n=>n._id===t);n&&(n.status=!n.status,this.complaints[n._id]=n,this.complaintChanged.next(this.complaints))}deleteComplaint(t){console.log(t),this.http.delete(u+"user/complaints/"+t).subscribe(n=>{const e=[...this.complaints].filter(n=>n._id!==t);this.complaints=e,this.complaintChanged.next(this.complaints),this.router.navigateByUrl("/forum/tabs/complaints")})}}return t.ngInjectableDef=r.Qb({factory:function(){return new t(r.Rb(c.c),r.Rb(l.m))},token:t,providedIn:"root"}),t})()}}]);