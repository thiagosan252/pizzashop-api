import { createId } from '@paralleldrive/cuid2'
import { text, pgTable } from 'drizzle-orm/pg-core'
import { users } from '.'

export const authLinks = pgTable('auth_links', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  code: text('code').notNull().unique(),
  userId: text('user_id')
    .references(() => users.id)
    .notNull(),
})
