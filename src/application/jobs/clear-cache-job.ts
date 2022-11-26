import { removeAllKeys } from '@/lib/cache';
import CronJob from './cron-job';

export default class ClearCacheJob extends CronJob {
  schedule(): string {
    return '*/1 6-20 * * *';
  }

  async execute(): Promise<void> {
    console.log(`[ClearCacheJob] clearing all cache`);
    await removeAllKeys();
    console.log(`[ClearCacheJob] cache cleared`);
  }
}
