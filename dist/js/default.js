function createOverLay() {
  // Overlay Effect
  $('body').append(
    jQuery('<div>').attr(
      'class',
      'overlay z-[99] fixed hidden inset-0 bg-gray-800 bg-opacity-60 h-full w-full transition-all duration-500 opacity-0',
    ),
  );
}

function closePopup(popupId) {
  var body = jQuery('body');
  var overlay = jQuery('.overlay:last');
  var popup = jQuery('#' + popupId);

  popup.addClass('opacity-0 -translate-y-64');
  setTimeout(function () {
    popup.addClass('hidden');
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
