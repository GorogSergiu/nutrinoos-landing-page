export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-[full] bg-[#FFFAF6]">
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-5">
        {children}
      </main>
    </div>
  );
}
