$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

function getChildrenByGroup(kinderGarten, group, backAni) {
    console.log('getChildrenByGroup');
    isNani = true;
    kinderGartenCurrent = kinderGarten;
    groupCurrent = group;
    var back = backAni ? true : false;
    changePage('/children-list/group', "POST", {
        'kinderGarten': kinderGarten,
        'group': group
    }, null, back, 'children-list.html');
}
function firstLetterToUpperCase(string) {
    var $string = string;
    return $string.charAt(0).toUpperCase() + $string.slice(1);
}

var serverAddress = "/";
function getAjaxUrl(method) {
    return serverAddress + method;
}

function animateChildrenListItems(name1, name2, event) {
    var transition1 = '';
    var transition2 = '';

    var $elements = "";
    if (event == 'show') {
        transition1 = 'transition.slideUpIn';

        if ($.mobile.activePage.attr('id') == "Child-details") {
            $elements = $('.bg-detail');
        } else if ($.mobile.activePage.attr('id') == "Children-list") {
            $elements = $('#children-list-full').find('> li');
        }

        $elements.velocity(
            transition1,
            {
                stagger: 150
            }, 600);
    } else if (event == 'change') {
        transition1 = 'transition.slideRightBigOut';
        transition2 = 'transition.slideLeftBigIn';
        $('#children-list-full > .media .child-' + name1).velocity(
            transition1,
            {
                stagger: 70, complete: function () {
                $('#children-list-full > .media .child-' + name2).velocity(
                    transition2,
                    {stagger: 70}, {display: 'block'}, 100);
            }
            }, {display: 'block'}, 100);
    }
    //'presence'
    //     'categories'

}
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

