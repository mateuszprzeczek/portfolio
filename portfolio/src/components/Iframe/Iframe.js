import React from 'react';
import {IframeContainer, IframeWrapper} from './IframeElements'

const Iframe = ( props ) => {

    if (!props.source) {
        return <div>Loading...</div>;
    }

    const src = props.source;     
    return (
        <IframeContainer>
            <IframeWrapper>
                <iframe src={src} title='title'></iframe>
            </IframeWrapper>
        </IframeContainer>
    );
};

export default Iframe;