const idAddContact = document.getElementById("add-contact");

SetItemLocalStorage = () => {
  window.localStorage.setItem('contacts', JSON.stringify(localStorGetItemJSON));
}


function editContact(id) {
  idAddContact.style = "display: none";
  idEditContact.style = "display: none";
  idNewContactForm.style = "display: block";

  for (let i = 0; i < localStorGetItemJSON.length; i++) {
    if (localStorGetItemJSON[i].id == id) {
      document.getElementById("contact-name").value = localStorGetItemJSON[i].name;
      document.getElementById("contact-company").value = localStorGetItemJSON[i].company;
      document.getElementById("contact-email").value = localStorGetItemJSON[i].email;
      document.getElementById("contact-phone").value = localStorGetItemJSON[i].phone;
      document.getElementById("contact-twitter").value = localStorGetItemJSON[i].twitter;
      document.getElementById("contact-notes").value = localStorGetItemJSON[i].notes;
      localStorGetItemJSON.splice(i ,1);
      alert("You selected to edit a contact. Please do NOT refresh your browser and make sure to push the 'Save Contact' button, even if you do not want to make changes to the contact. Otherwise the contact will be DELETED!")
      SetItemLocalStorage();

      for (i = 0; i < classButtonEdit.length; i++) {
        classButtonEdit.item(i).style.display = "none";
        }

      for (i = 0; i < classButtonRemove.length; i++) {
        classButtonRemove.item(i).style.display = "none";
        }

      idDeleteContact.style = "display: none";
      topFunction()
      }
    }  
};
