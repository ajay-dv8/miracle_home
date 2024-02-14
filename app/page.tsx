import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/SignUpUserSteps";
import Header from "@/components/Header";
import Form from "@/components/form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <DeployButton />
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      <div className="">
        <div className=" flex flex-col justify-center items-center">
          <h2 className="font-bold text-4xl">
            Miracle Home
          </h2>
          <p className="">
            please fill the form below
          </p>
        </div>
        <Form />

        <Link 
          href="/success_page"
          className="mt-4"
        >
          <Button>Check List</Button>
        </Link>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Developed by{" "}
          <a
            href="https://ajayportfolio.vercel.app/"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Ajay
          </a>
        </p>
      </footer>
    </div>
  );
}
