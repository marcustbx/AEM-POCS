/**
 * loads and decorates the hero.
 * @param {Element} block The hero block element
 */
export default async function decorate(block) {

    const container = block.querySelector('div');
    container.classList.add('hero-container');
    
    const childDivs = container.querySelectorAll('div');
    childDivs[0].classList.add('hero-image-wrapper');
    childDivs[1].classList.add('hero-content-wrapper');
}