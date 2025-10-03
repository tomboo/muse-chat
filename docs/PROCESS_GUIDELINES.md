# Process Guidelines


## TypeScript Configuration

- Always ensure `tsconfig.json` is aligned with Vite + React best practices:
  - `"jsx": "react-jsx"`
  - `"moduleResolution": "node"`
  - `"resolveJsonModule": true`
  - `"esModuleInterop": true`
- If errors like `Property 'div' does not exist on type 'JSX.IntrinsicElements'` appear,
  this usually means the `jsx` or `moduleResolution` settings are wrong.
- Keep `tsconfig.json` changes versioned and consistent across branches.
