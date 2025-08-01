<script lang="ts">
  import { onMount } from "svelte"
  import { page } from "$app/stores"
  import { WebsiteName } from "./../../config"
  import "../../app.css"

  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()
  let isScrolled = $state(false)
  let showBetaPopup = $state(false)
  let isMobileMenuOpen = $state(false)
  let currentPage = $derived($page.url.pathname)

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 50
    }

    window.addEventListener("scroll", handleScroll)

    // Check if user has seen the popup before (with error handling for SSR)
    try {
      const hasSeenPopup =
        typeof window !== "undefined"
          ? localStorage.getItem("beta-popup-seen")
          : null
      if (!hasSeenPopup) {
        // Show popup after a short delay
        setTimeout(() => {
          showBetaPopup = true
          console.log("Beta popup should be visible now")
        }, 1000)
      }
    } catch (error) {
      console.log("localStorage not available, showing popup anyway")
      // Fallback: show popup if localStorage fails
      setTimeout(() => {
        showBetaPopup = true
      }, 1000)
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  function closeBetaPopup() {
    showBetaPopup = false
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("beta-popup-seen", "true")
      }
    } catch (error) {
      console.log("Could not save to localStorage")
    }
  }

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen

    // Prevent body scrolling when sidebar is open
    if (typeof document !== "undefined") {
      document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    }
  }

  function closeMobileMenu() {
    isMobileMenuOpen = false

    // Re-enable body scrolling
    if (typeof document !== "undefined") {
      document.body.style.overflow = ""
    }
  }
</script>

<div
  class="navbar navbar-glass fixed top-0 z-50 w-full {isScrolled
    ? 'scrolled'
    : ''} {currentPage === '/' ? 'page-home' : ''} {currentPage === '/blog'
    ? 'page-blog'
    : ''} {currentPage === '/recipes' ? 'page-recipes' : ''} {currentPage ===
  '/workouts'
    ? 'page-workouts'
    : ''} {currentPage === '/recovery' ? 'page-recovery' : ''} {currentPage ===
  '/testimonials'
    ? 'page-testimonials'
    : ''} {currentPage === '/pricing' ? 'page-pricing' : ''}"
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

      <!-- Mobile menu button -->
      <button
        class="btn btn-ghost btn-circle lg:hidden"
        aria-label="Toggle mobile menu"
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-sidebar"
        onclick={toggleMobileMenu}
        onkeydown={(e) => e.key === "Enter" && toggleMobileMenu()}
      >
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
      </button>
    </div>
  </div>
</div>

