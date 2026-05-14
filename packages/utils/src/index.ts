/**
 * Joins truthy class name fragments into a single space-separated string.
 *
 * NOTE: this is a plain concatenation helper (clsx-style) — it does NOT
 * de-duplicate or merge conflicting classes the way `tailwind-merge` does.
 * If a consumer passes a `className` that conflicts with a class emitted by a
 * skin/component, the winner is decided by CSS specificity and stylesheet
 * order, not by the order of names in the resulting string. Keep skin styles
 * at low specificity so consumer overrides remain predictable.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
