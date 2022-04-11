/// <reference types="react" />
import '@google/model-viewer';
import './Model.css';
export interface ModelViewer extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, 'ref'> {
    src: string;
    id?: string;
    'ios-src'?: string;
    'camera-controls'?: boolean;
    'camera-orbit'?: string;
    'disable-zoom'?: boolean;
    'auto-rotate'?: boolean;
    'skybox-image'?: string;
    'background-image'?: string;
    'environment-image'?: string;
    exposure?: string;
    oncontextmenu?: string;
    phi?: string;
    ar?: boolean;
    autoplay?: boolean;
    'shadow-intensity'?: number | string;
    'ar-scale'?: number | string;
    style?: React.CSSProperties & {
        '--poster-color'?: string;
    };
    ref?: React.MutableRefObject<ModelViewer>;
    toBlob?: ({ idealAspect }: {
        idealAspect: boolean;
    }) => Promise<Blob>;
    poster?: string;
    alt?: string;
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'model-viewer': ModelViewer;
        }
    }
}
export declare function Model(props: ModelViewer): JSX.Element;
export default Model;
