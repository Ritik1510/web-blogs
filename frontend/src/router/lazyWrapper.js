export function lazyImport(factory) {
  return async () => {
    const mod = await factory();
    return { default: mod.default };
  };
}
