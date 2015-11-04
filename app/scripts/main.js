"use strict";

jQuery.noConflict();

var app;

(function($) {
  app = {

    loading: function() {

      var e = ('#main-wrapper'),
          hidden = 'is-loading',
          show = 'is-show';

      $(window).bind("load", function() {
        $(e).addClass(show);
        setTimeout(function(){
          $(e).removeClass(hidden, show);
        }, 500);
      });
    },

    scrollTo: function() {
      $('.js-scroll').click( function() {
        var page = $(this).attr('href');
        var speed = 750;
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
        return false;
      });
    },

    instagramfeed: function() {
      var userFeed = new Instafeed({
          get: 'user',
          userId: 462276889,
          accessToken: '462276889.6e9aec2.bbc1f240865148c191cc9c1c48fb378a',
          template: '<li class="c-instafeed__item"><a href="{{link}}" target="_blank"><img src="{{image}}"/></a></li>',
          limit: 8,
          resolution: 'standard_resolution'
      });

      userFeed.run();
    },

    twitterfeed: function() {
      var twitterConfig = {
        "id": '659738790173548544',
        "domId": 'twitterfeed',
        "maxTweets": 2,
        "enableLinks": true,
        "showPermalinks": false,
        "showImages": false,
        "showRetweet": true,
        "showInteraction": false,
        "lang": 'fr'
      };

      twitterFetcher.fetch(twitterConfig);
    },

    testimonial: function() {
      var testimConfig = {
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        dots: true,
        arrows: false,
        slidesToScroll: 1
      };

      $('#testimonial').slick(testimConfig);

    },

    init: function() {
      svg4everybody();
      app.loading();
      app.instagramfeed();
      app.twitterfeed();
      app.testimonial();
      app.scrollTo();
    }
  };

  app.init();

})(jQuery);
