const $video = document.querySelector('#video') /* usamos $ para un elemento de html*/ 
const $play = document.querySelector('#play') /* usamos $ para un elemento de html*/ 
const $pause = document.querySelector('#pause') /* usamos $ para un elemento de html*/ 
const $backward = document.querySelector('#backward') /* usamos $ para un elemento de html*/ 
const $forward = document.querySelector('#forward') /* usamos $ para un elemento de html*/ 

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)

function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('le diste click al boton de play')
}
function handlePause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('le diste click al boton de pause')
}

$backward.addEventListener('click', handeBackward)

function handeBackward(){
    $video.currentTime -= 10
    console.log('para atras 10 segundos', $video.currentTime)
}

$forward.addEventListener('click', handleForward)

function handleForward(){
    $video.currentTime += 10
    console.log('para adelante 10 segundos', $video.currentTime)
}

$video.addEventListener('loadedmetadata', handleloaded)
$video.addEventListener('timeupdate', handletimeupdate)

const $progress = document.querySelector('#progress')

function handleloaded(){
    $progress.max = $video.duration
    console.log('Ah cargado el video ', $video.duration)
}

function handletimeupdate(){
    $progress.value = $video.currentTime
  //  console.log('tiempo actual',$video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput(){
    $video.currentTime = $progress.value
    console.log($progress.value)
}
