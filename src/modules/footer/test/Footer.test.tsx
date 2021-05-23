import { render } from '@testing-library/react';
import { FelaProvider } from 'core/fela/Provider';
import renderer from 'react-test-renderer';
import { Footer } from '../index';

test('Footer renders correctly', () => {
  const component = renderer.create(
    <FelaProvider>
      <Footer />
    </FelaProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Footer has current year', () => {
  const { queryByText } = render(
    <FelaProvider>
      <Footer />
    </FelaProvider>
  );

  const currentYear = new Date().getFullYear();

  expect(queryByText(new RegExp(`${currentYear}`))).toBeTruthy();
});
