import PureTaskList from './PureTaskList.svelte';
import { render } from '@testing-library/svelte';
import { WithPinnedTasks } from './PureTaskList.stories'; // Our story imported here

test('renders pinned tasks at the start of the list', () => {
  // Story's args used with our test
  const { container } = render(PureTaskList, {
    props: WithPinnedTasks.args,
  });
  expect(container.firstChild.children[0].classList.contains('TASK_PINNED')).toBe(true);
});