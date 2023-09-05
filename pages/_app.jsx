import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <header>
      </header>
      <Component {...pageProps} />
      {/* <div>
      {!home && (
        <div>
          <Link href="/">← ホームへ戻る</Link>
        </div>
      )}

    </div> */}
      <div>
        <Link href="/">← ホームへ戻る</Link>
      </div>
    </div>
  )
}
export default MyApp
