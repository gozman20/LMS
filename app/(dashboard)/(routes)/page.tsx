import Image from "next/image";
import { UserButton } from "@clerk/nextjs/app-beta";

const Home = () => {
  return (
    <div className="">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
