import type { Work as WorkType } from "../data/works";

export function WorkCard({ title, imageSrc, description, source }: WorkType) {
  return (
    <div className="flex flex-col items-center justify-start m-[10px] w-[40%] max-w-[500px] min-w-[350px] p-4 border-4 border-gray-300 rounded-lg shadow-md">
      <a href={source} target="_blank" rel="noopener noreferrer" className="underline self-start ml-[2.5%] my-2">
        <h2 className="text-2xl">{title}</h2>
      </a>
      <img src={imageSrc} alt={title} className="w-[95%] max-h-[260px]" />
      <div className="pt-2.5 w-[95%] text-left">{description}</div>
    </div>
  );
}
