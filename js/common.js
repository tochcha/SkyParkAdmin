// мелкие скрипты

jQuery(document).ready(function() {

    // слайдер (настройки тут http://kenwheeler.github.io/slick/)
    /*$('.share-slider').slick({
        infinite: true,
        dots: true,
        fade: false,
        arrows: false,
        pauseOnFocus: false,
        speed: 400,
        autoplaySpeed: 6000,
        autoplay: true
    });*/

    // календарь
    $("input.tcal").click(function() {
        $(this).addClass("checked");
    });

    // попап 1
    $("#forpopup-1").click(function() {
        $("#popup-1").fadeToggle(200);
    });
    /*jQuery(function($) {
        $(document).mouseup(function(e) { // событие клика по веб-документу
            var div = $("#popup-1"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.fadeOut("200"); // скрываем его
            }
        });
    });*/

    // num input
    (function() {
        var inps = $('div.num-input');
        inps.each(function() {
            var box = $(this);
            var inp = box.find('input');
            var plus = box.find('.plus');
            var minus = box.find('.minus');
            plus.click(function() {
                inp.val(+inp.val() + 1);
            });
            minus.click(function() {
                var val = +inp.val() - 1;
                if (val < 0) val = 0;
                inp.val(val);
            });
        });
    })();

    //липкий сайдбар
    /*jQuery('.aside-277').containedStickyScroll();*/

    // включить/выключить все чекбоксы по клику
    $("#check-all").click(function() {
        var checked_status = this.checked;
        $("input.ms").each(function() {
            this.checked = checked_status;
        });
    });
    $("#nocheck-all").click(function() {
        var checked_status = this.checked;
        $("input.ms").attr('checked', false);
    });
    $("input.ms").click(function() {
        var checked_status = this.checked;
        $("#nocheck-all").each(function() {
            this.checked = !checked_status;
        });
    });
    $("#check-attr").click(function() {
        var checked_status = this.checked;
        $("input.check-attr").each(function() {
            this.checked = checked_status;
        });
    });

    // подсказка при наведении
    $(".withtitle").easyTooltip();
	
	// появление попап меню
    $(".attrs-content tr").click(function() {
        $(this).find(".popup-menu").toggleClass("visiblepopup");
        //$(this).toggleClass("active");
    });

    jQuery(function($) {
        $(document).mouseup(function(e) { // событие клика по веб-документу
            var div = $(".popup-menu"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.removeClass("visiblepopup"); // скрываем его
            }
        });
    });


    //подсветка активного инпут и текстареа
    $(window, document, undefined).ready(function() {
        $('input, select, textarea').blur(function() {
            var $this = $(this);
            if ($this.val())
                $this.addClass('used');
            else
                $this.removeClass('used');
        });

    });

    // колонка на всю высоту
    $('.content-full-height', this).each(function() {
        // найти высоту элемента
        var height = $(this).height();
        //  присвоить эту высоту всем элементам с классом live_view.
        $('.groups-table-col').css('height', height);
    });
	

}); // end $(document).ready(function

// прелоадер
/*$(window).load(function() {
    $(".loader_inner").fadeOut(500);
    $(".loader").delay(500).fadeOut(300);
});*/