<!-- Mobile Sidebar -->
{#if isMobileMenuOpen}
  <!-- Overlay -->
  <div
    class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
    onclick={closeMobileMenu}
    aria-hidden="true"
  ></div>

  <!-- Sidebar -->
  <div
    id="mobile-sidebar"
    class="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-[70] shadow-xl transform transition-transform duration-300 sidebar-animation"
    role="dialog"
    aria-modal="true"
    aria-label="Navigation menu"
  >
    <!-- Close button -->
    <button
      class="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
      aria-label="Close menu"
      onclick={closeMobileMenu}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- Logo -->
    <div class="p-6 border-b border-gray-200">
      <a href="/" class="flex items-center gap-3" onclick={closeMobileMenu}>
        <img
          src="/images/driven-daily-logo.svg"
          alt="{WebsiteName} Logo"
          class="h-10 w-10"
        />
        <span class="text-xl font-bold text-gray-800">{WebsiteName}</span>
      </a>
    </div>

    <!-- Navigation links -->
    <nav class="p-6">
      <ul class="space-y-4">
        <li>
          <a
            href="/blog"
            class="block py-2 px-4 text-gray-800 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors font-medium"
            onclick={closeMobileMenu}
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="/recipes"
            class="block py-2 px-4 text-gray-800 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors font-medium"
            onclick={closeMobileMenu}
          >
            Recipes
          </a>
        </li>
        <li>
          <a
            href="/workouts"
            class="block py-2 px-4 text-gray-800 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors font-medium"
            onclick={closeMobileMenu}
          >
            Workouts
          </a>
        </li>
        <li>
          <a
            href="/recovery"
            class="block py-2 px-4 text-gray-800 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors font-medium"
            onclick={closeMobileMenu}
          >
            Recovery
          </a>
        </li>
        <li>
          <a
            href="/testimonials"
            class="block py-2 px-4 text-gray-800 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors font-medium"
            onclick={closeMobileMenu}
          >
            Testimonials
          </a>
        </li>
        <li>
          <a
            href="/bmi-calculator"
            class="block py-2 px-4 text-gray-800 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors font-medium"
            onclick={closeMobileMenu}
          >
            BMI Calculator
          </a>
        </li>
        <li>
          <a
            href="/pricing"
            class="block py-2 px-4 text-gray-800 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors font-medium"
            onclick={closeMobileMenu}
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="/search"
            class="block py-2 px-4 text-gray-800 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors font-medium"
            onclick={closeMobileMenu}
          >
            Search
          </a>
        </li>
      </ul>
    </nav>

    <!-- Footer -->
    <div class="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
      <p class="text-sm text-gray-500 text-center">
        © 2024 {WebsiteName}
      </p>
    </div>
  </div>
{/if}

<!-- Debug button (temporary) -->
<button
  onclick={() => (showBetaPopup = true)}
  class="fixed top-4 left-4 z-[200] bg-red-500 text-white px-2 py-1 text-xs rounded"
  style="display: none;"
>
  Test Popup
</button>

<!-- Beta Version Popup Modal -->
{#if showBetaPopup}
  <div class="fixed inset-0 z-[100] flex items-center justify-center p-4">
    <!-- Backdrop -->
    <div
      class="absolute inset-0 bg-black/20 backdrop-blur-sm"
      role="button"
      tabindex="0"
      aria-label="Close popup"
      onclick={closeBetaPopup}
      onkeydown={(e) => e.key === "Escape" && closeBetaPopup()}
    ></div>

    <!-- Modal -->
    <div
      class="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all duration-300 scale-100"
    >
      <!-- Close button -->
      <button
        class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Close popup"
        onclick={closeBetaPopup}
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>

      <!-- Content -->
      <div class="text-center">
        <!-- Icon -->
        <div
          class="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <svg
            class="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>

        <!-- Title -->
        <h3 class="text-2xl font-bold text-gray-900 mb-3">
          Welcome to {WebsiteName}!
        </h3>

        <!-- Message -->
        <p class="text-gray-600 mb-6 leading-relaxed">
          We're currently in <span class="font-semibold text-primary">BETA</span
          >
          and completely
          <span class="font-semibold text-green-600">FREE</span> until September
          30th, 2024.
        </p>

        <!-- Features -->
        <div class="space-y-2 mb-6 text-sm text-gray-500">
          <div class="flex items-center justify-center gap-2">
            <svg
              class="w-4 h-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Personalized workout & meal plans</span>
          </div>
          <div class="flex items-center justify-center gap-2">
            <svg
              class="w-4 h-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Expert fitness content & recipes</span>
          </div>
          <div class="flex items-center justify-center gap-2">
            <svg
              class="w-4 h-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>No credit card required</span>
          </div>
        </div>

        <!-- CTA Button -->
        <button
          class="btn btn-primary w-full font-semibold"
          onclick={closeBetaPopup}
        >
          Start Exploring
        </button>

        <!-- Small text -->
        <p class="text-xs text-gray-400 mt-4">
          You can always access this info from our pricing page
        </p>
      </div>
    </div>
  </div>
{/if}

<!-- Content starts immediately after navbar -->
<div>
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
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1d4ed8 100%);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .navbar-glass.scrolled {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1d4ed8 100%);
    backdrop-filter: blur(15px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }

  /* Page-specific navbar backgrounds */
  .navbar-glass.page-home {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1d4ed8 100%);
  }

  .navbar-glass.page-blog {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1d4ed8 100%);
  }

  .navbar-glass.page-recipes {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1d4ed8 100%);
  }

  .navbar-glass.page-workouts {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1d4ed8 100%);
  }

  .navbar-glass.page-recovery {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1d4ed8 100%);
  }

  .navbar-glass.page-testimonials {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1d4ed8 100%);
  }

  .navbar-glass.page-pricing {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1d4ed8 100%);
  }

  /* Page-specific scrolled backgrounds */
  .navbar-glass.page-home.scrolled {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1d4ed8 100%);
  }

  .navbar-glass.page-blog.scrolled {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1d4ed8 100%);
  }

  .navbar-glass.page-recipes.scrolled {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1d4ed8 100%);
  }

  .navbar-glass.page-workouts.scrolled {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1d4ed8 100%);
  }

  .navbar-glass.page-recovery.scrolled {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1d4ed8 100%);
  }

  .navbar-glass.page-testimonials.scrolled {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1d4ed8 100%);
  }

  .navbar-glass.page-pricing.scrolled {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1d4ed8 100%);
  }

  .nav-link {
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 600;
    padding: 8px 16px;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  .nav-link:hover {
    color: #ffffff;
    transform: translateY(-1px);
    text-shadow: 0 2px 6px rgba(255, 255, 255, 0.8);
  }

  .nav-link::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #180042 0%, #db2777 100%);
    border-radius: 1px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(-50%);
  }

  .nav-link:hover::after {
    width: 60%;
  }

  .logo-hover {
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 12px;
    padding: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(10px);
  }

  .logo-hover:hover {
    transform: scale(1.05);
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
  }

  .footer-glass {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  /* Sidebar animation */
  .sidebar-animation {
    animation: slideIn 0.3s ease-out forwards;
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
</style>
