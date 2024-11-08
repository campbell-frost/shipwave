export enum NavCategory {
  Playlist = "playlist",
  Artist = "artist",
  Album = "album",
}

export type NavItemModel = {
  thumbnail: string;
  title: string;
  description?: string;
  href: string;
  category: NavCategory;
}

export type DashboardItemModel = {
  thumbnail: string;
  title: string;
  href: string;
  color: string;
}