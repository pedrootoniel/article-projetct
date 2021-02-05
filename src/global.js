import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        -webkit-box-sizing: border-box;
         -moz-box-sizing: border-box;
         box-sizing: border-box;
        font-family: Roboto, sans-serif;
        
    }
    body,html,#root{
        width:100%;
        height:100%;
        -webkit-font-smoothing: antialiased !important;
        font-family: 'Maven Pro', sans-serif;
        background: #eee;
         text-rendering: optimizeLegibility !important;
    }
    :root {
      --color-button1: #2D3047;
      --color-background: #8DE4FF;
      --color-border: #ccc;
      --color-button: #575A89;
      --color-text: #000;
      --color-gray-text: #999;
      --color-background-geral: #eee;
      --color-white:#fff;
      --color-comments: #333;
      --color-red:#f00;
      --color-purple3:#CB429F;
      --color-purple2:#690375;
      --color-purple:#2C0E37;
    }
    
`