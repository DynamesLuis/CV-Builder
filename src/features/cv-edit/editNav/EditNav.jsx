import EditNavItem from "./EditNavItem";
import navItems from "./navItems";

export default function EditNav({ activeSection, onChangeSection }) {
  return (
    <nav className="flex gap-2">
      {navItems.map((navItem) => (
        <EditNavItem
          key={navItem.id}
          label={navItem.label}
          onChangeSection={onChangeSection}
          id={navItem.id}
          activeSection={activeSection}
          icon={navItem.icon}
        />
      ))}
    </nav>
  );
}
