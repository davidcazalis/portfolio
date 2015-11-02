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
      app.loading();
      app.instagramfeed();
      app.twitterfeed();
      app.testimonial();
    }
  };

  app.init();

})(jQuery);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5qUXVlcnkubm9Db25mbGljdCgpO1xuXG52YXIgYXBwO1xuXG4oZnVuY3Rpb24oJCkge1xuICBhcHAgPSB7XG5cbiAgICBsb2FkaW5nOiBmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIGUgPSAoJyNtYWluLXdyYXBwZXInKSxcbiAgICAgICAgICBoaWRkZW4gPSAnaXMtbG9hZGluZycsXG4gICAgICAgICAgc2hvdyA9ICdpcy1zaG93JztcblxuICAgICAgJCh3aW5kb3cpLmJpbmQoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKGUpLmFkZENsYXNzKHNob3cpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgJChlKS5yZW1vdmVDbGFzcyhoaWRkZW4sIHNob3cpO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGluc3RhZ3JhbWZlZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHVzZXJGZWVkID0gbmV3IEluc3RhZmVlZCh7XG4gICAgICAgICAgZ2V0OiAndXNlcicsXG4gICAgICAgICAgdXNlcklkOiA0NjIyNzY4ODksXG4gICAgICAgICAgYWNjZXNzVG9rZW46ICc0NjIyNzY4ODkuNmU5YWVjMi5iYmMxZjI0MDg2NTE0OGMxOTFjYzljMWM0OGZiMzc4YScsXG4gICAgICAgICAgdGVtcGxhdGU6ICc8bGkgY2xhc3M9XCJjLWluc3RhZmVlZF9faXRlbVwiPjxhIGhyZWY9XCJ7e2xpbmt9fVwiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwie3tpbWFnZX19XCIvPjwvYT48L2xpPicsXG4gICAgICAgICAgbGltaXQ6IDgsXG4gICAgICAgICAgcmVzb2x1dGlvbjogJ3N0YW5kYXJkX3Jlc29sdXRpb24nXG4gICAgICB9KTtcblxuICAgICAgdXNlckZlZWQucnVuKCk7XG4gICAgfSxcblxuICAgIHR3aXR0ZXJmZWVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB0d2l0dGVyQ29uZmlnID0ge1xuICAgICAgICBcImlkXCI6ICc2NTk3Mzg3OTAxNzM1NDg1NDQnLFxuICAgICAgICBcImRvbUlkXCI6ICd0d2l0dGVyZmVlZCcsXG4gICAgICAgIFwibWF4VHdlZXRzXCI6IDIsXG4gICAgICAgIFwiZW5hYmxlTGlua3NcIjogdHJ1ZSxcbiAgICAgICAgXCJzaG93UGVybWFsaW5rc1wiOiBmYWxzZSxcbiAgICAgICAgXCJzaG93SW1hZ2VzXCI6IGZhbHNlLFxuICAgICAgICBcInNob3dSZXR3ZWV0XCI6IHRydWUsXG4gICAgICAgIFwic2hvd0ludGVyYWN0aW9uXCI6IGZhbHNlLFxuICAgICAgICBcImxhbmdcIjogJ2ZyJ1xuICAgICAgfTtcblxuICAgICAgdHdpdHRlckZldGNoZXIuZmV0Y2godHdpdHRlckNvbmZpZyk7XG4gICAgfSxcblxuICAgIHRlc3RpbW9uaWFsOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB0ZXN0aW1Db25maWcgPSB7XG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgfTtcblxuICAgICAgJCgnI3Rlc3RpbW9uaWFsJykuc2xpY2sodGVzdGltQ29uZmlnKTtcblxuICAgIH0sXG5cbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgIGFwcC5sb2FkaW5nKCk7XG4gICAgICBhcHAuaW5zdGFncmFtZmVlZCgpO1xuICAgICAgYXBwLnR3aXR0ZXJmZWVkKCk7XG4gICAgICBhcHAudGVzdGltb25pYWwoKTtcbiAgICB9XG4gIH07XG5cbiAgYXBwLmluaXQoKTtcblxufSkoalF1ZXJ5KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
