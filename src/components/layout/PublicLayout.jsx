import PublicHeader from "./PublicHeader";
import PublicFooter from "./PublicFooter";

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <PublicFooter />
    </div>
  );
}
