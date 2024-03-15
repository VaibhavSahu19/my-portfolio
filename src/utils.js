export const getImageUrl = (path) => {
    return new URL(`/src/assets/${path}`, document.baseURI).href;
};
