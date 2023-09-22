import HeroSection from "@/components/hero/HeroSection";
import SkillSection from "@/components/skills/SkillSection";
import {PinnedRepo} from "@/components/pinnedRepo/PinnedRepo";
import { Repository } from "@/lib/types";


export default function Page({pinnedItems}: {pinnedItems: Repository[]}
) {
  return (
    <main>
      <HeroSection />
      <SkillSection />
      <PinnedRepo />

    </main>
  );
}
