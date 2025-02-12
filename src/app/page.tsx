import { LoginForm } from "@/components/login-form";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="w-screen h-screen md:max-w-screen-sm">
        <LoginForm />
      </div>
    </div>
  );
}
