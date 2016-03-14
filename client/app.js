//i think i am going to start over, its such a mess at this point i dont know whats broken and whats needed and what isnt

var values = {};

$(document).ready(function(){
    clicks();
    clearStuff();

    $('#calc').on('submit', function(event){
        console.log('submit works');
        event.preventDefault();

        $.each($("#calc").serializeArray(), function(i, field){
            values[field.name] = field.value;
        });
        //something needs to go here
        doMath(values);
    });
});

//set click listeners
// function clicks(){
//     $('.container').on('click', '.add', add);
//     $('.container').on('click', '.subtract', subtract);
//     $('.container').on('click', '.divide', divide);
//     $('.container').on('click', '.multiply', multiply);
//     $('.clear').on('click', clearStuff);
// }

//append to the dom
function appendDom(data){
    $('.result').empty();
    $('.result').append('<p>'+ data + '</p>');
}

//add ajax call function
function doMath(object){
    console.log('add works');
    $.ajax({
        type: 'POST',
        url: '/math/' + object.math,
        data: object,
        success: function(response){
            console.log('add', response);
            appendDom(response);
        }
    });
}

//subtract ajax call function
function subtract(data){
    console.log('subtract works');
    $.ajax({
        type: 'POST',
        url: '/subtract',
        data: data,
        success: function(response){
            console.log('subtract', response);
            appendDom(response);
        }
    });
}

//multiply ajax call function
function multiply(data){
    console.log('muliply works');
    $.ajax({
        type: 'POST',
        url: '/multiply',
        data: data,
        success: function(response){
            console.log('multiply', response);
            appendDom(response);
        }
    });
}

//multiply ajax call function
function divide(data){
    console.log('divide works');
    $.ajax({
        type: 'POST',
        url: '/divide',
        data: data,
        success: function(response){
            console.log('divide', response);
            appendDom(response);
        }
    });
}

//reset things to empty
function clearStuff(){
    values = {};

    $('.container').find('input[type = number]').val('');

    console.log('clear works');
}

console.log('connected');
