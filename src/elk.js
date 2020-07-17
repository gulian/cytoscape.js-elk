import ELK from 'elkjs/lib/elk-api'; // webworkerless api
import { Worker } from 'elkjs/lib/elk-worker.min'; // worker source
const elk = new ELK({
  workerFactory: url => new Worker(url)
});
export default elk;
