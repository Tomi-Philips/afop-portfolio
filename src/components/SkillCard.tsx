import { IconType } from 'react-icons';

// Define types
interface Skill {
  name: string;
  icon: IconType | string | null;
  bgGradient: string;
  tag?: string;
  tagColor?: string;
  description: string;
  features?: string[];
  iconText?: string;
}

interface SkillCardProps {
  skill: Skill;
  type?: 'large' | 'small';
}

export default function SkillCard({ skill, type = 'small' }: SkillCardProps) {
  const Icon = skill.icon;
  const isReactIcon = typeof Icon !== 'string' && Icon !== null;
  
  // For large skill cards (Programming Languages)
  if (type === 'large') {
    return (
      <div className={`group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-${skill.tagColor || 'blue'}-200 transition-all duration-500 transform hover:-translate-y-2`}>
        <div className="flex items-start mb-4">
          <div className={`w-12 h-12 bg-gradient-to-br ${skill.bgGradient} rounded-xl flex items-center justify-center mr-4 shadow-md`}>
            {isReactIcon ? (
              <Icon className="text-white text-2xl" />
            ) : (
              <span className="text-xl text-white font-bold">{skill.iconText || skill.name.substring(0, 2)}</span>
            )}
          </div>
          <div>
            <h4 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{skill.name}</h4>
            {skill.tag && (
              <span className={`text-xs font-semibold text-${skill.tagColor || 'blue'}-600 bg-${skill.tagColor || 'blue'}-50 px-3 py-1 rounded-full`}>{skill.tag}</span>
            )}
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed text-base">{skill.description}</p>
      </div>
    );
  }

  // For small skill cards (Frameworks, Databases, Tools)
  return (
    <div className={`group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-${skill.tagColor || 'blue'}-200 transition-all duration-300 ${skill.name === 'React.js' || skill.name === 'Next.js' ? 'transform hover:-translate-y-1' : ''}`}>
      <div className="flex items-start mb-3">
        <div className={`w-10 h-10 bg-gradient-to-br ${skill.bgGradient} rounded-lg flex items-center justify-center mr-3 shadow-sm`}>
          {isReactIcon ? (
            <Icon className="text-white text-xl" />
          ) : (
            <span className="text-sm text-white font-bold">{skill.iconText || skill.name.substring(0, 2)}</span>
          )}
        </div>
        <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">{skill.name}</h4>
      </div>
      <p className="text-gray-600 leading-relaxed text-sm">{skill.description}</p>
    </div>
  );
}