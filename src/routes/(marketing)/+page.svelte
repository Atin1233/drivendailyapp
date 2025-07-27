<script lang="ts">
  import {
    WebsiteName,
    WebsiteBaseUrl,
    WebsiteDescription,
  } from "./../../config"

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: WebsiteName,
    url: WebsiteBaseUrl,
  }
  const jsonldScript = `<script type="application/ld+json">${
    JSON.stringify(ldJson) + "<"
  }/script>`

  const features = [
    {
      name: "Daily Habits & Mindset",
      description:
        "Build lasting wellness routines and develop the mental framework for sustainable progress. From morning habits that actually stick to mindset strategies that keep you motivated long-term.",
      link: "/blog",
      linkText: "Read More",
      svgContent: `<path d="M12 2V6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M12 18V22" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M4.93 4.93L7.76 7.76" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M16.24 16.24L19.07 19.07" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M2 12H6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M18 12H22" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M4.93 19.07L7.76 16.24" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M16.24 7.76L19.07 4.93" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<circle cx="12" cy="12" r="3" stroke="#1C274C" stroke-width="1.5"/>`,
    },
    {
      name: "Fitness & Workouts",
      description:
        "Simple, effective workouts that work with your schedule and fitness level. From no-equipment home workouts to complete routines you can trust, designed for real people with real lives.",
      svgContent: `<path d="M6 4H8V20H6V4Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M16 4H18V20H16V4Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M4 6H20V8H4V6Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M4 16H20V18H4V16Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M12 8V16" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M9 12H15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>`,
    },
    {
      name: "Nutrition & Meal Planning",
      description:
        "Simple meal ideas and nutrition tips that don't require a culinary degree. From protein guides to meal prep strategies that save time and fuel your progress.",
      svgContent: `<path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M19 15L19.5 16.5L21 17L19.5 17.5L19 19L18.5 17.5L17 17L18.5 16.5L19 15Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M5 15L5.5 16.5L7 17L5.5 17.5L5 19L4.5 17.5L3 17L4.5 16.5L5 15Z" stroke="#1C274C" stroke-width="1.5"/>`,
    },
    {
      name: "Personal Dashboard & Community",
      description:
        "Track your progress, save favorite articles, and access your personalized wellness plans. Plus, join our community and get the Driven Daily newsletter with weekly health boosts.",
      svgContent: `<path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M12 8V16" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8 12H16" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M12 18C13.1 18 14 18.9 14 20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20C10 18.9 10.9 18 12 18Z" stroke="#1C274C" stroke-width="1.5"/>`,
    },
  ]
</script>

<svelte:head>
  <title>{WebsiteName}</title>
  <meta name="description" content={WebsiteDescription} />
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}
</svelte:head>

<div class="hero min-h-[60vh]">
  <div class="hero-content text-center py-12">
    <div class="max-w-xl">
      <div
        class="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-accent mb-3 md:mb-7 pb-1"
      >
        Fuel Your Progress
      </div>

      <div
        class="text-4xl md:text-6xl font-bold px-2"
        style="line-height: 1.2;"
      >
        Become the Best You.
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >Driven Daily.</span
        >
      </div>
      <div class="mt-6 md:mt-10 text-sm md:text-lg">
        Empower Gen Z/Millennials to make daily progress in fitness, nutrition,
        and mindset—through honest, research-backed, no-fluff content that meets
        them where they are.
      </div>
      <div
        class="mt-6 md:mt-4 flex flex-row flex-wrap gap-4 place-content-center"
      >
        <a href="/blog">
          <button class="btn btn-primary px-6">Read the Blog</button>
        </a>
        <a href="/pricing">
          <button class="btn btn-outline btn-primary px-6">See Pricing</button>
        </a>
      </div>
    </div>
  </div>
</div>
<div class="min-h-[60vh]">
  <div class="pt-20 pb-8 px-7">
    <div class="max-w-lg mx-auto text-center">
      <div
        class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-accent pb-2"
      >
        Driven Daily
      </div>
      <div class="mt-4 text-xl font-bold">
        Everything you need for
        <span
          class="underline decoration-secondary decoration-[3px] md:decoration-[4px]"
        >
          sustainable wellness progress
        </span>
      </div>
    </div>

    <div class="mt-16 max-w-6xl mx-auto space-y-20">
      {#each features as feature, index}
        <div
          class="flex flex-col {index % 2 === 1
            ? 'lg:flex-row-reverse'
            : 'lg:flex-row'} items-center gap-12"
        >
          <!-- Icon Section -->
          <div class="flex-1 flex justify-center">
            <div
              class="card bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 p-8 rounded-2xl"
            >
              <svg
                width="80px"
                height="80px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                {@html feature.svgContent}
              </svg>
            </div>
          </div>

          <!-- Content Section -->
          <div class="flex-1 text-center lg:text-left">
            <h2
              class="text-3xl lg:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
            >
              {feature.name}
            </h2>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
              {feature.description}
            </p>
            {#if feature.link}
              <a href={feature.link} class="inline-block">
                <button class="btn btn-primary btn-lg rounded-full px-8"
                  >{feature.linkText ? feature.linkText : "Learn More"}</button
                >
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
<div class="hero min-h-[60vh] mt-12">
  <div class="hero-content text-center pb-16 pt-4 px-4">
    <div class="max-w-lg">
      <div
        class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-accent mt-4 pb-2"
      >
        Get Driven Daily
      </div>
      <div class="mt-6 text-center">
        <div class="px-4 text-lg md:text-xl mb-6">
          Join thousands of motivated individuals making daily progress in their
          wellness journey.
        </div>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/blog">
            <button class="btn btn-primary btn-wide">Start Reading</button>
          </a>
          <a href="/pricing">
            <button class="btn btn-outline btn-primary btn-wide"
              >Choose Your Plan</button
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
