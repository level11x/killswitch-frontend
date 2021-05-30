const IMAGES = []
for(let i = 0; i < 1000; i++) {
    IMAGES.push(require('./' + i + '.png').default)
} 
console.log(IMAGES)

export default IMAGES