import { change } from '../dbScript';

change(async (db) => {
  await db.createTable('a', (t) => ({
    id: t.identity({
      always: true,
    }).primaryKey(),
  }));
});

change(async (db) => {
  await db.createTable('b', (t) => ({
    id: t.identity({
      always: true,
    }).primaryKey(),
    aId: t.integer().foreignKey('a', 'id'),
  }));
});
