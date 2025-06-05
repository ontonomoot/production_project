// глобальная декларация типов = чтобы явно определить тип импортируемый из файлов компонентов, все ищем в stackoverflow, копируем

declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}