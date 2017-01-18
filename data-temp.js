/**
 * Created by Nick on 2/24/2015.
 */
var admin = {
    "_id": ObjectId("5567a9478e0ef934206f3373"),
    "tz": 159357,
    "first_name": "Юра",
    "second_name": "Морган",
    "group": 0,
    "owns": {
        "kindergartens": {
            "1": {
                "name": "Ришон - Розенштейн 19",
                "groups": [
                    1,
                    2,
                    3,
                    4
                ]
            },
            "2": {
                "name": "Ришон - Дом2",
                "groups": [
                    1,
                    2
                ]
            }
        }
    }
};
var admin_new = {
    "_id": ObjectId("5567a9478e0ef934206f3373"),
    "tz": 159357,
    "first_name": "Юра",
    "second_name": "Морган",
    "group": 0,
    "owns": {
        "kindergartens": {
            "1": {
                "name": "Розенштейн 19",
                "groups": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6
                ],
                "agenda": [
                    {
                        "babies": {
                            "group1": {
                                "6:30 - 8:00": "Прием + Завтрак - הגעה וארוחת בוקר",
                                "8:30 - 11:00": "Сон - שינה",
                                "11:30 - 12:00": "Прогулка + Игры - טיול ומשחק",
                                "12:00 - 12:30": "Обед - ארוחת צהריים",
                                "12:30 - 14:30": "Сон - שינה",
                                "15:00": "Еда - אוכל",
                                "16:00 - 16:30": "Фрукт/Ски - פרי או סקי"
                            },
                            "group2": {
                                "6:30 - 8:00": "Прием + Завтрак - הגעה וארוחת בוקר",
                                "8:30 - 11:00": "Прогулка + Игры - טיול ומשחק",
                                "11:00 - 11:30": "Обед - ארוחת צהריים",
                                "11:30 - 14:00": "Сон - שינה",
                                "15:00": "Еда - אוכל",
                                "16:00 - 16:30": "Фрукт/Ски - פרי או סקי"
                            }
                        }
                    },
                    {
                        "toddlers": {
                            "6:30 - 8:00": "Прием + Завтрак - הגעה וארוחת בוקר",
                            "8:30 - 09:30": "Мифгаш бокер и кружки - מפגש בוקר והפעלות",
                            "09:30 - 10:15": "Прогулка + Игры - טיול ומשחק",
                            "10:30 - 11:30": "Обед и подготовка к сну - ארוחת צהריים והכנה לשינה",
                            "12:00 - 14:00": "Сон - שינה",
                            "14:00 - 14:30": "Подем - השכמה",
                            "15:00": "Прогулка + Игры - טיול ומשחק",
                            "16:00 - 16:30": "Игры в групе и чтение книг - משחקים בקבוצה וקריאת ספרים"
                        }
                    }
                ]
            },
            "2": {
                "name": "Сальвадор 34",
                "groups": [
                    1,
                    2,
                    3
                ],
                "agenda": [
                    {
                        "babies": {
                            "group1": {
                                "6:30 - 8:00": "Прием + Завтрак - הגעה וארוחת בוקר",
                                "8:30 - 11:00": "Сон - שינה",
                                "11:30 - 12:00": "Прогулка + Игры - טיול ומשחק",
                                "12:00 - 12:30": "Обед - ארוחת צהריים",
                                "12:30 - 14:30": "Сон - שינה",
                                "15:00": "Еда - אוכל",
                                "16:00 - 16:30": "Фрукт/Ски - פרי או סקי"
                            },
                            "group2": {
                                "6:30 - 8:00": "Прием + Завтрак - הגעה וארוחת בוקר",
                                "8:30 - 11:00": "Прогулка + Игры - טיול ומשחק",
                                "11:00 - 11:30": "Обед - ארוחת צהריים",
                                "11:30 - 14:00": "Сон - שינה",
                                "15:00": "Еда - אוכל",
                                "16:00 - 16:30": "Фрукт/Ски - פרי או סקי"
                            }
                        }
                    },
                    {
                        "toddlers": {
                            "6:30 - 8:00": "Прием + Завтрак - הגעה וארוחת בוקר",
                            "8:30 - 09:30": "Мифгаш бокер и кружки - מפגש בוקר והפעלות",
                            "09:30 - 10:15": "Прогулка + Игры - טיול ומשחק",
                            "10:30 - 11:30": "Обед и подготовка к сну - ארוחת צהריים והכנה לשינה",
                            "12:00 - 14:00": "Сон - שינה",
                            "14:00 - 14:30": "Подем - השכמה",
                            "15:00": "Прогулка + Игры - טיול ומשחק",
                            "16:00 - 16:30": "Игры в групе и чтение книг - משחקים בקבוצה וקריאת ספרים"
                        }
                    }
                ]
            }
        }
    }
};
var childData = {
    tz: 304123254,
    gender: 'boy',
    first_name: 'adik2',
    second_name: 'levy2',
    birth_day: moment(new Date()).format('DD/MM/YYYY'),
    // birthDay: '03/11/YYYY'
    address: {
        city: 'lod',
        street: 'rabin',
        house: 24,
        apartment: 5
    },
    group: 0,
    kindergarten: 1,
    image: false,
    history: {
        '25/2/2015': {
            came_in: true,
            food: {
                '08:00': 'фрукт',
                '10:00': 'йогурт',
                '13:00': 'суп'
            },
            kaki: {
                "kaki": true,
                "no_kaki": false,
                "ponos": true
            },
            sleep: [
                {
                    "from": "09:00",
                    "till": "10:00"
                },
                {
                    "from": "13:00",
                    "till": "14:00"
                }
            ],
            comments: ['comment1', 'comment2 long long long long long long long']
        }
    },
    parents: [{
        first_name: "papa",
        second_name: "levy",
        address: {
            city: "lod",
            street: "rabin",
            house: 24,
            apartment: 5
        },
        phone_num: "0564882437",
        email: "mwwe@tmm.com"
    }, {
        first_name: "mama",
        second_name: "levy",
        address: {
            city: "lod",
            street: "rabin",
            house: 24,
            apartment: 5
        },
        phone_num: "0543684352",
        email: "mtmm@aass.com"
    }
    ]
};
var parentData = {
    child_tz: {
        0: 304123254
    },
    first_name: 'papa',
    second_name: 'levy',
    address: {
        city: 'lod',
        street: 'rabin',
        house: 24,
        apartment: 5
    },
    phone_num: 0523342543,
    email: 'mmm@mmm.com'
};
var kinderTeacherData = {
    tz: 302344232,
    first_name: 'sima',
    second_name: 'dror',
    address: {
        city: 'tel aviv',
        street: 'golda',
        house: 4,
        apartment: 1
    },
    kindergarten: 1,
    group: 0,
    phone_num: 0523342543,
    email: 'mmm@mmm.com'
};
var childHistory = {
    tz: 302344232,
    day: {
        '25/2/2015': {
            food: {
                time: '08:00',
                type: ''
            }
        }
    }
};
/**/
var childrenForAdmin = "";
var naniForAdmin = "";
var adminAllInfo = "";
var adminTz = '';
var adminInfo = '';

