import { createBaseTable } from 'orchid-orm';

export const BaseTable = createBaseTable({
  // Set `snakeCase` to `true` if columns in your database are in snake_case.
  // snakeCase: true,

  // Customize column types for all tables.
  columnTypes: (t) => ({
    ...t,
  }),
});
