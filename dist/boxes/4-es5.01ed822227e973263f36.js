(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{y8fh:function(l,n,u){"use strict";u.r(n);var i=u("CcnG"),s=function(){function l(l,n){this.route=l,this.usersService=n,this.id=null,this.user=null}return l.prototype.ngOnInit=function(){var l=this;this.route.paramMap.subscribe(function(n){l.id=n.get("id"),l.usersService.getById({_id:l.id}).subscribe(function(n){l.user=n})})},l}(),o=function(){return function(){}}(),r=u("pMnS"),b=u("Ip0R"),e=u("/oOx"),t=u("A0gW"),p=u("ZYCi"),a=u("6Qg2"),c=i.nb({encapsulation:0,styles:[[""]],data:{}});function f(l){return i.Fb(0,[(l()(),i.pb(0,0,null,null,26,"div",[["class","container-fluid well span6"]],null,null,null,null,null)),(l()(),i.pb(1,0,null,null,25,"div",[["class","row-fluid"]],null,null,null,null,null)),(l()(),i.pb(2,0,null,null,1,"div",[["class","span2"]],null,null,null,null,null)),(l()(),i.pb(3,0,null,null,0,"img",[["class","rounded img-circle responsive img-fluid img-thumbnail"],["src","https://unsplash.it/600/400"]],null,null,null,null,null)),(l()(),i.pb(4,0,null,null,7,"div",[["class","span8"]],null,null,null,null,null)),(l()(),i.pb(5,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),i.Db(6,null,["",""])),(l()(),i.pb(7,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),i.Db(8,null,["Email: ",""])),(l()(),i.pb(9,0,null,null,2,"h6",[],null,null,null,null,null)),(l()(),i.pb(10,0,null,null,1,"a",[["href","#"]],null,null,null,null,null)),(l()(),i.Db(-1,null,["More... "])),(l()(),i.pb(12,0,null,null,14,"div",[["class","span2"]],null,null,null,null,null)),(l()(),i.pb(13,0,null,null,13,"div",[["class","btn-group"]],null,null,null,null,null)),(l()(),i.pb(14,0,null,null,3,"a",[["class","btn dropdown-toggle btn-info"],["data-toggle","dropdown"],["href","#"]],null,null,null,null,null)),(l()(),i.Db(-1,null,[" Action "])),(l()(),i.pb(16,0,null,null,0,"span",[["class","icon-cog icon-white"]],null,null,null,null,null)),(l()(),i.pb(17,0,null,null,0,"span",[["class","caret"]],null,null,null,null,null)),(l()(),i.pb(18,0,null,null,8,"ul",[["class","dropdown-menu"]],null,null,null,null,null)),(l()(),i.pb(19,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),i.pb(20,0,null,null,2,"a",[["href","#"]],null,null,null,null,null)),(l()(),i.pb(21,0,null,null,0,"span",[["class","icon-wrench"]],null,null,null,null,null)),(l()(),i.Db(-1,null,[" Modify"])),(l()(),i.pb(23,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),i.pb(24,0,null,null,2,"a",[["href","#"]],null,null,null,null,null)),(l()(),i.pb(25,0,null,null,0,"span",[["class","icon-trash"]],null,null,null,null,null)),(l()(),i.Db(-1,null,[" Delete"]))],null,function(l,n){var u=n.component;l(n,6,0,u.user.username),l(n,8,0,u.user.email)})}function d(l){return i.Fb(0,[(l()(),i.eb(16777216,null,null,1,null,f)),i.ob(1,16384,null,0,b.k,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.pb(2,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i.Db(-1,null,["profile works!"])),(l()(),i.Db(4,null,["\n","\n"])),i.yb(0,b.e,[]),(l()(),i.pb(6,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),i.pb(7,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),i.pb(8,0,null,null,1,"vf-gallery",[],null,null,null,e.b,e.a)),i.ob(9,114688,null,0,t.a,[],null,null)],function(l,n){l(n,1,0,n.component.user),l(n,9,0)},function(l,n){var u=n.component;l(n,4,0,i.Eb(n,4,0,i.xb(n,5).transform(u.user)))})}function h(l){return i.Fb(0,[(l()(),i.pb(0,0,null,null,1,"vf-profile",[],null,null,null,d,c)),i.ob(1,114688,null,0,s,[p.a,a.a],null,null)],function(l,n){l(n,1,0)},null)}var w=i.lb("vf-profile",s,h,{},{},[]),g=u("forY");u.d(n,"ProfileModuleNgFactory",function(){return v});var v=i.mb(o,[],function(l){return i.vb([i.wb(512,i.j,i.Z,[[8,[r.a,w]],[3,i.j],i.x]),i.wb(4608,b.m,b.l,[i.u,[2,b.u]]),i.wb(1073742336,b.b,b.b,[]),i.wb(1073742336,p.o,p.o,[[2,p.t],[2,p.k]]),i.wb(1073742336,g.a,g.a,[]),i.wb(1073742336,o,o,[]),i.wb(1024,p.i,function(){return[[{path:"user/:id",component:s}]]},[])])})}}]);