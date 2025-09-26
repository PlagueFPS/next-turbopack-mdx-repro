import { useMDXComponents } from "@/mdx-components";

export default async function Home() {
  const { default: MDXContent } = await import("../test-content.mdx")
  const components = useMDXComponents()

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <MDXContent components={components}/>
    </div>
  );
}
