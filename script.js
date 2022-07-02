const submitBtn = document.querySelector('#submitBtn')
submitBtn.addEventListener('click', addItem)

const receiptNumberTxt = document.querySelector('#receiptNumberTxt')
const totalAmountTxt = document.querySelector('#totalAmountTxt')
const purchaseDateTxt = document.querySelector('#purchaseDateTxt')

receiptNumberTxt.addEventListener('keyup', () => {
	document.querySelector('#receiptNumberLabel').textContent = receiptNumberTxt.value
})

purchaseDateTxt.addEventListener('change', () => {
	document.querySelector('#purchaseDateLabel').textContent = purchaseDateTxt.value
})

const itemsMap = new Map()

let totalAmount = 0

function addItem() {

	// Items display table
	const itemListTable = document.querySelector('#itemListTable')

	// New item row
	const itemTr = document.createElement('tr')

	// New item cells
	const itemBarcodeTd = document.createElement('td')
	const itemNameTd = document.createElement('td')
	const itemPriceTd = document.createElement('td')
	const control = document.createElement('td')

	const removeItemBtn = document.createElement('button')
	removeItemBtn.innerText = "X"

	control.appendChild(removeItemBtn)

	// Item
	const itemBarcodeTxt = document.querySelector('#itemBarcode')
	const itemNameTxt = document.querySelector('#itemName')
	const itemPriceTxt = document.querySelector('#itemPrice')

	const itemBarcode = itemBarcodeTxt.value
	const itemName = itemNameTxt.value
	const itemPrice = itemPriceTxt.value

	itemBarcodeTxt.value = ''
	itemNameTxt.value = ''
	itemPriceTxt.value = ''

	totalAmount += +itemPrice
	document.querySelector('#totalAmountLabel').textContent = totalAmount

	// JSON - Javascript Object Notation
	let item = { "barcode": itemBarcode, "name": itemName, "price": itemPrice }

	itemsMap.set(itemBarcode, item)

	console.log("Items: ", itemsMap)

	itemBarcodeTd.textContent = itemBarcode
	itemNameTd.textContent = itemName
	itemPriceTd.textContent = itemPrice

	// Add cells to the row-element
	itemTr.appendChild(itemBarcodeTd)
	itemTr.appendChild(itemNameTd)
	itemTr.appendChild(itemPriceTd)
	itemTr.appendChild(control)

	// Add row-element to the table
	itemListTable.appendChild(itemTr)

	removeItemBtn.addEventListener('click', () => {
		const row = removeItemBtn.parentElement.parentElement
		const itemBarcodeKey = row.firstChild.textContent

		itemsMap.delete(itemBarcodeKey)

		itemListTable.removeChild(row)

		console.log(itemsMap)
	})

}
