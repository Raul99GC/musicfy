

/**
 * An array of Routes that are accesible to the public
 * These routes so not require authentication
 * @type {string[]}
 */
export const publicRoutes: Array<string> = [
  "/",
  '/user',
  '/collection',
  '/playlist',
  '/intl-es/track',
  '/intl-es/artist',
];

/**
 * The Route used for authentication
 * This route will redirect logged in users to /
 * @type {string}
 */
export const apiLoginRoute: string = '/login'


/**
 * The default redirect path after loggin in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/";
