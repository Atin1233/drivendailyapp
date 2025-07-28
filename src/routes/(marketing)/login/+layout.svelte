<script lang="ts">
  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()
  let isEurope = $state(false)
  try {
    isEurope = Intl.DateTimeFormat()
      .resolvedOptions()
      .timeZone.startsWith("Europe/")
  } catch (e) {
    /* continue */
  }
</script>

<div class="min-h-screen">
  {@render children?.()}
  <div class="mt-8 text-center {isEurope ? 'block' : 'hidden'}">
    🍪 Logging in uses Cookies 🍪
  </div>
</div>
