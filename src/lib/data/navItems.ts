import { type NavItemModel, NavCategory } from "./types";

export const navItems: NavItemModel[] = [
    {
        thumbnail: "https://picsum.photos/200",
        title: "Playlist 1",
        description: "Playlist 1 description",
        href: "/playlist/1",
        category: NavCategory.Playlist,
    }, 
    {
        thumbnail: "https://picsum.photos/300",
        title: "Artist 1",
        href: "/artist/1",
        category: NavCategory.Artist,
    },
    {
        thumbnail: "https://picsum.photos/400",
        title: "Album 1",
        description: "Album 1 description",
        href: "/album/1",
        category: NavCategory.Album,
    },
];
