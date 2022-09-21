// Tabs
const content = document.querySelectorAll('.tabs__content');
const tab = document.querySelectorAll('.tabs__link');
const slider = document.querySelector('.tabs__slider');

function hideTabContent() {
    content.forEach(item => {
        item.style.display = 'none';
    });
            
    // content.forEach((item, key) => {
    //     if(key>0) {
    //         item.style.display = 'none';
    //     }
    tab.forEach(item => {
        item.classList.remove('tabs__active');
    });
    }
    function showTabContent(i = 0) {
    content[i].style.display = 'grid';
    tab[i].classList.add('tabs__active');
    }
    hideTabContent();
    showTabContent();
    slider.addEventListener("click", (e) => {
    const target = e.target
    if (target) {
        tab.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                })
    }
    })
// export function test() {
//     alert("hola");
// }
    
// Checkbox
// const disabledCheck = document.getElementById('disabled');
// disabledCheck.disabled = true; 


// Form
// $(function(){
//     console.log('Validation - Ready !');
//     $('form[name="registration-form"]').validate({
//         rules: {
//             firstName: 'required',
//             lastName: 'required',
//             emailAddress: {
//                 required: true,
//                 email: true
//         },
//         userName: {
//             required: true,
//             minlength: 1
//         },
//         password: {
//             required: true,
//             minlength: 8
//         },
//         confirmPassword: {
//             required: true,
//             minlength: 8,
//             equalTo: '#password'
//         }
//     },
//     messages: {
//         firstName: 'Please enter your First Name',
//         lastName: 'Please enter your Last Name',
//         emailAddress: 'Please enter a valid Email Address',
//         userName: {
//             required: 'Please enter a User Name',
//             minlength: 'Your User Name must consist of at least 6 characters'
//         },
//         password: {
//             required: 'Please provide a Password',
//             minlength: 'Your Password must be at least 8 characters long'
//         },
//         confirmPassword: {
//             required: 'Please provide a Password',
//             minlength: 'Your Password must be at least 8 characters long',
//             equalTo: 'Please enter the same Password as above'
//         }
//     },
//     errorElement: 'em',
//     errorPlacement: function (error, element) {
//         error.addClass('invalid-feedback');

//         if (element.prop('type') === 'checkbox') {
//             error.insertAfter( element.next('label'));
//         } else {
//             error.insertAfter(element);
//         }
//     },
//     highlight: function (element, errorClass, validClass) {
//         $(element).addClass('is-invalid').removeClass('is-valid');
//     },
//     unhighlight: function (element, errorClass, validClass) {
//         $(element).addClass('is-valid').removeClass('is-invalid');
//     }
//     });
// });

