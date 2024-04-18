import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <div className="mx-auto max-w-screen-lg p-4 md:p-6 2xl:p-10">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
