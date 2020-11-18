<?php get_header(); ?>
<section class="page-header bg-gradient-blue ">
  <h2 class="page-heading text-center" style="color: #fff;">
      <span class="gradient-marker gradient-marker--bright">
        <span class="gradient-marker__text">BLOG</span>
      </span>
  </h2>
</section>
<div class="l-wrapper">
<main class="l-main sub-page">
<section class="l-section">
  <?php if(have_posts()): while(have_posts()):the_post(); ?>
    <div class="container">
      <div class="single-post">
        <h1 class="single-post__title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
        
        <time class="single-post__date" datetime="<?php the_time('Y-m-d'); ?>"><?php the_time('Y.m.d'); ?></time>
        <span class="single-post__category bg-gradient-orange"><?php the_category(', '); ?></span>
        <div class="single-post__content"><?php the_content('Read more'); ?></div>
      </div>
    </div>
  <?php endwhile; endif; ?>
  <ul class="single-post-pager">
    
    <li class="single-post-pager__prev">
      <?php previous_post_link('%link','前の記事'); ?>
    </li>
    
    <li class="single-post-pager__next">
      <?php next_post_link('%link','次の記事'); ?>
    </li>
    
  </ul>
</section>
</main>
<?php get_sidebar(); ?>
</div>
<?php get_footer(); ?>