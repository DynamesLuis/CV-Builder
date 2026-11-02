import EditNavItem from "./EditNavItem";
import navItems from "./navItems";

export default function EditNav({
  activeSection,
  onChangeSection,
  setIsEditing,
}) {
  return (
    <nav className="flex gap-2 justify-around sticky top-0 bg-white pb-4">
      {navItems.map((navItem) => (
        <EditNavItem
          key={navItem.id}
          label={navItem.label}
          onChangeSection={onChangeSection}
          id={navItem.id}
          activeSection={activeSection}
          icon={navItem.icon}
          setIsEditing={setIsEditing}
        />
      ))}
    </nav>
  );
}
