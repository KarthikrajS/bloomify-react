// This file isn't processed by Vite, see https://github.com/vikejs/vike/issues/562
// Consequently:
//  - When changing this file, you needed to manually restart your server for your changes to take effect.
//  - To use your environment variables defined in your .env files, you need to install dotenv, see https://vike.dev/env
//  - To use your path aliases defined in your vite.config.js, you need to tell Node.js about them, see https://vike.dev/path-aliases

// If you want Vite to process your server code then use one of these:
//  - vavite (https://github.com/cyco130/vavite)
//     - See vavite + Vike examples at https://github.com/cyco130/vavite/tree/main/examples
//  - vite-node (https://github.com/antfu/vite-node)
//  - HatTip (https://github.com/hattipjs/hattip)
//    - You can use Bati (https://batijs.dev/) to scaffold a Vike + HatTip app. Note that Bati generates apps that use the V1 design (https://vike.dev/migration/v1-design) and Vike packages (https://vike.dev/vike-packages)

import express, { query } from 'express'
import compression from 'compression'
import { renderPage } from 'vike/server'
import { root } from './root.js'
import cookieParser from 'cookie-parser'
import { prisma } from './auth/prisma.js'
import { Argon2id } from 'oslo/password'
import { lucia } from './auth/lucia.js'
import { generateId } from 'lucia'
import cors from 'cors';
import axios from 'axios'
import session from 'express-session'
import { fileFrom } from 'node-fetch'
const isProduction = process.env.NODE_ENV === 'production'

startServer()

async function startServer() {
  const app = express()
  auth(app)
  await assets(app)
  vike(app)
  app.use(compression())



  // ...
  // Other middlewares (e.g. some RPC middleware such as Telefunc)
  // ...

  const port = process.env.PORT || 3000
  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}
