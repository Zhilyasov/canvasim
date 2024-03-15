import Canvas from './Components/Canvas'
function App() {
	let canvas = document.getElementById('canvas')
	let context = canvas.getContext('2d')

	// context.fillRect(0, 0, canvas.width, canvas.height) // Квадрат с границами

	// // context.strokeStyle = '#FF0000' // Цвет обводки
	// // context.lineWidth = 3 // Ширина линии
	// // context.fillStyle = '#00FF00' // Цвет заливки

	// Размеры холста
	canvas.height = 1000
	canvas.width = 1000

	// 2 квадрата друг на друге
	// context.fillStyle = 'rgb(200, 0, 0)'
	// context.fillRect(15, 15, 100, 100)
	// context.fillStyle = 'rgb(0, 200, 0)'
	// context.fillRect(30, 30, 100, 100)


	// Шахматная доска
	// Внешняя рамка для доски
	context.strokeRect(15, 15, 266, 266)
	// Внутренняя рамка для доски
	context.strokeRect(18, 18, 260, 260)
	// Закрашиваем внутреннюю область черным цветом
	context.fillRect(20, 20, 256, 256)
	for (let i = 0; i < 8; i += 2)
		for (let j = 0; j < 8; j += 2) {
			context.clearRect(20 + i * 32, 20 + j * 32, 32, 32)
			context.clearRect(20 + (i + 1) * 32, 20 + (j + 1) * 32, 32, 32)
		}

	return (
		<div className='App'>
			<Canvas />
		</div>
	)
}

export default App
