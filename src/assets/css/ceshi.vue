<script>








  function getLanguage() {
    var allcookie = document.cookie.split('; ');
    var language;
    for (var i = 0; i < allcookie.length; i++) {
      var cookiearray = allcookie[i].split('=');
      var cookiename = cookiearray[0];
      var cookievalue = cookiearray[1];
      if (cookiename == 'language') {
        //获取用户zid
        language = cookievalue;
        break;
      }
    }
    return language;
  }
  function addLinkCss(linkUrl){
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = linkUrl;
    document.getElementsByTagName("head")[0].appendChild(link);
  }
  if(getLanguage() == "en_US"){
    addLinkCss('http://static.zcool.cn/git_z/z/common/css/zEnglishStyle.css?version=1523290031867')
  }



  function getLanguage1() {
    var allcookie = document.cookie.split('; ');
    var language;
    // console.log(allcookie)
    for (var i = 0; i < allcookie.length; i++) {
      // console.log(1)
      console.log('-----------------------------------------')
      var cookiearray = allcookie[i].split('=');
      console.log(cookiearray)
      var cookiename = cookiearray[0];
      console.log(cookiename)
      var cookievalue = cookiearray[1];
      console.log(cookievalue)
      if (cookiename != 'language') {
        //获取用户zid
        console.log('我在获取用户zid')
        language = 'language';
        break;
      }
    }
    console.log(language+":language")
  }
  getLanguage1();


  var script = document.createElement('script');
  script.type = 'text/jacascript';
  script.src = '111';     //填自己的js路径
  document.getElementsByTagName("body")[0].append(script);








  var _vds = _vds || [];
  var product = document.getElementById("dataInput");
  var id = product.getAttribute("data-objid");
  var type = product.getAttribute("data-objtype");
  var catename = product.getAttribute("data-catename");
  var recommend = product.getAttribute("data-recommend");
  var isNew = product.getAttribute("data-isnew") == 1 ? "是" : "不是";
  _vds.push(['setPageGroup', 'DetailsPage']);
  _vds.push(['setPS1',id]);
  _vds.push(['setPS2',type]);
  _vds.push(['setPS3', catename]);
  _vds.push(['setPS4', recommend]);
  _vds.push(['setPS5',isNew]);



</script>
