import { BaseTable } from '../baseTable';
import { B } from './b.table';

export class A extends BaseTable {
  readonly table = 'a';

  columns = this.setColumns((t) => ({
    id: t.identity({ always: true }).primaryKey(),
    name: t.text().nullable(),
  }));

  relations = {
    b: this.hasMany(() => B, {
      columns: ['id'],
      references: ['aId'],
    }),
  };
}
