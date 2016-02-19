$(document).ready(function() {
  $('#new_todo').on('click', function(e){
    e.preventDefault();
    var url = $(this).attr('href');
    $.ajax({
      url: url,
      method: 'get'
    })
    .done(function(response) {
      $('#TODO_area').append(response)
    })
    $(this).hide();
    // $('#TODO_area').append("");
  })
  $('#TODO_area').on('submit', 'form[id="create_new_todo"]', function(e){
    e.preventDefault();
    var info = $(this).serialize();
    $.ajax({
      method: "POST",
      url: "/todos",
      data: info
    })
    .done(function(new_todo){
      $('#create_new_todo').remove();
      $('#new_todo').show();
      $('#TODO_area').append(new_todo);
    })
    .fail(function(){
      console.log("bad");
    })
  })
  $('#TODO_area').on('submit', 'form[id="delete_todo"]', function(e){
    e.preventDefault();
    var url = $(this).attr('action');
    $.ajax({
      method: "DELETE",
      url: url
    })
    .done(function(id){
      $('#'+id).remove();
    })
    .fail(function(){
      console.log('breaking');
    })
  })
});