(function (window) {

    'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ('classList' in document.documentElement) {
        hasClass = function (elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function (elem, c) {
            elem.classList.add(c);
        };
        removeClass = function (elem, c) {
            elem.classList.remove(c);
        };
    }
    else {
        hasClass = function (elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function (elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function (elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        };
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }

    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

// transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(classie);
    } else {
        // browser global
        window.classie = classie;
    }

})(window);

//OVERLAY
function attachOverlay() {
    //var triggerBttn = document.getElementById( 'trigger-overlay' ),
    var triggerBttn = document.querySelectorAll('.addMore'),
        overlay = document.querySelector('div.overlay'),
        actionOkBtn = $('div.buttons-inline > button.label-success'),
        actionCancelBtn = $('div.buttons-inline > button.label-danger'),
        closeBttn = overlay.querySelector('button.overlay-close');
    transEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd',
        'transition': 'transitionend'
    },
        transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
        support = {transitions: Modernizr.csstransitions};

    function toggleOverlay() {
        if (classie.has(overlay, 'open')) {
            classie.remove(overlay, 'open');
            classie.add(overlay, 'close');
            var onEndTransitionFn = function (ev) {
                if (support.transitions) {
                    if (ev.propertyName !== 'visibility') return;
                    this.removeEventListener(transEndEventName, onEndTransitionFn);
                }
                classie.remove(overlay, 'close');
            };
            if (support.transitions) {
                overlay.addEventListener(transEndEventName, onEndTransitionFn);
            }
            else {
                onEndTransitionFn();
            }
        }
        else if (!classie.has(overlay, 'close')) {
            classie.add(overlay, 'open');
        }
        var timePickerWidget = $('.bootstrap-datetimepicker-widget');
        if (timePickerWidget.length) {
            timePickerWidget.hide();
        }
    }

    function chosenDateTime() {
        var id = $(this).closest('#time-picker-popup').data('camefrom');
        var inputVal = $('#time-picker-input-' + id).val();
        var inputVal5 = $('#time-picker-input5').val();
        var childId = localStorage.childId;

        var $id = '';
        if (document.location.pathname.match(/[^\/]+$/)[0] == 'children-list.html') {
            $id = $('[data-id=' + childId + ']').find('[data-id=' + id + ']');
            //$id = $('#' + id).length ? $('#' + id) : $('[data-id=' + id + ']');
        } else {
            //$id = $('#' + id).length ? $('#' + id) : $('[data-id=' + id + ']');
            $id = $('#Child-details ' + '#' + id);
        }
        //if (id == 'kaki') {
        //    $id = $('[data-id=' + id + ']');
        //}

        if (id == "sleep") {
            var concatId = inputVal.concat(inputVal5).replace(/:/g, "");
            inputVal += " - " + inputVal5;
            if (inputVal != "" && inputVal5 != "") {

                $('.list-group.times-history > ul').append('<li class="list-group-item text-center">'
                    + inputVal
                    + '</li>');

                if ($id.find('.notAvailable').length) {
                    $id.find('.notAvailable').remove();
                }
                if (!$id.find('#' + concatId).length) {
                    $id.find('.details').append('<p id="' + concatId + '">' + inputVal + '</p>');
                    updateChildDetails(localStorage.childId, id, inputVal);
                }
            }
        } else if (id == "food") {
            if (inputVal != "") {
                if ($id.find('.notAvailable').length) {
                    $id.find('.notAvailable').remove();
                }

                var concatId = inputVal.concat($(this).closest('.selected').text()).replace(/:/g, "");
                //var chosenText = $(this).closest('.container').find('.selected').text();
                var chosenText = $(this).closest('.container').find('select').val();
                var similakQuantityVal = $(this).closest('.container').find('#similakQuantity').val();

                if ($('.similakQuantity').hasClass('hidden')) {
                    if (!$id.find('#' + concatId).length) {
                        $id.find('.details').append('<p id="' + concatId + '">' + inputVal + ' - ' + chosenText + '</p>');
                        updateChildDetails(localStorage.childId, id, inputVal + " - " + chosenText);
                    }
                } else {
                    if (!$id.find('#' + concatId).length) {
                        chosenText += ' - ' + similakQuantityVal;
                        $id.find('.details').append('<p id="' + concatId + '">' + inputVal + ' - ' + chosenText + '</p>');
                        updateChildDetails(localStorage.childId, id, inputVal + " - " + chosenText);
                    }
                }
            }
        } else if (id == "kaki") {
            var chosen = $(this).closest('.container').find('.selected');
            var chosenId = chosen.attr('id');
            if (chosen.length) {
                if ($id.find('.notAvailable').length) {
                    $id.find('.notAvailable').remove();
                }
                $id.find('.details').append('<p>' + chosen.text() + '</p>');
                updateChildDetails(localStorage.childId, id, chosenId);
            } else {
                generateNoty('Не выбрали не чего!!!', 'error', null, false, 5000, null, null, false);
            }
        } else if (id == "others") {
            if (inputVal != "") {
                if ($id.find('.notAvailable').length) {
                    $id.find('.notAvailable').remove();
                }
                $id.find('.details').append('<p>' + inputVal + '</p>');
                updateChildDetails(localStorage.childId, 'comments', inputVal);
            }
        }
        toggleOverlay();
    }

    function addTimeClicked() {
        localStorage.childId = $(this).closest('.media').length ? $(this).closest('.media').data('id') : localStorage.childId;
        var cameFrom = $(this).closest('.bg-detail').length ? $(this).closest('.bg-detail').attr('id') : $(this).closest('.pull-left').attr('data-id');
        $('#time-picker-popup').data('camefrom', cameFrom);
        $('.picker-input').val("");
        $('#' + cameFrom + 'Popup').show().siblings().hide();
        if (cameFrom == 'sleep') {
            $('.time-input-wrap').last().show();
        } else if (cameFrom == 'food') {
        } else if (cameFrom == 'kaki') {
        } else if (cameFrom == 'others') {
        }
        toggleOverlay();
    }

    for (var i = 0; i < triggerBttn.length; i++) {
        //console.log(i);

        triggerBttn[i].removeEventListener('click');
        triggerBttn[i].addEventListener('click', addTimeClicked);
    }
    console.log(closeBttn, actionOkBtn, actionCancelBtn);
    closeBttn.addEventListener('click', toggleOverlay);
    //actionOkBtn.addEventListener('click', chosenDateTime);
    for (var i = 0; i < actionOkBtn.length; i++) {
        //console.log(i);

        actionOkBtn[i].removeEventListener('click');
        actionOkBtn[i].addEventListener('click', chosenDateTime);
    }
    //actionCancelBtn.addEventListener('click', toggleOverlay);
    for (var i = 0; i < actionCancelBtn.length; i++) {
        //console.log(i);

        actionCancelBtn[i].removeEventListener('click');
        actionCancelBtn[i].addEventListener('click', toggleOverlay);
    }
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// Usage
var myEfficientFn = debounce(function() {
    // All the taxing stuff you do
}, 250);
window.addEventListener('resize', myEfficientFn);

// There are times when you prefer a given functionality only happen once.
function once(fn, context) {
    var result;

    return function() {
        if(fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }

        return result;
    };
}

// Usage
var canOnlyFireOnce = once(function() {
    console.log('Fired!');
});

canOnlyFireOnce(); // "Fired!"
canOnlyFireOnce(); // nada