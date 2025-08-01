<p align="center">
    <picture>
        <img width="420" alt="SaaS Starter Header reading: The open source, fast, and free to host SaaS template" src="https://github.com/CriticalMoments/CMSaasStarter/assets/848343/12f47617-e5be-4694-affc-23310e54b885">
    </picture>
</p>

<p align="center">
  <a href="https://github.com/CriticalMoments/CMSaasStarter/actions/workflows/build.yml" target="_blank"><img src="https://github.com/CriticalMoments/CMSaasStarter/actions/workflows/build.yml/badge.svg?branch=main" alt="Built Status"></a>
  <a href="https://github.com/CriticalMoments/CMSaasStarter/actions/workflows/format.yml" target="_blank"><img src="https://github.com/CriticalMoments/CMSaasStarter/actions/workflows/format.yml/badge.svg?branch=main" alt="Format Check"></a>
  <a href="https://github.com/CriticalMoments/CMSaasStarter/actions/workflows/linting.yml" target="_blank"><img src="https://github.com/CriticalMoments/CMSaasStarter/actions/workflows/linting.yml/badge.svg?branch=main" alt="Linting"></a>
  <a href="https://github.com/CriticalMoments/CMSaasStarter/blob/main/LICENSE" target="_blank"><img src="https://img.shields.io/badge/License-MIT-brightgreen?labelColor=32383f" alt="License"></a>
</p>

<p align="center">
  <a href="https://saasstarter.work"><strong>Demo & Homepage</strong></a> •
  <a href="https://github.com/CriticalMoments/CMSaasStarter#quick-start"><strong>Quick Start Guide</strong></a> • 
  <a href="https://github.com/CriticalMoments/CMSaasStarter/issues"><strong>Issues</strong></a>
</p>

<br/>

# SaaS Starter: A SvelteKit Boilerplate/Template

