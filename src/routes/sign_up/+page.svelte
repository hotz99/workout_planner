<script lang="ts">
    import { user } from "$lib";
    import { auth } from "$lib";
</script>

{#if $user}
    <p>Welcome, {$user.email}.</p>
    <button on:click={async () => await auth.signOut()}>Sign Out</button>
{:else}
    <button on:click={async () => await auth.signIn()}
        >Sign In with Google</button
    >
{/if}
