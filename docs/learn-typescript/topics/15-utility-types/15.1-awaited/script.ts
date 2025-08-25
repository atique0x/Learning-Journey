async function fetchUser(): Promise<{ id: number; name: string }> {
  return Promise.resolve({ id: 1, name: "Atique" });
}
