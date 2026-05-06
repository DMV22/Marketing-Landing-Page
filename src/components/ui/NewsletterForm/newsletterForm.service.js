export async function subscribeToNewsletter(email) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error(
      'Failed to subscribe. Please ensure your email is correct or try again later.'
    );
  }
}