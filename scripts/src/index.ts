import { addSpots } from './add_spots'
import { normalizeLogs } from './normalize_logs'
import fs from 'fs'


// ! NOTE: Comment the ones which you don't want to execute
(async () => {
    await addSpots();
    await normalizeLogs(fs.readFileSync('./logs.txt', { encoding: 'utf-8' }))
})();

