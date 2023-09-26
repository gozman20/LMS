import Image from "next/image";
import { UserButton } from "@clerk/nextjs/app-beta";

const Home = () => {
  return (
    <div className="bg-sky-800">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
