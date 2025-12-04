export default async (request, context) => {
  const ip = request.headers.get("x-nf-client-connection-ip");
  const ua = request.headers.get("user-agent") || "";


  // List of headless browser patterns
  const headlessPatterns = [
    /HeadlessChrome/i,
    /ChromeHeadless/i,
    /PhantomJS/i,
    /node-fetch/i,
    /axios/i,
    /Go-http-client/i,
    /Python-urllib/i
  ];
  // console.log(`URL: ${request.url}, IP: ${ip}, UA: ${ua}`);

  // If any pattern matches, block the request
  if (headlessPatterns.some(p => p.test(ua))) {
    console.log(`Blocked bot - IP: ${ip}, UA: ${ua}`);
    return new Response("You appear non human, so I've blocked you. If that's wrong or you're a sentient AI, email me.", { status: 403 });
  }

  // Otherwise, allow the visitor
  console.log(`Allowed visitor - IP: ${ip}, UA: ${ua}`);
  return await context.next();
};


export const config = { path: "/*" };
