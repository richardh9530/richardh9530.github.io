/* jshint asi:true */
//先等图片都加载完成
//再执行布局函数

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

  /**
     * 内容JSON
     */
  var demoContent = [
    {
      demo_link: 'http://blog.csdn.net/sinat_34439107',
      img_link: 'https://raw.githubusercontent.com/njuhalley/HanQingwu/master/resources/imgs/forest.jpg',
      code_link: 'http://blog.csdn.net/sinat_34439107',
      title: '清无时空【CSDN】',
      core_tech: 'JavaScript',
      description: '清无时空【CSDN】 <a href ="http://blog.csdn.net/sinat_34439107">链接</a>'
    }, {
      demo_link: 'http://www.cnblogs.com/halley/',
      img_link: 'https://raw.githubusercontent.com/njuhalley/HanQingwu/master/resources/imgs/panda.png',
      code_link: 'http://www.cnblogs.com/halley/',
      title: '清无时空【博客园】',
      core_tech: 'jQuery BootStrap CSS3',
      description: '清无时空【博客园】 <a href ="http://www.cnblogs.com/halley/">链接</a>'
    }, {
      demo_link: 'http://blog.chinaunix.net/uid/31404425.html',
      img_link: 'https://raw.githubusercontent.com/njuhalley/HanQingwu/master/resources/imgs/house.png',
      code_link: 'http://blog.chinaunix.net/uid/31404425.html',
      title: '清无时空【ChinaUnix】',
      core_tech: 'jQuery CSS',
      description: '清无时空【ChinaUnix】'
    }, {
      demo_link: 'http://blog.csdn.net/sinat_34439107',
      img_link: 'https://raw.githubusercontent.com/njuhalley/HanQingwu/master/resources/imgs/forest.jpg',
      code_link: 'http://blog.csdn.net/sinat_34439107',
      title: '清无时空【CSDN】',
      core_tech: 'JavaScript',
      description: '清无时空【CSDN】 <a href ="http://blog.csdn.net/sinat_34439107">链接</a>'
    }, {
      demo_link: 'http://www.cnblogs.com/halley/',
      img_link: 'https://raw.githubusercontent.com/njuhalley/HanQingwu/master/resources/imgs/panda.png',
      code_link: 'http://www.cnblogs.com/halley/',
      title: '清无时空【博客园】',
      core_tech: 'jQuery BootStrap CSS3',
      description: '清无时空【博客园】 <a href ="http://www.cnblogs.com/halley/">链接</a>'
    }, {
      demo_link: 'http://blog.chinaunix.net/uid/31404425.html',
      img_link: 'https://raw.githubusercontent.com/njuhalley/HanQingwu/master/resources/imgs/house.png',
      code_link: 'http://blog.chinaunix.net/uid/31404425.html',
      title: '清无时空【ChinaUnix】',
      core_tech: 'jQuery CSS',
      description: '清无时空【ChinaUnix】'
    },{
      demo_link: 'http://blog.csdn.net/sinat_34439107',
      img_link: 'https://raw.githubusercontent.com/njuhalley/HanQingwu/master/resources/imgs/forest.jpg',
      code_link: 'http://blog.csdn.net/sinat_34439107',
      title: '清无时空【CSDN】',
      core_tech: 'JavaScript',
      description: '清无时空【CSDN】 <a href ="http://blog.csdn.net/sinat_34439107">链接</a>'
    }, {
      demo_link: 'http://www.cnblogs.com/halley/',
      img_link: 'https://raw.githubusercontent.com/njuhalley/HanQingwu/master/resources/imgs/panda.png',
      code_link: 'http://www.cnblogs.com/halley/',
      title: '清无时空【博客园】',
      core_tech: 'jQuery BootStrap CSS3',
      description: '清无时空【博客园】 <a href ="http://www.cnblogs.com/halley/">链接</a>'
    }, {
      demo_link: 'http://blog.chinaunix.net/uid/31404425.html',
      img_link: 'https://raw.githubusercontent.com/njuhalley/HanQingwu/master/resources/imgs/house.png',
      code_link: 'http://blog.chinaunix.net/uid/31404425.html',
      title: '清无时空【ChinaUnix】',
      core_tech: 'jQuery CSS',
      description: '清无时空【ChinaUnix】'
    }
  ];

  contentInit(demoContent) //内容初始化
  waitImgsLoad() //等待图片加载，并执行布局初始化
}());

/**
 * 内容初始化
 * @return {[type]} [description]
 */
function contentInit(content) {
  // var htmlArr = [];
  // for (var i = 0; i < content.length; i++) {
  //     htmlArr.push('<div class="grid-item">')
  //     htmlArr.push('<a class="a-img" href="'+content[i].demo_link+'">')
  //     htmlArr.push('<img src="'+content[i].img_link+'">')
  //     htmlArr.push('</a>')
  //     htmlArr.push('<h3 class="demo-title">')
  //     htmlArr.push('<a href="'+content[i].demo_link+'">'+content[i].title+'</a>')
  //     htmlArr.push('</h3>')
  //     htmlArr.push('<p>主要技术：'+content[i].core_tech+'</p>')
  //     htmlArr.push('<p>'+content[i].description)
  //     htmlArr.push('<a href="'+content[i].code_link+'">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>')
  //     htmlArr.push('</p>')
  //     htmlArr.push('</div>')
  // }
  // var htmlStr = htmlArr.join('')
  var htmlStr = ''
  for (var i = 0; i < content.length; i++) {
    htmlStr += '<div class="grid-item">' + '   <a class="a-img" href="' + content[i].demo_link + '">' + '       <img src="' + content[i].img_link + '">' + '   </a>' + '   <h3 class="demo-title">' + '       <a href="' + content[i].demo_link + '">' + content[i].title + '</a>' + '   </h3>' + '   <p>主要技术：' + content[i].core_tech + '</p>' + '   <p>' + content[i].description + '       <a href="' + content[i].code_link + '">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>' + '   </p>' + '</div>'
  }
  var grid = document.querySelector('.grid')
  grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * 等待图片加载
 * @return {[type]} [description]
 */
function waitImgsLoad() {
  var imgs = document.querySelectorAll('.grid img')
  var totalImgs = imgs.length
  var count = 0
  //console.log(imgs)
  for (var i = 0; i < totalImgs; i++) {
    if (imgs[i].complete) {
      //console.log('complete');
      count++
    } else {
      imgs[i].onload = function() {
        // alert('onload')
        count++
        //console.log('onload' + count)
        if (count == totalImgs) {
          //console.log('onload---bbbbbbbb')
          initGrid()
        }
      }
    }
  }
  if (count == totalImgs) {
    //console.log('---bbbbbbbb')
    initGrid()
  }
}

/**
 * 初始化栅格布局
 * @return {[type]} [description]
 */
function initGrid() {
  var msnry = new Masonry('.grid', {
    // options
    itemSelector: '.grid-item',
    columnWidth: 250,
    isFitWidth: true,
    gutter: 20
  })
}
