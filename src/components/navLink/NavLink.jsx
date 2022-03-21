import "./navLink.css";

export default function NavLink(props) {
  return (
    <li>
      <a href="{props.to}">{props.text}</a>
    </li>
  );
}
