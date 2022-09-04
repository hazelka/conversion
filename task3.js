/**
 * Task 3 - Value Propositions
 */

const stylesheet = document.createElement('style');
document.head.append(stylesheet);
stylesheet.innerHTML = `
  #value-propositions {
    text-align: center;
    padding-top: 100px;
    max-width: 1230px;
    margin: auto;
  }
  .value-heading {
    font-weight: bold;
  }
  .value-body {
    display: flex;
    position: relative;
    justify-content: space-around;
    padding: 50px 0;
  }
  .dotted-line {
    border-bottom: 5px dotted lightgray;
    position: absolute;
    top: 100px;
    z-index: -1;
    width: 66%;
  }
  .item {
    width: 250px;
  }
  .item-img {
    display: block;
    margin: auto;
    width: 100px;
    margin-bottom: 1rem;
  }
  .item-header {
    font-weight: bold;
    margin-bottom: 0.25rem;
  }
  @media screen and (max-width: 768px) {
    .value-body {
      padding: 50px;
      display: block;
    }
    .item {
      display: grid;
      grid-template-columns: 100px 300px;
      grid-template-rows: 50px 100px;
      margin: auto;
      width: 400px;
    }
    .item-img {
      grid-row: 1 / 3;
      margin: 0;
      align-self: center;
    }
    .item-header {
      align-self: end;
    }
    .dotted-line {
      border-bottom: none;
      border-left: 5px dotted lightgray;
      height: 297px;
      top: 125px;
      left: calc(50% - 150px);
    }
  }
  @media screen and (max-width: 576px) {
    .value-body, .item {
      padding: 0;
      margin: 1rem 0;
      width: 100vw;
    }
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .item-header {
      align-self: auto;
      margin-top: 1rem;
    }
    .item-body {
      margin-bottom: 2rem;
    }
    .item-header, .item-body {
      background: white;
    }
    .dotted-line {
      top: 50px;
      left: 50vw;
      height: calc(100% - 100px - 2rem);
    }
  }
`;

const section = document.createElement('section');
const heading = document.createElement('h2');
const body = document.createElement('div');
const dottedLine = document.createElement('div');

section.id = 'value-propositions';
heading.className = 'value-heading';
body.className = 'value-body';
dottedLine.className = 'dotted-line';
heading.innerHTML = 'Value Propositions';

const img1 = 'https://icons.iconarchive.com/icons/martz90/circle-addon2/512/computer-icon.png';
const img2 = 'https://icons.iconarchive.com/icons/martz90/circle-addon2/512/browser-2-icon.png';
const img3 = 'https://icons.iconarchive.com/icons/martz90/circle-addon2/512/plane-flight-icon.png';
createItem(img1, 'Heading 1');
createItem(img2, 'Heading 2');
createItem(img3, 'Heading 3');

document.querySelector('#post-32522').before(section);
section.append(heading, body);
body.append(dottedLine);

function createItem(imageURL, name) {
  const item = document.createElement('div');
  const itemImg = document.createElement('img');
  const itemHeader = document.createElement('h3');
  const itemBody = document.createElement('p');

  item.className = 'item';
  itemImg.src = imageURL;
  itemImg.className = 'item-img';
  itemHeader.className = 'item-header';
  itemBody.className = 'item-body';
  itemHeader.innerHTML = name;
  itemBody.innerHTML = 'Lorem ipsum dolor sit amet. Sed rerum perferendis \
  quo molestias saepe ut recusandae necessitatibus.Est dolores';

  item.append(itemImg, itemHeader, itemBody);
  body.append(item);
}