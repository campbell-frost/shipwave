import { db } from '$lib/server/db';
import { track, type Track } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  try {
    const loadedTracks = await db.select().from(track);
    return {
      tracks: loadedTracks.map(track => ({
        ...track,
        bytes: Buffer.from(track.bytes as Buffer).toString('base64')
      }))
    };
  } catch (error) {
    console.error('Failed to load tracks:', error);
    return { tracks: [] };
  }
};

export const actions = {
  createTrack: async ({ request }) => {
    try {
      const data = await request.json();
      const trackToCreate = {
        ...data,
        bytes: Buffer.from(data.bytes)
      };
      
      await db.insert(track).values(trackToCreate);
      return { success: true };
    } catch (error) {
      console.error('Failed to create track:', error);
      return { success: false };
    }
  }
};
