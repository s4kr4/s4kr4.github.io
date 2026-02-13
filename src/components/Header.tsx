import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <div className="w-full bg-[#222]">
      <header className="px-5 pt-5 pb-[5px] text-[#aaa] flex flex-col items-center">
        <img
          src="/images/icon-white-250.png"
          alt="icon"
          className="animate-[swing-logo_0.5s_ease_1.5s_1]"
          width={80}
          height={80}
        />
        <h1 className="text-white text-[2em] font-bold">s4kr4</h1>
        <nav className="mt-1 text-white">
          <Link to="/" className="text-white no-underline">
            Home
          </Link>
          {" | "}
          <Link to="/about" className="text-white no-underline">
            About
          </Link>
          {" | "}
          <Link to="/skills" className="text-white no-underline">
            Skills
          </Link>
          {" | "}
          <Link to="/works" className="text-white no-underline">
            Works
          </Link>
        </nav>
      </header>
    </div>
  );
}
