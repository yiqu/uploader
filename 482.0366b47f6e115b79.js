"use strict";(self.webpackChunkuploader=self.webpackChunkuploader||[]).push([[482],{7482:(et,G,y)=>{y.r(G),y.d(G,{MainModule:()=>Ve});var R=y(4585),I=y(6642),g=y(5620),Z=y(9808),X=y(2155),V=y(8282),e=y(5e3);let q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[],imports:[[Z.ez,X.o9,V.p]]}),t})();var ee=y(7462),te=y(2861),N=y(5215);let ne=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-main"]],decls:2,vars:0,consts:[[1,"container","mb-5","mt-3"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"router-outlet"),e.qZA())},directives:[N.lC],styles:[""]}),t})();const Y=(0,g.PH)("[Upload/UI] attach a file",(0,g.Ky)()),D=(0,g.PH)("[Upload/API] Upload file start",(0,g.Ky)()),z=(0,g.PH)("[Upload/API] Upload file successful",(0,g.Ky)()),ue=(0,g.PH)("[Upload/API] Upload file failed",(0,g.Ky)()),S=(0,g.PH)("[Upload/API] Upload file progress update",(0,g.Ky)()),J=((0,g.PH)("[Upload/API] Get download url for file start",(0,g.Ky)()),(0,g.PH)("[Upload/API] Get download url for file successful",(0,g.Ky)()),(0,g.PH)("[Upload/API] Get download url for file failed",(0,g.Ky)()),"uploadFiles");var c=(()=>{return(t=c||(c={}))[t.EntitiesOnly=0]="EntitiesOnly",t[t.Both=1]="Both",t[t.None=2]="None",c;var t})();function v(t){return function(n,r){const d={ids:[...r.ids],entities:Object.assign({},r.entities)},f=t(n,d);return f===c.Both?Object.assign({},r,d):f===c.EntitiesOnly?Object.assign(Object.assign({},r),{entities:d.entities}):r}}function C(t,i){const n=i(t);return(0,e.X6Q)()&&void 0===n&&console.warn("@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.","You should probably provide your own `selectId` implementation.","The entity that was passed:",t,"The `selectId` implementation:",i.toString()),n}function K(t){function i(p,l){const a=C(p,t);return a in l.entities?c.None:(l.ids.push(a),l.entities[a]=p,c.Both)}function n(p,l){let a=!1;for(const o of p)a=i(o,l)!==c.None||a;return a?c.Both:c.None}function d(p,l){const a=C(p,t);return a in l.entities?(l.entities[a]=p,c.EntitiesOnly):(l.ids.push(a),l.entities[a]=p,c.Both)}function x(p,l){const o=(p instanceof Array?p:l.ids.filter(s=>p(l.entities[s]))).filter(s=>s in l.entities).map(s=>delete l.entities[s]).length>0;return o&&(l.ids=l.ids.filter(s=>s in l.entities)),o?c.Both:c.None}function F(p,l){return L([p],l)}function L(p,l){const a={};return(p=p.filter(s=>s.id in l.entities)).length>0?p.filter(u=>function E(p,l,a){const s=Object.assign({},a.entities[l.id],l.changes),u=C(s,t),h=u!==l.id;return h&&(p[l.id]=u,delete a.entities[l.id]),a.entities[u]=s,h}(a,u,l)).length>0?(l.ids=l.ids.map(u=>a[u]||u),c.Both):c.EntitiesOnly:c.None}function B(p,l){const a=[],o=[];for(const h of p){const O=C(h,t);O in l.entities?o.push({id:O,changes:h}):a.push(h)}const s=L(o,l),u=n(a,l);switch(!0){case u===c.None&&s===c.None:return c.None;case u===c.Both||s===c.Both:return c.Both;default:return c.EntitiesOnly}}return{removeAll:function A(p){return Object.assign({},p,{ids:[],entities:{}})},addOne:v(i),addMany:v(n),setAll:v(function r(p,l){return l.ids=[],l.entities={},n(p,l),c.Both}),setOne:v(d),setMany:v(function f(p,l){const a=p.map(o=>d(o,l));switch(!0){case a.some(o=>o===c.Both):return c.Both;case a.some(o=>o===c.EntitiesOnly):return c.EntitiesOnly;default:return c.None}}),updateOne:v(F),updateMany:v(L),upsertOne:v(function H(p,l){return B([p],l)}),upsertMany:v(B),removeOne:v(function m(p,l){return x([p],l)}),removeMany:v(x),map:v(function M(p,l){return L(l.ids.reduce((s,u)=>{const h=p(l.entities[u]);return h!==l.entities[u]&&s.push({id:u,changes:h}),s},[]).filter(({id:s})=>s in l.entities),l)}),mapOne:v(function Q({map:p,id:l},a){const o=a.entities[l];return o?F({id:l,changes:p(o)},a):c.None})}}const _=function he(t={}){var i,n;const{selectId:r,sortComparer:d}={selectId:null!==(i=t.selectId)&&void 0!==i?i:A=>A.id,sortComparer:null!==(n=t.sortComparer)&&void 0!==n&&n},f=function fe(){return{getInitialState:function t(i={}){return Object.assign({ids:[],entities:{}},i)}}}(),m=function ge(){return{getSelectors:function t(i){const n=m=>m.ids,r=m=>m.entities,d=(0,g.P1)(n,r,(m,x)=>m.map(A=>x[A])),f=(0,g.P1)(n,m=>m.length);return i?{selectIds:(0,g.P1)(i,n),selectEntities:(0,g.P1)(i,r),selectAll:(0,g.P1)(i,d),selectTotal:(0,g.P1)(i,f)}:{selectIds:n,selectEntities:r,selectAll:d,selectTotal:f}}}}(),x=d?function me(t,i){const{removeOne:n,removeMany:r,removeAll:d}=K(t);function f(a,o){return m([a],o)}function m(a,o){const s=a.filter(u=>!(C(u,t)in o.entities));return 0===s.length?c.None:(l(s,o),c.Both)}function A(a,o){const s=C(a,t);return s in o.entities?(o.ids=o.ids.filter(u=>u!==s),l([a],o),c.Both):f(a,o)}function F(a,o){return M([a],o)}function M(a,o){const s=[],u=a.filter(h=>function L(a,o,s){if(!(o.id in s.entities))return!1;const h=Object.assign({},s.entities[o.id],o.changes),O=C(h,t);return delete s.entities[o.id],a.push(h),O!==o.id}(s,h,o)).length>0;if(0===s.length)return c.None;{const h=o.ids,O=[];return o.ids=o.ids.filter((U,P)=>U in o.entities||(O.push(P),!1)),l(s,o),!u&&O.every(U=>o.ids[U]===h[U])?c.EntitiesOnly:c.Both}}function p(a,o){const s=[],u=[];for(const U of a){const P=C(U,t);P in o.entities?u.push({id:P,changes:U}):s.push(U)}const h=M(u,o),O=m(s,o);switch(!0){case O===c.None&&h===c.None:return c.None;case O===c.Both||h===c.Both:return c.Both;default:return c.EntitiesOnly}}function l(a,o){a.sort(i);const s=[];let u=0,h=0;for(;u<a.length&&h<o.ids.length;){const O=a[u],U=C(O,t),P=o.ids[h];i(O,o.entities[P])<=0?(s.push(U),u++):(s.push(P),h++)}o.ids=s.concat(u<a.length?a.slice(u).map(t):o.ids.slice(h)),a.forEach((O,U)=>{o.entities[t(O)]=O})}return{removeOne:n,removeMany:r,removeAll:d,addOne:v(f),updateOne:v(F),upsertOne:v(function B(a,o){return p([a],o)}),setAll:v(function x(a,o){return o.entities={},o.ids=[],m(a,o),c.Both}),setOne:v(A),setMany:v(function E(a,o){const s=a.map(u=>A(u,o));switch(!0){case s.some(u=>u===c.Both):return c.Both;case s.some(u=>u===c.EntitiesOnly):return c.EntitiesOnly;default:return c.None}}),addMany:v(m),updateMany:v(M),upsertMany:v(p),map:v(function Q(a,o){return M(o.ids.reduce((u,h)=>{const O=a(o.entities[h]);return O!==o.entities[h]&&u.push({id:h,changes:O}),u},[]),o)}),mapOne:v(function H({map:a,id:o},s){const u=s.entities[o];return u?F({id:o,changes:a(u)},s):c.None})}}(r,d):K(r);return Object.assign(Object.assign(Object.assign({selectId:r,sortComparer:d},f),m),x)}({selectId:function ye(t){return t.id},sortComparer:function ve(t,i){return t.attachDate&&i.attachDate?t.attachDate<i.attachDate?1:-1:1}}),Me=_.getInitialState({uploading:!1}),Oe=(0,g.Lq)(Me,(0,g.on)(D,(t,{file:i,fileId:n})=>{const r={attachDate:(new Date).getTime(),dateModified:i.lastModified,file:i,fileName:i.name,fileSize:i.size,id:n,completed:!1,progress:0,downloadUrl:void 0};return _.addOne(r,Object.assign(Object.assign({},t),{uploading:!0}))}),(0,g.on)(S,(t,{fileId:i,progress:n,downloadUrl:r})=>{var d,f;const m={id:i,changes:{progress:null!=n?n:null===(d=t.entities[i])||void 0===d?void 0:d.progress,downloadUrl:null!=r?r:null===(f=t.entities[i])||void 0===f?void 0:f.downloadUrl}};return _.updateOne(m,Object.assign(Object.assign({},t),{uploading:!0}))}),(0,g.on)(z,(t,{fileId:i})=>{const n={id:i,changes:{completed:!0,completedDate:(new Date).getTime()}};return _.updateOne(n,Object.assign(Object.assign({},t),{uploading:!1}))}));function xe(t,i){return Oe(t,i)}const w=(0,g.ZF)(J),Ue=((0,g.P1)(w,_.getSelectors().selectIds),(0,g.P1)(w,_.getSelectors().selectEntities),(0,g.P1)(w,_.getSelectors().selectAll)),Ae=((0,g.P1)(w,_.getSelectors().selectTotal),(0,g.P1)(w,t=>t.uploading));var Ce=y(5439);let k=(()=>{class t{constructor(n){this.storage=n}uploadBlob(n,r){const d="uploader-app/"+this.getCurrentTime()+"/"+r,f=this.storage.ref(d),m=f.put(n);return{ref:f,task:m}}getCurrentTime(){return Ce().format("MM-DD-YYYY")}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(R.Q1))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),W=(()=>{class t{constructor(n,r){this.store=n,this.ss=r,this.filesUploadingAll$=this.store.select(Ue),this.anyFilesUploading$=this.store.select(Ae)}attachFile(n,r){this.store.dispatch(Y({file:n,fileId:r}))}uploadFile(n,r){return this.ss.uploadBlob(n,r)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(g.yh),e.LFG(k))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var T=y(7093),_e=y(7423),$=y(5245),Te=y(5899);let Fe=(()=>{class t{constructor(){this.mode="indeterminate"}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["shared-loading-bar"]],inputs:{progress:"progress",mode:"mode"},decls:2,vars:3,consts:[[1,"parent"],[3,"mode","value","color"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"mat-progress-bar",1),e.qZA()),2&n&&(e.xp6(1),e.Q6J("mode",r.mode)("value",r.progress)("color",100===r.progress?"primary":"accent"))},directives:[Te.pW],styles:[".parent[_ngcontent-%COMP%]{height:100%}mat-progress-bar.mat-progress-bar[_ngcontent-%COMP%]{height:100%;border-radius:30px}"]}),t})();var Le=y(4836),Pe=y(837);function Ee(t,i){if(1&t&&(e.ynx(0),e.TgZ(1,"div",15)(2,"div"),e._uU(3),e.qZA()(),e.BQk()),2&t){const n=e.oxw(2);e.xp6(3),e.hij(" Uploading ( ",n.file.progress,"% ) ")}}function Ze(t,i){if(1&t&&(e.ynx(0),e._UZ(1,"shared-loading-bar",16),e.BQk()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("progress",n.file.progress)("mode","determinate")}}function Se(t,i){if(1&t&&(e.ynx(0),e.TgZ(1,"div",17),e._UZ(2,"img",18),e.qZA(),e.BQk()),2&t){const n=e.oxw(2);e.xp6(2),e.Q6J("src",n.imgPreview,e.LSH)}}function we(t,i){if(1&t&&(e.ynx(0),e.TgZ(1,"a",19),e._uU(2,"Click here"),e.qZA(),e.BQk()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("href",n.file.downloadUrl,e.LSH)}}function be(t,i){1&t&&e._uU(0," Creating URL... ")}function Be(t,i){if(1&t&&(e.ynx(0),e.TgZ(1,"div",3)(2,"div",4)(3,"div",5),e.YNc(4,Ee,4,1,"ng-container",6),e.qZA(),e.TgZ(5,"div",7)(6,"div",8),e.YNc(7,Ze,2,2,"ng-container",0),e.qZA()(),e.YNc(8,Se,3,1,"ng-container",6),e.TgZ(9,"div",9),e._UZ(10,"hr"),e.qZA(),e.TgZ(11,"div",10)(12,"div",11)(13,"div",12),e._uU(14," File Name: "),e.qZA(),e.TgZ(15,"div",13),e._uU(16),e.qZA()(),e.TgZ(17,"div",11)(18,"div",12),e._uU(19," File Size: "),e.qZA(),e.TgZ(20,"div",13),e._uU(21),e.ALo(22,"fileSizeDisplay"),e.qZA()(),e.TgZ(23,"div",11)(24,"div",12),e._uU(25," Date modified: "),e.qZA(),e.TgZ(26,"div"),e._uU(27),e.ALo(28,"dateDisplay"),e.qZA()(),e.TgZ(29,"div",11)(30,"div",12),e._uU(31," Download URL: "),e.qZA(),e.TgZ(32,"div"),e.YNc(33,we,3,1,"ng-container",6),e.YNc(34,be,1,0,"ng-template",null,14,e.W1O),e.qZA()()()()(),e.BQk()),2&t){const n=e.MAs(35),r=e.oxw(),d=e.MAs(2),f=e.MAs(4);e.xp6(4),e.Q6J("ngIf",r.file.progress<100)("ngIfElse",d),e.xp6(3),e.Q6J("ngIf",r.file.progress),e.xp6(1),e.Q6J("ngIf",r.isImgType)("ngIfElse",f),e.xp6(8),e.hij(" ",r.file.fileName," "),e.xp6(5),e.hij(" ",e.lcZ(22,10,r.file.fileSize)," "),e.xp6(6),e.hij(" ",e.xi3(28,12,r.file.dateModified,"MDY")," "),e.xp6(6),e.Q6J("ngIf",r.file.downloadUrl)("ngIfElse",n)}}function Ne(t,i){1&t&&(e.TgZ(0,"div",15)(1,"div",20)(2,"mat-icon",21),e._uU(3,"check_circle"),e.qZA()(),e.TgZ(4,"div"),e._uU(5," Completed "),e.qZA()())}function De(t,i){1&t&&(e.TgZ(0,"div",17)(1,"mat-icon",22),e._uU(2," description "),e.qZA()())}const je=["image/jpeg","image/png","image/gif"];let Qe=(()=>{class t{constructor(){this.isImgType=!1,this.reader=new FileReader}ngOnInit(){}ngOnChanges(n){var r,d,f;this.imgId!==n.file.currentValue.id&&(null===(r=this.file)||void 0===r?void 0:r.file)&&(this.isImgType=!!je.includes(this.file.file.type),this.reader.onload=m=>this.imgPreview=this.reader.result,this.reader.readAsDataURL(null===(d=this.file)||void 0===d?void 0:d.file)),this.imgId||(this.imgId=null===(f=this.file)||void 0===f?void 0:f.id)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-upload-item"]],inputs:{file:"file"},features:[e.TTD],decls:5,vars:1,consts:[[4,"ngIf"],["finished",""],["notImg",""],[1,"file-parent"],[1,"card"],["fxLayout","row","fxLayoutAlign","center center","fxLayoutGap","10px",1,"loading-status","poppins"],[4,"ngIf","ngIfElse"],["fxLayout","row","fxLayoutAlign","center center"],[1,"progress-parent"],[1,"w-100"],["fxLayout","column","fxLayoutAlign","start start","fxLayoutGap","10px",1,"w-100","poppins","info-parent"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px",1,"info-line"],[1,"label"],[1,"value"],["noUrl",""],["fxLayout","row","fxLayoutAlign","center center","fxLayoutGap","10px"],[3,"progress","mode"],[1,"image-parent"],[1,"preview-img",3,"src"],["download","hi",3,"href"],["fxLayout","column","fxLayoutAlign","center center"],[1,"done"],["fxLayout","row","fxLayoutAlign","center center",1,"file-icon"]],template:function(n,r){1&n&&(e.YNc(0,Be,36,15,"ng-container",0),e.YNc(1,Ne,6,0,"ng-template",null,1,e.W1O),e.YNc(3,De,3,0,"ng-template",null,2,e.W1O)),2&n&&e.Q6J("ngIf",r.file)},directives:[Z.O5,T.xw,T.Wh,T.SQ,Fe,$.Hw],pipes:[Le.nV,Pe.o],styles:[".file-parent[_ngcontent-%COMP%]{margin-top:30px}.file-parent[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-top-right-radius:25px;border-top-left-radius:25px;background-color:#ededf7}.file-parent[_ngcontent-%COMP%]   .loading-status[_ngcontent-%COMP%]{font-size:13px;height:2rem}.file-parent[_ngcontent-%COMP%]   .image-parent[_ngcontent-%COMP%]{height:15rem;width:100%;overflow:hidden;text-align:center}.file-parent[_ngcontent-%COMP%]   .image-parent[_ngcontent-%COMP%]   .preview-img[_ngcontent-%COMP%]{height:100%}.file-parent[_ngcontent-%COMP%]   .image-parent[_ngcontent-%COMP%]:hover{overflow:auto}.file-parent[_ngcontent-%COMP%]   .progress-parent[_ngcontent-%COMP%]{height:10px;width:97%;margin-bottom:8px}.file-parent[_ngcontent-%COMP%]   .info-parent[_ngcontent-%COMP%]{padding:0 10px 10px;height:7rem;overflow:hidden;font-size:13px}.file-parent[_ngcontent-%COMP%]   .info-parent[_ngcontent-%COMP%]:hover{overflow:auto}.file-parent[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:500}.file-parent[_ngcontent-%COMP%]   mat-icon.done[_ngcontent-%COMP%]{font-size:18px;color:#093;text-align:center;height:100%}.file-parent[_ngcontent-%COMP%]   mat-icon.progress[_ngcontent-%COMP%]{font-size:18px;color:#b38600;text-align:center;height:100%}.file-parent[_ngcontent-%COMP%]   mat-icon.file-icon[_ngcontent-%COMP%]{font-size:10rem;height:15rem;width:100%;color:#555}"]}),t})();const He=["uploadInput"];function Ge(t,i){if(1&t&&(e.ynx(0),e.TgZ(1,"div",10),e._UZ(2,"app-upload-item",11),e.qZA(),e.BQk()),2&t){const n=i.$implicit;e.xp6(2),e.Q6J("file",n)}}function Re(t,i){if(1&t&&(e.ynx(0),e.TgZ(1,"section",8),e.YNc(2,Ge,3,1,"ng-container",9),e.qZA(),e.BQk()),2&t){const n=i.ngIf,r=e.oxw();e.xp6(2),e.Q6J("ngForOf",n)("ngForTrackBy",r.trackById)}}const Ye=[{path:"",component:ne,children:[{path:"",redirectTo:"upload",pathMatch:"full"},{path:"upload",component:(()=>{class t{constructor(n,r){this.fs=n,this.rs=r}ngOnInit(){}onFileUpload(){var n;const r=null===(n=this.uploadInput)||void 0===n?void 0:n.nativeElement;r&&r.click()}onFileInputClick(n){var r;const d=null===(r=n.target)||void 0===r?void 0:r.files;d&&Object.keys(d).forEach(m=>{this.fs.attachFile(d[m],(new Date).getTime()+m+"")})}trackById(n,r){return r.id}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(W),e.Y36(k))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-main-all"]],viewQuery:function(n,r){if(1&n&&e.Gf(He,5),2&n){let d;e.iGM(d=e.CRH())&&(r.uploadInput=d.first)}},decls:13,vars:3,consts:[[1,""],["type","file","multiple","",1,"upload-input",3,"change"],["uploadInput",""],["fxLayout","column","fxLayoutAlign","start center","fxLayoutGap","15px",1,""],["fxLayout","row","fxLayoutAlign","center center","fxLayoutGap","15px",1,"quicksand","upload-action",3,"click"],[1,"text"],["mat-fab","","color","primary","aria-label","Upload files"],[4,"ngIf"],["fxLayout","row wrap","fxLayoutAlign","start center","fxLayoutGap","15px",1,"w-100"],[4,"ngFor","ngForOf","ngForTrackBy"],["fxFlex.gt-sm","23","fxFlex","100"],[3,"file"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"input",1,2),e.NdJ("change",function(f){return r.onFileInputClick(f)}),e.qZA()(),e.TgZ(3,"div",3)(4,"div",4),e.NdJ("click",function(){return r.onFileUpload()}),e.TgZ(5,"div",5),e._uU(6," Select items to upload "),e.qZA(),e.TgZ(7,"div")(8,"button",6)(9,"mat-icon"),e._uU(10,"file_upload"),e.qZA()()()(),e.YNc(11,Re,3,2,"ng-container",7),e.ALo(12,"async"),e.qZA()),2&n&&(e.xp6(11),e.Q6J("ngIf",e.lcZ(12,1,r.fs.filesUploadingAll$)))},directives:[T.xw,T.Wh,T.SQ,_e.lW,$.Hw,Z.O5,Z.sg,T.yH,Qe],pipes:[Z.Ov],styles:[".upload-action[_ngcontent-%COMP%]{border:1px solid #ccc;padding:5px 25px;border-radius:30px;background-color:#e6f2ff;cursor:pointer}.upload-action[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:20px}.upload-input[_ngcontent-%COMP%]{display:none;height:0px}"]}),t})(),data:{pageTitle:"Upload Files"}}]}];let ze=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[N.Bz.forChild(Ye)],N.Bz]}),t})();var b=y(4004),Je=y(5577),j=y(8746),Ke=y(262),ke=y(9300),We=y(7272),$e=y(9646);const Xe=[(()=>{class t{constructor(n,r){this.actions$=n,this.us=r,this.attachFileForUpload$=(0,I.GW)(()=>this.actions$.pipe((0,I.l4)(Y),(0,b.U)(d=>D({fileId:d.fileId,file:d.file}))),{dispatch:!0}),this.uploadFileStart$=(0,I.GW)(()=>this.actions$.pipe((0,I.l4)(D),(0,Je.z)(d=>{var f;const m=d.fileId,x=d.file,A=null!==(f=x.name)&&void 0!==f?f:"File-name-"+(new Date).getTime(),E=this.us.uploadFile(x,A);let F=[E.task.percentageChanges().pipe((0,b.U)(M=>({fileId:m,percent:M})),(0,j.x)(()=>{console.log("Upload done")})),E.ref.getDownloadURL().pipe((0,b.U)(M=>({fileId:m,url:M})),(0,j.x)(()=>{console.log("Fetch URL done")}))];return(0,We.z)(...F).pipe((0,b.U)(M=>S(M.url?{fileId:m,downloadUrl:M.url}:null!==M.percent||void 0!==M.percent?{fileId:m,progress:M.percent}:{fileId:m})),(0,Ke.K)(M=>(console.error("Upload Error!"+M),(0,$e.of)(ue({errMsg:M})))),(0,j.x)(()=>{console.log("url and upload done")}))}))),this.uploadFileFinished$=(0,I.GW)(()=>this.actions$.pipe((0,I.l4)(S),(0,ke.h)(d=>100===d.progress),(0,b.U)(d=>z({fileId:d.fileId}))))}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(I.eX),e.LFG(W))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})()];let Ve=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[],imports:[[te.n,q,ee.d,g.Aw.forFeature(J,xe),I.sQ.forFeature(Xe),R.TE,ze]]}),t})()}}]);