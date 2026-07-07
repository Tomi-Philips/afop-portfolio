interface Skill {
  name: string;
  icon: any; // Can be a React component or string
  bgGradient: string;
  tag?: string;
  tagColor?: string; // Make it optional to match the main interface
  description: string;
  features?: string[];
  iconText?: string;
}

interface ProfessionalSkillProps {
  skill: Skill;
  index: number;
}

export default function ProfessionalSkill({ skill, index }: ProfessionalSkillProps) {
  return (
    <div className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 p-6 relative overflow-hidden">
      {/* Top gradient accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      <div className="flex items-start gap-4">
        {/* Icon with gradient background */}
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.bgGradient} bg-opacity-10 flex items-center justify-center flex-shrink-0`}>
          <span className="text-2xl">{skill.icon}</span>
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-semibold text-gray-900 mb-1">{skill.name}</h4>
          <p className="text-sm text-gray-600 leading-relaxed">{skill.description}</p>
          
          {/* Skill tags */}
          {skill.features && skill.features.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {skill.features.map((feature, idx) => (
                <span 
                  key={idx}
                  className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-${skill.tagColor || 'blue'}-50 text-${skill.tagColor || 'blue'}-700 border border-${skill.tagColor || 'blue'}-100`}
                >
                  {feature}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}