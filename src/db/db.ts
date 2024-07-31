import { orchidORM } from 'orchid-orm';
import { config } from './config';
import { A } from './tables/a.table';
import { B } from './tables/b.table';

export const db = orchidORM(config.database, {
  a: A,
  b: B,
});
