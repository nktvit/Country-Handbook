import { useState } from "react";
// @ts-ignore
import ImgsViewer from 'react-images-viewer';

interface GalleryProps {
    images: Image[];
    heading?: string;
    subheading?: string;
    preventScroll?: boolean;
    showThumbnails?: boolean;
    spinner?: React.ElementType;
    spinnerColor?: string;
    spinnerSize?: number;
    theme?: object;
}

interface Image {
    imageUrl: string;
    title: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, heading, subheading, preventScroll, showThumbnails, spinner, spinnerColor, spinnerSize, theme }) => {

    const [isOpen, setOpen] = useState(false);
    const [currImg, setCurrImg] = useState(0);

    const openImgsViewer = (index: number, event: React.MouseEvent) => {
        event.preventDefault();
        setCurrImg(index);
        setOpen(true);
    };

    const closeImgsViewer = () => {
        setCurrImg(0);
        setOpen(false);
    };

    const gotoPrev = () => {
        setCurrImg(currImg - 1);
    };

    const gotoNext = () => {
        setCurrImg(currImg + 1);
    };

    const gotoImg = (index: number) => {
        setCurrImg(index);
    };

    const handleClickImg = () => {
        if (currImg === images.length - 1) return;
        gotoNext();
    };

    const renderGallery = () => (
        <div className="flex flex-nowrap overflow-x-scroll" style={{scrollbarWidth: "thin"}}>
            {images.map((image, index) => (
                <a className="mr-5 flex-none" key={index} href={image.imageUrl} onClick={(e) => openImgsViewer(index, e)}>
                    <img src={image.imageUrl} alt={image.title} className="max-w-full max-h-52 h-auto  object-cover rounded-lg" />
                </a>
            ))}
        </div>

    );

    return (
        <div>
            {heading && <h3 className="px-5 font-bold text-xl mb-4">{heading}</h3>}
            {subheading && <p>{subheading}</p>}
            {renderGallery()}
            <ImgsViewer
                backdropCloseable
                currImg={currImg}
                imgs={images.map(img => ({ src: img.imageUrl, caption: img.title }))}
                isOpen={isOpen}
                onClickImg={handleClickImg}
                onClickNext={gotoNext}
                onClickPrev={gotoPrev}
                onClickThumbnail={gotoImg}
                onClose={closeImgsViewer}
                preventScroll={preventScroll}
                showThumbnails={showThumbnails}
                spinner={spinner}
                spinnerColor={spinnerColor}
                spinnerSize={spinnerSize}
                theme={theme}
            />
        </div>
    );
};

export default Gallery;
