var LTApp=function(){this.INITED=!1};LTApp.prototype={preload:function(e,t){this.sources=e;var n,r=0;if($("*").each(function(e,t){"SCRIPT"!==t.tagName&&"feMergeNode"!==t.tagName&&this.findImageInElement(t)}.bind(this)),0===this.sources.length)t.call();else if(document.images)for(var a=0;a<this.sources.length;a++)n=new Image,n.onload=function(){r++,r===this.sources.length&&t.call()}.bind(this),n.src=this.sources[a];else t.call()},determineUrl:function(e){var t,n="",r=e.currentStyle||window.getComputedStyle(e,null);return""!==r.backgroundImage&&"none"!==r.backgroundImage||""!==e.style.backgroundImage&&"none"!==e.style.backgroundImage?(t=r.backgroundImage||e.style.backgroundImage,t.indexOf("gradient(")===-1&&(n=t.split(","))):"undefined"!=typeof e.getAttribute("src")&&"img"===e.nodeName.toLowerCase()&&(n=e.getAttribute("src")),[].concat(n)},findImageInElement:function(e){var t=this.determineUrl(e),n=navigator.userAgent.match(/msie/i)||navigator.userAgent.match(/Opera/i)?"?rand="+Math.random():"";t.forEach(function(e){e=this.stripUrl(e),""!==e&&this.sources.push(e+n)}.bind(this))},stripUrl:function(e){return e=$.trim(e),e=e.replace(/url\(\"/g,""),e=e.replace(/url\(/g,""),e=e.replace(/\"\)/g,""),e=e.replace(/\)/g,"")}};
"use strict";function App_dream(){return void 0!==App_dream.instance?App_dream.instance:(App_dream.instance=this,LTApp.call(this),App_dream.instance)}App_dream.prototype=new LTApp,App_dream.fn=App_dream.prototype,App_dream.getInstance=function(){return void 0===App_dream.instance&&new App_dream,App_dream.instance},App_dream.fn.init=function(){this.INITED||(this.INITED=!0,this.preload([],this.display.bind(this)))},App_dream.fn.display=function(){this.steps=$(".step"),this.goTo(1),$("body").removeClass("loading"),$("body").addClass("loaded")},App_dream.fn.goTo=function(e){this.steps.each(function(o,t){var a=$(t);a.data("order")==e&&($(".step-active").removeClass("step-active"),a.addClass("step-active"))}),this["step"+e]&&this["step"+e]()},App_dream.fn.goToAndWait=function(e,o){this.steps.each(function(t,a){var n,s=$(a);s.data("order")==e&&(n=$(".step-active"),s.addClass("step-active"),setTimeout(function(){n.removeClass("step-active")},o))}),this["step"+e]&&this["step"+e]()},App_dream.fn.step1=function(){var e=new TimelineMax,o=$("#header"),t=$("#myPic"),a=($(".pic"),$(".history")),n=$(".contact"),s=$("#contact"),i=$(".mouse"),r=$(".home-left"),l=$(".home-right"),c=$(".picbyn"),m=$(".picyellow"),p=$(".picred"),w=$(".picblue"),u=$(".picgreen"),v=$(".follow"),I=$("#aboutme"),d=$(".about"),M=$("#jobs"),y=$(".jobs"),x=$("#blog"),b=$(".blog");window.tl=e,e.addLabel("intro").to(main,3,{css:{"-webkit-filter":"blur(1px)"}},"intro"),t.on("mouseover",function(){var e=new TimelineMax;e.addLabel("rotate").to(c,1,{rotationY:1800,opacity:0,ease:Power4.easeIn},"rotate").to(a,1,{rotationY:1800,opacity:1,ease:Power4.easeIn},"rotate")}),t.on("mouseleave",function(){var e=new TimelineMax;e.addLabel("rotate").to(a,1,{rotationY:0,opacity:0,ease:Power4.easeIn},"rotate").to(c,1,{rotationY:0,opacity:1,ease:Power4.easeIn},"rotate")}),n.on("click",function(){var e=new TimelineMax;e.addLabel("move").to(o,5,{x:"-100%",ease:SlowMo.easeInOut},"move").to(s,5,{x:"-100%",ease:SlowMo.easeInOut},"move").to(t,5,{x:"+100%",ease:SlowMo.easeInOut},"move").to(i,5,{x:"+25%",ease:SlowMo.easeInOut,color:"#FFF"},"move").to(main,7,{css:{"-webkit-filter":"blur(0px)",ease:SlowMo.easeInOut}},"move").to(c,5,{opacity:0,ease:SlowMo.easeInOut},"move").to(m,2,{opacity:1,ease:SlowMo.easeInOut},"move+=1"),t.on("mouseover",function(){var e=new TimelineMax;e.addLabel("rotate").to(m,1,{rotationY:1800,opacity:0,ease:Power4.easeIn},"rotate").to(v,1,{rotationY:1800,opacity:1,ease:Power4.easeIn},"rotate")}),t.on("mouseleave",function(){var e=new TimelineMax;e.addLabel("rotate").to(v,1,{rotationY:0,opacity:0,ease:Power4.easeIn},"rotate").to(m,1,{rotationY:0,opacity:1,ease:Power4.easeIn},"rotate")}),r.on("click",function(){var e=new TimelineMax;e.addLabel("move").to(o,5,{x:"+0%",ease:SlowMo.easeInOut},"move").to(s,5,{x:"+0%",ease:SlowMo.easeInOut},"move").to(t,5,{x:"-0%",ease:SlowMo.easeInOut},"move").to(i,5,{x:"-0%",ease:SlowMo.easeInOut,color:"#000"},"move").to(main,6,{css:{"-webkit-filter":"blur(1px)",ease:SlowMo.easeInOut}},"move").to(c,5,{opacity:1,ease:SlowMo.easeInOut},"move").to(m,2,{opacity:0,ease:SlowMo.easeInOut},"move"),t.on("mouseover",function(){var e=new TimelineMax;e.addLabel("rotate").to(c,1,{rotationY:1800,opacity:0,ease:Power4.easeIn},"rotate").to(a,1,{rotationY:1800,opacity:1,ease:Power4.easeIn},"rotate").set(v,{opacity:0})}),t.on("mouseleave",function(){var e=new TimelineMax;e.addLabel("rotate").to(a,1,{rotationY:0,opacity:0,ease:Power4.easeIn},"rotate").to(c,1,{rotationY:0,opacity:1,ease:Power4.easeIn},"rotate").set(m,{opacity:0})})})}),d.on("click",function(){var e=new TimelineMax;e.addLabel("move").to(o,5,{x:"-100%",ease:SlowMo.easeInOut},"move").to(I,5,{x:"-100%",ease:SlowMo.easeInOut},"move").to(t,5,{x:"+100%",ease:SlowMo.easeInOut},"move").to(i,5,{x:"+25%",ease:SlowMo.easeInOut,color:"#FFF"},"move").to(main,7,{css:{"-webkit-filter":"blur(0px)",ease:SlowMo.easeInOut}},"move").to(c,5,{opacity:0,ease:SlowMo.easeInOut},"move").to(u,2,{opacity:1,ease:SlowMo.easeInOut},"move+=1"),t.on("mouseover",function(){var e=new TimelineMax;e.addLabel("rotate").to(u,1,{rotationY:1800,opacity:0,ease:Power4.easeIn},"rotate").to(v,1,{rotationY:1800,opacity:1,ease:Power4.easeIn},"rotate")}),t.on("mouseleave",function(){var e=new TimelineMax;e.addLabel("rotate").to(v,1,{rotationY:0,opacity:0,ease:Power4.easeIn},"rotate").to(u,1,{rotationY:0,opacity:1,ease:Power4.easeIn},"rotate")}),r.on("click",function(){var e=new TimelineMax;e.addLabel("move").to(o,5,{x:"+0%",ease:SlowMo.easeInOut},"move").to(I,5,{x:"+0%",ease:SlowMo.easeInOut},"move").to(t,5,{x:"-0%",ease:SlowMo.easeInOut},"move").to(i,5,{x:"-0%",ease:SlowMo.easeInOut,color:"#000"},"move").to(main,6,{css:{"-webkit-filter":"blur(1px)",ease:SlowMo.easeInOut}},"move").to(c,5,{opacity:1,ease:SlowMo.easeInOut},"move").to(u,2,{opacity:0,ease:SlowMo.easeInOut},"move"),t.on("mouseover",function(){var e=new TimelineMax;e.addLabel("rotate").to(c,1,{rotationY:1800,opacity:0,ease:Power4.easeIn},"rotate").to(a,1,{rotationY:1800,opacity:1,ease:Power4.easeIn},"rotate").set(v,{opacity:0})}),t.on("mouseleave",function(){var e=new TimelineMax;e.addLabel("rotate").to(a,1,{rotationY:0,opacity:0,ease:Power4.easeIn},"rotate").to(c,1,{rotationY:0,opacity:1,ease:Power4.easeIn},"rotate").set(u,{opacity:0})})})}),y.on("click",function(){var e=new TimelineMax;e.addLabel("move").to(o,5,{x:"+100%",ease:SlowMo.easeInOut},"move").to(M,5,{x:"+100%",ease:SlowMo.easeInOut},"move").to(t,5,{x:"-100%",ease:SlowMo.easeInOut},"move").to(i,5,{x:"-25%",ease:SlowMo.easeInOut,color:"#FFF"},"move").to(main,7,{css:{"-webkit-filter":"blur(0px)",ease:SlowMo.easeInOut}},"move").to(c,5,{opacity:0,ease:SlowMo.easeInOut},"move").to(p,2,{opacity:1,ease:SlowMo.easeInOut},"move+=1"),t.on("mouseover",function(){var e=new TimelineMax;e.addLabel("rotate").to(p,1,{rotationY:1800,opacity:0,ease:Power4.easeIn},"rotate").to(v,1,{rotationY:1800,opacity:1,ease:Power4.easeIn},"rotate")}),t.on("mouseleave",function(){var e=new TimelineMax;e.addLabel("rotate").to(v,1,{rotationY:0,opacity:0,ease:Power4.easeIn},"rotate").to(p,1,{rotationY:0,opacity:1,ease:Power4.easeIn},"rotate")}),l.on("click",function(){var e=new TimelineMax;e.addLabel("move").to(o,5,{x:"0%",ease:SlowMo.easeInOut},"move").to(M,5,{x:"0%",ease:SlowMo.easeInOut},"move").to(t,5,{x:"0%",ease:SlowMo.easeInOut},"move").to(i,5,{x:"0%",ease:SlowMo.easeInOut,color:"#000"},"move").to(main,6,{css:{"-webkit-filter":"blur(1px)",ease:SlowMo.easeInOut}},"move").to(c,5,{opacity:1,ease:SlowMo.easeInOut},"move").to(p,2,{opacity:0,ease:SlowMo.easeInOut},"move"),t.on("mouseover",function(){var e=new TimelineMax;e.addLabel("rotate").to(c,1,{rotationY:1800,opacity:0,ease:Power4.easeIn},"rotate").to(a,1,{rotationY:1800,opacity:1,ease:Power4.easeIn},"rotate").set(v,{opacity:0})}),t.on("mouseleave",function(){var e=new TimelineMax;e.addLabel("rotate").to(a,1,{rotationY:0,opacity:0,ease:Power4.easeIn},"rotate").to(c,1,{rotationY:0,opacity:1,ease:Power4.easeIn},"rotate").set(p,{opacity:0})})})}),b.on("click",function(){var e=new TimelineMax;e.addLabel("move").to(o,5,{x:"+100%",ease:SlowMo.easeInOut},"move").to(x,5,{x:"+100%",ease:SlowMo.easeInOut},"move").to(t,5,{x:"-100%",ease:SlowMo.easeInOut},"move").to(i,5,{x:"-25%",ease:SlowMo.easeInOut,color:"#FFF"},"move").to(main,7,{css:{"-webkit-filter":"blur(0px)",ease:SlowMo.easeInOut}},"move").to(c,5,{opacity:0,ease:SlowMo.easeInOut},"move").to(w,2,{opacity:1,ease:SlowMo.easeInOut},"move+=1"),t.on("mouseover",function(){var e=new TimelineMax;e.addLabel("rotate").to(w,1,{rotationY:1800,opacity:0,ease:Power4.easeIn},"rotate").to(v,1,{rotationY:1800,opacity:1,ease:Power4.easeIn},"rotate")}),t.on("mouseleave",function(){var e=new TimelineMax;e.addLabel("rotate").to(v,1,{rotationY:0,opacity:0,ease:Power4.easeIn},"rotate").to(w,1,{rotationY:0,opacity:1,ease:Power4.easeIn},"rotate")}),l.on("click",function(){var e=new TimelineMax;e.addLabel("move").to(o,5,{x:"0%",ease:SlowMo.easeInOut},"move").to(x,5,{x:"0%",ease:SlowMo.easeInOut},"move").to(t,5,{x:"0%",ease:SlowMo.easeInOut},"move").to(i,5,{x:"0%",ease:SlowMo.easeInOut,color:"#000"},"move").to(main,6,{css:{"-webkit-filter":"blur(1px)",ease:SlowMo.easeInOut}},"move").to(c,5,{opacity:1,ease:SlowMo.easeInOut},"move").to(w,2,{opacity:0,ease:SlowMo.easeInOut},"move"),t.on("mouseover",function(){var e=new TimelineMax;e.addLabel("rotate").to(c,1,{rotationY:1800,opacity:0,ease:Power4.easeIn},"rotate").to(a,1,{rotationY:1800,opacity:1,ease:Power4.easeIn},"rotate").set(v,{opacity:0})}),t.on("mouseleave",function(){var e=new TimelineMax;e.addLabel("rotate").to(a,1,{rotationY:0,opacity:0,ease:Power4.easeIn},"rotate").to(c,1,{rotationY:0,opacity:1,ease:Power4.easeIn},"rotate").set(w,{opacity:0})})})})};