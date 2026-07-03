import PublicHeader from "./PublicHeader";
import PublicFooter from "./PublicFooter";
import LeadyIAPlaybookWidgetLoader from "../widget/LeadyIAPlaybookWidgetLoader";

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <PublicHeader />
      <LeadyIAPlaybookWidgetLoader />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <PublicFooter />
    </div>
  );
}
