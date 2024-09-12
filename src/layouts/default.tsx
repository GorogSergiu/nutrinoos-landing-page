export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-[full] bg-[#113628]">
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-5">
        {children}
      </main>
    </div>
  );
}
