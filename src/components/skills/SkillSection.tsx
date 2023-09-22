import React from "react";

const SkillSection = () => {
  return (
    <div className="text-center">
        <h1 className="flex justify-center text-5xl text-gradient-gray"> ⛑️ Skills 🛠️ </h1>
      <div className="flex justify-center mt-10">
          <div>
            <h2 className="text-lg font-semibold mb-4">Back-End</h2>
            <ul className="ml-6 text-3xl items-center">
              <li>Skill 1</li>
              <li>Skill 2</li>
              <li>Skill 3</li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default SkillSection;
