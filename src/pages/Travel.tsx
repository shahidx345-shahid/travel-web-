import { motion } from 'framer-motion';
import { Map, AlertTriangle, Users, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import BalochistanMap from '@/components/BalochistanMap';
import realMountain from '@/assets/real-mountains.jpg';

const Travel = () => {
  const itineraries = [
    {
      title: '3-Day Cultural Tour',
      highlights: ['Quetta city tour', 'Local handicraft markets', 'Traditional cuisine experience'],
    },
    {
      title: '5-Day Mountain Trek',
      highlights: ['Koh-e-Sulaiman hiking', 'Remote village visits', 'Wildlife spotting'],
    },
    {
      title: '7-Day Heritage Journey',
      highlights: ['Historical sites', 'Tribal cultural experiences', 'Poetry and music evenings'],
    },
  ];

  const guides = [
    { name: 'Balochistan Tourism Office', contact: '+92-xxx-xxxxxxx' },
    { name: 'Local Heritage Guides', contact: '+92-xxx-xxxxxxx' },
    { name: 'Adventure Trekking Services', contact: '+92-xxx-xxxxxxx' },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] mb-20">
        <div
          className="absolute inset-0 bg-cover bg-center parallax-bg"
          style={{ backgroundImage: `url(${realMountain})` }}
        >
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full flex items-center justify-center text-center px-4"
        >
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow">
              Travel Information
            </h1>
            <p className="text-lg md:text-2xl text-white/95 text-shadow-soft">
              Plan your journey to explore the wonders of Balochistan
            </p>
          </div>
        </motion.div>
      </section>

      <div className="content-container space-y-20">

        {/* Interactive Map */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <MapPin className="h-10 w-10 md:h-12 md:w-12 text-primary" />
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">Explore Balochistan Map</h2>
          </div>
          <BalochistanMap />
        </motion.section>

        {/* Safety Notice */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Alert className="bg-accent/10 border-accent/50 border-2">
            <AlertTriangle className="h-6 w-6 text-accent" />
            <AlertDescription className="text-base md:text-lg ml-2 leading-relaxed">
              <strong className="text-accent">Important Travel Advisory:</strong> Always check current travel advisories and consult with local 
              authorities before planning your trip. Hire experienced local guides for remote areas and 
              respect local customs and traditions.
            </AlertDescription>
          </Alert>
        </motion.section>

        {/* Itineraries */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-12">
            <Calendar className="h-10 w-10 md:h-12 md:w-12 text-primary" />
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">Suggested Itineraries</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {itineraries.map((itinerary, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="glass-card h-full hover:shadow-glow transition-smooth">
                  <CardContent className="p-8 md:p-10 space-y-5">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary">{itinerary.title}</h3>
                    <ul className="space-y-3">
                      {itinerary.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-primary text-xl mt-0.5">•</span>
                          <span className="text-base md:text-lg text-foreground/85">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Travel Tips */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-8"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">Essential Travel Tips</h2>
          <Card className="glass-card">
            <CardContent className="p-8 md:p-12 lg:p-16">
              <div className="space-y-8 text-foreground/90">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary">Best Time to Visit</h3>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                    The ideal time to visit Balochistan is during spring (March-May) and autumn (September-November) 
                    when temperatures are moderate. Summers can be extremely hot in desert areas, while winters 
                    bring snow to mountain regions.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary">What to Pack</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl mt-0.5">•</span>
                      <span className="text-base md:text-lg lg:text-xl">Lightweight, modest clothing respecting local customs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl mt-0.5">•</span>
                      <span className="text-base md:text-lg lg:text-xl">Sun protection (hat, sunscreen, sunglasses)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl mt-0.5">•</span>
                      <span className="text-base md:text-lg lg:text-xl">Comfortable hiking boots for mountain areas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl mt-0.5">•</span>
                      <span className="text-base md:text-lg lg:text-xl">Warm layers for cooler evenings and mountain regions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl mt-0.5">•</span>
                      <span className="text-base md:text-lg lg:text-xl">First aid kit and any necessary medications</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary">Cultural Etiquette</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl mt-0.5">•</span>
                      <span className="text-base md:text-lg lg:text-xl">Dress modestly, especially in rural areas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl mt-0.5">•</span>
                      <span className="text-base md:text-lg lg:text-xl">Ask permission before photographing people</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl mt-0.5">•</span>
                      <span className="text-base md:text-lg lg:text-xl">Accept hospitality graciously - it's an important cultural value</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl mt-0.5">•</span>
                      <span className="text-base md:text-lg lg:text-xl">Learn a few basic phrases in Balochi or Urdu</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl mt-0.5">•</span>
                      <span className="text-base md:text-lg lg:text-xl">Respect religious sites and local customs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Local Guides */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-12">
            <Users className="h-10 w-10 md:h-12 md:w-12 text-accent" />
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">Local Guide Contacts</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass-card hover:shadow-medium transition-smooth">
                  <CardContent className="p-8 md:p-10 space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-primary">{guide.name}</h3>
                    <p className="text-base md:text-lg text-muted-foreground">{guide.contact}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Travel;
