import React, { useCallback, useEffect, useState } from "react";
import icon from './arrowdown.svg';
import TextValueViewModel from "./TextValueViewModel";

// Props için bir type tanımlıyoruz
type SelectProps = {
    values?: Array<TextValueViewModel>,
    onChange: Function,
    triggerOnMount: Boolean,
    placeHolder: String,
    rounded:string,
};
const predefinedClass = ["small", "medium", "large", "none"];

const SelectBox: React.FC<SelectProps> = ({ values = new Array<TextValueViewModel>, onChange, triggerOnMount, placeHolder,  rounded }) => {

    if (values?.length === 0) {
        return;
    }

    //Seçim Kutusunun Açılıp Kapanma Durumu
    const [showList, setShowList] = useState<Boolean>(false);
    const [style, setStyle] = useState<React.CSSProperties>({})
    //Seçilen elemanı tutan durum
    const [selectedItem, setSelectedItem] = useState(new TextValueViewModel('', 0));

    //ShowList Değerini Günceller.
    const clickTrigger = (state: boolean) => {
        setShowList(state);
    }

    //Elemana tıklama olayı
    const clickItem = (itemValue: TextValueViewModel) => {
        clickTrigger(false);
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
    }, [showList]);

    useEffect(() => {
        const emptyValue = new TextValueViewModel("Lütfen Bir Değer Seçiniz...", 0);
        if (triggerOnMount) {
            setSelectedItem(values[0]);
            onChange(values[0]);
            return;
        }

        setSelectedItem(emptyValue);
    }, [triggerOnMount])


    const isPredefinedForRadius = predefinedClass.includes(rounded || "");

    return (
        <div 
        data-rounded={isPredefinedForRadius ? rounded : undefined}
        className="ms-selectbox-container">
            <div tabIndex={0} onBlur={() => clickTrigger(false)} onClick={() => clickTrigger(!showList)} className="ms-selectbox-trigger">
                <div className="selectbox-trigger-text">
                    {selectedItem && selectedItem?.Text}
                </div>
                <div className="selectbox-trigger-image">
                    <img src={icon} width={10} alt="arrowdown" />

                </div>
            </div>
            <div id="SelectBoxItems" className="ms-selectbox-items" style={style}>
                {
                    values?.map((m) => (
                        <div key={m.Value} className="ms-selectbox-item" onClick={() => clickItem(m)}>
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