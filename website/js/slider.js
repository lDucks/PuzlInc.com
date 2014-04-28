/*global $, jQuery*/

$.fn.slider = function (options) {
    'use strict';

    var slider,
        defaults = {
            interval: 5000,
            fade: false,
            fadeInterval: 500,
            hoverPause: true,
            hoverFade: true,
            cycle: true,
            cycleDirection: 'next'
        },
        obj = this;

    options = $.extend(defaults, options);

    this.goTo = function (newitem) {
        if (options.fade) {
            $(".slider-item.active").fadeOut(options.fadeInterval, function () {
                $(".slider-item[data-id=" + newitem + "]").fadeIn(options.fadeInterval, function () {
                    $(this).addClass('active');
                });

                $(".slider-icon.active").removeClass('active');
                $(".slider-icon[data-id=" + newitem + "]").addClass('active');
            }).removeClass('active');
        } else {
            $(".slider-item.active").hide().removeClass('active');
            $(".slider-item[data-id=" + newitem + "]").show().addClass('active');
            $(".slider-icon.active").removeClass('active');
            $(".slider-icon[data-id=" + newitem + "]").addClass('active');
        }
    }

    this.move = function (dir) {
        var length, curitem = $(".slider-item.active").data('id'), newitem;

        switch (dir) {
            case 'next':
                dir = 1;
                length = $(".slider-item").length;
                break;
            case 'prev':
                dir = -1;
                length = 1;
                break;
            default:
                length = $(".slider-item").length;
                dir = 1;
        }

        if (curitem === length) {
            newitem = 1;
        } else {
            newitem = curitem + dir;
        }

        obj.goTo(newitem);
    }

    return this.each(function () {
        if (options.hoverFade) {
            $(this).hover(function () {
                $(".slider-text").toggleClass('fade-out');
            });
        }

        $(".right-arrow").click(function () {
            obj.move('next');
        });

        $(".left-arrow").click(function () {
            obj.move('prev');
        });

        $(".slider-icon").click(function () {
            var id = $(this).data('id'), curitem = $(".slider-item.active").data('id');
            if (id !== curitem) {
                obj.goTo(id);
            }
        });

        if (options.cycle) {
            slider = setInterval(function () {
                obj.move(options.cycleDirection);
            }, options.interval);

            if (options.hoverPause) {
                $(this).mouseover(function () {
                    clearInterval(slider);
                });

                $(this).mouseout(function () {
                    slider = setInterval(function () {
                        obj.move(options.cycleDirection);
                    }, options.interval);
                });
            }
        }
    });
};