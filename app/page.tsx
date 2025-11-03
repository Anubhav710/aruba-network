import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello From Aruba-networks</h1>
      <Link href={"/login"}>Login page</Link>
    </div>
  );
}
