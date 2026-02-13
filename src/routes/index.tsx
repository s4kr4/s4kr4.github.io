import { createFileRoute } from "@tanstack/react-router";
import { Menu } from "../components/Menu";
import { Profile } from "../components/Profile";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Menu />
      <Profile />
    </>
  );
}
