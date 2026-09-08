export default async (request, context) => {
  const response = await context.next();
  const hostname = new URL(request.url).hostname.toLowerCase();

  if (!hostname.endsWith('.netlify.app')) {
    return response;
  }

  const headers = new Headers(response.headers);
  headers.set('X-Robots-Tag', 'noindex, nofollow');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
};

export const config = {
  path: '/*',
  onError: 'bypass'
};
