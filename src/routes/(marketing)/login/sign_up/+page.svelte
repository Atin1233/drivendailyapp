<script lang="ts">
  import { Auth } from "@supabase/auth-ui-svelte"
  import { sharedAppearance, oauthProviders } from "../login_config"
  import { goto } from "$app/navigation"
  import { onMount } from "svelte"
  import { page } from "$app/stores"
  import { WebsiteName } from "../../../../config"

  let { data } = $props()
  let { supabase, url } = data

  onMount(() => {
    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_UP" && session) {
        // Redirect to account after successful signup
        setTimeout(() => {
          goto("/account")
        }, 100)
      }
    })

    // Cleanup subscription on component destroy
    return () => {
      subscription.unsubscribe()
    }
  })
</script>

<svelte:head>
  <title>Sign Up - {WebsiteName}</title>
  <meta
    name="description"
    content="Create your account to start your fitness journey with personalized workout plans and nutrition guidance."
  />
</svelte:head>

<div class="py-8 lg:py-12 px-6 max-w-2xl mx-auto">
  <!-- Header -->
  <div class="text-center mb-8">
    <h1 class="text-3xl lg:text-4xl font-bold mb-4">Join Our Community</h1>
    <p class="text-slate-600">
      Create your account and start your fitness journey today
    </p>
  </div>

  <!-- Error Message -->
  {#if $page.url.searchParams.get("error")}
    <div role="alert" class="alert alert-error mb-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        /></svg
      >
      <span>Registration error. Please try again.</span>
    </div>
  {/if}

  <!-- Sign Up Form -->
  <div class="card bg-white shadow-lg border border-primary/10">
    <div class="card-body">
      <Auth
        supabaseClient={supabase}
        view="sign_up"
        redirectTo={`${url}/auth/callback`}
        showLinks={false}
        providers={oauthProviders}
        socialLayout="horizontal"
        appearance={sharedAppearance}
        additionalData={undefined}
      />
    </div>
  </div>

  <!-- Links -->
  <div class="text-center mt-6">
    <div class="text-slate-600">
      Already have an account? <a class="link link-hover" href="/login/sign_in"
        >Sign in</a
      >.
    </div>
  </div>

  <!-- Back to Account -->
  <div class="text-center mt-8">
    <a href="/login" class="btn btn-outline btn-sm"> ← Back to Account </a>
  </div>
</div>
