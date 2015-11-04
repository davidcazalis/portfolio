"use strict";

jQuery.noConflict();

var app;

(function($) {
  app = {

    loading: function() {

      var e = ('#main-wrapper'),
          hidden = 'is-loading',
          show = 'is-show';

      $(window).load(function() {
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

    fixVH: function() {
      var iOS = navigator.userAgent.match(/(iPod|iPhone|iPad)/);
      var height = $(window).height();

      function iosVhHeightBug() {
        $("#object-to-set-height-on").css('min-height', height);
      }

      if(iOS){
        iosVhHeightBug();
        $(window).bind('resize', iosVhHeightBug);
      }
    },

    init: function() {
      app.loading();
      svg4everybody();
      app.instagramfeed();
      app.twitterfeed();
      app.testimonial();
      app.scrollTo();
      app.fixVH();
    }
  };

  app.init();

})(jQuery);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxualF1ZXJ5Lm5vQ29uZmxpY3QoKTtcblxudmFyIGFwcDtcblxuKGZ1bmN0aW9uKCQpIHtcbiAgYXBwID0ge1xuXG4gICAgbG9hZGluZzogZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBlID0gKCcjbWFpbi13cmFwcGVyJyksXG4gICAgICAgICAgaGlkZGVuID0gJ2lzLWxvYWRpbmcnLFxuICAgICAgICAgIHNob3cgPSAnaXMtc2hvdyc7XG5cbiAgICAgICQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKGUpLmFkZENsYXNzKHNob3cpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgJChlKS5yZW1vdmVDbGFzcyhoaWRkZW4sIHNob3cpO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIHNjcm9sbFRvOiBmdW5jdGlvbigpIHtcbiAgICAgICQoJy5qcy1zY3JvbGwnKS5jbGljayggZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwYWdlID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG4gICAgICAgIHZhciBzcGVlZCA9IDc1MDtcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoIHsgc2Nyb2xsVG9wOiAkKHBhZ2UpLm9mZnNldCgpLnRvcCB9LCBzcGVlZCApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgaW5zdGFncmFtZmVlZDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdXNlckZlZWQgPSBuZXcgSW5zdGFmZWVkKHtcbiAgICAgICAgICBnZXQ6ICd1c2VyJyxcbiAgICAgICAgICB1c2VySWQ6IDQ2MjI3Njg4OSxcbiAgICAgICAgICBhY2Nlc3NUb2tlbjogJzQ2MjI3Njg4OS42ZTlhZWMyLmJiYzFmMjQwODY1MTQ4YzE5MWNjOWMxYzQ4ZmIzNzhhJyxcbiAgICAgICAgICB0ZW1wbGF0ZTogJzxsaSBjbGFzcz1cImMtaW5zdGFmZWVkX19pdGVtXCI+PGEgaHJlZj1cInt7bGlua319XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9XCJ7e2ltYWdlfX1cIi8+PC9hPjwvbGk+JyxcbiAgICAgICAgICBsaW1pdDogOCxcbiAgICAgICAgICByZXNvbHV0aW9uOiAnc3RhbmRhcmRfcmVzb2x1dGlvbidcbiAgICAgIH0pO1xuXG4gICAgICB1c2VyRmVlZC5ydW4oKTtcbiAgICB9LFxuXG4gICAgdHdpdHRlcmZlZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHR3aXR0ZXJDb25maWcgPSB7XG4gICAgICAgIFwiaWRcIjogJzY1OTczODc5MDE3MzU0ODU0NCcsXG4gICAgICAgIFwiZG9tSWRcIjogJ3R3aXR0ZXJmZWVkJyxcbiAgICAgICAgXCJtYXhUd2VldHNcIjogMixcbiAgICAgICAgXCJlbmFibGVMaW5rc1wiOiB0cnVlLFxuICAgICAgICBcInNob3dQZXJtYWxpbmtzXCI6IGZhbHNlLFxuICAgICAgICBcInNob3dJbWFnZXNcIjogZmFsc2UsXG4gICAgICAgIFwic2hvd1JldHdlZXRcIjogdHJ1ZSxcbiAgICAgICAgXCJzaG93SW50ZXJhY3Rpb25cIjogZmFsc2UsXG4gICAgICAgIFwibGFuZ1wiOiAnZnInXG4gICAgICB9O1xuXG4gICAgICB0d2l0dGVyRmV0Y2hlci5mZXRjaCh0d2l0dGVyQ29uZmlnKTtcbiAgICB9LFxuXG4gICAgdGVzdGltb25pYWw6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHRlc3RpbUNvbmZpZyA9IHtcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICB9O1xuXG4gICAgICAkKCcjdGVzdGltb25pYWwnKS5zbGljayh0ZXN0aW1Db25maWcpO1xuXG4gICAgfSxcblxuICAgIGZpeFZIOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpT1MgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oaVBvZHxpUGhvbmV8aVBhZCkvKTtcbiAgICAgIHZhciBoZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG5cbiAgICAgIGZ1bmN0aW9uIGlvc1ZoSGVpZ2h0QnVnKCkge1xuICAgICAgICAkKFwiI29iamVjdC10by1zZXQtaGVpZ2h0LW9uXCIpLmNzcygnbWluLWhlaWdodCcsIGhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIGlmKGlPUyl7XG4gICAgICAgIGlvc1ZoSGVpZ2h0QnVnKCk7XG4gICAgICAgICQod2luZG93KS5iaW5kKCdyZXNpemUnLCBpb3NWaEhlaWdodEJ1Zyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgYXBwLmxvYWRpbmcoKTtcbiAgICAgIHN2ZzRldmVyeWJvZHkoKTtcbiAgICAgIGFwcC5pbnN0YWdyYW1mZWVkKCk7XG4gICAgICBhcHAudHdpdHRlcmZlZWQoKTtcbiAgICAgIGFwcC50ZXN0aW1vbmlhbCgpO1xuICAgICAgYXBwLnNjcm9sbFRvKCk7XG4gICAgICBhcHAuZml4VkgoKTtcbiAgICB9XG4gIH07XG5cbiAgYXBwLmluaXQoKTtcblxufSkoalF1ZXJ5KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
