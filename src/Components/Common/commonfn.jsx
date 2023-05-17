export const HideLandingLoader = () => {
  document.querySelector('.Spinner_Background').style.display = 'none';
  var spinner = document.querySelector('body').classList;
  
  spinner.add('Spinner_Default');
  if (spinner.contains('Spinner_Default')) {
    // setTimeout(() => {
      spinner.remove('Spinner_Default');
    // }, 10000);
  }
  document.querySelector('html').style.overflow = '';
};
