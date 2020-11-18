window.addEventListener('DOMContentLoaded', function() {
  /* === options === */
  var speed = 800, //scrollにかかる時間、距離が伸びると相対的に少しずつ遅くなる
    fps = 8, //フレームレート16=60fps,24=30fps
    duration = 1,
    adjust = 40;
  /* === END options === */

  var scrollVal = function() {
    // JavaScriptエンジンで分岐
    var ua = navigator.userAgent.toLowerCase();
    var dom = {
      body: document.body,
      elem: document.documentElement,
      scrl: document.scrollingElement
    }
    return ua.indexOf('chrome') != -1 ? dom.scrl
    : ua.indexOf('safari') != -1 ? dom.body
    : ua.indexOf('edge') != -1 ? dom.body
    : ua.indexOf('msie') != -1 ? dom.body
    : ua.indexOf('firefox') != -1 ? dom.elem
    : ua.indexOf('opera') != -1 ? dom.body
    : ua.indexOf('gecko') != -1 ? dom.elem
    : ua.indexOf('ie') != -1 ? dom.elem : dom.body;
  }

  //easing関数作成
  function easeOut(time, duration) {
    return 1 - Math.pow(1 - (time / duration), 5); //5乗
  }
  //タイマー重複エスケープ
  if (timer) {
    clearInterval(timer);
  }
  var timer;
  //smoothScroll関数, elementが取得先, beginが初期値, changeが変化量
  function smoothScroll(element, begin, change) {
    clearInterval(timer);//断続クリックエスケープのための初期化Restart
    var start = Date.now();
    timer = window.setInterval(function() {
      var time = (Date.now() - start) / (speed * (tgOffsetY / (tgOffsetY / 3))),
        result = easeOut(time, duration),
        posY = begin + result * change;
      element.scrollTop = posY;
      if (time >= duration) { //指定の時間
        clearInterval(timer);
      }
    }, fps);
  }
  var tgID, tgElem, tgOffset, tgOffsetY;
  function tgGet(aHref, nowPos) {
    tgID = aHref.replace('#', ''),
    tgElem = document.getElementById(tgID),
    tgOffset = tgElem.getBoundingClientRect(),
    tgOffsetY = tgOffset.top;
    smoothScroll(scrollVal(), nowPos, tgOffsetY - adjust);
  }
  var a = document.getElementsByTagName('a'),
    elemArr = a.length,
    i = 0;
  while (i < elemArr) {
    a[i].onclick = function(event) {

      var elem = this,
        aHref = this.getAttribute('href'), //hrefを取得
        aCheck = aHref.search(/^#.+/); //先頭に#を含む場合は0を返す
      if (aCheck === 0) { //先頭に#を含む時の処理
        event.preventDefault();
        tgGet(aHref, window.pageYOffset);
        stopScroll();
      } else { //先頭に#を含まない時の処理
        var hrefSplit = aHref.split(/#/),
          hrefFirst = hrefSplit[0],
          hrefLast = '#' + hrefSplit[1],
          pathName = location.pathname, //フラグメントパラメータは除外
          pathSplit = pathName.split(/\//), //"/"を区切りに配列
          pathSplitLast = pathSplit[pathSplit.length - 1], //pathname配列の最後の値を代入
          hostName = location.hostname; //ドメイン名"localhost"
        function aHrefCheck() { //外部サイトか判断している
          var check1 = hrefFirst.match(/https?:\/\/.[^\/]+\//);
          if (check1 === null) { //絶対パスを含んでいない
            return true;
          } else {
            var check2 = check1[0].indexOf(hostName);
            if (check2 != -1) {
              return true;
            } else {
              return false;
            } // END IF
          } // END IF
        } // END aHrefCheck();
        function aHrefChange() {
          if (hrefFirst.indexOf(hostName) !== -1 || hrefFirst.indexOf(pathSplitLast) === -1) {
            //クリックしたa要素のhref'xxx.html'にドメインがある時か、現在のURLと同じ'xxx.html'を含まない時
            //同ドメインを含んでいるか、現在のurlと同じファイル名じゃない時
            hrefLast = hrefLast.replace('#', '?id=');
            aHref = hrefFirst + hrefLast; //xxx.html?id=exmpleを生成
            if (hrefSplit[1] !== undefined) {
              elem.setAttribute('href', aHref);
            }
          } else {
            return; //現在のページと同じ時はhrefの変更は行わない
          }
        } // END aHrefChange();
        if (aHrefCheck() === true) { //外部サイトじゃない時、
          aHrefChange();
        } else {
          return;
        }
      } //END IF
    } // END onclick
    i = (i + 1);
  } // END while
  var url = location.href,
    stringMatch = url.indexOf('?id=');
  if (stringMatch === -1) { //IDが存在しない時
    return;
  } else { //IDが存在する
    var urlSplit = url.split(/\?id=/),
      anchorLink = '#' + urlSplit[urlSplit.length - 1];
    setTimeout(
      function() {
        tgGet(anchorLink, window.pageYOffset);
        stopScroll();
      }, 400);
    var removeID = function() {
      window.history.replaceState(null, null, urlSplit[0]);
    }
    setTimeout(removeID, 1400);
  }
  //ユーザーがタップしたりスクロールした時に停止させる
  function stopScroll() {
    function clear() {
      clearTimeout(timer);
    }
    document.addEventListener('touchstart', clear);
    document.addEventListener('touchmove', clear);
    document.addEventListener('wheel', clear);
  }
});
