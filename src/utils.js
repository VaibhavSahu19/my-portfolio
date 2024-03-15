export const getImageUrl = (path) => {
    return new URL(`/src/Assets/${path}`, document.baseURI).href;
};
