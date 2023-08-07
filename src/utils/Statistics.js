export const HOST = import.meta.env.DEV ? "http://localhost:3000/statistics" : import.meta.env.VITE_SERVER + '/statistics';
export const getPlaylist = `${HOST}/getPlaylist`;
export const conversionRate = `${HOST}/conversionRate`;