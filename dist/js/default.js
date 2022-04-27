$(document).ready(function () {
  if (tbodyEl !== null) {
    tbodyEl.addEventListener('scroll', scrollEventHanlder);
  }

  $('.load-content-html').each(function () {
    var ref = $(this);
    var config = $(this).data('config');

    $(this).load(config.link, function () {
      $.each(config, function (c) {
        if (c !== 'link') {
          ref.html(ref.html().replace('{{ ' + c + ' }}', config[c]));
        }
      });
    });
  });

  $('body').on('click', '.close-popup-btn, .overlay', function () {
    closePopup($('.close-popup-btn:last'));
  });

  $('body').on('click', '.popup', function (e) {
    if (e.target !== e.currentTarget) return;
    closePopup($(this).find('.container'));
  });

  // Call Popup
  $('body').on('click', '.openPopup', function () {
    var self = $(this);
    var body = $('body');

    var popupId = self.attr('ref');

    createOverLay();
    setTimeout(function () {
      var overlay = $('.overlay:last');

      body.addClass('overflow-hidden');
      overlay.removeClass('hidden');

      setTimeout(function () {
        overlay.removeClass('opacity-0');
      }, 100);

      $.ajax({
        url: 'popup/' + popupId + '.html',
        context: document.body,
        success: function (response) {
          body.append(response);

          var popup = $('#popup-' + popupId);
          popup.removeClass('hidden').addClass('flex');

          setTimeout(function () {
            popup.removeClass('opacity-0');
            popup.removeClass('-translate-y-64');
          }, 100);
        },
      });
    });
  });

  // SP版のレフトメニュー
  $('body').on('click', '#MenuBtn', function () {
    $('#overlayMenu').removeClass('hidden');
    $('body').addClass('overflow-hidden');
    $('#leftSideMenu').removeClass('-left-64').addClass('left-0');
  });

  $('body').on('click', '#overlayMenu', function () {
    $('#overlayMenu').addClass('hidden');
    $('#leftSideMenu').removeClass('left-0').addClass('-left-64');
    $('body').removeClass('overflow-hidden');
  });
});

var theadEl = document.getElementsByClassName('theadEl');
var tbodyEl = document.getElementById('tbodyEl');

function scrollEventHanlder() {
  theadEl[0].scroll({
    left: tbodyEl.scrollLeft,
  });
  theadEl[1].scroll({
    left: tbodyEl.scrollLeft,
  });
}

function createOverLay() {
  // Overlay Effect
  $('body').append(
    jQuery('<div>').attr(
      'class',
      'overlay fixed hidden inset-0 bg-gray-800 bg-opacity-60 h-full w-full transition-all duration-500 opacity-0',
    ),
  );
}

function closePopup(el) {
  var popupId = jQuery(el).closest('.popup').prop('id');

  var body = jQuery('body');
  var overlay = jQuery('.overlay:last');
  var popup = jQuery('#' + popupId);

  popup.addClass('opacity-0 -translate-y-64');
  setTimeout(function () {
    popup.remove();
    body.removeClass('overflow-hidden');
  }, 501);

  setTimeout(function () {
    overlay.addClass('opacity-0');
  }, 100);

  setTimeout(function () {
    overlay.addClass('hidden');
    overlay.remove();
  }, 601);
}
