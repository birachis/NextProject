"use client"

import { useState } from "react";
import RootLayout from "./components/layout";
import DashboardSkeleton from "./components/dashboard";

export default function Home() {

  const [Loading, setLoading] = useState(false);
  const [LoggedIn, setLoggedIn] = useState(true);

  if (Loading) {
    return (
      <main className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Loading Jobs...</h1>
      </main>
    )
  }

  return (
      <main className="justify-between flex-col min-h-screen bg-gray-100">
        <RootLayout>
          <DashboardSkeleton/>
        </RootLayout>
      </main>
  );
}
