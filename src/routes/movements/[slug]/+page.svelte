<script lang="ts">
  import { goto } from "$app/navigation";
  import type { PageData } from "../../$types";
  import { toTitleCase } from "$lib/utils";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";

  export let data: PageData;

  let searchInput: string;

  $: filteredMovements = data.movements;

  function handleSearch() {
    filteredMovements = data.movements.filter((x) =>
      x.name.toLowerCase().includes(searchInput.toLowerCase()),
    );
  }
</script>

<div class="flex flex-col space-y-4 px-48">
  {#if data}
    <div class="text-6xl font-bold pb-4">{toTitleCase(data.primaryMuscle)}</div>
    <div class="flex justify-center">
      <Input
        type="search"
        placeholder="Search ..."
        class="h-9 md:w-[100px] lg:w-[300px]"
        bind:value={searchInput}
        on:input={handleSearch}
      />
    </div>
    {#each filteredMovements as movement}
      <div class="flex flex-row pt-4 pb-4 border-b-4">
        <div class="flex-1">
          <h2 class="text-3xl font-bold mb-2">{movement.name.toUpperCase()}</h2>
          <div class="flex flex-row space-x-2">
            <h2 class="font-bold">EQUIPMENT:</h2>
            <h2>{toTitleCase(movement.equipment) ?? "None"}</h2>
          </div>
          <div class="flex flex-row space-x-2">
            <h2 class="font-bold">PRIMARY MUSCLES:</h2>
            <h2>{movement.primaryMuscles.map((x) => toTitleCase(x))}</h2>
          </div>
        </div>
        <div class="flex flex-col space-y-4">
          <Button>Add</Button>
          <Button
            variant="secondary"
            on:click={() => goto(`details/${movement.id.toLowerCase()}`)}
            class="bg-red"
          >
            View Details
          </Button>
        </div>
      </div>
    {/each}
  {:else}
    <h2>Failed to load PageData ...</h2>
  {/if}
</div>
