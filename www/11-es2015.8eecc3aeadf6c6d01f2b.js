(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"ct+p":function(t,n,o){"use strict";o.r(n),o.d(n,"HomePageModule",(function(){return d}));var e=o("ofXK"),i=o("TEn/"),a=o("3Pt+"),b=o("tyNb"),r=o("fXoL"),c=o("UbJi"),s=o("I/3d");const l=[{path:"",component:(()=>{class t{constructor(t,n,o){this.afAuth=t,this.afstore=n,this.router=o,this.fullname="",this.email="",this.r=this.afAuth.authState.subscribe(t=>{t?this.afstore.collection("users").get().toPromise().then(n=>{n.forEach(n=>{n.id==t.uid&&(this.fullname=n.data().fullname,this.email=n.data().email)})}).catch(t=>{console.log("Error on getting data",t)}):console.log("ngoma aikuiingia")})}ngOnInit(){}logout(){this.afAuth.signOut().then(()=>{this.router.navigate(["/login"])})}}return t.\u0275fac=function(n){return new(n||t)(r.Ib(c.a),r.Ib(s.a),r.Ib(b.g))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-home"]],decls:57,vars:2,consts:[[3,"fullscreen"],[2,"padding-top","30px","padding-left","30px","font-weight","bolder"],[1,"color",2,"margin","0px"],[2,"padding-top","-10px"],["slot","end",2,"padding-top","0px","width","50px","height","20px","color","rgb(206, 55, 55)",3,"click"],["slot","start"],["src","https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"],[2,"padding-top","20px"],[1,"colour",2,"margin","0px"],["slot","end","color","worning"],[2,"font-weight","bolder"],["slot","start","name","book-outline",2,"width","60px","height","60px"],[2,"margin","0px"],["slot","start","name","heart-outline",2,"width","60px","height","60px"],[2,"margin","10px"],["slot","start","name","arrow-dropright-circle"]],template:function(t,n){1&t&&(r.Lb(0,"ion-content",0),r.Lb(1,"ion-header",1),r.ac(2,"User Dashboard"),r.Kb(),r.Lb(3,"ion-card",2),r.Lb(4,"ion-item",3),r.Lb(5,"ion-button",4),r.Sb("click",(function(){return n.logout()})),r.Lb(6,"p"),r.ac(7,"Logout"),r.Kb(),r.Kb(),r.Lb(8,"ion-avatar",5),r.Jb(9,"img",6),r.Kb(),r.Lb(10,"ion-label",7),r.Lb(11,"h2"),r.ac(12),r.Kb(),r.Lb(13,"p"),r.ac(14,"Home"),r.Kb(),r.Kb(),r.Kb(),r.Kb(),r.Lb(15,"ion-header",1),r.ac(16,"My courses"),r.Kb(),r.Lb(17,"ion-card",8),r.Lb(18,"ion-item",3),r.Lb(19,"ion-badge",9),r.Lb(20,"h2",10),r.ac(21,"20"),r.Kb(),r.Kb(),r.Jb(22,"ion-icon",11),r.Lb(23,"ion-label",7),r.Lb(24,"h2"),r.ac(25,"Courses"),r.Kb(),r.Jb(26,"p"),r.Kb(),r.Kb(),r.Kb(),r.Lb(27,"ion-header",1),r.ac(28,"Favarites"),r.Kb(),r.Lb(29,"ion-card",12),r.Lb(30,"ion-item",3),r.Jb(31,"ion-icon",13),r.Lb(32,"ion-label",7),r.Lb(33,"h1"),r.ac(34,"Courses"),r.Kb(),r.Lb(35,"h1",10),r.ac(36,"10"),r.Kb(),r.Kb(),r.Kb(),r.Kb(),r.Lb(37,"ion-header",1),r.ac(38,"My Courses List"),r.Kb(),r.Lb(39,"ion-card",14),r.Lb(40,"ion-list"),r.Lb(41,"ion-item"),r.Jb(42,"ion-icon",15),r.Lb(43,"ion-label"),r.ac(44,"BAED"),r.Kb(),r.Kb(),r.Lb(45,"ion-item"),r.Lb(46,"ion-label"),r.ac(47,"ICT"),r.Kb(),r.Kb(),r.Lb(48,"ion-item"),r.Lb(49,"ion-label"),r.ac(50,"COMPUTER"),r.Kb(),r.Kb(),r.Lb(51,"ion-item"),r.Lb(52,"ion-label"),r.ac(53,"PROGRAMING"),r.Kb(),r.Kb(),r.Lb(54,"ion-item"),r.Lb(55,"ion-label"),r.ac(56,"CODING"),r.Kb(),r.Kb(),r.Kb(),r.Kb(),r.Kb()),2&t&&(r.Wb("fullscreen",!0),r.yb(12),r.bc(n.fullname))},directives:[i.j,i.l,i.g,i.o,i.f,i.d,i.p,i.e,i.m,i.q],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.color[_ngcontent-%COMP%]{color:#4a4a88}ion-card[_ngcontent-%COMP%]{background:#00f}"]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({factory:function(n){return new(n||t)},imports:[[b.i.forChild(l)],b.i]}),t})(),d=(()=>{class t{}return t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({factory:function(n){return new(n||t)},imports:[[e.b,a.a,i.u,p]]}),t})()}}]);