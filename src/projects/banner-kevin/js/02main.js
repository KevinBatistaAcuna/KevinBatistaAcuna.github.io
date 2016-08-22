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
  var tl = new TimelineLite(),
      nube = $(".nube"),
      nube1 = $(".nube1"),
      avion = $(".avion"),
      lenguages = $(".lenguages"),
      html = $(".html"),
      js = $(".js"),
      css = $(".css"),
      jquery = $(".jquery"),
      angular = $(".angular"),
      greensock = $(".greensock"),
      gulp = $(".gulp"),
      git = $(".git"),
      grunt = $(".grunt"),
      title = $(".title_contact"),
      contact = $(".contact");

  window.tl = tl;

  tl.to(nube, 300, {x: 1000}, "nube")
    .to(nube1, 300, {x: 1000}, "nube")
    .to(avion, 20, {x: 1800}, "nube")
    .from(lenguages, 3, {y: -400, ease: Bounce.easeOut}, "-=290")
    .from(html, 3, {width: "5px", height: "5px", opacity: 0}, "-=287")
    .from(js, 3, {width: "5px", height: "5px", opacity: 0}, "-=286")
    .from(css, 3, {width: "5px", height: "5px", opacity: 0}, "-=285")
    .to(html, 3, {width: "5px", height: "5px", opacity: 0}, "-=283")
    .to(js, 3, {width: "5px", height: "5px", opacity: 0}, "-=282")
    .to(css, 3, {width: "5px", height: "5px", opacity: 0}, "-=281")
    .from(jquery, 3, {width: "5px", height: "5px", opacity: 0}, "-=283")
    .from(angular, 3, {width: "5px", height: "5px", opacity: 0}, "-=282")
    .from(greensock, 3, {width: "5px", height: "5px", opacity: 0}, "-=281")
    .to(jquery, 3, {width: "5px", height: "5px", opacity: 0}, "-=279")
    .to(angular, 3, {width: "5px", height: "5px", opacity: 0}, "-=278")
    .to(greensock, 3, {width: "5px", height: "5px", opacity: 0}, "-=277")
    .from(gulp, 3, {width: "5px", height: "5px", opacity: 0}, "-=279")
    .from(git, 3, {width: "5px", height: "5px", opacity: 0}, "-=278")
    .from(grunt, 3, {width: "5px", height: "5px", opacity: 0}, "-=277")
    .to(gulp, 3, {width: "5px", height: "5px", opacity: 0}, "-=275")
    .to(git, 3, {width: "5px", height: "5px", opacity: 0}, "-=274")
    .to(grunt, 3, {width: "5px", height: "5px", opacity: 0}, "-=273")
    .from([title,contact], 3, {y: -400, ease: Bounce.easeOut}, "-=272")
    .to(lenguages, 2, {y: 100, ease: Elastic.easeIn}, "-=273");
}
