import { sqliteTable, text, integer, blob } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
	id: text('id').primaryKey(),
	createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
	updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
	age: integer('age'),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull()
});

export const session = sqliteTable('session', {
	id: text('id').primaryKey(),
	createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
	updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull()
});

export const artist = sqliteTable('artist', {
	id: text('id').primaryKey(),
	createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
	updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
	name: text('name').notNull(),
	description: text('description')
});

export const album = sqliteTable('album', {
	id: text('id').primaryKey(),
	createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
	updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
	name: text('name').notNull(),
	artistId: text('artist_id')
		.notNull()
		.references(() => artist.id),
});

export const song = sqliteTable('song', {
	id: text('id').primaryKey(),
	createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
	updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	artistId: text('artist_id')
		.notNull()
		.references(() => artist.id),
	albumId: text('album_id')
		.references(() => album.id),
	name: text('name').notNull(),
	bytes: blob('bytes').notNull(),
	duration: integer('duration_seconds'),
	trackNumber: integer('track_number'),
	fileFormat: text('file_format').notNull()
});

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;

export type Artist = typeof artist.$inferSelect;

export type Album = typeof album.$inferSelect;

export type Song = typeof song.$inferSelect;	
