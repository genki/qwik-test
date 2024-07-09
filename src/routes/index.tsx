import { component$ } from "@builder.io/qwik";
import { server$, type DocumentHead } from "@builder.io/qwik-city";

const getRandom = server$(() => {
  return Math.random();
});

export default component$(() => {
  return (
    <>
    Top {getRandom()}
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
