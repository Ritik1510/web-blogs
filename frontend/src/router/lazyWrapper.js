export function lazyImport(path) {
  return async () => {
    const mod = await import(path);
    return { default: mod.default };
  };
}

