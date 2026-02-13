import { skills } from "../data/skills";

export function SkillTable() {
  return (
    <table className="border-collapse">
      <tbody>
        {skills.map((skill) => (
          <tr key={skill.category}>
            <th className="p-[0.7rem] text-left border-y-2 border-[#aaa]">
              {skill.category}
            </th>
            <td className="text-left border-y-2 border-[#aaa]">
              {skill.skill.join(", ")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
