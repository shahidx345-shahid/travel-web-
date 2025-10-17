import { motion } from 'framer-motion';
import { Mail, BookOpen, Mountain, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import realDesert from '@/assets/real-desert.jpg';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] mb-20">
        <div
          className="absolute inset-0 bg-cover bg-center parallax-bg"
          style={{ backgroundImage: `url(${realDesert})` }}
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
              About This Project
            </h1>
            <p className="text-lg md:text-2xl text-white/95 text-shadow-soft">
              Preserving and sharing the rich heritage of Balochistan
            </p>
          </div>
        </motion.div>
      </section>

      <div className="content-container space-y-20">
        {/* Project Mission */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto space-y-8"
        >
          <div className="flex items-center gap-4 mb-8">
            <Mountain className="h-10 w-10 md:h-12 md:w-12 text-primary" />
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">Our Mission</h2>
          </div>
          <Card className="glass-card">
            <CardContent className="p-8 md:p-12 lg:p-16 space-y-6">
              <p className="text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed">
                This website is dedicated to preserving and celebrating the magnificent history, culture, 
                and natural beauty of Balochistan, with special focus on the legendary Koh-e-Sulaiman 
                mountain range and the proud warrior tribes who have called these lands home for millennia.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed">
                Through authentic poetry, stunning imagery, and historical narratives, we aim to share 
                the spirit of Balochistan with the world—a land of courage, honor, and timeless traditions 
                that continue to inspire generations.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Contribution Ways */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <BookOpen className="h-10 w-10 md:h-12 md:w-12 text-accent" />
            <h2 className="text-3xl md:text-5xl font-bold">Ways to Contribute</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-card h-full hover:shadow-medium transition-smooth">
                <CardContent className="p-8 md:p-10 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary">Share Your Stories</h3>
                  <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
                    Have poetry, photographs, oral histories, or cultural insights about Balochistan? 
                    We welcome authentic submissions that celebrate this rich heritage and help preserve 
                    it for future generations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-card h-full hover:shadow-medium transition-smooth">
                <CardContent className="p-8 md:p-10 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary">Suggest Improvements</h3>
                  <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
                    Help us make this resource more accurate and comprehensive. Share corrections, 
                    additional historical information, cultural context, or ideas for new content 
                    that would enrich this platform.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-card h-full hover:shadow-medium transition-smooth">
                <CardContent className="p-8 md:p-10 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary">Historical Documentation</h3>
                  <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
                    If you have access to historical documents, tribal records, or family archives 
                    related to Balochistan's history, we would love to help preserve and share these 
                    invaluable resources.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-card h-full hover:shadow-medium transition-smooth">
                <CardContent className="p-8 md:p-10 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary">Cultural Education</h3>
                  <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
                    Help us create educational content about Balochi traditions, languages, customs, 
                    and way of life. Your knowledge can help others appreciate and understand this 
                    remarkable culture.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <Users className="h-10 w-10 md:h-12 md:w-12 text-accent" />
            <h2 className="text-3xl md:text-5xl font-bold">Get in Touch</h2>
          </div>
          <Card className="glass-card">
            <CardContent className="p-8 md:p-12 lg:p-16 text-center space-y-6">
              <div className="inline-flex items-center justify-center gap-3 p-6 rounded-2xl bg-primary/10">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">We'd Love to Hear From You</h3>
                <p className="text-base md:text-lg lg:text-xl text-foreground/85 leading-relaxed max-w-3xl mx-auto">
                  Whether you have questions, suggestions, or would like to contribute to this project, 
                  please feel free to reach out. Together, we can preserve and celebrate the magnificent 
                  heritage of Balochistan for generations to come.
                </p>
                <p className="text-lg md:text-xl text-primary font-medium pt-4">
                  Contact us to learn more about contributing
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default Contact;
