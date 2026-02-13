import { createFileRoute } from "@tanstack/react-router";
import { works } from "../data/works";
import { WorkCard } from "../components/WorkCard";

export const Route = createFileRoute("/works")({
  component: WorksPage,
});

function WorksPage() {
  return (
    <article className="flex flex-col justify-center items-center w-full">
      <h1 className="text-[2rem] my-6">Works</h1>
      <div className="flex flex-wrap justify-center w-[80%]">
        {works.map((work) => (
          <WorkCard key={work.title} {...work} />
        ))}
      </div>
    </article>
  );
}
