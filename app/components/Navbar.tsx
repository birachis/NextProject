
export default function Navbar() {
    return(
        <nav className="bg-gray-300 items-center justify-between flex p-4">
            <h1 className="text-blue-700 text-xl font-bold">FreelanceHub</h1>
            <div className="space-x-4">
                <a href="/skills" className="text-blue-500 hover:underline">Skills</a>
                <a href="/jobs" className="text-blue-500 hover:underline">Jobs</a>
                <a href="/login" className="text-blue-500 hover:underline">Login</a>
                <a href="/register" className="text-blue-500 hover:underline">Register</a>
                
            </div>
        </nav>
    )
}