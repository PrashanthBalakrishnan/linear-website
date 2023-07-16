interface HeroProps {
  children: React.ReactNode
}

interface HeroElementProps {
  children: React.ReactNode
}

export const HeroTitle: React.FC<HeroElementProps> = ({ children }) => {
  return <h1 className="text-5xl my-6">{children}</h1>
}

export const HeroSubtitle: React.FC<HeroElementProps> = ({ children }) => {
  return <h1 className="text-lg mb-12">{children}</h1>
}

const Hero: React.FC<HeroProps> = ({ children }) => {
  return <div className="text-center">{children}</div>
}
export default Hero
