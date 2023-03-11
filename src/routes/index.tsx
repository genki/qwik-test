import {
  component$,
} from '@builder.io/qwik';
import {
  globalAction$,
} from '@builder.io/qwik-city';

export const Foo = globalAction$(() => {
  console.log('foo');
});

export const Bar = globalAction$(() => {
  console.log('bar');
});

export default component$(() => {
  const foo = Foo.use();
  const bar = Bar.use();
  return (
    <div>
      <button onClick$={() => {
        foo.run();
      }}>Foo</button>
      <button onClick$={() => {
        bar.run();
      }}>Bar</button>
      <button onClick$={() => {
        foo.run();
        bar.run();
      }}>Foo Bar</button>
    </div>
  );
});
