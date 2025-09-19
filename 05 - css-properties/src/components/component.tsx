import React from "react";

const cn = (...classes: string[]) => classes.join(" ");

export const Component = () => {
  return (
    <div
      className={cn(
        "w-full rounded-2xl min-h-100 bg-neutral-100 dark:bg-neutral-800",
        "bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)]",
        "dark:bg-[radial-gradient(var(--color-neutral-700)_1px,transparent_1px)]",
        "[background-size:10px_10px]",
        "p-8 flex flex-col items-center justify-center group"
      )}
    >
      <h2
        className={cn(
          "text-2xl font-bold mt-8 mb-2 tracking-tight",
          "text-neutral-800 dark:text-neutral-100 dark:text-shadow-neutral-600 text-shadow-sm text-shadow-neutral-300"
        )}
      >
        Easily modify scale with Tailwind
      </h2>
      <p className="max-w-sm mx-auto text-sm text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-400 dark:from-neutral-100 dark:to-neutral-600">
        Hover over the image below to see a smooth 3D transformation effect. The
        card rotates and scales using CSS transforms and Tailwind's built-in
        classes.
      </p>
      <div
        className={cn(
          "size-60 rounded-2xl bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-600 border border-neutral-200  transition-all duration-200 group-hover:border-neutral-300",
          "bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_1px)]",
          "dark:bg-[radial-gradient(var(--color-neutral-600)_1px,transparent_1px)]",
          "[background-size:10px_10px]",
          "shadow-2xl relative perspective-distant",
          "group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 dark:group-hover:border-neutral-600"
        )}
      >
        <img
          src="https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className={cn(
            "transition-transform duration-300 [transition-timing-function:cubic-bezier(.4,0,.2,1)]",
            "h-full w-full object-cover object-top-left rounded-2xl",
            "transform rotate-x-30 rotate-z-30 -rotate-y-30 translate-z-20",
            "group-hover:rotate-x-0 group-hover:rotate-z-0 group-hover:rotate-y-0 group-hover:scale-85"
          )}
          alt="avatar"
        />
      </div>
    </div>
  );
};