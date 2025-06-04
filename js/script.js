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
    const imageTriggers = $('.g-img');
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
    // ... (Your existing navbar and menu toggle code goes here) ...

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            let isValid = true;

            // Get form fields
            const nameField = document.getElementById('name');
            const emailField = document.getElementById('email');
            const phoneField = document.getElementById('phone'); // Optional, so no 'required' validation
            const subjectField = document.getElementById('subject'); // Optional
            const messageField = document.getElementById('message');

            // Simple validation for required fields
            if (nameField.value.trim() === '') {
                nameField.classList.add('invalid');
                isValid = false;
            } else {
                nameField.classList.remove('invalid');
            }

            // Email validation
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

            // Prevent form submission if not valid
            if (!isValid) {
                event.preventDefault();
                alert('Please fill in all required fields correctly.');
            } else {
                // If validation passes, you would typically send the form data
                // For demonstration, we'll prevent default and show a success message
                event.preventDefault();
                alert('Form submitted successfully!');
                contactForm.reset(); // Clear the form
                // In a real application, you'd use fetch() or XMLHttpRequest here
                // to send data to a backend server.
            }
        });

        // Add event listeners to remove 'invalid' class on input
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

 // This script is optional and provides a basic hover effect for the play button.
    // For actual video playback, you would replace this with video player logic.
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
                // You might want to keep it visible or fade out based on desired UX
                playButton.style.opacity = '0.9'; // Or '0' if you want it hidden
            }
        });
    });



    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            console.log('Image clicked:', imgSrc);
            // You would typically open a lightbox here
        });
    });