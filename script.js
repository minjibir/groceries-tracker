const submitBtn = document.getElementById('submitBtn')
submitBtn.addEventListener('click', addItem)

const receiptNumberTxt = document.getElementById('receiptNumberTxt')
const totalAmountTxt = document.getElementById('totalAmountTxt')
const purchaseDateTxt = document.getElementById('purchaseDateTxt')


const totalAmount = totalAmountTxt.value
const purchaseDate = purchaseDateTxt.value

receiptNumberTxt.addEventListener('keypress', () => {
	document.getElementById('receiptNumberLabel').textContent = receiptNumberTxt.value
})

// Text display

document.getElementById('totalAmountText').textContent = totalAmount
document.getElementById('purchaseDateText').textContent = purchaseDate

function addItem() {
	// Item
	const itemBarcode = document.getElementById('itemBarcode').value
	const itemName = document.getElementById('itemName').value
	const itemPrice = document.getElementById('itemPrice').value

	// Item Display
	const itemBarcodeText = document.getElementById('itemBarcodeText')
	const itemNameText = document.getElementById('itemNameText')
	const itemPriceText = document.getElementById('itemPriceText')

	// Items display table
	const itemListTable = document.querySelector('#itemListTable')

	// New item row
	const itemTr = document.createElement('tr')

	// New item cells
	const itemBarcodeTd = document.createElement('td')
	const itemNameTd = document.createElement('td')
	const itemPriceTd = document.createElement('td')

	itemBarcodeTd.textContent = itemBarcode
	itemNameTd.textContent = itemName
	itemPriceTd.textContent = itemPrice

	// Add cells to the row-element
	itemTr.appendChild(itemBarcodeTd)
	itemTr.appendChild(itemNameTd)
	itemTr.appendChild(itemPriceTd)

	// Add row-element to the table
	itemListTable.appendChild(itemTr)
}
