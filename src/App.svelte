<script>
  import Router from 'svelte-spa-router'
  import Navbar from './components/shared/Navbar.svelte'
  import HomePage from './pages/HomePage.svelte'
  import Details from './pages/Details.svelte'
  import NotFound from './pages/NotFound.svelte'

  const routes = {
    '/': HomePage,
    '/details/:id': Details,
    '*': NotFound,
  }
</script>

<Router {routes} />
