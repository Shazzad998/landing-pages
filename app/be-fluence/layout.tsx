import NavItem from "@/components/be-fluence/nav-item"
import {
  ContactIcon,
  GameController03Icon,
  Home01FreeIcons,
} from "@hugeicons/core-free-icons"

export default function BeFluenceLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col h-screen w-full relative">
      <nav className="fixed top-1/2 left-4 z-50 flex w-fit -translate-y-1/2 flex-col items-center gap-2 rounded-full border p-1">
        {" "}
        <NavItem
          icon={Home01FreeIcons}
          href="#"
          label="Home"
          active={true}
        />{" "}
        <NavItem icon={GameController03Icon} href="#" label="Home" />{" "}
        <NavItem icon={ContactIcon} href="#" label="Home" />{" "}
      </nav>

      <main>
        {children}
      </main>
    </div>
  )
}

