import JobCard from "../../components/JobCard";
import RootLayout from "../../components/layout";
import { getJobs } from "../../lib/job";

export default async function JobsPage() {
  const Jobs = await getJobs();

  return (
    <RootLayout>
      <main className="min-h-screen bg-gray-100 items-center justify-center">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Jobs Page</h1>

        {
          Jobs.length === 0 ? (
            <div>
              <h2>
                No jobs available
              </h2>
            </div>
        ) : (
          <div className="flex flex-col gap-2 px-6">
            {Jobs.map((job) => (
                <div key={job.id}>
                  <JobCard
                    id={job.id}
                    title={job.title}
                    body={job.body}
                  />
                </div>
            ))}
          </div>
        )}
        </main>
        </RootLayout>
    )
}