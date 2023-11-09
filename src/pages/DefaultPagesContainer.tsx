import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Container, Group, NavLink, Skeleton } from "@mantine/core";
import { IconAdOff } from "@tabler/icons-react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const DefaultPagesContainer = () => {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate()

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <IconAdOff />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <NavLink label="Página inicial" onClick={() => navigate("/")}/>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
