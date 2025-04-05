// import './Button.css'

// export default function Button({ bgColor}) {
//     return (
//         <div className='ms-button-container'>
//             <button className='ms-button'
//                 style={{ "--btn-bg": bgColor }}>
//                 deneme
//             </button>
//         </div>
//     )
// }


const predefinedColors = ["primary", "danger", "warning", "black", "white"];
const predefinedPaddings = ["small", "medium", "large"];

export default function Button({ bgColor, borderColor, children, textColor,paddingSize }) {
    let style = {};

    const isPredefinedForBackGround = predefinedColors.includes(bgColor);
    const bgStyle = isPredefinedForBackGround ? {} : { '--btn-bg': bgColor };

    const isPredefinedForText = predefinedColors.includes(textColor);
    const textStyle = isPredefinedForText ? {} : { '--btn-text-color': textColor };

    const isPredefinedForPadding = predefinedPaddings.includes(paddingSize);

    const borderStyle = { '--btn-border-color': borderColor }

    style = { ...bgStyle, ...borderStyle, ...textStyle };


    return (
        <div className='ms-button-container'>
            <button
                style={style}
                className='ms-button'
                data-bg-color={isPredefinedForBackGround ? bgColor : undefined}
                data-padding={isPredefinedForPadding ? paddingSize : undefined}
                data-text-color={isPredefinedForText ? textColor : undefined}>
                {children}
            </button>
        </div>
    )
}