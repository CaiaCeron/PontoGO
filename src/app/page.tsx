import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1>HELLO INTERNET</h1>
      <Link href="/login"> Go to Login Page</Link>
    </main>
  );
}
