<script lang="ts">
  import { counter } from '$lib/stores/counter';
</script>

<h1>🧮 저는 test2 페이지 입니다</h1>

<p>현재 값: {$counter}</p>

<button on:click={() => $counter++}>+1</button>
<button on:click={() => $counter--}>-1</button>
<button on:click={() => $counter = 0}>Reset</button>
