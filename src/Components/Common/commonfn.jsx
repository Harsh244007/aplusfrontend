export const HideLandingLoader = () => {
  // document.querySelector('.Spinner_Background').style.display = 'none';
  var spinner = document.querySelector('body').classList;
  document.body.style.overflow = "auto"
  spinner.add('Spinner_Default');
  if (spinner.contains('Spinner_Default')) {
    spinner.remove('Spinner_Default');
    document.querySelector(".loaderImageMain").style.display="none"
    document.querySelector(".Spinner_Background").style.display="none"
  }
  document.querySelector('html').style.overflow = 'auto';
};
// }, 10000);

// setTimeout(() => {