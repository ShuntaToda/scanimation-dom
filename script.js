const numberOfBlock = 50

// 三角
const triangle = [
  createTriangle(numberOfBlock, 10),
  createTriangle(numberOfBlock, 20),
  createTriangle(numberOfBlock, 30),
  createTriangle(numberOfBlock, 40),
  createTriangle(numberOfBlock, 50),
  createTriangle(numberOfBlock, 60),
  createTriangle(numberOfBlock, 70),
  createTriangle(numberOfBlock, 80),
  createTriangle(numberOfBlock, 90),
]

// 円
const sector = [
  createSector(numberOfBlock, 30),
  createSector(numberOfBlock, 60),
  createSector(numberOfBlock, 90),
  createSector(numberOfBlock, 120),
  createSector(numberOfBlock, 150),
  createSector(numberOfBlock, 180),
  createSector(numberOfBlock, 210),
  createSector(numberOfBlock, 240),
  createSector(numberOfBlock, 270),
  createSector(numberOfBlock, 300),
  createSector(numberOfBlock, 330),
  createSector(numberOfBlock, 360),
]


// パックマン
const pacman = [
  createSector(numberOfBlock, 335, 15),
  createSector(numberOfBlock, 315, 25),
  createSector(numberOfBlock, 295, 35),
  createSector(numberOfBlock, 285, 45),
  createSector(numberOfBlock, 275, 55),
  createSector(numberOfBlock, 285, 45),
  createSector(numberOfBlock, 295, 35),
  createSector(numberOfBlock, 315, 25),
  createSector(numberOfBlock, 335, 15),
]



const film = document.querySelector(".film")
const showFilmBtn = document.querySelector(".show-film-btn")
const scanimation = document.querySelector(".scanimation")
const imageWrapper = document.querySelector(".image-wrapper")
const filmWrapper = document.querySelector(".film-wrapper")
let isShowFilmBtn = true

const imageMargin = 60

const barSize = 20
let numberOfImage = triangle.length
const gapSize = barSize / numberOfImage - 1
const imageSize = 800
scanimation.style.height = imageSize + "px"
const imageBlockSize = imageSize / numberOfBlock

film.style.width = imageSize * 2
film.style.height = imageSize


imageWrapper.style.height = imageSize + "px"
imageWrapper.style.width = imageSize + "px"

filmWrapper.style.width = (imageSize * 7) + "px"

// スキャニメーション生成
const createScanimation = (image) => {
  imageWrapper.innerHTML = ""
  const contentElWidth = (imageBlockSize / numberOfImage)
  for (let i = 0; i < numberOfBlock; i++) {
    const row = document.createElement("div")
    row.classList.add("image-row")
    row.style.height = imageBlockSize + "px"
    for (let j = 0; j < numberOfBlock; j++) {
      const block = document.createElement("div")
      block.classList.add("image-block")
      block.style.height = "100%"
      image.forEach(content => {
        const imageContentEl = document.createElement("div")
        imageContentEl.style.width = contentElWidth + "px"
        imageContentEl.style.height = "100%"
        if (content[i][j] === 1) {
          imageContentEl.style.background = "black"
        } else {
          imageContentEl.style.background = "transparent"
        }
        block.appendChild(imageContentEl)
      })
      row.appendChild(block)
    }

    imageWrapper.appendChild(row)
  }
  // film追加処理
  film.innerHTML = ""
  for (let i = 0; i < (imageSize / imageBlockSize) * 2; i++) {
    const blackBar = document.createElement("div")
    const bar = document.createElement("div")
    blackBar.classList.add("bar")
    blackBar.style.minWidth = (imageBlockSize - contentElWidth) + "px"
    blackBar.style.width = (imageBlockSize - contentElWidth) + "px"

    bar.style.minWidth = contentElWidth + "px"
    film.appendChild(blackBar)
    film.appendChild(bar)
  }

}
// showFilmBtnが押された時の処理
const handleClickShowFilmBtn = () => {
  if (isShowFilmBtn) {
    film.style.display = "none"
  } else {
    film.style.display = "flex"
  }

  isShowFilmBtn = !isShowFilmBtn
}
createScanimation(triangle)


const triangleBtn = document.querySelector(".triangle-btn")
const sectorBtn = document.querySelector(".sector-btn")
const pacmanBtn = document.querySelector(".pacman-btn")


triangleBtn.addEventListener("click", () => {
  numberOfImage = triangle.length
  createScanimation(triangle)
})
sectorBtn.addEventListener("click", () => {
  numberOfImage = sector.length
  createScanimation(sector)
})
pacmanBtn.addEventListener("click", () => {
  numberOfImage = pacman.length
  createScanimation(pacman)
})
showFilmBtn.addEventListener("click", handleClickShowFilmBtn)
