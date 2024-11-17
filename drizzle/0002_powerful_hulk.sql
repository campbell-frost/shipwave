CREATE TABLE `track` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`name` text NOT NULL,
	`bytes` blob NOT NULL,
	`duration_seconds` integer,
	`track_number` integer,
	`file_format` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
