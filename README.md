# pizzashop-api

To install dependencies:

```bash
bun install
```

To run database with Docker Compose:

```bash
docker-compose up
```

To run project:

```bash
bun dev
```

This project was created using `bun init` in bun v1.0.30. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

--

## Drizzle ORM

To generate migrations

```bash
bun generate
```

To apply migrations

```bash
bun migrate
```

To seed data

```bash
bun seed
```

To open Drizzle Studio

- NodeJS >= v18 required.

```bash
bun studio
```

--

## REST API

- [httpie](https://httpie.io/) required

Send Auth Link

```bash
http POST ":3333/authenticate" email="manager.thiago@pizzashop.com"
```

Auth from Link

```bash
http GET ":3333/auth-links/authenticate?code=bzm5b4iufhit3t3pldacv6lw&redirect=http://localhost:5173"
```

Get User Profile

```bash
http GET ":3333/me" Cookie:auth="<jwt-token>; Max-Age=604800; Path=/; HttpOnly"
```

Create Restaurant

```bash
http POST ":3333/restaurants" restaurantName="Pizza Hut" managerName="Thiago Santana" phone="123456789" email="manager.thiago@pizzashop.com"
```

Get Managed Restaurant

```bash
http GET ":3333/managed-restaurant" Cookie:auth="<jwt-token>; Max-Age=604800; Path=/; HttpOnly"
```

Get Orders (filters are optional)

```bash
http GET ":3333/orders" Cookie:auth="<jwt-token>; Max-Age=604800; Path=/; HttpOnly"
```

Get Order Details

```bash
http GET ":3333/orders/:orderId" Cookie:auth="<jwt-token>; Max-Age=604800; Path=/; HttpOnly"
```

Approve Order

```bash
http PATCH ":3333/orders/:orderId/approve" Cookie:auth="<jwt-token>; Max-Age=604800; Path=/; HttpOnly"
```

Cancel Order

```bash
http PATCH ":3333/orders/:orderId/cancel" Cookie:auth="<jwt-token>; Max-Age=604800; Path=/; HttpOnly"
```

Dispatch Order

```bash
http PATCH ":3333/orders/:orderId/dispatch" Cookie:auth="<jwt-token>; Max-Age=604800; Path=/; HttpOnly"
```

Deliver Order

```bash
http PATCH ":3333/orders/:orderId/deliver" Cookie:auth="<jwt-token>; Max-Age=604800; Path=/; HttpOnly"
```

Get Month Revenue

```bash
http GET ":3333/metrics/month-revenue" Cookie:auth="<jwt-token>; Max-Age=604800; Path=/; HttpOnly"
```

Get Day Order Amount

```bash
http GET ":3333/metrics/day-order-amount" Cookie:auth="<jwt-token>; Max-Age=604800; Path=/; HttpOnly"
```

Get Month Orders Amount (with optional 'status' filter)

```bash
http GET ":3333/metrics/month-orders-amount" Cookie:auth="<jwt-token>; Max-Age=604800; Path=/; HttpOnly"
```

Get Popular Products

```bash
http GET ":3333/metrics/popular-products" Cookie:auth="<jwt-token>; Max-Age=604800; Path=/; HttpOnly"
```

Get Daily Revenue In Period

```bash
http GET ":3333/metrics/daily-revenue-in-period" Cookie:auth="<jwt-token>; Max-Age=604800; Path=/; HttpOnly"
```
