import TaskList from './TaskList.svelte';
import { render } from '@testing-library/svelte';
import { WithPinnedTasks } from './TaskList.stories'; // Our story imported here

test('renders pinned tasks at the start of the list', () => {
  // Story's args used with our test
  const { container } = render(TaskList, {
    props: WithPinnedTasks.args,
  });
  expect(container.firstChild.children[0].classList.contains('TASK_PINNED')).toBe(true);
});