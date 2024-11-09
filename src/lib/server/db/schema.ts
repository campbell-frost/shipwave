import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: text('id').primaryKey(),
	age: integer('age'),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull()
});

export const session = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export const playlist = pgTable('playlist', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id)
});

export const artist = pgTable('artist', {
	id: text('id').primaryKey(),
	name: text('name').notNull()
});

export const album = pgTable('album', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	artistId: text('artist_id')
		.notNull()
		.references(() => artist.id)
});

export const song = pgTable('song', {
	id: text('id').primaryKey(),
	title: text('title').notNull(),
	artistId: text('artist_id')
		.notNull()
		.references(() => artist.id),
	albumId: text('album_id')
		.notNull()
		.references(() => album.id)
});

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;

export type Song = typeof song.$inferSelect;

export type Album = typeof album.$inferSelect;

export type Artist = typeof artist.$inferSelect;

export type Playlist = typeof playlist.$inferSelect;