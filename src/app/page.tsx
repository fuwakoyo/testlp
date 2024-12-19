import Hero from "@/components/pages/Hero"
import News from "@/app/features/news/News"
import Product from "@/components/pages/Product"


export default function page() {
  return (
    <main>
        <Hero/>
        <Product/>
        <News/>
    </main>
  );
}
