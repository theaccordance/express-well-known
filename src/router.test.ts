import express from "express";
import { registerURIs } from "./router";
import pkg from "../package.json";
import supertest from "supertest";

describe("registerURIs", () => {
  it("Export exists", () => expect(registerURIs).not.toBeUndefined());
  it("Returns claims for a given resource", (done) => {
    const app = express();
    const manifest = { pkg };

    const wellKnown = registerURIs(manifest);

    app.use(wellKnown);

    return supertest(app)
      .get("/.well-known/pkg")
      .expect(200)
      .end((err, res) => {
        if (err) {
          throw err;
        }
        expect(JSON.parse(res.text)).toEqual(pkg);
        done();
      });
  });
  it("Returns a list of resource paths", (done) => {
    const app = express();
    const manifest = { pkg };

    const wellKnown = registerURIs(manifest);

    app.use(wellKnown);

    return supertest(app)
      .get("/.well-known/")
      .expect(200)
      .end((err, { text }) => {
        if (err) {
          throw err;
        }
        expect(JSON.parse(text)).toEqual({ resources: ["/.well-known/pkg"] });
        done();
      });
  });
});
