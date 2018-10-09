'use strict'
/*checkbox*/

function alertOnCheckbox() {
    var chbox;
    chbox = document.getElementById('checkboxExample');

    if (chbox.checked) {
        alert('Выбран');
    } else {
        alert('Не выбран');
    }
}

/*radiobutton*/

function alertOnRadiobutton() {
    var radi = document.getElementsByName('r1');
    
    for (var i = 0; i < radi.length; i++) {
        if (radi[i].checked) {
            alert('Выбран ' + i + ' элемент')
        }
    }
}
