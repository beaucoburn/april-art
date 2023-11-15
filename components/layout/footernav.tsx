const footlinks = [
  {
    text: "Home",
    url: "/",
    key: "home",
  },
  {
    text: "All Products",
    url: "/search",
    key: "products",
  },
  {
    text: "Prints",
    url: "/prints",
    key: "prints",
  },
  {
    text: "Stickers",
    url: "/stickers",
    key: "stickers",
  },
  {
    text: "Pins",
    url: "/pins",
    key: "pins",
  },
  {
    text: "Coloring Pages",
    url: "/coloring-pages",
    key: "pages",
  }
];


export default function FooterNav() {
  const footList = footlinks.map((footlinks) => {
    return (
      <li key='{footlinks.key}'>
        <a href={footlinks.url}>
          {footlinks.text}
        </a>
      </li>
    );
  })

  return (
    <ul className="mt-2 hidden gap-2 text-sm md:flex md:items-center">{footList}</ul>
  )
}