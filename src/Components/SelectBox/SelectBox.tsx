import React, { useCallback, useEffect, useState } from "react";
import icon from './arrowdown.svg';
import TextValueViewModel from "./TextValueViewModel";

// Props için bir type tanımlıyoruz
type SelectProps = {
  values?: Array<TextValueViewModel>;
  onChange: Function;
};

const SelectBox: React.FC<SelectProps> = ({values,onChange}) => {
    const [showList, setShowList] = useState<Boolean>(false);
    const [style, setStyle] = useState<React.CSSProperties>({})
    const [selectedItem,setSelectedItem] = useState(new TextValueViewModel('',0));

    //ShowList Değerini Günceller.
    const clickTrigger = () => {
        setShowList(!showList);
    }

    //Elemana tıklama olayı
    const clickItem = (itemValue:TextValueViewModel)=> {
        clickTrigger();
        setSelectedItem(itemValue);
        onChange(itemValue);
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
    }, [showList])
    return (
        <div className="ms-selectbox-container">
            <div tabIndex={0} onClick={() => clickTrigger()} className="ms-selectbox-trigger">

                <div className="selectbox-trigger-text">
                    {selectedItem?.Text}
                </div>
                <div className="selectbox-trigger-image">
                    <img src={icon} width={10} alt="arrowdown" />

                </div>
            </div>
            <div id="SelectBoxItems" className="ms-selectbox-items" style={style}>
            {
                values?.map((m) => (
                    <div className="ms-selectbox-item" onClick={() => clickItem(m)}>
                    <span className="ms-selectbox-item-text">
                        {m.Text}
                    </span>
                </div>
                ))
            }
            </div>
        </div>
    )
}

export default SelectBox;