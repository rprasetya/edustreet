import BenefitsCard from "@/components/Home/BenefitsCard"
import HomeTitle from "@/components/Home/HomeTitle"


const Home = () => {
  return (
  <main className="px-32">
    <section>
      <HomeTitle/>
    </section>

    <section className="flex flex-col gap-10">
      <h2 className="tracking-wider text-4xl font-bold">Benefits</h2>
      <div className="grid grid-cols-3 gap-16">
      <BenefitsCard/>
      <BenefitsCard/>
      <BenefitsCard/>
      <BenefitsCard/>
      <BenefitsCard/>
      <BenefitsCard/>
      </div>
    </section>
  </main>
  )
}

export default Home