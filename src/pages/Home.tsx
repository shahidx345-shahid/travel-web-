import { motion } from 'framer-motion';
import { ArrowRight, Book, Mountain, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/real-mountains.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center parallax-bg"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-4 max-w-6xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 md:mb-8 text-shadow leading-tight"
          >
            Exploring Balochistan &<br />Koh-e-Sulaiman
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-2xl lg:text-3xl text-white/95 mb-10 md:mb-12 text-shadow-soft max-w-4xl mx-auto leading-relaxed"
          >
            Discover the rich history, breathtaking poetry, and timeless beauty of Balochistan's cultural heritage
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4 md:gap-6 justify-center flex-wrap"
          >
            <Link to="/about">
              <Button size="lg" className="gap-2 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 transition-bounce hover:scale-105">
                Explore History <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
              </Button>
            </Link>
            <Link to="/poetry">
              <Button size="lg" variant="secondary" className="gap-2 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 transition-bounce hover:scale-105">
                Read Poetry <Book className="h-5 w-5 md:h-6 md:w-6" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white/80 text-sm flex flex-col items-center gap-2"
          >
            <span>Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-1.5 h-1.5 bg-white/70 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 md:py-24 lg:py-32 px-4 content-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
        >
          <Card className="glass-card group hover:scale-105 transition-bounce">
            <CardContent className="p-6 md:p-8 lg:p-10 space-y-5">
              <div className="h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                <Mountain className="h-7 w-7 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Koh-e-Sulaiman</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Explore the legendary mountain range steeped in myths, natural beauty, and spiritual significance.
              </p>
              <Link to="/koh-e-sulaiman">
                <Button variant="link" className="p-0 text-base md:text-lg group-hover:gap-3 transition-smooth">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="glass-card group hover:scale-105 transition-bounce">
            <CardContent className="p-6 md:p-8 lg:p-10 space-y-5">
              <div className="h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                <Book className="h-7 w-7 md:h-8 md:w-8 text-accent" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Poetry & Culture</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Immerse yourself in the rich literary tradition and cultural heritage of Balochistan.
              </p>
              <Link to="/poetry">
                <Button variant="link" className="p-0 text-base md:text-lg group-hover:gap-3 transition-smooth">
                  Discover Poetry <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="glass-card group hover:scale-105 transition-bounce">
            <CardContent className="p-6 md:p-8 lg:p-10 space-y-5">
              <div className="h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                <Users className="h-7 w-7 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Heritage & Tribes</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Learn about the diverse tribal cultures and centuries-old traditions of Balochistan.
              </p>
              <Link to="/about">
                <Button variant="link" className="p-0 text-base md:text-lg group-hover:gap-3 transition-smooth">
                  Read More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Featured Poem Preview */}
      <section className="py-16 md:py-24 lg:py-32 px-4 bg-muted/30">
        <div className="content-container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8 md:space-y-10"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">Featured Poetry</h2>
            <div className="glass-card p-8 md:p-12 lg:p-16 space-y-8">
              <blockquote className="text-xl md:text-2xl lg:text-3xl italic leading-relaxed">
                "Hither come, help me get off the cliff, O white-shawled lad!<br />
                I'll, O, red-dressed lass, but what will be the reward, I have?"
              </blockquote>
              <p className="text-base md:text-lg text-muted-foreground">— Traditional Balochi Folk Song (Translated by Fazal Baloch)</p>
              <Link to="/poetry">
                <Button size="lg" className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6">Explore More Poetry</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
