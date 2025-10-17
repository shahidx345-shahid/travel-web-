import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';
import realMountains from '@/assets/real-mountains.jpg';
import realDesert from '@/assets/real-desert.jpg';
import realArchitecture from '@/assets/real-architecture.jpg';
import realValley from '@/assets/real-valley.jpg';
import realTextile from '@/assets/real-textile.jpg';
import realSunset from '@/assets/real-sunset.jpg';

const Gallery = () => {
  const images = [
    {
      src: realMountains,
      title: 'Koh-e-Sulaiman at Golden Hour',
      category: 'Landscapes',
    },
    {
      src: realArchitecture,
      title: 'Traditional Desert Architecture',
      category: 'Heritage',
    },
    {
      src: realTextile,
      title: 'Traditional Balochi Textile Art',
      category: 'Culture',
    },
    {
      src: realDesert,
      title: 'Ancient Desert Fort',
      category: 'Heritage',
    },
    {
      src: realValley,
      title: 'Mountain Valley Settlement',
      category: 'Landscapes',
    },
    {
      src: realSunset,
      title: 'Sunset Over Balochistan',
      category: 'Landscapes',
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="content-container mb-16 md:mb-20"
      >
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-4">
            <ImageIcon className="h-12 w-12 md:h-14 md:w-14 text-primary" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">Gallery</h1>
          </div>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A visual journey through Balochistan's breathtaking landscapes and rich cultural heritage
          </p>
        </div>
      </motion.section>

      {/* Masonry Grid */}
      <div className="content-container">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="break-inside-avoid"
            >
              <div className="group relative overflow-hidden rounded-2xl glass-card cursor-pointer">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm md:text-base font-medium mb-2 text-white/90">{image.category}</p>
                    <h3 className="text-xl md:text-2xl font-bold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="content-container mt-16 md:mt-24 max-w-5xl"
      >
        <div className="glass-card p-8 md:p-12 lg:p-16 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Contribute to Our Gallery</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Have photos of Balochistan to share? We'd love to feature your captures of this beautiful region.
          </p>
          <p className="text-sm md:text-base text-muted-foreground">
            Contact us through our submission form to contribute to this visual archive.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default Gallery;
