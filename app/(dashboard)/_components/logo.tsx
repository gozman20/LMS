import Image from "next/image";
const Logo = () => {
  return (
    <>
      <Image src="/logo.svg" alt="" height={130} width={130} />
    </>
  );
};

export default Logo;
