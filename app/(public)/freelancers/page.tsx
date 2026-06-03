import Link from "next/link";
import RootLayout from "../../components/layout";
interface Freelancer {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function getFreelancers(): Promise<Freelancer[]> {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            cache: "no-store",
        }
    );

    await new Promise(resolve => setTimeout(resolve, 2000));

    return response.json();
}

export default async function FreelancersPage() {
  const freelancers = await getFreelancers();

  return (

    <RootLayout>
      <div className="max-w-5xl mx-auto py-10 bg">
        <h1 className="text-4xl font-bold mb-8">
          Freelancers
        </h1>

        <div className="space-y-4">
            {freelancers.map((freelancer: Freelancer) => (
                <Link key={freelancer.id} href={`/freelancers/${freelancer.username}`}>
                <div
                    key={freelancer.id}
                    className="border rounded-lg p-5 m-2"
                >
                    <h2 className="text-2xl font-semibold">
                    {freelancer.name}
                    </h2>

                    <p className="text-gray-500 mt-2">
                    @{freelancer.username}
                    </p>

                    <p className="mt-2">
                    {freelancer.email}
                    </p>
                </div>
            </Link>
            ))}
        </div>
    </div>
    </RootLayout>
  );
}