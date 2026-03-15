import Section1 from "./components/Section1/section1"
import Section2 from "./components/Section2/section2"

const App = () => {
const users = [
  {
    img: "https://vixenbrand.com/cdn/shop/products/vixen-icon-bralette-lingerie-vixen-446652.jpg?v=1625613208&width=400",
    text: "Elegant and comfortable innerwear designed for everyday confidence.",
    button: "Shop Bra",
  },
  {
    img: "https://vixenbrand.com/cdn/shop/products/vixen-icon-thong-panty-lingerie-vixen-936413.jpg?v=1627092115&width=2000",
    text: "Premium lingerie collection crafted with soft fabrics and modern style.",
    button: "Lingerie",
  },
  {
    img: "https://vixenbrand.com/cdn/shop/files/lana_2000x.jpg?v=1613781425",
    text: "Comfort-fit underwear made for all-day support and style.",
    button: "Underwear",
  },
  {
    img: "https://w0.peakpx.com/wallpaper/501/209/HD-wallpaper-angela-white-panties-women-bra-natural-boobs-big-boobs-black-hair-actress.jpg",
    text: "Modern innerwear that blends fashion with everyday comfort.",
    button: "Signature",
  },
  {
    img: "https://cdni.pornpics.com/460/7/543/89686227/89686227_009_a896.jpg",
    text: "Discover stylish innerwear that feels as good as it looks.",
    button: "Explore",
  },
  {
    img: "https://vixenbrand.com/cdn/shop/products/vixen-icon-bralette-lingerie-vixen-505613.jpg?v=1676662419&width=2000",
    text: "Soft cotton essentials designed for ultimate comfort.",
    button: "Essentials",
  },
  {
    img: " https://cdn1337.pichunter.com/media/posts/12--8038908/conversions/515127-7fb030a0de88818491c3f715668ffa64-post_single_big.jpg",
    text: "Confidence starts with the perfect fit.",
    button: "Perfect Fit",
  },
  {
    img: "https://vixenbrand.com/cdn/shop/files/blacked-10th-anniversary-sports-bra-lingerie-blacked-978721_800x.jpg?v=1715904732 ",
    text: "Trendy lingerie styles made for modern women.",
    button: "Trendy",
  },
  {
    img: "https://vixenbrand.com/cdn/shop/products/vixen-icon-bralette-noir-lingerie-vixen-450937.jpg?v=1625617079&width=2000",
    text: "Comfortable innerwear designed for daily wear.",
    button: "Daily Wear",
  }
];
  console.log(users);

  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App