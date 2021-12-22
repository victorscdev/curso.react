import { render, screen } from '@testing-library/react';
import ContentView from './ContentView';

test('renders learn react link', () => {
  render(<ContentView />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
