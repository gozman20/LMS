import Image from "next/image";
const Logo = () => {
  return (
    <>
      <Image src="/logo.svg" alt="" height={40} width={40} />
    </>
  );
};

export default Logo;
