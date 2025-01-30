import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:description" content="Descubra a magia do carnaval de Bezerros - uma festa única repleta de cultura, tradição, muita animação e claro, papangus! Venha se encantar com os papangus, foliões, as cores vibrantes e a alegria contagiante desta festa inesquecível!" />
        <meta property="og:image" content="https://carnaval.bezerros.pe.gov.br/marca-link.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:description" content="Descubra a magia do carnaval de Bezerros - uma festa única repleta de cultura, tradição, muita animação e claro, papangus! Venha se encantar com os papangus, foliões, as cores vibrantes e a alegria contagiante desta festa inesquecível!" />
        <meta property="twitter:image" content="https://carnaval.bezerros.pe.gov.br/marca-link.jpg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;800&family=Roboto:wght@500&display=swap" rel="stylesheet" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />

        <meta name="description" content="Descubra a magia do carnaval de Bezerros - uma festa única repleta de cultura, tradição, muita animação e claro, papangus! Venha se encantar com os papangus, foliões, as cores vibrantes e a alegria contagiante desta festa inesquecível!" />
        <link rel="icon" href="/favicon.ico" />

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Y09ZEFSS04" strategy='afterInteractive' />
        <Script strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Y09ZEFSS04');
          `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Adicionando o Bootstrap JS após o conteúdo principal */}
        <Script
          strategy="afterInteractive"
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        />
        {/* Seus outros scripts */}
        <Script strategy='beforeInteractive' src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js' />
        <Script strategy='beforeInteractive' src='https://cdn.jsdelivr.net/parallax.js/1.4.2/parallax.min.js' />
      </body>
    </Html>
  )
}
