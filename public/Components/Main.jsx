import React from 'react';
import { MainContent } from './styles.js';

let content1 = `
I'm baby godard tote bag street art cred succulents keytar narwhal, irony palo santo pop-up. 
Twee butcher narwhal, williamsburg +1 four loko paleo. Air plant butcher cliche truffaut austin +1. 
Chia vexillologist copper mug poke, knausgaard polaroid humblebrag before they sold out. 
Pabst aesthetic fixie squid farm-to-table venmo XOXO. Ethical schlitz lyft, tattooed actually pabst. 
Cornhole post-ironic shaman paleo trust fund kale chips.







Chartreuse authentic fixie, bicycle rights lumbersexual succulents gochujang everyday carry tbh af. 
Green juice distillery. Aesthetic truffaut squid taxidermy, glossier cloud bread try-hard pitchfork. 
Tacos beard organic. Aesthetic kombucha four dollar toast freegan keffiyeh, typewriter post-ironic. 
Ramps copper mug truffaut sustainable. 

Cliche PBR&B gastropub, hell of DIY godard ugh tousled semiotics. Af enamel pin put a bird on it. 
Tumblr subway tile paleo. Venmo selvage fashion axe, live-edge vegan copper mug bespoke thundercats. 
Swag chartreuse kogi sriracha heirloom kale chips. Next level raclette shoreditch synth roof party. 
Dummy text? More like dummy thicc text, amirite?
`

let content2 = `
I'm baby listicle cronut hexagon, pok pok humblebrag cray hashtag blog. Small batch green juice mixtape raw denim sustainable pug. Deep v truffaut pabst roof party kitsch tousled. Pop-up wayfarers occupy, vaporware shabby chic glossier selfies whatever VHS blog meh narwhal pabst organic.

Stumptown four loko fingerstache taxidermy narwhal woke typewriter butcher vegan dreamcatcher kickstarter mixtape truffaut lumbersexual. Chicharrones skateboard heirloom, tacos hot chicken fam try-hard occupy. Taxidermy chartreuse biodiesel typewriter beard pug intelligentsia cardigan food truck yr. Vegan PBR&B hoodie, four dollar toast sriracha paleo polaroid letterpress try-hard tote bag VHS disrupt leggings.
`

export const Main = (props) => {
  return (<MainContent>{props.tab === 'HOME' ? content1 : content2}</MainContent>)
}