import Title from './Title/Title';
import ImageItem from './ImageItem/ImageItem';
import styles from './Gallery.module.css';

function Gallery(){
    return(
        <section >
            <Title text = "Gallery"/>
            <div className={styles.gallery}>
                <ImageItem/>
                <ImageItem/>
                <ImageItem/>
                <ImageItem/>
            </div>
           
        </section>
    );

}
export default Gallery;