import * as React from 'react'
import icon from './arrowdown.svg';
import TextValueViewModel from "./TextValueViewModel";

// Props için bir type tanımlıyoruz
type SelectProps = {
    values?: Array<TextValueViewModel>,
    onChange: Function,
    triggerOnMount: Boolean,
    placeHolder: String,
    rounded: string,
    padding: string,
    width?: string,
    boxShadow: string,
    itemsBackgroundColor: string,
};
const predefinedClass = ["small", "medium", "large", "xlarge", "none", "full", "primary", "secondary", "success", "warning", "danger"];

const SelectBox: React.FC<SelectProps> = ({ values = new Array<TextValueViewModel>, onChange, triggerOnMount, placeHolder, rounded, padding, width, boxShadow, itemsBackgroundColor }) => {

    //Seçim Kutusunun Açılıp Kapanma Durumu
    const [showList, setShowList] = React.useState<Boolean>(false);
    const [style, setStyle] = React.useState<React.CSSProperties>({});
    //Seçilen elemanı tutan durum
    const [selectedItem, setSelectedItem] = React.useState(new TextValueViewModel('', 0));

    let selectBoxContainerStlye: React.CSSProperties = {};
    let selectBoxItemsStlye: React.CSSProperties = {};


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
    const toggleSelectBox = React.useCallback(() => {
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


    React.useEffect(() => {
        toggleSelectBox();
    }, [showList]);

    React.useEffect(() => {
        const emptyValue = new TextValueViewModel(placeHolder || "Lütfen Bir Değer Seçiniz...", 0);
        if (triggerOnMount) {
            setSelectedItem(values[0]);
            onChange(values[0]);
            return;
        }

        setSelectedItem(emptyValue);
    }, [triggerOnMount])


    const isPredefinedForRadius = predefinedClass.includes(rounded || "");
    const isPredefinedForPadding = predefinedClass.includes(padding || "");
    const isPredefinedForWidth = predefinedClass.includes(width || "");
    const isPredefinedForShadow = predefinedClass.includes(boxShadow || "");
    const isPredefinedForItemsBackground = predefinedClass.includes(itemsBackgroundColor || "");
    const widthStyle = isPredefinedForWidth ? {} : { '--select-width': width };
    const itemsBgStyle = isPredefinedForItemsBackground ? {} : { '--items-background-color': itemsBackgroundColor };


    selectBoxContainerStlye = { ...widthStyle };
    selectBoxItemsStlye = { ...itemsBgStyle, ...style };

    return (
        <div
            data-rounded={isPredefinedForRadius ? rounded : undefined}
            data-padding={isPredefinedForPadding ? padding : undefined}
            data-width={isPredefinedForPadding ? width : undefined}
            data-shadow={isPredefinedForShadow ? boxShadow : undefined}
            data-items-background={isPredefinedForItemsBackground ? itemsBackgroundColor : undefined}
            style={selectBoxContainerStlye}
            className="ms-selectbox-container">
            <div tabIndex={0} onBlur={() => clickTrigger(false)} onClick={() => clickTrigger(!showList)} className="ms-selectbox-trigger">
                <div className="selectbox-trigger-text">
                    {selectedItem && selectedItem?.Text}
                </div>
                <div className="selectbox-trigger-image">
                    <img src={icon} width={10} alt="arrowdown" />

                </div>
            </div>
            <div id="SelectBoxItems" className="ms-selectbox-items" style={selectBoxItemsStlye}>
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