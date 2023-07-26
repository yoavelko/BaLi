const HOST = import.meta.env.DEV ? "http://localhost:3000" : import.meta.env.VITE_SERVER;
export const sendSong = `${HOST}/user/send`;
export const getDummyIsrael = `${HOST}/user/dummy/israel`;
export const getDummyOverall = `${HOST}/user/dummy/overall`;
export const getRequested = `${HOST}/user/requested`;