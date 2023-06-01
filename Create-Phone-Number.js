function createPhoneNumber(numbers){
  let phoneNumberForm = '(***) ***-****';
  
  for(let i=0; i< numbers.length; i++){
    phoneNumberForm = phoneNumberForm.replace("*", numbers[i]);
  }
  
  return phoneNumberForm;
}
