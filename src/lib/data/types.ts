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

export type SongData = {
	src: string;
	duration: number;
}

export type PlaybackModel = {
  thumbnail: string;
  title: string;
	artist: string;
	songData: SongData;
};

export enum Flow {
	Repeat = 'repeat',
	Repeat1 = 'repeat-1',
	Repeat2 = 'repeat-2'
}
