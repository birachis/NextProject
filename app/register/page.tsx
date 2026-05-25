
export default function RegisterPage() {
    return (
        <>
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Create Account</h1>
            <input type="text" placeholder="Full Name" className="border-gray-100 border rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"/>
            <input type="email" placeholder="Email" className="border-gray-100 border rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"/>
            <input type="password" placeholder="Password" className="border-gray-100 border rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" >
                Register
            </button>
        </>
    )
}