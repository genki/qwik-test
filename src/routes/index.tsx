import { component$, useStore } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

const cwd = new URL(import.meta.url).pathname;

export default component$(() => {
  const res = useStore<Record<string,any>>({});
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        {cwd}
        {JSON.stringify(res)}
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
