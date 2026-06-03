import RootLayout from "../../../components/layout";
import { getJobsById } from "../../../lib/job";
interface props {
    params: Promise <{
        jobId: string;
    }>;
}

export default async function JobDetailsPage({ params }: props) {
    const { jobId } = await params;
    const job = await getJobsById(jobId);
    return (
        <RootLayout>
            <main className="min-h-screen bg-gray-100 items-center justify-center">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Job Detail page </h1>
                <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
                    <h1 className="text-center text-lg text-gray-600 font-bold">Job Title: {job.title}</h1>
                    <p className="text-center text-gray-600">{job.body}</p>
                </div>
            </main>
        </RootLayout>
    )
}