import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Header } from "../components/Header";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <main className="flex flex-col flex-wrap justify-center text-center font-sans">
      <Header />
      <Outlet />
      <footer className="mt-[2rem]">
        <hr />
        <span>&copy; {new Date().getFullYear()} s4kr4</span>
      </footer>
    </main>
  );
}
