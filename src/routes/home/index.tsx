import { component$, useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <h1>Home 👋</h1>
      <p>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>
      <footer>
        <ul>
        <li><Link href="/">Top</Link></li>
        <li><Link href="/home">Home</Link></li>
        </ul>
      </footer>
    </>
  );
});
