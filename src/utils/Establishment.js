export const HOST = import.meta.env.DEV ? "http://localhost:3000/establishment" : import.meta.env.VITE_SERVER + '/establishment';
export const specificEstablishment = `${HOST}/fetch-specific`;
export const changeAccepted = `${HOST}/change-accepted`;
export const estabBest = `${HOST}/getEstabBest`;
export const changeRequested = `${HOST}/change-requested`;
export const getPlaylist = `${HOST}/getPlaylist`;
export const pushToPlayed = `${HOST}/push-to-played`;
