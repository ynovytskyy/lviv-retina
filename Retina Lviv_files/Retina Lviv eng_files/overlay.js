google.maps.__gjsload__('overlay', function(_){var ju=_.oa("j"),ku=_.l(),lu=function(a){a.Xf=a.Xf||new ku;return a.Xf},mu=function(a){this.U=new _.ig(function(){var b=a.Xf;if(a.getPanes()){if(a.getProjection()){if(!b.j&&a.onAdd)a.onAdd();b.j=!0;a.draw()}}else{if(b.j)if(a.onRemove)a.onRemove();else a.remove();b.j=!1}},0)},nu=function(a,b){function c(){return _.jg(e.U)}var d=lu(a),e=d.Be;e||(e=d.Be=new mu(a));_.C(d.W||[],_.S.removeListener);var f=d.da=d.da||new _.tl,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("center",g,"projectionCenterQ");
f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.Ph=d.Ph||new ju(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.W=[_.S.addListener(a,"panes_changed",c),_.S.addListener(g,"zoom_changed",c),_.S.addListener(g,"offset_changed",c),_.S.addListener(b,"projection_changed",c),_.S.addListener(g,"projectioncenterq_changed",c)];c();b instanceof _.ge&&(_.gm(b,"Ox"),_.im("Ox","-p",a))},
qu=function(a){if(a){var b=a.getMap(),c=a.__gmop;if(c){if(c.map==b)return;a.__gmop=null;c.dg()}if(b&&b instanceof _.ge){var d=b.__gm;d.overlayLayer?a.__gmop=new ou(b,a,d.overlayLayer):d.j.then(function(c){c=c.qa;var e=new pu(b,c);c.ra(e);d.overlayLayer=e;qu(a)})}}},ou=function(a,b,c){this.map=a;this.na=b;this.Ml=c;this.me=!1;_.gm(this.map,"Ox");_.im("Ox","-p",this.na);c.l.push(this);c.j&&ru(this,c.j);c.m.Of()},ru=function(a,b){a.na.get("projection")!=b&&(a.na.bindTo("panes",a.map.__gm),a.na.set("projection",
b))},pu=function(a,b){this.A=a;this.m=b;this.j=null;this.l=[]};_.A(ju,_.T);ju.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.K(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.j:null))};_.A(mu,_.T);ou.prototype.draw=function(){this.me||(this.me=!0,this.na.onAdd&&this.na.onAdd());this.na.draw&&this.na.draw()};ou.prototype.dg=function(){_.jm("Ox","-p",this.na);this.na.unbindAll();this.na.set("panes",null);this.na.set("projection",null);_.eb(this.Ml.l,this);this.me&&(this.me=!1,this.na.onRemove?this.na.onRemove():this.na.remove())};pu.prototype.dispose=_.l();
pu.prototype.yb=function(a,b,c,d,e,f){var g=this.j=this.j||new _.Wl(this.A,this.m,_.l());g.yb(a,b,c,d,e,f);a=_.va(this.l);for(b=a.next();!b.done;b=a.next())b=b.value,ru(b,g),b.draw()};_.Le("overlay",{Ig:function(a){if(a){var b=a.getMap();if(b&&b instanceof _.ge||a.__gmop)qu(a);else{b=a.getMap();var c=lu(a),d=c.bl;c.bl=b;d&&(c=lu(a),(d=c.da)&&d.unbindAll(),(d=c.Ph)&&d.unbindAll(),a.unbindAll(),a.set("panes",null),a.set("projection",null),_.C(c.W,_.S.removeListener),c.W=null,c.Be&&(c.Be.U.La(),c.Be=null),_.jm("Ox","-p",a));b&&nu(a,b)}}},preventMapHitsFrom:function(a){_.Ym(a,{onClick:function(a){return _.qm(a.event)},Ga:function(a){return _.nm(a)},Yb:function(a){return _.om(a)},Ta:function(a){return _.om(a)},
Ja:function(a){return _.pm(a)}}).vc(!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.yd);a.addEventListener("contextmenu",_.yd);a.addEventListener("dblclick",_.yd);a.addEventListener("mousedown",_.yd);a.addEventListener("mousemove",_.yd);a.addEventListener("MSPointerDown",_.yd);a.addEventListener("pointerdown",_.yd);a.addEventListener("touchstart",_.yd);a.addEventListener("wheel",_.yd)}});});

/*
     FILE ARCHIVED ON 23:01:03 Mar 14, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:23:58 Sep 17, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  CDXLines.iter: 11.082 (3)
  esindex: 0.007
  exclusion.robots.policy: 0.157
  PetaboxLoader3.resolve: 479.904 (2)
  LoadShardBlock: 72.364 (3)
  load_resource: 1056.09
  PetaboxLoader3.datanode: 140.926 (5)
  RedisCDXSource: 218.434
  captures_list: 336.35
  exclusion.robots: 0.17
*/