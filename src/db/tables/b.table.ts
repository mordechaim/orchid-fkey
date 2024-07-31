import { BaseTable } from '../baseTable';
import { A } from './a.table';

export class B extends BaseTable {
  readonly table = 'b';

  columns = this.setColumns((t) => ({
    id: t.identity({ always: true }).primaryKey(),
    aId: t.integer().foreignKey(() => A, 'id'),
  }));
}
