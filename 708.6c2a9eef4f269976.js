"use strict";(self.webpackChunkstarsbit=self.webpackChunkstarsbit||[]).push([[708],{5708:(v,c,s)=>{s.r(c),s.d(c,{HomeModule:()=>w});var a=s(4755),d=s(7715),r=s(6691),l=s(7524),u=s(6859),t=s(1902),h=s(4290);function g(n,e){if(1&n&&(t.TgZ(0,"h1"),t._uU(1),t.qZA()),2&n){const o=t.oxw();t.Akn("color: {{ color }}"),t.xp6(1),t.hij(" ",o.countdown," ")}}let p=(()=>{class n{constructor(o){this.changeDetectionRef=o,this.color="white",this.displaySeconds=!0,this.countdownFinished=new t.vpe,this.countdown=0,this.dots=""}ngOnInit(){this.startCountdown(),this.showMovingDots&&this.startMovingDots()}startCountdown(){const o=(new Date).getTime()+this.duration,i=setInterval(()=>{const C=(new Date).getTime();this.countdown=Math.floor((o-C)/1e3),this.countdown<=0&&(this.countdown=0,clearInterval(i),this.countdownFinished.emit()),this.changeDetectionRef.detectChanges()},1e3)}startMovingDots(){setInterval(()=>{this.dots=this.dots.length<3?this.dots+".":"",this.changeDetectionRef.detectChanges()},800)}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-countdown"]],inputs:{duration:"duration",label:"label",showMovingDots:"showMovingDots",color:"color",displaySeconds:"displaySeconds"},outputs:{countdownFinished:"countdownFinished"},decls:4,vars:3,consts:[[1,"flex-container"],[3,"style",4,"ngIf"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2),t.qZA(),t.YNc(3,g,2,3,"h1",1),t.qZA()),2&o&&(t.xp6(2),t.AsE("",i.label,"",i.showMovingDots?i.dots:"",""),t.xp6(1),t.Q6J("ngIf",i.displaySeconds))},dependencies:[a.O5],styles:["h1[_ngcontent-%COMP%]{color:#fff;font-size:1rem;font-weight:700;text-align:center;text-align:right;display:inline-block}.flex-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:row}.flex-container[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{margin:24px}"],changeDetection:0}),n})();const m=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:4,vars:6,consts:[[1,"container"],[3,"moveStars"],["src","../../../assets/starsbit_logo_white.png",1,"logo"],[1,"loading-countdown",3,"duration","label","showMovingDots","color","displaySeconds"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"app-stars-background",1)(2,"img",2)(3,"app-countdown",3),t.qZA()),2&o&&(t.xp6(1),t.Q6J("moveStars",!0),t.xp6(2),t.Q6J("duration",5e3)("label","Coming soon")("showMovingDots",!0)("color","white")("displaySeconds",!1))},dependencies:[h.Z,p],styles:[".container[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;background-color:#232323;display:flex;padding:1%;box-sizing:border-box;z-index:3}.loading-countdown[_ngcontent-%COMP%]{position:absolute;bottom:50%;left:50%}.logo[_ngcontent-%COMP%]{width:5%;height:5%}.word[_ngcontent-%COMP%]{width-space:nowrap}.letter[_ngcontent-%COMP%]{display:inline-block;color:#fff;font-size:5vw}.stars-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;text-align:center;width:100%;height:100%}.stars-wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff}"],data:{animation:[u.$]}}),n})()}];let f=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.Bz.forChild(m),l.Bz]}),n})(),w=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[a.ez,f,r.P,d.c]}),n})()}}]);