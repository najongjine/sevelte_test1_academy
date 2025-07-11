<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<main style="padding: 1rem;">
  <slot />
</main>

<Footer />
