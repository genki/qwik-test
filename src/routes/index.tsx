import { component$, useStyles$, useSignal } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import styles from "./styles.css?inline";

const binstr = '\x18;\x13,ëÆ¹L\x0F\x97¥y\x90çRÂ«8âc;E\x19©vÚõ\x96üx*\x92';

export const getFoo = server$(async function (){
  return {foo:"foo", bar:binstr};
});

export default component$(() => {
  const foo = useSignal("initial");
  useStyles$(styles);
  return (
    <>
      <h1>Hi 👋</h1>
      <p>foo: {foo.value}</p>
      <button onClick$={async () => {
        foo.value = JSON.stringify(await getFoo());
      }}>Click me</button>
    </>
  );
});
