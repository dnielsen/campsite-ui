import { Tracer, BatchRecorder, jsonEncoder, ExplicitContext } from "zipkin";
import { HttpLogger } from "zipkin-transport-http";
import wrapFetch from "zipkin-instrumentation-fetch";
import CLSContext from "zipkin-context-cls";

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

//@ts-ignore
const zipkinFetch = wrapFetch(fetch, { tracer, remoteServiceName: "server" });

export default zipkinFetch;
