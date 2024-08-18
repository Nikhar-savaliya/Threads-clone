import { Metadata } from "next";
import LoginForm from "./LoginForm";
import Link from "next/link";
import loginImage from "@/assets/login-image.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex h-full w-full overflow-hidden bg-card shadow-2xl">
        <div className="my-auto w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="mb-12 space-y-1 text-center">
            <h1 className="text-4xl font-bold"> Login to Threads</h1>
            <p className="text-muted-foreground">
              Continue your Growth via Threads
            </p>
          </div>
          <div className="border-1 mx-auto max-w-xl space-y-5 rounded-xl border bg-card p-12">
            <LoginForm />
            <Link
              href={"/signup"}
              className="block text-center text-sm text-muted-foreground hover:underline"
            >
              Don&apos;t have an account? Sign up
            </Link>
          </div>
        </div>
        <Image
          src={loginImage}
          alt=""
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
