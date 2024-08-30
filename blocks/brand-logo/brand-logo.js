
/**
 * loads and decorates the brand logo
 * @param {Element} block The brand logo block element
 */
export default async function decorate(block) {
    block.outerHTML = "<a href='/' class='brand-logo block' data-block-name='brand-logo'>" + block.innerHTML + '</a>';
}