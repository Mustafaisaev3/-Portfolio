import React from 'react'
import BlockTitle from '../BlockTitle'
import SkillIcon from '../SkillIcon'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { BiLogoCss3 } from 'react-icons/bi'
import { FaReact } from 'react-icons/fa'
import { SiJavascript, SiTypescript } from 'react-icons/si'
import { FaVuejs, FaNodeJs } from 'react-icons/fa'
import { TbPackages } from 'react-icons/tb'

const CodingSkills = () => {
  return (
    <div className='px-[8%] py-[70px] border-t-[1px] border-[#585d65]' id='skills'>
        <BlockTitle title='Coding Skills' subtitle='Developing With' />
        <div className='w-full h-auto grid grid-cols-3 gap-x-3 gap-y-10'>
            <div className='flex flex-col'>
                <SkillIcon icon={AiFillHtml5} />
                <ul className='w-full text-[#68e0cf]'>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>Адаптивная верстка</span>
                    </li>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>Респонсивная верстка</span>
                    </li>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>Кросбраузерная Верстка</span>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <SkillIcon icon={BiLogoCss3} />
                <ul className='w-full text-[#68e0cf]'>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>Flexbox</span>
                    </li>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>Grid</span>
                    </li>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>Css анимация</span>
                    </li>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>Scss, Sass</span>
                    </li>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>Tailwind</span>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <SkillIcon icon={SiJavascript} />
                <ul className='w-full text-[#68e0cf]'>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>Продвинутый уровень</span>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <SkillIcon icon={SiTypescript} />
                <ul className='w-full text-[#68e0cf] pb-1'>
                    <li className='flex items-center'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>Продвинутый уровень</span>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <SkillIcon icon={FaReact} />
                <ul className='w-full text-[#68e0cf]'>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>React</span>
                    </li>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>Next13</span>
                    </li>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>Redux, Redux hunk, Redux Saga</span>
                    </li>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>Zustand</span>
                    </li>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>React Formik, React Hooks Form</span>
                    </li>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>Framer Motion, Styled Components</span>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <SkillIcon icon={FaVuejs} />
                <ul className='w-full text-[#68e0cf]'>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>Vue3 (Options/Composition)</span>
                    </li>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>Nuxt</span>
                    </li>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>Vuex</span>
                    </li>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>Pinia.js</span>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <SkillIcon icon={FaNodeJs} />
                <ul className='w-full text-[#68e0cf]'>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>Express</span>
                    </li>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>MongoDB</span>
                    </li>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>Mongoose</span>
                    </li>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>Prisma</span>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <SkillIcon icon={AiFillGithub} />
                <ul className='w-full text-[#68e0cf]'>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>Add, Commit, Push, Clone, Merge, Rebase, Diff</span>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <SkillIcon icon={TbPackages} />
                <ul className='w-full text-[#68e0cf]'>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>WebSockets</span>
                    </li>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>REST&JSON</span>
                    </li>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>Axios</span>
                    </li>
                    <li className='flex items-center pb-1'>
                        <span className='w-[5px] h-[5px] rounded-full bg-[#68e0cf] mr-2 inline-block'></span>
                        <span className='text-[#ffffff] text-sm'>Third party APIs</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default CodingSkills