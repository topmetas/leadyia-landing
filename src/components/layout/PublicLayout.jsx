import PublicHeader from "./PublicHeader";
import PublicFooter from "./PublicFooter";
import LeadyIAPlaybookWidgetLoader from "../widget/LeadyIAPlaybookWidgetLoader";
import VerticalPlanFocus from "../landing/VerticalPlanFocus";

export default function PublicLayout({ children, showPlanFocus = null }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <PublicHeader />
      <LeadyIAPlaybookWidgetLoader />
      <main className="flex-1 pt-20">
        {children}
        {showPlanFocus ? <VerticalPlanFocus playbook={showPlanFocus} /> : null}
      </main>
      <PublicFooter />
    </div>
  );
}
