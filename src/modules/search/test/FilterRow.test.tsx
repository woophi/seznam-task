import { noop } from 'core/data/utils';
import { FelaProvider } from 'core/fela/Provider';
import renderer from 'react-test-renderer';
import { FilterRow } from '../components/FilterRow';

const options = [
  {
    label: 'test option 1',
    value: 'test value 1',
    checked: false
  },
  {
    label: 'test option 2',
    value: 'test value 2',
    checked: true
  }
];

test('FilterRow renders correctly', () => {
  const component = renderer.create(
    <FelaProvider>
      <FilterRow<string> title="Test filter" options={options} onChange={noop} />
    </FelaProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
