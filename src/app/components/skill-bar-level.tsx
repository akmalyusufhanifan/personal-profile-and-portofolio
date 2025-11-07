export default function SkillBarLevel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-300 w-[275px] rounded-full h-1 md:w-[340px] md:h-2">
      {children}
    </div>
  );
}
