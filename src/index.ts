import { Elysia } from "elysia";
import { $ } from "bun";

const app = new Elysia()
  .get("/metrics", async () => {
    const json =
      await $`rtpengine-ctl -ip 0.0.0.0 -p 2224 list jsonstats`.json();
    delete json.controlstatistics;
    return json;
  })
  .listen(3000);

console.log(
  `🦊 rtpengine stats exporter is running at ${app.server?.hostname}:${app.server?.port}`
);
