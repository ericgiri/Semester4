/**
 * Created by bgiri0706 on 2/29/2016.
 */
//show and hide the extra input fields of the form
function show_hide()
{
    $('#boxCheck').change(function(){
        if($(this).prop("checked")) {
            $('#frmExtra').show();
        }
        else
        {
            $('#frmExtra').hide();
        }
    });
}

//shows and hides inout fields in modify feedback page
function show_hide2()
{
    $('#boxCheck2').change(function(){
        if($(this).prop("checked")) {
            $('#frmExtra1').show();
        }
        else
        {
            $('#frmExtra1').hide();
        }
    });
}


//calculates rating for add feedback form
function show_rating(){
    var foodQuality = Number($("#txtFoodQuality").val());
    var service = Number($("#txtService").val());
    var value = Number($("#txtValue").val());
    $("#txtOverallRating").val(getOveralRating(foodQuality, service, value));
}

//calculates rating for modify feedback form
function show_rating_extra(){
    var foodQuality1 = Number($("#txtFoodQuality1").val());
    var service1 = Number($("#txtService1").val());
    var value1 = Number($("#txtValue1").val());
    $("#txtOverallRating1").val(getOveralRating(foodQuality1, service1, value1));
}
//checks the validation
function btnSubmit_check()
{
    doValidate_frmAddFeedback();
}

//checks the modify feedback page form validation
function btnSubmit1_check(){
    doValidate_frmModifyFeedback();
}

function btnSave_default(){
    store_default_Email();
}


function init()
{
    $("#boxCheck").on("click", show_hide);
    $("#boxCheck2").on("click", show_hide2);
    $("#txtFoodQuality").on("change", show_rating);
    $("#txtService").on("change", show_rating);
    $("#txtValue").on("change", show_rating);
    $("#txtFoodQuality1").on("change", show_rating_extra);
    $("#txtService1").on("change", show_rating_extra);
    $("#txtValue1").on("change", show_rating_extra);
    $("#btnSubmit").on("click", btnSubmit_check);
    $("#btnSubmit1").on("click", btnSubmit1_check);
    $("#btnSaveDefault").on("click", btnSave_default)
}

$(document).ready(function(){
    $('#frmExtra').hide();
    $('#frmExtra1').hide();
    init();
});
