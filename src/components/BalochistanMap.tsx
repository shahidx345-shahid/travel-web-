import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Mountain } from 'lucide-react';

const BalochistanMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isTokenSet, setIsTokenSet] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !isTokenSet || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;

    // Initialize map centered on Balochistan
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [66.9758, 29.0361], // Balochistan center coordinates
      zoom: 6,
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add fullscreen control
    map.current.addControl(new mapboxgl.FullscreenControl(), 'top-right');

    // Important locations in Balochistan
    const locations: Array<{
      name: string;
      coordinates: [number, number];
      description: string;
      icon: string;
    }> = [
      {
        name: 'Koh-e-Sulaiman Mountain Range',
        coordinates: [69.4500, 30.5167],
        description: 'Legendary mountain range with rich history and mythology',
        icon: '⛰️',
      },
      {
        name: 'Quetta',
        coordinates: [67.0011, 30.1798],
        description: 'Capital city of Balochistan province',
        icon: '🏛️',
      },
      {
        name: 'Ziarat',
        coordinates: [67.7261, 30.3822],
        description: 'Beautiful valley known for juniper forests',
        icon: '🌲',
      },
      {
        name: 'Gwadar',
        coordinates: [62.3225, 25.1264],
        description: 'Port city on the Arabian Sea coast',
        icon: '⚓',
      },
      {
        name: 'Hingol National Park',
        coordinates: [65.5000, 25.5000],
        description: 'Largest national park in Pakistan',
        icon: '🦅',
      },
      {
        name: 'Turbat',
        coordinates: [63.0448, 26.0021],
        description: 'Historic city in Makran region',
        icon: '🏜️',
      },
    ];

    // Add markers for each location
    locations.forEach((location) => {
      // Create custom marker element
      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.innerHTML = `
        <div style="
          background: linear-gradient(135deg, hsl(15, 75%, 48%), hsl(230, 55%, 42%));
          color: white;
          padding: 8px 12px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: bold;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        ">
          ${location.icon} ${location.name}
        </div>
      `;

      // Hover effect
      el.addEventListener('mouseenter', () => {
        el.style.transform = 'scale(1.1) translateY(-5px)';
        el.style.zIndex = '1000';
      });
      
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'scale(1) translateY(0)';
        el.style.zIndex = '1';
      });

      // Create popup
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <div style="padding: 8px;">
          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold; color: hsl(15, 75%, 48%);">
            ${location.icon} ${location.name}
          </h3>
          <p style="margin: 0; font-size: 14px; color: #666;">
            ${location.description}
          </p>
        </div>
      `);

      // Add marker to map
      new mapboxgl.Marker(el)
        .setLngLat(location.coordinates)
        .setPopup(popup)
        .addTo(map.current!);
    });

    // Add terrain and sky layers when style loads
    map.current.on('style.load', () => {
      if (!map.current) return;
      
      // Add terrain
      map.current.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
        tileSize: 512,
        maxzoom: 14,
      });
      
      map.current.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 });
      
      // Add sky layer
      map.current.addLayer({
        id: 'sky',
        type: 'sky',
        paint: {
          'sky-type': 'atmosphere',
          'sky-atmosphere-sun': [0.0, 90.0],
          'sky-atmosphere-sun-intensity': 15,
        },
      });
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [isTokenSet, mapboxToken]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      setIsTokenSet(true);
    }
  };

  if (!isTokenSet) {
    return (
      <Card className="glass-card">
        <CardContent className="p-8 md:p-12">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3">
              <MapPin className="h-10 w-10 text-primary" />
              <h3 className="text-2xl md:text-3xl font-bold">Interactive Map Setup</h3>
            </div>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              To view the interactive map of Balochistan with Koh-e-Sulaiman marked, please enter your 
              Mapbox public token. You can get one for free at{' '}
              <a 
                href="https://mapbox.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                mapbox.com
              </a>
            </p>
            <form onSubmit={handleTokenSubmit} className="max-w-md mx-auto space-y-4">
              <Input
                type="text"
                placeholder="Enter your Mapbox public token..."
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="bg-background/50"
              />
              <Button type="submit" className="w-full gap-2">
                <Mountain className="h-5 w-5" />
                Load Interactive Map
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] rounded-2xl overflow-hidden shadow-hard">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80 pointer-events-none">
        <Card className="glass-card pointer-events-auto">
          <CardContent className="p-6 space-y-3">
            <h4 className="text-lg font-bold flex items-center gap-2">
              <Mountain className="h-5 w-5 text-primary" />
              Explore Balochistan
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Click on the markers to learn more about key locations. Use controls to navigate, 
              zoom, and rotate the 3D terrain view.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BalochistanMap;
