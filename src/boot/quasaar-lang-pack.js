import { Lang } from 'quasar';

// relative path to your node_modules/quasar/..
// change to YOUR path
// const langList = import.meta.glob('../../node_modules/quasar/lang/*.mjs')
// or just a select few (example below with only DE and FR):
import.meta.glob('../../node_modules/quasar/lang/(ko-KR|en-US).mjs');

export default async () => {
  const langIso = 'ko-KR'; // ... some logic to determine it (use Cookies Plugin?)

  try {
    langList[`../../node_modules/quasar/lang/${langIso}.mjs`]().then((lang) => {
      Lang.set(lang.default);
    });
  } catch (err) {
    // Requested Quasar Language Pack does not exist,
    // let's not break the app, so catching error
  }
};
