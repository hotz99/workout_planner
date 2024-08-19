<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import type { PageData } from "./$types";

  export let data: PageData;

  let selectedImageIndex: number = 0;

  function cycleImage() {
    selectedImageIndex = (selectedImageIndex + 1) % 2;
  }
</script>

{#if data}
  <div class="flex flex-row space-x-32 px-48">
    <div class="w-92">
      <h2 class="text-6xl font-bold border-b-4 pb-2">
        {data.selectedMovement.name}
      </h2>
      <ul class="list-disc mt-6">
        {#each data.selectedMovement.instructions as instructionStep}
          <li>{instructionStep}</li>
        {/each}
      </ul>
    </div>
    <div class="flex-grow flex flex-col space-y-2">
      <img
        src={`/src/lib/assets/images/${data.selectedMovement.images[selectedImageIndex]}`}
        alt={`${data.selectedMovement.name}[${selectedImageIndex}]`}
        class="w-64 h-64 object-cover border-4 border-primary"
      />
      <Button on:click={cycleImage}>Cycle Image</Button>
    </div>
  </div>
{/if}
