import React from 'react';
import { Assessment, Dashboard, Group, Home, Mail, PermMedia } from '@material-ui/icons';

export const SidebarData = [
  {
    title: "Home",
    icon: <Home />,
    path: "/home",
  },
  {
    title: "Mailbox",
    icon: <Mail />,
    path: "/mailbox"
  },
  {
    title: "Analytics",
    icon: <Assessment />,
    path: "/analytics"
  },
  {
    title: "Dashboard",
    icon: <Dashboard />,
    path: "/dashboard"
  },
  {
    title: "Friends",
    icon: <Group />,
    path: "/friends"
  },
  {
    title: "Images",
    icon: <PermMedia />,
    path: "/images"
  },
];