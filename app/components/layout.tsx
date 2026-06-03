
import Navbar from "./Navbar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <footer className="bg-gray-300 p-4 text-center text-gray-600">
                &copy; 2026 FreelanceHub
            </footer>
        </>
    )
}