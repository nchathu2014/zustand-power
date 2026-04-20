import { useAppStore } from "../store/appStore";

export function Navbar() {
  const user = useAppStore((state) => state.user); // accessing user slice
  const theme = useAppStore((state) => state.theme); // accessing theme slice
  const logout = useAppStore((state) => state.logout);
  const toggleTheme = useAppStore((state) => state.toggleTheme);

  console.log(user, theme);

  return (
    <nav>
      <span>Theme: {theme}</span>
      <button onClick={toggleTheme}>Toogle Theme</button>

      {user ? (
        <>
          <span>Hi!, {user?.name}</span>{" "}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <span>Guest</span>
      )}
    </nav>
  );
}
