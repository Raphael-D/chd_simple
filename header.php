<!DOCTYPE html>
<html lang="ja">
  <!-- v0.0.1-->
  <head>
  <?php wp_head(); ?>
    <title><?php bloginfo('name'); wp_title('|', true, 'left'); ?></title>
    <meta charset="UTF-8"><!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge"><![endif]-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="Wordpress, theme, original, simple, wp, ワードプレス, テーマ, シンプル">
    <meta name="descrioption" content="Simple wordpress theme">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link href="https://use.fontawesome.com/releases/v5.0.1/css/all.css" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/common.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/style.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/js.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/pagebuilder.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/utility.css">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-180707313-2"></script>
    <script>
      const UA = "UA-XXXXXXXXX-X";
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', UA);
    </script>
  </head>
  <!-- body-->
  <body>
    <!-- header-->
    <header class="l-header is-mobile-header" id="header">
      <?php if (is_user_logged_in()) : ?>
        <div class="logging_nav_space"></div>
      <?php endif;?>
      <nav class="navbar navbar-expand-lg navbar-dark">
      <!-- <a class="navbar-bland" href="<?php echo home_url(); ?>"><img src="<?php echo get_template_directory_uri(); ?>/images/logo.png" alt=""></a> -->
        <button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <?php wp_nav_menu( array(
              'theme_location'=>'header_menu', 
              'container'     =>'', 
              'menu_class'    =>'nav-link',
              'items_wrap'    =>'<ul class="navbar-nav ml-auto mt-2 mt-md-8">%3$s</ul>'));
            ?>
        </div>
      </nav>
    </header>
    <!-- <ul class="navbar-nav ml-auto mt-2 mt-md-0">
      <li class="nav-item"><a class="nav-link" href="#tg1">SERVICE</a></li>
      <li class="nav-item"><a class="nav-link" href="#tg2">ABOUT</a></li>
      <li class="nav-item"><a class="nav-link" href="#tg3">CONTACT</a></li>
    </ul> -->
    <!-- ./ header-->