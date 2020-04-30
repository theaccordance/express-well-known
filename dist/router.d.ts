interface URIManifest {
  [key: string]: object;
}
export declare function registerURIs(
  manifest: URIManifest
): import("express-serve-static-core").Router;
export {};
