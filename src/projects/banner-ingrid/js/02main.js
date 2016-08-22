'use strict';

// Main Application
function App_dream() {
    if (App_dream.instance !== undefined) {
        return App_dream.instance;
    } else {
        App_dream.instance = this;
    }
    LTApp.call(this);
    return App_dream.instance;
}
App_dream.prototype = new LTApp();
App_dream.fn = App_dream.prototype;

// Singleton thing
App_dream.getInstance = function() {
    if (App_dream.instance === undefined) {
        new App_dream();
    }
    return App_dream.instance;
}

//Initialize your app, surcharge with whatever needed
App_dream.fn.init = function() {
    if (!this.INITED) {
        this.INITED = true;

        // Add the images url you want to preload in the empty array on the first parameter
        this.preload([], this.display.bind(this));
    }
};

// Shows everything, start animating
App_dream.fn.display = function() {
    this.steps = $('.step');
    this.goTo(1);
    $('body').removeClass('loading');
    $('body').addClass('loaded');
};

// Display the given step
App_dream.fn.goTo = function(stepNumber) {
    this.steps.each(function(i, el) {
        var $el = $(el);

        if ($el.data('order') == stepNumber) {
            $('.step-active').removeClass('step-active');
            $el.addClass('step-active');
        }
    });

    if (this['step' + stepNumber]) {
        this['step' + stepNumber]();
    }
};

// Display the given step
App_dream.fn.goToAndWait = function(stepNumber, seconds) {
    this.steps.each(function(i, el) {
        var $el = $(el);
        var $old;

        if ($el.data('order') == stepNumber) {
            $old = $('.step-active');
            $el.addClass('step-active');

            setTimeout(function() {
                $old.removeClass('step-active');
            }, seconds);
        }
    });

    if (this['step' + stepNumber]) {
        this['step' + stepNumber]();
    }
};


App_dream.fn.step1 = function() {

// Custom logic for this banner
  var tl = new TimelineLite();
      name1 = $(".name1"),
      rope1 = $(".rope-left"),
      rope2 = $(".rope-right"),
      html5 = $(".html"),
      css3 = $(".css"),
      js = $(".js"),
      gulp = $(".gulp"),
      git = $(".git"),
      grunt = $(".grunt"),
      jquery = $(".jquery"),
      greensock = $(".greensock"),
      contact = $(".contact"),
      ropeleft = $(".rope-left1"),
      roperight = $(".rope-right1");

window.tl = tl;

  

tl.from([name1,rope1,rope2],1,{y:-300, ease:Bounce.easeOut}, "+=1")
  .to([name1,rope1,rope2],3,{y:-300}, "+=1")
  .staggerFrom([html5,css3,js,gulp,git,grunt,jquery,greensock],1,{opacity: 0, scale: 0.1, ease:Power4.easeOut},0.3, "-=1.5")
  .staggerTo([html5,css3,js,gulp,git,grunt,jquery,greensock],1,{scale:0.1, opacity: 0, ease:Power4.easeOut},0.3,"-=1.5")
  .staggerTo([html5,css3,js,gulp,git,grunt,jquery,greensock],0.5,{opacity: 1, scale: 1, ease:Power4.easeOut},0.2,"-=1.5")
  .staggerTo([html5,css3,js,gulp,git,grunt,jquery,greensock],0.5,{scale:0.1, opacity: 0, ease:Power4.easeOut},0.2, "-=1.5")
  .to([html5,css3,js,gulp,git,grunt,jquery,greensock],1,{opacity: 1, scale: 1, ease:Bounce.easeOut})
  .to([gulp,js,css3,html5],1,{y:-300, ease:Power1.easeIn}, "lenguages+=2")
  .to([greensock,jquery,grunt,git],1,{y:600, ease:Power1.easeIn}, "lenguages+=2")
  .from([ropeleft,roperight,contact],1,{y:-300});

};

