export async function getJobs() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      cache: "no-store",
    }
  );

  return response.json();
}
export async function getJobsById(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      cache: "no-store",
    }
  );

  return response.json();
}