// Runs on every push — generates a status JSON with build metadata
export default async function (ctx) {
  return {
    buildTime: new Date().toISOString(),
    env: ctx.env.CI ? "ci" : "local",
    node: process.version,
  };
}
