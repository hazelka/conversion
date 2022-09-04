/**
 * Task 4 - Create tabbale section
 */

const stylesheet = document.createElement('style');
document.head.append(stylesheet);
stylesheet.innerHTML = `
  #tabs-container {
    display: flex;
    justify-content: center;
  }
  #tab-content-container {
    background: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 450px;
    padding: 2rem;
  }
  .tab {
    width: 25%;
    padding: 1rem;
    border: 1px solid lightgray;
    border-bottom: none;
    margin: 0 0.5rem;
    text-align: center;
    font-weight: bold;
    background: white;
  }
  .tab-active {
    padding-top: 0.5rem;
    border-top: 0.5rem solid blue;
    background: lightgray;
  }
  .tab-content {
    background: white;
    display: flex;
  }
  .tab-content1 {
    padding: 1rem 8rem 2rem;
  }
  .tab-content1-header {
    border-bottom: 2px solid lightgray;
    padding: 1rem;
  }
  .tab-content1-header-title {
    display: inline-block;
    font-weight: bold;
    padding-left: 1rem;
  }
  .tab-content1-header-logo {
    display: inline-block;
    width: 50px;
  }
  .tab-content-body-logo {
    display: inline-block;
    width: 80px;
    padding: 0.25rem 1rem;
  }
  .tab-content-body {
    padding: 1rem 0;
  }
  .tab-content-link {
    font-weight: bold;
  }
  .content-type1-col1 {
    width: 20vw;
  }
  .content-type1-col2 {
    width: 25vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    padding-left: 5rem;
  }
  .tab-content2 {
    padding: 2rem;
  }
  .content-type2-col1 {
    width: 35vw;
  }
  .content-type2-col2 {
    width: 15vw;
  }
  .tab-content2-header-logo {
    width: 80px;
  }
  .tab-content2-header-title {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1rem 0;
  }
  .tab-content-btn {
    color: black;
    background: white;
    padding: 1rem 2rem;
    border: 2px solid black;
    border-radius: 30px;
  }
  @media screen and (max-width: 800px) {
    .tab-content {
      flex-direction : column;
    }
    .tab-content1 {
      padding: 2rem;
    }
    .content-type1-col1,
    .content-type1-col2,
    .content-type2-col1,
    .content-type2-col2 {
      width: 100%;
    }
    .content-type1-col2 {
      padding: 3rem 0 0;
    }
  }
`;

const section = document.createElement('section');
const tabsContainer = document.createElement('div');
const tabContentContainer = document.createElement('div');
const lorem = 'Lorem ipsum dolor sit amet. Sed rerum perferendis \
  quo molestias saepe ut recusandae necessitatibus. Est dolores quisquam \
  ab possimus nisi ut ratione fugiat a distinctio praesentium nam omnis';
const titleLogo = 'https://icons.iconarchive.com/icons/double-j-design/ravenna-3d/128/Tools-icon.png';
const contentLogo = 'https://icons.iconarchive.com/icons/designcontest/ecommerce-business/128/company-building-icon.png';

section.id = 'tabbale-section';
tabsContainer.id = 'tabs-container';
tabContentContainer.id = 'tab-content-container';

createTab('tab1', 'Tab 1');
createTab('tab2', 'Tab 2');
createContentType1('tab1', 'Header', lorem, titleLogo, contentLogo);
createContentType2('tab2', 'Header', lorem, titleLogo);

section.append(tabsContainer, tabContentContainer);
document.getElementById('thebasics').before(section);
openTab('tab1');

function createTab(id, name) {
  const tab = document.createElement('button');
  tabsContainer.append(tab);
  tab.id = id + '-toggle';
  tab.className = 'tab';
  tab.innerHTML = name;
  tab.onclick = () => {
    openTab(id);
  };
}

function openTab(id) {
  const tabs = document.querySelectorAll('#tabs-container .tab');
  const contents = document.querySelectorAll('#tab-content-container ' +
      'div.tab-content');
  for (let t of tabs) {
    t.className = 'tab';
  }
  for (let c of contents) {
    c.style.display = 'none';
  }
  document.querySelector('#' + id).style.display = 'flex';
  document.querySelector('#' + id + '-toggle').className = 'tab tab-active';
}

function createContentType1(id, title, desc, titleLogoURL, contentLogoURL) {
  const col1 = document.createElement('div');
  const col2 = document.createElement('div');
  const content = document.createElement('div');
  const header = document.createElement('div');
  const headerLogo = document.createElement('img');
  const headerTitle = document.createElement('h4');
  const body = document.createElement('p');
  const contact = document.createElement('a');
  const cl1 = document.createElement('img');
  const cl2 = document.createElement('img');
  const cl3 = document.createElement('img');
  const cl4 = document.createElement('img');
  const cl5 = document.createElement('img');
  const cl6 = document.createElement('img');

  content.id = id;
  content.className = 'tab-content tab-content1';
  col1.className = 'content-type1-col1';
  col2.className = 'content-type1-col2';
  header.className = 'tab-content1-header';
  headerTitle.className = 'tab-content1-header-title';
  headerLogo.className = 'tab-content1-header-logo';
  body.className = 'tab-content-body';
  contact.className = 'tab-content-link';
  cl1.className = 'tab-content-body-logo';
  cl2.className = 'tab-content-body-logo';
  cl3.className = 'tab-content-body-logo';
  cl4.className = 'tab-content-body-logo';
  cl5.className = 'tab-content-body-logo';
  cl6.className = 'tab-content-body-logo';

  headerLogo.src = titleLogoURL;
  headerTitle.innerHTML = title;
  body.innerHTML = desc;
  contact.innerHTML = 'Chat with us &rarr;';
  cl1.src = contentLogoURL;
  cl2.src = contentLogoURL;
  cl3.src = contentLogoURL;
  cl4.src = contentLogoURL;
  cl5.src = contentLogoURL;
  cl6.src = contentLogoURL;

  header.append(headerLogo, headerTitle);
  col1.append(header, body, contact);
  col2.append(cl1, cl2, cl3, cl4, cl5, cl6);
  content.append(col1, col2);
  tabContentContainer.append(content);
  content.style.display = 'none';
}

function createContentType2(id, title, desc, titleLogoURL) {
  const col1 = document.createElement('div');
  const col2 = document.createElement('div');
  const content = document.createElement('div');
  const header = document.createElement('div');
  const headerLogo = document.createElement('img');
  const headerTitle = document.createElement('h4');
  const body = document.createElement('p');
  const btn = document.createElement('button');

  content.id = id;
  content.className = 'tab-content tab-content2';
  col1.className = 'content-type2-col1';
  col2.className = 'content-type2-col2';
  headerTitle.className = 'tab-content2-header-title';
  headerLogo.className = 'tab-content2-header-logo';
  body.className = 'tab-content-body';
  btn.className = 'tab-content-btn';

  headerLogo.src = titleLogoURL;
  headerTitle.innerHTML = title;
  body.innerHTML = desc;
  btn.innerHTML = 'TRY FOR FREE &rarr;';

  header.append(headerLogo, headerTitle);
  col1.append(header, body);
  col2.append(btn);
  content.append(col1, col2);
  tabContentContainer.append(content);
  content.style.display = 'none';
}
