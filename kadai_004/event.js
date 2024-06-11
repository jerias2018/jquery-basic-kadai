// オブジェクトのロードが完了したらコンソールに表示
$(window).on('load', () => {
  console.log('loadイベントが発生しました')
});
// スクロールのイベントが発生したらコンソールに表示
$(window).on('scroll', () => {
  console.log('scrollイベントが発生しました')
})