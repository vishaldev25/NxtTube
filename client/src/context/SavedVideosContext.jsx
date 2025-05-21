import { useState, createContext, useContext, useEffect } from 'react';

const SavedVideosContext = createContext();

export const SavedVideosProvider = ({children}) => {
    const [savedVideos, setSavedVideos] = useState(() => {
        const storedVideos = localStorage.getItem('savedVideos');
        return storedVideos ? JSON.parse(storedVideos) : [];
    });

    useEffect(() => {
        localStorage.setItem('savedVideos', JSON.stringify(savedVideos))
    }, [savedVideos]);
    
    const toggleSaveVideo = (video) => {
        setSavedVideos((prev) => {
            const isAlreadySaved = prev.some((vid) => vid.videoUrl === video.videoUrl);
            if (isAlreadySaved) {
                return prev.filter((vid) => vid.videoUrl !== video.videoUrl);
            } else {
                return [...prev, video];
            }
        })
    }

    return (
        <SavedVideosContext.Provider value={{savedVideos, toggleSaveVideo}}>
            {children}
        </SavedVideosContext.Provider>
    )
}


// eslint-disable-next-line react-refresh/only-export-components
export const useSavedVideos = ()=> useContext(SavedVideosContext)