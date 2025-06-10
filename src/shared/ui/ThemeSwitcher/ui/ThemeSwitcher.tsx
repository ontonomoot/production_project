import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/moon.svg';
import DarkIcon from 'shared/assets/icons/sun.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.LIGHT
        ? <LightIcon width='30px' height='30px' />
        : <DarkIcon width='30px' height='30px' />}
    </Button>
  )
}
