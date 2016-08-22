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

// global variables
    var tl        = new TimelineMax(),
        header    = $("#header"),
        myPic     = $("#myPic"),
        pic       = $(".pic"),
        history   = $(".history"),
        contactMe = $('.contact'),
        contact   = $('#contact'),
        mouse     = $('.mouse'),
        homeLeft  = $('.home-left'),
        homeRight = $('.home-right'),
        picbyn    = $('.picbyn'),
        picyellow = $('.picyellow'),
        picred    = $('.picred'),
        picblue   = $('.picblue'),
        picgreen  = $('.picgreen'),
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

    // function totalTimePrint() {
    //   console.log(tl.totalTime());
    // }

// cta arrow

  myPic.on('mouseover', function(){
    var tl2 = new TimelineMax();      
    tl2
      .addLabel('rotate')
      .to(picbyn, 1, {rotationY: 1800, opacity: 0, ease:Power4.easeIn}, 'rotate')
      .to(history, 1, {rotationY: 1800, opacity: 1, ease:Power4.easeIn}, 'rotate')
  });
  myPic.on('mouseleave', function(){
    var tl3 = new TimelineMax();      
    tl3
      .addLabel('rotate')
      .to(history, 1, {rotationY: 0, opacity: 0, ease:Power4.easeIn}, 'rotate')
      .to(picbyn, 1, {rotationY: 0, opacity: 1, ease:Power4.easeIn}, 'rotate')
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
      .to(picbyn, 5, {opacity: 0, ease: SlowMo.easeInOut}, 'move')
      .to(picyellow, 2, {opacity: 1, ease: SlowMo.easeInOut}, 'move+=1');

      myPic.on('mouseover', function(){
        var tl5 = new TimelineMax();      
        tl5
          .addLabel('rotate')
          .to(picyellow, 1, {rotationY: 1800, opacity: 0, ease:Power4.easeIn}, 'rotate')
          .to(follow, 1, {rotationY: 1800, opacity: 1, ease:Power4.easeIn}, 'rotate')
      });
      myPic.on('mouseleave', function(){
        var tl6 = new TimelineMax();      
          tl6
            .addLabel('rotate')
            .to(follow, 1, {rotationY: 0, opacity: 0, ease:Power4.easeIn}, 'rotate')
            .to(picyellow, 1, {rotationY: 0, opacity: 1, ease:Power4.easeIn}, 'rotate')
        });

      homeLeft.on('click', function(){
    var tl7 = new TimelineMax();      
    tl7
      .addLabel('move')
      .to(header, 5, {x: '+0%', ease: SlowMo.easeInOut}, 'move')
      .to(contact, 5, {x: '+0%', ease: SlowMo.easeInOut}, 'move')
      .to(myPic, 5, {x: '-0%', ease: SlowMo.easeInOut}, 'move')
      .to(mouse, 5, {x: '-0%', ease: SlowMo.easeInOut, color: '#000'}, 'move')
      .to(main, 6, {css:{'-webkit-filter' : 'blur(1px)', ease: SlowMo.easeInOut}}, 'move')
      .to(picbyn, 5, {opacity: 1, ease: SlowMo.easeInOut}, 'move')
      .to(picyellow, 2, {opacity: 0, ease: SlowMo.easeInOut}, 'move');

      myPic.on('mouseover', function(){
        var tl8 = new TimelineMax();      
          tl8
            .addLabel('rotate')
            .to(picbyn, 1, {rotationY: 1800, opacity: 0, ease:Power4.easeIn}, 'rotate')
            .to(history, 1, {rotationY: 1800, opacity: 1, ease:Power4.easeIn}, 'rotate')
            .set(follow, {opacity: 0})
        });
      myPic.on('mouseleave', function(){
        var tl9 = new TimelineMax();      
          tl9
            .addLabel('rotate')
            .to(history, 1, {rotationY: 0, opacity: 0, ease:Power4.easeIn}, 'rotate')
            .to(picbyn, 1, {rotationY: 0, opacity: 1, ease:Power4.easeIn}, 'rotate')
            .set(picyellow, {opacity: 0})
        });
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
      .to(picbyn, 5, {opacity: 0, ease: SlowMo.easeInOut}, 'move')
      .to(picgreen, 2, {opacity: 1, ease: SlowMo.easeInOut}, 'move+=1');

      myPic.on('mouseover', function(){
        var tl5 = new TimelineMax();      
        tl5
          .addLabel('rotate')
          .to(picgreen, 1, {rotationY: 1800, opacity: 0, ease:Power4.easeIn}, 'rotate')
          .to(follow, 1, {rotationY: 1800, opacity: 1, ease:Power4.easeIn}, 'rotate')
      });
      myPic.on('mouseleave', function(){
        var tl6 = new TimelineMax();      
          tl6
            .addLabel('rotate')
            .to(follow, 1, {rotationY: 0, opacity: 0, ease:Power4.easeIn}, 'rotate')
            .to(picgreen, 1, {rotationY: 0, opacity: 1, ease:Power4.easeIn}, 'rotate')
        });

      homeLeft.on('click', function(){
        var tl7 = new TimelineMax();      
        tl7
          .addLabel('move')
          .to(header, 5, {x: '+0%', ease: SlowMo.easeInOut}, 'move')
          .to(aboutme, 5, {x: '+0%', ease: SlowMo.easeInOut}, 'move')
          .to(myPic, 5, {x: '-0%', ease: SlowMo.easeInOut}, 'move')
          .to(mouse, 5, {x: '-0%', ease: SlowMo.easeInOut, color: '#000'}, 'move')
          .to(main, 6, {css:{'-webkit-filter' : 'blur(1px)', ease: SlowMo.easeInOut}}, 'move')
          .to(picbyn, 5, {opacity: 1, ease: SlowMo.easeInOut}, 'move')
          .to(picgreen, 2, {opacity: 0, ease: SlowMo.easeInOut}, 'move');

          myPic.on('mouseover', function(){
            var tl8 = new TimelineMax();      
              tl8
                .addLabel('rotate')
                .to(picbyn, 1, {rotationY: 1800, opacity: 0, ease:Power4.easeIn}, 'rotate')
                .to(history, 1, {rotationY: 1800, opacity: 1, ease:Power4.easeIn}, 'rotate')
                .set(follow, {opacity: 0})
            });
          myPic.on('mouseleave', function(){
            var tl9 = new TimelineMax();      
              tl9
                .addLabel('rotate')
                .to(history, 1, {rotationY: 0, opacity: 0, ease:Power4.easeIn}, 'rotate')
                .to(picbyn, 1, {rotationY: 0, opacity: 1, ease:Power4.easeIn}, 'rotate')
                .set(picgreen, {opacity: 0})
            });
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
      .to(picbyn, 5, {opacity: 0, ease: SlowMo.easeInOut}, 'move')
      .to(picred, 2, {opacity: 1, ease: SlowMo.easeInOut}, 'move+=1');

      myPic.on('mouseover', function(){
        var tl5 = new TimelineMax();      
        tl5
          .addLabel('rotate')
          .to(picred, 1, {rotationY: 1800, opacity: 0, ease:Power4.easeIn}, 'rotate')
          .to(follow, 1, {rotationY: 1800, opacity: 1, ease:Power4.easeIn}, 'rotate')
      });
      myPic.on('mouseleave', function(){
        var tl6 = new TimelineMax();      
          tl6
            .addLabel('rotate')
            .to(follow, 1, {rotationY: 0, opacity: 0, ease:Power4.easeIn}, 'rotate')
            .to(picred, 1, {rotationY: 0, opacity: 1, ease:Power4.easeIn}, 'rotate')
        });

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

          myPic.on('mouseover', function(){
            var tl8 = new TimelineMax();      
              tl8
                .addLabel('rotate')
                .to(picbyn, 1, {rotationY: 1800, opacity: 0, ease:Power4.easeIn}, 'rotate')
                .to(history, 1, {rotationY: 1800, opacity: 1, ease:Power4.easeIn}, 'rotate')
                .set(follow, {opacity: 0})
            });
          myPic.on('mouseleave', function(){
            var tl9 = new TimelineMax();      
              tl9
                .addLabel('rotate')
                .to(history, 1, {rotationY: 0, opacity: 0, ease:Power4.easeIn}, 'rotate')
                .to(picbyn, 1, {rotationY: 0, opacity: 1, ease:Power4.easeIn}, 'rotate')
                .set(picred, {opacity: 0})
            });
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
      .to(picbyn, 5, {opacity: 0, ease: SlowMo.easeInOut}, 'move')
      .to(picblue, 2, {opacity: 1, ease: SlowMo.easeInOut}, 'move+=1');

      myPic.on('mouseover', function(){
        var tl5 = new TimelineMax();      
        tl5
          .addLabel('rotate')
          .to(picblue, 1, {rotationY: 1800, opacity: 0, ease:Power4.easeIn}, 'rotate')
          .to(follow, 1, {rotationY: 1800, opacity: 1, ease:Power4.easeIn}, 'rotate')
      });
      myPic.on('mouseleave', function(){
        var tl6 = new TimelineMax();      
          tl6
            .addLabel('rotate')
            .to(follow, 1, {rotationY: 0, opacity: 0, ease:Power4.easeIn}, 'rotate')
            .to(picblue, 1, {rotationY: 0, opacity: 1, ease:Power4.easeIn}, 'rotate')
        });

      homeRight.on('click', function(){
        var tl7 = new TimelineMax();      
        tl7
          .addLabel('move')
          .to(header, 5, {x: '0%', ease: SlowMo.easeInOut}, 'move')
          .to(myblog, 5, {x: '0%', ease: SlowMo.easeInOut}, 'move')
          .to(myPic, 5, {x: '0%', ease: SlowMo.easeInOut}, 'move')
          .to(mouse, 5, {x: '0%', ease: SlowMo.easeInOut, color: '#000'}, 'move')
          .to(main, 6, {css:{'-webkit-filter' : 'blur(1px)', ease: SlowMo.easeInOut}}, 'move')
          .to(picbyn, 5, {opacity: 1, ease: SlowMo.easeInOut}, 'move')
          .to(picblue, 2, {opacity: 0, ease: SlowMo.easeInOut}, 'move');

          myPic.on('mouseover', function(){
            var tl8 = new TimelineMax();      
              tl8
                .addLabel('rotate')
                .to(picbyn, 1, {rotationY: 1800, opacity: 0, ease:Power4.easeIn}, 'rotate')
                .to(history, 1, {rotationY: 1800, opacity: 1, ease:Power4.easeIn}, 'rotate')
                .set(follow, {opacity: 0})
            });
          myPic.on('mouseleave', function(){
            var tl9 = new TimelineMax();      
              tl9
                .addLabel('rotate')
                .to(history, 1, {rotationY: 0, opacity: 0, ease:Power4.easeIn}, 'rotate')
                .to(picbyn, 1, {rotationY: 0, opacity: 1, ease:Power4.easeIn}, 'rotate')
                .set(picblue, {opacity: 0})
            });
      });
    });


};