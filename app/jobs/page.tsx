import JobCard from "../components/JobCard";
import RootLayout from "../components/layout";
import Link from "next/link";

export default function JobsPage() {
      const Jobs = [
    { id: 1, title: "Software Engineer", company: "Tech Corp", budget: "50/hr", featured: true, remote: true },
    { id: 2, title: "Designer", company: "Design Studio", budget: "40/hr", featured: true, remote: false },
    { id: 3, title: "Writer", company: "Content Creators", budget: "30/hr", featured: false, remote: true }
  ];
    return (
        <RootLayout>
        <main className="min-h-screen bg-gray-100 flex items-center justify-center">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Jobs Page</h1>

        {
          Jobs.length === 0 ? (
            <div>
              <h2>
                No jobs available
              </h2>
            </div>
        ) : (
          <div className="flex flex-col gap-4 p-4">
            {Jobs.map((job) => (
              <Link key={job.id} href={`/jobs/${job.id}`} className="block ">
                <div key={job.id}>
                  <JobCard
                    title={job.title}
                    company={job.company}
                    budget={job.budget}
                  />
                </div>
              </Link>
            ))}
          </div>
        )}
        </main>
        </RootLayout>
    )
}