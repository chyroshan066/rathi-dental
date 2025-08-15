"use client";

import { useEffect } from 'react';

export default function IonicScripts() {
    useEffect(() => {
        // Load Ionic icons only on client side
        const script1 = document.createElement('script');
        script1.type = 'module';
        script1.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.setAttribute('noModule', '');
        script2.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
        document.head.appendChild(script2);

        return () => {
            // Cleanup on unmount
            document.head.removeChild(script1);
            document.head.removeChild(script2);
        };
    }, []);

    return null;
}