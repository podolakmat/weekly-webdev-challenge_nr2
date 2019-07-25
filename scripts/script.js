window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 50) nav.className = 'navbar navbar-expand-lg navbar-expand-md navbar-light fixed-top'; else nav.className = 'navbar navbar-expand-lg navbar-expand-md navbar-light fixed-top nav-scroll';
};