$(document).on('pagecreate', '#AdminPage', function (event) {
    adminAllInfo = '';
    initAvailabilityList(0);
    $(this).on('click', '#refresh_list', function () {
        // refreshAvailabilityList(adminTz);
        getAllAdminInfo(collectionsNames[0]);
    });
    $(this).on('click', '#refresh_nani_list', function () {
        //refreshNaniList(1);
        getAllAdminInfo(collectionsNames[1]);
    });
    $(this).on('click', '#btnSendSms', function () {
        var value = $(".js-example-basic-single").val();
        var textArea = $("#smsMessage").val();
        sendSmsTo(value, textArea);
    });
    $(this).on('click', '#btnSendEmail', function () {
        var toEmail = $(".emailAddress").val();
        var subject = $("#emailSubject").val();
        var textArea = $("#emailMessage").val();
        sendEmailTo(toEmail, subject, textArea);
    });
    for (var collection in collectionsNames) {
        getAllAdminInfo(collectionsNames[collection]);
    }


});
function getAllAdminInfo(db) {
    ShowLoadingAnim();

    $.ajax({
        type: "POST",
        url: '/admin-get-all',
        data: {'dbString': db},
        success: function (data) {
            HideLoadingAnim();
            if (isDebug) {
                console.log('getAdmin - success ajax - data:');
                console.log(data);
                generateNoty(JSON.stringify(data), 'success', null, false, false, null, null, true);
            }
            adminAllInfo = data;
            initOwnerAllInfo(adminAllInfo, db);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('AJAX - ERROR');
            console.log(XMLHttpRequest);
            console.log(textStatus);
            console.log(errorThrown);
            generateNoty(JSON.stringify(XMLHttpRequest.status) + "/" +
                JSON.stringify(XMLHttpRequest.statusText + "-" + '/admin'), 'error', null, false, false, null, null, true);
        }
    }).always(function () {
        HideLoadingAnim();
    });
}
$(document).on('pageshow', '#AdminPage', function (event) {
    $('#backToLogin').click(function () {
        logOutUser('/', '/login.html');
    });

    /*on input change - remove error class*/
    $('input, select').on('change', function () {
        $(this).closest('.form-group').removeClass('error');
    });

    /*init date picker*/
    $('#datePickerNewChild').datetimepicker({
        locale: 'ru',
        showClose: true,
        format: 'DD/MM/YYYY',
        stepping: 5,
        debug: true
    });

    /*init radio buttons*/
    $("#radio").buttonset();

    /*init DropDown select*/
    $('.selectpicker').selectpicker();

    /*close the accordion*/
    $('.collapse').collapse('hide');

    /*Allow multiple modals by using z-index hack*/
    $(document).on('show.bs.modal', '.modal', function () {
        var zIndex = 1040 + (10 * $('.modal:visible').length);
        $(this).css('z-index', zIndex);
        setTimeout(function () {
            $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
        }, 0);
    });

    $(document).on('click', '.list-group-item > i.delete', function () {
        var $this = $(this);
        var $li = $this.closest('.list-group-item');
        var type = $li.data('type');
        var tz = $li.attr('data-tz');

        deleteData(tz, type);
    });
    $(document).on('click', '.list-group-item > i.edit', function () {
        var $this = $(this);
        var $li = $this.closest('.list-group-item');
        var type = $li.data('type');
        var tz = $li.attr('data-tz');

        editData(tz, type);
    });
    $(document).on('click', '#addNewChildTrigger', function () {
        $('#addNewChildModal').find('.modal-title').text('Создать нового ребенка');
    });

    $('.list-group-item').on('mouseenter', function (event) {
        event.preventDefault();
        $(this).closest('li').addClass('open');
    });
    $('.list-group-item').on('mouseleave', function (event) {
        event.preventDefault();
        $(this).closest('li').removeClass('open');
    });
    $('.list-group-item').on('tap', function (event) {
        event.preventDefault();
        $(this).closest('li').toggleClass('open');
    });
    $('.list-group-submenu').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        //$(this).closest('li').toggleClass('open');
    });
});
function AsyncConfirmYesNo(title, msg, yesFn, noFn, data) {
    var $confirm = $("#modalConfirmYesNo");
    $confirm.modal('show');
    $("#lblTitleConfirmYesNo").html(title);
    $("#lblMsgConfirmYesNo").html(msg);
    $("#btnYesConfirmYesNo").off('click').click(function () {
        yesFn(data);
        $confirm.modal("hide");
    });
    $("#btnNoConfirmYesNo").off('click').click(function () {
        noFn();
        $confirm.modal("hide");
    });
}

