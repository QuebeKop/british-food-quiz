import { useState } from 'react';
import { RotateCcw } from 'lucide-react';

export default function BritishFoodQuiz() {
  const [stage, setStage] = useState('start');
  const [texture, setTexture] = useState(null);
  const [color, setColor] = useState(null);
  const [taste, setTaste] = useState(null);

  const foodDatabase = {
    mushy_brownish_savoury: { name: 'Beans on Toast', emoji: '🍞', description: 'Peak comfort, peak texture confusion' },
    mushy_greenish_savoury: { name: 'Mushy Peas', emoji: '💚', description: 'The vegetable that gave up on being vegetables' },
    mushy_yellowish_sweet: { name: 'Custard', emoji: '🍮', description: 'Technically a sauce, emotionally a mystery' },
    mushy_reddish_sweet: { name: 'Stewed Rhubarb', emoji: '🥄', description: 'Sweet and aggressively mushy' },
    mushy_greyish_savoury: { name: 'Laverbread', emoji: '🌊', description: 'Welsh seaweed purée. Yes, seaweed. For breakfast.' },
    hard_brownish_savoury: { name: 'Digestive Biscuit', emoji: '🍪', description: 'Harder than your average will to live' },
    hard_blackish_bitter: { name: 'Pontefract Cake', emoji: '⚫', description: 'A liquorice disc that tastes like punishment' },
    hard_greenish_savoury: { name: 'Boiled Sweet', emoji: '🔵', description: 'Vintage British candy that refuses to dissolve' },
    hard_yellowish_savoury: { name: 'Scotch Egg', emoji: '🥚', description: 'A hard-boiled egg in a meat jacket. Peak pub snack energy.' },
    crunchy_brownish_savoury: { name: 'Pork Scratching', emoji: '🐷', description: 'Exactly what it sounds like, unfortunately' },
    crunchy_yellowish_savoury: { name: 'Prawn Cocktail Crisp', emoji: '🦐', description: 'The seasoning is more powerful than the potato' },
    crunchy_reddish_savoury: { name: 'Ready Salted Crisp', emoji: '🥔', description: 'The gateway to regret' },
    spongy_orangish_sweet: { name: 'Treacle Sponge Pudding', emoji: '🎂', description: 'Dense, dark, and oddly compelling' },
    spongy_yellowish_sweet: { name: 'Jam Roly-Poly', emoji: '🍰', description: 'Suet pastry rolled with jam. Stodgy in the best way.' },
    spongy_blackish_sweet: { name: 'Chocolate Cake', emoji: '🍫', description: 'Actually delicious, sorry to break the pattern' },
    spongy_reddish_sweet: { name: 'Spotted Dick', emoji: '🍮', description: 'Yes, that is its actual name. Steamed suet pudding with currants.' },
    spongy_brownish_savoury: { name: 'Toad in the Hole', emoji: '🌭', description: 'Sausages trapped in Yorkshire pudding batter. No toads involved.' },
    runny_brownish_savoury: { name: 'Gravy', emoji: '🫕', description: 'Technically a condiment, philosophically a lifestyle' },
    runny_greenish_savoury: { name: 'Mint Sauce', emoji: '💚', description: 'Aggressively green and watery' },
    limp_brownish_savoury: { name: 'Chip Shop Chips', emoji: '🍟', description: 'Soggy in places, crispy in others, disappointing throughout' },
    limp_greenish_bland: { name: 'Boiled Cabbage', emoji: '🥬', description: 'Colour of despair, texture of surrender' },
    limp_yellowish_bland: { name: 'Canned Sweetcorn', emoji: '🌽', description: 'Not sweet, not corn-like, just sad' },
    sticky_brownish_sweet: { name: 'Toffee', emoji: '🍬', description: 'Sticks to your teeth and your regrets' },
    sticky_brownish_savoury: { name: 'Date and Walnut Loaf', emoji: '🍞', description: 'Suspiciously moist and weirdly good' },
    sticky_blackish_eyewatering: { name: 'Marmite', emoji: '🖤', description: 'A substance so divisive it defies physics. A tiny scraping causes existential crisis.' },
    sticky_blackish_savoury: { name: 'Black Pudding', emoji: '⚫', description: 'Blood sausage. Yes, actual blood. Breakfast staple.' },
    sticky_yellowish_sweet: { name: 'Sticky Toffee Pudding', emoji: '🍮', description: 'The one sticky thing people actually enjoy' },
    goopy_yellowish_savoury: { name: 'Salad Cream', emoji: '🥗', description: 'Not quite mayo, not quite anything else. Utterly British confusion.' },
    goopy_yellowish_sweet: { name: 'Custard', emoji: '🍮', description: 'Warm, disturbing, somehow mandatory' },
    goopy_orangish_sweet: { name: 'Marmalade', emoji: '🍊', description: 'Aggressively bitter orange paste that British people call breakfast' },
    goopy_brownish_savoury: { name: 'HP Sauce', emoji: '🔶', description: 'Gloopy brown perfection on a plate' },
    goopy_greyish_savoury: { name: 'Jellied Eels', emoji: '🐍', description: 'Eels. In jelly. From the Thames. Horrifying East End delicacy.' },
    crumbly_pinkish_sweet: { name: 'Bakewell Tart', emoji: '🥧', description: 'Almond and jam perfection with questionable pink icing' },
    crumbly_yellowish_sweet: { name: 'Rhubarb Crumble', emoji: '🥄', description: 'Tart fruit buried under sweet rubble' },
    lumpy_greyish_savoury: { name: 'Haggis', emoji: '🏴󐁧󐁢󐁳󐁣󐁴󐁿', description: "Scotland's revenge on the digestive system. Sheep innards in a stomach." },
    lumpy_greyish_bland: { name: 'Pease Pudding', emoji: '🫘', description: 'Split peas boiled into submission. Texture of regret.' },
    lumpy_pinkish_sweet: { name: 'Eton Mess', emoji: '🍓', description: 'Broken meringue, cream, and strawberries. Posh chaos.' },
    lumpy_yellowish_sweet: { name: 'Clotted Cream', emoji: '🥛', description: 'Cream so thick it forgot how to pour. Cornish gold.' },
  };

  const textures = ['mushy', 'hard', 'crunchy', 'spongy', 'runny', 'limp', 'sticky', 'goopy', 'crumbly', 'lumpy'];
  const colors = ['brownish', 'blackish', 'greenish', 'yellowish', 'reddish', 'orangish', 'greyish', 'pinkish'];
  const tastes = ['sweet', 'savoury', 'salty', 'bitter', 'bland', 'eye-watering'];

  const handleTextureSelect = (t) => {
    setTexture(t);
    setStage('color');
  };

  const handleColorSelect = (c) => {
    setColor(c);
    setStage('taste');
  };

  const handleTasteSelect = (t) => {
    setTaste(t);
    setStage('result');
  };

  const getFood = () => {
    const key = `${texture}_${color}_${taste}`;
    return foodDatabase[key] || {
      name: 'Unknown British Delicacy',
      emoji: '❓',
      description: 'This combination is too chaotic even for Britain'
    };
  };

  const reset = () => {
    setStage('start');
    setTexture(null);
    setColor(null);
    setTaste(null);
  };

  const food = getFood();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-blue-600 to-red-600 p-8 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-2">🇬🇧 British Food Identifier</h1>
          <p className="text-xl text-red-100">What horrifying delicacy are you describing?</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-lg shadow-2xl p-8">
          {stage === 'start' && (
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800 mb-8">Step 1: Describe the texture</p>
              <div className="grid grid-cols-2 gap-4">
                {textures.map(t => (
                  <button
                    key={t}
                    onClick={() => handleTextureSelect(t)}
                    className="p-4 bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white rounded-lg font-semibold text-lg transition transform hover:scale-105"
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {stage === 'color' && (
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-4">Step 1 Complete: {texture}</p>
              <p className="text-2xl font-bold text-gray-800 mb-8">Step 2: What colour is it?</p>
              <div className="grid grid-cols-2 gap-4">
                {colors.map(c => (
                  <button
                    key={c}
                    onClick={() => handleColorSelect(c)}
                    className="p-4 bg-gradient-to-br from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white rounded-lg font-semibold text-lg transition transform hover:scale-105"
                  >
                    {c.charAt(0).toUpperCase() + c.slice(1)}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStage('start')}
                className="mt-6 text-gray-600 hover:text-gray-800 underline"
              >
                ← Back
              </button>
            </div>
          )}

          {stage === 'taste' && (
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">Steps 1-2 Complete: {texture}, {color}</p>
              <p className="text-2xl font-bold text-gray-800 mb-8">Step 3: What does it taste like?</p>
              <div className="grid grid-cols-2 gap-4">
                {tastes.map(t => (
                  <button
                    key={t}
                    onClick={() => handleTasteSelect(t)}
                    className="p-4 bg-gradient-to-br from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 text-white rounded-lg font-semibold text-lg transition transform hover:scale-105"
                  >
                    {t.charAt(0).toUpperCase() + t.slice(t === 'eye-watering' ? 0 : 1)}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStage('color')}
                className="mt-6 text-gray-600 hover:text-gray-800 underline"
              >
                ← Back
              </button>
            </div>
          )}

          {stage === 'result' && (
            <div className="text-center">
              <div className="text-8xl mb-6">{food.emoji}</div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{food.name}</h2>
              <p className="text-gray-600 text-lg mb-4 italic">"{food.description}"</p>
              <div className="bg-gray-100 rounded-lg p-4 mb-8">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Your selection:</span> {texture}, {color}, {taste}
                </p>
              </div>
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-semibold transition transform hover:scale-105"
              >
                <RotateCcw size={20} />
                Try Another
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-white text-sm">
          <p>Warning: Results may contain actual British food recommendations</p>
        </div>
      </div>
    </div>
  );
}
