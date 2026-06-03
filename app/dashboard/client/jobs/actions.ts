"use server";

export async function createJob(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const budget = formData.get("budget") as string;

  console.log("Creating job with data:", { title, description, budget });
}
