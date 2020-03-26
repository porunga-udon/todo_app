$(function() {

  // 入力キー配列
  var input_konami = [];
  // コナミコマンド配列 [↑, ↑, ↓, ↓, ←, →, ←, →, B, A]
  var konami_cmd = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  
  
// --------------todo送信---------------------
  function buildHTML(todo) {
    var html = `<li class="todo">
                  <div class = "todo__created_at">${todo.created_at}</div>
                  <div class = "todo__content">${todo.content}</div>
                </li>`;
    return html;
  }
  // ---------投稿非同期-------------------
  $('.js-form').on('submit', function(e) {
    e.preventDefault();
    var todo = $('.js-form__text-field').val();
    $.ajax({
      type: 'POST',
      url: '/todos.json',
      data: {
        todo: {
          content: todo
        }
      },
      dataType: 'json'
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.todos').append(html);
      $('.js-form__text-field').val('');
      $('.js-submit').prop('disabled',false);
    })
    .fail(function() {
      alert('error');
      $('.js-submit').prop('disabled',false);
    });
  });

// --------------------コナミコマンド----------------------
  $(window).keyup(function(event) {
    input_konami.push(event.keyCode);
    if ( input_konami[ input_konami.length - 1 ] != konami_cmd[ input_konami.length - 1 ] ){
      input_konami = [];
    } else if (input_konami.length == konami_cmd.length) {
      alert("コナミコマンド発動！");
      $(".contents").addClass('konami');
      javascript:(function () {var s = document.createElement('script');
        s.setAttribute('src', 'http://fontbomb.ilex.ca/js/main.js');
        document.body.appendChild(s);}());
      input_konami = [];
    }
  });

});
