//huge thank you to mark for helping me get this working and encouraging me to not start from scratch

var values = {};

$(document).ready(function(){
    // clicks();
    clearStuff();
    $('.math').on('click', setOp);

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

function setOp(){
    values.math = $(this).data('id');
    console.log(values.math);
}

//append to the dom
function appendDom(data){
    $('.result').empty();
    if(data.sum != undefined){
    $('.result').append('<p class="sum">'+ data.sum + '</p>');
} else if(data.diff != undefined){
    $('.result').append('<p class="diff">' + data.diff + '</p>');
} else if(data.prod != undefined){
    $('.result').append('<p class="prod">' + data.prod + '</p>');
}else if(data.div != undefined){
    $('.result').append('<p class="div">' + data.div + '</p>');
}


}

//add ajax call function
function doMath(object){
    console.log('math works');
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

//reset things to empty
function clearStuff(){
    values = {};

    $('.container').find('input[type = number]').val('');

    console.log('clear works');
}

console.log('connected');