- [Feature Rich](#features): user auth, user dashboard, marketing site, blog engine, billing/subscriptions, pricing page, search, emails, and more.
- [Lightning Performance](#performance--best-practices): fast pre-rendered pages which score 100/100 on Google PageSpeed.
- [Delighful Developer Experience](#tech-stack): tools you'll love working with, including SvelteKit, Tailwind, DaisyUI, Postgres, and Supabase.
- Extensible: all the tools you need to make additional marketing pages, UI components, user dashboards, admin portals, database backends, API endpoints, and more.
- [Hosting](#suggested-hosting-stack): Our suggested hosting stack is free to host, cheap to scale, easy to manage, and includes automatic deployments.
- [MIT Open Source](https://github.com/CriticalMoments/CMSaasStarter/blob/main/LICENSE)
- [Fully Functional Demo](https://saasstarter.work)
- [Quick Start](#quick-start): Full docs from `git clone` to deployment.

Created by the folks at [Kiln AI](https://getkiln.ai)! It's the easiest tool for fine-tuning LLM models, synthetic data generation, and collaborating on datasets. The Kiln app was built with SaaS Starter!

**[Kiln AI](https://getkiln.ai)** Rapid AI Prototyping and Dataset Collaboration Tool

## Demo

You can explore all the features using our fully functional demo [saasstarter.work](https://saasstarter.work).

[![Try it Now](https://img.shields.io/badge/Try_it_Now-37a779?style=for-the-badge "Try it Now")](https://saasstarter.work)

See [criticalmoments.io](https://criticalmoments.io) and [getkiln.ai](https://getkiln.ai) for examples of what’s possible after this template has design, content, and functionality added.

<a href="https://saasstarter.work">
<kbd>
<img width="500" alt="homepage" src="https://github.com/CriticalMoments/CMSaasStarter/assets/848343/34944c09-df72-4ac2-9099-01d25d99911b">
</kbd>
<br>
<kbd>
<img width="200" alt="pricing page" src="https://github.com/CriticalMoments/CMSaasStarter/assets/848343/c3cb2ab7-3739-473e-a1fe-f82a4a31e844">
</kbd><kbd>
<img width="200" alt="settings page" src="https://github.com/CriticalMoments/CMSaasStarter/assets/848343/2d947c97-3cc7-4ff5-a5b1-7c8478b6f31a">
</kbd><kbd>
<img width="200" alt="payments portal" src="https://github.com/CriticalMoments/CMSaasStarter/assets/848343/0c4749c3-0d29-4edc-ae87-d8a4eefea3c9">
</kbd>
</a>

## Features

Everything you need to get started for a SaaS company:

- User Authentication: Sign up, sign out, forgot password, email verification, and oAuth. Powered by Supabase Auth. GDPR cookie warning for European users.
- Marketing Page with SEO optimization and Sitemap
- Blog engine with rich formatting, RSS and SEO optimization.
- User Dashboard with user profile, user settings, update email/password, billing, and more
- Subscriptions powered by Stripe Checkout
- Pricing page
- Emails: send emails to users, including template support
- Search: lightning fast site search, without a backend
- Contact-us form
- Billing portal: self serve to change card, upgrade, cancel, or download receipts
- Onboarding flow after signup: collect user data, and select a payment plan
- Style toolkit: theming and UI components
- Responsive: designed for mobile and desktop.
- Extensible: all the tools you need to make additional marketing pages, UI components, admin portals, database backends, API endpoints, and more.

## Introduction Blog Post

Want to learn why we picked the technologies we did, and how to keep your fork lightning fast as you add content? Check out [our blog post](https://criticalmoments.io/blog/how_we_built_our_marketing_page) on the process. Yes, it's hosted on a SaaS Starter fork!

## Tech Stack

- Web Framework: SvelteKit
- CSS / Styling
  - Framework: TailwindCSS
  - Component library: DaisyUI
- Suggested Hosting Stack
  - Host + CDN: Cloudflare Pages
  - Serverless compute: Cloudflare Workers
  - Authentication: Supabase Auth
  - Database: Supabase Postgres
- Payments
  - Stripe Checkout
  - Stripe Portal

## Suggested Hosting Stack

**There’s no cost for using this template**. The costs below reflect our suggested hosting stack.

- **$0/mo** — Supabase free tier, Cloudflare free tier.
  - Pros:
    - Free!
    - Can scale to thousands of users.
    - Unlimited static page requests.
    - 100k serverless functions/day.
  - Cons:
    - Does not include database backups. The frugal among you could hook up pgdump backups on lambda/S3 for a few cents per month.
    - Will auto-pause your database when not in use for 7 days.
  - Who it’s for:
    - This tier is perfectly functional for a hobby project, or pre-revenue company (up to 50,000 monthly active users). It’s easy to scale up once revenue starts, but it’s also fine to keep at this scale indefinitely.
- **$30/mo** - Supabase Pro, Cloudfare [Workers Paid](https://www.cloudflare.com/plans/developer-platform/)
  - Pros:
    - Database backups.
    - Never pauses database.
    - Over 1M serverless functions per day, with linear pricing for additional invocations.
  - Cons:
    - none
  - Who it’s for:
    - I suggest moving to this once you have paid customers or investors.

## Performance / Best Practices

The selected tech stack creates lightning fast websites.

- Pre-rendering (static generation) for marketing pages, pricing and blog
- Instant navigation: the best of CSR + SSR in one. SSR your first page for fastest possible initial load times. For subsequent pages, the content is pre-loaded and rendered with CSR, for instant rendering.
- CDN optimized, for high edge-cache hit ratios
- Edge-functions for dynamic APIs/pages
- Svelte and Tailwind compile out unused HTML, CSS and JS at deploy time for smaller pages
- Linting to find accessibility and syntax issues

The result is a perfect Google PageSpeed Insights score in all categories!

<img width="420" alt="Screenshot 2024-01-18 at 11 31 32 AM" src="https://github.com/CriticalMoments/CMSaasStarter/assets/848343/46b5e960-2aa0-4fb5-acd7-4f84b380e1d0">

# Quick Start

## Create a Copy of the Template

To get started, create your own copy of the project for development. There are two options:

- "Use this template": use this Github button if you want to build your own project using CMSaasStarter as a starter template and you aren't planning on contributing work back to the public open source project. See [Github Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).
- "Fork": use this button if you want contribute some or all of your work back to the public open source project. It will keep the full commit history, and be easier to create PRs back to CMSaasStarter.

## Setup Local Development

On your development machine:

```
git pull [Your Repo Created Above]
cd CMSaasStarter ## or your repo name if different
npm install
## Create an env file. You'll replace the values in this in later steps.
cp .env.example .env.local
## Run the project locally in dev mode, and launch the browser
npm run dev -- --open
```

**Note:** some features won't work until you complete the rest of the setup steps below!

## Developer Tools

The repo includes [CI scripts](https://aws.amazon.com/devops/continuous-integration/) designed for [GitHub Actions](https://github.com/features/actions). These confirm you don’t break your [build](https://github.com/CriticalMoments/CMSaasStarter/blob/main/.github/workflows/build.yml), you use [proper code formatting](https://github.com/CriticalMoments/CMSaasStarter/blob/main/.github/workflows/format.yml), [code linting and typechecking passes](https://github.com/CriticalMoments/CMSaasStarter/blob/main/.github/workflows/linting.yml), and even spell checking.

### Enabling GitHub Actions

Github disables CI on new forks by default, so be sure to go into the Github Actions page for your repo and enable workflows.

### Running Developer Tools Locally

To manually run all these tools run the following script. You can view it's contents for individual commands.

```
# first time only: chmod +x ./checks.sh
./checks.sh
```

### Running Developer Tools in your IDE

Installing extensions in your editor can automatically format-on-save, show linting/type issues inline, and run your test cases:

- Svelte for Svelte and accessibility issues: [VSCode](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) or [other editors](https://sveltesociety.dev/tools#editor-support)
- ESLint for type checking and linting: [VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [other editors](https://eslint.org/docs/latest/use/integrations)
- Vitest for testing if you add tests: [VSCode](https://marketplace.visualstudio.com/items?itemName=vitest.explorer) or [other editors](https://vitest.dev/guide/ide)

### Running Developer Tools from Git Hooks

To catch build, formatting, linting and test issues before you commit changes, we suggest the following local git hook. It will run before you commit, stop you from breaking the build, and show any issues that are found. Add the lines below to an executable git hook script at the location `.git/hooks/pre-commit`.

```
#!/bin/sh
# Run standard checks before committing
cd "$(dirname "$0")"
sh ../../checks.sh
```

### Disabling Developer Tools

If you find build, formatting or linting rules too tedious, you can disable enforcement by deleting the CI files (`.github/workflows/*`) and removing the git hook (`.git/hooks/pre-commit`).

## Setup Supabase Project

- Create a Supabase account
- Create a new Supabase project in the console
- Wait for the database to launch
- Set up your database schema:
  - For new Supabase projects:
    - Go to the [SQL Editor](https://supabase.com/dashboard/project/_/sql) page in the Dashboard.
    - Run the SQL from `database_migration.sql` to create the initial schema.
  - For existing projects:
    - Apply migrations from the `supabase/migrations` directory:
      1. Go to the Supabase dashboard's SQL Editor.
      2. Identify the last migration you applied, then run the SQL content of each subsequent file in chronological order.
- Enable user signups in the [Supabase console](https://app.supabase.com/project/_/settings/auth): sometimes new signups are disabled by default in Supabase projects
- Go to the [API Settings](https://supabase.com/dashboard/project/_/settings/api) page in the Dashboard. Find your Project-URL (PUBLIC_SUPABASE_URL), anon (PUBLIC_SUPABASE_ANON_KEY) and service_role (PRIVATE_SUPABASE_SERVICE_ROLE).
  - For local development: create a `.env.local` file:
    ```
    PUBLIC_SUPABASE_URL=https://your-project.supabase.co
    PUBLIC_SUPABASE_ANON_KEY=your-anon-key
    PRIVATE_SUPABASE_SERVICE_ROLE=your service_role secret
    ```
  - For production, add these two keys to your deployment environment (see below). We suggest you encrypt your service role.
- Auth Callback
  - Set your default callback URL for auth in the Supabase Auth console. For example, for the demo page we added: `https://saasstarter.work/auth/callback` . Also add that same URL to the the “allowed redirect URL” list in the Supabase auth console further down the page.
  - Add a link to the redirect URL allow list which allows parameters to your auth callback. For example we added the following for the demo page: `https://saasstarter.work/auth/callback?*`
  - Also add any local development URLs you want to use in testing to the list for your dev environment. For example, we added the following for local development: `http://localhost:5173/auth/callback` and `http://localhost:5173/auth/callback?*`.
  - Test that the "sign up" and "forgot password" emails link back to your domain correctly by checking the have a redirect_to parameter to your `yourdomain.com/auth/callback`. If they link to the base URL or another page, double check you have the config above set correctly.
- OAuth Logins
  - Decide which oauth logins you want to support, and set them up in the Supabase Auth console under “Auth Providers”. Be sure to provide them the Supabase callback URL. Also be sure to set any platform specific permissions/settings to retrieve their email as part of the login (for example, for Github it's under `Account Permissions > Email Address > Read Only Access`
  - Edit `oauthProviders` list in `/src/routes/(marketing)/login/login_config.ts` with the list of providers you chose. If you don’t want any OAuth options, make this an empty array.
  - Test each provider to ensure you setup the client ID, client secret and callback correctly for each
- Auth Email SMTP
  - Supabase has a limit of 4 emails per hour on their development server. You should [Configure a Custom SMTP](https://supabase.com/docs/guides/auth/auth-smtp) sending emails from your own domain.
  - Customize the email templates in the Supabase Auth console to include your product name and branding
- Test authentication
  - Open the `/login` page in your browser, and ensure you can sign up, confirm email, log in, and edit your account.

## Setup Stripe

- Create a Stripe account
- Create a product and price Tiers
  - Create your [products](https://stripe.com/docs/api/products) and their [prices](https://stripe.com/docs/api/prices) in the Dashboard or with the Stripe CLI.
  - SaaS Starter works best if you define each tier as a separate product (eg, `SaaS Starter Free`, `Saas Starter Pro`, `Saas Starter Enterprise`). Include a monthly and annual price for each product if you want to support multiple billing periods.
  - You do not need to create a free plan in Stripe. The free plan is managed within the app.
- Setup your environment
  - Get your [Secret API](https://dashboard.stripe.com/test/apikeys) key, and add it as an environment variable PRIVATE_STRIPE_API_KEY (`.env.local` locally, and Cloudflare environment for prod). Be sure to use test keys for development, and keep your production/live keys secret and secure.
- Optional: theme your Stripe integration
  - Change the colors and fonts to match your brand [here](https://dashboard.stripe.com/settings/branding)
- Update your pricing plan data to align to your stripe data
  - See `/src/routes/(marketing)/pricing/pricing_plans.ts` and Fill in all fields for each plan. stripe_price_id and stripe_product_id should only be omitted on a single “free” plan. Multiple free plans are not supported.
    - The product in Stripe can contain several prices for the same product (annual, monthly, etc). The stripe_price_id you choose to put in this json will be the default we use for the checkout experience. However, if you have more prices configured for a product configured, the user can switch between them in the management portal.
  - Set the `defaultPlanId` to the plan the user will see as their “current plan” after signup, but before subscribing to a paid plan (typically “free”). It should align to the plan with no stripe_price_id.
  - if you want an item highlighted on `/pricing`, specify that plan ID in `/src/routes/(marketing)/pricing/+page.svelte`
- Update your portal configuration
  - Open [stripe portal config](https://dashboard.stripe.com/test/settings/billing/portal) and make the following changes
    - Disallow editing email under customer information (since we allow editing in primary portal)
    - Optional: setup a custom domain so Stripe pages use your own domain
- Repeat steps in production environment

## Deploy

We have two documented options for deploying SaaS Starter: Cloudflare Pages and Vercel. However, it can be hosted anywhere you can host a SvelteKit app.

Our [official demo](https://saasstarter.work) is hosted on Cloudflare Pages, and deployed each time the main branch is updated.

### Deploy To Cloudflare

Cloudflare Pages and Workers is one of the most popular options for deploying SvelteKit and we recommend it. [Follow Cloudflare’s instructions](https://developers.cloudflare.com/pages/get-started/git-integration/) to deploy in a few clicks. Be sure to select “SvelteKit” as framework, and the rest of the defaults will work.

When prompted: add environment variables for your production environment (PUBLIC_SUPABASE_URL,
PUBLIC_SUPABASE_ANON_KEY, PRIVATE_SUPABASE_SERVICE_ROLE, and PRIVATE_STRIPE_API_KEY).

Optional: enable [Cloudflare Analytics](https://www.cloudflare.com/en-ca/application-services/products/analytics/) for usage metrics.

### Deploy to Vercel

Deploy using Vercel's deploy button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FCriticalMoments%2FCMSaasStarter&env=PUBLIC_SUPABASE_URL,PUBLIC_SUPABASE_ANON_KEY,PRIVATE_SUPABASE_SERVICE_ROLE,PRIVATE_STRIPE_API_KEY&envDescription=Each%20environment%20variable%20is%20documented%20in%20our%20quick%20start%20guide%3A%20https%3A%2F%2Fgithub.com%2FCriticalMoments%2FCMSaasStarter%3Ftab%3Dreadme-ov-file%23quick-start&envLink=https%3A%2F%2Fgithub.com%2FCriticalMoments%2FCMSaasStarter%3Ftab%3Dreadme-ov-file%23quick-start&demo-title=SaasStarter%20Demo&demo-description=A%20live%20demo%20of%20this%20template%2C%20deployed%20from%20the%20main%20branch.&demo-url=https%3A%2F%2Fsaasstarter.work&demo-image=https%3A%2F%2Fprivate-user-images.githubusercontent.com%2F848343%2F297197975-34944c09-df72-4ac2-9099-01d25d99911b.png%3Fjwt%3DeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjE0NTAwMzMsIm5iZiI6MTcyMTQ0OTczMywicGF0aCI6Ii84NDgzNDMvMjk3MTk3OTc1LTM0OTQ0YzA5LWRmNzItNGFjMi05MDk5LTAxZDI1ZDk5OTExYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcyMFQwNDI4NTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zY2E4ZmY3YjVhMTc3YWE5YmI2MzI3YWE3MWQ2OWIzMjI3MGU2YzhmZDJjNjhlNDJhY2VjMDExMDk5ZjMyM2M4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.O8e9x5qFiij0TILjUncTOXjAs5Di2-8221K-N0YttbE)

Here is a demo of of Saas Starter hosted on Vercel: [vercel.saasstarter.work](https://vercel.saasstarter.work)

### Deploy Alternatives

If you prefer another host you can explore alternatives:

- [SvelteKit official adapters](https://kit.svelte.dev/docs/adapters) including Netlify, Vercel, and Node
- [Community adapters](https://sveltesociety.dev/components#adapters) including Github pages, AppEngine, Azure, and more
- [Supabase](https://supabase.com/docs/guides/getting-started/quickstarts/sveltekit) if you want one host for everything. Note: they do charge $10 a month for custom domains, unlike Cloudflare.

## Setup Emailer -- Optional

SaaS Starter includes email capabilities for sending emails to users and admins.

These are optional and disabled by default. See [email docs](email_docs.md) for details on how to enable and customize them.

## Add Your Content

After the steps above, you’ll have a working version like the demo page. However, it’s not branded, and doesn’t have your content. The following checklist helps you customize the template to make a SaaS homepage for your company.

- Describe your site with a name, description and base URL in in `src/config.ts:`. These values are used for SEO.
- Content
  - Add actual content for marketing homepage
  - Add actual content for your blog (or delete the blog)
    - Update all fields in `src/routes/(marketing)/blog/posts.ts`, and replace the post pages under `src/routes/(marketing)/blog/posts` to align to the urls from `posts.ts`.
    - Alternatively remove the blog by removing the src/routes/(marketing)/blog directory, and remove any links to the blog in the header and footer. You can always bring it back later.
  - Add any pages you want on top of our boiler plate (about, terms of service, etc). Be sure to add links to them in the header, mobile menu header, and footer as appropriate (`src/routes/(marketing)/+layout.svelte`).
  - Note: if you add any dynamic content to the main marketing page, pricing page or blog, be sure to set `prerender = false` in the appropriate `+page.ts` file. These are currently pre-rendered and served as static assets for performance reasons, but that will break if you add server side rendering requirements.
- Update SEO content
  - Update title and meta description tags for every public page. We include generic ones using your site name (`src/config.ts`), but the more specific these are the better.
  - This done automatically for blog posts from `posts.ts` metadata
- Style
  - Theme: Update the theme to match your brand, or use one of the built in themes from DaisyUI (see `app.css`). DaisyUI can automatically use a dark mode theme on systems with dark mode enabled (disabled by default) -- to enable if remove `themes: false;` and specify a dark mode theme. Docs: https://daisyui.com/docs/themes/
  - Update the marketing page layout `src/routes/(marketing)/+layout.svelte`: customize design, delete unwanted pages from header and footer
  - Style: make it your own look and feel.
  - Update the favicon in the `/static/` directory
  - The Authentication UI should automatically update based on your DaisyUI style, but check out the login in pages, and further design tweaks can be made in `src/routes/(marketing)/login/login_config.ts` (see [Auth UI](https://supabase.com/docs/guides/auth/auth-helpers/auth-ui#customization) for options).
- Site Search: any [prerendered](https://kit.svelte.dev/docs/page-options#prerender) content will automatically be indexed by the site search. To exclude a page, add it to `excludePaths` in `src/lib/build_index.ts`.
- Functionality
  - Add actual SaaS functionality!
  - Replace the admin dashboard with real content (`/src/routes/(admin)/account/+page.svelte`).
  - Add API endpoints and database tables as needed to deliver your SaaS product.
- Analytics: optionally add analytics to your project. [guide](/analytics_docs.md)

## Community Extensions

The open source community is extending and improving SaasStarter!

These extensions are reference implementations of commonly needed features. We don't integrate them into the main branch to keep our dependencies minimal and simplify maintenance. However, if you need them you can cherry pick into your fork/repo:

- Internationalization: [branch](https://github.com/CriticalMoments/CMSaasStarter/tree/extension/internationalization), and [instructions](https://github.com/CriticalMoments/CMSaasStarter/pull/49)
- Fork using Shadcn/ui instead of DaisyUI: [kizivat/saas-kit](https://github.com/kizivat/saas-kit)

### Icons Credits

Homescreen Icons are from [Solar Broken Line Icons](https://www.svgrepo.com/collection/solar-broken-line-icons/) and [Solar Linear Icons](https://www.svgrepo.com/collection/solar-linear-icons) via CC Attribution License.

# Sponsor: Kiln AI

CMSaasStarter is sponsored by [Kiln AI](https://getkiln.ai): the easiest way to build AI products.

- 🚀 Intuitive Desktop Apps: One-click apps for Windows, MacOS, and Linux. Truly intuitive design.
- 🎛️ Fine Tuning: Zero-code fine-tuning for Llama, GPT-4o, and more. Automatic serverless deployment of models.
- 📊 Evals: Evaluate the quality of your models/tasks using state of the art evaluators.
- 🤖 Synthetic Data Generation: Generate training data with our interactive visual tooling.
- 🧠 Reasoning Models: Train or distill your own custom reasoning models.
- 🤝 Team Collaboration: Git-based version control for your AI datasets. Intuitive UI makes it easy to collaborate with QA, PM, and subject matter experts on structured data (examples, prompts, ratings, feedback, issues, etc.).

**Demo of Kiln AI:**

https://github.com/user-attachments/assets/0fb3cd48-0f2c-40f5-baf2-b38f11ed85ea
# Force Vercel rebuild
