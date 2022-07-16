import { FC, ReactElement } from "react"
import { Page } from "./page"

type projectType = {
  name: string
  location: string
  startDate: string
  endDate?: string
  isOnGoing: boolean
  description: string
  skills: Array<string>
}
type projectsType = Array<projectType>

const projects:projectsType = [
  {
    name: 'Vartana',
    startDate: 'April 2022',
    location: 'Remote',
    isOnGoing: true,
    description: 'Working as a Frontend lead on a fintech product that procures loans from registered lenders on behalf of different vendors and then allows the vendor to pay-back the amount on different payment terms.',
    skills: ['React','Monorepo','Redux','Context','Formik','GraphQl', 'Storybook', 'Chromatic', 'Docker', 'Git']
  },
  {
    name: '10Pearls',
    startDate: 'Jan 2021',
    endDate: 'Apr 2022',
    location: 'Remote',
    isOnGoing: false,
    description: 'Worked as the Lead Frontend Engineer with one of our state-side clients on their Fintech product. Shipped quality features with proper test coverage. Incrementally refactored existing application with the state side frontend team.',
    skills: ['React','Redux','AG Grid','Context','Storybook', 'Docker', 'Git']
  },
  {
    name: 'Veeve.io',
    startDate: 'Jan 2020',
    endDate: 'Jan 2021',
    location: 'Remote',
    isOnGoing: false,
    description: 'Veeve is a Computer Vision startup that provides in-store cashier-less checkout solutions. Worked in the capacity of Lead React Engineer. Our application now daily helps thousands of customers in Kroger to shop smarter.',
    skills: ['React','Typescript','Redux','Context','GraphQl', 'Graphana', 'Docker', 'Git']
  },
]

const Project:FC<projectType> = ({
  name,
  startDate,
  endDate='',
  location,
  isOnGoing,
  description,
  skills
}):ReactElement => {
  return (
    /* Project CSS */
    <div className="dark:text-zinc-300 flex flex-col gap-4 p-4 shadow-project dark:shadow-black dark:border-black border-2 w-full xl:w-[80%]">
      {/* Project_Banner CSS */}
      <div className="text-personal-brown-30 dark:text-zinc-300">
        {/* Project_Title CSS */}
        <div className="flex justify-between">
          {/* Project_Name CSS */}
          <span className="font-semibold text-sm xl:text-base">{name}</span>
          {/* Project_Duration CSS */}
          <span className="font-normal text-2xs xl:text-xs">
            {startDate} - {isOnGoing ? 'Current' : endDate}
          </span>
        </div>
        {/* Project_Location CSS */}
        <div className="text-2xs xl:text-xs">
          {location}
        </div>
      </div>
      {/* Project_Description CSS */}
      <span className="text-xs xl:text-sm italic">
        {description}
      </span>
      {/* Project_Skills CSS */}
      <div className="flex flex-wrap gap-4">
        {skills.length > 0
          ? skills.map((skill, index) => {
            return (
              // Project_Skill CSS
              <div className="text-2xs xl:text-xs py-1 px-2 rounded-[4px] shadow-skill">
                {skill}
              </div>
            )
          }) : null
        }
      </div>
    </div>
  )
}

export const Projects:FC = ():ReactElement => {
  return (
    <Page className="flex flex-col gap-8 overflow-y-auto py-4 px-8">
      {projects.map((project) => {
        return (
          <Project
            key={project.name}
            {...project}
          />
        )
      })}
    </Page>
  );
};
