# Turbopack MDX + remark-gfm Bug Reproduction (`mdxRs`)

This repo demonstrates that remark plugins (e.g. `remark-gfm`) do **not** work with Turbopack and the `mdxRs` flag enabled in Next.js.

## Steps to Reproduce

1. **Clone and install:**
   ```
   git clone <this-repo>
   cd next-turbopack-mdx-repro
   npm install
   ```

2. **Run the dev server:**
   ```
   npm run dev
   ```

3. **Open the app:**  
   Visit [http://localhost:3000](http://localhost:3000).

4. **Expected:**  
   The table in `test-content.mdx` should render as an HTML table (since `remark-gfm` is enabled).

5. **Actual:**  
   The table renders as plain text, not as an HTML table.  
   This shows that `remark-gfm` is not applied.

## Key Files

- `next.config.ts`:  
  ```ts
  experimental: { mdxRs: true }
  withMDX({ options: { remarkPlugins: ["remark-gfm"] } })
  ```
- `test-content.mdx`:  
  Contains a markdown table.
- `app/page.tsx`:  
  Dynamically imports and renders the MDX file.

## Environment

- Next.js 15.6.0-canary.31
- `@next/mdx` 15.5.4
- `remark-gfm` 4.0.1
