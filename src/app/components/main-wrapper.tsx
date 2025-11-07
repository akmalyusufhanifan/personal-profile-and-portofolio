export default function MainWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main
      className={`min-h-[calc(100vh-60px)] mt-[60px] flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center md:px-40 w-full ${className}`}
    >
      {children}
    </main>
  );
}
