import '../styles/globals.css';
import Header from '@/components/Header';
('../components/Header');
import Footer from '@/components/Footer';
export default function RootLayout({ children }) {
  return (
    <html>
      {/* nav bar, footer / global componnents that need to be in every page
  & lang
  */}
      <head></head>
      <body>
        <Header />

        {children}
        <Footer/>
      </body>
    </html>
  );
}
