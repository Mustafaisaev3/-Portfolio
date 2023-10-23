import About from "@/components/Blocks/About"
import Main from "@/components/Blocks/Main"
import CodingSkills from "@/components/Blocks/CodingSkills"
import LanguageSkills from "@/components/Blocks/LanguageSkills"
import Contact from "@/components/Blocks/Contact"

export default function Home() {
  return (
    <div className='h-full'>
      <Main />
      <About />
      <CodingSkills />
      <LanguageSkills />
      <Contact />
    </div>
  )
}


