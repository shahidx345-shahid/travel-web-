import { motion } from 'framer-motion';
import { Book, Volume2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import realTextile from '@/assets/real-textile.jpg';

const Poetry = () => {
  const poems = [
    {
      title: 'Balochi Folk Song',
      poet: 'Traditional Balochi (Translated by Fazal Baloch)',
      original: 'بيايی، مرا از صخره پایین آور، ای پسر شال سفید!\nمن خواهم آمد، ای دختر پیراهن سرخ، اما پاداش چیست؟',
      translation: 'Hither come, help me get off the cliff, O white-shawled lad!\nI\'ll, O, red-dressed lass, but what will be the reward, I have?',
      hasAudio: false,
    },
    {
      title: 'Mountain\'s Voice',
      poet: 'Mir Gul Khan Nasir',
      original: 'کوہ سلیمان کی چوٹیاں آسمان کو چھوتی ہیں\nان کی روح میں ہزاروں سالوں کی کہانیاں بستی ہیں\nیہاں باد صبا بھی آزادی کا نغمہ گاتی ہے\nہر پتھر میں شہیدوں کی داستانیں بستی ہیں',
      translation: 'The peaks of Koh-e-Sulaiman touch the heavens above,\nIn their spirit dwell stories of a thousand years of love.\nHere even the morning breeze sings freedom\'s song,\nIn every stone, martyrs\' tales belong.',
      hasAudio: false,
    },
    {
      title: 'Desert Wind',
      poet: 'Atta Shad',
      original: 'صحرا کی ہوا میں آزادی کی خوشبو ہے\nہر ریت کے ذرے میں ایک داستان ہے\nیہ زمین ہمارے آباؤ اجداد کی ہے\nاس میں ہماری تاریخ کا سامان ہے',
      translation: 'In the desert wind, freedom\'s fragrance flows,\nIn every grain of sand, a story grows.\nThis land belongs to our ancestors true,\nIt holds our history through and through.',
      hasAudio: false,
    },
    {
      title: 'My Homeland',
      poet: 'Mir Gul Khan Nasir',
      original: 'میرا وطن، تیری زمین سونے سے بھی قیمتی ہے\nتیری ہر پتھر میں میری تاریخ کا نشان ہے\nتیرے دامن میں شیر دل بلوچ بستے ہیں\nجن کے سینوں میں عزت و وقار کا جہان ہے',
      translation: 'My homeland, your soil is more precious than gold,\nIn every stone, my history unfolds.\nIn your embrace, brave Baloch hearts reside,\nWhose chests hold honor and pride.',
      hasAudio: false,
    },
    {
      title: 'Warrior\'s Song',
      poet: 'Traditional Balochi',
      original: 'تلوار اٹھا کر میدان میں آئے\nبلوچ جوان اپنی شان دکھائے\nکوہ و صحرا گواہ ہماری بہادری کے\nہم نے کبھی نہیں جھکایا سر غیروں کے آگے',
      translation: 'Raising swords, we come to the battlefield,\nBaloch youth their glory revealed.\nMountains and deserts witness our might,\nWe never bow to others in the fight.',
      hasAudio: false,
    },
    {
      title: 'Freedom\'s Call',
      poet: 'Atta Shad',
      original: 'آزادی ہماری سانسوں میں ہے\nہمارے خون میں بہتی ہے\nیہ ہماری میراث ہے، ہماری پہچان ہے\nاس کے بغیر زندگی کا کوئی نام و نشان نہیں',
      translation: 'Freedom lives within our breath,\nFlows through our veins till death.\nIt\'s our heritage, our identity clear,\nWithout it, life has nothing dear.',
      hasAudio: false,
    },
    {
      title: 'Land of the Brave',
      poet: 'Mir Gul Khan Nasir',
      original: 'یہ سرزمین بہادروں کی ہے\nجہاں شہیدوں کی قربانیاں ہیں\nہر گھر سے نکلا ہے ایک سورما\nجس کی داستانیں صدیوں تک زندہ رہیں گی',
      translation: 'This is the land of the courageous and free,\nWhere martyrs\' sacrifices we see.\nFrom every home a warrior came forth,\nWhose stories will live forever forth.',
      hasAudio: false,
    },
    {
      title: 'Mother\'s Blessing',
      poet: 'Traditional Balochi',
      original: 'ماں نے بیٹے کو تلوار دی\nکہا جا بیٹا میدان میں\nیا تو فتح کر کے واپس آ\nیا شہید ہو کر قربان میں',
      translation: 'Mother gave her son a sword,\nSaid go forth to battlefield lord.\nEither return victorious and proud,\nOr be martyred in honor\'s shroud.',
      hasAudio: false,
    },
  ];

  const poets = [
    {
      name: 'Mir Gul Khan Nasir',
      period: '1914-1983',
      contribution: 'Revolutionary poet, historian, and journalist who championed Balochi language and culture. His works addressed themes of freedom, identity, and social justice.',
    },
    {
      name: 'Atta Shad',
      period: '1939-1997',
      contribution: 'Architect of modern Balochi poetry, known for his revolutionary verses and passionate defense of Balochi language. His poetry inspired generations.',
    },
    {
      name: 'Shah Abdul Latif Bhittai',
      period: '1689-1752',
      contribution: 'Legendary Sufi poet whose mystical works influenced Balochi and Sindhi literature, promoting love, peace, and spiritual enlightenment.',
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] mb-20">
        <div
          className="absolute inset-0 bg-cover bg-center parallax-bg"
          style={{ backgroundImage: `url(${realTextile})` }}
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
              Poetry & Culture
            </h1>
            <p className="text-lg md:text-2xl text-white/95 text-shadow-soft">
              Voices from the mountains and deserts of Balochistan
            </p>
          </div>
        </motion.div>
      </section>

      <div className="content-container space-y-20">
        {/* Poems Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <Book className="h-10 w-10 text-primary" />
            <h2 className="text-3xl md:text-5xl font-bold">Featured Poetry</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {poems.map((poem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="glass-card h-full hover:shadow-medium">
                  <CardContent className="p-6 md:p-10 space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{poem.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground">by {poem.poet}</p>
                    </div>
                    
                    <div className="space-y-5">
                      <div className="p-5 md:p-6 bg-muted/40 rounded-xl">
                        <p className="text-right text-base md:text-lg font-medium leading-relaxed" dir="rtl">
                          {poem.original}
                        </p>
                      </div>
                      
                      <div className="p-5 md:p-6 bg-accent/10 rounded-xl">
                        <p className="text-base md:text-lg italic leading-relaxed text-foreground/90">
                          "{poem.translation}"
                        </p>
                      </div>
                    </div>

                    {poem.hasAudio && (
                      <Button variant="outline" className="w-full gap-2 transition-smooth">
                        <Volume2 className="h-5 w-5" />
                        Listen to Recitation
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Notable Poets */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12">Notable Poets</h2>
          <div className="space-y-6">
            {poets.map((poet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <Card className="glass-card">
                  <CardContent className="p-6 md:p-10">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="space-y-3">
                        <h3 className="text-2xl md:text-3xl font-bold">{poet.name}</h3>
                        <p className="text-sm md:text-base text-muted-foreground font-medium">{poet.period}</p>
                      </div>
                      <div className="lg:max-w-2xl">
                        <p className="text-base md:text-lg text-foreground/85 leading-relaxed">{poet.contribution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Cultural Context */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold">The Oral Tradition</h2>
          <Card className="glass-card">
            <CardContent className="p-8 md:p-12 space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                Balochi poetry has been primarily an oral tradition, passed down through generations 
                by bards and storytellers. These verses were not merely entertainment but served as 
                historical records, moral guidance, and expressions of cultural identity.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                The themes often revolve around love, valor, nature, and the harsh beauty of the 
                Balochi landscape. Poetry gatherings, known as "mehfils," remain important social 
                events where communities come together to share verses, music, and stories.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                Modern Balochi poets have embraced written forms while maintaining the rhythmic and 
                melodic qualities that make this poetry so distinctive. The tradition continues to 
                evolve, addressing contemporary themes while honoring ancient forms.
              </p>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default Poetry;
