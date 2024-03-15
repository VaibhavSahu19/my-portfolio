export const getImageUrl = (path) => {
    return new URL(`/Assets/${path}`, document.baseURI).href;
};