function auth(app) {
  app.use(cookieParser())

  app.use(cors({ credentials: true }));
  app.use(express.json()) // Parse & make HTTP request body available at `req.body`

  app.set('trust proxy', 1) // trust first proxy
  app.use(session({
    name: `bloomify`,
    secret: 'some-secret-example',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // This will only work if you have https enabled!
      maxAge: 60000 // 1 min
    }
  }));
  app.post("/api/auth/login", async (req, res) => {

    const { email, password } = await req.body;
    const formDataRaw = {
      identifier: email,
      password,
    };

    try {
      // const user = await prisma.user.findUnique({
      //   where: { email: formDataRaw.email },
      // });

      const response = await axios.post(`${process.env.PUBLIC_ENV__VIKE_API_URL}/auth/local`, formDataRaw);

      console.log(response, "aDASFASF");
      const token = response?.data.jwt;
      const user = response?.data?.user
      console.log(response?.data?.data);

      if (!user) {
        return res.status(400).json({ message: "Incorrect email or password" });
      }

      // const validPassword = await new Argon2id().verify(
      //   user.hashedPassword,
      //   formDataRaw.password
      // );

      // if (!validPassword) {
      //   return res.status(400).json({ message: "Incorrect email or password" });
      // }

      // console.log("validation", user, validPassword);
      if (user) {
        req.session.userId = user.id;
        // console.log("all valid", user);
        // const session = await lucia.createSession(user.id, { cart: user.items });
        // const sessionCookie = lucia.createSessionCookie(session.id);

        // console.log(sessionCookie, session, "sessionCookie");
        // res.cookie(user.firstName,
        //   sessionCookie.value,
        //   sessionCookie.attributes)
        const mA = req.session.cookie.originalMaxAge
        res.cookie('bl_user', user, {
          mA, // One day - defined by session
          httpOnly: false // Only the server can't read the cookie
        })

      }
      const success = !!user
      res.json({ success, token, user })
    } catch (error) {
      console.log(error?.response?.data);
    }
  })

  app.post("/api/auth/register", async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    try {
      if (password !== confirmPassword) {
        // ({ message: "Passwords do not match" });
      }
      const response = await axios.post(`${process.env.PUBLIC_ENV__VIKE_API_URL}/auth/local/register`, {
        username: firstName + " " + lastName,
        password,
        email
      });

      const token = response?.data.jwt;
      const user = response?.data?.user
      console.log(response?.data, token, user, "asdasdasdad");
      //session cookie
      req.session.userId = user.id;


      /* {
  jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzIxOTczMjI0LCJleHAiOjE3MjQ1NjUyMjR9.W97U2iw-ZX0E37crvezwe-AeMbKue8BnqPRd3KhqfSo',
  user: {
    id: 1,
    username: 'Neil Barber',
    email: 'qigux@mailinator.com',
    provider: 'local',
    confirmed: true,
    blocked: false,
    createdAt: '2024-07-26T05:53:44.128Z',
    updatedAt: '2024-07-26T05:53:44.128Z'
  }
}*/

      if (response?.data?.error) {
        console.log(response?.data?.error);
      }



      if (user) {
        // console.log(req.session.cookie.originalMaxAge, "sessioasndasd");

        const mA = req.session.cookie.originalMaxAge
        res.cookie('username', user.username, {
          mA, // One day - defined by session
          httpOnly: true // Only the server can read the cookie
        })
      }
      const success = !!user
      res.json({ success, token, user })
    } catch (err) {
      console.log(err.data.error)
    }

    // const formDataRaw = {
    //   firstName,
    //   lastName,
    //   email,
    //   password,
    //   confirmPassword,
    // };

    // if (formDataRaw.password !== formDataRaw.confirmPassword) {
    //   return res.status(400).json({ message: "Passwords do not match" });
    // }

    // try {
    //   const hashedPassword = await new Argon2id().hash(formDataRaw.password);
    //   const userId = generateId(15);

    //   try {
    //     await prisma.user.create({
    //       data: {
    //         id: userId,
    //         firstName: formDataRaw.firstName,
    //         lastName: formDataRaw.lastName,
    //         email: formDataRaw.email,
    //         hashedPassword,
    //       },
    //     });
    //   } catch (error) {
    //     return res.status(400).json({ message: "Something went wrong, try again" });
    //   }

    //   const session = await lucia.createSession(userId, {});
    //   const sessionCookie = lucia.createSessionCookie(session.id);

    //   console.log(sessionCookie, "sessionCookie");
    //   res.cookie(sessionCookie.name,
    //     sessionCookie.value,
    //     sessionCookie.attributes)

    //   return res.status(200).json({ message: "User Registered" });
    // } catch (error) {
    //   console.log(error);
    // }
  })

  app.post("/api/auth/logout", async (req, res) => {
    try {
      console.log("catch", req?.body);
      if (req.body.user == null) return;
      // console.log(req?.user ,"asdasdsadasd-12");

      // await lucia.invalidateSession(req.get("session")?.id ?? "");

      // const sessionCookie = lucia.createBlankSessionCookie();
      req.session.userId = null;
      res.clearCookie('bl_user')
      // res.end()
      return res.json("ok");
    } catch (err) {
      console.log(err);
    }
  })

  app.post("/api/orders/create", async (req, res) => {
    try {
      const { data, token } = await req.body;
      console.log(data, token, "data, token");
      const response = await axios.post(`${process.env.PUBLIC_ENV__VIKE_API_URL}/orders`, { data: data }, {
        headers: {
          Authorization: "bearer " + token,
        }
      });

      console.log(response, "response");
      if (response?.status == 200) {
        console.log(response?.data);
        res.json({ createOrder: { data: response?.data } });
      }

    } catch (err) {
      console.log(err, "<===err");
    }
  })


  app.get("/api/orders/:query", async (req, res) => {
    const q = req.query;
    const p = req.params
    // const token = q.token;
    // delete q.token
    // // delete q.populate
    // delete q.filters;
    console.log("query", p?.query.split('&'));
    const params = p?.query.split('&')

    const tokenString = params[0].split("=")[1]
    const populateString = params[1]
    const filterString = params[2]
    console.log(`${process.env.PUBLIC_ENV__VIKE_API_URL}/orders?${populateString + filterString}`, "tokenString, populateString, filterString");
    const response = await axios.get(`${process.env.PUBLIC_ENV__VIKE_API_URL}/orders?${populateString + filterString}`, {
      headers: {
        Authorization: "bearer " + tokenString,
      }
    });
    console.log(response, "response");
    if (response?.status == 200) {
      console.log(response?.data);
      res.json({ orderList: { data: response?.data } });
    }

  })


  app.post("api/create-payment-intent", async (req, res) => {
    const { amount } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "inr",
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  });


  // app.post('/_auth/logout', (_req, res) => {
  //   res.clearCookie('username')
  //   res.end()
  // })
  // app.get("/api/auth/*",  (req, res) => {
  //   const nextauth = req.path.split("/");
  //   nextauth.splice(0, 3);
  //   req.query.nextauth = nextauth;

  //    NextAuthHandler(req, res)
  // });
}

async function assets(app) {
  // Vite integration
  if (isProduction) {
    // In production, we need to serve our static assets ourselves.
    // (In dev, Vite's middleware serves our static assets.)
    const sirv = (await import('sirv')).default
    app.use(sirv(`${root}/dist/client`))
  } else {
    // We instantiate Vite's development server and integrate its middleware to our server.
    // ⚠️ We instantiate it only in development. (It isn't needed in production and it
    // would unnecessarily bloat our production server.)
    const vite = await import('vite')
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true }
      })
    ).middlewares
    app.use(viteDevMiddleware)
  }
}

function vike(app) {

  // Vike middleware. It should always be our last middleware (because it's a
  // catch-all middleware superseding any middleware placed after it).
  app.get('*', async (req, res, next) => {
    console.log(req?.user?.session?.cookie, "inside middleware");
    const pageContextInit = {
      urlOriginal: req.originalUrl,
      user: req.user,
      auth: req.user,
      data: { title: "Bloomify" },
      headersOriginal: req.headers
    }
    const pageContext = await renderPage(pageContextInit)
    if (pageContext.errorWhileRendering) {
      // Install error tracking here, see https://vike.dev/errors
    }
    const { httpResponse } = pageContext
    if (!httpResponse) {
      return next()
    } else {
      const { body, statusCode, headers, earlyHints, contentType } = httpResponse
      if (res.writeEarlyHints) res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) })
      // headers.forEach(([name, value]) => res.setHeader(name, value))
      res.status(statusCode).type(contentType).send(body)
      // For HTTP streams use httpResponse.pipe() instead, see https://vike.dev/streaming
      // res.send(body)
    }
  })

}