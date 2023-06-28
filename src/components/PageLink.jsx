export default function PageLink({ href, text, itemClass }) {
  return (
    <li>
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  );
}
