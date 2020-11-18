//ルール
//宣言はvar,letを使用する
//jQueryで取得したものは接頭辞に$をつける「$objectName」
//スマートに書くことも大事だが可読性重視で多少は分けて書く

//toggle.js ==========================test
//スマートフォン用グローバルナビゲーションのスライド

$(function() {
	var breakPoint = 600, //ウィンドウのブレーク幅
		$trigger = $('#toggle'), //クリックで発火する要素
		$menu = $('#menu'), //クリックで見え隠れさせる要素
		tgClass = 'is-open', //クリックで発火する要素に付与するクラス
		duration = 300, //見え隠れさせるときの動きのスピード
		animation = 'swing'; //見え隠れさせるときのアニメーションの種類
	var $win = $(window).width(); //ロードした時のウィンドウ幅取得
	function MenuSlider() { //戻り値
		$($trigger).click(function() {
			$(this).toggleClass(tgClass);
			$($menu).slideToggle(duration, animation);
			return false;
		});
	};
	$(function() {
		if ($win <= breakPoint) {
			MenuSlider();
			$(window).resize(function() {
				$win = $(window).width();
				if ($win >= breakPoint) {
					location.reload();
				}
			});
		} else {
			$(window).resize(function() {
				$win = $(window).width(); //リサイズごとに取得
				if ($win <= breakPoint) {
					location.reload();
				}
			});
		}
	});
});

// -------------------------------------
//END toggle.js ========================================

//phone.js ==========================
//電話ボタンをスマートフォンの時のみダイヤル起動、PCでは起動させない

$(function() {
	if (!isPhone())
		return;
	$('span[data-action=call]').each(function() {
		var $ele = $(this);
		$ele.wrap('<a href="tel:' + $ele.data('tel') + '" ' + 'class="' + 'js_dateTel"></a>');
	});
});

function isPhone() {
	return (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0);
}
// -------------------------------------
//END phone.js ========================================


//ofi.min.js =========================
//オブジェクトフィットの関数呼び出し

$(function() {
	objectFitImages('.ofi');
});
// -------------------------------------
//END ofi.min.js ========================================



//locate.js =========================
//現在いるページと同一のURLの場合にリンクを消してcurrentクラスを付与する

// $('.locate').each(function (i, e) {
//     var stateLocation = $(location).attr('href'),
//     targetAnchor = $(this).children('a'),
//     elementLocation = targetAnchor.attr('href'),
//     elementText = targetAnchor.text(),
//     elementClass = targetAnchor.attr('class');
//     if (stateLocation === elementLocation) {
//         $(this).addClass('current');
//         var elementChild = $(this).children().html();
//         targetAnchor.replaceWith('<span>' + '</span>');
//         $(this).children('span').addClass(elementClass);
//         if (elementChild !== null) {
//             $(this).children('span').prepend(elementChild);
//         }
//     }
// });
// -------------------------------------
//END locate.js ========================================


//anchor_check.js
//全てのa要素のURLが現在のページと同じURLの時にクラス名はそのままでspanタグに置き換える
//また、内包する子要素が存在する場合はそちらもそのまま

// $(function() {
// 	$('a').each(function() {
// 		var dirName = 'http://ndt-00.onamae.jp/proto/plus_shimizu_170914/',
// 			//var dirName = 'http://localhost/plus_shimizu_170914/',
// 			stateLocation = location.href.replace(dirName, ''),
// 			elementLocation = $(this).attr('href'),
// 			elementText = $(this).text(),
// 			elementClass = $(this).attr('class'),
// 			currentClass = 'current';
// 		if (stateLocation === elementLocation) {
// 			var elementChild = $(this).html();
// 			//var newElement = $('<span>' + '</span>').addClass(elementClass).addClass(currentClass);
// 			//$(this).replaceWith(newElement);
// 			if (elementChild !== null) {
// 				//$(newElement).prepend(elementChild);
// 				// console.log(elementChild);
// 				$(this).addClass(currentClass);
// 			}
// 		}
// 	});
// });
// -------------------------------------
//END ancor_check.js ========================================


