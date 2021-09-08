/* PAletteAs hex codes 
color: #0F4B81 // Main Primary color // PANTONE 19-4052 Classic Blue
color: #4489C7 // button-color
color: #C79A0A // Main Secondary color (1) 
Palette URL: http://paletton.com/#uid=33z0u0kusp0jFSKmEH2WfdW+q8K
*/

export default {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#0f4c81', 
    accent: '#fff',
    muted: 'rgba(0, 0, 0, 0.7)',
    cardBg: '#fff',
    borderColor:"#0F4B81",
    labelText: "#777",
    inputBorder: "#aaa",
    inputBackground: "#fff",
    socialIcons:"#224464",
    socialIconsHover:"#4489C7",
    modes: {
      dark: {
        text: '#f5f5f5',
        background: '#111',
        primary: '#252525',
        accent: '#5C2941',
        muted: 'rgba(255, 255, 255, 0.7)',
        buttonAccent: '#fff',
        cardBg: '#252525',
        borderColor:"#888",
        labelText: "#777",
        inputBorder: "#777",
        inputBackground: "#333",
        socialIcons:"rgba(255,255,255,0.7)",
        socialIconsHover:"#fff",
      },
    }
  },
  links: {
    postLink: {
      color: 'muted',
      '&:hover': {
        color: 'text'
      }
    },
    button: {
      bg: 'buttonAccent',
      color: 'accent'
    }
  }
}