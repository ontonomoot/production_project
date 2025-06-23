import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from "shared/ui/Button/Button";
describe('Button', () => {
  test('button simple test ', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('class test', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
})
