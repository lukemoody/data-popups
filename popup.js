const popup = () => {

  let popup = document.querySelectorAll('[data-popup-activator]');

  for (let i = 0; i < popup.length; i++) {

    // Loop over all popup activators
    popup[i].addEventListener('click', () => {

      // Get unique value from data-attribute 
      const dataValue = popup[i].getAttribute(['data-popup-activator']);

      // Activate popup with same unique data-attribute value
      document.querySelector('[data-popup="' + dataValue + '"]').classList.toggle('active');

      // Close popup 
      const close = document.querySelector('.popup-form .close');

      if (close) {
        close.addEventListener('click', () => {
          document.querySelector('[data-popup="' + dataValue + '"]').classList.remove('active');
        });
      }

    });

  }
  
  };
  
  export default popup;
