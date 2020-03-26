$(function() {

  // 解読プロトコル配列
  var input_decryption = [];
  // 解読プロトコル[d,e,c,r,y,p,t,i,o,n]
  var decryption_cmd = [68,69,67,82,89,80,84,73,79,78];
  
  // ----------------解読結果----------------------
  function buildHTML(decryption) {
    var result_html = `
                      <div class="result">
                        <div class="result__title">
                          解読結果
                        </div>
                        <div class="result__text">
                          ${decryption.content}
                        </div>
                        <div class="result__exit">
                          <a href="#" class="result__exit__btn">閉じる</a>
                        </div>
                      </div>`;
    return result_html;
  }

  // ---------------解読プロトコル-----------------
  $(window).keyup(function(event) {
    input_decryption.push(event.keyCode);
    if ( input_decryption[ input_decryption.length - 1 ] != decryption_cmd[ input_decryption.length - 1 ] ){
      input_decryption = [];
    } else if (input_decryption.length == decryption_cmd.length){
      if($("#modal-overlay")[0]) return false ;
      $('.decryption').fadeIn("slow");
      $('.modal-overlay').fadeIn("slow");
      $('.decryption__btn__yes').click(function(e){
        e.preventDefault();
        var todo = $('.decryption__form__text').val();
        var key = $('.decryption__form__num').val();
        $('.decryption').fadeOut("slow");
        $('.encryption__form__text').val('');
        $.ajax({
          type: 'POST',
          url: '/todos.json',
          data: {
            decryption: {
              content: todo,
              key: key
            }
          },
          dataType: 'json'
        })
        .done(function(data) {
          var result_html = buildHTML(data);
          $('body').append(result_html);
          $('.result__exit__btn').click(function(e){
            e.preventDefault();
            $('.modal-overlay').fadeOut("slow");
            $('.result').fadeOut("slow");
            input_decryption = [];
          })
        })
        .fail(function() {
          alert('error');
          input_decryption = [];
        });
      })
      $('.decryption__btn__no').click(function(e){
        e.preventDefault();
        $('.decryption').fadeOut("slow");
        $('.modal-overlay').fadeOut("slow");
        input_decryption = [];
      })
    }
  })
});


{/* <div class="result">
  <div class="result__title">
    解読結果
  </div>
  <div class="result__text">

  </div>
  <div class="result__exit">
    <a href="#" class="result__exit__btn">閉じる</a>
  </div>
</div> */}