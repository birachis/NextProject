"use client";
import RootLayout from "../../components/layout";

export default function ErrorPage() {
  return (
    <RootLayout>
      <div className="min-h-screen py-20 text-center">
        <h1 className="text-4xl font-bold text-red-500">
          Failed to load freelancers.
        </h1>
      </div>
    </RootLayout>
  );
}