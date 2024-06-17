$(function () {
 // id属性がchange-colorの要素がクリックされたら
  $('#change-color').on('click', function(){
  // id属性targetのcolorプロパティをredにする
  $('#target').css('color', 'red');
  });

// id属性がchange-colorの要素がクリックされたら
    $('#change-text').on('click', function(){
    // id属性targetのtextの内容を以下のように変更する
    $('#target').text('Hello!');
  });


// id属性がfadeOutの要素がクリックされたら
  $('#fade-out').on('click', function() {
// id属性targetをフェードアウトする
    $('#target').fadeOut();
  });
  
// id属性がfadeInの要素がクリックされたらフェードインする
    $('#fade-in').on('click', function() {
// id属性targetをフェードアウトする
    $('#target').fadeIn();
  });
});