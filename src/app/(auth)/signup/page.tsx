import { Metadata } from "next";
import signUpImage from "@/assets/signup-image.png";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./signUpForm";
export const metadata: Metadata = {
  title: "Sign Up",
};

export default function page() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex h-full w-full overflow-hidden bg-card shadow-2xl">
        <div className="my-auto w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="mb-12 space-y-1 text-center">
            <h1 className="text-4xl font-bold"> sign up to Threads</h1>
            <p className="text-muted-foreground">
              A place where you can find friends
            </p>
          </div>
          <div className="border-1 mx-auto max-w-xl space-y-5 rounded-xl border bg-card p-12">
            <div className="space-y-5">
              <SignUpForm />
              <Link
                href={"/login"}
                className="block text-center text-sm text-muted-foreground hover:underline"
              >
                Already have an account? Log in
              </Link>
            </div>
          </div>
        </div>
        {/* image */}
        <Image
          src={signUpImage}
          alt=""
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
