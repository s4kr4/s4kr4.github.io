import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <article className="flex flex-col justify-center items-center w-full">
      <h1 className="text-[2rem] my-6">About</h1>
      <p className="max-w-[600px] text-left leading-8">
        {`滋賀県出身のエンジニアです。
        大学生のサークル活動としてゲームを制作したことをきっかけにIT業界へ興味を持ち、
        エンジニアとして就職しました。サーバーサイド・フロントエンドを問わず、Webアプリケーション等の制作プロジェクトに従事しています。`}
      </p>
    </article>
  );
}
