import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    ${'' /* :root{ */}
        --primaryColor: #007bff;
        --primaryColorLight: #057fff;
        --secondaryColor: #6c757d;
        --backgroundDarkColor: #10121a;
        --backgroundDarkGrey: #191d2b;
        --borderColor: #2e344e;
        --backgroundLightColor: #f1f1f1;
        --backgroundLightColor2: rgba(3,127,255,0.3);
        --whiteColor: #fff;
        --fontLightColor: #a4acc4;
        --fontDarkColor: #313131; 
        --fontDarkColor2: #151515; 
        --sidebarDarkColor: #191d2b;
        --scrollbarBgColor: #383838;
        --scrollbarThumbColor: #6b6b6b;
        --scrollbarTrackColor: #383838;
    }

    .light-theme{
        --primaryColor: #007bff;
        --primaryColorLight: #057fff;
        --secondaryColor: #ff7675;
        --backgroundDarkColor: #f1f1f1;
        --backgroundDarkGrey: #e4e4e4;
        --borderColor: #cbced8;
        --backgroundLightColor: #f1f1f1;
        --backgroundLightColor2: rgba(3,127,255,0.3);
        --whiteColor: #151515;
        --fontLightColor: #313131;
        --fontDarkColor: #313131; 
        --fontDarkColor2: #151515; 
        --sidebarDarkColor: #e4e4e4;
        --scrollbarBgColor: #383838;
        --scrollbarThumbColor: #6b6b6b;
        --scrollbarTrackColor: #383838;
    }
    .dark-theme{
        --primaryColor: #007bff;
        --primaryColorLight: #057fff;
        --secondaryColor: #6c757d;
        --backgroundDarkColor: #10121a;
        --backgroundDarkGrey: #191d2b;
        --borderColor: #2e344e;
        --backgroundLightColor: #f1f1f1;
        --backgroundLightColor2: rgba(3,127,255,0.3);
        --whiteColor: #fff;
        --fontLightColor: #a4acc4;
        --fontDarkColor: #313131; 
        --fontDarkColor2: #151515; 
        --sidebarDarkColor: #191d2b;
        --scrollbarBgColor: #383838;
        --scrollbarThumbColor: #6b6b6b;
        --scrollbarTrackColor: #383838;
    }

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Nunito', sans-serif;
        text-decoration: none;
        font-size: 1rem;
    }

    body {
        background: var(--backgroundDarkColor);
        color: #a4acc4;
        transition: all 0.4s ease;
    }

    ::-webkit-scrollbar {
        width: 8px;
        background: transparent;
}

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #6b6b6b;
}

    ::-webkit-scrollbar-track {
        border-radius: 10px;
        background: transparent;
}


    h6{
        color: var(--primaryColor);
        font-size: 1.2rem;
        padding-bottom: 0.6rem;
    }

    span{
        color: var(--primaryColor);
    }

    textarea{
        max-width: 100%;
    }

    ${'' /* // Floating Toggler */}
    .light-dark-mode{
        position: fixed;
        right: 0;
        bottom:10%;
        z-index: 15;
        background: var(--backgroundLightColor2);
        width: 7rem;
        height: 2.5rem;
        display: flex;
        align-items:center;
        justify-content: center;
        @media screen and (max-width: 768px){
            
        }
        svg{
            display: flex;
            align-items: center;
            font-size: 1.7rem;
            color: var(--whiteColor);
        }
    }
    
    `


export default GlobalStyle