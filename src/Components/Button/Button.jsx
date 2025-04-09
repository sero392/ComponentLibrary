


const predefinedColors = ["primary", "danger", "warning", "black", "white"];
const predefinedClass = ["small", "medium", "large", "none"];

export default function Button({ bgColor, children, textColor, paddingSize, rounded, ringColor, fontSize, appendIcon, prependIcon, onClick,iconButton }) {
    let style = {};

    const isPredefinedForBackGround = predefinedColors.includes(bgColor);
    const bgStyle = isPredefinedForBackGround ? {} : { '--btn-bg': bgColor };

    const isPredefinedForText = predefinedColors.includes(textColor);
    const textStyle = isPredefinedForText ? {} : { '--btn-text-color': textColor };


    const isPredefinedForFontSize = predefinedClass.includes(fontSize);
    const fontSizeStyle = isPredefinedForFontSize ? {} : { '--btn-font-size': fontSize };

    const ringStyle = { '--btn-ring-color': ringColor };

    const isPredefinedForPadding = predefinedClass.includes(paddingSize);
    const isPredefinedForRadius = predefinedClass.includes(rounded);

    const iconButtonStyle = iconButton ? { 'border-radius' : '100%','padding' : '2px 5px' } : {};


    style = { ...bgStyle, ...textStyle, ...ringStyle, ...fontSizeStyle,...iconButtonStyle };


    return (
        <div className='ms-button-container'>
            <button
                style={style}
                className='ms-button'
                onClick={onClick}
                data-bg-color={isPredefinedForBackGround ? bgColor : undefined}
                data-padding={isPredefinedForPadding ? paddingSize : undefined}
                data-radius={isPredefinedForRadius ? rounded : undefined}
                data-font-size={isPredefinedForFontSize ? fontSize : undefined}
                data-text-color={isPredefinedForText ? textColor : undefined}>
                {
                    prependIcon && <span className='ms-button-icon prepend'>{prependIcon}</span>
                }
                <span>
                    {children}
                </span>
                {
                    appendIcon && <span className='ms-button-icon append'>{appendIcon}</span>
                }
            </button>
        </div>
    )
}