function MyYesFunction(data) {
    //alert("Time to get off your workstation!");
}
function MyNoFunction() {
    //alert("Well... just continue working.");
}
function deleteData(tz, typeOfData) {
    var type = typeOfData;
    if (type == 'children') {
        type = 'child';
    } else if (type == 'nani') {
        type = 'teachers';
    }
    var name = $('[data-tz=' + tz + ']').data('name');
    AsyncConfirmYesNo(
        "Вы просите удалить: " + name + "...",
        "Вы уверены?",
        removeData,
        MyNoFunction,
        [tz, type]
    );
}
function removeData(data) {

    ShowLoadingAnim();
    $.ajax({
        type: "POST",
        async: true,
        url: '/deleteData',
        data: {'tz': data[0], 'type': data[1]},
        success: function (data) {
            HideLoadingAnim();
            if (isDebug) {
                console.log('deleteData - success ajax - data:');
                console.log(data);
                generateNoty(JSON.stringify(data.message), 'success', null, false, 10000, null, null, true);
            }
            $('[data-tz=' + data.tz + ']').remove();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('AJAX - ERROR');
            console.log(XMLHttpRequest);
            console.log(textStatus);
            console.log(errorThrown);
            generateNoty(JSON.stringify(XMLHttpRequest.status) + "/" +
                JSON.stringify(XMLHttpRequest.statusText + "-" + '/admin'), 'error', null, false, false, null, null, true);
        }
    }).always(function () {
        HideLoadingAnim();
    });
}
function editData(tz, typeOfData) {
    var type = typeOfData;
    if (type == 'children') {
        type = 'Child';
    } else if (type == 'nani') {
        type = 'Nani';
    }
    clearForm('addNew' + type + 'Form');
    var $el = $('[data-tz=' + tz + ']');
    var name = $el.data('name');
    var $data = $.parseJSON(uriToString($el.data('info')));
    console.log($data);
    $.each($data, function (name, value) {
        if (name == 'gender') {
            $('#addNew' + type + 'Modal ' + '[name="gender"][value="' + value + '"]').prev('label').trigger("click");
        } else {
            $('#addNew' + type + 'Modal [name=' + name + ']').val(value);
            if (name == 'kindergarten' || name == 'group') {
                $('.selectpicker').selectpicker('render');
            }
            if (name == 'parents') {
                for (var i = 0; i < value.length; i++) {
                    $('#parentsList').append('<li class="list-group-item">' + value[i].second_name + " " + value[i].first_name + '</li>');
                }
            }
            if (name == 'address') {
                $.each(value, function (i, val) {
                    $('#addNew' + type + 'Modal [name=' + i + ']').val(val);
                });
            }
        }
    });


    $('#addNew' + type + 'Modal').find('.modal-title').text('Данные: ' + $data.second_name + " " + $data.first_name);
    $('#addNew' + type + 'Modal').modal('show');
    //AsyncConfirmYesNo(
    //    "Вы просите изменить: " + name + "...",
    //    "Вы уверены?",
    //    removeData,
    //    MyNoFunction,
    //    [tz, type]
    //);
}
function refreshAvailabilityList(tz) {
    ShowLoadingAnim();
    $.ajax({
        type: "POST",
        async: true,
        url: '/get-all-presence',
        data: {'tz': tz},
        success: function (data) {
            HideLoadingAnim();
            if (isDebug) {
                console.log('getAdmin - success ajax - data:');
                console.log(data);
                generateNoty(JSON.stringify(data), 'success', null, false, false, null, null, true);
            }
            childrenForAdmin = data;
            initAvailabilityList(0);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('AJAX - ERROR');
            console.log(XMLHttpRequest);
            console.log(textStatus);
            console.log(errorThrown);
            generateNoty(JSON.stringify(XMLHttpRequest.status) + "/" +
                JSON.stringify(XMLHttpRequest.statusText + "-" + '/admin'), 'error', null, false, false, null, null, true);
        }
    }).always(function () {
        HideLoadingAnim();
    });
}
function refreshNaniList(kinderGartenNumber) {
    //ShowLoadingAnim();
    //$.ajax({
    //    type: "POST",
    //    async: true,
    //    url: '/admin',
    //    data: {'tz': tz},
    //    success: function (data) {
    //        HideLoadingAnim();
    //        if (isDebug) {
    //            console.log('getAdmin - success ajax - data:');
    //            console.log(data);
    //            generateNoty(JSON.stringify(data), 'success', null, false, false, null, null, true);
    //        }
    //        naniForAdmin = data;
    //        initNaniList(0);
    //    },
    //    error: function (XMLHttpRequest, textStatus, errorThrown) {
    //        console.log('AJAX - ERROR');
    //        console.log(XMLHttpRequest);
    //        console.log(textStatus);
    //        console.log(errorThrown);
    //        generateNoty(JSON.stringify(XMLHttpRequest.status) + "/" +
    //        JSON.stringify(XMLHttpRequest.statusText + "-" + '/admin'), 'error', null, false, false, null, null, true);
    //    }
    //}).always(function () {
    //    HideLoadingAnim();
    //});
}
function initAvailabilityList(group) {
    if (childrenForAdmin.length && typeof childrenForAdmin != 'string') {
        $('#childrenList-' + group).empty();
        for (var i = 0; i < childrenForAdmin.length; i++) {
            var today = new moment().format('DD/MM/YYYY');
            var childTodayInfo = childrenForAdmin[i].history.hasOwnProperty(today) ? childrenForAdmin[i].history[today] : false;
            if (childTodayInfo && childTodayInfo.hasOwnProperty('came_in')) {
                var isAvailable = childTodayInfo.came_in ? "list-group-item-success" : "list-group-item-danger";
                $('#childrenList-' + group).append('<li class="list-group-item ' + isAvailable + '">' + childrenForAdmin[i].second_name + childrenForAdmin[i].first_name + '</li>');
            }
        }
    }
}
function initNaniList(group) {
    if (naniForAdmin.length && typeof naniForAdmin != 'string') {
        $('#naniList-' + group).empty();
        for (var i = 0; i < naniForAdmin.length; i++) {
            $('#naniList-' + group).append('<li class="list-group-item">' + naniForAdmin[i].first_name + '</li>');
        }
    }
}
function initOwnerAllInfo(adminAllInfo, collectionName) {

    var name = '';
    if (collectionName == 'test_child') {
        name = 'children';
    } else if (collectionName == 'test_teachers') {
        name = 'nani';
    }
    initListForSms(adminAllInfo);

    var $data = adminAllInfo;
    $('#' + name + 'Area > ul').remove();
    $('select#naniKinderGardenSelect, select#kinderGardenSelect').empty().append('<option value="default">Выбрать</option>');
    $.each(adminInfo[0].owns.kindergartens, function (i, el) {
        var kinderGartenList = '';
        var kinderGartenNumber = i;
        var allGroups = el.groups;
        var list = '';
        var kinderGartenName = el.name;

        $('select#naniKinderGardenSelect, select#kinderGardenSelect').append('<option value="' + kinderGartenNumber + '">' + kinderGartenName + '</option>');

        if (allGroups.length) {
            for (var group in allGroups) {


                list = '<div class="col-md-6">';
                list += '<div class="panel panel-primary">';
                list += '<div class="panel-heading">';
                list += '<h3 class="panel-title">';
                list += kinderGartenName + ', Група ' + allGroups[group];
                list += '<span class="badge">' + allGroups[group].length + '</span>';
                list += '</h3>';
                list += '</div>';


                list += '<ul class="list-group" data-kindergarten="' + kinderGartenNumber + '">';

                for (var input in $data) {
                    if ($data[input].kindergarten == kinderGartenNumber && $data[input].group == group) {
                        var today = new moment().format('DD/MM/YYYY');
                        var isAvailable = '';
                        if (collectionName == 'test_child' && $data[input].history != undefined) {
                            var childTodayInfo = $data[input].history.hasOwnProperty(today) ? $data[input].history[today] : false;
                            if (childTodayInfo && childTodayInfo.hasOwnProperty('came_in')) {
                                isAvailable = childTodayInfo.came_in ? "list-group-item-success" : "list-group-item-danger";
                            } else {
                                isAvailable = "list-group-item-danger";
                            }
                        } else {
                            isAvailable = '';
                        }

                        var $dataForLi = {
                            'isAvailable': isAvailable,
                            'type': name,
                            'tz': $data[input].tz,
                            'info': stringToUri(JSON.stringify($data[input])),
                            'second_name': $data[input].second_name,
                            'first_name': $data[input].first_name
                        };

                        list += initCell($dataForLi);
                    }
                }

                kinderGartenList += list + '</ul>' + '</div></div>';
            }
        }

        $('#' + name + 'Area').append(kinderGartenList);
    });
}
/**/

