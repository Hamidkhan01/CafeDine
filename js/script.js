console.log("Custom script loaded.");


/* Menu */ 
document.addEventListener('DOMContentLoaded', () => {
            const filterButtons = document.querySelectorAll('.menu-tabs a');
            const menuItems = document.querySelectorAll('.menu-items-grid .menu-item');

            filterButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    event.preventDefault(); 

                 
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');

                    const filterCategory = button.getAttribute('href').substring(1); 

                    menuItems.forEach(item => {
                        const itemCategories = item.getAttribute('data-category'); 
                        
                        if (filterCategory === 'all') {
                            item.style.display = 'flex'; 
                        } else {
                            if (itemCategories && itemCategories.includes(filterCategory)) {
                                item.style.display = 'flex';
                            } else {
                                item.style.display = 'none';
                            }
                        }
                    });
                });
            });
        });

$(document).ready(function () {
  const modalImage = $('#modalImage');
  const imageTriggers = $('.insta-img');
  const imageModal = $('#imageModal');
  const prevBtn = $('#prevBtn');
  const nextBtn = $('#nextBtn');

  let currentIndex = 0;
  const imagePaths = [];

  imageTriggers.each(function (index) {
    imagePaths.push($(this).data('img'));

    $(this).on('click', function () {
      currentIndex = index;
      modalImage.attr('src', imagePaths[currentIndex]);
      imageModal.modal('show');
    });
  });

  prevBtn.on('click', function () {
    currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
    modalImage.attr('src', imagePaths[currentIndex]);
  });

  nextBtn.on('click', function () {
    currentIndex = (currentIndex + 1) % imagePaths.length;
    modalImage.attr('src', imagePaths[currentIndex]);
  });

  modalImage.on('load', function () {
    prevBtn.show();
    nextBtn.show();
  });

  imageModal.on('hidden.bs.modal', function () {
    prevBtn.hide();
    nextBtn.hide();
  });

  prevBtn.hide();
  nextBtn.hide();
});





/* Testimonials */ 



document.addEventListener('DOMContentLoaded', () => {


    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            let isValid = true;


            const nameField = document.getElementById('name');
            const emailField = document.getElementById('email');
            const phoneField = document.getElementById('phone');
            const subjectField = document.getElementById('subject'); 
            const messageField = document.getElementById('message');


            if (nameField.value.trim() === '') {
                nameField.classList.add('invalid');
                isValid = false;
            } else {
                nameField.classList.remove('invalid');
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailField.value.trim() === '' || !emailPattern.test(emailField.value.trim())) {
                emailField.classList.add('invalid');
                isValid = false;
            } else {
                emailField.classList.remove('invalid');
            }

            if (messageField.value.trim() === '') {
                messageField.classList.add('invalid');
                isValid = false;
            } else {
                messageField.classList.remove('invalid');
            }

            if (!isValid) {
                event.preventDefault();
                alert('Please fill in all required fields correctly.');
            } else {

                event.preventDefault();
                alert('Form submitted successfully!');
                contactForm.reset(); 
            }
        });


        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('input', () => {
                if (input.classList.contains('invalid')) {
                    input.classList.remove('invalid');
                }
            });
        });
    }
});



/* Gallery */ 


    document.querySelectorAll('.video-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            const playButton = item.querySelector('.play-button');
            if (playButton) {
                playButton.style.opacity = '1';
            }
        });

        item.addEventListener('mouseleave', () => {
            const playButton = item.querySelector('.play-button');
            if (playButton) {

                playButton.style.opacity = '0.9';
            }
        });
    });



    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            console.log('Image clicked:', imgSrc);
          
        });
    });