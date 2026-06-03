import RootLayout from "../../../components/layout";
interface Props {
  params: {
    username: string;
  };
}

async function getFreelancer() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1",
    {
      cache: "no-store",
    }
  );

  return response.json();
}

export default async function FreelancerPage({
  params,
}: Props) {
  const freelancer = await getFreelancer();

  return (
    <RootLayout>
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-4xl font-bold">
          {freelancer.name}
        </h1>

        <p className="mt-4 text-xl">
            Username: {params.username}
        </p>

        <p className="mt-2">
            {freelancer.email}
        </p>

        <p className="mt-2">
            {freelancer.phone}
        </p>
    </div>
    </RootLayout>
  );
}