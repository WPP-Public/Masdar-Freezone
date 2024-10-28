$(document).ready(function() {

    $.fn.formatAsCurrencyAED = function(number) {
        // Format the number with commas and currency
        var formattedNumber = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'AED',
            minimumFractionDigits: 0 // Adjust this if you need decimal places
        }).format(number);
    
        // Remove the AED symbol and append 'AED' after the formatted number
        formattedNumber = formattedNumber.replace('AED', '').trim() + ' AED';
    
        // Set the formatted value in the selected element(s)
        this.val(formattedNumber); // 'this' refers to the jQuery element the method is called on
    };
    

    // Prevent default form submission
      $('form#costcalculator').on('submit', function(event) {
          event.preventDefault(); // Prevent the default action (form submission)
          console.log("Form submission prevented."); // Optional: Log a message for debugging
      });
    
      // Global object to store form data
        var formData = null;
  
      // Variables to store selected values
      let selectedOption = null;
      let selectedOptionDesc = null;
      let selectedVisas = null;
      let selectionVisasDesc = null;
      let selectedRadio = null;
      let selectedRadioDesc = null;
      let selectedOption2 = null;
      let selectedOption2Desc = null;
      let activeDiv = null;
  
    // Event listener for the dropdown
    $('.form-select').on('change', function() {
      // Get the selected value from the dropdown
      selectedVisas = $(this).val();
      selectedVisasDesc = $(this).find('option:selected').attr('data-desc');
     });
    
    $('.hidden-checkbox').on('click', function() {
      var inputValue = $(this).find('input').val();
      if (inputValue) {
          // Remove 'selected' class from all other elements
          $('.hidden-checkbox').removeClass('selected');
  
          // Add 'selected' class to the clicked element
          $(this).addClass('selected');
          
          if(currentPage==2){
           // Get the value of the input inside the clicked .hidden-checkbox
           selectedOption = $(this).find('input[type="radio"]').val();
           selectedOptionDesc = $(this).find('input[type="radio"]').attr('data-desc');
          }
  
           if(currentPage==4){
           // Get the value of the input inside the clicked .hidden-checkbox
           selectedOption2 = $(this).find('input[type="radio"]').val();
           selectedOption2Desc = $(this).find('input[type="radio"]').attr('data-desc');
          }
          
          
      }
  });
  
      
      // Function to collect and validate form data
        function collectFormData() {
            var formData = {};
            var isValid = true; // Flag to check if the form is valid
    
            // Loop through all input fields, selects, and textareas
            $('input, select, textarea').each(function () {
                var inputType = $(this).attr('type'); // Get the input type
                var inputName = $(this).attr('name'); // Get the input name
                var inputValue = $(this).val().trim(); // Get the input value and trim spaces
                var $invalidFeedback = $(this).siblings('.invalid-feedback'); // Find the associated invalid feedback element
    
                // Reset previous error messages
                $invalidFeedback.hide();
    
                // Text, Textarea validation (not empty)
                if ((inputType === 'number' || inputType === 'text' || $(this).is('textarea')) && inputValue === '') {
                    $invalidFeedback.text('This field cannot be empty.');
                    $invalidFeedback.show();
                    isValid = false;
                    return true; // Skip to next input
                }
    
                // Email validation
                if (inputType === 'email' && !isValidEmail(inputValue)) {
                    $invalidFeedback.text('Please enter a valid email address.');
                    $invalidFeedback.show();
                    isValid = false;
                    return true; // Skip to next input
                }
    
                // Radio and Checkbox validation: add only if checked
                if ((inputType === 'radio' || inputType === 'checkbox') && !$(this).is(':checked')) {
                    return true; // Skip unchecked radio and checkbox
                }
    
                // Add the value to the formData object if the input is valid
                formData[inputName] = inputValue;
            });
    
            // Return formData and validity status
            return { formData: formData, isValid: isValid };
        }
    
        // Helper function to validate email addresses
        function isValidEmail(email) {
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        }
      
      
        // Initialize the global page variable
        var currentPage = 1;
        
        // Hide all tab panes initially and show the first one
        $('.tab-pane').hide();
        $('.tab-pane').eq(currentPage - 1).show().addClass('active'); // Show the first tab pane (index 0)
    
        // Activate the first nav-link (indicator)
        $('#costcalculator').find('.nav-link').removeClass('active');
        $('#costcalculator').find('.nav-link').eq(currentPage - 1).addClass('active');
        //$('#costcalculator').find('.nav-link').addClass('active');
    
        // Event listener for the next button click
        $('.next-btn').on('click', function() {
          switch(currentPage){
              case 1:
                  formData = collectFormData();
                  if(formData.isValid){
                    // Update the current page number
                    var totalPages = $('.tab-pane').length;
                    if (currentPage < totalPages) {
                        currentPage += 1; // Increment to go to the next page
                    }
            
                    // Hide all tab panes
                    $('.tab-pane').removeClass('active').hide();
                    $('.tab-pane').eq(currentPage - 1).show().addClass('active');
            
                    // Update the indicator
                    updateIndicator(currentPage);
                  }
              break;
  
              case 2:
                   // Trigger validation function
                   if (selectedOption && selectedVisas && selectedVisas !== 'Number of Visas') {
                      // Update the current page number
                      var totalPages = $('.tab-pane').length;
                      if (currentPage < totalPages) {
                          currentPage += 1; // Increment to go to the next page
                      }
              
                      $('.tab-pane').removeClass('active').hide();
                      $('.tab-pane').eq(currentPage - 1).show().addClass('active');
              
                      // Update the indicator
                      updateIndicator(currentPage);
  
                   } else {
                      alert('Please select an option and number of visas.');
                   }
              break;
              case 3:
                
                  activeDiv = $('.tab-pane.show.active');
          
                  // Get all checked radio buttons inside the active div
                  selectedRadio = activeDiv.find('input[type="radio"]:checked').map(function() {
                    return $(this).val(); // Get the value of the checked radio button
                }).get(); // Convert the jQuery object to a regular array
                  selectedRadioDesc = activeDiv.find('input[type="radio"]:checked').map(function() {
                    return $(this).data('desc'); // Get the value of the checked radio button
                }).get(); // Convert the jQuery object to a regular array
      
                      // Check if at least one radio button is selected
                      if (selectedRadio.length > 0) {
                          // If selected, save the value
                      // Update the current page number
                      var totalPages = $('.tab-pane').length;
                      if (currentPage < totalPages) {
                          currentPage += 1; // Increment to go to the next page
                      }
              
                      $('.tab-pane').removeClass('active').hide();
                      $('.tab-pane').eq(currentPage - 1).show().addClass('active');
              
                      // Update the indicator
                      updateIndicator(currentPage);
  
                  }
                  else {
                      alert('Please select at least one option.');
                  }
                  
  
              break;
              case 4:
                $('.next-btn').text('Finish');
                 if (selectedOption2) {
                    
                    // Construct the HTML string
                    var htmlContent = `
                    <p>${formData.formData["firstname*"]} ${formData.formData["lastname*"]}</p>
                    <p>${formData.formData["emailaddress*"]}</p>
                    <p>${formData.formData["phonenumber"]}</p>
                    `;

                    // Use jQuery to output the HTML inside the target div
                    $('#personaldetails').html(htmlContent);

                    // Construct the HTML string
                    var htmlContent2 = `
                    <p>${selectedOption}</p>`;

                    // Use jQuery to output the HTML inside the target div
                    $('#companystructure').html(htmlContent2);


                    // Construct the HTML string, starting from the second value
                    var htmlContent3 = '';

                    for (var i = 1; i < selectedRadio.length; i++) {
                        // Create paragraphs for each option and its description
                        htmlContent3 += `<p>${selectedRadio[i]}</p>`;
                        /*if (selectedRadioDesc[i]) {
                            htmlContent += `<p>${selectedRadioDesc[i]}</p>`;
                        }*/
                    }

                    // Use jQuery to output the HTML inside the target div
                    $('#licensecategory').html(htmlContent3);

                     var htmlContent4 = `
                            <p>${selectedOption2}</p>
                        `;

                      // Use jQuery to output the HTML inside the target div
                      //$('#officeretailleasingoptions').html(htmlContent4);

                      // Update the current page number
                      var totalPages = $('.tab-pane').length;
                      if (currentPage < totalPages) {
                          currentPage += 1; // Increment to go to the next page
                      }
              
                      $('.tab-pane').removeClass('active').hide();
                      $('.tab-pane').eq(currentPage - 1).show().addClass('active');
              
                      // Update the indicator
                      updateIndicator(currentPage);
                  }
                  else {
                      alert('Please select at least one leasing option.');
                  }
              break;
              case 5:
                  console.log("formData",formData);
                  console.log("selectedVisas",selectedVisas);
                  console.log("selectedVisasDesc",selectedVisasDesc);
                  console.log("selectedOption",selectedOption);
                  console.log("selectedOptionDesc",selectedOptionDesc);
                  console.log("selectedRadio",selectedRadio);
                  console.log("selectedRadioDesc",selectedRadioDesc);
                  console.log("selectedOption2",selectedOption2);
                  console.log("selectedOption2Desc",selectedOption2Desc);

                  var totalCompanyStructure = parseFloat(selectedOption) + parseFloat(selectedOptionDesc);
                  var totalLeasingOptions = parseFloat(selectedOption2Desc);
                            var summaryContent = `
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Personal Details</td>
                                <td>${htmlContent}</td>
                            </tr>
                            <tr>
                                <td>Company Structure</td>
                                <td>${htmlContent2}</td>
                            </tr>
                            <tr>
                                <td>License Category</td>
                               <td>${htmlContent3}</td>
                            </tr>
                            <tr>
                                <td>Office & Retail Leasing Options</td>
                                <td>${htmlContent4}</td>
                            </tr>
                        </tbody>
                    </table>
                `;

                // Fill the hidden field with the summary content
                $('#HiddenField-1').val(summaryContent);

                var $submitButton = $('[type="submit"]').closest('.sf-fieldWrp').find('button[type="submit"]');

                // Enable the button
                $submitButton.removeAttr('disabled');

                // fill the values in the hidden fields
                $('#totalprice').formatAsCurrencyAED(totalCompanyStructure + 1000 + totalLeasingOptions);
                $('#companystructure').formatAsCurrencyAED(totalCompanyStructure);
                $('#licensecategory').formatAsCurrencyAED('1000');
                $('#retailleasing').formatAsCurrencyAED(totalLeasingOptions);
                // Trigger the click event
                //$submitButton[0].click(); // Force the click
                $('.thank-you-message').removeClass('hidden');
              break;
          }
  
        });
    
        // Event listener for the previous button click
        $('.previous-btn').on('click', function() {
            $('.next-btn').text('Next');
            // Update the current page number
            if (currentPage > 1) {
                currentPage -= 1; // Decrement to go to the previous page
            }
    
            $('.tab-pane').removeClass('active').hide();
            $('.tab-pane').eq(currentPage - 1).show().addClass('active');
    
            // Update the indicator
            updateIndicator(currentPage);
        });
    
        // Function to update the indicator
        function updateIndicator(pageNumber) {
            $('#costcalculator').find('.nav-link').removeClass('active'); // Remove active class from all indicators
            $('#costcalculator').find('.nav-link').eq(pageNumber - 1).addClass('active'); // Add active class to the current indicator
        }
    });
    