<script lang="ts">
  import PricingModule from "./pricing_module.svelte"
  import { WebsiteName } from "./../../../config"

  type PlanFeatureRow = {
    name: string
    starterIncluded?: boolean
    proIncluded?: boolean
    ultimateIncluded?: boolean
    starterString?: string
    proString?: string
    ultimateString?: string
    header?: boolean
  }

  const planFeatures: PlanFeatureRow[] = [
    {
      name: "Content Access",
      header: true,
    },
    {
      name: "Blog Content",
      starterIncluded: true,
      proIncluded: true,
      ultimateIncluded: true,
    },
    {
      name: "Newsletter",
      starterString: "Weekly",
      proString: "3x Weekly",
      ultimateString: "3x Weekly",
    },
    {
      name: "Early Access",
      starterIncluded: false,
      proIncluded: true,
      ultimateIncluded: true,
    },
    {
      name: "Tools & Resources",
      header: true,
    },
    {
      name: "Meal Planner",
      starterIncluded: false,
      proIncluded: true,
      ultimateIncluded: true,
    },
    {
      name: "Workout Tracker",
      starterIncluded: false,
      proIncluded: true,
      ultimateIncluded: true,
    },
    {
      name: "Goal Setting",
      starterIncluded: false,
      proIncluded: false,
      ultimateIncluded: true,
    },
    {
      name: "Downloads",
      starterString: "Basic",
      proString: "Advanced",
      ultimateString: "All + Reports",
    },
    {
      name: "Support",
      header: true,
    },
    {
      name: "Community Access",
      starterIncluded: true,
      proIncluded: true,
      ultimateIncluded: true,
    },
    {
      name: "Priority Support",
      starterIncluded: false,
      proIncluded: true,
      ultimateIncluded: true,
    },
    {
      name: "1-on-1 Consultation",
      starterIncluded: false,
      proIncluded: false,
      ultimateIncluded: true,
    },
  ]
</script>

<svelte:head>
  <title>Choose Your Plan - {WebsiteName}</title>
  <meta
    name="description"
    content="Fuel Your Progress — Choose Your Plan. Small steps, real results. Built for your daily grind."
  />
</svelte:head>

<div class="min-h-[70vh] pb-8 pt-[5vh] px-4">
  <h1 class="text-3xl font-bold text-center">
    Fuel Your Progress — Choose Your Plan
  </h1>
  <h2 class="text-xl text-center text-slate-500 mt-1 pb-3">
    Small steps, real results. Built for your daily grind.
  </h2>

  <div class="w-full my-8">
    <PricingModule callToAction="Get Started" highlightedPlanId="pro" />

    <!-- Monthly vs Annual Toggle -->
    <div class="flex justify-center mt-8">
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text mr-4">Monthly</span>
          <input type="checkbox" class="toggle toggle-primary" />
          <span class="label-text ml-4">Annual (Save 15%)</span>
        </label>
      </div>
    </div>

    <h1 class="text-2xl font-bold text-center mt-24">
      Frequently Asked Questions
    </h1>
    <div class="flex place-content-center">
      <div class="join join-vertical max-w-xl py-6 mx-auto">
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            Can I cancel my subscription anytime?
          </div>
          <div class="collapse-content">
            <p>
              Absolutely! Cancel anytime, zero hassle. We believe in earning
              your business every day.
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            What's included in the newsletter?
          </div>
          <div class="collapse-content">
            <p>
              Our newsletter delivers research-backed wellness tips, quick
              workouts, meal ideas, and mindset strategies—all designed to fit
              your busy lifestyle.
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            Do you offer refunds?
          </div>
          <div class="collapse-content">
            <p>
              Yes! If you're not satisfied within 30 days, we'll give you a full
              refund. No questions asked.
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            How do the meal and workout planners work?
          </div>
          <div class="collapse-content">
            <p>
              Our planners are designed for real life. Drag and drop meals to
              your calendar, track workouts with sets and reps, and see your
              progress over time. Everything syncs across your devices.
            </p>
          </div>
        </div>
      </div>
    </div>

    <svg style="display:none" version="2.0">
      <defs>
        <symbol
          id="checkcircle"
          viewBox="0 0 24 24"
          stroke-width="2"
          fill="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-4.105-4.498a.791.791 0 0 0-1.082.29l-3.828 6.63-1.733-2.08a.791.791 0 1 0-1.216 1.014l2.459 2.952a.792.792 0 0 0 .608.285.83.83 0 0 0 .068-.003.791.791 0 0 0 .618-.393L12.6 6.866a.791.791 0 0 0-.29-1.081z"
          />
        </symbol>
      </defs>
    </svg>

    <svg style="display:none" version="2.0">
      <defs>
        <symbol id="nocircle" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4,11H8a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"
          />
        </symbol>
      </defs>
    </svg>

    <h1 class="text-2xl font-bold text-center mt-16">Plan Comparison</h1>
    <h2 class="text-xl text-center text-slate-500 mt-1 pb-3">
      See what's included in each plan
    </h2>

    <div class="overflow-visible mx-auto max-w-4xl mt-4">
      <table class="table">
        <thead
          class="text-lg sticky top-0 bg-base-100 bg-opacity-50 z-10 backdrop-blur-sm"
        >
          <tr>
            <th></th>
            <th class="text-center">Starter</th>
            <th class="text-center">Pro</th>
            <th class="text-center">Ultimate</th>
          </tr>
        </thead>
        <tbody>
          {#each planFeatures as feature}
            {#if feature.header}
              <tr class="bg-base-200 font-bold">
                <td colspan="4">{feature.name} </td>
              </tr>
            {:else}
              <tr class="relative">
                <td>{feature.name} </td>
                <td class="text-center">
                  {#if feature.starterString}
                    {feature.starterString}
                  {:else if feature.starterIncluded}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-8 h-8 ml-2 inline text-success"
                    >
                      <use href="#checkcircle" />
                    </svg>
                  {:else}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-[26px] h-[26px] inline text-base-200"
                    >
                      <use href="#nocircle" />
                    </svg>
                  {/if}
                </td>
                <td class="text-center">
                  {#if feature.proString}
                    {feature.proString}
                  {:else if feature.proIncluded}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-8 h-8 ml-2 inline text-success"
                    >
                      <use href="#checkcircle" />
                    </svg>
                  {:else}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-[26px] h-[26px] inline text-base-200"
                    >
                      <use href="#nocircle" />
                    </svg>
                  {/if}
                </td>
                <td class="text-center">
                  {#if feature.ultimateString}
                    {feature.ultimateString}
                  {:else if feature.ultimateIncluded}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-8 h-8 ml-2 inline text-success"
                    >
                      <use href="#checkcircle" />
                    </svg>
                  {:else}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-[26px] h-[26px] inline text-base-200"
                    >
                      <use href="#nocircle" />
                    </svg>
                  {/if}
                </td>
              </tr>
            {/if}
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
