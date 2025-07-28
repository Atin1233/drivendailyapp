import { ThemeSupa } from "@supabase/auth-ui-shared"
import type { Provider } from "@supabase/supabase-js"

// Add more OAuth providers for better user experience
export const oauthProviders = ["github", "google"] as Provider[]

// Enhanced appearance configuration for better styling
export const sharedAppearance = {
  theme: ThemeSupa,
  variables: {
    default: {
      colors: {
        brand: "oklch(var(--p))",
        brandAccent: "oklch(var(--ac))",
        inputText: "oklch(var(--n))",
        brandButtonText: "oklch(var(--pc))",
        messageText: "oklch(var(--b))",
        dividerBackground: "oklch(var(--n))",
        inputLabelText: "oklch(var(--n))",
        defaultButtonText: "oklch(var(--n))",
        anchorTextColor: "oklch(var(--p))",
        inputBackground: "oklch(var(--b1))",
        inputBorder: "oklch(var(--n))",
        inputPlaceholder: "oklch(var(--n) / 0.6)",
      },
      fontSizes: {
        baseInputSize: "16px",
        baseLabelSize: "14px",
        baseButtonSize: "16px",
      },
      borderRadius: {
        inputBorderRadius: "0.5rem",
        buttonBorderRadius: "0.5rem",
      },
      spacing: {
        inputPadding: "12px 16px",
        buttonPadding: "12px 24px",
      },
    },
  },
  className: {
    button: "authBtn",
    input: "input input-bordered",
    label: "label-text",
    anchor: "link link-hover",
    message: "text-sm",
  },
}
