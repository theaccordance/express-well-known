import { Request, Response, Router } from "express";

interface URIManifest {
  [key: string]: object;
}

export function registerURIs(manifest: URIManifest) {
  const router = Router();
  const resources = Object.keys(manifest);

  resources.forEach((resource) => {
    router.get(`/.well-known/${resource}`, (req: Request, res: Response) => {
      const body = manifest[resource];
      return res.status(200).json(body);
    });
  });

  return router;
}
