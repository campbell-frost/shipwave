import { sqliteTable, text, integer, uniqueIndex, blob } from "drizzle-orm/sqlite-core"

export const session = sqliteTable("session", {
	id: text().primaryKey().notNull(),
	userId: text("user_id").notNull().references(() => user.id),
	expiresAt: integer("expires_at").notNull(),
	createdAt: integer("created_at").notNull(),
	updatedAt: integer("updated_at").notNull(),
});

export const user = sqliteTable("user", {
	id: text().primaryKey().notNull(),
	age: integer(),
	username: text().notNull(),
	passwordHash: text("password_hash").notNull(),
	createdAt: integer("created_at").notNull(),
	updatedAt: integer("updated_at").notNull(),
},
(table) => {
	return {
		usernameUnique: uniqueIndex("user_username_unique").on(table.username),
	}
});

export const song = sqliteTable("song", {
	id: text().primaryKey().notNull(),
	createdAt: integer("created_at").notNull(),
	updatedAt: integer("updated_at").notNull(),
	userId: text("user_id").notNull().references(() => user.id),
	name: text().notNull(),
	bytes: blob().notNull(),
	durationSeconds: integer("duration_seconds"),
	trackNumber: integer("track_number"),
	fileFormat: text("file_format").notNull(),
});

