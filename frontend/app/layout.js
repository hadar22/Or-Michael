
import '../styles/globals.css';
import Header from '@/components/Header';
('../components/Header');
import Footer from '@/components/Footer';
export default function RootLayout({ children }) {
  return (
    <html dir='rtl'>
      
      <head/>
      <body>
        <Header />

        {children}{' '}
        
        <Footer/>

      </body>
    </html>
  );
}
