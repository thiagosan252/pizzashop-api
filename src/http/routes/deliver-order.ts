import { and, eq } from 'drizzle-orm'
import Elysia, { t } from 'elysia'
import { db } from '../../db/connection'
import { orders } from '../../db/schema'
import { auth } from '../auth'
import { UnauthorizedError } from '../errors/unauthorized'

export const deliverOrder = new Elysia().use(auth).patch(
  '/orders/:orderId/deliver',
  async ({ getCurrentUser, params, set }) => {
    const { orderId } = params
    const { restaurantId } = await getCurrentUser()

    if (!restaurantId) {
      throw new UnauthorizedError()
    }

    const order = await db.query.orders.findFirst({
      where(fields, { eq }) {
        return eq(fields.id, orderId)
      },
    })

    if (!order) {
      set.status = 400
      return { message: 'Order not found' }
    }

    if (order.status !== 'delivering') {
      set.status = 400
      return {
        message:
          'You cannot deliver orders that are not in "delivering" status',
      }
    }

    await db
      .update(orders)
      .set({ status: 'delivered' })
      .where(and(eq(orders.id, orderId), eq(orders.restaurantId, restaurantId)))
  },
  {
    params: t.Object({
      orderId: t.String(),
    }),
  },
)
