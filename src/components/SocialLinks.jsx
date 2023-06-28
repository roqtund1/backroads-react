import { socialLinks } from "../data/data";
import SocialLink from "./SocialLink";

export default function SocialLinks({ parentClass, itemClass }) {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return <SocialLink key={link.id} {...link} itemClass={itemClass} />;
      })}
    </ul>
  );
}
