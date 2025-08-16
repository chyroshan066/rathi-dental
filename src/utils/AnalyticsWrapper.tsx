"use client"

import { Analytics } from '@vercel/analytics/react';

export default function AnalyticsWrapper() {
    return (
        <Analytics
            beforeSend={e => {
                // if URL includes private then don't proceed with the analytics
                if (e.url.includes("private")) return null;
                return e;
            }}
        />
    );
}