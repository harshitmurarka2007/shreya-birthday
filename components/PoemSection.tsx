import React from 'react';
import { motion } from 'framer-motion';
import { Feather } from 'lucide-react';

const PoemSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-[#FFF0F5] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -left-10 top-20 w-40 h-40 bg-pink-200 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-20 w-60 h-60 bg-rose-gold/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/60 backdrop-blur-md p-10 md:p-16 rounded-tl-[80px] rounded-br-[80px] rounded-tr-xl rounded-bl-xl shadow-xl border border-white"
        >
          <div className="flex justify-center mb-6 text-rose-gold">
            <Feather size={40} />
          </div>
          
          {/* EDITABLE: Title of the poem section */}
          <h2 className="text-3xl md:text-5xl font-script text-deep-red mb-10">A Poem For You</h2>
          
          {/* EDITABLE: Replace the poem text below. Use <br/> for new lines. */}
          <div className="font-serif text-lg md:text-2xl text-gray-800 leading-relaxed italic space-y-6">
            <p>
              "In a world of millions,<br/>
              It is you I see.<br/>
              A guiding star,<br/>
              Shining just for me."
            </p>
            <p>
              "Your smile is the sunrise,<br/>
              Your laugh, the sweetest tune.<br/>
              I love you more than the stars,<br/>
              And deeper than the moon."
            </p>
          </div>
          
          {/* EDITABLE: Short sign-off at the bottom of the poem card */}
          <div className="mt-12 flex items-center justify-center gap-4">
             <div className="h-px w-12 bg-rose-gold"></div>
             <span className="font-script text-2xl text-deep-red">Forever Yours</span>
             <div className="h-px w-12 bg-rose-gold"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PoemSection;