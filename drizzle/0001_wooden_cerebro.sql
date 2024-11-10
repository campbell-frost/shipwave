DROP TABLE `album`;--> statement-breakpoint
DROP TABLE `artist`;--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_song` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`user_id` text NOT NULL,
	`name` text NOT NULL,
	`bytes` blob NOT NULL,
	`duration_seconds` integer,
	`track_number` integer,
	`file_format` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_song`("id", "created_at", "updated_at", "user_id", "name", "bytes", "duration_seconds", "track_number", "file_format") SELECT "id", "created_at", "updated_at", "user_id", "name", "bytes", "duration_seconds", "track_number", "file_format" FROM `song`;--> statement-breakpoint
DROP TABLE `song`;--> statement-breakpoint
ALTER TABLE `__new_song` RENAME TO `song`;--> statement-breakpoint
PRAGMA foreign_keys=ON;