/**
 * Task 1 - Sticky Sidebar
 */

 const sidebarContent = document.querySelector('#sidebar div');
 
 Object.assign(sidebarContent.style, {
   position: 'sticky',
   top: '150px'
 });