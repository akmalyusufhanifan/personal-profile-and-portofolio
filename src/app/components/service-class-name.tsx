export default function ServiceClassName({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-1 text-lg mb-1 md:text-xl">
      {children}
    </div>
  );
}
