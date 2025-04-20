import React, { useCallback, useEffect, useState } from "react";
import icon from './arrowdown.svg';

const SelectBox: React.FC = () => {
    const [showList, setShowList] = useState<Boolean>(false);
    const [style, setStyle] = useState<React.CSSProperties>({})

    //ShowList Değerini Günceller.
    const clickTrigger = () => {
        setShowList(!showList);
    }

    //Seçim Kutusunun Açılıp Kapanma Olayını Sağlar.
    const toggleSelectBox = useCallback(() => {
        const dynamicHeight = (document.getElementById('SelectBoxItems')?.childNodes?.length || 0) * 25;
        if (showList) {

            setStyle({
                height: `${dynamicHeight}px`,
                visibility: 'visible',
            })
            return;
        }

        setStyle({
            height: '0px',
            visibility: 'hidden',
        });

    }, [showList]);


    useEffect(() => {
        toggleSelectBox();
    }, [toggleSelectBox])
    return (
        <div className="ms-selectbox-container">
            <div tabIndex={0} onClick={() => clickTrigger()} className="ms-selectbox-trigger">

                <div className="selectbox-trigger-text">
                    Lütfen Seçiniz...
                </div>
                <div className="selectbox-trigger-image">
                    <img src={icon} width={10} alt="arrowdown" />

                </div>
            </div>
            <div id="SelectBoxItems" className="ms-selectbox-items" style={style}>
                <div className="ms-selectbox-item">
                    <span className="ms-selectbox-item-text">
                        Deneme 1

                    </span>
                </div>


                <div className="ms-selectbox-item">
                    <span className="ms-selectbox-item-text">
                        Deneme 1
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SelectBox;