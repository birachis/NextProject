import RootLayout from "../../components/layout";
interface props {
    params: Promise <{
        jobId: string;
    }>;
}

export default async function JobDetailsPage({ params }: props) {
    const { jobId } = await params;
    return (
        <RootLayout>
            <main className="min-h-screen bg-gray-100 flex items-center justify-center">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Job Detail page </h1>
                <p className="text-center text-gray-600">Job ID: {jobId}</p>
            </main>
        </RootLayout>
    )
}