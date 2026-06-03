// Resolves asset paths gracefully — returns undefined if the file doesn't exist.
// Drop images into src/assets/ and they'll be picked up automatically.
const modules = import.meta.glob('/src/assets/**/*.{png,jpg,jpeg,svg,webp}', { eager: true })

export function getAsset(filename: string): string | undefined {
  const key = `/src/assets/${filename}`
  const mod = modules[key] as { default: string } | undefined
  return mod?.default
}
