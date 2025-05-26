import { 
  profileData,
  experienceData,
  educationData,
  skillsData,
  interestsData,
  projectsData
} from "@/lib/data";
import ProfileHeader from "@/components/profile-header";
import ExperienceSection from "@/components/experience-section";
import EducationSection from "@/components/education-section";
import SkillsSection from "@/components/skills-section";
import InterestsSection from "@/components/interests-section";
import ProjectsSection from "@/components/projects-section";
import SectionContainer from "@/components/section-container";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <SectionContainer id="profile">
          <ProfileHeader profile={profileData} />
        </SectionContainer>
        
        <SectionContainer id="experience">
          <ExperienceSection experiences={experienceData} />
        </SectionContainer>
        
        <SectionContainer id="education">
          <EducationSection educations={educationData} />
        </SectionContainer>
        
        <SectionContainer id="skills">
          <SkillsSection skills={skillsData} />
        </SectionContainer>
        
        <SectionContainer id="interests">
          <InterestsSection interests={interestsData} />
        </SectionContainer>
        
        <SectionContainer id="projects">
          <ProjectsSection projects={projectsData} />
        </SectionContainer>
      </div>
    </div>
  );
}