/**/
function initCell(liArr) {
    var li = '';

    li += '<li class="list-group-item ' + liArr.isAvailable + '" data-type="' + liArr.type + '" data-tz="' + liArr.tz + '" data-name="' + liArr.second_name + ' ' + liArr.first_name + '" data-info="' + liArr.info + '">';
    li += liArr.second_name + ' ' + liArr.first_name;
    li += '<ul class="list-group-submenu">';
    li += '<li class="list-group-submenu-item success"><span class="glyphicon glyphicon-remove"></span></li>';
    li += '<li class="list-group-submenu-item danger"><span class="glyphicon glyphicon-ok"></span></li>';
    li += '</ul>';
    li += '</li>';

    //li += '<li class="list-group-item ' + liArr.isAvailable + '" data-type="' + liArr.type + '" data-tz="' + liArr.tz + '" data-name="' + liArr.second_name + ' ' + liArr.first_name + '" data-info="' + liArr.info + '">';
    //li += '<p>' + liArr.second_name + ' ' + liArr.first_name + '</p>';
    //li += '<i class="edit glyphicon glyphicon-pencil"></i>';
    //li += '<i class="delete glyphicon glyphicon-remove"></i>';
    //li += '</li>';

    return li;
}

function clearForm(formId) {
    $('#' + formId).trigger("reset");
    $('.selectpicker').val('-1').selectpicker('refresh');

    if (formId == 'addNewChildForm') {
        tempParentAddedInfoArr = [];
        $('#parentsList').empty();
        $('#headingOne').find('a').trigger('click');
    }
}

