<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import "../app.css"; // 경로가 맞는지 확인!
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<main style="padding: 1rem;">
  <slot />
</main>

<Footer />
