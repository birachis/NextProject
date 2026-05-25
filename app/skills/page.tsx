import RootLayout from "../components/layout";
import ProfileCard from "../components/ProfileCard";
type User = {
    id: number
    name: string
    company: {
        name: string
    }
}

export default async function SkillsPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users: User[] = await res.json()

    return (
        <RootLayout>
        <main className="min-h-screen bg-gray-100 items-center justify-center">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Popular Skills</h1>
            <div className="flex flex-col gap-4 p-4">
                {users.map((user) => (
                    <ProfileCard key={user.id} name={user.name} company={user.company} id={user.id} />
                ))}
            </div>
        </main>
        </RootLayout>
    )
}