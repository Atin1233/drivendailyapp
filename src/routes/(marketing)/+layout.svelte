<script lang="ts">
  import { onMount } from "svelte"
  import { WebsiteName } from "./../../config"
  import "../../app.css"

  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()
  let isScrolled = false

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 50
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })
</script>

<div
  class="navbar navbar-glass fixed top-0 z-50 w-full {isScrolled
    ? 'scrolled'
    : ''}"
>
  <div class="container mx-auto flex justify-between items-center">
    <!-- Logo on the left -->
    <div class="flex-shrink-0">
      <a
        class="btn btn-ghost normal-case text-xl flex items-center gap-2 logo-hover"
        href="/"
      >
        <img
          src="/images/driven-daily-logo.svg"
          alt="{WebsiteName} Logo"
          class="h-16 w-16"
        />
      </a>
    </div>

    <!-- Centered navigation -->
    <div class="hidden lg:flex justify-center flex-1">
      <ul class="menu menu-horizontal px-1 font-bold text-lg">
        <li class="mx-3">
          <a href="/blog" class="nav-link">Blog</a>
        </li>
        <li class="mx-3">
          <a href="/recipes" class="nav-link">Recipes</a>
        </li>
        <li class="mx-3">
          <a href="/workouts" class="nav-link">Workouts</a>
        </li>
        <li class="mx-3">
          <a href="/recovery" class="nav-link">Recovery</a>
        </li>
        <li class="mx-3">
          <a href="/testimonials" class="nav-link">Testimonials</a>
        </li>
        <li class="mx-3">
          <a href="/bmi-calculator" class="nav-link">BMI Calculator</a>
        </li>
        <li class="mx-3">
          <a href="/pricing" class="nav-link">Pricing</a>
        </li>
      </ul>
    </div>

    <!-- Search and mobile menu on the right -->
    <div class="flex items-center gap-4">
      <a href="/search" aria-label="Search" class="nav-link hidden sm:block">
        <svg
          fill="currentColor"
          class="w-6 h-6"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 0 0 .898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 0 0 2.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 0 0 3.115-.844l3.799 3.801a.953.953 0 0 0 1.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 0 1 4.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 0 1-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"
            fill="currentColor"
          /></svg
        >
      </a>

      <!-- Mobile menu for smaller screens -->
      <div class="dropdown dropdown-end lg:hidden">
        <!-- svelte-ignore a11y_label_has_associated_control -->
        <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            /></svg
          >
        </label>
        <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
        <ul
          tabindex="0"
          class="menu menu-lg dropdown-content mt-3 z-1 p-2 shadow-sm bg-base-100 rounded-box w-52 font-bold"
        >
          <li><a href="/blog">Blog</a></li>
          <li><a href="/recipes">Recipes</a></li>
          <li><a href="/workouts">Workouts</a></li>
          <li><a href="/recovery">Recovery</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
          <li><a href="/bmi-calculator">BMI Calculator</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/search">Search</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- Add top padding to account for fixed navbar -->
<div class="pt-20">
  {@render children?.()}
</div>

<!-- Spacer grows so the footer can be at bottom on short pages -->
<div class="grow"></div>
<div class="footer-glass">
  <div class="border-t max-w-[1000px] mx-auto"></div>
  <footer class="footer p-6 place-content-center text-base">
    <div class="flex flex-col items-center gap-4">
      <div class="flex flex-col items-center gap-2">
        <img
          src="/images/driven-daily-logo.svg"
          alt="{WebsiteName} Logo"
          class="h-12 w-12 logo-hover"
        />
        <span class="text-sm text-slate-600"
          >© 2024 {WebsiteName}. All rights reserved.</span
        >
      </div>
      <nav class="flex flex-wrap justify-center gap-6">
        <a class="link link-hover nav-link" href="/">Overview</a>
        <a class="link link-hover nav-link" href="/pricing">Pricing</a>
        <a class="link link-hover nav-link" href="/blog">Blog</a>
        <a class="link link-hover nav-link" href="/testimonials">Testimonials</a
        >
        <a class="link link-hover nav-link" href="/contact_us">Contact Us</a>
      </nav>
    </div>
  </footer>
</div>

<style>
  .navbar-glass {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
  }

  .navbar-glass.scrolled {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .nav-link {
    position: relative;
    transition: all 0.3s ease;
  }

  .nav-link::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #180042 0%, #db2777 100%);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .logo-hover {
    transition: all 0.3s ease;
  }

  .logo-hover:hover {
    transform: scale(1.05);
  }

  .footer-glass {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>
