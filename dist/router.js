"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
function registerURIs(manifest) {
  const router = express_1.Router();
  const resources = Object.keys(manifest).map((resource) => {
    return {
      name: resource,
      path: `/.well-known/${resource}`,
      claims: manifest[resource],
    };
  });
  resources.forEach(({ name, path, claims }) => {
    router.get(path, (req, res) => {
      return res.status(200).json(claims);
    });
  });
  router.get("/.well-known", (req, res) => {
    const resourcePaths = resources.map(({ path }) => path);
    return res.status(200).json({ resources: resourcePaths });
  });
  return router;
}
exports.registerURIs = registerURIs;
