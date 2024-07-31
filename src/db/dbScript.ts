import { rakeDb } from 'orchid-orm/migrations';
import { config } from './config';
import { BaseTable } from './baseTable';

export const change = rakeDb(config.database, {
  baseTable: BaseTable,
  dbPath: './db',
  migrationsPath: './migrations',
  migrationId: 'timestamp',
  commands: {
    async seed() {
      const { seed } = await import('./seed');
      await seed();
    },
  },
  import: (path) => import(path),
});
