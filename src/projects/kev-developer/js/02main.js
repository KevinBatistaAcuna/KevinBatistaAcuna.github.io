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


App_dream.fn.step1 = function(){

// global variables
    var tl        = new TimelineMax(),
        header    = $("#header"),
        myPic     = $("#myPic"),
        byw       = $("#byw"),
        yellow    = $("#yellow"),
        red       = $("#red"),
        blue      = $("#blue"),
        green     = $("#green"),
        pic       = $(".pic"),
        text      = $(".text"),
        contactMe = $('.contact'),
        contact   = $('#contact'),
        mouse     = $('.mouse'),
        homeLeft  = $('.home-left'),
        homeRight = $('.home-right'),
        follow    = $('.follow'),
        aboutme   = $('#aboutme'),
        about     = $('.about'),
        myjobs    = $('#jobs'),
        jobs      = $('.jobs'),
        myblog    = $('#blog'),
        blog      = $('.blog');

// debug animation from console
window.tl = tl;

// main animation
    tl.addLabel('intro')
      .to(main, 3, {css:{'-webkit-filter' : 'blur(1px)'}}, 'intro');

// cta arrow

  myPic.on('mouseover', function(){
    var tl2 = new TimelineMax();      
    tl2
      .addLabel('rotate')
      .to(pic, 1, {rotationY: 1800, opacity: 0, ease:Power4.easeIn}, 'rotate')
      .to(text, 1, {rotationY: 1800, opacity: 1, ease:Power4.easeIn}, 'rotate')
  });
  myPic.on('mouseleave', function(){
    var tl3 = new TimelineMax();      
    tl3
      .addLabel('rotate')
      .to(text, 1, {rotationY: 0, opacity: 0, ease:Power4.easeIn}, 'rotate')
      .to(pic, 1, {rotationY: 0, opacity: 1, ease:Power4.easeIn}, 'rotate')
  });

  contactMe.on('click', function(){
    var tl4 = new TimelineMax();      
    tl4
      .addLabel('move')
      .to(header, 5, {x: '-100%', ease: SlowMo.easeInOut}, 'move')
      .to(contact, 5, {x: '-100%', ease: SlowMo.easeInOut}, 'move')
      .to(myPic, 5, {x: '+100%', ease: SlowMo.easeInOut}, 'move')
      .to(mouse, 5, {x: '+25%', ease: SlowMo.easeInOut, color: '#FFF'}, 'move')
      .to(main, 7, {css:{'-webkit-filter' : 'blur(0px)', ease: SlowMo.easeInOut}}, 'move')
      .to(byw, 5, {opacity: 0, ease: SlowMo.easeInOut}, 'move')
      .to(yellow, 2, {opacity: 1, ease: SlowMo.easeInOut}, 'move+=1');

    homeLeft.on('click', function(){
      var tl7 = new TimelineMax();      
      tl7
        .addLabel('move')
        .to(header, 5, {x: '+0%', ease: SlowMo.easeInOut}, 'move')
        .to(contact, 5, {x: '+0%', ease: SlowMo.easeInOut}, 'move')
        .to(myPic, 5, {x: '-0%', ease: SlowMo.easeInOut}, 'move')
        .to(mouse, 5, {x: '-0%', ease: SlowMo.easeInOut, color: '#000'}, 'move')
        .to(main, 6, {css:{'-webkit-filter' : 'blur(1px)', ease: SlowMo.easeInOut}}, 'move')
        .to(byw, 5, {opacity: 1, ease: SlowMo.easeInOut}, 'move')
        .to(yellow, 2, {opacity: 0, ease: SlowMo.easeInOut}, 'move');
    });
  });

  about.on('click', function(){
    var tl4 = new TimelineMax();      
    tl4
      .addLabel('move')
      .to(header, 5, {x: '-100%', ease: SlowMo.easeInOut}, 'move')
      .to(aboutme, 5, {x: '-100%', ease: SlowMo.easeInOut}, 'move')
      .to(myPic, 5, {x: '+100%', ease: SlowMo.easeInOut}, 'move')
      .to(mouse, 5, {x: '+25%', ease: SlowMo.easeInOut, color: '#FFF'}, 'move')
      .to(main, 7, {css:{'-webkit-filter' : 'blur(0px)', ease: SlowMo.easeInOut}}, 'move')
      .to(byw, 5, {opacity: 0, ease: SlowMo.easeInOut}, 'move')
      .to(green, 2, {opacity: 1, ease: SlowMo.easeInOut}, 'move+=1');

    homeLeft.on('click', function(){
      var tl7 = new TimelineMax();      
      tl7
        .addLabel('move')
        .to(header, 5, {x: '+0%', ease: SlowMo.easeInOut}, 'move')
        .to(aboutme, 5, {x: '+0%', ease: SlowMo.easeInOut}, 'move')
        .to(myPic, 5, {x: '-0%', ease: SlowMo.easeInOut}, 'move')
        .to(mouse, 5, {x: '-0%', ease: SlowMo.easeInOut, color: '#000'}, 'move')
        .to(main, 6, {css:{'-webkit-filter' : 'blur(1px)', ease: SlowMo.easeInOut}}, 'move')
        .to(byw, 5, {opacity: 1, ease: SlowMo.easeInOut}, 'move')
        .to(green, 2, {opacity: 0, ease: SlowMo.easeInOut}, 'move');
    });
  });  

  jobs.on('click', function(){
    var tl4 = new TimelineMax();      
    tl4
      .addLabel('move')
      .to(header, 5, {x: '+100%', ease: SlowMo.easeInOut}, 'move')
      .to(myjobs, 5, {x: '+100%', ease: SlowMo.easeInOut}, 'move')
      .to(myPic, 5, {x: '-100%', ease: SlowMo.easeInOut}, 'move')
      .to(mouse, 5, {x: '-25%', ease: SlowMo.easeInOut, color: '#FFF'}, 'move')
      .to(main, 7, {css:{'-webkit-filter' : 'blur(0px)', ease: SlowMo.easeInOut}}, 'move')
      .to(byw, 5, {opacity: 0, ease: SlowMo.easeInOut}, 'move')
      .to(red, 2, {opacity: 1, ease: SlowMo.easeInOut}, 'move+=1');

    homeRight.on('click', function(){
      var tl7 = new TimelineMax();      
      tl7
        .addLabel('move')
        .to(header, 5, {x: '0%', ease: SlowMo.easeInOut}, 'move')
        .to(myjobs, 5, {x: '0%', ease: SlowMo.easeInOut}, 'move')
        .to(myPic, 5, {x: '0%', ease: SlowMo.easeInOut}, 'move')
        .to(mouse, 5, {x: '0%', ease: SlowMo.easeInOut, color: '#000'}, 'move')
        .to(main, 6, {css:{'-webkit-filter' : 'blur(1px)', ease: SlowMo.easeInOut}}, 'move')
        .to(picbyn, 5, {opacity: 1, ease: SlowMo.easeInOut}, 'move')
        .to(picred, 2, {opacity: 0, ease: SlowMo.easeInOut}, 'move');
    });
  });

  blog.on('click', function(){
    var tl4 = new TimelineMax();      
    tl4
      .addLabel('move')
      .to(header, 5, {x: '+100%', ease: SlowMo.easeInOut}, 'move')
      .to(myblog, 5, {x: '+100%', ease: SlowMo.easeInOut}, 'move')
      .to(myPic, 5, {x: '-100%', ease: SlowMo.easeInOut}, 'move')
      .to(mouse, 5, {x: '-25%', ease: SlowMo.easeInOut, color: '#FFF'}, 'move')
      .to(main, 7, {css:{'-webkit-filter' : 'blur(0px)', ease: SlowMo.easeInOut}}, 'move')
      .to(byw, 5, {opacity: 0, ease: SlowMo.easeInOut}, 'move')
      .to(blue, 2, {opacity: 1, ease: SlowMo.easeInOut}, 'move+=1');

    homeRight.on('click', function(){
      var tl7 = new TimelineMax();      
      tl7
        .addLabel('move')
        .to(header, 5, {x: '0%', ease: SlowMo.easeInOut}, 'move')
        .to(myblog, 5, {x: '0%', ease: SlowMo.easeInOut}, 'move')
        .to(myPic, 5, {x: '0%', ease: SlowMo.easeInOut}, 'move')
        .to(mouse, 5, {x: '0%', ease: SlowMo.easeInOut, color: '#000'}, 'move')
        .to(main, 6, {css:{'-webkit-filter' : 'blur(1px)', ease: SlowMo.easeInOut}}, 'move')
        .to(byw, 5, {opacity: 1, ease: SlowMo.easeInOut}, 'move')
        .to(blue, 2, {opacity: 0, ease: SlowMo.easeInOut}, 'move');
    });
  }); 
    
};