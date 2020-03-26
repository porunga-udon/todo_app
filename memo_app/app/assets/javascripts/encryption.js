$(function(){
  // 暗号プロトコル配列
  var input_encryption = [];
  // 暗号プロトコル[e,n,c,r,y,p,t,i,o,n]
  var encryption_cmd = [69,78,67,82,89,80,84,73,79,78];

  // --------------暗号送信---------------------
  function buildHTML(todo) {
    var html = `<li class="todo">
                  <div class = "todo__created_at">${todo.created_at}</div>
                  <div class = "todo__content">${todo.content}</div>
                </li>`;
    return html;
  }

  // ---------------暗号プロトコル-------------------
  $(window).keyup(function(event) {
    input_encryption.push(event.keyCode);
    if ( input_encryption[ input_encryption.length - 1 ] != encryption_cmd[ input_encryption.length - 1 ] ){
      input_encryption = [];
    } else if (input_encryption.length == encryption_cmd.length){
      if($("#modal-overlay")[0]) return false ;
      $('.encryption').fadeIn("slow");
      $('.modal-overlay').fadeIn("slow");
      $('.encryption__btn__yes').click(function(e){
        e.preventDefault();
        var todo = $('.encryption__form__text').val();
        var key = $('.encryption__form__num').val();
        $('.encryption').fadeOut("slow");
        $('.modal-overlay').fadeOut("slow");
        $.ajax({
          type: 'POST',
          url: '/todos.json',
          data: {
            encryption: {
              content: todo,
              key: key
            }
          },
          dataType: 'json'
        })
        .done(function(data) {
          var html = buildHTML(data);
          $('.todos').append(html);
          $('.encryption__form__text').val('');
        })
        .fail(function() {
          alert('error');
        });
        input_encryption = [];
      })
      $('.encryption__btn__no').click(function(e){
        e.preventDefault();
        $('.encryption').fadeOut("slow");
        $('.modal-overlay').fadeOut("slow");
        $('.encryption__form__text').val('');
        input_encryption = [];
      })
    }
    })

})