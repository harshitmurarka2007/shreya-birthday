import React, { useState } from 'react';
import { Sparkles, Send, RefreshCw, PenTool } from 'lucide-react';
import { generateBirthdayWish } from '../services/geminiService';
import { motion } from 'framer-motion';

const LetterGenerator: React.FC = () => {
  const [name, setName] = useState('');
  const [traits, setTraits] = useState('');
  const [memory, setMemory] = useState('');
  const [generatedWish, setGeneratedWish] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!name || !traits) return;
    
    setIsLoading(true);
    const wish = await generateBirthdayWish(name, traits, memory, 'romantic');
    setGeneratedWish(wish);
    setIsLoading(false);
  };

  return (
    <section className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-script text-deep-red mb-4">AI Love Letter Assistant</h2>
          <p className="text-gray-600 font-sans max-w-xl mx-auto">
            Not sure what to say? Let Gemini help craft the perfect birthday message.
            (This is a tool for you, the boyfriend, to generate a message to copy into a card!)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-pink-100"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Her Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-rose-gold focus:border-transparent outline-none bg-pink-50/30"
                  placeholder="e.g., Sarah"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">What do you love about her?</label>
                <textarea 
                  value={traits}
                  onChange={(e) => setTraits(e.target.value)}
                  className="w-full p-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-rose-gold focus:border-transparent outline-none bg-pink-50/30 min-h-[80px]"
                  placeholder="e.g., her smile, her kindness, how she laughs..."
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Favorite Memory (Optional)</label>
                <textarea 
                  value={memory}
                  onChange={(e) => setMemory(e.target.value)}
                  className="w-full p-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-rose-gold focus:border-transparent outline-none bg-pink-50/30 min-h-[80px]"
                  placeholder="e.g., our trip to the beach..."
                />
              </div>

              <button 
                onClick={handleGenerate}
                disabled={isLoading || !name || !traits}
                className="w-full py-3 bg-gradient-to-r from-rose-gold to-deep-red text-white rounded-lg font-bold shadow-lg transform active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isLoading ? <RefreshCw className="animate-spin" /> : <Sparkles />}
                {isLoading ? 'Writing Magic...' : 'Generate Letter'}
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-rose-gold transform rotate-3 rounded-2xl opacity-10"></div>
            <div className="relative bg-[#fffdf0] p-8 rounded-2xl shadow-xl border border-stone-200 h-full flex flex-col">
              <div className="flex items-center gap-2 text-deep-red mb-4">
                <PenTool size={20} />
                <h3 className="font-serif font-bold text-xl">Your Letter</h3>
              </div>
              
              <div className="flex-grow font-serif text-lg leading-relaxed text-gray-800 whitespace-pre-wrap italic">
                {generatedWish ? generatedWish : (
                  <span className="text-gray-400 not-italic font-sans text-sm">
                    Your AI-generated love letter will appear here. Fill out the form to get started!
                  </span>
                )}
              </div>

              {generatedWish && (
                <div className="mt-4 flex justify-end">
                  <button 
                    onClick={() => navigator.clipboard.writeText(generatedWish)}
                    className="text-sm text-rose-gold hover:text-deep-red font-bold flex items-center gap-1"
                  >
                    Copy to Clipboard <Send size={14} />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LetterGenerator;
