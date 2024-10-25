
function click1() {
   let f1 = document.getElementsByName("field1");
   let quantity = parseInt(f1[0].value);
   let r = document.getElementById("result");
   let s = document.getElementsByName("select1");
   if (quantity > 0) {
      if (s[0].value === "v1") {
         r.innerHTML = quantity * 10 + " руб.";
      }
      else if (s[0].value === "v2") {
         r.innerHTML = quantity * 15 + " руб.";
      }
   }
   else errorMessage.textContent = "Пожалуйста, введите корректное количество больше нуля.";
   
   return false;
}

document.addEventListener('DOMContentLoaded', () => {
   const quantityInput = document.getElementById('quantity');
   const serviceTypeInputs = document.querySelectorAll('input[name="serviceType"]');
   const optionsContainer = document.getElementById('optionsContainer');
   const optionsSelect = document.getElementById('options');
   const checkboxContainer = document.getElementById('checkboxContainer');
   const propertyCheckbox = document.getElementById('property');
   const totalCostDisplay = document.getElementById('totalCost');

   const prices = {
       type1: 100,
       type2: 200,
       type3: 300
   };

   function updateUI() {
       const selectedType = document.querySelector('input[name="serviceType"]:checked').value;

       if (selectedType === 'type1') {
           optionsContainer.style.display = 'none';
           checkboxContainer.style.display = 'none';
       } else if (selectedType === 'type2') {
           optionsContainer.style.display = 'block';
           checkboxContainer.style.display = 'none';
       } else if (selectedType === 'type3') {
           optionsContainer.style.display = 'none';
           checkboxContainer.style.display = 'block';
       }

       calculateTotal();
   }

   function calculateTotal() {
       const quantity = parseInt(quantityInput.value);
       const selectedType = document.querySelector('input[name="serviceType"]:checked').value;

       let basePrice = prices[selectedType];
       let optionPrice = optionsSelect.value === 'option1' ? 50 : optionsSelect.value === 'option2' ? 100 : 0;
       let propertyPrice = propertyCheckbox.checked ? 30 : 0;

       const totalPrice = (basePrice + optionPrice + propertyPrice) * quantity;
       totalCostDisplay.textContent = totalPrice;
   }

   quantityInput.addEventListener('input', calculateTotal);
   serviceTypeInputs.forEach(input => input.addEventListener('change', updateUI));
   optionsSelect.addEventListener('change', calculateTotal);
   propertyCheckbox.addEventListener('change', calculateTotal);

   // Инициализация UI
   updateUI();
});






