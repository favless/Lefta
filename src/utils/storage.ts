export function loadData<T>(item: string): T[] {
  const saved = localStorage.getItem(item);

  if (!saved) {
    return [];
  }

  return JSON.parse(saved);
}

export function saveData<T>(item: string, data: T[]) {
    localStorage.setItem(item, JSON.stringify(data))
}