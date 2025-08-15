import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export interface Photo {
    url: string;
    thumbnail?: string;
}
interface PhotoGalleryProps {
    photos?: Photo[];
    title?: string;
    className?: string;
}
export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
    photos = [],
    title = "Photo Gallery",
    className = ""
}) => {
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(photos[0]);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const navigatePhoto = (direction: number): void => {
        const newIndex = selectedIndex + direction;
        if (newIndex >= 0 && newIndex < photos.length) {
            setSelectedIndex(newIndex);
            setSelectedPhoto(photos[newIndex]);
        }
    };

    if (!photos || photos.length === 0) {
        return (
            <div className="text-center py-12">
                <div className="text-gray-500 text-lg">No photos to display</div>
            </div>
        );
    }

    return (
        <div className={`w-full h-full max-w-7xl mx-auto p-4 ${className}`}>
            <div className="relative inset-0 bg-black flex flex-col items-center justify-center z-50 p-4 h-full gap-10">
                {selectedPhoto ?
                    <>
                        {title && (
                            <h2 className="text-3xl font-bold text-gray-300 mx-4 text-center">{title}</h2>
                        )}

                        {/* Navigation Buttons */}
                        {selectedIndex > 0 && (
                            <button
                                onClick={() => navigatePhoto(-1)}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-60 bg-black/50 rounded-full p-3"
                                aria-label="Previous photo"
                            >
                                <FontAwesomeIcon icon={faChevronLeft} className="w-6 h-6" />
                            </button>
                        )}

                        {selectedIndex < photos.length - 1 && (
                            <button
                                onClick={() => navigatePhoto(1)}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-60 bg-black/50 rounded-full p-3"
                                aria-label="Next photo"
                            >
                                <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
                            </button>
                        )}

                        {/* Main Image */}
                        <div className="max-w-5xl max-h-[Calc(100%_-_210px)] min-h-[Calc(100%_-_210px)] flex flex-col items-center justify-between">
                            <div className="flex items-center justify-center h-full">
                                <img
                                    src={selectedPhoto.url}
                                    alt={`Photo ${selectedIndex + 1}`}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>

                            {/* Photo Counter */}
                            <div className="mt-2 text-white/70 text-sm flex items-end">
                                {selectedIndex + 1} of {photos.length}
                            </div>
                        </div>

                        {/* Thumbnail Strip */}
                        <div className="flex space-x-2 max-w-full overflow-x-auto py-2 h-36 [scrollbar-width:thin]">
                            {photos.map((photo: Photo, index: number) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setSelectedPhoto(photo);
                                        setSelectedIndex(index);
                                    }}
                                    className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all cursor-pointer ${index === selectedIndex
                                        ? 'border-white'
                                        : 'border-transparent hover:border-white/50'
                                        }`}
                                    aria-label={`Go to photo ${index + 1}`}
                                >
                                    <img
                                        src={photo.thumbnail || photo.url}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </>
                    :
                    <p>
                        No photos found!
                    </p>
                }
            </div>
        </div>
    );
};