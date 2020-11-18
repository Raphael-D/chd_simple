<?php if ( is_active_sidebar( 'side-widget' ) ) : ?>
  <aside class="l-sidebar">
    <div class="sidebar-container">
      <?php dynamic_sidebar( 'side-widget' ); ?>
    </div>
  </aside>
<?php endif; ?>