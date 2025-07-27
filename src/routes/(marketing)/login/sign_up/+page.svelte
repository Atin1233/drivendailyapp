<script lang="ts">
  import { Auth } from "@supabase/auth-ui-svelte"
  import { sharedAppearance, oauthProviders } from "../login_config"
  import { WebsiteName } from "../../../../config"

  let { data } = $props()
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

  <!-- Sign Up Form -->
  <div class="card bg-white shadow-lg border border-primary/10">
    <div class="card-body">
      <Auth
        supabaseClient={data.supabase}
        view="sign_up"
        redirectTo={`${data.url}/auth/callback`}
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
