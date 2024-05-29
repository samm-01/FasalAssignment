import Image from "next/image";
import axios from "axios";
import LoginForm from "../../components/LoginForm";
import AuthForms from "../../components/AuthForms";

export default function Home() {
  return (
    <main className="bg-white">
      {/* <LoginForm /> */}
      <AuthForms />
    </main>
  );
}

