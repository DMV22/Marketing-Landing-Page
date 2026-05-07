export async function submitContactForm(data) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(
      'Failed to submit. Please ensure your details are correct or try again later.'
    );
  }

  return response.json();
}