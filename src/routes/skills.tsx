import { createFileRoute } from "@tanstack/react-router";
import { SkillTable } from "../components/SkillTable";

export const Route = createFileRoute("/skills")({
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <article className="flex flex-col justify-center items-center w-full">
      <h1 className="text-[2rem] my-6">Skills</h1>
      <SkillTable />
    </article>
  );
}
