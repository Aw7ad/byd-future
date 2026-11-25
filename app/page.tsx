import { HomeSection } from "@/components/sections/HomeSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { PlanningSection } from "@/components/sections/PlanningSection";
import { OrganizingSection } from "@/components/sections/OrganizingSection";
import { DirectingSection } from "@/components/sections/DirectingSection";
import { ControlSection } from "@/components/sections/ControlSection";
import { ConclusionSection } from "@/components/sections/ConclusionSection";

export default function Page() {
  return (
    <main id="main" tabIndex={-1}>
      <HomeSection />
      <ProjectSection />
      <PlanningSection />
      <OrganizingSection />
      <DirectingSection />
      <ControlSection />
      <ConclusionSection />
    </main>
  );
}
