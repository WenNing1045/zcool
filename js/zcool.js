$(function () {
  //鼠标移入切换
  //楼层滚动切换
  listScroll()
})

function listScroll() {
  //定义一个index下标
  var index = 0
  //获取导航中所有li
  var $navList = $('.nav').find('li')
  //获取内容区的所有li
  var $contentList = $('.content-list').find('li')
  //获取小圆点中的span
  var $spanList = $('.nav-list').find('span')
  //储存每个li的scroll高度
  var topArr = []
  $contentList.each(function (index,item) {
    var top = $(item).offset().top
    topArr.push(top)
  })

}