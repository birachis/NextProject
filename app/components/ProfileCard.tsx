type ProfileCardProps = {
    id: number
    name: string
    company: {
        name: string
    }
}

export default function ProfileCard({ id, name, company }: ProfileCardProps) {
    return (
        <div className="rounded-lg p-4 text-left">
            <h2 className="text-blue-700 text-lg">Instructor: {name}</h2>
            <p className="text-gray-700">{company.name}</p>
        </div>
    )
}