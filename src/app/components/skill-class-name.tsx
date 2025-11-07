export default function SkillClassName({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2
      className={`bg-gray-200 px-2 py-1 rounded-lg text-md mb-2 inline-block md:text-lg`}
    >
      {children}
    </h2>
  );
}
