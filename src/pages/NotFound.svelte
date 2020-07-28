<script>
  import { link } from 'svelte-spa-router'
</script>

<div class="text-center">
  <div
    class="d-flex align-items-center justify-content-center"
    style="height: 90vh;">
    <div class="col col-lg-4 text-center">
      <img src="/assets/404.svg" alt="success" width="294" />
      <h3>Not Found !</h3>
      <p class="mt-2 text-muted">
        Sorry , the page you are looking for was not found ...
      </p>
      <a
        href="/"
        use:link
        class="btn btn-custom text-decoration-none"
        style="color: #ffffff;">
        Back to Home
      </a>
    </div>
  </div>
</div>
