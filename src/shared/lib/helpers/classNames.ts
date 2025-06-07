type Mods = Record<string, boolean | string> // в качестве ключа string, в качестве значения - bool или string

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
  return [
    cls,
    ...additional.filter(Boolean), //чтобы не было ошибки из-за undefined null в пропсах - фильтрует только true опции
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className) // фильтруем и оставляем значения стилей со значением true 
  ]
    .join(' ') // и собираем в название класса
}

