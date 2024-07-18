<script lang="ts">
  import type { PageData } from "../../$types";
  export let data: PageData;
</script>

<h1>Loaded slug: {data.slug}</h1>
<h2>Movements:</h2>
{#each data.movements as movement}
  <h3>{movement.name}</h3>
{/each}
