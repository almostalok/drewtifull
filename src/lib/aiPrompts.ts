export type AiTone =
  | 'sweeter'
  | 'funnier'
  | 'more-romantic'
  | 'shorter'
  | 'more-poetic'
  | 'more-personal';

export interface AiPromptContext {
  recipientName: string;
  relationship?: string;
  occasion?: string;
  originalText: string;
  tone: AiTone;
}

export function generateAITextSuggestion(ctx: AiPromptContext): string {
  const { recipientName, relationship = 'friend', occasion = 'special day', originalText, tone } = ctx;
  const name = recipientName.trim() || 'my favorite person';

  switch (tone) {
    case 'sweeter':
      if (originalText.trim()) {
        return `Dear ${name}, every single day with you feels like a quiet blessing. ${originalText.trim()} Thank you for having the gentlest heart, the brightest smile, and for making everyone around you feel so deeply cherished. You deserve all the sweetness in the world today. ♡`;
      }
      return `Dear ${name}, I just wanted to remind you of how much light you bring into my life. Your kindness, your laughter, and the way you care so effortlessly about people makes the whole world feel a little softer. Thank you for simply being you. Happy ${occasion}! ♡`;

    case 'more-romantic':
      if (originalText.trim()) {
        return `My dearest ${name}, loving you has been the easiest, most natural thing I have ever known. ${originalText.trim()} With you, my heart is always at home. No matter where life leads us, I will always choose you, over and over again. All my love, endlessly. ♡`;
      }
      return `My dearest ${name}, if I had to live this life a thousand times over, I would look for your hand in every single one. You have turned ordinary days into poetry and quiet moments into memories I will treasure forever. Happy ${occasion}, my love. ♡`;

    case 'funnier':
      if (originalText.trim()) {
        return `Hey ${name}! ${originalText.trim()} Also, please note that you are contractually obligated to share your snacks with me, endure all my questionable music tastes, and laugh at my jokes even when they fail. Happy ${occasion} to the only person whose chaos matches mine! 🍕✨`;
      }
      return `Happy ${occasion}, ${name}! You are legitimately one of my favorite humans, mostly because you tolerate my weirdness and never judge my questionable life choices. Please never change—you are basically irreplaceable (and way too expensive to replace anyway). Cheers to you! 🎉`;

    case 'shorter':
      if (originalText.trim().length > 60) {
        return `Happy ${occasion}, ${name}! Thank you for being such an extraordinary part of my world. Loved you yesterday, love you today, love you always. ♡`;
      }
      return `To ${name} — wishing you the happiest ${occasion}. Thank you for making life so much brighter! ♡`;

    case 'more-poetic':
      return `For ${name}, who makes ordinary hours feel holy. Like golden hour through lace curtains, or rain falling softly on dry leaves—your presence brings a gentle grace into the lives of everyone lucky enough to know you. May your ${occasion} be as luminous as your soul. ✨`;

    case 'more-personal':
      return `Dear ${name}, thinking about our journey as ${relationship}s brings the biggest smile to my face. From our late night conversations to all the unspoken inside jokes, you have been my anchor. Thank you for showing up for me without hesitation. Here is to our next chapter together! ♡`;

    default:
      return originalText;
  }
}
