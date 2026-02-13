import { sites } from "../data/sites";
import { MenuItem } from "./MenuItem";

export function Menu() {
  return (
    <div style={{ margin: '30px 0', width: '100%', textAlign: 'center' }}>
      {sites.map((site, i) => (
        <MenuItem
          key={site.text}
          icon={site.icon}
          text={site.text}
          url={site.url}
          color={site.color}
          delay={`${(i + 1) * 0.2}s`}
        />
      ))}
    </div>
  );
}
