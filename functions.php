<?php

// 本文の抜粋の文字数を設定
function custom_excerpt_length( $length ) {
  return 50;	//表示したい文字数
}	
add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );

// 本文の抜粋省略記号
function new_excerpt_more($more) {
	return '…'; //変更後の内容
}
add_filter('excerpt_more', 'new_excerpt_more');

// トップページのカテゴリーをすべて以外で表示
function the_category_filter($thelist,$separator=', ') {
	if(!defined('WP_ADMIN')) {
		$exclude = array('すべて');
		$cats = explode($separator,$thelist);
		$newlist = array();
		foreach($cats as $cat) {
			$catname = trim(strip_tags($cat));
			if(!in_array($catname,$exclude))
				$newlist[] = $cat;
		}
		return implode($separator,$newlist);
	} else
		return $thelist;
}
add_filter('the_category','the_category_filter',10,2);

// サイドバーウィジェット
register_sidebar( array(
	'name' => __( 'Side Widget' ),
	'id' => 'side-widget',
	'before_widget' => '<li class="widget-container">',
	'after_widget' => '</li>',
	'before_title' => '<h3>',
	'after_title' => '</h3>',
) );

// アイキャッチの対応
add_theme_support('post-thumbnails');

// メニューの対応
register_nav_menus(
	array(
	'header_menu' => 'ヘッダーメニュー',
	'footer_menu' => 'フッターメニュー'
	)
);
?>