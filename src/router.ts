import { Request, Response, Router } from "express";

interface URIManifest {
  [key: string]: object;
}

export function registerURIs(manifest: URIManifest) {
  const router = Router();
  const resources = Object.keys(manifest).map((resource) => {
    return {
      name: resource,
      path: `/.well-known/${resource}`,
      claims: manifest[resource],
    };
  });

  resources.forEach(({ name, path, claims }) => {
    router.get(path, (req: Request, res: Response) => {
      return res.status(200).json(claims);
    });
  });

  router.get("/.well-known", (req: Request, res: Response) => {
    const resourcePaths = resources.map(({ path }) => path);
    return res.status(200).json({ resources: resourcePaths });
  });

  return router;
}
