import { motion } from 'motion/react';
import { ParticleBackground } from './components/ParticleBackground';
import { ScrollingText } from './components/ScrollingText';
import { PolaroidImage } from './components/PolaroidImage';
import { MusicPlayer } from './components/MusicPlayer';
import { Heart } from 'lucide-react';

export default function App() {
  // Your love letter messages - customize these!
  const loveMessages = [
    "Edi njan ippo ith enthina cheyane enn inike arijuda💗",
    "Inike ninoode vaingara ishtam adi inike athe ninte eduth express akkan onnum ariyilla",
    "Nee paraja pole oru kollam kaanathe iruna ninode olla ishtam poovum enn inike thonunilla🙃",
   "Namal ippo enthayalum 1monthinnum kooduthal ahyi mariyathakk samsarichitt😞",
    "Inike veshamam okke indagilum njan enne thanne observe cheyarnn ninode olla isthtam korayonn",
    "Oro divasam kazhiyumbozhum inike ninode olla ishtam koodune ollu dii❤️", 
    "Inike entho ninte swabhavam polle ollore ahnu ishtam korach vashiyum,childishnessum okke🙃",
    "Nee enne oru divasam ethra pravisham kanunu enn inike ariyilla njan ninne nokathe neeram illa",
    "Collegeil vanna nee entha varathe enna manasil ",
    "Ninne ah jennelil kanumbo entho oru sandosham ahn❤️",
    "Njan nigade aduthe ee satelight polle karagunath ninode onn samsarikan ahn",
    "Pakshe inike ariyilla njan ninode enth paraj ahnn samsarikende enn",
    "Entho ethra kandalom samsarichalum poora enn oru feeling ahn",
    "Ninne kaattum madhiya inike collegeil veran pakhse ninne kaanam enn ollode ahn njan ennum classil vere veranee",
    "Ath konda njan college thorakunatha nalath enn parayanee",
    "Ariya njan ithiri alla valand over ahnn enn ",
    "Inike ente karaym enn mathrame indarnollu ippo ahne ente swabhavam okke mariyath athonde ah ee over caring thonunne",
    "Pinne inik inike hariyum gouryum samsarikuna polle koore samsarikan ariyathilla ath bad ahno enn ariyilla",
    "Inike kooduthal kelkana ishtam njan samsaricha level illand povum inike starting trouble ind",
    "Inike ninne ishtam ahn❤️",
    "Ninne inike valand pidich poyi ",
    "Oru karyam orapp thara ninake eppozhelum manase mari enode enthelum thonuvengil jeevivithakaalam muzhuzhan njan ninte koode indavum",
    "Inike ithoke onn parayanam enn thonni ee parajath muzhuvan genuine ahn",
    "Nee ente karyam onn swanthamayitt alogiko vere arodum choikand",
    "Ithin replay illangilum kozhapilla vayichu enn ariyan oru thumps up indo chatil"
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Music Player */}
      <MusicPlayer />

      {/* Content */}
      <div className="relative z-10">
        {/* Opening Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="min-h-screen flex flex-col items-center justify-center px-8 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            <Heart className="w-20 h-20 text-pink-300 mb-8 fill-pink-300" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-pink-100 mb-6 font-serif">
            Happy Birthday
          </h1>
          <p className="text-2xl md:text-3xl text-pink-200 font-serif italic">
            Devoo....
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-12 text-pink-300"
          >
            <p className="text-lg">Scroll down to read your letter and Pattuvengil ah play button njekkiko↓</p>
          </motion.div>
        </motion.div>

        {/* Scrolling Messages */}
        {loveMessages.map((message, index) => (
          <ScrollingText key={index} text={message} index={index} />
        ))}

        {/* Polaroid Images Section */}
        <div className="min-h-screen flex items-center justify-center px-8 py-20">
          <div className="max-w-6xl w-full">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl text-pink-100 text-center mb-16 font-serif"
            >
              Happy Birthday
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
              <PolaroidImage
                src="https://images.unsplash.com/photo-1514846528774-8de9d4a07023?w=600"
                caption="Forever with you ♡"
                rotation={-3}
                delay={0}
              />
              <PolaroidImage
                src="https://images.unsplash.com/photo-1514846528774-8de9d4a07023?w=600"
                caption="My favorite person"
                rotation={2}
                delay={0.2}
              />
              <PolaroidImage
                src="https://images.unsplash.com/photo-1514846528774-8de9d4a07023?w=600"
                caption="Always & Forever"
                rotation={-2}
                delay={0.4}
              />
            </div>
            <p className="text-center text-pink-200 mt-12 italic">
              (Replace these with your actual photos)
            </p>
          </div>
        </div>

        {/* More Messages */}
        <ScrollingText 
          text="You are the reason I believe in love" 
          index={loveMessages.length}
        />
        <ScrollingText 
          text="Happy Birthday, my darling" 
          index={loveMessages.length + 1}
        />

        {/* Final Section with Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="min-h-screen flex flex-col items-center justify-center px-8 text-center pb-20"
        >
          <div className="max-w-2xl">
            <p className="text-3xl md:text-4xl text-pink-100 mb-12 font-serif italic leading-relaxed">
              "In your eyes, I found my home. In your heart, I found my love. 
              In your soul, I found my soulmate."
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-16"
            >
              <p className="text-2xl text-pink-200 mb-4">All my love,</p>
              <p className="text-4xl md:text-5xl text-pink-100 font-serif italic signature">
                Your Love
              </p>
              <p className="text-lg text-pink-300 mt-2">(Put your name here)</p>
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
              className="mt-12"
            >
              <Heart className="w-12 h-12 text-pink-300 mx-auto fill-pink-300" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
