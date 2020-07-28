<script>
  import { onMount } from 'svelte'
  import Card from '../shared/Card.svelte'
  import { push } from 'svelte-spa-router'
  import { MostPickedStore } from '../../store/store.js'

  let mostpicked = []
  MostPickedStore.subscribe((value) => {
    mostpicked = value
  })

  let card_lg = true
  let card_md = true
</script>

<div class="row picked mt-5 ">
  <h1 class="tour-title">Most Picked</h1>
  {#each mostpicked as items}
    <div class="col-lg-4 col-sm-12 mt-2">
      <Card
        {card_md}
        price="${items.price} per night"
        image={items.image}
        title={items.name}
        location={items.location}
        alt={items.name}
        on:click={() => push(`/details/${items.id}`)} />
    </div>
  {/each}
</div>
