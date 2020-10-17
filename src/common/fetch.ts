import { Tracer, BatchRecorder, jsonEncoder, ExplicitContext } from "zipkin";
import { HttpLogger } from "zipkin-transport-http";
import wrapFetch from "zipkin-instrumentation-fetch";

// Setup the tracer
const tracer = new Tracer({
  ctxImpl: new ExplicitContext(), // implicit in-process context
  recorder: new BatchRecorder({
    logger: new HttpLogger({
      endpoint: "http://localhost:9411/api/v2/spans",
      jsonEncoder: jsonEncoder.JSON_V2,
    }),
  }), // batched http recorder
  localServiceName: "ui", // name of this application
});

export function zipkinFetch() {
  //@ts-ignore
  return wrapFetch(fetch, { tracer, remoteServiceName: "server" });
}

export function authFetch(input: Request | string, init?: RequestInit) {
  const token = localStorage.getItem("token") ?? "";
  // @ts-ignore
  return fetch(input, {
    ...init,
    headers: { ...init?.headers, Authorization: token },
  });
}

export default zipkinFetch;
