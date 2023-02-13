import '../styles/globals.css';
import Header from '@/components/Header';
('../components/Header');
export default function RootLayout({ children }) {
  return (
    <html lang="he">
      {/* nav bar, footer / global componnents that need to be in every page
  & lang
  */}
      <head />
      <body>
        <Header />
        {children}{' '}
      </body>
    </html>
  );
}
