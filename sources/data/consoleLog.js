import * as THREE from 'three/webgpu'
const text = `
██████╗ ██████╗ ██╗   ██╗███╗   ██╗ ██████╗ ██╗███████╗                   
██╔══██╗██╔══██╗██║   ██║████╗  ██║██╔═══██╗╚═╝██╔════╝                   
██████╔╝██████╔╝██║   ██║██╔██╗ ██║██║   ██║   ███████╗                   
██╔══██╗██╔══██╗██║   ██║██║╚██╗██║██║   ██║   ╚════██║                   
██████╔╝██║  ██║╚██████╔╝██║ ╚████║╚██████╔╝   ███████║                   
╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝    ╚══════╝                   
                                                                       
██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
╔═ 简介 ═══════════════╗
║ 感谢访问迷体星球，你这个偷偷查看源码的开发者！
║ 如果你好奇这个项目用了什么技术栈、如何搭建，这里有你需要的信息。
╚═══════════════════════╝

╔═ 更多链接 ═════╗
║ Rapier（物理引擎库） ⇒ https://rapier.rs/
║ Howler.js（音频库）  ⇒ https://howlerjs.com/
║ Amatic SC（字体）    ⇒ https://fonts.google.com/specimen/Amatic+SC
║ Nunito（字体）       ⇒ https://fonts.google.com/specimen/Nunito?query=Nunito
╚═══════════════════════╝
`
let finalText = ''
let finalStyles = []
const stylesSet = {
    letter: 'color: #ffffff; font: 400 1em monospace;',
    pipe: 'color: #D66FFF; font: 400 1em monospace;',
}
let currentStyle = null
for(let i = 0; i < text.length; i++)
{
    const char = text[i]
    const style = char.match(/[╔║═╗╚╝╔╝]/) ? 'pipe' : 'letter'
    if(style !== currentStyle)
    {
        currentStyle = style
        finalText += '%c'
        finalStyles.push(stylesSet[currentStyle])
    }
    finalText += char
}
export default [finalText, ...finalStyles]
