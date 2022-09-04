/**
 * Task 2 - Create Modal
 */

const modalStyle = document.createElement('style');
document.head.append(modalStyle);
modalStyle.innerHTML = `
  .modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 20;
  }
  .modal-openbtn {
    color: white;
    background: #00a5b8;
    font-weight: bold;
    text-align: center;
    padding: 1rem;
    letter-spacing: 0.25rem;
  }
  .modal-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    padding: 2rem;
    background: white;
  }
  .modal-header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
    border-bottom: 1px solid black;
  }
  .modal-body {
    padding: 2rem 1rem;
  }
  @media screen and (max-width: 768px) {
    .modal-content {
      width: 100%;
      height: 100%;
    }
  }
`;

const modal = document.createElement('div');
const modalContent = document.createElement('div');
const modalHeader = document.createElement('div');
const modalHeadline = document.createElement('h2');
const modalBody = document.createElement('div');
const openBtnSidebar = document.createElement('div');
const openBtnMin = document.createElement('div');
const closeBtn = document.createElement('span');

modal.className = 'modal';
modalContent.className = 'modal-content';
modalHeader.className = 'modal-header';
modalBody.className = 'modal-body';
openBtnSidebar.className = 'modal-openbtn';
openBtnMin.className = 'modal-openbtn';

modalHeadline.innerHTML = 'Modal Headline';
closeBtn.innerHTML = 'X CLOSE';
modalBody.innerHTML = 'Lorem ipsum dolor sit amet. Sed rerum perferendis \
  quo molestias saepe ut recusandae necessitatibus. Est dolores quisquam \
  ab possimus nisi ut ratione fugiat a distinctio praesentium nam omnis \
  aperiam vel exercitationem voluptas! Qui facilis rerum sed sunt molestiae \
  aut dicta dolor et ullam quos non repudiandae asperiores.';
openBtnSidebar.innerHTML = 'OPEN MODAL';
openBtnMin.innerHTML = 'OPEN MODAL';

openBtnSidebar.onclick = () => {
  modal.style.display = 'block';
};

openBtnMin.onclick = () => {
  modal.style.display = 'block';
};

closeBtn.onclick = () => {
  modal.style.display = 'none';
};

document.body.append(modal);
modal.append(modalContent);
modalContent.append(modalHeader, modalBody);
modalHeader.append(modalHeadline, closeBtn);
document.querySelector('#sidebar div').append(openBtnSidebar);
document.querySelector('#content div.hide-on-desktop-min').append(openBtnMin);

