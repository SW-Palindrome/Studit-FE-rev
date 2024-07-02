import createMiddleware from 'next-intl/middleware'

const locales = ['en', 'ko']
const defaultLocale = 'en'

export default createMiddleware({
  locales,
  defaultLocale,
})

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest).*)',
  ],
}
