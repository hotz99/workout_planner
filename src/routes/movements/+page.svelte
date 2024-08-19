<script lang="ts">
  import { Input } from "$lib/components/ui/input";

  let searchInput: string;

  function handleSearch() {
    console.log("searchInput: ", searchInput);
  }
</script>

<div class="flex justify-center">
  <Input
    type="search"
    placeholder="Search ..."
    class="h-9 md:w-[100px] lg:w-[300px]"
    bind:value={searchInput}
    on:input={handleSearch}
  />
</div>
