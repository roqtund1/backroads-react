import { pageLinks } from "../data/data";
import PageLink from "./PageLink";

export default function PageLinks({ parentClass, itemClass }) {
  return (
    <ul className={parentClass}>
      {pageLinks.map((link) => {
        return <PageLink key={link.id} {...link} itemClass={itemClass} />;
      })}
    </ul>
  );
}
