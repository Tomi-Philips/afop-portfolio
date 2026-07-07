import HeaderBanner from "@/components/header-banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkillSection from "@/components/SkillSection";
import { skillsData } from "@/components/data/skillsData";

export default function Skills() {
  return (
    <>
      <HeaderBanner />
      <Navbar />
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-800 rounded-full mb-6 shadow-lg">
              <span className="text-3xl">🚀</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-6">
              Skills & Expertise
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A comprehensive showcase of my technical capabilities and professional strengths
            </p>
            <div className="w-32 h-1.5 bg-blue-900 mx-auto mt-8 rounded-full shadow-sm"></div>
          </div>

          {/* Technical Skills Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 inline-flex items-center">
                Technical Skills
                <span className="ml-4 text-3xl animate-bounce">💻</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Mastering the tools and technologies that power modern digital solutions
              </p>
            </div>

            {/* Dynamically render all technical sections */}
            {Object.keys(skillsData).filter(key => key !== 'softSkills').map((key) => (
              <SkillSection key={key} sectionKey={key} section={skillsData[key]} />
            ))}
          </section>

          {/* Soft Skills Section */}
          <section className="mb-20">
            <SkillSection sectionKey="softSkills" section={skillsData.softSkills} />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}