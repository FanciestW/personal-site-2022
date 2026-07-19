// moduleResolution "node" doesn't read package.json "exports", so the
// `lenis/snap` subpath (which the bundler resolves fine at runtime) needs a
// shim pointing at the physical type declarations shipped in dist/.
declare module "lenis/snap" {
  export { default } from "lenis/dist/lenis-snap";
  export * from "lenis/dist/lenis-snap";
}
