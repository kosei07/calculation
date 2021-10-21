'use strict'

var output = document.getElementById('output');
var result = '';
var ary = [];

function cal (elem){
    var value = elem.value;
    var name = elem.name;

    if (name == 'ac'){
        result = '0';
        ary = [];
    }

    if(name == 'num'){
             if(typeof result === 'number'){
                 result = String(result);
                 result = '0';
             }
             if(result == '0'){
                 result = '';
             }
        result += value;
    } else if (name == 'math1'){
        ary.push(result);
        ary.push(value);
        result = Number(result);
    } else if (name == 'math2'){
        result = Number(result);
        switch(value){
            case "±":
                result = result * (-1);
                break;
            case "%":
                result = result /100;
                break;
        }
        result = String(result);
    } else if (name == 'ac'){
        result = '0';
        ary = [];
    } else if (name == 'float'){
        var p = new RegExp('\\.{1}','g');
        var check = result.match(p);
        if(check == null){
        result += value;
        }
    }

    if(ary.length == 4){
        var ope1 = ary.shift();
        var ope2 = ary.shift();
        var ope3 = ary.shift();
        var ope1 = Number(ope1);
        var ope3 = Number(ope3);
        Number(ope3);
        switch(ope2){
            case '+' :
               result = ope1 + ope3;
               break;
            case '-' :
               result = ope1 - ope3;
               break;
            case '×' :
               result = ope1 * ope3;
               break;
            case '÷' :
               result = ope1 / ope3;
               break;
        }

        result = Math.round(result * 100000000)/100000000
        if(result > 9999999999){
            result = String(result);
            result = result.substr(0,10)
            result = Number(result);
        }
        ary.unshift(result);
    }


    if(result.length > 10){
        result = result.substr(0,10)
    }
    output.textContent = result;


}
