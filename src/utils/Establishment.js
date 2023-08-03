export const HOST = import.meta.env.DEV ? "http://localhost:3000" : import.meta.env.VITE_SERVER;
export const specificEstablishment = `${HOST}/establishment/fetch-specific`;
export const changeAccepted = `${HOST}/establishment/change-accepted`
export const estabBest = `${HOST}/establishment/getEstabBest`
