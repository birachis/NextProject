export default function LoginPage() {
    return (
        <main className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h1>
                <input type="email" placeholder="Email" className="border-gray-100 border rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"/>
                <input type="password" placeholder="Password" className="border-gray-100 border rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"/>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Login
                </button>
            </div>
        </main>
    )
}