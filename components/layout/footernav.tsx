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
    url: "/search/prints",
    key: "prints",
  },
  {
    text: "Stickers",
    url: "/search/stickers",
    key: "stickers",
  },
  {
    text: "Pins",
    url: "/search/pins",
    key: "pins",
  },
  {
    text: "Coloring Pages",
    url: "/search/coloring-pages",
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