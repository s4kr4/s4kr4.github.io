import { useState, useEffect, useRef } from "react";

const profileString = `
{
  "nickname": "s4kr4",
  "position": "Web engineer",
  "accounts": [
    "GitHub": "@s4kr4",
    "Qiita": "@s4kr4",
    "Hatena": "@s4kr4",
    "Twitter": "@s4kr4_"
  ]
}
`;
const profileRows = profileString.split("\n").length;

export function Profile() {
  const [displayString, setDisplayString] = useState(
    "\n".repeat(profileRows - 1),
  );
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setDisplayString((prev) => {
        const next = profileString.slice(0, prev.length + 1);
        if (next.length >= profileString.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return profileString;
        }
        const brForAdd = profileRows - next.split("\n").length;
        return next + "\n".repeat(brForAdd);
      });
    }, 40);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <pre className="inline-block w-[90%] max-w-[600px] pl-2.5 text-left text-white bg-[#222] border-[5px] border-[#aaa] rounded-[10px]">
        {displayString.split("\n").map((item, i) => (
          <span key={i}>
            {item}
            <br />
          </span>
        ))}
      </pre>
    </div>
  );
}