function saveParent() {
    var $form = $('#addNewParentForm');
    var $data = $form.serializeJSON();
    var isEmptyInput = false;
    for (var input in $data) {
        console.log('input: ' + input + " / value: " + $data[input]);
        if (input == 'first_name' && $data[input] == '') {
            isEmptyInput = true;
            $form.find("input[name*='" + input + "']").closest('.form-group').addClass('error');
        }
    }

    if (!isEmptyInput) {
        tempParentAddedInfoArr.push($data);
        clearForm('addNewParentForm');
        $('#parentsList').append('<li class="list-group-item">' + $data.second_name + " " + $data.first_name + '</li>');
    }
}
function saveChild() {
    var $form = $('#addNewChildForm');
    var childInfo = $form.serializeJSON();
    childInfo.parents = tempParentAddedInfoArr;

    var isEmptyInput = false;
    if (!childInfo.hasOwnProperty('gender')) {
        $form.find("input[name*='gender']").closest('.ui-buttonset').addClass('error').prepend('<p style="text-align: center; color:#B21F1F;">Нужно выбрать пол!!!</p>');
        isEmptyInput = true;
    }
    for (var input in childInfo) {
        console.log('input: ' + input + " / value: " + childInfo[input]);
        if ((input == 'first_name' || input == 'tz' || input == 'group' || input == 'kindergarten')
            && (childInfo[input] == '' || childInfo[input] == 'Выбрать')) {
            isEmptyInput = true;
            $form.find("input[name*='" + input + "']").closest('.form-group').addClass('error');
        }
    }

    if (!isEmptyInput) {

        var child = new Child();
        child["parents"] = [];

        for (var key in childInfo) {
            if (key == "parents") {
                for (var i = 0; i < childInfo[key].length; i++) {
                    child["parents"].push(childInfo[key][i]);
                }
            }
            if (key == "street" || key == "city" || key == "house" || key == "apartment") {
                child.address[key] = childInfo[key];
            } else {
                child[key] = childInfo[key];
            }
        }

        console.log(child);
        child.parents = JSON.stringify(child.parents);
        child.address = JSON.stringify(child.address);
        child.save(successSave);
    }
}
function successSave(data) {
    if (isDebug) {
        generateNoty(JSON.stringify(data), 'success', null, false, false, null, null, true);
    }
}
function saveNewChild(obj, callback) {
    console.log(obj);
    $.ajax({
        type: "PUT",
        async: true,
        url: '/admin/new-child',
        data: obj,
        success: function (data) {
            if (isDebug) {
                console.log('saveNewChild - success ajax - data:');
                console.log(data);
            }
            generateNoty(data.message, data.status, null, false, 10000, null, null, true);

            if (data.status == 'success')
                clearForm('addNewChildForm');

            if (callback) {
                callback(data);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('AJAX - ERROR');
            console.log(XMLHttpRequest);
            console.log(textStatus);
            console.log(errorThrown);
            generateNoty(JSON.stringify(XMLHttpRequest.status) + "/" +
                JSON.stringify(XMLHttpRequest.statusText + "-" + '/admin'), 'error', null, false, false, null, null, true);
        }
    }).always(function () {
        HideLoadingAnim();
    });
}
function saveNani() {
    var $form = $('#addNewNaniForm');
    var naniInfo = $form.serializeJSON();

    var isEmptyInput = false;

    for (var input in naniInfo) {
        console.log('input: ' + input + " / value: " + naniInfo[input]);
        if ((input == 'first_name' || input == 'tz' || input == 'group' || input == 'kindergarten')
            && (naniInfo[input] == '' || naniInfo[input] == 'Выбрать')) {
            isEmptyInput = true;
            $form.find("input[name*='" + input + "']").closest('.form-group').addClass('error');
        }
    }

    if (!isEmptyInput) {

        var nani = new Nani();

        for (var key in naniInfo) {
            if (key == "address") {
                nani[key] = naniInfo[key];
            } else {
                nani[key] = naniInfo[key];
            }
        }
        nani.save(successNaniSave);
    }
}
function successNaniSave(data) {
    if (isDebug) {
        generateNoty(JSON.stringify(data), 'success', null, false, false, null, null, true);
    }
    $('#addNewNaniModal').modal('hide');
}
function saveNewNani(obj, callback) {
    $.ajax({
        type: "PUT",
        async: true,
        url: '/admin/new-nani',
        data: obj,
        success: function (data) {
            if (isDebug) {
                console.log('saveNewNani - success ajax - data:');
                console.log(data);
            }
            generateNoty(data.message, data.status, null, false, 10000, null, null, true);

            if (data.status == 'success')
                clearForm('addNewNaniForm');

            if (callback) {
                callback(data);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('AJAX - ERROR');
            console.log(XMLHttpRequest);
            console.log(textStatus);
            console.log(errorThrown);
            generateNoty(JSON.stringify(XMLHttpRequest.status) + "/" +
                JSON.stringify(XMLHttpRequest.statusText + "-" + '/admin'), 'error', null, false, false, null, null, true);
        }
    }).always(function () {
        HideLoadingAnim();
    });
}
function initListForSms(children) {
    var data = [], dataEmail = [];
    //var data = [{ id: 0, text: 'enhancement' }, { id: 1, text: 'bug' }, { id: 2, text: 'duplicate' }, { id: 3, text: 'invalid' }, { id: 4, text: 'wontfix' }];
    console.log(children);
    for (var input in children) {
        var child = children[input];
        console.log(child);
        if (child.hasOwnProperty('parents') && child.parents.length) {
            for (var par in child.parents) {
                var parent = child.parents[par];
                if (parent.hasOwnProperty('phone_num') && parent.phone_num != "") {
                    data.push({
                        id: parent.phone_num,
                        text: child.first_name + " " + child.second_name + " (Родитель " + par + ")"
                    });
                    dataEmail.push({
                        id: parent.email,
                        text: child.first_name + " " + child.second_name + " (Родитель " + par + ")"
                    });
                }
            }
        }
    }

    $(".js-example-basic-single").select2({
        data: data
    });
    $(".emailAddress").select2({
        data: dataEmail
    });

}
function sendSmsTo(toNumber, message, callback) {
    var $data = {toNumber: toNumber, massage: message};
    $.ajax({
        type: "PUT",
        async: true,
        url: '/admin-send-sms',
        data: $data,
        success: function (data) {
            if (isDebug) {
                console.log('sent sms - data:');
                console.log(data);
            }
            generateNoty(data.message, data.status, null, false, 10000, null, null, true);

            if (data.status == 'success')
                clearForm('sendSmsForm');

            if (callback) {
                callback(data);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('AJAX - ERROR');
            console.log(XMLHttpRequest);
            console.log(textStatus);
            console.log(errorThrown);
            generateNoty(JSON.stringify(XMLHttpRequest.status) + "/" +
                JSON.stringify(XMLHttpRequest.statusText + "-" + '/admin'), 'error', null, false, false, null, null, true);
        }
    }).always(function () {
        HideLoadingAnim();
    });
}
function sendEmailTo(toEmail, subject, message, callback) {
    var $data = {toEmail: toEmail, subject: subject, message: message};
    $.ajax({
        type: "PUT",
        async: true,
        url: '/admin-send-mail',
        data: $data,
        success: function (data) {
            if (isDebug) {
                console.log('sent mail - data:');
                console.log(data);
            }
            generateNoty(data.message, data.status, null, false, 10000, null, null, true);

            if (data.status == 'success')
                clearForm('sendSmsForm');

            if (callback) {
                callback(data);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('AJAX - ERROR');
            console.log(XMLHttpRequest);
            console.log(textStatus);
            console.log(errorThrown);
            generateNoty(JSON.stringify(XMLHttpRequest.status) + "/" +
                JSON.stringify(XMLHttpRequest.statusText + "-" + '/admin'), 'error', null, false, false, null, null, true);
        }
    }).always(function () {
        HideLoadingAnim();
    });
}
/**/