import { motion } from 'framer-motion';
import { Mountain, Leaf, Bird, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import heroImage from '@/assets/real-sunset.jpg';
import valleyImage from '@/assets/real-valley.jpg';

const KoheSulaiman = () => {
  const myths = [
    {
      title: 'Biblical Connection',
      description: 'Named after Prophet Solomon (Sulaiman), believed to have rested here during his travels.',
    },
    {
      title: 'Sacred Peaks',
      description: 'Local traditions hold that these mountains were blessed by saints and prophets.',
    },
    {
      title: 'Gateway to Heaven',
      description: 'Ancient folklore describes the highest peaks as a bridge between earth and the divine.',
    },
  ];

  const flora = [
    'Juniper forests at higher elevations',
    'Wild pistachio and almond trees',
    'Medicinal herbs used in traditional healing',
    'Rare endemic wildflowers',
  ];

  const fauna = [
    'Balochistan black bear',
    'Urial (wild sheep)',
    'Various birds of prey including eagles',
    'Snow leopards in remote areas',
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] mb-20">
        <div
          className="absolute inset-0 bg-cover bg-center parallax-bg"
          style={{ backgroundImage: `url(${heroImage})` }}
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
              Koh-e-Sulaiman
            </h1>
            <p className="text-lg md:text-2xl lg:text-3xl text-white/95 text-shadow-soft">
              The Mountain of Solomon - Where Legend Meets Nature
            </p>
          </div>
        </motion.div>
      </section>

      <div className="content-container space-y-20 md:space-y-28">
        {/* Geography */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <div className="flex items-center gap-3 mb-8">
            <Mountain className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Geography</h2>
          </div>
          <div className="prose prose-lg max-w-none text-foreground/90">
            <p>
              The Koh-e-Sulaiman mountain range extends across eastern Balochistan and western Pakistan, 
              forming a natural barrier between the Indus plain and the Iranian plateau. Rising to heights 
              of over 3,000 meters, these ancient peaks have shaped the climate, culture, and history of 
              the region for millennia.
            </p>
            <p>
              The range is characterized by dramatic escarpments, deep valleys, and rugged terrain that 
              has challenged travelers and conquerors throughout history. During winter, snow blankets 
              the highest peaks, while summer brings a brief flowering season that transforms the 
              landscape into a tapestry of colors.
            </p>
          </div>
        </motion.section>

        {/* Myths & Legends */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">Myths & Legends</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {myths.map((myth, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card h-full">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-2xl font-bold">{myth.title}</h3>
                    <p className="text-muted-foreground">{myth.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Flora & Fauna */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8">Flora & Fauna</h2>
          <Tabs defaultValue="flora" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="flora" className="gap-2">
                <Leaf className="h-4 w-4" />
                Flora
              </TabsTrigger>
              <TabsTrigger value="fauna" className="gap-2">
                <Bird className="h-4 w-4" />
                Fauna
              </TabsTrigger>
            </TabsList>
            <TabsContent value="flora" className="mt-6">
              <Card className="glass-card">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {flora.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-lg"
                      >
                        <Leaf className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="fauna" className="mt-6">
              <Card className="glass-card">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {fauna.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-lg"
                      >
                        <Bird className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.section>

        {/* Map Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Interactive Map</h2>
          </div>
          <Card className="glass-card">
            <CardContent className="p-6 md:p-12">
              <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="h-16 w-16 text-primary mx-auto" />
                  <p className="text-lg text-muted-foreground">
                    Interactive Mapbox integration<br />
                    <span className="text-sm">(Add your Mapbox token to enable)</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default KoheSulaiman;
