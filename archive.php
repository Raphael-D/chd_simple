<?php get_header(); ?>
<section class="page-header bg-gradient-blue ">
  <h2 class="page-heading text-center" style="color: #fff;">
      <span class="gradient-marker gradient-marker--bright">
        <span class="gradient-marker__text">BLOG</span>
      </span>
  </h2>
</section>
<div class="l-wrapper">
<main class="l-main sub-page ">
<section class="l-section">
    <div class="container container-fluid">
      <div class="card-deck blog">
        <div class="row">
          <?php
            if ( have_posts() ) {
              while ( have_posts() ){
                the_post();
                ?>
                <article class="col-sm-4 blog-cols">
                  <div class="card">
                  <a class="thumbnail-link" href="<?php the_permalink(); ?>">
                    <?php the_post_thumbnail(array(280, 180), array('class' => 'card-img-top')); ?>
                    <span class="blog__date"><?php the_modified_date('Y.m.d'); ?></span>
                  </a>
                  <p class="card__badge"><span><?php the_category(', '); ?></span></p>
                    <div class="card-body">
                      <h3 class="card-title blog__title">
                        <a href="<?php the_permalink(); ?>">
                          <?php if(mb_strlen($post->post_title)>22) {
                            $title= mb_substr($post->post_title,0,22) ;
                              echo $title . '...';
                            } else {
                              echo $post->post_title;
                            } ?>
                        </a>
                      </h3>
                      <div class="blog__content">
                      <?php the_excerpt(); ?>
                      </div>
                    </div>
                  </div>
                </article>
                <?php
              }
            }
          ?>
        </div>
        <div>
        <?php
          the_posts_pagination( array(
            'prev_text' => '&lt;',
            'next_text' => '&gt;',
          ) );
        ?>
      </div>
      </div>
    </div>
  </section>
</main>
<?php get_sidebar(); ?>
</div>
<?php get_footer(); ?>