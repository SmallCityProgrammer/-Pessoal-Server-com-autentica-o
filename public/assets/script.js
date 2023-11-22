let currentProductId; // Inicializa o valor do product._id

const handleDelete = async (productId) => {
try {
  const response = await fetch(`/${productId}`, {
    method: "DELETE"
  });

  if (!response.ok) {
    throw new Error('Failed to delete');
  }
  
  window.location.href = "/home";
} catch (error) {
  console.error('Error deleting:', error);
}
};

const showEditForm = async (productId) => {
  currentProductId = productId; // Guarda o product._id
  const changeForm = document.getElementById('change-form');
  changeForm.style.display = 'block';
  
  const closeButton = document.getElementById('closeBtn')
  closeButton.addEventListener('click', () => {
    changeForm.style.display = 'none';
  });
};


const submit = document.querySelector('#update-btn');
submit.addEventListener('click', async (event) => {
event.preventDefault();

const newName = document.querySelector('#newName').value;
const newPrice = document.querySelector('#newPrice').value;
const newQuantity = document.querySelector('#newQuantity').value;

const updatedFields = {};

  if (newName.trim() !== '') {
    updatedFields.name = newName;
  }
  if (newPrice.trim() !== '') {
    updatedFields.price = newPrice;
  }
  if (newQuantity.trim() !== '') {
    updatedFields.quantity = newQuantity;
  }

try {
  const response = await fetch(`/${currentProductId}`, {
    method: "PUT",
    body: JSON.stringify(updatedFields),
    headers: {
      'Content-Type': 'application/json'
    },
  });

  if (!response.ok) {
    throw new Error('Failed to update');
  }

  window.location.href = "/";
} catch (error) {
  console.error('Error updating:', error);
}
});