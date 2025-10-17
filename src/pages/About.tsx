import { motion } from 'framer-motion';
import { Calendar, MapPin, Users2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import landscapeImage from '@/assets/real-architecture.jpg';

const About = () => {
  const timeline = [
    { year: '3000 BCE', event: 'Ancient Mehrgarh civilization flourishes in Balochistan' },
    { year: '600 BCE', event: 'Part of the Achaemenid Persian Empire under Cyrus the Great' },
    { year: '712 CE', event: 'Islamic conquest brings profound cultural transformation' },
    { year: '1500s', event: 'Establishment of major Balochi tribal confederations' },
    { year: '1947', event: 'Modern era begins with partition of Indian subcontinent' },
  ];

  const tribes = [
    {
      name: 'Marri',
      description: 'Known for their fierce independence, pastoral traditions, and resistance to colonial rule. Warriors who never surrendered.',
      warriors: 'Famous for producing legendary fighters and tribal chiefs who defended their lands.',
    },
    {
      name: 'Bugti',
      description: 'Historic leaders in the Sui region, guardians of natural gas fields and ancient customs.',
      warriors: 'Renowned for their military prowess and the legendary Nawab Akbar Bugti.',
    },
    {
      name: 'Mengal',
      description: 'One of the largest and most influential tribes, known for political leadership and cultural preservation.',
      warriors: 'Produced numerous chieftains and leaders who shaped Balochistan\'s modern history.',
    },
    {
      name: 'Raisani',
      description: 'Custodians of ancient cultural practices, poetry, and traditional governance systems.',
      warriors: 'Known for diplomatic skills combined with warrior traditions and literary contributions.',
    },
    {
      name: 'Rind',
      description: 'Ancient and prestigious tribe mentioned in classical Balochi epic poetry and folklore.',
      warriors: 'Featured in legendary tales of bravery, honor, and the famous Mir Chakar Rind.',
    },
    {
      name: 'Lashari',
      description: 'Historic rivals and allies of the Rind tribe, prominent in Balochi epic narratives.',
      warriors: 'Warriors immortalized in poetry for their courage and loyalty to tribal codes.',
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] mb-20">
        <div
          className="absolute inset-0 bg-cover bg-center parallax-bg"
          style={{ backgroundImage: `url(${landscapeImage})` }}
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
              About Balochistan
            </h1>
            <p className="text-lg md:text-2xl lg:text-3xl text-white/95 text-shadow-soft">
              A land of ancient traditions and timeless beauty
            </p>
          </div>
        </motion.div>
      </section>

      <div className="content-container space-y-20 md:space-y-28">
        {/* Overview */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto space-y-8"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">Historical Overview</h2>
          <div className="space-y-6 text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed">
            <p>
              Balochistan, meaning "Land of the Baloch," is a region steeped in millennia of history. 
              Situated at the crossroads of South Asia, Central Asia, and the Middle East, it has been 
              a witness to the rise and fall of empires, the movement of peoples, and the evolution 
              of cultures.
            </p>
            <p>
              The landscape itself tells stories—from the rugged mountains of Koh-e-Sulaiman to the 
              endless deserts, from ancient trade routes to pastoral highlands where tribal traditions 
              remain strong. This is a land where history is not merely studied but lived, where 
              ancient customs blend seamlessly with contemporary life.
            </p>
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <Calendar className="h-10 w-10 md:h-12 md:w-12 text-primary" />
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">Historical Timeline</h2>
          </div>
          <div className="space-y-5">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="glass-card hover:shadow-medium transition-smooth">
                  <CardContent className="p-6 md:p-8 lg:p-10 flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary min-w-[140px]">
                      {item.year}
                    </div>
                    <div className="text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed flex items-center">
                      {item.event}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Culture & Heritage */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto space-y-8"
        >
          <div className="flex items-center gap-4 mb-12">
            <MapPin className="h-10 w-10 md:h-12 md:w-12 text-accent" />
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">Cultural Heritage</h2>
          </div>
          <Card className="glass-card">
            <CardContent className="p-8 md:p-12 lg:p-16 space-y-6">
              <p className="text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed">
                Balochi culture is characterized by its oral traditions, including epic poetry, folk 
                tales, and songs that have been passed down through generations. Music and dance play 
                central roles in celebrations, with traditional instruments like the sorud and tanburag 
                creating haunting melodies that echo across the mountains.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed">
                Handicrafts, particularly embroidery and carpet weaving, showcase intricate patterns 
                that tell stories of tribal identity and natural beauty. The vibrant colors and 
                geometric designs reflect both the harsh beauty of the landscape and the warmth of 
                its people.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Major Warrior Tribes */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <Users2 className="h-10 w-10 md:h-12 md:w-12 text-primary" />
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">Baloch Warrior Tribes</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {tribes.map((tribe, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Card className="glass-card h-full hover:shadow-glow transition-smooth group">
                  <CardContent className="p-6 md:p-8 lg:p-10 space-y-5">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary group-hover:glow-primary transition-smooth">
                      {tribe.name}
                    </h3>
                    <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                      {tribe.description}
                    </p>
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic">
                        {tribe.warriors}
                      </p>
                    </div>
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

export default About;