//sticky.js
//navの高さがスクロール上部にきたらfixed（スマホは解除）
//
// $(function() {
//   var $win = $(window);
//   var $nav = $('.nav');
//   var navHeight = $($nav).innerHeight();
//   var navPos = $nav.offset().top;
//   var windowWidth = $win.width();
//   var breakPoint = 600;
//   $win.on('load scroll', function() {
//     var activePos = $(this).scrollTop();
//     if (activePos > navPos && windowWidth > breakPoint) {
//       $nav.css({
//         'position': 'fixed',
//         'top': '0',
//         'z-index': '999'
//       });
//       $nav.parent().css('margin-bottom', navHeight);
//     } else if (activePos < navPos && windowWidth > breakPoint) {
//       $nav.css('position', 'static');
//       $nav.parent().css('margin-bottom', '0');
//     }
//   });
// });


//include_anchor.js
//自動で内部リンクを生成する

$(function() {
	var anchorName = 'anchor';
	var $localAnchor = $('.JS_anchorLink');
	var $targetModule = $('.JS_targetContainer');
	$($localAnchor).each(function(i) {
		$(this).attr('href', '#' + anchorName + (1 + i++));
	});
	$($targetModule).each(function(i) {
		$(this).attr('id', anchorName + (1 + i++));
	});
});

//pallaxScroll
$(function() {
	$(window).bind('scroll', function(e) {
		parallaxScroll();
	});

	function parallaxScroll() {
		var scrolled = $(window).scrollTop();
		$('#object-is-plx').css('top', (100 - (scrolled * 0.2)) + 'px');
		var scrolled = $(window).scrollTop();
		$('#img-is-plx').css('top', (0 - (scrolled * 0.05)) + 'px');
		//開始位置top-20%でスクロールに応じて20%遅らせる状態
	};
});

//togloop
$('.scroll-ancher').click(function() {
	$(this).toggleClass('is-tap').delay(1000).queue(function(loop) {
		$(this).toggleClass('is-tap');
		return loop();
	});
});


window.addEventListener('DOMContentLoaded', function() {
	//formにname属性"contactForm"をつける
	if (document.getElementById('js_form')) {
		var tgSelector = document.getElementById('js_form'), //select要素につけるID
			recruitForm = document.getElementsByClassName('js_recruitForm'), //求人のフォームにつけるクラス
			contactForm = document.getElementsByClassName('js_contactForm'); //お問い合わせのフォームにつけるクラス
		formAction = document.contactForm.action,
			includeUrl = '?type=recruit', //求人フォーム用のconfigファイル指定（ファイル名"config.recruit.cgi"のケース）
			newcgiUrl = formAction + includeUrl,
			mfpJs = document.getElementById('mfpjs'); //メールフォームプロのフォーム内のscriptエレメントにつけるID
		var tgFormChild, formLength;

		function hideForm(tgForm) {
			formLength = tgForm.length - 1;
			for (var i = 0; i <= formLength; i++) {
				tgForm[i].style.display = 'none';
				tgFormChild = tgForm[i].querySelectorAll('input, select, textarea');
				for (var e = 0; e <= tgFormChild.length - 1; e++) {
					tgFormChild[e].disabled = 'true';
				}
			}
		}

		function existForm(tgForm) {
			formLength = tgForm.length - 1;
			for (var i = 0; i <= formLength; i++) {
				tgForm[i].style.display = '';
				tgFormChild = tgForm[i].querySelectorAll('input, select, textarea');
				for (var e = 0; e <= tgFormChild.length - 1; e++) {
					tgFormChild[e].disabled = '';
				}
			}
		}

		function setCgi() {
			document.contactForm.action = newcgiUrl;
			mfpJs.src = newcgiUrl;
		}

		function returnCgi() {
			var returnUrl = formAction;
			document.contactForm.action = returnUrl;
			mfpJs.src = returnUrl;
		}
		existForm(contactForm);
		hideForm(recruitForm);
		tgSelector.onchange = function() {
			var value = this.value,
				isContact = 'お問い合わせ', //ID名"js_form"のvalueがお問い合わせ
				isRecruit = '求人応募'; //ID名"js_form"のvalueが求人応募
			switch (value) {
				case isContact:
					existForm(contactForm);
					hideForm(recruitForm);
					returnCgi();
					break;
				case isRecruit:
					existForm(recruitForm);
					hideForm(contactForm);
					setCgi();
					break;
				default:
					existForm(contactForm);
					hideForm(recruitForm);
					returnCgi();
					break;
			} //End switch
		}
	} //End if
});
