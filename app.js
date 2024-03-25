const setDay = document.querySelector('.day')
const setHour = document.querySelector('.hour')
const setSecond = document.querySelector('.second')
const setMinute = document.querySelector('.minute')

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

// const numOfDays = Date.now() + 12 * 86400000
const numOfDays = Date.now() + hour + second*2



const countdown = setInterval( () => {

	const countDate = new Date(numOfDays).getTime()
	const now = new Date().getTime()
	const gap = countDate - now

	// Calculate time from the gap
	const textDay = Math.floor(gap / day)
	const textHour = Math.floor((gap % day) / hour)
	const textMinute = Math.floor((gap % hour) / minute)
	const textSecound = Math.floor((gap % minute) / second)

    if(textSecound < 10 ) {
        setSecond.innerText = '0' + textSecound
    }else{
         setSecond.innerText = textSecound
    }

    if(textMinute < 10 ) {
        setMinute.innerText = '0' + textMinute
    }else{
         setMinute.innerText = textMinute
    }

    if(textHour < 10 ) {
        setHour.innerText = '0' + textHour
    }else{
         setHour.innerText = textHour
    }

    if(textDay < 10 ) {
        setDay.innerText = '0' + textDay
    }else{
         setDay.innerText = textDay
    }

    // if (textSecound === 0) {
    //     console.log('counter should stop now')
    //     clearInterval(countdown)
    //     return
    // }


    
}, 1000)


