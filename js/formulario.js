$(document).ready(function(){
  $('input[type=button]').click(function(){
    ajaxForm($(this));
  });
});
function ajaxForm(button){
  var form = button.closest('form'),
      formElements = ['input:not([type=button]):not([type=submit])', 'select', 'textarea'],
      formNames = new Array(),
      dataString = '';
  for (var i in formElements) {
    form.find(formElements[i]).each(function(){
      formNames.push([$(this).attr('name'), $(this).val()]);
    });
  }
  for (var i in formNames) {
    if (dataString!=='') {
      dataString += '&'
        }
    dataString += formNames[i][0]+'='+escape(formNames[i][1]);
  }
  $.ajax({
    type: form.attr('method'),
    url: form.attr('action'),
    data: dataString,
    success: function(){
      console.log(dataString); // Success actions go here.
    }
  });
}