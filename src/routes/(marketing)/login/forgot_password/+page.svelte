<script lang="ts">
  import { Auth } from "@supabase/auth-ui-svelte"
  import { sharedAppearance, oauthProviders } from "../login_config"
  import { page } from "$app/stores"
  import { WebsiteName } from "../../../../config"

  let { data } = $props()
  let { supabase, url } = data
</script>

<svelte:head>
  <title>Forgot Password - {WebsiteName}</title>
  <meta
    name="description"
    content="Reset your password to regain access to your account."
  />
</svelte:head>

<div class="py-8 lg:py-12 px-6 max-w-2xl mx-auto">
  <!-- Header -->
  <div class="text-center mb-8">
    <h1 class="text-3xl lg:text-4xl font-bold mb-4">Reset Your Password</h1>
    <p class="text-slate-600">
      Enter your email address and we'll send you a link to reset your password.
    </p>
  </div>

  <!-- Success Message -->
  {#if $page.url.searchParams.get("message") === "Check your email for the password reset link"}
    <div role="alert" class="alert alert-success mb-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        /></svg
      >
      <span>Check your email for the password reset link</span>
    </div>
  {/if}

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
      <span>{$page.url.searchParams.get("error")}</span>
    </div>
  {/if}

  <!-- Forgot Password Form -->
  <div class="card bg-white shadow-lg border border-primary/10">
    <div class="card-body">
      <Auth
        supabaseClient={supabase}
        view="forgotten_password"
        redirectTo={`${url}/auth/callback?next=%2Faccount%2Fsettings%2Freset_password`}
        providers={oauthProviders}
        socialLayout="horizontal"
        showLinks={false}
        appearance={sharedAppearance}
        additionalData={undefined}
      />
    </div>
  </div>

  <!-- Links -->
  <div class="text-center mt-6">
    <div class="text-slate-600">
      Remember your password? <a class="link link-hover" href="/login/sign_in"
        >Sign in</a
      >.
    </div>
  </div>

  <!-- Back to Account -->
  <div class="text-center mt-8">
    <a href="/login" class="btn btn-outline btn-sm"> ← Back to Account </a>
  </div>
</div>
