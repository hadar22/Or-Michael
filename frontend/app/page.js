import BulletinBoard from '../components/BulletinBoard';

export default function Home() {
  return (
    <div className="w-full h-screen homepage">
      <div className="w-4/5 text-center absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2  ">
        <h1 className="text-red-400 text-3xl">לוח התנדבויות</h1>
        <BulletinBoard />
      </div>
    </div>
  );
}
