import {
  component$, useStyles$, useOnWindow, $,
  useVisibleTask$,
} from "@builder.io/qwik";
import { server$, type DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);
  useOnWindow("beforeunload", $((ev) => {
    ev.preventDefault();
    ev.returnValue = "custom message";
  }));
  /* this works.
  useVisibleTask$(({track}) => {
    window.addEventListener("beforeunload", (ev) => {
      ev.preventDefault();
      ev.returnValue = "custom message";
    });
  }); */
  return (
    <>
      <h1>Hi 👋</h1>
      <p>Test</p>
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
