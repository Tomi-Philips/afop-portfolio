import SkillCard from './SkillCard';
import ProfessionalSkill from './ProfessionalSkill';
import { Section, Skill } from '@/types/skill';

interface SkillSectionProps {
  sectionKey: string;
  section: Section;
}

export default function SkillSection({ sectionKey, section }: SkillSectionProps) {
  const getCardType = (key: string): 'large' | 'small' => {
    if (key === 'programmingLanguages') return 'large';
    return 'small';
  };

  const getGridClass = (key: string): string => {
    if (key === 'programmingLanguages') return 'grid md:grid-cols-2 gap-8';
    if (key === 'frameworks') return 'grid md:grid-cols-2 lg:grid-cols-3 gap-6';
    if (key === 'databases') return 'grid md:grid-cols-2 lg:grid-cols-3 gap-6';
    if (key === 'apiArchitecture') return 'grid md:grid-cols-2 gap-6';
    if (key === 'toolsDevops') return 'grid md:grid-cols-2 lg:grid-cols-4 gap-6';
    if (key === 'softSkills') return 'grid md:grid-cols-2 gap-6';
    return 'grid md:grid-cols-2 gap-6';
  };

  const getIconBgColor = (key: string): string => {
    if (key === 'programmingLanguages') return 'blue';
    if (key === 'frameworks') return 'green';
    if (key === 'databases') return 'purple';
    if (key === 'apiArchitecture') return 'indigo';
    if (key === 'toolsDevops') return 'orange';
    if (key === 'softSkills') return 'yellow';
    return 'gray';
  };

  const iconBgColor = getIconBgColor(sectionKey);
  const isSoftSkills = sectionKey === 'softSkills';

  return (
    <div className="mb-16">
      <div className="flex items-center mb-8">
        <div className={`w-12 h-12 bg-${iconBgColor}-100 rounded-xl flex items-center justify-center mr-4 shadow-sm`}>
          <span className="text-2xl">{section.icon}</span>
        </div>
        <h3 className="text-3xl font-bold text-gray-800">{section.title}</h3>
      </div>
      <p className="text-gray-600 mb-10 leading-relaxed text-lg max-w-4xl">{section.description}</p>
      
      <div className={getGridClass(sectionKey)}>
        {section.skills.map((skill: Skill, index: number) => {
          // Use ProfessionalSkill component for soft skills
          if (isSoftSkills) {
            return <ProfessionalSkill key={index} skill={skill} index={index} />;
          }
          // Use regular SkillCard for other skills
          return <SkillCard key={index} skill={skill} type={getCardType(sectionKey)} />;
        })}
      </div>
    </div>
  );
}