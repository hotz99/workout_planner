<script lang="ts">
    import * as Menubar from "$lib/components/ui/menubar";
</script>

<Menubar.Root>
    <Menubar.Menu>
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Content>
            <Menubar.Item>New Tab</Menubar.Item>
            <Menubar.Item>New Window</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>Share</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>Print</Menubar.Item>
        </Menubar.Content>
    </Menubar.Menu>
</Menubar.Root>
