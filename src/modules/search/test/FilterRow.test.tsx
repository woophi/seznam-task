import { fireEvent, render } from '@testing-library/react';
import { noop } from 'core/data/utils';
import { FelaProvider } from 'core/fela/Provider';
import renderer from 'react-test-renderer';
import { spy } from 'sinon';
import { FilterRow } from '../components/FilterRow';

const testOptions = [
  {
    label: 'test option 1',
    value: 'test_value_1',
    checked: false
  },
  {
    label: 'test option 2',
    value: 'test_value_2',
    checked: true
  }
];

test('FilterRow renders correctly', () => {
  const component = renderer.create(
    <FelaProvider>
      <FilterRow<string> title="Test filter" options={testOptions} onChange={noop} />
    </FelaProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('<FilterRow />', () => {
  it('should have all required props: title, options, onChange', () => {
    const handleChange = spy();
    const { queryByText, getByTestId } = render(
      <FelaProvider>
        <FilterRow<string> title="Test Filter" options={testOptions} onChange={handleChange} />
      </FelaProvider>
    );

    expect(queryByText('Test Filter')).toBeTruthy();
    expect(queryByText(testOptions[0].label)).toBeTruthy();
    expect(queryByText(testOptions[1].label)).toBeTruthy();

    fireEvent.click(getByTestId(testOptions[0].value));
    expect(handleChange.callCount).toEqual(1);
  });
});
