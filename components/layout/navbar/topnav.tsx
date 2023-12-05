const navlinks = [
    {
      text: "Patreon",
      url: "https://www.patreon.com/Dilliepickles",
      key: "patreon",
    },
    {
      text: "Portfolio",
      url: "/portfolio",
      key: "portfolio",
    },
    {
      text: "Contact",
      url: "/contact",
      key: "contact",
    },
    {
      text: "Instagram",
      url: "https://www.instagram.com/dilliepickles/",
      key: "instagram",
    },
    {
      text: "Products",
      url: "/search/all",
      key: "products",
    }
  ];


  export default function TopNav() {
    const navList = navlinks.map((navlinks) => {
      return (
        <li key='{navlinks.key}'>
          <a href={navlinks.url}>
            {navlinks.text}
          </a>
        </li>
      );
    })

    return (
      <ul className="mt-2 hidden gap-2 text-sm md:flex md:items-center">{navList}</ul>
    )
  }