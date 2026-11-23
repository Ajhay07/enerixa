import type React from "react";

// The template uses the <iconify-icon> web component (loaded from the CDN).
// Declare it so JSX/TypeScript accept it as an intrinsic element.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          icon: string;
          width?: string | number;
          height?: string | number;
          class?: string;
          rotate?: string | number;
          flip?: string;
        },
        HTMLElement
      >;
    }
  }
}

export {};
