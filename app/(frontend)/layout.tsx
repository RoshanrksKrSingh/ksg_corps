import FloatingContact from "@/components/ui/FloatingContact";
// File: app/frontend/layout.tsx
export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full">
      {children}
      {/* ✅ 3. Floating Contact Added Here (Overlay on top of everything) */}
      <FloatingContact />
    </section>
  );
}