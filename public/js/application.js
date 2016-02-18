$(document).ready(function() {
  $('#new_todo').on('click', function(e){
    e.preventDefault();
    var url = $(this).attr('href');
    $.ajax({
      url: url,
      method: 'get'
    })
    .done(function(response) {
      console.log(response)
      $('#TODO_area').append(response)
    })

    $(this).remove();
    // $('#TODO_area').append("");
  })
  // $('#TODO_area').on('submit', 'form[id="create_new_todo"]', function(e){
  //   console.log('working');
  //   e.preventDefault();
  //   var info = $(this).serialize();
  //   $.ajax({
  //     method: "POST",
  //     url: "/todos",
  //     data: info
  //   })
  //   .done(function(new_todo){
  //     console.log("good");
  //   })
  //   .fail(function(){
  //     console.log("bad");
  //   })
  // })
});
