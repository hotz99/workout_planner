<script lang="ts">
  import type { LayoutData } from "../../routes/$types";

  export let data: LayoutData;
  let dropdownCalculators = false;
  let dropdownMovements = false;

  const calculatorUrls: string[] = ["energy_exependiture", "bmi"];
</script>

<nav class="flex bg-secondary mb-16 p-6 space-x-10">
  <a href="/" class="text-2xl font-medium transition-colors hover:text-primary">
    Home
  </a>
  <div
    class="bg-sky-500 relative inline-block text-left"
    on:mouseenter={() => (dropdownCalculators = true)}
    on:mouseleave={() => (dropdownCalculators = false)}
  >
    <a
      href="/calculators"
      class="text-2xl font-medium transition-colors hover:text-primary"
    >
      Calculators
    </a>
    {#if dropdownCalculators}
      <div
        class="flex flex-col min-w-max origin-top-right absolute bg-secondary-background"
      >
        {#each data.calculators as calculator}
          <div
            class="px-6 py-1 border-x border-b border-secondary-foreground bg-secondary"
          >
            <a
              href={calculator.url}
              class="text-left text-primary"
              on:click={() => (dropdownCalculators = false)}
              >{calculator.name}</a
            >
          </div>
        {/each}
      </div>
    {/if}
  </div>

  <div
    class="border-b-4 border-sky-500 relative inline-block h-full"
    on:mouseenter={() => (dropdownMovements = true)}
    on:mouseleave={() => (dropdownMovements = false)}
  >
    <a
      href="/movements"
      class="text-2xl font-medium transition-colors hover:text-primary"
    >
      Movements
    </a>
    {#if dropdownMovements}
      <div
        class="flex flex-col min-w-max origin-top-right absolute bg-secondary-background"
      >
        {#each data.primaryMuscles as muscleGroup}
          <div
            class="px-6 py-1 border-x border-b border-secondary-foreground bg-secondary"
          >
            <a
              href="/movements/{muscleGroup.toLowerCase()}"
              class="text-left text-primary"
              on:click={() => (dropdownMovements = false)}>{muscleGroup}</a
            >
          </div>
        {/each}
      </div>
    {/if}
  </div>
</nav>
