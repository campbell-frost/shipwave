import { relations } from "drizzle-orm/relations";
import { user, session, song } from "./schema";

export const sessionRelations = relations(session, ({one}) => ({
	user: one(user, {
		fields: [session.userId],
		references: [user.id]
	}),
}));

export const userRelations = relations(user, ({many}) => ({
	sessions: many(session),
	songs: many(song),
}));

export const songRelations = relations(song, ({one}) => ({
	user: one(user, {
		fields: [song.userId],
		references: [user.id]
	}),
}));