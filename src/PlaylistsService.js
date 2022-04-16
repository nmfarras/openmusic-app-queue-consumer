const { Pool } = require('pg');
 
class PlaylistsService {
  constructor() {
    this._pool = new Pool();
  }
 
  async getPlaylists(playlistId) {
    const query = {
      text: `SELECT p.id, p.name, u.username, 
      json_agg(json_build_object('id', s.id, 'title' , s.title, 'performer', s.performer)) AS songs
      FROM playlists p
      JOIN users u
      ON p.owner = u.id
      JOIN playlistsongs ps
      ON p.id = ps.playlist_id
      JOIN songs s
      ON ps.song_id = s.id
      GROUP BY p.id,u.username
      HAVING p.id = $1`,
      values: [playlistId],
    };
    const result = await this._pool.query(query);
    const playlist = result.rows[0];
    return playlist;
  }
}
 
module.exports = PlaylistsService;
