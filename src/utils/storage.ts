export function loadData<T>(item: string, defaultData: T[]): T[] {
  const saved = localStorage.getItem(item);

  if (!saved) {
    return defaultData;
  }

  return JSON.parse(saved);
}

export function saveData<T>(item: string, data: T[]) {
    localStorage.setItem(item, JSON.stringify(data))
}