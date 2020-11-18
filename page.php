<?php get_header(); ?>
<?php while (have_posts()): the_post(); ?>
  <section class="page-header bg-gradient-blue ">
    <h2 class="page-heading text-center" style="color: #fff;">
        <span class="gradient-marker gradient-marker--bright">
          <span class="gradient-marker__text"><?php the_title(); ?></span>
        </span>
    </h2>
  </section>
  <div class="l-wrapper">
    <!-- main-->
    <main class="l-main sub-page">
      <section class="l-section">
        <div class="container">
          <div class="container__page">
            <?php the_content(); ?>
          </div>
        </div>
      </section>
    </main>
    <!-- ./main-->
    <?php get_sidebar(); ?>
  </div>
<?php endwhile; ?>
<?php get_footer(); ?>