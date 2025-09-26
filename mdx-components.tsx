import type { MDXComponents } from 'mdx/types'
 
const components: MDXComponents = {
  table: ({ children }) => <table className="table-auto">{children}</table>,
  th: ({ children }) => <th className="px-4 py-2">{children}</th>,
  td: ({ children }) => <td className="px-4 py-2">{children}</td>,
  tr: ({ children }) => <tr className="border-b">{children}</tr>,
  tbody: ({ children }) => <tbody className="bg-white">{children}</tbody>,
  thead: ({ children }) => <thead className="bg-gray-100">{children}</thead>,
  h1: ({ children }) => <h1 className="text-2xl font-bold">{children}</h1>,
}
 
export function useMDXComponents(): MDXComponents {
  return components
}