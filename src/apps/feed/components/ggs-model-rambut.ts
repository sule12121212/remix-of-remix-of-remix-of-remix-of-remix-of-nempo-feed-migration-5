import wavy from '@/assets/ggs-feed-59-model-rambut-wavy.jpg.asset.json';
import bob from '@/assets/ggs-feed-59-model-rambut-bob.jpg.asset.json';
import lurus from '@/assets/ggs-feed-59-model-rambut-lurus.jpg.asset.json';
import wolfcut from '@/assets/ggs-feed-59-model-rambut-wolfcut.jpg.asset.json';
import butterfly from '@/assets/ggs-feed-59-model-rambut-butterfly.jpg.asset.json';
import keriting from '@/assets/ggs-feed-59-model-rambut-keriting.jpg.asset.json';
import hushcut from '@/assets/ggs-feed-59-model-rambut-hushcut.jpg.asset.json';
import himecut from '@/assets/ggs-feed-59-model-rambut-himecut.jpg.asset.json';
import octopus from '@/assets/ggs-feed-59-model-rambut-octopus.jpg.asset.json';
import ccurl from '@/assets/ggs-feed-59-model-rambut-ccurl.jpg.asset.json';

export const GGS_MODEL_RAMBUT_SLIDE = 59;

/**
 * Hairstyles slide 59 cycles through. The first is the owner's original photo; the rest are AI hairstyle
 * edits of that same photo with the original face pasted back (`faceFromOriginal`), so only the hair changes.
 */
export const GGS_MODEL_RAMBUT_STYLES = [
  { name: 'Wavy Curtain Bangs', photo: wavy.url, faceFromOriginal: true, original: true },
  { name: 'Bob Sebahu', photo: bob.url, faceFromOriginal: true, original: false },
  { name: 'Lurus Sleek', photo: lurus.url, faceFromOriginal: true, original: false },
  { name: 'Wolf Cut', photo: wolfcut.url, faceFromOriginal: true, original: false },
  { name: 'Butterfly Layer', photo: butterfly.url, faceFromOriginal: true, original: false },
  { name: 'Hush Cut', photo: hushcut.url, faceFromOriginal: true, original: false },
  { name: 'Hime Cut', photo: himecut.url, faceFromOriginal: true, original: false },
  { name: 'Octopus Cut', photo: octopus.url, faceFromOriginal: true, original: false },
  { name: 'Korean C-Curl', photo: ccurl.url, faceFromOriginal: true, original: false },
  { name: 'Curly Perm', photo: keriting.url, faceFromOriginal: true, original: false },
] as const;

export const GGS_MODEL_RAMBUT_STYLE_SECONDS = 2.5;
export const GGS_MODEL_RAMBUT_LOOP_SECONDS = GGS_MODEL_RAMBUT_STYLES.length * GGS_MODEL_RAMBUT_STYLE_SECONDS;

export const GGS_MODEL_RAMBUT_COPY = {
  kicker: 'GGS Hair Studio',
  script: 'Pilih',
  big: 'Model Rambut',
  sub: 'Wajah tetap, gaya baru',
  ask: 'Kamu tim yang mana?',
} as const;
