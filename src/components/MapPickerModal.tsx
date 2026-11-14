'use client';

import React, { useEffect, useRef, useState } from 'react';
import { X, LocateFixed, MapPin, Check, Loader2 } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

export interface PinnedLocation {
  lat: number;
  lng: number;
  address: string;
}

interface MapPickerModalProps {
  isOpen: boolean;
  initialLocation: PinnedLocation | null;
  onClose: () => void;
  onConfirm: (location: PinnedLocation) => void;
}

// Default center: Srinagar, J&K
const DEFAULT_COORDS = { lat: 34.0837, lng: 74.7973 };

async function reverseGeocode(lat: number, lng: number): Promise<string> {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&accept-language=en`
    );
    if (!res.ok) throw new Error('Reverse geocode failed');
    const data = await res.json();
    if (data?.display_name) {
      return data.display_name as string;
    }
  } catch {
    // Fallback below if network or geocoder is unavailable
  }
  return `Pinned Location (${lat.toFixed(4)}, ${lng.toFixed(4)})`;
}

export default function MapPickerModal({
  isOpen,
  initialLocation,
  onClose,
  onConfirm,
}: MapPickerModalProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<import('leaflet').Map | null>(null);
  const markerRef = useRef<import('leaflet').Marker | null>(null);

  const [selectedCoords, setSelectedCoords] = useState(
    initialLocation
      ? { lat: initialLocation.lat, lng: initialLocation.lng }
      : DEFAULT_COORDS
  );
  const [resolvedAddress, setResolvedAddress] = useState(
    initialLocation?.address || 'Srinagar, Jammu and Kashmir'
  );
  const [resolvingAddress, setResolvingAddress] = useState(false);
  const [locating, setLocating] = useState(false);
  const [geoError, setGeoError] = useState<string | null>(null);

  const lookupAddress = async (lat: number, lng: number) => {
    setResolvingAddress(true);
    const addr = await reverseGeocode(lat, lng);
    setResolvedAddress(addr);
    setResolvingAddress(false);
  };

  useEffect(() => {
    if (initialLocation) {
      setSelectedCoords({ lat: initialLocation.lat, lng: initialLocation.lng });
      setResolvedAddress(initialLocation.address);
    }
  }, [initialLocation]);

  useEffect(() => {
    if (!isOpen || !mapContainerRef.current) return;

    let cancelled = false;

    const initMap = async () => {
      const L = (await import('leaflet')).default;
      if (cancelled || !mapContainerRef.current) return;

      const start = initialLocation
        ? { lat: initialLocation.lat, lng: initialLocation.lng }
        : DEFAULT_COORDS;

      const map = L.map(mapContainerRef.current, {
        center: [start.lat, start.lng],
        zoom: initialLocation ? 16 : 12,
        zoomControl: true,
      });

      L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        attribution: '&copy; Google Maps',
        maxZoom: 20,
      }).addTo(map);

      const pinIcon = L.divIcon({
        className: 'custom-map-pin',
        html: `<div style="width:32px;height:32px;border-radius:9999px 9999px 9999px 0;background:#047857;border:3px solid #ffffff;box-shadow:0 6px 16px rgba(6,44,33,0.45);transform:rotate(-45deg);display:flex;align-items:center;justify-content:center;"><div style="width:8px;height:8px;border-radius:9999px;background:#ffffff;transform:rotate(45deg);"></div></div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
      });

      const marker = L.marker([start.lat, start.lng], {
        icon: pinIcon,
        draggable: true,
      }).addTo(map);

      marker.on('dragend', () => {
        const pos = marker.getLatLng();
        const next = {
          lat: Number(pos.lat.toFixed(6)),
          lng: Number(pos.lng.toFixed(6)),
        };
        setSelectedCoords(next);
        lookupAddress(next.lat, next.lng);
      });

      map.on('click', (e: import('leaflet').LeafletMouseEvent) => {
        const next = {
          lat: Number(e.latlng.lat.toFixed(6)),
          lng: Number(e.latlng.lng.toFixed(6)),
        };
        marker.setLatLng([next.lat, next.lng]);
        setSelectedCoords(next);
        lookupAddress(next.lat, next.lng);
      });

      mapInstanceRef.current = map;
      markerRef.current = marker;

      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    };

    initMap();

    return () => {
      cancelled = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        markerRef.current = null;
      }
    };
  }, [isOpen, initialLocation]);

  if (!isOpen) return null;

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      setGeoError('Geolocation is not supported by your browser.');
      return;
    }

    setGeoError(null);
    setLocating(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const next = {
          lat: Number(position.coords.latitude.toFixed(6)),
          lng: Number(position.coords.longitude.toFixed(6)),
        };
        setSelectedCoords(next);

        if (mapInstanceRef.current && markerRef.current) {
          markerRef.current.setLatLng([next.lat, next.lng]);
          mapInstanceRef.current.setView([next.lat, next.lng], 16, { animate: true });
        }
        setLocating(false);
        lookupAddress(next.lat, next.lng);
      },
      () => {
        setGeoError('Could not access your location. Please tap on the map to drop a pin.');
        setLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  return (
    <div
      className="fixed inset-0 z-[60] bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#062c21] px-5 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <div>
              <h4 className="text-sm font-bold leading-tight">Pin Site Location</h4>
              <p className="text-[11px] text-emerald-200/80">
                Tap on the map or drag the pin to your exact site
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close map picker"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* GPS Button Bar */}
        <div className="px-4 py-3 bg-[#f8faf9] border-b border-slate-200/80 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={handleUseCurrentLocation}
            disabled={locating}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-700 hover:bg-emerald-800 disabled:opacity-60 text-white text-[11px] font-semibold transition-colors shrink-0"
          >
            {locating ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <LocateFixed className="w-3.5 h-3.5" />
            )}
            <span>{locating ? 'Locating...' : 'Use My Current Location'}</span>
          </button>

          <a
            href={`https://www.google.com/maps?q=${selectedCoords.lat},${selectedCoords.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold text-emerald-800 hover:underline truncate"
          >
            Open in Google Maps
          </a>
        </div>

        {geoError && (
          <div className="px-4 py-2 bg-amber-50 border-b border-amber-200 text-amber-800 text-[11px]">
            {geoError}
          </div>
        )}

        {/* Map Canvas */}
        <div ref={mapContainerRef} className="w-full h-64 sm:h-72 bg-slate-100 z-0" />

        {/* Resolved Location Preview + Confirm */}
        <div className="p-4 bg-white border-t border-slate-100 space-y-3">
          <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/70">
            <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div className="text-[11px] text-emerald-950 leading-snug min-w-0">
              {resolvingAddress ? (
                <span className="inline-flex items-center gap-1.5 text-emerald-700 font-medium">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  Fetching address...
                </span>
              ) : (
                <span className="line-clamp-2 font-medium">{resolvedAddress}</span>
              )}
            </div>
          </div>

          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              disabled={resolvingAddress}
              onClick={() =>
                onConfirm({
                  lat: selectedCoords.lat,
                  lng: selectedCoords.lng,
                  address: resolvedAddress,
                })
              }
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#062c21] hover:bg-[#0c4434] disabled:opacity-60 text-white text-xs font-bold transition-colors"
            >
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Confirm Location</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
