import React from 'react';

export default function DashboardSkeleton() {
    return (
        <div className="min-h-screen space-y-6 p-6">
            {/* Header Skeleton */}
            <div className="space-y-2">
                <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-96 bg-gray-200 rounded animate-pulse" />
            </div>

            {/* Cards Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-gray-100 rounded-lg p-4 space-y-3">
                        <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                        <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
                        <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
                    </div>
                ))}
            </div>

            {/* Chart Skeleton */}
            <div className="bg-gray-100 rounded-lg p-4 h-64">
                <div className="h-full w-full bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="bg-gray-100 rounded-lg p-4 h-64">
                <div className="h-full w-full bg-gray-200 rounded animate-pulse" />
            </div>
        </div>
    );
}