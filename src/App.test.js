import { render, screen } from '@testing-library/react';
import App from './App';

test('renders', () => {
  render(<App />);
  const textElement = screen.getByText(/Alignment Workspace/i);
  expect(textElement).toBeInTheDocument();
});
