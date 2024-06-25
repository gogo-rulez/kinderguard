import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = string
declare module "../../node_modules/.pnpm/nuxt@3.12.2_@opentelemetry+api@1.9.0_@unocss+reset@0.61.0_floating-vue@5.2.2_sass@1.77.6_type_p6uh3yicqycgyphk6sa5akpq64/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}