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




    /* Reservation file / Reservation Section */
    document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
        }
    });

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            let isValid = true;
            const nameField = document.getElementById('name');
            const emailField = document.getElementById('email');
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
                alert('Contact form submitted successfully!');
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

    // Reservation Form Validation
    const reservationForm = document.getElementById('reservationForm');

    if (reservationForm) {
        reservationForm.addEventListener('submit', function(event) {
            let isValid = true;

            const nameField = document.getElementById('res-name');
            const emailField = document.getElementById('res-email');
            const phoneField = document.getElementById('res-phone');
            const personsField = document.getElementById('num-persons');
            const dateField = document.getElementById('res-date');
            const timeField = document.getElementById('res-time');

  
            if (nameField.value.trim() === '') {
                nameField.classList.add('invalid');
                isValid = false;
            } else {
                nameField.classList.remove('invalid');
            }

            // Validate Email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailField.value.trim() === '' || !emailPattern.test(emailField.value.trim())) {
                emailField.classList.add('invalid');
                isValid = false;
            } else {
                emailField.classList.remove('invalid');
            }

            if (phoneField.value.trim() === '') {
                phoneField.classList.add('invalid');
                isValid = false;
            } else {
                phoneField.classList.remove('invalid');
            }


            if (personsField.value === '') {
                personsField.classList.add('invalid');
                isValid = false;
            } else {
                personsField.classList.remove('invalid');
            }


            if (dateField.value.trim() === '') {
                dateField.classList.add('invalid');
                isValid = false;
            } else {
                dateField.classList.remove('invalid');
            }

            if (timeField.value.trim() === '') {
                timeField.classList.add('invalid');
                isValid = false;
            } else {
                timeField.classList.remove('invalid');
            }

            if (!isValid) {
                event.preventDefault();
                alert('Please fill in all reservation fields correctly.');
            } else {
                event.preventDefault();
                alert('Reservation submitted successfully!');
                reservationForm.reset();
            }
        });

        const reservationInputs = reservationForm.querySelectorAll('input, select');
        reservationInputs.forEach(input => {
            input.addEventListener('input', () => {
                if (input.classList.contains('invalid')) {
                    input.classList.remove('invalid');
                }
            });

            if (input.tagName === 'SELECT') {
                input.addEventListener('change', () => {
                    if (input.classList.contains('invalid')) {
                        input.classList.remove('invalid');
                    }
                });
            }
        });
    }
});


/* Cart things */ 
const cartLayout = document.querySelector('.cart-layout');

    if (cartLayout) {
        cartLayout.addEventListener('click', (event) => {
            const target = event.target;

            if (target.classList.contains('quantity-btn')) {
                const quantityInput = target.closest('.quantity-control').querySelector('.item-quantity');
                let currentQuantity = parseInt(quantityInput.value);

                if (target.classList.contains('minus')) {
                    if (currentQuantity > parseInt(quantityInput.min)) {
                        quantityInput.value = currentQuantity - 1;
                    }
                } else if (target.classList.contains('plus')) {
                    quantityInput.value = currentQuantity + 1;
                }
                updateCartTotals();
            }

            if (target.closest('.remove-item-btn')) {
                const itemRow = target.closest('.cart-item-row');
                itemRow.remove();
                updateCartTotals();
            }

            if (target.classList.contains('update-cart-btn')) {
                updateCartTotals();
            }

            if (target.classList.contains('proceed-to-checkout-btn')) {
                console.log('Proceeding to Checkout!');
            }

            if (target.classList.contains('apply-coupon-btn')) {
                const couponInput = target.closest('.coupon-input').querySelector('input[type="text"]');
                if (couponInput && couponInput.value.trim() !== '') {
                    console.log(`Coupon "${couponInput.value.trim()}" applied!`);
                    couponInput.value = '';
                } else {
                    if (couponInput) {
                        couponInput.style.borderColor = '#e74c3c';
                        setTimeout(() => {
                            couponInput.style.borderColor = '';
                        }, 1500);
                    }
                }
            }
        });

        cartLayout.addEventListener('change', (event) => {
            const target = event.target;
            if (target.classList.contains('item-quantity')) {
                let currentQuantity = parseInt(target.value);
                if (currentQuantity < parseInt(target.min)) {
                    target.value = parseInt(target.min);
                }
                updateCartTotals();
            }
        });

        function updateCartTotals() {
            let grandTotal = 0;
            const itemRows = document.querySelectorAll('.cart-item-row');

            itemRows.forEach(row => {
                const priceElement = row.querySelector('.col-price');
                const quantityInput = row.querySelector('.item-quantity');
                const subtotalElement = row.querySelector('.col-subtotal');

                if (priceElement && quantityInput && subtotalElement) {
                    const priceText = priceElement.textContent.replace('$', '');
                    const price = parseFloat(priceText);
                    const quantity = parseInt(quantityInput.value);

                    const itemSubtotal = price * quantity;
                    subtotalElement.textContent = `$${itemSubtotal.toFixed(2)}`;
                    grandTotal += itemSubtotal;
                }
            });

            const summarySubtotal = document.querySelector('.order-summary .summary-row:nth-of-type(1) .summary-value');
            if (summarySubtotal) {
                summarySubtotal.textContent = `$${grandTotal.toFixed(2)}`;
            }

            const finalGrandTotal = document.querySelector('.order-summary .grand-total .summary-value');
            if (finalGrandTotal) {
                finalGrandTotal.textContent = `USD $${grandTotal.toFixed(2)}`;
            }
        }

        updateCartTotals();
    }


    