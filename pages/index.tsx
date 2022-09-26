import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Home</h1>

      <Image src="/youtube.png" alt="Vercel Logo" width={48} height={48} />
      <h1>Cryptic Mining</h1>
    </div>
  );
};

export default Home;
