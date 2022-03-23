import { useCallback, useEffect, useState } from "react";
import { getExperiences, Experience } from "../api/get-experiences";
import { Section } from "./Section";

export function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  const init = useCallback(async () => {
    try {
      const e = await getExperiences();
      setExperiences(e);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    init();
  }, []);

  return (
    <Section id="experience" header="Experience">
      <div className="px-8">
        <ul className="relative border-l-2 border-300">
          {experiences.map((experience) => {
            return (
              <li
                key={experience.title + experience.organization.name}
                className="mb-10 md:mb-20 ml-5 list-none"
              >
                <span
                  className="
                  flex 
                  absolute 
                  -left-8 
                  justify-center 
                  items-center 
                  w-16 
                  h-16 
                  bg-white 
                  border 
                  rounded  
                  shadow 
                  p-3
                  "
                >
                  {experience.image && (
                    <img
                      loading="lazy"
                      alt={`${experience.organization.name} Logo`}
                      src={experience.image}
                    ></img>
                  )}
                </span>
                <p className="font-bold">
                  {experience.title} at
                  <a className="ml-1" href={experience.organization.website}>
                    {experience.organization.name}
                  </a>
                </p>
                <p>{experience.description}</p>
                <p>
                  <span>- </span>
                  <time className="text-sm italic font-bold">
                    {experience.toFrom}
                  </time>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
