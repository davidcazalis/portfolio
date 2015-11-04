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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxualF1ZXJ5Lm5vQ29uZmxpY3QoKTtcblxudmFyIGFwcDtcblxuKGZ1bmN0aW9uKCQpIHtcbiAgYXBwID0ge1xuXG4gICAgbG9hZGluZzogZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBlID0gKCcjbWFpbi13cmFwcGVyJyksXG4gICAgICAgICAgaGlkZGVuID0gJ2lzLWxvYWRpbmcnLFxuICAgICAgICAgIHNob3cgPSAnaXMtc2hvdyc7XG5cbiAgICAgICQod2luZG93KS5iaW5kKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJChlKS5hZGRDbGFzcyhzaG93KTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICQoZSkucmVtb3ZlQ2xhc3MoaGlkZGVuLCBzaG93KTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBzY3JvbGxUbzogZnVuY3Rpb24oKSB7XG4gICAgICAkKCcuanMtc2Nyb2xsJykuY2xpY2soIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcGFnZSA9ICQodGhpcykuYXR0cignaHJlZicpO1xuICAgICAgICB2YXIgc3BlZWQgPSA3NTA7XG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKCB7IHNjcm9sbFRvcDogJChwYWdlKS5vZmZzZXQoKS50b3AgfSwgc3BlZWQgKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGluc3RhZ3JhbWZlZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHVzZXJGZWVkID0gbmV3IEluc3RhZmVlZCh7XG4gICAgICAgICAgZ2V0OiAndXNlcicsXG4gICAgICAgICAgdXNlcklkOiA0NjIyNzY4ODksXG4gICAgICAgICAgYWNjZXNzVG9rZW46ICc0NjIyNzY4ODkuNmU5YWVjMi5iYmMxZjI0MDg2NTE0OGMxOTFjYzljMWM0OGZiMzc4YScsXG4gICAgICAgICAgdGVtcGxhdGU6ICc8bGkgY2xhc3M9XCJjLWluc3RhZmVlZF9faXRlbVwiPjxhIGhyZWY9XCJ7e2xpbmt9fVwiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwie3tpbWFnZX19XCIvPjwvYT48L2xpPicsXG4gICAgICAgICAgbGltaXQ6IDgsXG4gICAgICAgICAgcmVzb2x1dGlvbjogJ3N0YW5kYXJkX3Jlc29sdXRpb24nXG4gICAgICB9KTtcblxuICAgICAgdXNlckZlZWQucnVuKCk7XG4gICAgfSxcblxuICAgIHR3aXR0ZXJmZWVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB0d2l0dGVyQ29uZmlnID0ge1xuICAgICAgICBcImlkXCI6ICc2NTk3Mzg3OTAxNzM1NDg1NDQnLFxuICAgICAgICBcImRvbUlkXCI6ICd0d2l0dGVyZmVlZCcsXG4gICAgICAgIFwibWF4VHdlZXRzXCI6IDIsXG4gICAgICAgIFwiZW5hYmxlTGlua3NcIjogdHJ1ZSxcbiAgICAgICAgXCJzaG93UGVybWFsaW5rc1wiOiBmYWxzZSxcbiAgICAgICAgXCJzaG93SW1hZ2VzXCI6IGZhbHNlLFxuICAgICAgICBcInNob3dSZXR3ZWV0XCI6IHRydWUsXG4gICAgICAgIFwic2hvd0ludGVyYWN0aW9uXCI6IGZhbHNlLFxuICAgICAgICBcImxhbmdcIjogJ2ZyJ1xuICAgICAgfTtcblxuICAgICAgdHdpdHRlckZldGNoZXIuZmV0Y2godHdpdHRlckNvbmZpZyk7XG4gICAgfSxcblxuICAgIHRlc3RpbW9uaWFsOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB0ZXN0aW1Db25maWcgPSB7XG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgfTtcblxuICAgICAgJCgnI3Rlc3RpbW9uaWFsJykuc2xpY2sodGVzdGltQ29uZmlnKTtcblxuICAgIH0sXG5cbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgIHN2ZzRldmVyeWJvZHkoKTtcbiAgICAgIGFwcC5sb2FkaW5nKCk7XG4gICAgICBhcHAuaW5zdGFncmFtZmVlZCgpO1xuICAgICAgYXBwLnR3aXR0ZXJmZWVkKCk7XG4gICAgICBhcHAudGVzdGltb25pYWwoKTtcbiAgICAgIGFwcC5zY3JvbGxUbygpO1xuICAgIH1cbiAgfTtcblxuICBhcHAuaW5pdCgpO1xuXG59KShqUXVlcnkpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
