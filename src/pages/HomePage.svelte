<script>
  import Navbar from '../components/shared/Navbar.svelte'
  import Hero from '../components/home/Hero.svelte'
  import MostPicked from '../components/home/MostPicked.svelte'
</script>

<Navbar />
<main class="clear-fix mt-5">
  <div class="container">
    <!-- Hero -->
    <Hero />
    <!-- Most Picked -->
    <MostPicked />
  </div>
</main>
