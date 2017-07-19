$(document).ready(function() {
	$('form#form').submit(function() {
     $('form#form .error').remove();
     var hasError = false;
     $('.requiredField').each(function() {
         if(jQuery.trim($(this).val()) == '') {
            var labelText = $(this).prev('label').text();
            // $(this).parent().append('<span class="error">You forgot to enter your '+labelText+'</span>');
            $(this).addClass('inputError');
            hasError = true;
        } else if($(this).hasClass('email')) {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if(!emailReg.test(jQuery.trim($(this).val()))) {
                var labelText = $(this).prev('label').text();
    // $(this).parent().append('<span class="error">You entered an invalid '+labelText+'</span>');
    $(this).addClass('inputError');
    hasError = true;
}
}
});
     if(!hasError) {
        $('form#form input.submit').fadeOut('normal', function() {
            $(this).parent().append('');
        });
        var formInput = $(this).serialize();
        $.post($(this).attr('action'),formInput, function(data){
            $('form#form').slideUp("fast", function() {
    // $(this).before('<div class="success">Thank you. Your email was sent successfully.</div>');
});
        });
    }
    return false;
});
});
var trSelected;
var error;
$("#btnSubmitSong").on("click",function(){
    console.log($("#name").val())
    var name=$("#name").val();
    var email=$("#email").val();
    var song=$("#songs").val();
    var artist=$("#artist").val();
    if(!name.trim()=="" && !email.trim()=="" && !song.trim()=="" && !artist.trim()==""){
        $("tbody").append("<tr><td colspan='2' >"+name+"</td>"+"<td colspan='2' >"+email+"</td> "+
            "<td colspan='2' >"+song+"</td> "+"<td colspan='2' >"+artist+"</td> "+"</tr>")
        clear();
    }else{
        alert("invalid input");
    }
    trSelected=undefined;
})
$("#btnDelete").on("click",function(){
    if(trSelected==undefined){
        alert("Select A row!")
    }else{
        trSelected.fadeOut(1000,function(){
            trSelected.remove();
            trSelected=undefined;
        })
    }
})
$("#btnEdit").on("click",function(){
 if(trSelected==undefined){
    alert("Select A row!")
}else{
    $("#name").val(trSelected.children().eq(0).text());
    $("#email").val(trSelected.children().eq(1).text());
    $("#songs").val(trSelected.children().eq(2).text());
    $("#artist").val(trSelected.children().eq(3).text());
    trSelected.remove();
    trSelected=undefined;
}
})
$("#btnNew").on("click",function(){
    clear();
})
$("tbody").on("click","tr",function(){
    trSelected=$(this);
    console.log(trSelected);
    $("tr").removeClass("selected");
    $(this).addClass("selected");
})
function clear(){
    $("#name").val("");
    $("#email").val("")
    $("#songs").val("")
    $("#artist").val("")
}
function checkEmpty(){
    if($("#name").val()==""||$("#email").val()==""||$("#songs").val()==""||$("#artist").val()==""){
        alert("Invalid Input");
        error=true;

    }else{
        // alert("Invalid Input")
        error=false;
    }
}
function randomColor(){
    // buat random rgb dari 0-255
    var red=Math.floor(Math.random()*256);
    var green=Math.floor(Math.random()*256)
    var blue=Math.floor(Math.random()*256)
    return "rgb("+red+", "+green+", "+blue+")"

}
setInterval(function(){
    $(".aboutUs").css("color",randomColor)},1000);