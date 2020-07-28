<script>
  import { MostPickedStore } from '../store/store.js'
  import Breadcrumb from '../components/details/Breadcrumb.svelte'
  import Navbar from '../components/shared/Navbar.svelte'
  import Photos from '../components/details/Photos.svelte'
  import About from '../components/details/About.svelte'
  import Booking from '../components/details/Booking.svelte'

  export let params = {}
  let hotelsClicked = null

  MostPickedStore.subscribe((value) => (hotelsClicked = value[params.id]))

  let name = hotelsClicked.name
  let location = hotelsClicked.location
  let descriptions = hotelsClicked.description

  console.log(params)
  console.log(hotelsClicked)
  console.log(descriptions)
</script>

<Navbar />
<main class="clear-fix mt-5">
  <div class="container">
    <Breadcrumb {name} {location} />

    {#each descriptions as description}
      <div class="row">
        <Photos
          image_grid={description.img1}
          image_grid_top={description.img2}
          image_grid_bottom={description.img3} />
      </div>

      <div class="row">
        <About desc={description.paragraph} />
        <Booking />
      </div>
    {/each}

  </div>
</main>
