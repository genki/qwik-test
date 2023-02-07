import { component$, useClientEffect$ } from '@builder.io/qwik';
import { loader$ } from '@builder.io/qwik-city';

export const Loader = loader$(({cookie}) => {
  cookie.set('theme', 'dark', {path: '/', maxAge: 60 * 60 * 24 * 365});
  console.log("loader", cookie.headers());
  return "loader";
});

export const onGet = (({cookie}) => {
  cookie.set('theme', 'light', {path: '/', maxAge: 60 * 60 * 24 * 365});
  console.log("onGet", cookie.headers());
});

export default component$(() => {
  const loader = Loader.use();
  console.log(loader.value);
  useClientEffect$(() => {
    const pre = document.querySelector('pre');
    pre.textContent = JSON.stringify(document.cookie, null, 2);
  });
  return (
    <>
      <div>Cookie should go here:</div>
      <pre />
    </>
  );
});
