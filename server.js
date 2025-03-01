import { createRequestHandler } from "@remix-run/netlify";

export default createRequestHandler({
	build: import("./build/server.js"),
});
