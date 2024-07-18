<script lang="ts">
  import * as HoverCard from "$lib/components/ui/hover-card";
  import type { LayoutData } from "../../routes/$types";

  export let data: LayoutData;

  console.log("layout data: ", data.primaryMuscles);
</script>

<nav class="p-10 flex items-center space-x-4 lg:space-x-6">
  <a href="/" class="text-lg font-medium transition-colors hover:text-primary">
    Home
  </a>
  <a
    href="/calculators"
    class="text-lg font-medium transition-colors hover:text-primary"
  >
    Calculators
  </a>
  <a
    href="/movements"
    class="text-lg font-medium transition-colors hover:text-primary"
  >
    <HoverCard.Root>
      <HoverCard.Trigger>Movements</HoverCard.Trigger>
      <HoverCard.Content>
        <ul class="space-y-4">
          {#each data.primaryMuscles as muscle}
            <li class="border-b-2">
              <a
                href="/movements/{muscle.toLowerCase()}"
                class="block hover:bg-accent text-left w-full">{muscle}</a
              >
            </li>
          {/each}
        </ul>
      </HoverCard.Content>
    </HoverCard.Root>
  </a>
</nav>
