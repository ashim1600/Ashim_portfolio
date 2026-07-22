/// <reference types="vite/client" />

declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];

    constructor(target: unknown, options?: Record<string, unknown>);
    revert(): void;
  }
}
