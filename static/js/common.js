if ($) {
    $(function() {
        initLazyload($('.lazyload'))
    })
}

function initLazyload(items) {
    items.each(function() {
        if ($(this).prop('tagName') == 'IMG') {
            $(this).lazyload({
                // placeholder: $(this).data('placeholder'),
                effect: 'fadeIn',
                threshold: $(this).data('threshold') || 200
            });
        } else {
            $(this).data('placeholder') &&
                $(this).css('background-image', 'url(' + $(this).data('placeholder') + ')');
            $(this).lazyload({
                effect: 'fadeIn',
                threshold: $(this).data('threshold') || 200
            });
        }
    });
}