import Link from "next/link";
import Sidebar from "../components/Sidebar";
import RegisterCard from "../components/RegisterCard";
import { RiLogoutCircleRLine } from "react-icons/ri";

export default function Login() {
  return (
    <>
      <Sidebar></Sidebar>
      <RegisterCard></RegisterCard>
      <Link href="/"> Go back to the Landing page</Link>
    </>
  );
}
