interface InfoCardProps {
  title: string;
  description: string;
  href?: string;
}

export default function InfoCard({ title, description, href }: InfoCardProps) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      {...(href ? { href } : {})}
      className="block bg-white rounded-lg p-6 shadow-sm border border-primary/5 hover:shadow-md transition-shadow"
    >
      <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-primary mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray leading-relaxed">{description}</p>
    </Wrapper>
  );
}
