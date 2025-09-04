"use client";

import React, { useEffect, useRef, useState } from 'react';

interface ClinicLocation {
    lat: number;
    lng: number;
    name: string;
    address: string;
}

interface LeafletMapOptions {
    center: [number, number];
    zoom: number;
    zoomControl: boolean;
    scrollWheelZoom: boolean;
    touchZoom: boolean;
    doubleClickZoom: boolean;
    boxZoom: boolean;
    keyboard: boolean;
    dragging: boolean;
}

interface LeafletTileLayerOptions {
    attribution: string;
    maxZoom: number;
}

interface LeafletMap {
    remove: () => void;
    invalidateSize: () => void;
    setView: (coords: [number, number], zoom: number) => void;
}

interface LeafletTileLayer {
    addTo: (map: LeafletMap) => void;
}

interface LeafletIcon {
    className: string;
    html: string;
    iconSize: [number, number];
    iconAnchor: [number, number];
    popupAnchor: [number, number];
}

interface LeafletMarkerOptions {
    icon: LeafletIcon;
}

interface LeafletMarker {
    bindPopup: (content: string) => LeafletMarker;
    addTo: (map: LeafletMap) => LeafletMarker;
}

// Extend Window interface for Leaflet
declare global {
    interface Window {
        L: {
            map: (element: HTMLElement, options: LeafletMapOptions) => LeafletMap;
            tileLayer: (url: string, options: LeafletTileLayerOptions) => LeafletTileLayer;
            divIcon: (options: Partial<LeafletIcon>) => LeafletIcon;
            marker: (coords: [number, number], options: LeafletMarkerOptions) => LeafletMarker;
        };
    }
}

