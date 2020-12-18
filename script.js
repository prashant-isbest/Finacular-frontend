const hidebtn = document.querySelector('.hide');
const sidebar = document.querySelector('.sidebar');
const showbtn;

hidebtn.addEventListener('click', () => {
  sidebar.classList.add('hidden');
});
