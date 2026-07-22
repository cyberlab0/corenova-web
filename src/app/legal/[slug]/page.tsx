import { legalPages } from "@/lib/legal-data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const page = legalPages[params.slug as keyof typeof legalPages];
  
  if (!page) {
    return { title: "Not Found" };
  }
  
  return {
    title: `${page.title} | Corenova Technologies Ltd`,
    description: `Read the ${page.title} for Corenova Technologies Ltd.`,
  };
}

export default async function LegalPage(props: Props) {
  const params = await props.params;
  const page = legalPages[params.slug as keyof typeof legalPages];

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">{page.title}</h1>
        <p className="text-muted-foreground text-sm mb-12">Last Updated: {page.lastUpdated}</p>
        
        <div className="prose prose-invert prose-p:leading-relaxed prose-headings:font-heading prose-a:text-primary max-w-none">
          {page.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="mb-6 text-muted-foreground text-lg leading-relaxed">{paragraph}</p>
          ))}
        </div>

        <div className="mt-16 p-6 rounded-xl bg-primary/10 border border-primary/20">
          <p className="text-sm text-primary">
            <strong>Note for Legal Counsel:</strong> This is a placeholder template. Please review and update this document to ensure compliance with applicable laws before production use.
          </p>
        </div>
      </div>
    </div>
  );
}
