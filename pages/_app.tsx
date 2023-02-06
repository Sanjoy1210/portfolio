import { poppins } from 'fonts/utils';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html,
        body {
          font-family: ${poppins.style.fontFamily};
        }
        :root {
          --font-poppins: ${poppins.style.fontFamily};
        }
      `}</style>
      <ThemeProvider attribute="class" enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
