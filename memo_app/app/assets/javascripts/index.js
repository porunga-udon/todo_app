$(function() {
  var search_list = $(".todos");





  // ---------------インクリメンタルサーチ-----------------
  // function appendTodo(date) {
  //   var html = ` <ul class="todos">
  //                   <li class = "todo">
  //                     <div class = "todo__created_at">${date.created_at}</div>
  //                     <div class = "todo__content">${date.content}</div>
  //                   </li>
  //                 </ul>`;
  //   search_list.append(html);
  // }

  // // function appendErrMsgToHTML(msg) {
  // //   var html = `<div class ="todos">${ msg }</div>`
  // //   search_list.append(html);
  // // }

  // $('.js-form').on('keyup', function(e) {
  //   e.preventDefault();
  //   var input = $('.js-form__text-field').val();
  //   $.ajax({
  //     type: 'GET',
  //     url: '/',
  //     data: { keyword: input },
  //     dataType: 'json'
  //   })
  //   .done(function(dates) {
  //     $(".todos").empty();
  //     if (dates.length !== 0) {
  //       dates.forEach(function(date){
  //         appendTodo(date);
  //       });
  //     } else {
  //       appendErrMsgToHTML("一致するTodoがありません");
  //     }
  //   })
  //   .fail(function() {
  //     alert('error');
  //   });
  // });

  
});