export const Maps: React.FC = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<LeafletMap | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    // Dental clinic location (you can change these coordinates)
    const clinicLocation: ClinicLocation = {
        lat: 26.66187,
        lng: 87.27682,
        name: "Basuki Dental Clinic",
        address: "Biratnagar, Morang, Nepal"
    };

    useEffect(() => {
        // Load Leaflet CSS and JS
        const loadLeaflet = async (): Promise<void> => {
            // Load CSS
            if (!document.querySelector('link[href*="leaflet"]')) {
                const cssLink: HTMLLinkElement = document.createElement('link');
                cssLink.rel = 'stylesheet';
                cssLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
                document.head.appendChild(cssLink);
            }

            // Load JS
            if (!window.L) {
                const script: HTMLScriptElement = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
                script.onload = (): void => {
                    setIsLoaded(true);
                };
                document.head.appendChild(script);
            } else {
                setIsLoaded(true);
            }
        };

        loadLeaflet();
    }, []);

    useEffect(() => {
        if (isLoaded && mapRef.current && !mapInstanceRef.current) {
            // Initialize map
            const map = window.L.map(mapRef.current, {
                center: [clinicLocation.lat, clinicLocation.lng],
                zoom: 15,
                zoomControl: true,
                scrollWheelZoom: true,
                touchZoom: true,
                doubleClickZoom: true,
                boxZoom: true,
                keyboard: true,
                dragging: true,
            });

            // Add OpenStreetMap tile layer
            window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
                maxZoom: 19,
            }).addTo(map);

            // Create custom marker icon
            const customIcon = window.L.divIcon({
                className: 'custom-marker',
                html: `
          <div style="
            background: linear-gradient(90deg, hsl(201, 92%, 47%) 0%, hsl(225, 68%, 53%) 100%);
            width: 30px;
            height: 30px;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            border: 3px solid white;
            box-shadow: 0px 10px 30px hsla(225, 68%, 53%, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <div style="
              transform: rotate(45deg);
              color: white;
              font-size: 18px;
              font-weight: bold;
            ">📍</div>
          </div>
        `,
                iconSize: [40, 40],
                iconAnchor: [20, 35],
                popupAnchor: [0, -35],
            });

            // Add marker with popup
            const marker: LeafletMarker = window.L.marker([clinicLocation.lat, clinicLocation.lng], {
                icon: customIcon
            }).addTo(map);

            // Create popup content
            const popupContent: string = `
        <div style="
          font-family: 'Poppins', sans-serif;
          text-align: center;
          padding: 10px;
          min-width: 200px;
        ">
          <h3 style="
            color: hsl(218, 70%, 18%);
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 8px;
          ">${clinicLocation.name}</h3>
          <p style="
            color: hsl(0, 0%, 47%);
            font-size: 1.4rem;
            line-height: 1.4;
            margin-bottom: 12px;
          ">${clinicLocation.address}</p>
          <button onclick="window.open('https://www.google.com/maps/dir//${clinicLocation.lat},${clinicLocation.lng}', '_blank')" style="
            background: linear-gradient(90deg, hsl(201, 92%, 47%) 0%, hsl(225, 68%, 53%) 100%);
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            font-size: 1.2rem;
            font-weight: 600;
            cursor: pointer;
            text-transform: uppercase;
            transition: transform 0.25s ease;
          " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            Get Directions
          </button>
        </div>
      `;

            marker.bindPopup(popupContent);

            // Store map instance
            mapInstanceRef.current = map;

            // Handle resize
            const handleResize = (): void => {
                if (mapInstanceRef.current) {
                    mapInstanceRef.current.invalidateSize();
                }
            };

            window.addEventListener('resize', handleResize);

            return (): void => {
                window.removeEventListener('resize', handleResize);
                if (mapInstanceRef.current) {
                    mapInstanceRef.current.remove();
                    mapInstanceRef.current = null;
                }
            };
        }
    }, [isLoaded, clinicLocation.lat, clinicLocation.lng, clinicLocation.name, clinicLocation.address]);

    return (
        <section className="section">
            <div className="custom-container">
                {/* Map Container */}
                <div style={{
                    position: 'relative',
                    borderRadius: 'var(--radius-6)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-3)',
                    backgroundColor: 'var(--white)',
                    border: '2px solid var(--light-gray)'
                }}>
                    {/* Loading State */}
                    {!isLoaded && (
                        <div style={{
                            height: '400px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'var(--cultured)',
                            color: 'var(--sonic-silver)'
                        }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    border: '4px solid var(--light-gray)',
                                    borderTop: '4px solid var(--royal-purple)',
                                    borderRadius: '50%',
                                    animation: 'spin 1s linear infinite',
                                    marginInline: 'auto',
                                    marginBlockEnd: '15px'
                                }}></div>
                                <p>Loading Map...</p>
                            </div>
                        </div>
                    )}

                    {/* Map */}
                    <div
                        ref={mapRef}
                        style={{
                            height: '450px',
                            width: '100%',
                            zIndex: 1,
                            display: isLoaded ? 'block' : 'none'
                        }}
                    />
                </div>
            </div>

            {/* CSS for loading animation */}
            <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        /* Custom map controls styling */
        .leaflet-control-zoom {
          border: none !important;
          border-radius: var(--radius-4) !important;
          box-shadow: var(--shadow-2) !important;
        }
        
        .leaflet-control-zoom a {
          background-color: var(--white) !important;
          color: var(--deep-purple-1) !important;
          border: none !important;
          border-radius: var(--radius-4) !important;
          font-weight: var(--weight-700) !important;
          transition: var(--transition) !important;
        }
        
        .leaflet-control-zoom a:hover {
          background-color: var(--royal-purple) !important;
          color: var(--white) !important;
        }
        
        .leaflet-popup-content-wrapper {
          border-radius: var(--radius-6) !important;
          box-shadow: var(--shadow-3) !important;
          border: none !important;
        }
        
        .leaflet-popup-tip {
          background-color: white !important;
          box-shadow: var(--shadow-2) !important;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .leaflet-control-zoom {
            transform: scale(0.9);
          }
        }
      `}</style>
        </section>
    );
};