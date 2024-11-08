import { type NavItemModel, NavCategory } from "./types";

export const navItems: NavItemModel[] = [
    {
        thumbnail: "https://picsum.photos/536/354",
        title: "Playlist 1",
        description: "Playlist 1 description",
        href: "/playlist/1",
        category: NavCategory.Playlist,
    }, 
    {
        thumbnail: "https://picsum.photos/536/354",
        title: "Artist 1",
        description: "Artist 1 description",
        href: "/artist/1",
        category: NavCategory.Artist,
    },
    {
        thumbnail: "https://picsum.photos/536/354",
        title: "Album 1",
        description: "Album 1 description",
        href: "/album/1",
        category: NavCategory.Album,
    },
];
