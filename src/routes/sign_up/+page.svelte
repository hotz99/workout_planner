<script lang="ts">
    import { user } from "$lib";
    import { auth } from "$lib";
</script>

{#if $user}
    <p>Welcome, {$user.email}.</p>
    <button on:click={async () => await auth.logOut()}>Logout</button>
{:else}
    <button on:click={async () => await auth.logIn()}>Log In with Google</button
    >
{/if}
