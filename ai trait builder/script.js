


const Body = [
    'traits/Body/body black.png',
    'traits/Body/body blue.png',
    'traits/Body/body dark green.png',
    'traits/Body/body formal.png',
    'traits/Body/body grey.png',
    'traits/Body/body naked.png',
    'traits/Body/body red.png',
    'traits/Body/body shirtless blue.png',
    'traits/Body/body shirtless brown.png',
    'traits/Body/body shirtless dark green.png',
    'traits/Body/body shirtless diamond.png',
    'traits/Body/body shirtless grey.png',
    'traits/Body/body shirtless purple.png',
    'traits/Body/body shirtless red.png',
    'traits/Body/body stylish.png',
    'traits/Body/body suit.png'
];
const Eyes = [
    'traits/Eyes/eyes crossed.png',
    'traits/Eyes/eyes dummy.png',
    'traits/Eyes/eyes left.png',
    'traits/Eyes/eyes right red.png',
    'traits/Eyes/eyes right.png'
];
const On_Head = [
    'traits/On_Head/arrow through head.png',
    'traits/On_Head/black hat.png',
    'traits/On_Head/blue hat backwards.png',
    'traits/On_Head/cigarette.png',
    'traits/On_Head/crown.png',
    'traits/On_Head/fedora.png',
    'traits/On_Head/fire.png',
    'traits/On_Head/halo.png',
    'traits/On_Head/horns.png',
    'traits/On_Head/joker hat.png',
    'traits/On_Head/lightbulb.png',
    'traits/On_Head/none.png',
    'traits/On_Head/pirate hat.png',
    'traits/On_Head/purple tophat.png',
    'traits/On_Head/rice hat.png',
    'traits/On_Head/santahat.png',
    'traits/On_Head/sushi bandana.png',
    'traits/On_Head/upset.png',
    'traits/On_Head/wings.png',
    'traits/On_Head/wizard hat.png',
];
const Left_Arm = [
    'traits/Left_Arm/left arm fire staff.png',   
    'traits/Left_Arm/left arm fire.png',   
    'traits/Left_Arm/left arm hammer.png',   
    'traits/Left_Arm/left arm staff.png',   
    'traits/Left_Arm/left arm sword down.png',   
    'traits/Left_Arm/left arm sword.png',   
    'traits/Left_Arm/left arm up middlefinger.png',   
    'traits/Left_Arm/left arm up.png',   
    'traits/Left_Arm/left arm water staff.png',   
    'traits/Left_Arm/left arm.png',    
];
const Right_Arm = [
    'traits/Right_Arm/right arm coffee.png',  
    'traits/Right_Arm/right arm fire staff.png',  
    'traits/Right_Arm/right arm fire.png',  
    'traits/Right_Arm/right arm hammer.png',  
    'traits/Right_Arm/right arm middlefinger.png',  
    'traits/Right_Arm/right arm staff.png',  
    'traits/Right_Arm/right arm sword down.png',  
    'traits/Right_Arm/right arm sword.png',  
    'traits/Right_Arm/right arm up.png',  
    'traits/Right_Arm/right arm water staff.png',  
    'traits/Right_Arm/right arm.png',    
];

// Function to create and append the item images to the tool sections
function createItemImages(container, defaultimage, items) {
  const itemContainer = document.getElementById(container);
  items.forEach(item => {
    const img = document.createElement('img');
    img.src = item;
    img.addEventListener('click', () => addTrait(defaultimage, item));
    itemContainer.appendChild(img);
  });
}

// Function to add a trait to the animal image
function addTrait(defaultimage, item) {
    const defaultImageContainer = document.getElementById(defaultimage);
    defaultImageContainer.src = item;5
}

createItemImages('body-container', 'body-image', Body);
createItemImages('on-head-container', 'on-head-image', On_Head);
createItemImages('eyes-container', 'eyes-image', Eyes);
createItemImages('left-arm-container', 'left-arm-image', Left_Arm);
createItemImages('right-arm-container', 'right-arm-image', Right_Arm);
